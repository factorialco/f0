import { jsxs as C, jsx as y, Fragment as on } from "react/jsx-runtime";
import * as Y from "react";
import O, { useRef as ye, useState as de, useCallback as he, useEffect as Fe, useLayoutEffect as pc, PureComponent as Gn, useMemo as Ke, forwardRef as Pt, useId as mc, useImperativeHandle as gc } from "react";
import { M as Dn, aG as lf, O as J, ax as cf, d8 as uf, d9 as df, P as Ds, a6 as He, aO as yc, da as Cn, db as ff, dc as hf, dd as Na, de as Pa, df as Da, dg as Ia, dh as Ma, di as pf, dj as mf, dk as gf, dl as yf, dm as bc, dn as vc, aW as In, dp as De, dq as G, dr as ze, ds as wc, dt as bf, du as xc, dv as Is, dw as vf, dx as xe, dy as Gi, dz as ae, dA as Sc, dB as Yi, dC as Ms, dD as Ls, dE as Rs, dF as be, dG as $e, dH as Wo, dI as qi, dJ as wf, dK as Pe, dL as Xi, dM as Re, dN as gn, dO as $s, dP as Ji, dQ as di, dR as Zi, cd as js, dS as xf, dT as Qr, dU as ki, dV as Sf, dW as kf, dX as Af, dY as Cf, dZ as Ef, d_ as Of, d$ as kc, e0 as Ac, e1 as Cc, e2 as Ec, e3 as Oc, e4 as _f, e5 as Ai, e6 as Tf, e7 as Nf, e8 as $r, e9 as Ut, a3 as _t, ea as Fs, eb as jr, ec as _c, a4 as Tc, ed as Pf, ee as Df, a1 as If, ef as Mf, bZ as Lf, a2 as Rf, eg as Ae, eh as Ce, ag as $f, ah as jf, ai as Ff, al as zf, ei as Bf, ej as Vf, ek as Nc, bY as Dt, ar as ln, bp as Hf, Q as ue, aE as zs, el as Wf, em as Uf, cN as Te, en as ko, eo as nt, ep as vt, eq as We, er as Kf, es as fi, et as at, eu as Pc, ev as Ze, ew as Bs, ex as tt, ey as La, ez as Gf, eA as Dc, eB as Se, eC as qe, eD as vr, eE as Ci, eF as Ic, eG as Yf, eH as yn, eI as qf, eJ as Xf, eK as Jf, a8 as B, aS as Mc, bu as Zf, a7 as Lc, eL as Fr, eM as zr, eN as Vs, eO as Qf, eP as Rc, eQ as $c, eR as jc, eS as eh, eT as Fc, eU as zc, eV as Bc, eW as Vc, eX as Hc, eY as Wc, eZ as th, e_ as nh, u as Yn, aN as rh, bM as Qi, U as ih, W as ei, bo as oh, b7 as sh, br as ah, e$ as lh, f0 as ch, f1 as uh, f2 as dh, f3 as fh, f4 as hh, aJ as Uc, aK as Hs, aL as Ws, f5 as Ra, f6 as ph, f7 as mh, f8 as gh, f9 as yh, fa as bh, fb as vh, fc as wh, fd as xh, fe as Sh, ff as kh, fg as Ah, fh as Ch, fi as Eh, fj as Oh, fk as _h, fl as Th, fm as Nh, X as Ph, fn as Dh, fo as Ih, fp as Mh, fq as Lh, fr as Rh, fs as $h, ft as jh, b3 as Fh, aX as Kc, fu as zh, cb as Gc, fv as Bh, b2 as Vh, fw as Hh, fx as Wh, fy as Uh, fz as Kh, fA as Gh, fB as Yh, fC as qh, fD as Xh, fE as Jh } from "./F0AiChat-CJmCKlSt.js";
import './index.css';const Zh = {
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
function Qh(t, e) {
  const n = t.scrollSnapList();
  return typeof e == "number" ? n.map(() => e) : e(n, t);
}
function ep(t, e) {
  const n = t.rootNode();
  return e && e(n) || n;
}
function Us(t = {}) {
  let e, n, r, i, o = null, s = 0, a = !1, c = !1, l = !1, u = !1;
  function d(_, T) {
    n = _;
    const {
      mergeOptions: R,
      optionsAtMedia: z
    } = T, V = R(Zh, Us.globalOptions), $ = R(V, t);
    if (e = z($), n.scrollSnapList().length <= 1) return;
    u = e.jump, r = !1, i = Qh(n, e.delay);
    const {
      eventStore: W,
      ownerDocument: ee
    } = n.internalEngine(), Me = !!n.internalEngine().options.watchDrag, Le = ep(n, e.rootNode);
    W.add(ee, "visibilitychange", b), Me && n.on("pointerDown", w), Me && !e.stopOnInteraction && n.on("pointerUp", k), e.stopOnMouseEnter && W.add(Le, "mouseenter", A), e.stopOnMouseEnter && !e.stopOnInteraction && W.add(Le, "mouseleave", E), e.stopOnFocusIn && n.on("slideFocusStart", g), e.stopOnFocusIn && !e.stopOnInteraction && W.add(n.containerNode(), "focusout", m), e.playOnInit && m();
  }
  function f() {
    n.off("pointerDown", w).off("pointerUp", k).off("slideFocusStart", g), g(), r = !0, a = !1;
  }
  function h() {
    const {
      ownerWindow: _
    } = n.internalEngine();
    _.clearTimeout(s), s = _.setTimeout(I, i[n.selectedScrollSnap()]), o = (/* @__PURE__ */ new Date()).getTime(), n.emit("autoplay:timerset");
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
  function g() {
    r || (a && n.emit("autoplay:stop"), p(), a = !1);
  }
  function b() {
    if (v())
      return l = a, g();
    l && m();
  }
  function v() {
    const {
      ownerDocument: _
    } = n.internalEngine();
    return _.visibilityState === "hidden";
  }
  function w() {
    c || g();
  }
  function k() {
    c || m();
  }
  function A() {
    c = !0, g();
  }
  function E() {
    c = !1, m();
  }
  function x(_) {
    typeof _ < "u" && (u = _), m();
  }
  function S() {
    a && g();
  }
  function P() {
    a && m();
  }
  function L() {
    return a;
  }
  function I() {
    const {
      index: _
    } = n.internalEngine(), T = _.clone().add(1).get(), R = n.scrollSnapList().length - 1, z = e.stopOnLastSnap && T === R;
    if (n.canScrollNext() ? n.scrollNext(u) : n.scrollTo(0, u), n.emit("autoplay:select"), z) return g();
    m();
  }
  function N() {
    if (!o) return null;
    const _ = i[n.selectedScrollSnap()], T = (/* @__PURE__ */ new Date()).getTime() - o;
    return _ - T;
  }
  return {
    name: "autoplay",
    options: t,
    init: d,
    destroy: f,
    play: x,
    stop: S,
    reset: P,
    isPlaying: L,
    timeUntilNext: N
  };
}
Us.globalOptions = void 0;
function sn() {
  return sn = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, sn.apply(this, arguments);
}
var tp = 0.996, np = function(e, n) {
  return n === void 0 && (n = tp), e * n / (1 - n);
};
function rp(t) {
  return t[t.length - 1];
}
function ip(t) {
  return t.reduce(function(e, n) {
    return e + n;
  }) / t.length;
}
var op = function(e, n, r) {
  return Math.min(Math.max(n, e), r);
};
function Ao(t, e) {
  if (t.length !== e.length)
    throw new Error("vectors must be same length");
  return t.map(function(n, r) {
    return n + e[r];
  });
}
function $a(t) {
  return Math.max.apply(Math, t.map(Math.abs));
}
function Mn(t) {
  return Object.freeze(t), Object.values(t).forEach(function(e) {
    e !== null && typeof e == "object" && !Object.isFrozen(e) && Mn(e);
  }), t;
}
function sp() {
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
function ap(t) {
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
var lp = 16 * 1.125, cp = typeof window < "u" && window.innerHeight || 800, Co = [1, lp, cp];
function up(t) {
  var e = t.deltaX * Co[t.deltaMode], n = t.deltaY * Co[t.deltaMode], r = (t.deltaZ || 0) * Co[t.deltaMode];
  return {
    timeStamp: t.timeStamp,
    axisDelta: [e, n, r]
  };
}
var dp = [-1, -1, -1];
function fp(t, e) {
  if (!e)
    return t;
  var n = e === !0 ? dp : e.map(function(r) {
    return r ? -1 : 1;
  });
  return sn({}, t, {
    axisDelta: t.axisDelta.map(function(r, i) {
      return r * n[i];
    })
  });
}
var ja = 700, hp = function(e) {
  return sn({}, e, {
    axisDelta: e.axisDelta.map(function(n) {
      return op(n, -ja, ja);
    })
  });
}, Eo = process.env.NODE_ENV !== "production", pp = 0.6, mp = 0.96, gp = 2, Fa = 5, za = /* @__PURE__ */ Mn({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), yp = 400;
function Ba() {
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
    willEndTimeout: yp
  };
}
function bp(t) {
  t === void 0 && (t = {});
  var e = sp(), n = e.on, r = e.off, i = e.dispatch, o = za, s = Ba(), a, c = !1, l, u = function(_) {
    Array.isArray(_) ? _.forEach(function(T) {
      return p(T);
    }) : p(_);
  }, d = function(_) {
    return _ === void 0 && (_ = {}), Object.values(_).some(function(T) {
      return T == null;
    }) ? (Eo && console.error("updateOptions ignored! undefined & null options not allowed"), o) : o = Mn(sn({}, za, o, _));
  }, f = function(_) {
    var T = sn({
      event: a,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: s.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: s.axisVelocity,
      axisMovement: s.axisMovement,
      get axisMovementProjection() {
        return Ao(T.axisMovement, T.axisVelocity.map(function(R) {
          return np(R);
        }));
      }
    }, _);
    i("wheel", sn({}, T, {
      previous: l
    })), l = T;
  }, h = function(_, T) {
    var R = o, z = R.preventWheelAction, V = T[0], $ = T[1], W = T[2];
    if (typeof z == "boolean") return z;
    switch (z) {
      case "x":
        return Math.abs(V) >= _;
      case "y":
        return Math.abs($) >= _;
      case "z":
        return Math.abs(W) >= _;
      default:
        return Eo && console.warn("unsupported preventWheelAction value: " + z, "warn"), !1;
    }
  }, p = function(_) {
    var T = hp(fp(up(_), o.reverseSign)), R = T.axisDelta, z = T.timeStamp, V = $a(R);
    if (_.preventDefault && h(V, R) && _.preventDefault(), s.isStarted ? s.isMomentum && V > Math.max(2, s.lastAbsDelta * 2) && (S(!0), E()) : E(), V === 0 && Object.is && Object.is(_.deltaX, -0)) {
      c = !0;
      return;
    }
    a = _, s.axisMovement = Ao(s.axisMovement, R), s.lastAbsDelta = V, s.scrollPointsToMerge.push({
      axisDelta: R,
      timeStamp: z
    }), m(), f({
      axisDelta: R,
      isStart: !s.isStartPublished
    }), s.isStartPublished = !0, x();
  }, m = function() {
    s.scrollPointsToMerge.length === gp ? (s.scrollPoints.unshift({
      axisDeltaSum: s.scrollPointsToMerge.map(function(_) {
        return _.axisDelta;
      }).reduce(Ao),
      timeStamp: ip(s.scrollPointsToMerge.map(function(_) {
        return _.timeStamp;
      }))
    }), b(), s.scrollPointsToMerge.length = 0, s.scrollPoints.length = 1, s.isMomentum || k()) : s.isStartPublished || g();
  }, g = function() {
    s.axisVelocity = rp(s.scrollPointsToMerge).axisDelta.map(function(_) {
      return _ / s.willEndTimeout;
    });
  }, b = function() {
    var _ = s.scrollPoints, T = _[0], R = _[1];
    if (!(!R || !T)) {
      var z = T.timeStamp - R.timeStamp;
      if (z <= 0) {
        Eo && console.warn("invalid deltaTime");
        return;
      }
      var V = T.axisDeltaSum.map(function(W) {
        return W / z;
      }), $ = V.map(function(W, ee) {
        return W / (s.axisVelocity[ee] || 1);
      });
      s.axisVelocity = V, s.accelerationFactors.push($), v(z);
    }
  }, v = function(_) {
    var T = Math.ceil(_ / 10) * 10 * 1.2;
    s.isMomentum || (T = Math.max(100, T * 2)), s.willEndTimeout = Math.min(1e3, Math.round(T));
  }, w = function(_) {
    return _ === 0 ? !0 : _ <= mp && _ >= pp;
  }, k = function() {
    if (s.accelerationFactors.length >= Fa) {
      if (c && (c = !1, $a(s.axisVelocity) >= 0.2)) {
        A();
        return;
      }
      var _ = s.accelerationFactors.slice(Fa * -1), T = _.every(function(R) {
        var z = !!R.reduce(function($, W) {
          return $ && $ < 1 && $ === W ? 1 : 0;
        }), V = R.filter(w).length === R.length;
        return z || V;
      });
      T && A(), s.accelerationFactors = _;
    }
  }, A = function() {
    s.isMomentum = !0;
  }, E = function() {
    s = Ba(), s.isStarted = !0, s.startTime = Date.now(), l = void 0, c = !1;
  }, x = /* @__PURE__ */ (function() {
    var D;
    return function() {
      clearTimeout(D), D = setTimeout(S, s.willEndTimeout);
    };
  })(), S = function(_) {
    _ === void 0 && (_ = !1), s.isStarted && (s.isMomentum && _ ? f({
      isEnding: !0,
      isMomentumCancel: !0
    }) : f({
      isEnding: !0
    }), s.isMomentum = !1, s.isStarted = !1);
  }, P = ap(u), L = P.observe, I = P.unobserve, N = P.disconnect;
  return d(t), Mn({
    on: n,
    off: r,
    observe: L,
    unobserve: I,
    disconnect: N,
    feedWheel: u,
    updateOptions: d
  });
}
var vp = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
Ks.globalOptions = void 0;
var wp = process.env.NODE_ENV !== "production";
function Ks(t) {
  t === void 0 && (t = {});
  var e, n = function() {
  };
  function r(o, s) {
    var a, c, l = s.mergeOptions, u = s.optionsAtMedia, d = l(vp, Ks.globalOptions), f = l(d, t);
    e = u(f);
    var h = o.internalEngine(), p = (a = e.target) != null ? a : o.containerNode().parentNode, m = (c = e.forceWheelAxis) != null ? c : h.options.axis, g = bp({
      preventWheelAction: m,
      reverseSign: [!0, !0, !1]
    }), b = g.observe(p), v = g.on("wheel", N), w = !1, k;
    function A(D) {
      try {
        k = new MouseEvent("mousedown", D.event), I(k);
      } catch {
        return wp && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
      }
      w = !0, x(), e.wheelDraggingClass && p.classList.add(e.wheelDraggingClass);
    }
    function E(D) {
      w = !1, I(L("mouseup", D)), S(), e.wheelDraggingClass && p.classList.remove(e.wheelDraggingClass);
    }
    function x() {
      document.documentElement.addEventListener("mousemove", P, !0), document.documentElement.addEventListener("mouseup", P, !0), document.documentElement.addEventListener("mousedown", P, !0);
    }
    function S() {
      document.documentElement.removeEventListener("mousemove", P, !0), document.documentElement.removeEventListener("mouseup", P, !0), document.documentElement.removeEventListener("mousedown", P, !0);
    }
    function P(D) {
      w && D.isTrusted && D.stopImmediatePropagation();
    }
    function L(D, _) {
      var T, R;
      if (m === h.options.axis) {
        var z = _.axisMovement;
        T = z[0], R = z[1];
      } else {
        var V = _.axisMovement;
        R = V[0], T = V[1];
      }
      if (!h.options.skipSnaps && !h.options.dragFree) {
        var $ = h.containerRect.width, W = h.containerRect.height;
        T = T < 0 ? Math.max(T, -$) : Math.min(T, $), R = R < 0 ? Math.max(R, -W) : Math.min(R, W);
      }
      return new MouseEvent(D, {
        clientX: k.clientX + T,
        clientY: k.clientY + R,
        screenX: k.screenX + T,
        screenY: k.screenY + R,
        movementX: T,
        movementY: R,
        button: 0,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      });
    }
    function I(D) {
      o.containerNode().dispatchEvent(D);
    }
    function N(D) {
      var _ = D.axisDelta, T = _[0], R = _[1], z = m === "x" ? T : R, V = m === "x" ? R : T, $ = D.isMomentum && D.previous && !D.previous.isMomentum, W = D.isEnding && !D.isMomentum || $, ee = Math.abs(z) > Math.abs(V);
      ee && !w && !D.isMomentum && A(D), w && (W ? E(D) : I(L("mousemove", D)));
    }
    n = function() {
      b(), v(), S();
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
function xp(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Va(t) {
  return xp(t) || Array.isArray(t);
}
function Sp() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Gs(t, e) {
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  const i = JSON.stringify(Object.keys(t.breakpoints || {})), o = JSON.stringify(Object.keys(e.breakpoints || {}));
  return i !== o ? !1 : n.every((s) => {
    const a = t[s], c = e[s];
    return typeof a == "function" ? `${a}` == `${c}` : !Va(a) || !Va(c) ? a === c : Gs(a, c);
  });
}
function Ha(t) {
  return t.concat().sort((e, n) => e.name > n.name ? 1 : -1).map((e) => e.options);
}
function kp(t, e) {
  if (t.length !== e.length) return !1;
  const n = Ha(t), r = Ha(e);
  return n.every((i, o) => {
    const s = r[o];
    return Gs(i, s);
  });
}
function Ys(t) {
  return typeof t == "number";
}
function Uo(t) {
  return typeof t == "string";
}
function eo(t) {
  return typeof t == "boolean";
}
function Wa(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ne(t) {
  return Math.abs(t);
}
function qs(t) {
  return Math.sign(t);
}
function fr(t, e) {
  return ne(t - e);
}
function Ap(t, e) {
  if (t === 0 || e === 0 || ne(t) <= ne(e)) return 0;
  const n = fr(ne(t), ne(e));
  return ne(n / t);
}
function Cp(t) {
  return Math.round(t * 100) / 100;
}
function wr(t) {
  return xr(t).map(Number);
}
function ct(t) {
  return t[Br(t)];
}
function Br(t) {
  return Math.max(0, t.length - 1);
}
function Xs(t, e) {
  return e === Br(t);
}
function Ua(t, e = 0) {
  return Array.from(Array(t), (n, r) => e + r);
}
function xr(t) {
  return Object.keys(t);
}
function Yc(t, e) {
  return [t, e].reduce((n, r) => (xr(r).forEach((i) => {
    const o = n[i], s = r[i], a = Wa(o) && Wa(s);
    n[i] = a ? Yc(o, s) : s;
  }), n), {});
}
function Ko(t, e) {
  return typeof e.MouseEvent < "u" && t instanceof e.MouseEvent;
}
function Ep(t, e) {
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
    return Uo(t) ? n[t](c) : t(e, c, l);
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
function Op(t, e, n, r) {
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
  function d(g) {
    if (!c) return;
    s || (s = g, n(), n());
    const b = g - s;
    for (s = g, a += b; a >= o; )
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
function _p(t, e) {
  const n = e === "rtl", r = t === "y", i = r ? "y" : "x", o = r ? "x" : "y", s = !r && n ? -1 : 1, a = u(), c = d();
  function l(p) {
    const {
      height: m,
      width: g
    } = p;
    return r ? m : g;
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
function cn(t = 0, e = 0) {
  const n = ne(t - e);
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
function qc(t, e, n) {
  const {
    constrain: r
  } = cn(0, t), i = t + 1;
  let o = s(e);
  function s(f) {
    return n ? ne((i + f) % i) : r(f);
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
    return qc(t, a(), n);
  }
  const d = {
    get: a,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function Tp(t, e, n, r, i, o, s, a, c, l, u, d, f, h, p, m, g, b, v) {
  const {
    cross: w,
    direction: k
  } = t, A = ["INPUT", "SELECT", "TEXTAREA"], E = {
    passive: !1
  }, x = Sr(), S = Sr(), P = cn(50, 225).constrain(h.measure(20)), L = {
    mouse: 300,
    touch: 400
  }, I = {
    mouse: 500,
    touch: 600
  }, N = p ? 43 : 25;
  let D = !1, _ = 0, T = 0, R = !1, z = !1, V = !1, $ = !1;
  function W(M) {
    if (!v) return;
    function K(ge) {
      (eo(v) || v(M, ge)) && qt(ge);
    }
    const re = e;
    x.add(re, "dragstart", (ge) => ge.preventDefault(), E).add(re, "touchmove", () => {
    }, E).add(re, "touchend", () => {
    }).add(re, "touchstart", K).add(re, "mousedown", K).add(re, "touchcancel", me).add(re, "contextmenu", me).add(re, "click", it, !0);
  }
  function ee() {
    x.clear(), S.clear();
  }
  function Me() {
    const M = $ ? n : e;
    S.add(M, "touchmove", _e, E).add(M, "touchend", me).add(M, "mousemove", _e, E).add(M, "mouseup", me);
  }
  function Le(M) {
    const K = M.nodeName || "";
    return A.includes(K);
  }
  function rt() {
    return (p ? I : L)[$ ? "mouse" : "touch"];
  }
  function Yt(M, K) {
    const re = d.add(qs(M) * -1), ge = u.byDistance(M, !p).distance;
    return p || ne(M) < P ? ge : g && K ? ge * 0.5 : u.byIndex(re.get(), 0).distance;
  }
  function qt(M) {
    const K = Ko(M, r);
    $ = K, V = p && K && !M.buttons && D, D = fr(i.get(), s.get()) >= 2, !(K && M.button !== 0) && (Le(M.target) || (R = !0, o.pointerDown(M), l.useFriction(0).useDuration(0), i.set(s), Me(), _ = o.readPoint(M), T = o.readPoint(M, w), f.emit("pointerDown")));
  }
  function _e(M) {
    if (!Ko(M, r) && M.touches.length >= 2) return me(M);
    const re = o.readPoint(M), ge = o.readPoint(M, w), gt = fr(re, _), xt = fr(ge, T);
    if (!z && !$ && (!M.cancelable || (z = gt > xt, !z)))
      return me(M);
    const Xt = o.pointerMove(M);
    gt > m && (V = !0), l.useFriction(0.3).useDuration(0.75), a.start(), i.add(k(Xt)), M.preventDefault();
  }
  function me(M) {
    const re = u.byDistance(0, !1).index !== d.get(), ge = o.pointerUp(M) * rt(), gt = Yt(k(ge), re), xt = Ap(ge, gt), Xt = N - 10 * xt, $t = b + xt / 50;
    z = !1, R = !1, S.clear(), l.useDuration(Xt).useFriction($t), c.distance(gt, !p), $ = !1, f.emit("pointerUp");
  }
  function it(M) {
    V && (M.stopPropagation(), M.preventDefault(), V = !1);
  }
  function j() {
    return R;
  }
  return {
    init: W,
    destroy: ee,
    pointerDown: j
  };
}
function Np(t, e) {
  let r, i;
  function o(d) {
    return d.timeStamp;
  }
  function s(d, f) {
    const p = `client${(f || t.scroll) === "x" ? "X" : "Y"}`;
    return (Ko(d, e) ? d : d.touches[0])[p];
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
    return h && !p && ne(m) > 0.1 ? m : 0;
  }
  return {
    pointerDown: a,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function Pp() {
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
function Dp(t) {
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
  function f(g) {
    return i.measureSize(s.measure(g));
  }
  function h(g) {
    if (!o) return;
    l = f(t), u = r.map(f);
    function b(v) {
      for (const w of v) {
        if (d) return;
        const k = w.target === t, A = r.indexOf(w.target), E = k ? l : u[A], x = f(k ? t : r[A]);
        if (ne(x - E) >= 0.5) {
          g.reInit(), e.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((v) => {
      (eo(o) || o(g, v)) && b(v);
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
function Mp(t, e, n, r, i, o) {
  let s = 0, a = 0, c = i, l = o, u = t.get(), d = 0;
  function f() {
    const E = r.get() - t.get(), x = !c;
    let S = 0;
    return x ? (s = 0, n.set(r), t.set(r), S = E) : (n.set(t), s += E / c, s *= l, u += s, t.add(s), S = u - d), a = qs(S), d = u, A;
  }
  function h() {
    const E = r.get() - e.get();
    return ne(E) < 1e-3;
  }
  function p() {
    return c;
  }
  function m() {
    return a;
  }
  function g() {
    return s;
  }
  function b() {
    return w(i);
  }
  function v() {
    return k(o);
  }
  function w(E) {
    return c = E, A;
  }
  function k(E) {
    return l = E, A;
  }
  const A = {
    direction: m,
    duration: p,
    velocity: g,
    seek: f,
    settled: h,
    useBaseFriction: v,
    useBaseDuration: b,
    useFriction: k,
    useDuration: w
  };
  return A;
}
function Lp(t, e, n, r, i) {
  const o = i.measure(10), s = i.measure(50), a = cn(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !t.reachedAny(n.get()) || !t.reachedAny(e.get()));
  }
  function u(h) {
    if (!l()) return;
    const p = t.reachedMin(e.get()) ? "min" : "max", m = ne(t[p] - e.get()), g = n.get() - e.get(), b = a.constrain(m / s);
    n.subtract(g * b), !h && ne(g) < o && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction());
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
function Rp(t, e, n, r, i) {
  const o = cn(-e + t, 0), s = d(), a = u(), c = f();
  function l(p, m) {
    return fr(p, m) <= 1;
  }
  function u() {
    const p = s[0], m = ct(s), g = s.lastIndexOf(p), b = s.indexOf(m) + 1;
    return cn(g, b);
  }
  function d() {
    return n.map((p, m) => {
      const {
        min: g,
        max: b
      } = o, v = o.constrain(p), w = !m, k = Xs(n, m);
      return w ? b : k || l(g, v) ? g : l(b, v) ? b : v;
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
function $p(t, e, n) {
  const r = e[0], i = n ? r - t : ct(e);
  return {
    limit: cn(i, r)
  };
}
function jp(t, e, n, r) {
  const o = e.min + 0.1, s = e.max + 0.1, {
    reachedMin: a,
    reachedMax: c
  } = cn(o, s);
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
function Fp(t) {
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
function zp(t, e, n, r, i) {
  const {
    startEdge: o,
    endEdge: s
  } = t, {
    groupSlides: a
  } = i, c = d().map(e.measure), l = f(), u = h();
  function d() {
    return a(r).map((m) => ct(m)[s] - m[0][o]).map(ne);
  }
  function f() {
    return r.map((m) => n[o] - m[o]).map((m) => -ne(m));
  }
  function h() {
    return a(l).map((m) => m[0]).map((m, g) => m + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function Bp(t, e, n, r, i, o) {
  const {
    groupSlides: s
  } = i, {
    min: a,
    max: c
  } = r, l = u();
  function u() {
    const f = s(o), h = !t || e === "keepSnaps";
    return n.length === 1 ? [o] : h ? f : f.slice(a, c).map((p, m, g) => {
      const b = !m, v = Xs(g, m);
      if (b) {
        const w = ct(g[0]) + 1;
        return Ua(w);
      }
      if (v) {
        const w = Br(o) - ct(g)[0] + 1;
        return Ua(w, ct(g)[0]);
      }
      return p;
    });
  }
  return {
    slideRegistry: l
  };
}
function Vp(t, e, n, r, i) {
  const {
    reachedAny: o,
    removeOffset: s,
    constrain: a
  } = r;
  function c(p) {
    return p.concat().sort((m, g) => ne(m) - ne(g))[0];
  }
  function l(p) {
    const m = t ? s(p) : a(p), g = e.map((v, w) => ({
      diff: u(v - m, 0),
      index: w
    })).sort((v, w) => ne(v.diff) - ne(w.diff)), {
      index: b
    } = g[0];
    return {
      index: b,
      distance: m
    };
  }
  function u(p, m) {
    const g = [p, p + n, p - n];
    if (!t) return p;
    if (!m) return c(g);
    const b = g.filter((v) => qs(v) === m);
    return b.length ? c(b) : ct(g) - n;
  }
  function d(p, m) {
    const g = e[p] - i.get(), b = u(g, m);
    return {
      index: p,
      distance: b
    };
  }
  function f(p, m) {
    const g = i.get() + p, {
      index: b,
      distance: v
    } = l(g), w = !t && o(g);
    if (!m || w) return {
      index: b,
      distance: p
    };
    const k = e[b] - v, A = p + u(k, 0);
    return {
      index: b,
      distance: A
    };
  }
  return {
    byDistance: f,
    byIndex: d,
    shortcut: u
  };
}
function Hp(t, e, n, r, i, o, s) {
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
function Wp(t, e, n, r, i, o, s, a) {
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
    o.add(document, "keydown", d, !1), e.forEach((m, g) => {
      o.add(m, "focus", (b) => {
        (eo(a) || a(h, b)) && p(g);
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
    return Ys(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: i,
    subtract: o
  };
}
function Xc(t, e) {
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
    const h = Cp(t.direction(f));
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
function Up(t, e, n, r, i, o, s, a, c) {
  const u = wr(i), d = wr(i).reverse(), f = b().concat(v());
  function h(x, S) {
    return x.reduce((P, L) => P - i[L], S);
  }
  function p(x, S) {
    return x.reduce((P, L) => h(P, S) > 0 ? P.concat([L]) : P, []);
  }
  function m(x) {
    return o.map((S, P) => ({
      start: S - r[P] + 0.5 + x,
      end: S + e - 0.5 + x
    }));
  }
  function g(x, S, P) {
    const L = m(S);
    return x.map((I) => {
      const N = P ? 0 : -n, D = P ? n : 0, _ = P ? "end" : "start", T = L[I][_];
      return {
        index: I,
        loopPoint: T,
        slideLocation: dr(-1),
        translate: Xc(t, c[I]),
        target: () => a.get() > T ? N : D
      };
    });
  }
  function b() {
    const x = s[0], S = p(d, x);
    return g(S, n, !1);
  }
  function v() {
    const x = e - s[0] - 1, S = p(u, x);
    return g(S, -n, !0);
  }
  function w() {
    return f.every(({
      index: x
    }) => {
      const S = u.filter((P) => P !== x);
      return h(S, e) <= 0.1;
    });
  }
  function k() {
    f.forEach((x) => {
      const {
        target: S,
        translate: P,
        slideLocation: L
      } = x, I = S();
      I !== L.get() && (P.to(I), L.set(I));
    });
  }
  function A() {
    f.forEach((x) => x.translate.clear());
  }
  return {
    canLoop: w,
    clear: A,
    loop: k,
    loopPoints: f
  };
}
function Kp(t, e, n) {
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
      i || (eo(n) || n(c, u)) && l(u);
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
function Gp(t, e, n, r) {
  const i = {};
  let o = null, s = null, a, c = !1;
  function l() {
    a = new IntersectionObserver((p) => {
      c || (p.forEach((m) => {
        const g = e.indexOf(m.target);
        i[g] = m;
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
    return xr(i).reduce((m, g) => {
      const b = parseInt(g), {
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
function Yp(t, e, n, r, i, o) {
  const {
    measureSize: s,
    startEdge: a,
    endEdge: c
  } = t, l = n[0] && i, u = p(), d = m(), f = n.map(s), h = g();
  function p() {
    if (!l) return 0;
    const v = n[0];
    return ne(e[a] - v[a]);
  }
  function m() {
    if (!l) return 0;
    const v = o.getComputedStyle(ct(r));
    return parseFloat(v.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((v, w, k) => {
      const A = !w, E = Xs(k, w);
      return A ? f[w] + u : E ? f[w] + d : k[w + 1][a] - v[a];
    }).map(ne);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: h,
    startGap: u,
    endGap: d
  };
}
function qp(t, e, n, r, i, o, s, a, c) {
  const {
    startEdge: l,
    endEdge: u,
    direction: d
  } = t, f = Ys(n);
  function h(b, v) {
    return wr(b).filter((w) => w % v === 0).map((w) => b.slice(w, w + v));
  }
  function p(b) {
    return b.length ? wr(b).reduce((v, w, k) => {
      const A = ct(v) || 0, E = A === 0, x = w === Br(b), S = i[l] - o[A][l], P = i[l] - o[w][u], L = !r && E ? d(s) : 0, I = !r && x ? d(a) : 0, N = ne(P - I - (S + L));
      return k && N > e + c && v.push(w), x && v.push(b.length), v;
    }, []).map((v, w, k) => {
      const A = Math.max(k[w - 1] || 0);
      return b.slice(A, v);
    }) : [];
  }
  function m(b) {
    return f ? h(b, n) : p(b);
  }
  return {
    groupSlides: m
  };
}
function Xp(t, e, n, r, i, o, s) {
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
    slidesToScroll: g,
    skipSnaps: b,
    containScroll: v,
    watchResize: w,
    watchSlides: k,
    watchDrag: A,
    watchFocus: E
  } = o, x = 2, S = Pp(), P = S.measure(e), L = n.map(S.measure), I = _p(c, l), N = I.measureSize(P), D = Dp(N), _ = Ep(a, N), T = !d && !!v, R = d || !!v, {
    slideSizes: z,
    slideSizesWithGaps: V,
    startGap: $,
    endGap: W
  } = Yp(I, P, L, n, R, i), ee = qp(I, N, g, d, P, L, $, W, x), {
    snaps: Me,
    snapsAligned: Le
  } = zp(I, _, P, L, ee), rt = -ct(Me) + ct(V), {
    snapsContained: Yt,
    scrollContainLimit: qt
  } = Rp(N, rt, Le, v, x), _e = T ? Yt : Le, {
    limit: me
  } = $p(rt, _e, d), it = qc(Br(_e), u, d), j = it.clone(), F = wr(n), M = ({
    dragHandler: Sn,
    scrollBody: xo,
    scrollBounds: So,
    options: {
      loop: Zr
    }
  }) => {
    Zr || So.constrain(Sn.pointerDown()), xo.seek();
  }, K = ({
    scrollBody: Sn,
    translate: xo,
    location: So,
    offsetLocation: Zr,
    previousLocation: Qd,
    scrollLooper: ef,
    slideLooper: tf,
    dragHandler: nf,
    animation: rf,
    eventHandler: Aa,
    scrollBounds: of,
    options: {
      loop: Ca
    }
  }, Ea) => {
    const Oa = Sn.settled(), sf = !of.shouldConstrain(), _a = Ca ? Oa : Oa && sf, Ta = _a && !nf.pointerDown();
    Ta && rf.stop();
    const af = So.get() * Ea + Qd.get() * (1 - Ea);
    Zr.set(af), Ca && (ef.loop(Sn.direction()), tf.loop()), xo.to(Zr.get()), Ta && Aa.emit("settle"), _a || Aa.emit("scroll");
  }, re = Op(r, i, () => M(wo), (Sn) => K(wo, Sn)), ge = 0.68, gt = _e[it.get()], xt = dr(gt), Xt = dr(gt), $t = dr(gt), Jt = dr(gt), ir = Mp(xt, $t, Xt, Jt, f, ge), bo = Vp(d, _e, rt, me, Jt), vo = Hp(re, it, j, ir, bo, Jt, s), xa = Fp(me), Sa = Sr(), Jd = Gp(e, n, s, m), {
    slideRegistry: ka
  } = Bp(T, v, _e, qt, ee, F), Zd = Wp(t, n, ka, vo, ir, Sa, s, E), wo = {
    ownerDocument: r,
    ownerWindow: i,
    eventHandler: s,
    containerRect: P,
    slideRects: L,
    animation: re,
    axis: I,
    dragHandler: Tp(I, t, r, i, Jt, Np(I, i), xt, re, vo, ir, bo, it, s, D, h, p, b, ge, A),
    eventStore: Sa,
    percentOfView: D,
    index: it,
    indexPrevious: j,
    limit: me,
    location: xt,
    offsetLocation: $t,
    previousLocation: Xt,
    options: o,
    resizeHandler: Ip(e, s, i, n, I, w, S),
    scrollBody: ir,
    scrollBounds: Lp(me, $t, Jt, ir, D),
    scrollLooper: jp(rt, me, $t, [xt, $t, Xt, Jt]),
    scrollProgress: xa,
    scrollSnapList: _e.map(xa.get),
    scrollSnaps: _e,
    scrollTarget: bo,
    scrollTo: vo,
    slideLooper: Up(I, N, rt, z, V, Me, _e, $t, n),
    slideFocus: Zd,
    slidesHandler: Kp(e, s, k),
    slidesInView: Jd,
    slideIndexes: F,
    slideRegistry: ka,
    slidesToScroll: ee,
    target: Jt,
    translate: Xc(I, e)
  };
  return wo;
}
function Jp() {
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
const Zp = {
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
function Qp(t) {
  function e(o, s) {
    return Yc(o, s || {});
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
function em(t) {
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
  const r = t.ownerDocument, i = r.defaultView, o = Qp(i), s = em(o), a = Sr(), c = Jp(), {
    mergeOptions: l,
    optionsAtMedia: u,
    optionsMediaQueries: d
  } = o, {
    on: f,
    off: h,
    emit: p
  } = c, m = I;
  let g = !1, b, v = l(Zp, Ei.globalOptions), w = l(v), k = [], A, E, x;
  function S() {
    const {
      container: F,
      slides: M
    } = w;
    E = (Uo(F) ? t.querySelector(F) : F) || t.children[0];
    const re = Uo(M) ? E.querySelectorAll(M) : M;
    x = [].slice.call(re || E.children);
  }
  function P(F) {
    const M = Xp(t, E, x, r, i, F, c);
    if (F.loop && !M.slideLooper.canLoop()) {
      const K = Object.assign({}, F, {
        loop: !1
      });
      return P(K);
    }
    return M;
  }
  function L(F, M) {
    g || (v = l(v, F), w = u(v), k = M || k, S(), b = P(w), d([v, ...k.map(({
      options: K
    }) => K)]).forEach((K) => a.add(K, "change", I)), w.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(j), b.eventHandler.init(j), b.resizeHandler.init(j), b.slidesHandler.init(j), b.options.loop && b.slideLooper.loop(), E.offsetParent && x.length && b.dragHandler.init(j), A = s.init(j, k)));
  }
  function I(F, M) {
    const K = ee();
    N(), L(l({
      startIndex: K
    }, F), M), c.emit("reInit");
  }
  function N() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), s.destroy(), a.clear();
  }
  function D() {
    g || (g = !0, a.clear(), N(), c.emit("destroy"), c.clear());
  }
  function _(F, M, K) {
    !w.active || g || (b.scrollBody.useBaseFriction().useDuration(M === !0 ? 0 : w.duration), b.scrollTo.index(F, K || 0));
  }
  function T(F) {
    const M = b.index.add(1).get();
    _(M, F, -1);
  }
  function R(F) {
    const M = b.index.add(-1).get();
    _(M, F, 1);
  }
  function z() {
    return b.index.add(1).get() !== ee();
  }
  function V() {
    return b.index.add(-1).get() !== ee();
  }
  function $() {
    return b.scrollSnapList;
  }
  function W() {
    return b.scrollProgress.get(b.offsetLocation.get());
  }
  function ee() {
    return b.index.get();
  }
  function Me() {
    return b.indexPrevious.get();
  }
  function Le() {
    return b.slidesInView.get();
  }
  function rt() {
    return b.slidesInView.get(!1);
  }
  function Yt() {
    return A;
  }
  function qt() {
    return b;
  }
  function _e() {
    return t;
  }
  function me() {
    return E;
  }
  function it() {
    return x;
  }
  const j = {
    canScrollNext: z,
    canScrollPrev: V,
    containerNode: me,
    internalEngine: qt,
    destroy: D,
    off: h,
    on: f,
    emit: p,
    plugins: Yt,
    previousScrollSnap: Me,
    reInit: m,
    rootNode: _e,
    scrollNext: T,
    scrollPrev: R,
    scrollProgress: W,
    scrollSnapList: $,
    scrollTo: _,
    selectedScrollSnap: ee,
    slideNodes: it,
    slidesInView: Le,
    slidesNotInView: rt
  };
  return L(e, n), setTimeout(() => c.emit("init"), 0), j;
}
Ei.globalOptions = void 0;
function Js(t = {}, e = []) {
  const n = ye(t), r = ye(e), [i, o] = de(), [s, a] = de(), c = he(() => {
    i && i.reInit(n.current, r.current);
  }, [i]);
  return Fe(() => {
    Gs(n.current, t) || (n.current = t, c());
  }, [t, c]), Fe(() => {
    kp(r.current, e) || (r.current = e, c());
  }, [e, c]), Fe(() => {
    if (Sp() && s) {
      Ei.globalOptions = Js.globalOptions;
      const l = Ei(s, n.current, r.current);
      return o(l), () => l.destroy();
    } else
      o(void 0);
  }, [s, o]), [a, i];
}
Js.globalOptions = void 0;
const ie = 28, Ka = 16, tm = ({ children: t }) => {
  const e = ye(null), [n, r] = de(!0), [i, o] = de(!1);
  pc(() => {
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
  return i && n ? l = `linear-gradient(to right, transparent 0px, transparent ${ie}px, black ${2 * ie}px, black calc(100% - ${3 * ie}px), transparent calc(100% - ${2 * ie}px), transparent 100%)` : i && !n ? l = `linear-gradient(to right, transparent 0px, transparent ${ie}px, black ${2 * ie}px, black 100%)` : !i && n ? l = `linear-gradient(to right, black 0px, black calc(100% - ${3 * ie}px), transparent calc(100% - ${2 * ie}px), transparent 100%)` : l = "none", /* @__PURE__ */ C("div", { className: "relative", children: [
    /* @__PURE__ */ y(
      "div",
      {
        ref: e,
        className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
        style: {
          scrollbarWidth: "none",
          // Firefox
          msOverflowStyle: "none",
          // IE & Edge
          margin: `-${ie}px`,
          padding: `${ie}px`,
          height: `calc(100% + ${ie * 2}px)`,
          width: `calc(100% + ${ie * 2}px)`,
          maskImage: l,
          WebkitMaskImage: l,
          scrollSnapType: "x mandatory"
        },
        children: Array.isArray(t) ? t.map((u, d) => /* @__PURE__ */ y(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: ie + Ka + "px"
            },
            children: u
          },
          d
        )) : t && /* @__PURE__ */ y(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: ie + Ka + "px"
            },
            children: t
          }
        )
      }
    ),
    i && /* @__PURE__ */ y(
      Dn,
      {
        size: "lg",
        compact: !0,
        variant: "outline",
        className: J(
          "absolute opacity-100 transition-all",
          "-left-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: a,
        icon: lf,
        label: "Previous",
        hideLabel: !0
      }
    ),
    n && /* @__PURE__ */ y(
      Dn,
      {
        size: "lg",
        variant: "outline",
        compact: !0,
        className: J(
          "absolute opacity-100 transition-all",
          "-right-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: s,
        icon: cf,
        label: "Next",
        hideLabel: !0
      }
    )
  ] });
}, Jc = Y.createContext(null);
function Vr() {
  const t = Y.useContext(Jc);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const Zc = Y.forwardRef(
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
    ), [u, d] = Y.useState(!1), [f, h] = Y.useState(!1), p = Y.useCallback((v) => {
      v && (d(v.canScrollPrev()), h(v.canScrollNext()));
    }, []), m = Y.useCallback(() => {
      l?.scrollPrev();
    }, [l]), g = Y.useCallback(() => {
      l?.scrollNext();
    }, [l]), b = Y.useCallback(
      (v) => {
        v.key === "ArrowLeft" ? (v.preventDefault(), m()) : v.key === "ArrowRight" && (v.preventDefault(), g());
      },
      [m, g]
    );
    return Y.useEffect(() => {
      !l || !n || n(l);
    }, [l, n]), Y.useEffect(() => {
      if (l)
        return p(l), l.on("reInit", p), l.on("select", p), () => {
          l?.off("select", p);
        };
    }, [l, p]), /* @__PURE__ */ y(
      Jc.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: e,
          orientation: t || (e?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: m,
          scrollNext: g,
          canScrollPrev: u,
          canScrollNext: f
        },
        children: /* @__PURE__ */ y(
          "div",
          {
            ref: a,
            onKeyDownCapture: b,
            className: J("group/carousel relative", i),
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
Zc.displayName = "Carousel";
const Qc = Y.forwardRef(({ className: t, ...e }, n) => {
  const r = `linear-gradient(to right, transparent 0px, transparent ${ie / 2}px, black ${ie}px, black calc(100% - ${ie}px), transparent calc(100% - ${ie / 2}px), transparent 100%)`, { carouselRef: i, orientation: o } = Vr();
  return /* @__PURE__ */ y(
    "div",
    {
      ref: i,
      className: "overflow-hidden",
      style: {
        scrollbarWidth: "none",
        // For Firefox
        msOverflowStyle: "none",
        // For IE and Edge
        margin: `-${ie}px`,
        padding: `${ie}px`,
        height: `calc(100% + ${ie * 2}px)`,
        width: `calc(100% + ${ie * 2}px)`,
        maskImage: r,
        WebkitMaskImage: r
      },
      children: /* @__PURE__ */ y(
        "div",
        {
          ref: n,
          className: J(
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
Qc.displayName = "CarouselContent";
const eu = Y.forwardRef(({ className: t, ...e }, n) => {
  const { orientation: r } = Vr();
  return /* @__PURE__ */ y(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: J(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        t
      ),
      ...e
    }
  );
});
eu.displayName = "CarouselItem";
const tu = Y.forwardRef(({ className: t, variant: e = "outline", ...n }, r) => {
  const { orientation: i, scrollPrev: o, canScrollPrev: s } = Vr();
  return /* @__PURE__ */ y(
    "div",
    {
      className: J(
        "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
        !s && "opacity-0 group-hover/carousel:opacity-0",
        i === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"
      ),
      children: /* @__PURE__ */ y(
        Dn,
        {
          compact: !0,
          ref: r,
          size: "sm",
          variant: e,
          className: J("absolute opacity-100 transition-all", t),
          disabled: !s,
          onClick: o,
          ...n,
          label: "Previous",
          icon: uf,
          hideLabel: !0
        }
      )
    }
  );
});
tu.displayName = "CarouselPrevious";
const nu = Y.forwardRef(
  ({ className: t, variant: e = "outline", ...n }, r) => {
    const { orientation: i, scrollNext: o, canScrollNext: s } = Vr();
    return /* @__PURE__ */ y(
      "div",
      {
        className: J(
          "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
          !s && "opacity-0 group-hover/carousel:opacity-0",
          i === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"
        ),
        children: /* @__PURE__ */ y(
          Dn,
          {
            ref: r,
            size: "sm",
            variant: e,
            compact: !0,
            className: J("absolute opacity-100 transition-all", t),
            disabled: !s,
            onClick: o,
            ...n,
            label: "Next",
            icon: df,
            hideLabel: !0
          }
        )
      }
    );
  }
);
nu.displayName = "CarouselNext";
const ru = Y.forwardRef(({ ...t }, e) => {
  const { api: n } = Vr(), [, r] = Y.useState(!1), i = Y.useRef(null), o = Y.useCallback(() => {
    r((f) => !f);
  }, []);
  Y.useEffect(() => {
    if (n)
      return n.on("select", o), n.on("reInit", o), () => {
        n.off("select", o), n.off("reInit", o);
      };
  }, [n, o]);
  const s = n?.scrollSnapList().length || 0, a = n?.selectedScrollSnap() || 0;
  if (Y.useEffect(() => {
    if (!i.current) return;
    const f = i.current, h = 16, p = a * h - f.clientWidth / 2 + h / 2;
    f.scrollTo({
      left: p,
      behavior: "smooth"
    });
  }, [a]), Y.useEffect(() => {
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
  return /* @__PURE__ */ y("div", { ref: e, className: J("flex justify-center", t.className), children: /* @__PURE__ */ y(
    "div",
    {
      className: "relative overflow-hidden",
      style: { width: `${u}px` },
      children: /* @__PURE__ */ y(
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
          children: l.map((f) => /* @__PURE__ */ y(
            "button",
            {
              className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
              "aria-label": `Go to slide ${f + 1}`,
              "aria-current": f === a ? "true" : void 0,
              onClick: () => n?.scrollTo(f),
              tabIndex: -1,
              children: /* @__PURE__ */ y(
                "div",
                {
                  className: J(
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
ru.displayName = "CarouselDots";
const nm = Ds({
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
const rm = ({
  children: t,
  columns: e,
  showArrows: n = !0,
  showDots: r = !0,
  autoplay: i = !1,
  delay: o = 3e3,
  showPeek: s = !1,
  doubleColumns: a
}) => {
  const c = O.Children.toArray(t), l = O.useRef(
    i ? Us({ delay: o, stopOnInteraction: !0 }) : void 0
  ), u = () => {
    l.current && l.current.stop();
  }, d = () => {
    l.current && l.current.play();
  };
  return e ? /* @__PURE__ */ y(
    Zc,
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
      children: /* @__PURE__ */ C("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ C("div", { className: "relative", children: [
          /* @__PURE__ */ y(Qc, { children: O.Children.map(c, (f, h) => {
            const p = a?.find(
              (m) => m.index === h
            );
            return /* @__PURE__ */ y(
              eu,
              {
                className: nm({
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
          n && /* @__PURE__ */ C(on, { children: [
            /* @__PURE__ */ y(tu, { label: "Previous" }),
            /* @__PURE__ */ y(nu, { label: "Next" })
          ] })
        ] }),
        r && /* @__PURE__ */ y(ru, {})
      ] })
    }
  ) : /* @__PURE__ */ y(tm, { children: t });
}, V1 = He(
  yc("Carousel", rm)
);
function im(t, e) {
  const n = Cn(t), r = Cn(e), i = n.getTime() - r.getTime();
  return i < 0 ? -1 : i > 0 ? 1 : i;
}
function om(t) {
  return (e) => {
    const r = (t ? Math[t] : Math.trunc)(e);
    return r === 0 ? 0 : r;
  };
}
function sm(t, e, n) {
  const r = ff(), i = n?.locale ?? r.locale ?? hf, o = im(t, e);
  if (isNaN(o))
    throw new RangeError("Invalid time value");
  const s = Object.assign({}, n, {
    addSuffix: n?.addSuffix,
    comparison: o
  });
  let a, c;
  o > 0 ? (a = Cn(e), c = Cn(t)) : (a = Cn(t), c = Cn(e));
  const l = om(n?.roundingMethod ?? "round"), u = c.getTime() - a.getTime(), d = u / Ma, f = Na(c) - Na(a), h = (u - f) / Ma, p = n?.unit;
  let m;
  if (p ? m = p : d < 1 ? m = "second" : d < 60 ? m = "minute" : d < Pa ? m = "hour" : h < Da ? m = "day" : h < Ia ? m = "month" : m = "year", m === "second") {
    const g = l(u / 1e3);
    return i.formatDistance("xSeconds", g, s);
  } else if (m === "minute") {
    const g = l(d);
    return i.formatDistance("xMinutes", g, s);
  } else if (m === "hour") {
    const g = l(d / 60);
    return i.formatDistance("xHours", g, s);
  } else if (m === "day") {
    const g = l(h / Pa);
    return i.formatDistance("xDays", g, s);
  } else if (m === "month") {
    const g = l(h / Da);
    return g === 12 && p !== "month" ? i.formatDistance("xYears", 1, s) : i.formatDistance("xMonths", g, s);
  } else {
    const g = l(h / Ia);
    return i.formatDistance("xYears", g, s);
  }
}
function am(t, e) {
  return sm(t, pf(t), e);
}
function sr(t, e) {
  return mf(t, -e);
}
function Ga(t, e) {
  return gf(t, -e);
}
function H1(t) {
  return In(t, "p");
}
function W1(t) {
  return In(t, "HH:mm");
}
function lm(t) {
  return In(t, "LLL");
}
function cm(t) {
  return t.getDate();
}
function Ya(t, e = !0) {
  return am(t, { addSuffix: e });
}
function U1(t, { yesterdayRelative: e = !0 } = {}) {
  return bc(t) ? Ya(t) : vc(t) ? e ? Ya(t) : In(t, "p") : In(t, "PPPp");
}
const K1 = (t, e) => {
  const n = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return t.forEach((r) => {
    const i = r[e], o = Math.abs(yf(i, /* @__PURE__ */ new Date()));
    bc(i) ? n.today.push(r) : vc(i) ? n.yesterday.push(r) : o <= 7 ? n.lastWeek.push(r) : o <= 30 ? n.lastMonth.push(r) : n[i.getFullYear()] = [...n[i.getFullYear()] || [], r];
  }), n;
}, um = ({
  date: t,
  "aria-label": e,
  "aria-labelledby": n
}) => {
  const r = cm(t), i = lm(t);
  return /* @__PURE__ */ C(
    "div",
    {
      className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary",
      "aria-label": e,
      "aria-labelledby": n,
      children: [
        /* @__PURE__ */ y("div", { className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary", children: i }),
        /* @__PURE__ */ y("div", { className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground", children: r })
      ]
    }
  );
}, G1 = He(um), dm = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Go = (t = 21) => {
  let e = "", n = crypto.getRandomValues(new Uint8Array(t |= 0));
  for (; t--; )
    e += dm[n[t] & 63];
  return e;
};
var fm = ["points", "className", "baseLinePoints", "connectNulls"];
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
function hm(t, e) {
  if (t == null) return {};
  var n = pm(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function pm(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function qa(t) {
  return bm(t) || ym(t) || gm(t) || mm();
}
function mm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gm(t, e) {
  if (t) {
    if (typeof t == "string") return Yo(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yo(t, e);
  }
}
function ym(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function bm(t) {
  if (Array.isArray(t)) return Yo(t);
}
function Yo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Xa = function(e) {
  return e && e.x === +e.x && e.y === +e.y;
}, vm = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = [[]];
  return e.forEach(function(r) {
    Xa(r) ? n[n.length - 1].push(r) : n[n.length - 1].length > 0 && n.push([]);
  }), Xa(e[0]) && n[n.length - 1].push(e[0]), n[n.length - 1].length <= 0 && (n = n.slice(0, -1)), n;
}, hr = function(e, n) {
  var r = vm(e);
  n && (r = [r.reduce(function(o, s) {
    return [].concat(qa(o), qa(s));
  }, [])]);
  var i = r.map(function(o) {
    return o.reduce(function(s, a, c) {
      return "".concat(s).concat(c === 0 ? "M" : "L").concat(a.x, ",").concat(a.y);
    }, "");
  }).join("");
  return r.length === 1 ? "".concat(i, "Z") : i;
}, wm = function(e, n, r) {
  var i = hr(e, r);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(hr(n.reverse(), r).slice(1));
}, iu = function(e) {
  var n = e.points, r = e.className, i = e.baseLinePoints, o = e.connectNulls, s = hm(e, fm);
  if (!n || !n.length)
    return null;
  var a = De("recharts-polygon", r);
  if (i && i.length) {
    var c = s.stroke && s.stroke !== "none", l = wm(n, i, o);
    return /* @__PURE__ */ O.createElement("g", {
      className: a
    }, /* @__PURE__ */ O.createElement("path", En({}, G(s, !0), {
      fill: l.slice(-1) === "Z" ? s.fill : "none",
      stroke: "none",
      d: l
    })), c ? /* @__PURE__ */ O.createElement("path", En({}, G(s, !0), {
      fill: "none",
      d: hr(n, o)
    })) : null, c ? /* @__PURE__ */ O.createElement("path", En({}, G(s, !0), {
      fill: "none",
      d: hr(i, o)
    })) : null);
  }
  var u = hr(n, o);
  return /* @__PURE__ */ O.createElement("path", En({}, G(s, !0), {
    fill: u.slice(-1) === "Z" ? s.fill : "none",
    className: a,
    d: u
  }));
}, xm = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function kr(t) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, kr(t);
}
function Sm(t, e) {
  if (t == null) return {};
  var n = km(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function km(t, e) {
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
function Ja(t, e) {
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
    e % 2 ? Ja(Object(n), !0).forEach(function(r) {
      Am(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ja(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Am(t, e, n) {
  return e = Cm(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Cm(t) {
  var e = Em(t, "string");
  return kr(e) == "symbol" ? e : e + "";
}
function Em(t, e) {
  if (kr(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (kr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Om = function(e, n, r, i) {
  var o = "";
  return i.forEach(function(s, a) {
    var c = ze(n, r, e, s);
    a ? o += "L ".concat(c.x, ",").concat(c.y) : o += "M ".concat(c.x, ",").concat(c.y);
  }), o += "Z", o;
}, _m = function(e) {
  var n = e.cx, r = e.cy, i = e.innerRadius, o = e.outerRadius, s = e.polarAngles, a = e.radialLines;
  if (!s || !s.length || !a)
    return null;
  var c = Ar({
    stroke: "#ccc"
  }, G(e, !1));
  return /* @__PURE__ */ O.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, s.map(function(l) {
    var u = ze(n, r, i, l), d = ze(n, r, o, l);
    return /* @__PURE__ */ O.createElement("line", Tt({}, c, {
      key: "line-".concat(l),
      x1: u.x,
      y1: u.y,
      x2: d.x,
      y2: d.y
    }));
  }));
}, Tm = function(e) {
  var n = e.cx, r = e.cy, i = e.radius, o = e.index, s = Ar(Ar({
    stroke: "#ccc"
  }, G(e, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ O.createElement("circle", Tt({}, s, {
    className: De("recharts-polar-grid-concentric-circle", e.className),
    key: "circle-".concat(o),
    cx: n,
    cy: r,
    r: i
  }));
}, Nm = function(e) {
  var n = e.radius, r = e.index, i = Ar(Ar({
    stroke: "#ccc"
  }, G(e, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ O.createElement("path", Tt({}, i, {
    className: De("recharts-polar-grid-concentric-polygon", e.className),
    key: "path-".concat(r),
    d: Om(n, e.cx, e.cy, e.polarAngles)
  }));
}, Pm = function(e) {
  var n = e.polarRadius, r = e.gridType;
  return !n || !n.length ? null : /* @__PURE__ */ O.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, n.map(function(i, o) {
    var s = o;
    return r === "circle" ? /* @__PURE__ */ O.createElement(Tm, Tt({
      key: s
    }, e, {
      radius: i,
      index: o
    })) : /* @__PURE__ */ O.createElement(Nm, Tt({
      key: s
    }, e, {
      radius: i,
      index: o
    }));
  }));
}, ou = function(e) {
  var n = e.cx, r = n === void 0 ? 0 : n, i = e.cy, o = i === void 0 ? 0 : i, s = e.innerRadius, a = s === void 0 ? 0 : s, c = e.outerRadius, l = c === void 0 ? 0 : c, u = e.gridType, d = u === void 0 ? "polygon" : u, f = e.radialLines, h = f === void 0 ? !0 : f, p = Sm(e, xm);
  return l <= 0 ? null : /* @__PURE__ */ O.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ O.createElement(_m, Tt({
    cx: r,
    cy: o,
    innerRadius: a,
    outerRadius: l,
    gridType: d,
    radialLines: h
  }, p)), /* @__PURE__ */ O.createElement(Pm, Tt({
    cx: r,
    cy: o,
    innerRadius: a,
    outerRadius: l,
    gridType: d,
    radialLines: h
  }, p)));
};
ou.displayName = "PolarGrid";
var Oo, Za;
function Dm() {
  if (Za) return Oo;
  Za = 1;
  var t = wc(), e = bf(), n = xc();
  function r(i, o) {
    return i && i.length ? t(i, n(o, 2), e) : void 0;
  }
  return Oo = r, Oo;
}
var Im = Dm();
const Mm = /* @__PURE__ */ Is(Im);
var _o, Qa;
function Lm() {
  if (Qa) return _o;
  Qa = 1;
  var t = wc(), e = xc(), n = vf();
  function r(i, o) {
    return i && i.length ? t(i, e(o, 2), n) : void 0;
  }
  return _o = r, _o;
}
var Rm = Lm();
const $m = /* @__PURE__ */ Is(Rm);
var jm = ["cx", "cy", "angle", "ticks", "axisLine"], Fm = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
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
function el(t, e) {
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
    e % 2 ? el(Object(n), !0).forEach(function(r) {
      to(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : el(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function tl(t, e) {
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
function Bm(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function nl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, au(r.key), r);
  }
}
function Vm(t, e, n) {
  return e && nl(t.prototype, e), n && nl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Hm(t, e, n) {
  return e = Oi(e), Wm(t, su() ? Reflect.construct(e, n || [], Oi(t).constructor) : e.apply(t, n));
}
function Wm(t, e) {
  if (e && (Ln(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Um(t);
}
function Um(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function su() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (su = function() {
    return !!t;
  })();
}
function Oi(t) {
  return Oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Oi(t);
}
function Km(t, e) {
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
  return e = au(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function au(t) {
  var e = Gm(t, "string");
  return Ln(e) == "symbol" ? e : e + "";
}
function Gm(t, e) {
  if (Ln(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ln(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var qn = /* @__PURE__ */ (function(t) {
  function e() {
    return Bm(this, e), Hm(this, e, arguments);
  }
  return Km(e, t), Vm(e, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(r) {
        var i = r.coordinate, o = this.props, s = o.angle, a = o.cx, c = o.cy;
        return ze(a, c, i, s);
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
      var r = this.props, i = r.cx, o = r.cy, s = r.angle, a = r.ticks, c = Mm(a, function(u) {
        return u.coordinate || 0;
      }), l = $m(a, function(u) {
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
      var r = this.props, i = r.cx, o = r.cy, s = r.angle, a = r.ticks, c = r.axisLine, l = tl(r, jm), u = a.reduce(function(p, m) {
        return [Math.min(p[0], m.coordinate), Math.max(p[1], m.coordinate)];
      }, [1 / 0, -1 / 0]), d = ze(i, o, u[0], s), f = ze(i, o, u[1], s), h = Zt(Zt(Zt({}, G(l, !1)), {}, {
        fill: "none"
      }, G(c, !1)), {}, {
        x1: d.x,
        y1: d.y,
        x2: f.x,
        y2: f.y
      });
      return /* @__PURE__ */ O.createElement("line", pr({
        className: "recharts-polar-radius-axis-line"
      }, h));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var r = this, i = this.props, o = i.ticks, s = i.tick, a = i.angle, c = i.tickFormatter, l = i.stroke, u = tl(i, Fm), d = this.getTickTextAnchor(), f = G(u, !1), h = G(s, !1), p = o.map(function(m, g) {
        var b = r.getTickValueCoord(m), v = Zt(Zt(Zt(Zt({
          textAnchor: d,
          transform: "rotate(".concat(90 - a, ", ").concat(b.x, ", ").concat(b.y, ")")
        }, f), {}, {
          stroke: "none",
          fill: l
        }, h), {}, {
          index: g
        }, b), {}, {
          payload: m
        });
        return /* @__PURE__ */ O.createElement(ae, pr({
          className: De("recharts-polar-radius-axis-tick", Sc(s)),
          key: "tick-".concat(m.coordinate)
        }, Yi(r.props, m, g)), e.renderTickItem(s, v, c ? c(m.value, g) : m.value));
      });
      return /* @__PURE__ */ O.createElement(ae, {
        className: "recharts-polar-radius-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.ticks, o = r.axisLine, s = r.tick;
      return !i || !i.length ? null : /* @__PURE__ */ O.createElement(ae, {
        className: De("recharts-polar-radius-axis", this.props.className)
      }, o && this.renderAxisLine(), s && this.renderTicks(), Ms.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(r, i, o) {
      var s;
      return /* @__PURE__ */ O.isValidElement(r) ? s = /* @__PURE__ */ O.cloneElement(r, i) : xe(r) ? s = r(i) : s = /* @__PURE__ */ O.createElement(Gi, pr({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), o), s;
    }
  }]);
})(Gn);
to(qn, "displayName", "PolarRadiusAxis");
to(qn, "axisType", "radiusAxis");
to(qn, "defaultProps", {
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
function Rn(t) {
  "@babel/helpers - typeof";
  return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Rn(t);
}
function en() {
  return en = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, en.apply(this, arguments);
}
function rl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Qt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? rl(Object(n), !0).forEach(function(r) {
      no(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ym(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function il(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, cu(r.key), r);
  }
}
function qm(t, e, n) {
  return e && il(t.prototype, e), n && il(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Xm(t, e, n) {
  return e = _i(e), Jm(t, lu() ? Reflect.construct(e, n || [], _i(t).constructor) : e.apply(t, n));
}
function Jm(t, e) {
  if (e && (Rn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Zm(t);
}
function Zm(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function lu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lu = function() {
    return !!t;
  })();
}
function _i(t) {
  return _i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _i(t);
}
function Qm(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Xo(t, e);
}
function Xo(t, e) {
  return Xo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Xo(t, e);
}
function no(t, e, n) {
  return e = cu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function cu(t) {
  var e = eg(t, "string");
  return Rn(e) == "symbol" ? e : e + "";
}
function eg(t, e) {
  if (Rn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Rn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var tg = Math.PI / 180, ol = 1e-5, Xn = /* @__PURE__ */ (function(t) {
  function e() {
    return Ym(this, e), Xm(this, e, arguments);
  }
  return Qm(e, t), qm(e, [{
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
        var i = this.props, o = i.cx, s = i.cy, a = i.radius, c = i.orientation, l = i.tickSize, u = l || 8, d = ze(o, s, a, r.coordinate), f = ze(o, s, a + (c === "inner" ? -1 : 1) * u, r.coordinate);
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
      var i = this.props.orientation, o = Math.cos(-r.coordinate * tg), s;
      return o > ol ? s = i === "outer" ? "start" : "end" : o < -ol ? s = i === "outer" ? "end" : "start" : s = "middle", s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var r = this.props, i = r.cx, o = r.cy, s = r.radius, a = r.axisLine, c = r.axisLineType, l = Qt(Qt({}, G(this.props, !1)), {}, {
        fill: "none"
      }, G(a, !1));
      if (c === "circle")
        return /* @__PURE__ */ O.createElement(Ls, en({
          className: "recharts-polar-angle-axis-line"
        }, l, {
          cx: i,
          cy: o,
          r: s
        }));
      var u = this.props.ticks, d = u.map(function(f) {
        return ze(i, o, s, f.coordinate);
      });
      return /* @__PURE__ */ O.createElement(iu, en({
        className: "recharts-polar-angle-axis-line"
      }, l, {
        points: d
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var r = this, i = this.props, o = i.ticks, s = i.tick, a = i.tickLine, c = i.tickFormatter, l = i.stroke, u = G(this.props, !1), d = G(s, !1), f = Qt(Qt({}, u), {}, {
        fill: "none"
      }, G(a, !1)), h = o.map(function(p, m) {
        var g = r.getTickLineCoord(p), b = r.getTickTextAnchor(p), v = Qt(Qt(Qt({
          textAnchor: b
        }, u), {}, {
          stroke: "none",
          fill: l
        }, d), {}, {
          index: m,
          payload: p,
          x: g.x2,
          y: g.y2
        });
        return /* @__PURE__ */ O.createElement(ae, en({
          className: De("recharts-polar-angle-axis-tick", Sc(s)),
          key: "tick-".concat(p.coordinate)
        }, Yi(r.props, p, m)), a && /* @__PURE__ */ O.createElement("line", en({
          className: "recharts-polar-angle-axis-tick-line"
        }, f, g)), s && e.renderTickItem(s, v, c ? c(p.value, m) : p.value));
      });
      return /* @__PURE__ */ O.createElement(ae, {
        className: "recharts-polar-angle-axis-ticks"
      }, h);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.ticks, o = r.radius, s = r.axisLine;
      return o <= 0 || !i || !i.length ? null : /* @__PURE__ */ O.createElement(ae, {
        className: De("recharts-polar-angle-axis", this.props.className)
      }, s && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(r, i, o) {
      var s;
      return /* @__PURE__ */ O.isValidElement(r) ? s = /* @__PURE__ */ O.cloneElement(r, i) : xe(r) ? s = r(i) : s = /* @__PURE__ */ O.createElement(Gi, en({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), o), s;
    }
  }]);
})(Gn);
no(Xn, "displayName", "PolarAngleAxis");
no(Xn, "axisType", "angleAxis");
no(Xn, "defaultProps", {
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
function $n(t) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $n(t);
}
function On() {
  return On = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, On.apply(this, arguments);
}
function sl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Z(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? sl(Object(n), !0).forEach(function(r) {
      Qe(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : sl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ng(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function al(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, du(r.key), r);
  }
}
function rg(t, e, n) {
  return e && al(t.prototype, e), n && al(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function ig(t, e, n) {
  return e = Ti(e), og(t, uu() ? Reflect.construct(e, n || [], Ti(t).constructor) : e.apply(t, n));
}
function og(t, e) {
  if (e && ($n(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sg(t);
}
function sg(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function uu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uu = function() {
    return !!t;
  })();
}
function Ti(t) {
  return Ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ti(t);
}
function ag(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Jo(t, e);
}
function Jo(t, e) {
  return Jo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Jo(t, e);
}
function Qe(t, e, n) {
  return e = du(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function du(t) {
  var e = lg(t, "string");
  return $n(e) == "symbol" ? e : e + "";
}
function lg(t, e) {
  if ($n(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if ($n(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var It = /* @__PURE__ */ (function(t) {
  function e(n) {
    var r;
    return ng(this, e), r = ig(this, e, [n]), Qe(r, "pieRef", null), Qe(r, "sectorRefs", []), Qe(r, "id", $s("recharts-pie-")), Qe(r, "handleAnimationEnd", function() {
      var i = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), xe(i) && i();
    }), Qe(r, "handleAnimationStart", function() {
      var i = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), xe(i) && i();
    }), r.state = {
      isAnimationFinished: !n.isAnimationActive,
      prevIsAnimationActive: n.isAnimationActive,
      prevAnimationId: n.animationId,
      sectorToFocus: 0
    }, r;
  }
  return ag(e, t), rg(e, [{
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
      var o = this.props, s = o.label, a = o.labelLine, c = o.dataKey, l = o.valueKey, u = G(this.props, !1), d = G(s, !1), f = G(a, !1), h = s && s.offsetRadius || 20, p = r.map(function(m, g) {
        var b = (m.startAngle + m.endAngle) / 2, v = ze(m.cx, m.cy, m.outerRadius + h, b), w = Z(Z(Z(Z({}, u), m), {}, {
          stroke: "none"
        }, d), {}, {
          index: g,
          textAnchor: e.getTextAnchor(v.x, m.cx)
        }, v), k = Z(Z(Z(Z({}, u), m), {}, {
          fill: "none",
          stroke: m.fill
        }, f), {}, {
          index: g,
          points: [ze(m.cx, m.cy, m.outerRadius, b), v]
        }), A = c;
        return be(c) && be(l) ? A = "value" : be(c) && (A = l), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ O.createElement(ae, {
          key: "label-".concat(m.startAngle, "-").concat(m.endAngle, "-").concat(m.midAngle, "-").concat(g)
        }, a && e.renderLabelLineItem(a, k, "line"), e.renderLabelItem(s, w, $e(m, A)));
      });
      return /* @__PURE__ */ O.createElement(ae, {
        className: "recharts-pie-labels"
      }, p);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(r) {
      var i = this, o = this.props, s = o.activeShape, a = o.blendStroke, c = o.inactiveShape;
      return r.map(function(l, u) {
        if (l?.startAngle === 0 && l?.endAngle === 0 && r.length !== 1) return null;
        var d = i.isActiveIndex(u), f = c && i.hasActiveIndex() ? c : null, h = d ? s : f, p = Z(Z({}, l), {}, {
          stroke: a ? l.fill : l.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ O.createElement(ae, On({
          ref: function(g) {
            g && !i.sectorRefs.includes(g) && i.sectorRefs.push(g);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Yi(i.props, l, u), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(l?.startAngle, "-").concat(l?.endAngle, "-").concat(l.midAngle, "-").concat(u)
        }), /* @__PURE__ */ O.createElement(Wo, On({
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
      return /* @__PURE__ */ O.createElement(qi, {
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
        var m = p.t, g = [], b = o && o[0], v = b.startAngle;
        return o.forEach(function(w, k) {
          var A = f && f[k], E = k > 0 ? wf(w, "paddingAngle", 0) : 0;
          if (A) {
            var x = Pe(A.endAngle - A.startAngle, w.endAngle - w.startAngle), S = Z(Z({}, w), {}, {
              startAngle: v + E,
              endAngle: v + x(m) + E
            });
            g.push(S), v = S.endAngle;
          } else {
            var P = w.endAngle, L = w.startAngle, I = Pe(0, P - L), N = I(m), D = Z(Z({}, w), {}, {
              startAngle: v + E,
              endAngle: v + N + E
            });
            g.push(D), v = D.endAngle;
          }
        }), /* @__PURE__ */ O.createElement(ae, null, r.renderSectorsStatically(g));
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
      return o && i && i.length && (!s || !Xi(s, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
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
      if (o || !s || !s.length || !Re(l) || !Re(u) || !Re(d) || !Re(f))
        return null;
      var m = De("recharts-pie", a);
      return /* @__PURE__ */ O.createElement(ae, {
        tabIndex: this.props.rootTabIndex,
        className: m,
        ref: function(b) {
          r.pieRef = b;
        }
      }, this.renderSectors(), c && this.renderLabels(s), Ms.renderCallByParent(this.props, null, !1), (!h || p) && gn.renderCallByParent(this.props, s, !1));
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
      if (/* @__PURE__ */ O.isValidElement(r))
        return /* @__PURE__ */ O.cloneElement(r, i);
      if (xe(r))
        return r(i);
      var s = De("recharts-pie-label-line", typeof r != "boolean" ? r.className : "");
      return /* @__PURE__ */ O.createElement(Rs, On({}, i, {
        key: o,
        type: "linear",
        className: s
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(r, i, o) {
      if (/* @__PURE__ */ O.isValidElement(r))
        return /* @__PURE__ */ O.cloneElement(r, i);
      var s = o;
      if (xe(r) && (s = r(i), /* @__PURE__ */ O.isValidElement(s)))
        return s;
      var a = De("recharts-pie-label-text", typeof r != "boolean" && !xe(r) ? r.className : "");
      return /* @__PURE__ */ O.createElement(Gi, On({}, i, {
        alignmentBaseline: "middle",
        className: a
      }), s);
    }
  }]);
})(Gn);
hi = It;
Qe(It, "displayName", "Pie");
Qe(It, "defaultProps", {
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
  isAnimationActive: !Ji.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Qe(It, "parseDeltaAngle", function(t, e) {
  var n = di(e - t), r = Math.min(Math.abs(e - t), 360);
  return n * r;
});
Qe(It, "getRealPieData", function(t) {
  var e = t.data, n = t.children, r = G(t, !1), i = Zi(n, js);
  return e && e.length ? e.map(function(o, s) {
    return Z(Z(Z({
      payload: o
    }, r), o), i && i[s] && i[s].props);
  }) : i && i.length ? i.map(function(o) {
    return Z(Z({}, r), o.props);
  }) : [];
});
Qe(It, "parseCoordinateOfPie", function(t, e) {
  var n = e.top, r = e.left, i = e.width, o = e.height, s = xf(i, o), a = r + Qr(t.cx, i, i / 2), c = n + Qr(t.cy, o, o / 2), l = Qr(t.innerRadius, s, 0), u = Qr(t.outerRadius, s, s * 0.8), d = t.maxRadius || Math.sqrt(i * i + o * o) / 2;
  return {
    cx: a,
    cy: c,
    innerRadius: l,
    outerRadius: u,
    maxRadius: d
  };
});
Qe(It, "getComposedData", function(t) {
  var e = t.item, n = t.offset, r = e.type.defaultProps !== void 0 ? Z(Z({}, e.type.defaultProps), e.props) : e.props, i = hi.getRealPieData(r);
  if (!i || !i.length)
    return null;
  var o = r.cornerRadius, s = r.startAngle, a = r.endAngle, c = r.paddingAngle, l = r.dataKey, u = r.nameKey, d = r.valueKey, f = r.tooltipType, h = Math.abs(r.minAngle), p = hi.parseCoordinateOfPie(r, n), m = hi.parseDeltaAngle(s, a), g = Math.abs(m), b = l;
  be(l) && be(d) ? (ki(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = "value") : be(l) && (ki(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = d);
  var v = i.filter(function(S) {
    return $e(S, b, 0) !== 0;
  }).length, w = (g >= 360 ? v : v - 1) * c, k = g - v * h - w, A = i.reduce(function(S, P) {
    var L = $e(P, b, 0);
    return S + (Re(L) ? L : 0);
  }, 0), E;
  if (A > 0) {
    var x;
    E = i.map(function(S, P) {
      var L = $e(S, b, 0), I = $e(S, u, P), N = (Re(L) ? L : 0) / A, D;
      P ? D = x.endAngle + di(m) * c * (L !== 0 ? 1 : 0) : D = s;
      var _ = D + di(m) * ((L !== 0 ? h : 0) + N * k), T = (D + _) / 2, R = (p.innerRadius + p.outerRadius) / 2, z = [{
        name: I,
        value: L,
        payload: S,
        dataKey: b,
        type: f
      }], V = ze(p.cx, p.cy, R, T);
      return x = Z(Z(Z({
        percent: N,
        cornerRadius: o,
        name: I,
        tooltipPayload: z,
        midAngle: T,
        middleRadius: R,
        tooltipPosition: V
      }, S), p), {}, {
        value: $e(S, b),
        startAngle: D,
        endAngle: _,
        payload: S,
        paddingAngle: di(m) * c
      }), x;
    });
  }
  return Z(Z({}, p), {}, {
    sectors: E,
    data: i
  });
});
var To, ll;
function cg() {
  if (ll) return To;
  ll = 1;
  function t(e) {
    return e && e.length ? e[0] : void 0;
  }
  return To = t, To;
}
var No, cl;
function ug() {
  return cl || (cl = 1, No = cg()), No;
}
var dg = ug();
const fg = /* @__PURE__ */ Is(dg);
var hg = ["key"];
function jn(t) {
  "@babel/helpers - typeof";
  return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jn(t);
}
function pg(t, e) {
  if (t == null) return {};
  var n = mg(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function mg(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Ni() {
  return Ni = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ni.apply(this, arguments);
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
function Ne(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ul(Object(n), !0).forEach(function(r) {
      Ct(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ul(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function gg(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function dl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, hu(r.key), r);
  }
}
function yg(t, e, n) {
  return e && dl(t.prototype, e), n && dl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function bg(t, e, n) {
  return e = Pi(e), vg(t, fu() ? Reflect.construct(e, n || [], Pi(t).constructor) : e.apply(t, n));
}
function vg(t, e) {
  if (e && (jn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return wg(t);
}
function wg(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function fu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fu = function() {
    return !!t;
  })();
}
function Pi(t) {
  return Pi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pi(t);
}
function xg(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Zo(t, e);
}
function Zo(t, e) {
  return Zo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Zo(t, e);
}
function Ct(t, e, n) {
  return e = hu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function hu(t) {
  var e = Sg(t, "string");
  return jn(e) == "symbol" ? e : e + "";
}
function Sg(t, e) {
  if (jn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (jn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Hr = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    gg(this, e);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return n = bg(this, e, [].concat(i)), Ct(n, "state", {
      isAnimationFinished: !1
    }), Ct(n, "handleAnimationEnd", function() {
      var s = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), xe(s) && s();
    }), Ct(n, "handleAnimationStart", function() {
      var s = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), xe(s) && s();
    }), Ct(n, "handleMouseEnter", function(s) {
      var a = n.props.onMouseEnter;
      a && a(n.props, s);
    }), Ct(n, "handleMouseLeave", function(s) {
      var a = n.props.onMouseLeave;
      a && a(n.props, s);
    }), n;
  }
  return xg(e, t), yg(e, [{
    key: "renderDots",
    value: function(r) {
      var i = this.props, o = i.dot, s = i.dataKey, a = G(this.props, !1), c = G(o, !0), l = r.map(function(u, d) {
        var f = Ne(Ne(Ne({
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
      return /* @__PURE__ */ O.createElement(ae, {
        className: "recharts-radar-dots"
      }, l);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(r) {
      var i = this.props, o = i.shape, s = i.dot, a = i.isRange, c = i.baseLinePoints, l = i.connectNulls, u;
      return /* @__PURE__ */ O.isValidElement(o) ? u = /* @__PURE__ */ O.cloneElement(o, Ne(Ne({}, this.props), {}, {
        points: r
      })) : xe(o) ? u = o(Ne(Ne({}, this.props), {}, {
        points: r
      })) : u = /* @__PURE__ */ O.createElement(iu, Ni({}, G(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: r,
        baseLinePoints: a ? c : null,
        connectNulls: l
      })), /* @__PURE__ */ O.createElement(ae, {
        className: "recharts-radar-polygon"
      }, u, s ? this.renderDots(r) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var r = this, i = this.props, o = i.points, s = i.isAnimationActive, a = i.animationBegin, c = i.animationDuration, l = i.animationEasing, u = i.animationId, d = this.state.prevPoints;
      return /* @__PURE__ */ O.createElement(qi, {
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
        var h = f.t, p = d && d.length / o.length, m = o.map(function(g, b) {
          var v = d && d[Math.floor(b * p)];
          if (v) {
            var w = Pe(v.x, g.x), k = Pe(v.y, g.y);
            return Ne(Ne({}, g), {}, {
              x: w(h),
              y: k(h)
            });
          }
          var A = Pe(g.cx, g.x), E = Pe(g.cy, g.y);
          return Ne(Ne({}, g), {}, {
            x: A(h),
            y: E(h)
          });
        });
        return r.renderPolygonStatically(m);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var r = this.props, i = r.points, o = r.isAnimationActive, s = r.isRange, a = this.state.prevPoints;
      return o && i && i.length && !s && (!a || !Xi(a, i)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(i);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.hide, o = r.className, s = r.points, a = r.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var c = this.state.isAnimationFinished, l = De("recharts-radar", o);
      return /* @__PURE__ */ O.createElement(ae, {
        className: l
      }, this.renderPolygon(), (!a || c) && gn.renderCallByParent(this.props, s));
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
      if (/* @__PURE__ */ O.isValidElement(r))
        o = /* @__PURE__ */ O.cloneElement(r, i);
      else if (xe(r))
        o = r(i);
      else {
        var s = i.key, a = pg(i, hg);
        o = /* @__PURE__ */ O.createElement(Ls, Ni({}, a, {
          key: s,
          className: De("recharts-radar-dot", typeof r != "boolean" ? r.className : "")
        }));
      }
      return o;
    }
  }]);
})(Gn);
Ct(Hr, "displayName", "Radar");
Ct(Hr, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !Ji.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Ct(Hr, "getComposedData", function(t) {
  var e = t.radiusAxis, n = t.angleAxis, r = t.displayedData, i = t.dataKey, o = t.bandSize, s = n.cx, a = n.cy, c = !1, l = [], u = n.type !== "number" ? o ?? 0 : 0;
  r.forEach(function(f, h) {
    var p = $e(f, n.dataKey, h), m = $e(f, i), g = n.scale(p) + u, b = Array.isArray(m) ? Sf(m) : m, v = be(b) ? void 0 : e.scale(b);
    Array.isArray(m) && m.length >= 2 && (c = !0), l.push(Ne(Ne({}, ze(s, a, v, g)), {}, {
      name: p,
      value: m,
      cx: s,
      cy: a,
      radius: v,
      angle: g,
      payload: f
    }));
  });
  var d = [];
  return c && l.forEach(function(f) {
    if (Array.isArray(f.value)) {
      var h = fg(f.value), p = be(h) ? void 0 : e.scale(h);
      d.push(Ne(Ne({}, f), {}, {
        radius: p
      }, ze(s, a, p, f.angle)));
    } else
      d.push(f);
  }), {
    points: l,
    isRange: c,
    baseLinePoints: d
  };
});
var kg = ["x1", "y1", "x2", "y2", "key"], Ag = ["offset"];
function un(t) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, un(t);
}
function fl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function we(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fl(Object(n), !0).forEach(function(r) {
      Cg(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Cg(t, e, n) {
  return e = Eg(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Eg(t) {
  var e = Og(t, "string");
  return un(e) == "symbol" ? e : e + "";
}
function Og(t, e) {
  if (un(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (un(r) != "object") return r;
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
function hl(t, e) {
  if (t == null) return {};
  var n = _g(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function _g(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var Tg = function(e) {
  var n = e.fill;
  if (!n || n === "none")
    return null;
  var r = e.fillOpacity, i = e.x, o = e.y, s = e.width, a = e.height, c = e.ry;
  return /* @__PURE__ */ O.createElement("rect", {
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
function pu(t, e) {
  var n;
  if (/* @__PURE__ */ O.isValidElement(t))
    n = /* @__PURE__ */ O.cloneElement(t, e);
  else if (xe(t))
    n = t(e);
  else {
    var r = e.x1, i = e.y1, o = e.x2, s = e.y2, a = e.key, c = hl(e, kg), l = G(c, !1);
    l.offset;
    var u = hl(l, Ag);
    n = /* @__PURE__ */ O.createElement("line", nn({}, u, {
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
function Ng(t) {
  var e = t.x, n = t.width, r = t.horizontal, i = r === void 0 ? !0 : r, o = t.horizontalPoints;
  if (!i || !o || !o.length)
    return null;
  var s = o.map(function(a, c) {
    var l = we(we({}, t), {}, {
      x1: e,
      y1: a,
      x2: e + n,
      y2: a,
      key: "line-".concat(c),
      index: c
    });
    return pu(i, l);
  });
  return /* @__PURE__ */ O.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, s);
}
function Pg(t) {
  var e = t.y, n = t.height, r = t.vertical, i = r === void 0 ? !0 : r, o = t.verticalPoints;
  if (!i || !o || !o.length)
    return null;
  var s = o.map(function(a, c) {
    var l = we(we({}, t), {}, {
      x1: a,
      y1: e,
      x2: a,
      y2: e + n,
      key: "line-".concat(c),
      index: c
    });
    return pu(i, l);
  });
  return /* @__PURE__ */ O.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, s);
}
function Dg(t) {
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
    var g = h % e.length;
    return /* @__PURE__ */ O.createElement("rect", {
      key: "react-".concat(h),
      y: f,
      x: r,
      height: m,
      width: o,
      stroke: "none",
      fill: e[g],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ O.createElement("g", {
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
    var g = h % r.length;
    return /* @__PURE__ */ O.createElement("rect", {
      key: "react-".concat(h),
      x: f,
      y: s,
      width: m,
      height: c,
      stroke: "none",
      fill: r[g],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ O.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, d);
}
var Mg = function(e, n) {
  var r = e.xAxis, i = e.width, o = e.height, s = e.offset;
  return kc(Ac(we(we(we({}, Ec.defaultProps), r), {}, {
    ticks: Cc(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: o
    }
  })), s.left, s.left + s.width, n);
}, Lg = function(e, n) {
  var r = e.yAxis, i = e.width, o = e.height, s = e.offset;
  return kc(Ac(we(we(we({}, Ec.defaultProps), r), {}, {
    ticks: Cc(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: o
    }
  })), s.top, s.top + s.height, n);
}, kn = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Jn(t) {
  var e, n, r, i, o, s, a = kf(), c = Af(), l = Cf(), u = we(we({}, t), {}, {
    stroke: (e = t.stroke) !== null && e !== void 0 ? e : kn.stroke,
    fill: (n = t.fill) !== null && n !== void 0 ? n : kn.fill,
    horizontal: (r = t.horizontal) !== null && r !== void 0 ? r : kn.horizontal,
    horizontalFill: (i = t.horizontalFill) !== null && i !== void 0 ? i : kn.horizontalFill,
    vertical: (o = t.vertical) !== null && o !== void 0 ? o : kn.vertical,
    verticalFill: (s = t.verticalFill) !== null && s !== void 0 ? s : kn.verticalFill,
    x: Re(t.x) ? t.x : l.left,
    y: Re(t.y) ? t.y : l.top,
    width: Re(t.width) ? t.width : l.width,
    height: Re(t.height) ? t.height : l.height
  }), d = u.x, f = u.y, h = u.width, p = u.height, m = u.syncWithTicks, g = u.horizontalValues, b = u.verticalValues, v = Ef(), w = Of();
  if (!Re(h) || h <= 0 || !Re(p) || p <= 0 || !Re(d) || d !== +d || !Re(f) || f !== +f)
    return null;
  var k = u.verticalCoordinatesGenerator || Mg, A = u.horizontalCoordinatesGenerator || Lg, E = u.horizontalPoints, x = u.verticalPoints;
  if ((!E || !E.length) && xe(A)) {
    var S = g && g.length, P = A({
      yAxis: w ? we(we({}, w), {}, {
        ticks: S ? g : w.ticks
      }) : void 0,
      width: a,
      height: c,
      offset: l
    }, S ? !0 : m);
    ki(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(un(P), "]")), Array.isArray(P) && (E = P);
  }
  if ((!x || !x.length) && xe(k)) {
    var L = b && b.length, I = k({
      xAxis: v ? we(we({}, v), {}, {
        ticks: L ? b : v.ticks
      }) : void 0,
      width: a,
      height: c,
      offset: l
    }, L ? !0 : m);
    ki(Array.isArray(I), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(un(I), "]")), Array.isArray(I) && (x = I);
  }
  return /* @__PURE__ */ O.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ O.createElement(Tg, {
    fill: u.fill,
    fillOpacity: u.fillOpacity,
    x: u.x,
    y: u.y,
    width: u.width,
    height: u.height,
    ry: u.ry
  }), /* @__PURE__ */ O.createElement(Ng, nn({}, u, {
    offset: l,
    horizontalPoints: E,
    xAxis: v,
    yAxis: w
  })), /* @__PURE__ */ O.createElement(Pg, nn({}, u, {
    offset: l,
    verticalPoints: x,
    xAxis: v,
    yAxis: w
  })), /* @__PURE__ */ O.createElement(Dg, nn({}, u, {
    horizontalPoints: E
  })), /* @__PURE__ */ O.createElement(Ig, nn({}, u, {
    verticalPoints: x
  })));
}
Jn.displayName = "CartesianGrid";
var Rg = ["type", "layout", "connectNulls", "ref"], $g = ["key"];
function Fn(t) {
  "@babel/helpers - typeof";
  return Fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Fn(t);
}
function pl(t, e) {
  if (t == null) return {};
  var n = jg(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function jg(t, e) {
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
function ml(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ue(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ml(Object(n), !0).forEach(function(r) {
      ot(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ml(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function An(t) {
  return Vg(t) || Bg(t) || zg(t) || Fg();
}
function Fg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zg(t, e) {
  if (t) {
    if (typeof t == "string") return Qo(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qo(t, e);
  }
}
function Bg(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Vg(t) {
  if (Array.isArray(t)) return Qo(t);
}
function Qo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Hg(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function gl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, gu(r.key), r);
  }
}
function Wg(t, e, n) {
  return e && gl(t.prototype, e), n && gl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Ug(t, e, n) {
  return e = Di(e), Kg(t, mu() ? Reflect.construct(e, n || [], Di(t).constructor) : e.apply(t, n));
}
function Kg(t, e) {
  if (e && (Fn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gg(t);
}
function Gg(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function mu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mu = function() {
    return !!t;
  })();
}
function Di(t) {
  return Di = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Di(t);
}
function Yg(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && es(t, e);
}
function es(t, e) {
  return es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, es(t, e);
}
function ot(t, e, n) {
  return e = gu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function gu(t) {
  var e = qg(t, "string");
  return Fn(e) == "symbol" ? e : e + "";
}
function qg(t, e) {
  if (Fn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Fn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var bn = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    Hg(this, e);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return n = Ug(this, e, [].concat(i)), ot(n, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), ot(n, "generateSimpleStrokeDasharray", function(s, a) {
      return "".concat(a, "px ").concat(s - a, "px");
    }), ot(n, "getStrokeDasharray", function(s, a, c) {
      var l = c.reduce(function(b, v) {
        return b + v;
      });
      if (!l)
        return n.generateSimpleStrokeDasharray(a, s);
      for (var u = Math.floor(s / l), d = s % l, f = a - s, h = [], p = 0, m = 0; p < c.length; m += c[p], ++p)
        if (m + c[p] > d) {
          h = [].concat(An(c.slice(0, p)), [d - m]);
          break;
        }
      var g = h.length % 2 === 0 ? [0, f] : [f];
      return [].concat(An(e.repeat(c, u)), An(h), g).map(function(b) {
        return "".concat(b, "px");
      }).join(", ");
    }), ot(n, "id", $s("recharts-line-")), ot(n, "pathRef", function(s) {
      n.mainCurve = s;
    }), ot(n, "handleAnimationEnd", function() {
      n.setState({
        isAnimationFinished: !0
      }), n.props.onAnimationEnd && n.props.onAnimationEnd();
    }), ot(n, "handleAnimationStart", function() {
      n.setState({
        isAnimationFinished: !1
      }), n.props.onAnimationStart && n.props.onAnimationStart();
    }), n;
  }
  return Yg(e, t), Wg(e, [{
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
      var o = this.props, s = o.points, a = o.xAxis, c = o.yAxis, l = o.layout, u = o.children, d = Zi(u, Oc);
      if (!d)
        return null;
      var f = function(m, g) {
        return {
          x: m.x,
          y: m.y,
          value: m.value,
          errorVal: $e(m.payload, g)
        };
      }, h = {
        clipPath: r ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ O.createElement(ae, h, d.map(function(p) {
        return /* @__PURE__ */ O.cloneElement(p, {
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
      var a = this.props, c = a.dot, l = a.points, u = a.dataKey, d = G(this.props, !1), f = G(c, !0), h = l.map(function(m, g) {
        var b = Ue(Ue(Ue({
          key: "dot-".concat(g),
          r: 3
        }, d), f), {}, {
          value: m.value,
          dataKey: u,
          cx: m.x,
          cy: m.y,
          index: g,
          payload: m.payload
        });
        return e.renderDotItem(c, b);
      }), p = {
        clipPath: r ? "url(#clipPath-".concat(i ? "" : "dots-").concat(o, ")") : null
      };
      return /* @__PURE__ */ O.createElement(ae, mr({
        className: "recharts-line-dots",
        key: "dots"
      }, p), h);
    }
  }, {
    key: "renderCurveStatically",
    value: function(r, i, o, s) {
      var a = this.props, c = a.type, l = a.layout, u = a.connectNulls;
      a.ref;
      var d = pl(a, Rg), f = Ue(Ue(Ue({}, G(d, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null,
        points: r
      }, s), {}, {
        type: c,
        layout: l,
        connectNulls: u
      });
      return /* @__PURE__ */ O.createElement(Rs, mr({}, f, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(r, i) {
      var o = this, s = this.props, a = s.points, c = s.strokeDasharray, l = s.isAnimationActive, u = s.animationBegin, d = s.animationDuration, f = s.animationEasing, h = s.animationId, p = s.animateNewValues, m = s.width, g = s.height, b = this.state, v = b.prevPoints, w = b.totalLength;
      return /* @__PURE__ */ O.createElement(qi, {
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
          var E = v.length / a.length, x = a.map(function(N, D) {
            var _ = Math.floor(D * E);
            if (v[_]) {
              var T = v[_], R = Pe(T.x, N.x), z = Pe(T.y, N.y);
              return Ue(Ue({}, N), {}, {
                x: R(A),
                y: z(A)
              });
            }
            if (p) {
              var V = Pe(m * 2, N.x), $ = Pe(g / 2, N.y);
              return Ue(Ue({}, N), {}, {
                x: V(A),
                y: $(A)
              });
            }
            return Ue(Ue({}, N), {}, {
              x: N.x,
              y: N.y
            });
          });
          return o.renderCurveStatically(x, r, i);
        }
        var S = Pe(0, w), P = S(A), L;
        if (c) {
          var I = "".concat(c).split(/[,\s]+/gim).map(function(N) {
            return parseFloat(N);
          });
          L = o.getStrokeDasharray(P, w, I);
        } else
          L = o.generateSimpleStrokeDasharray(w, P);
        return o.renderCurveStatically(a, r, i, {
          strokeDasharray: L
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(r, i) {
      var o = this.props, s = o.points, a = o.isAnimationActive, c = this.state, l = c.prevPoints, u = c.totalLength;
      return a && s && s.length && (!l && u > 0 || !Xi(l, s)) ? this.renderCurveWithAnimation(r, i) : this.renderCurveStatically(s, r, i);
    }
  }, {
    key: "render",
    value: function() {
      var r, i = this.props, o = i.hide, s = i.dot, a = i.points, c = i.className, l = i.xAxis, u = i.yAxis, d = i.top, f = i.left, h = i.width, p = i.height, m = i.isAnimationActive, g = i.id;
      if (o || !a || !a.length)
        return null;
      var b = this.state.isAnimationFinished, v = a.length === 1, w = De("recharts-line", c), k = l && l.allowDataOverflow, A = u && u.allowDataOverflow, E = k || A, x = be(g) ? this.id : g, S = (r = G(s, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, P = S.r, L = P === void 0 ? 3 : P, I = S.strokeWidth, N = I === void 0 ? 2 : I, D = _f(s) ? s : {}, _ = D.clipDot, T = _ === void 0 ? !0 : _, R = L * 2 + N;
      return /* @__PURE__ */ O.createElement(ae, {
        className: w
      }, k || A ? /* @__PURE__ */ O.createElement("defs", null, /* @__PURE__ */ O.createElement("clipPath", {
        id: "clipPath-".concat(x)
      }, /* @__PURE__ */ O.createElement("rect", {
        x: k ? f : f - h / 2,
        y: A ? d : d - p / 2,
        width: k ? h : h * 2,
        height: A ? p : p * 2
      })), !T && /* @__PURE__ */ O.createElement("clipPath", {
        id: "clipPath-dots-".concat(x)
      }, /* @__PURE__ */ O.createElement("rect", {
        x: f - R / 2,
        y: d - R / 2,
        width: h + R,
        height: p + R
      }))) : null, !v && this.renderCurve(E, x), this.renderErrorBar(E, x), (v || s) && this.renderDots(E, T, x), (!m || b) && gn.renderCallByParent(this.props, a));
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
      for (var o = r.length % 2 !== 0 ? [].concat(An(r), [0]) : r, s = [], a = 0; a < i; ++a)
        s = [].concat(An(s), An(o));
      return s;
    }
  }, {
    key: "renderDotItem",
    value: function(r, i) {
      var o;
      if (/* @__PURE__ */ O.isValidElement(r))
        o = /* @__PURE__ */ O.cloneElement(r, i);
      else if (xe(r))
        o = r(i);
      else {
        var s = i.key, a = pl(i, $g), c = De("recharts-line-dot", typeof r != "boolean" ? r.className : "");
        o = /* @__PURE__ */ O.createElement(Ls, mr({
          key: s
        }, a, {
          className: c
        }));
      }
      return o;
    }
  }]);
})(Gn);
ot(bn, "displayName", "Line");
ot(bn, "defaultProps", {
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
  isAnimationActive: !Ji.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
ot(bn, "getComposedData", function(t) {
  var e = t.props, n = t.xAxis, r = t.yAxis, i = t.xAxisTicks, o = t.yAxisTicks, s = t.dataKey, a = t.bandSize, c = t.displayedData, l = t.offset, u = e.layout, d = c.map(function(f, h) {
    var p = $e(f, s);
    return u === "horizontal" ? {
      x: Ai({
        axis: n,
        ticks: i,
        bandSize: a,
        entry: f,
        index: h
      }),
      y: be(p) ? null : r.scale(p),
      value: p,
      payload: f
    } : {
      x: be(p) ? null : n.scale(p),
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
  return Ue({
    points: d,
    layout: u
  }, l);
});
function zn(t) {
  "@babel/helpers - typeof";
  return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, zn(t);
}
function Xg(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Jg(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, vu(r.key), r);
  }
}
function Zg(t, e, n) {
  return e && Jg(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Qg(t, e, n) {
  return e = Ii(e), ey(t, yu() ? Reflect.construct(e, n || [], Ii(t).constructor) : e.apply(t, n));
}
function ey(t, e) {
  if (e && (zn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ty(t);
}
function ty(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function yu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yu = function() {
    return !!t;
  })();
}
function Ii(t) {
  return Ii = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ii(t);
}
function ny(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ts(t, e);
}
function ts(t, e) {
  return ts = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ts(t, e);
}
function bu(t, e, n) {
  return e = vu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function vu(t) {
  var e = ry(t, "string");
  return zn(e) == "symbol" ? e : e + "";
}
function ry(t, e) {
  if (zn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (zn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var ro = /* @__PURE__ */ (function(t) {
  function e() {
    return Xg(this, e), Qg(this, e, arguments);
  }
  return ny(e, t), Zg(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(O.Component);
bu(ro, "displayName", "ZAxis");
bu(ro, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var iy = ["option", "isActive"];
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
function oy(t, e) {
  if (t == null) return {};
  var n = sy(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function sy(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function ay(t) {
  var e = t.option, n = t.isActive, r = oy(t, iy);
  return typeof e == "string" ? /* @__PURE__ */ O.createElement(Wo, gr({
    option: /* @__PURE__ */ O.createElement(Tf, gr({
      type: e
    }, r)),
    isActive: n,
    shapeType: "symbols"
  }, r)) : /* @__PURE__ */ O.createElement(Wo, gr({
    option: e,
    isActive: n,
    shapeType: "symbols"
  }, r));
}
function Bn(t) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Bn(t);
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
function yl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Je(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yl(Object(n), !0).forEach(function(r) {
      Ft(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ly(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function bl(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, xu(r.key), r);
  }
}
function cy(t, e, n) {
  return e && bl(t.prototype, e), n && bl(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function uy(t, e, n) {
  return e = Mi(e), dy(t, wu() ? Reflect.construct(e, n || [], Mi(t).constructor) : e.apply(t, n));
}
function dy(t, e) {
  if (e && (Bn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fy(t);
}
function fy(t) {
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
function Mi(t) {
  return Mi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mi(t);
}
function hy(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ns(t, e);
}
function ns(t, e) {
  return ns = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ns(t, e);
}
function Ft(t, e, n) {
  return e = xu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function xu(t) {
  var e = py(t, "string");
  return Bn(e) == "symbol" ? e : e + "";
}
function py(t, e) {
  if (Bn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Bn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Wr = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    ly(this, e);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return n = uy(this, e, [].concat(i)), Ft(n, "state", {
      isAnimationFinished: !1
    }), Ft(n, "handleAnimationEnd", function() {
      n.setState({
        isAnimationFinished: !0
      });
    }), Ft(n, "handleAnimationStart", function() {
      n.setState({
        isAnimationFinished: !1
      });
    }), Ft(n, "id", $s("recharts-scatter-")), n;
  }
  return hy(e, t), cy(e, [{
    key: "renderSymbolsStatically",
    value: function(r) {
      var i = this, o = this.props, s = o.shape, a = o.activeShape, c = o.activeIndex, l = G(this.props, !1);
      return r.map(function(u, d) {
        var f = c === d, h = f ? a : s, p = Je(Je({}, l), u);
        return /* @__PURE__ */ O.createElement(ae, yr({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(u?.cx, "-").concat(u?.cy, "-").concat(u?.size, "-").concat(d)
        }, Yi(i.props, u, d), {
          role: "img"
        }), /* @__PURE__ */ O.createElement(ay, yr({
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
      return /* @__PURE__ */ O.createElement(qi, {
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
        var h = f.t, p = o.map(function(m, g) {
          var b = d && d[g];
          if (b) {
            var v = Pe(b.cx, m.cx), w = Pe(b.cy, m.cy), k = Pe(b.size, m.size);
            return Je(Je({}, m), {}, {
              cx: v(h),
              cy: w(h),
              size: k(h)
            });
          }
          var A = Pe(0, m.size);
          return Je(Je({}, m), {}, {
            size: A(h)
          });
        });
        return /* @__PURE__ */ O.createElement(ae, null, r.renderSymbolsStatically(p));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var r = this.props, i = r.points, o = r.isAnimationActive, s = this.state.prevPoints;
      return o && i && i.length && (!s || !Xi(s, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var r = this.props.isAnimationActive;
      if (r && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.points, s = i.xAxis, a = i.yAxis, c = i.children, l = Zi(c, Oc);
      return l ? l.map(function(u, d) {
        var f = u.props, h = f.direction, p = f.dataKey;
        return /* @__PURE__ */ O.cloneElement(u, {
          key: "".concat(h, "-").concat(p, "-").concat(o[d]),
          data: o,
          xAxis: s,
          yAxis: a,
          layout: h === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(g, b) {
            return {
              x: g.cx,
              y: g.cy,
              value: h === "x" ? +g.node.x : +g.node.y,
              errorVal: $e(g, b)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var r = this.props, i = r.points, o = r.line, s = r.lineType, a = r.lineJointType, c = G(this.props, !1), l = G(o, !1), u, d;
      if (s === "joint")
        u = i.map(function(w) {
          return {
            x: w.cx,
            y: w.cy
          };
        });
      else if (s === "fitting") {
        var f = Nf(i), h = f.xmin, p = f.xmax, m = f.a, g = f.b, b = function(k) {
          return m * k + g;
        };
        u = [{
          x: h,
          y: b(h)
        }, {
          x: p,
          y: b(p)
        }];
      }
      var v = Je(Je(Je({}, c), {}, {
        fill: "none",
        stroke: c && c.fill
      }, l), {}, {
        points: u
      });
      return /* @__PURE__ */ O.isValidElement(o) ? d = /* @__PURE__ */ O.cloneElement(o, v) : xe(o) ? d = o(v) : d = /* @__PURE__ */ O.createElement(Rs, yr({}, v, {
        type: a
      })), /* @__PURE__ */ O.createElement(ae, {
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
      var g = this.state.isAnimationFinished, b = De("recharts-scatter", a), v = c && c.allowDataOverflow, w = l && l.allowDataOverflow, k = v || w, A = be(p) ? this.id : p;
      return /* @__PURE__ */ O.createElement(ae, {
        className: b,
        clipPath: k ? "url(#clipPath-".concat(A, ")") : null
      }, v || w ? /* @__PURE__ */ O.createElement("defs", null, /* @__PURE__ */ O.createElement("clipPath", {
        id: "clipPath-".concat(A)
      }, /* @__PURE__ */ O.createElement("rect", {
        x: v ? u : u - f / 2,
        y: w ? d : d - h / 2,
        width: v ? f : f * 2,
        height: w ? h : h * 2
      }))) : null, s && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ O.createElement(ae, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!m || g) && gn.renderCallByParent(this.props, o));
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
})(Gn);
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
  isAnimationActive: !Ji.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Ft(Wr, "getComposedData", function(t) {
  var e = t.xAxis, n = t.yAxis, r = t.zAxis, i = t.item, o = t.displayedData, s = t.xAxisTicks, a = t.yAxisTicks, c = t.offset, l = i.props.tooltipType, u = Zi(i.props.children, js), d = be(e.dataKey) ? i.props.dataKey : e.dataKey, f = be(n.dataKey) ? i.props.dataKey : n.dataKey, h = r && r.dataKey, p = r ? r.range : ro.defaultProps.range, m = p && p[0], g = e.scale.bandwidth ? e.scale.bandwidth() : 0, b = n.scale.bandwidth ? n.scale.bandwidth() : 0, v = o.map(function(w, k) {
    var A = $e(w, d), E = $e(w, f), x = !be(h) && $e(w, h) || "-", S = [{
      name: be(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: A,
      payload: w,
      dataKey: d,
      type: l
    }, {
      name: be(n.dataKey) ? i.props.name : n.name || n.dataKey,
      unit: n.unit || "",
      value: E,
      payload: w,
      dataKey: f,
      type: l
    }];
    x !== "-" && S.push({
      name: r.name || r.dataKey,
      unit: r.unit || "",
      value: x,
      payload: w,
      dataKey: h,
      type: l
    });
    var P = Ai({
      axis: e,
      ticks: s,
      bandSize: g,
      entry: w,
      index: k,
      dataKey: d
    }), L = Ai({
      axis: n,
      ticks: a,
      bandSize: b,
      entry: w,
      index: k,
      dataKey: f
    }), I = x !== "-" ? r.scale(x) : m, N = Math.sqrt(Math.max(I, 0) / Math.PI);
    return Je(Je({}, w), {}, {
      cx: P,
      cy: L,
      x: P - N,
      y: L - N,
      xAxis: e,
      yAxis: n,
      zAxis: r,
      width: 2 * N,
      height: 2 * N,
      size: I,
      node: {
        x: A,
        y: E,
        z: x
      },
      tooltipPayload: S,
      tooltipPosition: {
        x: P,
        y: L
      },
      payload: w
    }, u && u[k] && u[k].props);
  });
  return Je({
    points: v
  }, c);
});
var my = $r({
  chartName: "LineChart",
  GraphicalChild: bn,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ut
  }, {
    axisType: "yAxis",
    AxisComp: _t
  }],
  formatAxisMap: Fs
}), Su = $r({
  chartName: "BarChart",
  GraphicalChild: jr,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ut
  }, {
    axisType: "yAxis",
    AxisComp: _t
  }],
  formatAxisMap: Fs
}), gy = $r({
  chartName: "PieChart",
  GraphicalChild: It,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Xn
  }, {
    axisType: "radiusAxis",
    AxisComp: qn
  }],
  formatAxisMap: _c,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), yy = $r({
  chartName: "RadarChart",
  GraphicalChild: Hr,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Xn
  }, {
    axisType: "radiusAxis",
    AxisComp: qn
  }],
  formatAxisMap: _c,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), by = $r({
  chartName: "ComposedChart",
  GraphicalChild: [bn, Tc, jr, Wr],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ut
  }, {
    axisType: "yAxis",
    AxisComp: _t
  }, {
    axisType: "zAxis",
    AxisComp: ro
  }],
  formatAxisMap: Fs
});
const vy = Ds({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), wy = { light: "", dark: ".dark" }, ku = Y.createContext(null);
function Au() {
  const t = Y.useContext(ku);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
const xy = ({
  id: t,
  className: e,
  children: n,
  aspect: r,
  config: i,
  ...o
}, s) => {
  const a = Y.useId(), c = `chart-${t || a.replace(/:/g, "")}`, l = Y.useRef(null), [u, d] = de(), f = Ke(() => new ResizeObserver(
    (h) => d(h[0].contentRect.height)
  ), []);
  return pc(() => {
    const h = s && "current" in s ? s.current : l.current;
    return h && f.observe(h.parentElement), () => {
      f.disconnect();
    };
  }, [f, s, l]), /* @__PURE__ */ y(ku.Provider, { value: { config: i }, children: /* @__PURE__ */ C(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": c,
      ref: s || l,
      className: J(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        r ? vy({ aspect: r }) : "aspect-auto h-full",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ y(Sy, { id: c, config: i }),
        /* @__PURE__ */ y(
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
}, Kt = Y.forwardRef(xy);
Kt.displayName = "Chart";
const Sy = ({ id: t, config: e }) => {
  const n = Object.entries(e).filter(([i, o]) => o.theme || o.color);
  if (!n.length)
    return null;
  const r = Object.entries(wy).map(
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
  return /* @__PURE__ */ y(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Mf.sanitize(r.join(`
`))
      }
    }
  );
}, vn = Pf, Gt = Y.forwardRef(
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
    const { config: m } = Au(), g = Y.useMemo(() => {
      if (i || !e?.length)
        return null;
      const [v] = e, w = `${h || v.dataKey || v.name || "value"}`, k = rs(m, v, w), A = !h && typeof s == "string" ? m[s]?.label || s : k?.label;
      return a ? /* @__PURE__ */ y("div", { className: J("font-medium", c), children: a(A, e) }) : A ? /* @__PURE__ */ y("div", { className: J("font-medium", c), children: A }) : null;
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
    return /* @__PURE__ */ C(
      "div",
      {
        ref: p,
        className: J(
          "grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary px-3 py-2.5 text-base shadow-lg backdrop-blur",
          n
        ),
        children: [
          b ? null : g,
          /* @__PURE__ */ y("div", { className: "grid gap-2", children: e.map((v, w) => {
            const k = `${f || v.name || v.dataKey || "value"}`, A = rs(m, v, k), E = d || v.payload.fill || v.color;
            return /* @__PURE__ */ y(
              "div",
              {
                className: J(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  r === "dot" && "items-center"
                ),
                children: l && v?.value !== void 0 && v.name ? l(v.value, v.name, v, w, v.payload) : /* @__PURE__ */ C(on, { children: [
                  A?.icon ? /* @__PURE__ */ y(A.icon, {}) : !o && /* @__PURE__ */ y(
                    "div",
                    {
                      className: J(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": b && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": E,
                        "--color-border": E
                      }
                    }
                  ),
                  /* @__PURE__ */ C(
                    "div",
                    {
                      className: J(
                        "flex flex-1 justify-between text-sm leading-none",
                        b ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ C("div", { className: "grid gap-2", children: [
                          b ? g : null,
                          /* @__PURE__ */ y("span", { className: "pr-2 text-f1-foreground", children: A?.label || v.name })
                        ] }),
                        v.value && /* @__PURE__ */ y("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: u ? u(String(v.value)) : v.value.toLocaleString() })
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
Gt.displayName = "ChartTooltip";
const Ur = Df, Zn = Y.forwardRef(
  ({
    className: t,
    hideIcon: e = !1,
    payload: n,
    verticalAlign: r = "bottom",
    nameKey: i,
    hiddenKey: o,
    leftShift: s = 0
  }, a) => {
    const { config: c } = Au();
    return n?.length ? /* @__PURE__ */ y(
      "div",
      {
        ref: a,
        className: J(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          r === "top" ? "pb-2" : "pt-2",
          t
        ),
        style: { marginLeft: s },
        children: n.map((l) => {
          const u = `${i || l.dataKey || "value"}`, d = rs(
            c,
            l,
            u,
            o
          );
          return /* @__PURE__ */ C(
            "div",
            {
              className: J(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                d?.icon && !e ? /* @__PURE__ */ y(d.icon, {}) : d && /* @__PURE__ */ y(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: {
                      backgroundColor: l.color
                    }
                  }
                ),
                /* @__PURE__ */ y("span", { className: "text-f1-foreground", children: d?.label })
              ]
            },
            JSON.stringify(l)
          );
        })
      }
    ) : null;
  }
);
Zn.displayName = "ChartLegend";
function rs(t, e, n, r) {
  if (typeof e != "object" || e === null)
    return;
  const i = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let o = n;
  if (n in e && typeof e[n] == "string" ? o = e[n] : i && n in i && typeof i[n] == "string" ? o = i[n] : "dataKey" in e && typeof e.dataKey == "string" && (o = e.dataKey), !(r && r === o))
    return o in t ? t[o] : t[n];
}
function Qn(t, e = "12px Inter, sans-serif") {
  const r = document.createElement("canvas").getContext("2d");
  return r ? (r.font = e, r.measureText(t).width) : 0;
}
const io = (t) => ({
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
function Mt(t) {
  return Pt(t);
}
function oo(t) {
  return t.map((e) => ({ x: e.label, ...e.values }));
}
const ky = ({
  index: t,
  visibleTicksCount: e,
  payload: n,
  tickFormatter: r,
  ...i
}) => {
  const o = t === 0, s = t === e - 1;
  return /* @__PURE__ */ y(Gi, { ...i, textAnchor: o ? "start" : s ? "end" : "middle", children: r?.(n.value, n.index) ?? n.value });
}, Ay = ({
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
  const { enabled: u } = Lf(), d = Object.keys(e), f = Go(12), h = oo(t), p = Math.max(
    ...h.flatMap(
      (w) => d.map(
        (k) => Qn(
          r?.tickFormatter ? r.tickFormatter(`${w[k]}`) : `${w[k]}`
        )
      )
    )
  ), m = r?.width ?? p + 20, g = !r?.hide, b = !n?.hide, v = !i || !u;
  return /* @__PURE__ */ y(Kt, { config: e, ref: l, aspect: a, children: /* @__PURE__ */ C(
    Rf,
    {
      accessibilityLayer: !0,
      data: h,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: c
      },
      children: [
        /* @__PURE__ */ C("defs", { children: [
          /* @__PURE__ */ C(
            "linearGradient",
            {
              id: `${f}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${g ? m : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                (o === "l" || o === "lr") && /* @__PURE__ */ C(on, { children: [
                  /* @__PURE__ */ y("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                  /* @__PURE__ */ y("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ y("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" })
                ] }),
                (o === "r" || o === "lr") && /* @__PURE__ */ C(on, { children: [
                  /* @__PURE__ */ y("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ y("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ y("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
                ] }),
                !o && /* @__PURE__ */ C(on, { children: [
                  /* @__PURE__ */ y("stop", { offset: "0%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ y("stop", { offset: "100%", stopColor: "white", stopOpacity: "1" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ y(
            "mask",
            {
              id: `${f}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ y(
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
          d.map((w, k) => /* @__PURE__ */ C(
            "linearGradient",
            {
              id: `fill${String(w)}-${f}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ y(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: e[w].color ? Ae(e[w].color) : Ce(k),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ y(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: e[w].color ? Ae(e[w].color) : Ce(k),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            k
          ))
        ] }),
        /* @__PURE__ */ y(
          Jn,
          {
            ...Kr(),
            mask: `url(#${f}-transparent-edges)`
          }
        ),
        b && /* @__PURE__ */ y(
          Ut,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: n?.tickFormatter,
            ticks: n?.ticks,
            domain: n?.domain,
            interval: 0,
            tick: ky
          }
        ),
        g && /* @__PURE__ */ y(
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
        v && /* @__PURE__ */ y(
          vn,
          {
            ...Gr(),
            content: /* @__PURE__ */ y(
              Gt,
              {
                indicator: "dot",
                yAxisFormatter: r?.tickFormatter
              }
            )
          }
        ),
        d.map((w, k) => /* @__PURE__ */ y(
          Tc,
          {
            isAnimationActive: !1,
            dataKey: w,
            type: s,
            mask: `url(#${f}-transparent-edges)`,
            fill: `url(#fill${w}-${f})`,
            fillOpacity: e[w].dashed ? 0 : 0.4,
            stroke: e[w].color ? Ae(e[w].color) : Ce(k),
            strokeWidth: 1.5,
            strokeDasharray: e[w].dashed ? "4 4" : void 0
          },
          w
        )),
        Object.keys(e).length > 1 && /* @__PURE__ */ y(
          Ur,
          {
            className: "flex justify-start",
            content: /* @__PURE__ */ y(Zn, {})
          }
        )
      ]
    }
  ) });
}, Cy = Mt(Ay), Ey = ({
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
  const p = Object.keys(t), m = oo(e).map((b, v, w) => d && p.length === 1 && !t[p[0]]?.color ? {
    ...b,
    fill: v === w.length - 1 ? Ce(v) : Ce(v, 0.5)
  } : b), g = Math.max(
    ...m.flatMap(
      (b) => p.map(
        (v) => Qn(
          r?.tickFormatter ? r.tickFormatter(`${b[v]}`) : `${b[v]}`
        )
      )
    )
  );
  return /* @__PURE__ */ y(Kt, { config: t, ref: h, aspect: c, children: /* @__PURE__ */ C(
    Su,
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
        !s && /* @__PURE__ */ y(
          vn,
          {
            ...Gr(),
            content: /* @__PURE__ */ y(Gt, { yAxisFormatter: r.tickFormatter })
          }
        ),
        !a && /* @__PURE__ */ y(Jn, { ...Kr() }),
        /* @__PURE__ */ y(
          _t,
          {
            ...Cr(r),
            tick: !0,
            width: r.width ?? g + 20,
            hide: r.hide
          }
        ),
        /* @__PURE__ */ y(
          Ut,
          {
            ...io(n),
            hide: n?.hide,
            tick: u ? (b) => {
              const { x: v, y: w, payload: k } = b, A = e.find((S) => S.label === k.value)?.values || "", E = Object.keys(A).length === 1 ? Object.values(A)?.[0] : void 0, x = E !== void 0 && r.tickFormatter ? r.tickFormatter(`${E}`) : E.toLocaleString();
              return /* @__PURE__ */ C("g", { transform: `translate(${v},${w})`, children: [
                /* @__PURE__ */ y(
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
                !!E && /* @__PURE__ */ y(
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
        p.map((b, v) => /* @__PURE__ */ y(
          jr,
          {
            isAnimationActive: !1,
            dataKey: b,
            stackId: o === "stacked" || o === "stacked-by-sign" ? "stack" : void 0,
            fill: d ? ((w) => w.fill) : t[b].color ? Ae(t[b].color) : Ce(v),
            radius: o === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ y(
              gn,
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
        l && /* @__PURE__ */ y(
          Ur,
          {
            content: /* @__PURE__ */ y(Zn, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, Oy = Mt(Ey), _y = ({ data: t, legend: e = !0, hideTooltip: n = !1 }, r) => {
  const i = t.reduce((o, s) => o + s.value, 0);
  return /* @__PURE__ */ C($f, { children: [
    /* @__PURE__ */ y("div", { className: "w-full", ref: r, children: /* @__PURE__ */ y("div", { className: "flex h-2 gap-1 overflow-hidden", children: t.map((o, s) => {
      const a = o.value / i * 100, c = o.color ? Ae(o.color) : Ce(s), l = (u) => {
        const d = u / i * 100;
        return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
      };
      return a === 0 ? null : /* @__PURE__ */ C(jf, { children: [
        /* @__PURE__ */ y(
          Ff,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${a}%` },
            title: o.name,
            asChild: !0,
            children: /* @__PURE__ */ y(
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
        !n && /* @__PURE__ */ C(zf, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ y(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: c }
            }
          ),
          /* @__PURE__ */ y("span", { className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary", children: o.name }),
          /* @__PURE__ */ C("span", { className: "font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground", children: [
            o.value,
            " (",
            l(o.value),
            "%)"
          ] })
        ] })
      ] }, o.name);
    }) }) }),
    e && /* @__PURE__ */ y(
      "div",
      {
        className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: t.map((o, s) => {
          const a = o.color ? Ae(o.color) : Ce(s);
          return /* @__PURE__ */ C(
            "div",
            {
              className: "flex items-center gap-1.5",
              role: "listitem",
              children: [
                /* @__PURE__ */ y(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: { backgroundColor: a }
                  }
                ),
                /* @__PURE__ */ y("span", { className: "text-f1-foreground", children: o.name })
              ]
            },
            o.name
          );
        })
      }
    )
  ] });
}, Ty = Mt(_y), Ny = (t) => {
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
    return /* @__PURE__ */ y(
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
}, Py = ({
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
  const m = oo(e), g = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], b = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], v = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], w = [
    ...g,
    ...b,
    ...v
  ], k = Math.max(
    ...m.flatMap(
      (x) => w.map(
        (S) => Qn(
          r?.tickFormatter ? r.tickFormatter(`${x[S]}`) : `${x[S]}`
        )
      )
    )
  ), A = [u, d, f].filter(
    (x) => x?.axisPosition === "left"
  ), E = [u, d, f].filter(
    (x) => x?.axisPosition === "right"
  );
  return /* @__PURE__ */ y(Kt, { config: t, ref: p, aspect: a, children: /* @__PURE__ */ C(
    by,
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
        const S = {
          label: x.activeLabel,
          values: {}
        };
        for (const P of x.activePayload)
          S.values[P.name] = P.value;
        h(S);
      },
      children: [
        !o && /* @__PURE__ */ y(
          vn,
          {
            ...Gr(),
            content: /* @__PURE__ */ y(Gt, { yAxisFormatter: r.tickFormatter })
          }
        ),
        !s && /* @__PURE__ */ y(Jn, { ...Kr() }),
        A.length > 0 && /* @__PURE__ */ y(
          _t,
          {
            ...Cr(r),
            tick: !0,
            width: r.width ?? k + 20 + (E.length > 0 && A[0]?.axisLabel ? 20 : 0),
            hide: r.hide || A.some((x) => x?.hideAxis),
            label: A[0]?.axisLabel ? {
              value: A[0].axisLabel,
              angle: -90,
              position: "insideLeft"
            } : void 0
          }
        ),
        E.length > 0 && /* @__PURE__ */ y(
          _t,
          {
            ...Cr(r),
            yAxisId: "right",
            orientation: "right",
            tick: !0,
            width: r.width ?? k + 20 + (A.length > 0 && E[0]?.axisLabel ? 20 : 0),
            hide: r.hide || E.some((x) => x?.hideAxis),
            label: E[0]?.axisLabel ? {
              value: E[0].axisLabel,
              angle: 90,
              position: "insideRight"
            } : void 0
          }
        ),
        /* @__PURE__ */ y(
          Ut,
          {
            ...io(n),
            hide: n?.hide,
            tick: l ? (x) => {
              const { x: S, y: P, payload: L } = x, I = e.find((_) => _.label === L.value)?.values || "", N = Object.keys(I).length === 1 ? Object.values(I)?.[0] : void 0, D = N !== void 0 && r.tickFormatter ? r.tickFormatter(`${N}`) : N.toLocaleString();
              return /* @__PURE__ */ C("g", { transform: `translate(${S},${P})`, children: [
                /* @__PURE__ */ y(
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
                !!N && /* @__PURE__ */ y(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: D
                  }
                )
              ] });
            } : void 0
          }
        ),
        g.map((x, S) => /* @__PURE__ */ y(
          jr,
          {
            isAnimationActive: !1,
            dataKey: String(x),
            fill: t[x].color ? Ae(t[x].color) : Ce(S),
            radius: 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ y(
              gn,
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
        b.map((x, S) => /* @__PURE__ */ y(
          bn,
          {
            type: d?.lineType ?? "natural",
            dataKey: String(x),
            stroke: t[x].color ? Ae(t[x].color) : Ce(g.length + S),
            strokeWidth: 2,
            dot: d?.dot ?? !1,
            isAnimationActive: !1,
            yAxisId: d?.axisPosition === "right" ? "right" : void 0
          },
          `line-${String(x)}`
        )),
        v.map((x, S) => /* @__PURE__ */ y(
          Wr,
          {
            dataKey: String(x),
            fill: t[x].color ? Ae(t[x].color) : Ce(
              g.length + b.length + S
            ),
            r: 4,
            isAnimationActive: !1,
            yAxisId: f?.axisPosition === "right" ? "right" : void 0,
            shape: Ny(String(x))
          },
          `scatter-${String(x)}`
        )),
        c && /* @__PURE__ */ y(
          Ur,
          {
            content: /* @__PURE__ */ y(Zn, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, Dy = Mt(Py), Iy = ({
  data: t,
  dataConfig: e,
  xAxis: n,
  yAxis: r = { hide: !0 },
  lineType: i = "natural",
  aspect: o,
  hideTooltip: s = !1,
  hideGrid: a = !1
}, c) => {
  const l = Object.keys(e), u = oo(t), d = Math.max(
    ...u.flatMap(
      (f) => l.map(
        (h) => Qn(
          r?.tickFormatter ? r.tickFormatter(`${f[h]}`) : `${f[h]}`
        )
      )
    )
  );
  return /* @__PURE__ */ y(Kt, { config: e, ref: c, aspect: o, children: /* @__PURE__ */ C(
    my,
    {
      accessibilityLayer: !0,
      data: u,
      margin: { left: r && !r.hide ? 0 : 12, right: 12 },
      children: [
        !a && /* @__PURE__ */ y(Jn, { ...Kr() }),
        !n?.hide && /* @__PURE__ */ y(Ut, { ...io(n) }),
        !r?.hide && /* @__PURE__ */ y(
          _t,
          {
            ...Cr(r),
            width: r.width ?? d + 20
          }
        ),
        !s && /* @__PURE__ */ y(
          vn,
          {
            ...Gr(),
            content: /* @__PURE__ */ y(Gt, { yAxisFormatter: r?.tickFormatter })
          }
        ),
        l.map((f, h) => /* @__PURE__ */ y(
          bn,
          {
            dataKey: f,
            isAnimationActive: !1,
            type: i,
            stroke: e[f].color ? Ae(e[f].color) : Ce(h),
            strokeWidth: 1.5,
            strokeDasharray: e[f].dashed ? "4 4" : void 0,
            dot: !1
          },
          f
        ))
      ]
    }
  ) });
}, My = Mt(Iy), Ly = ({ data: t, dataConfig: e, overview: n, aspect: r, tickFormatter: i }, o) => {
  const s = t.map((l, u) => ({
    ...l,
    fill: e[l.label]?.color ? Ae(e[l.label].color) : Ce(u)
  })), c = t.map((l) => l.value).reduce((l, u) => l + u);
  return c === 0 && s.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), /* @__PURE__ */ y(
    Kt,
    {
      config: e,
      ref: o,
      aspect: r,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ C(gy, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        c !== 0 && /* @__PURE__ */ y(
          vn,
          {
            isAnimationActive: !1,
            content: /* @__PURE__ */ y(Gt, { yAxisFormatter: i })
          }
        ),
        /* @__PURE__ */ C(
          It,
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
                return /* @__PURE__ */ y(
                  js,
                  {
                    fill: l.fill,
                    "aria-label": `${l.label}: ${d} (${(l.value / c * 100).toFixed(0)}%)`
                  },
                  `cell-${u}`
                );
              }),
              /* @__PURE__ */ y(
                Ms,
                {
                  content: ({ viewBox: l }) => {
                    if (l && "cx" in l && "cy" in l)
                      return /* @__PURE__ */ C(
                        "text",
                        {
                          x: l.cx,
                          y: l.cy,
                          textAnchor: "middle",
                          dominantBaseline: "middle",
                          children: [
                            /* @__PURE__ */ y(
                              "tspan",
                              {
                                x: l.cx,
                                y: (l.cy || 0) + 8,
                                className: "fill-f1-foreground text-4xl font-semibold",
                                children: n?.number ? i ? i(String(n.number)) : n.number : null
                              }
                            ),
                            /* @__PURE__ */ y(
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
        /* @__PURE__ */ y(
          Ur,
          {
            content: /* @__PURE__ */ y(Zn, { nameKey: "label", hiddenKey: "-" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, Ry = Mt(Ly), $y = ({ value: t, max: e = 100, label: n, color: r }, i) => {
  const o = r ? Ae(r) : Ae("categorical-1"), s = t / e * 100;
  return /* @__PURE__ */ C("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ y("div", { className: "flex-grow", children: /* @__PURE__ */ y(
      Bf,
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
    n && /* @__PURE__ */ y("div", { className: "flex-shrink-0 text-sm font-medium", children: n })
  ] });
}, jy = Mt($y);
function Fy(t) {
  return t.map((e) => ({ x: e.label, ...e.values }));
}
const zy = (t) => {
  const e = Vf.cloneDeep(t);
  let n = "", r = 0;
  return e.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([o, s]) => {
        r < s && (r = s, n = o);
      }
    );
  }), n;
}, By = ({
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
  const d = Object.keys(t), f = Fy(e), h = Math.max(
    ...f.map((b) => Qn(`${b.x}`))
  ), p = d.reduce(
    (b, v) => (b[v] = e.reduce(
      (w, k) => w + k.values[v],
      0
    ), b),
    {}
  ), m = {
    ...io(n),
    type: "number",
    dataKey: zy(f)
  }, g = {
    ...Cr(r),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ y(Kt, { config: t, ref: u, aspect: o, children: /* @__PURE__ */ C(
    Su,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: f,
      margin: {
        left: r && !r.hide ? 8 : 12,
        right: i || c ? 100 : 0
      },
      children: [
        !s && /* @__PURE__ */ y(
          vn,
          {
            ...Gr(!0),
            content: /* @__PURE__ */ y(Gt, { yAxisFormatter: r?.tickFormatter })
          }
        ),
        !a && /* @__PURE__ */ y(
          Jn,
          {
            ...Kr(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ y(Ut, { ...m, hide: n?.hide }),
        /* @__PURE__ */ y(
          _t,
          {
            ...g,
            hide: r?.hide,
            width: r?.width ?? h + 20
          }
        ),
        d.map((b, v) => /* @__PURE__ */ y(on, { children: /* @__PURE__ */ y(
          jr,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: b,
            fill: t[b].color ? Ae(t[b].color) : Ce(v),
            radius: 4,
            maxBarSize: 24,
            children: (i || c) && /* @__PURE__ */ y(
              gn,
              {
                position: "right",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12,
                formatter: l,
                content: c ? /* @__PURE__ */ y(
                  Hy,
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
}, Vy = Mt(By), Hy = ({
  viewBox: t,
  offset: e = 0,
  value: n,
  valueFormatter: r,
  total: i,
  showLabel: o
}) => {
  const { x: s = 0, y: a = 0, width: c = 0, height: l = 0 } = t, u = s + c + e, d = a + l / 2, f = r ? r(n) : n, h = Qn(`${f}`), p = i > 0 ? Math.round(Number(n) / i * 100) : 0;
  return /* @__PURE__ */ C("g", { transform: `translate(${u},${d + 4})`, children: [
    o && /* @__PURE__ */ y(
      "text",
      {
        x: 0,
        textAnchor: "start",
        className: "fill-f1-foreground-secondary text-sm font-medium",
        children: f
      }
    ),
    /* @__PURE__ */ C(
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
}, Wy = ({
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
  return /* @__PURE__ */ y(Nc, { dataTestId: o, children: /* @__PURE__ */ y(
    Kt,
    {
      config: e,
      ref: s,
      aspect: i,
      "data-chromatic": "ignore",
      children: /* @__PURE__ */ C(yy, { accessibilityLayer: !0, data: c, children: [
        /* @__PURE__ */ y(
          vn,
          {
            cursor: !0,
            content: /* @__PURE__ */ y(Gt, { indicator: "dot" })
          }
        ),
        /* @__PURE__ */ y(ou, { gridType: "circle" }),
        /* @__PURE__ */ y(Xn, { dataKey: "subject" }),
        /* @__PURE__ */ y(
          qn,
          {
            angle: 90,
            type: "number",
            domain: [n ?? "dataMin", r ?? "dataMax"]
          }
        ),
        a.map((l, u) => /* @__PURE__ */ y(
          Hr,
          {
            dataKey: l,
            fill: e[l].color ? Ae(e[l].color) : Ce(u),
            stroke: e[l].color ? Ae(e[l].color) : Ce(u),
            strokeWidth: 1.5,
            fillOpacity: 0.3,
            label: e[l].label,
            isAnimationActive: !1
          },
          l
        )),
        Object.keys(e).length > 1 && /* @__PURE__ */ y(Ur, { iconType: "star", content: /* @__PURE__ */ y(Zn, {}) })
      ] })
    }
  ) });
}, Y1 = Mt(Wy), q1 = He(
  Dt({ name: "AreaChart", type: "info" }, Cy)
), X1 = He(
  Dt({ name: "BarChart", type: "info" }, Oy)
), J1 = He(
  Dt(
    { name: "CategoryBarChart", type: "info" },
    Ty
  )
), Z1 = He(
  Dt({ name: "LineChart", type: "info" }, My)
), Q1 = He(
  Dt({ name: "PieChart", type: "info" }, Ry)
), eS = He(
  Dt(
    { name: "VerticalBarChart", type: "info" },
    Vy
  )
), tS = He(
  Dt({ name: "ProgressBarChart", type: "info" }, jy)
), nS = He(
  Dt({ name: "ComboChart", type: "info" }, Dy)
), Po = [
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
], Uy = (t, e) => {
  const n = t.className?.includes("text-") && !t.className?.includes("text-current") || t.style?.color !== void 0, r = mc();
  return /* @__PURE__ */ C(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: e,
      ...t,
      children: [
        /* @__PURE__ */ y("defs", { children: Po.map((i) => /* @__PURE__ */ y("clipPath", { id: `${r}-${i.id}`, children: /* @__PURE__ */ y("path", { d: i.path }) }, i.id)) }),
        n ? Po.map((i) => /* @__PURE__ */ y(
          "path",
          {
            d: i.path,
            fill: "currentColor",
            vectorEffect: "non-scaling-stroke"
          },
          i.id
        )) : Po.map((i) => /* @__PURE__ */ y(
          "foreignObject",
          {
            x: "0",
            y: "0",
            width: "24",
            height: "24",
            clipPath: `url(#${r}-${i.id})`,
            children: /* @__PURE__ */ y(
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
}, Ky = Pt(Uy);
function Gy({
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
  const [l, u] = de(i);
  Fe(() => {
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
  return l && /* @__PURE__ */ y("div", { children: /* @__PURE__ */ y("div", { className: "p-2", children: /* @__PURE__ */ y("div", { style: f(), children: /* @__PURE__ */ C(
    "div",
    {
      className: p(),
      style: h(),
      onClick: n,
      children: [
        /* @__PURE__ */ C(on, { children: [
          a === "one-campaign" ? /* @__PURE__ */ y("div", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center", children: /* @__PURE__ */ y(ln, { icon: Ky, size: "lg", className: "!h-8 !w-8" }) }) : /* @__PURE__ */ y("div", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center", children: /* @__PURE__ */ y(
            Hf,
            {
              module: c.module,
              size: "lg"
            }
          ) }),
          /* @__PURE__ */ y("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ C("div", { children: [
            /* @__PURE__ */ y("h3", { className: "text-lg font-medium", children: t }),
            /* @__PURE__ */ y("p", { className: "text-f1-foreground-secondary", children: e })
          ] }) })
        ] }),
        o && /* @__PURE__ */ y("div", { className: "h-6 w-6", children: /* @__PURE__ */ y(
          ue,
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
const rS = He(Gy), Yy = (t, e) => "id" in t && (typeof t.id == "string" || typeof t.id == "number" || typeof t.id == "symbol") ? t.id : e ?? JSON.stringify(t);
function iS(t) {
  const {
    dataSource: e,
    data: n,
    paginationInfo: r,
    setPage: i,
    loadMore: o,
    isLoading: s,
    idProvider: a,
    itemUrl: c,
    activeItemId: l,
    defaultActiveItemId: u,
    onActiveItemChange: d
  } = t, f = Ke(() => a || (e.idProvider ? (j, F) => e.idProvider(j, F) : Yy), [a, e.idProvider]), [h, p] = Wf({
    prop: l,
    defaultProp: u ?? null,
    onChange: (j) => d?.(j ?? null)
  }), m = h ?? null, g = ye(null), b = ye(!1), v = ye(null), [w, k] = de(!1), A = he(() => {
    v.current !== null && (clearTimeout(v.current), v.current = null);
  }, []), E = he(() => {
    A(), g.current = null, b.current = !1, k(!1);
  }, [A]), x = he(
    (j) => {
      E(), p(j);
    },
    [E, p]
  ), S = n.records, P = ye(S), L = ye(s), I = ye(r), N = ye(f), D = ye(x);
  P.current = S, L.current = s, I.current = r, N.current = f, D.current = x;
  const _ = he(() => {
    A(), v.current = setTimeout(() => {
      if (v.current = null, g.current === null || b.current || L.current)
        return;
      const j = g.current;
      if (j.type === "first" || j.type === "last") {
        const F = I.current;
        if (F?.type === "pages") {
          if (F.currentPage === j.targetPage) return;
          E();
        }
      } else if (j.type === "next-after-current") {
        const F = P.current;
        if (F.length > j.loadedItemsCount) {
          const M = j.previousId == null ? -1 : F.findIndex(
            (re, ge) => N.current(re, ge) === j.previousId
          ), K = F[M + 1];
          K && D.current(
            N.current(K, M + 1)
          );
        }
      }
      E();
    }, 0);
  }, [E, A]);
  Fe(() => A, [A]), Fe(() => {
    !w || g.current === null || _();
  }, [w, _]);
  const { activeIndex: T, activeItem: R, previousItem: z, nextItem: V } = Ke(() => {
    if (m == null)
      return {
        activeIndex: -1,
        activeItem: null,
        previousItem: null,
        nextItem: null
      };
    const j = S.findIndex(
      (F, M) => f(F, M) === m
    );
    return {
      activeIndex: j,
      activeItem: j >= 0 ? S[j] : null,
      previousItem: j > 0 ? S[j - 1] : null,
      nextItem: j >= 0 && j < S.length - 1 ? S[j + 1] : null
    };
  }, [S, m, f]), $ = Ke(() => T === -1 || !r ? null : r.type === "pages" ? (r.currentPage - 1) * r.perPage + T : T, [T, r]), W = Ke(() => r ? r.type === "pages" ? r.currentPage < r.pagesCount : r.type === "infinite-scroll" ? r.hasMore : !1 : !1, [r]), ee = Ke(() => r && r.type === "pages" ? r.currentPage > 1 : !1, [r]), Me = Ke(() => T === -1 ? !1 : T < S.length - 1 ? !0 : W, [T, S.length, W]), Le = Ke(() => T === -1 ? !1 : T > 0 ? !0 : ee, [T, ee]), rt = he(() => {
    if (!(g.current !== null || s) && T !== -1) {
      if (T < S.length - 1) {
        const j = S[T + 1];
        x(f(j, T + 1));
        return;
      }
      if (!(!W || !r))
        if (r.type === "pages") {
          g.current = {
            type: "first",
            targetPage: r.currentPage + 1
          }, k(!0);
          try {
            i(r.currentPage + 1);
          } catch (j) {
            throw E(), j;
          }
        } else r.type === "infinite-scroll" && (g.current = {
          type: "next-after-current",
          previousId: m,
          loadedItemsCount: S.length
        }, k(!0), o());
    }
  }, [
    T,
    m,
    s,
    S,
    W,
    r,
    i,
    o,
    f,
    x,
    E
  ]), Yt = he(() => {
    if (!(g.current !== null || s) && T !== -1) {
      if (T > 0) {
        const j = S[T - 1];
        x(f(j, T - 1));
        return;
      }
      if (!(!ee || !r) && r.type === "pages") {
        g.current = {
          type: "last",
          targetPage: r.currentPage - 1
        }, k(!0);
        try {
          i(r.currentPage - 1);
        } catch (j) {
          throw E(), j;
        }
      }
    }
  }, [
    T,
    s,
    S,
    ee,
    r,
    i,
    f,
    x,
    E
  ]);
  Fe(() => {
    if (g.current === null) return;
    if (s) {
      b.current = !0;
      return;
    }
    if (S.length === 0) {
      E();
      return;
    }
    const j = g.current;
    if (j.type === "first") {
      if (r?.type === "pages" && r.currentPage !== j.targetPage) {
        b.current && E();
        return;
      }
      const F = S[0];
      x(f(F, 0));
    } else if (j.type === "last") {
      if (r?.type === "pages" && r.currentPage !== j.targetPage) {
        b.current && E();
        return;
      }
      const F = S[S.length - 1];
      x(f(F, S.length - 1));
    } else if (j.type === "next-after-current") {
      if (S.length <= j.loadedItemsCount) {
        b.current && E();
        return;
      }
      if (j.previousId != null) {
        const F = S.findIndex(
          (M, K) => f(M, K) === j.previousId
        );
        if (F >= 0 && F < S.length - 1) {
          const M = S[F + 1];
          x(f(M, F + 1));
        } else {
          E();
          return;
        }
      }
    }
    E();
  }, [
    S,
    s,
    r,
    f,
    x,
    E
  ]);
  const qt = w || g.current !== null && s, _e = Ke(() => !c || !V ? null : c(V) ?? null, [c, V]), me = Ke(() => !c || !R ? null : c(R) ?? null, [c, R]), it = Ke(() => !c || !z ? null : c(z) ?? null, [c, z]);
  return {
    activeItemId: m,
    activeItem: R,
    activeIndex: T,
    absoluteIndex: $,
    loadedItemsCount: S.length,
    totalItems: r?.total,
    previousItem: z,
    nextItem: V,
    activeItemUrl: me,
    goToNext: rt,
    goToPrevious: Yt,
    hasNext: Me,
    hasPrevious: Le,
    setActiveItemId: x,
    isNavigating: qt,
    nextItemUrl: _e,
    previousItemUrl: it
  };
}
const oS = Uf, sS = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => Te.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => Te.day.toRange(ko(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => Te.day.toRange({
      from: ko(/* @__PURE__ */ new Date(), 7),
      to: /* @__PURE__ */ new Date()
    })
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => Te.week.toRange(/* @__PURE__ */ new Date())
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => Te.week.toRange(ko(/* @__PURE__ */ new Date(), 7))
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => Te.month.toRange(/* @__PURE__ */ new Date())
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => Te.month.toRange(sr(/* @__PURE__ */ new Date(), 1))
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => Te.month.toRange(sr(/* @__PURE__ */ new Date(), 3))
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => Te.month.toRange(sr(/* @__PURE__ */ new Date(), 6))
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => Te.quarter.toRange(/* @__PURE__ */ new Date())
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () => Te.quarter.toRange(sr(/* @__PURE__ */ new Date(), 3))
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => Te.halfyear.toRange(/* @__PURE__ */ new Date())
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () => Te.halfyear.toRange(sr(/* @__PURE__ */ new Date(), 6))
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => Te.year.toRange(Ga(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => Te.year.toRange(Ga(/* @__PURE__ */ new Date(), 3))
  }
}, Li = (t, e) => e.view.domAtPos(t).node.offsetParent !== null, qy = (t, e, n) => {
  for (let r = t.depth; r > 0; r -= 1) {
    const i = t.node(r), o = e(i), s = Li(t.start(r), n);
    if (o && s)
      return {
        pos: r > 0 ? t.before(r) : 0,
        start: t.start(r),
        depth: r,
        node: i
      };
  }
}, vl = (t, e) => {
  const { state: n, view: r, extensionManager: i } = t, { schema: o, selection: s } = n, { empty: a, $anchor: c } = s, l = !!i.extensions.find((b) => b.name === "gapCursor");
  if (!a || c.parent.type !== o.nodes.detailsSummary || !l || e === "right" && c.parentOffset !== c.parent.nodeSize - 2)
    return !1;
  const u = Bs((b) => b.type === o.nodes.details)(s);
  if (!u)
    return !1;
  const d = fi(u.node, (b) => b.type === o.nodes.detailsContent);
  if (!d.length || Li(u.start + d[0].pos + 1, t))
    return !1;
  const h = n.doc.resolve(u.pos + u.node.nodeSize), p = La.findFrom(h, 1, !1);
  if (!p)
    return !1;
  const { tr: m } = n, g = new La(p);
  return m.setSelection(g), m.scrollIntoView(), r.dispatch(m), !0;
}, Xy = nt.create({
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
      tt(this.options.HTMLAttributes, t),
      0
    ];
  },
  addNodeView() {
    return ({ editor: t, getPos: e, node: n, HTMLAttributes: r }) => {
      const i = document.createElement("div"), o = tt(this.options.HTMLAttributes, r, {
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
        const o = fi(i.node, (b) => b.type === r.nodes.detailsSummary), s = fi(i.node, (b) => b.type === r.nodes.detailsContent);
        if (!o.length || !s.length)
          return !1;
        const a = o[0], c = s[0], l = i.pos, u = t.doc.resolve(l), d = l + i.node.nodeSize, f = { from: l, to: d }, h = c.node.content.toJSON() || [], p = u.parent.type.contentMatch.defaultType, g = [
          p?.create(null, a.node.content).toJSON(),
          ...h
        ];
        return e().insertContentAt(f, g).setTextSelection(l + 1).run();
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
        const s = Li(o.after() + 1, t), a = s ? e.doc.nodeAt(o.after()) : o.node(-2);
        if (!a)
          return !1;
        const c = s ? 0 : o.indexAfter(-1), l = Pc(a.contentMatchAt(c));
        if (!l || !a.canReplaceWith(c, c, l))
          return !1;
        const u = l.createAndFill();
        if (!u)
          return !1;
        const d = s ? o.after() + 1 : o.after(-1), f = e.tr.replaceWith(d, d, u), h = f.doc.resolve(d), p = Ze.near(h, 1);
        return f.setSelection(p), f.scrollIntoView(), n.dispatch(f), !0;
      },
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowRight: ({ editor: t }) => vl(t, "right"),
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowDown: ({ editor: t }) => vl(t, "down")
    };
  },
  addProseMirrorPlugins() {
    return [
      // This plugin prevents text selections within the hidden content in `DetailsContent`.
      // The cursor is moved to the next visible position.
      new vt({
        key: new We("detailsSelection"),
        appendTransaction: (t, e, n) => {
          const { editor: r, type: i } = this;
          if (!t.some((g) => g.selectionSet) || !e.selection.empty || !n.selection.empty || !Kf(n, i.name))
            return;
          const { $from: a } = n.selection;
          if (Li(a.pos, r))
            return;
          const l = qy(a, (g) => g.type === i, r);
          if (!l)
            return;
          const u = fi(l.node, (g) => g.type === n.schema.nodes.detailsSummary);
          if (!u.length)
            return;
          const d = u[0], h = (e.selection.from < n.selection.from ? "forward" : "backward") === "forward" ? l.start + d.pos : l.pos + d.pos + d.node.nodeSize, p = at.create(n.doc, h);
          return n.tr.setSelection(p);
        }
      })
    ];
  }
}), Cu = Xy.configure({
  persist: !0,
  HTMLAttributes: {
    class: "rich-text-details"
  }
}), Jy = nt.create({
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
      tt(this.options.HTMLAttributes, t, { "data-type": this.name }),
      0
    ];
  },
  addNodeView() {
    return ({ HTMLAttributes: t }) => {
      const e = document.createElement("div"), n = tt(this.options.HTMLAttributes, t, {
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
        const { state: e, view: n } = t, { selection: r } = e, { $from: i, empty: o } = r, s = Bs((I) => I.type === this.type)(r);
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
        const v = i.indexAfter(-3), w = Pc(b.contentMatchAt(v));
        if (!w || !b.canReplaceWith(v, v, w))
          return !1;
        const k = w.createAndFill();
        if (!k)
          return !1;
        const { tr: A } = e, E = i.after(-2);
        A.replaceWith(E, E, k);
        const x = A.doc.resolve(E), S = Ze.near(x, 1);
        A.setSelection(S);
        const P = m, L = m + p.nodeSize;
        return A.delete(P, L), A.scrollIntoView(), n.dispatch(A), !0;
      }
    };
  }
}), Eu = Jy, Zy = nt.create({
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
      tt(this.options.HTMLAttributes, t),
      0
    ];
  }
}), Ou = Zy;
var is, os;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  is = (e) => t.get(e), os = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  is = (r) => {
    for (let i = 0; i < t.length; i += 2)
      if (t[i] == r) return t[i + 1];
  }, os = (r, i) => (n == 10 && (n = 0), t[n++] = r, t[n++] = i);
}
var se = class {
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
    return is(t) || os(t, Qy(t));
  }
};
function Qy(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = eb(t), n = t.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let l = 0, u = e * n; l < u; l++) r[l] = 0;
  for (let l = 0, u = 0; l < n; l++) {
    const d = t.child(l);
    u++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; ) i++;
      if (p == d.childCount) break;
      const m = d.child(p), { colspan: g, rowspan: b, colwidth: v } = m.attrs;
      for (let w = 0; w < b; w++) {
        if (w + l >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: b - w
          });
          break;
        }
        const k = i + w * e;
        for (let A = 0; A < g; A++) {
          r[k + A] == 0 ? r[k + A] = u : (o || (o = [])).push({
            type: "collision",
            row: l,
            pos: u,
            n: g - A
          });
          const E = v && v[A];
          if (E) {
            const x = (k + A) % e * 2, S = s[x];
            S == null || S != E && s[x + 1] == 1 ? (s[x] = E, s[x + 1] = 1) : S == E && s[x + 1]++;
          }
        }
      }
      i += g, u += m.nodeSize;
    }
    const f = (l + 1) * e;
    let h = 0;
    for (; i < f; ) r[i++] == 0 && h++;
    h && (o || (o = [])).push({ type: "missing", row: l, n: h }), u++;
  }
  (e === 0 || n === 0) && (o || (o = [])).push({ type: "zero_sized" });
  const a = new se(e, n, r, o);
  let c = !1;
  for (let l = 0; !c && l < s.length; l += 2)
    s[l] != null && s[l + 1] < n && (c = !0);
  return c && tb(a, s, t), a;
}
function eb(t) {
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
function tb(t, e, n) {
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
      d != null && (!c.colwidth || c.colwidth[l] != d) && ((a || (a = nb(c)))[l] = d);
    }
    a && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: a
    });
  }
}
function nb(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function Oe(t) {
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
var jt = new We("selectingCells");
function er(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function rb(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function pt(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--)
    if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function so(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const n = er(e.$head) || ib(e.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function ib(t) {
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
function ss(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function ob(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function Zs(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function _u(t, e, n) {
  const r = t.node(-1), i = se.get(r), o = t.start(-1), s = i.nextCell(t.pos - o, e, n);
  return s == null ? null : t.node(0).resolve(o + s);
}
function dn(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan - n };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function Tu(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan + n };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < n; i++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function sb(t, e, n) {
  const r = Oe(e.type.schema).header_cell;
  for (let i = 0; i < t.height; i++)
    if (e.nodeAt(t.map[n + i * t.width]).type != r)
      return !1;
  return !0;
}
var Q = class kt extends Ze {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, n = e) {
    const r = e.node(-1), i = se.get(r), o = e.start(-1), s = i.rectBetween(
      e.pos - o,
      n.pos - o
    ), a = e.node(0), c = i.cellsInRect(s).filter((u) => u != n.pos - o);
    c.unshift(n.pos - o);
    const l = c.map((u) => {
      const d = r.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new Dc(
        a.resolve(f),
        a.resolve(f + d.content.size)
      );
    });
    super(l[0].$from, l[0].$to, l), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), i = e.resolve(n.map(this.$headCell.pos));
    if (ss(r) && ss(i) && Zs(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? kt.rowSelection(r, i) : o && this.isColSelection() ? kt.colSelection(r, i) : new kt(r, i);
    }
    return at.between(r, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), n = se.get(e), r = this.$anchorCell.start(-1), i = n.rectBetween(
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
        const m = i.left - h.left, g = h.right - i.right;
        if (m > 0 || g > 0) {
          let b = p.attrs;
          if (m > 0 && (b = dn(b, 0, m)), g > 0 && (b = dn(
            b,
            b.colspan - g,
            g
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
      s.push(e.child(c).copy(Se.from(l)));
    }
    const a = this.isColSelection() && this.isRowSelection() ? e : s;
    return new qe(Se.from(a), 1, 1);
  }
  replace(e, n = qe.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      const { $from: a, $to: c } = i[s], l = e.mapping.slice(r);
      e.replace(
        l.map(a.pos),
        l.map(c.pos),
        s ? qe.empty : n
      );
    }
    const o = Ze.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new qe(Se.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = se.get(n), i = this.$anchorCell.start(-1), o = r.cellsInRect(
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
    const r = e.node(-1), i = se.get(r), o = e.start(-1), s = i.findCell(e.pos - o), a = i.findCell(n.pos - o), c = e.node(0);
    return s.top <= a.top ? (s.top > 0 && (e = c.resolve(o + i.map[s.left])), a.bottom < i.height && (n = c.resolve(
      o + i.map[i.width * (i.height - 1) + a.right - 1]
    ))) : (a.top > 0 && (n = c.resolve(o + i.map[a.left])), s.bottom < i.height && (e = c.resolve(
      o + i.map[i.width * (i.height - 1) + s.right - 1]
    ))), new kt(e, n);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = se.get(e), r = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(i, o) > 0) return !1;
    const s = i + this.$anchorCell.nodeAfter.attrs.colspan, a = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, a) == n.width;
  }
  eq(e) {
    return e instanceof kt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, n = e) {
    const r = e.node(-1), i = se.get(r), o = e.start(-1), s = i.findCell(e.pos - o), a = i.findCell(n.pos - o), c = e.node(0);
    return s.left <= a.left ? (s.left > 0 && (e = c.resolve(
      o + i.map[s.top * i.width]
    )), a.right < i.width && (n = c.resolve(
      o + i.map[i.width * (a.top + 1) - 1]
    ))) : (a.left > 0 && (n = c.resolve(o + i.map[a.top * i.width])), s.right < i.width && (e = c.resolve(
      o + i.map[i.width * (s.top + 1) - 1]
    ))), new kt(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new kt(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new kt(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new ab(this.$anchorCell.pos, this.$headCell.pos);
  }
};
Q.prototype.visible = !1;
Ze.jsonID("cell", Q);
var ab = class Nu {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Nu(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && Zs(n, r) ? new Q(n, r) : Ze.near(r, 1);
  }
};
function lb(t) {
  if (!(t.selection instanceof Q)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(
      Ci.node(r, r + n.nodeSize, { class: "selectedCell" })
    );
  }), vr.create(t.doc, e);
}
function cb({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, i = t.depth;
  for (; i >= 0 && !(t.after(i + 1) < t.end(i)); i--, n++)
    ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--)
    ;
  return n == r && /row|table/.test(t.node(i).type.spec.tableRole);
}
function ub({ $from: t, $to: e }) {
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
function db(t, e, n) {
  const r = (e || t).selection, i = (e || t).doc;
  let o, s;
  if (r instanceof Ic && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      o = Q.create(i, r.from);
    else if (s == "row") {
      const a = i.resolve(r.from + 1);
      o = Q.rowSelection(a, a);
    } else if (!n) {
      const a = se.get(r.node), c = r.from + 1, l = c + a.map[a.width * a.height - 1];
      o = Q.create(i, c + 1, l);
    }
  } else r instanceof at && cb(r) ? o = at.create(i, r.from) : r instanceof at && ub(r) && (o = at.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
var fb = new We("fix-tables");
function Pu(t, e, n, r) {
  const i = t.childCount, o = e.childCount;
  e: for (let s = 0, a = 0; s < o; s++) {
    const c = e.child(s);
    for (let l = a, u = Math.min(i, s + 3); l < u; l++)
      if (t.child(l) == c) {
        a = l + 1, n += c.nodeSize;
        continue e;
      }
    r(c, n), a < i && t.child(a).sameMarkup(c) ? Pu(t.child(a), c, n + 1, r) : c.nodesBetween(0, c.content.size, r, n + 1), n += c.nodeSize;
  }
}
function Du(t, e) {
  let n;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (n = hb(t, i, o, n));
  };
  return e ? e.doc != t.doc && Pu(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function hb(t, e, n, r) {
  const i = se.get(e);
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
        dn(d, d.colspan - l.n, l.n)
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
      for (let g = 0; g < f; g++) {
        const b = Oe(t.schema)[h].createAndFill();
        b && p.push(b);
      }
      const m = (c == 0 || s == c - 1) && a == c ? l + 1 : d - 1;
      r.insert(r.mapping.map(m), p);
    }
    l = d;
  }
  return r.setMeta(fb, { fixTables: !0 });
}
function wt(t) {
  const e = t.selection, n = so(t), r = n.node(-1), i = n.start(-1), o = se.get(r);
  return { ...e instanceof Q ? o.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : o.findCell(n.pos - i), tableStart: i, map: o, table: r };
}
function Iu(t, { map: e, tableStart: n, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  sb(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const a = s * e.width + i;
    if (i > 0 && i < e.width && e.map[a - 1] == e.map[a]) {
      const c = e.map[a], l = r.nodeAt(c);
      t.setNodeMarkup(
        t.mapping.map(n + c),
        null,
        Tu(l.attrs, i - e.colCount(c))
      ), s += l.attrs.rowspan - 1;
    } else {
      const c = o == null ? Oe(r.type.schema).cell : r.nodeAt(e.map[a + o]).type, l = e.positionAt(s, i, r);
      t.insert(t.mapping.map(n + l), c.createAndFill());
    }
  }
  return t;
}
function pb(t, e) {
  if (!pt(t)) return !1;
  if (e) {
    const n = wt(t);
    e(Iu(t.tr, n, n.left));
  }
  return !0;
}
function mb(t, e) {
  if (!pt(t)) return !1;
  if (e) {
    const n = wt(t);
    e(Iu(t.tr, n, n.right));
  }
  return !0;
}
function gb(t, { map: e, table: n, tableStart: r }, i) {
  const o = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const a = s * e.width + i, c = e.map[a], l = n.nodeAt(c), u = l.attrs;
    if (i > 0 && e.map[a - 1] == c || i < e.width - 1 && e.map[a + 1] == c)
      t.setNodeMarkup(
        t.mapping.slice(o).map(r + c),
        null,
        dn(u, i - e.colCount(c))
      );
    else {
      const d = t.mapping.slice(o).map(r + c);
      t.delete(d, d + l.nodeSize);
    }
    s += u.rowspan;
  }
}
function yb(t, e) {
  if (!pt(t)) return !1;
  if (e) {
    const n = wt(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let i = n.right - 1; gb(r, n, i), i != n.left; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      n.table = o, n.map = se.get(o);
    }
    e(r);
  }
  return !0;
}
function bb(t, e, n) {
  var r;
  const i = Oe(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++)
    if (((r = e.nodeAt(t.map[o + n * t.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function Mu(t, { map: e, tableStart: n, table: r }, i) {
  var o;
  let s = n;
  for (let l = 0; l < i; l++) s += r.child(l).nodeSize;
  const a = [];
  let c = i > 0 ? -1 : 0;
  bb(e, r, i + c) && (c = i == 0 || i == e.height ? null : 0);
  for (let l = 0, u = e.width * i; l < e.width; l++, u++)
    if (i > 0 && i < e.height && e.map[u] == e.map[u - e.width]) {
      const d = e.map[u], f = r.nodeAt(d).attrs;
      t.setNodeMarkup(n + d, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), l += f.colspan - 1;
    } else {
      const d = c == null ? Oe(r.type.schema).cell : (o = r.nodeAt(e.map[u + c * e.width])) == null ? void 0 : o.type, f = d?.createAndFill();
      f && a.push(f);
    }
  return t.insert(s, Oe(r.type.schema).row.create(null, a)), t;
}
function vb(t, e) {
  if (!pt(t)) return !1;
  if (e) {
    const n = wt(t);
    e(Mu(t.tr, n, n.top));
  }
  return !0;
}
function wb(t, e) {
  if (!pt(t)) return !1;
  if (e) {
    const n = wt(t);
    e(Mu(t.tr, n, n.bottom));
  }
  return !0;
}
function xb(t, { map: e, table: n, tableStart: r }, i) {
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
function Sb(t, e) {
  if (!pt(t)) return !1;
  if (e) {
    const n = wt(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let i = n.bottom - 1; xb(r, n, i), i != n.top; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      n.table = o, n.map = se.get(n.table);
    }
    e(r);
  }
  return !0;
}
function wl(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function kb({ width: t, height: e, map: n }, r) {
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
function xl(t, e) {
  const n = t.selection;
  if (!(n instanceof Q) || n.$anchorCell.pos == n.$headCell.pos)
    return !1;
  const r = wt(t), { map: i } = r;
  if (kb(i, r)) return !1;
  if (e) {
    const o = t.tr, s = {};
    let a = Se.empty, c, l;
    for (let u = r.top; u < r.bottom; u++)
      for (let d = r.left; d < r.right; d++) {
        const f = i.map[u * i.width + d], h = r.table.nodeAt(f);
        if (!(s[f] || !h))
          if (s[f] = !0, c == null)
            c = f, l = h;
          else {
            wl(h) || (a = a.append(h.content));
            const p = o.mapping.map(f + r.tableStart);
            o.delete(p, p + h.nodeSize);
          }
      }
    if (c == null || l == null)
      return !0;
    if (o.setNodeMarkup(c + r.tableStart, null, {
      ...Tu(
        l.attrs,
        l.attrs.colspan,
        r.right - r.left - l.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), a.size) {
      const u = c + 1 + l.content.size, d = wl(l) ? c + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, a);
    }
    o.setSelection(
      new Q(o.doc.resolve(c + r.tableStart))
    ), e(o);
  }
  return !0;
}
function Sl(t, e) {
  const n = Oe(t.schema);
  return Ab(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function Ab(t) {
  return (e, n) => {
    var r;
    const i = e.selection;
    let o, s;
    if (i instanceof Q) {
      if (i.$anchorCell.pos != i.$headCell.pos) return !1;
      o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
    } else {
      if (o = rb(i.$from), !o) return !1;
      s = (r = er(i.$from)) == null ? void 0 : r.pos;
    }
    if (o == null || s == null || o.attrs.colspan == 1 && o.attrs.rowspan == 1)
      return !1;
    if (n) {
      let a = o.attrs;
      const c = [], l = a.colwidth;
      a.rowspan > 1 && (a = { ...a, rowspan: 1 }), a.colspan > 1 && (a = { ...a, colspan: 1 });
      const u = wt(e), d = e.tr;
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
        for (let m = u.left, g = 0; m < u.right; m++, g++)
          m == u.left && h == u.top || d.insert(
            f = d.mapping.map(p + u.tableStart, 1),
            t({ node: o, row: h, col: m }).createAndFill(c[g])
          );
      }
      d.setNodeMarkup(
        s,
        t({ node: o, row: u.top, col: u.left }),
        c[0]
      ), i instanceof Q && d.setSelection(
        new Q(
          d.doc.resolve(i.$anchorCell.pos),
          f ? d.doc.resolve(f) : void 0
        )
      ), n(d);
    }
    return !0;
  };
}
function Cb(t, e) {
  return function(n, r) {
    if (!pt(n)) return !1;
    const i = so(n);
    if (i.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof Q ? n.selection.forEachCell((s, a) => {
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
function Eb(t) {
  return function(e, n) {
    if (!pt(e)) return !1;
    if (n) {
      const r = Oe(e.schema), i = wt(e), o = e.tr, s = i.map.cellsInRect(
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
function kl(t, e, n) {
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
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Eb(t) : function(n, r) {
    if (!pt(n)) return !1;
    if (r) {
      const i = Oe(n.schema), o = wt(n), s = n.tr, a = kl("row", o, i), c = kl(
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
Er("row", {
  useDeprecatedLogic: !0
});
Er("column", {
  useDeprecatedLogic: !0
});
var Ob = Er("cell", {
  useDeprecatedLogic: !0
});
function _b(t, e) {
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
function Al(t) {
  return function(e, n) {
    if (!pt(e)) return !1;
    const r = _b(so(e), t);
    if (r == null) return !1;
    if (n) {
      const i = e.doc.resolve(r);
      n(
        e.tr.setSelection(at.between(i, ob(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function Tb(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--)
    if (n.node(r).type.spec.tableRole == "table")
      return e && e(
        t.tr.delete(n.before(r), n.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function ti(t, e) {
  const n = t.selection;
  if (!(n instanceof Q)) return !1;
  if (e) {
    const r = t.tr, i = Oe(t.schema).cell.createAndFill().content;
    n.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(
        r.mapping.map(s + 1),
        r.mapping.map(s + o.nodeSize - 1),
        new qe(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function Nb(t) {
  if (!t.size) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, a = [];
  if (o == "row")
    for (let c = 0; c < e.childCount; c++) {
      let l = e.child(c).content;
      const u = c ? 0 : Math.max(0, n - 1), d = c < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (u || d) && (l = as(
        Oe(s).row,
        new qe(l, u, d)
      ).content), a.push(l);
    }
  else if (o == "cell" || o == "header_cell")
    a.push(
      n || r ? as(
        Oe(s).row,
        new qe(e, n, r)
      ).content : e
    );
  else
    return null;
  return Pb(s, a);
}
function Pb(t, e) {
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
    if (i >= e.length && e.push(Se.empty), n[i] < r) {
      const o = Oe(t).cell.createAndFill(), s = [];
      for (let a = n[i]; a < r; a++)
        s.push(o);
      e[i] = e[i].append(Se.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function as(t, e) {
  const n = t.createAndFill();
  return new Yf(n).replace(0, n.content.size, e).doc;
}
function Db({ width: t, height: e, rows: n }, r, i) {
  if (t != r) {
    const o = [], s = [];
    for (let a = 0; a < n.length; a++) {
      const c = n[a], l = [];
      for (let u = o[a] || 0, d = 0; u < r; d++) {
        let f = c.child(d % c.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(
          dn(
            f.attrs,
            f.attrs.colspan,
            u + f.attrs.colspan - r
          ),
          f.content
        )), l.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          o[a + h] = (o[a + h] || 0) + f.attrs.colspan;
      }
      s.push(Se.from(l));
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
      o.push(Se.from(c));
    }
    n = o, e = i;
  }
  return { width: t, height: e, rows: n };
}
function Ib(t, e, n, r, i, o, s) {
  const a = t.doc.type.schema, c = Oe(a);
  let l, u;
  if (i > e.width)
    for (let d = 0, f = 0; d < e.height; d++) {
      const h = n.child(d);
      f += h.nodeSize;
      const p = [];
      let m;
      h.lastChild == null || h.lastChild.type == c.cell ? m = l || (l = c.cell.createAndFill()) : m = u || (u = c.header_cell.createAndFill());
      for (let g = e.width; g < i; g++) p.push(m);
      t.insert(t.mapping.slice(s).map(f - 1 + r), p);
    }
  if (o > e.height) {
    const d = [];
    for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const g = p >= e.width ? !1 : n.nodeAt(e.map[m + p]).type == c.header_cell;
      d.push(
        g ? u || (u = c.header_cell.createAndFill()) : l || (l = c.cell.createAndFill())
      );
    }
    const f = c.row.create(null, Se.from(d)), h = [];
    for (let p = e.height; p < o; p++) h.push(f);
    t.insert(t.mapping.slice(s).map(r + n.nodeSize - 2), h);
  }
  return !!(l || u);
}
function Cl(t, e, n, r, i, o, s, a) {
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
function El(t, e, n, r, i, o, s, a) {
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
        dn(
          f.attrs,
          s - h,
          f.attrs.colspan - (s - h)
        )
      ), t.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          dn(f.attrs, 0, s - h)
        )
      ), l += f.attrs.rowspan - 1;
    }
  }
  return c;
}
function Ol(t, e, n, r, i) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o)
    throw new Error("No table found");
  let s = se.get(o);
  const { top: a, left: c } = r, l = c + i.width, u = a + i.height, d = t.tr;
  let f = 0;
  function h() {
    if (o = n ? d.doc.nodeAt(n - 1) : d.doc, !o)
      throw new Error("No table found");
    s = se.get(o), f = d.mapping.maps.length;
  }
  Ib(d, s, o, n, l, u, f) && h(), Cl(d, s, o, n, c, l, a, f) && h(), Cl(d, s, o, n, c, l, u, f) && h(), El(d, s, o, n, a, u, c, f) && h(), El(d, s, o, n, a, u, l, f) && h();
  for (let p = a; p < u; p++) {
    const m = s.positionAt(p, c, o), g = s.positionAt(p, l, o);
    d.replace(
      d.mapping.slice(f).map(m + n),
      d.mapping.slice(f).map(g + n),
      new qe(i.rows[p - a], 0, 0)
    );
  }
  h(), d.setSelection(
    new Q(
      d.doc.resolve(n + s.positionAt(a, c, o)),
      d.doc.resolve(n + s.positionAt(u - 1, l - 1, o))
    )
  ), e(d);
}
var Mb = Gf({
  ArrowLeft: ni("horiz", -1),
  ArrowRight: ni("horiz", 1),
  ArrowUp: ni("vert", -1),
  ArrowDown: ni("vert", 1),
  "Shift-ArrowLeft": ri("horiz", -1),
  "Shift-ArrowRight": ri("horiz", 1),
  "Shift-ArrowUp": ri("vert", -1),
  "Shift-ArrowDown": ri("vert", 1),
  Backspace: ti,
  "Mod-Backspace": ti,
  Delete: ti,
  "Mod-Delete": ti
});
function pi(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function ni(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    if (o instanceof Q)
      return pi(
        n,
        r,
        Ze.near(o.$headCell, e)
      );
    if (t != "horiz" && !o.empty) return !1;
    const s = Lu(i, t, e);
    if (s == null) return !1;
    if (t == "horiz")
      return pi(
        n,
        r,
        Ze.near(n.doc.resolve(o.head + e), e)
      );
    {
      const a = n.doc.resolve(s), c = _u(a, t, e);
      let l;
      return c ? l = Ze.near(c, 1) : e < 0 ? l = Ze.near(n.doc.resolve(a.before(-1)), -1) : l = Ze.near(n.doc.resolve(a.after(-1)), 1), pi(n, r, l);
    }
  };
}
function ri(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    let s;
    if (o instanceof Q)
      s = o;
    else {
      const c = Lu(i, t, e);
      if (c == null) return !1;
      s = new Q(n.doc.resolve(c));
    }
    const a = _u(s.$headCell, t, e);
    return a ? pi(
      n,
      r,
      new Q(s.$anchorCell, a)
    ) : !1;
  };
}
function Lb(t, e) {
  const n = t.state.doc, r = er(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new Q(r))), !0) : !1;
}
function Rb(t, e, n) {
  if (!pt(t.state)) return !1;
  let r = Nb(n);
  const i = t.state.selection;
  if (i instanceof Q) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        Se.from(
          as(Oe(t.state.schema).cell, n)
        )
      ]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), a = se.get(o).rectBetween(
      i.$anchorCell.pos - s,
      i.$headCell.pos - s
    );
    return r = Db(r, a.right - a.left, a.bottom - a.top), Ol(t.state, t.dispatch, s, a, r), !0;
  } else if (r) {
    const o = so(t.state), s = o.start(-1);
    return Ol(
      t.state,
      t.dispatch,
      s,
      se.get(o.node(-1)).findCell(o.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function $b(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey) return;
  const r = _l(t, e.target);
  let i;
  if (e.shiftKey && t.state.selection instanceof Q)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = er(t.state.selection.$anchor)) != null && ((n = Do(t, e)) == null ? void 0 : n.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r)
    return;
  function o(c, l) {
    let u = Do(t, l);
    const d = jt.getState(t.state) == null;
    if (!u || !Zs(c, u))
      if (d) u = c;
      else return;
    const f = new Q(c, u);
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
    else if (_l(t, l.target) != r && (d = Do(t, e), !d))
      return s();
    d && o(d, l);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", a);
}
function Lu(t, e, n) {
  if (!(t.state.selection instanceof at)) return null;
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
function _l(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function Do(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return n && n ? er(t.state.doc.resolve(n.pos)) : null;
}
var jb = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${n}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), ls(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, ls(
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
function ls(t, e, n, r, i, o) {
  var s;
  let a = 0, c = !0, l = e.firstChild;
  const u = t.firstChild;
  if (u) {
    for (let d = 0, f = 0; d < u.childCount; d++) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let m = 0; m < h; m++, f++) {
        const g = i == f ? o : p && p[m], b = g ? g + "px" : "";
        if (a += g || r, g || (c = !1), l)
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
var Ye = new We(
  "tableColumnResizing"
);
function Fb({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: n = 100,
  View: r = jb,
  lastColumnResizable: i = !0
} = {}) {
  const o = new vt({
    key: Ye,
    state: {
      init(s, a) {
        var c, l;
        const u = (l = (c = o.spec) == null ? void 0 : c.props) == null ? void 0 : l.nodeViews, d = Oe(a.schema).table.name;
        return r && u && (u[d] = (f, h) => new r(f, n, h)), new zb(-1, !1);
      },
      apply(s, a) {
        return a.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const a = Ye.getState(s);
        return a && a.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, a) => {
          Bb(s, a, t, i);
        },
        mouseleave: (s) => {
          Vb(s);
        },
        mousedown: (s, a) => {
          Hb(s, a, e, n);
        }
      },
      decorations: (s) => {
        const a = Ye.getState(s);
        if (a && a.activeHandle > -1)
          return Yb(s, a.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var zb = class mi {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Ye);
    if (r && r.setHandle != null)
      return new mi(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new mi(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(n.activeHandle, -1);
      return ss(e.doc.resolve(i)) || (i = -1), new mi(i, n.dragging);
    }
    return n;
  }
};
function Bb(t, e, n, r) {
  if (!t.editable) return;
  const i = Ye.getState(t.state);
  if (i && !i.dragging) {
    const o = Ub(e.target);
    let s = -1;
    if (o) {
      const { left: a, right: c } = o.getBoundingClientRect();
      e.clientX - a <= n ? s = Tl(t, e, "left", n) : c - e.clientX <= n && (s = Tl(t, e, "right", n));
    }
    if (s != i.activeHandle) {
      if (!r && s !== -1) {
        const a = t.state.doc.resolve(s), c = a.node(-1), l = se.get(c), u = a.start(-1);
        if (l.colCount(a.pos - u) + a.nodeAfter.attrs.colspan - 1 == l.width - 1)
          return;
      }
      Ru(t, s);
    }
  }
}
function Vb(t) {
  if (!t.editable) return;
  const e = Ye.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && Ru(t, -1);
}
function Hb(t, e, n, r) {
  var i;
  if (!t.editable) return !1;
  const o = (i = t.dom.ownerDocument.defaultView) != null ? i : window, s = Ye.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const a = t.state.doc.nodeAt(s.activeHandle), c = Wb(t, s.activeHandle, a.attrs);
  t.dispatch(
    t.state.tr.setMeta(Ye, {
      setDragging: { startX: e.clientX, startWidth: c }
    })
  );
  function l(d) {
    o.removeEventListener("mouseup", l), o.removeEventListener("mousemove", u);
    const f = Ye.getState(t.state);
    f?.dragging && (Kb(
      t,
      f.activeHandle,
      Nl(f.dragging, d, n)
    ), t.dispatch(
      t.state.tr.setMeta(Ye, { setDragging: null })
    ));
  }
  function u(d) {
    if (!d.which) return l(d);
    const f = Ye.getState(t.state);
    if (f && f.dragging) {
      const h = Nl(f.dragging, d, n);
      Pl(
        t,
        f.activeHandle,
        h,
        r
      );
    }
  }
  return Pl(
    t,
    s.activeHandle,
    c,
    r
  ), o.addEventListener("mouseup", l), o.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function Wb(t, e, { colspan: n, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i) return i;
  const o = t.domAtPos(e);
  let a = o.node.childNodes[o.offset].offsetWidth, c = n;
  if (r)
    for (let l = 0; l < n; l++)
      r[l] && (a -= r[l], c--);
  return a / c;
}
function Ub(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function Tl(t, e, n, r) {
  const i = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: s } = o, a = er(t.state.doc.resolve(s));
  if (!a) return -1;
  if (n == "right") return a.pos;
  const c = se.get(a.node(-1)), l = a.start(-1), u = c.map.indexOf(a.pos - l);
  return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function Nl(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function Ru(t, e) {
  t.dispatch(
    t.state.tr.setMeta(Ye, { setHandle: e })
  );
}
function Kb(t, e, n) {
  const r = t.state.doc.resolve(e), i = r.node(-1), o = se.get(i), s = r.start(-1), a = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, c = t.state.tr;
  for (let l = 0; l < o.height; l++) {
    const u = l * o.width + a;
    if (l && o.map[u] == o.map[u - o.width]) continue;
    const d = o.map[u], f = i.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : a - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const p = f.colwidth ? f.colwidth.slice() : Gb(f.colspan);
    p[h] = n, c.setNodeMarkup(s + d, null, { ...f, colwidth: p });
  }
  c.docChanged && t.dispatch(c);
}
function Pl(t, e, n, r) {
  const i = t.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), a = se.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let c = t.domAtPos(i.start(-1)).node;
  for (; c && c.nodeName != "TABLE"; )
    c = c.parentNode;
  c && ls(
    o,
    c.firstChild,
    c,
    r,
    a,
    n
  );
}
function Gb(t) {
  return Array(t).fill(0);
}
function Yb(t, e) {
  var n;
  const r = [], i = t.doc.resolve(e), o = i.node(-1);
  if (!o)
    return vr.empty;
  const s = se.get(o), a = i.start(-1), c = s.colCount(i.pos - a) + i.nodeAfter.attrs.colspan - 1;
  for (let l = 0; l < s.height; l++) {
    const u = c + l * s.width;
    if ((c == s.width - 1 || s.map[u] != s.map[u + 1]) && (l == 0 || s.map[u] != s.map[u - s.width])) {
      const d = s.map[u], f = a + d + o.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", (n = Ye.getState(t)) != null && n.dragging && r.push(
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
function qb({
  allowTableNodeSelection: t = !1
} = {}) {
  return new vt({
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
      decorations: lb,
      handleDOMEvents: {
        mousedown: $b
      },
      createSelectionBetween(e) {
        return jt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Lb,
      handleKeyDown: Mb,
      handlePaste: Rb
    },
    appendTransaction(e, n, r) {
      return db(
        r,
        Du(r, n),
        t
      );
    }
  });
}
var Xb = nt.create({
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
    return ["td", tt(this.options.HTMLAttributes, t), 0];
  }
}), Jb = nt.create({
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
    return ["th", tt(this.options.HTMLAttributes, t), 0];
  }
}), Zb = nt.create({
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
    return ["tr", tt(this.options.HTMLAttributes, t), 0];
  }
});
function cs(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Dl(t, e, n, r, i, o) {
  var s;
  let a = 0, c = !0, l = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let f = 0, h = 0; f < u.childCount; f += 1) {
      const { colspan: p, colwidth: m } = u.child(f).attrs;
      for (let g = 0; g < p; g += 1, h += 1) {
        const b = i === h ? o : m && m[g], v = b ? `${b}px` : "";
        if (a += b || r, b || (c = !1), l) {
          if (l.style.width !== v) {
            const [w, k] = cs(r, b);
            l.style.setProperty(w, k);
          }
          l = l.nextSibling;
        } else {
          const w = document.createElement("col"), [k, A] = cs(r, b);
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
var Qb = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Dl(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, Dl(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function ev(t, e, n, r) {
  let i = 0, o = !0;
  const s = [], a = t.firstChild;
  if (!a)
    return {};
  for (let d = 0, f = 0; d < a.childCount; d += 1) {
    const { colspan: h, colwidth: p } = a.child(d).attrs;
    for (let m = 0; m < h; m += 1, f += 1) {
      const g = n === f ? r : p && p[m];
      i += g || e, g || (o = !1);
      const [b, v] = cs(e, g);
      s.push(["col", { style: `${b}: ${v}` }]);
    }
  }
  const c = o ? `${i}px` : "", l = o ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: c, tableMinWidth: l };
}
function Il(t, e) {
  return t.createAndFill();
}
function tv(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function nv(t, e, n, r, i) {
  const o = tv(t), s = [], a = [];
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
function rv(t) {
  return t instanceof Q;
}
var ii = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!rv(e))
    return !1;
  let n = 0;
  const r = Jf(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, iv = "";
function ov(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function sv(t, e, n = {}) {
  var r;
  const i = (r = n.cellLineSeparator) != null ? r : iv;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((p) => {
    const m = [];
    p.content && p.content.forEach((g) => {
      let b = "";
      g.content && Array.isArray(g.content) && g.content.length > 1 ? b = g.content.map((A) => e.renderChildren(A)).join(i) : b = g.content ? e.renderChildren(g.content) : "";
      const v = ov(b), w = g.type === "tableHeader";
      m.push({ text: v, isHeader: w });
    }), o.push(m);
  });
  const s = o.reduce((p, m) => Math.max(p, m.length), 0);
  if (s === 0)
    return "";
  const a = new Array(s).fill(0);
  o.forEach((p) => {
    var m;
    for (let g = 0; g < s; g += 1) {
      const v = (((m = p[g]) == null ? void 0 : m.text) || "").length;
      v > a[g] && (a[g] = v), a[g] < 3 && (a[g] = 3);
    }
  });
  const c = (p, m) => p + " ".repeat(Math.max(0, m - p.length)), l = o[0], u = l.some((p) => p.isHeader);
  let d = `
`;
  const f = new Array(s).fill(0).map((p, m) => u && l[m] && l[m].text || "");
  return d += `| ${f.map((p, m) => c(p, a[m])).join(" | ")} |
`, d += `| ${a.map((p) => "-".repeat(Math.max(3, p))).join(" | ")} |
`, (u ? o.slice(1) : o).forEach((p) => {
    d += `| ${new Array(s).fill(0).map((m, g) => c(p[g] && p[g].text || "", a[g])).join(" | ")} |
`;
  }), d;
}
var av = sv, lv = nt.create({
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
      View: Qb,
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
    const { colgroup: n, tableWidth: r, tableMinWidth: i } = ev(t, this.options.cellMinWidth), o = e.style;
    function s() {
      return o || (r ? `width: ${r}` : `min-width: ${i}`);
    }
    const a = [
      "table",
      tt(this.options.HTMLAttributes, e, {
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
  renderMarkdown: (t, e) => av(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = nv(o.schema, t, e, n);
        if (i) {
          const a = r.selection.from + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(at.near(r.doc.resolve(a)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => pb(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => mb(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => yb(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => vb(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => wb(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => Sb(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => Tb(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => xl(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Sl(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Er("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Er("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Ob(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => xl(t, e) ? !0 : Sl(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => Cb(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => Al(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => Al(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Du(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = Q.create(e.doc, t.anchorCell, t.headCell);
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
      Backspace: ii,
      "Mod-Backspace": ii,
      Delete: ii,
      "Mod-Delete": ii
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Fb({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      qb({
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
      tableRole: qf(Xf(t, "tableRole", e))
    };
  }
}), cv = yn.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(lv.configure(this.options.table)), this.options.tableCell !== !1 && t.push(Xb.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Jb.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(Zb.configure(this.options.tableRow)), t;
  }
});
const uv = cv.configure({
  table: { resizable: !0 }
}), dv = Pt(function({ title: e, onClose: n, content: r, primaryAction: i, secondaryAction: o }, s) {
  return /* @__PURE__ */ C(
    "div",
    {
      ref: s,
      className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
      "data-testid": "ai-banner",
      children: [
        /* @__PURE__ */ C("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
          /* @__PURE__ */ y(Mc, { className: "font-medium", children: e }),
          n && /* @__PURE__ */ y(
            ue,
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
        /* @__PURE__ */ C("div", { className: "flex flex-col gap-[1px]", children: [
          /* @__PURE__ */ y(
            "div",
            {
              className: J(
                "bg-f1-background px-4 py-3",
                o || i ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
              ),
              children: /* @__PURE__ */ y(Zf, { content: r })
            }
          ),
          (o || i) && /* @__PURE__ */ C("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
            /* @__PURE__ */ y("div", { children: o && /* @__PURE__ */ y(
              ue,
              {
                label: o.label,
                onClick: o.onClick,
                variant: "outline",
                icon: o.icon
              }
            ) }),
            /* @__PURE__ */ y("div", { children: i && /* @__PURE__ */ y(
              ue,
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
}), fv = ({ compact: t }) => /* @__PURE__ */ C(
  "div",
  {
    className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ y("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ y(B, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ C("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ y(
          "div",
          {
            className: J(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              t && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ C("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ y(B, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ y(B, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ y(B, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !t && /* @__PURE__ */ C("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ y(B, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), $u = Pt(
  (t, e) => /* @__PURE__ */ y(dv, { ref: e, ...t })
), hv = ({ compact: t }) => /* @__PURE__ */ y(fv, { compact: t });
$u.displayName = "F0AiBanner";
const ju = Lc(
  He($u),
  hv
), pv = (t) => {
  if (!t?.content) return "";
  try {
    return Qf(t.content, [
      Rc,
      $c,
      jc,
      eh,
      Fc,
      zc,
      Bc,
      Vc,
      Hc,
      Wc,
      Cu,
      Ou,
      Eu
    ]);
  } catch {
    return "";
  }
}, mv = (t, e) => Ke(() => {
  if (e?.selectedTitle || e?.selectedEmoji)
    return {
      title: e.selectedTitle || t.title,
      emoji: e.selectedEmoji
    };
  const n = t.buttons?.find(
    (r) => r.type === e?.selectedAction
  );
  return n ? { title: n.label, emoji: n.emoji } : { title: t.title };
}, [e, t]), gv = (t, e) => {
  const [n, r] = de(!1), i = he(
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
}, yv = (t, e, n) => {
  Fe(() => {
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
}, bv = (t, e, n) => {
  Fe(() => {
    t?.shouldExecute && t?.selectedAction && e && n && (n({ data: { ...t, shouldExecute: !1 } }), e(t.selectedAction));
  }, [e, n, t]);
}, vv = (t, e, n, r) => {
  Fe(() => {
    if (!r?.content || !r?.isEditable || !t || !n) return;
    const i = n();
    i !== void 0 && (e(), r.content && t.chain().focus().setTextSelection(i).insertContent(r.content).run());
  }, [r, t, n, e]);
}, wv = ({
  config: t,
  isLoading: e,
  onButtonClick: n
}) => /* @__PURE__ */ C("div", { className: "flex flex-col gap-2", children: [
  t.title && /* @__PURE__ */ y("div", { className: "text-f1-foreground-secondary", children: t.title }),
  /* @__PURE__ */ y("div", { className: "relative flex flex-row flex-wrap items-center gap-2", children: t.buttons?.map((r, i) => /* @__PURE__ */ y(
    ue,
    {
      onClick: () => n(r.type),
      variant: "outline",
      icon: r.icon,
      label: r.label,
      disabled: e
    },
    i
  )) })
] }), xv = ({ isEditable: t }) => t ? /* @__PURE__ */ C("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ y(B, { className: "h-4 w-1/2 rounded-md" }),
  /* @__PURE__ */ y(B, { className: "h-4 w-full rounded-md" }),
  /* @__PURE__ */ y(B, { className: "h-4 w-3/4 rounded-md" }),
  /* @__PURE__ */ y(B, { className: "h-4 w-1/3 rounded-md" })
] }) : /* @__PURE__ */ y(ju.Skeleton, { compact: !0 }), Sv = ({
  node: t,
  updateAttributes: e,
  deleteNode: n,
  extension: r,
  editor: i,
  getPos: o
}) => {
  const s = t.attrs.data, a = r.options.currentConfig || t.attrs.config, { title: c } = mv(a, s), { isLoading: l, handleClick: u } = gv(
    a,
    e
  ), d = !!(s?.selectedAction && !s?.content), f = l || d, h = pv(s);
  if (vv(i, n, o, s), yv(a, e, s), bv(s, u, e), !s || !a || !a.buttons?.length) return null;
  const p = !!s?.content, g = !!(s?.selectedTitle || s?.selectedAction) && p && !s?.isEditable;
  return /* @__PURE__ */ y(zr, { contentEditable: !1, children: /* @__PURE__ */ C("div", { className: "mb-3", children: [
    f ? /* @__PURE__ */ y(xv, { isEditable: s?.isEditable }) : g ? /* @__PURE__ */ y(
      ju,
      {
        title: c,
        content: h,
        onClose: () => n()
      }
    ) : /* @__PURE__ */ y(
      "div",
      {
        className: "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg",
        onClick: (v) => v.stopPropagation(),
        children: /* @__PURE__ */ y(
          wv,
          {
            config: a,
            isLoading: f,
            onButtonClick: u
          }
        )
      }
    ),
    /* @__PURE__ */ y(Vs, { style: { display: "none" } })
  ] }) });
}, kv = nt.create({
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
    return Fr(Sv);
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
}), Av = kv, Fu = [
  "paragraph",
  "heading",
  "blockquote",
  "codeBlock",
  "bulletList",
  "orderedList",
  "listItem",
  "table",
  "details"
], Cv = new Set(Fu), Vn = (t) => t ? Cv.has(t) : !1, zu = (t) => t ? Vn(t.type) && !t.attrs?.id ? !0 : t.content?.some(zu) ?? !1 : !1, Bu = (t) => {
  if (!t)
    return !1;
  if (Vn(t.type.name) && !t.attrs.id)
    return !0;
  for (let e = 0; e < t.childCount; e += 1)
    if (Bu(t.child(e)))
      return !0;
  return !1;
}, Ml = (t) => t ? t instanceof th ? Bu(t) : zu(t) : !1, Ev = yn.create({
  name: "blockId",
  addGlobalAttributes() {
    return [
      {
        // Apply to all block-level node types
        types: Fu,
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
      new vt({
        key: new We("blockIdPlugin"),
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
              if (Vn(l.type.name) && !l.attrs.id) {
                const d = Go(5);
                i.setNodeMarkup(u, void 0, {
                  ...l.attrs,
                  id: d
                }), o = !0;
              }
            });
          }) : n.doc.descendants((a, c) => {
            if (Vn(a.type.name) && !a.attrs.id) {
              const l = Go(5);
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
}), Ov = (t, e) => {
  let n = null;
  return t.state.doc.descendants((r, i) => r.attrs.id === e ? (n = { node: r, pos: i }, !1) : !0), n;
};
var _v = ({ key: t, editor: e, onPaste: n, onDrop: r, allowedMimeTypes: i }) => new vt({
  key: t || new We("fileHandler"),
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
}), Tv = yn.create({
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
      _v({
        key: new We(this.name),
        editor: this.editor,
        allowedMimeTypes: this.options.allowedMimeTypes,
        onDrop: this.options.onDrop,
        onPaste: this.options.onPaste
      })
    ];
  }
});
const Nv = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Pv = nt.create({
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
    return ["img", tt(this.options.HTMLAttributes, t)];
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
      nh({
        find: Nv,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), Dv = 50 * 1024 * 1024, Qs = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp"
], Iv = 10, rn = 100, Mv = ({
  node: t,
  deleteNode: e,
  selected: n,
  editor: r,
  updateAttributes: i
}) => {
  const { src: o, alt: s, title: a, uploading: c, width: l } = t.attrs, u = r.isEditable, d = Yn(), [f, h] = de(!1), p = he(
    (m) => {
      m.preventDefault(), m.stopPropagation();
      const g = m.clientX, b = l ?? rn, v = r.view.dom.clientWidth, w = (A) => {
        const x = (A.clientX - g) / v * 100, S = Math.min(
          rn,
          Math.max(Iv, b + x)
        );
        i({ width: Math.round(S) });
      }, k = () => {
        h(!1), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", k);
      };
      h(!0), document.addEventListener("mousemove", w), document.addEventListener("mouseup", k);
    },
    [r, l, i]
  );
  return /* @__PURE__ */ y(zr, { className: "mb-2", children: /* @__PURE__ */ C(
    "div",
    {
      style: { width: `${l ?? rn}%` },
      className: J(
        "image-resizable-wrapper group/image relative rounded-lg",
        n && "border-2 border-f1-border-selected-bold border-solid",
        f && "select-none"
      ),
      children: [
        /* @__PURE__ */ y(
          "img",
          {
            src: o,
            alt: s,
            title: a,
            draggable: !1,
            className: "block h-auto w-full rounded-md transition-all duration-150 ease-out"
          }
        ),
        c && /* @__PURE__ */ y("div", { className: "absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200", children: /* @__PURE__ */ y(rh, { size: "medium" }) }),
        u && !c && /* @__PURE__ */ y("div", { className: "absolute right-2 top-2 opacity-0 transition-opacity group-hover/image:opacity-100", children: /* @__PURE__ */ y(
          ue,
          {
            onClick: e,
            label: d.actions.delete,
            icon: Qi,
            variant: "default",
            hideLabel: !0
          }
        ) }),
        u && !c && /* @__PURE__ */ y(
          "div",
          {
            className: J(
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
}, Lv = Pv.extend({
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
    return Fr(Mv);
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", tt(this.options.HTMLAttributes, t)];
  }
}).configure({
  inline: !1,
  allowBase64: !0
}), us = async (t, e, n, r) => {
  const i = n.maxFileSize ?? Dv, { onError: o } = n;
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
}, Rv = (t) => Tv.configure({
  allowedMimeTypes: Qs,
  onDrop: (e, n, r) => {
    n.forEach((i) => {
      us(e, i, t, r);
    });
  },
  onPaste: (e, n) => {
    n.forEach((r) => {
      us(e, r, t);
    });
  }
}), Vu = (t, e, n) => {
  us(t, e, n);
}, ds = {
  superNegative: fh,
  negative: dh,
  neutral: uh,
  positive: ch,
  superPositive: lh
}, fs = {
  superNegative: "mood-super-negative",
  negative: "mood-negative",
  neutral: "mood-neutral",
  positive: "mood-positive",
  superPositive: "mood-super-positive"
}, $v = ({
  firstName: t,
  lastName: e,
  src: n,
  "aria-label": r,
  "aria-labelledby": i,
  pulse: o,
  onPulseClick: s
}) => {
  const a = Yn(), [c, l] = de(!o);
  return /* @__PURE__ */ y("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ y(ih, { mode: "popLayout", initial: !!c, children: c ? /* @__PURE__ */ y(
    ei.div,
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
      children: /* @__PURE__ */ y(
        ei.div,
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
          children: /* @__PURE__ */ y(oh, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ C(
    ei.div,
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
        /* @__PURE__ */ y(
          sh,
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
        o ? /* @__PURE__ */ y("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ y(
          ah,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), s();
            },
            "aria-label": a.actions.edit,
            children: /* @__PURE__ */ y(
              ln,
              {
                icon: ds[o],
                color: fs[o],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ y(
          ei.div,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.5 },
            transition: {
              opacity: { delay: 0.25 },
              scale: { delay: 0.25 }
            },
            className: "absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background",
            children: /* @__PURE__ */ y(
              Dn,
              {
                compact: !0,
                label: a.actions.add,
                variant: "neutral",
                size: "sm",
                icon: hh,
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
$v.displayName = "PulseAvatar";
const jv = ({
  node: t,
  deleteNode: e,
  updateAttributes: n
}) => {
  const r = Yn(), [i, o] = de(t.attrs.isOpen ?? !1), s = t.attrs.data;
  if (!s) return null;
  const a = () => {
    const l = !i;
    o(l), n({ isOpen: l });
  }, c = [
    {
      label: r.actions.delete,
      icon: Qi,
      critical: !0,
      onClick: () => e()
    }
  ];
  return /* @__PURE__ */ C(zr, { contentEditable: !1, children: [
    /* @__PURE__ */ C(
      "div",
      {
        className: "editor-mood-tracker mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
        onClick: (l) => l.stopPropagation(),
        children: [
          /* @__PURE__ */ C("div", { className: "flex flex-row items-center justify-between gap-2", children: [
            /* @__PURE__ */ y("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ C("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ C("div", { className: "flex flex-row items-center gap-3", children: [
                /* @__PURE__ */ y("p", { className: "text-f1-text-primary text-lg font-semibold", children: s.title }),
                /* @__PURE__ */ y("div", { className: "flex flex-row items-center", children: s.days.map((l, u) => /* @__PURE__ */ y(
                  "div",
                  {
                    className: "-ml-1.5 flex items-center justify-center rounded-full bg-f1-background",
                    children: /* @__PURE__ */ y(
                      ln,
                      {
                        icon: ds[l.mood],
                        size: "lg",
                        color: fs[l.mood]
                      }
                    )
                  },
                  u
                )) })
              ] }),
              /* @__PURE__ */ y("p", { children: /* @__PURE__ */ y("span", { className: "text-f1-text-primary text-md font-normal", children: s.averageMoodComment }) })
            ] }) }),
            /* @__PURE__ */ C("div", { className: "flex flex-row items-center gap-1", children: [
              /* @__PURE__ */ y(
                ue,
                {
                  onClick: a,
                  variant: "outline",
                  hideLabel: !0,
                  label: i ? r.actions.collapse : r.actions.expand,
                  icon: i ? Uc : Hs,
                  size: "sm"
                }
              ),
              /* @__PURE__ */ y(Ws, { items: c, size: "sm" })
            ] })
          ] }),
          i && /* @__PURE__ */ y("div", { className: "text-f1-text-primary flex flex-col gap-2", children: s.days.map((l, u) => /* @__PURE__ */ C("div", { className: "flex flex-row items-center gap-2", children: [
            /* @__PURE__ */ y("div", { className: "flex items-center justify-center rounded-full", children: /* @__PURE__ */ y(
              ln,
              {
                icon: ds[l.mood],
                size: "lg",
                color: fs[l.mood]
              }
            ) }),
            /* @__PURE__ */ C("p", { className: "text-f1-text-primary text-md font-normal", children: [
              /* @__PURE__ */ C("span", { className: "font-semibold", children: [
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
    /* @__PURE__ */ y(Vs, { style: { display: "none" } })
  ] });
}, Fv = nt.create({
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
    return Fr(jv);
  },
  addCommands() {
    return {
      insertMoodTracker: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: { data: t }
      })
    };
  }
}), zv = Fv, Bv = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/, Vv = /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/, Hv = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*)$/gm, Wv = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\S*)$/gm;
function gi(t) {
  const e = t.match(Bv);
  if (e)
    return {
      provider: "youtube",
      videoId: e[1],
      embedUrl: `https://www.youtube-nocookie.com/embed/${e[1]}`
    };
  const n = t.match(Vv);
  return n ? {
    provider: "vimeo",
    videoId: n[1],
    embedUrl: `https://player.vimeo.com/video/${n[1]}`
  } : null;
}
const Uv = ({
  node: t,
  deleteNode: e,
  selected: n,
  editor: r
}) => {
  const { src: i, provider: o } = t.attrs, s = r.isEditable, a = Yn();
  return /* @__PURE__ */ y(zr, { className: "mb-2", children: /* @__PURE__ */ C(
    "div",
    {
      className: J(
        "video-embed-wrapper relative overflow-hidden rounded-lg",
        n && "border-2 border-solid border-f1-border-selected-bold"
      ),
      children: [
        /* @__PURE__ */ y("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ y(
          "iframe",
          {
            src: i,
            title: `${o} video`,
            className: "absolute inset-0 h-full w-full border-0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0
          }
        ) }),
        s && /* @__PURE__ */ y("div", { className: "dark absolute right-2 top-2", children: /* @__PURE__ */ y(
          ue,
          {
            onClick: e,
            label: a.actions.delete,
            icon: Qi,
            variant: "outline",
            hideLabel: !0,
            size: "sm"
          }
        ) })
      ]
    }
  ) });
}, Kv = nt.create({
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
      tt(t, { "data-video-embed": "" }),
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
    return Fr(Uv);
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
      Ra({
        find: Hv,
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
      Ra({
        find: Wv,
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
}), Gv = ({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}) => hs({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}).flatMap((i) => i.commands), hs = ({
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
        icon: ph
      },
      {
        title: e.richTextEditor.heading2,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleHeading({ level: 2 }).run();
        },
        icon: mh
      },
      {
        title: e.richTextEditor.heading3,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleHeading({ level: 3 }).run();
        },
        icon: gh
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
        icon: yh
      },
      {
        title: e.richTextEditor.orderedList,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleOrderedList().run();
        },
        icon: bh
      },
      {
        title: e.richTextEditor.taskList,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleTaskList().run();
        },
        icon: vh
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
              o && Vu(r, o, n);
            }, i.click();
          },
          icon: wh
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
        icon: xh
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
        icon: Sh
      },
      {
        title: e.richTextEditor.quote,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).toggleBlockquote().run();
        },
        icon: kh
      },
      {
        title: e.richTextEditor.divider,
        command: (r) => {
          const { from: i, to: o } = r.state.selection;
          r.chain().focus().setTextSelection({ from: i, to: o }).setHorizontalRule().run();
        },
        icon: Ah
      }
    ]
  }
], Hu = Pt(
  ({ items: t, groups: e, command: n }, r) => {
    const [i, o] = de(0), s = ye(null), a = ye(null), c = e || [{ title: "", commands: t }], l = c.flatMap((g) => g.commands), u = he(
      (g) => {
        const b = l[g];
        b && n(b);
      },
      [l, n]
    ), d = he((g) => {
      const b = s.current;
      if (!b) return;
      const v = b.getBoundingClientRect(), w = g.getBoundingClientRect();
      w.top < v.top ? b.scrollTop += w.top - v.top : w.bottom > v.bottom && (b.scrollTop += w.bottom - v.bottom);
    }, []), f = he(() => {
      o((g) => g <= 0 ? l.length - 1 : g - 1);
    }, [l.length]), h = he(() => {
      o((g) => g >= l.length - 1 ? 0 : g + 1);
    }, [l.length]), p = he(() => {
      u(i);
    }, [i, u]);
    Fe(() => {
      a.current && d(a.current);
    }, [i, d]), Fe(() => {
      o(0);
    }, [t.length]), gc(
      r,
      () => ({
        onKeyDown: ({ event: g }) => g.key === "ArrowUp" ? (g.preventDefault(), f(), !0) : g.key === "ArrowDown" ? (g.preventDefault(), h(), !0) : g.key === "Enter" ? (g.preventDefault(), p(), !0) : !1
      }),
      [f, h, p]
    );
    const m = (g, b) => {
      let v = 0;
      for (let w = 0; w < g; w++)
        v += c[w].commands.length;
      return v + b;
    };
    return /* @__PURE__ */ y(
      "div",
      {
        ref: s,
        className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
        children: c.map((g, b) => /* @__PURE__ */ C("div", { children: [
          /* @__PURE__ */ C("div", { className: "p-1", children: [
            e && g.title && /* @__PURE__ */ y("div", { className: "p-2", children: /* @__PURE__ */ y("p", { className: "text-sm font-medium tracking-wide text-f1-foreground-secondary", children: g.title }) }),
            g.commands.map((v, w) => {
              const k = m(b, w), A = k === i;
              return /* @__PURE__ */ C(
                "div",
                {
                  ref: A ? a : null,
                  className: J(
                    "flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover",
                    A && "bg-f1-background-secondary"
                  ),
                  onClick: () => {
                    o(k), u(k);
                  },
                  onMouseEnter: () => o(k),
                  children: [
                    v.emoji ? /* @__PURE__ */ y("span", { className: "text-base", children: v.emoji }) : v.icon ? /* @__PURE__ */ y(
                      ln,
                      {
                        icon: v.icon,
                        className: "text-f1-foreground-secondary"
                      }
                    ) : null,
                    /* @__PURE__ */ y("p", { className: "flex-grow text-sm font-medium text-f1-foreground", children: v.title })
                  ]
                },
                `${b}-${w}`
              );
            })
          ] }),
          e && b < c.length - 1 && /* @__PURE__ */ y("div", { className: "py-1", children: /* @__PURE__ */ y("div", { className: "h-[1px] w-full bg-f1-border-secondary" }) })
        ] }, b))
      }
    );
  }
);
Hu.displayName = "CommandList";
const Yv = ({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}) => yn.create({
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
      Ch({
        editor: this.editor,
        ...this.options.suggestion,
        items: ({ query: r }) => {
          const i = r.toLowerCase().trim(), o = Gv({
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
            return /* @__PURE__ */ C(_h, { open: !0, modal: !1, children: [
              /* @__PURE__ */ y("div", { style: u }),
              /* @__PURE__ */ y(Th, { asChild: !0, children: /* @__PURE__ */ y("div", { style: u }) }),
              /* @__PURE__ */ y(
                Nh,
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
                  children: /* @__PURE__ */ y(
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
              const l = hs({
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
              r = new Eh(Hu, {
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
              o = document.createElement("div"), document.body.appendChild(o), i = Oh.createRoot(o), i.render(
                /* @__PURE__ */ y(
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
              const l = hs({
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
                  /* @__PURE__ */ y(
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
}), qv = ({
  node: t,
  deleteNode: e,
  updateAttributes: n
}) => {
  const r = Yn(), [i, o] = de(t.attrs.isOpen ?? !1), s = t.attrs.data;
  if (!s) return null;
  const a = () => {
    const d = !i;
    o(d), n({ isOpen: d });
  }, c = [
    {
      label: r.actions.delete,
      icon: Qi,
      critical: !0,
      onClick: () => e()
    }
  ], l = (d) => s.users.find((f) => f.id === d), u = (d) => {
    try {
      const f = new Date(d);
      return In(f, "HH:mm");
    } catch (f) {
      return console.error(f), d;
    }
  };
  return /* @__PURE__ */ C(zr, { contentEditable: !1, children: [
    /* @__PURE__ */ C(
      "div",
      {
        className: "editor-transcript mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
        onClick: (d) => d.stopPropagation(),
        children: [
          /* @__PURE__ */ C("div", { className: "flex flex-row items-center justify-between gap-2", children: [
            /* @__PURE__ */ y("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ C("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ y("div", { className: "flex flex-row items-center gap-3", children: /* @__PURE__ */ y("p", { className: "text-f1-text-primary text-lg font-semibold", children: s.title }) }),
              /* @__PURE__ */ y("p", { className: "text-f1-text-secondary text-sm", children: s.messages.length })
            ] }) }),
            /* @__PURE__ */ C("div", { className: "flex flex-row items-center gap-1", children: [
              /* @__PURE__ */ y(
                ue,
                {
                  onClick: a,
                  variant: "outline",
                  hideLabel: !0,
                  label: i ? r.actions.collapse : r.actions.expand,
                  icon: i ? Uc : Hs,
                  size: "sm"
                }
              ),
              /* @__PURE__ */ y(Ws, { items: c, size: "sm" })
            ] })
          ] }),
          i && /* @__PURE__ */ y("div", { className: "scrollbar-macos text-f1-text-primary flex max-h-[500px] flex-col gap-4 overflow-y-auto", children: s.messages.map((d, f) => {
            const h = l(d.userId);
            return /* @__PURE__ */ C("div", { className: "flex flex-row gap-3", children: [
              h?.imageUrl && /* @__PURE__ */ y(
                Ph,
                {
                  size: "xs",
                  src: h.imageUrl,
                  firstName: h.fullname,
                  lastName: ""
                }
              ),
              /* @__PURE__ */ C("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ C("div", { className: "flex items-baseline gap-2", children: [
                  /* @__PURE__ */ y("span", { className: "text-f1-text-primary font-medium", children: h?.fullname || "Unknown User" }),
                  /* @__PURE__ */ y("span", { className: "text-f1-text-tertiary text-xs", children: u(d.dateTime) })
                ] }),
                /* @__PURE__ */ y("p", { className: "text-f1-text-secondary", children: d.text })
              ] })
            ] }, f);
          }) })
        ]
      }
    ),
    /* @__PURE__ */ y(Vs, { style: { display: "none" } })
  ] });
}, Xv = nt.create({
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
    return Fr(qv);
  },
  addCommands() {
    return {
      insertTranscript: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: { data: t }
      })
    };
  }
}), Jv = Xv, ut = () => /* @__PURE__ */ new Map(), ps = (t) => {
  const e = ut();
  return t.forEach((n, r) => {
    e.set(r, n);
  }), e;
}, Lt = (t, e, n) => {
  let r = t.get(e);
  return r === void 0 && t.set(e, r = n()), r;
}, Zv = (t, e) => {
  const n = [];
  for (const [r, i] of t)
    n.push(e(i, r));
  return n;
}, Qv = (t, e) => {
  for (const [n, r] of t)
    if (e(r, n))
      return !0;
  return !1;
}, fn = () => /* @__PURE__ */ new Set(), Io = (t) => t[t.length - 1], e0 = (t, e) => {
  for (let n = 0; n < e.length; n++)
    t.push(e[n]);
}, hn = Array.from, t0 = (t, e) => {
  for (let n = 0; n < t.length; n++)
    if (e(t[n], n, t))
      return !0;
  return !1;
}, ms = Array.isArray;
class Wu {
  constructor() {
    this._observers = ut();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(e, n) {
    return Lt(
      this._observers,
      /** @type {string} */
      e,
      fn
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
    return hn((this._observers.get(e) || ut()).values()).forEach((r) => r(...n));
  }
  destroy() {
    this._observers = ut();
  }
}
const Nt = Math.floor, yi = Math.abs, Hn = (t, e) => t < e ? t : e, Bt = (t, e) => t > e ? t : e, Uu = (t) => t !== 0 ? t < 0 : 1 / t < 0, Ll = 1, Rl = 2, Mo = 4, Lo = 8, Or = 32, Et = 64, Ie = 128, n0 = 1 << 29, ao = 31, gs = 63, an = 127, r0 = 2147483647, Ku = Number.MAX_SAFE_INTEGER, i0 = Number.isInteger || ((t) => typeof t == "number" && isFinite(t) && Nt(t) === t), o0 = String.fromCharCode, s0 = (t) => t.toLowerCase(), a0 = /^\s*/g, l0 = (t) => t.replace(a0, ""), c0 = /([A-Z])/g, $l = (t, e) => l0(t.replace(c0, (n) => `${e}${s0(n)}`)), u0 = (t) => {
  const e = unescape(encodeURIComponent(t)), n = e.length, r = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    r[i] = /** @type {number} */
    e.codePointAt(i);
  return r;
}, _r = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), d0 = (t) => _r.encode(t), f0 = _r ? d0 : u0;
let br = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
br && br.decode(new Uint8Array()).length === 1 && (br = null);
class Yr {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const qr = () => new Yr(), h0 = (t) => {
  const e = qr();
  return t(e), lt(e);
}, p0 = (t) => {
  let e = t.cpos;
  for (let n = 0; n < t.bufs.length; n++)
    e += t.bufs[n].length;
  return e;
}, lt = (t) => {
  const e = new Uint8Array(p0(t));
  let n = 0;
  for (let r = 0; r < t.bufs.length; r++) {
    const i = t.bufs[r];
    e.set(i, n), n += i.length;
  }
  return e.set(new Uint8Array(t.cbuf.buffer, 0, t.cpos), n), e;
}, m0 = (t, e) => {
  const n = t.cbuf.length;
  n - t.cpos < e && (t.bufs.push(new Uint8Array(t.cbuf.buffer, 0, t.cpos)), t.cbuf = new Uint8Array(Bt(n, e) * 2), t.cpos = 0);
}, fe = (t, e) => {
  const n = t.cbuf.length;
  t.cpos === n && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(n * 2), t.cpos = 0), t.cbuf[t.cpos++] = e;
}, ys = fe, U = (t, e) => {
  for (; e > an; )
    fe(t, Ie | an & e), e = Nt(e / 128);
  fe(t, an & e);
}, ea = (t, e) => {
  const n = Uu(e);
  for (n && (e = -e), fe(t, (e > gs ? Ie : 0) | (n ? Et : 0) | gs & e), e = Nt(e / 64); e > 0; )
    fe(t, (e > an ? Ie : 0) | an & e), e = Nt(e / 128);
}, bs = new Uint8Array(3e4), g0 = bs.length / 3, y0 = (t, e) => {
  if (e.length < g0) {
    const n = _r.encodeInto(e, bs).written || 0;
    U(t, n);
    for (let r = 0; r < n; r++)
      fe(t, bs[r]);
  } else
    Ge(t, f0(e));
}, b0 = (t, e) => {
  const n = unescape(encodeURIComponent(e)), r = n.length;
  U(t, r);
  for (let i = 0; i < r; i++)
    fe(
      t,
      /** @type {number} */
      n.codePointAt(i)
    );
}, _n = _r && /** @type {any} */
_r.encodeInto ? y0 : b0, lo = (t, e) => {
  const n = t.cbuf.length, r = t.cpos, i = Hn(n - r, e.length), o = e.length - i;
  t.cbuf.set(e.subarray(0, i), r), t.cpos += i, o > 0 && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(Bt(n * 2, o)), t.cbuf.set(e.subarray(i)), t.cpos = o);
}, Ge = (t, e) => {
  U(t, e.byteLength), lo(t, e);
}, ta = (t, e) => {
  m0(t, e);
  const n = new DataView(t.cbuf.buffer, t.cpos, e);
  return t.cpos += e, n;
}, v0 = (t, e) => ta(t, 4).setFloat32(0, e, !1), w0 = (t, e) => ta(t, 8).setFloat64(0, e, !1), x0 = (t, e) => (
  /** @type {any} */
  ta(t, 8).setBigInt64(0, e, !1)
), jl = new DataView(new ArrayBuffer(4)), S0 = (t) => (jl.setFloat32(0, t), jl.getFloat32(0) === t), Wn = (t, e) => {
  switch (typeof e) {
    case "string":
      fe(t, 119), _n(t, e);
      break;
    case "number":
      i0(e) && yi(e) <= r0 ? (fe(t, 125), ea(t, e)) : S0(e) ? (fe(t, 124), v0(t, e)) : (fe(t, 123), w0(t, e));
      break;
    case "bigint":
      fe(t, 122), x0(t, e);
      break;
    case "object":
      if (e === null)
        fe(t, 126);
      else if (ms(e)) {
        fe(t, 117), U(t, e.length);
        for (let n = 0; n < e.length; n++)
          Wn(t, e[n]);
      } else if (e instanceof Uint8Array)
        fe(t, 116), Ge(t, e);
      else {
        fe(t, 118);
        const n = Object.keys(e);
        U(t, n.length);
        for (let r = 0; r < n.length; r++) {
          const i = n[r];
          _n(t, i), Wn(t, e[i]);
        }
      }
      break;
    case "boolean":
      fe(t, e ? 120 : 121);
      break;
    default:
      fe(t, 127);
  }
};
class Fl extends Yr {
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
    this.s === e ? this.count++ : (this.count > 0 && U(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
  }
}
const zl = (t) => {
  t.count > 0 && (ea(t.encoder, t.count === 1 ? t.s : -t.s), t.count > 1 && U(t.encoder, t.count - 2));
};
class bi {
  constructor() {
    this.encoder = new Yr(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.s === e ? this.count++ : (zl(this), this.count = 1, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return zl(this), lt(this.encoder);
  }
}
const Bl = (t) => {
  if (t.count > 0) {
    const e = t.diff * 2 + (t.count === 1 ? 0 : 1);
    ea(t.encoder, e), t.count > 1 && U(t.encoder, t.count - 2);
  }
};
class Ro {
  constructor() {
    this.encoder = new Yr(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.diff === e - this.s ? (this.s = e, this.count++) : (Bl(this), this.count = 1, this.diff = e - this.s, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Bl(this), lt(this.encoder);
  }
}
class k0 {
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
    return this.sarr.push(this.s), this.s = "", _n(e, this.sarr.join("")), lo(e, this.lensE.toUint8Array()), lt(e);
  }
}
const Vt = (t) => new Error(t), dt = () => {
  throw Vt("Method unimplemented");
}, Ve = () => {
  throw Vt("Unexpected case");
}, Gu = Vt("Unexpected end of array"), Yu = Vt("Integer out of Range");
class co {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(e) {
    this.arr = e, this.pos = 0;
  }
}
const na = (t) => new co(t), A0 = (t) => t.pos !== t.arr.length, C0 = (t, e) => {
  const n = new Uint8Array(t.arr.buffer, t.pos + t.arr.byteOffset, e);
  return t.pos += e, n;
}, Xe = (t) => C0(t, te(t)), Tr = (t) => t.arr[t.pos++], te = (t) => {
  let e = 0, n = 1;
  const r = t.arr.length;
  for (; t.pos < r; ) {
    const i = t.arr[t.pos++];
    if (e = e + (i & an) * n, n *= 128, i < Ie)
      return e;
    if (e > Ku)
      throw Yu;
  }
  throw Gu;
}, ra = (t) => {
  let e = t.arr[t.pos++], n = e & gs, r = 64;
  const i = (e & Et) > 0 ? -1 : 1;
  if ((e & Ie) === 0)
    return i * n;
  const o = t.arr.length;
  for (; t.pos < o; ) {
    if (e = t.arr[t.pos++], n = n + (e & an) * r, r *= 128, e < Ie)
      return i * n;
    if (n > Ku)
      throw Yu;
  }
  throw Gu;
}, E0 = (t) => {
  let e = te(t);
  if (e === 0)
    return "";
  {
    let n = String.fromCodePoint(Tr(t));
    if (--e < 100)
      for (; e--; )
        n += String.fromCodePoint(Tr(t));
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
}, O0 = (t) => (
  /** @type any */
  br.decode(Xe(t))
), vs = br ? O0 : E0, ia = (t, e) => {
  const n = new DataView(t.arr.buffer, t.arr.byteOffset + t.pos, e);
  return t.pos += e, n;
}, _0 = (t) => ia(t, 4).getFloat32(0, !1), T0 = (t) => ia(t, 8).getFloat64(0, !1), N0 = (t) => (
  /** @type {any} */
  ia(t, 8).getBigInt64(0, !1)
), P0 = [
  (t) => {
  },
  // CASE 127: undefined
  (t) => null,
  // CASE 126: null
  ra,
  // CASE 125: integer
  _0,
  // CASE 124: float32
  T0,
  // CASE 123: float64
  N0,
  // CASE 122: bigint
  (t) => !1,
  // CASE 121: boolean (false)
  (t) => !0,
  // CASE 120: boolean (true)
  vs,
  // CASE 119: string
  (t) => {
    const e = te(t), n = {};
    for (let r = 0; r < e; r++) {
      const i = vs(t);
      n[i] = Ri(t);
    }
    return n;
  },
  (t) => {
    const e = te(t), n = [];
    for (let r = 0; r < e; r++)
      n.push(Ri(t));
    return n;
  },
  Xe
  // CASE 116: Uint8Array
], Ri = (t) => P0[127 - Tr(t)](t);
class Vl extends co {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(e, n) {
    super(e), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), A0(this) ? this.count = te(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class vi extends co {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    super(e), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = ra(this);
      const e = Uu(this.s);
      this.count = 1, e && (this.s = -this.s, this.count = te(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class $o extends co {
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
      this.diff = Nt(e / 2), this.count = 1, n && (this.count = te(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class D0 {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    this.decoder = new vi(e), this.str = vs(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const e = this.spos + this.decoder.read(), n = this.str.slice(this.spos, e);
    return this.spos = e, n;
  }
}
const I0 = crypto.getRandomValues.bind(crypto), M0 = Math.random, qu = () => I0(new Uint32Array(1))[0], L0 = (t) => t[Nt(M0() * t.length)], R0 = "10000000-1000-4000-8000" + -1e11, $0 = () => R0.replace(
  /[018]/g,
  /** @param {number} c */
  (t) => (t ^ qu() & 15 >> t / 4).toString(16)
), j0 = Date.now, Hl = (t) => (
  /** @type {Promise<T>} */
  new Promise(t)
);
Promise.all.bind(Promise);
const Wl = (t) => t === void 0 ? null : t;
class F0 {
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
let Xu = new F0(), z0 = !0;
try {
  typeof localStorage < "u" && localStorage && (Xu = localStorage, z0 = !1);
} catch {
}
const B0 = Xu, V0 = Object.assign, Ju = Object.keys, H0 = (t, e) => {
  for (const n in t)
    e(t[n], n);
}, Ul = (t) => Ju(t).length, W0 = (t) => {
  for (const e in t)
    return !1;
  return !0;
}, Zu = (t, e) => {
  for (const n in t)
    if (!e(t[n], n))
      return !1;
  return !0;
}, U0 = (t, e) => Object.prototype.hasOwnProperty.call(t, e), K0 = (t, e) => t === e || Ul(t) === Ul(e) && Zu(t, (n, r) => (n !== void 0 || U0(e, r)) && e[r] === n), G0 = Object.freeze, Qu = (t) => {
  for (const e in t) {
    const n = t[e];
    (typeof n == "object" || typeof n == "function") && Qu(t[e]);
  }
  return G0(t);
}, oa = (t, e, n = 0) => {
  try {
    for (; n < t.length; n++)
      t[n](...e);
  } finally {
    n < t.length && oa(t, e, n + 1);
  }
}, Y0 = (t, e) => e.includes(t), Un = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", ed = typeof window < "u" && typeof document < "u" && !Un;
let yt;
const q0 = () => {
  if (yt === void 0)
    if (Un) {
      yt = ut();
      const t = process.argv;
      let e = null;
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        r[0] === "-" ? (e !== null && yt.set(e, ""), e = r) : e !== null && (yt.set(e, r), e = null);
      }
      e !== null && yt.set(e, "");
    } else typeof location == "object" ? (yt = ut(), (location.search || "?").slice(1).split("&").forEach((t) => {
      if (t.length !== 0) {
        const [e, n] = t.split("=");
        yt.set(`--${$l(e, "-")}`, n), yt.set(`-${$l(e, "-")}`, n);
      }
    })) : yt = ut();
  return yt;
}, ws = (t) => q0().has(t), $i = (t) => Wl(Un ? process.env[t.toUpperCase().replaceAll("-", "_")] : B0.getItem(t)), td = (t) => ws("--" + t) || $i(t) !== null;
td("production");
const X0 = Un && Y0(process.env.FORCE_COLOR, ["true", "1", "2"]), J0 = X0 || !ws("--no-colors") && // @todo deprecate --no-colors
!td("no-color") && (!Un || process.stdout.isTTY) && (!Un || ws("--color") || $i("COLORTERM") !== null || ($i("TERM") || "").includes("color")), Z0 = (t) => {
  let e = "";
  for (let n = 0; n < t.byteLength; n++)
    e += o0(t[n]);
  return btoa(e);
}, Q0 = (t) => Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("base64"), ew = ed ? Z0 : Q0, tw = (t) => h0((e) => Wn(e, t));
class nw {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(e, n) {
    this.left = e, this.right = n;
  }
}
const St = (t, e) => new nw(t, e), rw = (
  /** @type {Document} */
  typeof document < "u" ? document : {}
);
typeof DOMParser < "u" && new DOMParser();
const iw = (t) => Zv(t, (e, n) => `${n}:${e};`).join(""), ow = (t) => class {
  /**
   * @param {number} timeoutId
   */
  constructor(n) {
    this._ = n;
  }
  destroy() {
    t(this._);
  }
}, sw = ow(clearTimeout), nd = (t, e) => new sw(setTimeout(e, t)), Rt = Symbol, rd = Rt(), id = Rt(), aw = Rt(), lw = Rt(), cw = Rt(), od = Rt(), uw = Rt(), sa = Rt(), dw = Rt(), fw = (t) => {
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
}, hw = {
  [rd]: St("font-weight", "bold"),
  [id]: St("font-weight", "normal"),
  [aw]: St("color", "blue"),
  [cw]: St("color", "green"),
  [lw]: St("color", "grey"),
  [od]: St("color", "red"),
  [uw]: St("color", "purple"),
  [sa]: St("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [dw]: St("color", "black")
}, pw = (t) => {
  t.length === 1 && t[0]?.constructor === Function && (t = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  t[0]());
  const e = [], n = [], r = ut();
  let i = [], o = 0;
  for (; o < t.length; o++) {
    const s = t[o], a = hw[s];
    if (a !== void 0)
      r.set(a.left, a.right);
    else {
      if (s === void 0)
        break;
      if (s.constructor === String || s.constructor === Number) {
        const c = iw(r);
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
}, sd = J0 ? pw : fw, mw = (...t) => {
  console.log(...sd(t)), ld.forEach((e) => e.print(t));
}, ad = (...t) => {
  console.warn(...sd(t)), t.unshift(sa), ld.forEach((e) => e.print(t));
}, ld = fn(), cd = (t) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: t
}), gw = (t, e) => cd(() => {
  let n;
  do
    n = t.next();
  while (!n.done && !e(n.value));
  return n;
}), jo = (t, e) => cd(() => {
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
class tr {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const Ht = (t, e, n) => e.clients.forEach((r, i) => {
  const o = (
    /** @type {Array<GC|Item>} */
    t.doc.store.clients.get(i)
  );
  if (o != null) {
    const s = o[o.length - 1], a = s.id.clock + s.length;
    for (let c = 0, l = r[c]; c < r.length && l.clock < a; l = r[++c])
      yd(t, o, l.clock, l.len, n);
  }
}), yw = (t, e) => {
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
}, nr = (t, e) => {
  const n = t.clients.get(e.client);
  return n !== void 0 && yw(n, e.clock) !== null;
}, la = (t) => {
  t.clients.forEach((e) => {
    e.sort((i, o) => i.clock - o.clock);
    let n, r;
    for (n = 1, r = 1; n < e.length; n++) {
      const i = e[r - 1], o = e[n];
      i.clock + i.len >= o.clock ? i.len = Bt(i.len, o.clock + o.len - i.clock) : (r < n && (e[r] = o), r++);
    }
    e.length = r;
  });
}, xs = (t) => {
  const e = new tr();
  for (let n = 0; n < t.length; n++)
    t[n].clients.forEach((r, i) => {
      if (!e.clients.has(i)) {
        const o = r.slice();
        for (let s = n + 1; s < t.length; s++)
          e0(o, t[s].clients.get(i) || []);
        e.clients.set(i, o);
      }
    });
  return la(e), e;
}, Nr = (t, e, n, r) => {
  Lt(t.clients, e, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new aa(n, r));
}, ud = () => new tr(), bw = (t) => {
  const e = ud();
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
  U(t.restEncoder, e.clients.size), hn(e.clients.entries()).sort((n, r) => r[0] - n[0]).forEach(([n, r]) => {
    t.resetDsCurVal(), U(t.restEncoder, n);
    const i = r.length;
    U(t.restEncoder, i);
    for (let o = 0; o < i; o++) {
      const s = r[o];
      t.writeDsClock(s.clock), t.writeDsLen(s.len);
    }
  });
}, vw = (t) => {
  const e = new tr(), n = te(t.restDecoder);
  for (let r = 0; r < n; r++) {
    t.resetDsCurVal();
    const i = te(t.restDecoder), o = te(t.restDecoder);
    if (o > 0) {
      const s = Lt(e.clients, i, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let a = 0; a < o; a++)
        s.push(new aa(t.readDsClock(), t.readDsLen()));
    }
  }
  return e;
}, Kl = (t, e, n) => {
  const r = new tr(), i = te(t.restDecoder);
  for (let o = 0; o < i; o++) {
    t.resetDsCurVal();
    const s = te(t.restDecoder), a = te(t.restDecoder), c = n.clients.get(s) || [], l = le(n, s);
    for (let u = 0; u < a; u++) {
      const d = t.readDsClock(), f = d + t.readDsLen();
      if (d < l) {
        l < f && Nr(r, s, l, f - l);
        let h = ft(c, d), p = c[h];
        for (!p.deleted && p.id.clock < d && (c.splice(h + 1, 0, Wi(e, p, d - p.id.clock)), h++); h < c.length && (p = c[h++], p.id.clock < f); )
          p.deleted || (f < p.id.clock + p.length && c.splice(h, 0, Wi(e, p, f - p.id.clock)), p.delete(e));
      } else
        Nr(r, s, d, f - d);
    }
  }
  if (r.clients.size > 0) {
    const o = new uo();
    return U(o.restEncoder, 0), ca(o, r), o.toUint8Array();
  }
  return null;
}, dd = qu;
class wn extends Wu {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: e = $0(), collectionid: n = null, gc: r = !0, gcFilter: i = () => !0, meta: o = null, autoLoad: s = !1, shouldLoad: a = !0 } = {}) {
    super(), this.gc = r, this.gcFilter = i, this.clientID = dd(), this.guid = e, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new md(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = a, this.autoLoad = s, this.meta = o, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = Hl((l) => {
      this.on("load", () => {
        this.isLoaded = !0, l(this);
      });
    });
    const c = () => Hl((l) => {
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
    e !== null && !this.shouldLoad && X(
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
    return new Set(hn(this.subdocs).map((e) => e.guid));
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
    return X(this, e, n);
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
    pe
  )) {
    const r = Lt(this.share, e, () => {
      const o = new n();
      return o._integrate(this, null), o;
    }), i = r.constructor;
    if (n !== pe && i !== n)
      if (i === pe) {
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
      this.get(e, Pn)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(e = "") {
    return this.get(e, Wt);
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
      this.get(e, Kn)
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
      this.get(e, ke)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(e = "") {
    return this.get(e, pn);
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
    this.isDestroyed = !0, hn(this.subdocs).forEach((n) => n.destroy());
    const e = this._item;
    if (e !== null) {
      this._item = null;
      const n = (
        /** @type {ContentDoc} */
        e.content
      );
      n.doc = new wn({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = e, X(
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
class ww {
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
    return this.dsCurrVal += te(this.restDecoder), this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const e = te(this.restDecoder) + 1;
    return this.dsCurrVal += e, e;
  }
}
class ji extends ww {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(e) {
    super(e), this.keys = [], te(e), this.keyClockDecoder = new $o(Xe(e)), this.clientDecoder = new vi(Xe(e)), this.leftClockDecoder = new $o(Xe(e)), this.rightClockDecoder = new $o(Xe(e)), this.infoDecoder = new Vl(Xe(e), Tr), this.stringDecoder = new D0(Xe(e)), this.parentInfoDecoder = new Vl(Xe(e), Tr), this.typeRefDecoder = new vi(Xe(e)), this.lenDecoder = new vi(Xe(e));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new Tn(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new Tn(this.clientDecoder.read(), this.rightClockDecoder.read());
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
    return Xe(this.restDecoder);
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
class xw {
  constructor() {
    this.restEncoder = qr();
  }
  toUint8Array() {
    return lt(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    U(this.restEncoder, e);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    U(this.restEncoder, e);
  }
}
class Sw extends xw {
  /**
   * @param {ID} id
   */
  writeLeftID(e) {
    U(this.restEncoder, e.client), U(this.restEncoder, e.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(e) {
    U(this.restEncoder, e.client), U(this.restEncoder, e.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(e) {
    U(this.restEncoder, e);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(e) {
    ys(this.restEncoder, e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    _n(this.restEncoder, e);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(e) {
    U(this.restEncoder, e ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(e) {
    U(this.restEncoder, e);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(e) {
    U(this.restEncoder, e);
  }
  /**
   * @param {any} any
   */
  writeAny(e) {
    Wn(this.restEncoder, e);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(e) {
    Ge(this.restEncoder, e);
  }
  /**
   * @param {any} embed
   */
  writeJSON(e) {
    _n(this.restEncoder, JSON.stringify(e));
  }
  /**
   * @param {string} key
   */
  writeKey(e) {
    _n(this.restEncoder, e);
  }
}
class kw {
  constructor() {
    this.restEncoder = qr(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return lt(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    const n = e - this.dsCurrVal;
    this.dsCurrVal = e, U(this.restEncoder, n);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    e === 0 && Ve(), U(this.restEncoder, e - 1), this.dsCurrVal += e;
  }
}
class uo extends kw {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new Ro(), this.clientEncoder = new bi(), this.leftClockEncoder = new Ro(), this.rightClockEncoder = new Ro(), this.infoEncoder = new Fl(ys), this.stringEncoder = new k0(), this.parentInfoEncoder = new Fl(ys), this.typeRefEncoder = new bi(), this.lenEncoder = new bi();
  }
  toUint8Array() {
    const e = qr();
    return U(e, 0), Ge(e, this.keyClockEncoder.toUint8Array()), Ge(e, this.clientEncoder.toUint8Array()), Ge(e, this.leftClockEncoder.toUint8Array()), Ge(e, this.rightClockEncoder.toUint8Array()), Ge(e, lt(this.infoEncoder)), Ge(e, this.stringEncoder.toUint8Array()), Ge(e, lt(this.parentInfoEncoder)), Ge(e, this.typeRefEncoder.toUint8Array()), Ge(e, this.lenEncoder.toUint8Array()), lo(e, lt(this.restEncoder)), lt(e);
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
    Wn(this.restEncoder, e);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(e) {
    Ge(this.restEncoder, e);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(e) {
    Wn(this.restEncoder, e);
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
const Aw = (t, e, n, r) => {
  r = Bt(r, e[0].id.clock);
  const i = ft(e, r);
  U(t.restEncoder, e.length - i), t.writeClient(n), U(t.restEncoder, r);
  const o = e[i];
  o.write(t, r - o.id.clock);
  for (let s = i + 1; s < e.length; s++)
    e[s].write(t, 0);
}, fd = (t, e, n) => {
  const r = /* @__PURE__ */ new Map();
  n.forEach((i, o) => {
    le(e, o) > i && r.set(o, i);
  }), fo(e).forEach((i, o) => {
    n.has(o) || r.set(o, 0);
  }), U(t.restEncoder, r.size), hn(r.entries()).sort((i, o) => o[0] - i[0]).forEach(([i, o]) => {
    Aw(
      t,
      /** @type {Array<GC|Item>} */
      e.clients.get(i),
      i,
      o
    );
  });
}, Cw = (t, e) => {
  const n = ut(), r = te(t.restDecoder);
  for (let i = 0; i < r; i++) {
    const o = te(t.restDecoder), s = new Array(o), a = t.readClient();
    let c = te(t.restDecoder);
    n.set(a, { i: 0, refs: s });
    for (let l = 0; l < o; l++) {
      const u = t.readInfo();
      switch (ao & u) {
        case 0: {
          const d = t.readLen();
          s[l] = new et(H(a, c), d), c += d;
          break;
        }
        case 10: {
          const d = te(t.restDecoder);
          s[l] = new st(H(a, c), d), c += d;
          break;
        }
        default: {
          const d = (u & (Et | Ie)) === 0, f = new q(
            H(a, c),
            null,
            // left
            (u & Ie) === Ie ? t.readLeftID() : null,
            // origin
            null,
            // right
            (u & Et) === Et ? t.readRightID() : null,
            // right origin
            d ? t.readParentInfo() ? e.get(t.readString()) : t.readLeftID() : null,
            // parent
            d && (u & Or) === Or ? t.readString() : null,
            // parentSub
            Fd(t, u)
            // item content
          );
          s[l] = f, c += f.length;
        }
      }
    }
  }
  return n;
}, Ew = (t, e, n) => {
  const r = [];
  let i = hn(n.keys()).sort((h, p) => h - p);
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
  const a = new md(), c = /* @__PURE__ */ new Map(), l = (h, p) => {
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
      m ? (m.i--, a.clients.set(p, m.refs.slice(m.i)), n.delete(p), m.i = 0, m.refs = []) : a.clients.set(p, [h]), i = i.filter((g) => g !== p);
    }
    r.length = 0;
  };
  for (; ; ) {
    if (u.constructor !== st) {
      const p = Lt(d, u.id.client, () => le(e, u.id.client)) - u.id.clock;
      if (p < 0)
        r.push(u), l(u.id.client, u.id.clock - 1), f();
      else {
        const m = u.getMissing(t, e);
        if (m !== null) {
          r.push(u);
          const g = n.get(
            /** @type {number} */
            m
          ) || { refs: [], i: 0 };
          if (g.refs.length === g.i)
            l(
              /** @type {number} */
              m,
              le(e, m)
            ), f();
          else {
            u = g.refs[g.i++];
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
    const h = new uo();
    return fd(h, a, /* @__PURE__ */ new Map()), U(h.restEncoder, 0), { missing: c, update: h.toUint8Array() };
  }
  return null;
}, Ow = (t, e) => fd(t, e.doc.store, e.beforeState), _w = (t, e, n, r = new ji(t)) => X(e, (i) => {
  i.local = !1;
  let o = !1;
  const s = i.doc, a = s.store, c = Cw(r, s), l = Ew(i, a, c), u = a.pendingStructs;
  if (u) {
    for (const [f, h] of u.missing)
      if (h < le(a, f)) {
        o = !0;
        break;
      }
    if (l) {
      for (const [f, h] of l.missing) {
        const p = u.missing.get(f);
        (p == null || p > h) && u.missing.set(f, h);
      }
      u.update = tc([u.update, l.update]);
    }
  } else
    a.pendingStructs = l;
  const d = Kl(r, i, a);
  if (a.pendingDs) {
    const f = new ji(na(a.pendingDs));
    te(f.restDecoder);
    const h = Kl(f, i, a);
    d && h ? a.pendingDs = tc([d, h]) : a.pendingDs = d || h;
  } else
    a.pendingDs = d;
  if (o) {
    const f = (
      /** @type {{update: Uint8Array}} */
      a.pendingStructs.update
    );
    a.pendingStructs = null, Ss(i.doc, f);
  }
}, n, !1), Ss = (t, e, n, r = ji) => {
  const i = na(e);
  _w(i, t, n, new r(i));
};
class Tw {
  constructor() {
    this.l = [];
  }
}
const Gl = () => new Tw(), Yl = (t, e) => t.l.push(e), ql = (t, e) => {
  const n = t.l, r = n.length;
  t.l = n.filter((i) => e !== i), r === t.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, hd = (t, e, n) => oa(t.l, [e, n]);
class Tn {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(e, n) {
    this.client = e, this.clock = n;
  }
}
const oi = (t, e) => t === e || t !== null && e !== null && t.client === e.client && t.clock === e.clock, H = (t, e) => new Tn(t, e), Pr = (t) => {
  for (const [e, n] of t.doc.share.entries())
    if (n === t)
      return e;
  throw Ve();
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
class Nw {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(e, n, r = 0) {
    this.type = e, this.index = n, this.assoc = r;
  }
}
const Pw = (t, e, n = 0) => new Nw(t, e, n), si = (t, e, n) => {
  let r = null, i = null;
  return t._item === null ? i = Pr(t) : r = H(t._item.id.client, t._item.id.clock), new Fi(r, i, e, n);
}, Fo = (t, e, n = 0) => {
  let r = t._start;
  if (n < 0) {
    if (e === 0)
      return si(t, null, n);
    e--;
  }
  for (; r !== null; ) {
    if (!r.deleted && r.countable) {
      if (r.length > e)
        return si(t, H(r.id.client, r.id.clock + e), n);
      e -= r.length;
    }
    if (r.right === null && n < 0)
      return si(t, r.lastId, n);
    r = r.right;
  }
  return si(t, null, n);
}, Dw = (t, e) => {
  const n = Nn(t, e), r = e.clock - n.id.clock;
  return {
    item: n,
    diff: r
  };
}, Iw = (t, e, n = !0) => {
  const r = e.store, i = t.item, o = t.type, s = t.tname, a = t.assoc;
  let c = null, l = 0;
  if (i !== null) {
    if (le(r, i.client) <= i.clock)
      return null;
    const u = n ? Es(r, i) : Dw(r, i), d = u.item;
    if (!(d instanceof q))
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
      if (le(r, o.client) <= o.clock)
        return null;
      const { item: u } = n ? Es(r, o) : { item: Nn(r, o) };
      if (u instanceof q && u.content instanceof mt)
        c = u.content.type;
      else
        return null;
    } else
      throw Ve();
    a >= 0 ? l = c._length : l = 0;
  }
  return Pw(c, l, t.assoc);
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
const pd = (t, e) => new ua(t, e), zo = (t) => pd(bw(t.store), fo(t.store)), tn = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !nr(e.ds, t.id), ks = (t, e) => {
  const n = Lt(t.meta, ks, fn), r = t.doc.store;
  n.has(e) || (e.sv.forEach((i, o) => {
    i < le(r, o) && je(t, H(o, i));
  }), Ht(t, e.ds, (i) => {
  }), n.add(e));
};
class md {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const fo = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.clients.forEach((n, r) => {
    const i = n[n.length - 1];
    e.set(r, i.id.clock + i.length);
  }), e;
}, le = (t, e) => {
  const n = t.clients.get(e);
  if (n === void 0)
    return 0;
  const r = n[n.length - 1];
  return r.id.clock + r.length;
}, gd = (t, e) => {
  let n = t.clients.get(e.id.client);
  if (n === void 0)
    n = [], t.clients.set(e.id.client, n);
  else {
    const r = n[n.length - 1];
    if (r.id.clock + r.length !== e.id.clock)
      throw Ve();
  }
  n.push(e);
}, ft = (t, e) => {
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
  throw Ve();
}, Mw = (t, e) => {
  const n = t.clients.get(e.client);
  return n[ft(n, e.clock)];
}, Nn = (
  /** @type {function(StructStore,ID):Item} */
  Mw
), As = (t, e, n) => {
  const r = ft(e, n), i = e[r];
  return i.id.clock < n && i instanceof q ? (e.splice(r + 1, 0, Wi(t, i, n - i.id.clock)), r + 1) : r;
}, je = (t, e) => {
  const n = (
    /** @type {Array<Item>} */
    t.doc.store.clients.get(e.client)
  );
  return n[As(t, n, e.clock)];
}, Xl = (t, e, n) => {
  const r = e.clients.get(n.client), i = ft(r, n.clock), o = r[i];
  return n.clock !== o.id.clock + o.length - 1 && o.constructor !== et && r.splice(i + 1, 0, Wi(t, o, n.clock - o.id.clock + 1)), o;
}, Lw = (t, e, n) => {
  const r = (
    /** @type {Array<GC|Item>} */
    t.clients.get(e.id.client)
  );
  r[ft(r, e.id.clock)] = n;
}, yd = (t, e, n, r, i) => {
  if (r === 0)
    return;
  const o = n + r;
  let s = As(t, e, n), a;
  do
    a = e[s++], o < a.id.clock + a.length && As(t, e, o), i(a);
  while (s < e.length && e[s].id.clock < o);
};
class Rw {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(e, n, r) {
    this.doc = e, this.deleteSet = new tr(), this.beforeState = fo(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = r, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const Jl = (t, e) => e.deleteSet.clients.size === 0 && !Qv(e.afterState, (n, r) => e.beforeState.get(r) !== n) ? !1 : (la(e.deleteSet), Ow(t, e), ca(t, e.deleteSet), !0), Zl = (t, e, n) => {
  const r = e._item;
  (r === null || r.id.clock < (t.beforeState.get(r.id.client) || 0) && !r.deleted) && Lt(t.changed, e, fn).add(n);
}, wi = (t, e) => {
  let n = t[e], r = t[e - 1], i = e;
  for (; i > 0; n = r, r = t[--i - 1]) {
    if (r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n)) {
      n instanceof q && n.parentSub !== null && /** @type {AbstractType<any>} */
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
}, $w = (t, e, n) => {
  for (const [r, i] of t.clients.entries()) {
    const o = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let s = i.length - 1; s >= 0; s--) {
      const a = i[s], c = a.clock + a.len;
      for (let l = ft(o, a.clock), u = o[l]; l < o.length && u.id.clock < c; u = o[++l]) {
        const d = o[l];
        if (a.clock + a.len <= d.id.clock)
          break;
        d instanceof q && d.deleted && !d.keep && n(d) && d.gc(e, !1);
      }
    }
  }
}, jw = (t, e) => {
  t.clients.forEach((n, r) => {
    const i = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let o = n.length - 1; o >= 0; o--) {
      const s = n[o], a = Hn(i.length - 1, 1 + ft(i, s.clock + s.len - 1));
      for (let c = a, l = i[c]; c > 0 && l.id.clock >= s.clock; l = i[c])
        c -= 1 + wi(i, c);
    }
  });
}, bd = (t, e) => {
  if (e < t.length) {
    const n = t[e], r = n.doc, i = r.store, o = n.deleteSet, s = n._mergeStructs;
    try {
      la(o), n.afterState = fo(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
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
          }), c.sort((u, d) => u.path.length - d.path.length), hd(l._dEH, c, n));
        });
      }), a.push(() => r.emit("afterTransaction", [n, r])), oa(a, []), n._needFormattingCleanup && ix(n);
    } finally {
      r.gc && $w(o, i, r.gcFilter), jw(o, i), n.afterState.forEach((u, d) => {
        const f = n.beforeState.get(d) || 0;
        if (f !== u) {
          const h = (
            /** @type {Array<GC|Item>} */
            i.clients.get(d)
          ), p = Bt(ft(h, f), 1);
          for (let m = h.length - 1; m >= p; )
            m -= 1 + wi(h, m);
        }
      });
      for (let u = s.length - 1; u >= 0; u--) {
        const { client: d, clock: f } = s[u].id, h = (
          /** @type {Array<GC|Item>} */
          i.clients.get(d)
        ), p = ft(h, f);
        p + 1 < h.length && wi(h, p + 1) > 1 || p > 0 && wi(h, p);
      }
      if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (mw(sa, rd, "[yjs] ", id, od, "Changed the client-id because another client seems to be using it."), r.clientID = dd()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
        const u = new Sw();
        Jl(u, n) && r.emit("update", [u.toUint8Array(), n.origin, r, n]);
      }
      if (r._observers.has("updateV2")) {
        const u = new uo();
        Jl(u, n) && r.emit("updateV2", [u.toUint8Array(), n.origin, r, n]);
      }
      const { subdocsAdded: a, subdocsLoaded: c, subdocsRemoved: l } = n;
      (a.size > 0 || l.size > 0 || c.size > 0) && (a.forEach((u) => {
        u.clientID = r.clientID, u.collectionid == null && (u.collectionid = r.collectionid), r.subdocs.add(u);
      }), l.forEach((u) => r.subdocs.delete(u)), r.emit("subdocs", [{ loaded: c, added: a, removed: l }, r, n]), l.forEach((u) => u.destroy())), t.length <= e + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, t])) : bd(t, e + 1);
    }
  }
}, X = (t, e, n = null, r = !0) => {
  const i = t._transactionCleanups;
  let o = !1, s = null;
  t._transaction === null && (o = !0, t._transaction = new Rw(t, n, r), i.push(t._transaction), i.length === 1 && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
  try {
    s = e(t._transaction);
  } finally {
    if (o) {
      const a = t._transaction === i[0];
      t._transaction = null, a && bd(i, 0);
    }
  }
  return s;
};
class Fw {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(e, n) {
    this.insertions = n, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
  }
}
const Ql = (t, e, n) => {
  Ht(t, n.deletions, (r) => {
    r instanceof q && e.scope.some((i) => i === t.doc || Dr(
      /** @type {AbstractType<any>} */
      i,
      r
    )) && ma(r, !1);
  });
}, ec = (t, e, n) => {
  let r = null;
  const i = t.doc, o = t.scope;
  X(i, (a) => {
    for (; e.length > 0 && t.currStackItem === null; ) {
      const c = i.store, l = (
        /** @type {StackItem} */
        e.pop()
      ), u = /* @__PURE__ */ new Set(), d = [];
      let f = !1;
      Ht(a, l.insertions, (h) => {
        if (h instanceof q) {
          if (h.redone !== null) {
            let { item: p, diff: m } = Es(c, h.id);
            m > 0 && (p = je(a, H(p.id.client, p.id.clock + m))), h = p;
          }
          !h.deleted && o.some((p) => p === a.doc || Dr(
            /** @type {AbstractType<any>} */
            p,
            /** @type {Item} */
            h
          )) && d.push(h);
        }
      }), Ht(a, l.deletions, (h) => {
        h instanceof q && o.some((p) => p === a.doc || Dr(
          /** @type {AbstractType<any>} */
          p,
          h
        )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !nr(l.insertions, h.id) && u.add(h);
      }), u.forEach((h) => {
        f = jd(a, h, u, l.insertions, t.ignoreRemoteMapChanges, t) !== null || f;
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
class vd extends Wu {
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
      ms(e) ? e[0].doc : e instanceof wn ? e : e.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = a, this.addToScope(e), this.deleteFilter = i, o.add(this), this.trackedOrigins = o, this.captureTransaction = r, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = s, this.captureTimeout = n, this.afterTransactionHandler = (c) => {
      if (!this.captureTransaction(c) || !this.scope.some((g) => c.changedParentTypes.has(
        /** @type {AbstractType<any>} */
        g
      ) || g === this.doc) || !this.trackedOrigins.has(c.origin) && (!c.origin || !this.trackedOrigins.has(c.origin.constructor)))
        return;
      const l = this.undoing, u = this.redoing, d = l ? this.redoStack : this.undoStack;
      l ? this.stopCapturing() : u || this.clear(!1, !0);
      const f = new tr();
      c.afterState.forEach((g, b) => {
        const v = c.beforeState.get(b) || 0, w = g - v;
        w > 0 && Nr(f, b, v, w);
      });
      const h = j0();
      let p = !1;
      if (this.lastChange > 0 && h - this.lastChange < this.captureTimeout && d.length > 0 && !l && !u) {
        const g = d[d.length - 1];
        g.deletions = xs([g.deletions, c.deleteSet]), g.insertions = xs([g.insertions, f]);
      } else
        d.push(new Fw(c.deleteSet, f)), p = !0;
      !l && !u && (this.lastChange = h), Ht(
        c,
        c.deleteSet,
        /** @param {Item|GC} item */
        (g) => {
          g instanceof q && this.scope.some((b) => b === c.doc || Dr(
            /** @type {AbstractType<any>} */
            b,
            g
          )) && ma(g, !0);
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
    e = ms(e) ? e : [e], e.forEach((r) => {
      n.has(r) || (n.add(r), (r instanceof pe ? r.doc !== this.doc : r !== this.doc) && ad("[yjs#509] Not same Y.Doc"), this.scope.push(r));
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
      e && (this.undoStack.forEach((i) => Ql(r, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => Ql(r, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: e, redoStackCleared: n }]);
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
      e = ec(this, this.undoStack, "undo");
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
      e = ec(this, this.redoStack, "redo");
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
function* zw(t) {
  const e = te(t.restDecoder);
  for (let n = 0; n < e; n++) {
    const r = te(t.restDecoder), i = t.readClient();
    let o = te(t.restDecoder);
    for (let s = 0; s < r; s++) {
      const a = t.readInfo();
      if (a === 10) {
        const c = te(t.restDecoder);
        yield new st(H(i, o), c), o += c;
      } else if ((ao & a) !== 0) {
        const c = (a & (Et | Ie)) === 0, l = new q(
          H(i, o),
          null,
          // left
          (a & Ie) === Ie ? t.readLeftID() : null,
          // origin
          null,
          // right
          (a & Et) === Et ? t.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          c ? t.readParentInfo() ? t.readString() : t.readLeftID() : null,
          // parent
          c && (a & Or) === Or ? t.readString() : null,
          // parentSub
          Fd(t, a)
          // item content
        );
        yield l, o += l.length;
      } else {
        const c = t.readLen();
        yield new et(H(i, o), c), o += c;
      }
    }
  }
}
class Bw {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(e, n) {
    this.gen = zw(e), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === st);
    return this.curr;
  }
}
class Vw {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(e) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
  }
}
const Hw = (t, e) => {
  if (t.constructor === et) {
    const { client: n, clock: r } = t.id;
    return new et(H(n, r + e), t.length - e);
  } else if (t.constructor === st) {
    const { client: n, clock: r } = t.id;
    return new st(H(n, r + e), t.length - e);
  } else {
    const n = (
      /** @type {Item} */
      t
    ), { client: r, clock: i } = n.id;
    return new q(
      H(r, i + e),
      null,
      H(r, i + e - 1),
      null,
      n.rightOrigin,
      n.parent,
      n.parentSub,
      n.content.splice(e)
    );
  }
}, tc = (t, e = ji, n = uo) => {
  if (t.length === 1)
    return t[0];
  const r = t.map((u) => new e(na(u)));
  let i = r.map((u) => new Bw(u, !0)), o = null;
  const s = new n(), a = new Vw(s);
  for (; i = i.filter((f) => f.curr !== null), i.sort(
    /** @type {function(any,any):number} */
    (f, h) => {
      if (f.curr.id.client === h.curr.id.client) {
        const p = f.curr.id.clock - h.curr.id.clock;
        return p === 0 ? f.curr.constructor === h.curr.constructor ? 0 : f.curr.constructor === st ? 1 : -1 : p;
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
        if (o.struct.constructor === st)
          o.struct.length = f.id.clock + f.length - o.struct.id.clock;
        else {
          ar(a, o.struct, o.offset);
          const p = f.id.clock - o.struct.id.clock - o.struct.length;
          o = { struct: new st(H(d, o.struct.id.clock + o.struct.length), p), offset: 0 };
        }
      else {
        const p = o.struct.id.clock + o.struct.length - f.id.clock;
        p > 0 && (o.struct.constructor === st ? o.struct.length -= p : f = Hw(f, p)), o.struct.mergeWith(
          /** @type {any} */
          f
        ) || (ar(a, o.struct, o.offset), o = { struct: f, offset: 0 }, u.next());
      }
    } else
      o = { struct: (
        /** @type {Item | GC} */
        u.curr
      ), offset: 0 }, u.next();
    for (let f = u.curr; f !== null && f.id.client === d && f.id.clock === o.struct.id.clock + o.struct.length && f.constructor !== st; f = u.next())
      ar(a, o.struct, o.offset), o = { struct: f, offset: 0 };
  }
  o !== null && (ar(a, o.struct, o.offset), o = null), Ww(a);
  const c = r.map((u) => vw(u)), l = xs(c);
  return ca(s, l), s.toUint8Array();
}, wd = (t) => {
  t.written > 0 && (t.clientStructs.push({ written: t.written, restEncoder: lt(t.encoder.restEncoder) }), t.encoder.restEncoder = qr(), t.written = 0);
}, ar = (t, e, n) => {
  t.written > 0 && t.currClient !== e.id.client && wd(t), t.written === 0 && (t.currClient = e.id.client, t.encoder.writeClient(e.id.client), U(t.encoder.restEncoder, e.id.clock + n)), e.write(t.encoder, n), t.written++;
}, Ww = (t) => {
  wd(t);
  const e = t.encoder.restEncoder;
  U(e, t.clientStructs.length);
  for (let n = 0; n < t.clientStructs.length; n++) {
    const r = t.clientStructs[n];
    U(e, r.written), lo(e, r.restEncoder);
  }
}, nc = "You must not compute changes after the event-handler fired.";
class ho {
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
    return this._path || (this._path = Uw(this.currentTarget, this.target));
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
    return nr(this.transaction.deleteSet, e.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Vt(nc);
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
        throw Vt(nc);
      const n = this.target, r = fn(), i = fn(), o = [];
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
const Uw = (t, e) => {
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
}, Ee = () => {
  ad("Invalid access: Add Yjs type to a document before reading data.");
}, xd = 80;
let da = 0;
class Kw {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(e, n) {
    e.marker = !0, this.p = e, this.index = n, this.timestamp = da++;
  }
}
const Gw = (t) => {
  t.timestamp = da++;
}, Sd = (t, e, n) => {
  t.p.marker = !1, t.p = e, e.marker = !0, t.index = n, t.timestamp = da++;
}, Yw = (t, e, n) => {
  if (t.length >= xd) {
    const r = t.reduce((i, o) => i.timestamp < o.timestamp ? i : o);
    return Sd(r, e, n), r;
  } else {
    const r = new Kw(e, n);
    return t.push(r), r;
  }
}, po = (t, e) => {
  if (t._start === null || e === 0 || t._searchMarker === null)
    return null;
  const n = t._searchMarker.length === 0 ? null : t._searchMarker.reduce((o, s) => yi(e - o.index) < yi(e - s.index) ? o : s);
  let r = t._start, i = 0;
  for (n !== null && (r = n.p, i = n.index, Gw(n)); r.right !== null && i < e; ) {
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
  r.parent.length / xd ? (Sd(n, r, i), n) : Yw(t._searchMarker, r, i);
}, Ir = (t, e, n) => {
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
    (e < i.index || n > 0 && e === i.index) && (i.index = Bt(e, i.index + n));
  }
}, mo = (t, e, n) => {
  const r = t, i = e.changedParentTypes;
  for (; Lt(i, t, () => []).push(n), t._item !== null; )
    t = /** @type {AbstractType<any>} */
    t._item.parent;
  hd(r._eH, n, e);
};
class pe {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = Gl(), this._dEH = Gl(), this._searchMarker = null;
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
    throw dt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw dt();
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
    Yl(this._eH, e);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(e) {
    Yl(this._dEH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(e) {
    ql(this._eH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(e) {
    ql(this._dEH, e);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const kd = (t, e, n) => {
  t.doc ?? Ee(), e < 0 && (e = t._length + e), n < 0 && (n = t._length + n);
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
}, Ad = (t) => {
  t.doc ?? Ee();
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
}, Cd = (t, e) => {
  const n = [];
  let r = t._start;
  for (; r !== null; ) {
    if (r.countable && tn(r, e)) {
      const i = r.content.getContent();
      for (let o = 0; o < i.length; o++)
        n.push(i[o]);
    }
    r = r.right;
  }
  return n;
}, Mr = (t, e) => {
  let n = 0, r = t._start;
  for (t.doc ?? Ee(); r !== null; ) {
    if (r.countable && !r.deleted) {
      const i = r.content.getContent();
      for (let o = 0; o < i.length; o++)
        e(i[o], n++, t);
    }
    r = r.right;
  }
}, Ed = (t, e) => {
  const n = [];
  return Mr(t, (r, i) => {
    n.push(e(r, i, t));
  }), n;
}, qw = (t) => {
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
}, Od = (t, e) => {
  t.doc ?? Ee();
  const n = po(t, e);
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
    l.length > 0 && (i = new q(H(s, le(a, s)), i, i && i.lastId, c, c && c.id, e, null, new mn(l)), i.integrate(t, 0), l = []);
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
              i = new q(H(s, le(a, s)), i, i && i.lastId, c, c && c.id, e, null, new Xr(new Uint8Array(
                /** @type {Uint8Array} */
                d
              ))), i.integrate(t, 0);
              break;
            case wn:
              i = new q(H(s, le(a, s)), i, i && i.lastId, c, c && c.id, e, null, new Jr(
                /** @type {Doc} */
                d
              )), i.integrate(t, 0);
              break;
            default:
              if (d instanceof pe)
                i = new q(H(s, le(a, s)), i, i && i.lastId, c, c && c.id, e, null, new mt(d)), i.integrate(t, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), u();
}, _d = () => Vt("Length exceeded!"), Td = (t, e, n, r) => {
  if (n > e._length)
    throw _d();
  if (n === 0)
    return e._searchMarker && Ir(e._searchMarker, n, r.length), zi(t, e, null, r);
  const i = n, o = po(e, n);
  let s = e._start;
  for (o !== null && (s = o.p, n -= o.index, n === 0 && (s = s.prev, n += s && s.countable && !s.deleted ? s.length : 0)); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (n <= s.length) {
        n < s.length && je(t, H(s.id.client, s.id.clock + n));
        break;
      }
      n -= s.length;
    }
  return e._searchMarker && Ir(e._searchMarker, i, r.length), zi(t, e, s, r);
}, Xw = (t, e, n) => {
  let i = (e._searchMarker || []).reduce((o, s) => s.index > o.index ? s : o, { index: 0, p: e._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return zi(t, e, i, n);
}, Nd = (t, e, n, r) => {
  if (r === 0)
    return;
  const i = n, o = r, s = po(e, n);
  let a = e._start;
  for (s !== null && (a = s.p, n -= s.index); a !== null && n > 0; a = a.right)
    !a.deleted && a.countable && (n < a.length && je(t, H(a.id.client, a.id.clock + n)), n -= a.length);
  for (; r > 0 && a !== null; )
    a.deleted || (r < a.length && je(t, H(a.id.client, a.id.clock + r)), a.delete(t), r -= a.length), a = a.right;
  if (r > 0)
    throw _d();
  e._searchMarker && Ir(
    e._searchMarker,
    i,
    -o + r
    /* in case we remove the above exception */
  );
}, Bi = (t, e, n) => {
  const r = e._map.get(n);
  r !== void 0 && r.delete(t);
}, fa = (t, e, n, r) => {
  const i = e._map.get(n) || null, o = t.doc, s = o.clientID;
  let a;
  if (r == null)
    a = new mn([r]);
  else
    switch (r.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        a = new mn([r]);
        break;
      case Uint8Array:
        a = new Xr(
          /** @type {Uint8Array} */
          r
        );
        break;
      case wn:
        a = new Jr(
          /** @type {Doc} */
          r
        );
        break;
      default:
        if (r instanceof pe)
          a = new mt(r);
        else
          throw new Error("Unexpected content type");
    }
  new q(H(s, le(o.store, s)), i, i && i.lastId, null, null, e, n, a).integrate(t, 0);
}, ha = (t, e) => {
  t.doc ?? Ee();
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Pd = (t) => {
  const e = {};
  return t.doc ?? Ee(), t._map.forEach((n, r) => {
    n.deleted || (e[r] = n.content.getContent()[n.length - 1]);
  }), e;
}, Dd = (t, e) => {
  t.doc ?? Ee();
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted;
}, Jw = (t, e) => {
  const n = {};
  return t._map.forEach((r, i) => {
    let o = r;
    for (; o !== null && (!e.sv.has(o.id.client) || o.id.clock >= (e.sv.get(o.id.client) || 0)); )
      o = o.left;
    o !== null && tn(o, e) && (n[i] = o.content.getContent()[o.length - 1]);
  }), n;
}, ai = (t) => (t.doc ?? Ee(), gw(
  t._map.entries(),
  /** @param {any} entry */
  (e) => !e[1].deleted
));
class Zw extends ho {
}
class Pn extends pe {
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
    const n = new Pn();
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
    return new Pn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const e = new Pn();
    return e.insert(0, this.toArray().map(
      (n) => n instanceof pe ? (
        /** @type {typeof el} */
        n.clone()
      ) : n
    )), e;
  }
  get length() {
    return this.doc ?? Ee(), this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    super._callObserver(e, n), mo(this, e, new Zw(this, e));
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
    this.doc !== null ? X(this.doc, (r) => {
      Td(
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
    this.doc !== null ? X(this.doc, (n) => {
      Xw(
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
    this.doc !== null ? X(this.doc, (r) => {
      Nd(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(e) {
    return Od(this, e);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return Ad(this);
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
    return kd(this, e, n);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((e) => e instanceof pe ? e.toJSON() : e);
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
    return Ed(
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
    Mr(this, e);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return qw(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(kx);
  }
}
const Qw = (t) => new Pn();
class ex extends ho {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(e, n, r) {
    super(e, n), this.keysChanged = r;
  }
}
class Kn extends pe {
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
    return new Kn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const e = new Kn();
    return this.forEach((n, r) => {
      e.set(r, n instanceof pe ? (
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
    mo(this, e, new ex(this, e, n));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? Ee();
    const e = {};
    return this._map.forEach((n, r) => {
      if (!n.deleted) {
        const i = n.content.getContent()[n.length - 1];
        e[r] = i instanceof pe ? i.toJSON() : i;
      }
    }), e;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...ai(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return jo(
      ai(this),
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
    return jo(
      ai(this),
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
    return jo(
      ai(this),
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
    this.doc ?? Ee(), this._map.forEach((n, r) => {
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
    this.doc !== null ? X(this.doc, (n) => {
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
    return this.doc !== null ? X(this.doc, (r) => {
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
    return Dd(this, e);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? X(this.doc, (e) => {
      this.forEach(function(n, r, i) {
        Bi(e, i, r);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(Ax);
  }
}
const tx = (t) => new Kn(), zt = (t, e) => t === e || typeof t == "object" && typeof e == "object" && t && e && K0(t, e);
class Cs {
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
    this.right === null && Ve(), this.right.content.constructor === ce ? this.right.deleted || rr(
      this.currentAttributes,
      /** @type {ContentFormat} */
      this.right.content
    ) : this.right.deleted || (this.index += this.right.length), this.left = this.right, this.right = this.right.right;
  }
}
const rc = (t, e, n) => {
  for (; e.right !== null && n > 0; )
    e.right.content.constructor === ce ? e.right.deleted || rr(
      e.currentAttributes,
      /** @type {ContentFormat} */
      e.right.content
    ) : e.right.deleted || (n < e.right.length && je(t, H(e.right.id.client, e.right.id.clock + n)), e.index += e.right.length, n -= e.right.length), e.left = e.right, e.right = e.right.right;
  return e;
}, li = (t, e, n, r) => {
  const i = /* @__PURE__ */ new Map(), o = r ? po(e, n) : null;
  if (o) {
    const s = new Cs(o.p.left, o.p, o.index, i);
    return rc(t, s, n - o.index);
  } else {
    const s = new Cs(null, e._start, 0, i);
    return rc(t, s, n);
  }
}, Id = (t, e, n, r) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === ce && zt(
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
    const c = n.left, l = n.right, u = new q(H(o, le(i.store, o)), c, c && c.lastId, l, l && l.id, e, null, new ce(a, s));
    u.integrate(t, 0), n.right = u, n.forward();
  });
}, rr = (t, e) => {
  const { key: n, value: r } = e;
  r === null ? t.delete(n) : t.set(n, r);
}, Md = (t, e) => {
  for (; t.right !== null; ) {
    if (!(t.right.deleted || t.right.content.constructor === ce && zt(
      e[
        /** @type {ContentFormat} */
        t.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      t.right.content.value
    ))) break;
    t.forward();
  }
}, Ld = (t, e, n, r) => {
  const i = t.doc, o = i.clientID, s = /* @__PURE__ */ new Map();
  for (const a in r) {
    const c = r[a], l = n.currentAttributes.get(a) ?? null;
    if (!zt(l, c)) {
      s.set(a, l);
      const { left: u, right: d } = n;
      n.right = new q(H(o, le(i.store, o)), u, u && u.lastId, d, d && d.id, e, null, new ce(a, c)), n.right.integrate(t, 0), n.forward();
    }
  }
  return s;
}, Bo = (t, e, n, r, i) => {
  n.currentAttributes.forEach((f, h) => {
    i[h] === void 0 && (i[h] = null);
  });
  const o = t.doc, s = o.clientID;
  Md(n, i);
  const a = Ld(t, e, n, i), c = r.constructor === String ? new ht(
    /** @type {string} */
    r
  ) : r instanceof pe ? new mt(r) : new xn(r);
  let { left: l, right: u, index: d } = n;
  e._searchMarker && Ir(e._searchMarker, n.index, c.getLength()), u = new q(H(s, le(o.store, s)), l, l && l.lastId, u, u && u.id, e, null, c), u.integrate(t, 0), n.right = u, n.index = d, n.forward(), Id(t, e, n, a);
}, ic = (t, e, n, r, i) => {
  const o = t.doc, s = o.clientID;
  Md(n, i);
  const a = Ld(t, e, n, i);
  e: for (; n.right !== null && (r > 0 || a.size > 0 && (n.right.deleted || n.right.content.constructor === ce)); ) {
    if (!n.right.deleted)
      switch (n.right.content.constructor) {
        case ce: {
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
          r < n.right.length && je(t, H(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
          break;
      }
    n.forward();
  }
  if (r > 0) {
    let c = "";
    for (; r > 0; r--)
      c += `
`;
    n.right = new q(H(s, le(o.store, s)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, e, null, new ht(c)), n.right.integrate(t, 0), n.forward();
  }
  Id(t, e, n, a);
}, Rd = (t, e, n, r, i) => {
  let o = e;
  const s = ut();
  for (; o && (!o.countable || o.deleted); ) {
    if (!o.deleted && o.content.constructor === ce) {
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
      if (l.constructor === ce) {
        const { key: u, value: d } = (
          /** @type {ContentFormat} */
          l
        ), f = r.get(u) ?? null;
        (s.get(u) !== l || f === d) && (e.delete(t), a++, !c && (i.get(u) ?? null) === d && f !== d && (f === null ? i.delete(u) : i.set(u, f))), !c && !e.deleted && rr(
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
}, nx = (t, e) => {
  for (; e && e.right && (e.right.deleted || !e.right.countable); )
    e = e.right;
  const n = /* @__PURE__ */ new Set();
  for (; e && (e.deleted || !e.countable); ) {
    if (!e.deleted && e.content.constructor === ce) {
      const r = (
        /** @type {ContentFormat} */
        e.content.key
      );
      n.has(r) ? e.delete(t) : n.add(r);
    }
    e = e.left;
  }
}, rx = (t) => {
  let e = 0;
  return X(
    /** @type {Doc} */
    t.doc,
    (n) => {
      let r = (
        /** @type {Item} */
        t._start
      ), i = t._start, o = ut();
      const s = ps(o);
      for (; i; )
        i.deleted === !1 && (i.content.constructor === ce ? rr(
          s,
          /** @type {ContentFormat} */
          i.content
        ) : (e += Rd(n, r, i, o, s), o = ps(s), r = i)), i = i.right;
    }
  ), e;
}, ix = (t) => {
  const e = /* @__PURE__ */ new Set(), n = t.doc;
  for (const [r, i] of t.afterState.entries()) {
    const o = t.beforeState.get(r) || 0;
    i !== o && yd(
      t,
      /** @type {Array<Item|GC>} */
      n.store.clients.get(r),
      o,
      i,
      (s) => {
        !s.deleted && /** @type {Item} */
        s.content.constructor === ce && s.constructor !== et && e.add(
          /** @type {any} */
          s.parent
        );
      }
    );
  }
  X(n, (r) => {
    Ht(t, t.deleteSet, (i) => {
      if (i instanceof et || !/** @type {YText} */
      i.parent._hasFormatting || e.has(
        /** @type {YText} */
        i.parent
      ))
        return;
      const o = (
        /** @type {YText} */
        i.parent
      );
      i.content.constructor === ce ? e.add(o) : nx(r, i);
    });
    for (const i of e)
      rx(i);
  });
}, oc = (t, e, n) => {
  const r = n, i = ps(e.currentAttributes), o = e.right;
  for (; n > 0 && e.right !== null; ) {
    if (e.right.deleted === !1)
      switch (e.right.content.constructor) {
        case mt:
        case xn:
        case ht:
          n < e.right.length && je(t, H(e.right.id.client, e.right.id.clock + n)), n -= e.right.length, e.right.delete(t);
          break;
      }
    e.forward();
  }
  o && Rd(t, o, e.right, i, e.currentAttributes);
  const s = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (e.left || e.right).parent
  );
  return s._searchMarker && Ir(s._searchMarker, e.index, -r + n), e;
};
class ox extends ho {
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
      X(e, (r) => {
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
                u > 0 && (h = { retain: u }, W0(c) || (h.attributes = V0({}, c))), u = 0;
                break;
            }
            h && n.push(h), a = null;
          }
        };
        for (; s !== null; ) {
          switch (s.content.constructor) {
            case mt:
            case xn:
              this.adds(s) ? this.deletes(s) || (f(), a = "insert", l = s.content.getContent()[0], f()) : this.deletes(s) ? (a !== "delete" && (f(), a = "delete"), d += 1) : s.deleted || (a !== "retain" && (f(), a = "retain"), u += 1);
              break;
            case ht:
              this.adds(s) ? this.deletes(s) || (a !== "insert" && (f(), a = "insert"), l += /** @type {ContentString} */
              s.content.str) : this.deletes(s) ? (a !== "delete" && (f(), a = "delete"), d += s.length) : s.deleted || (a !== "retain" && (f(), a = "retain"), u += s.length);
              break;
            case ce: {
              const { key: h, value: p } = (
                /** @type {ContentFormat} */
                s.content
              );
              if (this.adds(s)) {
                if (!this.deletes(s)) {
                  const m = i.get(h) ?? null;
                  zt(m, p) ? p !== null && s.delete(r) : (a === "retain" && f(), zt(p, o.get(h) ?? null) ? delete c[h] : c[h] = p);
                }
              } else if (this.deletes(s)) {
                o.set(h, p);
                const m = i.get(h) ?? null;
                zt(m, p) || (a === "retain" && f(), c[h] = m);
              } else if (!s.deleted) {
                o.set(h, p);
                const m = c[h];
                m !== void 0 && (zt(m, p) ? m !== null && s.delete(r) : (a === "retain" && f(), p === null ? delete c[h] : c[h] = p));
              }
              s.deleted || (a === "insert" && f(), rr(
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
class Wt extends pe {
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
    return this.doc ?? Ee(), this._length;
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
    return new Wt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const e = new Wt();
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
    const r = new ox(this, e, n);
    mo(this, e, r), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? Ee();
    let e = "", n = this._start;
    for (; n !== null; )
      !n.deleted && n.countable && n.content.constructor === ht && (e += /** @type {ContentString} */
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
    this.doc !== null ? X(this.doc, (r) => {
      const i = new Cs(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let o = 0; o < e.length; o++) {
        const s = e[o];
        if (s.insert !== void 0) {
          const a = !n && typeof s.insert == "string" && o === e.length - 1 && i.right === null && s.insert.slice(-1) === `
` ? s.insert.slice(0, -1) : s.insert;
          (typeof a != "string" || a.length > 0) && Bo(r, this, i, a, s.attributes || {});
        } else s.retain !== void 0 ? ic(r, this, i, s.retain, s.attributes || {}) : s.delete !== void 0 && oc(r, i, s.delete);
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
    this.doc ?? Ee();
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
        if (tn(c, e) || n !== void 0 && tn(c, n))
          switch (c.content.constructor) {
            case ht: {
              const d = o.get("ychange");
              e !== void 0 && !tn(c, e) ? (d === void 0 || d.user !== c.id.client || d.type !== "removed") && (l(), o.set("ychange", r ? r("removed", c.id) : { type: "removed" })) : n !== void 0 && !tn(c, n) ? (d === void 0 || d.user !== c.id.client || d.type !== "added") && (l(), o.set("ychange", r ? r("added", c.id) : { type: "added" })) : d !== void 0 && (l(), o.delete("ychange")), a += /** @type {ContentString} */
              c.content.str;
              break;
            }
            case mt:
            case xn: {
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
            case ce:
              tn(c, e) && (l(), rr(
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
    return e || n ? X(s, (d) => {
      e && ks(d, e), n && ks(d, n), u();
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
    i !== null ? X(i, (o) => {
      const s = li(o, this, e, !r);
      r || (r = {}, s.currentAttributes.forEach((a, c) => {
        r[c] = a;
      })), Bo(o, this, s, n, r);
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
    i !== null ? X(i, (o) => {
      const s = li(o, this, e, !r);
      Bo(o, this, s, n, r || {});
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
    r !== null ? X(r, (i) => {
      oc(i, li(i, this, e, !0), n);
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
    i !== null ? X(i, (o) => {
      const s = li(o, this, e, !1);
      s.right !== null && ic(o, this, s, n, r);
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
    this.doc !== null ? X(this.doc, (n) => {
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
    this.doc !== null ? X(this.doc, (r) => {
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
    return Pd(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(Cx);
  }
}
const sx = (t) => new Wt();
class Vo {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(e, n = () => !0) {
    this._filter = n, this._root = e, this._currentNode = /** @type {Item} */
    e._start, this._firstCall = !0, e.doc ?? Ee();
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
        e.content.type, !e.deleted && (n.constructor === ke || n.constructor === pn) && n._start !== null)
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
class pn extends pe {
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
    return new pn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const e = new pn();
    return e.insert(0, this.toArray().map((n) => n instanceof pe ? n.clone() : n)), e;
  }
  get length() {
    return this.doc ?? Ee(), this._prelimContent === null ? this._length : this._prelimContent.length;
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
    return new Vo(this, e);
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
    const r = new Vo(this, (i) => i.nodeName && i.nodeName.toUpperCase() === e).next();
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
    return e = e.toUpperCase(), hn(new Vo(this, (n) => n.nodeName && n.nodeName.toUpperCase() === e));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    mo(this, e, new cx(this, n, e));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return Ed(this, (e) => e.toString()).join("");
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
    return r !== void 0 && r._createAssociation(i, this), Mr(this, (o) => {
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
    this.doc !== null ? X(this.doc, (r) => {
      Td(r, this, e, n);
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
      X(this.doc, (r) => {
        const i = e && e instanceof pe ? e._item : e;
        zi(r, this, i, n);
      });
    else {
      const r = (
        /** @type {Array<any>} */
        this._prelimContent
      ), i = e === null ? 0 : r.findIndex((o) => o === e) + 1;
      if (i === 0 && e !== null)
        throw Vt("Reference item not found");
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
    this.doc !== null ? X(this.doc, (r) => {
      Nd(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return Ad(this);
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
    return Od(this, e);
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
    return kd(this, e, n);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    Mr(this, e);
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
    e.writeTypeRef(Ox);
  }
}
const ax = (t) => new pn();
class ke extends pn {
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
    return new ke(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const e = new ke(this.nodeName), n = this.getAttributes();
    return H0(n, (r, i) => {
      typeof r == "string" && e.setAttribute(i, r);
    }), e.insert(0, this.toArray().map((r) => r instanceof pe ? r.clone() : r)), e;
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
    this.doc !== null ? X(this.doc, (n) => {
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
    this.doc !== null ? X(this.doc, (r) => {
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
      Dd(this, e)
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
      e ? Jw(this, e) : Pd(this)
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
    return Mr(this, (s) => {
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
    e.writeTypeRef(Ex), e.writeKey(this.nodeName);
  }
}
const lx = (t) => new ke(t.readKey());
class cx extends ho {
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
class Vi extends Kn {
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
    e.writeTypeRef(_x), e.writeKey(this.hookName);
  }
}
const ux = (t) => new Vi(t.readKey());
class Be extends Wt {
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
    return new Be();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const e = new Be();
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
    e.writeTypeRef(Tx);
  }
}
const dx = (t) => new Be();
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
    throw dt();
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
    throw dt();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    throw dt();
  }
}
const fx = 0;
class et extends pa {
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
    n > 0 && (this.id.clock += n, this.length -= n), gd(e.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeInfo(fx), e.writeLen(this.length - n);
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
    throw dt();
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
const hx = (t) => new Xr(t.readBuf());
class Lr {
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
    return new Lr(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(e) {
    const n = new Lr(this.len - e);
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
    Nr(e.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
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
const px = (t) => new Lr(t.readLen()), $d = (t, e) => new wn({ guid: t, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
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
    return new Jr($d(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(e) {
    throw dt();
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
const mx = (t) => new Jr($d(t.readString(), t.readAny()));
class xn {
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
    return new xn(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(e) {
    throw dt();
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
const gx = (t) => new xn(t.readJSON());
class ce {
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
    return new ce(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(e) {
    throw dt();
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
const yx = (t) => new ce(t.readKey(), t.readJSON());
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
const bx = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++) {
    const i = t.readString();
    i === "undefined" ? n.push(void 0) : n.push(JSON.parse(i));
  }
  return new Hi(n);
}, vx = $i("node_env") === "development";
class mn {
  /**
   * @param {Array<any>} arr
   */
  constructor(e) {
    this.arr = e, vx && Qu(e);
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
    return new mn(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(e) {
    const n = new mn(this.arr.slice(e));
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
const wx = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++)
    n.push(t.readAny());
  return new mn(n);
};
class ht {
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
    return new ht(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(e) {
    const n = new ht(this.str.slice(e));
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
const xx = (t) => new ht(t.readString()), Sx = [
  Qw,
  tx,
  sx,
  lx,
  ax,
  ux,
  dx
], kx = 0, Ax = 1, Cx = 2, Ex = 3, Ox = 4, _x = 5, Tx = 6;
class mt {
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
    return new mt(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(e) {
    throw dt();
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
const Nx = (t) => new mt(Sx[t.readTypeRef()](t)), Es = (t, e) => {
  let n = e, r = 0, i;
  do
    r > 0 && (n = H(n.client, n.clock + r)), i = Nn(t, n), r = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof q);
  return {
    item: i,
    diff: r
  };
}, ma = (t, e) => {
  for (; t !== null && t.keep !== e; )
    t.keep = e, t = /** @type {AbstractType<any>} */
    t.parent._item;
}, Wi = (t, e, n) => {
  const { client: r, clock: i } = e.id, o = new q(
    H(r, i + n),
    e,
    H(r, i + n - 1),
    e.right,
    e.rightOrigin,
    e.parent,
    e.parentSub,
    e.content.splice(n)
  );
  return e.deleted && o.markDeleted(), e.keep && (o.keep = !0), e.redone !== null && (o.redone = H(e.redone.client, e.redone.clock + n)), e.right = o, o.right !== null && (o.right.left = o), t._mergeStructs.push(o), o.parentSub !== null && o.right === null && o.parent._map.set(o.parentSub, o), e.length = n, o;
}, sc = (t, e) => t0(
  t,
  /** @param {StackItem} s */
  (n) => nr(n.deletions, e)
), jd = (t, e, n, r, i, o) => {
  const s = t.doc, a = s.store, c = s.clientID, l = e.redone;
  if (l !== null)
    return je(t, l);
  let u = (
    /** @type {AbstractType<any>} */
    e.parent._item
  ), d = null, f;
  if (u !== null && u.deleted === !0) {
    if (u.redone === null && (!n.has(u) || jd(t, u, n, r, i, o) === null))
      return null;
    for (; u.redone !== null; )
      u = je(t, u.redone);
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
        b = b.redone === null ? null : je(t, b.redone);
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
        b = b.redone === null ? null : je(t, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === u) {
        f = b;
        break;
      }
      f = f.right;
    }
  } else if (f = null, e.right && !i) {
    for (d = e; d !== null && d.right !== null && (d.right.redone || nr(r, d.right.id) || sc(o.undoStack, d.right.id) || sc(o.redoStack, d.right.id)); )
      for (d = d.right; d.redone; ) d = je(t, d.redone);
    if (d && d.right !== null)
      return null;
  } else
    d = h._map.get(e.parentSub) || null;
  const p = le(a, c), m = H(c, p), g = new q(
    m,
    d,
    d && d.lastId,
    f,
    f && f.id,
    h,
    e.parentSub,
    e.content.copy()
  );
  return e.redone = m, ma(g, !0), g.integrate(t, 0), g;
};
class q extends pa {
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
    super(e, c.getLength()), this.origin = r, this.left = n, this.right = i, this.rightOrigin = o, this.parent = s, this.parentSub = a, this.redone = null, this.content = c, this.info = this.content.isCountable() ? Rl : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(e) {
    (this.info & Lo) > 0 !== e && (this.info ^= Lo);
  }
  get marker() {
    return (this.info & Lo) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & Ll) > 0;
  }
  set keep(e) {
    this.keep !== e && (this.info ^= Ll);
  }
  get countable() {
    return (this.info & Rl) > 0;
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
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= le(n, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= le(n, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === Tn && this.id.client !== this.parent.client && this.parent.clock >= le(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = Xl(e, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = je(e, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === et || this.right && this.right.constructor === et)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === q ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === q && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === Tn) {
      const r = Nn(n, this.parent);
      r.constructor === et ? this.parent = null : this.parent = /** @type {ContentType} */
      r.content.type;
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    if (n > 0 && (this.id.clock += n, this.left = Xl(e, e.doc.store, H(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
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
          if (s.add(i), o.add(i), oi(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              r = i, o.clear();
            else if (oi(this.rightOrigin, i.rightOrigin))
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
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), gd(e.doc.store, this), this.content.integrate(e, this), Zl(
        e,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      ), /** @type {AbstractType<any>} */
      (this.parent._item !== null && /** @type {AbstractType<any>} */
      this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
    } else
      new et(this.id, this.length).integrate(e, 0);
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
    return this.length === 1 ? this.id : H(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(e) {
    if (this.constructor === e.constructor && oi(e.origin, this.lastId) && this.right === e && oi(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
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
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), Nr(e.deleteSet, this.id.client, this.id.clock, this.length), Zl(e, n, this.parentSub), this.content.delete(e);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(e, n) {
    if (!this.deleted)
      throw Ve();
    this.content.gc(e), n ? Lw(e, this, new et(this.id, this.length)) : this.content = new Lr(this.length);
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
    const r = n > 0 ? H(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, o = this.parentSub, s = this.content.getRef() & ao | (r === null ? 0 : Ie) | // origin is defined
    (i === null ? 0 : Et) | // right origin is defined
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
      } else a.constructor === String ? (e.writeParentInfo(!0), e.writeString(a)) : a.constructor === Tn ? (e.writeParentInfo(!1), e.writeLeftID(a)) : Ve();
      o !== null && e.writeString(o);
    }
    this.content.write(e, n);
  }
}
const Fd = (t, e) => Px[e & ao](t), Px = [
  () => {
    Ve();
  },
  // GC is not ItemContent
  px,
  // 1
  bx,
  // 2
  hx,
  // 3
  xx,
  // 4
  gx,
  // 5
  yx,
  // 6
  Nx,
  // 7
  wx,
  // 8
  mx,
  // 9
  () => {
    Ve();
  }
  // 10 - Skip is not ItemContent
], Dx = 10;
class st extends pa {
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
    Ve();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeInfo(Dx), U(e.restEncoder, this.length - n);
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
const zd = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), Bd = "__ $YJS$ __";
zd[Bd] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
zd[Bd] = !0;
const Ix = () => {
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
}, Mx = /[\uD800-\uDBFF]/, Lx = /[\uDC00-\uDFFF]/, Rx = (t, e) => {
  let n = 0, r = 0;
  for (; n < t.length && n < e.length && t[n] === e[n]; )
    n++;
  for (n > 0 && Mx.test(t[n - 1]) && n--; r + n < t.length && r + n < e.length && t[t.length - r - 1] === e[e.length - r - 1]; )
    r++;
  return r > 0 && Lx.test(t[t.length - r]) && r--, {
    index: n,
    remove: t.length - n - r,
    insert: e.slice(n, e.length - r)
  };
}, $x = Rx, oe = new We("y-sync"), Ot = new We("y-undo");
new We("yjs-cursor");
const bt = (t, e) => t >>> e | t << 32 - e, jx = (t) => bt(t, 2) ^ bt(t, 13) ^ bt(t, 22), Fx = (t) => bt(t, 6) ^ bt(t, 11) ^ bt(t, 25), zx = (t) => bt(t, 7) ^ bt(t, 18) ^ t >>> 3, Bx = (t) => bt(t, 17) ^ bt(t, 19) ^ t >>> 10, Vx = new Uint32Array([
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
]), Hx = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
class Wx {
  constructor() {
    const e = new ArrayBuffer(320);
    this._H = new Uint32Array(e, 0, 8), this._H.set(Hx), this._W = new Uint32Array(e, 64, 64);
  }
  _updateHash() {
    const e = this._H, n = this._W;
    for (let d = 16; d < 64; d++)
      n[d] = Bx(n[d - 2]) + n[d - 7] + zx(n[d - 15]) + n[d - 16];
    let r = e[0], i = e[1], o = e[2], s = e[3], a = e[4], c = e[5], l = e[6], u = e[7];
    for (let d = 0, f, h; d < 64; d++)
      f = u + Fx(a) + (a & c ^ ~a & l) + Vx[d] + n[d] >>> 0, h = jx(r) + (r & i ^ r & o ^ i & o) >>> 0, u = l, l = c, c = a, a = s + f >>> 0, s = o, o = i, i = r, r = f + h >>> 0;
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
        this._W[s] |= Ie << (3 - n % 4) * 8;
      }
      this._updateHash();
    }
    const r = n % 64 !== 0;
    this._W.fill(0, 0, 16);
    let i = 0;
    for (; n < e.length; i++)
      for (let s = 3; s >= 0 && n < e.length; s--)
        this._W[i] |= e[n++] << s * 8;
    r || (this._W[i - (n % 4 === 0 ? 0 : 1)] |= Ie << (3 - n % 4) * 8), this._W[14] = e.byteLength / n0, this._W[15] = e.byteLength * 8, this._updateHash();
    const o = new Uint8Array(32);
    for (let s = 0; s < this._H.length; s++)
      for (let a = 0; a < 4; a++)
        o[s * 4 + a] = this._H[s] >>> (3 - a) * 8;
    return o;
  }
}
const Ux = (t) => new Wx().digest(t), Kx = (t) => {
  for (let n = 6; n < t.length; n++)
    t[n % 6] = t[n % 6] ^ t[n];
  return t.slice(0, 6);
}, Gx = (t) => ew(Kx(Ux(tw(t)))), Ui = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && /** @type {number} */
e.sv.get(t.id.client) > t.id.clock && !nr(e.ds, t.id), Yx = [{ light: "#ecd44433", dark: "#ecd444" }], qx = (t, e, n) => {
  if (!t.has(n)) {
    if (t.size < e.length) {
      const r = fn();
      t.forEach((i) => r.add(i)), e = e.filter((i) => !r.has(i));
    }
    t.set(n, L0(e));
  }
  return (
    /** @type {ColorDef} */
    t.get(n)
  );
}, Xx = (t, {
  colors: e = Yx,
  colorMapping: n = /* @__PURE__ */ new Map(),
  permanentUserData: r = null,
  onFirstRender: i = () => {
  },
  mapping: o
} = {}) => {
  let s = !1;
  const a = new Zx(t, o), c = new vt({
    props: {
      editable: (l) => {
        const u = oe.getState(l);
        return u.snapshot == null && u.prevSnapshot == null;
      }
    },
    key: oe,
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
        const d = l.getMeta(oe);
        if (d !== void 0) {
          u = Object.assign({}, u);
          for (const f in d)
            u[f] = d[f];
        }
        return u.addToHistory = l.getMeta("addToHistory") !== !1, u.isChangeOrigin = d !== void 0 && !!d.isChangeOrigin, u.isUndoRedoOperation = d !== void 0 && !!d.isChangeOrigin && !!d.isUndoRedoOperation, a.prosemirrorView !== null && d !== void 0 && (d.snapshot != null || d.prevSnapshot != null) && nd(0, () => {
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
            }, oe);
          });
        }
      },
      destroy: () => {
        a.destroy();
      }
    })
  });
  return c;
}, Jx = (t, e, n) => {
  if (e !== null && e.anchor !== null && e.head !== null)
    if (e.type === "all")
      t.setSelection(new Dh(t.doc));
    else if (e.type === "node") {
      const r = Si(
        n.doc,
        n.type,
        e.anchor,
        n.mapping
      );
      t.setSelection(Ic.create(t.doc, r));
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
        const o = at.between(t.doc.resolve(r), t.doc.resolve(i));
        t.setSelection(o);
      }
    }
}, Os = (t, e) => ({
  type: (
    /** @type {any} */
    e.selection.jsonID
  ),
  anchor: Ps(
    e.selection.anchor,
    t.type,
    t.mapping
  ),
  head: Ps(
    e.selection.head,
    t.type,
    t.mapping
  )
});
class Zx {
  /**
   * @param {Y.XmlFragment} yXmlFragment The bind source
   * @param {ProsemirrorMapping} mapping
   */
  constructor(e, n = /* @__PURE__ */ new Map()) {
    this.type = e, this.prosemirrorView = null, this.mux = Ix(), this.mapping = n, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
      this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = Os(
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
    return this.prosemirrorView.hasFocus() ? (ed && this._domSelectionInView === null && (nd(0, () => {
      this._domSelectionInView = null;
    }), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
  }
  _isDomSelectionInView() {
    const e = this.prosemirrorView._root.getSelection();
    if (e == null || e.anchorNode == null) return !1;
    const n = this.prosemirrorView._root.createRange();
    n.setStart(e.anchorNode, e.anchorOffset), n.setEnd(e.focusNode, e.focusOffset), n.getClientRects().length === 0 && n.startContainer && n.collapsed && n.selectNodeContents(n.startContainer);
    const i = n.getBoundingClientRect(), o = rw.documentElement;
    return i.bottom >= 0 && i.right >= 0 && i.left <= (window.innerWidth || o.clientWidth || 0) && i.top <= (window.innerHeight || o.clientHeight || 0);
  }
  /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */
  renderSnapshot(e, n) {
    n || (n = pd(ud(), /* @__PURE__ */ new Map())), this.prosemirrorView.dispatch(
      this._tr.setMeta(oe, { snapshot: e, prevSnapshot: n })
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
        new qe(Se.from(e), 0, 0)
      );
      n.setMeta(oe, { snapshot: null, prevSnapshot: null }), this.prosemirrorView.dispatch(n);
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
        new qe(Se.from(n), 0, 0)
      );
      if (e) {
        const i = Hn(Bt(e.anchor, 0), r.doc.content.size), o = Hn(Bt(e.head, 0), r.doc.content.size);
        r.setSelection(at.create(r.doc, i, o));
      }
      this.prosemirrorView.dispatch(
        r.setMeta(oe, { isChangeOrigin: !0, binding: this })
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
    if (e || (e = zo(this.doc)), e instanceof Uint8Array || n instanceof Uint8Array)
      if ((!(e instanceof Uint8Array) || !(n instanceof Uint8Array)) && Ve(), i = new wn({ gc: !1 }), Ss(i, n), n = zo(i), Ss(i, e), e = zo(i), o._item === null) {
        const s = Array.from(this.doc.share.keys()).find(
          (a) => this.doc.share.get(a) === this.type
        );
        o = i.getXmlFragment(s);
      } else {
        const s = i.store.clients.get(o._item.id.client) ?? [], a = ft(
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
          Ht(s, d, (f) => {
          });
        });
        const c = (d, f) => {
          const h = d === "added" ? a.getUserByClientId(f.client) : a.getUserByDeletedId(f);
          return {
            user: h,
            type: d,
            color: qx(
              r.colorMapping,
              r.colors,
              h
            )
          };
        }, l = Cd(
          o,
          new ua(n.ds, e.sv)
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
          new qe(Se.from(l), 0, 0)
        );
        this.prosemirrorView.dispatch(
          u.setMeta(oe, { isChangeOrigin: !0 })
        );
      }, oe);
    });
  }
  /**
   * @param {Array<Y.YEvent<any>>} events
   * @param {Y.Transaction} transaction
   */
  _typeChanged(e, n) {
    if (this.prosemirrorView == null) return;
    const r = oe.getState(this.prosemirrorView.state);
    if (e.length === 0 || r.snapshot != null || r.prevSnapshot != null) {
      this.renderSnapshot(r.snapshot, r.prevSnapshot);
      return;
    }
    this.mux(() => {
      const i = (a, c) => this.mapping.delete(c);
      Ht(
        n,
        n.deleteSet,
        (a) => {
          if (a.constructor === q) {
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
        (a) => Vd(
          /** @type {Y.XmlElement | Y.XmlHook} */
          a,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((a) => a !== null);
      let s = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new qe(Se.from(o), 0, 0)
      );
      Jx(s, this.beforeTransactionSelection, this), s = s.setMeta(oe, { isChangeOrigin: !0, isUndoRedoOperation: n.origin instanceof vd }), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && s.scrollIntoView(), this.prosemirrorView.dispatch(s);
    });
  }
  /**
   * @param {import('prosemirror-model').Node} doc
   */
  _prosemirrorChanged(e) {
    this.doc.transact(() => {
      Ts(this.doc, this.type, e, this), this.beforeTransactionSelection = Os(
        this,
        this.prosemirrorView.state
      );
    }, oe);
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
const Vd = (t, e, n, r, i, o) => {
  const s = (
    /** @type {PModel.Node} */
    n.mapping.get(t)
  );
  if (s === void 0) {
    if (t instanceof ke)
      return xi(
        t,
        e,
        n,
        r,
        i,
        o
      );
    throw dt();
  }
  return s;
}, xi = (t, e, n, r, i, o) => {
  const s = [], a = (c) => {
    if (c instanceof ke) {
      const l = Vd(
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
      l instanceof Wt && !l._item.deleted && l._item.id.client === l.doc.clientID && (c.applyDelta([
        { retain: c.length },
        ...l.toDelta()
      ]), l.doc.transact((d) => {
        l._item.delete(d);
      }));
      const u = Qx(
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
  r === void 0 || i === void 0 ? t.toArray().forEach(a) : Cd(t, new ua(i.ds, r.sv)).forEach(a);
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
    }, oe), n.mapping.delete(t), null;
  }
}, Qx = (t, e, n, r, i, o) => {
  const s = [], a = t.toDelta(r, i, o);
  try {
    for (let c = 0; c < a.length; c++) {
      const l = a[c];
      s.push(e.text(l.insert, o1(l.attributes, e)));
    }
  } catch {
    return t.doc.transact((l) => {
      t._item.delete(l);
    }, oe), null;
  }
  return s;
}, e1 = (t, e) => {
  const n = new Be(), r = t.map((i) => ({
    // @ts-ignore
    insert: i.text,
    attributes: Wd(i.marks, e)
  }));
  return n.applyDelta(r), e.mapping.set(n, t), n;
}, t1 = (t, e) => {
  const n = new ke(t.type.name);
  for (const r in t.attrs) {
    const i = t.attrs[r];
    i !== null && r !== "ychange" && n.setAttribute(r, i);
  }
  return n.insert(
    0,
    go(t).map(
      (r) => _s(r, e)
    )
  ), e.mapping.set(n, t), n;
}, _s = (t, e) => t instanceof Array ? e1(t, e) : t1(t, e), ac = (t) => typeof t == "object" && t !== null, ga = (t, e) => {
  const n = Object.keys(t).filter((i) => t[i] !== null);
  let r = n.length === (e == null ? 0 : Object.keys(e).filter((i) => e[i] !== null).length);
  for (let i = 0; i < n.length && r; i++) {
    const o = n[i], s = t[o], a = e[o];
    r = o === "ychange" || s === a || ac(s) && ac(a) && ga(s, a);
  }
  return r;
}, go = (t) => {
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
}, Hd = (t, e) => {
  const n = t.toDelta();
  return n.length === e.length && n.every(
    /** @type {(d:any,i:number) => boolean} */
    (r, i) => r.insert === /** @type {any} */
    e[i].text && Ju(r.attributes || {}).length === e[i].marks.length && Zu(r.attributes, (o, s) => {
      const a = ya(s), c = e[i].marks;
      return ga(o, c.find(
        /** @param {any} mark */
        (l) => l.type.name === a
      )?.attrs);
    })
  );
}, Rr = (t, e) => {
  if (t instanceof ke && !(e instanceof Array) && Ns(t, e)) {
    const n = go(e);
    return t._length === n.length && ga(t.getAttributes(), e.attrs) && t.toArray().every(
      (r, i) => Rr(r, n[i])
    );
  }
  return t instanceof Be && e instanceof Array && Hd(t, e);
}, Ki = (t, e) => t === e || t instanceof Array && e instanceof Array && t.length === e.length && t.every(
  (n, r) => e[r] === n
), lc = (t, e, n) => {
  const r = t.toArray(), i = go(e), o = i.length, s = r.length, a = Hn(s, o);
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
}, n1 = (t) => {
  let e = "", n = t._start;
  const r = {};
  for (; n !== null; )
    n.deleted || (n.countable && n.content instanceof ht ? e += n.content.str : n.content instanceof ce && (r[n.content.key] = null)), n = n.right;
  return {
    str: e,
    nAttrs: r
  };
}, r1 = (t, e, n) => {
  n.mapping.set(t, e);
  const { nAttrs: r, str: i } = n1(t), o = e.map((l) => ({
    insert: (
      /** @type {any} */
      l.text
    ),
    attributes: Object.assign({}, r, Wd(l.marks, n))
  })), { insert: s, remove: a, index: c } = $x(
    i,
    o.map((l) => l.insert).join("")
  );
  t.delete(c, a), t.insert(c, s), t.applyDelta(
    o.map((l) => ({ retain: l.insert.length, attributes: l.attributes }))
  );
}, i1 = /(.*)(--[a-zA-Z0-9+/=]{8})$/, ya = (t) => i1.exec(t)?.[1] ?? t, o1 = (t, e) => {
  const n = [];
  for (const r in t)
    n.push(e.mark(ya(r), t[r]));
  return n;
}, Wd = (t, e) => {
  const n = {};
  return t.forEach((r) => {
    if (r.type.name !== "ychange") {
      const i = Lt(e.isOMark, r.type, () => !r.type.excludes(r.type));
      n[i ? `${r.type.name}--${Gx(r.toJSON())}` : r.type.name] = r.attrs;
    }
  }), n;
}, Ts = (t, e, n, r) => {
  if (e instanceof ke && e.nodeName !== n.type.name)
    throw new Error("node name mismatch!");
  if (r.mapping.set(e, n), e instanceof ke) {
    const d = e.getAttributes(), f = n.attrs;
    for (const h in f)
      f[h] !== null ? d[h] !== f[h] && h !== "ychange" && e.setAttribute(h, f[h]) : e.removeAttribute(h);
    for (const h in d)
      f[h] === void 0 && e.removeAttribute(h);
  }
  const i = go(n), o = i.length, s = e.toArray(), a = s.length, c = Hn(o, a);
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
      const f = s[l], h = i[l], p = s[a - u - 1], m = i[o - u - 1];
      if (f instanceof Be && h instanceof Array)
        Hd(f, h) || r1(f, h, r), l += 1;
      else {
        let g = f instanceof ke && Ns(f, h), b = p instanceof ke && Ns(p, m);
        if (g && b) {
          const v = lc(
            /** @type {Y.XmlElement} */
            f,
            /** @type {PModel.Node} */
            h,
            r
          ), w = lc(
            /** @type {Y.XmlElement} */
            p,
            /** @type {PModel.Node} */
            m,
            r
          );
          v.foundMappedChild && !w.foundMappedChild ? b = !1 : !v.foundMappedChild && w.foundMappedChild || v.equalityFactor < w.equalityFactor ? g = !1 : b = !1;
        }
        g ? (Ts(
          t,
          /** @type {Y.XmlFragment} */
          f,
          /** @type {PModel.Node} */
          h,
          r
        ), l += 1) : b ? (Ts(
          t,
          /** @type {Y.XmlFragment} */
          p,
          /** @type {PModel.Node} */
          m,
          r
        ), u += 1) : (r.mapping.delete(e.get(l)), e.delete(l, 1), e.insert(l, [
          _s(h, r)
        ]), l += 1);
      }
    }
    const d = a - l - u;
    if (a === 1 && o === 0 && s[0] instanceof Be ? (r.mapping.delete(s[0]), s[0].delete(0, s[0].length)) : d > 0 && (e.slice(l, l + d).forEach((f) => r.mapping.delete(f)), e.delete(l, d)), l + u < o) {
      const f = [];
      for (let h = l; h < o - u; h++)
        f.push(_s(i[h], r));
      e.insert(l, f);
    }
  }, oe);
}, Ns = (t, e) => !(e instanceof Array) && t.nodeName === e.type.name, Ps = (t, e, n) => {
  if (t === 0)
    return Fo(e, 0, e.length === 0 ? -1 : 0);
  let r = e._first === null ? null : (
    /** @type {Y.ContentType} */
    e._first.content.type
  );
  for (; r !== null && e !== r; ) {
    if (r instanceof Be) {
      if (r._length >= t)
        return Fo(r, t, e.length === 0 ? -1 : 0);
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
      throw Ve();
    if (t === 0 && r.constructor !== Be && r !== e)
      return s1(r._item.parent, r._item);
  }
  return Fo(e, e._length, e.length === 0 ? -1 : 0);
}, s1 = (t, e) => {
  let n = null, r = null;
  return t._item === null ? r = Pr(t) : n = H(t._item.id.client, t._item.id.clock), new Fi(n, r, e.id);
}, Si = (t, e, n, r) => {
  const i = Iw(n, t);
  if (i === null || i.type !== e && !Dr(e, i.type._item))
    return null;
  let o = i.type, s = 0;
  if (o.constructor === Be)
    s = i.index;
  else if (o._item === null || !o._item.deleted) {
    let a = o._first, c = 0;
    for (; c < o._length && c < i.index && a !== null; ) {
      if (!a.deleted) {
        const l = (
          /** @type {Y.ContentType} */
          a.content.type
        );
        c++, l instanceof Be ? s += l._length : s += /** @type {any} */
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
        c.deleted || (l instanceof Be ? s += l._length : s += /** @type {any} */
        r.get(l).nodeSize), c = c.right;
      }
    }
    o = /** @type {Y.AbstractType} */
    a;
  }
  return s - 1;
};
function a1(t) {
  const e = t.toArray(), n = (r) => {
    let i;
    if (r instanceof Be)
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
    else if (r instanceof ke) {
      i = {
        type: r.nodeName
      };
      const o = r.getAttributes();
      Object.keys(o).length && (i.attrs = o);
      const s = r.toArray();
      s.length && (i.content = s.map(n).flat());
    } else
      Ve();
    return i;
  };
  return {
    type: "doc",
    content: e.map(n)
  };
}
const l1 = (t) => Ot.getState(t)?.undoManager?.undo() != null, c1 = (t) => Ot.getState(t)?.undoManager?.redo() != null, u1 = /* @__PURE__ */ new Set(["paragraph"]), d1 = (t, e) => !(t instanceof q) || !(t.content instanceof mt) || !(t.content.type instanceof Wt || t.content.type instanceof ke && e.has(t.content.type.nodeName)) || t.content.type._length === 0, f1 = ({ protectedNodes: t = u1, trackedOrigins: e = [], undoManager: n = null } = {}) => new vt({
  key: Ot,
  state: {
    init: (r, i) => {
      const o = oe.getState(i), s = n || new vd(o.type, {
        trackedOrigins: new Set([oe].concat(e)),
        deleteFilter: (a) => d1(a, t),
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
      const a = oe.getState(s).binding, c = i.undoManager, l = c.undoStack.length > 0, u = c.redoStack.length > 0;
      return a ? {
        undoManager: c,
        prevSel: Os(a, o),
        hasUndoOps: l,
        hasRedoOps: u
      } : l !== i.hasUndoOps || u !== i.hasRedoOps ? Object.assign({}, i, {
        hasUndoOps: c.undoStack.length > 0,
        hasRedoOps: c.redoStack.length > 0
      }) : i;
    }
  },
  view: (r) => {
    const i = oe.getState(r.state), o = Ot.getState(r.state).undoManager;
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
yn.create({
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
      undo: () => ({ tr: t, state: e, dispatch: n }) => (t.setMeta("preventDispatch", !0), Ot.getState(e).undoManager.undoStack.length === 0 ? !1 : n ? l1(e) : !0),
      redo: () => ({ tr: t, state: e, dispatch: n }) => (t.setMeta("preventDispatch", !0), Ot.getState(e).undoManager.redoStack.length === 0 ? !1 : n ? c1(e) : !0)
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
    const e = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = f1(this.options.yUndoOptions), r = n.spec.view;
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
    }, o = Xx(e, i);
    return this.editor.options.enableContentCheck && ((t = e.doc) === null || t === void 0 || t.on("beforeTransaction", () => {
      try {
        const s = a1(e);
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
      this.editor.options.enableContentCheck && new vt({
        key: new We("filterInvalidContent"),
        filterTransaction: () => {
          var s;
          return this.storage.isDisabled && ((s = e.doc) === null || s === void 0 || s.destroy()), !0;
        }
      })
    ].filter(Boolean);
  }
});
function h1(t) {
  return !!t.getMeta(oe);
}
function cc(t) {
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
function yo(t, e, n) {
  const r = [], i = t.node(0);
  n = typeof n == "number" && n >= 0 ? n : t.sameParent(e) ? Math.max(0, t.sharedDepth(e.pos) - 1) : t.sharedDepth(e.pos);
  const o = new Ih(t, e, n), s = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((a, c) => {
    const l = s + c, u = l + a.nodeSize;
    if (l < o.start || l >= o.end)
      return;
    const d = new Dc(i.resolve(l), i.resolve(u));
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
    return new ve(n, r);
  }
}
class ve extends Ze {
  constructor(e, n, r, i = 1) {
    const { doc: o } = e, s = e === n, a = e.pos === o.content.size && n.pos === o.content.size, c = s && !a ? o.resolve(n.pos + (i > 0 ? 1 : -1)) : n, l = s && a ? o.resolve(e.pos - (i > 0 ? 1 : -1)) : e, u = yo(l.min(c), l.max(c), r), d = c.pos >= e.pos ? u[0].$from : u[u.length - 1].$to, f = c.pos >= e.pos ? u[u.length - 1].$to : u[0].$from;
    super(d, f, u), this.depth = r;
  }
  // we can safely ignore this TypeScript error: https://github.com/Microsoft/TypeScript/issues/338
  // @ts-ignore
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(e) {
    return e instanceof ve && e.$from.pos === this.$from.pos && e.$to.pos === this.$to.pos;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.anchor)), i = e.resolve(n.map(this.head));
    return new ve(r, i);
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
      return new ve(o, s, this.depth);
    }
    const n = this.ranges[0], r = e.resolve(Math.max(0, n.$from.pos - 1));
    return new ve(this.$anchor, r, this.depth);
  }
  extendForwards() {
    const { doc: e } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const i = this.ranges.slice(1), o = i[0].$from, s = i[i.length - 1].$to;
      return new ve(s, o, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], r = e.resolve(Math.min(e.content.size, n.$to.pos + 1));
    return new ve(this.$anchor, r, this.depth);
  }
  static fromJSON(e, n) {
    return new ve(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r, i, o = 1) {
    return new this(e.resolve(n), e.resolve(r), i, o);
  }
  getBookmark() {
    return new ba(this.anchor, this.head);
  }
}
ve.prototype.visible = !1;
function ci(t) {
  return t instanceof ve;
}
yn.create({
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
        if (!ci(o)) {
          const u = ve.create(i, a, c, e, -1);
          return s.setSelection(u), n.dispatch(s), !0;
        }
        const l = o.extendBackwards();
        return s.setSelection(l), n.dispatch(s), !0;
      },
      // extend NodeRangeSelection downwards
      "Shift-ArrowDown": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, selection: o, tr: s } = r, { anchor: a, head: c } = o;
        if (!ci(o)) {
          const u = ve.create(i, a, c, e);
          return s.setSelection(u), n.dispatch(s), !0;
        }
        const l = o.extendForwards();
        return s.setSelection(l), n.dispatch(s), !0;
      },
      // add `NodeRangeSelection` to all nodes
      "Mod-a": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, tr: o } = r, s = ve.create(i, 0, i.content.size, e);
        return o.setSelection(s), n.dispatch(o), !0;
      }
    };
  },
  onSelectionUpdate() {
    const { selection: t } = this.editor.state;
    ci(t) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
  },
  addProseMirrorPlugins() {
    let t = !1, e = !1;
    return [
      new vt({
        key: new We("nodeRange"),
        props: {
          attributes: () => t ? {
            class: "ProseMirror-noderangeselection"
          } : { class: "" },
          handleDOMEvents: {
            mousedown: (n, r) => {
              const { key: i } = this.options, o = /Mac/.test(navigator.platform), s = !!r.shiftKey, a = !!r.ctrlKey, c = !!r.altKey, l = !!r.metaKey, u = o ? l : a;
              return (i == null || i === "Shift" && s || i === "Control" && a || i === "Alt" && c || i === "Meta" && l || i === "Mod" && u) && (e = !0), e && document.addEventListener("mouseup", () => {
                e = !1;
                const { state: d } = n, { doc: f, selection: h, tr: p } = d, { $anchor: m, $head: g } = h;
                if (m.sameParent(g))
                  return;
                const b = ve.create(f, m.pos, g.pos, this.options.depth);
                p.setSelection(b), n.dispatch(p);
              }, { once: !0 }), !1;
            }
          },
          // when selecting some text we want to render some decorations
          // to preview a `NodeRangeSelection`
          decorations: (n) => {
            const { selection: r } = n, i = ci(r);
            if (t = !1, !e)
              return i ? (t = !0, cc(r.ranges)) : null;
            const { $from: o, $to: s } = r;
            if (!i && o.sameParent(s))
              return null;
            const a = yo(o, s, this.options.depth);
            return a.length ? (t = !0, cc(a)) : null;
          }
        }
      })
    ];
  }
});
function p1(t) {
  let e = "";
  const n = getComputedStyle(t);
  for (let r = 0; r < n.length; r += 1)
    e += `${n[r]}:${n.getPropertyValue(n[r])};`;
  return e;
}
function m1(t) {
  const e = t.cloneNode(!0), n = [t, ...Array.from(t.getElementsByTagName("*"))], r = [e, ...Array.from(e.getElementsByTagName("*"))];
  return n.forEach((i, o) => {
    r[o].style.cssText = p1(i);
  }), e;
}
const Ud = (t) => {
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
function ui(t, e) {
  return window.getComputedStyle(t)[e];
}
function g1(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function y1(t, e, n) {
  const r = parseInt(ui(t.dom, "paddingLeft"), 10), i = parseInt(ui(t.dom, "paddingRight"), 10), o = parseInt(ui(t.dom, "borderLeftWidth"), 10), s = parseInt(ui(t.dom, "borderLeftWidth"), 10), a = t.dom.getBoundingClientRect();
  return {
    left: g1(e, a.left + r + o, a.right - i - s),
    top: n
  };
}
function Kd(t) {
  var e;
  (e = t.parentNode) === null || e === void 0 || e.removeChild(t);
}
function b1(t, e) {
  const { doc: n } = e.view.state, r = Ud({
    editor: e,
    x: t.clientX,
    y: t.clientY,
    direction: "right"
  });
  if (!r.resultNode || r.pos === null)
    return [];
  const i = t.clientX, o = y1(e.view, i, t.clientY), s = e.view.posAtCoords(o);
  if (!s)
    return [];
  const { pos: a } = s;
  if (!n.resolve(a).parent)
    return [];
  const l = n.resolve(r.pos), u = n.resolve(r.pos + 1);
  return yo(l, u, 0);
}
function v1(t, e) {
  const { view: n } = e;
  if (!t.dataTransfer)
    return;
  const { empty: r, $from: i, $to: o } = n.state.selection, s = b1(t, e), a = yo(i, o, 0), c = a.some((g) => s.find((b) => b.$from === g.$from && b.$to === g.$to)), l = r || !c ? s : a;
  if (!l.length)
    return;
  const { tr: u } = n.state, d = document.createElement("div"), f = l[0].$from.pos, h = l[l.length - 1].$to.pos, p = ve.create(n.state.doc, f, h), m = p.content();
  l.forEach((g) => {
    const b = n.nodeDOM(g.$from.pos), v = m1(b);
    d.append(v);
  }), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), t.dataTransfer.clearData(), t.dataTransfer.setDragImage(d, 0, 0), n.dragging = { slice: m, move: !0 }, u.setSelection(p), n.dispatch(u), document.addEventListener("drop", () => Kd(d), { once: !0 });
}
const uc = (t, e) => {
  const n = t.resolve(e), { depth: r } = n;
  return r === 0 ? e : n.pos - n.parentOffset - 1;
}, dc = (t, e) => {
  const n = t.nodeAt(e), r = t.resolve(e);
  let { depth: i } = r, o = n;
  for (; i > 0; ) {
    const s = r.node(i);
    i -= 1, i === 0 && (o = s);
  }
  return o;
}, Ho = (t, e) => {
  const n = oe.getState(t);
  return n ? Ps(e, n.type, n.binding.mapping) : null;
}, w1 = (t, e) => {
  const n = oe.getState(t);
  return n ? Si(n.doc, n.type, e, n.binding.mapping) || 0 : -1;
}, fc = (t, e) => {
  let n = e;
  for (; n && n.parentNode && n.parentNode !== t.dom; )
    n = n.parentNode;
  return n;
}, Gd = new We("dragHandle"), Yd = ({ pluginKey: t = Gd, element: e, editor: n, tippyOptions: r, onNodeChange: i }) => {
  const o = document.createElement("div");
  let s = null, a = !1, c = null, l = -1, u;
  return e.addEventListener("dragstart", (d) => {
    v1(d, n), setTimeout(() => {
      e && (e.style.pointerEvents = "none");
    }, 0);
  }), e.addEventListener("dragend", () => {
    e && (e.style.pointerEvents = "auto");
  }), new vt({
    key: typeof t == "string" ? new We(t) : t,
    state: {
      init() {
        return { locked: !1 };
      },
      apply(d, f, h, p) {
        const m = d.getMeta("lockDragHandle"), g = d.getMeta("hideDragHandle");
        if (m !== void 0 && (a = m), g && s)
          return s.hide(), a = !1, c = null, l = -1, i?.({ editor: n, node: null, pos: -1 }), f;
        if (d.docChanged && l !== -1 && e && s)
          if (h1(d)) {
            const b = w1(p, u);
            b !== l && (l = b);
          } else {
            const b = d.mapping.map(l);
            b !== l && (l = b, u = Ho(p, l));
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
          if (s || (s = Mh(d.dom, {
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
          if (m = fc(d, m), m === d.dom || m?.nodeType !== 1)
            return;
          const g = d.posAtDOM(m, 0), b = dc(n.state.doc, g), v = uc(n.state.doc, g);
          c = b, l = v, u = Ho(d.state, l), i?.({ editor: n, node: c, pos: l }), s.setProps({
            getReferenceClientRect: () => m.getBoundingClientRect()
          });
        },
        // TODO: Kills even on hot reload
        destroy() {
          s?.destroy(), e && Kd(o);
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
          const h = Ud({
            x: f.clientX,
            y: f.clientY,
            direction: "right",
            editor: n
          });
          if (!h.resultElement)
            return !1;
          let p = h.resultElement;
          if (p = fc(d, p), p === d.dom || p?.nodeType !== 1)
            return !1;
          const m = d.posAtDOM(p, 0), g = dc(n.state.doc, m);
          if (g !== c) {
            const b = uc(n.state.doc, m);
            c = g, l = b, u = Ho(d.state, l), i?.({ editor: n, node: c, pos: l }), s.setProps({
              getReferenceClientRect: () => p.getBoundingClientRect()
            }), s.show();
          }
          return !1;
        }
      }
    }
  });
};
yn.create({
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
      Yd({
        tippyOptions: this.options.tippyOptions,
        element: t,
        editor: this.editor,
        onNodeChange: this.options.onNodeChange
      })
    ];
  }
});
const x1 = (t) => {
  const { className: e = "drag-handle", children: n, editor: r, pluginKey: i = Gd, onNodeChange: o, tippyOptions: s } = t, [a, c] = de(null), l = ye(null);
  return Fe(() => a ? r.isDestroyed ? () => {
    l.current = null;
  } : (l.current || (l.current = Yd({
    editor: r,
    element: a,
    pluginKey: i,
    tippyOptions: s,
    onNodeChange: o
  }), r.registerPlugin(l.current)), () => {
    r.unregisterPlugin(i), l.current = null;
  }) : () => {
    l.current = null;
  }, [a, r, o, i, s]), O.createElement("div", { className: e, ref: c }, n);
}, va = (t) => typeof t == "object" && t !== null && !Array.isArray(t), S1 = (t, e) => {
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
  if (e.type && Vn(e.type) && va(e.attrs) && "id" in e.attrs) {
    const { id: n, ...r } = e.attrs;
    e.attrs = Object.keys(r).length > 0 ? r : void 0;
  }
  return Array.isArray(e.content) && (e.content = e.content.map(wa)), e;
}, lr = (t) => t.map(wa), k1 = (t) => va(t) ? t.type : void 0, A1 = (t, e) => {
  const n = wa(t);
  return n.type && Vn(n.type) ? S1(n, e) : n;
}, C1 = (t, e) => e.length === 0 ? Se.empty : Se.fromArray(
  e.map((n) => t.schema.nodeFromJSON(n))
), cr = (t, e) => new qe(C1(t, e), 0, 0), ur = (t, e) => {
  const n = Ov(t, e);
  if (!n)
    throw new E1(e);
  return n;
}, At = (t) => t.isEmpty ? { json: null, html: null } : { json: t.getJSON(), html: t.getHTML() };
class E1 extends Error {
  code = "target_not_found";
  targetId;
  constructor(e) {
    super(
      `Could not find block node ${e} in the current editor document.`
    ), this.name = "NotesTextEditorPatchTargetNotFoundError", this.targetId = e, Object.setPrototypeOf(this, new.target.prototype);
  }
}
class O1 extends Error {
  code = "unsupported_patch_type";
  patchType;
  constructor(e) {
    super(`Unsupported NotesTextEditor patch type: ${String(e)}`), this.name = "NotesTextEditorUnsupportedPatchTypeError", this.patchType = e, Object.setPrototypeOf(this, new.target.prototype);
  }
}
const _1 = (t, e) => {
  switch (e.type) {
    case "top_level_prepend": {
      const r = cr(t, lr(e.blocks)), i = t.state.tr.replace(0, 0, r);
      return i.docChanged && t.view.dispatch(i), At(t);
    }
    case "top_level_append": {
      const r = cr(t, lr(e.blocks)), i = t.state.doc.content.size, o = t.state.tr.replace(i, i, r);
      return o.docChanged && t.view.dispatch(o), At(t);
    }
    case "insert_before": {
      const r = ur(t, e.targetId), i = cr(t, lr(e.blocks)), o = t.state.tr.replace(r.pos, r.pos, i);
      return o.docChanged && t.view.dispatch(o), At(t);
    }
    case "insert_after": {
      const r = ur(t, e.targetId), i = r.pos + r.node.nodeSize, o = cr(t, lr(e.blocks)), s = t.state.tr.replace(i, i, o);
      return s.docChanged && t.view.dispatch(s), At(t);
    }
    case "replace_block": {
      const r = ur(t, e.targetId), i = t.schema.nodeFromJSON(
        A1(e.block, e.targetId)
      ), o = t.state.tr.replaceWith(
        r.pos,
        r.pos + r.node.nodeSize,
        i
      );
      return o.docChanged && t.view.dispatch(o), At(t);
    }
    case "replace_content": {
      const r = ur(t, e.targetId), i = t.state.tr.replace(
        r.pos + 1,
        r.pos + r.node.nodeSize - 1,
        cr(t, lr(e.content))
      );
      return i.docChanged && t.view.dispatch(i), At(t);
    }
    case "delete_block": {
      const r = ur(t, e.targetId), i = t.state.tr.delete(
        r.pos,
        r.pos + r.node.nodeSize
      );
      return i.docChanged && t.view.dispatch(i), At(t);
    }
  }
  const n = e;
  throw new O1(
    k1(n)
  );
}, T1 = ({
  placeholder: t,
  translations: e,
  aiBlockConfig: n,
  imageUploadConfig: r
}) => [
  Rc,
  $c,
  jc,
  Fc,
  zc,
  Bc,
  Vc,
  Hc,
  Wc,
  Cu,
  Ou,
  Eu,
  uv,
  zv,
  Jv,
  Av.configure({
    currentConfig: n
  }),
  Lv,
  Kv,
  ...r ? [Rv(r)] : [],
  Ev,
  // Automatically add unique IDs to all block nodes
  Lh,
  Rh(t),
  $h(t),
  Yv({
    aiBlockConfig: n,
    translations: e,
    imageUploadConfig: r
  })
], N1 = Ds({
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
}), hc = (t) => t.isVisible !== !1, P1 = (t) => "isVisible" in t ? t.isVisible !== !1 : !0, D1 = (t) => !!t && "items" in t, I1 = (t) => !!t && "label" in t && !("items" in t), M1 = ({
  primaryAction: t,
  secondaryActions: e = [],
  metadata: n,
  otherActions: r = [],
  banner: i
}) => {
  const o = e.filter(hc), s = r.filter(P1), a = t && hc(t), c = o.length > 0, l = s.length > 0, u = c || l || a;
  return /* @__PURE__ */ C("div", { className: "flex flex-col", children: [
    (n && n.length > 0 || u) && /* @__PURE__ */ C("div", { className: "flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center", children: [
      n && n.length > 0 && /* @__PURE__ */ y(jh, { items: n }),
      /* @__PURE__ */ C("div", { className: "flex flex-shrink-0 flex-row items-center gap-2", children: [
        l && /* @__PURE__ */ y(Ws, { items: s }),
        o.map((d, f) => /* @__PURE__ */ y(
          ue,
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
        a && (c || l) && /* @__PURE__ */ y("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
        a && I1(t) && /* @__PURE__ */ y(
          ue,
          {
            label: t.label,
            onClick: t.onClick,
            variant: "default",
            icon: t.icon,
            disabled: t.disabled,
            tooltip: t.tooltip
          }
        ),
        a && D1(t) && /* @__PURE__ */ y(
          Fh,
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
    i && /* @__PURE__ */ C("div", { className: N1({ variant: i.variant }), children: [
      /* @__PURE__ */ y(ln, { icon: i.icon }),
      /* @__PURE__ */ y(Mc, { children: i.title })
    ] })
  ] });
}, L1 = ({
  value: t,
  onChange: e,
  placeholder: n,
  disabled: r = !1
}) => /* @__PURE__ */ y("div", { className: "mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 sm:px-14 px-0", children: /* @__PURE__ */ y(
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
) }), R1 = Pt(function({
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
}, g) {
  const b = Yn(), v = ye(null), w = ye(null), k = mc(), [A] = de(() => r?.content || ""), [E, x] = de(r?.title || ""), [S, P] = de(null), L = ($) => {
    switch ($) {
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
  Fe(() => {
    a && a(E);
  }, [E, a]);
  const I = ye(!1), N = zh({
    extensions: T1({
      placeholder: n,
      translations: b,
      aiBlockConfig: o,
      imageUploadConfig: s ? {
        ...s,
        onError: ($) => {
          P($);
        }
      } : void 0
    }),
    content: A,
    onUpdate: ({ editor: $ }) => {
      I.current || e(At($));
    },
    onCreate: ({ editor: $ }) => {
      if (Ml($.state.doc)) {
        I.current = !0;
        try {
          $.commands.setContent($.getJSON());
        } finally {
          I.current = !1;
        }
        Ml($.state.doc) || e(At($));
      }
    },
    editable: !i
  }), D = he(($) => {
    I.current = !0;
    try {
      return $();
    } finally {
      I.current = !1;
    }
  }, []);
  gc(g, () => ({
    clear: () => N?.commands.clearContent(),
    focus: () => N?.commands.focus(),
    setContent: ($) => N?.commands.setContent($),
    applyPageDocumentPatch: ($) => N ? D(() => _1(N, $)) : { json: null, html: null },
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
    insertTranscript: ($, W, ee) => {
      N && N.chain().focus().insertContentAt(N.state.doc.content.size, [
        {
          type: "transcript",
          attrs: {
            data: { title: $, users: W, messages: ee },
            isOpen: !1
          }
        },
        { type: "paragraph" }
      ]).run();
    },
    pushContent: ($) => {
      N && N.chain().focus().insertContentAt(N.state.doc.content.size, $).run();
    },
    insertImage: ($) => {
      !N || !s || Vu(N, $, {
        ...s,
        onError: (W) => {
          P(W);
        }
      });
    }
  }));
  const _ = Ke(
    () => ({
      offset: [0, 5]
    }),
    []
  ), T = he(
    ({ node: $, pos: W }) => {
      w.current = $ ? { pos: W, nodeSize: $.nodeSize } : null;
    },
    []
  ), R = he(() => {
    const $ = w.current;
    if (!$ || !N) return;
    const { pos: W, nodeSize: ee } = $, Me = N.state.doc.nodeAt(W);
    if (Me && Me.content.size === 0)
      N.chain().focus().setTextSelection(W + 1).insertContent("/").run();
    else {
      const Le = W + ee;
      N.chain().focus().insertContentAt(Le, { type: "paragraph" }).setTextSelection(Le + 1).insertContent("/").run();
    }
  }, [N]), z = c || l && l.length > 0 || d && d.length > 0 || u && u.length > 0 || f, V = a || E;
  return N ? /* @__PURE__ */ y(Nc, { dataTestId: m, children: /* @__PURE__ */ C(
    "div",
    {
      className: "relative flex h-full w-full flex-col",
      ref: v,
      id: k,
      children: [
        z && /* @__PURE__ */ y(
          M1,
          {
            primaryAction: c,
            secondaryActions: l,
            metadata: d,
            otherActions: u,
            banner: f
          }
        ),
        S && /* @__PURE__ */ y("div", { className: "mx-auto flex w-full max-w-[824px] px-14 py-2", children: /* @__PURE__ */ C("div", { className: "flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm", children: [
          /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ y("div", { className: "flex-shrink-0", children: /* @__PURE__ */ y(Gc, { size: "sm", type: "critical" }) }),
            /* @__PURE__ */ y(
              "p",
              {
                className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
                title: L(S),
                children: L(S)
              }
            )
          ] }),
          /* @__PURE__ */ y("div", { className: "flex-shrink-0", children: /* @__PURE__ */ y(
            ue,
            {
              variant: "outline",
              onClick: () => P(null),
              label: b.imageUpload.errors.dismiss,
              size: "sm"
            }
          ) })
        ] }) }),
        !i && !h && /* @__PURE__ */ y("div", { className: "absolute bottom-8 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md", children: /* @__PURE__ */ y(
          Bh,
          {
            editor: N,
            disableButtons: !1,
            showEmojiPicker: !1,
            plainHtmlMode: !1
          }
        ) }),
        /* @__PURE__ */ C(Kc, { className: "h-full gap-6", children: [
          V && /* @__PURE__ */ y(
            L1,
            {
              value: E,
              onChange: a ? x : void 0,
              placeholder: p,
              disabled: !a || i
            }
          ),
          /* @__PURE__ */ C(
            "div",
            {
              className: "notes-text-editor h-full",
              onClick: () => N.commands.focus(),
              children: [
                !i && /* @__PURE__ */ y(
                  x1,
                  {
                    editor: N,
                    tippyOptions: _,
                    onNodeChange: T,
                    children: /* @__PURE__ */ C("div", { className: "flex flex-row", children: [
                      /* @__PURE__ */ y(
                        Dn,
                        {
                          compact: !0,
                          variant: "ghost",
                          size: "sm",
                          className: "text-f1-foreground-tertiary",
                          onClick: R,
                          label: "Add paragraph",
                          hideLabel: !0,
                          icon: Vh
                        }
                      ),
                      /* @__PURE__ */ y(
                        "div",
                        {
                          className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
                          draggable: !0,
                          "data-drag-handle": !0,
                          children: /* @__PURE__ */ y(ln, { icon: Hh, size: "xs" })
                        }
                      )
                    ] })
                  }
                ),
                /* @__PURE__ */ y(
                  Wh,
                  {
                    editor: N,
                    className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
                  }
                )
              ]
            }
          )
        ] }),
        !i && /* @__PURE__ */ y(
          Uh,
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
}), cS = ({
  withHeader: t = !1,
  withTitle: e = !0,
  withToolbar: n = !0
}) => /* @__PURE__ */ C(
  "div",
  {
    className: "relative flex h-full w-full flex-col",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      t && /* @__PURE__ */ C("div", { className: "flex items-center justify-between border-b border-f1-border px-6 py-3", children: [
        /* @__PURE__ */ C("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ y(B, { className: "h-6 w-20 rounded-md" }),
          /* @__PURE__ */ y(B, { className: "h-6 w-24 rounded-md" })
        ] }),
        /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ y(B, { className: "h-8 w-16 rounded-md" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-12 rounded-md" })
        ] })
      ] }),
      n && /* @__PURE__ */ C("div", { className: "absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md", children: [
        /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
        /* @__PURE__ */ C("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" })
        ] }),
        /* @__PURE__ */ C("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" })
        ] }),
        /* @__PURE__ */ C("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded" })
        ] })
      ] }),
      /* @__PURE__ */ C(Kc, { className: "h-full gap-6", children: [
        e && /* @__PURE__ */ y("div", { className: "mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5", children: /* @__PURE__ */ y(B, { className: "h-8 w-80 rounded-md" }) }),
        /* @__PURE__ */ y("div", { className: "h-full", children: /* @__PURE__ */ y("div", { className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14", children: /* @__PURE__ */ C("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ y(B, { className: "h-5 w-full rounded-md" }),
          /* @__PURE__ */ y(B, { className: "h-5 w-4/5 rounded-md" }),
          /* @__PURE__ */ y(B, { className: "h-5 w-3/5 rounded-md" }),
          /* @__PURE__ */ y(B, { className: "h-5 w-full rounded-md" }),
          /* @__PURE__ */ y(B, { className: "h-5 w-1/2 rounded-md" })
        ] }) }) })
      ] })
    ]
  }
), uS = R1, qd = Pt(
  ({ header: t, actions: e, open: n, onClose: r }, i) => {
    const [o, s] = de(!1), a = he(() => {
      s(!0);
      const c = setTimeout(() => {
        r?.(), s(!1);
      }, 200);
      return () => clearTimeout(c);
    }, [r]);
    return /* @__PURE__ */ y(
      Kh,
      {
        open: n && !o,
        onOpenChange: (c) => !c && a?.(),
        children: /* @__PURE__ */ C(Gh, { ref: i, className: "bottom-3 top-auto max-w-[400px]", children: [
          /* @__PURE__ */ C(Yh, { className: "flex flex-col gap-4 px-4 py-5", children: [
            /* @__PURE__ */ y(Gc, { type: t.type, size: "lg" }),
            /* @__PURE__ */ C("div", { className: "flex flex-col gap-0.5", children: [
              /* @__PURE__ */ y(qh, { className: "text-xl sm:text-lg", children: t.title }),
              /* @__PURE__ */ y(Xh, { className: "text-lg sm:text-base", children: t.description })
            ] })
          ] }),
          e && /* @__PURE__ */ C(Jh, { className: "px-4 pb-4 pt-2", children: [
            /* @__PURE__ */ C("div", { className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full", children: [
              /* @__PURE__ */ y(ue, { variant: "outline", ...e.secondary }),
              /* @__PURE__ */ y(
                ue,
                {
                  ...e.primary,
                  variant: e.primary.variant || "default"
                }
              )
            ] }),
            /* @__PURE__ */ C("div", { className: "flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full", children: [
              /* @__PURE__ */ y(ue, { variant: "outline", ...e.secondary, size: "lg" }),
              /* @__PURE__ */ y(
                ue,
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
qd.displayName = "Dialog";
const dS = He(
  Dt(
    { name: "Dialog", type: "info" },
    yc("Dialog", qd)
  )
), $1 = Pt(
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
    const d = r?.includes(".mp4"), [f, h] = de(!1), p = () => {
      s && s(), h(!0);
    };
    return a ? /* @__PURE__ */ y(Xd, { ref: u }) : f ? null : /* @__PURE__ */ C(
      "div",
      {
        ref: u,
        className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
        children: [
          /* @__PURE__ */ y("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: d ? /* @__PURE__ */ y(
            "video",
            {
              src: r,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              className: "h-full w-full rounded-lg object-cover"
            }
          ) : /* @__PURE__ */ y(
            "img",
            {
              src: r,
              alt: "",
              className: "h-full w-full rounded-lg object-cover"
            }
          ) }),
          /* @__PURE__ */ C("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
            /* @__PURE__ */ C(
              "div",
              {
                className: J(
                  "flex w-full flex-col gap-1",
                  l === "default" ? "sm:max-w-lg" : void 0
                ),
                children: [
                  /* @__PURE__ */ y("h3", { className: "font-bold text-xl text-f1-foreground", children: e }),
                  n && /* @__PURE__ */ y("p", { className: "text-base text-f1-foreground-secondary", children: n })
                ]
              }
            ),
            /* @__PURE__ */ C("div", { className: "flex gap-3", children: [
              i && /* @__PURE__ */ y(
                ue,
                {
                  onClick: i.onClick,
                  label: i.label,
                  variant: i.variant || "default",
                  size: "md",
                  icon: i.icon
                }
              ),
              o && /* @__PURE__ */ y(
                ue,
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
          s && /* @__PURE__ */ y("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ y(
            ue,
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
), Xd = Pt(
  function(e, n) {
    return /* @__PURE__ */ C(
      "div",
      {
        ref: n,
        className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
        role: "status",
        "aria-busy": "true",
        "aria-live": "polite",
        ...e,
        children: [
          /* @__PURE__ */ y("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: /* @__PURE__ */ y(B, { className: "h-full w-full rounded-lg" }) }),
          /* @__PURE__ */ C("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
            /* @__PURE__ */ C("div", { className: "flex w-full flex-col gap-1 sm:max-w-lg", children: [
              /* @__PURE__ */ y(B, { className: "h-7 w-3/4" }),
              /* @__PURE__ */ y(B, { className: "h-4 w-full" }),
              /* @__PURE__ */ y(B, { className: "h-4 w-2/3" })
            ] }),
            /* @__PURE__ */ C("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ y(B, { className: "h-9 w-32" }),
              /* @__PURE__ */ y(B, { className: "h-9 w-24" })
            ] })
          ] }),
          /* @__PURE__ */ y("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ y(B, { className: "h-8 w-8 rounded-md" }) })
        ]
      }
    );
  }
), j1 = He(
  Lc($1, Xd)
);
j1.displayName = "BaseBanner";
export {
  Cy as A,
  Oy as B,
  V1 as C,
  dS as D,
  G1 as F,
  My as L,
  cS as N,
  rS as P,
  Y1 as R,
  Vy as V,
  Wy as _,
  $v as a,
  Ry as b,
  K1 as c,
  Ty as d,
  W1 as e,
  H1 as f,
  U1 as g,
  gy as h,
  It as i,
  j1 as j,
  ju as k,
  q1 as l,
  X1 as m,
  J1 as n,
  Z1 as o,
  Q1 as p,
  eS as q,
  tS as r,
  nS as s,
  oS as t,
  iS as u,
  sS as v,
  uS as w,
  E1 as x,
  O1 as y,
  Go as z
};
