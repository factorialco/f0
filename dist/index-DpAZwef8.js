import { jsxs as x, jsx as m, Fragment as Bt } from "react/jsx-runtime";
import * as K from "react";
import C, { useRef as ot, useState as ae, useCallback as Ye, useEffect as Ze, useLayoutEffect as Ac, PureComponent as Kn, useMemo as $s, forwardRef as Pt, useId as Cc, useImperativeHandle as Ec, memo as Sf, Fragment as Ra } from "react";
import { M as Pn, aG as kf, O as z, ax as Af, d3 as Cf, d4 as Ef, P as js, a6 as Re, aO as Gi, d5 as An, d6 as Of, d7 as _f, d8 as Nf, d9 as $a, da as ja, db as Fa, dc as za, dd as Ba, de as Oc, df as ui, dg as Tf, dh as Pf, di as Df, aW as Dn, dj as _e, dk as U, dl as Me, dm as _c, dn as Mf, dp as Nc, dq as Fs, dr as Lf, ds as ye, dt as Yi, du as oe, dv as Tc, dw as qi, dx as zs, dy as Bs, dz as Vs, dA as pe, dB as Pe, dC as Go, dD as Xi, dE as If, dF as Oe, dG as Ji, dH as Te, dI as pn, dJ as Hs, dK as Zi, dL as di, dM as Qi, c9 as Ws, dN as Rf, dO as Qr, dP as ki, dQ as $f, dR as jf, dS as Ff, dT as zf, dU as Bf, dV as Vf, dW as Pc, dX as Dc, dY as Mc, dZ as Lc, d_ as Ic, d$ as Hf, e0 as Ai, e1 as Wf, e2 as Uf, e3 as $r, e4 as Kt, a3 as Ot, e5 as Us, e6 as jr, e7 as Rc, a4 as $c, e8 as Kf, e9 as Gf, a1 as Yf, ea as qf, bV as Xf, a2 as Jf, eb as fe, ec as we, aj as Zf, ak as Qf, al as eh, ao as th, ed as jc, ee as nh, ef as Fc, bU as Dt, ar as _t, bp as rh, Q, aE as Ks, eg as ih, cI as Ce, eh as et, ei as gt, ej as $e, ek as oh, el as fi, em as rt, en as zc, eo as qe, ep as Gs, eq as Qe, er as Va, es as sh, et as Bc, eu as be, ev as Ve, ew as vr, ex as Ci, ey as Vc, ez as ah, eA as mn, eB as lh, eC as ch, eD as uh, a8 as j, aS as Hc, bu as dh, a7 as Wc, eE as Fr, eF as zr, eG as Ys, eH as fh, eI as Uc, eJ as Kc, eK as Gc, eL as hh, eM as Yc, eN as qc, eO as Xc, eP as Jc, eQ as Zc, eR as Qc, eS as ph, eT as mh, u as gn, aN as gh, bM as eo, U as eu, W as tn, bo as yh, b7 as bh, br as vh, eU as wh, eV as xh, eW as Sh, eX as kh, eY as Ah, eZ as Ch, aJ as tu, aK as qs, aL as to, e_ as Ha, e$ as Eh, f0 as Oh, f1 as _h, f2 as Nh, f3 as Th, f4 as Ph, f5 as Dh, f6 as Mh, f7 as Lh, f8 as Ih, f9 as Rh, fa as $h, fb as jh, fc as Fh, fd as zh, fe as Bh, ff as Vh, X as Hh, aC as Wh, aQ as Uh, bB as Kh, bv as Wa, Y as Gh, aI as Yh, bN as nu, aH as Ua, b$ as qh, cA as ru, fg as Xh, fh as Jh, fi as Zh, fj as Qh, fk as ep, fl as tp, fm as np, b3 as Yo, aX as iu, fn as rp, c7 as ou, fo as ip, b2 as op, fp as sp, fq as ap, fr as lp, fs as cp, ft as up, fu as dp, fv as fp, fw as hp, fx as pp, c6 as Ka } from "./F0AiChat-BYg1bnuD.js";
import './index.css';const mp = {
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
function gp(t, e) {
  const n = t.scrollSnapList();
  return typeof e == "number" ? n.map(() => e) : e(n, t);
}
function yp(t, e) {
  const n = t.rootNode();
  return e && e(n) || n;
}
function Xs(t = {}) {
  let e, n, r, i, o = null, s = 0, a = !1, c = !1, l = !1, u = !1;
  function d(_, D) {
    n = _;
    const {
      mergeOptions: $,
      optionsAtMedia: B
    } = D, V = $(mp, Xs.globalOptions), I = $(V, t);
    if (e = B(I), n.scrollSnapList().length <= 1) return;
    u = e.jump, r = !1, i = gp(n, e.delay);
    const {
      eventStore: H,
      ownerDocument: le
    } = n.internalEngine(), He = !!n.internalEngine().options.watchDrag, We = yp(n, e.rootNode);
    H.add(le, "visibilitychange", y), He && n.on("pointerDown", w), He && !e.stopOnInteraction && n.on("pointerUp", k), e.stopOnMouseEnter && H.add(We, "mouseenter", A), e.stopOnMouseEnter && !e.stopOnInteraction && H.add(We, "mouseleave", O), e.stopOnFocusIn && n.on("slideFocusStart", b), e.stopOnFocusIn && !e.stopOnInteraction && H.add(n.containerNode(), "focusout", g), e.playOnInit && g();
  }
  function f() {
    n.off("pointerDown", w).off("pointerUp", k).off("slideFocusStart", b), b(), r = !0, a = !1;
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
  function g() {
    if (!r) {
      if (v()) {
        l = !0;
        return;
      }
      a || n.emit("autoplay:play"), h(), a = !0;
    }
  }
  function b() {
    r || (a && n.emit("autoplay:stop"), p(), a = !1);
  }
  function y() {
    if (v())
      return l = a, b();
    l && g();
  }
  function v() {
    const {
      ownerDocument: _
    } = n.internalEngine();
    return _.visibilityState === "hidden";
  }
  function w() {
    c || b();
  }
  function k() {
    c || g();
  }
  function A() {
    c = !0, b();
  }
  function O() {
    c = !1, g();
  }
  function S(_) {
    typeof _ < "u" && (u = _), g();
  }
  function E() {
    a && b();
  }
  function T() {
    a && g();
  }
  function L() {
    return a;
  }
  function M() {
    const {
      index: _
    } = n.internalEngine(), D = _.clone().add(1).get(), $ = n.scrollSnapList().length - 1, B = e.stopOnLastSnap && D === $;
    if (n.canScrollNext() ? n.scrollNext(u) : n.scrollTo(0, u), n.emit("autoplay:select"), B) return b();
    g();
  }
  function N() {
    if (!o) return null;
    const _ = i[n.selectedScrollSnap()], D = (/* @__PURE__ */ new Date()).getTime() - o;
    return _ - D;
  }
  return {
    name: "autoplay",
    options: t,
    init: d,
    destroy: f,
    play: S,
    stop: E,
    reset: T,
    isPlaying: L,
    timeUntilNext: N
  };
}
Xs.globalOptions = void 0;
function on() {
  return on = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, on.apply(this, arguments);
}
var bp = 0.996, vp = function(e, n) {
  return n === void 0 && (n = bp), e * n / (1 - n);
};
function wp(t) {
  return t[t.length - 1];
}
function xp(t) {
  return t.reduce(function(e, n) {
    return e + n;
  }) / t.length;
}
var Sp = function(e, n, r) {
  return Math.min(Math.max(n, e), r);
};
function Co(t, e) {
  if (t.length !== e.length)
    throw new Error("vectors must be same length");
  return t.map(function(n, r) {
    return n + e[r];
  });
}
function Ga(t) {
  return Math.max.apply(Math, t.map(Math.abs));
}
function Mn(t) {
  return Object.freeze(t), Object.values(t).forEach(function(e) {
    e !== null && typeof e == "object" && !Object.isFrozen(e) && Mn(e);
  }), t;
}
function kp() {
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
  return Mn({
    on: e,
    off: n,
    dispatch: r
  });
}
function Ap(t) {
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
  return Mn({
    observe: n,
    unobserve: r,
    disconnect: i
  });
}
var Cp = 16 * 1.125, Ep = typeof window < "u" && window.innerHeight || 800, Eo = [1, Cp, Ep];
function Op(t) {
  var e = t.deltaX * Eo[t.deltaMode], n = t.deltaY * Eo[t.deltaMode], r = (t.deltaZ || 0) * Eo[t.deltaMode];
  return {
    timeStamp: t.timeStamp,
    axisDelta: [e, n, r]
  };
}
var _p = [-1, -1, -1];
function Np(t, e) {
  if (!e)
    return t;
  var n = e === !0 ? _p : e.map(function(r) {
    return r ? -1 : 1;
  });
  return on({}, t, {
    axisDelta: t.axisDelta.map(function(r, i) {
      return r * n[i];
    })
  });
}
var Ya = 700, Tp = function(e) {
  return on({}, e, {
    axisDelta: e.axisDelta.map(function(n) {
      return Sp(n, -Ya, Ya);
    })
  });
}, Oo = process.env.NODE_ENV !== "production", Pp = 0.6, Dp = 0.96, Mp = 2, qa = 5, Xa = /* @__PURE__ */ Mn({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), Lp = 400;
function Ja() {
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
    willEndTimeout: Lp
  };
}
function Ip(t) {
  t === void 0 && (t = {});
  var e = kp(), n = e.on, r = e.off, i = e.dispatch, o = Xa, s = Ja(), a, c = !1, l, u = function(_) {
    Array.isArray(_) ? _.forEach(function(D) {
      return p(D);
    }) : p(_);
  }, d = function(_) {
    return _ === void 0 && (_ = {}), Object.values(_).some(function(D) {
      return D == null;
    }) ? (Oo && console.error("updateOptions ignored! undefined & null options not allowed"), o) : o = Mn(on({}, Xa, o, _));
  }, f = function(_) {
    var D = on({
      event: a,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: s.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: s.axisVelocity,
      axisMovement: s.axisMovement,
      get axisMovementProjection() {
        return Co(D.axisMovement, D.axisVelocity.map(function($) {
          return vp($);
        }));
      }
    }, _);
    i("wheel", on({}, D, {
      previous: l
    })), l = D;
  }, h = function(_, D) {
    var $ = o, B = $.preventWheelAction, V = D[0], I = D[1], H = D[2];
    if (typeof B == "boolean") return B;
    switch (B) {
      case "x":
        return Math.abs(V) >= _;
      case "y":
        return Math.abs(I) >= _;
      case "z":
        return Math.abs(H) >= _;
      default:
        return Oo && console.warn("unsupported preventWheelAction value: " + B, "warn"), !1;
    }
  }, p = function(_) {
    var D = Tp(Np(Op(_), o.reverseSign)), $ = D.axisDelta, B = D.timeStamp, V = Ga($);
    if (_.preventDefault && h(V, $) && _.preventDefault(), s.isStarted ? s.isMomentum && V > Math.max(2, s.lastAbsDelta * 2) && (E(!0), O()) : O(), V === 0 && Object.is && Object.is(_.deltaX, -0)) {
      c = !0;
      return;
    }
    a = _, s.axisMovement = Co(s.axisMovement, $), s.lastAbsDelta = V, s.scrollPointsToMerge.push({
      axisDelta: $,
      timeStamp: B
    }), g(), f({
      axisDelta: $,
      isStart: !s.isStartPublished
    }), s.isStartPublished = !0, S();
  }, g = function() {
    s.scrollPointsToMerge.length === Mp ? (s.scrollPoints.unshift({
      axisDeltaSum: s.scrollPointsToMerge.map(function(_) {
        return _.axisDelta;
      }).reduce(Co),
      timeStamp: xp(s.scrollPointsToMerge.map(function(_) {
        return _.timeStamp;
      }))
    }), y(), s.scrollPointsToMerge.length = 0, s.scrollPoints.length = 1, s.isMomentum || k()) : s.isStartPublished || b();
  }, b = function() {
    s.axisVelocity = wp(s.scrollPointsToMerge).axisDelta.map(function(_) {
      return _ / s.willEndTimeout;
    });
  }, y = function() {
    var _ = s.scrollPoints, D = _[0], $ = _[1];
    if (!(!$ || !D)) {
      var B = D.timeStamp - $.timeStamp;
      if (B <= 0) {
        Oo && console.warn("invalid deltaTime");
        return;
      }
      var V = D.axisDeltaSum.map(function(H) {
        return H / B;
      }), I = V.map(function(H, le) {
        return H / (s.axisVelocity[le] || 1);
      });
      s.axisVelocity = V, s.accelerationFactors.push(I), v(B);
    }
  }, v = function(_) {
    var D = Math.ceil(_ / 10) * 10 * 1.2;
    s.isMomentum || (D = Math.max(100, D * 2)), s.willEndTimeout = Math.min(1e3, Math.round(D));
  }, w = function(_) {
    return _ === 0 ? !0 : _ <= Dp && _ >= Pp;
  }, k = function() {
    if (s.accelerationFactors.length >= qa) {
      if (c && (c = !1, Ga(s.axisVelocity) >= 0.2)) {
        A();
        return;
      }
      var _ = s.accelerationFactors.slice(qa * -1), D = _.every(function($) {
        var B = !!$.reduce(function(I, H) {
          return I && I < 1 && I === H ? 1 : 0;
        }), V = $.filter(w).length === $.length;
        return B || V;
      });
      D && A(), s.accelerationFactors = _;
    }
  }, A = function() {
    s.isMomentum = !0;
  }, O = function() {
    s = Ja(), s.isStarted = !0, s.startTime = Date.now(), l = void 0, c = !1;
  }, S = /* @__PURE__ */ (function() {
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
  }, T = Ap(u), L = T.observe, M = T.unobserve, N = T.disconnect;
  return d(t), Mn({
    on: n,
    off: r,
    observe: L,
    unobserve: M,
    disconnect: N,
    feedWheel: u,
    updateOptions: d
  });
}
var Rp = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
Js.globalOptions = void 0;
var $p = process.env.NODE_ENV !== "production";
function Js(t) {
  t === void 0 && (t = {});
  var e, n = function() {
  };
  function r(o, s) {
    var a, c, l = s.mergeOptions, u = s.optionsAtMedia, d = l(Rp, Js.globalOptions), f = l(d, t);
    e = u(f);
    var h = o.internalEngine(), p = (a = e.target) != null ? a : o.containerNode().parentNode, g = (c = e.forceWheelAxis) != null ? c : h.options.axis, b = Ip({
      preventWheelAction: g,
      reverseSign: [!0, !0, !1]
    }), y = b.observe(p), v = b.on("wheel", N), w = !1, k;
    function A(P) {
      try {
        k = new MouseEvent("mousedown", P.event), M(k);
      } catch {
        return $p && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
      }
      w = !0, S(), e.wheelDraggingClass && p.classList.add(e.wheelDraggingClass);
    }
    function O(P) {
      w = !1, M(L("mouseup", P)), E(), e.wheelDraggingClass && p.classList.remove(e.wheelDraggingClass);
    }
    function S() {
      document.documentElement.addEventListener("mousemove", T, !0), document.documentElement.addEventListener("mouseup", T, !0), document.documentElement.addEventListener("mousedown", T, !0);
    }
    function E() {
      document.documentElement.removeEventListener("mousemove", T, !0), document.documentElement.removeEventListener("mouseup", T, !0), document.documentElement.removeEventListener("mousedown", T, !0);
    }
    function T(P) {
      w && P.isTrusted && P.stopImmediatePropagation();
    }
    function L(P, _) {
      var D, $;
      if (g === h.options.axis) {
        var B = _.axisMovement;
        D = B[0], $ = B[1];
      } else {
        var V = _.axisMovement;
        $ = V[0], D = V[1];
      }
      if (!h.options.skipSnaps && !h.options.dragFree) {
        var I = h.containerRect.width, H = h.containerRect.height;
        D = D < 0 ? Math.max(D, -I) : Math.min(D, I), $ = $ < 0 ? Math.max($, -H) : Math.min($, H);
      }
      return new MouseEvent(P, {
        clientX: k.clientX + D,
        clientY: k.clientY + $,
        screenX: k.screenX + D,
        screenY: k.screenY + $,
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
    function N(P) {
      var _ = P.axisDelta, D = _[0], $ = _[1], B = g === "x" ? D : $, V = g === "x" ? $ : D, I = P.isMomentum && P.previous && !P.previous.isMomentum, H = P.isEnding && !P.isMomentum || I, le = Math.abs(B) > Math.abs(V);
      le && !w && !P.isMomentum && A(P), w && (H ? O(P) : M(L("mousemove", P)));
    }
    n = function() {
      y(), v(), E();
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
function jp(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Za(t) {
  return jp(t) || Array.isArray(t);
}
function Fp() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Zs(t, e) {
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  const i = JSON.stringify(Object.keys(t.breakpoints || {})), o = JSON.stringify(Object.keys(e.breakpoints || {}));
  return i !== o ? !1 : n.every((s) => {
    const a = t[s], c = e[s];
    return typeof a == "function" ? `${a}` == `${c}` : !Za(a) || !Za(c) ? a === c : Zs(a, c);
  });
}
function Qa(t) {
  return t.concat().sort((e, n) => e.name > n.name ? 1 : -1).map((e) => e.options);
}
function zp(t, e) {
  if (t.length !== e.length) return !1;
  const n = Qa(t), r = Qa(e);
  return n.every((i, o) => {
    const s = r[o];
    return Zs(i, s);
  });
}
function Qs(t) {
  return typeof t == "number";
}
function qo(t) {
  return typeof t == "string";
}
function no(t) {
  return typeof t == "boolean";
}
function el(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function te(t) {
  return Math.abs(t);
}
function ea(t) {
  return Math.sign(t);
}
function fr(t, e) {
  return te(t - e);
}
function Bp(t, e) {
  if (t === 0 || e === 0 || te(t) <= te(e)) return 0;
  const n = fr(te(t), te(e));
  return te(n / t);
}
function Vp(t) {
  return Math.round(t * 100) / 100;
}
function wr(t) {
  return xr(t).map(Number);
}
function st(t) {
  return t[Br(t)];
}
function Br(t) {
  return Math.max(0, t.length - 1);
}
function ta(t, e) {
  return e === Br(t);
}
function tl(t, e = 0) {
  return Array.from(Array(t), (n, r) => e + r);
}
function xr(t) {
  return Object.keys(t);
}
function su(t, e) {
  return [t, e].reduce((n, r) => (xr(r).forEach((i) => {
    const o = n[i], s = r[i], a = el(o) && el(s);
    n[i] = a ? su(o, s) : s;
  }), n), {});
}
function Xo(t, e) {
  return typeof e.MouseEvent < "u" && t instanceof e.MouseEvent;
}
function Hp(t, e) {
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
    return qo(t) ? n[t](c) : t(e, c, l);
  }
  return {
    measure: s
  };
}
function Sr() {
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
function Wp(t, e, n, r) {
  const i = Sr(), o = 1e3 / 60;
  let s = null, a = 0, c = 0;
  function l() {
    i.add(t, "visibilitychange", () => {
      t.hidden && p();
    });
  }
  function u() {
    h(), i.clear();
  }
  function d(b) {
    if (!c) return;
    s || (s = b, n(), n());
    const y = b - s;
    for (s = b, a += y; a >= o; )
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
function Up(t, e) {
  const n = e === "rtl", r = t === "y", i = r ? "y" : "x", o = r ? "x" : "y", s = !r && n ? -1 : 1, a = u(), c = d();
  function l(p) {
    const {
      height: g,
      width: b
    } = p;
    return r ? g : b;
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
function an(t = 0, e = 0) {
  const n = te(t - e);
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
function au(t, e, n) {
  const {
    constrain: r
  } = an(0, t), i = t + 1;
  let o = s(e);
  function s(f) {
    return n ? te((i + f) % i) : r(f);
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
    return au(t, a(), n);
  }
  const d = {
    get: a,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function Kp(t, e, n, r, i, o, s, a, c, l, u, d, f, h, p, g, b, y, v) {
  const {
    cross: w,
    direction: k
  } = t, A = ["INPUT", "SELECT", "TEXTAREA"], O = {
    passive: !1
  }, S = Sr(), E = Sr(), T = an(50, 225).constrain(h.measure(20)), L = {
    mouse: 300,
    touch: 400
  }, M = {
    mouse: 500,
    touch: 600
  }, N = p ? 43 : 25;
  let P = !1, _ = 0, D = 0, $ = !1, B = !1, V = !1, I = !1;
  function H(R) {
    if (!v) return;
    function q(Ae) {
      (no(v) || v(R, Ae)) && rr(Ae);
    }
    const ce = e;
    S.add(ce, "dragstart", (Ae) => Ae.preventDefault(), O).add(ce, "touchmove", () => {
    }, O).add(ce, "touchend", () => {
    }).add(ce, "touchstart", q).add(ce, "mousedown", q).add(ce, "touchcancel", ke).add(ce, "contextmenu", ke).add(ce, "click", vt, !0);
  }
  function le() {
    S.clear(), E.clear();
  }
  function He() {
    const R = I ? n : e;
    E.add(R, "touchmove", je, O).add(R, "touchend", ke).add(R, "mousemove", je, O).add(R, "mouseup", ke);
  }
  function We(R) {
    const q = R.nodeName || "";
    return A.includes(q);
  }
  function bt() {
    return (p ? M : L)[I ? "mouse" : "touch"];
  }
  function nr(R, q) {
    const ce = d.add(ea(R) * -1), Ae = u.byDistance(R, !p).distance;
    return p || te(R) < T ? Ae : b && q ? Ae * 0.5 : u.byIndex(ce.get(), 0).distance;
  }
  function rr(R) {
    const q = Xo(R, r);
    I = q, V = p && q && !R.buttons && P, P = fr(i.get(), s.get()) >= 2, !(q && R.button !== 0) && (We(R.target) || ($ = !0, o.pointerDown(R), l.useFriction(0).useDuration(0), i.set(s), He(), _ = o.readPoint(R), D = o.readPoint(R, w), f.emit("pointerDown")));
  }
  function je(R) {
    if (!Xo(R, r) && R.touches.length >= 2) return ke(R);
    const ce = o.readPoint(R), Ae = o.readPoint(R, w), ht = fr(ce, _), wt = fr(Ae, D);
    if (!B && !I && (!R.cancelable || (B = ht > wt, !B)))
      return ke(R);
    const qt = o.pointerMove(R);
    ht > g && (V = !0), l.useFriction(0.3).useDuration(0.75), a.start(), i.add(k(qt)), R.preventDefault();
  }
  function ke(R) {
    const ce = u.byDistance(0, !1).index !== d.get(), Ae = o.pointerUp(R) * bt(), ht = nr(k(Ae), ce), wt = Bp(Ae, ht), qt = N - 10 * wt, $t = y + wt / 50;
    B = !1, $ = !1, E.clear(), l.useDuration(qt).useFriction($t), c.distance(ht, !p), I = !1, f.emit("pointerUp");
  }
  function vt(R) {
    V && (R.stopPropagation(), R.preventDefault(), V = !1);
  }
  function Ue() {
    return $;
  }
  return {
    init: H,
    destroy: le,
    pointerDown: Ue
  };
}
function Gp(t, e) {
  let r, i;
  function o(d) {
    return d.timeStamp;
  }
  function s(d, f) {
    const p = `client${(f || t.scroll) === "x" ? "X" : "Y"}`;
    return (Xo(d, e) ? d : d.touches[0])[p];
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
    const f = s(i) - s(r), h = o(d) - o(r), p = o(d) - o(i) > 170, g = f / h;
    return h && !p && te(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: a,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function Yp() {
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
function qp(t) {
  function e(r) {
    return t * (r / 100);
  }
  return {
    measure: e
  };
}
function Xp(t, e, n, r, i, o, s) {
  const a = [t].concat(r);
  let c, l, u = [], d = !1;
  function f(b) {
    return i.measureSize(s.measure(b));
  }
  function h(b) {
    if (!o) return;
    l = f(t), u = r.map(f);
    function y(v) {
      for (const w of v) {
        if (d) return;
        const k = w.target === t, A = r.indexOf(w.target), O = k ? l : u[A], S = f(k ? t : r[A]);
        if (te(S - O) >= 0.5) {
          b.reInit(), e.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((v) => {
      (no(o) || o(b, v)) && y(v);
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
function Jp(t, e, n, r, i, o) {
  let s = 0, a = 0, c = i, l = o, u = t.get(), d = 0;
  function f() {
    const O = r.get() - t.get(), S = !c;
    let E = 0;
    return S ? (s = 0, n.set(r), t.set(r), E = O) : (n.set(t), s += O / c, s *= l, u += s, t.add(s), E = u - d), a = ea(E), d = u, A;
  }
  function h() {
    const O = r.get() - e.get();
    return te(O) < 1e-3;
  }
  function p() {
    return c;
  }
  function g() {
    return a;
  }
  function b() {
    return s;
  }
  function y() {
    return w(i);
  }
  function v() {
    return k(o);
  }
  function w(O) {
    return c = O, A;
  }
  function k(O) {
    return l = O, A;
  }
  const A = {
    direction: g,
    duration: p,
    velocity: b,
    seek: f,
    settled: h,
    useBaseFriction: v,
    useBaseDuration: y,
    useFriction: k,
    useDuration: w
  };
  return A;
}
function Zp(t, e, n, r, i) {
  const o = i.measure(10), s = i.measure(50), a = an(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !t.reachedAny(n.get()) || !t.reachedAny(e.get()));
  }
  function u(h) {
    if (!l()) return;
    const p = t.reachedMin(e.get()) ? "min" : "max", g = te(t[p] - e.get()), b = n.get() - e.get(), y = a.constrain(g / s);
    n.subtract(b * y), !h && te(b) < o && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction());
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
function Qp(t, e, n, r, i) {
  const o = an(-e + t, 0), s = d(), a = u(), c = f();
  function l(p, g) {
    return fr(p, g) <= 1;
  }
  function u() {
    const p = s[0], g = st(s), b = s.lastIndexOf(p), y = s.indexOf(g) + 1;
    return an(b, y);
  }
  function d() {
    return n.map((p, g) => {
      const {
        min: b,
        max: y
      } = o, v = o.constrain(p), w = !g, k = ta(n, g);
      return w ? y : k || l(b, v) ? b : l(y, v) ? y : v;
    }).map((p) => parseFloat(p.toFixed(3)));
  }
  function f() {
    if (e <= t + i) return [o.max];
    if (r === "keepSnaps") return s;
    const {
      min: p,
      max: g
    } = a;
    return s.slice(p, g);
  }
  return {
    snapsContained: c,
    scrollContainLimit: a
  };
}
function em(t, e, n) {
  const r = e[0], i = n ? r - t : st(e);
  return {
    limit: an(i, r)
  };
}
function tm(t, e, n, r) {
  const o = e.min + 0.1, s = e.max + 0.1, {
    reachedMin: a,
    reachedMax: c
  } = an(o, s);
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
function nm(t) {
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
function rm(t, e, n, r, i) {
  const {
    startEdge: o,
    endEdge: s
  } = t, {
    groupSlides: a
  } = i, c = d().map(e.measure), l = f(), u = h();
  function d() {
    return a(r).map((g) => st(g)[s] - g[0][o]).map(te);
  }
  function f() {
    return r.map((g) => n[o] - g[o]).map((g) => -te(g));
  }
  function h() {
    return a(l).map((g) => g[0]).map((g, b) => g + c[b]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function im(t, e, n, r, i, o) {
  const {
    groupSlides: s
  } = i, {
    min: a,
    max: c
  } = r, l = u();
  function u() {
    const f = s(o), h = !t || e === "keepSnaps";
    return n.length === 1 ? [o] : h ? f : f.slice(a, c).map((p, g, b) => {
      const y = !g, v = ta(b, g);
      if (y) {
        const w = st(b[0]) + 1;
        return tl(w);
      }
      if (v) {
        const w = Br(o) - st(b)[0] + 1;
        return tl(w, st(b)[0]);
      }
      return p;
    });
  }
  return {
    slideRegistry: l
  };
}
function om(t, e, n, r, i) {
  const {
    reachedAny: o,
    removeOffset: s,
    constrain: a
  } = r;
  function c(p) {
    return p.concat().sort((g, b) => te(g) - te(b))[0];
  }
  function l(p) {
    const g = t ? s(p) : a(p), b = e.map((v, w) => ({
      diff: u(v - g, 0),
      index: w
    })).sort((v, w) => te(v.diff) - te(w.diff)), {
      index: y
    } = b[0];
    return {
      index: y,
      distance: g
    };
  }
  function u(p, g) {
    const b = [p, p + n, p - n];
    if (!t) return p;
    if (!g) return c(b);
    const y = b.filter((v) => ea(v) === g);
    return y.length ? c(y) : st(b) - n;
  }
  function d(p, g) {
    const b = e[p] - i.get(), y = u(b, g);
    return {
      index: p,
      distance: y
    };
  }
  function f(p, g) {
    const b = i.get() + p, {
      index: y,
      distance: v
    } = l(b), w = !t && o(b);
    if (!g || w) return {
      index: y,
      distance: p
    };
    const k = e[y] - v, A = p + u(k, 0);
    return {
      index: y,
      distance: A
    };
  }
  return {
    byDistance: f,
    byIndex: d,
    shortcut: u
  };
}
function sm(t, e, n, r, i, o, s) {
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
function am(t, e, n, r, i, o, s, a) {
  const c = {
    passive: !0,
    capture: !0
  };
  let l = 0;
  function u(h) {
    if (!a) return;
    function p(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
      s.emit("slideFocusStart"), t.scrollLeft = 0;
      const v = n.findIndex((w) => w.includes(g));
      Qs(v) && (i.useDuration(0), r.index(v, 0), s.emit("slideFocus"));
    }
    o.add(document, "keydown", d, !1), e.forEach((g, b) => {
      o.add(g, "focus", (y) => {
        (no(a) || a(h, y)) && p(b);
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
function dr(t) {
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
    return Qs(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: i,
    subtract: o
  };
}
function lu(t, e) {
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
    const h = Vp(t.direction(f));
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
function lm(t, e, n, r, i, o, s, a, c) {
  const u = wr(i), d = wr(i).reverse(), f = y().concat(v());
  function h(S, E) {
    return S.reduce((T, L) => T - i[L], E);
  }
  function p(S, E) {
    return S.reduce((T, L) => h(T, E) > 0 ? T.concat([L]) : T, []);
  }
  function g(S) {
    return o.map((E, T) => ({
      start: E - r[T] + 0.5 + S,
      end: E + e - 0.5 + S
    }));
  }
  function b(S, E, T) {
    const L = g(E);
    return S.map((M) => {
      const N = T ? 0 : -n, P = T ? n : 0, _ = T ? "end" : "start", D = L[M][_];
      return {
        index: M,
        loopPoint: D,
        slideLocation: dr(-1),
        translate: lu(t, c[M]),
        target: () => a.get() > D ? N : P
      };
    });
  }
  function y() {
    const S = s[0], E = p(d, S);
    return b(E, n, !1);
  }
  function v() {
    const S = e - s[0] - 1, E = p(u, S);
    return b(E, -n, !0);
  }
  function w() {
    return f.every(({
      index: S
    }) => {
      const E = u.filter((T) => T !== S);
      return h(E, e) <= 0.1;
    });
  }
  function k() {
    f.forEach((S) => {
      const {
        target: E,
        translate: T,
        slideLocation: L
      } = S, M = E();
      M !== L.get() && (T.to(M), L.set(M));
    });
  }
  function A() {
    f.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: w,
    clear: A,
    loop: k,
    loopPoints: f
  };
}
function cm(t, e, n) {
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
      i || (no(n) || n(c, u)) && l(u);
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
function um(t, e, n, r) {
  const i = {};
  let o = null, s = null, a, c = !1;
  function l() {
    a = new IntersectionObserver((p) => {
      c || (p.forEach((g) => {
        const b = e.indexOf(g.target);
        i[b] = g;
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
    return xr(i).reduce((g, b) => {
      const y = parseInt(b), {
        isIntersecting: v
      } = i[y];
      return (p && v || !p && !v) && g.push(y), g;
    }, []);
  }
  function f(p = !0) {
    if (p && o) return o;
    if (!p && s) return s;
    const g = d(p);
    return p && (o = g), p || (s = g), g;
  }
  return {
    init: l,
    destroy: u,
    get: f
  };
}
function dm(t, e, n, r, i, o) {
  const {
    measureSize: s,
    startEdge: a,
    endEdge: c
  } = t, l = n[0] && i, u = p(), d = g(), f = n.map(s), h = b();
  function p() {
    if (!l) return 0;
    const v = n[0];
    return te(e[a] - v[a]);
  }
  function g() {
    if (!l) return 0;
    const v = o.getComputedStyle(st(r));
    return parseFloat(v.getPropertyValue(`margin-${c}`));
  }
  function b() {
    return n.map((v, w, k) => {
      const A = !w, O = ta(k, w);
      return A ? f[w] + u : O ? f[w] + d : k[w + 1][a] - v[a];
    }).map(te);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: h,
    startGap: u,
    endGap: d
  };
}
function fm(t, e, n, r, i, o, s, a, c) {
  const {
    startEdge: l,
    endEdge: u,
    direction: d
  } = t, f = Qs(n);
  function h(y, v) {
    return wr(y).filter((w) => w % v === 0).map((w) => y.slice(w, w + v));
  }
  function p(y) {
    return y.length ? wr(y).reduce((v, w, k) => {
      const A = st(v) || 0, O = A === 0, S = w === Br(y), E = i[l] - o[A][l], T = i[l] - o[w][u], L = !r && O ? d(s) : 0, M = !r && S ? d(a) : 0, N = te(T - M - (E + L));
      return k && N > e + c && v.push(w), S && v.push(y.length), v;
    }, []).map((v, w, k) => {
      const A = Math.max(k[w - 1] || 0);
      return y.slice(A, v);
    }) : [];
  }
  function g(y) {
    return f ? h(y, n) : p(y);
  }
  return {
    groupSlides: g
  };
}
function hm(t, e, n, r, i, o, s) {
  const {
    align: a,
    axis: c,
    direction: l,
    startIndex: u,
    loop: d,
    duration: f,
    dragFree: h,
    dragThreshold: p,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: y,
    containScroll: v,
    watchResize: w,
    watchSlides: k,
    watchDrag: A,
    watchFocus: O
  } = o, S = 2, E = Yp(), T = E.measure(e), L = n.map(E.measure), M = Up(c, l), N = M.measureSize(T), P = qp(N), _ = Hp(a, N), D = !d && !!v, $ = d || !!v, {
    slideSizes: B,
    slideSizesWithGaps: V,
    startGap: I,
    endGap: H
  } = dm(M, T, L, n, $, i), le = fm(M, N, b, d, T, L, I, H, S), {
    snaps: He,
    snapsAligned: We
  } = rm(M, _, T, L, le), bt = -st(He) + st(V), {
    snapsContained: nr,
    scrollContainLimit: rr
  } = Qp(N, bt, We, v, S), je = D ? nr : We, {
    limit: ke
  } = em(bt, je, d), vt = au(Br(je), u, d), Ue = vt.clone(), ee = wr(n), R = ({
    dragHandler: xn,
    scrollBody: ko,
    scrollBounds: Ao,
    options: {
      loop: Zr
    }
  }) => {
    Zr || Ao.constrain(xn.pointerDown()), ko.seek();
  }, q = ({
    scrollBody: xn,
    translate: ko,
    location: Ao,
    offsetLocation: Zr,
    previousLocation: pf,
    scrollLooper: mf,
    slideLooper: gf,
    dragHandler: yf,
    animation: bf,
    eventHandler: Ta,
    scrollBounds: vf,
    options: {
      loop: Pa
    }
  }, Da) => {
    const Ma = xn.settled(), wf = !vf.shouldConstrain(), La = Pa ? Ma : Ma && wf, Ia = La && !yf.pointerDown();
    Ia && bf.stop();
    const xf = Ao.get() * Da + pf.get() * (1 - Da);
    Zr.set(xf), Pa && (mf.loop(xn.direction()), gf.loop()), ko.to(Zr.get()), Ia && Ta.emit("settle"), La || Ta.emit("scroll");
  }, ce = Wp(r, i, () => R(So), (xn) => q(So, xn)), Ae = 0.68, ht = je[vt.get()], wt = dr(ht), qt = dr(ht), $t = dr(ht), Xt = dr(ht), ir = Jp(wt, $t, qt, Xt, f, Ae), wo = om(d, je, bt, ke, Xt), xo = sm(ce, vt, Ue, ir, wo, Xt, s), Oa = nm(ke), _a = Sr(), ff = um(e, n, s, g), {
    slideRegistry: Na
  } = im(D, v, je, rr, le, ee), hf = am(t, n, Na, xo, ir, _a, s, O), So = {
    ownerDocument: r,
    ownerWindow: i,
    eventHandler: s,
    containerRect: T,
    slideRects: L,
    animation: ce,
    axis: M,
    dragHandler: Kp(M, t, r, i, Xt, Gp(M, i), wt, ce, xo, ir, wo, vt, s, P, h, p, y, Ae, A),
    eventStore: _a,
    percentOfView: P,
    index: vt,
    indexPrevious: Ue,
    limit: ke,
    location: wt,
    offsetLocation: $t,
    previousLocation: qt,
    options: o,
    resizeHandler: Xp(e, s, i, n, M, w, E),
    scrollBody: ir,
    scrollBounds: Zp(ke, $t, Xt, ir, P),
    scrollLooper: tm(bt, ke, $t, [wt, $t, qt, Xt]),
    scrollProgress: Oa,
    scrollSnapList: je.map(Oa.get),
    scrollSnaps: je,
    scrollTarget: wo,
    scrollTo: xo,
    slideLooper: lm(M, N, bt, B, V, He, je, $t, n),
    slideFocus: hf,
    slidesHandler: cm(e, s, k),
    slidesInView: ff,
    slideIndexes: ee,
    slideRegistry: Na,
    slidesToScroll: le,
    target: Xt,
    translate: lu(M, e)
  };
  return So;
}
function pm() {
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
const mm = {
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
function gm(t) {
  function e(o, s) {
    return su(o, s || {});
  }
  function n(o) {
    const s = o.breakpoints || {}, a = xr(s).filter((c) => t.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => e(c, l), {});
    return e(o, a);
  }
  function r(o) {
    return o.map((s) => xr(s.breakpoints || {})).reduce((s, a) => s.concat(a), []).map(t.matchMedia);
  }
  return {
    mergeOptions: e,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function ym(t) {
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
function Ei(t, e, n) {
  const r = t.ownerDocument, i = r.defaultView, o = gm(i), s = ym(o), a = Sr(), c = pm(), {
    mergeOptions: l,
    optionsAtMedia: u,
    optionsMediaQueries: d
  } = o, {
    on: f,
    off: h,
    emit: p
  } = c, g = M;
  let b = !1, y, v = l(mm, Ei.globalOptions), w = l(v), k = [], A, O, S;
  function E() {
    const {
      container: ee,
      slides: R
    } = w;
    O = (qo(ee) ? t.querySelector(ee) : ee) || t.children[0];
    const ce = qo(R) ? O.querySelectorAll(R) : R;
    S = [].slice.call(ce || O.children);
  }
  function T(ee) {
    const R = hm(t, O, S, r, i, ee, c);
    if (ee.loop && !R.slideLooper.canLoop()) {
      const q = Object.assign({}, ee, {
        loop: !1
      });
      return T(q);
    }
    return R;
  }
  function L(ee, R) {
    b || (v = l(v, ee), w = u(v), k = R || k, E(), y = T(w), d([v, ...k.map(({
      options: q
    }) => q)]).forEach((q) => a.add(q, "change", M)), w.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(Ue), y.eventHandler.init(Ue), y.resizeHandler.init(Ue), y.slidesHandler.init(Ue), y.options.loop && y.slideLooper.loop(), O.offsetParent && S.length && y.dragHandler.init(Ue), A = s.init(Ue, k)));
  }
  function M(ee, R) {
    const q = le();
    N(), L(l({
      startIndex: q
    }, ee), R), c.emit("reInit");
  }
  function N() {
    y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), s.destroy(), a.clear();
  }
  function P() {
    b || (b = !0, a.clear(), N(), c.emit("destroy"), c.clear());
  }
  function _(ee, R, q) {
    !w.active || b || (y.scrollBody.useBaseFriction().useDuration(R === !0 ? 0 : w.duration), y.scrollTo.index(ee, q || 0));
  }
  function D(ee) {
    const R = y.index.add(1).get();
    _(R, ee, -1);
  }
  function $(ee) {
    const R = y.index.add(-1).get();
    _(R, ee, 1);
  }
  function B() {
    return y.index.add(1).get() !== le();
  }
  function V() {
    return y.index.add(-1).get() !== le();
  }
  function I() {
    return y.scrollSnapList;
  }
  function H() {
    return y.scrollProgress.get(y.offsetLocation.get());
  }
  function le() {
    return y.index.get();
  }
  function He() {
    return y.indexPrevious.get();
  }
  function We() {
    return y.slidesInView.get();
  }
  function bt() {
    return y.slidesInView.get(!1);
  }
  function nr() {
    return A;
  }
  function rr() {
    return y;
  }
  function je() {
    return t;
  }
  function ke() {
    return O;
  }
  function vt() {
    return S;
  }
  const Ue = {
    canScrollNext: B,
    canScrollPrev: V,
    containerNode: ke,
    internalEngine: rr,
    destroy: P,
    off: h,
    on: f,
    emit: p,
    plugins: nr,
    previousScrollSnap: He,
    reInit: g,
    rootNode: je,
    scrollNext: D,
    scrollPrev: $,
    scrollProgress: H,
    scrollSnapList: I,
    scrollTo: _,
    selectedScrollSnap: le,
    slideNodes: vt,
    slidesInView: We,
    slidesNotInView: bt
  };
  return L(e, n), setTimeout(() => c.emit("init"), 0), Ue;
}
Ei.globalOptions = void 0;
function na(t = {}, e = []) {
  const n = ot(t), r = ot(e), [i, o] = ae(), [s, a] = ae(), c = Ye(() => {
    i && i.reInit(n.current, r.current);
  }, [i]);
  return Ze(() => {
    Zs(n.current, t) || (n.current = t, c());
  }, [t, c]), Ze(() => {
    zp(r.current, e) || (r.current = e, c());
  }, [e, c]), Ze(() => {
    if (Fp() && s) {
      Ei.globalOptions = na.globalOptions;
      const l = Ei(s, n.current, r.current);
      return o(l), () => l.destroy();
    } else
      o(void 0);
  }, [s, o]), [a, i];
}
na.globalOptions = void 0;
const ne = 28, nl = 16, bm = ({ children: t }) => {
  const e = ot(null), [n, r] = ae(!0), [i, o] = ae(!1);
  Ac(() => {
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
  return i && n ? l = `linear-gradient(to right, transparent 0px, transparent ${ne}px, black ${2 * ne}px, black calc(100% - ${3 * ne}px), transparent calc(100% - ${2 * ne}px), transparent 100%)` : i && !n ? l = `linear-gradient(to right, transparent 0px, transparent ${ne}px, black ${2 * ne}px, black 100%)` : !i && n ? l = `linear-gradient(to right, black 0px, black calc(100% - ${3 * ne}px), transparent calc(100% - ${2 * ne}px), transparent 100%)` : l = "none", /* @__PURE__ */ x("div", { className: "relative", children: [
    /* @__PURE__ */ m(
      "div",
      {
        ref: e,
        className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
        style: {
          scrollbarWidth: "none",
          // Firefox
          msOverflowStyle: "none",
          // IE & Edge
          margin: `-${ne}px`,
          padding: `${ne}px`,
          height: `calc(100% + ${ne * 2}px)`,
          width: `calc(100% + ${ne * 2}px)`,
          maskImage: l,
          WebkitMaskImage: l,
          scrollSnapType: "x mandatory"
        },
        children: Array.isArray(t) ? t.map((u, d) => /* @__PURE__ */ m(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: ne + nl + "px"
            },
            children: u
          },
          d
        )) : t && /* @__PURE__ */ m(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: ne + nl + "px"
            },
            children: t
          }
        )
      }
    ),
    i && /* @__PURE__ */ m(
      Pn,
      {
        size: "lg",
        compact: !0,
        variant: "outline",
        className: z(
          "absolute opacity-100 transition-all",
          "-left-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: a,
        icon: kf,
        label: "Previous",
        hideLabel: !0
      }
    ),
    n && /* @__PURE__ */ m(
      Pn,
      {
        size: "lg",
        variant: "outline",
        compact: !0,
        className: z(
          "absolute opacity-100 transition-all",
          "-right-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: s,
        icon: Af,
        label: "Next",
        hideLabel: !0
      }
    )
  ] });
}, cu = K.createContext(null);
function Vr() {
  const t = K.useContext(cu);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const uu = K.forwardRef(
  ({
    orientation: t = "horizontal",
    opts: e,
    setApi: n,
    plugins: r,
    className: i,
    children: o,
    ...s
  }, a) => {
    const [c, l] = na(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      r
    ), [u, d] = K.useState(!1), [f, h] = K.useState(!1), p = K.useCallback((v) => {
      v && (d(v.canScrollPrev()), h(v.canScrollNext()));
    }, []), g = K.useCallback(() => {
      l?.scrollPrev();
    }, [l]), b = K.useCallback(() => {
      l?.scrollNext();
    }, [l]), y = K.useCallback(
      (v) => {
        v.key === "ArrowLeft" ? (v.preventDefault(), g()) : v.key === "ArrowRight" && (v.preventDefault(), b());
      },
      [g, b]
    );
    return K.useEffect(() => {
      !l || !n || n(l);
    }, [l, n]), K.useEffect(() => {
      if (l)
        return p(l), l.on("reInit", p), l.on("select", p), () => {
          l?.off("select", p);
        };
    }, [l, p]), /* @__PURE__ */ m(
      cu.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: e,
          orientation: t || (e?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: g,
          scrollNext: b,
          canScrollPrev: u,
          canScrollNext: f
        },
        children: /* @__PURE__ */ m(
          "div",
          {
            ref: a,
            onKeyDownCapture: y,
            className: z("group/carousel relative", i),
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
uu.displayName = "Carousel";
const du = K.forwardRef(({ className: t, ...e }, n) => {
  const r = `linear-gradient(to right, transparent 0px, transparent ${ne / 2}px, black ${ne}px, black calc(100% - ${ne}px), transparent calc(100% - ${ne / 2}px), transparent 100%)`, { carouselRef: i, orientation: o } = Vr();
  return /* @__PURE__ */ m(
    "div",
    {
      ref: i,
      className: "overflow-hidden",
      style: {
        scrollbarWidth: "none",
        // For Firefox
        msOverflowStyle: "none",
        // For IE and Edge
        margin: `-${ne}px`,
        padding: `${ne}px`,
        height: `calc(100% + ${ne * 2}px)`,
        width: `calc(100% + ${ne * 2}px)`,
        maskImage: r,
        WebkitMaskImage: r
      },
      children: /* @__PURE__ */ m(
        "div",
        {
          ref: n,
          className: z(
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
du.displayName = "CarouselContent";
const fu = K.forwardRef(({ className: t, ...e }, n) => {
  const { orientation: r } = Vr();
  return /* @__PURE__ */ m(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: z(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        t
      ),
      ...e
    }
  );
});
fu.displayName = "CarouselItem";
const hu = K.forwardRef(({ className: t, variant: e = "outline", ...n }, r) => {
  const { orientation: i, scrollPrev: o, canScrollPrev: s } = Vr();
  return /* @__PURE__ */ m(
    "div",
    {
      className: z(
        "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
        !s && "opacity-0 group-hover/carousel:opacity-0",
        i === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"
      ),
      children: /* @__PURE__ */ m(
        Pn,
        {
          compact: !0,
          ref: r,
          size: "sm",
          variant: e,
          className: z("absolute opacity-100 transition-all", t),
          disabled: !s,
          onClick: o,
          ...n,
          label: "Previous",
          icon: Cf,
          hideLabel: !0
        }
      )
    }
  );
});
hu.displayName = "CarouselPrevious";
const pu = K.forwardRef(
  ({ className: t, variant: e = "outline", ...n }, r) => {
    const { orientation: i, scrollNext: o, canScrollNext: s } = Vr();
    return /* @__PURE__ */ m(
      "div",
      {
        className: z(
          "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
          !s && "opacity-0 group-hover/carousel:opacity-0",
          i === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"
        ),
        children: /* @__PURE__ */ m(
          Pn,
          {
            ref: r,
            size: "sm",
            variant: e,
            compact: !0,
            className: z("absolute opacity-100 transition-all", t),
            disabled: !s,
            onClick: o,
            ...n,
            label: "Next",
            icon: Ef,
            hideLabel: !0
          }
        )
      }
    );
  }
);
pu.displayName = "CarouselNext";
const mu = K.forwardRef(({ ...t }, e) => {
  const { api: n } = Vr(), [, r] = K.useState(!1), i = K.useRef(null), o = K.useCallback(() => {
    r((f) => !f);
  }, []);
  K.useEffect(() => {
    if (n)
      return n.on("select", o), n.on("reInit", o), () => {
        n.off("select", o), n.off("reInit", o);
      };
  }, [n, o]);
  const s = n?.scrollSnapList().length || 0, a = n?.selectedScrollSnap() || 0;
  if (K.useEffect(() => {
    if (!i.current) return;
    const f = i.current, h = 16, p = a * h - f.clientWidth / 2 + h / 2;
    f.scrollTo({
      left: p,
      behavior: "smooth"
    });
  }, [a]), K.useEffect(() => {
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
  return /* @__PURE__ */ m("div", { ref: e, className: z("flex justify-center", t.className), children: /* @__PURE__ */ m(
    "div",
    {
      className: "relative overflow-hidden",
      style: { width: `${u}px` },
      children: /* @__PURE__ */ m(
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
          children: l.map((f) => /* @__PURE__ */ m(
            "button",
            {
              className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
              "aria-label": `Go to slide ${f + 1}`,
              "aria-current": f === a ? "true" : void 0,
              onClick: () => n?.scrollTo(f),
              tabIndex: -1,
              children: /* @__PURE__ */ m(
                "div",
                {
                  className: z(
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
mu.displayName = "CarouselDots";
const vm = js({
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
function or(t, e, n) {
  if (n) {
    const r = (t || 1) / 2;
    return e ? `peek${r}` : r;
  }
  return e ? `peek${t || 1}` : t || 1;
}
const wm = ({
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
    i ? Xs({ delay: o, stopOnInteraction: !0 }) : void 0
  ), u = () => {
    l.current && l.current.stop();
  }, d = () => {
    l.current && l.current.play();
  };
  return e ? /* @__PURE__ */ m(
    uu,
    {
      className: "flex w-full flex-col gap-3 @container",
      opts: {
        align: s ? "center" : "start",
        slidesToScroll: "auto",
        duration: 20,
        containScroll: !1
      },
      plugins: [l.current, Js()].filter(Boolean),
      onMouseEnter: i ? u : void 0,
      onMouseLeave: i ? d : void 0,
      children: /* @__PURE__ */ x("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ x("div", { className: "relative", children: [
          /* @__PURE__ */ m(du, { children: C.Children.map(c, (f, h) => {
            const p = a?.find(
              (g) => g.index === h
            );
            return /* @__PURE__ */ m(
              fu,
              {
                className: vm({
                  default: or(e.default, s),
                  xs: or(
                    e.xs,
                    s,
                    p?.sizes?.includes("xs")
                  ),
                  sm: or(
                    e.sm,
                    s,
                    p?.sizes?.includes("sm")
                  ),
                  md: or(
                    e.md,
                    s,
                    p?.sizes?.includes("md")
                  ),
                  lg: or(
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
          n && /* @__PURE__ */ x(Bt, { children: [
            /* @__PURE__ */ m(hu, { label: "Previous" }),
            /* @__PURE__ */ m(pu, { label: "Next" })
          ] })
        ] }),
        r && /* @__PURE__ */ m(mu, {})
      ] })
    }
  ) : /* @__PURE__ */ m(bm, { children: t });
}, fS = Re(
  Gi("Carousel", wm)
);
function xm(t, e) {
  const n = An(t), r = An(e), i = n.getTime() - r.getTime();
  return i < 0 ? -1 : i > 0 ? 1 : i;
}
function ra(t) {
  return Of(t, Date.now());
}
function Sm(t) {
  return (e) => {
    const r = (t ? Math[t] : Math.trunc)(e);
    return r === 0 ? 0 : r;
  };
}
function km(t, e, n) {
  const r = _f(), i = n?.locale ?? r.locale ?? Nf, o = xm(t, e);
  if (isNaN(o))
    throw new RangeError("Invalid time value");
  const s = Object.assign({}, n, {
    addSuffix: n?.addSuffix,
    comparison: o
  });
  let a, c;
  o > 0 ? (a = An(e), c = An(t)) : (a = An(t), c = An(e));
  const l = Sm(n?.roundingMethod ?? "round"), u = c.getTime() - a.getTime(), d = u / Ba, f = $a(c) - $a(a), h = (u - f) / Ba, p = n?.unit;
  let g;
  if (p ? g = p : d < 1 ? g = "second" : d < 60 ? g = "minute" : d < ja ? g = "hour" : h < Fa ? g = "day" : h < za ? g = "month" : g = "year", g === "second") {
    const b = l(u / 1e3);
    return i.formatDistance("xSeconds", b, s);
  } else if (g === "minute") {
    const b = l(d);
    return i.formatDistance("xMinutes", b, s);
  } else if (g === "hour") {
    const b = l(d / 60);
    return i.formatDistance("xHours", b, s);
  } else if (g === "day") {
    const b = l(h / ja);
    return i.formatDistance("xDays", b, s);
  } else if (g === "month") {
    const b = l(h / Fa);
    return b === 12 && p !== "month" ? i.formatDistance("xYears", 1, s) : i.formatDistance("xMonths", b, s);
  } else {
    const b = l(h / za);
    return i.formatDistance("xYears", b, s);
  }
}
function Am(t, e) {
  return km(t, ra(t), e);
}
function gu(t) {
  return Oc(t, ra(t));
}
function yu(t) {
  return Oc(t, ui(ra(t), 1));
}
function sr(t, e) {
  return Tf(t, -e);
}
function rl(t, e) {
  return Pf(t, -e);
}
function hS(t) {
  return Dn(t, "p");
}
function pS(t) {
  return Dn(t, "HH:mm");
}
function Cm(t) {
  return Dn(t, "LLL");
}
function Em(t) {
  return t.getDate();
}
function il(t, e = !0) {
  return Am(t, { addSuffix: e });
}
function mS(t, { yesterdayRelative: e = !0 } = {}) {
  return gu(t) ? il(t) : yu(t) ? e ? il(t) : Dn(t, "p") : Dn(t, "PPPp");
}
const gS = (t, e) => {
  const n = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return t.forEach((r) => {
    const i = r[e], o = Math.abs(Df(i, /* @__PURE__ */ new Date()));
    gu(i) ? n.today.push(r) : yu(i) ? n.yesterday.push(r) : o <= 7 ? n.lastWeek.push(r) : o <= 30 ? n.lastMonth.push(r) : n[i.getFullYear()] = [...n[i.getFullYear()] || [], r];
  }), n;
}, Om = ({
  date: t,
  "aria-label": e,
  "aria-labelledby": n
}) => {
  const r = Em(t), i = Cm(t);
  return /* @__PURE__ */ x(
    "div",
    {
      className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary",
      "aria-label": e,
      "aria-labelledby": n,
      children: [
        /* @__PURE__ */ m("div", { className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary", children: i }),
        /* @__PURE__ */ m("div", { className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground", children: r })
      ]
    }
  );
}, yS = Re(Om), _m = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Jo = (t = 21) => {
  let e = "", n = crypto.getRandomValues(new Uint8Array(t |= 0));
  for (; t--; )
    e += _m[n[t] & 63];
  return e;
};
var Nm = ["points", "className", "baseLinePoints", "connectNulls"];
function Cn() {
  return Cn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Cn.apply(this, arguments);
}
function Tm(t, e) {
  if (t == null) return {};
  var n = Pm(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Pm(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function ol(t) {
  return Im(t) || Lm(t) || Mm(t) || Dm();
}
function Dm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mm(t, e) {
  if (t) {
    if (typeof t == "string") return Zo(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zo(t, e);
  }
}
function Lm(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Im(t) {
  if (Array.isArray(t)) return Zo(t);
}
function Zo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var sl = function(e) {
  return e && e.x === +e.x && e.y === +e.y;
}, Rm = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = [[]];
  return e.forEach(function(r) {
    sl(r) ? n[n.length - 1].push(r) : n[n.length - 1].length > 0 && n.push([]);
  }), sl(e[0]) && n[n.length - 1].push(e[0]), n[n.length - 1].length <= 0 && (n = n.slice(0, -1)), n;
}, hr = function(e, n) {
  var r = Rm(e);
  n && (r = [r.reduce(function(o, s) {
    return [].concat(ol(o), ol(s));
  }, [])]);
  var i = r.map(function(o) {
    return o.reduce(function(s, a, c) {
      return "".concat(s).concat(c === 0 ? "M" : "L").concat(a.x, ",").concat(a.y);
    }, "");
  }).join("");
  return r.length === 1 ? "".concat(i, "Z") : i;
}, $m = function(e, n, r) {
  var i = hr(e, r);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(hr(n.reverse(), r).slice(1));
}, bu = function(e) {
  var n = e.points, r = e.className, i = e.baseLinePoints, o = e.connectNulls, s = Tm(e, Nm);
  if (!n || !n.length)
    return null;
  var a = _e("recharts-polygon", r);
  if (i && i.length) {
    var c = s.stroke && s.stroke !== "none", l = $m(n, i, o);
    return /* @__PURE__ */ C.createElement("g", {
      className: a
    }, /* @__PURE__ */ C.createElement("path", Cn({}, U(s, !0), {
      fill: l.slice(-1) === "Z" ? s.fill : "none",
      stroke: "none",
      d: l
    })), c ? /* @__PURE__ */ C.createElement("path", Cn({}, U(s, !0), {
      fill: "none",
      d: hr(n, o)
    })) : null, c ? /* @__PURE__ */ C.createElement("path", Cn({}, U(s, !0), {
      fill: "none",
      d: hr(i, o)
    })) : null);
  }
  var u = hr(n, o);
  return /* @__PURE__ */ C.createElement("path", Cn({}, U(s, !0), {
    fill: u.slice(-1) === "Z" ? s.fill : "none",
    className: a,
    d: u
  }));
}, jm = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function kr(t) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, kr(t);
}
function Fm(t, e) {
  if (t == null) return {};
  var n = zm(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function zm(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Nt.apply(this, arguments);
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
function Ar(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? al(Object(n), !0).forEach(function(r) {
      Bm(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : al(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Bm(t, e, n) {
  return e = Vm(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Vm(t) {
  var e = Hm(t, "string");
  return kr(e) == "symbol" ? e : e + "";
}
function Hm(t, e) {
  if (kr(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (kr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Wm = function(e, n, r, i) {
  var o = "";
  return i.forEach(function(s, a) {
    var c = Me(n, r, e, s);
    a ? o += "L ".concat(c.x, ",").concat(c.y) : o += "M ".concat(c.x, ",").concat(c.y);
  }), o += "Z", o;
}, Um = function(e) {
  var n = e.cx, r = e.cy, i = e.innerRadius, o = e.outerRadius, s = e.polarAngles, a = e.radialLines;
  if (!s || !s.length || !a)
    return null;
  var c = Ar({
    stroke: "#ccc"
  }, U(e, !1));
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, s.map(function(l) {
    var u = Me(n, r, i, l), d = Me(n, r, o, l);
    return /* @__PURE__ */ C.createElement("line", Nt({}, c, {
      key: "line-".concat(l),
      x1: u.x,
      y1: u.y,
      x2: d.x,
      y2: d.y
    }));
  }));
}, Km = function(e) {
  var n = e.cx, r = e.cy, i = e.radius, o = e.index, s = Ar(Ar({
    stroke: "#ccc"
  }, U(e, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ C.createElement("circle", Nt({}, s, {
    className: _e("recharts-polar-grid-concentric-circle", e.className),
    key: "circle-".concat(o),
    cx: n,
    cy: r,
    r: i
  }));
}, Gm = function(e) {
  var n = e.radius, r = e.index, i = Ar(Ar({
    stroke: "#ccc"
  }, U(e, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ C.createElement("path", Nt({}, i, {
    className: _e("recharts-polar-grid-concentric-polygon", e.className),
    key: "path-".concat(r),
    d: Wm(n, e.cx, e.cy, e.polarAngles)
  }));
}, Ym = function(e) {
  var n = e.polarRadius, r = e.gridType;
  return !n || !n.length ? null : /* @__PURE__ */ C.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, n.map(function(i, o) {
    var s = o;
    return r === "circle" ? /* @__PURE__ */ C.createElement(Km, Nt({
      key: s
    }, e, {
      radius: i,
      index: o
    })) : /* @__PURE__ */ C.createElement(Gm, Nt({
      key: s
    }, e, {
      radius: i,
      index: o
    }));
  }));
}, vu = function(e) {
  var n = e.cx, r = n === void 0 ? 0 : n, i = e.cy, o = i === void 0 ? 0 : i, s = e.innerRadius, a = s === void 0 ? 0 : s, c = e.outerRadius, l = c === void 0 ? 0 : c, u = e.gridType, d = u === void 0 ? "polygon" : u, f = e.radialLines, h = f === void 0 ? !0 : f, p = Fm(e, jm);
  return l <= 0 ? null : /* @__PURE__ */ C.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ C.createElement(Um, Nt({
    cx: r,
    cy: o,
    innerRadius: a,
    outerRadius: l,
    gridType: d,
    radialLines: h
  }, p)), /* @__PURE__ */ C.createElement(Ym, Nt({
    cx: r,
    cy: o,
    innerRadius: a,
    outerRadius: l,
    gridType: d,
    radialLines: h
  }, p)));
};
vu.displayName = "PolarGrid";
var _o, ll;
function qm() {
  if (ll) return _o;
  ll = 1;
  var t = _c(), e = Mf(), n = Nc();
  function r(i, o) {
    return i && i.length ? t(i, n(o, 2), e) : void 0;
  }
  return _o = r, _o;
}
var Xm = qm();
const Jm = /* @__PURE__ */ Fs(Xm);
var No, cl;
function Zm() {
  if (cl) return No;
  cl = 1;
  var t = _c(), e = Nc(), n = Lf();
  function r(i, o) {
    return i && i.length ? t(i, e(o, 2), n) : void 0;
  }
  return No = r, No;
}
var Qm = Zm();
const eg = /* @__PURE__ */ Fs(Qm);
var tg = ["cx", "cy", "angle", "ticks", "axisLine"], ng = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Ln(t) {
  "@babel/helpers - typeof";
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ln(t);
}
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
function ul(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Jt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ul(Object(n), !0).forEach(function(r) {
      ro(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ul(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function dl(t, e) {
  if (t == null) return {};
  var n = rg(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function rg(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function ig(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function fl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, xu(r.key), r);
  }
}
function og(t, e, n) {
  return e && fl(t.prototype, e), n && fl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function sg(t, e, n) {
  return e = Oi(e), ag(t, wu() ? Reflect.construct(e, n || [], Oi(t).constructor) : e.apply(t, n));
}
function ag(t, e) {
  if (e && (Ln(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lg(t);
}
function lg(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function wu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wu = function() {
    return !!t;
  })();
}
function Oi(t) {
  return Oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Oi(t);
}
function cg(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Qo(t, e);
}
function Qo(t, e) {
  return Qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Qo(t, e);
}
function ro(t, e, n) {
  return e = xu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function xu(t) {
  var e = ug(t, "string");
  return Ln(e) == "symbol" ? e : e + "";
}
function ug(t, e) {
  if (Ln(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ln(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Gn = /* @__PURE__ */ (function(t) {
  function e() {
    return ig(this, e), sg(this, e, arguments);
  }
  return cg(e, t), og(e, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(r) {
        var i = r.coordinate, o = this.props, s = o.angle, a = o.cx, c = o.cy;
        return Me(a, c, i, s);
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
      var r = this.props, i = r.cx, o = r.cy, s = r.angle, a = r.ticks, c = Jm(a, function(u) {
        return u.coordinate || 0;
      }), l = eg(a, function(u) {
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
      var r = this.props, i = r.cx, o = r.cy, s = r.angle, a = r.ticks, c = r.axisLine, l = dl(r, tg), u = a.reduce(function(p, g) {
        return [Math.min(p[0], g.coordinate), Math.max(p[1], g.coordinate)];
      }, [1 / 0, -1 / 0]), d = Me(i, o, u[0], s), f = Me(i, o, u[1], s), h = Jt(Jt(Jt({}, U(l, !1)), {}, {
        fill: "none"
      }, U(c, !1)), {}, {
        x1: d.x,
        y1: d.y,
        x2: f.x,
        y2: f.y
      });
      return /* @__PURE__ */ C.createElement("line", pr({
        className: "recharts-polar-radius-axis-line"
      }, h));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var r = this, i = this.props, o = i.ticks, s = i.tick, a = i.angle, c = i.tickFormatter, l = i.stroke, u = dl(i, ng), d = this.getTickTextAnchor(), f = U(u, !1), h = U(s, !1), p = o.map(function(g, b) {
        var y = r.getTickValueCoord(g), v = Jt(Jt(Jt(Jt({
          textAnchor: d,
          transform: "rotate(".concat(90 - a, ", ").concat(y.x, ", ").concat(y.y, ")")
        }, f), {}, {
          stroke: "none",
          fill: l
        }, h), {}, {
          index: b
        }, y), {}, {
          payload: g
        });
        return /* @__PURE__ */ C.createElement(oe, pr({
          className: _e("recharts-polar-radius-axis-tick", Tc(s)),
          key: "tick-".concat(g.coordinate)
        }, qi(r.props, g, b)), e.renderTickItem(s, v, c ? c(g.value, b) : g.value));
      });
      return /* @__PURE__ */ C.createElement(oe, {
        className: "recharts-polar-radius-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.ticks, o = r.axisLine, s = r.tick;
      return !i || !i.length ? null : /* @__PURE__ */ C.createElement(oe, {
        className: _e("recharts-polar-radius-axis", this.props.className)
      }, o && this.renderAxisLine(), s && this.renderTicks(), zs.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(r, i, o) {
      var s;
      return /* @__PURE__ */ C.isValidElement(r) ? s = /* @__PURE__ */ C.cloneElement(r, i) : ye(r) ? s = r(i) : s = /* @__PURE__ */ C.createElement(Yi, pr({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), o), s;
    }
  }]);
})(Kn);
ro(Gn, "displayName", "PolarRadiusAxis");
ro(Gn, "axisType", "radiusAxis");
ro(Gn, "defaultProps", {
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
function In(t) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, In(t);
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
function Zt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hl(Object(n), !0).forEach(function(r) {
      io(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function dg(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ku(r.key), r);
  }
}
function fg(t, e, n) {
  return e && pl(t.prototype, e), n && pl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function hg(t, e, n) {
  return e = _i(e), pg(t, Su() ? Reflect.construct(e, n || [], _i(t).constructor) : e.apply(t, n));
}
function pg(t, e) {
  if (e && (In(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mg(t);
}
function mg(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Su() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Su = function() {
    return !!t;
  })();
}
function _i(t) {
  return _i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _i(t);
}
function gg(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && es(t, e);
}
function es(t, e) {
  return es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, es(t, e);
}
function io(t, e, n) {
  return e = ku(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ku(t) {
  var e = yg(t, "string");
  return In(e) == "symbol" ? e : e + "";
}
function yg(t, e) {
  if (In(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (In(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var bg = Math.PI / 180, ml = 1e-5, Yn = /* @__PURE__ */ (function(t) {
  function e() {
    return dg(this, e), hg(this, e, arguments);
  }
  return gg(e, t), fg(e, [{
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
        var i = this.props, o = i.cx, s = i.cy, a = i.radius, c = i.orientation, l = i.tickSize, u = l || 8, d = Me(o, s, a, r.coordinate), f = Me(o, s, a + (c === "inner" ? -1 : 1) * u, r.coordinate);
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
      var i = this.props.orientation, o = Math.cos(-r.coordinate * bg), s;
      return o > ml ? s = i === "outer" ? "start" : "end" : o < -ml ? s = i === "outer" ? "end" : "start" : s = "middle", s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var r = this.props, i = r.cx, o = r.cy, s = r.radius, a = r.axisLine, c = r.axisLineType, l = Zt(Zt({}, U(this.props, !1)), {}, {
        fill: "none"
      }, U(a, !1));
      if (c === "circle")
        return /* @__PURE__ */ C.createElement(Bs, Qt({
          className: "recharts-polar-angle-axis-line"
        }, l, {
          cx: i,
          cy: o,
          r: s
        }));
      var u = this.props.ticks, d = u.map(function(f) {
        return Me(i, o, s, f.coordinate);
      });
      return /* @__PURE__ */ C.createElement(bu, Qt({
        className: "recharts-polar-angle-axis-line"
      }, l, {
        points: d
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var r = this, i = this.props, o = i.ticks, s = i.tick, a = i.tickLine, c = i.tickFormatter, l = i.stroke, u = U(this.props, !1), d = U(s, !1), f = Zt(Zt({}, u), {}, {
        fill: "none"
      }, U(a, !1)), h = o.map(function(p, g) {
        var b = r.getTickLineCoord(p), y = r.getTickTextAnchor(p), v = Zt(Zt(Zt({
          textAnchor: y
        }, u), {}, {
          stroke: "none",
          fill: l
        }, d), {}, {
          index: g,
          payload: p,
          x: b.x2,
          y: b.y2
        });
        return /* @__PURE__ */ C.createElement(oe, Qt({
          className: _e("recharts-polar-angle-axis-tick", Tc(s)),
          key: "tick-".concat(p.coordinate)
        }, qi(r.props, p, g)), a && /* @__PURE__ */ C.createElement("line", Qt({
          className: "recharts-polar-angle-axis-tick-line"
        }, f, b)), s && e.renderTickItem(s, v, c ? c(p.value, g) : p.value));
      });
      return /* @__PURE__ */ C.createElement(oe, {
        className: "recharts-polar-angle-axis-ticks"
      }, h);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.ticks, o = r.radius, s = r.axisLine;
      return o <= 0 || !i || !i.length ? null : /* @__PURE__ */ C.createElement(oe, {
        className: _e("recharts-polar-angle-axis", this.props.className)
      }, s && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(r, i, o) {
      var s;
      return /* @__PURE__ */ C.isValidElement(r) ? s = /* @__PURE__ */ C.cloneElement(r, i) : ye(r) ? s = r(i) : s = /* @__PURE__ */ C.createElement(Yi, Qt({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), o), s;
    }
  }]);
})(Kn);
io(Yn, "displayName", "PolarAngleAxis");
io(Yn, "axisType", "angleAxis");
io(Yn, "defaultProps", {
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
var hi;
function Rn(t) {
  "@babel/helpers - typeof";
  return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Rn(t);
}
function En() {
  return En = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, En.apply(this, arguments);
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
function X(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gl(Object(n), !0).forEach(function(r) {
      Xe(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function vg(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function yl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Cu(r.key), r);
  }
}
function wg(t, e, n) {
  return e && yl(t.prototype, e), n && yl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function xg(t, e, n) {
  return e = Ni(e), Sg(t, Au() ? Reflect.construct(e, n || [], Ni(t).constructor) : e.apply(t, n));
}
function Sg(t, e) {
  if (e && (Rn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kg(t);
}
function kg(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Au() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Au = function() {
    return !!t;
  })();
}
function Ni(t) {
  return Ni = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ni(t);
}
function Ag(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ts(t, e);
}
function ts(t, e) {
  return ts = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ts(t, e);
}
function Xe(t, e, n) {
  return e = Cu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Cu(t) {
  var e = Cg(t, "string");
  return Rn(e) == "symbol" ? e : e + "";
}
function Cg(t, e) {
  if (Rn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Rn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Mt = /* @__PURE__ */ (function(t) {
  function e(n) {
    var r;
    return vg(this, e), r = xg(this, e, [n]), Xe(r, "pieRef", null), Xe(r, "sectorRefs", []), Xe(r, "id", Hs("recharts-pie-")), Xe(r, "handleAnimationEnd", function() {
      var i = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), ye(i) && i();
    }), Xe(r, "handleAnimationStart", function() {
      var i = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), ye(i) && i();
    }), r.state = {
      isAnimationFinished: !n.isAnimationActive,
      prevIsAnimationActive: n.isAnimationActive,
      prevAnimationId: n.animationId,
      sectorToFocus: 0
    }, r;
  }
  return Ag(e, t), wg(e, [{
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
      var o = this.props, s = o.label, a = o.labelLine, c = o.dataKey, l = o.valueKey, u = U(this.props, !1), d = U(s, !1), f = U(a, !1), h = s && s.offsetRadius || 20, p = r.map(function(g, b) {
        var y = (g.startAngle + g.endAngle) / 2, v = Me(g.cx, g.cy, g.outerRadius + h, y), w = X(X(X(X({}, u), g), {}, {
          stroke: "none"
        }, d), {}, {
          index: b,
          textAnchor: e.getTextAnchor(v.x, g.cx)
        }, v), k = X(X(X(X({}, u), g), {}, {
          fill: "none",
          stroke: g.fill
        }, f), {}, {
          index: b,
          points: [Me(g.cx, g.cy, g.outerRadius, y), v]
        }), A = c;
        return pe(c) && pe(l) ? A = "value" : pe(c) && (A = l), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ C.createElement(oe, {
          key: "label-".concat(g.startAngle, "-").concat(g.endAngle, "-").concat(g.midAngle, "-").concat(b)
        }, a && e.renderLabelLineItem(a, k, "line"), e.renderLabelItem(s, w, Pe(g, A)));
      });
      return /* @__PURE__ */ C.createElement(oe, {
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
        return /* @__PURE__ */ C.createElement(oe, En({
          ref: function(b) {
            b && !i.sectorRefs.includes(b) && i.sectorRefs.push(b);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, qi(i.props, l, u), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(l?.startAngle, "-").concat(l?.endAngle, "-").concat(l.midAngle, "-").concat(u)
        }), /* @__PURE__ */ C.createElement(Go, En({
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
      return /* @__PURE__ */ C.createElement(Xi, {
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
        var g = p.t, b = [], y = o && o[0], v = y.startAngle;
        return o.forEach(function(w, k) {
          var A = f && f[k], O = k > 0 ? If(w, "paddingAngle", 0) : 0;
          if (A) {
            var S = Oe(A.endAngle - A.startAngle, w.endAngle - w.startAngle), E = X(X({}, w), {}, {
              startAngle: v + O,
              endAngle: v + S(g) + O
            });
            b.push(E), v = E.endAngle;
          } else {
            var T = w.endAngle, L = w.startAngle, M = Oe(0, T - L), N = M(g), P = X(X({}, w), {}, {
              startAngle: v + O,
              endAngle: v + N + O
            });
            b.push(P), v = P.endAngle;
          }
        }), /* @__PURE__ */ C.createElement(oe, null, r.renderSectorsStatically(b));
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
      return o && i && i.length && (!s || !Ji(s, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
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
      if (o || !s || !s.length || !Te(l) || !Te(u) || !Te(d) || !Te(f))
        return null;
      var g = _e("recharts-pie", a);
      return /* @__PURE__ */ C.createElement(oe, {
        tabIndex: this.props.rootTabIndex,
        className: g,
        ref: function(y) {
          r.pieRef = y;
        }
      }, this.renderSectors(), c && this.renderLabels(s), zs.renderCallByParent(this.props, null, !1), (!h || p) && pn.renderCallByParent(this.props, s, !1));
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
      if (ye(r))
        return r(i);
      var s = _e("recharts-pie-label-line", typeof r != "boolean" ? r.className : "");
      return /* @__PURE__ */ C.createElement(Vs, En({}, i, {
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
      if (ye(r) && (s = r(i), /* @__PURE__ */ C.isValidElement(s)))
        return s;
      var a = _e("recharts-pie-label-text", typeof r != "boolean" && !ye(r) ? r.className : "");
      return /* @__PURE__ */ C.createElement(Yi, En({}, i, {
        alignmentBaseline: "middle",
        className: a
      }), s);
    }
  }]);
})(Kn);
hi = Mt;
Xe(Mt, "displayName", "Pie");
Xe(Mt, "defaultProps", {
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
  isAnimationActive: !Zi.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Xe(Mt, "parseDeltaAngle", function(t, e) {
  var n = di(e - t), r = Math.min(Math.abs(e - t), 360);
  return n * r;
});
Xe(Mt, "getRealPieData", function(t) {
  var e = t.data, n = t.children, r = U(t, !1), i = Qi(n, Ws);
  return e && e.length ? e.map(function(o, s) {
    return X(X(X({
      payload: o
    }, r), o), i && i[s] && i[s].props);
  }) : i && i.length ? i.map(function(o) {
    return X(X({}, r), o.props);
  }) : [];
});
Xe(Mt, "parseCoordinateOfPie", function(t, e) {
  var n = e.top, r = e.left, i = e.width, o = e.height, s = Rf(i, o), a = r + Qr(t.cx, i, i / 2), c = n + Qr(t.cy, o, o / 2), l = Qr(t.innerRadius, s, 0), u = Qr(t.outerRadius, s, s * 0.8), d = t.maxRadius || Math.sqrt(i * i + o * o) / 2;
  return {
    cx: a,
    cy: c,
    innerRadius: l,
    outerRadius: u,
    maxRadius: d
  };
});
Xe(Mt, "getComposedData", function(t) {
  var e = t.item, n = t.offset, r = e.type.defaultProps !== void 0 ? X(X({}, e.type.defaultProps), e.props) : e.props, i = hi.getRealPieData(r);
  if (!i || !i.length)
    return null;
  var o = r.cornerRadius, s = r.startAngle, a = r.endAngle, c = r.paddingAngle, l = r.dataKey, u = r.nameKey, d = r.valueKey, f = r.tooltipType, h = Math.abs(r.minAngle), p = hi.parseCoordinateOfPie(r, n), g = hi.parseDeltaAngle(s, a), b = Math.abs(g), y = l;
  pe(l) && pe(d) ? (ki(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), y = "value") : pe(l) && (ki(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), y = d);
  var v = i.filter(function(E) {
    return Pe(E, y, 0) !== 0;
  }).length, w = (b >= 360 ? v : v - 1) * c, k = b - v * h - w, A = i.reduce(function(E, T) {
    var L = Pe(T, y, 0);
    return E + (Te(L) ? L : 0);
  }, 0), O;
  if (A > 0) {
    var S;
    O = i.map(function(E, T) {
      var L = Pe(E, y, 0), M = Pe(E, u, T), N = (Te(L) ? L : 0) / A, P;
      T ? P = S.endAngle + di(g) * c * (L !== 0 ? 1 : 0) : P = s;
      var _ = P + di(g) * ((L !== 0 ? h : 0) + N * k), D = (P + _) / 2, $ = (p.innerRadius + p.outerRadius) / 2, B = [{
        name: M,
        value: L,
        payload: E,
        dataKey: y,
        type: f
      }], V = Me(p.cx, p.cy, $, D);
      return S = X(X(X({
        percent: N,
        cornerRadius: o,
        name: M,
        tooltipPayload: B,
        midAngle: D,
        middleRadius: $,
        tooltipPosition: V
      }, E), p), {}, {
        value: Pe(E, y),
        startAngle: P,
        endAngle: _,
        payload: E,
        paddingAngle: di(g) * c
      }), S;
    });
  }
  return X(X({}, p), {}, {
    sectors: O,
    data: i
  });
});
var To, bl;
function Eg() {
  if (bl) return To;
  bl = 1;
  function t(e) {
    return e && e.length ? e[0] : void 0;
  }
  return To = t, To;
}
var Po, vl;
function Og() {
  return vl || (vl = 1, Po = Eg()), Po;
}
var _g = Og();
const Ng = /* @__PURE__ */ Fs(_g);
var Tg = ["key"];
function $n(t) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $n(t);
}
function Pg(t, e) {
  if (t == null) return {};
  var n = Dg(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Dg(t, e) {
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
function wl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ee(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wl(Object(n), !0).forEach(function(r) {
      At(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Mg(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Ou(r.key), r);
  }
}
function Lg(t, e, n) {
  return e && xl(t.prototype, e), n && xl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Ig(t, e, n) {
  return e = Pi(e), Rg(t, Eu() ? Reflect.construct(e, n || [], Pi(t).constructor) : e.apply(t, n));
}
function Rg(t, e) {
  if (e && ($n(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $g(t);
}
function $g(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Eu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Eu = function() {
    return !!t;
  })();
}
function Pi(t) {
  return Pi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pi(t);
}
function jg(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ns(t, e);
}
function ns(t, e) {
  return ns = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ns(t, e);
}
function At(t, e, n) {
  return e = Ou(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ou(t) {
  var e = Fg(t, "string");
  return $n(e) == "symbol" ? e : e + "";
}
function Fg(t, e) {
  if ($n(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if ($n(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Hr = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    Mg(this, e);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return n = Ig(this, e, [].concat(i)), At(n, "state", {
      isAnimationFinished: !1
    }), At(n, "handleAnimationEnd", function() {
      var s = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), ye(s) && s();
    }), At(n, "handleAnimationStart", function() {
      var s = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), ye(s) && s();
    }), At(n, "handleMouseEnter", function(s) {
      var a = n.props.onMouseEnter;
      a && a(n.props, s);
    }), At(n, "handleMouseLeave", function(s) {
      var a = n.props.onMouseLeave;
      a && a(n.props, s);
    }), n;
  }
  return jg(e, t), Lg(e, [{
    key: "renderDots",
    value: function(r) {
      var i = this.props, o = i.dot, s = i.dataKey, a = U(this.props, !1), c = U(o, !0), l = r.map(function(u, d) {
        var f = Ee(Ee(Ee({
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
      return /* @__PURE__ */ C.createElement(oe, {
        className: "recharts-radar-dots"
      }, l);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(r) {
      var i = this.props, o = i.shape, s = i.dot, a = i.isRange, c = i.baseLinePoints, l = i.connectNulls, u;
      return /* @__PURE__ */ C.isValidElement(o) ? u = /* @__PURE__ */ C.cloneElement(o, Ee(Ee({}, this.props), {}, {
        points: r
      })) : ye(o) ? u = o(Ee(Ee({}, this.props), {}, {
        points: r
      })) : u = /* @__PURE__ */ C.createElement(bu, Ti({}, U(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: r,
        baseLinePoints: a ? c : null,
        connectNulls: l
      })), /* @__PURE__ */ C.createElement(oe, {
        className: "recharts-radar-polygon"
      }, u, s ? this.renderDots(r) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var r = this, i = this.props, o = i.points, s = i.isAnimationActive, a = i.animationBegin, c = i.animationDuration, l = i.animationEasing, u = i.animationId, d = this.state.prevPoints;
      return /* @__PURE__ */ C.createElement(Xi, {
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
        var h = f.t, p = d && d.length / o.length, g = o.map(function(b, y) {
          var v = d && d[Math.floor(y * p)];
          if (v) {
            var w = Oe(v.x, b.x), k = Oe(v.y, b.y);
            return Ee(Ee({}, b), {}, {
              x: w(h),
              y: k(h)
            });
          }
          var A = Oe(b.cx, b.x), O = Oe(b.cy, b.y);
          return Ee(Ee({}, b), {}, {
            x: A(h),
            y: O(h)
          });
        });
        return r.renderPolygonStatically(g);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var r = this.props, i = r.points, o = r.isAnimationActive, s = r.isRange, a = this.state.prevPoints;
      return o && i && i.length && !s && (!a || !Ji(a, i)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(i);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.hide, o = r.className, s = r.points, a = r.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var c = this.state.isAnimationFinished, l = _e("recharts-radar", o);
      return /* @__PURE__ */ C.createElement(oe, {
        className: l
      }, this.renderPolygon(), (!a || c) && pn.renderCallByParent(this.props, s));
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
      else if (ye(r))
        o = r(i);
      else {
        var s = i.key, a = Pg(i, Tg);
        o = /* @__PURE__ */ C.createElement(Bs, Ti({}, a, {
          key: s,
          className: _e("recharts-radar-dot", typeof r != "boolean" ? r.className : "")
        }));
      }
      return o;
    }
  }]);
})(Kn);
At(Hr, "displayName", "Radar");
At(Hr, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !Zi.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
At(Hr, "getComposedData", function(t) {
  var e = t.radiusAxis, n = t.angleAxis, r = t.displayedData, i = t.dataKey, o = t.bandSize, s = n.cx, a = n.cy, c = !1, l = [], u = n.type !== "number" ? o ?? 0 : 0;
  r.forEach(function(f, h) {
    var p = Pe(f, n.dataKey, h), g = Pe(f, i), b = n.scale(p) + u, y = Array.isArray(g) ? $f(g) : g, v = pe(y) ? void 0 : e.scale(y);
    Array.isArray(g) && g.length >= 2 && (c = !0), l.push(Ee(Ee({}, Me(s, a, v, b)), {}, {
      name: p,
      value: g,
      cx: s,
      cy: a,
      radius: v,
      angle: b,
      payload: f
    }));
  });
  var d = [];
  return c && l.forEach(function(f) {
    if (Array.isArray(f.value)) {
      var h = Ng(f.value), p = pe(h) ? void 0 : e.scale(h);
      d.push(Ee(Ee({}, f), {}, {
        radius: p
      }, Me(s, a, p, f.angle)));
    } else
      d.push(f);
  }), {
    points: l,
    isRange: c,
    baseLinePoints: d
  };
});
var zg = ["x1", "y1", "x2", "y2", "key"], Bg = ["offset"];
function ln(t) {
  "@babel/helpers - typeof";
  return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ln(t);
}
function Sl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ge(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Sl(Object(n), !0).forEach(function(r) {
      Vg(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Sl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Vg(t, e, n) {
  return e = Hg(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Hg(t) {
  var e = Wg(t, "string");
  return ln(e) == "symbol" ? e : e + "";
}
function Wg(t, e) {
  if (ln(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ln(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function nn() {
  return nn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, nn.apply(this, arguments);
}
function kl(t, e) {
  if (t == null) return {};
  var n = Ug(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Ug(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var Kg = function(e) {
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
function _u(t, e) {
  var n;
  if (/* @__PURE__ */ C.isValidElement(t))
    n = /* @__PURE__ */ C.cloneElement(t, e);
  else if (ye(t))
    n = t(e);
  else {
    var r = e.x1, i = e.y1, o = e.x2, s = e.y2, a = e.key, c = kl(e, zg), l = U(c, !1);
    l.offset;
    var u = kl(l, Bg);
    n = /* @__PURE__ */ C.createElement("line", nn({}, u, {
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
function Gg(t) {
  var e = t.x, n = t.width, r = t.horizontal, i = r === void 0 ? !0 : r, o = t.horizontalPoints;
  if (!i || !o || !o.length)
    return null;
  var s = o.map(function(a, c) {
    var l = ge(ge({}, t), {}, {
      x1: e,
      y1: a,
      x2: e + n,
      y2: a,
      key: "line-".concat(c),
      index: c
    });
    return _u(i, l);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, s);
}
function Yg(t) {
  var e = t.y, n = t.height, r = t.vertical, i = r === void 0 ? !0 : r, o = t.verticalPoints;
  if (!i || !o || !o.length)
    return null;
  var s = o.map(function(a, c) {
    var l = ge(ge({}, t), {}, {
      x1: a,
      y1: e,
      x2: a,
      y2: e + n,
      key: "line-".concat(c),
      index: c
    });
    return _u(i, l);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, s);
}
function qg(t) {
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
    var p = !u[h + 1], g = p ? i + s - f : u[h + 1] - f;
    if (g <= 0)
      return null;
    var b = h % e.length;
    return /* @__PURE__ */ C.createElement("rect", {
      key: "react-".concat(h),
      y: f,
      x: r,
      height: g,
      width: o,
      stroke: "none",
      fill: e[b],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, d);
}
function Xg(t) {
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
    var p = !u[h + 1], g = p ? o + a - f : u[h + 1] - f;
    if (g <= 0)
      return null;
    var b = h % r.length;
    return /* @__PURE__ */ C.createElement("rect", {
      key: "react-".concat(h),
      x: f,
      y: s,
      width: g,
      height: c,
      stroke: "none",
      fill: r[b],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, d);
}
var Jg = function(e, n) {
  var r = e.xAxis, i = e.width, o = e.height, s = e.offset;
  return Pc(Dc(ge(ge(ge({}, Lc.defaultProps), r), {}, {
    ticks: Mc(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: o
    }
  })), s.left, s.left + s.width, n);
}, Zg = function(e, n) {
  var r = e.yAxis, i = e.width, o = e.height, s = e.offset;
  return Pc(Dc(ge(ge(ge({}, Lc.defaultProps), r), {}, {
    ticks: Mc(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: o
    }
  })), s.top, s.top + s.height, n);
}, Sn = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function qn(t) {
  var e, n, r, i, o, s, a = jf(), c = Ff(), l = zf(), u = ge(ge({}, t), {}, {
    stroke: (e = t.stroke) !== null && e !== void 0 ? e : Sn.stroke,
    fill: (n = t.fill) !== null && n !== void 0 ? n : Sn.fill,
    horizontal: (r = t.horizontal) !== null && r !== void 0 ? r : Sn.horizontal,
    horizontalFill: (i = t.horizontalFill) !== null && i !== void 0 ? i : Sn.horizontalFill,
    vertical: (o = t.vertical) !== null && o !== void 0 ? o : Sn.vertical,
    verticalFill: (s = t.verticalFill) !== null && s !== void 0 ? s : Sn.verticalFill,
    x: Te(t.x) ? t.x : l.left,
    y: Te(t.y) ? t.y : l.top,
    width: Te(t.width) ? t.width : l.width,
    height: Te(t.height) ? t.height : l.height
  }), d = u.x, f = u.y, h = u.width, p = u.height, g = u.syncWithTicks, b = u.horizontalValues, y = u.verticalValues, v = Bf(), w = Vf();
  if (!Te(h) || h <= 0 || !Te(p) || p <= 0 || !Te(d) || d !== +d || !Te(f) || f !== +f)
    return null;
  var k = u.verticalCoordinatesGenerator || Jg, A = u.horizontalCoordinatesGenerator || Zg, O = u.horizontalPoints, S = u.verticalPoints;
  if ((!O || !O.length) && ye(A)) {
    var E = b && b.length, T = A({
      yAxis: w ? ge(ge({}, w), {}, {
        ticks: E ? b : w.ticks
      }) : void 0,
      width: a,
      height: c,
      offset: l
    }, E ? !0 : g);
    ki(Array.isArray(T), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ln(T), "]")), Array.isArray(T) && (O = T);
  }
  if ((!S || !S.length) && ye(k)) {
    var L = y && y.length, M = k({
      xAxis: v ? ge(ge({}, v), {}, {
        ticks: L ? y : v.ticks
      }) : void 0,
      width: a,
      height: c,
      offset: l
    }, L ? !0 : g);
    ki(Array.isArray(M), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ln(M), "]")), Array.isArray(M) && (S = M);
  }
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ C.createElement(Kg, {
    fill: u.fill,
    fillOpacity: u.fillOpacity,
    x: u.x,
    y: u.y,
    width: u.width,
    height: u.height,
    ry: u.ry
  }), /* @__PURE__ */ C.createElement(Gg, nn({}, u, {
    offset: l,
    horizontalPoints: O,
    xAxis: v,
    yAxis: w
  })), /* @__PURE__ */ C.createElement(Yg, nn({}, u, {
    offset: l,
    verticalPoints: S,
    xAxis: v,
    yAxis: w
  })), /* @__PURE__ */ C.createElement(qg, nn({}, u, {
    horizontalPoints: O
  })), /* @__PURE__ */ C.createElement(Xg, nn({}, u, {
    verticalPoints: S
  })));
}
qn.displayName = "CartesianGrid";
var Qg = ["type", "layout", "connectNulls", "ref"], ey = ["key"];
function jn(t) {
  "@babel/helpers - typeof";
  return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jn(t);
}
function Al(t, e) {
  if (t == null) return {};
  var n = ty(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function ty(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
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
function Cl(t, e) {
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
    e % 2 ? Cl(Object(n), !0).forEach(function(r) {
      tt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Cl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function kn(t) {
  return oy(t) || iy(t) || ry(t) || ny();
}
function ny() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ry(t, e) {
  if (t) {
    if (typeof t == "string") return rs(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rs(t, e);
  }
}
function iy(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function oy(t) {
  if (Array.isArray(t)) return rs(t);
}
function rs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function sy(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function El(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Tu(r.key), r);
  }
}
function ay(t, e, n) {
  return e && El(t.prototype, e), n && El(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function ly(t, e, n) {
  return e = Di(e), cy(t, Nu() ? Reflect.construct(e, n || [], Di(t).constructor) : e.apply(t, n));
}
function cy(t, e) {
  if (e && (jn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return uy(t);
}
function uy(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Nu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Nu = function() {
    return !!t;
  })();
}
function Di(t) {
  return Di = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Di(t);
}
function dy(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && is(t, e);
}
function is(t, e) {
  return is = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, is(t, e);
}
function tt(t, e, n) {
  return e = Tu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Tu(t) {
  var e = fy(t, "string");
  return jn(e) == "symbol" ? e : e + "";
}
function fy(t, e) {
  if (jn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (jn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var yn = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    sy(this, e);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return n = ly(this, e, [].concat(i)), tt(n, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), tt(n, "generateSimpleStrokeDasharray", function(s, a) {
      return "".concat(a, "px ").concat(s - a, "px");
    }), tt(n, "getStrokeDasharray", function(s, a, c) {
      var l = c.reduce(function(y, v) {
        return y + v;
      });
      if (!l)
        return n.generateSimpleStrokeDasharray(a, s);
      for (var u = Math.floor(s / l), d = s % l, f = a - s, h = [], p = 0, g = 0; p < c.length; g += c[p], ++p)
        if (g + c[p] > d) {
          h = [].concat(kn(c.slice(0, p)), [d - g]);
          break;
        }
      var b = h.length % 2 === 0 ? [0, f] : [f];
      return [].concat(kn(e.repeat(c, u)), kn(h), b).map(function(y) {
        return "".concat(y, "px");
      }).join(", ");
    }), tt(n, "id", Hs("recharts-line-")), tt(n, "pathRef", function(s) {
      n.mainCurve = s;
    }), tt(n, "handleAnimationEnd", function() {
      n.setState({
        isAnimationFinished: !0
      }), n.props.onAnimationEnd && n.props.onAnimationEnd();
    }), tt(n, "handleAnimationStart", function() {
      n.setState({
        isAnimationFinished: !1
      }), n.props.onAnimationStart && n.props.onAnimationStart();
    }), n;
  }
  return dy(e, t), ay(e, [{
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
      var o = this.props, s = o.points, a = o.xAxis, c = o.yAxis, l = o.layout, u = o.children, d = Qi(u, Ic);
      if (!d)
        return null;
      var f = function(g, b) {
        return {
          x: g.x,
          y: g.y,
          value: g.value,
          errorVal: Pe(g.payload, b)
        };
      }, h = {
        clipPath: r ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ C.createElement(oe, h, d.map(function(p) {
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
      var a = this.props, c = a.dot, l = a.points, u = a.dataKey, d = U(this.props, !1), f = U(c, !0), h = l.map(function(g, b) {
        var y = Fe(Fe(Fe({
          key: "dot-".concat(b),
          r: 3
        }, d), f), {}, {
          value: g.value,
          dataKey: u,
          cx: g.x,
          cy: g.y,
          index: b,
          payload: g.payload
        });
        return e.renderDotItem(c, y);
      }), p = {
        clipPath: r ? "url(#clipPath-".concat(i ? "" : "dots-").concat(o, ")") : null
      };
      return /* @__PURE__ */ C.createElement(oe, mr({
        className: "recharts-line-dots",
        key: "dots"
      }, p), h);
    }
  }, {
    key: "renderCurveStatically",
    value: function(r, i, o, s) {
      var a = this.props, c = a.type, l = a.layout, u = a.connectNulls;
      a.ref;
      var d = Al(a, Qg), f = Fe(Fe(Fe({}, U(d, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null,
        points: r
      }, s), {}, {
        type: c,
        layout: l,
        connectNulls: u
      });
      return /* @__PURE__ */ C.createElement(Vs, mr({}, f, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(r, i) {
      var o = this, s = this.props, a = s.points, c = s.strokeDasharray, l = s.isAnimationActive, u = s.animationBegin, d = s.animationDuration, f = s.animationEasing, h = s.animationId, p = s.animateNewValues, g = s.width, b = s.height, y = this.state, v = y.prevPoints, w = y.totalLength;
      return /* @__PURE__ */ C.createElement(Xi, {
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
      }, function(k) {
        var A = k.t;
        if (v) {
          var O = v.length / a.length, S = a.map(function(N, P) {
            var _ = Math.floor(P * O);
            if (v[_]) {
              var D = v[_], $ = Oe(D.x, N.x), B = Oe(D.y, N.y);
              return Fe(Fe({}, N), {}, {
                x: $(A),
                y: B(A)
              });
            }
            if (p) {
              var V = Oe(g * 2, N.x), I = Oe(b / 2, N.y);
              return Fe(Fe({}, N), {}, {
                x: V(A),
                y: I(A)
              });
            }
            return Fe(Fe({}, N), {}, {
              x: N.x,
              y: N.y
            });
          });
          return o.renderCurveStatically(S, r, i);
        }
        var E = Oe(0, w), T = E(A), L;
        if (c) {
          var M = "".concat(c).split(/[,\s]+/gim).map(function(N) {
            return parseFloat(N);
          });
          L = o.getStrokeDasharray(T, w, M);
        } else
          L = o.generateSimpleStrokeDasharray(w, T);
        return o.renderCurveStatically(a, r, i, {
          strokeDasharray: L
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(r, i) {
      var o = this.props, s = o.points, a = o.isAnimationActive, c = this.state, l = c.prevPoints, u = c.totalLength;
      return a && s && s.length && (!l && u > 0 || !Ji(l, s)) ? this.renderCurveWithAnimation(r, i) : this.renderCurveStatically(s, r, i);
    }
  }, {
    key: "render",
    value: function() {
      var r, i = this.props, o = i.hide, s = i.dot, a = i.points, c = i.className, l = i.xAxis, u = i.yAxis, d = i.top, f = i.left, h = i.width, p = i.height, g = i.isAnimationActive, b = i.id;
      if (o || !a || !a.length)
        return null;
      var y = this.state.isAnimationFinished, v = a.length === 1, w = _e("recharts-line", c), k = l && l.allowDataOverflow, A = u && u.allowDataOverflow, O = k || A, S = pe(b) ? this.id : b, E = (r = U(s, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, T = E.r, L = T === void 0 ? 3 : T, M = E.strokeWidth, N = M === void 0 ? 2 : M, P = Hf(s) ? s : {}, _ = P.clipDot, D = _ === void 0 ? !0 : _, $ = L * 2 + N;
      return /* @__PURE__ */ C.createElement(oe, {
        className: w
      }, k || A ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: k ? f : f - h / 2,
        y: A ? d : d - p / 2,
        width: k ? h : h * 2,
        height: A ? p : p * 2
      })), !D && /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-dots-".concat(S)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: f - $ / 2,
        y: d - $ / 2,
        width: h + $,
        height: p + $
      }))) : null, !v && this.renderCurve(O, S), this.renderErrorBar(O, S), (v || s) && this.renderDots(O, D, S), (!g || y) && pn.renderCallByParent(this.props, a));
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
      for (var o = r.length % 2 !== 0 ? [].concat(kn(r), [0]) : r, s = [], a = 0; a < i; ++a)
        s = [].concat(kn(s), kn(o));
      return s;
    }
  }, {
    key: "renderDotItem",
    value: function(r, i) {
      var o;
      if (/* @__PURE__ */ C.isValidElement(r))
        o = /* @__PURE__ */ C.cloneElement(r, i);
      else if (ye(r))
        o = r(i);
      else {
        var s = i.key, a = Al(i, ey), c = _e("recharts-line-dot", typeof r != "boolean" ? r.className : "");
        o = /* @__PURE__ */ C.createElement(Bs, mr({
          key: s
        }, a, {
          className: c
        }));
      }
      return o;
    }
  }]);
})(Kn);
tt(yn, "displayName", "Line");
tt(yn, "defaultProps", {
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
  isAnimationActive: !Zi.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
tt(yn, "getComposedData", function(t) {
  var e = t.props, n = t.xAxis, r = t.yAxis, i = t.xAxisTicks, o = t.yAxisTicks, s = t.dataKey, a = t.bandSize, c = t.displayedData, l = t.offset, u = e.layout, d = c.map(function(f, h) {
    var p = Pe(f, s);
    return u === "horizontal" ? {
      x: Ai({
        axis: n,
        ticks: i,
        bandSize: a,
        entry: f,
        index: h
      }),
      y: pe(p) ? null : r.scale(p),
      value: p,
      payload: f
    } : {
      x: pe(p) ? null : n.scale(p),
      y: Ai({
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
function Fn(t) {
  "@babel/helpers - typeof";
  return Fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Fn(t);
}
function hy(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function py(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Mu(r.key), r);
  }
}
function my(t, e, n) {
  return e && py(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function gy(t, e, n) {
  return e = Mi(e), yy(t, Pu() ? Reflect.construct(e, n || [], Mi(t).constructor) : e.apply(t, n));
}
function yy(t, e) {
  if (e && (Fn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return by(t);
}
function by(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Pu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pu = function() {
    return !!t;
  })();
}
function Mi(t) {
  return Mi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mi(t);
}
function vy(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && os(t, e);
}
function os(t, e) {
  return os = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, os(t, e);
}
function Du(t, e, n) {
  return e = Mu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Mu(t) {
  var e = wy(t, "string");
  return Fn(e) == "symbol" ? e : e + "";
}
function wy(t, e) {
  if (Fn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Fn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var oo = /* @__PURE__ */ (function(t) {
  function e() {
    return hy(this, e), gy(this, e, arguments);
  }
  return vy(e, t), my(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(C.Component);
Du(oo, "displayName", "ZAxis");
Du(oo, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var xy = ["option", "isActive"];
function gr() {
  return gr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, gr.apply(this, arguments);
}
function Sy(t, e) {
  if (t == null) return {};
  var n = ky(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function ky(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Ay(t) {
  var e = t.option, n = t.isActive, r = Sy(t, xy);
  return typeof e == "string" ? /* @__PURE__ */ C.createElement(Go, gr({
    option: /* @__PURE__ */ C.createElement(Wf, gr({
      type: e
    }, r)),
    isActive: n,
    shapeType: "symbols"
  }, r)) : /* @__PURE__ */ C.createElement(Go, gr({
    option: e,
    isActive: n,
    shapeType: "symbols"
  }, r));
}
function zn(t) {
  "@babel/helpers - typeof";
  return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, zn(t);
}
function yr() {
  return yr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, yr.apply(this, arguments);
}
function Ol(t, e) {
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
    e % 2 ? Ol(Object(n), !0).forEach(function(r) {
      Ft(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ol(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Cy(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _l(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Iu(r.key), r);
  }
}
function Ey(t, e, n) {
  return e && _l(t.prototype, e), n && _l(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Oy(t, e, n) {
  return e = Li(e), _y(t, Lu() ? Reflect.construct(e, n || [], Li(t).constructor) : e.apply(t, n));
}
function _y(t, e) {
  if (e && (zn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ny(t);
}
function Ny(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Lu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lu = function() {
    return !!t;
  })();
}
function Li(t) {
  return Li = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Li(t);
}
function Ty(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ss(t, e);
}
function ss(t, e) {
  return ss = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ss(t, e);
}
function Ft(t, e, n) {
  return e = Iu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Iu(t) {
  var e = Py(t, "string");
  return zn(e) == "symbol" ? e : e + "";
}
function Py(t, e) {
  if (zn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (zn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Wr = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    Cy(this, e);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return n = Oy(this, e, [].concat(i)), Ft(n, "state", {
      isAnimationFinished: !1
    }), Ft(n, "handleAnimationEnd", function() {
      n.setState({
        isAnimationFinished: !0
      });
    }), Ft(n, "handleAnimationStart", function() {
      n.setState({
        isAnimationFinished: !1
      });
    }), Ft(n, "id", Hs("recharts-scatter-")), n;
  }
  return Ty(e, t), Ey(e, [{
    key: "renderSymbolsStatically",
    value: function(r) {
      var i = this, o = this.props, s = o.shape, a = o.activeShape, c = o.activeIndex, l = U(this.props, !1);
      return r.map(function(u, d) {
        var f = c === d, h = f ? a : s, p = Ge(Ge({}, l), u);
        return /* @__PURE__ */ C.createElement(oe, yr({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(u?.cx, "-").concat(u?.cy, "-").concat(u?.size, "-").concat(d)
        }, qi(i.props, u, d), {
          role: "img"
        }), /* @__PURE__ */ C.createElement(Ay, yr({
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
      return /* @__PURE__ */ C.createElement(Xi, {
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
        var h = f.t, p = o.map(function(g, b) {
          var y = d && d[b];
          if (y) {
            var v = Oe(y.cx, g.cx), w = Oe(y.cy, g.cy), k = Oe(y.size, g.size);
            return Ge(Ge({}, g), {}, {
              cx: v(h),
              cy: w(h),
              size: k(h)
            });
          }
          var A = Oe(0, g.size);
          return Ge(Ge({}, g), {}, {
            size: A(h)
          });
        });
        return /* @__PURE__ */ C.createElement(oe, null, r.renderSymbolsStatically(p));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var r = this.props, i = r.points, o = r.isAnimationActive, s = this.state.prevPoints;
      return o && i && i.length && (!s || !Ji(s, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var r = this.props.isAnimationActive;
      if (r && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.points, s = i.xAxis, a = i.yAxis, c = i.children, l = Qi(c, Ic);
      return l ? l.map(function(u, d) {
        var f = u.props, h = f.direction, p = f.dataKey;
        return /* @__PURE__ */ C.cloneElement(u, {
          key: "".concat(h, "-").concat(p, "-").concat(o[d]),
          data: o,
          xAxis: s,
          yAxis: a,
          layout: h === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(b, y) {
            return {
              x: b.cx,
              y: b.cy,
              value: h === "x" ? +b.node.x : +b.node.y,
              errorVal: Pe(b, y)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var r = this.props, i = r.points, o = r.line, s = r.lineType, a = r.lineJointType, c = U(this.props, !1), l = U(o, !1), u, d;
      if (s === "joint")
        u = i.map(function(w) {
          return {
            x: w.cx,
            y: w.cy
          };
        });
      else if (s === "fitting") {
        var f = Uf(i), h = f.xmin, p = f.xmax, g = f.a, b = f.b, y = function(k) {
          return g * k + b;
        };
        u = [{
          x: h,
          y: y(h)
        }, {
          x: p,
          y: y(p)
        }];
      }
      var v = Ge(Ge(Ge({}, c), {}, {
        fill: "none",
        stroke: c && c.fill
      }, l), {}, {
        points: u
      });
      return /* @__PURE__ */ C.isValidElement(o) ? d = /* @__PURE__ */ C.cloneElement(o, v) : ye(o) ? d = o(v) : d = /* @__PURE__ */ C.createElement(Vs, yr({}, v, {
        type: a
      })), /* @__PURE__ */ C.createElement(oe, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, d);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.hide, o = r.points, s = r.line, a = r.className, c = r.xAxis, l = r.yAxis, u = r.left, d = r.top, f = r.width, h = r.height, p = r.id, g = r.isAnimationActive;
      if (i || !o || !o.length)
        return null;
      var b = this.state.isAnimationFinished, y = _e("recharts-scatter", a), v = c && c.allowDataOverflow, w = l && l.allowDataOverflow, k = v || w, A = pe(p) ? this.id : p;
      return /* @__PURE__ */ C.createElement(oe, {
        className: y,
        clipPath: k ? "url(#clipPath-".concat(A, ")") : null
      }, v || w ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(A)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: v ? u : u - f / 2,
        y: w ? d : d - h / 2,
        width: v ? f : f * 2,
        height: w ? h : h * 2
      }))) : null, s && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ C.createElement(oe, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!g || b) && pn.renderCallByParent(this.props, o));
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
})(Kn);
Ft(Wr, "displayName", "Scatter");
Ft(Wr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Zi.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Ft(Wr, "getComposedData", function(t) {
  var e = t.xAxis, n = t.yAxis, r = t.zAxis, i = t.item, o = t.displayedData, s = t.xAxisTicks, a = t.yAxisTicks, c = t.offset, l = i.props.tooltipType, u = Qi(i.props.children, Ws), d = pe(e.dataKey) ? i.props.dataKey : e.dataKey, f = pe(n.dataKey) ? i.props.dataKey : n.dataKey, h = r && r.dataKey, p = r ? r.range : oo.defaultProps.range, g = p && p[0], b = e.scale.bandwidth ? e.scale.bandwidth() : 0, y = n.scale.bandwidth ? n.scale.bandwidth() : 0, v = o.map(function(w, k) {
    var A = Pe(w, d), O = Pe(w, f), S = !pe(h) && Pe(w, h) || "-", E = [{
      name: pe(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: A,
      payload: w,
      dataKey: d,
      type: l
    }, {
      name: pe(n.dataKey) ? i.props.name : n.name || n.dataKey,
      unit: n.unit || "",
      value: O,
      payload: w,
      dataKey: f,
      type: l
    }];
    S !== "-" && E.push({
      name: r.name || r.dataKey,
      unit: r.unit || "",
      value: S,
      payload: w,
      dataKey: h,
      type: l
    });
    var T = Ai({
      axis: e,
      ticks: s,
      bandSize: b,
      entry: w,
      index: k,
      dataKey: d
    }), L = Ai({
      axis: n,
      ticks: a,
      bandSize: y,
      entry: w,
      index: k,
      dataKey: f
    }), M = S !== "-" ? r.scale(S) : g, N = Math.sqrt(Math.max(M, 0) / Math.PI);
    return Ge(Ge({}, w), {}, {
      cx: T,
      cy: L,
      x: T - N,
      y: L - N,
      xAxis: e,
      yAxis: n,
      zAxis: r,
      width: 2 * N,
      height: 2 * N,
      size: M,
      node: {
        x: A,
        y: O,
        z: S
      },
      tooltipPayload: E,
      tooltipPosition: {
        x: T,
        y: L
      },
      payload: w
    }, u && u[k] && u[k].props);
  });
  return Ge({
    points: v
  }, c);
});
var Dy = $r({
  chartName: "LineChart",
  GraphicalChild: yn,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kt
  }, {
    axisType: "yAxis",
    AxisComp: Ot
  }],
  formatAxisMap: Us
}), Ru = $r({
  chartName: "BarChart",
  GraphicalChild: jr,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kt
  }, {
    axisType: "yAxis",
    AxisComp: Ot
  }],
  formatAxisMap: Us
}), My = $r({
  chartName: "PieChart",
  GraphicalChild: Mt,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Yn
  }, {
    axisType: "radiusAxis",
    AxisComp: Gn
  }],
  formatAxisMap: Rc,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), Ly = $r({
  chartName: "RadarChart",
  GraphicalChild: Hr,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Yn
  }, {
    axisType: "radiusAxis",
    AxisComp: Gn
  }],
  formatAxisMap: Rc,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), Iy = $r({
  chartName: "ComposedChart",
  GraphicalChild: [yn, $c, jr, Wr],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kt
  }, {
    axisType: "yAxis",
    AxisComp: Ot
  }, {
    axisType: "zAxis",
    AxisComp: oo
  }],
  formatAxisMap: Us
});
const Ry = js({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), $y = { light: "", dark: ".dark" }, $u = K.createContext(null);
function ju() {
  const t = K.useContext($u);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
const jy = ({
  id: t,
  className: e,
  children: n,
  aspect: r,
  config: i,
  ...o
}, s) => {
  const a = K.useId(), c = `chart-${t || a.replace(/:/g, "")}`, l = K.useRef(null), [u, d] = ae(), f = $s(() => new ResizeObserver(
    (h) => d(h[0].contentRect.height)
  ), []);
  return Ac(() => {
    const h = s && "current" in s ? s.current : l.current;
    return h && f.observe(h.parentElement), () => {
      f.disconnect();
    };
  }, [f, s, l]), /* @__PURE__ */ m($u.Provider, { value: { config: i }, children: /* @__PURE__ */ x(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": c,
      ref: s || l,
      className: z(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        r ? Ry({ aspect: r }) : "aspect-auto h-full",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ m(Fy, { id: c, config: i }),
        /* @__PURE__ */ m(
          Yf,
          {
            height: u,
            className: "overflow-visible",
            children: n
          }
        )
      ]
    }
  ) });
}, Gt = K.forwardRef(jy);
Gt.displayName = "Chart";
const Fy = ({ id: t, config: e }) => {
  const n = Object.entries(e).filter(([i, o]) => o.theme || o.color);
  if (!n.length)
    return null;
  const r = Object.entries($y).map(
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
  return /* @__PURE__ */ m(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: qf.sanitize(r.join(`
`))
      }
    }
  );
}, bn = Kf, Yt = K.forwardRef(
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
    const { config: g } = ju(), b = K.useMemo(() => {
      if (i || !e?.length)
        return null;
      const [v] = e, w = `${h || v.dataKey || v.name || "value"}`, k = as(g, v, w), A = !h && typeof s == "string" ? g[s]?.label || s : k?.label;
      return a ? /* @__PURE__ */ m("div", { className: z("font-medium", c), children: a(A, e) }) : A ? /* @__PURE__ */ m("div", { className: z("font-medium", c), children: A }) : null;
    }, [
      s,
      a,
      e,
      i,
      c,
      g,
      h
    ]);
    if (!t || !e?.length)
      return null;
    const y = e.length === 1 && r !== "dot";
    return /* @__PURE__ */ x(
      "div",
      {
        ref: p,
        className: z(
          "grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary px-3 py-2.5 text-base shadow-lg backdrop-blur",
          n
        ),
        children: [
          y ? null : b,
          /* @__PURE__ */ m("div", { className: "grid gap-2", children: e.map((v, w) => {
            const k = `${f || v.name || v.dataKey || "value"}`, A = as(g, v, k), O = d || v.payload.fill || v.color;
            return /* @__PURE__ */ m(
              "div",
              {
                className: z(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  r === "dot" && "items-center"
                ),
                children: l && v?.value !== void 0 && v.name ? l(v.value, v.name, v, w, v.payload) : /* @__PURE__ */ x(Bt, { children: [
                  A?.icon ? /* @__PURE__ */ m(A.icon, {}) : !o && /* @__PURE__ */ m(
                    "div",
                    {
                      className: z(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": y && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": O,
                        "--color-border": O
                      }
                    }
                  ),
                  /* @__PURE__ */ x(
                    "div",
                    {
                      className: z(
                        "flex flex-1 justify-between text-sm leading-none",
                        y ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ x("div", { className: "grid gap-2", children: [
                          y ? b : null,
                          /* @__PURE__ */ m("span", { className: "pr-2 text-f1-foreground", children: A?.label || v.name })
                        ] }),
                        v.value && /* @__PURE__ */ m("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: u ? u(String(v.value)) : v.value.toLocaleString() })
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
Yt.displayName = "ChartTooltip";
const Ur = Gf, Xn = K.forwardRef(
  ({
    className: t,
    hideIcon: e = !1,
    payload: n,
    verticalAlign: r = "bottom",
    nameKey: i,
    hiddenKey: o,
    leftShift: s = 0
  }, a) => {
    const { config: c } = ju();
    return n?.length ? /* @__PURE__ */ m(
      "div",
      {
        ref: a,
        className: z(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          r === "top" ? "pb-2" : "pt-2",
          t
        ),
        style: { marginLeft: s },
        children: n.map((l) => {
          const u = `${i || l.dataKey || "value"}`, d = as(
            c,
            l,
            u,
            o
          );
          return /* @__PURE__ */ x(
            "div",
            {
              className: z(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                d?.icon && !e ? /* @__PURE__ */ m(d.icon, {}) : d && /* @__PURE__ */ m(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: {
                      backgroundColor: l.color
                    }
                  }
                ),
                /* @__PURE__ */ m("span", { className: "text-f1-foreground", children: d?.label })
              ]
            },
            JSON.stringify(l)
          );
        })
      }
    ) : null;
  }
);
Xn.displayName = "ChartLegend";
function as(t, e, n, r) {
  if (typeof e != "object" || e === null)
    return;
  const i = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let o = n;
  if (n in e && typeof e[n] == "string" ? o = e[n] : i && n in i && typeof i[n] == "string" ? o = i[n] : "dataKey" in e && typeof e.dataKey == "string" && (o = e.dataKey), !(r && r === o))
    return o in t ? t[o] : t[n];
}
function Jn(t, e = "12px Inter, sans-serif") {
  const r = document.createElement("canvas").getContext("2d");
  return r ? (r.font = e, r.measureText(t).width) : 0;
}
const so = (t) => ({
  dataKey: "x",
  domain: t?.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: t?.ticks,
  tickCount: t?.tickCount,
  tickFormatter: t?.tickFormatter
}), Cr = (t) => ({
  tickLine: !1,
  axisLine: !1,
  domain: t?.domain,
  tickMargin: 8,
  ticks: t?.ticks,
  tickCount: t?.tickCount,
  tickFormatter: t?.tickFormatter
}), Kr = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), Gr = (t = !1) => ({
  cursor: !0,
  offset: t ? 0 : 20,
  position: { y: t ? void 0 : 0, x: t ? 120 : void 0 },
  animationDuration: 100,
  isAnimationActive: !0
});
function Lt(t) {
  return Pt(t);
}
function ao(t) {
  return t.map((e) => ({ x: e.label, ...e.values }));
}
const zy = ({
  index: t,
  visibleTicksCount: e,
  payload: n,
  tickFormatter: r,
  ...i
}) => {
  const o = t === 0, s = t === e - 1;
  return /* @__PURE__ */ m(Yi, { ...i, textAnchor: o ? "start" : s ? "end" : "middle", children: r?.(n.value, n.index) ?? n.value });
}, By = ({
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
  const { enabled: u } = Xf(), d = Object.keys(e), f = Jo(12), h = ao(t), p = Math.max(
    ...h.flatMap(
      (w) => d.map(
        (k) => Jn(
          r?.tickFormatter ? r.tickFormatter(`${w[k]}`) : `${w[k]}`
        )
      )
    )
  ), g = r?.width ?? p + 20, b = !r?.hide, y = !n?.hide, v = !i || !u;
  return /* @__PURE__ */ m(Gt, { config: e, ref: l, aspect: a, children: /* @__PURE__ */ x(
    Jf,
    {
      accessibilityLayer: !0,
      data: h,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: c
      },
      children: [
        /* @__PURE__ */ x("defs", { children: [
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: `${f}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${b ? g : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                (o === "l" || o === "lr") && /* @__PURE__ */ x(Bt, { children: [
                  /* @__PURE__ */ m("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                  /* @__PURE__ */ m("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ m("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" })
                ] }),
                (o === "r" || o === "lr") && /* @__PURE__ */ x(Bt, { children: [
                  /* @__PURE__ */ m("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ m("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ m("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
                ] }),
                !o && /* @__PURE__ */ x(Bt, { children: [
                  /* @__PURE__ */ m("stop", { offset: "0%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ m("stop", { offset: "100%", stopColor: "white", stopOpacity: "1" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ m(
            "mask",
            {
              id: `${f}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ m(
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
          d.map((w, k) => /* @__PURE__ */ x(
            "linearGradient",
            {
              id: `fill${String(w)}-${f}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ m(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: e[w].color ? fe(e[w].color) : we(k),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ m(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: e[w].color ? fe(e[w].color) : we(k),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            k
          ))
        ] }),
        /* @__PURE__ */ m(
          qn,
          {
            ...Kr(),
            mask: `url(#${f}-transparent-edges)`
          }
        ),
        y && /* @__PURE__ */ m(
          Kt,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: n?.tickFormatter,
            ticks: n?.ticks,
            domain: n?.domain,
            interval: 0,
            tick: zy
          }
        ),
        b && /* @__PURE__ */ m(
          Ot,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: r?.tickCount,
            tickFormatter: i && u ? () => "**" : r?.tickFormatter,
            ticks: r?.ticks,
            domain: r?.domain,
            width: g
          }
        ),
        v && /* @__PURE__ */ m(
          bn,
          {
            ...Gr(),
            content: /* @__PURE__ */ m(
              Yt,
              {
                indicator: "dot",
                yAxisFormatter: r?.tickFormatter
              }
            )
          }
        ),
        d.map((w, k) => /* @__PURE__ */ m(
          $c,
          {
            isAnimationActive: !1,
            dataKey: w,
            type: s,
            mask: `url(#${f}-transparent-edges)`,
            fill: `url(#fill${w}-${f})`,
            fillOpacity: e[w].dashed ? 0 : 0.4,
            stroke: e[w].color ? fe(e[w].color) : we(k),
            strokeWidth: 1.5,
            strokeDasharray: e[w].dashed ? "4 4" : void 0
          },
          w
        )),
        Object.keys(e).length > 1 && /* @__PURE__ */ m(
          Ur,
          {
            className: "flex justify-start",
            content: /* @__PURE__ */ m(Xn, {})
          }
        )
      ]
    }
  ) });
}, Vy = Lt(By), Hy = ({
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
  const p = Object.keys(t), g = ao(e).map((y, v, w) => d && p.length === 1 && !t[p[0]]?.color ? {
    ...y,
    fill: v === w.length - 1 ? we(v) : we(v, 0.5)
  } : y), b = Math.max(
    ...g.flatMap(
      (y) => p.map(
        (v) => Jn(
          r?.tickFormatter ? r.tickFormatter(`${y[v]}`) : `${y[v]}`
        )
      )
    )
  );
  return /* @__PURE__ */ m(Gt, { config: t, ref: h, aspect: c, children: /* @__PURE__ */ x(
    Ru,
    {
      accessibilityLayer: !0,
      data: g,
      margin: {
        left: r && !r.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: u ? 24 : 12
      },
      stackOffset: o === "stacked-by-sign" ? "sign" : void 0,
      onClick: (y) => {
        if (!f || !y.activeLabel || !y.activePayload)
          return;
        const v = {
          label: y.activeLabel,
          values: {}
        };
        for (const w of y.activePayload)
          v.values[w.name] = w.value;
        f(v);
      },
      children: [
        !s && /* @__PURE__ */ m(
          bn,
          {
            ...Gr(),
            content: /* @__PURE__ */ m(Yt, { yAxisFormatter: r.tickFormatter })
          }
        ),
        !a && /* @__PURE__ */ m(qn, { ...Kr() }),
        /* @__PURE__ */ m(
          Ot,
          {
            ...Cr(r),
            tick: !0,
            width: r.width ?? b + 20,
            hide: r.hide
          }
        ),
        /* @__PURE__ */ m(
          Kt,
          {
            ...so(n),
            hide: n?.hide,
            tick: u ? (y) => {
              const { x: v, y: w, payload: k } = y, A = e.find((E) => E.label === k.value)?.values || "", O = Object.keys(A).length === 1 ? Object.values(A)?.[0] : void 0, S = O !== void 0 && r.tickFormatter ? r.tickFormatter(`${O}`) : O.toLocaleString();
              return /* @__PURE__ */ x("g", { transform: `translate(${v},${w})`, children: [
                /* @__PURE__ */ m(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: k.value
                  }
                ),
                !!O && /* @__PURE__ */ m(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: S
                  }
                )
              ] });
            } : void 0
          }
        ),
        p.map((y, v) => /* @__PURE__ */ m(
          jr,
          {
            isAnimationActive: !1,
            dataKey: y,
            stackId: o === "stacked" || o === "stacked-by-sign" ? "stack" : void 0,
            fill: d ? ((w) => w.fill) : t[y].color ? fe(t[y].color) : we(v),
            radius: o === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ m(
              pn,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${y}`
            )
          },
          `bar-${y}`
        )),
        l && /* @__PURE__ */ m(
          Ur,
          {
            content: /* @__PURE__ */ m(Xn, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, Wy = Lt(Hy), Uy = ({ data: t, legend: e = !0, hideTooltip: n = !1 }, r) => {
  const i = t.reduce((o, s) => o + s.value, 0);
  return /* @__PURE__ */ x(Zf, { children: [
    /* @__PURE__ */ m("div", { className: "w-full", ref: r, children: /* @__PURE__ */ m("div", { className: "flex h-2 gap-1 overflow-hidden", children: t.map((o, s) => {
      const a = o.value / i * 100, c = o.color ? fe(o.color) : we(s), l = (u) => {
        const d = u / i * 100;
        return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
      };
      return a === 0 ? null : /* @__PURE__ */ x(Qf, { children: [
        /* @__PURE__ */ m(
          eh,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${a}%` },
            title: o.name,
            asChild: !0,
            children: /* @__PURE__ */ m(
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
        !n && /* @__PURE__ */ x(th, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ m(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: c }
            }
          ),
          /* @__PURE__ */ m("span", { className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary", children: o.name }),
          /* @__PURE__ */ x("span", { className: "font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground", children: [
            o.value,
            " (",
            l(o.value),
            "%)"
          ] })
        ] })
      ] }, o.name);
    }) }) }),
    e && /* @__PURE__ */ m(
      "div",
      {
        className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: t.map((o, s) => {
          const a = o.color ? fe(o.color) : we(s);
          return /* @__PURE__ */ x(
            "div",
            {
              className: "flex items-center gap-1.5",
              role: "listitem",
              children: [
                /* @__PURE__ */ m(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: { backgroundColor: a }
                  }
                ),
                /* @__PURE__ */ m("span", { className: "text-f1-foreground", children: o.name })
              ]
            },
            o.name
          );
        })
      }
    )
  ] });
}, Ky = Lt(Uy), Gy = (t) => {
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
    return /* @__PURE__ */ m(
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
}, Yy = ({
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
  const g = ao(e), b = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], y = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], v = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], w = [
    ...b,
    ...y,
    ...v
  ], k = Math.max(
    ...g.flatMap(
      (S) => w.map(
        (E) => Jn(
          r?.tickFormatter ? r.tickFormatter(`${S[E]}`) : `${S[E]}`
        )
      )
    )
  ), A = [u, d, f].filter(
    (S) => S?.axisPosition === "left"
  ), O = [u, d, f].filter(
    (S) => S?.axisPosition === "right"
  );
  return /* @__PURE__ */ m(Gt, { config: t, ref: p, aspect: a, children: /* @__PURE__ */ x(
    Iy,
    {
      accessibilityLayer: !0,
      data: g,
      margin: {
        left: r && !r.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: l ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (S) => {
        if (!h || !S.activeLabel || !S.activePayload)
          return;
        const E = {
          label: S.activeLabel,
          values: {}
        };
        for (const T of S.activePayload)
          E.values[T.name] = T.value;
        h(E);
      },
      children: [
        !o && /* @__PURE__ */ m(
          bn,
          {
            ...Gr(),
            content: /* @__PURE__ */ m(Yt, { yAxisFormatter: r.tickFormatter })
          }
        ),
        !s && /* @__PURE__ */ m(qn, { ...Kr() }),
        A.length > 0 && /* @__PURE__ */ m(
          Ot,
          {
            ...Cr(r),
            tick: !0,
            width: r.width ?? k + 20 + (O.length > 0 && A[0]?.axisLabel ? 20 : 0),
            hide: r.hide || A.some((S) => S?.hideAxis),
            label: A[0]?.axisLabel ? {
              value: A[0].axisLabel,
              angle: -90,
              position: "insideLeft"
            } : void 0
          }
        ),
        O.length > 0 && /* @__PURE__ */ m(
          Ot,
          {
            ...Cr(r),
            yAxisId: "right",
            orientation: "right",
            tick: !0,
            width: r.width ?? k + 20 + (A.length > 0 && O[0]?.axisLabel ? 20 : 0),
            hide: r.hide || O.some((S) => S?.hideAxis),
            label: O[0]?.axisLabel ? {
              value: O[0].axisLabel,
              angle: 90,
              position: "insideRight"
            } : void 0
          }
        ),
        /* @__PURE__ */ m(
          Kt,
          {
            ...so(n),
            hide: n?.hide,
            tick: l ? (S) => {
              const { x: E, y: T, payload: L } = S, M = e.find((_) => _.label === L.value)?.values || "", N = Object.keys(M).length === 1 ? Object.values(M)?.[0] : void 0, P = N !== void 0 && r.tickFormatter ? r.tickFormatter(`${N}`) : N.toLocaleString();
              return /* @__PURE__ */ x("g", { transform: `translate(${E},${T})`, children: [
                /* @__PURE__ */ m(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: L.value
                  }
                ),
                !!N && /* @__PURE__ */ m(
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
        b.map((S, E) => /* @__PURE__ */ m(
          jr,
          {
            isAnimationActive: !1,
            dataKey: String(S),
            fill: t[S].color ? fe(t[S].color) : we(E),
            radius: 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ m(
              pn,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${String(S)}`
            )
          },
          `bar-${String(S)}`
        )),
        y.map((S, E) => /* @__PURE__ */ m(
          yn,
          {
            type: d?.lineType ?? "natural",
            dataKey: String(S),
            stroke: t[S].color ? fe(t[S].color) : we(b.length + E),
            strokeWidth: 2,
            dot: d?.dot ?? !1,
            isAnimationActive: !1,
            yAxisId: d?.axisPosition === "right" ? "right" : void 0
          },
          `line-${String(S)}`
        )),
        v.map((S, E) => /* @__PURE__ */ m(
          Wr,
          {
            dataKey: String(S),
            fill: t[S].color ? fe(t[S].color) : we(
              b.length + y.length + E
            ),
            r: 4,
            isAnimationActive: !1,
            yAxisId: f?.axisPosition === "right" ? "right" : void 0,
            shape: Gy(String(S))
          },
          `scatter-${String(S)}`
        )),
        c && /* @__PURE__ */ m(
          Ur,
          {
            content: /* @__PURE__ */ m(Xn, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, qy = Lt(Yy), Xy = ({
  data: t,
  dataConfig: e,
  xAxis: n,
  yAxis: r = { hide: !0 },
  lineType: i = "natural",
  aspect: o,
  hideTooltip: s = !1,
  hideGrid: a = !1
}, c) => {
  const l = Object.keys(e), u = ao(t), d = Math.max(
    ...u.flatMap(
      (f) => l.map(
        (h) => Jn(
          r?.tickFormatter ? r.tickFormatter(`${f[h]}`) : `${f[h]}`
        )
      )
    )
  );
  return /* @__PURE__ */ m(Gt, { config: e, ref: c, aspect: o, children: /* @__PURE__ */ x(
    Dy,
    {
      accessibilityLayer: !0,
      data: u,
      margin: { left: r && !r.hide ? 0 : 12, right: 12 },
      children: [
        !a && /* @__PURE__ */ m(qn, { ...Kr() }),
        !n?.hide && /* @__PURE__ */ m(Kt, { ...so(n) }),
        !r?.hide && /* @__PURE__ */ m(
          Ot,
          {
            ...Cr(r),
            width: r.width ?? d + 20
          }
        ),
        !s && /* @__PURE__ */ m(
          bn,
          {
            ...Gr(),
            content: /* @__PURE__ */ m(Yt, { yAxisFormatter: r?.tickFormatter })
          }
        ),
        l.map((f, h) => /* @__PURE__ */ m(
          yn,
          {
            dataKey: f,
            isAnimationActive: !1,
            type: i,
            stroke: e[f].color ? fe(e[f].color) : we(h),
            strokeWidth: 1.5,
            strokeDasharray: e[f].dashed ? "4 4" : void 0,
            dot: !1
          },
          f
        ))
      ]
    }
  ) });
}, Jy = Lt(Xy), Zy = ({ data: t, dataConfig: e, overview: n, aspect: r, tickFormatter: i }, o) => {
  const s = t.map((l, u) => ({
    ...l,
    fill: e[l.label]?.color ? fe(e[l.label].color) : we(u)
  })), c = t.map((l) => l.value).reduce((l, u) => l + u);
  return c === 0 && s.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), /* @__PURE__ */ m(
    Gt,
    {
      config: e,
      ref: o,
      aspect: r,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ x(My, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        c !== 0 && /* @__PURE__ */ m(
          bn,
          {
            isAnimationActive: !1,
            content: /* @__PURE__ */ m(Yt, { yAxisFormatter: i })
          }
        ),
        /* @__PURE__ */ x(
          Mt,
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
                return /* @__PURE__ */ m(
                  Ws,
                  {
                    fill: l.fill,
                    "aria-label": `${l.label}: ${d} (${(l.value / c * 100).toFixed(0)}%)`
                  },
                  `cell-${u}`
                );
              }),
              /* @__PURE__ */ m(
                zs,
                {
                  content: ({ viewBox: l }) => {
                    if (l && "cx" in l && "cy" in l)
                      return /* @__PURE__ */ x(
                        "text",
                        {
                          x: l.cx,
                          y: l.cy,
                          textAnchor: "middle",
                          dominantBaseline: "middle",
                          children: [
                            /* @__PURE__ */ m(
                              "tspan",
                              {
                                x: l.cx,
                                y: (l.cy || 0) + 8,
                                className: "fill-f1-foreground text-4xl font-semibold",
                                children: n?.number ? i ? i(String(n.number)) : n.number : null
                              }
                            ),
                            /* @__PURE__ */ m(
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
        /* @__PURE__ */ m(
          Ur,
          {
            content: /* @__PURE__ */ m(Xn, { nameKey: "label", hiddenKey: "-" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, Qy = Lt(Zy), eb = ({ value: t, max: e = 100, label: n, color: r }, i) => {
  const o = r ? fe(r) : fe("categorical-1"), s = t / e * 100;
  return /* @__PURE__ */ x("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ m("div", { className: "flex-grow", children: /* @__PURE__ */ m(
      jc,
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
    n && /* @__PURE__ */ m("div", { className: "flex-shrink-0 text-sm font-medium", children: n })
  ] });
}, tb = Lt(eb);
function nb(t) {
  return t.map((e) => ({ x: e.label, ...e.values }));
}
const rb = (t) => {
  const e = nh.cloneDeep(t);
  let n = "", r = 0;
  return e.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([o, s]) => {
        r < s && (r = s, n = o);
      }
    );
  }), n;
}, ib = ({
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
  const d = Object.keys(t), f = nb(e), h = Math.max(
    ...f.map((y) => Jn(`${y.x}`))
  ), p = d.reduce(
    (y, v) => (y[v] = e.reduce(
      (w, k) => w + k.values[v],
      0
    ), y),
    {}
  ), g = {
    ...so(n),
    type: "number",
    dataKey: rb(f)
  }, b = {
    ...Cr(r),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ m(Gt, { config: t, ref: u, aspect: o, children: /* @__PURE__ */ x(
    Ru,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: f,
      margin: {
        left: r && !r.hide ? 8 : 12,
        right: i || c ? 100 : 0
      },
      children: [
        !s && /* @__PURE__ */ m(
          bn,
          {
            ...Gr(!0),
            content: /* @__PURE__ */ m(Yt, { yAxisFormatter: r?.tickFormatter })
          }
        ),
        !a && /* @__PURE__ */ m(
          qn,
          {
            ...Kr(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ m(Kt, { ...g, hide: n?.hide }),
        /* @__PURE__ */ m(
          Ot,
          {
            ...b,
            hide: r?.hide,
            width: r?.width ?? h + 20
          }
        ),
        d.map((y, v) => /* @__PURE__ */ m(Bt, { children: /* @__PURE__ */ m(
          jr,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: y,
            fill: t[y].color ? fe(t[y].color) : we(v),
            radius: 4,
            maxBarSize: 24,
            children: (i || c) && /* @__PURE__ */ m(
              pn,
              {
                position: "right",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12,
                formatter: l,
                content: c ? /* @__PURE__ */ m(
                  sb,
                  {
                    valueFormatter: l,
                    total: p[y],
                    showLabel: i
                  }
                ) : void 0
              },
              `label-{${y}}`
            )
          },
          `bar-${y}`
        ) }))
      ]
    }
  ) });
}, ob = Lt(ib), sb = ({
  viewBox: t,
  offset: e = 0,
  value: n,
  valueFormatter: r,
  total: i,
  showLabel: o
}) => {
  const { x: s = 0, y: a = 0, width: c = 0, height: l = 0 } = t, u = s + c + e, d = a + l / 2, f = r ? r(n) : n, h = Jn(`${f}`), p = i > 0 ? Math.round(Number(n) / i * 100) : 0;
  return /* @__PURE__ */ x("g", { transform: `translate(${u},${d + 4})`, children: [
    o && /* @__PURE__ */ m(
      "text",
      {
        x: 0,
        textAnchor: "start",
        className: "fill-f1-foreground-secondary text-sm font-medium",
        children: f
      }
    ),
    /* @__PURE__ */ x(
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
}, ab = ({
  data: t,
  dataConfig: e,
  scaleMin: n,
  scaleMax: r,
  aspect: i,
  dataTestId: o
}, s) => {
  const a = Object.keys(e), c = t.map((l) => ({
    subject: l.label,
    ...l.values
  }));
  return /* @__PURE__ */ m(Fc, { dataTestId: o, children: /* @__PURE__ */ m(
    Gt,
    {
      config: e,
      ref: s,
      aspect: i,
      "data-chromatic": "ignore",
      children: /* @__PURE__ */ x(Ly, { accessibilityLayer: !0, data: c, children: [
        /* @__PURE__ */ m(
          bn,
          {
            cursor: !0,
            content: /* @__PURE__ */ m(Yt, { indicator: "dot" })
          }
        ),
        /* @__PURE__ */ m(vu, { gridType: "circle" }),
        /* @__PURE__ */ m(Yn, { dataKey: "subject" }),
        /* @__PURE__ */ m(
          Gn,
          {
            angle: 90,
            type: "number",
            domain: [n ?? "dataMin", r ?? "dataMax"]
          }
        ),
        a.map((l, u) => /* @__PURE__ */ m(
          Hr,
          {
            dataKey: l,
            fill: e[l].color ? fe(e[l].color) : we(u),
            stroke: e[l].color ? fe(e[l].color) : we(u),
            strokeWidth: 1.5,
            fillOpacity: 0.3,
            label: e[l].label,
            isAnimationActive: !1
          },
          l
        )),
        Object.keys(e).length > 1 && /* @__PURE__ */ m(Ur, { iconType: "star", content: /* @__PURE__ */ m(Xn, {}) })
      ] })
    }
  ) });
}, bS = Lt(ab), vS = Re(
  Dt({ name: "AreaChart", type: "info" }, Vy)
), wS = Re(
  Dt({ name: "BarChart", type: "info" }, Wy)
), xS = Re(
  Dt(
    { name: "CategoryBarChart", type: "info" },
    Ky
  )
), SS = Re(
  Dt({ name: "LineChart", type: "info" }, Jy)
), kS = Re(
  Dt({ name: "PieChart", type: "info" }, Qy)
), AS = Re(
  Dt(
    { name: "VerticalBarChart", type: "info" },
    ob
  )
), CS = Re(
  Dt({ name: "ProgressBarChart", type: "info" }, tb)
), ES = Re(
  Dt({ name: "ComboChart", type: "info" }, qy)
), Do = [
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
], lb = (t, e) => {
  const n = t.className?.includes("text-") && !t.className?.includes("text-current") || t.style?.color !== void 0, r = Cc();
  return /* @__PURE__ */ x(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: e,
      ...t,
      children: [
        /* @__PURE__ */ m("defs", { children: Do.map((i) => /* @__PURE__ */ m("clipPath", { id: `${r}-${i.id}`, children: /* @__PURE__ */ m("path", { d: i.path }) }, i.id)) }),
        n ? Do.map((i) => /* @__PURE__ */ m(
          "path",
          {
            d: i.path,
            fill: "currentColor",
            vectorEffect: "non-scaling-stroke"
          },
          i.id
        )) : Do.map((i) => /* @__PURE__ */ m(
          "foreignObject",
          {
            x: "0",
            y: "0",
            width: "24",
            height: "24",
            clipPath: `url(#${r}-${i.id})`,
            children: /* @__PURE__ */ m(
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
}, cb = Pt(lb);
function ub({
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
  const [l, u] = ae(i);
  Ze(() => {
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
  return l && /* @__PURE__ */ m("div", { children: /* @__PURE__ */ m("div", { className: "p-2", children: /* @__PURE__ */ m("div", { style: f(), children: /* @__PURE__ */ x(
    "div",
    {
      className: p(),
      style: h(),
      onClick: n,
      children: [
        /* @__PURE__ */ x(Bt, { children: [
          a === "one-campaign" ? /* @__PURE__ */ m("div", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center", children: /* @__PURE__ */ m(_t, { icon: cb, size: "lg", className: "!h-8 !w-8" }) }) : /* @__PURE__ */ m("div", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center", children: /* @__PURE__ */ m(
            rh,
            {
              module: c.module,
              size: "lg"
            }
          ) }),
          /* @__PURE__ */ m("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ x("div", { children: [
            /* @__PURE__ */ m("h3", { className: "text-lg font-medium", children: t }),
            /* @__PURE__ */ m("p", { className: "text-f1-foreground-secondary", children: e })
          ] }) })
        ] }),
        o && /* @__PURE__ */ m("div", { className: "h-6 w-6", children: /* @__PURE__ */ m(
          Q,
          {
            variant: "ghost",
            icon: Ks,
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
const OS = Re(ub), _S = ih, NS = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => Ce.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => Ce.day.toRange(ui(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => Ce.day.toRange({
      from: ui(/* @__PURE__ */ new Date(), 7),
      to: /* @__PURE__ */ new Date()
    })
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => Ce.week.toRange(/* @__PURE__ */ new Date())
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => Ce.week.toRange(ui(/* @__PURE__ */ new Date(), 7))
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => Ce.month.toRange(/* @__PURE__ */ new Date())
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => Ce.month.toRange(sr(/* @__PURE__ */ new Date(), 1))
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => Ce.month.toRange(sr(/* @__PURE__ */ new Date(), 3))
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => Ce.month.toRange(sr(/* @__PURE__ */ new Date(), 6))
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => Ce.quarter.toRange(/* @__PURE__ */ new Date())
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () => Ce.quarter.toRange(sr(/* @__PURE__ */ new Date(), 3))
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => Ce.halfyear.toRange(/* @__PURE__ */ new Date())
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () => Ce.halfyear.toRange(sr(/* @__PURE__ */ new Date(), 6))
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => Ce.year.toRange(rl(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => Ce.year.toRange(rl(/* @__PURE__ */ new Date(), 3))
  }
}, Ii = (t, e) => e.view.domAtPos(t).node.offsetParent !== null, db = (t, e, n) => {
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
}, Nl = (t, e) => {
  const { state: n, view: r, extensionManager: i } = t, { schema: o, selection: s } = n, { empty: a, $anchor: c } = s, l = !!i.extensions.find((y) => y.name === "gapCursor");
  if (!a || c.parent.type !== o.nodes.detailsSummary || !l || e === "right" && c.parentOffset !== c.parent.nodeSize - 2)
    return !1;
  const u = Gs((y) => y.type === o.nodes.details)(s);
  if (!u)
    return !1;
  const d = fi(u.node, (y) => y.type === o.nodes.detailsContent);
  if (!d.length || Ii(u.start + d[0].pos + 1, t))
    return !1;
  const h = n.doc.resolve(u.pos + u.node.nodeSize), p = Va.findFrom(h, 1, !1);
  if (!p)
    return !1;
  const { tr: g } = n, b = new Va(p);
  return g.setSelection(b), g.scrollIntoView(), r.dispatch(g), !0;
}, fb = et.create({
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
      Qe(this.options.HTMLAttributes, t),
      0
    ];
  },
  addNodeView() {
    return ({ editor: t, getPos: e, node: n, HTMLAttributes: r }) => {
      const i = document.createElement("div"), o = Qe(this.options.HTMLAttributes, r, {
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
        const { selection: n, schema: r } = t, i = Gs((y) => y.type === this.type)(n);
        if (!i)
          return !1;
        const o = fi(i.node, (y) => y.type === r.nodes.detailsSummary), s = fi(i.node, (y) => y.type === r.nodes.detailsContent);
        if (!o.length || !s.length)
          return !1;
        const a = o[0], c = s[0], l = i.pos, u = t.doc.resolve(l), d = l + i.node.nodeSize, f = { from: l, to: d }, h = c.node.content.toJSON() || [], p = u.parent.type.contentMatch.defaultType, b = [
          p?.create(null, a.node.content).toJSON(),
          ...h
        ];
        return e().insertContentAt(f, b).setTextSelection(l + 1).run();
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
        const c = s ? 0 : o.indexAfter(-1), l = zc(a.contentMatchAt(c));
        if (!l || !a.canReplaceWith(c, c, l))
          return !1;
        const u = l.createAndFill();
        if (!u)
          return !1;
        const d = s ? o.after() + 1 : o.after(-1), f = e.tr.replaceWith(d, d, u), h = f.doc.resolve(d), p = qe.near(h, 1);
        return f.setSelection(p), f.scrollIntoView(), n.dispatch(f), !0;
      },
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowRight: ({ editor: t }) => Nl(t, "right"),
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowDown: ({ editor: t }) => Nl(t, "down")
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
          if (!t.some((b) => b.selectionSet) || !e.selection.empty || !n.selection.empty || !oh(n, i.name))
            return;
          const { $from: a } = n.selection;
          if (Ii(a.pos, r))
            return;
          const l = db(a, (b) => b.type === i, r);
          if (!l)
            return;
          const u = fi(l.node, (b) => b.type === n.schema.nodes.detailsSummary);
          if (!u.length)
            return;
          const d = u[0], h = (e.selection.from < n.selection.from ? "forward" : "backward") === "forward" ? l.start + d.pos : l.pos + d.pos + d.node.nodeSize, p = rt.create(n.doc, h);
          return n.tr.setSelection(p);
        }
      })
    ];
  }
}), Fu = fb.configure({
  persist: !0,
  HTMLAttributes: {
    class: "rich-text-details"
  }
}), hb = et.create({
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
      Qe(this.options.HTMLAttributes, t, { "data-type": this.name }),
      0
    ];
  },
  addNodeView() {
    return ({ HTMLAttributes: t }) => {
      const e = document.createElement("div"), n = Qe(this.options.HTMLAttributes, t, {
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
        const { state: e, view: n } = t, { selection: r } = e, { $from: i, empty: o } = r, s = Gs((M) => M.type === this.type)(r);
        if (!o || !s || !s.node.childCount)
          return !1;
        const a = i.index(s.depth), { childCount: c } = s.node;
        if (!(c === a + 1))
          return !1;
        const u = s.node.type.contentMatch.defaultType, d = u?.createAndFill();
        if (!d)
          return !1;
        const f = e.doc.resolve(s.pos + 1), h = c - 1, p = s.node.child(h), g = f.posAtIndex(h, s.depth);
        if (!p.eq(d))
          return !1;
        const y = i.node(-3);
        if (!y)
          return !1;
        const v = i.indexAfter(-3), w = zc(y.contentMatchAt(v));
        if (!w || !y.canReplaceWith(v, v, w))
          return !1;
        const k = w.createAndFill();
        if (!k)
          return !1;
        const { tr: A } = e, O = i.after(-2);
        A.replaceWith(O, O, k);
        const S = A.doc.resolve(O), E = qe.near(S, 1);
        A.setSelection(E);
        const T = g, L = g + p.nodeSize;
        return A.delete(T, L), A.scrollIntoView(), n.dispatch(A), !0;
      }
    };
  }
}), zu = hb, pb = et.create({
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
      Qe(this.options.HTMLAttributes, t),
      0
    ];
  }
}), Bu = pb;
var ls, cs;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  ls = (e) => t.get(e), cs = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  ls = (r) => {
    for (let i = 0; i < t.length; i += 2)
      if (t[i] == r) return t[i + 1];
  }, cs = (r, i) => (n == 10 && (n = 0), t[n++] = r, t[n++] = i);
}
var ie = class {
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
    return ls(t) || cs(t, mb(t));
  }
};
function mb(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = gb(t), n = t.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let l = 0, u = e * n; l < u; l++) r[l] = 0;
  for (let l = 0, u = 0; l < n; l++) {
    const d = t.child(l);
    u++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; ) i++;
      if (p == d.childCount) break;
      const g = d.child(p), { colspan: b, rowspan: y, colwidth: v } = g.attrs;
      for (let w = 0; w < y; w++) {
        if (w + l >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: y - w
          });
          break;
        }
        const k = i + w * e;
        for (let A = 0; A < b; A++) {
          r[k + A] == 0 ? r[k + A] = u : (o || (o = [])).push({
            type: "collision",
            row: l,
            pos: u,
            n: b - A
          });
          const O = v && v[A];
          if (O) {
            const S = (k + A) % e * 2, E = s[S];
            E == null || E != O && s[S + 1] == 1 ? (s[S] = O, s[S + 1] = 1) : E == O && s[S + 1]++;
          }
        }
      }
      i += b, u += g.nodeSize;
    }
    const f = (l + 1) * e;
    let h = 0;
    for (; i < f; ) r[i++] == 0 && h++;
    h && (o || (o = [])).push({ type: "missing", row: l, n: h }), u++;
  }
  (e === 0 || n === 0) && (o || (o = [])).push({ type: "zero_sized" });
  const a = new ie(e, n, r, o);
  let c = !1;
  for (let l = 0; !c && l < s.length; l += 2)
    s[l] != null && s[l + 1] < n && (c = !0);
  return c && yb(a, s, t), a;
}
function gb(t) {
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
function yb(t, e, n) {
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
      d != null && (!c.colwidth || c.colwidth[l] != d) && ((a || (a = bb(c)))[l] = d);
    }
    a && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: a
    });
  }
}
function bb(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function Se(t) {
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
var jt = new $e("selectingCells");
function Zn(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function vb(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function dt(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--)
    if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function lo(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const n = Zn(e.$head) || wb(e.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function wb(t) {
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
function us(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function xb(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function ia(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Vu(t, e, n) {
  const r = t.node(-1), i = ie.get(r), o = t.start(-1), s = i.nextCell(t.pos - o, e, n);
  return s == null ? null : t.node(0).resolve(o + s);
}
function cn(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan - n };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function Hu(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan + n };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < n; i++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function Sb(t, e, n) {
  const r = Se(e.type.schema).header_cell;
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
    const r = e.node(-1), i = ie.get(r), o = e.start(-1), s = i.rectBetween(
      e.pos - o,
      n.pos - o
    ), a = e.node(0), c = i.cellsInRect(s).filter((u) => u != n.pos - o);
    c.unshift(n.pos - o);
    const l = c.map((u) => {
      const d = r.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new Bc(
        a.resolve(f),
        a.resolve(f + d.content.size)
      );
    });
    super(l[0].$from, l[0].$to, l), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), i = e.resolve(n.map(this.$headCell.pos));
    if (us(r) && us(i) && ia(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? St.rowSelection(r, i) : o && this.isColSelection() ? St.colSelection(r, i) : new St(r, i);
    }
    return rt.between(r, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), n = ie.get(e), r = this.$anchorCell.start(-1), i = n.rectBetween(
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
        const g = i.left - h.left, b = h.right - i.right;
        if (g > 0 || b > 0) {
          let y = p.attrs;
          if (g > 0 && (y = cn(y, 0, g)), b > 0 && (y = cn(
            y,
            y.colspan - b,
            b
          )), h.left < i.left) {
            if (p = p.type.createAndFill(y), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(y)}`
              );
          } else
            p = p.type.create(y, p.content);
        }
        if (h.top < i.top || h.bottom > i.bottom) {
          const y = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, i.bottom) - Math.max(h.top, i.top)
          };
          h.top < i.top ? p = p.type.createAndFill(y) : p = p.type.create(y, p.content);
        }
        l.push(p);
      }
      s.push(e.child(c).copy(be.from(l)));
    }
    const a = this.isColSelection() && this.isRowSelection() ? e : s;
    return new Ve(be.from(a), 1, 1);
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
    this.replace(e, new Ve(be.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = ie.get(n), i = this.$anchorCell.start(-1), o = r.cellsInRect(
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
    const r = e.node(-1), i = ie.get(r), o = e.start(-1), s = i.findCell(e.pos - o), a = i.findCell(n.pos - o), c = e.node(0);
    return s.top <= a.top ? (s.top > 0 && (e = c.resolve(o + i.map[s.left])), a.bottom < i.height && (n = c.resolve(
      o + i.map[i.width * (i.height - 1) + a.right - 1]
    ))) : (a.top > 0 && (n = c.resolve(o + i.map[a.left])), s.bottom < i.height && (e = c.resolve(
      o + i.map[i.width * (i.height - 1) + s.right - 1]
    ))), new St(e, n);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = ie.get(e), r = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
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
    const r = e.node(-1), i = ie.get(r), o = e.start(-1), s = i.findCell(e.pos - o), a = i.findCell(n.pos - o), c = e.node(0);
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
    return new kb(this.$anchorCell.pos, this.$headCell.pos);
  }
};
J.prototype.visible = !1;
qe.jsonID("cell", J);
var kb = class Wu {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Wu(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && ia(n, r) ? new J(n, r) : qe.near(r, 1);
  }
};
function Ab(t) {
  if (!(t.selection instanceof J)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(
      Ci.node(r, r + n.nodeSize, { class: "selectedCell" })
    );
  }), vr.create(t.doc, e);
}
function Cb({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, i = t.depth;
  for (; i >= 0 && !(t.after(i + 1) < t.end(i)); i--, n++)
    ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--)
    ;
  return n == r && /row|table/.test(t.node(i).type.spec.tableRole);
}
function Eb({ $from: t, $to: e }) {
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
function Ob(t, e, n) {
  const r = (e || t).selection, i = (e || t).doc;
  let o, s;
  if (r instanceof Vc && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      o = J.create(i, r.from);
    else if (s == "row") {
      const a = i.resolve(r.from + 1);
      o = J.rowSelection(a, a);
    } else if (!n) {
      const a = ie.get(r.node), c = r.from + 1, l = c + a.map[a.width * a.height - 1];
      o = J.create(i, c + 1, l);
    }
  } else r instanceof rt && Cb(r) ? o = rt.create(i, r.from) : r instanceof rt && Eb(r) && (o = rt.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
var _b = new $e("fix-tables");
function Uu(t, e, n, r) {
  const i = t.childCount, o = e.childCount;
  e: for (let s = 0, a = 0; s < o; s++) {
    const c = e.child(s);
    for (let l = a, u = Math.min(i, s + 3); l < u; l++)
      if (t.child(l) == c) {
        a = l + 1, n += c.nodeSize;
        continue e;
      }
    r(c, n), a < i && t.child(a).sameMarkup(c) ? Uu(t.child(a), c, n + 1, r) : c.nodesBetween(0, c.content.size, r, n + 1), n += c.nodeSize;
  }
}
function Ku(t, e) {
  let n;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (n = Nb(t, i, o, n));
  };
  return e ? e.doc != t.doc && Uu(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function Nb(t, e, n, r) {
  const i = ie.get(e);
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
        cn(d, d.colspan - l.n, l.n)
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
      for (let b = 0; b < f; b++) {
        const y = Se(t.schema)[h].createAndFill();
        y && p.push(y);
      }
      const g = (c == 0 || s == c - 1) && a == c ? l + 1 : d - 1;
      r.insert(r.mapping.map(g), p);
    }
    l = d;
  }
  return r.setMeta(_b, { fixTables: !0 });
}
function yt(t) {
  const e = t.selection, n = lo(t), r = n.node(-1), i = n.start(-1), o = ie.get(r);
  return { ...e instanceof J ? o.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : o.findCell(n.pos - i), tableStart: i, map: o, table: r };
}
function Gu(t, { map: e, tableStart: n, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  Sb(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const a = s * e.width + i;
    if (i > 0 && i < e.width && e.map[a - 1] == e.map[a]) {
      const c = e.map[a], l = r.nodeAt(c);
      t.setNodeMarkup(
        t.mapping.map(n + c),
        null,
        Hu(l.attrs, i - e.colCount(c))
      ), s += l.attrs.rowspan - 1;
    } else {
      const c = o == null ? Se(r.type.schema).cell : r.nodeAt(e.map[a + o]).type, l = e.positionAt(s, i, r);
      t.insert(t.mapping.map(n + l), c.createAndFill());
    }
  }
  return t;
}
function Tb(t, e) {
  if (!dt(t)) return !1;
  if (e) {
    const n = yt(t);
    e(Gu(t.tr, n, n.left));
  }
  return !0;
}
function Pb(t, e) {
  if (!dt(t)) return !1;
  if (e) {
    const n = yt(t);
    e(Gu(t.tr, n, n.right));
  }
  return !0;
}
function Db(t, { map: e, table: n, tableStart: r }, i) {
  const o = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const a = s * e.width + i, c = e.map[a], l = n.nodeAt(c), u = l.attrs;
    if (i > 0 && e.map[a - 1] == c || i < e.width - 1 && e.map[a + 1] == c)
      t.setNodeMarkup(
        t.mapping.slice(o).map(r + c),
        null,
        cn(u, i - e.colCount(c))
      );
    else {
      const d = t.mapping.slice(o).map(r + c);
      t.delete(d, d + l.nodeSize);
    }
    s += u.rowspan;
  }
}
function Mb(t, e) {
  if (!dt(t)) return !1;
  if (e) {
    const n = yt(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let i = n.right - 1; Db(r, n, i), i != n.left; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      n.table = o, n.map = ie.get(o);
    }
    e(r);
  }
  return !0;
}
function Lb(t, e, n) {
  var r;
  const i = Se(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++)
    if (((r = e.nodeAt(t.map[o + n * t.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function Yu(t, { map: e, tableStart: n, table: r }, i) {
  var o;
  let s = n;
  for (let l = 0; l < i; l++) s += r.child(l).nodeSize;
  const a = [];
  let c = i > 0 ? -1 : 0;
  Lb(e, r, i + c) && (c = i == 0 || i == e.height ? null : 0);
  for (let l = 0, u = e.width * i; l < e.width; l++, u++)
    if (i > 0 && i < e.height && e.map[u] == e.map[u - e.width]) {
      const d = e.map[u], f = r.nodeAt(d).attrs;
      t.setNodeMarkup(n + d, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), l += f.colspan - 1;
    } else {
      const d = c == null ? Se(r.type.schema).cell : (o = r.nodeAt(e.map[u + c * e.width])) == null ? void 0 : o.type, f = d?.createAndFill();
      f && a.push(f);
    }
  return t.insert(s, Se(r.type.schema).row.create(null, a)), t;
}
function Ib(t, e) {
  if (!dt(t)) return !1;
  if (e) {
    const n = yt(t);
    e(Yu(t.tr, n, n.top));
  }
  return !0;
}
function Rb(t, e) {
  if (!dt(t)) return !1;
  if (e) {
    const n = yt(t);
    e(Yu(t.tr, n, n.bottom));
  }
  return !0;
}
function $b(t, { map: e, table: n, tableStart: r }, i) {
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
        ), g = e.positionAt(i + 1, l, n);
        t.insert(t.mapping.slice(a).map(r + g), p), l += h.colspan - 1;
      }
    }
  }
}
function jb(t, e) {
  if (!dt(t)) return !1;
  if (e) {
    const n = yt(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let i = n.bottom - 1; $b(r, n, i), i != n.top; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      n.table = o, n.map = ie.get(n.table);
    }
    e(r);
  }
  return !0;
}
function Tl(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function Fb({ width: t, height: e, map: n }, r) {
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
function Pl(t, e) {
  const n = t.selection;
  if (!(n instanceof J) || n.$anchorCell.pos == n.$headCell.pos)
    return !1;
  const r = yt(t), { map: i } = r;
  if (Fb(i, r)) return !1;
  if (e) {
    const o = t.tr, s = {};
    let a = be.empty, c, l;
    for (let u = r.top; u < r.bottom; u++)
      for (let d = r.left; d < r.right; d++) {
        const f = i.map[u * i.width + d], h = r.table.nodeAt(f);
        if (!(s[f] || !h))
          if (s[f] = !0, c == null)
            c = f, l = h;
          else {
            Tl(h) || (a = a.append(h.content));
            const p = o.mapping.map(f + r.tableStart);
            o.delete(p, p + h.nodeSize);
          }
      }
    if (c == null || l == null)
      return !0;
    if (o.setNodeMarkup(c + r.tableStart, null, {
      ...Hu(
        l.attrs,
        l.attrs.colspan,
        r.right - r.left - l.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), a.size) {
      const u = c + 1 + l.content.size, d = Tl(l) ? c + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, a);
    }
    o.setSelection(
      new J(o.doc.resolve(c + r.tableStart))
    ), e(o);
  }
  return !0;
}
function Dl(t, e) {
  const n = Se(t.schema);
  return zb(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function zb(t) {
  return (e, n) => {
    var r;
    const i = e.selection;
    let o, s;
    if (i instanceof J) {
      if (i.$anchorCell.pos != i.$headCell.pos) return !1;
      o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
    } else {
      if (o = vb(i.$from), !o) return !1;
      s = (r = Zn(i.$from)) == null ? void 0 : r.pos;
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
        for (let g = u.left, b = 0; g < u.right; g++, b++)
          g == u.left && h == u.top || d.insert(
            f = d.mapping.map(p + u.tableStart, 1),
            t({ node: o, row: h, col: g }).createAndFill(c[b])
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
function Bb(t, e) {
  return function(n, r) {
    if (!dt(n)) return !1;
    const i = lo(n);
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
function Vb(t) {
  return function(e, n) {
    if (!dt(e)) return !1;
    if (n) {
      const r = Se(e.schema), i = yt(e), o = e.tr, s = i.map.cellsInRect(
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
function Ml(t, e, n) {
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
function Er(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Vb(t) : function(n, r) {
    if (!dt(n)) return !1;
    if (r) {
      const i = Se(n.schema), o = yt(n), s = n.tr, a = Ml("row", o, i), c = Ml(
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
        const p = h + o.tableStart, g = s.doc.nodeAt(p);
        g && s.setNodeMarkup(p, f, g.attrs);
      }), r(s);
    }
    return !0;
  };
}
Er("row", {
  useDeprecatedLogic: !0
});
Er("column", {
  useDeprecatedLogic: !0
});
var Hb = Er("cell", {
  useDeprecatedLogic: !0
});
function Wb(t, e) {
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
function Ll(t) {
  return function(e, n) {
    if (!dt(e)) return !1;
    const r = Wb(lo(e), t);
    if (r == null) return !1;
    if (n) {
      const i = e.doc.resolve(r);
      n(
        e.tr.setSelection(rt.between(i, xb(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function Ub(t, e) {
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
    const r = t.tr, i = Se(t.schema).cell.createAndFill().content;
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
function Kb(t) {
  if (!t.size) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, a = [];
  if (o == "row")
    for (let c = 0; c < e.childCount; c++) {
      let l = e.child(c).content;
      const u = c ? 0 : Math.max(0, n - 1), d = c < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (u || d) && (l = ds(
        Se(s).row,
        new Ve(l, u, d)
      ).content), a.push(l);
    }
  else if (o == "cell" || o == "header_cell")
    a.push(
      n || r ? ds(
        Se(s).row,
        new Ve(e, n, r)
      ).content : e
    );
  else
    return null;
  return Gb(s, a);
}
function Gb(t, e) {
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
    if (i >= e.length && e.push(be.empty), n[i] < r) {
      const o = Se(t).cell.createAndFill(), s = [];
      for (let a = n[i]; a < r; a++)
        s.push(o);
      e[i] = e[i].append(be.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function ds(t, e) {
  const n = t.createAndFill();
  return new ah(n).replace(0, n.content.size, e).doc;
}
function Yb({ width: t, height: e, rows: n }, r, i) {
  if (t != r) {
    const o = [], s = [];
    for (let a = 0; a < n.length; a++) {
      const c = n[a], l = [];
      for (let u = o[a] || 0, d = 0; u < r; d++) {
        let f = c.child(d % c.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(
          cn(
            f.attrs,
            f.attrs.colspan,
            u + f.attrs.colspan - r
          ),
          f.content
        )), l.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          o[a + h] = (o[a + h] || 0) + f.attrs.colspan;
      }
      s.push(be.from(l));
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
      o.push(be.from(c));
    }
    n = o, e = i;
  }
  return { width: t, height: e, rows: n };
}
function qb(t, e, n, r, i, o, s) {
  const a = t.doc.type.schema, c = Se(a);
  let l, u;
  if (i > e.width)
    for (let d = 0, f = 0; d < e.height; d++) {
      const h = n.child(d);
      f += h.nodeSize;
      const p = [];
      let g;
      h.lastChild == null || h.lastChild.type == c.cell ? g = l || (l = c.cell.createAndFill()) : g = u || (u = c.header_cell.createAndFill());
      for (let b = e.width; b < i; b++) p.push(g);
      t.insert(t.mapping.slice(s).map(f - 1 + r), p);
    }
  if (o > e.height) {
    const d = [];
    for (let p = 0, g = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const b = p >= e.width ? !1 : n.nodeAt(e.map[g + p]).type == c.header_cell;
      d.push(
        b ? u || (u = c.header_cell.createAndFill()) : l || (l = c.cell.createAndFill())
      );
    }
    const f = c.row.create(null, be.from(d)), h = [];
    for (let p = e.height; p < o; p++) h.push(f);
    t.insert(t.mapping.slice(s).map(r + n.nodeSize - 2), h);
  }
  return !!(l || u);
}
function Il(t, e, n, r, i, o, s, a) {
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
function Rl(t, e, n, r, i, o, s, a) {
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
        cn(
          f.attrs,
          s - h,
          f.attrs.colspan - (s - h)
        )
      ), t.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          cn(f.attrs, 0, s - h)
        )
      ), l += f.attrs.rowspan - 1;
    }
  }
  return c;
}
function $l(t, e, n, r, i) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o)
    throw new Error("No table found");
  let s = ie.get(o);
  const { top: a, left: c } = r, l = c + i.width, u = a + i.height, d = t.tr;
  let f = 0;
  function h() {
    if (o = n ? d.doc.nodeAt(n - 1) : d.doc, !o)
      throw new Error("No table found");
    s = ie.get(o), f = d.mapping.maps.length;
  }
  qb(d, s, o, n, l, u, f) && h(), Il(d, s, o, n, c, l, a, f) && h(), Il(d, s, o, n, c, l, u, f) && h(), Rl(d, s, o, n, a, u, c, f) && h(), Rl(d, s, o, n, a, u, l, f) && h();
  for (let p = a; p < u; p++) {
    const g = s.positionAt(p, c, o), b = s.positionAt(p, l, o);
    d.replace(
      d.mapping.slice(f).map(g + n),
      d.mapping.slice(f).map(b + n),
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
var Xb = sh({
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
function pi(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function ti(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    if (o instanceof J)
      return pi(
        n,
        r,
        qe.near(o.$headCell, e)
      );
    if (t != "horiz" && !o.empty) return !1;
    const s = qu(i, t, e);
    if (s == null) return !1;
    if (t == "horiz")
      return pi(
        n,
        r,
        qe.near(n.doc.resolve(o.head + e), e)
      );
    {
      const a = n.doc.resolve(s), c = Vu(a, t, e);
      let l;
      return c ? l = qe.near(c, 1) : e < 0 ? l = qe.near(n.doc.resolve(a.before(-1)), -1) : l = qe.near(n.doc.resolve(a.after(-1)), 1), pi(n, r, l);
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
      const c = qu(i, t, e);
      if (c == null) return !1;
      s = new J(n.doc.resolve(c));
    }
    const a = Vu(s.$headCell, t, e);
    return a ? pi(
      n,
      r,
      new J(s.$anchorCell, a)
    ) : !1;
  };
}
function Jb(t, e) {
  const n = t.state.doc, r = Zn(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new J(r))), !0) : !1;
}
function Zb(t, e, n) {
  if (!dt(t.state)) return !1;
  let r = Kb(n);
  const i = t.state.selection;
  if (i instanceof J) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        be.from(
          ds(Se(t.state.schema).cell, n)
        )
      ]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), a = ie.get(o).rectBetween(
      i.$anchorCell.pos - s,
      i.$headCell.pos - s
    );
    return r = Yb(r, a.right - a.left, a.bottom - a.top), $l(t.state, t.dispatch, s, a, r), !0;
  } else if (r) {
    const o = lo(t.state), s = o.start(-1);
    return $l(
      t.state,
      t.dispatch,
      s,
      ie.get(o.node(-1)).findCell(o.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function Qb(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey) return;
  const r = jl(t, e.target);
  let i;
  if (e.shiftKey && t.state.selection instanceof J)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = Zn(t.state.selection.$anchor)) != null && ((n = Mo(t, e)) == null ? void 0 : n.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r)
    return;
  function o(c, l) {
    let u = Mo(t, l);
    const d = jt.getState(t.state) == null;
    if (!u || !ia(c, u))
      if (d) u = c;
      else return;
    const f = new J(c, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(jt, c.pos), t.dispatch(h);
    }
  }
  function s() {
    t.root.removeEventListener("mouseup", s), t.root.removeEventListener("dragstart", s), t.root.removeEventListener("mousemove", a), jt.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(jt, -1));
  }
  function a(c) {
    const l = c, u = jt.getState(t.state);
    let d;
    if (u != null)
      d = t.state.doc.resolve(u);
    else if (jl(t, l.target) != r && (d = Mo(t, e), !d))
      return s();
    d && o(d, l);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", a);
}
function qu(t, e, n) {
  if (!(t.state.selection instanceof rt)) return null;
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
function jl(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function Mo(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return n && n ? Zn(t.state.doc.resolve(n.pos)) : null;
}
var ev = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${n}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), fs(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, fs(
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
function fs(t, e, n, r, i, o) {
  var s;
  let a = 0, c = !0, l = e.firstChild;
  const u = t.firstChild;
  if (u) {
    for (let d = 0, f = 0; d < u.childCount; d++) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let g = 0; g < h; g++, f++) {
        const b = i == f ? o : p && p[g], y = b ? b + "px" : "";
        if (a += b || r, b || (c = !1), l)
          l.style.width != y && (l.style.width = y), l = l.nextSibling;
        else {
          const v = document.createElement("col");
          v.style.width = y, e.appendChild(v);
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
function tv({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: n = 100,
  View: r = ev,
  lastColumnResizable: i = !0
} = {}) {
  const o = new gt({
    key: Be,
    state: {
      init(s, a) {
        var c, l;
        const u = (l = (c = o.spec) == null ? void 0 : c.props) == null ? void 0 : l.nodeViews, d = Se(a.schema).table.name;
        return r && u && (u[d] = (f, h) => new r(f, n, h)), new nv(-1, !1);
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
          rv(s, a, t, i);
        },
        mouseleave: (s) => {
          iv(s);
        },
        mousedown: (s, a) => {
          ov(s, a, e, n);
        }
      },
      decorations: (s) => {
        const a = Be.getState(s);
        if (a && a.activeHandle > -1)
          return uv(s, a.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var nv = class mi {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Be);
    if (r && r.setHandle != null)
      return new mi(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new mi(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(n.activeHandle, -1);
      return us(e.doc.resolve(i)) || (i = -1), new mi(i, n.dragging);
    }
    return n;
  }
};
function rv(t, e, n, r) {
  if (!t.editable) return;
  const i = Be.getState(t.state);
  if (i && !i.dragging) {
    const o = av(e.target);
    let s = -1;
    if (o) {
      const { left: a, right: c } = o.getBoundingClientRect();
      e.clientX - a <= n ? s = Fl(t, e, "left", n) : c - e.clientX <= n && (s = Fl(t, e, "right", n));
    }
    if (s != i.activeHandle) {
      if (!r && s !== -1) {
        const a = t.state.doc.resolve(s), c = a.node(-1), l = ie.get(c), u = a.start(-1);
        if (l.colCount(a.pos - u) + a.nodeAfter.attrs.colspan - 1 == l.width - 1)
          return;
      }
      Xu(t, s);
    }
  }
}
function iv(t) {
  if (!t.editable) return;
  const e = Be.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && Xu(t, -1);
}
function ov(t, e, n, r) {
  var i;
  if (!t.editable) return !1;
  const o = (i = t.dom.ownerDocument.defaultView) != null ? i : window, s = Be.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const a = t.state.doc.nodeAt(s.activeHandle), c = sv(t, s.activeHandle, a.attrs);
  t.dispatch(
    t.state.tr.setMeta(Be, {
      setDragging: { startX: e.clientX, startWidth: c }
    })
  );
  function l(d) {
    o.removeEventListener("mouseup", l), o.removeEventListener("mousemove", u);
    const f = Be.getState(t.state);
    f?.dragging && (lv(
      t,
      f.activeHandle,
      zl(f.dragging, d, n)
    ), t.dispatch(
      t.state.tr.setMeta(Be, { setDragging: null })
    ));
  }
  function u(d) {
    if (!d.which) return l(d);
    const f = Be.getState(t.state);
    if (f && f.dragging) {
      const h = zl(f.dragging, d, n);
      Bl(
        t,
        f.activeHandle,
        h,
        r
      );
    }
  }
  return Bl(
    t,
    s.activeHandle,
    c,
    r
  ), o.addEventListener("mouseup", l), o.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function sv(t, e, { colspan: n, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i) return i;
  const o = t.domAtPos(e);
  let a = o.node.childNodes[o.offset].offsetWidth, c = n;
  if (r)
    for (let l = 0; l < n; l++)
      r[l] && (a -= r[l], c--);
  return a / c;
}
function av(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function Fl(t, e, n, r) {
  const i = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: s } = o, a = Zn(t.state.doc.resolve(s));
  if (!a) return -1;
  if (n == "right") return a.pos;
  const c = ie.get(a.node(-1)), l = a.start(-1), u = c.map.indexOf(a.pos - l);
  return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function zl(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function Xu(t, e) {
  t.dispatch(
    t.state.tr.setMeta(Be, { setHandle: e })
  );
}
function lv(t, e, n) {
  const r = t.state.doc.resolve(e), i = r.node(-1), o = ie.get(i), s = r.start(-1), a = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, c = t.state.tr;
  for (let l = 0; l < o.height; l++) {
    const u = l * o.width + a;
    if (l && o.map[u] == o.map[u - o.width]) continue;
    const d = o.map[u], f = i.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : a - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const p = f.colwidth ? f.colwidth.slice() : cv(f.colspan);
    p[h] = n, c.setNodeMarkup(s + d, null, { ...f, colwidth: p });
  }
  c.docChanged && t.dispatch(c);
}
function Bl(t, e, n, r) {
  const i = t.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), a = ie.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let c = t.domAtPos(i.start(-1)).node;
  for (; c && c.nodeName != "TABLE"; )
    c = c.parentNode;
  c && fs(
    o,
    c.firstChild,
    c,
    r,
    a,
    n
  );
}
function cv(t) {
  return Array(t).fill(0);
}
function uv(t, e) {
  var n;
  const r = [], i = t.doc.resolve(e), o = i.node(-1);
  if (!o)
    return vr.empty;
  const s = ie.get(o), a = i.start(-1), c = s.colCount(i.pos - a) + i.nodeAfter.attrs.colspan - 1;
  for (let l = 0; l < s.height; l++) {
    const u = c + l * s.width;
    if ((c == s.width - 1 || s.map[u] != s.map[u + 1]) && (l == 0 || s.map[u] != s.map[u - s.width])) {
      const d = s.map[u], f = a + d + o.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", (n = Be.getState(t)) != null && n.dragging && r.push(
        Ci.node(
          a + d,
          a + d + o.nodeAt(d).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), r.push(Ci.widget(f, h));
    }
  }
  return vr.create(t.doc, r);
}
function dv({
  allowTableNodeSelection: t = !1
} = {}) {
  return new gt({
    key: jt,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(jt);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: i, pos: o } = e.mapping.mapResult(n);
        return i ? null : o;
      }
    },
    props: {
      decorations: Ab,
      handleDOMEvents: {
        mousedown: Qb
      },
      createSelectionBetween(e) {
        return jt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Jb,
      handleKeyDown: Xb,
      handlePaste: Zb
    },
    appendTransaction(e, n, r) {
      return Ob(
        r,
        Ku(r, n),
        t
      );
    }
  });
}
var fv = et.create({
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
    return ["td", Qe(this.options.HTMLAttributes, t), 0];
  }
}), hv = et.create({
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
    return ["th", Qe(this.options.HTMLAttributes, t), 0];
  }
}), pv = et.create({
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
    return ["tr", Qe(this.options.HTMLAttributes, t), 0];
  }
});
function hs(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Vl(t, e, n, r, i, o) {
  var s;
  let a = 0, c = !0, l = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let f = 0, h = 0; f < u.childCount; f += 1) {
      const { colspan: p, colwidth: g } = u.child(f).attrs;
      for (let b = 0; b < p; b += 1, h += 1) {
        const y = i === h ? o : g && g[b], v = y ? `${y}px` : "";
        if (a += y || r, y || (c = !1), l) {
          if (l.style.width !== v) {
            const [w, k] = hs(r, y);
            l.style.setProperty(w, k);
          }
          l = l.nextSibling;
        } else {
          const w = document.createElement("col"), [k, A] = hs(r, y);
          w.style.setProperty(k, A), e.appendChild(w);
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
var mv = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Vl(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, Vl(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function gv(t, e, n, r) {
  let i = 0, o = !0;
  const s = [], a = t.firstChild;
  if (!a)
    return {};
  for (let d = 0, f = 0; d < a.childCount; d += 1) {
    const { colspan: h, colwidth: p } = a.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const b = n === f ? r : p && p[g];
      i += b || e, b || (o = !1);
      const [y, v] = hs(e, b);
      s.push(["col", { style: `${y}: ${v}` }]);
    }
  }
  const c = o ? `${i}px` : "", l = o ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: c, tableMinWidth: l };
}
function Hl(t, e) {
  return t.createAndFill();
}
function yv(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function bv(t, e, n, r, i) {
  const o = yv(t), s = [], a = [];
  for (let l = 0; l < n; l += 1) {
    const u = Hl(o.cell);
    if (u && a.push(u), r) {
      const d = Hl(o.header_cell);
      d && s.push(d);
    }
  }
  const c = [];
  for (let l = 0; l < e; l += 1)
    c.push(o.row.createChecked(null, r && l === 0 ? s : a));
  return o.table.createChecked(null, c);
}
function vv(t) {
  return t instanceof J;
}
var ri = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!vv(e))
    return !1;
  let n = 0;
  const r = uh(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, wv = "";
function xv(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function Sv(t, e, n = {}) {
  var r;
  const i = (r = n.cellLineSeparator) != null ? r : wv;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((p) => {
    const g = [];
    p.content && p.content.forEach((b) => {
      let y = "";
      b.content && Array.isArray(b.content) && b.content.length > 1 ? y = b.content.map((A) => e.renderChildren(A)).join(i) : y = b.content ? e.renderChildren(b.content) : "";
      const v = xv(y), w = b.type === "tableHeader";
      g.push({ text: v, isHeader: w });
    }), o.push(g);
  });
  const s = o.reduce((p, g) => Math.max(p, g.length), 0);
  if (s === 0)
    return "";
  const a = new Array(s).fill(0);
  o.forEach((p) => {
    var g;
    for (let b = 0; b < s; b += 1) {
      const v = (((g = p[b]) == null ? void 0 : g.text) || "").length;
      v > a[b] && (a[b] = v), a[b] < 3 && (a[b] = 3);
    }
  });
  const c = (p, g) => p + " ".repeat(Math.max(0, g - p.length)), l = o[0], u = l.some((p) => p.isHeader);
  let d = `
`;
  const f = new Array(s).fill(0).map((p, g) => u && l[g] && l[g].text || "");
  return d += `| ${f.map((p, g) => c(p, a[g])).join(" | ")} |
`, d += `| ${a.map((p) => "-".repeat(Math.max(3, p))).join(" | ")} |
`, (u ? o.slice(1) : o).forEach((p) => {
    d += `| ${new Array(s).fill(0).map((g, b) => c(p[b] && p[b].text || "", a[b])).join(" | ")} |
`;
  }), d;
}
var kv = Sv, Av = et.create({
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
      View: mv,
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
    const { colgroup: n, tableWidth: r, tableMinWidth: i } = gv(t, this.options.cellMinWidth), o = e.style;
    function s() {
      return o || (r ? `width: ${r}` : `min-width: ${i}`);
    }
    const a = [
      "table",
      Qe(this.options.HTMLAttributes, e, {
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
  renderMarkdown: (t, e) => kv(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = bv(o.schema, t, e, n);
        if (i) {
          const a = r.selection.from + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(rt.near(r.doc.resolve(a)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => Tb(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => Pb(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => Mb(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => Ib(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => Rb(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => jb(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => Ub(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Pl(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Dl(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Er("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Er("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Hb(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Pl(t, e) ? !0 : Dl(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => Bb(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => Ll(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => Ll(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Ku(t), !0),
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
        tv({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      dv({
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
      tableRole: lh(ch(t, "tableRole", e))
    };
  }
}), Cv = mn.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Av.configure(this.options.table)), this.options.tableCell !== !1 && t.push(fv.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(hv.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(pv.configure(this.options.tableRow)), t;
  }
});
const Ev = Cv.configure({
  table: { resizable: !0 }
}), Ov = Pt(function({ title: e, onClose: n, content: r, primaryAction: i, secondaryAction: o }, s) {
  return /* @__PURE__ */ x(
    "div",
    {
      ref: s,
      className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
      "data-testid": "ai-banner",
      children: [
        /* @__PURE__ */ x("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
          /* @__PURE__ */ m(Hc, { className: "font-medium", children: e }),
          n && /* @__PURE__ */ m(
            Q,
            {
              variant: "ghost",
              icon: Ks,
              size: "sm",
              hideLabel: !0,
              onClick: n,
              label: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ x("div", { className: "flex flex-col gap-[1px]", children: [
          /* @__PURE__ */ m(
            "div",
            {
              className: z(
                "bg-f1-background px-4 py-3",
                o || i ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
              ),
              children: /* @__PURE__ */ m(dh, { content: r })
            }
          ),
          (o || i) && /* @__PURE__ */ x("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
            /* @__PURE__ */ m("div", { children: o && /* @__PURE__ */ m(
              Q,
              {
                label: o.label,
                onClick: o.onClick,
                variant: "outline",
                icon: o.icon
              }
            ) }),
            /* @__PURE__ */ m("div", { children: i && /* @__PURE__ */ m(
              Q,
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
}), _v = ({ compact: t }) => /* @__PURE__ */ x(
  "div",
  {
    className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ m("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ m(j, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ x("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ m(
          "div",
          {
            className: z(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              t && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ x("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ m(j, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ m(j, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ m(j, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !t && /* @__PURE__ */ x("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ m(j, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Ju = Pt(
  (t, e) => /* @__PURE__ */ m(Ov, { ref: e, ...t })
), Nv = ({ compact: t }) => /* @__PURE__ */ m(_v, { compact: t });
Ju.displayName = "F0AiBanner";
const Zu = Wc(
  Re(Ju),
  Nv
), Tv = (t) => {
  if (!t?.content) return "";
  try {
    return fh(t.content, [
      Uc,
      Kc,
      Gc,
      hh,
      Yc,
      qc,
      Xc,
      Jc,
      Zc,
      Qc,
      Fu,
      Bu,
      zu
    ]);
  } catch {
    return "";
  }
}, Pv = (t, e) => $s(() => {
  if (e?.selectedTitle || e?.selectedEmoji)
    return {
      title: e.selectedTitle || t.title,
      emoji: e.selectedEmoji
    };
  const n = t.buttons?.find(
    (r) => r.type === e?.selectedAction
  );
  return n ? { title: n.label, emoji: n.emoji } : { title: t.title };
}, [e, t]), Dv = (t, e) => {
  const [n, r] = ae(!1), i = Ye(
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
}, Mv = (t, e, n) => {
  Ze(() => {
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
}, Lv = (t, e, n) => {
  Ze(() => {
    t?.shouldExecute && t?.selectedAction && e && n && (n({ data: { ...t, shouldExecute: !1 } }), e(t.selectedAction));
  }, [e, n, t]);
}, Iv = (t, e, n, r) => {
  Ze(() => {
    if (!r?.content || !r?.isEditable || !t || !n) return;
    const i = n();
    i !== void 0 && (e(), r.content && t.chain().focus().setTextSelection(i).insertContent(r.content).run());
  }, [r, t, n, e]);
}, Rv = ({
  config: t,
  isLoading: e,
  onButtonClick: n
}) => /* @__PURE__ */ x("div", { className: "flex flex-col gap-2", children: [
  t.title && /* @__PURE__ */ m("div", { className: "text-f1-foreground-secondary", children: t.title }),
  /* @__PURE__ */ m("div", { className: "relative flex flex-row flex-wrap items-center gap-2", children: t.buttons?.map((r, i) => /* @__PURE__ */ m(
    Q,
    {
      onClick: () => n(r.type),
      variant: "outline",
      icon: r.icon,
      label: r.label,
      disabled: e
    },
    i
  )) })
] }), $v = ({ isEditable: t }) => t ? /* @__PURE__ */ x("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ m(j, { className: "h-4 w-1/2 rounded-md" }),
  /* @__PURE__ */ m(j, { className: "h-4 w-full rounded-md" }),
  /* @__PURE__ */ m(j, { className: "h-4 w-3/4 rounded-md" }),
  /* @__PURE__ */ m(j, { className: "h-4 w-1/3 rounded-md" })
] }) : /* @__PURE__ */ m(Zu.Skeleton, { compact: !0 }), jv = ({
  node: t,
  updateAttributes: e,
  deleteNode: n,
  extension: r,
  editor: i,
  getPos: o
}) => {
  const s = t.attrs.data, a = r.options.currentConfig || t.attrs.config, { title: c } = Pv(a, s), { isLoading: l, handleClick: u } = Dv(
    a,
    e
  ), d = !!(s?.selectedAction && !s?.content), f = l || d, h = Tv(s);
  if (Iv(i, n, o, s), Mv(a, e, s), Lv(s, u, e), !s || !a || !a.buttons?.length) return null;
  const p = !!s?.content, b = !!(s?.selectedTitle || s?.selectedAction) && p && !s?.isEditable;
  return /* @__PURE__ */ m(zr, { contentEditable: !1, children: /* @__PURE__ */ x("div", { className: "mb-3", children: [
    f ? /* @__PURE__ */ m($v, { isEditable: s?.isEditable }) : b ? /* @__PURE__ */ m(
      Zu,
      {
        title: c,
        content: h,
        onClose: () => n()
      }
    ) : /* @__PURE__ */ m(
      "div",
      {
        className: "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg",
        onClick: (v) => v.stopPropagation(),
        children: /* @__PURE__ */ m(
          Rv,
          {
            config: a,
            isLoading: f,
            onButtonClick: u
          }
        )
      }
    ),
    /* @__PURE__ */ m(Ys, { style: { display: "none" } })
  ] }) });
}, Fv = et.create({
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
    return Fr(jv);
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
}), zv = Fv, Qu = [
  "paragraph",
  "heading",
  "blockquote",
  "codeBlock",
  "bulletList",
  "orderedList",
  "listItem",
  "table",
  "details"
], Bv = new Set(Qu), Bn = (t) => t ? Bv.has(t) : !1, ed = (t) => t ? Bn(t.type) && !t.attrs?.id ? !0 : t.content?.some(ed) ?? !1 : !1, td = (t) => {
  if (!t)
    return !1;
  if (Bn(t.type.name) && !t.attrs.id)
    return !0;
  for (let e = 0; e < t.childCount; e += 1)
    if (td(t.child(e)))
      return !0;
  return !1;
}, Wl = (t) => t ? t instanceof ph ? td(t) : ed(t) : !1, Vv = mn.create({
  name: "blockId",
  addGlobalAttributes() {
    return [
      {
        // Apply to all block-level node types
        types: Qu,
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
                ), g = Math.max(
                  0,
                  Math.min(h, n.doc.content.size)
                );
                p < g && s.push({ from: p, to: g });
              });
            });
          }), s.length > 0 ? s.forEach(({ from: a, to: c }) => {
            a >= 0 && c <= n.doc.content.size && a < c && n.doc.nodesBetween(a, c, (l, u) => {
              if (Bn(l.type.name) && !l.attrs.id) {
                const d = Jo(5);
                i.setNodeMarkup(u, void 0, {
                  ...l.attrs,
                  id: d
                }), o = !0;
              }
            });
          }) : n.doc.descendants((a, c) => {
            if (Bn(a.type.name) && !a.attrs.id) {
              const l = Jo(5);
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
}), Hv = (t, e) => {
  let n = null;
  return t.state.doc.descendants((r, i) => r.attrs.id === e ? (n = { node: r, pos: i }, !1) : !0), n;
};
var Wv = ({ key: t, editor: e, onPaste: n, onDrop: r, allowedMimeTypes: i }) => new gt({
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
}), Uv = mn.create({
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
      Wv({
        key: new $e(this.name),
        editor: this.editor,
        allowedMimeTypes: this.options.allowedMimeTypes,
        onDrop: this.options.onDrop,
        onPaste: this.options.onPaste
      })
    ];
  }
});
const Kv = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Gv = et.create({
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
    return ["img", Qe(this.options.HTMLAttributes, t)];
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
      mh({
        find: Kv,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), Yv = 50 * 1024 * 1024, oa = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp"
], qv = 10, rn = 100, Xv = ({
  node: t,
  deleteNode: e,
  selected: n,
  editor: r,
  updateAttributes: i
}) => {
  const { src: o, alt: s, title: a, uploading: c, width: l } = t.attrs, u = r.isEditable, d = gn(), [f, h] = ae(!1), p = Ye(
    (g) => {
      g.preventDefault(), g.stopPropagation();
      const b = g.clientX, y = l ?? rn, v = r.view.dom.clientWidth, w = (A) => {
        const S = (A.clientX - b) / v * 100, E = Math.min(
          rn,
          Math.max(qv, y + S)
        );
        i({ width: Math.round(E) });
      }, k = () => {
        h(!1), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", k);
      };
      h(!0), document.addEventListener("mousemove", w), document.addEventListener("mouseup", k);
    },
    [r, l, i]
  );
  return /* @__PURE__ */ m(zr, { className: "mb-2", children: /* @__PURE__ */ x(
    "div",
    {
      style: { width: `${l ?? rn}%` },
      className: z(
        "image-resizable-wrapper group/image relative rounded-lg",
        n && "border-2 border-f1-border-selected-bold border-solid",
        f && "select-none"
      ),
      children: [
        /* @__PURE__ */ m(
          "img",
          {
            src: o,
            alt: s,
            title: a,
            draggable: !1,
            className: "block h-auto w-full rounded-md transition-all duration-150 ease-out"
          }
        ),
        c && /* @__PURE__ */ m("div", { className: "absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200", children: /* @__PURE__ */ m(gh, { size: "medium" }) }),
        u && !c && /* @__PURE__ */ m("div", { className: "absolute right-2 top-2 opacity-0 transition-opacity group-hover/image:opacity-100", children: /* @__PURE__ */ m(
          Q,
          {
            onClick: e,
            label: d.actions.delete,
            icon: eo,
            variant: "default",
            hideLabel: !0
          }
        ) }),
        u && !c && /* @__PURE__ */ m(
          "div",
          {
            className: z(
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
}, Jv = Gv.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: rn,
        parseHTML: (t) => {
          const e = t.style.width;
          return e?.endsWith("%") && parseInt(e, 10) || rn;
        },
        renderHTML: (t) => !t.width || t.width === rn ? {} : { style: `width: ${t.width}%` }
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
    return Fr(Xv);
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", Qe(this.options.HTMLAttributes, t)];
  }
}).configure({
  inline: !1,
  allowBase64: !0
}), ps = async (t, e, n, r) => {
  const i = n.maxFileSize ?? Yv, { onError: o } = n;
  if (!oa.includes(e.type)) {
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
}, Zv = (t) => Uv.configure({
  allowedMimeTypes: oa,
  onDrop: (e, n, r) => {
    n.forEach((i) => {
      ps(e, i, t, r);
    });
  },
  onPaste: (e, n) => {
    n.forEach((r) => {
      ps(e, r, t);
    });
  }
}), nd = (t, e, n) => {
  ps(t, e, n);
}, ms = {
  superNegative: Ah,
  negative: kh,
  neutral: Sh,
  positive: xh,
  superPositive: wh
}, gs = {
  superNegative: "mood-super-negative",
  negative: "mood-negative",
  neutral: "mood-neutral",
  positive: "mood-positive",
  superPositive: "mood-super-positive"
}, Qv = ({
  firstName: t,
  lastName: e,
  src: n,
  "aria-label": r,
  "aria-labelledby": i,
  pulse: o,
  onPulseClick: s
}) => {
  const a = gn(), [c, l] = ae(!o);
  return /* @__PURE__ */ m("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ m(eu, { mode: "popLayout", initial: !!c, children: c ? /* @__PURE__ */ m(
    tn.div,
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
      children: /* @__PURE__ */ m(
        tn.div,
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
          children: /* @__PURE__ */ m(yh, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ x(
    tn.div,
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
        /* @__PURE__ */ m(
          bh,
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
        o ? /* @__PURE__ */ m("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ m(
          vh,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), s();
            },
            "aria-label": a.actions.edit,
            children: /* @__PURE__ */ m(
              _t,
              {
                icon: ms[o],
                color: gs[o],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ m(
          tn.div,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.5 },
            transition: {
              opacity: { delay: 0.25 },
              scale: { delay: 0.25 }
            },
            className: "absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background",
            children: /* @__PURE__ */ m(
              Pn,
              {
                compact: !0,
                label: a.actions.add,
                variant: "neutral",
                size: "sm",
                icon: Ch,
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
Qv.displayName = "PulseAvatar";
const e0 = ({
  node: t,
  deleteNode: e,
  updateAttributes: n
}) => {
  const r = gn(), [i, o] = ae(t.attrs.isOpen ?? !1), s = t.attrs.data;
  if (!s) return null;
  const a = () => {
    const l = !i;
    o(l), n({ isOpen: l });
  }, c = [
    {
      label: r.actions.delete,
      icon: eo,
      critical: !0,
      onClick: () => e()
    }
  ];
  return /* @__PURE__ */ x(zr, { contentEditable: !1, children: [
    /* @__PURE__ */ x(
      "div",
      {
        className: "editor-mood-tracker mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
        onClick: (l) => l.stopPropagation(),
        children: [
          /* @__PURE__ */ x("div", { className: "flex flex-row items-center justify-between gap-2", children: [
            /* @__PURE__ */ m("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ x("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ x("div", { className: "flex flex-row items-center gap-3", children: [
                /* @__PURE__ */ m("p", { className: "text-f1-text-primary text-lg font-semibold", children: s.title }),
                /* @__PURE__ */ m("div", { className: "flex flex-row items-center", children: s.days.map((l, u) => /* @__PURE__ */ m(
                  "div",
                  {
                    className: "-ml-1.5 flex items-center justify-center rounded-full bg-f1-background",
                    children: /* @__PURE__ */ m(
                      _t,
                      {
                        icon: ms[l.mood],
                        size: "lg",
                        color: gs[l.mood]
                      }
                    )
                  },
                  u
                )) })
              ] }),
              /* @__PURE__ */ m("p", { children: /* @__PURE__ */ m("span", { className: "text-f1-text-primary text-md font-normal", children: s.averageMoodComment }) })
            ] }) }),
            /* @__PURE__ */ x("div", { className: "flex flex-row items-center gap-1", children: [
              /* @__PURE__ */ m(
                Q,
                {
                  onClick: a,
                  variant: "outline",
                  hideLabel: !0,
                  label: i ? r.actions.collapse : r.actions.expand,
                  icon: i ? tu : qs,
                  size: "sm"
                }
              ),
              /* @__PURE__ */ m(to, { items: c, size: "sm" })
            ] })
          ] }),
          i && /* @__PURE__ */ m("div", { className: "text-f1-text-primary flex flex-col gap-2", children: s.days.map((l, u) => /* @__PURE__ */ x("div", { className: "flex flex-row items-center gap-2", children: [
            /* @__PURE__ */ m("div", { className: "flex items-center justify-center rounded-full", children: /* @__PURE__ */ m(
              _t,
              {
                icon: ms[l.mood],
                size: "lg",
                color: gs[l.mood]
              }
            ) }),
            /* @__PURE__ */ x("p", { className: "text-f1-text-primary text-md font-normal", children: [
              /* @__PURE__ */ x("span", { className: "font-semibold", children: [
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
    /* @__PURE__ */ m(Ys, { style: { display: "none" } })
  ] });
}, t0 = et.create({
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
    return Fr(e0);
  },
  addCommands() {
    return {
      insertMoodTracker: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: { data: t }
      })
    };
  }
}), n0 = t0, r0 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/, i0 = /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/, o0 = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*)$/gm, s0 = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\S*)$/gm;
function gi(t) {
  const e = t.match(r0);
  if (e)
    return {
      provider: "youtube",
      videoId: e[1],
      embedUrl: `https://www.youtube-nocookie.com/embed/${e[1]}`
    };
  const n = t.match(i0);
  return n ? {
    provider: "vimeo",
    videoId: n[1],
    embedUrl: `https://player.vimeo.com/video/${n[1]}`
  } : null;
}
const a0 = ({
  node: t,
  deleteNode: e,
  selected: n,
  editor: r
}) => {
  const { src: i, provider: o } = t.attrs, s = r.isEditable, a = gn();
  return /* @__PURE__ */ m(zr, { className: "mb-2", children: /* @__PURE__ */ x(
    "div",
    {
      className: z(
        "video-embed-wrapper relative overflow-hidden rounded-lg",
        n && "border-2 border-solid border-f1-border-selected-bold"
      ),
      children: [
        /* @__PURE__ */ m("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ m(
          "iframe",
          {
            src: i,
            title: `${o} video`,
            className: "absolute inset-0 h-full w-full border-0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0
          }
        ) }),
        s && /* @__PURE__ */ m("div", { className: "dark absolute right-2 top-2", children: /* @__PURE__ */ m(
          Q,
          {
            onClick: e,
            label: a.actions.delete,
            icon: eo,
            variant: "outline",
            hideLabel: !0,
            size: "sm"
          }
        ) })
      ]
    }
  ) });
}, l0 = et.create({
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
      Qe(t, { "data-video-embed": "" }),
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
    return Fr(a0);
  },
  addCommands() {
    return {
      setVideoEmbed: ({ src: t }) => ({ commands: e }) => {
        const n = gi(t);
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
      Ha({
        find: o0,
        type: this.type,
        getAttributes: (t) => {
          const e = gi(t[0]);
          return e ? {
            src: e.embedUrl,
            provider: e.provider,
            videoId: e.videoId
          } : !1;
        }
      }),
      Ha({
        find: s0,
        type: this.type,
        getAttributes: (t) => {
          const e = gi(t[0]);
          return e ? {
            src: e.embedUrl,
            provider: e.provider,
            videoId: e.videoId
          } : !1;
        }
      })
    ];
  }
}), c0 = ({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}) => ys({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}).flatMap((i) => i.commands), ys = ({
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
        icon: Eh
      },
      {
        title: e.richTextEditor.heading2,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleHeading({ level: 2 }).run();
        },
        icon: Oh
      },
      {
        title: e.richTextEditor.heading3,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleHeading({ level: 3 }).run();
        },
        icon: _h
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
        icon: Nh
      },
      {
        title: e.richTextEditor.orderedList,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleOrderedList().run();
        },
        icon: Th
      },
      {
        title: e.richTextEditor.taskList,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleTaskList().run();
        },
        icon: Ph
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
            i.type = "file", i.accept = oa.join(","), i.onchange = () => {
              const o = i.files?.[0];
              o && nd(r, o, n);
            }, i.click();
          },
          icon: Dh
        }
      ] : [],
      {
        title: e.richTextEditor.video,
        command: (r) => {
          const i = window.prompt(
            e.richTextEditor.videoUrlPrompt
          );
          i && (gi(i) ? r.commands.setVideoEmbed({ src: i }) : window.alert(e.richTextEditor.videoUrlInvalid));
        },
        icon: Mh
      },
      {
        title: e.richTextEditor.details,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).setDetails().run();
        },
        icon: qs
      },
      {
        title: e.richTextEditor.codeBlock,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleCodeBlock().run();
        },
        icon: Lh
      },
      {
        title: e.richTextEditor.quote,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleBlockquote().run();
        },
        icon: Ih
      },
      {
        title: e.richTextEditor.divider,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).setHorizontalRule().run();
        },
        icon: Rh
      }
    ]
  }
], rd = Pt(
  ({ items: t, groups: e, command: n }, r) => {
    const [i, o] = ae(0), s = ot(null), a = ot(null), c = e || [{ title: "", commands: t }], l = c.flatMap((b) => b.commands), u = Ye(
      (b) => {
        const y = l[b];
        y && n(y);
      },
      [l, n]
    ), d = Ye((b) => {
      const y = s.current;
      if (!y) return;
      const v = y.getBoundingClientRect(), w = b.getBoundingClientRect();
      w.top < v.top ? y.scrollTop += w.top - v.top : w.bottom > v.bottom && (y.scrollTop += w.bottom - v.bottom);
    }, []), f = Ye(() => {
      o((b) => b <= 0 ? l.length - 1 : b - 1);
    }, [l.length]), h = Ye(() => {
      o((b) => b >= l.length - 1 ? 0 : b + 1);
    }, [l.length]), p = Ye(() => {
      u(i);
    }, [i, u]);
    Ze(() => {
      a.current && d(a.current);
    }, [i, d]), Ze(() => {
      o(0);
    }, [t.length]), Ec(
      r,
      () => ({
        onKeyDown: ({ event: b }) => b.key === "ArrowUp" ? (b.preventDefault(), f(), !0) : b.key === "ArrowDown" ? (b.preventDefault(), h(), !0) : b.key === "Enter" ? (b.preventDefault(), p(), !0) : !1
      }),
      [f, h, p]
    );
    const g = (b, y) => {
      let v = 0;
      for (let w = 0; w < b; w++)
        v += c[w].commands.length;
      return v + y;
    };
    return /* @__PURE__ */ m(
      "div",
      {
        ref: s,
        className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
        children: c.map((b, y) => /* @__PURE__ */ x("div", { children: [
          /* @__PURE__ */ x("div", { className: "p-1", children: [
            e && b.title && /* @__PURE__ */ m("div", { className: "p-2", children: /* @__PURE__ */ m("p", { className: "text-sm font-medium tracking-wide text-f1-foreground-secondary", children: b.title }) }),
            b.commands.map((v, w) => {
              const k = g(y, w), A = k === i;
              return /* @__PURE__ */ x(
                "div",
                {
                  ref: A ? a : null,
                  className: z(
                    "flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover",
                    A && "bg-f1-background-secondary"
                  ),
                  onClick: () => {
                    o(k), u(k);
                  },
                  onMouseEnter: () => o(k),
                  children: [
                    v.emoji ? /* @__PURE__ */ m("span", { className: "text-base", children: v.emoji }) : v.icon ? /* @__PURE__ */ m(
                      _t,
                      {
                        icon: v.icon,
                        className: "text-f1-foreground-secondary"
                      }
                    ) : null,
                    /* @__PURE__ */ m("p", { className: "flex-grow text-sm font-medium text-f1-foreground", children: v.title })
                  ]
                },
                `${y}-${w}`
              );
            })
          ] }),
          e && y < c.length - 1 && /* @__PURE__ */ m("div", { className: "py-1", children: /* @__PURE__ */ m("div", { className: "h-[1px] w-full bg-f1-border-secondary" }) })
        ] }, y))
      }
    );
  }
);
rd.displayName = "CommandList";
const u0 = ({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}) => mn.create({
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
      $h({
        editor: this.editor,
        ...this.options.suggestion,
        items: ({ query: r }) => {
          const i = r.toLowerCase().trim(), o = c0({
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
            return /* @__PURE__ */ x(zh, { open: !0, modal: !1, children: [
              /* @__PURE__ */ m("div", { style: u }),
              /* @__PURE__ */ m(Bh, { asChild: !0, children: /* @__PURE__ */ m("div", { style: u }) }),
              /* @__PURE__ */ m(
                Vh,
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
                  children: /* @__PURE__ */ m(
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
              const l = ys({
                aiBlockConfig: t,
                translations: e,
                imageUploadConfig: n
              });
              let u = l;
              if (c.query && c.query.trim()) {
                const h = c.query.toLowerCase().trim();
                u = l.map((p) => ({
                  ...p,
                  commands: p.commands.filter((g) => g.title.toLowerCase().includes(h))
                })).filter((p) => p.commands.length > 0);
              }
              r = new jh(rd, {
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
              o = document.createElement("div"), document.body.appendChild(o), i = Fh.createRoot(o), i.render(
                /* @__PURE__ */ m(
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
              const l = ys({
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
                  /* @__PURE__ */ m(
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
}), d0 = ({
  node: t,
  deleteNode: e,
  updateAttributes: n
}) => {
  const r = gn(), [i, o] = ae(t.attrs.isOpen ?? !1), s = t.attrs.data;
  if (!s) return null;
  const a = () => {
    const d = !i;
    o(d), n({ isOpen: d });
  }, c = [
    {
      label: r.actions.delete,
      icon: eo,
      critical: !0,
      onClick: () => e()
    }
  ], l = (d) => s.users.find((f) => f.id === d), u = (d) => {
    try {
      const f = new Date(d);
      return Dn(f, "HH:mm");
    } catch (f) {
      return console.error(f), d;
    }
  };
  return /* @__PURE__ */ x(zr, { contentEditable: !1, children: [
    /* @__PURE__ */ x(
      "div",
      {
        className: "editor-transcript mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
        onClick: (d) => d.stopPropagation(),
        children: [
          /* @__PURE__ */ x("div", { className: "flex flex-row items-center justify-between gap-2", children: [
            /* @__PURE__ */ m("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ x("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ m("div", { className: "flex flex-row items-center gap-3", children: /* @__PURE__ */ m("p", { className: "text-f1-text-primary text-lg font-semibold", children: s.title }) }),
              /* @__PURE__ */ m("p", { className: "text-f1-text-secondary text-sm", children: s.messages.length })
            ] }) }),
            /* @__PURE__ */ x("div", { className: "flex flex-row items-center gap-1", children: [
              /* @__PURE__ */ m(
                Q,
                {
                  onClick: a,
                  variant: "outline",
                  hideLabel: !0,
                  label: i ? r.actions.collapse : r.actions.expand,
                  icon: i ? tu : qs,
                  size: "sm"
                }
              ),
              /* @__PURE__ */ m(to, { items: c, size: "sm" })
            ] })
          ] }),
          i && /* @__PURE__ */ m("div", { className: "scrollbar-macos text-f1-text-primary flex max-h-[500px] flex-col gap-4 overflow-y-auto", children: s.messages.map((d, f) => {
            const h = l(d.userId);
            return /* @__PURE__ */ x("div", { className: "flex flex-row gap-3", children: [
              h?.imageUrl && /* @__PURE__ */ m(
                Hh,
                {
                  size: "xs",
                  src: h.imageUrl,
                  firstName: h.fullname,
                  lastName: ""
                }
              ),
              /* @__PURE__ */ x("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ x("div", { className: "flex items-baseline gap-2", children: [
                  /* @__PURE__ */ m("span", { className: "text-f1-text-primary font-medium", children: h?.fullname || "Unknown User" }),
                  /* @__PURE__ */ m("span", { className: "text-f1-text-tertiary text-xs", children: u(d.dateTime) })
                ] }),
                /* @__PURE__ */ m("p", { className: "text-f1-text-secondary", children: d.text })
              ] })
            ] }, f);
          }) })
        ]
      }
    ),
    /* @__PURE__ */ m(Ys, { style: { display: "none" } })
  ] });
}, f0 = et.create({
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
    return Fr(d0);
  },
  addCommands() {
    return {
      insertTranscript: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: { data: t }
      })
    };
  }
}), h0 = f0, p0 = {
  warning: {
    icon: Uh,
    iconColor: "warning",
    textColor: "text-f1-foreground-warning"
  },
  critical: {
    icon: Wh,
    iconColor: "critical",
    textColor: "text-f1-foreground-critical"
  }
};
function Lo({
  item: t,
  collapse: e = !1
}) {
  const { value: n } = t;
  switch (n.type) {
    case "text":
      return /* @__PURE__ */ m("span", { children: n.content });
    case "avatar":
      return /* @__PURE__ */ x("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ m(nu, { avatar: n.variant, size: "xs" }),
        n.text && /* @__PURE__ */ m("span", { children: n.text })
      ] });
    case "status":
      return /* @__PURE__ */ m(Yh, { text: n.label, variant: n.variant });
    case "list":
      return /* @__PURE__ */ m(
        Gh,
        {
          type: n.variant,
          avatars: n.avatars,
          size: "xs",
          max: 3
        }
      );
    case "data-list":
      return e ? /* @__PURE__ */ x("div", { className: "flex items-center justify-center gap-1 font-medium", children: [
        n.data[0],
        n.data.length > 1 && /* @__PURE__ */ x("span", { className: "tabular-nums text-f1-foreground-secondary", children: [
          "+",
          n.data.length - 1
        ] })
      ] }) : /* @__PURE__ */ m("div", { className: "flex flex-col gap-1.5", children: n.data.map((r) => /* @__PURE__ */ m("span", { children: r }, r)) });
    case "tag-list":
      return e ? /* @__PURE__ */ x("div", { className: "flex flex-wrap items-center justify-center gap-1 font-medium", children: [
        /* @__PURE__ */ m(Wa, { text: n.tags[0] }),
        n.tags.length > 1 && /* @__PURE__ */ x("span", { className: "tabular-nums text-f1-foreground-secondary", children: [
          "+",
          n.tags.length - 1
        ] })
      ] }) : /* @__PURE__ */ m(
        "div",
        {
          className: z(
            "flex flex-col gap-1 [&>div]:w-fit",
            n.tags.length > 1 && "-mt-[3px]"
          ),
          children: n.tags.map((r) => /* @__PURE__ */ m(Wa, { text: r }, r))
        }
      );
    case "dot-tag":
      return /* @__PURE__ */ m(Kh, { text: n.label, color: n.color });
    case "date": {
      if (n.icon === void 0)
        return /* @__PURE__ */ m("span", { children: n.formattedDate });
      const { icon: r, iconColor: i, textColor: o } = p0[n.icon];
      return /* @__PURE__ */ x("div", { className: "flex items-center justify-center gap-0.5 font-medium", children: [
        /* @__PURE__ */ m(_t, { icon: r, color: i }),
        /* @__PURE__ */ m("span", { className: o, children: n.formattedDate })
      ] });
    }
    case "progress-bar": {
      const r = n.color ? fe(n.color) : fe("categorical-1"), i = n.max && n.max > 0 ? n.max : 100, o = Math.min(Math.max(0, n.value), i), s = o / i * 100;
      return /* @__PURE__ */ x("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ m("div", { className: "min-w-16", children: /* @__PURE__ */ m(
          jc,
          {
            color: r,
            value: s,
            max: 100,
            "aria-label": t.label,
            "aria-valuemin": 0,
            "aria-valuemax": i,
            "aria-valuenow": o,
            "aria-valuetext": n.label
          }
        ) }),
        n.label && /* @__PURE__ */ m("span", { className: "whitespace-nowrap text-sm font-medium", children: n.label })
      ] });
    }
  }
}
const m0 = (t) => t?.type !== "copy", g0 = (t) => t?.type === "copy";
function y0({ item: t }) {
  const [e, n] = ae(!1), r = t.value.type === "data-list" && t.value.data.length > 1 || t.value.type === "tag-list" && t.value.tags.length > 1, i = !!t.actions?.length, o = i || r, s = (a, c) => {
    if (c)
      return c;
    let l;
    switch (a.type) {
      case "text":
        return a.content;
      case "avatar":
        return a.text;
      case "status":
      case "dot-tag":
        return a.label;
      case "date":
        return a.formattedDate;
      case "tag-list":
        return a.tags.join(", ");
      case "data-list":
        return a.data.join(", ");
      case "list":
        return "";
      case "progress-bar": {
        const u = typeof a.max == "number" && a.max > 0 ? a.max : 100;
        return a.label ?? `${a.value}/${u}`;
      }
      default:
        return l = a, l;
    }
  };
  return /* @__PURE__ */ x("div", { className: "flex h-8 items-center gap-2", children: [
    /* @__PURE__ */ x(
      "div",
      {
        className: z(
          "flex w-28 items-center gap-1 truncate text-f1-foreground-secondary md:w-fit",
          t.hideLabel && "md:hidden"
        ),
        children: [
          t.label,
          t.info && /* @__PURE__ */ m("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ m(
            Ua,
            {
              label: t.info.title,
              description: t.info.description,
              children: /* @__PURE__ */ m(_t, { icon: qh, size: "sm" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ x(
      "div",
      {
        role: "button",
        tabIndex: o ? 0 : -1,
        onMouseEnter: () => o && n(!0),
        onMouseLeave: () => o && n(!1),
        onFocus: () => o && n(!0),
        onBlur: () => o && n(!1),
        className: "relative flex h-5 w-fit items-center hover:cursor-default",
        "aria-label": `${t.label} actions`,
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              className: z(
                "hidden font-medium text-f1-foreground md:block",
                !i && "block"
              ),
              children: /* @__PURE__ */ m(Lo, { item: t, collapse: !0 })
            }
          ),
          i && /* @__PURE__ */ m("div", { className: "w-full md:hidden", children: /* @__PURE__ */ m(
            ru,
            {
              items: t.actions?.filter(m0).map((a) => ({
                label: a.label,
                icon: a.icon,
                onClick: a.onClick
              })) ?? [],
              children: /* @__PURE__ */ m(Lo, { item: t, collapse: !0 })
            }
          ) }),
          /* @__PURE__ */ m(eu, { children: e && o && /* @__PURE__ */ x(
            tn.div,
            {
              className: z(
                "absolute -left-1.5 -top-1.5 z-50 hidden max-h-[80vh] items-start justify-center gap-1.5 overflow-y-auto whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex",
                !r && "h-8 items-start",
                i ? "pr-1" : "pr-1.5"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.1 },
              children: [
                /* @__PURE__ */ m(
                  "div",
                  {
                    className: z(
                      "flex h-6 items-center font-medium text-f1-foreground",
                      r && "h-auto items-start pt-0.5"
                    ),
                    children: /* @__PURE__ */ m(Lo, { item: t })
                  }
                ),
                i && /* @__PURE__ */ m(
                  tn.div,
                  {
                    className: "flex gap-1",
                    initial: { x: -16 },
                    animate: { x: 0 },
                    exit: { x: -16 },
                    transition: { duration: 0.1 },
                    children: t.actions?.map((a, c) => g0(a) ? /* @__PURE__ */ m(
                      Xh,
                      {
                        valueToCopy: s(
                          t.value,
                          a.copyValue
                        )
                      },
                      `copy-${c}`
                    ) : /* @__PURE__ */ m(Ua, { label: a.label, children: /* @__PURE__ */ m(
                      Q,
                      {
                        size: "sm",
                        variant: "neutral",
                        label: a.label,
                        hideLabel: !0,
                        icon: a.icon,
                        onClick: a.onClick
                      },
                      `action-${c}`
                    ) }, `tooltip-${c}`))
                  }
                )
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
const b0 = Sf(function({ items: e }) {
  const n = e.filter((r) => typeof r == "object");
  return /* @__PURE__ */ m("div", { className: "flex flex-col items-start gap-x-3 gap-y-0 md:flex-row md:flex-wrap md:items-center", children: n.map((r, i) => /* @__PURE__ */ x(Bt, { children: [
    /* @__PURE__ */ m(y0, { item: r }, `item-${i}`),
    i < n.length - 1 && /* @__PURE__ */ m(
      "div",
      {
        className: "hidden h-4 w-[1px] bg-f1-border md:block"
      },
      `separator-${i}`
    )
  ] })) });
}), bs = Gi("Metadata", b0), at = () => /* @__PURE__ */ new Map(), vs = (t) => {
  const e = at();
  return t.forEach((n, r) => {
    e.set(r, n);
  }), e;
}, It = (t, e, n) => {
  let r = t.get(e);
  return r === void 0 && t.set(e, r = n()), r;
}, v0 = (t, e) => {
  const n = [];
  for (const [r, i] of t)
    n.push(e(i, r));
  return n;
}, w0 = (t, e) => {
  for (const [n, r] of t)
    if (e(r, n))
      return !0;
  return !1;
}, un = () => /* @__PURE__ */ new Set(), Io = (t) => t[t.length - 1], x0 = (t, e) => {
  for (let n = 0; n < e.length; n++)
    t.push(e[n]);
}, dn = Array.from, S0 = (t, e) => {
  for (let n = 0; n < t.length; n++)
    if (e(t[n], n, t))
      return !0;
  return !1;
}, ws = Array.isArray;
class id {
  constructor() {
    this._observers = at();
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
      un
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
    return dn((this._observers.get(e) || at()).values()).forEach((r) => r(...n));
  }
  destroy() {
    this._observers = at();
  }
}
const Tt = Math.floor, yi = Math.abs, Vn = (t, e) => t < e ? t : e, Vt = (t, e) => t > e ? t : e, od = (t) => t !== 0 ? t < 0 : 1 / t < 0, Ul = 1, Kl = 2, Ro = 4, $o = 8, Or = 32, Ct = 64, Ne = 128, k0 = 1 << 29, co = 31, xs = 63, sn = 127, A0 = 2147483647, sd = Number.MAX_SAFE_INTEGER, C0 = Number.isInteger || ((t) => typeof t == "number" && isFinite(t) && Tt(t) === t), E0 = String.fromCharCode, O0 = (t) => t.toLowerCase(), _0 = /^\s*/g, N0 = (t) => t.replace(_0, ""), T0 = /([A-Z])/g, Gl = (t, e) => N0(t.replace(T0, (n) => `${e}${O0(n)}`)), P0 = (t) => {
  const e = unescape(encodeURIComponent(t)), n = e.length, r = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    r[i] = /** @type {number} */
    e.codePointAt(i);
  return r;
}, _r = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), D0 = (t) => _r.encode(t), M0 = _r ? D0 : P0;
let br = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
br && br.decode(new Uint8Array()).length === 1 && (br = null);
class Yr {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const qr = () => new Yr(), L0 = (t) => {
  const e = qr();
  return t(e), it(e);
}, I0 = (t) => {
  let e = t.cpos;
  for (let n = 0; n < t.bufs.length; n++)
    e += t.bufs[n].length;
  return e;
}, it = (t) => {
  const e = new Uint8Array(I0(t));
  let n = 0;
  for (let r = 0; r < t.bufs.length; r++) {
    const i = t.bufs[r];
    e.set(i, n), n += i.length;
  }
  return e.set(new Uint8Array(t.cbuf.buffer, 0, t.cpos), n), e;
}, R0 = (t, e) => {
  const n = t.cbuf.length;
  n - t.cpos < e && (t.bufs.push(new Uint8Array(t.cbuf.buffer, 0, t.cpos)), t.cbuf = new Uint8Array(Vt(n, e) * 2), t.cpos = 0);
}, de = (t, e) => {
  const n = t.cbuf.length;
  t.cpos === n && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(n * 2), t.cpos = 0), t.cbuf[t.cpos++] = e;
}, Ss = de, W = (t, e) => {
  for (; e > sn; )
    de(t, Ne | sn & e), e = Tt(e / 128);
  de(t, sn & e);
}, sa = (t, e) => {
  const n = od(e);
  for (n && (e = -e), de(t, (e > xs ? Ne : 0) | (n ? Ct : 0) | xs & e), e = Tt(e / 64); e > 0; )
    de(t, (e > sn ? Ne : 0) | sn & e), e = Tt(e / 128);
}, ks = new Uint8Array(3e4), $0 = ks.length / 3, j0 = (t, e) => {
  if (e.length < $0) {
    const n = _r.encodeInto(e, ks).written || 0;
    W(t, n);
    for (let r = 0; r < n; r++)
      de(t, ks[r]);
  } else
    ze(t, M0(e));
}, F0 = (t, e) => {
  const n = unescape(encodeURIComponent(e)), r = n.length;
  W(t, r);
  for (let i = 0; i < r; i++)
    de(
      t,
      /** @type {number} */
      n.codePointAt(i)
    );
}, On = _r && /** @type {any} */
_r.encodeInto ? j0 : F0, uo = (t, e) => {
  const n = t.cbuf.length, r = t.cpos, i = Vn(n - r, e.length), o = e.length - i;
  t.cbuf.set(e.subarray(0, i), r), t.cpos += i, o > 0 && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(Vt(n * 2, o)), t.cbuf.set(e.subarray(i)), t.cpos = o);
}, ze = (t, e) => {
  W(t, e.byteLength), uo(t, e);
}, aa = (t, e) => {
  R0(t, e);
  const n = new DataView(t.cbuf.buffer, t.cpos, e);
  return t.cpos += e, n;
}, z0 = (t, e) => aa(t, 4).setFloat32(0, e, !1), B0 = (t, e) => aa(t, 8).setFloat64(0, e, !1), V0 = (t, e) => (
  /** @type {any} */
  aa(t, 8).setBigInt64(0, e, !1)
), Yl = new DataView(new ArrayBuffer(4)), H0 = (t) => (Yl.setFloat32(0, t), Yl.getFloat32(0) === t), Hn = (t, e) => {
  switch (typeof e) {
    case "string":
      de(t, 119), On(t, e);
      break;
    case "number":
      C0(e) && yi(e) <= A0 ? (de(t, 125), sa(t, e)) : H0(e) ? (de(t, 124), z0(t, e)) : (de(t, 123), B0(t, e));
      break;
    case "bigint":
      de(t, 122), V0(t, e);
      break;
    case "object":
      if (e === null)
        de(t, 126);
      else if (ws(e)) {
        de(t, 117), W(t, e.length);
        for (let n = 0; n < e.length; n++)
          Hn(t, e[n]);
      } else if (e instanceof Uint8Array)
        de(t, 116), ze(t, e);
      else {
        de(t, 118);
        const n = Object.keys(e);
        W(t, n.length);
        for (let r = 0; r < n.length; r++) {
          const i = n[r];
          On(t, i), Hn(t, e[i]);
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
class ql extends Yr {
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
    this.s === e ? this.count++ : (this.count > 0 && W(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
  }
}
const Xl = (t) => {
  t.count > 0 && (sa(t.encoder, t.count === 1 ? t.s : -t.s), t.count > 1 && W(t.encoder, t.count - 2));
};
class bi {
  constructor() {
    this.encoder = new Yr(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.s === e ? this.count++ : (Xl(this), this.count = 1, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Xl(this), it(this.encoder);
  }
}
const Jl = (t) => {
  if (t.count > 0) {
    const e = t.diff * 2 + (t.count === 1 ? 0 : 1);
    sa(t.encoder, e), t.count > 1 && W(t.encoder, t.count - 2);
  }
};
class jo {
  constructor() {
    this.encoder = new Yr(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.diff === e - this.s ? (this.s = e, this.count++) : (Jl(this), this.count = 1, this.diff = e - this.s, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Jl(this), it(this.encoder);
  }
}
class W0 {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new bi();
  }
  /**
   * @param {string} string
   */
  write(e) {
    this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
  }
  toUint8Array() {
    const e = new Yr();
    return this.sarr.push(this.s), this.s = "", On(e, this.sarr.join("")), uo(e, this.lensE.toUint8Array()), it(e);
  }
}
const Ht = (t) => new Error(t), lt = () => {
  throw Ht("Method unimplemented");
}, Ie = () => {
  throw Ht("Unexpected case");
}, ad = Ht("Unexpected end of array"), ld = Ht("Integer out of Range");
class fo {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(e) {
    this.arr = e, this.pos = 0;
  }
}
const la = (t) => new fo(t), U0 = (t) => t.pos !== t.arr.length, K0 = (t, e) => {
  const n = new Uint8Array(t.arr.buffer, t.pos + t.arr.byteOffset, e);
  return t.pos += e, n;
}, Ke = (t) => K0(t, Z(t)), Nr = (t) => t.arr[t.pos++], Z = (t) => {
  let e = 0, n = 1;
  const r = t.arr.length;
  for (; t.pos < r; ) {
    const i = t.arr[t.pos++];
    if (e = e + (i & sn) * n, n *= 128, i < Ne)
      return e;
    if (e > sd)
      throw ld;
  }
  throw ad;
}, ca = (t) => {
  let e = t.arr[t.pos++], n = e & xs, r = 64;
  const i = (e & Ct) > 0 ? -1 : 1;
  if ((e & Ne) === 0)
    return i * n;
  const o = t.arr.length;
  for (; t.pos < o; ) {
    if (e = t.arr[t.pos++], n = n + (e & sn) * r, r *= 128, e < Ne)
      return i * n;
    if (n > sd)
      throw ld;
  }
  throw ad;
}, G0 = (t) => {
  let e = Z(t);
  if (e === 0)
    return "";
  {
    let n = String.fromCodePoint(Nr(t));
    if (--e < 100)
      for (; e--; )
        n += String.fromCodePoint(Nr(t));
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
}, Y0 = (t) => (
  /** @type any */
  br.decode(Ke(t))
), As = br ? Y0 : G0, ua = (t, e) => {
  const n = new DataView(t.arr.buffer, t.arr.byteOffset + t.pos, e);
  return t.pos += e, n;
}, q0 = (t) => ua(t, 4).getFloat32(0, !1), X0 = (t) => ua(t, 8).getFloat64(0, !1), J0 = (t) => (
  /** @type {any} */
  ua(t, 8).getBigInt64(0, !1)
), Z0 = [
  (t) => {
  },
  // CASE 127: undefined
  (t) => null,
  // CASE 126: null
  ca,
  // CASE 125: integer
  q0,
  // CASE 124: float32
  X0,
  // CASE 123: float64
  J0,
  // CASE 122: bigint
  (t) => !1,
  // CASE 121: boolean (false)
  (t) => !0,
  // CASE 120: boolean (true)
  As,
  // CASE 119: string
  (t) => {
    const e = Z(t), n = {};
    for (let r = 0; r < e; r++) {
      const i = As(t);
      n[i] = Ri(t);
    }
    return n;
  },
  (t) => {
    const e = Z(t), n = [];
    for (let r = 0; r < e; r++)
      n.push(Ri(t));
    return n;
  },
  Ke
  // CASE 116: Uint8Array
], Ri = (t) => Z0[127 - Nr(t)](t);
class Zl extends fo {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(e, n) {
    super(e), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), U0(this) ? this.count = Z(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class vi extends fo {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    super(e), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = ca(this);
      const e = od(this.s);
      this.count = 1, e && (this.s = -this.s, this.count = Z(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class Fo extends fo {
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
      const e = ca(this), n = e & 1;
      this.diff = Tt(e / 2), this.count = 1, n && (this.count = Z(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class Q0 {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    this.decoder = new vi(e), this.str = As(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const e = this.spos + this.decoder.read(), n = this.str.slice(this.spos, e);
    return this.spos = e, n;
  }
}
const ew = crypto.getRandomValues.bind(crypto), tw = Math.random, cd = () => ew(new Uint32Array(1))[0], nw = (t) => t[Tt(tw() * t.length)], rw = "10000000-1000-4000-8000" + -1e11, iw = () => rw.replace(
  /[018]/g,
  /** @param {number} c */
  (t) => (t ^ cd() & 15 >> t / 4).toString(16)
), ow = Date.now, Ql = (t) => (
  /** @type {Promise<T>} */
  new Promise(t)
);
Promise.all.bind(Promise);
const ec = (t) => t === void 0 ? null : t;
class sw {
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
let ud = new sw(), aw = !0;
try {
  typeof localStorage < "u" && localStorage && (ud = localStorage, aw = !1);
} catch {
}
const lw = ud, cw = Object.assign, dd = Object.keys, uw = (t, e) => {
  for (const n in t)
    e(t[n], n);
}, tc = (t) => dd(t).length, dw = (t) => {
  for (const e in t)
    return !1;
  return !0;
}, fd = (t, e) => {
  for (const n in t)
    if (!e(t[n], n))
      return !1;
  return !0;
}, fw = (t, e) => Object.prototype.hasOwnProperty.call(t, e), hw = (t, e) => t === e || tc(t) === tc(e) && fd(t, (n, r) => (n !== void 0 || fw(e, r)) && e[r] === n), pw = Object.freeze, hd = (t) => {
  for (const e in t) {
    const n = t[e];
    (typeof n == "object" || typeof n == "function") && hd(t[e]);
  }
  return pw(t);
}, da = (t, e, n = 0) => {
  try {
    for (; n < t.length; n++)
      t[n](...e);
  } finally {
    n < t.length && da(t, e, n + 1);
  }
}, mw = (t, e) => e.includes(t), Wn = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", pd = typeof window < "u" && typeof document < "u" && !Wn;
let pt;
const gw = () => {
  if (pt === void 0)
    if (Wn) {
      pt = at();
      const t = process.argv;
      let e = null;
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        r[0] === "-" ? (e !== null && pt.set(e, ""), e = r) : e !== null && (pt.set(e, r), e = null);
      }
      e !== null && pt.set(e, "");
    } else typeof location == "object" ? (pt = at(), (location.search || "?").slice(1).split("&").forEach((t) => {
      if (t.length !== 0) {
        const [e, n] = t.split("=");
        pt.set(`--${Gl(e, "-")}`, n), pt.set(`-${Gl(e, "-")}`, n);
      }
    })) : pt = at();
  return pt;
}, Cs = (t) => gw().has(t), $i = (t) => ec(Wn ? process.env[t.toUpperCase().replaceAll("-", "_")] : lw.getItem(t)), md = (t) => Cs("--" + t) || $i(t) !== null;
md("production");
const yw = Wn && mw(process.env.FORCE_COLOR, ["true", "1", "2"]), bw = yw || !Cs("--no-colors") && // @todo deprecate --no-colors
!md("no-color") && (!Wn || process.stdout.isTTY) && (!Wn || Cs("--color") || $i("COLORTERM") !== null || ($i("TERM") || "").includes("color")), vw = (t) => {
  let e = "";
  for (let n = 0; n < t.byteLength; n++)
    e += E0(t[n]);
  return btoa(e);
}, ww = (t) => Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("base64"), xw = pd ? vw : ww, Sw = (t) => L0((e) => Hn(e, t));
class kw {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(e, n) {
    this.left = e, this.right = n;
  }
}
const xt = (t, e) => new kw(t, e), Aw = (
  /** @type {Document} */
  typeof document < "u" ? document : {}
);
typeof DOMParser < "u" && new DOMParser();
const Cw = (t) => v0(t, (e, n) => `${n}:${e};`).join(""), Ew = (t) => class {
  /**
   * @param {number} timeoutId
   */
  constructor(n) {
    this._ = n;
  }
  destroy() {
    t(this._);
  }
}, Ow = Ew(clearTimeout), gd = (t, e) => new Ow(setTimeout(e, t)), Rt = Symbol, yd = Rt(), bd = Rt(), _w = Rt(), Nw = Rt(), Tw = Rt(), vd = Rt(), Pw = Rt(), fa = Rt(), Dw = Rt(), Mw = (t) => {
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
}, Lw = {
  [yd]: xt("font-weight", "bold"),
  [bd]: xt("font-weight", "normal"),
  [_w]: xt("color", "blue"),
  [Tw]: xt("color", "green"),
  [Nw]: xt("color", "grey"),
  [vd]: xt("color", "red"),
  [Pw]: xt("color", "purple"),
  [fa]: xt("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [Dw]: xt("color", "black")
}, Iw = (t) => {
  t.length === 1 && t[0]?.constructor === Function && (t = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  t[0]());
  const e = [], n = [], r = at();
  let i = [], o = 0;
  for (; o < t.length; o++) {
    const s = t[o], a = Lw[s];
    if (a !== void 0)
      r.set(a.left, a.right);
    else {
      if (s === void 0)
        break;
      if (s.constructor === String || s.constructor === Number) {
        const c = Cw(r);
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
}, wd = bw ? Iw : Mw, Rw = (...t) => {
  console.log(...wd(t)), Sd.forEach((e) => e.print(t));
}, xd = (...t) => {
  console.warn(...wd(t)), t.unshift(fa), Sd.forEach((e) => e.print(t));
}, Sd = un(), kd = (t) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: t
}), $w = (t, e) => kd(() => {
  let n;
  do
    n = t.next();
  while (!n.done && !e(n.value));
  return n;
}), zo = (t, e) => kd(() => {
  const { done: n, value: r } = t.next();
  return { done: n, value: n ? void 0 : e(r) };
});
class ha {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(e, n) {
    this.clock = e, this.len = n;
  }
}
class Qn {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const Wt = (t, e, n) => e.clients.forEach((r, i) => {
  const o = (
    /** @type {Array<GC|Item>} */
    t.doc.store.clients.get(i)
  );
  if (o != null) {
    const s = o[o.length - 1], a = s.id.clock + s.length;
    for (let c = 0, l = r[c]; c < r.length && l.clock < a; l = r[++c])
      Pd(t, o, l.clock, l.len, n);
  }
}), jw = (t, e) => {
  let n = 0, r = t.length - 1;
  for (; n <= r; ) {
    const i = Tt((n + r) / 2), o = t[i], s = o.clock;
    if (s <= e) {
      if (e < s + o.len)
        return i;
      n = i + 1;
    } else
      r = i - 1;
  }
  return null;
}, er = (t, e) => {
  const n = t.clients.get(e.client);
  return n !== void 0 && jw(n, e.clock) !== null;
}, pa = (t) => {
  t.clients.forEach((e) => {
    e.sort((i, o) => i.clock - o.clock);
    let n, r;
    for (n = 1, r = 1; n < e.length; n++) {
      const i = e[r - 1], o = e[n];
      i.clock + i.len >= o.clock ? i.len = Vt(i.len, o.clock + o.len - i.clock) : (r < n && (e[r] = o), r++);
    }
    e.length = r;
  });
}, Es = (t) => {
  const e = new Qn();
  for (let n = 0; n < t.length; n++)
    t[n].clients.forEach((r, i) => {
      if (!e.clients.has(i)) {
        const o = r.slice();
        for (let s = n + 1; s < t.length; s++)
          x0(o, t[s].clients.get(i) || []);
        e.clients.set(i, o);
      }
    });
  return pa(e), e;
}, Tr = (t, e, n, r) => {
  It(t.clients, e, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new ha(n, r));
}, Ad = () => new Qn(), Fw = (t) => {
  const e = Ad();
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
        i.push(new ha(a, c));
      }
    }
    i.length > 0 && e.clients.set(r, i);
  }), e;
}, ma = (t, e) => {
  W(t.restEncoder, e.clients.size), dn(e.clients.entries()).sort((n, r) => r[0] - n[0]).forEach(([n, r]) => {
    t.resetDsCurVal(), W(t.restEncoder, n);
    const i = r.length;
    W(t.restEncoder, i);
    for (let o = 0; o < i; o++) {
      const s = r[o];
      t.writeDsClock(s.clock), t.writeDsLen(s.len);
    }
  });
}, zw = (t) => {
  const e = new Qn(), n = Z(t.restDecoder);
  for (let r = 0; r < n; r++) {
    t.resetDsCurVal();
    const i = Z(t.restDecoder), o = Z(t.restDecoder);
    if (o > 0) {
      const s = It(e.clients, i, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let a = 0; a < o; a++)
        s.push(new ha(t.readDsClock(), t.readDsLen()));
    }
  }
  return e;
}, nc = (t, e, n) => {
  const r = new Qn(), i = Z(t.restDecoder);
  for (let o = 0; o < i; o++) {
    t.resetDsCurVal();
    const s = Z(t.restDecoder), a = Z(t.restDecoder), c = n.clients.get(s) || [], l = se(n, s);
    for (let u = 0; u < a; u++) {
      const d = t.readDsClock(), f = d + t.readDsLen();
      if (d < l) {
        l < f && Tr(r, s, l, f - l);
        let h = ct(c, d), p = c[h];
        for (!p.deleted && p.id.clock < d && (c.splice(h + 1, 0, Wi(e, p, d - p.id.clock)), h++); h < c.length && (p = c[h++], p.id.clock < f); )
          p.deleted || (f < p.id.clock + p.length && c.splice(h, 0, Wi(e, p, f - p.id.clock)), p.delete(e));
      } else
        Tr(r, s, d, f - d);
    }
  }
  if (r.clients.size > 0) {
    const o = new ho();
    return W(o.restEncoder, 0), ma(o, r), o.toUint8Array();
  }
  return null;
}, Cd = cd;
class vn extends id {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: e = iw(), collectionid: n = null, gc: r = !0, gcFilter: i = () => !0, meta: o = null, autoLoad: s = !1, shouldLoad: a = !0 } = {}) {
    super(), this.gc = r, this.gcFilter = i, this.clientID = Cd(), this.guid = e, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new Nd(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = a, this.autoLoad = s, this.meta = o, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = Ql((l) => {
      this.on("load", () => {
        this.isLoaded = !0, l(this);
      });
    });
    const c = () => Ql((l) => {
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
    return new Set(dn(this.subdocs).map((e) => e.guid));
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
    he
  )) {
    const r = It(this.share, e, () => {
      const o = new n();
      return o._integrate(this, null), o;
    }), i = r.constructor;
    if (n !== he && i !== n)
      if (i === he) {
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
      this.get(e, Tn)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(e = "") {
    return this.get(e, Ut);
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
      this.get(e, Un)
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
      this.get(e, ve)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(e = "") {
    return this.get(e, fn);
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
    this.isDestroyed = !0, dn(this.subdocs).forEach((n) => n.destroy());
    const e = this._item;
    if (e !== null) {
      this._item = null;
      const n = (
        /** @type {ContentDoc} */
        e.content
      );
      n.doc = new vn({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = e, Y(
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
class Bw {
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
class ji extends Bw {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(e) {
    super(e), this.keys = [], Z(e), this.keyClockDecoder = new Fo(Ke(e)), this.clientDecoder = new vi(Ke(e)), this.leftClockDecoder = new Fo(Ke(e)), this.rightClockDecoder = new Fo(Ke(e)), this.infoDecoder = new Zl(Ke(e), Nr), this.stringDecoder = new Q0(Ke(e)), this.parentInfoDecoder = new Zl(Ke(e), Nr), this.typeRefDecoder = new vi(Ke(e)), this.lenDecoder = new vi(Ke(e));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new _n(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new _n(this.clientDecoder.read(), this.rightClockDecoder.read());
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
    return Ri(this.restDecoder);
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
    return Ri(this.restDecoder);
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
class Vw {
  constructor() {
    this.restEncoder = qr();
  }
  toUint8Array() {
    return it(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    W(this.restEncoder, e);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    W(this.restEncoder, e);
  }
}
class Hw extends Vw {
  /**
   * @param {ID} id
   */
  writeLeftID(e) {
    W(this.restEncoder, e.client), W(this.restEncoder, e.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(e) {
    W(this.restEncoder, e.client), W(this.restEncoder, e.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(e) {
    W(this.restEncoder, e);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(e) {
    Ss(this.restEncoder, e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    On(this.restEncoder, e);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(e) {
    W(this.restEncoder, e ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(e) {
    W(this.restEncoder, e);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(e) {
    W(this.restEncoder, e);
  }
  /**
   * @param {any} any
   */
  writeAny(e) {
    Hn(this.restEncoder, e);
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
    On(this.restEncoder, JSON.stringify(e));
  }
  /**
   * @param {string} key
   */
  writeKey(e) {
    On(this.restEncoder, e);
  }
}
class Ww {
  constructor() {
    this.restEncoder = qr(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return it(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    const n = e - this.dsCurrVal;
    this.dsCurrVal = e, W(this.restEncoder, n);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    e === 0 && Ie(), W(this.restEncoder, e - 1), this.dsCurrVal += e;
  }
}
class ho extends Ww {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new jo(), this.clientEncoder = new bi(), this.leftClockEncoder = new jo(), this.rightClockEncoder = new jo(), this.infoEncoder = new ql(Ss), this.stringEncoder = new W0(), this.parentInfoEncoder = new ql(Ss), this.typeRefEncoder = new bi(), this.lenEncoder = new bi();
  }
  toUint8Array() {
    const e = qr();
    return W(e, 0), ze(e, this.keyClockEncoder.toUint8Array()), ze(e, this.clientEncoder.toUint8Array()), ze(e, this.leftClockEncoder.toUint8Array()), ze(e, this.rightClockEncoder.toUint8Array()), ze(e, it(this.infoEncoder)), ze(e, this.stringEncoder.toUint8Array()), ze(e, it(this.parentInfoEncoder)), ze(e, this.typeRefEncoder.toUint8Array()), ze(e, this.lenEncoder.toUint8Array()), uo(e, it(this.restEncoder)), it(e);
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
    Hn(this.restEncoder, e);
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
    Hn(this.restEncoder, e);
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
const Uw = (t, e, n, r) => {
  r = Vt(r, e[0].id.clock);
  const i = ct(e, r);
  W(t.restEncoder, e.length - i), t.writeClient(n), W(t.restEncoder, r);
  const o = e[i];
  o.write(t, r - o.id.clock);
  for (let s = i + 1; s < e.length; s++)
    e[s].write(t, 0);
}, Ed = (t, e, n) => {
  const r = /* @__PURE__ */ new Map();
  n.forEach((i, o) => {
    se(e, o) > i && r.set(o, i);
  }), po(e).forEach((i, o) => {
    n.has(o) || r.set(o, 0);
  }), W(t.restEncoder, r.size), dn(r.entries()).sort((i, o) => o[0] - i[0]).forEach(([i, o]) => {
    Uw(
      t,
      /** @type {Array<GC|Item>} */
      e.clients.get(i),
      i,
      o
    );
  });
}, Kw = (t, e) => {
  const n = at(), r = Z(t.restDecoder);
  for (let i = 0; i < r; i++) {
    const o = Z(t.restDecoder), s = new Array(o), a = t.readClient();
    let c = Z(t.restDecoder);
    n.set(a, { i: 0, refs: s });
    for (let l = 0; l < o; l++) {
      const u = t.readInfo();
      switch (co & u) {
        case 0: {
          const d = t.readLen();
          s[l] = new Je(F(a, c), d), c += d;
          break;
        }
        case 10: {
          const d = Z(t.restDecoder);
          s[l] = new nt(F(a, c), d), c += d;
          break;
        }
        default: {
          const d = (u & (Ct | Ne)) === 0, f = new G(
            F(a, c),
            null,
            // left
            (u & Ne) === Ne ? t.readLeftID() : null,
            // origin
            null,
            // right
            (u & Ct) === Ct ? t.readRightID() : null,
            // right origin
            d ? t.readParentInfo() ? e.get(t.readString()) : t.readLeftID() : null,
            // parent
            d && (u & Or) === Or ? t.readString() : null,
            // parentSub
            Qd(t, u)
            // item content
          );
          s[l] = f, c += f.length;
        }
      }
    }
  }
  return n;
}, Gw = (t, e, n) => {
  const r = [];
  let i = dn(n.keys()).sort((h, p) => h - p);
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
  const a = new Nd(), c = /* @__PURE__ */ new Map(), l = (h, p) => {
    const g = c.get(h);
    (g == null || g > p) && c.set(h, p);
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
      const p = h.id.client, g = n.get(p);
      g ? (g.i--, a.clients.set(p, g.refs.slice(g.i)), n.delete(p), g.i = 0, g.refs = []) : a.clients.set(p, [h]), i = i.filter((b) => b !== p);
    }
    r.length = 0;
  };
  for (; ; ) {
    if (u.constructor !== nt) {
      const p = It(d, u.id.client, () => se(e, u.id.client)) - u.id.clock;
      if (p < 0)
        r.push(u), l(u.id.client, u.id.clock - 1), f();
      else {
        const g = u.getMissing(t, e);
        if (g !== null) {
          r.push(u);
          const b = n.get(
            /** @type {number} */
            g
          ) || { refs: [], i: 0 };
          if (b.refs.length === b.i)
            l(
              /** @type {number} */
              g,
              se(e, g)
            ), f();
          else {
            u = b.refs[b.i++];
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
    const h = new ho();
    return Ed(h, a, /* @__PURE__ */ new Map()), W(h.restEncoder, 0), { missing: c, update: h.toUint8Array() };
  }
  return null;
}, Yw = (t, e) => Ed(t, e.doc.store, e.beforeState), qw = (t, e, n, r = new ji(t)) => Y(e, (i) => {
  i.local = !1;
  let o = !1;
  const s = i.doc, a = s.store, c = Kw(r, s), l = Gw(i, a, c), u = a.pendingStructs;
  if (u) {
    for (const [f, h] of u.missing)
      if (h < se(a, f)) {
        o = !0;
        break;
      }
    if (l) {
      for (const [f, h] of l.missing) {
        const p = u.missing.get(f);
        (p == null || p > h) && u.missing.set(f, h);
      }
      u.update = dc([u.update, l.update]);
    }
  } else
    a.pendingStructs = l;
  const d = nc(r, i, a);
  if (a.pendingDs) {
    const f = new ji(la(a.pendingDs));
    Z(f.restDecoder);
    const h = nc(f, i, a);
    d && h ? a.pendingDs = dc([d, h]) : a.pendingDs = d || h;
  } else
    a.pendingDs = d;
  if (o) {
    const f = (
      /** @type {{update: Uint8Array}} */
      a.pendingStructs.update
    );
    a.pendingStructs = null, Os(i.doc, f);
  }
}, n, !1), Os = (t, e, n, r = ji) => {
  const i = la(e);
  qw(i, t, n, new r(i));
};
class Xw {
  constructor() {
    this.l = [];
  }
}
const rc = () => new Xw(), ic = (t, e) => t.l.push(e), oc = (t, e) => {
  const n = t.l, r = n.length;
  t.l = n.filter((i) => e !== i), r === t.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, Od = (t, e, n) => da(t.l, [e, n]);
class _n {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(e, n) {
    this.client = e, this.clock = n;
  }
}
const ii = (t, e) => t === e || t !== null && e !== null && t.client === e.client && t.clock === e.clock, F = (t, e) => new _n(t, e), Pr = (t) => {
  for (const [e, n] of t.doc.share.entries())
    if (n === t)
      return e;
  throw Ie();
}, Dr = (t, e) => {
  for (; e !== null; ) {
    if (e.parent === t)
      return !0;
    e = /** @type {AbstractType<any>} */
    e.parent._item;
  }
  return !1;
};
class Fi {
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
class Jw {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(e, n, r = 0) {
    this.type = e, this.index = n, this.assoc = r;
  }
}
const Zw = (t, e, n = 0) => new Jw(t, e, n), oi = (t, e, n) => {
  let r = null, i = null;
  return t._item === null ? i = Pr(t) : r = F(t._item.id.client, t._item.id.clock), new Fi(r, i, e, n);
}, Bo = (t, e, n = 0) => {
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
}, Qw = (t, e) => {
  const n = Nn(t, e), r = e.clock - n.id.clock;
  return {
    item: n,
    diff: r
  };
}, ex = (t, e, n = !0) => {
  const r = e.store, i = t.item, o = t.type, s = t.tname, a = t.assoc;
  let c = null, l = 0;
  if (i !== null) {
    if (se(r, i.client) <= i.clock)
      return null;
    const u = n ? Ps(r, i) : Qw(r, i), d = u.item;
    if (!(d instanceof G))
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
      if (se(r, o.client) <= o.clock)
        return null;
      const { item: u } = n ? Ps(r, o) : { item: Nn(r, o) };
      if (u instanceof G && u.content instanceof ft)
        c = u.content.type;
      else
        return null;
    } else
      throw Ie();
    a >= 0 ? l = c._length : l = 0;
  }
  return Zw(c, l, t.assoc);
};
class ga {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(e, n) {
    this.ds = e, this.sv = n;
  }
}
const _d = (t, e) => new ga(t, e), Vo = (t) => _d(Fw(t.store), po(t.store)), en = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !er(e.ds, t.id), _s = (t, e) => {
  const n = It(t.meta, _s, un), r = t.doc.store;
  n.has(e) || (e.sv.forEach((i, o) => {
    i < se(r, o) && De(t, F(o, i));
  }), Wt(t, e.ds, (i) => {
  }), n.add(e));
};
class Nd {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const po = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.clients.forEach((n, r) => {
    const i = n[n.length - 1];
    e.set(r, i.id.clock + i.length);
  }), e;
}, se = (t, e) => {
  const n = t.clients.get(e);
  if (n === void 0)
    return 0;
  const r = n[n.length - 1];
  return r.id.clock + r.length;
}, Td = (t, e) => {
  let n = t.clients.get(e.id.client);
  if (n === void 0)
    n = [], t.clients.set(e.id.client, n);
  else {
    const r = n[n.length - 1];
    if (r.id.clock + r.length !== e.id.clock)
      throw Ie();
  }
  n.push(e);
}, ct = (t, e) => {
  let n = 0, r = t.length - 1, i = t[r], o = i.id.clock;
  if (o === e)
    return r;
  let s = Tt(e / (o + i.length - 1) * r);
  for (; n <= r; ) {
    if (i = t[s], o = i.id.clock, o <= e) {
      if (e < o + i.length)
        return s;
      n = s + 1;
    } else
      r = s - 1;
    s = Tt((n + r) / 2);
  }
  throw Ie();
}, tx = (t, e) => {
  const n = t.clients.get(e.client);
  return n[ct(n, e.clock)];
}, Nn = (
  /** @type {function(StructStore,ID):Item} */
  tx
), Ns = (t, e, n) => {
  const r = ct(e, n), i = e[r];
  return i.id.clock < n && i instanceof G ? (e.splice(r + 1, 0, Wi(t, i, n - i.id.clock)), r + 1) : r;
}, De = (t, e) => {
  const n = (
    /** @type {Array<Item>} */
    t.doc.store.clients.get(e.client)
  );
  return n[Ns(t, n, e.clock)];
}, sc = (t, e, n) => {
  const r = e.clients.get(n.client), i = ct(r, n.clock), o = r[i];
  return n.clock !== o.id.clock + o.length - 1 && o.constructor !== Je && r.splice(i + 1, 0, Wi(t, o, n.clock - o.id.clock + 1)), o;
}, nx = (t, e, n) => {
  const r = (
    /** @type {Array<GC|Item>} */
    t.clients.get(e.id.client)
  );
  r[ct(r, e.id.clock)] = n;
}, Pd = (t, e, n, r, i) => {
  if (r === 0)
    return;
  const o = n + r;
  let s = Ns(t, e, n), a;
  do
    a = e[s++], o < a.id.clock + a.length && Ns(t, e, o), i(a);
  while (s < e.length && e[s].id.clock < o);
};
class rx {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(e, n, r) {
    this.doc = e, this.deleteSet = new Qn(), this.beforeState = po(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = r, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const ac = (t, e) => e.deleteSet.clients.size === 0 && !w0(e.afterState, (n, r) => e.beforeState.get(r) !== n) ? !1 : (pa(e.deleteSet), Yw(t, e), ma(t, e.deleteSet), !0), lc = (t, e, n) => {
  const r = e._item;
  (r === null || r.id.clock < (t.beforeState.get(r.id.client) || 0) && !r.deleted) && It(t.changed, e, un).add(n);
}, wi = (t, e) => {
  let n = t[e], r = t[e - 1], i = e;
  for (; i > 0; n = r, r = t[--i - 1]) {
    if (r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n)) {
      n instanceof G && n.parentSub !== null && /** @type {AbstractType<any>} */
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
}, ix = (t, e, n) => {
  for (const [r, i] of t.clients.entries()) {
    const o = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let s = i.length - 1; s >= 0; s--) {
      const a = i[s], c = a.clock + a.len;
      for (let l = ct(o, a.clock), u = o[l]; l < o.length && u.id.clock < c; u = o[++l]) {
        const d = o[l];
        if (a.clock + a.len <= d.id.clock)
          break;
        d instanceof G && d.deleted && !d.keep && n(d) && d.gc(e, !1);
      }
    }
  }
}, ox = (t, e) => {
  t.clients.forEach((n, r) => {
    const i = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let o = n.length - 1; o >= 0; o--) {
      const s = n[o], a = Vn(i.length - 1, 1 + ct(i, s.clock + s.len - 1));
      for (let c = a, l = i[c]; c > 0 && l.id.clock >= s.clock; l = i[c])
        c -= 1 + wi(i, c);
    }
  });
}, Dd = (t, e) => {
  if (e < t.length) {
    const n = t[e], r = n.doc, i = r.store, o = n.deleteSet, s = n._mergeStructs;
    try {
      pa(o), n.afterState = po(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
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
          }), c.sort((u, d) => u.path.length - d.path.length), Od(l._dEH, c, n));
        });
      }), a.push(() => r.emit("afterTransaction", [n, r])), da(a, []), n._needFormattingCleanup && Cx(n);
    } finally {
      r.gc && ix(o, i, r.gcFilter), ox(o, i), n.afterState.forEach((u, d) => {
        const f = n.beforeState.get(d) || 0;
        if (f !== u) {
          const h = (
            /** @type {Array<GC|Item>} */
            i.clients.get(d)
          ), p = Vt(ct(h, f), 1);
          for (let g = h.length - 1; g >= p; )
            g -= 1 + wi(h, g);
        }
      });
      for (let u = s.length - 1; u >= 0; u--) {
        const { client: d, clock: f } = s[u].id, h = (
          /** @type {Array<GC|Item>} */
          i.clients.get(d)
        ), p = ct(h, f);
        p + 1 < h.length && wi(h, p + 1) > 1 || p > 0 && wi(h, p);
      }
      if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (Rw(fa, yd, "[yjs] ", bd, vd, "Changed the client-id because another client seems to be using it."), r.clientID = Cd()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
        const u = new Hw();
        ac(u, n) && r.emit("update", [u.toUint8Array(), n.origin, r, n]);
      }
      if (r._observers.has("updateV2")) {
        const u = new ho();
        ac(u, n) && r.emit("updateV2", [u.toUint8Array(), n.origin, r, n]);
      }
      const { subdocsAdded: a, subdocsLoaded: c, subdocsRemoved: l } = n;
      (a.size > 0 || l.size > 0 || c.size > 0) && (a.forEach((u) => {
        u.clientID = r.clientID, u.collectionid == null && (u.collectionid = r.collectionid), r.subdocs.add(u);
      }), l.forEach((u) => r.subdocs.delete(u)), r.emit("subdocs", [{ loaded: c, added: a, removed: l }, r, n]), l.forEach((u) => u.destroy())), t.length <= e + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, t])) : Dd(t, e + 1);
    }
  }
}, Y = (t, e, n = null, r = !0) => {
  const i = t._transactionCleanups;
  let o = !1, s = null;
  t._transaction === null && (o = !0, t._transaction = new rx(t, n, r), i.push(t._transaction), i.length === 1 && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
  try {
    s = e(t._transaction);
  } finally {
    if (o) {
      const a = t._transaction === i[0];
      t._transaction = null, a && Dd(i, 0);
    }
  }
  return s;
};
class sx {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(e, n) {
    this.insertions = n, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
  }
}
const cc = (t, e, n) => {
  Wt(t, n.deletions, (r) => {
    r instanceof G && e.scope.some((i) => i === t.doc || Dr(
      /** @type {AbstractType<any>} */
      i,
      r
    )) && xa(r, !1);
  });
}, uc = (t, e, n) => {
  let r = null;
  const i = t.doc, o = t.scope;
  Y(i, (a) => {
    for (; e.length > 0 && t.currStackItem === null; ) {
      const c = i.store, l = (
        /** @type {StackItem} */
        e.pop()
      ), u = /* @__PURE__ */ new Set(), d = [];
      let f = !1;
      Wt(a, l.insertions, (h) => {
        if (h instanceof G) {
          if (h.redone !== null) {
            let { item: p, diff: g } = Ps(c, h.id);
            g > 0 && (p = De(a, F(p.id.client, p.id.clock + g))), h = p;
          }
          !h.deleted && o.some((p) => p === a.doc || Dr(
            /** @type {AbstractType<any>} */
            p,
            /** @type {Item} */
            h
          )) && d.push(h);
        }
      }), Wt(a, l.deletions, (h) => {
        h instanceof G && o.some((p) => p === a.doc || Dr(
          /** @type {AbstractType<any>} */
          p,
          h
        )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !er(l.insertions, h.id) && u.add(h);
      }), u.forEach((h) => {
        f = Zd(a, h, u, l.insertions, t.ignoreRemoteMapChanges, t) !== null || f;
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
class Md extends id {
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
      ws(e) ? e[0].doc : e instanceof vn ? e : e.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = a, this.addToScope(e), this.deleteFilter = i, o.add(this), this.trackedOrigins = o, this.captureTransaction = r, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = s, this.captureTimeout = n, this.afterTransactionHandler = (c) => {
      if (!this.captureTransaction(c) || !this.scope.some((b) => c.changedParentTypes.has(
        /** @type {AbstractType<any>} */
        b
      ) || b === this.doc) || !this.trackedOrigins.has(c.origin) && (!c.origin || !this.trackedOrigins.has(c.origin.constructor)))
        return;
      const l = this.undoing, u = this.redoing, d = l ? this.redoStack : this.undoStack;
      l ? this.stopCapturing() : u || this.clear(!1, !0);
      const f = new Qn();
      c.afterState.forEach((b, y) => {
        const v = c.beforeState.get(y) || 0, w = b - v;
        w > 0 && Tr(f, y, v, w);
      });
      const h = ow();
      let p = !1;
      if (this.lastChange > 0 && h - this.lastChange < this.captureTimeout && d.length > 0 && !l && !u) {
        const b = d[d.length - 1];
        b.deletions = Es([b.deletions, c.deleteSet]), b.insertions = Es([b.insertions, f]);
      } else
        d.push(new sx(c.deleteSet, f)), p = !0;
      !l && !u && (this.lastChange = h), Wt(
        c,
        c.deleteSet,
        /** @param {Item|GC} item */
        (b) => {
          b instanceof G && this.scope.some((y) => y === c.doc || Dr(
            /** @type {AbstractType<any>} */
            y,
            b
          )) && xa(b, !0);
        }
      );
      const g = [{ stackItem: d[d.length - 1], origin: c.origin, type: l ? "redo" : "undo", changedParentTypes: c.changedParentTypes }, this];
      p ? this.emit("stack-item-added", g) : this.emit("stack-item-updated", g);
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
    e = ws(e) ? e : [e], e.forEach((r) => {
      n.has(r) || (n.add(r), (r instanceof he ? r.doc !== this.doc : r !== this.doc) && xd("[yjs#509] Not same Y.Doc"), this.scope.push(r));
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
      e && (this.undoStack.forEach((i) => cc(r, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => cc(r, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: e, redoStackCleared: n }]);
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
      e = uc(this, this.undoStack, "undo");
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
      e = uc(this, this.redoStack, "redo");
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
function* ax(t) {
  const e = Z(t.restDecoder);
  for (let n = 0; n < e; n++) {
    const r = Z(t.restDecoder), i = t.readClient();
    let o = Z(t.restDecoder);
    for (let s = 0; s < r; s++) {
      const a = t.readInfo();
      if (a === 10) {
        const c = Z(t.restDecoder);
        yield new nt(F(i, o), c), o += c;
      } else if ((co & a) !== 0) {
        const c = (a & (Ct | Ne)) === 0, l = new G(
          F(i, o),
          null,
          // left
          (a & Ne) === Ne ? t.readLeftID() : null,
          // origin
          null,
          // right
          (a & Ct) === Ct ? t.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          c ? t.readParentInfo() ? t.readString() : t.readLeftID() : null,
          // parent
          c && (a & Or) === Or ? t.readString() : null,
          // parentSub
          Qd(t, a)
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
class lx {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(e, n) {
    this.gen = ax(e), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === nt);
    return this.curr;
  }
}
class cx {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(e) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
  }
}
const ux = (t, e) => {
  if (t.constructor === Je) {
    const { client: n, clock: r } = t.id;
    return new Je(F(n, r + e), t.length - e);
  } else if (t.constructor === nt) {
    const { client: n, clock: r } = t.id;
    return new nt(F(n, r + e), t.length - e);
  } else {
    const n = (
      /** @type {Item} */
      t
    ), { client: r, clock: i } = n.id;
    return new G(
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
}, dc = (t, e = ji, n = ho) => {
  if (t.length === 1)
    return t[0];
  const r = t.map((u) => new e(la(u)));
  let i = r.map((u) => new lx(u, !0)), o = null;
  const s = new n(), a = new cx(s);
  for (; i = i.filter((f) => f.curr !== null), i.sort(
    /** @type {function(any,any):number} */
    (f, h) => {
      if (f.curr.id.client === h.curr.id.client) {
        const p = f.curr.id.clock - h.curr.id.clock;
        return p === 0 ? f.curr.constructor === h.curr.constructor ? 0 : f.curr.constructor === nt ? 1 : -1 : p;
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
        ar(a, o.struct, o.offset), o = { struct: f, offset: 0 }, u.next();
      else if (o.struct.id.clock + o.struct.length < f.id.clock)
        if (o.struct.constructor === nt)
          o.struct.length = f.id.clock + f.length - o.struct.id.clock;
        else {
          ar(a, o.struct, o.offset);
          const p = f.id.clock - o.struct.id.clock - o.struct.length;
          o = { struct: new nt(F(d, o.struct.id.clock + o.struct.length), p), offset: 0 };
        }
      else {
        const p = o.struct.id.clock + o.struct.length - f.id.clock;
        p > 0 && (o.struct.constructor === nt ? o.struct.length -= p : f = ux(f, p)), o.struct.mergeWith(
          /** @type {any} */
          f
        ) || (ar(a, o.struct, o.offset), o = { struct: f, offset: 0 }, u.next());
      }
    } else
      o = { struct: (
        /** @type {Item | GC} */
        u.curr
      ), offset: 0 }, u.next();
    for (let f = u.curr; f !== null && f.id.client === d && f.id.clock === o.struct.id.clock + o.struct.length && f.constructor !== nt; f = u.next())
      ar(a, o.struct, o.offset), o = { struct: f, offset: 0 };
  }
  o !== null && (ar(a, o.struct, o.offset), o = null), dx(a);
  const c = r.map((u) => zw(u)), l = Es(c);
  return ma(s, l), s.toUint8Array();
}, Ld = (t) => {
  t.written > 0 && (t.clientStructs.push({ written: t.written, restEncoder: it(t.encoder.restEncoder) }), t.encoder.restEncoder = qr(), t.written = 0);
}, ar = (t, e, n) => {
  t.written > 0 && t.currClient !== e.id.client && Ld(t), t.written === 0 && (t.currClient = e.id.client, t.encoder.writeClient(e.id.client), W(t.encoder.restEncoder, e.id.clock + n)), e.write(t.encoder, n), t.written++;
}, dx = (t) => {
  Ld(t);
  const e = t.encoder.restEncoder;
  W(e, t.clientStructs.length);
  for (let n = 0; n < t.clientStructs.length; n++) {
    const r = t.clientStructs[n];
    W(e, r.written), uo(e, r.restEncoder);
  }
}, fc = "You must not compute changes after the event-handler fired.";
class mo {
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
    return this._path || (this._path = fx(this.currentTarget, this.target));
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
    return er(this.transaction.deleteSet, e.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Ht(fc);
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
                s = "delete", a = Io(c.content.getContent());
              else
                return;
            else
              c !== null && this.deletes(c) ? (s = "update", a = Io(c.content.getContent())) : (s = "add", a = void 0);
          } else if (this.deletes(o))
            s = "delete", a = Io(
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
        throw Ht(fc);
      const n = this.target, r = un(), i = un(), o = [];
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
const fx = (t, e) => {
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
}, xe = () => {
  xd("Invalid access: Add Yjs type to a document before reading data.");
}, Id = 80;
let ya = 0;
class hx {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(e, n) {
    e.marker = !0, this.p = e, this.index = n, this.timestamp = ya++;
  }
}
const px = (t) => {
  t.timestamp = ya++;
}, Rd = (t, e, n) => {
  t.p.marker = !1, t.p = e, e.marker = !0, t.index = n, t.timestamp = ya++;
}, mx = (t, e, n) => {
  if (t.length >= Id) {
    const r = t.reduce((i, o) => i.timestamp < o.timestamp ? i : o);
    return Rd(r, e, n), r;
  } else {
    const r = new hx(e, n);
    return t.push(r), r;
  }
}, go = (t, e) => {
  if (t._start === null || e === 0 || t._searchMarker === null)
    return null;
  const n = t._searchMarker.length === 0 ? null : t._searchMarker.reduce((o, s) => yi(e - o.index) < yi(e - s.index) ? o : s);
  let r = t._start, i = 0;
  for (n !== null && (r = n.p, i = n.index, px(n)); r.right !== null && i < e; ) {
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
  return n !== null && yi(n.index - i) < /** @type {YText|YArray<any>} */
  r.parent.length / Id ? (Rd(n, r, i), n) : mx(t._searchMarker, r, i);
}, Mr = (t, e, n) => {
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
    (e < i.index || n > 0 && e === i.index) && (i.index = Vt(e, i.index + n));
  }
}, yo = (t, e, n) => {
  const r = t, i = e.changedParentTypes;
  for (; It(i, t, () => []).push(n), t._item !== null; )
    t = /** @type {AbstractType<any>} */
    t._item.parent;
  Od(r._eH, n, e);
};
class he {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = rc(), this._dEH = rc(), this._searchMarker = null;
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
    throw lt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw lt();
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
    ic(this._eH, e);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(e) {
    ic(this._dEH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(e) {
    oc(this._eH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(e) {
    oc(this._dEH, e);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const $d = (t, e, n) => {
  t.doc ?? xe(), e < 0 && (e = t._length + e), n < 0 && (n = t._length + n);
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
}, jd = (t) => {
  t.doc ?? xe();
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
}, Fd = (t, e) => {
  const n = [];
  let r = t._start;
  for (; r !== null; ) {
    if (r.countable && en(r, e)) {
      const i = r.content.getContent();
      for (let o = 0; o < i.length; o++)
        n.push(i[o]);
    }
    r = r.right;
  }
  return n;
}, Lr = (t, e) => {
  let n = 0, r = t._start;
  for (t.doc ?? xe(); r !== null; ) {
    if (r.countable && !r.deleted) {
      const i = r.content.getContent();
      for (let o = 0; o < i.length; o++)
        e(i[o], n++, t);
    }
    r = r.right;
  }
}, zd = (t, e) => {
  const n = [];
  return Lr(t, (r, i) => {
    n.push(e(r, i, t));
  }), n;
}, gx = (t) => {
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
}, Bd = (t, e) => {
  t.doc ?? xe();
  const n = go(t, e);
  let r = t._start;
  for (n !== null && (r = n.p, e -= n.index); r !== null; r = r.right)
    if (!r.deleted && r.countable) {
      if (e < r.length)
        return r.content.getContent()[e];
      e -= r.length;
    }
}, zi = (t, e, n, r) => {
  let i = n;
  const o = t.doc, s = o.clientID, a = o.store, c = n === null ? e._start : n.right;
  let l = [];
  const u = () => {
    l.length > 0 && (i = new G(F(s, se(a, s)), i, i && i.lastId, c, c && c.id, e, null, new hn(l)), i.integrate(t, 0), l = []);
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
              i = new G(F(s, se(a, s)), i, i && i.lastId, c, c && c.id, e, null, new Xr(new Uint8Array(
                /** @type {Uint8Array} */
                d
              ))), i.integrate(t, 0);
              break;
            case vn:
              i = new G(F(s, se(a, s)), i, i && i.lastId, c, c && c.id, e, null, new Jr(
                /** @type {Doc} */
                d
              )), i.integrate(t, 0);
              break;
            default:
              if (d instanceof he)
                i = new G(F(s, se(a, s)), i, i && i.lastId, c, c && c.id, e, null, new ft(d)), i.integrate(t, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), u();
}, Vd = () => Ht("Length exceeded!"), Hd = (t, e, n, r) => {
  if (n > e._length)
    throw Vd();
  if (n === 0)
    return e._searchMarker && Mr(e._searchMarker, n, r.length), zi(t, e, null, r);
  const i = n, o = go(e, n);
  let s = e._start;
  for (o !== null && (s = o.p, n -= o.index, n === 0 && (s = s.prev, n += s && s.countable && !s.deleted ? s.length : 0)); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (n <= s.length) {
        n < s.length && De(t, F(s.id.client, s.id.clock + n));
        break;
      }
      n -= s.length;
    }
  return e._searchMarker && Mr(e._searchMarker, i, r.length), zi(t, e, s, r);
}, yx = (t, e, n) => {
  let i = (e._searchMarker || []).reduce((o, s) => s.index > o.index ? s : o, { index: 0, p: e._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return zi(t, e, i, n);
}, Wd = (t, e, n, r) => {
  if (r === 0)
    return;
  const i = n, o = r, s = go(e, n);
  let a = e._start;
  for (s !== null && (a = s.p, n -= s.index); a !== null && n > 0; a = a.right)
    !a.deleted && a.countable && (n < a.length && De(t, F(a.id.client, a.id.clock + n)), n -= a.length);
  for (; r > 0 && a !== null; )
    a.deleted || (r < a.length && De(t, F(a.id.client, a.id.clock + r)), a.delete(t), r -= a.length), a = a.right;
  if (r > 0)
    throw Vd();
  e._searchMarker && Mr(
    e._searchMarker,
    i,
    -o + r
    /* in case we remove the above exception */
  );
}, Bi = (t, e, n) => {
  const r = e._map.get(n);
  r !== void 0 && r.delete(t);
}, ba = (t, e, n, r) => {
  const i = e._map.get(n) || null, o = t.doc, s = o.clientID;
  let a;
  if (r == null)
    a = new hn([r]);
  else
    switch (r.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        a = new hn([r]);
        break;
      case Uint8Array:
        a = new Xr(
          /** @type {Uint8Array} */
          r
        );
        break;
      case vn:
        a = new Jr(
          /** @type {Doc} */
          r
        );
        break;
      default:
        if (r instanceof he)
          a = new ft(r);
        else
          throw new Error("Unexpected content type");
    }
  new G(F(s, se(o.store, s)), i, i && i.lastId, null, null, e, n, a).integrate(t, 0);
}, va = (t, e) => {
  t.doc ?? xe();
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Ud = (t) => {
  const e = {};
  return t.doc ?? xe(), t._map.forEach((n, r) => {
    n.deleted || (e[r] = n.content.getContent()[n.length - 1]);
  }), e;
}, Kd = (t, e) => {
  t.doc ?? xe();
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted;
}, bx = (t, e) => {
  const n = {};
  return t._map.forEach((r, i) => {
    let o = r;
    for (; o !== null && (!e.sv.has(o.id.client) || o.id.clock >= (e.sv.get(o.id.client) || 0)); )
      o = o.left;
    o !== null && en(o, e) && (n[i] = o.content.getContent()[o.length - 1]);
  }), n;
}, si = (t) => (t.doc ?? xe(), $w(
  t._map.entries(),
  /** @param {any} entry */
  (e) => !e[1].deleted
));
class vx extends mo {
}
class Tn extends he {
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
    const n = new Tn();
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
    return new Tn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const e = new Tn();
    return e.insert(0, this.toArray().map(
      (n) => n instanceof he ? (
        /** @type {typeof el} */
        n.clone()
      ) : n
    )), e;
  }
  get length() {
    return this.doc ?? xe(), this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    super._callObserver(e, n), yo(this, e, new vx(this, e));
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
      Hd(
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
      yx(
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
      Wd(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(e) {
    return Bd(this, e);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return jd(this);
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
    return $d(this, e, n);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((e) => e instanceof he ? e.toJSON() : e);
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
    return zd(
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
    Lr(this, e);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return gx(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(Wx);
  }
}
const wx = (t) => new Tn();
class xx extends mo {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(e, n, r) {
    super(e, n), this.keysChanged = r;
  }
}
class Un extends he {
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
    return new Un();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const e = new Un();
    return this.forEach((n, r) => {
      e.set(r, n instanceof he ? (
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
    yo(this, e, new xx(this, e, n));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? xe();
    const e = {};
    return this._map.forEach((n, r) => {
      if (!n.deleted) {
        const i = n.content.getContent()[n.length - 1];
        e[r] = i instanceof he ? i.toJSON() : i;
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
    return zo(
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
    return zo(
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
    return zo(
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
    this.doc ?? xe(), this._map.forEach((n, r) => {
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
      Bi(n, this, e);
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
      ba(
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
      va(this, e)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(e) {
    return Kd(this, e);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? Y(this.doc, (e) => {
      this.forEach(function(n, r, i) {
        Bi(e, i, r);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(Ux);
  }
}
const Sx = (t) => new Un(), zt = (t, e) => t === e || typeof t == "object" && typeof e == "object" && t && e && hw(t, e);
class Ts {
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
    this.right === null && Ie(), this.right.content.constructor === ue ? this.right.deleted || tr(
      this.currentAttributes,
      /** @type {ContentFormat} */
      this.right.content
    ) : this.right.deleted || (this.index += this.right.length), this.left = this.right, this.right = this.right.right;
  }
}
const hc = (t, e, n) => {
  for (; e.right !== null && n > 0; )
    e.right.content.constructor === ue ? e.right.deleted || tr(
      e.currentAttributes,
      /** @type {ContentFormat} */
      e.right.content
    ) : e.right.deleted || (n < e.right.length && De(t, F(e.right.id.client, e.right.id.clock + n)), e.index += e.right.length, n -= e.right.length), e.left = e.right, e.right = e.right.right;
  return e;
}, ai = (t, e, n, r) => {
  const i = /* @__PURE__ */ new Map(), o = r ? go(e, n) : null;
  if (o) {
    const s = new Ts(o.p.left, o.p, o.index, i);
    return hc(t, s, n - o.index);
  } else {
    const s = new Ts(null, e._start, 0, i);
    return hc(t, s, n);
  }
}, Gd = (t, e, n, r) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === ue && zt(
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
    const c = n.left, l = n.right, u = new G(F(o, se(i.store, o)), c, c && c.lastId, l, l && l.id, e, null, new ue(a, s));
    u.integrate(t, 0), n.right = u, n.forward();
  });
}, tr = (t, e) => {
  const { key: n, value: r } = e;
  r === null ? t.delete(n) : t.set(n, r);
}, Yd = (t, e) => {
  for (; t.right !== null; ) {
    if (!(t.right.deleted || t.right.content.constructor === ue && zt(
      e[
        /** @type {ContentFormat} */
        t.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      t.right.content.value
    ))) break;
    t.forward();
  }
}, qd = (t, e, n, r) => {
  const i = t.doc, o = i.clientID, s = /* @__PURE__ */ new Map();
  for (const a in r) {
    const c = r[a], l = n.currentAttributes.get(a) ?? null;
    if (!zt(l, c)) {
      s.set(a, l);
      const { left: u, right: d } = n;
      n.right = new G(F(o, se(i.store, o)), u, u && u.lastId, d, d && d.id, e, null, new ue(a, c)), n.right.integrate(t, 0), n.forward();
    }
  }
  return s;
}, Ho = (t, e, n, r, i) => {
  n.currentAttributes.forEach((f, h) => {
    i[h] === void 0 && (i[h] = null);
  });
  const o = t.doc, s = o.clientID;
  Yd(n, i);
  const a = qd(t, e, n, i), c = r.constructor === String ? new ut(
    /** @type {string} */
    r
  ) : r instanceof he ? new ft(r) : new wn(r);
  let { left: l, right: u, index: d } = n;
  e._searchMarker && Mr(e._searchMarker, n.index, c.getLength()), u = new G(F(s, se(o.store, s)), l, l && l.lastId, u, u && u.id, e, null, c), u.integrate(t, 0), n.right = u, n.index = d, n.forward(), Gd(t, e, n, a);
}, pc = (t, e, n, r, i) => {
  const o = t.doc, s = o.clientID;
  Yd(n, i);
  const a = qd(t, e, n, i);
  e: for (; n.right !== null && (r > 0 || a.size > 0 && (n.right.deleted || n.right.content.constructor === ue)); ) {
    if (!n.right.deleted)
      switch (n.right.content.constructor) {
        case ue: {
          const { key: c, value: l } = (
            /** @type {ContentFormat} */
            n.right.content
          ), u = i[c];
          if (u !== void 0) {
            if (zt(u, l))
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
          r < n.right.length && De(t, F(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
          break;
      }
    n.forward();
  }
  if (r > 0) {
    let c = "";
    for (; r > 0; r--)
      c += `
`;
    n.right = new G(F(s, se(o.store, s)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, e, null, new ut(c)), n.right.integrate(t, 0), n.forward();
  }
  Gd(t, e, n, a);
}, Xd = (t, e, n, r, i) => {
  let o = e;
  const s = at();
  for (; o && (!o.countable || o.deleted); ) {
    if (!o.deleted && o.content.constructor === ue) {
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
      if (l.constructor === ue) {
        const { key: u, value: d } = (
          /** @type {ContentFormat} */
          l
        ), f = r.get(u) ?? null;
        (s.get(u) !== l || f === d) && (e.delete(t), a++, !c && (i.get(u) ?? null) === d && f !== d && (f === null ? i.delete(u) : i.set(u, f))), !c && !e.deleted && tr(
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
}, kx = (t, e) => {
  for (; e && e.right && (e.right.deleted || !e.right.countable); )
    e = e.right;
  const n = /* @__PURE__ */ new Set();
  for (; e && (e.deleted || !e.countable); ) {
    if (!e.deleted && e.content.constructor === ue) {
      const r = (
        /** @type {ContentFormat} */
        e.content.key
      );
      n.has(r) ? e.delete(t) : n.add(r);
    }
    e = e.left;
  }
}, Ax = (t) => {
  let e = 0;
  return Y(
    /** @type {Doc} */
    t.doc,
    (n) => {
      let r = (
        /** @type {Item} */
        t._start
      ), i = t._start, o = at();
      const s = vs(o);
      for (; i; )
        i.deleted === !1 && (i.content.constructor === ue ? tr(
          s,
          /** @type {ContentFormat} */
          i.content
        ) : (e += Xd(n, r, i, o, s), o = vs(s), r = i)), i = i.right;
    }
  ), e;
}, Cx = (t) => {
  const e = /* @__PURE__ */ new Set(), n = t.doc;
  for (const [r, i] of t.afterState.entries()) {
    const o = t.beforeState.get(r) || 0;
    i !== o && Pd(
      t,
      /** @type {Array<Item|GC>} */
      n.store.clients.get(r),
      o,
      i,
      (s) => {
        !s.deleted && /** @type {Item} */
        s.content.constructor === ue && s.constructor !== Je && e.add(
          /** @type {any} */
          s.parent
        );
      }
    );
  }
  Y(n, (r) => {
    Wt(t, t.deleteSet, (i) => {
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
      i.content.constructor === ue ? e.add(o) : kx(r, i);
    });
    for (const i of e)
      Ax(i);
  });
}, mc = (t, e, n) => {
  const r = n, i = vs(e.currentAttributes), o = e.right;
  for (; n > 0 && e.right !== null; ) {
    if (e.right.deleted === !1)
      switch (e.right.content.constructor) {
        case ft:
        case wn:
        case ut:
          n < e.right.length && De(t, F(e.right.id.client, e.right.id.clock + n)), n -= e.right.length, e.right.delete(t);
          break;
      }
    e.forward();
  }
  o && Xd(t, o, e.right, i, e.currentAttributes);
  const s = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (e.left || e.right).parent
  );
  return s._searchMarker && Mr(s._searchMarker, e.index, -r + n), e;
};
class Ex extends mo {
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
                (typeof l == "object" || l.length > 0) && (h = { insert: l }, i.size > 0 && (h.attributes = {}, i.forEach((p, g) => {
                  p !== null && (h.attributes[g] = p);
                }))), l = "";
                break;
              case "retain":
                u > 0 && (h = { retain: u }, dw(c) || (h.attributes = cw({}, c))), u = 0;
                break;
            }
            h && n.push(h), a = null;
          }
        };
        for (; s !== null; ) {
          switch (s.content.constructor) {
            case ft:
            case wn:
              this.adds(s) ? this.deletes(s) || (f(), a = "insert", l = s.content.getContent()[0], f()) : this.deletes(s) ? (a !== "delete" && (f(), a = "delete"), d += 1) : s.deleted || (a !== "retain" && (f(), a = "retain"), u += 1);
              break;
            case ut:
              this.adds(s) ? this.deletes(s) || (a !== "insert" && (f(), a = "insert"), l += /** @type {ContentString} */
              s.content.str) : this.deletes(s) ? (a !== "delete" && (f(), a = "delete"), d += s.length) : s.deleted || (a !== "retain" && (f(), a = "retain"), u += s.length);
              break;
            case ue: {
              const { key: h, value: p } = (
                /** @type {ContentFormat} */
                s.content
              );
              if (this.adds(s)) {
                if (!this.deletes(s)) {
                  const g = i.get(h) ?? null;
                  zt(g, p) ? p !== null && s.delete(r) : (a === "retain" && f(), zt(p, o.get(h) ?? null) ? delete c[h] : c[h] = p);
                }
              } else if (this.deletes(s)) {
                o.set(h, p);
                const g = i.get(h) ?? null;
                zt(g, p) || (a === "retain" && f(), c[h] = g);
              } else if (!s.deleted) {
                o.set(h, p);
                const g = c[h];
                g !== void 0 && (zt(g, p) ? g !== null && s.delete(r) : (a === "retain" && f(), p === null ? delete c[h] : c[h] = p));
              }
              s.deleted || (a === "insert" && f(), tr(
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
class Ut extends he {
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
    return this.doc ?? xe(), this._length;
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
    return new Ut();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const e = new Ut();
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
    const r = new Ex(this, e, n);
    yo(this, e, r), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? xe();
    let e = "", n = this._start;
    for (; n !== null; )
      !n.deleted && n.countable && n.content.constructor === ut && (e += /** @type {ContentString} */
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
      const i = new Ts(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let o = 0; o < e.length; o++) {
        const s = e[o];
        if (s.insert !== void 0) {
          const a = !n && typeof s.insert == "string" && o === e.length - 1 && i.right === null && s.insert.slice(-1) === `
` ? s.insert.slice(0, -1) : s.insert;
          (typeof a != "string" || a.length > 0) && Ho(r, this, i, a, s.attributes || {});
        } else s.retain !== void 0 ? pc(r, this, i, s.retain, s.attributes || {}) : s.delete !== void 0 && mc(r, i, s.delete);
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
    this.doc ?? xe();
    const i = [], o = /* @__PURE__ */ new Map(), s = (
      /** @type {Doc} */
      this.doc
    );
    let a = "", c = this._start;
    function l() {
      if (a.length > 0) {
        const d = {};
        let f = !1;
        o.forEach((p, g) => {
          f = !0, d[g] = p;
        });
        const h = { insert: a };
        f && (h.attributes = d), i.push(h), a = "";
      }
    }
    const u = () => {
      for (; c !== null; ) {
        if (en(c, e) || n !== void 0 && en(c, n))
          switch (c.content.constructor) {
            case ut: {
              const d = o.get("ychange");
              e !== void 0 && !en(c, e) ? (d === void 0 || d.user !== c.id.client || d.type !== "removed") && (l(), o.set("ychange", r ? r("removed", c.id) : { type: "removed" })) : n !== void 0 && !en(c, n) ? (d === void 0 || d.user !== c.id.client || d.type !== "added") && (l(), o.set("ychange", r ? r("added", c.id) : { type: "added" })) : d !== void 0 && (l(), o.delete("ychange")), a += /** @type {ContentString} */
              c.content.str;
              break;
            }
            case ft:
            case wn: {
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
            case ue:
              en(c, e) && (l(), tr(
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
      e && _s(d, e), n && _s(d, n), u();
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
      })), Ho(o, this, s, n, r);
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
      Ho(o, this, s, n, r || {});
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
      mc(i, ai(i, this, e, !0), n);
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
      s.right !== null && pc(o, this, s, n, r);
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
      Bi(n, this, e);
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
      ba(r, this, e, n);
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
      va(this, e)
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
    return Ud(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(Kx);
  }
}
const Ox = (t) => new Ut();
class Wo {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(e, n = () => !0) {
    this._filter = n, this._root = e, this._currentNode = /** @type {Item} */
    e._start, this._firstCall = !0, e.doc ?? xe();
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
        e.content.type, !e.deleted && (n.constructor === ve || n.constructor === fn) && n._start !== null)
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
class fn extends he {
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
    return new fn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const e = new fn();
    return e.insert(0, this.toArray().map((n) => n instanceof he ? n.clone() : n)), e;
  }
  get length() {
    return this.doc ?? xe(), this._prelimContent === null ? this._length : this._prelimContent.length;
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
    return new Wo(this, e);
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
    const r = new Wo(this, (i) => i.nodeName && i.nodeName.toUpperCase() === e).next();
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
    return e = e.toUpperCase(), dn(new Wo(this, (n) => n.nodeName && n.nodeName.toUpperCase() === e));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    yo(this, e, new Tx(this, n, e));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return zd(this, (e) => e.toString()).join("");
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
    return r !== void 0 && r._createAssociation(i, this), Lr(this, (o) => {
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
      Hd(r, this, e, n);
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
        const i = e && e instanceof he ? e._item : e;
        zi(r, this, i, n);
      });
    else {
      const r = (
        /** @type {Array<any>} */
        this._prelimContent
      ), i = e === null ? 0 : r.findIndex((o) => o === e) + 1;
      if (i === 0 && e !== null)
        throw Ht("Reference item not found");
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
      Wd(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return jd(this);
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
    return Bd(this, e);
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
    return $d(this, e, n);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    Lr(this, e);
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
    e.writeTypeRef(Yx);
  }
}
const _x = (t) => new fn();
class ve extends fn {
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
    return new ve(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const e = new ve(this.nodeName), n = this.getAttributes();
    return uw(n, (r, i) => {
      typeof r == "string" && e.setAttribute(i, r);
    }), e.insert(0, this.toArray().map((r) => r instanceof he ? r.clone() : r)), e;
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
      Bi(n, this, e);
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
      ba(r, this, e, n);
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
      va(this, e)
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
      Kd(this, e)
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
      e ? bx(this, e) : Ud(this)
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
    return Lr(this, (s) => {
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
    e.writeTypeRef(Gx), e.writeKey(this.nodeName);
  }
}
const Nx = (t) => new ve(t.readKey());
class Tx extends mo {
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
class Vi extends Un {
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
    return new Vi(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const e = new Vi(this.hookName);
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
    e.writeTypeRef(qx), e.writeKey(this.hookName);
  }
}
const Px = (t) => new Vi(t.readKey());
class Le extends Ut {
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
    e.writeTypeRef(Xx);
  }
}
const Dx = (t) => new Le();
class wa {
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
    throw lt();
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
    throw lt();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    throw lt();
  }
}
const Mx = 0;
class Je extends wa {
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
    n > 0 && (this.id.clock += n, this.length -= n), Td(e.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeInfo(Mx), e.writeLen(this.length - n);
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
class Xr {
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
    return new Xr(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(e) {
    throw lt();
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
const Lx = (t) => new Xr(t.readBuf());
class Ir {
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
    return new Ir(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(e) {
    const n = new Ir(this.len - e);
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
    Tr(e.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
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
const Ix = (t) => new Ir(t.readLen()), Jd = (t, e) => new vn({ guid: t, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
class Jr {
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
    return new Jr(Jd(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(e) {
    throw lt();
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
const Rx = (t) => new Jr(Jd(t.readString(), t.readAny()));
class wn {
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
    return new wn(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(e) {
    throw lt();
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
const $x = (t) => new wn(t.readJSON());
class ue {
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
    return new ue(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(e) {
    throw lt();
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
const jx = (t) => new ue(t.readKey(), t.readJSON());
class Hi {
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
    return new Hi(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(e) {
    const n = new Hi(this.arr.slice(e));
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
const Fx = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++) {
    const i = t.readString();
    i === "undefined" ? n.push(void 0) : n.push(JSON.parse(i));
  }
  return new Hi(n);
}, zx = $i("node_env") === "development";
class hn {
  /**
   * @param {Array<any>} arr
   */
  constructor(e) {
    this.arr = e, zx && hd(e);
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
    return new hn(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(e) {
    const n = new hn(this.arr.slice(e));
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
const Bx = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++)
    n.push(t.readAny());
  return new hn(n);
};
class ut {
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
    return new ut(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(e) {
    const n = new ut(this.str.slice(e));
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
const Vx = (t) => new ut(t.readString()), Hx = [
  wx,
  Sx,
  Ox,
  Nx,
  _x,
  Px,
  Dx
], Wx = 0, Ux = 1, Kx = 2, Gx = 3, Yx = 4, qx = 5, Xx = 6;
class ft {
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
    return new ft(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(e) {
    throw lt();
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
const Jx = (t) => new ft(Hx[t.readTypeRef()](t)), Ps = (t, e) => {
  let n = e, r = 0, i;
  do
    r > 0 && (n = F(n.client, n.clock + r)), i = Nn(t, n), r = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof G);
  return {
    item: i,
    diff: r
  };
}, xa = (t, e) => {
  for (; t !== null && t.keep !== e; )
    t.keep = e, t = /** @type {AbstractType<any>} */
    t.parent._item;
}, Wi = (t, e, n) => {
  const { client: r, clock: i } = e.id, o = new G(
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
}, gc = (t, e) => S0(
  t,
  /** @param {StackItem} s */
  (n) => er(n.deletions, e)
), Zd = (t, e, n, r, i, o) => {
  const s = t.doc, a = s.store, c = s.clientID, l = e.redone;
  if (l !== null)
    return De(t, l);
  let u = (
    /** @type {AbstractType<any>} */
    e.parent._item
  ), d = null, f;
  if (u !== null && u.deleted === !0) {
    if (u.redone === null && (!n.has(u) || Zd(t, u, n, r, i, o) === null))
      return null;
    for (; u.redone !== null; )
      u = De(t, u.redone);
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
      let y = d;
      for (; y !== null && /** @type {AbstractType<any>} */
      y.parent._item !== u; )
        y = y.redone === null ? null : De(t, y.redone);
      if (y !== null && /** @type {AbstractType<any>} */
      y.parent._item === u) {
        d = y;
        break;
      }
      d = d.left;
    }
    for (; f !== null; ) {
      let y = f;
      for (; y !== null && /** @type {AbstractType<any>} */
      y.parent._item !== u; )
        y = y.redone === null ? null : De(t, y.redone);
      if (y !== null && /** @type {AbstractType<any>} */
      y.parent._item === u) {
        f = y;
        break;
      }
      f = f.right;
    }
  } else if (f = null, e.right && !i) {
    for (d = e; d !== null && d.right !== null && (d.right.redone || er(r, d.right.id) || gc(o.undoStack, d.right.id) || gc(o.redoStack, d.right.id)); )
      for (d = d.right; d.redone; ) d = De(t, d.redone);
    if (d && d.right !== null)
      return null;
  } else
    d = h._map.get(e.parentSub) || null;
  const p = se(a, c), g = F(c, p), b = new G(
    g,
    d,
    d && d.lastId,
    f,
    f && f.id,
    h,
    e.parentSub,
    e.content.copy()
  );
  return e.redone = g, xa(b, !0), b.integrate(t, 0), b;
};
class G extends wa {
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
    super(e, c.getLength()), this.origin = r, this.left = n, this.right = i, this.rightOrigin = o, this.parent = s, this.parentSub = a, this.redone = null, this.content = c, this.info = this.content.isCountable() ? Kl : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(e) {
    (this.info & $o) > 0 !== e && (this.info ^= $o);
  }
  get marker() {
    return (this.info & $o) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & Ul) > 0;
  }
  set keep(e) {
    this.keep !== e && (this.info ^= Ul);
  }
  get countable() {
    return (this.info & Kl) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & Ro) > 0;
  }
  set deleted(e) {
    this.deleted !== e && (this.info ^= Ro);
  }
  markDeleted() {
    this.info |= Ro;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, n) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= se(n, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= se(n, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === _n && this.id.client !== this.parent.client && this.parent.clock >= se(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = sc(e, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = De(e, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === Je || this.right && this.right.constructor === Je)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === G ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === G && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === _n) {
      const r = Nn(n, this.parent);
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
    if (n > 0 && (this.id.clock += n, this.left = sc(e, e.doc.store, F(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
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
          } else if (i.origin !== null && s.has(Nn(e.doc.store, i.origin)))
            o.has(Nn(e.doc.store, i.origin)) || (r = i, o.clear());
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
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Td(e.doc.store, this), this.content.integrate(e, this), lc(
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
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), Tr(e.deleteSet, this.id.client, this.id.clock, this.length), lc(e, n, this.parentSub), this.content.delete(e);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(e, n) {
    if (!this.deleted)
      throw Ie();
    this.content.gc(e), n ? nx(e, this, new Je(this.id, this.length)) : this.content = new Ir(this.length);
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
    const r = n > 0 ? F(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, o = this.parentSub, s = this.content.getRef() & co | (r === null ? 0 : Ne) | // origin is defined
    (i === null ? 0 : Ct) | // right origin is defined
    (o === null ? 0 : Or);
    if (e.writeInfo(s), r !== null && e.writeLeftID(r), i !== null && e.writeRightID(i), r === null && i === null) {
      const a = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (a._item !== void 0) {
        const c = a._item;
        if (c === null) {
          const l = Pr(a);
          e.writeParentInfo(!0), e.writeString(l);
        } else
          e.writeParentInfo(!1), e.writeLeftID(c.id);
      } else a.constructor === String ? (e.writeParentInfo(!0), e.writeString(a)) : a.constructor === _n ? (e.writeParentInfo(!1), e.writeLeftID(a)) : Ie();
      o !== null && e.writeString(o);
    }
    this.content.write(e, n);
  }
}
const Qd = (t, e) => Zx[e & co](t), Zx = [
  () => {
    Ie();
  },
  // GC is not ItemContent
  Ix,
  // 1
  Fx,
  // 2
  Lx,
  // 3
  Vx,
  // 4
  $x,
  // 5
  jx,
  // 6
  Jx,
  // 7
  Bx,
  // 8
  Rx,
  // 9
  () => {
    Ie();
  }
  // 10 - Skip is not ItemContent
], Qx = 10;
class nt extends wa {
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
    Ie();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeInfo(Qx), W(e.restEncoder, this.length - n);
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
const ef = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), tf = "__ $YJS$ __";
ef[tf] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
ef[tf] = !0;
const e1 = () => {
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
}, t1 = /[\uD800-\uDBFF]/, n1 = /[\uDC00-\uDFFF]/, r1 = (t, e) => {
  let n = 0, r = 0;
  for (; n < t.length && n < e.length && t[n] === e[n]; )
    n++;
  for (n > 0 && t1.test(t[n - 1]) && n--; r + n < t.length && r + n < e.length && t[t.length - r - 1] === e[e.length - r - 1]; )
    r++;
  return r > 0 && n1.test(t[t.length - r]) && r--, {
    index: n,
    remove: t.length - n - r,
    insert: e.slice(n, e.length - r)
  };
}, i1 = r1, re = new $e("y-sync"), Et = new $e("y-undo");
new $e("yjs-cursor");
const mt = (t, e) => t >>> e | t << 32 - e, o1 = (t) => mt(t, 2) ^ mt(t, 13) ^ mt(t, 22), s1 = (t) => mt(t, 6) ^ mt(t, 11) ^ mt(t, 25), a1 = (t) => mt(t, 7) ^ mt(t, 18) ^ t >>> 3, l1 = (t) => mt(t, 17) ^ mt(t, 19) ^ t >>> 10, c1 = new Uint32Array([
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
]), u1 = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
class d1 {
  constructor() {
    const e = new ArrayBuffer(320);
    this._H = new Uint32Array(e, 0, 8), this._H.set(u1), this._W = new Uint32Array(e, 64, 64);
  }
  _updateHash() {
    const e = this._H, n = this._W;
    for (let d = 16; d < 64; d++)
      n[d] = l1(n[d - 2]) + n[d - 7] + a1(n[d - 15]) + n[d - 16];
    let r = e[0], i = e[1], o = e[2], s = e[3], a = e[4], c = e[5], l = e[6], u = e[7];
    for (let d = 0, f, h; d < 64; d++)
      f = u + s1(a) + (a & c ^ ~a & l) + c1[d] + n[d] >>> 0, h = o1(r) + (r & i ^ r & o ^ i & o) >>> 0, u = l, l = c, c = a, a = s + f >>> 0, s = o, o = i, i = r, r = f + h >>> 0;
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
        this._W[s] |= Ne << (3 - n % 4) * 8;
      }
      this._updateHash();
    }
    const r = n % 64 !== 0;
    this._W.fill(0, 0, 16);
    let i = 0;
    for (; n < e.length; i++)
      for (let s = 3; s >= 0 && n < e.length; s--)
        this._W[i] |= e[n++] << s * 8;
    r || (this._W[i - (n % 4 === 0 ? 0 : 1)] |= Ne << (3 - n % 4) * 8), this._W[14] = e.byteLength / k0, this._W[15] = e.byteLength * 8, this._updateHash();
    const o = new Uint8Array(32);
    for (let s = 0; s < this._H.length; s++)
      for (let a = 0; a < 4; a++)
        o[s * 4 + a] = this._H[s] >>> (3 - a) * 8;
    return o;
  }
}
const f1 = (t) => new d1().digest(t), h1 = (t) => {
  for (let n = 6; n < t.length; n++)
    t[n % 6] = t[n % 6] ^ t[n];
  return t.slice(0, 6);
}, p1 = (t) => xw(h1(f1(Sw(t)))), Ui = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && /** @type {number} */
e.sv.get(t.id.client) > t.id.clock && !er(e.ds, t.id), m1 = [{ light: "#ecd44433", dark: "#ecd444" }], g1 = (t, e, n) => {
  if (!t.has(n)) {
    if (t.size < e.length) {
      const r = un();
      t.forEach((i) => r.add(i)), e = e.filter((i) => !r.has(i));
    }
    t.set(n, nw(e));
  }
  return (
    /** @type {ColorDef} */
    t.get(n)
  );
}, y1 = (t, {
  colors: e = m1,
  colorMapping: n = /* @__PURE__ */ new Map(),
  permanentUserData: r = null,
  onFirstRender: i = () => {
  },
  mapping: o
} = {}) => {
  let s = !1;
  const a = new v1(t, o), c = new gt({
    props: {
      editable: (l) => {
        const u = re.getState(l);
        return u.snapshot == null && u.prevSnapshot == null;
      }
    },
    key: re,
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
        const d = l.getMeta(re);
        if (d !== void 0) {
          u = Object.assign({}, u);
          for (const f in d)
            u[f] = d[f];
        }
        return u.addToHistory = l.getMeta("addToHistory") !== !1, u.isChangeOrigin = d !== void 0 && !!d.isChangeOrigin, u.isUndoRedoOperation = d !== void 0 && !!d.isChangeOrigin && !!d.isUndoRedoOperation, a.prosemirrorView !== null && d !== void 0 && (d.snapshot != null || d.prevSnapshot != null) && gd(0, () => {
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
            const d = Et.getState(l.state), f = d && d.undoManager;
            f && f.stopCapturing();
          }
          a.mux(() => {
            u.doc.transact((d) => {
              d.meta.set("addToHistory", u.addToHistory), a._prosemirrorChanged(l.state.doc);
            }, re);
          });
        }
      },
      destroy: () => {
        a.destroy();
      }
    })
  });
  return c;
}, b1 = (t, e, n) => {
  if (e !== null && e.anchor !== null && e.head !== null)
    if (e.type === "all")
      t.setSelection(new Jh(t.doc));
    else if (e.type === "node") {
      const r = Si(
        n.doc,
        n.type,
        e.anchor,
        n.mapping
      );
      t.setSelection(Vc.create(t.doc, r));
    } else {
      const r = Si(
        n.doc,
        n.type,
        e.anchor,
        n.mapping
      ), i = Si(
        n.doc,
        n.type,
        e.head,
        n.mapping
      );
      if (r !== null && i !== null) {
        const o = rt.between(t.doc.resolve(r), t.doc.resolve(i));
        t.setSelection(o);
      }
    }
}, Ds = (t, e) => ({
  type: (
    /** @type {any} */
    e.selection.jsonID
  ),
  anchor: Rs(
    e.selection.anchor,
    t.type,
    t.mapping
  ),
  head: Rs(
    e.selection.head,
    t.type,
    t.mapping
  )
});
class v1 {
  /**
   * @param {Y.XmlFragment} yXmlFragment The bind source
   * @param {ProsemirrorMapping} mapping
   */
  constructor(e, n = /* @__PURE__ */ new Map()) {
    this.type = e, this.prosemirrorView = null, this.mux = e1(), this.mapping = n, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
      this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = Ds(
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
    return this.prosemirrorView.hasFocus() ? (pd && this._domSelectionInView === null && (gd(0, () => {
      this._domSelectionInView = null;
    }), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
  }
  _isDomSelectionInView() {
    const e = this.prosemirrorView._root.getSelection();
    if (e == null || e.anchorNode == null) return !1;
    const n = this.prosemirrorView._root.createRange();
    n.setStart(e.anchorNode, e.anchorOffset), n.setEnd(e.focusNode, e.focusOffset), n.getClientRects().length === 0 && n.startContainer && n.collapsed && n.selectNodeContents(n.startContainer);
    const i = n.getBoundingClientRect(), o = Aw.documentElement;
    return i.bottom >= 0 && i.right >= 0 && i.left <= (window.innerWidth || o.clientWidth || 0) && i.top <= (window.innerHeight || o.clientHeight || 0);
  }
  /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */
  renderSnapshot(e, n) {
    n || (n = _d(Ad(), /* @__PURE__ */ new Map())), this.prosemirrorView.dispatch(
      this._tr.setMeta(re, { snapshot: e, prevSnapshot: n })
    );
  }
  unrenderSnapshot() {
    this.mapping.clear(), this.mux(() => {
      const e = this.type.toArray().map(
        (r) => xi(
          /** @type {Y.XmlElement} */
          r,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((r) => r !== null), n = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Ve(be.from(e), 0, 0)
      );
      n.setMeta(re, { snapshot: null, prevSnapshot: null }), this.prosemirrorView.dispatch(n);
    });
  }
  _forceRerender() {
    this.mapping.clear(), this.mux(() => {
      const e = this.beforeTransactionSelection !== null ? null : this.prosemirrorView.state.selection, n = this.type.toArray().map(
        (i) => xi(
          /** @type {Y.XmlElement} */
          i,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((i) => i !== null), r = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Ve(be.from(n), 0, 0)
      );
      if (e) {
        const i = Vn(Vt(e.anchor, 0), r.doc.content.size), o = Vn(Vt(e.head, 0), r.doc.content.size);
        r.setSelection(rt.create(r.doc, i, o));
      }
      this.prosemirrorView.dispatch(
        r.setMeta(re, { isChangeOrigin: !0, binding: this })
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
    if (e || (e = Vo(this.doc)), e instanceof Uint8Array || n instanceof Uint8Array)
      if ((!(e instanceof Uint8Array) || !(n instanceof Uint8Array)) && Ie(), i = new vn({ gc: !1 }), Os(i, n), n = Vo(i), Os(i, e), e = Vo(i), o._item === null) {
        const s = Array.from(this.doc.share.keys()).find(
          (a) => this.doc.share.get(a) === this.type
        );
        o = i.getXmlFragment(s);
      } else {
        const s = i.store.clients.get(o._item.id.client) ?? [], a = ct(
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
          Wt(s, d, (f) => {
          });
        });
        const c = (d, f) => {
          const h = d === "added" ? a.getUserByClientId(f.client) : a.getUserByDeletedId(f);
          return {
            user: h,
            type: d,
            color: g1(
              r.colorMapping,
              r.colors,
              h
            )
          };
        }, l = Fd(
          o,
          new ga(n.ds, e.sv)
        ).map((d) => !d._item.deleted || Ui(d._item, e) || Ui(d._item, n) ? xi(
          d,
          this.prosemirrorView.state.schema,
          { mapping: /* @__PURE__ */ new Map(), isOMark: /* @__PURE__ */ new Map() },
          e,
          n,
          c
        ) : null).filter((d) => d !== null), u = this._tr.replace(
          0,
          this.prosemirrorView.state.doc.content.size,
          new Ve(be.from(l), 0, 0)
        );
        this.prosemirrorView.dispatch(
          u.setMeta(re, { isChangeOrigin: !0 })
        );
      }, re);
    });
  }
  /**
   * @param {Array<Y.YEvent<any>>} events
   * @param {Y.Transaction} transaction
   */
  _typeChanged(e, n) {
    if (this.prosemirrorView == null) return;
    const r = re.getState(this.prosemirrorView.state);
    if (e.length === 0 || r.snapshot != null || r.prevSnapshot != null) {
      this.renderSnapshot(r.snapshot, r.prevSnapshot);
      return;
    }
    this.mux(() => {
      const i = (a, c) => this.mapping.delete(c);
      Wt(
        n,
        n.deleteSet,
        (a) => {
          if (a.constructor === G) {
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
        (a) => nf(
          /** @type {Y.XmlElement | Y.XmlHook} */
          a,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((a) => a !== null);
      let s = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Ve(be.from(o), 0, 0)
      );
      b1(s, this.beforeTransactionSelection, this), s = s.setMeta(re, { isChangeOrigin: !0, isUndoRedoOperation: n.origin instanceof Md }), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && s.scrollIntoView(), this.prosemirrorView.dispatch(s);
    });
  }
  /**
   * @param {import('prosemirror-model').Node} doc
   */
  _prosemirrorChanged(e) {
    this.doc.transact(() => {
      Ls(this.doc, this.type, e, this), this.beforeTransactionSelection = Ds(
        this,
        this.prosemirrorView.state
      );
    }, re);
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
const nf = (t, e, n, r, i, o) => {
  const s = (
    /** @type {PModel.Node} */
    n.mapping.get(t)
  );
  if (s === void 0) {
    if (t instanceof ve)
      return xi(
        t,
        e,
        n,
        r,
        i,
        o
      );
    throw lt();
  }
  return s;
}, xi = (t, e, n, r, i, o) => {
  const s = [], a = (c) => {
    if (c instanceof ve) {
      const l = nf(
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
      l instanceof Ut && !l._item.deleted && l._item.id.client === l.doc.clientID && (c.applyDelta([
        { retain: c.length },
        ...l.toDelta()
      ]), l.doc.transact((d) => {
        l._item.delete(d);
      }));
      const u = w1(
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
  r === void 0 || i === void 0 ? t.toArray().forEach(a) : Fd(t, new ga(i.ds, r.sv)).forEach(a);
  try {
    const c = t.getAttributes(r);
    r !== void 0 && (Ui(
      /** @type {Y.Item} */
      t._item,
      r
    ) ? Ui(
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
    }, re), n.mapping.delete(t), null;
  }
}, w1 = (t, e, n, r, i, o) => {
  const s = [], a = t.toDelta(r, i, o);
  try {
    for (let c = 0; c < a.length; c++) {
      const l = a[c];
      s.push(e.text(l.insert, E1(l.attributes, e)));
    }
  } catch {
    return t.doc.transact((l) => {
      t._item.delete(l);
    }, re), null;
  }
  return s;
}, x1 = (t, e) => {
  const n = new Le(), r = t.map((i) => ({
    // @ts-ignore
    insert: i.text,
    attributes: of(i.marks, e)
  }));
  return n.applyDelta(r), e.mapping.set(n, t), n;
}, S1 = (t, e) => {
  const n = new ve(t.type.name);
  for (const r in t.attrs) {
    const i = t.attrs[r];
    i !== null && r !== "ychange" && n.setAttribute(r, i);
  }
  return n.insert(
    0,
    bo(t).map(
      (r) => Ms(r, e)
    )
  ), e.mapping.set(n, t), n;
}, Ms = (t, e) => t instanceof Array ? x1(t, e) : S1(t, e), yc = (t) => typeof t == "object" && t !== null, Sa = (t, e) => {
  const n = Object.keys(t).filter((i) => t[i] !== null);
  let r = n.length === (e == null ? 0 : Object.keys(e).filter((i) => e[i] !== null).length);
  for (let i = 0; i < n.length && r; i++) {
    const o = n[i], s = t[o], a = e[o];
    r = o === "ychange" || s === a || yc(s) && yc(a) && Sa(s, a);
  }
  return r;
}, bo = (t) => {
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
}, rf = (t, e) => {
  const n = t.toDelta();
  return n.length === e.length && n.every(
    /** @type {(d:any,i:number) => boolean} */
    (r, i) => r.insert === /** @type {any} */
    e[i].text && dd(r.attributes || {}).length === e[i].marks.length && fd(r.attributes, (o, s) => {
      const a = ka(s), c = e[i].marks;
      return Sa(o, c.find(
        /** @param {any} mark */
        (l) => l.type.name === a
      )?.attrs);
    })
  );
}, Rr = (t, e) => {
  if (t instanceof ve && !(e instanceof Array) && Is(t, e)) {
    const n = bo(e);
    return t._length === n.length && Sa(t.getAttributes(), e.attrs) && t.toArray().every(
      (r, i) => Rr(r, n[i])
    );
  }
  return t instanceof Le && e instanceof Array && rf(t, e);
}, Ki = (t, e) => t === e || t instanceof Array && e instanceof Array && t.length === e.length && t.every(
  (n, r) => e[r] === n
), bc = (t, e, n) => {
  const r = t.toArray(), i = bo(e), o = i.length, s = r.length, a = Vn(s, o);
  let c = 0, l = 0, u = !1;
  for (; c < a; c++) {
    const d = r[c], f = i[c];
    if (Ki(n.mapping.get(d), f))
      u = !0;
    else if (!Rr(d, f))
      break;
  }
  for (; c + l < a; l++) {
    const d = r[s - l - 1], f = i[o - l - 1];
    if (Ki(n.mapping.get(d), f))
      u = !0;
    else if (!Rr(d, f))
      break;
  }
  return {
    equalityFactor: c + l,
    foundMappedChild: u
  };
}, k1 = (t) => {
  let e = "", n = t._start;
  const r = {};
  for (; n !== null; )
    n.deleted || (n.countable && n.content instanceof ut ? e += n.content.str : n.content instanceof ue && (r[n.content.key] = null)), n = n.right;
  return {
    str: e,
    nAttrs: r
  };
}, A1 = (t, e, n) => {
  n.mapping.set(t, e);
  const { nAttrs: r, str: i } = k1(t), o = e.map((l) => ({
    insert: (
      /** @type {any} */
      l.text
    ),
    attributes: Object.assign({}, r, of(l.marks, n))
  })), { insert: s, remove: a, index: c } = i1(
    i,
    o.map((l) => l.insert).join("")
  );
  t.delete(c, a), t.insert(c, s), t.applyDelta(
    o.map((l) => ({ retain: l.insert.length, attributes: l.attributes }))
  );
}, C1 = /(.*)(--[a-zA-Z0-9+/=]{8})$/, ka = (t) => C1.exec(t)?.[1] ?? t, E1 = (t, e) => {
  const n = [];
  for (const r in t)
    n.push(e.mark(ka(r), t[r]));
  return n;
}, of = (t, e) => {
  const n = {};
  return t.forEach((r) => {
    if (r.type.name !== "ychange") {
      const i = It(e.isOMark, r.type, () => !r.type.excludes(r.type));
      n[i ? `${r.type.name}--${p1(r.toJSON())}` : r.type.name] = r.attrs;
    }
  }), n;
}, Ls = (t, e, n, r) => {
  if (e instanceof ve && e.nodeName !== n.type.name)
    throw new Error("node name mismatch!");
  if (r.mapping.set(e, n), e instanceof ve) {
    const d = e.getAttributes(), f = n.attrs;
    for (const h in f)
      f[h] !== null ? d[h] !== f[h] && h !== "ychange" && e.setAttribute(h, f[h]) : e.removeAttribute(h);
    for (const h in d)
      f[h] === void 0 && e.removeAttribute(h);
  }
  const i = bo(n), o = i.length, s = e.toArray(), a = s.length, c = Vn(o, a);
  let l = 0, u = 0;
  for (; l < c; l++) {
    const d = s[l], f = i[l];
    if (!Ki(r.mapping.get(d), f))
      if (Rr(d, f))
        r.mapping.set(d, f);
      else
        break;
  }
  for (; u + l + 1 < c; u++) {
    const d = s[a - u - 1], f = i[o - u - 1];
    if (!Ki(r.mapping.get(d), f))
      if (Rr(d, f))
        r.mapping.set(d, f);
      else
        break;
  }
  t.transact(() => {
    for (; a - l - u > 0 && o - l - u > 0; ) {
      const f = s[l], h = i[l], p = s[a - u - 1], g = i[o - u - 1];
      if (f instanceof Le && h instanceof Array)
        rf(f, h) || A1(f, h, r), l += 1;
      else {
        let b = f instanceof ve && Is(f, h), y = p instanceof ve && Is(p, g);
        if (b && y) {
          const v = bc(
            /** @type {Y.XmlElement} */
            f,
            /** @type {PModel.Node} */
            h,
            r
          ), w = bc(
            /** @type {Y.XmlElement} */
            p,
            /** @type {PModel.Node} */
            g,
            r
          );
          v.foundMappedChild && !w.foundMappedChild ? y = !1 : !v.foundMappedChild && w.foundMappedChild || v.equalityFactor < w.equalityFactor ? b = !1 : y = !1;
        }
        b ? (Ls(
          t,
          /** @type {Y.XmlFragment} */
          f,
          /** @type {PModel.Node} */
          h,
          r
        ), l += 1) : y ? (Ls(
          t,
          /** @type {Y.XmlFragment} */
          p,
          /** @type {PModel.Node} */
          g,
          r
        ), u += 1) : (r.mapping.delete(e.get(l)), e.delete(l, 1), e.insert(l, [
          Ms(h, r)
        ]), l += 1);
      }
    }
    const d = a - l - u;
    if (a === 1 && o === 0 && s[0] instanceof Le ? (r.mapping.delete(s[0]), s[0].delete(0, s[0].length)) : d > 0 && (e.slice(l, l + d).forEach((f) => r.mapping.delete(f)), e.delete(l, d)), l + u < o) {
      const f = [];
      for (let h = l; h < o - u; h++)
        f.push(Ms(i[h], r));
      e.insert(l, f);
    }
  }, re);
}, Is = (t, e) => !(e instanceof Array) && t.nodeName === e.type.name, Rs = (t, e, n) => {
  if (t === 0)
    return Bo(e, 0, e.length === 0 ? -1 : 0);
  let r = e._first === null ? null : (
    /** @type {Y.ContentType} */
    e._first.content.type
  );
  for (; r !== null && e !== r; ) {
    if (r instanceof Le) {
      if (r._length >= t)
        return Bo(r, t, e.length === 0 ? -1 : 0);
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
          return new Fi(r._item === null ? null : r._item.id, r._item === null ? Pr(r) : null, null);
        if (t -= i, r._item !== null && r._item.next !== null)
          r = /** @type {Y.ContentType} */
          r._item.next.content.type;
        else {
          if (t === 0)
            return r = r._item === null ? r : r._item.parent, new Fi(r._item === null ? null : r._item.id, r._item === null ? Pr(r) : null, null);
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
      throw Ie();
    if (t === 0 && r.constructor !== Le && r !== e)
      return O1(r._item.parent, r._item);
  }
  return Bo(e, e._length, e.length === 0 ? -1 : 0);
}, O1 = (t, e) => {
  let n = null, r = null;
  return t._item === null ? r = Pr(t) : n = F(t._item.id.client, t._item.id.clock), new Fi(n, r, e.id);
}, Si = (t, e, n, r) => {
  const i = ex(n, t);
  if (i === null || i.type !== e && !Dr(e, i.type._item))
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
function _1(t) {
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
              type: ka(c)
            };
            return Object.keys(l) && (d.attrs = l), d;
          })), a;
        }
      );
    else if (r instanceof ve) {
      i = {
        type: r.nodeName
      };
      const o = r.getAttributes();
      Object.keys(o).length && (i.attrs = o);
      const s = r.toArray();
      s.length && (i.content = s.map(n).flat());
    } else
      Ie();
    return i;
  };
  return {
    type: "doc",
    content: e.map(n)
  };
}
const N1 = (t) => Et.getState(t)?.undoManager?.undo() != null, T1 = (t) => Et.getState(t)?.undoManager?.redo() != null, P1 = /* @__PURE__ */ new Set(["paragraph"]), D1 = (t, e) => !(t instanceof G) || !(t.content instanceof ft) || !(t.content.type instanceof Ut || t.content.type instanceof ve && e.has(t.content.type.nodeName)) || t.content.type._length === 0, M1 = ({ protectedNodes: t = P1, trackedOrigins: e = [], undoManager: n = null } = {}) => new gt({
  key: Et,
  state: {
    init: (r, i) => {
      const o = re.getState(i), s = n || new Md(o.type, {
        trackedOrigins: new Set([re].concat(e)),
        deleteFilter: (a) => D1(a, t),
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
      const a = re.getState(s).binding, c = i.undoManager, l = c.undoStack.length > 0, u = c.redoStack.length > 0;
      return a ? {
        undoManager: c,
        prevSel: Ds(a, o),
        hasUndoOps: l,
        hasRedoOps: u
      } : l !== i.hasUndoOps || u !== i.hasRedoOps ? Object.assign({}, i, {
        hasUndoOps: c.undoStack.length > 0,
        hasRedoOps: c.redoStack.length > 0
      }) : i;
    }
  },
  view: (r) => {
    const i = re.getState(r.state), o = Et.getState(r.state).undoManager;
    return o.on("stack-item-added", ({ stackItem: s }) => {
      const a = i.binding;
      a && s.meta.set(a, Et.getState(r.state).prevSel);
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
mn.create({
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
      undo: () => ({ tr: t, state: e, dispatch: n }) => (t.setMeta("preventDispatch", !0), Et.getState(e).undoManager.undoStack.length === 0 ? !1 : n ? N1(e) : !0),
      redo: () => ({ tr: t, state: e, dispatch: n }) => (t.setMeta("preventDispatch", !0), Et.getState(e).undoManager.redoStack.length === 0 ? !1 : n ? T1(e) : !0)
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
    const e = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = M1(this.options.yUndoOptions), r = n.spec.view;
    n.spec.view = (s) => {
      const { undoManager: a } = Et.getState(s.state);
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
    }, o = y1(e, i);
    return this.editor.options.enableContentCheck && ((t = e.doc) === null || t === void 0 || t.on("beforeTransaction", () => {
      try {
        const s = _1(e);
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
function L1(t) {
  return !!t.getMeta(re);
}
function vc(t) {
  if (!t.length)
    return vr.empty;
  const e = [], n = t[0].$from.node(0);
  return t.forEach((r) => {
    const i = r.$from.pos, o = r.$from.nodeAfter;
    o && e.push(Ci.node(i, i + o.nodeSize, {
      class: "ProseMirror-selectednoderange"
    }));
  }), vr.create(n, e);
}
function vo(t, e, n) {
  const r = [], i = t.node(0);
  n = typeof n == "number" && n >= 0 ? n : t.sameParent(e) ? Math.max(0, t.sharedDepth(e.pos) - 1) : t.sharedDepth(e.pos);
  const o = new Zh(t, e, n), s = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((a, c) => {
    const l = s + c, u = l + a.nodeSize;
    if (l < o.start || l >= o.end)
      return;
    const d = new Bc(i.resolve(l), i.resolve(u));
    r.push(d);
  }), r;
}
class Aa {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Aa(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return new me(n, r);
  }
}
class me extends qe {
  constructor(e, n, r, i = 1) {
    const { doc: o } = e, s = e === n, a = e.pos === o.content.size && n.pos === o.content.size, c = s && !a ? o.resolve(n.pos + (i > 0 ? 1 : -1)) : n, l = s && a ? o.resolve(e.pos - (i > 0 ? 1 : -1)) : e, u = vo(l.min(c), l.max(c), r), d = c.pos >= e.pos ? u[0].$from : u[u.length - 1].$to, f = c.pos >= e.pos ? u[u.length - 1].$to : u[0].$from;
    super(d, f, u), this.depth = r;
  }
  // we can safely ignore this TypeScript error: https://github.com/Microsoft/TypeScript/issues/338
  // @ts-ignore
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(e) {
    return e instanceof me && e.$from.pos === this.$from.pos && e.$to.pos === this.$to.pos;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.anchor)), i = e.resolve(n.map(this.head));
    return new me(r, i);
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
      return new me(o, s, this.depth);
    }
    const n = this.ranges[0], r = e.resolve(Math.max(0, n.$from.pos - 1));
    return new me(this.$anchor, r, this.depth);
  }
  extendForwards() {
    const { doc: e } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const i = this.ranges.slice(1), o = i[0].$from, s = i[i.length - 1].$to;
      return new me(s, o, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], r = e.resolve(Math.min(e.content.size, n.$to.pos + 1));
    return new me(this.$anchor, r, this.depth);
  }
  static fromJSON(e, n) {
    return new me(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r, i, o = 1) {
    return new this(e.resolve(n), e.resolve(r), i, o);
  }
  getBookmark() {
    return new Aa(this.anchor, this.head);
  }
}
me.prototype.visible = !1;
function li(t) {
  return t instanceof me;
}
mn.create({
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
          const u = me.create(i, a, c, e, -1);
          return s.setSelection(u), n.dispatch(s), !0;
        }
        const l = o.extendBackwards();
        return s.setSelection(l), n.dispatch(s), !0;
      },
      // extend NodeRangeSelection downwards
      "Shift-ArrowDown": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, selection: o, tr: s } = r, { anchor: a, head: c } = o;
        if (!li(o)) {
          const u = me.create(i, a, c, e);
          return s.setSelection(u), n.dispatch(s), !0;
        }
        const l = o.extendForwards();
        return s.setSelection(l), n.dispatch(s), !0;
      },
      // add `NodeRangeSelection` to all nodes
      "Mod-a": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, tr: o } = r, s = me.create(i, 0, i.content.size, e);
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
                const { state: d } = n, { doc: f, selection: h, tr: p } = d, { $anchor: g, $head: b } = h;
                if (g.sameParent(b))
                  return;
                const y = me.create(f, g.pos, b.pos, this.options.depth);
                p.setSelection(y), n.dispatch(p);
              }, { once: !0 }), !1;
            }
          },
          // when selecting some text we want to render some decorations
          // to preview a `NodeRangeSelection`
          decorations: (n) => {
            const { selection: r } = n, i = li(r);
            if (t = !1, !e)
              return i ? (t = !0, vc(r.ranges)) : null;
            const { $from: o, $to: s } = r;
            if (!i && o.sameParent(s))
              return null;
            const a = vo(o, s, this.options.depth);
            return a.length ? (t = !0, vc(a)) : null;
          }
        }
      })
    ];
  }
});
function I1(t) {
  let e = "";
  const n = getComputedStyle(t);
  for (let r = 0; r < n.length; r += 1)
    e += `${n[r]}:${n.getPropertyValue(n[r])};`;
  return e;
}
function R1(t) {
  const e = t.cloneNode(!0), n = [t, ...Array.from(t.getElementsByTagName("*"))], r = [e, ...Array.from(e.getElementsByTagName("*"))];
  return n.forEach((i, o) => {
    r[o].style.cssText = I1(i);
  }), e;
}
const sf = (t) => {
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
function $1(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function j1(t, e, n) {
  const r = parseInt(ci(t.dom, "paddingLeft"), 10), i = parseInt(ci(t.dom, "paddingRight"), 10), o = parseInt(ci(t.dom, "borderLeftWidth"), 10), s = parseInt(ci(t.dom, "borderLeftWidth"), 10), a = t.dom.getBoundingClientRect();
  return {
    left: $1(e, a.left + r + o, a.right - i - s),
    top: n
  };
}
function af(t) {
  var e;
  (e = t.parentNode) === null || e === void 0 || e.removeChild(t);
}
function F1(t, e) {
  const { doc: n } = e.view.state, r = sf({
    editor: e,
    x: t.clientX,
    y: t.clientY,
    direction: "right"
  });
  if (!r.resultNode || r.pos === null)
    return [];
  const i = t.clientX, o = j1(e.view, i, t.clientY), s = e.view.posAtCoords(o);
  if (!s)
    return [];
  const { pos: a } = s;
  if (!n.resolve(a).parent)
    return [];
  const l = n.resolve(r.pos), u = n.resolve(r.pos + 1);
  return vo(l, u, 0);
}
function z1(t, e) {
  const { view: n } = e;
  if (!t.dataTransfer)
    return;
  const { empty: r, $from: i, $to: o } = n.state.selection, s = F1(t, e), a = vo(i, o, 0), c = a.some((b) => s.find((y) => y.$from === b.$from && y.$to === b.$to)), l = r || !c ? s : a;
  if (!l.length)
    return;
  const { tr: u } = n.state, d = document.createElement("div"), f = l[0].$from.pos, h = l[l.length - 1].$to.pos, p = me.create(n.state.doc, f, h), g = p.content();
  l.forEach((b) => {
    const y = n.nodeDOM(b.$from.pos), v = R1(y);
    d.append(v);
  }), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), t.dataTransfer.clearData(), t.dataTransfer.setDragImage(d, 0, 0), n.dragging = { slice: g, move: !0 }, u.setSelection(p), n.dispatch(u), document.addEventListener("drop", () => af(d), { once: !0 });
}
const wc = (t, e) => {
  const n = t.resolve(e), { depth: r } = n;
  return r === 0 ? e : n.pos - n.parentOffset - 1;
}, xc = (t, e) => {
  const n = t.nodeAt(e), r = t.resolve(e);
  let { depth: i } = r, o = n;
  for (; i > 0; ) {
    const s = r.node(i);
    i -= 1, i === 0 && (o = s);
  }
  return o;
}, Uo = (t, e) => {
  const n = re.getState(t);
  return n ? Rs(e, n.type, n.binding.mapping) : null;
}, B1 = (t, e) => {
  const n = re.getState(t);
  return n ? Si(n.doc, n.type, e, n.binding.mapping) || 0 : -1;
}, Sc = (t, e) => {
  let n = e;
  for (; n && n.parentNode && n.parentNode !== t.dom; )
    n = n.parentNode;
  return n;
}, lf = new $e("dragHandle"), cf = ({ pluginKey: t = lf, element: e, editor: n, tippyOptions: r, onNodeChange: i }) => {
  const o = document.createElement("div");
  let s = null, a = !1, c = null, l = -1, u;
  return e.addEventListener("dragstart", (d) => {
    z1(d, n), setTimeout(() => {
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
        const g = d.getMeta("lockDragHandle"), b = d.getMeta("hideDragHandle");
        if (g !== void 0 && (a = g), b && s)
          return s.hide(), a = !1, c = null, l = -1, i?.({ editor: n, node: null, pos: -1 }), f;
        if (d.docChanged && l !== -1 && e && s)
          if (L1(d)) {
            const y = B1(p, u);
            y !== l && (l = y);
          } else {
            const y = d.mapping.map(l);
            y !== l && (l = y, u = Uo(p, l));
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
          if (s || (s = Qh(d.dom, {
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
          let g = d.nodeDOM(l);
          if (g = Sc(d, g), g === d.dom || g?.nodeType !== 1)
            return;
          const b = d.posAtDOM(g, 0), y = xc(n.state.doc, b), v = wc(n.state.doc, b);
          c = y, l = v, u = Uo(d.state, l), i?.({ editor: n, node: c, pos: l }), s.setProps({
            getReferenceClientRect: () => g.getBoundingClientRect()
          });
        },
        // TODO: Kills even on hot reload
        destroy() {
          s?.destroy(), e && af(o);
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
          const h = sf({
            x: f.clientX,
            y: f.clientY,
            direction: "right",
            editor: n
          });
          if (!h.resultElement)
            return !1;
          let p = h.resultElement;
          if (p = Sc(d, p), p === d.dom || p?.nodeType !== 1)
            return !1;
          const g = d.posAtDOM(p, 0), b = xc(n.state.doc, g);
          if (b !== c) {
            const y = wc(n.state.doc, g);
            c = b, l = y, u = Uo(d.state, l), i?.({ editor: n, node: c, pos: l }), s.setProps({
              getReferenceClientRect: () => p.getBoundingClientRect()
            }), s.show();
          }
          return !1;
        }
      }
    }
  });
};
mn.create({
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
      cf({
        tippyOptions: this.options.tippyOptions,
        element: t,
        editor: this.editor,
        onNodeChange: this.options.onNodeChange
      })
    ];
  }
});
const V1 = (t) => {
  const { className: e = "drag-handle", children: n, editor: r, pluginKey: i = lf, onNodeChange: o, tippyOptions: s } = t, [a, c] = ae(null), l = ot(null);
  return Ze(() => a ? r.isDestroyed ? () => {
    l.current = null;
  } : (l.current || (l.current = cf({
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
}, Ca = (t) => typeof t == "object" && t !== null && !Array.isArray(t), H1 = (t, e) => {
  const n = Ca(t.attrs) ? t.attrs : {};
  return {
    ...t,
    attrs: {
      ...n,
      id: e
    }
  };
}, Ea = (t) => {
  const e = { ...t };
  if (e.type && Bn(e.type) && Ca(e.attrs) && "id" in e.attrs) {
    const { id: n, ...r } = e.attrs;
    e.attrs = Object.keys(r).length > 0 ? r : void 0;
  }
  return Array.isArray(e.content) && (e.content = e.content.map(Ea)), e;
}, lr = (t) => t.map(Ea), W1 = (t) => Ca(t) ? t.type : void 0, U1 = (t, e) => {
  const n = Ea(t);
  return n.type && Bn(n.type) ? H1(n, e) : n;
}, K1 = (t, e) => e.length === 0 ? be.empty : be.fromArray(
  e.map((n) => t.schema.nodeFromJSON(n))
), cr = (t, e) => new Ve(K1(t, e), 0, 0), ur = (t, e) => {
  const n = Hv(t, e);
  if (!n)
    throw new G1(e);
  return n;
}, kt = (t) => t.isEmpty ? { json: null, html: null } : { json: t.getJSON(), html: t.getHTML() };
class G1 extends Error {
  code = "target_not_found";
  targetId;
  constructor(e) {
    super(
      `Could not find block node ${e} in the current editor document.`
    ), this.name = "NotesTextEditorPatchTargetNotFoundError", this.targetId = e, Object.setPrototypeOf(this, new.target.prototype);
  }
}
class Y1 extends Error {
  code = "unsupported_patch_type";
  patchType;
  constructor(e) {
    super(`Unsupported NotesTextEditor patch type: ${String(e)}`), this.name = "NotesTextEditorUnsupportedPatchTypeError", this.patchType = e, Object.setPrototypeOf(this, new.target.prototype);
  }
}
const q1 = (t, e) => {
  switch (e.type) {
    case "top_level_prepend": {
      const r = cr(t, lr(e.blocks)), i = t.state.tr.replace(0, 0, r);
      return i.docChanged && t.view.dispatch(i), kt(t);
    }
    case "top_level_append": {
      const r = cr(t, lr(e.blocks)), i = t.state.doc.content.size, o = t.state.tr.replace(i, i, r);
      return o.docChanged && t.view.dispatch(o), kt(t);
    }
    case "insert_before": {
      const r = ur(t, e.targetId), i = cr(t, lr(e.blocks)), o = t.state.tr.replace(r.pos, r.pos, i);
      return o.docChanged && t.view.dispatch(o), kt(t);
    }
    case "insert_after": {
      const r = ur(t, e.targetId), i = r.pos + r.node.nodeSize, o = cr(t, lr(e.blocks)), s = t.state.tr.replace(i, i, o);
      return s.docChanged && t.view.dispatch(s), kt(t);
    }
    case "replace_block": {
      const r = ur(t, e.targetId), i = t.schema.nodeFromJSON(
        U1(e.block, e.targetId)
      ), o = t.state.tr.replaceWith(
        r.pos,
        r.pos + r.node.nodeSize,
        i
      );
      return o.docChanged && t.view.dispatch(o), kt(t);
    }
    case "replace_content": {
      const r = ur(t, e.targetId), i = t.state.tr.replace(
        r.pos + 1,
        r.pos + r.node.nodeSize - 1,
        cr(t, lr(e.content))
      );
      return i.docChanged && t.view.dispatch(i), kt(t);
    }
    case "delete_block": {
      const r = ur(t, e.targetId), i = t.state.tr.delete(
        r.pos,
        r.pos + r.node.nodeSize
      );
      return i.docChanged && t.view.dispatch(i), kt(t);
    }
  }
  const n = e;
  throw new Y1(
    W1(n)
  );
}, X1 = ({
  placeholder: t,
  translations: e,
  aiBlockConfig: n,
  imageUploadConfig: r
}) => [
  Uc,
  Kc,
  Gc,
  Yc,
  qc,
  Xc,
  Jc,
  Zc,
  Qc,
  Fu,
  Bu,
  zu,
  Ev,
  n0,
  h0,
  zv.configure({
    currentConfig: n
  }),
  Jv,
  l0,
  ...r ? [Zv(r)] : [],
  Vv,
  // Automatically add unique IDs to all block nodes
  ep,
  tp(t),
  np(t),
  u0({
    aiBlockConfig: n,
    translations: e,
    imageUploadConfig: r
  })
], J1 = js({
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
}), kc = (t) => t.isVisible !== !1, Z1 = (t) => "isVisible" in t ? t.isVisible !== !1 : !0, Q1 = (t) => !!t && "items" in t, eS = (t) => !!t && "label" in t && !("items" in t), tS = ({
  primaryAction: t,
  secondaryActions: e = [],
  metadata: n,
  otherActions: r = [],
  banner: i
}) => {
  const o = e.filter(kc), s = r.filter(Z1), a = t && kc(t), c = o.length > 0, l = s.length > 0, u = c || l || a;
  return /* @__PURE__ */ x("div", { className: "flex flex-col", children: [
    (n && n.length > 0 || u) && /* @__PURE__ */ x("div", { className: "flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center", children: [
      n && n.length > 0 && /* @__PURE__ */ m(bs, { items: n }),
      /* @__PURE__ */ x("div", { className: "flex flex-shrink-0 flex-row items-center gap-2", children: [
        l && /* @__PURE__ */ m(to, { items: s }),
        o.map((d, f) => /* @__PURE__ */ m(
          Q,
          {
            onClick: d.onClick,
            variant: d.variant || "outline",
            label: d.label,
            icon: d.icon,
            hideLabel: d.hideLabel,
            disabled: d.disabled,
            tooltip: d.tooltip
          },
          f
        )),
        a && (c || l) && /* @__PURE__ */ m("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
        a && eS(t) && /* @__PURE__ */ m(
          Q,
          {
            label: t.label,
            onClick: t.onClick,
            variant: "default",
            icon: t.icon,
            disabled: t.disabled,
            tooltip: t.tooltip
          }
        ),
        a && Q1(t) && /* @__PURE__ */ m(
          Yo,
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
    i && /* @__PURE__ */ x("div", { className: J1({ variant: i.variant }), children: [
      /* @__PURE__ */ m(_t, { icon: i.icon }),
      /* @__PURE__ */ m(Hc, { children: i.title })
    ] })
  ] });
}, nS = ({
  value: t,
  onChange: e,
  placeholder: n,
  disabled: r = !1
}) => /* @__PURE__ */ m("div", { className: "mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 sm:px-14 px-0", children: /* @__PURE__ */ m(
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
) }), rS = Pt(function({
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
  dataTestId: g
}, b) {
  const y = gn(), v = ot(null), w = ot(null), k = Cc(), [A] = ae(() => r?.content || ""), [O, S] = ae(r?.title || ""), [E, T] = ae(null), L = (I) => {
    switch (I) {
      case "file-too-large":
        return y.imageUpload.errors.fileTooLarge;
      case "invalid-type":
        return y.imageUpload.errors.invalidType;
      case "upload-failed":
        return y.imageUpload.errors.uploadFailed;
      default:
        return y.imageUpload.errors.uploadFailed;
    }
  };
  Ze(() => {
    a && a(O);
  }, [O, a]);
  const M = ot(!1), N = rp({
    extensions: X1({
      placeholder: n,
      translations: y,
      aiBlockConfig: o,
      imageUploadConfig: s ? {
        ...s,
        onError: (I) => {
          T(I);
        }
      } : void 0
    }),
    content: A,
    onUpdate: ({ editor: I }) => {
      M.current || e(kt(I));
    },
    onCreate: ({ editor: I }) => {
      if (Wl(I.state.doc)) {
        M.current = !0;
        try {
          I.commands.setContent(I.getJSON());
        } finally {
          M.current = !1;
        }
        Wl(I.state.doc) || e(kt(I));
      }
    },
    editable: !i
  }), P = Ye((I) => {
    M.current = !0;
    try {
      return I();
    } finally {
      M.current = !1;
    }
  }, []);
  Ec(b, () => ({
    clear: () => N?.commands.clearContent(),
    focus: () => N?.commands.focus(),
    setContent: (I) => N?.commands.setContent(I),
    applyPageDocumentPatch: (I) => N ? P(() => q1(N, I)) : { json: null, html: null },
    insertAIBlock: () => {
      !N || !o || N.chain().focus().insertContentAt(N.state.doc.content.size, [
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
    insertTranscript: (I, H, le) => {
      N && N.chain().focus().insertContentAt(N.state.doc.content.size, [
        {
          type: "transcript",
          attrs: {
            data: { title: I, users: H, messages: le },
            isOpen: !1
          }
        },
        { type: "paragraph" }
      ]).run();
    },
    pushContent: (I) => {
      N && N.chain().focus().insertContentAt(N.state.doc.content.size, I).run();
    },
    insertImage: (I) => {
      !N || !s || nd(N, I, {
        ...s,
        onError: (H) => {
          T(H);
        }
      });
    }
  }));
  const _ = $s(
    () => ({
      offset: [0, 5]
    }),
    []
  ), D = Ye(
    ({ node: I, pos: H }) => {
      w.current = I ? { pos: H, nodeSize: I.nodeSize } : null;
    },
    []
  ), $ = Ye(() => {
    const I = w.current;
    if (!I || !N) return;
    const { pos: H, nodeSize: le } = I, He = N.state.doc.nodeAt(H);
    if (He && He.content.size === 0)
      N.chain().focus().setTextSelection(H + 1).insertContent("/").run();
    else {
      const We = H + le;
      N.chain().focus().insertContentAt(We, { type: "paragraph" }).setTextSelection(We + 1).insertContent("/").run();
    }
  }, [N]), B = c || l && l.length > 0 || d && d.length > 0 || u && u.length > 0 || f, V = a || O;
  return N ? /* @__PURE__ */ m(Fc, { dataTestId: g, children: /* @__PURE__ */ x(
    "div",
    {
      className: "relative flex h-full w-full flex-col",
      ref: v,
      id: k,
      children: [
        B && /* @__PURE__ */ m(
          tS,
          {
            primaryAction: c,
            secondaryActions: l,
            metadata: d,
            otherActions: u,
            banner: f
          }
        ),
        E && /* @__PURE__ */ m("div", { className: "mx-auto flex w-full max-w-[824px] px-14 py-2", children: /* @__PURE__ */ x("div", { className: "flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm", children: [
          /* @__PURE__ */ x("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ m("div", { className: "flex-shrink-0", children: /* @__PURE__ */ m(ou, { size: "sm", type: "critical" }) }),
            /* @__PURE__ */ m(
              "p",
              {
                className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
                title: L(E),
                children: L(E)
              }
            )
          ] }),
          /* @__PURE__ */ m("div", { className: "flex-shrink-0", children: /* @__PURE__ */ m(
            Q,
            {
              variant: "outline",
              onClick: () => T(null),
              label: y.imageUpload.errors.dismiss,
              size: "sm"
            }
          ) })
        ] }) }),
        !i && !h && /* @__PURE__ */ m("div", { className: "absolute bottom-8 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md", children: /* @__PURE__ */ m(
          ip,
          {
            editor: N,
            disableButtons: !1,
            showEmojiPicker: !1,
            plainHtmlMode: !1
          }
        ) }),
        /* @__PURE__ */ x(iu, { className: "h-full gap-6", children: [
          V && /* @__PURE__ */ m(
            nS,
            {
              value: O,
              onChange: a ? S : void 0,
              placeholder: p,
              disabled: !a || i
            }
          ),
          /* @__PURE__ */ x(
            "div",
            {
              className: "notes-text-editor h-full",
              onClick: () => N.commands.focus(),
              children: [
                !i && /* @__PURE__ */ m(
                  V1,
                  {
                    editor: N,
                    tippyOptions: _,
                    onNodeChange: D,
                    children: /* @__PURE__ */ x("div", { className: "flex flex-row", children: [
                      /* @__PURE__ */ m(
                        Pn,
                        {
                          compact: !0,
                          variant: "ghost",
                          size: "sm",
                          className: "text-f1-foreground-tertiary",
                          onClick: $,
                          label: "Add paragraph",
                          hideLabel: !0,
                          icon: op
                        }
                      ),
                      /* @__PURE__ */ m(
                        "div",
                        {
                          className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
                          draggable: !0,
                          "data-drag-handle": !0,
                          children: /* @__PURE__ */ m(_t, { icon: sp, size: "xs" })
                        }
                      )
                    ] })
                  }
                ),
                /* @__PURE__ */ m(
                  ap,
                  {
                    editor: N,
                    className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
                  }
                )
              ]
            }
          )
        ] }),
        !i && /* @__PURE__ */ m(
          lp,
          {
            editorId: k,
            editor: N,
            disableButtons: !1,
            isToolbarOpen: !h,
            isFullscreen: !1,
            plainHtmlMode: !1
          }
        )
      ]
    }
  ) }) : null;
}), DS = ({
  withHeader: t = !1,
  withTitle: e = !0,
  withToolbar: n = !0
}) => /* @__PURE__ */ x(
  "div",
  {
    className: "relative flex h-full w-full flex-col",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      t && /* @__PURE__ */ x("div", { className: "flex items-center justify-between border-b border-f1-border px-6 py-3", children: [
        /* @__PURE__ */ x("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ m(j, { className: "h-6 w-20 rounded-md" }),
          /* @__PURE__ */ m(j, { className: "h-6 w-24 rounded-md" })
        ] }),
        /* @__PURE__ */ x("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m(j, { className: "h-8 w-16 rounded-md" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-12 rounded-md" })
        ] })
      ] }),
      n && /* @__PURE__ */ x("div", { className: "absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md", children: [
        /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
        /* @__PURE__ */ x("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" })
        ] }),
        /* @__PURE__ */ x("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" })
        ] }),
        /* @__PURE__ */ x("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded" })
        ] })
      ] }),
      /* @__PURE__ */ x(iu, { className: "h-full gap-6", children: [
        e && /* @__PURE__ */ m("div", { className: "mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5", children: /* @__PURE__ */ m(j, { className: "h-8 w-80 rounded-md" }) }),
        /* @__PURE__ */ m("div", { className: "h-full", children: /* @__PURE__ */ m("div", { className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14", children: /* @__PURE__ */ x("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ m(j, { className: "h-5 w-full rounded-md" }),
          /* @__PURE__ */ m(j, { className: "h-5 w-4/5 rounded-md" }),
          /* @__PURE__ */ m(j, { className: "h-5 w-3/5 rounded-md" }),
          /* @__PURE__ */ m(j, { className: "h-5 w-full rounded-md" }),
          /* @__PURE__ */ m(j, { className: "h-5 w-1/2 rounded-md" })
        ] }) }) })
      ] })
    ]
  }
), MS = rS, uf = Pt(
  ({ header: t, actions: e, open: n, onClose: r }, i) => {
    const [o, s] = ae(!1), a = Ye(() => {
      s(!0);
      const c = setTimeout(() => {
        r?.(), s(!1);
      }, 200);
      return () => clearTimeout(c);
    }, [r]);
    return /* @__PURE__ */ m(
      cp,
      {
        open: n && !o,
        onOpenChange: (c) => !c && a?.(),
        children: /* @__PURE__ */ x(up, { ref: i, className: "bottom-3 top-auto max-w-[400px]", children: [
          /* @__PURE__ */ x(dp, { className: "flex flex-col gap-4 px-4 py-5", children: [
            /* @__PURE__ */ m(ou, { type: t.type, size: "lg" }),
            /* @__PURE__ */ x("div", { className: "flex flex-col gap-0.5", children: [
              /* @__PURE__ */ m(fp, { className: "text-xl sm:text-lg", children: t.title }),
              /* @__PURE__ */ m(hp, { className: "text-lg sm:text-base", children: t.description })
            ] })
          ] }),
          e && /* @__PURE__ */ x(pp, { className: "px-4 pb-4 pt-2", children: [
            /* @__PURE__ */ x("div", { className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full", children: [
              /* @__PURE__ */ m(Q, { variant: "outline", ...e.secondary }),
              /* @__PURE__ */ m(
                Q,
                {
                  ...e.primary,
                  variant: e.primary.variant || "default"
                }
              )
            ] }),
            /* @__PURE__ */ x("div", { className: "flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full", children: [
              /* @__PURE__ */ m(Q, { variant: "outline", ...e.secondary, size: "lg" }),
              /* @__PURE__ */ m(
                Q,
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
uf.displayName = "Dialog";
const LS = Re(
  Dt(
    { name: "Dialog", type: "info" },
    Gi("Dialog", uf)
  )
), iS = ({ description: t }) => {
  const [e, n] = ae(!1), [r, i] = ae(!1), o = gn(), s = ot(null), a = ot(null), c = Ka({ ref: s }), l = Ka({ ref: a });
  return Ze(() => {
    l.height && c.height && i(l.height > c.height);
  }, [l.height, c.height]), /* @__PURE__ */ x("div", { className: "flex max-w-[640px] flex-col gap-1", children: [
    /* @__PURE__ */ x(
      tn.div,
      {
        initial: !1,
        animate: {
          height: e ? l.height ?? c.height : c.height ?? "3rem"
        },
        transition: {
          duration: r ? 0.15 : 0,
          ease: [0.165, 0.84, 0.44, 1]
        },
        className: z(
          e ? "overflow-y-scroll" : "overflow-clip",
          "relative max-h-80"
        ),
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              ref: a,
              className: "pointer-events-none invisible absolute left-0 top-0 -z-10 text-lg text-f1-foreground-secondary",
              "aria-hidden": "true",
              children: t
            }
          ),
          /* @__PURE__ */ m(
            "div",
            {
              ref: s,
              className: z(
                "text-lg text-f1-foreground-secondary",
                !e && "line-clamp-2"
              ),
              children: t
            }
          )
        ]
      }
    ),
    (r || e) && /* @__PURE__ */ m(
      "button",
      {
        onClick: () => n((u) => !u),
        className: "relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover",
        children: e ? o.actions.showLess : o.actions.showAll
      }
    )
  ] });
}, Ko = (t) => t.isVisible !== !1;
function oS({
  title: t,
  avatar: e,
  deactivated: n,
  description: r,
  primaryAction: i,
  secondaryActions: o = [],
  otherActions: s = [],
  status: a,
  metadata: c = []
}) {
  const l = [
    a && {
      label: a.label,
      value: {
        type: "status",
        label: a.text,
        variant: a.variant
      },
      actions: a.actions,
      hideLabel: !0
    },
    ...c
  ], u = o.filter(Ko), d = s.filter(Ko), f = i && Ko(i), h = u.length > 0, p = d.length > 0, g = (y) => !!y && "items" in y, b = (y) => !!y && "label" in y && !("items" in y);
  return /* @__PURE__ */ x("div", { className: "resource-header flex flex-col gap-3 px-6 pb-5 pt-3", children: [
    /* @__PURE__ */ x(
      "div",
      {
        className: z(
          "flex flex-col items-start justify-start gap-4 md:flex-row",
          !r && "md:items-center"
        ),
        children: [
          /* @__PURE__ */ x(
            "div",
            {
              className: z(
                "flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start",
                !r && "md:items-center"
              ),
              children: [
                e && /* @__PURE__ */ m("div", { className: "flex items-start", children: /* @__PURE__ */ m(
                  nu,
                  {
                    avatar: {
                      ...e.type === "generic" ? { ...e, type: "company" } : e
                    },
                    size: "xl"
                  }
                ) }),
                /* @__PURE__ */ x("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ m(
                    "span",
                    {
                      className: z(
                        "text-2xl font-semibold",
                        n ? "text-f1-foreground/[0.61]" : "text-f1-foreground"
                      ),
                      children: t
                    }
                  ),
                  r && /* @__PURE__ */ m(iS, { description: r })
                ] })
              ]
            }
          ),
          l.length > 0 && /* @__PURE__ */ m("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden", children: /* @__PURE__ */ m(bs, { items: l }) }),
          /* @__PURE__ */ x("div", { className: "flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden", children: [
            f && b(i) && /* @__PURE__ */ m("div", { className: "w-full md:hidden [&>*]:w-full", children: /* @__PURE__ */ m(
              Q,
              {
                label: i.label,
                onClick: i.onClick,
                variant: "default",
                icon: i.icon,
                size: "lg",
                disabled: i.disabled,
                tooltip: i.tooltip,
                loading: i.loading
              }
            ) }),
            f && g(i) && /* @__PURE__ */ m("div", { className: "w-full md:hidden [&>*]:w-full", children: /* @__PURE__ */ m(
              Yo,
              {
                items: i.items,
                onClick: i.onClick,
                variant: "default",
                value: i.value,
                size: "lg",
                disabled: i.disabled,
                tooltip: i.tooltip,
                loading: i.loading
              }
            ) }),
            u.map((y) => /* @__PURE__ */ m(Ra, { children: /* @__PURE__ */ m("div", { className: "w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full", children: /* @__PURE__ */ m(
              Q,
              {
                label: y.label,
                onClick: y.onClick,
                variant: y.variant ?? "outline",
                icon: y.icon,
                size: "lg",
                hideLabel: y.hideLabel,
                disabled: y.disabled,
                tooltip: y.tooltip,
                loading: y.loading
              }
            ) }) }, y.label)),
            d.length > 0 && /* @__PURE__ */ m("div", { className: "w-full [&>*]:w-full [&_button]:w-full", children: /* @__PURE__ */ m(ru, { items: d }) })
          ] }),
          /* @__PURE__ */ x("div", { className: "-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto", children: [
            d.length > 0 && /* @__PURE__ */ m("div", { children: /* @__PURE__ */ m(to, { items: d }) }),
            u.map((y) => /* @__PURE__ */ m(Ra, { children: /* @__PURE__ */ m("div", { className: "hidden md:block", children: /* @__PURE__ */ m(
              Q,
              {
                label: y.label,
                onClick: y.onClick,
                variant: y.variant ?? "outline",
                icon: y.icon,
                hideLabel: y.hideLabel,
                disabled: y.disabled,
                tooltip: y.tooltip,
                loading: y.loading
              }
            ) }) }, y.label)),
            f && (h || p) && /* @__PURE__ */ m("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
            f && b(i) && /* @__PURE__ */ m("div", { className: "hidden md:block", children: /* @__PURE__ */ m(
              Q,
              {
                label: i.label,
                onClick: i.onClick,
                variant: "default",
                icon: i.icon,
                disabled: i.disabled,
                tooltip: i.tooltip,
                loading: i.loading
              }
            ) }),
            f && g(i) && /* @__PURE__ */ m("div", { className: "hidden md:block", children: /* @__PURE__ */ m(
              Yo,
              {
                items: i.items,
                onClick: i.onClick,
                variant: "default",
                value: i.value,
                size: "md",
                disabled: i.disabled,
                tooltip: i.tooltip,
                loading: i.loading
              }
            ) })
          ] })
        ]
      }
    ),
    l.length > 0 && /* @__PURE__ */ m("div", { className: "hidden flex-wrap items-center gap-x-3 gap-y-1 md:block", children: /* @__PURE__ */ m(bs, { items: l }) })
  ] });
}
const sS = ({
  avatar: t,
  title: e,
  description: n,
  primaryAction: r,
  secondaryActions: i,
  otherActions: o,
  status: s,
  metadata: a,
  deactivated: c
}) => /* @__PURE__ */ m(
  oS,
  {
    avatar: t,
    title: e,
    description: n,
    primaryAction: r,
    secondaryActions: i,
    otherActions: o,
    status: s,
    metadata: a,
    deactivated: c
  }
), IS = Gi(
  "ResourceHeader",
  sS
), aS = Pt(
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
    const d = r?.includes(".mp4"), [f, h] = ae(!1), p = () => {
      s && s(), h(!0);
    };
    return a ? /* @__PURE__ */ m(df, { ref: u }) : f ? null : /* @__PURE__ */ x(
      "div",
      {
        ref: u,
        className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
        children: [
          /* @__PURE__ */ m("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: d ? /* @__PURE__ */ m(
            "video",
            {
              src: r,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              className: "h-full w-full rounded-lg object-cover"
            }
          ) : /* @__PURE__ */ m(
            "img",
            {
              src: r,
              alt: "",
              className: "h-full w-full rounded-lg object-cover"
            }
          ) }),
          /* @__PURE__ */ x("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
            /* @__PURE__ */ x(
              "div",
              {
                className: z(
                  "flex w-full flex-col gap-1",
                  l === "default" ? "sm:max-w-lg" : void 0
                ),
                children: [
                  /* @__PURE__ */ m("h3", { className: "font-bold text-xl text-f1-foreground", children: e }),
                  n && /* @__PURE__ */ m("p", { className: "text-base text-f1-foreground-secondary", children: n })
                ]
              }
            ),
            /* @__PURE__ */ x("div", { className: "flex gap-3", children: [
              i && /* @__PURE__ */ m(
                Q,
                {
                  onClick: i.onClick,
                  label: i.label,
                  variant: i.variant || "default",
                  size: "md",
                  icon: i.icon
                }
              ),
              o && /* @__PURE__ */ m(
                Q,
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
          s && /* @__PURE__ */ m("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ m(
            Q,
            {
              variant: "ghost",
              icon: Ks,
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
), df = Pt(
  function(e, n) {
    return /* @__PURE__ */ x(
      "div",
      {
        ref: n,
        className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
        role: "status",
        "aria-busy": "true",
        "aria-live": "polite",
        ...e,
        children: [
          /* @__PURE__ */ m("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: /* @__PURE__ */ m(j, { className: "h-full w-full rounded-lg" }) }),
          /* @__PURE__ */ x("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
            /* @__PURE__ */ x("div", { className: "flex w-full flex-col gap-1 sm:max-w-lg", children: [
              /* @__PURE__ */ m(j, { className: "h-7 w-3/4" }),
              /* @__PURE__ */ m(j, { className: "h-4 w-full" }),
              /* @__PURE__ */ m(j, { className: "h-4 w-2/3" })
            ] }),
            /* @__PURE__ */ x("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ m(j, { className: "h-9 w-32" }),
              /* @__PURE__ */ m(j, { className: "h-9 w-24" })
            ] })
          ] }),
          /* @__PURE__ */ m("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ m(j, { className: "h-8 w-8 rounded-md" }) })
        ]
      }
    );
  }
), lS = Re(
  Wc(aS, df)
);
lS.displayName = "BaseBanner";
export {
  Vy as A,
  Wy as B,
  fS as C,
  LS as D,
  yS as F,
  Jy as L,
  bs as M,
  DS as N,
  OS as P,
  bS as R,
  ob as V,
  ab as _,
  Qv as a,
  Qy as b,
  gS as c,
  Ky as d,
  pS as e,
  hS as f,
  mS as g,
  My as h,
  Mt as i,
  lS as j,
  Zu as k,
  vS as l,
  wS as m,
  xS as n,
  SS as o,
  kS as p,
  AS as q,
  CS as r,
  ES as s,
  _S as t,
  IS as u,
  NS as v,
  MS as w,
  G1 as x,
  Y1 as y,
  Jo as z
};
