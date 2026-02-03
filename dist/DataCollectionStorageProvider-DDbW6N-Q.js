import { jsx as _, jsxs as K, Fragment as lt } from "react/jsx-runtime";
import * as pe from "react";
import C, { useRef as Me, useState as he, useCallback as tt, useEffect as Le, useContext as ft, useMemo as Ze, useLayoutEffect as V1, createContext as Ft, isValidElement as Nt, Children as Hr, PureComponent as jt, forwardRef as ze, useImperativeHandle as dT, cloneElement as Ue, createElement as G1, Component as Y1, useId as pT } from "react";
import { bc as Kv, ba as hT, eO as vT, J as _r, bQ as X1, y as te, bI as yT, eP as mT, eQ as gT, z as fh, _ as Ii, eR as eo, bn as Ae, Y as bT, eS as xT, eT as wT, dd as OT, eU as ST, eV as _T, bJ as AT, eW as PT, V as Et, an as _s, ck as Z1, cl as dh, bN as J1, eX as gn, eY as TT, eZ as ET, e_ as CT, e$ as Vv, f0 as Gv, f1 as Yv, f2 as Xv, f3 as Zv, f4 as Q1, f5 as bo, f6 as jT, f7 as MT, cK as Ka, f8 as $T, a0 as fe, cf as IT, bt as eO, bu as tO, bv as rO, by as nO, cX as DT, d2 as ph, ek as kT, cI as aO, bU as NT, dN as RT, cT as Di, bA as LT, au as qT, w as Gt, af as iO, aF as BT, aG as oO, ad as FT, aD as ki, eE as As, aH as zT, f9 as WT, K as rn, fa as UT, cS as HT, fb as KT, eA as sO, dG as VT, G as Ht, am as hh, ai as GT, aj as YT, ak as XT, a9 as uO, bR as cO, aa as ZT, ab as JT, R as nn, Z as lO, aN as QT, as as fO, a7 as dO, bL as eE, dI as pO, dJ as hO, er as vO, at as yO, Q as St, N as mO, fc as gO, al as tE, ar as bO, ac as rE, dz as Ye, fd as xO, fe as wO, ff as $d, fg as nE, fh as Jv, dC as aE, dD as Qv, a5 as iE, a6 as oE, a8 as sE, eM as uE, aS as cE, dX as lE, eC as fE, fi as dE, bT as pE, X as Da, W as hE, cP as vE, b6 as yE, dv as mE, dw as gE, eF as bE, ao as xE, ap as wE, aq as OE, av as SE } from "./F0AiChat-CCEhq1HB.js";
const _E = {
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
function AE(e, t) {
  const r = e.scrollSnapList();
  return typeof t == "number" ? r.map(() => t) : t(r, e);
}
function PE(e, t) {
  const r = e.rootNode();
  return t && t(r) || r;
}
function vh(e = {}) {
  let t, r, n, a, i = null, o = 0, s = !1, u = !1, c = !1, l = !1;
  function f(j, I) {
    r = j;
    const {
      mergeOptions: k,
      optionsAtMedia: R
    } = I, L = k(_E, vh.globalOptions), z = k(L, e);
    if (t = R(z), r.scrollSnapList().length <= 1) return;
    l = t.jump, n = !1, a = AE(r, t.delay);
    const {
      eventStore: N,
      ownerDocument: B
    } = r.internalEngine(), q = !!r.internalEngine().options.watchDrag, H = PE(r, t.rootNode);
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
  function S(j) {
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
    } = r.internalEngine(), I = j.clone().add(1).get(), k = r.scrollSnapList().length - 1, R = t.stopOnLastSnap && I === k;
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
    play: S,
    stop: A,
    reset: P,
    isPlaying: D,
    timeUntilNext: $
  };
}
vh.globalOptions = void 0;
function Kr() {
  return Kr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kr.apply(this, arguments);
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
function ey(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function Tn(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && Tn(t);
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
  return Tn({
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
  return Tn({
    observe: r,
    unobserve: n,
    disconnect: a
  });
}
var DE = 16 * 1.125, kE = typeof window < "u" && window.innerHeight || 800, gu = [1, DE, kE];
function NE(e) {
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
  return Kr({}, e, {
    axisDelta: e.axisDelta.map(function(n, a) {
      return n * r[a];
    })
  });
}
var ty = 700, qE = function(t) {
  return Kr({}, t, {
    axisDelta: t.axisDelta.map(function(r) {
      return ME(r, -ty, ty);
    })
  });
}, bu = process.env.NODE_ENV !== "production", BE = 0.6, FE = 0.96, zE = 2, ry = 5, ny = /* @__PURE__ */ Tn({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), WE = 400;
function ay() {
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
  var t = $E(), r = t.on, n = t.off, a = t.dispatch, i = ny, o = ay(), s, u = !1, c, l = function(j) {
    Array.isArray(j) ? j.forEach(function(I) {
      return y(I);
    }) : y(j);
  }, f = function(j) {
    return j === void 0 && (j = {}), Object.values(j).some(function(I) {
      return I == null;
    }) ? (bu && console.error("updateOptions ignored! undefined & null options not allowed"), i) : i = Tn(Kr({}, ny, i, j));
  }, d = function(j) {
    var I = Kr({
      event: s,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: o.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: o.axisVelocity,
      axisMovement: o.axisMovement,
      get axisMovementProjection() {
        return mu(I.axisMovement, I.axisVelocity.map(function(k) {
          return EE(k);
        }));
      }
    }, j);
    a("wheel", Kr({}, I, {
      previous: c
    })), c = I;
  }, p = function(j, I) {
    var k = i, R = k.preventWheelAction, L = I[0], z = I[1], N = I[2];
    if (typeof R == "boolean") return R;
    switch (R) {
      case "x":
        return Math.abs(L) >= j;
      case "y":
        return Math.abs(z) >= j;
      case "z":
        return Math.abs(N) >= j;
      default:
        return bu && console.warn("unsupported preventWheelAction value: " + R, "warn"), !1;
    }
  }, y = function(j) {
    var I = qE(LE(NE(j), i.reverseSign)), k = I.axisDelta, R = I.timeStamp, L = ey(k);
    if (j.preventDefault && p(L, k) && j.preventDefault(), o.isStarted ? o.isMomentum && L > Math.max(2, o.lastAbsDelta * 2) && (A(!0), w()) : w(), L === 0 && Object.is && Object.is(j.deltaX, -0)) {
      u = !0;
      return;
    }
    s = j, o.axisMovement = mu(o.axisMovement, k), o.lastAbsDelta = L, o.scrollPointsToMerge.push({
      axisDelta: k,
      timeStamp: R
    }), h(), d({
      axisDelta: k,
      isStart: !o.isStartPublished
    }), o.isStartPublished = !0, S();
  }, h = function() {
    o.scrollPointsToMerge.length === zE ? (o.scrollPoints.unshift({
      axisDeltaSum: o.scrollPointsToMerge.map(function(j) {
        return j.axisDelta;
      }).reduce(mu),
      timeStamp: jE(o.scrollPointsToMerge.map(function(j) {
        return j.timeStamp;
      }))
    }), b(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || O()) : o.isStartPublished || v();
  }, v = function() {
    o.axisVelocity = CE(o.scrollPointsToMerge).axisDelta.map(function(j) {
      return j / o.willEndTimeout;
    });
  }, b = function() {
    var j = o.scrollPoints, I = j[0], k = j[1];
    if (!(!k || !I)) {
      var R = I.timeStamp - k.timeStamp;
      if (R <= 0) {
        bu && console.warn("invalid deltaTime");
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
    return j === 0 ? !0 : j <= FE && j >= BE;
  }, O = function() {
    if (o.accelerationFactors.length >= ry) {
      if (u && (u = !1, ey(o.axisVelocity) >= 0.2)) {
        m();
        return;
      }
      var j = o.accelerationFactors.slice(ry * -1), I = j.every(function(k) {
        var R = !!k.reduce(function(z, N) {
          return z && z < 1 && z === N ? 1 : 0;
        }), L = k.filter(x).length === k.length;
        return R || L;
      });
      I && m(), o.accelerationFactors = j;
    }
  }, m = function() {
    o.isMomentum = !0;
  }, w = function() {
    o = ay(), o.isStarted = !0, o.startTime = Date.now(), c = void 0, u = !1;
  }, S = /* @__PURE__ */ (function() {
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
  }, P = IE(l), D = P.observe, T = P.unobserve, $ = P.disconnect;
  return f(e), Tn({
    on: r,
    off: n,
    observe: D,
    unobserve: T,
    disconnect: $,
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
yh.globalOptions = void 0;
var KE = process.env.NODE_ENV !== "production";
function yh(e) {
  e === void 0 && (e = {});
  var t, r = function() {
  };
  function n(i, o) {
    var s, u, c = o.mergeOptions, l = o.optionsAtMedia, f = c(HE, yh.globalOptions), d = c(f, e);
    t = l(d);
    var p = i.internalEngine(), y = (s = t.target) != null ? s : i.containerNode().parentNode, h = (u = t.forceWheelAxis) != null ? u : p.options.axis, v = UE({
      preventWheelAction: h,
      reverseSign: [!0, !0, !1]
    }), b = v.observe(y), g = v.on("wheel", $), x = !1, O;
    function m(M) {
      try {
        O = new MouseEvent("mousedown", M.event), T(O);
      } catch {
        return KE && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), r();
      }
      x = !0, S(), t.wheelDraggingClass && y.classList.add(t.wheelDraggingClass);
    }
    function w(M) {
      x = !1, T(D("mouseup", M)), A(), t.wheelDraggingClass && y.classList.remove(t.wheelDraggingClass);
    }
    function S() {
      document.documentElement.addEventListener("mousemove", P, !0), document.documentElement.addEventListener("mouseup", P, !0), document.documentElement.addEventListener("mousedown", P, !0);
    }
    function A() {
      document.documentElement.removeEventListener("mousemove", P, !0), document.documentElement.removeEventListener("mouseup", P, !0), document.documentElement.removeEventListener("mousedown", P, !0);
    }
    function P(M) {
      x && M.isTrusted && M.stopImmediatePropagation();
    }
    function D(M, j) {
      var I, k;
      if (h === p.options.axis) {
        var R = j.axisMovement;
        I = R[0], k = R[1];
      } else {
        var L = j.axisMovement;
        k = L[0], I = L[1];
      }
      if (!p.options.skipSnaps && !p.options.dragFree) {
        var z = p.containerRect.width, N = p.containerRect.height;
        I = I < 0 ? Math.max(I, -z) : Math.min(I, z), k = k < 0 ? Math.max(k, -N) : Math.min(k, N);
      }
      return new MouseEvent(M, {
        clientX: O.clientX + I,
        clientY: O.clientY + k,
        screenX: O.screenX + I,
        screenY: O.screenY + k,
        movementX: I,
        movementY: k,
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
      var j = M.axisDelta, I = j[0], k = j[1], R = h === "x" ? I : k, L = h === "x" ? k : I, z = M.isMomentum && M.previous && !M.previous.isMomentum, N = M.isEnding && !M.isMomentum || z, B = Math.abs(R) > Math.abs(L);
      B && !x && !M.isMomentum && m(M), x && (N ? w(M) : T(D("mousemove", M)));
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
function VE(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function iy(e) {
  return VE(e) || Array.isArray(e);
}
function GE() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function mh(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== i ? !1 : r.every((o) => {
    const s = e[o], u = t[o];
    return typeof s == "function" ? `${s}` == `${u}` : !iy(s) || !iy(u) ? s === u : mh(s, u);
  });
}
function oy(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function YE(e, t) {
  if (e.length !== t.length) return !1;
  const r = oy(e), n = oy(t);
  return r.every((a, i) => {
    const o = n[i];
    return mh(a, o);
  });
}
function gh(e) {
  return typeof e == "number";
}
function Id(e) {
  return typeof e == "string";
}
function Ps(e) {
  return typeof e == "boolean";
}
function sy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function De(e) {
  return Math.abs(e);
}
function bh(e) {
  return Math.sign(e);
}
function ka(e, t) {
  return De(e - t);
}
function XE(e, t) {
  if (e === 0 || t === 0 || De(e) <= De(t)) return 0;
  const r = ka(De(e), De(t));
  return De(r / e);
}
function ZE(e) {
  return Math.round(e * 100) / 100;
}
function Va(e) {
  return Ga(e).map(Number);
}
function Rt(e) {
  return e[Ni(e)];
}
function Ni(e) {
  return Math.max(0, e.length - 1);
}
function xh(e, t) {
  return t === Ni(e);
}
function uy(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function Ga(e) {
  return Object.keys(e);
}
function OO(e, t) {
  return [e, t].reduce((r, n) => (Ga(n).forEach((a) => {
    const i = r[a], o = n[a], s = sy(i) && sy(o);
    r[a] = s ? OO(i, o) : o;
  }), r), {});
}
function Dd(e, t) {
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
function Ya() {
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
  const a = Ya(), i = 1e3 / 60;
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
function Zr(e = 0, t = 0) {
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
function SO(e, t, r) {
  const {
    constrain: n
  } = Zr(0, e), a = e + 1;
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
    return SO(e, s(), r);
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
  }, S = Ya(), A = Ya(), P = Zr(50, 225).constrain(p.measure(20)), D = {
    mouse: 300,
    touch: 400
  }, T = {
    mouse: 500,
    touch: 600
  }, $ = y ? 43 : 25;
  let M = !1, j = 0, I = 0, k = !1, R = !1, L = !1, z = !1;
  function N(E) {
    if (!g) return;
    function Y(ae) {
      (Ps(g) || g(E, ae)) && ne(ae);
    }
    const F = t;
    S.add(F, "dragstart", (ae) => ae.preventDefault(), w).add(F, "touchmove", () => {
    }, w).add(F, "touchend", () => {
    }).add(F, "touchstart", Y).add(F, "mousedown", Y).add(F, "touchcancel", J).add(F, "contextmenu", J).add(F, "click", U, !0);
  }
  function B() {
    S.clear(), A.clear();
  }
  function q() {
    const E = z ? r : t;
    A.add(E, "touchmove", Q, w).add(E, "touchend", J).add(E, "mousemove", Q, w).add(E, "mouseup", J);
  }
  function H(E) {
    const Y = E.nodeName || "";
    return m.includes(Y);
  }
  function X() {
    return (y ? T : D)[z ? "mouse" : "touch"];
  }
  function ee(E, Y) {
    const F = f.add(bh(E) * -1), ae = l.byDistance(E, !y).distance;
    return y || De(E) < P ? ae : v && Y ? ae * 0.5 : l.byIndex(F.get(), 0).distance;
  }
  function ne(E) {
    const Y = Dd(E, n);
    z = Y, L = y && Y && !E.buttons && M, M = ka(a.get(), o.get()) >= 2, !(Y && E.button !== 0) && (H(E.target) || (k = !0, i.pointerDown(E), c.useFriction(0).useDuration(0), a.set(o), q(), j = i.readPoint(E), I = i.readPoint(E, x), d.emit("pointerDown")));
  }
  function Q(E) {
    if (!Dd(E, n) && E.touches.length >= 2) return J(E);
    const F = i.readPoint(E), ae = i.readPoint(E, x), ce = ka(F, j), oe = ka(ae, I);
    if (!R && !z && (!E.cancelable || (R = ce > oe, !R)))
      return J(E);
    const Se = i.pointerMove(E);
    ce > h && (L = !0), c.useFriction(0.3).useDuration(0.75), s.start(), a.add(O(Se)), E.preventDefault();
  }
  function J(E) {
    const F = l.byDistance(0, !1).index !== f.get(), ae = i.pointerUp(E) * X(), ce = ee(O(ae), F), oe = XE(ae, ce), Se = $ - 10 * oe, Te = b + oe / 50;
    R = !1, k = !1, A.clear(), c.useDuration(Se).useFriction(Te), u.distance(ce, !y), z = !1, d.emit("pointerUp");
  }
  function U(E) {
    L && (E.stopPropagation(), E.preventDefault(), L = !1);
  }
  function V() {
    return k;
  }
  return {
    init: N,
    destroy: B,
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
    return (Dd(f, t) ? f : f.touches[0])[y];
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
        const O = x.target === e, m = n.indexOf(x.target), w = O ? c : l[m], S = d(O ? e : n[m]);
        if (De(S - w) >= 0.5) {
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
    const w = n.get() - e.get(), S = !u;
    let A = 0;
    return S ? (o = 0, r.set(n), e.set(n), A = w) : (r.set(e), o += w / u, o *= c, l += o, e.add(o), A = l - f), s = bh(A), f = l, m;
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
function sC(e, t, r, n, a) {
  const i = a.measure(10), o = a.measure(50), s = Zr(0.1, 0.99);
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
function uC(e, t, r, n, a) {
  const i = Zr(-t + e, 0), o = f(), s = l(), u = d();
  function c(y, h) {
    return ka(y, h) <= 1;
  }
  function l() {
    const y = o[0], h = Rt(o), v = o.lastIndexOf(y), b = o.indexOf(h) + 1;
    return Zr(v, b);
  }
  function f() {
    return r.map((y, h) => {
      const {
        min: v,
        max: b
      } = i, g = i.constrain(y), x = !h, O = xh(r, h);
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
    limit: Zr(a, n)
  };
}
function lC(e, t, r, n) {
  const i = t.min + 0.1, o = t.max + 0.1, {
    reachedMin: s,
    reachedMax: u
  } = Zr(i, o);
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
    return s(n).map((h) => Rt(h)[o] - h[0][i]).map(De);
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
      const b = !h, g = xh(v, h);
      if (b) {
        const x = Rt(v[0]) + 1;
        return uy(x);
      }
      if (g) {
        const x = Ni(i) - Rt(v)[0] + 1;
        return uy(x, Rt(v)[0]);
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
    const b = v.filter((g) => bh(g) === h);
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
      gh(g) && (a.useDuration(0), n.index(g, 0), o.emit("slideFocus"));
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
function ja(e) {
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
    return gh(u) ? u : u.get();
  }
  return {
    get: r,
    set: n,
    add: a,
    subtract: i
  };
}
function _O(e, t) {
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
  const l = Va(a), f = Va(a).reverse(), d = b().concat(g());
  function p(S, A) {
    return S.reduce((P, D) => P - a[D], A);
  }
  function y(S, A) {
    return S.reduce((P, D) => p(P, A) > 0 ? P.concat([D]) : P, []);
  }
  function h(S) {
    return i.map((A, P) => ({
      start: A - n[P] + 0.5 + S,
      end: A + t - 0.5 + S
    }));
  }
  function v(S, A, P) {
    const D = h(A);
    return S.map((T) => {
      const $ = P ? 0 : -r, M = P ? r : 0, j = P ? "end" : "start", I = D[T][j];
      return {
        index: T,
        loopPoint: I,
        slideLocation: ja(-1),
        translate: _O(e, u[T]),
        target: () => s.get() > I ? $ : M
      };
    });
  }
  function b() {
    const S = o[0], A = y(f, S);
    return v(A, r, !1);
  }
  function g() {
    const S = t - o[0] - 1, A = y(l, S);
    return v(A, -r, !0);
  }
  function x() {
    return d.every(({
      index: S
    }) => {
      const A = l.filter((P) => P !== S);
      return p(A, t) <= 0.1;
    });
  }
  function O() {
    d.forEach((S) => {
      const {
        target: A,
        translate: P,
        slideLocation: D
      } = S, T = A();
      T !== D.get() && (P.to(T), D.set(T));
    });
  }
  function m() {
    d.forEach((S) => S.translate.clear());
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
    return Ga(a).reduce((h, v) => {
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
    return De(t[s] - g[s]);
  }
  function h() {
    if (!c) return 0;
    const g = i.getComputedStyle(Rt(n));
    return parseFloat(g.getPropertyValue(`margin-${u}`));
  }
  function v() {
    return r.map((g, x, O) => {
      const m = !x, w = xh(O, x);
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
function wC(e, t, r, n, a, i, o, s, u) {
  const {
    startEdge: c,
    endEdge: l,
    direction: f
  } = e, d = gh(r);
  function p(b, g) {
    return Va(b).filter((x) => x % g === 0).map((x) => b.slice(x, x + g));
  }
  function y(b) {
    return b.length ? Va(b).reduce((g, x, O) => {
      const m = Rt(g) || 0, w = m === 0, S = x === Ni(b), A = a[c] - i[m][c], P = a[c] - i[x][l], D = !n && w ? f(o) : 0, T = !n && S ? f(s) : 0, $ = De(P - T - (A + D));
      return O && $ > t + u && g.push(x), S && g.push(b.length), g;
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
  } = i, S = 2, A = nC(), P = A.measure(t), D = r.map(A.measure), T = eC(u, c), $ = T.measureSize(P), M = aC($), j = JE(s, $), I = !f && !!g, k = f || !!g, {
    slideSizes: R,
    slideSizesWithGaps: L,
    startGap: z,
    endGap: N
  } = xC(T, P, D, r, k, a), B = wC(T, $, v, f, P, D, z, N, S), {
    snaps: q,
    snapsAligned: H
  } = dC(T, j, P, D, B), X = -Rt(q) + Rt(L), {
    snapsContained: ee,
    scrollContainLimit: ne
  } = uC($, X, H, g, S), Q = I ? ee : H, {
    limit: J
  } = cC(X, Q, f), U = SO(Ni(Q), l, f), V = U.clone(), Z = Va(r), E = ({
    dragHandler: dn,
    scrollBody: vu,
    scrollBounds: yu,
    options: {
      loop: Qi
    }
  }) => {
    Qi || yu.constrain(dn.pointerDown()), vu.seek();
  }, Y = ({
    scrollBody: dn,
    translate: vu,
    location: yu,
    offsetLocation: Qi,
    previousLocation: aT,
    scrollLooper: iT,
    slideLooper: oT,
    dragHandler: sT,
    animation: uT,
    eventHandler: Bv,
    scrollBounds: cT,
    options: {
      loop: Fv
    }
  }, zv) => {
    const Wv = dn.settled(), lT = !cT.shouldConstrain(), Uv = Fv ? Wv : Wv && lT, Hv = Uv && !sT.pointerDown();
    Hv && uT.stop();
    const fT = yu.get() * zv + aT.get() * (1 - zv);
    Qi.set(fT), Fv && (iT.loop(dn.direction()), oT.loop()), vu.to(Qi.get()), Hv && Bv.emit("settle"), Uv || Bv.emit("scroll");
  }, F = QE(n, a, () => E(hu), (dn) => Y(hu, dn)), ae = 0.68, ce = Q[U.get()], oe = ja(ce), Se = ja(ce), Te = ja(ce), me = ja(ce), ye = oC(oe, Te, Se, me, d, ae), qe = hC(f, Q, X, J, me), er = vC(F, U, V, ye, qe, me, o), ln = fC(J), fn = Ya(), Ji = bC(t, r, o, h), {
    slideRegistry: ya
  } = pC(I, g, Q, ne, B, Z), nT = yC(e, r, ya, er, ye, fn, o, w), hu = {
    ownerDocument: n,
    ownerWindow: a,
    eventHandler: o,
    containerRect: P,
    slideRects: D,
    animation: F,
    axis: T,
    dragHandler: tC(T, e, n, a, me, rC(T, a), oe, F, er, ye, qe, U, o, M, p, y, b, ae, m),
    eventStore: fn,
    percentOfView: M,
    index: U,
    indexPrevious: V,
    limit: J,
    location: oe,
    offsetLocation: Te,
    previousLocation: Se,
    options: i,
    resizeHandler: iC(t, o, a, r, T, x, A),
    scrollBody: ye,
    scrollBounds: sC(J, Te, me, ye, M),
    scrollLooper: lC(X, J, Te, [oe, Te, Se, me]),
    scrollProgress: ln,
    scrollSnapList: Q.map(ln.get),
    scrollSnaps: Q,
    scrollTarget: qe,
    scrollTo: er,
    slideLooper: mC(T, $, X, R, L, q, Q, Te, r),
    slideFocus: nT,
    slidesHandler: gC(t, o, O),
    slidesInView: Ji,
    slideIndexes: Z,
    slideRegistry: ya,
    slidesToScroll: B,
    target: me,
    translate: _O(T, t)
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
const _C = {
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
function AC(e) {
  function t(i, o) {
    return OO(i, o || {});
  }
  function r(i) {
    const o = i.breakpoints || {}, s = Ga(o).filter((u) => e.matchMedia(u).matches).map((u) => o[u]).reduce((u, c) => t(u, c), {});
    return t(i, s);
  }
  function n(i) {
    return i.map((o) => Ga(o.breakpoints || {})).reduce((o, s) => o.concat(s), []).map(e.matchMedia);
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
function wo(e, t, r) {
  const n = e.ownerDocument, a = n.defaultView, i = AC(a), o = PC(i), s = Ya(), u = SC(), {
    mergeOptions: c,
    optionsAtMedia: l,
    optionsMediaQueries: f
  } = i, {
    on: d,
    off: p,
    emit: y
  } = u, h = T;
  let v = !1, b, g = c(_C, wo.globalOptions), x = c(g), O = [], m, w, S;
  function A() {
    const {
      container: Z,
      slides: E
    } = x;
    w = (Id(Z) ? e.querySelector(Z) : Z) || e.children[0];
    const F = Id(E) ? w.querySelectorAll(E) : E;
    S = [].slice.call(F || w.children);
  }
  function P(Z) {
    const E = OC(e, w, S, n, a, Z, u);
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
    }) => Y)]).forEach((Y) => s.add(Y, "change", T)), x.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(V), b.eventHandler.init(V), b.resizeHandler.init(V), b.slidesHandler.init(V), b.options.loop && b.slideLooper.loop(), w.offsetParent && S.length && b.dragHandler.init(V), m = o.init(V, O)));
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
  function k(Z) {
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
  function ee() {
    return m;
  }
  function ne() {
    return b;
  }
  function Q() {
    return e;
  }
  function J() {
    return w;
  }
  function U() {
    return S;
  }
  const V = {
    canScrollNext: R,
    canScrollPrev: L,
    containerNode: J,
    internalEngine: ne,
    destroy: M,
    off: p,
    on: d,
    emit: y,
    plugins: ee,
    previousScrollSnap: q,
    reInit: h,
    rootNode: Q,
    scrollNext: I,
    scrollPrev: k,
    scrollProgress: N,
    scrollSnapList: z,
    scrollTo: j,
    selectedScrollSnap: B,
    slideNodes: U,
    slidesInView: H,
    slidesNotInView: X
  };
  return D(t, r), setTimeout(() => u.emit("init"), 0), V;
}
wo.globalOptions = void 0;
function wh(e = {}, t = []) {
  const r = Me(e), n = Me(t), [a, i] = he(), [o, s] = he(), u = tt(() => {
    a && a.reInit(r.current, n.current);
  }, [a]);
  return Le(() => {
    mh(r.current, e) || (r.current = e, u());
  }, [e, u]), Le(() => {
    YE(n.current, t) || (n.current = t, u());
  }, [t, u]), Le(() => {
    if (GE() && o) {
      wo.globalOptions = wh.globalOptions;
      const c = wo(o, r.current, n.current);
      return i(c), () => c.destroy();
    } else
      i(void 0);
  }, [o, i]), [s, a];
}
wh.globalOptions = void 0;
function OU({ children: e, isValidProp: t, ...r }) {
  t && vT(t), r = { ...ft(Kv), ...r }, r.isStatic = hT(() => r.isStatic);
  const n = Ze(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return _(Kv.Provider, { value: n, children: e });
}
const ke = 28, cy = 16, TC = ({ children: e }) => {
  const t = Me(null), [r, n] = he(!0), [a, i] = he(!1);
  V1(() => {
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
  return a && r ? c = `linear-gradient(to right, transparent 0px, transparent ${ke}px, black ${2 * ke}px, black calc(100% - ${3 * ke}px), transparent calc(100% - ${2 * ke}px), transparent 100%)` : a && !r ? c = `linear-gradient(to right, transparent 0px, transparent ${ke}px, black ${2 * ke}px, black 100%)` : !a && r ? c = `linear-gradient(to right, black 0px, black calc(100% - ${3 * ke}px), transparent calc(100% - ${2 * ke}px), transparent 100%)` : c = "none", K("div", {
    className: "relative",
    children: [_("div", {
      ref: t,
      className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
      style: {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        margin: `-${ke}px`,
        padding: `${ke}px`,
        height: `calc(100% + ${ke * 2}px)`,
        width: `calc(100% + ${ke * 2}px)`,
        maskImage: c,
        WebkitMaskImage: c,
        scrollSnapType: "x mandatory"
      },
      children: Array.isArray(e) ? e.map((l, f) => _("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: ke + cy + "px"
        },
        children: l
      }, f)) : e && _("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: ke + cy + "px"
        },
        children: e
      })
    }), a && _(_r, {
      size: "lg",
      compact: !0,
      variant: "outline",
      className: te("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: s,
      icon: X1,
      label: "Previous",
      hideLabel: !0
    }), r && _(_r, {
      size: "lg",
      variant: "outline",
      compact: !0,
      className: te("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: o,
      icon: yT,
      label: "Next",
      hideLabel: !0
    })]
  });
}, AO = pe.createContext(null);
function Ri() {
  const e = pe.useContext(AO);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const PO = pe.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: r, plugins: n, className: a, children: i, ...o }, s) => {
  const [u, c] = wh({
    ...t,
    axis: e === "horizontal" ? "x" : "y"
  }, n), [l, f] = pe.useState(!1), [d, p] = pe.useState(!1), y = pe.useCallback((g) => {
    g && (f(g.canScrollPrev()), p(g.canScrollNext()));
  }, []), h = pe.useCallback(() => {
    c?.scrollPrev();
  }, [c]), v = pe.useCallback(() => {
    c?.scrollNext();
  }, [c]), b = pe.useCallback((g) => {
    g.key === "ArrowLeft" ? (g.preventDefault(), h()) : g.key === "ArrowRight" && (g.preventDefault(), v());
  }, [h, v]);
  return pe.useEffect(() => {
    !c || !r || r(c);
  }, [c, r]), pe.useEffect(() => {
    if (c)
      return y(c), c.on("reInit", y), c.on("select", y), () => {
        c?.off("select", y);
      };
  }, [c, y]), _(AO.Provider, {
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
    children: _("div", {
      ref: s,
      onKeyDownCapture: b,
      className: te("group/carousel relative", a),
      role: "region",
      "aria-roledescription": "carousel",
      ...o,
      children: i
    })
  });
});
PO.displayName = "Carousel";
const TO = pe.forwardRef(({ className: e, ...t }, r) => {
  const n = `linear-gradient(to right, transparent 0px, transparent ${ke / 2}px, black ${ke}px, black calc(100% - ${ke}px), transparent calc(100% - ${ke / 2}px), transparent 100%)`, { carouselRef: a, orientation: i } = Ri();
  return _("div", {
    ref: a,
    className: "overflow-hidden",
    style: {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      margin: `-${ke}px`,
      padding: `${ke}px`,
      height: `calc(100% + ${ke * 2}px)`,
      width: `calc(100% + ${ke * 2}px)`,
      maskImage: n,
      WebkitMaskImage: n
    },
    children: _("div", {
      ref: r,
      className: te("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    })
  });
});
TO.displayName = "CarouselContent";
const EO = pe.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = Ri();
  return _("div", {
    ref: r,
    role: "group",
    "aria-roledescription": "slide",
    className: te("min-w-0 shrink-0 grow-0 basis-full", n === "horizontal" ? "pl-4" : "pt-4", e),
    ...t
  });
});
EO.displayName = "CarouselItem";
const CO = pe.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: o } = Ri();
  return _("div", {
    className: te("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: _(_r, {
      compact: !0,
      ref: n,
      size: "sm",
      variant: t,
      className: te("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Previous",
      icon: mT,
      hideLabel: !0
    })
  });
});
CO.displayName = "CarouselPrevious";
const jO = pe.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollNext: i, canScrollNext: o } = Ri();
  return _("div", {
    className: te("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: _(_r, {
      ref: n,
      size: "sm",
      variant: t,
      compact: !0,
      className: te("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Next",
      icon: gT,
      hideLabel: !0
    })
  });
});
jO.displayName = "CarouselNext";
const MO = pe.forwardRef(({ ...e }, t) => {
  const { api: r } = Ri(), [, n] = pe.useState(!1), a = pe.useRef(null), i = pe.useCallback(() => {
    n((d) => !d);
  }, []);
  pe.useEffect(() => {
    if (r)
      return r.on("select", i), r.on("reInit", i), () => {
        r.off("select", i), r.off("reInit", i);
      };
  }, [r, i]);
  const o = r?.scrollSnapList().length || 0, s = r?.selectedScrollSnap() || 0;
  if (pe.useEffect(() => {
    if (!a.current) return;
    const d = a.current, p = 16, y = s * p - d.clientWidth / 2 + p / 2;
    d.scrollTo({
      left: y,
      behavior: "smooth"
    });
  }, [s]), pe.useEffect(() => {
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
  return _("div", {
    ref: t,
    className: te("flex justify-center", e.className),
    children: _("div", {
      className: "relative overflow-hidden",
      style: {
        width: `${l}px`
      },
      children: _("div", {
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
        children: c.map((d) => _("button", {
          className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
          "aria-label": `Go to slide ${d + 1}`,
          "aria-current": d === s ? "true" : void 0,
          onClick: () => r?.scrollTo(d),
          tabIndex: -1,
          children: _("div", {
            className: te("h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]", d === s && "rounded-[3px] opacity-100 group-hover/dot:opacity-100", f(d))
          })
        }, d))
      })
    })
  });
});
MO.displayName = "CarouselDots";
const EC = fh({
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
function ma(e, t, r) {
  if (r) {
    const n = (e || 1) / 2;
    return t ? `peek${n}` : n;
  }
  return t ? `peek${e || 1}` : e || 1;
}
const CC = ({ children: e, columns: t, showArrows: r = !0, showDots: n = !0, autoplay: a = !1, delay: i = 3e3, showPeek: o = !1, doubleColumns: s }) => {
  const u = C.Children.toArray(e), c = C.useRef(a ? vh({
    delay: i,
    stopOnInteraction: !0
  }) : void 0), l = () => {
    c.current && c.current.stop();
  }, f = () => {
    c.current && c.current.play();
  };
  return t ? _(PO, {
    className: "flex w-full flex-col gap-3 @container",
    opts: {
      align: o ? "center" : "start",
      slidesToScroll: "auto",
      duration: 20,
      containScroll: !1
    },
    plugins: [c.current, yh()].filter(Boolean),
    onMouseEnter: a ? l : void 0,
    onMouseLeave: a ? f : void 0,
    children: K("div", {
      className: "flex flex-col gap-5",
      children: [K("div", {
        className: "relative",
        children: [_(TO, {
          children: C.Children.map(u, (d, p) => {
            const y = s?.find((h) => h.index === p);
            return _(EO, {
              className: EC({
                default: ma(t.default, o),
                xs: ma(t.xs, o, y?.sizes?.includes("xs")),
                sm: ma(t.sm, o, y?.sizes?.includes("sm")),
                md: ma(t.md, o, y?.sizes?.includes("md")),
                lg: ma(t.lg, o, y?.sizes?.includes("lg")),
                peek: o
              }),
              children: d
            }, p);
          })
        }), r && K(lt, {
          children: [_(CO, {
            label: "Previous"
          }), _(jO, {
            label: "Next"
          })]
        })]
      }), n && _(MO, {})]
    })
  }) : _(TC, {
    children: e
  });
}, SU = Ii("Carousel", CC), $O = Ft(null);
function _U({ children: e, layout: t }) {
  return _($O.Provider, {
    value: t,
    children: e
  });
}
function AU() {
  return ft($O);
}
var xu, ly;
function jC() {
  if (ly) return xu;
  ly = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return xu = e, xu;
}
var wu, fy;
function Oh() {
  if (fy) return wu;
  fy = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return wu = e, wu;
}
var Ou, dy;
function Ts() {
  if (dy) return Ou;
  dy = 1;
  var e = Oh();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return Ou = t, Ou;
}
var Su, py;
function MC() {
  if (py) return Su;
  py = 1;
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
var _u, hy;
function $C() {
  if (hy) return _u;
  hy = 1;
  var e = Ts();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return _u = t, _u;
}
var Au, vy;
function IC() {
  if (vy) return Au;
  vy = 1;
  var e = Ts();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Au = t, Au;
}
var Pu, yy;
function DC() {
  if (yy) return Pu;
  yy = 1;
  var e = Ts();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return Pu = t, Pu;
}
var Tu, my;
function Es() {
  if (my) return Tu;
  my = 1;
  var e = jC(), t = MC(), r = $C(), n = IC(), a = DC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Tu = i, Tu;
}
var Eu, gy;
function kC() {
  if (gy) return Eu;
  gy = 1;
  var e = Es();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Eu = t, Eu;
}
var Cu, by;
function NC() {
  if (by) return Cu;
  by = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Cu = e, Cu;
}
var ju, xy;
function RC() {
  if (xy) return ju;
  xy = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return ju = e, ju;
}
var Mu, wy;
function LC() {
  if (wy) return Mu;
  wy = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Mu = e, Mu;
}
var $u, Oy;
function IO() {
  if (Oy) return $u;
  Oy = 1;
  var e = typeof eo == "object" && eo && eo.Object === Object && eo;
  return $u = e, $u;
}
var Iu, Sy;
function Jt() {
  if (Sy) return Iu;
  Sy = 1;
  var e = IO(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Iu = r, Iu;
}
var Du, _y;
function Li() {
  if (_y) return Du;
  _y = 1;
  var e = Jt(), t = e.Symbol;
  return Du = t, Du;
}
var ku, Ay;
function qC() {
  if (Ay) return ku;
  Ay = 1;
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
  return ku = i, ku;
}
var Nu, Py;
function BC() {
  if (Py) return Nu;
  Py = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Nu = r, Nu;
}
var Ru, Ty;
function fr() {
  if (Ty) return Ru;
  Ty = 1;
  var e = Li(), t = qC(), r = BC(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? t(s) : r(s);
  }
  return Ru = o, Ru;
}
var Lu, Ey;
function Pr() {
  if (Ey) return Lu;
  Ey = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Lu = e, Lu;
}
var qu, Cy;
function Sh() {
  if (Cy) return qu;
  Cy = 1;
  var e = fr(), t = Pr(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var u = e(s);
    return u == n || u == a || u == r || u == i;
  }
  return qu = o, qu;
}
var Bu, jy;
function FC() {
  if (jy) return Bu;
  jy = 1;
  var e = Jt(), t = e["__core-js_shared__"];
  return Bu = t, Bu;
}
var Fu, My;
function zC() {
  if (My) return Fu;
  My = 1;
  var e = FC(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Fu = r, Fu;
}
var zu, $y;
function DO() {
  if ($y) return zu;
  $y = 1;
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
var Wu, Iy;
function WC() {
  if (Iy) return Wu;
  Iy = 1;
  var e = Sh(), t = zC(), r = Pr(), n = DO(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, c = s.hasOwnProperty, l = RegExp(
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
var Uu, Dy;
function UC() {
  if (Dy) return Uu;
  Dy = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Uu = e, Uu;
}
var Hu, ky;
function an() {
  if (ky) return Hu;
  ky = 1;
  var e = WC(), t = UC();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return Hu = r, Hu;
}
var Ku, Ny;
function _h() {
  if (Ny) return Ku;
  Ny = 1;
  var e = an(), t = Jt(), r = e(t, "Map");
  return Ku = r, Ku;
}
var Vu, Ry;
function Cs() {
  if (Ry) return Vu;
  Ry = 1;
  var e = an(), t = e(Object, "create");
  return Vu = t, Vu;
}
var Gu, Ly;
function HC() {
  if (Ly) return Gu;
  Ly = 1;
  var e = Cs();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Gu = t, Gu;
}
var Yu, qy;
function KC() {
  if (qy) return Yu;
  qy = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Yu = e, Yu;
}
var Xu, By;
function VC() {
  if (By) return Xu;
  By = 1;
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
var Zu, Fy;
function GC() {
  if (Fy) return Zu;
  Fy = 1;
  var e = Cs(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return Zu = n, Zu;
}
var Ju, zy;
function YC() {
  if (zy) return Ju;
  zy = 1;
  var e = Cs(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return Ju = r, Ju;
}
var Qu, Wy;
function XC() {
  if (Wy) return Qu;
  Wy = 1;
  var e = HC(), t = KC(), r = VC(), n = GC(), a = YC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Qu = i, Qu;
}
var ec, Uy;
function ZC() {
  if (Uy) return ec;
  Uy = 1;
  var e = XC(), t = Es(), r = _h();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return ec = n, ec;
}
var tc, Hy;
function JC() {
  if (Hy) return tc;
  Hy = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return tc = e, tc;
}
var rc, Ky;
function js() {
  if (Ky) return rc;
  Ky = 1;
  var e = JC();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return rc = t, rc;
}
var nc, Vy;
function QC() {
  if (Vy) return nc;
  Vy = 1;
  var e = js();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return nc = t, nc;
}
var ac, Gy;
function ej() {
  if (Gy) return ac;
  Gy = 1;
  var e = js();
  function t(r) {
    return e(this, r).get(r);
  }
  return ac = t, ac;
}
var ic, Yy;
function tj() {
  if (Yy) return ic;
  Yy = 1;
  var e = js();
  function t(r) {
    return e(this, r).has(r);
  }
  return ic = t, ic;
}
var oc, Xy;
function rj() {
  if (Xy) return oc;
  Xy = 1;
  var e = js();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return oc = t, oc;
}
var sc, Zy;
function Ah() {
  if (Zy) return sc;
  Zy = 1;
  var e = ZC(), t = QC(), r = ej(), n = tj(), a = rj();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, sc = i, sc;
}
var uc, Jy;
function nj() {
  if (Jy) return uc;
  Jy = 1;
  var e = Es(), t = _h(), r = Ah(), n = 200;
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
var cc, Qy;
function kO() {
  if (Qy) return cc;
  Qy = 1;
  var e = Es(), t = kC(), r = NC(), n = RC(), a = LC(), i = nj();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, cc = o, cc;
}
var lc, em;
function aj() {
  if (em) return lc;
  em = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return lc = t, lc;
}
var fc, tm;
function ij() {
  if (tm) return fc;
  tm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return fc = e, fc;
}
var dc, rm;
function NO() {
  if (rm) return dc;
  rm = 1;
  var e = Ah(), t = aj(), r = ij();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, dc = n, dc;
}
var pc, nm;
function RO() {
  if (nm) return pc;
  nm = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return pc = e, pc;
}
var hc, am;
function LO() {
  if (am) return hc;
  am = 1;
  function e(t, r) {
    return t.has(r);
  }
  return hc = e, hc;
}
var vc, im;
function qO() {
  if (im) return vc;
  im = 1;
  var e = NO(), t = RO(), r = LO(), n = 1, a = 2;
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
        if (!t(s, function(S, A) {
          if (!r(x, A) && (O === S || l(O, S, u, c, f)))
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
  return vc = i, vc;
}
var yc, om;
function oj() {
  if (om) return yc;
  om = 1;
  var e = Jt(), t = e.Uint8Array;
  return yc = t, yc;
}
var mc, sm;
function sj() {
  if (sm) return mc;
  sm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return mc = e, mc;
}
var gc, um;
function Ph() {
  if (um) return gc;
  um = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return gc = e, gc;
}
var bc, cm;
function uj() {
  if (cm) return bc;
  cm = 1;
  var e = Li(), t = oj(), r = Oh(), n = qO(), a = sj(), i = Ph(), o = 1, s = 2, u = "[object Boolean]", c = "[object Date]", l = "[object Error]", f = "[object Map]", d = "[object Number]", p = "[object RegExp]", y = "[object Set]", h = "[object String]", v = "[object Symbol]", b = "[object ArrayBuffer]", g = "[object DataView]", x = e ? e.prototype : void 0, O = x ? x.valueOf : void 0;
  function m(w, S, A, P, D, T, $) {
    switch (A) {
      case g:
        if (w.byteLength != S.byteLength || w.byteOffset != S.byteOffset)
          return !1;
        w = w.buffer, S = S.buffer;
      case b:
        return !(w.byteLength != S.byteLength || !T(new t(w), new t(S)));
      case u:
      case c:
      case d:
        return r(+w, +S);
      case l:
        return w.name == S.name && w.message == S.message;
      case p:
      case h:
        return w == S + "";
      case f:
        var M = a;
      case y:
        var j = P & o;
        if (M || (M = i), w.size != S.size && !j)
          return !1;
        var I = $.get(w);
        if (I)
          return I == S;
        P |= s, $.set(w, S);
        var k = n(M(w), M(S), P, D, T, $);
        return $.delete(w), k;
      case v:
        if (O)
          return O.call(w) == O.call(S);
    }
    return !1;
  }
  return bc = m, bc;
}
var xc, lm;
function BO() {
  if (lm) return xc;
  lm = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return xc = e, xc;
}
var wc, fm;
function dt() {
  if (fm) return wc;
  fm = 1;
  var e = Array.isArray;
  return wc = e, wc;
}
var Oc, dm;
function cj() {
  if (dm) return Oc;
  dm = 1;
  var e = BO(), t = dt();
  function r(n, a, i) {
    var o = a(n);
    return t(n) ? o : e(o, i(n));
  }
  return Oc = r, Oc;
}
var Sc, pm;
function lj() {
  if (pm) return Sc;
  pm = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
      var s = t[n];
      r(s, n, t) && (o[i++] = s);
    }
    return o;
  }
  return Sc = e, Sc;
}
var _c, hm;
function fj() {
  if (hm) return _c;
  hm = 1;
  function e() {
    return [];
  }
  return _c = e, _c;
}
var Ac, vm;
function dj() {
  if (vm) return Ac;
  vm = 1;
  var e = lj(), t = fj(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return Ac = i, Ac;
}
var Pc, ym;
function pj() {
  if (ym) return Pc;
  ym = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return Pc = e, Pc;
}
var Tc, mm;
function dr() {
  if (mm) return Tc;
  mm = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Tc = e, Tc;
}
var Ec, gm;
function hj() {
  if (gm) return Ec;
  gm = 1;
  var e = fr(), t = dr(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Ec = n, Ec;
}
var Cc, bm;
function Th() {
  if (bm) return Cc;
  bm = 1;
  var e = hj(), t = dr(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return Cc = i, Cc;
}
var Ma = { exports: {} }, jc, xm;
function vj() {
  if (xm) return jc;
  xm = 1;
  function e() {
    return !1;
  }
  return jc = e, jc;
}
Ma.exports;
var wm;
function FO() {
  return wm || (wm = 1, (function(e, t) {
    var r = Jt(), n = vj(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
    e.exports = c;
  })(Ma, Ma.exports)), Ma.exports;
}
var Mc, Om;
function Eh() {
  if (Om) return Mc;
  Om = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Mc = r, Mc;
}
var $c, Sm;
function Ch() {
  if (Sm) return $c;
  Sm = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return $c = t, $c;
}
var Ic, _m;
function yj() {
  if (_m) return Ic;
  _m = 1;
  var e = fr(), t = Ch(), r = dr(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", c = "[object Map]", l = "[object Number]", f = "[object Object]", d = "[object RegExp]", p = "[object Set]", y = "[object String]", h = "[object WeakMap]", v = "[object ArrayBuffer]", b = "[object DataView]", g = "[object Float32Array]", x = "[object Float64Array]", O = "[object Int8Array]", m = "[object Int16Array]", w = "[object Int32Array]", S = "[object Uint8Array]", A = "[object Uint8ClampedArray]", P = "[object Uint16Array]", D = "[object Uint32Array]", T = {};
  T[g] = T[x] = T[O] = T[m] = T[w] = T[S] = T[A] = T[P] = T[D] = !0, T[n] = T[a] = T[v] = T[i] = T[b] = T[o] = T[s] = T[u] = T[c] = T[l] = T[f] = T[d] = T[p] = T[y] = T[h] = !1;
  function $(M) {
    return r(M) && t(M.length) && !!T[e(M)];
  }
  return Ic = $, Ic;
}
var Dc, Am;
function zO() {
  if (Am) return Dc;
  Am = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Dc = e, Dc;
}
var $a = { exports: {} };
$a.exports;
var Pm;
function mj() {
  return Pm || (Pm = 1, (function(e, t) {
    var r = IO(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, s = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })($a, $a.exports)), $a.exports;
}
var kc, Tm;
function WO() {
  if (Tm) return kc;
  Tm = 1;
  var e = yj(), t = zO(), r = mj(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return kc = a, kc;
}
var Nc, Em;
function gj() {
  if (Em) return Nc;
  Em = 1;
  var e = pj(), t = Th(), r = dt(), n = FO(), a = Eh(), i = WO(), o = Object.prototype, s = o.hasOwnProperty;
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
  return Nc = u, Nc;
}
var Rc, Cm;
function bj() {
  if (Cm) return Rc;
  Cm = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return Rc = t, Rc;
}
var Lc, jm;
function UO() {
  if (jm) return Lc;
  jm = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Lc = e, Lc;
}
var qc, Mm;
function xj() {
  if (Mm) return qc;
  Mm = 1;
  var e = UO(), t = e(Object.keys, Object);
  return qc = t, qc;
}
var Bc, $m;
function wj() {
  if ($m) return Bc;
  $m = 1;
  var e = bj(), t = xj(), r = Object.prototype, n = r.hasOwnProperty;
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
var Fc, Im;
function qi() {
  if (Im) return Fc;
  Im = 1;
  var e = Sh(), t = Ch();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Fc = r, Fc;
}
var zc, Dm;
function Ms() {
  if (Dm) return zc;
  Dm = 1;
  var e = gj(), t = wj(), r = qi();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return zc = n, zc;
}
var Wc, km;
function Oj() {
  if (km) return Wc;
  km = 1;
  var e = cj(), t = dj(), r = Ms();
  function n(a) {
    return e(a, r, t);
  }
  return Wc = n, Wc;
}
var Uc, Nm;
function Sj() {
  if (Nm) return Uc;
  Nm = 1;
  var e = Oj(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
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
      var w = i[b], S = o[b];
      if (u)
        var A = f ? u(S, w, b, o, i, l) : u(w, S, b, i, o, l);
      if (!(A === void 0 ? w === S || c(w, S, s, u, l) : A)) {
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
  return Uc = a, Uc;
}
var Hc, Rm;
function _j() {
  if (Rm) return Hc;
  Rm = 1;
  var e = an(), t = Jt(), r = e(t, "DataView");
  return Hc = r, Hc;
}
var Kc, Lm;
function Aj() {
  if (Lm) return Kc;
  Lm = 1;
  var e = an(), t = Jt(), r = e(t, "Promise");
  return Kc = r, Kc;
}
var Vc, qm;
function HO() {
  if (qm) return Vc;
  qm = 1;
  var e = an(), t = Jt(), r = e(t, "Set");
  return Vc = r, Vc;
}
var Gc, Bm;
function Pj() {
  if (Bm) return Gc;
  Bm = 1;
  var e = an(), t = Jt(), r = e(t, "WeakMap");
  return Gc = r, Gc;
}
var Yc, Fm;
function Tj() {
  if (Fm) return Yc;
  Fm = 1;
  var e = _j(), t = _h(), r = Aj(), n = HO(), a = Pj(), i = fr(), o = DO(), s = "[object Map]", u = "[object Object]", c = "[object Promise]", l = "[object Set]", f = "[object WeakMap]", d = "[object DataView]", p = o(e), y = o(t), h = o(r), v = o(n), b = o(a), g = i;
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
var Xc, zm;
function Ej() {
  if (zm) return Xc;
  zm = 1;
  var e = kO(), t = qO(), r = uj(), n = Sj(), a = Tj(), i = dt(), o = FO(), s = WO(), u = 1, c = "[object Arguments]", l = "[object Array]", f = "[object Object]", d = Object.prototype, p = d.hasOwnProperty;
  function y(h, v, b, g, x, O) {
    var m = i(h), w = i(v), S = m ? l : a(h), A = w ? l : a(v);
    S = S == c ? f : S, A = A == c ? f : A;
    var P = S == f, D = A == f, T = S == A;
    if (T && o(h)) {
      if (!o(v))
        return !1;
      m = !0, P = !1;
    }
    if (T && !P)
      return O || (O = new e()), m || s(h) ? t(h, v, b, g, x, O) : r(h, v, S, b, g, x, O);
    if (!(b & u)) {
      var $ = P && p.call(h, "__wrapped__"), M = D && p.call(v, "__wrapped__");
      if ($ || M) {
        var j = $ ? h.value() : h, I = M ? v.value() : v;
        return O || (O = new e()), x(j, I, b, g, O);
      }
    }
    return T ? (O || (O = new e()), n(h, v, b, g, x, O)) : !1;
  }
  return Xc = y, Xc;
}
var Zc, Wm;
function jh() {
  if (Wm) return Zc;
  Wm = 1;
  var e = Ej(), t = dr();
  function r(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, o, r, s);
  }
  return Zc = r, Zc;
}
var Jc, Um;
function Cj() {
  if (Um) return Jc;
  Um = 1;
  var e = jh();
  function t(r, n) {
    return e(r, n);
  }
  return Jc = t, Jc;
}
var jj = Cj();
const Jr = /* @__PURE__ */ Ae(jj), Mj = [], $j = (e) => {
  const { open: t, onOpenChange: r, ...n } = e, a = Mj.reduce((i, o) => {
    const { [o]: s, ...u } = i;
    return u;
  }, n);
  return _(bT, {
    ...a,
    open: t,
    onOpenChange: r,
    align: e.align || "end"
  });
}, KO = Ii("Dropdown", $j), Ij = ({ items: e, children: t }) => {
  const [r, n] = he(!1);
  return K(xT, {
    open: r,
    onOpenChange: n,
    children: [_(wT, {
      asChild: !0,
      children: t || _(_r, {
        label: "Other actions",
        icon: OT,
        variant: "outline",
        size: "lg",
        pressed: r,
        noTitle: !0
      })
    }), _(ST, {
      className: "bg-f1-background-overlay"
    }), _(_T, {
      className: "bg-f1-background",
      children: _("div", {
        className: "flex flex-col px-2 pb-3 pt-2",
        children: e.map((a, i) => a.type === "separator" ? _("div", {
          className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary"
        }, `separator-${i}`) : a.type === "label" ? _("span", {
          className: "flex-1 px-3 py-2 text-xs font-medium leading-4 text-f1-foreground-secondary",
          children: a.text
        }, `label-${i}`) : a.href ? _(AT, {
          href: a.href,
          className: te("flex w-full items-start gap-1.5", a.critical && "text-f1-foreground-critical", "text-f1-foreground no-underline hover:cursor-pointer"),
          children: _(PT, {
            item: a
          })
        }, `link-${i}`) : K("button", {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), a.onClick?.(), n(!1);
          },
          className: "flex w-full items-center gap-2 p-3",
          children: [a.icon && _("span", {
            className: te("h-5 w-5 text-f1-icon", a.critical && "text-f1-icon-critical"),
            children: _(Et, {
              icon: a.icon,
              size: "md"
            })
          }), _("span", {
            className: te("font-medium", a.critical ? "text-f1-foreground-critical" : "text-f1-foreground"),
            children: a.label
          })]
        }, a.label))
      })
    })]
  });
}, PU = Ii("MobileDropdown", Ij), Dj = fh({
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
}), kj = ({ type: e, size: t, "aria-label": r, "aria-labelledby": n }) => {
  const a = {
    critical: J1,
    warning: dh,
    info: Z1,
    positive: _s
  };
  return _("div", {
    className: Dj({
      type: e,
      size: t
    }),
    "aria-label": r,
    "aria-labelledby": n,
    role: "alert",
    children: _(Et, {
      icon: a[e],
      size: t
    })
  });
};
function Nj(e, t) {
  const r = gn(e), n = gn(t), a = r.getTime() - n.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Mh(e) {
  return TT(e, Date.now());
}
function Rj(e) {
  return (t) => {
    const n = (e ? Math[e] : Math.trunc)(t);
    return n === 0 ? 0 : n;
  };
}
function Lj(e, t, r) {
  const n = ET(), a = r?.locale ?? n.locale ?? CT, i = Nj(e, t);
  if (isNaN(i))
    throw new RangeError("Invalid time value");
  const o = Object.assign({}, r, {
    addSuffix: r?.addSuffix,
    comparison: i
  });
  let s, u;
  i > 0 ? (s = gn(t), u = gn(e)) : (s = gn(e), u = gn(t));
  const c = Rj(r?.roundingMethod ?? "round"), l = u.getTime() - s.getTime(), f = l / Zv, d = Vv(u) - Vv(s), p = (l - d) / Zv, y = r?.unit;
  let h;
  if (y ? h = y : f < 1 ? h = "second" : f < 60 ? h = "minute" : f < Gv ? h = "hour" : p < Yv ? h = "day" : p < Xv ? h = "month" : h = "year", h === "second") {
    const v = c(l / 1e3);
    return a.formatDistance("xSeconds", v, o);
  } else if (h === "minute") {
    const v = c(f);
    return a.formatDistance("xMinutes", v, o);
  } else if (h === "hour") {
    const v = c(f / 60);
    return a.formatDistance("xHours", v, o);
  } else if (h === "day") {
    const v = c(p / Gv);
    return a.formatDistance("xDays", v, o);
  } else if (h === "month") {
    const v = c(p / Yv);
    return v === 12 && y !== "month" ? a.formatDistance("xYears", 1, o) : a.formatDistance("xMonths", v, o);
  } else {
    const v = c(p / Xv);
    return a.formatDistance("xYears", v, o);
  }
}
function qj(e, t) {
  return Lj(e, Mh(e), t);
}
function VO(e) {
  return Q1(e, Mh(e));
}
function GO(e) {
  return Q1(e, bo(Mh(e), 1));
}
function ga(e, t) {
  return jT(e, -t);
}
function Hm(e, t) {
  return MT(e, -t);
}
function TU(e) {
  return Ka(e, "p");
}
function EU(e) {
  return Ka(e, "HH:mm");
}
function Bj(e) {
  return Ka(e, "LLL");
}
function Fj(e) {
  return e.getDate();
}
function Km(e, t = !0) {
  return qj(e, { addSuffix: t });
}
function CU(e, { yesterdayRelative: t = !0 } = {}) {
  return VO(e) ? Km(e) : GO(e) ? t ? Km(e) : Ka(e, "p") : Ka(e, "PPPp");
}
const jU = (e, t) => {
  const r = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return e.forEach((n) => {
    const a = n[t], i = Math.abs($T(a, /* @__PURE__ */ new Date()));
    VO(a) ? r.today.push(n) : GO(a) ? r.yesterday.push(n) : i <= 7 ? r.lastWeek.push(n) : i <= 30 ? r.lastMonth.push(n) : r[a.getFullYear()] = [...r[a.getFullYear()] || [], n];
  }), r;
}, MU = ({ date: e, "aria-label": t, "aria-labelledby": r }) => {
  const n = Fj(e), a = Bj(e);
  return K("div", {
    className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary",
    "aria-label": t,
    "aria-labelledby": r,
    children: [_("div", {
      className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary",
      children: a
    }), _("div", {
      className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground",
      children: n
    })]
  });
}, zj = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Wj = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += zj[r[e] & 63];
  return t;
};
var Qc, Vm;
function ra() {
  if (Vm) return Qc;
  Vm = 1;
  var e = fr(), t = dr(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return Qc = n, Qc;
}
var el, Gm;
function $h() {
  if (Gm) return el;
  Gm = 1;
  var e = dt(), t = ra(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || t(i) ? !0 : n.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return el = a, el;
}
var tl, Ym;
function YO() {
  if (Ym) return tl;
  Ym = 1;
  var e = Ah(), t = "Expected a function";
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
var rl, Xm;
function Uj() {
  if (Xm) return rl;
  Xm = 1;
  var e = YO(), t = 500;
  function r(n) {
    var a = e(n, function(o) {
      return i.size === t && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return rl = r, rl;
}
var nl, Zm;
function Hj() {
  if (Zm) return nl;
  Zm = 1;
  var e = Uj(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, s, u, c) {
      i.push(u ? c.replace(r, "$1") : s || o);
    }), i;
  });
  return nl = n, nl;
}
var al, Jm;
function Ih() {
  if (Jm) return al;
  Jm = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return al = e, al;
}
var il, Qm;
function Kj() {
  if (Qm) return il;
  Qm = 1;
  var e = Li(), t = Ih(), r = dt(), n = ra(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
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
var ol, eg;
function XO() {
  if (eg) return ol;
  eg = 1;
  var e = Kj();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return ol = t, ol;
}
var sl, tg;
function ZO() {
  if (tg) return sl;
  tg = 1;
  var e = dt(), t = $h(), r = Hj(), n = XO();
  function a(i, o) {
    return e(i) ? i : t(i, o) ? [i] : r(n(i));
  }
  return sl = a, sl;
}
var ul, rg;
function $s() {
  if (rg) return ul;
  rg = 1;
  var e = ra();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return ul = t, ul;
}
var cl, ng;
function Dh() {
  if (ng) return cl;
  ng = 1;
  var e = ZO(), t = $s();
  function r(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[t(a[i++])];
    return i && i == o ? n : void 0;
  }
  return cl = r, cl;
}
var ll, ag;
function JO() {
  if (ag) return ll;
  ag = 1;
  var e = Dh();
  function t(r, n, a) {
    var i = r == null ? void 0 : e(r, n);
    return i === void 0 ? a : i;
  }
  return ll = t, ll;
}
var Vj = JO();
const gt = /* @__PURE__ */ Ae(Vj);
var fl, ig;
function Gj() {
  if (ig) return fl;
  ig = 1;
  function e(t) {
    return t == null;
  }
  return fl = e, fl;
}
var Yj = Gj();
const le = /* @__PURE__ */ Ae(Yj);
var dl, og;
function Xj() {
  if (og) return dl;
  og = 1;
  var e = fr(), t = dt(), r = dr(), n = "[object String]";
  function a(i) {
    return typeof i == "string" || !t(i) && r(i) && e(i) == n;
  }
  return dl = a, dl;
}
var Zj = Xj();
const Bi = /* @__PURE__ */ Ae(Zj);
var Jj = Sh();
const ue = /* @__PURE__ */ Ae(Jj);
var Qj = Pr();
const na = /* @__PURE__ */ Ae(Qj);
var to = { exports: {} }, ge = {};
var sg;
function eM() {
  if (sg) return ge;
  sg = 1;
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
var ug;
function tM() {
  return ug || (ug = 1, process.env.NODE_ENV !== "production" && (function() {
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
    var w = o, S = i, A = e, P = u, D = r, T = d, $ = f, M = t, j = a, I = n, k = c, R = l, L = !1, z = !1;
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
    function ee(F) {
      return m(F) === u;
    }
    function ne(F) {
      return m(F) === r;
    }
    function Q(F) {
      return m(F) === d;
    }
    function J(F) {
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
    be.ContextConsumer = w, be.ContextProvider = S, be.Element = A, be.ForwardRef = P, be.Fragment = D, be.Lazy = T, be.Memo = $, be.Portal = M, be.Profiler = j, be.StrictMode = I, be.Suspense = k, be.SuspenseList = R, be.isAsyncMode = N, be.isConcurrentMode = B, be.isContextConsumer = q, be.isContextProvider = H, be.isElement = X, be.isForwardRef = ee, be.isFragment = ne, be.isLazy = Q, be.isMemo = J, be.isPortal = U, be.isProfiler = V, be.isStrictMode = Z, be.isSuspense = E, be.isSuspenseList = Y, be.isValidElementType = O, be.typeOf = m;
  })()), be;
}
var cg;
function rM() {
  return cg || (cg = 1, process.env.NODE_ENV === "production" ? to.exports = eM() : to.exports = tM()), to.exports;
}
var nM = rM(), pl, lg;
function QO() {
  if (lg) return pl;
  lg = 1;
  var e = fr(), t = dr(), r = "[object Number]";
  function n(a) {
    return typeof a == "number" || t(a) && e(a) == r;
  }
  return pl = n, pl;
}
var hl, fg;
function aM() {
  if (fg) return hl;
  fg = 1;
  var e = QO();
  function t(r) {
    return e(r) && r != +r;
  }
  return hl = t, hl;
}
var iM = aM();
const aa = /* @__PURE__ */ Ae(iM);
var oM = QO();
const sM = /* @__PURE__ */ Ae(oM);
var it = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Br = function(t) {
  return Bi(t) && t.indexOf("%") === t.length - 1;
}, G = function(t) {
  return sM(t) && !aa(t);
}, Ve = function(t) {
  return G(t) || Bi(t);
}, uM = 0, on = function(t) {
  var r = ++uM;
  return "".concat(t || "").concat(r);
}, ot = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!G(t) && !Bi(t))
    return n;
  var i;
  if (Br(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return aa(i) && (i = n), a && i > r && (i = r), i;
}, xr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, cM = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, a = 0; a < r; a++)
    if (!n[t[a]])
      n[t[a]] = !0;
    else
      return !0;
  return !1;
}, He = function(t, r) {
  return G(t) && G(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Oo(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : gt(n, t)) === r;
  });
}
var $U = function(t) {
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
function kd(e) {
  "@babel/helpers - typeof";
  return kd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kd(e);
}
var lM = ["viewBox", "children"], fM = [
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
], dg = ["points", "pathLength"], vl = {
  svg: lM,
  polygon: dg,
  polyline: dg
}, kh = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], So = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Nt(t) && (n = t.props), !na(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    kh.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, dM = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, Qr = function(t, r, n) {
  if (!na(t) || kd(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    kh.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = dM(o, r, n));
  }), a;
}, pM = ["children"], hM = ["children"];
function pg(e, t) {
  if (e == null) return {};
  var r = vM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Nd(e) {
  "@babel/helpers - typeof";
  return Nd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nd(e);
}
var hg = {
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
}, vg = null, yl = null, Nh = function e(t) {
  if (t === vg && Array.isArray(yl))
    return yl;
  var r = [];
  return Hr.forEach(t, function(n) {
    le(n) || (nM.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), yl = r, vg = t, r;
};
function bt(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return or(a);
  }) : n = [or(t)], Nh(e).forEach(function(a) {
    var i = gt(a, "type.displayName") || gt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function vt(e, t) {
  var r = bt(e, t);
  return r && r[0];
}
var yg = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!G(n) || n <= 0 || !G(a) || a <= 0);
}, yM = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], mM = function(t) {
  return t && t.type && Bi(t.type) && yM.indexOf(t.type) >= 0;
}, eS = function(t) {
  return t && Nd(t) === "object" && "clipDot" in t;
}, gM = function(t, r, n, a) {
  var i, o = (i = vl?.[a]) !== null && i !== void 0 ? i : [];
  return !ue(t) && (a && o.includes(r) || fM.includes(r)) || n && kh.includes(r);
}, ie = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ Nt(t) && (a = t.props), !na(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var s;
    gM((s = a) === null || s === void 0 ? void 0 : s[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, Rd = function e(t, r) {
  if (t === r)
    return !0;
  var n = Hr.count(t);
  if (n !== Hr.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return mg(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!mg(i, o))
      return !1;
  }
  return !0;
}, mg = function(t, r) {
  if (le(t) && le(r))
    return !0;
  if (!le(t) && !le(r)) {
    var n = t.props || {}, a = n.children, i = pg(n, pM), o = r.props || {}, s = o.children, u = pg(o, hM);
    return a && s ? _n(i, u) && Rd(a, s) : !a && !s ? _n(i, u) : !1;
  }
  return !1;
}, gg = function(t, r) {
  var n = [], a = {};
  return Nh(t).forEach(function(i, o) {
    if (mM(i))
      n.push(i);
    else if (i) {
      var s = or(i.type), u = r[s] || {}, c = u.handler, l = u.once;
      if (c && (!l || !a[s])) {
        var f = c(i, s, o);
        n.push(f), a[s] = !0;
      }
    }
  }), n;
}, bM = function(t) {
  var r = t && t.type;
  return r && hg[r] ? hg[r] : null;
}, xM = function(t, r) {
  return Nh(r).indexOf(t);
}, wM = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
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
function OM(e, t) {
  if (e == null) return {};
  var r = SM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function SM(e, t) {
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
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, s = e.title, u = e.desc, c = OM(e, wM), l = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = fe("recharts-surface", i);
  return /* @__PURE__ */ C.createElement("svg", Ld({}, ie(c, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height)
  }), /* @__PURE__ */ C.createElement("title", null, s), /* @__PURE__ */ C.createElement("desc", null, u), t);
}
var _M = ["children", "className"];
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
function AM(e, t) {
  if (e == null) return {};
  var r = PM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function PM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var de = /* @__PURE__ */ C.forwardRef(function(e, t) {
  var r = e.children, n = e.className, a = AM(e, _M), i = fe("recharts-layer", n);
  return /* @__PURE__ */ C.createElement("g", Bd({
    className: i
  }, ie(a, !0), {
    ref: t
  }), r);
}), TM = process.env.NODE_ENV !== "production", Lt = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (TM && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
}, ml, bg;
function EM() {
  if (bg) return ml;
  bg = 1;
  function e(t, r, n) {
    var a = -1, i = t.length;
    r < 0 && (r = -r > i ? 0 : i + r), n = n > i ? i : n, n < 0 && (n += i), i = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = t[a + r];
    return o;
  }
  return ml = e, ml;
}
var gl, xg;
function CM() {
  if (xg) return gl;
  xg = 1;
  var e = EM();
  function t(r, n, a) {
    var i = r.length;
    return a = a === void 0 ? i : a, !n && a >= i ? r : e(r, n, a);
  }
  return gl = t, gl;
}
var bl, wg;
function tS() {
  if (wg) return bl;
  wg = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + a + i + "]");
  function u(c) {
    return s.test(c);
  }
  return bl = u, bl;
}
var xl, Og;
function jM() {
  if (Og) return xl;
  Og = 1;
  function e(t) {
    return t.split("");
  }
  return xl = e, xl;
}
var wl, Sg;
function MM() {
  if (Sg) return wl;
  Sg = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + a + "]", u = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + s + "|" + u + ")", l = "[^" + e + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "\\u200d", y = c + "?", h = "[" + i + "]?", v = "(?:" + p + "(?:" + [l, f, d].join("|") + ")" + h + y + ")*", b = h + y + v, g = "(?:" + [l + s + "?", s, f, d, o].join("|") + ")", x = RegExp(u + "(?=" + u + ")|" + g + b, "g");
  function O(m) {
    return m.match(x) || [];
  }
  return wl = O, wl;
}
var Ol, _g;
function $M() {
  if (_g) return Ol;
  _g = 1;
  var e = jM(), t = tS(), r = MM();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return Ol = n, Ol;
}
var Sl, Ag;
function IM() {
  if (Ag) return Sl;
  Ag = 1;
  var e = CM(), t = tS(), r = $M(), n = XO();
  function a(i) {
    return function(o) {
      o = n(o);
      var s = t(o) ? r(o) : void 0, u = s ? s[0] : o.charAt(0), c = s ? e(s, 1).join("") : o.slice(1);
      return u[i]() + c;
    };
  }
  return Sl = a, Sl;
}
var _l, Pg;
function DM() {
  if (Pg) return _l;
  Pg = 1;
  var e = IM(), t = e("toUpperCase");
  return _l = t, _l;
}
var kM = DM();
const Is = /* @__PURE__ */ Ae(kM);
function Ce(e) {
  return function() {
    return e;
  };
}
const rS = Math.cos, _o = Math.sin, zt = Math.sqrt, Ao = Math.PI, Ds = 2 * Ao, Fd = Math.PI, zd = 2 * Fd, Rr = 1e-6, NM = zd - Rr;
function nS(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function RM(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return nS;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class LM {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? nS : RM(t);
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
    else if (d > Rr) if (!(Math.abs(f * u - c * l) > Rr) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, y = a - s, h = u * u + c * c, v = p * p + y * y, b = Math.sqrt(h), g = Math.sqrt(d), x = i * Math.tan((Fd - Math.acos((h + d - v) / (2 * b * g))) / 2), O = x / g, m = x / b;
      Math.abs(O - 1) > Rr && this._append`L${t + O * l},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * p > l * y)},${this._x1 = t + m * u},${this._y1 = r + m * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(a), u = n * Math.sin(a), c = t + s, l = r + u, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > Rr || Math.abs(this._y1 - l) > Rr) && this._append`L${c},${l}`, n && (d < 0 && (d = d % zd + zd), d > NM ? this._append`A${n},${n},0,1,${f},${t - s},${r - u}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = l}` : d > Rr && this._append`A${n},${n},0,${+(d >= Fd)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Rh(e) {
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
  }, () => new LM(t);
}
function Lh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function aS(e) {
  this._context = e;
}
aS.prototype = {
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
function ks(e) {
  return new aS(e);
}
function iS(e) {
  return e[0];
}
function oS(e) {
  return e[1];
}
function sS(e, t) {
  var r = Ce(!0), n = null, a = ks, i = null, o = Rh(s);
  e = typeof e == "function" ? e : e === void 0 ? iS : Ce(e), t = typeof t == "function" ? t : t === void 0 ? oS : Ce(t);
  function s(u) {
    var c, l = (u = Lh(u)).length, f, d = !1, p;
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
  var n = null, a = Ce(!0), i = null, o = ks, s = null, u = Rh(c);
  e = typeof e == "function" ? e : e === void 0 ? iS : Ce(+e), t = typeof t == "function" ? t : Ce(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? oS : Ce(+r);
  function c(f) {
    var d, p, y, h = (f = Lh(f)).length, v, b = !1, g, x = new Array(h), O = new Array(h);
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
    return sS().defined(a).curve(o).context(i);
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
class uS {
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
function qM(e) {
  return new uS(e, !0);
}
function BM(e) {
  return new uS(e, !1);
}
const qh = {
  draw(e, t) {
    const r = zt(t / Ao);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ds);
  }
}, FM = {
  draw(e, t) {
    const r = zt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, cS = zt(1 / 3), zM = cS * 2, WM = {
  draw(e, t) {
    const r = zt(t / zM), n = r * cS;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, UM = {
  draw(e, t) {
    const r = zt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, HM = 0.8908130915292852, lS = _o(Ao / 10) / _o(7 * Ao / 10), KM = _o(Ds / 10) * lS, VM = -rS(Ds / 10) * lS, GM = {
  draw(e, t) {
    const r = zt(t * HM), n = KM * r, a = VM * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = Ds * i / 5, s = rS(o), u = _o(o);
      e.lineTo(u * r, -s * r), e.lineTo(s * n - u * a, u * n + s * a);
    }
    e.closePath();
  }
}, Al = zt(3), YM = {
  draw(e, t) {
    const r = -zt(t / (Al * 3));
    e.moveTo(0, r * 2), e.lineTo(-Al * r, -r), e.lineTo(Al * r, -r), e.closePath();
  }
}, xt = -0.5, wt = zt(3) / 2, Wd = 1 / zt(12), XM = (Wd / 2 + 1) * 3, ZM = {
  draw(e, t) {
    const r = zt(t / XM), n = r / 2, a = r * Wd, i = n, o = r * Wd + r, s = -i, u = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(s, u), e.lineTo(xt * n - wt * a, wt * n + xt * a), e.lineTo(xt * i - wt * o, wt * i + xt * o), e.lineTo(xt * s - wt * u, wt * s + xt * u), e.lineTo(xt * n + wt * a, xt * a - wt * n), e.lineTo(xt * i + wt * o, xt * o - wt * i), e.lineTo(xt * s + wt * u, xt * u - wt * s), e.closePath();
  }
};
function JM(e, t) {
  let r = null, n = Rh(a);
  e = typeof e == "function" ? e : Ce(e || qh), t = typeof t == "function" ? t : Ce(t === void 0 ? 64 : +t);
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
function fS(e) {
  this._context = e;
}
fS.prototype = {
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
function QM(e) {
  return new fS(e);
}
function dS(e) {
  this._context = e;
}
dS.prototype = {
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
function e$(e) {
  return new dS(e);
}
function pS(e) {
  this._context = e;
}
pS.prototype = {
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
function t$(e) {
  return new pS(e);
}
function hS(e) {
  this._context = e;
}
hS.prototype = {
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
function r$(e) {
  return new hS(e);
}
function Tg(e) {
  return e < 0 ? -1 : 1;
}
function Eg(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), s = (i * a + o * n) / (n + a);
  return (Tg(i) + Tg(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function Cg(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Pl(e, t, r) {
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
        Pl(this, this._t0, Cg(this, this._t0));
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
          this._point = 3, Pl(this, Cg(this, r = Eg(this, e, t)), r);
          break;
        default:
          Pl(this, this._t0, r = Eg(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function vS(e) {
  this._context = new yS(e);
}
(vS.prototype = Object.create(Eo.prototype)).point = function(e, t) {
  Eo.prototype.point.call(this, t, e);
};
function yS(e) {
  this._context = e;
}
yS.prototype = {
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
function n$(e) {
  return new Eo(e);
}
function a$(e) {
  return new vS(e);
}
function mS(e) {
  this._context = e;
}
mS.prototype = {
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
        for (var n = jg(e), a = jg(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function jg(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function i$(e) {
  return new mS(e);
}
function Ns(e, t) {
  this._context = e, this._t = t;
}
Ns.prototype = {
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
function o$(e) {
  return new Ns(e, 0.5);
}
function s$(e) {
  return new Ns(e, 0);
}
function u$(e) {
  return new Ns(e, 1);
}
function En(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, s = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function Ud(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function c$(e, t) {
  return e[t];
}
function l$(e) {
  const t = [];
  return t.key = e, t;
}
function f$() {
  var e = Ce([]), t = Ud, r = En, n = c$;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), l$), s, u = o.length, c = -1, l;
    for (const f of i)
      for (s = 0, ++c; s < u; ++s)
        (o[s][c] = [0, +n(f, o[s].key, c, i)]).data = f;
    for (s = 0, l = Lh(t(o)); s < u; ++s)
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
    return arguments.length ? (r = i ?? En, a) : r;
  }, a;
}
function d$(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    En(e, t);
  }
}
function p$(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, s = 0; o < a; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    En(e, t);
  }
}
function h$(e, t) {
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
    a[n - 1][1] += a[n - 1][0] = r, En(e, t);
  }
}
function Xa(e) {
  "@babel/helpers - typeof";
  return Xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xa(e);
}
var v$ = ["type", "size", "sizeType"];
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
function Mg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mg(Object(r), !0).forEach(function(n) {
      y$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y$(e, t, r) {
  return t = m$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m$(e) {
  var t = g$(e, "string");
  return Xa(t) == "symbol" ? t : t + "";
}
function g$(e, t) {
  if (Xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function b$(e, t) {
  if (e == null) return {};
  var r = x$(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function x$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var gS = {
  symbolCircle: qh,
  symbolCross: FM,
  symbolDiamond: WM,
  symbolSquare: UM,
  symbolStar: GM,
  symbolTriangle: YM,
  symbolWye: ZM
}, w$ = Math.PI / 180, O$ = function(t) {
  var r = "symbol".concat(Is(t));
  return gS[r] || qh;
}, S$ = function(t, r, n) {
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
      var a = 18 * w$;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, _$ = function(t, r) {
  gS["symbol".concat(Is(t))] = r;
}, Bh = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, s = o === void 0 ? "area" : o, u = b$(t, v$), c = $g($g({}, u), {}, {
    type: n,
    size: i,
    sizeType: s
  }), l = function() {
    var v = O$(n), b = JM().type(v).size(S$(i, s, n));
    return b();
  }, f = c.className, d = c.cx, p = c.cy, y = ie(c, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ C.createElement("path", Hd({}, y, {
    className: fe("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: l()
  })) : null;
};
Bh.registerSymbol = _$;
function Cn(e) {
  "@babel/helpers - typeof";
  return Cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cn(e);
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
function Ig(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function A$(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ig(Object(r), !0).forEach(function(n) {
      Za(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function P$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function T$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xS(n.key), n);
  }
}
function E$(e, t, r) {
  return t && T$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function C$(e, t, r) {
  return t = Co(t), j$(e, bS() ? Reflect.construct(t, r || [], Co(e).constructor) : t.apply(e, r));
}
function j$(e, t) {
  if (t && (Cn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return M$(e);
}
function M$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bS = function() {
    return !!e;
  })();
}
function Co(e) {
  return Co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Co(e);
}
function $$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vd(e, t);
}
function Vd(e, t) {
  return Vd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Vd(e, t);
}
function Za(e, t, r) {
  return t = xS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xS(e) {
  var t = I$(e, "string");
  return Cn(t) == "symbol" ? t : t + "";
}
function I$(e, t) {
  if (Cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ot = 32, Fh = /* @__PURE__ */ (function(e) {
  function t() {
    return P$(this, t), C$(this, t, arguments);
  }
  return $$(t, e), E$(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = Ot / 2, o = Ot / 6, s = Ot / 3, u = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ C.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: u,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: Ot,
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
            H`).concat(Ot, "M").concat(2 * s, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ C.createElement("path", {
            stroke: "none",
            fill: u,
            d: "M0,".concat(Ot / 8, "h").concat(Ot, "v").concat(Ot * 3 / 4, "h").concat(-Ot, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ C.isValidElement(n.legendIcon)) {
          var c = A$({}, n);
          return delete c.legendIcon, /* @__PURE__ */ C.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ C.createElement(Bh, {
          fill: u,
          cx: i,
          cy: i,
          size: Ot,
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
        width: Ot,
        height: Ot
      }, f = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(p, y) {
        var h = p.formatter || u, v = fe(Za(Za({
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
        }, Qr(n.props, p, y)), /* @__PURE__ */ C.createElement(qd, {
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
Za(Fh, "displayName", "Legend");
Za(Fh, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Tl, Dg;
function D$() {
  if (Dg) return Tl;
  Dg = 1;
  var e = kO(), t = jh(), r = 1, n = 2;
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
var El, kg;
function wS() {
  if (kg) return El;
  kg = 1;
  var e = Pr();
  function t(r) {
    return r === r && !e(r);
  }
  return El = t, El;
}
var Cl, Ng;
function k$() {
  if (Ng) return Cl;
  Ng = 1;
  var e = wS(), t = Ms();
  function r(n) {
    for (var a = t(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return Cl = r, Cl;
}
var jl, Rg;
function OS() {
  if (Rg) return jl;
  Rg = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return jl = e, jl;
}
var Ml, Lg;
function N$() {
  if (Lg) return Ml;
  Lg = 1;
  var e = D$(), t = k$(), r = OS();
  function n(a) {
    var i = t(a);
    return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return Ml = n, Ml;
}
var $l, qg;
function R$() {
  if (qg) return $l;
  qg = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return $l = e, $l;
}
var Il, Bg;
function L$() {
  if (Bg) return Il;
  Bg = 1;
  var e = ZO(), t = Th(), r = dt(), n = Eh(), a = Ch(), i = $s();
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
var Dl, Fg;
function q$() {
  if (Fg) return Dl;
  Fg = 1;
  var e = R$(), t = L$();
  function r(n, a) {
    return n != null && t(n, a, e);
  }
  return Dl = r, Dl;
}
var kl, zg;
function B$() {
  if (zg) return kl;
  zg = 1;
  var e = jh(), t = JO(), r = q$(), n = $h(), a = wS(), i = OS(), o = $s(), s = 1, u = 2;
  function c(l, f) {
    return n(l) && a(f) ? i(o(l), f) : function(d) {
      var p = t(d, l);
      return p === void 0 && p === f ? r(d, l) : e(f, p, s | u);
    };
  }
  return kl = c, kl;
}
var Nl, Wg;
function ia() {
  if (Wg) return Nl;
  Wg = 1;
  function e(t) {
    return t;
  }
  return Nl = e, Nl;
}
var Rl, Ug;
function F$() {
  if (Ug) return Rl;
  Ug = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Rl = e, Rl;
}
var Ll, Hg;
function z$() {
  if (Hg) return Ll;
  Hg = 1;
  var e = Dh();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Ll = t, Ll;
}
var ql, Kg;
function W$() {
  if (Kg) return ql;
  Kg = 1;
  var e = F$(), t = z$(), r = $h(), n = $s();
  function a(i) {
    return r(i) ? e(n(i)) : t(i);
  }
  return ql = a, ql;
}
var Bl, Vg;
function Qt() {
  if (Vg) return Bl;
  Vg = 1;
  var e = N$(), t = B$(), r = ia(), n = dt(), a = W$();
  function i(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : a(o);
  }
  return Bl = i, Bl;
}
var Fl, Gg;
function SS() {
  if (Gg) return Fl;
  Gg = 1;
  function e(t, r, n, a) {
    for (var i = t.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return Fl = e, Fl;
}
var zl, Yg;
function U$() {
  if (Yg) return zl;
  Yg = 1;
  function e(t) {
    return t !== t;
  }
  return zl = e, zl;
}
var Wl, Xg;
function H$() {
  if (Xg) return Wl;
  Xg = 1;
  function e(t, r, n) {
    for (var a = n - 1, i = t.length; ++a < i; )
      if (t[a] === r)
        return a;
    return -1;
  }
  return Wl = e, Wl;
}
var Ul, Zg;
function K$() {
  if (Zg) return Ul;
  Zg = 1;
  var e = SS(), t = U$(), r = H$();
  function n(a, i, o) {
    return i === i ? r(a, i, o) : e(a, t, o);
  }
  return Ul = n, Ul;
}
var Hl, Jg;
function V$() {
  if (Jg) return Hl;
  Jg = 1;
  var e = K$();
  function t(r, n) {
    var a = r == null ? 0 : r.length;
    return !!a && e(r, n, 0) > -1;
  }
  return Hl = t, Hl;
}
var Kl, Qg;
function G$() {
  if (Qg) return Kl;
  Qg = 1;
  function e(t, r, n) {
    for (var a = -1, i = t == null ? 0 : t.length; ++a < i; )
      if (n(r, t[a]))
        return !0;
    return !1;
  }
  return Kl = e, Kl;
}
var Vl, eb;
function Y$() {
  if (eb) return Vl;
  eb = 1;
  function e() {
  }
  return Vl = e, Vl;
}
var Gl, tb;
function X$() {
  if (tb) return Gl;
  tb = 1;
  var e = HO(), t = Y$(), r = Ph(), n = 1 / 0, a = e && 1 / r(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : t;
  return Gl = a, Gl;
}
var Yl, rb;
function Z$() {
  if (rb) return Yl;
  rb = 1;
  var e = NO(), t = V$(), r = G$(), n = LO(), a = X$(), i = Ph(), o = 200;
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
var Xl, nb;
function J$() {
  if (nb) return Xl;
  nb = 1;
  var e = Qt(), t = Z$();
  function r(n, a) {
    return n && n.length ? t(n, e(a, 2)) : [];
  }
  return Xl = r, Xl;
}
var Q$ = J$();
const ab = /* @__PURE__ */ Ae(Q$);
function _S(e, t, r) {
  return t === !0 ? ab(e, r) : ue(t) ? ab(e, t) : e;
}
function jn(e) {
  "@babel/helpers - typeof";
  return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jn(e);
}
var eI = ["ref"];
function ib(e, t) {
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
    t % 2 ? ib(Object(r), !0).forEach(function(n) {
      Rs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ib(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ob(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, PS(n.key), n);
  }
}
function rI(e, t, r) {
  return t && ob(e.prototype, t), r && ob(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nI(e, t, r) {
  return t = jo(t), aI(e, AS() ? Reflect.construct(t, r || [], jo(e).constructor) : t.apply(e, r));
}
function aI(e, t) {
  if (t && (jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return iI(e);
}
function iI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function AS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (AS = function() {
    return !!e;
  })();
}
function jo(e) {
  return jo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jo(e);
}
function oI(e, t) {
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
  return t = PS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function PS(e) {
  var t = sI(e, "string");
  return jn(t) == "symbol" ? t : t + "";
}
function sI(e, t) {
  if (jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function uI(e, t) {
  if (e == null) return {};
  var r = cI(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function lI(e) {
  return e.value;
}
function fI(e, t) {
  if (/* @__PURE__ */ C.isValidElement(e))
    return /* @__PURE__ */ C.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ C.createElement(e, t);
  t.ref;
  var r = uI(t, eI);
  return /* @__PURE__ */ C.createElement(Fh, r);
}
var sb = 1, Vr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    tI(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = nI(this, t, [].concat(a)), Rs(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return oI(t, e), rI(t, [{
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
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > sb || Math.abs(a.height - this.lastBoundingBox.height) > sb) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
      }, fI(i, tr(tr({}, this.props), {}, {
        payload: _S(l, c, lI)
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
Rs(Vr, "displayName", "Legend");
Rs(Vr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Zl, ub;
function dI() {
  if (ub) return Zl;
  ub = 1;
  var e = Li(), t = Th(), r = dt(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return r(i) || t(i) || !!(n && i && i[n]);
  }
  return Zl = a, Zl;
}
var Jl, cb;
function TS() {
  if (cb) return Jl;
  cb = 1;
  var e = BO(), t = dI();
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
var Ql, lb;
function pI() {
  if (lb) return Ql;
  lb = 1;
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
var ef, fb;
function hI() {
  if (fb) return ef;
  fb = 1;
  var e = pI(), t = e();
  return ef = t, ef;
}
var tf, db;
function ES() {
  if (db) return tf;
  db = 1;
  var e = hI(), t = Ms();
  function r(n, a) {
    return n && e(n, a, t);
  }
  return tf = r, tf;
}
var rf, pb;
function vI() {
  if (pb) return rf;
  pb = 1;
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
  return rf = t, rf;
}
var nf, hb;
function zh() {
  if (hb) return nf;
  hb = 1;
  var e = ES(), t = vI(), r = t(e);
  return nf = r, nf;
}
var af, vb;
function CS() {
  if (vb) return af;
  vb = 1;
  var e = zh(), t = qi();
  function r(n, a) {
    var i = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, u, c) {
      o[++i] = a(s, u, c);
    }), o;
  }
  return af = r, af;
}
var of, yb;
function yI() {
  if (yb) return of;
  yb = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return of = e, of;
}
var sf, mb;
function mI() {
  if (mb) return sf;
  mb = 1;
  var e = ra();
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
var uf, gb;
function gI() {
  if (gb) return uf;
  gb = 1;
  var e = mI();
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
var cf, bb;
function bI() {
  if (bb) return cf;
  bb = 1;
  var e = Ih(), t = Dh(), r = Qt(), n = CS(), a = yI(), i = zO(), o = gI(), s = ia(), u = dt();
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
var lf, xb;
function xI() {
  if (xb) return lf;
  xb = 1;
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
var ff, wb;
function wI() {
  if (wb) return ff;
  wb = 1;
  var e = xI(), t = Math.max;
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
var df, Ob;
function OI() {
  if (Ob) return df;
  Ob = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return df = e, df;
}
var pf, Sb;
function jS() {
  if (Sb) return pf;
  Sb = 1;
  var e = an(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return pf = t, pf;
}
var hf, _b;
function SI() {
  if (_b) return hf;
  _b = 1;
  var e = OI(), t = jS(), r = ia(), n = t ? function(a, i) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : r;
  return hf = n, hf;
}
var vf, Ab;
function _I() {
  if (Ab) return vf;
  Ab = 1;
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
var yf, Pb;
function AI() {
  if (Pb) return yf;
  Pb = 1;
  var e = SI(), t = _I(), r = t(e);
  return yf = r, yf;
}
var mf, Tb;
function PI() {
  if (Tb) return mf;
  Tb = 1;
  var e = ia(), t = wI(), r = AI();
  function n(a, i) {
    return r(t(a, i, e), a + "");
  }
  return mf = n, mf;
}
var gf, Eb;
function Ls() {
  if (Eb) return gf;
  Eb = 1;
  var e = Oh(), t = qi(), r = Eh(), n = Pr();
  function a(i, o, s) {
    if (!n(s))
      return !1;
    var u = typeof o;
    return (u == "number" ? t(s) && r(o, s.length) : u == "string" && o in s) ? e(s[o], i) : !1;
  }
  return gf = a, gf;
}
var bf, Cb;
function TI() {
  if (Cb) return bf;
  Cb = 1;
  var e = TS(), t = bI(), r = PI(), n = Ls(), a = r(function(i, o) {
    if (i == null)
      return [];
    var s = o.length;
    return s > 1 && n(i, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(i, e(o, 1), []);
  });
  return bf = a, bf;
}
var EI = TI();
const Wh = /* @__PURE__ */ Ae(EI);
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
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
function CI(e, t) {
  return II(e) || $I(e, t) || MI(e, t) || jI();
}
function jI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MI(e, t) {
  if (e) {
    if (typeof e == "string") return jb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jb(e, t);
  }
}
function jb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $I(e, t) {
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
function II(e) {
  if (Array.isArray(e)) return e;
}
function Mb(e, t) {
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
    t % 2 ? Mb(Object(r), !0).forEach(function(n) {
      DI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DI(e, t, r) {
  return t = kI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kI(e) {
  var t = NI(e, "string");
  return Ja(t) == "symbol" ? t : t + "";
}
function NI(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function RI(e) {
  return Array.isArray(e) && Ve(e[0]) && Ve(e[1]) ? e.join(" ~ ") : e;
}
var LI = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, s = o === void 0 ? {} : o, u = t.labelStyle, c = u === void 0 ? {} : u, l = t.payload, f = t.formatter, d = t.itemSorter, p = t.wrapperClassName, y = t.labelClassName, h = t.label, v = t.labelFormatter, b = t.accessibilityLayer, g = b === void 0 ? !1 : b, x = function() {
    if (l && l.length) {
      var $ = {
        padding: 0,
        margin: 0
      }, M = (d ? Wh(l, d) : l).map(function(j, I) {
        if (j.type === "none")
          return null;
        var k = xf({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: j.color || "#000"
        }, s), R = j.formatter || f || RI, L = j.value, z = j.name, N = L, B = z;
        if (R && N != null && B != null) {
          var q = R(L, z, j, I, l);
          if (Array.isArray(q)) {
            var H = CI(q, 2);
            N = H[0], B = H[1];
          } else
            N = q;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ C.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(I),
            style: k
          }, Ve(B) ? /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, B) : null, Ve(B) ? /* @__PURE__ */ C.createElement("span", {
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
  }, O = xf({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), m = xf({
    margin: 0
  }, c), w = !le(h), S = w ? h : "", A = fe("recharts-default-tooltip", p), P = fe("recharts-tooltip-label", y);
  w && v && l !== void 0 && l !== null && (S = v(h, l));
  var D = g ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ C.createElement("div", Yd({
    className: A,
    style: O
  }, D), /* @__PURE__ */ C.createElement("p", {
    className: P,
    style: m
  }, /* @__PURE__ */ C.isValidElement(S) ? S : "".concat(S)), x());
};
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
}
function no(e, t, r) {
  return t = qI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qI(e) {
  var t = BI(e, "string");
  return Qa(t) == "symbol" ? t : t + "";
}
function BI(e, t) {
  if (Qa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ba = "recharts-tooltip-wrapper", FI = {
  visibility: "hidden"
};
function zI(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return fe(ba, no(no(no(no({}, "".concat(ba, "-right"), G(r) && t && G(t.x) && r >= t.x), "".concat(ba, "-left"), G(r) && t && G(t.x) && r < t.x), "".concat(ba, "-bottom"), G(n) && t && G(t.y) && n >= t.y), "".concat(ba, "-top"), G(n) && t && G(t.y) && n < t.y));
}
function $b(e) {
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
function WI(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function UI(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, u = e.viewBox, c, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = $b({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: u,
    viewBoxDimension: u.width
  }), f = $b({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: u,
    viewBoxDimension: u.height
  }), c = WI({
    translateX: l,
    translateY: f,
    useTranslate3d: s
  })) : c = FI, {
    cssProperties: c,
    cssClasses: zI({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e);
}
function Ib(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Db(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ib(Object(r), !0).forEach(function(n) {
      Zd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ib(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function KI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $S(n.key), n);
  }
}
function VI(e, t, r) {
  return t && KI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function GI(e, t, r) {
  return t = Mo(t), YI(e, MS() ? Reflect.construct(t, r || [], Mo(e).constructor) : t.apply(e, r));
}
function YI(e, t) {
  if (t && (Mn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return XI(e);
}
function XI(e) {
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
function Mo(e) {
  return Mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mo(e);
}
function ZI(e, t) {
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
  return t = $S(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $S(e) {
  var t = JI(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function JI(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var kb = 1, QI = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    HI(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = GI(this, t, [].concat(a)), Zd(r, "state", {
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
  return ZI(t, e), VI(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > kb || Math.abs(n.height - this.state.lastBoundingBox.height) > kb) && this.setState({
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
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.children, l = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, p = a.offset, y = a.position, h = a.reverseDirection, v = a.useTranslate3d, b = a.viewBox, g = a.wrapperStyle, x = UI({
        allowEscapeViewBox: o,
        coordinate: l,
        offsetTopLeft: p,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: b
      }), O = x.cssClasses, m = x.cssProperties, w = Db(Db({
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
})(jt), eD = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Tr = {
  isSsr: eD()
};
function $n(e) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $n(e);
}
function Nb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nb(Object(r), !0).forEach(function(n) {
      Uh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rD(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, DS(n.key), n);
  }
}
function nD(e, t, r) {
  return t && rD(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function aD(e, t, r) {
  return t = $o(t), iD(e, IS() ? Reflect.construct(t, r || [], $o(e).constructor) : t.apply(e, r));
}
function iD(e, t) {
  if (t && ($n(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return oD(e);
}
function oD(e) {
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
function $o(e) {
  return $o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $o(e);
}
function sD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Jd(e, t);
}
function Jd(e, t) {
  return Jd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Jd(e, t);
}
function Uh(e, t, r) {
  return t = DS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DS(e) {
  var t = uD(e, "string");
  return $n(t) == "symbol" ? t : t + "";
}
function uD(e, t) {
  if ($n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function cD(e) {
  return e.dataKey;
}
function lD(e, t) {
  return /* @__PURE__ */ C.isValidElement(e) ? /* @__PURE__ */ C.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ C.createElement(e, t) : /* @__PURE__ */ C.createElement(LI, t);
}
var Ut = /* @__PURE__ */ (function(e) {
  function t() {
    return tD(this, t), aD(this, t, arguments);
  }
  return sD(t, e), nD(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.content, l = a.coordinate, f = a.filterNull, d = a.isAnimationActive, p = a.offset, y = a.payload, h = a.payloadUniqBy, v = a.position, b = a.reverseDirection, g = a.useTranslate3d, x = a.viewBox, O = a.wrapperStyle, m = y ?? [];
      f && m.length && (m = _S(y.filter(function(S) {
        return S.value != null && (S.hide !== !0 || n.props.includeHidden);
      }), h, cD));
      var w = m.length > 0;
      return /* @__PURE__ */ C.createElement(QI, {
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
      }, lD(c, Rb(Rb({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
})(jt);
Uh(Ut, "displayName", "Tooltip");
Uh(Ut, "defaultProps", {
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
  isAnimationActive: !Tr.isSsr,
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
var wf, Lb;
function fD() {
  if (Lb) return wf;
  Lb = 1;
  var e = Jt(), t = function() {
    return e.Date.now();
  };
  return wf = t, wf;
}
var Of, qb;
function dD() {
  if (qb) return Of;
  qb = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Of = t, Of;
}
var Sf, Bb;
function pD() {
  if (Bb) return Sf;
  Bb = 1;
  var e = dD(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Sf = r, Sf;
}
var _f, Fb;
function kS() {
  if (Fb) return _f;
  Fb = 1;
  var e = pD(), t = Pr(), r = ra(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
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
var Af, zb;
function hD() {
  if (zb) return Af;
  zb = 1;
  var e = Pr(), t = fD(), r = kS(), n = "Expected a function", a = Math.max, i = Math.min;
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
      var j = M - h, I = M - v, k = u - j;
      return g ? i(k, d - I) : k;
    }
    function S(M) {
      var j = M - h, I = M - v;
      return h === void 0 || j >= u || j < 0 || g && I >= d;
    }
    function A() {
      var M = t();
      if (S(M))
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
      var M = t(), j = S(M);
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
  return Af = o, Af;
}
var Pf, Wb;
function vD() {
  if (Wb) return Pf;
  Wb = 1;
  var e = hD(), t = Pr(), r = "Expected a function";
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
var yD = vD();
const NS = /* @__PURE__ */ Ae(yD);
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
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
function ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ub(Object(r), !0).forEach(function(n) {
      mD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ub(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mD(e, t, r) {
  return t = gD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gD(e) {
  var t = bD(e, "string");
  return ei(t) == "symbol" ? t : t + "";
}
function bD(e, t) {
  if (ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xD(e, t) {
  return _D(e) || SD(e, t) || OD(e, t) || wD();
}
function wD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OD(e, t) {
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
function SD(e, t) {
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
function _D(e) {
  if (Array.isArray(e)) return e;
}
var AD = /* @__PURE__ */ ze(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, s = e.height, u = s === void 0 ? "100%" : s, c = e.minWidth, l = c === void 0 ? 0 : c, f = e.minHeight, d = e.maxHeight, p = e.children, y = e.debounce, h = y === void 0 ? 0 : y, v = e.id, b = e.className, g = e.onResize, x = e.style, O = x === void 0 ? {} : x, m = Me(null), w = Me();
  w.current = g, dT(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var S = he({
    containerWidth: a.width,
    containerHeight: a.height
  }), A = xD(S, 2), P = A[0], D = A[1], T = tt(function(M, j) {
    D(function(I) {
      var k = Math.round(M), R = Math.round(j);
      return I.containerWidth === k && I.containerHeight === R ? I : {
        containerWidth: k,
        containerHeight: R
      };
    });
  }, []);
  Le(function() {
    var M = function(z) {
      var N, B = z[0].contentRect, q = B.width, H = B.height;
      T(q, H), (N = w.current) === null || N === void 0 || N.call(w, q, H);
    };
    h > 0 && (M = NS(M, h, {
      trailing: !0,
      leading: !1
    }));
    var j = new ResizeObserver(M), I = m.current.getBoundingClientRect(), k = I.width, R = I.height;
    return T(k, R), j.observe(m.current), function() {
      j.disconnect();
    };
  }, [T, h]);
  var $ = Ze(function() {
    var M = P.containerWidth, j = P.containerHeight;
    if (M < 0 || j < 0)
      return null;
    Lt(Br(o) || Br(u), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, u), Lt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var I = Br(o) ? M : o, k = Br(u) ? j : u;
    r && r > 0 && (I ? k = I / r : k && (I = k * r), d && k > d && (k = d)), Lt(I > 0 || k > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, I, k, o, u, l, f, r);
    var R = !Array.isArray(p) && or(p.type).endsWith("Chart");
    return C.Children.map(p, function(L) {
      return /* @__PURE__ */ C.isValidElement(L) ? /* @__PURE__ */ Ue(L, ao({
        width: I,
        height: k
      }, R ? {
        style: ao({
          height: "100%",
          width: "100%",
          maxHeight: k,
          maxWidth: I
        }, L.props.style)
      } : {})) : L;
    });
  }, [r, p, u, d, f, l, P, o]);
  return /* @__PURE__ */ C.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: fe("recharts-responsive-container", b),
    style: ao(ao({}, O), {}, {
      width: o,
      height: u,
      minWidth: l,
      minHeight: f,
      maxHeight: d
    }),
    ref: m
  }, $);
}), qs = function(t) {
  return null;
};
qs.displayName = "Cell";
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
function Kb(e, t) {
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
    t % 2 ? Kb(Object(r), !0).forEach(function(n) {
      PD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function PD(e, t, r) {
  return t = TD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TD(e) {
  var t = ED(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function ED(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pn = {
  widthCache: {},
  cacheCount: 0
}, CD = 2e3, jD = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Vb = "recharts_measurement_span";
function MD(e) {
  var t = Qd({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Na = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Tr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = MD(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (pn.widthCache[a])
    return pn.widthCache[a];
  try {
    var i = document.getElementById(Vb);
    i || (i = document.createElement("span"), i.setAttribute("id", Vb), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = Qd(Qd({}, jD), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var s = i.getBoundingClientRect(), u = {
      width: s.width,
      height: s.height
    };
    return pn.widthCache[a] = u, ++pn.cacheCount > CD && (pn.cacheCount = 0, pn.widthCache = {}), u;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, $D = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function Io(e, t) {
  return ND(e) || kD(e, t) || DD(e, t) || ID();
}
function ID() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DD(e, t) {
  if (e) {
    if (typeof e == "string") return Gb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gb(e, t);
  }
}
function Gb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function kD(e, t) {
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
function ND(e) {
  if (Array.isArray(e)) return e;
}
function RD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qD(n.key), n);
  }
}
function LD(e, t, r) {
  return t && Yb(e.prototype, t), r && Yb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function qD(e) {
  var t = BD(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function BD(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Xb = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Zb = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, FD = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, zD = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, RS = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, WD = Object.keys(RS), bn = "NaN";
function UD(e, t) {
  return e * RS[t];
}
var io = /* @__PURE__ */ (function() {
  function e(t, r) {
    RD(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !FD.test(r) && (this.num = NaN, this.unit = ""), WD.includes(r) && (this.num = UD(t, r), this.unit = "px");
  }
  return LD(e, [{
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
      var n, a = (n = zD.exec(r)) !== null && n !== void 0 ? n : [], i = Io(a, 3), o = i[1], s = i[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
})();
function LS(e) {
  if (e.includes(bn))
    return bn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = Xb.exec(t)) !== null && r !== void 0 ? r : [], a = Io(n, 4), i = a[1], o = a[2], s = a[3], u = io.parse(i ?? ""), c = io.parse(s ?? ""), l = o === "*" ? u.multiply(c) : u.divide(c);
    if (l.isNaN())
      return bn;
    t = t.replace(Xb, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = Zb.exec(t)) !== null && f !== void 0 ? f : [], p = Io(d, 4), y = p[1], h = p[2], v = p[3], b = io.parse(y ?? ""), g = io.parse(v ?? ""), x = h === "+" ? b.add(g) : b.subtract(g);
    if (x.isNaN())
      return bn;
    t = t.replace(Zb, x.toString());
  }
  return t;
}
var Jb = /\(([^()]*)\)/;
function HD(e) {
  for (var t = e; t.includes("("); ) {
    var r = Jb.exec(t), n = Io(r, 2), a = n[1];
    t = t.replace(Jb, LS(a));
  }
  return t;
}
function KD(e) {
  var t = e.replace(/\s+/g, "");
  return t = HD(t), t = LS(t), t;
}
function VD(e) {
  try {
    return KD(e);
  } catch {
    return bn;
  }
}
function Tf(e) {
  var t = VD(e.slice(5, -1));
  return t === bn ? "" : t;
}
var GD = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], YD = ["dx", "dy", "angle", "className", "breakAll"];
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
function Qb(e, t) {
  if (e == null) return {};
  var r = XD(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function XD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function e0(e, t) {
  return ek(e) || QD(e, t) || JD(e, t) || ZD();
}
function ZD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JD(e, t) {
  if (e) {
    if (typeof e == "string") return t0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return t0(e, t);
  }
}
function t0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function QD(e, t) {
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
function ek(e) {
  if (Array.isArray(e)) return e;
}
var qS = /[ \f\n\r\t\v\u2028\u2029]+/, BS = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    le(r) || (n ? i = r.toString().split("") : i = r.toString().split(qS));
    var o = i.map(function(u) {
      return {
        word: u,
        width: Na(u, a).width
      };
    }), s = n ? 0 : Na(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, tk = function(t, r, n, a, i) {
  var o = t.maxLines, s = t.children, u = t.style, c = t.breakAll, l = G(o), f = s, d = function() {
    var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return I.reduce(function(k, R) {
      var L = R.word, z = R.width, N = k[k.length - 1];
      if (N && (a == null || i || N.width + z + n < Number(a)))
        N.words.push(L), N.width += z + n;
      else {
        var B = {
          words: [L],
          width: z
        };
        k.push(B);
      }
      return k;
    }, []);
  }, p = d(r), y = function(I) {
    return I.reduce(function(k, R) {
      return k.width > R.width ? k : R;
    });
  };
  if (!l)
    return p;
  for (var h = "…", v = function(I) {
    var k = f.slice(0, I), R = BS({
      breakAll: c,
      style: u,
      children: k + h
    }).wordsWithComputedWidth, L = d(R), z = L.length > o || y(L).width > Number(a);
    return [z, L];
  }, b = 0, g = f.length - 1, x = 0, O; b <= g && x <= f.length - 1; ) {
    var m = Math.floor((b + g) / 2), w = m - 1, S = v(w), A = e0(S, 2), P = A[0], D = A[1], T = v(m), $ = e0(T, 1), M = $[0];
    if (!P && !M && (b = m + 1), P && M && (g = m - 1), !P && M) {
      O = D;
      break;
    }
    x++;
  }
  return O || p;
}, r0 = function(t) {
  var r = le(t) ? [] : t.toString().split(qS);
  return [{
    words: r
  }];
}, rk = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Tr.isSsr) {
    var u, c, l = BS({
      breakAll: o,
      children: a,
      style: i
    });
    if (l) {
      var f = l.wordsWithComputedWidth, d = l.spaceWidth;
      u = f, c = d;
    } else
      return r0(a);
    return tk({
      breakAll: o,
      children: a,
      maxLines: s,
      style: i
    }, u, c, r, n);
  }
  return r0(a);
}, n0 = "#808080", Ar = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, s = o === void 0 ? "1em" : o, u = t.capHeight, c = u === void 0 ? "0.71em" : u, l = t.scaleToFit, f = l === void 0 ? !1 : l, d = t.textAnchor, p = d === void 0 ? "start" : d, y = t.verticalAnchor, h = y === void 0 ? "end" : y, v = t.fill, b = v === void 0 ? n0 : v, g = Qb(t, GD), x = Ze(function() {
    return rk({
      breakAll: g.breakAll,
      children: g.children,
      maxLines: g.maxLines,
      scaleToFit: f,
      style: g.style,
      width: g.width
    });
  }, [g.breakAll, g.children, g.maxLines, f, g.style, g.width]), O = g.dx, m = g.dy, w = g.angle, S = g.className, A = g.breakAll, P = Qb(g, YD);
  if (!Ve(n) || !Ve(i))
    return null;
  var D = n + (G(O) ? O : 0), T = i + (G(m) ? m : 0), $;
  switch (h) {
    case "start":
      $ = Tf("calc(".concat(c, ")"));
      break;
    case "middle":
      $ = Tf("calc(".concat((x.length - 1) / 2, " * -").concat(s, " + (").concat(c, " / 2))"));
      break;
    default:
      $ = Tf("calc(".concat(x.length - 1, " * -").concat(s, ")"));
      break;
  }
  var M = [];
  if (f) {
    var j = x[0].width, I = g.width;
    M.push("scale(".concat((G(I) ? I / j : 1) / j, ")"));
  }
  return w && M.push("rotate(".concat(w, ", ").concat(D, ", ").concat(T, ")")), M.length && (P.transform = M.join(" ")), /* @__PURE__ */ C.createElement("text", ep({}, ie(P, !0), {
    x: D,
    y: T,
    className: fe("recharts-text", S),
    textAnchor: p,
    fill: b.includes("url") ? n0 : b
  }), x.map(function(k, R) {
    var L = k.words.join(A ? "" : " ");
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
function nk(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Hh(e) {
  let t, r, n;
  e.length !== 2 ? (t = Sr, r = (s, u) => Sr(e(s), u), n = (s, u) => e(s) - u) : (t = e === Sr || e === nk ? e : ak, r = e, n = e);
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
function ak() {
  return 0;
}
function FS(e) {
  return e === null ? NaN : +e;
}
function* ik(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const ok = Hh(Sr), Fi = ok.right;
Hh(FS).center;
class a0 extends Map {
  constructor(t, r = ck) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(i0(this, t));
  }
  has(t) {
    return super.has(i0(this, t));
  }
  set(t, r) {
    return super.set(sk(this, t), r);
  }
  delete(t) {
    return super.delete(uk(this, t));
  }
}
function i0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function sk({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function uk({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function ck(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function lk(e = Sr) {
  if (e === Sr) return zS;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function zS(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const fk = Math.sqrt(50), dk = Math.sqrt(10), pk = Math.sqrt(2);
function Do(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= fk ? 10 : i >= dk ? 5 : i >= pk ? 2 : 1;
  let s, u, c;
  return a < 0 ? (c = Math.pow(10, -a) / o, s = Math.round(e * c), u = Math.round(t * c), s / c < e && ++s, u / c > t && --u, c = -c) : (c = Math.pow(10, a) * o, s = Math.round(e / c), u = Math.round(t / c), s * c < e && ++s, u * c > t && --u), u < s && 0.5 <= r && r < 2 ? Do(e, t, r * 2) : [s, u, c];
}
function tp(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? Do(t, e, r) : Do(e, t, r);
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
  return t = +t, e = +e, r = +r, Do(e, t, r)[2];
}
function np(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? rp(t, e, r) : rp(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function o0(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function s0(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function WS(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? zS : lk(a); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, l = Math.log(u), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (u - f) / u) * (c - u / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / u + d)), y = Math.min(n, Math.floor(t + (u - c) * f / u + d));
      WS(e, t, p, y, a);
    }
    const i = e[t];
    let o = r, s = n;
    for (xa(e, r, t), a(e[n], i) > 0 && xa(e, r, n); o < s; ) {
      for (xa(e, o, s), ++o, --s; a(e[o], i) < 0; ) ++o;
      for (; a(e[s], i) > 0; ) --s;
    }
    a(e[r], i) === 0 ? xa(e, r, s) : (++s, xa(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function xa(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function hk(e, t, r) {
  if (e = Float64Array.from(ik(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return s0(e);
    if (t >= 1) return o0(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = o0(WS(e, i).subarray(0, i + 1)), s = s0(e.subarray(i + 1));
    return o + (s - o) * (a - i);
  }
}
function vk(e, t, r = FS) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
    return o + (s - o) * (a - i);
  }
}
function yk(e, t, r) {
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
function Kh() {
  var e = new a0(), t = [], r = [], n = ap;
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
    t = [], e = new a0();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return Kh(t, r).unknown(n);
  }, Mt.apply(a, arguments), a;
}
function ni() {
  var e = Kh().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, s = !1, u = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = a < n, y = p ? a : n, h = p ? n : a;
    i = (h - y) / Math.max(1, d - u + c * 2), s && (i = Math.floor(i)), y += (h - y - i * (d - u)) * l, o = i * (1 - u), s && (y = Math.round(y), o = Math.round(o));
    var v = yk(d).map(function(b) {
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
    return ni(t(), [n, a]).round(s).paddingInner(u).paddingOuter(c).align(l);
  }, Mt.apply(f(), arguments);
}
function US(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return US(t());
  }, e;
}
function Ra() {
  return US(ni.apply(null, arguments).paddingInner(1));
}
function Vh(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function HS(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function zi() {
}
var ai = 0.7, ko = 1 / ai, An = "\\s*([+-]?\\d+)\\s*", ii = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", mk = /^#([0-9a-f]{3,8})$/, gk = new RegExp(`^rgb\\(${An},${An},${An}\\)$`), bk = new RegExp(`^rgb\\(${Yt},${Yt},${Yt}\\)$`), xk = new RegExp(`^rgba\\(${An},${An},${An},${ii}\\)$`), wk = new RegExp(`^rgba\\(${Yt},${Yt},${Yt},${ii}\\)$`), Ok = new RegExp(`^hsl\\(${ii},${Yt},${Yt}\\)$`), Sk = new RegExp(`^hsla\\(${ii},${Yt},${Yt},${ii}\\)$`), u0 = {
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
Vh(zi, oi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: c0,
  // Deprecated! Use color.formatHex.
  formatHex: c0,
  formatHex8: _k,
  formatHsl: Ak,
  formatRgb: l0,
  toString: l0
});
function c0() {
  return this.rgb().formatHex();
}
function _k() {
  return this.rgb().formatHex8();
}
function Ak() {
  return KS(this).formatHsl();
}
function l0() {
  return this.rgb().formatRgb();
}
function oi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = mk.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? f0(t) : r === 3 ? new ut(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? oo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? oo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = gk.exec(e)) ? new ut(t[1], t[2], t[3], 1) : (t = bk.exec(e)) ? new ut(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = xk.exec(e)) ? oo(t[1], t[2], t[3], t[4]) : (t = wk.exec(e)) ? oo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ok.exec(e)) ? h0(t[1], t[2] / 100, t[3] / 100, 1) : (t = Sk.exec(e)) ? h0(t[1], t[2] / 100, t[3] / 100, t[4]) : u0.hasOwnProperty(e) ? f0(u0[e]) : e === "transparent" ? new ut(NaN, NaN, NaN, 0) : null;
}
function f0(e) {
  return new ut(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function oo(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new ut(e, t, r, n);
}
function Pk(e) {
  return e instanceof zi || (e = oi(e)), e ? (e = e.rgb(), new ut(e.r, e.g, e.b, e.opacity)) : new ut();
}
function ip(e, t, r, n) {
  return arguments.length === 1 ? Pk(e) : new ut(e, t, r, n ?? 1);
}
function ut(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Vh(ut, ip, HS(zi, {
  brighter(e) {
    return e = e == null ? ko : Math.pow(ko, e), new ut(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ai : Math.pow(ai, e), new ut(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ut(Gr(this.r), Gr(this.g), Gr(this.b), No(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: d0,
  // Deprecated! Use color.formatHex.
  formatHex: d0,
  formatHex8: Tk,
  formatRgb: p0,
  toString: p0
}));
function d0() {
  return `#${Fr(this.r)}${Fr(this.g)}${Fr(this.b)}`;
}
function Tk() {
  return `#${Fr(this.r)}${Fr(this.g)}${Fr(this.b)}${Fr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function p0() {
  const e = No(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Gr(this.r)}, ${Gr(this.g)}, ${Gr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function No(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Gr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Fr(e) {
  return e = Gr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function h0(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new kt(e, t, r, n);
}
function KS(e) {
  if (e instanceof kt) return new kt(e.h, e.s, e.l, e.opacity);
  if (e instanceof zi || (e = oi(e)), !e) return new kt();
  if (e instanceof kt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, s = i - a, u = (i + a) / 2;
  return s ? (t === i ? o = (r - n) / s + (r < n) * 6 : r === i ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < 0.5 ? i + a : 2 - i - a, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new kt(o, s, u, e.opacity);
}
function Ek(e, t, r, n) {
  return arguments.length === 1 ? KS(e) : new kt(e, t, r, n ?? 1);
}
function kt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Vh(kt, Ek, HS(zi, {
  brighter(e) {
    return e = e == null ? ko : Math.pow(ko, e), new kt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ai : Math.pow(ai, e), new kt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new ut(
      Ef(e >= 240 ? e - 240 : e + 120, a, n),
      Ef(e, a, n),
      Ef(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new kt(v0(this.h), so(this.s), so(this.l), No(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = No(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${v0(this.h)}, ${so(this.s) * 100}%, ${so(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function v0(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function so(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ef(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Gh = (e) => () => e;
function Ck(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function jk(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function Mk(e) {
  return (e = +e) == 1 ? VS : function(t, r) {
    return r - t ? jk(t, r, e) : Gh(isNaN(t) ? r : t);
  };
}
function VS(e, t) {
  var r = t - e;
  return r ? Ck(e, r) : Gh(isNaN(e) ? t : e);
}
const y0 = (function e(t) {
  var r = Mk(t);
  function n(a, i) {
    var o = r((a = ip(a)).r, (i = ip(i)).r), s = r(a.g, i.g), u = r(a.b, i.b), c = VS(a.opacity, i.opacity);
    return function(l) {
      return a.r = o(l), a.g = s(l), a.b = u(l), a.opacity = c(l), a + "";
    };
  }
  return n.gamma = e, n;
})(1);
function $k(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function Ik(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Dk(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = oa(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) i[o] = a[o](s);
    return i;
  };
}
function kk(e, t) {
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
function Nk(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = oa(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var op = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Cf = new RegExp(op.source, "g");
function Rk(e) {
  return function() {
    return e;
  };
}
function Lk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function qk(e, t) {
  var r = op.lastIndex = Cf.lastIndex = 0, n, a, i, o = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (n = op.exec(e)) && (a = Cf.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (a = a[0]) ? s[o] ? s[o] += a : s[++o] = a : (s[++o] = null, u.push({ i: o, x: Ro(n, a) })), r = Cf.lastIndex;
  return r < t.length && (i = t.slice(r), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? u[0] ? Lk(u[0].x) : Rk(t) : (t = u.length, function(c) {
    for (var l = 0, f; l < t; ++l) s[(f = u[l]).i] = f.x(c);
    return s.join("");
  });
}
function oa(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Gh(t) : (r === "number" ? Ro : r === "string" ? (n = oi(t)) ? (t = n, y0) : qk : t instanceof oi ? y0 : t instanceof Date ? kk : Ik(t) ? $k : Array.isArray(t) ? Dk : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Nk : Ro)(e, t);
}
function Yh(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Bk(e, t) {
  t === void 0 && (t = e, e = oa);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[s](o - s);
  };
}
function Fk(e) {
  return function() {
    return e;
  };
}
function Lo(e) {
  return +e;
}
var m0 = [0, 1];
function st(e) {
  return e;
}
function sp(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Fk(isNaN(t) ? NaN : 0.5);
}
function zk(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function Wk(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = sp(a, n), i = r(o, i)) : (n = sp(n, a), i = r(i, o)), function(s) {
    return i(n(s));
  };
}
function Uk(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = sp(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(s) {
    var u = Fi(e, s, 1, n) - 1;
    return i[u](a[u](s));
  };
}
function Wi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Bs() {
  var e = m0, t = m0, r = oa, n, a, i, o = st, s, u, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== st && (o = zk(e[0], e[d - 1])), s = d > 2 ? Uk : Wk, u = c = null, f;
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
    return t = Array.from(d), r = Yh, l();
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
function Xh() {
  return Bs()(st, st);
}
function Hk(e) {
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
function In(e) {
  return e = qo(Math.abs(e)), e ? e[1] : NaN;
}
function Kk(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, s = e[0], u = 0; a > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), i.push(r.substring(a -= s, a + s)), !((u += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function Vk(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Gk = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function si(e) {
  if (!(t = Gk.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Zh({
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
si.prototype = Zh.prototype;
function Zh(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Zh.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Yk(e) {
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
var GS;
function Xk(e, t) {
  var r = qo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (GS = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + qo(e, Math.max(0, t + i - 1))[0];
}
function g0(e, t) {
  var r = qo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const b0 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Hk,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => g0(e * 100, t),
  r: g0,
  s: Xk,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function x0(e) {
  return e;
}
var w0 = Array.prototype.map, O0 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Zk(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? x0 : Kk(w0.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? x0 : Vk(w0.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = si(f);
    var d = f.fill, p = f.align, y = f.sign, h = f.symbol, v = f.zero, b = f.width, g = f.comma, x = f.precision, O = f.trim, m = f.type;
    m === "n" ? (g = !0, m = "g") : b0[m] || (x === void 0 && (x = 12), O = !0, m = "g"), (v || d === "0" && p === "=") && (v = !0, d = "0", p = "=");
    var w = h === "$" ? r : h === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", S = h === "$" ? n : /[%p]/.test(m) ? o : "", A = b0[m], P = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function D(T) {
      var $ = w, M = S, j, I, k;
      if (m === "c")
        M = A(T) + M, T = "";
      else {
        T = +T;
        var R = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? u : A(Math.abs(T), x), O && (T = Yk(T)), R && +T == 0 && y !== "+" && (R = !1), $ = (R ? y === "(" ? y : s : y === "-" || y === "(" ? "" : y) + $, M = (m === "s" ? O0[8 + GS / 3] : "") + M + (R && y === "(" ? ")" : ""), P) {
          for (j = -1, I = T.length; ++j < I; )
            if (k = T.charCodeAt(j), 48 > k || k > 57) {
              M = (k === 46 ? a + T.slice(j + 1) : T.slice(j)) + M, T = T.slice(0, j);
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
    var p = c((f = si(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(In(d) / 3))) * 3, h = Math.pow(10, -y), v = O0[8 + y / 3];
    return function(b) {
      return p(h * b) + v;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var uo, Jh, YS;
Jk({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Jk(e) {
  return uo = Zk(e), Jh = uo.format, YS = uo.formatPrefix, uo;
}
function Qk(e) {
  return Math.max(0, -In(Math.abs(e)));
}
function eN(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(In(t) / 3))) * 3 - In(Math.abs(e)));
}
function tN(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, In(t) - In(e)) + 1;
}
function XS(e, t, r, n) {
  var a = np(e, t, r), i;
  switch (n = si(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = eN(a, o)) && (n.precision = i), YS(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = tN(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = Qk(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return Jh(n);
}
function Er(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return tp(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return XS(a[0], a[a.length - 1], r ?? 10, n);
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
function Bo() {
  var e = Xh();
  return e.copy = function() {
    return Wi(e, Bo());
  }, Mt.apply(e, arguments), Er(e);
}
function ZS(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Lo), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return ZS(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Lo) : [0, 1], Er(r);
}
function JS(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function S0(e) {
  return Math.log(e);
}
function _0(e) {
  return Math.exp(e);
}
function rN(e) {
  return -Math.log(-e);
}
function nN(e) {
  return -Math.exp(-e);
}
function aN(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function iN(e) {
  return e === 10 ? aN : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function oN(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function A0(e) {
  return (t, r) => -e(-t, r);
}
function Qh(e) {
  const t = e(S0, _0), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = oN(n), i = iN(n), r()[0] < 0 ? (a = A0(a), i = A0(i), e(rN, nN)) : e(S0, _0), t;
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
    if (s == null && (s = 10), u == null && (u = n === 10 ? "s" : ","), typeof u != "function" && (!(n % 1) && (u = si(u)).precision == null && (u.trim = !0), u = Jh(u)), s === 1 / 0) return u;
    const c = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / i(Math.round(a(l)));
      return f * n < n - 0.5 && (f *= n), f <= c ? u(l) : "";
    };
  }, t.nice = () => r(JS(r(), {
    floor: (s) => i(Math.floor(a(s))),
    ceil: (s) => i(Math.ceil(a(s)))
  })), t;
}
function QS() {
  const e = Qh(Bs()).domain([1, 10]);
  return e.copy = () => Wi(e, QS()).base(e.base()), Mt.apply(e, arguments), e;
}
function P0(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function T0(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ev(e) {
  var t = 1, r = e(P0(t), T0(t));
  return r.constant = function(n) {
    return arguments.length ? e(P0(t = +n), T0(t)) : t;
  }, Er(r);
}
function e_() {
  var e = ev(Bs());
  return e.copy = function() {
    return Wi(e, e_()).constant(e.constant());
  }, Mt.apply(e, arguments);
}
function E0(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function sN(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function uN(e) {
  return e < 0 ? -e * e : e * e;
}
function tv(e) {
  var t = e(st, st), r = 1;
  function n() {
    return r === 1 ? e(st, st) : r === 0.5 ? e(sN, uN) : e(E0(r), E0(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, Er(t);
}
function rv() {
  var e = tv(Bs());
  return e.copy = function() {
    return Wi(e, rv()).exponent(e.exponent());
  }, Mt.apply(e, arguments), e;
}
function cN() {
  return rv.apply(null, arguments).exponent(0.5);
}
function C0(e) {
  return Math.sign(e) * e * e;
}
function lN(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function t_() {
  var e = Xh(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = lN(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(C0(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, Lo)).map(C0)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return t_(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Mt.apply(a, arguments), Er(a);
}
function r_() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = vk(e, o / s);
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
    return r_().domain(e).range(t).unknown(n);
  }, Mt.apply(i, arguments);
}
function n_() {
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
    return n_().domain([e, t]).range(a).unknown(i);
  }, Mt.apply(Er(o), arguments);
}
function a_() {
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
    return a_().domain(e).range(t).unknown(r);
  }, Mt.apply(a, arguments);
}
const jf = /* @__PURE__ */ new Date(), Mf = /* @__PURE__ */ new Date();
function Ge(e, t, r, n) {
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
  }, a.filter = (i) => Ge((o) => {
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
const Fo = Ge(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Fo.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ge((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Fo);
Fo.range;
const nr = 1e3, At = nr * 60, ar = At * 60, ur = ar * 24, nv = ur * 7, j0 = ur * 30, $f = ur * 365, zr = Ge((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * nr);
}, (e, t) => (t - e) / nr, (e) => e.getUTCSeconds());
zr.range;
const av = Ge((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nr);
}, (e, t) => {
  e.setTime(+e + t * At);
}, (e, t) => (t - e) / At, (e) => e.getMinutes());
av.range;
const iv = Ge((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * At);
}, (e, t) => (t - e) / At, (e) => e.getUTCMinutes());
iv.range;
const ov = Ge((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nr - e.getMinutes() * At);
}, (e, t) => {
  e.setTime(+e + t * ar);
}, (e, t) => (t - e) / ar, (e) => e.getHours());
ov.range;
const sv = Ge((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * ar);
}, (e, t) => (t - e) / ar, (e) => e.getUTCHours());
sv.range;
const Ui = Ge(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * At) / ur,
  (e) => e.getDate() - 1
);
Ui.range;
const Fs = Ge((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ur, (e) => e.getUTCDate() - 1);
Fs.range;
const i_ = Ge((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ur, (e) => Math.floor(e / ur));
i_.range;
function sn(e) {
  return Ge((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * At) / nv);
}
const zs = sn(0), zo = sn(1), fN = sn(2), dN = sn(3), Dn = sn(4), pN = sn(5), hN = sn(6);
zs.range;
zo.range;
fN.range;
dN.range;
Dn.range;
pN.range;
hN.range;
function un(e) {
  return Ge((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / nv);
}
const Ws = un(0), Wo = un(1), vN = un(2), yN = un(3), kn = un(4), mN = un(5), gN = un(6);
Ws.range;
Wo.range;
vN.range;
yN.range;
kn.range;
mN.range;
gN.range;
const uv = Ge((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
uv.range;
const cv = Ge((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
cv.range;
const cr = Ge((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
cr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ge((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
cr.range;
const lr = Ge((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
lr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ge((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
lr.range;
function o_(e, t, r, n, a, i) {
  const o = [
    [zr, 1, nr],
    [zr, 5, 5 * nr],
    [zr, 15, 15 * nr],
    [zr, 30, 30 * nr],
    [i, 1, At],
    [i, 5, 5 * At],
    [i, 15, 15 * At],
    [i, 30, 30 * At],
    [a, 1, ar],
    [a, 3, 3 * ar],
    [a, 6, 6 * ar],
    [a, 12, 12 * ar],
    [n, 1, ur],
    [n, 2, 2 * ur],
    [r, 1, nv],
    [t, 1, j0],
    [t, 3, 3 * j0],
    [e, 1, $f]
  ];
  function s(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const p = f && typeof f.range == "function" ? f : u(c, l, f), y = p ? p.range(c, +l + 1) : [];
    return d ? y.reverse() : y;
  }
  function u(c, l, f) {
    const d = Math.abs(l - c) / f, p = Hh(([, , v]) => v).right(o, d);
    if (p === o.length) return e.every(np(c / $f, l / $f, f));
    if (p === 0) return Fo.every(Math.max(np(c, l, f), 1));
    const [y, h] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return y.every(h);
  }
  return [s, u];
}
const [bN, xN] = o_(lr, cv, Ws, i_, sv, iv), [wN, ON] = o_(cr, uv, zs, Ui, ov, av);
function If(e) {
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
function wa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function SN(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, s = e.months, u = e.shortMonths, c = Oa(a), l = Sa(a), f = Oa(i), d = Sa(i), p = Oa(o), y = Sa(o), h = Oa(s), v = Sa(s), b = Oa(u), g = Sa(u), x = {
    a: R,
    A: L,
    b: z,
    B: N,
    c: null,
    d: N0,
    e: N0,
    f: KN,
    g: r2,
    G: a2,
    H: WN,
    I: UN,
    j: HN,
    L: s_,
    m: VN,
    M: GN,
    p: B,
    q,
    Q: q0,
    s: B0,
    S: YN,
    u: XN,
    U: ZN,
    V: JN,
    w: QN,
    W: e2,
    x: null,
    X: null,
    y: t2,
    Y: n2,
    Z: i2,
    "%": L0
  }, O = {
    a: H,
    A: X,
    b: ee,
    B: ne,
    c: null,
    d: R0,
    e: R0,
    f: c2,
    g: b2,
    G: w2,
    H: o2,
    I: s2,
    j: u2,
    L: c_,
    m: l2,
    M: f2,
    p: Q,
    q: J,
    Q: q0,
    s: B0,
    S: d2,
    u: p2,
    U: h2,
    V: v2,
    w: y2,
    W: m2,
    x: null,
    X: null,
    y: g2,
    Y: x2,
    Z: O2,
    "%": L0
  }, m = {
    a: D,
    A: T,
    b: $,
    B: M,
    c: j,
    d: D0,
    e: D0,
    f: qN,
    g: I0,
    G: $0,
    H: k0,
    I: k0,
    j: kN,
    L: LN,
    m: DN,
    M: NN,
    p: P,
    q: IN,
    Q: FN,
    s: zN,
    S: RN,
    u: EN,
    U: CN,
    V: jN,
    w: TN,
    W: MN,
    x: I,
    X: k,
    y: I0,
    Y: $0,
    Z: $N,
    "%": BN
  };
  x.x = w(r, x), x.X = w(n, x), x.c = w(t, x), O.x = w(r, O), O.X = w(n, O), O.c = w(t, O);
  function w(U, V) {
    return function(Z) {
      var E = [], Y = -1, F = 0, ae = U.length, ce, oe, Se;
      for (Z instanceof Date || (Z = /* @__PURE__ */ new Date(+Z)); ++Y < ae; )
        U.charCodeAt(Y) === 37 && (E.push(U.slice(F, Y)), (oe = M0[ce = U.charAt(++Y)]) != null ? ce = U.charAt(++Y) : oe = ce === "e" ? " " : "0", (Se = V[ce]) && (ce = Se(Z, oe)), E.push(ce), F = Y + 1);
      return E.push(U.slice(F, Y)), E.join("");
    };
  }
  function S(U, V) {
    return function(Z) {
      var E = wa(1900, void 0, 1), Y = A(E, U, Z += "", 0), F, ae;
      if (Y != Z.length) return null;
      if ("Q" in E) return new Date(E.Q);
      if ("s" in E) return new Date(E.s * 1e3 + ("L" in E ? E.L : 0));
      if (V && !("Z" in E) && (E.Z = 0), "p" in E && (E.H = E.H % 12 + E.p * 12), E.m === void 0 && (E.m = "q" in E ? E.q : 0), "V" in E) {
        if (E.V < 1 || E.V > 53) return null;
        "w" in E || (E.w = 1), "Z" in E ? (F = Df(wa(E.y, 0, 1)), ae = F.getUTCDay(), F = ae > 4 || ae === 0 ? Wo.ceil(F) : Wo(F), F = Fs.offset(F, (E.V - 1) * 7), E.y = F.getUTCFullYear(), E.m = F.getUTCMonth(), E.d = F.getUTCDate() + (E.w + 6) % 7) : (F = If(wa(E.y, 0, 1)), ae = F.getDay(), F = ae > 4 || ae === 0 ? zo.ceil(F) : zo(F), F = Ui.offset(F, (E.V - 1) * 7), E.y = F.getFullYear(), E.m = F.getMonth(), E.d = F.getDate() + (E.w + 6) % 7);
      } else ("W" in E || "U" in E) && ("w" in E || (E.w = "u" in E ? E.u % 7 : "W" in E ? 1 : 0), ae = "Z" in E ? Df(wa(E.y, 0, 1)).getUTCDay() : If(wa(E.y, 0, 1)).getDay(), E.m = 0, E.d = "W" in E ? (E.w + 6) % 7 + E.W * 7 - (ae + 5) % 7 : E.w + E.U * 7 - (ae + 6) % 7);
      return "Z" in E ? (E.H += E.Z / 100 | 0, E.M += E.Z % 100, Df(E)) : If(E);
    };
  }
  function A(U, V, Z, E) {
    for (var Y = 0, F = V.length, ae = Z.length, ce, oe; Y < F; ) {
      if (E >= ae) return -1;
      if (ce = V.charCodeAt(Y++), ce === 37) {
        if (ce = V.charAt(Y++), oe = m[ce in M0 ? V.charAt(Y++) : ce], !oe || (E = oe(U, Z, E)) < 0) return -1;
      } else if (ce != Z.charCodeAt(E++))
        return -1;
    }
    return E;
  }
  function P(U, V, Z) {
    var E = c.exec(V.slice(Z));
    return E ? (U.p = l.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function D(U, V, Z) {
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
    return A(U, t, V, Z);
  }
  function I(U, V, Z) {
    return A(U, r, V, Z);
  }
  function k(U, V, Z) {
    return A(U, n, V, Z);
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
  function ee(U) {
    return u[U.getUTCMonth()];
  }
  function ne(U) {
    return s[U.getUTCMonth()];
  }
  function Q(U) {
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
      var V = S(U += "", !1);
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
      var V = S(U += "", !0);
      return V.toString = function() {
        return U;
      }, V;
    }
  };
}
var M0 = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, _N = /^%/, AN = /[\\^$*+?|[\]().{}]/g;
function ve(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function PN(e) {
  return e.replace(AN, "\\$&");
}
function Oa(e) {
  return new RegExp("^(?:" + e.map(PN).join("|") + ")", "i");
}
function Sa(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function TN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function EN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function CN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function jN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function MN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function $0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function I0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function $N(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function IN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function DN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function D0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function kN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function k0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function NN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function RN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function LN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function qN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function BN(e, t, r) {
  var n = _N.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function FN(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function zN(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function N0(e, t) {
  return ve(e.getDate(), t, 2);
}
function WN(e, t) {
  return ve(e.getHours(), t, 2);
}
function UN(e, t) {
  return ve(e.getHours() % 12 || 12, t, 2);
}
function HN(e, t) {
  return ve(1 + Ui.count(cr(e), e), t, 3);
}
function s_(e, t) {
  return ve(e.getMilliseconds(), t, 3);
}
function KN(e, t) {
  return s_(e, t) + "000";
}
function VN(e, t) {
  return ve(e.getMonth() + 1, t, 2);
}
function GN(e, t) {
  return ve(e.getMinutes(), t, 2);
}
function YN(e, t) {
  return ve(e.getSeconds(), t, 2);
}
function XN(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ZN(e, t) {
  return ve(zs.count(cr(e) - 1, e), t, 2);
}
function u_(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Dn(e) : Dn.ceil(e);
}
function JN(e, t) {
  return e = u_(e), ve(Dn.count(cr(e), e) + (cr(e).getDay() === 4), t, 2);
}
function QN(e) {
  return e.getDay();
}
function e2(e, t) {
  return ve(zo.count(cr(e) - 1, e), t, 2);
}
function t2(e, t) {
  return ve(e.getFullYear() % 100, t, 2);
}
function r2(e, t) {
  return e = u_(e), ve(e.getFullYear() % 100, t, 2);
}
function n2(e, t) {
  return ve(e.getFullYear() % 1e4, t, 4);
}
function a2(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Dn(e) : Dn.ceil(e), ve(e.getFullYear() % 1e4, t, 4);
}
function i2(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ve(t / 60 | 0, "0", 2) + ve(t % 60, "0", 2);
}
function R0(e, t) {
  return ve(e.getUTCDate(), t, 2);
}
function o2(e, t) {
  return ve(e.getUTCHours(), t, 2);
}
function s2(e, t) {
  return ve(e.getUTCHours() % 12 || 12, t, 2);
}
function u2(e, t) {
  return ve(1 + Fs.count(lr(e), e), t, 3);
}
function c_(e, t) {
  return ve(e.getUTCMilliseconds(), t, 3);
}
function c2(e, t) {
  return c_(e, t) + "000";
}
function l2(e, t) {
  return ve(e.getUTCMonth() + 1, t, 2);
}
function f2(e, t) {
  return ve(e.getUTCMinutes(), t, 2);
}
function d2(e, t) {
  return ve(e.getUTCSeconds(), t, 2);
}
function p2(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function h2(e, t) {
  return ve(Ws.count(lr(e) - 1, e), t, 2);
}
function l_(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? kn(e) : kn.ceil(e);
}
function v2(e, t) {
  return e = l_(e), ve(kn.count(lr(e), e) + (lr(e).getUTCDay() === 4), t, 2);
}
function y2(e) {
  return e.getUTCDay();
}
function m2(e, t) {
  return ve(Wo.count(lr(e) - 1, e), t, 2);
}
function g2(e, t) {
  return ve(e.getUTCFullYear() % 100, t, 2);
}
function b2(e, t) {
  return e = l_(e), ve(e.getUTCFullYear() % 100, t, 2);
}
function x2(e, t) {
  return ve(e.getUTCFullYear() % 1e4, t, 4);
}
function w2(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? kn(e) : kn.ceil(e), ve(e.getUTCFullYear() % 1e4, t, 4);
}
function O2() {
  return "+0000";
}
function L0() {
  return "%";
}
function q0(e) {
  return +e;
}
function B0(e) {
  return Math.floor(+e / 1e3);
}
var hn, f_, d_;
S2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function S2(e) {
  return hn = SN(e), f_ = hn.format, hn.parse, d_ = hn.utcFormat, hn.utcParse, hn;
}
function _2(e) {
  return new Date(e);
}
function A2(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function lv(e, t, r, n, a, i, o, s, u, c) {
  var l = Xh(), f = l.invert, d = l.domain, p = c(".%L"), y = c(":%S"), h = c("%I:%M"), v = c("%I %p"), b = c("%a %d"), g = c("%b %d"), x = c("%B"), O = c("%Y");
  function m(w) {
    return (u(w) < w ? p : s(w) < w ? y : o(w) < w ? h : i(w) < w ? v : n(w) < w ? a(w) < w ? b : g : r(w) < w ? x : O)(w);
  }
  return l.invert = function(w) {
    return new Date(f(w));
  }, l.domain = function(w) {
    return arguments.length ? d(Array.from(w, A2)) : d().map(_2);
  }, l.ticks = function(w) {
    var S = d();
    return e(S[0], S[S.length - 1], w ?? 10);
  }, l.tickFormat = function(w, S) {
    return S == null ? m : c(S);
  }, l.nice = function(w) {
    var S = d();
    return (!w || typeof w.range != "function") && (w = t(S[0], S[S.length - 1], w ?? 10)), w ? d(JS(S, w)) : l;
  }, l.copy = function() {
    return Wi(l, lv(e, t, r, n, a, i, o, s, u, c));
  }, l;
}
function P2() {
  return Mt.apply(lv(wN, ON, cr, uv, zs, Ui, ov, av, zr, f_).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function T2() {
  return Mt.apply(lv(bN, xN, lr, cv, Ws, Fs, sv, iv, zr, d_).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
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
  return c.range = l(oa), c.rangeRound = l(Yh), c.unknown = function(f) {
    return arguments.length ? (u = f, c) : u;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function Cr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function p_() {
  var e = Er(Us()(st));
  return e.copy = function() {
    return Cr(e, p_());
  }, pr.apply(e, arguments);
}
function h_() {
  var e = Qh(Us()).domain([1, 10]);
  return e.copy = function() {
    return Cr(e, h_()).base(e.base());
  }, pr.apply(e, arguments);
}
function v_() {
  var e = ev(Us());
  return e.copy = function() {
    return Cr(e, v_()).constant(e.constant());
  }, pr.apply(e, arguments);
}
function fv() {
  var e = tv(Us());
  return e.copy = function() {
    return Cr(e, fv()).exponent(e.exponent());
  }, pr.apply(e, arguments);
}
function E2() {
  return fv.apply(null, arguments).exponent(0.5);
}
function y_() {
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
    return Array.from({ length: n + 1 }, (a, i) => hk(e, i / n));
  }, r.copy = function() {
    return y_(t).domain(e);
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
      return arguments.length ? ([b, g, x] = v, c = Bk(h, [b, g, x]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = y(oa), p.rangeRound = y(Yh), p.unknown = function(h) {
    return arguments.length ? (d = h, p) : d;
  }, function(h) {
    return l = h, a = h(e), i = h(t), o = h(r), s = a === i ? 0 : 0.5 / (i - a), u = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function m_() {
  var e = Er(Hs()(st));
  return e.copy = function() {
    return Cr(e, m_());
  }, pr.apply(e, arguments);
}
function g_() {
  var e = Qh(Hs()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Cr(e, g_()).base(e.base());
  }, pr.apply(e, arguments);
}
function b_() {
  var e = ev(Hs());
  return e.copy = function() {
    return Cr(e, b_()).constant(e.constant());
  }, pr.apply(e, arguments);
}
function dv() {
  var e = tv(Hs());
  return e.copy = function() {
    return Cr(e, dv()).exponent(e.exponent());
  }, pr.apply(e, arguments);
}
function C2() {
  return dv.apply(null, arguments).exponent(0.5);
}
const F0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: ni,
  scaleDiverging: m_,
  scaleDivergingLog: g_,
  scaleDivergingPow: dv,
  scaleDivergingSqrt: C2,
  scaleDivergingSymlog: b_,
  scaleIdentity: ZS,
  scaleImplicit: ap,
  scaleLinear: Bo,
  scaleLog: QS,
  scaleOrdinal: Kh,
  scalePoint: Ra,
  scalePow: rv,
  scaleQuantile: r_,
  scaleQuantize: n_,
  scaleRadial: t_,
  scaleSequential: p_,
  scaleSequentialLog: h_,
  scaleSequentialPow: fv,
  scaleSequentialQuantile: y_,
  scaleSequentialSqrt: E2,
  scaleSequentialSymlog: v_,
  scaleSqrt: cN,
  scaleSymlog: e_,
  scaleThreshold: a_,
  scaleTime: P2,
  scaleUtc: T2,
  tickFormat: XS
}, Symbol.toStringTag, { value: "Module" }));
var kf, z0;
function Ks() {
  if (z0) return kf;
  z0 = 1;
  var e = ra();
  function t(r, n, a) {
    for (var i = -1, o = r.length; ++i < o; ) {
      var s = r[i], u = n(s);
      if (u != null && (c === void 0 ? u === u && !e(u) : a(u, c)))
        var c = u, l = s;
    }
    return l;
  }
  return kf = t, kf;
}
var Nf, W0;
function x_() {
  if (W0) return Nf;
  W0 = 1;
  function e(t, r) {
    return t > r;
  }
  return Nf = e, Nf;
}
var Rf, U0;
function j2() {
  if (U0) return Rf;
  U0 = 1;
  var e = Ks(), t = x_(), r = ia();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Rf = n, Rf;
}
var M2 = j2();
const wr = /* @__PURE__ */ Ae(M2);
var Lf, H0;
function w_() {
  if (H0) return Lf;
  H0 = 1;
  function e(t, r) {
    return t < r;
  }
  return Lf = e, Lf;
}
var qf, K0;
function $2() {
  if (K0) return qf;
  K0 = 1;
  var e = Ks(), t = w_(), r = ia();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return qf = n, qf;
}
var I2 = $2();
const Vs = /* @__PURE__ */ Ae(I2);
var Bf, V0;
function D2() {
  if (V0) return Bf;
  V0 = 1;
  var e = Ih(), t = Qt(), r = CS(), n = dt();
  function a(i, o) {
    var s = n(i) ? e : r;
    return s(i, t(o, 3));
  }
  return Bf = a, Bf;
}
var Ff, G0;
function k2() {
  if (G0) return Ff;
  G0 = 1;
  var e = TS(), t = D2();
  function r(n, a) {
    return e(t(n, a), 1);
  }
  return Ff = r, Ff;
}
var N2 = k2();
const R2 = /* @__PURE__ */ Ae(N2);
var sa = 1e9, L2 = {
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
}, hv, Ie = !0, Ct = "[DecimalError] ", Yr = Ct + "Invalid argument: ", pv = Ct + "Exponent out of range: ", ua = Math.floor, Lr = Math.pow, q2 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, mt, Xe = 1e7, $e = 7, O_ = 9007199254740991, Uo = ua(O_ / $e), re = {};
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
  else if (e = new n(e), e.s < 1 || e.eq(mt)) throw Error(Ct + "NaN");
  if (r.s < 1) throw Error(Ct + (r.s ? "NaN" : "-Infinity"));
  return r.eq(mt) ? new n(0) : (Ie = !1, t = sr(ui(r, i), ui(e, i), i), Ie = !0, Pe(t, a));
};
re.minus = re.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? A_(t, e) : S_(t, (e.s = -e.s, e));
};
re.modulo = re.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(Ct + "NaN");
  return r.s ? (Ie = !1, t = sr(r, e, 0, 1).times(e), Ie = !0, r.minus(t)) : Pe(new n(r), a);
};
re.naturalExponential = re.exp = function() {
  return __(this);
};
re.naturalLogarithm = re.ln = function() {
  return ui(this);
};
re.negated = re.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
re.plus = re.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? S_(t, e) : A_(t, (e.s = -e.s, e));
};
re.precision = re.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Yr + e);
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
  for (e = Fe(s), Ie = !1, a = Math.sqrt(+s), a == 0 || a == 1 / 0 ? (t = Kt(s.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = ua((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(a.toString()), r = u.precision, a = o = r + 3; ; )
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
      s = i[a] + p[n] * d[a - n - 1] + t, i[a--] = s % Xe | 0, t = s / Xe | 0;
    i[a] = (i[a] + t) % Xe | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, Ie ? Pe(e, f.precision) : e;
};
re.toDecimalPlaces = re.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Zt(e, 0, sa), t === void 0 ? t = n.rounding : Zt(t, 0, 8), Pe(r, e + Fe(r) + 1, t));
};
re.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = en(n, !0) : (Zt(e, 0, sa), t === void 0 ? t = a.rounding : Zt(t, 0, 8), n = Pe(new a(n), e + 1, t), r = en(n, !0, e + 1)), r;
};
re.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? en(a) : (Zt(e, 0, sa), t === void 0 ? t = i.rounding : Zt(t, 0, 8), n = Pe(new i(a), e + Fe(a) + 1, t), r = en(n.abs(), !1, e + Fe(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
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
  if (!e.s) return new u(mt);
  if (s = new u(s), !s.s) {
    if (e.s < 1) throw Error(Ct + "Infinity");
    return s;
  }
  if (s.eq(mt)) return s;
  if (n = u.precision, e.eq(mt)) return Pe(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = s.s, o) {
    if ((r = l < 0 ? -l : l) <= O_) {
      for (a = new u(mt), t = Math.ceil(n / $e + 4), Ie = !1; r % 2 && (a = a.times(s), X0(a.d, t)), r = ua(r / 2), r !== 0; )
        s = s.times(s), X0(s.d, t);
      return Ie = !0, e.s < 0 ? new u(mt).div(a) : Pe(a, n);
    }
  } else if (i < 0) throw Error(Ct + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ie = !1, a = e.times(ui(s, n + c)), Ie = !0, a = __(a), a.s = i, a;
};
re.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = Fe(a), n = en(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Zt(e, 1, sa), t === void 0 ? t = i.rounding : Zt(t, 0, 8), a = Pe(new i(a), e, t), r = Fe(a), n = en(a, e <= r || r <= i.toExpNeg, e)), n;
};
re.toSignificantDigits = re.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Zt(e, 1, sa), t === void 0 ? t = n.rounding : Zt(t, 0, 8)), Pe(new n(r), e, t);
};
re.toString = re.valueOf = re.val = re.toJSON = re[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Fe(e), r = e.constructor;
  return en(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function S_(e, t) {
  var r, n, a, i, o, s, u, c, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), Ie ? Pe(t, f) : t;
  if (u = e.d, c = t.d, o = e.e, a = t.e, u = u.slice(), i = o - a, i) {
    for (i < 0 ? (n = u, i = -i, s = c.length) : (n = c, a = o, s = u.length), o = Math.ceil(f / $e), s = o > s ? o + 1 : s + 1, i > s && (i = s, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (s = u.length, i = c.length, s - i < 0 && (i = s, n = c, c = u, u = n), r = 0; i; )
    r = (u[--i] = u[i] + c[i] + r) / Xe | 0, u[i] %= Xe;
  for (r && (u.unshift(r), ++a), s = u.length; u[--s] == 0; ) u.pop();
  return t.d = u, t.e = a, Ie ? Pe(t, f) : t;
}
function Zt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Yr + e);
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
      i = n[s] * a + o, n[s] = i % Xe | 0, o = i / Xe | 0;
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
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * Xe + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var s, u, c, l, f, d, p, y, h, v, b, g, x, O, m, w, S, A, P = n.constructor, D = n.s == a.s ? 1 : -1, T = n.d, $ = a.d;
    if (!n.s) return new P(n);
    if (!a.s) throw Error(Ct + "Division by zero");
    for (u = n.e - a.e, S = $.length, m = T.length, p = new P(D), y = p.d = [], c = 0; $[c] == (T[c] || 0); ) ++c;
    if ($[c] > (T[c] || 0) && --u, i == null ? g = i = P.precision : o ? g = i + (Fe(n) - Fe(a)) + 1 : g = i, g < 0) return new P(0);
    if (g = g / $e + 2 | 0, c = 0, S == 1)
      for (l = 0, $ = $[0], g++; (c < m || l) && g--; c++)
        x = l * Xe + (T[c] || 0), y[c] = x / $ | 0, l = x % $ | 0;
    else {
      for (l = Xe / ($[0] + 1) | 0, l > 1 && ($ = e($, l), T = e(T, l), S = $.length, m = T.length), O = S, h = T.slice(0, S), v = h.length; v < S; ) h[v++] = 0;
      A = $.slice(), A.unshift(0), w = $[0], $[1] >= Xe / 2 && ++w;
      do
        l = 0, s = t($, h, S, v), s < 0 ? (b = h[0], S != v && (b = b * Xe + (h[1] || 0)), l = b / w | 0, l > 1 ? (l >= Xe && (l = Xe - 1), f = e($, l), d = f.length, v = h.length, s = t(f, h, d, v), s == 1 && (l--, r(f, S < d ? A : $, d))) : (l == 0 && (s = l = 1), f = $.slice()), d = f.length, d < v && f.unshift(0), r(h, f, v), s == -1 && (v = h.length, s = t($, h, S, v), s < 1 && (l++, r(h, S < v ? A : $, v))), v = h.length) : s === 0 && (l++, h = [0]), y[c++] = l, s && h[0] ? h[v++] = T[O] || 0 : (h = [T[O]], v = 1);
      while ((O++ < m || h[0] !== void 0) && g--);
    }
    return y[0] || y.shift(), p.e = u, Pe(p, o ? i + Fe(p) + 1 : i);
  };
})();
function __(e, t) {
  var r, n, a, i, o, s, u = 0, c = 0, l = e.constructor, f = l.precision;
  if (Fe(e) > 16) throw Error(pv + Fe(e));
  if (!e.s) return new l(mt);
  for (Ie = !1, s = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(Lr(2, c)) / Math.LN10 * 2 + 5 | 0, s += n, r = a = i = new l(mt), l.precision = s; ; ) {
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
function zf(e, t, r) {
  if (t > e.LN10.sd())
    throw Ie = !0, r && (e.precision = r), Error(Ct + "LN10 precision limit exceeded");
  return Pe(new e(e.LN10), t);
}
function br(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function ui(e, t) {
  var r, n, a, i, o, s, u, c, l, f = 1, d = 10, p = e, y = p.d, h = p.constructor, v = h.precision;
  if (p.s < 1) throw Error(Ct + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(mt)) return new h(0);
  if (t == null ? (Ie = !1, c = v) : c = t, p.eq(10))
    return t == null && (Ie = !0), zf(h, c);
  if (c += d, h.precision = c, r = Kt(y), n = r.charAt(0), i = Fe(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = Kt(p.d), n = r.charAt(0), f++;
    i = Fe(p), n > 1 ? (p = new h("0." + r), i++) : p = new h(n + "." + r.slice(1));
  } else
    return u = zf(h, c + 2, v).times(i + ""), p = ui(new h(n + "." + r.slice(1)), c - d).plus(u), h.precision = v, t == null ? (Ie = !0, Pe(p, v)) : p;
  for (s = o = p = sr(p.minus(mt), p.plus(mt), c), l = Pe(p.times(p), c), a = 3; ; ) {
    if (o = Pe(o.times(l), c), u = s.plus(sr(o, new h(a), c)), Kt(u.d).slice(0, c) === Kt(s.d).slice(0, c))
      return s = s.times(2), i !== 0 && (s = s.plus(zf(h, c + 2, v).times(i + ""))), s = sr(s, new h(f), c), h.precision = v, t == null ? (Ie = !0, Pe(s, v)) : s;
    s = u, a += 2;
  }
}
function Y0(e, t) {
  var r, n, a;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (t = t.slice(n, a), t) {
    if (a -= n, r = r - n - 1, e.e = ua(r / $e), e.d = [], n = (r + 1) % $e, r < 0 && (n += $e), n < a) {
      for (n && e.d.push(+t.slice(0, n)), a -= $e; n < a; ) e.d.push(+t.slice(n, n += $e));
      t = t.slice(n), n = $e - t.length;
    } else
      n -= a;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Ie && (e.e > Uo || e.e < -Uo)) throw Error(pv + r);
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
  if (r !== void 0 && (i = Lr(10, o - a - 1), s = c / i % 10 | 0, u = t < 0 || f[l + 1] !== void 0 || c % i, u = r < 4 ? (s || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || u || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? c / Lr(10, o - a) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return u ? (i = Fe(e), f.length = 1, t = t - i - 1, f[0] = Lr(10, ($e - t % $e) % $e), e.e = ua(-t / $e) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, i = 1, l--) : (f.length = l + 1, i = Lr(10, $e - n), f[l] = a > 0 ? (c / Lr(10, o - a) % Lr(10, a) | 0) * i : 0), u)
    for (; ; )
      if (l == 0) {
        (f[0] += i) == Xe && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += i, f[l] != Xe) break;
        f[l--] = 0, i = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Ie && (e.e > Uo || e.e < -Uo))
    throw Error(pv + Fe(e));
  return e;
}
function A_(e, t) {
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
      for (i = a; i && u[--i] === 0; ) u[i] = Xe - 1;
      --u[i], u[a] += Xe;
    }
    u[a] -= f[a];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? (t.d = u, t.e = n, Ie ? Pe(t, p) : t) : new d(0);
}
function en(e, t, r) {
  var n, a = Fe(e), i = Kt(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + br(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + br(-a - 1) + i, r && (n = r - o) > 0 && (i += br(n))) : a >= o ? (i += br(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + br(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += br(n))), e.s < 0 ? "-" + i : i;
}
function X0(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function P_(e) {
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
        throw Error(Yr + i);
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
      return Y0(o, i.toString());
    } else if (typeof i != "string")
      throw Error(Yr + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, q2.test(i)) Y0(o, i);
    else throw Error(Yr + i);
  }
  if (a.prototype = re, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = P_, a.config = a.set = B2, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function B2(e) {
  if (!e || typeof e != "object")
    throw Error(Ct + "Object expected");
  var t, r, n, a = [
    "precision",
    1,
    sa,
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
      if (ua(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(Yr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Yr + r + ": " + n);
  return this;
}
var hv = P_(L2);
mt = new hv(1);
const _e = hv;
function F2(e) {
  return H2(e) || U2(e) || W2(e) || z2();
}
function z2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W2(e, t) {
  if (e) {
    if (typeof e == "string") return up(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return up(e, t);
  }
}
function U2(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function H2(e) {
  if (Array.isArray(e)) return up(e);
}
function up(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var K2 = function(t) {
  return t;
}, T_ = {}, E_ = function(t) {
  return t === T_;
}, Z0 = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && E_(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, V2 = function e(t, r) {
  return t === 1 ? r : Z0(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(s) {
      return s !== T_;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, Z0(function() {
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      var l = a.map(function(f) {
        return E_(f) ? u.shift() : f;
      });
      return r.apply(void 0, F2(l).concat(u));
    }));
  });
}, Gs = function(t) {
  return V2(t.length, t);
}, cp = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, G2 = Gs(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), Y2 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return K2;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(s, u) {
      return u(s);
    }, i.apply(void 0, arguments));
  };
}, lp = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, C_ = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(s, u) {
      return s === r[u];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function X2(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new _e(e).abs().log(10).toNumber()) + 1, t;
}
function Z2(e, t, r) {
  for (var n = new _e(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var J2 = Gs(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), Q2 = Gs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), eR = Gs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Ys = {
  rangeStep: Z2,
  getDigitCount: X2,
  interpolateNumber: J2,
  uninterpolateNumber: Q2,
  uninterpolateTruncation: eR
};
function fp(e) {
  return nR(e) || rR(e) || j_(e) || tR();
}
function tR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rR(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function nR(e) {
  if (Array.isArray(e)) return dp(e);
}
function ci(e, t) {
  return oR(e) || iR(e, t) || j_(e, t) || aR();
}
function aR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function j_(e, t) {
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
function iR(e, t) {
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
function oR(e) {
  if (Array.isArray(e)) return e;
}
function M_(e) {
  var t = ci(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function $_(e, t, r) {
  if (e.lte(0))
    return new _e(0);
  var n = Ys.getDigitCount(e.toNumber()), a = new _e(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, s = new _e(Math.ceil(i.div(o).toNumber())).add(r).mul(o), u = s.mul(a);
  return t ? u : new _e(Math.ceil(u));
}
function sR(e, t, r) {
  var n = 1, a = new _e(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new _e(10).pow(Ys.getDigitCount(e) - 1), a = new _e(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new _e(Math.floor(e)));
  } else e === 0 ? a = new _e(Math.floor((t - 1) / 2)) : r || (a = new _e(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = Y2(G2(function(u) {
    return a.add(new _e(u - o).mul(n)).toNumber();
  }), cp);
  return s(0, t);
}
function I_(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new _e(0),
      tickMin: new _e(0),
      tickMax: new _e(0)
    };
  var i = $_(new _e(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new _e(0) : (o = new _e(e).add(t).div(2), o = o.sub(new _e(o).mod(i)));
  var s = Math.ceil(o.sub(e).div(i).toNumber()), u = Math.ceil(new _e(t).sub(o).div(i).toNumber()), c = s + u + 1;
  return c > r ? I_(e, t, r, n, a + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, s = t > 0 ? s : s + (r - c)), {
    step: i,
    tickMin: o.sub(new _e(s).mul(i)),
    tickMax: o.add(new _e(u).mul(i))
  });
}
function uR(e) {
  var t = ci(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), s = M_([r, n]), u = ci(s, 2), c = u[0], l = u[1];
  if (c === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [c].concat(fp(cp(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(fp(cp(0, a - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? lp(f) : f;
  }
  if (c === l)
    return sR(c, a, i);
  var d = I_(c, l, o, i), p = d.step, y = d.tickMin, h = d.tickMax, v = Ys.rangeStep(y, h.add(new _e(0.1).mul(p)), p);
  return r > n ? lp(v) : v;
}
function cR(e, t) {
  var r = ci(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = M_([n, a]), s = ci(o, 2), u = s[0], c = s[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (u === c)
    return [u];
  var l = Math.max(t, 2), f = $_(new _e(c).sub(u).div(l - 1), i, 0), d = [].concat(fp(Ys.rangeStep(new _e(u), new _e(c).sub(new _e(0.99).mul(f)), f)), [c]);
  return n > a ? lp(d) : d;
}
var lR = C_(uR), fR = C_(cR), dR = process.env.NODE_ENV === "production", Wf = "Invariant failed";
function ct(e, t) {
  if (dR)
    throw new Error(Wf);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Wf, ": ").concat(r) : Wf;
  throw new Error(n);
}
var pR = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Nn(e) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e);
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
function hR(e, t) {
  return gR(e) || mR(e, t) || yR(e, t) || vR();
}
function vR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yR(e, t) {
  if (e) {
    if (typeof e == "string") return J0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return J0(e, t);
  }
}
function J0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mR(e, t) {
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
function gR(e) {
  if (Array.isArray(e)) return e;
}
function bR(e, t) {
  if (e == null) return {};
  var r = xR(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function wR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function OR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, N_(n.key), n);
  }
}
function SR(e, t, r) {
  return t && OR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _R(e, t, r) {
  return t = Ko(t), AR(e, D_() ? Reflect.construct(t, r || [], Ko(e).constructor) : t.apply(e, r));
}
function AR(e, t) {
  if (t && (Nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return PR(e);
}
function PR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function D_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (D_ = function() {
    return !!e;
  })();
}
function Ko(e) {
  return Ko = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ko(e);
}
function TR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pp(e, t);
}
function pp(e, t) {
  return pp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, pp(e, t);
}
function k_(e, t, r) {
  return t = N_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N_(e) {
  var t = ER(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function ER(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hi = /* @__PURE__ */ (function(e) {
  function t() {
    return wR(this, t), _R(this, t, arguments);
  }
  return TR(t, e), SR(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, s = n.dataKey, u = n.data, c = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, d = bR(n, pR), p = ie(d, !1);
      this.props.direction === "x" && l.type !== "number" && (process.env.NODE_ENV !== "production" ? ct(!1, 'ErrorBar requires Axis type property to be "number".') : ct());
      var y = u.map(function(h) {
        var v = c(h, s), b = v.x, g = v.y, x = v.value, O = v.errorVal;
        if (!O)
          return null;
        var m = [], w, S;
        if (Array.isArray(O)) {
          var A = hR(O, 2);
          w = A[0], S = A[1];
        } else
          w = S = O;
        if (i === "vertical") {
          var P = l.scale, D = g + a, T = D + o, $ = D - o, M = P(x - w), j = P(x + S);
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
          var I = f.scale, k = b + a, R = k - o, L = k + o, z = I(x - w), N = I(x + S);
          m.push({
            x1: R,
            y1: N,
            x2: L,
            y2: N
          }), m.push({
            x1: k,
            y1: z,
            x2: k,
            y2: N
          }), m.push({
            x1: R,
            y1: z,
            x2: L,
            y2: z
          });
        }
        return /* @__PURE__ */ C.createElement(de, Ho({
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
      return /* @__PURE__ */ C.createElement(de, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
})(C.Component);
k_(Hi, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
k_(Hi, "displayName", "ErrorBar");
function li(e) {
  "@babel/helpers - typeof";
  return li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, li(e);
}
function Q0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Q0(Object(r), !0).forEach(function(n) {
      CR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Q0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CR(e, t, r) {
  return t = jR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jR(e) {
  var t = MR(e, "string");
  return li(t) == "symbol" ? t : t + "";
}
function MR(e, t) {
  if (li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var R_ = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = vt(r, Vr);
  if (!o)
    return null;
  var s = Vr.defaultProps, u = s !== void 0 ? Ir(Ir({}, s), o.props) : {}, c;
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
    var f = l.item, d = f.type.defaultProps, p = d !== void 0 ? Ir(Ir({}, d), f.props) : {}, y = p.dataKey, h = p.name, v = p.legendType, b = p.hide;
    return {
      inactive: b,
      dataKey: y,
      type: u.iconType || v || "square",
      color: vv(f),
      value: h || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
    };
  }), Ir(Ir(Ir({}, u), Vr.getWithHeight(o, a)), {}, {
    payload: c,
    item: o
  });
};
function fi(e) {
  "@babel/helpers - typeof";
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fi(e);
}
function ex(e) {
  return kR(e) || DR(e) || IR(e) || $R();
}
function $R() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IR(e, t) {
  if (e) {
    if (typeof e == "string") return hp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hp(e, t);
  }
}
function DR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kR(e) {
  if (Array.isArray(e)) return hp(e);
}
function hp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tx(e, t) {
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
    t % 2 ? tx(Object(r), !0).forEach(function(n) {
      Pn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pn(e, t, r) {
  return t = NR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NR(e) {
  var t = RR(e, "string");
  return fi(t) == "symbol" ? t : t + "";
}
function RR(e, t) {
  if (fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Re(e, t, r) {
  return le(e) || le(t) ? r : Ve(t) ? gt(e, t, r) : ue(t) ? t(e) : r;
}
function La(e, t, r, n) {
  var a = R2(e, function(s) {
    return Re(s, t);
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
    return Ve(s) || s instanceof Date ? s : "";
  });
}
var LR = function(t) {
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
}, vv = function(t) {
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
}, qR = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, s = Object.keys(i), u = 0, c = s.length; u < c; u++)
    for (var l = i[s[u]].stackGroups, f = Object.keys(l), d = 0, p = f.length; d < p; d++) {
      var y = l[f[d]], h = y.items, v = y.cateAxisId, b = h.filter(function(S) {
        return or(S.type).indexOf("Bar") >= 0;
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
}, BR = function(t) {
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
      }, S = [].concat(ex(O), [w]);
      return v = S[S.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(A) {
        S.push({
          item: A,
          position: v
        });
      }), S;
    }, f);
  } else {
    var b = ot(n, a, 0, !0);
    a - 2 * b - (u - 1) * c <= 0 && (c = 0);
    var g = (a - 2 * b - (u - 1) * c) / u;
    g > 1 && (g >>= 0);
    var x = s === +s ? Math.min(g, s) : g;
    l = o.reduce(function(O, m, w) {
      var S = [].concat(ex(O), [{
        item: m.item,
        position: {
          offset: b + (g + c) * w + (g - x) / 2,
          size: x
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(A) {
        S.push({
          item: A,
          position: S[S.length - 1].position
        });
      }), S;
    }, f);
  }
  return l;
}, FR = function(t, r, n, a) {
  var i = n.children, o = n.width, s = n.margin, u = o - (s.left || 0) - (s.right || 0), c = R_({
    children: i,
    legendWidth: u
  });
  if (c) {
    var l = a || {}, f = l.width, d = l.height, p = c.align, y = c.verticalAlign, h = c.layout;
    if ((h === "vertical" || h === "horizontal" && y === "middle") && p !== "center" && G(t[p]))
      return Ne(Ne({}, t), {}, Pn({}, p, t[p] + (f || 0)));
    if ((h === "horizontal" || h === "vertical" && p === "center") && y !== "middle" && G(t[y]))
      return Ne(Ne({}, t), {}, Pn({}, y, t[y] + (d || 0)));
  }
  return t;
}, zR = function(t, r, n) {
  return le(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, L_ = function(t, r, n, a, i) {
  var o = r.props.children, s = bt(o, Hi).filter(function(c) {
    return zR(a, i, c.props.direction);
  });
  if (s && s.length) {
    var u = s.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, l) {
      var f = Re(l, n);
      if (le(f)) return c;
      var d = Array.isArray(f) ? [Vs(f), wr(f)] : [f, f], p = u.reduce(function(y, h) {
        var v = Re(l, h, 0), b = d[0] - Math.abs(Array.isArray(v) ? v[0] : v), g = d[1] + Math.abs(Array.isArray(v) ? v[1] : v);
        return [Math.min(b, y[0]), Math.max(g, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, WR = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    return L_(t, s, n, i, a);
  }).filter(function(s) {
    return !le(s);
  });
  return o && o.length ? o.reduce(function(s, u) {
    return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, q_ = function(t, r, n, a, i) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && L_(t, u, c, a) || La(t, c, n, i);
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
}, B_ = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, F_ = function(t, r, n, a) {
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
      return !aa(f.coordinate);
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
}, Uf = /* @__PURE__ */ new WeakMap(), co = function(t, r) {
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
}, z_ = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, s = t.axisType;
  if (a === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: ni(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: Bo(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Ra(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: ni(),
      realScaleType: "band"
    } : {
      scale: Bo(),
      realScaleType: "linear"
    };
  if (Bi(a)) {
    var u = "scale".concat(Is(a));
    return {
      scale: (F0[u] || Ra)(),
      realScaleType: F0[u] ? u : "point"
    };
  }
  return ue(a) ? {
    scale: a
  } : {
    scale: Ra(),
    realScaleType: "point"
  };
}, rx = 1e-4, W_ = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - rx, o = Math.max(a[0], a[1]) + rx, s = t(r[0]), u = t(r[n - 1]);
    (s < i || s > o || u < i || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, UR = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, HR = function(t, r) {
  if (!r || r.length !== 2 || !G(r[0]) || !G(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!G(t[0]) || t[0] < n) && (i[0] = n), (!G(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, KR = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, s = 0; s < r; ++s) {
        var u = aa(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = i, t[s][n][1] = i + u, i = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1]);
      }
}, VR = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var s = aa(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + s, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, GR = {
  sign: KR,
  // @ts-expect-error definitelytyped types are incorrect
  expand: d$,
  // @ts-expect-error definitelytyped types are incorrect
  none: En,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: p$,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: h$,
  positive: VR
}, YR = function(t, r, n) {
  var a = r.map(function(s) {
    return s.props.dataKey;
  }), i = GR[n], o = f$().keys(a).value(function(s, u) {
    return +Re(s, u, 0);
  }).order(Ud).offset(i);
  return o(t);
}, XR = function(t, r, n, a, i, o) {
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
    if (Ve(h)) {
      var x = g.stackGroups[h] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      x.items.push(d), g.hasStack = !0, g.stackGroups[h] = x;
    } else
      g.stackGroups[on("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return Ne(Ne({}, f), {}, Pn({}, b, g));
  }, u), l = {};
  return Object.keys(c).reduce(function(f, d) {
    var p = c[d];
    if (p.hasStack) {
      var y = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(h, v) {
        var b = p.stackGroups[v];
        return Ne(Ne({}, h), {}, Pn({}, v, {
          numericAxisId: n,
          cateAxisId: a,
          items: b.items,
          stackedData: YR(t, b.items, i)
        }));
      }, y);
    }
    return Ne(Ne({}, f), {}, Pn({}, d, p));
  }, l);
}, U_ = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, s = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var l = lR(c, i, s);
    return t.domain([Vs(l), wr(l)]), {
      niceTicks: l
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = fR(f, i, s);
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
var nx = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + a : null;
  var u = Re(o, r.dataKey, r.domain[s]);
  return le(u) ? null : r.scale(u) - i / 2 + a;
}, ZR = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, JR = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Ne(Ne({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (Ve(i)) {
    var o = r[i];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, QR = function(t) {
  return t.reduce(function(r, n) {
    return [Vs(n.concat([r[0]]).filter(G)), wr(n.concat([r[1]]).filter(G))];
  }, [1 / 0, -1 / 0]);
}, H_ = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], s = o.stackedData, u = s.reduce(function(c, l) {
      var f = QR(l.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], a[0]), Math.max(u[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, ax = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, ix = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, vp = function(t, r, n) {
  if (ue(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (G(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (ax.test(t[0])) {
    var i = +ax.exec(t[0])[1];
    a[0] = r[0] - i;
  } else ue(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (G(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (ix.test(t[1])) {
    var o = +ix.exec(t[1])[1];
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
    for (var i = Wh(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, u = i.length; s < u; s++) {
      var c = i[s], l = i[s - 1];
      o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, ox = function(t, r, n) {
  return !t || !t.length || Jr(t, gt(n, "type.defaultProps.domain")) ? r : t;
}, K_ = function(t, r) {
  var n = t.type.defaultProps ? Ne(Ne({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, s = n.formatter, u = n.tooltipType, c = n.chartType, l = n.hide;
  return Ne(Ne({}, ie(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: s,
    name: i || a,
    color: vv(t),
    value: Re(r, a),
    type: u,
    payload: r,
    chartType: c,
    hide: l
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
function sx(e, t) {
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
    t % 2 ? sx(Object(r), !0).forEach(function(n) {
      V_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function V_(e, t, r) {
  return t = eL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eL(e) {
  var t = tL(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function tL(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rL(e, t) {
  return oL(e) || iL(e, t) || aL(e, t) || nL();
}
function nL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aL(e, t) {
  if (e) {
    if (typeof e == "string") return ux(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ux(e, t);
  }
}
function ux(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function iL(e, t) {
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
function oL(e) {
  if (Array.isArray(e)) return e;
}
var Yo = Math.PI / 180, sL = function(t) {
  return t * 180 / Math.PI;
}, je = function(t, r, n, a) {
  return {
    x: t + Math.cos(-Yo * a) * n,
    y: r + Math.sin(-Yo * a) * n
  };
}, G_ = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, uL = function(t, r, n, a, i) {
  var o = t.width, s = t.height, u = t.startAngle, c = t.endAngle, l = ot(t.cx, o, o / 2), f = ot(t.cy, s, s / 2), d = G_(o, s, n), p = ot(t.innerRadius, d, 0), y = ot(t.outerRadius, d, d * 0.8), h = Object.keys(r);
  return h.reduce(function(v, b) {
    var g = r[b], x = g.domain, O = g.reversed, m;
    if (le(g.range))
      a === "angleAxis" ? m = [u, c] : a === "radiusAxis" && (m = [p, y]), O && (m = [m[1], m[0]]);
    else {
      m = g.range;
      var w = m, S = rL(w, 2);
      u = S[0], c = S[1];
    }
    var A = z_(g, i), P = A.realScaleType, D = A.scale;
    D.domain(x).range(m), W_(D);
    var T = U_(D, rr(rr({}, g), {}, {
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
    return rr(rr({}, v), {}, V_({}, b, $));
  }, {});
}, cL = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, lL = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, s = cL({
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
    angle: sL(c),
    angleInRadian: c
  };
}, fL = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, dL = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), s = Math.min(i, o);
  return t + s * 360;
}, cx = function(t, r) {
  var n = t.x, a = t.y, i = lL({
    x: n,
    y: a
  }, r), o = i.radius, s = i.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var l = fL(r), f = l.startAngle, d = l.endAngle, p = s, y;
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
    angle: dL(p, r)
  }) : null;
}, Y_ = function(t) {
  return !/* @__PURE__ */ Nt(t) && !ue(t) && typeof t != "boolean" ? t.className : "";
};
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
var pL = ["offset"];
function hL(e) {
  return gL(e) || mL(e) || yL(e) || vL();
}
function vL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yL(e, t) {
  if (e) {
    if (typeof e == "string") return yp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yp(e, t);
  }
}
function mL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gL(e) {
  if (Array.isArray(e)) return yp(e);
}
function yp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bL(e, t) {
  if (e == null) return {};
  var r = xL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lx(Object(r), !0).forEach(function(n) {
      wL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wL(e, t, r) {
  return t = OL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OL(e) {
  var t = SL(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function SL(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hi() {
  return hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hi.apply(this, arguments);
}
var _L = function(t) {
  var r = t.value, n = t.formatter, a = le(t.children) ? r : t.children;
  return ue(n) ? n(a) : a;
}, AL = function(t, r) {
  var n = it(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, PL = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, s = t.className, u = i, c = u.cx, l = u.cy, f = u.innerRadius, d = u.outerRadius, p = u.startAngle, y = u.endAngle, h = u.clockWise, v = (f + d) / 2, b = AL(p, y), g = b >= 0 ? 1 : -1, x, O;
  a === "insideStart" ? (x = p + g * o, O = h) : a === "insideEnd" ? (x = y - g * o, O = !h) : a === "end" && (x = y + g * o, O = h), O = b <= 0 ? O : !O;
  var m = je(c, l, v, x), w = je(c, l, v, x + (O ? 1 : -1) * 359), S = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), A = le(t.id) ? on("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ C.createElement("text", hi({}, n, {
    dominantBaseline: "central",
    className: fe("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("path", {
    id: A,
    d: S
  })), /* @__PURE__ */ C.createElement("textPath", {
    xlinkHref: "#".concat(A)
  }, r));
}, TL = function(t) {
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
}, EL = function(t) {
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
  var S = n ? {
    width: c,
    height: l
  } : {};
  return i === "insideLeft" ? We({
    x: s + v,
    y: u + l / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, S) : i === "insideRight" ? We({
    x: s + c - v,
    y: u + l / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, S) : i === "insideTop" ? We({
    x: s + c / 2,
    y: u + d,
    textAnchor: "middle",
    verticalAnchor: y
  }, S) : i === "insideBottom" ? We({
    x: s + c / 2,
    y: u + l - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, S) : i === "insideTopLeft" ? We({
    x: s + v,
    y: u + d,
    textAnchor: g,
    verticalAnchor: y
  }, S) : i === "insideTopRight" ? We({
    x: s + c - v,
    y: u + d,
    textAnchor: b,
    verticalAnchor: y
  }, S) : i === "insideBottomLeft" ? We({
    x: s + v,
    y: u + l - d,
    textAnchor: g,
    verticalAnchor: p
  }, S) : i === "insideBottomRight" ? We({
    x: s + c - v,
    y: u + l - d,
    textAnchor: b,
    verticalAnchor: p
  }, S) : na(i) && (G(i.x) || Br(i.x)) && (G(i.y) || Br(i.y)) ? We({
    x: s + ot(i.x, c),
    y: u + ot(i.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, S) : We({
    x: s + c / 2,
    y: u + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, S);
}, CL = function(t) {
  return "cx" in t && G(t.cx);
};
function Ke(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = bL(e, pL), a = We({
    offset: r
  }, n), i = a.viewBox, o = a.position, s = a.value, u = a.children, c = a.content, l = a.className, f = l === void 0 ? "" : l, d = a.textBreakAll;
  if (!i || le(s) && le(u) && !/* @__PURE__ */ Nt(c) && !ue(c))
    return null;
  if (/* @__PURE__ */ Nt(c))
    return /* @__PURE__ */ Ue(c, a);
  var p;
  if (ue(c)) {
    if (p = /* @__PURE__ */ G1(c, a), /* @__PURE__ */ Nt(p))
      return p;
  } else
    p = _L(a);
  var y = CL(i), h = ie(a, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return PL(a, p, h);
  var v = y ? TL(a) : EL(a);
  return /* @__PURE__ */ C.createElement(Ar, hi({
    className: fe("recharts-label", f)
  }, h, v, {
    breakAll: d
  }), p);
}
Ke.displayName = "Label";
var X_ = function(t) {
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
}, jL = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ C.createElement(Ke, {
    key: "label-implicit",
    viewBox: r
  }) : Ve(t) ? /* @__PURE__ */ C.createElement(Ke, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Nt(t) ? t.type === Ke ? /* @__PURE__ */ Ue(t, {
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
  }) : na(t) ? /* @__PURE__ */ C.createElement(Ke, hi({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, ML = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = X_(t), o = bt(a, Ke).map(function(u, c) {
    return /* @__PURE__ */ Ue(u, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var s = jL(t.label, r || i);
  return [s].concat(hL(o));
};
Ke.parseViewBox = X_;
Ke.renderCallByParent = ML;
var Hf, fx;
function $L() {
  if (fx) return Hf;
  fx = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Hf = e, Hf;
}
var IL = $L();
const DL = /* @__PURE__ */ Ae(IL);
function vi(e) {
  "@babel/helpers - typeof";
  return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vi(e);
}
var kL = ["valueAccessor"], NL = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function RL(e) {
  return FL(e) || BL(e) || qL(e) || LL();
}
function LL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qL(e, t) {
  if (e) {
    if (typeof e == "string") return mp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mp(e, t);
  }
}
function BL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function FL(e) {
  if (Array.isArray(e)) return mp(e);
}
function mp(e, t) {
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
function px(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dx(Object(r), !0).forEach(function(n) {
      zL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zL(e, t, r) {
  return t = WL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WL(e) {
  var t = UL(e, "string");
  return vi(t) == "symbol" ? t : t + "";
}
function UL(e, t) {
  if (vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hx(e, t) {
  if (e == null) return {};
  var r = HL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function HL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var KL = function(t) {
  return Array.isArray(t.value) ? DL(t.value) : t.value;
};
function Pt(e) {
  var t = e.valueAccessor, r = t === void 0 ? KL : t, n = hx(e, kL), a = n.data, i = n.dataKey, o = n.clockWise, s = n.id, u = n.textBreakAll, c = hx(n, NL);
  return !a || !a.length ? null : /* @__PURE__ */ C.createElement(de, {
    className: "recharts-label-list"
  }, a.map(function(l, f) {
    var d = le(i) ? r(l, f) : Re(l && l.payload, i), p = le(s) ? {} : {
      id: "".concat(s, "-").concat(f)
    };
    return /* @__PURE__ */ C.createElement(Ke, Xo({}, ie(l, !0), c, p, {
      parentViewBox: l.parentViewBox,
      value: d,
      textBreakAll: u,
      viewBox: Ke.parseViewBox(le(o) ? l : px(px({}, l), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Pt.displayName = "LabelList";
function VL(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ C.createElement(Pt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ C.isValidElement(e) || ue(e) ? /* @__PURE__ */ C.createElement(Pt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : na(e) ? /* @__PURE__ */ C.createElement(Pt, Xo({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function GL(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = bt(n, Pt).map(function(o, s) {
    return /* @__PURE__ */ Ue(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return a;
  var i = VL(e.label, t);
  return [i].concat(RL(a));
}
Pt.renderCallByParent = GL;
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
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
function yx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vx(Object(r), !0).forEach(function(n) {
      YL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vx(Object(r)).forEach(function(n) {
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
  return yi(t) == "symbol" ? t : t + "";
}
function ZL(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var JL = function(t, r) {
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
}, Z_ = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, s = t.endAngle, u = JL(o, s), c = o + u, l = je(r, n, i, o), f = je(r, n, i, c), d = "M ".concat(l.x, ",").concat(l.y, `
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
}, QL = function(t) {
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
      `) : Z_({
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
    }), S = w.circleTangency, A = w.lineTangency, P = w.theta, D = lo({
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
      A`).concat(a, ",").concat(a, ",0,").concat(+(j > 180), ",").concat(+(f > 0), ",").concat(S.x, ",").concat(S.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(A.x, ",").concat(A.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, eq = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, J_ = function(t) {
  var r = yx(yx({}, eq), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, u = r.forceCornerRadius, c = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || l === f)
    return null;
  var p = fe("recharts-sector", d), y = o - i, h = ot(s, y, 0, !0), v;
  return h > 0 && Math.abs(l - f) < 360 ? v = QL({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(h, y / 2),
    forceCornerRadius: u,
    cornerIsExternal: c,
    startAngle: l,
    endAngle: f
  }) : v = Z_({
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
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
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
function mx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mx(Object(r), !0).forEach(function(n) {
      tq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tq(e, t, r) {
  return t = rq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rq(e) {
  var t = nq(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function nq(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bx = {
  curveBasisClosed: e$,
  curveBasisOpen: t$,
  curveBasis: QM,
  curveBumpX: qM,
  curveBumpY: BM,
  curveLinearClosed: r$,
  curveLinear: ks,
  curveMonotoneX: n$,
  curveMonotoneY: a$,
  curveNatural: i$,
  curveStep: o$,
  curveStepAfter: u$,
  curveStepBefore: s$
}, fo = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, _a = function(t) {
  return t.x;
}, Aa = function(t) {
  return t.y;
}, aq = function(t, r) {
  if (ue(t))
    return t;
  var n = "curve".concat(Is(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? bx["".concat(n).concat(r === "vertical" ? "Y" : "X")] : bx[n] || ks;
}, iq = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, s = t.layout, u = t.connectNulls, c = u === void 0 ? !1 : u, l = aq(n, s), f = c ? i.filter(function(h) {
    return fo(h);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(h) {
      return fo(h);
    }) : o, y = f.map(function(h, v) {
      return gx(gx({}, h), {}, {
        base: p[v]
      });
    });
    return s === "vertical" ? d = ro().y(Aa).x1(_a).x0(function(h) {
      return h.base.x;
    }) : d = ro().x(_a).y1(Aa).y0(function(h) {
      return h.base.y;
    }), d.defined(fo).curve(l), d(y);
  }
  return s === "vertical" && G(o) ? d = ro().y(Aa).x1(_a).x0(o) : G(o) ? d = ro().x(_a).y1(Aa).y0(o) : d = sS().x(_a).y(Aa), d.defined(fo).curve(l), d(f);
}, Xr = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? iq(t) : a;
  return /* @__PURE__ */ C.createElement("path", bp({}, ie(t, !1), So(t), {
    className: fe("recharts-curve", r),
    d: o,
    ref: i
  }));
}, po = { exports: {} }, ho = { exports: {} }, xe = {};
var xx;
function oq() {
  if (xx) return xe;
  xx = 1;
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
var wx;
function sq() {
  return wx || (wx = 1, process.env.NODE_ENV !== "production" && (function() {
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
    var m = u, w = c, S = s, A = o, P = t, D = l, T = n, $ = y, M = p, j = r, I = i, k = a, R = f, L = !1;
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
    function ee(E) {
      return O(E) === n;
    }
    function ne(E) {
      return O(E) === y;
    }
    function Q(E) {
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
    we.AsyncMode = m, we.ConcurrentMode = w, we.ContextConsumer = S, we.ContextProvider = A, we.Element = P, we.ForwardRef = D, we.Fragment = T, we.Lazy = $, we.Memo = M, we.Portal = j, we.Profiler = I, we.StrictMode = k, we.Suspense = R, we.isAsyncMode = z, we.isConcurrentMode = N, we.isContextConsumer = B, we.isContextProvider = q, we.isElement = H, we.isForwardRef = X, we.isFragment = ee, we.isLazy = ne, we.isMemo = Q, we.isPortal = J, we.isProfiler = U, we.isStrictMode = V, we.isSuspense = Z, we.isValidElementType = x, we.typeOf = O;
  })()), we;
}
var Ox;
function Q_() {
  return Ox || (Ox = 1, process.env.NODE_ENV === "production" ? ho.exports = oq() : ho.exports = sq()), ho.exports;
}
var Kf, Sx;
function uq() {
  if (Sx) return Kf;
  Sx = 1;
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
var Vf, _x;
function yv() {
  if (_x) return Vf;
  _x = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vf = e, Vf;
}
var Gf, Ax;
function eA() {
  return Ax || (Ax = 1, Gf = Function.call.bind(Object.prototype.hasOwnProperty)), Gf;
}
var Yf, Px;
function cq() {
  if (Px) return Yf;
  Px = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ yv(), r = {}, n = /* @__PURE__ */ eA();
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
var Xf, Tx;
function lq() {
  if (Tx) return Xf;
  Tx = 1;
  var e = Q_(), t = uq(), r = /* @__PURE__ */ yv(), n = /* @__PURE__ */ eA(), a = /* @__PURE__ */ cq(), i = function() {
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
      node: D(),
      objectOf: A,
      oneOf: S,
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
      function H(ee, ne, Q, J, U, V, Z) {
        if (J = J || d, V = V || Q, Z !== r) {
          if (u) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Y = J + ":" + Q;
            !B[Y] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[Y] = !0, q++);
          }
        }
        return ne[Q] == null ? ee ? ne[Q] === null ? new h("The " + U + " `" + V + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new h("The " + U + " `" + V + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : N(ne, Q, J, U, V);
      }
      var X = H.bind(null, !1);
      return X.isRequired = H.bind(null, !0), X;
    }
    function b(N) {
      function B(q, H, X, ee, ne, Q) {
        var J = q[H], U = k(J);
        if (U !== N) {
          var V = R(J);
          return new h(
            "Invalid " + ee + " `" + ne + "` of type " + ("`" + V + "` supplied to `" + X + "`, expected ") + ("`" + N + "`."),
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
      function B(q, H, X, ee, ne) {
        if (typeof N != "function")
          return new h("Property `" + ne + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var Q = q[H];
        if (!Array.isArray(Q)) {
          var J = k(Q);
          return new h("Invalid " + ee + " `" + ne + "` of type " + ("`" + J + "` supplied to `" + X + "`, expected an array."));
        }
        for (var U = 0; U < Q.length; U++) {
          var V = N(Q, U, X, ee, ne + "[" + U + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return v(B);
    }
    function O() {
      function N(B, q, H, X, ee) {
        var ne = B[q];
        if (!s(ne)) {
          var Q = k(ne);
          return new h("Invalid " + X + " `" + ee + "` of type " + ("`" + Q + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(N);
    }
    function m() {
      function N(B, q, H, X, ee) {
        var ne = B[q];
        if (!e.isValidElementType(ne)) {
          var Q = k(ne);
          return new h("Invalid " + X + " `" + ee + "` of type " + ("`" + Q + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(N);
    }
    function w(N) {
      function B(q, H, X, ee, ne) {
        if (!(q[H] instanceof N)) {
          var Q = N.name || d, J = z(q[H]);
          return new h("Invalid " + ee + " `" + ne + "` of type " + ("`" + J + "` supplied to `" + X + "`, expected ") + ("instance of `" + Q + "`."));
        }
        return null;
      }
      return v(B);
    }
    function S(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function B(q, H, X, ee, ne) {
        for (var Q = q[H], J = 0; J < N.length; J++)
          if (y(Q, N[J]))
            return null;
        var U = JSON.stringify(N, function(Z, E) {
          var Y = R(E);
          return Y === "symbol" ? String(E) : E;
        });
        return new h("Invalid " + ee + " `" + ne + "` of value `" + String(Q) + "` " + ("supplied to `" + X + "`, expected one of " + U + "."));
      }
      return v(B);
    }
    function A(N) {
      function B(q, H, X, ee, ne) {
        if (typeof N != "function")
          return new h("Property `" + ne + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var Q = q[H], J = k(Q);
        if (J !== "object")
          return new h("Invalid " + ee + " `" + ne + "` of type " + ("`" + J + "` supplied to `" + X + "`, expected an object."));
        for (var U in Q)
          if (n(Q, U)) {
            var V = N(Q, U, X, ee, ne + "." + U, r);
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
      function H(X, ee, ne, Q, J) {
        for (var U = [], V = 0; V < N.length; V++) {
          var Z = N[V], E = Z(X, ee, ne, Q, J, r);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && U.push(E.data.expectedType);
        }
        var Y = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new h("Invalid " + Q + " `" + J + "` supplied to " + ("`" + ne + "`" + Y + "."));
      }
      return v(H);
    }
    function D() {
      function N(B, q, H, X, ee) {
        return j(B[q]) ? null : new h("Invalid " + X + " `" + ee + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return v(N);
    }
    function T(N, B, q, H, X) {
      return new h(
        (N || "React class") + ": " + B + " type `" + q + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function $(N) {
      function B(q, H, X, ee, ne) {
        var Q = q[H], J = k(Q);
        if (J !== "object")
          return new h("Invalid " + ee + " `" + ne + "` of type `" + J + "` " + ("supplied to `" + X + "`, expected `object`."));
        for (var U in N) {
          var V = N[U];
          if (typeof V != "function")
            return T(X, ee, ne, U, R(V));
          var Z = V(Q, U, X, ee, ne + "." + U, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return v(B);
    }
    function M(N) {
      function B(q, H, X, ee, ne) {
        var Q = q[H], J = k(Q);
        if (J !== "object")
          return new h("Invalid " + ee + " `" + ne + "` of type `" + J + "` " + ("supplied to `" + X + "`, expected `object`."));
        var U = t({}, q[H], N);
        for (var V in U) {
          var Z = N[V];
          if (n(N, V) && typeof Z != "function")
            return T(X, ee, ne, V, R(Z));
          if (!Z)
            return new h(
              "Invalid " + ee + " `" + ne + "` key `" + V + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(q[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var E = Z(Q, V, X, ee, ne + "." + V, r);
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
    function k(N) {
      var B = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : I(B, N) ? "symbol" : B;
    }
    function R(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var B = k(N);
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
  }, Xf;
}
var Zf, Ex;
function fq() {
  if (Ex) return Zf;
  Ex = 1;
  var e = /* @__PURE__ */ yv();
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
var Cx;
function dq() {
  if (Cx) return po.exports;
  if (Cx = 1, process.env.NODE_ENV !== "production") {
    var e = Q_(), t = !0;
    po.exports = /* @__PURE__ */ lq()(e.isElement, t);
  } else
    po.exports = /* @__PURE__ */ fq()();
  return po.exports;
}
var pq = /* @__PURE__ */ dq();
const Oe = /* @__PURE__ */ Ae(pq);
var hq = Object.getOwnPropertyNames, vq = Object.getOwnPropertySymbols, yq = Object.prototype.hasOwnProperty;
function jx(e, t) {
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
function Mx(e) {
  return hq(e).concat(vq(e));
}
var mq = Object.hasOwn || (function(e, t) {
  return yq.call(e, t);
});
function cn(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var gq = "__v", bq = "__o", xq = "_owner", $x = Object.getOwnPropertyDescriptor, Ix = Object.keys;
function wq(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function Oq(e, t) {
  return cn(e.getTime(), t.getTime());
}
function Sq(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function _q(e, t) {
  return e === t;
}
function Dx(e, t, r) {
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
var Aq = cn;
function Pq(e, t, r) {
  var n = Ix(e), a = n.length;
  if (Ix(t).length !== a)
    return !1;
  for (; a-- > 0; )
    if (!tA(e, t, r, n[a]))
      return !1;
  return !0;
}
function Pa(e, t, r) {
  var n = Mx(e), a = n.length;
  if (Mx(t).length !== a)
    return !1;
  for (var i, o, s; a-- > 0; )
    if (i = n[a], !tA(e, t, r, i) || (o = $x(e, i), s = $x(t, i), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function Tq(e, t) {
  return cn(e.valueOf(), t.valueOf());
}
function Eq(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function kx(e, t, r) {
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
function Cq(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function jq(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function tA(e, t, r, n) {
  return (n === xq || n === bq || n === gq) && (e.$$typeof || t.$$typeof) ? !0 : mq(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var Mq = "[object Arguments]", $q = "[object Boolean]", Iq = "[object Date]", Dq = "[object Error]", kq = "[object Map]", Nq = "[object Number]", Rq = "[object Object]", Lq = "[object RegExp]", qq = "[object Set]", Bq = "[object String]", Fq = "[object URL]", zq = Array.isArray, Nx = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Rx = Object.assign, Wq = Object.prototype.toString.call.bind(Object.prototype.toString);
function Uq(e) {
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
    if (zq(y))
      return t(y, h, v);
    if (Nx != null && Nx(y))
      return f(y, h, v);
    if (g === Date)
      return r(y, h, v);
    if (g === RegExp)
      return c(y, h, v);
    if (g === Map)
      return i(y, h, v);
    if (g === Set)
      return l(y, h, v);
    var x = Wq(y);
    return x === Iq ? r(y, h, v) : x === Lq ? c(y, h, v) : x === kq ? i(y, h, v) : x === qq ? l(y, h, v) : x === Rq ? typeof y.then != "function" && typeof h.then != "function" && s(y, h, v) : x === Fq ? d(y, h, v) : x === Dq ? n(y, h, v) : x === Mq ? s(y, h, v) : x === $q || x === Nq || x === Bq ? u(y, h, v) : !1;
  };
}
function Hq(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? Pa : wq,
    areDatesEqual: Oq,
    areErrorsEqual: Sq,
    areFunctionsEqual: _q,
    areMapsEqual: n ? jx(Dx, Pa) : Dx,
    areNumbersEqual: Aq,
    areObjectsEqual: n ? Pa : Pq,
    arePrimitiveWrappersEqual: Tq,
    areRegExpsEqual: Eq,
    areSetsEqual: n ? jx(kx, Pa) : kx,
    areTypedArraysEqual: n ? Pa : Cq,
    areUrlsEqual: jq
  };
  if (r && (a = Rx({}, a, r(a))), t) {
    var i = vo(a.areArraysEqual), o = vo(a.areMapsEqual), s = vo(a.areObjectsEqual), u = vo(a.areSetsEqual);
    a = Rx({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: u
    });
  }
  return a;
}
function Kq(e) {
  return function(t, r, n, a, i, o, s) {
    return e(t, r, s);
  };
}
function Vq(e) {
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
var Gq = jr();
jr({ strict: !0 });
jr({ circular: !0 });
jr({
  circular: !0,
  strict: !0
});
jr({
  createInternalComparator: function() {
    return cn;
  }
});
jr({
  strict: !0,
  createInternalComparator: function() {
    return cn;
  }
});
jr({
  circular: !0,
  createInternalComparator: function() {
    return cn;
  }
});
jr({
  circular: !0,
  createInternalComparator: function() {
    return cn;
  },
  strict: !0
});
function jr(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, s = Hq(e), u = Uq(s), c = n ? n(u) : Kq(u);
  return Vq({ circular: r, comparator: u, createState: a, equals: c, strict: o });
}
function Yq(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Lx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : Yq(a);
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
function Xq(e) {
  return eB(e) || Qq(e) || Jq(e) || Zq();
}
function Zq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jq(e, t) {
  if (e) {
    if (typeof e == "string") return qx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qx(e, t);
  }
}
function qx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Qq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function eB(e) {
  if (Array.isArray(e)) return e;
}
function tB() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, s = Xq(o), u = s[0], c = s.slice(1);
        if (typeof u == "number") {
          Lx(a.bind(null, c), u);
          return;
        }
        a(u), Lx(a.bind(null, c));
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
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
function Bx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bx(Object(r), !0).forEach(function(n) {
      rA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rA(e, t, r) {
  return t = rB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rB(e) {
  var t = nB(e, "string");
  return gi(t) === "symbol" ? t : String(t);
}
function nB(e, t) {
  if (gi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var aB = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, iB = function(t) {
  return t;
}, oB = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, qa = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return Fx(Fx({}, n), {}, rA({}, a, t(a, r[a])));
  }, {});
}, zx = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(oB(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, sB = process.env.NODE_ENV !== "production", Zo = function(t, r, n, a, i, o, s, u) {
  if (sB && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, a, i, o, s, u], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[l++];
      }));
    }
};
function uB(e, t) {
  return fB(e) || lB(e, t) || nA(e, t) || cB();
}
function cB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lB(e, t) {
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
function fB(e) {
  if (Array.isArray(e)) return e;
}
function dB(e) {
  return vB(e) || hB(e) || nA(e) || pB();
}
function pB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nA(e, t) {
  if (e) {
    if (typeof e == "string") return wp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wp(e, t);
  }
}
function hB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function vB(e) {
  if (Array.isArray(e)) return wp(e);
}
function wp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Jo = 1e-4, aA = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, iA = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, Wx = function(t, r) {
  return function(n) {
    var a = aA(t, r);
    return iA(a, n);
  };
}, yB = function(t, r) {
  return function(n) {
    var a = aA(t, r), i = [].concat(dB(a.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return iA(i, n);
  };
}, Ux = function() {
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
          }), l = uB(c, 4);
          a = l[0], i = l[1], o = l[2], s = l[3];
        } else
          Zo(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Zo([a, o, i, s].every(function(v) {
    return typeof v == "number" && v >= 0 && v <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = Wx(a, o), d = Wx(i, s), p = yB(a, o), y = function(b) {
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
}, mB = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, s = o === void 0 ? 17 : o, u = function(l, f, d) {
    var p = -(l - f) * n, y = d * i, h = d + (p - y) * s / 1e3, v = d * s / 1e3 + l;
    return Math.abs(v - f) < Jo && Math.abs(h) < Jo ? [f, 0] : [v, h];
  };
  return u.isStepper = !0, u.dt = s, u;
}, gB = function() {
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
        return Ux(a);
      case "spring":
        return mB();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return Ux(a);
        Zo(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (Zo(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
function Hx(e) {
  return wB(e) || xB(e) || oA(e) || bB();
}
function bB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function wB(e) {
  if (Array.isArray(e)) return Sp(e);
}
function Kx(e, t) {
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
    t % 2 ? Kx(Object(r), !0).forEach(function(n) {
      Op(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Op(e, t, r) {
  return t = OB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OB(e) {
  var t = SB(e, "string");
  return bi(t) === "symbol" ? t : String(t);
}
function SB(e, t) {
  if (bi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _B(e, t) {
  return TB(e) || PB(e, t) || oA(e, t) || AB();
}
function AB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oA(e, t) {
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
function PB(e, t) {
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
function TB(e) {
  if (Array.isArray(e)) return e;
}
var Qo = function(t, r, n) {
  return t + (r - t) * n;
}, _p = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, EB = function e(t, r, n) {
  var a = qa(function(i, o) {
    if (_p(o)) {
      var s = t(o.from, o.to, o.velocity), u = _B(s, 2), c = u[0], l = u[1];
      return et(et({}, o), {}, {
        from: c,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? qa(function(i, o) {
    return _p(o) ? et(et({}, o), {}, {
      velocity: Qo(o.velocity, a[i].velocity, n),
      from: Qo(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const CB = (function(e, t, r, n, a) {
  var i = aB(e, t), o = i.reduce(function(v, b) {
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
    return qa(function(b, g) {
      return g.from;
    }, s);
  }, p = function() {
    return !Object.values(s).filter(_p).length;
  }, y = function(b) {
    c || (c = b);
    var g = b - c, x = g / r.dt;
    s = EB(r, s, x), a(et(et(et({}, e), t), d())), c = b, p() || (u = requestAnimationFrame(f));
  }, h = function(b) {
    l || (l = b);
    var g = (b - l) / n, x = qa(function(m, w) {
      return Qo.apply(void 0, Hx(w).concat([r(g)]));
    }, o);
    if (a(et(et(et({}, e), t), x)), g < 1)
      u = requestAnimationFrame(f);
    else {
      var O = qa(function(m, w) {
        return Qo.apply(void 0, Hx(w).concat([r(1)]));
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
function Rn(e) {
  "@babel/helpers - typeof";
  return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rn(e);
}
var jB = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function MB(e, t) {
  if (e == null) return {};
  var r = $B(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $B(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Jf(e) {
  return NB(e) || kB(e) || DB(e) || IB();
}
function IB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DB(e, t) {
  if (e) {
    if (typeof e == "string") return Ap(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ap(e, t);
  }
}
function kB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function NB(e) {
  if (Array.isArray(e)) return Ap(e);
}
function Ap(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Vx(e, t) {
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
    t % 2 ? Vx(Object(r), !0).forEach(function(n) {
      Ia(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ia(e, t, r) {
  return t = sA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function LB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sA(n.key), n);
  }
}
function qB(e, t, r) {
  return t && LB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sA(e) {
  var t = BB(e, "string");
  return Rn(t) === "symbol" ? t : String(t);
}
function BB(e, t) {
  if (Rn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function FB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pp(e, t);
}
function Pp(e, t) {
  return Pp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Pp(e, t);
}
function zB(e) {
  var t = WB();
  return function() {
    var n = es(e), a;
    if (t) {
      var i = es(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Tp(this, a);
  };
}
function Tp(e, t) {
  if (t && (Rn(t) === "object" || typeof t == "function"))
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
function WB() {
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
  FB(r, e);
  var t = zB(r);
  function r(n, a) {
    var i;
    RB(this, r), i = t.call(this, n, a);
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
        style: u ? Ia({}, u, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return qB(r, [{
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
            style: u ? Ia({}, u, l) : l
          };
          this.state && d && (u && d[u] !== l || !u && d !== l) && this.setState(p);
          return;
        }
        if (!(Gq(a.to, l) && a.canBegin && a.isActive)) {
          var y = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var h = y || c ? f : a.to;
          if (this.state && d) {
            var v = {
              style: u ? Ia({}, u, h) : h
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
      var i = this, o = a.from, s = a.to, u = a.duration, c = a.easing, l = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, p = CB(o, s, gB(c), u, this.changeStyle), y = function() {
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
        var g = v.duration, x = v.easing, O = x === void 0 ? "ease" : x, m = v.style, w = v.properties, S = v.onAnimationEnd, A = b > 0 ? o[b - 1] : v, P = w || Object.keys(m);
        if (typeof O == "function" || O === "spring")
          return [].concat(Jf(h), [i.runJSAnimation.bind(i, {
            from: A.style,
            to: m,
            duration: g,
            easing: O
          }), g]);
        var D = zx(P, g, O), T = $t($t($t({}, A.style), m), {}, {
          transition: D
        });
        return [].concat(Jf(h), [T, g, S]).filter(iB);
      };
      return this.manager.start([u].concat(Jf(o.reduce(p, [l, Math.max(d, s)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = tB());
      var i = a.begin, o = a.duration, s = a.attributeName, u = a.to, c = a.easing, l = a.onAnimationStart, f = a.onAnimationEnd, d = a.steps, p = a.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var h = s ? Ia({}, s, u) : u, v = zx(Object.keys(h), o, c);
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
      var u = MB(a, jB), c = Hr.count(i), l = this.state.style;
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
      return c === 1 ? f(Hr.only(i)) : /* @__PURE__ */ C.createElement("div", null, Hr.map(i, function(d) {
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
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
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
function UB(e, t) {
  return GB(e) || VB(e, t) || KB(e, t) || HB();
}
function HB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KB(e, t) {
  if (e) {
    if (typeof e == "string") return Gx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gx(e, t);
  }
}
function Gx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function VB(e, t) {
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
function GB(e) {
  if (Array.isArray(e)) return e;
}
function Yx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yx(Object(r), !0).forEach(function(n) {
      YB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YB(e, t, r) {
  return t = XB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XB(e) {
  var t = ZB(e, "string");
  return xi(t) == "symbol" ? t : t + "";
}
function ZB(e, t) {
  if (xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zx = function(t, r, n, a, i) {
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
}, JB = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, s = r.width, u = r.height;
  if (Math.abs(s) > 0 && Math.abs(u) > 0) {
    var c = Math.min(i, i + s), l = Math.max(i, i + s), f = Math.min(o, o + u), d = Math.max(o, o + u);
    return n >= c && n <= l && a >= f && a <= d;
  }
  return !1;
}, QB = {
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
}, mv = function(t) {
  var r = Xx(Xx({}, QB), t), n = Me(), a = he(-1), i = UB(a, 2), o = i[0], s = i[1];
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
  var x = fe("recharts-rectangle", p);
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
    var m = O.width, w = O.height, S = O.x, A = O.y;
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
      d: Zx(S, A, m, w, d),
      ref: n
    })));
  }) : /* @__PURE__ */ C.createElement("path", ts({}, ie(r, !0), {
    className: x,
    d: Zx(u, c, l, f, d)
  }));
}, eF = ["points", "className", "baseLinePoints", "connectNulls"];
function xn() {
  return xn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xn.apply(this, arguments);
}
function tF(e, t) {
  if (e == null) return {};
  var r = rF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Jx(e) {
  return oF(e) || iF(e) || aF(e) || nF();
}
function nF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aF(e, t) {
  if (e) {
    if (typeof e == "string") return Cp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cp(e, t);
  }
}
function iF(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function oF(e) {
  if (Array.isArray(e)) return Cp(e);
}
function Cp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Qx = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, sF = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Qx(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Qx(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, Ba = function(t, r) {
  var n = sF(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(Jx(i), Jx(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, s, u) {
      return "".concat(o).concat(u === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, uF = function(t, r, n) {
  var a = Ba(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(Ba(r.reverse(), n).slice(1));
}, cF = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = tF(t, eF);
  if (!r || !r.length)
    return null;
  var s = fe("recharts-polygon", n);
  if (a && a.length) {
    var u = o.stroke && o.stroke !== "none", c = uF(r, a, i);
    return /* @__PURE__ */ C.createElement("g", {
      className: s
    }, /* @__PURE__ */ C.createElement("path", xn({}, ie(o, !0), {
      fill: c.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: c
    })), u ? /* @__PURE__ */ C.createElement("path", xn({}, ie(o, !0), {
      fill: "none",
      d: Ba(r, i)
    })) : null, u ? /* @__PURE__ */ C.createElement("path", xn({}, ie(o, !0), {
      fill: "none",
      d: Ba(a, i)
    })) : null);
  }
  var l = Ba(r, i);
  return /* @__PURE__ */ C.createElement("path", xn({}, ie(o, !0), {
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
var Ki = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = fe("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ C.createElement("circle", jp({}, ie(t, !1), So(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
var lF = ["x", "y", "top", "left", "width", "height", "className"];
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
function ew(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ew(Object(r), !0).forEach(function(n) {
      dF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ew(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dF(e, t, r) {
  return t = pF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pF(e) {
  var t = hF(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function hF(e, t) {
  if (wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vF(e, t) {
  if (e == null) return {};
  var r = yF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var mF = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, gF = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, s = o === void 0 ? 0 : o, u = t.left, c = u === void 0 ? 0 : u, l = t.width, f = l === void 0 ? 0 : l, d = t.height, p = d === void 0 ? 0 : d, y = t.className, h = vF(t, lF), v = fF({
    x: n,
    y: i,
    top: s,
    left: c,
    width: f,
    height: p
  }, h);
  return !G(n) || !G(i) || !G(f) || !G(p) || !G(s) || !G(c) ? null : /* @__PURE__ */ C.createElement("path", Mp({}, ie(v, !0), {
    className: fe("recharts-cross", y),
    d: mF(n, i, f, p, s, c)
  }));
}, Qf, tw;
function bF() {
  if (tw) return Qf;
  tw = 1;
  var e = Ks(), t = x_(), r = Qt();
  function n(a, i) {
    return a && a.length ? e(a, r(i, 2), t) : void 0;
  }
  return Qf = n, Qf;
}
var xF = bF();
const wF = /* @__PURE__ */ Ae(xF);
var ed, rw;
function OF() {
  if (rw) return ed;
  rw = 1;
  var e = Ks(), t = Qt(), r = w_();
  function n(a, i) {
    return a && a.length ? e(a, t(i, 2), r) : void 0;
  }
  return ed = n, ed;
}
var SF = OF();
const _F = /* @__PURE__ */ Ae(SF);
var AF = ["cx", "cy", "angle", "ticks", "axisLine"], PF = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Ln(e) {
  "@babel/helpers - typeof";
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ln(e);
}
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fa.apply(this, arguments);
}
function nw(e, t) {
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
    t % 2 ? nw(Object(r), !0).forEach(function(n) {
      Xs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aw(e, t) {
  if (e == null) return {};
  var r = TF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function EF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function iw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cA(n.key), n);
  }
}
function CF(e, t, r) {
  return t && iw(e.prototype, t), r && iw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function jF(e, t, r) {
  return t = rs(t), MF(e, uA() ? Reflect.construct(t, r || [], rs(e).constructor) : t.apply(e, r));
}
function MF(e, t) {
  if (t && (Ln(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $F(e);
}
function $F(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uA = function() {
    return !!e;
  })();
}
function rs(e) {
  return rs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, rs(e);
}
function IF(e, t) {
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
  return t = cA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cA(e) {
  var t = DF(e, "string");
  return Ln(t) == "symbol" ? t : t + "";
}
function DF(e, t) {
  if (Ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Zs = /* @__PURE__ */ (function(e) {
  function t() {
    return EF(this, t), jF(this, t, arguments);
  }
  return IF(t, e), CF(t, [{
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = wF(s, function(l) {
        return l.coordinate || 0;
      }), c = _F(s, function(l) {
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = n.axisLine, c = aw(n, AF), l = s.reduce(function(y, h) {
        return [Math.min(y[0], h.coordinate), Math.max(y[1], h.coordinate)];
      }, [1 / 0, -1 / 0]), f = je(a, i, l[0], o), d = je(a, i, l[1], o), p = Dr(Dr(Dr({}, ie(c, !1)), {}, {
        fill: "none"
      }, ie(u, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ C.createElement("line", Fa({
        className: "recharts-polar-radius-axis-line"
      }, p));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.angle, u = a.tickFormatter, c = a.stroke, l = aw(a, PF), f = this.getTickTextAnchor(), d = ie(l, !1), p = ie(o, !1), y = i.map(function(h, v) {
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
        return /* @__PURE__ */ C.createElement(de, Fa({
          className: fe("recharts-polar-radius-axis-tick", Y_(o)),
          key: "tick-".concat(h.coordinate)
        }, Qr(n.props, h, v)), t.renderTickItem(o, g, u ? u(h.value, v) : h.value));
      });
      return /* @__PURE__ */ C.createElement(de, {
        className: "recharts-polar-radius-axis-ticks"
      }, y);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.axisLine, o = n.tick;
      return !a || !a.length ? null : /* @__PURE__ */ C.createElement(de, {
        className: fe("recharts-polar-radius-axis", this.props.className)
      }, i && this.renderAxisLine(), o && this.renderTicks(), Ke.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(Ar, Fa({}, a, {
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
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qr.apply(this, arguments);
}
function ow(e, t) {
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
    t % 2 ? ow(Object(r), !0).forEach(function(n) {
      Js(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ow(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fA(n.key), n);
  }
}
function NF(e, t, r) {
  return t && sw(e.prototype, t), r && sw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function RF(e, t, r) {
  return t = ns(t), LF(e, lA() ? Reflect.construct(t, r || [], ns(e).constructor) : t.apply(e, r));
}
function LF(e, t) {
  if (t && (qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qF(e);
}
function qF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lA = function() {
    return !!e;
  })();
}
function ns(e) {
  return ns = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ns(e);
}
function BF(e, t) {
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
  return t = fA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fA(e) {
  var t = FF(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function FF(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var zF = Math.PI / 180, uw = 1e-5, Qs = /* @__PURE__ */ (function(e) {
  function t() {
    return kF(this, t), RF(this, t, arguments);
  }
  return BF(t, e), NF(t, [{
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
      var a = this.props.orientation, i = Math.cos(-n.coordinate * zF), o;
      return i > uw ? o = a === "outer" ? "start" : "end" : i < -uw ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, s = n.axisLine, u = n.axisLineType, c = kr(kr({}, ie(this.props, !1)), {}, {
        fill: "none"
      }, ie(s, !1));
      if (u === "circle")
        return /* @__PURE__ */ C.createElement(Ki, qr({
          className: "recharts-polar-angle-axis-line"
        }, c, {
          cx: a,
          cy: i,
          r: o
        }));
      var l = this.props.ticks, f = l.map(function(d) {
        return je(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ C.createElement(cF, qr({
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
        return /* @__PURE__ */ C.createElement(de, qr({
          className: fe("recharts-polar-angle-axis-tick", Y_(o)),
          key: "tick-".concat(y.coordinate)
        }, Qr(n.props, y, h)), s && /* @__PURE__ */ C.createElement("line", qr({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, v)), o && t.renderTickItem(o, g, u ? u(y.value, h) : y.value));
      });
      return /* @__PURE__ */ C.createElement(de, {
        className: "recharts-polar-angle-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.radius, o = n.axisLine;
      return i <= 0 || !a || !a.length ? null : /* @__PURE__ */ C.createElement(de, {
        className: fe("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(Ar, qr({}, a, {
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
var td, cw;
function WF() {
  if (cw) return td;
  cw = 1;
  var e = UO(), t = e(Object.getPrototypeOf, Object);
  return td = t, td;
}
var rd, lw;
function UF() {
  if (lw) return rd;
  lw = 1;
  var e = fr(), t = WF(), r = dr(), n = "[object Object]", a = Function.prototype, i = Object.prototype, o = a.toString, s = i.hasOwnProperty, u = o.call(Object);
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
var HF = UF();
const KF = /* @__PURE__ */ Ae(HF);
var nd, fw;
function VF() {
  if (fw) return nd;
  fw = 1;
  var e = fr(), t = dr(), r = "[object Boolean]";
  function n(a) {
    return a === !0 || a === !1 || t(a) && e(a) == r;
  }
  return nd = n, nd;
}
var GF = VF();
const YF = /* @__PURE__ */ Ae(GF);
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
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
function XF(e, t) {
  return e3(e) || QF(e, t) || JF(e, t) || ZF();
}
function ZF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JF(e, t) {
  if (e) {
    if (typeof e == "string") return dw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dw(e, t);
  }
}
function dw(e, t) {
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
function e3(e) {
  if (Array.isArray(e)) return e;
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
      t3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function t3(e, t, r) {
  return t = r3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function r3(e) {
  var t = n3(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function n3(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vw = function(t, r, n, a, i) {
  var o = n - a, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + i), s += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, a3 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, i3 = function(t) {
  var r = hw(hw({}, a3), t), n = Me(), a = he(-1), i = XF(a, 2), o = i[0], s = i[1];
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
  var g = fe("recharts-trapezoid", p);
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
    var O = x.upperWidth, m = x.lowerWidth, w = x.height, S = x.x, A = x.y;
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
      d: vw(S, A, O, m, w),
      ref: n
    })));
  }) : /* @__PURE__ */ C.createElement("g", null, /* @__PURE__ */ C.createElement("path", as({}, ie(r, !0), {
    className: g,
    d: vw(u, c, l, f, d)
  })));
}, o3 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Si(e) {
  "@babel/helpers - typeof";
  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Si(e);
}
function s3(e, t) {
  if (e == null) return {};
  var r = u3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function u3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yw(Object(r), !0).forEach(function(n) {
      c3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function c3(e, t, r) {
  return t = l3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function l3(e) {
  var t = f3(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function f3(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function d3(e, t) {
  return is(is({}, t), e);
}
function p3(e, t) {
  return e === "symbols";
}
function mw(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ C.createElement(mv, r);
    case "trapezoid":
      return /* @__PURE__ */ C.createElement(i3, r);
    case "sector":
      return /* @__PURE__ */ C.createElement(J_, r);
    case "symbols":
      if (p3(t))
        return /* @__PURE__ */ C.createElement(Bh, r);
      break;
    default:
      return null;
  }
}
function h3(e) {
  return /* @__PURE__ */ Nt(e) ? e.props : e;
}
function dA(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? d3 : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, s = e.isActive, u = s3(e, o3), c;
  if (/* @__PURE__ */ Nt(t))
    c = /* @__PURE__ */ Ue(t, is(is({}, u), h3(t)));
  else if (ue(t))
    c = t(u);
  else if (KF(t) && !YF(t)) {
    var l = a(t, u);
    c = /* @__PURE__ */ C.createElement(mw, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var f = u;
    c = /* @__PURE__ */ C.createElement(mw, {
      shapeType: r,
      elementProps: f
    });
  }
  return s ? /* @__PURE__ */ C.createElement(de, {
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
function v3(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function y3(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function m3(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function g3(e, t) {
  var r;
  return eu(e, t) ? r = v3 : tu(e, t) ? r = y3 : _i(e, t) && (r = m3), r;
}
function b3(e, t) {
  var r;
  return eu(e, t) ? r = "trapezoids" : tu(e, t) ? r = "sectors" : _i(e, t) && (r = "points"), r;
}
function x3(e, t) {
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
function w3(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = b3(r, t), i = x3(r, t), o = n.filter(function(u, c) {
    var l = Jr(i, u), f = r.props[a].filter(function(y) {
      var h = g3(r, t);
      return h(y, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), p = c === d;
    return l && p;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var xo;
function Bn(e) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bn(e);
}
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
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gw(Object(r), !0).forEach(function(n) {
      _t(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function O3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hA(n.key), n);
  }
}
function S3(e, t, r) {
  return t && bw(e.prototype, t), r && bw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _3(e, t, r) {
  return t = os(t), A3(e, pA() ? Reflect.construct(t, r || [], os(e).constructor) : t.apply(e, r));
}
function A3(e, t) {
  if (t && (Bn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return P3(e);
}
function P3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pA = function() {
    return !!e;
  })();
}
function os(e) {
  return os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, os(e);
}
function T3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Dp(e, t);
}
function Dp(e, t) {
  return Dp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Dp(e, t);
}
function _t(e, t, r) {
  return t = hA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hA(e) {
  var t = E3(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function E3(e, t) {
  if (Bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var hr = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return O3(this, t), n = _3(this, t, [r]), _t(n, "pieRef", null), _t(n, "sectorRefs", []), _t(n, "id", on("recharts-pie-")), _t(n, "handleAnimationEnd", function() {
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
  return T3(t, e), S3(t, [{
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
        /* @__PURE__ */ C.createElement(de, {
          key: "label-".concat(h.startAngle, "-").concat(h.endAngle, "-").concat(h.midAngle, "-").concat(v)
        }, s && t.renderLabelLineItem(s, O, "line"), t.renderLabelItem(o, x, Re(h, m)));
      });
      return /* @__PURE__ */ C.createElement(de, {
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
        return /* @__PURE__ */ C.createElement(de, wn({
          ref: function(v) {
            v && !a.sectorRefs.includes(v) && a.sectorRefs.push(v);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Qr(a.props, c, l), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(c?.startAngle, "-").concat(c?.endAngle, "-").concat(c.midAngle, "-").concat(l)
        }), /* @__PURE__ */ C.createElement(dA, wn({
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
          var m = d && d[O], w = O > 0 ? gt(x, "paddingAngle", 0) : 0;
          if (m) {
            var S = He(m.endAngle - m.startAngle, x.endAngle - x.startAngle), A = Ee(Ee({}, x), {}, {
              startAngle: g + w,
              endAngle: g + S(h) + w
            });
            v.push(A), g = A.endAngle;
          } else {
            var P = x.endAngle, D = x.startAngle, T = He(0, P - D), $ = T(h), M = Ee(Ee({}, x), {}, {
              startAngle: g + w,
              endAngle: g + $ + w
            });
            v.push(M), g = M.endAngle;
          }
        }), /* @__PURE__ */ C.createElement(de, null, n.renderSectorsStatically(v));
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
      return i && a && a.length && (!o || !Jr(o, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
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
      var h = fe("recharts-pie", s);
      return /* @__PURE__ */ C.createElement(de, {
        tabIndex: this.props.rootTabIndex,
        className: h,
        ref: function(b) {
          n.pieRef = b;
        }
      }, this.renderSectors(), u && this.renderLabels(o), Ke.renderCallByParent(this.props, null, !1), (!p || y) && Pt.renderCallByParent(this.props, o, !1));
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
      var o = fe("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ C.createElement(Xr, wn({}, a, {
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
      var s = fe("recharts-pie-label-text", typeof n != "boolean" && !ue(n) ? n.className : "");
      return /* @__PURE__ */ C.createElement(Ar, wn({}, a, {
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
  isAnimationActive: !Tr.isSsr,
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
  var t = e.data, r = e.children, n = ie(e, !1), a = bt(r, qs);
  return t && t.length ? t.map(function(i, o) {
    return Ee(Ee(Ee({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return Ee(Ee({}, n), i.props);
  }) : [];
});
_t(hr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = G_(a, i), s = n + ot(e.cx, a, a / 2), u = r + ot(e.cy, i, i / 2), c = ot(e.innerRadius, o, 0), l = ot(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
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
  var g = a.filter(function(A) {
    return Re(A, b, 0) !== 0;
  }).length, x = (v >= 360 ? g : g - 1) * u, O = v - g * p - x, m = a.reduce(function(A, P) {
    var D = Re(P, b, 0);
    return A + (G(D) ? D : 0);
  }, 0), w;
  if (m > 0) {
    var S;
    w = a.map(function(A, P) {
      var D = Re(A, b, 0), T = Re(A, l, P), $ = (G(D) ? D : 0) / m, M;
      P ? M = S.endAngle + it(h) * u * (D !== 0 ? 1 : 0) : M = o;
      var j = M + it(h) * ((D !== 0 ? p : 0) + $ * O), I = (M + j) / 2, k = (y.innerRadius + y.outerRadius) / 2, R = [{
        name: T,
        value: D,
        payload: A,
        dataKey: b,
        type: d
      }], L = je(y.cx, y.cy, k, I);
      return S = Ee(Ee(Ee({
        percent: $,
        cornerRadius: i,
        name: T,
        tooltipPayload: R,
        midAngle: I,
        middleRadius: k,
        tooltipPosition: L
      }, A), y), {}, {
        value: Re(A, b),
        startAngle: M,
        endAngle: j,
        payload: A,
        paddingAngle: it(h) * u
      }), S;
    });
  }
  return Ee(Ee({}, y), {}, {
    sectors: w,
    data: a
  });
});
var ad, xw;
function C3() {
  if (xw) return ad;
  xw = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, a, i, o) {
    for (var s = -1, u = t(e((a - n) / (i || 1)), 0), c = Array(u); u--; )
      c[o ? u : ++s] = n, n += i;
    return c;
  }
  return ad = r, ad;
}
var id, ww;
function vA() {
  if (ww) return id;
  ww = 1;
  var e = kS(), t = 1 / 0, r = 17976931348623157e292;
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
var od, Ow;
function j3() {
  if (Ow) return od;
  Ow = 1;
  var e = C3(), t = Ls(), r = vA();
  function n(a) {
    return function(i, o, s) {
      return s && typeof s != "number" && t(i, o, s) && (o = s = void 0), i = r(i), o === void 0 ? (o = i, i = 0) : o = r(o), s = s === void 0 ? i < o ? 1 : -1 : r(s), e(i, o, s, a);
    };
  }
  return od = n, od;
}
var sd, Sw;
function M3() {
  if (Sw) return sd;
  Sw = 1;
  var e = j3(), t = e();
  return sd = t, sd;
}
var $3 = M3();
const ss = /* @__PURE__ */ Ae($3);
function Ai(e) {
  "@babel/helpers - typeof";
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(e);
}
function _w(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Aw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _w(Object(r), !0).forEach(function(n) {
      yA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _w(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yA(e, t, r) {
  return t = I3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I3(e) {
  var t = D3(e, "string");
  return Ai(t) == "symbol" ? t : t + "";
}
function D3(e, t) {
  if (Ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var k3 = ["Webkit", "Moz", "O", "ms"], N3 = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = k3.reduce(function(i, o) {
    return Aw(Aw({}, i), {}, yA({}, o + n, r));
  }, {});
  return a[t] = r, a;
};
function Fn(e) {
  "@babel/helpers - typeof";
  return Fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fn(e);
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
function ud(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pw(Object(r), !0).forEach(function(n) {
      ht(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function R3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gA(n.key), n);
  }
}
function L3(e, t, r) {
  return t && Tw(e.prototype, t), r && Tw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function q3(e, t, r) {
  return t = cs(t), B3(e, mA() ? Reflect.construct(t, r || [], cs(e).constructor) : t.apply(e, r));
}
function B3(e, t) {
  if (t && (Fn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return F3(e);
}
function F3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mA = function() {
    return !!e;
  })();
}
function cs(e) {
  return cs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cs(e);
}
function z3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && kp(e, t);
}
function kp(e, t) {
  return kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, kp(e, t);
}
function ht(e, t, r) {
  return t = gA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gA(e) {
  var t = W3(e, "string");
  return Fn(t) == "symbol" ? t : t + "";
}
function W3(e, t) {
  if (Fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var U3 = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var u = r.length, c = Ra().domain(ss(0, u)).range([i, i + o - s]), l = c.domain().map(function(f) {
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
}, Ew = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, zn = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return R3(this, t), n = q3(this, t, [r]), ht(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), ht(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), ht(n, "handleDragEnd", function() {
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
    }), ht(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), ht(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), ht(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), ht(n, "handleSlideDragStart", function(a) {
      var i = Ew(a) ? a.changedTouches[0] : a;
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
  return z3(t, e), L3(t, [{
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
      var i = Ew(a) ? a.changedTouches[0] : a;
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
      this.setState(ht(ht({}, o, c + g), "brushMoveStartX", n.pageX), function() {
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
          a === "startX" && p >= c || a === "endX" && p <= u || this.setState(ht({}, a, p), function() {
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
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, u = n.data, c = n.children, l = n.padding, f = Hr.only(c);
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
      return /* @__PURE__ */ C.createElement(de, {
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
      return /* @__PURE__ */ C.createElement(de, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ C.createElement(Ar, us({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - p,
        y: o + s / 2
      }, y), this.getTextOfTick(a)), /* @__PURE__ */ C.createElement(Ar, us({
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
      var x = fe("recharts-brush", i), O = C.Children.count(o) === 1, m = N3("userSelect", "none");
      return /* @__PURE__ */ C.createElement(de, {
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
        }, i && i.length ? U3({
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
ht(zn, "displayName", "Brush");
ht(zn, "defaultProps", {
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
var cd, Cw;
function H3() {
  if (Cw) return cd;
  Cw = 1;
  var e = zh();
  function t(r, n) {
    var a;
    return e(r, function(i, o, s) {
      return a = n(i, o, s), !a;
    }), !!a;
  }
  return cd = t, cd;
}
var ld, jw;
function K3() {
  if (jw) return ld;
  jw = 1;
  var e = RO(), t = Qt(), r = H3(), n = dt(), a = Ls();
  function i(o, s, u) {
    var c = n(o) ? e : r;
    return u && a(o, s, u) && (s = void 0), c(o, t(s, 3));
  }
  return ld = i, ld;
}
var V3 = K3();
const G3 = /* @__PURE__ */ Ae(V3);
var Xt = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, fd, Mw;
function Y3() {
  if (Mw) return fd;
  Mw = 1;
  var e = jS();
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
var dd, $w;
function X3() {
  if ($w) return dd;
  $w = 1;
  var e = Y3(), t = ES(), r = Qt();
  function n(a, i) {
    var o = {};
    return i = r(i, 3), t(a, function(s, u, c) {
      e(o, u, i(s, u, c));
    }), o;
  }
  return dd = n, dd;
}
var Z3 = X3();
const J3 = /* @__PURE__ */ Ae(Z3);
var pd, Iw;
function Q3() {
  if (Iw) return pd;
  Iw = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return pd = e, pd;
}
var hd, Dw;
function e5() {
  if (Dw) return hd;
  Dw = 1;
  var e = zh();
  function t(r, n) {
    var a = !0;
    return e(r, function(i, o, s) {
      return a = !!n(i, o, s), a;
    }), a;
  }
  return hd = t, hd;
}
var vd, kw;
function t5() {
  if (kw) return vd;
  kw = 1;
  var e = Q3(), t = e5(), r = Qt(), n = dt(), a = Ls();
  function i(o, s, u) {
    var c = n(o) ? e : t;
    return u && a(o, s, u) && (s = void 0), c(o, r(s, 3));
  }
  return vd = i, vd;
}
var r5 = t5();
const bA = /* @__PURE__ */ Ae(r5);
var n5 = ["x", "y"];
function Wn(e) {
  "@babel/helpers - typeof";
  return Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wn(e);
}
function Np() {
  return Np = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Np.apply(this, arguments);
}
function Nw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nw(Object(r), !0).forEach(function(n) {
      a5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function a5(e, t, r) {
  return t = i5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function i5(e) {
  var t = o5(e, "string");
  return Wn(t) == "symbol" ? t : t + "";
}
function o5(e, t) {
  if (Wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function s5(e, t) {
  if (e == null) return {};
  var r = u5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function u5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function c5(e, t) {
  var r = e.x, n = e.y, a = s5(e, n5), i = "".concat(r), o = parseInt(i, 10), s = "".concat(n), u = parseInt(s, 10), c = "".concat(t.height || a.height), l = parseInt(c, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
  return Ta(Ta(Ta(Ta(Ta({}, t), a), o ? {
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
function Rw(e) {
  return /* @__PURE__ */ C.createElement(dA, Np({
    shapeType: "rectangle",
    propTransformer: c5,
    activeClassName: "recharts-active-bar"
  }, e));
}
var l5 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (process.env.NODE_ENV !== "production" ? ct(!1, "minPointSize callback function received a value with type of ".concat(Wn(n), ". Currently only numbers are supported.")) : ct()), r);
  };
}, f5 = ["value", "background"], xA;
function Un(e) {
  "@babel/helpers - typeof";
  return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Un(e);
}
function d5(e, t) {
  if (e == null) return {};
  var r = p5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function p5(e, t) {
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
function Lw(e, t) {
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
    t % 2 ? Lw(Object(r), !0).forEach(function(n) {
      Or(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function h5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, OA(n.key), n);
  }
}
function v5(e, t, r) {
  return t && qw(e.prototype, t), r && qw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function y5(e, t, r) {
  return t = fs(t), m5(e, wA() ? Reflect.construct(t, r || [], fs(e).constructor) : t.apply(e, r));
}
function m5(e, t) {
  if (t && (Un(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return g5(e);
}
function g5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wA = function() {
    return !!e;
  })();
}
function fs(e) {
  return fs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fs(e);
}
function b5(e, t) {
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
  return t = OA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OA(e) {
  var t = x5(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function x5(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Mr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    h5(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = y5(this, t, [].concat(a)), Or(r, "state", {
      isAnimationFinished: !1
    }), Or(r, "id", on("recharts-bar-")), Or(r, "handleAnimationEnd", function() {
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
  return b5(t, e), v5(t, [{
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
        return /* @__PURE__ */ C.createElement(de, ls({
          className: "recharts-bar-rectangle"
        }, Qr(a.props, f, d), {
          key: "rectangle-".concat(f?.x, "-").concat(f?.y, "-").concat(f?.value)
        }), /* @__PURE__ */ C.createElement(Rw, h));
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
            var x = He(g.x, v.x), O = He(g.y, v.y), m = He(g.width, v.width), w = He(g.height, v.height);
            return Be(Be({}, v), {}, {
              x: x(y),
              y: O(y),
              width: m(y),
              height: w(y)
            });
          }
          if (o === "horizontal") {
            var S = He(0, v.height), A = S(y);
            return Be(Be({}, v), {}, {
              y: v.y + v.height - A,
              height: A
            });
          }
          var P = He(0, v.width), D = P(y);
          return Be(Be({}, v), {}, {
            width: D
          });
        });
        return /* @__PURE__ */ C.createElement(de, null, n.renderRectanglesStatically(h));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !Jr(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, s = a.activeIndex, u = ie(this.props.background, !1);
      return i.map(function(c, l) {
        c.value;
        var f = c.background, d = d5(c, f5);
        if (!f)
          return null;
        var p = Be(Be(Be(Be(Be({}, d), {}, {
          fill: "#eee"
        }, f), u), Qr(n.props, c, l)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: l,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ C.createElement(Rw, ls({
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
      var i = this.props, o = i.data, s = i.xAxis, u = i.yAxis, c = i.layout, l = i.children, f = bt(l, Hi);
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
      return /* @__PURE__ */ C.createElement(de, y, f.map(function(h) {
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
      var v = this.state.isAnimationFinished, b = fe("recharts-bar", o), g = s && s.allowDataOverflow, x = u && u.allowDataOverflow, O = g || x, m = le(h) ? this.id : h;
      return /* @__PURE__ */ C.createElement(de, {
        className: b
      }, g || x ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: g ? c : c - f / 2,
        y: x ? l : l - d / 2,
        width: g ? f : f * 2,
        height: x ? d : d * 2
      }))) : null, /* @__PURE__ */ C.createElement(de, {
        className: "recharts-bar-rectangles",
        clipPath: O ? "url(#clipPath-".concat(m, ")") : null
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, m), (!p || v) && Pt.renderCallByParent(this.props, i));
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
xA = Mr;
Or(Mr, "displayName", "Bar");
Or(Mr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Tr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Or(Mr, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, s = e.xAxisTicks, u = e.yAxisTicks, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = UR(n, r);
  if (!p)
    return null;
  var y = t.layout, h = r.type.defaultProps, v = h !== void 0 ? Be(Be({}, h), r.props) : r.props, b = v.dataKey, g = v.children, x = v.minPointSize, O = y === "horizontal" ? o : i, m = c ? O.scale.domain() : null, w = ZR({
    numericAxis: O
  }), S = bt(g, qs), A = f.map(function(P, D) {
    var T, $, M, j, I, k;
    c ? T = HR(c[l + D], m) : (T = Re(P, b), Array.isArray(T) || (T = [w, T]));
    var R = l5(x, xA.defaultProps.minPointSize)(T[1], D);
    if (y === "horizontal") {
      var L, z = [o.scale(T[0]), o.scale(T[1])], N = z[0], B = z[1];
      $ = nx({
        axis: i,
        ticks: s,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: D
      }), M = (L = B ?? N) !== null && L !== void 0 ? L : void 0, j = p.size;
      var q = N - B;
      if (I = Number.isNaN(q) ? 0 : q, k = {
        x: $,
        y: o.y,
        width: j,
        height: o.height
      }, Math.abs(R) > 0 && Math.abs(I) < Math.abs(R)) {
        var H = it(I || R) * (Math.abs(R) - Math.abs(I));
        M -= H, I += H;
      }
    } else {
      var X = [i.scale(T[0]), i.scale(T[1])], ee = X[0], ne = X[1];
      if ($ = ee, M = nx({
        axis: o,
        ticks: u,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: D
      }), j = ne - ee, I = p.size, k = {
        x: i.x,
        y: M,
        width: i.width,
        height: I
      }, Math.abs(R) > 0 && Math.abs(j) < Math.abs(R)) {
        var Q = it(j || R) * (Math.abs(R) - Math.abs(j));
        j += Q;
      }
    }
    return Be(Be(Be({}, P), {}, {
      x: $,
      y: M,
      width: j,
      height: I,
      value: c ? T : T[1],
      payload: P,
      background: k
    }, S && S[D] && S[D].props), {}, {
      tooltipPayload: [K_(r, P)],
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
function Pi(e) {
  "@babel/helpers - typeof";
  return Pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pi(e);
}
function w5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, SA(n.key), n);
  }
}
function O5(e, t, r) {
  return t && Bw(e.prototype, t), r && Bw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fw(e, t) {
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
    t % 2 ? Fw(Object(r), !0).forEach(function(n) {
      ru(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ru(e, t, r) {
  return t = SA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SA(e) {
  var t = S5(e, "string");
  return Pi(t) == "symbol" ? t : t + "";
}
function S5(e, t) {
  if (Pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gv = function(t, r, n, a, i) {
  var o = t.width, s = t.height, u = t.layout, c = t.children, l = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, d = !!vt(c, Mr);
  return l.reduce(function(p, y) {
    var h = r[y], v = h.orientation, b = h.domain, g = h.padding, x = g === void 0 ? {} : g, O = h.mirror, m = h.reversed, w = "".concat(v).concat(O ? "Mirror" : ""), S, A, P, D, T;
    if (h.type === "number" && (h.padding === "gap" || h.padding === "no-gap")) {
      var $ = b[1] - b[0], M = 1 / 0, j = h.categoricalDomain.sort();
      if (j.forEach(function(X, ee) {
        ee > 0 && (M = Math.min((X || 0) - (j[ee - 1] || 0), M));
      }), Number.isFinite(M)) {
        var I = M / $, k = h.layout === "vertical" ? n.height : n.width;
        if (h.padding === "gap" && (S = I * k / 2), h.padding === "no-gap") {
          var R = ot(t.barCategoryGap, I * k), L = I * k / 2;
          S = L - R - (L - R) / k * R;
        }
      }
    }
    a === "xAxis" ? A = [n.left + (x.left || 0) + (S || 0), n.left + n.width - (x.right || 0) - (S || 0)] : a === "yAxis" ? A = u === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (S || 0), n.top + n.height - (x.bottom || 0) - (S || 0)] : A = h.range, m && (A = [A[1], A[0]]);
    var z = z_(h, i, d), N = z.scale, B = z.realScaleType;
    N.domain(b).range(A), W_(N);
    var q = U_(N, It(It({}, h), {}, {
      realScaleType: B
    }));
    a === "xAxis" ? (T = v === "top" && !O || v === "bottom" && O, P = n.left, D = f[w] - T * h.height) : a === "yAxis" && (T = v === "left" && !O || v === "right" && O, P = f[w] - T * h.width, D = n.top);
    var H = It(It(It({}, h), q), {}, {
      realScaleType: B,
      x: P,
      y: D,
      scale: N,
      width: a === "xAxis" ? n.width : h.width,
      height: a === "yAxis" ? n.height : h.height
    });
    return H.bandSize = Go(H, q), !h.hide && a === "xAxis" ? f[w] += (T ? -1 : 1) * H.height : h.hide || (f[w] += (T ? -1 : 1) * H.width), It(It({}, p), {}, ru({}, y, H));
  }, {});
}, _A = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, _5 = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return _A({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, AA = /* @__PURE__ */ (function() {
  function e(t) {
    w5(this, e), this.scale = t;
  }
  return O5(e, [{
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
ru(AA, "EPS", 1e-4);
var bv = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return It(It({}, n), {}, ru({}, a, AA.create(t[a])));
  }, {});
  return It(It({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, s = i.position;
      return J3(a, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(a) {
      return bA(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function A5(e) {
  return (e % 180 + 180) % 180;
}
var P5 = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = A5(a), o = i * Math.PI / 180, s = Math.atan(n / r), u = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(u);
}, yd, zw;
function T5() {
  if (zw) return yd;
  zw = 1;
  var e = Qt(), t = qi(), r = Ms();
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
var md, Ww;
function E5() {
  if (Ww) return md;
  Ww = 1;
  var e = vA();
  function t(r) {
    var n = e(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return md = t, md;
}
var gd, Uw;
function C5() {
  if (Uw) return gd;
  Uw = 1;
  var e = SS(), t = Qt(), r = E5(), n = Math.max;
  function a(i, o, s) {
    var u = i == null ? 0 : i.length;
    if (!u)
      return -1;
    var c = s == null ? 0 : r(s);
    return c < 0 && (c = n(u + c, 0)), e(i, t(o, 3), c);
  }
  return gd = a, gd;
}
var bd, Hw;
function j5() {
  if (Hw) return bd;
  Hw = 1;
  var e = T5(), t = C5(), r = e(t);
  return bd = r, bd;
}
var M5 = j5();
const $5 = /* @__PURE__ */ Ae(M5);
var I5 = YO();
const D5 = /* @__PURE__ */ Ae(I5);
var k5 = D5(function(e) {
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
var xv = /* @__PURE__ */ Ft(void 0), wv = /* @__PURE__ */ Ft(void 0), PA = /* @__PURE__ */ Ft(void 0), TA = /* @__PURE__ */ Ft({}), EA = /* @__PURE__ */ Ft(void 0), CA = /* @__PURE__ */ Ft(0), jA = /* @__PURE__ */ Ft(0), Kw = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, s = t.children, u = t.width, c = t.height, l = k5(i);
  return /* @__PURE__ */ C.createElement(xv.Provider, {
    value: n
  }, /* @__PURE__ */ C.createElement(wv.Provider, {
    value: a
  }, /* @__PURE__ */ C.createElement(TA.Provider, {
    value: i
  }, /* @__PURE__ */ C.createElement(PA.Provider, {
    value: l
  }, /* @__PURE__ */ C.createElement(EA.Provider, {
    value: o
  }, /* @__PURE__ */ C.createElement(CA.Provider, {
    value: c
  }, /* @__PURE__ */ C.createElement(jA.Provider, {
    value: u
  }, s)))))));
}, N5 = function() {
  return ft(EA);
};
function MA(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var $A = function(t) {
  var r = ft(xv);
  r == null && (process.env.NODE_ENV !== "production" ? ct(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : ct());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? ct(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(ds(t), "]. ").concat(MA(r))) : ct()), n;
}, R5 = function() {
  var t = ft(xv);
  return xr(t);
}, L5 = function() {
  var t = ft(wv), r = $5(t, function(n) {
    return bA(n.domain, Number.isFinite);
  });
  return r || xr(t);
}, IA = function(t) {
  var r = ft(wv);
  r == null && (process.env.NODE_ENV !== "production" ? ct(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : ct());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? ct(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(ds(t), "]. ").concat(MA(r))) : ct()), n;
}, q5 = function() {
  var t = ft(PA);
  return t;
}, B5 = function() {
  return ft(TA);
}, Ov = function() {
  return ft(jA);
}, Sv = function() {
  return ft(CA);
};
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
}
function F5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function z5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, kA(n.key), n);
  }
}
function W5(e, t, r) {
  return t && z5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function U5(e, t, r) {
  return t = ps(t), H5(e, DA() ? Reflect.construct(t, r || [], ps(e).constructor) : t.apply(e, r));
}
function H5(e, t) {
  if (t && (Hn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return K5(e);
}
function K5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function DA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (DA = function() {
    return !!e;
  })();
}
function ps(e) {
  return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ps(e);
}
function V5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Lp(e, t);
}
function Lp(e, t) {
  return Lp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Lp(e, t);
}
function Vw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vw(Object(r), !0).forEach(function(n) {
      _v(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _v(e, t, r) {
  return t = kA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kA(e) {
  var t = G5(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function G5(e, t) {
  if (Hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Y5(e, t) {
  return Q5(e) || J5(e, t) || Z5(e, t) || X5();
}
function X5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z5(e, t) {
  if (e) {
    if (typeof e == "string") return Yw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yw(e, t);
  }
}
function Yw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function J5(e, t) {
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
function Q5(e) {
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
var ez = function(t, r) {
  var n;
  return /* @__PURE__ */ C.isValidElement(t) ? n = /* @__PURE__ */ C.cloneElement(t, r) : ue(t) ? n = t(r) : n = /* @__PURE__ */ C.createElement("line", qp({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, tz = function(t, r, n, a, i, o, s, u, c) {
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
    return Xt(c, "discard") && G3(m, function(w) {
      return !t.isInRange(w);
    }) ? null : m;
  }
  return null;
};
function rz(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, s = e.className, u = e.alwaysShow, c = N5(), l = $A(a), f = IA(i), d = q5();
  if (!c || !d)
    return null;
  Lt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = bv({
    x: l.scale,
    y: f.scale
  }), y = Ve(t), h = Ve(r), v = n && n.length === 2, b = tz(p, y, h, v, d, e.position, l.orientation, f.orientation, e);
  if (!b)
    return null;
  var g = Y5(b, 2), x = g[0], O = x.x, m = x.y, w = g[1], S = w.x, A = w.y, P = Xt(e, "hidden") ? "url(#".concat(c, ")") : void 0, D = Gw(Gw({
    clipPath: P
  }, ie(e, !0)), {}, {
    x1: O,
    y1: m,
    x2: S,
    y2: A
  });
  return /* @__PURE__ */ C.createElement(de, {
    className: fe("recharts-reference-line", s)
  }, ez(o, D), Ke.renderCallByParent(e, _5({
    x1: O,
    y1: m,
    x2: S,
    y2: A
  })));
}
var Av = /* @__PURE__ */ (function(e) {
  function t() {
    return F5(this, t), U5(this, t, arguments);
  }
  return V5(t, e), W5(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(rz, this.props);
    }
  }]);
})(C.Component);
_v(Av, "displayName", "ReferenceLine");
_v(Av, "defaultProps", {
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
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function Xw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xw(Object(r), !0).forEach(function(n) {
      nu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function az(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, RA(n.key), n);
  }
}
function iz(e, t, r) {
  return t && az(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function oz(e, t, r) {
  return t = hs(t), sz(e, NA() ? Reflect.construct(t, r || [], hs(e).constructor) : t.apply(e, r));
}
function sz(e, t) {
  if (t && (Kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return uz(e);
}
function uz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function NA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (NA = function() {
    return !!e;
  })();
}
function hs(e) {
  return hs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hs(e);
}
function cz(e, t) {
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
  return t = RA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RA(e) {
  var t = lz(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function lz(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var fz = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = bv({
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
    return nz(this, t), oz(this, t, arguments);
  }
  return cz(t, e), iz(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, s = n.alwaysShow, u = n.clipPathId, c = Ve(a), l = Ve(i);
      if (Lt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !l)
        return null;
      var f = fz(this.props);
      if (!f)
        return null;
      var d = f.x, p = f.y, y = this.props, h = y.shape, v = y.className, b = Xt(this.props, "hidden") ? "url(#".concat(u, ")") : void 0, g = Zw(Zw({
        clipPath: b
      }, ie(this.props, !0)), {}, {
        cx: d,
        cy: p
      });
      return /* @__PURE__ */ C.createElement(de, {
        className: fe("recharts-reference-dot", v)
      }, t.renderDot(h, g), Ke.renderCallByParent(this.props, {
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
  return /* @__PURE__ */ C.isValidElement(e) ? r = /* @__PURE__ */ C.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ C.createElement(Ki, Bp({}, t, {
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
function Vn(e) {
  "@babel/helpers - typeof";
  return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vn(e);
}
function Jw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jw(Object(r), !0).forEach(function(n) {
      iu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qA(n.key), n);
  }
}
function hz(e, t, r) {
  return t && pz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vz(e, t, r) {
  return t = vs(t), yz(e, LA() ? Reflect.construct(t, r || [], vs(e).constructor) : t.apply(e, r));
}
function yz(e, t) {
  if (t && (Vn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mz(e);
}
function mz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function LA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (LA = function() {
    return !!e;
  })();
}
function vs(e) {
  return vs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vs(e);
}
function gz(e, t) {
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
  return t = qA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qA(e) {
  var t = bz(e, "string");
  return Vn(t) == "symbol" ? t : t + "";
}
function bz(e, t) {
  if (Vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var xz = function(t, r, n, a, i) {
  var o = i.x1, s = i.x2, u = i.y1, c = i.y2, l = i.xAxis, f = i.yAxis;
  if (!l || !f) return null;
  var d = bv({
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
  return Xt(i, "discard") && (!d.isInRange(p) || !d.isInRange(y)) ? null : _A(p, y);
}, ou = /* @__PURE__ */ (function(e) {
  function t() {
    return dz(this, t), vz(this, t, arguments);
  }
  return gz(t, e), hz(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, s = n.y2, u = n.className, c = n.alwaysShow, l = n.clipPathId;
      Lt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = Ve(a), d = Ve(i), p = Ve(o), y = Ve(s), h = this.props.shape;
      if (!f && !d && !p && !y && !h)
        return null;
      var v = xz(f, d, p, y, this.props);
      if (!v && !h)
        return null;
      var b = Xt(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
      return /* @__PURE__ */ C.createElement(de, {
        className: fe("recharts-reference-area", u)
      }, t.renderRect(h, Qw(Qw({
        clipPath: b
      }, ie(this.props, !0)), v)), Ke.renderCallByParent(this.props, v));
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
  return /* @__PURE__ */ C.isValidElement(e) ? r = /* @__PURE__ */ C.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ C.createElement(mv, zp({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function BA(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function wz(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return P5(n, r);
}
function Oz(e, t, r) {
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
function Sz(e, t) {
  return BA(e, t + 1);
}
function _z(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, s = t.end, u = 0, c = 1, l = o, f = function() {
    var y = n?.[u];
    if (y === void 0)
      return {
        v: BA(n, c)
      };
    var h = u, v, b = function() {
      return v === void 0 && (v = r(y, h)), v;
    }, g = y.coordinate, x = u === 0 || ys(e, g, b, l, s);
    x || (u = 0, l = o, c += 1), x && (l = g + e * (b() / 2 + a), u += c);
  }, d; c <= i.length; )
    if (d = f(), d) return d.v;
  return [];
}
function Ti(e) {
  "@babel/helpers - typeof";
  return Ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ti(e);
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
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? e1(Object(r), !0).forEach(function(n) {
      Az(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Az(e, t, r) {
  return t = Pz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Pz(e) {
  var t = Tz(e, "string");
  return Ti(t) == "symbol" ? t : t + "";
}
function Tz(e, t) {
  if (Ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ez(e, t, r, n, a) {
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
function Cz(e, t, r, n, a, i) {
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
    var S = ys(e, x.tickCoord, m, u, c);
    S && (u = x.tickCoord + e * (m() / 2 + a), o[g] = rt(rt({}, x), {}, {
      isShow: !0
    }));
  }, v = 0; v < y; v++)
    h(v);
  return o;
}
function Pv(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, s = e.orientation, u = e.interval, c = e.tickFormatter, l = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (G(u) || Tr.isSsr)
    return Sz(a, typeof u == "number" && G(u) ? u : 0);
  var d = [], p = s === "top" || s === "bottom" ? "width" : "height", y = l && p === "width" ? Na(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, h = function(x, O) {
    var m = ue(c) ? c(x.value, O) : x.value;
    return p === "width" ? wz(Na(m, {
      fontSize: t,
      letterSpacing: r
    }), y, f) : Na(m, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, v = a.length >= 2 ? it(a[1].coordinate - a[0].coordinate) : 1, b = Oz(i, v, p);
  return u === "equidistantPreserveStart" ? _z(v, b, h, a, o) : (u === "preserveStart" || u === "preserveStartEnd" ? d = Cz(v, b, h, a, o, u === "preserveStartEnd") : d = Ez(v, b, h, a, o), d.filter(function(g) {
    return g.isShow;
  }));
}
var jz = ["viewBox"], Mz = ["viewBox"], $z = ["ticks"];
function Gn(e) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gn(e);
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
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? t1(Object(r), !0).forEach(function(n) {
      Tv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xd(e, t) {
  if (e == null) return {};
  var r = Iz(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Iz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Dz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function r1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zA(n.key), n);
  }
}
function kz(e, t, r) {
  return t && r1(e.prototype, t), r && r1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Nz(e, t, r) {
  return t = ms(t), Rz(e, FA() ? Reflect.construct(t, r || [], ms(e).constructor) : t.apply(e, r));
}
function Rz(e, t) {
  if (t && (Gn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Lz(e);
}
function Lz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function FA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (FA = function() {
    return !!e;
  })();
}
function ms(e) {
  return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ms(e);
}
function qz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Up(e, t);
}
function Up(e, t) {
  return Up = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Up(e, t);
}
function Tv(e, t, r) {
  return t = zA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zA(e) {
  var t = Bz(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function Bz(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ca = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return Dz(this, t), n = Nz(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return qz(t, e), kz(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = xd(n, jz), s = this.props, u = s.viewBox, c = xd(s, Mz);
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
      return /* @__PURE__ */ C.createElement("line", On({}, f, {
        className: fe("recharts-cartesian-axis-line", gt(l, "className"))
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
        var o = this, s = this.props, u = s.tickLine, c = s.stroke, l = s.tick, f = s.tickFormatter, d = s.unit, p = Pv(at(at({}, this.props), {}, {
          ticks: n
        }), a, i), y = this.getTickTextAnchor(), h = this.getTickVerticalAnchor(), v = ie(this.props, !1), b = ie(l, !1), g = at(at({}, v), {}, {
          fill: "none"
        }, ie(u, !1)), x = p.map(function(O, m) {
          var w = o.getTickLineCoord(O), S = w.line, A = w.tick, P = at(at(at(at({
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
          return /* @__PURE__ */ C.createElement(de, On({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
          }, Qr(o.props, O, m)), u && /* @__PURE__ */ C.createElement("line", On({}, g, S, {
            className: fe("recharts-cartesian-axis-tick-line", gt(u, "className"))
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
      var f = this.props, d = f.ticks, p = xd(f, $z), y = d;
      return ue(u) && (y = d && d.length > 0 ? u(this.props) : u(p)), o <= 0 || s <= 0 || !y || !y.length ? null : /* @__PURE__ */ C.createElement(de, {
        className: fe("recharts-cartesian-axis", c),
        ref: function(v) {
          n.layerReference = v;
        }
      }, i && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), Ke.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(Ar, On({}, a, {
        className: "recharts-cartesian-axis-tick-value"
      }), i), o;
    }
  }]);
})(Y1);
Tv(ca, "displayName", "CartesianAxis");
Tv(ca, "defaultProps", {
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
var Fz = ["x1", "y1", "x2", "y2", "key"], zz = ["offset"];
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
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
function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? n1(Object(r), !0).forEach(function(n) {
      Wz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wz(e, t, r) {
  return t = Uz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Uz(e) {
  var t = Hz(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function Hz(e, t) {
  if (tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wr() {
  return Wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wr.apply(this, arguments);
}
function a1(e, t) {
  if (e == null) return {};
  var r = Kz(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Kz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Vz = function(t) {
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
function WA(e, t) {
  var r;
  if (/* @__PURE__ */ C.isValidElement(e))
    r = /* @__PURE__ */ C.cloneElement(e, t);
  else if (ue(e))
    r = e(t);
  else {
    var n = t.x1, a = t.y1, i = t.x2, o = t.y2, s = t.key, u = a1(t, Fz), c = ie(u, !1);
    c.offset;
    var l = a1(c, zz);
    r = /* @__PURE__ */ C.createElement("line", Wr({}, l, {
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
function Gz(e) {
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
    return WA(a, c);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function Yz(e) {
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
    return WA(a, c);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function Xz(e) {
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
function Zz(e) {
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
var Jz = function(t, r) {
  var n = t.xAxis, a = t.width, i = t.height, o = t.offset;
  return F_(Pv(nt(nt(nt({}, ca.defaultProps), n), {}, {
    ticks: ir(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.left, o.left + o.width, r);
}, Qz = function(t, r) {
  var n = t.yAxis, a = t.width, i = t.height, o = t.offset;
  return F_(Pv(nt(nt(nt({}, ca.defaultProps), n), {}, {
    ticks: ir(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.top, o.top + o.height, r);
}, vn = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Vi(e) {
  var t, r, n, a, i, o, s = Ov(), u = Sv(), c = B5(), l = nt(nt({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : vn.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : vn.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : vn.horizontal,
    horizontalFill: (a = e.horizontalFill) !== null && a !== void 0 ? a : vn.horizontalFill,
    vertical: (i = e.vertical) !== null && i !== void 0 ? i : vn.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : vn.verticalFill,
    x: G(e.x) ? e.x : c.left,
    y: G(e.y) ? e.y : c.top,
    width: G(e.width) ? e.width : c.width,
    height: G(e.height) ? e.height : c.height
  }), f = l.x, d = l.y, p = l.width, y = l.height, h = l.syncWithTicks, v = l.horizontalValues, b = l.verticalValues, g = R5(), x = L5();
  if (!G(p) || p <= 0 || !G(y) || y <= 0 || !G(f) || f !== +f || !G(d) || d !== +d)
    return null;
  var O = l.verticalCoordinatesGenerator || Jz, m = l.horizontalCoordinatesGenerator || Qz, w = l.horizontalPoints, S = l.verticalPoints;
  if ((!w || !w.length) && ue(m)) {
    var A = v && v.length, P = m({
      yAxis: x ? nt(nt({}, x), {}, {
        ticks: A ? v : x.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, A ? !0 : h);
    Lt(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(tn(P), "]")), Array.isArray(P) && (w = P);
  }
  if ((!S || !S.length) && ue(O)) {
    var D = b && b.length, T = O({
      xAxis: g ? nt(nt({}, g), {}, {
        ticks: D ? b : g.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, D ? !0 : h);
    Lt(Array.isArray(T), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(tn(T), "]")), Array.isArray(T) && (S = T);
  }
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ C.createElement(Vz, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ C.createElement(Gz, Wr({}, l, {
    offset: c,
    horizontalPoints: w,
    xAxis: g,
    yAxis: x
  })), /* @__PURE__ */ C.createElement(Yz, Wr({}, l, {
    offset: c,
    verticalPoints: S,
    xAxis: g,
    yAxis: x
  })), /* @__PURE__ */ C.createElement(Xz, Wr({}, l, {
    horizontalPoints: w
  })), /* @__PURE__ */ C.createElement(Zz, Wr({}, l, {
    verticalPoints: S
  })));
}
Vi.displayName = "CartesianGrid";
var e8 = ["type", "layout", "connectNulls", "ref"], t8 = ["key"];
function Yn(e) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yn(e);
}
function i1(e, t) {
  if (e == null) return {};
  var r = r8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function r8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? o1(Object(r), !0).forEach(function(n) {
      Dt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yn(e) {
  return o8(e) || i8(e) || a8(e) || n8();
}
function n8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a8(e, t) {
  if (e) {
    if (typeof e == "string") return Hp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hp(e, t);
  }
}
function i8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function o8(e) {
  if (Array.isArray(e)) return Hp(e);
}
function Hp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function s8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function s1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, HA(n.key), n);
  }
}
function u8(e, t, r) {
  return t && s1(e.prototype, t), r && s1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function c8(e, t, r) {
  return t = gs(t), l8(e, UA() ? Reflect.construct(t, r || [], gs(e).constructor) : t.apply(e, r));
}
function l8(e, t) {
  if (t && (Yn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return f8(e);
}
function f8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function UA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (UA = function() {
    return !!e;
  })();
}
function gs(e) {
  return gs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gs(e);
}
function d8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Kp(e, t);
}
function Kp(e, t) {
  return Kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Kp(e, t);
}
function Dt(e, t, r) {
  return t = HA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HA(e) {
  var t = p8(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function p8(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Gi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    s8(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = c8(this, t, [].concat(a)), Dt(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Dt(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), Dt(r, "getStrokeDasharray", function(o, s, u) {
      var c = u.reduce(function(b, g) {
        return b + g;
      });
      if (!c)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var l = Math.floor(o / c), f = o % c, d = s - o, p = [], y = 0, h = 0; y < u.length; h += u[y], ++y)
        if (h + u[y] > f) {
          p = [].concat(yn(u.slice(0, y)), [f - h]);
          break;
        }
      var v = p.length % 2 === 0 ? [0, d] : [d];
      return [].concat(yn(t.repeat(u, l)), yn(p), v).map(function(b) {
        return "".concat(b, "px");
      }).join(", ");
    }), Dt(r, "id", on("recharts-line-")), Dt(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), Dt(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), Dt(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return d8(t, e), u8(t, [{
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
      var i = this.props, o = i.points, s = i.xAxis, u = i.yAxis, c = i.layout, l = i.children, f = bt(l, Hi);
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
      return /* @__PURE__ */ C.createElement(de, p, f.map(function(y) {
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
        var b = pt(pt(pt({
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
      return /* @__PURE__ */ C.createElement(de, za({
        className: "recharts-line-dots",
        key: "dots"
      }, y), p);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, a, i, o) {
      var s = this.props, u = s.type, c = s.layout, l = s.connectNulls;
      s.ref;
      var f = i1(s, e8), d = pt(pt(pt({}, ie(f, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: a ? "url(#clipPath-".concat(i, ")") : null,
        points: n
      }, o), {}, {
        type: u,
        layout: c,
        connectNulls: l
      });
      return /* @__PURE__ */ C.createElement(Xr, za({}, d, {
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
          var w = g.length / s.length, S = s.map(function($, M) {
            var j = Math.floor(M * w);
            if (g[j]) {
              var I = g[j], k = He(I.x, $.x), R = He(I.y, $.y);
              return pt(pt({}, $), {}, {
                x: k(m),
                y: R(m)
              });
            }
            if (y) {
              var L = He(h * 2, $.x), z = He(v / 2, $.y);
              return pt(pt({}, $), {}, {
                x: L(m),
                y: z(m)
              });
            }
            return pt(pt({}, $), {}, {
              x: $.x,
              y: $.y
            });
          });
          return i.renderCurveStatically(S, n, a);
        }
        var A = He(0, x), P = A(m), D;
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
      return s && o && o.length && (!c && l > 0 || !Jr(c, o)) ? this.renderCurveWithAnimation(n, a) : this.renderCurveStatically(o, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, u = a.className, c = a.xAxis, l = a.yAxis, f = a.top, d = a.left, p = a.width, y = a.height, h = a.isAnimationActive, v = a.id;
      if (i || !s || !s.length)
        return null;
      var b = this.state.isAnimationFinished, g = s.length === 1, x = fe("recharts-line", u), O = c && c.allowDataOverflow, m = l && l.allowDataOverflow, w = O || m, S = le(v) ? this.id : v, A = (n = ie(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, P = A.r, D = P === void 0 ? 3 : P, T = A.strokeWidth, $ = T === void 0 ? 2 : T, M = eS(o) ? o : {}, j = M.clipDot, I = j === void 0 ? !0 : j, k = D * 2 + $;
      return /* @__PURE__ */ C.createElement(de, {
        className: x
      }, O || m ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: O ? d : d - p / 2,
        y: m ? f : f - y / 2,
        width: O ? p : p * 2,
        height: m ? y : y * 2
      })), !I && /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-dots-".concat(S)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: d - k / 2,
        y: f - k / 2,
        width: p + k,
        height: y + k
      }))) : null, !g && this.renderCurve(w, S), this.renderErrorBar(w, S), (g || o) && this.renderDots(w, I, S), (!h || b) && Pt.renderCallByParent(this.props, s));
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
      for (var i = n.length % 2 !== 0 ? [].concat(yn(n), [0]) : n, o = [], s = 0; s < a; ++s)
        o = [].concat(yn(o), yn(i));
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
        var o = a.key, s = i1(a, t8), u = fe("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        i = /* @__PURE__ */ C.createElement(Ki, za({
          key: o
        }, s, {
          className: u
        }));
      }
      return i;
    }
  }]);
})(jt);
Dt(Gi, "displayName", "Line");
Dt(Gi, "defaultProps", {
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
  isAnimationActive: !Tr.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
Dt(Gi, "getComposedData", function(e) {
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
  return pt({
    points: f,
    layout: l
  }, c);
});
var h8 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], v8 = ["key"], KA;
function Xn(e) {
  "@babel/helpers - typeof";
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xn(e);
}
function VA(e, t) {
  if (e == null) return {};
  var r = y8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function y8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? u1(Object(r), !0).forEach(function(n) {
      Vt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function m8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, YA(n.key), n);
  }
}
function g8(e, t, r) {
  return t && c1(e.prototype, t), r && c1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function b8(e, t, r) {
  return t = bs(t), x8(e, GA() ? Reflect.construct(t, r || [], bs(e).constructor) : t.apply(e, r));
}
function x8(e, t) {
  if (t && (Xn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return w8(e);
}
function w8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function GA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (GA = function() {
    return !!e;
  })();
}
function bs(e) {
  return bs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bs(e);
}
function O8(e, t) {
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
  return t = YA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YA(e) {
  var t = S8(e, "string");
  return Xn(t) == "symbol" ? t : t + "";
}
function S8(e, t) {
  if (Xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var $r = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    m8(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = b8(this, t, [].concat(a)), Vt(r, "state", {
      isAnimationFinished: !0
    }), Vt(r, "id", on("recharts-area-")), Vt(r, "handleAnimationEnd", function() {
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
  return O8(t, e), g8(t, [{
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
      return /* @__PURE__ */ C.createElement(de, Ur({
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
      var p = VA(s, h8);
      return /* @__PURE__ */ C.createElement(de, {
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ C.createElement(Xr, Ur({}, ie(p, !0), {
        points: n,
        connectNulls: f,
        type: c,
        baseLine: a,
        layout: u,
        stroke: "none",
        className: "recharts-area-area"
      })), l !== "none" && /* @__PURE__ */ C.createElement(Xr, Ur({}, ie(this.props, !1), {
        className: "recharts-area-curve",
        layout: u,
        type: c,
        connectNulls: f,
        fill: "none",
        points: n
      })), l !== "none" && d && /* @__PURE__ */ C.createElement(Xr, Ur({}, ie(this.props, !1), {
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
          var x = h.length / s.length, O = s.map(function(A, P) {
            var D = Math.floor(P * x);
            if (h[D]) {
              var T = h[D], $ = He(T.x, A.x), M = He(T.y, A.y);
              return gr(gr({}, A), {}, {
                x: $(g),
                y: M(g)
              });
            }
            return A;
          }), m;
          if (G(u) && typeof u == "number") {
            var w = He(v, u);
            m = w(g);
          } else if (le(u) || aa(u)) {
            var S = He(v, 0);
            m = S(g);
          } else
            m = u.map(function(A, P) {
              var D = Math.floor(P * x);
              if (v[D]) {
                var T = v[D], $ = He(T.x, A.x), M = He(T.y, A.y);
                return gr(gr({}, A), {}, {
                  x: $(g),
                  y: M(g)
                });
              }
              return A;
            });
          return i.renderAreaStatically(O, m, n, a);
        }
        return /* @__PURE__ */ C.createElement(de, null, /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
          id: "animationClipPath-".concat(a)
        }, i.renderClipRect(g))), /* @__PURE__ */ C.createElement(de, {
          clipPath: "url(#animationClipPath-".concat(a, ")")
        }, i.renderAreaStatically(s, u, n, a)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, a) {
      var i = this.props, o = i.points, s = i.baseLine, u = i.isAnimationActive, c = this.state, l = c.prevPoints, f = c.prevBaseLine, d = c.totalLength;
      return u && o && o.length && (!l && d > 0 || !Jr(l, o) || !Jr(f, s)) ? this.renderAreaWithAnimation(n, a) : this.renderAreaStatically(o, s, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, u = a.className, c = a.top, l = a.left, f = a.xAxis, d = a.yAxis, p = a.width, y = a.height, h = a.isAnimationActive, v = a.id;
      if (i || !s || !s.length)
        return null;
      var b = this.state.isAnimationFinished, g = s.length === 1, x = fe("recharts-area", u), O = f && f.allowDataOverflow, m = d && d.allowDataOverflow, w = O || m, S = le(v) ? this.id : v, A = (n = ie(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, P = A.r, D = P === void 0 ? 3 : P, T = A.strokeWidth, $ = T === void 0 ? 2 : T, M = eS(o) ? o : {}, j = M.clipDot, I = j === void 0 ? !0 : j, k = D * 2 + $;
      return /* @__PURE__ */ C.createElement(de, {
        className: x
      }, O || m ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: O ? l : l - p / 2,
        y: m ? c : c - y / 2,
        width: O ? p : p * 2,
        height: m ? y : y * 2
      })), !I && /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-dots-".concat(S)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: l - k / 2,
        y: c - k / 2,
        width: p + k,
        height: y + k
      }))) : null, g ? null : this.renderArea(w, S), (o || g) && this.renderDots(w, I, S), (!h || b) && Pt.renderCallByParent(this.props, s));
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
KA = $r;
Vt($r, "displayName", "Area");
Vt($r, "defaultProps", {
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
  isAnimationActive: !Tr.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Vt($r, "getBaseValue", function(e, t, r, n) {
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
Vt($r, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, u = e.dataKey, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = t.layout, y = c && c.length, h = KA.getBaseValue(t, r, n, a), v = p === "horizontal", b = !1, g = f.map(function(O, m) {
    var w;
    y ? w = c[l + m] : (w = Re(O, u), Array.isArray(w) ? b = !0 : w = [h, w]);
    var S = w[1] == null || y && Re(O, u) == null;
    return v ? {
      x: Vo({
        axis: n,
        ticks: i,
        bandSize: s,
        entry: O,
        index: m
      }),
      y: S ? null : a.scale(w[1]),
      value: w,
      payload: O
    } : {
      x: S ? null : n.scale(w[1]),
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
Vt($r, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ C.isValidElement(e))
    r = /* @__PURE__ */ C.cloneElement(e, t);
  else if (ue(e))
    r = e(t);
  else {
    var n = fe("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = VA(t, v8);
    r = /* @__PURE__ */ C.createElement(Ki, Ur({}, i, {
      key: a,
      className: n
    }));
  }
  return r;
});
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function _8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function A8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, JA(n.key), n);
  }
}
function P8(e, t, r) {
  return t && A8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function T8(e, t, r) {
  return t = xs(t), E8(e, XA() ? Reflect.construct(t, r || [], xs(e).constructor) : t.apply(e, r));
}
function E8(e, t) {
  if (t && (Zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return C8(e);
}
function C8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function XA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (XA = function() {
    return !!e;
  })();
}
function xs(e) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xs(e);
}
function j8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gp(e, t);
}
function Gp(e, t) {
  return Gp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Gp(e, t);
}
function ZA(e, t, r) {
  return t = JA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JA(e) {
  var t = M8(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function M8(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zn(n) != "object") return n;
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
function $8(e) {
  var t = e.xAxisId, r = Ov(), n = Sv(), a = $A(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ C.createElement(ca, Yp({}, a, {
      className: fe("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
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
    return _8(this, t), T8(this, t, arguments);
  }
  return j8(t, e), P8(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement($8, this.props);
    }
  }]);
})(C.Component);
ZA(vr, "displayName", "XAxis");
ZA(vr, "defaultProps", {
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
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function I8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function D8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tP(n.key), n);
  }
}
function k8(e, t, r) {
  return t && D8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function N8(e, t, r) {
  return t = ws(t), R8(e, QA() ? Reflect.construct(t, r || [], ws(e).constructor) : t.apply(e, r));
}
function R8(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return L8(e);
}
function L8(e) {
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
function ws(e) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ws(e);
}
function q8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xp(e, t);
}
function Xp(e, t) {
  return Xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xp(e, t);
}
function eP(e, t, r) {
  return t = tP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tP(e) {
  var t = B8(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function B8(e, t) {
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
var F8 = function(t) {
  var r = t.yAxisId, n = Ov(), a = Sv(), i = IA(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ C.createElement(ca, Zp({}, i, {
      className: fe("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
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
    return I8(this, t), N8(this, t, arguments);
  }
  return q8(t, e), k8(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(F8, this.props);
    }
  }]);
})(C.Component);
eP(yr, "displayName", "YAxis");
eP(yr, "defaultProps", {
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
function l1(e) {
  return H8(e) || U8(e) || W8(e) || z8();
}
function z8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W8(e, t) {
  if (e) {
    if (typeof e == "string") return Jp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jp(e, t);
  }
}
function U8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function H8(e) {
  if (Array.isArray(e)) return Jp(e);
}
function Jp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Qp = function(t, r, n, a, i) {
  var o = bt(t, Av), s = bt(t, au), u = [].concat(l1(o), l1(s)), c = bt(t, ou), l = "".concat(a, "Id"), f = a[0], d = r;
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
}, wd = { exports: {} }, f1;
function K8() {
  return f1 || (f1 = 1, (function(e) {
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
var V8 = K8();
const G8 = /* @__PURE__ */ Ae(V8);
var Od = new G8(), Sd = "recharts.syncMouseEvents";
function Ei(e) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(e);
}
function Y8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function X8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, rP(n.key), n);
  }
}
function Z8(e, t, r) {
  return t && X8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _d(e, t, r) {
  return t = rP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rP(e) {
  var t = J8(e, "string");
  return Ei(t) == "symbol" ? t : t + "";
}
function J8(e, t) {
  if (Ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Q8 = /* @__PURE__ */ (function() {
  function e() {
    Y8(this, e), _d(this, "activeIndex", 0), _d(this, "coordinateList", []), _d(this, "layout", "horizontal");
  }
  return Z8(e, [{
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
function e4(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], a = e?.[1];
    if (n && a && G(n) && G(a))
      return !0;
  }
  return !1;
}
function t4(e, t, r, n) {
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
function nP(e) {
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
function r4(e, t, r) {
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
      return nP(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function Ci(e) {
  "@babel/helpers - typeof";
  return Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ci(e);
}
function d1(e, t) {
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
    t % 2 ? d1(Object(r), !0).forEach(function(n) {
      n4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function n4(e, t, r) {
  return t = a4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function a4(e) {
  var t = i4(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function i4(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function o4(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, s = e.activePayload, u = e.offset, c = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var y, h = Xr;
  if (d === "ScatterChart")
    y = o, h = gF;
  else if (d === "BarChart")
    y = t4(f, o, u, l), h = mv;
  else if (f === "radial") {
    var v = nP(o), b = v.cx, g = v.cy, x = v.radius, O = v.startAngle, m = v.endAngle;
    y = {
      cx: b,
      cy: g,
      startAngle: O,
      endAngle: m,
      innerRadius: x,
      outerRadius: x
    }, h = J_;
  } else
    y = {
      points: r4(f, o, u)
    }, h = Xr;
  var w = yo(yo(yo(yo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), y), ie(p, !1)), {}, {
    payload: s,
    payloadIndex: c,
    className: fe("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ Nt(p) ? /* @__PURE__ */ Ue(p, w) : /* @__PURE__ */ G1(h, w);
}
var s4 = ["item"], u4 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Qn(e) {
  "@babel/helpers - typeof";
  return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qn(e);
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
function p1(e, t) {
  return f4(e) || l4(e, t) || iP(e, t) || c4();
}
function c4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l4(e, t) {
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
function f4(e) {
  if (Array.isArray(e)) return e;
}
function h1(e, t) {
  if (e == null) return {};
  var r = d4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function d4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function p4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, oP(n.key), n);
  }
}
function v4(e, t, r) {
  return t && h4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function y4(e, t, r) {
  return t = Os(t), m4(e, aP() ? Reflect.construct(t, r || [], Os(e).constructor) : t.apply(e, r));
}
function m4(e, t) {
  if (t && (Qn(t) === "object" || typeof t == "function"))
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
function Os(e) {
  return Os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Os(e);
}
function b4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && eh(e, t);
}
function eh(e, t) {
  return eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, eh(e, t);
}
function ea(e) {
  return O4(e) || w4(e) || iP(e) || x4();
}
function x4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iP(e, t) {
  if (e) {
    if (typeof e == "string") return th(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return th(e, t);
  }
}
function w4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function O4(e) {
  if (Array.isArray(e)) return th(e);
}
function th(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? v1(Object(r), !0).forEach(function(n) {
      se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function se(e, t, r) {
  return t = oP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oP(e) {
  var t = S4(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function S4(e, t) {
  if (Qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _4 = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, A4 = {
  width: "100%",
  height: "100%"
}, sP = {
  x: 0,
  y: 0
};
function mo(e) {
  return e;
}
var P4 = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, T4 = function(t, r, n, a) {
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
  return sP;
}, su = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(s, u) {
    var c = u.props.data;
    return c && c.length ? [].concat(ea(s), ea(c)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && G(a) && G(i) ? t.slice(a, i + 1) : [];
};
function uP(e) {
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
      d = Oo(p, o.dataKey, a);
    } else
      d = f && f[n] || s[n];
    return d ? [].concat(ea(u), [K_(c, d)]) : u;
  }, []);
}, y1 = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = P4(i, n), s = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, l = LR(o, s, c, u);
  if (l >= 0 && c) {
    var f = c[l] && c[l].value, d = rh(t, r, l, f), p = T4(n, s, l, i);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, E4 = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, p = B_(l, i);
  return n.reduce(function(y, h) {
    var v, b = h.type.defaultProps !== void 0 ? W(W({}, h.type.defaultProps), h.props) : h.props, g = b.type, x = b.dataKey, O = b.allowDataOverflow, m = b.allowDuplicatedCategory, w = b.scale, S = b.ticks, A = b.includeHidden, P = b[o];
    if (y[P])
      return y;
    var D = su(t.data, {
      graphicalItems: a.filter(function(q) {
        var H, X = o in q.props ? q.props[o] : (H = q.type.defaultProps) === null || H === void 0 ? void 0 : H[o];
        return X === P;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), T = D.length, $, M, j;
    e4(b.domain, O, g) && ($ = vp(b.domain, null, O), p && (g === "number" || w !== "auto") && (j = La(D, x, "category")));
    var I = uP(g);
    if (!$ || $.length === 0) {
      var k, R = (k = b.domain) !== null && k !== void 0 ? k : I;
      if (x) {
        if ($ = La(D, x, g), g === "category" && p) {
          var L = cM($);
          m && L ? (M = $, $ = ss(0, T)) : m || ($ = ox(R, $, h).reduce(function(q, H) {
            return q.indexOf(H) >= 0 ? q : [].concat(ea(q), [H]);
          }, []));
        } else if (g === "category")
          m ? $ = $.filter(function(q) {
            return q !== "" && !le(q);
          }) : $ = ox(R, $, h).reduce(function(q, H) {
            return q.indexOf(H) >= 0 || H === "" || le(H) ? q : [].concat(ea(q), [H]);
          }, []);
        else if (g === "number") {
          var z = WR(D, a.filter(function(q) {
            var H, X, ee = o in q.props ? q.props[o] : (H = q.type.defaultProps) === null || H === void 0 ? void 0 : H[o], ne = "hide" in q.props ? q.props.hide : (X = q.type.defaultProps) === null || X === void 0 ? void 0 : X.hide;
            return ee === P && (A || !ne);
          }), x, i, l);
          z && ($ = z);
        }
        p && (g === "number" || w !== "auto") && (j = La(D, x, "category"));
      } else p ? $ = ss(0, T) : s && s[P] && s[P].hasStack && g === "number" ? $ = d === "expand" ? [0, 1] : H_(s[P].stackGroups, u, c) : $ = q_(D, a.filter(function(q) {
        var H = o in q.props ? q.props[o] : q.type.defaultProps[o], X = "hide" in q.props ? q.props.hide : q.type.defaultProps.hide;
        return H === P && (A || !X);
      }), g, l, !0);
      if (g === "number")
        $ = Qp(f, $, P, i, S), R && ($ = vp(R, $, O));
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
}, C4 = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = su(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), p = d.length, y = B_(l, i), h = -1;
  return n.reduce(function(v, b) {
    var g = b.type.defaultProps !== void 0 ? W(W({}, b.type.defaultProps), b.props) : b.props, x = g[o], O = uP("number");
    if (!v[x]) {
      h++;
      var m;
      return y ? m = ss(0, p) : s && s[x] && s[x].hasStack ? (m = H_(s[x].stackGroups, u, c), m = Qp(f, m, x, i)) : (m = vp(O, q_(d, n.filter(function(w) {
        var S, A, P = o in w.props ? w.props[o] : (S = w.type.defaultProps) === null || S === void 0 ? void 0 : S[o], D = "hide" in w.props ? w.props.hide : (A = w.type.defaultProps) === null || A === void 0 ? void 0 : A.hide;
        return P === x && !D;
      }), "number", l), a.defaultProps.allowDataOverflow), m = Qp(f, m, x, i)), W(W({}, v), {}, se({}, x, W(W({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: gt(_4, "".concat(i, ".").concat(h % 2), null),
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
}, j4 = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.children, f = "".concat(a, "Id"), d = bt(l, i), p = {};
  return d && d.length ? p = E4(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (p = C4(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  })), p;
}, M4 = function(t) {
  var r = xr(t), n = ir(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Wh(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Go(r, n)
  };
}, m1 = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = vt(r, zn), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, $4 = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = or(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, g1 = function(t) {
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
}, I4 = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, s = t.yAxisMap, u = s === void 0 ? {} : s, c = n.width, l = n.height, f = n.children, d = n.margin || {}, p = vt(f, zn), y = vt(f, Vr), h = Object.keys(u).reduce(function(m, w) {
    var S = u[w], A = S.orientation;
    return !S.mirror && !S.hide ? W(W({}, m), {}, se({}, A, m[A] + S.width)) : m;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), v = Object.keys(o).reduce(function(m, w) {
    var S = o[w], A = S.orientation;
    return !S.mirror && !S.hide ? W(W({}, m), {}, se({}, A, gt(m, "".concat(A)) + S.height)) : m;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), b = W(W({}, v), h), g = b.bottom;
  p && (b.bottom += p.props.height || zn.defaultProps.height), y && r && (b = FR(b, a, n, r));
  var x = c - b.left - b.right, O = l - b.top - b.bottom;
  return W(W({
    brushBottom: g
  }, b), {}, {
    // never return negative values for height and width
    width: Math.max(x, 0),
    height: Math.max(O, 0)
  });
}, D4 = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, uu = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, u = t.axisComponents, c = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, d = function(b, g) {
    var x = g.graphicalItems, O = g.stackGroups, m = g.offset, w = g.updateId, S = g.dataStartIndex, A = g.dataEndIndex, P = b.barSize, D = b.layout, T = b.barGap, $ = b.barCategoryGap, M = b.maxBarSize, j = g1(D), I = j.numericAxisName, k = j.cateAxisName, R = $4(x), L = [];
    return x.forEach(function(z, N) {
      var B = su(b.data, {
        graphicalItems: [z],
        dataStartIndex: S,
        dataEndIndex: A
      }), q = z.type.defaultProps !== void 0 ? W(W({}, z.type.defaultProps), z.props) : z.props, H = q.dataKey, X = q.maxBarSize, ee = q["".concat(I, "Id")], ne = q["".concat(k, "Id")], Q = {}, J = u.reduce(function(ye, qe) {
        var er, ln, fn = g["".concat(qe.axisType, "Map")], Ji = q["".concat(qe.axisType, "Id")];
        fn && fn[Ji] || qe.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? ct(!1, "Specifying a(n) ".concat(qe.axisType, "Id requires a corresponding ").concat(
          qe.axisType,
          "Id on the targeted graphical component "
        ).concat((er = z == null || (ln = z.type) === null || ln === void 0 ? void 0 : ln.displayName) !== null && er !== void 0 ? er : "")) : ct());
        var ya = fn[Ji];
        return W(W({}, ye), {}, se(se({}, qe.axisType, ya), "".concat(qe.axisType, "Ticks"), ir(ya)));
      }, Q), U = J[k], V = J["".concat(k, "Ticks")], Z = O && O[ee] && O[ee].hasStack && JR(z, O[ee].stackGroups), E = or(z.type).indexOf("Bar") >= 0, Y = Go(U, V), F = [], ae = R && qR({
        barSize: P,
        stackGroups: O,
        totalSize: D4(J, k)
      });
      if (E) {
        var ce, oe, Se = le(X) ? M : X, Te = (ce = (oe = Go(U, V, !0)) !== null && oe !== void 0 ? oe : Se) !== null && ce !== void 0 ? ce : 0;
        F = BR({
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
        props: W(W({}, me(W(W({}, J), {}, {
          displayedData: B,
          props: b,
          dataKey: H,
          item: z,
          bandSize: Y,
          barPosition: F,
          offset: m,
          stackedData: Z,
          layout: D,
          dataStartIndex: S,
          dataEndIndex: A
        }))), {}, se(se(se({
          key: z.key || "item-".concat(N)
        }, I, J[I]), k, J[k]), "animationId", w)),
        childIndex: xM(z, b.children),
        item: z
      });
    }), L;
  }, p = function(b, g) {
    var x = b.props, O = b.dataStartIndex, m = b.dataEndIndex, w = b.updateId;
    if (!yg({
      props: x
    }))
      return null;
    var S = x.children, A = x.layout, P = x.stackOffset, D = x.data, T = x.reverseStackOrder, $ = g1(A), M = $.numericAxisName, j = $.cateAxisName, I = bt(S, n), k = XR(D, I, "".concat(M, "Id"), "".concat(j, "Id"), P, T), R = u.reduce(function(q, H) {
      var X = "".concat(H.axisType, "Map");
      return W(W({}, q), {}, se({}, X, j4(x, W(W({}, H), {}, {
        graphicalItems: I,
        stackGroups: H.axisType === M && k,
        dataStartIndex: O,
        dataEndIndex: m
      }))));
    }, {}), L = I4(W(W({}, R), {}, {
      props: x,
      graphicalItems: I
    }), g?.legendBBox);
    Object.keys(R).forEach(function(q) {
      R[q] = l(x, R[q], L, q.replace("Map", ""), r);
    });
    var z = R["".concat(j, "Map")], N = M4(z), B = d(x, W(W({}, R), {}, {
      dataStartIndex: O,
      dataEndIndex: m,
      updateId: w,
      graphicalItems: I,
      stackGroups: k,
      offset: L
    }));
    return W(W({
      formattedGraphicalItems: B,
      graphicalItems: I,
      offset: L,
      stackGroups: k
    }, N), R);
  }, y = /* @__PURE__ */ (function(v) {
    function b(g) {
      var x, O, m;
      return p4(this, b), m = y4(this, b, [g]), se(m, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), se(m, "accessibilityManager", new Q8()), se(m, "handleLegendBBoxUpdate", function(w) {
        if (w) {
          var S = m.state, A = S.dataStartIndex, P = S.dataEndIndex, D = S.updateId;
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
      }), se(m, "handleReceiveSyncEvent", function(w, S, A) {
        if (m.props.syncId === w) {
          if (A === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(S);
        }
      }), se(m, "handleBrushChange", function(w) {
        var S = w.startIndex, A = w.endIndex;
        if (S !== m.state.dataStartIndex || A !== m.state.dataEndIndex) {
          var P = m.state.updateId;
          m.setState(function() {
            return W({
              dataStartIndex: S,
              dataEndIndex: A
            }, p({
              props: m.props,
              dataStartIndex: S,
              dataEndIndex: A,
              updateId: P
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: S,
            dataEndIndex: A
          });
        }
      }), se(m, "handleMouseEnter", function(w) {
        var S = m.getMouseInfo(w);
        if (S) {
          var A = W(W({}, S), {}, {
            isTooltipActive: !0
          });
          m.setState(A), m.triggerSyncEvent(A);
          var P = m.props.onMouseEnter;
          ue(P) && P(A, w);
        }
      }), se(m, "triggeredAfterMouseMove", function(w) {
        var S = m.getMouseInfo(w), A = S ? W(W({}, S), {}, {
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
        var S = {
          isTooltipActive: !1
        };
        m.setState(S), m.triggerSyncEvent(S);
        var A = m.props.onMouseLeave;
        ue(A) && A(S, w);
      }), se(m, "handleOuterEvent", function(w) {
        var S = bM(w), A = gt(m.props, "".concat(S));
        if (S && ue(A)) {
          var P, D;
          /.*touch.*/i.test(S) ? D = m.getMouseInfo(w.changedTouches[0]) : D = m.getMouseInfo(w), A((P = D) !== null && P !== void 0 ? P : {}, w);
        }
      }), se(m, "handleClick", function(w) {
        var S = m.getMouseInfo(w);
        if (S) {
          var A = W(W({}, S), {}, {
            isTooltipActive: !0
          });
          m.setState(A), m.triggerSyncEvent(A);
          var P = m.props.onClick;
          ue(P) && P(A, w);
        }
      }), se(m, "handleMouseDown", function(w) {
        var S = m.props.onMouseDown;
        if (ue(S)) {
          var A = m.getMouseInfo(w);
          S(A, w);
        }
      }), se(m, "handleMouseUp", function(w) {
        var S = m.props.onMouseUp;
        if (ue(S)) {
          var A = m.getMouseInfo(w);
          S(A, w);
        }
      }), se(m, "handleTouchMove", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(w.changedTouches[0]);
      }), se(m, "handleTouchStart", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.handleMouseDown(w.changedTouches[0]);
      }), se(m, "handleTouchEnd", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.handleMouseUp(w.changedTouches[0]);
      }), se(m, "handleDoubleClick", function(w) {
        var S = m.props.onDoubleClick;
        if (ue(S)) {
          var A = m.getMouseInfo(w);
          S(A, w);
        }
      }), se(m, "handleContextMenu", function(w) {
        var S = m.props.onContextMenu;
        if (ue(S)) {
          var A = m.getMouseInfo(w);
          S(A, w);
        }
      }), se(m, "triggerSyncEvent", function(w) {
        m.props.syncId !== void 0 && Od.emit(Sd, m.props.syncId, w, m.eventEmitterSymbol);
      }), se(m, "applySyncEvent", function(w) {
        var S = m.props, A = S.layout, P = S.syncMethod, D = m.state.updateId, T = w.dataStartIndex, $ = w.dataEndIndex;
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
          var M = w.chartX, j = w.chartY, I = w.activeTooltipIndex, k = m.state, R = k.offset, L = k.tooltipTicks;
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
          }), B = Math.min(M, N.x + N.width), q = Math.min(j, N.y + N.height), H = L[I] && L[I].value, X = rh(m.state, m.props.data, I), ee = L[I] ? {
            x: A === "horizontal" ? L[I].coordinate : B,
            y: A === "horizontal" ? q : L[I].coordinate
          } : sP;
          m.setState(W(W({}, w), {}, {
            activeLabel: H,
            activeCoordinate: ee,
            activePayload: X,
            activeTooltipIndex: I
          }));
        } else
          m.setState(w);
      }), se(m, "renderCursor", function(w) {
        var S, A = m.state, P = A.isTooltipActive, D = A.activeCoordinate, T = A.activePayload, $ = A.offset, M = A.activeTooltipIndex, j = A.tooltipAxisBandSize, I = m.getTooltipEventType(), k = (S = w.props.active) !== null && S !== void 0 ? S : P, R = m.props.layout, L = w.key || "_recharts-cursor";
        return /* @__PURE__ */ C.createElement(o4, {
          key: L,
          activeCoordinate: D,
          activePayload: T,
          activeTooltipIndex: M,
          chartName: r,
          element: w,
          isActive: k,
          layout: R,
          offset: $,
          tooltipAxisBandSize: j,
          tooltipEventType: I
        });
      }), se(m, "renderPolarAxis", function(w, S, A) {
        var P = gt(w, "type.axisType"), D = gt(m.state, "".concat(P, "Map")), T = w.type.defaultProps, $ = T !== void 0 ? W(W({}, T), w.props) : w.props, M = D && D[$["".concat(P, "Id")]];
        return /* @__PURE__ */ Ue(w, W(W({}, M), {}, {
          className: fe(P, M.className),
          key: w.key || "".concat(S, "-").concat(A),
          ticks: ir(M, !0)
        }));
      }), se(m, "renderPolarGrid", function(w) {
        var S = w.props, A = S.radialLines, P = S.polarAngles, D = S.polarRadius, T = m.state, $ = T.radiusAxisMap, M = T.angleAxisMap, j = xr($), I = xr(M), k = I.cx, R = I.cy, L = I.innerRadius, z = I.outerRadius;
        return /* @__PURE__ */ Ue(w, {
          polarAngles: Array.isArray(P) ? P : ir(I, !0).map(function(N) {
            return N.coordinate;
          }),
          polarRadius: Array.isArray(D) ? D : ir(j, !0).map(function(N) {
            return N.coordinate;
          }),
          cx: k,
          cy: R,
          innerRadius: L,
          outerRadius: z,
          key: w.key || "polar-grid",
          radialLines: A
        });
      }), se(m, "renderLegend", function() {
        var w = m.state.formattedGraphicalItems, S = m.props, A = S.children, P = S.width, D = S.height, T = m.props.margin || {}, $ = P - (T.left || 0) - (T.right || 0), M = R_({
          children: A,
          formattedGraphicalItems: w,
          legendWidth: $,
          legendContent: c
        });
        if (!M)
          return null;
        var j = M.item, I = h1(M, s4);
        return /* @__PURE__ */ Ue(j, W(W({}, I), {}, {
          chartWidth: P,
          chartHeight: D,
          margin: T,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), se(m, "renderTooltip", function() {
        var w, S = m.props, A = S.children, P = S.accessibilityLayer, D = vt(A, Ut);
        if (!D)
          return null;
        var T = m.state, $ = T.isTooltipActive, M = T.activeCoordinate, j = T.activePayload, I = T.activeLabel, k = T.offset, R = (w = D.props.active) !== null && w !== void 0 ? w : $;
        return /* @__PURE__ */ Ue(D, {
          viewBox: W(W({}, k), {}, {
            x: k.left,
            y: k.top
          }),
          active: R,
          label: I,
          payload: R ? j : [],
          coordinate: M,
          accessibilityLayer: P
        });
      }), se(m, "renderBrush", function(w) {
        var S = m.props, A = S.margin, P = S.data, D = m.state, T = D.offset, $ = D.dataStartIndex, M = D.dataEndIndex, j = D.updateId;
        return /* @__PURE__ */ Ue(w, {
          key: w.key || "_recharts-brush",
          onChange: co(m.handleBrushChange, w.props.onChange),
          data: P,
          x: G(w.props.x) ? w.props.x : T.left,
          y: G(w.props.y) ? w.props.y : T.top + T.height + T.brushBottom - (A.bottom || 0),
          width: G(w.props.width) ? w.props.width : T.width,
          startIndex: $,
          endIndex: M,
          updateId: "brush-".concat(j)
        });
      }), se(m, "renderReferenceElement", function(w, S, A) {
        if (!w)
          return null;
        var P = m, D = P.clipPathId, T = m.state, $ = T.xAxisMap, M = T.yAxisMap, j = T.offset, I = w.type.defaultProps || {}, k = w.props, R = k.xAxisId, L = R === void 0 ? I.xAxisId : R, z = k.yAxisId, N = z === void 0 ? I.yAxisId : z;
        return /* @__PURE__ */ Ue(w, {
          key: w.key || "".concat(S, "-").concat(A),
          xAxis: $[L],
          yAxis: M[N],
          viewBox: {
            x: j.left,
            y: j.top,
            width: j.width,
            height: j.height
          },
          clipPathId: D
        });
      }), se(m, "renderActivePoints", function(w) {
        var S = w.item, A = w.activePoint, P = w.basePoint, D = w.childIndex, T = w.isRange, $ = [], M = S.props.key, j = S.item.type.defaultProps !== void 0 ? W(W({}, S.item.type.defaultProps), S.item.props) : S.item.props, I = j.activeDot, k = j.dataKey, R = W(W({
          index: D,
          dataKey: k,
          cx: A.x,
          cy: A.y,
          r: 4,
          fill: vv(S.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: A.payload,
          value: A.value
        }, ie(I, !1)), So(I));
        return $.push(b.renderActiveDot(I, R, "".concat(M, "-activePoint-").concat(D))), P ? $.push(b.renderActiveDot(I, W(W({}, R), {}, {
          cx: P.x,
          cy: P.y
        }), "".concat(M, "-basePoint-").concat(D))) : T && $.push(null), $;
      }), se(m, "renderGraphicChild", function(w, S, A) {
        var P = m.filterFormatItem(w, S, A);
        if (!P)
          return null;
        var D = m.getTooltipEventType(), T = m.state, $ = T.isTooltipActive, M = T.tooltipAxis, j = T.activeTooltipIndex, I = T.activeLabel, k = m.props.children, R = vt(k, Ut), L = P.props, z = L.points, N = L.isRange, B = L.baseLine, q = P.item.type.defaultProps !== void 0 ? W(W({}, P.item.type.defaultProps), P.item.props) : P.item.props, H = q.activeDot, X = q.hide, ee = q.activeBar, ne = q.activeShape, Q = !!(!X && $ && R && (H || ee || ne)), J = {};
        D !== "axis" && R && R.props.trigger === "click" ? J = {
          onClick: co(m.handleItemMouseEnter, w.props.onClick)
        } : D !== "axis" && (J = {
          onMouseLeave: co(m.handleItemMouseLeave, w.props.onMouseLeave),
          onMouseEnter: co(m.handleItemMouseEnter, w.props.onMouseEnter)
        });
        var U = /* @__PURE__ */ Ue(w, W(W({}, P.props), J));
        function V(qe) {
          return typeof M.dataKey == "function" ? M.dataKey(qe.payload) : null;
        }
        if (Q)
          if (j >= 0) {
            var Z, E;
            if (M.dataKey && !M.allowDuplicatedCategory) {
              var Y = typeof M.dataKey == "function" ? V : "payload.".concat(M.dataKey.toString());
              Z = Oo(z, Y, I), E = N && B && Oo(B, Y, I);
            } else
              Z = z?.[j], E = N && B && B[j];
            if (ne || ee) {
              var F = w.props.activeIndex !== void 0 ? w.props.activeIndex : j;
              return [/* @__PURE__ */ Ue(w, W(W(W({}, P.props), J), {}, {
                activeIndex: F
              })), null, null];
            }
            if (!le(Z))
              return [U].concat(ea(m.renderActivePoints({
                item: P,
                activePoint: Z,
                basePoint: E,
                childIndex: j,
                isRange: N
              })));
          } else {
            var ae, ce = (ae = m.getItemByXY(m.state.activeCoordinate)) !== null && ae !== void 0 ? ae : {
              graphicalItem: U
            }, oe = ce.graphicalItem, Se = oe.item, Te = Se === void 0 ? w : Se, me = oe.childIndex, ye = W(W(W({}, P.props), J), {}, {
              activeIndex: me
            });
            return [/* @__PURE__ */ Ue(Te, ye), null, null];
          }
        return N ? [U, null, null] : [U, null];
      }), se(m, "renderCustomized", function(w, S, A) {
        return /* @__PURE__ */ Ue(w, W(W({
          key: "recharts-customized-".concat(A)
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
      }), m.clipPathId = "".concat((x = g.id) !== null && x !== void 0 ? x : on("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = NS(m.triggeredAfterMouseMove, (O = g.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), m.state = {}, m;
    }
    return b4(b, v), v4(b, [{
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
        var x = this.props, O = x.children, m = x.data, w = x.height, S = x.layout, A = vt(O, Ut);
        if (A) {
          var P = A.props.defaultIndex;
          if (!(typeof P != "number" || P < 0 || P > this.state.tooltipTicks.length - 1)) {
            var D = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value, T = rh(this.state, m, P, D), $ = this.state.tooltipTicks[P].coordinate, M = (this.state.offset.top + w) / 2, j = S === "horizontal", I = j ? {
              x: $,
              y: M
            } : {
              y: $,
              x: M
            }, k = this.state.formattedGraphicalItems.find(function(L) {
              var z = L.item;
              return z.type.name === "Scatter";
            });
            k && (I = W(W({}, I), k.props.points[P].tooltipPosition), T = k.props.points[P].tooltipPayload);
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
        Rd([vt(x.children, Ut)], [vt(this.props.children, Ut)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var x = vt(this.props.children, Ut);
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
        var O = this.container, m = O.getBoundingClientRect(), w = $D(m), S = {
          chartX: Math.round(x.pageX - w.left),
          chartY: Math.round(x.pageY - w.top)
        }, A = m.width / O.offsetWidth || 1, P = this.inRange(S.chartX, S.chartY, A);
        if (!P)
          return null;
        var D = this.state, T = D.xAxisMap, $ = D.yAxisMap, M = this.getTooltipEventType();
        if (M !== "axis" && T && $) {
          var j = xr(T).scale, I = xr($).scale, k = j && j.invert ? j.invert(S.chartX) : null, R = I && I.invert ? I.invert(S.chartY) : null;
          return W(W({}, S), {}, {
            xValue: k,
            yValue: R
          });
        }
        var L = y1(this.state, this.props.data, this.props.layout, P);
        return L ? W(W({}, S), L) : null;
      }
    }, {
      key: "inRange",
      value: function(x, O) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, w = this.props.layout, S = x / m, A = O / m;
        if (w === "horizontal" || w === "vertical") {
          var P = this.state.offset, D = S >= P.left && S <= P.left + P.width && A >= P.top && A <= P.top + P.height;
          return D ? {
            x: S,
            y: A
          } : null;
        }
        var T = this.state, $ = T.angleAxisMap, M = T.radiusAxisMap;
        if ($ && M) {
          var j = xr($);
          return cx({
            x: S,
            y: A
          }, j);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var x = this.props.children, O = this.getTooltipEventType(), m = vt(x, Ut), w = {};
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
        var S = So(this.props, this.handleOuterEvent);
        return W(W({}, S), w);
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
        for (var w = this.state.formattedGraphicalItems, S = 0, A = w.length; S < A; S++) {
          var P = w[S];
          if (P.item === x || P.props.key === x.key || O === or(P.item.type) && m === P.childIndex)
            return P;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var x = this.clipPathId, O = this.state.offset, m = O.left, w = O.top, S = O.height, A = O.width;
        return /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
          id: x
        }, /* @__PURE__ */ C.createElement("rect", {
          x: m,
          y: w,
          height: S,
          width: A
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var x = this.state.xAxisMap;
        return x ? Object.entries(x).reduce(function(O, m) {
          var w = p1(m, 2), S = w[0], A = w[1];
          return W(W({}, O), {}, se({}, S, A.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var x = this.state.yAxisMap;
        return x ? Object.entries(x).reduce(function(O, m) {
          var w = p1(m, 2), S = w[0], A = w[1];
          return W(W({}, O), {}, se({}, S, A.scale));
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
          for (var S = 0, A = m.length; S < A; S++) {
            var P = m[S], D = P.props, T = P.item, $ = T.type.defaultProps !== void 0 ? W(W({}, T.type.defaultProps), T.props) : T.props, M = or(T.type);
            if (M === "Bar") {
              var j = (D.data || []).find(function(L) {
                return JB(x, L);
              });
              if (j)
                return {
                  graphicalItem: P,
                  payload: j
                };
            } else if (M === "RadialBar") {
              var I = (D.data || []).find(function(L) {
                return cx(x, L);
              });
              if (I)
                return {
                  graphicalItem: P,
                  payload: I
                };
            } else if (eu(P, w) || tu(P, w) || _i(P, w)) {
              var k = w3({
                graphicalItem: P,
                activeTooltipItem: w,
                itemData: $.data
              }), R = $.activeIndex === void 0 ? k : $.activeIndex;
              return {
                graphicalItem: W(W({}, P), {}, {
                  childIndex: R
                }),
                payload: _i(P, w) ? $.data[k] : P.props.data[k]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var x = this;
        if (!yg(this))
          return null;
        var O = this.props, m = O.children, w = O.className, S = O.width, A = O.height, P = O.style, D = O.compact, T = O.title, $ = O.desc, M = h1(O, u4), j = ie(M, !1);
        if (D)
          return /* @__PURE__ */ C.createElement(Kw, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ C.createElement(qd, Sn({}, j, {
            width: S,
            height: A,
            title: T,
            desc: $
          }), this.renderClipPath(), gg(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var I, k;
          j.tabIndex = (I = this.props.tabIndex) !== null && I !== void 0 ? I : 0, j.role = (k = this.props.role) !== null && k !== void 0 ? k : "application", j.onKeyDown = function(L) {
            x.accessibilityManager.keyboardEvent(L);
          }, j.onFocus = function() {
            x.accessibilityManager.focus();
          };
        }
        var R = this.parseEventsOfWrapper();
        return /* @__PURE__ */ C.createElement(Kw, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ C.createElement("div", Sn({
          className: fe("recharts-wrapper", w),
          style: W({
            position: "relative",
            cursor: "default",
            width: S,
            height: A
          }, P)
        }, R, {
          ref: function(z) {
            x.container = z;
          }
        }), /* @__PURE__ */ C.createElement(qd, Sn({}, j, {
          width: S,
          height: A,
          title: T,
          desc: $,
          style: A4
        }), this.renderClipPath(), gg(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(Y1);
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
    var g = v.dataKey, x = v.data, O = v.children, m = v.width, w = v.height, S = v.layout, A = v.stackOffset, P = v.margin, D = b.dataStartIndex, T = b.dataEndIndex;
    if (b.updateId === void 0) {
      var $ = m1(v);
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
        prevLayout: S,
        prevStackOffset: A,
        prevMargin: P,
        prevChildren: O
      });
    }
    if (g !== b.prevDataKey || x !== b.prevData || m !== b.prevWidth || w !== b.prevHeight || S !== b.prevLayout || A !== b.prevStackOffset || !_n(P, b.prevMargin)) {
      var M = m1(v), j = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, I = W(W({}, y1(b, x, S)), {}, {
        updateId: b.updateId + 1
      }), k = W(W(W({}, M), j), I);
      return W(W(W({}, k), p(W({
        props: v
      }, k), b)), {}, {
        prevDataKey: g,
        prevData: x,
        prevWidth: m,
        prevHeight: w,
        prevLayout: S,
        prevStackOffset: A,
        prevMargin: P,
        prevChildren: O
      });
    }
    if (!Rd(O, b.prevChildren)) {
      var R, L, z, N, B = vt(O, zn), q = B && (R = (L = B.props) === null || L === void 0 ? void 0 : L.startIndex) !== null && R !== void 0 ? R : D, H = B && (z = (N = B.props) === null || N === void 0 ? void 0 : N.endIndex) !== null && z !== void 0 ? z : T, X = q !== D || H !== T, ee = !le(x), ne = ee && !X ? b.updateId : b.updateId + 1;
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
    return /* @__PURE__ */ Nt(v) ? x = /* @__PURE__ */ Ue(v, b) : ue(v) ? x = v(b) : x = /* @__PURE__ */ C.createElement(Ki, b), /* @__PURE__ */ C.createElement(de, {
      className: "recharts-active-dot",
      key: g
    }, x);
  });
  var h = /* @__PURE__ */ ze(function(b, g) {
    return /* @__PURE__ */ C.createElement(y, Sn({}, b, {
      ref: g
    }));
  });
  return h.displayName = y.displayName, h;
}, k4 = uu({
  chartName: "LineChart",
  GraphicalChild: Gi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: vr
  }, {
    axisType: "yAxis",
    AxisComp: yr
  }],
  formatAxisMap: gv
}), cP = uu({
  chartName: "BarChart",
  GraphicalChild: Mr,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: vr
  }, {
    axisType: "yAxis",
    AxisComp: yr
  }],
  formatAxisMap: gv
}), N4 = uu({
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
  formatAxisMap: uL,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), R4 = uu({
  chartName: "AreaChart",
  GraphicalChild: $r,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: vr
  }, {
    axisType: "yAxis",
    AxisComp: yr
  }],
  formatAxisMap: gv
});
const L4 = fh({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), q4 = {
  light: "",
  dark: ".dark"
}, lP = pe.createContext(null);
function fP() {
  const e = pe.useContext(lP);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const B4 = ({ id: e, className: t, children: r, aspect: n, config: a, ...i }, o) => {
  const s = pe.useId(), u = `chart-${e || s.replace(/:/g, "")}`, c = pe.useRef(null), [l, f] = he(), d = Ze(() => new ResizeObserver((p) => f(p[0].contentRect.height)), []);
  return V1(() => {
    const p = o && "current" in o ? o.current : c.current;
    return p && d.observe(p.parentElement), () => {
      d.disconnect();
    };
  }, [d, o, c]), _(lP.Provider, {
    value: {
      config: a
    },
    children: K("div", {
      "data-chromatic": "ignore",
      "data-chart": u,
      ref: o || c,
      className: te("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", n ? L4({
        aspect: n
      }) : "aspect-auto h-full", t),
      ...i,
      children: [_(F4, {
        id: u,
        config: a
      }), _(AD, {
        height: l,
        className: "overflow-visible",
        children: r
      })]
    })
  });
}, la = pe.forwardRef(B4);
la.displayName = "Chart";
const F4 = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([a, i]) => i.theme || i.color);
  if (!r.length)
    return null;
  const n = Object.entries(q4).map(([a, i]) => `
${i} [data-chart=${e}] {
${r.map(([o, s]) => {
    const u = s.theme?.[a] || s.color;
    return u ? `  --color-${o}: ${u};` : null;
  }).join(`
`)}
}
`);
  return _("style", {
    dangerouslySetInnerHTML: {
      __html: IT.sanitize(n.join(`
`))
    }
  });
}, Yi = Ut, fa = pe.forwardRef(({ active: e, payload: t, className: r, indicator: n = "dot", hideLabel: a = !1, hideIndicator: i = !1, label: o, labelFormatter: s, labelClassName: u, formatter: c, yAxisFormatter: l, color: f, nameKey: d, labelKey: p }, y) => {
  const { config: h } = fP(), v = pe.useMemo(() => {
    if (a || !t?.length)
      return null;
    const [g] = t, x = `${p || g.dataKey || g.name || "value"}`, O = nh(h, g, x), m = !p && typeof o == "string" ? h[o]?.label || o : O?.label;
    return s ? _("div", {
      className: te("font-medium", u),
      children: s(m, t)
    }) : m ? _("div", {
      className: te("font-medium", u),
      children: m
    }) : null;
  }, [o, s, t, a, u, h, p]);
  if (!e || !t?.length)
    return null;
  const b = t.length === 1 && n !== "dot";
  return K("div", {
    ref: y,
    className: te("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary px-3 py-2.5 text-base shadow-lg backdrop-blur", r),
    children: [b ? null : v, _("div", {
      className: "grid gap-2",
      children: t.map((g, x) => {
        const O = `${d || g.name || g.dataKey || "value"}`, m = nh(h, g, O), w = f || g.payload.fill || g.color;
        return _("div", {
          className: te("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", n === "dot" && "items-center"),
          children: c && g?.value !== void 0 && g.name ? c(g.value, g.name, g, x, g.payload) : K(lt, {
            children: [m?.icon ? _(m.icon, {}) : !i && _("div", {
              className: te("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
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
              className: te("flex flex-1 justify-between text-sm leading-none", b ? "items-end" : "items-center"),
              children: [K("div", {
                className: "grid gap-2",
                children: [b ? v : null, _("span", {
                  className: "pr-2 text-f1-foreground",
                  children: m?.label || g.name
                })]
              }), g.value && _("span", {
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
fa.displayName = "ChartTooltip";
const Ev = Vr, cu = pe.forwardRef(({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: a, hiddenKey: i, leftShift: o = 0 }, s) => {
  const { config: u } = fP();
  return r?.length ? _("div", {
    ref: s,
    className: te("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", n === "top" ? "pb-2" : "pt-2", e),
    style: {
      marginLeft: o
    },
    children: r.map((c) => {
      const l = `${a || c.dataKey || "value"}`, f = nh(u, c, l, i);
      return K("div", {
        className: te("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"),
        children: [f?.icon && !t ? _(f.icon, {}) : f && _("div", {
          className: "h-2 w-2 shrink-0 rounded-full",
          style: {
            backgroundColor: c.color
          }
        }), _("span", {
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
const dP = Ft({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), IU = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = he(e), a = tt(() => {
    n(!0);
  }, []), i = tt(() => n(!1), []), o = tt(() => n((s) => !s), []);
  return _(dP.Provider, {
    value: {
      enable: a,
      disable: i,
      toggle: o,
      enabled: r
    },
    children: t
  });
}, z4 = () => {
  const e = ft(dP);
  if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
}, qt = (e, t) => {
  const r = ["categorical-1", "categorical-2", "categorical-3", "categorical-4", "categorical-5", "categorical-6", "categorical-7", "categorical-8"];
  return Tt(r[e % r.length], t);
}, Tt = (e, t) => {
  const r = t !== void 0 ? ` / ${t}` : "";
  return `hsl(var(--${`chart-${e}`})${r})`;
};
function Xi(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const Cv = (e) => ({
  dataKey: "x",
  domain: e?.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), jv = (e) => ({
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
function da(e) {
  return ze(e);
}
function Mv(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const W4 = ({ index: e, visibleTicksCount: t, payload: r, tickFormatter: n, ...a }) => {
  const i = e === 0, o = e === t - 1;
  return _(Ar, {
    ...a,
    textAnchor: i ? "start" : o ? "end" : "middle",
    children: n?.(r.value, r.index) ?? r.value
  });
}, U4 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n, canBeBlurred: a, blurArea: i, lineType: o = "monotoneX", aspect: s, marginTop: u = 0 }, c) => {
  const { enabled: l } = z4(), f = Object.keys(t), d = Wj(12), p = Mv(e), y = Math.max(...p.flatMap((x) => f.map((O) => Xi(n?.tickFormatter ? n.tickFormatter(`${x[O]}`) : `${x[O]}`)))), h = n?.width ?? y + 20, v = !n?.hide, b = !r?.hide, g = !a || !l;
  return _(la, {
    config: t,
    ref: c,
    aspect: s,
    children: K(R4, {
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
          children: [(i === "l" || i === "lr") && K(lt, {
            children: [_("stop", {
              offset: "0%",
              stopColor: "black",
              stopOpacity: "0"
            }), _("stop", {
              offset: "1%",
              stopColor: "white",
              stopOpacity: "0.1"
            }), _("stop", {
              offset: "7%",
              stopColor: "white",
              stopOpacity: "1"
            })]
          }), (i === "r" || i === "lr") && K(lt, {
            children: [_("stop", {
              offset: "93%",
              stopColor: "white",
              stopOpacity: "1"
            }), _("stop", {
              offset: "99%",
              stopColor: "white",
              stopOpacity: "0.1"
            }), _("stop", {
              offset: "100%",
              stopColor: "black",
              stopOpacity: "0"
            })]
          }), !i && K(lt, {
            children: [_("stop", {
              offset: "0%",
              stopColor: "white",
              stopOpacity: "1"
            }), _("stop", {
              offset: "100%",
              stopColor: "white",
              stopOpacity: "1"
            })]
          })]
        }), _("mask", {
          id: `${d}-transparent-edges`,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse",
          children: _("rect", {
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
          children: [_("stop", {
            offset: "5%",
            stopColor: t[x].color ? Tt(t[x].color) : qt(O),
            stopOpacity: 0.8
          }), _("stop", {
            offset: "95%",
            stopColor: t[x].color ? Tt(t[x].color) : qt(O),
            stopOpacity: 0.1
          })]
        }, O))]
      }), _(Vi, {
        ...lu(),
        mask: `url(#${d}-transparent-edges)`
      }), b && _(vr, {
        dataKey: "x",
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: r?.tickFormatter,
        ticks: r?.ticks,
        domain: r?.domain,
        interval: 0,
        tick: W4
      }), v && _(yr, {
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickCount: n?.tickCount,
        tickFormatter: a && l ? () => "**" : n?.tickFormatter,
        ticks: n?.ticks,
        domain: n?.domain,
        width: h
      }), g && _(Yi, {
        ...fu(),
        content: _(fa, {
          indicator: "dot",
          yAxisFormatter: n?.tickFormatter
        })
      }), f.map((x, O) => _($r, {
        isAnimationActive: !1,
        dataKey: x,
        type: o,
        mask: `url(#${d}-transparent-edges)`,
        fill: `url(#fill${x}-${d})`,
        fillOpacity: t[x].dashed ? 0 : 0.4,
        stroke: t[x].color ? Tt(t[x].color) : qt(O),
        strokeWidth: 1.5,
        strokeDasharray: t[x].dashed ? "4 4" : void 0
      }, x)), Object.keys(t).length > 1 && _(Ev, {
        className: "flex justify-start",
        content: _(cu, {})
      })]
    })
  });
}, DU = da(U4), H4 = ({ dataConfig: e, data: t, xAxis: r, yAxis: n = {
  hide: !0
}, label: a = !1, type: i = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: u, legend: c, showValueUnderLabel: l = !1, highlightLastBar: f = !1, onClick: d }, p) => {
  const y = Object.keys(e), h = Mv(t).map((b, g, x) => f && y.length === 1 && !e[y[0]]?.color ? {
    ...b,
    fill: g === x.length - 1 ? qt(g) : qt(g, 0.5)
  } : b), v = Math.max(...h.flatMap((b) => y.map((g) => Xi(n?.tickFormatter ? n.tickFormatter(`${b[g]}`) : `${b[g]}`))));
  return _(la, {
    config: e,
    ref: p,
    aspect: u,
    children: K(cP, {
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
      children: [!o && _(Yi, {
        ...fu(),
        content: _(fa, {
          yAxisFormatter: n.tickFormatter
        })
      }), !s && _(Vi, {
        ...lu()
      }), _(yr, {
        ...jv(n),
        tick: !0,
        width: n.width ?? v + 20,
        hide: n.hide
      }), _(vr, {
        ...Cv(r),
        hide: r?.hide,
        tick: l ? (b) => {
          const { x: g, y: x, payload: O } = b, m = t.find((A) => A.label === O.value)?.values || "", w = Object.keys(m).length === 1 ? Object.values(m)?.[0] : void 0, S = w !== void 0 && n.tickFormatter ? n.tickFormatter(`${w}`) : w.toLocaleString();
          return K("g", {
            transform: `translate(${g},${x})`,
            children: [_("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: O.value
            }), !!w && _("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: S
            })]
          });
        } : void 0
      }), y.map((b, g) => _(Mr, {
        isAnimationActive: !1,
        dataKey: b,
        stackId: i === "stacked" || i === "stacked-by-sign" ? "stack" : void 0,
        fill: f ? (x) => x.fill : e[b].color ? Tt(e[b].color) : qt(g),
        radius: i === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
        maxBarSize: 32,
        children: a && _(Pt, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${b}`)
      }, `bar-${b}`)), c && _(Ev, {
        content: _(cu, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, kU = da(H4), K4 = ({ data: e, legend: t = !0, hideTooltip: r = !1 }, n) => {
  const a = e.reduce((i, o) => i + o.value, 0);
  return K(eO, {
    children: [_("div", {
      className: "w-full",
      ref: n,
      children: _("div", {
        className: "flex h-2 gap-1 overflow-hidden",
        children: e.map((i, o) => {
          const s = i.value / a * 100, u = i.color ? Tt(i.color) : qt(o), c = (l) => {
            const f = l / a * 100;
            return f % 1 === 0 ? f.toFixed(0) : f.toFixed(1);
          };
          return s === 0 ? null : K(tO, {
            children: [_(rO, {
              className: "h-full cursor-default overflow-hidden rounded-2xs",
              style: {
                width: `${s}%`
              },
              title: i.name,
              asChild: !0,
              children: _("div", {
                className: "h-full w-full",
                style: {
                  backgroundColor: u
                },
                role: "img",
                title: i.name,
                tabIndex: 0
              })
            }), !r && K(nO, {
              className: "flex items-center gap-1 text-sm",
              children: [_("div", {
                className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
                style: {
                  backgroundColor: u
                }
              }), _("span", {
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
    }), t && _("div", {
      className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
      role: "list",
      children: e.map((i, o) => {
        const s = i.color ? Tt(i.color) : qt(o);
        return K("div", {
          className: "flex items-center gap-1.5",
          role: "listitem",
          children: [_("div", {
            className: "h-2 w-2 shrink-0 rounded-full",
            style: {
              backgroundColor: s
            }
          }), _("span", {
            className: "text-f1-foreground",
            children: i.name
          })]
        }, i.name);
      })
    })]
  });
}, NU = da(K4), V4 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n = {
  hide: !0
}, lineType: a = "natural", aspect: i, hideTooltip: o = !1, hideGrid: s = !1 }, u) => {
  const c = Object.keys(t), l = Mv(e), f = Math.max(...l.flatMap((d) => c.map((p) => Xi(n?.tickFormatter ? n.tickFormatter(`${d[p]}`) : `${d[p]}`))));
  return _(la, {
    config: t,
    ref: u,
    aspect: i,
    children: K(k4, {
      accessibilityLayer: !0,
      data: l,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12
      },
      children: [!s && _(Vi, {
        ...lu()
      }), !r?.hide && _(vr, {
        ...Cv(r)
      }), !n?.hide && _(yr, {
        ...jv(n),
        width: n.width ?? f + 20
      }), !o && _(Yi, {
        ...fu(),
        content: _(fa, {
          yAxisFormatter: n?.tickFormatter
        })
      }), c.map((d, p) => _(Gi, {
        dataKey: d,
        isAnimationActive: !1,
        type: a,
        stroke: t[d].color ? Tt(t[d].color) : qt(p),
        strokeWidth: 1.5,
        strokeDasharray: t[d].dashed ? "4 4" : void 0,
        dot: !1
      }, d))]
    })
  });
}, RU = da(V4), G4 = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: a }, i) => {
  const o = e.map((c, l) => ({
    ...c,
    fill: t[c.label]?.color ? Tt(t[c.label].color) : qt(l)
  })), u = e.map((c) => c.value).reduce((c, l) => c + l);
  return u === 0 && o.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), _(la, {
    config: t,
    ref: i,
    aspect: n,
    "data-chromatic": "ignore",
    style: {
      height: 380
    },
    children: K(N4, {
      accessibilityLayer: !0,
      margin: {
        left: 0,
        right: 0
      },
      children: [u !== 0 && _(Yi, {
        isAnimationActive: !1,
        content: _(fa, {
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
          return _(qs, {
            fill: c.fill,
            "aria-label": `${c.label}: ${f} (${(c.value / u * 100).toFixed(0)}%)`
          }, `cell-${l}`);
        }), _(Ke, {
          content: ({ viewBox: c }) => {
            if (c && "cx" in c && "cy" in c)
              return K("text", {
                x: c.cx,
                y: c.cy,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: [_("tspan", {
                  x: c.cx,
                  y: (c.cy || 0) + 8,
                  className: "fill-f1-foreground text-4xl font-semibold",
                  children: r?.number ? a ? a(String(r.number)) : r.number : null
                }), _("tspan", {
                  x: c.cx,
                  y: (c.cy || 0) - 16,
                  className: "fill-f1-foreground-secondary",
                  children: r?.label
                })]
              });
          }
        })]
      }), _(Ev, {
        content: _(cu, {
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
}, LU = da(G4);
var $v = "Progress", Iv = 100, [Y4] = DT($v), [X4, Z4] = Y4($v), pP = pe.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: a,
      getValueLabel: i = J4,
      ...o
    } = e;
    (a || a === 0) && !b1(a) && console.error(Q4(`${a}`, "Progress"));
    const s = b1(a) ? a : Iv;
    n !== null && !x1(n, s) && console.error(eW(`${n}`, "Progress"));
    const u = x1(n, s) ? n : null, c = Ss(u) ? i(u, s) : void 0;
    return /* @__PURE__ */ _(X4, { scope: r, value: u, max: s, children: /* @__PURE__ */ _(
      ph.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": Ss(u) ? u : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": yP(u, s),
        "data-value": u ?? void 0,
        "data-max": s,
        ...o,
        ref: t
      }
    ) });
  }
);
pP.displayName = $v;
var hP = "ProgressIndicator", vP = pe.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, a = Z4(hP, r);
    return /* @__PURE__ */ _(
      ph.div,
      {
        "data-state": yP(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...n,
        ref: t
      }
    );
  }
);
vP.displayName = hP;
function J4(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function yP(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ss(e) {
  return typeof e == "number";
}
function b1(e) {
  return Ss(e) && !isNaN(e) && e > 0;
}
function x1(e, t) {
  return Ss(e) && !isNaN(e) && e <= t && e >= 0;
}
function Q4(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Iv}\`.`;
}
function eW(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Iv} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var mP = pP, tW = vP;
const gP = pe.forwardRef(({ className: e, value: t, ...r }, n) => _(mP, {
  ref: n,
  value: t,
  className: te("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: _(tW, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
gP.displayName = mP.displayName;
function rW(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const nW = (e) => {
  const t = kT.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((a) => {
    delete a.x, Object.entries(a).forEach(([i, o]) => {
      n < o && (n = o, r = i);
    });
  }), r;
}, aW = ({ dataConfig: e, data: t, xAxis: r = {
  hide: !0
}, yAxis: n, label: a = !1, aspect: i, hideTooltip: o = !1, hideGrid: s = !1, showRatio: u = !1, valueFormatter: c }, l) => {
  const f = Object.keys(e), d = rW(t), p = Math.max(...d.map((b) => Xi(`${b.x}`))), y = f.reduce((b, g) => (b[g] = t.reduce((x, O) => x + O.values[g], 0), b), {}), h = {
    ...Cv(r),
    type: "number",
    dataKey: nW(d)
  }, v = {
    ...jv(n),
    type: "category",
    dataKey: "x"
  };
  return _(la, {
    config: e,
    ref: l,
    aspect: i,
    children: K(cP, {
      layout: "vertical",
      accessibilityLayer: !0,
      data: d,
      margin: {
        left: n && !n.hide ? 8 : 12,
        right: a || u ? 100 : 0
      },
      children: [!o && _(Yi, {
        ...fu(!0),
        content: _(fa, {
          yAxisFormatter: n?.tickFormatter
        })
      }), !s && _(Vi, {
        ...lu(),
        vertical: !0,
        horizontal: !1
      }), _(vr, {
        ...h,
        hide: r?.hide
      }), _(yr, {
        ...v,
        hide: n?.hide,
        width: n?.width ?? p + 20
      }), f.map((b, g) => _(lt, {
        children: _(Mr, {
          isAnimationActive: !1,
          layout: "vertical",
          dataKey: b,
          fill: e[b].color ? Tt(e[b].color) : qt(g),
          radius: 4,
          maxBarSize: 24,
          children: (a || u) && _(Pt, {
            position: "right",
            offset: 10,
            className: "fill-f1-foreground",
            fontSize: 12,
            formatter: c,
            content: u ? _(iW, {
              valueFormatter: c,
              total: y[b],
              showLabel: a
            }) : void 0
          }, `label-{${b}}`)
        }, `bar-${b}`)
      }))]
    })
  });
}, qU = da(aW), iW = ({ viewBox: e, offset: t = 0, value: r, valueFormatter: n, total: a, showLabel: i }) => {
  const { x: o = 0, y: s = 0, width: u = 0, height: c = 0 } = e, l = o + u + t, f = s + c / 2, d = n ? n(r) : r, p = Xi(`${d}`), y = a > 0 ? Math.round(Number(r) / a * 100) : 0;
  return K("g", {
    transform: `translate(${l},${f + 4})`,
    children: [i && _("text", {
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
typeof e == "object" && "value_x100" in e && (e.value_x100 === void 0 || e.value_x100 === null), ih = (e) => "value" in e ? e.value : e.value_x100 !== void 0 && e.value_x100 !== null ? e.value_x100 / 100 : void 0, w1 = (e, t = {}) => {
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
}, oW = (e) => e == null ? {
  value: void 0
} : typeof e == "number" ? { value: e } : e, sW = (e, t) => {
  if (e == null)
    return {
      numericValue: { value: void 0 },
      formatter: t?.formatter || w1,
      formatterOptions: t?.formatterOptions || {}
    };
  const r = {
    formatter: t?.formatter || w1,
    formatterOptions: t?.formatterOptions || {}
  };
  return typeof e == "number" ? { numericValue: { value: e }, ...r } : typeof e == "object" && e !== null && "numericValue" in e ? {
    numericValue: oW(e.numericValue),
    formatter: e.formatter ? e.formatter : r.formatter,
    formatterOptions: {
      ...r.formatterOptions,
      ...e.formatterOptions
    }
  } : { ...r, numericValue: e };
}, uW = () => {
  const { locale: e } = aO();
  return tt(
    (t, r) => sW(t, {
      ...r,
      formatterOptions: {
        locale: e,
        ...r?.formatterOptions
      }
    }),
    [e]
  );
}, cW = {
  "-1": RT,
  1: NT
}, lW = {
  "-1": "negative",
  0: "neutral",
  1: "positive"
}, bP = ze(({ percentage: e, amount: t, invertStatus: r, info: n, hint: a, nullText: i }, o) => {
  const s = uW(), u = s(t, {
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
    h = lW[Math.sign((l ?? 0) * (r ? -1 : 1)).toString()];
    const g = ah(l) ? null : c.formatter({
      ...c.numericValue,
      units: "%",
      unitsPosition: "append"
    }, c.formatterOptions), x = u.formatter(u.numericValue, u.formatterOptions);
    d = [g, x].filter(Boolean).join(" · "), y = `${h} balance`, p = h === "neutral" ? null : _(Et, {
      icon: cW[b],
      size: "sm",
      className: te({
        positive: "text-f1-icon-positive",
        neutral: "text-f1-icon-secondary",
        negative: "text-f1-icon-critical"
      }[h])
    });
  }
  return _(Di, {
    ref: o,
    className: te({
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
bP.displayName = "F0TagBalance";
function fW({ primaryAction: e, secondaryActions: t, compact: r = !1 }) {
  const n = LT("(min-width: 640px)");
  if (!(e || i()))
    return null;
  return K(qT, {
    className: te("flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]", "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4", r && "pt-3"),
    children: [t && _("div", {
      className: "flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit",
      children: Array.isArray(t) ? t.map((o, s) => _(Gt, {
        label: o.label,
        icon: o.icon,
        variant: "outline",
        onClick: o.onClick,
        hideLabel: n && s > 0,
        size: n ? r ? "sm" : "md" : "lg"
      }, s)) : _(iO, {
        href: t.href,
        target: t.target,
        disabled: t.disabled,
        children: t.label
      })
    }), e && _("div", {
      className: "w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center",
      children: _(Gt, {
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
const dW = ({ avatar: e, compact: t = !1 }) => e.type === "emoji" ? _(BT, {
  emoji: e.emoji,
  size: t ? "sm" : "lg"
}) : e.type === "file" ? _(oO, {
  file: e.file,
  size: t ? "sm" : "lg"
}) : e.type === "icon" ? _(FT, {
  icon: e.icon,
  size: t ? "sm" : "lg"
}) : _(ki, {
  avatar: e,
  size: t ? "sm" : "lg"
});
function pW({ avatar: e, overlay: t = !1, compact: r = !1 }) {
  const n = e.type === "person";
  return _("div", {
    className: te("mb-1.5 flex h-fit w-fit", t && !r && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background", t && n && "rounded-full", r && "mb-0"),
    children: _(dW, {
      avatar: e,
      compact: r
    })
  });
}
const hW = {
  info: Z1,
  warning: dh,
  critical: J1,
  positive: _s
}, Dv = ze(({ text: e, level: t }, r) => {
  As(e, {
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
  return _(Di, {
    ref: r,
    className: te("pl-0.5", {
      info: "bg-f1-background-info text-f1-foreground-info",
      warning: "bg-f1-background-warning text-f1-foreground-warning",
      critical: "bg-f1-background-critical text-f1-foreground-critical",
      positive: "bg-f1-background-positive text-f1-foreground-positive"
    }[t]),
    left: _(Et, {
      icon: hW[t],
      size: "md",
      "aria-hidden": !0,
      color: a
    }),
    text: e
  });
});
Dv.displayName = "F0TagAlert";
const vW = (e) => _("div", {
  "data-cell-type": "alert-tag",
  children: _(Dv, {
    level: e.level,
    text: e.label
  })
}), Wt = {
  text: "pt-[2px]",
  avatar: "pt-[2px]",
  avatarList: "pt-[3px]"
};
function xP(e) {
  return typeof e == "object" && e !== null && "placeholder" in e && typeof e.placeholder == "string";
}
function pa(e, t) {
  return xP(e) ? typeof e == "object" && e !== null && t in e ? e[t] === void 0 : !0 : !1;
}
function ha(e, t) {
  if (e !== void 0 && typeof e != "object")
    return e;
  if (!e || typeof e != "object")
    return;
  const n = t in e ? e[t] : void 0, i = xP(e) ? e.placeholder : void 0;
  if (n !== void 0)
    return t === "date" && n !== null && typeof n == "object" && "getTime" in n ? new Date(n.getTime()) : n;
  if (i !== void 0)
    return i;
}
function yW(e) {
  if (O1(e))
    try {
      return e.toLocaleDateString();
    } catch {
      return String(e);
    }
  const t = ha(e, "date");
  if (O1(t))
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
function O1(e) {
  return !!(e instanceof Date || e && typeof e == "object" && ("toLocaleDateString" in e || "getTime" in e));
}
const wP = (e, t) => {
  const r = ha(e, "number"), n = pa(e, "number"), a = {
    unitsPosition: "right",
    units: "",
    ...typeof e == "object" && "number" in e ? e : {
      decimalPlaces: void 0,
      number: r
    }
  };
  return K("div", {
    className: te("flex flex-1 items-center gap-1 text-f1-foreground", t.visualization === "table" && ["justify-end", Wt.text], n && "text-f1-foreground-secondary"),
    children: [a.unitsPosition === "left" && a.units && _(S1, {
      units: a.units
    }), a.decimalPlaces !== void 0 ? a.number?.toFixed(a.decimalPlaces) : a.number?.toString() ?? "", a.unitsPosition === "right" && a.units && _(S1, {
      units: a.units
    })]
  });
}, S1 = ({ units: e }) => _("span", {
  children: e.toString()
}), mW = (e, t) => {
  const r = {
    ...typeof e == "object" && "amount" in e ? e : {
      amount: e
    }
  };
  return wP({
    ...typeof e == "object" && "amount" in e ? e : {},
    number: r.amount,
    decimalPlaces: r.currency?.decimalPlaces,
    units: r.currency?.symbol,
    unitsPosition: r.currency?.symbolPosition
  }, t);
}, gW = (e, t) => {
  const r = e.type ?? "person";
  return _("div", {
    className: te("pointer-events-auto w-full", t.visualization === "table" && Wt.avatarList),
    children: _(zT, {
      type: r,
      avatars: e.avatarList,
      size: "xs",
      max: e.max
    })
  });
}, bW = (e, t) => K("div", {
  className: te("flex items-center gap-2", t.visualization === "table" && Wt.avatar),
  children: [_(ki, {
    avatar: {
      type: "company",
      name: e.name,
      src: e.src
    },
    size: "xs"
  }), _("span", {
    className: "text-f1-foreground",
    children: e.name.toString()
  })]
}), xW = (e, t) => {
  const r = e.label ?? t.i18n.countries[e.code] ?? e.code;
  return K("div", {
    "data-cell-type": "country",
    className: "flex items-center gap-2",
    children: [_(WT, {
      size: "sm",
      flag: e.code,
      "aria-label": r
    }), " ", _(rn, {
      className: "min-w-0 flex-1 text-f1-foreground",
      tag: "span",
      children: r
    })]
  });
}, wW = (e, t) => {
  const r = yW(e), n = pa(e, "date");
  return _("div", {
    className: te("monospace text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
    children: r
  });
};
var BU = {
  md: 900,
  xl: 1440
}, OW = {
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
}, FU = {
  special: {
    highlight: "hsl(var(--accent-50))"
  }
};
const kv = ze(({ text: e, ...t }, r) => {
  As(e, {
    disallowEmpty: !0
  }, {
    componentName: "F0TagDot"
  });
  const n = "color" in t && t.color ? `hsl(${OW[t.color][50]})` : "customColor" in t && t.customColor;
  return n ? _(Di, {
    ref: r,
    className: "border-[1px] border-solid border-f1-border-secondary",
    left: _("div", {
      className: "m-1 aspect-square w-2 rounded-full",
      style: {
        backgroundColor: n
      },
      "aria-hidden": !0
    }),
    text: e
  }) : null;
});
kv.displayName = "F0TagDot";
const SW = (e) => _("div", {
  "data-cell-type": "dot-tag",
  children: _(kv, {
    text: e.label,
    color: e.color
  })
}), _W = (e) => K("div", {
  className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
  "data-cell-type": "file",
  children: [_(oO, {
    file: e
  }), " ", _("span", {
    children: e.name
  })]
}), OP = ({ tooltip: e, children: t }) => e ? _(eO, {
  delayDuration: 100,
  disableHoverableContent: !0,
  children: K(tO, {
    children: [_(rO, {
      asChild: !0,
      className: "pointer-events-auto",
      children: t
    }), _(nO, {
      className: "pointer-events-none max-w-xs",
      children: _("p", {
        className: "font-semibold",
        children: e
      })
    })]
  })
}) : _(lt, {
  children: t
}), SP = (e, t) => _("div", {
  className: te("flex items-center gap-2", t.visualization === "table" && Wt.avatar),
  children: _(OP, {
    tooltip: e.tooltip,
    children: K("div", {
      className: "inline-flex items-center gap-2",
      children: [_(Et, {
        icon: e.icon,
        "aria-label": e.hideLabel ? e.label : void 0
      }), e.hideLabel ? _("span", {
        className: "sr-only",
        children: e.label
      }) : _("span", {
        className: "text-f1-foreground",
        children: e.label
      })]
    })
  })
}), AW = (e) => _(SP, {
  icon: UT,
  label: e.name
}), PW = (e) => typeof e == "object" && e !== null && "lines" in e ? e.lines : void 0, TW = (e) => (typeof e == "object" && e !== null && "full" in e && e.full) ?? !1, EW = (e, t) => {
  const r = ha(e, "text")?.toString() || "", n = pa(e, "text"), a = TW(e), i = PW(e) || 3;
  return _(rn, {
    className: te("whitespace-pre-wrap break-words text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
    lines: i,
    disabled: a,
    children: r
  });
}, Ad = 100, _1 = 12, CW = 12, jW = (e, t) => {
  const r = ha(e, "percentage"), n = pa(e, "percentage");
  if (r === void 0)
    return null;
  if (n)
    return _("span", {
      className: te("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
      "data-cell-type": "percentage",
      children: r
    });
  const a = Ad / 2, i = a - _1 / 2, o = i - CW, s = 2 * Math.PI * o, u = (100 - Math.min(Number(r), 100)) / 100 * s, c = typeof e == "object" && "label" in e;
  return K("div", {
    className: "flex items-center gap-2",
    "data-cell-type": "percentage",
    children: [K("svg", {
      viewBox: `0 0 ${Ad} ${Ad}`,
      className: "h-7 w-7 -rotate-90 transform",
      children: [_("circle", {
        cx: a,
        cy: a,
        r: i,
        className: "fill-f1-background-positive"
      }), _("circle", {
        cx: a,
        cy: a,
        r: o,
        className: "stroke-f1-background-positive-bold",
        fill: "none",
        strokeWidth: _1,
        strokeDasharray: s,
        strokeDashoffset: u,
        strokeLinecap: "round"
      })]
    }), _("span", {
      className: "text-f1-foreground",
      children: c ? e.label : `${r}%`
    })]
  });
}, MW = (e, t) => {
  const r = `${e.firstName.toString()} ${e.lastName.toString()}`;
  return K("div", {
    className: te("flex min-w-0 flex-1 items-center gap-2", t.visualization === "table" && Wt.avatar),
    children: [_(ki, {
      avatar: {
        type: "person",
        firstName: e.firstName.toString(),
        lastName: e.lastName.toString(),
        src: e.src,
        badge: e.badge,
        deactivated: e.deactivated
      },
      size: "xs"
    }), _(rn, {
      className: te("min-w-0 flex-1", e.deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
      tag: "span",
      children: r
    })]
  });
}, $W = (e, t) => {
  const r = ha(e, "value"), n = pa(e, "value");
  if (r === void 0)
    return null;
  if (n)
    return _("span", {
      className: "text-f1-foreground-secondary",
      "data-cell-type": "progressBar",
      children: r
    });
  const a = r, i = typeof e == "object" && "max" in e ? e.max ?? 100 : 100, o = typeof e == "object" && "label" in e ? e.label : void 0, s = typeof e == "object" && "hideLabel" in e ? e.hideLabel : void 0, u = typeof e == "object" && "color" in e ? e.color : void 0, c = Tt(u || "categorical-1"), l = a / i * 100;
  return K("div", {
    className: "flex w-full items-center gap-2",
    "data-cell-type": "progressBar",
    children: [_("div", {
      className: "min-w-16 flex-grow",
      children: _(gP, {
        color: c,
        value: l,
        max: 100,
        getValueLabel: (f) => `${(f ?? 0).toFixed(1)}% ${o}`,
        "aria-label": o,
        className: "w-full"
      })
    }), !s && _("div", {
      className: "flex-shrink-0 text-sm font-medium text-f1-foreground",
      children: o
    })]
  });
}, Nv = ze(({ text: e, additionalAccessibleText: t, variant: r }, n) => (As(e, {
  disallowEmpty: !0
}, {
  componentName: "F0TagStatus"
}), _(Di, {
  ref: n,
  className: te({
    neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
    info: "bg-f1-background-info text-f1-foreground-info",
    positive: "bg-f1-background-positive text-f1-foreground-positive",
    warning: "bg-f1-background-warning text-f1-foreground-warning",
    critical: "bg-f1-background-critical text-f1-foreground-critical"
  }[r]),
  left: _("div", {
    className: te("m-1 aspect-square w-2 rounded-full", {
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
Nv.displayName = "F0TagStatus";
const IW = (e) => _("div", {
  "data-cell-type": "status",
  children: _(Nv, {
    variant: e.status,
    text: e.label
  })
}), DW = {
  synced: {
    icon: _s,
    colorClass: "text-f1-icon-positive"
  },
  syncing: {
    icon: VT,
    colorClass: "text-f1-icon-secondary",
    animated: !0
  },
  pending: {
    icon: sO,
    colorClass: "text-f1-icon-secondary"
  },
  partiallySynced: {
    icon: KT,
    colorClass: "text-f1-icon-warning"
  },
  outdated: {
    icon: dh,
    colorClass: "text-f1-icon-warning"
  },
  failed: {
    icon: HT,
    colorClass: "text-f1-icon-critical"
  }
}, kW = (e, t) => {
  const r = DW[e.status], n = t.i18n.syncStatus[e.status], a = e.tooltip ?? n, i = _(Et, {
    icon: r.icon,
    "aria-label": a
  });
  return _("div", {
    className: te("flex items-center", t.visualization === "table" && Wt.avatar),
    "data-cell-type": "sync-status",
    children: _(OP, {
      tooltip: a,
      children: _("div", {
        className: te("inline-flex items-center", r.colorClass),
        children: r.animated ? _(Ht.div, {
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
}, NW = (e) => _("div", {
  "data-cell-type": "tag",
  children: _(hh, {
    text: e.label,
    icon: e.icon
  })
}), du = ze(({ avatar: e, text: t }, r) => (As(t, {
  disallowEmpty: !0
}, {
  componentName: "F0TagAvatar"
}), _(Di, {
  ref: r,
  className: "border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
  left: _(ki, {
    avatar: e,
    size: "xs"
  }),
  text: t,
  shape: e.type === "person" ? "rounded" : "square"
})));
du.displayName = "AvatarTag";
const _P = ze(({ name: e, src: t }, r) => _(du, {
  ref: r,
  avatar: {
    type: "company",
    name: e,
    src: t
  },
  text: e
}));
_P.displayName = "F0TagCompany";
const AP = ze(({ src: e, name: t }, r) => _(du, {
  ref: r,
  avatar: {
    type: "person",
    firstName: t,
    lastName: "",
    src: e
  },
  text: t
}));
AP.displayName = "F0TagPerson";
const PP = ze(({ name: e, src: t }, r) => _(du, {
  ref: r,
  avatar: {
    type: "team",
    name: e,
    src: t
  },
  text: e
}));
PP.displayName = "F0TagTeam";
const RW = (e) => {
  const { type: t } = e;
  if (t === "dot") return _(kv, {
    ...e
  });
  if (t === "person") return _(AP, {
    ...e
  });
  if (t === "team") return _(PP, {
    ...e
  });
  if (t === "company") return _(_P, {
    ...e
  });
  if (t === "alert") return _(Dv, {
    ...e
  });
  if (t === "status") return _(Nv, {
    ...e
  });
  if (t === "balance") return _(bP, {
    ...e
  });
  if (t === "raw") return _(hh, {
    ...e
  });
}, oh = ({ tag: e }) => {
  const t = RW(e);
  return t || "Invalid tag type";
}, TP = ({ count: e, list: t }) => {
  const r = _(hh, {
    text: `+${e}`
  });
  return t?.length ? K(GT, {
    children: [_(YT, {
      children: _("span", {
        className: "cursor-pointer",
        children: r
      })
    }), _(XT, {
      side: "top",
      children: K(uO, {
        className: "[*[data-state=visible]_div]:bg-f1-background dark flex max-h-[220px] flex-col",
        children: [t.map((n, a) => _("div", {
          className: "flex w-[172px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n.description ? _(cO, {
            label: n.description,
            children: _("div", {
              children: _(oh, {
                tag: n
              })
            })
          }) : _(oh, {
            tag: n
          })
        }, a)), _(ZT, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : r;
};
TP.displayName = "TagCounter";
const EP = ({ type: e, tags: t, max: r = 4, remainingCount: n }) => {
  const a = t.map((i) => ({
    type: e,
    ...i
  }));
  return _(JT, {
    items: a,
    max: r,
    renderListItem: (i) => _(oh, {
      tag: i
    }),
    renderDropdownItem: () => null,
    forceShowingOverflowIndicator: n !== void 0,
    renderOverflowIndicator: (i) => _(TP, {
      count: (n ?? 0) + i,
      list: n ? void 0 : a.slice(a.length - i)
    }),
    overflowIndicatorWithPopover: !1,
    className: "flex-1"
  });
};
EP.displayName = "F0TagList";
const LW = (e) => _(EP, {
  type: e.type,
  tags: e.tags,
  max: e.max
}), qW = (e, t) => K("div", {
  className: te("flex items-center gap-2", t.visualization === "table" && Wt.avatar),
  children: [_(ki, {
    avatar: {
      type: "team",
      name: e.name,
      src: e.src
    },
    size: "xs"
  }), _("span", {
    className: "text-f1-foreground",
    children: e.name.toString()
  })]
}), BW = (e, t) => {
  const r = ha(e, "text"), n = pa(e, "text"), a = r?.toString() ?? "";
  return _(rn, {
    lines: 1,
    tag: "span",
    className: te("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
    children: a
  });
}, Qe = {
  text: BW,
  longText: EW,
  number: wP,
  date: wW,
  amount: mW,
  avatarList: gW,
  status: IW,
  alertTag: vW,
  person: MW,
  percentage: jW,
  progressBar: $W,
  company: bW,
  team: qW,
  tag: NW,
  dotTag: SW,
  tagList: LW,
  icon: SP,
  file: _W,
  folder: AW,
  country: xW,
  syncStatus: kW
}, FW = (e) => e !== void 0 && typeof e == "object", zU = (e, t, r) => {
  const { type: n, value: a } = FW(e) ? e : {
    type: "text",
    value: e ?? r
  }, i = Qe[n];
  return i ? a === void 0 ? r : i(a, {
    visualization: t.visualization,
    i18n: t.i18n
  }) : `[Invalid ${n} renderer]`;
}, zW = {
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
function WW({ metadata: e }) {
  const { type: t, value: r } = e.property, n = zW[t];
  if (!n)
    return K("div", {
      className: "flex h-8 items-center gap-1.5",
      children: ["icon" in e && _(Et, {
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
    children: ["icon" in e && _("div", {
      className: "pointer-events-auto flex items-center",
      children: _(cO, {
        label: e.tooltip,
        children: _(Et, {
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
function A1({ otherActions: e, selectable: t = !1, selected: r = !1, onSelect: n, title: a, overlay: i = !1 }) {
  const o = nn(), s = e && e.length > 0, [u, c] = he(!1);
  return !s && !t ? null : K("div", {
    className: te("flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]", (u || r) && "delay-0 sm:opacity-100", i && "absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"),
    children: [s && _("div", {
      className: "flex items-center justify-center",
      children: _(KO, {
        items: e,
        open: u,
        onOpenChange: c,
        children: _(_r, {
          label: o.actions.other,
          icon: lO,
          variant: "ghost",
          size: "sm",
          hideLabel: !0,
          pressed: u,
          compact: !0,
          onClick: (l) => l.stopPropagation()
        })
      })
    }), t && _("div", {
      className: "flex items-center justify-center",
      children: _(QT, {
        title: a,
        checked: r,
        onCheckedChange: n,
        hideLabel: !0
      })
    })]
  });
}
const WU = ["contain", "cover", "fit-width", "fit-height", "scale-down"], UU = ["xs", "sm", "md", "lg", "xl"], UW = {
  xs: "h-24",
  sm: "h-32",
  md: "h-40",
  lg: "h-48",
  xl: "h-64"
}, HW = {
  contain: "object-contain h-full w-full",
  cover: "object-cover h-full w-full",
  "fit-width": "w-full h-auto",
  "fit-height": "object-contain h-full w-auto",
  "scale-down": "object-scale-down h-full w-full"
};
function KW(e) {
  return HW[e];
}
const VW = ze(function({ compact: t = !1, avatar: r, image: n, imageFit: a = "fit-width", imageSize: i = "sm", blurredBackground: o = !0, title: s, description: u, metadata: c, children: l, link: f, primaryAction: d, secondaryActions: p, otherActions: y, selectable: h = !1, selected: v = !1, onSelect: b, onClick: g, forceVerticalMetadata: x = !1, fullHeight: O = !1, disableOverlayLink: m = !1 }, w) {
  const S = Me(null), A = (P) => {
    S?.current?.click(), g?.(), P.preventDefault(), P.stopPropagation();
  };
  return K(fO, {
    className: te("group relative bg-f1-background shadow-none transition-all", t && "p-3", O && "h-full", (h || y && y.length > 0) && !v && "hover:border-f1-border", f && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", v && "border-f1-border-selected bg-f1-background-selected-secondary"),
    onClick: g,
    ref: w,
    children: [f && !m && _(iO, {
      href: f,
      variant: "unstyled",
      className: te("z-1 absolute inset-0 block rounded-xl", dO()),
      "aria-label": s,
      ref: S,
      children: " "
    }), n && K("div", {
      className: te("relative -mx-3 -mt-3 mb-4 rounded-md", UW[i], t && "-mx-2 -mt-2 mb-3", a === "fit-height" && "flex items-center justify-center overflow-hidden", a === "fit-width" && "flex items-center justify-center overflow-hidden", a !== "fit-width" && a !== "fit-height" && "overflow-hidden"),
      children: [o && (a === "contain" || a === "fit-width" || a === "fit-height" || a === "scale-down") && _("div", {
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
      }), _(eE, {
        src: n,
        alt: s,
        className: te(KW(a))
      }), _(A1, {
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
        children: [K(pO, {
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
          className: te("relative flex-col gap-0 p-0", n && !t && "pt-3", t && "flex-row items-center gap-2"),
          children: [r && _(pW, {
            avatar: r,
            overlay: !!n,
            compact: t
          }), K("div", {
            className: te("flex flex-col gap-0"),
            children: [_(hO, {
              className: te("text-lg font-semibold text-f1-foreground", t && "line-clamp-1 text-base"),
              children: s
            }), u && _(vO, {
              className: te("text-base text-f1-foreground-secondary"),
              children: _(rn, {
                lines: t ? 2 : 3,
                children: u
              })
            })]
          })]
        }), !n && _(A1, {
          otherActions: y,
          selectable: h,
          selected: v,
          onSelect: b,
          title: s
        })]
      }), (c || l) && K(yO, {
        className: "pointer-events-none",
        children: [c && _("div", {
          className: te("flex flex-col gap-0.5", t && "gap-x-3 gap-y-0", x && "flex-col gap-y-0.5"),
          children: c.map((P, D) => _(WW, {
            metadata: P
          }, D))
        }), l]
      })]
    }), _(fW, {
      primaryAction: d,
      secondaryActions: p,
      compact: t
    })]
  });
}), GW = ({ compact: e = !1 }) => K(fO, {
  className: te("group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none", e && "p-3"),
  "aria-busy": "true",
  "aria-live": "polite",
  children: [K(pO, {
    className: te("flex flex-col gap-2.5 p-0", e && "flex-row items-center gap-2"),
    children: [_(St, {
      className: te("h-10 w-10 rounded-full", e && "h-6 w-6")
    }), K("div", {
      className: te("flex flex-col gap-0", e && "flex-row items-center gap-1.5"),
      children: [_(hO, {
        className: "flex h-6 items-center",
        children: _(St, {
          className: te("h-4 w-20 rounded-md", e && "h-3")
        })
      }), _(vO, {
        className: "flex h-5 items-center",
        children: _(St, {
          className: "h-3 w-12 rounded-md"
        })
      })]
    })]
  }), _(yO, {
    className: "flex flex-col gap-0",
    children: Array.from({
      length: 3
    }).map((t, r) => K("div", {
      className: "flex h-6 items-center gap-1.5",
      children: [_(St, {
        className: "h-4 w-4 rounded-full"
      }), _(St, {
        className: "h-3 w-full max-w-20 rounded-md"
      })]
    }, r))
  })]
}), YW = ["forceVerticalMetadata", "disableOverlayLink"], CP = ze((e, t) => {
  const r = YW.reduce((n, a) => {
    const { [a]: i, ...o } = n;
    return o;
  }, e);
  return _(VW, {
    ref: t,
    ...r
  });
}), XW = ({ compact: e = !1 }) => _(GW, {
  compact: e
});
CP.displayName = "F0Card";
const HU = mO(CP, XW), jP = ze(({ className: e, ...t }, r) => _(gO, {
  ref: r,
  className: te("text-f1-foreground-secondary", e),
  ...t
}));
jP.displayName = gO.displayName;
const MP = ({ className: e, ...t }) => _("div", {
  className: e,
  ...t
});
MP.displayName = "DialogFooter";
const $P = ({ className: e, ...t }) => _("div", {
  className: e,
  ...t
});
$P.displayName = "DialogHeader";
const Pd = [{
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
}], ZW = (e, t) => {
  const r = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, n = pT();
  return K("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    ...e,
    children: [_("defs", {
      children: Pd.map((a) => _("clipPath", {
        id: `${n}-${a.id}`,
        children: _("path", {
          d: a.path
        })
      }, a.id))
    }), r ? Pd.map((a) => _("path", {
      d: a.path,
      fill: "currentColor",
      vectorEffect: "non-scaling-stroke"
    }, a.id)) : Pd.map((a) => _("foreignObject", {
      x: "0",
      y: "0",
      width: "24",
      height: "24",
      clipPath: `url(#${n}-${a.id})`,
      children: _("div", {
        style: {
          width: "100%",
          height: "100%",
          background: "conic-gradient(from 0deg at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
        }
      })
    }, a.id))]
  });
}, JW = ze(ZW);
function KU({ title: e, description: t, onClick: r, onClose: n, isVisible: a, dismissable: i = !1, trackVisibility: o, type: s, ...u }) {
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
  return c && _("div", {
    children: _("div", {
      className: "p-2",
      children: _("div", {
        style: d(),
        children: K("div", {
          className: y(),
          style: p(),
          onClick: r,
          children: [K(lt, {
            children: [s === "one-campaign" ? _("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: _(Et, {
                icon: JW,
                size: "lg",
                className: "!h-8 !w-8"
              })
            }) : _("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: _(tE, {
                module: u.module,
                size: "lg"
              })
            }), _("div", {
              className: "flex flex-1 flex-col",
              children: K("div", {
                children: [_("h3", {
                  className: "text-lg font-medium",
                  children: e
                }), _("p", {
                  className: "text-f1-foreground-secondary",
                  children: t
                })]
              })
            })]
          }), i && _("div", {
            className: "h-6 w-6",
            children: _(Gt, {
              variant: "ghost",
              icon: bO,
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
const VU = rE, QW = (e, t, r) => {
  const n = Ye[r];
  return n ? n.add(e, t) : { from: /* @__PURE__ */ new Date(), to: /* @__PURE__ */ new Date() };
};
function e6({ granularities: e, value: t, onChange: r }) {
  const n = nn(), a = (i) => {
    r(i);
  };
  return K("div", {
    className: "flex flex-col gap-2",
    children: [_("h6", {
      className: "text-sm font-medium",
      children: n.date.selectedBy
    }), _(xO, {
      value: t,
      onValueChange: a,
      as: "list",
      children: _(wO, {
        children: e.map((i) => _($d, {
          value: i,
          children: n.date.granularities[i]?.label || i
        }, i))
      })
    })]
  });
}
const P1 = "__custom__", t6 = (e, t) => {
  if (!e?.value) return !1;
  const r = typeof t.value == "function" ? t.value() : t.value;
  return e.granularity !== t.granularity ? !1 : Jv(e.value.from, r.from) && (!e.value.to || !r.to || Jv(e.value.to, r.to));
}, r6 = ({ presets: e, ...t }) => {
  const [r, n] = he();
  return Le(() => {
    if (t.date) {
      const i = Object.entries(e).find(([o, s]) => t6(t.date, s));
      n(i ? i[0] : void 0);
    }
  }, [t.date, e]), _(xO, {
    as: "list",
    value: r,
    onValueChange: (i) => {
      n(i), t.onSelect?.(i);
    },
    children: K(wO, {
      children: [Object.entries(e).map(([i, o]) => _($d, {
        value: i,
        children: o?.label || i
      }, i)), _(nE, {}), _($d, {
        value: P1,
        children: "Custom"
      }, P1)]
    })
  });
}, Wa = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity, T1 = "__custom__";
function n6({ onSelect: e, defaultValue: t, presets: r = [], granularities: n = ["day"], children: a, compareTo: i, defaultCompareTo: o, onCompareToChange: s, hideCalendarInput: u, value: c, asChild: l, weekStartsOn: f, ...d }) {
  const p = nn(), y = aO(), [h, v] = he(c || t), b = f ?? y.date?.weekStartsOn ?? aE.Monday;
  Le(() => {
    Wa(c, h) || v(c || t);
  }, [c, t]);
  const g = Ze(() => h?.granularity ?? "day", [h?.granularity]), x = Ze(() => Qv(b)[g], [g, b]), O = Ze(() => x.calendarMode || "single", [x]), m = (L) => {
    w({
      value: x.toRange(L ?? void 0),
      granularity: g
    });
  }, w = (L) => {
    Wa(L, h) || (v(L), e?.(L));
  }, S = (L) => {
    P(L === T1);
    const z = L ? r[+L] : void 0;
    if (!z) return;
    const N = Qv(b);
    w({
      value: N[z.granularity].toRange(typeof z.value == "function" ? z.value() : z.value),
      granularity: z.granularity
    }), L !== T1 && d.onOpenChange?.(!1);
  }, [A, P] = he(!1), D = (L) => {
    w({
      value: h?.value,
      granularity: L
    });
  }, T = Ze(() => r.length > 0 && !A, [r, A]), $ = () => {
    P(!1);
  }, M = Ze(() => x.calendarView || "day", [x]), [j, I] = he(o || void 0), k = Ze(() => {
    const L = (i ?? {})[g] || [];
    if (!h?.value)
      return [];
    const z = h.value, N = L.map((B, q) => {
      const H = typeof B.value == "function" ? B.value(x.toRange(z)) : QW(x.toRange(z), B.value.delta, B.value.units), X = Array.isArray(H) ? H.map((ee) => x.toString(ee, p)).join(", ") : x.toString(H, p);
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
    s?.(j ? k[+j]?.dateValue : void 0);
  }, [j, s, k]), K(iE, {
    open: d.open,
    onOpenChange: d.onOpenChange,
    children: [_(oE, {
      asChild: l,
      children: a
    }), _(sE, {
      className: "w-full overflow-auto",
      align: "start",
      children: T ? _(r6, {
        presets: r,
        date: h,
        onSelect: S
      }) : K("div", {
        className: "flex gap-4",
        children: [(r.length > 0 || n.length > 1) && K("div", {
          children: [r.length > 0 && _(Gt, {
            icon: X1,
            variant: "neutral",
            size: "sm",
            hideLabel: !0,
            label: "Back",
            onClick: $
          }), n.length > 1 && _(e6, {
            granularities: n,
            value: g,
            onChange: D
          })]
        }), K("div", {
          className: "min-w-[300px] flex-1",
          children: [_(uE, {
            showInput: !u,
            mode: O,
            view: M,
            onSelect: m,
            defaultSelected: h?.value,
            minDate: d.minDate,
            maxDate: d.maxDate,
            weekStartsOn: b
          }), k.length > 0 && K("div", {
            className: "mt-4 flex flex-col gap-2",
            children: [_("div", {
              className: "text-gray-500 text-sm",
              children: p.date.compareTo
            }), _(cE, {
              label: p.date.compareTo,
              hideLabel: !0,
              placeholder: p.date.compareTo,
              options: k.map((L) => ({
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
const IP = ze(({ value: e, onDateChange: t, granularity: r, onOpenChange: n, minDate: a, maxDate: i, onClear: o, ...s }, u) => {
  const [c, l] = he(""), [f, d] = he(!1), p = nn();
  Le(() => {
    l(r.toString(e?.value, p, "long"));
  }, [e, r, p]);
  const y = (x) => dE(x, r, {
    minDate: a,
    maxDate: i
  }), h = (x, O) => {
    if (x === "") {
      t?.({
        value: void 0,
        granularity: O.key
      }), d(s.required ?? !1);
      return;
    }
    const m = O.toRange(O.fromString(x, p));
    m && y(m?.from) && y(m?.to) ? (t?.({
      value: m,
      granularity: O.key
    }), d(!1)) : d(!0);
  }, v = () => {
    h(c, r);
  }, b = (x) => {
    l(x);
  }, g = s.placeholder ?? r.placeholder();
  return _(lt, {
    children: _(lE, {
      ...s,
      placeholder: g,
      icon: fE,
      ref: u,
      onFocus: () => n?.(!0),
      onClear: () => {
        o?.(), l(""), h("", r);
      },
      onKeyDown: (x) => {
        x.key === "Enter" && v();
      },
      type: "text",
      onChange: b,
      error: f || s.error,
      onBlur: v,
      value: c,
      onClickContent: () => n?.(!0)
    })
  });
});
IP.displayName = "DateInput";
function a6({ onChange: e, value: t, presets: r = [], granularities: n = ["day"], minDate: a, maxDate: i, open: o = !1, ...s }) {
  const [u, c] = he(), [l, f] = he(o);
  Le(() => {
    f(o);
  }, [o]);
  const d = nn(), p = Ze(() => n[0] ?? "day", [n]), y = tt((w) => {
    const S = w || p;
    if (!Ye[S])
      throw new Error(`Invalid granularity ${S}`);
    return {
      ...Ye[S],
      key: S
    };
  }, [p]), h = tt((w) => {
    if (!w)
      return;
    const S = y(w?.granularity);
    return w ? {
      value: S.toRange(S.calendarMode === "range" ? w.value : w.value?.from ?? void 0),
      granularity: w.granularity
    } : void 0;
  }, [y]), v = Ze(() => y(u?.granularity), [u?.granularity, y]);
  Le(() => {
    const w = h(t);
    Wa(u, w) || c(w);
  }, [t]);
  const b = (w) => {
    const S = h(w), P = y(S?.granularity).calendarMode !== "range" && S?.granularity === u?.granularity && !Wa(S, u);
    g(S), P && f(!1);
  }, g = (w) => {
    const S = h(w);
    if (c(S), !Wa(S, u)) {
      const A = y(S?.granularity);
      e?.(S, A.toString(S?.value, d));
    }
  }, x = (w) => {
    f(w), s.onOpenChange?.(w);
  }, O = Ze(() => r.filter((w) => n.includes(w.granularity)), [r, n]), m = Me(null);
  return Le(() => {
    l && m.current && requestAnimationFrame(() => {
      m.current?.focus();
    });
  }, [l]), _(n6, {
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
    children: _(IP, {
      ref: m,
      ...s,
      value: u,
      granularity: v,
      onDateChange: g
    })
  });
}
const GU = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => Ye.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => Ye.day.toRange(bo(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => Ye.day.toRange({
      from: bo(/* @__PURE__ */ new Date(), 7),
      to: /* @__PURE__ */ new Date()
    })
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => Ye.week.toRange(/* @__PURE__ */ new Date())
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => Ye.week.toRange(bo(/* @__PURE__ */ new Date(), 7))
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => Ye.month.toRange(/* @__PURE__ */ new Date())
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => Ye.month.toRange(ga(/* @__PURE__ */ new Date(), 1))
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => Ye.month.toRange(ga(/* @__PURE__ */ new Date(), 3))
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => Ye.month.toRange(ga(/* @__PURE__ */ new Date(), 6))
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => Ye.quarter.toRange(/* @__PURE__ */ new Date())
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () => Ye.quarter.toRange(ga(/* @__PURE__ */ new Date(), 3))
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => Ye.halfyear.toRange(/* @__PURE__ */ new Date())
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () => Ye.halfyear.toRange(ga(/* @__PURE__ */ new Date(), 6))
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => Ye.year.toRange(Hm(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => Ye.year.toRange(Hm(/* @__PURE__ */ new Date(), 3))
  }
}, YU = Ii(
  "F0DatePicker",
  a6
);
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
}
function i6(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function o6(e) {
  var t = i6(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function Zi(e, t, r) {
  return (t = o6(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
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
      Zi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var s6 = {
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
}, DP = /* @__PURE__ */ Symbol("closestEdge");
function kP(e, t) {
  var r, n, a = t.element, i = t.input, o = t.allowedEdges, s = {
    x: i.clientX,
    y: i.clientY
  }, u = a.getBoundingClientRect(), c = o.map(function(f) {
    return {
      edge: f,
      value: s6[f](u, s)
    };
  }), l = (r = (n = c.sort(function(f, d) {
    return f.value - d.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && r !== void 0 ? r : null;
  return C1(C1({}, e), {}, Zi({}, DP, l));
}
function j1(e) {
  var t;
  return (t = e[DP]) !== null && t !== void 0 ? t : null;
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
function u6(e) {
  if (Array.isArray(e)) return e;
}
function c6(e, t) {
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
function NP(e, t) {
  if (e) {
    if (typeof e == "string") return sh(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? sh(e, t) : void 0;
  }
}
function l6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RP(e, t) {
  return u6(e) || c6(e, t) || NP(e, t) || l6();
}
var Td = {}, Ea = {}, M1;
function LP() {
  if (M1) return Ea;
  M1 = 1, Object.defineProperty(Ea, "__esModule", { value: !0 }), Ea.bind = void 0;
  function e(t, r) {
    var n = r.type, a = r.listener, i = r.options;
    return t.addEventListener(n, a, i), function() {
      t.removeEventListener(n, a, i);
    };
  }
  return Ea.bind = e, Ea;
}
var Nr = {}, $1;
function f6() {
  if ($1) return Nr;
  $1 = 1;
  var e = Nr && Nr.__assign || function() {
    return e = Object.assign || function(i) {
      for (var o, s = 1, u = arguments.length; s < u; s++) {
        o = arguments[s];
        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
      }
      return i;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.bindAll = void 0;
  var t = /* @__PURE__ */ LP();
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
  return Nr.bindAll = a, Nr;
}
var I1;
function d6() {
  return I1 || (I1 = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var t = /* @__PURE__ */ LP();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var r = /* @__PURE__ */ f6();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return r.bindAll;
    } });
  })(Td)), Td;
}
var ta = /* @__PURE__ */ d6(), qP = "data-pdnd-honey-pot";
function BP(e) {
  return e instanceof Element && e.hasAttribute(qP);
}
function FP(e) {
  var t = document.elementsFromPoint(e.x, e.y), r = RP(t, 2), n = r[0], a = r[1];
  return n ? BP(n) ? a ?? null : n : null;
}
var p6 = 2147483647;
function D1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function k1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? D1(Object(r), !0).forEach(function(n) {
      Zi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Mi = 2, N1 = Mi / 2;
function h6(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function v6(e) {
  return {
    x: e.x - N1,
    y: e.y - N1
  };
}
function y6(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function m6(e) {
  return {
    x: Math.min(e.x, window.innerWidth - Mi),
    y: Math.min(e.y, window.innerHeight - Mi)
  };
}
function R1(e) {
  var t = e.client, r = m6(y6(v6(h6(t))));
  return DOMRect.fromRect({
    x: r.x,
    y: r.y,
    width: Mi,
    height: Mi
  });
}
function L1(e) {
  var t = e.clientRect;
  return {
    left: "".concat(t.left, "px"),
    top: "".concat(t.top, "px"),
    width: "".concat(t.width, "px"),
    height: "".concat(t.height, "px")
  };
}
function g6(e) {
  var t = e.client, r = e.clientRect;
  return (
    // is within horizontal bounds
    t.x >= r.x && t.x <= r.x + r.width && // is within vertical bounds
    t.y >= r.y && t.y <= r.y + r.height
  );
}
function b6(e) {
  var t = e.initial, r = document.createElement("div");
  r.setAttribute(qP, "true");
  var n = R1({
    client: t
  });
  Object.assign(r.style, k1(k1({
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
  }, L1({
    clientRect: n
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: p6
  })), document.body.appendChild(r);
  var a = ta.bind(window, {
    type: "pointermove",
    listener: function(o) {
      var s = {
        x: o.clientX,
        y: o.clientY
      };
      n = R1({
        client: s
      }), Object.assign(r.style, L1({
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
    if (a(), g6({
      client: s,
      clientRect: n
    })) {
      r.remove();
      return;
    }
    function u() {
      c(), r.remove();
    }
    var c = ta.bindAll(window, [
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
function x6() {
  var e = null;
  function t() {
    return e = null, ta.bind(window, {
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
        n = b6({
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
function w6(e) {
  if (Array.isArray(e)) return sh(e);
}
function O6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function S6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zP(e) {
  return w6(e) || O6(e) || NP(e) || S6();
}
function va(e) {
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
var _6 = va(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), Rv = va(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var t = navigator, r = t.userAgent;
  return r.includes("AppleWebKit") && !r.includes("Chrome");
}), uh = {
  isLeavingWindow: /* @__PURE__ */ Symbol("leaving"),
  isEnteringWindow: /* @__PURE__ */ Symbol("entering")
};
function A6(e) {
  var t = e.dragLeave;
  return Rv() ? t.hasOwnProperty(uh.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !Rv())
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
  ta.bindAll(
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
function P6(e) {
  return "nodeName" in e;
}
function T6(e) {
  return P6(e) && e.ownerDocument !== document;
}
function E6(e) {
  var t = e.dragLeave, r = t.type, n = t.relatedTarget;
  return r !== "dragleave" ? !1 : Rv() ? A6({
    dragLeave: t
  }) : n == null ? !0 : _6() ? T6(n) : n instanceof HTMLIFrameElement;
}
function C6(e) {
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
function Ua(e) {
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
var j6 = function(t) {
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
}, Ed = j6(function(e) {
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
function M6(e) {
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
      go.flush(), Ed.cancel(), i({
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
      go.flush(), Ed.cancel(), i({
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
function WP() {
  return !ch.isActive;
}
function $6(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function I6(e) {
  var t = e.current, r = e.next;
  if (t.length !== r.length)
    return !0;
  for (var n = 0; n < t.length; n++)
    if (t[n].element !== r[n].element)
      return !0;
  return !1;
}
function D6(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!WP())
    return;
  var i = k6({
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
  var s = M6({
    source: r.payload,
    dispatchEvent: a,
    initial: i
  });
  function u(p) {
    var y = I6({
      current: o.current.dropTargets,
      next: p.dropTargets
    });
    o.current = p, y && s.dragUpdate({
      current: o.current
    });
  }
  function c(p) {
    var y = Ua(p), h = BP(p.target) ? FP({
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
  var d = ta.bindAll(
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
        E6({
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
          input: Ua(y)
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
          input: Ua(y)
        }, l();
      }
    }].concat(zP(C6({
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
    nativeSetDragImage: $6(t)
  });
}
function Cd(e) {
  var t, r = e.event, n = e.current, a = (t = n[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  a != null && r.dataTransfer && (r.dataTransfer.dropEffect = a);
}
function k6(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = Ua(t);
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
var q1 = {
  canStart: WP,
  start: D6
}, lh = /* @__PURE__ */ new Map();
function N6(e) {
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
function R6(e) {
  var t = N6(e);
  return function() {
    t.usageCount--, !(t.usageCount > 0) && (t.unmount(), lh.delete(e.typeKey));
  };
}
function UP(e, t) {
  var r = t.attribute, n = t.value;
  return e.setAttribute(r, n), function() {
    return e.removeAttribute(r);
  };
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
function mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? B1(Object(r), !0).forEach(function(n) {
      Zi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jd(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = L6(e)) || t) {
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
function L6(e, t) {
  if (e) {
    if (typeof e == "string") return F1(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? F1(e, t) : void 0;
  }
}
function F1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Md(e) {
  return e.slice(0).reverse();
}
function q6(e) {
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
    var h = pu(UP(p.element, {
      attribute: a,
      value: "true"
    }), o(p));
    return va(h);
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
    var S = x.closest(i);
    if (S == null)
      return w;
    var A = n.get(S);
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
      result: [].concat(zP(w), [$])
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
          var w = n.get(m.element), S = v.has(m.element), A = mr(mr({}, h), {}, {
            self: m
          });
          if (w == null || (O = w.onDropTargetChange) === null || O === void 0 || O.call(w, A), !S) {
            var P;
            w == null || (P = w.onDragLeave) === null || P === void 0 || P.call(w, A);
          }
        }
      } catch (R) {
        g.e(R);
      } finally {
        g.f();
      }
      var D = jd(h.location.current.dropTargets), T;
      try {
        for (D.s(); !(T = D.n()).done; ) {
          var $, M, j = T.value;
          if (!b.has(j.element)) {
            var I = mr(mr({}, h), {}, {
              self: j
            }), k = n.get(j.element);
            k == null || ($ = k.onDropTargetChange) === null || $ === void 0 || $.call(k, I), k == null || (M = k.onDragEnter) === null || M === void 0 || M.call(k, I);
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
    for (var x = Md(b), O = Md(g), m = [], w = 0; w < x.length; w++) {
      var S, A = x[w], P = O[w];
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
      if ($.canDrop && !$.canDrop(M) || !((S = $.getIsSticky) !== null && S !== void 0 && S.call($, M)))
        break;
      m.push(mr(mr({}, A), {}, {
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
function B6(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = F6(e)) || t) {
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
function F6(e, t) {
  if (e) {
    if (typeof e == "string") return z1(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? z1(e, t) : void 0;
  }
}
function z1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function W1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function z6(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? W1(Object(r), !0).forEach(function(n) {
      Zi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W6() {
  var e = /* @__PURE__ */ new Set(), t = null;
  function r(i) {
    t && (!i.canMonitor || i.canMonitor(t.canMonitorArgs)) && t.active.add(i);
  }
  function n(i) {
    var o = z6({}, i);
    e.add(o), r(o);
    function s() {
      e.delete(o), t && t.active.delete(o);
    }
    return va(s);
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
      var u = B6(e), c;
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
function U6(e) {
  var t = e.typeKey, r = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, i = e.defaultDropEffect, o = W6(), s = q6({
    typeKey: t,
    defaultDropEffect: i
  });
  function u(f) {
    n?.(f), s.dispatchEvent(f), o.dispatchEvent(f), a?.(f);
  }
  function c(f) {
    var d = f.event, p = f.dragType;
    q1.start({
      event: d,
      dragType: p,
      getDropTargetsOver: s.getIsOver,
      dispatchEvent: u
    });
  }
  function l() {
    function f() {
      var d = {
        canStart: q1.canStart,
        start: c
      };
      return r(d);
    }
    return R6({
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
var H6 = va(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), K6 = "pdnd:android-fallback", U1 = "text/plain", V6 = "text/uri-list", G6 = "application/vnd.pdnd", $i = /* @__PURE__ */ new WeakMap();
function Y6(e) {
  return $i.set(e.element, e), function() {
    $i.delete(e.element);
  };
}
var H1 = x6(), Lv = U6({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(t) {
    return pu(H1.bindEvents(), ta.bind(document, {
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
          var f = $i.get(l);
          if (!f)
            return null;
          var d = Ua(n), p = {
            element: f.element,
            dragHandle: (a = f.dragHandle) !== null && a !== void 0 ? a : null,
            input: d
          };
          if (f.canDrag && !f.canDrag(p))
            return n.preventDefault(), null;
          if (f.dragHandle) {
            var y = FP({
              x: d.clientX,
              y: d.clientY
            });
            if (!f.dragHandle.contains(y))
              return n.preventDefault(), null;
          }
          var h = (i = (o = f.getInitialDataForExternal) === null || o === void 0 ? void 0 : o.call(f, p)) !== null && i !== void 0 ? i : null;
          if (h)
            for (var v = 0, b = Object.entries(h); v < b.length; v++) {
              var g = RP(b[v], 2), x = g[0], O = g[1];
              n.dataTransfer.setData(x, O ?? "");
            }
          H6() && !n.dataTransfer.types.includes(U1) && !n.dataTransfer.types.includes(V6) && n.dataTransfer.setData(U1, K6), n.dataTransfer.setData(G6, "");
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
    (r = $i.get(i.source.element)) === null || r === void 0 || (n = r[a]) === null || n === void 0 || n.call(
      r,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      i
    );
  },
  onPostDispatch: H1.getOnPostDispatch()
}), HP = Lv.dropTarget, X6 = Lv.monitor;
function Z6(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var t = $i.get(e.element);
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
    Lv.registerUsage(),
    Y6(e),
    UP(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return va(r);
}
function J6(e) {
  const t = /* @__PURE__ */ new Set();
  return pu(
    X6({
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
      } : Z6({
        element: r,
        getInitialData: () => ({ ...n, instanceId: e }),
        dragHandle: i ?? void 0
      });
    },
    registerDroppable(r, { id: n }) {
      return HP({
        element: r,
        getData: ({ input: a, element: i }) => kP(
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
const KP = Ft(null);
function qv() {
  return ft(KP);
}
function Q6({ driver: e, children: t }) {
  const r = Me(e), n = Ze(() => ({
    driver: r.current
  }), []);
  return _(KP.Provider, {
    value: n,
    children: t
  });
}
function eU(e) {
  const t = qv(), { ref: r, payload: n, disabled: a, handleRef: i } = e, o = n.data, s = n.id + "|" + (o?.currentParentId ?? "null");
  Le(() => {
    if (r.current && !(!t || a))
      return t.driver.registerDraggable(r.current, {
        payload: n,
        disabled: a,
        handle: i?.current ?? null
      });
  }, [t, r, s, a, i, n]);
}
function XU(e) {
  const t = qv(), r = e?.ref, n = e?.id, a = e?.accepts;
  Le(() => {
    if (r?.current && !(!t || !n || !a))
      return t.driver.registerDroppable(r.current, { id: n, accepts: a });
  }, [t, r, n, a]);
}
function tU(e) {
  const t = qv();
  Le(
    () => t ? t.driver.subscribe(e) : void 0,
    [t, e]
  );
}
function rU({ otherActions: e, open: t, setOpen: r, disabled: n }) {
  return _(KO, {
    items: e.map((a) => "type" in a && a.type === "separator" ? a : {
      ...a,
      type: "item"
    }),
    open: t,
    onOpenChange: r,
    children: _(_r, {
      icon: lO,
      label: "Actions",
      hideLabel: !0,
      variant: "ghost",
      pressed: t,
      size: "sm",
      disabled: n
    })
  });
}
function nU({ item: e, counter: t, isActive: r, sortable: n, collapsible: a = !1, isExpanded: i = !1, onToggleExpanded: o = () => {
}, children: s, open: u, setOpen: c, isHovered: l, setIsHovered: f }) {
  const d = nn(), { label: p, onClick: y, icon: h, disabled: v, otherActions: b } = e, x = b && b.length > 0 && (l || u), O = t && !x, m = n && (l || u);
  return K("div", {
    className: "flex w-full min-w-0 items-center",
    children: [a && _(_r, {
      compact: !0,
      size: "sm",
      variant: "ghost",
      onClick: (w) => {
        w.stopPropagation(), o?.(e.id);
      },
      label: d.actions.toggle,
      hideLabel: !0,
      className: te("text-f1-icon transition-all", !i && "-rotate-90"),
      icon: pE
    }), K("div", {
      className: te(dO("focus:border-f1-border-focus"), "relative flex h-[36px] min-w-0 flex-grow items-center gap-1 rounded-[10px] border border-solid border-transparent px-1.5 text-sm transition-colors", r && "bg-f1-background-selected", y && !v && "cursor-pointer hover:bg-f1-background-hover", v && "cursor-not-allowed opacity-30"),
      "data-active": r || void 0,
      onClick: v ? void 0 : () => y?.(e.id),
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [(n || h) && _("div", {
        className: "absolute left-1.5 top-1/2 -translate-y-1/2",
        children: _(Da, {
          mode: "wait",
          children: m ? _(Ht.div, {
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
            children: _("div", {
              className: "flex flex-shrink-0 cursor-grab items-center justify-center text-f1-icon active:cursor-grabbing",
              "aria-label": "Drag to reorder",
              children: _(Et, {
                icon: hE,
                size: "xs"
              })
            })
          }, "handle") : h && _(Ht.div, {
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
            children: _(Et, {
              icon: h,
              size: "md"
            })
          }, "icon")
        })
      }), _(rn, {
        lines: 1,
        className: te("flex-grow text-[14px] font-medium text-f1-foreground transition-all", m || h ? "pl-7" : "pl-0"),
        children: p
      }), _(Da, {
        children: (O || x) && _(Ht.div, {
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
          children: _(Da, {
            mode: "wait",
            children: O ? _(Ht.div, {
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
              children: _(vE, {
                value: t
              })
            }, "counter") : x && _(Ht.div, {
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
              children: _(rU, {
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
function Ha({ item: e, counter: t, isActive: r, collapsible: n = !1, isExpanded: a = !1, onToggleExpanded: i = () => {
}, sortable: o, children: s, onDragOver: u, onDragLeave: c, onDrop: l, canDropInside: f = !1, currentParentId: d = null, justDropped: p = !1 }) {
  const [y, h] = he(!1), [v, b] = he(!1), g = Me(null), [x, O] = he(null), [m, w] = he(!1), S = Me(null), A = Ze(() => ({
    kind: "toc-item",
    id: e.id,
    data: {
      item: e,
      currentParentId: d
    }
  }), [e.id, d, e]);
  return eU({
    ref: g,
    payload: A,
    disabled: !o
  }), Le(() => {
    if (!(!g.current || !o))
      return HP({
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
          } : kP({
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
            O(null), w(!1), S.current = null;
            return;
          }
        },
        onDrag: ({ self: P, source: D }) => {
          if (D.data.id === e.id) {
            O(null), w(!1), S.current = null;
            return;
          }
          const $ = P.data, M = j1(P.data);
          if ($.position === "inside") {
            const j = S.current;
            (!j || !j.isInside || j.edge !== null) && (w(!0), O(null), S.current = {
              edge: null,
              isInside: !0
            }, u?.(e.id, "inside"));
          } else if (M && (M === "top" || M === "bottom")) {
            const j = M === "top" ? "before" : "after", I = S.current;
            !I || I.edge !== M || I.isInside !== !1 ? (O(M), w(!1), S.current = {
              edge: M,
              isInside: !1,
              lastReportTime: Date.now()
            }, u?.(e.id, j)) : Date.now() - (I.lastReportTime || 0) > 50 && (u?.(e.id, j), S.current = {
              ...I,
              lastReportTime: Date.now()
            });
          } else if (!M) {
            const j = S.current;
            if (j?.edge) {
              const I = j.edge === "top" ? "before" : "after";
              Date.now() - (j.lastReportTime || 0) > 50 && (u?.(e.id, I), S.current = {
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
          D.position === "inside" ? T = "inside" : T = j1(P.data) === "top" ? "before" : "after", O(null), w(!1), l && l(e.id, T);
        }
      });
  }, [e.id, o, f, u, c, l]), _(Ht.div, {
    ref: g,
    className: te("relative rounded-lg transition-colors", o && "cursor-grab active:cursor-grabbing", x === "top" && "before:bg-f1-border-focus before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-0.5", x === "bottom" && "after:bg-f1-border-focus after:absolute after:bottom-0 after:left-0 after:right-0 after:z-10 after:h-0.5", m && f && "bg-f1-background-hover/30", p && "bg-f1-background-hover/50 shadow-lg"),
    animate: p ? {
      scale: [1, 1.05, 1],
      y: [0, -2, 0]
    } : {},
    transition: p ? {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1]
    } : {},
    children: _(nU, {
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
function aU({ item: e, children: t, isActive: r, isExpanded: n, onToggleExpanded: a, sortable: i, hideChildrenCounter: o, canDropInside: s = !1, onDragOver: u, onDragLeave: c, onDrop: l, currentParentId: f, draggedItemId: d }) {
  const p = yE();
  return K(mE, {
    open: n,
    onOpenChange: (y) => {
      y !== n && a?.(e.id);
    },
    children: [_(Ha, {
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
    }), _(gE, {
      forceMount: !0,
      className: "flex flex-col gap-1",
      children: _(Ht.div, {
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
        children: _("div", {
          className: "ml-3 min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-5",
          children: t
        })
      })
    })]
  });
}
function iU({ item: e, children: t, isActive: r, sortable: n, hideChildrenCounter: a, canDropInside: i = !1, onDragOver: o, onDragLeave: s, onDrop: u, currentParentId: c, draggedItemId: l }) {
  return K(lt, {
    children: [_(Ha, {
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
    }), t && _("div", {
      className: "ml-[18px] min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-4",
      children: t
    })]
  });
}
function Ca({ item: e, children: t, isActive: r, collapsible: n, isExpanded: a, onToggleExpanded: i, sortable: o, hideChildrenCounter: s, canDropInside: u = !1, onDragOver: c, onDragLeave: l, onDrop: f, currentParentId: d, draggedItemId: p }) {
  return n ? _(aU, {
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
  }) : _(iU, {
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
function oU(e, t) {
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
function K1(e, t) {
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
function yt(e, t) {
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
function VP(e, t) {
  return e.map((r) => {
    if (r.id === t)
      return null;
    if (r.children) {
      const n = VP(r.children, t);
      return {
        ...r,
        children: n.length > 0 ? n : void 0
      };
    }
    return r;
  }).filter(Boolean);
}
function sU(e, t, r, n) {
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
function GP(e, t, r) {
  if (r === null) return !1;
  if (r === t) return !0;
  if (!yt(e, t)) return !1;
  function a(o, s, u) {
    for (const c of o)
      if (c.id === u || c.children && a(c.children, s, u))
        return !0;
    return !1;
  }
  const i = yt(e, t);
  return i?.item.children ? a(i.item.children, t, r) : !1;
}
function mn(e) {
  return e.map((t) => ({
    id: t.id,
    ...t.children && { children: mn(t.children) }
  }));
}
function YP(e, t, r) {
  return e.map((n) => n.id === t ? r : n.children ? {
    ...n,
    children: YP(n.children, t, r)
  } : n);
}
function uU(e, t, r, n) {
  const a = yt(e, t);
  if (!a) return n;
  let i = n;
  if (r !== null) {
    if (yt(e, r)) {
      const s = a.parentPath;
      if (s.length > 0 && s[s.length - 1] === r) {
        const u = yt(
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
function XP(e, t, r, n, a, i, o, s, u, c, l, f, d, p, y, h, v, b, g) {
  const x = e.children ? Ca : Ha, O = o?.has(e.id) ?? !0, m = f === e.id, w = !!(l && l !== e.id && c && e.children !== void 0 && !GP(c, l, e.id)), S = !!(l && l !== e.id && m && d === "before"), A = !!(l && l !== e.id && m && d === "after"), P = y === null ? c?.[0]?.id === e.id : !c || !y ? !1 : yt(c, y)?.item.children?.[0]?.id === e.id;
  return K(lt, {
    children: [_(Da, {
      children: S && _(Ht.div, {
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
    }), x === Ha ? _(Ha, {
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
    }, e.id) : _(x, {
      item: e,
      isActive: n === e.id,
      collapsible: a && e.children && e.children.length > 0,
      isExpanded: O,
      onToggleExpanded: s,
      sortable: t,
      hideChildrenCounter: i,
      canDropInside: w,
      onDragOver: x === Ca ? h : void 0,
      onDragLeave: x === Ca ? v : void 0,
      onDrop: x === Ca ? b : void 0,
      currentParentId: y,
      draggedItemId: l,
      children: e.children && (x === Ca || O) && K("div", {
        className: te("flex flex-col", m && d === "inside" && w && "rounded-md bg-f1-background-hover/20 p-1"),
        children: [e.children.map((D) => XP(D, t, r + 1, n, a, i, o, s, u, c, l, f, d, t ? p : void 0, e.id, h, v, b, g)), m && d === "inside" && w && (!O || e.children.length === 0) && _("div", {
          className: "flex h-9 items-center justify-center rounded-md bg-f1-background-hover/30 text-xs text-f1-foreground-secondary",
          children: "Drop here"
        })]
      })
    }, e.id), _(Da, {
      children: A && _(Ht.div, {
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
function cU({ title: e, items: t, className: r, activeItem: n, collapsible: a = !1, sortable: i = !1, showSearchBox: o = !1, searchPlaceholder: s, onReorder: u, hideChildrenCounter: c = !1, scrollable: l = !0 }) {
  const f = nn(), [d, p] = he(""), y = (E) => {
    p(E);
  }, h = Ze(() => K1(t, d), [t, d]), [v, b] = he(oU(t, n)), [g, x] = he(t);
  Le(() => {
    x(t);
  }, [t]);
  const O = Me(null), m = tt((E) => {
    b((Y) => {
      const F = new Set(Y);
      return F.has(E) ? F.delete(E) : F.add(E), F;
    });
  }, [b]), w = tt((E, Y) => {
    const F = YP(g, E, Y);
    x(F), u && u(mn(F));
  }, [g, u]), S = tt((E) => (Y) => {
    const F = yt(g, E);
    if (F) {
      const ae = {
        ...F.item,
        children: Y
      };
      w(E, ae);
    } else
      E == null && (x(Y), u && u(mn(Y)));
  }, [g, w, u, mn]), A = tt((E, Y, F) => {
    if (GP(g, E, Y))
      return;
    const ae = yt(g, E);
    if (!ae) return;
    const ce = ae.item;
    let oe = VP(g, E);
    const Se = uU(g, E, Y, F);
    oe = sU(oe, ce, Y, Se), x(oe), Y !== null && b((Te) => {
      const me = new Set(Te);
      return me.add(Y), me;
    }), u && u(mn(oe));
  }, [g, u, mn]), P = Ze(() => K1(g, d), [g, d]), [D, T] = he(null), [$, M] = he(null), [j, I] = he(null), [k, R] = he(null), L = Me(null), z = Me(!1), N = Me(null), B = Me(null), q = Me(null), H = Me(null), X = Me(null), ee = Me(0), ne = Me(0), Q = Me(!1), J = Me(null), U = tt((E, Y) => {
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
        ee.current = ye, ne.current = ye;
        const er = (i ? P : h)[0];
        me.itemId === er?.id && me.position === "before" && (Q.current = !0);
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
    const E = Q.current ? 1e3 : 800;
    q.current = setTimeout(() => {
      if (z.current) {
        q.current = null;
        return;
      }
      const Y = Date.now(), F = Y - ee.current, ae = Y - ne.current, ce = Q.current ? 800 : 500;
      if (ae < ce) {
        q.current = null;
        return;
      }
      const oe = Q.current ? 800 : 500;
      if (F < oe) {
        q.current = null;
        return;
      }
      if (Q.current) {
        const Te = (i ? P : h)[0];
        if ($ === Te?.id && j === "before") {
          if (ae < 2e3) {
            q.current = null;
            return;
          }
          Q.current = !1;
        } else
          Q.current = !1;
      }
      X.current = null, ee.current = 0, M(null), I(null), N.current = null, B.current = null, q.current = null;
    }, E);
  }, [$, j, i, P, h]), Z = tt((E, Y) => {
    z.current = !0;
    const F = L.current;
    if (Q.current = !1, M(null), I(null), N.current = null, B.current = null, q.current && (clearTimeout(q.current), q.current = null), !F || F === E) {
      L.current = null, T(null), M(null), I(null);
      return;
    }
    const ae = yt(g, E), ce = yt(g, F);
    if (ae && ce) {
      let oe = null, Se = 0;
      if (Y === "inside")
        oe = E, Se = ae.item.children?.length ?? 0;
      else if (Y === "before")
        if (ae.parentPath.length > 0 ? oe = ae.parentPath[ae.parentPath.length - 1] : oe = null, oe === null)
          Se = g.findIndex((ye) => ye.id === E);
        else {
          const ye = yt(g, oe);
          ye && (Se = ye.item.children?.findIndex((qe) => qe.id === E) ?? 0);
        }
      else if (Y === "after")
        if (ae.parentPath.length > 0 ? oe = ae.parentPath[ae.parentPath.length - 1] : oe = null, oe === null)
          Se = g.findIndex((ye) => ye.id === E) + 1;
        else {
          const ye = yt(g, oe);
          ye && (Se = (ye.item.children?.findIndex((qe) => qe.id === E) ?? 0) + 1);
        }
      const Te = ce.parentPath.length > 0 ? ce.parentPath[ce.parentPath.length - 1] : null;
      let me = -1;
      if (Te === null)
        me = g.findIndex((ye) => ye.id === F);
      else {
        const ye = yt(g, Te);
        ye && (me = ye.item.children?.findIndex((qe) => qe.id === F) ?? -1);
      }
      (oe !== Te || oe === Te && me !== Se) && (R(F), A(F, oe, Se), setTimeout(() => {
        R(null);
      }, 800));
    }
    Q.current = !1, L.current = null, z.current = !0, X.current = null, ee.current = 0, ne.current = 0, J.current && (clearTimeout(J.current), J.current = null), T(null), setTimeout(() => {
      z.current = !1;
    }, 600);
  }, [g, A]);
  return tU(tt((E) => {
    if (E.phase === "start" && E.source.kind === "toc-item")
      q.current && (clearTimeout(q.current), q.current = null), J.current && (clearTimeout(J.current), J.current = null), L.current = E.source.id, z.current = !1, H.current = null, T(E.source.id);
    else if (E.phase === "cancel")
      Q.current = !1, z.current = !1, H.current = null, X.current = null, ee.current = 0, ne.current = 0, q.current && (clearTimeout(q.current), q.current = null), J.current && (clearTimeout(J.current), J.current = null), M(null), I(null), N.current = null, B.current = null, T(null), L.current = null;
    else if (E.phase === "drop") {
      q.current && (clearTimeout(q.current), q.current = null), Q.current = !1;
      const Y = N.current || H.current?.itemId, F = B.current || H.current?.position;
      !z.current && Y && F && L.current && L.current !== Y && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!z.current) {
            const ce = N.current || H.current?.itemId, oe = B.current || H.current?.position;
            ce && oe && Z(ce, oe);
          }
        });
      }), J.current && (clearTimeout(J.current), J.current = null);
      const ae = setTimeout(() => {
        z.current || (H.current = null, X.current = null, ee.current = 0, ne.current = 0, M(null), I(null), N.current = null, B.current = null, T(null), L.current = null), J.current === ae && (J.current = null);
      }, 500);
      J.current = ae;
    }
  }, [Z])), K("nav", {
    className: te("w-[248px]", l ? "overflow-y-auto" : "overflow-hidden", r),
    "aria-label": e,
    ref: O,
    children: [(e || o) && K("div", {
      className: te("bg-f1-background pb-2 pl-5 pr-4 pt-5", l && "sticky top-0 z-10"),
      children: [o && _("div", {
        className: "mb-4",
        children: _(bE, {
          placeholder: s ?? f.toc.search,
          onChange: y,
          value: d,
          clearable: !0
        })
      }), e && _(rn, {
        lines: 1,
        tag: "h2",
        className: "text-[14px] font-medium text-f1-foreground-secondary",
        children: e
      })]
    }), _(uO, {
      className: "h-full min-h-0",
      children: _("div", {
        className: "px-3 pb-2",
        children: _("div", {
          className: "flex flex-col gap-0.5",
          children: (i ? P : h).map((E) => XP(E, i, 0, n, a, c, v, m, A, g, D, $, j, i ? S : void 0, null, U, V, Z, k))
        })
      })
    })]
  });
}
function lU(e) {
  const t = Me(/* @__PURE__ */ Symbol("f0-table-of-contents")), r = Ze(() => J6(t.current), []);
  return _(Q6, {
    driver: r,
    children: _(cU, {
      ...e
    })
  });
}
const ZU = Ii("F0TableOfContent", lU), fU = ze(function({ bare: t = !1, ...r }, n) {
  return _("div", {
    ref: n,
    role: "separator",
    className: te("-mx-4 h-[1px]", t ? void 0 : "my-4"),
    style: {
      backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
    },
    ...r
  });
}), dU = ({ text: e, isCompleted: t }) => K("div", {
  className: "flex flex-row items-center gap-2",
  children: [_(Et, {
    className: t ? "text-f1-icon-positive" : "text-f1-icon-secondary",
    icon: t ? _s : sO,
    size: "md"
  }), _("span", {
    className: t ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
    children: e
  })]
}), pU = ({ title: e, items: t }) => K("div", {
  className: "px-4 pb-2",
  children: [_("div", {
    className: "mb-2 text-sm text-f1-foreground-secondary",
    children: e
  }), _("div", {
    className: "flex flex-col gap-2",
    children: t.map((r) => _(dU, {
      text: r.text,
      isCompleted: r.isCompleted ?? !1
    }, r.text))
  })]
}), hU = ({ onClose: e, success: t, successButtonOnClick: r, successButtonLabel: n, closeLabel: a }) => {
  const i = t && n && r, o = (s = !1) => K(lt, {
    children: [_(Gt, {
      variant: "outline",
      label: a,
      onClick: e,
      size: s ? "lg" : void 0
    }), i && _(Gt, {
      variant: "promote",
      label: n,
      onClick: () => {
        r(), e?.();
      },
      size: s ? "lg" : void 0
    })]
  });
  return K(MP, {
    className: "px-4 pb-4 pt-2 [&_div]:w-full",
    children: [_("div", {
      className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",
      children: o()
    }), _("div", {
      className: "flex flex-col-reverse gap-2 sm:hidden",
      children: o(!0)
    })]
  });
}, ZP = ze(({ open: e, onClose: t, success: r = !0, errorMessage: n, successMessage: a, nextSteps: i, closeLabel: o, portalContainer: s }, u) => {
  const [c, l] = he(!1), f = tt(() => {
    l(!0), setTimeout(() => {
      t?.(), l(!1);
    }, 200);
  }, [t]);
  return _(xE, {
    open: e && !c,
    onOpenChange: (d) => !d && f?.(),
    children: K(wE, {
      ref: u,
      className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
      container: s,
      children: [K($P, {
        className: `flex flex-col items-start gap-4 px-4 ${r ? "pt-5" : "py-5"}`,
        children: [_(kj, {
          type: r ? "positive" : "critical",
          size: "lg"
        }), K("div", {
          className: "flex flex-col gap-0.5",
          children: [_(OE, {
            className: "text-xl font-semibold sm:text-lg",
            children: r ? a?.title : n?.title
          }), _(jP, {
            className: "text-lg sm:text-base",
            children: r ? a?.description : n?.description
          })]
        })]
      }), r && i && i.items?.length > 0 ? K(lt, {
        children: [_(fU, {}), _(pU, {
          title: i.title,
          items: i.items
        })]
      }) : null, _(hU, {
        onClose: f,
        success: r,
        successButtonLabel: a.buttonLabel,
        successButtonOnClick: a.buttonOnClick,
        closeLabel: o
      })]
    })
  });
});
ZP.displayName = "UpsellRequestResponseDialog";
var vU = "Label", JP = pe.forwardRef((e, t) => /* @__PURE__ */ _(
  ph.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
JP.displayName = vU;
var QP = JP;
const yU = pe.forwardRef(({ className: e, ...t }, r) => _(QP, {
  ref: r,
  className: te("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", e),
  ...t
}));
yU.displayName = QP.displayName;
function JU({ label: e, showIcon: t = !0, onRequest: r, showConfirmation: n = !0, loading: a, errorMessage: i, successMessage: o, loadingState: s, nextSteps: u, closeLabel: c, variant: l = "promote", onModalStateChange: f, portalContainer: d, ...p }) {
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
  return K(lt, {
    children: [_(Gt, {
      variant: l,
      label: m,
      icon: t ? SE : void 0,
      onClick: g,
      loading: O,
      ...p
    }), n && y && _(ZP, {
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
const mU = ze(function({ title: t, subtitle: r, mediaUrl: n, primaryAction: a, secondaryAction: i, onClose: o, isLoading: s = !1, children: u, variant: c = "default" }, l) {
  const f = n?.includes(".mp4"), [d, p] = he(!1), y = () => {
    o && o(), p(!0);
  };
  return s ? _(eT, {
    ref: l
  }) : d ? null : K("div", {
    ref: l,
    className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
    children: [_("div", {
      className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      children: f ? _("video", {
        src: n,
        autoPlay: !0,
        muted: !0,
        loop: !0,
        className: "h-full w-full rounded-lg object-cover"
      }) : _("img", {
        src: n,
        alt: "",
        className: "h-full w-full rounded-lg object-cover"
      })
    }), K("div", {
      className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      children: [K("div", {
        className: te("flex w-full flex-col gap-1", c === "default" ? "sm:max-w-lg" : void 0),
        children: [_("h3", {
          className: "font-bold text-xl text-f1-foreground",
          children: t
        }), r && _("p", {
          className: "text-base text-f1-foreground-secondary",
          children: r
        })]
      }), K("div", {
        className: "flex gap-3",
        children: [a && _(Gt, {
          onClick: a.onClick,
          label: a.label,
          variant: a.variant || "default",
          size: "md",
          icon: a.icon
        }), i && _(Gt, {
          onClick: i.onClick,
          label: i.label,
          variant: i.variant || "outline",
          size: "md",
          icon: i.icon
        }), u]
      })]
    }), o && _("div", {
      className: "absolute right-2 top-2 z-10",
      children: _(Gt, {
        variant: "ghost",
        icon: bO,
        size: "sm",
        hideLabel: !0,
        onClick: y,
        label: "Close"
      })
    })]
  });
}), eT = ze(function(t, r) {
  return K("div", {
    ref: r,
    className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    ...t,
    children: [_("div", {
      className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      children: _(St, {
        className: "h-full w-full rounded-lg"
      })
    }), K("div", {
      className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      children: [K("div", {
        className: "flex w-full flex-col gap-1 sm:max-w-lg",
        children: [_(St, {
          className: "h-7 w-3/4"
        }), _(St, {
          className: "h-4 w-full"
        }), _(St, {
          className: "h-4 w-2/3"
        })]
      }), K("div", {
        className: "flex gap-3",
        children: [_(St, {
          className: "h-9 w-32"
        }), _(St, {
          className: "h-9 w-24"
        })]
      })]
    }), _("div", {
      className: "absolute right-2 top-2 z-10",
      children: _(St, {
        className: "h-8 w-8 rounded-md"
      })
    })]
  });
}), gU = mO(mU, eT);
gU.displayName = "BaseBanner";
const tT = {
  get: () => ({}),
  set: () => Promise.resolve()
}, rT = Ft(tT), QU = ({ children: e, handler: t }) => _(rT.Provider, {
  value: t ?? tT,
  children: e
}), eH = () => {
  const e = ft(rT);
  if (!e)
    throw new Error("useDataCollectionStorage must be used within a DataCollectionStorageProvider");
  return e;
};
export {
  w1 as $,
  Bt as A,
  Mr as B,
  SU as C,
  KO as D,
  Hi as E,
  fa as F,
  Tr as G,
  Vi as H,
  lu as I,
  jv as J,
  Cv as K,
  _U as L,
  Tt as M,
  qt as N,
  Ev as O,
  cu as P,
  gP as Q,
  DU as R,
  dA as S,
  kU as T,
  NU as U,
  RU as V,
  LU as W,
  vr as X,
  yr as Y,
  qU as Z,
  uW as _,
  Bh as a,
  jP as a$,
  ih as a0,
  bP as a1,
  kj as a2,
  ZU as a3,
  Nv as a4,
  ZP as a5,
  yU as a6,
  JU as a7,
  gU as a8,
  IU as a9,
  cF as aA,
  DL as aB,
  TS as aC,
  Qs as aD,
  Zs as aE,
  uL as aF,
  BU as aG,
  Wj as aH,
  PU as aI,
  CU as aJ,
  jU as aK,
  NS as aL,
  Wh as aM,
  TU as aN,
  FU as aO,
  AU as aP,
  Wa as aQ,
  n6 as aR,
  eH as aS,
  zW as aT,
  HP as aU,
  kP as aV,
  j1 as aW,
  VW as aX,
  X6 as aY,
  zU as aZ,
  $P as a_,
  QU as aa,
  OU as ab,
  MU as ac,
  WU as ad,
  UU as ae,
  HU as af,
  YU as ag,
  GU as ah,
  VU as ai,
  oh as aj,
  Dv as ak,
  _P as al,
  kv as am,
  TP as an,
  EP as ao,
  AP as ap,
  PP as aq,
  KU as ar,
  J6 as as,
  Q6 as at,
  tU as au,
  eU as av,
  XU as aw,
  z4 as ax,
  je as ay,
  Ki as az,
  de as b,
  MP as b0,
  fU as b1,
  EU as b2,
  N4 as b3,
  hr as b4,
  Ha as b5,
  Ca as b6,
  Qr as c,
  He as d,
  bt as e,
  ie as f,
  Re as g,
  $U as h,
  Jr as i,
  ue as j,
  Xr as k,
  le as l,
  Pt as m,
  qs as n,
  Vo as o,
  uu as p,
  Gi as q,
  $r as r,
  gv as s,
  da as t,
  on as u,
  Mv as v,
  Xi as w,
  la as x,
  Yi as y,
  fu as z
};
