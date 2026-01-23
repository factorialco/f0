import { jsx as _, jsxs as K, Fragment as St } from "react/jsx-runtime";
import * as ue from "react";
import T, { useRef as Vt, useState as Te, useCallback as rr, useEffect as Ue, useContext as it, useMemo as Qe, useLayoutEffect as Yw, createContext as Lt, isValidElement as It, Children as zr, PureComponent as Et, forwardRef as De, useImperativeHandle as nE, cloneElement as Le, createElement as Xw, Component as Zw, useId as aE } from "react";
import { bg as Zv, be as iE, di as oE, B as On, aC as Jw, c as Z, aD as Qw, aw as sE, ax as uE, a as ms, dj as Vi, br as xe, D as cE, dk as lE, dl as fE, aI as eO, dm as dE, dn as pE, bJ as ih, dp as hE, F as vt, E as gs, aT as tO, b0 as oh, au as rO, dq as pn, dr as vE, ds as yE, dt as mE, du as Jv, dv as Qv, dw as ey, dx as ty, dy as ry, dz as nO, dA as fo, dB as gE, dC as bE, cp as Ba, dD as xE, cM as aO, cN as iO, cO as oO, q as sO, V as Qr, r as uO, s as cO, bO as sh, g as le, c9 as wE, bx as uh, by as ch, bz as lh, bC as fh, b3 as OE, b5 as dh, d4 as SE, cn as _E, ay as AE, av as PE, cv as Ei, u as Jn, aU as EE, bE as TE, L as Ut, a9 as lO, Y as CE, Z as fO, _ as jE, d9 as bs, dE as ME, O as Ti, aR as $E, aF as IE, aY as kE, aG as dO, a$ as NE, m as DE, z as ph, e as RE, a4 as LE, n as qE, bL as BE, S as xt, w as pO, dF as hO, y as FE, K as vO, t as zE, cR as $e, dG as yO, dH as mO, dI as Pd, dJ as WE, dK as ny, P as UE, l as HE, o as KE, dg as VE, aa as GE, d6 as YE, az as XE, dL as ZE, f as JE, G as QE, H as eT, J as tT, M as rT } from "./index-ljj7NkIC.js";
const nT = {
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
function aT(e, t) {
  const r = e.scrollSnapList();
  return typeof t == "number" ? r.map(() => t) : t(r, e);
}
function iT(e, t) {
  const r = e.rootNode();
  return t && t(r) || r;
}
function hh(e = {}) {
  let t, r, n, a, i = null, o = 0, s = !1, u = !1, c = !1, f = !1;
  function l(M, $) {
    r = M;
    const {
      mergeOptions: N,
      optionsAtMedia: R
    } = $, q = N(nT, hh.globalOptions), z = N(q, e);
    if (t = R(z), r.scrollSnapList().length <= 1) return;
    f = t.jump, n = !1, a = aT(r, t.delay);
    const {
      eventStore: D,
      ownerDocument: L
    } = r.internalEngine(), F = !!r.internalEngine().options.watchDrag, H = iT(r, t.rootNode);
    D.add(L, "visibilitychange", g), F && r.on("pointerDown", x), F && !t.stopOnInteraction && r.on("pointerUp", O), t.stopOnMouseEnter && D.add(H, "mouseenter", m), t.stopOnMouseEnter && !t.stopOnInteraction && D.add(H, "mouseleave", w), t.stopOnFocusIn && r.on("slideFocusStart", v), t.stopOnFocusIn && !t.stopOnInteraction && D.add(r.containerNode(), "focusout", h), t.playOnInit && h();
  }
  function d() {
    r.off("pointerDown", x).off("pointerUp", O).off("slideFocusStart", v), v(), n = !0, s = !1;
  }
  function p() {
    const {
      ownerWindow: M
    } = r.internalEngine();
    M.clearTimeout(o), o = M.setTimeout(E, a[r.selectedScrollSnap()]), i = (/* @__PURE__ */ new Date()).getTime(), r.emit("autoplay:timerset");
  }
  function y() {
    const {
      ownerWindow: M
    } = r.internalEngine();
    M.clearTimeout(o), o = 0, i = null, r.emit("autoplay:timerstopped");
  }
  function h() {
    if (!n) {
      if (b()) {
        c = !0;
        return;
      }
      s || r.emit("autoplay:play"), p(), s = !0;
    }
  }
  function v() {
    n || (s && r.emit("autoplay:stop"), y(), s = !1);
  }
  function g() {
    if (b())
      return c = s, v();
    c && h();
  }
  function b() {
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
  function S(M) {
    typeof M < "u" && (f = M), h();
  }
  function A() {
    s && v();
  }
  function P() {
    s && h();
  }
  function k() {
    return s;
  }
  function E() {
    const {
      index: M
    } = r.internalEngine(), $ = M.clone().add(1).get(), N = r.scrollSnapList().length - 1, R = t.stopOnLastSnap && $ === N;
    if (r.canScrollNext() ? r.scrollNext(f) : r.scrollTo(0, f), r.emit("autoplay:select"), R) return v();
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
    init: l,
    destroy: d,
    play: S,
    stop: A,
    reset: P,
    isPlaying: k,
    timeUntilNext: I
  };
}
hh.globalOptions = void 0;
function Wr() {
  return Wr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wr.apply(this, arguments);
}
var oT = 0.996, sT = function(t, r) {
  return r === void 0 && (r = oT), t * r / (1 - r);
};
function uT(e) {
  return e[e.length - 1];
}
function cT(e) {
  return e.reduce(function(t, r) {
    return t + r;
  }) / e.length;
}
var lT = function(t, r, n) {
  return Math.min(Math.max(r, t), n);
};
function fu(e, t) {
  if (e.length !== t.length)
    throw new Error("vectors must be same length");
  return e.map(function(r, n) {
    return r + t[n];
  });
}
function ay(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function Sn(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && Sn(t);
  }), e;
}
function fT() {
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
  return Sn({
    on: t,
    off: r,
    dispatch: n
  });
}
function dT(e) {
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
  return Sn({
    observe: r,
    unobserve: n,
    disconnect: a
  });
}
var pT = 16 * 1.125, hT = typeof window < "u" && window.innerHeight || 800, du = [1, pT, hT];
function vT(e) {
  var t = e.deltaX * du[e.deltaMode], r = e.deltaY * du[e.deltaMode], n = (e.deltaZ || 0) * du[e.deltaMode];
  return {
    timeStamp: e.timeStamp,
    axisDelta: [t, r, n]
  };
}
var yT = [-1, -1, -1];
function mT(e, t) {
  if (!t)
    return e;
  var r = t === !0 ? yT : t.map(function(n) {
    return n ? -1 : 1;
  });
  return Wr({}, e, {
    axisDelta: e.axisDelta.map(function(n, a) {
      return n * r[a];
    })
  });
}
var iy = 700, gT = function(t) {
  return Wr({}, t, {
    axisDelta: t.axisDelta.map(function(r) {
      return lT(r, -iy, iy);
    })
  });
}, pu = process.env.NODE_ENV !== "production", bT = 0.6, xT = 0.96, wT = 2, oy = 5, sy = /* @__PURE__ */ Sn({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), OT = 400;
function uy() {
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
    willEndTimeout: OT
  };
}
function ST(e) {
  e === void 0 && (e = {});
  var t = fT(), r = t.on, n = t.off, a = t.dispatch, i = sy, o = uy(), s, u = !1, c, f = function(M) {
    Array.isArray(M) ? M.forEach(function($) {
      return y($);
    }) : y(M);
  }, l = function(M) {
    return M === void 0 && (M = {}), Object.values(M).some(function($) {
      return $ == null;
    }) ? (pu && console.error("updateOptions ignored! undefined & null options not allowed"), i) : i = Sn(Wr({}, sy, i, M));
  }, d = function(M) {
    var $ = Wr({
      event: s,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: o.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: o.axisVelocity,
      axisMovement: o.axisMovement,
      get axisMovementProjection() {
        return fu($.axisMovement, $.axisVelocity.map(function(N) {
          return sT(N);
        }));
      }
    }, M);
    a("wheel", Wr({}, $, {
      previous: c
    })), c = $;
  }, p = function(M, $) {
    var N = i, R = N.preventWheelAction, q = $[0], z = $[1], D = $[2];
    if (typeof R == "boolean") return R;
    switch (R) {
      case "x":
        return Math.abs(q) >= M;
      case "y":
        return Math.abs(z) >= M;
      case "z":
        return Math.abs(D) >= M;
      default:
        return pu && console.warn("unsupported preventWheelAction value: " + R, "warn"), !1;
    }
  }, y = function(M) {
    var $ = gT(mT(vT(M), i.reverseSign)), N = $.axisDelta, R = $.timeStamp, q = ay(N);
    if (M.preventDefault && p(q, N) && M.preventDefault(), o.isStarted ? o.isMomentum && q > Math.max(2, o.lastAbsDelta * 2) && (A(!0), w()) : w(), q === 0 && Object.is && Object.is(M.deltaX, -0)) {
      u = !0;
      return;
    }
    s = M, o.axisMovement = fu(o.axisMovement, N), o.lastAbsDelta = q, o.scrollPointsToMerge.push({
      axisDelta: N,
      timeStamp: R
    }), h(), d({
      axisDelta: N,
      isStart: !o.isStartPublished
    }), o.isStartPublished = !0, S();
  }, h = function() {
    o.scrollPointsToMerge.length === wT ? (o.scrollPoints.unshift({
      axisDeltaSum: o.scrollPointsToMerge.map(function(M) {
        return M.axisDelta;
      }).reduce(fu),
      timeStamp: cT(o.scrollPointsToMerge.map(function(M) {
        return M.timeStamp;
      }))
    }), g(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || O()) : o.isStartPublished || v();
  }, v = function() {
    o.axisVelocity = uT(o.scrollPointsToMerge).axisDelta.map(function(M) {
      return M / o.willEndTimeout;
    });
  }, g = function() {
    var M = o.scrollPoints, $ = M[0], N = M[1];
    if (!(!N || !$)) {
      var R = $.timeStamp - N.timeStamp;
      if (R <= 0) {
        pu && console.warn("invalid deltaTime");
        return;
      }
      var q = $.axisDeltaSum.map(function(D) {
        return D / R;
      }), z = q.map(function(D, L) {
        return D / (o.axisVelocity[L] || 1);
      });
      o.axisVelocity = q, o.accelerationFactors.push(z), b(R);
    }
  }, b = function(M) {
    var $ = Math.ceil(M / 10) * 10 * 1.2;
    o.isMomentum || ($ = Math.max(100, $ * 2)), o.willEndTimeout = Math.min(1e3, Math.round($));
  }, x = function(M) {
    return M === 0 ? !0 : M <= xT && M >= bT;
  }, O = function() {
    if (o.accelerationFactors.length >= oy) {
      if (u && (u = !1, ay(o.axisVelocity) >= 0.2)) {
        m();
        return;
      }
      var M = o.accelerationFactors.slice(oy * -1), $ = M.every(function(N) {
        var R = !!N.reduce(function(z, D) {
          return z && z < 1 && z === D ? 1 : 0;
        }), q = N.filter(x).length === N.length;
        return R || q;
      });
      $ && m(), o.accelerationFactors = M;
    }
  }, m = function() {
    o.isMomentum = !0;
  }, w = function() {
    o = uy(), o.isStarted = !0, o.startTime = Date.now(), c = void 0, u = !1;
  }, S = /* @__PURE__ */ (function() {
    var C;
    return function() {
      clearTimeout(C), C = setTimeout(A, o.willEndTimeout);
    };
  })(), A = function(M) {
    M === void 0 && (M = !1), o.isStarted && (o.isMomentum && M ? d({
      isEnding: !0,
      isMomentumCancel: !0
    }) : d({
      isEnding: !0
    }), o.isMomentum = !1, o.isStarted = !1);
  }, P = dT(f), k = P.observe, E = P.unobserve, I = P.disconnect;
  return l(e), Sn({
    on: r,
    off: n,
    observe: k,
    unobserve: E,
    disconnect: I,
    feedWheel: f,
    updateOptions: l
  });
}
var _T = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
vh.globalOptions = void 0;
var AT = process.env.NODE_ENV !== "production";
function vh(e) {
  e === void 0 && (e = {});
  var t, r = function() {
  };
  function n(i, o) {
    var s, u, c = o.mergeOptions, f = o.optionsAtMedia, l = c(_T, vh.globalOptions), d = c(l, e);
    t = f(d);
    var p = i.internalEngine(), y = (s = t.target) != null ? s : i.containerNode().parentNode, h = (u = t.forceWheelAxis) != null ? u : p.options.axis, v = ST({
      preventWheelAction: h,
      reverseSign: [!0, !0, !1]
    }), g = v.observe(y), b = v.on("wheel", I), x = !1, O;
    function m(C) {
      try {
        O = new MouseEvent("mousedown", C.event), E(O);
      } catch {
        return AT && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), r();
      }
      x = !0, S(), t.wheelDraggingClass && y.classList.add(t.wheelDraggingClass);
    }
    function w(C) {
      x = !1, E(k("mouseup", C)), A(), t.wheelDraggingClass && y.classList.remove(t.wheelDraggingClass);
    }
    function S() {
      document.documentElement.addEventListener("mousemove", P, !0), document.documentElement.addEventListener("mouseup", P, !0), document.documentElement.addEventListener("mousedown", P, !0);
    }
    function A() {
      document.documentElement.removeEventListener("mousemove", P, !0), document.documentElement.removeEventListener("mouseup", P, !0), document.documentElement.removeEventListener("mousedown", P, !0);
    }
    function P(C) {
      x && C.isTrusted && C.stopImmediatePropagation();
    }
    function k(C, M) {
      var $, N;
      if (h === p.options.axis) {
        var R = M.axisMovement;
        $ = R[0], N = R[1];
      } else {
        var q = M.axisMovement;
        N = q[0], $ = q[1];
      }
      if (!p.options.skipSnaps && !p.options.dragFree) {
        var z = p.containerRect.width, D = p.containerRect.height;
        $ = $ < 0 ? Math.max($, -z) : Math.min($, z), N = N < 0 ? Math.max(N, -D) : Math.min(N, D);
      }
      return new MouseEvent(C, {
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
    function E(C) {
      i.containerNode().dispatchEvent(C);
    }
    function I(C) {
      var M = C.axisDelta, $ = M[0], N = M[1], R = h === "x" ? $ : N, q = h === "x" ? N : $, z = C.isMomentum && C.previous && !C.previous.isMomentum, D = C.isEnding && !C.isMomentum || z, L = Math.abs(R) > Math.abs(q);
      L && !x && !C.isMomentum && m(C), x && (D ? w(C) : E(k("mousemove", C)));
    }
    r = function() {
      g(), b(), A();
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
function PT(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function cy(e) {
  return PT(e) || Array.isArray(e);
}
function ET() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function yh(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== i ? !1 : r.every((o) => {
    const s = e[o], u = t[o];
    return typeof s == "function" ? `${s}` == `${u}` : !cy(s) || !cy(u) ? s === u : yh(s, u);
  });
}
function ly(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function TT(e, t) {
  if (e.length !== t.length) return !1;
  const r = ly(e), n = ly(t);
  return r.every((a, i) => {
    const o = n[i];
    return yh(a, o);
  });
}
function mh(e) {
  return typeof e == "number";
}
function Ed(e) {
  return typeof e == "string";
}
function xs(e) {
  return typeof e == "boolean";
}
function fy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ce(e) {
  return Math.abs(e);
}
function gh(e) {
  return Math.sign(e);
}
function ja(e, t) {
  return Ce(e - t);
}
function CT(e, t) {
  if (e === 0 || t === 0 || Ce(e) <= Ce(t)) return 0;
  const r = ja(Ce(e), Ce(t));
  return Ce(r / e);
}
function jT(e) {
  return Math.round(e * 100) / 100;
}
function Fa(e) {
  return za(e).map(Number);
}
function kt(e) {
  return e[Ci(e)];
}
function Ci(e) {
  return Math.max(0, e.length - 1);
}
function bh(e, t) {
  return t === Ci(e);
}
function dy(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function za(e) {
  return Object.keys(e);
}
function gO(e, t) {
  return [e, t].reduce((r, n) => (za(n).forEach((a) => {
    const i = r[a], o = n[a], s = fy(i) && fy(o);
    r[a] = s ? gO(i, o) : o;
  }), r), {});
}
function Td(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function MT(e, t) {
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
    return Ed(e) ? r[e](u) : e(t, u, c);
  }
  return {
    measure: o
  };
}
function Wa() {
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
function $T(e, t, r, n) {
  const a = Wa(), i = 1e3 / 60;
  let o = null, s = 0, u = 0;
  function c() {
    a.add(e, "visibilitychange", () => {
      e.hidden && y();
    });
  }
  function f() {
    p(), a.clear();
  }
  function l(v) {
    if (!u) return;
    o || (o = v, r(), r());
    const g = v - o;
    for (o = v, s += g; s >= i; )
      r(), s -= i;
    const b = s / i;
    n(b), u && (u = t.requestAnimationFrame(l));
  }
  function d() {
    u || (u = t.requestAnimationFrame(l));
  }
  function p() {
    t.cancelAnimationFrame(u), o = null, s = 0, u = 0;
  }
  function y() {
    o = null, s = 0;
  }
  return {
    init: c,
    destroy: f,
    start: d,
    stop: p,
    update: r,
    render: n
  };
}
function IT(e, t) {
  const r = t === "rtl", n = e === "y", a = n ? "y" : "x", i = n ? "x" : "y", o = !n && r ? -1 : 1, s = f(), u = l();
  function c(y) {
    const {
      height: h,
      width: v
    } = y;
    return n ? h : v;
  }
  function f() {
    return n ? "top" : r ? "right" : "left";
  }
  function l() {
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
function Gr(e = 0, t = 0) {
  const r = Ce(e - t);
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
function bO(e, t, r) {
  const {
    constrain: n
  } = Gr(0, e), a = e + 1;
  let i = o(t);
  function o(d) {
    return r ? Ce((a + d) % a) : n(d);
  }
  function s() {
    return i;
  }
  function u(d) {
    return i = o(d), l;
  }
  function c(d) {
    return f().set(s() + d);
  }
  function f() {
    return bO(e, s(), r);
  }
  const l = {
    get: s,
    set: u,
    add: c,
    clone: f
  };
  return l;
}
function kT(e, t, r, n, a, i, o, s, u, c, f, l, d, p, y, h, v, g, b) {
  const {
    cross: x,
    direction: O
  } = e, m = ["INPUT", "SELECT", "TEXTAREA"], w = {
    passive: !1
  }, S = Wa(), A = Wa(), P = Gr(50, 225).constrain(p.measure(20)), k = {
    mouse: 300,
    touch: 400
  }, E = {
    mouse: 500,
    touch: 600
  }, I = y ? 43 : 25;
  let C = !1, M = 0, $ = 0, N = !1, R = !1, q = !1, z = !1;
  function D(j) {
    if (!b) return;
    function ee(ce) {
      (xs(b) || b(j, ce)) && ne(ce);
    }
    const U = t;
    S.add(U, "dragstart", (ce) => ce.preventDefault(), w).add(U, "touchmove", () => {
    }, w).add(U, "touchend", () => {
    }).add(U, "touchstart", ee).add(U, "mousedown", ee).add(U, "touchcancel", Q).add(U, "contextmenu", Q).add(U, "click", W, !0);
  }
  function L() {
    S.clear(), A.clear();
  }
  function F() {
    const j = z ? r : t;
    A.add(j, "touchmove", re, w).add(j, "touchend", Q).add(j, "mousemove", re, w).add(j, "mouseup", Q);
  }
  function H(j) {
    const ee = j.nodeName || "";
    return m.includes(ee);
  }
  function X() {
    return (y ? E : k)[z ? "mouse" : "touch"];
  }
  function te(j, ee) {
    const U = l.add(gh(j) * -1), ce = f.byDistance(j, !y).distance;
    return y || Ce(j) < P ? ce : v && ee ? ce * 0.5 : f.byIndex(U.get(), 0).distance;
  }
  function ne(j) {
    const ee = Td(j, n);
    z = ee, q = y && ee && !j.buttons && C, C = ja(a.get(), o.get()) >= 2, !(ee && j.button !== 0) && (H(j.target) || (N = !0, i.pointerDown(j), c.useFriction(0).useDuration(0), a.set(o), F(), M = i.readPoint(j), $ = i.readPoint(j, x), d.emit("pointerDown")));
  }
  function re(j) {
    if (!Td(j, n) && j.touches.length >= 2) return Q(j);
    const U = i.readPoint(j), ce = i.readPoint(j, x), de = ja(U, M), we = ja(ce, $);
    if (!R && !z && (!j.cancelable || (R = de > we, !R)))
      return Q(j);
    const Ge = i.pointerMove(j);
    de > h && (q = !0), c.useFriction(0.3).useDuration(0.75), s.start(), a.add(O(Ge)), j.preventDefault();
  }
  function Q(j) {
    const U = f.byDistance(0, !1).index !== l.get(), ce = i.pointerUp(j) * X(), de = te(O(ce), U), we = CT(ce, de), Ge = I - 10 * we, Ze = g + we / 50;
    R = !1, N = !1, A.clear(), c.useDuration(Ge).useFriction(Ze), u.distance(de, !y), z = !1, d.emit("pointerUp");
  }
  function W(j) {
    q && (j.stopPropagation(), j.preventDefault(), q = !1);
  }
  function G() {
    return N;
  }
  return {
    init: D,
    destroy: L,
    pointerDown: G
  };
}
function NT(e, t) {
  let n, a;
  function i(l) {
    return l.timeStamp;
  }
  function o(l, d) {
    const y = `client${(d || e.scroll) === "x" ? "X" : "Y"}`;
    return (Td(l, t) ? l : l.touches[0])[y];
  }
  function s(l) {
    return n = l, a = l, o(l);
  }
  function u(l) {
    const d = o(l) - o(a), p = i(l) - i(n) > 170;
    return a = l, p && (n = l), d;
  }
  function c(l) {
    if (!n || !a) return 0;
    const d = o(a) - o(n), p = i(l) - i(n), y = i(l) - i(a) > 170, h = d / p;
    return p && !y && Ce(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: s,
    pointerMove: u,
    pointerUp: c,
    readPoint: o
  };
}
function DT() {
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
function RT(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function LT(e, t, r, n, a, i, o) {
  const s = [e].concat(n);
  let u, c, f = [], l = !1;
  function d(v) {
    return a.measureSize(o.measure(v));
  }
  function p(v) {
    if (!i) return;
    c = d(e), f = n.map(d);
    function g(b) {
      for (const x of b) {
        if (l) return;
        const O = x.target === e, m = n.indexOf(x.target), w = O ? c : f[m], S = d(O ? e : n[m]);
        if (Ce(S - w) >= 0.5) {
          v.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((b) => {
      (xs(i) || i(v, b)) && g(b);
    }), r.requestAnimationFrame(() => {
      s.forEach((b) => u.observe(b));
    });
  }
  function y() {
    l = !0, u && u.disconnect();
  }
  return {
    init: p,
    destroy: y
  };
}
function qT(e, t, r, n, a, i) {
  let o = 0, s = 0, u = a, c = i, f = e.get(), l = 0;
  function d() {
    const w = n.get() - e.get(), S = !u;
    let A = 0;
    return S ? (o = 0, r.set(n), e.set(n), A = w) : (r.set(e), o += w / u, o *= c, f += o, e.add(o), A = f - l), s = gh(A), l = f, m;
  }
  function p() {
    const w = n.get() - t.get();
    return Ce(w) < 1e-3;
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
  function g() {
    return x(a);
  }
  function b() {
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
    useBaseFriction: b,
    useBaseDuration: g,
    useFriction: O,
    useDuration: x
  };
  return m;
}
function BT(e, t, r, n, a) {
  const i = a.measure(10), o = a.measure(50), s = Gr(0.1, 0.99);
  let u = !1;
  function c() {
    return !(u || !e.reachedAny(r.get()) || !e.reachedAny(t.get()));
  }
  function f(p) {
    if (!c()) return;
    const y = e.reachedMin(t.get()) ? "min" : "max", h = Ce(e[y] - t.get()), v = r.get() - t.get(), g = s.constrain(h / o);
    r.subtract(v * g), !p && Ce(v) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction());
  }
  function l(p) {
    u = !p;
  }
  return {
    shouldConstrain: c,
    constrain: f,
    toggleActive: l
  };
}
function FT(e, t, r, n, a) {
  const i = Gr(-t + e, 0), o = l(), s = f(), u = d();
  function c(y, h) {
    return ja(y, h) <= 1;
  }
  function f() {
    const y = o[0], h = kt(o), v = o.lastIndexOf(y), g = o.indexOf(h) + 1;
    return Gr(v, g);
  }
  function l() {
    return r.map((y, h) => {
      const {
        min: v,
        max: g
      } = i, b = i.constrain(y), x = !h, O = bh(r, h);
      return x ? g : O || c(v, b) ? v : c(g, b) ? g : b;
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
function zT(e, t, r) {
  const n = t[0], a = r ? n - e : kt(t);
  return {
    limit: Gr(a, n)
  };
}
function WT(e, t, r, n) {
  const i = t.min + 0.1, o = t.max + 0.1, {
    reachedMin: s,
    reachedMax: u
  } = Gr(i, o);
  function c(d) {
    return d === 1 ? u(r.get()) : d === -1 ? s(r.get()) : !1;
  }
  function f(d) {
    if (!c(d)) return;
    const p = e * (d * -1);
    n.forEach((y) => y.add(p));
  }
  return {
    loop: f
  };
}
function UT(e) {
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
function HT(e, t, r, n, a) {
  const {
    startEdge: i,
    endEdge: o
  } = e, {
    groupSlides: s
  } = a, u = l().map(t.measure), c = d(), f = p();
  function l() {
    return s(n).map((h) => kt(h)[o] - h[0][i]).map(Ce);
  }
  function d() {
    return n.map((h) => r[i] - h[i]).map((h) => -Ce(h));
  }
  function p() {
    return s(c).map((h) => h[0]).map((h, v) => h + u[v]);
  }
  return {
    snaps: c,
    snapsAligned: f
  };
}
function KT(e, t, r, n, a, i) {
  const {
    groupSlides: o
  } = a, {
    min: s,
    max: u
  } = n, c = f();
  function f() {
    const d = o(i), p = !e || t === "keepSnaps";
    return r.length === 1 ? [i] : p ? d : d.slice(s, u).map((y, h, v) => {
      const g = !h, b = bh(v, h);
      if (g) {
        const x = kt(v[0]) + 1;
        return dy(x);
      }
      if (b) {
        const x = Ci(i) - kt(v)[0] + 1;
        return dy(x, kt(v)[0]);
      }
      return y;
    });
  }
  return {
    slideRegistry: c
  };
}
function VT(e, t, r, n, a) {
  const {
    reachedAny: i,
    removeOffset: o,
    constrain: s
  } = n;
  function u(y) {
    return y.concat().sort((h, v) => Ce(h) - Ce(v))[0];
  }
  function c(y) {
    const h = e ? o(y) : s(y), v = t.map((b, x) => ({
      diff: f(b - h, 0),
      index: x
    })).sort((b, x) => Ce(b.diff) - Ce(x.diff)), {
      index: g
    } = v[0];
    return {
      index: g,
      distance: h
    };
  }
  function f(y, h) {
    const v = [y, y + r, y - r];
    if (!e) return y;
    if (!h) return u(v);
    const g = v.filter((b) => gh(b) === h);
    return g.length ? u(g) : kt(v) - r;
  }
  function l(y, h) {
    const v = t[y] - a.get(), g = f(v, h);
    return {
      index: y,
      distance: g
    };
  }
  function d(y, h) {
    const v = a.get() + y, {
      index: g,
      distance: b
    } = c(v), x = !e && i(v);
    if (!h || x) return {
      index: g,
      distance: y
    };
    const O = t[g] - b, m = y + f(O, 0);
    return {
      index: g,
      distance: m
    };
  }
  return {
    byDistance: d,
    byIndex: l,
    shortcut: f
  };
}
function GT(e, t, r, n, a, i, o) {
  function s(l) {
    const d = l.distance, p = l.index !== t.get();
    i.add(d), d && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), p && (r.set(t.get()), t.set(l.index), o.emit("select"));
  }
  function u(l, d) {
    const p = a.byDistance(l, d);
    s(p);
  }
  function c(l, d) {
    const p = t.clone().set(l), y = a.byIndex(p.get(), d);
    s(y);
  }
  return {
    distance: u,
    index: c
  };
}
function YT(e, t, r, n, a, i, o, s) {
  const u = {
    passive: !0,
    capture: !0
  };
  let c = 0;
  function f(p) {
    if (!s) return;
    function y(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - c > 10) return;
      o.emit("slideFocusStart"), e.scrollLeft = 0;
      const b = r.findIndex((x) => x.includes(h));
      mh(b) && (a.useDuration(0), n.index(b, 0), o.emit("slideFocus"));
    }
    i.add(document, "keydown", l, !1), t.forEach((h, v) => {
      i.add(h, "focus", (g) => {
        (xs(s) || s(p, g)) && y(v);
      }, u);
    });
  }
  function l(p) {
    p.code === "Tab" && (c = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: f
  };
}
function Pa(e) {
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
    return mh(u) ? u : u.get();
  }
  return {
    get: r,
    set: n,
    add: a,
    subtract: i
  };
}
function xO(e, t) {
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
    const p = jT(e.direction(d));
    p !== a && (n.transform = r(p), a = p);
  }
  function c(d) {
    i = !d;
  }
  function f() {
    i || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: f,
    to: u,
    toggleActive: c
  };
}
function XT(e, t, r, n, a, i, o, s, u) {
  const f = Fa(a), l = Fa(a).reverse(), d = g().concat(b());
  function p(S, A) {
    return S.reduce((P, k) => P - a[k], A);
  }
  function y(S, A) {
    return S.reduce((P, k) => p(P, A) > 0 ? P.concat([k]) : P, []);
  }
  function h(S) {
    return i.map((A, P) => ({
      start: A - n[P] + 0.5 + S,
      end: A + t - 0.5 + S
    }));
  }
  function v(S, A, P) {
    const k = h(A);
    return S.map((E) => {
      const I = P ? 0 : -r, C = P ? r : 0, M = P ? "end" : "start", $ = k[E][M];
      return {
        index: E,
        loopPoint: $,
        slideLocation: Pa(-1),
        translate: xO(e, u[E]),
        target: () => s.get() > $ ? I : C
      };
    });
  }
  function g() {
    const S = o[0], A = y(l, S);
    return v(A, r, !1);
  }
  function b() {
    const S = t - o[0] - 1, A = y(f, S);
    return v(A, -r, !0);
  }
  function x() {
    return d.every(({
      index: S
    }) => {
      const A = f.filter((P) => P !== S);
      return p(A, t) <= 0.1;
    });
  }
  function O() {
    d.forEach((S) => {
      const {
        target: A,
        translate: P,
        slideLocation: k
      } = S, E = A();
      E !== k.get() && (P.to(E), k.set(E));
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
function ZT(e, t, r) {
  let n, a = !1;
  function i(u) {
    if (!r) return;
    function c(f) {
      for (const l of f)
        if (l.type === "childList") {
          u.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    n = new MutationObserver((f) => {
      a || (xs(r) || r(u, f)) && c(f);
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
function JT(e, t, r, n) {
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
  function f() {
    s && s.disconnect(), u = !0;
  }
  function l(y) {
    return za(a).reduce((h, v) => {
      const g = parseInt(v), {
        isIntersecting: b
      } = a[g];
      return (y && b || !y && !b) && h.push(g), h;
    }, []);
  }
  function d(y = !0) {
    if (y && i) return i;
    if (!y && o) return o;
    const h = l(y);
    return y && (i = h), y || (o = h), h;
  }
  return {
    init: c,
    destroy: f,
    get: d
  };
}
function QT(e, t, r, n, a, i) {
  const {
    measureSize: o,
    startEdge: s,
    endEdge: u
  } = e, c = r[0] && a, f = y(), l = h(), d = r.map(o), p = v();
  function y() {
    if (!c) return 0;
    const b = r[0];
    return Ce(t[s] - b[s]);
  }
  function h() {
    if (!c) return 0;
    const b = i.getComputedStyle(kt(n));
    return parseFloat(b.getPropertyValue(`margin-${u}`));
  }
  function v() {
    return r.map((b, x, O) => {
      const m = !x, w = bh(O, x);
      return m ? d[x] + f : w ? d[x] + l : O[x + 1][s] - b[s];
    }).map(Ce);
  }
  return {
    slideSizes: d,
    slideSizesWithGaps: p,
    startGap: f,
    endGap: l
  };
}
function eC(e, t, r, n, a, i, o, s, u) {
  const {
    startEdge: c,
    endEdge: f,
    direction: l
  } = e, d = mh(r);
  function p(g, b) {
    return Fa(g).filter((x) => x % b === 0).map((x) => g.slice(x, x + b));
  }
  function y(g) {
    return g.length ? Fa(g).reduce((b, x, O) => {
      const m = kt(b) || 0, w = m === 0, S = x === Ci(g), A = a[c] - i[m][c], P = a[c] - i[x][f], k = !n && w ? l(o) : 0, E = !n && S ? l(s) : 0, I = Ce(P - E - (A + k));
      return O && I > t + u && b.push(x), S && b.push(g.length), b;
    }, []).map((b, x, O) => {
      const m = Math.max(O[x - 1] || 0);
      return g.slice(m, b);
    }) : [];
  }
  function h(g) {
    return d ? p(g, r) : y(g);
  }
  return {
    groupSlides: h
  };
}
function tC(e, t, r, n, a, i, o) {
  const {
    align: s,
    axis: u,
    direction: c,
    startIndex: f,
    loop: l,
    duration: d,
    dragFree: p,
    dragThreshold: y,
    inViewThreshold: h,
    slidesToScroll: v,
    skipSnaps: g,
    containScroll: b,
    watchResize: x,
    watchSlides: O,
    watchDrag: m,
    watchFocus: w
  } = i, S = 2, A = DT(), P = A.measure(t), k = r.map(A.measure), E = IT(u, c), I = E.measureSize(P), C = RT(I), M = MT(s, I), $ = !l && !!b, N = l || !!b, {
    slideSizes: R,
    slideSizesWithGaps: q,
    startGap: z,
    endGap: D
  } = QT(E, P, k, r, N, a), L = eC(E, I, v, l, P, k, z, D, S), {
    snaps: F,
    snapsAligned: H
  } = HT(E, M, P, k, L), X = -kt(F) + kt(q), {
    snapsContained: te,
    scrollContainLimit: ne
  } = FT(I, X, H, b, S), re = $ ? te : H, {
    limit: Q
  } = zT(X, re, l), W = bO(Ci(re), f, l), G = W.clone(), Y = Fa(r), j = ({
    dragHandler: un,
    scrollBody: cu,
    scrollBounds: lu,
    options: {
      loop: Ki
    }
  }) => {
    Ki || lu.constrain(un.pointerDown()), cu.seek();
  }, ee = ({
    scrollBody: un,
    translate: cu,
    location: lu,
    offsetLocation: Ki,
    previousLocation: YP,
    scrollLooper: XP,
    slideLooper: ZP,
    dragHandler: JP,
    animation: QP,
    eventHandler: Hv,
    scrollBounds: eE,
    options: {
      loop: Kv
    }
  }, Vv) => {
    const Gv = un.settled(), tE = !eE.shouldConstrain(), Yv = Kv ? Gv : Gv && tE, Xv = Yv && !JP.pointerDown();
    Xv && QP.stop();
    const rE = lu.get() * Vv + YP.get() * (1 - Vv);
    Ki.set(rE), Kv && (XP.loop(un.direction()), ZP.loop()), cu.to(Ki.get()), Xv && Hv.emit("settle"), Yv || Hv.emit("scroll");
  }, U = $T(n, a, () => j(uu), (un) => ee(uu, un)), ce = 0.68, de = re[W.get()], we = Pa(de), Ge = Pa(de), Ze = Pa(de), yt = Pa(de), st = qT(we, Ze, Ge, yt, d, ce), ut = VT(l, re, X, Q, yt), Cr = GT(U, W, G, st, ut, yt, o), on = UT(Q), sn = Wa(), Hi = JT(t, r, o, h), {
    slideRegistry: pa
  } = KT($, b, re, ne, L, Y), GP = YT(e, r, pa, Cr, st, sn, o, w), uu = {
    ownerDocument: n,
    ownerWindow: a,
    eventHandler: o,
    containerRect: P,
    slideRects: k,
    animation: U,
    axis: E,
    dragHandler: kT(E, e, n, a, yt, NT(E, a), we, U, Cr, st, ut, W, o, C, p, y, g, ce, m),
    eventStore: sn,
    percentOfView: C,
    index: W,
    indexPrevious: G,
    limit: Q,
    location: we,
    offsetLocation: Ze,
    previousLocation: Ge,
    options: i,
    resizeHandler: LT(t, o, a, r, E, x, A),
    scrollBody: st,
    scrollBounds: BT(Q, Ze, yt, st, C),
    scrollLooper: WT(X, Q, Ze, [we, Ze, Ge, yt]),
    scrollProgress: on,
    scrollSnapList: re.map(on.get),
    scrollSnaps: re,
    scrollTarget: ut,
    scrollTo: Cr,
    slideLooper: XT(E, I, X, R, q, F, re, Ze, r),
    slideFocus: GP,
    slidesHandler: ZT(t, o, O),
    slidesInView: Hi,
    slideIndexes: Y,
    slideRegistry: pa,
    slidesToScroll: L,
    target: yt,
    translate: xO(E, t)
  };
  return uu;
}
function rC() {
  let e = {}, t;
  function r(c) {
    t = c;
  }
  function n(c) {
    return e[c] || [];
  }
  function a(c) {
    return n(c).forEach((f) => f(t, c)), u;
  }
  function i(c, f) {
    return e[c] = n(c).concat([f]), u;
  }
  function o(c, f) {
    return e[c] = n(c).filter((l) => l !== f), u;
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
const nC = {
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
function aC(e) {
  function t(i, o) {
    return gO(i, o || {});
  }
  function r(i) {
    const o = i.breakpoints || {}, s = za(o).filter((u) => e.matchMedia(u).matches).map((u) => o[u]).reduce((u, c) => t(u, c), {});
    return t(i, s);
  }
  function n(i) {
    return i.map((o) => za(o.breakpoints || {})).reduce((o, s) => o.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function iC(e) {
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
function ho(e, t, r) {
  const n = e.ownerDocument, a = n.defaultView, i = aC(a), o = iC(i), s = Wa(), u = rC(), {
    mergeOptions: c,
    optionsAtMedia: f,
    optionsMediaQueries: l
  } = i, {
    on: d,
    off: p,
    emit: y
  } = u, h = E;
  let v = !1, g, b = c(nC, ho.globalOptions), x = c(b), O = [], m, w, S;
  function A() {
    const {
      container: Y,
      slides: j
    } = x;
    w = (Ed(Y) ? e.querySelector(Y) : Y) || e.children[0];
    const U = Ed(j) ? w.querySelectorAll(j) : j;
    S = [].slice.call(U || w.children);
  }
  function P(Y) {
    const j = tC(e, w, S, n, a, Y, u);
    if (Y.loop && !j.slideLooper.canLoop()) {
      const ee = Object.assign({}, Y, {
        loop: !1
      });
      return P(ee);
    }
    return j;
  }
  function k(Y, j) {
    v || (b = c(b, Y), x = f(b), O = j || O, A(), g = P(x), l([b, ...O.map(({
      options: ee
    }) => ee)]).forEach((ee) => s.add(ee, "change", E)), x.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(G), g.eventHandler.init(G), g.resizeHandler.init(G), g.slidesHandler.init(G), g.options.loop && g.slideLooper.loop(), w.offsetParent && S.length && g.dragHandler.init(G), m = o.init(G, O)));
  }
  function E(Y, j) {
    const ee = L();
    I(), k(c({
      startIndex: ee
    }, Y), j), u.emit("reInit");
  }
  function I() {
    g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), o.destroy(), s.clear();
  }
  function C() {
    v || (v = !0, s.clear(), I(), u.emit("destroy"), u.clear());
  }
  function M(Y, j, ee) {
    !x.active || v || (g.scrollBody.useBaseFriction().useDuration(j === !0 ? 0 : x.duration), g.scrollTo.index(Y, ee || 0));
  }
  function $(Y) {
    const j = g.index.add(1).get();
    M(j, Y, -1);
  }
  function N(Y) {
    const j = g.index.add(-1).get();
    M(j, Y, 1);
  }
  function R() {
    return g.index.add(1).get() !== L();
  }
  function q() {
    return g.index.add(-1).get() !== L();
  }
  function z() {
    return g.scrollSnapList;
  }
  function D() {
    return g.scrollProgress.get(g.offsetLocation.get());
  }
  function L() {
    return g.index.get();
  }
  function F() {
    return g.indexPrevious.get();
  }
  function H() {
    return g.slidesInView.get();
  }
  function X() {
    return g.slidesInView.get(!1);
  }
  function te() {
    return m;
  }
  function ne() {
    return g;
  }
  function re() {
    return e;
  }
  function Q() {
    return w;
  }
  function W() {
    return S;
  }
  const G = {
    canScrollNext: R,
    canScrollPrev: q,
    containerNode: Q,
    internalEngine: ne,
    destroy: C,
    off: p,
    on: d,
    emit: y,
    plugins: te,
    previousScrollSnap: F,
    reInit: h,
    rootNode: re,
    scrollNext: $,
    scrollPrev: N,
    scrollProgress: D,
    scrollSnapList: z,
    scrollTo: M,
    selectedScrollSnap: L,
    slideNodes: W,
    slidesInView: H,
    slidesNotInView: X
  };
  return k(t, r), setTimeout(() => u.emit("init"), 0), G;
}
ho.globalOptions = void 0;
function xh(e = {}, t = []) {
  const r = Vt(e), n = Vt(t), [a, i] = Te(), [o, s] = Te(), u = rr(() => {
    a && a.reInit(r.current, n.current);
  }, [a]);
  return Ue(() => {
    yh(r.current, e) || (r.current = e, u());
  }, [e, u]), Ue(() => {
    TT(n.current, t) || (n.current = t, u());
  }, [t, u]), Ue(() => {
    if (ET() && o) {
      ho.globalOptions = xh.globalOptions;
      const c = ho(o, r.current, n.current);
      return i(c), () => c.destroy();
    } else
      i(void 0);
  }, [o, i]), [s, a];
}
xh.globalOptions = void 0;
function Gz({ children: e, isValidProp: t, ...r }) {
  t && oE(t), r = { ...it(Zv), ...r }, r.isStatic = iE(() => r.isStatic);
  const n = Qe(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return _(Zv.Provider, { value: n, children: e });
}
const je = 28, py = 16, oC = ({ children: e }) => {
  const t = Vt(null), [r, n] = Te(!0), [a, i] = Te(!1);
  Yw(() => {
    const f = t.current;
    if (!f) return;
    const l = new ResizeObserver(() => u());
    l.observe(f);
    const d = () => {
      u();
    };
    return f.addEventListener("scroll", d), u(), () => {
      l.disconnect(), f.removeEventListener("scroll", d);
    };
  }, []);
  function o() {
    const f = t.current;
    f && f.scrollBy({
      left: f.clientWidth,
      behavior: "smooth"
    });
  }
  function s() {
    const f = t.current;
    f && f.scrollBy({
      left: -f.clientWidth,
      behavior: "smooth"
    });
  }
  const u = () => {
    if (!t.current) return;
    const { scrollLeft: f, scrollWidth: l, clientWidth: d } = t.current;
    i(f > 0), n(f + d < l);
  };
  let c = "";
  return a && r ? c = `linear-gradient(to right, transparent 0px, transparent ${je}px, black ${2 * je}px, black calc(100% - ${3 * je}px), transparent calc(100% - ${2 * je}px), transparent 100%)` : a && !r ? c = `linear-gradient(to right, transparent 0px, transparent ${je}px, black ${2 * je}px, black 100%)` : !a && r ? c = `linear-gradient(to right, black 0px, black calc(100% - ${3 * je}px), transparent calc(100% - ${2 * je}px), transparent 100%)` : c = "none", K("div", {
    className: "relative",
    children: [_("div", {
      ref: t,
      className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
      style: {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        margin: `-${je}px`,
        padding: `${je}px`,
        height: `calc(100% + ${je * 2}px)`,
        width: `calc(100% + ${je * 2}px)`,
        maskImage: c,
        WebkitMaskImage: c,
        scrollSnapType: "x mandatory"
      },
      children: Array.isArray(e) ? e.map((f, l) => _("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: je + py + "px"
        },
        children: f
      }, l)) : e && _("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: je + py + "px"
        },
        children: e
      })
    }), a && _(On, {
      size: "lg",
      compact: !0,
      variant: "outline",
      className: Z("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: s,
      icon: Jw,
      label: "Previous",
      hideLabel: !0
    }), r && _(On, {
      size: "lg",
      variant: "outline",
      compact: !0,
      className: Z("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: o,
      icon: Qw,
      label: "Next",
      hideLabel: !0
    })]
  });
}, wO = ue.createContext(null);
function ji() {
  const e = ue.useContext(wO);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const OO = ue.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: r, plugins: n, className: a, children: i, ...o }, s) => {
  const [u, c] = xh({
    ...t,
    axis: e === "horizontal" ? "x" : "y"
  }, n), [f, l] = ue.useState(!1), [d, p] = ue.useState(!1), y = ue.useCallback((b) => {
    b && (l(b.canScrollPrev()), p(b.canScrollNext()));
  }, []), h = ue.useCallback(() => {
    c?.scrollPrev();
  }, [c]), v = ue.useCallback(() => {
    c?.scrollNext();
  }, [c]), g = ue.useCallback((b) => {
    b.key === "ArrowLeft" ? (b.preventDefault(), h()) : b.key === "ArrowRight" && (b.preventDefault(), v());
  }, [h, v]);
  return ue.useEffect(() => {
    !c || !r || r(c);
  }, [c, r]), ue.useEffect(() => {
    if (c)
      return y(c), c.on("reInit", y), c.on("select", y), () => {
        c?.off("select", y);
      };
  }, [c, y]), _(wO.Provider, {
    value: {
      carouselRef: u,
      api: c,
      opts: t,
      orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
      scrollPrev: h,
      scrollNext: v,
      canScrollPrev: f,
      canScrollNext: d
    },
    children: _("div", {
      ref: s,
      onKeyDownCapture: g,
      className: Z("group/carousel relative", a),
      role: "region",
      "aria-roledescription": "carousel",
      ...o,
      children: i
    })
  });
});
OO.displayName = "Carousel";
const SO = ue.forwardRef(({ className: e, ...t }, r) => {
  const n = `linear-gradient(to right, transparent 0px, transparent ${je / 2}px, black ${je}px, black calc(100% - ${je}px), transparent calc(100% - ${je / 2}px), transparent 100%)`, { carouselRef: a, orientation: i } = ji();
  return _("div", {
    ref: a,
    className: "overflow-hidden",
    style: {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      margin: `-${je}px`,
      padding: `${je}px`,
      height: `calc(100% + ${je * 2}px)`,
      width: `calc(100% + ${je * 2}px)`,
      maskImage: n,
      WebkitMaskImage: n
    },
    children: _("div", {
      ref: r,
      className: Z("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    })
  });
});
SO.displayName = "CarouselContent";
const _O = ue.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = ji();
  return _("div", {
    ref: r,
    role: "group",
    "aria-roledescription": "slide",
    className: Z("min-w-0 shrink-0 grow-0 basis-full", n === "horizontal" ? "pl-4" : "pt-4", e),
    ...t
  });
});
_O.displayName = "CarouselItem";
const AO = ue.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: o } = ji();
  return _("div", {
    className: Z("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: _(On, {
      compact: !0,
      ref: n,
      size: "sm",
      variant: t,
      className: Z("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Previous",
      icon: sE,
      hideLabel: !0
    })
  });
});
AO.displayName = "CarouselPrevious";
const PO = ue.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollNext: i, canScrollNext: o } = ji();
  return _("div", {
    className: Z("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: _(On, {
      ref: n,
      size: "sm",
      variant: t,
      compact: !0,
      className: Z("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Next",
      icon: uE,
      hideLabel: !0
    })
  });
});
PO.displayName = "CarouselNext";
const EO = ue.forwardRef(({ ...e }, t) => {
  const { api: r } = ji(), [, n] = ue.useState(!1), a = ue.useRef(null), i = ue.useCallback(() => {
    n((d) => !d);
  }, []);
  ue.useEffect(() => {
    if (r)
      return r.on("select", i), r.on("reInit", i), () => {
        r.off("select", i), r.off("reInit", i);
      };
  }, [r, i]);
  const o = r?.scrollSnapList().length || 0, s = r?.selectedScrollSnap() || 0;
  if (ue.useEffect(() => {
    if (!a.current) return;
    const d = a.current, p = 16, y = s * p - d.clientWidth / 2 + p / 2;
    d.scrollTo({
      left: y,
      behavior: "smooth"
    });
  }, [s]), ue.useEffect(() => {
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
  }, (d, p) => p), f = Math.min(u, o) * 16, l = (d) => {
    if (u === o) return null;
    const p = Math.abs(d - s);
    if (p === 0 || p === 1) return "scale-100";
    if (p === 2) return s === 0 || s === o - 1 ? "scale-100" : "scale-75";
    if (p === 3) return s === 0 || s === o - 1 ? "scale-75" : "scale-50";
    if (p >= 4) return "scale-50";
  };
  return _("div", {
    ref: t,
    className: Z("flex justify-center", e.className),
    children: _("div", {
      className: "relative overflow-hidden",
      style: {
        width: `${f}px`
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
            className: Z("h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]", d === s && "rounded-[3px] opacity-100 group-hover/dot:opacity-100", l(d))
          })
        }, d))
      })
    })
  });
});
EO.displayName = "CarouselDots";
const sC = ms({
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
function ha(e, t, r) {
  if (r) {
    const n = (e || 1) / 2;
    return t ? `peek${n}` : n;
  }
  return t ? `peek${e || 1}` : e || 1;
}
const Yz = ({ children: e, columns: t, showArrows: r = !0, showDots: n = !0, autoplay: a = !1, delay: i = 3e3, showPeek: o = !1, doubleColumns: s }) => {
  const u = T.Children.toArray(e), c = T.useRef(a ? hh({
    delay: i,
    stopOnInteraction: !0
  }) : void 0), f = () => {
    c.current && c.current.stop();
  }, l = () => {
    c.current && c.current.play();
  };
  return t ? _(OO, {
    className: "flex w-full flex-col gap-3 @container",
    opts: {
      align: o ? "center" : "start",
      slidesToScroll: "auto",
      duration: 20,
      containScroll: !1
    },
    plugins: [c.current, vh()].filter(Boolean),
    onMouseEnter: a ? f : void 0,
    onMouseLeave: a ? l : void 0,
    children: K("div", {
      className: "flex flex-col gap-5",
      children: [K("div", {
        className: "relative",
        children: [_(SO, {
          children: T.Children.map(u, (d, p) => {
            const y = s?.find((h) => h.index === p);
            return _(_O, {
              className: sC({
                default: ha(t.default, o),
                xs: ha(t.xs, o, y?.sizes?.includes("xs")),
                sm: ha(t.sm, o, y?.sizes?.includes("sm")),
                md: ha(t.md, o, y?.sizes?.includes("md")),
                lg: ha(t.lg, o, y?.sizes?.includes("lg")),
                peek: o
              }),
              children: d
            }, p);
          })
        }), r && K(St, {
          children: [_(AO, {
            label: "Previous"
          }), _(PO, {
            label: "Next"
          })]
        })]
      }), n && _(EO, {})]
    })
  }) : _(oC, {
    children: e
  });
}, TO = Lt(null);
function Xz({ children: e, layout: t }) {
  return _(TO.Provider, {
    value: t,
    children: e
  });
}
function Zz() {
  return it(TO);
}
var hu, hy;
function uC() {
  if (hy) return hu;
  hy = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return hu = e, hu;
}
var vu, vy;
function wh() {
  if (vy) return vu;
  vy = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return vu = e, vu;
}
var yu, yy;
function ws() {
  if (yy) return yu;
  yy = 1;
  var e = wh();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return yu = t, yu;
}
var mu, my;
function cC() {
  if (my) return mu;
  my = 1;
  var e = ws(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return mu = n, mu;
}
var gu, gy;
function lC() {
  if (gy) return gu;
  gy = 1;
  var e = ws();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return gu = t, gu;
}
var bu, by;
function fC() {
  if (by) return bu;
  by = 1;
  var e = ws();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return bu = t, bu;
}
var xu, xy;
function dC() {
  if (xy) return xu;
  xy = 1;
  var e = ws();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return xu = t, xu;
}
var wu, wy;
function Os() {
  if (wy) return wu;
  wy = 1;
  var e = uC(), t = cC(), r = lC(), n = fC(), a = dC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, wu = i, wu;
}
var Ou, Oy;
function pC() {
  if (Oy) return Ou;
  Oy = 1;
  var e = Os();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Ou = t, Ou;
}
var Su, Sy;
function hC() {
  if (Sy) return Su;
  Sy = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Su = e, Su;
}
var _u, _y;
function vC() {
  if (_y) return _u;
  _y = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return _u = e, _u;
}
var Au, Ay;
function yC() {
  if (Ay) return Au;
  Ay = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Au = e, Au;
}
var Pu, Py;
function CO() {
  if (Py) return Pu;
  Py = 1;
  var e = typeof Vi == "object" && Vi && Vi.Object === Object && Vi;
  return Pu = e, Pu;
}
var Eu, Ey;
function Yt() {
  if (Ey) return Eu;
  Ey = 1;
  var e = CO(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Eu = r, Eu;
}
var Tu, Ty;
function Mi() {
  if (Ty) return Tu;
  Ty = 1;
  var e = Yt(), t = e.Symbol;
  return Tu = t, Tu;
}
var Cu, Cy;
function mC() {
  if (Cy) return Cu;
  Cy = 1;
  var e = Mi(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function i(o) {
    var s = r.call(o, a), u = o[a];
    try {
      o[a] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(o);
    return c && (s ? o[a] = u : delete o[a]), f;
  }
  return Cu = i, Cu;
}
var ju, jy;
function gC() {
  if (jy) return ju;
  jy = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return ju = r, ju;
}
var Mu, My;
function ur() {
  if (My) return Mu;
  My = 1;
  var e = Mi(), t = mC(), r = gC(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? t(s) : r(s);
  }
  return Mu = o, Mu;
}
var $u, $y;
function Or() {
  if ($y) return $u;
  $y = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return $u = e, $u;
}
var Iu, Iy;
function Oh() {
  if (Iy) return Iu;
  Iy = 1;
  var e = ur(), t = Or(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var u = e(s);
    return u == n || u == a || u == r || u == i;
  }
  return Iu = o, Iu;
}
var ku, ky;
function bC() {
  if (ky) return ku;
  ky = 1;
  var e = Yt(), t = e["__core-js_shared__"];
  return ku = t, ku;
}
var Nu, Ny;
function xC() {
  if (Ny) return Nu;
  Ny = 1;
  var e = bC(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Nu = r, Nu;
}
var Du, Dy;
function jO() {
  if (Dy) return Du;
  Dy = 1;
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
  return Du = r, Du;
}
var Ru, Ry;
function wC() {
  if (Ry) return Ru;
  Ry = 1;
  var e = Oh(), t = xC(), r = Or(), n = jO(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, c = s.hasOwnProperty, f = RegExp(
    "^" + u.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!r(d) || t(d))
      return !1;
    var p = e(d) ? f : i;
    return p.test(n(d));
  }
  return Ru = l, Ru;
}
var Lu, Ly;
function OC() {
  if (Ly) return Lu;
  Ly = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Lu = e, Lu;
}
var qu, qy;
function en() {
  if (qy) return qu;
  qy = 1;
  var e = wC(), t = OC();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return qu = r, qu;
}
var Bu, By;
function Sh() {
  if (By) return Bu;
  By = 1;
  var e = en(), t = Yt(), r = e(t, "Map");
  return Bu = r, Bu;
}
var Fu, Fy;
function Ss() {
  if (Fy) return Fu;
  Fy = 1;
  var e = en(), t = e(Object, "create");
  return Fu = t, Fu;
}
var zu, zy;
function SC() {
  if (zy) return zu;
  zy = 1;
  var e = Ss();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return zu = t, zu;
}
var Wu, Wy;
function _C() {
  if (Wy) return Wu;
  Wy = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Wu = e, Wu;
}
var Uu, Uy;
function AC() {
  if (Uy) return Uu;
  Uy = 1;
  var e = Ss(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var s = o[i];
      return s === t ? void 0 : s;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return Uu = a, Uu;
}
var Hu, Hy;
function PC() {
  if (Hy) return Hu;
  Hy = 1;
  var e = Ss(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return Hu = n, Hu;
}
var Ku, Ky;
function EC() {
  if (Ky) return Ku;
  Ky = 1;
  var e = Ss(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return Ku = r, Ku;
}
var Vu, Vy;
function TC() {
  if (Vy) return Vu;
  Vy = 1;
  var e = SC(), t = _C(), r = AC(), n = PC(), a = EC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Vu = i, Vu;
}
var Gu, Gy;
function CC() {
  if (Gy) return Gu;
  Gy = 1;
  var e = TC(), t = Os(), r = Sh();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Gu = n, Gu;
}
var Yu, Yy;
function jC() {
  if (Yy) return Yu;
  Yy = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Yu = e, Yu;
}
var Xu, Xy;
function _s() {
  if (Xy) return Xu;
  Xy = 1;
  var e = jC();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Xu = t, Xu;
}
var Zu, Zy;
function MC() {
  if (Zy) return Zu;
  Zy = 1;
  var e = _s();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Zu = t, Zu;
}
var Ju, Jy;
function $C() {
  if (Jy) return Ju;
  Jy = 1;
  var e = _s();
  function t(r) {
    return e(this, r).get(r);
  }
  return Ju = t, Ju;
}
var Qu, Qy;
function IC() {
  if (Qy) return Qu;
  Qy = 1;
  var e = _s();
  function t(r) {
    return e(this, r).has(r);
  }
  return Qu = t, Qu;
}
var ec, em;
function kC() {
  if (em) return ec;
  em = 1;
  var e = _s();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return ec = t, ec;
}
var tc, tm;
function _h() {
  if (tm) return tc;
  tm = 1;
  var e = CC(), t = MC(), r = $C(), n = IC(), a = kC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, tc = i, tc;
}
var rc, rm;
function NC() {
  if (rm) return rc;
  rm = 1;
  var e = Os(), t = Sh(), r = _h(), n = 200;
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
  return rc = a, rc;
}
var nc, nm;
function MO() {
  if (nm) return nc;
  nm = 1;
  var e = Os(), t = pC(), r = hC(), n = vC(), a = yC(), i = NC();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, nc = o, nc;
}
var ac, am;
function DC() {
  if (am) return ac;
  am = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return ac = t, ac;
}
var ic, im;
function RC() {
  if (im) return ic;
  im = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ic = e, ic;
}
var oc, om;
function $O() {
  if (om) return oc;
  om = 1;
  var e = _h(), t = DC(), r = RC();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, oc = n, oc;
}
var sc, sm;
function IO() {
  if (sm) return sc;
  sm = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return sc = e, sc;
}
var uc, um;
function kO() {
  if (um) return uc;
  um = 1;
  function e(t, r) {
    return t.has(r);
  }
  return uc = e, uc;
}
var cc, cm;
function NO() {
  if (cm) return cc;
  cm = 1;
  var e = $O(), t = IO(), r = kO(), n = 1, a = 2;
  function i(o, s, u, c, f, l) {
    var d = u & n, p = o.length, y = s.length;
    if (p != y && !(d && y > p))
      return !1;
    var h = l.get(o), v = l.get(s);
    if (h && v)
      return h == s && v == o;
    var g = -1, b = !0, x = u & a ? new e() : void 0;
    for (l.set(o, s), l.set(s, o); ++g < p; ) {
      var O = o[g], m = s[g];
      if (c)
        var w = d ? c(m, O, g, s, o, l) : c(O, m, g, o, s, l);
      if (w !== void 0) {
        if (w)
          continue;
        b = !1;
        break;
      }
      if (x) {
        if (!t(s, function(S, A) {
          if (!r(x, A) && (O === S || f(O, S, u, c, l)))
            return x.push(A);
        })) {
          b = !1;
          break;
        }
      } else if (!(O === m || f(O, m, u, c, l))) {
        b = !1;
        break;
      }
    }
    return l.delete(o), l.delete(s), b;
  }
  return cc = i, cc;
}
var lc, lm;
function LC() {
  if (lm) return lc;
  lm = 1;
  var e = Yt(), t = e.Uint8Array;
  return lc = t, lc;
}
var fc, fm;
function qC() {
  if (fm) return fc;
  fm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return fc = e, fc;
}
var dc, dm;
function Ah() {
  if (dm) return dc;
  dm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return dc = e, dc;
}
var pc, pm;
function BC() {
  if (pm) return pc;
  pm = 1;
  var e = Mi(), t = LC(), r = wh(), n = NO(), a = qC(), i = Ah(), o = 1, s = 2, u = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", p = "[object RegExp]", y = "[object Set]", h = "[object String]", v = "[object Symbol]", g = "[object ArrayBuffer]", b = "[object DataView]", x = e ? e.prototype : void 0, O = x ? x.valueOf : void 0;
  function m(w, S, A, P, k, E, I) {
    switch (A) {
      case b:
        if (w.byteLength != S.byteLength || w.byteOffset != S.byteOffset)
          return !1;
        w = w.buffer, S = S.buffer;
      case g:
        return !(w.byteLength != S.byteLength || !E(new t(w), new t(S)));
      case u:
      case c:
      case d:
        return r(+w, +S);
      case f:
        return w.name == S.name && w.message == S.message;
      case p:
      case h:
        return w == S + "";
      case l:
        var C = a;
      case y:
        var M = P & o;
        if (C || (C = i), w.size != S.size && !M)
          return !1;
        var $ = I.get(w);
        if ($)
          return $ == S;
        P |= s, I.set(w, S);
        var N = n(C(w), C(S), P, k, E, I);
        return I.delete(w), N;
      case v:
        if (O)
          return O.call(w) == O.call(S);
    }
    return !1;
  }
  return pc = m, pc;
}
var hc, hm;
function DO() {
  if (hm) return hc;
  hm = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return hc = e, hc;
}
var vc, vm;
function ot() {
  if (vm) return vc;
  vm = 1;
  var e = Array.isArray;
  return vc = e, vc;
}
var yc, ym;
function FC() {
  if (ym) return yc;
  ym = 1;
  var e = DO(), t = ot();
  function r(n, a, i) {
    var o = a(n);
    return t(n) ? o : e(o, i(n));
  }
  return yc = r, yc;
}
var mc, mm;
function zC() {
  if (mm) return mc;
  mm = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
      var s = t[n];
      r(s, n, t) && (o[i++] = s);
    }
    return o;
  }
  return mc = e, mc;
}
var gc, gm;
function WC() {
  if (gm) return gc;
  gm = 1;
  function e() {
    return [];
  }
  return gc = e, gc;
}
var bc, bm;
function UC() {
  if (bm) return bc;
  bm = 1;
  var e = zC(), t = WC(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return bc = i, bc;
}
var xc, xm;
function HC() {
  if (xm) return xc;
  xm = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return xc = e, xc;
}
var wc, wm;
function cr() {
  if (wm) return wc;
  wm = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return wc = e, wc;
}
var Oc, Om;
function KC() {
  if (Om) return Oc;
  Om = 1;
  var e = ur(), t = cr(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Oc = n, Oc;
}
var Sc, Sm;
function Ph() {
  if (Sm) return Sc;
  Sm = 1;
  var e = KC(), t = cr(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return Sc = i, Sc;
}
var Ea = { exports: {} }, _c, _m;
function VC() {
  if (_m) return _c;
  _m = 1;
  function e() {
    return !1;
  }
  return _c = e, _c;
}
Ea.exports;
var Am;
function RO() {
  return Am || (Am = 1, (function(e, t) {
    var r = Yt(), n = VC(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
    e.exports = c;
  })(Ea, Ea.exports)), Ea.exports;
}
var Ac, Pm;
function Eh() {
  if (Pm) return Ac;
  Pm = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Ac = r, Ac;
}
var Pc, Em;
function Th() {
  if (Em) return Pc;
  Em = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Pc = t, Pc;
}
var Ec, Tm;
function GC() {
  if (Tm) return Ec;
  Tm = 1;
  var e = ur(), t = Th(), r = cr(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", p = "[object Set]", y = "[object String]", h = "[object WeakMap]", v = "[object ArrayBuffer]", g = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", O = "[object Int8Array]", m = "[object Int16Array]", w = "[object Int32Array]", S = "[object Uint8Array]", A = "[object Uint8ClampedArray]", P = "[object Uint16Array]", k = "[object Uint32Array]", E = {};
  E[b] = E[x] = E[O] = E[m] = E[w] = E[S] = E[A] = E[P] = E[k] = !0, E[n] = E[a] = E[v] = E[i] = E[g] = E[o] = E[s] = E[u] = E[c] = E[f] = E[l] = E[d] = E[p] = E[y] = E[h] = !1;
  function I(C) {
    return r(C) && t(C.length) && !!E[e(C)];
  }
  return Ec = I, Ec;
}
var Tc, Cm;
function LO() {
  if (Cm) return Tc;
  Cm = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Tc = e, Tc;
}
var Ta = { exports: {} };
Ta.exports;
var jm;
function YC() {
  return jm || (jm = 1, (function(e, t) {
    var r = CO(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, s = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Ta, Ta.exports)), Ta.exports;
}
var Cc, Mm;
function qO() {
  if (Mm) return Cc;
  Mm = 1;
  var e = GC(), t = LO(), r = YC(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return Cc = a, Cc;
}
var jc, $m;
function XC() {
  if ($m) return jc;
  $m = 1;
  var e = HC(), t = Ph(), r = ot(), n = RO(), a = Eh(), i = qO(), o = Object.prototype, s = o.hasOwnProperty;
  function u(c, f) {
    var l = r(c), d = !l && t(c), p = !l && !d && n(c), y = !l && !d && !p && i(c), h = l || d || p || y, v = h ? e(c.length, String) : [], g = v.length;
    for (var b in c)
      (f || s.call(c, b)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      p && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      a(b, g))) && v.push(b);
    return v;
  }
  return jc = u, jc;
}
var Mc, Im;
function ZC() {
  if (Im) return Mc;
  Im = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return Mc = t, Mc;
}
var $c, km;
function BO() {
  if (km) return $c;
  km = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return $c = e, $c;
}
var Ic, Nm;
function JC() {
  if (Nm) return Ic;
  Nm = 1;
  var e = BO(), t = e(Object.keys, Object);
  return Ic = t, Ic;
}
var kc, Dm;
function QC() {
  if (Dm) return kc;
  Dm = 1;
  var e = ZC(), t = JC(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && o.push(s);
    return o;
  }
  return kc = a, kc;
}
var Nc, Rm;
function $i() {
  if (Rm) return Nc;
  Rm = 1;
  var e = Oh(), t = Th();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Nc = r, Nc;
}
var Dc, Lm;
function As() {
  if (Lm) return Dc;
  Lm = 1;
  var e = XC(), t = QC(), r = $i();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return Dc = n, Dc;
}
var Rc, qm;
function ej() {
  if (qm) return Rc;
  qm = 1;
  var e = FC(), t = UC(), r = As();
  function n(a) {
    return e(a, r, t);
  }
  return Rc = n, Rc;
}
var Lc, Bm;
function tj() {
  if (Bm) return Lc;
  Bm = 1;
  var e = ej(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function a(i, o, s, u, c, f) {
    var l = s & t, d = e(i), p = d.length, y = e(o), h = y.length;
    if (p != h && !l)
      return !1;
    for (var v = p; v--; ) {
      var g = d[v];
      if (!(l ? g in o : n.call(o, g)))
        return !1;
    }
    var b = f.get(i), x = f.get(o);
    if (b && x)
      return b == o && x == i;
    var O = !0;
    f.set(i, o), f.set(o, i);
    for (var m = l; ++v < p; ) {
      g = d[v];
      var w = i[g], S = o[g];
      if (u)
        var A = l ? u(S, w, g, o, i, f) : u(w, S, g, i, o, f);
      if (!(A === void 0 ? w === S || c(w, S, s, u, f) : A)) {
        O = !1;
        break;
      }
      m || (m = g == "constructor");
    }
    if (O && !m) {
      var P = i.constructor, k = o.constructor;
      P != k && "constructor" in i && "constructor" in o && !(typeof P == "function" && P instanceof P && typeof k == "function" && k instanceof k) && (O = !1);
    }
    return f.delete(i), f.delete(o), O;
  }
  return Lc = a, Lc;
}
var qc, Fm;
function rj() {
  if (Fm) return qc;
  Fm = 1;
  var e = en(), t = Yt(), r = e(t, "DataView");
  return qc = r, qc;
}
var Bc, zm;
function nj() {
  if (zm) return Bc;
  zm = 1;
  var e = en(), t = Yt(), r = e(t, "Promise");
  return Bc = r, Bc;
}
var Fc, Wm;
function FO() {
  if (Wm) return Fc;
  Wm = 1;
  var e = en(), t = Yt(), r = e(t, "Set");
  return Fc = r, Fc;
}
var zc, Um;
function aj() {
  if (Um) return zc;
  Um = 1;
  var e = en(), t = Yt(), r = e(t, "WeakMap");
  return zc = r, zc;
}
var Wc, Hm;
function ij() {
  if (Hm) return Wc;
  Hm = 1;
  var e = rj(), t = Sh(), r = nj(), n = FO(), a = aj(), i = ur(), o = jO(), s = "[object Map]", u = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", p = o(e), y = o(t), h = o(r), v = o(n), g = o(a), b = i;
  return (e && b(new e(new ArrayBuffer(1))) != d || t && b(new t()) != s || r && b(r.resolve()) != c || n && b(new n()) != f || a && b(new a()) != l) && (b = function(x) {
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
          return f;
        case g:
          return l;
      }
    return O;
  }), Wc = b, Wc;
}
var Uc, Km;
function oj() {
  if (Km) return Uc;
  Km = 1;
  var e = MO(), t = NO(), r = BC(), n = tj(), a = ij(), i = ot(), o = RO(), s = qO(), u = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, p = d.hasOwnProperty;
  function y(h, v, g, b, x, O) {
    var m = i(h), w = i(v), S = m ? f : a(h), A = w ? f : a(v);
    S = S == c ? l : S, A = A == c ? l : A;
    var P = S == l, k = A == l, E = S == A;
    if (E && o(h)) {
      if (!o(v))
        return !1;
      m = !0, P = !1;
    }
    if (E && !P)
      return O || (O = new e()), m || s(h) ? t(h, v, g, b, x, O) : r(h, v, S, g, b, x, O);
    if (!(g & u)) {
      var I = P && p.call(h, "__wrapped__"), C = k && p.call(v, "__wrapped__");
      if (I || C) {
        var M = I ? h.value() : h, $ = C ? v.value() : v;
        return O || (O = new e()), x(M, $, g, b, O);
      }
    }
    return E ? (O || (O = new e()), n(h, v, g, b, x, O)) : !1;
  }
  return Uc = y, Uc;
}
var Hc, Vm;
function Ch() {
  if (Vm) return Hc;
  Vm = 1;
  var e = oj(), t = cr();
  function r(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, o, r, s);
  }
  return Hc = r, Hc;
}
var Kc, Gm;
function sj() {
  if (Gm) return Kc;
  Gm = 1;
  var e = Ch();
  function t(r, n) {
    return e(r, n);
  }
  return Kc = t, Kc;
}
var uj = sj();
const Yr = /* @__PURE__ */ xe(uj), cj = [], lj = (e) => {
  const { open: t, onOpenChange: r, ...n } = e, a = cj.reduce((i, o) => {
    const { [o]: s, ...u } = i;
    return u;
  }, n);
  return _(cE, {
    ...a,
    open: t,
    onOpenChange: r,
    align: e.align || "end"
  });
}, Jz = ({ items: e, children: t }) => {
  const [r, n] = Te(!1);
  return K(lE, {
    open: r,
    onOpenChange: n,
    children: [_(fE, {
      asChild: !0,
      children: t || _(On, {
        label: "Other actions",
        icon: eO,
        variant: "outline",
        size: "lg",
        pressed: r,
        noTitle: !0
      })
    }), _(dE, {
      className: "bg-f1-background-overlay"
    }), _(pE, {
      className: "bg-f1-background",
      children: _("div", {
        className: "flex flex-col px-2 pb-3 pt-2",
        children: e.map((a, i) => a.type === "separator" ? _("div", {
          className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary"
        }, `separator-${i}`) : a.type === "label" ? _("span", {
          className: "flex-1 px-3 py-2 text-xs font-medium leading-4 text-f1-foreground-secondary",
          children: a.text
        }, `label-${i}`) : a.href ? _(ih, {
          href: a.href,
          className: Z("flex w-full items-start gap-1.5", a.critical && "text-f1-foreground-critical", "text-f1-foreground no-underline hover:cursor-pointer"),
          children: _(hE, {
            item: a
          })
        }, `link-${i}`) : K("button", {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), a.onClick?.(), n(!1);
          },
          className: "flex w-full items-center gap-2 p-3",
          children: [a.icon && _("span", {
            className: Z("h-5 w-5 text-f1-icon", a.critical && "text-f1-icon-critical"),
            children: _(vt, {
              icon: a.icon,
              size: "md"
            })
          }), _("span", {
            className: Z("font-medium", a.critical ? "text-f1-foreground-critical" : "text-f1-foreground"),
            children: a.label
          })]
        }, a.label))
      })
    })]
  });
}, fj = ms({
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
}), dj = ({ type: e, size: t, "aria-label": r, "aria-labelledby": n }) => {
  const a = {
    critical: rO,
    warning: oh,
    info: tO,
    positive: gs
  };
  return _("div", {
    className: fj({
      type: e,
      size: t
    }),
    "aria-label": r,
    "aria-labelledby": n,
    role: "alert",
    children: _(vt, {
      icon: a[e],
      size: t
    })
  });
};
function pj(e, t) {
  const r = pn(e), n = pn(t), a = r.getTime() - n.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function jh(e) {
  return vE(e, Date.now());
}
function hj(e) {
  return (t) => {
    const n = (e ? Math[e] : Math.trunc)(t);
    return n === 0 ? 0 : n;
  };
}
function vj(e, t, r) {
  const n = yE(), a = r?.locale ?? n.locale ?? mE, i = pj(e, t);
  if (isNaN(i))
    throw new RangeError("Invalid time value");
  const o = Object.assign({}, r, {
    addSuffix: r?.addSuffix,
    comparison: i
  });
  let s, u;
  i > 0 ? (s = pn(t), u = pn(e)) : (s = pn(e), u = pn(t));
  const c = hj(r?.roundingMethod ?? "round"), f = u.getTime() - s.getTime(), l = f / ry, d = Jv(u) - Jv(s), p = (f - d) / ry, y = r?.unit;
  let h;
  if (y ? h = y : l < 1 ? h = "second" : l < 60 ? h = "minute" : l < Qv ? h = "hour" : p < ey ? h = "day" : p < ty ? h = "month" : h = "year", h === "second") {
    const v = c(f / 1e3);
    return a.formatDistance("xSeconds", v, o);
  } else if (h === "minute") {
    const v = c(l);
    return a.formatDistance("xMinutes", v, o);
  } else if (h === "hour") {
    const v = c(l / 60);
    return a.formatDistance("xHours", v, o);
  } else if (h === "day") {
    const v = c(p / Qv);
    return a.formatDistance("xDays", v, o);
  } else if (h === "month") {
    const v = c(p / ey);
    return v === 12 && y !== "month" ? a.formatDistance("xYears", 1, o) : a.formatDistance("xMonths", v, o);
  } else {
    const v = c(p / ty);
    return a.formatDistance("xYears", v, o);
  }
}
function yj(e, t) {
  return vj(e, jh(e), t);
}
function zO(e) {
  return nO(e, jh(e));
}
function WO(e) {
  return nO(e, fo(jh(e), 1));
}
function va(e, t) {
  return gE(e, -t);
}
function Ym(e, t) {
  return bE(e, -t);
}
function Qz(e) {
  return Ba(e, "p");
}
function eW(e) {
  return Ba(e, "HH:mm");
}
function mj(e) {
  return Ba(e, "LLL");
}
function gj(e) {
  return e.getDate();
}
function Xm(e, t = !0) {
  return yj(e, { addSuffix: t });
}
function tW(e, { yesterdayRelative: t = !0 } = {}) {
  return zO(e) ? Xm(e) : WO(e) ? t ? Xm(e) : Ba(e, "p") : Ba(e, "PPPp");
}
const rW = (e, t) => {
  const r = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return e.forEach((n) => {
    const a = n[t], i = Math.abs(xE(a, /* @__PURE__ */ new Date()));
    zO(a) ? r.today.push(n) : WO(a) ? r.yesterday.push(n) : i <= 7 ? r.lastWeek.push(n) : i <= 30 ? r.lastMonth.push(n) : r[a.getFullYear()] = [...r[a.getFullYear()] || [], n];
  }), r;
}, nW = ({ date: e, "aria-label": t, "aria-labelledby": r }) => {
  const n = gj(e), a = mj(e);
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
};
function UO(e, t) {
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
const bj = ms({
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
}), xj = ({ count: e, size: t = "md", type: r, list: n, avatarType: a = "person" }) => {
  const i = _("div", {
    className: Z("cursor-default font-medium transition hover:bg-f1-background-secondary-hover", bj({
      size: t,
      type: r
    })),
    children: t === "xs" ? _(vt, {
      icon: eO,
      size: "xs"
    }) : `+${e}`
  });
  return n?.length ? K(aO, {
    children: [_(iO, {
      asChild: !0,
      children: i
    }), _(oO, {
      side: "top",
      children: K(sO, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [n.map((o, s) => K("div", {
          className: "flex w-[180px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: [_("div", {
            className: "h-6 w-6 shrink-0",
            children: _(Qr, {
              avatar: {
                type: a,
                ...o
              },
              size: "sm"
            })
          }), _("div", {
            className: "min-w-0 flex-1 truncate font-semibold",
            children: UO(a, o)
          })]
        }, s)), _(uO, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
}, wj = ["xs", "sm", "md"], Oj = {
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
}, HO = ({ avatars: e, size: t = "md", type: r, noTooltip: n = !1, remainingCount: a, max: i }) => {
  if (t && !wj.includes(t)) {
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
  }[t] ?? 0, u = Qe(() => ({
    xs: 20,
    sm: 24,
    md: 32
  })[t], [t]);
  return _(cO, {
    max: i,
    items: e.map((c) => ({
      type: r,
      ...c
    })),
    gap: s,
    itemsWidth: u,
    className: "flex items-center",
    renderListItem: (c, f) => {
      const l = UO(r, c), d = _("div", {
        className: "flex h-fit w-fit shrink-0 items-center justify-center",
        style: f !== e.length - 1 ? {
          clipPath: Oj[r === "person" ? "rounded" : "base"][t]
        } : void 0,
        children: _(Qr, {
          avatar: {
            ...c,
            type: r
          },
          size: t
        })
      });
      return _("div", {
        children: n ? d : _(sh, {
          label: l,
          children: d
        })
      }, f);
    },
    renderDropdownItem: () => null,
    forceShowingOverflowIndicator: a !== void 0,
    renderOverflowIndicator: (c) => _("div", {
      className: "flex h-fit w-fit items-center",
      style: {
        marginLeft: s
      },
      children: _(xj, {
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
HO.displayName = "AvatarList";
const Sj = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let _j = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += Sj[r[e] & 63];
  return t;
};
var Vc, Zm;
function Qn() {
  if (Zm) return Vc;
  Zm = 1;
  var e = ur(), t = cr(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return Vc = n, Vc;
}
var Gc, Jm;
function Mh() {
  if (Jm) return Gc;
  Jm = 1;
  var e = ot(), t = Qn(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || t(i) ? !0 : n.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return Gc = a, Gc;
}
var Yc, Qm;
function KO() {
  if (Qm) return Yc;
  Qm = 1;
  var e = _h(), t = "Expected a function";
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
  return r.Cache = e, Yc = r, Yc;
}
var Xc, eg;
function Aj() {
  if (eg) return Xc;
  eg = 1;
  var e = KO(), t = 500;
  function r(n) {
    var a = e(n, function(o) {
      return i.size === t && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return Xc = r, Xc;
}
var Zc, tg;
function Pj() {
  if (tg) return Zc;
  tg = 1;
  var e = Aj(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, s, u, c) {
      i.push(u ? c.replace(r, "$1") : s || o);
    }), i;
  });
  return Zc = n, Zc;
}
var Jc, rg;
function $h() {
  if (rg) return Jc;
  rg = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return Jc = e, Jc;
}
var Qc, ng;
function Ej() {
  if (ng) return Qc;
  ng = 1;
  var e = Mi(), t = $h(), r = ot(), n = Qn(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
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
  return Qc = o, Qc;
}
var el, ag;
function VO() {
  if (ag) return el;
  ag = 1;
  var e = Ej();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return el = t, el;
}
var tl, ig;
function GO() {
  if (ig) return tl;
  ig = 1;
  var e = ot(), t = Mh(), r = Pj(), n = VO();
  function a(i, o) {
    return e(i) ? i : t(i, o) ? [i] : r(n(i));
  }
  return tl = a, tl;
}
var rl, og;
function Ps() {
  if (og) return rl;
  og = 1;
  var e = Qn();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return rl = t, rl;
}
var nl, sg;
function Ih() {
  if (sg) return nl;
  sg = 1;
  var e = GO(), t = Ps();
  function r(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[t(a[i++])];
    return i && i == o ? n : void 0;
  }
  return nl = r, nl;
}
var al, ug;
function YO() {
  if (ug) return al;
  ug = 1;
  var e = Ih();
  function t(r, n, a) {
    var i = r == null ? void 0 : e(r, n);
    return i === void 0 ? a : i;
  }
  return al = t, al;
}
var Tj = YO();
const pt = /* @__PURE__ */ xe(Tj);
var il, cg;
function Cj() {
  if (cg) return il;
  cg = 1;
  function e(t) {
    return t == null;
  }
  return il = e, il;
}
var jj = Cj();
const se = /* @__PURE__ */ xe(jj);
var ol, lg;
function Mj() {
  if (lg) return ol;
  lg = 1;
  var e = ur(), t = ot(), r = cr(), n = "[object String]";
  function a(i) {
    return typeof i == "string" || !t(i) && r(i) && e(i) == n;
  }
  return ol = a, ol;
}
var $j = Mj();
const Ii = /* @__PURE__ */ xe($j);
var Ij = Oh();
const oe = /* @__PURE__ */ xe(Ij);
var kj = Or();
const ea = /* @__PURE__ */ xe(kj);
var Gi = { exports: {} }, he = {};
var fg;
function Nj() {
  if (fg) return he;
  fg = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.server_context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), l = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), y;
  y = /* @__PURE__ */ Symbol.for("react.module.reference");
  function h(v) {
    if (typeof v == "object" && v !== null) {
      var g = v.$$typeof;
      switch (g) {
        case e:
          switch (v = v.type, v) {
            case r:
            case a:
            case n:
            case c:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case o:
                case u:
                case d:
                case l:
                case i:
                  return v;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return he.ContextConsumer = o, he.ContextProvider = i, he.Element = e, he.ForwardRef = u, he.Fragment = r, he.Lazy = d, he.Memo = l, he.Portal = t, he.Profiler = a, he.StrictMode = n, he.Suspense = c, he.SuspenseList = f, he.isAsyncMode = function() {
    return !1;
  }, he.isConcurrentMode = function() {
    return !1;
  }, he.isContextConsumer = function(v) {
    return h(v) === o;
  }, he.isContextProvider = function(v) {
    return h(v) === i;
  }, he.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, he.isForwardRef = function(v) {
    return h(v) === u;
  }, he.isFragment = function(v) {
    return h(v) === r;
  }, he.isLazy = function(v) {
    return h(v) === d;
  }, he.isMemo = function(v) {
    return h(v) === l;
  }, he.isPortal = function(v) {
    return h(v) === t;
  }, he.isProfiler = function(v) {
    return h(v) === a;
  }, he.isStrictMode = function(v) {
    return h(v) === n;
  }, he.isSuspense = function(v) {
    return h(v) === c;
  }, he.isSuspenseList = function(v) {
    return h(v) === f;
  }, he.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === a || v === n || v === c || v === f || v === p || typeof v == "object" && v !== null && (v.$$typeof === d || v.$$typeof === l || v.$$typeof === i || v.$$typeof === o || v.$$typeof === u || v.$$typeof === y || v.getModuleId !== void 0);
  }, he.typeOf = h, he;
}
var ve = {};
var dg;
function Dj() {
  return dg || (dg = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.server_context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), l = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), y = !1, h = !1, v = !1, g = !1, b = !1, x;
    x = /* @__PURE__ */ Symbol.for("react.module.reference");
    function O(U) {
      return !!(typeof U == "string" || typeof U == "function" || U === r || U === a || b || U === n || U === c || U === f || g || U === p || y || h || v || typeof U == "object" && U !== null && (U.$$typeof === d || U.$$typeof === l || U.$$typeof === i || U.$$typeof === o || U.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      U.$$typeof === x || U.getModuleId !== void 0));
    }
    function m(U) {
      if (typeof U == "object" && U !== null) {
        var ce = U.$$typeof;
        switch (ce) {
          case e:
            var de = U.type;
            switch (de) {
              case r:
              case a:
              case n:
              case c:
              case f:
                return de;
              default:
                var we = de && de.$$typeof;
                switch (we) {
                  case s:
                  case o:
                  case u:
                  case d:
                  case l:
                  case i:
                    return we;
                  default:
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var w = o, S = i, A = e, P = u, k = r, E = d, I = l, C = t, M = a, $ = n, N = c, R = f, q = !1, z = !1;
    function D(U) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(U) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(U) {
      return m(U) === o;
    }
    function H(U) {
      return m(U) === i;
    }
    function X(U) {
      return typeof U == "object" && U !== null && U.$$typeof === e;
    }
    function te(U) {
      return m(U) === u;
    }
    function ne(U) {
      return m(U) === r;
    }
    function re(U) {
      return m(U) === d;
    }
    function Q(U) {
      return m(U) === l;
    }
    function W(U) {
      return m(U) === t;
    }
    function G(U) {
      return m(U) === a;
    }
    function Y(U) {
      return m(U) === n;
    }
    function j(U) {
      return m(U) === c;
    }
    function ee(U) {
      return m(U) === f;
    }
    ve.ContextConsumer = w, ve.ContextProvider = S, ve.Element = A, ve.ForwardRef = P, ve.Fragment = k, ve.Lazy = E, ve.Memo = I, ve.Portal = C, ve.Profiler = M, ve.StrictMode = $, ve.Suspense = N, ve.SuspenseList = R, ve.isAsyncMode = D, ve.isConcurrentMode = L, ve.isContextConsumer = F, ve.isContextProvider = H, ve.isElement = X, ve.isForwardRef = te, ve.isFragment = ne, ve.isLazy = re, ve.isMemo = Q, ve.isPortal = W, ve.isProfiler = G, ve.isStrictMode = Y, ve.isSuspense = j, ve.isSuspenseList = ee, ve.isValidElementType = O, ve.typeOf = m;
  })()), ve;
}
var pg;
function Rj() {
  return pg || (pg = 1, process.env.NODE_ENV === "production" ? Gi.exports = Nj() : Gi.exports = Dj()), Gi.exports;
}
var Lj = Rj(), sl, hg;
function XO() {
  if (hg) return sl;
  hg = 1;
  var e = ur(), t = cr(), r = "[object Number]";
  function n(a) {
    return typeof a == "number" || t(a) && e(a) == r;
  }
  return sl = n, sl;
}
var ul, vg;
function qj() {
  if (vg) return ul;
  vg = 1;
  var e = XO();
  function t(r) {
    return e(r) && r != +r;
  }
  return ul = t, ul;
}
var Bj = qj();
const ta = /* @__PURE__ */ xe(Bj);
var Fj = XO();
const zj = /* @__PURE__ */ xe(Fj);
var et = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Rr = function(t) {
  return Ii(t) && t.indexOf("%") === t.length - 1;
}, V = function(t) {
  return zj(t) && !ta(t);
}, Fe = function(t) {
  return V(t) || Ii(t);
}, Wj = 0, tn = function(t) {
  var r = ++Wj;
  return "".concat(t || "").concat(r);
}, tt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!V(t) && !Ii(t))
    return n;
  var i;
  if (Rr(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return ta(i) && (i = n), a && i > r && (i = r), i;
}, mr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, Uj = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, a = 0; a < r; a++)
    if (!n[t[a]])
      n[t[a]] = !0;
    else
      return !0;
  return !1;
}, qe = function(t, r) {
  return V(t) && V(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function vo(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : pt(n, t)) === r;
  });
}
var aW = function(t) {
  if (!t || !t.length)
    return null;
  for (var r = t.length, n = 0, a = 0, i = 0, o = 0, s = 1 / 0, u = -1 / 0, c = 0, f = 0, l = 0; l < r; l++)
    c = t[l].cx || 0, f = t[l].cy || 0, n += c, a += f, i += c * f, o += c * c, s = Math.min(s, c), u = Math.max(u, c);
  var d = r * o !== n * n ? (r * i - n * a) / (r * o - n * n) : 0;
  return {
    xmin: s,
    xmax: u,
    a: d,
    b: (a - d * n) / r
  };
};
function bn(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Cd(e) {
  "@babel/helpers - typeof";
  return Cd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cd(e);
}
var Hj = ["viewBox", "children"], Kj = [
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
], yg = ["points", "pathLength"], cl = {
  svg: Hj,
  polygon: yg,
  polyline: yg
}, kh = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], yo = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ It(t) && (n = t.props), !ea(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    kh.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, Vj = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, Xr = function(t, r, n) {
  if (!ea(t) || Cd(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    kh.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = Vj(o, r, n));
  }), a;
}, Gj = ["children"], Yj = ["children"];
function mg(e, t) {
  if (e == null) return {};
  var r = Xj(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Xj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function jd(e) {
  "@babel/helpers - typeof";
  return jd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jd(e);
}
var gg = {
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
}, nr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, bg = null, ll = null, Nh = function e(t) {
  if (t === bg && Array.isArray(ll))
    return ll;
  var r = [];
  return zr.forEach(t, function(n) {
    se(n) || (Lj.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), ll = r, bg = t, r;
};
function ht(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return nr(a);
  }) : n = [nr(t)], Nh(e).forEach(function(a) {
    var i = pt(a, "type.displayName") || pt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function ft(e, t) {
  var r = ht(e, t);
  return r && r[0];
}
var xg = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!V(n) || n <= 0 || !V(a) || a <= 0);
}, Zj = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], Jj = function(t) {
  return t && t.type && Ii(t.type) && Zj.indexOf(t.type) >= 0;
}, ZO = function(t) {
  return t && jd(t) === "object" && "clipDot" in t;
}, Qj = function(t, r, n, a) {
  var i, o = (i = cl?.[a]) !== null && i !== void 0 ? i : [];
  return !oe(t) && (a && o.includes(r) || Kj.includes(r)) || n && kh.includes(r);
}, ae = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ It(t) && (a = t.props), !ea(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var s;
    Qj((s = a) === null || s === void 0 ? void 0 : s[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, Md = function e(t, r) {
  if (t === r)
    return !0;
  var n = zr.count(t);
  if (n !== zr.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return wg(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!wg(i, o))
      return !1;
  }
  return !0;
}, wg = function(t, r) {
  if (se(t) && se(r))
    return !0;
  if (!se(t) && !se(r)) {
    var n = t.props || {}, a = n.children, i = mg(n, Gj), o = r.props || {}, s = o.children, u = mg(o, Yj);
    return a && s ? bn(i, u) && Md(a, s) : !a && !s ? bn(i, u) : !1;
  }
  return !1;
}, Og = function(t, r) {
  var n = [], a = {};
  return Nh(t).forEach(function(i, o) {
    if (Jj(i))
      n.push(i);
    else if (i) {
      var s = nr(i.type), u = r[s] || {}, c = u.handler, f = u.once;
      if (c && (!f || !a[s])) {
        var l = c(i, s, o);
        n.push(l), a[s] = !0;
      }
    }
  }), n;
}, eM = function(t) {
  var r = t && t.type;
  return r && gg[r] ? gg[r] : null;
}, tM = function(t, r) {
  return Nh(r).indexOf(t);
}, rM = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function $d() {
  return $d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $d.apply(this, arguments);
}
function nM(e, t) {
  if (e == null) return {};
  var r = aM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function aM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Id(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, s = e.title, u = e.desc, c = nM(e, rM), f = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, l = le("recharts-surface", i);
  return /* @__PURE__ */ T.createElement("svg", $d({}, ae(c, !0, "svg"), {
    className: l,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ T.createElement("title", null, s), /* @__PURE__ */ T.createElement("desc", null, u), t);
}
var iM = ["children", "className"];
function kd() {
  return kd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kd.apply(this, arguments);
}
function oM(e, t) {
  if (e == null) return {};
  var r = sM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var fe = /* @__PURE__ */ T.forwardRef(function(e, t) {
  var r = e.children, n = e.className, a = oM(e, iM), i = le("recharts-layer", n);
  return /* @__PURE__ */ T.createElement("g", kd({
    className: i
  }, ae(a, !0), {
    ref: t
  }), r);
}), uM = process.env.NODE_ENV !== "production", Nt = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (uM && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
}, fl, Sg;
function cM() {
  if (Sg) return fl;
  Sg = 1;
  function e(t, r, n) {
    var a = -1, i = t.length;
    r < 0 && (r = -r > i ? 0 : i + r), n = n > i ? i : n, n < 0 && (n += i), i = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = t[a + r];
    return o;
  }
  return fl = e, fl;
}
var dl, _g;
function lM() {
  if (_g) return dl;
  _g = 1;
  var e = cM();
  function t(r, n, a) {
    var i = r.length;
    return a = a === void 0 ? i : a, !n && a >= i ? r : e(r, n, a);
  }
  return dl = t, dl;
}
var pl, Ag;
function JO() {
  if (Ag) return pl;
  Ag = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + a + i + "]");
  function u(c) {
    return s.test(c);
  }
  return pl = u, pl;
}
var hl, Pg;
function fM() {
  if (Pg) return hl;
  Pg = 1;
  function e(t) {
    return t.split("");
  }
  return hl = e, hl;
}
var vl, Eg;
function dM() {
  if (Eg) return vl;
  Eg = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + a + "]", u = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + s + "|" + u + ")", f = "[^" + e + "]", l = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "\\u200d", y = c + "?", h = "[" + i + "]?", v = "(?:" + p + "(?:" + [f, l, d].join("|") + ")" + h + y + ")*", g = h + y + v, b = "(?:" + [f + s + "?", s, l, d, o].join("|") + ")", x = RegExp(u + "(?=" + u + ")|" + b + g, "g");
  function O(m) {
    return m.match(x) || [];
  }
  return vl = O, vl;
}
var yl, Tg;
function pM() {
  if (Tg) return yl;
  Tg = 1;
  var e = fM(), t = JO(), r = dM();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return yl = n, yl;
}
var ml, Cg;
function hM() {
  if (Cg) return ml;
  Cg = 1;
  var e = lM(), t = JO(), r = pM(), n = VO();
  function a(i) {
    return function(o) {
      o = n(o);
      var s = t(o) ? r(o) : void 0, u = s ? s[0] : o.charAt(0), c = s ? e(s, 1).join("") : o.slice(1);
      return u[i]() + c;
    };
  }
  return ml = a, ml;
}
var gl, jg;
function vM() {
  if (jg) return gl;
  jg = 1;
  var e = hM(), t = e("toUpperCase");
  return gl = t, gl;
}
var yM = vM();
const Es = /* @__PURE__ */ xe(yM);
function _e(e) {
  return function() {
    return e;
  };
}
const QO = Math.cos, mo = Math.sin, qt = Math.sqrt, go = Math.PI, Ts = 2 * go, Nd = Math.PI, Dd = 2 * Nd, kr = 1e-6, mM = Dd - kr;
function eS(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function gM(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return eS;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class bM {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? eS : gM(t);
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
    let o = this._x1, s = this._y1, u = n - t, c = a - r, f = o - t, l = s - r, d = f * f + l * l;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > kr) if (!(Math.abs(l * u - c * f) > kr) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, y = a - s, h = u * u + c * c, v = p * p + y * y, g = Math.sqrt(h), b = Math.sqrt(d), x = i * Math.tan((Nd - Math.acos((h + d - v) / (2 * g * b))) / 2), O = x / b, m = x / g;
      Math.abs(O - 1) > kr && this._append`L${t + O * f},${r + O * l}`, this._append`A${i},${i},0,0,${+(l * p > f * y)},${this._x1 = t + m * u},${this._y1 = r + m * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(a), u = n * Math.sin(a), c = t + s, f = r + u, l = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > kr || Math.abs(this._y1 - f) > kr) && this._append`L${c},${f}`, n && (d < 0 && (d = d % Dd + Dd), d > mM ? this._append`A${n},${n},0,1,${l},${t - s},${r - u}A${n},${n},0,1,${l},${this._x1 = c},${this._y1 = f}` : d > kr && this._append`A${n},${n},0,${+(d >= Nd)},${l},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Dh(e) {
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
  }, () => new bM(t);
}
function Rh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function tS(e) {
  this._context = e;
}
tS.prototype = {
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
function Cs(e) {
  return new tS(e);
}
function rS(e) {
  return e[0];
}
function nS(e) {
  return e[1];
}
function aS(e, t) {
  var r = _e(!0), n = null, a = Cs, i = null, o = Dh(s);
  e = typeof e == "function" ? e : e === void 0 ? rS : _e(e), t = typeof t == "function" ? t : t === void 0 ? nS : _e(t);
  function s(u) {
    var c, f = (u = Rh(u)).length, l, d = !1, p;
    for (n == null && (i = a(p = o())), c = 0; c <= f; ++c)
      !(c < f && r(l = u[c], c, u)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e(l, c, u), +t(l, c, u));
    if (p) return i = null, p + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : _e(+u), s) : e;
  }, s.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : _e(+u), s) : t;
  }, s.defined = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : _e(!!u), s) : r;
  }, s.curve = function(u) {
    return arguments.length ? (a = u, n != null && (i = a(n)), s) : a;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? n = i = null : i = a(n = u), s) : n;
  }, s;
}
function Yi(e, t, r) {
  var n = null, a = _e(!0), i = null, o = Cs, s = null, u = Dh(c);
  e = typeof e == "function" ? e : e === void 0 ? rS : _e(+e), t = typeof t == "function" ? t : _e(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? nS : _e(+r);
  function c(l) {
    var d, p, y, h = (l = Rh(l)).length, v, g = !1, b, x = new Array(h), O = new Array(h);
    for (i == null && (s = o(b = u())), d = 0; d <= h; ++d) {
      if (!(d < h && a(v = l[d], d, l)) === g)
        if (g = !g)
          p = d, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), y = d - 1; y >= p; --y)
            s.point(x[y], O[y]);
          s.lineEnd(), s.areaEnd();
        }
      g && (x[d] = +e(v, d, l), O[d] = +t(v, d, l), s.point(n ? +n(v, d, l) : x[d], r ? +r(v, d, l) : O[d]));
    }
    if (b) return s = null, b + "" || null;
  }
  function f() {
    return aS().defined(a).curve(o).context(i);
  }
  return c.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : _e(+l), n = null, c) : e;
  }, c.x0 = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : _e(+l), c) : e;
  }, c.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : _e(+l), c) : n;
  }, c.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : _e(+l), r = null, c) : t;
  }, c.y0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : _e(+l), c) : t;
  }, c.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : _e(+l), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(n).y(t);
  }, c.defined = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : _e(!!l), c) : a;
  }, c.curve = function(l) {
    return arguments.length ? (o = l, i != null && (s = o(i)), c) : o;
  }, c.context = function(l) {
    return arguments.length ? (l == null ? i = s = null : s = o(i = l), c) : i;
  }, c;
}
class iS {
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
function xM(e) {
  return new iS(e, !0);
}
function wM(e) {
  return new iS(e, !1);
}
const Lh = {
  draw(e, t) {
    const r = qt(t / go);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ts);
  }
}, OM = {
  draw(e, t) {
    const r = qt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, oS = qt(1 / 3), SM = oS * 2, _M = {
  draw(e, t) {
    const r = qt(t / SM), n = r * oS;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, AM = {
  draw(e, t) {
    const r = qt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, PM = 0.8908130915292852, sS = mo(go / 10) / mo(7 * go / 10), EM = mo(Ts / 10) * sS, TM = -QO(Ts / 10) * sS, CM = {
  draw(e, t) {
    const r = qt(t * PM), n = EM * r, a = TM * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = Ts * i / 5, s = QO(o), u = mo(o);
      e.lineTo(u * r, -s * r), e.lineTo(s * n - u * a, u * n + s * a);
    }
    e.closePath();
  }
}, bl = qt(3), jM = {
  draw(e, t) {
    const r = -qt(t / (bl * 3));
    e.moveTo(0, r * 2), e.lineTo(-bl * r, -r), e.lineTo(bl * r, -r), e.closePath();
  }
}, mt = -0.5, gt = qt(3) / 2, Rd = 1 / qt(12), MM = (Rd / 2 + 1) * 3, $M = {
  draw(e, t) {
    const r = qt(t / MM), n = r / 2, a = r * Rd, i = n, o = r * Rd + r, s = -i, u = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(s, u), e.lineTo(mt * n - gt * a, gt * n + mt * a), e.lineTo(mt * i - gt * o, gt * i + mt * o), e.lineTo(mt * s - gt * u, gt * s + mt * u), e.lineTo(mt * n + gt * a, mt * a - gt * n), e.lineTo(mt * i + gt * o, mt * o - gt * i), e.lineTo(mt * s + gt * u, mt * u - gt * s), e.closePath();
  }
};
function IM(e, t) {
  let r = null, n = Dh(a);
  e = typeof e == "function" ? e : _e(e || Lh), t = typeof t == "function" ? t : _e(t === void 0 ? 64 : +t);
  function a() {
    let i;
    if (r || (r = i = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return a.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : _e(i), a) : e;
  }, a.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : _e(+i), a) : t;
  }, a.context = function(i) {
    return arguments.length ? (r = i ?? null, a) : r;
  }, a;
}
function bo() {
}
function xo(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function uS(e) {
  this._context = e;
}
uS.prototype = {
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
        xo(this, this._x1, this._y1);
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
        xo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function kM(e) {
  return new uS(e);
}
function cS(e) {
  this._context = e;
}
cS.prototype = {
  areaStart: bo,
  areaEnd: bo,
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
        xo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function NM(e) {
  return new cS(e);
}
function lS(e) {
  this._context = e;
}
lS.prototype = {
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
        xo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function DM(e) {
  return new lS(e);
}
function fS(e) {
  this._context = e;
}
fS.prototype = {
  areaStart: bo,
  areaEnd: bo,
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
function RM(e) {
  return new fS(e);
}
function Mg(e) {
  return e < 0 ? -1 : 1;
}
function $g(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), s = (i * a + o * n) / (n + a);
  return (Mg(i) + Mg(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function Ig(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function xl(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, i - s, o - s * r, i, o);
}
function wo(e) {
  this._context = e;
}
wo.prototype = {
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
        xl(this, this._t0, Ig(this, this._t0));
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
          this._point = 3, xl(this, Ig(this, r = $g(this, e, t)), r);
          break;
        default:
          xl(this, this._t0, r = $g(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function dS(e) {
  this._context = new pS(e);
}
(dS.prototype = Object.create(wo.prototype)).point = function(e, t) {
  wo.prototype.point.call(this, t, e);
};
function pS(e) {
  this._context = e;
}
pS.prototype = {
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
function LM(e) {
  return new wo(e);
}
function qM(e) {
  return new dS(e);
}
function hS(e) {
  this._context = e;
}
hS.prototype = {
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
        for (var n = kg(e), a = kg(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function kg(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function BM(e) {
  return new hS(e);
}
function js(e, t) {
  this._context = e, this._t = t;
}
js.prototype = {
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
function FM(e) {
  return new js(e, 0.5);
}
function zM(e) {
  return new js(e, 0);
}
function WM(e) {
  return new js(e, 1);
}
function _n(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, s = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function Ld(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function UM(e, t) {
  return e[t];
}
function HM(e) {
  const t = [];
  return t.key = e, t;
}
function KM() {
  var e = _e([]), t = Ld, r = _n, n = UM;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), HM), s, u = o.length, c = -1, f;
    for (const l of i)
      for (s = 0, ++c; s < u; ++s)
        (o[s][c] = [0, +n(l, o[s].key, c, i)]).data = l;
    for (s = 0, f = Rh(t(o)); s < u; ++s)
      o[f[s]].index = s;
    return r(o, f), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : _e(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : _e(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? Ld : typeof i == "function" ? i : _e(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? _n, a) : r;
  }, a;
}
function VM(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    _n(e, t);
  }
}
function GM(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, s = 0; o < a; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    _n(e, t);
  }
}
function YM(e, t) {
  if (!(!((o = e.length) > 0) || !((i = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var s = 0, u = 0, c = 0; s < o; ++s) {
        for (var f = e[t[s]], l = f[n][1] || 0, d = f[n - 1][1] || 0, p = (l - d) / 2, y = 0; y < s; ++y) {
          var h = e[t[y]], v = h[n][1] || 0, g = h[n - 1][1] || 0;
          p += v - g;
        }
        u += l, c += p * l;
      }
      a[n - 1][1] += a[n - 1][0] = r, u && (r -= c / u);
    }
    a[n - 1][1] += a[n - 1][0] = r, _n(e, t);
  }
}
function Ua(e) {
  "@babel/helpers - typeof";
  return Ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ua(e);
}
var XM = ["type", "size", "sizeType"];
function qd() {
  return qd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qd.apply(this, arguments);
}
function Ng(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ng(Object(r), !0).forEach(function(n) {
      ZM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZM(e, t, r) {
  return t = JM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JM(e) {
  var t = QM(e, "string");
  return Ua(t) == "symbol" ? t : t + "";
}
function QM(e, t) {
  if (Ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function e2(e, t) {
  if (e == null) return {};
  var r = t2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function t2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var vS = {
  symbolCircle: Lh,
  symbolCross: OM,
  symbolDiamond: _M,
  symbolSquare: AM,
  symbolStar: CM,
  symbolTriangle: jM,
  symbolWye: $M
}, r2 = Math.PI / 180, n2 = function(t) {
  var r = "symbol".concat(Es(t));
  return vS[r] || Lh;
}, a2 = function(t, r, n) {
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
      var a = 18 * r2;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, i2 = function(t, r) {
  vS["symbol".concat(Es(t))] = r;
}, qh = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, s = o === void 0 ? "area" : o, u = e2(t, XM), c = Dg(Dg({}, u), {}, {
    type: n,
    size: i,
    sizeType: s
  }), f = function() {
    var v = n2(n), g = IM().type(v).size(a2(i, s, n));
    return g();
  }, l = c.className, d = c.cx, p = c.cy, y = ae(c, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ T.createElement("path", qd({}, y, {
    className: le("recharts-symbols", l),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: f()
  })) : null;
};
qh.registerSymbol = i2;
function An(e) {
  "@babel/helpers - typeof";
  return An = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, An(e);
}
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
function Rg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function o2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rg(Object(r), !0).forEach(function(n) {
      Ha(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function s2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function u2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mS(n.key), n);
  }
}
function c2(e, t, r) {
  return t && u2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function l2(e, t, r) {
  return t = Oo(t), f2(e, yS() ? Reflect.construct(t, r || [], Oo(e).constructor) : t.apply(e, r));
}
function f2(e, t) {
  if (t && (An(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return d2(e);
}
function d2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yS = function() {
    return !!e;
  })();
}
function Oo(e) {
  return Oo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oo(e);
}
function p2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Fd(e, t);
}
function Fd(e, t) {
  return Fd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Fd(e, t);
}
function Ha(e, t, r) {
  return t = mS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mS(e) {
  var t = h2(e, "string");
  return An(t) == "symbol" ? t : t + "";
}
function h2(e, t) {
  if (An(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (An(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var bt = 32, Bh = /* @__PURE__ */ (function(e) {
  function t() {
    return s2(this, t), l2(this, t, arguments);
  }
  return p2(t, e), c2(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = bt / 2, o = bt / 6, s = bt / 3, u = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ T.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: u,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: bt,
            y2: i,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ T.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: u,
            d: "M0,".concat(i, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(i, `
            H`).concat(bt, "M").concat(2 * s, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ T.createElement("path", {
            stroke: "none",
            fill: u,
            d: "M0,".concat(bt / 8, "h").concat(bt, "v").concat(bt * 3 / 4, "h").concat(-bt, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ T.isValidElement(n.legendIcon)) {
          var c = o2({}, n);
          return delete c.legendIcon, /* @__PURE__ */ T.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ T.createElement(qh, {
          fill: u,
          cx: i,
          cy: i,
          size: bt,
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
      var n = this, a = this.props, i = a.payload, o = a.iconSize, s = a.layout, u = a.formatter, c = a.inactiveColor, f = {
        x: 0,
        y: 0,
        width: bt,
        height: bt
      }, l = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(p, y) {
        var h = p.formatter || u, v = le(Ha(Ha({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", p.inactive));
        if (p.type === "none")
          return null;
        var g = oe(p.value) ? null : p.value;
        Nt(
          !oe(p.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var b = p.inactive ? c : p.color;
        return /* @__PURE__ */ T.createElement("li", Bd({
          className: v,
          style: l,
          key: "legend-item-".concat(y)
        }, Xr(n.props, p, y)), /* @__PURE__ */ T.createElement(Id, {
          width: o,
          height: o,
          viewBox: f,
          style: d
        }, n.renderIcon(p)), /* @__PURE__ */ T.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: b
          }
        }, h ? h(g, p, y) : g));
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
      return /* @__PURE__ */ T.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
})(Et);
Ha(Bh, "displayName", "Legend");
Ha(Bh, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var wl, Lg;
function v2() {
  if (Lg) return wl;
  Lg = 1;
  var e = MO(), t = Ch(), r = 1, n = 2;
  function a(i, o, s, u) {
    var c = s.length, f = c, l = !u;
    if (i == null)
      return !f;
    for (i = Object(i); c--; ) {
      var d = s[c];
      if (l && d[2] ? d[1] !== i[d[0]] : !(d[0] in i))
        return !1;
    }
    for (; ++c < f; ) {
      d = s[c];
      var p = d[0], y = i[p], h = d[1];
      if (l && d[2]) {
        if (y === void 0 && !(p in i))
          return !1;
      } else {
        var v = new e();
        if (u)
          var g = u(y, h, p, i, o, v);
        if (!(g === void 0 ? t(h, y, r | n, u, v) : g))
          return !1;
      }
    }
    return !0;
  }
  return wl = a, wl;
}
var Ol, qg;
function gS() {
  if (qg) return Ol;
  qg = 1;
  var e = Or();
  function t(r) {
    return r === r && !e(r);
  }
  return Ol = t, Ol;
}
var Sl, Bg;
function y2() {
  if (Bg) return Sl;
  Bg = 1;
  var e = gS(), t = As();
  function r(n) {
    for (var a = t(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return Sl = r, Sl;
}
var _l, Fg;
function bS() {
  if (Fg) return _l;
  Fg = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return _l = e, _l;
}
var Al, zg;
function m2() {
  if (zg) return Al;
  zg = 1;
  var e = v2(), t = y2(), r = bS();
  function n(a) {
    var i = t(a);
    return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return Al = n, Al;
}
var Pl, Wg;
function g2() {
  if (Wg) return Pl;
  Wg = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Pl = e, Pl;
}
var El, Ug;
function b2() {
  if (Ug) return El;
  Ug = 1;
  var e = GO(), t = Ph(), r = ot(), n = Eh(), a = Th(), i = Ps();
  function o(s, u, c) {
    u = e(u, s);
    for (var f = -1, l = u.length, d = !1; ++f < l; ) {
      var p = i(u[f]);
      if (!(d = s != null && c(s, p)))
        break;
      s = s[p];
    }
    return d || ++f != l ? d : (l = s == null ? 0 : s.length, !!l && a(l) && n(p, l) && (r(s) || t(s)));
  }
  return El = o, El;
}
var Tl, Hg;
function x2() {
  if (Hg) return Tl;
  Hg = 1;
  var e = g2(), t = b2();
  function r(n, a) {
    return n != null && t(n, a, e);
  }
  return Tl = r, Tl;
}
var Cl, Kg;
function w2() {
  if (Kg) return Cl;
  Kg = 1;
  var e = Ch(), t = YO(), r = x2(), n = Mh(), a = gS(), i = bS(), o = Ps(), s = 1, u = 2;
  function c(f, l) {
    return n(f) && a(l) ? i(o(f), l) : function(d) {
      var p = t(d, f);
      return p === void 0 && p === l ? r(d, f) : e(l, p, s | u);
    };
  }
  return Cl = c, Cl;
}
var jl, Vg;
function ra() {
  if (Vg) return jl;
  Vg = 1;
  function e(t) {
    return t;
  }
  return jl = e, jl;
}
var Ml, Gg;
function O2() {
  if (Gg) return Ml;
  Gg = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Ml = e, Ml;
}
var $l, Yg;
function S2() {
  if (Yg) return $l;
  Yg = 1;
  var e = Ih();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return $l = t, $l;
}
var Il, Xg;
function _2() {
  if (Xg) return Il;
  Xg = 1;
  var e = O2(), t = S2(), r = Mh(), n = Ps();
  function a(i) {
    return r(i) ? e(n(i)) : t(i);
  }
  return Il = a, Il;
}
var kl, Zg;
function Xt() {
  if (Zg) return kl;
  Zg = 1;
  var e = m2(), t = w2(), r = ra(), n = ot(), a = _2();
  function i(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : a(o);
  }
  return kl = i, kl;
}
var Nl, Jg;
function xS() {
  if (Jg) return Nl;
  Jg = 1;
  function e(t, r, n, a) {
    for (var i = t.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return Nl = e, Nl;
}
var Dl, Qg;
function A2() {
  if (Qg) return Dl;
  Qg = 1;
  function e(t) {
    return t !== t;
  }
  return Dl = e, Dl;
}
var Rl, eb;
function P2() {
  if (eb) return Rl;
  eb = 1;
  function e(t, r, n) {
    for (var a = n - 1, i = t.length; ++a < i; )
      if (t[a] === r)
        return a;
    return -1;
  }
  return Rl = e, Rl;
}
var Ll, tb;
function E2() {
  if (tb) return Ll;
  tb = 1;
  var e = xS(), t = A2(), r = P2();
  function n(a, i, o) {
    return i === i ? r(a, i, o) : e(a, t, o);
  }
  return Ll = n, Ll;
}
var ql, rb;
function T2() {
  if (rb) return ql;
  rb = 1;
  var e = E2();
  function t(r, n) {
    var a = r == null ? 0 : r.length;
    return !!a && e(r, n, 0) > -1;
  }
  return ql = t, ql;
}
var Bl, nb;
function C2() {
  if (nb) return Bl;
  nb = 1;
  function e(t, r, n) {
    for (var a = -1, i = t == null ? 0 : t.length; ++a < i; )
      if (n(r, t[a]))
        return !0;
    return !1;
  }
  return Bl = e, Bl;
}
var Fl, ab;
function j2() {
  if (ab) return Fl;
  ab = 1;
  function e() {
  }
  return Fl = e, Fl;
}
var zl, ib;
function M2() {
  if (ib) return zl;
  ib = 1;
  var e = FO(), t = j2(), r = Ah(), n = 1 / 0, a = e && 1 / r(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : t;
  return zl = a, zl;
}
var Wl, ob;
function $2() {
  if (ob) return Wl;
  ob = 1;
  var e = $O(), t = T2(), r = C2(), n = kO(), a = M2(), i = Ah(), o = 200;
  function s(u, c, f) {
    var l = -1, d = t, p = u.length, y = !0, h = [], v = h;
    if (f)
      y = !1, d = r;
    else if (p >= o) {
      var g = c ? null : a(u);
      if (g)
        return i(g);
      y = !1, d = n, v = new e();
    } else
      v = c ? [] : h;
    e:
      for (; ++l < p; ) {
        var b = u[l], x = c ? c(b) : b;
        if (b = f || b !== 0 ? b : 0, y && x === x) {
          for (var O = v.length; O--; )
            if (v[O] === x)
              continue e;
          c && v.push(x), h.push(b);
        } else d(v, x, f) || (v !== h && v.push(x), h.push(b));
      }
    return h;
  }
  return Wl = s, Wl;
}
var Ul, sb;
function I2() {
  if (sb) return Ul;
  sb = 1;
  var e = Xt(), t = $2();
  function r(n, a) {
    return n && n.length ? t(n, e(a, 2)) : [];
  }
  return Ul = r, Ul;
}
var k2 = I2();
const ub = /* @__PURE__ */ xe(k2);
function wS(e, t, r) {
  return t === !0 ? ub(e, r) : oe(t) ? ub(e, t) : e;
}
function Pn(e) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pn(e);
}
var N2 = ["ref"];
function cb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cb(Object(r), !0).forEach(function(n) {
      Ms(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function D2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, SS(n.key), n);
  }
}
function R2(e, t, r) {
  return t && lb(e.prototype, t), r && lb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function L2(e, t, r) {
  return t = So(t), q2(e, OS() ? Reflect.construct(t, r || [], So(e).constructor) : t.apply(e, r));
}
function q2(e, t) {
  if (t && (Pn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return B2(e);
}
function B2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function OS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (OS = function() {
    return !!e;
  })();
}
function So(e) {
  return So = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, So(e);
}
function F2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zd(e, t);
}
function zd(e, t) {
  return zd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, zd(e, t);
}
function Ms(e, t, r) {
  return t = SS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SS(e) {
  var t = z2(e, "string");
  return Pn(t) == "symbol" ? t : t + "";
}
function z2(e, t) {
  if (Pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function W2(e, t) {
  if (e == null) return {};
  var r = U2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function U2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function H2(e) {
  return e.value;
}
function K2(e, t) {
  if (/* @__PURE__ */ T.isValidElement(e))
    return /* @__PURE__ */ T.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ T.createElement(e, t);
  t.ref;
  var r = W2(t, N2);
  return /* @__PURE__ */ T.createElement(Bh, r);
}
var fb = 1, Ur = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    D2(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = L2(this, t, [].concat(a)), Ms(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return F2(t, e), R2(t, [{
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
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > fb || Math.abs(a.height - this.lastBoundingBox.height) > fb) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Zt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var a = this.props, i = a.layout, o = a.align, s = a.verticalAlign, u = a.margin, c = a.chartWidth, f = a.chartHeight, l, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && i === "vertical") {
          var p = this.getBBoxSnapshot();
          l = {
            left: ((c || 0) - p.width) / 2
          };
        } else
          l = o === "right" ? {
            right: u && u.right || 0
          } : {
            left: u && u.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var y = this.getBBoxSnapshot();
          d = {
            top: ((f || 0) - y.height) / 2
          };
        } else
          d = s === "bottom" ? {
            bottom: u && u.bottom || 0
          } : {
            top: u && u.top || 0
          };
      return Zt(Zt({}, l), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, s = a.height, u = a.wrapperStyle, c = a.payloadUniqBy, f = a.payload, l = Zt(Zt({
        position: "absolute",
        width: o || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(u)), u);
      return /* @__PURE__ */ T.createElement("div", {
        className: "recharts-legend-wrapper",
        style: l,
        ref: function(p) {
          n.wrapperNode = p;
        }
      }, K2(i, Zt(Zt({}, this.props), {}, {
        payload: wS(f, c, H2)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, a) {
      var i = Zt(Zt({}, this.defaultProps), n.props), o = i.layout;
      return o === "vertical" && V(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || a
      } : null;
    }
  }]);
})(Et);
Ms(Ur, "displayName", "Legend");
Ms(Ur, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Hl, db;
function V2() {
  if (db) return Hl;
  db = 1;
  var e = Mi(), t = Ph(), r = ot(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return r(i) || t(i) || !!(n && i && i[n]);
  }
  return Hl = a, Hl;
}
var Kl, pb;
function _S() {
  if (pb) return Kl;
  pb = 1;
  var e = DO(), t = V2();
  function r(n, a, i, o, s) {
    var u = -1, c = n.length;
    for (i || (i = t), s || (s = []); ++u < c; ) {
      var f = n[u];
      a > 0 && i(f) ? a > 1 ? r(f, a - 1, i, o, s) : e(s, f) : o || (s[s.length] = f);
    }
    return s;
  }
  return Kl = r, Kl;
}
var Vl, hb;
function G2() {
  if (hb) return Vl;
  hb = 1;
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
  return Vl = e, Vl;
}
var Gl, vb;
function Y2() {
  if (vb) return Gl;
  vb = 1;
  var e = G2(), t = e();
  return Gl = t, Gl;
}
var Yl, yb;
function AS() {
  if (yb) return Yl;
  yb = 1;
  var e = Y2(), t = As();
  function r(n, a) {
    return n && e(n, a, t);
  }
  return Yl = r, Yl;
}
var Xl, mb;
function X2() {
  if (mb) return Xl;
  mb = 1;
  var e = $i();
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
  return Xl = t, Xl;
}
var Zl, gb;
function Fh() {
  if (gb) return Zl;
  gb = 1;
  var e = AS(), t = X2(), r = t(e);
  return Zl = r, Zl;
}
var Jl, bb;
function PS() {
  if (bb) return Jl;
  bb = 1;
  var e = Fh(), t = $i();
  function r(n, a) {
    var i = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, u, c) {
      o[++i] = a(s, u, c);
    }), o;
  }
  return Jl = r, Jl;
}
var Ql, xb;
function Z2() {
  if (xb) return Ql;
  xb = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Ql = e, Ql;
}
var ef, wb;
function J2() {
  if (wb) return ef;
  wb = 1;
  var e = Qn();
  function t(r, n) {
    if (r !== n) {
      var a = r !== void 0, i = r === null, o = r === r, s = e(r), u = n !== void 0, c = n === null, f = n === n, l = e(n);
      if (!c && !l && !s && r > n || s && u && f && !c && !l || i && u && f || !a && f || !o)
        return 1;
      if (!i && !s && !l && r < n || l && a && o && !i && !s || c && a && o || !u && o || !f)
        return -1;
    }
    return 0;
  }
  return ef = t, ef;
}
var tf, Ob;
function Q2() {
  if (Ob) return tf;
  Ob = 1;
  var e = J2();
  function t(r, n, a) {
    for (var i = -1, o = r.criteria, s = n.criteria, u = o.length, c = a.length; ++i < u; ) {
      var f = e(o[i], s[i]);
      if (f) {
        if (i >= c)
          return f;
        var l = a[i];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return tf = t, tf;
}
var rf, Sb;
function e$() {
  if (Sb) return rf;
  Sb = 1;
  var e = $h(), t = Ih(), r = Xt(), n = PS(), a = Z2(), i = LO(), o = Q2(), s = ra(), u = ot();
  function c(f, l, d) {
    l.length ? l = e(l, function(h) {
      return u(h) ? function(v) {
        return t(v, h.length === 1 ? h[0] : h);
      } : h;
    }) : l = [s];
    var p = -1;
    l = e(l, i(r));
    var y = n(f, function(h, v, g) {
      var b = e(l, function(x) {
        return x(h);
      });
      return { criteria: b, index: ++p, value: h };
    });
    return a(y, function(h, v) {
      return o(h, v, d);
    });
  }
  return rf = c, rf;
}
var nf, _b;
function t$() {
  if (_b) return nf;
  _b = 1;
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
  return nf = e, nf;
}
var af, Ab;
function r$() {
  if (Ab) return af;
  Ab = 1;
  var e = t$(), t = Math.max;
  function r(n, a, i) {
    return a = t(a === void 0 ? n.length - 1 : a, 0), function() {
      for (var o = arguments, s = -1, u = t(o.length - a, 0), c = Array(u); ++s < u; )
        c[s] = o[a + s];
      s = -1;
      for (var f = Array(a + 1); ++s < a; )
        f[s] = o[s];
      return f[a] = i(c), e(n, this, f);
    };
  }
  return af = r, af;
}
var of, Pb;
function n$() {
  if (Pb) return of;
  Pb = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return of = e, of;
}
var sf, Eb;
function ES() {
  if (Eb) return sf;
  Eb = 1;
  var e = en(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return sf = t, sf;
}
var uf, Tb;
function a$() {
  if (Tb) return uf;
  Tb = 1;
  var e = n$(), t = ES(), r = ra(), n = t ? function(a, i) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : r;
  return uf = n, uf;
}
var cf, Cb;
function i$() {
  if (Cb) return cf;
  Cb = 1;
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
  return cf = n, cf;
}
var lf, jb;
function o$() {
  if (jb) return lf;
  jb = 1;
  var e = a$(), t = i$(), r = t(e);
  return lf = r, lf;
}
var ff, Mb;
function s$() {
  if (Mb) return ff;
  Mb = 1;
  var e = ra(), t = r$(), r = o$();
  function n(a, i) {
    return r(t(a, i, e), a + "");
  }
  return ff = n, ff;
}
var df, $b;
function $s() {
  if ($b) return df;
  $b = 1;
  var e = wh(), t = $i(), r = Eh(), n = Or();
  function a(i, o, s) {
    if (!n(s))
      return !1;
    var u = typeof o;
    return (u == "number" ? t(s) && r(o, s.length) : u == "string" && o in s) ? e(s[o], i) : !1;
  }
  return df = a, df;
}
var pf, Ib;
function u$() {
  if (Ib) return pf;
  Ib = 1;
  var e = _S(), t = e$(), r = s$(), n = $s(), a = r(function(i, o) {
    if (i == null)
      return [];
    var s = o.length;
    return s > 1 && n(i, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(i, e(o, 1), []);
  });
  return pf = a, pf;
}
var c$ = u$();
const zh = /* @__PURE__ */ xe(c$);
function Ka(e) {
  "@babel/helpers - typeof";
  return Ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ka(e);
}
function Wd() {
  return Wd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wd.apply(this, arguments);
}
function l$(e, t) {
  return h$(e) || p$(e, t) || d$(e, t) || f$();
}
function f$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d$(e, t) {
  if (e) {
    if (typeof e == "string") return kb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kb(e, t);
  }
}
function kb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function p$(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function h$(e) {
  if (Array.isArray(e)) return e;
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
function hf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nb(Object(r), !0).forEach(function(n) {
      v$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v$(e, t, r) {
  return t = y$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y$(e) {
  var t = m$(e, "string");
  return Ka(t) == "symbol" ? t : t + "";
}
function m$(e, t) {
  if (Ka(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ka(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g$(e) {
  return Array.isArray(e) && Fe(e[0]) && Fe(e[1]) ? e.join(" ~ ") : e;
}
var b$ = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, s = o === void 0 ? {} : o, u = t.labelStyle, c = u === void 0 ? {} : u, f = t.payload, l = t.formatter, d = t.itemSorter, p = t.wrapperClassName, y = t.labelClassName, h = t.label, v = t.labelFormatter, g = t.accessibilityLayer, b = g === void 0 ? !1 : g, x = function() {
    if (f && f.length) {
      var I = {
        padding: 0,
        margin: 0
      }, C = (d ? zh(f, d) : f).map(function(M, $) {
        if (M.type === "none")
          return null;
        var N = hf({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: M.color || "#000"
        }, s), R = M.formatter || l || g$, q = M.value, z = M.name, D = q, L = z;
        if (R && D != null && L != null) {
          var F = R(q, z, M, $, f);
          if (Array.isArray(F)) {
            var H = l$(F, 2);
            D = H[0], L = H[1];
          } else
            D = F;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ T.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat($),
            style: N
          }, Fe(L) ? /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, L) : null, Fe(L) ? /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, D), /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, M.unit || ""))
        );
      });
      return /* @__PURE__ */ T.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: I
      }, C);
    }
    return null;
  }, O = hf({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), m = hf({
    margin: 0
  }, c), w = !se(h), S = w ? h : "", A = le("recharts-default-tooltip", p), P = le("recharts-tooltip-label", y);
  w && v && f !== void 0 && f !== null && (S = v(h, f));
  var k = b ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ T.createElement("div", Wd({
    className: A,
    style: O
  }, k), /* @__PURE__ */ T.createElement("p", {
    className: P,
    style: m
  }, /* @__PURE__ */ T.isValidElement(S) ? S : "".concat(S)), x());
};
function Va(e) {
  "@babel/helpers - typeof";
  return Va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Va(e);
}
function Xi(e, t, r) {
  return t = x$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function x$(e) {
  var t = w$(e, "string");
  return Va(t) == "symbol" ? t : t + "";
}
function w$(e, t) {
  if (Va(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Va(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ya = "recharts-tooltip-wrapper", O$ = {
  visibility: "hidden"
};
function S$(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return le(ya, Xi(Xi(Xi(Xi({}, "".concat(ya, "-right"), V(r) && t && V(t.x) && r >= t.x), "".concat(ya, "-left"), V(r) && t && V(t.x) && r < t.x), "".concat(ya, "-bottom"), V(n) && t && V(t.y) && n >= t.y), "".concat(ya, "-top"), V(n) && t && V(t.y) && n < t.y));
}
function Db(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, a = e.offsetTopLeft, i = e.position, o = e.reverseDirection, s = e.tooltipDimension, u = e.viewBox, c = e.viewBoxDimension;
  if (i && V(i[n]))
    return i[n];
  var f = r[n] - s - a, l = r[n] + a;
  if (t[n])
    return o[n] ? f : l;
  if (o[n]) {
    var d = f, p = u[n];
    return d < p ? Math.max(l, u[n]) : Math.max(f, u[n]);
  }
  var y = l + s, h = u[n] + c;
  return y > h ? Math.max(f, u[n]) : Math.max(l, u[n]);
}
function _$(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function A$(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, u = e.viewBox, c, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = Db({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: u,
    viewBoxDimension: u.width
  }), l = Db({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: u,
    viewBoxDimension: u.height
  }), c = _$({
    translateX: f,
    translateY: l,
    useTranslate3d: s
  })) : c = O$, {
    cssProperties: c,
    cssClasses: S$({
      translateX: f,
      translateY: l,
      coordinate: r
    })
  };
}
function En(e) {
  "@babel/helpers - typeof";
  return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, En(e);
}
function Rb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rb(Object(r), !0).forEach(function(n) {
      Hd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function P$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function E$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, CS(n.key), n);
  }
}
function T$(e, t, r) {
  return t && E$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function C$(e, t, r) {
  return t = _o(t), j$(e, TS() ? Reflect.construct(t, r || [], _o(e).constructor) : t.apply(e, r));
}
function j$(e, t) {
  if (t && (En(t) === "object" || typeof t == "function"))
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
function _o(e) {
  return _o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _o(e);
}
function $$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ud(e, t);
}
function Ud(e, t) {
  return Ud = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ud(e, t);
}
function Hd(e, t, r) {
  return t = CS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CS(e) {
  var t = I$(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function I$(e, t) {
  if (En(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (En(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var qb = 1, k$ = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    P$(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = C$(this, t, [].concat(a)), Hd(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Hd(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, u, c, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (u = r.props.coordinate) === null || u === void 0 ? void 0 : u.x) !== null && s !== void 0 ? s : 0,
            y: (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return $$(t, e), T$(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > qb || Math.abs(n.height - this.state.lastBoundingBox.height) > qb) && this.setState({
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
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.children, f = a.coordinate, l = a.hasPayload, d = a.isAnimationActive, p = a.offset, y = a.position, h = a.reverseDirection, v = a.useTranslate3d, g = a.viewBox, b = a.wrapperStyle, x = A$({
        allowEscapeViewBox: o,
        coordinate: f,
        offsetTopLeft: p,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: g
      }), O = x.cssClasses, m = x.cssProperties, w = Lb(Lb({
        transition: d && i ? "transform ".concat(s, "ms ").concat(u) : void 0
      }, m), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && i && l ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, b);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ T.createElement("div", {
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
})(Et), N$ = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Sr = {
  isSsr: N$()
};
function Tn(e) {
  "@babel/helpers - typeof";
  return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tn(e);
}
function Bb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bb(Object(r), !0).forEach(function(n) {
      Wh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function D$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function R$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, MS(n.key), n);
  }
}
function L$(e, t, r) {
  return t && R$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function q$(e, t, r) {
  return t = Ao(t), B$(e, jS() ? Reflect.construct(t, r || [], Ao(e).constructor) : t.apply(e, r));
}
function B$(e, t) {
  if (t && (Tn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return F$(e);
}
function F$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jS = function() {
    return !!e;
  })();
}
function Ao(e) {
  return Ao = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ao(e);
}
function z$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Kd(e, t);
}
function Kd(e, t) {
  return Kd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Kd(e, t);
}
function Wh(e, t, r) {
  return t = MS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MS(e) {
  var t = W$(e, "string");
  return Tn(t) == "symbol" ? t : t + "";
}
function W$(e, t) {
  if (Tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function U$(e) {
  return e.dataKey;
}
function H$(e, t) {
  return /* @__PURE__ */ T.isValidElement(e) ? /* @__PURE__ */ T.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ T.createElement(e, t) : /* @__PURE__ */ T.createElement(b$, t);
}
var Ft = /* @__PURE__ */ (function(e) {
  function t() {
    return D$(this, t), q$(this, t, arguments);
  }
  return z$(t, e), L$(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.content, f = a.coordinate, l = a.filterNull, d = a.isAnimationActive, p = a.offset, y = a.payload, h = a.payloadUniqBy, v = a.position, g = a.reverseDirection, b = a.useTranslate3d, x = a.viewBox, O = a.wrapperStyle, m = y ?? [];
      l && m.length && (m = wS(y.filter(function(S) {
        return S.value != null && (S.hide !== !0 || n.props.includeHidden);
      }), h, U$));
      var w = m.length > 0;
      return /* @__PURE__ */ T.createElement(k$, {
        allowEscapeViewBox: o,
        animationDuration: s,
        animationEasing: u,
        isAnimationActive: d,
        active: i,
        coordinate: f,
        hasPayload: w,
        offset: p,
        position: v,
        reverseDirection: g,
        useTranslate3d: b,
        viewBox: x,
        wrapperStyle: O
      }, H$(c, Fb(Fb({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
})(Et);
Wh(Ft, "displayName", "Tooltip");
Wh(Ft, "defaultProps", {
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
  isAnimationActive: !Sr.isSsr,
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
var vf, zb;
function K$() {
  if (zb) return vf;
  zb = 1;
  var e = Yt(), t = function() {
    return e.Date.now();
  };
  return vf = t, vf;
}
var yf, Wb;
function V$() {
  if (Wb) return yf;
  Wb = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return yf = t, yf;
}
var mf, Ub;
function G$() {
  if (Ub) return mf;
  Ub = 1;
  var e = V$(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return mf = r, mf;
}
var gf, Hb;
function $S() {
  if (Hb) return gf;
  Hb = 1;
  var e = G$(), t = Or(), r = Qn(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
  function u(c) {
    if (typeof c == "number")
      return c;
    if (r(c))
      return n;
    if (t(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var l = i.test(c);
    return l || o.test(c) ? s(c.slice(2), l ? 2 : 8) : a.test(c) ? n : +c;
  }
  return gf = u, gf;
}
var bf, Kb;
function Y$() {
  if (Kb) return bf;
  Kb = 1;
  var e = Or(), t = K$(), r = $S(), n = "Expected a function", a = Math.max, i = Math.min;
  function o(s, u, c) {
    var f, l, d, p, y, h, v = 0, g = !1, b = !1, x = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    u = r(u) || 0, e(c) && (g = !!c.leading, b = "maxWait" in c, d = b ? a(r(c.maxWait) || 0, u) : d, x = "trailing" in c ? !!c.trailing : x);
    function O(C) {
      var M = f, $ = l;
      return f = l = void 0, v = C, p = s.apply($, M), p;
    }
    function m(C) {
      return v = C, y = setTimeout(A, u), g ? O(C) : p;
    }
    function w(C) {
      var M = C - h, $ = C - v, N = u - M;
      return b ? i(N, d - $) : N;
    }
    function S(C) {
      var M = C - h, $ = C - v;
      return h === void 0 || M >= u || M < 0 || b && $ >= d;
    }
    function A() {
      var C = t();
      if (S(C))
        return P(C);
      y = setTimeout(A, w(C));
    }
    function P(C) {
      return y = void 0, x && f ? O(C) : (f = l = void 0, p);
    }
    function k() {
      y !== void 0 && clearTimeout(y), v = 0, f = h = l = y = void 0;
    }
    function E() {
      return y === void 0 ? p : P(t());
    }
    function I() {
      var C = t(), M = S(C);
      if (f = arguments, l = this, h = C, M) {
        if (y === void 0)
          return m(h);
        if (b)
          return clearTimeout(y), y = setTimeout(A, u), O(h);
      }
      return y === void 0 && (y = setTimeout(A, u)), p;
    }
    return I.cancel = k, I.flush = E, I;
  }
  return bf = o, bf;
}
var xf, Vb;
function X$() {
  if (Vb) return xf;
  Vb = 1;
  var e = Y$(), t = Or(), r = "Expected a function";
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
  return xf = n, xf;
}
var Z$ = X$();
const IS = /* @__PURE__ */ xe(Z$);
function Ga(e) {
  "@babel/helpers - typeof";
  return Ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ga(e);
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
function Zi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gb(Object(r), !0).forEach(function(n) {
      J$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function J$(e, t, r) {
  return t = Q$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q$(e) {
  var t = eI(e, "string");
  return Ga(t) == "symbol" ? t : t + "";
}
function eI(e, t) {
  if (Ga(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ga(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tI(e, t) {
  return iI(e) || aI(e, t) || nI(e, t) || rI();
}
function rI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nI(e, t) {
  if (e) {
    if (typeof e == "string") return Yb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yb(e, t);
  }
}
function Yb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function aI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function iI(e) {
  if (Array.isArray(e)) return e;
}
var oI = /* @__PURE__ */ De(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, s = e.height, u = s === void 0 ? "100%" : s, c = e.minWidth, f = c === void 0 ? 0 : c, l = e.minHeight, d = e.maxHeight, p = e.children, y = e.debounce, h = y === void 0 ? 0 : y, v = e.id, g = e.className, b = e.onResize, x = e.style, O = x === void 0 ? {} : x, m = Vt(null), w = Vt();
  w.current = b, nE(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var S = Te({
    containerWidth: a.width,
    containerHeight: a.height
  }), A = tI(S, 2), P = A[0], k = A[1], E = rr(function(C, M) {
    k(function($) {
      var N = Math.round(C), R = Math.round(M);
      return $.containerWidth === N && $.containerHeight === R ? $ : {
        containerWidth: N,
        containerHeight: R
      };
    });
  }, []);
  Ue(function() {
    var C = function(z) {
      var D, L = z[0].contentRect, F = L.width, H = L.height;
      E(F, H), (D = w.current) === null || D === void 0 || D.call(w, F, H);
    };
    h > 0 && (C = IS(C, h, {
      trailing: !0,
      leading: !1
    }));
    var M = new ResizeObserver(C), $ = m.current.getBoundingClientRect(), N = $.width, R = $.height;
    return E(N, R), M.observe(m.current), function() {
      M.disconnect();
    };
  }, [E, h]);
  var I = Qe(function() {
    var C = P.containerWidth, M = P.containerHeight;
    if (C < 0 || M < 0)
      return null;
    Nt(Rr(o) || Rr(u), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, u), Nt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var $ = Rr(o) ? C : o, N = Rr(u) ? M : u;
    r && r > 0 && ($ ? N = $ / r : N && ($ = N * r), d && N > d && (N = d)), Nt($ > 0 || N > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, $, N, o, u, f, l, r);
    var R = !Array.isArray(p) && nr(p.type).endsWith("Chart");
    return T.Children.map(p, function(q) {
      return /* @__PURE__ */ T.isValidElement(q) ? /* @__PURE__ */ Le(q, Zi({
        width: $,
        height: N
      }, R ? {
        style: Zi({
          height: "100%",
          width: "100%",
          maxHeight: N,
          maxWidth: $
        }, q.props.style)
      } : {})) : q;
    });
  }, [r, p, u, d, l, f, P, o]);
  return /* @__PURE__ */ T.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: le("recharts-responsive-container", g),
    style: Zi(Zi({}, O), {}, {
      width: o,
      height: u,
      minWidth: f,
      minHeight: l,
      maxHeight: d
    }),
    ref: m
  }, I);
}), Is = function(t) {
  return null;
};
Is.displayName = "Cell";
function Ya(e) {
  "@babel/helpers - typeof";
  return Ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ya(e);
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
function Vd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xb(Object(r), !0).forEach(function(n) {
      sI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sI(e, t, r) {
  return t = uI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uI(e) {
  var t = cI(e, "string");
  return Ya(t) == "symbol" ? t : t + "";
}
function cI(e, t) {
  if (Ya(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ya(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cn = {
  widthCache: {},
  cacheCount: 0
}, lI = 2e3, fI = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Zb = "recharts_measurement_span";
function dI(e) {
  var t = Vd({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Ma = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Sr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = dI(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (cn.widthCache[a])
    return cn.widthCache[a];
  try {
    var i = document.getElementById(Zb);
    i || (i = document.createElement("span"), i.setAttribute("id", Zb), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = Vd(Vd({}, fI), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var s = i.getBoundingClientRect(), u = {
      width: s.width,
      height: s.height
    };
    return cn.widthCache[a] = u, ++cn.cacheCount > lI && (cn.cacheCount = 0, cn.widthCache = {}), u;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, pI = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function Xa(e) {
  "@babel/helpers - typeof";
  return Xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xa(e);
}
function Po(e, t) {
  return mI(e) || yI(e, t) || vI(e, t) || hI();
}
function hI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vI(e, t) {
  if (e) {
    if (typeof e == "string") return Jb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jb(e, t);
  }
}
function Jb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function mI(e) {
  if (Array.isArray(e)) return e;
}
function gI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xI(n.key), n);
  }
}
function bI(e, t, r) {
  return t && Qb(e.prototype, t), r && Qb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xI(e) {
  var t = wI(e, "string");
  return Xa(t) == "symbol" ? t : t + "";
}
function wI(e, t) {
  if (Xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var e0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, t0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, OI = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, SI = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, kS = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, _I = Object.keys(kS), hn = "NaN";
function AI(e, t) {
  return e * kS[t];
}
var Ji = /* @__PURE__ */ (function() {
  function e(t, r) {
    gI(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !OI.test(r) && (this.num = NaN, this.unit = ""), _I.includes(r) && (this.num = AI(t, r), this.unit = "px");
  }
  return bI(e, [{
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
      var n, a = (n = SI.exec(r)) !== null && n !== void 0 ? n : [], i = Po(a, 3), o = i[1], s = i[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
})();
function NS(e) {
  if (e.includes(hn))
    return hn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = e0.exec(t)) !== null && r !== void 0 ? r : [], a = Po(n, 4), i = a[1], o = a[2], s = a[3], u = Ji.parse(i ?? ""), c = Ji.parse(s ?? ""), f = o === "*" ? u.multiply(c) : u.divide(c);
    if (f.isNaN())
      return hn;
    t = t.replace(e0, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, d = (l = t0.exec(t)) !== null && l !== void 0 ? l : [], p = Po(d, 4), y = p[1], h = p[2], v = p[3], g = Ji.parse(y ?? ""), b = Ji.parse(v ?? ""), x = h === "+" ? g.add(b) : g.subtract(b);
    if (x.isNaN())
      return hn;
    t = t.replace(t0, x.toString());
  }
  return t;
}
var r0 = /\(([^()]*)\)/;
function PI(e) {
  for (var t = e; t.includes("("); ) {
    var r = r0.exec(t), n = Po(r, 2), a = n[1];
    t = t.replace(r0, NS(a));
  }
  return t;
}
function EI(e) {
  var t = e.replace(/\s+/g, "");
  return t = PI(t), t = NS(t), t;
}
function TI(e) {
  try {
    return EI(e);
  } catch {
    return hn;
  }
}
function wf(e) {
  var t = TI(e.slice(5, -1));
  return t === hn ? "" : t;
}
var CI = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], jI = ["dx", "dy", "angle", "className", "breakAll"];
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
function n0(e, t) {
  if (e == null) return {};
  var r = MI(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function MI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function a0(e, t) {
  return NI(e) || kI(e, t) || II(e, t) || $I();
}
function $I() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function II(e, t) {
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
function kI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function NI(e) {
  if (Array.isArray(e)) return e;
}
var DS = /[ \f\n\r\t\v\u2028\u2029]+/, RS = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    se(r) || (n ? i = r.toString().split("") : i = r.toString().split(DS));
    var o = i.map(function(u) {
      return {
        word: u,
        width: Ma(u, a).width
      };
    }), s = n ? 0 : Ma(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, DI = function(t, r, n, a, i) {
  var o = t.maxLines, s = t.children, u = t.style, c = t.breakAll, f = V(o), l = s, d = function() {
    var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return $.reduce(function(N, R) {
      var q = R.word, z = R.width, D = N[N.length - 1];
      if (D && (a == null || i || D.width + z + n < Number(a)))
        D.words.push(q), D.width += z + n;
      else {
        var L = {
          words: [q],
          width: z
        };
        N.push(L);
      }
      return N;
    }, []);
  }, p = d(r), y = function($) {
    return $.reduce(function(N, R) {
      return N.width > R.width ? N : R;
    });
  };
  if (!f)
    return p;
  for (var h = "…", v = function($) {
    var N = l.slice(0, $), R = RS({
      breakAll: c,
      style: u,
      children: N + h
    }).wordsWithComputedWidth, q = d(R), z = q.length > o || y(q).width > Number(a);
    return [z, q];
  }, g = 0, b = l.length - 1, x = 0, O; g <= b && x <= l.length - 1; ) {
    var m = Math.floor((g + b) / 2), w = m - 1, S = v(w), A = a0(S, 2), P = A[0], k = A[1], E = v(m), I = a0(E, 1), C = I[0];
    if (!P && !C && (g = m + 1), P && C && (b = m - 1), !P && C) {
      O = k;
      break;
    }
    x++;
  }
  return O || p;
}, o0 = function(t) {
  var r = se(t) ? [] : t.toString().split(DS);
  return [{
    words: r
  }];
}, RI = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Sr.isSsr) {
    var u, c, f = RS({
      breakAll: o,
      children: a,
      style: i
    });
    if (f) {
      var l = f.wordsWithComputedWidth, d = f.spaceWidth;
      u = l, c = d;
    } else
      return o0(a);
    return DI({
      breakAll: o,
      children: a,
      maxLines: s,
      style: i
    }, u, c, r, n);
  }
  return o0(a);
}, s0 = "#808080", wr = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, s = o === void 0 ? "1em" : o, u = t.capHeight, c = u === void 0 ? "0.71em" : u, f = t.scaleToFit, l = f === void 0 ? !1 : f, d = t.textAnchor, p = d === void 0 ? "start" : d, y = t.verticalAnchor, h = y === void 0 ? "end" : y, v = t.fill, g = v === void 0 ? s0 : v, b = n0(t, CI), x = Qe(function() {
    return RI({
      breakAll: b.breakAll,
      children: b.children,
      maxLines: b.maxLines,
      scaleToFit: l,
      style: b.style,
      width: b.width
    });
  }, [b.breakAll, b.children, b.maxLines, l, b.style, b.width]), O = b.dx, m = b.dy, w = b.angle, S = b.className, A = b.breakAll, P = n0(b, jI);
  if (!Fe(n) || !Fe(i))
    return null;
  var k = n + (V(O) ? O : 0), E = i + (V(m) ? m : 0), I;
  switch (h) {
    case "start":
      I = wf("calc(".concat(c, ")"));
      break;
    case "middle":
      I = wf("calc(".concat((x.length - 1) / 2, " * -").concat(s, " + (").concat(c, " / 2))"));
      break;
    default:
      I = wf("calc(".concat(x.length - 1, " * -").concat(s, ")"));
      break;
  }
  var C = [];
  if (l) {
    var M = x[0].width, $ = b.width;
    C.push("scale(".concat((V($) ? $ / M : 1) / M, ")"));
  }
  return w && C.push("rotate(".concat(w, ", ").concat(k, ", ").concat(E, ")")), C.length && (P.transform = C.join(" ")), /* @__PURE__ */ T.createElement("text", Gd({}, ae(P, !0), {
    x: k,
    y: E,
    className: le("recharts-text", S),
    textAnchor: p,
    fill: g.includes("url") ? s0 : g
  }), x.map(function(N, R) {
    var q = N.words.join(A ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ T.createElement("tspan", {
        x: k,
        dy: R === 0 ? I : s,
        key: "".concat(q, "-").concat(R)
      }, q)
    );
  }));
};
function xr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function LI(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Uh(e) {
  let t, r, n;
  e.length !== 2 ? (t = xr, r = (s, u) => xr(e(s), u), n = (s, u) => e(s) - u) : (t = e === xr || e === LI ? e : qI, r = e, n = e);
  function a(s, u, c = 0, f = s.length) {
    if (c < f) {
      if (t(u, u) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(s[l], u) < 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function i(s, u, c = 0, f = s.length) {
    if (c < f) {
      if (t(u, u) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(s[l], u) <= 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function o(s, u, c = 0, f = s.length) {
    const l = a(s, u, c, f - 1);
    return l > c && n(s[l - 1], u) > -n(s[l], u) ? l - 1 : l;
  }
  return { left: a, center: o, right: i };
}
function qI() {
  return 0;
}
function LS(e) {
  return e === null ? NaN : +e;
}
function* BI(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const FI = Uh(xr), ki = FI.right;
Uh(LS).center;
class u0 extends Map {
  constructor(t, r = UI) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(c0(this, t));
  }
  has(t) {
    return super.has(c0(this, t));
  }
  set(t, r) {
    return super.set(zI(this, t), r);
  }
  delete(t) {
    return super.delete(WI(this, t));
  }
}
function c0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function zI({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function WI({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function UI(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function HI(e = xr) {
  if (e === xr) return qS;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function qS(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const KI = Math.sqrt(50), VI = Math.sqrt(10), GI = Math.sqrt(2);
function Eo(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= KI ? 10 : i >= VI ? 5 : i >= GI ? 2 : 1;
  let s, u, c;
  return a < 0 ? (c = Math.pow(10, -a) / o, s = Math.round(e * c), u = Math.round(t * c), s / c < e && ++s, u / c > t && --u, c = -c) : (c = Math.pow(10, a) * o, s = Math.round(e / c), u = Math.round(t / c), s * c < e && ++s, u * c > t && --u), u < s && 0.5 <= r && r < 2 ? Eo(e, t, r * 2) : [s, u, c];
}
function Yd(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? Eo(t, e, r) : Eo(e, t, r);
  if (!(i >= a)) return [];
  const s = i - a + 1, u = new Array(s);
  if (n)
    if (o < 0) for (let c = 0; c < s; ++c) u[c] = (i - c) / -o;
    else for (let c = 0; c < s; ++c) u[c] = (i - c) * o;
  else if (o < 0) for (let c = 0; c < s; ++c) u[c] = (a + c) / -o;
  else for (let c = 0; c < s; ++c) u[c] = (a + c) * o;
  return u;
}
function Xd(e, t, r) {
  return t = +t, e = +e, r = +r, Eo(e, t, r)[2];
}
function Zd(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? Xd(t, e, r) : Xd(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function l0(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function f0(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function BS(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? qS : HI(a); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, f = Math.log(u), l = 0.5 * Math.exp(2 * f / 3), d = 0.5 * Math.sqrt(f * l * (u - l) / u) * (c - u / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * l / u + d)), y = Math.min(n, Math.floor(t + (u - c) * l / u + d));
      BS(e, t, p, y, a);
    }
    const i = e[t];
    let o = r, s = n;
    for (ma(e, r, t), a(e[n], i) > 0 && ma(e, r, n); o < s; ) {
      for (ma(e, o, s), ++o, --s; a(e[o], i) < 0; ) ++o;
      for (; a(e[s], i) > 0; ) --s;
    }
    a(e[r], i) === 0 ? ma(e, r, s) : (++s, ma(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function ma(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function YI(e, t, r) {
  if (e = Float64Array.from(BI(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return f0(e);
    if (t >= 1) return l0(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = l0(BS(e, i).subarray(0, i + 1)), s = f0(e.subarray(i + 1));
    return o + (s - o) * (a - i);
  }
}
function XI(e, t, r = LS) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
    return o + (s - o) * (a - i);
  }
}
function ZI(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(a); ++n < a; )
    i[n] = e + n * r;
  return i;
}
function Tt(e, t) {
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
function lr(e, t) {
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
const Jd = /* @__PURE__ */ Symbol("implicit");
function Hh() {
  var e = new u0(), t = [], r = [], n = Jd;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== Jd) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new u0();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return Hh(t, r).unknown(n);
  }, Tt.apply(a, arguments), a;
}
function Za() {
  var e = Hh().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, s = !1, u = 0, c = 0, f = 0.5;
  delete e.unknown;
  function l() {
    var d = t().length, p = a < n, y = p ? a : n, h = p ? n : a;
    i = (h - y) / Math.max(1, d - u + c * 2), s && (i = Math.floor(i)), y += (h - y - i * (d - u)) * f, o = i * (1 - u), s && (y = Math.round(y), o = Math.round(o));
    var v = ZI(d).map(function(g) {
      return y + i * g;
    });
    return r(p ? v.reverse() : v);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), l()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, a] = d, n = +n, a = +a, l()) : [n, a];
  }, e.rangeRound = function(d) {
    return [n, a] = d, n = +n, a = +a, s = !0, l();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(d) {
    return arguments.length ? (s = !!d, l()) : s;
  }, e.padding = function(d) {
    return arguments.length ? (u = Math.min(1, c = +d), l()) : u;
  }, e.paddingInner = function(d) {
    return arguments.length ? (u = Math.min(1, d), l()) : u;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, l()) : c;
  }, e.align = function(d) {
    return arguments.length ? (f = Math.max(0, Math.min(1, d)), l()) : f;
  }, e.copy = function() {
    return Za(t(), [n, a]).round(s).paddingInner(u).paddingOuter(c).align(f);
  }, Tt.apply(l(), arguments);
}
function FS(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return FS(t());
  }, e;
}
function $a() {
  return FS(Za.apply(null, arguments).paddingInner(1));
}
function Kh(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function zS(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Ni() {
}
var Ja = 0.7, To = 1 / Ja, xn = "\\s*([+-]?\\d+)\\s*", Qa = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ht = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", JI = /^#([0-9a-f]{3,8})$/, QI = new RegExp(`^rgb\\(${xn},${xn},${xn}\\)$`), ek = new RegExp(`^rgb\\(${Ht},${Ht},${Ht}\\)$`), tk = new RegExp(`^rgba\\(${xn},${xn},${xn},${Qa}\\)$`), rk = new RegExp(`^rgba\\(${Ht},${Ht},${Ht},${Qa}\\)$`), nk = new RegExp(`^hsl\\(${Qa},${Ht},${Ht}\\)$`), ak = new RegExp(`^hsla\\(${Qa},${Ht},${Ht},${Qa}\\)$`), d0 = {
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
Kh(Ni, ei, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: p0,
  // Deprecated! Use color.formatHex.
  formatHex: p0,
  formatHex8: ik,
  formatHsl: ok,
  formatRgb: h0,
  toString: h0
});
function p0() {
  return this.rgb().formatHex();
}
function ik() {
  return this.rgb().formatHex8();
}
function ok() {
  return WS(this).formatHsl();
}
function h0() {
  return this.rgb().formatRgb();
}
function ei(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = JI.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? v0(t) : r === 3 ? new nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Qi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Qi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = QI.exec(e)) ? new nt(t[1], t[2], t[3], 1) : (t = ek.exec(e)) ? new nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = tk.exec(e)) ? Qi(t[1], t[2], t[3], t[4]) : (t = rk.exec(e)) ? Qi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = nk.exec(e)) ? g0(t[1], t[2] / 100, t[3] / 100, 1) : (t = ak.exec(e)) ? g0(t[1], t[2] / 100, t[3] / 100, t[4]) : d0.hasOwnProperty(e) ? v0(d0[e]) : e === "transparent" ? new nt(NaN, NaN, NaN, 0) : null;
}
function v0(e) {
  return new nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Qi(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new nt(e, t, r, n);
}
function sk(e) {
  return e instanceof Ni || (e = ei(e)), e ? (e = e.rgb(), new nt(e.r, e.g, e.b, e.opacity)) : new nt();
}
function Qd(e, t, r, n) {
  return arguments.length === 1 ? sk(e) : new nt(e, t, r, n ?? 1);
}
function nt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Kh(nt, Qd, zS(Ni, {
  brighter(e) {
    return e = e == null ? To : Math.pow(To, e), new nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ja : Math.pow(Ja, e), new nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new nt(Hr(this.r), Hr(this.g), Hr(this.b), Co(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: y0,
  // Deprecated! Use color.formatHex.
  formatHex: y0,
  formatHex8: uk,
  formatRgb: m0,
  toString: m0
}));
function y0() {
  return `#${Lr(this.r)}${Lr(this.g)}${Lr(this.b)}`;
}
function uk() {
  return `#${Lr(this.r)}${Lr(this.g)}${Lr(this.b)}${Lr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function m0() {
  const e = Co(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Hr(this.r)}, ${Hr(this.g)}, ${Hr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Co(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Hr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Lr(e) {
  return e = Hr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function g0(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new $t(e, t, r, n);
}
function WS(e) {
  if (e instanceof $t) return new $t(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ni || (e = ei(e)), !e) return new $t();
  if (e instanceof $t) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, s = i - a, u = (i + a) / 2;
  return s ? (t === i ? o = (r - n) / s + (r < n) * 6 : r === i ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < 0.5 ? i + a : 2 - i - a, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new $t(o, s, u, e.opacity);
}
function ck(e, t, r, n) {
  return arguments.length === 1 ? WS(e) : new $t(e, t, r, n ?? 1);
}
function $t(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Kh($t, ck, zS(Ni, {
  brighter(e) {
    return e = e == null ? To : Math.pow(To, e), new $t(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ja : Math.pow(Ja, e), new $t(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new nt(
      Of(e >= 240 ? e - 240 : e + 120, a, n),
      Of(e, a, n),
      Of(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new $t(b0(this.h), eo(this.s), eo(this.l), Co(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Co(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${b0(this.h)}, ${eo(this.s) * 100}%, ${eo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function b0(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function eo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Of(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Vh = (e) => () => e;
function lk(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function fk(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function dk(e) {
  return (e = +e) == 1 ? US : function(t, r) {
    return r - t ? fk(t, r, e) : Vh(isNaN(t) ? r : t);
  };
}
function US(e, t) {
  var r = t - e;
  return r ? lk(e, r) : Vh(isNaN(e) ? t : e);
}
const x0 = (function e(t) {
  var r = dk(t);
  function n(a, i) {
    var o = r((a = Qd(a)).r, (i = Qd(i)).r), s = r(a.g, i.g), u = r(a.b, i.b), c = US(a.opacity, i.opacity);
    return function(f) {
      return a.r = o(f), a.g = s(f), a.b = u(f), a.opacity = c(f), a + "";
    };
  }
  return n.gamma = e, n;
})(1);
function pk(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function hk(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function vk(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = na(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) i[o] = a[o](s);
    return i;
  };
}
function yk(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function jo(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function mk(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = na(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var ep = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Sf = new RegExp(ep.source, "g");
function gk(e) {
  return function() {
    return e;
  };
}
function bk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function xk(e, t) {
  var r = ep.lastIndex = Sf.lastIndex = 0, n, a, i, o = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (n = ep.exec(e)) && (a = Sf.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (a = a[0]) ? s[o] ? s[o] += a : s[++o] = a : (s[++o] = null, u.push({ i: o, x: jo(n, a) })), r = Sf.lastIndex;
  return r < t.length && (i = t.slice(r), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? u[0] ? bk(u[0].x) : gk(t) : (t = u.length, function(c) {
    for (var f = 0, l; f < t; ++f) s[(l = u[f]).i] = l.x(c);
    return s.join("");
  });
}
function na(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Vh(t) : (r === "number" ? jo : r === "string" ? (n = ei(t)) ? (t = n, x0) : xk : t instanceof ei ? x0 : t instanceof Date ? yk : hk(t) ? pk : Array.isArray(t) ? vk : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? mk : jo)(e, t);
}
function Gh(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function wk(e, t) {
  t === void 0 && (t = e, e = na);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[s](o - s);
  };
}
function Ok(e) {
  return function() {
    return e;
  };
}
function Mo(e) {
  return +e;
}
var w0 = [0, 1];
function rt(e) {
  return e;
}
function tp(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Ok(isNaN(t) ? NaN : 0.5);
}
function Sk(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function _k(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = tp(a, n), i = r(o, i)) : (n = tp(n, a), i = r(i, o)), function(s) {
    return i(n(s));
  };
}
function Ak(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = tp(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(s) {
    var u = ki(e, s, 1, n) - 1;
    return i[u](a[u](s));
  };
}
function Di(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ks() {
  var e = w0, t = w0, r = na, n, a, i, o = rt, s, u, c;
  function f() {
    var d = Math.min(e.length, t.length);
    return o !== rt && (o = Sk(e[0], e[d - 1])), s = d > 2 ? Ak : _k, u = c = null, l;
  }
  function l(d) {
    return d == null || isNaN(d = +d) ? i : (u || (u = s(e.map(n), t, r)))(n(o(d)));
  }
  return l.invert = function(d) {
    return o(a((c || (c = s(t, e.map(n), jo)))(d)));
  }, l.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Mo), f()) : e.slice();
  }, l.range = function(d) {
    return arguments.length ? (t = Array.from(d), f()) : t.slice();
  }, l.rangeRound = function(d) {
    return t = Array.from(d), r = Gh, f();
  }, l.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : rt, f()) : o !== rt;
  }, l.interpolate = function(d) {
    return arguments.length ? (r = d, f()) : r;
  }, l.unknown = function(d) {
    return arguments.length ? (i = d, l) : i;
  }, function(d, p) {
    return n = d, a = p, f();
  };
}
function Yh() {
  return ks()(rt, rt);
}
function Pk(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function $o(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Cn(e) {
  return e = $o(Math.abs(e)), e ? e[1] : NaN;
}
function Ek(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, s = e[0], u = 0; a > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), i.push(r.substring(a -= s, a + s)), !((u += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function Tk(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Ck = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ti(e) {
  if (!(t = Ck.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Xh({
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
ti.prototype = Xh.prototype;
function Xh(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Xh.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function jk(e) {
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
var HS;
function Mk(e, t) {
  var r = $o(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (HS = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + $o(e, Math.max(0, t + i - 1))[0];
}
function O0(e, t) {
  var r = $o(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const S0 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Pk,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => O0(e * 100, t),
  r: O0,
  s: Mk,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function _0(e) {
  return e;
}
var A0 = Array.prototype.map, P0 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $k(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? _0 : Ek(A0.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? _0 : Tk(A0.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l) {
    l = ti(l);
    var d = l.fill, p = l.align, y = l.sign, h = l.symbol, v = l.zero, g = l.width, b = l.comma, x = l.precision, O = l.trim, m = l.type;
    m === "n" ? (b = !0, m = "g") : S0[m] || (x === void 0 && (x = 12), O = !0, m = "g"), (v || d === "0" && p === "=") && (v = !0, d = "0", p = "=");
    var w = h === "$" ? r : h === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", S = h === "$" ? n : /[%p]/.test(m) ? o : "", A = S0[m], P = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function k(E) {
      var I = w, C = S, M, $, N;
      if (m === "c")
        C = A(E) + C, E = "";
      else {
        E = +E;
        var R = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? u : A(Math.abs(E), x), O && (E = jk(E)), R && +E == 0 && y !== "+" && (R = !1), I = (R ? y === "(" ? y : s : y === "-" || y === "(" ? "" : y) + I, C = (m === "s" ? P0[8 + HS / 3] : "") + C + (R && y === "(" ? ")" : ""), P) {
          for (M = -1, $ = E.length; ++M < $; )
            if (N = E.charCodeAt(M), 48 > N || N > 57) {
              C = (N === 46 ? a + E.slice(M + 1) : E.slice(M)) + C, E = E.slice(0, M);
              break;
            }
        }
      }
      b && !v && (E = t(E, 1 / 0));
      var q = I.length + E.length + C.length, z = q < g ? new Array(g - q + 1).join(d) : "";
      switch (b && v && (E = t(z + E, z.length ? g - C.length : 1 / 0), z = ""), p) {
        case "<":
          E = I + E + C + z;
          break;
        case "=":
          E = I + z + E + C;
          break;
        case "^":
          E = z.slice(0, q = z.length >> 1) + I + E + C + z.slice(q);
          break;
        default:
          E = z + I + E + C;
          break;
      }
      return i(E);
    }
    return k.toString = function() {
      return l + "";
    }, k;
  }
  function f(l, d) {
    var p = c((l = ti(l), l.type = "f", l)), y = Math.max(-8, Math.min(8, Math.floor(Cn(d) / 3))) * 3, h = Math.pow(10, -y), v = P0[8 + y / 3];
    return function(g) {
      return p(h * g) + v;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var to, Zh, KS;
Ik({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ik(e) {
  return to = $k(e), Zh = to.format, KS = to.formatPrefix, to;
}
function kk(e) {
  return Math.max(0, -Cn(Math.abs(e)));
}
function Nk(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Cn(t) / 3))) * 3 - Cn(Math.abs(e)));
}
function Dk(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Cn(t) - Cn(e)) + 1;
}
function VS(e, t, r, n) {
  var a = Zd(e, t, r), i;
  switch (n = ti(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = Nk(a, o)) && (n.precision = i), KS(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = Dk(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = kk(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return Zh(n);
}
function _r(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Yd(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return VS(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], s = n[i], u, c, f = 10;
    for (s < o && (c = o, o = s, s = c, c = a, a = i, i = c); f-- > 0; ) {
      if (c = Xd(o, s, r), c === u)
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
function Io() {
  var e = Yh();
  return e.copy = function() {
    return Di(e, Io());
  }, Tt.apply(e, arguments), _r(e);
}
function GS(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Mo), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return GS(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Mo) : [0, 1], _r(r);
}
function YS(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function E0(e) {
  return Math.log(e);
}
function T0(e) {
  return Math.exp(e);
}
function Rk(e) {
  return -Math.log(-e);
}
function Lk(e) {
  return -Math.exp(-e);
}
function qk(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Bk(e) {
  return e === 10 ? qk : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Fk(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function C0(e) {
  return (t, r) => -e(-t, r);
}
function Jh(e) {
  const t = e(E0, T0), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = Fk(n), i = Bk(n), r()[0] < 0 ? (a = C0(a), i = C0(i), e(Rk, Lk)) : e(E0, T0), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = (s) => {
    const u = r();
    let c = u[0], f = u[u.length - 1];
    const l = f < c;
    l && ([c, f] = [f, c]);
    let d = a(c), p = a(f), y, h;
    const v = s == null ? 10 : +s;
    let g = [];
    if (!(n % 1) && p - d < v) {
      if (d = Math.floor(d), p = Math.ceil(p), c > 0) {
        for (; d <= p; ++d)
          for (y = 1; y < n; ++y)
            if (h = d < 0 ? y / i(-d) : y * i(d), !(h < c)) {
              if (h > f) break;
              g.push(h);
            }
      } else for (; d <= p; ++d)
        for (y = n - 1; y >= 1; --y)
          if (h = d > 0 ? y / i(-d) : y * i(d), !(h < c)) {
            if (h > f) break;
            g.push(h);
          }
      g.length * 2 < v && (g = Yd(c, f, v));
    } else
      g = Yd(d, p, Math.min(p - d, v)).map(i);
    return l ? g.reverse() : g;
  }, t.tickFormat = (s, u) => {
    if (s == null && (s = 10), u == null && (u = n === 10 ? "s" : ","), typeof u != "function" && (!(n % 1) && (u = ti(u)).precision == null && (u.trim = !0), u = Zh(u)), s === 1 / 0) return u;
    const c = Math.max(1, n * s / t.ticks().length);
    return (f) => {
      let l = f / i(Math.round(a(f)));
      return l * n < n - 0.5 && (l *= n), l <= c ? u(f) : "";
    };
  }, t.nice = () => r(YS(r(), {
    floor: (s) => i(Math.floor(a(s))),
    ceil: (s) => i(Math.ceil(a(s)))
  })), t;
}
function XS() {
  const e = Jh(ks()).domain([1, 10]);
  return e.copy = () => Di(e, XS()).base(e.base()), Tt.apply(e, arguments), e;
}
function j0(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function M0(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Qh(e) {
  var t = 1, r = e(j0(t), M0(t));
  return r.constant = function(n) {
    return arguments.length ? e(j0(t = +n), M0(t)) : t;
  }, _r(r);
}
function ZS() {
  var e = Qh(ks());
  return e.copy = function() {
    return Di(e, ZS()).constant(e.constant());
  }, Tt.apply(e, arguments);
}
function $0(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function zk(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Wk(e) {
  return e < 0 ? -e * e : e * e;
}
function ev(e) {
  var t = e(rt, rt), r = 1;
  function n() {
    return r === 1 ? e(rt, rt) : r === 0.5 ? e(zk, Wk) : e($0(r), $0(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, _r(t);
}
function tv() {
  var e = ev(ks());
  return e.copy = function() {
    return Di(e, tv()).exponent(e.exponent());
  }, Tt.apply(e, arguments), e;
}
function Uk() {
  return tv.apply(null, arguments).exponent(0.5);
}
function I0(e) {
  return Math.sign(e) * e * e;
}
function Hk(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function JS() {
  var e = Yh(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = Hk(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(I0(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, Mo)).map(I0)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return JS(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Tt.apply(a, arguments), _r(a);
}
function QS() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = XI(e, o / s);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[ki(r, o)];
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
    return e.sort(xr), a();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), a()) : t.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return QS().domain(e).range(t).unknown(n);
  }, Tt.apply(i, arguments);
}
function e_() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(u) {
    return u != null && u <= u ? a[ki(n, u, 0, r)] : i;
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
    return e_().domain([e, t]).range(a).unknown(i);
  }, Tt.apply(_r(o), arguments);
}
function t_() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[ki(e, i, 0, n)] : r;
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
    return t_().domain(e).range(t).unknown(r);
  }, Tt.apply(a, arguments);
}
const _f = /* @__PURE__ */ new Date(), Af = /* @__PURE__ */ new Date();
function ze(e, t, r, n) {
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
  }, a.filter = (i) => ze((o) => {
    if (o >= o) for (; e(o), !i(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; t(o, -1), !i(o); )
          ;
      else for (; --s >= 0; )
        for (; t(o, 1), !i(o); )
          ;
  }), r && (a.count = (i, o) => (_f.setTime(+i), Af.setTime(+o), e(_f), e(Af), Math.floor(r(_f, Af))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const ko = ze(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ko.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ze((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ko);
ko.range;
const Qt = 1e3, Ot = Qt * 60, er = Ot * 60, ir = er * 24, rv = ir * 7, k0 = ir * 30, Pf = ir * 365, qr = ze((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Qt);
}, (e, t) => (t - e) / Qt, (e) => e.getUTCSeconds());
qr.range;
const nv = ze((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Qt);
}, (e, t) => {
  e.setTime(+e + t * Ot);
}, (e, t) => (t - e) / Ot, (e) => e.getMinutes());
nv.range;
const av = ze((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ot);
}, (e, t) => (t - e) / Ot, (e) => e.getUTCMinutes());
av.range;
const iv = ze((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Qt - e.getMinutes() * Ot);
}, (e, t) => {
  e.setTime(+e + t * er);
}, (e, t) => (t - e) / er, (e) => e.getHours());
iv.range;
const ov = ze((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * er);
}, (e, t) => (t - e) / er, (e) => e.getUTCHours());
ov.range;
const Ri = ze(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ot) / ir,
  (e) => e.getDate() - 1
);
Ri.range;
const Ns = ze((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ir, (e) => e.getUTCDate() - 1);
Ns.range;
const r_ = ze((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ir, (e) => Math.floor(e / ir));
r_.range;
function rn(e) {
  return ze((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ot) / rv);
}
const Ds = rn(0), No = rn(1), Kk = rn(2), Vk = rn(3), jn = rn(4), Gk = rn(5), Yk = rn(6);
Ds.range;
No.range;
Kk.range;
Vk.range;
jn.range;
Gk.range;
Yk.range;
function nn(e) {
  return ze((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / rv);
}
const Rs = nn(0), Do = nn(1), Xk = nn(2), Zk = nn(3), Mn = nn(4), Jk = nn(5), Qk = nn(6);
Rs.range;
Do.range;
Xk.range;
Zk.range;
Mn.range;
Jk.range;
Qk.range;
const sv = ze((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
sv.range;
const uv = ze((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
uv.range;
const or = ze((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
or.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ze((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
or.range;
const sr = ze((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
sr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ze((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
sr.range;
function n_(e, t, r, n, a, i) {
  const o = [
    [qr, 1, Qt],
    [qr, 5, 5 * Qt],
    [qr, 15, 15 * Qt],
    [qr, 30, 30 * Qt],
    [i, 1, Ot],
    [i, 5, 5 * Ot],
    [i, 15, 15 * Ot],
    [i, 30, 30 * Ot],
    [a, 1, er],
    [a, 3, 3 * er],
    [a, 6, 6 * er],
    [a, 12, 12 * er],
    [n, 1, ir],
    [n, 2, 2 * ir],
    [r, 1, rv],
    [t, 1, k0],
    [t, 3, 3 * k0],
    [e, 1, Pf]
  ];
  function s(c, f, l) {
    const d = f < c;
    d && ([c, f] = [f, c]);
    const p = l && typeof l.range == "function" ? l : u(c, f, l), y = p ? p.range(c, +f + 1) : [];
    return d ? y.reverse() : y;
  }
  function u(c, f, l) {
    const d = Math.abs(f - c) / l, p = Uh(([, , v]) => v).right(o, d);
    if (p === o.length) return e.every(Zd(c / Pf, f / Pf, l));
    if (p === 0) return ko.every(Math.max(Zd(c, f, l), 1));
    const [y, h] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return y.every(h);
  }
  return [s, u];
}
const [eN, tN] = n_(sr, uv, Rs, r_, ov, av), [rN, nN] = n_(or, sv, Ds, Ri, iv, nv);
function Ef(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Tf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ga(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function aN(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, s = e.months, u = e.shortMonths, c = ba(a), f = xa(a), l = ba(i), d = xa(i), p = ba(o), y = xa(o), h = ba(s), v = xa(s), g = ba(u), b = xa(u), x = {
    a: R,
    A: q,
    b: z,
    B: D,
    c: null,
    d: B0,
    e: B0,
    f: EN,
    g: RN,
    G: qN,
    H: _N,
    I: AN,
    j: PN,
    L: a_,
    m: TN,
    M: CN,
    p: L,
    q: F,
    Q: W0,
    s: U0,
    S: jN,
    u: MN,
    U: $N,
    V: IN,
    w: kN,
    W: NN,
    x: null,
    X: null,
    y: DN,
    Y: LN,
    Z: BN,
    "%": z0
  }, O = {
    a: H,
    A: X,
    b: te,
    B: ne,
    c: null,
    d: F0,
    e: F0,
    f: UN,
    g: eD,
    G: rD,
    H: FN,
    I: zN,
    j: WN,
    L: o_,
    m: HN,
    M: KN,
    p: re,
    q: Q,
    Q: W0,
    s: U0,
    S: VN,
    u: GN,
    U: YN,
    V: XN,
    w: ZN,
    W: JN,
    x: null,
    X: null,
    y: QN,
    Y: tD,
    Z: nD,
    "%": z0
  }, m = {
    a: k,
    A: E,
    b: I,
    B: C,
    c: M,
    d: L0,
    e: L0,
    f: xN,
    g: R0,
    G: D0,
    H: q0,
    I: q0,
    j: yN,
    L: bN,
    m: vN,
    M: mN,
    p: P,
    q: hN,
    Q: ON,
    s: SN,
    S: gN,
    u: cN,
    U: lN,
    V: fN,
    w: uN,
    W: dN,
    x: $,
    X: N,
    y: R0,
    Y: D0,
    Z: pN,
    "%": wN
  };
  x.x = w(r, x), x.X = w(n, x), x.c = w(t, x), O.x = w(r, O), O.X = w(n, O), O.c = w(t, O);
  function w(W, G) {
    return function(Y) {
      var j = [], ee = -1, U = 0, ce = W.length, de, we, Ge;
      for (Y instanceof Date || (Y = /* @__PURE__ */ new Date(+Y)); ++ee < ce; )
        W.charCodeAt(ee) === 37 && (j.push(W.slice(U, ee)), (we = N0[de = W.charAt(++ee)]) != null ? de = W.charAt(++ee) : we = de === "e" ? " " : "0", (Ge = G[de]) && (de = Ge(Y, we)), j.push(de), U = ee + 1);
      return j.push(W.slice(U, ee)), j.join("");
    };
  }
  function S(W, G) {
    return function(Y) {
      var j = ga(1900, void 0, 1), ee = A(j, W, Y += "", 0), U, ce;
      if (ee != Y.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (G && !("Z" in j) && (j.Z = 0), "p" in j && (j.H = j.H % 12 + j.p * 12), j.m === void 0 && (j.m = "q" in j ? j.q : 0), "V" in j) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1), "Z" in j ? (U = Tf(ga(j.y, 0, 1)), ce = U.getUTCDay(), U = ce > 4 || ce === 0 ? Do.ceil(U) : Do(U), U = Ns.offset(U, (j.V - 1) * 7), j.y = U.getUTCFullYear(), j.m = U.getUTCMonth(), j.d = U.getUTCDate() + (j.w + 6) % 7) : (U = Ef(ga(j.y, 0, 1)), ce = U.getDay(), U = ce > 4 || ce === 0 ? No.ceil(U) : No(U), U = Ri.offset(U, (j.V - 1) * 7), j.y = U.getFullYear(), j.m = U.getMonth(), j.d = U.getDate() + (j.w + 6) % 7);
      } else ("W" in j || "U" in j) && ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0), ce = "Z" in j ? Tf(ga(j.y, 0, 1)).getUTCDay() : Ef(ga(j.y, 0, 1)).getDay(), j.m = 0, j.d = "W" in j ? (j.w + 6) % 7 + j.W * 7 - (ce + 5) % 7 : j.w + j.U * 7 - (ce + 6) % 7);
      return "Z" in j ? (j.H += j.Z / 100 | 0, j.M += j.Z % 100, Tf(j)) : Ef(j);
    };
  }
  function A(W, G, Y, j) {
    for (var ee = 0, U = G.length, ce = Y.length, de, we; ee < U; ) {
      if (j >= ce) return -1;
      if (de = G.charCodeAt(ee++), de === 37) {
        if (de = G.charAt(ee++), we = m[de in N0 ? G.charAt(ee++) : de], !we || (j = we(W, Y, j)) < 0) return -1;
      } else if (de != Y.charCodeAt(j++))
        return -1;
    }
    return j;
  }
  function P(W, G, Y) {
    var j = c.exec(G.slice(Y));
    return j ? (W.p = f.get(j[0].toLowerCase()), Y + j[0].length) : -1;
  }
  function k(W, G, Y) {
    var j = p.exec(G.slice(Y));
    return j ? (W.w = y.get(j[0].toLowerCase()), Y + j[0].length) : -1;
  }
  function E(W, G, Y) {
    var j = l.exec(G.slice(Y));
    return j ? (W.w = d.get(j[0].toLowerCase()), Y + j[0].length) : -1;
  }
  function I(W, G, Y) {
    var j = g.exec(G.slice(Y));
    return j ? (W.m = b.get(j[0].toLowerCase()), Y + j[0].length) : -1;
  }
  function C(W, G, Y) {
    var j = h.exec(G.slice(Y));
    return j ? (W.m = v.get(j[0].toLowerCase()), Y + j[0].length) : -1;
  }
  function M(W, G, Y) {
    return A(W, t, G, Y);
  }
  function $(W, G, Y) {
    return A(W, r, G, Y);
  }
  function N(W, G, Y) {
    return A(W, n, G, Y);
  }
  function R(W) {
    return o[W.getDay()];
  }
  function q(W) {
    return i[W.getDay()];
  }
  function z(W) {
    return u[W.getMonth()];
  }
  function D(W) {
    return s[W.getMonth()];
  }
  function L(W) {
    return a[+(W.getHours() >= 12)];
  }
  function F(W) {
    return 1 + ~~(W.getMonth() / 3);
  }
  function H(W) {
    return o[W.getUTCDay()];
  }
  function X(W) {
    return i[W.getUTCDay()];
  }
  function te(W) {
    return u[W.getUTCMonth()];
  }
  function ne(W) {
    return s[W.getUTCMonth()];
  }
  function re(W) {
    return a[+(W.getUTCHours() >= 12)];
  }
  function Q(W) {
    return 1 + ~~(W.getUTCMonth() / 3);
  }
  return {
    format: function(W) {
      var G = w(W += "", x);
      return G.toString = function() {
        return W;
      }, G;
    },
    parse: function(W) {
      var G = S(W += "", !1);
      return G.toString = function() {
        return W;
      }, G;
    },
    utcFormat: function(W) {
      var G = w(W += "", O);
      return G.toString = function() {
        return W;
      }, G;
    },
    utcParse: function(W) {
      var G = S(W += "", !0);
      return G.toString = function() {
        return W;
      }, G;
    }
  };
}
var N0 = { "-": "", _: " ", 0: "0" }, He = /^\s*\d+/, iN = /^%/, oN = /[\\^$*+?|[\]().{}]/g;
function pe(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function sN(e) {
  return e.replace(oN, "\\$&");
}
function ba(e) {
  return new RegExp("^(?:" + e.map(sN).join("|") + ")", "i");
}
function xa(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function uN(e, t, r) {
  var n = He.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function cN(e, t, r) {
  var n = He.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function lN(e, t, r) {
  var n = He.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function fN(e, t, r) {
  var n = He.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function dN(e, t, r) {
  var n = He.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function D0(e, t, r) {
  var n = He.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function R0(e, t, r) {
  var n = He.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function pN(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function hN(e, t, r) {
  var n = He.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function vN(e, t, r) {
  var n = He.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function L0(e, t, r) {
  var n = He.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function yN(e, t, r) {
  var n = He.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function q0(e, t, r) {
  var n = He.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function mN(e, t, r) {
  var n = He.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function gN(e, t, r) {
  var n = He.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function bN(e, t, r) {
  var n = He.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function xN(e, t, r) {
  var n = He.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function wN(e, t, r) {
  var n = iN.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function ON(e, t, r) {
  var n = He.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function SN(e, t, r) {
  var n = He.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function B0(e, t) {
  return pe(e.getDate(), t, 2);
}
function _N(e, t) {
  return pe(e.getHours(), t, 2);
}
function AN(e, t) {
  return pe(e.getHours() % 12 || 12, t, 2);
}
function PN(e, t) {
  return pe(1 + Ri.count(or(e), e), t, 3);
}
function a_(e, t) {
  return pe(e.getMilliseconds(), t, 3);
}
function EN(e, t) {
  return a_(e, t) + "000";
}
function TN(e, t) {
  return pe(e.getMonth() + 1, t, 2);
}
function CN(e, t) {
  return pe(e.getMinutes(), t, 2);
}
function jN(e, t) {
  return pe(e.getSeconds(), t, 2);
}
function MN(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function $N(e, t) {
  return pe(Ds.count(or(e) - 1, e), t, 2);
}
function i_(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? jn(e) : jn.ceil(e);
}
function IN(e, t) {
  return e = i_(e), pe(jn.count(or(e), e) + (or(e).getDay() === 4), t, 2);
}
function kN(e) {
  return e.getDay();
}
function NN(e, t) {
  return pe(No.count(or(e) - 1, e), t, 2);
}
function DN(e, t) {
  return pe(e.getFullYear() % 100, t, 2);
}
function RN(e, t) {
  return e = i_(e), pe(e.getFullYear() % 100, t, 2);
}
function LN(e, t) {
  return pe(e.getFullYear() % 1e4, t, 4);
}
function qN(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? jn(e) : jn.ceil(e), pe(e.getFullYear() % 1e4, t, 4);
}
function BN(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + pe(t / 60 | 0, "0", 2) + pe(t % 60, "0", 2);
}
function F0(e, t) {
  return pe(e.getUTCDate(), t, 2);
}
function FN(e, t) {
  return pe(e.getUTCHours(), t, 2);
}
function zN(e, t) {
  return pe(e.getUTCHours() % 12 || 12, t, 2);
}
function WN(e, t) {
  return pe(1 + Ns.count(sr(e), e), t, 3);
}
function o_(e, t) {
  return pe(e.getUTCMilliseconds(), t, 3);
}
function UN(e, t) {
  return o_(e, t) + "000";
}
function HN(e, t) {
  return pe(e.getUTCMonth() + 1, t, 2);
}
function KN(e, t) {
  return pe(e.getUTCMinutes(), t, 2);
}
function VN(e, t) {
  return pe(e.getUTCSeconds(), t, 2);
}
function GN(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function YN(e, t) {
  return pe(Rs.count(sr(e) - 1, e), t, 2);
}
function s_(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Mn(e) : Mn.ceil(e);
}
function XN(e, t) {
  return e = s_(e), pe(Mn.count(sr(e), e) + (sr(e).getUTCDay() === 4), t, 2);
}
function ZN(e) {
  return e.getUTCDay();
}
function JN(e, t) {
  return pe(Do.count(sr(e) - 1, e), t, 2);
}
function QN(e, t) {
  return pe(e.getUTCFullYear() % 100, t, 2);
}
function eD(e, t) {
  return e = s_(e), pe(e.getUTCFullYear() % 100, t, 2);
}
function tD(e, t) {
  return pe(e.getUTCFullYear() % 1e4, t, 4);
}
function rD(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Mn(e) : Mn.ceil(e), pe(e.getUTCFullYear() % 1e4, t, 4);
}
function nD() {
  return "+0000";
}
function z0() {
  return "%";
}
function W0(e) {
  return +e;
}
function U0(e) {
  return Math.floor(+e / 1e3);
}
var ln, u_, c_;
aD({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function aD(e) {
  return ln = aN(e), u_ = ln.format, ln.parse, c_ = ln.utcFormat, ln.utcParse, ln;
}
function iD(e) {
  return new Date(e);
}
function oD(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function cv(e, t, r, n, a, i, o, s, u, c) {
  var f = Yh(), l = f.invert, d = f.domain, p = c(".%L"), y = c(":%S"), h = c("%I:%M"), v = c("%I %p"), g = c("%a %d"), b = c("%b %d"), x = c("%B"), O = c("%Y");
  function m(w) {
    return (u(w) < w ? p : s(w) < w ? y : o(w) < w ? h : i(w) < w ? v : n(w) < w ? a(w) < w ? g : b : r(w) < w ? x : O)(w);
  }
  return f.invert = function(w) {
    return new Date(l(w));
  }, f.domain = function(w) {
    return arguments.length ? d(Array.from(w, oD)) : d().map(iD);
  }, f.ticks = function(w) {
    var S = d();
    return e(S[0], S[S.length - 1], w ?? 10);
  }, f.tickFormat = function(w, S) {
    return S == null ? m : c(S);
  }, f.nice = function(w) {
    var S = d();
    return (!w || typeof w.range != "function") && (w = t(S[0], S[S.length - 1], w ?? 10)), w ? d(YS(S, w)) : f;
  }, f.copy = function() {
    return Di(f, cv(e, t, r, n, a, i, o, s, u, c));
  }, f;
}
function sD() {
  return Tt.apply(cv(rN, nN, or, sv, Ds, Ri, iv, nv, qr, u_).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function uD() {
  return Tt.apply(cv(eN, tN, sr, uv, Rs, Ns, ov, av, qr, c_).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Ls() {
  var e = 0, t = 1, r, n, a, i, o = rt, s = !1, u;
  function c(l) {
    return l == null || isNaN(l = +l) ? u : o(a === 0 ? 0.5 : (l = (i(l) - r) * a, s ? Math.max(0, Math.min(1, l)) : l));
  }
  c.domain = function(l) {
    return arguments.length ? ([e, t] = l, r = i(e = +e), n = i(t = +t), a = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(l) {
    return arguments.length ? (s = !!l, c) : s;
  }, c.interpolator = function(l) {
    return arguments.length ? (o = l, c) : o;
  };
  function f(l) {
    return function(d) {
      var p, y;
      return arguments.length ? ([p, y] = d, o = l(p, y), c) : [o(0), o(1)];
    };
  }
  return c.range = f(na), c.rangeRound = f(Gh), c.unknown = function(l) {
    return arguments.length ? (u = l, c) : u;
  }, function(l) {
    return i = l, r = l(e), n = l(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function Ar(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function l_() {
  var e = _r(Ls()(rt));
  return e.copy = function() {
    return Ar(e, l_());
  }, lr.apply(e, arguments);
}
function f_() {
  var e = Jh(Ls()).domain([1, 10]);
  return e.copy = function() {
    return Ar(e, f_()).base(e.base());
  }, lr.apply(e, arguments);
}
function d_() {
  var e = Qh(Ls());
  return e.copy = function() {
    return Ar(e, d_()).constant(e.constant());
  }, lr.apply(e, arguments);
}
function lv() {
  var e = ev(Ls());
  return e.copy = function() {
    return Ar(e, lv()).exponent(e.exponent());
  }, lr.apply(e, arguments);
}
function cD() {
  return lv.apply(null, arguments).exponent(0.5);
}
function p_() {
  var e = [], t = rt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((ki(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let a of n) a != null && !isNaN(a = +a) && e.push(a);
    return e.sort(xr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, a) => t(a / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (a, i) => YI(e, i / n));
  }, r.copy = function() {
    return p_(t).domain(e);
  }, lr.apply(r, arguments);
}
function qs() {
  var e = 0, t = 0.5, r = 1, n = 1, a, i, o, s, u, c = rt, f, l = !1, d;
  function p(h) {
    return isNaN(h = +h) ? d : (h = 0.5 + ((h = +f(h)) - i) * (n * h < n * i ? s : u), c(l ? Math.max(0, Math.min(1, h)) : h));
  }
  p.domain = function(h) {
    return arguments.length ? ([e, t, r] = h, a = f(e = +e), i = f(t = +t), o = f(r = +r), s = a === i ? 0 : 0.5 / (i - a), u = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(h) {
    return arguments.length ? (l = !!h, p) : l;
  }, p.interpolator = function(h) {
    return arguments.length ? (c = h, p) : c;
  };
  function y(h) {
    return function(v) {
      var g, b, x;
      return arguments.length ? ([g, b, x] = v, c = wk(h, [g, b, x]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = y(na), p.rangeRound = y(Gh), p.unknown = function(h) {
    return arguments.length ? (d = h, p) : d;
  }, function(h) {
    return f = h, a = h(e), i = h(t), o = h(r), s = a === i ? 0 : 0.5 / (i - a), u = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function h_() {
  var e = _r(qs()(rt));
  return e.copy = function() {
    return Ar(e, h_());
  }, lr.apply(e, arguments);
}
function v_() {
  var e = Jh(qs()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Ar(e, v_()).base(e.base());
  }, lr.apply(e, arguments);
}
function y_() {
  var e = Qh(qs());
  return e.copy = function() {
    return Ar(e, y_()).constant(e.constant());
  }, lr.apply(e, arguments);
}
function fv() {
  var e = ev(qs());
  return e.copy = function() {
    return Ar(e, fv()).exponent(e.exponent());
  }, lr.apply(e, arguments);
}
function lD() {
  return fv.apply(null, arguments).exponent(0.5);
}
const H0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Za,
  scaleDiverging: h_,
  scaleDivergingLog: v_,
  scaleDivergingPow: fv,
  scaleDivergingSqrt: lD,
  scaleDivergingSymlog: y_,
  scaleIdentity: GS,
  scaleImplicit: Jd,
  scaleLinear: Io,
  scaleLog: XS,
  scaleOrdinal: Hh,
  scalePoint: $a,
  scalePow: tv,
  scaleQuantile: QS,
  scaleQuantize: e_,
  scaleRadial: JS,
  scaleSequential: l_,
  scaleSequentialLog: f_,
  scaleSequentialPow: lv,
  scaleSequentialQuantile: p_,
  scaleSequentialSqrt: cD,
  scaleSequentialSymlog: d_,
  scaleSqrt: Uk,
  scaleSymlog: ZS,
  scaleThreshold: t_,
  scaleTime: sD,
  scaleUtc: uD,
  tickFormat: VS
}, Symbol.toStringTag, { value: "Module" }));
var Cf, K0;
function Bs() {
  if (K0) return Cf;
  K0 = 1;
  var e = Qn();
  function t(r, n, a) {
    for (var i = -1, o = r.length; ++i < o; ) {
      var s = r[i], u = n(s);
      if (u != null && (c === void 0 ? u === u && !e(u) : a(u, c)))
        var c = u, f = s;
    }
    return f;
  }
  return Cf = t, Cf;
}
var jf, V0;
function m_() {
  if (V0) return jf;
  V0 = 1;
  function e(t, r) {
    return t > r;
  }
  return jf = e, jf;
}
var Mf, G0;
function fD() {
  if (G0) return Mf;
  G0 = 1;
  var e = Bs(), t = m_(), r = ra();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Mf = n, Mf;
}
var dD = fD();
const gr = /* @__PURE__ */ xe(dD);
var $f, Y0;
function g_() {
  if (Y0) return $f;
  Y0 = 1;
  function e(t, r) {
    return t < r;
  }
  return $f = e, $f;
}
var If, X0;
function pD() {
  if (X0) return If;
  X0 = 1;
  var e = Bs(), t = g_(), r = ra();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return If = n, If;
}
var hD = pD();
const Fs = /* @__PURE__ */ xe(hD);
var kf, Z0;
function vD() {
  if (Z0) return kf;
  Z0 = 1;
  var e = $h(), t = Xt(), r = PS(), n = ot();
  function a(i, o) {
    var s = n(i) ? e : r;
    return s(i, t(o, 3));
  }
  return kf = a, kf;
}
var Nf, J0;
function yD() {
  if (J0) return Nf;
  J0 = 1;
  var e = _S(), t = vD();
  function r(n, a) {
    return e(t(n, a), 1);
  }
  return Nf = r, Nf;
}
var mD = yD();
const gD = /* @__PURE__ */ xe(mD);
var aa = 1e9, bD = {
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
}, pv, Ee = !0, Pt = "[DecimalError] ", Kr = Pt + "Invalid argument: ", dv = Pt + "Exponent out of range: ", ia = Math.floor, Nr = Math.pow, xD = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, dt, We = 1e7, Pe = 7, b_ = 9007199254740991, Ro = ia(b_ / Pe), J = {};
J.absoluteValue = J.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
J.comparedTo = J.cmp = function(e) {
  var t, r, n, a, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, a = e.d.length, t = 0, r = n < a ? n : a; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === a ? 0 : n > a ^ i.s < 0 ? 1 : -1;
};
J.decimalPlaces = J.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Pe;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
J.dividedBy = J.div = function(e) {
  return ar(this, new this.constructor(e));
};
J.dividedToIntegerBy = J.idiv = function(e) {
  var t = this, r = t.constructor;
  return Oe(ar(t, new r(e), 0, 1), r.precision);
};
J.equals = J.eq = function(e) {
  return !this.cmp(e);
};
J.exponent = function() {
  return Ne(this);
};
J.greaterThan = J.gt = function(e) {
  return this.cmp(e) > 0;
};
J.greaterThanOrEqualTo = J.gte = function(e) {
  return this.cmp(e) >= 0;
};
J.isInteger = J.isint = function() {
  return this.e > this.d.length - 2;
};
J.isNegative = J.isneg = function() {
  return this.s < 0;
};
J.isPositive = J.ispos = function() {
  return this.s > 0;
};
J.isZero = function() {
  return this.s === 0;
};
J.lessThan = J.lt = function(e) {
  return this.cmp(e) < 0;
};
J.lessThanOrEqualTo = J.lte = function(e) {
  return this.cmp(e) < 1;
};
J.logarithm = J.log = function(e) {
  var t, r = this, n = r.constructor, a = n.precision, i = a + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(dt)) throw Error(Pt + "NaN");
  if (r.s < 1) throw Error(Pt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(dt) ? new n(0) : (Ee = !1, t = ar(ri(r, i), ri(e, i), i), Ee = !0, Oe(t, a));
};
J.minus = J.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? O_(t, e) : x_(t, (e.s = -e.s, e));
};
J.modulo = J.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(Pt + "NaN");
  return r.s ? (Ee = !1, t = ar(r, e, 0, 1).times(e), Ee = !0, r.minus(t)) : Oe(new n(r), a);
};
J.naturalExponential = J.exp = function() {
  return w_(this);
};
J.naturalLogarithm = J.ln = function() {
  return ri(this);
};
J.negated = J.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
J.plus = J.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? x_(t, e) : O_(t, (e.s = -e.s, e));
};
J.precision = J.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Kr + e);
  if (t = Ne(a) + 1, n = a.d.length - 1, r = n * Pe + 1, n = a.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
J.squareRoot = J.sqrt = function() {
  var e, t, r, n, a, i, o, s = this, u = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new u(0);
    throw Error(Pt + "NaN");
  }
  for (e = Ne(s), Ee = !1, a = Math.sqrt(+s), a == 0 || a == 1 / 0 ? (t = zt(s.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = ia((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(a.toString()), r = u.precision, a = o = r + 3; ; )
    if (i = n, n = i.plus(ar(s, i, o + 2)).times(0.5), zt(i.d).slice(0, o) === (t = zt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), a == o && t == "4999") {
        if (Oe(i, r + 1, 0), i.times(i).eq(s)) {
          n = i;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return Ee = !0, Oe(n, r);
};
J.times = J.mul = function(e) {
  var t, r, n, a, i, o, s, u, c, f = this, l = f.constructor, d = f.d, p = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (e.s *= f.s, r = f.e + e.e, u = d.length, c = p.length, u < c && (i = d, d = p, p = i, o = u, u = c, c = o), i = [], o = u + c, n = o; n--; ) i.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, a = u + n; a > n; )
      s = i[a] + p[n] * d[a - n - 1] + t, i[a--] = s % We | 0, t = s / We | 0;
    i[a] = (i[a] + t) % We | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, Ee ? Oe(e, l.precision) : e;
};
J.toDecimalPlaces = J.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Gt(e, 0, aa), t === void 0 ? t = n.rounding : Gt(t, 0, 8), Oe(r, e + Ne(r) + 1, t));
};
J.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = Zr(n, !0) : (Gt(e, 0, aa), t === void 0 ? t = a.rounding : Gt(t, 0, 8), n = Oe(new a(n), e + 1, t), r = Zr(n, !0, e + 1)), r;
};
J.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? Zr(a) : (Gt(e, 0, aa), t === void 0 ? t = i.rounding : Gt(t, 0, 8), n = Oe(new i(a), e + Ne(a) + 1, t), r = Zr(n.abs(), !1, e + Ne(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
J.toInteger = J.toint = function() {
  var e = this, t = e.constructor;
  return Oe(new t(e), Ne(e) + 1, t.rounding);
};
J.toNumber = function() {
  return +this;
};
J.toPower = J.pow = function(e) {
  var t, r, n, a, i, o, s = this, u = s.constructor, c = 12, f = +(e = new u(e));
  if (!e.s) return new u(dt);
  if (s = new u(s), !s.s) {
    if (e.s < 1) throw Error(Pt + "Infinity");
    return s;
  }
  if (s.eq(dt)) return s;
  if (n = u.precision, e.eq(dt)) return Oe(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = s.s, o) {
    if ((r = f < 0 ? -f : f) <= b_) {
      for (a = new u(dt), t = Math.ceil(n / Pe + 4), Ee = !1; r % 2 && (a = a.times(s), ex(a.d, t)), r = ia(r / 2), r !== 0; )
        s = s.times(s), ex(s.d, t);
      return Ee = !0, e.s < 0 ? new u(dt).div(a) : Oe(a, n);
    }
  } else if (i < 0) throw Error(Pt + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ee = !1, a = e.times(ri(s, n + c)), Ee = !0, a = w_(a), a.s = i, a;
};
J.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = Ne(a), n = Zr(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Gt(e, 1, aa), t === void 0 ? t = i.rounding : Gt(t, 0, 8), a = Oe(new i(a), e, t), r = Ne(a), n = Zr(a, e <= r || r <= i.toExpNeg, e)), n;
};
J.toSignificantDigits = J.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Gt(e, 1, aa), t === void 0 ? t = n.rounding : Gt(t, 0, 8)), Oe(new n(r), e, t);
};
J.toString = J.valueOf = J.val = J.toJSON = J[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Ne(e), r = e.constructor;
  return Zr(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function x_(e, t) {
  var r, n, a, i, o, s, u, c, f = e.constructor, l = f.precision;
  if (!e.s || !t.s)
    return t.s || (t = new f(e)), Ee ? Oe(t, l) : t;
  if (u = e.d, c = t.d, o = e.e, a = t.e, u = u.slice(), i = o - a, i) {
    for (i < 0 ? (n = u, i = -i, s = c.length) : (n = c, a = o, s = u.length), o = Math.ceil(l / Pe), s = o > s ? o + 1 : s + 1, i > s && (i = s, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (s = u.length, i = c.length, s - i < 0 && (i = s, n = c, c = u, u = n), r = 0; i; )
    r = (u[--i] = u[i] + c[i] + r) / We | 0, u[i] %= We;
  for (r && (u.unshift(r), ++a), s = u.length; u[--s] == 0; ) u.pop();
  return t.d = u, t.e = a, Ee ? Oe(t, l) : t;
}
function Gt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Kr + e);
}
function zt(e) {
  var t, r, n, a = e.length - 1, i = "", o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      n = e[t] + "", r = Pe - n.length, r && (i += yr(r)), i += n;
    o = e[t], n = o + "", r = Pe - n.length, r && (i += yr(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var ar = /* @__PURE__ */ (function() {
  function e(n, a) {
    var i, o = 0, s = n.length;
    for (n = n.slice(); s--; )
      i = n[s] * a + o, n[s] = i % We | 0, o = i / We | 0;
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
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * We + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var s, u, c, f, l, d, p, y, h, v, g, b, x, O, m, w, S, A, P = n.constructor, k = n.s == a.s ? 1 : -1, E = n.d, I = a.d;
    if (!n.s) return new P(n);
    if (!a.s) throw Error(Pt + "Division by zero");
    for (u = n.e - a.e, S = I.length, m = E.length, p = new P(k), y = p.d = [], c = 0; I[c] == (E[c] || 0); ) ++c;
    if (I[c] > (E[c] || 0) && --u, i == null ? b = i = P.precision : o ? b = i + (Ne(n) - Ne(a)) + 1 : b = i, b < 0) return new P(0);
    if (b = b / Pe + 2 | 0, c = 0, S == 1)
      for (f = 0, I = I[0], b++; (c < m || f) && b--; c++)
        x = f * We + (E[c] || 0), y[c] = x / I | 0, f = x % I | 0;
    else {
      for (f = We / (I[0] + 1) | 0, f > 1 && (I = e(I, f), E = e(E, f), S = I.length, m = E.length), O = S, h = E.slice(0, S), v = h.length; v < S; ) h[v++] = 0;
      A = I.slice(), A.unshift(0), w = I[0], I[1] >= We / 2 && ++w;
      do
        f = 0, s = t(I, h, S, v), s < 0 ? (g = h[0], S != v && (g = g * We + (h[1] || 0)), f = g / w | 0, f > 1 ? (f >= We && (f = We - 1), l = e(I, f), d = l.length, v = h.length, s = t(l, h, d, v), s == 1 && (f--, r(l, S < d ? A : I, d))) : (f == 0 && (s = f = 1), l = I.slice()), d = l.length, d < v && l.unshift(0), r(h, l, v), s == -1 && (v = h.length, s = t(I, h, S, v), s < 1 && (f++, r(h, S < v ? A : I, v))), v = h.length) : s === 0 && (f++, h = [0]), y[c++] = f, s && h[0] ? h[v++] = E[O] || 0 : (h = [E[O]], v = 1);
      while ((O++ < m || h[0] !== void 0) && b--);
    }
    return y[0] || y.shift(), p.e = u, Oe(p, o ? i + Ne(p) + 1 : i);
  };
})();
function w_(e, t) {
  var r, n, a, i, o, s, u = 0, c = 0, f = e.constructor, l = f.precision;
  if (Ne(e) > 16) throw Error(dv + Ne(e));
  if (!e.s) return new f(dt);
  for (Ee = !1, s = l, o = new f(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(Nr(2, c)) / Math.LN10 * 2 + 5 | 0, s += n, r = a = i = new f(dt), f.precision = s; ; ) {
    if (a = Oe(a.times(e), s), r = r.times(++u), o = i.plus(ar(a, r, s)), zt(o.d).slice(0, s) === zt(i.d).slice(0, s)) {
      for (; c--; ) i = Oe(i.times(i), s);
      return f.precision = l, t == null ? (Ee = !0, Oe(i, l)) : i;
    }
    i = o;
  }
}
function Ne(e) {
  for (var t = e.e * Pe, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Df(e, t, r) {
  if (t > e.LN10.sd())
    throw Ee = !0, r && (e.precision = r), Error(Pt + "LN10 precision limit exceeded");
  return Oe(new e(e.LN10), t);
}
function yr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function ri(e, t) {
  var r, n, a, i, o, s, u, c, f, l = 1, d = 10, p = e, y = p.d, h = p.constructor, v = h.precision;
  if (p.s < 1) throw Error(Pt + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(dt)) return new h(0);
  if (t == null ? (Ee = !1, c = v) : c = t, p.eq(10))
    return t == null && (Ee = !0), Df(h, c);
  if (c += d, h.precision = c, r = zt(y), n = r.charAt(0), i = Ne(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = zt(p.d), n = r.charAt(0), l++;
    i = Ne(p), n > 1 ? (p = new h("0." + r), i++) : p = new h(n + "." + r.slice(1));
  } else
    return u = Df(h, c + 2, v).times(i + ""), p = ri(new h(n + "." + r.slice(1)), c - d).plus(u), h.precision = v, t == null ? (Ee = !0, Oe(p, v)) : p;
  for (s = o = p = ar(p.minus(dt), p.plus(dt), c), f = Oe(p.times(p), c), a = 3; ; ) {
    if (o = Oe(o.times(f), c), u = s.plus(ar(o, new h(a), c)), zt(u.d).slice(0, c) === zt(s.d).slice(0, c))
      return s = s.times(2), i !== 0 && (s = s.plus(Df(h, c + 2, v).times(i + ""))), s = ar(s, new h(l), c), h.precision = v, t == null ? (Ee = !0, Oe(s, v)) : s;
    s = u, a += 2;
  }
}
function Q0(e, t) {
  var r, n, a;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (t = t.slice(n, a), t) {
    if (a -= n, r = r - n - 1, e.e = ia(r / Pe), e.d = [], n = (r + 1) % Pe, r < 0 && (n += Pe), n < a) {
      for (n && e.d.push(+t.slice(0, n)), a -= Pe; n < a; ) e.d.push(+t.slice(n, n += Pe));
      t = t.slice(n), n = Pe - t.length;
    } else
      n -= a;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Ee && (e.e > Ro || e.e < -Ro)) throw Error(dv + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Oe(e, t, r) {
  var n, a, i, o, s, u, c, f, l = e.d;
  for (o = 1, i = l[0]; i >= 10; i /= 10) o++;
  if (n = t - o, n < 0)
    n += Pe, a = t, c = l[f = 0];
  else {
    if (f = Math.ceil((n + 1) / Pe), i = l.length, f >= i) return e;
    for (c = i = l[f], o = 1; i >= 10; i /= 10) o++;
    n %= Pe, a = n - Pe + o;
  }
  if (r !== void 0 && (i = Nr(10, o - a - 1), s = c / i % 10 | 0, u = t < 0 || l[f + 1] !== void 0 || c % i, u = r < 4 ? (s || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || u || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? c / Nr(10, o - a) : 0 : l[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !l[0])
    return u ? (i = Ne(e), l.length = 1, t = t - i - 1, l[0] = Nr(10, (Pe - t % Pe) % Pe), e.e = ia(-t / Pe) || 0) : (l.length = 1, l[0] = e.e = e.s = 0), e;
  if (n == 0 ? (l.length = f, i = 1, f--) : (l.length = f + 1, i = Nr(10, Pe - n), l[f] = a > 0 ? (c / Nr(10, o - a) % Nr(10, a) | 0) * i : 0), u)
    for (; ; )
      if (f == 0) {
        (l[0] += i) == We && (l[0] = 1, ++e.e);
        break;
      } else {
        if (l[f] += i, l[f] != We) break;
        l[f--] = 0, i = 1;
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (Ee && (e.e > Ro || e.e < -Ro))
    throw Error(dv + Ne(e));
  return e;
}
function O_(e, t) {
  var r, n, a, i, o, s, u, c, f, l, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), Ee ? Oe(t, p) : t;
  if (u = e.d, l = t.d, n = t.e, c = e.e, u = u.slice(), o = c - n, o) {
    for (f = o < 0, f ? (r = u, o = -o, s = l.length) : (r = l, n = c, s = u.length), a = Math.max(Math.ceil(p / Pe), s) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; ) r.push(0);
    r.reverse();
  } else {
    for (a = u.length, s = l.length, f = a < s, f && (s = a), a = 0; a < s; a++)
      if (u[a] != l[a]) {
        f = u[a] < l[a];
        break;
      }
    o = 0;
  }
  for (f && (r = u, u = l, l = r, t.s = -t.s), s = u.length, a = l.length - s; a > 0; --a) u[s++] = 0;
  for (a = l.length; a > o; ) {
    if (u[--a] < l[a]) {
      for (i = a; i && u[--i] === 0; ) u[i] = We - 1;
      --u[i], u[a] += We;
    }
    u[a] -= l[a];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? (t.d = u, t.e = n, Ee ? Oe(t, p) : t) : new d(0);
}
function Zr(e, t, r) {
  var n, a = Ne(e), i = zt(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + yr(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + yr(-a - 1) + i, r && (n = r - o) > 0 && (i += yr(n))) : a >= o ? (i += yr(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + yr(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += yr(n))), e.s < 0 ? "-" + i : i;
}
function ex(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function S_(e) {
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
        throw Error(Kr + i);
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
      return Q0(o, i.toString());
    } else if (typeof i != "string")
      throw Error(Kr + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, xD.test(i)) Q0(o, i);
    else throw Error(Kr + i);
  }
  if (a.prototype = J, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = S_, a.config = a.set = wD, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function wD(e) {
  if (!e || typeof e != "object")
    throw Error(Pt + "Object expected");
  var t, r, n, a = [
    "precision",
    1,
    aa,
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
      if (ia(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(Kr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Kr + r + ": " + n);
  return this;
}
var pv = S_(bD);
dt = new pv(1);
const be = pv;
function OD(e) {
  return PD(e) || AD(e) || _D(e) || SD();
}
function SD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _D(e, t) {
  if (e) {
    if (typeof e == "string") return rp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rp(e, t);
  }
}
function AD(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function PD(e) {
  if (Array.isArray(e)) return rp(e);
}
function rp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var ED = function(t) {
  return t;
}, __ = {}, A_ = function(t) {
  return t === __;
}, tx = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && A_(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, TD = function e(t, r) {
  return t === 1 ? r : tx(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(s) {
      return s !== __;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, tx(function() {
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      var f = a.map(function(l) {
        return A_(l) ? u.shift() : l;
      });
      return r.apply(void 0, OD(f).concat(u));
    }));
  });
}, zs = function(t) {
  return TD(t.length, t);
}, np = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, CD = zs(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), jD = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return ED;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(s, u) {
      return u(s);
    }, i.apply(void 0, arguments));
  };
}, ap = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, P_ = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(s, u) {
      return s === r[u];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function MD(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new be(e).abs().log(10).toNumber()) + 1, t;
}
function $D(e, t, r) {
  for (var n = new be(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var ID = zs(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), kD = zs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), ND = zs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Ws = {
  rangeStep: $D,
  getDigitCount: MD,
  interpolateNumber: ID,
  uninterpolateNumber: kD,
  uninterpolateTruncation: ND
};
function ip(e) {
  return LD(e) || RD(e) || E_(e) || DD();
}
function DD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RD(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function LD(e) {
  if (Array.isArray(e)) return op(e);
}
function ni(e, t) {
  return FD(e) || BD(e, t) || E_(e, t) || qD();
}
function qD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E_(e, t) {
  if (e) {
    if (typeof e == "string") return op(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return op(e, t);
  }
}
function op(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function BD(e, t) {
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
function FD(e) {
  if (Array.isArray(e)) return e;
}
function T_(e) {
  var t = ni(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function C_(e, t, r) {
  if (e.lte(0))
    return new be(0);
  var n = Ws.getDigitCount(e.toNumber()), a = new be(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, s = new be(Math.ceil(i.div(o).toNumber())).add(r).mul(o), u = s.mul(a);
  return t ? u : new be(Math.ceil(u));
}
function zD(e, t, r) {
  var n = 1, a = new be(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new be(10).pow(Ws.getDigitCount(e) - 1), a = new be(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new be(Math.floor(e)));
  } else e === 0 ? a = new be(Math.floor((t - 1) / 2)) : r || (a = new be(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = jD(CD(function(u) {
    return a.add(new be(u - o).mul(n)).toNumber();
  }), np);
  return s(0, t);
}
function j_(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new be(0),
      tickMin: new be(0),
      tickMax: new be(0)
    };
  var i = C_(new be(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new be(0) : (o = new be(e).add(t).div(2), o = o.sub(new be(o).mod(i)));
  var s = Math.ceil(o.sub(e).div(i).toNumber()), u = Math.ceil(new be(t).sub(o).div(i).toNumber()), c = s + u + 1;
  return c > r ? j_(e, t, r, n, a + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, s = t > 0 ? s : s + (r - c)), {
    step: i,
    tickMin: o.sub(new be(s).mul(i)),
    tickMax: o.add(new be(u).mul(i))
  });
}
function WD(e) {
  var t = ni(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), s = T_([r, n]), u = ni(s, 2), c = u[0], f = u[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [c].concat(ip(np(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(ip(np(0, a - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? ap(l) : l;
  }
  if (c === f)
    return zD(c, a, i);
  var d = j_(c, f, o, i), p = d.step, y = d.tickMin, h = d.tickMax, v = Ws.rangeStep(y, h.add(new be(0.1).mul(p)), p);
  return r > n ? ap(v) : v;
}
function UD(e, t) {
  var r = ni(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = T_([n, a]), s = ni(o, 2), u = s[0], c = s[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (u === c)
    return [u];
  var f = Math.max(t, 2), l = C_(new be(c).sub(u).div(f - 1), i, 0), d = [].concat(ip(Ws.rangeStep(new be(u), new be(c).sub(new be(0.99).mul(l)), l)), [c]);
  return n > a ? ap(d) : d;
}
var HD = P_(WD), KD = P_(UD), VD = process.env.NODE_ENV === "production", Rf = "Invariant failed";
function at(e, t) {
  if (VD)
    throw new Error(Rf);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Rf, ": ").concat(r) : Rf;
  throw new Error(n);
}
var GD = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function $n(e) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $n(e);
}
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lo.apply(this, arguments);
}
function YD(e, t) {
  return QD(e) || JD(e, t) || ZD(e, t) || XD();
}
function XD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZD(e, t) {
  if (e) {
    if (typeof e == "string") return rx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rx(e, t);
  }
}
function rx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function JD(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function QD(e) {
  if (Array.isArray(e)) return e;
}
function eR(e, t) {
  if (e == null) return {};
  var r = tR(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function rR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, I_(n.key), n);
  }
}
function aR(e, t, r) {
  return t && nR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function iR(e, t, r) {
  return t = qo(t), oR(e, M_() ? Reflect.construct(t, r || [], qo(e).constructor) : t.apply(e, r));
}
function oR(e, t) {
  if (t && ($n(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sR(e);
}
function sR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function M_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (M_ = function() {
    return !!e;
  })();
}
function qo(e) {
  return qo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qo(e);
}
function uR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sp(e, t);
}
function sp(e, t) {
  return sp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, sp(e, t);
}
function $_(e, t, r) {
  return t = I_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I_(e) {
  var t = cR(e, "string");
  return $n(t) == "symbol" ? t : t + "";
}
function cR(e, t) {
  if ($n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Li = /* @__PURE__ */ (function(e) {
  function t() {
    return rR(this, t), iR(this, t, arguments);
  }
  return uR(t, e), aR(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, s = n.dataKey, u = n.data, c = n.dataPointFormatter, f = n.xAxis, l = n.yAxis, d = eR(n, GD), p = ae(d, !1);
      this.props.direction === "x" && f.type !== "number" && (process.env.NODE_ENV !== "production" ? at(!1, 'ErrorBar requires Axis type property to be "number".') : at());
      var y = u.map(function(h) {
        var v = c(h, s), g = v.x, b = v.y, x = v.value, O = v.errorVal;
        if (!O)
          return null;
        var m = [], w, S;
        if (Array.isArray(O)) {
          var A = YD(O, 2);
          w = A[0], S = A[1];
        } else
          w = S = O;
        if (i === "vertical") {
          var P = f.scale, k = b + a, E = k + o, I = k - o, C = P(x - w), M = P(x + S);
          m.push({
            x1: M,
            y1: E,
            x2: M,
            y2: I
          }), m.push({
            x1: C,
            y1: k,
            x2: M,
            y2: k
          }), m.push({
            x1: C,
            y1: E,
            x2: C,
            y2: I
          });
        } else if (i === "horizontal") {
          var $ = l.scale, N = g + a, R = N - o, q = N + o, z = $(x - w), D = $(x + S);
          m.push({
            x1: R,
            y1: D,
            x2: q,
            y2: D
          }), m.push({
            x1: N,
            y1: z,
            x2: N,
            y2: D
          }), m.push({
            x1: R,
            y1: z,
            x2: q,
            y2: z
          });
        }
        return /* @__PURE__ */ T.createElement(fe, Lo({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(L) {
            return "".concat(L.x1, "-").concat(L.x2, "-").concat(L.y1, "-").concat(L.y2);
          }))
        }, p), m.map(function(L) {
          return /* @__PURE__ */ T.createElement("line", Lo({}, L, {
            key: "line-".concat(L.x1, "-").concat(L.x2, "-").concat(L.y1, "-").concat(L.y2)
          }));
        }));
      });
      return /* @__PURE__ */ T.createElement(fe, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
})(T.Component);
$_(Li, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
$_(Li, "displayName", "ErrorBar");
function ai(e) {
  "@babel/helpers - typeof";
  return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ai(e);
}
function nx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nx(Object(r), !0).forEach(function(n) {
      lR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lR(e, t, r) {
  return t = fR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fR(e) {
  var t = dR(e, "string");
  return ai(t) == "symbol" ? t : t + "";
}
function dR(e, t) {
  if (ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var k_ = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = ft(r, Ur);
  if (!o)
    return null;
  var s = Ur.defaultProps, u = s !== void 0 ? jr(jr({}, s), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : i === "children" ? c = (n || []).reduce(function(f, l) {
    var d = l.item, p = l.props, y = p.sectors || p.data || [];
    return f.concat(y.map(function(h) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: h.name,
        color: h.fill,
        payload: h
      };
    }));
  }, []) : c = (n || []).map(function(f) {
    var l = f.item, d = l.type.defaultProps, p = d !== void 0 ? jr(jr({}, d), l.props) : {}, y = p.dataKey, h = p.name, v = p.legendType, g = p.hide;
    return {
      inactive: g,
      dataKey: y,
      type: u.iconType || v || "square",
      color: hv(l),
      value: h || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
    };
  }), jr(jr(jr({}, u), Ur.getWithHeight(o, a)), {}, {
    payload: c,
    item: o
  });
};
function ii(e) {
  "@babel/helpers - typeof";
  return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ii(e);
}
function ax(e) {
  return yR(e) || vR(e) || hR(e) || pR();
}
function pR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hR(e, t) {
  if (e) {
    if (typeof e == "string") return up(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return up(e, t);
  }
}
function vR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yR(e) {
  if (Array.isArray(e)) return up(e);
}
function up(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ix(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ix(Object(r), !0).forEach(function(n) {
      wn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ix(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wn(e, t, r) {
  return t = mR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mR(e) {
  var t = gR(e, "string");
  return ii(t) == "symbol" ? t : t + "";
}
function gR(e, t) {
  if (ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ie(e, t, r) {
  return se(e) || se(t) ? r : Fe(t) ? pt(e, t, r) : oe(t) ? t(e) : r;
}
function Ia(e, t, r, n) {
  var a = gD(e, function(s) {
    return Ie(s, t);
  });
  if (r === "number") {
    var i = a.filter(function(s) {
      return V(s) || parseFloat(s);
    });
    return i.length ? [Fs(i), gr(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(s) {
    return !se(s);
  }) : a;
  return o.map(function(s) {
    return Fe(s) || s instanceof Date ? s : "";
  });
}
var bR = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n?.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var u = i.range, c = 0; c < s; c++) {
      var f = c > 0 ? a[c - 1].coordinate : a[s - 1].coordinate, l = a[c].coordinate, d = c >= s - 1 ? a[0].coordinate : a[c + 1].coordinate, p = void 0;
      if (et(l - f) !== et(d - l)) {
        var y = [];
        if (et(d - l) === et(u[1] - u[0])) {
          p = d;
          var h = l + u[1] - u[0];
          y[0] = Math.min(h, (h + f) / 2), y[1] = Math.max(h, (h + f) / 2);
        } else {
          p = f;
          var v = d + u[1] - u[0];
          y[0] = Math.min(l, (v + l) / 2), y[1] = Math.max(l, (v + l) / 2);
        }
        var g = [Math.min(l, (p + l) / 2), Math.max(l, (p + l) / 2)];
        if (t > g[0] && t <= g[1] || t >= y[0] && t <= y[1]) {
          o = a[c].index;
          break;
        }
      } else {
        var b = Math.min(f, d), x = Math.max(f, d);
        if (t > (b + l) / 2 && t <= (x + l) / 2) {
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
}, hv = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? Me(Me({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, s = i.fill, u;
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
}, xR = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, s = Object.keys(i), u = 0, c = s.length; u < c; u++)
    for (var f = i[s[u]].stackGroups, l = Object.keys(f), d = 0, p = l.length; d < p; d++) {
      var y = f[l[d]], h = y.items, v = y.cateAxisId, g = h.filter(function(S) {
        return nr(S.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var b = g[0].type.defaultProps, x = b !== void 0 ? Me(Me({}, b), g[0].props) : g[0].props, O = x.barSize, m = x[v];
        o[m] || (o[m] = []);
        var w = se(O) ? r : O;
        o[m].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: se(w) ? void 0 : tt(w, n, 0)
        });
      }
    }
  return o;
}, wR = function(t) {
  var r = t.barGap, n = t.barCategoryGap, a = t.bandSize, i = t.sizeList, o = i === void 0 ? [] : i, s = t.maxBarSize, u = o.length;
  if (u < 1) return null;
  var c = tt(r, a, 0, !0), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, p = a / u, y = o.reduce(function(O, m) {
      return O + m.barSize || 0;
    }, 0);
    y += (u - 1) * c, y >= a && (y -= (u - 1) * c, c = 0), y >= a && p > 0 && (d = !0, p *= 0.9, y = u * p);
    var h = (a - y) / 2 >> 0, v = {
      offset: h - c,
      size: 0
    };
    f = o.reduce(function(O, m) {
      var w = {
        item: m.item,
        position: {
          offset: v.offset + v.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? p : m.barSize
        }
      }, S = [].concat(ax(O), [w]);
      return v = S[S.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(A) {
        S.push({
          item: A,
          position: v
        });
      }), S;
    }, l);
  } else {
    var g = tt(n, a, 0, !0);
    a - 2 * g - (u - 1) * c <= 0 && (c = 0);
    var b = (a - 2 * g - (u - 1) * c) / u;
    b > 1 && (b >>= 0);
    var x = s === +s ? Math.min(b, s) : b;
    f = o.reduce(function(O, m, w) {
      var S = [].concat(ax(O), [{
        item: m.item,
        position: {
          offset: g + (b + c) * w + (b - x) / 2,
          size: x
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(A) {
        S.push({
          item: A,
          position: S[S.length - 1].position
        });
      }), S;
    }, l);
  }
  return f;
}, OR = function(t, r, n, a) {
  var i = n.children, o = n.width, s = n.margin, u = o - (s.left || 0) - (s.right || 0), c = k_({
    children: i,
    legendWidth: u
  });
  if (c) {
    var f = a || {}, l = f.width, d = f.height, p = c.align, y = c.verticalAlign, h = c.layout;
    if ((h === "vertical" || h === "horizontal" && y === "middle") && p !== "center" && V(t[p]))
      return Me(Me({}, t), {}, wn({}, p, t[p] + (l || 0)));
    if ((h === "horizontal" || h === "vertical" && p === "center") && y !== "middle" && V(t[y]))
      return Me(Me({}, t), {}, wn({}, y, t[y] + (d || 0)));
  }
  return t;
}, SR = function(t, r, n) {
  return se(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, N_ = function(t, r, n, a, i) {
  var o = r.props.children, s = ht(o, Li).filter(function(c) {
    return SR(a, i, c.props.direction);
  });
  if (s && s.length) {
    var u = s.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, f) {
      var l = Ie(f, n);
      if (se(l)) return c;
      var d = Array.isArray(l) ? [Fs(l), gr(l)] : [l, l], p = u.reduce(function(y, h) {
        var v = Ie(f, h, 0), g = d[0] - Math.abs(Array.isArray(v) ? v[0] : v), b = d[1] + Math.abs(Array.isArray(v) ? v[1] : v);
        return [Math.min(g, y[0]), Math.max(b, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, _R = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    return N_(t, s, n, i, a);
  }).filter(function(s) {
    return !se(s);
  });
  return o && o.length ? o.reduce(function(s, u) {
    return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, D_ = function(t, r, n, a, i) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && N_(t, u, c, a) || Ia(t, c, n, i);
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
    for (var f = 0, l = c.length; f < l; f++)
      s[c[f]] || (s[c[f]] = !0, u.push(c[f]));
    return u;
  }, []);
}, R_ = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, L_ = function(t, r, n, a) {
  if (a)
    return t.map(function(u) {
      return u.coordinate;
    });
  var i, o, s = t.map(function(u) {
    return u.coordinate === r && (i = !0), u.coordinate === n && (o = !0), u.coordinate;
  });
  return i || s.push(r), o || s.push(n), s;
}, tr = function(t, r, n) {
  if (!t) return null;
  var a = t.scale, i = t.duplicateDomain, o = t.type, s = t.range, u = t.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2, c = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / u : 0;
  if (c = t.axisType === "angleAxis" && s?.length >= 2 ? et(s[0] - s[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
    var f = (t.ticks || t.niceTicks).map(function(l) {
      var d = i ? i.indexOf(l) : l;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(d) + c,
        value: l,
        offset: c
      };
    });
    return f.filter(function(l) {
      return !ta(l.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(l, d) {
    return {
      coordinate: a(l) + c,
      value: l,
      index: d,
      offset: c
    };
  }) : a.ticks && !n ? a.ticks(t.tickCount).map(function(l) {
    return {
      coordinate: a(l) + c,
      value: l,
      offset: c
    };
  }) : a.domain().map(function(l, d) {
    return {
      coordinate: a(l) + c,
      value: i ? i[l] : l,
      index: d,
      offset: c
    };
  });
}, Lf = /* @__PURE__ */ new WeakMap(), ro = function(t, r) {
  if (typeof r != "function")
    return t;
  Lf.has(t) || Lf.set(t, /* @__PURE__ */ new WeakMap());
  var n = Lf.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, q_ = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, s = t.axisType;
  if (a === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: Za(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: Io(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: $a(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: Za(),
      realScaleType: "band"
    } : {
      scale: Io(),
      realScaleType: "linear"
    };
  if (Ii(a)) {
    var u = "scale".concat(Es(a));
    return {
      scale: (H0[u] || $a)(),
      realScaleType: H0[u] ? u : "point"
    };
  }
  return oe(a) ? {
    scale: a
  } : {
    scale: $a(),
    realScaleType: "point"
  };
}, ox = 1e-4, B_ = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - ox, o = Math.max(a[0], a[1]) + ox, s = t(r[0]), u = t(r[n - 1]);
    (s < i || s > o || u < i || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, AR = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, PR = function(t, r) {
  if (!r || r.length !== 2 || !V(r[0]) || !V(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!V(t[0]) || t[0] < n) && (i[0] = n), (!V(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, ER = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, s = 0; s < r; ++s) {
        var u = ta(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = i, t[s][n][1] = i + u, i = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1]);
      }
}, TR = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var s = ta(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + s, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, CR = {
  sign: ER,
  // @ts-expect-error definitelytyped types are incorrect
  expand: VM,
  // @ts-expect-error definitelytyped types are incorrect
  none: _n,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: GM,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: YM,
  positive: TR
}, jR = function(t, r, n) {
  var a = r.map(function(s) {
    return s.props.dataKey;
  }), i = CR[n], o = KM().keys(a).value(function(s, u) {
    return +Ie(s, u, 0);
  }).order(Ld).offset(i);
  return o(t);
}, MR = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, u = {}, c = s.reduce(function(l, d) {
    var p, y = (p = d.type) !== null && p !== void 0 && p.defaultProps ? Me(Me({}, d.type.defaultProps), d.props) : d.props, h = y.stackId, v = y.hide;
    if (v)
      return l;
    var g = y[n], b = l[g] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Fe(h)) {
      var x = b.stackGroups[h] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      x.items.push(d), b.hasStack = !0, b.stackGroups[h] = x;
    } else
      b.stackGroups[tn("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return Me(Me({}, l), {}, wn({}, g, b));
  }, u), f = {};
  return Object.keys(c).reduce(function(l, d) {
    var p = c[d];
    if (p.hasStack) {
      var y = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(h, v) {
        var g = p.stackGroups[v];
        return Me(Me({}, h), {}, wn({}, v, {
          numericAxisId: n,
          cateAxisId: a,
          items: g.items,
          stackedData: jR(t, g.items, i)
        }));
      }, y);
    }
    return Me(Me({}, l), {}, wn({}, d, p));
  }, f);
}, F_ = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, s = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var f = HD(c, i, s);
    return t.domain([Fs(f), gr(f)]), {
      niceTicks: f
    };
  }
  if (i && a === "number") {
    var l = t.domain(), d = KD(l, i, s);
    return {
      niceTicks: d
    };
  }
  return null;
};
function Bo(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !se(a[t.dataKey])) {
      var s = vo(r, "value", a[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var u = Ie(a, se(o) ? t.dataKey : o);
  return se(u) ? null : t.scale(u);
}
var sx = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + a : null;
  var u = Ie(o, r.dataKey, r.domain[s]);
  return se(u) ? null : r.scale(u) - i / 2 + a;
}, $R = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, IR = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Me(Me({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (Fe(i)) {
    var o = r[i];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, kR = function(t) {
  return t.reduce(function(r, n) {
    return [Fs(n.concat([r[0]]).filter(V)), gr(n.concat([r[1]]).filter(V))];
  }, [1 / 0, -1 / 0]);
}, z_ = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], s = o.stackedData, u = s.reduce(function(c, f) {
      var l = kR(f.slice(r, n + 1));
      return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], a[0]), Math.max(u[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, ux = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, cx = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, cp = function(t, r, n) {
  if (oe(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (V(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (ux.test(t[0])) {
    var i = +ux.exec(t[0])[1];
    a[0] = r[0] - i;
  } else oe(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (V(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (cx.test(t[1])) {
    var o = +cx.exec(t[1])[1];
    a[1] = r[1] + o;
  } else oe(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, Fo = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = zh(r, function(l) {
      return l.coordinate;
    }), o = 1 / 0, s = 1, u = i.length; s < u; s++) {
      var c = i[s], f = i[s - 1];
      o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, lx = function(t, r, n) {
  return !t || !t.length || Yr(t, pt(n, "type.defaultProps.domain")) ? r : t;
}, W_ = function(t, r) {
  var n = t.type.defaultProps ? Me(Me({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, s = n.formatter, u = n.tooltipType, c = n.chartType, f = n.hide;
  return Me(Me({}, ae(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: s,
    name: i || a,
    color: hv(t),
    value: Ie(r, a),
    type: u,
    payload: r,
    chartType: c,
    hide: f
  });
};
function oi(e) {
  "@babel/helpers - typeof";
  return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oi(e);
}
function fx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fx(Object(r), !0).forEach(function(n) {
      U_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U_(e, t, r) {
  return t = NR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NR(e) {
  var t = DR(e, "string");
  return oi(t) == "symbol" ? t : t + "";
}
function DR(e, t) {
  if (oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function RR(e, t) {
  return FR(e) || BR(e, t) || qR(e, t) || LR();
}
function LR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qR(e, t) {
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
function BR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function FR(e) {
  if (Array.isArray(e)) return e;
}
var zo = Math.PI / 180, zR = function(t) {
  return t * 180 / Math.PI;
}, Ae = function(t, r, n, a) {
  return {
    x: t + Math.cos(-zo * a) * n,
    y: r + Math.sin(-zo * a) * n
  };
}, H_ = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, WR = function(t, r, n, a, i) {
  var o = t.width, s = t.height, u = t.startAngle, c = t.endAngle, f = tt(t.cx, o, o / 2), l = tt(t.cy, s, s / 2), d = H_(o, s, n), p = tt(t.innerRadius, d, 0), y = tt(t.outerRadius, d, d * 0.8), h = Object.keys(r);
  return h.reduce(function(v, g) {
    var b = r[g], x = b.domain, O = b.reversed, m;
    if (se(b.range))
      a === "angleAxis" ? m = [u, c] : a === "radiusAxis" && (m = [p, y]), O && (m = [m[1], m[0]]);
    else {
      m = b.range;
      var w = m, S = RR(w, 2);
      u = S[0], c = S[1];
    }
    var A = q_(b, i), P = A.realScaleType, k = A.scale;
    k.domain(x).range(m), B_(k);
    var E = F_(k, Jt(Jt({}, b), {}, {
      realScaleType: P
    })), I = Jt(Jt(Jt({}, b), E), {}, {
      range: m,
      radius: y,
      realScaleType: P,
      scale: k,
      cx: f,
      cy: l,
      innerRadius: p,
      outerRadius: y,
      startAngle: u,
      endAngle: c
    });
    return Jt(Jt({}, v), {}, U_({}, g, I));
  }, {});
}, UR = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, HR = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, s = UR({
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
    angle: zR(c),
    angleInRadian: c
  };
}, KR = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, VR = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), s = Math.min(i, o);
  return t + s * 360;
}, px = function(t, r) {
  var n = t.x, a = t.y, i = HR({
    x: n,
    y: a
  }, r), o = i.radius, s = i.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var f = KR(r), l = f.startAngle, d = f.endAngle, p = s, y;
  if (l <= d) {
    for (; p > d; )
      p -= 360;
    for (; p < l; )
      p += 360;
    y = p >= l && p <= d;
  } else {
    for (; p > l; )
      p -= 360;
    for (; p < d; )
      p += 360;
    y = p >= d && p <= l;
  }
  return y ? Jt(Jt({}, r), {}, {
    radius: o,
    angle: VR(p, r)
  }) : null;
}, K_ = function(t) {
  return !/* @__PURE__ */ It(t) && !oe(t) && typeof t != "boolean" ? t.className : "";
};
function si(e) {
  "@babel/helpers - typeof";
  return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, si(e);
}
var GR = ["offset"];
function YR(e) {
  return QR(e) || JR(e) || ZR(e) || XR();
}
function XR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZR(e, t) {
  if (e) {
    if (typeof e == "string") return lp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lp(e, t);
  }
}
function JR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function QR(e) {
  if (Array.isArray(e)) return lp(e);
}
function lp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function eL(e, t) {
  if (e == null) return {};
  var r = tL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hx(Object(r), !0).forEach(function(n) {
      rL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rL(e, t, r) {
  return t = nL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nL(e) {
  var t = aL(e, "string");
  return si(t) == "symbol" ? t : t + "";
}
function aL(e, t) {
  if (si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ui.apply(this, arguments);
}
var iL = function(t) {
  var r = t.value, n = t.formatter, a = se(t.children) ? r : t.children;
  return oe(n) ? n(a) : a;
}, oL = function(t, r) {
  var n = et(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, sL = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, s = t.className, u = i, c = u.cx, f = u.cy, l = u.innerRadius, d = u.outerRadius, p = u.startAngle, y = u.endAngle, h = u.clockWise, v = (l + d) / 2, g = oL(p, y), b = g >= 0 ? 1 : -1, x, O;
  a === "insideStart" ? (x = p + b * o, O = h) : a === "insideEnd" ? (x = y - b * o, O = !h) : a === "end" && (x = y + b * o, O = h), O = g <= 0 ? O : !O;
  var m = Ae(c, f, v, x), w = Ae(c, f, v, x + (O ? 1 : -1) * 359), S = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), A = se(t.id) ? tn("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ T.createElement("text", ui({}, n, {
    dominantBaseline: "central",
    className: le("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("path", {
    id: A,
    d: S
  })), /* @__PURE__ */ T.createElement("textPath", {
    xlinkHref: "#".concat(A)
  }, r));
}, uL = function(t) {
  var r = t.viewBox, n = t.offset, a = t.position, i = r, o = i.cx, s = i.cy, u = i.innerRadius, c = i.outerRadius, f = i.startAngle, l = i.endAngle, d = (f + l) / 2;
  if (a === "outside") {
    var p = Ae(o, s, c + n, d), y = p.x, h = p.y;
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
  var v = (u + c) / 2, g = Ae(o, s, v, d), b = g.x, x = g.y;
  return {
    x: b,
    y: x,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, cL = function(t) {
  var r = t.viewBox, n = t.parentViewBox, a = t.offset, i = t.position, o = r, s = o.x, u = o.y, c = o.width, f = o.height, l = f >= 0 ? 1 : -1, d = l * a, p = l > 0 ? "end" : "start", y = l > 0 ? "start" : "end", h = c >= 0 ? 1 : -1, v = h * a, g = h > 0 ? "end" : "start", b = h > 0 ? "start" : "end";
  if (i === "top") {
    var x = {
      x: s + c / 2,
      y: u - l * a,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return Re(Re({}, x), n ? {
      height: Math.max(u - n.y, 0),
      width: c
    } : {});
  }
  if (i === "bottom") {
    var O = {
      x: s + c / 2,
      y: u + f + d,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return Re(Re({}, O), n ? {
      height: Math.max(n.y + n.height - (u + f), 0),
      width: c
    } : {});
  }
  if (i === "left") {
    var m = {
      x: s - v,
      y: u + f / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return Re(Re({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
      height: f
    } : {});
  }
  if (i === "right") {
    var w = {
      x: s + c + v,
      y: u + f / 2,
      textAnchor: b,
      verticalAnchor: "middle"
    };
    return Re(Re({}, w), n ? {
      width: Math.max(n.x + n.width - w.x, 0),
      height: f
    } : {});
  }
  var S = n ? {
    width: c,
    height: f
  } : {};
  return i === "insideLeft" ? Re({
    x: s + v,
    y: u + f / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, S) : i === "insideRight" ? Re({
    x: s + c - v,
    y: u + f / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, S) : i === "insideTop" ? Re({
    x: s + c / 2,
    y: u + d,
    textAnchor: "middle",
    verticalAnchor: y
  }, S) : i === "insideBottom" ? Re({
    x: s + c / 2,
    y: u + f - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, S) : i === "insideTopLeft" ? Re({
    x: s + v,
    y: u + d,
    textAnchor: b,
    verticalAnchor: y
  }, S) : i === "insideTopRight" ? Re({
    x: s + c - v,
    y: u + d,
    textAnchor: g,
    verticalAnchor: y
  }, S) : i === "insideBottomLeft" ? Re({
    x: s + v,
    y: u + f - d,
    textAnchor: b,
    verticalAnchor: p
  }, S) : i === "insideBottomRight" ? Re({
    x: s + c - v,
    y: u + f - d,
    textAnchor: g,
    verticalAnchor: p
  }, S) : ea(i) && (V(i.x) || Rr(i.x)) && (V(i.y) || Rr(i.y)) ? Re({
    x: s + tt(i.x, c),
    y: u + tt(i.y, f),
    textAnchor: "end",
    verticalAnchor: "end"
  }, S) : Re({
    x: s + c / 2,
    y: u + f / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, S);
}, lL = function(t) {
  return "cx" in t && V(t.cx);
};
function Be(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = eL(e, GR), a = Re({
    offset: r
  }, n), i = a.viewBox, o = a.position, s = a.value, u = a.children, c = a.content, f = a.className, l = f === void 0 ? "" : f, d = a.textBreakAll;
  if (!i || se(s) && se(u) && !/* @__PURE__ */ It(c) && !oe(c))
    return null;
  if (/* @__PURE__ */ It(c))
    return /* @__PURE__ */ Le(c, a);
  var p;
  if (oe(c)) {
    if (p = /* @__PURE__ */ Xw(c, a), /* @__PURE__ */ It(p))
      return p;
  } else
    p = iL(a);
  var y = lL(i), h = ae(a, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return sL(a, p, h);
  var v = y ? uL(a) : cL(a);
  return /* @__PURE__ */ T.createElement(wr, ui({
    className: le("recharts-label", l)
  }, h, v, {
    breakAll: d
  }), p);
}
Be.displayName = "Label";
var V_ = function(t) {
  var r = t.cx, n = t.cy, a = t.angle, i = t.startAngle, o = t.endAngle, s = t.r, u = t.radius, c = t.innerRadius, f = t.outerRadius, l = t.x, d = t.y, p = t.top, y = t.left, h = t.width, v = t.height, g = t.clockWise, b = t.labelViewBox;
  if (b)
    return b;
  if (V(h) && V(v)) {
    if (V(l) && V(d))
      return {
        x: l,
        y: d,
        width: h,
        height: v
      };
    if (V(p) && V(y))
      return {
        x: p,
        y,
        width: h,
        height: v
      };
  }
  return V(l) && V(d) ? {
    x: l,
    y: d,
    width: 0,
    height: 0
  } : V(r) && V(n) ? {
    cx: r,
    cy: n,
    startAngle: i || a || 0,
    endAngle: o || a || 0,
    innerRadius: c || 0,
    outerRadius: f || u || s || 0,
    clockWise: g
  } : t.viewBox ? t.viewBox : {};
}, fL = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ T.createElement(Be, {
    key: "label-implicit",
    viewBox: r
  }) : Fe(t) ? /* @__PURE__ */ T.createElement(Be, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ It(t) ? t.type === Be ? /* @__PURE__ */ Le(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ T.createElement(Be, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : oe(t) ? /* @__PURE__ */ T.createElement(Be, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : ea(t) ? /* @__PURE__ */ T.createElement(Be, ui({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, dL = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = V_(t), o = ht(a, Be).map(function(u, c) {
    return /* @__PURE__ */ Le(u, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var s = fL(t.label, r || i);
  return [s].concat(YR(o));
};
Be.parseViewBox = V_;
Be.renderCallByParent = dL;
var qf, vx;
function pL() {
  if (vx) return qf;
  vx = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return qf = e, qf;
}
var hL = pL();
const vL = /* @__PURE__ */ xe(hL);
function ci(e) {
  "@babel/helpers - typeof";
  return ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ci(e);
}
var yL = ["valueAccessor"], mL = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function gL(e) {
  return OL(e) || wL(e) || xL(e) || bL();
}
function bL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xL(e, t) {
  if (e) {
    if (typeof e == "string") return fp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fp(e, t);
  }
}
function wL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function OL(e) {
  if (Array.isArray(e)) return fp(e);
}
function fp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Wo() {
  return Wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wo.apply(this, arguments);
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
function mx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yx(Object(r), !0).forEach(function(n) {
      SL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SL(e, t, r) {
  return t = _L(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _L(e) {
  var t = AL(e, "string");
  return ci(t) == "symbol" ? t : t + "";
}
function AL(e, t) {
  if (ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gx(e, t) {
  if (e == null) return {};
  var r = PL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function PL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var EL = function(t) {
  return Array.isArray(t.value) ? vL(t.value) : t.value;
};
function _t(e) {
  var t = e.valueAccessor, r = t === void 0 ? EL : t, n = gx(e, yL), a = n.data, i = n.dataKey, o = n.clockWise, s = n.id, u = n.textBreakAll, c = gx(n, mL);
  return !a || !a.length ? null : /* @__PURE__ */ T.createElement(fe, {
    className: "recharts-label-list"
  }, a.map(function(f, l) {
    var d = se(i) ? r(f, l) : Ie(f && f.payload, i), p = se(s) ? {} : {
      id: "".concat(s, "-").concat(l)
    };
    return /* @__PURE__ */ T.createElement(Be, Wo({}, ae(f, !0), c, p, {
      parentViewBox: f.parentViewBox,
      value: d,
      textBreakAll: u,
      viewBox: Be.parseViewBox(se(o) ? f : mx(mx({}, f), {}, {
        clockWise: o
      })),
      key: "label-".concat(l),
      index: l
    }));
  }));
}
_t.displayName = "LabelList";
function TL(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ T.createElement(_t, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ T.isValidElement(e) || oe(e) ? /* @__PURE__ */ T.createElement(_t, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : ea(e) ? /* @__PURE__ */ T.createElement(_t, Wo({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function CL(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = ht(n, _t).map(function(o, s) {
    return /* @__PURE__ */ Le(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return a;
  var i = TL(e.label, t);
  return [i].concat(gL(a));
}
_t.renderCallByParent = CL;
function li(e) {
  "@babel/helpers - typeof";
  return li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, li(e);
}
function dp() {
  return dp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, dp.apply(this, arguments);
}
function bx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bx(Object(r), !0).forEach(function(n) {
      jL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jL(e, t, r) {
  return t = ML(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ML(e) {
  var t = $L(e, "string");
  return li(t) == "symbol" ? t : t + "";
}
function $L(e, t) {
  if (li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var IL = function(t, r) {
  var n = et(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, no = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, s = t.isExternal, u = t.cornerRadius, c = t.cornerIsExternal, f = u * (s ? 1 : -1) + a, l = Math.asin(u / f) / zo, d = c ? i : i + o * l, p = Ae(r, n, f, d), y = Ae(r, n, a, d), h = c ? i - o * l : i, v = Ae(r, n, f * Math.cos(l * zo), h);
  return {
    center: p,
    circleTangency: y,
    lineTangency: v,
    theta: l
  };
}, G_ = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, s = t.endAngle, u = IL(o, s), c = o + u, f = Ae(r, n, i, o), l = Ae(r, n, i, c), d = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(u) > 180), ",").concat(+(o > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (a > 0) {
    var p = Ae(r, n, a, o), y = Ae(r, n, a, c);
    d += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(a, ",").concat(a, `,0,
            `).concat(+(Math.abs(u) > 180), ",").concat(+(o <= c), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, kL = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, u = t.cornerIsExternal, c = t.startAngle, f = t.endAngle, l = et(f - c), d = no({
    cx: r,
    cy: n,
    radius: i,
    angle: c,
    sign: l,
    cornerRadius: o,
    cornerIsExternal: u
  }), p = d.circleTangency, y = d.lineTangency, h = d.theta, v = no({
    cx: r,
    cy: n,
    radius: i,
    angle: f,
    sign: -l,
    cornerRadius: o,
    cornerIsExternal: u
  }), g = v.circleTangency, b = v.lineTangency, x = v.theta, O = u ? Math.abs(c - f) : Math.abs(c - f) - h - x;
  if (O < 0)
    return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : G_({
      cx: r,
      cy: n,
      innerRadius: a,
      outerRadius: i,
      startAngle: c,
      endAngle: f
    });
  var m = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(O > 180), ",").concat(+(l < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(b.x, ",").concat(b.y, `
  `);
  if (a > 0) {
    var w = no({
      cx: r,
      cy: n,
      radius: a,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), S = w.circleTangency, A = w.lineTangency, P = w.theta, k = no({
      cx: r,
      cy: n,
      radius: a,
      angle: f,
      sign: -l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), E = k.circleTangency, I = k.lineTangency, C = k.theta, M = u ? Math.abs(c - f) : Math.abs(c - f) - P - C;
    if (M < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(I.x, ",").concat(I.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(E.x, ",").concat(E.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(M > 180), ",").concat(+(l > 0), ",").concat(S.x, ",").concat(S.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(A.x, ",").concat(A.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, NL = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Y_ = function(t) {
  var r = xx(xx({}, NL), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, u = r.forceCornerRadius, c = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, d = r.className;
  if (o < i || f === l)
    return null;
  var p = le("recharts-sector", d), y = o - i, h = tt(s, y, 0, !0), v;
  return h > 0 && Math.abs(f - l) < 360 ? v = kL({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(h, y / 2),
    forceCornerRadius: u,
    cornerIsExternal: c,
    startAngle: f,
    endAngle: l
  }) : v = G_({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: f,
    endAngle: l
  }), /* @__PURE__ */ T.createElement("path", dp({}, ae(r, !0), {
    className: p,
    d: v,
    role: "img"
  }));
};
function fi(e) {
  "@babel/helpers - typeof";
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fi(e);
}
function pp() {
  return pp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pp.apply(this, arguments);
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
function Ox(e) {
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
  return t = RL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RL(e) {
  var t = LL(e, "string");
  return fi(t) == "symbol" ? t : t + "";
}
function LL(e, t) {
  if (fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Sx = {
  curveBasisClosed: NM,
  curveBasisOpen: DM,
  curveBasis: kM,
  curveBumpX: xM,
  curveBumpY: wM,
  curveLinearClosed: RM,
  curveLinear: Cs,
  curveMonotoneX: LM,
  curveMonotoneY: qM,
  curveNatural: BM,
  curveStep: FM,
  curveStepAfter: WM,
  curveStepBefore: zM
}, ao = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, wa = function(t) {
  return t.x;
}, Oa = function(t) {
  return t.y;
}, qL = function(t, r) {
  if (oe(t))
    return t;
  var n = "curve".concat(Es(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Sx["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Sx[n] || Cs;
}, BL = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, s = t.layout, u = t.connectNulls, c = u === void 0 ? !1 : u, f = qL(n, s), l = c ? i.filter(function(h) {
    return ao(h);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(h) {
      return ao(h);
    }) : o, y = l.map(function(h, v) {
      return Ox(Ox({}, h), {}, {
        base: p[v]
      });
    });
    return s === "vertical" ? d = Yi().y(Oa).x1(wa).x0(function(h) {
      return h.base.x;
    }) : d = Yi().x(wa).y1(Oa).y0(function(h) {
      return h.base.y;
    }), d.defined(ao).curve(f), d(y);
  }
  return s === "vertical" && V(o) ? d = Yi().y(Oa).x1(wa).x0(o) : V(o) ? d = Yi().x(wa).y1(Oa).y0(o) : d = aS().x(wa).y(Oa), d.defined(ao).curve(f), d(l);
}, Vr = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? BL(t) : a;
  return /* @__PURE__ */ T.createElement("path", pp({}, ae(t, !1), yo(t), {
    className: le("recharts-curve", r),
    d: o,
    ref: i
  }));
}, io = { exports: {} }, oo = { exports: {} }, ye = {};
var _x;
function FL() {
  if (_x) return ye;
  _x = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, o = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, c = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, l = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, d = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, p = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, g = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, b = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
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
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
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
  return ye.AsyncMode = u, ye.ConcurrentMode = c, ye.ContextConsumer = s, ye.ContextProvider = o, ye.Element = t, ye.ForwardRef = f, ye.Fragment = n, ye.Lazy = y, ye.Memo = p, ye.Portal = r, ye.Profiler = i, ye.StrictMode = a, ye.Suspense = l, ye.isAsyncMode = function(m) {
    return O(m) || x(m) === u;
  }, ye.isConcurrentMode = O, ye.isContextConsumer = function(m) {
    return x(m) === s;
  }, ye.isContextProvider = function(m) {
    return x(m) === o;
  }, ye.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, ye.isForwardRef = function(m) {
    return x(m) === f;
  }, ye.isFragment = function(m) {
    return x(m) === n;
  }, ye.isLazy = function(m) {
    return x(m) === y;
  }, ye.isMemo = function(m) {
    return x(m) === p;
  }, ye.isPortal = function(m) {
    return x(m) === r;
  }, ye.isProfiler = function(m) {
    return x(m) === i;
  }, ye.isStrictMode = function(m) {
    return x(m) === a;
  }, ye.isSuspense = function(m) {
    return x(m) === l;
  }, ye.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === c || m === i || m === a || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === p || m.$$typeof === o || m.$$typeof === s || m.$$typeof === f || m.$$typeof === v || m.$$typeof === g || m.$$typeof === b || m.$$typeof === h);
  }, ye.typeOf = x, ye;
}
var me = {};
var Ax;
function zL() {
  return Ax || (Ax = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, o = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, c = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, l = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, d = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, p = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, g = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, b = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function x(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === c || j === i || j === a || j === l || j === d || typeof j == "object" && j !== null && (j.$$typeof === y || j.$$typeof === p || j.$$typeof === o || j.$$typeof === s || j.$$typeof === f || j.$$typeof === v || j.$$typeof === g || j.$$typeof === b || j.$$typeof === h);
    }
    function O(j) {
      if (typeof j == "object" && j !== null) {
        var ee = j.$$typeof;
        switch (ee) {
          case t:
            var U = j.type;
            switch (U) {
              case u:
              case c:
              case n:
              case i:
              case a:
              case l:
                return U;
              default:
                var ce = U && U.$$typeof;
                switch (ce) {
                  case s:
                  case f:
                  case y:
                  case p:
                  case o:
                    return ce;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var m = u, w = c, S = s, A = o, P = t, k = f, E = n, I = y, C = p, M = r, $ = i, N = a, R = l, q = !1;
    function z(j) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(j) || O(j) === u;
    }
    function D(j) {
      return O(j) === c;
    }
    function L(j) {
      return O(j) === s;
    }
    function F(j) {
      return O(j) === o;
    }
    function H(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function X(j) {
      return O(j) === f;
    }
    function te(j) {
      return O(j) === n;
    }
    function ne(j) {
      return O(j) === y;
    }
    function re(j) {
      return O(j) === p;
    }
    function Q(j) {
      return O(j) === r;
    }
    function W(j) {
      return O(j) === i;
    }
    function G(j) {
      return O(j) === a;
    }
    function Y(j) {
      return O(j) === l;
    }
    me.AsyncMode = m, me.ConcurrentMode = w, me.ContextConsumer = S, me.ContextProvider = A, me.Element = P, me.ForwardRef = k, me.Fragment = E, me.Lazy = I, me.Memo = C, me.Portal = M, me.Profiler = $, me.StrictMode = N, me.Suspense = R, me.isAsyncMode = z, me.isConcurrentMode = D, me.isContextConsumer = L, me.isContextProvider = F, me.isElement = H, me.isForwardRef = X, me.isFragment = te, me.isLazy = ne, me.isMemo = re, me.isPortal = Q, me.isProfiler = W, me.isStrictMode = G, me.isSuspense = Y, me.isValidElementType = x, me.typeOf = O;
  })()), me;
}
var Px;
function X_() {
  return Px || (Px = 1, process.env.NODE_ENV === "production" ? oo.exports = FL() : oo.exports = zL()), oo.exports;
}
var Bf, Ex;
function WL() {
  if (Ex) return Bf;
  Ex = 1;
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
      var u = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Bf = a() ? Object.assign : function(i, o) {
    for (var s, u = n(i), c, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var l in s)
        t.call(s, l) && (u[l] = s[l]);
      if (e) {
        c = e(s);
        for (var d = 0; d < c.length; d++)
          r.call(s, c[d]) && (u[c[d]] = s[c[d]]);
      }
    }
    return u;
  }, Bf;
}
var Ff, Tx;
function vv() {
  if (Tx) return Ff;
  Tx = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ff = e, Ff;
}
var zf, Cx;
function Z_() {
  return Cx || (Cx = 1, zf = Function.call.bind(Object.prototype.hasOwnProperty)), zf;
}
var Wf, jx;
function UL() {
  if (jx) return Wf;
  jx = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ vv(), r = {}, n = /* @__PURE__ */ Z_();
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
      for (var f in i)
        if (n(i, f)) {
          var l;
          try {
            if (typeof i[f] != "function") {
              var d = Error(
                (u || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            l = i[f](o, f, u, s, null, t);
          } catch (y) {
            l = y;
          }
          if (l && !(l instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), l instanceof Error && !(l.message in r)) {
            r[l.message] = !0;
            var p = c ? c() : "";
            e(
              "Failed " + s + " type: " + l.message + (p ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Wf = a, Wf;
}
var Uf, Mx;
function HL() {
  if (Mx) return Uf;
  Mx = 1;
  var e = X_(), t = WL(), r = /* @__PURE__ */ vv(), n = /* @__PURE__ */ Z_(), a = /* @__PURE__ */ UL(), i = function() {
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
  return Uf = function(s, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function l(D) {
      var L = D && (c && D[c] || D[f]);
      if (typeof L == "function")
        return L;
    }
    var d = "<<anonymous>>", p = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: b(),
      arrayOf: x,
      element: O(),
      elementType: m(),
      instanceOf: w,
      node: k(),
      objectOf: A,
      oneOf: S,
      oneOfType: P,
      shape: I,
      exact: C
    };
    function y(D, L) {
      return D === L ? D !== 0 || 1 / D === 1 / L : D !== D && L !== L;
    }
    function h(D, L) {
      this.message = D, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(D) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, F = 0;
      function H(te, ne, re, Q, W, G, Y) {
        if (Q = Q || d, G = G || re, Y !== r) {
          if (u) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = Q + ":" + re;
            !L[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[ee] = !0, F++);
          }
        }
        return ne[re] == null ? te ? ne[re] === null ? new h("The " + W + " `" + G + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new h("The " + W + " `" + G + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : D(ne, re, Q, W, G);
      }
      var X = H.bind(null, !1);
      return X.isRequired = H.bind(null, !0), X;
    }
    function g(D) {
      function L(F, H, X, te, ne, re) {
        var Q = F[H], W = N(Q);
        if (W !== D) {
          var G = R(Q);
          return new h(
            "Invalid " + te + " `" + ne + "` of type " + ("`" + G + "` supplied to `" + X + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return v(L);
    }
    function b() {
      return v(o);
    }
    function x(D) {
      function L(F, H, X, te, ne) {
        if (typeof D != "function")
          return new h("Property `" + ne + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var re = F[H];
        if (!Array.isArray(re)) {
          var Q = N(re);
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + X + "`, expected an array."));
        }
        for (var W = 0; W < re.length; W++) {
          var G = D(re, W, X, te, ne + "[" + W + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return v(L);
    }
    function O() {
      function D(L, F, H, X, te) {
        var ne = L[F];
        if (!s(ne)) {
          var re = N(ne);
          return new h("Invalid " + X + " `" + te + "` of type " + ("`" + re + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(D);
    }
    function m() {
      function D(L, F, H, X, te) {
        var ne = L[F];
        if (!e.isValidElementType(ne)) {
          var re = N(ne);
          return new h("Invalid " + X + " `" + te + "` of type " + ("`" + re + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(D);
    }
    function w(D) {
      function L(F, H, X, te, ne) {
        if (!(F[H] instanceof D)) {
          var re = D.name || d, Q = z(F[H]);
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + X + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return v(L);
    }
    function S(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function L(F, H, X, te, ne) {
        for (var re = F[H], Q = 0; Q < D.length; Q++)
          if (y(re, D[Q]))
            return null;
        var W = JSON.stringify(D, function(Y, j) {
          var ee = R(j);
          return ee === "symbol" ? String(j) : j;
        });
        return new h("Invalid " + te + " `" + ne + "` of value `" + String(re) + "` " + ("supplied to `" + X + "`, expected one of " + W + "."));
      }
      return v(L);
    }
    function A(D) {
      function L(F, H, X, te, ne) {
        if (typeof D != "function")
          return new h("Property `" + ne + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var re = F[H], Q = N(re);
        if (Q !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + X + "`, expected an object."));
        for (var W in re)
          if (n(re, W)) {
            var G = D(re, W, X, te, ne + "." + W, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return v(L);
    }
    function P(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var L = 0; L < D.length; L++) {
        var F = D[L];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(F) + " at index " + L + "."
          ), o;
      }
      function H(X, te, ne, re, Q) {
        for (var W = [], G = 0; G < D.length; G++) {
          var Y = D[G], j = Y(X, te, ne, re, Q, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && W.push(j.data.expectedType);
        }
        var ee = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new h("Invalid " + re + " `" + Q + "` supplied to " + ("`" + ne + "`" + ee + "."));
      }
      return v(H);
    }
    function k() {
      function D(L, F, H, X, te) {
        return M(L[F]) ? null : new h("Invalid " + X + " `" + te + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return v(D);
    }
    function E(D, L, F, H, X) {
      return new h(
        (D || "React class") + ": " + L + " type `" + F + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function I(D) {
      function L(F, H, X, te, ne) {
        var re = F[H], Q = N(re);
        if (Q !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type `" + Q + "` " + ("supplied to `" + X + "`, expected `object`."));
        for (var W in D) {
          var G = D[W];
          if (typeof G != "function")
            return E(X, te, ne, W, R(G));
          var Y = G(re, W, X, te, ne + "." + W, r);
          if (Y)
            return Y;
        }
        return null;
      }
      return v(L);
    }
    function C(D) {
      function L(F, H, X, te, ne) {
        var re = F[H], Q = N(re);
        if (Q !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type `" + Q + "` " + ("supplied to `" + X + "`, expected `object`."));
        var W = t({}, F[H], D);
        for (var G in W) {
          var Y = D[G];
          if (n(D, G) && typeof Y != "function")
            return E(X, te, ne, G, R(Y));
          if (!Y)
            return new h(
              "Invalid " + te + " `" + ne + "` key `" + G + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(F[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var j = Y(re, G, X, te, ne + "." + G, r);
          if (j)
            return j;
        }
        return null;
      }
      return v(L);
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
          var L = l(D);
          if (L) {
            var F = L.call(D), H;
            if (L !== D.entries) {
              for (; !(H = F.next()).done; )
                if (!M(H.value))
                  return !1;
            } else
              for (; !(H = F.next()).done; ) {
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
    function $(D, L) {
      return D === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function N(D) {
      var L = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : $(L, D) ? "symbol" : L;
    }
    function R(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var L = N(D);
      if (L === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function q(D) {
      var L = R(D);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function z(D) {
      return !D.constructor || !D.constructor.name ? d : D.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, Uf;
}
var Hf, $x;
function KL() {
  if ($x) return Hf;
  $x = 1;
  var e = /* @__PURE__ */ vv();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Hf = function() {
    function n(o, s, u, c, f, l) {
      if (l !== e) {
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
  }, Hf;
}
var Ix;
function VL() {
  if (Ix) return io.exports;
  if (Ix = 1, process.env.NODE_ENV !== "production") {
    var e = X_(), t = !0;
    io.exports = /* @__PURE__ */ HL()(e.isElement, t);
  } else
    io.exports = /* @__PURE__ */ KL()();
  return io.exports;
}
var GL = /* @__PURE__ */ VL();
const ge = /* @__PURE__ */ xe(GL);
var YL = Object.getOwnPropertyNames, XL = Object.getOwnPropertySymbols, ZL = Object.prototype.hasOwnProperty;
function kx(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function so(e) {
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
function Nx(e) {
  return YL(e).concat(XL(e));
}
var JL = Object.hasOwn || (function(e, t) {
  return ZL.call(e, t);
});
function an(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var QL = "__v", eq = "__o", tq = "_owner", Dx = Object.getOwnPropertyDescriptor, Rx = Object.keys;
function rq(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function nq(e, t) {
  return an(e.getTime(), t.getTime());
}
function aq(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function iq(e, t) {
  return e === t;
}
function Lx(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var a = new Array(n), i = e.entries(), o, s, u = 0; (o = i.next()) && !o.done; ) {
    for (var c = t.entries(), f = !1, l = 0; (s = c.next()) && !s.done; ) {
      if (a[l]) {
        l++;
        continue;
      }
      var d = o.value, p = s.value;
      if (r.equals(d[0], p[0], u, l, e, t, r) && r.equals(d[1], p[1], d[0], p[0], e, t, r)) {
        f = a[l] = !0;
        break;
      }
      l++;
    }
    if (!f)
      return !1;
    u++;
  }
  return !0;
}
var oq = an;
function sq(e, t, r) {
  var n = Rx(e), a = n.length;
  if (Rx(t).length !== a)
    return !1;
  for (; a-- > 0; )
    if (!J_(e, t, r, n[a]))
      return !1;
  return !0;
}
function Sa(e, t, r) {
  var n = Nx(e), a = n.length;
  if (Nx(t).length !== a)
    return !1;
  for (var i, o, s; a-- > 0; )
    if (i = n[a], !J_(e, t, r, i) || (o = Dx(e, i), s = Dx(t, i), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function uq(e, t) {
  return an(e.valueOf(), t.valueOf());
}
function cq(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function qx(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var a = new Array(n), i = e.values(), o, s; (o = i.next()) && !o.done; ) {
    for (var u = t.values(), c = !1, f = 0; (s = u.next()) && !s.done; ) {
      if (!a[f] && r.equals(o.value, s.value, o.value, s.value, e, t, r)) {
        c = a[f] = !0;
        break;
      }
      f++;
    }
    if (!c)
      return !1;
  }
  return !0;
}
function lq(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function fq(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function J_(e, t, r, n) {
  return (n === tq || n === eq || n === QL) && (e.$$typeof || t.$$typeof) ? !0 : JL(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var dq = "[object Arguments]", pq = "[object Boolean]", hq = "[object Date]", vq = "[object Error]", yq = "[object Map]", mq = "[object Number]", gq = "[object Object]", bq = "[object RegExp]", xq = "[object Set]", wq = "[object String]", Oq = "[object URL]", Sq = Array.isArray, Bx = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Fx = Object.assign, _q = Object.prototype.toString.call.bind(Object.prototype.toString);
function Aq(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, a = e.areFunctionsEqual, i = e.areMapsEqual, o = e.areNumbersEqual, s = e.areObjectsEqual, u = e.arePrimitiveWrappersEqual, c = e.areRegExpsEqual, f = e.areSetsEqual, l = e.areTypedArraysEqual, d = e.areUrlsEqual;
  return function(y, h, v) {
    if (y === h)
      return !0;
    if (y == null || h == null)
      return !1;
    var g = typeof y;
    if (g !== typeof h)
      return !1;
    if (g !== "object")
      return g === "number" ? o(y, h, v) : g === "function" ? a(y, h, v) : !1;
    var b = y.constructor;
    if (b !== h.constructor)
      return !1;
    if (b === Object)
      return s(y, h, v);
    if (Sq(y))
      return t(y, h, v);
    if (Bx != null && Bx(y))
      return l(y, h, v);
    if (b === Date)
      return r(y, h, v);
    if (b === RegExp)
      return c(y, h, v);
    if (b === Map)
      return i(y, h, v);
    if (b === Set)
      return f(y, h, v);
    var x = _q(y);
    return x === hq ? r(y, h, v) : x === bq ? c(y, h, v) : x === yq ? i(y, h, v) : x === xq ? f(y, h, v) : x === gq ? typeof y.then != "function" && typeof h.then != "function" && s(y, h, v) : x === Oq ? d(y, h, v) : x === vq ? n(y, h, v) : x === dq ? s(y, h, v) : x === pq || x === mq || x === wq ? u(y, h, v) : !1;
  };
}
function Pq(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? Sa : rq,
    areDatesEqual: nq,
    areErrorsEqual: aq,
    areFunctionsEqual: iq,
    areMapsEqual: n ? kx(Lx, Sa) : Lx,
    areNumbersEqual: oq,
    areObjectsEqual: n ? Sa : sq,
    arePrimitiveWrappersEqual: uq,
    areRegExpsEqual: cq,
    areSetsEqual: n ? kx(qx, Sa) : qx,
    areTypedArraysEqual: n ? Sa : lq,
    areUrlsEqual: fq
  };
  if (r && (a = Fx({}, a, r(a))), t) {
    var i = so(a.areArraysEqual), o = so(a.areMapsEqual), s = so(a.areObjectsEqual), u = so(a.areSetsEqual);
    a = Fx({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: u
    });
  }
  return a;
}
function Eq(e) {
  return function(t, r, n, a, i, o, s) {
    return e(t, r, s);
  };
}
function Tq(e) {
  var t = e.circular, r = e.comparator, n = e.createState, a = e.equals, i = e.strict;
  if (n)
    return function(u, c) {
      var f = n(), l = f.cache, d = l === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : l, p = f.meta;
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
var Cq = Pr();
Pr({ strict: !0 });
Pr({ circular: !0 });
Pr({
  circular: !0,
  strict: !0
});
Pr({
  createInternalComparator: function() {
    return an;
  }
});
Pr({
  strict: !0,
  createInternalComparator: function() {
    return an;
  }
});
Pr({
  circular: !0,
  createInternalComparator: function() {
    return an;
  }
});
Pr({
  circular: !0,
  createInternalComparator: function() {
    return an;
  },
  strict: !0
});
function Pr(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, s = Pq(e), u = Aq(s), c = n ? n(u) : Eq(u);
  return Tq({ circular: r, comparator: u, createState: a, equals: c, strict: o });
}
function jq(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function zx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : jq(a);
  };
  requestAnimationFrame(n);
}
function hp(e) {
  "@babel/helpers - typeof";
  return hp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hp(e);
}
function Mq(e) {
  return Nq(e) || kq(e) || Iq(e) || $q();
}
function $q() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Iq(e, t) {
  if (e) {
    if (typeof e == "string") return Wx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wx(e, t);
  }
}
function Wx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function kq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Nq(e) {
  if (Array.isArray(e)) return e;
}
function Dq() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, s = Mq(o), u = s[0], c = s.slice(1);
        if (typeof u == "number") {
          zx(a.bind(null, c), u);
          return;
        }
        a(u), zx(a.bind(null, c));
        return;
      }
      hp(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
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
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function Ux(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ux(Object(r), !0).forEach(function(n) {
      Q_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ux(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Q_(e, t, r) {
  return t = Rq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rq(e) {
  var t = Lq(e, "string");
  return di(t) === "symbol" ? t : String(t);
}
function Lq(e, t) {
  if (di(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qq = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, Bq = function(t) {
  return t;
}, Fq = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, ka = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return Hx(Hx({}, n), {}, Q_({}, a, t(a, r[a])));
  }, {});
}, Kx = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(Fq(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, zq = process.env.NODE_ENV !== "production", Uo = function(t, r, n, a, i, o, s, u) {
  if (zq && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, a, i, o, s, u], f = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[f++];
      }));
    }
};
function Wq(e, t) {
  return Kq(e) || Hq(e, t) || eA(e, t) || Uq();
}
function Uq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hq(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function Kq(e) {
  if (Array.isArray(e)) return e;
}
function Vq(e) {
  return Xq(e) || Yq(e) || eA(e) || Gq();
}
function Gq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eA(e, t) {
  if (e) {
    if (typeof e == "string") return vp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vp(e, t);
  }
}
function Yq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Xq(e) {
  if (Array.isArray(e)) return vp(e);
}
function vp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ho = 1e-4, tA = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, rA = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, Vx = function(t, r) {
  return function(n) {
    var a = tA(t, r);
    return rA(a, n);
  };
}, Zq = function(t, r) {
  return function(n) {
    var a = tA(t, r), i = [].concat(Vq(a.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return rA(i, n);
  };
}, Gx = function() {
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
          }), f = Wq(c, 4);
          a = f[0], i = f[1], o = f[2], s = f[3];
        } else
          Uo(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Uo([a, o, i, s].every(function(v) {
    return typeof v == "number" && v >= 0 && v <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var l = Vx(a, o), d = Vx(i, s), p = Zq(a, o), y = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, h = function(g) {
    for (var b = g > 1 ? 1 : g, x = b, O = 0; O < 8; ++O) {
      var m = l(x) - b, w = p(x);
      if (Math.abs(m - b) < Ho || w < Ho)
        return d(x);
      x = y(x - m / w);
    }
    return d(x);
  };
  return h.isStepper = !1, h;
}, Jq = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, s = o === void 0 ? 17 : o, u = function(f, l, d) {
    var p = -(f - l) * n, y = d * i, h = d + (p - y) * s / 1e3, v = d * s / 1e3 + f;
    return Math.abs(v - l) < Ho && Math.abs(h) < Ho ? [l, 0] : [v, h];
  };
  return u.isStepper = !0, u.dt = s, u;
}, Qq = function() {
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
        return Gx(a);
      case "spring":
        return Jq();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return Gx(a);
        Uo(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (Uo(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
function Yx(e) {
  return rB(e) || tB(e) || nA(e) || eB();
}
function eB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rB(e) {
  if (Array.isArray(e)) return mp(e);
}
function Xx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xx(Object(r), !0).forEach(function(n) {
      yp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yp(e, t, r) {
  return t = nB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nB(e) {
  var t = aB(e, "string");
  return pi(t) === "symbol" ? t : String(t);
}
function aB(e, t) {
  if (pi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function iB(e, t) {
  return uB(e) || sB(e, t) || nA(e, t) || oB();
}
function oB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nA(e, t) {
  if (e) {
    if (typeof e == "string") return mp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mp(e, t);
  }
}
function mp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function sB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function uB(e) {
  if (Array.isArray(e)) return e;
}
var Ko = function(t, r, n) {
  return t + (r - t) * n;
}, gp = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, cB = function e(t, r, n) {
  var a = ka(function(i, o) {
    if (gp(o)) {
      var s = t(o.from, o.to, o.velocity), u = iB(s, 2), c = u[0], f = u[1];
      return Ve(Ve({}, o), {}, {
        from: c,
        velocity: f
      });
    }
    return o;
  }, r);
  return n < 1 ? ka(function(i, o) {
    return gp(o) ? Ve(Ve({}, o), {}, {
      velocity: Ko(o.velocity, a[i].velocity, n),
      from: Ko(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const lB = (function(e, t, r, n, a) {
  var i = qq(e, t), o = i.reduce(function(v, g) {
    return Ve(Ve({}, v), {}, yp({}, g, [e[g], t[g]]));
  }, {}), s = i.reduce(function(v, g) {
    return Ve(Ve({}, v), {}, yp({}, g, {
      from: e[g],
      velocity: 0,
      to: t[g]
    }));
  }, {}), u = -1, c, f, l = function() {
    return null;
  }, d = function() {
    return ka(function(g, b) {
      return b.from;
    }, s);
  }, p = function() {
    return !Object.values(s).filter(gp).length;
  }, y = function(g) {
    c || (c = g);
    var b = g - c, x = b / r.dt;
    s = cB(r, s, x), a(Ve(Ve(Ve({}, e), t), d())), c = g, p() || (u = requestAnimationFrame(l));
  }, h = function(g) {
    f || (f = g);
    var b = (g - f) / n, x = ka(function(m, w) {
      return Ko.apply(void 0, Yx(w).concat([r(b)]));
    }, o);
    if (a(Ve(Ve(Ve({}, e), t), x)), b < 1)
      u = requestAnimationFrame(l);
    else {
      var O = ka(function(m, w) {
        return Ko.apply(void 0, Yx(w).concat([r(1)]));
      }, o);
      a(Ve(Ve(Ve({}, e), t), O));
    }
  };
  return l = r.isStepper ? y : h, function() {
    return requestAnimationFrame(l), function() {
      cancelAnimationFrame(u);
    };
  };
});
function In(e) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, In(e);
}
var fB = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function dB(e, t) {
  if (e == null) return {};
  var r = pB(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function pB(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Kf(e) {
  return mB(e) || yB(e) || vB(e) || hB();
}
function hB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vB(e, t) {
  if (e) {
    if (typeof e == "string") return bp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bp(e, t);
  }
}
function yB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function mB(e) {
  if (Array.isArray(e)) return bp(e);
}
function bp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zx(Object(r), !0).forEach(function(n) {
      Ca(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ca(e, t, r) {
  return t = aA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, aA(n.key), n);
  }
}
function xB(e, t, r) {
  return t && bB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function aA(e) {
  var t = wB(e, "string");
  return In(t) === "symbol" ? t : String(t);
}
function wB(e, t) {
  if (In(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (In(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xp(e, t);
}
function xp(e, t) {
  return xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, xp(e, t);
}
function SB(e) {
  var t = _B();
  return function() {
    var n = Vo(e), a;
    if (t) {
      var i = Vo(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return wp(this, a);
  };
}
function wp(e, t) {
  if (t && (In(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Op(e);
}
function Op(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _B() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Vo(e) {
  return Vo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vo(e);
}
var Rt = /* @__PURE__ */ (function(e) {
  OB(r, e);
  var t = SB(r);
  function r(n, a) {
    var i;
    gB(this, r), i = t.call(this, n, a);
    var o = i.props, s = o.isActive, u = o.attributeName, c = o.from, f = o.to, l = o.steps, d = o.children, p = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(Op(i)), i.changeStyle = i.changeStyle.bind(Op(i)), !s || p <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: f
      }), wp(i);
    if (l && l.length)
      i.state = {
        style: l[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return i.state = {
          style: c
        }, wp(i);
      i.state = {
        style: u ? Ca({}, u, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return xB(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.isActive, o = a.canBegin;
      this.mounted = !0, !(!i || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(a) {
      var i = this.props, o = i.isActive, s = i.canBegin, u = i.attributeName, c = i.shouldReAnimate, f = i.to, l = i.from, d = this.state.style;
      if (s) {
        if (!o) {
          var p = {
            style: u ? Ca({}, u, f) : f
          };
          this.state && d && (u && d[u] !== f || !u && d !== f) && this.setState(p);
          return;
        }
        if (!(Cq(a.to, f) && a.canBegin && a.isActive)) {
          var y = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var h = y || c ? l : a.to;
          if (this.state && d) {
            var v = {
              style: u ? Ca({}, u, h) : h
            };
            (u && d[u] !== h || !u && d !== h) && this.setState(v);
          }
          this.runAnimation(Ct(Ct({}, this.props), {}, {
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
      var i = this, o = a.from, s = a.to, u = a.duration, c = a.easing, f = a.begin, l = a.onAnimationEnd, d = a.onAnimationStart, p = lB(o, s, Qq(c), u, this.changeStyle), y = function() {
        i.stopJSAnimation = p();
      };
      this.manager.start([d, f, y, u, l]);
    }
  }, {
    key: "runStepAnimation",
    value: function(a) {
      var i = this, o = a.steps, s = a.begin, u = a.onAnimationStart, c = o[0], f = c.style, l = c.duration, d = l === void 0 ? 0 : l, p = function(h, v, g) {
        if (g === 0)
          return h;
        var b = v.duration, x = v.easing, O = x === void 0 ? "ease" : x, m = v.style, w = v.properties, S = v.onAnimationEnd, A = g > 0 ? o[g - 1] : v, P = w || Object.keys(m);
        if (typeof O == "function" || O === "spring")
          return [].concat(Kf(h), [i.runJSAnimation.bind(i, {
            from: A.style,
            to: m,
            duration: b,
            easing: O
          }), b]);
        var k = Kx(P, b, O), E = Ct(Ct(Ct({}, A.style), m), {}, {
          transition: k
        });
        return [].concat(Kf(h), [E, b, S]).filter(Bq);
      };
      return this.manager.start([u].concat(Kf(o.reduce(p, [f, Math.max(d, s)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = Dq());
      var i = a.begin, o = a.duration, s = a.attributeName, u = a.to, c = a.easing, f = a.onAnimationStart, l = a.onAnimationEnd, d = a.steps, p = a.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var h = s ? Ca({}, s, u) : u, v = Kx(Object.keys(h), o, c);
      y.start([f, i, Ct(Ct({}, h), {}, {
        transition: v
      }), o, l]);
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
      var u = dB(a, fB), c = zr.count(i), f = this.state.style;
      if (typeof i == "function")
        return i(f);
      if (!s || c === 0 || o <= 0)
        return i;
      var l = function(p) {
        var y = p.props, h = y.style, v = h === void 0 ? {} : h, g = y.className, b = /* @__PURE__ */ Le(p, Ct(Ct({}, u), {}, {
          style: Ct(Ct({}, v), f),
          className: g
        }));
        return b;
      };
      return c === 1 ? l(zr.only(i)) : /* @__PURE__ */ T.createElement("div", null, zr.map(i, function(d) {
        return l(d);
      }));
    }
  }]), r;
})(Et);
Rt.displayName = "Animate";
Rt.defaultProps = {
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
Rt.propTypes = {
  from: ge.oneOfType([ge.object, ge.string]),
  to: ge.oneOfType([ge.object, ge.string]),
  attributeName: ge.string,
  // animation duration
  duration: ge.number,
  begin: ge.number,
  easing: ge.oneOfType([ge.string, ge.func]),
  steps: ge.arrayOf(ge.shape({
    duration: ge.number.isRequired,
    style: ge.object.isRequired,
    easing: ge.oneOfType([ge.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), ge.func]),
    // transition css properties(dash case), optional
    properties: ge.arrayOf("string"),
    onAnimationEnd: ge.func
  })),
  children: ge.oneOfType([ge.node, ge.func]),
  isActive: ge.bool,
  canBegin: ge.bool,
  onAnimationEnd: ge.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: ge.bool,
  onAnimationStart: ge.func,
  onAnimationReStart: ge.func
};
function hi(e) {
  "@babel/helpers - typeof";
  return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hi(e);
}
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Go.apply(this, arguments);
}
function AB(e, t) {
  return CB(e) || TB(e, t) || EB(e, t) || PB();
}
function PB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EB(e, t) {
  if (e) {
    if (typeof e == "string") return Jx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jx(e, t);
  }
}
function Jx(e, t) {
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
    } catch (f) {
      c = !0, a = f;
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
function CB(e) {
  if (Array.isArray(e)) return e;
}
function Qx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function e1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qx(Object(r), !0).forEach(function(n) {
      jB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jB(e, t, r) {
  return t = MB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MB(e) {
  var t = $B(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function $B(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var t1 = function(t, r, n, a, i) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2), s = a >= 0 ? 1 : -1, u = n >= 0 ? 1 : -1, c = a >= 0 && n >= 0 || a < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && i instanceof Array) {
    for (var l = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      l[d] = i[d] > o ? o : i[d];
    f = "M".concat(t, ",").concat(r + s * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(t + u * l[0], ",").concat(r)), f += "L ".concat(t + n - u * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + s * l[1])), f += "L ".concat(t + n, ",").concat(r + a - s * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(t + n - u * l[2], ",").concat(r + a)), f += "L ".concat(t + u * l[3], ",").concat(r + a), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + a - s * l[3])), f += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var y = Math.min(o, i);
    f = "M ".concat(t, ",").concat(r + s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + u * y, ",").concat(r, `
            L `).concat(t + n - u * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + s * y, `
            L `).concat(t + n, ",").concat(r + a - s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n - u * y, ",").concat(r + a, `
            L `).concat(t + u * y, ",").concat(r + a, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t, ",").concat(r + a - s * y, " Z");
  } else
    f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(a, " h ").concat(-n, " Z");
  return f;
}, IB = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, s = r.width, u = r.height;
  if (Math.abs(s) > 0 && Math.abs(u) > 0) {
    var c = Math.min(i, i + s), f = Math.max(i, i + s), l = Math.min(o, o + u), d = Math.max(o, o + u);
    return n >= c && n <= f && a >= l && a <= d;
  }
  return !1;
}, kB = {
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
}, yv = function(t) {
  var r = e1(e1({}, kB), t), n = Vt(), a = Te(-1), i = AB(a, 2), o = i[0], s = i[1];
  Ue(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var O = n.current.getTotalLength();
        O && s(O);
      } catch {
      }
  }, []);
  var u = r.x, c = r.y, f = r.width, l = r.height, d = r.radius, p = r.className, y = r.animationEasing, h = r.animationDuration, v = r.animationBegin, g = r.isAnimationActive, b = r.isUpdateAnimationActive;
  if (u !== +u || c !== +c || f !== +f || l !== +l || f === 0 || l === 0)
    return null;
  var x = le("recharts-rectangle", p);
  return b ? /* @__PURE__ */ T.createElement(Rt, {
    canBegin: o > 0,
    from: {
      width: f,
      height: l,
      x: u,
      y: c
    },
    to: {
      width: f,
      height: l,
      x: u,
      y: c
    },
    duration: h,
    animationEasing: y,
    isActive: b
  }, function(O) {
    var m = O.width, w = O.height, S = O.x, A = O.y;
    return /* @__PURE__ */ T.createElement(Rt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: h,
      isActive: g,
      easing: y
    }, /* @__PURE__ */ T.createElement("path", Go({}, ae(r, !0), {
      className: x,
      d: t1(S, A, m, w, d),
      ref: n
    })));
  }) : /* @__PURE__ */ T.createElement("path", Go({}, ae(r, !0), {
    className: x,
    d: t1(u, c, f, l, d)
  }));
}, NB = ["points", "className", "baseLinePoints", "connectNulls"];
function vn() {
  return vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vn.apply(this, arguments);
}
function DB(e, t) {
  if (e == null) return {};
  var r = RB(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function r1(e) {
  return FB(e) || BB(e) || qB(e) || LB();
}
function LB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qB(e, t) {
  if (e) {
    if (typeof e == "string") return Sp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sp(e, t);
  }
}
function BB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function FB(e) {
  if (Array.isArray(e)) return Sp(e);
}
function Sp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var n1 = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, zB = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    n1(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), n1(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, Na = function(t, r) {
  var n = zB(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(r1(i), r1(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, s, u) {
      return "".concat(o).concat(u === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, WB = function(t, r, n) {
  var a = Na(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(Na(r.reverse(), n).slice(1));
}, UB = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = DB(t, NB);
  if (!r || !r.length)
    return null;
  var s = le("recharts-polygon", n);
  if (a && a.length) {
    var u = o.stroke && o.stroke !== "none", c = WB(r, a, i);
    return /* @__PURE__ */ T.createElement("g", {
      className: s
    }, /* @__PURE__ */ T.createElement("path", vn({}, ae(o, !0), {
      fill: c.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: c
    })), u ? /* @__PURE__ */ T.createElement("path", vn({}, ae(o, !0), {
      fill: "none",
      d: Na(r, i)
    })) : null, u ? /* @__PURE__ */ T.createElement("path", vn({}, ae(o, !0), {
      fill: "none",
      d: Na(a, i)
    })) : null);
  }
  var f = Na(r, i);
  return /* @__PURE__ */ T.createElement("path", vn({}, ae(o, !0), {
    fill: f.slice(-1) === "Z" ? o.fill : "none",
    className: s,
    d: f
  }));
};
function _p() {
  return _p = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _p.apply(this, arguments);
}
var qi = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = le("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ T.createElement("circle", _p({}, ae(t, !1), yo(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function vi(e) {
  "@babel/helpers - typeof";
  return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vi(e);
}
var HB = ["x", "y", "top", "left", "width", "height", "className"];
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
function KB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? a1(Object(r), !0).forEach(function(n) {
      VB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VB(e, t, r) {
  return t = GB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GB(e) {
  var t = YB(e, "string");
  return vi(t) == "symbol" ? t : t + "";
}
function YB(e, t) {
  if (vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XB(e, t) {
  if (e == null) return {};
  var r = ZB(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ZB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var JB = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, QB = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, s = o === void 0 ? 0 : o, u = t.left, c = u === void 0 ? 0 : u, f = t.width, l = f === void 0 ? 0 : f, d = t.height, p = d === void 0 ? 0 : d, y = t.className, h = XB(t, HB), v = KB({
    x: n,
    y: i,
    top: s,
    left: c,
    width: l,
    height: p
  }, h);
  return !V(n) || !V(i) || !V(l) || !V(p) || !V(s) || !V(c) ? null : /* @__PURE__ */ T.createElement("path", Ap({}, ae(v, !0), {
    className: le("recharts-cross", y),
    d: JB(n, i, l, p, s, c)
  }));
}, Vf, i1;
function e3() {
  if (i1) return Vf;
  i1 = 1;
  var e = Bs(), t = m_(), r = Xt();
  function n(a, i) {
    return a && a.length ? e(a, r(i, 2), t) : void 0;
  }
  return Vf = n, Vf;
}
var t3 = e3();
const r3 = /* @__PURE__ */ xe(t3);
var Gf, o1;
function n3() {
  if (o1) return Gf;
  o1 = 1;
  var e = Bs(), t = Xt(), r = g_();
  function n(a, i) {
    return a && a.length ? e(a, t(i, 2), r) : void 0;
  }
  return Gf = n, Gf;
}
var a3 = n3();
const i3 = /* @__PURE__ */ xe(a3);
var o3 = ["cx", "cy", "angle", "ticks", "axisLine"], s3 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function kn(e) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kn(e);
}
function Da() {
  return Da = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Da.apply(this, arguments);
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
function Mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? s1(Object(r), !0).forEach(function(n) {
      Us(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u1(e, t) {
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
function c3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, oA(n.key), n);
  }
}
function l3(e, t, r) {
  return t && c1(e.prototype, t), r && c1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function f3(e, t, r) {
  return t = Yo(t), d3(e, iA() ? Reflect.construct(t, r || [], Yo(e).constructor) : t.apply(e, r));
}
function d3(e, t) {
  if (t && (kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return p3(e);
}
function p3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function iA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (iA = function() {
    return !!e;
  })();
}
function Yo(e) {
  return Yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yo(e);
}
function h3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pp(e, t);
}
function Pp(e, t) {
  return Pp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Pp(e, t);
}
function Us(e, t, r) {
  return t = oA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oA(e) {
  var t = v3(e, "string");
  return kn(t) == "symbol" ? t : t + "";
}
function v3(e, t) {
  if (kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hs = /* @__PURE__ */ (function(e) {
  function t() {
    return c3(this, t), f3(this, t, arguments);
  }
  return h3(t, e), l3(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var a = n.coordinate, i = this.props, o = i.angle, s = i.cx, u = i.cy;
        return Ae(s, u, a, o);
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = r3(s, function(f) {
        return f.coordinate || 0;
      }), c = i3(s, function(f) {
        return f.coordinate || 0;
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = n.axisLine, c = u1(n, o3), f = s.reduce(function(y, h) {
        return [Math.min(y[0], h.coordinate), Math.max(y[1], h.coordinate)];
      }, [1 / 0, -1 / 0]), l = Ae(a, i, f[0], o), d = Ae(a, i, f[1], o), p = Mr(Mr(Mr({}, ae(c, !1)), {}, {
        fill: "none"
      }, ae(u, !1)), {}, {
        x1: l.x,
        y1: l.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ T.createElement("line", Da({
        className: "recharts-polar-radius-axis-line"
      }, p));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.angle, u = a.tickFormatter, c = a.stroke, f = u1(a, s3), l = this.getTickTextAnchor(), d = ae(f, !1), p = ae(o, !1), y = i.map(function(h, v) {
        var g = n.getTickValueCoord(h), b = Mr(Mr(Mr(Mr({
          textAnchor: l,
          transform: "rotate(".concat(90 - s, ", ").concat(g.x, ", ").concat(g.y, ")")
        }, d), {}, {
          stroke: "none",
          fill: c
        }, p), {}, {
          index: v
        }, g), {}, {
          payload: h
        });
        return /* @__PURE__ */ T.createElement(fe, Da({
          className: le("recharts-polar-radius-axis-tick", K_(o)),
          key: "tick-".concat(h.coordinate)
        }, Xr(n.props, h, v)), t.renderTickItem(o, b, u ? u(h.value, v) : h.value));
      });
      return /* @__PURE__ */ T.createElement(fe, {
        className: "recharts-polar-radius-axis-ticks"
      }, y);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.axisLine, o = n.tick;
      return !a || !a.length ? null : /* @__PURE__ */ T.createElement(fe, {
        className: le("recharts-polar-radius-axis", this.props.className)
      }, i && this.renderAxisLine(), o && this.renderTicks(), Be.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ T.isValidElement(n) ? o = /* @__PURE__ */ T.cloneElement(n, a) : oe(n) ? o = n(a) : o = /* @__PURE__ */ T.createElement(wr, Da({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), i), o;
    }
  }]);
})(Et);
Us(Hs, "displayName", "PolarRadiusAxis");
Us(Hs, "axisType", "radiusAxis");
Us(Hs, "defaultProps", {
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
function Nn(e) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e);
}
function Dr() {
  return Dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dr.apply(this, arguments);
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
function $r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? l1(Object(r), !0).forEach(function(n) {
      Ks(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function f1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, uA(n.key), n);
  }
}
function m3(e, t, r) {
  return t && f1(e.prototype, t), r && f1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function g3(e, t, r) {
  return t = Xo(t), b3(e, sA() ? Reflect.construct(t, r || [], Xo(e).constructor) : t.apply(e, r));
}
function b3(e, t) {
  if (t && (Nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return x3(e);
}
function x3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sA = function() {
    return !!e;
  })();
}
function Xo(e) {
  return Xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xo(e);
}
function w3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ep(e, t);
}
function Ep(e, t) {
  return Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ep(e, t);
}
function Ks(e, t, r) {
  return t = uA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uA(e) {
  var t = O3(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function O3(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var S3 = Math.PI / 180, d1 = 1e-5, Vs = /* @__PURE__ */ (function(e) {
  function t() {
    return y3(this, t), g3(this, t, arguments);
  }
  return w3(t, e), m3(t, [{
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
        var a = this.props, i = a.cx, o = a.cy, s = a.radius, u = a.orientation, c = a.tickSize, f = c || 8, l = Ae(i, o, s, n.coordinate), d = Ae(i, o, s + (u === "inner" ? -1 : 1) * f, n.coordinate);
        return {
          x1: l.x,
          y1: l.y,
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
      var a = this.props.orientation, i = Math.cos(-n.coordinate * S3), o;
      return i > d1 ? o = a === "outer" ? "start" : "end" : i < -d1 ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, s = n.axisLine, u = n.axisLineType, c = $r($r({}, ae(this.props, !1)), {}, {
        fill: "none"
      }, ae(s, !1));
      if (u === "circle")
        return /* @__PURE__ */ T.createElement(qi, Dr({
          className: "recharts-polar-angle-axis-line"
        }, c, {
          cx: a,
          cy: i,
          r: o
        }));
      var f = this.props.ticks, l = f.map(function(d) {
        return Ae(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ T.createElement(UB, Dr({
        className: "recharts-polar-angle-axis-line"
      }, c, {
        points: l
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.tickLine, u = a.tickFormatter, c = a.stroke, f = ae(this.props, !1), l = ae(o, !1), d = $r($r({}, f), {}, {
        fill: "none"
      }, ae(s, !1)), p = i.map(function(y, h) {
        var v = n.getTickLineCoord(y), g = n.getTickTextAnchor(y), b = $r($r($r({
          textAnchor: g
        }, f), {}, {
          stroke: "none",
          fill: c
        }, l), {}, {
          index: h,
          payload: y,
          x: v.x2,
          y: v.y2
        });
        return /* @__PURE__ */ T.createElement(fe, Dr({
          className: le("recharts-polar-angle-axis-tick", K_(o)),
          key: "tick-".concat(y.coordinate)
        }, Xr(n.props, y, h)), s && /* @__PURE__ */ T.createElement("line", Dr({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, v)), o && t.renderTickItem(o, b, u ? u(y.value, h) : y.value));
      });
      return /* @__PURE__ */ T.createElement(fe, {
        className: "recharts-polar-angle-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.radius, o = n.axisLine;
      return i <= 0 || !a || !a.length ? null : /* @__PURE__ */ T.createElement(fe, {
        className: le("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ T.isValidElement(n) ? o = /* @__PURE__ */ T.cloneElement(n, a) : oe(n) ? o = n(a) : o = /* @__PURE__ */ T.createElement(wr, Dr({}, a, {
        className: "recharts-polar-angle-axis-tick-value"
      }), i), o;
    }
  }]);
})(Et);
Ks(Vs, "displayName", "PolarAngleAxis");
Ks(Vs, "axisType", "angleAxis");
Ks(Vs, "defaultProps", {
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
var Yf, p1;
function _3() {
  if (p1) return Yf;
  p1 = 1;
  var e = BO(), t = e(Object.getPrototypeOf, Object);
  return Yf = t, Yf;
}
var Xf, h1;
function A3() {
  if (h1) return Xf;
  h1 = 1;
  var e = ur(), t = _3(), r = cr(), n = "[object Object]", a = Function.prototype, i = Object.prototype, o = a.toString, s = i.hasOwnProperty, u = o.call(Object);
  function c(f) {
    if (!r(f) || e(f) != n)
      return !1;
    var l = t(f);
    if (l === null)
      return !0;
    var d = s.call(l, "constructor") && l.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == u;
  }
  return Xf = c, Xf;
}
var P3 = A3();
const E3 = /* @__PURE__ */ xe(P3);
var Zf, v1;
function T3() {
  if (v1) return Zf;
  v1 = 1;
  var e = ur(), t = cr(), r = "[object Boolean]";
  function n(a) {
    return a === !0 || a === !1 || t(a) && e(a) == r;
  }
  return Zf = n, Zf;
}
var C3 = T3();
const j3 = /* @__PURE__ */ xe(C3);
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
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
function M3(e, t) {
  return N3(e) || k3(e, t) || I3(e, t) || $3();
}
function $3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function I3(e, t) {
  if (e) {
    if (typeof e == "string") return y1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y1(e, t);
  }
}
function y1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function k3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function N3(e) {
  if (Array.isArray(e)) return e;
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
function g1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? m1(Object(r), !0).forEach(function(n) {
      D3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function D3(e, t, r) {
  return t = R3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R3(e) {
  var t = L3(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function L3(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var b1 = function(t, r, n, a, i) {
  var o = n - a, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + i), s += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, q3 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, B3 = function(t) {
  var r = g1(g1({}, q3), t), n = Vt(), a = Te(-1), i = M3(a, 2), o = i[0], s = i[1];
  Ue(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var x = n.current.getTotalLength();
        x && s(x);
      } catch {
      }
  }, []);
  var u = r.x, c = r.y, f = r.upperWidth, l = r.lowerWidth, d = r.height, p = r.className, y = r.animationEasing, h = r.animationDuration, v = r.animationBegin, g = r.isUpdateAnimationActive;
  if (u !== +u || c !== +c || f !== +f || l !== +l || d !== +d || f === 0 && l === 0 || d === 0)
    return null;
  var b = le("recharts-trapezoid", p);
  return g ? /* @__PURE__ */ T.createElement(Rt, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: u,
      y: c
    },
    to: {
      upperWidth: f,
      lowerWidth: l,
      height: d,
      x: u,
      y: c
    },
    duration: h,
    animationEasing: y,
    isActive: g
  }, function(x) {
    var O = x.upperWidth, m = x.lowerWidth, w = x.height, S = x.x, A = x.y;
    return /* @__PURE__ */ T.createElement(Rt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: h,
      easing: y
    }, /* @__PURE__ */ T.createElement("path", Zo({}, ae(r, !0), {
      className: b,
      d: b1(S, A, O, m, w),
      ref: n
    })));
  }) : /* @__PURE__ */ T.createElement("g", null, /* @__PURE__ */ T.createElement("path", Zo({}, ae(r, !0), {
    className: b,
    d: b1(u, c, f, l, d)
  })));
}, F3 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
function z3(e, t) {
  if (e == null) return {};
  var r = W3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function W3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function Jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? x1(Object(r), !0).forEach(function(n) {
      U3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U3(e, t, r) {
  return t = H3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H3(e) {
  var t = K3(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function K3(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function V3(e, t) {
  return Jo(Jo({}, t), e);
}
function G3(e, t) {
  return e === "symbols";
}
function w1(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ T.createElement(yv, r);
    case "trapezoid":
      return /* @__PURE__ */ T.createElement(B3, r);
    case "sector":
      return /* @__PURE__ */ T.createElement(Y_, r);
    case "symbols":
      if (G3(t))
        return /* @__PURE__ */ T.createElement(qh, r);
      break;
    default:
      return null;
  }
}
function Y3(e) {
  return /* @__PURE__ */ It(e) ? e.props : e;
}
function cA(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? V3 : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, s = e.isActive, u = z3(e, F3), c;
  if (/* @__PURE__ */ It(t))
    c = /* @__PURE__ */ Le(t, Jo(Jo({}, u), Y3(t)));
  else if (oe(t))
    c = t(u);
  else if (E3(t) && !j3(t)) {
    var f = a(t, u);
    c = /* @__PURE__ */ T.createElement(w1, {
      shapeType: r,
      elementProps: f
    });
  } else {
    var l = u;
    c = /* @__PURE__ */ T.createElement(w1, {
      shapeType: r,
      elementProps: l
    });
  }
  return s ? /* @__PURE__ */ T.createElement(fe, {
    className: o
  }, c) : c;
}
function Gs(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Ys(e, t) {
  return t != null && "sectors" in e.props;
}
function gi(e, t) {
  return t != null && "points" in e.props;
}
function X3(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function Z3(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function J3(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function Q3(e, t) {
  var r;
  return Gs(e, t) ? r = X3 : Ys(e, t) ? r = Z3 : gi(e, t) && (r = J3), r;
}
function eF(e, t) {
  var r;
  return Gs(e, t) ? r = "trapezoids" : Ys(e, t) ? r = "sectors" : gi(e, t) && (r = "points"), r;
}
function tF(e, t) {
  if (Gs(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Ys(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return gi(e, t) ? t.payload : {};
}
function rF(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = eF(r, t), i = tF(r, t), o = n.filter(function(u, c) {
    var f = Yr(i, u), l = r.props[a].filter(function(y) {
      var h = Q3(r, t);
      return h(y, t);
    }), d = r.props[a].indexOf(l[l.length - 1]), p = c === d;
    return f && p;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var po;
function Dn(e) {
  "@babel/helpers - typeof";
  return Dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dn(e);
}
function yn() {
  return yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yn.apply(this, arguments);
}
function O1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? O1(Object(r), !0).forEach(function(n) {
      wt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function S1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fA(n.key), n);
  }
}
function aF(e, t, r) {
  return t && S1(e.prototype, t), r && S1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function iF(e, t, r) {
  return t = Qo(t), oF(e, lA() ? Reflect.construct(t, r || [], Qo(e).constructor) : t.apply(e, r));
}
function oF(e, t) {
  if (t && (Dn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sF(e);
}
function sF(e) {
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
function Qo(e) {
  return Qo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qo(e);
}
function uF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Tp(e, t);
}
function Tp(e, t) {
  return Tp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Tp(e, t);
}
function wt(e, t, r) {
  return t = fA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fA(e) {
  var t = cF(e, "string");
  return Dn(t) == "symbol" ? t : t + "";
}
function cF(e, t) {
  if (Dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var fr = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return nF(this, t), n = iF(this, t, [r]), wt(n, "pieRef", null), wt(n, "sectorRefs", []), wt(n, "id", tn("recharts-pie-")), wt(n, "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), oe(a) && a();
    }), wt(n, "handleAnimationStart", function() {
      var a = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), oe(a) && a();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return uF(t, e), aF(t, [{
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
      var i = this.props, o = i.label, s = i.labelLine, u = i.dataKey, c = i.valueKey, f = ae(this.props, !1), l = ae(o, !1), d = ae(s, !1), p = o && o.offsetRadius || 20, y = n.map(function(h, v) {
        var g = (h.startAngle + h.endAngle) / 2, b = Ae(h.cx, h.cy, h.outerRadius + p, g), x = Se(Se(Se(Se({}, f), h), {}, {
          stroke: "none"
        }, l), {}, {
          index: v,
          textAnchor: t.getTextAnchor(b.x, h.cx)
        }, b), O = Se(Se(Se(Se({}, f), h), {}, {
          fill: "none",
          stroke: h.fill
        }, d), {}, {
          index: v,
          points: [Ae(h.cx, h.cy, h.outerRadius, g), b]
        }), m = u;
        return se(u) && se(c) ? m = "value" : se(u) && (m = c), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ T.createElement(fe, {
          key: "label-".concat(h.startAngle, "-").concat(h.endAngle, "-").concat(h.midAngle, "-").concat(v)
        }, s && t.renderLabelLineItem(s, O, "line"), t.renderLabelItem(o, x, Ie(h, m)));
      });
      return /* @__PURE__ */ T.createElement(fe, {
        className: "recharts-pie-labels"
      }, y);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.activeShape, s = i.blendStroke, u = i.inactiveShape;
      return n.map(function(c, f) {
        if (c?.startAngle === 0 && c?.endAngle === 0 && n.length !== 1) return null;
        var l = a.isActiveIndex(f), d = u && a.hasActiveIndex() ? u : null, p = l ? o : d, y = Se(Se({}, c), {}, {
          stroke: s ? c.fill : c.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ T.createElement(fe, yn({
          ref: function(v) {
            v && !a.sectorRefs.includes(v) && a.sectorRefs.push(v);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Xr(a.props, c, f), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(c?.startAngle, "-").concat(c?.endAngle, "-").concat(c.midAngle, "-").concat(f)
        }), /* @__PURE__ */ T.createElement(cA, yn({
          option: p,
          isActive: l,
          shapeType: "sector"
        }, y)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.sectors, o = a.isAnimationActive, s = a.animationBegin, u = a.animationDuration, c = a.animationEasing, f = a.animationId, l = this.state, d = l.prevSectors, p = l.prevIsAnimationActive;
      return /* @__PURE__ */ T.createElement(Rt, {
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
        key: "pie-".concat(f, "-").concat(p),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(y) {
        var h = y.t, v = [], g = i && i[0], b = g.startAngle;
        return i.forEach(function(x, O) {
          var m = d && d[O], w = O > 0 ? pt(x, "paddingAngle", 0) : 0;
          if (m) {
            var S = qe(m.endAngle - m.startAngle, x.endAngle - x.startAngle), A = Se(Se({}, x), {}, {
              startAngle: b + w,
              endAngle: b + S(h) + w
            });
            v.push(A), b = A.endAngle;
          } else {
            var P = x.endAngle, k = x.startAngle, E = qe(0, P - k), I = E(h), C = Se(Se({}, x), {}, {
              startAngle: b + w,
              endAngle: b + I + w
            });
            v.push(C), b = C.endAngle;
          }
        }), /* @__PURE__ */ T.createElement(fe, null, n.renderSectorsStatically(v));
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
      return i && a && a.length && (!o || !Yr(o, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.hide, o = a.sectors, s = a.className, u = a.label, c = a.cx, f = a.cy, l = a.innerRadius, d = a.outerRadius, p = a.isAnimationActive, y = this.state.isAnimationFinished;
      if (i || !o || !o.length || !V(c) || !V(f) || !V(l) || !V(d))
        return null;
      var h = le("recharts-pie", s);
      return /* @__PURE__ */ T.createElement(fe, {
        tabIndex: this.props.rootTabIndex,
        className: h,
        ref: function(g) {
          n.pieRef = g;
        }
      }, this.renderSectors(), u && this.renderLabels(o), Be.renderCallByParent(this.props, null, !1), (!p || y) && _t.renderCallByParent(this.props, o, !1));
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
      if (/* @__PURE__ */ T.isValidElement(n))
        return /* @__PURE__ */ T.cloneElement(n, a);
      if (oe(n))
        return n(a);
      var o = le("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ T.createElement(Vr, yn({}, a, {
        key: i,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, a, i) {
      if (/* @__PURE__ */ T.isValidElement(n))
        return /* @__PURE__ */ T.cloneElement(n, a);
      var o = i;
      if (oe(n) && (o = n(a), /* @__PURE__ */ T.isValidElement(o)))
        return o;
      var s = le("recharts-pie-label-text", typeof n != "boolean" && !oe(n) ? n.className : "");
      return /* @__PURE__ */ T.createElement(wr, yn({}, a, {
        alignmentBaseline: "middle",
        className: s
      }), o);
    }
  }]);
})(Et);
po = fr;
wt(fr, "displayName", "Pie");
wt(fr, "defaultProps", {
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
  isAnimationActive: !Sr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
wt(fr, "parseDeltaAngle", function(e, t) {
  var r = et(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
wt(fr, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = ae(e, !1), a = ht(r, Is);
  return t && t.length ? t.map(function(i, o) {
    return Se(Se(Se({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return Se(Se({}, n), i.props);
  }) : [];
});
wt(fr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = H_(a, i), s = n + tt(e.cx, a, a / 2), u = r + tt(e.cy, i, i / 2), c = tt(e.innerRadius, o, 0), f = tt(e.outerRadius, o, o * 0.8), l = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: s,
    cy: u,
    innerRadius: c,
    outerRadius: f,
    maxRadius: l
  };
});
wt(fr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? Se(Se({}, t.type.defaultProps), t.props) : t.props, a = po.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, s = n.endAngle, u = n.paddingAngle, c = n.dataKey, f = n.nameKey, l = n.valueKey, d = n.tooltipType, p = Math.abs(n.minAngle), y = po.parseCoordinateOfPie(n, r), h = po.parseDeltaAngle(o, s), v = Math.abs(h), g = c;
  se(c) && se(l) ? (Nt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = "value") : se(c) && (Nt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = l);
  var b = a.filter(function(A) {
    return Ie(A, g, 0) !== 0;
  }).length, x = (v >= 360 ? b : b - 1) * u, O = v - b * p - x, m = a.reduce(function(A, P) {
    var k = Ie(P, g, 0);
    return A + (V(k) ? k : 0);
  }, 0), w;
  if (m > 0) {
    var S;
    w = a.map(function(A, P) {
      var k = Ie(A, g, 0), E = Ie(A, f, P), I = (V(k) ? k : 0) / m, C;
      P ? C = S.endAngle + et(h) * u * (k !== 0 ? 1 : 0) : C = o;
      var M = C + et(h) * ((k !== 0 ? p : 0) + I * O), $ = (C + M) / 2, N = (y.innerRadius + y.outerRadius) / 2, R = [{
        name: E,
        value: k,
        payload: A,
        dataKey: g,
        type: d
      }], q = Ae(y.cx, y.cy, N, $);
      return S = Se(Se(Se({
        percent: I,
        cornerRadius: i,
        name: E,
        tooltipPayload: R,
        midAngle: $,
        middleRadius: N,
        tooltipPosition: q
      }, A), y), {}, {
        value: Ie(A, g),
        startAngle: C,
        endAngle: M,
        payload: A,
        paddingAngle: et(h) * u
      }), S;
    });
  }
  return Se(Se({}, y), {}, {
    sectors: w,
    data: a
  });
});
var Jf, _1;
function lF() {
  if (_1) return Jf;
  _1 = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, a, i, o) {
    for (var s = -1, u = t(e((a - n) / (i || 1)), 0), c = Array(u); u--; )
      c[o ? u : ++s] = n, n += i;
    return c;
  }
  return Jf = r, Jf;
}
var Qf, A1;
function dA() {
  if (A1) return Qf;
  A1 = 1;
  var e = $S(), t = 1 / 0, r = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === t || a === -t) {
      var i = a < 0 ? -1 : 1;
      return i * r;
    }
    return a === a ? a : 0;
  }
  return Qf = n, Qf;
}
var ed, P1;
function fF() {
  if (P1) return ed;
  P1 = 1;
  var e = lF(), t = $s(), r = dA();
  function n(a) {
    return function(i, o, s) {
      return s && typeof s != "number" && t(i, o, s) && (o = s = void 0), i = r(i), o === void 0 ? (o = i, i = 0) : o = r(o), s = s === void 0 ? i < o ? 1 : -1 : r(s), e(i, o, s, a);
    };
  }
  return ed = n, ed;
}
var td, E1;
function dF() {
  if (E1) return td;
  E1 = 1;
  var e = fF(), t = e();
  return td = t, td;
}
var pF = dF();
const es = /* @__PURE__ */ xe(pF);
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
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
function C1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? T1(Object(r), !0).forEach(function(n) {
      pA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pA(e, t, r) {
  return t = hF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hF(e) {
  var t = vF(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function vF(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yF = ["Webkit", "Moz", "O", "ms"], mF = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = yF.reduce(function(i, o) {
    return C1(C1({}, i), {}, pA({}, o + n, r));
  }, {});
  return a[t] = r, a;
};
function Rn(e) {
  "@babel/helpers - typeof";
  return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rn(e);
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
function rd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? j1(Object(r), !0).forEach(function(n) {
      lt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function M1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vA(n.key), n);
  }
}
function bF(e, t, r) {
  return t && M1(e.prototype, t), r && M1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xF(e, t, r) {
  return t = rs(t), wF(e, hA() ? Reflect.construct(t, r || [], rs(e).constructor) : t.apply(e, r));
}
function wF(e, t) {
  if (t && (Rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return OF(e);
}
function OF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hA = function() {
    return !!e;
  })();
}
function rs(e) {
  return rs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, rs(e);
}
function SF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cp(e, t);
}
function Cp(e, t) {
  return Cp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Cp(e, t);
}
function lt(e, t, r) {
  return t = vA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vA(e) {
  var t = _F(e, "string");
  return Rn(t) == "symbol" ? t : t + "";
}
function _F(e, t) {
  if (Rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var AF = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var u = r.length, c = $a().domain(es(0, u)).range([i, i + o - s]), f = c.domain().map(function(l) {
    return c(l);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: c(n),
    endX: c(a),
    scale: c,
    scaleValues: f
  };
}, $1 = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Ln = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return gF(this, t), n = xF(this, t, [r]), lt(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), lt(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), lt(n, "handleDragEnd", function() {
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
    }), lt(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), lt(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), lt(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), lt(n, "handleSlideDragStart", function(a) {
      var i = $1(a) ? a.changedTouches[0] : a;
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
  return SF(t, e), bF(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var a = n.startX, i = n.endX, o = this.state.scaleValues, s = this.props, u = s.gap, c = s.data, f = c.length - 1, l = Math.min(a, i), d = Math.max(a, i), p = t.getIndexInRange(o, l), y = t.getIndexInRange(o, d);
      return {
        startIndex: p - p % u,
        endIndex: y === f ? f : y - y % u
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var a = this.props, i = a.data, o = a.tickFormatter, s = a.dataKey, u = Ie(i[n], s, n);
      return oe(o) ? o(u, n) : u;
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
      var a = this.state, i = a.slideMoveStartX, o = a.startX, s = a.endX, u = this.props, c = u.x, f = u.width, l = u.travellerWidth, d = u.startIndex, p = u.endIndex, y = u.onChange, h = n.pageX - i;
      h > 0 ? h = Math.min(h, c + f - l - s, c + f - l - o) : h < 0 && (h = Math.max(h, c - o, c - s));
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
      var i = $1(a) ? a.changedTouches[0] : a;
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
      var a = this.state, i = a.brushMoveStartX, o = a.movingTravellerId, s = a.endX, u = a.startX, c = this.state[o], f = this.props, l = f.x, d = f.width, p = f.travellerWidth, y = f.onChange, h = f.gap, v = f.data, g = {
        startX: this.state.startX,
        endX: this.state.endX
      }, b = n.pageX - i;
      b > 0 ? b = Math.min(b, l + d - p - c) : b < 0 && (b = Math.max(b, l - c)), g[o] = c + b;
      var x = this.getIndex(g), O = x.startIndex, m = x.endIndex, w = function() {
        var A = v.length - 1;
        return o === "startX" && (s > u ? O % h === 0 : m % h === 0) || s < u && m === A || o === "endX" && (s > u ? m % h === 0 : O % h === 0) || s > u && m === A;
      };
      this.setState(lt(lt({}, o, c + b), "brushMoveStartX", n.pageX), function() {
        y && w() && y(x);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, a) {
      var i = this, o = this.state, s = o.scaleValues, u = o.startX, c = o.endX, f = this.state[a], l = s.indexOf(f);
      if (l !== -1) {
        var d = l + n;
        if (!(d === -1 || d >= s.length)) {
          var p = s[d];
          a === "startX" && p >= c || a === "endX" && p <= u || this.setState(lt({}, a, p), function() {
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
      return /* @__PURE__ */ T.createElement("rect", {
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
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, u = n.data, c = n.children, f = n.padding, l = zr.only(c);
      return l ? /* @__PURE__ */ T.cloneElement(l, {
        x: a,
        y: i,
        width: o,
        height: s,
        margin: f,
        compact: !0,
        data: u
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, a) {
      var i, o, s = this, u = this.props, c = u.y, f = u.travellerWidth, l = u.height, d = u.traveller, p = u.ariaLabel, y = u.data, h = u.startIndex, v = u.endIndex, g = Math.max(n, this.props.x), b = rd(rd({}, ae(this.props, !1)), {}, {
        x: g,
        y: c,
        width: f,
        height: l
      }), x = p || "Min value: ".concat((i = y[h]) === null || i === void 0 ? void 0 : i.name, ", Max value: ").concat((o = y[v]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ T.createElement(fe, {
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
      }, t.renderTraveller(d, b));
    }
  }, {
    key: "renderSlide",
    value: function(n, a) {
      var i = this.props, o = i.y, s = i.height, u = i.stroke, c = i.travellerWidth, f = Math.min(n, a) + c, l = Math.max(Math.abs(a - n) - c, 0);
      return /* @__PURE__ */ T.createElement("rect", {
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
        x: f,
        y: o,
        width: l,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, a = n.startIndex, i = n.endIndex, o = n.y, s = n.height, u = n.travellerWidth, c = n.stroke, f = this.state, l = f.startX, d = f.endX, p = 5, y = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ T.createElement(fe, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ T.createElement(wr, ts({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(l, d) - p,
        y: o + s / 2
      }, y), this.getTextOfTick(a)), /* @__PURE__ */ T.createElement(wr, ts({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(l, d) + u + p,
        y: o + s / 2
      }, y), this.getTextOfTick(i)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.data, i = n.className, o = n.children, s = n.x, u = n.y, c = n.width, f = n.height, l = n.alwaysShowText, d = this.state, p = d.startX, y = d.endX, h = d.isTextActive, v = d.isSlideMoving, g = d.isTravellerMoving, b = d.isTravellerFocused;
      if (!a || !a.length || !V(s) || !V(u) || !V(c) || !V(f) || c <= 0 || f <= 0)
        return null;
      var x = le("recharts-brush", i), O = T.Children.count(o) === 1, m = mF("userSelect", "none");
      return /* @__PURE__ */ T.createElement(fe, {
        className: x,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), O && this.renderPanorama(), this.renderSlide(p, y), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(y, "endX"), (h || v || g || b || l) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var a = n.x, i = n.y, o = n.width, s = n.height, u = n.stroke, c = Math.floor(i + s / 2) - 1;
      return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("rect", {
        x: a,
        y: i,
        width: o,
        height: s,
        fill: u,
        stroke: "none"
      }), /* @__PURE__ */ T.createElement("line", {
        x1: a + 1,
        y1: c,
        x2: a + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ T.createElement("line", {
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
      return /* @__PURE__ */ T.isValidElement(n) ? i = /* @__PURE__ */ T.cloneElement(n, a) : oe(n) ? i = n(a) : i = t.renderDefaultTraveller(a), i;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var i = n.data, o = n.width, s = n.x, u = n.travellerWidth, c = n.updateId, f = n.startIndex, l = n.endIndex;
      if (i !== a.prevData || c !== a.prevUpdateId)
        return rd({
          prevData: i,
          prevTravellerWidth: u,
          prevUpdateId: c,
          prevX: s,
          prevWidth: o
        }, i && i.length ? AF({
          data: i,
          width: o,
          x: s,
          travellerWidth: u,
          startIndex: f,
          endIndex: l
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
})(Et);
lt(Ln, "displayName", "Brush");
lt(Ln, "defaultProps", {
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
var nd, I1;
function PF() {
  if (I1) return nd;
  I1 = 1;
  var e = Fh();
  function t(r, n) {
    var a;
    return e(r, function(i, o, s) {
      return a = n(i, o, s), !a;
    }), !!a;
  }
  return nd = t, nd;
}
var ad, k1;
function EF() {
  if (k1) return ad;
  k1 = 1;
  var e = IO(), t = Xt(), r = PF(), n = ot(), a = $s();
  function i(o, s, u) {
    var c = n(o) ? e : r;
    return u && a(o, s, u) && (s = void 0), c(o, t(s, 3));
  }
  return ad = i, ad;
}
var TF = EF();
const CF = /* @__PURE__ */ xe(TF);
var Kt = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, id, N1;
function jF() {
  if (N1) return id;
  N1 = 1;
  var e = ES();
  function t(r, n, a) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : r[n] = a;
  }
  return id = t, id;
}
var od, D1;
function MF() {
  if (D1) return od;
  D1 = 1;
  var e = jF(), t = AS(), r = Xt();
  function n(a, i) {
    var o = {};
    return i = r(i, 3), t(a, function(s, u, c) {
      e(o, u, i(s, u, c));
    }), o;
  }
  return od = n, od;
}
var $F = MF();
const IF = /* @__PURE__ */ xe($F);
var sd, R1;
function kF() {
  if (R1) return sd;
  R1 = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return sd = e, sd;
}
var ud, L1;
function NF() {
  if (L1) return ud;
  L1 = 1;
  var e = Fh();
  function t(r, n) {
    var a = !0;
    return e(r, function(i, o, s) {
      return a = !!n(i, o, s), a;
    }), a;
  }
  return ud = t, ud;
}
var cd, q1;
function DF() {
  if (q1) return cd;
  q1 = 1;
  var e = kF(), t = NF(), r = Xt(), n = ot(), a = $s();
  function i(o, s, u) {
    var c = n(o) ? e : t;
    return u && a(o, s, u) && (s = void 0), c(o, r(s, 3));
  }
  return cd = i, cd;
}
var RF = DF();
const yA = /* @__PURE__ */ xe(RF);
var LF = ["x", "y"];
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
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
function _a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? B1(Object(r), !0).forEach(function(n) {
      qF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qF(e, t, r) {
  return t = BF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BF(e) {
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
  return (t === "string" ? String : Number)(e);
}
function zF(e, t) {
  if (e == null) return {};
  var r = WF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function WF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function UF(e, t) {
  var r = e.x, n = e.y, a = zF(e, LF), i = "".concat(r), o = parseInt(i, 10), s = "".concat(n), u = parseInt(s, 10), c = "".concat(t.height || a.height), f = parseInt(c, 10), l = "".concat(t.width || a.width), d = parseInt(l, 10);
  return _a(_a(_a(_a(_a({}, t), a), o ? {
    x: o
  } : {}), u ? {
    y: u
  } : {}), {}, {
    height: f,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function F1(e) {
  return /* @__PURE__ */ T.createElement(cA, jp({
    shapeType: "rectangle",
    propTransformer: UF,
    activeClassName: "recharts-active-bar"
  }, e));
}
var HF = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (process.env.NODE_ENV !== "production" ? at(!1, "minPointSize callback function received a value with type of ".concat(qn(n), ". Currently only numbers are supported.")) : at()), r);
  };
}, KF = ["value", "background"], mA;
function Bn(e) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bn(e);
}
function VF(e, t) {
  if (e == null) return {};
  var r = GF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function GF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function z1(e, t) {
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
    t % 2 ? z1(Object(r), !0).forEach(function(n) {
      br(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function W1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bA(n.key), n);
  }
}
function XF(e, t, r) {
  return t && W1(e.prototype, t), r && W1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ZF(e, t, r) {
  return t = as(t), JF(e, gA() ? Reflect.construct(t, r || [], as(e).constructor) : t.apply(e, r));
}
function JF(e, t) {
  if (t && (Bn(t) === "object" || typeof t == "function"))
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
function gA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gA = function() {
    return !!e;
  })();
}
function as(e) {
  return as = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, as(e);
}
function e5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Mp(e, t);
}
function Mp(e, t) {
  return Mp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Mp(e, t);
}
function br(e, t, r) {
  return t = bA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bA(e) {
  var t = t5(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function t5(e, t) {
  if (Bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Er = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    YF(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = ZF(this, t, [].concat(a)), br(r, "state", {
      isAnimationFinished: !1
    }), br(r, "id", tn("recharts-bar-")), br(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), br(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return e5(t, e), XF(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, s = i.dataKey, u = i.activeIndex, c = i.activeBar, f = ae(this.props, !1);
      return n && n.map(function(l, d) {
        var p = d === u, y = p ? c : o, h = ke(ke(ke({}, f), l), {}, {
          isActive: p,
          option: y,
          index: d,
          dataKey: s,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ T.createElement(fe, ns({
          className: "recharts-bar-rectangle"
        }, Xr(a.props, l, d), {
          key: "rectangle-".concat(l?.x, "-").concat(l?.y, "-").concat(l?.value)
        }), /* @__PURE__ */ T.createElement(F1, h));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, s = a.isAnimationActive, u = a.animationBegin, c = a.animationDuration, f = a.animationEasing, l = a.animationId, d = this.state.prevData;
      return /* @__PURE__ */ T.createElement(Rt, {
        begin: u,
        duration: c,
        isActive: s,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(p) {
        var y = p.t, h = i.map(function(v, g) {
          var b = d && d[g];
          if (b) {
            var x = qe(b.x, v.x), O = qe(b.y, v.y), m = qe(b.width, v.width), w = qe(b.height, v.height);
            return ke(ke({}, v), {}, {
              x: x(y),
              y: O(y),
              width: m(y),
              height: w(y)
            });
          }
          if (o === "horizontal") {
            var S = qe(0, v.height), A = S(y);
            return ke(ke({}, v), {}, {
              y: v.y + v.height - A,
              height: A
            });
          }
          var P = qe(0, v.width), k = P(y);
          return ke(ke({}, v), {}, {
            width: k
          });
        });
        return /* @__PURE__ */ T.createElement(fe, null, n.renderRectanglesStatically(h));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !Yr(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, s = a.activeIndex, u = ae(this.props.background, !1);
      return i.map(function(c, f) {
        c.value;
        var l = c.background, d = VF(c, KF);
        if (!l)
          return null;
        var p = ke(ke(ke(ke(ke({}, d), {}, {
          fill: "#eee"
        }, l), u), Xr(n.props, c, f)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: f,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ T.createElement(F1, ns({
          key: "background-bar-".concat(f),
          option: n.props.background,
          isActive: f === s
        }, p));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.data, s = i.xAxis, u = i.yAxis, c = i.layout, f = i.children, l = ht(f, Li);
      if (!l)
        return null;
      var d = c === "vertical" ? o[0].height / 2 : o[0].width / 2, p = function(v, g) {
        var b = Array.isArray(v.value) ? v.value[1] : v.value;
        return {
          x: v.x,
          y: v.y,
          value: b,
          errorVal: Ie(v, g)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ T.createElement(fe, y, l.map(function(h) {
        return /* @__PURE__ */ T.cloneElement(h, {
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
      var n = this.props, a = n.hide, i = n.data, o = n.className, s = n.xAxis, u = n.yAxis, c = n.left, f = n.top, l = n.width, d = n.height, p = n.isAnimationActive, y = n.background, h = n.id;
      if (a || !i || !i.length)
        return null;
      var v = this.state.isAnimationFinished, g = le("recharts-bar", o), b = s && s.allowDataOverflow, x = u && u.allowDataOverflow, O = b || x, m = se(h) ? this.id : h;
      return /* @__PURE__ */ T.createElement(fe, {
        className: g
      }, b || x ? /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: b ? c : c - l / 2,
        y: x ? f : f - d / 2,
        width: b ? l : l * 2,
        height: x ? d : d * 2
      }))) : null, /* @__PURE__ */ T.createElement(fe, {
        className: "recharts-bar-rectangles",
        clipPath: O ? "url(#clipPath-".concat(m, ")") : null
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, m), (!p || v) && _t.renderCallByParent(this.props, i));
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
})(Et);
mA = Er;
br(Er, "displayName", "Bar");
br(Er, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Sr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
br(Er, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, s = e.xAxisTicks, u = e.yAxisTicks, c = e.stackedData, f = e.dataStartIndex, l = e.displayedData, d = e.offset, p = AR(n, r);
  if (!p)
    return null;
  var y = t.layout, h = r.type.defaultProps, v = h !== void 0 ? ke(ke({}, h), r.props) : r.props, g = v.dataKey, b = v.children, x = v.minPointSize, O = y === "horizontal" ? o : i, m = c ? O.scale.domain() : null, w = $R({
    numericAxis: O
  }), S = ht(b, Is), A = l.map(function(P, k) {
    var E, I, C, M, $, N;
    c ? E = PR(c[f + k], m) : (E = Ie(P, g), Array.isArray(E) || (E = [w, E]));
    var R = HF(x, mA.defaultProps.minPointSize)(E[1], k);
    if (y === "horizontal") {
      var q, z = [o.scale(E[0]), o.scale(E[1])], D = z[0], L = z[1];
      I = sx({
        axis: i,
        ticks: s,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: k
      }), C = (q = L ?? D) !== null && q !== void 0 ? q : void 0, M = p.size;
      var F = D - L;
      if ($ = Number.isNaN(F) ? 0 : F, N = {
        x: I,
        y: o.y,
        width: M,
        height: o.height
      }, Math.abs(R) > 0 && Math.abs($) < Math.abs(R)) {
        var H = et($ || R) * (Math.abs(R) - Math.abs($));
        C -= H, $ += H;
      }
    } else {
      var X = [i.scale(E[0]), i.scale(E[1])], te = X[0], ne = X[1];
      if (I = te, C = sx({
        axis: o,
        ticks: u,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: k
      }), M = ne - te, $ = p.size, N = {
        x: i.x,
        y: C,
        width: i.width,
        height: $
      }, Math.abs(R) > 0 && Math.abs(M) < Math.abs(R)) {
        var re = et(M || R) * (Math.abs(R) - Math.abs(M));
        M += re;
      }
    }
    return ke(ke(ke({}, P), {}, {
      x: I,
      y: C,
      width: M,
      height: $,
      value: c ? E : E[1],
      payload: P,
      background: N
    }, S && S[k] && S[k].props), {}, {
      tooltipPayload: [W_(r, P)],
      tooltipPosition: {
        x: I + M / 2,
        y: C + $ / 2
      }
    });
  });
  return ke({
    data: A,
    layout: y
  }, d);
});
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
function r5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xA(n.key), n);
  }
}
function n5(e, t, r) {
  return t && U1(e.prototype, t), r && U1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function H1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? H1(Object(r), !0).forEach(function(n) {
      Xs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xs(e, t, r) {
  return t = xA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xA(e) {
  var t = a5(e, "string");
  return xi(t) == "symbol" ? t : t + "";
}
function a5(e, t) {
  if (xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mv = function(t, r, n, a, i) {
  var o = t.width, s = t.height, u = t.layout, c = t.children, f = Object.keys(r), l = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, d = !!ft(c, Er);
  return f.reduce(function(p, y) {
    var h = r[y], v = h.orientation, g = h.domain, b = h.padding, x = b === void 0 ? {} : b, O = h.mirror, m = h.reversed, w = "".concat(v).concat(O ? "Mirror" : ""), S, A, P, k, E;
    if (h.type === "number" && (h.padding === "gap" || h.padding === "no-gap")) {
      var I = g[1] - g[0], C = 1 / 0, M = h.categoricalDomain.sort();
      if (M.forEach(function(X, te) {
        te > 0 && (C = Math.min((X || 0) - (M[te - 1] || 0), C));
      }), Number.isFinite(C)) {
        var $ = C / I, N = h.layout === "vertical" ? n.height : n.width;
        if (h.padding === "gap" && (S = $ * N / 2), h.padding === "no-gap") {
          var R = tt(t.barCategoryGap, $ * N), q = $ * N / 2;
          S = q - R - (q - R) / N * R;
        }
      }
    }
    a === "xAxis" ? A = [n.left + (x.left || 0) + (S || 0), n.left + n.width - (x.right || 0) - (S || 0)] : a === "yAxis" ? A = u === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (S || 0), n.top + n.height - (x.bottom || 0) - (S || 0)] : A = h.range, m && (A = [A[1], A[0]]);
    var z = q_(h, i, d), D = z.scale, L = z.realScaleType;
    D.domain(g).range(A), B_(D);
    var F = F_(D, jt(jt({}, h), {}, {
      realScaleType: L
    }));
    a === "xAxis" ? (E = v === "top" && !O || v === "bottom" && O, P = n.left, k = l[w] - E * h.height) : a === "yAxis" && (E = v === "left" && !O || v === "right" && O, P = l[w] - E * h.width, k = n.top);
    var H = jt(jt(jt({}, h), F), {}, {
      realScaleType: L,
      x: P,
      y: k,
      scale: D,
      width: a === "xAxis" ? n.width : h.width,
      height: a === "yAxis" ? n.height : h.height
    });
    return H.bandSize = Fo(H, F), !h.hide && a === "xAxis" ? l[w] += (E ? -1 : 1) * H.height : h.hide || (l[w] += (E ? -1 : 1) * H.width), jt(jt({}, p), {}, Xs({}, y, H));
  }, {});
}, wA = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, i5 = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return wA({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, OA = /* @__PURE__ */ (function() {
  function e(t) {
    r5(this, e), this.scale = t;
  }
  return n5(e, [{
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
Xs(OA, "EPS", 1e-4);
var gv = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return jt(jt({}, n), {}, Xs({}, a, OA.create(t[a])));
  }, {});
  return jt(jt({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, s = i.position;
      return IF(a, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(a) {
      return yA(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function o5(e) {
  return (e % 180 + 180) % 180;
}
var s5 = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = o5(a), o = i * Math.PI / 180, s = Math.atan(n / r), u = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(u);
}, ld, K1;
function u5() {
  if (K1) return ld;
  K1 = 1;
  var e = Xt(), t = $i(), r = As();
  function n(a) {
    return function(i, o, s) {
      var u = Object(i);
      if (!t(i)) {
        var c = e(o, 3);
        i = r(i), o = function(l) {
          return c(u[l], l, u);
        };
      }
      var f = a(i, o, s);
      return f > -1 ? u[c ? i[f] : f] : void 0;
    };
  }
  return ld = n, ld;
}
var fd, V1;
function c5() {
  if (V1) return fd;
  V1 = 1;
  var e = dA();
  function t(r) {
    var n = e(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return fd = t, fd;
}
var dd, G1;
function l5() {
  if (G1) return dd;
  G1 = 1;
  var e = xS(), t = Xt(), r = c5(), n = Math.max;
  function a(i, o, s) {
    var u = i == null ? 0 : i.length;
    if (!u)
      return -1;
    var c = s == null ? 0 : r(s);
    return c < 0 && (c = n(u + c, 0)), e(i, t(o, 3), c);
  }
  return dd = a, dd;
}
var pd, Y1;
function f5() {
  if (Y1) return pd;
  Y1 = 1;
  var e = u5(), t = l5(), r = e(t);
  return pd = r, pd;
}
var d5 = f5();
const p5 = /* @__PURE__ */ xe(d5);
var h5 = KO();
const v5 = /* @__PURE__ */ xe(h5);
var y5 = v5(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function is(e) {
  "@babel/helpers - typeof";
  return is = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, is(e);
}
var bv = /* @__PURE__ */ Lt(void 0), xv = /* @__PURE__ */ Lt(void 0), SA = /* @__PURE__ */ Lt(void 0), _A = /* @__PURE__ */ Lt({}), AA = /* @__PURE__ */ Lt(void 0), PA = /* @__PURE__ */ Lt(0), EA = /* @__PURE__ */ Lt(0), X1 = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, s = t.children, u = t.width, c = t.height, f = y5(i);
  return /* @__PURE__ */ T.createElement(bv.Provider, {
    value: n
  }, /* @__PURE__ */ T.createElement(xv.Provider, {
    value: a
  }, /* @__PURE__ */ T.createElement(_A.Provider, {
    value: i
  }, /* @__PURE__ */ T.createElement(SA.Provider, {
    value: f
  }, /* @__PURE__ */ T.createElement(AA.Provider, {
    value: o
  }, /* @__PURE__ */ T.createElement(PA.Provider, {
    value: c
  }, /* @__PURE__ */ T.createElement(EA.Provider, {
    value: u
  }, s)))))));
}, m5 = function() {
  return it(AA);
};
function TA(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var CA = function(t) {
  var r = it(bv);
  r == null && (process.env.NODE_ENV !== "production" ? at(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : at());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? at(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(is(t), "]. ").concat(TA(r))) : at()), n;
}, g5 = function() {
  var t = it(bv);
  return mr(t);
}, b5 = function() {
  var t = it(xv), r = p5(t, function(n) {
    return yA(n.domain, Number.isFinite);
  });
  return r || mr(t);
}, jA = function(t) {
  var r = it(xv);
  r == null && (process.env.NODE_ENV !== "production" ? at(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : at());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? at(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(is(t), "]. ").concat(TA(r))) : at()), n;
}, x5 = function() {
  var t = it(SA);
  return t;
}, w5 = function() {
  return it(_A);
}, wv = function() {
  return it(EA);
}, Ov = function() {
  return it(PA);
};
function Fn(e) {
  "@babel/helpers - typeof";
  return Fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fn(e);
}
function O5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function S5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $A(n.key), n);
  }
}
function _5(e, t, r) {
  return t && S5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function A5(e, t, r) {
  return t = os(t), P5(e, MA() ? Reflect.construct(t, r || [], os(e).constructor) : t.apply(e, r));
}
function P5(e, t) {
  if (t && (Fn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return E5(e);
}
function E5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function MA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (MA = function() {
    return !!e;
  })();
}
function os(e) {
  return os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, os(e);
}
function T5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $p(e, t);
}
function $p(e, t) {
  return $p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, $p(e, t);
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
function J1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Z1(Object(r), !0).forEach(function(n) {
      Sv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Sv(e, t, r) {
  return t = $A(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $A(e) {
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
function j5(e, t) {
  return k5(e) || I5(e, t) || $5(e, t) || M5();
}
function M5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $5(e, t) {
  if (e) {
    if (typeof e == "string") return Q1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Q1(e, t);
  }
}
function Q1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function I5(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function k5(e) {
  if (Array.isArray(e)) return e;
}
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
var N5 = function(t, r) {
  var n;
  return /* @__PURE__ */ T.isValidElement(t) ? n = /* @__PURE__ */ T.cloneElement(t, r) : oe(t) ? n = t(r) : n = /* @__PURE__ */ T.createElement("line", Ip({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, D5 = function(t, r, n, a, i, o, s, u, c) {
  var f = i.x, l = i.y, d = i.width, p = i.height;
  if (n) {
    var y = c.y, h = t.y.apply(y, {
      position: o
    });
    if (Kt(c, "discard") && !t.y.isInRange(h))
      return null;
    var v = [{
      x: f + d,
      y: h
    }, {
      x: f,
      y: h
    }];
    return u === "left" ? v.reverse() : v;
  }
  if (r) {
    var g = c.x, b = t.x.apply(g, {
      position: o
    });
    if (Kt(c, "discard") && !t.x.isInRange(b))
      return null;
    var x = [{
      x: b,
      y: l + p
    }, {
      x: b,
      y: l
    }];
    return s === "top" ? x.reverse() : x;
  }
  if (a) {
    var O = c.segment, m = O.map(function(w) {
      return t.apply(w, {
        position: o
      });
    });
    return Kt(c, "discard") && CF(m, function(w) {
      return !t.isInRange(w);
    }) ? null : m;
  }
  return null;
};
function R5(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, s = e.className, u = e.alwaysShow, c = m5(), f = CA(a), l = jA(i), d = x5();
  if (!c || !d)
    return null;
  Nt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = gv({
    x: f.scale,
    y: l.scale
  }), y = Fe(t), h = Fe(r), v = n && n.length === 2, g = D5(p, y, h, v, d, e.position, f.orientation, l.orientation, e);
  if (!g)
    return null;
  var b = j5(g, 2), x = b[0], O = x.x, m = x.y, w = b[1], S = w.x, A = w.y, P = Kt(e, "hidden") ? "url(#".concat(c, ")") : void 0, k = J1(J1({
    clipPath: P
  }, ae(e, !0)), {}, {
    x1: O,
    y1: m,
    x2: S,
    y2: A
  });
  return /* @__PURE__ */ T.createElement(fe, {
    className: le("recharts-reference-line", s)
  }, N5(o, k), Be.renderCallByParent(e, i5({
    x1: O,
    y1: m,
    x2: S,
    y2: A
  })));
}
var _v = /* @__PURE__ */ (function(e) {
  function t() {
    return O5(this, t), A5(this, t, arguments);
  }
  return T5(t, e), _5(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(R5, this.props);
    }
  }]);
})(T.Component);
Sv(_v, "displayName", "ReferenceLine");
Sv(_v, "defaultProps", {
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
function kp() {
  return kp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kp.apply(this, arguments);
}
function zn(e) {
  "@babel/helpers - typeof";
  return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zn(e);
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
function tw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ew(Object(r), !0).forEach(function(n) {
      Zs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ew(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function L5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function q5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, kA(n.key), n);
  }
}
function B5(e, t, r) {
  return t && q5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function F5(e, t, r) {
  return t = ss(t), z5(e, IA() ? Reflect.construct(t, r || [], ss(e).constructor) : t.apply(e, r));
}
function z5(e, t) {
  if (t && (zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return W5(e);
}
function W5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function IA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (IA = function() {
    return !!e;
  })();
}
function ss(e) {
  return ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ss(e);
}
function U5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Np(e, t);
}
function Np(e, t) {
  return Np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Np(e, t);
}
function Zs(e, t, r) {
  return t = kA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kA(e) {
  var t = H5(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function H5(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var K5 = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = gv({
    x: a.scale,
    y: i.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Kt(t, "discard") && !o.isInRange(s) ? null : s;
}, Js = /* @__PURE__ */ (function(e) {
  function t() {
    return L5(this, t), F5(this, t, arguments);
  }
  return U5(t, e), B5(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, s = n.alwaysShow, u = n.clipPathId, c = Fe(a), f = Fe(i);
      if (Nt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !f)
        return null;
      var l = K5(this.props);
      if (!l)
        return null;
      var d = l.x, p = l.y, y = this.props, h = y.shape, v = y.className, g = Kt(this.props, "hidden") ? "url(#".concat(u, ")") : void 0, b = tw(tw({
        clipPath: g
      }, ae(this.props, !0)), {}, {
        cx: d,
        cy: p
      });
      return /* @__PURE__ */ T.createElement(fe, {
        className: le("recharts-reference-dot", v)
      }, t.renderDot(h, b), Be.renderCallByParent(this.props, {
        x: d - o,
        y: p - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
})(T.Component);
Zs(Js, "displayName", "ReferenceDot");
Zs(Js, "defaultProps", {
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
Zs(Js, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ T.isValidElement(e) ? r = /* @__PURE__ */ T.cloneElement(e, t) : oe(e) ? r = e(t) : r = /* @__PURE__ */ T.createElement(qi, kp({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
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
function Wn(e) {
  "@babel/helpers - typeof";
  return Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wn(e);
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
function nw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rw(Object(r), !0).forEach(function(n) {
      Qs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function V5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function G5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, DA(n.key), n);
  }
}
function Y5(e, t, r) {
  return t && G5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function X5(e, t, r) {
  return t = us(t), Z5(e, NA() ? Reflect.construct(t, r || [], us(e).constructor) : t.apply(e, r));
}
function Z5(e, t) {
  if (t && (Wn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return J5(e);
}
function J5(e) {
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
function us(e) {
  return us = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, us(e);
}
function Q5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rp(e, t);
}
function Rp(e, t) {
  return Rp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Rp(e, t);
}
function Qs(e, t, r) {
  return t = DA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DA(e) {
  var t = e4(e, "string");
  return Wn(t) == "symbol" ? t : t + "";
}
function e4(e, t) {
  if (Wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var t4 = function(t, r, n, a, i) {
  var o = i.x1, s = i.x2, u = i.y1, c = i.y2, f = i.xAxis, l = i.yAxis;
  if (!f || !l) return null;
  var d = gv({
    x: f.scale,
    y: l.scale
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
  return Kt(i, "discard") && (!d.isInRange(p) || !d.isInRange(y)) ? null : wA(p, y);
}, eu = /* @__PURE__ */ (function(e) {
  function t() {
    return V5(this, t), X5(this, t, arguments);
  }
  return Q5(t, e), Y5(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, s = n.y2, u = n.className, c = n.alwaysShow, f = n.clipPathId;
      Nt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var l = Fe(a), d = Fe(i), p = Fe(o), y = Fe(s), h = this.props.shape;
      if (!l && !d && !p && !y && !h)
        return null;
      var v = t4(l, d, p, y, this.props);
      if (!v && !h)
        return null;
      var g = Kt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
      return /* @__PURE__ */ T.createElement(fe, {
        className: le("recharts-reference-area", u)
      }, t.renderRect(h, nw(nw({
        clipPath: g
      }, ae(this.props, !0)), v)), Be.renderCallByParent(this.props, v));
    }
  }]);
})(T.Component);
Qs(eu, "displayName", "ReferenceArea");
Qs(eu, "defaultProps", {
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
Qs(eu, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ T.isValidElement(e) ? r = /* @__PURE__ */ T.cloneElement(e, t) : oe(e) ? r = e(t) : r = /* @__PURE__ */ T.createElement(yv, Dp({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function RA(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function r4(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return s5(n, r);
}
function n4(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + s
  } : {
    start: n ? a + o : i + s,
    end: n ? a : i
  };
}
function cs(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function a4(e, t) {
  return RA(e, t + 1);
}
function i4(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, s = t.end, u = 0, c = 1, f = o, l = function() {
    var y = n?.[u];
    if (y === void 0)
      return {
        v: RA(n, c)
      };
    var h = u, v, g = function() {
      return v === void 0 && (v = r(y, h)), v;
    }, b = y.coordinate, x = u === 0 || cs(e, b, g, f, s);
    x || (u = 0, f = o, c += 1), x && (f = b + e * (g() / 2 + a), u += c);
  }, d; c <= i.length; )
    if (d = l(), d) return d.v;
  return [];
}
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
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
function Ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aw(Object(r), !0).forEach(function(n) {
      o4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function o4(e, t, r) {
  return t = s4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function s4(e) {
  var t = u4(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function u4(e, t) {
  if (wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function c4(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = i.length, s = t.start, u = t.end, c = function(d) {
    var p = i[d], y, h = function() {
      return y === void 0 && (y = r(p, d)), y;
    };
    if (d === o - 1) {
      var v = e * (p.coordinate + e * h() / 2 - u);
      i[d] = p = Ye(Ye({}, p), {}, {
        tickCoord: v > 0 ? p.coordinate - v * e : p.coordinate
      });
    } else
      i[d] = p = Ye(Ye({}, p), {}, {
        tickCoord: p.coordinate
      });
    var g = cs(e, p.tickCoord, h, s, u);
    g && (u = p.tickCoord - e * (h() / 2 + a), i[d] = Ye(Ye({}, p), {}, {
      isShow: !0
    }));
  }, f = o - 1; f >= 0; f--)
    c(f);
  return i;
}
function l4(e, t, r, n, a, i) {
  var o = (n || []).slice(), s = o.length, u = t.start, c = t.end;
  if (i) {
    var f = n[s - 1], l = r(f, s - 1), d = e * (f.coordinate + e * l / 2 - c);
    o[s - 1] = f = Ye(Ye({}, f), {}, {
      tickCoord: d > 0 ? f.coordinate - d * e : f.coordinate
    });
    var p = cs(e, f.tickCoord, function() {
      return l;
    }, u, c);
    p && (c = f.tickCoord - e * (l / 2 + a), o[s - 1] = Ye(Ye({}, f), {}, {
      isShow: !0
    }));
  }
  for (var y = i ? s - 1 : s, h = function(b) {
    var x = o[b], O, m = function() {
      return O === void 0 && (O = r(x, b)), O;
    };
    if (b === 0) {
      var w = e * (x.coordinate - e * m() / 2 - u);
      o[b] = x = Ye(Ye({}, x), {}, {
        tickCoord: w < 0 ? x.coordinate - w * e : x.coordinate
      });
    } else
      o[b] = x = Ye(Ye({}, x), {}, {
        tickCoord: x.coordinate
      });
    var S = cs(e, x.tickCoord, m, u, c);
    S && (u = x.tickCoord + e * (m() / 2 + a), o[b] = Ye(Ye({}, x), {}, {
      isShow: !0
    }));
  }, v = 0; v < y; v++)
    h(v);
  return o;
}
function Av(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, s = e.orientation, u = e.interval, c = e.tickFormatter, f = e.unit, l = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (V(u) || Sr.isSsr)
    return a4(a, typeof u == "number" && V(u) ? u : 0);
  var d = [], p = s === "top" || s === "bottom" ? "width" : "height", y = f && p === "width" ? Ma(f, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, h = function(x, O) {
    var m = oe(c) ? c(x.value, O) : x.value;
    return p === "width" ? r4(Ma(m, {
      fontSize: t,
      letterSpacing: r
    }), y, l) : Ma(m, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, v = a.length >= 2 ? et(a[1].coordinate - a[0].coordinate) : 1, g = n4(i, v, p);
  return u === "equidistantPreserveStart" ? i4(v, g, h, a, o) : (u === "preserveStart" || u === "preserveStartEnd" ? d = l4(v, g, h, a, o, u === "preserveStartEnd") : d = c4(v, g, h, a, o), d.filter(function(b) {
    return b.isShow;
  }));
}
var f4 = ["viewBox"], d4 = ["viewBox"], p4 = ["ticks"];
function Un(e) {
  "@babel/helpers - typeof";
  return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Un(e);
}
function mn() {
  return mn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mn.apply(this, arguments);
}
function iw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iw(Object(r), !0).forEach(function(n) {
      Pv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hd(e, t) {
  if (e == null) return {};
  var r = h4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function h4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function v4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ow(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qA(n.key), n);
  }
}
function y4(e, t, r) {
  return t && ow(e.prototype, t), r && ow(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function m4(e, t, r) {
  return t = ls(t), g4(e, LA() ? Reflect.construct(t, r || [], ls(e).constructor) : t.apply(e, r));
}
function g4(e, t) {
  if (t && (Un(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return b4(e);
}
function b4(e) {
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
function ls(e) {
  return ls = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ls(e);
}
function x4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Lp(e, t);
}
function Lp(e, t) {
  return Lp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Lp(e, t);
}
function Pv(e, t, r) {
  return t = qA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qA(e) {
  var t = w4(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function w4(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var oa = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return v4(this, t), n = m4(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return x4(t, e), y4(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = hd(n, f4), s = this.props, u = s.viewBox, c = hd(s, d4);
      return !bn(i, u) || !bn(o, c) || !bn(a, this.state);
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
      var a = this.props, i = a.x, o = a.y, s = a.width, u = a.height, c = a.orientation, f = a.tickSize, l = a.mirror, d = a.tickMargin, p, y, h, v, g, b, x = l ? -1 : 1, O = n.tickSize || f, m = V(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (c) {
        case "top":
          p = y = n.coordinate, v = o + +!l * u, h = v - x * O, b = h - x * d, g = m;
          break;
        case "left":
          h = v = n.coordinate, y = i + +!l * s, p = y - x * O, g = p - x * d, b = m;
          break;
        case "right":
          h = v = n.coordinate, y = i + +l * s, p = y + x * O, g = p + x * d, b = m;
          break;
        default:
          p = y = n.coordinate, v = o + +l * u, h = v + x * O, b = h + x * d, g = m;
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
          x: g,
          y: b
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
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, u = n.orientation, c = n.mirror, f = n.axisLine, l = Je(Je(Je({}, ae(this.props, !1)), ae(f, !1)), {}, {
        fill: "none"
      });
      if (u === "top" || u === "bottom") {
        var d = +(u === "top" && !c || u === "bottom" && c);
        l = Je(Je({}, l), {}, {
          x1: a,
          y1: i + d * s,
          x2: a + o,
          y2: i + d * s
        });
      } else {
        var p = +(u === "left" && !c || u === "right" && c);
        l = Je(Je({}, l), {}, {
          x1: a + p * o,
          y1: i,
          x2: a + p * o,
          y2: i + s
        });
      }
      return /* @__PURE__ */ T.createElement("line", mn({}, l, {
        className: le("recharts-cartesian-axis-line", pt(f, "className"))
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
        var o = this, s = this.props, u = s.tickLine, c = s.stroke, f = s.tick, l = s.tickFormatter, d = s.unit, p = Av(Je(Je({}, this.props), {}, {
          ticks: n
        }), a, i), y = this.getTickTextAnchor(), h = this.getTickVerticalAnchor(), v = ae(this.props, !1), g = ae(f, !1), b = Je(Je({}, v), {}, {
          fill: "none"
        }, ae(u, !1)), x = p.map(function(O, m) {
          var w = o.getTickLineCoord(O), S = w.line, A = w.tick, P = Je(Je(Je(Je({
            textAnchor: y,
            verticalAnchor: h
          }, v), {}, {
            stroke: "none",
            fill: c
          }, g), A), {}, {
            index: m,
            payload: O,
            visibleTicksCount: p.length,
            tickFormatter: l
          });
          return /* @__PURE__ */ T.createElement(fe, mn({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
          }, Xr(o.props, O, m)), u && /* @__PURE__ */ T.createElement("line", mn({}, b, S, {
            className: le("recharts-cartesian-axis-tick-line", pt(u, "className"))
          })), f && t.renderTickItem(f, P, "".concat(oe(l) ? l(O.value, m) : O.value).concat(d || "")));
        });
        return /* @__PURE__ */ T.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, x);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.axisLine, o = a.width, s = a.height, u = a.ticksGenerator, c = a.className, f = a.hide;
      if (f)
        return null;
      var l = this.props, d = l.ticks, p = hd(l, p4), y = d;
      return oe(u) && (y = d && d.length > 0 ? u(this.props) : u(p)), o <= 0 || s <= 0 || !y || !y.length ? null : /* @__PURE__ */ T.createElement(fe, {
        className: le("recharts-cartesian-axis", c),
        ref: function(v) {
          n.layerReference = v;
        }
      }, i && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), Be.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ T.isValidElement(n) ? o = /* @__PURE__ */ T.cloneElement(n, a) : oe(n) ? o = n(a) : o = /* @__PURE__ */ T.createElement(wr, mn({}, a, {
        className: "recharts-cartesian-axis-tick-value"
      }), i), o;
    }
  }]);
})(Zw);
Pv(oa, "displayName", "CartesianAxis");
Pv(oa, "defaultProps", {
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
var O4 = ["x1", "y1", "x2", "y2", "key"], S4 = ["offset"];
function Jr(e) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
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
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sw(Object(r), !0).forEach(function(n) {
      _4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _4(e, t, r) {
  return t = A4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function A4(e) {
  var t = P4(e, "string");
  return Jr(t) == "symbol" ? t : t + "";
}
function P4(e, t) {
  if (Jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
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
function uw(e, t) {
  if (e == null) return {};
  var r = E4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function E4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var T4 = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, a = t.x, i = t.y, o = t.width, s = t.height, u = t.ry;
  return /* @__PURE__ */ T.createElement("rect", {
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
function BA(e, t) {
  var r;
  if (/* @__PURE__ */ T.isValidElement(e))
    r = /* @__PURE__ */ T.cloneElement(e, t);
  else if (oe(e))
    r = e(t);
  else {
    var n = t.x1, a = t.y1, i = t.x2, o = t.y2, s = t.key, u = uw(t, O4), c = ae(u, !1);
    c.offset;
    var f = uw(c, S4);
    r = /* @__PURE__ */ T.createElement("line", Br({}, f, {
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
function C4(e) {
  var t = e.x, r = e.width, n = e.horizontal, a = n === void 0 ? !0 : n, i = e.horizontalPoints;
  if (!a || !i || !i.length)
    return null;
  var o = i.map(function(s, u) {
    var c = Xe(Xe({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(u),
      index: u
    });
    return BA(a, c);
  });
  return /* @__PURE__ */ T.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function j4(e) {
  var t = e.y, r = e.height, n = e.vertical, a = n === void 0 ? !0 : n, i = e.verticalPoints;
  if (!a || !i || !i.length)
    return null;
  var o = i.map(function(s, u) {
    var c = Xe(Xe({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(u),
      index: u
    });
    return BA(a, c);
  });
  return /* @__PURE__ */ T.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function M4(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, a = e.y, i = e.width, o = e.height, s = e.horizontalPoints, u = e.horizontal, c = u === void 0 ? !0 : u;
  if (!c || !t || !t.length)
    return null;
  var f = s.map(function(d) {
    return Math.round(d + a - a);
  }).sort(function(d, p) {
    return d - p;
  });
  a !== f[0] && f.unshift(0);
  var l = f.map(function(d, p) {
    var y = !f[p + 1], h = y ? a + o - d : f[p + 1] - d;
    if (h <= 0)
      return null;
    var v = p % t.length;
    return /* @__PURE__ */ T.createElement("rect", {
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
  return /* @__PURE__ */ T.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, l);
}
function $4(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, a = e.fillOpacity, i = e.x, o = e.y, s = e.width, u = e.height, c = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var f = c.map(function(d) {
    return Math.round(d + i - i);
  }).sort(function(d, p) {
    return d - p;
  });
  i !== f[0] && f.unshift(0);
  var l = f.map(function(d, p) {
    var y = !f[p + 1], h = y ? i + s - d : f[p + 1] - d;
    if (h <= 0)
      return null;
    var v = p % n.length;
    return /* @__PURE__ */ T.createElement("rect", {
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
  return /* @__PURE__ */ T.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, l);
}
var I4 = function(t, r) {
  var n = t.xAxis, a = t.width, i = t.height, o = t.offset;
  return L_(Av(Xe(Xe(Xe({}, oa.defaultProps), n), {}, {
    ticks: tr(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.left, o.left + o.width, r);
}, k4 = function(t, r) {
  var n = t.yAxis, a = t.width, i = t.height, o = t.offset;
  return L_(Av(Xe(Xe(Xe({}, oa.defaultProps), n), {}, {
    ticks: tr(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.top, o.top + o.height, r);
}, fn = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Bi(e) {
  var t, r, n, a, i, o, s = wv(), u = Ov(), c = w5(), f = Xe(Xe({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : fn.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : fn.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : fn.horizontal,
    horizontalFill: (a = e.horizontalFill) !== null && a !== void 0 ? a : fn.horizontalFill,
    vertical: (i = e.vertical) !== null && i !== void 0 ? i : fn.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : fn.verticalFill,
    x: V(e.x) ? e.x : c.left,
    y: V(e.y) ? e.y : c.top,
    width: V(e.width) ? e.width : c.width,
    height: V(e.height) ? e.height : c.height
  }), l = f.x, d = f.y, p = f.width, y = f.height, h = f.syncWithTicks, v = f.horizontalValues, g = f.verticalValues, b = g5(), x = b5();
  if (!V(p) || p <= 0 || !V(y) || y <= 0 || !V(l) || l !== +l || !V(d) || d !== +d)
    return null;
  var O = f.verticalCoordinatesGenerator || I4, m = f.horizontalCoordinatesGenerator || k4, w = f.horizontalPoints, S = f.verticalPoints;
  if ((!w || !w.length) && oe(m)) {
    var A = v && v.length, P = m({
      yAxis: x ? Xe(Xe({}, x), {}, {
        ticks: A ? v : x.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, A ? !0 : h);
    Nt(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Jr(P), "]")), Array.isArray(P) && (w = P);
  }
  if ((!S || !S.length) && oe(O)) {
    var k = g && g.length, E = O({
      xAxis: b ? Xe(Xe({}, b), {}, {
        ticks: k ? g : b.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, k ? !0 : h);
    Nt(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Jr(E), "]")), Array.isArray(E) && (S = E);
  }
  return /* @__PURE__ */ T.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ T.createElement(T4, {
    fill: f.fill,
    fillOpacity: f.fillOpacity,
    x: f.x,
    y: f.y,
    width: f.width,
    height: f.height,
    ry: f.ry
  }), /* @__PURE__ */ T.createElement(C4, Br({}, f, {
    offset: c,
    horizontalPoints: w,
    xAxis: b,
    yAxis: x
  })), /* @__PURE__ */ T.createElement(j4, Br({}, f, {
    offset: c,
    verticalPoints: S,
    xAxis: b,
    yAxis: x
  })), /* @__PURE__ */ T.createElement(M4, Br({}, f, {
    horizontalPoints: w
  })), /* @__PURE__ */ T.createElement($4, Br({}, f, {
    verticalPoints: S
  })));
}
Bi.displayName = "CartesianGrid";
var N4 = ["type", "layout", "connectNulls", "ref"], D4 = ["key"];
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
}
function cw(e, t) {
  if (e == null) return {};
  var r = R4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function R4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ra() {
  return Ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ra.apply(this, arguments);
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
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lw(Object(r), !0).forEach(function(n) {
      Mt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dn(e) {
  return F4(e) || B4(e) || q4(e) || L4();
}
function L4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q4(e, t) {
  if (e) {
    if (typeof e == "string") return qp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qp(e, t);
  }
}
function B4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function F4(e) {
  if (Array.isArray(e)) return qp(e);
}
function qp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function z4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zA(n.key), n);
  }
}
function W4(e, t, r) {
  return t && fw(e.prototype, t), r && fw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function U4(e, t, r) {
  return t = fs(t), H4(e, FA() ? Reflect.construct(t, r || [], fs(e).constructor) : t.apply(e, r));
}
function H4(e, t) {
  if (t && (Hn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return K4(e);
}
function K4(e) {
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
function fs(e) {
  return fs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fs(e);
}
function V4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bp(e, t);
}
function Bp(e, t) {
  return Bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Bp(e, t);
}
function Mt(e, t, r) {
  return t = zA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zA(e) {
  var t = G4(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function G4(e, t) {
  if (Hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Fi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    z4(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = U4(this, t, [].concat(a)), Mt(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Mt(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), Mt(r, "getStrokeDasharray", function(o, s, u) {
      var c = u.reduce(function(g, b) {
        return g + b;
      });
      if (!c)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var f = Math.floor(o / c), l = o % c, d = s - o, p = [], y = 0, h = 0; y < u.length; h += u[y], ++y)
        if (h + u[y] > l) {
          p = [].concat(dn(u.slice(0, y)), [l - h]);
          break;
        }
      var v = p.length % 2 === 0 ? [0, d] : [d];
      return [].concat(dn(t.repeat(u, f)), dn(p), v).map(function(g) {
        return "".concat(g, "px");
      }).join(", ");
    }), Mt(r, "id", tn("recharts-line-")), Mt(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), Mt(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), Mt(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return V4(t, e), W4(t, [{
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
      var i = this.props, o = i.points, s = i.xAxis, u = i.yAxis, c = i.layout, f = i.children, l = ht(f, Li);
      if (!l)
        return null;
      var d = function(h, v) {
        return {
          x: h.x,
          y: h.y,
          value: h.value,
          errorVal: Ie(h.payload, v)
        };
      }, p = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ T.createElement(fe, p, l.map(function(y) {
        return /* @__PURE__ */ T.cloneElement(y, {
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
      var s = this.props, u = s.dot, c = s.points, f = s.dataKey, l = ae(this.props, !1), d = ae(u, !0), p = c.map(function(h, v) {
        var g = ct(ct(ct({
          key: "dot-".concat(v),
          r: 3
        }, l), d), {}, {
          value: h.value,
          dataKey: f,
          cx: h.x,
          cy: h.y,
          index: v,
          payload: h.payload
        });
        return t.renderDotItem(u, g);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")") : null
      };
      return /* @__PURE__ */ T.createElement(fe, Ra({
        className: "recharts-line-dots",
        key: "dots"
      }, y), p);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, a, i, o) {
      var s = this.props, u = s.type, c = s.layout, f = s.connectNulls;
      s.ref;
      var l = cw(s, N4), d = ct(ct(ct({}, ae(l, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: a ? "url(#clipPath-".concat(i, ")") : null,
        points: n
      }, o), {}, {
        type: u,
        layout: c,
        connectNulls: f
      });
      return /* @__PURE__ */ T.createElement(Vr, Ra({}, d, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, s = o.points, u = o.strokeDasharray, c = o.isAnimationActive, f = o.animationBegin, l = o.animationDuration, d = o.animationEasing, p = o.animationId, y = o.animateNewValues, h = o.width, v = o.height, g = this.state, b = g.prevPoints, x = g.totalLength;
      return /* @__PURE__ */ T.createElement(Rt, {
        begin: f,
        duration: l,
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
        if (b) {
          var w = b.length / s.length, S = s.map(function(I, C) {
            var M = Math.floor(C * w);
            if (b[M]) {
              var $ = b[M], N = qe($.x, I.x), R = qe($.y, I.y);
              return ct(ct({}, I), {}, {
                x: N(m),
                y: R(m)
              });
            }
            if (y) {
              var q = qe(h * 2, I.x), z = qe(v / 2, I.y);
              return ct(ct({}, I), {}, {
                x: q(m),
                y: z(m)
              });
            }
            return ct(ct({}, I), {}, {
              x: I.x,
              y: I.y
            });
          });
          return i.renderCurveStatically(S, n, a);
        }
        var A = qe(0, x), P = A(m), k;
        if (u) {
          var E = "".concat(u).split(/[,\s]+/gim).map(function(I) {
            return parseFloat(I);
          });
          k = i.getStrokeDasharray(P, x, E);
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
      var i = this.props, o = i.points, s = i.isAnimationActive, u = this.state, c = u.prevPoints, f = u.totalLength;
      return s && o && o.length && (!c && f > 0 || !Yr(c, o)) ? this.renderCurveWithAnimation(n, a) : this.renderCurveStatically(o, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, u = a.className, c = a.xAxis, f = a.yAxis, l = a.top, d = a.left, p = a.width, y = a.height, h = a.isAnimationActive, v = a.id;
      if (i || !s || !s.length)
        return null;
      var g = this.state.isAnimationFinished, b = s.length === 1, x = le("recharts-line", u), O = c && c.allowDataOverflow, m = f && f.allowDataOverflow, w = O || m, S = se(v) ? this.id : v, A = (n = ae(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, P = A.r, k = P === void 0 ? 3 : P, E = A.strokeWidth, I = E === void 0 ? 2 : E, C = ZO(o) ? o : {}, M = C.clipDot, $ = M === void 0 ? !0 : M, N = k * 2 + I;
      return /* @__PURE__ */ T.createElement(fe, {
        className: x
      }, O || m ? /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: O ? d : d - p / 2,
        y: m ? l : l - y / 2,
        width: O ? p : p * 2,
        height: m ? y : y * 2
      })), !$ && /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-dots-".concat(S)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: d - N / 2,
        y: l - N / 2,
        width: p + N,
        height: y + N
      }))) : null, !b && this.renderCurve(w, S), this.renderErrorBar(w, S), (b || o) && this.renderDots(w, $, S), (!h || g) && _t.renderCallByParent(this.props, s));
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
      for (var i = n.length % 2 !== 0 ? [].concat(dn(n), [0]) : n, o = [], s = 0; s < a; ++s)
        o = [].concat(dn(o), dn(i));
      return o;
    }
  }, {
    key: "renderDotItem",
    value: function(n, a) {
      var i;
      if (/* @__PURE__ */ T.isValidElement(n))
        i = /* @__PURE__ */ T.cloneElement(n, a);
      else if (oe(n))
        i = n(a);
      else {
        var o = a.key, s = cw(a, D4), u = le("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        i = /* @__PURE__ */ T.createElement(qi, Ra({
          key: o
        }, s, {
          className: u
        }));
      }
      return i;
    }
  }]);
})(Et);
Mt(Fi, "displayName", "Line");
Mt(Fi, "defaultProps", {
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
  isAnimationActive: !Sr.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
Mt(Fi, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, a = e.xAxisTicks, i = e.yAxisTicks, o = e.dataKey, s = e.bandSize, u = e.displayedData, c = e.offset, f = t.layout, l = u.map(function(d, p) {
    var y = Ie(d, o);
    return f === "horizontal" ? {
      x: Bo({
        axis: r,
        ticks: a,
        bandSize: s,
        entry: d,
        index: p
      }),
      y: se(y) ? null : n.scale(y),
      value: y,
      payload: d
    } : {
      x: se(y) ? null : r.scale(y),
      y: Bo({
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
  return ct({
    points: l,
    layout: f
  }, c);
});
var Y4 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], X4 = ["key"], WA;
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function UA(e, t) {
  if (e == null) return {};
  var r = Z4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Z4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function vr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dw(Object(r), !0).forEach(function(n) {
      Wt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function J4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, KA(n.key), n);
  }
}
function Q4(e, t, r) {
  return t && pw(e.prototype, t), r && pw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function e6(e, t, r) {
  return t = ds(t), t6(e, HA() ? Reflect.construct(t, r || [], ds(e).constructor) : t.apply(e, r));
}
function t6(e, t) {
  if (t && (Kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return r6(e);
}
function r6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function HA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (HA = function() {
    return !!e;
  })();
}
function ds(e) {
  return ds = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ds(e);
}
function n6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Fp(e, t);
}
function Fp(e, t) {
  return Fp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Fp(e, t);
}
function Wt(e, t, r) {
  return t = KA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KA(e) {
  var t = a6(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function a6(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Tr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    J4(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = e6(this, t, [].concat(a)), Wt(r, "state", {
      isAnimationFinished: !0
    }), Wt(r, "id", tn("recharts-area-")), Wt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), oe(o) && o();
    }), Wt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), oe(o) && o();
    }), r;
  }
  return n6(t, e), Q4(t, [{
    key: "renderDots",
    value: function(n, a, i) {
      var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (o && !s)
        return null;
      var u = this.props, c = u.dot, f = u.points, l = u.dataKey, d = ae(this.props, !1), p = ae(c, !0), y = f.map(function(v, g) {
        var b = vr(vr(vr({
          key: "dot-".concat(g),
          r: 3
        }, d), p), {}, {
          index: g,
          cx: v.x,
          cy: v.y,
          dataKey: l,
          value: v.value,
          payload: v.payload,
          points: f
        });
        return t.renderDotItem(c, b);
      }), h = {
        clipPath: n ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")") : null
      };
      return /* @__PURE__ */ T.createElement(fe, Fr({
        className: "recharts-area-dots"
      }, h), y);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, s = a.strokeWidth, u = o[0].x, c = o[o.length - 1].x, f = n * Math.abs(u - c), l = gr(o.map(function(d) {
        return d.y || 0;
      }));
      return V(i) && typeof i == "number" ? l = Math.max(i, l) : i && Array.isArray(i) && i.length && (l = Math.max(gr(i.map(function(d) {
        return d.y || 0;
      })), l)), V(l) ? /* @__PURE__ */ T.createElement("rect", {
        x: u < c ? u : u - f,
        y: 0,
        width: f,
        height: Math.floor(l + (s ? parseInt("".concat(s), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, s = a.strokeWidth, u = o[0].y, c = o[o.length - 1].y, f = n * Math.abs(u - c), l = gr(o.map(function(d) {
        return d.x || 0;
      }));
      return V(i) && typeof i == "number" ? l = Math.max(i, l) : i && Array.isArray(i) && i.length && (l = Math.max(gr(i.map(function(d) {
        return d.x || 0;
      })), l)), V(l) ? /* @__PURE__ */ T.createElement("rect", {
        x: 0,
        y: u < c ? u : u - f,
        width: l + (s ? parseInt("".concat(s), 10) : 1),
        height: Math.floor(f)
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
      var s = this.props, u = s.layout, c = s.type, f = s.stroke, l = s.connectNulls, d = s.isRange;
      s.ref;
      var p = UA(s, Y4);
      return /* @__PURE__ */ T.createElement(fe, {
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ T.createElement(Vr, Fr({}, ae(p, !0), {
        points: n,
        connectNulls: l,
        type: c,
        baseLine: a,
        layout: u,
        stroke: "none",
        className: "recharts-area-area"
      })), f !== "none" && /* @__PURE__ */ T.createElement(Vr, Fr({}, ae(this.props, !1), {
        className: "recharts-area-curve",
        layout: u,
        type: c,
        connectNulls: l,
        fill: "none",
        points: n
      })), f !== "none" && d && /* @__PURE__ */ T.createElement(Vr, Fr({}, ae(this.props, !1), {
        className: "recharts-area-curve",
        layout: u,
        type: c,
        connectNulls: l,
        fill: "none",
        points: a
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, s = o.points, u = o.baseLine, c = o.isAnimationActive, f = o.animationBegin, l = o.animationDuration, d = o.animationEasing, p = o.animationId, y = this.state, h = y.prevPoints, v = y.prevBaseLine;
      return /* @__PURE__ */ T.createElement(Rt, {
        begin: f,
        duration: l,
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
      }, function(g) {
        var b = g.t;
        if (h) {
          var x = h.length / s.length, O = s.map(function(A, P) {
            var k = Math.floor(P * x);
            if (h[k]) {
              var E = h[k], I = qe(E.x, A.x), C = qe(E.y, A.y);
              return vr(vr({}, A), {}, {
                x: I(b),
                y: C(b)
              });
            }
            return A;
          }), m;
          if (V(u) && typeof u == "number") {
            var w = qe(v, u);
            m = w(b);
          } else if (se(u) || ta(u)) {
            var S = qe(v, 0);
            m = S(b);
          } else
            m = u.map(function(A, P) {
              var k = Math.floor(P * x);
              if (v[k]) {
                var E = v[k], I = qe(E.x, A.x), C = qe(E.y, A.y);
                return vr(vr({}, A), {}, {
                  x: I(b),
                  y: C(b)
                });
              }
              return A;
            });
          return i.renderAreaStatically(O, m, n, a);
        }
        return /* @__PURE__ */ T.createElement(fe, null, /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
          id: "animationClipPath-".concat(a)
        }, i.renderClipRect(b))), /* @__PURE__ */ T.createElement(fe, {
          clipPath: "url(#animationClipPath-".concat(a, ")")
        }, i.renderAreaStatically(s, u, n, a)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, a) {
      var i = this.props, o = i.points, s = i.baseLine, u = i.isAnimationActive, c = this.state, f = c.prevPoints, l = c.prevBaseLine, d = c.totalLength;
      return u && o && o.length && (!f && d > 0 || !Yr(f, o) || !Yr(l, s)) ? this.renderAreaWithAnimation(n, a) : this.renderAreaStatically(o, s, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, u = a.className, c = a.top, f = a.left, l = a.xAxis, d = a.yAxis, p = a.width, y = a.height, h = a.isAnimationActive, v = a.id;
      if (i || !s || !s.length)
        return null;
      var g = this.state.isAnimationFinished, b = s.length === 1, x = le("recharts-area", u), O = l && l.allowDataOverflow, m = d && d.allowDataOverflow, w = O || m, S = se(v) ? this.id : v, A = (n = ae(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, P = A.r, k = P === void 0 ? 3 : P, E = A.strokeWidth, I = E === void 0 ? 2 : E, C = ZO(o) ? o : {}, M = C.clipDot, $ = M === void 0 ? !0 : M, N = k * 2 + I;
      return /* @__PURE__ */ T.createElement(fe, {
        className: x
      }, O || m ? /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: O ? f : f - p / 2,
        y: m ? c : c - y / 2,
        width: O ? p : p * 2,
        height: m ? y : y * 2
      })), !$ && /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-dots-".concat(S)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: f - N / 2,
        y: c - N / 2,
        width: p + N,
        height: y + N
      }))) : null, b ? null : this.renderArea(w, S), (o || b) && this.renderDots(w, $, S), (!h || g) && _t.renderCallByParent(this.props, s));
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
})(Et);
WA = Tr;
Wt(Tr, "displayName", "Area");
Wt(Tr, "defaultProps", {
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
  isAnimationActive: !Sr.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Wt(Tr, "getBaseValue", function(e, t, r, n) {
  var a = e.layout, i = e.baseValue, o = t.props.baseValue, s = o ?? i;
  if (V(s) && typeof s == "number")
    return s;
  var u = a === "horizontal" ? n : r, c = u.scale.domain();
  if (u.type === "number") {
    var f = Math.max(c[0], c[1]), l = Math.min(c[0], c[1]);
    return s === "dataMin" ? l : s === "dataMax" || f < 0 ? f : Math.max(Math.min(c[0], c[1]), 0);
  }
  return s === "dataMin" ? c[0] : s === "dataMax" ? c[1] : c[0];
});
Wt(Tr, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, u = e.dataKey, c = e.stackedData, f = e.dataStartIndex, l = e.displayedData, d = e.offset, p = t.layout, y = c && c.length, h = WA.getBaseValue(t, r, n, a), v = p === "horizontal", g = !1, b = l.map(function(O, m) {
    var w;
    y ? w = c[f + m] : (w = Ie(O, u), Array.isArray(w) ? g = !0 : w = [h, w]);
    var S = w[1] == null || y && Ie(O, u) == null;
    return v ? {
      x: Bo({
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
      y: Bo({
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
  return y || g ? x = b.map(function(O) {
    var m = Array.isArray(O.value) ? O.value[0] : null;
    return v ? {
      x: O.x,
      y: m != null && O.y != null ? a.scale(m) : null
    } : {
      x: m != null ? n.scale(m) : null,
      y: O.y
    };
  }) : x = v ? a.scale(h) : n.scale(h), vr({
    points: b,
    baseLine: x,
    layout: p,
    isRange: g
  }, d);
});
Wt(Tr, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ T.isValidElement(e))
    r = /* @__PURE__ */ T.cloneElement(e, t);
  else if (oe(e))
    r = e(t);
  else {
    var n = le("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = UA(t, X4);
    r = /* @__PURE__ */ T.createElement(qi, Fr({}, i, {
      key: a,
      className: n
    }));
  }
  return r;
});
function Vn(e) {
  "@babel/helpers - typeof";
  return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vn(e);
}
function i6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function o6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, YA(n.key), n);
  }
}
function s6(e, t, r) {
  return t && o6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function u6(e, t, r) {
  return t = ps(t), c6(e, VA() ? Reflect.construct(t, r || [], ps(e).constructor) : t.apply(e, r));
}
function c6(e, t) {
  if (t && (Vn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return l6(e);
}
function l6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function VA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (VA = function() {
    return !!e;
  })();
}
function ps(e) {
  return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ps(e);
}
function f6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zp(e, t);
}
function zp(e, t) {
  return zp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, zp(e, t);
}
function GA(e, t, r) {
  return t = YA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YA(e) {
  var t = d6(e, "string");
  return Vn(t) == "symbol" ? t : t + "";
}
function d6(e, t) {
  if (Vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
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
function p6(e) {
  var t = e.xAxisId, r = wv(), n = Ov(), a = CA(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ T.createElement(oa, Wp({}, a, {
      className: le("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return tr(o, !0);
      }
    }))
  );
}
var dr = /* @__PURE__ */ (function(e) {
  function t() {
    return i6(this, t), u6(this, t, arguments);
  }
  return f6(t, e), s6(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(p6, this.props);
    }
  }]);
})(T.Component);
GA(dr, "displayName", "XAxis");
GA(dr, "defaultProps", {
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
function Gn(e) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gn(e);
}
function h6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function v6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, JA(n.key), n);
  }
}
function y6(e, t, r) {
  return t && v6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function m6(e, t, r) {
  return t = hs(t), g6(e, XA() ? Reflect.construct(t, r || [], hs(e).constructor) : t.apply(e, r));
}
function g6(e, t) {
  if (t && (Gn(t) === "object" || typeof t == "function"))
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
function hs(e) {
  return hs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hs(e);
}
function x6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Up(e, t);
}
function Up(e, t) {
  return Up = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Up(e, t);
}
function ZA(e, t, r) {
  return t = JA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JA(e) {
  var t = w6(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function w6(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Hp() {
  return Hp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hp.apply(this, arguments);
}
var O6 = function(t) {
  var r = t.yAxisId, n = wv(), a = Ov(), i = jA(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ T.createElement(oa, Hp({}, i, {
      className: le("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: a
      },
      ticksGenerator: function(s) {
        return tr(s, !0);
      }
    }))
  );
}, pr = /* @__PURE__ */ (function(e) {
  function t() {
    return h6(this, t), m6(this, t, arguments);
  }
  return x6(t, e), y6(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(O6, this.props);
    }
  }]);
})(T.Component);
ZA(pr, "displayName", "YAxis");
ZA(pr, "defaultProps", {
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
function hw(e) {
  return P6(e) || A6(e) || _6(e) || S6();
}
function S6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _6(e, t) {
  if (e) {
    if (typeof e == "string") return Kp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Kp(e, t);
  }
}
function A6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function P6(e) {
  if (Array.isArray(e)) return Kp(e);
}
function Kp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Vp = function(t, r, n, a, i) {
  var o = ht(t, _v), s = ht(t, Js), u = [].concat(hw(o), hw(s)), c = ht(t, eu), f = "".concat(a, "Id"), l = a[0], d = r;
  if (u.length && (d = u.reduce(function(h, v) {
    if (v.props[f] === n && Kt(v.props, "extendDomain") && V(v.props[l])) {
      var g = v.props[l];
      return [Math.min(h[0], g), Math.max(h[1], g)];
    }
    return h;
  }, d)), c.length) {
    var p = "".concat(l, "1"), y = "".concat(l, "2");
    d = c.reduce(function(h, v) {
      if (v.props[f] === n && Kt(v.props, "extendDomain") && V(v.props[p]) && V(v.props[y])) {
        var g = v.props[p], b = v.props[y];
        return [Math.min(h[0], g, b), Math.max(h[1], g, b)];
      }
      return h;
    }, d);
  }
  return i && i.length && (d = i.reduce(function(h, v) {
    return V(v) ? [Math.min(h[0], v), Math.max(h[1], v)] : h;
  }, d)), d;
}, vd = { exports: {} }, vw;
function E6() {
  return vw || (vw = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function a(u, c, f) {
      this.fn = u, this.context = c, this.once = f || !1;
    }
    function i(u, c, f, l, d) {
      if (typeof f != "function")
        throw new TypeError("The listener must be a function");
      var p = new a(f, l || u, d), y = r ? r + c : c;
      return u._events[y] ? u._events[y].fn ? u._events[y] = [u._events[y], p] : u._events[y].push(p) : (u._events[y] = p, u._eventsCount++), u;
    }
    function o(u, c) {
      --u._eventsCount === 0 ? u._events = new n() : delete u._events[c];
    }
    function s() {
      this._events = new n(), this._eventsCount = 0;
    }
    s.prototype.eventNames = function() {
      var c = [], f, l;
      if (this._eventsCount === 0) return c;
      for (l in f = this._events)
        t.call(f, l) && c.push(r ? l.slice(1) : l);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
    }, s.prototype.listeners = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      if (!l) return [];
      if (l.fn) return [l.fn];
      for (var d = 0, p = l.length, y = new Array(p); d < p; d++)
        y[d] = l[d].fn;
      return y;
    }, s.prototype.listenerCount = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      return l ? l.fn ? 1 : l.length : 0;
    }, s.prototype.emit = function(c, f, l, d, p, y) {
      var h = r ? r + c : c;
      if (!this._events[h]) return !1;
      var v = this._events[h], g = arguments.length, b, x;
      if (v.fn) {
        switch (v.once && this.removeListener(c, v.fn, void 0, !0), g) {
          case 1:
            return v.fn.call(v.context), !0;
          case 2:
            return v.fn.call(v.context, f), !0;
          case 3:
            return v.fn.call(v.context, f, l), !0;
          case 4:
            return v.fn.call(v.context, f, l, d), !0;
          case 5:
            return v.fn.call(v.context, f, l, d, p), !0;
          case 6:
            return v.fn.call(v.context, f, l, d, p, y), !0;
        }
        for (x = 1, b = new Array(g - 1); x < g; x++)
          b[x - 1] = arguments[x];
        v.fn.apply(v.context, b);
      } else {
        var O = v.length, m;
        for (x = 0; x < O; x++)
          switch (v[x].once && this.removeListener(c, v[x].fn, void 0, !0), g) {
            case 1:
              v[x].fn.call(v[x].context);
              break;
            case 2:
              v[x].fn.call(v[x].context, f);
              break;
            case 3:
              v[x].fn.call(v[x].context, f, l);
              break;
            case 4:
              v[x].fn.call(v[x].context, f, l, d);
              break;
            default:
              if (!b) for (m = 1, b = new Array(g - 1); m < g; m++)
                b[m - 1] = arguments[m];
              v[x].fn.apply(v[x].context, b);
          }
      }
      return !0;
    }, s.prototype.on = function(c, f, l) {
      return i(this, c, f, l, !1);
    }, s.prototype.once = function(c, f, l) {
      return i(this, c, f, l, !0);
    }, s.prototype.removeListener = function(c, f, l, d) {
      var p = r ? r + c : c;
      if (!this._events[p]) return this;
      if (!f)
        return o(this, p), this;
      var y = this._events[p];
      if (y.fn)
        y.fn === f && (!d || y.once) && (!l || y.context === l) && o(this, p);
      else {
        for (var h = 0, v = [], g = y.length; h < g; h++)
          (y[h].fn !== f || d && !y[h].once || l && y[h].context !== l) && v.push(y[h]);
        v.length ? this._events[p] = v.length === 1 ? v[0] : v : o(this, p);
      }
      return this;
    }, s.prototype.removeAllListeners = function(c) {
      var f;
      return c ? (f = r ? r + c : c, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
  })(vd)), vd.exports;
}
var T6 = E6();
const C6 = /* @__PURE__ */ xe(T6);
var yd = new C6(), md = "recharts.syncMouseEvents";
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
function j6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function M6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, QA(n.key), n);
  }
}
function $6(e, t, r) {
  return t && M6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gd(e, t, r) {
  return t = QA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QA(e) {
  var t = I6(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function I6(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var k6 = /* @__PURE__ */ (function() {
  function e() {
    j6(this, e), gd(this, "activeIndex", 0), gd(this, "coordinateList", []), gd(this, "layout", "horizontal");
  }
  return $6(e, [{
    key: "setDetails",
    value: function(r) {
      var n, a = r.coordinateList, i = a === void 0 ? null : a, o = r.container, s = o === void 0 ? null : o, u = r.layout, c = u === void 0 ? null : u, f = r.offset, l = f === void 0 ? null : f, d = r.mouseHandlerCallback, p = d === void 0 ? null : d;
      this.coordinateList = (n = i ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = c ?? this.layout, this.offset = l ?? this.offset, this.mouseHandlerCallback = p ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
        var a = this.container.getBoundingClientRect(), i = a.x, o = a.y, s = a.height, u = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, l = i + u + c, d = o + this.offset.top + s / 2 + f;
        this.mouseHandlerCallback({
          pageX: l,
          pageY: d
        });
      }
    }
  }]);
})();
function N6(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], a = e?.[1];
    if (n && a && V(n) && V(a))
      return !0;
  }
  return !1;
}
function D6(e, t, r, n) {
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
function eP(e) {
  var t = e.cx, r = e.cy, n = e.radius, a = e.startAngle, i = e.endAngle, o = Ae(t, r, n, a), s = Ae(t, r, n, i);
  return {
    points: [o, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: a,
    endAngle: i
  };
}
function R6(e, t, r) {
  var n, a, i, o;
  if (e === "horizontal")
    n = t.x, i = n, a = r.top, o = r.top + r.height;
  else if (e === "vertical")
    a = t.y, o = a, n = r.left, i = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, u = t.cy, c = t.innerRadius, f = t.outerRadius, l = t.angle, d = Ae(s, u, c, l), p = Ae(s, u, f, l);
      n = d.x, a = d.y, i = p.x, o = p.y;
    } else
      return eP(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function Si(e) {
  "@babel/helpers - typeof";
  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Si(e);
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
function uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yw(Object(r), !0).forEach(function(n) {
      L6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function L6(e, t, r) {
  return t = q6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q6(e) {
  var t = B6(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function B6(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function F6(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, s = e.activePayload, u = e.offset, c = e.activeTooltipIndex, f = e.tooltipAxisBandSize, l = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var y, h = Vr;
  if (d === "ScatterChart")
    y = o, h = QB;
  else if (d === "BarChart")
    y = D6(l, o, u, f), h = yv;
  else if (l === "radial") {
    var v = eP(o), g = v.cx, b = v.cy, x = v.radius, O = v.startAngle, m = v.endAngle;
    y = {
      cx: g,
      cy: b,
      startAngle: O,
      endAngle: m,
      innerRadius: x,
      outerRadius: x
    }, h = Y_;
  } else
    y = {
      points: R6(l, o, u)
    }, h = Vr;
  var w = uo(uo(uo(uo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), y), ae(p, !1)), {}, {
    payload: s,
    payloadIndex: c,
    className: le("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ It(p) ? /* @__PURE__ */ Le(p, w) : /* @__PURE__ */ Xw(h, w);
}
var z6 = ["item"], W6 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Yn(e) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yn(e);
}
function gn() {
  return gn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gn.apply(this, arguments);
}
function mw(e, t) {
  return K6(e) || H6(e, t) || rP(e, t) || U6();
}
function U6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H6(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function K6(e) {
  if (Array.isArray(e)) return e;
}
function gw(e, t) {
  if (e == null) return {};
  var r = V6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function V6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function G6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Y6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nP(n.key), n);
  }
}
function X6(e, t, r) {
  return t && Y6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Z6(e, t, r) {
  return t = vs(t), J6(e, tP() ? Reflect.construct(t, r || [], vs(e).constructor) : t.apply(e, r));
}
function J6(e, t) {
  if (t && (Yn(t) === "object" || typeof t == "function"))
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
function vs(e) {
  return vs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vs(e);
}
function e8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gp(e, t);
}
function Gp(e, t) {
  return Gp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Gp(e, t);
}
function Xn(e) {
  return n8(e) || r8(e) || rP(e) || t8();
}
function t8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rP(e, t) {
  if (e) {
    if (typeof e == "string") return Yp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yp(e, t);
  }
}
function r8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function n8(e) {
  if (Array.isArray(e)) return Yp(e);
}
function Yp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bw(Object(r), !0).forEach(function(n) {
      ie(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ie(e, t, r) {
  return t = nP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nP(e) {
  var t = a8(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function a8(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var i8 = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, o8 = {
  width: "100%",
  height: "100%"
}, aP = {
  x: 0,
  y: 0
};
function co(e) {
  return e;
}
var s8 = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, u8 = function(t, r, n, a) {
  var i = r.find(function(f) {
    return f && f.index === n;
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
      return B(B(B({}, a), Ae(a.cx, a.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var u = i.coordinate, c = a.angle;
    return B(B(B({}, a), Ae(a.cx, a.cy, u, c)), {}, {
      angle: c,
      radius: u
    });
  }
  return aP;
}, tu = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(s, u) {
    var c = u.props.data;
    return c && c.length ? [].concat(Xn(s), Xn(c)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && V(a) && V(i) ? t.slice(a, i + 1) : [];
};
function iP(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Xp = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, s = tu(r, t);
  return n < 0 || !i || !i.length || n >= s.length ? null : i.reduce(function(u, c) {
    var f, l = (f = c.props.data) !== null && f !== void 0 ? f : r;
    l && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = l === void 0 ? s : l;
      d = vo(p, o.dataKey, a);
    } else
      d = l && l[n] || s[n];
    return d ? [].concat(Xn(u), [W_(c, d)]) : u;
  }, []);
}, xw = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = s8(i, n), s = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, f = bR(o, s, c, u);
  if (f >= 0 && c) {
    var l = c[f] && c[f].value, d = Xp(t, r, f, l), p = u8(n, s, f, i);
    return {
      activeTooltipIndex: f,
      activeLabel: l,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, c8 = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, d = t.stackOffset, p = R_(f, i);
  return n.reduce(function(y, h) {
    var v, g = h.type.defaultProps !== void 0 ? B(B({}, h.type.defaultProps), h.props) : h.props, b = g.type, x = g.dataKey, O = g.allowDataOverflow, m = g.allowDuplicatedCategory, w = g.scale, S = g.ticks, A = g.includeHidden, P = g[o];
    if (y[P])
      return y;
    var k = tu(t.data, {
      graphicalItems: a.filter(function(F) {
        var H, X = o in F.props ? F.props[o] : (H = F.type.defaultProps) === null || H === void 0 ? void 0 : H[o];
        return X === P;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), E = k.length, I, C, M;
    N6(g.domain, O, b) && (I = cp(g.domain, null, O), p && (b === "number" || w !== "auto") && (M = Ia(k, x, "category")));
    var $ = iP(b);
    if (!I || I.length === 0) {
      var N, R = (N = g.domain) !== null && N !== void 0 ? N : $;
      if (x) {
        if (I = Ia(k, x, b), b === "category" && p) {
          var q = Uj(I);
          m && q ? (C = I, I = es(0, E)) : m || (I = lx(R, I, h).reduce(function(F, H) {
            return F.indexOf(H) >= 0 ? F : [].concat(Xn(F), [H]);
          }, []));
        } else if (b === "category")
          m ? I = I.filter(function(F) {
            return F !== "" && !se(F);
          }) : I = lx(R, I, h).reduce(function(F, H) {
            return F.indexOf(H) >= 0 || H === "" || se(H) ? F : [].concat(Xn(F), [H]);
          }, []);
        else if (b === "number") {
          var z = _R(k, a.filter(function(F) {
            var H, X, te = o in F.props ? F.props[o] : (H = F.type.defaultProps) === null || H === void 0 ? void 0 : H[o], ne = "hide" in F.props ? F.props.hide : (X = F.type.defaultProps) === null || X === void 0 ? void 0 : X.hide;
            return te === P && (A || !ne);
          }), x, i, f);
          z && (I = z);
        }
        p && (b === "number" || w !== "auto") && (M = Ia(k, x, "category"));
      } else p ? I = es(0, E) : s && s[P] && s[P].hasStack && b === "number" ? I = d === "expand" ? [0, 1] : z_(s[P].stackGroups, u, c) : I = D_(k, a.filter(function(F) {
        var H = o in F.props ? F.props[o] : F.type.defaultProps[o], X = "hide" in F.props ? F.props.hide : F.type.defaultProps.hide;
        return H === P && (A || !X);
      }), b, f, !0);
      if (b === "number")
        I = Vp(l, I, P, i, S), R && (I = cp(R, I, O));
      else if (b === "category" && R) {
        var D = R, L = I.every(function(F) {
          return D.indexOf(F) >= 0;
        });
        L && (I = D);
      }
    }
    return B(B({}, y), {}, ie({}, P, B(B({}, g), {}, {
      axisType: i,
      domain: I,
      categoricalDomain: M,
      duplicateDomain: C,
      originalDomain: (v = g.domain) !== null && v !== void 0 ? v : $,
      isCategorical: p,
      layout: f
    })));
  }, {});
}, l8 = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, d = tu(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), p = d.length, y = R_(f, i), h = -1;
  return n.reduce(function(v, g) {
    var b = g.type.defaultProps !== void 0 ? B(B({}, g.type.defaultProps), g.props) : g.props, x = b[o], O = iP("number");
    if (!v[x]) {
      h++;
      var m;
      return y ? m = es(0, p) : s && s[x] && s[x].hasStack ? (m = z_(s[x].stackGroups, u, c), m = Vp(l, m, x, i)) : (m = cp(O, D_(d, n.filter(function(w) {
        var S, A, P = o in w.props ? w.props[o] : (S = w.type.defaultProps) === null || S === void 0 ? void 0 : S[o], k = "hide" in w.props ? w.props.hide : (A = w.type.defaultProps) === null || A === void 0 ? void 0 : A.hide;
        return P === x && !k;
      }), "number", f), a.defaultProps.allowDataOverflow), m = Vp(l, m, x, i)), B(B({}, v), {}, ie({}, x, B(B({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: pt(i8, "".concat(i, ".").concat(h % 2), null),
        domain: m,
        originalDomain: O,
        isCategorical: y,
        layout: f
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return v;
  }, {});
}, f8 = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, f = t.children, l = "".concat(a, "Id"), d = ht(f, i), p = {};
  return d && d.length ? p = c8(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: l,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (p = l8(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: l,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  })), p;
}, d8 = function(t) {
  var r = mr(t), n = tr(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: zh(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Fo(r, n)
  };
}, ww = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = ft(r, Ln), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, p8 = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = nr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Ow = function(t) {
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
}, h8 = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, s = t.yAxisMap, u = s === void 0 ? {} : s, c = n.width, f = n.height, l = n.children, d = n.margin || {}, p = ft(l, Ln), y = ft(l, Ur), h = Object.keys(u).reduce(function(m, w) {
    var S = u[w], A = S.orientation;
    return !S.mirror && !S.hide ? B(B({}, m), {}, ie({}, A, m[A] + S.width)) : m;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), v = Object.keys(o).reduce(function(m, w) {
    var S = o[w], A = S.orientation;
    return !S.mirror && !S.hide ? B(B({}, m), {}, ie({}, A, pt(m, "".concat(A)) + S.height)) : m;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), g = B(B({}, v), h), b = g.bottom;
  p && (g.bottom += p.props.height || Ln.defaultProps.height), y && r && (g = OR(g, a, n, r));
  var x = c - g.left - g.right, O = f - g.top - g.bottom;
  return B(B({
    brushBottom: b
  }, g), {}, {
    // never return negative values for height and width
    width: Math.max(x, 0),
    height: Math.max(O, 0)
  });
}, v8 = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, ru = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, u = t.axisComponents, c = t.legendContent, f = t.formatAxisMap, l = t.defaultProps, d = function(g, b) {
    var x = b.graphicalItems, O = b.stackGroups, m = b.offset, w = b.updateId, S = b.dataStartIndex, A = b.dataEndIndex, P = g.barSize, k = g.layout, E = g.barGap, I = g.barCategoryGap, C = g.maxBarSize, M = Ow(k), $ = M.numericAxisName, N = M.cateAxisName, R = p8(x), q = [];
    return x.forEach(function(z, D) {
      var L = tu(g.data, {
        graphicalItems: [z],
        dataStartIndex: S,
        dataEndIndex: A
      }), F = z.type.defaultProps !== void 0 ? B(B({}, z.type.defaultProps), z.props) : z.props, H = F.dataKey, X = F.maxBarSize, te = F["".concat($, "Id")], ne = F["".concat(N, "Id")], re = {}, Q = u.reduce(function(st, ut) {
        var Cr, on, sn = b["".concat(ut.axisType, "Map")], Hi = F["".concat(ut.axisType, "Id")];
        sn && sn[Hi] || ut.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? at(!1, "Specifying a(n) ".concat(ut.axisType, "Id requires a corresponding ").concat(
          ut.axisType,
          "Id on the targeted graphical component "
        ).concat((Cr = z == null || (on = z.type) === null || on === void 0 ? void 0 : on.displayName) !== null && Cr !== void 0 ? Cr : "")) : at());
        var pa = sn[Hi];
        return B(B({}, st), {}, ie(ie({}, ut.axisType, pa), "".concat(ut.axisType, "Ticks"), tr(pa)));
      }, re), W = Q[N], G = Q["".concat(N, "Ticks")], Y = O && O[te] && O[te].hasStack && IR(z, O[te].stackGroups), j = nr(z.type).indexOf("Bar") >= 0, ee = Fo(W, G), U = [], ce = R && xR({
        barSize: P,
        stackGroups: O,
        totalSize: v8(Q, N)
      });
      if (j) {
        var de, we, Ge = se(X) ? C : X, Ze = (de = (we = Fo(W, G, !0)) !== null && we !== void 0 ? we : Ge) !== null && de !== void 0 ? de : 0;
        U = wR({
          barGap: E,
          barCategoryGap: I,
          bandSize: Ze !== ee ? Ze : ee,
          sizeList: ce[ne],
          maxBarSize: Ge
        }), Ze !== ee && (U = U.map(function(st) {
          return B(B({}, st), {}, {
            position: B(B({}, st.position), {}, {
              offset: st.position.offset - Ze / 2
            })
          });
        }));
      }
      var yt = z && z.type && z.type.getComposedData;
      yt && q.push({
        props: B(B({}, yt(B(B({}, Q), {}, {
          displayedData: L,
          props: g,
          dataKey: H,
          item: z,
          bandSize: ee,
          barPosition: U,
          offset: m,
          stackedData: Y,
          layout: k,
          dataStartIndex: S,
          dataEndIndex: A
        }))), {}, ie(ie(ie({
          key: z.key || "item-".concat(D)
        }, $, Q[$]), N, Q[N]), "animationId", w)),
        childIndex: tM(z, g.children),
        item: z
      });
    }), q;
  }, p = function(g, b) {
    var x = g.props, O = g.dataStartIndex, m = g.dataEndIndex, w = g.updateId;
    if (!xg({
      props: x
    }))
      return null;
    var S = x.children, A = x.layout, P = x.stackOffset, k = x.data, E = x.reverseStackOrder, I = Ow(A), C = I.numericAxisName, M = I.cateAxisName, $ = ht(S, n), N = MR(k, $, "".concat(C, "Id"), "".concat(M, "Id"), P, E), R = u.reduce(function(F, H) {
      var X = "".concat(H.axisType, "Map");
      return B(B({}, F), {}, ie({}, X, f8(x, B(B({}, H), {}, {
        graphicalItems: $,
        stackGroups: H.axisType === C && N,
        dataStartIndex: O,
        dataEndIndex: m
      }))));
    }, {}), q = h8(B(B({}, R), {}, {
      props: x,
      graphicalItems: $
    }), b?.legendBBox);
    Object.keys(R).forEach(function(F) {
      R[F] = f(x, R[F], q, F.replace("Map", ""), r);
    });
    var z = R["".concat(M, "Map")], D = d8(z), L = d(x, B(B({}, R), {}, {
      dataStartIndex: O,
      dataEndIndex: m,
      updateId: w,
      graphicalItems: $,
      stackGroups: N,
      offset: q
    }));
    return B(B({
      formattedGraphicalItems: L,
      graphicalItems: $,
      offset: q,
      stackGroups: N
    }, D), R);
  }, y = /* @__PURE__ */ (function(v) {
    function g(b) {
      var x, O, m;
      return G6(this, g), m = Z6(this, g, [b]), ie(m, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), ie(m, "accessibilityManager", new k6()), ie(m, "handleLegendBBoxUpdate", function(w) {
        if (w) {
          var S = m.state, A = S.dataStartIndex, P = S.dataEndIndex, k = S.updateId;
          m.setState(B({
            legendBBox: w
          }, p({
            props: m.props,
            dataStartIndex: A,
            dataEndIndex: P,
            updateId: k
          }, B(B({}, m.state), {}, {
            legendBBox: w
          }))));
        }
      }), ie(m, "handleReceiveSyncEvent", function(w, S, A) {
        if (m.props.syncId === w) {
          if (A === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(S);
        }
      }), ie(m, "handleBrushChange", function(w) {
        var S = w.startIndex, A = w.endIndex;
        if (S !== m.state.dataStartIndex || A !== m.state.dataEndIndex) {
          var P = m.state.updateId;
          m.setState(function() {
            return B({
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
      }), ie(m, "handleMouseEnter", function(w) {
        var S = m.getMouseInfo(w);
        if (S) {
          var A = B(B({}, S), {}, {
            isTooltipActive: !0
          });
          m.setState(A), m.triggerSyncEvent(A);
          var P = m.props.onMouseEnter;
          oe(P) && P(A, w);
        }
      }), ie(m, "triggeredAfterMouseMove", function(w) {
        var S = m.getMouseInfo(w), A = S ? B(B({}, S), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(A), m.triggerSyncEvent(A);
        var P = m.props.onMouseMove;
        oe(P) && P(A, w);
      }), ie(m, "handleItemMouseEnter", function(w) {
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
      }), ie(m, "handleItemMouseLeave", function() {
        m.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), ie(m, "handleMouseMove", function(w) {
        w.persist(), m.throttleTriggeredAfterMouseMove(w);
      }), ie(m, "handleMouseLeave", function(w) {
        m.throttleTriggeredAfterMouseMove.cancel();
        var S = {
          isTooltipActive: !1
        };
        m.setState(S), m.triggerSyncEvent(S);
        var A = m.props.onMouseLeave;
        oe(A) && A(S, w);
      }), ie(m, "handleOuterEvent", function(w) {
        var S = eM(w), A = pt(m.props, "".concat(S));
        if (S && oe(A)) {
          var P, k;
          /.*touch.*/i.test(S) ? k = m.getMouseInfo(w.changedTouches[0]) : k = m.getMouseInfo(w), A((P = k) !== null && P !== void 0 ? P : {}, w);
        }
      }), ie(m, "handleClick", function(w) {
        var S = m.getMouseInfo(w);
        if (S) {
          var A = B(B({}, S), {}, {
            isTooltipActive: !0
          });
          m.setState(A), m.triggerSyncEvent(A);
          var P = m.props.onClick;
          oe(P) && P(A, w);
        }
      }), ie(m, "handleMouseDown", function(w) {
        var S = m.props.onMouseDown;
        if (oe(S)) {
          var A = m.getMouseInfo(w);
          S(A, w);
        }
      }), ie(m, "handleMouseUp", function(w) {
        var S = m.props.onMouseUp;
        if (oe(S)) {
          var A = m.getMouseInfo(w);
          S(A, w);
        }
      }), ie(m, "handleTouchMove", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(w.changedTouches[0]);
      }), ie(m, "handleTouchStart", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.handleMouseDown(w.changedTouches[0]);
      }), ie(m, "handleTouchEnd", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.handleMouseUp(w.changedTouches[0]);
      }), ie(m, "handleDoubleClick", function(w) {
        var S = m.props.onDoubleClick;
        if (oe(S)) {
          var A = m.getMouseInfo(w);
          S(A, w);
        }
      }), ie(m, "handleContextMenu", function(w) {
        var S = m.props.onContextMenu;
        if (oe(S)) {
          var A = m.getMouseInfo(w);
          S(A, w);
        }
      }), ie(m, "triggerSyncEvent", function(w) {
        m.props.syncId !== void 0 && yd.emit(md, m.props.syncId, w, m.eventEmitterSymbol);
      }), ie(m, "applySyncEvent", function(w) {
        var S = m.props, A = S.layout, P = S.syncMethod, k = m.state.updateId, E = w.dataStartIndex, I = w.dataEndIndex;
        if (w.dataStartIndex !== void 0 || w.dataEndIndex !== void 0)
          m.setState(B({
            dataStartIndex: E,
            dataEndIndex: I
          }, p({
            props: m.props,
            dataStartIndex: E,
            dataEndIndex: I,
            updateId: k
          }, m.state)));
        else if (w.activeTooltipIndex !== void 0) {
          var C = w.chartX, M = w.chartY, $ = w.activeTooltipIndex, N = m.state, R = N.offset, q = N.tooltipTicks;
          if (!R)
            return;
          if (typeof P == "function")
            $ = P(q, w);
          else if (P === "value") {
            $ = -1;
            for (var z = 0; z < q.length; z++)
              if (q[z].value === w.activeLabel) {
                $ = z;
                break;
              }
          }
          var D = B(B({}, R), {}, {
            x: R.left,
            y: R.top
          }), L = Math.min(C, D.x + D.width), F = Math.min(M, D.y + D.height), H = q[$] && q[$].value, X = Xp(m.state, m.props.data, $), te = q[$] ? {
            x: A === "horizontal" ? q[$].coordinate : L,
            y: A === "horizontal" ? F : q[$].coordinate
          } : aP;
          m.setState(B(B({}, w), {}, {
            activeLabel: H,
            activeCoordinate: te,
            activePayload: X,
            activeTooltipIndex: $
          }));
        } else
          m.setState(w);
      }), ie(m, "renderCursor", function(w) {
        var S, A = m.state, P = A.isTooltipActive, k = A.activeCoordinate, E = A.activePayload, I = A.offset, C = A.activeTooltipIndex, M = A.tooltipAxisBandSize, $ = m.getTooltipEventType(), N = (S = w.props.active) !== null && S !== void 0 ? S : P, R = m.props.layout, q = w.key || "_recharts-cursor";
        return /* @__PURE__ */ T.createElement(F6, {
          key: q,
          activeCoordinate: k,
          activePayload: E,
          activeTooltipIndex: C,
          chartName: r,
          element: w,
          isActive: N,
          layout: R,
          offset: I,
          tooltipAxisBandSize: M,
          tooltipEventType: $
        });
      }), ie(m, "renderPolarAxis", function(w, S, A) {
        var P = pt(w, "type.axisType"), k = pt(m.state, "".concat(P, "Map")), E = w.type.defaultProps, I = E !== void 0 ? B(B({}, E), w.props) : w.props, C = k && k[I["".concat(P, "Id")]];
        return /* @__PURE__ */ Le(w, B(B({}, C), {}, {
          className: le(P, C.className),
          key: w.key || "".concat(S, "-").concat(A),
          ticks: tr(C, !0)
        }));
      }), ie(m, "renderPolarGrid", function(w) {
        var S = w.props, A = S.radialLines, P = S.polarAngles, k = S.polarRadius, E = m.state, I = E.radiusAxisMap, C = E.angleAxisMap, M = mr(I), $ = mr(C), N = $.cx, R = $.cy, q = $.innerRadius, z = $.outerRadius;
        return /* @__PURE__ */ Le(w, {
          polarAngles: Array.isArray(P) ? P : tr($, !0).map(function(D) {
            return D.coordinate;
          }),
          polarRadius: Array.isArray(k) ? k : tr(M, !0).map(function(D) {
            return D.coordinate;
          }),
          cx: N,
          cy: R,
          innerRadius: q,
          outerRadius: z,
          key: w.key || "polar-grid",
          radialLines: A
        });
      }), ie(m, "renderLegend", function() {
        var w = m.state.formattedGraphicalItems, S = m.props, A = S.children, P = S.width, k = S.height, E = m.props.margin || {}, I = P - (E.left || 0) - (E.right || 0), C = k_({
          children: A,
          formattedGraphicalItems: w,
          legendWidth: I,
          legendContent: c
        });
        if (!C)
          return null;
        var M = C.item, $ = gw(C, z6);
        return /* @__PURE__ */ Le(M, B(B({}, $), {}, {
          chartWidth: P,
          chartHeight: k,
          margin: E,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), ie(m, "renderTooltip", function() {
        var w, S = m.props, A = S.children, P = S.accessibilityLayer, k = ft(A, Ft);
        if (!k)
          return null;
        var E = m.state, I = E.isTooltipActive, C = E.activeCoordinate, M = E.activePayload, $ = E.activeLabel, N = E.offset, R = (w = k.props.active) !== null && w !== void 0 ? w : I;
        return /* @__PURE__ */ Le(k, {
          viewBox: B(B({}, N), {}, {
            x: N.left,
            y: N.top
          }),
          active: R,
          label: $,
          payload: R ? M : [],
          coordinate: C,
          accessibilityLayer: P
        });
      }), ie(m, "renderBrush", function(w) {
        var S = m.props, A = S.margin, P = S.data, k = m.state, E = k.offset, I = k.dataStartIndex, C = k.dataEndIndex, M = k.updateId;
        return /* @__PURE__ */ Le(w, {
          key: w.key || "_recharts-brush",
          onChange: ro(m.handleBrushChange, w.props.onChange),
          data: P,
          x: V(w.props.x) ? w.props.x : E.left,
          y: V(w.props.y) ? w.props.y : E.top + E.height + E.brushBottom - (A.bottom || 0),
          width: V(w.props.width) ? w.props.width : E.width,
          startIndex: I,
          endIndex: C,
          updateId: "brush-".concat(M)
        });
      }), ie(m, "renderReferenceElement", function(w, S, A) {
        if (!w)
          return null;
        var P = m, k = P.clipPathId, E = m.state, I = E.xAxisMap, C = E.yAxisMap, M = E.offset, $ = w.type.defaultProps || {}, N = w.props, R = N.xAxisId, q = R === void 0 ? $.xAxisId : R, z = N.yAxisId, D = z === void 0 ? $.yAxisId : z;
        return /* @__PURE__ */ Le(w, {
          key: w.key || "".concat(S, "-").concat(A),
          xAxis: I[q],
          yAxis: C[D],
          viewBox: {
            x: M.left,
            y: M.top,
            width: M.width,
            height: M.height
          },
          clipPathId: k
        });
      }), ie(m, "renderActivePoints", function(w) {
        var S = w.item, A = w.activePoint, P = w.basePoint, k = w.childIndex, E = w.isRange, I = [], C = S.props.key, M = S.item.type.defaultProps !== void 0 ? B(B({}, S.item.type.defaultProps), S.item.props) : S.item.props, $ = M.activeDot, N = M.dataKey, R = B(B({
          index: k,
          dataKey: N,
          cx: A.x,
          cy: A.y,
          r: 4,
          fill: hv(S.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: A.payload,
          value: A.value
        }, ae($, !1)), yo($));
        return I.push(g.renderActiveDot($, R, "".concat(C, "-activePoint-").concat(k))), P ? I.push(g.renderActiveDot($, B(B({}, R), {}, {
          cx: P.x,
          cy: P.y
        }), "".concat(C, "-basePoint-").concat(k))) : E && I.push(null), I;
      }), ie(m, "renderGraphicChild", function(w, S, A) {
        var P = m.filterFormatItem(w, S, A);
        if (!P)
          return null;
        var k = m.getTooltipEventType(), E = m.state, I = E.isTooltipActive, C = E.tooltipAxis, M = E.activeTooltipIndex, $ = E.activeLabel, N = m.props.children, R = ft(N, Ft), q = P.props, z = q.points, D = q.isRange, L = q.baseLine, F = P.item.type.defaultProps !== void 0 ? B(B({}, P.item.type.defaultProps), P.item.props) : P.item.props, H = F.activeDot, X = F.hide, te = F.activeBar, ne = F.activeShape, re = !!(!X && I && R && (H || te || ne)), Q = {};
        k !== "axis" && R && R.props.trigger === "click" ? Q = {
          onClick: ro(m.handleItemMouseEnter, w.props.onClick)
        } : k !== "axis" && (Q = {
          onMouseLeave: ro(m.handleItemMouseLeave, w.props.onMouseLeave),
          onMouseEnter: ro(m.handleItemMouseEnter, w.props.onMouseEnter)
        });
        var W = /* @__PURE__ */ Le(w, B(B({}, P.props), Q));
        function G(ut) {
          return typeof C.dataKey == "function" ? C.dataKey(ut.payload) : null;
        }
        if (re)
          if (M >= 0) {
            var Y, j;
            if (C.dataKey && !C.allowDuplicatedCategory) {
              var ee = typeof C.dataKey == "function" ? G : "payload.".concat(C.dataKey.toString());
              Y = vo(z, ee, $), j = D && L && vo(L, ee, $);
            } else
              Y = z?.[M], j = D && L && L[M];
            if (ne || te) {
              var U = w.props.activeIndex !== void 0 ? w.props.activeIndex : M;
              return [/* @__PURE__ */ Le(w, B(B(B({}, P.props), Q), {}, {
                activeIndex: U
              })), null, null];
            }
            if (!se(Y))
              return [W].concat(Xn(m.renderActivePoints({
                item: P,
                activePoint: Y,
                basePoint: j,
                childIndex: M,
                isRange: D
              })));
          } else {
            var ce, de = (ce = m.getItemByXY(m.state.activeCoordinate)) !== null && ce !== void 0 ? ce : {
              graphicalItem: W
            }, we = de.graphicalItem, Ge = we.item, Ze = Ge === void 0 ? w : Ge, yt = we.childIndex, st = B(B(B({}, P.props), Q), {}, {
              activeIndex: yt
            });
            return [/* @__PURE__ */ Le(Ze, st), null, null];
          }
        return D ? [W, null, null] : [W, null];
      }), ie(m, "renderCustomized", function(w, S, A) {
        return /* @__PURE__ */ Le(w, B(B({
          key: "recharts-customized-".concat(A)
        }, m.props), m.state));
      }), ie(m, "renderMap", {
        CartesianGrid: {
          handler: co,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: co
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: co
        },
        YAxis: {
          handler: co
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
      }), m.clipPathId = "".concat((x = b.id) !== null && x !== void 0 ? x : tn("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = IS(m.triggeredAfterMouseMove, (O = b.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), m.state = {}, m;
    }
    return e8(g, v), X6(g, [{
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
        var x = this.props, O = x.children, m = x.data, w = x.height, S = x.layout, A = ft(O, Ft);
        if (A) {
          var P = A.props.defaultIndex;
          if (!(typeof P != "number" || P < 0 || P > this.state.tooltipTicks.length - 1)) {
            var k = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value, E = Xp(this.state, m, P, k), I = this.state.tooltipTicks[P].coordinate, C = (this.state.offset.top + w) / 2, M = S === "horizontal", $ = M ? {
              x: I,
              y: C
            } : {
              y: I,
              x: C
            }, N = this.state.formattedGraphicalItems.find(function(q) {
              var z = q.item;
              return z.type.name === "Scatter";
            });
            N && ($ = B(B({}, $), N.props.points[P].tooltipPosition), E = N.props.points[P].tooltipPayload);
            var R = {
              activeTooltipIndex: P,
              isTooltipActive: !0,
              activeLabel: k,
              activePayload: E,
              activeCoordinate: $
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
        Md([ft(x.children, Ft)], [ft(this.props.children, Ft)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var x = ft(this.props.children, Ft);
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
        var O = this.container, m = O.getBoundingClientRect(), w = pI(m), S = {
          chartX: Math.round(x.pageX - w.left),
          chartY: Math.round(x.pageY - w.top)
        }, A = m.width / O.offsetWidth || 1, P = this.inRange(S.chartX, S.chartY, A);
        if (!P)
          return null;
        var k = this.state, E = k.xAxisMap, I = k.yAxisMap, C = this.getTooltipEventType();
        if (C !== "axis" && E && I) {
          var M = mr(E).scale, $ = mr(I).scale, N = M && M.invert ? M.invert(S.chartX) : null, R = $ && $.invert ? $.invert(S.chartY) : null;
          return B(B({}, S), {}, {
            xValue: N,
            yValue: R
          });
        }
        var q = xw(this.state, this.props.data, this.props.layout, P);
        return q ? B(B({}, S), q) : null;
      }
    }, {
      key: "inRange",
      value: function(x, O) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, w = this.props.layout, S = x / m, A = O / m;
        if (w === "horizontal" || w === "vertical") {
          var P = this.state.offset, k = S >= P.left && S <= P.left + P.width && A >= P.top && A <= P.top + P.height;
          return k ? {
            x: S,
            y: A
          } : null;
        }
        var E = this.state, I = E.angleAxisMap, C = E.radiusAxisMap;
        if (I && C) {
          var M = mr(I);
          return px({
            x: S,
            y: A
          }, M);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var x = this.props.children, O = this.getTooltipEventType(), m = ft(x, Ft), w = {};
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
        var S = yo(this.props, this.handleOuterEvent);
        return B(B({}, S), w);
      }
    }, {
      key: "addListener",
      value: function() {
        yd.on(md, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        yd.removeListener(md, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(x, O, m) {
        for (var w = this.state.formattedGraphicalItems, S = 0, A = w.length; S < A; S++) {
          var P = w[S];
          if (P.item === x || P.props.key === x.key || O === nr(P.item.type) && m === P.childIndex)
            return P;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var x = this.clipPathId, O = this.state.offset, m = O.left, w = O.top, S = O.height, A = O.width;
        return /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
          id: x
        }, /* @__PURE__ */ T.createElement("rect", {
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
          var w = mw(m, 2), S = w[0], A = w[1];
          return B(B({}, O), {}, ie({}, S, A.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var x = this.state.yAxisMap;
        return x ? Object.entries(x).reduce(function(O, m) {
          var w = mw(m, 2), S = w[0], A = w[1];
          return B(B({}, O), {}, ie({}, S, A.scale));
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
            var P = m[S], k = P.props, E = P.item, I = E.type.defaultProps !== void 0 ? B(B({}, E.type.defaultProps), E.props) : E.props, C = nr(E.type);
            if (C === "Bar") {
              var M = (k.data || []).find(function(q) {
                return IB(x, q);
              });
              if (M)
                return {
                  graphicalItem: P,
                  payload: M
                };
            } else if (C === "RadialBar") {
              var $ = (k.data || []).find(function(q) {
                return px(x, q);
              });
              if ($)
                return {
                  graphicalItem: P,
                  payload: $
                };
            } else if (Gs(P, w) || Ys(P, w) || gi(P, w)) {
              var N = rF({
                graphicalItem: P,
                activeTooltipItem: w,
                itemData: I.data
              }), R = I.activeIndex === void 0 ? N : I.activeIndex;
              return {
                graphicalItem: B(B({}, P), {}, {
                  childIndex: R
                }),
                payload: gi(P, w) ? I.data[N] : P.props.data[N]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var x = this;
        if (!xg(this))
          return null;
        var O = this.props, m = O.children, w = O.className, S = O.width, A = O.height, P = O.style, k = O.compact, E = O.title, I = O.desc, C = gw(O, W6), M = ae(C, !1);
        if (k)
          return /* @__PURE__ */ T.createElement(X1, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ T.createElement(Id, gn({}, M, {
            width: S,
            height: A,
            title: E,
            desc: I
          }), this.renderClipPath(), Og(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var $, N;
          M.tabIndex = ($ = this.props.tabIndex) !== null && $ !== void 0 ? $ : 0, M.role = (N = this.props.role) !== null && N !== void 0 ? N : "application", M.onKeyDown = function(q) {
            x.accessibilityManager.keyboardEvent(q);
          }, M.onFocus = function() {
            x.accessibilityManager.focus();
          };
        }
        var R = this.parseEventsOfWrapper();
        return /* @__PURE__ */ T.createElement(X1, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ T.createElement("div", gn({
          className: le("recharts-wrapper", w),
          style: B({
            position: "relative",
            cursor: "default",
            width: S,
            height: A
          }, P)
        }, R, {
          ref: function(z) {
            x.container = z;
          }
        }), /* @__PURE__ */ T.createElement(Id, gn({}, M, {
          width: S,
          height: A,
          title: E,
          desc: I,
          style: o8
        }), this.renderClipPath(), Og(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(Zw);
  ie(y, "displayName", r), ie(y, "defaultProps", B({
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
  }, l)), ie(y, "getDerivedStateFromProps", function(v, g) {
    var b = v.dataKey, x = v.data, O = v.children, m = v.width, w = v.height, S = v.layout, A = v.stackOffset, P = v.margin, k = g.dataStartIndex, E = g.dataEndIndex;
    if (g.updateId === void 0) {
      var I = ww(v);
      return B(B(B({}, I), {}, {
        updateId: 0
      }, p(B(B({
        props: v
      }, I), {}, {
        updateId: 0
      }), g)), {}, {
        prevDataKey: b,
        prevData: x,
        prevWidth: m,
        prevHeight: w,
        prevLayout: S,
        prevStackOffset: A,
        prevMargin: P,
        prevChildren: O
      });
    }
    if (b !== g.prevDataKey || x !== g.prevData || m !== g.prevWidth || w !== g.prevHeight || S !== g.prevLayout || A !== g.prevStackOffset || !bn(P, g.prevMargin)) {
      var C = ww(v), M = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: g.chartX,
        chartY: g.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: g.isTooltipActive
      }, $ = B(B({}, xw(g, x, S)), {}, {
        updateId: g.updateId + 1
      }), N = B(B(B({}, C), M), $);
      return B(B(B({}, N), p(B({
        props: v
      }, N), g)), {}, {
        prevDataKey: b,
        prevData: x,
        prevWidth: m,
        prevHeight: w,
        prevLayout: S,
        prevStackOffset: A,
        prevMargin: P,
        prevChildren: O
      });
    }
    if (!Md(O, g.prevChildren)) {
      var R, q, z, D, L = ft(O, Ln), F = L && (R = (q = L.props) === null || q === void 0 ? void 0 : q.startIndex) !== null && R !== void 0 ? R : k, H = L && (z = (D = L.props) === null || D === void 0 ? void 0 : D.endIndex) !== null && z !== void 0 ? z : E, X = F !== k || H !== E, te = !se(x), ne = te && !X ? g.updateId : g.updateId + 1;
      return B(B({
        updateId: ne
      }, p(B(B({
        props: v
      }, g), {}, {
        updateId: ne,
        dataStartIndex: F,
        dataEndIndex: H
      }), g)), {}, {
        prevChildren: O,
        dataStartIndex: F,
        dataEndIndex: H
      });
    }
    return null;
  }), ie(y, "renderActiveDot", function(v, g, b) {
    var x;
    return /* @__PURE__ */ It(v) ? x = /* @__PURE__ */ Le(v, g) : oe(v) ? x = v(g) : x = /* @__PURE__ */ T.createElement(qi, g), /* @__PURE__ */ T.createElement(fe, {
      className: "recharts-active-dot",
      key: b
    }, x);
  });
  var h = /* @__PURE__ */ De(function(g, b) {
    return /* @__PURE__ */ T.createElement(y, gn({}, g, {
      ref: b
    }));
  });
  return h.displayName = y.displayName, h;
}, y8 = ru({
  chartName: "LineChart",
  GraphicalChild: Fi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: dr
  }, {
    axisType: "yAxis",
    AxisComp: pr
  }],
  formatAxisMap: mv
}), oP = ru({
  chartName: "BarChart",
  GraphicalChild: Er,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: dr
  }, {
    axisType: "yAxis",
    AxisComp: pr
  }],
  formatAxisMap: mv
}), m8 = ru({
  chartName: "PieChart",
  GraphicalChild: fr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Vs
  }, {
    axisType: "radiusAxis",
    AxisComp: Hs
  }],
  formatAxisMap: WR,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), g8 = ru({
  chartName: "AreaChart",
  GraphicalChild: Tr,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: dr
  }, {
    axisType: "yAxis",
    AxisComp: pr
  }],
  formatAxisMap: mv
});
const b8 = ms({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), x8 = {
  light: "",
  dark: ".dark"
}, sP = ue.createContext(null);
function uP() {
  const e = ue.useContext(sP);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const w8 = ({ id: e, className: t, children: r, aspect: n, config: a, ...i }, o) => {
  const s = ue.useId(), u = `chart-${e || s.replace(/:/g, "")}`, c = ue.useRef(null), [f, l] = Te(), d = Qe(() => new ResizeObserver((p) => l(p[0].contentRect.height)), []);
  return Yw(() => {
    const p = o && "current" in o ? o.current : c.current;
    return p && d.observe(p.parentElement), () => {
      d.disconnect();
    };
  }, [d, o, c]), _(sP.Provider, {
    value: {
      config: a
    },
    children: K("div", {
      "data-chromatic": "ignore",
      "data-chart": u,
      ref: o || c,
      className: Z("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", n ? b8({
        aspect: n
      }) : "aspect-auto h-full", t),
      ...i,
      children: [_(O8, {
        id: u,
        config: a
      }), _(oI, {
        height: f,
        className: "overflow-visible",
        children: r
      })]
    })
  });
}, sa = ue.forwardRef(w8);
sa.displayName = "Chart";
const O8 = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([a, i]) => i.theme || i.color);
  if (!r.length)
    return null;
  const n = Object.entries(x8).map(([a, i]) => `
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
      __html: wE.sanitize(n.join(`
`))
    }
  });
}, zi = Ft, ua = ue.forwardRef(({ active: e, payload: t, className: r, indicator: n = "dot", hideLabel: a = !1, hideIndicator: i = !1, label: o, labelFormatter: s, labelClassName: u, formatter: c, yAxisFormatter: f, color: l, nameKey: d, labelKey: p }, y) => {
  const { config: h } = uP(), v = ue.useMemo(() => {
    if (a || !t?.length)
      return null;
    const [b] = t, x = `${p || b.dataKey || b.name || "value"}`, O = Zp(h, b, x), m = !p && typeof o == "string" ? h[o]?.label || o : O?.label;
    return s ? _("div", {
      className: Z("font-medium", u),
      children: s(m, t)
    }) : m ? _("div", {
      className: Z("font-medium", u),
      children: m
    }) : null;
  }, [o, s, t, a, u, h, p]);
  if (!e || !t?.length)
    return null;
  const g = t.length === 1 && n !== "dot";
  return K("div", {
    ref: y,
    className: Z("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary px-3 py-2.5 text-base shadow-lg backdrop-blur", r),
    children: [g ? null : v, _("div", {
      className: "grid gap-2",
      children: t.map((b, x) => {
        const O = `${d || b.name || b.dataKey || "value"}`, m = Zp(h, b, O), w = l || b.payload.fill || b.color;
        return _("div", {
          className: Z("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", n === "dot" && "items-center"),
          children: c && b?.value !== void 0 && b.name ? c(b.value, b.name, b, x, b.payload) : K(St, {
            children: [m?.icon ? _(m.icon, {}) : !i && _("div", {
              className: Z("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                "h-2.5 w-2.5": n === "dot",
                "w-1": n === "line",
                "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                "my-0.5": g && n === "dashed"
              }),
              style: {
                "--color-bg": w,
                "--color-border": w
              }
            }), K("div", {
              className: Z("flex flex-1 justify-between text-sm leading-none", g ? "items-end" : "items-center"),
              children: [K("div", {
                className: "grid gap-2",
                children: [g ? v : null, _("span", {
                  className: "pr-2 text-f1-foreground",
                  children: m?.label || b.name
                })]
              }), b.value && _("span", {
                className: "font-mono font-medium tabular-nums text-f1-foreground",
                children: f ? f(String(b.value)) : b.value.toLocaleString()
              })]
            })]
          })
        }, b.dataKey);
      })
    })]
  });
});
ua.displayName = "ChartTooltip";
const Ev = Ur, nu = ue.forwardRef(({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: a, hiddenKey: i, leftShift: o = 0 }, s) => {
  const { config: u } = uP();
  return r?.length ? _("div", {
    ref: s,
    className: Z("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", n === "top" ? "pb-2" : "pt-2", e),
    style: {
      marginLeft: o
    },
    children: r.map((c) => {
      const f = `${a || c.dataKey || "value"}`, l = Zp(u, c, f, i);
      return K("div", {
        className: Z("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"),
        children: [l?.icon && !t ? _(l.icon, {}) : l && _("div", {
          className: "h-2 w-2 shrink-0 rounded-full",
          style: {
            backgroundColor: c.color
          }
        }), _("span", {
          className: "text-f1-foreground",
          children: l?.label
        })]
      }, JSON.stringify(c));
    })
  }) : null;
});
nu.displayName = "ChartLegend";
function Zp(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const a = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  if (r in t && typeof t[r] == "string" ? i = t[r] : a && r in a && typeof a[r] == "string" ? i = a[r] : "dataKey" in t && typeof t.dataKey == "string" && (i = t.dataKey), !(n && n === i))
    return i in e ? e[i] : e[r];
}
const cP = Lt({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), iW = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = Te(e), a = rr(() => {
    n(!0);
  }, []), i = rr(() => n(!1), []), o = rr(() => n((s) => !s), []);
  return _(cP.Provider, {
    value: {
      enable: a,
      disable: i,
      toggle: o,
      enabled: r
    },
    children: t
  });
}, S8 = () => {
  const e = it(cP);
  if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
}, Dt = (e, t) => {
  const r = ["categorical-1", "categorical-2", "categorical-3", "categorical-4", "categorical-5", "categorical-6", "categorical-7", "categorical-8"];
  return At(r[e % r.length], t);
}, At = (e, t) => {
  const r = t !== void 0 ? ` / ${t}` : "";
  return `hsl(var(--${`chart-${e}`})${r})`;
};
function Wi(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const Tv = (e) => ({
  dataKey: "x",
  domain: e?.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), Cv = (e) => ({
  tickLine: !1,
  axisLine: !1,
  domain: e?.domain,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), au = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), iu = (e = !1) => ({
  cursor: !0,
  offset: e ? 0 : 20,
  position: {
    y: e ? void 0 : 0,
    x: e ? 120 : void 0
  },
  animationDuration: 100,
  isAnimationActive: !0
});
function ca(e) {
  return De(e);
}
function jv(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const _8 = ({ index: e, visibleTicksCount: t, payload: r, tickFormatter: n, ...a }) => {
  const i = e === 0, o = e === t - 1;
  return _(wr, {
    ...a,
    textAnchor: i ? "start" : o ? "end" : "middle",
    children: n?.(r.value, r.index) ?? r.value
  });
}, A8 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n, canBeBlurred: a, blurArea: i, lineType: o = "monotoneX", aspect: s, marginTop: u = 0 }, c) => {
  const { enabled: f } = S8(), l = Object.keys(t), d = _j(12), p = jv(e), y = Math.max(...p.flatMap((x) => l.map((O) => Wi(n?.tickFormatter ? n.tickFormatter(`${x[O]}`) : `${x[O]}`)))), h = n?.width ?? y + 20, v = !n?.hide, g = !r?.hide, b = !a || !f;
  return _(sa, {
    config: t,
    ref: c,
    aspect: s,
    children: K(g8, {
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
          children: [(i === "l" || i === "lr") && K(St, {
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
          }), (i === "r" || i === "lr") && K(St, {
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
          }), !i && K(St, {
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
        }), l.map((x, O) => K("linearGradient", {
          id: `fill${String(x)}-${d}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1",
          children: [_("stop", {
            offset: "5%",
            stopColor: t[x].color ? At(t[x].color) : Dt(O),
            stopOpacity: 0.8
          }), _("stop", {
            offset: "95%",
            stopColor: t[x].color ? At(t[x].color) : Dt(O),
            stopOpacity: 0.1
          })]
        }, O))]
      }), _(Bi, {
        ...au(),
        mask: `url(#${d}-transparent-edges)`
      }), g && _(dr, {
        dataKey: "x",
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: r?.tickFormatter,
        ticks: r?.ticks,
        domain: r?.domain,
        interval: 0,
        tick: _8
      }), v && _(pr, {
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickCount: n?.tickCount,
        tickFormatter: a && f ? () => "**" : n?.tickFormatter,
        ticks: n?.ticks,
        domain: n?.domain,
        width: h
      }), b && _(zi, {
        ...iu(),
        content: _(ua, {
          indicator: "dot",
          yAxisFormatter: n?.tickFormatter
        })
      }), l.map((x, O) => _(Tr, {
        isAnimationActive: !1,
        dataKey: x,
        type: o,
        mask: `url(#${d}-transparent-edges)`,
        fill: `url(#fill${x}-${d})`,
        fillOpacity: t[x].dashed ? 0 : 0.4,
        stroke: t[x].color ? At(t[x].color) : Dt(O),
        strokeWidth: 1.5,
        strokeDasharray: t[x].dashed ? "4 4" : void 0
      }, x)), Object.keys(t).length > 1 && _(Ev, {
        className: "flex justify-start",
        content: _(nu, {})
      })]
    })
  });
}, oW = ca(A8), P8 = ({ dataConfig: e, data: t, xAxis: r, yAxis: n = {
  hide: !0
}, label: a = !1, type: i = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: u, legend: c, showValueUnderLabel: f = !1, highlightLastBar: l = !1, onClick: d }, p) => {
  const y = Object.keys(e), h = jv(t).map((g, b, x) => l && y.length === 1 && !e[y[0]]?.color ? {
    ...g,
    fill: b === x.length - 1 ? Dt(b) : Dt(b, 0.5)
  } : g), v = Math.max(...h.flatMap((g) => y.map((b) => Wi(n?.tickFormatter ? n.tickFormatter(`${g[b]}`) : `${g[b]}`))));
  return _(sa, {
    config: e,
    ref: p,
    aspect: u,
    children: K(oP, {
      accessibilityLayer: !0,
      data: h,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: a ? 24 : 0,
        bottom: f ? 24 : 12
      },
      stackOffset: i === "stacked-by-sign" ? "sign" : void 0,
      onClick: (g) => {
        if (!d || !g.activeLabel || !g.activePayload)
          return;
        const b = {
          label: g.activeLabel,
          values: {}
        };
        for (const x of g.activePayload)
          b.values[x.name] = x.value;
        d(b);
      },
      children: [!o && _(zi, {
        ...iu(),
        content: _(ua, {
          yAxisFormatter: n.tickFormatter
        })
      }), !s && _(Bi, {
        ...au()
      }), _(pr, {
        ...Cv(n),
        tick: !0,
        width: n.width ?? v + 20,
        hide: n.hide
      }), _(dr, {
        ...Tv(r),
        hide: r?.hide,
        tick: f ? (g) => {
          const { x: b, y: x, payload: O } = g, m = t.find((A) => A.label === O.value)?.values || "", w = Object.keys(m).length === 1 ? Object.values(m)?.[0] : void 0, S = w !== void 0 && n.tickFormatter ? n.tickFormatter(`${w}`) : w.toLocaleString();
          return K("g", {
            transform: `translate(${b},${x})`,
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
      }), y.map((g, b) => _(Er, {
        isAnimationActive: !1,
        dataKey: g,
        stackId: i === "stacked" || i === "stacked-by-sign" ? "stack" : void 0,
        fill: l ? (x) => x.fill : e[g].color ? At(e[g].color) : Dt(b),
        radius: i === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
        maxBarSize: 32,
        children: a && _(_t, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${g}`)
      }, `bar-${g}`)), c && _(Ev, {
        content: _(nu, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, sW = ca(P8), E8 = ({ data: e, legend: t = !0, hideTooltip: r = !1 }, n) => {
  const a = e.reduce((i, o) => i + o.value, 0);
  return K(uh, {
    children: [_("div", {
      className: "w-full",
      ref: n,
      children: _("div", {
        className: "flex h-2 gap-1 overflow-hidden",
        children: e.map((i, o) => {
          const s = i.value / a * 100, u = i.color ? At(i.color) : Dt(o), c = (f) => {
            const l = f / a * 100;
            return l % 1 === 0 ? l.toFixed(0) : l.toFixed(1);
          };
          return s === 0 ? null : K(ch, {
            children: [_(lh, {
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
            }), !r && K(fh, {
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
        const s = i.color ? At(i.color) : Dt(o);
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
}, uW = ca(E8), T8 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n = {
  hide: !0
}, lineType: a = "natural", aspect: i, hideTooltip: o = !1, hideGrid: s = !1 }, u) => {
  const c = Object.keys(t), f = jv(e), l = Math.max(...f.flatMap((d) => c.map((p) => Wi(n?.tickFormatter ? n.tickFormatter(`${d[p]}`) : `${d[p]}`))));
  return _(sa, {
    config: t,
    ref: u,
    aspect: i,
    children: K(y8, {
      accessibilityLayer: !0,
      data: f,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12
      },
      children: [!s && _(Bi, {
        ...au()
      }), !r?.hide && _(dr, {
        ...Tv(r)
      }), !n?.hide && _(pr, {
        ...Cv(n),
        width: n.width ?? l + 20
      }), !o && _(zi, {
        ...iu(),
        content: _(ua, {
          yAxisFormatter: n?.tickFormatter
        })
      }), c.map((d, p) => _(Fi, {
        dataKey: d,
        isAnimationActive: !1,
        type: a,
        stroke: t[d].color ? At(t[d].color) : Dt(p),
        strokeWidth: 1.5,
        strokeDasharray: t[d].dashed ? "4 4" : void 0,
        dot: !1
      }, d))]
    })
  });
}, cW = ca(T8), C8 = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: a }, i) => {
  const o = e.map((c, f) => ({
    ...c,
    fill: t[c.label]?.color ? At(t[c.label].color) : Dt(f)
  })), u = e.map((c) => c.value).reduce((c, f) => c + f);
  return u === 0 && o.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), _(sa, {
    config: t,
    ref: i,
    aspect: n,
    "data-chromatic": "ignore",
    style: {
      height: 380
    },
    children: K(m8, {
      accessibilityLayer: !0,
      margin: {
        left: 0,
        right: 0
      },
      children: [u !== 0 && _(zi, {
        isAnimationActive: !1,
        content: _(ua, {
          yAxisFormatter: a
        })
      }), K(fr, {
        isAnimationActive: !1,
        nameKey: "label",
        legendType: "circle",
        dataKey: "value",
        data: o,
        innerRadius: 120,
        outerRadius: 135,
        paddingAngle: 2.5,
        children: [o.map((c, f) => {
          const l = a ? a(String(c.value)) : c.value;
          return _(Is, {
            fill: c.fill,
            "aria-label": `${c.label}: ${l} (${(c.value / u * 100).toFixed(0)}%)`
          }, `cell-${f}`);
        }), _(Be, {
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
        content: _(nu, {
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
}, lW = ca(C8);
var Mv = "Progress", $v = 100, [j8] = OE(Mv), [M8, $8] = j8(Mv), lP = ue.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: a,
      getValueLabel: i = I8,
      ...o
    } = e;
    (a || a === 0) && !Sw(a) && console.error(k8(`${a}`, "Progress"));
    const s = Sw(a) ? a : $v;
    n !== null && !_w(n, s) && console.error(N8(`${n}`, "Progress"));
    const u = _w(n, s) ? n : null, c = ys(u) ? i(u, s) : void 0;
    return /* @__PURE__ */ _(M8, { scope: r, value: u, max: s, children: /* @__PURE__ */ _(
      dh.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": ys(u) ? u : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": pP(u, s),
        "data-value": u ?? void 0,
        "data-max": s,
        ...o,
        ref: t
      }
    ) });
  }
);
lP.displayName = Mv;
var fP = "ProgressIndicator", dP = ue.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, a = $8(fP, r);
    return /* @__PURE__ */ _(
      dh.div,
      {
        "data-state": pP(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...n,
        ref: t
      }
    );
  }
);
dP.displayName = fP;
function I8(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function pP(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function ys(e) {
  return typeof e == "number";
}
function Sw(e) {
  return ys(e) && !isNaN(e) && e > 0;
}
function _w(e, t) {
  return ys(e) && !isNaN(e) && e <= t && e >= 0;
}
function k8(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$v}\`.`;
}
function N8(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var hP = lP, D8 = dP;
const vP = ue.forwardRef(({ className: e, value: t, ...r }, n) => _(hP, {
  ref: n,
  value: t,
  className: Z("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: _(D8, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
vP.displayName = hP.displayName;
function R8(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const L8 = (e) => {
  const t = SE.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((a) => {
    delete a.x, Object.entries(a).forEach(([i, o]) => {
      n < o && (n = o, r = i);
    });
  }), r;
}, q8 = ({ dataConfig: e, data: t, xAxis: r = {
  hide: !0
}, yAxis: n, label: a = !1, aspect: i, hideTooltip: o = !1, hideGrid: s = !1, showRatio: u = !1, valueFormatter: c }, f) => {
  const l = Object.keys(e), d = R8(t), p = Math.max(...d.map((g) => Wi(`${g.x}`))), y = l.reduce((g, b) => (g[b] = t.reduce((x, O) => x + O.values[b], 0), g), {}), h = {
    ...Tv(r),
    type: "number",
    dataKey: L8(d)
  }, v = {
    ...Cv(n),
    type: "category",
    dataKey: "x"
  };
  return _(sa, {
    config: e,
    ref: f,
    aspect: i,
    children: K(oP, {
      layout: "vertical",
      accessibilityLayer: !0,
      data: d,
      margin: {
        left: n && !n.hide ? 8 : 12,
        right: a || u ? 100 : 0
      },
      children: [!o && _(zi, {
        ...iu(!0),
        content: _(ua, {
          yAxisFormatter: n?.tickFormatter
        })
      }), !s && _(Bi, {
        ...au(),
        vertical: !0,
        horizontal: !1
      }), _(dr, {
        ...h,
        hide: r?.hide
      }), _(pr, {
        ...v,
        hide: n?.hide,
        width: n?.width ?? p + 20
      }), l.map((g, b) => _(St, {
        children: _(Er, {
          isAnimationActive: !1,
          layout: "vertical",
          dataKey: g,
          fill: e[g].color ? At(e[g].color) : Dt(b),
          radius: 4,
          maxBarSize: 24,
          children: (a || u) && _(_t, {
            position: "right",
            offset: 10,
            className: "fill-f1-foreground",
            fontSize: 12,
            formatter: c,
            content: u ? _(B8, {
              valueFormatter: c,
              total: y[g],
              showLabel: a
            }) : void 0
          }, `label-{${g}}`)
        }, `bar-${g}`)
      }))]
    })
  });
}, fW = ca(q8), B8 = ({ viewBox: e, offset: t = 0, value: r, valueFormatter: n, total: a, showLabel: i }) => {
  const { x: o = 0, y: s = 0, width: u = 0, height: c = 0 } = e, f = o + u + t, l = s + c / 2, d = n ? n(r) : r, p = Wi(`${d}`), y = a > 0 ? Math.round(Number(r) / a * 100) : 0;
  return K("g", {
    transform: `translate(${f},${l + 4})`,
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
}, Jp = (e) => e == null || typeof e == "object" && "value" in e && (e.value === void 0 || e.value === null) && // ----
typeof e == "object" && "value_x100" in e && (e.value_x100 === void 0 || e.value_x100 === null), Qp = (e) => "value" in e ? e.value : e.value_x100 !== void 0 && e.value_x100 !== null ? e.value_x100 / 100 : void 0, Aw = (e, t = {}) => {
  if (Jp(e))
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
  const r = Qp(e);
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
}, F8 = (e) => e == null ? {
  value: void 0
} : typeof e == "number" ? { value: e } : e, z8 = (e, t) => {
  if (e == null)
    return {
      numericValue: { value: void 0 },
      formatter: t?.formatter || Aw,
      formatterOptions: t?.formatterOptions || {}
    };
  const r = {
    formatter: t?.formatter || Aw,
    formatterOptions: t?.formatterOptions || {}
  };
  return typeof e == "number" ? { numericValue: { value: e }, ...r } : typeof e == "object" && e !== null && "numericValue" in e ? {
    numericValue: F8(e.numericValue),
    formatter: e.formatter ? e.formatter : r.formatter,
    formatterOptions: {
      ...r.formatterOptions,
      ...e.formatterOptions
    }
  } : { ...r, numericValue: e };
}, W8 = () => {
  const { locale: e } = _E();
  return rr(
    (t, r) => z8(t, {
      ...r,
      formatterOptions: {
        locale: e,
        ...r?.formatterOptions
      }
    }),
    [e]
  );
}, U8 = {
  "-1": PE,
  1: AE
}, H8 = {
  "-1": "negative",
  0: "neutral",
  1: "positive"
}, yP = De(({ percentage: e, amount: t, invertStatus: r, info: n, hint: a, nullText: i }, o) => {
  const s = W8(), u = s(t, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), c = s(e, {
    formatterOptions: {
      decimalPlaces: 0,
      emptyPlaceholder: i ?? "N/A"
    }
  }), f = Qp(c.numericValue), l = Qp(u.numericValue);
  let d = "", p = null, y = "", h = "null", v = a;
  if (Jp(l))
    d = i ?? "N/A", v = void 0;
  else {
    const g = Math.sign(f ?? 0).toString();
    h = H8[Math.sign((f ?? 0) * (r ? -1 : 1)).toString()];
    const b = Jp(f) ? null : c.formatter({
      ...c.numericValue,
      units: "%",
      unitsPosition: "append"
    }, c.formatterOptions), x = u.formatter(u.numericValue, u.formatterOptions);
    d = [b, x].filter(Boolean).join(" · "), y = `${h} balance`, p = h === "neutral" ? null : _(vt, {
      icon: U8[g],
      size: "sm",
      className: Z({
        positive: "text-f1-icon-positive",
        neutral: "text-f1-icon-secondary",
        negative: "text-f1-icon-critical"
      }[h])
    });
  }
  return _(Ei, {
    ref: o,
    className: Z({
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
yP.displayName = "F0TagBalance";
const Iv = ue.forwardRef(({ className: e, href: t, onClick: r, disabled: n, children: a, ...i }, o) => {
  const { actions: s } = Jn();
  return K("div", {
    ref: o,
    role: "article",
    className: Z("flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background-inverse-secondary p-4 shadow", (t || r) && !n && "cursor-pointer transition-all duration-200 hover:border-f1-border-hover hover:shadow-md", e),
    ...i,
    onClick: () => {
      if (!n && !t && r)
        return r();
    },
    children: [t && !n && _(ih, {
      href: t,
      className: "absolute inset-0 block",
      tabIndex: 0,
      children: _("span", {
        className: "sr-only",
        children: s.view
      })
    }), a]
  });
});
Iv.displayName = "Card";
const kv = ue.forwardRef(({ className: e, ...t }, r) => _("div", {
  ref: r,
  className: Z("flex flex-row gap-1.5", e),
  ...t
}));
kv.displayName = "CardHeader";
const Nv = ue.forwardRef(({ className: e, ...t }, r) => _("h3", {
  ref: r,
  className: Z("text-base font-medium text-f1-foreground", e),
  ...t
}));
Nv.displayName = "CardTitle";
const Dv = ue.forwardRef(({ className: e, ...t }, r) => _("h3", {
  ref: r,
  className: Z("line-clamp-1 text-base font-normal text-f1-foreground-secondary", e),
  ...t
}));
Dv.displayName = "CardSubtitle";
const K8 = ue.forwardRef(({ className: e, content: t }, r) => _("div", {
  ref: r,
  className: Z("-ml-1 flex h-6 w-6 items-center justify-center", e),
  children: _(uh, {
    children: K(ch, {
      children: [_(lh, {
        className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
        "aria-label": t,
        children: _(vt, {
          icon: EE,
          size: "md"
        })
      }), _(fh, {
        children: _("p", {
          children: t
        })
      })]
    })
  })
}));
K8.displayName = "CardInfo";
const V8 = ue.forwardRef(({ className: e, title: t, icon: r = Qw, ...n }, a) => _(ih, {
  ref: a,
  className: Z("group inline-flex aspect-square h-6 items-center justify-center gap-1", "rounded-sm border border-solid border-f1-border bg-f1-background-inverse-secondary", "whitespace-nowrap px-0 text-base font-medium text-f1-foreground", "cursor-pointer transition-colors hover:border-f1-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", e),
  role: "button",
  "aria-label": t,
  ...n,
  children: _(vt, {
    size: "sm",
    icon: r,
    className: "text-f1-icon-bold"
  })
}));
V8.displayName = "CardLink";
const Rv = ue.forwardRef(({ className: e, ...t }, r) => _("div", {
  ref: r,
  className: Z("relative flex grow flex-col", e),
  ...t
}));
Rv.displayName = "CardContent";
const Lv = ue.forwardRef(({ className: e, ...t }, r) => _("div", {
  ref: r,
  className: Z("flex items-center", e),
  ...t
}));
Lv.displayName = "CardFooter";
const dW = ue.forwardRef(function({ className: t, ...r }, n) {
  return _("div", {
    ref: n,
    className: Z("flex text-3xl font-semibold", t),
    ...r
  });
});
Lv.displayName = "CardComment";
function G8({ primaryAction: e, secondaryActions: t, compact: r = !1 }) {
  const n = TE("(min-width: 640px)");
  if (!(e || i()))
    return null;
  return K(Lv, {
    className: Z("flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]", "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4", r && "pt-3"),
    children: [t && _("div", {
      className: "flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit",
      children: Array.isArray(t) ? t.map((o, s) => _(Ut, {
        label: o.label,
        icon: o.icon,
        variant: "outline",
        onClick: o.onClick,
        hideLabel: n && s > 0,
        size: n ? r ? "sm" : "md" : "lg"
      }, s)) : _(lO, {
        href: t.href,
        target: t.target,
        disabled: t.disabled,
        children: t.label
      })
    }), e && _("div", {
      className: "w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center",
      children: _(Ut, {
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
const Y8 = ({ avatar: e, compact: t = !1 }) => e.type === "emoji" ? _(CE, {
  emoji: e.emoji,
  size: t ? "sm" : "lg"
}) : e.type === "file" ? _(fO, {
  file: e.file,
  size: t ? "sm" : "lg"
}) : e.type === "icon" ? _(jE, {
  icon: e.icon,
  size: t ? "sm" : "lg"
}) : _(Qr, {
  avatar: e,
  size: t ? "sm" : "lg"
});
function X8({ avatar: e, overlay: t = !1, compact: r = !1 }) {
  const n = e.type === "person";
  return _("div", {
    className: Z("mb-1.5 flex h-fit w-fit", t && !r && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background", t && n && "rounded-full", r && "mb-0"),
    children: _(Y8, {
      avatar: e,
      compact: r
    })
  });
}
const Z8 = {
  info: tO,
  warning: oh,
  critical: rO,
  positive: gs
}, qv = De(({ text: e, level: t }, r) => {
  bs(e, {
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
  return _(Ei, {
    ref: r,
    className: Z("pl-0.5", {
      info: "bg-f1-background-info text-f1-foreground-info",
      warning: "bg-f1-background-warning text-f1-foreground-warning",
      critical: "bg-f1-background-critical text-f1-foreground-critical",
      positive: "bg-f1-background-positive text-f1-foreground-positive"
    }[t]),
    left: _(vt, {
      icon: Z8[t],
      size: "md",
      "aria-hidden": !0,
      color: a
    }),
    text: e
  });
});
qv.displayName = "F0TagAlert";
const J8 = (e) => _("div", {
  "data-cell-type": "alert-tag",
  children: _(qv, {
    level: e.level,
    text: e.label
  })
}), Bt = {
  text: "pt-[2px]",
  avatar: "pt-[2px]",
  avatarList: "pt-[3px]"
};
function mP(e) {
  return typeof e == "object" && e !== null && "placeholder" in e && typeof e.placeholder == "string";
}
function la(e, t) {
  return mP(e) ? typeof e == "object" && e !== null && t in e ? e[t] === void 0 : !0 : !1;
}
function fa(e, t) {
  if (e !== void 0 && typeof e != "object")
    return e;
  if (!e || typeof e != "object")
    return;
  const n = t in e ? e[t] : void 0, i = mP(e) ? e.placeholder : void 0;
  if (n !== void 0)
    return t === "date" && n !== null && typeof n == "object" && "getTime" in n ? new Date(n.getTime()) : n;
  if (i !== void 0)
    return i;
}
function Q8(e) {
  if (Pw(e))
    try {
      return e.toLocaleDateString();
    } catch {
      return String(e);
    }
  const t = fa(e, "date");
  if (Pw(t))
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
function Pw(e) {
  return !!(e instanceof Date || e && typeof e == "object" && ("toLocaleDateString" in e || "getTime" in e));
}
const gP = (e, t) => {
  const r = fa(e, "number"), n = la(e, "number"), a = {
    unitsPosition: "right",
    units: "",
    ...typeof e == "object" && "number" in e ? e : {
      decimalPlaces: void 0,
      number: r
    }
  };
  return K("div", {
    className: Z("flex flex-1 items-center gap-1 text-f1-foreground", t.visualization === "table" && ["justify-end", Bt.text], n && "text-f1-foreground-secondary"),
    children: [a.unitsPosition === "left" && a.units && _(Ew, {
      units: a.units
    }), a.decimalPlaces !== void 0 ? a.number?.toFixed(a.decimalPlaces) : a.number?.toString() ?? "", a.unitsPosition === "right" && a.units && _(Ew, {
      units: a.units
    })]
  });
}, Ew = ({ units: e }) => _("span", {
  children: e.toString()
}), e9 = (e, t) => {
  const r = {
    ...typeof e == "object" && "amount" in e ? e : {
      amount: e
    }
  };
  return gP({
    ...typeof e == "object" && "amount" in e ? e : {},
    number: r.amount,
    decimalPlaces: r.currency?.decimalPlaces,
    units: r.currency?.symbol,
    unitsPosition: r.currency?.symbolPosition
  }, t);
}, t9 = (e, t) => {
  const r = e.type ?? "person";
  return _("div", {
    className: Z("pointer-events-auto w-full", t.visualization === "table" && Bt.avatarList),
    children: _(HO, {
      type: r,
      avatars: e.avatarList,
      size: "xs",
      max: e.max
    })
  });
}, r9 = (e, t) => K("div", {
  className: Z("flex items-center gap-2", t.visualization === "table" && Bt.avatar),
  children: [_(Qr, {
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
}), n9 = (e, t) => {
  const r = e.label ?? t.i18n.countries[e.code] ?? e.code;
  return K("div", {
    "data-cell-type": "country",
    className: "flex items-center gap-2",
    children: [_(ME, {
      size: "sm",
      flag: e.code,
      "aria-label": r
    }), " ", _(Ti, {
      className: "min-w-0 flex-1 text-f1-foreground",
      tag: "span",
      children: r
    })]
  });
}, a9 = (e, t) => {
  const r = Q8(e), n = la(e, "date");
  return _("div", {
    className: Z("monospace text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Bt.text),
    children: r
  });
};
var pW = {
  md: 900,
  xl: 1440
}, i9 = {
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
}, hW = {
  special: {
    highlight: "hsl(var(--accent-50))"
  }
};
const Bv = De(({ text: e, ...t }, r) => {
  bs(e, {
    disallowEmpty: !0
  }, {
    componentName: "F0TagDot"
  });
  const n = "color" in t && t.color ? `hsl(${i9[t.color][50]})` : "customColor" in t && t.customColor;
  return n ? _(Ei, {
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
Bv.displayName = "F0TagDot";
const o9 = (e) => _("div", {
  "data-cell-type": "dot-tag",
  children: _(Bv, {
    text: e.label,
    color: e.color
  })
}), s9 = (e) => K("div", {
  className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
  "data-cell-type": "file",
  children: [_(fO, {
    file: e
  }), " ", _("span", {
    children: e.name
  })]
}), bP = ({ tooltip: e, children: t }) => e ? _(uh, {
  delayDuration: 100,
  disableHoverableContent: !0,
  children: K(ch, {
    children: [_(lh, {
      asChild: !0,
      className: "pointer-events-auto",
      children: t
    }), _(fh, {
      className: "pointer-events-none max-w-xs",
      children: _("p", {
        className: "font-semibold",
        children: e
      })
    })]
  })
}) : _(St, {
  children: t
}), xP = (e, t) => _("div", {
  className: Z("flex items-center gap-2", t.visualization === "table" && Bt.avatar),
  children: _(bP, {
    tooltip: e.tooltip,
    children: K("div", {
      className: "inline-flex items-center gap-2",
      children: [_(vt, {
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
}), u9 = (e) => _(xP, {
  icon: $E,
  label: e.name
}), c9 = (e) => typeof e == "object" && e !== null && "lines" in e ? e.lines : void 0, l9 = (e) => (typeof e == "object" && e !== null && "full" in e && e.full) ?? !1, f9 = (e, t) => {
  const r = fa(e, "text")?.toString() || "", n = la(e, "text"), a = l9(e), i = c9(e) || 3;
  return _(Ti, {
    className: Z("whitespace-pre-wrap break-words text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Bt.text),
    lines: i,
    disabled: a,
    children: r
  });
}, bd = 100, Tw = 12, d9 = 12, p9 = (e, t) => {
  const r = fa(e, "percentage"), n = la(e, "percentage");
  if (r === void 0)
    return null;
  if (n)
    return _("span", {
      className: Z("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Bt.text),
      "data-cell-type": "percentage",
      children: r
    });
  const a = bd / 2, i = a - Tw / 2, o = i - d9, s = 2 * Math.PI * o, u = (100 - Math.min(Number(r), 100)) / 100 * s, c = typeof e == "object" && "label" in e;
  return K("div", {
    className: "flex items-center gap-2",
    "data-cell-type": "percentage",
    children: [K("svg", {
      viewBox: `0 0 ${bd} ${bd}`,
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
        strokeWidth: Tw,
        strokeDasharray: s,
        strokeDashoffset: u,
        strokeLinecap: "round"
      })]
    }), _("span", {
      className: "text-f1-foreground",
      children: c ? e.label : `${r}%`
    })]
  });
}, h9 = (e, t) => {
  const r = `${e.firstName.toString()} ${e.lastName.toString()}`;
  return K("div", {
    className: Z("flex min-w-0 flex-1 items-center gap-2", t.visualization === "table" && Bt.avatar),
    children: [_(Qr, {
      avatar: {
        type: "person",
        firstName: e.firstName.toString(),
        lastName: e.lastName.toString(),
        src: e.src,
        badge: e.badge,
        deactivated: e.deactivated
      },
      size: "xs"
    }), _(Ti, {
      className: Z("min-w-0 flex-1", e.deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
      tag: "span",
      children: r
    })]
  });
}, v9 = (e, t) => {
  const r = fa(e, "value"), n = la(e, "value");
  if (r === void 0)
    return null;
  if (n)
    return _("span", {
      className: "text-f1-foreground-secondary",
      "data-cell-type": "progressBar",
      children: r
    });
  const a = r, i = typeof e == "object" && "max" in e ? e.max ?? 100 : 100, o = typeof e == "object" && "label" in e ? e.label : void 0, s = typeof e == "object" && "hideLabel" in e ? e.hideLabel : void 0, u = typeof e == "object" && "color" in e ? e.color : void 0, c = At(u || "categorical-1"), f = a / i * 100;
  return K("div", {
    className: "flex w-full items-center gap-2",
    "data-cell-type": "progressBar",
    children: [_("div", {
      className: "min-w-16 flex-grow",
      children: _(vP, {
        color: c,
        value: f,
        max: 100,
        getValueLabel: (l) => `${(l ?? 0).toFixed(1)}% ${o}`,
        "aria-label": o,
        className: "w-full"
      })
    }), !s && _("div", {
      className: "flex-shrink-0 text-sm font-medium text-f1-foreground",
      children: o
    })]
  });
}, Fv = De(({ text: e, additionalAccessibleText: t, variant: r }, n) => (bs(e, {
  disallowEmpty: !0
}, {
  componentName: "F0TagStatus"
}), _(Ei, {
  ref: n,
  className: Z({
    neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
    info: "bg-f1-background-info text-f1-foreground-info",
    positive: "bg-f1-background-positive text-f1-foreground-positive",
    warning: "bg-f1-background-warning text-f1-foreground-warning",
    critical: "bg-f1-background-critical text-f1-foreground-critical"
  }[r]),
  left: _("div", {
    className: Z("m-1 aspect-square w-2 rounded-full", {
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
Fv.displayName = "F0TagStatus";
const y9 = (e) => _("div", {
  "data-cell-type": "status",
  children: _(Fv, {
    variant: e.status,
    text: e.label
  })
}), m9 = {
  synced: {
    icon: gs,
    colorClass: "text-f1-icon-positive"
  },
  syncing: {
    icon: NE,
    colorClass: "text-f1-icon-secondary",
    animated: !0
  },
  pending: {
    icon: dO,
    colorClass: "text-f1-icon-secondary"
  },
  partiallySynced: {
    icon: kE,
    colorClass: "text-f1-icon-warning"
  },
  outdated: {
    icon: oh,
    colorClass: "text-f1-icon-warning"
  },
  failed: {
    icon: IE,
    colorClass: "text-f1-icon-critical"
  }
}, g9 = (e, t) => {
  const r = m9[e.status], n = t.i18n.syncStatus[e.status], a = e.tooltip ?? n, i = _(vt, {
    icon: r.icon,
    "aria-label": a
  });
  return _("div", {
    className: Z("flex items-center", t.visualization === "table" && Bt.avatar),
    "data-cell-type": "sync-status",
    children: _(bP, {
      tooltip: a,
      children: _("div", {
        className: Z("inline-flex items-center", r.colorClass),
        children: r.animated ? _(DE.div, {
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
}, b9 = (e) => _("div", {
  "data-cell-type": "tag",
  children: _(ph, {
    text: e.label,
    icon: e.icon
  })
}), ou = De(({ avatar: e, text: t }, r) => (bs(t, {
  disallowEmpty: !0
}, {
  componentName: "F0TagAvatar"
}), _(Ei, {
  ref: r,
  className: "border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
  left: _(Qr, {
    avatar: e,
    size: "xs"
  }),
  text: t,
  shape: e.type === "person" ? "rounded" : "square"
})));
ou.displayName = "AvatarTag";
const wP = De(({ name: e, src: t }, r) => _(ou, {
  ref: r,
  avatar: {
    type: "company",
    name: e,
    src: t
  },
  text: e
}));
wP.displayName = "F0TagCompany";
const OP = De(({ src: e, name: t }, r) => _(ou, {
  ref: r,
  avatar: {
    type: "person",
    firstName: t,
    lastName: "",
    src: e
  },
  text: t
}));
OP.displayName = "F0TagPerson";
const SP = De(({ name: e, src: t }, r) => _(ou, {
  ref: r,
  avatar: {
    type: "team",
    name: e,
    src: t
  },
  text: e
}));
SP.displayName = "F0TagTeam";
const x9 = (e) => {
  const { type: t } = e;
  if (t === "dot") return _(Bv, {
    ...e
  });
  if (t === "person") return _(OP, {
    ...e
  });
  if (t === "team") return _(SP, {
    ...e
  });
  if (t === "company") return _(wP, {
    ...e
  });
  if (t === "alert") return _(qv, {
    ...e
  });
  if (t === "status") return _(Fv, {
    ...e
  });
  if (t === "balance") return _(yP, {
    ...e
  });
  if (t === "raw") return _(ph, {
    ...e
  });
}, eh = ({ tag: e }) => {
  const t = x9(e);
  return t || "Invalid tag type";
}, _P = ({ count: e, list: t }) => {
  const r = _(ph, {
    text: `+${e}`
  });
  return t?.length ? K(aO, {
    children: [_(iO, {
      children: _("span", {
        className: "cursor-pointer",
        children: r
      })
    }), _(oO, {
      side: "top",
      children: K(sO, {
        className: "[*[data-state=visible]_div]:bg-f1-background dark flex max-h-[220px] flex-col",
        children: [t.map((n, a) => _("div", {
          className: "flex w-[172px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n.description ? _(sh, {
            label: n.description,
            children: _("div", {
              children: _(eh, {
                tag: n
              })
            })
          }) : _(eh, {
            tag: n
          })
        }, a)), _(uO, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : r;
};
_P.displayName = "TagCounter";
const AP = ({ type: e, tags: t, max: r = 4, remainingCount: n }) => {
  const a = t.map((i) => ({
    type: e,
    ...i
  }));
  return _(cO, {
    items: a,
    max: r,
    renderListItem: (i) => _(eh, {
      tag: i
    }),
    renderDropdownItem: () => null,
    forceShowingOverflowIndicator: n !== void 0,
    renderOverflowIndicator: (i) => _(_P, {
      count: (n ?? 0) + i,
      list: n ? void 0 : a.slice(a.length - i)
    }),
    overflowIndicatorWithPopover: !1,
    className: "flex-1"
  });
};
AP.displayName = "F0TagList";
const w9 = (e) => _(AP, {
  type: e.type,
  tags: e.tags,
  max: e.max
}), O9 = (e, t) => K("div", {
  className: Z("flex items-center gap-2", t.visualization === "table" && Bt.avatar),
  children: [_(Qr, {
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
}), S9 = (e, t) => {
  const r = fa(e, "text"), n = la(e, "text"), a = r?.toString() ?? "";
  return _(Ti, {
    lines: 1,
    tag: "span",
    className: Z("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Bt.text),
    children: a
  });
}, Ke = {
  text: S9,
  longText: f9,
  number: gP,
  date: a9,
  amount: e9,
  avatarList: t9,
  status: y9,
  alertTag: J8,
  person: h9,
  percentage: p9,
  progressBar: v9,
  company: r9,
  team: O9,
  tag: b9,
  dotTag: o9,
  tagList: w9,
  icon: xP,
  file: s9,
  folder: u9,
  country: n9,
  syncStatus: g9
}, _9 = (e) => e !== void 0 && typeof e == "object", vW = (e, t, r) => {
  const { type: n, value: a } = _9(e) ? e : {
    type: "text",
    value: e ?? r
  }, i = Ke[n];
  return i ? a === void 0 ? r : i(a, {
    visualization: t.visualization,
    i18n: t.i18n
  }) : `[Invalid ${n} renderer]`;
}, A9 = {
  text: Ke.text,
  number: Ke.number,
  date: Ke.date,
  amount: Ke.amount,
  person: Ke.person,
  company: Ke.company,
  team: Ke.team,
  status: Ke.status,
  tag: Ke.tag,
  avatarList: Ke.avatarList,
  tagList: Ke.tagList,
  alertTag: Ke.alertTag,
  dotTag: Ke.dotTag,
  file: Ke.file,
  folder: Ke.folder,
  progressBar: Ke.progressBar
};
function P9({ metadata: e }) {
  const { type: t, value: r } = e.property, n = A9[t];
  if (!n)
    return K("div", {
      className: "flex h-8 items-center gap-1.5",
      children: ["icon" in e && _(vt, {
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
      children: _(sh, {
        label: e.tooltip,
        children: _(vt, {
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
function Cw({ otherActions: e, selectable: t = !1, selected: r = !1, onSelect: n, title: a, overlay: i = !1 }) {
  const o = Jn(), s = e && e.length > 0, [u, c] = Te(!1);
  return !s && !t ? null : K("div", {
    className: Z("flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]", (u || r) && "delay-0 sm:opacity-100", i && "absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"),
    children: [s && _("div", {
      className: "flex items-center justify-center",
      children: _(lj, {
        items: e,
        open: u,
        onOpenChange: c,
        children: _(On, {
          label: o.actions.other,
          icon: RE,
          variant: "ghost",
          size: "sm",
          hideLabel: !0,
          pressed: u,
          compact: !0,
          onClick: (f) => f.stopPropagation()
        })
      })
    }), t && _("div", {
      className: "flex items-center justify-center",
      children: _(LE, {
        title: a,
        checked: r,
        onCheckedChange: n,
        hideLabel: !0
      })
    })]
  });
}
const yW = ["contain", "cover", "fit-width", "fit-height", "scale-down"], mW = ["xs", "sm", "md", "lg", "xl"], E9 = {
  xs: "h-24",
  sm: "h-32",
  md: "h-40",
  lg: "h-48",
  xl: "h-64"
}, T9 = {
  contain: "object-contain h-full w-full",
  cover: "object-cover h-full w-full",
  "fit-width": "w-full h-auto",
  "fit-height": "object-contain h-full w-auto",
  "scale-down": "object-scale-down h-full w-full"
};
function C9(e) {
  return T9[e];
}
const j9 = De(function({ compact: t = !1, avatar: r, image: n, imageFit: a = "fit-width", imageSize: i = "sm", blurredBackground: o = !0, title: s, description: u, metadata: c, children: f, link: l, primaryAction: d, secondaryActions: p, otherActions: y, selectable: h = !1, selected: v = !1, onSelect: g, onClick: b, forceVerticalMetadata: x = !1, fullHeight: O = !1, disableOverlayLink: m = !1 }, w) {
  const S = Vt(null), A = (P) => {
    S?.current?.click(), b?.(), P.preventDefault(), P.stopPropagation();
  };
  return K(Iv, {
    className: Z("group relative bg-f1-background shadow-none transition-all", t && "p-3", O && "h-full", (h || y && y.length > 0) && !v && "hover:border-f1-border", l && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", v && "border-f1-border-selected bg-f1-background-selected-secondary"),
    onClick: b,
    ref: w,
    children: [l && !m && _(lO, {
      href: l,
      variant: "unstyled",
      className: Z("z-1 absolute inset-0 block rounded-xl", qE()),
      "aria-label": s,
      ref: S,
      children: " "
    }), n && K("div", {
      className: Z("relative -mx-3 -mt-3 mb-4 rounded-md", E9[i], t && "-mx-2 -mt-2 mb-3", a === "fit-height" && "flex items-center justify-center overflow-hidden", a === "fit-width" && "flex items-center justify-center overflow-hidden", a !== "fit-width" && a !== "fit-height" && "overflow-hidden"),
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
      }), _(BE, {
        src: n,
        alt: s,
        className: Z(C9(a))
      }), _(Cw, {
        otherActions: y,
        selectable: h,
        selected: v,
        onSelect: g,
        title: s,
        overlay: !0
      })]
    }), K("div", {
      className: "flex grow flex-col gap-2",
      children: [K("div", {
        className: "flex flex-row items-start justify-between gap-1",
        children: [K(kv, {
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
          className: Z("relative flex-col gap-0 p-0", n && !t && "pt-3", t && "flex-row items-center gap-2"),
          children: [r && _(X8, {
            avatar: r,
            overlay: !!n,
            compact: t
          }), K("div", {
            className: Z("flex flex-col gap-0"),
            children: [_(Nv, {
              className: Z("text-lg font-semibold text-f1-foreground", t && "line-clamp-1 text-base"),
              children: s
            }), u && _(Dv, {
              className: Z("text-base text-f1-foreground-secondary"),
              children: _(Ti, {
                lines: t ? 2 : 3,
                children: u
              })
            })]
          })]
        }), !n && _(Cw, {
          otherActions: y,
          selectable: h,
          selected: v,
          onSelect: g,
          title: s
        })]
      }), (c || f) && K(Rv, {
        className: "pointer-events-none",
        children: [c && _("div", {
          className: Z("flex flex-col gap-0.5", t && "gap-x-3 gap-y-0", x && "flex-col gap-y-0.5"),
          children: c.map((P, k) => _(P9, {
            metadata: P
          }, k))
        }), f]
      })]
    }), _(G8, {
      primaryAction: d,
      secondaryActions: p,
      compact: t
    })]
  });
}), M9 = ({ compact: e = !1 }) => K(Iv, {
  className: Z("group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none", e && "p-3"),
  "aria-busy": "true",
  "aria-live": "polite",
  children: [K(kv, {
    className: Z("flex flex-col gap-2.5 p-0", e && "flex-row items-center gap-2"),
    children: [_(xt, {
      className: Z("h-10 w-10 rounded-full", e && "h-6 w-6")
    }), K("div", {
      className: Z("flex flex-col gap-0", e && "flex-row items-center gap-1.5"),
      children: [_(Nv, {
        className: "flex h-6 items-center",
        children: _(xt, {
          className: Z("h-4 w-20 rounded-md", e && "h-3")
        })
      }), _(Dv, {
        className: "flex h-5 items-center",
        children: _(xt, {
          className: "h-3 w-12 rounded-md"
        })
      })]
    })]
  }), _(Rv, {
    className: "flex flex-col gap-0",
    children: Array.from({
      length: 3
    }).map((t, r) => K("div", {
      className: "flex h-6 items-center gap-1.5",
      children: [_(xt, {
        className: "h-4 w-4 rounded-full"
      }), _(xt, {
        className: "h-3 w-full max-w-20 rounded-md"
      })]
    }, r))
  })]
}), $9 = ["forceVerticalMetadata", "disableOverlayLink"], PP = De((e, t) => {
  const r = $9.reduce((n, a) => {
    const { [a]: i, ...o } = n;
    return o;
  }, e);
  return _(j9, {
    ref: t,
    ...r
  });
}), I9 = ({ compact: e = !1 }) => _(M9, {
  compact: e
});
PP.displayName = "F0Card";
const gW = pO(PP, I9), EP = De(({ className: e, ...t }, r) => _(hO, {
  ref: r,
  className: Z("text-f1-foreground-secondary", e),
  ...t
}));
EP.displayName = hO.displayName;
const TP = ({ className: e, ...t }) => _("div", {
  className: e,
  ...t
});
TP.displayName = "DialogFooter";
const CP = ({ className: e, ...t }) => _("div", {
  className: e,
  ...t
});
CP.displayName = "DialogHeader";
const xd = [{
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
}], k9 = (e, t) => {
  const r = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, n = aE();
  return K("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    ...e,
    children: [_("defs", {
      children: xd.map((a) => _("clipPath", {
        id: `${n}-${a.id}`,
        children: _("path", {
          d: a.path
        })
      }, a.id))
    }), r ? xd.map((a) => _("path", {
      d: a.path,
      fill: "currentColor",
      vectorEffect: "non-scaling-stroke"
    }, a.id)) : xd.map((a) => _("foreignObject", {
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
}, N9 = De(k9);
function bW({ title: e, description: t, onClick: r, onClose: n, isVisible: a, dismissable: i = !1, trackVisibility: o, type: s, ...u }) {
  const [c, f] = Te(a);
  Ue(() => {
    f(a), o && o(a);
  }, [a, o]);
  const l = () => {
    f(!1), n && n();
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
          children: [K(St, {
            children: [s === "one-campaign" ? _("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: _(vt, {
                icon: N9,
                size: "lg",
                className: "!h-8 !w-8"
              })
            }) : _("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: _(FE, {
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
            children: _(Ut, {
              variant: "ghost",
              icon: vO,
              size: "sm",
              hideLabel: !0,
              onClick: l,
              label: "Close"
            })
          })]
        })
      })
    })
  });
}
const xW = zE, D9 = (e, t, r) => {
  const n = $e[r];
  return n ? n.add(e, t) : { from: /* @__PURE__ */ new Date(), to: /* @__PURE__ */ new Date() };
};
function R9({ granularities: e, value: t, onChange: r }) {
  const n = Jn(), a = (i) => {
    r(i);
  };
  return K("div", {
    className: "flex flex-col gap-2",
    children: [_("h6", {
      className: "text-sm font-medium",
      children: n.date.selectedBy
    }), _(yO, {
      value: t,
      onValueChange: a,
      as: "list",
      children: _(mO, {
        children: e.map((i) => _(Pd, {
          value: i,
          children: n.date.granularities[i]?.label || i
        }, i))
      })
    })]
  });
}
const jw = "__custom__", L9 = (e, t) => {
  if (!e?.value) return !1;
  const r = typeof t.value == "function" ? t.value() : t.value;
  return e.granularity !== t.granularity ? !1 : ny(e.value.from, r.from) && (!e.value.to || !r.to || ny(e.value.to, r.to));
}, q9 = ({ presets: e, ...t }) => {
  const [r, n] = Te();
  return Ue(() => {
    if (t.date) {
      const i = Object.entries(e).find(([o, s]) => L9(t.date, s));
      n(i ? i[0] : void 0);
    }
  }, [t.date, e]), _(yO, {
    as: "list",
    value: r,
    onValueChange: (i) => {
      n(i), t.onSelect?.(i);
    },
    children: K(mO, {
      children: [Object.entries(e).map(([i, o]) => _(Pd, {
        value: i,
        children: o?.label || i
      }, i)), _(WE, {}), _(Pd, {
        value: jw,
        children: "Custom"
      }, jw)]
    })
  });
}, La = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity, Mw = "__custom__";
function B9({ onSelect: e, defaultValue: t, presets: r = [], granularities: n = ["day"], children: a, compareTo: i, defaultCompareTo: o, onCompareToChange: s, hideCalendarInput: u, value: c, asChild: f, ...l }) {
  const d = Jn(), [p, y] = Te(c || t);
  Ue(() => {
    La(c, p) || y(c || t);
  }, [c, t]);
  const h = Qe(() => p?.granularity ?? "day", [p?.granularity]), v = Qe(() => $e[h], [h]), g = Qe(() => $e[h].calendarMode || "single", [h]), b = ($) => {
    x({
      value: v.toRange($ ?? void 0),
      granularity: h
    });
  }, x = ($) => {
    La($, p) || (y($), e?.($));
  }, O = ($) => {
    w($ === Mw);
    const N = $ ? r[+$] : void 0;
    N && (x({
      value: $e[N.granularity].toRange(typeof N.value == "function" ? N.value() : N.value),
      granularity: N.granularity
    }), $ !== Mw && l.onOpenChange?.(!1));
  }, [m, w] = Te(!1), S = ($) => {
    x({
      value: p?.value,
      granularity: $
    });
  }, A = Qe(() => r.length > 0 && !m, [r, m]), P = () => {
    w(!1);
  }, k = Qe(() => v.calendarView || "day", [v]), [E, I] = Te(o || void 0), C = Qe(() => {
    const $ = (i ?? {})[h] || [];
    if (!p?.value)
      return [];
    const N = p.value, R = $.map((q, z) => {
      const D = typeof q.value == "function" ? q.value(v.toRange(N)) : D9(v.toRange(N), q.value.delta, q.value.units), L = Array.isArray(D) ? D.map((F) => v.toString(F, d)).join(", ") : v.toString(D, d);
      return {
        label: q.label,
        value: (z + 1).toString(),
        description: L,
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
  Ue(() => {
    I(o || "0");
  }, [h, o]);
  const M = ($) => {
    I($);
  };
  return Ue(() => {
    s?.(E ? C[+E]?.dateValue : void 0);
  }, [E, s, C]), K(UE, {
    open: l.open,
    onOpenChange: l.onOpenChange,
    children: [_(HE, {
      asChild: f,
      children: a
    }), _(KE, {
      className: "w-full overflow-auto",
      align: "start",
      children: A ? _(q9, {
        presets: r,
        date: p,
        onSelect: O
      }) : K("div", {
        className: "flex gap-4",
        children: [(r.length > 0 || n.length > 1) && K("div", {
          children: [r.length > 0 && _(Ut, {
            icon: Jw,
            variant: "neutral",
            size: "sm",
            hideLabel: !0,
            label: "Back",
            onClick: P
          }), n.length > 1 && _(R9, {
            granularities: n,
            value: h,
            onChange: S
          })]
        }), K("div", {
          className: "min-w-[300px] flex-1",
          children: [_(VE, {
            showInput: !u,
            mode: g,
            view: k,
            onSelect: b,
            defaultSelected: p?.value,
            minDate: l.minDate,
            maxDate: l.maxDate
          }), C.length > 0 && K("div", {
            className: "mt-4 flex flex-col gap-2",
            children: [_("div", {
              className: "text-gray-500 text-sm",
              children: d.date.compareTo
            }), _(GE, {
              label: d.date.compareTo,
              hideLabel: !0,
              placeholder: d.date.compareTo,
              options: C.map(($) => ({
                label: $.label,
                value: $.value,
                description: $.description ?? ""
              })),
              onChange: M,
              value: E
            })]
          })]
        })]
      })
    })]
  });
}
const jP = De(({ value: e, onDateChange: t, granularity: r, onOpenChange: n, minDate: a, maxDate: i, onClear: o, ...s }, u) => {
  const [c, f] = Te(""), [l, d] = Te(!1), p = Jn();
  Ue(() => {
    f(r.toString(e?.value, p));
  }, [e, r, p]);
  const y = (b) => ZE(b, r, {
    minDate: a,
    maxDate: i
  }), h = (b, x) => {
    if (b === "") {
      t?.({
        value: void 0,
        granularity: x.key
      }), d(s.required ?? !1);
      return;
    }
    const O = x.toRange(x.fromString(b, p));
    O && y(O?.from) && y(O?.to) ? (t?.({
      value: O,
      granularity: x.key
    }), d(!1)) : d(!0);
  }, v = () => {
    h(c, r);
  };
  return _(St, {
    children: _(YE, {
      ...s,
      icon: XE,
      ref: u,
      onFocus: () => n?.(!0),
      onClear: () => {
        o?.(), f(""), h("", r);
      },
      onKeyDown: (b) => {
        b.key === "Enter" && v();
      },
      type: "text",
      onChange: (b) => {
        f(b);
      },
      error: l || s.error,
      onBlur: v,
      value: c,
      onClickContent: () => n?.(!0)
    })
  });
});
jP.displayName = "DateInput";
function F9({ onChange: e, value: t, presets: r = [], granularities: n = ["day"], minDate: a, maxDate: i, open: o = !1, ...s }) {
  const [u, c] = Te(), [f, l] = Te(o);
  Ue(() => {
    l(o);
  }, [o]);
  const d = Jn(), p = Qe(() => n[0] ?? "day", [n]), y = rr((w) => {
    const S = w || p;
    if (!$e[S])
      throw new Error(`Invalid granularity ${S}`);
    return {
      ...$e[S],
      key: S
    };
  }, [p]), h = rr((w) => {
    if (!w)
      return;
    const S = y(w?.granularity);
    return w ? {
      value: S.toRange(S.calendarMode === "range" ? w.value : w.value?.from ?? void 0),
      granularity: w.granularity
    } : void 0;
  }, [y]), v = Qe(() => y(u?.granularity), [u?.granularity, y]);
  Ue(() => {
    const w = h(t);
    La(u, w) || c(w);
  }, [t]);
  const g = (w) => {
    const S = h(w), P = y(S?.granularity).calendarMode !== "range" && S?.granularity === u?.granularity && !La(S, u);
    b(S), P && l(!1);
  }, b = (w) => {
    const S = h(w);
    if (c(S), !La(S, u)) {
      const A = y(S?.granularity);
      e?.(S, A.toString(S?.value, d));
    }
  }, x = (w) => {
    l(w), s.onOpenChange?.(w);
  }, O = Qe(() => r.filter((w) => n.includes(w.granularity)), [r, n]), m = Vt(null);
  return Ue(() => {
    f && m.current && requestAnimationFrame(() => {
      m.current?.focus();
    });
  }, [f]), _(B9, {
    hideCalendarInput: !0,
    onSelect: g,
    value: u,
    presets: O,
    granularities: n,
    minDate: a,
    maxDate: i,
    open: f,
    onOpenChange: x,
    asChild: !0,
    children: _(jP, {
      ref: m,
      ...s,
      value: u,
      granularity: v,
      onDateChange: b
    })
  });
}
const wW = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => $e.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => $e.day.toRange(fo(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => $e.day.toRange({
      from: fo(/* @__PURE__ */ new Date(), 7),
      to: /* @__PURE__ */ new Date()
    })
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => $e.week.toRange(/* @__PURE__ */ new Date())
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => $e.week.toRange(fo(/* @__PURE__ */ new Date(), 7))
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => $e.month.toRange(/* @__PURE__ */ new Date())
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => $e.month.toRange(va(/* @__PURE__ */ new Date(), 1))
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => $e.month.toRange(va(/* @__PURE__ */ new Date(), 3))
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => $e.month.toRange(va(/* @__PURE__ */ new Date(), 6))
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => $e.quarter.toRange(/* @__PURE__ */ new Date())
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () => $e.quarter.toRange(va(/* @__PURE__ */ new Date(), 3))
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => $e.halfyear.toRange(/* @__PURE__ */ new Date())
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () => $e.halfyear.toRange(va(/* @__PURE__ */ new Date(), 6))
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => $e.year.toRange(Ym(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => $e.year.toRange(Ym(/* @__PURE__ */ new Date(), 3))
  }
}, OW = JE(
  "F0DatePicker",
  F9
), z9 = De(function({ bare: t = !1, ...r }, n) {
  return _("div", {
    ref: n,
    role: "separator",
    className: Z("-mx-4 h-[1px]", t ? void 0 : "my-4"),
    style: {
      backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
    },
    ...r
  });
}), W9 = ({ text: e, isCompleted: t }) => K("div", {
  className: "flex flex-row items-center gap-2",
  children: [_(vt, {
    className: t ? "text-f1-icon-positive" : "text-f1-icon-secondary",
    icon: t ? gs : dO,
    size: "md"
  }), _("span", {
    className: t ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
    children: e
  })]
}), U9 = ({ title: e, items: t }) => K("div", {
  className: "px-4 pb-2",
  children: [_("div", {
    className: "mb-2 text-sm text-f1-foreground-secondary",
    children: e
  }), _("div", {
    className: "flex flex-col gap-2",
    children: t.map((r) => _(W9, {
      text: r.text,
      isCompleted: r.isCompleted ?? !1
    }, r.text))
  })]
}), H9 = ({ onClose: e, success: t, successButtonOnClick: r, successButtonLabel: n, closeLabel: a }) => {
  const i = t && n && r, o = (s = !1) => K(St, {
    children: [_(Ut, {
      variant: "outline",
      label: a,
      onClick: e,
      size: s ? "lg" : void 0
    }), i && _(Ut, {
      variant: "promote",
      label: n,
      onClick: () => {
        r(), e?.();
      },
      size: s ? "lg" : void 0
    })]
  });
  return K(TP, {
    className: "px-4 pb-4 pt-2 [&_div]:w-full",
    children: [_("div", {
      className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",
      children: o()
    }), _("div", {
      className: "flex flex-col-reverse gap-2 sm:hidden",
      children: o(!0)
    })]
  });
}, MP = De(({ open: e, onClose: t, success: r = !0, errorMessage: n, successMessage: a, nextSteps: i, closeLabel: o, portalContainer: s }, u) => {
  const [c, f] = Te(!1), l = rr(() => {
    f(!0), setTimeout(() => {
      t?.(), f(!1);
    }, 200);
  }, [t]);
  return _(QE, {
    open: e && !c,
    onOpenChange: (d) => !d && l?.(),
    children: K(eT, {
      ref: u,
      className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
      container: s,
      children: [K(CP, {
        className: `flex flex-col items-start gap-4 px-4 ${r ? "pt-5" : "py-5"}`,
        children: [_(dj, {
          type: r ? "positive" : "critical",
          size: "lg"
        }), K("div", {
          className: "flex flex-col gap-0.5",
          children: [_(tT, {
            className: "text-xl font-semibold sm:text-lg",
            children: r ? a?.title : n?.title
          }), _(EP, {
            className: "text-lg sm:text-base",
            children: r ? a?.description : n?.description
          })]
        })]
      }), r && i && i.items?.length > 0 ? K(St, {
        children: [_(z9, {}), _(U9, {
          title: i.title,
          items: i.items
        })]
      }) : null, _(H9, {
        onClose: l,
        success: r,
        successButtonLabel: a.buttonLabel,
        successButtonOnClick: a.buttonOnClick,
        closeLabel: o
      })]
    })
  });
});
MP.displayName = "UpsellRequestResponseDialog";
var K9 = "Label", $P = ue.forwardRef((e, t) => /* @__PURE__ */ _(
  dh.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
$P.displayName = K9;
var IP = $P;
const V9 = ue.forwardRef(({ className: e, ...t }, r) => _(IP, {
  ref: r,
  className: Z("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", e),
  ...t
}));
V9.displayName = IP.displayName;
function SW({ label: e, showIcon: t = !0, onRequest: r, showConfirmation: n = !0, loading: a, errorMessage: i, successMessage: o, loadingState: s, nextSteps: u, closeLabel: c, variant: f = "promote", onModalStateChange: l, portalContainer: d, ...p }) {
  const [y, h] = Te(null), [v, g] = Te(!1), b = async () => {
    if (r) {
      g(!0);
      try {
        await r(), n && (h("success"), l?.(!0));
      } catch {
        h("error"), l?.(!0);
      } finally {
        g(!1);
      }
    }
  }, x = () => {
    h(null), l?.(!1);
  }, O = a || v, m = O ? s.label : e;
  return K(St, {
    children: [_(Ut, {
      variant: f,
      label: m,
      icon: t ? rT : void 0,
      onClick: b,
      loading: O,
      ...p
    }), n && y && _(MP, {
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
const G9 = De(function({ title: t, subtitle: r, mediaUrl: n, primaryAction: a, secondaryAction: i, onClose: o, isLoading: s = !1, children: u, variant: c = "default" }, f) {
  const l = n?.includes(".mp4"), [d, p] = Te(!1), y = () => {
    o && o(), p(!0);
  };
  return s ? _(kP, {
    ref: f
  }) : d ? null : K("div", {
    ref: f,
    className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
    children: [_("div", {
      className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      children: l ? _("video", {
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
        className: Z("flex w-full flex-col gap-1", c === "default" ? "sm:max-w-lg" : void 0),
        children: [_("h3", {
          className: "font-bold text-xl text-f1-foreground",
          children: t
        }), r && _("p", {
          className: "text-base text-f1-foreground-secondary",
          children: r
        })]
      }), K("div", {
        className: "flex gap-3",
        children: [a && _(Ut, {
          onClick: a.onClick,
          label: a.label,
          variant: a.variant || "default",
          size: "md",
          icon: a.icon
        }), i && _(Ut, {
          onClick: i.onClick,
          label: i.label,
          variant: i.variant || "outline",
          size: "md",
          icon: i.icon
        }), u]
      })]
    }), o && _("div", {
      className: "absolute right-2 top-2 z-10",
      children: _(Ut, {
        variant: "ghost",
        icon: vO,
        size: "sm",
        hideLabel: !0,
        onClick: y,
        label: "Close"
      })
    })]
  });
}), kP = De(function(t, r) {
  return K("div", {
    ref: r,
    className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    ...t,
    children: [_("div", {
      className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      children: _(xt, {
        className: "h-full w-full rounded-lg"
      })
    }), K("div", {
      className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      children: [K("div", {
        className: "flex w-full flex-col gap-1 sm:max-w-lg",
        children: [_(xt, {
          className: "h-7 w-3/4"
        }), _(xt, {
          className: "h-4 w-full"
        }), _(xt, {
          className: "h-4 w-2/3"
        })]
      }), K("div", {
        className: "flex gap-3",
        children: [_(xt, {
          className: "h-9 w-32"
        }), _(xt, {
          className: "h-9 w-24"
        })]
      })]
    }), _("div", {
      className: "absolute right-2 top-2 z-10",
      children: _(xt, {
        className: "h-8 w-8 rounded-md"
      })
    })]
  });
}), Y9 = pO(G9, kP);
Y9.displayName = "BaseBanner";
const NP = {
  get: () => ({}),
  set: () => Promise.resolve()
}, DP = Lt(NP), _W = ({ children: e, handler: t }) => _(DP.Provider, {
  value: t ?? NP,
  children: e
}), AW = () => {
  const e = it(DP);
  if (!e)
    throw new Error("useDataCollectionStorage must be used within a DataCollectionStorageProvider");
  return e;
};
function _i(e) {
  "@babel/helpers - typeof";
  return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
function X9(e, t) {
  if (_i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z9(e) {
  var t = X9(e, "string");
  return _i(t) == "symbol" ? t : t + "";
}
function Ui(e, t, r) {
  return (t = Z9(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function $w(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Iw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $w(Object(r), !0).forEach(function(n) {
      Ui(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $w(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var J9 = {
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
}, RP = /* @__PURE__ */ Symbol("closestEdge");
function Q9(e, t) {
  var r, n, a = t.element, i = t.input, o = t.allowedEdges, s = {
    x: i.clientX,
    y: i.clientY
  }, u = a.getBoundingClientRect(), c = o.map(function(l) {
    return {
      edge: l,
      value: J9[l](u, s)
    };
  }), f = (r = (n = c.sort(function(l, d) {
    return l.value - d.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && r !== void 0 ? r : null;
  return Iw(Iw({}, e), {}, Ui({}, RP, f));
}
function PW(e) {
  var t;
  return (t = e[RP]) !== null && t !== void 0 ? t : null;
}
function su() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function() {
    t.forEach(function(a) {
      return a();
    });
  };
}
function ez(e) {
  if (Array.isArray(e)) return e;
}
function tz(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, a = f;
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
function th(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function LP(e, t) {
  if (e) {
    if (typeof e == "string") return th(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? th(e, t) : void 0;
  }
}
function rz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qP(e, t) {
  return ez(e) || tz(e, t) || LP(e, t) || rz();
}
var wd = {}, Aa = {}, kw;
function BP() {
  if (kw) return Aa;
  kw = 1, Object.defineProperty(Aa, "__esModule", { value: !0 }), Aa.bind = void 0;
  function e(t, r) {
    var n = r.type, a = r.listener, i = r.options;
    return t.addEventListener(n, a, i), function() {
      t.removeEventListener(n, a, i);
    };
  }
  return Aa.bind = e, Aa;
}
var Ir = {}, Nw;
function nz() {
  if (Nw) return Ir;
  Nw = 1;
  var e = Ir && Ir.__assign || function() {
    return e = Object.assign || function(i) {
      for (var o, s = 1, u = arguments.length; s < u; s++) {
        o = arguments[s];
        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
      }
      return i;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.bindAll = void 0;
  var t = /* @__PURE__ */ BP();
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
      var f = n(c, s);
      return (0, t.bind)(i, f);
    });
    return function() {
      u.forEach(function(f) {
        return f();
      });
    };
  }
  return Ir.bindAll = a, Ir;
}
var Dw;
function az() {
  return Dw || (Dw = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var t = /* @__PURE__ */ BP();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var r = /* @__PURE__ */ nz();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return r.bindAll;
    } });
  })(wd)), wd;
}
var Zn = /* @__PURE__ */ az(), FP = "data-pdnd-honey-pot";
function zP(e) {
  return e instanceof Element && e.hasAttribute(FP);
}
function WP(e) {
  var t = document.elementsFromPoint(e.x, e.y), r = qP(t, 2), n = r[0], a = r[1];
  return n ? zP(n) ? a ?? null : n : null;
}
var iz = 2147483647;
function Rw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rw(Object(r), !0).forEach(function(n) {
      Ui(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ai = 2, qw = Ai / 2;
function oz(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function sz(e) {
  return {
    x: e.x - qw,
    y: e.y - qw
  };
}
function uz(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function cz(e) {
  return {
    x: Math.min(e.x, window.innerWidth - Ai),
    y: Math.min(e.y, window.innerHeight - Ai)
  };
}
function Bw(e) {
  var t = e.client, r = cz(uz(sz(oz(t))));
  return DOMRect.fromRect({
    x: r.x,
    y: r.y,
    width: Ai,
    height: Ai
  });
}
function Fw(e) {
  var t = e.clientRect;
  return {
    left: "".concat(t.left, "px"),
    top: "".concat(t.top, "px"),
    width: "".concat(t.width, "px"),
    height: "".concat(t.height, "px")
  };
}
function lz(e) {
  var t = e.client, r = e.clientRect;
  return (
    // is within horizontal bounds
    t.x >= r.x && t.x <= r.x + r.width && // is within vertical bounds
    t.y >= r.y && t.y <= r.y + r.height
  );
}
function fz(e) {
  var t = e.initial, r = document.createElement("div");
  r.setAttribute(FP, "true");
  var n = Bw({
    client: t
  });
  Object.assign(r.style, Lw(Lw({
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
  }, Fw({
    clientRect: n
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: iz
  })), document.body.appendChild(r);
  var a = Zn.bind(window, {
    type: "pointermove",
    listener: function(o) {
      var s = {
        x: o.clientX,
        y: o.clientY
      };
      n = Bw({
        client: s
      }), Object.assign(r.style, Fw({
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
    if (a(), lz({
      client: s,
      clientRect: n
    })) {
      r.remove();
      return;
    }
    function u() {
      c(), r.remove();
    }
    var c = Zn.bindAll(window, [
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
function dz() {
  var e = null;
  function t() {
    return e = null, Zn.bind(window, {
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
        n = fz({
          initial: c
        });
      }
      if (o === "onDrop") {
        var f, l = s.location.current.input;
        (f = n) === null || f === void 0 || f({
          current: {
            x: l.clientX,
            y: l.clientY
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
function pz(e) {
  if (Array.isArray(e)) return th(e);
}
function hz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function vz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UP(e) {
  return pz(e) || hz(e) || LP(e) || vz();
}
function da(e) {
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
var yz = da(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), zv = da(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var t = navigator, r = t.userAgent;
  return r.includes("AppleWebKit") && !r.includes("Chrome");
}), rh = {
  isLeavingWindow: /* @__PURE__ */ Symbol("leaving"),
  isEnteringWindow: /* @__PURE__ */ Symbol("entering")
};
function mz(e) {
  var t = e.dragLeave;
  return zv() ? t.hasOwnProperty(rh.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !zv())
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
  Zn.bindAll(
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
        !r.isOverWindow && r.enterCount === 0 && (i[rh.isEnteringWindow] = !0), r.isOverWindow = !0, r.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(i) {
        r.enterCount--, r.isOverWindow && r.enterCount === 0 && (i[rh.isLeavingWindow] = !0, r.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function gz(e) {
  return "nodeName" in e;
}
function bz(e) {
  return gz(e) && e.ownerDocument !== document;
}
function xz(e) {
  var t = e.dragLeave, r = t.type, n = t.relatedTarget;
  return r !== "dragleave" ? !1 : zv() ? mz({
    dragLeave: t
  }) : n == null ? !0 : yz() ? bz(n) : n instanceof HTMLIFrameElement;
}
function wz(e) {
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
function qa(e) {
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
var Oz = function(t) {
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
}, Od = Oz(function(e) {
  return e();
}), lo = /* @__PURE__ */ (function() {
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
function Sz(e) {
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
      var c = u.nativeSetDragImage, f = {
        current: r,
        previous: a,
        initial: r
      };
      i({
        eventName: "onGenerateDragPreview",
        payload: {
          source: t,
          location: f,
          nativeSetDragImage: c
        }
      }), lo.schedule(function() {
        i({
          eventName: "onDragStart",
          payload: {
            source: t,
            location: f
          }
        });
      });
    },
    dragUpdate: function(u) {
      var c = u.current;
      lo.flush(), Od.cancel(), i({
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
      Od(function() {
        lo.flush();
        var f = {
          initial: r,
          previous: a,
          current: c
        };
        i({
          eventName: "onDrag",
          payload: {
            source: t,
            location: f
          }
        });
      });
    },
    drop: function(u) {
      var c = u.current, f = u.updatedSourcePayload;
      lo.flush(), Od.cancel(), i({
        eventName: "onDrop",
        payload: {
          source: f ?? t,
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
var nh = {
  isActive: !1
};
function HP() {
  return !nh.isActive;
}
function _z(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function Az(e) {
  var t = e.current, r = e.next;
  if (t.length !== r.length)
    return !0;
  for (var n = 0; n < t.length; n++)
    if (t[n].element !== r[n].element)
      return !0;
  return !1;
}
function Pz(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!HP())
    return;
  var i = Ez({
    event: t,
    dragType: r,
    getDropTargetsOver: n
  });
  nh.isActive = !0;
  var o = {
    current: i
  };
  Sd({
    event: t,
    current: i.dropTargets
  });
  var s = Sz({
    source: r.payload,
    dispatchEvent: a,
    initial: i
  });
  function u(p) {
    var y = Az({
      current: o.current.dropTargets,
      next: p.dropTargets
    });
    o.current = p, y && s.dragUpdate({
      current: o.current
    });
  }
  function c(p) {
    var y = qa(p), h = zP(p.target) ? WP({
      x: y.clientX,
      y: y.clientY
    }) : p.target, v = n({
      target: h,
      input: y,
      source: r.payload,
      current: o.current.dropTargets
    });
    v.length && (p.preventDefault(), Sd({
      event: p,
      current: v
    })), u({
      dropTargets: v,
      input: y
    });
  }
  function f() {
    o.current.dropTargets.length && u({
      dropTargets: [],
      input: o.current.input
    }), s.drop({
      current: o.current,
      updatedSourcePayload: null
    }), l();
  }
  function l() {
    nh.isActive = !1, d();
  }
  var d = Zn.bindAll(
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
        xz({
          dragLeave: y
        }) && (u({
          input: o.current.input,
          dropTargets: []
        }), r.startedFrom === "external" && f());
      }
    }, {
      // A "drop" can only happen if the browser allowed the drop
      type: "drop",
      listener: function(y) {
        if (o.current = {
          dropTargets: o.current.dropTargets,
          input: qa(y)
        }, !o.current.dropTargets.length) {
          f();
          return;
        }
        y.preventDefault(), Sd({
          event: y,
          current: o.current.dropTargets
        }), s.drop({
          current: o.current,
          // When dropping something native, we need to extract the latest
          // `.items` from the "drop" event as it is now accessible
          updatedSourcePayload: r.type === "external" ? r.getDropPayload(y) : null
        }), l();
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
          input: qa(y)
        }, f();
      }
    }].concat(UP(wz({
      onDragEnd: f
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
    nativeSetDragImage: _z(t)
  });
}
function Sd(e) {
  var t, r = e.event, n = e.current, a = (t = n[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  a != null && r.dataTransfer && (r.dataTransfer.dropEffect = a);
}
function Ez(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = qa(t);
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
var zw = {
  canStart: HP,
  start: Pz
}, ah = /* @__PURE__ */ new Map();
function Tz(e) {
  var t = e.typeKey, r = e.mount, n = ah.get(t);
  if (n)
    return n.usageCount++, n;
  var a = {
    typeKey: t,
    unmount: r(),
    usageCount: 1
  };
  return ah.set(t, a), a;
}
function Cz(e) {
  var t = Tz(e);
  return function() {
    t.usageCount--, !(t.usageCount > 0) && (t.unmount(), ah.delete(e.typeKey));
  };
}
function KP(e, t) {
  var r = t.attribute, n = t.value;
  return e.setAttribute(r, n), function() {
    return e.removeAttribute(r);
  };
}
function Ww(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ww(Object(r), !0).forEach(function(n) {
      Ui(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ww(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _d(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = jz(e)) || t) {
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
function jz(e, t) {
  if (e) {
    if (typeof e == "string") return Uw(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Uw(e, t) : void 0;
  }
}
function Uw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ad(e) {
  return e.slice(0).reverse();
}
function Mz(e) {
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
    var h = su(KP(p.element, {
      attribute: a,
      value: "true"
    }), o(p));
    return da(h);
  }
  function u(p) {
    var y, h, v, g, b = p.source, x = p.target, O = p.input, m = p.result, w = m === void 0 ? [] : m;
    if (x == null)
      return w;
    if (!(x instanceof Element))
      return x instanceof Node ? u({
        source: b,
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
      source: b,
      element: A.element
    };
    if (A.canDrop && !A.canDrop(P))
      return u({
        source: b,
        target: A.element.parentElement,
        input: O,
        result: w
      });
    var k = (y = (h = A.getData) === null || h === void 0 ? void 0 : h.call(A, P)) !== null && y !== void 0 ? y : {}, E = (v = (g = A.getDropEffect) === null || g === void 0 ? void 0 : g.call(A, P)) !== null && v !== void 0 ? v : r, I = {
      data: k,
      element: A.element,
      dropEffect: E,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return u({
      source: b,
      target: A.element.parentElement,
      input: O,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(UP(w), [I])
    });
  }
  function c(p) {
    var y = p.eventName, h = p.payload, v = _d(h.location.current.dropTargets), g;
    try {
      for (v.s(); !(g = v.n()).done; ) {
        var b, x = g.value, O = n.get(x.element), m = hr(hr({}, h), {}, {
          self: x
        });
        O == null || (b = O[y]) === null || b === void 0 || b.call(
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
  var f = {
    onGenerateDragPreview: c,
    onDrag: c,
    onDragStart: c,
    onDrop: c,
    onDropTargetChange: function(y) {
      var h = y.payload, v = new Set(h.location.current.dropTargets.map(function(R) {
        return R.element;
      })), g = /* @__PURE__ */ new Set(), b = _d(h.location.previous.dropTargets), x;
      try {
        for (b.s(); !(x = b.n()).done; ) {
          var O, m = x.value;
          g.add(m.element);
          var w = n.get(m.element), S = v.has(m.element), A = hr(hr({}, h), {}, {
            self: m
          });
          if (w == null || (O = w.onDropTargetChange) === null || O === void 0 || O.call(w, A), !S) {
            var P;
            w == null || (P = w.onDragLeave) === null || P === void 0 || P.call(w, A);
          }
        }
      } catch (R) {
        b.e(R);
      } finally {
        b.f();
      }
      var k = _d(h.location.current.dropTargets), E;
      try {
        for (k.s(); !(E = k.n()).done; ) {
          var I, C, M = E.value;
          if (!g.has(M.element)) {
            var $ = hr(hr({}, h), {}, {
              self: M
            }), N = n.get(M.element);
            N == null || (I = N.onDropTargetChange) === null || I === void 0 || I.call(N, $), N == null || (C = N.onDragEnter) === null || C === void 0 || C.call(N, $);
          }
        }
      } catch (R) {
        k.e(R);
      } finally {
        k.f();
      }
    }
  };
  function l(p) {
    f[p.eventName](p);
  }
  function d(p) {
    var y = p.source, h = p.target, v = p.input, g = p.current, b = u({
      source: y,
      target: h,
      input: v
    });
    if (b.length >= g.length)
      return b;
    for (var x = Ad(g), O = Ad(b), m = [], w = 0; w < x.length; w++) {
      var S, A = x[w], P = O[w];
      if (P != null) {
        m.push(P);
        continue;
      }
      var k = m[w - 1], E = x[w - 1];
      if (k?.element !== E?.element)
        break;
      var I = n.get(A.element);
      if (!I)
        break;
      var C = {
        input: v,
        source: y,
        element: I.element
      };
      if (I.canDrop && !I.canDrop(C) || !((S = I.getIsSticky) !== null && S !== void 0 && S.call(I, C)))
        break;
      m.push(hr(hr({}, A), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return Ad(m);
  }
  return {
    dropTargetForConsumers: s,
    getIsOver: d,
    dispatchEvent: l
  };
}
function $z(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Iz(e)) || t) {
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
function Iz(e, t) {
  if (e) {
    if (typeof e == "string") return Hw(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Hw(e, t) : void 0;
  }
}
function Hw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Kw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kw(Object(r), !0).forEach(function(n) {
      Ui(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Nz() {
  var e = /* @__PURE__ */ new Set(), t = null;
  function r(i) {
    t && (!i.canMonitor || i.canMonitor(t.canMonitorArgs)) && t.active.add(i);
  }
  function n(i) {
    var o = kz({}, i);
    e.add(o), r(o);
    function s() {
      e.delete(o), t && t.active.delete(o);
    }
    return da(s);
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
      var u = $z(e), c;
      try {
        for (u.s(); !(c = u.n()).done; ) {
          var f = c.value;
          r(f);
        }
      } catch (v) {
        u.e(v);
      } finally {
        u.f();
      }
    }
    if (t) {
      for (var l = Array.from(t.active), d = 0, p = l; d < p.length; d++) {
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
function Dz(e) {
  var t = e.typeKey, r = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, i = e.defaultDropEffect, o = Nz(), s = Mz({
    typeKey: t,
    defaultDropEffect: i
  });
  function u(l) {
    n?.(l), s.dispatchEvent(l), o.dispatchEvent(l), a?.(l);
  }
  function c(l) {
    var d = l.event, p = l.dragType;
    zw.start({
      event: d,
      dragType: p,
      getDropTargetsOver: s.getIsOver,
      dispatchEvent: u
    });
  }
  function f() {
    function l() {
      var d = {
        canStart: zw.canStart,
        start: c
      };
      return r(d);
    }
    return Cz({
      typeKey: t,
      mount: l
    });
  }
  return {
    registerUsage: f,
    dropTarget: s.dropTargetForConsumers,
    monitor: o.monitorForConsumers
  };
}
var Rz = da(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), Lz = "pdnd:android-fallback", Vw = "text/plain", qz = "text/uri-list", Bz = "application/vnd.pdnd", Pi = /* @__PURE__ */ new WeakMap();
function Fz(e) {
  return Pi.set(e.element, e), function() {
    Pi.delete(e.element);
  };
}
var Gw = dz(), Wv = Dz({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(t) {
    return su(Gw.bindEvents(), Zn.bind(document, {
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
          var f = n.target;
          if (!(f instanceof HTMLElement))
            return null;
          var l = Pi.get(f);
          if (!l)
            return null;
          var d = qa(n), p = {
            element: l.element,
            dragHandle: (a = l.dragHandle) !== null && a !== void 0 ? a : null,
            input: d
          };
          if (l.canDrag && !l.canDrag(p))
            return n.preventDefault(), null;
          if (l.dragHandle) {
            var y = WP({
              x: d.clientX,
              y: d.clientY
            });
            if (!l.dragHandle.contains(y))
              return n.preventDefault(), null;
          }
          var h = (i = (o = l.getInitialDataForExternal) === null || o === void 0 ? void 0 : o.call(l, p)) !== null && i !== void 0 ? i : null;
          if (h)
            for (var v = 0, g = Object.entries(h); v < g.length; v++) {
              var b = qP(g[v], 2), x = b[0], O = b[1];
              n.dataTransfer.setData(x, O ?? "");
            }
          Rz() && !n.dataTransfer.types.includes(Vw) && !n.dataTransfer.types.includes(qz) && n.dataTransfer.setData(Vw, Lz), n.dataTransfer.setData(Bz, "");
          var m = {
            element: l.element,
            dragHandle: (s = l.dragHandle) !== null && s !== void 0 ? s : null,
            data: (u = (c = l.getInitialData) === null || c === void 0 ? void 0 : c.call(l, p)) !== null && u !== void 0 ? u : {}
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
    (r = Pi.get(i.source.element)) === null || r === void 0 || (n = r[a]) === null || n === void 0 || n.call(
      r,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      i
    );
  },
  onPostDispatch: Gw.getOnPostDispatch()
}), zz = Wv.dropTarget, Wz = Wv.monitor;
function Uz(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var t = Pi.get(e.element);
    t && console.warn("You have already registered a `draggable` on the same element", {
      existing: t,
      proposed: e
    });
  }
  var r = su(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    Wv.registerUsage(),
    Fz(e),
    KP(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return da(r);
}
function EW(e) {
  const t = /* @__PURE__ */ new Set();
  return su(
    Wz({
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
      } : Uz({
        element: r,
        getInitialData: () => ({ ...n, instanceId: e }),
        dragHandle: i ?? void 0
      });
    },
    registerDroppable(r, { id: n }) {
      return zz({
        element: r,
        getData: ({ input: a, element: i }) => Q9(
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
const VP = Lt(null);
function Uv() {
  return it(VP);
}
function TW({ driver: e, children: t }) {
  const r = Vt(e), n = Qe(() => ({
    driver: r.current
  }), []);
  return _(VP.Provider, {
    value: n,
    children: t
  });
}
function CW(e) {
  const t = Uv(), { ref: r, payload: n, disabled: a, handleRef: i } = e;
  Ue(() => {
    if (r.current && !(!t || a))
      return t.driver.registerDraggable(r.current, {
        payload: n,
        disabled: a,
        handle: i?.current ?? null
      });
  }, [t, r, n, a, i]);
}
function jW(e) {
  const t = Uv(), r = e?.ref, n = e?.id, a = e?.accepts;
  Ue(() => {
    if (r?.current && !(!t || !n || !a))
      return t.driver.registerDroppable(r.current, { id: n, accepts: a });
  }, [t, r, n, a]);
}
function MW(e) {
  const t = Uv();
  Ue(
    () => t ? t.driver.subscribe(e) : void 0,
    [t, e]
  );
}
export {
  Aw as $,
  Rt as A,
  Er as B,
  Yz as C,
  lj as D,
  Li as E,
  ua as F,
  Sr as G,
  Bi as H,
  au as I,
  Cv as J,
  Tv as K,
  Xz as L,
  At as M,
  Dt as N,
  Ev as O,
  nu as P,
  vP as Q,
  oW as R,
  cA as S,
  sW as T,
  uW as U,
  cW as V,
  lW as W,
  dr as X,
  pr as Y,
  fW as Z,
  W8 as _,
  qh as a,
  PW as a$,
  Qp as a0,
  yP as a1,
  Fv as a2,
  MP as a3,
  Iv as a4,
  Rv as a5,
  V9 as a6,
  Lv as a7,
  SW as a8,
  Y9 as a9,
  S8 as aA,
  Ae as aB,
  qi as aC,
  UB as aD,
  vL as aE,
  _S as aF,
  Vs as aG,
  Hs as aH,
  WR as aI,
  pW as aJ,
  _j as aK,
  Jz as aL,
  tW as aM,
  rW as aN,
  IS as aO,
  zh as aP,
  Qz as aQ,
  hW as aR,
  Zz as aS,
  La as aT,
  B9 as aU,
  AW as aV,
  kv as aW,
  Nv as aX,
  A9 as aY,
  zz as aZ,
  Q9 as a_,
  iW as aa,
  _W as ab,
  Gz as ac,
  dj as ad,
  nW as ae,
  HO as af,
  yW as ag,
  mW as ah,
  gW as ai,
  OW as aj,
  wW as ak,
  xW as al,
  eh as am,
  qv as an,
  wP as ao,
  Bv as ap,
  _P as aq,
  AP as ar,
  OP as as,
  SP as at,
  bW as au,
  EW as av,
  TW as aw,
  MW as ax,
  CW as ay,
  jW as az,
  fe as b,
  j9 as b0,
  Wz as b1,
  vW as b2,
  CP as b3,
  EP as b4,
  TP as b5,
  Dv as b6,
  V8 as b7,
  dW as b8,
  z9 as b9,
  eW as ba,
  m8 as bb,
  fr as bc,
  Xr as c,
  qe as d,
  ht as e,
  ae as f,
  Ie as g,
  aW as h,
  Yr as i,
  oe as j,
  Vr as k,
  se as l,
  _t as m,
  Is as n,
  Bo as o,
  ru as p,
  Fi as q,
  Tr as r,
  mv as s,
  ca as t,
  tn as u,
  jv as v,
  Wi as w,
  sa as x,
  zi as y,
  iu as z
};
