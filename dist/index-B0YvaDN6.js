import { jsxs as A, jsx as g, Fragment as tn } from "react/jsx-runtime";
import * as U from "react";
import C, { useRef as Ct, useState as ue, useCallback as Ye, useEffect as it, useLayoutEffect as mc, PureComponent as Wn, useMemo as Ps, forwardRef as Pt, useId as gc, useImperativeHandle as yc } from "react";
import { Q as Tn, a5 as cf, t as G, X as uf, cD as df, cE as ff, w as Ds, ad as Ne, ae as bc, cF as Sn, cG as hf, cH as pf, cI as Na, cJ as Pa, cK as Da, cL as Ma, cM as Ia, cN as mf, cO as gf, cP as yf, cQ as bf, cR as vc, cS as wc, ao as Nn, cT as Ee, cU as W, cV as Ie, cW as xc, cX as vf, cY as Sc, cZ as Ms, c_ as wf, c$ as ge, d0 as Ki, d1 as ie, d2 as kc, d3 as Gi, d4 as Is, d5 as Ls, d6 as Rs, d7 as he, d8 as De, d9 as Ho, da as Yi, db as xf, dc as Ce, dd as qi, de as Pe, df as hn, dg as $s, dh as Xi, di as ui, dj as Ji, bI as js, dk as Sf, dl as Zr, dm as Si, dn as kf, dp as Af, dq as Cf, dr as Ef, ds as Of, dt as _f, du as Ac, dv as Cc, dw as Ec, dx as Oc, dy as _c, dz as Tf, dA as ki, dB as Nf, dC as Pf, dD as Lr, dE as Wt, dF as _t, dG as Fs, dH as Rr, dI as Tc, dJ as Nc, dK as Df, dL as Mf, dM as If, dN as Lf, br as Rf, dO as $f, dP as Oe, dQ as _e, T as jf, x as Ff, y as zf, E as Bf, dR as Vf, dS as Pc, A as Hf, dT as Wf, bq as mt, N as on, aV as Uf, W as ce, a3 as zs, dU as Kf, cg as ke, dV as So, dW as Qe, dX as gt, dY as $e, dZ as Gf, d_ as di, d$ as nt, e0 as Dc, e1 as qe, e2 as Bs, e3 as Ze, e4 as La, e5 as Yf, e6 as Mc, e7 as ye, e8 as Ve, e9 as yr, ea as Ai, eb as Ic, ec as qf, ed as pn, ee as Xf, ef as Jf, eg as Zf, Y as j, aj as Lc, a_ as Qf, ak as Rc, eh as $r, ei as jr, ej as Vs, ek as eh, el as $c, em as jc, en as Fc, eo as th, ep as zc, eq as Bc, er as Vc, es as Hc, et as Wc, eu as Uc, ev as nh, ew as rh, u as Un, ac as ih, bh as Zi, K as oh, v as Qr, aU as sh, aC as ah, aX as lh, ex as ch, ey as uh, ez as dh, eA as fh, eB as hh, eC as ph, a8 as Kc, a9 as Hs, aa as Ws, eD as Ra, eE as mh, eF as gh, eG as yh, eH as bh, eI as vh, eJ as wh, eK as xh, eL as Sh, eM as kh, eN as Ah, eO as Ch, eP as Eh, eQ as Oh, eR as _h, eS as Th, eT as Nh, eU as Ph, ap as Dh, eV as Mh, eW as Ih, eX as Lh, eY as Rh, eZ as $h, e_ as jh, e$ as Fh, f0 as zh, ay as $a, aq as Gc, f1 as Bh, bG as Yc, f2 as Vh, ax as Hh, f3 as Wh, f4 as Uh, f5 as Kh, f6 as Gh, f7 as Yh, f8 as qh, f9 as Xh, fa as Jh, fb as Zh } from "./useDataCollectionSource-DaFKenWN.js";
import './index.css';const Qh = {
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
function ep(t, e) {
  const n = t.scrollSnapList();
  return typeof e == "number" ? n.map(() => e) : e(n, t);
}
function tp(t, e) {
  const n = t.rootNode();
  return e && e(n) || n;
}
function Us(t = {}) {
  let e, n, r, i, o = null, s = 0, a = !1, c = !1, l = !1, u = !1;
  function d(_, D) {
    n = _;
    const {
      mergeOptions: $,
      optionsAtMedia: z
    } = D, B = $(Qh, Us.globalOptions), L = $(B, t);
    if (e = z(L), n.scrollSnapList().length <= 1) return;
    u = e.jump, r = !1, i = ep(n, e.delay);
    const {
      eventStore: V,
      ownerDocument: se
    } = n.internalEngine(), He = !!n.internalEngine().options.watchDrag, We = tp(n, e.rootNode);
    V.add(se, "visibilitychange", b), He && n.on("pointerDown", w), He && !e.stopOnInteraction && n.on("pointerUp", S), e.stopOnMouseEnter && V.add(We, "mouseenter", k), e.stopOnMouseEnter && !e.stopOnInteraction && V.add(We, "mouseleave", O), e.stopOnFocusIn && n.on("slideFocusStart", y), e.stopOnFocusIn && !e.stopOnInteraction && V.add(n.containerNode(), "focusout", m), e.playOnInit && m();
  }
  function f() {
    n.off("pointerDown", w).off("pointerUp", S).off("slideFocusStart", y), y(), r = !0, a = !1;
  }
  function h() {
    const {
      ownerWindow: _
    } = n.internalEngine();
    _.clearTimeout(s), s = _.setTimeout(M, i[n.selectedScrollSnap()]), o = (/* @__PURE__ */ new Date()).getTime(), n.emit("autoplay:timerset");
  }
  function p() {
    const {
      ownerWindow: _
    } = n.internalEngine();
    _.clearTimeout(s), s = 0, o = null, n.emit("autoplay:timerstopped");
  }
  function m() {
    if (!r) {
      if (v()) {
        l = !0;
        return;
      }
      a || n.emit("autoplay:play"), h(), a = !0;
    }
  }
  function y() {
    r || (a && n.emit("autoplay:stop"), p(), a = !1);
  }
  function b() {
    if (v())
      return l = a, y();
    l && m();
  }
  function v() {
    const {
      ownerDocument: _
    } = n.internalEngine();
    return _.visibilityState === "hidden";
  }
  function w() {
    c || y();
  }
  function S() {
    c || m();
  }
  function k() {
    c = !0, y();
  }
  function O() {
    c = !1, m();
  }
  function x(_) {
    typeof _ < "u" && (u = _), m();
  }
  function E() {
    a && y();
  }
  function N() {
    a && m();
  }
  function I() {
    return a;
  }
  function M() {
    const {
      index: _
    } = n.internalEngine(), D = _.clone().add(1).get(), $ = n.scrollSnapList().length - 1, z = e.stopOnLastSnap && D === $;
    if (n.canScrollNext() ? n.scrollNext(u) : n.scrollTo(0, u), n.emit("autoplay:select"), z) return y();
    m();
  }
  function T() {
    if (!o) return null;
    const _ = i[n.selectedScrollSnap()], D = (/* @__PURE__ */ new Date()).getTime() - o;
    return _ - D;
  }
  return {
    name: "autoplay",
    options: t,
    init: d,
    destroy: f,
    play: x,
    stop: E,
    reset: N,
    isPlaying: I,
    timeUntilNext: T
  };
}
Us.globalOptions = void 0;
function nn() {
  return nn = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, nn.apply(this, arguments);
}
var np = 0.996, rp = function(e, n) {
  return n === void 0 && (n = np), e * n / (1 - n);
};
function ip(t) {
  return t[t.length - 1];
}
function op(t) {
  return t.reduce(function(e, n) {
    return e + n;
  }) / t.length;
}
var sp = function(e, n, r) {
  return Math.min(Math.max(n, e), r);
};
function ko(t, e) {
  if (t.length !== e.length)
    throw new Error("vectors must be same length");
  return t.map(function(n, r) {
    return n + e[r];
  });
}
function ja(t) {
  return Math.max.apply(Math, t.map(Math.abs));
}
function Pn(t) {
  return Object.freeze(t), Object.values(t).forEach(function(e) {
    e !== null && typeof e == "object" && !Object.isFrozen(e) && Pn(e);
  }), t;
}
function ap() {
  var t = {};
  function e(i, o) {
    return t[i] = (t[i] || []).concat(o), function() {
      return n(i, o);
    };
  }
  function n(i, o) {
    t[i] = (t[i] || []).filter(function(s) {
      return s !== o;
    });
  }
  function r(i, o) {
    i in t && t[i].forEach(function(s) {
      return s(o);
    });
  }
  return Pn({
    on: e,
    off: n,
    dispatch: r
  });
}
function lp(t) {
  var e = [], n = function(s) {
    return s.addEventListener("wheel", t, {
      passive: !1
    }), e.push(s), function() {
      return r(s);
    };
  }, r = function(s) {
    s.removeEventListener("wheel", t), e = e.filter(function(a) {
      return a !== s;
    });
  }, i = function() {
    e.forEach(r);
  };
  return Pn({
    observe: n,
    unobserve: r,
    disconnect: i
  });
}
var cp = 16 * 1.125, up = typeof window < "u" && window.innerHeight || 800, Ao = [1, cp, up];
function dp(t) {
  var e = t.deltaX * Ao[t.deltaMode], n = t.deltaY * Ao[t.deltaMode], r = (t.deltaZ || 0) * Ao[t.deltaMode];
  return {
    timeStamp: t.timeStamp,
    axisDelta: [e, n, r]
  };
}
var fp = [-1, -1, -1];
function hp(t, e) {
  if (!e)
    return t;
  var n = e === !0 ? fp : e.map(function(r) {
    return r ? -1 : 1;
  });
  return nn({}, t, {
    axisDelta: t.axisDelta.map(function(r, i) {
      return r * n[i];
    })
  });
}
var Fa = 700, pp = function(e) {
  return nn({}, e, {
    axisDelta: e.axisDelta.map(function(n) {
      return sp(n, -Fa, Fa);
    })
  });
}, Co = process.env.NODE_ENV !== "production", mp = 0.6, gp = 0.96, yp = 2, za = 5, Ba = /* @__PURE__ */ Pn({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), bp = 400;
function Va() {
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
    willEndTimeout: bp
  };
}
function vp(t) {
  t === void 0 && (t = {});
  var e = ap(), n = e.on, r = e.off, i = e.dispatch, o = Ba, s = Va(), a, c = !1, l, u = function(_) {
    Array.isArray(_) ? _.forEach(function(D) {
      return p(D);
    }) : p(_);
  }, d = function(_) {
    return _ === void 0 && (_ = {}), Object.values(_).some(function(D) {
      return D == null;
    }) ? (Co && console.error("updateOptions ignored! undefined & null options not allowed"), o) : o = Pn(nn({}, Ba, o, _));
  }, f = function(_) {
    var D = nn({
      event: a,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: s.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: s.axisVelocity,
      axisMovement: s.axisMovement,
      get axisMovementProjection() {
        return ko(D.axisMovement, D.axisVelocity.map(function($) {
          return rp($);
        }));
      }
    }, _);
    i("wheel", nn({}, D, {
      previous: l
    })), l = D;
  }, h = function(_, D) {
    var $ = o, z = $.preventWheelAction, B = D[0], L = D[1], V = D[2];
    if (typeof z == "boolean") return z;
    switch (z) {
      case "x":
        return Math.abs(B) >= _;
      case "y":
        return Math.abs(L) >= _;
      case "z":
        return Math.abs(V) >= _;
      default:
        return Co && console.warn("unsupported preventWheelAction value: " + z, "warn"), !1;
    }
  }, p = function(_) {
    var D = pp(hp(dp(_), o.reverseSign)), $ = D.axisDelta, z = D.timeStamp, B = ja($);
    if (_.preventDefault && h(B, $) && _.preventDefault(), s.isStarted ? s.isMomentum && B > Math.max(2, s.lastAbsDelta * 2) && (E(!0), O()) : O(), B === 0 && Object.is && Object.is(_.deltaX, -0)) {
      c = !0;
      return;
    }
    a = _, s.axisMovement = ko(s.axisMovement, $), s.lastAbsDelta = B, s.scrollPointsToMerge.push({
      axisDelta: $,
      timeStamp: z
    }), m(), f({
      axisDelta: $,
      isStart: !s.isStartPublished
    }), s.isStartPublished = !0, x();
  }, m = function() {
    s.scrollPointsToMerge.length === yp ? (s.scrollPoints.unshift({
      axisDeltaSum: s.scrollPointsToMerge.map(function(_) {
        return _.axisDelta;
      }).reduce(ko),
      timeStamp: op(s.scrollPointsToMerge.map(function(_) {
        return _.timeStamp;
      }))
    }), b(), s.scrollPointsToMerge.length = 0, s.scrollPoints.length = 1, s.isMomentum || S()) : s.isStartPublished || y();
  }, y = function() {
    s.axisVelocity = ip(s.scrollPointsToMerge).axisDelta.map(function(_) {
      return _ / s.willEndTimeout;
    });
  }, b = function() {
    var _ = s.scrollPoints, D = _[0], $ = _[1];
    if (!(!$ || !D)) {
      var z = D.timeStamp - $.timeStamp;
      if (z <= 0) {
        Co && console.warn("invalid deltaTime");
        return;
      }
      var B = D.axisDeltaSum.map(function(V) {
        return V / z;
      }), L = B.map(function(V, se) {
        return V / (s.axisVelocity[se] || 1);
      });
      s.axisVelocity = B, s.accelerationFactors.push(L), v(z);
    }
  }, v = function(_) {
    var D = Math.ceil(_ / 10) * 10 * 1.2;
    s.isMomentum || (D = Math.max(100, D * 2)), s.willEndTimeout = Math.min(1e3, Math.round(D));
  }, w = function(_) {
    return _ === 0 ? !0 : _ <= gp && _ >= mp;
  }, S = function() {
    if (s.accelerationFactors.length >= za) {
      if (c && (c = !1, ja(s.axisVelocity) >= 0.2)) {
        k();
        return;
      }
      var _ = s.accelerationFactors.slice(za * -1), D = _.every(function($) {
        var z = !!$.reduce(function(L, V) {
          return L && L < 1 && L === V ? 1 : 0;
        }), B = $.filter(w).length === $.length;
        return z || B;
      });
      D && k(), s.accelerationFactors = _;
    }
  }, k = function() {
    s.isMomentum = !0;
  }, O = function() {
    s = Va(), s.isStarted = !0, s.startTime = Date.now(), l = void 0, c = !1;
  }, x = /* @__PURE__ */ (function() {
    var P;
    return function() {
      clearTimeout(P), P = setTimeout(E, s.willEndTimeout);
    };
  })(), E = function(_) {
    _ === void 0 && (_ = !1), s.isStarted && (s.isMomentum && _ ? f({
      isEnding: !0,
      isMomentumCancel: !0
    }) : f({
      isEnding: !0
    }), s.isMomentum = !1, s.isStarted = !1);
  }, N = lp(u), I = N.observe, M = N.unobserve, T = N.disconnect;
  return d(t), Pn({
    on: n,
    off: r,
    observe: I,
    unobserve: M,
    disconnect: T,
    feedWheel: u,
    updateOptions: d
  });
}
var wp = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
Ks.globalOptions = void 0;
var xp = process.env.NODE_ENV !== "production";
function Ks(t) {
  t === void 0 && (t = {});
  var e, n = function() {
  };
  function r(o, s) {
    var a, c, l = s.mergeOptions, u = s.optionsAtMedia, d = l(wp, Ks.globalOptions), f = l(d, t);
    e = u(f);
    var h = o.internalEngine(), p = (a = e.target) != null ? a : o.containerNode().parentNode, m = (c = e.forceWheelAxis) != null ? c : h.options.axis, y = vp({
      preventWheelAction: m,
      reverseSign: [!0, !0, !1]
    }), b = y.observe(p), v = y.on("wheel", T), w = !1, S;
    function k(P) {
      try {
        S = new MouseEvent("mousedown", P.event), M(S);
      } catch {
        return xp && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
      }
      w = !0, x(), e.wheelDraggingClass && p.classList.add(e.wheelDraggingClass);
    }
    function O(P) {
      w = !1, M(I("mouseup", P)), E(), e.wheelDraggingClass && p.classList.remove(e.wheelDraggingClass);
    }
    function x() {
      document.documentElement.addEventListener("mousemove", N, !0), document.documentElement.addEventListener("mouseup", N, !0), document.documentElement.addEventListener("mousedown", N, !0);
    }
    function E() {
      document.documentElement.removeEventListener("mousemove", N, !0), document.documentElement.removeEventListener("mouseup", N, !0), document.documentElement.removeEventListener("mousedown", N, !0);
    }
    function N(P) {
      w && P.isTrusted && P.stopImmediatePropagation();
    }
    function I(P, _) {
      var D, $;
      if (m === h.options.axis) {
        var z = _.axisMovement;
        D = z[0], $ = z[1];
      } else {
        var B = _.axisMovement;
        $ = B[0], D = B[1];
      }
      if (!h.options.skipSnaps && !h.options.dragFree) {
        var L = h.containerRect.width, V = h.containerRect.height;
        D = D < 0 ? Math.max(D, -L) : Math.min(D, L), $ = $ < 0 ? Math.max($, -V) : Math.min($, V);
      }
      return new MouseEvent(P, {
        clientX: S.clientX + D,
        clientY: S.clientY + $,
        screenX: S.screenX + D,
        screenY: S.screenY + $,
        movementX: D,
        movementY: $,
        button: 0,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      });
    }
    function M(P) {
      o.containerNode().dispatchEvent(P);
    }
    function T(P) {
      var _ = P.axisDelta, D = _[0], $ = _[1], z = m === "x" ? D : $, B = m === "x" ? $ : D, L = P.isMomentum && P.previous && !P.previous.isMomentum, V = P.isEnding && !P.isMomentum || L, se = Math.abs(z) > Math.abs(B);
      se && !w && !P.isMomentum && k(P), w && (V ? O(P) : M(I("mousemove", P)));
    }
    n = function() {
      b(), v(), E();
    };
  }
  var i = {
    name: "wheelGestures",
    options: t,
    init: r,
    destroy: function() {
      return n();
    }
  };
  return i;
}
function Sp(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Ha(t) {
  return Sp(t) || Array.isArray(t);
}
function kp() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Gs(t, e) {
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  const i = JSON.stringify(Object.keys(t.breakpoints || {})), o = JSON.stringify(Object.keys(e.breakpoints || {}));
  return i !== o ? !1 : n.every((s) => {
    const a = t[s], c = e[s];
    return typeof a == "function" ? `${a}` == `${c}` : !Ha(a) || !Ha(c) ? a === c : Gs(a, c);
  });
}
function Wa(t) {
  return t.concat().sort((e, n) => e.name > n.name ? 1 : -1).map((e) => e.options);
}
function Ap(t, e) {
  if (t.length !== e.length) return !1;
  const n = Wa(t), r = Wa(e);
  return n.every((i, o) => {
    const s = r[o];
    return Gs(i, s);
  });
}
function Ys(t) {
  return typeof t == "number";
}
function Wo(t) {
  return typeof t == "string";
}
function Qi(t) {
  return typeof t == "boolean";
}
function Ua(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ee(t) {
  return Math.abs(t);
}
function qs(t) {
  return Math.sign(t);
}
function ur(t, e) {
  return ee(t - e);
}
function Cp(t, e) {
  if (t === 0 || e === 0 || ee(t) <= ee(e)) return 0;
  const n = ur(ee(t), ee(e));
  return ee(n / t);
}
function Ep(t) {
  return Math.round(t * 100) / 100;
}
function br(t) {
  return vr(t).map(Number);
}
function ot(t) {
  return t[Fr(t)];
}
function Fr(t) {
  return Math.max(0, t.length - 1);
}
function Xs(t, e) {
  return e === Fr(t);
}
function Ka(t, e = 0) {
  return Array.from(Array(t), (n, r) => e + r);
}
function vr(t) {
  return Object.keys(t);
}
function qc(t, e) {
  return [t, e].reduce((n, r) => (vr(r).forEach((i) => {
    const o = n[i], s = r[i], a = Ua(o) && Ua(s);
    n[i] = a ? qc(o, s) : s;
  }), n), {});
}
function Uo(t, e) {
  return typeof e.MouseEvent < "u" && t instanceof e.MouseEvent;
}
function Op(t, e) {
  const n = {
    start: r,
    center: i,
    end: o
  };
  function r() {
    return 0;
  }
  function i(c) {
    return o(c) / 2;
  }
  function o(c) {
    return e - c;
  }
  function s(c, l) {
    return Wo(t) ? n[t](c) : t(e, c, l);
  }
  return {
    measure: s
  };
}
function wr() {
  let t = [];
  function e(i, o, s, a = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in i)
      i.addEventListener(o, s, a), c = () => i.removeEventListener(o, s, a);
    else {
      const l = i;
      l.addListener(s), c = () => l.removeListener(s);
    }
    return t.push(c), r;
  }
  function n() {
    t = t.filter((i) => i());
  }
  const r = {
    add: e,
    clear: n
  };
  return r;
}
function _p(t, e, n, r) {
  const i = wr(), o = 1e3 / 60;
  let s = null, a = 0, c = 0;
  function l() {
    i.add(t, "visibilitychange", () => {
      t.hidden && p();
    });
  }
  function u() {
    h(), i.clear();
  }
  function d(y) {
    if (!c) return;
    s || (s = y, n(), n());
    const b = y - s;
    for (s = y, a += b; a >= o; )
      n(), a -= o;
    const v = a / o;
    r(v), c && (c = e.requestAnimationFrame(d));
  }
  function f() {
    c || (c = e.requestAnimationFrame(d));
  }
  function h() {
    e.cancelAnimationFrame(c), s = null, a = 0, c = 0;
  }
  function p() {
    s = null, a = 0;
  }
  return {
    init: l,
    destroy: u,
    start: f,
    stop: h,
    update: n,
    render: r
  };
}
function Tp(t, e) {
  const n = e === "rtl", r = t === "y", i = r ? "y" : "x", o = r ? "x" : "y", s = !r && n ? -1 : 1, a = u(), c = d();
  function l(p) {
    const {
      height: m,
      width: y
    } = p;
    return r ? m : y;
  }
  function u() {
    return r ? "top" : n ? "right" : "left";
  }
  function d() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function f(p) {
    return p * s;
  }
  return {
    scroll: i,
    cross: o,
    startEdge: a,
    endEdge: c,
    measureSize: l,
    direction: f
  };
}
function sn(t = 0, e = 0) {
  const n = ee(t - e);
  function r(l) {
    return l < t;
  }
  function i(l) {
    return l > e;
  }
  function o(l) {
    return r(l) || i(l);
  }
  function s(l) {
    return o(l) ? r(l) ? t : e : l;
  }
  function a(l) {
    return n ? l - n * Math.ceil((l - e) / n) : l;
  }
  return {
    length: n,
    max: e,
    min: t,
    constrain: s,
    reachedAny: o,
    reachedMax: i,
    reachedMin: r,
    removeOffset: a
  };
}
function Xc(t, e, n) {
  const {
    constrain: r
  } = sn(0, t), i = t + 1;
  let o = s(e);
  function s(f) {
    return n ? ee((i + f) % i) : r(f);
  }
  function a() {
    return o;
  }
  function c(f) {
    return o = s(f), d;
  }
  function l(f) {
    return u().set(a() + f);
  }
  function u() {
    return Xc(t, a(), n);
  }
  const d = {
    get: a,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function Np(t, e, n, r, i, o, s, a, c, l, u, d, f, h, p, m, y, b, v) {
  const {
    cross: w,
    direction: S
  } = t, k = ["INPUT", "SELECT", "TEXTAREA"], O = {
    passive: !1
  }, x = wr(), E = wr(), N = sn(50, 225).constrain(h.measure(20)), I = {
    mouse: 300,
    touch: 400
  }, M = {
    mouse: 500,
    touch: 600
  }, T = p ? 43 : 25;
  let P = !1, _ = 0, D = 0, $ = !1, z = !1, B = !1, L = !1;
  function V(R) {
    if (!v) return;
    function q(Se) {
      (Qi(v) || v(R, Se)) && tr(Se);
    }
    const ae = e;
    x.add(ae, "dragstart", (Se) => Se.preventDefault(), O).add(ae, "touchmove", () => {
    }, O).add(ae, "touchend", () => {
    }).add(ae, "touchstart", q).add(ae, "mousedown", q).add(ae, "touchcancel", xe).add(ae, "contextmenu", xe).add(ae, "click", vt, !0);
  }
  function se() {
    x.clear(), E.clear();
  }
  function He() {
    const R = L ? n : e;
    E.add(R, "touchmove", je, O).add(R, "touchend", xe).add(R, "mousemove", je, O).add(R, "mouseup", xe);
  }
  function We(R) {
    const q = R.nodeName || "";
    return k.includes(q);
  }
  function bt() {
    return (p ? M : I)[L ? "mouse" : "touch"];
  }
  function er(R, q) {
    const ae = d.add(qs(R) * -1), Se = u.byDistance(R, !p).distance;
    return p || ee(R) < N ? Se : y && q ? Se * 0.5 : u.byIndex(ae.get(), 0).distance;
  }
  function tr(R) {
    const q = Uo(R, r);
    L = q, B = p && q && !R.buttons && P, P = ur(i.get(), s.get()) >= 2, !(q && R.button !== 0) && (We(R.target) || ($ = !0, o.pointerDown(R), l.useFriction(0).useDuration(0), i.set(s), He(), _ = o.readPoint(R), D = o.readPoint(R, w), f.emit("pointerDown")));
  }
  function je(R) {
    if (!Uo(R, r) && R.touches.length >= 2) return xe(R);
    const ae = o.readPoint(R), Se = o.readPoint(R, w), ft = ur(ae, _), wt = ur(Se, D);
    if (!z && !L && (!R.cancelable || (z = ft > wt, !z)))
      return xe(R);
    const Gt = o.pointerMove(R);
    ft > m && (B = !0), l.useFriction(0.3).useDuration(0.75), a.start(), i.add(S(Gt)), R.preventDefault();
  }
  function xe(R) {
    const ae = u.byDistance(0, !1).index !== d.get(), Se = o.pointerUp(R) * bt(), ft = er(S(Se), ae), wt = Cp(Se, ft), Gt = T - 10 * wt, Rt = b + wt / 50;
    z = !1, $ = !1, E.clear(), l.useDuration(Gt).useFriction(Rt), c.distance(ft, !p), L = !1, f.emit("pointerUp");
  }
  function vt(R) {
    B && (R.stopPropagation(), R.preventDefault(), B = !1);
  }
  function Ue() {
    return $;
  }
  return {
    init: V,
    destroy: se,
    pointerDown: Ue
  };
}
function Pp(t, e) {
  let r, i;
  function o(d) {
    return d.timeStamp;
  }
  function s(d, f) {
    const p = `client${(f || t.scroll) === "x" ? "X" : "Y"}`;
    return (Uo(d, e) ? d : d.touches[0])[p];
  }
  function a(d) {
    return r = d, i = d, s(d);
  }
  function c(d) {
    const f = s(d) - s(i), h = o(d) - o(r) > 170;
    return i = d, h && (r = d), f;
  }
  function l(d) {
    if (!r || !i) return 0;
    const f = s(i) - s(r), h = o(d) - o(r), p = o(d) - o(i) > 170, m = f / h;
    return h && !p && ee(m) > 0.1 ? m : 0;
  }
  return {
    pointerDown: a,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function Dp() {
  function t(n) {
    const {
      offsetTop: r,
      offsetLeft: i,
      offsetWidth: o,
      offsetHeight: s
    } = n;
    return {
      top: r,
      right: i + o,
      bottom: r + s,
      left: i,
      width: o,
      height: s
    };
  }
  return {
    measure: t
  };
}
function Mp(t) {
  function e(r) {
    return t * (r / 100);
  }
  return {
    measure: e
  };
}
function Ip(t, e, n, r, i, o, s) {
  const a = [t].concat(r);
  let c, l, u = [], d = !1;
  function f(y) {
    return i.measureSize(s.measure(y));
  }
  function h(y) {
    if (!o) return;
    l = f(t), u = r.map(f);
    function b(v) {
      for (const w of v) {
        if (d) return;
        const S = w.target === t, k = r.indexOf(w.target), O = S ? l : u[k], x = f(S ? t : r[k]);
        if (ee(x - O) >= 0.5) {
          y.reInit(), e.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((v) => {
      (Qi(o) || o(y, v)) && b(v);
    }), n.requestAnimationFrame(() => {
      a.forEach((v) => c.observe(v));
    });
  }
  function p() {
    d = !0, c && c.disconnect();
  }
  return {
    init: h,
    destroy: p
  };
}
function Lp(t, e, n, r, i, o) {
  let s = 0, a = 0, c = i, l = o, u = t.get(), d = 0;
  function f() {
    const O = r.get() - t.get(), x = !c;
    let E = 0;
    return x ? (s = 0, n.set(r), t.set(r), E = O) : (n.set(t), s += O / c, s *= l, u += s, t.add(s), E = u - d), a = qs(E), d = u, k;
  }
  function h() {
    const O = r.get() - e.get();
    return ee(O) < 1e-3;
  }
  function p() {
    return c;
  }
  function m() {
    return a;
  }
  function y() {
    return s;
  }
  function b() {
    return w(i);
  }
  function v() {
    return S(o);
  }
  function w(O) {
    return c = O, k;
  }
  function S(O) {
    return l = O, k;
  }
  const k = {
    direction: m,
    duration: p,
    velocity: y,
    seek: f,
    settled: h,
    useBaseFriction: v,
    useBaseDuration: b,
    useFriction: S,
    useDuration: w
  };
  return k;
}
function Rp(t, e, n, r, i) {
  const o = i.measure(10), s = i.measure(50), a = sn(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !t.reachedAny(n.get()) || !t.reachedAny(e.get()));
  }
  function u(h) {
    if (!l()) return;
    const p = t.reachedMin(e.get()) ? "min" : "max", m = ee(t[p] - e.get()), y = n.get() - e.get(), b = a.constrain(m / s);
    n.subtract(y * b), !h && ee(y) < o && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(h) {
    c = !h;
  }
  return {
    shouldConstrain: l,
    constrain: u,
    toggleActive: d
  };
}
function $p(t, e, n, r, i) {
  const o = sn(-e + t, 0), s = d(), a = u(), c = f();
  function l(p, m) {
    return ur(p, m) <= 1;
  }
  function u() {
    const p = s[0], m = ot(s), y = s.lastIndexOf(p), b = s.indexOf(m) + 1;
    return sn(y, b);
  }
  function d() {
    return n.map((p, m) => {
      const {
        min: y,
        max: b
      } = o, v = o.constrain(p), w = !m, S = Xs(n, m);
      return w ? b : S || l(y, v) ? y : l(b, v) ? b : v;
    }).map((p) => parseFloat(p.toFixed(3)));
  }
  function f() {
    if (e <= t + i) return [o.max];
    if (r === "keepSnaps") return s;
    const {
      min: p,
      max: m
    } = a;
    return s.slice(p, m);
  }
  return {
    snapsContained: c,
    scrollContainLimit: a
  };
}
function jp(t, e, n) {
  const r = e[0], i = n ? r - t : ot(e);
  return {
    limit: sn(i, r)
  };
}
function Fp(t, e, n, r) {
  const o = e.min + 0.1, s = e.max + 0.1, {
    reachedMin: a,
    reachedMax: c
  } = sn(o, s);
  function l(f) {
    return f === 1 ? c(n.get()) : f === -1 ? a(n.get()) : !1;
  }
  function u(f) {
    if (!l(f)) return;
    const h = t * (f * -1);
    r.forEach((p) => p.add(h));
  }
  return {
    loop: u
  };
}
function zp(t) {
  const {
    max: e,
    length: n
  } = t;
  function r(o) {
    const s = o - e;
    return n ? s / -n : 0;
  }
  return {
    get: r
  };
}
function Bp(t, e, n, r, i) {
  const {
    startEdge: o,
    endEdge: s
  } = t, {
    groupSlides: a
  } = i, c = d().map(e.measure), l = f(), u = h();
  function d() {
    return a(r).map((m) => ot(m)[s] - m[0][o]).map(ee);
  }
  function f() {
    return r.map((m) => n[o] - m[o]).map((m) => -ee(m));
  }
  function h() {
    return a(l).map((m) => m[0]).map((m, y) => m + c[y]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function Vp(t, e, n, r, i, o) {
  const {
    groupSlides: s
  } = i, {
    min: a,
    max: c
  } = r, l = u();
  function u() {
    const f = s(o), h = !t || e === "keepSnaps";
    return n.length === 1 ? [o] : h ? f : f.slice(a, c).map((p, m, y) => {
      const b = !m, v = Xs(y, m);
      if (b) {
        const w = ot(y[0]) + 1;
        return Ka(w);
      }
      if (v) {
        const w = Fr(o) - ot(y)[0] + 1;
        return Ka(w, ot(y)[0]);
      }
      return p;
    });
  }
  return {
    slideRegistry: l
  };
}
function Hp(t, e, n, r, i) {
  const {
    reachedAny: o,
    removeOffset: s,
    constrain: a
  } = r;
  function c(p) {
    return p.concat().sort((m, y) => ee(m) - ee(y))[0];
  }
  function l(p) {
    const m = t ? s(p) : a(p), y = e.map((v, w) => ({
      diff: u(v - m, 0),
      index: w
    })).sort((v, w) => ee(v.diff) - ee(w.diff)), {
      index: b
    } = y[0];
    return {
      index: b,
      distance: m
    };
  }
  function u(p, m) {
    const y = [p, p + n, p - n];
    if (!t) return p;
    if (!m) return c(y);
    const b = y.filter((v) => qs(v) === m);
    return b.length ? c(b) : ot(y) - n;
  }
  function d(p, m) {
    const y = e[p] - i.get(), b = u(y, m);
    return {
      index: p,
      distance: b
    };
  }
  function f(p, m) {
    const y = i.get() + p, {
      index: b,
      distance: v
    } = l(y), w = !t && o(y);
    if (!m || w) return {
      index: b,
      distance: p
    };
    const S = e[b] - v, k = p + u(S, 0);
    return {
      index: b,
      distance: k
    };
  }
  return {
    byDistance: f,
    byIndex: d,
    shortcut: u
  };
}
function Wp(t, e, n, r, i, o, s) {
  function a(d) {
    const f = d.distance, h = d.index !== e.get();
    o.add(f), f && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), h && (n.set(e.get()), e.set(d.index), s.emit("select"));
  }
  function c(d, f) {
    const h = i.byDistance(d, f);
    a(h);
  }
  function l(d, f) {
    const h = e.clone().set(d), p = i.byIndex(h.get(), f);
    a(p);
  }
  return {
    distance: c,
    index: l
  };
}
function Up(t, e, n, r, i, o, s, a) {
  const c = {
    passive: !0,
    capture: !0
  };
  let l = 0;
  function u(h) {
    if (!a) return;
    function p(m) {
      if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
      s.emit("slideFocusStart"), t.scrollLeft = 0;
      const v = n.findIndex((w) => w.includes(m));
      Ys(v) && (i.useDuration(0), r.index(v, 0), s.emit("slideFocus"));
    }
    o.add(document, "keydown", d, !1), e.forEach((m, y) => {
      o.add(m, "focus", (b) => {
        (Qi(a) || a(h, b)) && p(y);
      }, c);
    });
  }
  function d(h) {
    h.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: u
  };
}
function cr(t) {
  let e = t;
  function n() {
    return e;
  }
  function r(c) {
    e = s(c);
  }
  function i(c) {
    e += s(c);
  }
  function o(c) {
    e -= s(c);
  }
  function s(c) {
    return Ys(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: i,
    subtract: o
  };
}
function Jc(t, e) {
  const n = t.scroll === "x" ? s : a, r = e.style;
  let i = null, o = !1;
  function s(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function a(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function c(f) {
    if (o) return;
    const h = Ep(t.direction(f));
    h !== i && (r.transform = n(h), i = h);
  }
  function l(f) {
    o = !f;
  }
  function u() {
    o || (r.transform = "", e.getAttribute("style") || e.removeAttribute("style"));
  }
  return {
    clear: u,
    to: c,
    toggleActive: l
  };
}
function Kp(t, e, n, r, i, o, s, a, c) {
  const u = br(i), d = br(i).reverse(), f = b().concat(v());
  function h(x, E) {
    return x.reduce((N, I) => N - i[I], E);
  }
  function p(x, E) {
    return x.reduce((N, I) => h(N, E) > 0 ? N.concat([I]) : N, []);
  }
  function m(x) {
    return o.map((E, N) => ({
      start: E - r[N] + 0.5 + x,
      end: E + e - 0.5 + x
    }));
  }
  function y(x, E, N) {
    const I = m(E);
    return x.map((M) => {
      const T = N ? 0 : -n, P = N ? n : 0, _ = N ? "end" : "start", D = I[M][_];
      return {
        index: M,
        loopPoint: D,
        slideLocation: cr(-1),
        translate: Jc(t, c[M]),
        target: () => a.get() > D ? T : P
      };
    });
  }
  function b() {
    const x = s[0], E = p(d, x);
    return y(E, n, !1);
  }
  function v() {
    const x = e - s[0] - 1, E = p(u, x);
    return y(E, -n, !0);
  }
  function w() {
    return f.every(({
      index: x
    }) => {
      const E = u.filter((N) => N !== x);
      return h(E, e) <= 0.1;
    });
  }
  function S() {
    f.forEach((x) => {
      const {
        target: E,
        translate: N,
        slideLocation: I
      } = x, M = E();
      M !== I.get() && (N.to(M), I.set(M));
    });
  }
  function k() {
    f.forEach((x) => x.translate.clear());
  }
  return {
    canLoop: w,
    clear: k,
    loop: S,
    loopPoints: f
  };
}
function Gp(t, e, n) {
  let r, i = !1;
  function o(c) {
    if (!n) return;
    function l(u) {
      for (const d of u)
        if (d.type === "childList") {
          c.reInit(), e.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((u) => {
      i || (Qi(n) || n(c, u)) && l(u);
    }), r.observe(t, {
      childList: !0
    });
  }
  function s() {
    r && r.disconnect(), i = !0;
  }
  return {
    init: o,
    destroy: s
  };
}
function Yp(t, e, n, r) {
  const i = {};
  let o = null, s = null, a, c = !1;
  function l() {
    a = new IntersectionObserver((p) => {
      c || (p.forEach((m) => {
        const y = e.indexOf(m.target);
        i[y] = m;
      }), o = null, s = null, n.emit("slidesInView"));
    }, {
      root: t.parentElement,
      threshold: r
    }), e.forEach((p) => a.observe(p));
  }
  function u() {
    a && a.disconnect(), c = !0;
  }
  function d(p) {
    return vr(i).reduce((m, y) => {
      const b = parseInt(y), {
        isIntersecting: v
      } = i[b];
      return (p && v || !p && !v) && m.push(b), m;
    }, []);
  }
  function f(p = !0) {
    if (p && o) return o;
    if (!p && s) return s;
    const m = d(p);
    return p && (o = m), p || (s = m), m;
  }
  return {
    init: l,
    destroy: u,
    get: f
  };
}
function qp(t, e, n, r, i, o) {
  const {
    measureSize: s,
    startEdge: a,
    endEdge: c
  } = t, l = n[0] && i, u = p(), d = m(), f = n.map(s), h = y();
  function p() {
    if (!l) return 0;
    const v = n[0];
    return ee(e[a] - v[a]);
  }
  function m() {
    if (!l) return 0;
    const v = o.getComputedStyle(ot(r));
    return parseFloat(v.getPropertyValue(`margin-${c}`));
  }
  function y() {
    return n.map((v, w, S) => {
      const k = !w, O = Xs(S, w);
      return k ? f[w] + u : O ? f[w] + d : S[w + 1][a] - v[a];
    }).map(ee);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: h,
    startGap: u,
    endGap: d
  };
}
function Xp(t, e, n, r, i, o, s, a, c) {
  const {
    startEdge: l,
    endEdge: u,
    direction: d
  } = t, f = Ys(n);
  function h(b, v) {
    return br(b).filter((w) => w % v === 0).map((w) => b.slice(w, w + v));
  }
  function p(b) {
    return b.length ? br(b).reduce((v, w, S) => {
      const k = ot(v) || 0, O = k === 0, x = w === Fr(b), E = i[l] - o[k][l], N = i[l] - o[w][u], I = !r && O ? d(s) : 0, M = !r && x ? d(a) : 0, T = ee(N - M - (E + I));
      return S && T > e + c && v.push(w), x && v.push(b.length), v;
    }, []).map((v, w, S) => {
      const k = Math.max(S[w - 1] || 0);
      return b.slice(k, v);
    }) : [];
  }
  function m(b) {
    return f ? h(b, n) : p(b);
  }
  return {
    groupSlides: m
  };
}
function Jp(t, e, n, r, i, o, s) {
  const {
    align: a,
    axis: c,
    direction: l,
    startIndex: u,
    loop: d,
    duration: f,
    dragFree: h,
    dragThreshold: p,
    inViewThreshold: m,
    slidesToScroll: y,
    skipSnaps: b,
    containScroll: v,
    watchResize: w,
    watchSlides: S,
    watchDrag: k,
    watchFocus: O
  } = o, x = 2, E = Dp(), N = E.measure(e), I = n.map(E.measure), M = Tp(c, l), T = M.measureSize(N), P = Mp(T), _ = Op(a, T), D = !d && !!v, $ = d || !!v, {
    slideSizes: z,
    slideSizesWithGaps: B,
    startGap: L,
    endGap: V
  } = qp(M, N, I, n, $, i), se = Xp(M, T, y, d, N, I, L, V, x), {
    snaps: He,
    snapsAligned: We
  } = Bp(M, _, N, I, se), bt = -ot(He) + ot(B), {
    snapsContained: er,
    scrollContainLimit: tr
  } = $p(T, bt, We, v, x), je = D ? er : We, {
    limit: xe
  } = jp(bt, je, d), vt = Xc(Fr(je), u, d), Ue = vt.clone(), Q = br(n), R = ({
    dragHandler: vn,
    scrollBody: wo,
    scrollBounds: xo,
    options: {
      loop: Jr
    }
  }) => {
    Jr || xo.constrain(vn.pointerDown()), wo.seek();
  }, q = ({
    scrollBody: vn,
    translate: wo,
    location: xo,
    offsetLocation: Jr,
    previousLocation: ef,
    scrollLooper: tf,
    slideLooper: nf,
    dragHandler: rf,
    animation: of,
    eventHandler: Aa,
    scrollBounds: sf,
    options: {
      loop: Ca
    }
  }, Ea) => {
    const Oa = vn.settled(), af = !sf.shouldConstrain(), _a = Ca ? Oa : Oa && af, Ta = _a && !rf.pointerDown();
    Ta && of.stop();
    const lf = xo.get() * Ea + ef.get() * (1 - Ea);
    Jr.set(lf), Ca && (tf.loop(vn.direction()), nf.loop()), wo.to(Jr.get()), Ta && Aa.emit("settle"), _a || Aa.emit("scroll");
  }, ae = _p(r, i, () => R(vo), (vn) => q(vo, vn)), Se = 0.68, ft = je[vt.get()], wt = cr(ft), Gt = cr(ft), Rt = cr(ft), Yt = cr(ft), nr = Lp(wt, Rt, Gt, Yt, f, Se), yo = Hp(d, je, bt, xe, Yt), bo = Wp(ae, vt, Ue, nr, yo, Yt, s), xa = zp(xe), Sa = wr(), Zd = Yp(e, n, s, m), {
    slideRegistry: ka
  } = Vp(D, v, je, tr, se, Q), Qd = Up(t, n, ka, bo, nr, Sa, s, O), vo = {
    ownerDocument: r,
    ownerWindow: i,
    eventHandler: s,
    containerRect: N,
    slideRects: I,
    animation: ae,
    axis: M,
    dragHandler: Np(M, t, r, i, Yt, Pp(M, i), wt, ae, bo, nr, yo, vt, s, P, h, p, b, Se, k),
    eventStore: Sa,
    percentOfView: P,
    index: vt,
    indexPrevious: Ue,
    limit: xe,
    location: wt,
    offsetLocation: Rt,
    previousLocation: Gt,
    options: o,
    resizeHandler: Ip(e, s, i, n, M, w, E),
    scrollBody: nr,
    scrollBounds: Rp(xe, Rt, Yt, nr, P),
    scrollLooper: Fp(bt, xe, Rt, [wt, Rt, Gt, Yt]),
    scrollProgress: xa,
    scrollSnapList: je.map(xa.get),
    scrollSnaps: je,
    scrollTarget: yo,
    scrollTo: bo,
    slideLooper: Kp(M, T, bt, z, B, He, je, Rt, n),
    slideFocus: Qd,
    slidesHandler: Gp(e, s, S),
    slidesInView: Zd,
    slideIndexes: Q,
    slideRegistry: ka,
    slidesToScroll: se,
    target: Yt,
    translate: Jc(M, e)
  };
  return vo;
}
function Zp() {
  let t = {}, e;
  function n(l) {
    e = l;
  }
  function r(l) {
    return t[l] || [];
  }
  function i(l) {
    return r(l).forEach((u) => u(e, l)), c;
  }
  function o(l, u) {
    return t[l] = r(l).concat([u]), c;
  }
  function s(l, u) {
    return t[l] = r(l).filter((d) => d !== u), c;
  }
  function a() {
    t = {};
  }
  const c = {
    init: n,
    emit: i,
    off: s,
    on: o,
    clear: a
  };
  return c;
}
const Qp = {
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
function em(t) {
  function e(o, s) {
    return qc(o, s || {});
  }
  function n(o) {
    const s = o.breakpoints || {}, a = vr(s).filter((c) => t.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => e(c, l), {});
    return e(o, a);
  }
  function r(o) {
    return o.map((s) => vr(s.breakpoints || {})).reduce((s, a) => s.concat(a), []).map(t.matchMedia);
  }
  return {
    mergeOptions: e,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function tm(t) {
  let e = [];
  function n(o, s) {
    return e = s.filter(({
      options: a
    }) => t.optionsAtMedia(a).active !== !1), e.forEach((a) => a.init(o, t)), s.reduce((a, c) => Object.assign(a, {
      [c.name]: c
    }), {});
  }
  function r() {
    e = e.filter((o) => o.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function Ci(t, e, n) {
  const r = t.ownerDocument, i = r.defaultView, o = em(i), s = tm(o), a = wr(), c = Zp(), {
    mergeOptions: l,
    optionsAtMedia: u,
    optionsMediaQueries: d
  } = o, {
    on: f,
    off: h,
    emit: p
  } = c, m = M;
  let y = !1, b, v = l(Qp, Ci.globalOptions), w = l(v), S = [], k, O, x;
  function E() {
    const {
      container: Q,
      slides: R
    } = w;
    O = (Wo(Q) ? t.querySelector(Q) : Q) || t.children[0];
    const ae = Wo(R) ? O.querySelectorAll(R) : R;
    x = [].slice.call(ae || O.children);
  }
  function N(Q) {
    const R = Jp(t, O, x, r, i, Q, c);
    if (Q.loop && !R.slideLooper.canLoop()) {
      const q = Object.assign({}, Q, {
        loop: !1
      });
      return N(q);
    }
    return R;
  }
  function I(Q, R) {
    y || (v = l(v, Q), w = u(v), S = R || S, E(), b = N(w), d([v, ...S.map(({
      options: q
    }) => q)]).forEach((q) => a.add(q, "change", M)), w.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(Ue), b.eventHandler.init(Ue), b.resizeHandler.init(Ue), b.slidesHandler.init(Ue), b.options.loop && b.slideLooper.loop(), O.offsetParent && x.length && b.dragHandler.init(Ue), k = s.init(Ue, S)));
  }
  function M(Q, R) {
    const q = se();
    T(), I(l({
      startIndex: q
    }, Q), R), c.emit("reInit");
  }
  function T() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), s.destroy(), a.clear();
  }
  function P() {
    y || (y = !0, a.clear(), T(), c.emit("destroy"), c.clear());
  }
  function _(Q, R, q) {
    !w.active || y || (b.scrollBody.useBaseFriction().useDuration(R === !0 ? 0 : w.duration), b.scrollTo.index(Q, q || 0));
  }
  function D(Q) {
    const R = b.index.add(1).get();
    _(R, Q, -1);
  }
  function $(Q) {
    const R = b.index.add(-1).get();
    _(R, Q, 1);
  }
  function z() {
    return b.index.add(1).get() !== se();
  }
  function B() {
    return b.index.add(-1).get() !== se();
  }
  function L() {
    return b.scrollSnapList;
  }
  function V() {
    return b.scrollProgress.get(b.offsetLocation.get());
  }
  function se() {
    return b.index.get();
  }
  function He() {
    return b.indexPrevious.get();
  }
  function We() {
    return b.slidesInView.get();
  }
  function bt() {
    return b.slidesInView.get(!1);
  }
  function er() {
    return k;
  }
  function tr() {
    return b;
  }
  function je() {
    return t;
  }
  function xe() {
    return O;
  }
  function vt() {
    return x;
  }
  const Ue = {
    canScrollNext: z,
    canScrollPrev: B,
    containerNode: xe,
    internalEngine: tr,
    destroy: P,
    off: h,
    on: f,
    emit: p,
    plugins: er,
    previousScrollSnap: He,
    reInit: m,
    rootNode: je,
    scrollNext: D,
    scrollPrev: $,
    scrollProgress: V,
    scrollSnapList: L,
    scrollTo: _,
    selectedScrollSnap: se,
    slideNodes: vt,
    slidesInView: We,
    slidesNotInView: bt
  };
  return I(e, n), setTimeout(() => c.emit("init"), 0), Ue;
}
Ci.globalOptions = void 0;
function Js(t = {}, e = []) {
  const n = Ct(t), r = Ct(e), [i, o] = ue(), [s, a] = ue(), c = Ye(() => {
    i && i.reInit(n.current, r.current);
  }, [i]);
  return it(() => {
    Gs(n.current, t) || (n.current = t, c());
  }, [t, c]), it(() => {
    Ap(r.current, e) || (r.current = e, c());
  }, [e, c]), it(() => {
    if (kp() && s) {
      Ci.globalOptions = Js.globalOptions;
      const l = Ci(s, n.current, r.current);
      return o(l), () => l.destroy();
    } else
      o(void 0);
  }, [s, o]), [a, i];
}
Js.globalOptions = void 0;
const te = 28, Ga = 16, nm = ({ children: t }) => {
  const e = Ct(null), [n, r] = ue(!0), [i, o] = ue(!1);
  mc(() => {
    const u = e.current;
    if (!u) return;
    const d = new ResizeObserver(() => c());
    d.observe(u);
    const f = () => {
      c();
    };
    return u.addEventListener("scroll", f), c(), () => {
      d.disconnect(), u.removeEventListener("scroll", f);
    };
  }, []);
  function s() {
    const u = e.current;
    u && u.scrollBy({
      left: u.clientWidth,
      behavior: "smooth"
    });
  }
  function a() {
    const u = e.current;
    u && u.scrollBy({
      left: -u.clientWidth,
      behavior: "smooth"
    });
  }
  const c = () => {
    if (!e.current) return;
    const { scrollLeft: u, scrollWidth: d, clientWidth: f } = e.current;
    o(u > 0), r(u + f < d);
  };
  let l = "";
  return i && n ? l = `linear-gradient(to right, transparent 0px, transparent ${te}px, black ${2 * te}px, black calc(100% - ${3 * te}px), transparent calc(100% - ${2 * te}px), transparent 100%)` : i && !n ? l = `linear-gradient(to right, transparent 0px, transparent ${te}px, black ${2 * te}px, black 100%)` : !i && n ? l = `linear-gradient(to right, black 0px, black calc(100% - ${3 * te}px), transparent calc(100% - ${2 * te}px), transparent 100%)` : l = "none", /* @__PURE__ */ A("div", { className: "relative", children: [
    /* @__PURE__ */ g(
      "div",
      {
        ref: e,
        className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
        style: {
          scrollbarWidth: "none",
          // Firefox
          msOverflowStyle: "none",
          // IE & Edge
          margin: `-${te}px`,
          padding: `${te}px`,
          height: `calc(100% + ${te * 2}px)`,
          width: `calc(100% + ${te * 2}px)`,
          maskImage: l,
          WebkitMaskImage: l,
          scrollSnapType: "x mandatory"
        },
        children: Array.isArray(t) ? t.map((u, d) => /* @__PURE__ */ g(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: te + Ga + "px"
            },
            children: u
          },
          d
        )) : t && /* @__PURE__ */ g(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: te + Ga + "px"
            },
            children: t
          }
        )
      }
    ),
    i && /* @__PURE__ */ g(
      Tn,
      {
        size: "lg",
        compact: !0,
        variant: "outline",
        className: G(
          "absolute opacity-100 transition-all",
          "-left-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: a,
        icon: cf,
        label: "Previous",
        hideLabel: !0
      }
    ),
    n && /* @__PURE__ */ g(
      Tn,
      {
        size: "lg",
        variant: "outline",
        compact: !0,
        className: G(
          "absolute opacity-100 transition-all",
          "-right-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: s,
        icon: uf,
        label: "Next",
        hideLabel: !0
      }
    )
  ] });
}, Zc = U.createContext(null);
function zr() {
  const t = U.useContext(Zc);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const Qc = U.forwardRef(
  ({
    orientation: t = "horizontal",
    opts: e,
    setApi: n,
    plugins: r,
    className: i,
    children: o,
    ...s
  }, a) => {
    const [c, l] = Js(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      r
    ), [u, d] = U.useState(!1), [f, h] = U.useState(!1), p = U.useCallback((v) => {
      v && (d(v.canScrollPrev()), h(v.canScrollNext()));
    }, []), m = U.useCallback(() => {
      l?.scrollPrev();
    }, [l]), y = U.useCallback(() => {
      l?.scrollNext();
    }, [l]), b = U.useCallback(
      (v) => {
        v.key === "ArrowLeft" ? (v.preventDefault(), m()) : v.key === "ArrowRight" && (v.preventDefault(), y());
      },
      [m, y]
    );
    return U.useEffect(() => {
      !l || !n || n(l);
    }, [l, n]), U.useEffect(() => {
      if (l)
        return p(l), l.on("reInit", p), l.on("select", p), () => {
          l?.off("select", p);
        };
    }, [l, p]), /* @__PURE__ */ g(
      Zc.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: e,
          orientation: t || (e?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: m,
          scrollNext: y,
          canScrollPrev: u,
          canScrollNext: f
        },
        children: /* @__PURE__ */ g(
          "div",
          {
            ref: a,
            onKeyDownCapture: b,
            className: G("group/carousel relative", i),
            role: "region",
            "aria-roledescription": "carousel",
            ...s,
            children: o
          }
        )
      }
    );
  }
);
Qc.displayName = "Carousel";
const eu = U.forwardRef(({ className: t, ...e }, n) => {
  const r = `linear-gradient(to right, transparent 0px, transparent ${te / 2}px, black ${te}px, black calc(100% - ${te}px), transparent calc(100% - ${te / 2}px), transparent 100%)`, { carouselRef: i, orientation: o } = zr();
  return /* @__PURE__ */ g(
    "div",
    {
      ref: i,
      className: "overflow-hidden",
      style: {
        scrollbarWidth: "none",
        // For Firefox
        msOverflowStyle: "none",
        // For IE and Edge
        margin: `-${te}px`,
        padding: `${te}px`,
        height: `calc(100% + ${te * 2}px)`,
        width: `calc(100% + ${te * 2}px)`,
        maskImage: r,
        WebkitMaskImage: r
      },
      children: /* @__PURE__ */ g(
        "div",
        {
          ref: n,
          className: G(
            "flex",
            o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            t
          ),
          ...e
        }
      )
    }
  );
});
eu.displayName = "CarouselContent";
const tu = U.forwardRef(({ className: t, ...e }, n) => {
  const { orientation: r } = zr();
  return /* @__PURE__ */ g(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: G(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        t
      ),
      ...e
    }
  );
});
tu.displayName = "CarouselItem";
const nu = U.forwardRef(({ className: t, variant: e = "outline", ...n }, r) => {
  const { orientation: i, scrollPrev: o, canScrollPrev: s } = zr();
  return /* @__PURE__ */ g(
    "div",
    {
      className: G(
        "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
        !s && "opacity-0 group-hover/carousel:opacity-0",
        i === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"
      ),
      children: /* @__PURE__ */ g(
        Tn,
        {
          compact: !0,
          ref: r,
          size: "sm",
          variant: e,
          className: G("absolute opacity-100 transition-all", t),
          disabled: !s,
          onClick: o,
          ...n,
          label: "Previous",
          icon: df,
          hideLabel: !0
        }
      )
    }
  );
});
nu.displayName = "CarouselPrevious";
const ru = U.forwardRef(
  ({ className: t, variant: e = "outline", ...n }, r) => {
    const { orientation: i, scrollNext: o, canScrollNext: s } = zr();
    return /* @__PURE__ */ g(
      "div",
      {
        className: G(
          "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
          !s && "opacity-0 group-hover/carousel:opacity-0",
          i === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"
        ),
        children: /* @__PURE__ */ g(
          Tn,
          {
            ref: r,
            size: "sm",
            variant: e,
            compact: !0,
            className: G("absolute opacity-100 transition-all", t),
            disabled: !s,
            onClick: o,
            ...n,
            label: "Next",
            icon: ff,
            hideLabel: !0
          }
        )
      }
    );
  }
);
ru.displayName = "CarouselNext";
const iu = U.forwardRef(({ ...t }, e) => {
  const { api: n } = zr(), [, r] = U.useState(!1), i = U.useRef(null), o = U.useCallback(() => {
    r((f) => !f);
  }, []);
  U.useEffect(() => {
    if (n)
      return n.on("select", o), n.on("reInit", o), () => {
        n.off("select", o), n.off("reInit", o);
      };
  }, [n, o]);
  const s = n?.scrollSnapList().length || 0, a = n?.selectedScrollSnap() || 0;
  if (U.useEffect(() => {
    if (!i.current) return;
    const f = i.current, h = 16, p = a * h - f.clientWidth / 2 + h / 2;
    f.scrollTo({
      left: p,
      behavior: "smooth"
    });
  }, [a]), U.useEffect(() => {
    const f = i.current;
    if (!f) return;
    const h = (p) => {
      p.preventDefault(), p.stopPropagation();
    };
    return f.addEventListener("wheel", h, { passive: !1 }), f.addEventListener("touchmove", h, { passive: !1 }), () => {
      f.removeEventListener("wheel", h), f.removeEventListener("touchmove", h);
    };
  }, []), s <= 1)
    return null;
  const c = s > 5 ? 5 : s, l = Array.from({ length: s }, (f, h) => h), u = Math.min(c, s) * 16, d = (f) => {
    if (c === s) return null;
    const h = Math.abs(f - a);
    if (h === 0 || h === 1) return "scale-100";
    if (h === 2)
      return a === 0 || a === s - 1 ? "scale-100" : "scale-75";
    if (h === 3)
      return a === 0 || a === s - 1 ? "scale-75" : "scale-50";
    if (h >= 4) return "scale-50";
  };
  return /* @__PURE__ */ g("div", { ref: e, className: G("flex justify-center", t.className), children: /* @__PURE__ */ g(
    "div",
    {
      className: "relative overflow-hidden",
      style: { width: `${u}px` },
      children: /* @__PURE__ */ g(
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
          onKeyDown: (f) => {
            f.key === "ArrowLeft" ? (f.preventDefault(), n?.scrollPrev()) : f.key === "ArrowRight" && (f.preventDefault(), n?.scrollNext());
          },
          children: l.map((f) => /* @__PURE__ */ g(
            "button",
            {
              className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
              "aria-label": `Go to slide ${f + 1}`,
              "aria-current": f === a ? "true" : void 0,
              onClick: () => n?.scrollTo(f),
              tabIndex: -1,
              children: /* @__PURE__ */ g(
                "div",
                {
                  className: G(
                    "h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]",
                    f === a && "rounded-[3px] opacity-100 group-hover/dot:opacity-100",
                    d(f)
                  )
                }
              )
            },
            f
          ))
        }
      )
    }
  ) });
});
iu.displayName = "CarouselDots";
const rm = Ds({
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
function rr(t, e, n) {
  if (n) {
    const r = (t || 1) / 2;
    return e ? `peek${r}` : r;
  }
  return e ? `peek${t || 1}` : t || 1;
}
const im = ({
  children: t,
  columns: e,
  showArrows: n = !0,
  showDots: r = !0,
  autoplay: i = !1,
  delay: o = 3e3,
  showPeek: s = !1,
  doubleColumns: a
}) => {
  const c = C.Children.toArray(t), l = C.useRef(
    i ? Us({ delay: o, stopOnInteraction: !0 }) : void 0
  ), u = () => {
    l.current && l.current.stop();
  }, d = () => {
    l.current && l.current.play();
  };
  return e ? /* @__PURE__ */ g(
    Qc,
    {
      className: "flex w-full flex-col gap-3 @container",
      opts: {
        align: s ? "center" : "start",
        slidesToScroll: "auto",
        duration: 20,
        containScroll: !1
      },
      plugins: [l.current, Ks()].filter(Boolean),
      onMouseEnter: i ? u : void 0,
      onMouseLeave: i ? d : void 0,
      children: /* @__PURE__ */ A("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ A("div", { className: "relative", children: [
          /* @__PURE__ */ g(eu, { children: C.Children.map(c, (f, h) => {
            const p = a?.find(
              (m) => m.index === h
            );
            return /* @__PURE__ */ g(
              tu,
              {
                className: rm({
                  default: rr(e.default, s),
                  xs: rr(
                    e.xs,
                    s,
                    p?.sizes?.includes("xs")
                  ),
                  sm: rr(
                    e.sm,
                    s,
                    p?.sizes?.includes("sm")
                  ),
                  md: rr(
                    e.md,
                    s,
                    p?.sizes?.includes("md")
                  ),
                  lg: rr(
                    e.lg,
                    s,
                    p?.sizes?.includes("lg")
                  ),
                  peek: s
                }),
                children: f
              },
              h
            );
          }) }),
          n && /* @__PURE__ */ A(tn, { children: [
            /* @__PURE__ */ g(nu, { label: "Previous" }),
            /* @__PURE__ */ g(ru, { label: "Next" })
          ] })
        ] }),
        r && /* @__PURE__ */ g(iu, {})
      ] })
    }
  ) : /* @__PURE__ */ g(nm, { children: t });
}, W1 = Ne(
  bc("Carousel", im)
);
function om(t, e) {
  const n = Sn(t), r = Sn(e), i = n.getTime() - r.getTime();
  return i < 0 ? -1 : i > 0 ? 1 : i;
}
function sm(t) {
  return (e) => {
    const r = (t ? Math[t] : Math.trunc)(e);
    return r === 0 ? 0 : r;
  };
}
function am(t, e, n) {
  const r = hf(), i = n?.locale ?? r.locale ?? pf, o = om(t, e);
  if (isNaN(o))
    throw new RangeError("Invalid time value");
  const s = Object.assign({}, n, {
    addSuffix: n?.addSuffix,
    comparison: o
  });
  let a, c;
  o > 0 ? (a = Sn(e), c = Sn(t)) : (a = Sn(t), c = Sn(e));
  const l = sm(n?.roundingMethod ?? "round"), u = c.getTime() - a.getTime(), d = u / Ia, f = Na(c) - Na(a), h = (u - f) / Ia, p = n?.unit;
  let m;
  if (p ? m = p : d < 1 ? m = "second" : d < 60 ? m = "minute" : d < Pa ? m = "hour" : h < Da ? m = "day" : h < Ma ? m = "month" : m = "year", m === "second") {
    const y = l(u / 1e3);
    return i.formatDistance("xSeconds", y, s);
  } else if (m === "minute") {
    const y = l(d);
    return i.formatDistance("xMinutes", y, s);
  } else if (m === "hour") {
    const y = l(d / 60);
    return i.formatDistance("xHours", y, s);
  } else if (m === "day") {
    const y = l(h / Pa);
    return i.formatDistance("xDays", y, s);
  } else if (m === "month") {
    const y = l(h / Da);
    return y === 12 && p !== "month" ? i.formatDistance("xYears", 1, s) : i.formatDistance("xMonths", y, s);
  } else {
    const y = l(h / Ma);
    return i.formatDistance("xYears", y, s);
  }
}
function lm(t, e) {
  return am(t, mf(t), e);
}
function ir(t, e) {
  return gf(t, -e);
}
function Ya(t, e) {
  return yf(t, -e);
}
function U1(t) {
  return Nn(t, "p");
}
function K1(t) {
  return Nn(t, "HH:mm");
}
function cm(t) {
  return Nn(t, "LLL");
}
function um(t) {
  return t.getDate();
}
function qa(t, e = !0) {
  return lm(t, { addSuffix: e });
}
function G1(t, { yesterdayRelative: e = !0 } = {}) {
  return vc(t) ? qa(t) : wc(t) ? e ? qa(t) : Nn(t, "p") : Nn(t, "PPPp");
}
const Y1 = (t, e) => {
  const n = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return t.forEach((r) => {
    const i = r[e], o = Math.abs(bf(i, /* @__PURE__ */ new Date()));
    vc(i) ? n.today.push(r) : wc(i) ? n.yesterday.push(r) : o <= 7 ? n.lastWeek.push(r) : o <= 30 ? n.lastMonth.push(r) : n[i.getFullYear()] = [...n[i.getFullYear()] || [], r];
  }), n;
}, dm = ({
  date: t,
  "aria-label": e,
  "aria-labelledby": n
}) => {
  const r = um(t), i = cm(t);
  return /* @__PURE__ */ A(
    "div",
    {
      className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary",
      "aria-label": e,
      "aria-labelledby": n,
      children: [
        /* @__PURE__ */ g("div", { className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary", children: i }),
        /* @__PURE__ */ g("div", { className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground", children: r })
      ]
    }
  );
}, q1 = Ne(dm), fm = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Ko = (t = 21) => {
  let e = "", n = crypto.getRandomValues(new Uint8Array(t |= 0));
  for (; t--; )
    e += fm[n[t] & 63];
  return e;
};
var hm = ["points", "className", "baseLinePoints", "connectNulls"];
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, kn.apply(this, arguments);
}
function pm(t, e) {
  if (t == null) return {};
  var n = mm(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function mm(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Xa(t) {
  return vm(t) || bm(t) || ym(t) || gm();
}
function gm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ym(t, e) {
  if (t) {
    if (typeof t == "string") return Go(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Go(t, e);
  }
}
function bm(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function vm(t) {
  if (Array.isArray(t)) return Go(t);
}
function Go(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Ja = function(e) {
  return e && e.x === +e.x && e.y === +e.y;
}, wm = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = [[]];
  return e.forEach(function(r) {
    Ja(r) ? n[n.length - 1].push(r) : n[n.length - 1].length > 0 && n.push([]);
  }), Ja(e[0]) && n[n.length - 1].push(e[0]), n[n.length - 1].length <= 0 && (n = n.slice(0, -1)), n;
}, dr = function(e, n) {
  var r = wm(e);
  n && (r = [r.reduce(function(o, s) {
    return [].concat(Xa(o), Xa(s));
  }, [])]);
  var i = r.map(function(o) {
    return o.reduce(function(s, a, c) {
      return "".concat(s).concat(c === 0 ? "M" : "L").concat(a.x, ",").concat(a.y);
    }, "");
  }).join("");
  return r.length === 1 ? "".concat(i, "Z") : i;
}, xm = function(e, n, r) {
  var i = dr(e, r);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(dr(n.reverse(), r).slice(1));
}, ou = function(e) {
  var n = e.points, r = e.className, i = e.baseLinePoints, o = e.connectNulls, s = pm(e, hm);
  if (!n || !n.length)
    return null;
  var a = Ee("recharts-polygon", r);
  if (i && i.length) {
    var c = s.stroke && s.stroke !== "none", l = xm(n, i, o);
    return /* @__PURE__ */ C.createElement("g", {
      className: a
    }, /* @__PURE__ */ C.createElement("path", kn({}, W(s, !0), {
      fill: l.slice(-1) === "Z" ? s.fill : "none",
      stroke: "none",
      d: l
    })), c ? /* @__PURE__ */ C.createElement("path", kn({}, W(s, !0), {
      fill: "none",
      d: dr(n, o)
    })) : null, c ? /* @__PURE__ */ C.createElement("path", kn({}, W(s, !0), {
      fill: "none",
      d: dr(i, o)
    })) : null);
  }
  var u = dr(n, o);
  return /* @__PURE__ */ C.createElement("path", kn({}, W(s, !0), {
    fill: u.slice(-1) === "Z" ? s.fill : "none",
    className: a,
    d: u
  }));
}, Sm = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function xr(t) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xr(t);
}
function km(t, e) {
  if (t == null) return {};
  var n = Am(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Am(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Tt() {
  return Tt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Tt.apply(this, arguments);
}
function Za(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Za(Object(n), !0).forEach(function(r) {
      Cm(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Za(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Cm(t, e, n) {
  return e = Em(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Em(t) {
  var e = Om(t, "string");
  return xr(e) == "symbol" ? e : e + "";
}
function Om(t, e) {
  if (xr(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (xr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var _m = function(e, n, r, i) {
  var o = "";
  return i.forEach(function(s, a) {
    var c = Ie(n, r, e, s);
    a ? o += "L ".concat(c.x, ",").concat(c.y) : o += "M ".concat(c.x, ",").concat(c.y);
  }), o += "Z", o;
}, Tm = function(e) {
  var n = e.cx, r = e.cy, i = e.innerRadius, o = e.outerRadius, s = e.polarAngles, a = e.radialLines;
  if (!s || !s.length || !a)
    return null;
  var c = Sr({
    stroke: "#ccc"
  }, W(e, !1));
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, s.map(function(l) {
    var u = Ie(n, r, i, l), d = Ie(n, r, o, l);
    return /* @__PURE__ */ C.createElement("line", Tt({}, c, {
      key: "line-".concat(l),
      x1: u.x,
      y1: u.y,
      x2: d.x,
      y2: d.y
    }));
  }));
}, Nm = function(e) {
  var n = e.cx, r = e.cy, i = e.radius, o = e.index, s = Sr(Sr({
    stroke: "#ccc"
  }, W(e, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ C.createElement("circle", Tt({}, s, {
    className: Ee("recharts-polar-grid-concentric-circle", e.className),
    key: "circle-".concat(o),
    cx: n,
    cy: r,
    r: i
  }));
}, Pm = function(e) {
  var n = e.radius, r = e.index, i = Sr(Sr({
    stroke: "#ccc"
  }, W(e, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ C.createElement("path", Tt({}, i, {
    className: Ee("recharts-polar-grid-concentric-polygon", e.className),
    key: "path-".concat(r),
    d: _m(n, e.cx, e.cy, e.polarAngles)
  }));
}, Dm = function(e) {
  var n = e.polarRadius, r = e.gridType;
  return !n || !n.length ? null : /* @__PURE__ */ C.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, n.map(function(i, o) {
    var s = o;
    return r === "circle" ? /* @__PURE__ */ C.createElement(Nm, Tt({
      key: s
    }, e, {
      radius: i,
      index: o
    })) : /* @__PURE__ */ C.createElement(Pm, Tt({
      key: s
    }, e, {
      radius: i,
      index: o
    }));
  }));
}, su = function(e) {
  var n = e.cx, r = n === void 0 ? 0 : n, i = e.cy, o = i === void 0 ? 0 : i, s = e.innerRadius, a = s === void 0 ? 0 : s, c = e.outerRadius, l = c === void 0 ? 0 : c, u = e.gridType, d = u === void 0 ? "polygon" : u, f = e.radialLines, h = f === void 0 ? !0 : f, p = km(e, Sm);
  return l <= 0 ? null : /* @__PURE__ */ C.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ C.createElement(Tm, Tt({
    cx: r,
    cy: o,
    innerRadius: a,
    outerRadius: l,
    gridType: d,
    radialLines: h
  }, p)), /* @__PURE__ */ C.createElement(Dm, Tt({
    cx: r,
    cy: o,
    innerRadius: a,
    outerRadius: l,
    gridType: d,
    radialLines: h
  }, p)));
};
su.displayName = "PolarGrid";
var Eo, Qa;
function Mm() {
  if (Qa) return Eo;
  Qa = 1;
  var t = xc(), e = vf(), n = Sc();
  function r(i, o) {
    return i && i.length ? t(i, n(o, 2), e) : void 0;
  }
  return Eo = r, Eo;
}
var Im = Mm();
const Lm = /* @__PURE__ */ Ms(Im);
var Oo, el;
function Rm() {
  if (el) return Oo;
  el = 1;
  var t = xc(), e = Sc(), n = wf();
  function r(i, o) {
    return i && i.length ? t(i, e(o, 2), n) : void 0;
  }
  return Oo = r, Oo;
}
var $m = Rm();
const jm = /* @__PURE__ */ Ms($m);
var Fm = ["cx", "cy", "angle", "ticks", "axisLine"], zm = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Dn(t) {
  "@babel/helpers - typeof";
  return Dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Dn(t);
}
function fr() {
  return fr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, fr.apply(this, arguments);
}
function tl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? tl(Object(n), !0).forEach(function(r) {
      eo(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function nl(t, e) {
  if (t == null) return {};
  var n = Bm(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Bm(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Vm(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function rl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, lu(r.key), r);
  }
}
function Hm(t, e, n) {
  return e && rl(t.prototype, e), n && rl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Wm(t, e, n) {
  return e = Ei(e), Um(t, au() ? Reflect.construct(e, n || [], Ei(t).constructor) : e.apply(t, n));
}
function Um(t, e) {
  if (e && (Dn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Km(t);
}
function Km(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function au() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (au = function() {
    return !!t;
  })();
}
function Ei(t) {
  return Ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ei(t);
}
function Gm(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Yo(t, e);
}
function Yo(t, e) {
  return Yo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Yo(t, e);
}
function eo(t, e, n) {
  return e = lu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function lu(t) {
  var e = Ym(t, "string");
  return Dn(e) == "symbol" ? e : e + "";
}
function Ym(t, e) {
  if (Dn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Dn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Kn = /* @__PURE__ */ (function(t) {
  function e() {
    return Vm(this, e), Wm(this, e, arguments);
  }
  return Gm(e, t), Hm(e, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(r) {
        var i = r.coordinate, o = this.props, s = o.angle, a = o.cx, c = o.cy;
        return Ie(a, c, i, s);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var r = this.props.orientation, i;
      switch (r) {
        case "left":
          i = "end";
          break;
        case "right":
          i = "start";
          break;
        default:
          i = "middle";
          break;
      }
      return i;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var r = this.props, i = r.cx, o = r.cy, s = r.angle, a = r.ticks, c = Lm(a, function(u) {
        return u.coordinate || 0;
      }), l = jm(a, function(u) {
        return u.coordinate || 0;
      });
      return {
        cx: i,
        cy: o,
        startAngle: s,
        endAngle: s,
        innerRadius: l.coordinate || 0,
        outerRadius: c.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var r = this.props, i = r.cx, o = r.cy, s = r.angle, a = r.ticks, c = r.axisLine, l = nl(r, Fm), u = a.reduce(function(p, m) {
        return [Math.min(p[0], m.coordinate), Math.max(p[1], m.coordinate)];
      }, [1 / 0, -1 / 0]), d = Ie(i, o, u[0], s), f = Ie(i, o, u[1], s), h = qt(qt(qt({}, W(l, !1)), {}, {
        fill: "none"
      }, W(c, !1)), {}, {
        x1: d.x,
        y1: d.y,
        x2: f.x,
        y2: f.y
      });
      return /* @__PURE__ */ C.createElement("line", fr({
        className: "recharts-polar-radius-axis-line"
      }, h));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var r = this, i = this.props, o = i.ticks, s = i.tick, a = i.angle, c = i.tickFormatter, l = i.stroke, u = nl(i, zm), d = this.getTickTextAnchor(), f = W(u, !1), h = W(s, !1), p = o.map(function(m, y) {
        var b = r.getTickValueCoord(m), v = qt(qt(qt(qt({
          textAnchor: d,
          transform: "rotate(".concat(90 - a, ", ").concat(b.x, ", ").concat(b.y, ")")
        }, f), {}, {
          stroke: "none",
          fill: l
        }, h), {}, {
          index: y
        }, b), {}, {
          payload: m
        });
        return /* @__PURE__ */ C.createElement(ie, fr({
          className: Ee("recharts-polar-radius-axis-tick", kc(s)),
          key: "tick-".concat(m.coordinate)
        }, Gi(r.props, m, y)), e.renderTickItem(s, v, c ? c(m.value, y) : m.value));
      });
      return /* @__PURE__ */ C.createElement(ie, {
        className: "recharts-polar-radius-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.ticks, o = r.axisLine, s = r.tick;
      return !i || !i.length ? null : /* @__PURE__ */ C.createElement(ie, {
        className: Ee("recharts-polar-radius-axis", this.props.className)
      }, o && this.renderAxisLine(), s && this.renderTicks(), Is.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(r, i, o) {
      var s;
      return /* @__PURE__ */ C.isValidElement(r) ? s = /* @__PURE__ */ C.cloneElement(r, i) : ge(r) ? s = r(i) : s = /* @__PURE__ */ C.createElement(Ki, fr({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), o), s;
    }
  }]);
})(Wn);
eo(Kn, "displayName", "PolarRadiusAxis");
eo(Kn, "axisType", "radiusAxis");
eo(Kn, "defaultProps", {
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
function Mn(t) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mn(t);
}
function Jt() {
  return Jt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Jt.apply(this, arguments);
}
function il(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Xt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? il(Object(n), !0).forEach(function(r) {
      to(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : il(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function qm(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ol(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, uu(r.key), r);
  }
}
function Xm(t, e, n) {
  return e && ol(t.prototype, e), n && ol(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Jm(t, e, n) {
  return e = Oi(e), Zm(t, cu() ? Reflect.construct(e, n || [], Oi(t).constructor) : e.apply(t, n));
}
function Zm(t, e) {
  if (e && (Mn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Qm(t);
}
function Qm(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function cu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cu = function() {
    return !!t;
  })();
}
function Oi(t) {
  return Oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Oi(t);
}
function eg(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && qo(t, e);
}
function qo(t, e) {
  return qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, qo(t, e);
}
function to(t, e, n) {
  return e = uu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function uu(t) {
  var e = tg(t, "string");
  return Mn(e) == "symbol" ? e : e + "";
}
function tg(t, e) {
  if (Mn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Mn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ng = Math.PI / 180, sl = 1e-5, Gn = /* @__PURE__ */ (function(t) {
  function e() {
    return qm(this, e), Jm(this, e, arguments);
  }
  return eg(e, t), Xm(e, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(r) {
        var i = this.props, o = i.cx, s = i.cy, a = i.radius, c = i.orientation, l = i.tickSize, u = l || 8, d = Ie(o, s, a, r.coordinate), f = Ie(o, s, a + (c === "inner" ? -1 : 1) * u, r.coordinate);
        return {
          x1: d.x,
          y1: d.y,
          x2: f.x,
          y2: f.y
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
    value: function(r) {
      var i = this.props.orientation, o = Math.cos(-r.coordinate * ng), s;
      return o > sl ? s = i === "outer" ? "start" : "end" : o < -sl ? s = i === "outer" ? "end" : "start" : s = "middle", s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var r = this.props, i = r.cx, o = r.cy, s = r.radius, a = r.axisLine, c = r.axisLineType, l = Xt(Xt({}, W(this.props, !1)), {}, {
        fill: "none"
      }, W(a, !1));
      if (c === "circle")
        return /* @__PURE__ */ C.createElement(Ls, Jt({
          className: "recharts-polar-angle-axis-line"
        }, l, {
          cx: i,
          cy: o,
          r: s
        }));
      var u = this.props.ticks, d = u.map(function(f) {
        return Ie(i, o, s, f.coordinate);
      });
      return /* @__PURE__ */ C.createElement(ou, Jt({
        className: "recharts-polar-angle-axis-line"
      }, l, {
        points: d
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var r = this, i = this.props, o = i.ticks, s = i.tick, a = i.tickLine, c = i.tickFormatter, l = i.stroke, u = W(this.props, !1), d = W(s, !1), f = Xt(Xt({}, u), {}, {
        fill: "none"
      }, W(a, !1)), h = o.map(function(p, m) {
        var y = r.getTickLineCoord(p), b = r.getTickTextAnchor(p), v = Xt(Xt(Xt({
          textAnchor: b
        }, u), {}, {
          stroke: "none",
          fill: l
        }, d), {}, {
          index: m,
          payload: p,
          x: y.x2,
          y: y.y2
        });
        return /* @__PURE__ */ C.createElement(ie, Jt({
          className: Ee("recharts-polar-angle-axis-tick", kc(s)),
          key: "tick-".concat(p.coordinate)
        }, Gi(r.props, p, m)), a && /* @__PURE__ */ C.createElement("line", Jt({
          className: "recharts-polar-angle-axis-tick-line"
        }, f, y)), s && e.renderTickItem(s, v, c ? c(p.value, m) : p.value));
      });
      return /* @__PURE__ */ C.createElement(ie, {
        className: "recharts-polar-angle-axis-ticks"
      }, h);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.ticks, o = r.radius, s = r.axisLine;
      return o <= 0 || !i || !i.length ? null : /* @__PURE__ */ C.createElement(ie, {
        className: Ee("recharts-polar-angle-axis", this.props.className)
      }, s && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(r, i, o) {
      var s;
      return /* @__PURE__ */ C.isValidElement(r) ? s = /* @__PURE__ */ C.cloneElement(r, i) : ge(r) ? s = r(i) : s = /* @__PURE__ */ C.createElement(Ki, Jt({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), o), s;
    }
  }]);
})(Wn);
to(Gn, "displayName", "PolarAngleAxis");
to(Gn, "axisType", "angleAxis");
to(Gn, "defaultProps", {
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
var fi;
function In(t) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, In(t);
}
function An() {
  return An = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, An.apply(this, arguments);
}
function al(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function X(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? al(Object(n), !0).forEach(function(r) {
      Xe(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : al(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function rg(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ll(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, fu(r.key), r);
  }
}
function ig(t, e, n) {
  return e && ll(t.prototype, e), n && ll(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function og(t, e, n) {
  return e = _i(e), sg(t, du() ? Reflect.construct(e, n || [], _i(t).constructor) : e.apply(t, n));
}
function sg(t, e) {
  if (e && (In(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ag(t);
}
function ag(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function du() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (du = function() {
    return !!t;
  })();
}
function _i(t) {
  return _i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _i(t);
}
function lg(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Xo(t, e);
}
function Xo(t, e) {
  return Xo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Xo(t, e);
}
function Xe(t, e, n) {
  return e = fu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function fu(t) {
  var e = cg(t, "string");
  return In(e) == "symbol" ? e : e + "";
}
function cg(t, e) {
  if (In(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (In(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Dt = /* @__PURE__ */ (function(t) {
  function e(n) {
    var r;
    return rg(this, e), r = og(this, e, [n]), Xe(r, "pieRef", null), Xe(r, "sectorRefs", []), Xe(r, "id", $s("recharts-pie-")), Xe(r, "handleAnimationEnd", function() {
      var i = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), ge(i) && i();
    }), Xe(r, "handleAnimationStart", function() {
      var i = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), ge(i) && i();
    }), r.state = {
      isAnimationFinished: !n.isAnimationActive,
      prevIsAnimationActive: n.isAnimationActive,
      prevAnimationId: n.animationId,
      sectorToFocus: 0
    }, r;
  }
  return lg(e, t), ig(e, [{
    key: "isActiveIndex",
    value: function(r) {
      var i = this.props.activeIndex;
      return Array.isArray(i) ? i.indexOf(r) !== -1 : r === i;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var r = this.props.activeIndex;
      return Array.isArray(r) ? r.length !== 0 : r || r === 0;
    }
  }, {
    key: "renderLabels",
    value: function(r) {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var o = this.props, s = o.label, a = o.labelLine, c = o.dataKey, l = o.valueKey, u = W(this.props, !1), d = W(s, !1), f = W(a, !1), h = s && s.offsetRadius || 20, p = r.map(function(m, y) {
        var b = (m.startAngle + m.endAngle) / 2, v = Ie(m.cx, m.cy, m.outerRadius + h, b), w = X(X(X(X({}, u), m), {}, {
          stroke: "none"
        }, d), {}, {
          index: y,
          textAnchor: e.getTextAnchor(v.x, m.cx)
        }, v), S = X(X(X(X({}, u), m), {}, {
          fill: "none",
          stroke: m.fill
        }, f), {}, {
          index: y,
          points: [Ie(m.cx, m.cy, m.outerRadius, b), v]
        }), k = c;
        return he(c) && he(l) ? k = "value" : he(c) && (k = l), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ C.createElement(ie, {
          key: "label-".concat(m.startAngle, "-").concat(m.endAngle, "-").concat(m.midAngle, "-").concat(y)
        }, a && e.renderLabelLineItem(a, S, "line"), e.renderLabelItem(s, w, De(m, k)));
      });
      return /* @__PURE__ */ C.createElement(ie, {
        className: "recharts-pie-labels"
      }, p);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(r) {
      var i = this, o = this.props, s = o.activeShape, a = o.blendStroke, c = o.inactiveShape;
      return r.map(function(l, u) {
        if (l?.startAngle === 0 && l?.endAngle === 0 && r.length !== 1) return null;
        var d = i.isActiveIndex(u), f = c && i.hasActiveIndex() ? c : null, h = d ? s : f, p = X(X({}, l), {}, {
          stroke: a ? l.fill : l.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ C.createElement(ie, An({
          ref: function(y) {
            y && !i.sectorRefs.includes(y) && i.sectorRefs.push(y);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Gi(i.props, l, u), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(l?.startAngle, "-").concat(l?.endAngle, "-").concat(l.midAngle, "-").concat(u)
        }), /* @__PURE__ */ C.createElement(Ho, An({
          option: h,
          isActive: d,
          shapeType: "sector"
        }, p)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var r = this, i = this.props, o = i.sectors, s = i.isAnimationActive, a = i.animationBegin, c = i.animationDuration, l = i.animationEasing, u = i.animationId, d = this.state, f = d.prevSectors, h = d.prevIsAnimationActive;
      return /* @__PURE__ */ C.createElement(Yi, {
        begin: a,
        duration: c,
        isActive: s,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(u, "-").concat(h),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(p) {
        var m = p.t, y = [], b = o && o[0], v = b.startAngle;
        return o.forEach(function(w, S) {
          var k = f && f[S], O = S > 0 ? xf(w, "paddingAngle", 0) : 0;
          if (k) {
            var x = Ce(k.endAngle - k.startAngle, w.endAngle - w.startAngle), E = X(X({}, w), {}, {
              startAngle: v + O,
              endAngle: v + x(m) + O
            });
            y.push(E), v = E.endAngle;
          } else {
            var N = w.endAngle, I = w.startAngle, M = Ce(0, N - I), T = M(m), P = X(X({}, w), {}, {
              startAngle: v + O,
              endAngle: v + T + O
            });
            y.push(P), v = P.endAngle;
          }
        }), /* @__PURE__ */ C.createElement(ie, null, r.renderSectorsStatically(y));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(r) {
      var i = this;
      r.onkeydown = function(o) {
        if (!o.altKey)
          switch (o.key) {
            case "ArrowLeft": {
              var s = ++i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[s].focus(), i.setState({
                sectorToFocus: s
              });
              break;
            }
            case "ArrowRight": {
              var a = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[a].focus(), i.setState({
                sectorToFocus: a
              });
              break;
            }
            case "Escape": {
              i.sectorRefs[i.state.sectorToFocus].blur(), i.setState({
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
      var r = this.props, i = r.sectors, o = r.isAnimationActive, s = this.state.prevSectors;
      return o && i && i.length && (!s || !qi(s, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, i = this.props, o = i.hide, s = i.sectors, a = i.className, c = i.label, l = i.cx, u = i.cy, d = i.innerRadius, f = i.outerRadius, h = i.isAnimationActive, p = this.state.isAnimationFinished;
      if (o || !s || !s.length || !Pe(l) || !Pe(u) || !Pe(d) || !Pe(f))
        return null;
      var m = Ee("recharts-pie", a);
      return /* @__PURE__ */ C.createElement(ie, {
        tabIndex: this.props.rootTabIndex,
        className: m,
        ref: function(b) {
          r.pieRef = b;
        }
      }, this.renderSectors(), c && this.renderLabels(s), Is.renderCallByParent(this.props, null, !1), (!h || p) && hn.renderCallByParent(this.props, s, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, i) {
      return i.prevIsAnimationActive !== r.isAnimationActive ? {
        prevIsAnimationActive: r.isAnimationActive,
        prevAnimationId: r.animationId,
        curSectors: r.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : r.isAnimationActive && r.animationId !== i.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curSectors: r.sectors,
        prevSectors: i.curSectors,
        isAnimationFinished: !0
      } : r.sectors !== i.curSectors ? {
        curSectors: r.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(r, i) {
      return r > i ? "start" : r < i ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(r, i, o) {
      if (/* @__PURE__ */ C.isValidElement(r))
        return /* @__PURE__ */ C.cloneElement(r, i);
      if (ge(r))
        return r(i);
      var s = Ee("recharts-pie-label-line", typeof r != "boolean" ? r.className : "");
      return /* @__PURE__ */ C.createElement(Rs, An({}, i, {
        key: o,
        type: "linear",
        className: s
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(r, i, o) {
      if (/* @__PURE__ */ C.isValidElement(r))
        return /* @__PURE__ */ C.cloneElement(r, i);
      var s = o;
      if (ge(r) && (s = r(i), /* @__PURE__ */ C.isValidElement(s)))
        return s;
      var a = Ee("recharts-pie-label-text", typeof r != "boolean" && !ge(r) ? r.className : "");
      return /* @__PURE__ */ C.createElement(Ki, An({}, i, {
        alignmentBaseline: "middle",
        className: a
      }), s);
    }
  }]);
})(Wn);
fi = Dt;
Xe(Dt, "displayName", "Pie");
Xe(Dt, "defaultProps", {
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
  isAnimationActive: !Xi.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Xe(Dt, "parseDeltaAngle", function(t, e) {
  var n = ui(e - t), r = Math.min(Math.abs(e - t), 360);
  return n * r;
});
Xe(Dt, "getRealPieData", function(t) {
  var e = t.data, n = t.children, r = W(t, !1), i = Ji(n, js);
  return e && e.length ? e.map(function(o, s) {
    return X(X(X({
      payload: o
    }, r), o), i && i[s] && i[s].props);
  }) : i && i.length ? i.map(function(o) {
    return X(X({}, r), o.props);
  }) : [];
});
Xe(Dt, "parseCoordinateOfPie", function(t, e) {
  var n = e.top, r = e.left, i = e.width, o = e.height, s = Sf(i, o), a = r + Zr(t.cx, i, i / 2), c = n + Zr(t.cy, o, o / 2), l = Zr(t.innerRadius, s, 0), u = Zr(t.outerRadius, s, s * 0.8), d = t.maxRadius || Math.sqrt(i * i + o * o) / 2;
  return {
    cx: a,
    cy: c,
    innerRadius: l,
    outerRadius: u,
    maxRadius: d
  };
});
Xe(Dt, "getComposedData", function(t) {
  var e = t.item, n = t.offset, r = e.type.defaultProps !== void 0 ? X(X({}, e.type.defaultProps), e.props) : e.props, i = fi.getRealPieData(r);
  if (!i || !i.length)
    return null;
  var o = r.cornerRadius, s = r.startAngle, a = r.endAngle, c = r.paddingAngle, l = r.dataKey, u = r.nameKey, d = r.valueKey, f = r.tooltipType, h = Math.abs(r.minAngle), p = fi.parseCoordinateOfPie(r, n), m = fi.parseDeltaAngle(s, a), y = Math.abs(m), b = l;
  he(l) && he(d) ? (Si(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = "value") : he(l) && (Si(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = d);
  var v = i.filter(function(E) {
    return De(E, b, 0) !== 0;
  }).length, w = (y >= 360 ? v : v - 1) * c, S = y - v * h - w, k = i.reduce(function(E, N) {
    var I = De(N, b, 0);
    return E + (Pe(I) ? I : 0);
  }, 0), O;
  if (k > 0) {
    var x;
    O = i.map(function(E, N) {
      var I = De(E, b, 0), M = De(E, u, N), T = (Pe(I) ? I : 0) / k, P;
      N ? P = x.endAngle + ui(m) * c * (I !== 0 ? 1 : 0) : P = s;
      var _ = P + ui(m) * ((I !== 0 ? h : 0) + T * S), D = (P + _) / 2, $ = (p.innerRadius + p.outerRadius) / 2, z = [{
        name: M,
        value: I,
        payload: E,
        dataKey: b,
        type: f
      }], B = Ie(p.cx, p.cy, $, D);
      return x = X(X(X({
        percent: T,
        cornerRadius: o,
        name: M,
        tooltipPayload: z,
        midAngle: D,
        middleRadius: $,
        tooltipPosition: B
      }, E), p), {}, {
        value: De(E, b),
        startAngle: P,
        endAngle: _,
        payload: E,
        paddingAngle: ui(m) * c
      }), x;
    });
  }
  return X(X({}, p), {}, {
    sectors: O,
    data: i
  });
});
var _o, cl;
function ug() {
  if (cl) return _o;
  cl = 1;
  function t(e) {
    return e && e.length ? e[0] : void 0;
  }
  return _o = t, _o;
}
var To, ul;
function dg() {
  return ul || (ul = 1, To = ug()), To;
}
var fg = dg();
const hg = /* @__PURE__ */ Ms(fg);
var pg = ["key"];
function Ln(t) {
  "@babel/helpers - typeof";
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ln(t);
}
function mg(t, e) {
  if (t == null) return {};
  var n = gg(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function gg(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Ti() {
  return Ti = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ti.apply(this, arguments);
}
function dl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ae(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? dl(Object(n), !0).forEach(function(r) {
      At(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : dl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function yg(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function fl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, pu(r.key), r);
  }
}
function bg(t, e, n) {
  return e && fl(t.prototype, e), n && fl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function vg(t, e, n) {
  return e = Ni(e), wg(t, hu() ? Reflect.construct(e, n || [], Ni(t).constructor) : e.apply(t, n));
}
function wg(t, e) {
  if (e && (Ln(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return xg(t);
}
function xg(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function hu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hu = function() {
    return !!t;
  })();
}
function Ni(t) {
  return Ni = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ni(t);
}
function Sg(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Jo(t, e);
}
function Jo(t, e) {
  return Jo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Jo(t, e);
}
function At(t, e, n) {
  return e = pu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function pu(t) {
  var e = kg(t, "string");
  return Ln(e) == "symbol" ? e : e + "";
}
function kg(t, e) {
  if (Ln(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ln(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Br = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    yg(this, e);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return n = vg(this, e, [].concat(i)), At(n, "state", {
      isAnimationFinished: !1
    }), At(n, "handleAnimationEnd", function() {
      var s = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), ge(s) && s();
    }), At(n, "handleAnimationStart", function() {
      var s = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), ge(s) && s();
    }), At(n, "handleMouseEnter", function(s) {
      var a = n.props.onMouseEnter;
      a && a(n.props, s);
    }), At(n, "handleMouseLeave", function(s) {
      var a = n.props.onMouseLeave;
      a && a(n.props, s);
    }), n;
  }
  return Sg(e, t), bg(e, [{
    key: "renderDots",
    value: function(r) {
      var i = this.props, o = i.dot, s = i.dataKey, a = W(this.props, !1), c = W(o, !0), l = r.map(function(u, d) {
        var f = Ae(Ae(Ae({
          key: "dot-".concat(d),
          r: 3
        }, a), c), {}, {
          dataKey: s,
          cx: u.x,
          cy: u.y,
          index: d,
          payload: u
        });
        return e.renderDotItem(o, f);
      });
      return /* @__PURE__ */ C.createElement(ie, {
        className: "recharts-radar-dots"
      }, l);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(r) {
      var i = this.props, o = i.shape, s = i.dot, a = i.isRange, c = i.baseLinePoints, l = i.connectNulls, u;
      return /* @__PURE__ */ C.isValidElement(o) ? u = /* @__PURE__ */ C.cloneElement(o, Ae(Ae({}, this.props), {}, {
        points: r
      })) : ge(o) ? u = o(Ae(Ae({}, this.props), {}, {
        points: r
      })) : u = /* @__PURE__ */ C.createElement(ou, Ti({}, W(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: r,
        baseLinePoints: a ? c : null,
        connectNulls: l
      })), /* @__PURE__ */ C.createElement(ie, {
        className: "recharts-radar-polygon"
      }, u, s ? this.renderDots(r) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var r = this, i = this.props, o = i.points, s = i.isAnimationActive, a = i.animationBegin, c = i.animationDuration, l = i.animationEasing, u = i.animationId, d = this.state.prevPoints;
      return /* @__PURE__ */ C.createElement(Yi, {
        begin: a,
        duration: c,
        isActive: s,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(u),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(f) {
        var h = f.t, p = d && d.length / o.length, m = o.map(function(y, b) {
          var v = d && d[Math.floor(b * p)];
          if (v) {
            var w = Ce(v.x, y.x), S = Ce(v.y, y.y);
            return Ae(Ae({}, y), {}, {
              x: w(h),
              y: S(h)
            });
          }
          var k = Ce(y.cx, y.x), O = Ce(y.cy, y.y);
          return Ae(Ae({}, y), {}, {
            x: k(h),
            y: O(h)
          });
        });
        return r.renderPolygonStatically(m);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var r = this.props, i = r.points, o = r.isAnimationActive, s = r.isRange, a = this.state.prevPoints;
      return o && i && i.length && !s && (!a || !qi(a, i)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(i);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.hide, o = r.className, s = r.points, a = r.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var c = this.state.isAnimationFinished, l = Ee("recharts-radar", o);
      return /* @__PURE__ */ C.createElement(ie, {
        className: l
      }, this.renderPolygon(), (!a || c) && hn.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, i) {
      return r.animationId !== i.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        prevPoints: i.curPoints
      } : r.points !== i.curPoints ? {
        curPoints: r.points
      } : null;
    }
  }, {
    key: "renderDotItem",
    value: function(r, i) {
      var o;
      if (/* @__PURE__ */ C.isValidElement(r))
        o = /* @__PURE__ */ C.cloneElement(r, i);
      else if (ge(r))
        o = r(i);
      else {
        var s = i.key, a = mg(i, pg);
        o = /* @__PURE__ */ C.createElement(Ls, Ti({}, a, {
          key: s,
          className: Ee("recharts-radar-dot", typeof r != "boolean" ? r.className : "")
        }));
      }
      return o;
    }
  }]);
})(Wn);
At(Br, "displayName", "Radar");
At(Br, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !Xi.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
At(Br, "getComposedData", function(t) {
  var e = t.radiusAxis, n = t.angleAxis, r = t.displayedData, i = t.dataKey, o = t.bandSize, s = n.cx, a = n.cy, c = !1, l = [], u = n.type !== "number" ? o ?? 0 : 0;
  r.forEach(function(f, h) {
    var p = De(f, n.dataKey, h), m = De(f, i), y = n.scale(p) + u, b = Array.isArray(m) ? kf(m) : m, v = he(b) ? void 0 : e.scale(b);
    Array.isArray(m) && m.length >= 2 && (c = !0), l.push(Ae(Ae({}, Ie(s, a, v, y)), {}, {
      name: p,
      value: m,
      cx: s,
      cy: a,
      radius: v,
      angle: y,
      payload: f
    }));
  });
  var d = [];
  return c && l.forEach(function(f) {
    if (Array.isArray(f.value)) {
      var h = hg(f.value), p = he(h) ? void 0 : e.scale(h);
      d.push(Ae(Ae({}, f), {}, {
        radius: p
      }, Ie(s, a, p, f.angle)));
    } else
      d.push(f);
  }), {
    points: l,
    isRange: c,
    baseLinePoints: d
  };
});
var Ag = ["x1", "y1", "x2", "y2", "key"], Cg = ["offset"];
function an(t) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, an(t);
}
function hl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function me(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hl(Object(n), !0).forEach(function(r) {
      Eg(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Eg(t, e, n) {
  return e = Og(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Og(t) {
  var e = _g(t, "string");
  return an(e) == "symbol" ? e : e + "";
}
function _g(t, e) {
  if (an(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (an(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Qt.apply(this, arguments);
}
function pl(t, e) {
  if (t == null) return {};
  var n = Tg(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Tg(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var Ng = function(e) {
  var n = e.fill;
  if (!n || n === "none")
    return null;
  var r = e.fillOpacity, i = e.x, o = e.y, s = e.width, a = e.height, c = e.ry;
  return /* @__PURE__ */ C.createElement("rect", {
    x: i,
    y: o,
    ry: c,
    width: s,
    height: a,
    stroke: "none",
    fill: n,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function mu(t, e) {
  var n;
  if (/* @__PURE__ */ C.isValidElement(t))
    n = /* @__PURE__ */ C.cloneElement(t, e);
  else if (ge(t))
    n = t(e);
  else {
    var r = e.x1, i = e.y1, o = e.x2, s = e.y2, a = e.key, c = pl(e, Ag), l = W(c, !1);
    l.offset;
    var u = pl(l, Cg);
    n = /* @__PURE__ */ C.createElement("line", Qt({}, u, {
      x1: r,
      y1: i,
      x2: o,
      y2: s,
      fill: "none",
      key: a
    }));
  }
  return n;
}
function Pg(t) {
  var e = t.x, n = t.width, r = t.horizontal, i = r === void 0 ? !0 : r, o = t.horizontalPoints;
  if (!i || !o || !o.length)
    return null;
  var s = o.map(function(a, c) {
    var l = me(me({}, t), {}, {
      x1: e,
      y1: a,
      x2: e + n,
      y2: a,
      key: "line-".concat(c),
      index: c
    });
    return mu(i, l);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, s);
}
function Dg(t) {
  var e = t.y, n = t.height, r = t.vertical, i = r === void 0 ? !0 : r, o = t.verticalPoints;
  if (!i || !o || !o.length)
    return null;
  var s = o.map(function(a, c) {
    var l = me(me({}, t), {}, {
      x1: a,
      y1: e,
      x2: a,
      y2: e + n,
      key: "line-".concat(c),
      index: c
    });
    return mu(i, l);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, s);
}
function Mg(t) {
  var e = t.horizontalFill, n = t.fillOpacity, r = t.x, i = t.y, o = t.width, s = t.height, a = t.horizontalPoints, c = t.horizontal, l = c === void 0 ? !0 : c;
  if (!l || !e || !e.length)
    return null;
  var u = a.map(function(f) {
    return Math.round(f + i - i);
  }).sort(function(f, h) {
    return f - h;
  });
  i !== u[0] && u.unshift(0);
  var d = u.map(function(f, h) {
    var p = !u[h + 1], m = p ? i + s - f : u[h + 1] - f;
    if (m <= 0)
      return null;
    var y = h % e.length;
    return /* @__PURE__ */ C.createElement("rect", {
      key: "react-".concat(h),
      y: f,
      x: r,
      height: m,
      width: o,
      stroke: "none",
      fill: e[y],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, d);
}
function Ig(t) {
  var e = t.vertical, n = e === void 0 ? !0 : e, r = t.verticalFill, i = t.fillOpacity, o = t.x, s = t.y, a = t.width, c = t.height, l = t.verticalPoints;
  if (!n || !r || !r.length)
    return null;
  var u = l.map(function(f) {
    return Math.round(f + o - o);
  }).sort(function(f, h) {
    return f - h;
  });
  o !== u[0] && u.unshift(0);
  var d = u.map(function(f, h) {
    var p = !u[h + 1], m = p ? o + a - f : u[h + 1] - f;
    if (m <= 0)
      return null;
    var y = h % r.length;
    return /* @__PURE__ */ C.createElement("rect", {
      key: "react-".concat(h),
      x: f,
      y: s,
      width: m,
      height: c,
      stroke: "none",
      fill: r[y],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, d);
}
var Lg = function(e, n) {
  var r = e.xAxis, i = e.width, o = e.height, s = e.offset;
  return Ac(Cc(me(me(me({}, Oc.defaultProps), r), {}, {
    ticks: Ec(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: o
    }
  })), s.left, s.left + s.width, n);
}, Rg = function(e, n) {
  var r = e.yAxis, i = e.width, o = e.height, s = e.offset;
  return Ac(Cc(me(me(me({}, Oc.defaultProps), r), {}, {
    ticks: Ec(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: o
    }
  })), s.top, s.top + s.height, n);
}, wn = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Yn(t) {
  var e, n, r, i, o, s, a = Af(), c = Cf(), l = Ef(), u = me(me({}, t), {}, {
    stroke: (e = t.stroke) !== null && e !== void 0 ? e : wn.stroke,
    fill: (n = t.fill) !== null && n !== void 0 ? n : wn.fill,
    horizontal: (r = t.horizontal) !== null && r !== void 0 ? r : wn.horizontal,
    horizontalFill: (i = t.horizontalFill) !== null && i !== void 0 ? i : wn.horizontalFill,
    vertical: (o = t.vertical) !== null && o !== void 0 ? o : wn.vertical,
    verticalFill: (s = t.verticalFill) !== null && s !== void 0 ? s : wn.verticalFill,
    x: Pe(t.x) ? t.x : l.left,
    y: Pe(t.y) ? t.y : l.top,
    width: Pe(t.width) ? t.width : l.width,
    height: Pe(t.height) ? t.height : l.height
  }), d = u.x, f = u.y, h = u.width, p = u.height, m = u.syncWithTicks, y = u.horizontalValues, b = u.verticalValues, v = Of(), w = _f();
  if (!Pe(h) || h <= 0 || !Pe(p) || p <= 0 || !Pe(d) || d !== +d || !Pe(f) || f !== +f)
    return null;
  var S = u.verticalCoordinatesGenerator || Lg, k = u.horizontalCoordinatesGenerator || Rg, O = u.horizontalPoints, x = u.verticalPoints;
  if ((!O || !O.length) && ge(k)) {
    var E = y && y.length, N = k({
      yAxis: w ? me(me({}, w), {}, {
        ticks: E ? y : w.ticks
      }) : void 0,
      width: a,
      height: c,
      offset: l
    }, E ? !0 : m);
    Si(Array.isArray(N), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(an(N), "]")), Array.isArray(N) && (O = N);
  }
  if ((!x || !x.length) && ge(S)) {
    var I = b && b.length, M = S({
      xAxis: v ? me(me({}, v), {}, {
        ticks: I ? b : v.ticks
      }) : void 0,
      width: a,
      height: c,
      offset: l
    }, I ? !0 : m);
    Si(Array.isArray(M), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(an(M), "]")), Array.isArray(M) && (x = M);
  }
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ C.createElement(Ng, {
    fill: u.fill,
    fillOpacity: u.fillOpacity,
    x: u.x,
    y: u.y,
    width: u.width,
    height: u.height,
    ry: u.ry
  }), /* @__PURE__ */ C.createElement(Pg, Qt({}, u, {
    offset: l,
    horizontalPoints: O,
    xAxis: v,
    yAxis: w
  })), /* @__PURE__ */ C.createElement(Dg, Qt({}, u, {
    offset: l,
    verticalPoints: x,
    xAxis: v,
    yAxis: w
  })), /* @__PURE__ */ C.createElement(Mg, Qt({}, u, {
    horizontalPoints: O
  })), /* @__PURE__ */ C.createElement(Ig, Qt({}, u, {
    verticalPoints: x
  })));
}
Yn.displayName = "CartesianGrid";
var $g = ["type", "layout", "connectNulls", "ref"], jg = ["key"];
function Rn(t) {
  "@babel/helpers - typeof";
  return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Rn(t);
}
function ml(t, e) {
  if (t == null) return {};
  var n = Fg(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Fg(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function hr() {
  return hr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, hr.apply(this, arguments);
}
function gl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Fe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gl(Object(n), !0).forEach(function(r) {
      et(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function xn(t) {
  return Hg(t) || Vg(t) || Bg(t) || zg();
}
function zg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bg(t, e) {
  if (t) {
    if (typeof t == "string") return Zo(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zo(t, e);
  }
}
function Vg(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Hg(t) {
  if (Array.isArray(t)) return Zo(t);
}
function Zo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Wg(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function yl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, yu(r.key), r);
  }
}
function Ug(t, e, n) {
  return e && yl(t.prototype, e), n && yl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Kg(t, e, n) {
  return e = Pi(e), Gg(t, gu() ? Reflect.construct(e, n || [], Pi(t).constructor) : e.apply(t, n));
}
function Gg(t, e) {
  if (e && (Rn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Yg(t);
}
function Yg(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function gu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gu = function() {
    return !!t;
  })();
}
function Pi(t) {
  return Pi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pi(t);
}
function qg(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Qo(t, e);
}
function Qo(t, e) {
  return Qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Qo(t, e);
}
function et(t, e, n) {
  return e = yu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function yu(t) {
  var e = Xg(t, "string");
  return Rn(e) == "symbol" ? e : e + "";
}
function Xg(t, e) {
  if (Rn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Rn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var mn = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    Wg(this, e);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return n = Kg(this, e, [].concat(i)), et(n, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), et(n, "generateSimpleStrokeDasharray", function(s, a) {
      return "".concat(a, "px ").concat(s - a, "px");
    }), et(n, "getStrokeDasharray", function(s, a, c) {
      var l = c.reduce(function(b, v) {
        return b + v;
      });
      if (!l)
        return n.generateSimpleStrokeDasharray(a, s);
      for (var u = Math.floor(s / l), d = s % l, f = a - s, h = [], p = 0, m = 0; p < c.length; m += c[p], ++p)
        if (m + c[p] > d) {
          h = [].concat(xn(c.slice(0, p)), [d - m]);
          break;
        }
      var y = h.length % 2 === 0 ? [0, f] : [f];
      return [].concat(xn(e.repeat(c, u)), xn(h), y).map(function(b) {
        return "".concat(b, "px");
      }).join(", ");
    }), et(n, "id", $s("recharts-line-")), et(n, "pathRef", function(s) {
      n.mainCurve = s;
    }), et(n, "handleAnimationEnd", function() {
      n.setState({
        isAnimationFinished: !0
      }), n.props.onAnimationEnd && n.props.onAnimationEnd();
    }), et(n, "handleAnimationStart", function() {
      n.setState({
        isAnimationFinished: !1
      }), n.props.onAnimationStart && n.props.onAnimationStart();
    }), n;
  }
  return qg(e, t), Ug(e, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var r = this.getTotalLength();
        this.setState({
          totalLength: r
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var r = this.getTotalLength();
        r !== this.state.totalLength && this.setState({
          totalLength: r
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var r = this.mainCurve;
      try {
        return r && r.getTotalLength && r.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(r, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var o = this.props, s = o.points, a = o.xAxis, c = o.yAxis, l = o.layout, u = o.children, d = Ji(u, _c);
      if (!d)
        return null;
      var f = function(m, y) {
        return {
          x: m.x,
          y: m.y,
          value: m.value,
          errorVal: De(m.payload, y)
        };
      }, h = {
        clipPath: r ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ C.createElement(ie, h, d.map(function(p) {
        return /* @__PURE__ */ C.cloneElement(p, {
          key: "bar-".concat(p.props.dataKey),
          data: s,
          xAxis: a,
          yAxis: c,
          layout: l,
          dataPointFormatter: f
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(r, i, o) {
      var s = this.props.isAnimationActive;
      if (s && !this.state.isAnimationFinished)
        return null;
      var a = this.props, c = a.dot, l = a.points, u = a.dataKey, d = W(this.props, !1), f = W(c, !0), h = l.map(function(m, y) {
        var b = Fe(Fe(Fe({
          key: "dot-".concat(y),
          r: 3
        }, d), f), {}, {
          value: m.value,
          dataKey: u,
          cx: m.x,
          cy: m.y,
          index: y,
          payload: m.payload
        });
        return e.renderDotItem(c, b);
      }), p = {
        clipPath: r ? "url(#clipPath-".concat(i ? "" : "dots-").concat(o, ")") : null
      };
      return /* @__PURE__ */ C.createElement(ie, hr({
        className: "recharts-line-dots",
        key: "dots"
      }, p), h);
    }
  }, {
    key: "renderCurveStatically",
    value: function(r, i, o, s) {
      var a = this.props, c = a.type, l = a.layout, u = a.connectNulls;
      a.ref;
      var d = ml(a, $g), f = Fe(Fe(Fe({}, W(d, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null,
        points: r
      }, s), {}, {
        type: c,
        layout: l,
        connectNulls: u
      });
      return /* @__PURE__ */ C.createElement(Rs, hr({}, f, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(r, i) {
      var o = this, s = this.props, a = s.points, c = s.strokeDasharray, l = s.isAnimationActive, u = s.animationBegin, d = s.animationDuration, f = s.animationEasing, h = s.animationId, p = s.animateNewValues, m = s.width, y = s.height, b = this.state, v = b.prevPoints, w = b.totalLength;
      return /* @__PURE__ */ C.createElement(Yi, {
        begin: u,
        duration: d,
        isActive: l,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(h),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(S) {
        var k = S.t;
        if (v) {
          var O = v.length / a.length, x = a.map(function(T, P) {
            var _ = Math.floor(P * O);
            if (v[_]) {
              var D = v[_], $ = Ce(D.x, T.x), z = Ce(D.y, T.y);
              return Fe(Fe({}, T), {}, {
                x: $(k),
                y: z(k)
              });
            }
            if (p) {
              var B = Ce(m * 2, T.x), L = Ce(y / 2, T.y);
              return Fe(Fe({}, T), {}, {
                x: B(k),
                y: L(k)
              });
            }
            return Fe(Fe({}, T), {}, {
              x: T.x,
              y: T.y
            });
          });
          return o.renderCurveStatically(x, r, i);
        }
        var E = Ce(0, w), N = E(k), I;
        if (c) {
          var M = "".concat(c).split(/[,\s]+/gim).map(function(T) {
            return parseFloat(T);
          });
          I = o.getStrokeDasharray(N, w, M);
        } else
          I = o.generateSimpleStrokeDasharray(w, N);
        return o.renderCurveStatically(a, r, i, {
          strokeDasharray: I
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(r, i) {
      var o = this.props, s = o.points, a = o.isAnimationActive, c = this.state, l = c.prevPoints, u = c.totalLength;
      return a && s && s.length && (!l && u > 0 || !qi(l, s)) ? this.renderCurveWithAnimation(r, i) : this.renderCurveStatically(s, r, i);
    }
  }, {
    key: "render",
    value: function() {
      var r, i = this.props, o = i.hide, s = i.dot, a = i.points, c = i.className, l = i.xAxis, u = i.yAxis, d = i.top, f = i.left, h = i.width, p = i.height, m = i.isAnimationActive, y = i.id;
      if (o || !a || !a.length)
        return null;
      var b = this.state.isAnimationFinished, v = a.length === 1, w = Ee("recharts-line", c), S = l && l.allowDataOverflow, k = u && u.allowDataOverflow, O = S || k, x = he(y) ? this.id : y, E = (r = W(s, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, N = E.r, I = N === void 0 ? 3 : N, M = E.strokeWidth, T = M === void 0 ? 2 : M, P = Tf(s) ? s : {}, _ = P.clipDot, D = _ === void 0 ? !0 : _, $ = I * 2 + T;
      return /* @__PURE__ */ C.createElement(ie, {
        className: w
      }, S || k ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(x)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: S ? f : f - h / 2,
        y: k ? d : d - p / 2,
        width: S ? h : h * 2,
        height: k ? p : p * 2
      })), !D && /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-dots-".concat(x)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: f - $ / 2,
        y: d - $ / 2,
        width: h + $,
        height: p + $
      }))) : null, !v && this.renderCurve(O, x), this.renderErrorBar(O, x), (v || s) && this.renderDots(O, D, x), (!m || b) && hn.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, i) {
      return r.animationId !== i.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        prevPoints: i.curPoints
      } : r.points !== i.curPoints ? {
        curPoints: r.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(r, i) {
      for (var o = r.length % 2 !== 0 ? [].concat(xn(r), [0]) : r, s = [], a = 0; a < i; ++a)
        s = [].concat(xn(s), xn(o));
      return s;
    }
  }, {
    key: "renderDotItem",
    value: function(r, i) {
      var o;
      if (/* @__PURE__ */ C.isValidElement(r))
        o = /* @__PURE__ */ C.cloneElement(r, i);
      else if (ge(r))
        o = r(i);
      else {
        var s = i.key, a = ml(i, jg), c = Ee("recharts-line-dot", typeof r != "boolean" ? r.className : "");
        o = /* @__PURE__ */ C.createElement(Ls, hr({
          key: s
        }, a, {
          className: c
        }));
      }
      return o;
    }
  }]);
})(Wn);
et(mn, "displayName", "Line");
et(mn, "defaultProps", {
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
  isAnimationActive: !Xi.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
et(mn, "getComposedData", function(t) {
  var e = t.props, n = t.xAxis, r = t.yAxis, i = t.xAxisTicks, o = t.yAxisTicks, s = t.dataKey, a = t.bandSize, c = t.displayedData, l = t.offset, u = e.layout, d = c.map(function(f, h) {
    var p = De(f, s);
    return u === "horizontal" ? {
      x: ki({
        axis: n,
        ticks: i,
        bandSize: a,
        entry: f,
        index: h
      }),
      y: he(p) ? null : r.scale(p),
      value: p,
      payload: f
    } : {
      x: he(p) ? null : n.scale(p),
      y: ki({
        axis: r,
        ticks: o,
        bandSize: a,
        entry: f,
        index: h
      }),
      value: p,
      payload: f
    };
  });
  return Fe({
    points: d,
    layout: u
  }, l);
});
function $n(t) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $n(t);
}
function Jg(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zg(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, wu(r.key), r);
  }
}
function Qg(t, e, n) {
  return e && Zg(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function ey(t, e, n) {
  return e = Di(e), ty(t, bu() ? Reflect.construct(e, n || [], Di(t).constructor) : e.apply(t, n));
}
function ty(t, e) {
  if (e && ($n(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ny(t);
}
function ny(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function bu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bu = function() {
    return !!t;
  })();
}
function Di(t) {
  return Di = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Di(t);
}
function ry(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && es(t, e);
}
function es(t, e) {
  return es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, es(t, e);
}
function vu(t, e, n) {
  return e = wu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function wu(t) {
  var e = iy(t, "string");
  return $n(e) == "symbol" ? e : e + "";
}
function iy(t, e) {
  if ($n(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if ($n(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var no = /* @__PURE__ */ (function(t) {
  function e() {
    return Jg(this, e), ey(this, e, arguments);
  }
  return ry(e, t), Qg(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(C.Component);
vu(no, "displayName", "ZAxis");
vu(no, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var oy = ["option", "isActive"];
function pr() {
  return pr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, pr.apply(this, arguments);
}
function sy(t, e) {
  if (t == null) return {};
  var n = ay(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function ay(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function ly(t) {
  var e = t.option, n = t.isActive, r = sy(t, oy);
  return typeof e == "string" ? /* @__PURE__ */ C.createElement(Ho, pr({
    option: /* @__PURE__ */ C.createElement(Nf, pr({
      type: e
    }, r)),
    isActive: n,
    shapeType: "symbols"
  }, r)) : /* @__PURE__ */ C.createElement(Ho, pr({
    option: e,
    isActive: n,
    shapeType: "symbols"
  }, r));
}
function jn(t) {
  "@babel/helpers - typeof";
  return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jn(t);
}
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, mr.apply(this, arguments);
}
function bl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ge(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bl(Object(n), !0).forEach(function(r) {
      jt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function cy(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Su(r.key), r);
  }
}
function uy(t, e, n) {
  return e && vl(t.prototype, e), n && vl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function dy(t, e, n) {
  return e = Mi(e), fy(t, xu() ? Reflect.construct(e, n || [], Mi(t).constructor) : e.apply(t, n));
}
function fy(t, e) {
  if (e && (jn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hy(t);
}
function hy(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function xu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xu = function() {
    return !!t;
  })();
}
function Mi(t) {
  return Mi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mi(t);
}
function py(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ts(t, e);
}
function ts(t, e) {
  return ts = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ts(t, e);
}
function jt(t, e, n) {
  return e = Su(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Su(t) {
  var e = my(t, "string");
  return jn(e) == "symbol" ? e : e + "";
}
function my(t, e) {
  if (jn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (jn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Vr = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    cy(this, e);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return n = dy(this, e, [].concat(i)), jt(n, "state", {
      isAnimationFinished: !1
    }), jt(n, "handleAnimationEnd", function() {
      n.setState({
        isAnimationFinished: !0
      });
    }), jt(n, "handleAnimationStart", function() {
      n.setState({
        isAnimationFinished: !1
      });
    }), jt(n, "id", $s("recharts-scatter-")), n;
  }
  return py(e, t), uy(e, [{
    key: "renderSymbolsStatically",
    value: function(r) {
      var i = this, o = this.props, s = o.shape, a = o.activeShape, c = o.activeIndex, l = W(this.props, !1);
      return r.map(function(u, d) {
        var f = c === d, h = f ? a : s, p = Ge(Ge({}, l), u);
        return /* @__PURE__ */ C.createElement(ie, mr({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(u?.cx, "-").concat(u?.cy, "-").concat(u?.size, "-").concat(d)
        }, Gi(i.props, u, d), {
          role: "img"
        }), /* @__PURE__ */ C.createElement(ly, mr({
          option: h,
          isActive: f,
          key: "symbol-".concat(d)
        }, p)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var r = this, i = this.props, o = i.points, s = i.isAnimationActive, a = i.animationBegin, c = i.animationDuration, l = i.animationEasing, u = i.animationId, d = this.state.prevPoints;
      return /* @__PURE__ */ C.createElement(Yi, {
        begin: a,
        duration: c,
        isActive: s,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(u),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(f) {
        var h = f.t, p = o.map(function(m, y) {
          var b = d && d[y];
          if (b) {
            var v = Ce(b.cx, m.cx), w = Ce(b.cy, m.cy), S = Ce(b.size, m.size);
            return Ge(Ge({}, m), {}, {
              cx: v(h),
              cy: w(h),
              size: S(h)
            });
          }
          var k = Ce(0, m.size);
          return Ge(Ge({}, m), {}, {
            size: k(h)
          });
        });
        return /* @__PURE__ */ C.createElement(ie, null, r.renderSymbolsStatically(p));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var r = this.props, i = r.points, o = r.isAnimationActive, s = this.state.prevPoints;
      return o && i && i.length && (!s || !qi(s, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var r = this.props.isAnimationActive;
      if (r && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.points, s = i.xAxis, a = i.yAxis, c = i.children, l = Ji(c, _c);
      return l ? l.map(function(u, d) {
        var f = u.props, h = f.direction, p = f.dataKey;
        return /* @__PURE__ */ C.cloneElement(u, {
          key: "".concat(h, "-").concat(p, "-").concat(o[d]),
          data: o,
          xAxis: s,
          yAxis: a,
          layout: h === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(y, b) {
            return {
              x: y.cx,
              y: y.cy,
              value: h === "x" ? +y.node.x : +y.node.y,
              errorVal: De(y, b)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var r = this.props, i = r.points, o = r.line, s = r.lineType, a = r.lineJointType, c = W(this.props, !1), l = W(o, !1), u, d;
      if (s === "joint")
        u = i.map(function(w) {
          return {
            x: w.cx,
            y: w.cy
          };
        });
      else if (s === "fitting") {
        var f = Pf(i), h = f.xmin, p = f.xmax, m = f.a, y = f.b, b = function(S) {
          return m * S + y;
        };
        u = [{
          x: h,
          y: b(h)
        }, {
          x: p,
          y: b(p)
        }];
      }
      var v = Ge(Ge(Ge({}, c), {}, {
        fill: "none",
        stroke: c && c.fill
      }, l), {}, {
        points: u
      });
      return /* @__PURE__ */ C.isValidElement(o) ? d = /* @__PURE__ */ C.cloneElement(o, v) : ge(o) ? d = o(v) : d = /* @__PURE__ */ C.createElement(Rs, mr({}, v, {
        type: a
      })), /* @__PURE__ */ C.createElement(ie, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, d);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.hide, o = r.points, s = r.line, a = r.className, c = r.xAxis, l = r.yAxis, u = r.left, d = r.top, f = r.width, h = r.height, p = r.id, m = r.isAnimationActive;
      if (i || !o || !o.length)
        return null;
      var y = this.state.isAnimationFinished, b = Ee("recharts-scatter", a), v = c && c.allowDataOverflow, w = l && l.allowDataOverflow, S = v || w, k = he(p) ? this.id : p;
      return /* @__PURE__ */ C.createElement(ie, {
        className: b,
        clipPath: S ? "url(#clipPath-".concat(k, ")") : null
      }, v || w ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(k)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: v ? u : u - f / 2,
        y: w ? d : d - h / 2,
        width: v ? f : f * 2,
        height: w ? h : h * 2
      }))) : null, s && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ C.createElement(ie, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!m || y) && hn.renderCallByParent(this.props, o));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, i) {
      return r.animationId !== i.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        prevPoints: i.curPoints
      } : r.points !== i.curPoints ? {
        curPoints: r.points
      } : null;
    }
  }]);
})(Wn);
jt(Vr, "displayName", "Scatter");
jt(Vr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Xi.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
jt(Vr, "getComposedData", function(t) {
  var e = t.xAxis, n = t.yAxis, r = t.zAxis, i = t.item, o = t.displayedData, s = t.xAxisTicks, a = t.yAxisTicks, c = t.offset, l = i.props.tooltipType, u = Ji(i.props.children, js), d = he(e.dataKey) ? i.props.dataKey : e.dataKey, f = he(n.dataKey) ? i.props.dataKey : n.dataKey, h = r && r.dataKey, p = r ? r.range : no.defaultProps.range, m = p && p[0], y = e.scale.bandwidth ? e.scale.bandwidth() : 0, b = n.scale.bandwidth ? n.scale.bandwidth() : 0, v = o.map(function(w, S) {
    var k = De(w, d), O = De(w, f), x = !he(h) && De(w, h) || "-", E = [{
      name: he(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: k,
      payload: w,
      dataKey: d,
      type: l
    }, {
      name: he(n.dataKey) ? i.props.name : n.name || n.dataKey,
      unit: n.unit || "",
      value: O,
      payload: w,
      dataKey: f,
      type: l
    }];
    x !== "-" && E.push({
      name: r.name || r.dataKey,
      unit: r.unit || "",
      value: x,
      payload: w,
      dataKey: h,
      type: l
    });
    var N = ki({
      axis: e,
      ticks: s,
      bandSize: y,
      entry: w,
      index: S,
      dataKey: d
    }), I = ki({
      axis: n,
      ticks: a,
      bandSize: b,
      entry: w,
      index: S,
      dataKey: f
    }), M = x !== "-" ? r.scale(x) : m, T = Math.sqrt(Math.max(M, 0) / Math.PI);
    return Ge(Ge({}, w), {}, {
      cx: N,
      cy: I,
      x: N - T,
      y: I - T,
      xAxis: e,
      yAxis: n,
      zAxis: r,
      width: 2 * T,
      height: 2 * T,
      size: M,
      node: {
        x: k,
        y: O,
        z: x
      },
      tooltipPayload: E,
      tooltipPosition: {
        x: N,
        y: I
      },
      payload: w
    }, u && u[S] && u[S].props);
  });
  return Ge({
    points: v
  }, c);
});
var gy = Lr({
  chartName: "LineChart",
  GraphicalChild: mn,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Wt
  }, {
    axisType: "yAxis",
    AxisComp: _t
  }],
  formatAxisMap: Fs
}), ku = Lr({
  chartName: "BarChart",
  GraphicalChild: Rr,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Wt
  }, {
    axisType: "yAxis",
    AxisComp: _t
  }],
  formatAxisMap: Fs
}), yy = Lr({
  chartName: "PieChart",
  GraphicalChild: Dt,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Gn
  }, {
    axisType: "radiusAxis",
    AxisComp: Kn
  }],
  formatAxisMap: Tc,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), by = Lr({
  chartName: "RadarChart",
  GraphicalChild: Br,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Gn
  }, {
    axisType: "radiusAxis",
    AxisComp: Kn
  }],
  formatAxisMap: Tc,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), vy = Lr({
  chartName: "ComposedChart",
  GraphicalChild: [mn, Nc, Rr, Vr],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Wt
  }, {
    axisType: "yAxis",
    AxisComp: _t
  }, {
    axisType: "zAxis",
    AxisComp: no
  }],
  formatAxisMap: Fs
});
const wy = Ds({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), xy = { light: "", dark: ".dark" }, Au = U.createContext(null);
function Cu() {
  const t = U.useContext(Au);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
const Sy = ({
  id: t,
  className: e,
  children: n,
  aspect: r,
  config: i,
  ...o
}, s) => {
  const a = U.useId(), c = `chart-${t || a.replace(/:/g, "")}`, l = U.useRef(null), [u, d] = ue(), f = Ps(() => new ResizeObserver(
    (h) => d(h[0].contentRect.height)
  ), []);
  return mc(() => {
    const h = s && "current" in s ? s.current : l.current;
    return h && f.observe(h.parentElement), () => {
      f.disconnect();
    };
  }, [f, s, l]), /* @__PURE__ */ g(Au.Provider, { value: { config: i }, children: /* @__PURE__ */ A(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": c,
      ref: s || l,
      className: G(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        r ? wy({ aspect: r }) : "aspect-auto h-full",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ g(ky, { id: c, config: i }),
        /* @__PURE__ */ g(
          If,
          {
            height: u,
            className: "overflow-visible",
            children: n
          }
        )
      ]
    }
  ) });
}, Ut = U.forwardRef(Sy);
Ut.displayName = "Chart";
const ky = ({ id: t, config: e }) => {
  const n = Object.entries(e).filter(([i, o]) => o.theme || o.color);
  if (!n.length)
    return null;
  const r = Object.entries(xy).map(
    ([i, o]) => `
${o} [data-chart=${t}] {
${n.map(([s, a]) => {
      const c = a.theme?.[i] || a.color;
      return c ? `  --color-${s}: ${c};` : null;
    }).join(`
`)}
}
`
  );
  return /* @__PURE__ */ g(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Lf.sanitize(r.join(`
`))
      }
    }
  );
}, gn = Df, Kt = U.forwardRef(
  ({
    active: t,
    payload: e,
    className: n,
    indicator: r = "dot",
    hideLabel: i = !1,
    hideIndicator: o = !1,
    label: s,
    labelFormatter: a,
    labelClassName: c,
    formatter: l,
    yAxisFormatter: u,
    color: d,
    nameKey: f,
    labelKey: h
  }, p) => {
    const { config: m } = Cu(), y = U.useMemo(() => {
      if (i || !e?.length)
        return null;
      const [v] = e, w = `${h || v.dataKey || v.name || "value"}`, S = ns(m, v, w), k = !h && typeof s == "string" ? m[s]?.label || s : S?.label;
      return a ? /* @__PURE__ */ g("div", { className: G("font-medium", c), children: a(k, e) }) : k ? /* @__PURE__ */ g("div", { className: G("font-medium", c), children: k }) : null;
    }, [
      s,
      a,
      e,
      i,
      c,
      m,
      h
    ]);
    if (!t || !e?.length)
      return null;
    const b = e.length === 1 && r !== "dot";
    return /* @__PURE__ */ A(
      "div",
      {
        ref: p,
        className: G(
          "grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary px-3 py-2.5 text-base shadow-lg backdrop-blur",
          n
        ),
        children: [
          b ? null : y,
          /* @__PURE__ */ g("div", { className: "grid gap-2", children: e.map((v, w) => {
            const S = `${f || v.name || v.dataKey || "value"}`, k = ns(m, v, S), O = d || v.payload.fill || v.color;
            return /* @__PURE__ */ g(
              "div",
              {
                className: G(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  r === "dot" && "items-center"
                ),
                children: l && v?.value !== void 0 && v.name ? l(v.value, v.name, v, w, v.payload) : /* @__PURE__ */ A(tn, { children: [
                  k?.icon ? /* @__PURE__ */ g(k.icon, {}) : !o && /* @__PURE__ */ g(
                    "div",
                    {
                      className: G(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": b && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": O,
                        "--color-border": O
                      }
                    }
                  ),
                  /* @__PURE__ */ A(
                    "div",
                    {
                      className: G(
                        "flex flex-1 justify-between text-sm leading-none",
                        b ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ A("div", { className: "grid gap-2", children: [
                          b ? y : null,
                          /* @__PURE__ */ g("span", { className: "pr-2 text-f1-foreground", children: k?.label || v.name })
                        ] }),
                        v.value && /* @__PURE__ */ g("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: u ? u(String(v.value)) : v.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              v.dataKey
            );
          }) })
        ]
      }
    );
  }
);
Kt.displayName = "ChartTooltip";
const Hr = Mf, Wr = U.forwardRef(
  ({
    className: t,
    hideIcon: e = !1,
    payload: n,
    verticalAlign: r = "bottom",
    nameKey: i,
    hiddenKey: o,
    leftShift: s = 0
  }, a) => {
    const { config: c } = Cu();
    return n?.length ? /* @__PURE__ */ g(
      "div",
      {
        ref: a,
        className: G(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          r === "top" ? "pb-2" : "pt-2",
          t
        ),
        style: { marginLeft: s },
        children: n.map((l) => {
          const u = `${i || l.dataKey || "value"}`, d = ns(
            c,
            l,
            u,
            o
          );
          return /* @__PURE__ */ A(
            "div",
            {
              className: G(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                d?.icon && !e ? /* @__PURE__ */ g(d.icon, {}) : d && /* @__PURE__ */ g(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: {
                      backgroundColor: l.color
                    }
                  }
                ),
                /* @__PURE__ */ g("span", { className: "text-f1-foreground", children: d?.label })
              ]
            },
            JSON.stringify(l)
          );
        })
      }
    ) : null;
  }
);
Wr.displayName = "ChartLegend";
function ns(t, e, n, r) {
  if (typeof e != "object" || e === null)
    return;
  const i = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let o = n;
  if (n in e && typeof e[n] == "string" ? o = e[n] : i && n in i && typeof i[n] == "string" ? o = i[n] : "dataKey" in e && typeof e.dataKey == "string" && (o = e.dataKey), !(r && r === o))
    return o in t ? t[o] : t[n];
}
function qn(t, e = "12px Inter, sans-serif") {
  const r = document.createElement("canvas").getContext("2d");
  return r ? (r.font = e, r.measureText(t).width) : 0;
}
const ro = (t) => ({
  dataKey: "x",
  domain: t?.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: t?.ticks,
  tickCount: t?.tickCount,
  tickFormatter: t?.tickFormatter
}), kr = (t) => ({
  tickLine: !1,
  axisLine: !1,
  domain: t?.domain,
  tickMargin: 8,
  ticks: t?.ticks,
  tickCount: t?.tickCount,
  tickFormatter: t?.tickFormatter
}), Ur = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), Kr = (t = !1) => ({
  cursor: !0,
  offset: t ? 0 : 20,
  position: { y: t ? void 0 : 0, x: t ? 120 : void 0 },
  animationDuration: 100,
  isAnimationActive: !0
});
function Mt(t) {
  return Pt(t);
}
function io(t) {
  return t.map((e) => ({ x: e.label, ...e.values }));
}
const Ay = ({
  index: t,
  visibleTicksCount: e,
  payload: n,
  tickFormatter: r,
  ...i
}) => {
  const o = t === 0, s = t === e - 1;
  return /* @__PURE__ */ g(Ki, { ...i, textAnchor: o ? "start" : s ? "end" : "middle", children: r?.(n.value, n.index) ?? n.value });
}, Cy = ({
  data: t,
  dataConfig: e,
  xAxis: n,
  yAxis: r,
  canBeBlurred: i,
  blurArea: o,
  lineType: s = "monotoneX",
  aspect: a,
  marginTop: c = 0
}, l) => {
  const { enabled: u } = Rf(), d = Object.keys(e), f = Ko(12), h = io(t), p = Math.max(
    ...h.flatMap(
      (w) => d.map(
        (S) => qn(
          r?.tickFormatter ? r.tickFormatter(`${w[S]}`) : `${w[S]}`
        )
      )
    )
  ), m = r?.width ?? p + 20, y = !r?.hide, b = !n?.hide, v = !i || !u;
  return /* @__PURE__ */ g(Ut, { config: e, ref: l, aspect: a, children: /* @__PURE__ */ A(
    $f,
    {
      accessibilityLayer: !0,
      data: h,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: c
      },
      children: [
        /* @__PURE__ */ A("defs", { children: [
          /* @__PURE__ */ A(
            "linearGradient",
            {
              id: `${f}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${y ? m : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                (o === "l" || o === "lr") && /* @__PURE__ */ A(tn, { children: [
                  /* @__PURE__ */ g("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                  /* @__PURE__ */ g("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ g("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" })
                ] }),
                (o === "r" || o === "lr") && /* @__PURE__ */ A(tn, { children: [
                  /* @__PURE__ */ g("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ g("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ g("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
                ] }),
                !o && /* @__PURE__ */ A(tn, { children: [
                  /* @__PURE__ */ g("stop", { offset: "0%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ g("stop", { offset: "100%", stopColor: "white", stopOpacity: "1" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ g(
            "mask",
            {
              id: `${f}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ g(
                "rect",
                {
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                  fill: `url(#${f}-fadeGradient)`
                }
              )
            }
          ),
          d.map((w, S) => /* @__PURE__ */ A(
            "linearGradient",
            {
              id: `fill${String(w)}-${f}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ g(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: e[w].color ? Oe(e[w].color) : _e(S),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ g(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: e[w].color ? Oe(e[w].color) : _e(S),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            S
          ))
        ] }),
        /* @__PURE__ */ g(
          Yn,
          {
            ...Ur(),
            mask: `url(#${f}-transparent-edges)`
          }
        ),
        b && /* @__PURE__ */ g(
          Wt,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: n?.tickFormatter,
            ticks: n?.ticks,
            domain: n?.domain,
            interval: 0,
            tick: Ay
          }
        ),
        y && /* @__PURE__ */ g(
          _t,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: r?.tickCount,
            tickFormatter: i && u ? () => "**" : r?.tickFormatter,
            ticks: r?.ticks,
            domain: r?.domain,
            width: m
          }
        ),
        v && /* @__PURE__ */ g(
          gn,
          {
            ...Kr(),
            content: /* @__PURE__ */ g(
              Kt,
              {
                indicator: "dot",
                yAxisFormatter: r?.tickFormatter
              }
            )
          }
        ),
        d.map((w, S) => /* @__PURE__ */ g(
          Nc,
          {
            isAnimationActive: !1,
            dataKey: w,
            type: s,
            mask: `url(#${f}-transparent-edges)`,
            fill: `url(#fill${w}-${f})`,
            fillOpacity: e[w].dashed ? 0 : 0.4,
            stroke: e[w].color ? Oe(e[w].color) : _e(S),
            strokeWidth: 1.5,
            strokeDasharray: e[w].dashed ? "4 4" : void 0
          },
          w
        )),
        Object.keys(e).length > 1 && /* @__PURE__ */ g(
          Hr,
          {
            className: "flex justify-start",
            content: /* @__PURE__ */ g(Wr, {})
          }
        )
      ]
    }
  ) });
}, Ey = Mt(Cy), Oy = ({
  dataConfig: t,
  data: e,
  xAxis: n,
  yAxis: r = { hide: !0 },
  label: i = !1,
  type: o = "simple",
  hideTooltip: s = !1,
  hideGrid: a = !1,
  aspect: c,
  legend: l,
  showValueUnderLabel: u = !1,
  highlightLastBar: d = !1,
  onClick: f
}, h) => {
  const p = Object.keys(t), m = io(e).map((b, v, w) => d && p.length === 1 && !t[p[0]]?.color ? {
    ...b,
    fill: v === w.length - 1 ? _e(v) : _e(v, 0.5)
  } : b), y = Math.max(
    ...m.flatMap(
      (b) => p.map(
        (v) => qn(
          r?.tickFormatter ? r.tickFormatter(`${b[v]}`) : `${b[v]}`
        )
      )
    )
  );
  return /* @__PURE__ */ g(Ut, { config: t, ref: h, aspect: c, children: /* @__PURE__ */ A(
    ku,
    {
      accessibilityLayer: !0,
      data: m,
      margin: {
        left: r && !r.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: u ? 24 : 12
      },
      stackOffset: o === "stacked-by-sign" ? "sign" : void 0,
      onClick: (b) => {
        if (!f || !b.activeLabel || !b.activePayload)
          return;
        const v = {
          label: b.activeLabel,
          values: {}
        };
        for (const w of b.activePayload)
          v.values[w.name] = w.value;
        f(v);
      },
      children: [
        !s && /* @__PURE__ */ g(
          gn,
          {
            ...Kr(),
            content: /* @__PURE__ */ g(Kt, { yAxisFormatter: r.tickFormatter })
          }
        ),
        !a && /* @__PURE__ */ g(Yn, { ...Ur() }),
        /* @__PURE__ */ g(
          _t,
          {
            ...kr(r),
            tick: !0,
            width: r.width ?? y + 20,
            hide: r.hide
          }
        ),
        /* @__PURE__ */ g(
          Wt,
          {
            ...ro(n),
            hide: n?.hide,
            tick: u ? (b) => {
              const { x: v, y: w, payload: S } = b, k = e.find((E) => E.label === S.value)?.values || "", O = Object.keys(k).length === 1 ? Object.values(k)?.[0] : void 0, x = O !== void 0 && r.tickFormatter ? r.tickFormatter(`${O}`) : O.toLocaleString();
              return /* @__PURE__ */ A("g", { transform: `translate(${v},${w})`, children: [
                /* @__PURE__ */ g(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: S.value
                  }
                ),
                !!O && /* @__PURE__ */ g(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: x
                  }
                )
              ] });
            } : void 0
          }
        ),
        p.map((b, v) => /* @__PURE__ */ g(
          Rr,
          {
            isAnimationActive: !1,
            dataKey: b,
            stackId: o === "stacked" || o === "stacked-by-sign" ? "stack" : void 0,
            fill: d ? ((w) => w.fill) : t[b].color ? Oe(t[b].color) : _e(v),
            radius: o === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ g(
              hn,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${b}`
            )
          },
          `bar-${b}`
        )),
        l && /* @__PURE__ */ g(
          Hr,
          {
            content: /* @__PURE__ */ g(Wr, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, _y = Mt(Oy), Ty = ({ data: t, legend: e = !0, hideTooltip: n = !1 }, r) => {
  const i = t.reduce((o, s) => o + s.value, 0);
  return /* @__PURE__ */ A(jf, { children: [
    /* @__PURE__ */ g("div", { className: "w-full", ref: r, children: /* @__PURE__ */ g("div", { className: "flex h-2 gap-1 overflow-hidden", children: t.map((o, s) => {
      const a = o.value / i * 100, c = o.color ? Oe(o.color) : _e(s), l = (u) => {
        const d = u / i * 100;
        return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
      };
      return a === 0 ? null : /* @__PURE__ */ A(Ff, { children: [
        /* @__PURE__ */ g(
          zf,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${a}%` },
            title: o.name,
            asChild: !0,
            children: /* @__PURE__ */ g(
              "div",
              {
                className: "h-full w-full",
                style: { backgroundColor: c },
                role: "img",
                title: o.name,
                tabIndex: 0
              }
            )
          }
        ),
        !n && /* @__PURE__ */ A(Bf, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ g(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: c }
            }
          ),
          /* @__PURE__ */ g("span", { className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary", children: o.name }),
          /* @__PURE__ */ A("span", { className: "font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground", children: [
            o.value,
            " (",
            l(o.value),
            "%)"
          ] })
        ] })
      ] }, o.name);
    }) }) }),
    e && /* @__PURE__ */ g(
      "div",
      {
        className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: t.map((o, s) => {
          const a = o.color ? Oe(o.color) : _e(s);
          return /* @__PURE__ */ A(
            "div",
            {
              className: "flex items-center gap-1.5",
              role: "listitem",
              children: [
                /* @__PURE__ */ g(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: { backgroundColor: a }
                  }
                ),
                /* @__PURE__ */ g("span", { className: "text-f1-foreground", children: o.name })
              ]
            },
            o.name
          );
        })
      }
    )
  ] });
}, Ny = Mt(Ty), Py = (t) => {
  const e = (n) => {
    const { cx: r, cy: i, fill: o, payload: s } = n, a = () => {
      if (!s) return "-";
      if (s[t] !== void 0)
        return s[t];
      for (const [c, l] of Object.entries(s))
        if (typeof l == "number" && c !== "x")
          return l;
      return "-";
    };
    return /* @__PURE__ */ g(
      "circle",
      {
        cx: r,
        cy: i,
        r: 4,
        fill: o,
        stroke: "white",
        strokeWidth: 2,
        ref: (c) => {
          c?.parentElement && c.parentElement.setAttribute(
            "aria-label",
            `Data point: ${a()}`
          );
        }
      }
    );
  };
  return e.displayName = `Scatter-${t}`, e;
}, Dy = ({
  dataConfig: t,
  data: e,
  xAxis: n,
  yAxis: r = { hide: !0 },
  label: i = !1,
  hideTooltip: o = !1,
  hideGrid: s = !1,
  aspect: a,
  legend: c,
  showValueUnderLabel: l = !1,
  bar: u,
  line: d,
  scatter: f,
  onClick: h
}, p) => {
  const m = io(e), y = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], b = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], v = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], w = [
    ...y,
    ...b,
    ...v
  ], S = Math.max(
    ...m.flatMap(
      (x) => w.map(
        (E) => qn(
          r?.tickFormatter ? r.tickFormatter(`${x[E]}`) : `${x[E]}`
        )
      )
    )
  ), k = [u, d, f].filter(
    (x) => x?.axisPosition === "left"
  ), O = [u, d, f].filter(
    (x) => x?.axisPosition === "right"
  );
  return /* @__PURE__ */ g(Ut, { config: t, ref: p, aspect: a, children: /* @__PURE__ */ A(
    vy,
    {
      accessibilityLayer: !0,
      data: m,
      margin: {
        left: r && !r.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: l ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (x) => {
        if (!h || !x.activeLabel || !x.activePayload)
          return;
        const E = {
          label: x.activeLabel,
          values: {}
        };
        for (const N of x.activePayload)
          E.values[N.name] = N.value;
        h(E);
      },
      children: [
        !o && /* @__PURE__ */ g(
          gn,
          {
            ...Kr(),
            content: /* @__PURE__ */ g(Kt, { yAxisFormatter: r.tickFormatter })
          }
        ),
        !s && /* @__PURE__ */ g(Yn, { ...Ur() }),
        k.length > 0 && /* @__PURE__ */ g(
          _t,
          {
            ...kr(r),
            tick: !0,
            width: r.width ?? S + 20 + (O.length > 0 && k[0]?.axisLabel ? 20 : 0),
            hide: r.hide || k.some((x) => x?.hideAxis),
            label: k[0]?.axisLabel ? {
              value: k[0].axisLabel,
              angle: -90,
              position: "insideLeft"
            } : void 0
          }
        ),
        O.length > 0 && /* @__PURE__ */ g(
          _t,
          {
            ...kr(r),
            yAxisId: "right",
            orientation: "right",
            tick: !0,
            width: r.width ?? S + 20 + (k.length > 0 && O[0]?.axisLabel ? 20 : 0),
            hide: r.hide || O.some((x) => x?.hideAxis),
            label: O[0]?.axisLabel ? {
              value: O[0].axisLabel,
              angle: 90,
              position: "insideRight"
            } : void 0
          }
        ),
        /* @__PURE__ */ g(
          Wt,
          {
            ...ro(n),
            hide: n?.hide,
            tick: l ? (x) => {
              const { x: E, y: N, payload: I } = x, M = e.find((_) => _.label === I.value)?.values || "", T = Object.keys(M).length === 1 ? Object.values(M)?.[0] : void 0, P = T !== void 0 && r.tickFormatter ? r.tickFormatter(`${T}`) : T.toLocaleString();
              return /* @__PURE__ */ A("g", { transform: `translate(${E},${N})`, children: [
                /* @__PURE__ */ g(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: I.value
                  }
                ),
                !!T && /* @__PURE__ */ g(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: P
                  }
                )
              ] });
            } : void 0
          }
        ),
        y.map((x, E) => /* @__PURE__ */ g(
          Rr,
          {
            isAnimationActive: !1,
            dataKey: String(x),
            fill: t[x].color ? Oe(t[x].color) : _e(E),
            radius: 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ g(
              hn,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${String(x)}`
            )
          },
          `bar-${String(x)}`
        )),
        b.map((x, E) => /* @__PURE__ */ g(
          mn,
          {
            type: d?.lineType ?? "natural",
            dataKey: String(x),
            stroke: t[x].color ? Oe(t[x].color) : _e(y.length + E),
            strokeWidth: 2,
            dot: d?.dot ?? !1,
            isAnimationActive: !1,
            yAxisId: d?.axisPosition === "right" ? "right" : void 0
          },
          `line-${String(x)}`
        )),
        v.map((x, E) => /* @__PURE__ */ g(
          Vr,
          {
            dataKey: String(x),
            fill: t[x].color ? Oe(t[x].color) : _e(
              y.length + b.length + E
            ),
            r: 4,
            isAnimationActive: !1,
            yAxisId: f?.axisPosition === "right" ? "right" : void 0,
            shape: Py(String(x))
          },
          `scatter-${String(x)}`
        )),
        c && /* @__PURE__ */ g(
          Hr,
          {
            content: /* @__PURE__ */ g(Wr, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, My = Mt(Dy), Iy = ({
  data: t,
  dataConfig: e,
  xAxis: n,
  yAxis: r = { hide: !0 },
  lineType: i = "natural",
  aspect: o,
  hideTooltip: s = !1,
  hideGrid: a = !1
}, c) => {
  const l = Object.keys(e), u = io(t), d = Math.max(
    ...u.flatMap(
      (f) => l.map(
        (h) => qn(
          r?.tickFormatter ? r.tickFormatter(`${f[h]}`) : `${f[h]}`
        )
      )
    )
  );
  return /* @__PURE__ */ g(Ut, { config: e, ref: c, aspect: o, children: /* @__PURE__ */ A(
    gy,
    {
      accessibilityLayer: !0,
      data: u,
      margin: { left: r && !r.hide ? 0 : 12, right: 12 },
      children: [
        !a && /* @__PURE__ */ g(Yn, { ...Ur() }),
        !n?.hide && /* @__PURE__ */ g(Wt, { ...ro(n) }),
        !r?.hide && /* @__PURE__ */ g(
          _t,
          {
            ...kr(r),
            width: r.width ?? d + 20
          }
        ),
        !s && /* @__PURE__ */ g(
          gn,
          {
            ...Kr(),
            content: /* @__PURE__ */ g(Kt, { yAxisFormatter: r?.tickFormatter })
          }
        ),
        l.map((f, h) => /* @__PURE__ */ g(
          mn,
          {
            dataKey: f,
            isAnimationActive: !1,
            type: i,
            stroke: e[f].color ? Oe(e[f].color) : _e(h),
            strokeWidth: 1.5,
            strokeDasharray: e[f].dashed ? "4 4" : void 0,
            dot: !1
          },
          f
        ))
      ]
    }
  ) });
}, Ly = Mt(Iy), Ry = ({ data: t, dataConfig: e, overview: n, aspect: r, tickFormatter: i }, o) => {
  const s = t.map((l, u) => ({
    ...l,
    fill: e[l.label]?.color ? Oe(e[l.label].color) : _e(u)
  })), c = t.map((l) => l.value).reduce((l, u) => l + u);
  return c === 0 && s.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), /* @__PURE__ */ g(
    Ut,
    {
      config: e,
      ref: o,
      aspect: r,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ A(yy, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        c !== 0 && /* @__PURE__ */ g(
          gn,
          {
            isAnimationActive: !1,
            content: /* @__PURE__ */ g(Kt, { yAxisFormatter: i })
          }
        ),
        /* @__PURE__ */ A(
          Dt,
          {
            isAnimationActive: !1,
            nameKey: "label",
            legendType: "circle",
            dataKey: "value",
            data: s,
            innerRadius: 120,
            outerRadius: 135,
            paddingAngle: 2.5,
            children: [
              s.map((l, u) => {
                const d = i ? i(String(l.value)) : l.value;
                return /* @__PURE__ */ g(
                  js,
                  {
                    fill: l.fill,
                    "aria-label": `${l.label}: ${d} (${(l.value / c * 100).toFixed(0)}%)`
                  },
                  `cell-${u}`
                );
              }),
              /* @__PURE__ */ g(
                Is,
                {
                  content: ({ viewBox: l }) => {
                    if (l && "cx" in l && "cy" in l)
                      return /* @__PURE__ */ A(
                        "text",
                        {
                          x: l.cx,
                          y: l.cy,
                          textAnchor: "middle",
                          dominantBaseline: "middle",
                          children: [
                            /* @__PURE__ */ g(
                              "tspan",
                              {
                                x: l.cx,
                                y: (l.cy || 0) + 8,
                                className: "fill-f1-foreground text-4xl font-semibold",
                                children: n?.number ? i ? i(String(n.number)) : n.number : null
                              }
                            ),
                            /* @__PURE__ */ g(
                              "tspan",
                              {
                                x: l.cx,
                                y: (l.cy || 0) - 16,
                                className: "fill-f1-foreground-secondary",
                                children: n?.label
                              }
                            )
                          ]
                        }
                      );
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ g(
          Hr,
          {
            content: /* @__PURE__ */ g(Wr, { nameKey: "label", hiddenKey: "-" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, $y = Mt(Ry), jy = ({ value: t, max: e = 100, label: n, color: r }, i) => {
  const o = r ? Oe(r) : Oe("categorical-1"), s = t / e * 100;
  return /* @__PURE__ */ A("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ g("div", { className: "flex-grow", children: /* @__PURE__ */ g(
      Vf,
      {
        color: o,
        value: s,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": t,
        "aria-label": `${s.toFixed(1)}%`
      }
    ) }),
    n && /* @__PURE__ */ g("div", { className: "flex-shrink-0 text-sm font-medium", children: n })
  ] });
}, Fy = Mt(jy), zy = ({
  series: t,
  hiddenKeys: e,
  onToggle: n
}) => /* @__PURE__ */ g("div", { className: "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", children: t.map(({ key: r, color: i, label: o }) => {
  const s = e.includes(r);
  return /* @__PURE__ */ A(
    "button",
    {
      type: "button",
      className: G(
        "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground",
        Hf(),
        s ? "opacity-40" : "opacity-100"
      ),
      "aria-label": typeof o == "string" ? o : void 0,
      "aria-pressed": !s,
      onClick: () => n(r),
      children: [
        /* @__PURE__ */ g(
          "span",
          {
            className: "h-2 w-2 shrink-0 rounded-full",
            style: { backgroundColor: i }
          }
        ),
        /* @__PURE__ */ g("span", { className: "text-f1-foreground", children: o })
      ]
    },
    r
  );
}) }), By = ({
  data: t,
  dataConfig: e,
  scaleMin: n,
  scaleMax: r,
  aspect: i,
  defaultHiddenSeries: o,
  dataTestId: s
}, a) => {
  const [c, l] = ue(
    o ?? []
  ), u = Object.entries(e).map(([h, p], m) => ({
    key: h,
    color: p.color ? Oe(p.color) : _e(m),
    label: p.label
  })), d = (h) => {
    l((p) => p.includes(h) ? p.filter((m) => m !== h) : p.length >= u.length - 1 ? p : [...p, h]);
  }, f = t.map((h) => ({
    subject: h.label,
    ...h.values
  }));
  return /* @__PURE__ */ g(Pc, { dataTestId: s, children: /* @__PURE__ */ g(
    Ut,
    {
      config: e,
      ref: a,
      aspect: i,
      "data-chromatic": "ignore",
      children: /* @__PURE__ */ A(by, { accessibilityLayer: !0, data: f, children: [
        /* @__PURE__ */ g(
          gn,
          {
            cursor: !0,
            content: /* @__PURE__ */ g(Kt, { indicator: "dot" })
          }
        ),
        /* @__PURE__ */ g(su, { gridType: "circle" }),
        /* @__PURE__ */ g(Gn, { dataKey: "subject" }),
        /* @__PURE__ */ g(
          Kn,
          {
            angle: 90,
            type: "number",
            domain: [n ?? "dataMin", r ?? "dataMax"]
          }
        ),
        u.filter(({ key: h }) => !c.includes(h)).map(({ key: h, color: p, label: m }) => /* @__PURE__ */ g(
          Br,
          {
            dataKey: h,
            fill: p,
            stroke: p,
            strokeWidth: 1.5,
            fillOpacity: 0.3,
            label: m,
            isAnimationActive: !1
          },
          h
        )),
        u.length > 1 && /* @__PURE__ */ g(
          Hr,
          {
            iconType: "star",
            content: /* @__PURE__ */ g(
              zy,
              {
                series: u,
                hiddenKeys: c,
                onToggle: d
              }
            )
          }
        )
      ] })
    }
  ) });
}, Vy = Mt(By);
function Hy(t) {
  return t.map((e) => ({ x: e.label, ...e.values }));
}
const Wy = (t) => {
  const e = Wf.cloneDeep(t);
  let n = "", r = 0;
  return e.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([o, s]) => {
        r < s && (r = s, n = o);
      }
    );
  }), n;
}, Uy = ({
  dataConfig: t,
  data: e,
  xAxis: n = { hide: !0 },
  yAxis: r,
  label: i = !1,
  aspect: o,
  hideTooltip: s = !1,
  hideGrid: a = !1,
  showRatio: c = !1,
  valueFormatter: l
}, u) => {
  const d = Object.keys(t), f = Hy(e), h = Math.max(
    ...f.map((b) => qn(`${b.x}`))
  ), p = d.reduce(
    (b, v) => (b[v] = e.reduce(
      (w, S) => w + S.values[v],
      0
    ), b),
    {}
  ), m = {
    ...ro(n),
    type: "number",
    dataKey: Wy(f)
  }, y = {
    ...kr(r),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ g(Ut, { config: t, ref: u, aspect: o, children: /* @__PURE__ */ A(
    ku,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: f,
      margin: {
        left: r && !r.hide ? 8 : 12,
        right: i || c ? 100 : 0
      },
      children: [
        !s && /* @__PURE__ */ g(
          gn,
          {
            ...Kr(!0),
            content: /* @__PURE__ */ g(Kt, { yAxisFormatter: r?.tickFormatter })
          }
        ),
        !a && /* @__PURE__ */ g(
          Yn,
          {
            ...Ur(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ g(Wt, { ...m, hide: n?.hide }),
        /* @__PURE__ */ g(
          _t,
          {
            ...y,
            hide: r?.hide,
            width: r?.width ?? h + 20
          }
        ),
        d.map((b, v) => /* @__PURE__ */ g(tn, { children: /* @__PURE__ */ g(
          Rr,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: b,
            fill: t[b].color ? Oe(t[b].color) : _e(v),
            radius: 4,
            maxBarSize: 24,
            children: (i || c) && /* @__PURE__ */ g(
              hn,
              {
                position: "right",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12,
                formatter: l,
                content: c ? /* @__PURE__ */ g(
                  Gy,
                  {
                    valueFormatter: l,
                    total: p[b],
                    showLabel: i
                  }
                ) : void 0
              },
              `label-{${b}}`
            )
          },
          `bar-${b}`
        ) }))
      ]
    }
  ) });
}, Ky = Mt(Uy), Gy = ({
  viewBox: t,
  offset: e = 0,
  value: n,
  valueFormatter: r,
  total: i,
  showLabel: o
}) => {
  const { x: s = 0, y: a = 0, width: c = 0, height: l = 0 } = t, u = s + c + e, d = a + l / 2, f = r ? r(n) : n, h = qn(`${f}`), p = i > 0 ? Math.round(Number(n) / i * 100) : 0;
  return /* @__PURE__ */ A("g", { transform: `translate(${u},${d + 4})`, children: [
    o && /* @__PURE__ */ g(
      "text",
      {
        x: 0,
        textAnchor: "start",
        className: "fill-f1-foreground-secondary text-sm font-medium",
        children: f
      }
    ),
    /* @__PURE__ */ A(
      "text",
      {
        x: o ? h + 8 : 0,
        textAnchor: "start",
        className: "fill-f1-foreground text-sm font-medium",
        children: [
          p,
          "%"
        ]
      }
    )
  ] });
}, X1 = Ne(
  mt({ name: "AreaChart", type: "info" }, Ey)
), J1 = Ne(
  mt({ name: "BarChart", type: "info" }, _y)
), Z1 = Ne(
  mt(
    { name: "CategoryBarChart", type: "info" },
    Ny
  )
), Q1 = Ne(
  mt({ name: "LineChart", type: "info" }, Ly)
), eS = Ne(
  mt({ name: "PieChart", type: "info" }, $y)
), tS = Ne(
  mt(
    { name: "VerticalBarChart", type: "info" },
    Ky
  )
), nS = Ne(
  mt({ name: "ProgressBarChart", type: "info" }, Fy)
), rS = Ne(
  mt({ name: "ComboChart", type: "info" }, My)
), iS = Ne(
  mt({ name: "RadarChart", type: "info" }, Vy)
), No = [
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
], Yy = (t, e) => {
  const n = t.className?.includes("text-") && !t.className?.includes("text-current") || t.style?.color !== void 0, r = gc();
  return /* @__PURE__ */ A(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: e,
      ...t,
      children: [
        /* @__PURE__ */ g("defs", { children: No.map((i) => /* @__PURE__ */ g("clipPath", { id: `${r}-${i.id}`, children: /* @__PURE__ */ g("path", { d: i.path }) }, i.id)) }),
        n ? No.map((i) => /* @__PURE__ */ g(
          "path",
          {
            d: i.path,
            fill: "currentColor",
            vectorEffect: "non-scaling-stroke"
          },
          i.id
        )) : No.map((i) => /* @__PURE__ */ g(
          "foreignObject",
          {
            x: "0",
            y: "0",
            width: "24",
            height: "24",
            clipPath: `url(#${r}-${i.id})`,
            children: /* @__PURE__ */ g(
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
}, qy = Pt(Yy);
function Xy({
  title: t,
  description: e,
  onClick: n,
  onClose: r,
  isVisible: i,
  dismissable: o = !1,
  trackVisibility: s,
  type: a,
  ...c
}) {
  const [l, u] = ue(i);
  it(() => {
    u(i), s && s(i);
  }, [i, s]);
  const d = () => {
    u(!1), r && r();
  }, f = () => a === "one-campaign" ? {
    background: "linear-gradient(98.39deg, rgba(249, 115, 22, 0.49) 0%, rgba(229, 25, 67, 0.49) 20%, rgba(229, 25, 67, 0.49) 49.97%, rgba(229, 25, 67, 0.49) 80%, rgba(164, 165, 222, 0.49) 100%)",
    borderRadius: "12px",
    padding: "1px"
  } : {}, h = () => a === "one-campaign" ? {
    background: "#fef7f8",
    borderRadius: "11px"
  } : {}, p = () => a === "one-campaign" ? "flex h-auto w-auto cursor-pointer flex-row gap-2 p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary" : "flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary";
  return l && /* @__PURE__ */ g("div", { children: /* @__PURE__ */ g("div", { className: "p-2", children: /* @__PURE__ */ g("div", { style: f(), children: /* @__PURE__ */ A(
    "div",
    {
      className: p(),
      style: h(),
      onClick: n,
      children: [
        /* @__PURE__ */ A(tn, { children: [
          a === "one-campaign" ? /* @__PURE__ */ g("div", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center", children: /* @__PURE__ */ g(on, { icon: qy, size: "lg", className: "!h-8 !w-8" }) }) : /* @__PURE__ */ g("div", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center", children: /* @__PURE__ */ g(
            Uf,
            {
              module: c.module,
              size: "lg"
            }
          ) }),
          /* @__PURE__ */ g("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ A("div", { children: [
            /* @__PURE__ */ g("h3", { className: "text-lg font-medium", children: t }),
            /* @__PURE__ */ g("p", { className: "text-f1-foreground-secondary", children: e })
          ] }) })
        ] }),
        o && /* @__PURE__ */ g("div", { className: "h-6 w-6", children: /* @__PURE__ */ g(
          ce,
          {
            variant: "ghost",
            icon: zs,
            size: "sm",
            hideLabel: !0,
            onClick: d,
            label: "Close"
          }
        ) })
      ]
    }
  ) }) }) });
}
const oS = Ne(Xy), sS = Kf, aS = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => ke.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => ke.day.toRange(So(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => ke.day.toRange({
      from: So(/* @__PURE__ */ new Date(), 7),
      to: /* @__PURE__ */ new Date()
    })
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => ke.week.toRange(/* @__PURE__ */ new Date())
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => ke.week.toRange(So(/* @__PURE__ */ new Date(), 7))
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => ke.month.toRange(/* @__PURE__ */ new Date())
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => ke.month.toRange(ir(/* @__PURE__ */ new Date(), 1))
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => ke.month.toRange(ir(/* @__PURE__ */ new Date(), 3))
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => ke.month.toRange(ir(/* @__PURE__ */ new Date(), 6))
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => ke.quarter.toRange(/* @__PURE__ */ new Date())
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () => ke.quarter.toRange(ir(/* @__PURE__ */ new Date(), 3))
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => ke.halfyear.toRange(/* @__PURE__ */ new Date())
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () => ke.halfyear.toRange(ir(/* @__PURE__ */ new Date(), 6))
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => ke.year.toRange(Ya(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => ke.year.toRange(Ya(/* @__PURE__ */ new Date(), 3))
  }
}, Ii = (t, e) => e.view.domAtPos(t).node.offsetParent !== null, Jy = (t, e, n) => {
  for (let r = t.depth; r > 0; r -= 1) {
    const i = t.node(r), o = e(i), s = Ii(t.start(r), n);
    if (o && s)
      return {
        pos: r > 0 ? t.before(r) : 0,
        start: t.start(r),
        depth: r,
        node: i
      };
  }
}, wl = (t, e) => {
  const { state: n, view: r, extensionManager: i } = t, { schema: o, selection: s } = n, { empty: a, $anchor: c } = s, l = !!i.extensions.find((b) => b.name === "gapCursor");
  if (!a || c.parent.type !== o.nodes.detailsSummary || !l || e === "right" && c.parentOffset !== c.parent.nodeSize - 2)
    return !1;
  const u = Bs((b) => b.type === o.nodes.details)(s);
  if (!u)
    return !1;
  const d = di(u.node, (b) => b.type === o.nodes.detailsContent);
  if (!d.length || Ii(u.start + d[0].pos + 1, t))
    return !1;
  const h = n.doc.resolve(u.pos + u.node.nodeSize), p = La.findFrom(h, 1, !1);
  if (!p)
    return !1;
  const { tr: m } = n, y = new La(p);
  return m.setSelection(y), m.scrollIntoView(), r.dispatch(m), !0;
}, Zy = Qe.create({
  name: "details",
  content: "detailsSummary detailsContent",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  addOptions() {
    return {
      persist: !1,
      openClassName: "is-open",
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.persist ? {
      open: {
        default: !1,
        parseHTML: (t) => t.hasAttribute("open"),
        renderHTML: ({ open: t }) => t ? { open: "" } : {}
      }
    } : [];
  },
  parseHTML() {
    return [
      {
        tag: "details"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "details",
      Ze(this.options.HTMLAttributes, t),
      0
    ];
  },
  addNodeView() {
    return ({ editor: t, getPos: e, node: n, HTMLAttributes: r }) => {
      const i = document.createElement("div"), o = Ze(this.options.HTMLAttributes, r, {
        "data-type": this.name
      });
      Object.entries(o).forEach(([l, u]) => i.setAttribute(l, u));
      const s = document.createElement("button");
      s.type = "button", i.append(s);
      const a = document.createElement("div");
      i.append(a);
      const c = (l) => {
        if (l !== void 0)
          if (l) {
            if (i.classList.contains(this.options.openClassName))
              return;
            i.classList.add(this.options.openClassName);
          } else {
            if (!i.classList.contains(this.options.openClassName))
              return;
            i.classList.remove(this.options.openClassName);
          }
        else
          i.classList.toggle(this.options.openClassName);
        const u = new Event("toggleDetailsContent"), d = a.querySelector(':scope > div[data-type="detailsContent"]');
        d?.dispatchEvent(u);
      };
      return n.attrs.open && setTimeout(() => c()), s.addEventListener("click", () => {
        if (c(), !this.options.persist) {
          t.commands.focus(void 0, { scrollIntoView: !1 });
          return;
        }
        if (t.isEditable && typeof e == "function") {
          const { from: l, to: u } = t.state.selection;
          t.chain().command(({ tr: d }) => {
            const f = e(), h = d.doc.nodeAt(f);
            return h?.type !== this.type ? !1 : (d.setNodeMarkup(f, void 0, {
              open: !h.attrs.open
            }), !0);
          }).setTextSelection({
            from: l,
            to: u
          }).focus(void 0, { scrollIntoView: !1 }).run();
        }
      }), {
        dom: i,
        contentDOM: a,
        ignoreMutation(l) {
          return l.type === "selection" ? !1 : !i.contains(l.target) || i === l.target;
        },
        update: (l) => l.type !== this.type ? !1 : (l.attrs.open !== void 0 && c(l.attrs.open), !0)
      };
    };
  },
  addCommands() {
    return {
      setDetails: () => ({ state: t, chain: e }) => {
        var n;
        const { schema: r, selection: i } = t, { $from: o, $to: s } = i, a = o.blockRange(s);
        if (!a)
          return !1;
        const c = t.doc.slice(a.start, a.end);
        if (!r.nodes.detailsContent.contentMatch.matchFragment(c.content))
          return !1;
        const u = ((n = c.toJSON()) === null || n === void 0 ? void 0 : n.content) || [];
        return e().insertContentAt({ from: a.start, to: a.end }, {
          type: this.name,
          content: [
            {
              type: "detailsSummary"
            },
            {
              type: "detailsContent",
              content: u
            }
          ]
        }).setTextSelection(a.start + 2).run();
      },
      unsetDetails: () => ({ state: t, chain: e }) => {
        const { selection: n, schema: r } = t, i = Bs((b) => b.type === this.type)(n);
        if (!i)
          return !1;
        const o = di(i.node, (b) => b.type === r.nodes.detailsSummary), s = di(i.node, (b) => b.type === r.nodes.detailsContent);
        if (!o.length || !s.length)
          return !1;
        const a = o[0], c = s[0], l = i.pos, u = t.doc.resolve(l), d = l + i.node.nodeSize, f = { from: l, to: d }, h = c.node.content.toJSON() || [], p = u.parent.type.contentMatch.defaultType, y = [
          p?.create(null, a.node.content).toJSON(),
          ...h
        ];
        return e().insertContentAt(f, y).setTextSelection(l + 1).run();
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () => {
        const { schema: t, selection: e } = this.editor.state, { empty: n, $anchor: r } = e;
        return !n || r.parent.type !== t.nodes.detailsSummary ? !1 : r.parentOffset !== 0 ? this.editor.commands.command(({ tr: i }) => {
          const o = r.pos - 1, s = r.pos;
          return i.delete(o, s), !0;
        }) : this.editor.commands.unsetDetails();
      },
      // Creates a new node below it if it is closed.
      // Otherwise inside `DetailsContent`.
      Enter: ({ editor: t }) => {
        const { state: e, view: n } = t, { schema: r, selection: i } = e, { $head: o } = i;
        if (o.parent.type !== r.nodes.detailsSummary)
          return !1;
        const s = Ii(o.after() + 1, t), a = s ? e.doc.nodeAt(o.after()) : o.node(-2);
        if (!a)
          return !1;
        const c = s ? 0 : o.indexAfter(-1), l = Dc(a.contentMatchAt(c));
        if (!l || !a.canReplaceWith(c, c, l))
          return !1;
        const u = l.createAndFill();
        if (!u)
          return !1;
        const d = s ? o.after() + 1 : o.after(-1), f = e.tr.replaceWith(d, d, u), h = f.doc.resolve(d), p = qe.near(h, 1);
        return f.setSelection(p), f.scrollIntoView(), n.dispatch(f), !0;
      },
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowRight: ({ editor: t }) => wl(t, "right"),
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowDown: ({ editor: t }) => wl(t, "down")
    };
  },
  addProseMirrorPlugins() {
    return [
      // This plugin prevents text selections within the hidden content in `DetailsContent`.
      // The cursor is moved to the next visible position.
      new gt({
        key: new $e("detailsSelection"),
        appendTransaction: (t, e, n) => {
          const { editor: r, type: i } = this;
          if (!t.some((y) => y.selectionSet) || !e.selection.empty || !n.selection.empty || !Gf(n, i.name))
            return;
          const { $from: a } = n.selection;
          if (Ii(a.pos, r))
            return;
          const l = Jy(a, (y) => y.type === i, r);
          if (!l)
            return;
          const u = di(l.node, (y) => y.type === n.schema.nodes.detailsSummary);
          if (!u.length)
            return;
          const d = u[0], h = (e.selection.from < n.selection.from ? "forward" : "backward") === "forward" ? l.start + d.pos : l.pos + d.pos + d.node.nodeSize, p = nt.create(n.doc, h);
          return n.tr.setSelection(p);
        }
      })
    ];
  }
}), Eu = Zy.configure({
  persist: !0,
  HTMLAttributes: {
    class: "rich-text-details"
  }
}), Qy = Qe.create({
  name: "detailsContent",
  content: "block+",
  defining: !0,
  selectable: !1,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: `div[data-type="${this.name}"]`
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "div",
      Ze(this.options.HTMLAttributes, t, { "data-type": this.name }),
      0
    ];
  },
  addNodeView() {
    return ({ HTMLAttributes: t }) => {
      const e = document.createElement("div"), n = Ze(this.options.HTMLAttributes, t, {
        "data-type": this.name,
        hidden: "hidden"
      });
      return Object.entries(n).forEach(([r, i]) => e.setAttribute(r, i)), e.addEventListener("toggleDetailsContent", () => {
        e.toggleAttribute("hidden");
      }), {
        dom: e,
        contentDOM: e,
        ignoreMutation(r) {
          return r.type === "selection" ? !1 : !e.contains(r.target) || e === r.target;
        },
        update: (r) => r.type === this.type
      };
    };
  },
  addKeyboardShortcuts() {
    return {
      // Escape node on double enter
      Enter: ({ editor: t }) => {
        const { state: e, view: n } = t, { selection: r } = e, { $from: i, empty: o } = r, s = Bs((M) => M.type === this.type)(r);
        if (!o || !s || !s.node.childCount)
          return !1;
        const a = i.index(s.depth), { childCount: c } = s.node;
        if (!(c === a + 1))
          return !1;
        const u = s.node.type.contentMatch.defaultType, d = u?.createAndFill();
        if (!d)
          return !1;
        const f = e.doc.resolve(s.pos + 1), h = c - 1, p = s.node.child(h), m = f.posAtIndex(h, s.depth);
        if (!p.eq(d))
          return !1;
        const b = i.node(-3);
        if (!b)
          return !1;
        const v = i.indexAfter(-3), w = Dc(b.contentMatchAt(v));
        if (!w || !b.canReplaceWith(v, v, w))
          return !1;
        const S = w.createAndFill();
        if (!S)
          return !1;
        const { tr: k } = e, O = i.after(-2);
        k.replaceWith(O, O, S);
        const x = k.doc.resolve(O), E = qe.near(x, 1);
        k.setSelection(E);
        const N = m, I = m + p.nodeSize;
        return k.delete(N, I), k.scrollIntoView(), n.dispatch(k), !0;
      }
    };
  }
}), Ou = Qy, eb = Qe.create({
  name: "detailsSummary",
  content: "text*",
  defining: !0,
  selectable: !1,
  isolating: !0,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "summary"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "summary",
      Ze(this.options.HTMLAttributes, t),
      0
    ];
  }
}), _u = eb;
var rs, is;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  rs = (e) => t.get(e), is = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  rs = (r) => {
    for (let i = 0; i < t.length; i += 2)
      if (t[i] == r) return t[i + 1];
  }, is = (r, i) => (n == 10 && (n = 0), t[n++] = r, t[n++] = i);
}
var re = class {
  constructor(t, e, n, r) {
    this.width = t, this.height = e, this.map = n, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const r = e % this.width, i = e / this.width | 0;
      let o = r + 1, s = i + 1;
      for (let a = 1; o < this.width && this.map[e + a] == n; a++)
        o++;
      for (let a = 1; s < this.height && this.map[e + this.width * a] == n; a++)
        s++;
      return { left: r, top: i, right: o, bottom: s };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(t) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == t)
        return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(t, e, n) {
    const { left: r, right: i, top: o, bottom: s } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (n < 0 ? o - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(t, e) {
    const {
      left: n,
      right: r,
      top: i,
      bottom: o
    } = this.findCell(t), {
      left: s,
      right: a,
      top: c,
      bottom: l
    } = this.findCell(e);
    return {
      left: Math.min(n, s),
      top: Math.min(i, c),
      right: Math.max(r, a),
      bottom: Math.max(o, l)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(t) {
    const e = [], n = {};
    for (let r = t.top; r < t.bottom; r++)
      for (let i = t.left; i < t.right; i++) {
        const o = r * this.width + i, s = this.map[o];
        n[s] || (n[s] = !0, !(i == t.left && i && this.map[o - 1] == s || r == t.top && r && this.map[o - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(t, e, n) {
    for (let r = 0, i = 0; ; r++) {
      const o = i + n.child(r).nodeSize;
      if (r == t) {
        let s = e + t * this.width;
        const a = (t + 1) * this.width;
        for (; s < a && this.map[s] < i; ) s++;
        return s == a ? o - 1 : this.map[s];
      }
      i = o;
    }
  }
  // Find the table map for the given table node.
  static get(t) {
    return rs(t) || is(t, tb(t));
  }
};
function tb(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = nb(t), n = t.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let l = 0, u = e * n; l < u; l++) r[l] = 0;
  for (let l = 0, u = 0; l < n; l++) {
    const d = t.child(l);
    u++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; ) i++;
      if (p == d.childCount) break;
      const m = d.child(p), { colspan: y, rowspan: b, colwidth: v } = m.attrs;
      for (let w = 0; w < b; w++) {
        if (w + l >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: b - w
          });
          break;
        }
        const S = i + w * e;
        for (let k = 0; k < y; k++) {
          r[S + k] == 0 ? r[S + k] = u : (o || (o = [])).push({
            type: "collision",
            row: l,
            pos: u,
            n: y - k
          });
          const O = v && v[k];
          if (O) {
            const x = (S + k) % e * 2, E = s[x];
            E == null || E != O && s[x + 1] == 1 ? (s[x] = O, s[x + 1] = 1) : E == O && s[x + 1]++;
          }
        }
      }
      i += y, u += m.nodeSize;
    }
    const f = (l + 1) * e;
    let h = 0;
    for (; i < f; ) r[i++] == 0 && h++;
    h && (o || (o = [])).push({ type: "missing", row: l, n: h }), u++;
  }
  (e === 0 || n === 0) && (o || (o = [])).push({ type: "zero_sized" });
  const a = new re(e, n, r, o);
  let c = !1;
  for (let l = 0; !c && l < s.length; l += 2)
    s[l] != null && s[l + 1] < n && (c = !0);
  return c && rb(a, s, t), a;
}
function nb(t) {
  let e = -1, n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const i = t.child(r);
    let o = 0;
    if (n)
      for (let s = 0; s < r; s++) {
        const a = t.child(s);
        for (let c = 0; c < a.childCount; c++) {
          const l = a.child(c);
          s + l.attrs.rowspan > r && (o += l.attrs.colspan);
        }
      }
    for (let s = 0; s < i.childCount; s++) {
      const a = i.child(s);
      o += a.attrs.colspan, a.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function rb(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let i = 0; i < t.map.length; i++) {
    const o = t.map[i];
    if (r[o]) continue;
    r[o] = !0;
    const s = n.nodeAt(o);
    if (!s)
      throw new RangeError(`No cell with offset ${o} found`);
    let a = null;
    const c = s.attrs;
    for (let l = 0; l < c.colspan; l++) {
      const u = (i + l) % t.width, d = e[u * 2];
      d != null && (!c.colwidth || c.colwidth[l] != d) && ((a || (a = ib(c)))[l] = d);
    }
    a && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: a
    });
  }
}
function ib(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function we(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const r = t.nodes[n], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
var $t = new $e("selectingCells");
function Xn(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function ob(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function ut(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--)
    if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function oo(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const n = Xn(e.$head) || sb(e.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function sb(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return t.doc.resolve(n - e.nodeSize);
  }
}
function os(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function ab(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function Zs(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Tu(t, e, n) {
  const r = t.node(-1), i = re.get(r), o = t.start(-1), s = i.nextCell(t.pos - o, e, n);
  return s == null ? null : t.node(0).resolve(o + s);
}
function ln(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan - n };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function Nu(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan + n };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < n; i++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function lb(t, e, n) {
  const r = we(e.type.schema).header_cell;
  for (let i = 0; i < t.height; i++)
    if (e.nodeAt(t.map[n + i * t.width]).type != r)
      return !1;
  return !0;
}
var J = class St extends qe {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, n = e) {
    const r = e.node(-1), i = re.get(r), o = e.start(-1), s = i.rectBetween(
      e.pos - o,
      n.pos - o
    ), a = e.node(0), c = i.cellsInRect(s).filter((u) => u != n.pos - o);
    c.unshift(n.pos - o);
    const l = c.map((u) => {
      const d = r.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new Mc(
        a.resolve(f),
        a.resolve(f + d.content.size)
      );
    });
    super(l[0].$from, l[0].$to, l), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), i = e.resolve(n.map(this.$headCell.pos));
    if (os(r) && os(i) && Zs(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? St.rowSelection(r, i) : o && this.isColSelection() ? St.colSelection(r, i) : new St(r, i);
    }
    return nt.between(r, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), n = re.get(e), r = this.$anchorCell.start(-1), i = n.rectBetween(
      this.$anchorCell.pos - r,
      this.$headCell.pos - r
    ), o = {}, s = [];
    for (let c = i.top; c < i.bottom; c++) {
      const l = [];
      for (let u = c * n.width + i.left, d = i.left; d < i.right; d++, u++) {
        const f = n.map[u];
        if (o[f]) continue;
        o[f] = !0;
        const h = n.findCell(f);
        let p = e.nodeAt(f);
        if (!p)
          throw RangeError(`No cell with offset ${f} found`);
        const m = i.left - h.left, y = h.right - i.right;
        if (m > 0 || y > 0) {
          let b = p.attrs;
          if (m > 0 && (b = ln(b, 0, m)), y > 0 && (b = ln(
            b,
            b.colspan - y,
            y
          )), h.left < i.left) {
            if (p = p.type.createAndFill(b), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(b)}`
              );
          } else
            p = p.type.create(b, p.content);
        }
        if (h.top < i.top || h.bottom > i.bottom) {
          const b = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, i.bottom) - Math.max(h.top, i.top)
          };
          h.top < i.top ? p = p.type.createAndFill(b) : p = p.type.create(b, p.content);
        }
        l.push(p);
      }
      s.push(e.child(c).copy(ye.from(l)));
    }
    const a = this.isColSelection() && this.isRowSelection() ? e : s;
    return new Ve(ye.from(a), 1, 1);
  }
  replace(e, n = Ve.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      const { $from: a, $to: c } = i[s], l = e.mapping.slice(r);
      e.replace(
        l.map(a.pos),
        l.map(c.pos),
        s ? Ve.empty : n
      );
    }
    const o = qe.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new Ve(ye.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = re.get(n), i = this.$anchorCell.start(-1), o = r.cellsInRect(
      r.rectBetween(
        this.$anchorCell.pos - i,
        this.$headCell.pos - i
      )
    );
    for (let s = 0; s < o.length; s++)
      e(n.nodeAt(o[s]), i + o[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, i = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, i) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, n = e) {
    const r = e.node(-1), i = re.get(r), o = e.start(-1), s = i.findCell(e.pos - o), a = i.findCell(n.pos - o), c = e.node(0);
    return s.top <= a.top ? (s.top > 0 && (e = c.resolve(o + i.map[s.left])), a.bottom < i.height && (n = c.resolve(
      o + i.map[i.width * (i.height - 1) + a.right - 1]
    ))) : (a.top > 0 && (n = c.resolve(o + i.map[a.left])), s.bottom < i.height && (e = c.resolve(
      o + i.map[i.width * (i.height - 1) + s.right - 1]
    ))), new St(e, n);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = re.get(e), r = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(i, o) > 0) return !1;
    const s = i + this.$anchorCell.nodeAfter.attrs.colspan, a = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, a) == n.width;
  }
  eq(e) {
    return e instanceof St && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, n = e) {
    const r = e.node(-1), i = re.get(r), o = e.start(-1), s = i.findCell(e.pos - o), a = i.findCell(n.pos - o), c = e.node(0);
    return s.left <= a.left ? (s.left > 0 && (e = c.resolve(
      o + i.map[s.top * i.width]
    )), a.right < i.width && (n = c.resolve(
      o + i.map[i.width * (a.top + 1) - 1]
    ))) : (a.left > 0 && (n = c.resolve(o + i.map[a.top * i.width])), s.right < i.width && (e = c.resolve(
      o + i.map[i.width * (s.top + 1) - 1]
    ))), new St(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new St(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new St(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new cb(this.$anchorCell.pos, this.$headCell.pos);
  }
};
J.prototype.visible = !1;
qe.jsonID("cell", J);
var cb = class Pu {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Pu(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && Zs(n, r) ? new J(n, r) : qe.near(r, 1);
  }
};
function ub(t) {
  if (!(t.selection instanceof J)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(
      Ai.node(r, r + n.nodeSize, { class: "selectedCell" })
    );
  }), yr.create(t.doc, e);
}
function db({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, i = t.depth;
  for (; i >= 0 && !(t.after(i + 1) < t.end(i)); i--, n++)
    ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--)
    ;
  return n == r && /row|table/.test(t.node(i).type.spec.tableRole);
}
function fb({ $from: t, $to: e }) {
  let n, r;
  for (let i = t.depth; i > 0; i--) {
    const o = t.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      n = o;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const o = e.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function hb(t, e, n) {
  const r = (e || t).selection, i = (e || t).doc;
  let o, s;
  if (r instanceof Ic && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      o = J.create(i, r.from);
    else if (s == "row") {
      const a = i.resolve(r.from + 1);
      o = J.rowSelection(a, a);
    } else if (!n) {
      const a = re.get(r.node), c = r.from + 1, l = c + a.map[a.width * a.height - 1];
      o = J.create(i, c + 1, l);
    }
  } else r instanceof nt && db(r) ? o = nt.create(i, r.from) : r instanceof nt && fb(r) && (o = nt.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
var pb = new $e("fix-tables");
function Du(t, e, n, r) {
  const i = t.childCount, o = e.childCount;
  e: for (let s = 0, a = 0; s < o; s++) {
    const c = e.child(s);
    for (let l = a, u = Math.min(i, s + 3); l < u; l++)
      if (t.child(l) == c) {
        a = l + 1, n += c.nodeSize;
        continue e;
      }
    r(c, n), a < i && t.child(a).sameMarkup(c) ? Du(t.child(a), c, n + 1, r) : c.nodesBetween(0, c.content.size, r, n + 1), n += c.nodeSize;
  }
}
function Mu(t, e) {
  let n;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (n = mb(t, i, o, n));
  };
  return e ? e.doc != t.doc && Du(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function mb(t, e, n, r) {
  const i = re.get(e);
  if (!i.problems) return r;
  r || (r = t.tr);
  const o = [];
  for (let c = 0; c < i.height; c++) o.push(0);
  for (let c = 0; c < i.problems.length; c++) {
    const l = i.problems[c];
    if (l.type == "collision") {
      const u = e.nodeAt(l.pos);
      if (!u) continue;
      const d = u.attrs;
      for (let f = 0; f < d.rowspan; f++) o[l.row + f] += l.n;
      r.setNodeMarkup(
        r.mapping.map(n + 1 + l.pos),
        null,
        ln(d, d.colspan - l.n, l.n)
      );
    } else if (l.type == "missing")
      o[l.row] += l.n;
    else if (l.type == "overlong_rowspan") {
      const u = e.nodeAt(l.pos);
      if (!u) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + l.pos), null, {
        ...u.attrs,
        rowspan: u.attrs.rowspan - l.n
      });
    } else if (l.type == "colwidth mismatch") {
      const u = e.nodeAt(l.pos);
      if (!u) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + l.pos), null, {
        ...u.attrs,
        colwidth: l.colwidth
      });
    } else if (l.type == "zero_sized") {
      const u = r.mapping.map(n);
      r.delete(u, u + e.nodeSize);
    }
  }
  let s, a;
  for (let c = 0; c < o.length; c++)
    o[c] && (s == null && (s = c), a = c);
  for (let c = 0, l = n + 1; c < i.height; c++) {
    const u = e.child(c), d = l + u.nodeSize, f = o[c];
    if (f > 0) {
      let h = "cell";
      u.firstChild && (h = u.firstChild.type.spec.tableRole);
      const p = [];
      for (let y = 0; y < f; y++) {
        const b = we(t.schema)[h].createAndFill();
        b && p.push(b);
      }
      const m = (c == 0 || s == c - 1) && a == c ? l + 1 : d - 1;
      r.insert(r.mapping.map(m), p);
    }
    l = d;
  }
  return r.setMeta(pb, { fixTables: !0 });
}
function yt(t) {
  const e = t.selection, n = oo(t), r = n.node(-1), i = n.start(-1), o = re.get(r);
  return { ...e instanceof J ? o.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : o.findCell(n.pos - i), tableStart: i, map: o, table: r };
}
function Iu(t, { map: e, tableStart: n, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  lb(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const a = s * e.width + i;
    if (i > 0 && i < e.width && e.map[a - 1] == e.map[a]) {
      const c = e.map[a], l = r.nodeAt(c);
      t.setNodeMarkup(
        t.mapping.map(n + c),
        null,
        Nu(l.attrs, i - e.colCount(c))
      ), s += l.attrs.rowspan - 1;
    } else {
      const c = o == null ? we(r.type.schema).cell : r.nodeAt(e.map[a + o]).type, l = e.positionAt(s, i, r);
      t.insert(t.mapping.map(n + l), c.createAndFill());
    }
  }
  return t;
}
function gb(t, e) {
  if (!ut(t)) return !1;
  if (e) {
    const n = yt(t);
    e(Iu(t.tr, n, n.left));
  }
  return !0;
}
function yb(t, e) {
  if (!ut(t)) return !1;
  if (e) {
    const n = yt(t);
    e(Iu(t.tr, n, n.right));
  }
  return !0;
}
function bb(t, { map: e, table: n, tableStart: r }, i) {
  const o = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const a = s * e.width + i, c = e.map[a], l = n.nodeAt(c), u = l.attrs;
    if (i > 0 && e.map[a - 1] == c || i < e.width - 1 && e.map[a + 1] == c)
      t.setNodeMarkup(
        t.mapping.slice(o).map(r + c),
        null,
        ln(u, i - e.colCount(c))
      );
    else {
      const d = t.mapping.slice(o).map(r + c);
      t.delete(d, d + l.nodeSize);
    }
    s += u.rowspan;
  }
}
function vb(t, e) {
  if (!ut(t)) return !1;
  if (e) {
    const n = yt(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let i = n.right - 1; bb(r, n, i), i != n.left; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      n.table = o, n.map = re.get(o);
    }
    e(r);
  }
  return !0;
}
function wb(t, e, n) {
  var r;
  const i = we(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++)
    if (((r = e.nodeAt(t.map[o + n * t.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function Lu(t, { map: e, tableStart: n, table: r }, i) {
  var o;
  let s = n;
  for (let l = 0; l < i; l++) s += r.child(l).nodeSize;
  const a = [];
  let c = i > 0 ? -1 : 0;
  wb(e, r, i + c) && (c = i == 0 || i == e.height ? null : 0);
  for (let l = 0, u = e.width * i; l < e.width; l++, u++)
    if (i > 0 && i < e.height && e.map[u] == e.map[u - e.width]) {
      const d = e.map[u], f = r.nodeAt(d).attrs;
      t.setNodeMarkup(n + d, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), l += f.colspan - 1;
    } else {
      const d = c == null ? we(r.type.schema).cell : (o = r.nodeAt(e.map[u + c * e.width])) == null ? void 0 : o.type, f = d?.createAndFill();
      f && a.push(f);
    }
  return t.insert(s, we(r.type.schema).row.create(null, a)), t;
}
function xb(t, e) {
  if (!ut(t)) return !1;
  if (e) {
    const n = yt(t);
    e(Lu(t.tr, n, n.top));
  }
  return !0;
}
function Sb(t, e) {
  if (!ut(t)) return !1;
  if (e) {
    const n = yt(t);
    e(Lu(t.tr, n, n.bottom));
  }
  return !0;
}
function kb(t, { map: e, table: n, tableStart: r }, i) {
  let o = 0;
  for (let l = 0; l < i; l++) o += n.child(l).nodeSize;
  const s = o + n.child(i).nodeSize, a = t.mapping.maps.length;
  t.delete(o + r, s + r);
  const c = /* @__PURE__ */ new Set();
  for (let l = 0, u = i * e.width; l < e.width; l++, u++) {
    const d = e.map[u];
    if (!c.has(d)) {
      if (c.add(d), i > 0 && d == e.map[u - e.width]) {
        const f = n.nodeAt(d).attrs;
        t.setNodeMarkup(t.mapping.slice(a).map(d + r), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), l += f.colspan - 1;
      } else if (i < e.height && d == e.map[u + e.width]) {
        const f = n.nodeAt(d), h = f.attrs, p = f.type.create(
          { ...h, rowspan: f.attrs.rowspan - 1 },
          f.content
        ), m = e.positionAt(i + 1, l, n);
        t.insert(t.mapping.slice(a).map(r + m), p), l += h.colspan - 1;
      }
    }
  }
}
function Ab(t, e) {
  if (!ut(t)) return !1;
  if (e) {
    const n = yt(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let i = n.bottom - 1; kb(r, n, i), i != n.top; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      n.table = o, n.map = re.get(n.table);
    }
    e(r);
  }
  return !0;
}
function xl(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function Cb({ width: t, height: e, map: n }, r) {
  let i = r.top * t + r.left, o = i, s = (r.bottom - 1) * t + r.left, a = i + (r.right - r.left - 1);
  for (let c = r.top; c < r.bottom; c++) {
    if (r.left > 0 && n[o] == n[o - 1] || r.right < t && n[a] == n[a + 1])
      return !0;
    o += t, a += t;
  }
  for (let c = r.left; c < r.right; c++) {
    if (r.top > 0 && n[i] == n[i - t] || r.bottom < e && n[s] == n[s + t])
      return !0;
    i++, s++;
  }
  return !1;
}
function Sl(t, e) {
  const n = t.selection;
  if (!(n instanceof J) || n.$anchorCell.pos == n.$headCell.pos)
    return !1;
  const r = yt(t), { map: i } = r;
  if (Cb(i, r)) return !1;
  if (e) {
    const o = t.tr, s = {};
    let a = ye.empty, c, l;
    for (let u = r.top; u < r.bottom; u++)
      for (let d = r.left; d < r.right; d++) {
        const f = i.map[u * i.width + d], h = r.table.nodeAt(f);
        if (!(s[f] || !h))
          if (s[f] = !0, c == null)
            c = f, l = h;
          else {
            xl(h) || (a = a.append(h.content));
            const p = o.mapping.map(f + r.tableStart);
            o.delete(p, p + h.nodeSize);
          }
      }
    if (c == null || l == null)
      return !0;
    if (o.setNodeMarkup(c + r.tableStart, null, {
      ...Nu(
        l.attrs,
        l.attrs.colspan,
        r.right - r.left - l.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), a.size) {
      const u = c + 1 + l.content.size, d = xl(l) ? c + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, a);
    }
    o.setSelection(
      new J(o.doc.resolve(c + r.tableStart))
    ), e(o);
  }
  return !0;
}
function kl(t, e) {
  const n = we(t.schema);
  return Eb(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function Eb(t) {
  return (e, n) => {
    var r;
    const i = e.selection;
    let o, s;
    if (i instanceof J) {
      if (i.$anchorCell.pos != i.$headCell.pos) return !1;
      o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
    } else {
      if (o = ob(i.$from), !o) return !1;
      s = (r = Xn(i.$from)) == null ? void 0 : r.pos;
    }
    if (o == null || s == null || o.attrs.colspan == 1 && o.attrs.rowspan == 1)
      return !1;
    if (n) {
      let a = o.attrs;
      const c = [], l = a.colwidth;
      a.rowspan > 1 && (a = { ...a, rowspan: 1 }), a.colspan > 1 && (a = { ...a, colspan: 1 });
      const u = yt(e), d = e.tr;
      for (let h = 0; h < u.right - u.left; h++)
        c.push(
          l ? {
            ...a,
            colwidth: l && l[h] ? [l[h]] : null
          } : a
        );
      let f;
      for (let h = u.top; h < u.bottom; h++) {
        let p = u.map.positionAt(h, u.left, u.table);
        h == u.top && (p += o.nodeSize);
        for (let m = u.left, y = 0; m < u.right; m++, y++)
          m == u.left && h == u.top || d.insert(
            f = d.mapping.map(p + u.tableStart, 1),
            t({ node: o, row: h, col: m }).createAndFill(c[y])
          );
      }
      d.setNodeMarkup(
        s,
        t({ node: o, row: u.top, col: u.left }),
        c[0]
      ), i instanceof J && d.setSelection(
        new J(
          d.doc.resolve(i.$anchorCell.pos),
          f ? d.doc.resolve(f) : void 0
        )
      ), n(d);
    }
    return !0;
  };
}
function Ob(t, e) {
  return function(n, r) {
    if (!ut(n)) return !1;
    const i = oo(n);
    if (i.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof J ? n.selection.forEachCell((s, a) => {
        s.attrs[t] !== e && o.setNodeMarkup(a, null, {
          ...s.attrs,
          [t]: e
        });
      }) : o.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [t]: e
      }), r(o);
    }
    return !0;
  };
}
function _b(t) {
  return function(e, n) {
    if (!ut(e)) return !1;
    if (n) {
      const r = we(e.schema), i = yt(e), o = e.tr, s = i.map.cellsInRect(
        t == "column" ? {
          left: i.left,
          top: 0,
          right: i.right,
          bottom: i.map.height
        } : t == "row" ? {
          left: 0,
          top: i.top,
          right: i.map.width,
          bottom: i.bottom
        } : i
      ), a = s.map((c) => i.table.nodeAt(c));
      for (let c = 0; c < s.length; c++)
        a[c].type == r.header_cell && o.setNodeMarkup(
          i.tableStart + s[c],
          r.cell,
          a[c].attrs
        );
      if (o.steps.length == 0)
        for (let c = 0; c < s.length; c++)
          o.setNodeMarkup(
            i.tableStart + s[c],
            r.header_cell,
            a[c].attrs
          );
      n(o);
    }
    return !0;
  };
}
function Al(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const o = e.table.nodeAt(r[i]);
    if (o && o.type !== n.header_cell)
      return !1;
  }
  return !0;
}
function Ar(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? _b(t) : function(n, r) {
    if (!ut(n)) return !1;
    if (r) {
      const i = we(n.schema), o = yt(n), s = n.tr, a = Al("row", o, i), c = Al(
        "column",
        o,
        i
      ), u = (t === "column" ? a : t === "row" ? c : !1) ? 1 : 0, d = t == "column" ? {
        left: 0,
        top: u,
        right: 1,
        bottom: o.map.height
      } : t == "row" ? {
        left: u,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, f = t == "column" ? c ? i.cell : i.header_cell : t == "row" ? a ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(d).forEach((h) => {
        const p = h + o.tableStart, m = s.doc.nodeAt(p);
        m && s.setNodeMarkup(p, f, m.attrs);
      }), r(s);
    }
    return !0;
  };
}
Ar("row", {
  useDeprecatedLogic: !0
});
Ar("column", {
  useDeprecatedLogic: !0
});
var Tb = Ar("cell", {
  useDeprecatedLogic: !0
});
function Nb(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, i = t.before(); r >= 0; r--) {
      const o = t.node(-1).child(r), s = o.lastChild;
      if (s)
        return i - 1 - s.nodeSize;
      i -= o.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1)
      return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), i = t.after(); r < n.childCount; r++) {
      const o = n.child(r);
      if (o.childCount) return i + 1;
      i += o.nodeSize;
    }
  }
  return null;
}
function Cl(t) {
  return function(e, n) {
    if (!ut(e)) return !1;
    const r = Nb(oo(e), t);
    if (r == null) return !1;
    if (n) {
      const i = e.doc.resolve(r);
      n(
        e.tr.setSelection(nt.between(i, ab(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function Pb(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--)
    if (n.node(r).type.spec.tableRole == "table")
      return e && e(
        t.tr.delete(n.before(r), n.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function ei(t, e) {
  const n = t.selection;
  if (!(n instanceof J)) return !1;
  if (e) {
    const r = t.tr, i = we(t.schema).cell.createAndFill().content;
    n.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(
        r.mapping.map(s + 1),
        r.mapping.map(s + o.nodeSize - 1),
        new Ve(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function Db(t) {
  if (!t.size) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, a = [];
  if (o == "row")
    for (let c = 0; c < e.childCount; c++) {
      let l = e.child(c).content;
      const u = c ? 0 : Math.max(0, n - 1), d = c < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (u || d) && (l = ss(
        we(s).row,
        new Ve(l, u, d)
      ).content), a.push(l);
    }
  else if (o == "cell" || o == "header_cell")
    a.push(
      n || r ? ss(
        we(s).row,
        new Ve(e, n, r)
      ).content : e
    );
  else
    return null;
  return Mb(s, a);
}
function Mb(t, e) {
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: a, colspan: c } = o.child(s).attrs;
      for (let l = i; l < i + a; l++)
        n[l] = (n[l] || 0) + c;
    }
  }
  let r = 0;
  for (let i = 0; i < n.length; i++) r = Math.max(r, n[i]);
  for (let i = 0; i < n.length; i++)
    if (i >= e.length && e.push(ye.empty), n[i] < r) {
      const o = we(t).cell.createAndFill(), s = [];
      for (let a = n[i]; a < r; a++)
        s.push(o);
      e[i] = e[i].append(ye.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function ss(t, e) {
  const n = t.createAndFill();
  return new qf(n).replace(0, n.content.size, e).doc;
}
function Ib({ width: t, height: e, rows: n }, r, i) {
  if (t != r) {
    const o = [], s = [];
    for (let a = 0; a < n.length; a++) {
      const c = n[a], l = [];
      for (let u = o[a] || 0, d = 0; u < r; d++) {
        let f = c.child(d % c.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(
          ln(
            f.attrs,
            f.attrs.colspan,
            u + f.attrs.colspan - r
          ),
          f.content
        )), l.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          o[a + h] = (o[a + h] || 0) + f.attrs.colspan;
      }
      s.push(ye.from(l));
    }
    n = s, t = r;
  }
  if (e != i) {
    const o = [];
    for (let s = 0, a = 0; s < i; s++, a++) {
      const c = [], l = n[a % e];
      for (let u = 0; u < l.childCount; u++) {
        let d = l.child(u);
        s + d.attrs.rowspan > i && (d = d.type.create(
          {
            ...d.attrs,
            rowspan: Math.max(1, i - d.attrs.rowspan)
          },
          d.content
        )), c.push(d);
      }
      o.push(ye.from(c));
    }
    n = o, e = i;
  }
  return { width: t, height: e, rows: n };
}
function Lb(t, e, n, r, i, o, s) {
  const a = t.doc.type.schema, c = we(a);
  let l, u;
  if (i > e.width)
    for (let d = 0, f = 0; d < e.height; d++) {
      const h = n.child(d);
      f += h.nodeSize;
      const p = [];
      let m;
      h.lastChild == null || h.lastChild.type == c.cell ? m = l || (l = c.cell.createAndFill()) : m = u || (u = c.header_cell.createAndFill());
      for (let y = e.width; y < i; y++) p.push(m);
      t.insert(t.mapping.slice(s).map(f - 1 + r), p);
    }
  if (o > e.height) {
    const d = [];
    for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const y = p >= e.width ? !1 : n.nodeAt(e.map[m + p]).type == c.header_cell;
      d.push(
        y ? u || (u = c.header_cell.createAndFill()) : l || (l = c.cell.createAndFill())
      );
    }
    const f = c.row.create(null, ye.from(d)), h = [];
    for (let p = e.height; p < o; p++) h.push(f);
    t.insert(t.mapping.slice(s).map(r + n.nodeSize - 2), h);
  }
  return !!(l || u);
}
function El(t, e, n, r, i, o, s, a) {
  if (s == 0 || s == e.height) return !1;
  let c = !1;
  for (let l = i; l < o; l++) {
    const u = s * e.width + l, d = e.map[u];
    if (e.map[u - e.width] == d) {
      c = !0;
      const f = n.nodeAt(d), { top: h, left: p } = e.findCell(d);
      t.setNodeMarkup(t.mapping.slice(a).map(d + r), null, {
        ...f.attrs,
        rowspan: s - h
      }), t.insert(
        t.mapping.slice(a).map(e.positionAt(s, p, n)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: h + f.attrs.rowspan - s
        })
      ), l += f.attrs.colspan - 1;
    }
  }
  return c;
}
function Ol(t, e, n, r, i, o, s, a) {
  if (s == 0 || s == e.width) return !1;
  let c = !1;
  for (let l = i; l < o; l++) {
    const u = l * e.width + s, d = e.map[u];
    if (e.map[u - 1] == d) {
      c = !0;
      const f = n.nodeAt(d), h = e.colCount(d), p = t.mapping.slice(a).map(d + r);
      t.setNodeMarkup(
        p,
        null,
        ln(
          f.attrs,
          s - h,
          f.attrs.colspan - (s - h)
        )
      ), t.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          ln(f.attrs, 0, s - h)
        )
      ), l += f.attrs.rowspan - 1;
    }
  }
  return c;
}
function _l(t, e, n, r, i) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o)
    throw new Error("No table found");
  let s = re.get(o);
  const { top: a, left: c } = r, l = c + i.width, u = a + i.height, d = t.tr;
  let f = 0;
  function h() {
    if (o = n ? d.doc.nodeAt(n - 1) : d.doc, !o)
      throw new Error("No table found");
    s = re.get(o), f = d.mapping.maps.length;
  }
  Lb(d, s, o, n, l, u, f) && h(), El(d, s, o, n, c, l, a, f) && h(), El(d, s, o, n, c, l, u, f) && h(), Ol(d, s, o, n, a, u, c, f) && h(), Ol(d, s, o, n, a, u, l, f) && h();
  for (let p = a; p < u; p++) {
    const m = s.positionAt(p, c, o), y = s.positionAt(p, l, o);
    d.replace(
      d.mapping.slice(f).map(m + n),
      d.mapping.slice(f).map(y + n),
      new Ve(i.rows[p - a], 0, 0)
    );
  }
  h(), d.setSelection(
    new J(
      d.doc.resolve(n + s.positionAt(a, c, o)),
      d.doc.resolve(n + s.positionAt(u - 1, l - 1, o))
    )
  ), e(d);
}
var Rb = Yf({
  ArrowLeft: ti("horiz", -1),
  ArrowRight: ti("horiz", 1),
  ArrowUp: ti("vert", -1),
  ArrowDown: ti("vert", 1),
  "Shift-ArrowLeft": ni("horiz", -1),
  "Shift-ArrowRight": ni("horiz", 1),
  "Shift-ArrowUp": ni("vert", -1),
  "Shift-ArrowDown": ni("vert", 1),
  Backspace: ei,
  "Mod-Backspace": ei,
  Delete: ei,
  "Mod-Delete": ei
});
function hi(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function ti(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    if (o instanceof J)
      return hi(
        n,
        r,
        qe.near(o.$headCell, e)
      );
    if (t != "horiz" && !o.empty) return !1;
    const s = Ru(i, t, e);
    if (s == null) return !1;
    if (t == "horiz")
      return hi(
        n,
        r,
        qe.near(n.doc.resolve(o.head + e), e)
      );
    {
      const a = n.doc.resolve(s), c = Tu(a, t, e);
      let l;
      return c ? l = qe.near(c, 1) : e < 0 ? l = qe.near(n.doc.resolve(a.before(-1)), -1) : l = qe.near(n.doc.resolve(a.after(-1)), 1), hi(n, r, l);
    }
  };
}
function ni(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    let s;
    if (o instanceof J)
      s = o;
    else {
      const c = Ru(i, t, e);
      if (c == null) return !1;
      s = new J(n.doc.resolve(c));
    }
    const a = Tu(s.$headCell, t, e);
    return a ? hi(
      n,
      r,
      new J(s.$anchorCell, a)
    ) : !1;
  };
}
function $b(t, e) {
  const n = t.state.doc, r = Xn(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new J(r))), !0) : !1;
}
function jb(t, e, n) {
  if (!ut(t.state)) return !1;
  let r = Db(n);
  const i = t.state.selection;
  if (i instanceof J) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        ye.from(
          ss(we(t.state.schema).cell, n)
        )
      ]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), a = re.get(o).rectBetween(
      i.$anchorCell.pos - s,
      i.$headCell.pos - s
    );
    return r = Ib(r, a.right - a.left, a.bottom - a.top), _l(t.state, t.dispatch, s, a, r), !0;
  } else if (r) {
    const o = oo(t.state), s = o.start(-1);
    return _l(
      t.state,
      t.dispatch,
      s,
      re.get(o.node(-1)).findCell(o.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function Fb(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey) return;
  const r = Tl(t, e.target);
  let i;
  if (e.shiftKey && t.state.selection instanceof J)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = Xn(t.state.selection.$anchor)) != null && ((n = Po(t, e)) == null ? void 0 : n.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r)
    return;
  function o(c, l) {
    let u = Po(t, l);
    const d = $t.getState(t.state) == null;
    if (!u || !Zs(c, u))
      if (d) u = c;
      else return;
    const f = new J(c, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta($t, c.pos), t.dispatch(h);
    }
  }
  function s() {
    t.root.removeEventListener("mouseup", s), t.root.removeEventListener("dragstart", s), t.root.removeEventListener("mousemove", a), $t.getState(t.state) != null && t.dispatch(t.state.tr.setMeta($t, -1));
  }
  function a(c) {
    const l = c, u = $t.getState(t.state);
    let d;
    if (u != null)
      d = t.state.doc.resolve(u);
    else if (Tl(t, l.target) != r && (d = Po(t, e), !d))
      return s();
    d && o(d, l);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", a);
}
function Ru(t, e, n) {
  if (!(t.state.selection instanceof nt)) return null;
  const { $head: r } = t.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const o = r.node(i);
    if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : o.childCount)) return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const a = r.before(i), c = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(c) ? a : null;
    }
  }
  return null;
}
function Tl(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function Po(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return n && n ? Xn(t.state.doc.resolve(n.pos)) : null;
}
var zb = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${n}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), as(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, as(
      e,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function as(t, e, n, r, i, o) {
  var s;
  let a = 0, c = !0, l = e.firstChild;
  const u = t.firstChild;
  if (u) {
    for (let d = 0, f = 0; d < u.childCount; d++) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let m = 0; m < h; m++, f++) {
        const y = i == f ? o : p && p[m], b = y ? y + "px" : "";
        if (a += y || r, y || (c = !1), l)
          l.style.width != b && (l.style.width = b), l = l.nextSibling;
        else {
          const v = document.createElement("col");
          v.style.width = b, e.appendChild(v);
        }
      }
    }
    for (; l; ) {
      const d = l.nextSibling;
      (s = l.parentNode) == null || s.removeChild(l), l = d;
    }
    c ? (n.style.width = a + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = a + "px");
  }
}
var Be = new $e(
  "tableColumnResizing"
);
function Bb({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: n = 100,
  View: r = zb,
  lastColumnResizable: i = !0
} = {}) {
  const o = new gt({
    key: Be,
    state: {
      init(s, a) {
        var c, l;
        const u = (l = (c = o.spec) == null ? void 0 : c.props) == null ? void 0 : l.nodeViews, d = we(a.schema).table.name;
        return r && u && (u[d] = (f, h) => new r(f, n, h)), new Vb(-1, !1);
      },
      apply(s, a) {
        return a.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const a = Be.getState(s);
        return a && a.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, a) => {
          Hb(s, a, t, i);
        },
        mouseleave: (s) => {
          Wb(s);
        },
        mousedown: (s, a) => {
          Ub(s, a, e, n);
        }
      },
      decorations: (s) => {
        const a = Be.getState(s);
        if (a && a.activeHandle > -1)
          return Xb(s, a.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var Vb = class pi {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Be);
    if (r && r.setHandle != null)
      return new pi(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new pi(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(n.activeHandle, -1);
      return os(e.doc.resolve(i)) || (i = -1), new pi(i, n.dragging);
    }
    return n;
  }
};
function Hb(t, e, n, r) {
  if (!t.editable) return;
  const i = Be.getState(t.state);
  if (i && !i.dragging) {
    const o = Gb(e.target);
    let s = -1;
    if (o) {
      const { left: a, right: c } = o.getBoundingClientRect();
      e.clientX - a <= n ? s = Nl(t, e, "left", n) : c - e.clientX <= n && (s = Nl(t, e, "right", n));
    }
    if (s != i.activeHandle) {
      if (!r && s !== -1) {
        const a = t.state.doc.resolve(s), c = a.node(-1), l = re.get(c), u = a.start(-1);
        if (l.colCount(a.pos - u) + a.nodeAfter.attrs.colspan - 1 == l.width - 1)
          return;
      }
      $u(t, s);
    }
  }
}
function Wb(t) {
  if (!t.editable) return;
  const e = Be.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && $u(t, -1);
}
function Ub(t, e, n, r) {
  var i;
  if (!t.editable) return !1;
  const o = (i = t.dom.ownerDocument.defaultView) != null ? i : window, s = Be.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const a = t.state.doc.nodeAt(s.activeHandle), c = Kb(t, s.activeHandle, a.attrs);
  t.dispatch(
    t.state.tr.setMeta(Be, {
      setDragging: { startX: e.clientX, startWidth: c }
    })
  );
  function l(d) {
    o.removeEventListener("mouseup", l), o.removeEventListener("mousemove", u);
    const f = Be.getState(t.state);
    f?.dragging && (Yb(
      t,
      f.activeHandle,
      Pl(f.dragging, d, n)
    ), t.dispatch(
      t.state.tr.setMeta(Be, { setDragging: null })
    ));
  }
  function u(d) {
    if (!d.which) return l(d);
    const f = Be.getState(t.state);
    if (f && f.dragging) {
      const h = Pl(f.dragging, d, n);
      Dl(
        t,
        f.activeHandle,
        h,
        r
      );
    }
  }
  return Dl(
    t,
    s.activeHandle,
    c,
    r
  ), o.addEventListener("mouseup", l), o.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function Kb(t, e, { colspan: n, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i) return i;
  const o = t.domAtPos(e);
  let a = o.node.childNodes[o.offset].offsetWidth, c = n;
  if (r)
    for (let l = 0; l < n; l++)
      r[l] && (a -= r[l], c--);
  return a / c;
}
function Gb(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function Nl(t, e, n, r) {
  const i = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: s } = o, a = Xn(t.state.doc.resolve(s));
  if (!a) return -1;
  if (n == "right") return a.pos;
  const c = re.get(a.node(-1)), l = a.start(-1), u = c.map.indexOf(a.pos - l);
  return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function Pl(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function $u(t, e) {
  t.dispatch(
    t.state.tr.setMeta(Be, { setHandle: e })
  );
}
function Yb(t, e, n) {
  const r = t.state.doc.resolve(e), i = r.node(-1), o = re.get(i), s = r.start(-1), a = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, c = t.state.tr;
  for (let l = 0; l < o.height; l++) {
    const u = l * o.width + a;
    if (l && o.map[u] == o.map[u - o.width]) continue;
    const d = o.map[u], f = i.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : a - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const p = f.colwidth ? f.colwidth.slice() : qb(f.colspan);
    p[h] = n, c.setNodeMarkup(s + d, null, { ...f, colwidth: p });
  }
  c.docChanged && t.dispatch(c);
}
function Dl(t, e, n, r) {
  const i = t.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), a = re.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let c = t.domAtPos(i.start(-1)).node;
  for (; c && c.nodeName != "TABLE"; )
    c = c.parentNode;
  c && as(
    o,
    c.firstChild,
    c,
    r,
    a,
    n
  );
}
function qb(t) {
  return Array(t).fill(0);
}
function Xb(t, e) {
  var n;
  const r = [], i = t.doc.resolve(e), o = i.node(-1);
  if (!o)
    return yr.empty;
  const s = re.get(o), a = i.start(-1), c = s.colCount(i.pos - a) + i.nodeAfter.attrs.colspan - 1;
  for (let l = 0; l < s.height; l++) {
    const u = c + l * s.width;
    if ((c == s.width - 1 || s.map[u] != s.map[u + 1]) && (l == 0 || s.map[u] != s.map[u - s.width])) {
      const d = s.map[u], f = a + d + o.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", (n = Be.getState(t)) != null && n.dragging && r.push(
        Ai.node(
          a + d,
          a + d + o.nodeAt(d).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), r.push(Ai.widget(f, h));
    }
  }
  return yr.create(t.doc, r);
}
function Jb({
  allowTableNodeSelection: t = !1
} = {}) {
  return new gt({
    key: $t,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta($t);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: i, pos: o } = e.mapping.mapResult(n);
        return i ? null : o;
      }
    },
    props: {
      decorations: ub,
      handleDOMEvents: {
        mousedown: Fb
      },
      createSelectionBetween(e) {
        return $t.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: $b,
      handleKeyDown: Rb,
      handlePaste: jb
    },
    appendTransaction(e, n, r) {
      return hb(
        r,
        Mu(r, n),
        t
      );
    }
  });
}
var Zb = Qe.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          var e, n;
          const r = t.getAttribute("colwidth"), i = r ? r.split(",").map((o) => parseInt(o, 10)) : null;
          if (!i) {
            const o = (e = t.closest("table")) == null ? void 0 : e.querySelectorAll("colgroup > col"), s = Array.from(((n = t.parentElement) == null ? void 0 : n.children) || []).indexOf(t);
            if (s && s > -1 && o && o[s]) {
              const a = o[s].getAttribute("width");
              return a ? [parseInt(a, 10)] : null;
            }
          }
          return i;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "td" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", Ze(this.options.HTMLAttributes, t), 0];
  }
}), Qb = Qe.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "th" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", Ze(this.options.HTMLAttributes, t), 0];
  }
}), ev = Qe.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{ tag: "tr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", Ze(this.options.HTMLAttributes, t), 0];
  }
});
function ls(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Ml(t, e, n, r, i, o) {
  var s;
  let a = 0, c = !0, l = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let f = 0, h = 0; f < u.childCount; f += 1) {
      const { colspan: p, colwidth: m } = u.child(f).attrs;
      for (let y = 0; y < p; y += 1, h += 1) {
        const b = i === h ? o : m && m[y], v = b ? `${b}px` : "";
        if (a += b || r, b || (c = !1), l) {
          if (l.style.width !== v) {
            const [w, S] = ls(r, b);
            l.style.setProperty(w, S);
          }
          l = l.nextSibling;
        } else {
          const w = document.createElement("col"), [S, k] = ls(r, b);
          w.style.setProperty(S, k), e.appendChild(w);
        }
      }
    }
  for (; l; ) {
    const f = l.nextSibling;
    (s = l.parentNode) == null || s.removeChild(l), l = f;
  }
  const d = t.attrs.style && typeof t.attrs.style == "string" && /\bwidth\s*:/i.test(t.attrs.style);
  c && !d ? (n.style.width = `${a}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${a}px`);
}
var tv = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Ml(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, Ml(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function nv(t, e, n, r) {
  let i = 0, o = !0;
  const s = [], a = t.firstChild;
  if (!a)
    return {};
  for (let d = 0, f = 0; d < a.childCount; d += 1) {
    const { colspan: h, colwidth: p } = a.child(d).attrs;
    for (let m = 0; m < h; m += 1, f += 1) {
      const y = n === f ? r : p && p[m];
      i += y || e, y || (o = !1);
      const [b, v] = ls(e, y);
      s.push(["col", { style: `${b}: ${v}` }]);
    }
  }
  const c = o ? `${i}px` : "", l = o ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: c, tableMinWidth: l };
}
function Il(t, e) {
  return t.createAndFill();
}
function rv(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function iv(t, e, n, r, i) {
  const o = rv(t), s = [], a = [];
  for (let l = 0; l < n; l += 1) {
    const u = Il(o.cell);
    if (u && a.push(u), r) {
      const d = Il(o.header_cell);
      d && s.push(d);
    }
  }
  const c = [];
  for (let l = 0; l < e; l += 1)
    c.push(o.row.createChecked(null, r && l === 0 ? s : a));
  return o.table.createChecked(null, c);
}
function ov(t) {
  return t instanceof J;
}
var ri = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!ov(e))
    return !1;
  let n = 0;
  const r = Zf(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, sv = "";
function av(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function lv(t, e, n = {}) {
  var r;
  const i = (r = n.cellLineSeparator) != null ? r : sv;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((p) => {
    const m = [];
    p.content && p.content.forEach((y) => {
      let b = "";
      y.content && Array.isArray(y.content) && y.content.length > 1 ? b = y.content.map((k) => e.renderChildren(k)).join(i) : b = y.content ? e.renderChildren(y.content) : "";
      const v = av(b), w = y.type === "tableHeader";
      m.push({ text: v, isHeader: w });
    }), o.push(m);
  });
  const s = o.reduce((p, m) => Math.max(p, m.length), 0);
  if (s === 0)
    return "";
  const a = new Array(s).fill(0);
  o.forEach((p) => {
    var m;
    for (let y = 0; y < s; y += 1) {
      const v = (((m = p[y]) == null ? void 0 : m.text) || "").length;
      v > a[y] && (a[y] = v), a[y] < 3 && (a[y] = 3);
    }
  });
  const c = (p, m) => p + " ".repeat(Math.max(0, m - p.length)), l = o[0], u = l.some((p) => p.isHeader);
  let d = `
`;
  const f = new Array(s).fill(0).map((p, m) => u && l[m] && l[m].text || "");
  return d += `| ${f.map((p, m) => c(p, a[m])).join(" | ")} |
`, d += `| ${a.map((p) => "-".repeat(Math.max(3, p))).join(" | ")} |
`, (u ? o.slice(1) : o).forEach((p) => {
    d += `| ${new Array(s).fill(0).map((m, y) => c(p[y] && p[y].text || "", a[y])).join(" | ")} |
`;
  }), d;
}
var cv = lv, uv = Qe.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      renderWrapper: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: tv,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    const { colgroup: n, tableWidth: r, tableMinWidth: i } = nv(t, this.options.cellMinWidth), o = e.style;
    function s() {
      return o || (r ? `width: ${r}` : `min-width: ${i}`);
    }
    const a = [
      "table",
      Ze(this.options.HTMLAttributes, e, {
        style: s()
      }),
      n,
      ["tbody", 0]
    ];
    return this.options.renderWrapper ? ["div", { class: "tableWrapper" }, a] : a;
  },
  parseMarkdown: (t, e) => {
    const n = [];
    if (t.header) {
      const r = [];
      t.header.forEach((i) => {
        r.push(e.createNode("tableHeader", {}, [{ type: "paragraph", content: e.parseInline(i.tokens) }]));
      }), n.push(e.createNode("tableRow", {}, r));
    }
    return t.rows && t.rows.forEach((r) => {
      const i = [];
      r.forEach((o) => {
        i.push(e.createNode("tableCell", {}, [{ type: "paragraph", content: e.parseInline(o.tokens) }]));
      }), n.push(e.createNode("tableRow", {}, i));
    }), e.createNode("table", void 0, n);
  },
  renderMarkdown: (t, e) => cv(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = iv(o.schema, t, e, n);
        if (i) {
          const a = r.selection.from + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(nt.near(r.doc.resolve(a)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => gb(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => yb(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => vb(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => xb(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => Sb(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => Ab(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => Pb(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Sl(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => kl(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Ar("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Ar("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Tb(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Sl(t, e) ? !0 : kl(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => Ob(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => Cl(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => Cl(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Mu(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = J.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: ri,
      "Mod-Backspace": ri,
      Delete: ri,
      "Mod-Delete": ri
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Bb({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      Jb({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: Xf(Jf(t, "tableRole", e))
    };
  }
}), dv = pn.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(uv.configure(this.options.table)), this.options.tableCell !== !1 && t.push(Zb.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Qb.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(ev.configure(this.options.tableRow)), t;
  }
});
const fv = dv.configure({
  table: { resizable: !0 }
}), hv = Pt(function({ title: e, onClose: n, content: r, primaryAction: i, secondaryAction: o }, s) {
  return /* @__PURE__ */ A(
    "div",
    {
      ref: s,
      className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
      "data-testid": "ai-banner",
      children: [
        /* @__PURE__ */ A("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
          /* @__PURE__ */ g(Lc, { className: "font-medium", children: e }),
          n && /* @__PURE__ */ g(
            ce,
            {
              variant: "ghost",
              icon: zs,
              size: "sm",
              hideLabel: !0,
              onClick: n,
              label: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ A("div", { className: "flex flex-col gap-[1px]", children: [
          /* @__PURE__ */ g(
            "div",
            {
              className: G(
                "bg-f1-background px-4 py-3",
                o || i ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
              ),
              children: /* @__PURE__ */ g(Qf, { content: r })
            }
          ),
          (o || i) && /* @__PURE__ */ A("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
            /* @__PURE__ */ g("div", { children: o && /* @__PURE__ */ g(
              ce,
              {
                label: o.label,
                onClick: o.onClick,
                variant: "outline",
                icon: o.icon
              }
            ) }),
            /* @__PURE__ */ g("div", { children: i && /* @__PURE__ */ g(
              ce,
              {
                label: i.label,
                onClick: i.onClick,
                variant: "outline",
                icon: i.icon
              }
            ) })
          ] })
        ] })
      ]
    }
  );
}), pv = ({ compact: t }) => /* @__PURE__ */ A(
  "div",
  {
    className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ g("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ g(j, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ A("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ g(
          "div",
          {
            className: G(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              t && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ A("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ g(j, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ g(j, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ g(j, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !t && /* @__PURE__ */ A("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ g(j, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), ju = Pt(
  (t, e) => /* @__PURE__ */ g(hv, { ref: e, ...t })
), mv = ({ compact: t }) => /* @__PURE__ */ g(pv, { compact: t });
ju.displayName = "F0AiBanner";
const Fu = Rc(
  Ne(ju),
  mv
), gv = (t) => {
  if (!t?.content) return "";
  try {
    return eh(t.content, [
      $c,
      jc,
      Fc,
      th,
      zc,
      Bc,
      Vc,
      Hc,
      Wc,
      Uc,
      Eu,
      _u,
      Ou
    ]);
  } catch {
    return "";
  }
}, yv = (t, e) => Ps(() => {
  if (e?.selectedTitle || e?.selectedEmoji)
    return {
      title: e.selectedTitle || t.title,
      emoji: e.selectedEmoji
    };
  const n = t.buttons?.find(
    (r) => r.type === e?.selectedAction
  );
  return n ? { title: n.label, emoji: n.emoji } : { title: t.title };
}, [e, t]), bv = (t, e) => {
  const [n, r] = ue(!1), i = Ye(
    async (o) => {
      const s = t.buttons?.find(
        (c) => c.type === o
      ), a = {
        selectedAction: o,
        selectedTitle: s?.label || o,
        selectedEmoji: s?.emoji || "🤖",
        isEditable: s?.editable ?? !1
      };
      r(!0), e({ data: { ...a, content: null } });
      try {
        const c = await t.onClick(o);
        e({ data: { ...a, content: c } });
      } catch (c) {
        console.error("AIBlock error:", c), e({ data: { ...a, content: null } });
      } finally {
        r(!1);
      }
    },
    [t, e]
  );
  return { isLoading: n, handleClick: i };
}, vv = (t, e, n) => {
  it(() => {
    if (!n?.selectedAction || !t?.buttons) return;
    if (!n?.selectedTitle || !n?.selectedEmoji || n?.isEditable === void 0) {
      const i = t.buttons.find(
        (o) => o.type === n.selectedAction
      );
      i && e({
        data: {
          ...n,
          selectedTitle: i.label,
          selectedEmoji: i.emoji,
          isEditable: i.editable ?? !1
        }
      });
    }
  }, [n, t, e]);
}, wv = (t, e, n) => {
  it(() => {
    t?.shouldExecute && t?.selectedAction && e && n && (n({ data: { ...t, shouldExecute: !1 } }), e(t.selectedAction));
  }, [e, n, t]);
}, xv = (t, e, n, r) => {
  it(() => {
    if (!r?.content || !r?.isEditable || !t || !n) return;
    const i = n();
    i !== void 0 && (e(), r.content && t.chain().focus().setTextSelection(i).insertContent(r.content).run());
  }, [r, t, n, e]);
}, Sv = ({
  config: t,
  isLoading: e,
  onButtonClick: n
}) => /* @__PURE__ */ A("div", { className: "flex flex-col gap-2", children: [
  t.title && /* @__PURE__ */ g("div", { className: "text-f1-foreground-secondary", children: t.title }),
  /* @__PURE__ */ g("div", { className: "relative flex flex-row flex-wrap items-center gap-2", children: t.buttons?.map((r, i) => /* @__PURE__ */ g(
    ce,
    {
      onClick: () => n(r.type),
      variant: "outline",
      icon: r.icon,
      label: r.label,
      disabled: e
    },
    i
  )) })
] }), kv = ({ isEditable: t }) => t ? /* @__PURE__ */ A("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ g(j, { className: "h-4 w-1/2 rounded-md" }),
  /* @__PURE__ */ g(j, { className: "h-4 w-full rounded-md" }),
  /* @__PURE__ */ g(j, { className: "h-4 w-3/4 rounded-md" }),
  /* @__PURE__ */ g(j, { className: "h-4 w-1/3 rounded-md" })
] }) : /* @__PURE__ */ g(Fu.Skeleton, { compact: !0 }), Av = ({
  node: t,
  updateAttributes: e,
  deleteNode: n,
  extension: r,
  editor: i,
  getPos: o
}) => {
  const s = t.attrs.data, a = r.options.currentConfig || t.attrs.config, { title: c } = yv(a, s), { isLoading: l, handleClick: u } = bv(
    a,
    e
  ), d = !!(s?.selectedAction && !s?.content), f = l || d, h = gv(s);
  if (xv(i, n, o, s), vv(a, e, s), wv(s, u, e), !s || !a || !a.buttons?.length) return null;
  const p = !!s?.content, y = !!(s?.selectedTitle || s?.selectedAction) && p && !s?.isEditable;
  return /* @__PURE__ */ g(jr, { contentEditable: !1, children: /* @__PURE__ */ A("div", { className: "mb-3", children: [
    f ? /* @__PURE__ */ g(kv, { isEditable: s?.isEditable }) : y ? /* @__PURE__ */ g(
      Fu,
      {
        title: c,
        content: h,
        onClose: () => n()
      }
    ) : /* @__PURE__ */ g(
      "div",
      {
        className: "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg",
        onClick: (v) => v.stopPropagation(),
        children: /* @__PURE__ */ g(
          Sv,
          {
            config: a,
            isLoading: f,
            onButtonClick: u
          }
        )
      }
    ),
    /* @__PURE__ */ g(Vs, { style: { display: "none" } })
  ] }) });
}, Cv = Qe.create({
  name: "aiBlock",
  group: "block",
  atom: !0,
  selectable: !0,
  draggable: !0,
  addOptions() {
    return {
      currentConfig: null
    };
  },
  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("data-ai-block");
          return e ? JSON.parse(e) : null;
        },
        renderHTML: (t) => t.data ? {
          "data-ai-block": JSON.stringify(t.data)
        } : {}
      },
      config: {
        default: null
      },
      isCollapsed: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-ai-block]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t, node: e }) {
    const n = e.attrs.data, r = e.attrs.config;
    return !n || !r ? ["div"] : [
      "div",
      {
        ...t,
        class: "ai-block",
        "data-ai-block": JSON.stringify(n)
      },
      ["div", { class: "ai-block-content" }, `AI Block: ${r.title}`]
    ];
  },
  addNodeView() {
    return $r(Av);
  },
  addCommands() {
    return {
      insertAIBlock: (t, e) => ({ commands: n }) => n.insertContent({
        type: this.name,
        attrs: { data: t, config: e }
      }),
      executeAIAction: (t, e) => ({ commands: n }) => {
        const r = e.buttons?.find((i) => i.type === t);
        return r ? n.insertContent([
          {
            type: this.name,
            attrs: {
              data: {
                content: null,
                selectedAction: t,
                selectedTitle: r.label,
                selectedEmoji: r.emoji,
                isEditable: r.editable ?? !1,
                shouldExecute: !0
              },
              config: e
            }
          },
          {
            type: "paragraph"
          }
        ]) : !1;
      }
    };
  }
}), Ev = Cv, zu = [
  "paragraph",
  "heading",
  "blockquote",
  "codeBlock",
  "bulletList",
  "orderedList",
  "listItem",
  "table",
  "details"
], Ov = new Set(zu), Fn = (t) => t ? Ov.has(t) : !1, Bu = (t) => t ? Fn(t.type) && !t.attrs?.id ? !0 : t.content?.some(Bu) ?? !1 : !1, Vu = (t) => {
  if (!t)
    return !1;
  if (Fn(t.type.name) && !t.attrs.id)
    return !0;
  for (let e = 0; e < t.childCount; e += 1)
    if (Vu(t.child(e)))
      return !0;
  return !1;
}, Ll = (t) => t ? t instanceof nh ? Vu(t) : Bu(t) : !1, _v = pn.create({
  name: "blockId",
  addGlobalAttributes() {
    return [
      {
        // Apply to all block-level node types
        types: zu,
        attributes: {
          id: {
            default: null,
            // Parse ID from HTML when loading content
            parseHTML: (t) => t.getAttribute("data-id"),
            // Render ID as data-id attribute in HTML
            renderHTML: (t) => t.id ? {
              "data-id": t.id
            } : {},
            // Don't keep the ID when splitting blocks - generate a new one
            keepOnSplit: !1
          }
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    return [
      new gt({
        key: new $e("blockIdPlugin"),
        appendTransaction: (t, e, n) => {
          if (!t.some((a) => a.docChanged))
            return null;
          const i = n.tr;
          let o = !1;
          const s = [];
          return t.forEach((a) => {
            a.docChanged && a.steps.forEach((c) => {
              c.getMap().forEach((u, d, f, h) => {
                const p = Math.max(
                  0,
                  Math.min(f, n.doc.content.size)
                ), m = Math.max(
                  0,
                  Math.min(h, n.doc.content.size)
                );
                p < m && s.push({ from: p, to: m });
              });
            });
          }), s.length > 0 ? s.forEach(({ from: a, to: c }) => {
            a >= 0 && c <= n.doc.content.size && a < c && n.doc.nodesBetween(a, c, (l, u) => {
              if (Fn(l.type.name) && !l.attrs.id) {
                const d = Ko(5);
                i.setNodeMarkup(u, void 0, {
                  ...l.attrs,
                  id: d
                }), o = !0;
              }
            });
          }) : n.doc.descendants((a, c) => {
            if (Fn(a.type.name) && !a.attrs.id) {
              const l = Ko(5);
              i.setNodeMarkup(c, void 0, {
                ...a.attrs,
                id: l
              }), o = !0;
            }
            return !0;
          }), o ? i : null;
        }
      })
    ];
  }
}), Tv = (t, e) => {
  let n = null;
  return t.state.doc.descendants((r, i) => r.attrs.id === e ? (n = { node: r, pos: i }, !1) : !0), n;
};
var Nv = ({ key: t, editor: e, onPaste: n, onDrop: r, allowedMimeTypes: i }) => new gt({
  key: t || new $e("fileHandler"),
  props: {
    handleDrop(o, s) {
      var a;
      if (!r || !((a = s.dataTransfer) != null && a.files.length))
        return !1;
      const c = o.posAtCoords({
        left: s.clientX,
        top: s.clientY
      });
      let l = Array.from(s.dataTransfer.files);
      return i && (l = l.filter((u) => i.includes(u.type))), l.length === 0 ? !1 : (s.preventDefault(), s.stopPropagation(), r(e, l, c?.pos || 0), !0);
    },
    handlePaste(o, s) {
      var a;
      if (!n || !((a = s.clipboardData) != null && a.files.length))
        return !1;
      let c = Array.from(s.clipboardData.files);
      const l = s.clipboardData.getData("text/html");
      return i && (c = c.filter((u) => i.includes(u.type))), !(c.length === 0 || (s.preventDefault(), s.stopPropagation(), n(e, c, l), l.length > 0));
    }
  }
}), Pv = pn.create({
  name: "fileHandler",
  addOptions() {
    return {
      onPaste: void 0,
      onDrop: void 0,
      allowedMimeTypes: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      Nv({
        key: new $e(this.name),
        editor: this.editor,
        allowedMimeTypes: this.options.allowedMimeTypes,
        onDrop: this.options.onDrop,
        onPaste: this.options.onPaste
      })
    ];
  }
});
const Dv = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Mv = Qe.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", Ze(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setImage: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      })
    };
  },
  addInputRules() {
    return [
      rh({
        find: Dv,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), Iv = 50 * 1024 * 1024, Qs = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp"
], Lv = 10, en = 100, Rv = ({
  node: t,
  deleteNode: e,
  selected: n,
  editor: r,
  updateAttributes: i
}) => {
  const { src: o, alt: s, title: a, uploading: c, width: l } = t.attrs, u = r.isEditable, d = Un(), [f, h] = ue(!1), p = Ye(
    (m) => {
      m.preventDefault(), m.stopPropagation();
      const y = m.clientX, b = l ?? en, v = r.view.dom.clientWidth, w = (k) => {
        const x = (k.clientX - y) / v * 100, E = Math.min(
          en,
          Math.max(Lv, b + x)
        );
        i({ width: Math.round(E) });
      }, S = () => {
        h(!1), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", S);
      };
      h(!0), document.addEventListener("mousemove", w), document.addEventListener("mouseup", S);
    },
    [r, l, i]
  );
  return /* @__PURE__ */ g(jr, { className: "mb-2", children: /* @__PURE__ */ A(
    "div",
    {
      style: { width: `${l ?? en}%` },
      className: G(
        "image-resizable-wrapper group/image relative rounded-lg",
        n && "border-2 border-f1-border-selected-bold border-solid",
        f && "select-none"
      ),
      children: [
        /* @__PURE__ */ g(
          "img",
          {
            src: o,
            alt: s,
            title: a,
            draggable: !1,
            className: "block h-auto w-full rounded-md transition-all duration-150 ease-out"
          }
        ),
        c && /* @__PURE__ */ g("div", { className: "absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200", children: /* @__PURE__ */ g(ih, { size: "medium" }) }),
        u && !c && /* @__PURE__ */ g("div", { className: "absolute right-2 top-2 opacity-0 transition-opacity group-hover/image:opacity-100", children: /* @__PURE__ */ g(
          ce,
          {
            onClick: e,
            label: d.actions.delete,
            icon: Zi,
            variant: "default",
            hideLabel: !0
          }
        ) }),
        u && !c && /* @__PURE__ */ g(
          "div",
          {
            className: G(
              "absolute right-2 top-1/2 -translate-y-1/2 flex cursor-col-resize items-center justify-center",
              "h-12 w-2 rounded-sm border border-solid border-f1-border bg-f1-foreground-inverse-secondary",
              "opacity-0 transition-opacity group-hover/image:opacity-100",
              f && "opacity-100"
            ),
            onMouseDown: p,
            role: "separator",
            "aria-orientation": "vertical",
            "aria-label": "Resize image",
            tabIndex: 0
          }
        )
      ]
    }
  ) });
}, $v = Mv.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: en,
        parseHTML: (t) => {
          const e = t.style.width;
          return e?.endsWith("%") && parseInt(e, 10) || en;
        },
        renderHTML: (t) => !t.width || t.width === en ? {} : { style: `width: ${t.width}%` }
      },
      // We need it to track the uploading state and visual feedback
      uploading: {
        default: !1,
        renderHTML: () => ({}),
        parseHTML: () => !1
      },
      "data-upload-id": {
        default: null,
        renderHTML: () => ({}),
        parseHTML: () => null
      }
    };
  },
  addNodeView() {
    return $r(Rv);
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", Ze(this.options.HTMLAttributes, t)];
  }
}).configure({
  inline: !1,
  allowBase64: !0
}), cs = async (t, e, n, r) => {
  const i = n.maxFileSize ?? Iv, { onError: o } = n;
  if (!Qs.includes(e.type)) {
    o?.("invalid-type");
    return;
  }
  if (e.size > i) {
    o?.("file-too-large");
    return;
  }
  const s = URL.createObjectURL(e), a = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`, c = r ?? t.state.selection.anchor;
  t.chain().focus().insertContentAt(c, [
    {
      type: "image",
      attrs: {
        src: s,
        alt: e.name,
        uploading: !0,
        "data-upload-id": a
      }
    }
  ]).run();
  try {
    const { url: l } = await n.onUpload(e), { doc: u } = t.state;
    let d = null;
    u.descendants((f, h) => f.type.name === "image" && f.attrs["data-upload-id"] === a ? (d = h, !1) : !0), d !== null && t.chain().setNodeSelection(d).updateAttributes("image", {
      src: l,
      uploading: !1,
      "data-upload-id": null
    }).run();
  } catch {
    o?.("upload-failed");
    const { doc: l } = t.state;
    l.descendants((u, d) => u.type.name === "image" && u.attrs["data-upload-id"] === a ? (t.chain().setNodeSelection(d).deleteSelection().run(), !1) : !0);
  } finally {
    URL.revokeObjectURL(s);
  }
}, jv = (t) => Pv.configure({
  allowedMimeTypes: Qs,
  onDrop: (e, n, r) => {
    n.forEach((i) => {
      cs(e, i, t, r);
    });
  },
  onPaste: (e, n) => {
    n.forEach((r) => {
      cs(e, r, t);
    });
  }
}), Hu = (t, e, n) => {
  cs(t, e, n);
}, us = {
  superNegative: hh,
  negative: fh,
  neutral: dh,
  positive: uh,
  superPositive: ch
}, ds = {
  superNegative: "mood-super-negative",
  negative: "mood-negative",
  neutral: "mood-neutral",
  positive: "mood-positive",
  superPositive: "mood-super-positive"
}, Fv = ({
  firstName: t,
  lastName: e,
  src: n,
  "aria-label": r,
  "aria-labelledby": i,
  pulse: o,
  onPulseClick: s
}) => {
  const a = Un(), [c, l] = ue(!o);
  return /* @__PURE__ */ g("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ g(oh, { mode: "popLayout", initial: !!c, children: c ? /* @__PURE__ */ g(
    Qr.div,
    {
      className: "relative h-10 w-10 rounded-full bg-f1-background-warning",
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      transition: {
        scale: {
          type: "spring",
          stiffness: 290,
          damping: 15.1,
          mass: 1.4
        },
        opacity: {
          type: "linear",
          duration: 0.2
        }
      },
      children: /* @__PURE__ */ g(
        Qr.div,
        {
          initial: { opacity: 0, originX: 0.6, originY: 0.6 },
          animate: {
            rotate: [-15, 20, -15],
            opacity: 1
          },
          exit: { opacity: 0, scale: 0 },
          transition: {
            opacity: { duration: 0.4, ease: "easeOut" },
            scale: { duration: 0.4, ease: "easeOut" },
            rotate: {
              repeat: 1,
              duration: 0.5,
              ease: "easeInOut"
            }
          },
          onAnimationComplete: () => l(!1),
          className: "absolute inset-0 flex select-none items-center justify-center text-4xl",
          children: /* @__PURE__ */ g(sh, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ A(
    Qr.div,
    {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      className: "relative h-10 w-10",
      transition: {
        scale: {
          type: "spring",
          stiffness: 290,
          damping: 15.1,
          mass: 1.4
        },
        opacity: {
          type: "linear",
          duration: 0.2
        }
      },
      children: [
        /* @__PURE__ */ g(
          ah,
          {
            type: "rounded",
            name: [t, e],
            src: n,
            size: "lg",
            color: "random",
            "aria-label": r,
            "aria-labelledby": i
          }
        ),
        o ? /* @__PURE__ */ g("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ g(
          lh,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), s();
            },
            "aria-label": a.actions.edit,
            children: /* @__PURE__ */ g(
              on,
              {
                icon: us[o],
                color: ds[o],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ g(
          Qr.div,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.5 },
            transition: {
              opacity: { delay: 0.25 },
              scale: { delay: 0.25 }
            },
            className: "absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background",
            children: /* @__PURE__ */ g(
              Tn,
              {
                compact: !0,
                label: a.actions.add,
                variant: "neutral",
                size: "sm",
                icon: ph,
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), s();
                },
                hideLabel: !0
              }
            )
          },
          "reaction-button"
        )
      ]
    },
    "avatar"
  ) }) });
};
Fv.displayName = "PulseAvatar";
const zv = ({
  node: t,
  deleteNode: e,
  updateAttributes: n
}) => {
  const r = Un(), [i, o] = ue(t.attrs.isOpen ?? !1), s = t.attrs.data;
  if (!s) return null;
  const a = () => {
    const l = !i;
    o(l), n({ isOpen: l });
  }, c = [
    {
      label: r.actions.delete,
      icon: Zi,
      critical: !0,
      onClick: () => e()
    }
  ];
  return /* @__PURE__ */ A(jr, { contentEditable: !1, children: [
    /* @__PURE__ */ A(
      "div",
      {
        className: "editor-mood-tracker mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
        onClick: (l) => l.stopPropagation(),
        children: [
          /* @__PURE__ */ A("div", { className: "flex flex-row items-center justify-between gap-2", children: [
            /* @__PURE__ */ g("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ A("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ A("div", { className: "flex flex-row items-center gap-3", children: [
                /* @__PURE__ */ g("p", { className: "text-f1-text-primary text-lg font-semibold", children: s.title }),
                /* @__PURE__ */ g("div", { className: "flex flex-row items-center", children: s.days.map((l, u) => /* @__PURE__ */ g(
                  "div",
                  {
                    className: "-ml-1.5 flex items-center justify-center rounded-full bg-f1-background",
                    children: /* @__PURE__ */ g(
                      on,
                      {
                        icon: us[l.mood],
                        size: "lg",
                        color: ds[l.mood]
                      }
                    )
                  },
                  u
                )) })
              ] }),
              /* @__PURE__ */ g("p", { children: /* @__PURE__ */ g("span", { className: "text-f1-text-primary text-md font-normal", children: s.averageMoodComment }) })
            ] }) }),
            /* @__PURE__ */ A("div", { className: "flex flex-row items-center gap-1", children: [
              /* @__PURE__ */ g(
                ce,
                {
                  onClick: a,
                  variant: "outline",
                  hideLabel: !0,
                  label: i ? r.actions.collapse : r.actions.expand,
                  icon: i ? Kc : Hs,
                  size: "sm"
                }
              ),
              /* @__PURE__ */ g(Ws, { items: c, size: "sm" })
            ] })
          ] }),
          i && /* @__PURE__ */ g("div", { className: "text-f1-text-primary flex flex-col gap-2", children: s.days.map((l, u) => /* @__PURE__ */ A("div", { className: "flex flex-row items-center gap-2", children: [
            /* @__PURE__ */ g("div", { className: "flex items-center justify-center rounded-full", children: /* @__PURE__ */ g(
              on,
              {
                icon: us[l.mood],
                size: "lg",
                color: ds[l.mood]
              }
            ) }),
            /* @__PURE__ */ A("p", { className: "text-f1-text-primary text-md font-normal", children: [
              /* @__PURE__ */ A("span", { className: "font-semibold", children: [
                l.day,
                ":"
              ] }),
              " ",
              l.comment || "-"
            ] })
          ] }, u)) })
        ]
      }
    ),
    /* @__PURE__ */ g(Vs, { style: { display: "none" } })
  ] });
}, Bv = Qe.create({
  name: "moodTracker",
  group: "block",
  atom: !0,
  selectable: !0,
  draggable: !0,
  addOptions() {
    return {
      currentConfig: null
    };
  },
  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("data-mood-tracker");
          return e ? JSON.parse(e) : null;
        },
        renderHTML: (t) => t.data ? {
          "data-mood-tracker": JSON.stringify(t.data)
        } : {}
      },
      config: {
        default: null
      },
      isOpen: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-mood-tracker]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t, node: e }) {
    const n = e.attrs.data;
    return n ? [
      "div",
      {
        ...t,
        class: "mood-tracker-block",
        "data-mood-tracker": JSON.stringify(n)
      },
      ["div", { class: "mood-tracker-content" }, `Mood Tracker: ${n.title}`]
    ] : ["div"];
  },
  addNodeView() {
    return $r(zv);
  },
  addCommands() {
    return {
      insertMoodTracker: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: { data: t }
      })
    };
  }
}), Vv = Bv, Hv = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/, Wv = /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/, Uv = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*)$/gm, Kv = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\S*)$/gm;
function mi(t) {
  const e = t.match(Hv);
  if (e)
    return {
      provider: "youtube",
      videoId: e[1],
      embedUrl: `https://www.youtube-nocookie.com/embed/${e[1]}`
    };
  const n = t.match(Wv);
  return n ? {
    provider: "vimeo",
    videoId: n[1],
    embedUrl: `https://player.vimeo.com/video/${n[1]}`
  } : null;
}
const Gv = ({
  node: t,
  deleteNode: e,
  selected: n,
  editor: r
}) => {
  const { src: i, provider: o } = t.attrs, s = r.isEditable, a = Un();
  return /* @__PURE__ */ g(jr, { className: "mb-2", children: /* @__PURE__ */ A(
    "div",
    {
      className: G(
        "video-embed-wrapper relative overflow-hidden rounded-lg",
        n && "border-2 border-solid border-f1-border-selected-bold"
      ),
      children: [
        /* @__PURE__ */ g("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ g(
          "iframe",
          {
            src: i,
            title: `${o} video`,
            className: "absolute inset-0 h-full w-full border-0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0
          }
        ) }),
        s && /* @__PURE__ */ g("div", { className: "dark absolute right-2 top-2", children: /* @__PURE__ */ g(
          ce,
          {
            onClick: e,
            label: a.actions.delete,
            icon: Zi,
            variant: "outline",
            hideLabel: !0,
            size: "sm"
          }
        ) })
      ]
    }
  ) });
}, Yv = Qe.create({
  name: "videoEmbed",
  group: "block",
  atom: !0,
  draggable: !0,
  addAttributes() {
    return {
      src: { default: null },
      provider: { default: null },
      videoId: { default: null }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video-embed]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "div",
      Ze(t, { "data-video-embed": "" }),
      [
        "iframe",
        {
          src: t.src,
          frameborder: "0",
          allowfullscreen: "true",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          style: "width:100%;aspect-ratio:16/9;"
        }
      ]
    ];
  },
  addNodeView() {
    return $r(Gv);
  },
  addCommands() {
    return {
      setVideoEmbed: ({ src: t }) => ({ commands: e }) => {
        const n = mi(t);
        return n ? e.insertContent({
          type: this.name,
          attrs: {
            src: n.embedUrl,
            provider: n.provider,
            videoId: n.videoId
          }
        }) : !1;
      }
    };
  },
  addPasteRules() {
    return [
      Ra({
        find: Uv,
        type: this.type,
        getAttributes: (t) => {
          const e = mi(t[0]);
          return e ? {
            src: e.embedUrl,
            provider: e.provider,
            videoId: e.videoId
          } : !1;
        }
      }),
      Ra({
        find: Kv,
        type: this.type,
        getAttributes: (t) => {
          const e = mi(t[0]);
          return e ? {
            src: e.embedUrl,
            provider: e.provider,
            videoId: e.videoId
          } : !1;
        }
      })
    ];
  }
}), qv = ({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}) => fs({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}).flatMap((i) => i.commands), fs = ({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}) => [
  // Only include AI Block group if config is provided
  ...t?.buttons && t.buttons.length > 0 ? [
    {
      title: t.title,
      commands: [
        ...t.buttons.map((r) => ({
          title: r.label,
          command: (i) => {
            i.chain().focus().executeAIAction(r.type, t).run();
          },
          icon: r.icon
        }))
      ]
    }
  ] : [],
  {
    title: e.richTextEditor.groups.textStyles,
    commands: [
      {
        title: e.richTextEditor.heading1,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleHeading({ level: 1 }).run();
        },
        icon: mh
      },
      {
        title: e.richTextEditor.heading2,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleHeading({ level: 2 }).run();
        },
        icon: gh
      },
      {
        title: e.richTextEditor.heading3,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleHeading({ level: 3 }).run();
        },
        icon: yh
      }
    ]
  },
  {
    title: e.richTextEditor.groups.lists,
    commands: [
      {
        title: e.richTextEditor.bulletList,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleBulletList().run();
        },
        icon: bh
      },
      {
        title: e.richTextEditor.orderedList,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleOrderedList().run();
        },
        icon: vh
      },
      {
        title: e.richTextEditor.taskList,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleTaskList().run();
        },
        icon: wh
      }
    ]
  },
  {
    title: e.richTextEditor.groups.blocks,
    commands: [
      ...n ? [
        {
          title: "Image",
          command: (r) => {
            const i = document.createElement("input");
            i.type = "file", i.accept = Qs.join(","), i.onchange = () => {
              const o = i.files?.[0];
              o && Hu(r, o, n);
            }, i.click();
          },
          icon: xh
        }
      ] : [],
      {
        title: e.richTextEditor.video,
        command: (r) => {
          const i = window.prompt(
            e.richTextEditor.videoUrlPrompt
          );
          i && (mi(i) ? r.commands.setVideoEmbed({ src: i }) : window.alert(e.richTextEditor.videoUrlInvalid));
        },
        icon: Sh
      },
      {
        title: e.richTextEditor.details,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).setDetails().run();
        },
        icon: Hs
      },
      {
        title: e.richTextEditor.codeBlock,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleCodeBlock().run();
        },
        icon: kh
      },
      {
        title: e.richTextEditor.quote,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleBlockquote().run();
        },
        icon: Ah
      },
      {
        title: e.richTextEditor.divider,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).setHorizontalRule().run();
        },
        icon: Ch
      }
    ]
  }
], Wu = Pt(
  ({ items: t, groups: e, command: n }, r) => {
    const [i, o] = ue(0), s = Ct(null), a = Ct(null), c = e || [{ title: "", commands: t }], l = c.flatMap((y) => y.commands), u = Ye(
      (y) => {
        const b = l[y];
        b && n(b);
      },
      [l, n]
    ), d = Ye((y) => {
      const b = s.current;
      if (!b) return;
      const v = b.getBoundingClientRect(), w = y.getBoundingClientRect();
      w.top < v.top ? b.scrollTop += w.top - v.top : w.bottom > v.bottom && (b.scrollTop += w.bottom - v.bottom);
    }, []), f = Ye(() => {
      o((y) => y <= 0 ? l.length - 1 : y - 1);
    }, [l.length]), h = Ye(() => {
      o((y) => y >= l.length - 1 ? 0 : y + 1);
    }, [l.length]), p = Ye(() => {
      u(i);
    }, [i, u]);
    it(() => {
      a.current && d(a.current);
    }, [i, d]), it(() => {
      o(0);
    }, [t.length]), yc(
      r,
      () => ({
        onKeyDown: ({ event: y }) => y.key === "ArrowUp" ? (y.preventDefault(), f(), !0) : y.key === "ArrowDown" ? (y.preventDefault(), h(), !0) : y.key === "Enter" ? (y.preventDefault(), p(), !0) : !1
      }),
      [f, h, p]
    );
    const m = (y, b) => {
      let v = 0;
      for (let w = 0; w < y; w++)
        v += c[w].commands.length;
      return v + b;
    };
    return /* @__PURE__ */ g(
      "div",
      {
        ref: s,
        className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
        children: c.map((y, b) => /* @__PURE__ */ A("div", { children: [
          /* @__PURE__ */ A("div", { className: "p-1", children: [
            e && y.title && /* @__PURE__ */ g("div", { className: "p-2", children: /* @__PURE__ */ g("p", { className: "text-sm font-medium tracking-wide text-f1-foreground-secondary", children: y.title }) }),
            y.commands.map((v, w) => {
              const S = m(b, w), k = S === i;
              return /* @__PURE__ */ A(
                "div",
                {
                  ref: k ? a : null,
                  className: G(
                    "flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover",
                    k && "bg-f1-background-secondary"
                  ),
                  onClick: () => {
                    o(S), u(S);
                  },
                  onMouseEnter: () => o(S),
                  children: [
                    v.emoji ? /* @__PURE__ */ g("span", { className: "text-base", children: v.emoji }) : v.icon ? /* @__PURE__ */ g(
                      on,
                      {
                        icon: v.icon,
                        className: "text-f1-foreground-secondary"
                      }
                    ) : null,
                    /* @__PURE__ */ g("p", { className: "flex-grow text-sm font-medium text-f1-foreground", children: v.title })
                  ]
                },
                `${b}-${w}`
              );
            })
          ] }),
          e && b < c.length - 1 && /* @__PURE__ */ g("div", { className: "py-1", children: /* @__PURE__ */ g("div", { className: "h-[1px] w-full bg-f1-border-secondary" }) })
        ] }, b))
      }
    );
  }
);
Wu.displayName = "CommandList";
const Xv = ({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}) => pn.create({
  name: "slashCommand",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        allowSpaces: !0,
        allowedPrefixes: [" ", `
`],
        startOfLine: !1,
        command: ({
          editor: r,
          range: i,
          props: o
        }) => {
          const { state: s } = r, { from: a, to: c } = s.selection, u = s.doc.resolve(a), f = u.parent.textBetween(
            Math.max(0, u.parentOffset - 50),
            // Look back up to 50 chars
            u.parentOffset,
            void 0,
            "￼"
          ).lastIndexOf("/");
          if (f !== -1) {
            const h = a - (u.parentOffset - f), p = c;
            r.chain().focus().deleteRange({ from: h, to: p }).run();
          } else
            r.chain().focus().deleteRange(i).run();
          o.command(r);
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      Eh({
        editor: this.editor,
        ...this.options.suggestion,
        items: ({ query: r }) => {
          const i = r.toLowerCase().trim(), o = qv({
            translations: e,
            aiBlockConfig: t,
            imageUploadConfig: n
          }).filter((s) => {
            const a = s.title.toLowerCase();
            return i ? a.includes(i) : !0;
          });
          return o.length > 0 ? o : [];
        },
        render: () => {
          let r = null, i = null, o = null;
          const s = () => {
            const c = window.getSelection();
            if (c && c.rangeCount > 0) {
              const l = c.getRangeAt(0), { startContainer: u, startOffset: d } = l;
              if (u.nodeType === Node.TEXT_NODE) {
                const h = (u.textContent || "").lastIndexOf("/", d);
                if (h !== -1) {
                  const p = document.createRange();
                  return p.setStart(u, h), p.setEnd(u, h + 1), p.getBoundingClientRect();
                }
              }
              return l.getBoundingClientRect();
            }
            return document.body.getBoundingClientRect();
          }, a = ({
            content: c,
            anchorRect: l
          }) => {
            const u = {
              position: "absolute",
              top: l.bottom + window.scrollY,
              left: l.left + window.scrollX,
              width: 0,
              height: 0
            };
            return /* @__PURE__ */ A(Th, { open: !0, modal: !1, children: [
              /* @__PURE__ */ g("div", { style: u }),
              /* @__PURE__ */ g(Nh, { asChild: !0, children: /* @__PURE__ */ g("div", { style: u }) }),
              /* @__PURE__ */ g(
                Ph,
                {
                  side: "bottom",
                  align: "start",
                  sideOffset: 15,
                  collisionPadding: 10,
                  style: { zIndex: 9999 },
                  onOpenAutoFocus: (d) => {
                    d.preventDefault();
                  },
                  onCloseAutoFocus: (d) => {
                    d.preventDefault();
                  },
                  children: /* @__PURE__ */ g(
                    "div",
                    {
                      ref: (d) => {
                        d && c.parentNode !== d && d.appendChild(c);
                      }
                    }
                  )
                }
              )
            ] });
          };
          return {
            onStart: (c) => {
              if (c.items.length === 0) return;
              const l = fs({
                aiBlockConfig: t,
                translations: e,
                imageUploadConfig: n
              });
              let u = l;
              if (c.query && c.query.trim()) {
                const h = c.query.toLowerCase().trim();
                u = l.map((p) => ({
                  ...p,
                  commands: p.commands.filter((m) => m.title.toLowerCase().includes(h))
                })).filter((p) => p.commands.length > 0);
              }
              r = new Oh(Wu, {
                props: {
                  items: c.items,
                  groups: u,
                  command: c.command
                },
                editor: c.editor
              });
              const f = (() => {
                if (c.clientRect) {
                  const h = c.clientRect();
                  if (h && h.width && h.height) return h;
                }
                return s();
              })();
              o = document.createElement("div"), document.body.appendChild(o), i = _h.createRoot(o), i.render(
                /* @__PURE__ */ g(
                  a,
                  {
                    content: r.element,
                    anchorRect: f,
                    editor: c.editor
                  }
                )
              );
            },
            onUpdate: (c) => {
              if (!r || !o || !i) return;
              const l = fs({
                aiBlockConfig: t,
                translations: e,
                imageUploadConfig: n
              });
              let u = l;
              if (c.query && c.query.trim()) {
                const d = c.query.toLowerCase().trim();
                u = l.map((f) => ({
                  ...f,
                  commands: f.commands.filter((h) => h.title.toLowerCase().includes(d))
                })).filter((f) => f.commands.length > 0);
              }
              if (r.updateProps({
                items: c.items,
                groups: u
              }), c.items.length === 0)
                o && (o.style.display = "none");
              else {
                o && (o.style.display = "");
                const f = (() => {
                  if (c.clientRect) {
                    const h = c.clientRect();
                    if (h && h.width && h.height) return h;
                  }
                  return s();
                })();
                i.render(
                  /* @__PURE__ */ g(
                    a,
                    {
                      content: r.element,
                      anchorRect: f,
                      editor: c.editor
                    }
                  )
                );
              }
            },
            onKeyDown: (c) => {
              if (c.event.key === "Escape")
                return i && o && (i.unmount(), o.remove()), !0;
              const l = r?.ref;
              return l && typeof l == "object" && "onKeyDown" in l && typeof l.onKeyDown == "function" && l.onKeyDown(c) || !1;
            },
            onExit() {
              i && o && (i.unmount(), o.remove()), r?.destroy();
            }
          };
        }
      })
    ];
  }
}), Jv = ({
  node: t,
  deleteNode: e,
  updateAttributes: n
}) => {
  const r = Un(), [i, o] = ue(t.attrs.isOpen ?? !1), s = t.attrs.data;
  if (!s) return null;
  const a = () => {
    const d = !i;
    o(d), n({ isOpen: d });
  }, c = [
    {
      label: r.actions.delete,
      icon: Zi,
      critical: !0,
      onClick: () => e()
    }
  ], l = (d) => s.users.find((f) => f.id === d), u = (d) => {
    try {
      const f = new Date(d);
      return Nn(f, "HH:mm");
    } catch (f) {
      return console.error(f), d;
    }
  };
  return /* @__PURE__ */ A(jr, { contentEditable: !1, children: [
    /* @__PURE__ */ A(
      "div",
      {
        className: "editor-transcript mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
        onClick: (d) => d.stopPropagation(),
        children: [
          /* @__PURE__ */ A("div", { className: "flex flex-row items-center justify-between gap-2", children: [
            /* @__PURE__ */ g("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ A("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ g("div", { className: "flex flex-row items-center gap-3", children: /* @__PURE__ */ g("p", { className: "text-f1-text-primary text-lg font-semibold", children: s.title }) }),
              /* @__PURE__ */ g("p", { className: "text-f1-text-secondary text-sm", children: s.messages.length })
            ] }) }),
            /* @__PURE__ */ A("div", { className: "flex flex-row items-center gap-1", children: [
              /* @__PURE__ */ g(
                ce,
                {
                  onClick: a,
                  variant: "outline",
                  hideLabel: !0,
                  label: i ? r.actions.collapse : r.actions.expand,
                  icon: i ? Kc : Hs,
                  size: "sm"
                }
              ),
              /* @__PURE__ */ g(Ws, { items: c, size: "sm" })
            ] })
          ] }),
          i && /* @__PURE__ */ g("div", { className: "scrollbar-macos text-f1-text-primary flex max-h-[500px] flex-col gap-4 overflow-y-auto", children: s.messages.map((d, f) => {
            const h = l(d.userId);
            return /* @__PURE__ */ A("div", { className: "flex flex-row gap-3", children: [
              h?.imageUrl && /* @__PURE__ */ g(
                Dh,
                {
                  size: "xs",
                  src: h.imageUrl,
                  firstName: h.fullname,
                  lastName: ""
                }
              ),
              /* @__PURE__ */ A("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ A("div", { className: "flex items-baseline gap-2", children: [
                  /* @__PURE__ */ g("span", { className: "text-f1-text-primary font-medium", children: h?.fullname || "Unknown User" }),
                  /* @__PURE__ */ g("span", { className: "text-f1-text-tertiary text-xs", children: u(d.dateTime) })
                ] }),
                /* @__PURE__ */ g("p", { className: "text-f1-text-secondary", children: d.text })
              ] })
            ] }, f);
          }) })
        ]
      }
    ),
    /* @__PURE__ */ g(Vs, { style: { display: "none" } })
  ] });
}, Zv = Qe.create({
  name: "transcript",
  group: "block",
  atom: !0,
  selectable: !0,
  draggable: !0,
  addOptions() {
    return {
      currentConfig: null
    };
  },
  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("data-transcript");
          return e ? JSON.parse(e) : null;
        },
        renderHTML: (t) => t.data ? {
          "data-transcript": JSON.stringify(t.data)
        } : {}
      },
      config: {
        default: null
      },
      isOpen: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-transcript]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t, node: e }) {
    const n = e.attrs.data;
    return n ? [
      "div",
      {
        ...t,
        class: "transcript-block",
        "data-transcript": JSON.stringify(n)
      },
      ["div", { class: "transcript-content" }, `Transcript: ${n.title}`]
    ] : ["div"];
  },
  addNodeView() {
    return $r(Jv);
  },
  addCommands() {
    return {
      insertTranscript: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: { data: t }
      })
    };
  }
}), Qv = Zv, st = () => /* @__PURE__ */ new Map(), hs = (t) => {
  const e = st();
  return t.forEach((n, r) => {
    e.set(r, n);
  }), e;
}, It = (t, e, n) => {
  let r = t.get(e);
  return r === void 0 && t.set(e, r = n()), r;
}, e0 = (t, e) => {
  const n = [];
  for (const [r, i] of t)
    n.push(e(i, r));
  return n;
}, t0 = (t, e) => {
  for (const [n, r] of t)
    if (e(r, n))
      return !0;
  return !1;
}, cn = () => /* @__PURE__ */ new Set(), Do = (t) => t[t.length - 1], n0 = (t, e) => {
  for (let n = 0; n < e.length; n++)
    t.push(e[n]);
}, un = Array.from, r0 = (t, e) => {
  for (let n = 0; n < t.length; n++)
    if (e(t[n], n, t))
      return !0;
  return !1;
}, ps = Array.isArray;
class Uu {
  constructor() {
    this._observers = st();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(e, n) {
    return It(
      this._observers,
      /** @type {string} */
      e,
      cn
    ).add(n), n;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(e, n) {
    const r = (...i) => {
      this.off(
        e,
        /** @type {any} */
        r
      ), n(...i);
    };
    this.on(
      e,
      /** @type {any} */
      r
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(e, n) {
    const r = this._observers.get(e);
    r !== void 0 && (r.delete(n), r.size === 0 && this._observers.delete(e));
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(e, n) {
    return un((this._observers.get(e) || st()).values()).forEach((r) => r(...n));
  }
  destroy() {
    this._observers = st();
  }
}
const Nt = Math.floor, gi = Math.abs, zn = (t, e) => t < e ? t : e, zt = (t, e) => t > e ? t : e, Ku = (t) => t !== 0 ? t < 0 : 1 / t < 0, Rl = 1, $l = 2, Mo = 4, Io = 8, Cr = 32, Et = 64, Te = 128, i0 = 1 << 29, so = 31, ms = 63, rn = 127, o0 = 2147483647, Gu = Number.MAX_SAFE_INTEGER, s0 = Number.isInteger || ((t) => typeof t == "number" && isFinite(t) && Nt(t) === t), a0 = String.fromCharCode, l0 = (t) => t.toLowerCase(), c0 = /^\s*/g, u0 = (t) => t.replace(c0, ""), d0 = /([A-Z])/g, jl = (t, e) => u0(t.replace(d0, (n) => `${e}${l0(n)}`)), f0 = (t) => {
  const e = unescape(encodeURIComponent(t)), n = e.length, r = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    r[i] = /** @type {number} */
    e.codePointAt(i);
  return r;
}, Er = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), h0 = (t) => Er.encode(t), p0 = Er ? h0 : f0;
let gr = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
gr && gr.decode(new Uint8Array()).length === 1 && (gr = null);
class Gr {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const Yr = () => new Gr(), m0 = (t) => {
  const e = Yr();
  return t(e), rt(e);
}, g0 = (t) => {
  let e = t.cpos;
  for (let n = 0; n < t.bufs.length; n++)
    e += t.bufs[n].length;
  return e;
}, rt = (t) => {
  const e = new Uint8Array(g0(t));
  let n = 0;
  for (let r = 0; r < t.bufs.length; r++) {
    const i = t.bufs[r];
    e.set(i, n), n += i.length;
  }
  return e.set(new Uint8Array(t.cbuf.buffer, 0, t.cpos), n), e;
}, y0 = (t, e) => {
  const n = t.cbuf.length;
  n - t.cpos < e && (t.bufs.push(new Uint8Array(t.cbuf.buffer, 0, t.cpos)), t.cbuf = new Uint8Array(zt(n, e) * 2), t.cpos = 0);
}, de = (t, e) => {
  const n = t.cbuf.length;
  t.cpos === n && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(n * 2), t.cpos = 0), t.cbuf[t.cpos++] = e;
}, gs = de, H = (t, e) => {
  for (; e > rn; )
    de(t, Te | rn & e), e = Nt(e / 128);
  de(t, rn & e);
}, ea = (t, e) => {
  const n = Ku(e);
  for (n && (e = -e), de(t, (e > ms ? Te : 0) | (n ? Et : 0) | ms & e), e = Nt(e / 64); e > 0; )
    de(t, (e > rn ? Te : 0) | rn & e), e = Nt(e / 128);
}, ys = new Uint8Array(3e4), b0 = ys.length / 3, v0 = (t, e) => {
  if (e.length < b0) {
    const n = Er.encodeInto(e, ys).written || 0;
    H(t, n);
    for (let r = 0; r < n; r++)
      de(t, ys[r]);
  } else
    ze(t, p0(e));
}, w0 = (t, e) => {
  const n = unescape(encodeURIComponent(e)), r = n.length;
  H(t, r);
  for (let i = 0; i < r; i++)
    de(
      t,
      /** @type {number} */
      n.codePointAt(i)
    );
}, Cn = Er && /** @type {any} */
Er.encodeInto ? v0 : w0, ao = (t, e) => {
  const n = t.cbuf.length, r = t.cpos, i = zn(n - r, e.length), o = e.length - i;
  t.cbuf.set(e.subarray(0, i), r), t.cpos += i, o > 0 && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(zt(n * 2, o)), t.cbuf.set(e.subarray(i)), t.cpos = o);
}, ze = (t, e) => {
  H(t, e.byteLength), ao(t, e);
}, ta = (t, e) => {
  y0(t, e);
  const n = new DataView(t.cbuf.buffer, t.cpos, e);
  return t.cpos += e, n;
}, x0 = (t, e) => ta(t, 4).setFloat32(0, e, !1), S0 = (t, e) => ta(t, 8).setFloat64(0, e, !1), k0 = (t, e) => (
  /** @type {any} */
  ta(t, 8).setBigInt64(0, e, !1)
), Fl = new DataView(new ArrayBuffer(4)), A0 = (t) => (Fl.setFloat32(0, t), Fl.getFloat32(0) === t), Bn = (t, e) => {
  switch (typeof e) {
    case "string":
      de(t, 119), Cn(t, e);
      break;
    case "number":
      s0(e) && gi(e) <= o0 ? (de(t, 125), ea(t, e)) : A0(e) ? (de(t, 124), x0(t, e)) : (de(t, 123), S0(t, e));
      break;
    case "bigint":
      de(t, 122), k0(t, e);
      break;
    case "object":
      if (e === null)
        de(t, 126);
      else if (ps(e)) {
        de(t, 117), H(t, e.length);
        for (let n = 0; n < e.length; n++)
          Bn(t, e[n]);
      } else if (e instanceof Uint8Array)
        de(t, 116), ze(t, e);
      else {
        de(t, 118);
        const n = Object.keys(e);
        H(t, n.length);
        for (let r = 0; r < n.length; r++) {
          const i = n[r];
          Cn(t, i), Bn(t, e[i]);
        }
      }
      break;
    case "boolean":
      de(t, e ? 120 : 121);
      break;
    default:
      de(t, 127);
  }
};
class zl extends Gr {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(e) {
    super(), this.w = e, this.s = null, this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(e) {
    this.s === e ? this.count++ : (this.count > 0 && H(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
  }
}
const Bl = (t) => {
  t.count > 0 && (ea(t.encoder, t.count === 1 ? t.s : -t.s), t.count > 1 && H(t.encoder, t.count - 2));
};
class yi {
  constructor() {
    this.encoder = new Gr(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.s === e ? this.count++ : (Bl(this), this.count = 1, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Bl(this), rt(this.encoder);
  }
}
const Vl = (t) => {
  if (t.count > 0) {
    const e = t.diff * 2 + (t.count === 1 ? 0 : 1);
    ea(t.encoder, e), t.count > 1 && H(t.encoder, t.count - 2);
  }
};
class Lo {
  constructor() {
    this.encoder = new Gr(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.diff === e - this.s ? (this.s = e, this.count++) : (Vl(this), this.count = 1, this.diff = e - this.s, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Vl(this), rt(this.encoder);
  }
}
class C0 {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new yi();
  }
  /**
   * @param {string} string
   */
  write(e) {
    this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
  }
  toUint8Array() {
    const e = new Gr();
    return this.sarr.push(this.s), this.s = "", Cn(e, this.sarr.join("")), ao(e, this.lensE.toUint8Array()), rt(e);
  }
}
const Bt = (t) => new Error(t), at = () => {
  throw Bt("Method unimplemented");
}, Re = () => {
  throw Bt("Unexpected case");
}, Yu = Bt("Unexpected end of array"), qu = Bt("Integer out of Range");
class lo {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(e) {
    this.arr = e, this.pos = 0;
  }
}
const na = (t) => new lo(t), E0 = (t) => t.pos !== t.arr.length, O0 = (t, e) => {
  const n = new Uint8Array(t.arr.buffer, t.pos + t.arr.byteOffset, e);
  return t.pos += e, n;
}, Ke = (t) => O0(t, Z(t)), Or = (t) => t.arr[t.pos++], Z = (t) => {
  let e = 0, n = 1;
  const r = t.arr.length;
  for (; t.pos < r; ) {
    const i = t.arr[t.pos++];
    if (e = e + (i & rn) * n, n *= 128, i < Te)
      return e;
    if (e > Gu)
      throw qu;
  }
  throw Yu;
}, ra = (t) => {
  let e = t.arr[t.pos++], n = e & ms, r = 64;
  const i = (e & Et) > 0 ? -1 : 1;
  if ((e & Te) === 0)
    return i * n;
  const o = t.arr.length;
  for (; t.pos < o; ) {
    if (e = t.arr[t.pos++], n = n + (e & rn) * r, r *= 128, e < Te)
      return i * n;
    if (n > Gu)
      throw qu;
  }
  throw Yu;
}, _0 = (t) => {
  let e = Z(t);
  if (e === 0)
    return "";
  {
    let n = String.fromCodePoint(Or(t));
    if (--e < 100)
      for (; e--; )
        n += String.fromCodePoint(Or(t));
    else
      for (; e > 0; ) {
        const r = e < 1e4 ? e : 1e4, i = t.arr.subarray(t.pos, t.pos + r);
        t.pos += r, n += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          i
        ), e -= r;
      }
    return decodeURIComponent(escape(n));
  }
}, T0 = (t) => (
  /** @type any */
  gr.decode(Ke(t))
), bs = gr ? T0 : _0, ia = (t, e) => {
  const n = new DataView(t.arr.buffer, t.arr.byteOffset + t.pos, e);
  return t.pos += e, n;
}, N0 = (t) => ia(t, 4).getFloat32(0, !1), P0 = (t) => ia(t, 8).getFloat64(0, !1), D0 = (t) => (
  /** @type {any} */
  ia(t, 8).getBigInt64(0, !1)
), M0 = [
  (t) => {
  },
  // CASE 127: undefined
  (t) => null,
  // CASE 126: null
  ra,
  // CASE 125: integer
  N0,
  // CASE 124: float32
  P0,
  // CASE 123: float64
  D0,
  // CASE 122: bigint
  (t) => !1,
  // CASE 121: boolean (false)
  (t) => !0,
  // CASE 120: boolean (true)
  bs,
  // CASE 119: string
  (t) => {
    const e = Z(t), n = {};
    for (let r = 0; r < e; r++) {
      const i = bs(t);
      n[i] = Li(t);
    }
    return n;
  },
  (t) => {
    const e = Z(t), n = [];
    for (let r = 0; r < e; r++)
      n.push(Li(t));
    return n;
  },
  Ke
  // CASE 116: Uint8Array
], Li = (t) => M0[127 - Or(t)](t);
class Hl extends lo {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(e, n) {
    super(e), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), E0(this) ? this.count = Z(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class bi extends lo {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    super(e), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = ra(this);
      const e = Ku(this.s);
      this.count = 1, e && (this.s = -this.s, this.count = Z(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class Ro extends lo {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    super(e), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const e = ra(this), n = e & 1;
      this.diff = Nt(e / 2), this.count = 1, n && (this.count = Z(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class I0 {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    this.decoder = new bi(e), this.str = bs(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const e = this.spos + this.decoder.read(), n = this.str.slice(this.spos, e);
    return this.spos = e, n;
  }
}
const L0 = crypto.getRandomValues.bind(crypto), R0 = Math.random, Xu = () => L0(new Uint32Array(1))[0], $0 = (t) => t[Nt(R0() * t.length)], j0 = "10000000-1000-4000-8000" + -1e11, F0 = () => j0.replace(
  /[018]/g,
  /** @param {number} c */
  (t) => (t ^ Xu() & 15 >> t / 4).toString(16)
), z0 = Date.now, Wl = (t) => (
  /** @type {Promise<T>} */
  new Promise(t)
);
Promise.all.bind(Promise);
const Ul = (t) => t === void 0 ? null : t;
class B0 {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(e, n) {
    this.map.set(e, n);
  }
  /**
   * @param {string} key
   */
  getItem(e) {
    return this.map.get(e);
  }
}
let Ju = new B0(), V0 = !0;
try {
  typeof localStorage < "u" && localStorage && (Ju = localStorage, V0 = !1);
} catch {
}
const H0 = Ju, W0 = Object.assign, Zu = Object.keys, U0 = (t, e) => {
  for (const n in t)
    e(t[n], n);
}, Kl = (t) => Zu(t).length, K0 = (t) => {
  for (const e in t)
    return !1;
  return !0;
}, Qu = (t, e) => {
  for (const n in t)
    if (!e(t[n], n))
      return !1;
  return !0;
}, G0 = (t, e) => Object.prototype.hasOwnProperty.call(t, e), Y0 = (t, e) => t === e || Kl(t) === Kl(e) && Qu(t, (n, r) => (n !== void 0 || G0(e, r)) && e[r] === n), q0 = Object.freeze, ed = (t) => {
  for (const e in t) {
    const n = t[e];
    (typeof n == "object" || typeof n == "function") && ed(t[e]);
  }
  return q0(t);
}, oa = (t, e, n = 0) => {
  try {
    for (; n < t.length; n++)
      t[n](...e);
  } finally {
    n < t.length && oa(t, e, n + 1);
  }
}, X0 = (t, e) => e.includes(t), Vn = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", td = typeof window < "u" && typeof document < "u" && !Vn;
let ht;
const J0 = () => {
  if (ht === void 0)
    if (Vn) {
      ht = st();
      const t = process.argv;
      let e = null;
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        r[0] === "-" ? (e !== null && ht.set(e, ""), e = r) : e !== null && (ht.set(e, r), e = null);
      }
      e !== null && ht.set(e, "");
    } else typeof location == "object" ? (ht = st(), (location.search || "?").slice(1).split("&").forEach((t) => {
      if (t.length !== 0) {
        const [e, n] = t.split("=");
        ht.set(`--${jl(e, "-")}`, n), ht.set(`-${jl(e, "-")}`, n);
      }
    })) : ht = st();
  return ht;
}, vs = (t) => J0().has(t), Ri = (t) => Ul(Vn ? process.env[t.toUpperCase().replaceAll("-", "_")] : H0.getItem(t)), nd = (t) => vs("--" + t) || Ri(t) !== null;
nd("production");
const Z0 = Vn && X0(process.env.FORCE_COLOR, ["true", "1", "2"]), Q0 = Z0 || !vs("--no-colors") && // @todo deprecate --no-colors
!nd("no-color") && (!Vn || process.stdout.isTTY) && (!Vn || vs("--color") || Ri("COLORTERM") !== null || (Ri("TERM") || "").includes("color")), ew = (t) => {
  let e = "";
  for (let n = 0; n < t.byteLength; n++)
    e += a0(t[n]);
  return btoa(e);
}, tw = (t) => Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("base64"), nw = td ? ew : tw, rw = (t) => m0((e) => Bn(e, t));
class iw {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(e, n) {
    this.left = e, this.right = n;
  }
}
const xt = (t, e) => new iw(t, e), ow = (
  /** @type {Document} */
  typeof document < "u" ? document : {}
);
typeof DOMParser < "u" && new DOMParser();
const sw = (t) => e0(t, (e, n) => `${n}:${e};`).join(""), aw = (t) => class {
  /**
   * @param {number} timeoutId
   */
  constructor(n) {
    this._ = n;
  }
  destroy() {
    t(this._);
  }
}, lw = aw(clearTimeout), rd = (t, e) => new lw(setTimeout(e, t)), Lt = Symbol, id = Lt(), od = Lt(), cw = Lt(), uw = Lt(), dw = Lt(), sd = Lt(), fw = Lt(), sa = Lt(), hw = Lt(), pw = (t) => {
  t.length === 1 && t[0]?.constructor === Function && (t = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  t[0]());
  const e = [], n = [];
  let r = 0;
  for (; r < t.length; r++) {
    const i = t[r];
    if (i === void 0)
      break;
    if (i.constructor === String || i.constructor === Number)
      e.push(i);
    else if (i.constructor === Object)
      break;
  }
  for (r > 0 && n.push(e.join("")); r < t.length; r++) {
    const i = t[r];
    i instanceof Symbol || n.push(i);
  }
  return n;
}, mw = {
  [id]: xt("font-weight", "bold"),
  [od]: xt("font-weight", "normal"),
  [cw]: xt("color", "blue"),
  [dw]: xt("color", "green"),
  [uw]: xt("color", "grey"),
  [sd]: xt("color", "red"),
  [fw]: xt("color", "purple"),
  [sa]: xt("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [hw]: xt("color", "black")
}, gw = (t) => {
  t.length === 1 && t[0]?.constructor === Function && (t = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  t[0]());
  const e = [], n = [], r = st();
  let i = [], o = 0;
  for (; o < t.length; o++) {
    const s = t[o], a = mw[s];
    if (a !== void 0)
      r.set(a.left, a.right);
    else {
      if (s === void 0)
        break;
      if (s.constructor === String || s.constructor === Number) {
        const c = sw(r);
        o > 0 || c.length > 0 ? (e.push("%c" + s), n.push(c)) : e.push(s);
      } else
        break;
    }
  }
  for (o > 0 && (i = n, i.unshift(e.join(""))); o < t.length; o++) {
    const s = t[o];
    s instanceof Symbol || i.push(s);
  }
  return i;
}, ad = Q0 ? gw : pw, yw = (...t) => {
  console.log(...ad(t)), cd.forEach((e) => e.print(t));
}, ld = (...t) => {
  console.warn(...ad(t)), t.unshift(sa), cd.forEach((e) => e.print(t));
}, cd = cn(), ud = (t) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: t
}), bw = (t, e) => ud(() => {
  let n;
  do
    n = t.next();
  while (!n.done && !e(n.value));
  return n;
}), $o = (t, e) => ud(() => {
  const { done: n, value: r } = t.next();
  return { done: n, value: n ? void 0 : e(r) };
});
class aa {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(e, n) {
    this.clock = e, this.len = n;
  }
}
class Jn {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const Vt = (t, e, n) => e.clients.forEach((r, i) => {
  const o = (
    /** @type {Array<GC|Item>} */
    t.doc.store.clients.get(i)
  );
  if (o != null) {
    const s = o[o.length - 1], a = s.id.clock + s.length;
    for (let c = 0, l = r[c]; c < r.length && l.clock < a; l = r[++c])
      bd(t, o, l.clock, l.len, n);
  }
}), vw = (t, e) => {
  let n = 0, r = t.length - 1;
  for (; n <= r; ) {
    const i = Nt((n + r) / 2), o = t[i], s = o.clock;
    if (s <= e) {
      if (e < s + o.len)
        return i;
      n = i + 1;
    } else
      r = i - 1;
  }
  return null;
}, Zn = (t, e) => {
  const n = t.clients.get(e.client);
  return n !== void 0 && vw(n, e.clock) !== null;
}, la = (t) => {
  t.clients.forEach((e) => {
    e.sort((i, o) => i.clock - o.clock);
    let n, r;
    for (n = 1, r = 1; n < e.length; n++) {
      const i = e[r - 1], o = e[n];
      i.clock + i.len >= o.clock ? i.len = zt(i.len, o.clock + o.len - i.clock) : (r < n && (e[r] = o), r++);
    }
    e.length = r;
  });
}, ws = (t) => {
  const e = new Jn();
  for (let n = 0; n < t.length; n++)
    t[n].clients.forEach((r, i) => {
      if (!e.clients.has(i)) {
        const o = r.slice();
        for (let s = n + 1; s < t.length; s++)
          n0(o, t[s].clients.get(i) || []);
        e.clients.set(i, o);
      }
    });
  return la(e), e;
}, _r = (t, e, n, r) => {
  It(t.clients, e, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new aa(n, r));
}, dd = () => new Jn(), ww = (t) => {
  const e = dd();
  return t.clients.forEach((n, r) => {
    const i = [];
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      if (s.deleted) {
        const a = s.id.clock;
        let c = s.length;
        if (o + 1 < n.length)
          for (let l = n[o + 1]; o + 1 < n.length && l.deleted; l = n[++o + 1])
            c += l.length;
        i.push(new aa(a, c));
      }
    }
    i.length > 0 && e.clients.set(r, i);
  }), e;
}, ca = (t, e) => {
  H(t.restEncoder, e.clients.size), un(e.clients.entries()).sort((n, r) => r[0] - n[0]).forEach(([n, r]) => {
    t.resetDsCurVal(), H(t.restEncoder, n);
    const i = r.length;
    H(t.restEncoder, i);
    for (let o = 0; o < i; o++) {
      const s = r[o];
      t.writeDsClock(s.clock), t.writeDsLen(s.len);
    }
  });
}, xw = (t) => {
  const e = new Jn(), n = Z(t.restDecoder);
  for (let r = 0; r < n; r++) {
    t.resetDsCurVal();
    const i = Z(t.restDecoder), o = Z(t.restDecoder);
    if (o > 0) {
      const s = It(e.clients, i, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let a = 0; a < o; a++)
        s.push(new aa(t.readDsClock(), t.readDsLen()));
    }
  }
  return e;
}, Gl = (t, e, n) => {
  const r = new Jn(), i = Z(t.restDecoder);
  for (let o = 0; o < i; o++) {
    t.resetDsCurVal();
    const s = Z(t.restDecoder), a = Z(t.restDecoder), c = n.clients.get(s) || [], l = oe(n, s);
    for (let u = 0; u < a; u++) {
      const d = t.readDsClock(), f = d + t.readDsLen();
      if (d < l) {
        l < f && _r(r, s, l, f - l);
        let h = lt(c, d), p = c[h];
        for (!p.deleted && p.id.clock < d && (c.splice(h + 1, 0, Hi(e, p, d - p.id.clock)), h++); h < c.length && (p = c[h++], p.id.clock < f); )
          p.deleted || (f < p.id.clock + p.length && c.splice(h, 0, Hi(e, p, f - p.id.clock)), p.delete(e));
      } else
        _r(r, s, d, f - d);
    }
  }
  if (r.clients.size > 0) {
    const o = new co();
    return H(o.restEncoder, 0), ca(o, r), o.toUint8Array();
  }
  return null;
}, fd = Xu;
class yn extends Uu {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: e = F0(), collectionid: n = null, gc: r = !0, gcFilter: i = () => !0, meta: o = null, autoLoad: s = !1, shouldLoad: a = !0 } = {}) {
    super(), this.gc = r, this.gcFilter = i, this.clientID = fd(), this.guid = e, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new gd(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = a, this.autoLoad = s, this.meta = o, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = Wl((l) => {
      this.on("load", () => {
        this.isLoaded = !0, l(this);
      });
    });
    const c = () => Wl((l) => {
      const u = (d) => {
        (d === void 0 || d === !0) && (this.off("sync", u), l());
      };
      this.on("sync", u);
    });
    this.on("sync", (l) => {
      l === !1 && this.isSynced && (this.whenSynced = c()), this.isSynced = l === void 0 || l === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
    }), this.whenSynced = c();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const e = this._item;
    e !== null && !this.shouldLoad && Y(
      /** @type {any} */
      e.parent.doc,
      (n) => {
        n.subdocsLoaded.add(this);
      },
      null,
      !0
    ), this.shouldLoad = !0;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(un(this.subdocs).map((e) => e.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(e, n = null) {
    return Y(this, e, n);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(e, n = (
    /** @type {any} */
    fe
  )) {
    const r = It(this.share, e, () => {
      const o = new n();
      return o._integrate(this, null), o;
    }), i = r.constructor;
    if (n !== fe && i !== n)
      if (i === fe) {
        const o = new n();
        o._map = r._map, r._map.forEach(
          /** @param {Item?} n */
          (s) => {
            for (; s !== null; s = s.left)
              s.parent = o;
          }
        ), o._start = r._start;
        for (let s = o._start; s !== null; s = s.right)
          s.parent = o;
        return o._length = r._length, this.share.set(e, o), o._integrate(this, null), /** @type {InstanceType<Type>} */
        o;
      } else
        throw new Error(`Type with the name ${e} has already been defined with a different constructor`);
    return (
      /** @type {InstanceType<Type>} */
      r
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(e = "") {
    return (
      /** @type {YArray<T>} */
      this.get(e, _n)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(e = "") {
    return this.get(e, Ht);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(e = "") {
    return (
      /** @type {YMap<T>} */
      this.get(e, Hn)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(e = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(e, be)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(e = "") {
    return this.get(e, dn);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const e = {};
    return this.share.forEach((n, r) => {
      e[r] = n.toJSON();
    }), e;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    this.isDestroyed = !0, un(this.subdocs).forEach((n) => n.destroy());
    const e = this._item;
    if (e !== null) {
      this._item = null;
      const n = (
        /** @type {ContentDoc} */
        e.content
      );
      n.doc = new yn({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = e, Y(
        /** @type {any} */
        e.parent.doc,
        (r) => {
          const i = n.doc;
          e.deleted || r.subdocsAdded.add(i), r.subdocsRemoved.add(this);
        },
        null,
        !0
      );
    }
    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
  }
}
class Sw {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(e) {
    this.dsCurrVal = 0, this.restDecoder = e;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return this.dsCurrVal += Z(this.restDecoder), this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const e = Z(this.restDecoder) + 1;
    return this.dsCurrVal += e, e;
  }
}
class $i extends Sw {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(e) {
    super(e), this.keys = [], Z(e), this.keyClockDecoder = new Ro(Ke(e)), this.clientDecoder = new bi(Ke(e)), this.leftClockDecoder = new Ro(Ke(e)), this.rightClockDecoder = new Ro(Ke(e)), this.infoDecoder = new Hl(Ke(e), Or), this.stringDecoder = new I0(Ke(e)), this.parentInfoDecoder = new Hl(Ke(e), Or), this.typeRefDecoder = new bi(Ke(e)), this.lenDecoder = new bi(Ke(e));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new En(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new En(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return Li(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return Ke(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return Li(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const e = this.keyClockDecoder.read();
    if (e < this.keys.length)
      return this.keys[e];
    {
      const n = this.stringDecoder.read();
      return this.keys.push(n), n;
    }
  }
}
class kw {
  constructor() {
    this.restEncoder = Yr();
  }
  toUint8Array() {
    return rt(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    H(this.restEncoder, e);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    H(this.restEncoder, e);
  }
}
class Aw extends kw {
  /**
   * @param {ID} id
   */
  writeLeftID(e) {
    H(this.restEncoder, e.client), H(this.restEncoder, e.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(e) {
    H(this.restEncoder, e.client), H(this.restEncoder, e.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(e) {
    H(this.restEncoder, e);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(e) {
    gs(this.restEncoder, e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    Cn(this.restEncoder, e);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(e) {
    H(this.restEncoder, e ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(e) {
    H(this.restEncoder, e);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(e) {
    H(this.restEncoder, e);
  }
  /**
   * @param {any} any
   */
  writeAny(e) {
    Bn(this.restEncoder, e);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(e) {
    ze(this.restEncoder, e);
  }
  /**
   * @param {any} embed
   */
  writeJSON(e) {
    Cn(this.restEncoder, JSON.stringify(e));
  }
  /**
   * @param {string} key
   */
  writeKey(e) {
    Cn(this.restEncoder, e);
  }
}
class Cw {
  constructor() {
    this.restEncoder = Yr(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return rt(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    const n = e - this.dsCurrVal;
    this.dsCurrVal = e, H(this.restEncoder, n);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    e === 0 && Re(), H(this.restEncoder, e - 1), this.dsCurrVal += e;
  }
}
class co extends Cw {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new Lo(), this.clientEncoder = new yi(), this.leftClockEncoder = new Lo(), this.rightClockEncoder = new Lo(), this.infoEncoder = new zl(gs), this.stringEncoder = new C0(), this.parentInfoEncoder = new zl(gs), this.typeRefEncoder = new yi(), this.lenEncoder = new yi();
  }
  toUint8Array() {
    const e = Yr();
    return H(e, 0), ze(e, this.keyClockEncoder.toUint8Array()), ze(e, this.clientEncoder.toUint8Array()), ze(e, this.leftClockEncoder.toUint8Array()), ze(e, this.rightClockEncoder.toUint8Array()), ze(e, rt(this.infoEncoder)), ze(e, this.stringEncoder.toUint8Array()), ze(e, rt(this.parentInfoEncoder)), ze(e, this.typeRefEncoder.toUint8Array()), ze(e, this.lenEncoder.toUint8Array()), ao(e, rt(this.restEncoder)), rt(e);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(e) {
    this.clientEncoder.write(e.client), this.leftClockEncoder.write(e.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(e) {
    this.clientEncoder.write(e.client), this.rightClockEncoder.write(e.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(e) {
    this.clientEncoder.write(e);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(e) {
    this.infoEncoder.write(e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    this.stringEncoder.write(e);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(e) {
    this.parentInfoEncoder.write(e ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(e) {
    this.typeRefEncoder.write(e);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(e) {
    this.lenEncoder.write(e);
  }
  /**
   * @param {any} any
   */
  writeAny(e) {
    Bn(this.restEncoder, e);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(e) {
    ze(this.restEncoder, e);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(e) {
    Bn(this.restEncoder, e);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(e) {
    const n = this.keyMap.get(e);
    n === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(n);
  }
}
const Ew = (t, e, n, r) => {
  r = zt(r, e[0].id.clock);
  const i = lt(e, r);
  H(t.restEncoder, e.length - i), t.writeClient(n), H(t.restEncoder, r);
  const o = e[i];
  o.write(t, r - o.id.clock);
  for (let s = i + 1; s < e.length; s++)
    e[s].write(t, 0);
}, hd = (t, e, n) => {
  const r = /* @__PURE__ */ new Map();
  n.forEach((i, o) => {
    oe(e, o) > i && r.set(o, i);
  }), uo(e).forEach((i, o) => {
    n.has(o) || r.set(o, 0);
  }), H(t.restEncoder, r.size), un(r.entries()).sort((i, o) => o[0] - i[0]).forEach(([i, o]) => {
    Ew(
      t,
      /** @type {Array<GC|Item>} */
      e.clients.get(i),
      i,
      o
    );
  });
}, Ow = (t, e) => {
  const n = st(), r = Z(t.restDecoder);
  for (let i = 0; i < r; i++) {
    const o = Z(t.restDecoder), s = new Array(o), a = t.readClient();
    let c = Z(t.restDecoder);
    n.set(a, { i: 0, refs: s });
    for (let l = 0; l < o; l++) {
      const u = t.readInfo();
      switch (so & u) {
        case 0: {
          const d = t.readLen();
          s[l] = new Je(F(a, c), d), c += d;
          break;
        }
        case 10: {
          const d = Z(t.restDecoder);
          s[l] = new tt(F(a, c), d), c += d;
          break;
        }
        default: {
          const d = (u & (Et | Te)) === 0, f = new K(
            F(a, c),
            null,
            // left
            (u & Te) === Te ? t.readLeftID() : null,
            // origin
            null,
            // right
            (u & Et) === Et ? t.readRightID() : null,
            // right origin
            d ? t.readParentInfo() ? e.get(t.readString()) : t.readLeftID() : null,
            // parent
            d && (u & Cr) === Cr ? t.readString() : null,
            // parentSub
            zd(t, u)
            // item content
          );
          s[l] = f, c += f.length;
        }
      }
    }
  }
  return n;
}, _w = (t, e, n) => {
  const r = [];
  let i = un(n.keys()).sort((h, p) => h - p);
  if (i.length === 0)
    return null;
  const o = () => {
    if (i.length === 0)
      return null;
    let h = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      n.get(i[i.length - 1])
    );
    for (; h.refs.length === h.i; )
      if (i.pop(), i.length > 0)
        h = /** @type {{i:number,refs:Array<GC|Item>}} */
        n.get(i[i.length - 1]);
      else
        return null;
    return h;
  };
  let s = o();
  if (s === null)
    return null;
  const a = new gd(), c = /* @__PURE__ */ new Map(), l = (h, p) => {
    const m = c.get(h);
    (m == null || m > p) && c.set(h, p);
  };
  let u = (
    /** @type {any} */
    s.refs[
      /** @type {any} */
      s.i++
    ]
  );
  const d = /* @__PURE__ */ new Map(), f = () => {
    for (const h of r) {
      const p = h.id.client, m = n.get(p);
      m ? (m.i--, a.clients.set(p, m.refs.slice(m.i)), n.delete(p), m.i = 0, m.refs = []) : a.clients.set(p, [h]), i = i.filter((y) => y !== p);
    }
    r.length = 0;
  };
  for (; ; ) {
    if (u.constructor !== tt) {
      const p = It(d, u.id.client, () => oe(e, u.id.client)) - u.id.clock;
      if (p < 0)
        r.push(u), l(u.id.client, u.id.clock - 1), f();
      else {
        const m = u.getMissing(t, e);
        if (m !== null) {
          r.push(u);
          const y = n.get(
            /** @type {number} */
            m
          ) || { refs: [], i: 0 };
          if (y.refs.length === y.i)
            l(
              /** @type {number} */
              m,
              oe(e, m)
            ), f();
          else {
            u = y.refs[y.i++];
            continue;
          }
        } else (p === 0 || p < u.length) && (u.integrate(t, p), d.set(u.id.client, u.id.clock + u.length));
      }
    }
    if (r.length > 0)
      u = /** @type {GC|Item} */
      r.pop();
    else if (s !== null && s.i < s.refs.length)
      u = /** @type {GC|Item} */
      s.refs[s.i++];
    else {
      if (s = o(), s === null)
        break;
      u = /** @type {GC|Item} */
      s.refs[s.i++];
    }
  }
  if (a.clients.size > 0) {
    const h = new co();
    return hd(h, a, /* @__PURE__ */ new Map()), H(h.restEncoder, 0), { missing: c, update: h.toUint8Array() };
  }
  return null;
}, Tw = (t, e) => hd(t, e.doc.store, e.beforeState), Nw = (t, e, n, r = new $i(t)) => Y(e, (i) => {
  i.local = !1;
  let o = !1;
  const s = i.doc, a = s.store, c = Ow(r, s), l = _w(i, a, c), u = a.pendingStructs;
  if (u) {
    for (const [f, h] of u.missing)
      if (h < oe(a, f)) {
        o = !0;
        break;
      }
    if (l) {
      for (const [f, h] of l.missing) {
        const p = u.missing.get(f);
        (p == null || p > h) && u.missing.set(f, h);
      }
      u.update = nc([u.update, l.update]);
    }
  } else
    a.pendingStructs = l;
  const d = Gl(r, i, a);
  if (a.pendingDs) {
    const f = new $i(na(a.pendingDs));
    Z(f.restDecoder);
    const h = Gl(f, i, a);
    d && h ? a.pendingDs = nc([d, h]) : a.pendingDs = d || h;
  } else
    a.pendingDs = d;
  if (o) {
    const f = (
      /** @type {{update: Uint8Array}} */
      a.pendingStructs.update
    );
    a.pendingStructs = null, xs(i.doc, f);
  }
}, n, !1), xs = (t, e, n, r = $i) => {
  const i = na(e);
  Nw(i, t, n, new r(i));
};
class Pw {
  constructor() {
    this.l = [];
  }
}
const Yl = () => new Pw(), ql = (t, e) => t.l.push(e), Xl = (t, e) => {
  const n = t.l, r = n.length;
  t.l = n.filter((i) => e !== i), r === t.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, pd = (t, e, n) => oa(t.l, [e, n]);
class En {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(e, n) {
    this.client = e, this.clock = n;
  }
}
const ii = (t, e) => t === e || t !== null && e !== null && t.client === e.client && t.clock === e.clock, F = (t, e) => new En(t, e), Tr = (t) => {
  for (const [e, n] of t.doc.share.entries())
    if (n === t)
      return e;
  throw Re();
}, Nr = (t, e) => {
  for (; e !== null; ) {
    if (e.parent === t)
      return !0;
    e = /** @type {AbstractType<any>} */
    e.parent._item;
  }
  return !1;
};
class ji {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(e, n, r, i = 0) {
    this.type = e, this.tname = n, this.item = r, this.assoc = i;
  }
}
class Dw {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(e, n, r = 0) {
    this.type = e, this.index = n, this.assoc = r;
  }
}
const Mw = (t, e, n = 0) => new Dw(t, e, n), oi = (t, e, n) => {
  let r = null, i = null;
  return t._item === null ? i = Tr(t) : r = F(t._item.id.client, t._item.id.clock), new ji(r, i, e, n);
}, jo = (t, e, n = 0) => {
  let r = t._start;
  if (n < 0) {
    if (e === 0)
      return oi(t, null, n);
    e--;
  }
  for (; r !== null; ) {
    if (!r.deleted && r.countable) {
      if (r.length > e)
        return oi(t, F(r.id.client, r.id.clock + e), n);
      e -= r.length;
    }
    if (r.right === null && n < 0)
      return oi(t, r.lastId, n);
    r = r.right;
  }
  return oi(t, null, n);
}, Iw = (t, e) => {
  const n = On(t, e), r = e.clock - n.id.clock;
  return {
    item: n,
    diff: r
  };
}, Lw = (t, e, n = !0) => {
  const r = e.store, i = t.item, o = t.type, s = t.tname, a = t.assoc;
  let c = null, l = 0;
  if (i !== null) {
    if (oe(r, i.client) <= i.clock)
      return null;
    const u = n ? Cs(r, i) : Iw(r, i), d = u.item;
    if (!(d instanceof K))
      return null;
    if (c = /** @type {AbstractType<any>} */
    d.parent, c._item === null || !c._item.deleted) {
      l = d.deleted || !d.countable ? 0 : u.diff + (a >= 0 ? 0 : 1);
      let f = d.left;
      for (; f !== null; )
        !f.deleted && f.countable && (l += f.length), f = f.left;
    }
  } else {
    if (s !== null)
      c = e.get(s);
    else if (o !== null) {
      if (oe(r, o.client) <= o.clock)
        return null;
      const { item: u } = n ? Cs(r, o) : { item: On(r, o) };
      if (u instanceof K && u.content instanceof dt)
        c = u.content.type;
      else
        return null;
    } else
      throw Re();
    a >= 0 ? l = c._length : l = 0;
  }
  return Mw(c, l, t.assoc);
};
class ua {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(e, n) {
    this.ds = e, this.sv = n;
  }
}
const md = (t, e) => new ua(t, e), Fo = (t) => md(ww(t.store), uo(t.store)), Zt = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !Zn(e.ds, t.id), Ss = (t, e) => {
  const n = It(t.meta, Ss, cn), r = t.doc.store;
  n.has(e) || (e.sv.forEach((i, o) => {
    i < oe(r, o) && Me(t, F(o, i));
  }), Vt(t, e.ds, (i) => {
  }), n.add(e));
};
class gd {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const uo = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.clients.forEach((n, r) => {
    const i = n[n.length - 1];
    e.set(r, i.id.clock + i.length);
  }), e;
}, oe = (t, e) => {
  const n = t.clients.get(e);
  if (n === void 0)
    return 0;
  const r = n[n.length - 1];
  return r.id.clock + r.length;
}, yd = (t, e) => {
  let n = t.clients.get(e.id.client);
  if (n === void 0)
    n = [], t.clients.set(e.id.client, n);
  else {
    const r = n[n.length - 1];
    if (r.id.clock + r.length !== e.id.clock)
      throw Re();
  }
  n.push(e);
}, lt = (t, e) => {
  let n = 0, r = t.length - 1, i = t[r], o = i.id.clock;
  if (o === e)
    return r;
  let s = Nt(e / (o + i.length - 1) * r);
  for (; n <= r; ) {
    if (i = t[s], o = i.id.clock, o <= e) {
      if (e < o + i.length)
        return s;
      n = s + 1;
    } else
      r = s - 1;
    s = Nt((n + r) / 2);
  }
  throw Re();
}, Rw = (t, e) => {
  const n = t.clients.get(e.client);
  return n[lt(n, e.clock)];
}, On = (
  /** @type {function(StructStore,ID):Item} */
  Rw
), ks = (t, e, n) => {
  const r = lt(e, n), i = e[r];
  return i.id.clock < n && i instanceof K ? (e.splice(r + 1, 0, Hi(t, i, n - i.id.clock)), r + 1) : r;
}, Me = (t, e) => {
  const n = (
    /** @type {Array<Item>} */
    t.doc.store.clients.get(e.client)
  );
  return n[ks(t, n, e.clock)];
}, Jl = (t, e, n) => {
  const r = e.clients.get(n.client), i = lt(r, n.clock), o = r[i];
  return n.clock !== o.id.clock + o.length - 1 && o.constructor !== Je && r.splice(i + 1, 0, Hi(t, o, n.clock - o.id.clock + 1)), o;
}, $w = (t, e, n) => {
  const r = (
    /** @type {Array<GC|Item>} */
    t.clients.get(e.id.client)
  );
  r[lt(r, e.id.clock)] = n;
}, bd = (t, e, n, r, i) => {
  if (r === 0)
    return;
  const o = n + r;
  let s = ks(t, e, n), a;
  do
    a = e[s++], o < a.id.clock + a.length && ks(t, e, o), i(a);
  while (s < e.length && e[s].id.clock < o);
};
class jw {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(e, n, r) {
    this.doc = e, this.deleteSet = new Jn(), this.beforeState = uo(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = r, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const Zl = (t, e) => e.deleteSet.clients.size === 0 && !t0(e.afterState, (n, r) => e.beforeState.get(r) !== n) ? !1 : (la(e.deleteSet), Tw(t, e), ca(t, e.deleteSet), !0), Ql = (t, e, n) => {
  const r = e._item;
  (r === null || r.id.clock < (t.beforeState.get(r.id.client) || 0) && !r.deleted) && It(t.changed, e, cn).add(n);
}, vi = (t, e) => {
  let n = t[e], r = t[e - 1], i = e;
  for (; i > 0; n = r, r = t[--i - 1]) {
    if (r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n)) {
      n instanceof K && n.parentSub !== null && /** @type {AbstractType<any>} */
      n.parent._map.get(n.parentSub) === n && n.parent._map.set(
        n.parentSub,
        /** @type {Item} */
        r
      );
      continue;
    }
    break;
  }
  const o = e - i;
  return o && t.splice(e + 1 - o, o), o;
}, Fw = (t, e, n) => {
  for (const [r, i] of t.clients.entries()) {
    const o = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let s = i.length - 1; s >= 0; s--) {
      const a = i[s], c = a.clock + a.len;
      for (let l = lt(o, a.clock), u = o[l]; l < o.length && u.id.clock < c; u = o[++l]) {
        const d = o[l];
        if (a.clock + a.len <= d.id.clock)
          break;
        d instanceof K && d.deleted && !d.keep && n(d) && d.gc(e, !1);
      }
    }
  }
}, zw = (t, e) => {
  t.clients.forEach((n, r) => {
    const i = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let o = n.length - 1; o >= 0; o--) {
      const s = n[o], a = zn(i.length - 1, 1 + lt(i, s.clock + s.len - 1));
      for (let c = a, l = i[c]; c > 0 && l.id.clock >= s.clock; l = i[c])
        c -= 1 + vi(i, c);
    }
  });
}, vd = (t, e) => {
  if (e < t.length) {
    const n = t[e], r = n.doc, i = r.store, o = n.deleteSet, s = n._mergeStructs;
    try {
      la(o), n.afterState = uo(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
      const a = [];
      n.changed.forEach(
        (c, l) => a.push(() => {
          (l._item === null || !l._item.deleted) && l._callObserver(n, c);
        })
      ), a.push(() => {
        n.changedParentTypes.forEach((c, l) => {
          l._dEH.l.length > 0 && (l._item === null || !l._item.deleted) && (c = c.filter(
            (u) => u.target._item === null || !u.target._item.deleted
          ), c.forEach((u) => {
            u.currentTarget = l, u._path = null;
          }), c.sort((u, d) => u.path.length - d.path.length), pd(l._dEH, c, n));
        });
      }), a.push(() => r.emit("afterTransaction", [n, r])), oa(a, []), n._needFormattingCleanup && sx(n);
    } finally {
      r.gc && Fw(o, i, r.gcFilter), zw(o, i), n.afterState.forEach((u, d) => {
        const f = n.beforeState.get(d) || 0;
        if (f !== u) {
          const h = (
            /** @type {Array<GC|Item>} */
            i.clients.get(d)
          ), p = zt(lt(h, f), 1);
          for (let m = h.length - 1; m >= p; )
            m -= 1 + vi(h, m);
        }
      });
      for (let u = s.length - 1; u >= 0; u--) {
        const { client: d, clock: f } = s[u].id, h = (
          /** @type {Array<GC|Item>} */
          i.clients.get(d)
        ), p = lt(h, f);
        p + 1 < h.length && vi(h, p + 1) > 1 || p > 0 && vi(h, p);
      }
      if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (yw(sa, id, "[yjs] ", od, sd, "Changed the client-id because another client seems to be using it."), r.clientID = fd()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
        const u = new Aw();
        Zl(u, n) && r.emit("update", [u.toUint8Array(), n.origin, r, n]);
      }
      if (r._observers.has("updateV2")) {
        const u = new co();
        Zl(u, n) && r.emit("updateV2", [u.toUint8Array(), n.origin, r, n]);
      }
      const { subdocsAdded: a, subdocsLoaded: c, subdocsRemoved: l } = n;
      (a.size > 0 || l.size > 0 || c.size > 0) && (a.forEach((u) => {
        u.clientID = r.clientID, u.collectionid == null && (u.collectionid = r.collectionid), r.subdocs.add(u);
      }), l.forEach((u) => r.subdocs.delete(u)), r.emit("subdocs", [{ loaded: c, added: a, removed: l }, r, n]), l.forEach((u) => u.destroy())), t.length <= e + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, t])) : vd(t, e + 1);
    }
  }
}, Y = (t, e, n = null, r = !0) => {
  const i = t._transactionCleanups;
  let o = !1, s = null;
  t._transaction === null && (o = !0, t._transaction = new jw(t, n, r), i.push(t._transaction), i.length === 1 && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
  try {
    s = e(t._transaction);
  } finally {
    if (o) {
      const a = t._transaction === i[0];
      t._transaction = null, a && vd(i, 0);
    }
  }
  return s;
};
class Bw {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(e, n) {
    this.insertions = n, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
  }
}
const ec = (t, e, n) => {
  Vt(t, n.deletions, (r) => {
    r instanceof K && e.scope.some((i) => i === t.doc || Nr(
      /** @type {AbstractType<any>} */
      i,
      r
    )) && ma(r, !1);
  });
}, tc = (t, e, n) => {
  let r = null;
  const i = t.doc, o = t.scope;
  Y(i, (a) => {
    for (; e.length > 0 && t.currStackItem === null; ) {
      const c = i.store, l = (
        /** @type {StackItem} */
        e.pop()
      ), u = /* @__PURE__ */ new Set(), d = [];
      let f = !1;
      Vt(a, l.insertions, (h) => {
        if (h instanceof K) {
          if (h.redone !== null) {
            let { item: p, diff: m } = Cs(c, h.id);
            m > 0 && (p = Me(a, F(p.id.client, p.id.clock + m))), h = p;
          }
          !h.deleted && o.some((p) => p === a.doc || Nr(
            /** @type {AbstractType<any>} */
            p,
            /** @type {Item} */
            h
          )) && d.push(h);
        }
      }), Vt(a, l.deletions, (h) => {
        h instanceof K && o.some((p) => p === a.doc || Nr(
          /** @type {AbstractType<any>} */
          p,
          h
        )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !Zn(l.insertions, h.id) && u.add(h);
      }), u.forEach((h) => {
        f = Fd(a, h, u, l.insertions, t.ignoreRemoteMapChanges, t) !== null || f;
      });
      for (let h = d.length - 1; h >= 0; h--) {
        const p = d[h];
        t.deleteFilter(p) && (p.delete(a), f = !0);
      }
      t.currStackItem = f ? l : null;
    }
    a.changed.forEach((c, l) => {
      c.has(null) && l._searchMarker && (l._searchMarker.length = 0);
    }), r = a;
  }, t);
  const s = t.currStackItem;
  if (s != null) {
    const a = r.changedParentTypes;
    t.emit("stack-item-popped", [{ stackItem: s, type: n, changedParentTypes: a, origin: t }, t]), t.currStackItem = null;
  }
  return s;
};
class wd extends Uu {
  /**
   * @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
   * @param {UndoManagerOptions} options
   */
  constructor(e, {
    captureTimeout: n = 500,
    captureTransaction: r = (c) => !0,
    deleteFilter: i = () => !0,
    trackedOrigins: o = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: s = !1,
    doc: a = (
      /** @type {Doc} */
      ps(e) ? e[0].doc : e instanceof yn ? e : e.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = a, this.addToScope(e), this.deleteFilter = i, o.add(this), this.trackedOrigins = o, this.captureTransaction = r, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = s, this.captureTimeout = n, this.afterTransactionHandler = (c) => {
      if (!this.captureTransaction(c) || !this.scope.some((y) => c.changedParentTypes.has(
        /** @type {AbstractType<any>} */
        y
      ) || y === this.doc) || !this.trackedOrigins.has(c.origin) && (!c.origin || !this.trackedOrigins.has(c.origin.constructor)))
        return;
      const l = this.undoing, u = this.redoing, d = l ? this.redoStack : this.undoStack;
      l ? this.stopCapturing() : u || this.clear(!1, !0);
      const f = new Jn();
      c.afterState.forEach((y, b) => {
        const v = c.beforeState.get(b) || 0, w = y - v;
        w > 0 && _r(f, b, v, w);
      });
      const h = z0();
      let p = !1;
      if (this.lastChange > 0 && h - this.lastChange < this.captureTimeout && d.length > 0 && !l && !u) {
        const y = d[d.length - 1];
        y.deletions = ws([y.deletions, c.deleteSet]), y.insertions = ws([y.insertions, f]);
      } else
        d.push(new Bw(c.deleteSet, f)), p = !0;
      !l && !u && (this.lastChange = h), Vt(
        c,
        c.deleteSet,
        /** @param {Item|GC} item */
        (y) => {
          y instanceof K && this.scope.some((b) => b === c.doc || Nr(
            /** @type {AbstractType<any>} */
            b,
            y
          )) && ma(y, !0);
        }
      );
      const m = [{ stackItem: d[d.length - 1], origin: c.origin, type: l ? "redo" : "undo", changedParentTypes: c.changedParentTypes }, this];
      p ? this.emit("stack-item-added", m) : this.emit("stack-item-updated", m);
    }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
      this.destroy();
    });
  }
  /**
   * Extend the scope.
   *
   * @param {Array<AbstractType<any> | Doc> | AbstractType<any> | Doc} ytypes
   */
  addToScope(e) {
    const n = new Set(this.scope);
    e = ps(e) ? e : [e], e.forEach((r) => {
      n.has(r) || (n.add(r), (r instanceof fe ? r.doc !== this.doc : r !== this.doc) && ld("[yjs#509] Not same Y.Doc"), this.scope.push(r));
    });
  }
  /**
   * @param {any} origin
   */
  addTrackedOrigin(e) {
    this.trackedOrigins.add(e);
  }
  /**
   * @param {any} origin
   */
  removeTrackedOrigin(e) {
    this.trackedOrigins.delete(e);
  }
  clear(e = !0, n = !0) {
    (e && this.canUndo() || n && this.canRedo()) && this.doc.transact((r) => {
      e && (this.undoStack.forEach((i) => ec(r, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => ec(r, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: e, redoStackCleared: n }]);
    });
  }
  /**
   * UndoManager merges Undo-StackItem if they are created within time-gap
   * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
   * StackItem won't be merged.
   *
   *
   * @example
   *     // without stopCapturing
   *     ytext.insert(0, 'a')
   *     ytext.insert(1, 'b')
   *     um.undo()
   *     ytext.toString() // => '' (note that 'ab' was removed)
   *     // with stopCapturing
   *     ytext.insert(0, 'a')
   *     um.stopCapturing()
   *     ytext.insert(0, 'b')
   *     um.undo()
   *     ytext.toString() // => 'a' (note that only 'b' was removed)
   *
   */
  stopCapturing() {
    this.lastChange = 0;
  }
  /**
   * Undo last changes on type.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  undo() {
    this.undoing = !0;
    let e;
    try {
      e = tc(this, this.undoStack, "undo");
    } finally {
      this.undoing = !1;
    }
    return e;
  }
  /**
   * Redo last undo operation.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  redo() {
    this.redoing = !0;
    let e;
    try {
      e = tc(this, this.redoStack, "redo");
    } finally {
      this.redoing = !1;
    }
    return e;
  }
  /**
   * Are undo steps available?
   *
   * @return {boolean} `true` if undo is possible
   */
  canUndo() {
    return this.undoStack.length > 0;
  }
  /**
   * Are redo steps available?
   *
   * @return {boolean} `true` if redo is possible
   */
  canRedo() {
    return this.redoStack.length > 0;
  }
  destroy() {
    this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
  }
}
function* Vw(t) {
  const e = Z(t.restDecoder);
  for (let n = 0; n < e; n++) {
    const r = Z(t.restDecoder), i = t.readClient();
    let o = Z(t.restDecoder);
    for (let s = 0; s < r; s++) {
      const a = t.readInfo();
      if (a === 10) {
        const c = Z(t.restDecoder);
        yield new tt(F(i, o), c), o += c;
      } else if ((so & a) !== 0) {
        const c = (a & (Et | Te)) === 0, l = new K(
          F(i, o),
          null,
          // left
          (a & Te) === Te ? t.readLeftID() : null,
          // origin
          null,
          // right
          (a & Et) === Et ? t.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          c ? t.readParentInfo() ? t.readString() : t.readLeftID() : null,
          // parent
          c && (a & Cr) === Cr ? t.readString() : null,
          // parentSub
          zd(t, a)
          // item content
        );
        yield l, o += l.length;
      } else {
        const c = t.readLen();
        yield new Je(F(i, o), c), o += c;
      }
    }
  }
}
class Hw {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(e, n) {
    this.gen = Vw(e), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === tt);
    return this.curr;
  }
}
class Ww {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(e) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
  }
}
const Uw = (t, e) => {
  if (t.constructor === Je) {
    const { client: n, clock: r } = t.id;
    return new Je(F(n, r + e), t.length - e);
  } else if (t.constructor === tt) {
    const { client: n, clock: r } = t.id;
    return new tt(F(n, r + e), t.length - e);
  } else {
    const n = (
      /** @type {Item} */
      t
    ), { client: r, clock: i } = n.id;
    return new K(
      F(r, i + e),
      null,
      F(r, i + e - 1),
      null,
      n.rightOrigin,
      n.parent,
      n.parentSub,
      n.content.splice(e)
    );
  }
}, nc = (t, e = $i, n = co) => {
  if (t.length === 1)
    return t[0];
  const r = t.map((u) => new e(na(u)));
  let i = r.map((u) => new Hw(u, !0)), o = null;
  const s = new n(), a = new Ww(s);
  for (; i = i.filter((f) => f.curr !== null), i.sort(
    /** @type {function(any,any):number} */
    (f, h) => {
      if (f.curr.id.client === h.curr.id.client) {
        const p = f.curr.id.clock - h.curr.id.clock;
        return p === 0 ? f.curr.constructor === h.curr.constructor ? 0 : f.curr.constructor === tt ? 1 : -1 : p;
      } else
        return h.curr.id.client - f.curr.id.client;
    }
  ), i.length !== 0; ) {
    const u = i[0], d = (
      /** @type {Item | GC} */
      u.curr.id.client
    );
    if (o !== null) {
      let f = (
        /** @type {Item | GC | null} */
        u.curr
      ), h = !1;
      for (; f !== null && f.id.clock + f.length <= o.struct.id.clock + o.struct.length && f.id.client >= o.struct.id.client; )
        f = u.next(), h = !0;
      if (f === null || // current decoder is empty
      f.id.client !== d || // check whether there is another decoder that has has updates from `firstClient`
      h && f.id.clock > o.struct.id.clock + o.struct.length)
        continue;
      if (d !== o.struct.id.client)
        or(a, o.struct, o.offset), o = { struct: f, offset: 0 }, u.next();
      else if (o.struct.id.clock + o.struct.length < f.id.clock)
        if (o.struct.constructor === tt)
          o.struct.length = f.id.clock + f.length - o.struct.id.clock;
        else {
          or(a, o.struct, o.offset);
          const p = f.id.clock - o.struct.id.clock - o.struct.length;
          o = { struct: new tt(F(d, o.struct.id.clock + o.struct.length), p), offset: 0 };
        }
      else {
        const p = o.struct.id.clock + o.struct.length - f.id.clock;
        p > 0 && (o.struct.constructor === tt ? o.struct.length -= p : f = Uw(f, p)), o.struct.mergeWith(
          /** @type {any} */
          f
        ) || (or(a, o.struct, o.offset), o = { struct: f, offset: 0 }, u.next());
      }
    } else
      o = { struct: (
        /** @type {Item | GC} */
        u.curr
      ), offset: 0 }, u.next();
    for (let f = u.curr; f !== null && f.id.client === d && f.id.clock === o.struct.id.clock + o.struct.length && f.constructor !== tt; f = u.next())
      or(a, o.struct, o.offset), o = { struct: f, offset: 0 };
  }
  o !== null && (or(a, o.struct, o.offset), o = null), Kw(a);
  const c = r.map((u) => xw(u)), l = ws(c);
  return ca(s, l), s.toUint8Array();
}, xd = (t) => {
  t.written > 0 && (t.clientStructs.push({ written: t.written, restEncoder: rt(t.encoder.restEncoder) }), t.encoder.restEncoder = Yr(), t.written = 0);
}, or = (t, e, n) => {
  t.written > 0 && t.currClient !== e.id.client && xd(t), t.written === 0 && (t.currClient = e.id.client, t.encoder.writeClient(e.id.client), H(t.encoder.restEncoder, e.id.clock + n)), e.write(t.encoder, n), t.written++;
}, Kw = (t) => {
  xd(t);
  const e = t.encoder.restEncoder;
  H(e, t.clientStructs.length);
  for (let n = 0; n < t.clientStructs.length; n++) {
    const r = t.clientStructs[n];
    H(e, r.written), ao(e, r.restEncoder);
  }
}, rc = "You must not compute changes after the event-handler fired.";
class fo {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(e, n) {
    this.target = e, this.currentTarget = e, this.transaction = n, this._changes = null, this._keys = null, this._delta = null, this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = Gw(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(e) {
    return Zn(this.transaction.deleteSet, e.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Bt(rc);
      const e = /* @__PURE__ */ new Map(), n = this.target;
      /** @type Set<string|null> */
      this.transaction.changed.get(n).forEach((i) => {
        if (i !== null) {
          const o = (
            /** @type {Item} */
            n._map.get(i)
          );
          let s, a;
          if (this.adds(o)) {
            let c = o.left;
            for (; c !== null && this.adds(c); )
              c = c.left;
            if (this.deletes(o))
              if (c !== null && this.deletes(c))
                s = "delete", a = Do(c.content.getContent());
              else
                return;
            else
              c !== null && this.deletes(c) ? (s = "update", a = Do(c.content.getContent())) : (s = "add", a = void 0);
          } else if (this.deletes(o))
            s = "delete", a = Do(
              /** @type {Item} */
              o.content.getContent()
            );
          else
            return;
          e.set(i, { action: s, oldValue: a });
        }
      }), this._keys = e;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(e) {
    return e.id.clock >= (this.transaction.beforeState.get(e.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let e = this._changes;
    if (e === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Bt(rc);
      const n = this.target, r = cn(), i = cn(), o = [];
      if (e = {
        added: r,
        deleted: i,
        delta: o,
        keys: this.keys
      }, /** @type Set<string|null> */
      this.transaction.changed.get(n).has(null)) {
        let a = null;
        const c = () => {
          a && o.push(a);
        };
        for (let l = n._start; l !== null; l = l.right)
          l.deleted ? this.deletes(l) && !this.adds(l) && ((a === null || a.delete === void 0) && (c(), a = { delete: 0 }), a.delete += l.length, i.add(l)) : this.adds(l) ? ((a === null || a.insert === void 0) && (c(), a = { insert: [] }), a.insert = a.insert.concat(l.content.getContent()), r.add(l)) : ((a === null || a.retain === void 0) && (c(), a = { retain: 0 }), a.retain += l.length);
        a !== null && a.retain === void 0 && c();
      }
      this._changes = e;
    }
    return (
      /** @type {any} */
      e
    );
  }
}
const Gw = (t, e) => {
  const n = [];
  for (; e._item !== null && e !== t; ) {
    if (e._item.parentSub !== null)
      n.unshift(e._item.parentSub);
    else {
      let r = 0, i = (
        /** @type {AbstractType<any>} */
        e._item.parent._start
      );
      for (; i !== e._item && i !== null; )
        !i.deleted && i.countable && (r += i.length), i = i.right;
      n.unshift(r);
    }
    e = /** @type {AbstractType<any>} */
    e._item.parent;
  }
  return n;
}, ve = () => {
  ld("Invalid access: Add Yjs type to a document before reading data.");
}, Sd = 80;
let da = 0;
class Yw {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(e, n) {
    e.marker = !0, this.p = e, this.index = n, this.timestamp = da++;
  }
}
const qw = (t) => {
  t.timestamp = da++;
}, kd = (t, e, n) => {
  t.p.marker = !1, t.p = e, e.marker = !0, t.index = n, t.timestamp = da++;
}, Xw = (t, e, n) => {
  if (t.length >= Sd) {
    const r = t.reduce((i, o) => i.timestamp < o.timestamp ? i : o);
    return kd(r, e, n), r;
  } else {
    const r = new Yw(e, n);
    return t.push(r), r;
  }
}, ho = (t, e) => {
  if (t._start === null || e === 0 || t._searchMarker === null)
    return null;
  const n = t._searchMarker.length === 0 ? null : t._searchMarker.reduce((o, s) => gi(e - o.index) < gi(e - s.index) ? o : s);
  let r = t._start, i = 0;
  for (n !== null && (r = n.p, i = n.index, qw(n)); r.right !== null && i < e; ) {
    if (!r.deleted && r.countable) {
      if (e < i + r.length)
        break;
      i += r.length;
    }
    r = r.right;
  }
  for (; r.left !== null && i > e; )
    r = r.left, !r.deleted && r.countable && (i -= r.length);
  for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock; )
    r = r.left, !r.deleted && r.countable && (i -= r.length);
  return n !== null && gi(n.index - i) < /** @type {YText|YArray<any>} */
  r.parent.length / Sd ? (kd(n, r, i), n) : Xw(t._searchMarker, r, i);
}, Pr = (t, e, n) => {
  for (let r = t.length - 1; r >= 0; r--) {
    const i = t[r];
    if (n > 0) {
      let o = i.p;
      for (o.marker = !1; o && (o.deleted || !o.countable); )
        o = o.left, o && !o.deleted && o.countable && (i.index -= o.length);
      if (o === null || o.marker === !0) {
        t.splice(r, 1);
        continue;
      }
      i.p = o, o.marker = !0;
    }
    (e < i.index || n > 0 && e === i.index) && (i.index = zt(e, i.index + n));
  }
}, po = (t, e, n) => {
  const r = t, i = e.changedParentTypes;
  for (; It(i, t, () => []).push(n), t._item !== null; )
    t = /** @type {AbstractType<any>} */
    t._item.parent;
  pd(r._eH, n, e);
};
class fe {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = Yl(), this._dEH = Yl(), this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(e, n) {
    this.doc = e, this._item = n;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw at();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw at();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(e) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let e = this._start;
    for (; e !== null && e.deleted; )
      e = e.right;
    return e;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    !e.local && this._searchMarker && (this._searchMarker.length = 0);
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(e) {
    ql(this._eH, e);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(e) {
    ql(this._dEH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(e) {
    Xl(this._eH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(e) {
    Xl(this._dEH, e);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const Ad = (t, e, n) => {
  t.doc ?? ve(), e < 0 && (e = t._length + e), n < 0 && (n = t._length + n);
  let r = n - e;
  const i = [];
  let o = t._start;
  for (; o !== null && r > 0; ) {
    if (o.countable && !o.deleted) {
      const s = o.content.getContent();
      if (s.length <= e)
        e -= s.length;
      else {
        for (let a = e; a < s.length && r > 0; a++)
          i.push(s[a]), r--;
        e = 0;
      }
    }
    o = o.right;
  }
  return i;
}, Cd = (t) => {
  t.doc ?? ve();
  const e = [];
  let n = t._start;
  for (; n !== null; ) {
    if (n.countable && !n.deleted) {
      const r = n.content.getContent();
      for (let i = 0; i < r.length; i++)
        e.push(r[i]);
    }
    n = n.right;
  }
  return e;
}, Ed = (t, e) => {
  const n = [];
  let r = t._start;
  for (; r !== null; ) {
    if (r.countable && Zt(r, e)) {
      const i = r.content.getContent();
      for (let o = 0; o < i.length; o++)
        n.push(i[o]);
    }
    r = r.right;
  }
  return n;
}, Dr = (t, e) => {
  let n = 0, r = t._start;
  for (t.doc ?? ve(); r !== null; ) {
    if (r.countable && !r.deleted) {
      const i = r.content.getContent();
      for (let o = 0; o < i.length; o++)
        e(i[o], n++, t);
    }
    r = r.right;
  }
}, Od = (t, e) => {
  const n = [];
  return Dr(t, (r, i) => {
    n.push(e(r, i, t));
  }), n;
}, Jw = (t) => {
  let e = t._start, n = null, r = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (n === null) {
        for (; e !== null && e.deleted; )
          e = e.right;
        if (e === null)
          return {
            done: !0,
            value: void 0
          };
        n = e.content.getContent(), r = 0, e = e.right;
      }
      const i = n[r++];
      return n.length <= r && (n = null), {
        done: !1,
        value: i
      };
    }
  };
}, _d = (t, e) => {
  t.doc ?? ve();
  const n = ho(t, e);
  let r = t._start;
  for (n !== null && (r = n.p, e -= n.index); r !== null; r = r.right)
    if (!r.deleted && r.countable) {
      if (e < r.length)
        return r.content.getContent()[e];
      e -= r.length;
    }
}, Fi = (t, e, n, r) => {
  let i = n;
  const o = t.doc, s = o.clientID, a = o.store, c = n === null ? e._start : n.right;
  let l = [];
  const u = () => {
    l.length > 0 && (i = new K(F(s, oe(a, s)), i, i && i.lastId, c, c && c.id, e, null, new fn(l)), i.integrate(t, 0), l = []);
  };
  r.forEach((d) => {
    if (d === null)
      l.push(d);
    else
      switch (d.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          l.push(d);
          break;
        default:
          switch (u(), d.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              i = new K(F(s, oe(a, s)), i, i && i.lastId, c, c && c.id, e, null, new qr(new Uint8Array(
                /** @type {Uint8Array} */
                d
              ))), i.integrate(t, 0);
              break;
            case yn:
              i = new K(F(s, oe(a, s)), i, i && i.lastId, c, c && c.id, e, null, new Xr(
                /** @type {Doc} */
                d
              )), i.integrate(t, 0);
              break;
            default:
              if (d instanceof fe)
                i = new K(F(s, oe(a, s)), i, i && i.lastId, c, c && c.id, e, null, new dt(d)), i.integrate(t, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), u();
}, Td = () => Bt("Length exceeded!"), Nd = (t, e, n, r) => {
  if (n > e._length)
    throw Td();
  if (n === 0)
    return e._searchMarker && Pr(e._searchMarker, n, r.length), Fi(t, e, null, r);
  const i = n, o = ho(e, n);
  let s = e._start;
  for (o !== null && (s = o.p, n -= o.index, n === 0 && (s = s.prev, n += s && s.countable && !s.deleted ? s.length : 0)); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (n <= s.length) {
        n < s.length && Me(t, F(s.id.client, s.id.clock + n));
        break;
      }
      n -= s.length;
    }
  return e._searchMarker && Pr(e._searchMarker, i, r.length), Fi(t, e, s, r);
}, Zw = (t, e, n) => {
  let i = (e._searchMarker || []).reduce((o, s) => s.index > o.index ? s : o, { index: 0, p: e._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return Fi(t, e, i, n);
}, Pd = (t, e, n, r) => {
  if (r === 0)
    return;
  const i = n, o = r, s = ho(e, n);
  let a = e._start;
  for (s !== null && (a = s.p, n -= s.index); a !== null && n > 0; a = a.right)
    !a.deleted && a.countable && (n < a.length && Me(t, F(a.id.client, a.id.clock + n)), n -= a.length);
  for (; r > 0 && a !== null; )
    a.deleted || (r < a.length && Me(t, F(a.id.client, a.id.clock + r)), a.delete(t), r -= a.length), a = a.right;
  if (r > 0)
    throw Td();
  e._searchMarker && Pr(
    e._searchMarker,
    i,
    -o + r
    /* in case we remove the above exception */
  );
}, zi = (t, e, n) => {
  const r = e._map.get(n);
  r !== void 0 && r.delete(t);
}, fa = (t, e, n, r) => {
  const i = e._map.get(n) || null, o = t.doc, s = o.clientID;
  let a;
  if (r == null)
    a = new fn([r]);
  else
    switch (r.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        a = new fn([r]);
        break;
      case Uint8Array:
        a = new qr(
          /** @type {Uint8Array} */
          r
        );
        break;
      case yn:
        a = new Xr(
          /** @type {Doc} */
          r
        );
        break;
      default:
        if (r instanceof fe)
          a = new dt(r);
        else
          throw new Error("Unexpected content type");
    }
  new K(F(s, oe(o.store, s)), i, i && i.lastId, null, null, e, n, a).integrate(t, 0);
}, ha = (t, e) => {
  t.doc ?? ve();
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Dd = (t) => {
  const e = {};
  return t.doc ?? ve(), t._map.forEach((n, r) => {
    n.deleted || (e[r] = n.content.getContent()[n.length - 1]);
  }), e;
}, Md = (t, e) => {
  t.doc ?? ve();
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted;
}, Qw = (t, e) => {
  const n = {};
  return t._map.forEach((r, i) => {
    let o = r;
    for (; o !== null && (!e.sv.has(o.id.client) || o.id.clock >= (e.sv.get(o.id.client) || 0)); )
      o = o.left;
    o !== null && Zt(o, e) && (n[i] = o.content.getContent()[o.length - 1]);
  }), n;
}, si = (t) => (t.doc ?? ve(), bw(
  t._map.entries(),
  /** @param {any} entry */
  (e) => !e[1].deleted
));
class ex extends fo {
}
class _n extends fe {
  constructor() {
    super(), this._prelimContent = [], this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(e) {
    const n = new _n();
    return n.push(e), n;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, n) {
    super._integrate(e, n), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new _n();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const e = new _n();
    return e.insert(0, this.toArray().map(
      (n) => n instanceof fe ? (
        /** @type {typeof el} */
        n.clone()
      ) : n
    )), e;
  }
  get length() {
    return this.doc ?? ve(), this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    super._callObserver(e, n), po(this, e, new ex(this, e));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(e, n) {
    this.doc !== null ? Y(this.doc, (r) => {
      Nd(
        r,
        this,
        e,
        /** @type {any} */
        n
      );
    }) : this._prelimContent.splice(e, 0, ...n);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(e) {
    this.doc !== null ? Y(this.doc, (n) => {
      Zw(
        n,
        this,
        /** @type {any} */
        e
      );
    }) : this._prelimContent.push(...e);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */
  unshift(e) {
    this.insert(0, e);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(e, n = 1) {
    this.doc !== null ? Y(this.doc, (r) => {
      Pd(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(e) {
    return _d(this, e);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return Cd(this);
  }
  /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(e = 0, n = this.length) {
    return Ad(this, e, n);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((e) => e instanceof fe ? e.toJSON() : e);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(e) {
    return Od(
      this,
      /** @type {any} */
      e
    );
  }
  /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    Dr(this, e);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return Jw(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(Cx);
  }
}
const tx = (t) => new _n();
class nx extends fo {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(e, n, r) {
    super(e, n), this.keysChanged = r;
  }
}
class Hn extends fe {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(e) {
    super(), this._prelimContent = null, e === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(e);
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, n) {
    super._integrate(e, n), this._prelimContent.forEach((r, i) => {
      this.set(i, r);
    }), this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new Hn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const e = new Hn();
    return this.forEach((n, r) => {
      e.set(r, n instanceof fe ? (
        /** @type {typeof value} */
        n.clone()
      ) : n);
    }), e;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    po(this, e, new nx(this, e, n));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? ve();
    const e = {};
    return this._map.forEach((n, r) => {
      if (!n.deleted) {
        const i = n.content.getContent()[n.length - 1];
        e[r] = i instanceof fe ? i.toJSON() : i;
      }
    }), e;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...si(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return $o(
      si(this),
      /** @param {any} v */
      (e) => e[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return $o(
      si(this),
      /** @param {any} v */
      (e) => e[1].content.getContent()[e[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return $o(
      si(this),
      /** @param {any} v */
      (e) => (
        /** @type {any} */
        [e[0], e[1].content.getContent()[e[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    this.doc ?? ve(), this._map.forEach((n, r) => {
      n.deleted || e(n.content.getContent()[n.length - 1], r, this);
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(e) {
    this.doc !== null ? Y(this.doc, (n) => {
      zi(n, this, e);
    }) : this._prelimContent.delete(e);
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(e, n) {
    return this.doc !== null ? Y(this.doc, (r) => {
      fa(
        r,
        this,
        e,
        /** @type {any} */
        n
      );
    }) : this._prelimContent.set(e, n), n;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(e) {
    return (
      /** @type {any} */
      ha(this, e)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(e) {
    return Md(this, e);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? Y(this.doc, (e) => {
      this.forEach(function(n, r, i) {
        zi(e, i, r);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(Ex);
  }
}
const rx = (t) => new Hn(), Ft = (t, e) => t === e || typeof t == "object" && typeof e == "object" && t && e && Y0(t, e);
class As {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(e, n, r, i) {
    this.left = e, this.right = n, this.index = r, this.currentAttributes = i;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    this.right === null && Re(), this.right.content.constructor === le ? this.right.deleted || Qn(
      this.currentAttributes,
      /** @type {ContentFormat} */
      this.right.content
    ) : this.right.deleted || (this.index += this.right.length), this.left = this.right, this.right = this.right.right;
  }
}
const ic = (t, e, n) => {
  for (; e.right !== null && n > 0; )
    e.right.content.constructor === le ? e.right.deleted || Qn(
      e.currentAttributes,
      /** @type {ContentFormat} */
      e.right.content
    ) : e.right.deleted || (n < e.right.length && Me(t, F(e.right.id.client, e.right.id.clock + n)), e.index += e.right.length, n -= e.right.length), e.left = e.right, e.right = e.right.right;
  return e;
}, ai = (t, e, n, r) => {
  const i = /* @__PURE__ */ new Map(), o = r ? ho(e, n) : null;
  if (o) {
    const s = new As(o.p.left, o.p, o.index, i);
    return ic(t, s, n - o.index);
  } else {
    const s = new As(null, e._start, 0, i);
    return ic(t, s, n);
  }
}, Id = (t, e, n, r) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === le && Ft(
    r.get(
      /** @type {ContentFormat} */
      n.right.content.key
    ),
    /** @type {ContentFormat} */
    n.right.content.value
  )); )
    n.right.deleted || r.delete(
      /** @type {ContentFormat} */
      n.right.content.key
    ), n.forward();
  const i = t.doc, o = i.clientID;
  r.forEach((s, a) => {
    const c = n.left, l = n.right, u = new K(F(o, oe(i.store, o)), c, c && c.lastId, l, l && l.id, e, null, new le(a, s));
    u.integrate(t, 0), n.right = u, n.forward();
  });
}, Qn = (t, e) => {
  const { key: n, value: r } = e;
  r === null ? t.delete(n) : t.set(n, r);
}, Ld = (t, e) => {
  for (; t.right !== null; ) {
    if (!(t.right.deleted || t.right.content.constructor === le && Ft(
      e[
        /** @type {ContentFormat} */
        t.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      t.right.content.value
    ))) break;
    t.forward();
  }
}, Rd = (t, e, n, r) => {
  const i = t.doc, o = i.clientID, s = /* @__PURE__ */ new Map();
  for (const a in r) {
    const c = r[a], l = n.currentAttributes.get(a) ?? null;
    if (!Ft(l, c)) {
      s.set(a, l);
      const { left: u, right: d } = n;
      n.right = new K(F(o, oe(i.store, o)), u, u && u.lastId, d, d && d.id, e, null, new le(a, c)), n.right.integrate(t, 0), n.forward();
    }
  }
  return s;
}, zo = (t, e, n, r, i) => {
  n.currentAttributes.forEach((f, h) => {
    i[h] === void 0 && (i[h] = null);
  });
  const o = t.doc, s = o.clientID;
  Ld(n, i);
  const a = Rd(t, e, n, i), c = r.constructor === String ? new ct(
    /** @type {string} */
    r
  ) : r instanceof fe ? new dt(r) : new bn(r);
  let { left: l, right: u, index: d } = n;
  e._searchMarker && Pr(e._searchMarker, n.index, c.getLength()), u = new K(F(s, oe(o.store, s)), l, l && l.lastId, u, u && u.id, e, null, c), u.integrate(t, 0), n.right = u, n.index = d, n.forward(), Id(t, e, n, a);
}, oc = (t, e, n, r, i) => {
  const o = t.doc, s = o.clientID;
  Ld(n, i);
  const a = Rd(t, e, n, i);
  e: for (; n.right !== null && (r > 0 || a.size > 0 && (n.right.deleted || n.right.content.constructor === le)); ) {
    if (!n.right.deleted)
      switch (n.right.content.constructor) {
        case le: {
          const { key: c, value: l } = (
            /** @type {ContentFormat} */
            n.right.content
          ), u = i[c];
          if (u !== void 0) {
            if (Ft(u, l))
              a.delete(c);
            else {
              if (r === 0)
                break e;
              a.set(c, l);
            }
            n.right.delete(t);
          } else
            n.currentAttributes.set(c, l);
          break;
        }
        default:
          r < n.right.length && Me(t, F(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
          break;
      }
    n.forward();
  }
  if (r > 0) {
    let c = "";
    for (; r > 0; r--)
      c += `
`;
    n.right = new K(F(s, oe(o.store, s)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, e, null, new ct(c)), n.right.integrate(t, 0), n.forward();
  }
  Id(t, e, n, a);
}, $d = (t, e, n, r, i) => {
  let o = e;
  const s = st();
  for (; o && (!o.countable || o.deleted); ) {
    if (!o.deleted && o.content.constructor === le) {
      const l = (
        /** @type {ContentFormat} */
        o.content
      );
      s.set(l.key, l);
    }
    o = o.right;
  }
  let a = 0, c = !1;
  for (; e !== o; ) {
    if (n === e && (c = !0), !e.deleted) {
      const l = e.content;
      if (l.constructor === le) {
        const { key: u, value: d } = (
          /** @type {ContentFormat} */
          l
        ), f = r.get(u) ?? null;
        (s.get(u) !== l || f === d) && (e.delete(t), a++, !c && (i.get(u) ?? null) === d && f !== d && (f === null ? i.delete(u) : i.set(u, f))), !c && !e.deleted && Qn(
          i,
          /** @type {ContentFormat} */
          l
        );
      }
    }
    e = /** @type {Item} */
    e.right;
  }
  return a;
}, ix = (t, e) => {
  for (; e && e.right && (e.right.deleted || !e.right.countable); )
    e = e.right;
  const n = /* @__PURE__ */ new Set();
  for (; e && (e.deleted || !e.countable); ) {
    if (!e.deleted && e.content.constructor === le) {
      const r = (
        /** @type {ContentFormat} */
        e.content.key
      );
      n.has(r) ? e.delete(t) : n.add(r);
    }
    e = e.left;
  }
}, ox = (t) => {
  let e = 0;
  return Y(
    /** @type {Doc} */
    t.doc,
    (n) => {
      let r = (
        /** @type {Item} */
        t._start
      ), i = t._start, o = st();
      const s = hs(o);
      for (; i; )
        i.deleted === !1 && (i.content.constructor === le ? Qn(
          s,
          /** @type {ContentFormat} */
          i.content
        ) : (e += $d(n, r, i, o, s), o = hs(s), r = i)), i = i.right;
    }
  ), e;
}, sx = (t) => {
  const e = /* @__PURE__ */ new Set(), n = t.doc;
  for (const [r, i] of t.afterState.entries()) {
    const o = t.beforeState.get(r) || 0;
    i !== o && bd(
      t,
      /** @type {Array<Item|GC>} */
      n.store.clients.get(r),
      o,
      i,
      (s) => {
        !s.deleted && /** @type {Item} */
        s.content.constructor === le && s.constructor !== Je && e.add(
          /** @type {any} */
          s.parent
        );
      }
    );
  }
  Y(n, (r) => {
    Vt(t, t.deleteSet, (i) => {
      if (i instanceof Je || !/** @type {YText} */
      i.parent._hasFormatting || e.has(
        /** @type {YText} */
        i.parent
      ))
        return;
      const o = (
        /** @type {YText} */
        i.parent
      );
      i.content.constructor === le ? e.add(o) : ix(r, i);
    });
    for (const i of e)
      ox(i);
  });
}, sc = (t, e, n) => {
  const r = n, i = hs(e.currentAttributes), o = e.right;
  for (; n > 0 && e.right !== null; ) {
    if (e.right.deleted === !1)
      switch (e.right.content.constructor) {
        case dt:
        case bn:
        case ct:
          n < e.right.length && Me(t, F(e.right.id.client, e.right.id.clock + n)), n -= e.right.length, e.right.delete(t);
          break;
      }
    e.forward();
  }
  o && $d(t, o, e.right, i, e.currentAttributes);
  const s = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (e.left || e.right).parent
  );
  return s._searchMarker && Pr(s._searchMarker, e.index, -r + n), e;
};
class ax extends fo {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(e, n, r) {
    super(e, n), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), r.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.keysChanged.add(i);
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const e = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = e;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const e = (
        /** @type {Doc} */
        this.target.doc
      ), n = [];
      Y(e, (r) => {
        const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
        let s = this.target._start, a = null;
        const c = {};
        let l = "", u = 0, d = 0;
        const f = () => {
          if (a !== null) {
            let h = null;
            switch (a) {
              case "delete":
                d > 0 && (h = { delete: d }), d = 0;
                break;
              case "insert":
                (typeof l == "object" || l.length > 0) && (h = { insert: l }, i.size > 0 && (h.attributes = {}, i.forEach((p, m) => {
                  p !== null && (h.attributes[m] = p);
                }))), l = "";
                break;
              case "retain":
                u > 0 && (h = { retain: u }, K0(c) || (h.attributes = W0({}, c))), u = 0;
                break;
            }
            h && n.push(h), a = null;
          }
        };
        for (; s !== null; ) {
          switch (s.content.constructor) {
            case dt:
            case bn:
              this.adds(s) ? this.deletes(s) || (f(), a = "insert", l = s.content.getContent()[0], f()) : this.deletes(s) ? (a !== "delete" && (f(), a = "delete"), d += 1) : s.deleted || (a !== "retain" && (f(), a = "retain"), u += 1);
              break;
            case ct:
              this.adds(s) ? this.deletes(s) || (a !== "insert" && (f(), a = "insert"), l += /** @type {ContentString} */
              s.content.str) : this.deletes(s) ? (a !== "delete" && (f(), a = "delete"), d += s.length) : s.deleted || (a !== "retain" && (f(), a = "retain"), u += s.length);
              break;
            case le: {
              const { key: h, value: p } = (
                /** @type {ContentFormat} */
                s.content
              );
              if (this.adds(s)) {
                if (!this.deletes(s)) {
                  const m = i.get(h) ?? null;
                  Ft(m, p) ? p !== null && s.delete(r) : (a === "retain" && f(), Ft(p, o.get(h) ?? null) ? delete c[h] : c[h] = p);
                }
              } else if (this.deletes(s)) {
                o.set(h, p);
                const m = i.get(h) ?? null;
                Ft(m, p) || (a === "retain" && f(), c[h] = m);
              } else if (!s.deleted) {
                o.set(h, p);
                const m = c[h];
                m !== void 0 && (Ft(m, p) ? m !== null && s.delete(r) : (a === "retain" && f(), p === null ? delete c[h] : c[h] = p));
              }
              s.deleted || (a === "insert" && f(), Qn(
                i,
                /** @type {ContentFormat} */
                s.content
              ));
              break;
            }
          }
          s = s.right;
        }
        for (f(); n.length > 0; ) {
          const h = n[n.length - 1];
          if (h.retain !== void 0 && h.attributes === void 0)
            n.pop();
          else
            break;
        }
      }), this._delta = n;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
}
class Ht extends fe {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(e) {
    super(), this._pending = e !== void 0 ? [() => this.insert(0, e)] : [], this._searchMarker = [], this._hasFormatting = !1;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this.doc ?? ve(), this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(e, n) {
    super._integrate(e, n);
    try {
      this._pending.forEach((r) => r());
    } catch (r) {
      console.error(r);
    }
    this._pending = null;
  }
  _copy() {
    return new Ht();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const e = new Ht();
    return e.applyDelta(this.toDelta()), e;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    super._callObserver(e, n);
    const r = new ax(this, e, n);
    po(this, e, r), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? ve();
    let e = "", n = this._start;
    for (; n !== null; )
      !n.deleted && n.countable && n.content.constructor === ct && (e += /** @type {ContentString} */
      n.content.str), n = n.right;
    return e;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {Array<any>} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(e, { sanitize: n = !0 } = {}) {
    this.doc !== null ? Y(this.doc, (r) => {
      const i = new As(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let o = 0; o < e.length; o++) {
        const s = e[o];
        if (s.insert !== void 0) {
          const a = !n && typeof s.insert == "string" && o === e.length - 1 && i.right === null && s.insert.slice(-1) === `
` ? s.insert.slice(0, -1) : s.insert;
          (typeof a != "string" || a.length > 0) && zo(r, this, i, a, s.attributes || {});
        } else s.retain !== void 0 ? oc(r, this, i, s.retain, s.attributes || {}) : s.delete !== void 0 && sc(r, i, s.delete);
      }
    }) : this._pending.push(() => this.applyDelta(e));
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(e, n, r) {
    this.doc ?? ve();
    const i = [], o = /* @__PURE__ */ new Map(), s = (
      /** @type {Doc} */
      this.doc
    );
    let a = "", c = this._start;
    function l() {
      if (a.length > 0) {
        const d = {};
        let f = !1;
        o.forEach((p, m) => {
          f = !0, d[m] = p;
        });
        const h = { insert: a };
        f && (h.attributes = d), i.push(h), a = "";
      }
    }
    const u = () => {
      for (; c !== null; ) {
        if (Zt(c, e) || n !== void 0 && Zt(c, n))
          switch (c.content.constructor) {
            case ct: {
              const d = o.get("ychange");
              e !== void 0 && !Zt(c, e) ? (d === void 0 || d.user !== c.id.client || d.type !== "removed") && (l(), o.set("ychange", r ? r("removed", c.id) : { type: "removed" })) : n !== void 0 && !Zt(c, n) ? (d === void 0 || d.user !== c.id.client || d.type !== "added") && (l(), o.set("ychange", r ? r("added", c.id) : { type: "added" })) : d !== void 0 && (l(), o.delete("ychange")), a += /** @type {ContentString} */
              c.content.str;
              break;
            }
            case dt:
            case bn: {
              l();
              const d = {
                insert: c.content.getContent()[0]
              };
              if (o.size > 0) {
                const f = (
                  /** @type {Object<string,any>} */
                  {}
                );
                d.attributes = f, o.forEach((h, p) => {
                  f[p] = h;
                });
              }
              i.push(d);
              break;
            }
            case le:
              Zt(c, e) && (l(), Qn(
                o,
                /** @type {ContentFormat} */
                c.content
              ));
              break;
          }
        c = c.right;
      }
      l();
    };
    return e || n ? Y(s, (d) => {
      e && Ss(d, e), n && Ss(d, n), u();
    }, "cleanup") : u(), i;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(e, n, r) {
    if (n.length <= 0)
      return;
    const i = this.doc;
    i !== null ? Y(i, (o) => {
      const s = ai(o, this, e, !r);
      r || (r = {}, s.currentAttributes.forEach((a, c) => {
        r[c] = a;
      })), zo(o, this, s, n, r);
    }) : this._pending.push(() => this.insert(e, n, r));
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(e, n, r) {
    const i = this.doc;
    i !== null ? Y(i, (o) => {
      const s = ai(o, this, e, !r);
      zo(o, this, s, n, r || {});
    }) : this._pending.push(() => this.insertEmbed(e, n, r || {}));
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(e, n) {
    if (n === 0)
      return;
    const r = this.doc;
    r !== null ? Y(r, (i) => {
      sc(i, ai(i, this, e, !0), n);
    }) : this._pending.push(() => this.delete(e, n));
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(e, n, r) {
    if (n === 0)
      return;
    const i = this.doc;
    i !== null ? Y(i, (o) => {
      const s = ai(o, this, e, !1);
      s.right !== null && oc(o, this, s, n, r);
    }) : this._pending.push(() => this.format(e, n, r));
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(e) {
    this.doc !== null ? Y(this.doc, (n) => {
      zi(n, this, e);
    }) : this._pending.push(() => this.removeAttribute(e));
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(e, n) {
    this.doc !== null ? Y(this.doc, (r) => {
      fa(r, this, e, n);
    }) : this._pending.push(() => this.setAttribute(e, n));
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(e) {
    return (
      /** @type {any} */
      ha(this, e)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return Dd(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(Ox);
  }
}
const lx = (t) => new Ht();
class Bo {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(e, n = () => !0) {
    this._filter = n, this._root = e, this._currentNode = /** @type {Item} */
    e._start, this._firstCall = !0, e.doc ?? ve();
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let e = this._currentNode, n = e && e.content && /** @type {any} */
    e.content.type;
    if (e !== null && (!this._firstCall || e.deleted || !this._filter(n)))
      do
        if (n = /** @type {any} */
        e.content.type, !e.deleted && (n.constructor === be || n.constructor === dn) && n._start !== null)
          e = n._start;
        else
          for (; e !== null; ) {
            const r = e.next;
            if (r !== null) {
              e = r;
              break;
            } else e.parent === this._root ? e = null : e = /** @type {AbstractType<any>} */
            e.parent._item;
          }
      while (e !== null && (e.deleted || !this._filter(
        /** @type {ContentType} */
        e.content.type
      )));
    return this._firstCall = !1, e === null ? { value: void 0, done: !0 } : (this._currentNode = e, { value: (
      /** @type {any} */
      e.content.type
    ), done: !1 });
  }
}
class dn extends fe {
  constructor() {
    super(), this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const e = this._first;
    return e ? e.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, n) {
    super._integrate(e, n), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  _copy() {
    return new dn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const e = new dn();
    return e.insert(0, this.toArray().map((n) => n instanceof fe ? n.clone() : n)), e;
  }
  get length() {
    return this.doc ?? ve(), this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(e) {
    return new Bo(this, e);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(e) {
    e = e.toUpperCase();
    const r = new Bo(this, (i) => i.nodeName && i.nodeName.toUpperCase() === e).next();
    return r.done ? null : r.value;
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(e) {
    return e = e.toUpperCase(), un(new Bo(this, (n) => n.nodeName && n.nodeName.toUpperCase() === e));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    po(this, e, new dx(this, n, e));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return Od(this, (e) => e.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, n = {}, r) {
    const i = e.createDocumentFragment();
    return r !== void 0 && r._createAssociation(i, this), Dr(this, (o) => {
      i.insertBefore(o.toDOM(e, n, r), null);
    }), i;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(e, n) {
    this.doc !== null ? Y(this.doc, (r) => {
      Nd(r, this, e, n);
    }) : this._prelimContent.splice(e, 0, ...n);
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(e, n) {
    if (this.doc !== null)
      Y(this.doc, (r) => {
        const i = e && e instanceof fe ? e._item : e;
        Fi(r, this, i, n);
      });
    else {
      const r = (
        /** @type {Array<any>} */
        this._prelimContent
      ), i = e === null ? 0 : r.findIndex((o) => o === e) + 1;
      if (i === 0 && e !== null)
        throw Bt("Reference item not found");
      r.splice(i, 0, ...n);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(e, n = 1) {
    this.doc !== null ? Y(this.doc, (r) => {
      Pd(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return Cd(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(e) {
    this.insert(this.length, e);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */
  unshift(e) {
    this.insert(0, e);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(e) {
    return _d(this, e);
  }
  /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(e = 0, n = this.length) {
    return Ad(this, e, n);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    Dr(this, e);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef(Tx);
  }
}
const cx = (t) => new dn();
class be extends dn {
  constructor(e = "UNDEFINED") {
    super(), this.nodeName = e, this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, n) {
    super._integrate(e, n), /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((r, i) => {
      this.setAttribute(i, r);
    }), this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new be(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const e = new be(this.nodeName), n = this.getAttributes();
    return U0(n, (r, i) => {
      typeof r == "string" && e.setAttribute(i, r);
    }), e.insert(0, this.toArray().map((r) => r instanceof fe ? r.clone() : r)), e;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const e = this.getAttributes(), n = [], r = [];
    for (const a in e)
      r.push(a);
    r.sort();
    const i = r.length;
    for (let a = 0; a < i; a++) {
      const c = r[a];
      n.push(c + '="' + e[c] + '"');
    }
    const o = this.nodeName.toLocaleLowerCase(), s = n.length > 0 ? " " + n.join(" ") : "";
    return `<${o}${s}>${super.toString()}</${o}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(e) {
    this.doc !== null ? Y(this.doc, (n) => {
      zi(n, this, e);
    }) : this._prelimAttrs.delete(e);
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(e, n) {
    this.doc !== null ? Y(this.doc, (r) => {
      fa(r, this, e, n);
    }) : this._prelimAttrs.set(e, n);
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(e) {
    return (
      /** @type {any} */
      ha(this, e)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(e) {
    return (
      /** @type {any} */
      Md(this, e)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(e) {
    return (
      /** @type {any} */
      e ? Qw(this, e) : Dd(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, n = {}, r) {
    const i = e.createElement(this.nodeName), o = this.getAttributes();
    for (const s in o) {
      const a = o[s];
      typeof a == "string" && i.setAttribute(s, a);
    }
    return Dr(this, (s) => {
      i.appendChild(s.toDOM(e, n, r));
    }), r !== void 0 && r._createAssociation(i, this), i;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef(_x), e.writeKey(this.nodeName);
  }
}
const ux = (t) => new be(t.readKey());
class dx extends fo {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with which the
   *                                  change was created.
   */
  constructor(e, n, r) {
    super(e, r), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), n.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.attributesChanged.add(i);
    });
  }
}
class Bi extends Hn {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(e) {
    super(), this.hookName = e;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new Bi(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const e = new Bi(this.hookName);
    return this.forEach((n, r) => {
      e.set(r, n);
    }), e;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, n = {}, r) {
    const i = n[this.hookName];
    let o;
    return i !== void 0 ? o = i.createDom(this) : o = document.createElement(this.hookName), o.setAttribute("data-yjs-hook", this.hookName), r !== void 0 && r._createAssociation(o, this), o;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef(Nx), e.writeKey(this.hookName);
  }
}
const fx = (t) => new Bi(t.readKey());
class Le extends Ht {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  _copy() {
    return new Le();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const e = new Le();
    return e.applyDelta(this.toDelta()), e;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, n, r) {
    const i = e.createTextNode(this.toString());
    return r !== void 0 && r._createAssociation(i, this), i;
  }
  toString() {
    return this.toDelta().map((e) => {
      const n = [];
      for (const i in e.attributes) {
        const o = [];
        for (const s in e.attributes[i])
          o.push({ key: s, value: e.attributes[i][s] });
        o.sort((s, a) => s.key < a.key ? -1 : 1), n.push({ nodeName: i, attrs: o });
      }
      n.sort((i, o) => i.nodeName < o.nodeName ? -1 : 1);
      let r = "";
      for (let i = 0; i < n.length; i++) {
        const o = n[i];
        r += `<${o.nodeName}`;
        for (let s = 0; s < o.attrs.length; s++) {
          const a = o.attrs[s];
          r += ` ${a.key}="${a.value}"`;
        }
        r += ">";
      }
      r += e.insert;
      for (let i = n.length - 1; i >= 0; i--)
        r += `</${n[i].nodeName}>`;
      return r;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(Px);
  }
}
const hx = (t) => new Le();
class pa {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(e, n) {
    this.id = e, this.length = n;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw at();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} whether this merged with right
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(e, n, r) {
    throw at();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    throw at();
  }
}
const px = 0;
class Je extends pa {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    n > 0 && (this.id.clock += n, this.length -= n), yd(e.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeInfo(px), e.writeLen(this.length - n);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, n) {
    return null;
  }
}
class qr {
  /**
   * @param {Uint8Array} content
   */
  constructor(e) {
    this.content = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new qr(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(e) {
    throw at();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
}
const mx = (t) => new qr(t.readBuf());
class Mr {
  /**
   * @param {number} len
   */
  constructor(e) {
    this.len = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new Mr(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(e) {
    const n = new Mr(this.len - e);
    return this.len = e, n;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.len += e.len, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
    _r(e.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeLen(this.len - n);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
}
const gx = (t) => new Mr(t.readLen()), jd = (t, e) => new yn({ guid: t, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
class Xr {
  /**
   * @param {Doc} doc
   */
  constructor(e) {
    e._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = e;
    const n = {};
    this.opts = n, e.gc || (n.gc = !1), e.autoLoad && (n.autoLoad = !0), e.meta !== null && (n.meta = e.meta);
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new Xr(jd(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(e) {
    throw at();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
    this.doc._item = n, e.subdocsAdded.add(this.doc), this.doc.shouldLoad && e.subdocsLoaded.add(this.doc);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
    e.subdocsAdded.has(this.doc) ? e.subdocsAdded.delete(this.doc) : e.subdocsRemoved.add(this.doc);
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeString(this.doc.guid), e.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
}
const yx = (t) => new Xr(jd(t.readString(), t.readAny()));
class bn {
  /**
   * @param {Object} embed
   */
  constructor(e) {
    this.embed = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new bn(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(e) {
    throw at();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
}
const bx = (t) => new bn(t.readJSON());
class le {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(e, n) {
    this.key = e, this.value = n;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new le(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(e) {
    throw at();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(e, n) {
    const r = (
      /** @type {YText} */
      n.parent
    );
    r._searchMarker = null, r._hasFormatting = !0;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeKey(this.key), e.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
}
const vx = (t) => new le(t.readKey(), t.readJSON());
class Vi {
  /**
   * @param {Array<any>} arr
   */
  constructor(e) {
    this.arr = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new Vi(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(e) {
    const n = new Vi(this.arr.slice(e));
    return this.arr = this.arr.slice(0, e), n;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.arr = this.arr.concat(e.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    const r = this.arr.length;
    e.writeLen(r - n);
    for (let i = n; i < r; i++) {
      const o = this.arr[i];
      e.writeString(o === void 0 ? "undefined" : JSON.stringify(o));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
}
const wx = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++) {
    const i = t.readString();
    i === "undefined" ? n.push(void 0) : n.push(JSON.parse(i));
  }
  return new Vi(n);
}, xx = Ri("node_env") === "development";
class fn {
  /**
   * @param {Array<any>} arr
   */
  constructor(e) {
    this.arr = e, xx && ed(e);
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new fn(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(e) {
    const n = new fn(this.arr.slice(e));
    return this.arr = this.arr.slice(0, e), n;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.arr = this.arr.concat(e.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    const r = this.arr.length;
    e.writeLen(r - n);
    for (let i = n; i < r; i++) {
      const o = this.arr[i];
      e.writeAny(o);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
}
const Sx = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++)
    n.push(t.readAny());
  return new fn(n);
};
class ct {
  /**
   * @param {string} str
   */
  constructor(e) {
    this.str = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new ct(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(e) {
    const n = new ct(this.str.slice(e));
    this.str = this.str.slice(0, e);
    const r = this.str.charCodeAt(e - 1);
    return r >= 55296 && r <= 56319 && (this.str = this.str.slice(0, e - 1) + "�", n.str = "�" + n.str.slice(1)), n;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.str += e.str, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeString(n === 0 ? this.str : this.str.slice(n));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
}
const kx = (t) => new ct(t.readString()), Ax = [
  tx,
  rx,
  lx,
  ux,
  cx,
  fx,
  hx
], Cx = 0, Ex = 1, Ox = 2, _x = 3, Tx = 4, Nx = 5, Px = 6;
class dt {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(e) {
    this.type = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new dt(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(e) {
    throw at();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
    this.type._integrate(e.doc, n);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
    let n = this.type._start;
    for (; n !== null; )
      n.deleted ? n.id.clock < (e.beforeState.get(n.id.client) || 0) && e._mergeStructs.push(n) : n.delete(e), n = n.right;
    this.type._map.forEach((r) => {
      r.deleted ? r.id.clock < (e.beforeState.get(r.id.client) || 0) && e._mergeStructs.push(r) : r.delete(e);
    }), e.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
    let n = this.type._start;
    for (; n !== null; )
      n.gc(e, !0), n = n.right;
    this.type._start = null, this.type._map.forEach(
      /** @param {Item | null} item */
      (r) => {
        for (; r !== null; )
          r.gc(e, !0), r = r.left;
      }
    ), this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    this.type._write(e);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
}
const Dx = (t) => new dt(Ax[t.readTypeRef()](t)), Cs = (t, e) => {
  let n = e, r = 0, i;
  do
    r > 0 && (n = F(n.client, n.clock + r)), i = On(t, n), r = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof K);
  return {
    item: i,
    diff: r
  };
}, ma = (t, e) => {
  for (; t !== null && t.keep !== e; )
    t.keep = e, t = /** @type {AbstractType<any>} */
    t.parent._item;
}, Hi = (t, e, n) => {
  const { client: r, clock: i } = e.id, o = new K(
    F(r, i + n),
    e,
    F(r, i + n - 1),
    e.right,
    e.rightOrigin,
    e.parent,
    e.parentSub,
    e.content.splice(n)
  );
  return e.deleted && o.markDeleted(), e.keep && (o.keep = !0), e.redone !== null && (o.redone = F(e.redone.client, e.redone.clock + n)), e.right = o, o.right !== null && (o.right.left = o), t._mergeStructs.push(o), o.parentSub !== null && o.right === null && o.parent._map.set(o.parentSub, o), e.length = n, o;
}, ac = (t, e) => r0(
  t,
  /** @param {StackItem} s */
  (n) => Zn(n.deletions, e)
), Fd = (t, e, n, r, i, o) => {
  const s = t.doc, a = s.store, c = s.clientID, l = e.redone;
  if (l !== null)
    return Me(t, l);
  let u = (
    /** @type {AbstractType<any>} */
    e.parent._item
  ), d = null, f;
  if (u !== null && u.deleted === !0) {
    if (u.redone === null && (!n.has(u) || Fd(t, u, n, r, i, o) === null))
      return null;
    for (; u.redone !== null; )
      u = Me(t, u.redone);
  }
  const h = u === null ? (
    /** @type {AbstractType<any>} */
    e.parent
  ) : (
    /** @type {ContentType} */
    u.content.type
  );
  if (e.parentSub === null) {
    for (d = e.left, f = e; d !== null; ) {
      let b = d;
      for (; b !== null && /** @type {AbstractType<any>} */
      b.parent._item !== u; )
        b = b.redone === null ? null : Me(t, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === u) {
        d = b;
        break;
      }
      d = d.left;
    }
    for (; f !== null; ) {
      let b = f;
      for (; b !== null && /** @type {AbstractType<any>} */
      b.parent._item !== u; )
        b = b.redone === null ? null : Me(t, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === u) {
        f = b;
        break;
      }
      f = f.right;
    }
  } else if (f = null, e.right && !i) {
    for (d = e; d !== null && d.right !== null && (d.right.redone || Zn(r, d.right.id) || ac(o.undoStack, d.right.id) || ac(o.redoStack, d.right.id)); )
      for (d = d.right; d.redone; ) d = Me(t, d.redone);
    if (d && d.right !== null)
      return null;
  } else
    d = h._map.get(e.parentSub) || null;
  const p = oe(a, c), m = F(c, p), y = new K(
    m,
    d,
    d && d.lastId,
    f,
    f && f.id,
    h,
    e.parentSub,
    e.content.copy()
  );
  return e.redone = m, ma(y, !0), y.integrate(t, 0), y;
};
class K extends pa {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(e, n, r, i, o, s, a, c) {
    super(e, c.getLength()), this.origin = r, this.left = n, this.right = i, this.rightOrigin = o, this.parent = s, this.parentSub = a, this.redone = null, this.content = c, this.info = this.content.isCountable() ? $l : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(e) {
    (this.info & Io) > 0 !== e && (this.info ^= Io);
  }
  get marker() {
    return (this.info & Io) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & Rl) > 0;
  }
  set keep(e) {
    this.keep !== e && (this.info ^= Rl);
  }
  get countable() {
    return (this.info & $l) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & Mo) > 0;
  }
  set deleted(e) {
    this.deleted !== e && (this.info ^= Mo);
  }
  markDeleted() {
    this.info |= Mo;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, n) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= oe(n, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= oe(n, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === En && this.id.client !== this.parent.client && this.parent.clock >= oe(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = Jl(e, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = Me(e, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === Je || this.right && this.right.constructor === Je)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === K ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === K && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === En) {
      const r = On(n, this.parent);
      r.constructor === Je ? this.parent = null : this.parent = /** @type {ContentType} */
      r.content.type;
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    if (n > 0 && (this.id.clock += n, this.left = Jl(e, e.doc.store, F(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let r = this.left, i;
        if (r !== null)
          i = r.right;
        else if (this.parentSub !== null)
          for (i = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; i !== null && i.left !== null; )
            i = i.left;
        else
          i = /** @type {AbstractType<any>} */
          this.parent._start;
        const o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
        for (; i !== null && i !== this.right; ) {
          if (s.add(i), o.add(i), ii(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              r = i, o.clear();
            else if (ii(this.rightOrigin, i.rightOrigin))
              break;
          } else if (i.origin !== null && s.has(On(e.doc.store, i.origin)))
            o.has(On(e.doc.store, i.origin)) || (r = i, o.clear());
          else
            break;
          i = i.right;
        }
        this.left = r;
      }
      if (this.left !== null) {
        const r = this.left.right;
        this.right = r, this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null)
          for (r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; r !== null && r.left !== null; )
            r = r.left;
        else
          r = /** @type {AbstractType<any>} */
          this.parent._start, this.parent._start = this;
        this.right = r;
      }
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), yd(e.doc.store, this), this.content.integrate(e, this), Ql(
        e,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      ), /** @type {AbstractType<any>} */
      (this.parent._item !== null && /** @type {AbstractType<any>} */
      this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
    } else
      new Je(this.id, this.length).integrate(e, 0);
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let e = this.right;
    for (; e !== null && e.deleted; )
      e = e.right;
    return e;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let e = this.left;
    for (; e !== null && e.deleted; )
      e = e.left;
    return e;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : F(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(e) {
    if (this.constructor === e.constructor && ii(e.origin, this.lastId) && this.right === e && ii(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
      const n = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      return n && n.forEach((r) => {
        r.p === e && (r.p = this, !this.deleted && this.countable && (r.index -= this.length));
      }), e.keep && (this.keep = !0), this.right = e.right, this.right !== null && (this.right.left = this), this.length += e.length, !0;
    }
    return !1;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(e) {
    if (!this.deleted) {
      const n = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), _r(e.deleteSet, this.id.client, this.id.clock, this.length), Ql(e, n, this.parentSub), this.content.delete(e);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(e, n) {
    if (!this.deleted)
      throw Re();
    this.content.gc(e), n ? $w(e, this, new Je(this.id, this.length)) : this.content = new Mr(this.length);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(e, n) {
    const r = n > 0 ? F(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, o = this.parentSub, s = this.content.getRef() & so | (r === null ? 0 : Te) | // origin is defined
    (i === null ? 0 : Et) | // right origin is defined
    (o === null ? 0 : Cr);
    if (e.writeInfo(s), r !== null && e.writeLeftID(r), i !== null && e.writeRightID(i), r === null && i === null) {
      const a = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (a._item !== void 0) {
        const c = a._item;
        if (c === null) {
          const l = Tr(a);
          e.writeParentInfo(!0), e.writeString(l);
        } else
          e.writeParentInfo(!1), e.writeLeftID(c.id);
      } else a.constructor === String ? (e.writeParentInfo(!0), e.writeString(a)) : a.constructor === En ? (e.writeParentInfo(!1), e.writeLeftID(a)) : Re();
      o !== null && e.writeString(o);
    }
    this.content.write(e, n);
  }
}
const zd = (t, e) => Mx[e & so](t), Mx = [
  () => {
    Re();
  },
  // GC is not ItemContent
  gx,
  // 1
  wx,
  // 2
  mx,
  // 3
  kx,
  // 4
  bx,
  // 5
  vx,
  // 6
  Dx,
  // 7
  Sx,
  // 8
  yx,
  // 9
  () => {
    Re();
  }
  // 10 - Skip is not ItemContent
], Ix = 10;
class tt extends pa {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    Re();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeInfo(Ix), H(e.restEncoder, this.length - n);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, n) {
    return null;
  }
}
const Bd = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), Vd = "__ $YJS$ __";
Bd[Vd] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
Bd[Vd] = !0;
const Lx = () => {
  let t = !0;
  return (e, n) => {
    if (t) {
      t = !1;
      try {
        e();
      } finally {
        t = !0;
      }
    } else n !== void 0 && n();
  };
}, Rx = /[\uD800-\uDBFF]/, $x = /[\uDC00-\uDFFF]/, jx = (t, e) => {
  let n = 0, r = 0;
  for (; n < t.length && n < e.length && t[n] === e[n]; )
    n++;
  for (n > 0 && Rx.test(t[n - 1]) && n--; r + n < t.length && r + n < e.length && t[t.length - r - 1] === e[e.length - r - 1]; )
    r++;
  return r > 0 && $x.test(t[t.length - r]) && r--, {
    index: n,
    remove: t.length - n - r,
    insert: e.slice(n, e.length - r)
  };
}, Fx = jx, ne = new $e("y-sync"), Ot = new $e("y-undo");
new $e("yjs-cursor");
const pt = (t, e) => t >>> e | t << 32 - e, zx = (t) => pt(t, 2) ^ pt(t, 13) ^ pt(t, 22), Bx = (t) => pt(t, 6) ^ pt(t, 11) ^ pt(t, 25), Vx = (t) => pt(t, 7) ^ pt(t, 18) ^ t >>> 3, Hx = (t) => pt(t, 17) ^ pt(t, 19) ^ t >>> 10, Wx = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Ux = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
class Kx {
  constructor() {
    const e = new ArrayBuffer(320);
    this._H = new Uint32Array(e, 0, 8), this._H.set(Ux), this._W = new Uint32Array(e, 64, 64);
  }
  _updateHash() {
    const e = this._H, n = this._W;
    for (let d = 16; d < 64; d++)
      n[d] = Hx(n[d - 2]) + n[d - 7] + Vx(n[d - 15]) + n[d - 16];
    let r = e[0], i = e[1], o = e[2], s = e[3], a = e[4], c = e[5], l = e[6], u = e[7];
    for (let d = 0, f, h; d < 64; d++)
      f = u + Bx(a) + (a & c ^ ~a & l) + Wx[d] + n[d] >>> 0, h = zx(r) + (r & i ^ r & o ^ i & o) >>> 0, u = l, l = c, c = a, a = s + f >>> 0, s = o, o = i, i = r, r = f + h >>> 0;
    e[0] += r, e[1] += i, e[2] += o, e[3] += s, e[4] += a, e[5] += c, e[6] += l, e[7] += u;
  }
  /**
   * Returns a 32-byte hash.
   *
   * @param {Uint8Array} data
   */
  digest(e) {
    let n = 0;
    for (; n + 56 <= e.length; ) {
      let s = 0;
      for (; s < 16 && n + 3 < e.length; s++)
        this._W[s] = e[n++] << 24 | e[n++] << 16 | e[n++] << 8 | e[n++];
      if (n % 64 !== 0) {
        for (this._W.fill(0, s, 16); n < e.length; )
          this._W[s] |= e[n] << (3 - n % 4) * 8, n++;
        this._W[s] |= Te << (3 - n % 4) * 8;
      }
      this._updateHash();
    }
    const r = n % 64 !== 0;
    this._W.fill(0, 0, 16);
    let i = 0;
    for (; n < e.length; i++)
      for (let s = 3; s >= 0 && n < e.length; s--)
        this._W[i] |= e[n++] << s * 8;
    r || (this._W[i - (n % 4 === 0 ? 0 : 1)] |= Te << (3 - n % 4) * 8), this._W[14] = e.byteLength / i0, this._W[15] = e.byteLength * 8, this._updateHash();
    const o = new Uint8Array(32);
    for (let s = 0; s < this._H.length; s++)
      for (let a = 0; a < 4; a++)
        o[s * 4 + a] = this._H[s] >>> (3 - a) * 8;
    return o;
  }
}
const Gx = (t) => new Kx().digest(t), Yx = (t) => {
  for (let n = 6; n < t.length; n++)
    t[n % 6] = t[n % 6] ^ t[n];
  return t.slice(0, 6);
}, qx = (t) => nw(Yx(Gx(rw(t)))), Wi = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && /** @type {number} */
e.sv.get(t.id.client) > t.id.clock && !Zn(e.ds, t.id), Xx = [{ light: "#ecd44433", dark: "#ecd444" }], Jx = (t, e, n) => {
  if (!t.has(n)) {
    if (t.size < e.length) {
      const r = cn();
      t.forEach((i) => r.add(i)), e = e.filter((i) => !r.has(i));
    }
    t.set(n, $0(e));
  }
  return (
    /** @type {ColorDef} */
    t.get(n)
  );
}, Zx = (t, {
  colors: e = Xx,
  colorMapping: n = /* @__PURE__ */ new Map(),
  permanentUserData: r = null,
  onFirstRender: i = () => {
  },
  mapping: o
} = {}) => {
  let s = !1;
  const a = new e1(t, o), c = new gt({
    props: {
      editable: (l) => {
        const u = ne.getState(l);
        return u.snapshot == null && u.prevSnapshot == null;
      }
    },
    key: ne,
    state: {
      /**
       * @returns {any}
       */
      init: (l, u) => ({
        type: t,
        doc: t.doc,
        binding: a,
        snapshot: null,
        prevSnapshot: null,
        isChangeOrigin: !1,
        isUndoRedoOperation: !1,
        addToHistory: !0,
        colors: e,
        colorMapping: n,
        permanentUserData: r
      }),
      apply: (l, u) => {
        const d = l.getMeta(ne);
        if (d !== void 0) {
          u = Object.assign({}, u);
          for (const f in d)
            u[f] = d[f];
        }
        return u.addToHistory = l.getMeta("addToHistory") !== !1, u.isChangeOrigin = d !== void 0 && !!d.isChangeOrigin, u.isUndoRedoOperation = d !== void 0 && !!d.isChangeOrigin && !!d.isUndoRedoOperation, a.prosemirrorView !== null && d !== void 0 && (d.snapshot != null || d.prevSnapshot != null) && rd(0, () => {
          a.prosemirrorView != null && (d.restore == null ? a._renderSnapshot(
            d.snapshot,
            d.prevSnapshot,
            u
          ) : (a._renderSnapshot(
            d.snapshot,
            d.snapshot,
            u
          ), delete u.restore, delete u.snapshot, delete u.prevSnapshot, a.mux(() => {
            a._prosemirrorChanged(
              a.prosemirrorView.state.doc
            );
          })));
        }), u;
      }
    },
    view: (l) => (a.initView(l), o == null && a._forceRerender(), i(), {
      update: () => {
        const u = c.getState(l.state);
        if (u.snapshot == null && u.prevSnapshot == null && // If the content doesn't change initially, we don't render anything to Yjs
        // If the content was cleared by a user action, we want to catch the change and
        // represent it in Yjs
        (s || l.state.doc.content.findDiffStart(
          l.state.doc.type.createAndFill().content
        ) !== null)) {
          if (s = !0, u.addToHistory === !1 && !u.isChangeOrigin) {
            const d = Ot.getState(l.state), f = d && d.undoManager;
            f && f.stopCapturing();
          }
          a.mux(() => {
            u.doc.transact((d) => {
              d.meta.set("addToHistory", u.addToHistory), a._prosemirrorChanged(l.state.doc);
            }, ne);
          });
        }
      },
      destroy: () => {
        a.destroy();
      }
    })
  });
  return c;
}, Qx = (t, e, n) => {
  if (e !== null && e.anchor !== null && e.head !== null)
    if (e.type === "all")
      t.setSelection(new Mh(t.doc));
    else if (e.type === "node") {
      const r = xi(
        n.doc,
        n.type,
        e.anchor,
        n.mapping
      );
      t.setSelection(Ic.create(t.doc, r));
    } else {
      const r = xi(
        n.doc,
        n.type,
        e.anchor,
        n.mapping
      ), i = xi(
        n.doc,
        n.type,
        e.head,
        n.mapping
      );
      if (r !== null && i !== null) {
        const o = nt.between(t.doc.resolve(r), t.doc.resolve(i));
        t.setSelection(o);
      }
    }
}, Es = (t, e) => ({
  type: (
    /** @type {any} */
    e.selection.jsonID
  ),
  anchor: Ns(
    e.selection.anchor,
    t.type,
    t.mapping
  ),
  head: Ns(
    e.selection.head,
    t.type,
    t.mapping
  )
});
class e1 {
  /**
   * @param {Y.XmlFragment} yXmlFragment The bind source
   * @param {ProsemirrorMapping} mapping
   */
  constructor(e, n = /* @__PURE__ */ new Map()) {
    this.type = e, this.prosemirrorView = null, this.mux = Lx(), this.mapping = n, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
      this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = Es(
        this,
        this.prosemirrorView.state
      ));
    }, this.afterAllTransactions = () => {
      this.beforeTransactionSelection = null;
    }, this._domSelectionInView = null;
  }
  /**
   * Create a transaction for changing the prosemirror state.
   *
   * @returns
   */
  get _tr() {
    return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
  }
  _isLocalCursorInView() {
    return this.prosemirrorView.hasFocus() ? (td && this._domSelectionInView === null && (rd(0, () => {
      this._domSelectionInView = null;
    }), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
  }
  _isDomSelectionInView() {
    const e = this.prosemirrorView._root.getSelection();
    if (e == null || e.anchorNode == null) return !1;
    const n = this.prosemirrorView._root.createRange();
    n.setStart(e.anchorNode, e.anchorOffset), n.setEnd(e.focusNode, e.focusOffset), n.getClientRects().length === 0 && n.startContainer && n.collapsed && n.selectNodeContents(n.startContainer);
    const i = n.getBoundingClientRect(), o = ow.documentElement;
    return i.bottom >= 0 && i.right >= 0 && i.left <= (window.innerWidth || o.clientWidth || 0) && i.top <= (window.innerHeight || o.clientHeight || 0);
  }
  /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */
  renderSnapshot(e, n) {
    n || (n = md(dd(), /* @__PURE__ */ new Map())), this.prosemirrorView.dispatch(
      this._tr.setMeta(ne, { snapshot: e, prevSnapshot: n })
    );
  }
  unrenderSnapshot() {
    this.mapping.clear(), this.mux(() => {
      const e = this.type.toArray().map(
        (r) => wi(
          /** @type {Y.XmlElement} */
          r,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((r) => r !== null), n = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Ve(ye.from(e), 0, 0)
      );
      n.setMeta(ne, { snapshot: null, prevSnapshot: null }), this.prosemirrorView.dispatch(n);
    });
  }
  _forceRerender() {
    this.mapping.clear(), this.mux(() => {
      const e = this.beforeTransactionSelection !== null ? null : this.prosemirrorView.state.selection, n = this.type.toArray().map(
        (i) => wi(
          /** @type {Y.XmlElement} */
          i,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((i) => i !== null), r = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Ve(ye.from(n), 0, 0)
      );
      if (e) {
        const i = zn(zt(e.anchor, 0), r.doc.content.size), o = zn(zt(e.head, 0), r.doc.content.size);
        r.setSelection(nt.create(r.doc, i, o));
      }
      this.prosemirrorView.dispatch(
        r.setMeta(ne, { isChangeOrigin: !0, binding: this })
      );
    });
  }
  /**
   * @param {Y.Snapshot|Uint8Array} snapshot
   * @param {Y.Snapshot|Uint8Array} prevSnapshot
   * @param {Object} pluginState
   */
  _renderSnapshot(e, n, r) {
    let i = this.doc, o = this.type;
    if (e || (e = Fo(this.doc)), e instanceof Uint8Array || n instanceof Uint8Array)
      if ((!(e instanceof Uint8Array) || !(n instanceof Uint8Array)) && Re(), i = new yn({ gc: !1 }), xs(i, n), n = Fo(i), xs(i, e), e = Fo(i), o._item === null) {
        const s = Array.from(this.doc.share.keys()).find(
          (a) => this.doc.share.get(a) === this.type
        );
        o = i.getXmlFragment(s);
      } else {
        const s = i.store.clients.get(o._item.id.client) ?? [], a = lt(
          s,
          o._item.id.clock
        );
        o = /** @type {Y.XmlFragment} */
        /** @type {Y.ContentType} */
        /** @type {Y.Item} */
        s[a].content.type;
      }
    this.mapping.clear(), this.mux(() => {
      i.transact((s) => {
        const a = r.permanentUserData;
        a && a.dss.forEach((d) => {
          Vt(s, d, (f) => {
          });
        });
        const c = (d, f) => {
          const h = d === "added" ? a.getUserByClientId(f.client) : a.getUserByDeletedId(f);
          return {
            user: h,
            type: d,
            color: Jx(
              r.colorMapping,
              r.colors,
              h
            )
          };
        }, l = Ed(
          o,
          new ua(n.ds, e.sv)
        ).map((d) => !d._item.deleted || Wi(d._item, e) || Wi(d._item, n) ? wi(
          d,
          this.prosemirrorView.state.schema,
          { mapping: /* @__PURE__ */ new Map(), isOMark: /* @__PURE__ */ new Map() },
          e,
          n,
          c
        ) : null).filter((d) => d !== null), u = this._tr.replace(
          0,
          this.prosemirrorView.state.doc.content.size,
          new Ve(ye.from(l), 0, 0)
        );
        this.prosemirrorView.dispatch(
          u.setMeta(ne, { isChangeOrigin: !0 })
        );
      }, ne);
    });
  }
  /**
   * @param {Array<Y.YEvent<any>>} events
   * @param {Y.Transaction} transaction
   */
  _typeChanged(e, n) {
    if (this.prosemirrorView == null) return;
    const r = ne.getState(this.prosemirrorView.state);
    if (e.length === 0 || r.snapshot != null || r.prevSnapshot != null) {
      this.renderSnapshot(r.snapshot, r.prevSnapshot);
      return;
    }
    this.mux(() => {
      const i = (a, c) => this.mapping.delete(c);
      Vt(
        n,
        n.deleteSet,
        (a) => {
          if (a.constructor === K) {
            const c = (
              /** @type {Y.ContentType} */
              /** @type {Y.Item} */
              a.content.type
            );
            c && this.mapping.delete(c);
          }
        }
      ), n.changed.forEach(i), n.changedParentTypes.forEach(i);
      const o = this.type.toArray().map(
        (a) => Hd(
          /** @type {Y.XmlElement | Y.XmlHook} */
          a,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((a) => a !== null);
      let s = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Ve(ye.from(o), 0, 0)
      );
      Qx(s, this.beforeTransactionSelection, this), s = s.setMeta(ne, { isChangeOrigin: !0, isUndoRedoOperation: n.origin instanceof wd }), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && s.scrollIntoView(), this.prosemirrorView.dispatch(s);
    });
  }
  /**
   * @param {import('prosemirror-model').Node} doc
   */
  _prosemirrorChanged(e) {
    this.doc.transact(() => {
      _s(this.doc, this.type, e, this), this.beforeTransactionSelection = Es(
        this,
        this.prosemirrorView.state
      );
    }, ne);
  }
  /**
   * View is ready to listen to changes. Register observers.
   * @param {any} prosemirrorView
   */
  initView(e) {
    this.prosemirrorView != null && this.destroy(), this.prosemirrorView = e, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
  }
  destroy() {
    this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
  }
}
const Hd = (t, e, n, r, i, o) => {
  const s = (
    /** @type {PModel.Node} */
    n.mapping.get(t)
  );
  if (s === void 0) {
    if (t instanceof be)
      return wi(
        t,
        e,
        n,
        r,
        i,
        o
      );
    throw at();
  }
  return s;
}, wi = (t, e, n, r, i, o) => {
  const s = [], a = (c) => {
    if (c instanceof be) {
      const l = Hd(
        c,
        e,
        n,
        r,
        i,
        o
      );
      l !== null && s.push(l);
    } else {
      const l = (
        /** @type {Y.ContentType} */
        c._item.right?.content?.type
      );
      l instanceof Ht && !l._item.deleted && l._item.id.client === l.doc.clientID && (c.applyDelta([
        { retain: c.length },
        ...l.toDelta()
      ]), l.doc.transact((d) => {
        l._item.delete(d);
      }));
      const u = t1(
        c,
        e,
        n,
        r,
        i,
        o
      );
      u !== null && u.forEach((d) => {
        d !== null && s.push(d);
      });
    }
  };
  r === void 0 || i === void 0 ? t.toArray().forEach(a) : Ed(t, new ua(i.ds, r.sv)).forEach(a);
  try {
    const c = t.getAttributes(r);
    r !== void 0 && (Wi(
      /** @type {Y.Item} */
      t._item,
      r
    ) ? Wi(
      /** @type {Y.Item} */
      t._item,
      i
    ) || (c.ychange = o ? o(
      "added",
      /** @type {Y.Item} */
      t._item.id
    ) : { type: "added" }) : c.ychange = o ? o(
      "removed",
      /** @type {Y.Item} */
      t._item.id
    ) : { type: "removed" });
    const l = e.node(t.nodeName, c, s);
    return n.mapping.set(t, l), l;
  } catch {
    return t.doc.transact((l) => {
      t._item.delete(l);
    }, ne), n.mapping.delete(t), null;
  }
}, t1 = (t, e, n, r, i, o) => {
  const s = [], a = t.toDelta(r, i, o);
  try {
    for (let c = 0; c < a.length; c++) {
      const l = a[c];
      s.push(e.text(l.insert, a1(l.attributes, e)));
    }
  } catch {
    return t.doc.transact((l) => {
      t._item.delete(l);
    }, ne), null;
  }
  return s;
}, n1 = (t, e) => {
  const n = new Le(), r = t.map((i) => ({
    // @ts-ignore
    insert: i.text,
    attributes: Ud(i.marks, e)
  }));
  return n.applyDelta(r), e.mapping.set(n, t), n;
}, r1 = (t, e) => {
  const n = new be(t.type.name);
  for (const r in t.attrs) {
    const i = t.attrs[r];
    i !== null && r !== "ychange" && n.setAttribute(r, i);
  }
  return n.insert(
    0,
    mo(t).map(
      (r) => Os(r, e)
    )
  ), e.mapping.set(n, t), n;
}, Os = (t, e) => t instanceof Array ? n1(t, e) : r1(t, e), lc = (t) => typeof t == "object" && t !== null, ga = (t, e) => {
  const n = Object.keys(t).filter((i) => t[i] !== null);
  let r = n.length === (e == null ? 0 : Object.keys(e).filter((i) => e[i] !== null).length);
  for (let i = 0; i < n.length && r; i++) {
    const o = n[i], s = t[o], a = e[o];
    r = o === "ychange" || s === a || lc(s) && lc(a) && ga(s, a);
  }
  return r;
}, mo = (t) => {
  const e = t.content.content, n = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (i.isText) {
      const o = [];
      for (let s = e[r]; r < e.length && s.isText; s = e[++r])
        o.push(s);
      r--, n.push(o);
    } else
      n.push(i);
  }
  return n;
}, Wd = (t, e) => {
  const n = t.toDelta();
  return n.length === e.length && n.every(
    /** @type {(d:any,i:number) => boolean} */
    (r, i) => r.insert === /** @type {any} */
    e[i].text && Zu(r.attributes || {}).length === e[i].marks.length && Qu(r.attributes, (o, s) => {
      const a = ya(s), c = e[i].marks;
      return ga(o, c.find(
        /** @param {any} mark */
        (l) => l.type.name === a
      )?.attrs);
    })
  );
}, Ir = (t, e) => {
  if (t instanceof be && !(e instanceof Array) && Ts(t, e)) {
    const n = mo(e);
    return t._length === n.length && ga(t.getAttributes(), e.attrs) && t.toArray().every(
      (r, i) => Ir(r, n[i])
    );
  }
  return t instanceof Le && e instanceof Array && Wd(t, e);
}, Ui = (t, e) => t === e || t instanceof Array && e instanceof Array && t.length === e.length && t.every(
  (n, r) => e[r] === n
), cc = (t, e, n) => {
  const r = t.toArray(), i = mo(e), o = i.length, s = r.length, a = zn(s, o);
  let c = 0, l = 0, u = !1;
  for (; c < a; c++) {
    const d = r[c], f = i[c];
    if (Ui(n.mapping.get(d), f))
      u = !0;
    else if (!Ir(d, f))
      break;
  }
  for (; c + l < a; l++) {
    const d = r[s - l - 1], f = i[o - l - 1];
    if (Ui(n.mapping.get(d), f))
      u = !0;
    else if (!Ir(d, f))
      break;
  }
  return {
    equalityFactor: c + l,
    foundMappedChild: u
  };
}, i1 = (t) => {
  let e = "", n = t._start;
  const r = {};
  for (; n !== null; )
    n.deleted || (n.countable && n.content instanceof ct ? e += n.content.str : n.content instanceof le && (r[n.content.key] = null)), n = n.right;
  return {
    str: e,
    nAttrs: r
  };
}, o1 = (t, e, n) => {
  n.mapping.set(t, e);
  const { nAttrs: r, str: i } = i1(t), o = e.map((l) => ({
    insert: (
      /** @type {any} */
      l.text
    ),
    attributes: Object.assign({}, r, Ud(l.marks, n))
  })), { insert: s, remove: a, index: c } = Fx(
    i,
    o.map((l) => l.insert).join("")
  );
  t.delete(c, a), t.insert(c, s), t.applyDelta(
    o.map((l) => ({ retain: l.insert.length, attributes: l.attributes }))
  );
}, s1 = /(.*)(--[a-zA-Z0-9+/=]{8})$/, ya = (t) => s1.exec(t)?.[1] ?? t, a1 = (t, e) => {
  const n = [];
  for (const r in t)
    n.push(e.mark(ya(r), t[r]));
  return n;
}, Ud = (t, e) => {
  const n = {};
  return t.forEach((r) => {
    if (r.type.name !== "ychange") {
      const i = It(e.isOMark, r.type, () => !r.type.excludes(r.type));
      n[i ? `${r.type.name}--${qx(r.toJSON())}` : r.type.name] = r.attrs;
    }
  }), n;
}, _s = (t, e, n, r) => {
  if (e instanceof be && e.nodeName !== n.type.name)
    throw new Error("node name mismatch!");
  if (r.mapping.set(e, n), e instanceof be) {
    const d = e.getAttributes(), f = n.attrs;
    for (const h in f)
      f[h] !== null ? d[h] !== f[h] && h !== "ychange" && e.setAttribute(h, f[h]) : e.removeAttribute(h);
    for (const h in d)
      f[h] === void 0 && e.removeAttribute(h);
  }
  const i = mo(n), o = i.length, s = e.toArray(), a = s.length, c = zn(o, a);
  let l = 0, u = 0;
  for (; l < c; l++) {
    const d = s[l], f = i[l];
    if (!Ui(r.mapping.get(d), f))
      if (Ir(d, f))
        r.mapping.set(d, f);
      else
        break;
  }
  for (; u + l + 1 < c; u++) {
    const d = s[a - u - 1], f = i[o - u - 1];
    if (!Ui(r.mapping.get(d), f))
      if (Ir(d, f))
        r.mapping.set(d, f);
      else
        break;
  }
  t.transact(() => {
    for (; a - l - u > 0 && o - l - u > 0; ) {
      const f = s[l], h = i[l], p = s[a - u - 1], m = i[o - u - 1];
      if (f instanceof Le && h instanceof Array)
        Wd(f, h) || o1(f, h, r), l += 1;
      else {
        let y = f instanceof be && Ts(f, h), b = p instanceof be && Ts(p, m);
        if (y && b) {
          const v = cc(
            /** @type {Y.XmlElement} */
            f,
            /** @type {PModel.Node} */
            h,
            r
          ), w = cc(
            /** @type {Y.XmlElement} */
            p,
            /** @type {PModel.Node} */
            m,
            r
          );
          v.foundMappedChild && !w.foundMappedChild ? b = !1 : !v.foundMappedChild && w.foundMappedChild || v.equalityFactor < w.equalityFactor ? y = !1 : b = !1;
        }
        y ? (_s(
          t,
          /** @type {Y.XmlFragment} */
          f,
          /** @type {PModel.Node} */
          h,
          r
        ), l += 1) : b ? (_s(
          t,
          /** @type {Y.XmlFragment} */
          p,
          /** @type {PModel.Node} */
          m,
          r
        ), u += 1) : (r.mapping.delete(e.get(l)), e.delete(l, 1), e.insert(l, [
          Os(h, r)
        ]), l += 1);
      }
    }
    const d = a - l - u;
    if (a === 1 && o === 0 && s[0] instanceof Le ? (r.mapping.delete(s[0]), s[0].delete(0, s[0].length)) : d > 0 && (e.slice(l, l + d).forEach((f) => r.mapping.delete(f)), e.delete(l, d)), l + u < o) {
      const f = [];
      for (let h = l; h < o - u; h++)
        f.push(Os(i[h], r));
      e.insert(l, f);
    }
  }, ne);
}, Ts = (t, e) => !(e instanceof Array) && t.nodeName === e.type.name, Ns = (t, e, n) => {
  if (t === 0)
    return jo(e, 0, e.length === 0 ? -1 : 0);
  let r = e._first === null ? null : (
    /** @type {Y.ContentType} */
    e._first.content.type
  );
  for (; r !== null && e !== r; ) {
    if (r instanceof Le) {
      if (r._length >= t)
        return jo(r, t, e.length === 0 ? -1 : 0);
      if (t -= r._length, r._item !== null && r._item.next !== null)
        r = /** @type {Y.ContentType} */
        r._item.next.content.type;
      else {
        do
          r = r._item === null ? null : r._item.parent, t--;
        while (r !== e && r !== null && r._item !== null && r._item.next === null);
        r !== null && r !== e && (r = r._item === null ? null : (
          /** @type {Y.ContentType} */
          /** @type Y.Item */
          r._item.next.content.type
        ));
      }
    } else {
      const i = (
        /** @type {any} */
        (n.get(r) || { nodeSize: 0 }).nodeSize
      );
      if (r._first !== null && t < i)
        r = /** @type {Y.ContentType} */
        r._first.content.type, t--;
      else {
        if (t === 1 && r._length === 0 && i > 1)
          return new ji(r._item === null ? null : r._item.id, r._item === null ? Tr(r) : null, null);
        if (t -= i, r._item !== null && r._item.next !== null)
          r = /** @type {Y.ContentType} */
          r._item.next.content.type;
        else {
          if (t === 0)
            return r = r._item === null ? r : r._item.parent, new ji(r._item === null ? null : r._item.id, r._item === null ? Tr(r) : null, null);
          do
            r = /** @type {Y.Item} */
            r._item.parent, t--;
          while (r !== e && /** @type {Y.Item} */
          r._item.next === null);
          r !== e && (r = /** @type {Y.ContentType} */
          /** @type {Y.Item} */
          /** @type {Y.Item} */
          r._item.next.content.type);
        }
      }
    }
    if (r === null)
      throw Re();
    if (t === 0 && r.constructor !== Le && r !== e)
      return l1(r._item.parent, r._item);
  }
  return jo(e, e._length, e.length === 0 ? -1 : 0);
}, l1 = (t, e) => {
  let n = null, r = null;
  return t._item === null ? r = Tr(t) : n = F(t._item.id.client, t._item.id.clock), new ji(n, r, e.id);
}, xi = (t, e, n, r) => {
  const i = Lw(n, t);
  if (i === null || i.type !== e && !Nr(e, i.type._item))
    return null;
  let o = i.type, s = 0;
  if (o.constructor === Le)
    s = i.index;
  else if (o._item === null || !o._item.deleted) {
    let a = o._first, c = 0;
    for (; c < o._length && c < i.index && a !== null; ) {
      if (!a.deleted) {
        const l = (
          /** @type {Y.ContentType} */
          a.content.type
        );
        c++, l instanceof Le ? s += l._length : s += /** @type {any} */
        r.get(l).nodeSize;
      }
      a = /** @type {Y.Item} */
      a.right;
    }
    s += 1;
  }
  for (; o !== e && o._item !== null; ) {
    const a = o._item.parent;
    if (a._item === null || !a._item.deleted) {
      s += 1;
      let c = (
        /** @type {Y.AbstractType} */
        a._first
      );
      for (; c !== null; ) {
        const l = (
          /** @type {Y.ContentType} */
          c.content.type
        );
        if (l === o)
          break;
        c.deleted || (l instanceof Le ? s += l._length : s += /** @type {any} */
        r.get(l).nodeSize), c = c.right;
      }
    }
    o = /** @type {Y.AbstractType} */
    a;
  }
  return s - 1;
};
function c1(t) {
  const e = t.toArray(), n = (r) => {
    let i;
    if (r instanceof Le)
      i = r.toDelta().map(
        /** @param {any} d */
        (s) => {
          const a = {
            type: "text",
            text: s.insert
          };
          return s.attributes && (a.marks = Object.keys(s.attributes).map((c) => {
            const l = s.attributes[c], d = {
              type: ya(c)
            };
            return Object.keys(l) && (d.attrs = l), d;
          })), a;
        }
      );
    else if (r instanceof be) {
      i = {
        type: r.nodeName
      };
      const o = r.getAttributes();
      Object.keys(o).length && (i.attrs = o);
      const s = r.toArray();
      s.length && (i.content = s.map(n).flat());
    } else
      Re();
    return i;
  };
  return {
    type: "doc",
    content: e.map(n)
  };
}
const u1 = (t) => Ot.getState(t)?.undoManager?.undo() != null, d1 = (t) => Ot.getState(t)?.undoManager?.redo() != null, f1 = /* @__PURE__ */ new Set(["paragraph"]), h1 = (t, e) => !(t instanceof K) || !(t.content instanceof dt) || !(t.content.type instanceof Ht || t.content.type instanceof be && e.has(t.content.type.nodeName)) || t.content.type._length === 0, p1 = ({ protectedNodes: t = f1, trackedOrigins: e = [], undoManager: n = null } = {}) => new gt({
  key: Ot,
  state: {
    init: (r, i) => {
      const o = ne.getState(i), s = n || new wd(o.type, {
        trackedOrigins: new Set([ne].concat(e)),
        deleteFilter: (a) => h1(a, t),
        captureTransaction: (a) => a.meta.get("addToHistory") !== !1
      });
      return {
        undoManager: s,
        prevSel: null,
        hasUndoOps: s.undoStack.length > 0,
        hasRedoOps: s.redoStack.length > 0
      };
    },
    apply: (r, i, o, s) => {
      const a = ne.getState(s).binding, c = i.undoManager, l = c.undoStack.length > 0, u = c.redoStack.length > 0;
      return a ? {
        undoManager: c,
        prevSel: Es(a, o),
        hasUndoOps: l,
        hasRedoOps: u
      } : l !== i.hasUndoOps || u !== i.hasRedoOps ? Object.assign({}, i, {
        hasUndoOps: c.undoStack.length > 0,
        hasRedoOps: c.redoStack.length > 0
      }) : i;
    }
  },
  view: (r) => {
    const i = ne.getState(r.state), o = Ot.getState(r.state).undoManager;
    return o.on("stack-item-added", ({ stackItem: s }) => {
      const a = i.binding;
      a && s.meta.set(a, Ot.getState(r.state).prevSel);
    }), o.on("stack-item-popped", ({ stackItem: s }) => {
      const a = i.binding;
      a && (a.beforeTransactionSelection = s.meta.get(a) || a.beforeTransactionSelection);
    }), {
      destroy: () => {
        o.destroy();
      }
    };
  }
});
pn.create({
  name: "collaboration",
  priority: 1e3,
  addOptions() {
    return {
      document: null,
      field: "default",
      fragment: null
    };
  },
  addStorage() {
    return {
      isDisabled: !1
    };
  },
  onCreate() {
    this.editor.extensionManager.extensions.find((t) => t.name === "history") && console.warn('[tiptap warn]: "@tiptap/extension-collaboration" comes with its own history support and is not compatible with "@tiptap/extension-history".');
  },
  addCommands() {
    return {
      undo: () => ({ tr: t, state: e, dispatch: n }) => (t.setMeta("preventDispatch", !0), Ot.getState(e).undoManager.undoStack.length === 0 ? !1 : n ? u1(e) : !0),
      redo: () => ({ tr: t, state: e, dispatch: n }) => (t.setMeta("preventDispatch", !0), Ot.getState(e).undoManager.redoStack.length === 0 ? !1 : n ? d1(e) : !0)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Shift-Mod-z": () => this.editor.commands.redo()
    };
  },
  addProseMirrorPlugins() {
    var t;
    const e = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = p1(this.options.yUndoOptions), r = n.spec.view;
    n.spec.view = (s) => {
      const { undoManager: a } = Ot.getState(s.state);
      a.restore && (a.restore(), a.restore = () => {
      });
      const c = r ? r(s) : void 0;
      return {
        destroy: () => {
          const l = a.trackedOrigins.has(a), u = a._observers;
          a.restore = () => {
            l && a.trackedOrigins.add(a), a.doc.on("afterTransaction", a.afterTransactionHandler), a._observers = u;
          }, c?.destroy && c.destroy();
        }
      };
    };
    const i = {
      ...this.options.ySyncOptions,
      onFirstRender: this.options.onFirstRender
    }, o = Zx(e, i);
    return this.editor.options.enableContentCheck && ((t = e.doc) === null || t === void 0 || t.on("beforeTransaction", () => {
      try {
        const s = c1(e);
        if (s.content.length === 0)
          return;
        this.editor.schema.nodeFromJSON(s).check();
      } catch (s) {
        return this.editor.emit("contentError", {
          error: s,
          editor: this.editor,
          disableCollaboration: () => {
            var a;
            (a = e.doc) === null || a === void 0 || a.destroy(), this.storage.isDisabled = !0;
          }
        }), !1;
      }
    })), [
      o,
      n,
      // Only add the filterInvalidContent plugin if content checking is enabled
      this.editor.options.enableContentCheck && new gt({
        key: new $e("filterInvalidContent"),
        filterTransaction: () => {
          var s;
          return this.storage.isDisabled && ((s = e.doc) === null || s === void 0 || s.destroy()), !0;
        }
      })
    ].filter(Boolean);
  }
});
function m1(t) {
  return !!t.getMeta(ne);
}
function uc(t) {
  if (!t.length)
    return yr.empty;
  const e = [], n = t[0].$from.node(0);
  return t.forEach((r) => {
    const i = r.$from.pos, o = r.$from.nodeAfter;
    o && e.push(Ai.node(i, i + o.nodeSize, {
      class: "ProseMirror-selectednoderange"
    }));
  }), yr.create(n, e);
}
function go(t, e, n) {
  const r = [], i = t.node(0);
  n = typeof n == "number" && n >= 0 ? n : t.sameParent(e) ? Math.max(0, t.sharedDepth(e.pos) - 1) : t.sharedDepth(e.pos);
  const o = new Ih(t, e, n), s = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((a, c) => {
    const l = s + c, u = l + a.nodeSize;
    if (l < o.start || l >= o.end)
      return;
    const d = new Mc(i.resolve(l), i.resolve(u));
    r.push(d);
  }), r;
}
class ba {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new ba(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return new pe(n, r);
  }
}
class pe extends qe {
  constructor(e, n, r, i = 1) {
    const { doc: o } = e, s = e === n, a = e.pos === o.content.size && n.pos === o.content.size, c = s && !a ? o.resolve(n.pos + (i > 0 ? 1 : -1)) : n, l = s && a ? o.resolve(e.pos - (i > 0 ? 1 : -1)) : e, u = go(l.min(c), l.max(c), r), d = c.pos >= e.pos ? u[0].$from : u[u.length - 1].$to, f = c.pos >= e.pos ? u[u.length - 1].$to : u[0].$from;
    super(d, f, u), this.depth = r;
  }
  // we can safely ignore this TypeScript error: https://github.com/Microsoft/TypeScript/issues/338
  // @ts-ignore
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(e) {
    return e instanceof pe && e.$from.pos === this.$from.pos && e.$to.pos === this.$to.pos;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.anchor)), i = e.resolve(n.map(this.head));
    return new pe(r, i);
  }
  toJSON() {
    return {
      type: "nodeRange",
      anchor: this.anchor,
      head: this.head
    };
  }
  get isForwards() {
    return this.head >= this.anchor;
  }
  get isBackwards() {
    return !this.isForwards;
  }
  extendBackwards() {
    const { doc: e } = this.$from;
    if (this.isForwards && this.ranges.length > 1) {
      const i = this.ranges.slice(0, -1), o = i[0].$from, s = i[i.length - 1].$to;
      return new pe(o, s, this.depth);
    }
    const n = this.ranges[0], r = e.resolve(Math.max(0, n.$from.pos - 1));
    return new pe(this.$anchor, r, this.depth);
  }
  extendForwards() {
    const { doc: e } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const i = this.ranges.slice(1), o = i[0].$from, s = i[i.length - 1].$to;
      return new pe(s, o, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], r = e.resolve(Math.min(e.content.size, n.$to.pos + 1));
    return new pe(this.$anchor, r, this.depth);
  }
  static fromJSON(e, n) {
    return new pe(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r, i, o = 1) {
    return new this(e.resolve(n), e.resolve(r), i, o);
  }
  getBookmark() {
    return new ba(this.anchor, this.head);
  }
}
pe.prototype.visible = !1;
function li(t) {
  return t instanceof pe;
}
pn.create({
  name: "nodeRange",
  addOptions() {
    return {
      depth: void 0,
      key: "Mod"
    };
  },
  addKeyboardShortcuts() {
    return {
      // extend NodeRangeSelection upwards
      "Shift-ArrowUp": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, selection: o, tr: s } = r, { anchor: a, head: c } = o;
        if (!li(o)) {
          const u = pe.create(i, a, c, e, -1);
          return s.setSelection(u), n.dispatch(s), !0;
        }
        const l = o.extendBackwards();
        return s.setSelection(l), n.dispatch(s), !0;
      },
      // extend NodeRangeSelection downwards
      "Shift-ArrowDown": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, selection: o, tr: s } = r, { anchor: a, head: c } = o;
        if (!li(o)) {
          const u = pe.create(i, a, c, e);
          return s.setSelection(u), n.dispatch(s), !0;
        }
        const l = o.extendForwards();
        return s.setSelection(l), n.dispatch(s), !0;
      },
      // add `NodeRangeSelection` to all nodes
      "Mod-a": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, tr: o } = r, s = pe.create(i, 0, i.content.size, e);
        return o.setSelection(s), n.dispatch(o), !0;
      }
    };
  },
  onSelectionUpdate() {
    const { selection: t } = this.editor.state;
    li(t) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
  },
  addProseMirrorPlugins() {
    let t = !1, e = !1;
    return [
      new gt({
        key: new $e("nodeRange"),
        props: {
          attributes: () => t ? {
            class: "ProseMirror-noderangeselection"
          } : { class: "" },
          handleDOMEvents: {
            mousedown: (n, r) => {
              const { key: i } = this.options, o = /Mac/.test(navigator.platform), s = !!r.shiftKey, a = !!r.ctrlKey, c = !!r.altKey, l = !!r.metaKey, u = o ? l : a;
              return (i == null || i === "Shift" && s || i === "Control" && a || i === "Alt" && c || i === "Meta" && l || i === "Mod" && u) && (e = !0), e && document.addEventListener("mouseup", () => {
                e = !1;
                const { state: d } = n, { doc: f, selection: h, tr: p } = d, { $anchor: m, $head: y } = h;
                if (m.sameParent(y))
                  return;
                const b = pe.create(f, m.pos, y.pos, this.options.depth);
                p.setSelection(b), n.dispatch(p);
              }, { once: !0 }), !1;
            }
          },
          // when selecting some text we want to render some decorations
          // to preview a `NodeRangeSelection`
          decorations: (n) => {
            const { selection: r } = n, i = li(r);
            if (t = !1, !e)
              return i ? (t = !0, uc(r.ranges)) : null;
            const { $from: o, $to: s } = r;
            if (!i && o.sameParent(s))
              return null;
            const a = go(o, s, this.options.depth);
            return a.length ? (t = !0, uc(a)) : null;
          }
        }
      })
    ];
  }
});
function g1(t) {
  let e = "";
  const n = getComputedStyle(t);
  for (let r = 0; r < n.length; r += 1)
    e += `${n[r]}:${n.getPropertyValue(n[r])};`;
  return e;
}
function y1(t) {
  const e = t.cloneNode(!0), n = [t, ...Array.from(t.getElementsByTagName("*"))], r = [e, ...Array.from(e.getElementsByTagName("*"))];
  return n.forEach((i, o) => {
    r[o].style.cssText = g1(i);
  }), e;
}
const Kd = (t) => {
  const { x: e, y: n, direction: r, editor: i } = t;
  let o = null, s = null, a = null, c = e;
  for (; s === null && c < window.innerWidth && c > 0; ) {
    const l = document.elementsFromPoint(c, n), u = l.findIndex((f) => f.classList.contains("ProseMirror")), d = l.slice(0, u);
    if (d.length > 0) {
      const f = d[0];
      if (o = f, a = i.view.posAtDOM(f, 0), a >= 0) {
        s = i.state.doc.nodeAt(Math.max(a - 1, 0)), s?.isText && (s = i.state.doc.nodeAt(Math.max(a - 1, 0))), s || (s = i.state.doc.nodeAt(Math.max(a, 0)));
        break;
      }
    }
    r === "left" ? c -= 1 : c += 1;
  }
  return { resultElement: o, resultNode: s, pos: a ?? null };
};
function ci(t, e) {
  return window.getComputedStyle(t)[e];
}
function b1(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function v1(t, e, n) {
  const r = parseInt(ci(t.dom, "paddingLeft"), 10), i = parseInt(ci(t.dom, "paddingRight"), 10), o = parseInt(ci(t.dom, "borderLeftWidth"), 10), s = parseInt(ci(t.dom, "borderLeftWidth"), 10), a = t.dom.getBoundingClientRect();
  return {
    left: b1(e, a.left + r + o, a.right - i - s),
    top: n
  };
}
function Gd(t) {
  var e;
  (e = t.parentNode) === null || e === void 0 || e.removeChild(t);
}
function w1(t, e) {
  const { doc: n } = e.view.state, r = Kd({
    editor: e,
    x: t.clientX,
    y: t.clientY,
    direction: "right"
  });
  if (!r.resultNode || r.pos === null)
    return [];
  const i = t.clientX, o = v1(e.view, i, t.clientY), s = e.view.posAtCoords(o);
  if (!s)
    return [];
  const { pos: a } = s;
  if (!n.resolve(a).parent)
    return [];
  const l = n.resolve(r.pos), u = n.resolve(r.pos + 1);
  return go(l, u, 0);
}
function x1(t, e) {
  const { view: n } = e;
  if (!t.dataTransfer)
    return;
  const { empty: r, $from: i, $to: o } = n.state.selection, s = w1(t, e), a = go(i, o, 0), c = a.some((y) => s.find((b) => b.$from === y.$from && b.$to === y.$to)), l = r || !c ? s : a;
  if (!l.length)
    return;
  const { tr: u } = n.state, d = document.createElement("div"), f = l[0].$from.pos, h = l[l.length - 1].$to.pos, p = pe.create(n.state.doc, f, h), m = p.content();
  l.forEach((y) => {
    const b = n.nodeDOM(y.$from.pos), v = y1(b);
    d.append(v);
  }), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), t.dataTransfer.clearData(), t.dataTransfer.setDragImage(d, 0, 0), n.dragging = { slice: m, move: !0 }, u.setSelection(p), n.dispatch(u), document.addEventListener("drop", () => Gd(d), { once: !0 });
}
const dc = (t, e) => {
  const n = t.resolve(e), { depth: r } = n;
  return r === 0 ? e : n.pos - n.parentOffset - 1;
}, fc = (t, e) => {
  const n = t.nodeAt(e), r = t.resolve(e);
  let { depth: i } = r, o = n;
  for (; i > 0; ) {
    const s = r.node(i);
    i -= 1, i === 0 && (o = s);
  }
  return o;
}, Vo = (t, e) => {
  const n = ne.getState(t);
  return n ? Ns(e, n.type, n.binding.mapping) : null;
}, S1 = (t, e) => {
  const n = ne.getState(t);
  return n ? xi(n.doc, n.type, e, n.binding.mapping) || 0 : -1;
}, hc = (t, e) => {
  let n = e;
  for (; n && n.parentNode && n.parentNode !== t.dom; )
    n = n.parentNode;
  return n;
}, Yd = new $e("dragHandle"), qd = ({ pluginKey: t = Yd, element: e, editor: n, tippyOptions: r, onNodeChange: i }) => {
  const o = document.createElement("div");
  let s = null, a = !1, c = null, l = -1, u;
  return e.addEventListener("dragstart", (d) => {
    x1(d, n), setTimeout(() => {
      e && (e.style.pointerEvents = "none");
    }, 0);
  }), e.addEventListener("dragend", () => {
    e && (e.style.pointerEvents = "auto");
  }), new gt({
    key: typeof t == "string" ? new $e(t) : t,
    state: {
      init() {
        return { locked: !1 };
      },
      apply(d, f, h, p) {
        const m = d.getMeta("lockDragHandle"), y = d.getMeta("hideDragHandle");
        if (m !== void 0 && (a = m), y && s)
          return s.hide(), a = !1, c = null, l = -1, i?.({ editor: n, node: null, pos: -1 }), f;
        if (d.docChanged && l !== -1 && e && s)
          if (m1(d)) {
            const b = S1(p, u);
            b !== l && (l = b);
          } else {
            const b = d.mapping.map(l);
            b !== l && (l = b, u = Vo(p, l));
          }
        return f;
      }
    },
    view: (d) => {
      var f;
      return e.draggable = !0, e.style.pointerEvents = "auto", (f = n.view.dom.parentElement) === null || f === void 0 || f.appendChild(o), o.appendChild(e), o.style.pointerEvents = "none", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", {
        update(h, p) {
          if (!e)
            return;
          if (!n.isEditable) {
            s?.destroy(), s = null;
            return;
          }
          if (s || (s = Lh(d.dom, {
            getReferenceClientRect: null,
            interactive: !0,
            trigger: "manual",
            placement: "left-start",
            hideOnClick: !1,
            duration: 100,
            popperOptions: {
              modifiers: [
                { name: "flip", enabled: !1 },
                {
                  name: "preventOverflow",
                  options: {
                    rootBoundary: "document",
                    mainAxis: !1
                  }
                }
              ]
            },
            ...r,
            appendTo: o,
            content: e
          })), a ? e.draggable = !1 : e.draggable = !0, d.state.doc.eq(p.doc) || l === -1)
            return;
          let m = d.nodeDOM(l);
          if (m = hc(d, m), m === d.dom || m?.nodeType !== 1)
            return;
          const y = d.posAtDOM(m, 0), b = fc(n.state.doc, y), v = dc(n.state.doc, y);
          c = b, l = v, u = Vo(d.state, l), i?.({ editor: n, node: c, pos: l }), s.setProps({
            getReferenceClientRect: () => m.getBoundingClientRect()
          });
        },
        // TODO: Kills even on hot reload
        destroy() {
          s?.destroy(), e && Gd(o);
        }
      };
    },
    props: {
      handleDOMEvents: {
        mouseleave(d, f) {
          return a || f.target && !o.contains(f.relatedTarget) && (s?.hide(), c = null, l = -1, i?.({ editor: n, node: null, pos: -1 })), !1;
        },
        mousemove(d, f) {
          if (!e || !s || a)
            return !1;
          const h = Kd({
            x: f.clientX,
            y: f.clientY,
            direction: "right",
            editor: n
          });
          if (!h.resultElement)
            return !1;
          let p = h.resultElement;
          if (p = hc(d, p), p === d.dom || p?.nodeType !== 1)
            return !1;
          const m = d.posAtDOM(p, 0), y = fc(n.state.doc, m);
          if (y !== c) {
            const b = dc(n.state.doc, m);
            c = y, l = b, u = Vo(d.state, l), i?.({ editor: n, node: c, pos: l }), s.setProps({
              getReferenceClientRect: () => p.getBoundingClientRect()
            }), s.show();
          }
          return !1;
        }
      }
    }
  });
};
pn.create({
  name: "dragHandle",
  addOptions() {
    return {
      render() {
        const t = document.createElement("div");
        return t.classList.add("drag-handle"), t;
      },
      tippyOptions: {},
      locked: !1,
      onNodeChange: () => null
    };
  },
  addCommands() {
    return {
      lockDragHandle: () => ({ editor: t }) => (this.options.locked = !0, t.commands.setMeta("lockDragHandle", this.options.locked)),
      unlockDragHandle: () => ({ editor: t }) => (this.options.locked = !1, t.commands.setMeta("lockDragHandle", this.options.locked)),
      toggleDragHandle: () => ({ editor: t }) => (this.options.locked = !this.options.locked, t.commands.setMeta("lockDragHandle", this.options.locked))
    };
  },
  addProseMirrorPlugins() {
    const t = this.options.render();
    return [
      qd({
        tippyOptions: this.options.tippyOptions,
        element: t,
        editor: this.editor,
        onNodeChange: this.options.onNodeChange
      })
    ];
  }
});
const k1 = (t) => {
  const { className: e = "drag-handle", children: n, editor: r, pluginKey: i = Yd, onNodeChange: o, tippyOptions: s } = t, [a, c] = ue(null), l = Ct(null);
  return it(() => a ? r.isDestroyed ? () => {
    l.current = null;
  } : (l.current || (l.current = qd({
    editor: r,
    element: a,
    pluginKey: i,
    tippyOptions: s,
    onNodeChange: o
  }), r.registerPlugin(l.current)), () => {
    r.unregisterPlugin(i), l.current = null;
  }) : () => {
    l.current = null;
  }, [a, r, o, i, s]), C.createElement("div", { className: e, ref: c }, n);
}, va = (t) => typeof t == "object" && t !== null && !Array.isArray(t), A1 = (t, e) => {
  const n = va(t.attrs) ? t.attrs : {};
  return {
    ...t,
    attrs: {
      ...n,
      id: e
    }
  };
}, wa = (t) => {
  const e = { ...t };
  if (e.type && Fn(e.type) && va(e.attrs) && "id" in e.attrs) {
    const { id: n, ...r } = e.attrs;
    e.attrs = Object.keys(r).length > 0 ? r : void 0;
  }
  return Array.isArray(e.content) && (e.content = e.content.map(wa)), e;
}, sr = (t) => t.map(wa), C1 = (t) => va(t) ? t.type : void 0, E1 = (t, e) => {
  const n = wa(t);
  return n.type && Fn(n.type) ? A1(n, e) : n;
}, O1 = (t, e) => e.length === 0 ? ye.empty : ye.fromArray(
  e.map((n) => t.schema.nodeFromJSON(n))
), ar = (t, e) => new Ve(O1(t, e), 0, 0), lr = (t, e) => {
  const n = Tv(t, e);
  if (!n)
    throw new _1(e);
  return n;
}, kt = (t) => t.isEmpty ? { json: null, html: null } : { json: t.getJSON(), html: t.getHTML() };
class _1 extends Error {
  code = "target_not_found";
  targetId;
  constructor(e) {
    super(
      `Could not find block node ${e} in the current editor document.`
    ), this.name = "NotesTextEditorPatchTargetNotFoundError", this.targetId = e, Object.setPrototypeOf(this, new.target.prototype);
  }
}
class T1 extends Error {
  code = "unsupported_patch_type";
  patchType;
  constructor(e) {
    super(`Unsupported NotesTextEditor patch type: ${String(e)}`), this.name = "NotesTextEditorUnsupportedPatchTypeError", this.patchType = e, Object.setPrototypeOf(this, new.target.prototype);
  }
}
const N1 = (t, e) => {
  switch (e.type) {
    case "top_level_prepend": {
      const r = ar(t, sr(e.blocks)), i = t.state.tr.replace(0, 0, r);
      return i.docChanged && t.view.dispatch(i), kt(t);
    }
    case "top_level_append": {
      const r = ar(t, sr(e.blocks)), i = t.state.doc.content.size, o = t.state.tr.replace(i, i, r);
      return o.docChanged && t.view.dispatch(o), kt(t);
    }
    case "insert_before": {
      const r = lr(t, e.targetId), i = ar(t, sr(e.blocks)), o = t.state.tr.replace(r.pos, r.pos, i);
      return o.docChanged && t.view.dispatch(o), kt(t);
    }
    case "insert_after": {
      const r = lr(t, e.targetId), i = r.pos + r.node.nodeSize, o = ar(t, sr(e.blocks)), s = t.state.tr.replace(i, i, o);
      return s.docChanged && t.view.dispatch(s), kt(t);
    }
    case "replace_block": {
      const r = lr(t, e.targetId), i = t.schema.nodeFromJSON(
        E1(e.block, e.targetId)
      ), o = t.state.tr.replaceWith(
        r.pos,
        r.pos + r.node.nodeSize,
        i
      );
      return o.docChanged && t.view.dispatch(o), kt(t);
    }
    case "replace_content": {
      const r = lr(t, e.targetId), i = t.state.tr.replace(
        r.pos + 1,
        r.pos + r.node.nodeSize - 1,
        ar(t, sr(e.content))
      );
      return i.docChanged && t.view.dispatch(i), kt(t);
    }
    case "delete_block": {
      const r = lr(t, e.targetId), i = t.state.tr.delete(
        r.pos,
        r.pos + r.node.nodeSize
      );
      return i.docChanged && t.view.dispatch(i), kt(t);
    }
  }
  const n = e;
  throw new T1(
    C1(n)
  );
}, P1 = ({
  placeholder: t,
  translations: e,
  aiBlockConfig: n,
  imageUploadConfig: r
}) => [
  $c,
  jc,
  Fc,
  zc,
  Bc,
  Vc,
  Hc,
  Wc,
  Uc,
  Eu,
  _u,
  Ou,
  fv,
  Vv,
  Qv,
  Ev.configure({
    currentConfig: n
  }),
  $v,
  Yv,
  ...r ? [jv(r)] : [],
  _v,
  // Automatically add unique IDs to all block nodes
  Rh,
  $h(t),
  jh(t),
  Xv({
    aiBlockConfig: n,
    translations: e,
    imageUploadConfig: r
  })
], D1 = Ds({
  base: "flex flex-row items-center justify-center gap-2 p-3",
  variants: {
    variant: {
      info: "bg-f1-background-info text-f1-foreground-info",
      warning: "bg-f1-background-warning text-f1-foreground-warning",
      critical: "bg-f1-background-critical text-f1-foreground-critical",
      neutral: "bg-f1-background-tertiary text-f1-foreground",
      positive: "bg-f1-background-positive text-f1-foreground-positive"
    }
  },
  defaultVariants: {
    variant: "info"
  }
}), pc = (t) => t.isVisible !== !1, M1 = (t) => "isVisible" in t ? t.isVisible !== !1 : !0, I1 = (t) => !!t && "items" in t, L1 = (t) => !!t && "label" in t && !("items" in t), R1 = ({
  primaryAction: t,
  secondaryActions: e = [],
  metadata: n,
  otherActions: r = [],
  banner: i
}) => {
  const o = e.filter(pc), s = r.filter(M1), a = t && pc(t), c = o.length > 0, l = s.length > 0, u = c || l || a;
  return /* @__PURE__ */ A("div", { className: "flex flex-col", children: [
    (n && n.length > 0 || u) && /* @__PURE__ */ A("div", { className: "flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center", children: [
      n && n.length > 0 && /* @__PURE__ */ g(Fh, { items: n }),
      /* @__PURE__ */ A("div", { className: "flex flex-shrink-0 flex-row items-center gap-2", children: [
        l && /* @__PURE__ */ g(Ws, { items: s }),
        o.map(
          (d, f) => zh(d) ? /* @__PURE__ */ g(
            $a,
            {
              items: d.items,
              onClick: d.onClick,
              variant: d.variant ?? "outline",
              value: d.value,
              size: "md",
              disabled: d.disabled,
              tooltip: d.tooltip,
              loading: d.loading
            },
            f
          ) : /* @__PURE__ */ g(
            ce,
            {
              onClick: d.onClick,
              variant: d.variant || "outline",
              label: d.label,
              icon: d.icon,
              hideLabel: d.hideLabel,
              disabled: d.disabled,
              tooltip: d.tooltip,
              loading: d.loading
            },
            f
          )
        ),
        a && (c || l) && /* @__PURE__ */ g("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
        a && L1(t) && /* @__PURE__ */ g(
          ce,
          {
            label: t.label,
            onClick: t.onClick,
            variant: "default",
            icon: t.icon,
            disabled: t.disabled,
            tooltip: t.tooltip
          }
        ),
        a && I1(t) && /* @__PURE__ */ g(
          $a,
          {
            items: t.items,
            onClick: t.onClick,
            variant: "default",
            value: t.value,
            disabled: t.disabled,
            tooltip: t.tooltip
          }
        )
      ] })
    ] }),
    i && /* @__PURE__ */ A("div", { className: D1({ variant: i.variant }), children: [
      /* @__PURE__ */ g(on, { icon: i.icon }),
      /* @__PURE__ */ g(Lc, { children: i.title })
    ] })
  ] });
}, $1 = ({
  value: t,
  onChange: e,
  placeholder: n,
  disabled: r = !1
}) => /* @__PURE__ */ g("div", { className: "mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 sm:px-14 px-0", children: /* @__PURE__ */ g(
  "textarea",
  {
    ref: (s) => {
      s && (s.style.height = "auto", s.style.height = `${s.scrollHeight}px`);
    },
    disabled: r,
    value: t,
    onChange: (s) => {
      const a = s.target.value.replace(/[\r\n]/g, "");
      e?.(a), s.target.style.height = "auto", s.target.style.height = `${s.target.scrollHeight}px`;
    },
    onKeyDown: (s) => {
      s.key === "Enter" && s.preventDefault();
    },
    placeholder: n,
    className: "resize-none overflow-hidden font-semibold text-f1-foreground placeholder-f1-foreground-tertiary sm:text-[39px] sm:leading-[49px] text-[34px] leading-[42px]",
    rows: 1
  }
) }), j1 = Pt(function({
  onChange: e,
  placeholder: n,
  initialEditorState: r,
  readonly: i = !1,
  aiBlockConfig: o,
  imageUploadConfig: s,
  onTitleChange: a,
  primaryAction: c,
  secondaryActions: l,
  otherActions: u,
  metadata: d,
  banner: f,
  showBubbleMenu: h = !1,
  titlePlaceholder: p,
  dataTestId: m
}, y) {
  const b = Un(), v = Ct(null), w = Ct(null), S = gc(), [k] = ue(() => r?.content || ""), [O, x] = ue(r?.title || ""), [E, N] = ue(null), I = (L) => {
    switch (L) {
      case "file-too-large":
        return b.imageUpload.errors.fileTooLarge;
      case "invalid-type":
        return b.imageUpload.errors.invalidType;
      case "upload-failed":
        return b.imageUpload.errors.uploadFailed;
      default:
        return b.imageUpload.errors.uploadFailed;
    }
  };
  it(() => {
    a && a(O);
  }, [O, a]);
  const M = Ct(!1), T = Bh({
    extensions: P1({
      placeholder: n,
      translations: b,
      aiBlockConfig: o,
      imageUploadConfig: s ? {
        ...s,
        onError: (L) => {
          N(L);
        }
      } : void 0
    }),
    content: k,
    onUpdate: ({ editor: L }) => {
      M.current || e(kt(L));
    },
    onCreate: ({ editor: L }) => {
      if (Ll(L.state.doc)) {
        M.current = !0;
        try {
          L.commands.setContent(L.getJSON());
        } finally {
          M.current = !1;
        }
        Ll(L.state.doc) || e(kt(L));
      }
    },
    editable: !i
  }), P = Ye((L) => {
    M.current = !0;
    try {
      return L();
    } finally {
      M.current = !1;
    }
  }, []);
  yc(y, () => ({
    clear: () => T?.commands.clearContent(),
    focus: () => T?.commands.focus(),
    setContent: (L) => T?.commands.setContent(L),
    applyPageDocumentPatch: (L) => T ? P(() => N1(T, L)) : { json: null, html: null },
    insertAIBlock: () => {
      !T || !o || T.chain().focus().insertContentAt(T.state.doc.content.size, [
        {
          type: "aiBlock",
          attrs: {
            data: { content: null, selectedAction: void 0 },
            config: o,
            isCollapsed: !1
          }
        },
        { type: "paragraph" }
      ]).run();
    },
    insertTranscript: (L, V, se) => {
      T && T.chain().focus().insertContentAt(T.state.doc.content.size, [
        {
          type: "transcript",
          attrs: {
            data: { title: L, users: V, messages: se },
            isOpen: !1
          }
        },
        { type: "paragraph" }
      ]).run();
    },
    pushContent: (L) => {
      T && T.chain().focus().insertContentAt(T.state.doc.content.size, L).run();
    },
    insertImage: (L) => {
      !T || !s || Hu(T, L, {
        ...s,
        onError: (V) => {
          N(V);
        }
      });
    }
  }));
  const _ = Ps(
    () => ({
      offset: [0, 5]
    }),
    []
  ), D = Ye(
    ({ node: L, pos: V }) => {
      w.current = L ? { pos: V, nodeSize: L.nodeSize } : null;
    },
    []
  ), $ = Ye(() => {
    const L = w.current;
    if (!L || !T) return;
    const { pos: V, nodeSize: se } = L, He = T.state.doc.nodeAt(V);
    if (He && He.content.size === 0)
      T.chain().focus().setTextSelection(V + 1).insertContent("/").run();
    else {
      const We = V + se;
      T.chain().focus().insertContentAt(We, { type: "paragraph" }).setTextSelection(We + 1).insertContent("/").run();
    }
  }, [T]), z = c || l && l.length > 0 || d && d.length > 0 || u && u.length > 0 || f, B = a || O;
  return T ? /* @__PURE__ */ g(Pc, { dataTestId: m, children: /* @__PURE__ */ A(
    "div",
    {
      className: "relative flex h-full w-full flex-col",
      ref: v,
      id: S,
      children: [
        z && /* @__PURE__ */ g(
          R1,
          {
            primaryAction: c,
            secondaryActions: l,
            metadata: d,
            otherActions: u,
            banner: f
          }
        ),
        E && /* @__PURE__ */ g("div", { className: "mx-auto flex w-full max-w-[824px] px-14 py-2", children: /* @__PURE__ */ A("div", { className: "flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm", children: [
          /* @__PURE__ */ A("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ g("div", { className: "flex-shrink-0", children: /* @__PURE__ */ g(Yc, { size: "sm", type: "critical" }) }),
            /* @__PURE__ */ g(
              "p",
              {
                className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
                title: I(E),
                children: I(E)
              }
            )
          ] }),
          /* @__PURE__ */ g("div", { className: "flex-shrink-0", children: /* @__PURE__ */ g(
            ce,
            {
              variant: "outline",
              onClick: () => N(null),
              label: b.imageUpload.errors.dismiss,
              size: "sm"
            }
          ) })
        ] }) }),
        !i && !h && /* @__PURE__ */ g("div", { className: "absolute bottom-8 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md", children: /* @__PURE__ */ g(
          Vh,
          {
            editor: T,
            disableButtons: !1,
            showEmojiPicker: !1,
            plainHtmlMode: !1
          }
        ) }),
        /* @__PURE__ */ A(Gc, { className: "h-full gap-6", children: [
          B && /* @__PURE__ */ g(
            $1,
            {
              value: O,
              onChange: a ? x : void 0,
              placeholder: p,
              disabled: !a || i
            }
          ),
          /* @__PURE__ */ A(
            "div",
            {
              className: "notes-text-editor h-full",
              onClick: () => T.commands.focus(),
              children: [
                !i && /* @__PURE__ */ g(
                  k1,
                  {
                    editor: T,
                    tippyOptions: _,
                    onNodeChange: D,
                    children: /* @__PURE__ */ A("div", { className: "flex flex-row", children: [
                      /* @__PURE__ */ g(
                        Tn,
                        {
                          compact: !0,
                          variant: "ghost",
                          size: "sm",
                          className: "text-f1-foreground-tertiary",
                          onClick: $,
                          label: "Add paragraph",
                          hideLabel: !0,
                          icon: Hh
                        }
                      ),
                      /* @__PURE__ */ g(
                        "div",
                        {
                          className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
                          draggable: !0,
                          "data-drag-handle": !0,
                          children: /* @__PURE__ */ g(on, { icon: Wh, size: "xs" })
                        }
                      )
                    ] })
                  }
                ),
                /* @__PURE__ */ g(
                  Uh,
                  {
                    editor: T,
                    className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
                  }
                )
              ]
            }
          )
        ] }),
        !i && /* @__PURE__ */ g(
          Kh,
          {
            editorId: S,
            editor: T,
            disableButtons: !1,
            isToolbarOpen: !h,
            isFullscreen: !1,
            plainHtmlMode: !1
          }
        )
      ]
    }
  ) }) : null;
}), uS = ({
  withHeader: t = !1,
  withTitle: e = !0,
  withToolbar: n = !0
}) => /* @__PURE__ */ A(
  "div",
  {
    className: "relative flex h-full w-full flex-col",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      t && /* @__PURE__ */ A("div", { className: "flex items-center justify-between border-b border-f1-border px-6 py-3", children: [
        /* @__PURE__ */ A("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ g(j, { className: "h-6 w-20 rounded-md" }),
          /* @__PURE__ */ g(j, { className: "h-6 w-24 rounded-md" })
        ] }),
        /* @__PURE__ */ A("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ g(j, { className: "h-8 w-16 rounded-md" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-12 rounded-md" })
        ] })
      ] }),
      n && /* @__PURE__ */ A("div", { className: "absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md", children: [
        /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
        /* @__PURE__ */ A("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" })
        ] }),
        /* @__PURE__ */ A("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" })
        ] }),
        /* @__PURE__ */ A("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded" })
        ] })
      ] }),
      /* @__PURE__ */ A(Gc, { className: "h-full gap-6", children: [
        e && /* @__PURE__ */ g("div", { className: "mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5", children: /* @__PURE__ */ g(j, { className: "h-8 w-80 rounded-md" }) }),
        /* @__PURE__ */ g("div", { className: "h-full", children: /* @__PURE__ */ g("div", { className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14", children: /* @__PURE__ */ A("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ g(j, { className: "h-5 w-full rounded-md" }),
          /* @__PURE__ */ g(j, { className: "h-5 w-4/5 rounded-md" }),
          /* @__PURE__ */ g(j, { className: "h-5 w-3/5 rounded-md" }),
          /* @__PURE__ */ g(j, { className: "h-5 w-full rounded-md" }),
          /* @__PURE__ */ g(j, { className: "h-5 w-1/2 rounded-md" })
        ] }) }) })
      ] })
    ]
  }
), dS = j1, Xd = Pt(
  ({ header: t, actions: e, open: n, onClose: r }, i) => {
    const [o, s] = ue(!1), a = Ye(() => {
      s(!0);
      const c = setTimeout(() => {
        r?.(), s(!1);
      }, 200);
      return () => clearTimeout(c);
    }, [r]);
    return /* @__PURE__ */ g(
      Gh,
      {
        open: n && !o,
        onOpenChange: (c) => !c && a?.(),
        children: /* @__PURE__ */ A(Yh, { ref: i, className: "bottom-3 top-auto max-w-[400px]", children: [
          /* @__PURE__ */ A(qh, { className: "flex flex-col gap-4 px-4 py-5", children: [
            /* @__PURE__ */ g(Yc, { type: t.type, size: "lg" }),
            /* @__PURE__ */ A("div", { className: "flex flex-col gap-0.5", children: [
              /* @__PURE__ */ g(Xh, { className: "text-xl sm:text-lg", children: t.title }),
              /* @__PURE__ */ g(Jh, { className: "text-lg sm:text-base", children: t.description })
            ] })
          ] }),
          e && /* @__PURE__ */ A(Zh, { className: "px-4 pb-4 pt-2", children: [
            /* @__PURE__ */ A("div", { className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full", children: [
              /* @__PURE__ */ g(ce, { variant: "outline", ...e.secondary }),
              /* @__PURE__ */ g(
                ce,
                {
                  ...e.primary,
                  variant: e.primary.variant || "default"
                }
              )
            ] }),
            /* @__PURE__ */ A("div", { className: "flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full", children: [
              /* @__PURE__ */ g(ce, { variant: "outline", ...e.secondary, size: "lg" }),
              /* @__PURE__ */ g(
                ce,
                {
                  ...e.primary,
                  variant: e.primary.variant || "default",
                  size: "lg"
                }
              )
            ] })
          ] })
        ] })
      }
    );
  }
);
Xd.displayName = "Dialog";
const fS = Ne(
  mt(
    { name: "Dialog", type: "info" },
    bc("Dialog", Xd)
  )
), F1 = Pt(
  function({
    title: e,
    subtitle: n,
    mediaUrl: r,
    primaryAction: i,
    secondaryAction: o,
    onClose: s,
    isLoading: a = !1,
    children: c,
    variant: l = "default"
  }, u) {
    const d = r?.includes(".mp4"), [f, h] = ue(!1), p = () => {
      s && s(), h(!0);
    };
    return a ? /* @__PURE__ */ g(Jd, { ref: u }) : f ? null : /* @__PURE__ */ A(
      "div",
      {
        ref: u,
        className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
        children: [
          /* @__PURE__ */ g("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: d ? /* @__PURE__ */ g(
            "video",
            {
              src: r,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              className: "h-full w-full rounded-lg object-cover"
            }
          ) : /* @__PURE__ */ g(
            "img",
            {
              src: r,
              alt: "",
              className: "h-full w-full rounded-lg object-cover"
            }
          ) }),
          /* @__PURE__ */ A("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
            /* @__PURE__ */ A(
              "div",
              {
                className: G(
                  "flex w-full flex-col gap-1",
                  l === "default" ? "sm:max-w-lg" : void 0
                ),
                children: [
                  /* @__PURE__ */ g("h3", { className: "font-bold text-xl text-f1-foreground", children: e }),
                  n && /* @__PURE__ */ g("p", { className: "text-base text-f1-foreground-secondary", children: n })
                ]
              }
            ),
            /* @__PURE__ */ A("div", { className: "flex gap-3", children: [
              i && /* @__PURE__ */ g(
                ce,
                {
                  onClick: i.onClick,
                  label: i.label,
                  variant: i.variant || "default",
                  size: "md",
                  icon: i.icon
                }
              ),
              o && /* @__PURE__ */ g(
                ce,
                {
                  onClick: o.onClick,
                  label: o.label,
                  variant: o.variant || "outline",
                  size: "md",
                  icon: o.icon
                }
              ),
              c
            ] })
          ] }),
          s && /* @__PURE__ */ g("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ g(
            ce,
            {
              variant: "ghost",
              icon: zs,
              size: "sm",
              hideLabel: !0,
              onClick: p,
              label: "Close"
            }
          ) })
        ]
      }
    );
  }
), Jd = Pt(
  function(e, n) {
    return /* @__PURE__ */ A(
      "div",
      {
        ref: n,
        className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
        role: "status",
        "aria-busy": "true",
        "aria-live": "polite",
        ...e,
        children: [
          /* @__PURE__ */ g("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: /* @__PURE__ */ g(j, { className: "h-full w-full rounded-lg" }) }),
          /* @__PURE__ */ A("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
            /* @__PURE__ */ A("div", { className: "flex w-full flex-col gap-1 sm:max-w-lg", children: [
              /* @__PURE__ */ g(j, { className: "h-7 w-3/4" }),
              /* @__PURE__ */ g(j, { className: "h-4 w-full" }),
              /* @__PURE__ */ g(j, { className: "h-4 w-2/3" })
            ] }),
            /* @__PURE__ */ A("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ g(j, { className: "h-9 w-32" }),
              /* @__PURE__ */ g(j, { className: "h-9 w-24" })
            ] })
          ] }),
          /* @__PURE__ */ g("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ g(j, { className: "h-8 w-8 rounded-md" }) })
        ]
      }
    );
  }
), z1 = Ne(
  Rc(F1, Jd)
);
z1.displayName = "BaseBanner";
export {
  Ey as A,
  _y as B,
  W1 as C,
  fS as D,
  q1 as F,
  Ly as L,
  uS as N,
  oS as P,
  iS as R,
  Ky as V,
  Fv as a,
  $y as b,
  Y1 as c,
  Ny as d,
  K1 as e,
  U1 as f,
  G1 as g,
  yy as h,
  Dt as i,
  z1 as j,
  Fu as k,
  X1 as l,
  J1 as m,
  Z1 as n,
  Q1 as o,
  eS as p,
  tS as q,
  nS as r,
  rS as s,
  sS as t,
  aS as u,
  dS as v,
  _1 as w,
  T1 as x,
  Ko as y
};
