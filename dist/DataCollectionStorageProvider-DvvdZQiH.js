import { jsx as S, jsxs as K, Fragment as dt } from "react/jsx-runtime";
import * as fe from "react";
import C, { useRef as Me, useState as he, useCallback as tt, useEffect as Le, useContext as pt, useMemo as He, useLayoutEffect as aO, createContext as zt, isValidElement as Rt, Children as Vr, PureComponent as Mt, forwardRef as ze, useImperativeHandle as TT, cloneElement as Ue, createElement as iO, Component as oO, useId as ET } from "react";
import { bi as ny, bg as CT, dn as jT, B as _r, aH as sO, c as Q, aI as uO, aB as MT, aC as $T, a as _s, g as ki, dp as to, bt as _e, D as IT, dq as DT, dr as kT, aN as cO, ds as NT, dt as RT, bL as ph, du as LT, F as ct, Q as Ps, aY as lO, b7 as hh, az as fO, w as at, dv as xn, dw as qT, dx as BT, dy as FT, dz as ay, dA as iy, dB as oy, dC as sy, dD as uy, dE as dO, dF as xo, dG as zT, dH as WT, dI as UT, cr as Ga, J as pO, K as hO, L as vO, r as vh, a1 as an, s as yO, t as mO, bQ as yh, h as de, cb as HT, bz as mh, bA as gh, bB as bh, bE as xh, cB as KT, cI as wh, d8 as VT, cp as gO, aD as GT, aA as YT, cx as Ni, u as Tr, aZ as XT, bG as ZT, E as Yt, z as bO, a3 as JT, a4 as xO, x as QT, dd as Ts, dJ as eE, O as on, aW as tE, aK as rE, b2 as nE, aL as wO, b6 as aE, m as Kt, N as Oh, f as OO, aa as iE, o as SO, bN as oE, S as _t, d as AO, dK as _O, M as sE, V as PO, v as uE, cS as Xe, dL as TO, dM as EO, dN as Dd, dO as cE, dP as cy, cV as lE, cW as ly, P as fE, n as dE, q as pE, dl as hE, af as vE, da as yE, aE as mE, dQ as gE, aG as bE, A as Na, e as xE, cv as wE, av as OE, b9 as SE, bb as AE, de as _E, R as PE, T as TE, U as EE, W as CE } from "./index-B_opu_KC.js";
const jE = {
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
function ME(e, t) {
  const r = e.scrollSnapList();
  return typeof t == "number" ? r.map(() => t) : t(r, e);
}
function $E(e, t) {
  const r = e.rootNode();
  return t && t(r) || r;
}
function Sh(e = {}) {
  let t, r, n, a, i = null, o = 0, s = !1, u = !1, c = !1, l = !1;
  function f(j, I) {
    r = j;
    const {
      mergeOptions: k,
      optionsAtMedia: R
    } = I, L = k(jE, Sh.globalOptions), z = k(L, e);
    if (t = R(z), r.scrollSnapList().length <= 1) return;
    l = t.jump, n = !1, a = ME(r, t.delay);
    const {
      eventStore: N,
      ownerDocument: B
    } = r.internalEngine(), q = !!r.internalEngine().options.watchDrag, H = $E(r, t.rootNode);
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
    play: A,
    stop: _,
    reset: P,
    isPlaying: D,
    timeUntilNext: $
  };
}
Sh.globalOptions = void 0;
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
var IE = 0.996, DE = function(t, r) {
  return r === void 0 && (r = IE), t * r / (1 - r);
};
function kE(e) {
  return e[e.length - 1];
}
function NE(e) {
  return e.reduce(function(t, r) {
    return t + r;
  }) / e.length;
}
var RE = function(t, r, n) {
  return Math.min(Math.max(r, t), n);
};
function bu(e, t) {
  if (e.length !== t.length)
    throw new Error("vectors must be same length");
  return e.map(function(r, n) {
    return r + t[n];
  });
}
function fy(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function Cn(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && Cn(t);
  }), e;
}
function LE() {
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
function qE(e) {
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
var BE = 16 * 1.125, FE = typeof window < "u" && window.innerHeight || 800, xu = [1, BE, FE];
function zE(e) {
  var t = e.deltaX * xu[e.deltaMode], r = e.deltaY * xu[e.deltaMode], n = (e.deltaZ || 0) * xu[e.deltaMode];
  return {
    timeStamp: e.timeStamp,
    axisDelta: [t, r, n]
  };
}
var WE = [-1, -1, -1];
function UE(e, t) {
  if (!t)
    return e;
  var r = t === !0 ? WE : t.map(function(n) {
    return n ? -1 : 1;
  });
  return Gr({}, e, {
    axisDelta: e.axisDelta.map(function(n, a) {
      return n * r[a];
    })
  });
}
var dy = 700, HE = function(t) {
  return Gr({}, t, {
    axisDelta: t.axisDelta.map(function(r) {
      return RE(r, -dy, dy);
    })
  });
}, wu = process.env.NODE_ENV !== "production", KE = 0.6, VE = 0.96, GE = 2, py = 5, hy = /* @__PURE__ */ Cn({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), YE = 400;
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
    willEndTimeout: YE
  };
}
function XE(e) {
  e === void 0 && (e = {});
  var t = LE(), r = t.on, n = t.off, a = t.dispatch, i = hy, o = vy(), s, u = !1, c, l = function(j) {
    Array.isArray(j) ? j.forEach(function(I) {
      return y(I);
    }) : y(j);
  }, f = function(j) {
    return j === void 0 && (j = {}), Object.values(j).some(function(I) {
      return I == null;
    }) ? (wu && console.error("updateOptions ignored! undefined & null options not allowed"), i) : i = Cn(Gr({}, hy, i, j));
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
        return bu(I.axisMovement, I.axisVelocity.map(function(k) {
          return DE(k);
        }));
      }
    }, j);
    a("wheel", Gr({}, I, {
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
        return wu && console.warn("unsupported preventWheelAction value: " + R, "warn"), !1;
    }
  }, y = function(j) {
    var I = HE(UE(zE(j), i.reverseSign)), k = I.axisDelta, R = I.timeStamp, L = fy(k);
    if (j.preventDefault && p(L, k) && j.preventDefault(), o.isStarted ? o.isMomentum && L > Math.max(2, o.lastAbsDelta * 2) && (_(!0), w()) : w(), L === 0 && Object.is && Object.is(j.deltaX, -0)) {
      u = !0;
      return;
    }
    s = j, o.axisMovement = bu(o.axisMovement, k), o.lastAbsDelta = L, o.scrollPointsToMerge.push({
      axisDelta: k,
      timeStamp: R
    }), h(), d({
      axisDelta: k,
      isStart: !o.isStartPublished
    }), o.isStartPublished = !0, A();
  }, h = function() {
    o.scrollPointsToMerge.length === GE ? (o.scrollPoints.unshift({
      axisDeltaSum: o.scrollPointsToMerge.map(function(j) {
        return j.axisDelta;
      }).reduce(bu),
      timeStamp: NE(o.scrollPointsToMerge.map(function(j) {
        return j.timeStamp;
      }))
    }), b(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || O()) : o.isStartPublished || v();
  }, v = function() {
    o.axisVelocity = kE(o.scrollPointsToMerge).axisDelta.map(function(j) {
      return j / o.willEndTimeout;
    });
  }, b = function() {
    var j = o.scrollPoints, I = j[0], k = j[1];
    if (!(!k || !I)) {
      var R = I.timeStamp - k.timeStamp;
      if (R <= 0) {
        wu && console.warn("invalid deltaTime");
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
    return j === 0 ? !0 : j <= VE && j >= KE;
  }, O = function() {
    if (o.accelerationFactors.length >= py) {
      if (u && (u = !1, fy(o.axisVelocity) >= 0.2)) {
        m();
        return;
      }
      var j = o.accelerationFactors.slice(py * -1), I = j.every(function(k) {
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
    o = vy(), o.isStarted = !0, o.startTime = Date.now(), c = void 0, u = !1;
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
  }, P = qE(l), D = P.observe, T = P.unobserve, $ = P.disconnect;
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
var ZE = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
Ah.globalOptions = void 0;
var JE = process.env.NODE_ENV !== "production";
function Ah(e) {
  e === void 0 && (e = {});
  var t, r = function() {
  };
  function n(i, o) {
    var s, u, c = o.mergeOptions, l = o.optionsAtMedia, f = c(ZE, Ah.globalOptions), d = c(f, e);
    t = l(d);
    var p = i.internalEngine(), y = (s = t.target) != null ? s : i.containerNode().parentNode, h = (u = t.forceWheelAxis) != null ? u : p.options.axis, v = XE({
      preventWheelAction: h,
      reverseSign: [!0, !0, !1]
    }), b = v.observe(y), g = v.on("wheel", $), x = !1, O;
    function m(M) {
      try {
        O = new MouseEvent("mousedown", M.event), T(O);
      } catch {
        return JE && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), r();
      }
      x = !0, A(), t.wheelDraggingClass && y.classList.add(t.wheelDraggingClass);
    }
    function w(M) {
      x = !1, T(D("mouseup", M)), _(), t.wheelDraggingClass && y.classList.remove(t.wheelDraggingClass);
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
function QE(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function yy(e) {
  return QE(e) || Array.isArray(e);
}
function eC() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function _h(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== i ? !1 : r.every((o) => {
    const s = e[o], u = t[o];
    return typeof s == "function" ? `${s}` == `${u}` : !yy(s) || !yy(u) ? s === u : _h(s, u);
  });
}
function my(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function tC(e, t) {
  if (e.length !== t.length) return !1;
  const r = my(e), n = my(t);
  return r.every((a, i) => {
    const o = n[i];
    return _h(a, o);
  });
}
function Ph(e) {
  return typeof e == "number";
}
function kd(e) {
  return typeof e == "string";
}
function Es(e) {
  return typeof e == "boolean";
}
function gy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function De(e) {
  return Math.abs(e);
}
function Th(e) {
  return Math.sign(e);
}
function Ra(e, t) {
  return De(e - t);
}
function rC(e, t) {
  if (e === 0 || t === 0 || De(e) <= De(t)) return 0;
  const r = Ra(De(e), De(t));
  return De(r / e);
}
function nC(e) {
  return Math.round(e * 100) / 100;
}
function Ya(e) {
  return Xa(e).map(Number);
}
function Lt(e) {
  return e[Ri(e)];
}
function Ri(e) {
  return Math.max(0, e.length - 1);
}
function Eh(e, t) {
  return t === Ri(e);
}
function by(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function Xa(e) {
  return Object.keys(e);
}
function CO(e, t) {
  return [e, t].reduce((r, n) => (Xa(n).forEach((a) => {
    const i = r[a], o = n[a], s = gy(i) && gy(o);
    r[a] = s ? CO(i, o) : o;
  }), r), {});
}
function Nd(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function aC(e, t) {
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
    return kd(e) ? r[e](u) : e(t, u, c);
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
function iC(e, t, r, n) {
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
function oC(e, t) {
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
function jO(e, t, r) {
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
    return jO(e, s(), r);
  }
  const f = {
    get: s,
    set: u,
    add: c,
    clone: l
  };
  return f;
}
function sC(e, t, r, n, a, i, o, s, u, c, l, f, d, p, y, h, v, b, g) {
  const {
    cross: x,
    direction: O
  } = e, m = ["INPUT", "SELECT", "TEXTAREA"], w = {
    passive: !1
  }, A = Za(), _ = Za(), P = Qr(50, 225).constrain(p.measure(20)), D = {
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
      (Es(g) || g(E, ae)) && ne(ae);
    }
    const F = t;
    A.add(F, "dragstart", (ae) => ae.preventDefault(), w).add(F, "touchmove", () => {
    }, w).add(F, "touchend", () => {
    }).add(F, "touchstart", Y).add(F, "mousedown", Y).add(F, "touchcancel", J).add(F, "contextmenu", J).add(F, "click", U, !0);
  }
  function B() {
    A.clear(), _.clear();
  }
  function q() {
    const E = z ? r : t;
    _.add(E, "touchmove", ee, w).add(E, "touchend", J).add(E, "mousemove", ee, w).add(E, "mouseup", J);
  }
  function H(E) {
    const Y = E.nodeName || "";
    return m.includes(Y);
  }
  function X() {
    return (y ? T : D)[z ? "mouse" : "touch"];
  }
  function te(E, Y) {
    const F = f.add(Th(E) * -1), ae = l.byDistance(E, !y).distance;
    return y || De(E) < P ? ae : v && Y ? ae * 0.5 : l.byIndex(F.get(), 0).distance;
  }
  function ne(E) {
    const Y = Nd(E, n);
    z = Y, L = y && Y && !E.buttons && M, M = Ra(a.get(), o.get()) >= 2, !(Y && E.button !== 0) && (H(E.target) || (k = !0, i.pointerDown(E), c.useFriction(0).useDuration(0), a.set(o), q(), j = i.readPoint(E), I = i.readPoint(E, x), d.emit("pointerDown")));
  }
  function ee(E) {
    if (!Nd(E, n) && E.touches.length >= 2) return J(E);
    const F = i.readPoint(E), ae = i.readPoint(E, x), ce = Ra(F, j), oe = Ra(ae, I);
    if (!R && !z && (!E.cancelable || (R = ce > oe, !R)))
      return J(E);
    const Se = i.pointerMove(E);
    ce > h && (L = !0), c.useFriction(0.3).useDuration(0.75), s.start(), a.add(O(Se)), E.preventDefault();
  }
  function J(E) {
    const F = l.byDistance(0, !1).index !== f.get(), ae = i.pointerUp(E) * X(), ce = te(O(ae), F), oe = rC(ae, ce), Se = $ - 10 * oe, Te = b + oe / 50;
    R = !1, k = !1, _.clear(), c.useDuration(Se).useFriction(Te), u.distance(ce, !y), z = !1, d.emit("pointerUp");
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
function uC(e, t) {
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
    return p && !y && De(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: s,
    pointerMove: u,
    pointerUp: c,
    readPoint: o
  };
}
function cC() {
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
function lC(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function fC(e, t, r, n, a, i, o) {
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
        if (De(A - w) >= 0.5) {
          v.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((g) => {
      (Es(i) || i(v, g)) && b(g);
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
function dC(e, t, r, n, a, i) {
  let o = 0, s = 0, u = a, c = i, l = e.get(), f = 0;
  function d() {
    const w = n.get() - e.get(), A = !u;
    let _ = 0;
    return A ? (o = 0, r.set(n), e.set(n), _ = w) : (r.set(e), o += w / u, o *= c, l += o, e.add(o), _ = l - f), s = Th(_), f = l, m;
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
function pC(e, t, r, n, a) {
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
function hC(e, t, r, n, a) {
  const i = Qr(-t + e, 0), o = f(), s = l(), u = d();
  function c(y, h) {
    return Ra(y, h) <= 1;
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
function vC(e, t, r) {
  const n = t[0], a = r ? n - e : Lt(t);
  return {
    limit: Qr(a, n)
  };
}
function yC(e, t, r, n) {
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
function mC(e) {
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
function gC(e, t, r, n, a) {
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
function bC(e, t, r, n, a, i) {
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
        const x = Lt(v[0]) + 1;
        return by(x);
      }
      if (g) {
        const x = Ri(i) - Lt(v)[0] + 1;
        return by(x, Lt(v)[0]);
      }
      return y;
    });
  }
  return {
    slideRegistry: c
  };
}
function xC(e, t, r, n, a) {
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
    const b = v.filter((g) => Th(g) === h);
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
function wC(e, t, r, n, a, i, o) {
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
function OC(e, t, r, n, a, i, o, s) {
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
        (Es(s) || s(p, b)) && y(v);
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
function MO(e, t) {
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
    const p = nC(e.direction(d));
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
function SC(e, t, r, n, a, i, o, s, u) {
  const l = Ya(a), f = Ya(a).reverse(), d = b().concat(g());
  function p(A, _) {
    return A.reduce((P, D) => P - a[D], _);
  }
  function y(A, _) {
    return A.reduce((P, D) => p(P, _) > 0 ? P.concat([D]) : P, []);
  }
  function h(A) {
    return i.map((_, P) => ({
      start: _ - n[P] + 0.5 + A,
      end: _ + t - 0.5 + A
    }));
  }
  function v(A, _, P) {
    const D = h(_);
    return A.map((T) => {
      const $ = P ? 0 : -r, M = P ? r : 0, j = P ? "end" : "start", I = D[T][j];
      return {
        index: T,
        loopPoint: I,
        slideLocation: $a(-1),
        translate: MO(e, u[T]),
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
        slideLocation: D
      } = A, T = _();
      T !== D.get() && (P.to(T), D.set(T));
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
function AC(e, t, r) {
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
      a || (Es(r) || r(u, l)) && c(l);
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
function _C(e, t, r, n) {
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
function PC(e, t, r, n, a, i) {
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
      const m = !x, w = Eh(O, x);
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
function TC(e, t, r, n, a, i, o, s, u) {
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
      const m = Lt(g) || 0, w = m === 0, A = x === Ri(b), _ = a[c] - i[m][c], P = a[c] - i[x][l], D = !n && w ? f(o) : 0, T = !n && A ? f(s) : 0, $ = De(P - T - (_ + D));
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
function EC(e, t, r, n, a, i, o) {
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
  } = i, A = 2, _ = cC(), P = _.measure(t), D = r.map(_.measure), T = oC(u, c), $ = T.measureSize(P), M = lC($), j = aC(s, $), I = !f && !!g, k = f || !!g, {
    slideSizes: R,
    slideSizesWithGaps: L,
    startGap: z,
    endGap: N
  } = PC(T, P, D, r, k, a), B = TC(T, $, v, f, P, D, z, N, A), {
    snaps: q,
    snapsAligned: H
  } = gC(T, j, P, D, B), X = -Lt(q) + Lt(L), {
    snapsContained: te,
    scrollContainLimit: ne
  } = hC($, X, H, g, A), ee = I ? te : H, {
    limit: J
  } = vC(X, ee, f), U = jO(Ri(ee), l, f), V = U.clone(), Z = Ya(r), E = ({
    dragHandler: hn,
    scrollBody: mu,
    scrollBounds: gu,
    options: {
      loop: eo
    }
  }) => {
    eo || gu.constrain(hn.pointerDown()), mu.seek();
  }, Y = ({
    scrollBody: hn,
    translate: mu,
    location: gu,
    offsetLocation: eo,
    previousLocation: bT,
    scrollLooper: xT,
    slideLooper: wT,
    dragHandler: OT,
    animation: ST,
    eventHandler: Zv,
    scrollBounds: AT,
    options: {
      loop: Jv
    }
  }, Qv) => {
    const ey = hn.settled(), _T = !AT.shouldConstrain(), ty = Jv ? ey : ey && _T, ry = ty && !OT.pointerDown();
    ry && ST.stop();
    const PT = gu.get() * Qv + bT.get() * (1 - Qv);
    eo.set(PT), Jv && (xT.loop(hn.direction()), wT.loop()), mu.to(eo.get()), ry && Zv.emit("settle"), ty || Zv.emit("scroll");
  }, F = iC(n, a, () => E(yu), (hn) => Y(yu, hn)), ae = 0.68, ce = ee[U.get()], oe = $a(ce), Se = $a(ce), Te = $a(ce), me = $a(ce), ye = dC(oe, Te, Se, me, d, ae), qe = xC(f, ee, X, J, me), tr = wC(F, U, V, ye, qe, me, o), dn = mC(J), pn = Za(), Qi = _C(t, r, o, h), {
    slideRegistry: ga
  } = bC(I, g, ee, ne, B, Z), gT = OC(e, r, ga, tr, ye, pn, o, w), yu = {
    ownerDocument: n,
    ownerWindow: a,
    eventHandler: o,
    containerRect: P,
    slideRects: D,
    animation: F,
    axis: T,
    dragHandler: sC(T, e, n, a, me, uC(T, a), oe, F, tr, ye, qe, U, o, M, p, y, b, ae, m),
    eventStore: pn,
    percentOfView: M,
    index: U,
    indexPrevious: V,
    limit: J,
    location: oe,
    offsetLocation: Te,
    previousLocation: Se,
    options: i,
    resizeHandler: fC(t, o, a, r, T, x, _),
    scrollBody: ye,
    scrollBounds: pC(J, Te, me, ye, M),
    scrollLooper: yC(X, J, Te, [oe, Te, Se, me]),
    scrollProgress: dn,
    scrollSnapList: ee.map(dn.get),
    scrollSnaps: ee,
    scrollTarget: qe,
    scrollTo: tr,
    slideLooper: SC(T, $, X, R, L, q, ee, Te, r),
    slideFocus: gT,
    slidesHandler: AC(t, o, O),
    slidesInView: Qi,
    slideIndexes: Z,
    slideRegistry: ga,
    slidesToScroll: B,
    target: me,
    translate: MO(T, t)
  };
  return yu;
}
function CC() {
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
const jC = {
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
function MC(e) {
  function t(i, o) {
    return CO(i, o || {});
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
function $C(e) {
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
function Oo(e, t, r) {
  const n = e.ownerDocument, a = n.defaultView, i = MC(a), o = $C(i), s = Za(), u = CC(), {
    mergeOptions: c,
    optionsAtMedia: l,
    optionsMediaQueries: f
  } = i, {
    on: d,
    off: p,
    emit: y
  } = u, h = T;
  let v = !1, b, g = c(jC, Oo.globalOptions), x = c(g), O = [], m, w, A;
  function _() {
    const {
      container: Z,
      slides: E
    } = x;
    w = (kd(Z) ? e.querySelector(Z) : Z) || e.children[0];
    const F = kd(E) ? w.querySelectorAll(E) : E;
    A = [].slice.call(F || w.children);
  }
  function P(Z) {
    const E = EC(e, w, A, n, a, Z, u);
    if (Z.loop && !E.slideLooper.canLoop()) {
      const Y = Object.assign({}, Z, {
        loop: !1
      });
      return P(Y);
    }
    return E;
  }
  function D(Z, E) {
    v || (g = c(g, Z), x = l(g), O = E || O, _(), b = P(x), f([g, ...O.map(({
      options: Y
    }) => Y)]).forEach((Y) => s.add(Y, "change", T)), x.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(V), b.eventHandler.init(V), b.resizeHandler.init(V), b.slidesHandler.init(V), b.options.loop && b.slideLooper.loop(), w.offsetParent && A.length && b.dragHandler.init(V), m = o.init(V, O)));
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
    canScrollPrev: L,
    containerNode: J,
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
Oo.globalOptions = void 0;
function Ch(e = {}, t = []) {
  const r = Me(e), n = Me(t), [a, i] = he(), [o, s] = he(), u = tt(() => {
    a && a.reInit(r.current, n.current);
  }, [a]);
  return Le(() => {
    _h(r.current, e) || (r.current = e, u());
  }, [e, u]), Le(() => {
    tC(n.current, t) || (n.current = t, u());
  }, [t, u]), Le(() => {
    if (eC() && o) {
      Oo.globalOptions = Ch.globalOptions;
      const c = Oo(o, r.current, n.current);
      return i(c), () => c.destroy();
    } else
      i(void 0);
  }, [o, i]), [s, a];
}
Ch.globalOptions = void 0;
function HW({ children: e, isValidProp: t, ...r }) {
  t && jT(t), r = { ...pt(ny), ...r }, r.isStatic = CT(() => r.isStatic);
  const n = He(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return S(ny.Provider, { value: n, children: e });
}
const ke = 28, xy = 16, IC = ({ children: e }) => {
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
  return a && r ? c = `linear-gradient(to right, transparent 0px, transparent ${ke}px, black ${2 * ke}px, black calc(100% - ${3 * ke}px), transparent calc(100% - ${2 * ke}px), transparent 100%)` : a && !r ? c = `linear-gradient(to right, transparent 0px, transparent ${ke}px, black ${2 * ke}px, black 100%)` : !a && r ? c = `linear-gradient(to right, black 0px, black calc(100% - ${3 * ke}px), transparent calc(100% - ${2 * ke}px), transparent 100%)` : c = "none", K("div", {
    className: "relative",
    children: [S("div", {
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
      children: Array.isArray(e) ? e.map((l, f) => S("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: ke + xy + "px"
        },
        children: l
      }, f)) : e && S("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: ke + xy + "px"
        },
        children: e
      })
    }), a && S(_r, {
      size: "lg",
      compact: !0,
      variant: "outline",
      className: Q("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: s,
      icon: sO,
      label: "Previous",
      hideLabel: !0
    }), r && S(_r, {
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
}, $O = fe.createContext(null);
function Li() {
  const e = fe.useContext($O);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const IO = fe.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: r, plugins: n, className: a, children: i, ...o }, s) => {
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
  }, [c, y]), S($O.Provider, {
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
IO.displayName = "Carousel";
const DO = fe.forwardRef(({ className: e, ...t }, r) => {
  const n = `linear-gradient(to right, transparent 0px, transparent ${ke / 2}px, black ${ke}px, black calc(100% - ${ke}px), transparent calc(100% - ${ke / 2}px), transparent 100%)`, { carouselRef: a, orientation: i } = Li();
  return S("div", {
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
    children: S("div", {
      ref: r,
      className: Q("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    })
  });
});
DO.displayName = "CarouselContent";
const kO = fe.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = Li();
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
  const { orientation: a, scrollPrev: i, canScrollPrev: o } = Li();
  return S("div", {
    className: Q("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: S(_r, {
      compact: !0,
      ref: n,
      size: "sm",
      variant: t,
      className: Q("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Previous",
      icon: MT,
      hideLabel: !0
    })
  });
});
NO.displayName = "CarouselPrevious";
const RO = fe.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollNext: i, canScrollNext: o } = Li();
  return S("div", {
    className: Q("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: S(_r, {
      ref: n,
      size: "sm",
      variant: t,
      compact: !0,
      className: Q("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Next",
      icon: $T,
      hideLabel: !0
    })
  });
});
RO.displayName = "CarouselNext";
const LO = fe.forwardRef(({ ...e }, t) => {
  const { api: r } = Li(), [, n] = fe.useState(!1), a = fe.useRef(null), i = fe.useCallback(() => {
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
LO.displayName = "CarouselDots";
const DC = _s({
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
const kC = ({ children: e, columns: t, showArrows: r = !0, showDots: n = !0, autoplay: a = !1, delay: i = 3e3, showPeek: o = !1, doubleColumns: s }) => {
  const u = C.Children.toArray(e), c = C.useRef(a ? Sh({
    delay: i,
    stopOnInteraction: !0
  }) : void 0), l = () => {
    c.current && c.current.stop();
  }, f = () => {
    c.current && c.current.play();
  };
  return t ? S(IO, {
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
        children: [S(DO, {
          children: C.Children.map(u, (d, p) => {
            const y = s?.find((h) => h.index === p);
            return S(kO, {
              className: DC({
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
        }), r && K(dt, {
          children: [S(NO, {
            label: "Previous"
          }), S(RO, {
            label: "Next"
          })]
        })]
      }), n && S(LO, {})]
    })
  }) : S(IC, {
    children: e
  });
}, KW = ki("Carousel", kC), qO = zt(null);
function VW({ children: e, layout: t }) {
  return S(qO.Provider, {
    value: t,
    children: e
  });
}
function GW() {
  return pt(qO);
}
var Ou, wy;
function NC() {
  if (wy) return Ou;
  wy = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ou = e, Ou;
}
var Su, Oy;
function jh() {
  if (Oy) return Su;
  Oy = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return Su = e, Su;
}
var Au, Sy;
function Cs() {
  if (Sy) return Au;
  Sy = 1;
  var e = jh();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return Au = t, Au;
}
var _u, Ay;
function RC() {
  if (Ay) return _u;
  Ay = 1;
  var e = Cs(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return _u = n, _u;
}
var Pu, _y;
function LC() {
  if (_y) return Pu;
  _y = 1;
  var e = Cs();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return Pu = t, Pu;
}
var Tu, Py;
function qC() {
  if (Py) return Tu;
  Py = 1;
  var e = Cs();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Tu = t, Tu;
}
var Eu, Ty;
function BC() {
  if (Ty) return Eu;
  Ty = 1;
  var e = Cs();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return Eu = t, Eu;
}
var Cu, Ey;
function js() {
  if (Ey) return Cu;
  Ey = 1;
  var e = NC(), t = RC(), r = LC(), n = qC(), a = BC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Cu = i, Cu;
}
var ju, Cy;
function FC() {
  if (Cy) return ju;
  Cy = 1;
  var e = js();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return ju = t, ju;
}
var Mu, jy;
function zC() {
  if (jy) return Mu;
  jy = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Mu = e, Mu;
}
var $u, My;
function WC() {
  if (My) return $u;
  My = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return $u = e, $u;
}
var Iu, $y;
function UC() {
  if ($y) return Iu;
  $y = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Iu = e, Iu;
}
var Du, Iy;
function BO() {
  if (Iy) return Du;
  Iy = 1;
  var e = typeof to == "object" && to && to.Object === Object && to;
  return Du = e, Du;
}
var ku, Dy;
function Qt() {
  if (Dy) return ku;
  Dy = 1;
  var e = BO(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return ku = r, ku;
}
var Nu, ky;
function qi() {
  if (ky) return Nu;
  ky = 1;
  var e = Qt(), t = e.Symbol;
  return Nu = t, Nu;
}
var Ru, Ny;
function HC() {
  if (Ny) return Ru;
  Ny = 1;
  var e = qi(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
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
  return Ru = i, Ru;
}
var Lu, Ry;
function KC() {
  if (Ry) return Lu;
  Ry = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Lu = r, Lu;
}
var qu, Ly;
function dr() {
  if (Ly) return qu;
  Ly = 1;
  var e = qi(), t = HC(), r = KC(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? t(s) : r(s);
  }
  return qu = o, qu;
}
var Bu, qy;
function Er() {
  if (qy) return Bu;
  qy = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Bu = e, Bu;
}
var Fu, By;
function Mh() {
  if (By) return Fu;
  By = 1;
  var e = dr(), t = Er(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var u = e(s);
    return u == n || u == a || u == r || u == i;
  }
  return Fu = o, Fu;
}
var zu, Fy;
function VC() {
  if (Fy) return zu;
  Fy = 1;
  var e = Qt(), t = e["__core-js_shared__"];
  return zu = t, zu;
}
var Wu, zy;
function GC() {
  if (zy) return Wu;
  zy = 1;
  var e = VC(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Wu = r, Wu;
}
var Uu, Wy;
function FO() {
  if (Wy) return Uu;
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
  return Uu = r, Uu;
}
var Hu, Uy;
function YC() {
  if (Uy) return Hu;
  Uy = 1;
  var e = Mh(), t = GC(), r = Er(), n = FO(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, c = s.hasOwnProperty, l = RegExp(
    "^" + u.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(d) {
    if (!r(d) || t(d))
      return !1;
    var p = e(d) ? l : i;
    return p.test(n(d));
  }
  return Hu = f, Hu;
}
var Ku, Hy;
function XC() {
  if (Hy) return Ku;
  Hy = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Ku = e, Ku;
}
var Vu, Ky;
function sn() {
  if (Ky) return Vu;
  Ky = 1;
  var e = YC(), t = XC();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return Vu = r, Vu;
}
var Gu, Vy;
function $h() {
  if (Vy) return Gu;
  Vy = 1;
  var e = sn(), t = Qt(), r = e(t, "Map");
  return Gu = r, Gu;
}
var Yu, Gy;
function Ms() {
  if (Gy) return Yu;
  Gy = 1;
  var e = sn(), t = e(Object, "create");
  return Yu = t, Yu;
}
var Xu, Yy;
function ZC() {
  if (Yy) return Xu;
  Yy = 1;
  var e = Ms();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Xu = t, Xu;
}
var Zu, Xy;
function JC() {
  if (Xy) return Zu;
  Xy = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Zu = e, Zu;
}
var Ju, Zy;
function QC() {
  if (Zy) return Ju;
  Zy = 1;
  var e = Ms(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var s = o[i];
      return s === t ? void 0 : s;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return Ju = a, Ju;
}
var Qu, Jy;
function ej() {
  if (Jy) return Qu;
  Jy = 1;
  var e = Ms(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return Qu = n, Qu;
}
var ec, Qy;
function tj() {
  if (Qy) return ec;
  Qy = 1;
  var e = Ms(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return ec = r, ec;
}
var tc, em;
function rj() {
  if (em) return tc;
  em = 1;
  var e = ZC(), t = JC(), r = QC(), n = ej(), a = tj();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, tc = i, tc;
}
var rc, tm;
function nj() {
  if (tm) return rc;
  tm = 1;
  var e = rj(), t = js(), r = $h();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return rc = n, rc;
}
var nc, rm;
function aj() {
  if (rm) return nc;
  rm = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return nc = e, nc;
}
var ac, nm;
function $s() {
  if (nm) return ac;
  nm = 1;
  var e = aj();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return ac = t, ac;
}
var ic, am;
function ij() {
  if (am) return ic;
  am = 1;
  var e = $s();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return ic = t, ic;
}
var oc, im;
function oj() {
  if (im) return oc;
  im = 1;
  var e = $s();
  function t(r) {
    return e(this, r).get(r);
  }
  return oc = t, oc;
}
var sc, om;
function sj() {
  if (om) return sc;
  om = 1;
  var e = $s();
  function t(r) {
    return e(this, r).has(r);
  }
  return sc = t, sc;
}
var uc, sm;
function uj() {
  if (sm) return uc;
  sm = 1;
  var e = $s();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return uc = t, uc;
}
var cc, um;
function Ih() {
  if (um) return cc;
  um = 1;
  var e = nj(), t = ij(), r = oj(), n = sj(), a = uj();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, cc = i, cc;
}
var lc, cm;
function cj() {
  if (cm) return lc;
  cm = 1;
  var e = js(), t = $h(), r = Ih(), n = 200;
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
  return lc = a, lc;
}
var fc, lm;
function zO() {
  if (lm) return fc;
  lm = 1;
  var e = js(), t = FC(), r = zC(), n = WC(), a = UC(), i = cj();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, fc = o, fc;
}
var dc, fm;
function lj() {
  if (fm) return dc;
  fm = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return dc = t, dc;
}
var pc, dm;
function fj() {
  if (dm) return pc;
  dm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return pc = e, pc;
}
var hc, pm;
function WO() {
  if (pm) return hc;
  pm = 1;
  var e = Ih(), t = lj(), r = fj();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, hc = n, hc;
}
var vc, hm;
function UO() {
  if (hm) return vc;
  hm = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return vc = e, vc;
}
var yc, vm;
function HO() {
  if (vm) return yc;
  vm = 1;
  function e(t, r) {
    return t.has(r);
  }
  return yc = e, yc;
}
var mc, ym;
function KO() {
  if (ym) return mc;
  ym = 1;
  var e = WO(), t = UO(), r = HO(), n = 1, a = 2;
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
  return mc = i, mc;
}
var gc, mm;
function dj() {
  if (mm) return gc;
  mm = 1;
  var e = Qt(), t = e.Uint8Array;
  return gc = t, gc;
}
var bc, gm;
function pj() {
  if (gm) return bc;
  gm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return bc = e, bc;
}
var xc, bm;
function Dh() {
  if (bm) return xc;
  bm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return xc = e, xc;
}
var wc, xm;
function hj() {
  if (xm) return wc;
  xm = 1;
  var e = qi(), t = dj(), r = jh(), n = KO(), a = pj(), i = Dh(), o = 1, s = 2, u = "[object Boolean]", c = "[object Date]", l = "[object Error]", f = "[object Map]", d = "[object Number]", p = "[object RegExp]", y = "[object Set]", h = "[object String]", v = "[object Symbol]", b = "[object ArrayBuffer]", g = "[object DataView]", x = e ? e.prototype : void 0, O = x ? x.valueOf : void 0;
  function m(w, A, _, P, D, T, $) {
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
        var k = n(M(w), M(A), P, D, T, $);
        return $.delete(w), k;
      case v:
        if (O)
          return O.call(w) == O.call(A);
    }
    return !1;
  }
  return wc = m, wc;
}
var Oc, wm;
function VO() {
  if (wm) return Oc;
  wm = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return Oc = e, Oc;
}
var Sc, Om;
function ht() {
  if (Om) return Sc;
  Om = 1;
  var e = Array.isArray;
  return Sc = e, Sc;
}
var Ac, Sm;
function vj() {
  if (Sm) return Ac;
  Sm = 1;
  var e = VO(), t = ht();
  function r(n, a, i) {
    var o = a(n);
    return t(n) ? o : e(o, i(n));
  }
  return Ac = r, Ac;
}
var _c, Am;
function yj() {
  if (Am) return _c;
  Am = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
      var s = t[n];
      r(s, n, t) && (o[i++] = s);
    }
    return o;
  }
  return _c = e, _c;
}
var Pc, _m;
function mj() {
  if (_m) return Pc;
  _m = 1;
  function e() {
    return [];
  }
  return Pc = e, Pc;
}
var Tc, Pm;
function gj() {
  if (Pm) return Tc;
  Pm = 1;
  var e = yj(), t = mj(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return Tc = i, Tc;
}
var Ec, Tm;
function bj() {
  if (Tm) return Ec;
  Tm = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return Ec = e, Ec;
}
var Cc, Em;
function pr() {
  if (Em) return Cc;
  Em = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Cc = e, Cc;
}
var jc, Cm;
function xj() {
  if (Cm) return jc;
  Cm = 1;
  var e = dr(), t = pr(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return jc = n, jc;
}
var Mc, jm;
function kh() {
  if (jm) return Mc;
  jm = 1;
  var e = xj(), t = pr(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return Mc = i, Mc;
}
var Ia = { exports: {} }, $c, Mm;
function wj() {
  if (Mm) return $c;
  Mm = 1;
  function e() {
    return !1;
  }
  return $c = e, $c;
}
Ia.exports;
var $m;
function GO() {
  return $m || ($m = 1, (function(e, t) {
    var r = Qt(), n = wj(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
    e.exports = c;
  })(Ia, Ia.exports)), Ia.exports;
}
var Ic, Im;
function Nh() {
  if (Im) return Ic;
  Im = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Ic = r, Ic;
}
var Dc, Dm;
function Rh() {
  if (Dm) return Dc;
  Dm = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Dc = t, Dc;
}
var kc, km;
function Oj() {
  if (km) return kc;
  km = 1;
  var e = dr(), t = Rh(), r = pr(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", c = "[object Map]", l = "[object Number]", f = "[object Object]", d = "[object RegExp]", p = "[object Set]", y = "[object String]", h = "[object WeakMap]", v = "[object ArrayBuffer]", b = "[object DataView]", g = "[object Float32Array]", x = "[object Float64Array]", O = "[object Int8Array]", m = "[object Int16Array]", w = "[object Int32Array]", A = "[object Uint8Array]", _ = "[object Uint8ClampedArray]", P = "[object Uint16Array]", D = "[object Uint32Array]", T = {};
  T[g] = T[x] = T[O] = T[m] = T[w] = T[A] = T[_] = T[P] = T[D] = !0, T[n] = T[a] = T[v] = T[i] = T[b] = T[o] = T[s] = T[u] = T[c] = T[l] = T[f] = T[d] = T[p] = T[y] = T[h] = !1;
  function $(M) {
    return r(M) && t(M.length) && !!T[e(M)];
  }
  return kc = $, kc;
}
var Nc, Nm;
function YO() {
  if (Nm) return Nc;
  Nm = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Nc = e, Nc;
}
var Da = { exports: {} };
Da.exports;
var Rm;
function Sj() {
  return Rm || (Rm = 1, (function(e, t) {
    var r = BO(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, s = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Da, Da.exports)), Da.exports;
}
var Rc, Lm;
function XO() {
  if (Lm) return Rc;
  Lm = 1;
  var e = Oj(), t = YO(), r = Sj(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return Rc = a, Rc;
}
var Lc, qm;
function Aj() {
  if (qm) return Lc;
  qm = 1;
  var e = bj(), t = kh(), r = ht(), n = GO(), a = Nh(), i = XO(), o = Object.prototype, s = o.hasOwnProperty;
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
  return Lc = u, Lc;
}
var qc, Bm;
function _j() {
  if (Bm) return qc;
  Bm = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return qc = t, qc;
}
var Bc, Fm;
function ZO() {
  if (Fm) return Bc;
  Fm = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Bc = e, Bc;
}
var Fc, zm;
function Pj() {
  if (zm) return Fc;
  zm = 1;
  var e = ZO(), t = e(Object.keys, Object);
  return Fc = t, Fc;
}
var zc, Wm;
function Tj() {
  if (Wm) return zc;
  Wm = 1;
  var e = _j(), t = Pj(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && o.push(s);
    return o;
  }
  return zc = a, zc;
}
var Wc, Um;
function Bi() {
  if (Um) return Wc;
  Um = 1;
  var e = Mh(), t = Rh();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Wc = r, Wc;
}
var Uc, Hm;
function Is() {
  if (Hm) return Uc;
  Hm = 1;
  var e = Aj(), t = Tj(), r = Bi();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return Uc = n, Uc;
}
var Hc, Km;
function Ej() {
  if (Km) return Hc;
  Km = 1;
  var e = vj(), t = gj(), r = Is();
  function n(a) {
    return e(a, r, t);
  }
  return Hc = n, Hc;
}
var Kc, Vm;
function Cj() {
  if (Vm) return Kc;
  Vm = 1;
  var e = Ej(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
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
      var P = i.constructor, D = o.constructor;
      P != D && "constructor" in i && "constructor" in o && !(typeof P == "function" && P instanceof P && typeof D == "function" && D instanceof D) && (O = !1);
    }
    return l.delete(i), l.delete(o), O;
  }
  return Kc = a, Kc;
}
var Vc, Gm;
function jj() {
  if (Gm) return Vc;
  Gm = 1;
  var e = sn(), t = Qt(), r = e(t, "DataView");
  return Vc = r, Vc;
}
var Gc, Ym;
function Mj() {
  if (Ym) return Gc;
  Ym = 1;
  var e = sn(), t = Qt(), r = e(t, "Promise");
  return Gc = r, Gc;
}
var Yc, Xm;
function JO() {
  if (Xm) return Yc;
  Xm = 1;
  var e = sn(), t = Qt(), r = e(t, "Set");
  return Yc = r, Yc;
}
var Xc, Zm;
function $j() {
  if (Zm) return Xc;
  Zm = 1;
  var e = sn(), t = Qt(), r = e(t, "WeakMap");
  return Xc = r, Xc;
}
var Zc, Jm;
function Ij() {
  if (Jm) return Zc;
  Jm = 1;
  var e = jj(), t = $h(), r = Mj(), n = JO(), a = $j(), i = dr(), o = FO(), s = "[object Map]", u = "[object Object]", c = "[object Promise]", l = "[object Set]", f = "[object WeakMap]", d = "[object DataView]", p = o(e), y = o(t), h = o(r), v = o(n), b = o(a), g = i;
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
  }), Zc = g, Zc;
}
var Jc, Qm;
function Dj() {
  if (Qm) return Jc;
  Qm = 1;
  var e = zO(), t = KO(), r = hj(), n = Cj(), a = Ij(), i = ht(), o = GO(), s = XO(), u = 1, c = "[object Arguments]", l = "[object Array]", f = "[object Object]", d = Object.prototype, p = d.hasOwnProperty;
  function y(h, v, b, g, x, O) {
    var m = i(h), w = i(v), A = m ? l : a(h), _ = w ? l : a(v);
    A = A == c ? f : A, _ = _ == c ? f : _;
    var P = A == f, D = _ == f, T = A == _;
    if (T && o(h)) {
      if (!o(v))
        return !1;
      m = !0, P = !1;
    }
    if (T && !P)
      return O || (O = new e()), m || s(h) ? t(h, v, b, g, x, O) : r(h, v, A, b, g, x, O);
    if (!(b & u)) {
      var $ = P && p.call(h, "__wrapped__"), M = D && p.call(v, "__wrapped__");
      if ($ || M) {
        var j = $ ? h.value() : h, I = M ? v.value() : v;
        return O || (O = new e()), x(j, I, b, g, O);
      }
    }
    return T ? (O || (O = new e()), n(h, v, b, g, x, O)) : !1;
  }
  return Jc = y, Jc;
}
var Qc, eg;
function Lh() {
  if (eg) return Qc;
  eg = 1;
  var e = Dj(), t = pr();
  function r(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, o, r, s);
  }
  return Qc = r, Qc;
}
var el, tg;
function kj() {
  if (tg) return el;
  tg = 1;
  var e = Lh();
  function t(r, n) {
    return e(r, n);
  }
  return el = t, el;
}
var Nj = kj();
const en = /* @__PURE__ */ _e(Nj), Rj = [], Lj = (e) => {
  const { open: t, onOpenChange: r, ...n } = e, a = Rj.reduce((i, o) => {
    const { [o]: s, ...u } = i;
    return u;
  }, n);
  return S(IT, {
    ...a,
    open: t,
    onOpenChange: r,
    align: e.align || "end"
  });
}, QO = ki("Dropdown", Lj), qj = ({ items: e, children: t }) => {
  const [r, n] = he(!1);
  return K(DT, {
    open: r,
    onOpenChange: n,
    children: [S(kT, {
      asChild: !0,
      children: t || S(_r, {
        label: "Other actions",
        icon: cO,
        variant: "outline",
        size: "lg",
        pressed: r,
        noTitle: !0
      })
    }), S(NT, {
      className: "bg-f1-background-overlay"
    }), S(RT, {
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
          className: Q("flex w-full items-start gap-1.5", a.critical && "text-f1-foreground-critical", "text-f1-foreground no-underline hover:cursor-pointer"),
          children: S(LT, {
            item: a
          })
        }, `link-${i}`) : K("button", {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), a.onClick?.(), n(!1);
          },
          className: "flex w-full items-center gap-2 p-3",
          children: [a.icon && S("span", {
            className: Q("h-5 w-5 text-f1-icon", a.critical && "text-f1-icon-critical"),
            children: S(ct, {
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
}, YW = ki("MobileDropdown", qj), Bj = _s({
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
}), Fj = ({ type: e, size: t, "aria-label": r, "aria-labelledby": n }) => {
  const a = {
    critical: fO,
    warning: hh,
    info: lO,
    positive: Ps
  };
  return S("div", {
    className: Bj({
      type: e,
      size: t
    }),
    "aria-label": r,
    "aria-labelledby": n,
    role: "alert",
    children: S(ct, {
      icon: a[e],
      size: t
    })
  });
}, zj = at(Fj);
function Wj(e, t) {
  const r = xn(e), n = xn(t), a = r.getTime() - n.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function qh(e) {
  return qT(e, Date.now());
}
function Uj(e) {
  return (t) => {
    const n = (e ? Math[e] : Math.trunc)(t);
    return n === 0 ? 0 : n;
  };
}
function Hj(e, t, r) {
  const n = BT(), a = r?.locale ?? n.locale ?? FT, i = Wj(e, t);
  if (isNaN(i))
    throw new RangeError("Invalid time value");
  const o = Object.assign({}, r, {
    addSuffix: r?.addSuffix,
    comparison: i
  });
  let s, u;
  i > 0 ? (s = xn(t), u = xn(e)) : (s = xn(e), u = xn(t));
  const c = Uj(r?.roundingMethod ?? "round"), l = u.getTime() - s.getTime(), f = l / uy, d = ay(u) - ay(s), p = (l - d) / uy, y = r?.unit;
  let h;
  if (y ? h = y : f < 1 ? h = "second" : f < 60 ? h = "minute" : f < iy ? h = "hour" : p < oy ? h = "day" : p < sy ? h = "month" : h = "year", h === "second") {
    const v = c(l / 1e3);
    return a.formatDistance("xSeconds", v, o);
  } else if (h === "minute") {
    const v = c(f);
    return a.formatDistance("xMinutes", v, o);
  } else if (h === "hour") {
    const v = c(f / 60);
    return a.formatDistance("xHours", v, o);
  } else if (h === "day") {
    const v = c(p / iy);
    return a.formatDistance("xDays", v, o);
  } else if (h === "month") {
    const v = c(p / oy);
    return v === 12 && y !== "month" ? a.formatDistance("xYears", 1, o) : a.formatDistance("xMonths", v, o);
  } else {
    const v = c(p / sy);
    return a.formatDistance("xYears", v, o);
  }
}
function Kj(e, t) {
  return Hj(e, qh(e), t);
}
function eS(e) {
  return dO(e, qh(e));
}
function tS(e) {
  return dO(e, xo(qh(e), 1));
}
function xa(e, t) {
  return zT(e, -t);
}
function rg(e, t) {
  return WT(e, -t);
}
function XW(e) {
  return Ga(e, "p");
}
function ZW(e) {
  return Ga(e, "HH:mm");
}
function Vj(e) {
  return Ga(e, "LLL");
}
function Gj(e) {
  return e.getDate();
}
function ng(e, t = !0) {
  return Kj(e, { addSuffix: t });
}
function JW(e, { yesterdayRelative: t = !0 } = {}) {
  return eS(e) ? ng(e) : tS(e) ? t ? ng(e) : Ga(e, "p") : Ga(e, "PPPp");
}
const QW = (e, t) => {
  const r = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return e.forEach((n) => {
    const a = n[t], i = Math.abs(UT(a, /* @__PURE__ */ new Date()));
    eS(a) ? r.today.push(n) : tS(a) ? r.yesterday.push(n) : i <= 7 ? r.lastWeek.push(n) : i <= 30 ? r.lastMonth.push(n) : r[a.getFullYear()] = [...r[a.getFullYear()] || [], n];
  }), r;
}, Yj = ({ date: e, "aria-label": t, "aria-labelledby": r }) => {
  const n = Gj(e), a = Vj(e);
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
}, e7 = at(Yj);
function rS(e, t) {
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
const Xj = _s({
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
}), Zj = ({ count: e, size: t = "md", type: r, list: n, avatarType: a = "person" }) => {
  const i = S("div", {
    className: Q("cursor-default font-medium transition hover:bg-f1-background-secondary-hover", Xj({
      size: t,
      type: r
    })),
    children: t === "xs" ? S(ct, {
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
      children: K(vh, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [n.map((o, s) => K("div", {
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
            children: rS(a, o)
          })]
        }, s)), S(yO, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
}, Jj = ["xs", "sm", "md"], Qj = {
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
}, nS = ({ avatars: e, size: t = "md", type: r, noTooltip: n = !1, remainingCount: a, max: i }) => {
  if (t && !Jj.includes(t)) {
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
      const f = rS(r, c), d = S("div", {
        className: "flex h-fit w-fit shrink-0 items-center justify-center",
        style: l !== e.length - 1 ? {
          clipPath: Qj[r === "person" ? "rounded" : "base"][t]
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
      children: S(Zj, {
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
nS.displayName = "AvatarList";
const e2 = at(nS), t2 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let r2 = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += t2[r[e] & 63];
  return t;
};
var tl, ag;
function aa() {
  if (ag) return tl;
  ag = 1;
  var e = dr(), t = pr(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return tl = n, tl;
}
var rl, ig;
function Bh() {
  if (ig) return rl;
  ig = 1;
  var e = ht(), t = aa(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || t(i) ? !0 : n.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return rl = a, rl;
}
var nl, og;
function aS() {
  if (og) return nl;
  og = 1;
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
  return r.Cache = e, nl = r, nl;
}
var al, sg;
function n2() {
  if (sg) return al;
  sg = 1;
  var e = aS(), t = 500;
  function r(n) {
    var a = e(n, function(o) {
      return i.size === t && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return al = r, al;
}
var il, ug;
function a2() {
  if (ug) return il;
  ug = 1;
  var e = n2(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, s, u, c) {
      i.push(u ? c.replace(r, "$1") : s || o);
    }), i;
  });
  return il = n, il;
}
var ol, cg;
function Fh() {
  if (cg) return ol;
  cg = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return ol = e, ol;
}
var sl, lg;
function i2() {
  if (lg) return sl;
  lg = 1;
  var e = qi(), t = Fh(), r = ht(), n = aa(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
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
  return sl = o, sl;
}
var ul, fg;
function iS() {
  if (fg) return ul;
  fg = 1;
  var e = i2();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return ul = t, ul;
}
var cl, dg;
function oS() {
  if (dg) return cl;
  dg = 1;
  var e = ht(), t = Bh(), r = a2(), n = iS();
  function a(i, o) {
    return e(i) ? i : t(i, o) ? [i] : r(n(i));
  }
  return cl = a, cl;
}
var ll, pg;
function Ds() {
  if (pg) return ll;
  pg = 1;
  var e = aa();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return ll = t, ll;
}
var fl, hg;
function zh() {
  if (hg) return fl;
  hg = 1;
  var e = oS(), t = Ds();
  function r(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[t(a[i++])];
    return i && i == o ? n : void 0;
  }
  return fl = r, fl;
}
var dl, vg;
function sS() {
  if (vg) return dl;
  vg = 1;
  var e = zh();
  function t(r, n, a) {
    var i = r == null ? void 0 : e(r, n);
    return i === void 0 ? a : i;
  }
  return dl = t, dl;
}
var o2 = sS();
const xt = /* @__PURE__ */ _e(o2);
var pl, yg;
function s2() {
  if (yg) return pl;
  yg = 1;
  function e(t) {
    return t == null;
  }
  return pl = e, pl;
}
var u2 = s2();
const le = /* @__PURE__ */ _e(u2);
var hl, mg;
function c2() {
  if (mg) return hl;
  mg = 1;
  var e = dr(), t = ht(), r = pr(), n = "[object String]";
  function a(i) {
    return typeof i == "string" || !t(i) && r(i) && e(i) == n;
  }
  return hl = a, hl;
}
var l2 = c2();
const Fi = /* @__PURE__ */ _e(l2);
var f2 = Mh();
const ue = /* @__PURE__ */ _e(f2);
var d2 = Er();
const ia = /* @__PURE__ */ _e(d2);
var ro = { exports: {} }, ge = {};
var gg;
function p2() {
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
function h2() {
  return bg || (bg = 1, process.env.NODE_ENV !== "production" && (function() {
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
    var w = o, A = i, _ = e, P = u, D = r, T = d, $ = f, M = t, j = a, I = n, k = c, R = l, L = !1, z = !1;
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
    be.ContextConsumer = w, be.ContextProvider = A, be.Element = _, be.ForwardRef = P, be.Fragment = D, be.Lazy = T, be.Memo = $, be.Portal = M, be.Profiler = j, be.StrictMode = I, be.Suspense = k, be.SuspenseList = R, be.isAsyncMode = N, be.isConcurrentMode = B, be.isContextConsumer = q, be.isContextProvider = H, be.isElement = X, be.isForwardRef = te, be.isFragment = ne, be.isLazy = ee, be.isMemo = J, be.isPortal = U, be.isProfiler = V, be.isStrictMode = Z, be.isSuspense = E, be.isSuspenseList = Y, be.isValidElementType = O, be.typeOf = m;
  })()), be;
}
var xg;
function v2() {
  return xg || (xg = 1, process.env.NODE_ENV === "production" ? ro.exports = p2() : ro.exports = h2()), ro.exports;
}
var y2 = v2(), vl, wg;
function uS() {
  if (wg) return vl;
  wg = 1;
  var e = dr(), t = pr(), r = "[object Number]";
  function n(a) {
    return typeof a == "number" || t(a) && e(a) == r;
  }
  return vl = n, vl;
}
var yl, Og;
function m2() {
  if (Og) return yl;
  Og = 1;
  var e = uS();
  function t(r) {
    return e(r) && r != +r;
  }
  return yl = t, yl;
}
var g2 = m2();
const oa = /* @__PURE__ */ _e(g2);
var b2 = uS();
const x2 = /* @__PURE__ */ _e(b2);
var ot = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, zr = function(t) {
  return Fi(t) && t.indexOf("%") === t.length - 1;
}, G = function(t) {
  return x2(t) && !oa(t);
}, Ge = function(t) {
  return G(t) || Fi(t);
}, w2 = 0, un = function(t) {
  var r = ++w2;
  return "".concat(t || "").concat(r);
}, st = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!G(t) && !Fi(t))
    return n;
  var i;
  if (zr(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return oa(i) && (i = n), a && i > r && (i = r), i;
}, wr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, O2 = function(t) {
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
function So(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : xt(n, t)) === r;
  });
}
var t7 = function(t) {
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
function Rd(e) {
  "@babel/helpers - typeof";
  return Rd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rd(e);
}
var S2 = ["viewBox", "children"], A2 = [
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
], Sg = ["points", "pathLength"], ml = {
  svg: S2,
  polygon: Sg,
  polyline: Sg
}, Wh = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Ao = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Rt(t) && (n = t.props), !ia(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    Wh.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, _2 = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, tn = function(t, r, n) {
  if (!ia(t) || Rd(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    Wh.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = _2(o, r, n));
  }), a;
}, P2 = ["children"], T2 = ["children"];
function Ag(e, t) {
  if (e == null) return {};
  var r = E2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function E2(e, t) {
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
}, sr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Pg = null, gl = null, Uh = function e(t) {
  if (t === Pg && Array.isArray(gl))
    return gl;
  var r = [];
  return Vr.forEach(t, function(n) {
    le(n) || (y2.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), gl = r, Pg = t, r;
};
function wt(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return sr(a);
  }) : n = [sr(t)], Uh(e).forEach(function(a) {
    var i = xt(a, "type.displayName") || xt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function mt(e, t) {
  var r = wt(e, t);
  return r && r[0];
}
var Tg = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!G(n) || n <= 0 || !G(a) || a <= 0);
}, C2 = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], j2 = function(t) {
  return t && t.type && Fi(t.type) && C2.indexOf(t.type) >= 0;
}, cS = function(t) {
  return t && Ld(t) === "object" && "clipDot" in t;
}, M2 = function(t, r, n, a) {
  var i, o = (i = ml?.[a]) !== null && i !== void 0 ? i : [];
  return !ue(t) && (a && o.includes(r) || A2.includes(r)) || n && Wh.includes(r);
}, ie = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ Rt(t) && (a = t.props), !ia(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var s;
    M2((s = a) === null || s === void 0 ? void 0 : s[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, qd = function e(t, r) {
  if (t === r)
    return !0;
  var n = Vr.count(t);
  if (n !== Vr.count(r))
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
    var n = t.props || {}, a = n.children, i = Ag(n, P2), o = r.props || {}, s = o.children, u = Ag(o, T2);
    return a && s ? Pn(i, u) && qd(a, s) : !a && !s ? Pn(i, u) : !1;
  }
  return !1;
}, Cg = function(t, r) {
  var n = [], a = {};
  return Uh(t).forEach(function(i, o) {
    if (j2(i))
      n.push(i);
    else if (i) {
      var s = sr(i.type), u = r[s] || {}, c = u.handler, l = u.once;
      if (c && (!l || !a[s])) {
        var f = c(i, s, o);
        n.push(f), a[s] = !0;
      }
    }
  }), n;
}, $2 = function(t) {
  var r = t && t.type;
  return r && _g[r] ? _g[r] : null;
}, I2 = function(t, r) {
  return Uh(r).indexOf(t);
}, D2 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
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
function k2(e, t) {
  if (e == null) return {};
  var r = N2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function N2(e, t) {
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
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, s = e.title, u = e.desc, c = k2(e, D2), l = a || {
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
var R2 = ["children", "className"];
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
function L2(e, t) {
  if (e == null) return {};
  var r = q2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function q2(e, t) {
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
  var r = e.children, n = e.className, a = L2(e, R2), i = de("recharts-layer", n);
  return /* @__PURE__ */ C.createElement("g", zd({
    className: i
  }, ie(a, !0), {
    ref: t
  }), r);
}), B2 = process.env.NODE_ENV !== "production", qt = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (B2 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
}, bl, jg;
function F2() {
  if (jg) return bl;
  jg = 1;
  function e(t, r, n) {
    var a = -1, i = t.length;
    r < 0 && (r = -r > i ? 0 : i + r), n = n > i ? i : n, n < 0 && (n += i), i = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = t[a + r];
    return o;
  }
  return bl = e, bl;
}
var xl, Mg;
function z2() {
  if (Mg) return xl;
  Mg = 1;
  var e = F2();
  function t(r, n, a) {
    var i = r.length;
    return a = a === void 0 ? i : a, !n && a >= i ? r : e(r, n, a);
  }
  return xl = t, xl;
}
var wl, $g;
function lS() {
  if ($g) return wl;
  $g = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + a + i + "]");
  function u(c) {
    return s.test(c);
  }
  return wl = u, wl;
}
var Ol, Ig;
function W2() {
  if (Ig) return Ol;
  Ig = 1;
  function e(t) {
    return t.split("");
  }
  return Ol = e, Ol;
}
var Sl, Dg;
function U2() {
  if (Dg) return Sl;
  Dg = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + a + "]", u = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + s + "|" + u + ")", l = "[^" + e + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "\\u200d", y = c + "?", h = "[" + i + "]?", v = "(?:" + p + "(?:" + [l, f, d].join("|") + ")" + h + y + ")*", b = h + y + v, g = "(?:" + [l + s + "?", s, f, d, o].join("|") + ")", x = RegExp(u + "(?=" + u + ")|" + g + b, "g");
  function O(m) {
    return m.match(x) || [];
  }
  return Sl = O, Sl;
}
var Al, kg;
function H2() {
  if (kg) return Al;
  kg = 1;
  var e = W2(), t = lS(), r = U2();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return Al = n, Al;
}
var _l, Ng;
function K2() {
  if (Ng) return _l;
  Ng = 1;
  var e = z2(), t = lS(), r = H2(), n = iS();
  function a(i) {
    return function(o) {
      o = n(o);
      var s = t(o) ? r(o) : void 0, u = s ? s[0] : o.charAt(0), c = s ? e(s, 1).join("") : o.slice(1);
      return u[i]() + c;
    };
  }
  return _l = a, _l;
}
var Pl, Rg;
function V2() {
  if (Rg) return Pl;
  Rg = 1;
  var e = K2(), t = e("toUpperCase");
  return Pl = t, Pl;
}
var G2 = V2();
const ks = /* @__PURE__ */ _e(G2);
function Ce(e) {
  return function() {
    return e;
  };
}
const fS = Math.cos, _o = Math.sin, Wt = Math.sqrt, Po = Math.PI, Ns = 2 * Po, Wd = Math.PI, Ud = 2 * Wd, qr = 1e-6, Y2 = Ud - qr;
function dS(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function X2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return dS;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class Z2 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? dS : X2(t);
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
    else if (d > qr) if (!(Math.abs(f * u - c * l) > qr) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, y = a - s, h = u * u + c * c, v = p * p + y * y, b = Math.sqrt(h), g = Math.sqrt(d), x = i * Math.tan((Wd - Math.acos((h + d - v) / (2 * b * g))) / 2), O = x / g, m = x / b;
      Math.abs(O - 1) > qr && this._append`L${t + O * l},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * p > l * y)},${this._x1 = t + m * u},${this._y1 = r + m * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(a), u = n * Math.sin(a), c = t + s, l = r + u, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > qr || Math.abs(this._y1 - l) > qr) && this._append`L${c},${l}`, n && (d < 0 && (d = d % Ud + Ud), d > Y2 ? this._append`A${n},${n},0,1,${f},${t - s},${r - u}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = l}` : d > qr && this._append`A${n},${n},0,${+(d >= Wd)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
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
  }, () => new Z2(t);
}
function Kh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
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
function Rs(e) {
  return new pS(e);
}
function hS(e) {
  return e[0];
}
function vS(e) {
  return e[1];
}
function yS(e, t) {
  var r = Ce(!0), n = null, a = Rs, i = null, o = Hh(s);
  e = typeof e == "function" ? e : e === void 0 ? hS : Ce(e), t = typeof t == "function" ? t : t === void 0 ? vS : Ce(t);
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
function no(e, t, r) {
  var n = null, a = Ce(!0), i = null, o = Rs, s = null, u = Hh(c);
  e = typeof e == "function" ? e : e === void 0 ? hS : Ce(+e), t = typeof t == "function" ? t : Ce(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? vS : Ce(+r);
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
    return yS().defined(a).curve(o).context(i);
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
class mS {
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
function J2(e) {
  return new mS(e, !0);
}
function Q2(e) {
  return new mS(e, !1);
}
const Vh = {
  draw(e, t) {
    const r = Wt(t / Po);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ns);
  }
}, eM = {
  draw(e, t) {
    const r = Wt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, gS = Wt(1 / 3), tM = gS * 2, rM = {
  draw(e, t) {
    const r = Wt(t / tM), n = r * gS;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, nM = {
  draw(e, t) {
    const r = Wt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, aM = 0.8908130915292852, bS = _o(Po / 10) / _o(7 * Po / 10), iM = _o(Ns / 10) * bS, oM = -fS(Ns / 10) * bS, sM = {
  draw(e, t) {
    const r = Wt(t * aM), n = iM * r, a = oM * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = Ns * i / 5, s = fS(o), u = _o(o);
      e.lineTo(u * r, -s * r), e.lineTo(s * n - u * a, u * n + s * a);
    }
    e.closePath();
  }
}, Tl = Wt(3), uM = {
  draw(e, t) {
    const r = -Wt(t / (Tl * 3));
    e.moveTo(0, r * 2), e.lineTo(-Tl * r, -r), e.lineTo(Tl * r, -r), e.closePath();
  }
}, Ot = -0.5, St = Wt(3) / 2, Hd = 1 / Wt(12), cM = (Hd / 2 + 1) * 3, lM = {
  draw(e, t) {
    const r = Wt(t / cM), n = r / 2, a = r * Hd, i = n, o = r * Hd + r, s = -i, u = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(s, u), e.lineTo(Ot * n - St * a, St * n + Ot * a), e.lineTo(Ot * i - St * o, St * i + Ot * o), e.lineTo(Ot * s - St * u, St * s + Ot * u), e.lineTo(Ot * n + St * a, Ot * a - St * n), e.lineTo(Ot * i + St * o, Ot * o - St * i), e.lineTo(Ot * s + St * u, Ot * u - St * s), e.closePath();
  }
};
function fM(e, t) {
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
function To() {
}
function Eo(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function xS(e) {
  this._context = e;
}
xS.prototype = {
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
        Eo(this, this._x1, this._y1);
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
        Eo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function dM(e) {
  return new xS(e);
}
function wS(e) {
  this._context = e;
}
wS.prototype = {
  areaStart: To,
  areaEnd: To,
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
        Eo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function pM(e) {
  return new wS(e);
}
function OS(e) {
  this._context = e;
}
OS.prototype = {
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
        Eo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function hM(e) {
  return new OS(e);
}
function SS(e) {
  this._context = e;
}
SS.prototype = {
  areaStart: To,
  areaEnd: To,
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
function vM(e) {
  return new SS(e);
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
function El(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, i - s, o - s * r, i, o);
}
function Co(e) {
  this._context = e;
}
Co.prototype = {
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
        El(this, this._t0, Bg(this, this._t0));
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
          this._point = 3, El(this, Bg(this, r = qg(this, e, t)), r);
          break;
        default:
          El(this, this._t0, r = qg(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function AS(e) {
  this._context = new _S(e);
}
(AS.prototype = Object.create(Co.prototype)).point = function(e, t) {
  Co.prototype.point.call(this, t, e);
};
function _S(e) {
  this._context = e;
}
_S.prototype = {
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
function yM(e) {
  return new Co(e);
}
function mM(e) {
  return new AS(e);
}
function PS(e) {
  this._context = e;
}
PS.prototype = {
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
function gM(e) {
  return new PS(e);
}
function Ls(e, t) {
  this._context = e, this._t = t;
}
Ls.prototype = {
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
function bM(e) {
  return new Ls(e, 0.5);
}
function xM(e) {
  return new Ls(e, 0);
}
function wM(e) {
  return new Ls(e, 1);
}
function jn(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, s = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function Kd(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function OM(e, t) {
  return e[t];
}
function SM(e) {
  const t = [];
  return t.key = e, t;
}
function AM() {
  var e = Ce([]), t = Kd, r = jn, n = OM;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), SM), s, u = o.length, c = -1, l;
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
    return arguments.length ? (r = i ?? jn, a) : r;
  }, a;
}
function _M(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    jn(e, t);
  }
}
function PM(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, s = 0; o < a; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    jn(e, t);
  }
}
function TM(e, t) {
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
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
}
var EM = ["type", "size", "sizeType"];
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
      CM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CM(e, t, r) {
  return t = jM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jM(e) {
  var t = MM(e, "string");
  return Ja(t) == "symbol" ? t : t + "";
}
function MM(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $M(e, t) {
  if (e == null) return {};
  var r = IM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function IM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var TS = {
  symbolCircle: Vh,
  symbolCross: eM,
  symbolDiamond: rM,
  symbolSquare: nM,
  symbolStar: sM,
  symbolTriangle: uM,
  symbolWye: lM
}, DM = Math.PI / 180, kM = function(t) {
  var r = "symbol".concat(ks(t));
  return TS[r] || Vh;
}, NM = function(t, r, n) {
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
      var a = 18 * DM;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, RM = function(t, r) {
  TS["symbol".concat(ks(t))] = r;
}, Gh = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, s = o === void 0 ? "area" : o, u = $M(t, EM), c = Wg(Wg({}, u), {}, {
    type: n,
    size: i,
    sizeType: s
  }), l = function() {
    var v = kM(n), b = fM().type(v).size(NM(i, s, n));
    return b();
  }, f = c.className, d = c.cx, p = c.cy, y = ie(c, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ C.createElement("path", Vd({}, y, {
    className: de("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: l()
  })) : null;
};
Gh.registerSymbol = RM;
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e);
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
function LM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ug(Object(r), !0).forEach(function(n) {
      Qa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BM(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, CS(n.key), n);
  }
}
function FM(e, t, r) {
  return t && BM(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zM(e, t, r) {
  return t = jo(t), WM(e, ES() ? Reflect.construct(t, r || [], jo(e).constructor) : t.apply(e, r));
}
function WM(e, t) {
  if (t && (Mn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return UM(e);
}
function UM(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ES() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ES = function() {
    return !!e;
  })();
}
function jo(e) {
  return jo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jo(e);
}
function HM(e, t) {
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
  return t = CS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CS(e) {
  var t = KM(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function KM(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var At = 32, Yh = /* @__PURE__ */ (function(e) {
  function t() {
    return qM(this, t), zM(this, t, arguments);
  }
  return HM(t, e), FM(t, [{
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
          var c = LM({}, n);
          return delete c.legendIcon, /* @__PURE__ */ C.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ C.createElement(Gh, {
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
        var h = p.formatter || u, v = de(Qa(Qa({
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
        return /* @__PURE__ */ C.createElement("li", Gd({
          className: v,
          style: f,
          key: "legend-item-".concat(y)
        }, tn(n.props, p, y)), /* @__PURE__ */ C.createElement(Fd, {
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
Qa(Yh, "displayName", "Legend");
Qa(Yh, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Cl, Hg;
function VM() {
  if (Hg) return Cl;
  Hg = 1;
  var e = zO(), t = Lh(), r = 1, n = 2;
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
  return Cl = a, Cl;
}
var jl, Kg;
function jS() {
  if (Kg) return jl;
  Kg = 1;
  var e = Er();
  function t(r) {
    return r === r && !e(r);
  }
  return jl = t, jl;
}
var Ml, Vg;
function GM() {
  if (Vg) return Ml;
  Vg = 1;
  var e = jS(), t = Is();
  function r(n) {
    for (var a = t(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return Ml = r, Ml;
}
var $l, Gg;
function MS() {
  if (Gg) return $l;
  Gg = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return $l = e, $l;
}
var Il, Yg;
function YM() {
  if (Yg) return Il;
  Yg = 1;
  var e = VM(), t = GM(), r = MS();
  function n(a) {
    var i = t(a);
    return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return Il = n, Il;
}
var Dl, Xg;
function XM() {
  if (Xg) return Dl;
  Xg = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Dl = e, Dl;
}
var kl, Zg;
function ZM() {
  if (Zg) return kl;
  Zg = 1;
  var e = oS(), t = kh(), r = ht(), n = Nh(), a = Rh(), i = Ds();
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
var Nl, Jg;
function JM() {
  if (Jg) return Nl;
  Jg = 1;
  var e = XM(), t = ZM();
  function r(n, a) {
    return n != null && t(n, a, e);
  }
  return Nl = r, Nl;
}
var Rl, Qg;
function QM() {
  if (Qg) return Rl;
  Qg = 1;
  var e = Lh(), t = sS(), r = JM(), n = Bh(), a = jS(), i = MS(), o = Ds(), s = 1, u = 2;
  function c(l, f) {
    return n(l) && a(f) ? i(o(l), f) : function(d) {
      var p = t(d, l);
      return p === void 0 && p === f ? r(d, l) : e(f, p, s | u);
    };
  }
  return Rl = c, Rl;
}
var Ll, eb;
function sa() {
  if (eb) return Ll;
  eb = 1;
  function e(t) {
    return t;
  }
  return Ll = e, Ll;
}
var ql, tb;
function e$() {
  if (tb) return ql;
  tb = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return ql = e, ql;
}
var Bl, rb;
function t$() {
  if (rb) return Bl;
  rb = 1;
  var e = zh();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Bl = t, Bl;
}
var Fl, nb;
function r$() {
  if (nb) return Fl;
  nb = 1;
  var e = e$(), t = t$(), r = Bh(), n = Ds();
  function a(i) {
    return r(i) ? e(n(i)) : t(i);
  }
  return Fl = a, Fl;
}
var zl, ab;
function er() {
  if (ab) return zl;
  ab = 1;
  var e = YM(), t = QM(), r = sa(), n = ht(), a = r$();
  function i(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : a(o);
  }
  return zl = i, zl;
}
var Wl, ib;
function $S() {
  if (ib) return Wl;
  ib = 1;
  function e(t, r, n, a) {
    for (var i = t.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return Wl = e, Wl;
}
var Ul, ob;
function n$() {
  if (ob) return Ul;
  ob = 1;
  function e(t) {
    return t !== t;
  }
  return Ul = e, Ul;
}
var Hl, sb;
function a$() {
  if (sb) return Hl;
  sb = 1;
  function e(t, r, n) {
    for (var a = n - 1, i = t.length; ++a < i; )
      if (t[a] === r)
        return a;
    return -1;
  }
  return Hl = e, Hl;
}
var Kl, ub;
function i$() {
  if (ub) return Kl;
  ub = 1;
  var e = $S(), t = n$(), r = a$();
  function n(a, i, o) {
    return i === i ? r(a, i, o) : e(a, t, o);
  }
  return Kl = n, Kl;
}
var Vl, cb;
function o$() {
  if (cb) return Vl;
  cb = 1;
  var e = i$();
  function t(r, n) {
    var a = r == null ? 0 : r.length;
    return !!a && e(r, n, 0) > -1;
  }
  return Vl = t, Vl;
}
var Gl, lb;
function s$() {
  if (lb) return Gl;
  lb = 1;
  function e(t, r, n) {
    for (var a = -1, i = t == null ? 0 : t.length; ++a < i; )
      if (n(r, t[a]))
        return !0;
    return !1;
  }
  return Gl = e, Gl;
}
var Yl, fb;
function u$() {
  if (fb) return Yl;
  fb = 1;
  function e() {
  }
  return Yl = e, Yl;
}
var Xl, db;
function c$() {
  if (db) return Xl;
  db = 1;
  var e = JO(), t = u$(), r = Dh(), n = 1 / 0, a = e && 1 / r(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : t;
  return Xl = a, Xl;
}
var Zl, pb;
function l$() {
  if (pb) return Zl;
  pb = 1;
  var e = WO(), t = o$(), r = s$(), n = HO(), a = c$(), i = Dh(), o = 200;
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
  return Zl = s, Zl;
}
var Jl, hb;
function f$() {
  if (hb) return Jl;
  hb = 1;
  var e = er(), t = l$();
  function r(n, a) {
    return n && n.length ? t(n, e(a, 2)) : [];
  }
  return Jl = r, Jl;
}
var d$ = f$();
const vb = /* @__PURE__ */ _e(d$);
function IS(e, t, r) {
  return t === !0 ? vb(e, r) : ue(t) ? vb(e, t) : e;
}
function $n(e) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $n(e);
}
var p$ = ["ref"];
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
function rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yb(Object(r), !0).forEach(function(n) {
      qs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function h$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, kS(n.key), n);
  }
}
function v$(e, t, r) {
  return t && mb(e.prototype, t), r && mb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function y$(e, t, r) {
  return t = Mo(t), m$(e, DS() ? Reflect.construct(t, r || [], Mo(e).constructor) : t.apply(e, r));
}
function m$(e, t) {
  if (t && ($n(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return g$(e);
}
function g$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function DS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (DS = function() {
    return !!e;
  })();
}
function Mo(e) {
  return Mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mo(e);
}
function b$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xd(e, t);
}
function Xd(e, t) {
  return Xd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xd(e, t);
}
function qs(e, t, r) {
  return t = kS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kS(e) {
  var t = x$(e, "string");
  return $n(t) == "symbol" ? t : t + "";
}
function x$(e, t) {
  if ($n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function w$(e, t) {
  if (e == null) return {};
  var r = O$(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function O$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function S$(e) {
  return e.value;
}
function A$(e, t) {
  if (/* @__PURE__ */ C.isValidElement(e))
    return /* @__PURE__ */ C.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ C.createElement(e, t);
  t.ref;
  var r = w$(t, p$);
  return /* @__PURE__ */ C.createElement(Yh, r);
}
var gb = 1, Yr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    h$(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = y$(this, t, [].concat(a)), qs(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return b$(t, e), v$(t, [{
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
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? rr({}, this.lastBoundingBox) : {
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
      return rr(rr({}, f), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, s = a.height, u = a.wrapperStyle, c = a.payloadUniqBy, l = a.payload, f = rr(rr({
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
      }, A$(i, rr(rr({}, this.props), {}, {
        payload: IS(l, c, S$)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, a) {
      var i = rr(rr({}, this.defaultProps), n.props), o = i.layout;
      return o === "vertical" && G(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || a
      } : null;
    }
  }]);
})(Mt);
qs(Yr, "displayName", "Legend");
qs(Yr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Ql, bb;
function _$() {
  if (bb) return Ql;
  bb = 1;
  var e = qi(), t = kh(), r = ht(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return r(i) || t(i) || !!(n && i && i[n]);
  }
  return Ql = a, Ql;
}
var ef, xb;
function NS() {
  if (xb) return ef;
  xb = 1;
  var e = VO(), t = _$();
  function r(n, a, i, o, s) {
    var u = -1, c = n.length;
    for (i || (i = t), s || (s = []); ++u < c; ) {
      var l = n[u];
      a > 0 && i(l) ? a > 1 ? r(l, a - 1, i, o, s) : e(s, l) : o || (s[s.length] = l);
    }
    return s;
  }
  return ef = r, ef;
}
var tf, wb;
function P$() {
  if (wb) return tf;
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
  return tf = e, tf;
}
var rf, Ob;
function T$() {
  if (Ob) return rf;
  Ob = 1;
  var e = P$(), t = e();
  return rf = t, rf;
}
var nf, Sb;
function RS() {
  if (Sb) return nf;
  Sb = 1;
  var e = T$(), t = Is();
  function r(n, a) {
    return n && e(n, a, t);
  }
  return nf = r, nf;
}
var af, Ab;
function E$() {
  if (Ab) return af;
  Ab = 1;
  var e = Bi();
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
  return af = t, af;
}
var of, _b;
function Xh() {
  if (_b) return of;
  _b = 1;
  var e = RS(), t = E$(), r = t(e);
  return of = r, of;
}
var sf, Pb;
function LS() {
  if (Pb) return sf;
  Pb = 1;
  var e = Xh(), t = Bi();
  function r(n, a) {
    var i = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, u, c) {
      o[++i] = a(s, u, c);
    }), o;
  }
  return sf = r, sf;
}
var uf, Tb;
function C$() {
  if (Tb) return uf;
  Tb = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return uf = e, uf;
}
var cf, Eb;
function j$() {
  if (Eb) return cf;
  Eb = 1;
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
  return cf = t, cf;
}
var lf, Cb;
function M$() {
  if (Cb) return lf;
  Cb = 1;
  var e = j$();
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
  return lf = t, lf;
}
var ff, jb;
function $$() {
  if (jb) return ff;
  jb = 1;
  var e = Fh(), t = zh(), r = er(), n = LS(), a = C$(), i = YO(), o = M$(), s = sa(), u = ht();
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
  return ff = c, ff;
}
var df, Mb;
function I$() {
  if (Mb) return df;
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
  return df = e, df;
}
var pf, $b;
function D$() {
  if ($b) return pf;
  $b = 1;
  var e = I$(), t = Math.max;
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
  return pf = r, pf;
}
var hf, Ib;
function k$() {
  if (Ib) return hf;
  Ib = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return hf = e, hf;
}
var vf, Db;
function qS() {
  if (Db) return vf;
  Db = 1;
  var e = sn(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return vf = t, vf;
}
var yf, kb;
function N$() {
  if (kb) return yf;
  kb = 1;
  var e = k$(), t = qS(), r = sa(), n = t ? function(a, i) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : r;
  return yf = n, yf;
}
var mf, Nb;
function R$() {
  if (Nb) return mf;
  Nb = 1;
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
  return mf = n, mf;
}
var gf, Rb;
function L$() {
  if (Rb) return gf;
  Rb = 1;
  var e = N$(), t = R$(), r = t(e);
  return gf = r, gf;
}
var bf, Lb;
function q$() {
  if (Lb) return bf;
  Lb = 1;
  var e = sa(), t = D$(), r = L$();
  function n(a, i) {
    return r(t(a, i, e), a + "");
  }
  return bf = n, bf;
}
var xf, qb;
function Bs() {
  if (qb) return xf;
  qb = 1;
  var e = jh(), t = Bi(), r = Nh(), n = Er();
  function a(i, o, s) {
    if (!n(s))
      return !1;
    var u = typeof o;
    return (u == "number" ? t(s) && r(o, s.length) : u == "string" && o in s) ? e(s[o], i) : !1;
  }
  return xf = a, xf;
}
var wf, Bb;
function B$() {
  if (Bb) return wf;
  Bb = 1;
  var e = NS(), t = $$(), r = q$(), n = Bs(), a = r(function(i, o) {
    if (i == null)
      return [];
    var s = o.length;
    return s > 1 && n(i, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(i, e(o, 1), []);
  });
  return wf = a, wf;
}
var F$ = B$();
const Zh = /* @__PURE__ */ _e(F$);
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
function z$(e, t) {
  return K$(e) || H$(e, t) || U$(e, t) || W$();
}
function W$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U$(e, t) {
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
function H$(e, t) {
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
function K$(e) {
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
function Of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zb(Object(r), !0).forEach(function(n) {
      V$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function V$(e, t, r) {
  return t = G$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function G$(e) {
  var t = Y$(e, "string");
  return ei(t) == "symbol" ? t : t + "";
}
function Y$(e, t) {
  if (ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function X$(e) {
  return Array.isArray(e) && Ge(e[0]) && Ge(e[1]) ? e.join(" ~ ") : e;
}
var Z$ = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, s = o === void 0 ? {} : o, u = t.labelStyle, c = u === void 0 ? {} : u, l = t.payload, f = t.formatter, d = t.itemSorter, p = t.wrapperClassName, y = t.labelClassName, h = t.label, v = t.labelFormatter, b = t.accessibilityLayer, g = b === void 0 ? !1 : b, x = function() {
    if (l && l.length) {
      var $ = {
        padding: 0,
        margin: 0
      }, M = (d ? Zh(l, d) : l).map(function(j, I) {
        if (j.type === "none")
          return null;
        var k = Of({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: j.color || "#000"
        }, s), R = j.formatter || f || X$, L = j.value, z = j.name, N = L, B = z;
        if (R && N != null && B != null) {
          var q = R(L, z, j, I, l);
          if (Array.isArray(q)) {
            var H = z$(q, 2);
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
  }, O = Of({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), m = Of({
    margin: 0
  }, c), w = !le(h), A = w ? h : "", _ = de("recharts-default-tooltip", p), P = de("recharts-tooltip-label", y);
  w && v && l !== void 0 && l !== null && (A = v(h, l));
  var D = g ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ C.createElement("div", Zd({
    className: _,
    style: O
  }, D), /* @__PURE__ */ C.createElement("p", {
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
function ao(e, t, r) {
  return t = J$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J$(e) {
  var t = Q$(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function Q$(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wa = "recharts-tooltip-wrapper", eI = {
  visibility: "hidden"
};
function tI(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return de(wa, ao(ao(ao(ao({}, "".concat(wa, "-right"), G(r) && t && G(t.x) && r >= t.x), "".concat(wa, "-left"), G(r) && t && G(t.x) && r < t.x), "".concat(wa, "-bottom"), G(n) && t && G(t.y) && n >= t.y), "".concat(wa, "-top"), G(n) && t && G(t.y) && n < t.y));
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
function rI(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function nI(e) {
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
  }), c = rI({
    translateX: l,
    translateY: f,
    useTranslate3d: s
  })) : c = eI, {
    cssProperties: c,
    cssClasses: tI({
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
      Qd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ub(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function iI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, FS(n.key), n);
  }
}
function oI(e, t, r) {
  return t && iI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sI(e, t, r) {
  return t = $o(t), uI(e, BS() ? Reflect.construct(t, r || [], $o(e).constructor) : t.apply(e, r));
}
function uI(e, t) {
  if (t && (In(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cI(e);
}
function cI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function BS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (BS = function() {
    return !!e;
  })();
}
function $o(e) {
  return $o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $o(e);
}
function lI(e, t) {
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
  return t = FS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FS(e) {
  var t = fI(e, "string");
  return In(t) == "symbol" ? t : t + "";
}
function fI(e, t) {
  if (In(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (In(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Kb = 1, dI = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    aI(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = sI(this, t, [].concat(a)), Qd(r, "state", {
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
  return lI(t, e), oI(t, [{
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
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.children, l = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, p = a.offset, y = a.position, h = a.reverseDirection, v = a.useTranslate3d, b = a.viewBox, g = a.wrapperStyle, x = nI({
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
})(Mt), pI = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Cr = {
  isSsr: pI()
};
function Dn(e) {
  "@babel/helpers - typeof";
  return Dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dn(e);
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
      Jh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, WS(n.key), n);
  }
}
function yI(e, t, r) {
  return t && vI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function mI(e, t, r) {
  return t = Io(t), gI(e, zS() ? Reflect.construct(t, r || [], Io(e).constructor) : t.apply(e, r));
}
function gI(e, t) {
  if (t && (Dn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bI(e);
}
function bI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zS = function() {
    return !!e;
  })();
}
function Io(e) {
  return Io = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Io(e);
}
function xI(e, t) {
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
  return t = WS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WS(e) {
  var t = wI(e, "string");
  return Dn(t) == "symbol" ? t : t + "";
}
function wI(e, t) {
  if (Dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function OI(e) {
  return e.dataKey;
}
function SI(e, t) {
  return /* @__PURE__ */ C.isValidElement(e) ? /* @__PURE__ */ C.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ C.createElement(e, t) : /* @__PURE__ */ C.createElement(Z$, t);
}
var Ht = /* @__PURE__ */ (function(e) {
  function t() {
    return hI(this, t), mI(this, t, arguments);
  }
  return xI(t, e), yI(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.content, l = a.coordinate, f = a.filterNull, d = a.isAnimationActive, p = a.offset, y = a.payload, h = a.payloadUniqBy, v = a.position, b = a.reverseDirection, g = a.useTranslate3d, x = a.viewBox, O = a.wrapperStyle, m = y ?? [];
      f && m.length && (m = IS(y.filter(function(A) {
        return A.value != null && (A.hide !== !0 || n.props.includeHidden);
      }), h, OI));
      var w = m.length > 0;
      return /* @__PURE__ */ C.createElement(dI, {
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
      }, SI(c, Gb(Gb({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
})(Mt);
Jh(Ht, "displayName", "Tooltip");
Jh(Ht, "defaultProps", {
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
  isAnimationActive: !Cr.isSsr,
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
var Sf, Yb;
function AI() {
  if (Yb) return Sf;
  Yb = 1;
  var e = Qt(), t = function() {
    return e.Date.now();
  };
  return Sf = t, Sf;
}
var Af, Xb;
function _I() {
  if (Xb) return Af;
  Xb = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Af = t, Af;
}
var _f, Zb;
function PI() {
  if (Zb) return _f;
  Zb = 1;
  var e = _I(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return _f = r, _f;
}
var Pf, Jb;
function US() {
  if (Jb) return Pf;
  Jb = 1;
  var e = PI(), t = Er(), r = aa(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
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
  return Pf = u, Pf;
}
var Tf, Qb;
function TI() {
  if (Qb) return Tf;
  Qb = 1;
  var e = Er(), t = AI(), r = US(), n = "Expected a function", a = Math.max, i = Math.min;
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
      var j = M - h, I = M - v, k = u - j;
      return g ? i(k, d - I) : k;
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
    function D() {
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
    return $.cancel = D, $.flush = T, $;
  }
  return Tf = o, Tf;
}
var Ef, e0;
function EI() {
  if (e0) return Ef;
  e0 = 1;
  var e = TI(), t = Er(), r = "Expected a function";
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
  return Ef = n, Ef;
}
var CI = EI();
const HS = /* @__PURE__ */ _e(CI);
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
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
function io(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? t0(Object(r), !0).forEach(function(n) {
      jI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jI(e, t, r) {
  return t = MI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MI(e) {
  var t = $I(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function $I(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function II(e, t) {
  return RI(e) || NI(e, t) || kI(e, t) || DI();
}
function DI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kI(e, t) {
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
function NI(e, t) {
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
function RI(e) {
  if (Array.isArray(e)) return e;
}
var LI = /* @__PURE__ */ ze(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, s = e.height, u = s === void 0 ? "100%" : s, c = e.minWidth, l = c === void 0 ? 0 : c, f = e.minHeight, d = e.maxHeight, p = e.children, y = e.debounce, h = y === void 0 ? 0 : y, v = e.id, b = e.className, g = e.onResize, x = e.style, O = x === void 0 ? {} : x, m = Me(null), w = Me();
  w.current = g, TT(t, function() {
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
  }), _ = II(A, 2), P = _[0], D = _[1], T = tt(function(M, j) {
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
    h > 0 && (M = HS(M, h, {
      trailing: !0,
      leading: !1
    }));
    var j = new ResizeObserver(M), I = m.current.getBoundingClientRect(), k = I.width, R = I.height;
    return T(k, R), j.observe(m.current), function() {
      j.disconnect();
    };
  }, [T, h]);
  var $ = He(function() {
    var M = P.containerWidth, j = P.containerHeight;
    if (M < 0 || j < 0)
      return null;
    qt(zr(o) || zr(u), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, u), qt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var I = zr(o) ? M : o, k = zr(u) ? j : u;
    r && r > 0 && (I ? k = I / r : k && (I = k * r), d && k > d && (k = d)), qt(I > 0 || k > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, I, k, o, u, l, f, r);
    var R = !Array.isArray(p) && sr(p.type).endsWith("Chart");
    return C.Children.map(p, function(L) {
      return /* @__PURE__ */ C.isValidElement(L) ? /* @__PURE__ */ Ue(L, io({
        width: I,
        height: k
      }, R ? {
        style: io({
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
    className: de("recharts-responsive-container", b),
    style: io(io({}, O), {}, {
      width: o,
      height: u,
      minWidth: l,
      minHeight: f,
      maxHeight: d
    }),
    ref: m
  }, $);
}), Fs = function(t) {
  return null;
};
Fs.displayName = "Cell";
function ni(e) {
  "@babel/helpers - typeof";
  return ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ni(e);
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
function tp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? n0(Object(r), !0).forEach(function(n) {
      qI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qI(e, t, r) {
  return t = BI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
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
  return (t === "string" ? String : Number)(e);
}
var vn = {
  widthCache: {},
  cacheCount: 0
}, zI = 2e3, WI = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, a0 = "recharts_measurement_span";
function UI(e) {
  var t = tp({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var La = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Cr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = UI(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (vn.widthCache[a])
    return vn.widthCache[a];
  try {
    var i = document.getElementById(a0);
    i || (i = document.createElement("span"), i.setAttribute("id", a0), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = tp(tp({}, WI), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var s = i.getBoundingClientRect(), u = {
      width: s.width,
      height: s.height
    };
    return vn.widthCache[a] = u, ++vn.cacheCount > zI && (vn.cacheCount = 0, vn.widthCache = {}), u;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, HI = function(t) {
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
function Do(e, t) {
  return YI(e) || GI(e, t) || VI(e, t) || KI();
}
function KI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VI(e, t) {
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
function GI(e, t) {
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
function YI(e) {
  if (Array.isArray(e)) return e;
}
function XI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function o0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, JI(n.key), n);
  }
}
function ZI(e, t, r) {
  return t && o0(e.prototype, t), r && o0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function JI(e) {
  var t = QI(e, "string");
  return ai(t) == "symbol" ? t : t + "";
}
function QI(e, t) {
  if (ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var s0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, u0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, eD = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, tD = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, KS = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, rD = Object.keys(KS), wn = "NaN";
function nD(e, t) {
  return e * KS[t];
}
var oo = /* @__PURE__ */ (function() {
  function e(t, r) {
    XI(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !eD.test(r) && (this.num = NaN, this.unit = ""), rD.includes(r) && (this.num = nD(t, r), this.unit = "px");
  }
  return ZI(e, [{
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
      var n, a = (n = tD.exec(r)) !== null && n !== void 0 ? n : [], i = Do(a, 3), o = i[1], s = i[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
})();
function VS(e) {
  if (e.includes(wn))
    return wn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = s0.exec(t)) !== null && r !== void 0 ? r : [], a = Do(n, 4), i = a[1], o = a[2], s = a[3], u = oo.parse(i ?? ""), c = oo.parse(s ?? ""), l = o === "*" ? u.multiply(c) : u.divide(c);
    if (l.isNaN())
      return wn;
    t = t.replace(s0, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = u0.exec(t)) !== null && f !== void 0 ? f : [], p = Do(d, 4), y = p[1], h = p[2], v = p[3], b = oo.parse(y ?? ""), g = oo.parse(v ?? ""), x = h === "+" ? b.add(g) : b.subtract(g);
    if (x.isNaN())
      return wn;
    t = t.replace(u0, x.toString());
  }
  return t;
}
var c0 = /\(([^()]*)\)/;
function aD(e) {
  for (var t = e; t.includes("("); ) {
    var r = c0.exec(t), n = Do(r, 2), a = n[1];
    t = t.replace(c0, VS(a));
  }
  return t;
}
function iD(e) {
  var t = e.replace(/\s+/g, "");
  return t = aD(t), t = VS(t), t;
}
function oD(e) {
  try {
    return iD(e);
  } catch {
    return wn;
  }
}
function Cf(e) {
  var t = oD(e.slice(5, -1));
  return t === wn ? "" : t;
}
var sD = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], uD = ["dx", "dy", "angle", "className", "breakAll"];
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
function l0(e, t) {
  if (e == null) return {};
  var r = cD(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cD(e, t) {
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
  return pD(e) || dD(e, t) || fD(e, t) || lD();
}
function lD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fD(e, t) {
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
function dD(e, t) {
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
function pD(e) {
  if (Array.isArray(e)) return e;
}
var GS = /[ \f\n\r\t\v\u2028\u2029]+/, YS = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    le(r) || (n ? i = r.toString().split("") : i = r.toString().split(GS));
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
}, hD = function(t, r, n, a, i) {
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
    var k = f.slice(0, I), R = YS({
      breakAll: c,
      style: u,
      children: k + h
    }).wordsWithComputedWidth, L = d(R), z = L.length > o || y(L).width > Number(a);
    return [z, L];
  }, b = 0, g = f.length - 1, x = 0, O; b <= g && x <= f.length - 1; ) {
    var m = Math.floor((b + g) / 2), w = m - 1, A = v(w), _ = f0(A, 2), P = _[0], D = _[1], T = v(m), $ = f0(T, 1), M = $[0];
    if (!P && !M && (b = m + 1), P && M && (g = m - 1), !P && M) {
      O = D;
      break;
    }
    x++;
  }
  return O || p;
}, p0 = function(t) {
  var r = le(t) ? [] : t.toString().split(GS);
  return [{
    words: r
  }];
}, vD = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Cr.isSsr) {
    var u, c, l = YS({
      breakAll: o,
      children: a,
      style: i
    });
    if (l) {
      var f = l.wordsWithComputedWidth, d = l.spaceWidth;
      u = f, c = d;
    } else
      return p0(a);
    return hD({
      breakAll: o,
      children: a,
      maxLines: s,
      style: i
    }, u, c, r, n);
  }
  return p0(a);
}, h0 = "#808080", Pr = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, s = o === void 0 ? "1em" : o, u = t.capHeight, c = u === void 0 ? "0.71em" : u, l = t.scaleToFit, f = l === void 0 ? !1 : l, d = t.textAnchor, p = d === void 0 ? "start" : d, y = t.verticalAnchor, h = y === void 0 ? "end" : y, v = t.fill, b = v === void 0 ? h0 : v, g = l0(t, sD), x = He(function() {
    return vD({
      breakAll: g.breakAll,
      children: g.children,
      maxLines: g.maxLines,
      scaleToFit: f,
      style: g.style,
      width: g.width
    });
  }, [g.breakAll, g.children, g.maxLines, f, g.style, g.width]), O = g.dx, m = g.dy, w = g.angle, A = g.className, _ = g.breakAll, P = l0(g, uD);
  if (!Ge(n) || !Ge(i))
    return null;
  var D = n + (G(O) ? O : 0), T = i + (G(m) ? m : 0), $;
  switch (h) {
    case "start":
      $ = Cf("calc(".concat(c, ")"));
      break;
    case "middle":
      $ = Cf("calc(".concat((x.length - 1) / 2, " * -").concat(s, " + (").concat(c, " / 2))"));
      break;
    default:
      $ = Cf("calc(".concat(x.length - 1, " * -").concat(s, ")"));
      break;
  }
  var M = [];
  if (f) {
    var j = x[0].width, I = g.width;
    M.push("scale(".concat((G(I) ? I / j : 1) / j, ")"));
  }
  return w && M.push("rotate(".concat(w, ", ").concat(D, ", ").concat(T, ")")), M.length && (P.transform = M.join(" ")), /* @__PURE__ */ C.createElement("text", rp({}, ie(P, !0), {
    x: D,
    y: T,
    className: de("recharts-text", A),
    textAnchor: p,
    fill: b.includes("url") ? h0 : b
  }), x.map(function(k, R) {
    var L = k.words.join(_ ? "" : " ");
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
function Ar(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function yD(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Qh(e) {
  let t, r, n;
  e.length !== 2 ? (t = Ar, r = (s, u) => Ar(e(s), u), n = (s, u) => e(s) - u) : (t = e === Ar || e === yD ? e : mD, r = e, n = e);
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
function mD() {
  return 0;
}
function XS(e) {
  return e === null ? NaN : +e;
}
function* gD(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const bD = Qh(Ar), zi = bD.right;
Qh(XS).center;
class v0 extends Map {
  constructor(t, r = OD) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(y0(this, t));
  }
  has(t) {
    return super.has(y0(this, t));
  }
  set(t, r) {
    return super.set(xD(this, t), r);
  }
  delete(t) {
    return super.delete(wD(this, t));
  }
}
function y0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function xD({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function wD({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function OD(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function SD(e = Ar) {
  if (e === Ar) return ZS;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function ZS(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const AD = Math.sqrt(50), _D = Math.sqrt(10), PD = Math.sqrt(2);
function ko(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= AD ? 10 : i >= _D ? 5 : i >= PD ? 2 : 1;
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
function JS(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? ZS : SD(a); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, l = Math.log(u), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (u - f) / u) * (c - u / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / u + d)), y = Math.min(n, Math.floor(t + (u - c) * f / u + d));
      JS(e, t, p, y, a);
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
function TD(e, t, r) {
  if (e = Float64Array.from(gD(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return g0(e);
    if (t >= 1) return m0(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = m0(JS(e, i).subarray(0, i + 1)), s = g0(e.subarray(i + 1));
    return o + (s - o) * (a - i);
  }
}
function ED(e, t, r = XS) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
    return o + (s - o) * (a - i);
  }
}
function CD(e, t, r) {
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
function hr(e, t) {
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
  var e = new v0(), t = [], r = [], n = op;
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
    t = [], e = new v0();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return ev(t, r).unknown(n);
  }, $t.apply(a, arguments), a;
}
function ii() {
  var e = ev().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, s = !1, u = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = a < n, y = p ? a : n, h = p ? n : a;
    i = (h - y) / Math.max(1, d - u + c * 2), s && (i = Math.floor(i)), y += (h - y - i * (d - u)) * l, o = i * (1 - u), s && (y = Math.round(y), o = Math.round(o));
    var v = CD(d).map(function(b) {
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
  }, $t.apply(f(), arguments);
}
function QS(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return QS(t());
  }, e;
}
function qa() {
  return QS(ii.apply(null, arguments).paddingInner(1));
}
function tv(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function eA(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Wi() {
}
var oi = 0.7, No = 1 / oi, Tn = "\\s*([+-]?\\d+)\\s*", si = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", jD = /^#([0-9a-f]{3,8})$/, MD = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), $D = new RegExp(`^rgb\\(${Xt},${Xt},${Xt}\\)$`), ID = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${si}\\)$`), DD = new RegExp(`^rgba\\(${Xt},${Xt},${Xt},${si}\\)$`), kD = new RegExp(`^hsl\\(${si},${Xt},${Xt}\\)$`), ND = new RegExp(`^hsla\\(${si},${Xt},${Xt},${si}\\)$`), b0 = {
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
tv(Wi, ui, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: x0,
  // Deprecated! Use color.formatHex.
  formatHex: x0,
  formatHex8: RD,
  formatHsl: LD,
  formatRgb: w0,
  toString: w0
});
function x0() {
  return this.rgb().formatHex();
}
function RD() {
  return this.rgb().formatHex8();
}
function LD() {
  return tA(this).formatHsl();
}
function w0() {
  return this.rgb().formatRgb();
}
function ui(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = jD.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? O0(t) : r === 3 ? new lt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? so(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? so(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = MD.exec(e)) ? new lt(t[1], t[2], t[3], 1) : (t = $D.exec(e)) ? new lt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ID.exec(e)) ? so(t[1], t[2], t[3], t[4]) : (t = DD.exec(e)) ? so(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = kD.exec(e)) ? _0(t[1], t[2] / 100, t[3] / 100, 1) : (t = ND.exec(e)) ? _0(t[1], t[2] / 100, t[3] / 100, t[4]) : b0.hasOwnProperty(e) ? O0(b0[e]) : e === "transparent" ? new lt(NaN, NaN, NaN, 0) : null;
}
function O0(e) {
  return new lt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function so(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new lt(e, t, r, n);
}
function qD(e) {
  return e instanceof Wi || (e = ui(e)), e ? (e = e.rgb(), new lt(e.r, e.g, e.b, e.opacity)) : new lt();
}
function sp(e, t, r, n) {
  return arguments.length === 1 ? qD(e) : new lt(e, t, r, n ?? 1);
}
function lt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
tv(lt, sp, eA(Wi, {
  brighter(e) {
    return e = e == null ? No : Math.pow(No, e), new lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? oi : Math.pow(oi, e), new lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new lt(Xr(this.r), Xr(this.g), Xr(this.b), Ro(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: S0,
  // Deprecated! Use color.formatHex.
  formatHex: S0,
  formatHex8: BD,
  formatRgb: A0,
  toString: A0
}));
function S0() {
  return `#${Wr(this.r)}${Wr(this.g)}${Wr(this.b)}`;
}
function BD() {
  return `#${Wr(this.r)}${Wr(this.g)}${Wr(this.b)}${Wr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function A0() {
  const e = Ro(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Xr(this.r)}, ${Xr(this.g)}, ${Xr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ro(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Wr(e) {
  return e = Xr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function _0(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Nt(e, t, r, n);
}
function tA(e) {
  if (e instanceof Nt) return new Nt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Wi || (e = ui(e)), !e) return new Nt();
  if (e instanceof Nt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, s = i - a, u = (i + a) / 2;
  return s ? (t === i ? o = (r - n) / s + (r < n) * 6 : r === i ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < 0.5 ? i + a : 2 - i - a, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new Nt(o, s, u, e.opacity);
}
function FD(e, t, r, n) {
  return arguments.length === 1 ? tA(e) : new Nt(e, t, r, n ?? 1);
}
function Nt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
tv(Nt, FD, eA(Wi, {
  brighter(e) {
    return e = e == null ? No : Math.pow(No, e), new Nt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? oi : Math.pow(oi, e), new Nt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new lt(
      jf(e >= 240 ? e - 240 : e + 120, a, n),
      jf(e, a, n),
      jf(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new Nt(P0(this.h), uo(this.s), uo(this.l), Ro(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ro(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${P0(this.h)}, ${uo(this.s) * 100}%, ${uo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function P0(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function uo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function jf(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const rv = (e) => () => e;
function zD(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function WD(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function UD(e) {
  return (e = +e) == 1 ? rA : function(t, r) {
    return r - t ? WD(t, r, e) : rv(isNaN(t) ? r : t);
  };
}
function rA(e, t) {
  var r = t - e;
  return r ? zD(e, r) : rv(isNaN(e) ? t : e);
}
const T0 = (function e(t) {
  var r = UD(t);
  function n(a, i) {
    var o = r((a = sp(a)).r, (i = sp(i)).r), s = r(a.g, i.g), u = r(a.b, i.b), c = rA(a.opacity, i.opacity);
    return function(l) {
      return a.r = o(l), a.g = s(l), a.b = u(l), a.opacity = c(l), a + "";
    };
  }
  return n.gamma = e, n;
})(1);
function HD(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function KD(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function VD(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = ua(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) i[o] = a[o](s);
    return i;
  };
}
function GD(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Lo(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function YD(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = ua(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var up = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Mf = new RegExp(up.source, "g");
function XD(e) {
  return function() {
    return e;
  };
}
function ZD(e) {
  return function(t) {
    return e(t) + "";
  };
}
function JD(e, t) {
  var r = up.lastIndex = Mf.lastIndex = 0, n, a, i, o = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (n = up.exec(e)) && (a = Mf.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (a = a[0]) ? s[o] ? s[o] += a : s[++o] = a : (s[++o] = null, u.push({ i: o, x: Lo(n, a) })), r = Mf.lastIndex;
  return r < t.length && (i = t.slice(r), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? u[0] ? ZD(u[0].x) : XD(t) : (t = u.length, function(c) {
    for (var l = 0, f; l < t; ++l) s[(f = u[l]).i] = f.x(c);
    return s.join("");
  });
}
function ua(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? rv(t) : (r === "number" ? Lo : r === "string" ? (n = ui(t)) ? (t = n, T0) : JD : t instanceof ui ? T0 : t instanceof Date ? GD : KD(t) ? HD : Array.isArray(t) ? VD : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? YD : Lo)(e, t);
}
function nv(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function QD(e, t) {
  t === void 0 && (t = e, e = ua);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[s](o - s);
  };
}
function ek(e) {
  return function() {
    return e;
  };
}
function qo(e) {
  return +e;
}
var E0 = [0, 1];
function ut(e) {
  return e;
}
function cp(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : ek(isNaN(t) ? NaN : 0.5);
}
function tk(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function rk(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = cp(a, n), i = r(o, i)) : (n = cp(n, a), i = r(i, o)), function(s) {
    return i(n(s));
  };
}
function nk(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = cp(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(s) {
    var u = zi(e, s, 1, n) - 1;
    return i[u](a[u](s));
  };
}
function Ui(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function zs() {
  var e = E0, t = E0, r = ua, n, a, i, o = ut, s, u, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== ut && (o = tk(e[0], e[d - 1])), s = d > 2 ? nk : rk, u = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? i : (u || (u = s(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(a((c || (c = s(t, e.map(n), Lo)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, qo), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = nv, l();
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
function av() {
  return zs()(ut, ut);
}
function ak(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Bo(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function kn(e) {
  return e = Bo(Math.abs(e)), e ? e[1] : NaN;
}
function ik(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, s = e[0], u = 0; a > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), i.push(r.substring(a -= s, a + s)), !((u += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function ok(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var sk = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ci(e) {
  if (!(t = sk.exec(e))) throw new Error("invalid format: " + e);
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
function uk(e) {
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
var nA;
function ck(e, t) {
  var r = Bo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (nA = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Bo(e, Math.max(0, t + i - 1))[0];
}
function C0(e, t) {
  var r = Bo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const j0 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: ak,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => C0(e * 100, t),
  r: C0,
  s: ck,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function M0(e) {
  return e;
}
var $0 = Array.prototype.map, I0 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function lk(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? M0 : ik($0.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? M0 : ok($0.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = ci(f);
    var d = f.fill, p = f.align, y = f.sign, h = f.symbol, v = f.zero, b = f.width, g = f.comma, x = f.precision, O = f.trim, m = f.type;
    m === "n" ? (g = !0, m = "g") : j0[m] || (x === void 0 && (x = 12), O = !0, m = "g"), (v || d === "0" && p === "=") && (v = !0, d = "0", p = "=");
    var w = h === "$" ? r : h === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", A = h === "$" ? n : /[%p]/.test(m) ? o : "", _ = j0[m], P = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function D(T) {
      var $ = w, M = A, j, I, k;
      if (m === "c")
        M = _(T) + M, T = "";
      else {
        T = +T;
        var R = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? u : _(Math.abs(T), x), O && (T = uk(T)), R && +T == 0 && y !== "+" && (R = !1), $ = (R ? y === "(" ? y : s : y === "-" || y === "(" ? "" : y) + $, M = (m === "s" ? I0[8 + nA / 3] : "") + M + (R && y === "(" ? ")" : ""), P) {
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
    var p = c((f = ci(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(kn(d) / 3))) * 3, h = Math.pow(10, -y), v = I0[8 + y / 3];
    return function(b) {
      return p(h * b) + v;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var co, ov, aA;
fk({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function fk(e) {
  return co = lk(e), ov = co.format, aA = co.formatPrefix, co;
}
function dk(e) {
  return Math.max(0, -kn(Math.abs(e)));
}
function pk(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(kn(t) / 3))) * 3 - kn(Math.abs(e)));
}
function hk(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, kn(t) - kn(e)) + 1;
}
function iA(e, t, r, n) {
  var a = ip(e, t, r), i;
  switch (n = ci(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = pk(a, o)) && (n.precision = i), aA(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = hk(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = dk(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return ov(n);
}
function jr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return np(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return iA(a[0], a[a.length - 1], r ?? 10, n);
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
function Fo() {
  var e = av();
  return e.copy = function() {
    return Ui(e, Fo());
  }, $t.apply(e, arguments), jr(e);
}
function oA(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, qo), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return oA(e).unknown(t);
  }, e = arguments.length ? Array.from(e, qo) : [0, 1], jr(r);
}
function sA(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function D0(e) {
  return Math.log(e);
}
function k0(e) {
  return Math.exp(e);
}
function vk(e) {
  return -Math.log(-e);
}
function yk(e) {
  return -Math.exp(-e);
}
function mk(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function gk(e) {
  return e === 10 ? mk : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function bk(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function N0(e) {
  return (t, r) => -e(-t, r);
}
function sv(e) {
  const t = e(D0, k0), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = bk(n), i = gk(n), r()[0] < 0 ? (a = N0(a), i = N0(i), e(vk, yk)) : e(D0, k0), t;
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
  }, t.nice = () => r(sA(r(), {
    floor: (s) => i(Math.floor(a(s))),
    ceil: (s) => i(Math.ceil(a(s)))
  })), t;
}
function uA() {
  const e = sv(zs()).domain([1, 10]);
  return e.copy = () => Ui(e, uA()).base(e.base()), $t.apply(e, arguments), e;
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
function uv(e) {
  var t = 1, r = e(R0(t), L0(t));
  return r.constant = function(n) {
    return arguments.length ? e(R0(t = +n), L0(t)) : t;
  }, jr(r);
}
function cA() {
  var e = uv(zs());
  return e.copy = function() {
    return Ui(e, cA()).constant(e.constant());
  }, $t.apply(e, arguments);
}
function q0(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function xk(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function wk(e) {
  return e < 0 ? -e * e : e * e;
}
function cv(e) {
  var t = e(ut, ut), r = 1;
  function n() {
    return r === 1 ? e(ut, ut) : r === 0.5 ? e(xk, wk) : e(q0(r), q0(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, jr(t);
}
function lv() {
  var e = cv(zs());
  return e.copy = function() {
    return Ui(e, lv()).exponent(e.exponent());
  }, $t.apply(e, arguments), e;
}
function Ok() {
  return lv.apply(null, arguments).exponent(0.5);
}
function B0(e) {
  return Math.sign(e) * e * e;
}
function Sk(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function lA() {
  var e = av(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = Sk(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(B0(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, qo)).map(B0)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return lA(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, $t.apply(a, arguments), jr(a);
}
function fA() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = ED(e, o / s);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[zi(r, o)];
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
    return e.sort(Ar), a();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), a()) : t.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return fA().domain(e).range(t).unknown(n);
  }, $t.apply(i, arguments);
}
function dA() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(u) {
    return u != null && u <= u ? a[zi(n, u, 0, r)] : i;
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
    return dA().domain([e, t]).range(a).unknown(i);
  }, $t.apply(jr(o), arguments);
}
function pA() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[zi(e, i, 0, n)] : r;
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
    return pA().domain(e).range(t).unknown(r);
  }, $t.apply(a, arguments);
}
const $f = /* @__PURE__ */ new Date(), If = /* @__PURE__ */ new Date();
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
  }), r && (a.count = (i, o) => ($f.setTime(+i), If.setTime(+o), e($f), e(If), Math.floor(r($f, If))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const zo = Ye(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
zo.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ye((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : zo);
zo.range;
const ar = 1e3, Tt = ar * 60, ir = Tt * 60, cr = ir * 24, fv = cr * 7, F0 = cr * 30, Df = cr * 365, Ur = Ye((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * ar);
}, (e, t) => (t - e) / ar, (e) => e.getUTCSeconds());
Ur.range;
const dv = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ar);
}, (e, t) => {
  e.setTime(+e + t * Tt);
}, (e, t) => (t - e) / Tt, (e) => e.getMinutes());
dv.range;
const pv = Ye((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Tt);
}, (e, t) => (t - e) / Tt, (e) => e.getUTCMinutes());
pv.range;
const hv = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ar - e.getMinutes() * Tt);
}, (e, t) => {
  e.setTime(+e + t * ir);
}, (e, t) => (t - e) / ir, (e) => e.getHours());
hv.range;
const vv = Ye((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * ir);
}, (e, t) => (t - e) / ir, (e) => e.getUTCHours());
vv.range;
const Hi = Ye(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Tt) / cr,
  (e) => e.getDate() - 1
);
Hi.range;
const Ws = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / cr, (e) => e.getUTCDate() - 1);
Ws.range;
const hA = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / cr, (e) => Math.floor(e / cr));
hA.range;
function cn(e) {
  return Ye((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Tt) / fv);
}
const Us = cn(0), Wo = cn(1), Ak = cn(2), _k = cn(3), Nn = cn(4), Pk = cn(5), Tk = cn(6);
Us.range;
Wo.range;
Ak.range;
_k.range;
Nn.range;
Pk.range;
Tk.range;
function ln(e) {
  return Ye((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / fv);
}
const Hs = ln(0), Uo = ln(1), Ek = ln(2), Ck = ln(3), Rn = ln(4), jk = ln(5), Mk = ln(6);
Hs.range;
Uo.range;
Ek.range;
Ck.range;
Rn.range;
jk.range;
Mk.range;
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
const lr = Ye((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
lr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
lr.range;
const fr = Ye((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
fr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
fr.range;
function vA(e, t, r, n, a, i) {
  const o = [
    [Ur, 1, ar],
    [Ur, 5, 5 * ar],
    [Ur, 15, 15 * ar],
    [Ur, 30, 30 * ar],
    [i, 1, Tt],
    [i, 5, 5 * Tt],
    [i, 15, 15 * Tt],
    [i, 30, 30 * Tt],
    [a, 1, ir],
    [a, 3, 3 * ir],
    [a, 6, 6 * ir],
    [a, 12, 12 * ir],
    [n, 1, cr],
    [n, 2, 2 * cr],
    [r, 1, fv],
    [t, 1, F0],
    [t, 3, 3 * F0],
    [e, 1, Df]
  ];
  function s(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const p = f && typeof f.range == "function" ? f : u(c, l, f), y = p ? p.range(c, +l + 1) : [];
    return d ? y.reverse() : y;
  }
  function u(c, l, f) {
    const d = Math.abs(l - c) / f, p = Qh(([, , v]) => v).right(o, d);
    if (p === o.length) return e.every(ip(c / Df, l / Df, f));
    if (p === 0) return zo.every(Math.max(ip(c, l, f), 1));
    const [y, h] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return y.every(h);
  }
  return [s, u];
}
const [$k, Ik] = vA(fr, mv, Hs, hA, vv, pv), [Dk, kk] = vA(lr, yv, Us, Hi, hv, dv);
function kf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Nf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Sa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Nk(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, s = e.months, u = e.shortMonths, c = Aa(a), l = _a(a), f = Aa(i), d = _a(i), p = Aa(o), y = _a(o), h = Aa(s), v = _a(s), b = Aa(u), g = _a(u), x = {
    a: R,
    A: L,
    b: z,
    B: N,
    c: null,
    d: V0,
    e: V0,
    f: iN,
    g: vN,
    G: mN,
    H: rN,
    I: nN,
    j: aN,
    L: yA,
    m: oN,
    M: sN,
    p: B,
    q,
    Q: X0,
    s: Z0,
    S: uN,
    u: cN,
    U: lN,
    V: fN,
    w: dN,
    W: pN,
    x: null,
    X: null,
    y: hN,
    Y: yN,
    Z: gN,
    "%": Y0
  }, O = {
    a: H,
    A: X,
    b: te,
    B: ne,
    c: null,
    d: G0,
    e: G0,
    f: ON,
    g: $N,
    G: DN,
    H: bN,
    I: xN,
    j: wN,
    L: gA,
    m: SN,
    M: AN,
    p: ee,
    q: J,
    Q: X0,
    s: Z0,
    S: _N,
    u: PN,
    U: TN,
    V: EN,
    w: CN,
    W: jN,
    x: null,
    X: null,
    y: MN,
    Y: IN,
    Z: kN,
    "%": Y0
  }, m = {
    a: D,
    A: T,
    b: $,
    B: M,
    c: j,
    d: H0,
    e: H0,
    f: Jk,
    g: U0,
    G: W0,
    H: K0,
    I: K0,
    j: Gk,
    L: Zk,
    m: Vk,
    M: Yk,
    p: P,
    q: Kk,
    Q: eN,
    s: tN,
    S: Xk,
    u: Fk,
    U: zk,
    V: Wk,
    w: Bk,
    W: Uk,
    x: I,
    X: k,
    y: U0,
    Y: W0,
    Z: Hk,
    "%": Qk
  };
  x.x = w(r, x), x.X = w(n, x), x.c = w(t, x), O.x = w(r, O), O.X = w(n, O), O.c = w(t, O);
  function w(U, V) {
    return function(Z) {
      var E = [], Y = -1, F = 0, ae = U.length, ce, oe, Se;
      for (Z instanceof Date || (Z = /* @__PURE__ */ new Date(+Z)); ++Y < ae; )
        U.charCodeAt(Y) === 37 && (E.push(U.slice(F, Y)), (oe = z0[ce = U.charAt(++Y)]) != null ? ce = U.charAt(++Y) : oe = ce === "e" ? " " : "0", (Se = V[ce]) && (ce = Se(Z, oe)), E.push(ce), F = Y + 1);
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
        "w" in E || (E.w = 1), "Z" in E ? (F = Nf(Sa(E.y, 0, 1)), ae = F.getUTCDay(), F = ae > 4 || ae === 0 ? Uo.ceil(F) : Uo(F), F = Ws.offset(F, (E.V - 1) * 7), E.y = F.getUTCFullYear(), E.m = F.getUTCMonth(), E.d = F.getUTCDate() + (E.w + 6) % 7) : (F = kf(Sa(E.y, 0, 1)), ae = F.getDay(), F = ae > 4 || ae === 0 ? Wo.ceil(F) : Wo(F), F = Hi.offset(F, (E.V - 1) * 7), E.y = F.getFullYear(), E.m = F.getMonth(), E.d = F.getDate() + (E.w + 6) % 7);
      } else ("W" in E || "U" in E) && ("w" in E || (E.w = "u" in E ? E.u % 7 : "W" in E ? 1 : 0), ae = "Z" in E ? Nf(Sa(E.y, 0, 1)).getUTCDay() : kf(Sa(E.y, 0, 1)).getDay(), E.m = 0, E.d = "W" in E ? (E.w + 6) % 7 + E.W * 7 - (ae + 5) % 7 : E.w + E.U * 7 - (ae + 6) % 7);
      return "Z" in E ? (E.H += E.Z / 100 | 0, E.M += E.Z % 100, Nf(E)) : kf(E);
    };
  }
  function _(U, V, Z, E) {
    for (var Y = 0, F = V.length, ae = Z.length, ce, oe; Y < F; ) {
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
    return _(U, t, V, Z);
  }
  function I(U, V, Z) {
    return _(U, r, V, Z);
  }
  function k(U, V, Z) {
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
var z0 = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, Rk = /^%/, Lk = /[\\^$*+?|[\]().{}]/g;
function ve(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function qk(e) {
  return e.replace(Lk, "\\$&");
}
function Aa(e) {
  return new RegExp("^(?:" + e.map(qk).join("|") + ")", "i");
}
function _a(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Bk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function Fk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function zk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function Wk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function Uk(e, t, r) {
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
function Hk(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function Kk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Vk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function H0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Gk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function K0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Yk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Xk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Zk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Jk(e, t, r) {
  var n = Je.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Qk(e, t, r) {
  var n = Rk.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function eN(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function tN(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function V0(e, t) {
  return ve(e.getDate(), t, 2);
}
function rN(e, t) {
  return ve(e.getHours(), t, 2);
}
function nN(e, t) {
  return ve(e.getHours() % 12 || 12, t, 2);
}
function aN(e, t) {
  return ve(1 + Hi.count(lr(e), e), t, 3);
}
function yA(e, t) {
  return ve(e.getMilliseconds(), t, 3);
}
function iN(e, t) {
  return yA(e, t) + "000";
}
function oN(e, t) {
  return ve(e.getMonth() + 1, t, 2);
}
function sN(e, t) {
  return ve(e.getMinutes(), t, 2);
}
function uN(e, t) {
  return ve(e.getSeconds(), t, 2);
}
function cN(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function lN(e, t) {
  return ve(Us.count(lr(e) - 1, e), t, 2);
}
function mA(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Nn(e) : Nn.ceil(e);
}
function fN(e, t) {
  return e = mA(e), ve(Nn.count(lr(e), e) + (lr(e).getDay() === 4), t, 2);
}
function dN(e) {
  return e.getDay();
}
function pN(e, t) {
  return ve(Wo.count(lr(e) - 1, e), t, 2);
}
function hN(e, t) {
  return ve(e.getFullYear() % 100, t, 2);
}
function vN(e, t) {
  return e = mA(e), ve(e.getFullYear() % 100, t, 2);
}
function yN(e, t) {
  return ve(e.getFullYear() % 1e4, t, 4);
}
function mN(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Nn(e) : Nn.ceil(e), ve(e.getFullYear() % 1e4, t, 4);
}
function gN(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ve(t / 60 | 0, "0", 2) + ve(t % 60, "0", 2);
}
function G0(e, t) {
  return ve(e.getUTCDate(), t, 2);
}
function bN(e, t) {
  return ve(e.getUTCHours(), t, 2);
}
function xN(e, t) {
  return ve(e.getUTCHours() % 12 || 12, t, 2);
}
function wN(e, t) {
  return ve(1 + Ws.count(fr(e), e), t, 3);
}
function gA(e, t) {
  return ve(e.getUTCMilliseconds(), t, 3);
}
function ON(e, t) {
  return gA(e, t) + "000";
}
function SN(e, t) {
  return ve(e.getUTCMonth() + 1, t, 2);
}
function AN(e, t) {
  return ve(e.getUTCMinutes(), t, 2);
}
function _N(e, t) {
  return ve(e.getUTCSeconds(), t, 2);
}
function PN(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function TN(e, t) {
  return ve(Hs.count(fr(e) - 1, e), t, 2);
}
function bA(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Rn(e) : Rn.ceil(e);
}
function EN(e, t) {
  return e = bA(e), ve(Rn.count(fr(e), e) + (fr(e).getUTCDay() === 4), t, 2);
}
function CN(e) {
  return e.getUTCDay();
}
function jN(e, t) {
  return ve(Uo.count(fr(e) - 1, e), t, 2);
}
function MN(e, t) {
  return ve(e.getUTCFullYear() % 100, t, 2);
}
function $N(e, t) {
  return e = bA(e), ve(e.getUTCFullYear() % 100, t, 2);
}
function IN(e, t) {
  return ve(e.getUTCFullYear() % 1e4, t, 4);
}
function DN(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Rn(e) : Rn.ceil(e), ve(e.getUTCFullYear() % 1e4, t, 4);
}
function kN() {
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
var yn, xA, wA;
NN({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function NN(e) {
  return yn = Nk(e), xA = yn.format, yn.parse, wA = yn.utcFormat, yn.utcParse, yn;
}
function RN(e) {
  return new Date(e);
}
function LN(e) {
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
    return arguments.length ? d(Array.from(w, LN)) : d().map(RN);
  }, l.ticks = function(w) {
    var A = d();
    return e(A[0], A[A.length - 1], w ?? 10);
  }, l.tickFormat = function(w, A) {
    return A == null ? m : c(A);
  }, l.nice = function(w) {
    var A = d();
    return (!w || typeof w.range != "function") && (w = t(A[0], A[A.length - 1], w ?? 10)), w ? d(sA(A, w)) : l;
  }, l.copy = function() {
    return Ui(l, gv(e, t, r, n, a, i, o, s, u, c));
  }, l;
}
function qN() {
  return $t.apply(gv(Dk, kk, lr, yv, Us, Hi, hv, dv, Ur, xA).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function BN() {
  return $t.apply(gv($k, Ik, fr, mv, Hs, Ws, vv, pv, Ur, wA).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Ks() {
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
  return c.range = l(ua), c.rangeRound = l(nv), c.unknown = function(f) {
    return arguments.length ? (u = f, c) : u;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function Mr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function OA() {
  var e = jr(Ks()(ut));
  return e.copy = function() {
    return Mr(e, OA());
  }, hr.apply(e, arguments);
}
function SA() {
  var e = sv(Ks()).domain([1, 10]);
  return e.copy = function() {
    return Mr(e, SA()).base(e.base());
  }, hr.apply(e, arguments);
}
function AA() {
  var e = uv(Ks());
  return e.copy = function() {
    return Mr(e, AA()).constant(e.constant());
  }, hr.apply(e, arguments);
}
function bv() {
  var e = cv(Ks());
  return e.copy = function() {
    return Mr(e, bv()).exponent(e.exponent());
  }, hr.apply(e, arguments);
}
function FN() {
  return bv.apply(null, arguments).exponent(0.5);
}
function _A() {
  var e = [], t = ut;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((zi(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let a of n) a != null && !isNaN(a = +a) && e.push(a);
    return e.sort(Ar), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, a) => t(a / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (a, i) => TD(e, i / n));
  }, r.copy = function() {
    return _A(t).domain(e);
  }, hr.apply(r, arguments);
}
function Vs() {
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
      return arguments.length ? ([b, g, x] = v, c = QD(h, [b, g, x]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = y(ua), p.rangeRound = y(nv), p.unknown = function(h) {
    return arguments.length ? (d = h, p) : d;
  }, function(h) {
    return l = h, a = h(e), i = h(t), o = h(r), s = a === i ? 0 : 0.5 / (i - a), u = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function PA() {
  var e = jr(Vs()(ut));
  return e.copy = function() {
    return Mr(e, PA());
  }, hr.apply(e, arguments);
}
function TA() {
  var e = sv(Vs()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Mr(e, TA()).base(e.base());
  }, hr.apply(e, arguments);
}
function EA() {
  var e = uv(Vs());
  return e.copy = function() {
    return Mr(e, EA()).constant(e.constant());
  }, hr.apply(e, arguments);
}
function xv() {
  var e = cv(Vs());
  return e.copy = function() {
    return Mr(e, xv()).exponent(e.exponent());
  }, hr.apply(e, arguments);
}
function zN() {
  return xv.apply(null, arguments).exponent(0.5);
}
const J0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: ii,
  scaleDiverging: PA,
  scaleDivergingLog: TA,
  scaleDivergingPow: xv,
  scaleDivergingSqrt: zN,
  scaleDivergingSymlog: EA,
  scaleIdentity: oA,
  scaleImplicit: op,
  scaleLinear: Fo,
  scaleLog: uA,
  scaleOrdinal: ev,
  scalePoint: qa,
  scalePow: lv,
  scaleQuantile: fA,
  scaleQuantize: dA,
  scaleRadial: lA,
  scaleSequential: OA,
  scaleSequentialLog: SA,
  scaleSequentialPow: bv,
  scaleSequentialQuantile: _A,
  scaleSequentialSqrt: FN,
  scaleSequentialSymlog: AA,
  scaleSqrt: Ok,
  scaleSymlog: cA,
  scaleThreshold: pA,
  scaleTime: qN,
  scaleUtc: BN,
  tickFormat: iA
}, Symbol.toStringTag, { value: "Module" }));
var Rf, Q0;
function Gs() {
  if (Q0) return Rf;
  Q0 = 1;
  var e = aa();
  function t(r, n, a) {
    for (var i = -1, o = r.length; ++i < o; ) {
      var s = r[i], u = n(s);
      if (u != null && (c === void 0 ? u === u && !e(u) : a(u, c)))
        var c = u, l = s;
    }
    return l;
  }
  return Rf = t, Rf;
}
var Lf, ex;
function CA() {
  if (ex) return Lf;
  ex = 1;
  function e(t, r) {
    return t > r;
  }
  return Lf = e, Lf;
}
var qf, tx;
function WN() {
  if (tx) return qf;
  tx = 1;
  var e = Gs(), t = CA(), r = sa();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return qf = n, qf;
}
var UN = WN();
const Or = /* @__PURE__ */ _e(UN);
var Bf, rx;
function jA() {
  if (rx) return Bf;
  rx = 1;
  function e(t, r) {
    return t < r;
  }
  return Bf = e, Bf;
}
var Ff, nx;
function HN() {
  if (nx) return Ff;
  nx = 1;
  var e = Gs(), t = jA(), r = sa();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Ff = n, Ff;
}
var KN = HN();
const Ys = /* @__PURE__ */ _e(KN);
var zf, ax;
function VN() {
  if (ax) return zf;
  ax = 1;
  var e = Fh(), t = er(), r = LS(), n = ht();
  function a(i, o) {
    var s = n(i) ? e : r;
    return s(i, t(o, 3));
  }
  return zf = a, zf;
}
var Wf, ix;
function GN() {
  if (ix) return Wf;
  ix = 1;
  var e = NS(), t = VN();
  function r(n, a) {
    return e(t(n, a), 1);
  }
  return Wf = r, Wf;
}
var YN = GN();
const XN = /* @__PURE__ */ _e(YN);
var ca = 1e9, ZN = {
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
}, Ov, Ie = !0, jt = "[DecimalError] ", Zr = jt + "Invalid argument: ", wv = jt + "Exponent out of range: ", la = Math.floor, Br = Math.pow, JN = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, bt, Ze = 1e7, $e = 7, MA = 9007199254740991, Ho = la(MA / $e), re = {};
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
  return ur(this, new this.constructor(e));
};
re.dividedToIntegerBy = re.idiv = function(e) {
  var t = this, r = t.constructor;
  return Pe(ur(t, new r(e), 0, 1), r.precision);
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
  return r.eq(bt) ? new n(0) : (Ie = !1, t = ur(li(r, i), li(e, i), i), Ie = !0, Pe(t, a));
};
re.minus = re.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? DA(t, e) : $A(t, (e.s = -e.s, e));
};
re.modulo = re.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(jt + "NaN");
  return r.s ? (Ie = !1, t = ur(r, e, 0, 1).times(e), Ie = !0, r.minus(t)) : Pe(new n(r), a);
};
re.naturalExponential = re.exp = function() {
  return IA(this);
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
  return e = new t.constructor(e), t.s == e.s ? $A(t, e) : DA(t, (e.s = -e.s, e));
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
    if (i = n, n = i.plus(ur(s, i, o + 2)).times(0.5), Vt(i.d).slice(0, o) === (t = Vt(n.d)).slice(0, o)) {
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
  return r = new n(r), e === void 0 ? r : (Jt(e, 0, ca), t === void 0 ? t = n.rounding : Jt(t, 0, 8), Pe(r, e + Fe(r) + 1, t));
};
re.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = rn(n, !0) : (Jt(e, 0, ca), t === void 0 ? t = a.rounding : Jt(t, 0, 8), n = Pe(new a(n), e + 1, t), r = rn(n, !0, e + 1)), r;
};
re.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? rn(a) : (Jt(e, 0, ca), t === void 0 ? t = i.rounding : Jt(t, 0, 8), n = Pe(new i(a), e + Fe(a) + 1, t), r = rn(n.abs(), !1, e + Fe(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
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
    if ((r = l < 0 ? -l : l) <= MA) {
      for (a = new u(bt), t = Math.ceil(n / $e + 4), Ie = !1; r % 2 && (a = a.times(s), sx(a.d, t)), r = la(r / 2), r !== 0; )
        s = s.times(s), sx(s.d, t);
      return Ie = !0, e.s < 0 ? new u(bt).div(a) : Pe(a, n);
    }
  } else if (i < 0) throw Error(jt + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ie = !1, a = e.times(li(s, n + c)), Ie = !0, a = IA(a), a.s = i, a;
};
re.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = Fe(a), n = rn(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Jt(e, 1, ca), t === void 0 ? t = i.rounding : Jt(t, 0, 8), a = Pe(new i(a), e, t), r = Fe(a), n = rn(a, e <= r || r <= i.toExpNeg, e)), n;
};
re.toSignificantDigits = re.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Jt(e, 1, ca), t === void 0 ? t = n.rounding : Jt(t, 0, 8)), Pe(new n(r), e, t);
};
re.toString = re.valueOf = re.val = re.toJSON = re[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Fe(e), r = e.constructor;
  return rn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function $A(e, t) {
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
function Jt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Zr + e);
}
function Vt(e) {
  var t, r, n, a = e.length - 1, i = "", o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      n = e[t] + "", r = $e - n.length, r && (i += xr(r)), i += n;
    o = e[t], n = o + "", r = $e - n.length, r && (i += xr(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var ur = /* @__PURE__ */ (function() {
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
    var s, u, c, l, f, d, p, y, h, v, b, g, x, O, m, w, A, _, P = n.constructor, D = n.s == a.s ? 1 : -1, T = n.d, $ = a.d;
    if (!n.s) return new P(n);
    if (!a.s) throw Error(jt + "Division by zero");
    for (u = n.e - a.e, A = $.length, m = T.length, p = new P(D), y = p.d = [], c = 0; $[c] == (T[c] || 0); ) ++c;
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
function IA(e, t) {
  var r, n, a, i, o, s, u = 0, c = 0, l = e.constructor, f = l.precision;
  if (Fe(e) > 16) throw Error(wv + Fe(e));
  if (!e.s) return new l(bt);
  for (Ie = !1, s = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(Br(2, c)) / Math.LN10 * 2 + 5 | 0, s += n, r = a = i = new l(bt), l.precision = s; ; ) {
    if (a = Pe(a.times(e), s), r = r.times(++u), o = i.plus(ur(a, r, s)), Vt(o.d).slice(0, s) === Vt(i.d).slice(0, s)) {
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
function Uf(e, t, r) {
  if (t > e.LN10.sd())
    throw Ie = !0, r && (e.precision = r), Error(jt + "LN10 precision limit exceeded");
  return Pe(new e(e.LN10), t);
}
function xr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function li(e, t) {
  var r, n, a, i, o, s, u, c, l, f = 1, d = 10, p = e, y = p.d, h = p.constructor, v = h.precision;
  if (p.s < 1) throw Error(jt + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(bt)) return new h(0);
  if (t == null ? (Ie = !1, c = v) : c = t, p.eq(10))
    return t == null && (Ie = !0), Uf(h, c);
  if (c += d, h.precision = c, r = Vt(y), n = r.charAt(0), i = Fe(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = Vt(p.d), n = r.charAt(0), f++;
    i = Fe(p), n > 1 ? (p = new h("0." + r), i++) : p = new h(n + "." + r.slice(1));
  } else
    return u = Uf(h, c + 2, v).times(i + ""), p = li(new h(n + "." + r.slice(1)), c - d).plus(u), h.precision = v, t == null ? (Ie = !0, Pe(p, v)) : p;
  for (s = o = p = ur(p.minus(bt), p.plus(bt), c), l = Pe(p.times(p), c), a = 3; ; ) {
    if (o = Pe(o.times(l), c), u = s.plus(ur(o, new h(a), c)), Vt(u.d).slice(0, c) === Vt(s.d).slice(0, c))
      return s = s.times(2), i !== 0 && (s = s.plus(Uf(h, c + 2, v).times(i + ""))), s = ur(s, new h(f), c), h.precision = v, t == null ? (Ie = !0, Pe(s, v)) : s;
    s = u, a += 2;
  }
}
function ox(e, t) {
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
    if (e.d.push(+t), Ie && (e.e > Ho || e.e < -Ho)) throw Error(wv + r);
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
  if (r !== void 0 && (i = Br(10, o - a - 1), s = c / i % 10 | 0, u = t < 0 || f[l + 1] !== void 0 || c % i, u = r < 4 ? (s || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || u || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? c / Br(10, o - a) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return u ? (i = Fe(e), f.length = 1, t = t - i - 1, f[0] = Br(10, ($e - t % $e) % $e), e.e = la(-t / $e) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, i = 1, l--) : (f.length = l + 1, i = Br(10, $e - n), f[l] = a > 0 ? (c / Br(10, o - a) % Br(10, a) | 0) * i : 0), u)
    for (; ; )
      if (l == 0) {
        (f[0] += i) == Ze && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += i, f[l] != Ze) break;
        f[l--] = 0, i = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Ie && (e.e > Ho || e.e < -Ho))
    throw Error(wv + Fe(e));
  return e;
}
function DA(e, t) {
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
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + xr(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + xr(-a - 1) + i, r && (n = r - o) > 0 && (i += xr(n))) : a >= o ? (i += xr(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + xr(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += xr(n))), e.s < 0 ? "-" + i : i;
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
      return ox(o, i.toString());
    } else if (typeof i != "string")
      throw Error(Zr + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, JN.test(i)) ox(o, i);
    else throw Error(Zr + i);
  }
  if (a.prototype = re, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = kA, a.config = a.set = QN, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function QN(e) {
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
var Ov = kA(ZN);
bt = new Ov(1);
const Ae = Ov;
function eR(e) {
  return aR(e) || nR(e) || rR(e) || tR();
}
function tR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rR(e, t) {
  if (e) {
    if (typeof e == "string") return lp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lp(e, t);
  }
}
function nR(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function aR(e) {
  if (Array.isArray(e)) return lp(e);
}
function lp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var iR = function(t) {
  return t;
}, NA = {}, RA = function(t) {
  return t === NA;
}, ux = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && RA(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, oR = function e(t, r) {
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
        return RA(f) ? u.shift() : f;
      });
      return r.apply(void 0, eR(l).concat(u));
    }));
  });
}, Xs = function(t) {
  return oR(t.length, t);
}, fp = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, sR = Xs(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), uR = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return iR;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(s, u) {
      return u(s);
    }, i.apply(void 0, arguments));
  };
}, dp = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, LA = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(s, u) {
      return s === r[u];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function cR(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Ae(e).abs().log(10).toNumber()) + 1, t;
}
function lR(e, t, r) {
  for (var n = new Ae(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var fR = Xs(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), dR = Xs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), pR = Xs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Zs = {
  rangeStep: lR,
  getDigitCount: cR,
  interpolateNumber: fR,
  uninterpolateNumber: dR,
  uninterpolateTruncation: pR
};
function pp(e) {
  return yR(e) || vR(e) || qA(e) || hR();
}
function hR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vR(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function yR(e) {
  if (Array.isArray(e)) return hp(e);
}
function fi(e, t) {
  return bR(e) || gR(e, t) || qA(e, t) || mR();
}
function mR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qA(e, t) {
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
function gR(e, t) {
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
function bR(e) {
  if (Array.isArray(e)) return e;
}
function BA(e) {
  var t = fi(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function FA(e, t, r) {
  if (e.lte(0))
    return new Ae(0);
  var n = Zs.getDigitCount(e.toNumber()), a = new Ae(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, s = new Ae(Math.ceil(i.div(o).toNumber())).add(r).mul(o), u = s.mul(a);
  return t ? u : new Ae(Math.ceil(u));
}
function xR(e, t, r) {
  var n = 1, a = new Ae(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new Ae(10).pow(Zs.getDigitCount(e) - 1), a = new Ae(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new Ae(Math.floor(e)));
  } else e === 0 ? a = new Ae(Math.floor((t - 1) / 2)) : r || (a = new Ae(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = uR(sR(function(u) {
    return a.add(new Ae(u - o).mul(n)).toNumber();
  }), fp);
  return s(0, t);
}
function zA(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Ae(0),
      tickMin: new Ae(0),
      tickMax: new Ae(0)
    };
  var i = FA(new Ae(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new Ae(0) : (o = new Ae(e).add(t).div(2), o = o.sub(new Ae(o).mod(i)));
  var s = Math.ceil(o.sub(e).div(i).toNumber()), u = Math.ceil(new Ae(t).sub(o).div(i).toNumber()), c = s + u + 1;
  return c > r ? zA(e, t, r, n, a + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, s = t > 0 ? s : s + (r - c)), {
    step: i,
    tickMin: o.sub(new Ae(s).mul(i)),
    tickMax: o.add(new Ae(u).mul(i))
  });
}
function wR(e) {
  var t = fi(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), s = BA([r, n]), u = fi(s, 2), c = u[0], l = u[1];
  if (c === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [c].concat(pp(fp(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(pp(fp(0, a - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? dp(f) : f;
  }
  if (c === l)
    return xR(c, a, i);
  var d = zA(c, l, o, i), p = d.step, y = d.tickMin, h = d.tickMax, v = Zs.rangeStep(y, h.add(new Ae(0.1).mul(p)), p);
  return r > n ? dp(v) : v;
}
function OR(e, t) {
  var r = fi(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = BA([n, a]), s = fi(o, 2), u = s[0], c = s[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (u === c)
    return [u];
  var l = Math.max(t, 2), f = FA(new Ae(c).sub(u).div(l - 1), i, 0), d = [].concat(pp(Zs.rangeStep(new Ae(u), new Ae(c).sub(new Ae(0.99).mul(f)), f)), [c]);
  return n > a ? dp(d) : d;
}
var SR = LA(wR), AR = LA(OR), _R = process.env.NODE_ENV === "production", Hf = "Invariant failed";
function ft(e, t) {
  if (_R)
    throw new Error(Hf);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Hf, ": ").concat(r) : Hf;
  throw new Error(n);
}
var PR = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
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
function TR(e, t) {
  return MR(e) || jR(e, t) || CR(e, t) || ER();
}
function ER() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CR(e, t) {
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
function jR(e, t) {
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
function MR(e) {
  if (Array.isArray(e)) return e;
}
function $R(e, t) {
  if (e == null) return {};
  var r = IR(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function IR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function DR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, HA(n.key), n);
  }
}
function NR(e, t, r) {
  return t && kR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function RR(e, t, r) {
  return t = Vo(t), LR(e, WA() ? Reflect.construct(t, r || [], Vo(e).constructor) : t.apply(e, r));
}
function LR(e, t) {
  if (t && (Ln(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qR(e);
}
function qR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function WA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (WA = function() {
    return !!e;
  })();
}
function Vo(e) {
  return Vo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vo(e);
}
function BR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vp(e, t);
}
function vp(e, t) {
  return vp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, vp(e, t);
}
function UA(e, t, r) {
  return t = HA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HA(e) {
  var t = FR(e, "string");
  return Ln(t) == "symbol" ? t : t + "";
}
function FR(e, t) {
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
    return DR(this, t), RR(this, t, arguments);
  }
  return BR(t, e), NR(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, s = n.dataKey, u = n.data, c = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, d = $R(n, PR), p = ie(d, !1);
      this.props.direction === "x" && l.type !== "number" && (process.env.NODE_ENV !== "production" ? ft(!1, 'ErrorBar requires Axis type property to be "number".') : ft());
      var y = u.map(function(h) {
        var v = c(h, s), b = v.x, g = v.y, x = v.value, O = v.errorVal;
        if (!O)
          return null;
        var m = [], w, A;
        if (Array.isArray(O)) {
          var _ = TR(O, 2);
          w = _[0], A = _[1];
        } else
          w = A = O;
        if (i === "vertical") {
          var P = l.scale, D = g + a, T = D + o, $ = D - o, M = P(x - w), j = P(x + A);
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
          var I = f.scale, k = b + a, R = k - o, L = k + o, z = I(x - w), N = I(x + A);
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
UA(Ki, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
UA(Ki, "displayName", "ErrorBar");
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
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
      zR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zR(e, t, r) {
  return t = WR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WR(e) {
  var t = UR(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function UR(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var KA = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = mt(r, Yr);
  if (!o)
    return null;
  var s = Yr.defaultProps, u = s !== void 0 ? kr(kr({}, s), o.props) : {}, c;
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
  }), kr(kr(kr({}, u), Yr.getWithHeight(o, a)), {}, {
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
function fx(e) {
  return GR(e) || VR(e) || KR(e) || HR();
}
function HR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KR(e, t) {
  if (e) {
    if (typeof e == "string") return yp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yp(e, t);
  }
}
function VR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function GR(e) {
  if (Array.isArray(e)) return yp(e);
}
function yp(e, t) {
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
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dx(Object(r), !0).forEach(function(n) {
      En(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function En(e, t, r) {
  return t = YR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YR(e) {
  var t = XR(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function XR(e, t) {
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
  return le(e) || le(t) ? r : Ge(t) ? xt(e, t, r) : ue(t) ? t(e) : r;
}
function Ba(e, t, r, n) {
  var a = XN(e, function(s) {
    return Re(s, t);
  });
  if (r === "number") {
    var i = a.filter(function(s) {
      return G(s) || parseFloat(s);
    });
    return i.length ? [Ys(i), Or(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(s) {
    return !le(s);
  }) : a;
  return o.map(function(s) {
    return Ge(s) || s instanceof Date ? s : "";
  });
}
var ZR = function(t) {
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
}, JR = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, s = Object.keys(i), u = 0, c = s.length; u < c; u++)
    for (var l = i[s[u]].stackGroups, f = Object.keys(l), d = 0, p = f.length; d < p; d++) {
      var y = l[f[d]], h = y.items, v = y.cateAxisId, b = h.filter(function(A) {
        return sr(A.type).indexOf("Bar") >= 0;
      });
      if (b && b.length) {
        var g = b[0].type.defaultProps, x = g !== void 0 ? Ne(Ne({}, g), b[0].props) : b[0].props, O = x.barSize, m = x[v];
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
}, QR = function(t) {
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
      }, A = [].concat(fx(O), [w]);
      return v = A[A.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(_) {
        A.push({
          item: _,
          position: v
        });
      }), A;
    }, f);
  } else {
    var b = st(n, a, 0, !0);
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
}, eL = function(t, r, n, a) {
  var i = n.children, o = n.width, s = n.margin, u = o - (s.left || 0) - (s.right || 0), c = KA({
    children: i,
    legendWidth: u
  });
  if (c) {
    var l = a || {}, f = l.width, d = l.height, p = c.align, y = c.verticalAlign, h = c.layout;
    if ((h === "vertical" || h === "horizontal" && y === "middle") && p !== "center" && G(t[p]))
      return Ne(Ne({}, t), {}, En({}, p, t[p] + (f || 0)));
    if ((h === "horizontal" || h === "vertical" && p === "center") && y !== "middle" && G(t[y]))
      return Ne(Ne({}, t), {}, En({}, y, t[y] + (d || 0)));
  }
  return t;
}, tL = function(t, r, n) {
  return le(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, VA = function(t, r, n, a, i) {
  var o = r.props.children, s = wt(o, Ki).filter(function(c) {
    return tL(a, i, c.props.direction);
  });
  if (s && s.length) {
    var u = s.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, l) {
      var f = Re(l, n);
      if (le(f)) return c;
      var d = Array.isArray(f) ? [Ys(f), Or(f)] : [f, f], p = u.reduce(function(y, h) {
        var v = Re(l, h, 0), b = d[0] - Math.abs(Array.isArray(v) ? v[0] : v), g = d[1] + Math.abs(Array.isArray(v) ? v[1] : v);
        return [Math.min(b, y[0]), Math.max(g, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, rL = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    return VA(t, s, n, i, a);
  }).filter(function(s) {
    return !le(s);
  });
  return o && o.length ? o.reduce(function(s, u) {
    return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, GA = function(t, r, n, a, i) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && VA(t, u, c, a) || Ba(t, c, n, i);
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
}, YA = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, XA = function(t, r, n, a) {
  if (a)
    return t.map(function(u) {
      return u.coordinate;
    });
  var i, o, s = t.map(function(u) {
    return u.coordinate === r && (i = !0), u.coordinate === n && (o = !0), u.coordinate;
  });
  return i || s.push(r), o || s.push(n), s;
}, or = function(t, r, n) {
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
}, Kf = /* @__PURE__ */ new WeakMap(), lo = function(t, r) {
  if (typeof r != "function")
    return t;
  Kf.has(t) || Kf.set(t, /* @__PURE__ */ new WeakMap());
  var n = Kf.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, ZA = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, s = t.axisType;
  if (a === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: ii(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: Fo(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: qa(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: ii(),
      realScaleType: "band"
    } : {
      scale: Fo(),
      realScaleType: "linear"
    };
  if (Fi(a)) {
    var u = "scale".concat(ks(a));
    return {
      scale: (J0[u] || qa)(),
      realScaleType: J0[u] ? u : "point"
    };
  }
  return ue(a) ? {
    scale: a
  } : {
    scale: qa(),
    realScaleType: "point"
  };
}, px = 1e-4, JA = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - px, o = Math.max(a[0], a[1]) + px, s = t(r[0]), u = t(r[n - 1]);
    (s < i || s > o || u < i || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, nL = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, aL = function(t, r) {
  if (!r || r.length !== 2 || !G(r[0]) || !G(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!G(t[0]) || t[0] < n) && (i[0] = n), (!G(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, iL = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, s = 0; s < r; ++s) {
        var u = oa(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = i, t[s][n][1] = i + u, i = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1]);
      }
}, oL = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var s = oa(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + s, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, sL = {
  sign: iL,
  // @ts-expect-error definitelytyped types are incorrect
  expand: _M,
  // @ts-expect-error definitelytyped types are incorrect
  none: jn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: PM,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: TM,
  positive: oL
}, uL = function(t, r, n) {
  var a = r.map(function(s) {
    return s.props.dataKey;
  }), i = sL[n], o = AM().keys(a).value(function(s, u) {
    return +Re(s, u, 0);
  }).order(Kd).offset(i);
  return o(t);
}, cL = function(t, r, n, a, i, o) {
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
      g.stackGroups[un("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return Ne(Ne({}, f), {}, En({}, b, g));
  }, u), l = {};
  return Object.keys(c).reduce(function(f, d) {
    var p = c[d];
    if (p.hasStack) {
      var y = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(h, v) {
        var b = p.stackGroups[v];
        return Ne(Ne({}, h), {}, En({}, v, {
          numericAxisId: n,
          cateAxisId: a,
          items: b.items,
          stackedData: uL(t, b.items, i)
        }));
      }, y);
    }
    return Ne(Ne({}, f), {}, En({}, d, p));
  }, l);
}, QA = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, s = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var l = SR(c, i, s);
    return t.domain([Ys(l), Or(l)]), {
      niceTicks: l
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = AR(f, i, s);
    return {
      niceTicks: d
    };
  }
  return null;
};
function Go(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !le(a[t.dataKey])) {
      var s = So(r, "value", a[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var u = Re(a, le(o) ? t.dataKey : o);
  return le(u) ? null : t.scale(u);
}
var hx = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + a : null;
  var u = Re(o, r.dataKey, r.domain[s]);
  return le(u) ? null : r.scale(u) - i / 2 + a;
}, lL = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, fL = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Ne(Ne({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (Ge(i)) {
    var o = r[i];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, dL = function(t) {
  return t.reduce(function(r, n) {
    return [Ys(n.concat([r[0]]).filter(G)), Or(n.concat([r[1]]).filter(G))];
  }, [1 / 0, -1 / 0]);
}, e_ = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], s = o.stackedData, u = s.reduce(function(c, l) {
      var f = dL(l.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], a[0]), Math.max(u[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, vx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, yx = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, mp = function(t, r, n) {
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
}, Yo = function(t, r, n) {
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
}, mx = function(t, r, n) {
  return !t || !t.length || en(t, xt(n, "type.defaultProps.domain")) ? r : t;
}, t_ = function(t, r) {
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
function nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gx(Object(r), !0).forEach(function(n) {
      r_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r_(e, t, r) {
  return t = pL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pL(e) {
  var t = hL(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function hL(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vL(e, t) {
  return bL(e) || gL(e, t) || mL(e, t) || yL();
}
function yL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mL(e, t) {
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
function gL(e, t) {
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
function bL(e) {
  if (Array.isArray(e)) return e;
}
var Xo = Math.PI / 180, xL = function(t) {
  return t * 180 / Math.PI;
}, je = function(t, r, n, a) {
  return {
    x: t + Math.cos(-Xo * a) * n,
    y: r + Math.sin(-Xo * a) * n
  };
}, n_ = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, wL = function(t, r, n, a, i) {
  var o = t.width, s = t.height, u = t.startAngle, c = t.endAngle, l = st(t.cx, o, o / 2), f = st(t.cy, s, s / 2), d = n_(o, s, n), p = st(t.innerRadius, d, 0), y = st(t.outerRadius, d, d * 0.8), h = Object.keys(r);
  return h.reduce(function(v, b) {
    var g = r[b], x = g.domain, O = g.reversed, m;
    if (le(g.range))
      a === "angleAxis" ? m = [u, c] : a === "radiusAxis" && (m = [p, y]), O && (m = [m[1], m[0]]);
    else {
      m = g.range;
      var w = m, A = vL(w, 2);
      u = A[0], c = A[1];
    }
    var _ = ZA(g, i), P = _.realScaleType, D = _.scale;
    D.domain(x).range(m), JA(D);
    var T = QA(D, nr(nr({}, g), {}, {
      realScaleType: P
    })), $ = nr(nr(nr({}, g), T), {}, {
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
    return nr(nr({}, v), {}, r_({}, b, $));
  }, {});
}, OL = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, SL = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, s = OL({
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
    angle: xL(c),
    angleInRadian: c
  };
}, AL = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, _L = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), s = Math.min(i, o);
  return t + s * 360;
}, xx = function(t, r) {
  var n = t.x, a = t.y, i = SL({
    x: n,
    y: a
  }, r), o = i.radius, s = i.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var l = AL(r), f = l.startAngle, d = l.endAngle, p = s, y;
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
  return y ? nr(nr({}, r), {}, {
    radius: o,
    angle: _L(p, r)
  }) : null;
}, a_ = function(t) {
  return !/* @__PURE__ */ Rt(t) && !ue(t) && typeof t != "boolean" ? t.className : "";
};
function vi(e) {
  "@babel/helpers - typeof";
  return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vi(e);
}
var PL = ["offset"];
function TL(e) {
  return ML(e) || jL(e) || CL(e) || EL();
}
function EL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CL(e, t) {
  if (e) {
    if (typeof e == "string") return gp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gp(e, t);
  }
}
function jL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ML(e) {
  if (Array.isArray(e)) return gp(e);
}
function gp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $L(e, t) {
  if (e == null) return {};
  var r = IL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function IL(e, t) {
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
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wx(Object(r), !0).forEach(function(n) {
      DL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DL(e, t, r) {
  return t = kL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kL(e) {
  var t = NL(e, "string");
  return vi(t) == "symbol" ? t : t + "";
}
function NL(e, t) {
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
var RL = function(t) {
  var r = t.value, n = t.formatter, a = le(t.children) ? r : t.children;
  return ue(n) ? n(a) : a;
}, LL = function(t, r) {
  var n = ot(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, qL = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, s = t.className, u = i, c = u.cx, l = u.cy, f = u.innerRadius, d = u.outerRadius, p = u.startAngle, y = u.endAngle, h = u.clockWise, v = (f + d) / 2, b = LL(p, y), g = b >= 0 ? 1 : -1, x, O;
  a === "insideStart" ? (x = p + g * o, O = h) : a === "insideEnd" ? (x = y - g * o, O = !h) : a === "end" && (x = y + g * o, O = h), O = b <= 0 ? O : !O;
  var m = je(c, l, v, x), w = je(c, l, v, x + (O ? 1 : -1) * 359), A = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), _ = le(t.id) ? un("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ C.createElement("text", yi({}, n, {
    dominantBaseline: "central",
    className: de("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("path", {
    id: _,
    d: A
  })), /* @__PURE__ */ C.createElement("textPath", {
    xlinkHref: "#".concat(_)
  }, r));
}, BL = function(t) {
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
}, FL = function(t) {
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
  }, A) : ia(i) && (G(i.x) || zr(i.x)) && (G(i.y) || zr(i.y)) ? We({
    x: s + st(i.x, c),
    y: u + st(i.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, A) : We({
    x: s + c / 2,
    y: u + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, A);
}, zL = function(t) {
  return "cx" in t && G(t.cx);
};
function Ve(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = $L(e, PL), a = We({
    offset: r
  }, n), i = a.viewBox, o = a.position, s = a.value, u = a.children, c = a.content, l = a.className, f = l === void 0 ? "" : l, d = a.textBreakAll;
  if (!i || le(s) && le(u) && !/* @__PURE__ */ Rt(c) && !ue(c))
    return null;
  if (/* @__PURE__ */ Rt(c))
    return /* @__PURE__ */ Ue(c, a);
  var p;
  if (ue(c)) {
    if (p = /* @__PURE__ */ iO(c, a), /* @__PURE__ */ Rt(p))
      return p;
  } else
    p = RL(a);
  var y = zL(i), h = ie(a, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return qL(a, p, h);
  var v = y ? BL(a) : FL(a);
  return /* @__PURE__ */ C.createElement(Pr, yi({
    className: de("recharts-label", f)
  }, h, v, {
    breakAll: d
  }), p);
}
Ve.displayName = "Label";
var i_ = function(t) {
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
}, WL = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ C.createElement(Ve, {
    key: "label-implicit",
    viewBox: r
  }) : Ge(t) ? /* @__PURE__ */ C.createElement(Ve, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Rt(t) ? t.type === Ve ? /* @__PURE__ */ Ue(t, {
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
}, UL = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = i_(t), o = wt(a, Ve).map(function(u, c) {
    return /* @__PURE__ */ Ue(u, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var s = WL(t.label, r || i);
  return [s].concat(TL(o));
};
Ve.parseViewBox = i_;
Ve.renderCallByParent = UL;
var Vf, Ox;
function HL() {
  if (Ox) return Vf;
  Ox = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Vf = e, Vf;
}
var KL = HL();
const VL = /* @__PURE__ */ _e(KL);
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
var GL = ["valueAccessor"], YL = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function XL(e) {
  return eq(e) || QL(e) || JL(e) || ZL();
}
function ZL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JL(e, t) {
  if (e) {
    if (typeof e == "string") return bp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bp(e, t);
  }
}
function QL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function eq(e) {
  if (Array.isArray(e)) return bp(e);
}
function bp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zo() {
  return Zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zo.apply(this, arguments);
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
      tq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sx(Object(r)).forEach(function(n) {
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
function _x(e, t) {
  if (e == null) return {};
  var r = aq(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function aq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var iq = function(t) {
  return Array.isArray(t.value) ? VL(t.value) : t.value;
};
function Et(e) {
  var t = e.valueAccessor, r = t === void 0 ? iq : t, n = _x(e, GL), a = n.data, i = n.dataKey, o = n.clockWise, s = n.id, u = n.textBreakAll, c = _x(n, YL);
  return !a || !a.length ? null : /* @__PURE__ */ C.createElement(pe, {
    className: "recharts-label-list"
  }, a.map(function(l, f) {
    var d = le(i) ? r(l, f) : Re(l && l.payload, i), p = le(s) ? {} : {
      id: "".concat(s, "-").concat(f)
    };
    return /* @__PURE__ */ C.createElement(Ve, Zo({}, ie(l, !0), c, p, {
      parentViewBox: l.parentViewBox,
      value: d,
      textBreakAll: u,
      viewBox: Ve.parseViewBox(le(o) ? l : Ax(Ax({}, l), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Et.displayName = "LabelList";
function oq(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ C.createElement(Et, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ C.isValidElement(e) || ue(e) ? /* @__PURE__ */ C.createElement(Et, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : ia(e) ? /* @__PURE__ */ C.createElement(Et, Zo({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function sq(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = wt(n, Et).map(function(o, s) {
    return /* @__PURE__ */ Ue(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return a;
  var i = oq(e.label, t);
  return [i].concat(XL(a));
}
Et.renderCallByParent = sq;
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
      uq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Px(Object(r)).forEach(function(n) {
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
  return gi(t) == "symbol" ? t : t + "";
}
function lq(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fq = function(t, r) {
  var n = ot(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, fo = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, s = t.isExternal, u = t.cornerRadius, c = t.cornerIsExternal, l = u * (s ? 1 : -1) + a, f = Math.asin(u / l) / Xo, d = c ? i : i + o * f, p = je(r, n, l, d), y = je(r, n, a, d), h = c ? i - o * f : i, v = je(r, n, l * Math.cos(f * Xo), h);
  return {
    center: p,
    circleTangency: y,
    lineTangency: v,
    theta: f
  };
}, o_ = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, s = t.endAngle, u = fq(o, s), c = o + u, l = je(r, n, i, o), f = je(r, n, i, c), d = "M ".concat(l.x, ",").concat(l.y, `
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
}, dq = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, u = t.cornerIsExternal, c = t.startAngle, l = t.endAngle, f = ot(l - c), d = fo({
    cx: r,
    cy: n,
    radius: i,
    angle: c,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: u
  }), p = d.circleTangency, y = d.lineTangency, h = d.theta, v = fo({
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
      `) : o_({
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
    var w = fo({
      cx: r,
      cy: n,
      radius: a,
      angle: c,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), A = w.circleTangency, _ = w.lineTangency, P = w.theta, D = fo({
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
      A`).concat(a, ",").concat(a, ",0,").concat(+(j > 180), ",").concat(+(f > 0), ",").concat(A.x, ",").concat(A.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(_.x, ",").concat(_.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, pq = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, s_ = function(t) {
  var r = Tx(Tx({}, pq), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, u = r.forceCornerRadius, c = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || l === f)
    return null;
  var p = de("recharts-sector", d), y = o - i, h = st(s, y, 0, !0), v;
  return h > 0 && Math.abs(l - f) < 360 ? v = dq({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(h, y / 2),
    forceCornerRadius: u,
    cornerIsExternal: c,
    startAngle: l,
    endAngle: f
  }) : v = o_({
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
      hq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ex(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hq(e, t, r) {
  return t = vq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vq(e) {
  var t = yq(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function yq(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jx = {
  curveBasisClosed: pM,
  curveBasisOpen: hM,
  curveBasis: dM,
  curveBumpX: J2,
  curveBumpY: Q2,
  curveLinearClosed: vM,
  curveLinear: Rs,
  curveMonotoneX: yM,
  curveMonotoneY: mM,
  curveNatural: gM,
  curveStep: bM,
  curveStepAfter: wM,
  curveStepBefore: xM
}, po = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Pa = function(t) {
  return t.x;
}, Ta = function(t) {
  return t.y;
}, mq = function(t, r) {
  if (ue(t))
    return t;
  var n = "curve".concat(ks(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? jx["".concat(n).concat(r === "vertical" ? "Y" : "X")] : jx[n] || Rs;
}, gq = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, s = t.layout, u = t.connectNulls, c = u === void 0 ? !1 : u, l = mq(n, s), f = c ? i.filter(function(h) {
    return po(h);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(h) {
      return po(h);
    }) : o, y = f.map(function(h, v) {
      return Cx(Cx({}, h), {}, {
        base: p[v]
      });
    });
    return s === "vertical" ? d = no().y(Ta).x1(Pa).x0(function(h) {
      return h.base.x;
    }) : d = no().x(Pa).y1(Ta).y0(function(h) {
      return h.base.y;
    }), d.defined(po).curve(l), d(y);
  }
  return s === "vertical" && G(o) ? d = no().y(Ta).x1(Pa).x0(o) : G(o) ? d = no().x(Pa).y1(Ta).y0(o) : d = yS().x(Pa).y(Ta), d.defined(po).curve(l), d(f);
}, Jr = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? gq(t) : a;
  return /* @__PURE__ */ C.createElement("path", wp({}, ie(t, !1), Ao(t), {
    className: de("recharts-curve", r),
    d: o,
    ref: i
  }));
}, ho = { exports: {} }, vo = { exports: {} }, xe = {};
var Mx;
function bq() {
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
function xq() {
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
    var m = u, w = c, A = s, _ = o, P = t, D = l, T = n, $ = y, M = p, j = r, I = i, k = a, R = f, L = !1;
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
    we.AsyncMode = m, we.ConcurrentMode = w, we.ContextConsumer = A, we.ContextProvider = _, we.Element = P, we.ForwardRef = D, we.Fragment = T, we.Lazy = $, we.Memo = M, we.Portal = j, we.Profiler = I, we.StrictMode = k, we.Suspense = R, we.isAsyncMode = z, we.isConcurrentMode = N, we.isContextConsumer = B, we.isContextProvider = q, we.isElement = H, we.isForwardRef = X, we.isFragment = te, we.isLazy = ne, we.isMemo = ee, we.isPortal = J, we.isProfiler = U, we.isStrictMode = V, we.isSuspense = Z, we.isValidElementType = x, we.typeOf = O;
  })()), we;
}
var Ix;
function u_() {
  return Ix || (Ix = 1, process.env.NODE_ENV === "production" ? vo.exports = bq() : vo.exports = xq()), vo.exports;
}
var Gf, Dx;
function wq() {
  if (Dx) return Gf;
  Dx = 1;
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
  return Gf = a() ? Object.assign : function(i, o) {
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
  }, Gf;
}
var Yf, kx;
function Av() {
  if (kx) return Yf;
  kx = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Yf = e, Yf;
}
var Xf, Nx;
function c_() {
  return Nx || (Nx = 1, Xf = Function.call.bind(Object.prototype.hasOwnProperty)), Xf;
}
var Zf, Rx;
function Oq() {
  if (Rx) return Zf;
  Rx = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Av(), r = {}, n = /* @__PURE__ */ c_();
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
  }, Zf = a, Zf;
}
var Jf, Lx;
function Sq() {
  if (Lx) return Jf;
  Lx = 1;
  var e = u_(), t = wq(), r = /* @__PURE__ */ Av(), n = /* @__PURE__ */ c_(), a = /* @__PURE__ */ Oq(), i = function() {
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
  return Jf = function(s, u) {
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
      function H(te, ne, ee, J, U, V, Z) {
        if (J = J || d, V = V || ee, Z !== r) {
          if (u) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Y = J + ":" + ee;
            !B[Y] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[Y] = !0, q++);
          }
        }
        return ne[ee] == null ? te ? ne[ee] === null ? new h("The " + U + " `" + V + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new h("The " + U + " `" + V + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : N(ne, ee, J, U, V);
      }
      var X = H.bind(null, !1);
      return X.isRequired = H.bind(null, !0), X;
    }
    function b(N) {
      function B(q, H, X, te, ne, ee) {
        var J = q[H], U = k(J);
        if (U !== N) {
          var V = R(J);
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
          var J = k(ee);
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + J + "` supplied to `" + X + "`, expected an array."));
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
          var ee = k(ne);
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
          var ee = k(ne);
          return new h("Invalid " + X + " `" + te + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(N);
    }
    function w(N) {
      function B(q, H, X, te, ne) {
        if (!(q[H] instanceof N)) {
          var ee = N.name || d, J = z(q[H]);
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + J + "` supplied to `" + X + "`, expected ") + ("instance of `" + ee + "`."));
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
        for (var ee = q[H], J = 0; J < N.length; J++)
          if (y(ee, N[J]))
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
        var ee = q[H], J = k(ee);
        if (J !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + J + "` supplied to `" + X + "`, expected an object."));
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
      function H(X, te, ne, ee, J) {
        for (var U = [], V = 0; V < N.length; V++) {
          var Z = N[V], E = Z(X, te, ne, ee, J, r);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && U.push(E.data.expectedType);
        }
        var Y = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new h("Invalid " + ee + " `" + J + "` supplied to " + ("`" + ne + "`" + Y + "."));
      }
      return v(H);
    }
    function D() {
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
        var ee = q[H], J = k(ee);
        if (J !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type `" + J + "` " + ("supplied to `" + X + "`, expected `object`."));
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
        var ee = q[H], J = k(ee);
        if (J !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type `" + J + "` " + ("supplied to `" + X + "`, expected `object`."));
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
  }, Jf;
}
var Qf, qx;
function Aq() {
  if (qx) return Qf;
  qx = 1;
  var e = /* @__PURE__ */ Av();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Qf = function() {
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
  }, Qf;
}
var Bx;
function _q() {
  if (Bx) return ho.exports;
  if (Bx = 1, process.env.NODE_ENV !== "production") {
    var e = u_(), t = !0;
    ho.exports = /* @__PURE__ */ Sq()(e.isElement, t);
  } else
    ho.exports = /* @__PURE__ */ Aq()();
  return ho.exports;
}
var Pq = /* @__PURE__ */ _q();
const Oe = /* @__PURE__ */ _e(Pq);
var Tq = Object.getOwnPropertyNames, Eq = Object.getOwnPropertySymbols, Cq = Object.prototype.hasOwnProperty;
function Fx(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function yo(e) {
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
  return Tq(e).concat(Eq(e));
}
var jq = Object.hasOwn || (function(e, t) {
  return Cq.call(e, t);
});
function fn(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var Mq = "__v", $q = "__o", Iq = "_owner", Wx = Object.getOwnPropertyDescriptor, Ux = Object.keys;
function Dq(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function kq(e, t) {
  return fn(e.getTime(), t.getTime());
}
function Nq(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function Rq(e, t) {
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
var Lq = fn;
function qq(e, t, r) {
  var n = Ux(e), a = n.length;
  if (Ux(t).length !== a)
    return !1;
  for (; a-- > 0; )
    if (!l_(e, t, r, n[a]))
      return !1;
  return !0;
}
function Ea(e, t, r) {
  var n = zx(e), a = n.length;
  if (zx(t).length !== a)
    return !1;
  for (var i, o, s; a-- > 0; )
    if (i = n[a], !l_(e, t, r, i) || (o = Wx(e, i), s = Wx(t, i), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function Bq(e, t) {
  return fn(e.valueOf(), t.valueOf());
}
function Fq(e, t) {
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
function zq(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Wq(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function l_(e, t, r, n) {
  return (n === Iq || n === $q || n === Mq) && (e.$$typeof || t.$$typeof) ? !0 : jq(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var Uq = "[object Arguments]", Hq = "[object Boolean]", Kq = "[object Date]", Vq = "[object Error]", Gq = "[object Map]", Yq = "[object Number]", Xq = "[object Object]", Zq = "[object RegExp]", Jq = "[object Set]", Qq = "[object String]", eB = "[object URL]", tB = Array.isArray, Vx = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Gx = Object.assign, rB = Object.prototype.toString.call.bind(Object.prototype.toString);
function nB(e) {
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
    if (tB(y))
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
    var x = rB(y);
    return x === Kq ? r(y, h, v) : x === Zq ? c(y, h, v) : x === Gq ? i(y, h, v) : x === Jq ? l(y, h, v) : x === Xq ? typeof y.then != "function" && typeof h.then != "function" && s(y, h, v) : x === eB ? d(y, h, v) : x === Vq ? n(y, h, v) : x === Uq ? s(y, h, v) : x === Hq || x === Yq || x === Qq ? u(y, h, v) : !1;
  };
}
function aB(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? Ea : Dq,
    areDatesEqual: kq,
    areErrorsEqual: Nq,
    areFunctionsEqual: Rq,
    areMapsEqual: n ? Fx(Hx, Ea) : Hx,
    areNumbersEqual: Lq,
    areObjectsEqual: n ? Ea : qq,
    arePrimitiveWrappersEqual: Bq,
    areRegExpsEqual: Fq,
    areSetsEqual: n ? Fx(Kx, Ea) : Kx,
    areTypedArraysEqual: n ? Ea : zq,
    areUrlsEqual: Wq
  };
  if (r && (a = Gx({}, a, r(a))), t) {
    var i = yo(a.areArraysEqual), o = yo(a.areMapsEqual), s = yo(a.areObjectsEqual), u = yo(a.areSetsEqual);
    a = Gx({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: u
    });
  }
  return a;
}
function iB(e) {
  return function(t, r, n, a, i, o, s) {
    return e(t, r, s);
  };
}
function oB(e) {
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
var sB = $r();
$r({ strict: !0 });
$r({ circular: !0 });
$r({
  circular: !0,
  strict: !0
});
$r({
  createInternalComparator: function() {
    return fn;
  }
});
$r({
  strict: !0,
  createInternalComparator: function() {
    return fn;
  }
});
$r({
  circular: !0,
  createInternalComparator: function() {
    return fn;
  }
});
$r({
  circular: !0,
  createInternalComparator: function() {
    return fn;
  },
  strict: !0
});
function $r(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, s = aB(e), u = nB(s), c = n ? n(u) : iB(u);
  return oB({ circular: r, comparator: u, createState: a, equals: c, strict: o });
}
function uB(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Yx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : uB(a);
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
function cB(e) {
  return pB(e) || dB(e) || fB(e) || lB();
}
function lB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fB(e, t) {
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
function dB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function pB(e) {
  if (Array.isArray(e)) return e;
}
function hB() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, s = cB(o), u = s[0], c = s.slice(1);
        if (typeof u == "number") {
          Yx(a.bind(null, c), u);
          return;
        }
        a(u), Yx(a.bind(null, c));
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
      f_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f_(e, t, r) {
  return t = vB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vB(e) {
  var t = yB(e, "string");
  return xi(t) === "symbol" ? t : String(t);
}
function yB(e, t) {
  if (xi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mB = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, gB = function(t) {
  return t;
}, bB = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Fa = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return Jx(Jx({}, n), {}, f_({}, a, t(a, r[a])));
  }, {});
}, Qx = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(bB(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, xB = process.env.NODE_ENV !== "production", Jo = function(t, r, n, a, i, o, s, u) {
  if (xB && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, a, i, o, s, u], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[l++];
      }));
    }
};
function wB(e, t) {
  return AB(e) || SB(e, t) || d_(e, t) || OB();
}
function OB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SB(e, t) {
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
function AB(e) {
  if (Array.isArray(e)) return e;
}
function _B(e) {
  return EB(e) || TB(e) || d_(e) || PB();
}
function PB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d_(e, t) {
  if (e) {
    if (typeof e == "string") return Sp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sp(e, t);
  }
}
function TB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function EB(e) {
  if (Array.isArray(e)) return Sp(e);
}
function Sp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Qo = 1e-4, p_ = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, h_ = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, e1 = function(t, r) {
  return function(n) {
    var a = p_(t, r);
    return h_(a, n);
  };
}, CB = function(t, r) {
  return function(n) {
    var a = p_(t, r), i = [].concat(_B(a.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return h_(i, n);
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
          }), l = wB(c, 4);
          a = l[0], i = l[1], o = l[2], s = l[3];
        } else
          Jo(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Jo([a, o, i, s].every(function(v) {
    return typeof v == "number" && v >= 0 && v <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = e1(a, o), d = e1(i, s), p = CB(a, o), y = function(b) {
    return b > 1 ? 1 : b < 0 ? 0 : b;
  }, h = function(b) {
    for (var g = b > 1 ? 1 : b, x = g, O = 0; O < 8; ++O) {
      var m = f(x) - g, w = p(x);
      if (Math.abs(m - g) < Qo || w < Qo)
        return d(x);
      x = y(x - m / w);
    }
    return d(x);
  };
  return h.isStepper = !1, h;
}, jB = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, s = o === void 0 ? 17 : o, u = function(l, f, d) {
    var p = -(l - f) * n, y = d * i, h = d + (p - y) * s / 1e3, v = d * s / 1e3 + l;
    return Math.abs(v - f) < Qo && Math.abs(h) < Qo ? [f, 0] : [v, h];
  };
  return u.isStepper = !0, u.dt = s, u;
}, MB = function() {
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
        return jB();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return t1(a);
        Jo(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (Jo(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function r1(e) {
  return DB(e) || IB(e) || v_(e) || $B();
}
function $B() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function DB(e) {
  if (Array.isArray(e)) return _p(e);
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
      Ap(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ap(e, t, r) {
  return t = kB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kB(e) {
  var t = NB(e, "string");
  return wi(t) === "symbol" ? t : String(t);
}
function NB(e, t) {
  if (wi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function RB(e, t) {
  return BB(e) || qB(e, t) || v_(e, t) || LB();
}
function LB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v_(e, t) {
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
function qB(e, t) {
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
function BB(e) {
  if (Array.isArray(e)) return e;
}
var es = function(t, r, n) {
  return t + (r - t) * n;
}, Pp = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, FB = function e(t, r, n) {
  var a = Fa(function(i, o) {
    if (Pp(o)) {
      var s = t(o.from, o.to, o.velocity), u = RB(s, 2), c = u[0], l = u[1];
      return et(et({}, o), {}, {
        from: c,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? Fa(function(i, o) {
    return Pp(o) ? et(et({}, o), {}, {
      velocity: es(o.velocity, a[i].velocity, n),
      from: es(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const zB = (function(e, t, r, n, a) {
  var i = mB(e, t), o = i.reduce(function(v, b) {
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
    s = FB(r, s, x), a(et(et(et({}, e), t), d())), c = b, p() || (u = requestAnimationFrame(f));
  }, h = function(b) {
    l || (l = b);
    var g = (b - l) / n, x = Fa(function(m, w) {
      return es.apply(void 0, r1(w).concat([r(g)]));
    }, o);
    if (a(et(et(et({}, e), t), x)), g < 1)
      u = requestAnimationFrame(f);
    else {
      var O = Fa(function(m, w) {
        return es.apply(void 0, r1(w).concat([r(1)]));
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
var WB = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function UB(e, t) {
  if (e == null) return {};
  var r = HB(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function HB(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ed(e) {
  return YB(e) || GB(e) || VB(e) || KB();
}
function KB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VB(e, t) {
  if (e) {
    if (typeof e == "string") return Tp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tp(e, t);
  }
}
function GB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function YB(e) {
  if (Array.isArray(e)) return Tp(e);
}
function Tp(e, t) {
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
function It(e) {
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
  return t = y_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ZB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, y_(n.key), n);
  }
}
function JB(e, t, r) {
  return t && ZB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function y_(e) {
  var t = QB(e, "string");
  return qn(t) === "symbol" ? t : String(t);
}
function QB(e, t) {
  if (qn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function e3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ep(e, t);
}
function Ep(e, t) {
  return Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ep(e, t);
}
function t3(e) {
  var t = r3();
  return function() {
    var n = ts(e), a;
    if (t) {
      var i = ts(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Cp(this, a);
  };
}
function Cp(e, t) {
  if (t && (qn(t) === "object" || typeof t == "function"))
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
function r3() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ts(e) {
  return ts = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ts(e);
}
var Ft = /* @__PURE__ */ (function(e) {
  e3(r, e);
  var t = t3(r);
  function r(n, a) {
    var i;
    XB(this, r), i = t.call(this, n, a);
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
        style: u ? ka({}, u, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return JB(r, [{
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
        if (!(sB(a.to, l) && a.canBegin && a.isActive)) {
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
      var i = this, o = a.from, s = a.to, u = a.duration, c = a.easing, l = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, p = zB(o, s, MB(c), u, this.changeStyle), y = function() {
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
          return [].concat(ed(h), [i.runJSAnimation.bind(i, {
            from: _.style,
            to: m,
            duration: g,
            easing: O
          }), g]);
        var D = Qx(P, g, O), T = It(It(It({}, _.style), m), {}, {
          transition: D
        });
        return [].concat(ed(h), [T, g, A]).filter(gB);
      };
      return this.manager.start([u].concat(ed(o.reduce(p, [l, Math.max(d, s)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = hB());
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
      var u = UB(a, WB), c = Vr.count(i), l = this.state.style;
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
      return c === 1 ? f(Vr.only(i)) : /* @__PURE__ */ C.createElement("div", null, Vr.map(i, function(d) {
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
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
function rs() {
  return rs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rs.apply(this, arguments);
}
function n3(e, t) {
  return s3(e) || o3(e, t) || i3(e, t) || a3();
}
function a3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i3(e, t) {
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
function o3(e, t) {
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
function s3(e) {
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
      u3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u3(e, t, r) {
  return t = c3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c3(e) {
  var t = l3(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function l3(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oi(n) != "object") return n;
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
}, f3 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, s = r.width, u = r.height;
  if (Math.abs(s) > 0 && Math.abs(u) > 0) {
    var c = Math.min(i, i + s), l = Math.max(i, i + s), f = Math.min(o, o + u), d = Math.max(o, o + u);
    return n >= c && n <= l && a >= f && a <= d;
  }
  return !1;
}, d3 = {
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
  var r = s1(s1({}, d3), t), n = Me(), a = he(-1), i = n3(a, 2), o = i[0], s = i[1];
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
    var m = O.width, w = O.height, A = O.x, _ = O.y;
    return /* @__PURE__ */ C.createElement(Ft, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: h,
      isActive: b,
      easing: y
    }, /* @__PURE__ */ C.createElement("path", rs({}, ie(r, !0), {
      className: x,
      d: u1(A, _, m, w, d),
      ref: n
    })));
  }) : /* @__PURE__ */ C.createElement("path", rs({}, ie(r, !0), {
    className: x,
    d: u1(u, c, l, f, d)
  }));
}, p3 = ["points", "className", "baseLinePoints", "connectNulls"];
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
function h3(e, t) {
  if (e == null) return {};
  var r = v3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function v3(e, t) {
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
  return b3(e) || g3(e) || m3(e) || y3();
}
function y3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m3(e, t) {
  if (e) {
    if (typeof e == "string") return Mp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mp(e, t);
  }
}
function g3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function b3(e) {
  if (Array.isArray(e)) return Mp(e);
}
function Mp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var l1 = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, x3 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    l1(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), l1(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, za = function(t, r) {
  var n = x3(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(c1(i), c1(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, s, u) {
      return "".concat(o).concat(u === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, w3 = function(t, r, n) {
  var a = za(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(za(r.reverse(), n).slice(1));
}, O3 = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = h3(t, p3);
  if (!r || !r.length)
    return null;
  var s = de("recharts-polygon", n);
  if (a && a.length) {
    var u = o.stroke && o.stroke !== "none", c = w3(r, a, i);
    return /* @__PURE__ */ C.createElement("g", {
      className: s
    }, /* @__PURE__ */ C.createElement("path", On({}, ie(o, !0), {
      fill: c.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: c
    })), u ? /* @__PURE__ */ C.createElement("path", On({}, ie(o, !0), {
      fill: "none",
      d: za(r, i)
    })) : null, u ? /* @__PURE__ */ C.createElement("path", On({}, ie(o, !0), {
      fill: "none",
      d: za(a, i)
    })) : null);
  }
  var l = za(r, i);
  return /* @__PURE__ */ C.createElement("path", On({}, ie(o, !0), {
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
var Vi = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = de("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ C.createElement("circle", $p({}, ie(t, !1), Ao(t), {
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
var S3 = ["x", "y", "top", "left", "width", "height", "className"];
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
function A3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? f1(Object(r), !0).forEach(function(n) {
      _3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _3(e, t, r) {
  return t = P3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P3(e) {
  var t = T3(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function T3(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function E3(e, t) {
  if (e == null) return {};
  var r = C3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function C3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var j3 = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, M3 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, s = o === void 0 ? 0 : o, u = t.left, c = u === void 0 ? 0 : u, l = t.width, f = l === void 0 ? 0 : l, d = t.height, p = d === void 0 ? 0 : d, y = t.className, h = E3(t, S3), v = A3({
    x: n,
    y: i,
    top: s,
    left: c,
    width: f,
    height: p
  }, h);
  return !G(n) || !G(i) || !G(f) || !G(p) || !G(s) || !G(c) ? null : /* @__PURE__ */ C.createElement("path", Ip({}, ie(v, !0), {
    className: de("recharts-cross", y),
    d: j3(n, i, f, p, s, c)
  }));
}, td, d1;
function $3() {
  if (d1) return td;
  d1 = 1;
  var e = Gs(), t = CA(), r = er();
  function n(a, i) {
    return a && a.length ? e(a, r(i, 2), t) : void 0;
  }
  return td = n, td;
}
var I3 = $3();
const D3 = /* @__PURE__ */ _e(I3);
var rd, p1;
function k3() {
  if (p1) return rd;
  p1 = 1;
  var e = Gs(), t = er(), r = jA();
  function n(a, i) {
    return a && a.length ? e(a, t(i, 2), r) : void 0;
  }
  return rd = n, rd;
}
var N3 = k3();
const R3 = /* @__PURE__ */ _e(N3);
var L3 = ["cx", "cy", "angle", "ticks", "axisLine"], q3 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Bn(e) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bn(e);
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
      Js(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v1(e, t) {
  if (e == null) return {};
  var r = B3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function B3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function F3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function y1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, g_(n.key), n);
  }
}
function z3(e, t, r) {
  return t && y1(e.prototype, t), r && y1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function W3(e, t, r) {
  return t = ns(t), U3(e, m_() ? Reflect.construct(t, r || [], ns(e).constructor) : t.apply(e, r));
}
function U3(e, t) {
  if (t && (Bn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return H3(e);
}
function H3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function m_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (m_ = function() {
    return !!e;
  })();
}
function ns(e) {
  return ns = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ns(e);
}
function K3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Dp(e, t);
}
function Dp(e, t) {
  return Dp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Dp(e, t);
}
function Js(e, t, r) {
  return t = g_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function g_(e) {
  var t = V3(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function V3(e, t) {
  if (Bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Qs = /* @__PURE__ */ (function(e) {
  function t() {
    return F3(this, t), W3(this, t, arguments);
  }
  return K3(t, e), z3(t, [{
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = D3(s, function(l) {
        return l.coordinate || 0;
      }), c = R3(s, function(l) {
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = n.axisLine, c = v1(n, L3), l = s.reduce(function(y, h) {
        return [Math.min(y[0], h.coordinate), Math.max(y[1], h.coordinate)];
      }, [1 / 0, -1 / 0]), f = je(a, i, l[0], o), d = je(a, i, l[1], o), p = Nr(Nr(Nr({}, ie(c, !1)), {}, {
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
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.angle, u = a.tickFormatter, c = a.stroke, l = v1(a, q3), f = this.getTickTextAnchor(), d = ie(l, !1), p = ie(o, !1), y = i.map(function(h, v) {
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
        return /* @__PURE__ */ C.createElement(pe, Wa({
          className: de("recharts-polar-radius-axis-tick", a_(o)),
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
      }, i && this.renderAxisLine(), o && this.renderTicks(), Ve.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(Pr, Wa({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), i), o;
    }
  }]);
})(Mt);
Js(Qs, "displayName", "PolarRadiusAxis");
Js(Qs, "axisType", "radiusAxis");
Js(Qs, "defaultProps", {
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
function Rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? m1(Object(r), !0).forEach(function(n) {
      eu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function G3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function g1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, x_(n.key), n);
  }
}
function Y3(e, t, r) {
  return t && g1(e.prototype, t), r && g1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function X3(e, t, r) {
  return t = as(t), Z3(e, b_() ? Reflect.construct(t, r || [], as(e).constructor) : t.apply(e, r));
}
function Z3(e, t) {
  if (t && (Fn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return J3(e);
}
function J3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function b_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (b_ = function() {
    return !!e;
  })();
}
function as(e) {
  return as = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, as(e);
}
function Q3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && kp(e, t);
}
function kp(e, t) {
  return kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, kp(e, t);
}
function eu(e, t, r) {
  return t = x_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function x_(e) {
  var t = e5(e, "string");
  return Fn(t) == "symbol" ? t : t + "";
}
function e5(e, t) {
  if (Fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var t5 = Math.PI / 180, b1 = 1e-5, tu = /* @__PURE__ */ (function(e) {
  function t() {
    return G3(this, t), X3(this, t, arguments);
  }
  return Q3(t, e), Y3(t, [{
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
      var a = this.props.orientation, i = Math.cos(-n.coordinate * t5), o;
      return i > b1 ? o = a === "outer" ? "start" : "end" : i < -b1 ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, s = n.axisLine, u = n.axisLineType, c = Rr(Rr({}, ie(this.props, !1)), {}, {
        fill: "none"
      }, ie(s, !1));
      if (u === "circle")
        return /* @__PURE__ */ C.createElement(Vi, Fr({
          className: "recharts-polar-angle-axis-line"
        }, c, {
          cx: a,
          cy: i,
          r: o
        }));
      var l = this.props.ticks, f = l.map(function(d) {
        return je(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ C.createElement(O3, Fr({
        className: "recharts-polar-angle-axis-line"
      }, c, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.tickLine, u = a.tickFormatter, c = a.stroke, l = ie(this.props, !1), f = ie(o, !1), d = Rr(Rr({}, l), {}, {
        fill: "none"
      }, ie(s, !1)), p = i.map(function(y, h) {
        var v = n.getTickLineCoord(y), b = n.getTickTextAnchor(y), g = Rr(Rr(Rr({
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
          className: de("recharts-polar-angle-axis-tick", a_(o)),
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
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(Pr, Fr({}, a, {
        className: "recharts-polar-angle-axis-tick-value"
      }), i), o;
    }
  }]);
})(Mt);
eu(tu, "displayName", "PolarAngleAxis");
eu(tu, "axisType", "angleAxis");
eu(tu, "defaultProps", {
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
var nd, x1;
function r5() {
  if (x1) return nd;
  x1 = 1;
  var e = ZO(), t = e(Object.getPrototypeOf, Object);
  return nd = t, nd;
}
var ad, w1;
function n5() {
  if (w1) return ad;
  w1 = 1;
  var e = dr(), t = r5(), r = pr(), n = "[object Object]", a = Function.prototype, i = Object.prototype, o = a.toString, s = i.hasOwnProperty, u = o.call(Object);
  function c(l) {
    if (!r(l) || e(l) != n)
      return !1;
    var f = t(l);
    if (f === null)
      return !0;
    var d = s.call(f, "constructor") && f.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == u;
  }
  return ad = c, ad;
}
var a5 = n5();
const i5 = /* @__PURE__ */ _e(a5);
var id, O1;
function o5() {
  if (O1) return id;
  O1 = 1;
  var e = dr(), t = pr(), r = "[object Boolean]";
  function n(a) {
    return a === !0 || a === !1 || t(a) && e(a) == r;
  }
  return id = n, id;
}
var s5 = o5();
const u5 = /* @__PURE__ */ _e(s5);
function Ai(e) {
  "@babel/helpers - typeof";
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(e);
}
function is() {
  return is = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, is.apply(this, arguments);
}
function c5(e, t) {
  return p5(e) || d5(e, t) || f5(e, t) || l5();
}
function l5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f5(e, t) {
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
function d5(e, t) {
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
function p5(e) {
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
      h5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function h5(e, t, r) {
  return t = v5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v5(e) {
  var t = y5(e, "string");
  return Ai(t) == "symbol" ? t : t + "";
}
function y5(e, t) {
  if (Ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var P1 = function(t, r, n, a, i) {
  var o = n - a, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + i), s += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, m5 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, g5 = function(t) {
  var r = _1(_1({}, m5), t), n = Me(), a = he(-1), i = c5(a, 2), o = i[0], s = i[1];
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
    var O = x.upperWidth, m = x.lowerWidth, w = x.height, A = x.x, _ = x.y;
    return /* @__PURE__ */ C.createElement(Ft, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: h,
      easing: y
    }, /* @__PURE__ */ C.createElement("path", is({}, ie(r, !0), {
      className: g,
      d: P1(A, _, O, m, w),
      ref: n
    })));
  }) : /* @__PURE__ */ C.createElement("g", null, /* @__PURE__ */ C.createElement("path", is({}, ie(r, !0), {
    className: g,
    d: P1(u, c, l, f, d)
  })));
}, b5 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function _i(e) {
  "@babel/helpers - typeof";
  return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
function x5(e, t) {
  if (e == null) return {};
  var r = w5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function w5(e, t) {
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
function os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? T1(Object(r), !0).forEach(function(n) {
      O5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function O5(e, t, r) {
  return t = S5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S5(e) {
  var t = A5(e, "string");
  return _i(t) == "symbol" ? t : t + "";
}
function A5(e, t) {
  if (_i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _5(e, t) {
  return os(os({}, t), e);
}
function P5(e, t) {
  return e === "symbols";
}
function E1(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ C.createElement(_v, r);
    case "trapezoid":
      return /* @__PURE__ */ C.createElement(g5, r);
    case "sector":
      return /* @__PURE__ */ C.createElement(s_, r);
    case "symbols":
      if (P5(t))
        return /* @__PURE__ */ C.createElement(Gh, r);
      break;
    default:
      return null;
  }
}
function T5(e) {
  return /* @__PURE__ */ Rt(e) ? e.props : e;
}
function w_(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? _5 : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, s = e.isActive, u = x5(e, b5), c;
  if (/* @__PURE__ */ Rt(t))
    c = /* @__PURE__ */ Ue(t, os(os({}, u), T5(t)));
  else if (ue(t))
    c = t(u);
  else if (i5(t) && !u5(t)) {
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
function ru(e, t) {
  return t != null && "trapezoids" in e.props;
}
function nu(e, t) {
  return t != null && "sectors" in e.props;
}
function Pi(e, t) {
  return t != null && "points" in e.props;
}
function E5(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function C5(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function j5(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function M5(e, t) {
  var r;
  return ru(e, t) ? r = E5 : nu(e, t) ? r = C5 : Pi(e, t) && (r = j5), r;
}
function $5(e, t) {
  var r;
  return ru(e, t) ? r = "trapezoids" : nu(e, t) ? r = "sectors" : Pi(e, t) && (r = "points"), r;
}
function I5(e, t) {
  if (ru(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (nu(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Pi(e, t) ? t.payload : {};
}
function D5(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = $5(r, t), i = I5(r, t), o = n.filter(function(u, c) {
    var l = en(i, u), f = r.props[a].filter(function(y) {
      var h = M5(r, t);
      return h(y, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), p = c === d;
    return l && p;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var wo;
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
      Pt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function k5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function j1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, S_(n.key), n);
  }
}
function N5(e, t, r) {
  return t && j1(e.prototype, t), r && j1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function R5(e, t, r) {
  return t = ss(t), L5(e, O_() ? Reflect.construct(t, r || [], ss(e).constructor) : t.apply(e, r));
}
function L5(e, t) {
  if (t && (zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return q5(e);
}
function q5(e) {
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
function ss(e) {
  return ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ss(e);
}
function B5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Np(e, t);
}
function Np(e, t) {
  return Np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Np(e, t);
}
function Pt(e, t, r) {
  return t = S_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S_(e) {
  var t = F5(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function F5(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var vr = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return k5(this, t), n = R5(this, t, [r]), Pt(n, "pieRef", null), Pt(n, "sectorRefs", []), Pt(n, "id", un("recharts-pie-")), Pt(n, "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), ue(a) && a();
    }), Pt(n, "handleAnimationStart", function() {
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
  return B5(t, e), N5(t, [{
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
        }), /* @__PURE__ */ C.createElement(w_, Sn({
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
            var A = Ke(m.endAngle - m.startAngle, x.endAngle - x.startAngle), _ = Ee(Ee({}, x), {}, {
              startAngle: g + w,
              endAngle: g + A(h) + w
            });
            v.push(_), g = _.endAngle;
          } else {
            var P = x.endAngle, D = x.startAngle, T = Ke(0, P - D), $ = T(h), M = Ee(Ee({}, x), {}, {
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
      }, this.renderSectors(), u && this.renderLabels(o), Ve.renderCallByParent(this.props, null, !1), (!p || y) && Et.renderCallByParent(this.props, o, !1));
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
      return /* @__PURE__ */ C.createElement(Pr, Sn({}, a, {
        alignmentBaseline: "middle",
        className: s
      }), o);
    }
  }]);
})(Mt);
wo = vr;
Pt(vr, "displayName", "Pie");
Pt(vr, "defaultProps", {
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
  isAnimationActive: !Cr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Pt(vr, "parseDeltaAngle", function(e, t) {
  var r = ot(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Pt(vr, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = ie(e, !1), a = wt(r, Fs);
  return t && t.length ? t.map(function(i, o) {
    return Ee(Ee(Ee({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return Ee(Ee({}, n), i.props);
  }) : [];
});
Pt(vr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = n_(a, i), s = n + st(e.cx, a, a / 2), u = r + st(e.cy, i, i / 2), c = st(e.innerRadius, o, 0), l = st(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: s,
    cy: u,
    innerRadius: c,
    outerRadius: l,
    maxRadius: f
  };
});
Pt(vr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? Ee(Ee({}, t.type.defaultProps), t.props) : t.props, a = wo.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, s = n.endAngle, u = n.paddingAngle, c = n.dataKey, l = n.nameKey, f = n.valueKey, d = n.tooltipType, p = Math.abs(n.minAngle), y = wo.parseCoordinateOfPie(n, r), h = wo.parseDeltaAngle(o, s), v = Math.abs(h), b = c;
  le(c) && le(f) ? (qt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = "value") : le(c) && (qt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = f);
  var g = a.filter(function(_) {
    return Re(_, b, 0) !== 0;
  }).length, x = (v >= 360 ? g : g - 1) * u, O = v - g * p - x, m = a.reduce(function(_, P) {
    var D = Re(P, b, 0);
    return _ + (G(D) ? D : 0);
  }, 0), w;
  if (m > 0) {
    var A;
    w = a.map(function(_, P) {
      var D = Re(_, b, 0), T = Re(_, l, P), $ = (G(D) ? D : 0) / m, M;
      P ? M = A.endAngle + ot(h) * u * (D !== 0 ? 1 : 0) : M = o;
      var j = M + ot(h) * ((D !== 0 ? p : 0) + $ * O), I = (M + j) / 2, k = (y.innerRadius + y.outerRadius) / 2, R = [{
        name: T,
        value: D,
        payload: _,
        dataKey: b,
        type: d
      }], L = je(y.cx, y.cy, k, I);
      return A = Ee(Ee(Ee({
        percent: $,
        cornerRadius: i,
        name: T,
        tooltipPayload: R,
        midAngle: I,
        middleRadius: k,
        tooltipPosition: L
      }, _), y), {}, {
        value: Re(_, b),
        startAngle: M,
        endAngle: j,
        payload: _,
        paddingAngle: ot(h) * u
      }), A;
    });
  }
  return Ee(Ee({}, y), {}, {
    sectors: w,
    data: a
  });
});
var od, M1;
function z5() {
  if (M1) return od;
  M1 = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, a, i, o) {
    for (var s = -1, u = t(e((a - n) / (i || 1)), 0), c = Array(u); u--; )
      c[o ? u : ++s] = n, n += i;
    return c;
  }
  return od = r, od;
}
var sd, $1;
function A_() {
  if ($1) return sd;
  $1 = 1;
  var e = US(), t = 1 / 0, r = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === t || a === -t) {
      var i = a < 0 ? -1 : 1;
      return i * r;
    }
    return a === a ? a : 0;
  }
  return sd = n, sd;
}
var ud, I1;
function W5() {
  if (I1) return ud;
  I1 = 1;
  var e = z5(), t = Bs(), r = A_();
  function n(a) {
    return function(i, o, s) {
      return s && typeof s != "number" && t(i, o, s) && (o = s = void 0), i = r(i), o === void 0 ? (o = i, i = 0) : o = r(o), s = s === void 0 ? i < o ? 1 : -1 : r(s), e(i, o, s, a);
    };
  }
  return ud = n, ud;
}
var cd, D1;
function U5() {
  if (D1) return cd;
  D1 = 1;
  var e = W5(), t = e();
  return cd = t, cd;
}
var H5 = U5();
const us = /* @__PURE__ */ _e(H5);
function Ti(e) {
  "@babel/helpers - typeof";
  return Ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ti(e);
}
function k1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function N1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? k1(Object(r), !0).forEach(function(n) {
      __(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function __(e, t, r) {
  return t = K5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K5(e) {
  var t = V5(e, "string");
  return Ti(t) == "symbol" ? t : t + "";
}
function V5(e, t) {
  if (Ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var G5 = ["Webkit", "Moz", "O", "ms"], Y5 = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = G5.reduce(function(i, o) {
    return N1(N1({}, i), {}, __({}, o + n, r));
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
function ld(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? R1(Object(r), !0).forEach(function(n) {
      yt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, T_(n.key), n);
  }
}
function Z5(e, t, r) {
  return t && L1(e.prototype, t), r && L1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function J5(e, t, r) {
  return t = ls(t), Q5(e, P_() ? Reflect.construct(t, r || [], ls(e).constructor) : t.apply(e, r));
}
function Q5(e, t) {
  if (t && (Wn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return eF(e);
}
function eF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function P_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (P_ = function() {
    return !!e;
  })();
}
function ls(e) {
  return ls = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ls(e);
}
function tF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rp(e, t);
}
function Rp(e, t) {
  return Rp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Rp(e, t);
}
function yt(e, t, r) {
  return t = T_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T_(e) {
  var t = rF(e, "string");
  return Wn(t) == "symbol" ? t : t + "";
}
function rF(e, t) {
  if (Wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var nF = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var u = r.length, c = qa().domain(us(0, u)).range([i, i + o - s]), l = c.domain().map(function(f) {
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
}, Un = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return X5(this, t), n = J5(this, t, [r]), yt(n, "handleDrag", function(a) {
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
  return tF(t, e), Z5(t, [{
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
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, u = n.data, c = n.children, l = n.padding, f = Vr.only(c);
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
      var i, o, s = this, u = this.props, c = u.y, l = u.travellerWidth, f = u.height, d = u.traveller, p = u.ariaLabel, y = u.data, h = u.startIndex, v = u.endIndex, b = Math.max(n, this.props.x), g = ld(ld({}, ie(this.props, !1)), {}, {
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
      }, /* @__PURE__ */ C.createElement(Pr, cs({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - p,
        y: o + s / 2
      }, y), this.getTextOfTick(a)), /* @__PURE__ */ C.createElement(Pr, cs({
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
      var x = de("recharts-brush", i), O = C.Children.count(o) === 1, m = Y5("userSelect", "none");
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
        return ld({
          prevData: i,
          prevTravellerWidth: u,
          prevUpdateId: c,
          prevX: s,
          prevWidth: o
        }, i && i.length ? nF({
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
var fd, B1;
function aF() {
  if (B1) return fd;
  B1 = 1;
  var e = Xh();
  function t(r, n) {
    var a;
    return e(r, function(i, o, s) {
      return a = n(i, o, s), !a;
    }), !!a;
  }
  return fd = t, fd;
}
var dd, F1;
function iF() {
  if (F1) return dd;
  F1 = 1;
  var e = UO(), t = er(), r = aF(), n = ht(), a = Bs();
  function i(o, s, u) {
    var c = n(o) ? e : r;
    return u && a(o, s, u) && (s = void 0), c(o, t(s, 3));
  }
  return dd = i, dd;
}
var oF = iF();
const sF = /* @__PURE__ */ _e(oF);
var Zt = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, pd, z1;
function uF() {
  if (z1) return pd;
  z1 = 1;
  var e = qS();
  function t(r, n, a) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : r[n] = a;
  }
  return pd = t, pd;
}
var hd, W1;
function cF() {
  if (W1) return hd;
  W1 = 1;
  var e = uF(), t = RS(), r = er();
  function n(a, i) {
    var o = {};
    return i = r(i, 3), t(a, function(s, u, c) {
      e(o, u, i(s, u, c));
    }), o;
  }
  return hd = n, hd;
}
var lF = cF();
const fF = /* @__PURE__ */ _e(lF);
var vd, U1;
function dF() {
  if (U1) return vd;
  U1 = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return vd = e, vd;
}
var yd, H1;
function pF() {
  if (H1) return yd;
  H1 = 1;
  var e = Xh();
  function t(r, n) {
    var a = !0;
    return e(r, function(i, o, s) {
      return a = !!n(i, o, s), a;
    }), a;
  }
  return yd = t, yd;
}
var md, K1;
function hF() {
  if (K1) return md;
  K1 = 1;
  var e = dF(), t = pF(), r = er(), n = ht(), a = Bs();
  function i(o, s, u) {
    var c = n(o) ? e : t;
    return u && a(o, s, u) && (s = void 0), c(o, r(s, 3));
  }
  return md = i, md;
}
var vF = hF();
const E_ = /* @__PURE__ */ _e(vF);
var yF = ["x", "y"];
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
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
function Ca(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? V1(Object(r), !0).forEach(function(n) {
      mF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mF(e, t, r) {
  return t = gF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gF(e) {
  var t = bF(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function bF(e, t) {
  if (Hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xF(e, t) {
  if (e == null) return {};
  var r = wF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function wF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function OF(e, t) {
  var r = e.x, n = e.y, a = xF(e, yF), i = "".concat(r), o = parseInt(i, 10), s = "".concat(n), u = parseInt(s, 10), c = "".concat(t.height || a.height), l = parseInt(c, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
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
function G1(e) {
  return /* @__PURE__ */ C.createElement(w_, Lp({
    shapeType: "rectangle",
    propTransformer: OF,
    activeClassName: "recharts-active-bar"
  }, e));
}
var SF = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (process.env.NODE_ENV !== "production" ? ft(!1, "minPointSize callback function received a value with type of ".concat(Hn(n), ". Currently only numbers are supported.")) : ft()), r);
  };
}, AF = ["value", "background"], C_;
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function _F(e, t) {
  if (e == null) return {};
  var r = PF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function PF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function fs() {
  return fs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fs.apply(this, arguments);
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
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Y1(Object(r), !0).forEach(function(n) {
      Sr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function X1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, M_(n.key), n);
  }
}
function EF(e, t, r) {
  return t && X1(e.prototype, t), r && X1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function CF(e, t, r) {
  return t = ds(t), jF(e, j_() ? Reflect.construct(t, r || [], ds(e).constructor) : t.apply(e, r));
}
function jF(e, t) {
  if (t && (Kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return MF(e);
}
function MF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function j_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (j_ = function() {
    return !!e;
  })();
}
function ds(e) {
  return ds = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ds(e);
}
function $F(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qp(e, t);
}
function qp(e, t) {
  return qp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, qp(e, t);
}
function Sr(e, t, r) {
  return t = M_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function M_(e) {
  var t = IF(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function IF(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ir = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    TF(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = CF(this, t, [].concat(a)), Sr(r, "state", {
      isAnimationFinished: !1
    }), Sr(r, "id", un("recharts-bar-")), Sr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), Sr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return $F(t, e), EF(t, [{
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
        return /* @__PURE__ */ C.createElement(pe, fs({
          className: "recharts-bar-rectangle"
        }, tn(a.props, f, d), {
          key: "rectangle-".concat(f?.x, "-").concat(f?.y, "-").concat(f?.value)
        }), /* @__PURE__ */ C.createElement(G1, h));
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
          var P = Ke(0, v.width), D = P(y);
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
        var f = c.background, d = _F(c, AF);
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
        return /* @__PURE__ */ C.createElement(G1, fs({
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
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, m), (!p || v) && Et.renderCallByParent(this.props, i));
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
C_ = Ir;
Sr(Ir, "displayName", "Bar");
Sr(Ir, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Cr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Sr(Ir, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, s = e.xAxisTicks, u = e.yAxisTicks, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = nL(n, r);
  if (!p)
    return null;
  var y = t.layout, h = r.type.defaultProps, v = h !== void 0 ? Be(Be({}, h), r.props) : r.props, b = v.dataKey, g = v.children, x = v.minPointSize, O = y === "horizontal" ? o : i, m = c ? O.scale.domain() : null, w = lL({
    numericAxis: O
  }), A = wt(g, Fs), _ = f.map(function(P, D) {
    var T, $, M, j, I, k;
    c ? T = aL(c[l + D], m) : (T = Re(P, b), Array.isArray(T) || (T = [w, T]));
    var R = SF(x, C_.defaultProps.minPointSize)(T[1], D);
    if (y === "horizontal") {
      var L, z = [o.scale(T[0]), o.scale(T[1])], N = z[0], B = z[1];
      $ = hx({
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
        var H = ot(I || R) * (Math.abs(R) - Math.abs(I));
        M -= H, I += H;
      }
    } else {
      var X = [i.scale(T[0]), i.scale(T[1])], te = X[0], ne = X[1];
      if ($ = te, M = hx({
        axis: o,
        ticks: u,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: D
      }), j = ne - te, I = p.size, k = {
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
      background: k
    }, A && A[D] && A[D].props), {}, {
      tooltipPayload: [t_(r, P)],
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
function DF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Z1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $_(n.key), n);
  }
}
function kF(e, t, r) {
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
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? J1(Object(r), !0).forEach(function(n) {
      au(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function au(e, t, r) {
  return t = $_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $_(e) {
  var t = NF(e, "string");
  return Ei(t) == "symbol" ? t : t + "";
}
function NF(e, t) {
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
  }, d = !!mt(c, Ir);
  return l.reduce(function(p, y) {
    var h = r[y], v = h.orientation, b = h.domain, g = h.padding, x = g === void 0 ? {} : g, O = h.mirror, m = h.reversed, w = "".concat(v).concat(O ? "Mirror" : ""), A, _, P, D, T;
    if (h.type === "number" && (h.padding === "gap" || h.padding === "no-gap")) {
      var $ = b[1] - b[0], M = 1 / 0, j = h.categoricalDomain.sort();
      if (j.forEach(function(X, te) {
        te > 0 && (M = Math.min((X || 0) - (j[te - 1] || 0), M));
      }), Number.isFinite(M)) {
        var I = M / $, k = h.layout === "vertical" ? n.height : n.width;
        if (h.padding === "gap" && (A = I * k / 2), h.padding === "no-gap") {
          var R = st(t.barCategoryGap, I * k), L = I * k / 2;
          A = L - R - (L - R) / k * R;
        }
      }
    }
    a === "xAxis" ? _ = [n.left + (x.left || 0) + (A || 0), n.left + n.width - (x.right || 0) - (A || 0)] : a === "yAxis" ? _ = u === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (A || 0), n.top + n.height - (x.bottom || 0) - (A || 0)] : _ = h.range, m && (_ = [_[1], _[0]]);
    var z = ZA(h, i, d), N = z.scale, B = z.realScaleType;
    N.domain(b).range(_), JA(N);
    var q = QA(N, Dt(Dt({}, h), {}, {
      realScaleType: B
    }));
    a === "xAxis" ? (T = v === "top" && !O || v === "bottom" && O, P = n.left, D = f[w] - T * h.height) : a === "yAxis" && (T = v === "left" && !O || v === "right" && O, P = f[w] - T * h.width, D = n.top);
    var H = Dt(Dt(Dt({}, h), q), {}, {
      realScaleType: B,
      x: P,
      y: D,
      scale: N,
      width: a === "xAxis" ? n.width : h.width,
      height: a === "yAxis" ? n.height : h.height
    });
    return H.bandSize = Yo(H, q), !h.hide && a === "xAxis" ? f[w] += (T ? -1 : 1) * H.height : h.hide || (f[w] += (T ? -1 : 1) * H.width), Dt(Dt({}, p), {}, au({}, y, H));
  }, {});
}, I_ = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, RF = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return I_({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, D_ = /* @__PURE__ */ (function() {
  function e(t) {
    DF(this, e), this.scale = t;
  }
  return kF(e, [{
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
au(D_, "EPS", 1e-4);
var Tv = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return Dt(Dt({}, n), {}, au({}, a, D_.create(t[a])));
  }, {});
  return Dt(Dt({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, s = i.position;
      return fF(a, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(a) {
      return E_(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function LF(e) {
  return (e % 180 + 180) % 180;
}
var qF = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = LF(a), o = i * Math.PI / 180, s = Math.atan(n / r), u = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(u);
}, gd, Q1;
function BF() {
  if (Q1) return gd;
  Q1 = 1;
  var e = er(), t = Bi(), r = Is();
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
  return gd = n, gd;
}
var bd, ew;
function FF() {
  if (ew) return bd;
  ew = 1;
  var e = A_();
  function t(r) {
    var n = e(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return bd = t, bd;
}
var xd, tw;
function zF() {
  if (tw) return xd;
  tw = 1;
  var e = $S(), t = er(), r = FF(), n = Math.max;
  function a(i, o, s) {
    var u = i == null ? 0 : i.length;
    if (!u)
      return -1;
    var c = s == null ? 0 : r(s);
    return c < 0 && (c = n(u + c, 0)), e(i, t(o, 3), c);
  }
  return xd = a, xd;
}
var wd, rw;
function WF() {
  if (rw) return wd;
  rw = 1;
  var e = BF(), t = zF(), r = e(t);
  return wd = r, wd;
}
var UF = WF();
const HF = /* @__PURE__ */ _e(UF);
var KF = aS();
const VF = /* @__PURE__ */ _e(KF);
var GF = VF(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function ps(e) {
  "@babel/helpers - typeof";
  return ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ps(e);
}
var Ev = /* @__PURE__ */ zt(void 0), Cv = /* @__PURE__ */ zt(void 0), k_ = /* @__PURE__ */ zt(void 0), N_ = /* @__PURE__ */ zt({}), R_ = /* @__PURE__ */ zt(void 0), L_ = /* @__PURE__ */ zt(0), q_ = /* @__PURE__ */ zt(0), nw = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, s = t.children, u = t.width, c = t.height, l = GF(i);
  return /* @__PURE__ */ C.createElement(Ev.Provider, {
    value: n
  }, /* @__PURE__ */ C.createElement(Cv.Provider, {
    value: a
  }, /* @__PURE__ */ C.createElement(N_.Provider, {
    value: i
  }, /* @__PURE__ */ C.createElement(k_.Provider, {
    value: l
  }, /* @__PURE__ */ C.createElement(R_.Provider, {
    value: o
  }, /* @__PURE__ */ C.createElement(L_.Provider, {
    value: c
  }, /* @__PURE__ */ C.createElement(q_.Provider, {
    value: u
  }, s)))))));
}, YF = function() {
  return pt(R_);
};
function B_(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var F_ = function(t) {
  var r = pt(Ev);
  r == null && (process.env.NODE_ENV !== "production" ? ft(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : ft());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? ft(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(ps(t), "]. ").concat(B_(r))) : ft()), n;
}, XF = function() {
  var t = pt(Ev);
  return wr(t);
}, ZF = function() {
  var t = pt(Cv), r = HF(t, function(n) {
    return E_(n.domain, Number.isFinite);
  });
  return r || wr(t);
}, z_ = function(t) {
  var r = pt(Cv);
  r == null && (process.env.NODE_ENV !== "production" ? ft(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : ft());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? ft(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(ps(t), "]. ").concat(B_(r))) : ft()), n;
}, JF = function() {
  var t = pt(k_);
  return t;
}, QF = function() {
  return pt(N_);
}, jv = function() {
  return pt(q_);
}, Mv = function() {
  return pt(L_);
};
function Vn(e) {
  "@babel/helpers - typeof";
  return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vn(e);
}
function e4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function t4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, U_(n.key), n);
  }
}
function r4(e, t, r) {
  return t && t4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function n4(e, t, r) {
  return t = hs(t), a4(e, W_() ? Reflect.construct(t, r || [], hs(e).constructor) : t.apply(e, r));
}
function a4(e, t) {
  if (t && (Vn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return i4(e);
}
function i4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function W_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (W_ = function() {
    return !!e;
  })();
}
function hs(e) {
  return hs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hs(e);
}
function o4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bp(e, t);
}
function Bp(e, t) {
  return Bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Bp(e, t);
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
      $v(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $v(e, t, r) {
  return t = U_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U_(e) {
  var t = s4(e, "string");
  return Vn(t) == "symbol" ? t : t + "";
}
function s4(e, t) {
  if (Vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function u4(e, t) {
  return d4(e) || f4(e, t) || l4(e, t) || c4();
}
function c4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l4(e, t) {
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
function f4(e, t) {
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
function d4(e) {
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
var p4 = function(t, r) {
  var n;
  return /* @__PURE__ */ C.isValidElement(t) ? n = /* @__PURE__ */ C.cloneElement(t, r) : ue(t) ? n = t(r) : n = /* @__PURE__ */ C.createElement("line", Fp({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, h4 = function(t, r, n, a, i, o, s, u, c) {
  var l = i.x, f = i.y, d = i.width, p = i.height;
  if (n) {
    var y = c.y, h = t.y.apply(y, {
      position: o
    });
    if (Zt(c, "discard") && !t.y.isInRange(h))
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
    if (Zt(c, "discard") && !t.x.isInRange(g))
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
    return Zt(c, "discard") && sF(m, function(w) {
      return !t.isInRange(w);
    }) ? null : m;
  }
  return null;
};
function v4(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, s = e.className, u = e.alwaysShow, c = YF(), l = F_(a), f = z_(i), d = JF();
  if (!c || !d)
    return null;
  qt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Tv({
    x: l.scale,
    y: f.scale
  }), y = Ge(t), h = Ge(r), v = n && n.length === 2, b = h4(p, y, h, v, d, e.position, l.orientation, f.orientation, e);
  if (!b)
    return null;
  var g = u4(b, 2), x = g[0], O = x.x, m = x.y, w = g[1], A = w.x, _ = w.y, P = Zt(e, "hidden") ? "url(#".concat(c, ")") : void 0, D = iw(iw({
    clipPath: P
  }, ie(e, !0)), {}, {
    x1: O,
    y1: m,
    x2: A,
    y2: _
  });
  return /* @__PURE__ */ C.createElement(pe, {
    className: de("recharts-reference-line", s)
  }, p4(o, D), Ve.renderCallByParent(e, RF({
    x1: O,
    y1: m,
    x2: A,
    y2: _
  })));
}
var Iv = /* @__PURE__ */ (function(e) {
  function t() {
    return e4(this, t), n4(this, t, arguments);
  }
  return o4(t, e), r4(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(v4, this.props);
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
function Gn(e) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gn(e);
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
      iu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function m4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, K_(n.key), n);
  }
}
function g4(e, t, r) {
  return t && m4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function b4(e, t, r) {
  return t = vs(t), x4(e, H_() ? Reflect.construct(t, r || [], vs(e).constructor) : t.apply(e, r));
}
function x4(e, t) {
  if (t && (Gn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return w4(e);
}
function w4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function H_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (H_ = function() {
    return !!e;
  })();
}
function vs(e) {
  return vs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vs(e);
}
function O4(e, t) {
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
  return t = K_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K_(e) {
  var t = S4(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function S4(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var A4 = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Tv({
    x: a.scale,
    y: i.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Zt(t, "discard") && !o.isInRange(s) ? null : s;
}, ou = /* @__PURE__ */ (function(e) {
  function t() {
    return y4(this, t), b4(this, t, arguments);
  }
  return O4(t, e), g4(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, s = n.alwaysShow, u = n.clipPathId, c = Ge(a), l = Ge(i);
      if (qt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !l)
        return null;
      var f = A4(this.props);
      if (!f)
        return null;
      var d = f.x, p = f.y, y = this.props, h = y.shape, v = y.className, b = Zt(this.props, "hidden") ? "url(#".concat(u, ")") : void 0, g = uw(uw({
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
iu(ou, "displayName", "ReferenceDot");
iu(ou, "defaultProps", {
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
iu(ou, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ C.isValidElement(e) ? r = /* @__PURE__ */ C.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ C.createElement(Vi, zp({}, t, {
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
function Yn(e) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yn(e);
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
      su(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function P4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, G_(n.key), n);
  }
}
function T4(e, t, r) {
  return t && P4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function E4(e, t, r) {
  return t = ys(t), C4(e, V_() ? Reflect.construct(t, r || [], ys(e).constructor) : t.apply(e, r));
}
function C4(e, t) {
  if (t && (Yn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return j4(e);
}
function j4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function V_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (V_ = function() {
    return !!e;
  })();
}
function ys(e) {
  return ys = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ys(e);
}
function M4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hp(e, t);
}
function Hp(e, t) {
  return Hp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Hp(e, t);
}
function su(e, t, r) {
  return t = G_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function G_(e) {
  var t = $4(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function $4(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var I4 = function(t, r, n, a, i) {
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
  return Zt(i, "discard") && (!d.isInRange(p) || !d.isInRange(y)) ? null : I_(p, y);
}, uu = /* @__PURE__ */ (function(e) {
  function t() {
    return _4(this, t), E4(this, t, arguments);
  }
  return M4(t, e), T4(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, s = n.y2, u = n.className, c = n.alwaysShow, l = n.clipPathId;
      qt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = Ge(a), d = Ge(i), p = Ge(o), y = Ge(s), h = this.props.shape;
      if (!f && !d && !p && !y && !h)
        return null;
      var v = I4(f, d, p, y, this.props);
      if (!v && !h)
        return null;
      var b = Zt(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
      return /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-reference-area", u)
      }, t.renderRect(h, lw(lw({
        clipPath: b
      }, ie(this.props, !0)), v)), Ve.renderCallByParent(this.props, v));
    }
  }]);
})(C.Component);
su(uu, "displayName", "ReferenceArea");
su(uu, "defaultProps", {
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
su(uu, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ C.isValidElement(e) ? r = /* @__PURE__ */ C.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ C.createElement(_v, Up({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function Y_(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function D4(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return qF(n, r);
}
function k4(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + s
  } : {
    start: n ? a + o : i + s,
    end: n ? a : i
  };
}
function ms(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function N4(e, t) {
  return Y_(e, t + 1);
}
function R4(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, s = t.end, u = 0, c = 1, l = o, f = function() {
    var y = n?.[u];
    if (y === void 0)
      return {
        v: Y_(n, c)
      };
    var h = u, v, b = function() {
      return v === void 0 && (v = r(y, h)), v;
    }, g = y.coordinate, x = u === 0 || ms(e, g, b, l, s);
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
      L4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function L4(e, t, r) {
  return t = q4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q4(e) {
  var t = B4(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function B4(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function F4(e, t, r, n, a) {
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
    var b = ms(e, p.tickCoord, h, s, u);
    b && (u = p.tickCoord - e * (h() / 2 + a), i[d] = rt(rt({}, p), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    c(l);
  return i;
}
function z4(e, t, r, n, a, i) {
  var o = (n || []).slice(), s = o.length, u = t.start, c = t.end;
  if (i) {
    var l = n[s - 1], f = r(l, s - 1), d = e * (l.coordinate + e * f / 2 - c);
    o[s - 1] = l = rt(rt({}, l), {}, {
      tickCoord: d > 0 ? l.coordinate - d * e : l.coordinate
    });
    var p = ms(e, l.tickCoord, function() {
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
    var A = ms(e, x.tickCoord, m, u, c);
    A && (u = x.tickCoord + e * (m() / 2 + a), o[g] = rt(rt({}, x), {}, {
      isShow: !0
    }));
  }, v = 0; v < y; v++)
    h(v);
  return o;
}
function Dv(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, s = e.orientation, u = e.interval, c = e.tickFormatter, l = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (G(u) || Cr.isSsr)
    return N4(a, typeof u == "number" && G(u) ? u : 0);
  var d = [], p = s === "top" || s === "bottom" ? "width" : "height", y = l && p === "width" ? La(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, h = function(x, O) {
    var m = ue(c) ? c(x.value, O) : x.value;
    return p === "width" ? D4(La(m, {
      fontSize: t,
      letterSpacing: r
    }), y, f) : La(m, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, v = a.length >= 2 ? ot(a[1].coordinate - a[0].coordinate) : 1, b = k4(i, v, p);
  return u === "equidistantPreserveStart" ? R4(v, b, h, a, o) : (u === "preserveStart" || u === "preserveStartEnd" ? d = z4(v, b, h, a, o, u === "preserveStartEnd") : d = F4(v, b, h, a, o), d.filter(function(g) {
    return g.isShow;
  }));
}
var W4 = ["viewBox"], U4 = ["viewBox"], H4 = ["ticks"];
function Xn(e) {
  "@babel/helpers - typeof";
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xn(e);
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
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dw(Object(r), !0).forEach(function(n) {
      kv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Od(e, t) {
  if (e == null) return {};
  var r = K4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function K4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function V4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Z_(n.key), n);
  }
}
function G4(e, t, r) {
  return t && pw(e.prototype, t), r && pw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Y4(e, t, r) {
  return t = gs(t), X4(e, X_() ? Reflect.construct(t, r || [], gs(e).constructor) : t.apply(e, r));
}
function X4(e, t) {
  if (t && (Xn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Z4(e);
}
function Z4(e) {
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
function gs(e) {
  return gs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gs(e);
}
function J4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Kp(e, t);
}
function Kp(e, t) {
  return Kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Kp(e, t);
}
function kv(e, t, r) {
  return t = Z_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z_(e) {
  var t = Q4(e, "string");
  return Xn(t) == "symbol" ? t : t + "";
}
function Q4(e, t) {
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
    return V4(this, t), n = Y4(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return J4(t, e), G4(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = Od(n, W4), s = this.props, u = s.viewBox, c = Od(s, U4);
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
      return /* @__PURE__ */ C.createElement("line", An({}, f, {
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
        var o = this, s = this.props, u = s.tickLine, c = s.stroke, l = s.tick, f = s.tickFormatter, d = s.unit, p = Dv(it(it({}, this.props), {}, {
          ticks: n
        }), a, i), y = this.getTickTextAnchor(), h = this.getTickVerticalAnchor(), v = ie(this.props, !1), b = ie(l, !1), g = it(it({}, v), {}, {
          fill: "none"
        }, ie(u, !1)), x = p.map(function(O, m) {
          var w = o.getTickLineCoord(O), A = w.line, _ = w.tick, P = it(it(it(it({
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
          return /* @__PURE__ */ C.createElement(pe, An({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
          }, tn(o.props, O, m)), u && /* @__PURE__ */ C.createElement("line", An({}, g, A, {
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
      var f = this.props, d = f.ticks, p = Od(f, H4), y = d;
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
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(Pr, An({}, a, {
        className: "recharts-cartesian-axis-tick-value"
      }), i), o;
    }
  }]);
})(oO);
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
var e8 = ["x1", "y1", "x2", "y2", "key"], t8 = ["offset"];
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
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
      r8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r8(e, t, r) {
  return t = n8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n8(e) {
  var t = a8(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function a8(e, t) {
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
function vw(e, t) {
  if (e == null) return {};
  var r = i8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function i8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var o8 = function(t) {
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
function J_(e, t) {
  var r;
  if (/* @__PURE__ */ C.isValidElement(e))
    r = /* @__PURE__ */ C.cloneElement(e, t);
  else if (ue(e))
    r = e(t);
  else {
    var n = t.x1, a = t.y1, i = t.x2, o = t.y2, s = t.key, u = vw(t, e8), c = ie(u, !1);
    c.offset;
    var l = vw(c, t8);
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
function s8(e) {
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
    return J_(a, c);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function u8(e) {
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
    return J_(a, c);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function c8(e) {
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
function l8(e) {
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
var f8 = function(t, r) {
  var n = t.xAxis, a = t.width, i = t.height, o = t.offset;
  return XA(Dv(nt(nt(nt({}, fa.defaultProps), n), {}, {
    ticks: or(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.left, o.left + o.width, r);
}, d8 = function(t, r) {
  var n = t.yAxis, a = t.width, i = t.height, o = t.offset;
  return XA(Dv(nt(nt(nt({}, fa.defaultProps), n), {}, {
    ticks: or(n, !0),
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
function Gi(e) {
  var t, r, n, a, i, o, s = jv(), u = Mv(), c = QF(), l = nt(nt({}, e), {}, {
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
  }), f = l.x, d = l.y, p = l.width, y = l.height, h = l.syncWithTicks, v = l.horizontalValues, b = l.verticalValues, g = XF(), x = ZF();
  if (!G(p) || p <= 0 || !G(y) || y <= 0 || !G(f) || f !== +f || !G(d) || d !== +d)
    return null;
  var O = l.verticalCoordinatesGenerator || f8, m = l.horizontalCoordinatesGenerator || d8, w = l.horizontalPoints, A = l.verticalPoints;
  if ((!w || !w.length) && ue(m)) {
    var _ = v && v.length, P = m({
      yAxis: x ? nt(nt({}, x), {}, {
        ticks: _ ? v : x.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, _ ? !0 : h);
    qt(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(nn(P), "]")), Array.isArray(P) && (w = P);
  }
  if ((!A || !A.length) && ue(O)) {
    var D = b && b.length, T = O({
      xAxis: g ? nt(nt({}, g), {}, {
        ticks: D ? b : g.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, D ? !0 : h);
    qt(Array.isArray(T), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(nn(T), "]")), Array.isArray(T) && (A = T);
  }
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ C.createElement(o8, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ C.createElement(s8, Hr({}, l, {
    offset: c,
    horizontalPoints: w,
    xAxis: g,
    yAxis: x
  })), /* @__PURE__ */ C.createElement(u8, Hr({}, l, {
    offset: c,
    verticalPoints: A,
    xAxis: g,
    yAxis: x
  })), /* @__PURE__ */ C.createElement(c8, Hr({}, l, {
    horizontalPoints: w
  })), /* @__PURE__ */ C.createElement(l8, Hr({}, l, {
    verticalPoints: A
  })));
}
Gi.displayName = "CartesianGrid";
var p8 = ["type", "layout", "connectNulls", "ref"], h8 = ["key"];
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function yw(e, t) {
  if (e == null) return {};
  var r = v8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function v8(e, t) {
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
function vt(e) {
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
function gn(e) {
  return b8(e) || g8(e) || m8(e) || y8();
}
function y8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m8(e, t) {
  if (e) {
    if (typeof e == "string") return Vp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vp(e, t);
  }
}
function g8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function b8(e) {
  if (Array.isArray(e)) return Vp(e);
}
function Vp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function x8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, eP(n.key), n);
  }
}
function w8(e, t, r) {
  return t && gw(e.prototype, t), r && gw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function O8(e, t, r) {
  return t = bs(t), S8(e, Q_() ? Reflect.construct(t, r || [], bs(e).constructor) : t.apply(e, r));
}
function S8(e, t) {
  if (t && (Zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return A8(e);
}
function A8(e) {
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
function bs(e) {
  return bs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bs(e);
}
function _8(e, t) {
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
  return t = eP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eP(e) {
  var t = P8(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function P8(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Yi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    x8(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = O8(this, t, [].concat(a)), kt(r, "state", {
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
          p = [].concat(gn(u.slice(0, y)), [f - h]);
          break;
        }
      var v = p.length % 2 === 0 ? [0, d] : [d];
      return [].concat(gn(t.repeat(u, l)), gn(p), v).map(function(b) {
        return "".concat(b, "px");
      }).join(", ");
    }), kt(r, "id", un("recharts-line-")), kt(r, "pathRef", function(o) {
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
  return _8(t, e), w8(t, [{
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
      var f = yw(s, p8), d = vt(vt(vt({}, ie(f, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: a ? "url(#clipPath-".concat(i, ")") : null,
        points: n
      }, o), {}, {
        type: u,
        layout: c,
        connectNulls: l
      });
      return /* @__PURE__ */ C.createElement(Jr, Ua({}, d, {
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
          var w = g.length / s.length, A = s.map(function($, M) {
            var j = Math.floor(M * w);
            if (g[j]) {
              var I = g[j], k = Ke(I.x, $.x), R = Ke(I.y, $.y);
              return vt(vt({}, $), {}, {
                x: k(m),
                y: R(m)
              });
            }
            if (y) {
              var L = Ke(h * 2, $.x), z = Ke(v / 2, $.y);
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
          return i.renderCurveStatically(A, n, a);
        }
        var _ = Ke(0, x), P = _(m), D;
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
      var b = this.state.isAnimationFinished, g = s.length === 1, x = de("recharts-line", u), O = c && c.allowDataOverflow, m = l && l.allowDataOverflow, w = O || m, A = le(v) ? this.id : v, _ = (n = ie(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, P = _.r, D = P === void 0 ? 3 : P, T = _.strokeWidth, $ = T === void 0 ? 2 : T, M = cS(o) ? o : {}, j = M.clipDot, I = j === void 0 ? !0 : j, k = D * 2 + $;
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
        x: d - k / 2,
        y: f - k / 2,
        width: p + k,
        height: y + k
      }))) : null, !g && this.renderCurve(w, A), this.renderErrorBar(w, A), (g || o) && this.renderDots(w, I, A), (!h || b) && Et.renderCallByParent(this.props, s));
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
        var o = a.key, s = yw(a, h8), u = de("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        i = /* @__PURE__ */ C.createElement(Vi, Ua({
          key: o
        }, s, {
          className: u
        }));
      }
      return i;
    }
  }]);
})(Mt);
kt(Yi, "displayName", "Line");
kt(Yi, "defaultProps", {
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
  isAnimationActive: !Cr.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
kt(Yi, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, a = e.xAxisTicks, i = e.yAxisTicks, o = e.dataKey, s = e.bandSize, u = e.displayedData, c = e.offset, l = t.layout, f = u.map(function(d, p) {
    var y = Re(d, o);
    return l === "horizontal" ? {
      x: Go({
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
      y: Go({
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
var T8 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], E8 = ["key"], tP;
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function rP(e, t) {
  if (e == null) return {};
  var r = C8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function C8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Kr() {
  return Kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kr.apply(this, arguments);
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
function br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bw(Object(r), !0).forEach(function(n) {
      Gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function j8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, aP(n.key), n);
  }
}
function M8(e, t, r) {
  return t && xw(e.prototype, t), r && xw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $8(e, t, r) {
  return t = xs(t), I8(e, nP() ? Reflect.construct(t, r || [], xs(e).constructor) : t.apply(e, r));
}
function I8(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return D8(e);
}
function D8(e) {
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
function xs(e) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xs(e);
}
function k8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Yp(e, t);
}
function Yp(e, t) {
  return Yp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Yp(e, t);
}
function Gt(e, t, r) {
  return t = aP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aP(e) {
  var t = N8(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function N8(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Dr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    j8(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = $8(this, t, [].concat(a)), Gt(r, "state", {
      isAnimationFinished: !0
    }), Gt(r, "id", un("recharts-area-")), Gt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), ue(o) && o();
    }), Gt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), ue(o) && o();
    }), r;
  }
  return k8(t, e), M8(t, [{
    key: "renderDots",
    value: function(n, a, i) {
      var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (o && !s)
        return null;
      var u = this.props, c = u.dot, l = u.points, f = u.dataKey, d = ie(this.props, !1), p = ie(c, !0), y = l.map(function(v, b) {
        var g = br(br(br({
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
      return /* @__PURE__ */ C.createElement(pe, Kr({
        className: "recharts-area-dots"
      }, h), y);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, s = a.strokeWidth, u = o[0].x, c = o[o.length - 1].x, l = n * Math.abs(u - c), f = Or(o.map(function(d) {
        return d.y || 0;
      }));
      return G(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(Or(i.map(function(d) {
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
      var a = this.props, i = a.baseLine, o = a.points, s = a.strokeWidth, u = o[0].y, c = o[o.length - 1].y, l = n * Math.abs(u - c), f = Or(o.map(function(d) {
        return d.x || 0;
      }));
      return G(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(Or(i.map(function(d) {
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
      var p = rP(s, T8);
      return /* @__PURE__ */ C.createElement(pe, {
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ C.createElement(Jr, Kr({}, ie(p, !0), {
        points: n,
        connectNulls: f,
        type: c,
        baseLine: a,
        layout: u,
        stroke: "none",
        className: "recharts-area-area"
      })), l !== "none" && /* @__PURE__ */ C.createElement(Jr, Kr({}, ie(this.props, !1), {
        className: "recharts-area-curve",
        layout: u,
        type: c,
        connectNulls: f,
        fill: "none",
        points: n
      })), l !== "none" && d && /* @__PURE__ */ C.createElement(Jr, Kr({}, ie(this.props, !1), {
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
          var x = h.length / s.length, O = s.map(function(_, P) {
            var D = Math.floor(P * x);
            if (h[D]) {
              var T = h[D], $ = Ke(T.x, _.x), M = Ke(T.y, _.y);
              return br(br({}, _), {}, {
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
              var D = Math.floor(P * x);
              if (v[D]) {
                var T = v[D], $ = Ke(T.x, _.x), M = Ke(T.y, _.y);
                return br(br({}, _), {}, {
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
      return u && o && o.length && (!l && d > 0 || !en(l, o) || !en(f, s)) ? this.renderAreaWithAnimation(n, a) : this.renderAreaStatically(o, s, n, a);
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
      }, P = _.r, D = P === void 0 ? 3 : P, T = _.strokeWidth, $ = T === void 0 ? 2 : T, M = cS(o) ? o : {}, j = M.clipDot, I = j === void 0 ? !0 : j, k = D * 2 + $;
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
        x: l - k / 2,
        y: c - k / 2,
        width: p + k,
        height: y + k
      }))) : null, g ? null : this.renderArea(w, A), (o || g) && this.renderDots(w, I, A), (!h || b) && Et.renderCallByParent(this.props, s));
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
tP = Dr;
Gt(Dr, "displayName", "Area");
Gt(Dr, "defaultProps", {
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
  isAnimationActive: !Cr.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Gt(Dr, "getBaseValue", function(e, t, r, n) {
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
Gt(Dr, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, u = e.dataKey, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = t.layout, y = c && c.length, h = tP.getBaseValue(t, r, n, a), v = p === "horizontal", b = !1, g = f.map(function(O, m) {
    var w;
    y ? w = c[l + m] : (w = Re(O, u), Array.isArray(w) ? b = !0 : w = [h, w]);
    var A = w[1] == null || y && Re(O, u) == null;
    return v ? {
      x: Go({
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
      y: Go({
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
  }) : x = v ? a.scale(h) : n.scale(h), br({
    points: g,
    baseLine: x,
    layout: p,
    isRange: b
  }, d);
});
Gt(Dr, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ C.isValidElement(e))
    r = /* @__PURE__ */ C.cloneElement(e, t);
  else if (ue(e))
    r = e(t);
  else {
    var n = de("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = rP(t, E8);
    r = /* @__PURE__ */ C.createElement(Vi, Kr({}, i, {
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
function R8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sP(n.key), n);
  }
}
function q8(e, t, r) {
  return t && L8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function B8(e, t, r) {
  return t = ws(t), F8(e, iP() ? Reflect.construct(t, r || [], ws(e).constructor) : t.apply(e, r));
}
function F8(e, t) {
  if (t && (Qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return z8(e);
}
function z8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function iP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (iP = function() {
    return !!e;
  })();
}
function ws(e) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ws(e);
}
function W8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xp(e, t);
}
function Xp(e, t) {
  return Xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xp(e, t);
}
function oP(e, t, r) {
  return t = sP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sP(e) {
  var t = U8(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function U8(e, t) {
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
function H8(e) {
  var t = e.xAxisId, r = jv(), n = Mv(), a = F_(t);
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
        return or(o, !0);
      }
    }))
  );
}
var yr = /* @__PURE__ */ (function(e) {
  function t() {
    return R8(this, t), B8(this, t, arguments);
  }
  return W8(t, e), q8(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(H8, this.props);
    }
  }]);
})(C.Component);
oP(yr, "displayName", "XAxis");
oP(yr, "defaultProps", {
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
function K8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function V8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, lP(n.key), n);
  }
}
function G8(e, t, r) {
  return t && V8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Y8(e, t, r) {
  return t = Os(t), X8(e, uP() ? Reflect.construct(t, r || [], Os(e).constructor) : t.apply(e, r));
}
function X8(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Z8(e);
}
function Z8(e) {
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
function Os(e) {
  return Os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Os(e);
}
function J8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Jp(e, t);
}
function Jp(e, t) {
  return Jp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Jp(e, t);
}
function cP(e, t, r) {
  return t = lP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lP(e) {
  var t = Q8(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function Q8(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ea(n) != "object") return n;
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
var e6 = function(t) {
  var r = t.yAxisId, n = jv(), a = Mv(), i = z_(r);
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
        return or(s, !0);
      }
    }))
  );
}, mr = /* @__PURE__ */ (function(e) {
  function t() {
    return K8(this, t), Y8(this, t, arguments);
  }
  return J8(t, e), G8(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(e6, this.props);
    }
  }]);
})(C.Component);
cP(mr, "displayName", "YAxis");
cP(mr, "defaultProps", {
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
  return a6(e) || n6(e) || r6(e) || t6();
}
function t6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function r6(e, t) {
  if (e) {
    if (typeof e == "string") return eh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eh(e, t);
  }
}
function n6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function a6(e) {
  if (Array.isArray(e)) return eh(e);
}
function eh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var th = function(t, r, n, a, i) {
  var o = wt(t, Iv), s = wt(t, ou), u = [].concat(ww(o), ww(s)), c = wt(t, uu), l = "".concat(a, "Id"), f = a[0], d = r;
  if (u.length && (d = u.reduce(function(h, v) {
    if (v.props[l] === n && Zt(v.props, "extendDomain") && G(v.props[f])) {
      var b = v.props[f];
      return [Math.min(h[0], b), Math.max(h[1], b)];
    }
    return h;
  }, d)), c.length) {
    var p = "".concat(f, "1"), y = "".concat(f, "2");
    d = c.reduce(function(h, v) {
      if (v.props[l] === n && Zt(v.props, "extendDomain") && G(v.props[p]) && G(v.props[y])) {
        var b = v.props[p], g = v.props[y];
        return [Math.min(h[0], b, g), Math.max(h[1], b, g)];
      }
      return h;
    }, d);
  }
  return i && i.length && (d = i.reduce(function(h, v) {
    return G(v) ? [Math.min(h[0], v), Math.max(h[1], v)] : h;
  }, d)), d;
}, Sd = { exports: {} }, Ow;
function i6() {
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
  })(Sd)), Sd.exports;
}
var o6 = i6();
const s6 = /* @__PURE__ */ _e(o6);
var Ad = new s6(), _d = "recharts.syncMouseEvents";
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
}
function u6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fP(n.key), n);
  }
}
function l6(e, t, r) {
  return t && c6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Pd(e, t, r) {
  return t = fP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fP(e) {
  var t = f6(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function f6(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var d6 = /* @__PURE__ */ (function() {
  function e() {
    u6(this, e), Pd(this, "activeIndex", 0), Pd(this, "coordinateList", []), Pd(this, "layout", "horizontal");
  }
  return l6(e, [{
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
function p6(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], a = e?.[1];
    if (n && a && G(n) && G(a))
      return !0;
  }
  return !1;
}
function h6(e, t, r, n) {
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
function dP(e) {
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
function v6(e, t, r) {
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
      return dP(t);
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
function mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sw(Object(r), !0).forEach(function(n) {
      y6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y6(e, t, r) {
  return t = m6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m6(e) {
  var t = g6(e, "string");
  return Mi(t) == "symbol" ? t : t + "";
}
function g6(e, t) {
  if (Mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function b6(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, s = e.activePayload, u = e.offset, c = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var y, h = Jr;
  if (d === "ScatterChart")
    y = o, h = M3;
  else if (d === "BarChart")
    y = h6(f, o, u, l), h = _v;
  else if (f === "radial") {
    var v = dP(o), b = v.cx, g = v.cy, x = v.radius, O = v.startAngle, m = v.endAngle;
    y = {
      cx: b,
      cy: g,
      startAngle: O,
      endAngle: m,
      innerRadius: x,
      outerRadius: x
    }, h = s_;
  } else
    y = {
      points: v6(f, o, u)
    }, h = Jr;
  var w = mo(mo(mo(mo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), y), ie(p, !1)), {}, {
    payload: s,
    payloadIndex: c,
    className: de("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ Rt(p) ? /* @__PURE__ */ Ue(p, w) : /* @__PURE__ */ iO(h, w);
}
var x6 = ["item"], w6 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
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
function Aw(e, t) {
  return A6(e) || S6(e, t) || hP(e, t) || O6();
}
function O6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S6(e, t) {
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
function A6(e) {
  if (Array.isArray(e)) return e;
}
function _w(e, t) {
  if (e == null) return {};
  var r = _6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function P6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function T6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vP(n.key), n);
  }
}
function E6(e, t, r) {
  return t && T6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function C6(e, t, r) {
  return t = Ss(t), j6(e, pP() ? Reflect.construct(t, r || [], Ss(e).constructor) : t.apply(e, r));
}
function j6(e, t) {
  if (t && (ta(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return M6(e);
}
function M6(e) {
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
function Ss(e) {
  return Ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ss(e);
}
function $6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && rh(e, t);
}
function rh(e, t) {
  return rh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, rh(e, t);
}
function ra(e) {
  return k6(e) || D6(e) || hP(e) || I6();
}
function I6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hP(e, t) {
  if (e) {
    if (typeof e == "string") return nh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nh(e, t);
  }
}
function D6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function k6(e) {
  if (Array.isArray(e)) return nh(e);
}
function nh(e, t) {
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
  return t = vP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vP(e) {
  var t = N6(e, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function N6(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var R6 = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, L6 = {
  width: "100%",
  height: "100%"
}, yP = {
  x: 0,
  y: 0
};
function go(e) {
  return e;
}
var q6 = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, B6 = function(t, r, n, a) {
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
  return yP;
}, cu = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(s, u) {
    var c = u.props.data;
    return c && c.length ? [].concat(ra(s), ra(c)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && G(a) && G(i) ? t.slice(a, i + 1) : [];
};
function mP(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var ah = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, s = cu(r, t);
  return n < 0 || !i || !i.length || n >= s.length ? null : i.reduce(function(u, c) {
    var l, f = (l = c.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? s : f;
      d = So(p, o.dataKey, a);
    } else
      d = f && f[n] || s[n];
    return d ? [].concat(ra(u), [t_(c, d)]) : u;
  }, []);
}, Tw = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = q6(i, n), s = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, l = ZR(o, s, c, u);
  if (l >= 0 && c) {
    var f = c[l] && c[l].value, d = ah(t, r, l, f), p = B6(n, s, l, i);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, F6 = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, p = YA(l, i);
  return n.reduce(function(y, h) {
    var v, b = h.type.defaultProps !== void 0 ? W(W({}, h.type.defaultProps), h.props) : h.props, g = b.type, x = b.dataKey, O = b.allowDataOverflow, m = b.allowDuplicatedCategory, w = b.scale, A = b.ticks, _ = b.includeHidden, P = b[o];
    if (y[P])
      return y;
    var D = cu(t.data, {
      graphicalItems: a.filter(function(q) {
        var H, X = o in q.props ? q.props[o] : (H = q.type.defaultProps) === null || H === void 0 ? void 0 : H[o];
        return X === P;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), T = D.length, $, M, j;
    p6(b.domain, O, g) && ($ = mp(b.domain, null, O), p && (g === "number" || w !== "auto") && (j = Ba(D, x, "category")));
    var I = mP(g);
    if (!$ || $.length === 0) {
      var k, R = (k = b.domain) !== null && k !== void 0 ? k : I;
      if (x) {
        if ($ = Ba(D, x, g), g === "category" && p) {
          var L = O2($);
          m && L ? (M = $, $ = us(0, T)) : m || ($ = mx(R, $, h).reduce(function(q, H) {
            return q.indexOf(H) >= 0 ? q : [].concat(ra(q), [H]);
          }, []));
        } else if (g === "category")
          m ? $ = $.filter(function(q) {
            return q !== "" && !le(q);
          }) : $ = mx(R, $, h).reduce(function(q, H) {
            return q.indexOf(H) >= 0 || H === "" || le(H) ? q : [].concat(ra(q), [H]);
          }, []);
        else if (g === "number") {
          var z = rL(D, a.filter(function(q) {
            var H, X, te = o in q.props ? q.props[o] : (H = q.type.defaultProps) === null || H === void 0 ? void 0 : H[o], ne = "hide" in q.props ? q.props.hide : (X = q.type.defaultProps) === null || X === void 0 ? void 0 : X.hide;
            return te === P && (_ || !ne);
          }), x, i, l);
          z && ($ = z);
        }
        p && (g === "number" || w !== "auto") && (j = Ba(D, x, "category"));
      } else p ? $ = us(0, T) : s && s[P] && s[P].hasStack && g === "number" ? $ = d === "expand" ? [0, 1] : e_(s[P].stackGroups, u, c) : $ = GA(D, a.filter(function(q) {
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
}, z6 = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = cu(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), p = d.length, y = YA(l, i), h = -1;
  return n.reduce(function(v, b) {
    var g = b.type.defaultProps !== void 0 ? W(W({}, b.type.defaultProps), b.props) : b.props, x = g[o], O = mP("number");
    if (!v[x]) {
      h++;
      var m;
      return y ? m = us(0, p) : s && s[x] && s[x].hasStack ? (m = e_(s[x].stackGroups, u, c), m = th(f, m, x, i)) : (m = mp(O, GA(d, n.filter(function(w) {
        var A, _, P = o in w.props ? w.props[o] : (A = w.type.defaultProps) === null || A === void 0 ? void 0 : A[o], D = "hide" in w.props ? w.props.hide : (_ = w.type.defaultProps) === null || _ === void 0 ? void 0 : _.hide;
        return P === x && !D;
      }), "number", l), a.defaultProps.allowDataOverflow), m = th(f, m, x, i)), W(W({}, v), {}, se({}, x, W(W({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: xt(R6, "".concat(i, ".").concat(h % 2), null),
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
}, W6 = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.children, f = "".concat(a, "Id"), d = wt(l, i), p = {};
  return d && d.length ? p = F6(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (p = z6(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  })), p;
}, U6 = function(t) {
  var r = wr(t), n = or(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Zh(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Yo(r, n)
  };
}, Ew = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = mt(r, Un), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, H6 = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = sr(r && r.type);
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
}, K6 = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, s = t.yAxisMap, u = s === void 0 ? {} : s, c = n.width, l = n.height, f = n.children, d = n.margin || {}, p = mt(f, Un), y = mt(f, Yr), h = Object.keys(u).reduce(function(m, w) {
    var A = u[w], _ = A.orientation;
    return !A.mirror && !A.hide ? W(W({}, m), {}, se({}, _, m[_] + A.width)) : m;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), v = Object.keys(o).reduce(function(m, w) {
    var A = o[w], _ = A.orientation;
    return !A.mirror && !A.hide ? W(W({}, m), {}, se({}, _, xt(m, "".concat(_)) + A.height)) : m;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), b = W(W({}, v), h), g = b.bottom;
  p && (b.bottom += p.props.height || Un.defaultProps.height), y && r && (b = eL(b, a, n, r));
  var x = c - b.left - b.right, O = l - b.top - b.bottom;
  return W(W({
    brushBottom: g
  }, b), {}, {
    // never return negative values for height and width
    width: Math.max(x, 0),
    height: Math.max(O, 0)
  });
}, V6 = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, lu = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, u = t.axisComponents, c = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, d = function(b, g) {
    var x = g.graphicalItems, O = g.stackGroups, m = g.offset, w = g.updateId, A = g.dataStartIndex, _ = g.dataEndIndex, P = b.barSize, D = b.layout, T = b.barGap, $ = b.barCategoryGap, M = b.maxBarSize, j = Cw(D), I = j.numericAxisName, k = j.cateAxisName, R = H6(x), L = [];
    return x.forEach(function(z, N) {
      var B = cu(b.data, {
        graphicalItems: [z],
        dataStartIndex: A,
        dataEndIndex: _
      }), q = z.type.defaultProps !== void 0 ? W(W({}, z.type.defaultProps), z.props) : z.props, H = q.dataKey, X = q.maxBarSize, te = q["".concat(I, "Id")], ne = q["".concat(k, "Id")], ee = {}, J = u.reduce(function(ye, qe) {
        var tr, dn, pn = g["".concat(qe.axisType, "Map")], Qi = q["".concat(qe.axisType, "Id")];
        pn && pn[Qi] || qe.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? ft(!1, "Specifying a(n) ".concat(qe.axisType, "Id requires a corresponding ").concat(
          qe.axisType,
          "Id on the targeted graphical component "
        ).concat((tr = z == null || (dn = z.type) === null || dn === void 0 ? void 0 : dn.displayName) !== null && tr !== void 0 ? tr : "")) : ft());
        var ga = pn[Qi];
        return W(W({}, ye), {}, se(se({}, qe.axisType, ga), "".concat(qe.axisType, "Ticks"), or(ga)));
      }, ee), U = J[k], V = J["".concat(k, "Ticks")], Z = O && O[te] && O[te].hasStack && fL(z, O[te].stackGroups), E = sr(z.type).indexOf("Bar") >= 0, Y = Yo(U, V), F = [], ae = R && JR({
        barSize: P,
        stackGroups: O,
        totalSize: V6(J, k)
      });
      if (E) {
        var ce, oe, Se = le(X) ? M : X, Te = (ce = (oe = Yo(U, V, !0)) !== null && oe !== void 0 ? oe : Se) !== null && ce !== void 0 ? ce : 0;
        F = QR({
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
          dataStartIndex: A,
          dataEndIndex: _
        }))), {}, se(se(se({
          key: z.key || "item-".concat(N)
        }, I, J[I]), k, J[k]), "animationId", w)),
        childIndex: I2(z, b.children),
        item: z
      });
    }), L;
  }, p = function(b, g) {
    var x = b.props, O = b.dataStartIndex, m = b.dataEndIndex, w = b.updateId;
    if (!Tg({
      props: x
    }))
      return null;
    var A = x.children, _ = x.layout, P = x.stackOffset, D = x.data, T = x.reverseStackOrder, $ = Cw(_), M = $.numericAxisName, j = $.cateAxisName, I = wt(A, n), k = cL(D, I, "".concat(M, "Id"), "".concat(j, "Id"), P, T), R = u.reduce(function(q, H) {
      var X = "".concat(H.axisType, "Map");
      return W(W({}, q), {}, se({}, X, W6(x, W(W({}, H), {}, {
        graphicalItems: I,
        stackGroups: H.axisType === M && k,
        dataStartIndex: O,
        dataEndIndex: m
      }))));
    }, {}), L = K6(W(W({}, R), {}, {
      props: x,
      graphicalItems: I
    }), g?.legendBBox);
    Object.keys(R).forEach(function(q) {
      R[q] = l(x, R[q], L, q.replace("Map", ""), r);
    });
    var z = R["".concat(j, "Map")], N = U6(z), B = d(x, W(W({}, R), {}, {
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
      return P6(this, b), m = C6(this, b, [g]), se(m, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), se(m, "accessibilityManager", new d6()), se(m, "handleLegendBBoxUpdate", function(w) {
        if (w) {
          var A = m.state, _ = A.dataStartIndex, P = A.dataEndIndex, D = A.updateId;
          m.setState(W({
            legendBBox: w
          }, p({
            props: m.props,
            dataStartIndex: _,
            dataEndIndex: P,
            updateId: D
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
        var A = $2(w), _ = xt(m.props, "".concat(A));
        if (A && ue(_)) {
          var P, D;
          /.*touch.*/i.test(A) ? D = m.getMouseInfo(w.changedTouches[0]) : D = m.getMouseInfo(w), _((P = D) !== null && P !== void 0 ? P : {}, w);
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
        m.props.syncId !== void 0 && Ad.emit(_d, m.props.syncId, w, m.eventEmitterSymbol);
      }), se(m, "applySyncEvent", function(w) {
        var A = m.props, _ = A.layout, P = A.syncMethod, D = m.state.updateId, T = w.dataStartIndex, $ = w.dataEndIndex;
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
          }), B = Math.min(M, N.x + N.width), q = Math.min(j, N.y + N.height), H = L[I] && L[I].value, X = ah(m.state, m.props.data, I), te = L[I] ? {
            x: _ === "horizontal" ? L[I].coordinate : B,
            y: _ === "horizontal" ? q : L[I].coordinate
          } : yP;
          m.setState(W(W({}, w), {}, {
            activeLabel: H,
            activeCoordinate: te,
            activePayload: X,
            activeTooltipIndex: I
          }));
        } else
          m.setState(w);
      }), se(m, "renderCursor", function(w) {
        var A, _ = m.state, P = _.isTooltipActive, D = _.activeCoordinate, T = _.activePayload, $ = _.offset, M = _.activeTooltipIndex, j = _.tooltipAxisBandSize, I = m.getTooltipEventType(), k = (A = w.props.active) !== null && A !== void 0 ? A : P, R = m.props.layout, L = w.key || "_recharts-cursor";
        return /* @__PURE__ */ C.createElement(b6, {
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
      }), se(m, "renderPolarAxis", function(w, A, _) {
        var P = xt(w, "type.axisType"), D = xt(m.state, "".concat(P, "Map")), T = w.type.defaultProps, $ = T !== void 0 ? W(W({}, T), w.props) : w.props, M = D && D[$["".concat(P, "Id")]];
        return /* @__PURE__ */ Ue(w, W(W({}, M), {}, {
          className: de(P, M.className),
          key: w.key || "".concat(A, "-").concat(_),
          ticks: or(M, !0)
        }));
      }), se(m, "renderPolarGrid", function(w) {
        var A = w.props, _ = A.radialLines, P = A.polarAngles, D = A.polarRadius, T = m.state, $ = T.radiusAxisMap, M = T.angleAxisMap, j = wr($), I = wr(M), k = I.cx, R = I.cy, L = I.innerRadius, z = I.outerRadius;
        return /* @__PURE__ */ Ue(w, {
          polarAngles: Array.isArray(P) ? P : or(I, !0).map(function(N) {
            return N.coordinate;
          }),
          polarRadius: Array.isArray(D) ? D : or(j, !0).map(function(N) {
            return N.coordinate;
          }),
          cx: k,
          cy: R,
          innerRadius: L,
          outerRadius: z,
          key: w.key || "polar-grid",
          radialLines: _
        });
      }), se(m, "renderLegend", function() {
        var w = m.state.formattedGraphicalItems, A = m.props, _ = A.children, P = A.width, D = A.height, T = m.props.margin || {}, $ = P - (T.left || 0) - (T.right || 0), M = KA({
          children: _,
          formattedGraphicalItems: w,
          legendWidth: $,
          legendContent: c
        });
        if (!M)
          return null;
        var j = M.item, I = _w(M, x6);
        return /* @__PURE__ */ Ue(j, W(W({}, I), {}, {
          chartWidth: P,
          chartHeight: D,
          margin: T,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), se(m, "renderTooltip", function() {
        var w, A = m.props, _ = A.children, P = A.accessibilityLayer, D = mt(_, Ht);
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
        var A = m.props, _ = A.margin, P = A.data, D = m.state, T = D.offset, $ = D.dataStartIndex, M = D.dataEndIndex, j = D.updateId;
        return /* @__PURE__ */ Ue(w, {
          key: w.key || "_recharts-brush",
          onChange: lo(m.handleBrushChange, w.props.onChange),
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
        var P = m, D = P.clipPathId, T = m.state, $ = T.xAxisMap, M = T.yAxisMap, j = T.offset, I = w.type.defaultProps || {}, k = w.props, R = k.xAxisId, L = R === void 0 ? I.xAxisId : R, z = k.yAxisId, N = z === void 0 ? I.yAxisId : z;
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
          clipPathId: D
        });
      }), se(m, "renderActivePoints", function(w) {
        var A = w.item, _ = w.activePoint, P = w.basePoint, D = w.childIndex, T = w.isRange, $ = [], M = A.props.key, j = A.item.type.defaultProps !== void 0 ? W(W({}, A.item.type.defaultProps), A.item.props) : A.item.props, I = j.activeDot, k = j.dataKey, R = W(W({
          index: D,
          dataKey: k,
          cx: _.x,
          cy: _.y,
          r: 4,
          fill: Sv(A.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: _.payload,
          value: _.value
        }, ie(I, !1)), Ao(I));
        return $.push(b.renderActiveDot(I, R, "".concat(M, "-activePoint-").concat(D))), P ? $.push(b.renderActiveDot(I, W(W({}, R), {}, {
          cx: P.x,
          cy: P.y
        }), "".concat(M, "-basePoint-").concat(D))) : T && $.push(null), $;
      }), se(m, "renderGraphicChild", function(w, A, _) {
        var P = m.filterFormatItem(w, A, _);
        if (!P)
          return null;
        var D = m.getTooltipEventType(), T = m.state, $ = T.isTooltipActive, M = T.tooltipAxis, j = T.activeTooltipIndex, I = T.activeLabel, k = m.props.children, R = mt(k, Ht), L = P.props, z = L.points, N = L.isRange, B = L.baseLine, q = P.item.type.defaultProps !== void 0 ? W(W({}, P.item.type.defaultProps), P.item.props) : P.item.props, H = q.activeDot, X = q.hide, te = q.activeBar, ne = q.activeShape, ee = !!(!X && $ && R && (H || te || ne)), J = {};
        D !== "axis" && R && R.props.trigger === "click" ? J = {
          onClick: lo(m.handleItemMouseEnter, w.props.onClick)
        } : D !== "axis" && (J = {
          onMouseLeave: lo(m.handleItemMouseLeave, w.props.onMouseLeave),
          onMouseEnter: lo(m.handleItemMouseEnter, w.props.onMouseEnter)
        });
        var U = /* @__PURE__ */ Ue(w, W(W({}, P.props), J));
        function V(qe) {
          return typeof M.dataKey == "function" ? M.dataKey(qe.payload) : null;
        }
        if (ee)
          if (j >= 0) {
            var Z, E;
            if (M.dataKey && !M.allowDuplicatedCategory) {
              var Y = typeof M.dataKey == "function" ? V : "payload.".concat(M.dataKey.toString());
              Z = So(z, Y, I), E = N && B && So(B, Y, I);
            } else
              Z = z?.[j], E = N && B && B[j];
            if (ne || te) {
              var F = w.props.activeIndex !== void 0 ? w.props.activeIndex : j;
              return [/* @__PURE__ */ Ue(w, W(W(W({}, P.props), J), {}, {
                activeIndex: F
              })), null, null];
            }
            if (!le(Z))
              return [U].concat(ra(m.renderActivePoints({
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
      }), se(m, "renderCustomized", function(w, A, _) {
        return /* @__PURE__ */ Ue(w, W(W({
          key: "recharts-customized-".concat(_)
        }, m.props), m.state));
      }), se(m, "renderMap", {
        CartesianGrid: {
          handler: go,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: go
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: go
        },
        YAxis: {
          handler: go
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
      }), m.clipPathId = "".concat((x = g.id) !== null && x !== void 0 ? x : un("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = HS(m.triggeredAfterMouseMove, (O = g.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), m.state = {}, m;
    }
    return $6(b, v), E6(b, [{
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
        var x = this.props, O = x.children, m = x.data, w = x.height, A = x.layout, _ = mt(O, Ht);
        if (_) {
          var P = _.props.defaultIndex;
          if (!(typeof P != "number" || P < 0 || P > this.state.tooltipTicks.length - 1)) {
            var D = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value, T = ah(this.state, m, P, D), $ = this.state.tooltipTicks[P].coordinate, M = (this.state.offset.top + w) / 2, j = A === "horizontal", I = j ? {
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
        qd([mt(x.children, Ht)], [mt(this.props.children, Ht)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var x = mt(this.props.children, Ht);
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
        var O = this.container, m = O.getBoundingClientRect(), w = HI(m), A = {
          chartX: Math.round(x.pageX - w.left),
          chartY: Math.round(x.pageY - w.top)
        }, _ = m.width / O.offsetWidth || 1, P = this.inRange(A.chartX, A.chartY, _);
        if (!P)
          return null;
        var D = this.state, T = D.xAxisMap, $ = D.yAxisMap, M = this.getTooltipEventType();
        if (M !== "axis" && T && $) {
          var j = wr(T).scale, I = wr($).scale, k = j && j.invert ? j.invert(A.chartX) : null, R = I && I.invert ? I.invert(A.chartY) : null;
          return W(W({}, A), {}, {
            xValue: k,
            yValue: R
          });
        }
        var L = Tw(this.state, this.props.data, this.props.layout, P);
        return L ? W(W({}, A), L) : null;
      }
    }, {
      key: "inRange",
      value: function(x, O) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, w = this.props.layout, A = x / m, _ = O / m;
        if (w === "horizontal" || w === "vertical") {
          var P = this.state.offset, D = A >= P.left && A <= P.left + P.width && _ >= P.top && _ <= P.top + P.height;
          return D ? {
            x: A,
            y: _
          } : null;
        }
        var T = this.state, $ = T.angleAxisMap, M = T.radiusAxisMap;
        if ($ && M) {
          var j = wr($);
          return xx({
            x: A,
            y: _
          }, j);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var x = this.props.children, O = this.getTooltipEventType(), m = mt(x, Ht), w = {};
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
        var A = Ao(this.props, this.handleOuterEvent);
        return W(W({}, A), w);
      }
    }, {
      key: "addListener",
      value: function() {
        Ad.on(_d, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Ad.removeListener(_d, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(x, O, m) {
        for (var w = this.state.formattedGraphicalItems, A = 0, _ = w.length; A < _; A++) {
          var P = w[A];
          if (P.item === x || P.props.key === x.key || O === sr(P.item.type) && m === P.childIndex)
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
            var P = m[A], D = P.props, T = P.item, $ = T.type.defaultProps !== void 0 ? W(W({}, T.type.defaultProps), T.props) : T.props, M = sr(T.type);
            if (M === "Bar") {
              var j = (D.data || []).find(function(L) {
                return f3(x, L);
              });
              if (j)
                return {
                  graphicalItem: P,
                  payload: j
                };
            } else if (M === "RadialBar") {
              var I = (D.data || []).find(function(L) {
                return xx(x, L);
              });
              if (I)
                return {
                  graphicalItem: P,
                  payload: I
                };
            } else if (ru(P, w) || nu(P, w) || Pi(P, w)) {
              var k = D5({
                graphicalItem: P,
                activeTooltipItem: w,
                itemData: $.data
              }), R = $.activeIndex === void 0 ? k : $.activeIndex;
              return {
                graphicalItem: W(W({}, P), {}, {
                  childIndex: R
                }),
                payload: Pi(P, w) ? $.data[k] : P.props.data[k]
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
        var O = this.props, m = O.children, w = O.className, A = O.width, _ = O.height, P = O.style, D = O.compact, T = O.title, $ = O.desc, M = _w(O, w6), j = ie(M, !1);
        if (D)
          return /* @__PURE__ */ C.createElement(nw, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ C.createElement(Fd, _n({}, j, {
            width: A,
            height: _,
            title: T,
            desc: $
          }), this.renderClipPath(), Cg(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var I, k;
          j.tabIndex = (I = this.props.tabIndex) !== null && I !== void 0 ? I : 0, j.role = (k = this.props.role) !== null && k !== void 0 ? k : "application", j.onKeyDown = function(L) {
            x.accessibilityManager.keyboardEvent(L);
          }, j.onFocus = function() {
            x.accessibilityManager.focus();
          };
        }
        var R = this.parseEventsOfWrapper();
        return /* @__PURE__ */ C.createElement(nw, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ C.createElement("div", _n({
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
        }), /* @__PURE__ */ C.createElement(Fd, _n({}, j, {
          width: A,
          height: _,
          title: T,
          desc: $,
          style: L6
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
    var g = v.dataKey, x = v.data, O = v.children, m = v.width, w = v.height, A = v.layout, _ = v.stackOffset, P = v.margin, D = b.dataStartIndex, T = b.dataEndIndex;
    if (b.updateId === void 0) {
      var $ = Ew(v);
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
    if (g !== b.prevDataKey || x !== b.prevData || m !== b.prevWidth || w !== b.prevHeight || A !== b.prevLayout || _ !== b.prevStackOffset || !Pn(P, b.prevMargin)) {
      var M = Ew(v), j = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, I = W(W({}, Tw(b, x, A)), {}, {
        updateId: b.updateId + 1
      }), k = W(W(W({}, M), j), I);
      return W(W(W({}, k), p(W({
        props: v
      }, k), b)), {}, {
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
      var R, L, z, N, B = mt(O, Un), q = B && (R = (L = B.props) === null || L === void 0 ? void 0 : L.startIndex) !== null && R !== void 0 ? R : D, H = B && (z = (N = B.props) === null || N === void 0 ? void 0 : N.endIndex) !== null && z !== void 0 ? z : T, X = q !== D || H !== T, te = !le(x), ne = te && !X ? b.updateId : b.updateId + 1;
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
    return /* @__PURE__ */ Rt(v) ? x = /* @__PURE__ */ Ue(v, b) : ue(v) ? x = v(b) : x = /* @__PURE__ */ C.createElement(Vi, b), /* @__PURE__ */ C.createElement(pe, {
      className: "recharts-active-dot",
      key: g
    }, x);
  });
  var h = /* @__PURE__ */ ze(function(b, g) {
    return /* @__PURE__ */ C.createElement(y, _n({}, b, {
      ref: g
    }));
  });
  return h.displayName = y.displayName, h;
}, G6 = lu({
  chartName: "LineChart",
  GraphicalChild: Yi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: yr
  }, {
    axisType: "yAxis",
    AxisComp: mr
  }],
  formatAxisMap: Pv
}), gP = lu({
  chartName: "BarChart",
  GraphicalChild: Ir,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: yr
  }, {
    axisType: "yAxis",
    AxisComp: mr
  }],
  formatAxisMap: Pv
}), Y6 = lu({
  chartName: "PieChart",
  GraphicalChild: vr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: tu
  }, {
    axisType: "radiusAxis",
    AxisComp: Qs
  }],
  formatAxisMap: wL,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), X6 = lu({
  chartName: "AreaChart",
  GraphicalChild: Dr,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: yr
  }, {
    axisType: "yAxis",
    AxisComp: mr
  }],
  formatAxisMap: Pv
});
const Z6 = _s({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), J6 = {
  light: "",
  dark: ".dark"
}, bP = fe.createContext(null);
function xP() {
  const e = fe.useContext(bP);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const Q6 = ({ id: e, className: t, children: r, aspect: n, config: a, ...i }, o) => {
  const s = fe.useId(), u = `chart-${e || s.replace(/:/g, "")}`, c = fe.useRef(null), [l, f] = he(), d = He(() => new ResizeObserver((p) => f(p[0].contentRect.height)), []);
  return aO(() => {
    const p = o && "current" in o ? o.current : c.current;
    return p && d.observe(p.parentElement), () => {
      d.disconnect();
    };
  }, [d, o, c]), S(bP.Provider, {
    value: {
      config: a
    },
    children: K("div", {
      "data-chromatic": "ignore",
      "data-chart": u,
      ref: o || c,
      className: Q("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", n ? Z6({
        aspect: n
      }) : "aspect-auto h-full", t),
      ...i,
      children: [S(e9, {
        id: u,
        config: a
      }), S(LI, {
        height: l,
        className: "overflow-visible",
        children: r
      })]
    })
  });
}, da = fe.forwardRef(Q6);
da.displayName = "Chart";
const e9 = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([a, i]) => i.theme || i.color);
  if (!r.length)
    return null;
  const n = Object.entries(J6).map(([a, i]) => `
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
      __html: HT.sanitize(n.join(`
`))
    }
  });
}, Xi = Ht, pa = fe.forwardRef(({ active: e, payload: t, className: r, indicator: n = "dot", hideLabel: a = !1, hideIndicator: i = !1, label: o, labelFormatter: s, labelClassName: u, formatter: c, yAxisFormatter: l, color: f, nameKey: d, labelKey: p }, y) => {
  const { config: h } = xP(), v = fe.useMemo(() => {
    if (a || !t?.length)
      return null;
    const [g] = t, x = `${p || g.dataKey || g.name || "value"}`, O = ih(h, g, x), m = !p && typeof o == "string" ? h[o]?.label || o : O?.label;
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
        const O = `${d || g.name || g.dataKey || "value"}`, m = ih(h, g, O), w = f || g.payload.fill || g.color;
        return S("div", {
          className: Q("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", n === "dot" && "items-center"),
          children: c && g?.value !== void 0 && g.name ? c(g.value, g.name, g, x, g.payload) : K(dt, {
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
pa.displayName = "ChartTooltip";
const Nv = Yr, fu = fe.forwardRef(({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: a, hiddenKey: i, leftShift: o = 0 }, s) => {
  const { config: u } = xP();
  return r?.length ? S("div", {
    ref: s,
    className: Q("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", n === "top" ? "pb-2" : "pt-2", e),
    style: {
      marginLeft: o
    },
    children: r.map((c) => {
      const l = `${a || c.dataKey || "value"}`, f = ih(u, c, l, i);
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
fu.displayName = "ChartLegend";
function ih(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const a = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  if (r in t && typeof t[r] == "string" ? i = t[r] : a && r in a && typeof a[r] == "string" ? i = a[r] : "dataKey" in t && typeof t.dataKey == "string" && (i = t.dataKey), !(n && n === i))
    return i in e ? e[i] : e[r];
}
const wP = zt({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), r7 = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = he(e), a = tt(() => {
    n(!0);
  }, []), i = tt(() => n(!1), []), o = tt(() => n((s) => !s), []);
  return S(wP.Provider, {
    value: {
      enable: a,
      disable: i,
      toggle: o,
      enabled: r
    },
    children: t
  });
}, t9 = () => {
  const e = pt(wP);
  if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
}, Bt = (e, t) => {
  const r = ["categorical-1", "categorical-2", "categorical-3", "categorical-4", "categorical-5", "categorical-6", "categorical-7", "categorical-8"];
  return Ct(r[e % r.length], t);
}, Ct = (e, t) => {
  const r = t !== void 0 ? ` / ${t}` : "";
  return `hsl(var(--${`chart-${e}`})${r})`;
};
function Zi(e, t = "12px Inter, sans-serif") {
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
}), du = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), pu = (e = !1) => ({
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
const r9 = ({ index: e, visibleTicksCount: t, payload: r, tickFormatter: n, ...a }) => {
  const i = e === 0, o = e === t - 1;
  return S(Pr, {
    ...a,
    textAnchor: i ? "start" : o ? "end" : "middle",
    children: n?.(r.value, r.index) ?? r.value
  });
}, n9 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n, canBeBlurred: a, blurArea: i, lineType: o = "monotoneX", aspect: s, marginTop: u = 0 }, c) => {
  const { enabled: l } = t9(), f = Object.keys(t), d = r2(12), p = qv(e), y = Math.max(...p.flatMap((x) => f.map((O) => Zi(n?.tickFormatter ? n.tickFormatter(`${x[O]}`) : `${x[O]}`)))), h = n?.width ?? y + 20, v = !n?.hide, b = !r?.hide, g = !a || !l;
  return S(da, {
    config: t,
    ref: c,
    aspect: s,
    children: K(X6, {
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
          children: [(i === "l" || i === "lr") && K(dt, {
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
          }), (i === "r" || i === "lr") && K(dt, {
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
          }), !i && K(dt, {
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
            stopColor: t[x].color ? Ct(t[x].color) : Bt(O),
            stopOpacity: 0.8
          }), S("stop", {
            offset: "95%",
            stopColor: t[x].color ? Ct(t[x].color) : Bt(O),
            stopOpacity: 0.1
          })]
        }, O))]
      }), S(Gi, {
        ...du(),
        mask: `url(#${d}-transparent-edges)`
      }), b && S(yr, {
        dataKey: "x",
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: r?.tickFormatter,
        ticks: r?.ticks,
        domain: r?.domain,
        interval: 0,
        tick: r9
      }), v && S(mr, {
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickCount: n?.tickCount,
        tickFormatter: a && l ? () => "**" : n?.tickFormatter,
        ticks: n?.ticks,
        domain: n?.domain,
        width: h
      }), g && S(Xi, {
        ...pu(),
        content: S(pa, {
          indicator: "dot",
          yAxisFormatter: n?.tickFormatter
        })
      }), f.map((x, O) => S(Dr, {
        isAnimationActive: !1,
        dataKey: x,
        type: o,
        mask: `url(#${d}-transparent-edges)`,
        fill: `url(#fill${x}-${d})`,
        fillOpacity: t[x].dashed ? 0 : 0.4,
        stroke: t[x].color ? Ct(t[x].color) : Bt(O),
        strokeWidth: 1.5,
        strokeDasharray: t[x].dashed ? "4 4" : void 0
      }, x)), Object.keys(t).length > 1 && S(Nv, {
        className: "flex justify-start",
        content: S(fu, {})
      })]
    })
  });
}, n7 = ha(n9), a9 = ({ dataConfig: e, data: t, xAxis: r, yAxis: n = {
  hide: !0
}, label: a = !1, type: i = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: u, legend: c, showValueUnderLabel: l = !1, highlightLastBar: f = !1, onClick: d }, p) => {
  const y = Object.keys(e), h = qv(t).map((b, g, x) => f && y.length === 1 && !e[y[0]]?.color ? {
    ...b,
    fill: g === x.length - 1 ? Bt(g) : Bt(g, 0.5)
  } : b), v = Math.max(...h.flatMap((b) => y.map((g) => Zi(n?.tickFormatter ? n.tickFormatter(`${b[g]}`) : `${b[g]}`))));
  return S(da, {
    config: e,
    ref: p,
    aspect: u,
    children: K(gP, {
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
      children: [!o && S(Xi, {
        ...pu(),
        content: S(pa, {
          yAxisFormatter: n.tickFormatter
        })
      }), !s && S(Gi, {
        ...du()
      }), S(mr, {
        ...Lv(n),
        tick: !0,
        width: n.width ?? v + 20,
        hide: n.hide
      }), S(yr, {
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
      }), y.map((b, g) => S(Ir, {
        isAnimationActive: !1,
        dataKey: b,
        stackId: i === "stacked" || i === "stacked-by-sign" ? "stack" : void 0,
        fill: f ? (x) => x.fill : e[b].color ? Ct(e[b].color) : Bt(g),
        radius: i === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
        maxBarSize: 32,
        children: a && S(Et, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${b}`)
      }, `bar-${b}`)), c && S(Nv, {
        content: S(fu, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, a7 = ha(a9), i9 = ({ data: e, legend: t = !0, hideTooltip: r = !1 }, n) => {
  const a = e.reduce((i, o) => i + o.value, 0);
  return K(mh, {
    children: [S("div", {
      className: "w-full",
      ref: n,
      children: S("div", {
        className: "flex h-2 gap-1 overflow-hidden",
        children: e.map((i, o) => {
          const s = i.value / a * 100, u = i.color ? Ct(i.color) : Bt(o), c = (l) => {
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
        const s = i.color ? Ct(i.color) : Bt(o);
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
}, i7 = ha(i9), o9 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n = {
  hide: !0
}, lineType: a = "natural", aspect: i, hideTooltip: o = !1, hideGrid: s = !1 }, u) => {
  const c = Object.keys(t), l = qv(e), f = Math.max(...l.flatMap((d) => c.map((p) => Zi(n?.tickFormatter ? n.tickFormatter(`${d[p]}`) : `${d[p]}`))));
  return S(da, {
    config: t,
    ref: u,
    aspect: i,
    children: K(G6, {
      accessibilityLayer: !0,
      data: l,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12
      },
      children: [!s && S(Gi, {
        ...du()
      }), !r?.hide && S(yr, {
        ...Rv(r)
      }), !n?.hide && S(mr, {
        ...Lv(n),
        width: n.width ?? f + 20
      }), !o && S(Xi, {
        ...pu(),
        content: S(pa, {
          yAxisFormatter: n?.tickFormatter
        })
      }), c.map((d, p) => S(Yi, {
        dataKey: d,
        isAnimationActive: !1,
        type: a,
        stroke: t[d].color ? Ct(t[d].color) : Bt(p),
        strokeWidth: 1.5,
        strokeDasharray: t[d].dashed ? "4 4" : void 0,
        dot: !1
      }, d))]
    })
  });
}, o7 = ha(o9), s9 = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: a }, i) => {
  const o = e.map((c, l) => ({
    ...c,
    fill: t[c.label]?.color ? Ct(t[c.label].color) : Bt(l)
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
    children: K(Y6, {
      accessibilityLayer: !0,
      margin: {
        left: 0,
        right: 0
      },
      children: [u !== 0 && S(Xi, {
        isAnimationActive: !1,
        content: S(pa, {
          yAxisFormatter: a
        })
      }), K(vr, {
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
          return S(Fs, {
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
        content: S(fu, {
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
}, s7 = ha(s9);
var Bv = "Progress", Fv = 100, [u9] = KT(Bv), [c9, l9] = u9(Bv), OP = fe.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: a,
      getValueLabel: i = f9,
      ...o
    } = e;
    (a || a === 0) && !jw(a) && console.error(d9(`${a}`, "Progress"));
    const s = jw(a) ? a : Fv;
    n !== null && !Mw(n, s) && console.error(p9(`${n}`, "Progress"));
    const u = Mw(n, s) ? n : null, c = As(u) ? i(u, s) : void 0;
    return /* @__PURE__ */ S(c9, { scope: r, value: u, max: s, children: /* @__PURE__ */ S(
      wh.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": As(u) ? u : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": _P(u, s),
        "data-value": u ?? void 0,
        "data-max": s,
        ...o,
        ref: t
      }
    ) });
  }
);
OP.displayName = Bv;
var SP = "ProgressIndicator", AP = fe.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, a = l9(SP, r);
    return /* @__PURE__ */ S(
      wh.div,
      {
        "data-state": _P(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...n,
        ref: t
      }
    );
  }
);
AP.displayName = SP;
function f9(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function _P(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function As(e) {
  return typeof e == "number";
}
function jw(e) {
  return As(e) && !isNaN(e) && e > 0;
}
function Mw(e, t) {
  return As(e) && !isNaN(e) && e <= t && e >= 0;
}
function d9(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Fv}\`.`;
}
function p9(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Fv} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var PP = OP, h9 = AP;
const TP = fe.forwardRef(({ className: e, value: t, ...r }, n) => S(PP, {
  ref: n,
  value: t,
  className: Q("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: S(h9, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
TP.displayName = PP.displayName;
function v9(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const y9 = (e) => {
  const t = VT.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((a) => {
    delete a.x, Object.entries(a).forEach(([i, o]) => {
      n < o && (n = o, r = i);
    });
  }), r;
}, m9 = ({ dataConfig: e, data: t, xAxis: r = {
  hide: !0
}, yAxis: n, label: a = !1, aspect: i, hideTooltip: o = !1, hideGrid: s = !1, showRatio: u = !1, valueFormatter: c }, l) => {
  const f = Object.keys(e), d = v9(t), p = Math.max(...d.map((b) => Zi(`${b.x}`))), y = f.reduce((b, g) => (b[g] = t.reduce((x, O) => x + O.values[g], 0), b), {}), h = {
    ...Rv(r),
    type: "number",
    dataKey: y9(d)
  }, v = {
    ...Lv(n),
    type: "category",
    dataKey: "x"
  };
  return S(da, {
    config: e,
    ref: l,
    aspect: i,
    children: K(gP, {
      layout: "vertical",
      accessibilityLayer: !0,
      data: d,
      margin: {
        left: n && !n.hide ? 8 : 12,
        right: a || u ? 100 : 0
      },
      children: [!o && S(Xi, {
        ...pu(!0),
        content: S(pa, {
          yAxisFormatter: n?.tickFormatter
        })
      }), !s && S(Gi, {
        ...du(),
        vertical: !0,
        horizontal: !1
      }), S(yr, {
        ...h,
        hide: r?.hide
      }), S(mr, {
        ...v,
        hide: n?.hide,
        width: n?.width ?? p + 20
      }), f.map((b, g) => S(dt, {
        children: S(Ir, {
          isAnimationActive: !1,
          layout: "vertical",
          dataKey: b,
          fill: e[b].color ? Ct(e[b].color) : Bt(g),
          radius: 4,
          maxBarSize: 24,
          children: (a || u) && S(Et, {
            position: "right",
            offset: 10,
            className: "fill-f1-foreground",
            fontSize: 12,
            formatter: c,
            content: u ? S(g9, {
              valueFormatter: c,
              total: y[b],
              showLabel: a
            }) : void 0
          }, `label-{${b}}`)
        }, `bar-${b}`)
      }))]
    })
  });
}, u7 = ha(m9), g9 = ({ viewBox: e, offset: t = 0, value: r, valueFormatter: n, total: a, showLabel: i }) => {
  const { x: o = 0, y: s = 0, width: u = 0, height: c = 0 } = e, l = o + u + t, f = s + c / 2, d = n ? n(r) : r, p = Zi(`${d}`), y = a > 0 ? Math.round(Number(r) / a * 100) : 0;
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
typeof e == "object" && "value_x100" in e && (e.value_x100 === void 0 || e.value_x100 === null), sh = (e) => "value" in e ? e.value : e.value_x100 !== void 0 && e.value_x100 !== null ? e.value_x100 / 100 : void 0, $w = (e, t = {}) => {
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
}, b9 = (e) => e == null ? {
  value: void 0
} : typeof e == "number" ? { value: e } : e, x9 = (e, t) => {
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
    numericValue: b9(e.numericValue),
    formatter: e.formatter ? e.formatter : r.formatter,
    formatterOptions: {
      ...r.formatterOptions,
      ...e.formatterOptions
    }
  } : { ...r, numericValue: e };
}, w9 = () => {
  const { locale: e } = gO();
  return tt(
    (t, r) => x9(t, {
      ...r,
      formatterOptions: {
        locale: e,
        ...r?.formatterOptions
      }
    }),
    [e]
  );
}, O9 = {
  "-1": YT,
  1: GT
}, S9 = {
  "-1": "negative",
  0: "neutral",
  1: "positive"
}, EP = ze(({ percentage: e, amount: t, invertStatus: r, info: n, hint: a, nullText: i }, o) => {
  const s = w9(), u = s(t, {
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
    h = S9[Math.sign((l ?? 0) * (r ? -1 : 1)).toString()];
    const g = oh(l) ? null : c.formatter({
      ...c.numericValue,
      units: "%",
      unitsPosition: "append"
    }, c.formatterOptions), x = u.formatter(u.numericValue, u.formatterOptions);
    d = [g, x].filter(Boolean).join(" · "), y = `${h} balance`, p = h === "neutral" ? null : S(ct, {
      icon: O9[b],
      size: "sm",
      className: Q({
        positive: "text-f1-icon-positive",
        neutral: "text-f1-icon-secondary",
        negative: "text-f1-icon-critical"
      }[h])
    });
  }
  return S(Ni, {
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
EP.displayName = "F0TagBalance";
const A9 = at(EP), zv = fe.forwardRef(({ className: e, href: t, onClick: r, disabled: n, children: a, ...i }, o) => {
  const { actions: s } = Tr();
  return K("div", {
    ref: o,
    role: "article",
    className: Q("flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background-inverse-secondary p-4 shadow", (t || r) && !n && "cursor-pointer transition-all duration-200 hover:border-f1-border-hover hover:shadow-md", e),
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
  className: Q("flex flex-row gap-1.5", e),
  ...t
}));
Wv.displayName = "CardHeader";
const Uv = fe.forwardRef(({ className: e, ...t }, r) => S("h3", {
  ref: r,
  className: Q("text-base font-medium text-f1-foreground", e),
  ...t
}));
Uv.displayName = "CardTitle";
const Hv = fe.forwardRef(({ className: e, ...t }, r) => S("h3", {
  ref: r,
  className: Q("line-clamp-1 text-base font-normal text-f1-foreground-secondary", e),
  ...t
}));
Hv.displayName = "CardSubtitle";
const _9 = fe.forwardRef(({ className: e, content: t }, r) => S("div", {
  ref: r,
  className: Q("-ml-1 flex h-6 w-6 items-center justify-center", e),
  children: S(mh, {
    children: K(gh, {
      children: [S(bh, {
        className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
        "aria-label": t,
        children: S(ct, {
          icon: XT,
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
_9.displayName = "CardInfo";
const P9 = fe.forwardRef(({ className: e, title: t, icon: r = uO, ...n }, a) => S(ph, {
  ref: a,
  className: Q("group inline-flex aspect-square h-6 items-center justify-center gap-1", "rounded-sm border border-solid border-f1-border bg-f1-background-inverse-secondary", "whitespace-nowrap px-0 text-base font-medium text-f1-foreground", "cursor-pointer transition-colors hover:border-f1-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", e),
  role: "button",
  "aria-label": t,
  ...n,
  children: S(ct, {
    size: "sm",
    icon: r,
    className: "text-f1-icon-bold"
  })
}));
P9.displayName = "CardLink";
const Kv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: Q("relative flex grow flex-col", e),
  ...t
}));
Kv.displayName = "CardContent";
const Vv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: Q("flex items-center", e),
  ...t
}));
Vv.displayName = "CardFooter";
const c7 = fe.forwardRef(function({ className: t, ...r }, n) {
  return S("div", {
    ref: n,
    className: Q("flex text-3xl font-semibold", t),
    ...r
  });
});
Vv.displayName = "CardComment";
function T9({ primaryAction: e, secondaryActions: t, compact: r = !1 }) {
  const n = ZT("(min-width: 640px)");
  if (!(e || i()))
    return null;
  return K(Vv, {
    className: Q("flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]", "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4", r && "pt-3"),
    children: [t && S("div", {
      className: "flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit",
      children: Array.isArray(t) ? t.map((o, s) => S(Yt, {
        label: o.label,
        icon: o.icon,
        variant: "outline",
        onClick: o.onClick,
        hideLabel: n && s > 0,
        size: n ? r ? "sm" : "md" : "lg"
      }, s)) : S(bO, {
        href: t.href,
        target: t.target,
        disabled: t.disabled,
        children: t.label
      })
    }), e && S("div", {
      className: "w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center",
      children: S(Yt, {
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
const E9 = ({ avatar: e, compact: t = !1 }) => e.type === "emoji" ? S(JT, {
  emoji: e.emoji,
  size: t ? "sm" : "lg"
}) : e.type === "file" ? S(xO, {
  file: e.file,
  size: t ? "sm" : "lg"
}) : e.type === "icon" ? S(QT, {
  icon: e.icon,
  size: t ? "sm" : "lg"
}) : S(an, {
  avatar: e,
  size: t ? "sm" : "lg"
});
function C9({ avatar: e, overlay: t = !1, compact: r = !1 }) {
  const n = e.type === "person";
  return S("div", {
    className: Q("mb-1.5 flex h-fit w-fit", t && !r && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background", t && n && "rounded-full", r && "mb-0"),
    children: S(E9, {
      avatar: e,
      compact: r
    })
  });
}
const j9 = {
  info: lO,
  warning: hh,
  critical: fO,
  positive: Ps
}, CP = ze(({ text: e, level: t }, r) => {
  Ts(e, {
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
  return S(Ni, {
    ref: r,
    className: Q("pl-0.5", {
      info: "bg-f1-background-info text-f1-foreground-info",
      warning: "bg-f1-background-warning text-f1-foreground-warning",
      critical: "bg-f1-background-critical text-f1-foreground-critical",
      positive: "bg-f1-background-positive text-f1-foreground-positive"
    }[t]),
    left: S(ct, {
      icon: j9[t],
      size: "md",
      "aria-hidden": !0,
      color: a
    }),
    text: e
  });
});
CP.displayName = "F0TagAlert";
const jP = at(CP), M9 = (e) => S("div", {
  "data-cell-type": "alert-tag",
  children: S(jP, {
    level: e.level,
    text: e.label
  })
}), Ut = {
  text: "pt-[2px]",
  avatar: "pt-[2px]",
  avatarList: "pt-[3px]"
};
function MP(e) {
  return typeof e == "object" && e !== null && "placeholder" in e && typeof e.placeholder == "string";
}
function va(e, t) {
  return MP(e) ? typeof e == "object" && e !== null && t in e ? e[t] === void 0 : !0 : !1;
}
function ya(e, t) {
  if (e !== void 0 && typeof e != "object")
    return e;
  if (!e || typeof e != "object")
    return;
  const n = t in e ? e[t] : void 0, i = MP(e) ? e.placeholder : void 0;
  if (n !== void 0)
    return t === "date" && n !== null && typeof n == "object" && "getTime" in n ? new Date(n.getTime()) : n;
  if (i !== void 0)
    return i;
}
function $9(e) {
  if (Iw(e))
    try {
      return e.toLocaleDateString();
    } catch {
      return String(e);
    }
  const t = ya(e, "date");
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
const $P = (e, t) => {
  const r = ya(e, "number"), n = va(e, "number"), a = {
    unitsPosition: "right",
    units: "",
    ...typeof e == "object" && "number" in e ? e : {
      decimalPlaces: void 0,
      number: r
    }
  };
  return K("div", {
    className: Q("flex flex-1 items-center gap-1 text-f1-foreground", t.visualization === "table" && ["justify-end", Ut.text], n && "text-f1-foreground-secondary"),
    children: [a.unitsPosition === "left" && a.units && S(Dw, {
      units: a.units
    }), a.decimalPlaces !== void 0 ? a.number?.toFixed(a.decimalPlaces) : a.number?.toString() ?? "", a.unitsPosition === "right" && a.units && S(Dw, {
      units: a.units
    })]
  });
}, Dw = ({ units: e }) => S("span", {
  children: e.toString()
}), I9 = (e, t) => {
  const r = {
    ...typeof e == "object" && "amount" in e ? e : {
      amount: e
    }
  };
  return $P({
    ...typeof e == "object" && "amount" in e ? e : {},
    number: r.amount,
    decimalPlaces: r.currency?.decimalPlaces,
    units: r.currency?.symbol,
    unitsPosition: r.currency?.symbolPosition
  }, t);
}, D9 = (e, t) => {
  const r = e.type ?? "person";
  return S("div", {
    className: Q("pointer-events-auto w-full", t.visualization === "table" && Ut.avatarList),
    children: S(e2, {
      type: r,
      avatars: e.avatarList,
      size: "xs",
      max: e.max
    })
  });
}, k9 = (e, t) => K("div", {
  className: Q("flex items-center gap-2", t.visualization === "table" && Ut.avatar),
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
}), N9 = (e, t) => {
  const r = e.label ?? t.i18n.countries[e.code] ?? e.code;
  return K("div", {
    "data-cell-type": "country",
    className: "flex items-center gap-2",
    children: [S(eE, {
      size: "sm",
      flag: e.code,
      "aria-label": r
    }), " ", S(on, {
      className: "min-w-0 flex-1 text-f1-foreground",
      tag: "span",
      children: r
    })]
  });
}, R9 = (e, t) => {
  const r = $9(e), n = va(e, "date");
  return S("div", {
    className: Q("monospace text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Ut.text),
    children: r
  });
};
var l7 = {
  md: 900,
  xl: 1440
}, L9 = {
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
}, f7 = {
  special: {
    highlight: "hsl(var(--accent-50))"
  }
};
const IP = ze(({ text: e, ...t }, r) => {
  Ts(e, {
    disallowEmpty: !0
  }, {
    componentName: "F0TagDot"
  });
  const n = "color" in t && t.color ? `hsl(${L9[t.color][50]})` : "customColor" in t && t.customColor;
  return n ? S(Ni, {
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
IP.displayName = "F0TagDot";
const DP = at(IP), q9 = (e) => S("div", {
  "data-cell-type": "dot-tag",
  children: S(DP, {
    text: e.label,
    color: e.color
  })
}), B9 = (e) => K("div", {
  className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
  "data-cell-type": "file",
  children: [S(xO, {
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
}) : S(dt, {
  children: t
}), NP = (e, t) => S("div", {
  className: Q("flex items-center gap-2", t.visualization === "table" && Ut.avatar),
  children: S(kP, {
    tooltip: e.tooltip,
    children: K("div", {
      className: "inline-flex items-center gap-2",
      children: [S(ct, {
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
}), F9 = (e) => S(NP, {
  icon: tE,
  label: e.name
}), z9 = (e) => typeof e == "object" && e !== null && "lines" in e ? e.lines : void 0, W9 = (e) => (typeof e == "object" && e !== null && "full" in e && e.full) ?? !1, U9 = (e, t) => {
  const r = ya(e, "text")?.toString() || "", n = va(e, "text"), a = W9(e), i = z9(e) || 3;
  return S(on, {
    className: Q("whitespace-pre-wrap break-words text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Ut.text),
    lines: i,
    disabled: a,
    children: r
  });
}, Td = 100, kw = 12, H9 = 12, K9 = (e, t) => {
  const r = ya(e, "percentage"), n = va(e, "percentage");
  if (r === void 0)
    return null;
  if (n)
    return S("span", {
      className: Q("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Ut.text),
      "data-cell-type": "percentage",
      children: r
    });
  const a = Td / 2, i = a - kw / 2, o = i - H9, s = 2 * Math.PI * o, u = (100 - Math.min(Number(r), 100)) / 100 * s, c = typeof e == "object" && "label" in e;
  return K("div", {
    className: "flex items-center gap-2",
    "data-cell-type": "percentage",
    children: [K("svg", {
      viewBox: `0 0 ${Td} ${Td}`,
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
        strokeWidth: kw,
        strokeDasharray: s,
        strokeDashoffset: u,
        strokeLinecap: "round"
      })]
    }), S("span", {
      className: "text-f1-foreground",
      children: c ? e.label : `${r}%`
    })]
  });
}, V9 = (e, t) => {
  const r = `${e.firstName.toString()} ${e.lastName.toString()}`;
  return K("div", {
    className: Q("flex min-w-0 flex-1 items-center gap-2", t.visualization === "table" && Ut.avatar),
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
      className: Q("min-w-0 flex-1", e.deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
      tag: "span",
      children: r
    })]
  });
}, G9 = (e, t) => {
  const r = ya(e, "value"), n = va(e, "value");
  if (r === void 0)
    return null;
  if (n)
    return S("span", {
      className: "text-f1-foreground-secondary",
      "data-cell-type": "progressBar",
      children: r
    });
  const a = r, i = typeof e == "object" && "max" in e ? e.max ?? 100 : 100, o = typeof e == "object" && "label" in e ? e.label : void 0, s = typeof e == "object" && "hideLabel" in e ? e.hideLabel : void 0, u = typeof e == "object" && "color" in e ? e.color : void 0, c = Ct(u || "categorical-1"), l = a / i * 100;
  return K("div", {
    className: "flex w-full items-center gap-2",
    "data-cell-type": "progressBar",
    children: [S("div", {
      className: "min-w-16 flex-grow",
      children: S(TP, {
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
}, RP = ze(({ text: e, additionalAccessibleText: t, variant: r }, n) => (Ts(e, {
  disallowEmpty: !0
}, {
  componentName: "F0TagStatus"
}), S(Ni, {
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
RP.displayName = "F0TagStatus";
const LP = at(RP), Y9 = (e) => S("div", {
  "data-cell-type": "status",
  children: S(LP, {
    variant: e.status,
    text: e.label
  })
}), X9 = {
  synced: {
    icon: Ps,
    colorClass: "text-f1-icon-positive"
  },
  syncing: {
    icon: aE,
    colorClass: "text-f1-icon-secondary",
    animated: !0
  },
  pending: {
    icon: wO,
    colorClass: "text-f1-icon-secondary"
  },
  partiallySynced: {
    icon: nE,
    colorClass: "text-f1-icon-warning"
  },
  outdated: {
    icon: hh,
    colorClass: "text-f1-icon-warning"
  },
  failed: {
    icon: rE,
    colorClass: "text-f1-icon-critical"
  }
}, Z9 = (e, t) => {
  const r = X9[e.status], n = t.i18n.syncStatus[e.status], a = e.tooltip ?? n, i = S(ct, {
    icon: r.icon,
    "aria-label": a
  });
  return S("div", {
    className: Q("flex items-center", t.visualization === "table" && Ut.avatar),
    "data-cell-type": "sync-status",
    children: S(kP, {
      tooltip: a,
      children: S("div", {
        className: Q("inline-flex items-center", r.colorClass),
        children: r.animated ? S(Kt.div, {
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
}, J9 = (e) => S("div", {
  "data-cell-type": "tag",
  children: S(Oh, {
    text: e.label,
    icon: e.icon
  })
}), hu = ze(({ avatar: e, text: t }, r) => (Ts(t, {
  disallowEmpty: !0
}, {
  componentName: "F0TagAvatar"
}), S(Ni, {
  ref: r,
  className: "border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
  left: S(an, {
    avatar: e,
    size: "xs"
  }),
  text: t,
  shape: e.type === "person" ? "rounded" : "square"
})));
hu.displayName = "AvatarTag";
const qP = ze(({ name: e, src: t }, r) => S(hu, {
  ref: r,
  avatar: {
    type: "company",
    name: e,
    src: t
  },
  text: e
}));
qP.displayName = "F0TagCompany";
const Q9 = at(qP), BP = ze(({ src: e, name: t }, r) => S(hu, {
  ref: r,
  avatar: {
    type: "person",
    firstName: t,
    lastName: "",
    src: e
  },
  text: t
}));
BP.displayName = "F0TagPerson";
const ez = at(BP), FP = ze(({ name: e, src: t }, r) => S(hu, {
  ref: r,
  avatar: {
    type: "team",
    name: e,
    src: t
  },
  text: e
}));
FP.displayName = "F0TagTeam";
const tz = at(FP), rz = (e) => {
  const { type: t } = e;
  if (t === "dot") return S(DP, {
    ...e
  });
  if (t === "person") return S(ez, {
    ...e
  });
  if (t === "team") return S(tz, {
    ...e
  });
  if (t === "company") return S(Q9, {
    ...e
  });
  if (t === "alert") return S(jP, {
    ...e
  });
  if (t === "status") return S(LP, {
    ...e
  });
  if (t === "balance") return S(A9, {
    ...e
  });
  if (t === "raw") return S(Oh, {
    ...e
  });
}, uh = ({ tag: e }) => {
  const t = rz(e);
  return t || "Invalid tag type";
}, zP = ({ count: e, list: t }) => {
  const r = S(Oh, {
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
        }, a)), S(yO, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : r;
};
zP.displayName = "TagCounter";
const WP = ({ type: e, tags: t, max: r = 4, remainingCount: n }) => {
  const a = t.map((i) => ({
    type: e,
    ...i
  }));
  return S(mO, {
    items: a,
    max: r,
    renderListItem: (i) => S(uh, {
      tag: i
    }),
    renderDropdownItem: () => null,
    forceShowingOverflowIndicator: n !== void 0,
    renderOverflowIndicator: (i) => S(zP, {
      count: (n ?? 0) + i,
      list: n ? void 0 : a.slice(a.length - i)
    }),
    overflowIndicatorWithPopover: !1,
    className: "flex-1"
  });
};
WP.displayName = "F0TagList";
const nz = at(WP), az = (e) => S(nz, {
  type: e.type,
  tags: e.tags,
  max: e.max
}), iz = (e, t) => K("div", {
  className: Q("flex items-center gap-2", t.visualization === "table" && Ut.avatar),
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
}), oz = (e, t) => {
  const r = ya(e, "text"), n = va(e, "text"), a = r?.toString() ?? "";
  return S(on, {
    lines: 1,
    tag: "span",
    className: Q("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Ut.text),
    children: a
  });
}, Qe = {
  text: oz,
  longText: U9,
  number: $P,
  date: R9,
  amount: I9,
  avatarList: D9,
  status: Y9,
  alertTag: M9,
  person: V9,
  percentage: K9,
  progressBar: G9,
  company: k9,
  team: iz,
  tag: J9,
  dotTag: q9,
  tagList: az,
  icon: NP,
  file: B9,
  folder: F9,
  country: N9,
  syncStatus: Z9
}, sz = (e) => e !== void 0 && typeof e == "object", d7 = (e, t, r) => {
  const { type: n, value: a } = sz(e) ? e : {
    type: "text",
    value: e ?? r
  }, i = Qe[n];
  return i ? a === void 0 ? r : i(a, {
    visualization: t.visualization,
    i18n: t.i18n
  }) : `[Invalid ${n} renderer]`;
}, uz = {
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
function cz({ metadata: e }) {
  const { type: t, value: r } = e.property, n = uz[t];
  if (!n)
    return K("div", {
      className: "flex h-8 items-center gap-1.5",
      children: ["icon" in e && S(ct, {
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
        children: S(ct, {
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
function Nw({ otherActions: e, selectable: t = !1, selected: r = !1, onSelect: n, title: a, overlay: i = !1 }) {
  const o = Tr(), s = e && e.length > 0, [u, c] = he(!1);
  return !s && !t ? null : K("div", {
    className: Q("flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]", (u || r) && "delay-0 sm:opacity-100", i && "absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"),
    children: [s && S("div", {
      className: "flex items-center justify-center",
      children: S(QO, {
        items: e,
        open: u,
        onOpenChange: c,
        children: S(_r, {
          label: o.actions.other,
          icon: OO,
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
      children: S(iE, {
        title: a,
        checked: r,
        onCheckedChange: n,
        hideLabel: !0
      })
    })]
  });
}
const p7 = ["contain", "cover", "fit-width", "fit-height", "scale-down"], h7 = ["xs", "sm", "md", "lg", "xl"], lz = {
  xs: "h-24",
  sm: "h-32",
  md: "h-40",
  lg: "h-48",
  xl: "h-64"
}, fz = {
  contain: "object-contain h-full w-full",
  cover: "object-cover h-full w-full",
  "fit-width": "w-full h-auto",
  "fit-height": "object-contain h-full w-auto",
  "scale-down": "object-scale-down h-full w-full"
};
function dz(e) {
  return fz[e];
}
const pz = ze(function({ compact: t = !1, avatar: r, image: n, imageFit: a = "fit-width", imageSize: i = "sm", blurredBackground: o = !0, title: s, description: u, metadata: c, children: l, link: f, primaryAction: d, secondaryActions: p, otherActions: y, selectable: h = !1, selected: v = !1, onSelect: b, onClick: g, forceVerticalMetadata: x = !1, fullHeight: O = !1, disableOverlayLink: m = !1 }, w) {
  const A = Me(null), _ = (P) => {
    A?.current?.click(), g?.(), P.preventDefault(), P.stopPropagation();
  };
  return K(zv, {
    className: Q("group relative bg-f1-background shadow-none transition-all", t && "p-3", O && "h-full", (h || y && y.length > 0) && !v && "hover:border-f1-border", f && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", v && "border-f1-border-selected bg-f1-background-selected-secondary"),
    onClick: g,
    ref: w,
    children: [f && !m && S(bO, {
      href: f,
      variant: "unstyled",
      className: Q("z-1 absolute inset-0 block rounded-xl", SO()),
      "aria-label": s,
      ref: A,
      children: " "
    }), n && K("div", {
      className: Q("relative -mx-3 -mt-3 mb-4 rounded-md", lz[i], t && "-mx-2 -mt-2 mb-3", a === "fit-height" && "flex items-center justify-center overflow-hidden", a === "fit-width" && "flex items-center justify-center overflow-hidden", a !== "fit-width" && a !== "fit-height" && "overflow-hidden"),
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
      }), S(oE, {
        src: n,
        alt: s,
        className: Q(dz(a))
      }), S(Nw, {
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
          className: Q("relative flex-col gap-0 p-0", n && !t && "pt-3", t && "flex-row items-center gap-2"),
          children: [r && S(C9, {
            avatar: r,
            overlay: !!n,
            compact: t
          }), K("div", {
            className: Q("flex flex-col gap-0"),
            children: [S(Uv, {
              className: Q("text-lg font-semibold text-f1-foreground", t && "line-clamp-1 text-base"),
              children: s
            }), u && S(Hv, {
              className: Q("text-base text-f1-foreground-secondary"),
              children: S(on, {
                lines: t ? 2 : 3,
                children: u
              })
            })]
          })]
        }), !n && S(Nw, {
          otherActions: y,
          selectable: h,
          selected: v,
          onSelect: b,
          title: s
        })]
      }), (c || l) && K(Kv, {
        className: "pointer-events-none",
        children: [c && S("div", {
          className: Q("flex flex-col gap-0.5", t && "gap-x-3 gap-y-0", x && "flex-col gap-y-0.5"),
          children: c.map((P, D) => S(cz, {
            metadata: P
          }, D))
        }), l]
      })]
    }), S(T9, {
      primaryAction: d,
      secondaryActions: p,
      compact: t
    })]
  });
}), hz = ({ compact: e = !1 }) => K(zv, {
  className: Q("group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none", e && "p-3"),
  "aria-busy": "true",
  "aria-live": "polite",
  children: [K(Wv, {
    className: Q("flex flex-col gap-2.5 p-0", e && "flex-row items-center gap-2"),
    children: [S(_t, {
      className: Q("h-10 w-10 rounded-full", e && "h-6 w-6")
    }), K("div", {
      className: Q("flex flex-col gap-0", e && "flex-row items-center gap-1.5"),
      children: [S(Uv, {
        className: "flex h-6 items-center",
        children: S(_t, {
          className: Q("h-4 w-20 rounded-md", e && "h-3")
        })
      }), S(Hv, {
        className: "flex h-5 items-center",
        children: S(_t, {
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
      children: [S(_t, {
        className: "h-4 w-4 rounded-full"
      }), S(_t, {
        className: "h-3 w-full max-w-20 rounded-md"
      })]
    }, r))
  })]
}), vz = ["forceVerticalMetadata", "disableOverlayLink"], UP = ze((e, t) => {
  const r = vz.reduce((n, a) => {
    const { [a]: i, ...o } = n;
    return o;
  }, e);
  return S(pz, {
    ref: t,
    ...r
  });
}), yz = ({ compact: e = !1 }) => S(hz, {
  compact: e
});
UP.displayName = "F0Card";
const v7 = at(AO(UP, yz)), HP = ze(({ className: e, ...t }, r) => S(_O, {
  ref: r,
  className: Q("text-f1-foreground-secondary", e),
  ...t
}));
HP.displayName = _O.displayName;
const KP = ({ className: e, ...t }) => S("div", {
  className: e,
  ...t
});
KP.displayName = "DialogFooter";
const VP = ({ className: e, ...t }) => S("div", {
  className: e,
  ...t
});
VP.displayName = "DialogHeader";
const Ed = [{
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
}], mz = (e, t) => {
  const r = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, n = ET();
  return K("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    ...e,
    children: [S("defs", {
      children: Ed.map((a) => S("clipPath", {
        id: `${n}-${a.id}`,
        children: S("path", {
          d: a.path
        })
      }, a.id))
    }), r ? Ed.map((a) => S("path", {
      d: a.path,
      fill: "currentColor",
      vectorEffect: "non-scaling-stroke"
    }, a.id)) : Ed.map((a) => S("foreignObject", {
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
}, gz = ze(mz);
function bz({ title: e, description: t, onClick: r, onClose: n, isVisible: a, dismissable: i = !1, trackVisibility: o, type: s, ...u }) {
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
          children: [K(dt, {
            children: [s === "one-campaign" ? S("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: S(ct, {
                icon: gz,
                size: "lg",
                className: "!h-8 !w-8"
              })
            }) : S("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: S(sE, {
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
            children: S(Yt, {
              variant: "ghost",
              icon: PO,
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
const y7 = at(bz), m7 = uE, xz = (e, t, r) => {
  const n = Xe[r];
  return n ? n.add(e, t) : { from: /* @__PURE__ */ new Date(), to: /* @__PURE__ */ new Date() };
};
function wz({ granularities: e, value: t, onChange: r }) {
  const n = Tr(), a = (i) => {
    r(i);
  };
  return K("div", {
    className: "flex flex-col gap-2",
    children: [S("h6", {
      className: "text-sm font-medium",
      children: n.date.selectedBy
    }), S(TO, {
      value: t,
      onValueChange: a,
      as: "list",
      children: S(EO, {
        children: e.map((i) => S(Dd, {
          value: i,
          children: n.date.granularities[i]?.label || i
        }, i))
      })
    })]
  });
}
const Rw = "__custom__", Oz = (e, t) => {
  if (!e?.value) return !1;
  const r = typeof t.value == "function" ? t.value() : t.value;
  return e.granularity !== t.granularity ? !1 : cy(e.value.from, r.from) && (!e.value.to || !r.to || cy(e.value.to, r.to));
}, Sz = ({ presets: e, ...t }) => {
  const [r, n] = he();
  return Le(() => {
    if (t.date) {
      const i = Object.entries(e).find(([o, s]) => Oz(t.date, s));
      n(i ? i[0] : void 0);
    }
  }, [t.date, e]), S(TO, {
    as: "list",
    value: r,
    onValueChange: (i) => {
      n(i), t.onSelect?.(i);
    },
    children: K(EO, {
      children: [Object.entries(e).map(([i, o]) => S(Dd, {
        value: i,
        children: o?.label || i
      }, i)), S(cE, {}), S(Dd, {
        value: Rw,
        children: "Custom"
      }, Rw)]
    })
  });
}, Ha = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity, Lw = "__custom__";
function Az({ onSelect: e, defaultValue: t, presets: r = [], granularities: n = ["day"], children: a, compareTo: i, defaultCompareTo: o, onCompareToChange: s, hideCalendarInput: u, value: c, asChild: l, weekStartsOn: f, ...d }) {
  const p = Tr(), y = gO(), [h, v] = he(c || t), b = f ?? y.date?.weekStartsOn ?? lE.Monday;
  Le(() => {
    Ha(c, h) || v(c || t);
  }, [c, t]);
  const g = He(() => h?.granularity ?? "day", [h?.granularity]), x = He(() => ly(b)[g], [g, b]), O = He(() => x.calendarMode || "single", [x]), m = (L) => {
    w({
      value: x.toRange(L ?? void 0),
      granularity: g
    });
  }, w = (L) => {
    Ha(L, h) || (v(L), e?.(L));
  }, A = (L) => {
    P(L === Lw);
    const z = L ? r[+L] : void 0;
    if (!z) return;
    const N = ly(b);
    w({
      value: N[z.granularity].toRange(typeof z.value == "function" ? z.value() : z.value),
      granularity: z.granularity
    }), L !== Lw && d.onOpenChange?.(!1);
  }, [_, P] = he(!1), D = (L) => {
    w({
      value: h?.value,
      granularity: L
    });
  }, T = He(() => r.length > 0 && !_, [r, _]), $ = () => {
    P(!1);
  }, M = He(() => x.calendarView || "day", [x]), [j, I] = he(o || void 0), k = He(() => {
    const L = (i ?? {})[g] || [];
    if (!h?.value)
      return [];
    const z = h.value, N = L.map((B, q) => {
      const H = typeof B.value == "function" ? B.value(x.toRange(z)) : xz(x.toRange(z), B.value.delta, B.value.units), X = Array.isArray(H) ? H.map((te) => x.toString(te, p)).join(", ") : x.toString(H, p);
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
  }, [j, s, k]), K(fE, {
    open: d.open,
    onOpenChange: d.onOpenChange,
    children: [S(dE, {
      asChild: l,
      children: a
    }), S(pE, {
      className: "w-full overflow-auto",
      align: "start",
      children: T ? S(Sz, {
        presets: r,
        date: h,
        onSelect: A
      }) : K("div", {
        className: "flex gap-4",
        children: [(r.length > 0 || n.length > 1) && K("div", {
          children: [r.length > 0 && S(Yt, {
            icon: sO,
            variant: "neutral",
            size: "sm",
            hideLabel: !0,
            label: "Back",
            onClick: $
          }), n.length > 1 && S(wz, {
            granularities: n,
            value: g,
            onChange: D
          })]
        }), K("div", {
          className: "min-w-[300px] flex-1",
          children: [S(hE, {
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
            children: [S("div", {
              className: "text-gray-500 text-sm",
              children: p.date.compareTo
            }), S(vE, {
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
const GP = ze(({ value: e, onDateChange: t, granularity: r, onOpenChange: n, minDate: a, maxDate: i, onClear: o, ...s }, u) => {
  const [c, l] = he(""), [f, d] = he(!1), p = Tr();
  Le(() => {
    l(r.toString(e?.value, p));
  }, [e, r, p]);
  const y = (g) => gE(g, r, {
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
  return S(dt, {
    children: S(yE, {
      ...s,
      icon: mE,
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
GP.displayName = "DateInput";
function _z({ onChange: e, value: t, presets: r = [], granularities: n = ["day"], minDate: a, maxDate: i, open: o = !1, ...s }) {
  const [u, c] = he(), [l, f] = he(o);
  Le(() => {
    f(o);
  }, [o]);
  const d = Tr(), p = He(() => n[0] ?? "day", [n]), y = tt((w) => {
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
  }, [l]), S(Az, {
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
    children: S(GP, {
      ref: m,
      ...s,
      value: u,
      granularity: v,
      onDateChange: g
    })
  });
}
const g7 = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => Xe.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => Xe.day.toRange(xo(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => Xe.day.toRange({
      from: xo(/* @__PURE__ */ new Date(), 7),
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
    value: () => Xe.week.toRange(xo(/* @__PURE__ */ new Date(), 7))
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
    value: () => Xe.year.toRange(rg(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => Xe.year.toRange(rg(/* @__PURE__ */ new Date(), 3))
  }
}, b7 = at(
  ki("F0DatePicker", _z)
);
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function Pz(e, t) {
  if ($i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tz(e) {
  var t = Pz(e, "string");
  return $i(t) == "symbol" ? t : t + "";
}
function Ji(e, t, r) {
  return (t = Tz(t)) in e ? Object.defineProperty(e, t, {
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
      Ji(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ez = {
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
}, YP = /* @__PURE__ */ Symbol("closestEdge");
function XP(e, t) {
  var r, n, a = t.element, i = t.input, o = t.allowedEdges, s = {
    x: i.clientX,
    y: i.clientY
  }, u = a.getBoundingClientRect(), c = o.map(function(f) {
    return {
      edge: f,
      value: Ez[f](u, s)
    };
  }), l = (r = (n = c.sort(function(f, d) {
    return f.value - d.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && r !== void 0 ? r : null;
  return Bw(Bw({}, e), {}, Ji({}, YP, l));
}
function Fw(e) {
  var t;
  return (t = e[YP]) !== null && t !== void 0 ? t : null;
}
function vu() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function() {
    t.forEach(function(a) {
      return a();
    });
  };
}
function Cz(e) {
  if (Array.isArray(e)) return e;
}
function jz(e, t) {
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
function ZP(e, t) {
  if (e) {
    if (typeof e == "string") return ch(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ch(e, t) : void 0;
  }
}
function Mz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JP(e, t) {
  return Cz(e) || jz(e, t) || ZP(e, t) || Mz();
}
var Cd = {}, ja = {}, zw;
function QP() {
  if (zw) return ja;
  zw = 1, Object.defineProperty(ja, "__esModule", { value: !0 }), ja.bind = void 0;
  function e(t, r) {
    var n = r.type, a = r.listener, i = r.options;
    return t.addEventListener(n, a, i), function() {
      t.removeEventListener(n, a, i);
    };
  }
  return ja.bind = e, ja;
}
var Lr = {}, Ww;
function $z() {
  if (Ww) return Lr;
  Ww = 1;
  var e = Lr && Lr.__assign || function() {
    return e = Object.assign || function(i) {
      for (var o, s = 1, u = arguments.length; s < u; s++) {
        o = arguments[s];
        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
      }
      return i;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.bindAll = void 0;
  var t = /* @__PURE__ */ QP();
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
  return Lr.bindAll = a, Lr;
}
var Uw;
function Iz() {
  return Uw || (Uw = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var t = /* @__PURE__ */ QP();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var r = /* @__PURE__ */ $z();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return r.bindAll;
    } });
  })(Cd)), Cd;
}
var na = /* @__PURE__ */ Iz(), eT = "data-pdnd-honey-pot";
function tT(e) {
  return e instanceof Element && e.hasAttribute(eT);
}
function rT(e) {
  var t = document.elementsFromPoint(e.x, e.y), r = JP(t, 2), n = r[0], a = r[1];
  return n ? tT(n) ? a ?? null : n : null;
}
var Dz = 2147483647;
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
      Ji(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ii = 2, Vw = Ii / 2;
function kz(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function Nz(e) {
  return {
    x: e.x - Vw,
    y: e.y - Vw
  };
}
function Rz(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function Lz(e) {
  return {
    x: Math.min(e.x, window.innerWidth - Ii),
    y: Math.min(e.y, window.innerHeight - Ii)
  };
}
function Gw(e) {
  var t = e.client, r = Lz(Rz(Nz(kz(t))));
  return DOMRect.fromRect({
    x: r.x,
    y: r.y,
    width: Ii,
    height: Ii
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
function qz(e) {
  var t = e.client, r = e.clientRect;
  return (
    // is within horizontal bounds
    t.x >= r.x && t.x <= r.x + r.width && // is within vertical bounds
    t.y >= r.y && t.y <= r.y + r.height
  );
}
function Bz(e) {
  var t = e.initial, r = document.createElement("div");
  r.setAttribute(eT, "true");
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
    zIndex: Dz
  })), document.body.appendChild(r);
  var a = na.bind(window, {
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
    if (a(), qz({
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
function Fz() {
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
        n = Bz({
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
function zz(e) {
  if (Array.isArray(e)) return ch(e);
}
function Wz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Uz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nT(e) {
  return zz(e) || Wz(e) || ZP(e) || Uz();
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
var Hz = ma(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), Gv = ma(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var t = navigator, r = t.userAgent;
  return r.includes("AppleWebKit") && !r.includes("Chrome");
}), lh = {
  isLeavingWindow: /* @__PURE__ */ Symbol("leaving"),
  isEnteringWindow: /* @__PURE__ */ Symbol("entering")
};
function Kz(e) {
  var t = e.dragLeave;
  return Gv() ? t.hasOwnProperty(lh.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !Gv())
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
function Vz(e) {
  return "nodeName" in e;
}
function Gz(e) {
  return Vz(e) && e.ownerDocument !== document;
}
function Yz(e) {
  var t = e.dragLeave, r = t.type, n = t.relatedTarget;
  return r !== "dragleave" ? !1 : Gv() ? Kz({
    dragLeave: t
  }) : n == null ? !0 : Hz() ? Gz(n) : n instanceof HTMLIFrameElement;
}
function Xz(e) {
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
var Zz = function(t) {
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
}, jd = Zz(function(e) {
  return e();
}), bo = /* @__PURE__ */ (function() {
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
function Jz(e) {
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
      }), bo.schedule(function() {
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
      bo.flush(), jd.cancel(), i({
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
      jd(function() {
        bo.flush();
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
      bo.flush(), jd.cancel(), i({
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
function aT() {
  return !fh.isActive;
}
function Qz(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function eW(e) {
  var t = e.current, r = e.next;
  if (t.length !== r.length)
    return !0;
  for (var n = 0; n < t.length; n++)
    if (t[n].element !== r[n].element)
      return !0;
  return !1;
}
function tW(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!aT())
    return;
  var i = rW({
    event: t,
    dragType: r,
    getDropTargetsOver: n
  });
  fh.isActive = !0;
  var o = {
    current: i
  };
  Md({
    event: t,
    current: i.dropTargets
  });
  var s = Jz({
    source: r.payload,
    dispatchEvent: a,
    initial: i
  });
  function u(p) {
    var y = eW({
      current: o.current.dropTargets,
      next: p.dropTargets
    });
    o.current = p, y && s.dragUpdate({
      current: o.current
    });
  }
  function c(p) {
    var y = Ka(p), h = tT(p.target) ? rT({
      x: y.clientX,
      y: y.clientY
    }) : p.target, v = n({
      target: h,
      input: y,
      source: r.payload,
      current: o.current.dropTargets
    });
    v.length && (p.preventDefault(), Md({
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
        Yz({
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
        y.preventDefault(), Md({
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
    }].concat(nT(Xz({
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
    nativeSetDragImage: Qz(t)
  });
}
function Md(e) {
  var t, r = e.event, n = e.current, a = (t = n[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  a != null && r.dataTransfer && (r.dataTransfer.dropEffect = a);
}
function rW(e) {
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
var Xw = {
  canStart: aT,
  start: tW
}, dh = /* @__PURE__ */ new Map();
function nW(e) {
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
function aW(e) {
  var t = nW(e);
  return function() {
    t.usageCount--, !(t.usageCount > 0) && (t.unmount(), dh.delete(e.typeKey));
  };
}
function iT(e, t) {
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
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zw(Object(r), !0).forEach(function(n) {
      Ji(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $d(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = iW(e)) || t) {
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
function iW(e, t) {
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
function Id(e) {
  return e.slice(0).reverse();
}
function oW(e) {
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
    var h = vu(iT(p.element, {
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
    var D = (y = (h = _.getData) === null || h === void 0 ? void 0 : h.call(_, P)) !== null && y !== void 0 ? y : {}, T = (v = (b = _.getDropEffect) === null || b === void 0 ? void 0 : b.call(_, P)) !== null && v !== void 0 ? v : r, $ = {
      data: D,
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
      result: [].concat(nT(w), [$])
    });
  }
  function c(p) {
    var y = p.eventName, h = p.payload, v = $d(h.location.current.dropTargets), b;
    try {
      for (v.s(); !(b = v.n()).done; ) {
        var g, x = b.value, O = n.get(x.element), m = gr(gr({}, h), {}, {
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
      })), b = /* @__PURE__ */ new Set(), g = $d(h.location.previous.dropTargets), x;
      try {
        for (g.s(); !(x = g.n()).done; ) {
          var O, m = x.value;
          b.add(m.element);
          var w = n.get(m.element), A = v.has(m.element), _ = gr(gr({}, h), {}, {
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
      var D = $d(h.location.current.dropTargets), T;
      try {
        for (D.s(); !(T = D.n()).done; ) {
          var $, M, j = T.value;
          if (!b.has(j.element)) {
            var I = gr(gr({}, h), {}, {
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
    for (var x = Id(b), O = Id(g), m = [], w = 0; w < x.length; w++) {
      var A, _ = x[w], P = O[w];
      if (P != null) {
        m.push(P);
        continue;
      }
      var D = m[w - 1], T = x[w - 1];
      if (D?.element !== T?.element)
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
      m.push(gr(gr({}, _), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return Id(m);
  }
  return {
    dropTargetForConsumers: s,
    getIsOver: d,
    dispatchEvent: f
  };
}
function sW(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = uW(e)) || t) {
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
function uW(e, t) {
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
function cW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eO(Object(r), !0).forEach(function(n) {
      Ji(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lW() {
  var e = /* @__PURE__ */ new Set(), t = null;
  function r(i) {
    t && (!i.canMonitor || i.canMonitor(t.canMonitorArgs)) && t.active.add(i);
  }
  function n(i) {
    var o = cW({}, i);
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
      var u = sW(e), c;
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
function fW(e) {
  var t = e.typeKey, r = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, i = e.defaultDropEffect, o = lW(), s = oW({
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
    return aW({
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
var dW = ma(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), pW = "pdnd:android-fallback", tO = "text/plain", hW = "text/uri-list", vW = "application/vnd.pdnd", Di = /* @__PURE__ */ new WeakMap();
function yW(e) {
  return Di.set(e.element, e), function() {
    Di.delete(e.element);
  };
}
var rO = Fz(), Yv = fW({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(t) {
    return vu(rO.bindEvents(), na.bind(document, {
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
          var f = Di.get(l);
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
            var y = rT({
              x: d.clientX,
              y: d.clientY
            });
            if (!f.dragHandle.contains(y))
              return n.preventDefault(), null;
          }
          var h = (i = (o = f.getInitialDataForExternal) === null || o === void 0 ? void 0 : o.call(f, p)) !== null && i !== void 0 ? i : null;
          if (h)
            for (var v = 0, b = Object.entries(h); v < b.length; v++) {
              var g = JP(b[v], 2), x = g[0], O = g[1];
              n.dataTransfer.setData(x, O ?? "");
            }
          dW() && !n.dataTransfer.types.includes(tO) && !n.dataTransfer.types.includes(hW) && n.dataTransfer.setData(tO, pW), n.dataTransfer.setData(vW, "");
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
    (r = Di.get(i.source.element)) === null || r === void 0 || (n = r[a]) === null || n === void 0 || n.call(
      r,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      i
    );
  },
  onPostDispatch: rO.getOnPostDispatch()
}), oT = Yv.dropTarget, mW = Yv.monitor;
function gW(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var t = Di.get(e.element);
    t && console.warn("You have already registered a `draggable` on the same element", {
      existing: t,
      proposed: e
    });
  }
  var r = vu(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    Yv.registerUsage(),
    yW(e),
    iT(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return ma(r);
}
function bW(e) {
  const t = /* @__PURE__ */ new Set();
  return vu(
    mW({
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
      } : gW({
        element: r,
        getInitialData: () => ({ ...n, instanceId: e }),
        dragHandle: i ?? void 0
      });
    },
    registerDroppable(r, { id: n }) {
      return oT({
        element: r,
        getData: ({ input: a, element: i }) => XP(
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
const sT = zt(null);
function Xv() {
  return pt(sT);
}
function xW({ driver: e, children: t }) {
  const r = Me(e), n = He(() => ({
    driver: r.current
  }), []);
  return S(sT.Provider, {
    value: n,
    children: t
  });
}
function wW(e) {
  const t = Xv(), { ref: r, payload: n, disabled: a, handleRef: i } = e, o = n.data, s = n.id + "|" + (o?.currentParentId ?? "null");
  Le(() => {
    if (r.current && !(!t || a))
      return t.driver.registerDraggable(r.current, {
        payload: n,
        disabled: a,
        handle: i?.current ?? null
      });
  }, [t, r, s, a, i, n]);
}
function x7(e) {
  const t = Xv(), r = e?.ref, n = e?.id, a = e?.accepts;
  Le(() => {
    if (r?.current && !(!t || !n || !a))
      return t.driver.registerDroppable(r.current, { id: n, accepts: a });
  }, [t, r, n, a]);
}
function OW(e) {
  const t = Xv();
  Le(
    () => t ? t.driver.subscribe(e) : void 0,
    [t, e]
  );
}
function SW({ otherActions: e, open: t, setOpen: r, disabled: n }) {
  return S(QO, {
    items: e.map((a) => "type" in a && a.type === "separator" ? a : {
      ...a,
      type: "item"
    }),
    open: t,
    onOpenChange: r,
    children: S(_r, {
      icon: OO,
      label: "Actions",
      hideLabel: !0,
      variant: "ghost",
      pressed: t,
      size: "sm",
      disabled: n
    })
  });
}
function AW({ item: e, counter: t, isActive: r, sortable: n, collapsible: a = !1, isExpanded: i = !1, onToggleExpanded: o = () => {
}, children: s, open: u, setOpen: c, isHovered: l, setIsHovered: f }) {
  const d = Tr(), { label: p, onClick: y, icon: h, disabled: v, otherActions: b } = e, x = b && b.length > 0 && (l || u), O = t && !x, m = n && (l || u);
  return K("div", {
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
      className: Q("text-f1-icon transition-all", !i && "-rotate-90"),
      icon: bE
    }), K("div", {
      className: Q(SO("focus:border-f1-border-focus"), "relative flex h-[36px] min-w-0 flex-grow items-center gap-1 rounded-[10px] border border-solid border-transparent px-1.5 text-sm transition-colors", r && "bg-f1-background-selected", y && !v && "cursor-pointer hover:bg-f1-background-hover", v && "cursor-not-allowed opacity-30"),
      "data-active": r || void 0,
      onClick: v ? void 0 : () => y?.(e.id),
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [(n || h) && S("div", {
        className: "absolute left-1.5 top-1/2 -translate-y-1/2",
        children: S(Na, {
          mode: "wait",
          children: m ? S(Kt.div, {
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
              children: S(ct, {
                icon: xE,
                size: "xs"
              })
            })
          }, "handle") : h && S(Kt.div, {
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
            children: S(ct, {
              icon: h,
              size: "md"
            })
          }, "icon")
        })
      }), S(on, {
        lines: 1,
        className: Q("flex-grow text-[14px] font-medium text-f1-foreground transition-all", m || h ? "pl-7" : "pl-0"),
        children: p
      }), S(Na, {
        children: (O || x) && S(Kt.div, {
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
            children: O ? S(Kt.div, {
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
              children: S(wE, {
                value: t
              })
            }, "counter") : x && S(Kt.div, {
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
              children: S(SW, {
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
  return wW({
    ref: g,
    payload: _,
    disabled: !o
  }), Le(() => {
    if (!(!g.current || !o))
      return oT({
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
          } : XP({
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
            O(null), w(!1), A.current = null;
            return;
          }
        },
        onDrag: ({ self: P, source: D }) => {
          if (D.data.id === e.id) {
            O(null), w(!1), A.current = null;
            return;
          }
          const $ = P.data, M = Fw(P.data);
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
          const D = P.data;
          let T = "after";
          D.position === "inside" ? T = "inside" : T = Fw(P.data) === "top" ? "before" : "after", O(null), w(!1), l && l(e.id, T);
        }
      });
  }, [e.id, o, f, u, c, l]), S(Kt.div, {
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
    children: S(AW, {
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
function _W({ item: e, children: t, isActive: r, isExpanded: n, onToggleExpanded: a, sortable: i, hideChildrenCounter: o, canDropInside: s = !1, onDragOver: u, onDragLeave: c, onDrop: l, currentParentId: f, draggedItemId: d }) {
  const p = OE();
  return K(SE, {
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
    }), S(AE, {
      forceMount: !0,
      className: "flex flex-col gap-1",
      children: S(Kt.div, {
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
function PW({ item: e, children: t, isActive: r, sortable: n, hideChildrenCounter: a, canDropInside: i = !1, onDragOver: o, onDragLeave: s, onDrop: u, currentParentId: c, draggedItemId: l }) {
  return K(dt, {
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
  return n ? S(_W, {
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
  }) : S(PW, {
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
function TW(e, t) {
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
function uT(e, t) {
  return e.map((r) => {
    if (r.id === t)
      return null;
    if (r.children) {
      const n = uT(r.children, t);
      return {
        ...r,
        children: n.length > 0 ? n : void 0
      };
    }
    return r;
  }).filter(Boolean);
}
function EW(e, t, r, n) {
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
function cT(e, t, r) {
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
function lT(e, t, r) {
  return e.map((n) => n.id === t ? r : n.children ? {
    ...n,
    children: lT(n.children, t, r)
  } : n);
}
function CW(e, t, r, n) {
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
function fT(e, t, r, n, a, i, o, s, u, c, l, f, d, p, y, h, v, b, g) {
  const x = e.children ? Ma : Va, O = o?.has(e.id) ?? !0, m = f === e.id, w = !!(l && l !== e.id && c && e.children !== void 0 && !cT(c, l, e.id)), A = !!(l && l !== e.id && m && d === "before"), _ = !!(l && l !== e.id && m && d === "after"), P = y === null ? c?.[0]?.id === e.id : !c || !y ? !1 : gt(c, y)?.item.children?.[0]?.id === e.id;
  return K(dt, {
    children: [S(Na, {
      children: A && S(Kt.div, {
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
        className: Q("flex flex-col", m && d === "inside" && w && "rounded-md bg-f1-background-hover/20 p-1"),
        children: [e.children.map((D) => fT(D, t, r + 1, n, a, i, o, s, u, c, l, f, d, t ? p : void 0, e.id, h, v, b, g)), m && d === "inside" && w && (!O || e.children.length === 0) && S("div", {
          className: "flex h-9 items-center justify-center rounded-md bg-f1-background-hover/30 text-xs text-f1-foreground-secondary",
          children: "Drop here"
        })]
      })
    }, e.id), S(Na, {
      children: _ && S(Kt.div, {
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
function jW({ title: e, items: t, className: r, activeItem: n, collapsible: a = !1, sortable: i = !1, showSearchBox: o = !1, searchPlaceholder: s, onReorder: u, hideChildrenCounter: c = !1, scrollable: l = !0 }) {
  const f = Tr(), [d, p] = he(""), y = (E) => {
    p(E);
  }, h = He(() => nO(t, d), [t, d]), [v, b] = he(TW(t, n)), [g, x] = he(t);
  Le(() => {
    x(t);
  }, [t]);
  const O = Me(null), m = tt((E) => {
    b((Y) => {
      const F = new Set(Y);
      return F.has(E) ? F.delete(E) : F.add(E), F;
    });
  }, [b]), w = tt((E, Y) => {
    const F = lT(g, E, Y);
    x(F), u && u(bn(F));
  }, [g, u]), A = tt((E) => (Y) => {
    const F = gt(g, E);
    if (F) {
      const ae = {
        ...F.item,
        children: Y
      };
      w(E, ae);
    } else
      E == null && (x(Y), u && u(bn(Y)));
  }, [g, w, u, bn]), _ = tt((E, Y, F) => {
    if (cT(g, E, Y))
      return;
    const ae = gt(g, E);
    if (!ae) return;
    const ce = ae.item;
    let oe = uT(g, E);
    const Se = CW(g, E, Y, F);
    oe = EW(oe, ce, Y, Se), x(oe), Y !== null && b((Te) => {
      const me = new Set(Te);
      return me.add(Y), me;
    }), u && u(bn(oe));
  }, [g, u, bn]), P = He(() => nO(g, d), [g, d]), [D, T] = he(null), [$, M] = he(null), [j, I] = he(null), [k, R] = he(null), L = Me(null), z = Me(!1), N = Me(null), B = Me(null), q = Me(null), H = Me(null), X = Me(null), te = Me(0), ne = Me(0), ee = Me(!1), J = Me(null), U = tt((E, Y) => {
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
        const tr = (i ? P : h)[0];
        me.itemId === tr?.id && me.position === "before" && (ee.current = !0);
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
      (oe !== Te || oe === Te && me !== Se) && (R(F), _(F, oe, Se), setTimeout(() => {
        R(null);
      }, 800));
    }
    ee.current = !1, L.current = null, z.current = !0, X.current = null, te.current = 0, ne.current = 0, J.current && (clearTimeout(J.current), J.current = null), T(null), setTimeout(() => {
      z.current = !1;
    }, 600);
  }, [g, _]);
  return OW(tt((E) => {
    if (E.phase === "start" && E.source.kind === "toc-item")
      q.current && (clearTimeout(q.current), q.current = null), J.current && (clearTimeout(J.current), J.current = null), L.current = E.source.id, z.current = !1, H.current = null, T(E.source.id);
    else if (E.phase === "cancel")
      ee.current = !1, z.current = !1, H.current = null, X.current = null, te.current = 0, ne.current = 0, q.current && (clearTimeout(q.current), q.current = null), J.current && (clearTimeout(J.current), J.current = null), M(null), I(null), N.current = null, B.current = null, T(null), L.current = null;
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
      }), J.current && (clearTimeout(J.current), J.current = null);
      const ae = setTimeout(() => {
        z.current || (H.current = null, X.current = null, te.current = 0, ne.current = 0, M(null), I(null), N.current = null, B.current = null, T(null), L.current = null), J.current === ae && (J.current = null);
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
        className: "mb-4",
        children: S(_E, {
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
    }), S(vh, {
      className: "h-full min-h-0",
      children: S("div", {
        className: "px-3 pb-2",
        children: S("div", {
          className: "flex flex-col gap-0.5",
          children: (i ? P : h).map((E) => fT(E, i, 0, n, a, c, v, m, _, g, D, $, j, i ? A : void 0, null, U, V, Z, k))
        })
      })
    })]
  });
}
function MW(e) {
  const t = Me(/* @__PURE__ */ Symbol("f0-table-of-contents")), r = He(() => bW(t.current), []);
  return S(xW, {
    driver: r,
    children: S(jW, {
      ...e
    })
  });
}
const w7 = ki("F0TableOfContent", MW), $W = ze(function({ bare: t = !1, ...r }, n) {
  return S("div", {
    ref: n,
    role: "separator",
    className: Q("-mx-4 h-[1px]", t ? void 0 : "my-4"),
    style: {
      backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
    },
    ...r
  });
}), IW = ({ text: e, isCompleted: t }) => K("div", {
  className: "flex flex-row items-center gap-2",
  children: [S(ct, {
    className: t ? "text-f1-icon-positive" : "text-f1-icon-secondary",
    icon: t ? Ps : wO,
    size: "md"
  }), S("span", {
    className: t ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
    children: e
  })]
}), DW = ({ title: e, items: t }) => K("div", {
  className: "px-4 pb-2",
  children: [S("div", {
    className: "mb-2 text-sm text-f1-foreground-secondary",
    children: e
  }), S("div", {
    className: "flex flex-col gap-2",
    children: t.map((r) => S(IW, {
      text: r.text,
      isCompleted: r.isCompleted ?? !1
    }, r.text))
  })]
}), kW = ({ onClose: e, success: t, successButtonOnClick: r, successButtonLabel: n, closeLabel: a }) => {
  const i = t && n && r, o = (s = !1) => K(dt, {
    children: [S(Yt, {
      variant: "outline",
      label: a,
      onClick: e,
      size: s ? "lg" : void 0
    }), i && S(Yt, {
      variant: "promote",
      label: n,
      onClick: () => {
        r(), e?.();
      },
      size: s ? "lg" : void 0
    })]
  });
  return K(KP, {
    className: "px-4 pb-4 pt-2 [&_div]:w-full",
    children: [S("div", {
      className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",
      children: o()
    }), S("div", {
      className: "flex flex-col-reverse gap-2 sm:hidden",
      children: o(!0)
    })]
  });
}, dT = ze(({ open: e, onClose: t, success: r = !0, errorMessage: n, successMessage: a, nextSteps: i, closeLabel: o, portalContainer: s }, u) => {
  const [c, l] = he(!1), f = tt(() => {
    l(!0), setTimeout(() => {
      t?.(), l(!1);
    }, 200);
  }, [t]);
  return S(PE, {
    open: e && !c,
    onOpenChange: (d) => !d && f?.(),
    children: K(TE, {
      ref: u,
      className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
      container: s,
      children: [K(VP, {
        className: `flex flex-col items-start gap-4 px-4 ${r ? "pt-5" : "py-5"}`,
        children: [S(zj, {
          type: r ? "positive" : "critical",
          size: "lg"
        }), K("div", {
          className: "flex flex-col gap-0.5",
          children: [S(EE, {
            className: "text-xl font-semibold sm:text-lg",
            children: r ? a?.title : n?.title
          }), S(HP, {
            className: "text-lg sm:text-base",
            children: r ? a?.description : n?.description
          })]
        })]
      }), r && i && i.items?.length > 0 ? K(dt, {
        children: [S($W, {}), S(DW, {
          title: i.title,
          items: i.items
        })]
      }) : null, S(kW, {
        onClose: f,
        success: r,
        successButtonLabel: a.buttonLabel,
        successButtonOnClick: a.buttonOnClick,
        closeLabel: o
      })]
    })
  });
});
dT.displayName = "UpsellRequestResponseDialog";
const NW = at(dT);
var RW = "Label", pT = fe.forwardRef((e, t) => /* @__PURE__ */ S(
  wh.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
pT.displayName = RW;
var hT = pT;
const LW = fe.forwardRef(({ className: e, ...t }, r) => S(hT, {
  ref: r,
  className: Q("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", e),
  ...t
}));
LW.displayName = hT.displayName;
function qW({ label: e, showIcon: t = !0, onRequest: r, showConfirmation: n = !0, loading: a, errorMessage: i, successMessage: o, loadingState: s, nextSteps: u, closeLabel: c, variant: l = "promote", onModalStateChange: f, portalContainer: d, ...p }) {
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
  return K(dt, {
    children: [S(Yt, {
      variant: l,
      label: m,
      icon: t ? CE : void 0,
      onClick: g,
      loading: O,
      ...p
    }), n && y && S(NW, {
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
const O7 = at(qW), BW = ze(function({ title: t, subtitle: r, mediaUrl: n, primaryAction: a, secondaryAction: i, onClose: o, isLoading: s = !1, children: u, variant: c = "default" }, l) {
  const f = n?.includes(".mp4"), [d, p] = he(!1), y = () => {
    o && o(), p(!0);
  };
  return s ? S(vT, {
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
        children: [a && S(Yt, {
          onClick: a.onClick,
          label: a.label,
          variant: a.variant || "default",
          size: "md",
          icon: a.icon
        }), i && S(Yt, {
          onClick: i.onClick,
          label: i.label,
          variant: i.variant || "outline",
          size: "md",
          icon: i.icon
        }), u]
      })]
    }), o && S("div", {
      className: "absolute right-2 top-2 z-10",
      children: S(Yt, {
        variant: "ghost",
        icon: PO,
        size: "sm",
        hideLabel: !0,
        onClick: y,
        label: "Close"
      })
    })]
  });
}), vT = ze(function(t, r) {
  return K("div", {
    ref: r,
    className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    ...t,
    children: [S("div", {
      className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      children: S(_t, {
        className: "h-full w-full rounded-lg"
      })
    }), K("div", {
      className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      children: [K("div", {
        className: "flex w-full flex-col gap-1 sm:max-w-lg",
        children: [S(_t, {
          className: "h-7 w-3/4"
        }), S(_t, {
          className: "h-4 w-full"
        }), S(_t, {
          className: "h-4 w-2/3"
        })]
      }), K("div", {
        className: "flex gap-3",
        children: [S(_t, {
          className: "h-9 w-32"
        }), S(_t, {
          className: "h-9 w-24"
        })]
      })]
    }), S("div", {
      className: "absolute right-2 top-2 z-10",
      children: S(_t, {
        className: "h-8 w-8 rounded-md"
      })
    })]
  });
}), FW = AO(BW, vT);
FW.displayName = "BaseBanner";
const yT = {
  get: () => ({}),
  set: () => Promise.resolve()
}, mT = zt(yT), S7 = ({ children: e, handler: t }) => S(mT.Provider, {
  value: t ?? yT,
  children: e
}), A7 = () => {
  const e = pt(mT);
  if (!e)
    throw new Error("useDataCollectionStorage must be used within a DataCollectionStorageProvider");
  return e;
};
export {
  $w as $,
  Ft as A,
  Ir as B,
  KW as C,
  QO as D,
  Ki as E,
  pa as F,
  Cr as G,
  Gi as H,
  du as I,
  Lv as J,
  Rv as K,
  VW as L,
  Ct as M,
  Bt as N,
  Nv as O,
  fu as P,
  TP as Q,
  n7 as R,
  w_ as S,
  a7 as T,
  i7 as U,
  o7 as V,
  s7 as W,
  yr as X,
  mr as Y,
  u7 as Z,
  w9 as _,
  Gh as a,
  XP as a$,
  sh as a0,
  A9 as a1,
  zj as a2,
  uh as a3,
  w7 as a4,
  LP as a5,
  NW as a6,
  zv as a7,
  Kv as a8,
  LW as a9,
  x7 as aA,
  t9 as aB,
  je as aC,
  Vi as aD,
  O3 as aE,
  VL as aF,
  NS as aG,
  tu as aH,
  Qs as aI,
  wL as aJ,
  l7 as aK,
  r2 as aL,
  YW as aM,
  JW as aN,
  QW as aO,
  HS as aP,
  Zh as aQ,
  XW as aR,
  f7 as aS,
  GW as aT,
  Ha as aU,
  Az as aV,
  A7 as aW,
  Wv as aX,
  Uv as aY,
  uz as aZ,
  oT as a_,
  Vv as aa,
  O7 as ab,
  FW as ac,
  r7 as ad,
  S7 as ae,
  HW as af,
  e7 as ag,
  e2 as ah,
  p7 as ai,
  h7 as aj,
  v7 as ak,
  b7 as al,
  g7 as am,
  m7 as an,
  jP as ao,
  Q9 as ap,
  DP as aq,
  nz as ar,
  zP as as,
  ez as at,
  tz as au,
  y7 as av,
  bW as aw,
  xW as ax,
  OW as ay,
  wW as az,
  pe as b,
  Fw as b0,
  pz as b1,
  mW as b2,
  d7 as b3,
  VP as b4,
  HP as b5,
  KP as b6,
  Hv as b7,
  P9 as b8,
  c7 as b9,
  $W as ba,
  ZW as bb,
  Y6 as bc,
  vr as bd,
  Va as be,
  Ma as bf,
  tn as c,
  Ke as d,
  wt as e,
  ie as f,
  Re as g,
  t7 as h,
  en as i,
  ue as j,
  Jr as k,
  le as l,
  Et as m,
  Fs as n,
  Go as o,
  lu as p,
  Yi as q,
  Dr as r,
  Pv as s,
  ha as t,
  un as u,
  qv as v,
  Zi as w,
  da as x,
  Xi as y,
  pu as z
};
