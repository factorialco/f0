import { jsxs as c, jsx as r, Fragment as xe } from "react/jsx-runtime";
import { useInsertionEffect as tn, forwardRef as p, createElement as $e, useRef as I, useMemo as ee, useEffect as X, useLayoutEffect as Ct, useState as P, useCallback as q, createContext as Ye, useContext as Pe, useId as vt } from "react";
import { cj as rn, ck as nn, cl as on, cm as sn, cn as wt, co as an, cp as cn, cq as ln, cr as dn, cs as fn, ct as xt, cu as un, cv as hn, cw as gn, cx as pn, cy as mn, cz as Cn, cA as vn, cB as We, cC as wn, cD as xn, cE as kn, cF as bn, cG as Ln, Z as kt, cH as yn, cI as Mn, cJ as En, cK as Rn, cL as Fn, cM as bt, cN as Nn, cO as Sn, a6 as m1, cP as Vn, aJ as Tn, cQ as Hn, cR as An, cS as Bn, ag as $n, cT as In, bO as Pn, aa as C1, ad as jn, cU as Dn, ba as v1, a1 as Lt, S as Ke, cV as yt, b9 as Zn, cW as _n, cX as On, b2 as Un, bN as zn, $ as Le, au as Gn, be as Mt, cY as Wn, bL as qn, cZ as Re, bH as Xn, c_ as Yn, c$ as Et, b1 as Rt, d0 as Kn, d1 as Qn, d2 as Jn, d3 as eo, d4 as to, d5 as Ft, bz as ro, bA as no, d6 as oo, d7 as so, d8 as io, d9 as ao, da as co, db as lo, dc as fo, dd as uo, de as ho, df as go, dg as po, dh as mo, di as Co, dj as vo, bM as wo, ab as xo, bv as ko, dk as bo, dl as Lo, dm as yo, dn as Mo, dp as Eo, dq as Ro, dr as Fo, ap as No, ds as Nt, M as So, a0 as Vo, dt as St, du as Vt, dv as To, bd as Ho, bc as Ao, dw as Bo, dx as $o, dy as Tt, dz as Io, b0 as Po, ay as jo, dA as Do, as as Zo, b7 as _o, dB as Ht, b6 as Oo, dC as Uo, bi as w1, dD as zo, dE as Go, dF as x1, bJ as Wo, bI as qo, bK as At, dG as Xo, G as Yo, E as Ko, dH as Qo, dI as Jo, dJ as es, dK as ts, dL as rs, dM as Bt, dN as ns, ac as os, dO as ss, L as fe, q as Fe, o as k, ae as ce, dP as is, bp as as, bC as cs, y as $t, dQ as ls, a5 as Qe, b$ as ds, Q as pe, at as fs, H as le, a8 as It, a9 as us, af as Pt, bq as jt, dR as hs, a$ as Dt, v as me, dS as gs, dT as ps, U as ue, u as Y, dU as ms, cg as Zt, a2 as Cs, dV as vs, aP as ye, A as Ne, p as oe, aD as k1, dW as ws, aE as b1, aF as L1, b as Me, dX as xs, dY as ks, bD as bs, V as Ls, dZ as ys, d_ as Ms, d$ as Es, e0 as $1, a3 as Rs, ak as _t, aS as Ot, e1 as Fs, b_ as Ns, e2 as Ss, e3 as Vs, aX as Ut, e4 as Ts, bU as Hs, e5 as As, aU as Ie, bg as zt, e6 as Gt, bh as Wt, c as u1, e7 as qt, e8 as Bs, bk as $s, e9 as Is, b8 as y1, bw as Ps, ea as js, eb as Ds, ec as Zs, ed as _s, ee as Os, z as Us, ef as Xt, eg as Yt, eh as zs, aj as I1, ei as Gs, ai as Ws, ej as qs, ek as Xs } from "./F0CanvasPanel-CIgfnyUR.js";
import { createPortal as Kt } from "react-dom";
import { defaultTranslations as Ys } from "./i18n-provider-defaults.js";
import { useTrackVolume as Ks } from "@livekit/components-react";
function Qs(e, t, n) {
  tn(() => e.on(t, n), [e, t, n]);
}
function M1(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function Qt(e, t, n, o) {
  return typeof e == "string" && M1(t) ? rn(e, n, o) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e : [e];
}
function Js(e, t, n) {
  return e * (t + 1);
}
function P1(e, t, n, o) {
  return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : o.get(t) ?? e;
}
const ei = (e, t, n) => {
  const o = t - e;
  return ((n - e) % o + o) % o + e;
};
function Jt(e, t) {
  return nn(e) ? e[ei(0, e.length, t)] : e;
}
function ti(e, t, n) {
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    s.at > t && s.at < n && (sn(e, s), o--);
  }
}
function ri(e, t, n, o, s, i) {
  ti(e, s, i);
  for (let a = 0; a < t.length; a++)
    e.push({
      value: t[a],
      at: on(s, i, o[a]),
      easing: Jt(n, a)
    });
}
function ni(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] = e[n] / (t + 1);
}
function oi(e, t) {
  return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
const si = "easeInOut", ii = 20;
function ai(e, { defaultTransition: t = {}, ...n } = {}, o, s) {
  const i = t.duration || 0.3, a = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), l = {}, u = /* @__PURE__ */ new Map();
  let f = 0, g = 0, m = 0;
  for (let h = 0; h < e.length; h++) {
    const C = e[h];
    if (typeof C == "string") {
      u.set(C, g);
      continue;
    } else if (!Array.isArray(C)) {
      u.set(C.name, P1(g, C.at, f, u));
      continue;
    }
    let [v, w, x = {}] = C;
    x.at !== void 0 && (g = P1(g, x.at, f, u));
    let N = 0;
    const T = (E, y, L, H = 0, b = 0) => {
      const A = ci(E), { delay: V = 0, times: R = an(A), type: $ = "keyframes", repeat: _, repeatType: z, repeatDelay: G = 0, ...re } = y;
      let { ease: K = t.ease || "easeOut", duration: O } = y;
      const Z = typeof V == "function" ? V(H, b) : V, D = A.length, Q = dn($) ? $ : s?.[$];
      if (D <= 2 && Q) {
        let ie = 100;
        if (D === 2 && fi(A)) {
          const de = A[1] - A[0];
          ie = Math.abs(de);
        }
        const ne = { ...re };
        O !== void 0 && (ne.duration = fn(O));
        const se = cn(ne, ie, Q);
        K = se.ease, O = se.duration;
      }
      O ?? (O = i);
      const W = g + Z;
      R.length === 1 && R[0] === 0 && (R[1] = 1);
      const he = R.length - A.length;
      if (he > 0 && ln(R, he), A.length === 1 && A.unshift(null), _) {
        xt(_ < ii, "Repeat count too high, must be less than 20"), O = Js(O, _);
        const ie = [...A], ne = [...R];
        K = Array.isArray(K) ? [...K] : [K];
        const se = [...K];
        for (let de = 0; de < _; de++) {
          A.push(...ie);
          for (let M = 0; M < ie.length; M++)
            R.push(ne[M] + (de + 1)), K.push(M === 0 ? "linear" : Jt(se, M - 1));
        }
        ni(R, _);
      }
      const ge = W + O;
      ri(L, A, K, R, W, ge), N = Math.max(Z + O, N), m = Math.max(ge, m);
    };
    if (wt(v)) {
      const E = j1(v, d);
      T(w, x, D1("default", E));
    } else {
      const E = Qt(v, w, o, l), y = E.length;
      for (let L = 0; L < y; L++) {
        w = w, x = x;
        const H = E[L], b = j1(H, d);
        for (const A in w)
          T(w[A], li(x, A), D1(A, b), L, y);
      }
    }
    f = g, g += N;
  }
  return d.forEach((h, C) => {
    for (const v in h) {
      const w = h[v];
      w.sort(oi);
      const x = [], N = [], T = [];
      for (let y = 0; y < w.length; y++) {
        const { at: L, value: H, easing: b } = w[y];
        x.push(H), N.push(un(0, m, L)), T.push(b || "easeOut");
      }
      N[0] !== 0 && (N.unshift(0), x.unshift(x[0]), T.unshift(si)), N[N.length - 1] !== 1 && (N.push(1), x.push(null)), a.has(C) || a.set(C, {
        keyframes: {},
        transition: {}
      });
      const E = a.get(C);
      E.keyframes[v] = x, E.transition[v] = {
        ...t,
        duration: m,
        ease: T,
        times: N,
        ...n
      };
    }
  }), a;
}
function j1(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function D1(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function ci(e) {
  return Array.isArray(e) ? e : [e];
}
function li(e, t) {
  return e && e[t] ? {
    ...e,
    ...e[t]
  } : { ...e };
}
const di = (e) => typeof e == "number", fi = (e) => e.every(di);
function ui(e, t) {
  return e in t;
}
class hi extends hn {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(t, n) {
    if (ui(n, t)) {
      const o = t[n];
      if (typeof o == "string" || typeof o == "number")
        return o;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(t, n) {
    delete n.output[t];
  }
  measureInstanceViewportBox() {
    return gn();
  }
  build(t, n) {
    Object.assign(t.output, n);
  }
  renderInstance(t, { output: n }) {
    Object.assign(t, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function gi(e) {
  const t = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  }, n = pn(e) && !mn(e) ? new Cn(t) : new vn(t);
  n.mount(e), We.set(e, n);
}
function pi(e) {
  const t = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, n = new hi(t);
  n.mount(e), We.set(e, n);
}
function mi(e, t) {
  return wt(e) || typeof e == "number" || typeof e == "string" && !M1(t);
}
function er(e, t, n, o) {
  const s = [];
  if (mi(e, t))
    s.push(wn(e, M1(t) && t.default || t, n && (n.default || n)));
  else {
    const i = Qt(e, t, o), a = i.length;
    xt(!!a, "No valid elements provided.");
    for (let d = 0; d < a; d++) {
      const l = i[d], u = l instanceof Element ? gi : pi;
      We.has(l) || u(l);
      const f = We.get(l), g = { ...n };
      "delay" in g && typeof g.delay == "function" && (g.delay = g.delay(d, a)), s.push(...xn(f, { ...t, transition: g }, {}));
    }
  }
  return s;
}
function Ci(e, t, n) {
  const o = [];
  return ai(e, t, n, { spring: kn }).forEach(({ keyframes: i, transition: a }, d) => {
    o.push(...er(d, i, a));
  }), o;
}
class vi {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => t.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let o = 0; o < this.animations.length; o++)
      this.animations[o][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((o) => o.attachTimeline(t));
    return () => {
      n.forEach((o, s) => {
        o && o(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class wi extends vi {
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
}
function xi(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function ki(e) {
  function t(n, o, s) {
    let i = [];
    return xi(n) ? i = Ci(n, o, e) : i = er(n, o, s, e), new wi(i);
  }
  return t;
}
const bi = ki(), Li = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M3.1606 8.53576L11.8143 5.07428C11.9335 5.0266 12.0665 5.0266 12.1857 5.07428L20.8394 8.53576C21.2585 8.70339 21.2585 9.29661 20.8394 9.46424L12.1857 12.9257C12.0665 12.9734 11.9335 12.9734 11.8143 12.9257L3.1606 9.46424C2.74152 9.29661 2.74152 8.70339 3.1606 8.53576Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M19 10V15.6703C19 15.8703 18.8808 16.0511 18.697 16.1299L12.197 18.9156C12.0712 18.9695 11.9288 18.9695 11.803 18.9156L5.30304 16.1299C5.1192 16.0511 5 15.8703 5 15.6703V10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9L16 11V13.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), yi = p(Li), Mi = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13C7.31371 13 10 9.86599 10 6C10 9.86599 12.6863 13 16 13C12.6863 13 10 16.134 10 20C10 16.134 7.31371 13 4 13Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M17.5001 3.35001C17.8591 3.35001 18.1501 3.64102 18.1501 4.00001C18.1501 5.02173 18.9784 5.85001 20.0001 5.85001C20.3591 5.85001 20.6501 6.14102 20.6501 6.50001C20.6501 6.85899 20.3591 7.15001 20.0001 7.15001C18.9784 7.15001 18.1501 7.97828 18.1501 9.00001C18.1501 9.35899 17.8591 9.65001 17.5001 9.65001C17.1411 9.65001 16.8501 9.35899 16.8501 9.00001C16.8501 7.97828 16.0218 7.15001 15.0001 7.15001C14.6411 7.15001 14.3501 6.85899 14.3501 6.50001C14.3501 6.14102 14.6411 5.85001 15.0001 5.85001C16.0218 5.85001 16.8501 5.02173 16.8501 4.00001C16.8501 3.64102 17.1411 3.35001 17.5001 3.35001Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ei = p(Mi), Ri = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r("mask", { id: "a", fill: "currentColor", children: /* @__PURE__ */ r(
        "path",
        {
          fillRule: "evenodd",
          d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z",
          clipRule: "evenodd",
          vectorEffect: "non-scaling-stroke"
        }
      ) }),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z",
          clipRule: "evenodd",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M12 5.3H13.3V4H12V5.3ZM12 18.7V20H13.3V18.7H12ZM13.6123 4.16253L13.3517 5.43614L13.3517 5.43614L13.6123 4.16253ZM12.998 4.06165L12.8373 5.35168L12.8375 5.3517L12.998 4.06165ZM12.997 4.06152L12.8366 5.35159L12.8378 5.35174L12.997 4.06152ZM12.998 19.9384L12.8375 18.6483L12.8375 18.6483L12.998 19.9384ZM10.7 5.3V18.7H13.3V5.3H10.7ZM12 4C7.58172 4 4 7.58172 4 12H6.6C6.6 9.01766 9.01766 6.6 12 6.6V4ZM4 12C4 16.4183 7.58172 20 12 20V17.4C9.01766 17.4 6.6 14.9823 6.6 12H4ZM13.8729 2.88892C13.6378 2.84081 13.3995 2.80159 13.1586 2.7716L12.8375 5.3517C13.0111 5.37331 13.1826 5.40155 13.3517 5.43614L13.8729 2.88892ZM13.1587 2.77162C13.1591 2.77166 13.1575 2.77146 13.1561 2.7713L12.8378 5.35174L12.8373 5.35168L13.1587 2.77162ZM13.1573 2.77145C12.7777 2.72425 12.3914 2.7 12 2.7V5.3C12.2839 5.3 12.5631 5.31758 12.8366 5.35159L13.1573 2.77145ZM12 2.7C6.86375 2.7 2.7 6.86375 2.7 12H5.3C5.3 8.29969 8.29969 5.3 12 5.3V2.7ZM2.7 12C2.7 17.1362 6.86375 21.3 12 21.3V18.7C8.29969 18.7 5.3 15.7003 5.3 12H2.7ZM12 21.3C12.3918 21.3 12.7785 21.2757 13.1586 21.2284L12.8375 18.6483C12.5636 18.6824 12.2842 18.7 12 18.7V21.3ZM13.1586 21.2284C17.7486 20.6572 21.3 16.7443 21.3 12H18.7C18.7 15.4163 16.142 18.2371 12.8375 18.6483L13.1586 21.2284ZM21.3 12C21.3 7.50426 18.1113 3.75622 13.8729 2.88892L13.3517 5.43614C16.4042 6.06078 18.7 8.76375 18.7 12H21.3Z",
          mask: "url(#a)",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Fi = p(Ri), Ni = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 9V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V9C20 9.55228 19.5523 10 19 10H5C4.44772 10 4 9.55228 4 9Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 15V10H19V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 14H10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Si = p(Ni), Vi = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.87597 10.0077L3.62403 7.99228C3.55553 7.44426 3.94426 6.94447 4.49228 6.87597L18.5077 5.12403C19.0557 5.05553 19.5555 5.44426 19.624 5.99228L19.876 8.00772C19.9445 8.55574 19.5557 9.05553 19.0077 9.12403L4.99228 10.876C4.44426 10.9445 3.94447 10.5557 3.87597 10.0077Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 14H10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ti = p(Vi), Hi = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12.0378 4.99827C9.27031 4.98425 6.64086 6.62323 5.52481 9.34068C4.86209 10.9543 4.84625 12.6725 5.35698 14.2073C5.60483 14.9521 5.9767 15.6537 6.45883 16.2793C6.6563 16.5355 6.87225 16.7789 7.10576 17.0073M16.8942 6.99277C17.4439 7.53039 17.8963 8.15128 18.2391 8.82593C19.1303 10.5797 19.2812 12.6969 18.4752 14.6594C17.3591 17.3768 14.7297 19.0158 11.9621 19.0018",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.51576 15.4263L7.93678 18.1948L5.16824 17.6158",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16.1409 9.23552L16.7199 6.46699L19.4884 7.04596",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ai = p(Hi), Bi = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 19H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 13V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 12.5L19 13.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 7.5,
          cy: 6.5,
          r: 2.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 17,
          cy: 7.5,
          r: 2.5,
          fill: "currentColor",
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), $i = p(Bi), Ii = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "rect",
        {
          width: 16,
          height: 4,
          x: 4,
          y: 16,
          stroke: "currentColor",
          rx: 1,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M4 5.78078C4 5.32191 4.3123 4.92193 4.75746 4.81063L11.7575 3.06063C11.9167 3.02082 12.0833 3.02082 12.2425 3.06063L19.2425 4.81063C19.6877 4.92193 20 5.32191 20 5.78078V8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8V5.78078Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r("path", { stroke: "currentColor", d: "M6 9V16", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M18 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M14 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M10 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Pi = p(Ii), ji = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "rect",
        {
          width: 16,
          height: 12,
          x: 4,
          y: 6,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 13L8 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9L12 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 11L16 15",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Di = p(ji), Zi = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        d: "M12 1.75C13.3815 1.75019 14.4595 2.86532 15.1504 4.19336C15.4816 4.8302 15.7498 5.56266 15.9434 6.34961C16.4284 6.34988 16.8333 6.35262 17.167 6.37988C17.5405 6.41043 17.8825 6.47529 18.2031 6.63867C18.7018 6.89274 19.1073 7.29825 19.3613 7.79688C19.5247 8.11754 19.5896 8.45951 19.6201 8.83301C19.65 9.19912 19.6504 9.65087 19.6504 10.2002V15.2002C19.6504 16.0295 19.651 16.6908 19.6074 17.2236C19.5633 17.764 19.4699 18.2295 19.252 18.6572C18.902 19.3438 18.3438 19.902 17.6572 20.252C17.2295 20.4699 16.764 20.5633 16.2236 20.6074C15.6908 20.651 15.0295 20.6504 14.2002 20.6504H9.7998C8.97054 20.6504 8.30919 20.651 7.77637 20.6074C7.23603 20.5633 6.77047 20.4699 6.34277 20.252C5.65615 19.902 5.09795 19.3438 4.74805 18.6572C4.53012 18.2295 4.43674 17.764 4.39258 17.2236C4.34904 16.6908 4.34961 16.0295 4.34961 15.2002V10.2002C4.34961 9.65087 4.34997 9.19912 4.37988 8.83301C4.41043 8.45951 4.47529 8.11754 4.63867 7.79688C4.89274 7.29825 5.29825 6.89274 5.79688 6.63867C6.11754 6.47529 6.45951 6.41043 6.83301 6.37988C7.16627 6.35265 7.5705 6.34988 8.05469 6.34961C8.24828 5.56243 8.51833 4.83035 8.84961 4.19336C9.54044 2.86519 10.6184 1.75019 12 1.75ZM9.12598 7.65039C9.05158 8.16025 9.01074 8.68958 9.01074 9.22559C9.01043 9.58418 8.71898 9.87481 8.36035 9.875C8.00156 9.875 7.71028 9.5843 7.70996 9.22559C7.70996 8.69464 7.7455 8.16652 7.8125 7.65137C7.44434 7.65243 7.16671 7.65624 6.93945 7.6748C6.64615 7.69877 6.49373 7.74235 6.38672 7.79688C6.13286 7.92628 5.92628 8.13286 5.79688 8.38672C5.74235 8.49373 5.69877 8.64615 5.6748 8.93945C5.65023 9.24033 5.65039 9.62951 5.65039 10.2002V15.2002C5.65039 16.0507 5.65029 16.6496 5.68848 17.1172C5.72605 17.577 5.79732 17.8525 5.90625 18.0664C6.13155 18.5086 6.49141 18.8684 6.93359 19.0938C7.14751 19.2027 7.42299 19.274 7.88281 19.3115C8.35038 19.3497 8.94928 19.3496 9.7998 19.3496H14.2002C15.0507 19.3496 15.6496 19.3497 16.1172 19.3115C16.577 19.274 16.8525 19.2027 17.0664 19.0938C17.5086 18.8684 17.8684 18.5086 18.0938 18.0664C18.2027 17.8525 18.274 17.577 18.3115 17.1172C18.3497 16.6496 18.3496 16.0507 18.3496 15.2002V10.2002C18.3496 9.62951 18.3498 9.24033 18.3252 8.93945C18.3012 8.64615 18.2576 8.49373 18.2031 8.38672C18.0737 8.13286 17.8671 7.92628 17.6133 7.79688C17.5063 7.74235 17.3539 7.69877 17.0605 7.6748C16.8329 7.65621 16.5547 7.65242 16.1855 7.65137C16.2526 8.16657 16.29 8.69458 16.29 9.22559C16.2897 9.58409 15.9991 9.87466 15.6406 9.875C15.2818 9.875 14.9906 9.5843 14.9902 9.22559C14.9902 8.68955 14.9485 8.16024 14.874 7.65039H9.12598ZM12 3.05078C11.3716 3.05098 10.6293 3.58955 10.0029 4.79395C9.76477 5.25197 9.56079 5.77813 9.40039 6.34961H14.5986C14.4381 5.77833 14.2352 5.25187 13.9971 4.79395C13.3706 3.58954 12.6284 3.05098 12 3.05078Z",
        fill: "currentColor"
      }
    )
  }
), _i = p(Zi), Oi = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 7.50006C15 5.49507 17.5 5.50004 20 7.50006V16.9194C20 17.7579 19.0021 18.2442 18.2289 17.9199C16.2959 17.109 14.2941 17.4668 12 19M12 7.50006C9 5.49507 6.5 5.50004 4 7.50006L4 16.9194C4 17.7579 4.99792 18.2442 5.77115 17.9199C7.7041 17.109 9.70585 17.4668 12 19M12 7.50006V19",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Ui = p(Oi), zi = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "rect",
        {
          width: 16,
          height: 12,
          x: 4,
          y: 7,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M8.9999 6.99998V5.99998C8.9999 4.89542 9.89533 3.99998 10.9999 3.99998H12.9999C14.1045 3.99998 14.9999 4.89542 14.9999 5.99998V6.99998",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M7.9999 6.99998V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M15.9999 6.99998V19",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Gi = p(zi), Wi = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M9.00195 4.53821L4.85303 10.1967C3.8316 11.5898 3.97926 13.5197 5.20072 14.7411L5.35342 14.8938C6.58509 16.1255 8.53503 16.264 9.92845 15.2188L15.5019 11.0382",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M15.502 11.0382C14.6524 11.8878 12.5023 11.1152 10.7096 9.32251C8.91686 7.52977 8.15226 5.38778 9.0018 4.53824C9.85135 3.68869 11.9933 4.4533 13.7861 6.24603C15.5788 8.03877 16.3515 10.1887 15.502 11.0382Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M19.5 17.5C19.5 18.6046 18.6046 19.5 17.5 19.5C16.3954 19.5 15.5 18.6046 15.5 17.5C15.5 15.8589 16.8467 14.2177 17.3299 13.6816C17.4224 13.5791 17.5776 13.5791 17.6701 13.6816C18.1533 14.2177 19.5 15.8589 19.5 17.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), qi = p(Wi), Xi = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5.52922 6.63982L10.5292 3.82732C11.4425 3.31362 12.5575 3.31362 13.4708 3.82732L18.4708 6.63982C19.4154 7.17117 20 8.17072 20 9.25454V14.7455C20 15.8293 19.4154 16.8288 18.4708 17.3602L13.4708 20.1727C12.5575 20.6864 11.4425 20.6864 10.5292 20.1727L5.52922 17.3602C4.58459 16.8288 4 15.8293 4 14.7455V9.25454C4 8.17072 4.58459 7.17117 5.52922 6.63982Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 8L12 12M12 20V12M19 8L12 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M15 15.0662V18.2338C15 19.0111 15.848 19.4912 16.5145 19.0913L17.0145 18.7913C17.3157 18.6106 17.5 18.2851 17.5 17.9338V13.8831C17.5 13.4944 17.076 13.2544 16.7428 13.4543L15.4855 14.2087C15.1843 14.3894 15 14.7149 15 15.0662Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Yi = p(Xi), Ki = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16.5 15L16.5 21M16.5 21L14 18.5M16.5 21L19 18.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Qi = p(Ki), Ji = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 17.5H13M13 17.5L16 14.5M13 17.5L16 20.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ea = p(Ji), ta = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13 17.5H20M20 17.5L17 14.5M20 17.5L17 20.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ra = p(ta), na = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 10V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V10C4 8.34315 5.34315 7 7 7H7.27924C7.70967 7 8.09181 6.72457 8.22792 6.31623L8.31623 6.05132C8.72457 4.82629 9.87099 4 11.1623 4H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 3,
          stroke: "currentColor",
          strokeLinecap: "round",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 6.5L16 6.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 8V5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), oa = p(na), sa = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ia = p(sa), aa = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M19.9995 12.6495C19.9995 13.9164 19.1682 15.0475 17.9214 15.4767L8.20654 18.8194C6.15882 19.5237 3.99986 18.0738 3.99951 15.9933L3.99951 8.00694C3.99979 5.92631 6.15877 4.47641 8.20654 5.18077L17.9214 8.52354C19.1683 8.95274 19.9995 10.0837 19.9995 11.3507L19.9995 12.6495ZM7.71924 6.59874C6.55322 6.19771 5.49981 7.0517 5.49951 8.00694L5.49951 15.9933C5.49988 16.9485 6.55329 17.8024 7.71924 17.4015L8.74951 17.047L8.74951 6.95323L7.71924 6.59874ZM10.2495 7.46983L10.2495 16.5304L13.7495 15.3253L13.7495 8.67491L10.2495 7.46983ZM18.4995 11.3507C18.4995 10.7587 18.108 10.1748 17.4331 9.94249L15.2495 9.19053L15.2495 14.8097L17.4331 14.0577C18.1079 13.8254 18.4995 13.2415 18.4995 12.6495L18.4995 11.3507Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ca = p(aa), la = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M12.9712 6.72803C12.9711 7.69427 12.1874 8.47779 11.2212 8.47803L6.77686 8.47803C5.81044 8.47803 5.02699 7.69441 5.02686 6.72803L5.02686 5.72803C5.02686 4.76153 5.81036 3.97803 6.77686 3.97803L11.2212 3.97803C12.1875 3.97826 12.9712 4.76167 12.9712 5.72803L12.9712 6.72803ZM18.9712 12.5005C18.9712 13.4668 18.1875 14.2503 17.2212 14.2505L6.77686 14.2505C5.81036 14.2505 5.02686 13.467 5.02686 12.5005L5.02686 11.5005C5.02686 10.534 5.81036 9.75049 6.77686 9.75049L17.2212 9.75049C18.1875 9.75072 18.9712 10.5341 18.9712 11.5005L18.9712 12.5005ZM15.9712 18.271C15.9709 19.2371 15.1873 20.0208 14.2212 20.021L6.77685 20.021C5.81052 20.021 5.02712 19.2373 5.02685 18.271L5.02685 17.271C5.02685 16.3045 5.81036 15.521 6.77685 15.521L14.2212 15.521C15.1875 15.5212 15.9712 16.3046 15.9712 17.271L15.9712 18.271ZM11.4712 5.72803C11.4712 5.5901 11.3591 5.47826 11.2212 5.47803L6.77686 5.47803C6.63878 5.47803 6.52686 5.58996 6.52686 5.72803L6.52686 6.72803C6.52699 6.86599 6.63887 6.97803 6.77686 6.97803L11.2212 6.97803C11.359 6.97779 11.4711 6.86584 11.4712 6.72803L11.4712 5.72803ZM17.4712 11.5005C17.4712 11.3626 17.3591 11.2507 17.2212 11.2505L6.77686 11.2505C6.63878 11.2505 6.52686 11.3624 6.52686 11.5005L6.52686 12.5005C6.52686 12.6386 6.63878 12.7505 6.77686 12.7505L17.2212 12.7505C17.3591 12.7503 17.4712 12.6384 17.4712 12.5005L17.4712 11.5005ZM14.4712 17.271C14.4712 17.1331 14.3591 17.0212 14.2212 17.021L6.77685 17.021C6.63878 17.021 6.52685 17.1329 6.52685 17.271L6.52685 18.271C6.52712 18.4088 6.63895 18.521 6.77685 18.521L14.2212 18.521C14.3589 18.5208 14.4709 18.4087 14.4712 18.271L14.4712 17.271Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), da = p(la), fa = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M3.73145 4.97357C4.14535 4.97393 4.48145 5.30958 4.48145 5.72357V10.2646C4.48145 11.6768 4.48184 12.6912 4.54688 13.4872C4.61121 14.2744 4.73473 14.7829 4.94434 15.1943C5.3518 15.9936 6.00238 16.6434 6.80176 17.0507C7.21303 17.2602 7.72096 17.3848 8.50781 17.4492C9.30388 17.5142 10.3192 17.5146 11.7314 17.5146H20.2607C20.6748 17.5148 21.0107 17.8505 21.0107 18.2646C21.0104 18.6784 20.6746 19.0144 20.2607 19.0146H11.7314C10.3439 19.0146 9.25705 19.0145 8.38574 18.9433C7.50611 18.8714 6.77893 18.7227 6.12109 18.3876C5.0394 17.8365 4.15969 16.9565 3.6084 15.8749C3.2731 15.2169 3.12368 14.4893 3.05176 13.6093C2.98058 12.7381 2.98145 11.652 2.98145 10.2646V5.72357C2.98145 5.30936 3.31723 4.97357 3.73145 4.97357ZM18.7578 8.46674C19.0521 8.17559 19.527 8.17856 19.8184 8.4726C20.1095 8.76702 20.1068 9.24185 19.8125 9.53314L16.4014 12.9091L16.3447 12.9599C16.0511 13.1972 15.6197 13.1803 15.3457 12.9091L12.4629 10.0556L8.11621 14.3564C7.82179 14.6474 7.34694 14.6448 7.05566 14.3505C6.76484 14.0561 6.76743 13.5812 7.06152 13.29L11.9346 8.46674C12.2267 8.17759 12.698 8.17781 12.9902 8.46674L15.874 11.3212L18.7578 8.46674Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ua = p(fa), ha = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M21.0005 11.9995C21.0005 12.4136 20.6645 12.7492 20.2505 12.7495L19.9644 12.7495C19.5862 16.8159 16.1656 20.0002 12.0005 20.0005C7.58237 20.0005 4.00075 16.4185 4.00049 12.0005C4.00049 7.83514 7.18391 4.41376 11.2505 4.03564L11.2495 3.75049C11.2495 3.33644 11.5855 3.00075 11.9995 3.00049C16.9699 3.00049 21.0002 7.02917 21.0005 11.9995ZM15.6753 12.7505C15.3277 14.4617 13.8143 15.7503 12.0005 15.7505C9.92963 15.7505 8.25083 14.0713 8.25049 12.0005C8.25049 10.1862 9.53875 8.67211 11.2505 8.32471L11.2505 5.54443C8.01397 5.91634 5.50049 8.66434 5.50049 12.0005C5.50075 15.5901 8.4108 18.5005 12.0005 18.5005C15.3364 18.5002 18.0847 15.9859 18.4565 12.7495L15.6753 12.7505ZM14.2505 12.0005C14.2505 10.758 13.2429 9.75075 12.0005 9.75049C10.7578 9.75049 9.75049 10.7578 9.75049 12.0005C9.75083 13.2428 10.7581 14.2505 12.0005 14.2505C13.2427 14.2502 14.2501 13.2427 14.2505 12.0005ZM19.4624 11.2495C19.1104 7.70663 16.2934 4.88961 12.7505 4.5376L12.7505 8.32471C14.2197 8.62312 15.3771 9.78123 15.6753 11.2505L19.4624 11.2495Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ga = p(ha), pa = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M6.72754 11.0273C7.69378 11.0275 8.4773 11.8111 8.47754 12.7773V17.2217C8.47754 18.1881 7.69393 18.9715 6.72754 18.9717H5.72754C4.76104 18.9717 3.97754 18.1882 3.97754 17.2217V12.7773C3.97777 11.811 4.76119 11.0273 5.72754 11.0273H6.72754ZM12.5 5.02734C13.4664 5.02734 14.2498 5.81104 14.25 6.77734V17.2217C14.25 18.1882 13.4665 18.9717 12.5 18.9717H11.5C10.5335 18.9717 9.75 18.1882 9.75 17.2217V6.77734C9.75023 5.81104 10.5336 5.02734 11.5 5.02734H12.5ZM18.2705 8.02734C19.2366 8.02761 20.0203 8.81121 20.0205 9.77734V17.2217C20.0205 18.188 19.2368 18.9714 18.2705 18.9717H17.2705C16.304 18.9717 15.5205 18.1882 15.5205 17.2217V9.77734C15.5207 8.81104 16.3042 8.02734 17.2705 8.02734H18.2705ZM5.72754 12.5273C5.58961 12.5273 5.47777 12.6395 5.47754 12.7773V17.2217C5.47754 17.3598 5.58947 17.4717 5.72754 17.4717H6.72754C6.8655 17.4715 6.97754 17.3597 6.97754 17.2217V12.7773C6.97731 12.6396 6.86535 12.5275 6.72754 12.5273H5.72754ZM11.5 6.52734C11.3621 6.52734 11.2502 6.63947 11.25 6.77734V17.2217C11.25 17.3598 11.3619 17.4717 11.5 17.4717H12.5C12.6381 17.4717 12.75 17.3598 12.75 17.2217V6.77734C12.7498 6.63947 12.6379 6.52734 12.5 6.52734H11.5ZM17.2705 9.52734C17.1326 9.52734 17.0207 9.63947 17.0205 9.77734V17.2217C17.0205 17.3598 17.1324 17.4717 17.2705 17.4717H18.2705C18.4084 17.4714 18.5205 17.3596 18.5205 17.2217V9.77734C18.5203 9.63963 18.4082 9.52761 18.2705 9.52734H17.2705Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ma = p(pa), Ca = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9.00002 12L11.4 14.4L15 9.6",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), va = p(Ca), wa = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "rect",
        {
          width: 12,
          height: 12,
          x: 6,
          y: 6,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 6V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 9L20 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 9L6 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 6V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 20V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 15L20 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 15L6 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9L9 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 12L12 15",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), xa = p(wa), ka = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M10.508 4.49715C12.2437 4.15195 14.0458 4.41874 15.6066 5.253C17.1673 6.08728 18.3903 7.43741 19.0675 9.07234C19.7447 10.7074 19.8342 12.5272 19.3205 14.2208C18.8067 15.9143 17.7216 17.3772 16.2502 18.3604C14.7786 19.3437 13.0114 19.7868 11.2502 19.6134C9.48897 19.4399 7.8424 18.6606 6.59098 17.4093C6.33717 17.1554 6.33722 16.7442 6.59098 16.4903C6.84482 16.2365 7.2561 16.2365 7.50992 16.4903C8.54871 17.529 9.91615 18.1754 11.3781 18.3194C12.8399 18.4633 14.3071 18.0964 15.5285 17.2803C16.7497 16.4643 17.6498 15.2493 18.0763 13.8438C18.5027 12.4381 18.4284 10.9276 17.8664 9.57039C17.3042 8.21318 16.2889 7.09203 14.9933 6.39949C13.6978 5.7071 12.2016 5.48597 10.7609 5.77254C9.32029 6.05921 8.02383 6.83634 7.09196 7.97175C6.28743 8.95212 5.7977 10.1469 5.67887 11.4005L6.5402 10.5401L6.64274 10.4571C6.89502 10.2907 7.23806 10.3181 7.46012 10.5401C7.68199 10.7622 7.70952 11.1053 7.54313 11.3575L7.46012 11.46L5.46012 13.46C5.23812 13.682 4.89497 13.7093 4.64274 13.543L4.5402 13.46L2.5402 11.46L2.45719 11.3575C2.29077 11.1052 2.31822 10.7622 2.5402 10.5401C2.76225 10.3181 3.1053 10.2907 3.35758 10.4571L3.46012 10.5401L4.37028 11.4503C4.48367 9.87729 5.08099 8.37252 6.08707 7.14656C7.20984 5.77868 8.77231 4.84239 10.508 4.49715ZM12.0002 8.34968C12.3591 8.34975 12.6505 8.64113 12.6505 9.00007V11.6231L15.8224 13.4356L15.9298 13.5118C16.1569 13.7113 16.2203 14.0497 16.0646 14.3223C15.9088 14.5948 15.5851 14.7124 15.298 14.6182L15.1779 14.5645L11.6779 12.5645C11.4755 12.4488 11.3499 12.2332 11.3498 12.0001V9.00007C11.3498 8.64109 11.6412 8.34968 12.0002 8.34968Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ba = p(ka), La = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13 19.9381C12.6724 19.979 12.3387 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.4104 19.9691 12.8136 19.9095 13.2073",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9V12L15.5 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 18H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 16L18 20",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ya = p(La), Ma = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M12 6C14.2091 6 16 7.79086 16 10C18.2091 10 20 11.7909 20 14C20 16.2091 18.2091 18 16 18H8C5.79086 18 4 16.2091 4 14C4 11.7909 5.79086 10 8 10C8 7.79086 9.79086 6 12 6Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Ea = p(Ma), Ra = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M6 17V8.5C6 7.94772 6.44772 7.5 7 7.5H15C15.5523 7.5 16 7.94772 16 8.5V17C16 18.6569 14.6569 20 13 20H9C7.34315 20 6 18.6569 6 17Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 2V2C7.44772 2.55228 7.44772 3.44772 8 4V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 2V2C11.4477 2.55228 11.4477 3.44772 12 4V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 11H17.5C18.6046 11 19.5 11.8954 19.5 13V15C19.5 16.1046 18.6046 17 17.5 17H16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Fa = p(Ra), Na = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 9L11 12L8 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13 15H16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Sa = p(Na), Va = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 18H13",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 15V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12.5 7H6.2C5.0799 7 4.51984 7 4.09202 7.21799C3.71569 7.40973 3.40973 7.71569 3.21799 8.09202C3 8.51984 3 9.0799 3 10.2V11.8C3 12.9201 3 13.4802 3.21799 13.908C3.40973 14.2843 3.71569 14.5903 4.09202 14.782C4.51984 15 5.07989 15 6.2 15H12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M15 8C15 7.06812 15 6.60218 15.1522 6.23463C15.3552 5.74458 15.7446 5.35523 16.2346 5.15224C16.6022 5 17.0681 5 18 5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V15C21 15.9319 21 16.3978 20.8478 16.7654C20.6448 17.2554 20.2554 17.6448 19.7654 17.8478C19.3978 18 18.9319 18 18 18C17.0681 18 16.6022 18 16.2346 17.8478C15.7446 17.6448 15.3552 17.2554 15.1522 16.7654C15 16.3978 15 15.9319 15 15V8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 15V15.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ta = p(Va), Ha = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6.5 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 5C17.0499 6.64327 18.3625 9.16835 18.3625 12C18.3625 14.8316 17.0499 17.3567 15 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11 7.51669C12.3129 8.56917 13.1536 10.1864 13.1536 12C13.1536 13.8136 12.3129 15.4309 11 16.4833",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Aa = p(Ha), Ba = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16 6L6 16M17 11.5L11.5 17",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), $a = p(Ba), Ia = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 10V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V10M20 10V9C20 7.34315 18.6569 6 17 6H7C5.34315 6 4 7.34315 4 9V10M20 10H4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 14H10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Pa = p(Ia), ja = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        d: "M4.93 4.54l14.14 5.39c.6.22.59.36.14.62l-5.56 2.85c-.46.23-.66.41-.89.86l-2.89 5.31c-.22.39-.4.4-.55 0L4.34 5.22c-.21-.69-.14-.84.59-.68Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Da = p(ja), Za = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.57235 9.90784L6.57241 16.5747C6.8262 17.4207 7.60484 18 8.48806 18H15.5119C16.3952 18 17.1738 17.4207 17.4276 16.5747L19.4276 9.90784C19.664 9.11999 18.9011 8.3996 18.1281 8.6807L15.3975 9.67363C14.8953 9.85626 14.3382 9.61174 14.1327 9.11845L12.9231 6.21538C12.5812 5.39487 11.4188 5.39487 11.0769 6.21538L9.86731 9.11845C9.66177 9.61174 9.10471 9.85626 8.60249 9.67363L5.87192 8.6807C5.09891 8.3996 4.336 9.11999 4.57235 9.90784Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), _a = p(Za), Oa = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.98311 10C3.98311 6.6771 6.67686 3.98335 9.99977 3.98335C11.4271 3.98335 12.7383 4.48035 13.7698 5.31072L5.31048 13.7701C4.4801 12.7385 3.98311 11.4273 3.98311 10ZM6.22972 14.6893C7.26124 15.5197 8.57247 16.0167 9.99977 16.0167C13.3227 16.0167 16.0164 13.3229 16.0164 10C16.0164 8.57271 15.5194 7.26149 14.6891 6.22996L6.22972 14.6893ZM9.99977 2.68335C5.95889 2.68335 2.68311 5.95913 2.68311 10C2.68311 14.0409 5.95889 17.3167 9.99977 17.3167C14.0407 17.3167 17.3164 14.0409 17.3164 10C17.3164 5.95913 14.0407 2.68335 9.99977 2.68335Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Ua = p(Oa), za = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 4H18C19.6569 4 21 5.34315 21 7V13C21 14.6569 19.6569 16 18 16H6C4.34315 16 3 14.6569 3 13V7C3 5.34315 4.34315 4 6 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 20H17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 20L9 16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 20L15 16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ga = p(za), Wa = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "rect",
        {
          width: 16,
          height: 12,
          x: 4,
          y: 6,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 9H11.5C10.6716 9 10 9.67157 10 10.5V10.5C10 11.3284 10.6716 12 11.5 12H12.5C13.3284 12 14 12.6716 14 13.5V13.5C14 14.3284 13.3284 15 12.5 15H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), qa = p(Wa), Xa = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14.5 9H11C10.1716 9 9.5 9.67157 9.5 10.5C9.5 11.3284 10.1716 12 11 12H13C13.8284 12 14.5 12.6716 14.5 13.5C14.5 14.3284 13.8284 15 13 15H9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9V8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 16V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1304 20 16.0663 19.1672 17.5 17.8095",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 10.5L20 12.5L22 10.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ya = p(Xa), Ka = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M20 15V8.61803C20 8.23926 19.786 7.893 19.4472 7.72361L13.3416 4.67082C12.4971 4.24853 11.5029 4.24853 10.6584 4.67082L4.55279 7.72361C4.214 7.893 4 8.23926 4 8.61803V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M4 9L11.4969 12.7484C11.8136 12.9068 12.1864 12.9068 12.5031 12.7484L20 9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Qa = p(Ka), Ja = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.0001 12L19.0001 12M19.0001 12L16.0001 9.00001M19.0001 12L16.0001 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M11.0001 19L8.00011 19C6.34325 19 5.00011 17.6569 5.00011 16L5.00011 8.00001C5.00011 6.34315 6.34325 5.00001 8.00011 5.00001L11.0001 5.00001",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), e5 = p(Ja), t5 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 12H7L9.5 6.5L14.5 17.5L17 12H20",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), r5 = p(t5), n5 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M14.8787 4.87868L17.1213 7.12132C17.684 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9.00002C7.34317 20 6.00002 18.6569 6.00002 17V7C6.00002 5.34315 7.34317 4 9.00002 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), o5 = p(n5), s5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.8787 4.87868L17.1213 7.12132C17.6839 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 12H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16H10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), i5 = p(s5), a5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.8787 4.87868L17.1213 7.12132C17.6839 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 16H10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), c5 = p(a5), l5 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9 2.35001C6.98416 2.35001 5.35 3.98417 5.35 6.00001V14C5.35 16.0158 6.98416 17.65 9 17.65H14C16.0158 17.65 17.65 16.0158 17.65 14V8.24265C17.65 7.27461 17.2654 6.34621 16.5809 5.66171L14.3383 3.41907C13.6538 2.73456 12.7254 2.35001 11.7574 2.35001H9ZM6.65 6.00001C6.65 4.70214 7.70213 3.65001 9 3.65001H11.7574C12.3806 3.65001 12.9783 3.89759 13.4191 4.3383L15.6617 6.58095C16.1024 7.02166 16.35 7.61939 16.35 8.24265V14C16.35 15.2979 15.2979 16.35 14 16.35H9C7.70213 16.35 6.65 15.2979 6.65 14V6.00001ZM20.65 9.00001C20.65 8.64102 20.359 8.35001 20 8.35001C19.641 8.35001 19.35 8.64102 19.35 9.00001V10.4C19.35 12.0909 19.3495 13.32 19.2704 14.2879C19.192 15.2482 19.0394 15.894 18.7669 16.4289C18.254 17.4355 17.4355 18.254 16.4288 18.7669C15.894 19.0394 15.2482 19.192 14.2879 19.2704C13.32 19.3495 12.0909 19.35 10.4 19.35H9C8.64101 19.35 8.35 19.641 8.35 20C8.35 20.359 8.64101 20.65 9 20.65H10.4H10.4296C12.0847 20.65 13.3667 20.65 14.3937 20.5661C15.4344 20.4811 16.2704 20.3067 17.019 19.9252C18.2703 19.2876 19.2876 18.2703 19.9252 17.019C20.3066 16.2704 20.4811 15.4344 20.5661 14.3937C20.65 13.3667 20.65 12.0847 20.65 10.4296V10.4V9.00001Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), d5 = p(l5), f5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 5.50001C9.5 4.50001 11 5.00001 12.5 6.00001C14 7 16 7.00002 18 5.50002V15C16 16.5 14 16.5 12.5 15.5C11 14.5 9.5 14 6 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 4V20",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), u5 = p(f5), h5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M9 9.44526V4H14.8038V9.44526C14.8038 10.4578 15.1113 11.4466 15.6855 12.2806L18.8423 16.8659C19.7558 18.1928 18.8059 20 17.1949 20H6.60892C4.99797 20 4.04806 18.1928 4.96158 16.8659L8.11836 12.2806C8.69256 11.4466 9 10.4578 9 9.44526Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 4L16 4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6.60938 14.5H17",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), g5 = p(h5), p5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M10.4375 5C10.09 4.38228 9.43639 4 8.72765 4H7.12954C6.07585 4 5.54901 4 5.14167 4.19355C4.72595 4.39108 4.39108 4.72595 4.19355 5.14167C4 5.54901 4 6.07585 4 7.12954V11.2C4 12.8802 4 13.7202 4.32698 14.362C4.6146 14.9265 5.07354 15.3854 5.63803 15.673C6.27976 16 7.11984 16 8.8 16H13.2C14.8802 16 15.7202 16 16.362 15.673C16.9265 15.3854 17.3854 14.9265 17.673 14.362C18 13.7202 18 12.8802 18 11.2V10.4168C18 9.09704 18 8.43714 17.796 7.91257C17.4911 7.12874 16.8713 6.50887 16.0874 6.20402C15.5629 6 14.903 6 13.5832 6H12.1473C11.4386 6 10.785 5.61772 10.4375 5V5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 19H11.4C14.7603 19 16.4405 19 17.7239 18.346C18.8529 17.7708 19.7708 16.8529 20.346 15.7239C21 14.4405 21 12.7603 21 9.4V9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), m5 = p(p5), C5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12H5.00001",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M12 20C10.2326 18.1964 9.00001 14.7247 9.00001 12C9.00001 9.27527 10.2326 5.80363 12 4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M12 20C13.7674 18.1964 15 14.7247 15 12C15 9.27527 13.7674 5.80363 12 4",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), v5 = p(C5), w5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 6V15C4 16.6569 5.34315 18 7 18H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 14L11.6464 10.3536C11.8417 10.1583 12.1583 10.1583 12.3536 10.3536L14.6464 12.6464C14.8417 12.8417 15.1583 12.8417 15.3536 12.6464L20 8M20 8V11M20 8H17",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), x5 = p(w5), k5 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6 4.35001C5.08873 4.35001 4.35 5.08874 4.35 6.00001V8.00001C4.35 8.91128 5.08873 9.65001 6 9.65001H6.35V14.35H6C5.08873 14.35 4.35 15.0887 4.35 16V18C4.35 18.9113 5.08873 19.65 6 19.65H8C8.91127 19.65 9.65 18.9113 9.65 18V17.65H14.35V18C14.35 18.9113 15.0887 19.65 16 19.65H18C18.9113 19.65 19.65 18.9113 19.65 18V16C19.65 15.0887 18.9113 14.35 18 14.35H17.65V9.65001H18C18.9113 9.65001 19.65 8.91128 19.65 8.00001V6.00001C19.65 5.08874 18.9113 4.35001 18 4.35001H16C15.0887 4.35001 14.35 5.08874 14.35 6.00001V6.35001H9.65V6.00001C9.65 5.08874 8.91127 4.35001 8 4.35001H6ZM17 8.35001H18C18.1933 8.35001 18.35 8.19331 18.35 8.00001V6.00001C18.35 5.80671 18.1933 5.65001 18 5.65001H16C15.8067 5.65001 15.65 5.80671 15.65 6.00001V6.99888L15.65 7.00001L15.65 7.00113V8.00001C15.65 8.19331 15.8067 8.35001 16 8.35001H17ZM16.35 9.65001V14.35H16C15.0887 14.35 14.35 15.0887 14.35 16V16.35H9.65V16C9.65 15.0887 8.91127 14.35 8 14.35H7.65V9.65001H8C8.91127 9.65001 9.65 8.91128 9.65 8.00001V7.65001H14.35V8.00001C14.35 8.91128 15.0887 9.65001 16 9.65001H16.35ZM16.9989 15.65H16C15.8067 15.65 15.65 15.8067 15.65 16V16.9989L15.65 17L15.65 17.0011V18C15.65 18.1933 15.8067 18.35 16 18.35H18C18.1933 18.35 18.35 18.1933 18.35 18V16C18.35 15.8067 18.1933 15.65 18 15.65H17.0011C17.0007 15.65 17.0004 15.65 17 15.65C16.9996 15.65 16.9992 15.65 16.9989 15.65ZM8 8.35001H7H6C5.8067 8.35001 5.65 8.19331 5.65 8.00001V6.00001C5.65 5.80671 5.8067 5.65001 6 5.65001H8C8.1933 5.65001 8.35 5.80671 8.35 6.00001V7.00001V8.00001C8.35 8.19331 8.1933 8.35001 8 8.35001ZM6 15.65H6.99887L7 15.65L7.00112 15.65H8C8.1933 15.65 8.35 15.8067 8.35 16V17V18C8.35 18.1933 8.1933 18.35 8 18.35H6C5.8067 18.35 5.65 18.1933 5.65 18V16C5.65 15.8067 5.8067 15.65 6 15.65Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), b5 = p(k5), L5 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.35 16.5C3.35 17.6874 4.31259 18.65 5.5 18.65L6.5 18.65C7.68741 18.65 8.65 17.6874 8.65 16.5L8.65 15.5C8.65 14.3126 7.68741 13.35 6.5 13.35L5.5 13.35C4.31259 13.35 3.35 14.3126 3.35 15.5L3.35 16.5ZM5.5 17.35C5.03056 17.35 4.65 16.9694 4.65 16.5L4.65 15.5C4.65 15.0305 5.03056 14.65 5.5 14.65L6.5 14.65C6.96944 14.65 7.35 15.0305 7.35 15.5L7.35 16.5C7.35 16.9694 6.96944 17.35 6.5 17.35L5.5 17.35ZM9.35 16.5C9.35 17.6874 10.3126 18.65 11.5 18.65L12.5 18.65C13.6874 18.65 14.65 17.6874 14.65 16.5L14.65 15.5C14.65 14.3126 13.6874 13.35 12.5 13.35L11.5 13.35C10.3126 13.35 9.35 14.3126 9.35 15.5L9.35 16.5ZM11.5 17.35C11.0306 17.35 10.65 16.9694 10.65 16.5L10.65 15.5C10.65 15.0305 11.0306 14.65 11.5 14.65L12.5 14.65C12.9694 14.65 13.35 15.0305 13.35 15.5L13.35 16.5C13.35 16.9694 12.9694 17.35 12.5 17.35L11.5 17.35ZM17.5 18.65C16.3126 18.65 15.35 17.6874 15.35 16.5L15.35 15.5C15.35 14.3126 16.3126 13.35 17.5 13.35L18.5 13.35C19.6874 13.35 20.65 14.3126 20.65 15.5L20.65 16.5C20.65 17.6874 19.6874 18.65 18.5 18.65L17.5 18.65ZM16.65 16.5C16.65 16.9694 17.0306 17.35 17.5 17.35L18.5 17.35C18.9694 17.35 19.35 16.9694 19.35 16.5L19.35 15.5C19.35 15.0305 18.9694 14.65 18.5 14.65L17.5 14.65C17.0306 14.65 16.65 15.0305 16.65 15.5L16.65 16.5ZM3.35 8.49996C3.35 9.68738 4.31259 10.65 5.5 10.65L18.5 10.65C19.6874 10.65 20.65 9.68738 20.65 8.49996L20.65 7.49996C20.65 6.31255 19.6874 5.34996 18.5 5.34996L5.5 5.34996C4.31259 5.34996 3.35 6.31255 3.35 7.49996L3.35 8.49996ZM5.5 9.34996C5.03056 9.34996 4.65 8.96941 4.65 8.49996L4.65 7.49996C4.65 7.03052 5.03056 6.64996 5.5 6.64996L18.5 6.64996C18.9694 6.64996 19.35 7.03052 19.35 7.49996L19.35 8.49996C19.35 8.96941 18.9694 9.34996 18.5 9.34996L5.5 9.34996Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), y5 = p(L5), M5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5.32843 14.3284L5.5 14.5L10.5 9.5L12.25 11.25C12.9404 11.9404 14.0596 11.9404 14.75 11.25C15.4404 10.5596 15.4404 9.44035 14.75 8.75L12.1213 6.12132C10.9497 4.94975 9.05025 4.94975 7.87868 6.12132L5.32843 8.67157C3.76633 10.2337 3.76633 12.7663 5.32843 14.3284Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M13 7V7C14.1046 5.89543 15.8954 5.89543 17 7L18.6716 8.67157C20.2337 10.2337 20.2337 12.7663 18.6716 14.3284L14.4142 18.5858C13.6332 19.3668 12.3668 19.3668 11.5858 18.5858L11 18L10.9142 18.0858C10.1332 18.8668 8.86683 18.8668 8.08579 18.0858L7.5 17.5V17.5C6.94772 18.0523 6.05228 18.0523 5.5 17.5L5.25 17.25C4.55964 16.5596 4.55964 15.4404 5.25 14.75L6 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M10.4596 15.4596C10.7135 15.2058 10.7135 14.7942 10.4596 14.5404C10.2058 14.2865 9.79422 14.2865 9.54038 14.5404L10.4596 15.4596ZM7.95962 17.9596L10.4596 15.4596L9.54038 14.5404L7.04038 17.0404L7.95962 17.9596Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M13.4596 16.4596C13.7135 16.2058 13.7135 15.7942 13.4596 15.5404C13.2058 15.2865 12.7942 15.2865 12.5404 15.5404L13.4596 16.4596ZM10.9596 18.9596L13.4596 16.4596L12.5404 15.5404L10.0404 18.0404L10.9596 18.9596Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), E5 = p(M5), R5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 14L20 14V15.2C20 16.8802 20 17.7202 19.673 18.362C19.3854 18.9265 18.9265 19.3854 18.362 19.673C17.7202 20 16.8802 20 15.2 20H8.8C7.11984 20 6.27976 20 5.63803 19.673C5.07354 19.3854 4.6146 18.9265 4.32698 18.362C4 17.7202 4 16.8802 4 15.2V14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 17H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 17H11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 14L5.9319 6.27239C6.26578 4.93689 7.46573 4 8.84233 4H15.1577C16.5343 4 17.7342 4.93689 18.0681 6.27239L20 14",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), F5 = p(R5), N5 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M19.9998 15.3506C20.3588 15.3506 20.6502 15.642 20.6502 16.001V19.001C20.6501 19.3599 20.3587 19.6514 19.9998 19.6514C19.641 19.6512 19.3495 19.3598 19.3494 19.001V17.5713L16.8133 20.1074C16.3641 20.5562 15.6353 20.5564 15.1863 20.1074L12.9998 17.9209L9.45974 21.4609C9.20588 21.7145 8.79358 21.7147 8.53982 21.4609C8.28612 21.2072 8.28624 20.7949 8.53982 20.541L12.1863 16.8945C12.6073 16.4735 13.2737 16.448 13.7254 16.8164L13.8133 16.8945L15.9998 19.0811L18.4295 16.6514H16.9998C16.641 16.6512 16.3495 16.3598 16.3494 16.001C16.3494 15.6421 16.6409 15.3508 16.9998 15.3506H19.9998ZM9.00076 15.3477C9.35961 15.3477 9.65093 15.6392 9.65115 15.998C9.65115 16.357 9.35974 16.6484 9.00076 16.6484C7.38199 16.6485 6.2487 17.1089 5.52908 17.5518C5.16727 17.7744 4.90636 17.9946 4.74001 18.1543C4.65714 18.2339 4.59767 18.2983 4.5613 18.3398C4.54353 18.3602 4.53101 18.3754 4.52419 18.3838L4.51833 18.3916V18.3896C4.30255 18.6751 3.89763 18.7325 3.61111 18.5176C3.32415 18.3021 3.2659 17.8955 3.48122 17.6084V17.6064L3.48318 17.6055C3.48381 17.6045 3.48429 17.6027 3.48513 17.6016C3.48698 17.5991 3.48942 17.596 3.49197 17.5928C3.49722 17.586 3.50428 17.5775 3.51247 17.5674C3.52939 17.5465 3.55326 17.5181 3.58279 17.4844C3.64213 17.4166 3.72756 17.3244 3.83962 17.2168C4.0639 17.0015 4.39702 16.7215 4.84744 16.4443C5.75278 15.8872 7.11981 15.3477 9.00076 15.3477ZM8.99978 4.34863C11.5676 4.34888 13.6501 6.43114 13.6502 8.99902C13.6502 11.567 11.5677 13.6492 8.99978 13.6494C6.43165 13.6494 4.34939 11.5671 4.34939 8.99902C4.34949 6.43099 6.43172 4.34863 8.99978 4.34863ZM16.0008 6.34766C18.0165 6.34766 19.6509 7.98239 19.6511 9.99805C19.6511 12.0139 18.0166 13.6484 16.0008 13.6484C15.6418 13.6484 15.3504 13.357 15.3504 12.998C15.3506 12.6393 15.642 12.3477 16.0008 12.3477C17.2986 12.3477 18.3504 11.2959 18.3504 9.99805C18.3502 8.70036 17.2985 7.64844 16.0008 7.64844C15.6418 7.64837 15.3504 7.35699 15.3504 6.99805C15.3506 6.63928 15.642 6.34773 16.0008 6.34766ZM8.99978 5.64941C7.14969 5.64941 5.65027 7.14896 5.65017 8.99902C5.65017 10.8492 7.14962 12.3486 8.99978 12.3486C10.8497 12.3484 12.3494 10.849 12.3494 8.99902C12.3493 7.14911 10.8497 5.64966 8.99978 5.64941Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), S5 = p(N5), V5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M15 13.75C15 12.7835 15.7462 12 16.6667 12C18.5076 12 20 13.567 20 15.5C20 17.433 18.5076 19 16.6667 19C15.7462 19 15 18.2165 15 17.25V13.75Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M9 13.75C9 12.7835 8.25381 12 7.33333 12C5.49238 12 4 13.567 4 15.5C4 17.433 5.49238 19 7.33333 19C8.25381 19 9 18.2165 9 17.25V13.75Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 15V12.25C4 7.69365 7.58172 4 12 4C16.4183 4 20 7.69365 20 12.25V15",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), T5 = p(V5), H5 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.0625 6C12.875 6 12 8 12 8C12 8 11.125 6 8.9375 6C7.1875 6 5 7.71429 5 10.2857C5 14.5714 12 19 12 19C12 19 19 14.5714 19 10.2857C19 8.14286 17.25 6 15.0625 6Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), A5 = p(H5), B5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.02676 21H8.70114C8.88929 21 9.06254 20.8948 9.14268 20.7245C9.74058 19.4545 9.99622 18.2105 9.99622 17.0039C9.99622 16.3524 9.76813 15.9227 9.46286 15.2206C9.26905 14.7748 9.03558 14.2714 8.87603 14.0142C8.55464 13.4962 7.92802 13.3349 7.46497 13.5664C7.00191 13.7979 6.88253 14.3546 7.13253 14.8546C7.38253 15.3546 8.08594 16.7242 7.42007 17.162C7.00161 17.437 6.48266 17.3625 6.10336 16.889C5.87911 16.609 5.50323 16.1147 5.50323 15.6956L5.50312 11C5.50312 9.99999 5.25003 9 4.2344 9C3.21877 9 3 10 3 11V16C3 17.5096 3.59595 18.2663 5.20354 20.5694C5.39126 20.8383 5.6988 21 6.02676 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17.9695 21H15.2951C15.1069 21 14.9337 20.8948 14.8535 20.7245C14.2556 19.4545 14 18.2105 14 17.0039C14 16.3524 14.2281 15.9227 14.5334 15.2206C14.7272 14.7748 14.9606 14.2714 15.1202 14.0142C15.4416 13.4962 16.0682 13.3349 16.5312 13.5664C16.9943 13.7979 17.1137 14.3546 16.8637 14.8546C16.6137 15.3546 15.9103 16.7242 16.5761 17.162C16.9946 17.437 17.5136 17.3625 17.8929 16.889C18.1171 16.609 18.493 16.1147 18.493 15.6956L18.4931 11C18.4931 9.99999 18.7462 9 19.7618 9C20.7774 9 20.9962 10 20.9962 11V16C20.9962 17.5096 20.4003 18.2663 18.7927 20.5694C18.605 20.8383 18.2974 21 17.9695 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.2611 2C16.1983 2 17.5 3.76447 17.5 5.41053C17.5 8.74408 12 12 12 12C11.9022 12 6.5 8.74408 6.5 5.41053C6.5 3.76447 7.80167 2 9.73889 2C10.8511 2 11.5783 2.53882 12 3.0125C12.4217 2.53882 13.1489 2 14.2611 2Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), $5 = p(B5), I5 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M6.25629 7.60265L10.2563 4.74551C11.2994 4.00044 12.7006 4.00044 13.7437 4.74551L17.7437 7.60265C18.5321 8.16579 19 9.075 19 10.0439V16C19 17.6569 17.6569 19 16 19H15C14.4477 19 14 18.5523 14 18V15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5V18C10 18.5523 9.55228 19 9 19H8C6.34315 19 5 17.6569 5 16V10.0439C5 9.075 5.4679 8.16579 6.25629 7.60265Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), P5 = p(I5), j5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "rect",
        {
          width: 6,
          height: 6,
          x: 4.5,
          y: 4.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "rect",
        {
          width: 6,
          height: 6,
          x: 4.5,
          y: 13.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "rect",
        {
          width: 6,
          height: 6,
          x: 13.5,
          y: 4.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "rect",
        {
          width: 6,
          height: 6,
          x: 13.5,
          y: 13.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), D5 = p(j5), Z5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M20 15V10.7146C20 10.2525 19.84 9.80468 19.5471 9.44721L17.6236 7.09895C17.0538 6.40334 16.202 6.00001 15.3028 6.00001H8.31014C7.31744 6.00001 6.38901 6.49108 5.83033 7.31164L4.34677 9.49064C4.12081 9.82252 3.99997 10.2147 3.99997 10.6162V15C3.99997 16.6569 5.34312 18 6.99997 18H17C18.6568 18 20 16.6569 20 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.49998 10H7.65285C8.14169 10 8.55888 10.3534 8.63924 10.8356L8.86071 12.1644C8.94107 12.6466 9.35827 13 9.8471 13H14.1529C14.6417 13 15.0589 12.6466 15.1392 12.1644L15.3607 10.8356C15.4411 10.3534 15.8583 10 16.3471 10H19.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), _5 = p(Z5), O5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 10H11C11.5523 10 12 10.4477 12 11V17C12 17.5523 11.5523 18 11 18H10H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 7V7.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), U5 = p(O5), z5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 6H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 18H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 6L12 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 9H6C4.89543 9 4 9.89543 4 11V13C4 14.1046 4.89543 15 6 15H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 15L18 15C19.1046 15 20 14.1046 20 13L20 11C20 9.89543 19.1046 9 18 9L16 9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), G5 = p(z5), W5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "rect",
        {
          width: 16,
          height: 12,
          x: 4,
          y: 7,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 11H9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 11H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 15H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11.5 11H12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 15L12.5 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 7V5.5C12 4.94772 12.4477 4.5 13 4.5H13.5C14.0523 4.5 14.5 4.05228 14.5 3.5V3",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), q5 = p(W5), X5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5 15V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M18 19H6C4.34315 19 3 17.6569 3 16C3 15.4477 3.44772 15 4 15H9.5C9.77614 15 10 15.2239 10 15.5C10 15.7761 10.2239 16 10.5 16H13.5C13.7761 16 14 15.7761 14 15.5C14 15.2239 14.2239 15 14.5 15H20C20.5523 15 21 15.4477 21 16C21 17.6569 19.6569 19 18 19Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Y5 = p(X5), K5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M8 16H16V17C16 18.6569 14.6569 20 13 20H11C9.34315 20 8 18.6569 8 17V16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16V11.5M12 11.5L10.5 10.5M12 11.5L13.5 10.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M8 16V13.9192C8 13.6348 7.87558 13.3669 7.67824 13.162C6.63904 12.0832 6 10.6162 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 10.6162 17.361 12.0832 16.3218 13.162C16.1244 13.3669 16 13.6348 16 13.9192V16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), tr = p(K5), Q5 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 5L6 6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 5V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 9L4 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 19L18 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 19L15 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 15L20 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17L11 18C9.61929 19.3807 7.38071 19.3807 6 18V18C4.61929 16.6193 4.61929 14.3807 6 13L7 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 6.99998L13 5.99999C14.3807 4.61928 16.6193 4.61929 18 6V6C19.3807 7.38071 19.3807 9.61929 18 11L17 12",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), J5 = p(Q5), e0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 10H8C6.34315 10 5 11.3431 5 13V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13C19 11.3431 17.6569 10 16 10Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 14V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 10V8C8 5.79086 9.79086 4 12 4V4",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), t0 = p(e0), r0 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M14.9388 10.137C14.9587 9.94491 14.9689 9.74991 14.9689 9.55251C14.9689 6.48594 12.5134 4 9.48443 4C6.45546 4 4 6.48594 4 9.55251C4 12.6191 6.45546 15.105 9.48443 15.105C9.70417 15.105 9.9209 15.0919 10.1339 15.0665V18.9333C10.1339 19.5224 10.6056 20 11.1875 20H18.4616C19.0434 20 19.5152 19.5224 19.5152 18.9333V11.2037C19.5152 10.6145 19.0434 10.137 18.4616 10.137H14.9388ZM14.9388 10.137C14.6727 12.7123 12.6678 14.7638 10.1339 15.0665V11.2037C10.1339 10.6145 10.6056 10.137 11.1875 10.137H14.9388Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), n0 = p(r0), o0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M13.635 6.37192C13.9349 6.076 15.2013 5.25398 15.4679 5.51702C15.7178 5.78007 14.9013 7.04599 14.6181 7.32547C14.3348 7.6214 14.1182 7.83513 13.9682 7.98309L14.4348 12.7508L13.9016 13.2769L12.302 9.62714L11.6688 10.2519C11.219 10.7122 10.5525 11.189 10.0026 11.5178L10.0859 13.1618L9.83599 13.4084C9.83599 13.4084 9.05286 11.9617 9.01953 11.9288C9.00287 11.8959 7.53659 11.1068 7.53659 11.1068L7.78652 10.8602L9.43609 10.9424C9.76934 10.3998 10.2359 9.74222 10.7024 9.28189L11.3189 8.67359L7.65322 7.07887L8.18642 6.55277L12.9852 7.02954C13.1351 6.86514 13.3517 6.65141 13.635 6.37192Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M6.33689 3.33043C9.46941 0.223189 14.5348 0.223189 17.6506 3.33043C20.7831 6.43768 20.7831 11.4849 17.6506 14.5921C14.5181 17.6994 9.45275 17.6994 6.33689 14.5921C3.22104 11.4849 3.22104 6.43768 6.33689 3.33043ZM7.33663 13.6222C9.91929 16.1869 14.0849 16.1869 16.6675 13.6222C19.2502 11.041 19.2502 6.88157 16.6675 4.3333C14.0849 1.76859 9.91929 1.76859 7.33663 4.3333C4.75397 6.89801 4.75397 11.0574 7.33663 13.6222Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M12.0021 18.3406C13.3851 18.3406 14.7014 18.0611 15.9344 17.4857C16.2843 17.3212 16.7009 17.4692 16.8675 17.8309C17.0175 18.1762 16.8675 18.5872 16.5176 18.7516C15.1013 19.4092 13.585 19.738 12.0021 19.738C10.4358 19.738 8.9029 19.4092 7.48661 18.7516C7.12004 18.5872 6.97007 18.1762 7.1367 17.8309C7.30332 17.4692 7.71988 17.3212 8.06979 17.4857C9.3028 18.0446 10.6358 18.3406 12.0021 18.3406Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M12.0021 22.5C10.7524 22.5 9.53607 22.3192 8.35304 21.941C7.98647 21.8259 7.78652 21.4314 7.8865 21.0697C8.00313 20.708 8.38637 20.4943 8.7696 20.6093C9.80266 20.9382 10.9024 21.1026 12.0021 21.1026C13.1018 21.1026 14.1682 20.9382 15.2179 20.6258C15.5845 20.5107 15.9844 20.7244 16.101 21.0861C16.2177 21.4478 16.0177 21.8424 15.6345 21.9575C14.4515 22.3192 13.2351 22.5 12.0021 22.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), s0 = p(o0), i0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M14.0404 5.03957C15.3988 3.68158 17.602 3.68137 18.9603 5.03957C20.3186 6.39785 20.3183 8.60105 18.9603 9.95949L11.4603 17.4595C11.389 17.5307 11.301 17.5838 11.2054 17.6157L8.20539 18.6157C8.1393 18.6377 8.06997 18.6499 8.00031 18.6499H6.00031C5.80558 18.6499 5.62084 18.5622 5.49738 18.4116C5.37407 18.2611 5.32445 18.0625 5.36262 17.8716L6.36262 12.8716C6.3879 12.7461 6.44982 12.6301 6.54035 12.5396L14.0404 5.03957ZM6.79328 17.3491H7.89777L9.79621 16.7154L7.39973 14.3189L6.79328 17.3491ZM18.0404 5.95949C17.1897 5.10897 15.811 5.10918 14.9603 5.95949L7.92023 12.9995L11.0003 16.0796L18.0404 9.03957C18.8907 8.18881 18.891 6.81009 18.0404 5.95949Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12.65 17.85 19.35 17.85",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), a0 = p(i0), c0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5 11V16C5 17.6569 6.34315 19 8 19H9C9.55228 19 10 18.5523 10 18V16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16V18C14 18.5523 14.4477 19 15 19H16C17.6569 19 19 17.6569 19 16V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.74949 8.3768L4.37833 6.17584C4.74631 4.88793 5.92346 4 7.2629 4H16.7371C18.0765 4 19.2537 4.88793 19.6217 6.17584L20.2505 8.3768C20.6261 9.6914 19.639 11 18.2718 11C17.4924 11 16.7798 10.5596 16.4312 9.86244L16 9L15.4472 10.1056C15.1731 10.6537 14.6129 11 14 11C13.3871 11 12.8269 10.6537 12.5528 10.1056L12 9L11.4472 10.1056C11.1731 10.6537 10.6129 11 10 11C9.38713 11 8.82687 10.6537 8.55279 10.1056L8 9L7.56878 9.86244C7.22019 10.5596 6.50763 11 5.72817 11C4.36097 11 3.37389 9.69139 3.74949 8.3768Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), l0 = p(c0), d0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M5 6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 5.44772 10 6V8C10 8.55228 9.55228 9 9 9H6C5.44772 9 5 8.55228 5 8V6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M5 14C5 13.4477 5.44772 13 6 13H9C9.55228 13 10 13.4477 10 14V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M14 16C14 15.4477 14.4477 15 15 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M14 6C14 5.44772 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V10C19 10.5523 18.5523 11 18 11H15C14.4477 11 14 10.5523 14 10V6Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), f0 = p(d0), u0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7.5 10.5H16.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7.5 14H11.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), h0 = p(u0), g0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 14L14.2361 13.618C12.8284 12.9142 11.1716 12.9142 9.76393 13.618L9 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 10V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 10V11",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), p0 = p(g0), m0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13.4389 9C14.6716 9 15.5 10.1175 15.5 11.16C15.5 13.2713 12.0622 15 12 15C11.9378 15 8.5 13.2713 8.5 11.16C8.5 10.1175 9.32833 9 10.5611 9C11.2689 9 11.7317 9.34125 12 9.64125C12.2683 9.34125 12.7311 9 13.4389 9Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), C0 = p(m0), v0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 9V7C10 5.89543 10.8954 5 12 5H17C18.1046 5 19 5.89543 19 7V12.7929C19 13.2383 18.4614 13.4614 18.1464 13.1464L17 12H16.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), w0 = p(v0), x0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 11V7C15 5.34315 13.6569 4 12 4C10.7386 4 9.65897 4.77854 9.21552 5.88133M10.3411 13.5C9.98492 13.2632 9.68224 12.9523 9.45508 12.5893",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6 11C6 14.3137 8.68629 17 12 17C12.3807 17 12.7531 16.9645 13.1142 16.8967M18 11C18 11.9233 17.7915 12.7979 17.4189 13.5792",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17V20M12 20H10M12 20H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 5L18 18",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), k0 = p(x0), b0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M10.8 4H13.2C14.8802 4 15.7202 4 16.362 4.32698C16.9265 4.6146 17.3854 5.07354 17.673 5.63803C18 6.27976 18 7.11984 18 8.8V15.2C18 16.8802 18 17.7202 17.673 18.362C17.3854 18.9265 16.9265 19.3854 16.362 19.673C15.7202 20 14.8802 20 13.2 20H10.8C9.11984 20 8.27976 20 7.63803 19.673C7.07354 19.3854 6.6146 18.9265 6.32698 18.362C6 17.7202 6 16.8802 6 15.2V8.8C6 7.11984 6 6.27976 6.32698 5.63803C6.6146 5.07354 7.07354 4.6146 7.63803 4.32698C8.27976 4 9.11984 4 10.8 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), L0 = p(b0), y0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11.5 7V6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11.5 14V13",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), rr = p(y0), M0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M5.54981 14.121L6.2641 10.121C6.68993 7.73641 8.76387 6 11.1862 6H12.8138C15.2361 6 17.3101 7.73641 17.7359 10.121L18.4502 14.121C18.9974 17.1857 16.6412 20 13.528 20H10.472C7.35882 20 5.00255 17.1857 5.54981 14.121Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M10.3257 2.5H13.6743C14.3386 2.5 14.8183 3.13591 14.6358 3.77472L14 6H10L9.36421 3.77472C9.18169 3.1359 9.66135 2.5 10.3257 2.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 10H11.5C10.6716 10 10 10.6716 10 11.5V11.5C10 12.3284 10.6716 13 11.5 13H12.5C13.3284 13 14 13.6716 14 14.5V14.5C14 15.3284 13.3284 16 12.5 16H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 16V17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9V10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), E0 = p(M0), R0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r("circle", { cx: 19, cy: 6, r: 3, vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ r(
        "path",
        {
          d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r("path", { d: "M12 17v4", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ r("path", { d: "M8 21h8", vectorEffect: "non-scaling-stroke" })
    ]
  }
), F0 = p(R0), N0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 19v-3.96 3.15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 19h5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "rect",
        {
          width: 6,
          height: 10,
          x: 16,
          y: 12,
          rx: 2,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), S0 = p(N0), V0 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20 15.0754C18.9493 15.5506 17.7829 15.8151 16.5548 15.8151C11.9322 15.8151 8.18492 12.0678 8.18492 7.44523C8.18492 6.21708 8.44944 5.05072 8.92462 4C6.02061 5.31331 4 8.23576 4 11.6302C4 16.2527 7.74731 20 12.3698 20C15.7642 20 18.6867 17.9794 20 15.0754Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), T0 = p(V0), H0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 7V9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M6.19249 16.071C6.34438 17.9842 7.85934 19.6088 9.81202 19.8494C10.5301 19.9378 11.2602 20 12 20C12.7398 20 13.4698 19.9378 14.1879 19.8494C16.1406 19.6088 17.6555 17.9842 17.8074 16.071C17.9127 14.7454 18 13.3856 18 12C18 10.6144 17.9127 9.25466 17.8074 7.92894C17.6555 6.01572 16.1406 4.39114 14.1879 4.15056C13.4698 4.0621 12.7398 4 12 4C11.2602 4 10.5301 4.0621 9.81202 4.15056C7.85934 4.39114 6.34438 6.01572 6.19249 7.92894C6.08722 9.25466 6 10.6144 6 12C6 13.3856 6.08722 14.7454 6.19249 16.071Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), A0 = p(H0), B0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M13 19H7C5.89543 19 5 18.1046 5 17V6.99998C5 5.89541 5.89543 4.99998 7 4.99998H9.80017",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.00041 3L10.0004 5L8.00041 7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          stroke: "currentColor",
          d: "M14 2.65002H18C18.7456 2.65002 19.35 3.25444 19.35 4.00002V6.00002C19.35 6.74561 18.7456 7.35002 18 7.35002H14C13.2544 7.35002 12.65 6.74561 12.65 6.00002V4.00002C12.65 3.25444 13.2544 2.65002 14 2.65002Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M14 9.65002H18C18.7456 9.65002 19.35 10.2544 19.35 11L19.35 13C19.35 13.7456 18.7456 14.35 18 14.35H14C13.2544 14.35 12.65 13.7456 12.65 13L12.65 11C12.65 10.2544 13.2544 9.65002 14 9.65002Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M14 16.65H18C18.7456 16.65 19.35 17.2544 19.35 18V20C19.35 20.7456 18.7456 21.35 18 21.35H14C13.2544 21.35 12.65 20.7456 12.65 20V18C12.65 17.2544 13.2544 16.65 14 16.65Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), $0 = p(B0), I0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "rect",
        {
          width: 5,
          height: 5,
          x: 4,
          y: 4,
          stroke: "currentColor",
          rx: 1,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "rect",
        {
          width: 5,
          height: 5,
          x: 15,
          y: 4,
          stroke: "currentColor",
          rx: 1,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "rect",
        {
          width: 5,
          height: 5,
          x: 4,
          y: 15,
          stroke: "currentColor",
          rx: 1,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "rect",
        {
          width: 5,
          height: 5,
          x: 15,
          y: 15,
          stroke: "currentColor",
          rx: 1,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 6.5H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6.5 9V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 9V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 7.333 5.5 9 9 6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 11.333 5.5 13 9 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 15.333 5.5 17 9 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 12H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16H20",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), P0 = p(I0), j0 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M10.0004 4.34964C10.3592 4.34985 10.6508 4.64118 10.6508 5.00003C10.6508 5.35887 10.3592 5.65021 10.0004 5.65042H8.00039C6.70252 5.65042 5.65078 6.70216 5.65078 8.00003V16C5.65079 17.2979 6.70253 18.3496 8.00039 18.3496H16.0004C17.2981 18.3494 18.35 17.2978 18.35 16V13.5C18.35 13.141 18.6414 12.8496 19.0004 12.8496C19.3592 12.8499 19.6508 13.1412 19.6508 13.5V16C19.6508 18.0157 18.016 19.6502 16.0004 19.6504H8.00039C5.98456 19.6504 4.35001 18.0159 4.35 16V8.00003C4.35 5.98419 5.98455 4.34964 8.00039 4.34964H10.0004ZM15.7465 4.3721C16.8186 3.30024 18.5563 3.30022 19.6283 4.3721C20.7003 5.44416 20.7002 7.18184 19.6283 8.25394L14.0727 13.8106C13.9927 13.8905 13.8926 13.9478 13.7836 13.9776L9.70937 15.0889C9.48438 15.1502 9.24342 15.0858 9.07851 14.9209C8.91405 14.7561 8.85035 14.5158 8.91152 14.291L10.0229 10.2159L10.0502 10.1367C10.0827 10.0591 10.1299 9.98771 10.1898 9.92776L15.7465 4.3721ZM18.7094 5.29105C18.145 4.72685 17.2298 4.72687 16.6654 5.29105L11.2309 10.7246L10.4643 13.5352L13.2748 12.7686L18.7094 7.33499C19.2736 6.77058 19.2736 5.85542 18.7094 5.29105Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), E1 = p(j0), D0 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M7.65001 8.49998C7.65001 8.14099 7.35899 7.84998 7.00001 7.84998C6.64102 7.84998 6.35001 8.14099 6.35001 8.49998C6.35001 8.78858 6.19916 9.13158 5.91539 9.41536C5.63161 9.69913 5.28861 9.84998 5.00001 9.84998C4.64102 9.84998 4.35001 10.141 4.35001 10.5C4.35001 10.859 4.64102 11.15 5.00001 11.15C5.49083 11.15 5.95576 10.9838 6.35001 10.7276V15.5C6.35001 15.859 6.64102 16.15 7.00001 16.15C7.35899 16.15 7.65001 15.859 7.65001 15.5V8.49998ZM9.35001 12.5C9.35001 12.141 9.64102 11.85 10 11.85H12.5C12.859 11.85 13.15 12.141 13.15 12.5C13.15 12.859 12.859 13.15 12.5 13.15H10C9.64102 13.15 9.35001 12.859 9.35001 12.5ZM15.65 10.5C15.65 9.75439 16.2544 9.14998 17 9.14998C17.7456 9.14998 18.35 9.75439 18.35 10.5C18.35 11.2456 17.7456 11.85 17 11.85C16.2544 11.85 15.65 11.2456 15.65 10.5ZM17.8561 13.8343C17.9893 13.568 18.0912 13.2499 18.1668 12.8799C17.8148 13.0529 17.4187 13.15 17 13.15C15.5365 13.15 14.35 11.9635 14.35 10.5C14.35 9.03642 15.5365 7.84998 17 7.84998C18.4636 7.84998 19.65 9.03642 19.65 10.5C19.65 12.0035 19.5309 13.3916 19.0189 14.4157C18.7539 14.9456 18.3773 15.3924 17.853 15.7009C17.3321 16.0073 16.7116 16.15 16 16.15C15.641 16.15 15.35 15.859 15.35 15.5C15.35 15.141 15.641 14.85 16 14.85C16.5384 14.85 16.9179 14.7427 17.1939 14.5803C17.4664 14.42 17.6836 14.1794 17.8561 13.8343Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Z0 = p(D0), _0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 7C6 5.34315 7.34315 4 9 4H15C16.6569 4 18 5.34315 18 7V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V7Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 12H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 8H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M10 16.5C10 15.9477 10.4477 15.5 11 15.5H13C13.5523 15.5 14 15.9477 14 16.5V20H10V16.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 20H5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), O0 = p(_0), U0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12L17.9536 14.9768C17.9781 14.989 18.0078 14.9765 18.0161 14.9505C18.4772 13.5039 18.0133 12.0621 17.0728 11.0423C17.0459 11.0131 17.0663 10.9652 17.1061 10.9652H19.955C19.9799 10.9652 20.0001 10.9454 19.9995 10.9205C19.9697 9.47309 18.492 7.53588 15.0948 7.50048C15.0571 7.50008 15.0349 7.45634 15.0585 7.42687L16.982 5.02247C16.993 5.00876 16.9952 4.99013 16.9869 4.97467C16.4577 3.99167 13.9831 3.51695 12 5.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12L6.04641 14.9768C6.02191 14.989 5.99217 14.9766 5.98385 14.9505C5.52281 13.5039 5.98675 12.0621 6.92718 11.0423C6.95411 11.0131 6.93366 10.9652 6.89394 10.9652H4.045C4.02015 10.9652 3.99995 10.9454 4.00046 10.9206C4.0303 9.47311 5.50795 7.5359 8.90518 7.50049C8.94291 7.5001 8.96508 7.45635 8.94151 7.42689L7.01799 5.02248C7.00702 5.00878 7.00482 4.99014 7.01314 4.97469C7.54231 3.99168 10.0169 3.51697 12 5.50001",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 19H16M13.5 13L14 19M10.5 13L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), z0 = p(U0), G0 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.65001 12C4.65001 7.94068 7.94071 4.64998 12 4.64998C16.0593 4.64998 19.35 7.94068 19.35 12C19.35 16.0593 16.0593 19.35 12 19.35C7.94071 19.35 4.65001 16.0593 4.65001 12ZM12 3.34998C7.22274 3.34998 3.35001 7.22271 3.35001 12C3.35001 16.7772 7.22274 20.65 12 20.65C16.7773 20.65 20.65 16.7772 20.65 12C20.65 7.22271 16.7773 3.34998 12 3.34998ZM18 12C18 15.3137 15.3137 18 12 18C7.2 18 6 14 6 12H12V6C15.3137 6 18 8.68629 18 12Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), W0 = p(G0), q0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 18H6.8C5.11984 18 4.27976 18 3.63803 17.673C3.07354 17.3854 2.6146 16.9265 2.32698 16.362C2 15.7202 2 14.8802 2 13.2V10.8C2 9.11984 2 8.27976 2.32698 7.63803C2.6146 7.07354 3.07354 6.6146 3.63803 6.32698C4.27976 6 5.11984 6 6.8 6H17.2C18.8802 6 19.7202 6 20.362 6.32698C20.9265 6.6146 21.3854 7.07354 21.673 7.63803C22 8.27976 22 9.11984 22 10.8V12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), X0 = p(q0), Y0 = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10 8.35C10.359 8.35 10.65 8.64101 10.65 9V15C10.65 15.359 10.359 15.65 10 15.65C9.64102 15.65 9.35001 15.359 9.35001 15V9C9.35001 8.64101 9.64102 8.35 10 8.35ZM14.65 9C14.65 8.64101 14.359 8.35 14 8.35C13.641 8.35 13.35 8.64101 13.35 9V15C13.35 15.359 13.641 15.65 14 15.65C14.359 15.65 14.65 15.359 14.65 15V9Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), K0 = p(Y0), Q0 = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 9,
          cy: 9,
          r: 4,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.00002 18C4.00002 18 5.50002 16 9.00002 16C12.5 16 14 18 14 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 16C19 16 19.75 17 19.75 17",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), J0 = p(Q0), ec = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M20.1308 17.3633C20.427 17.4238 20.6503 17.6858 20.6503 18C20.6503 18.3142 20.427 18.5762 20.1308 18.6367L19.9999 18.6504H15.9999C15.641 18.6503 15.3495 18.3589 15.3495 18C15.3495 17.6411 15.641 17.3497 15.9999 17.3496H19.9999L20.1308 17.3633ZM11.9999 15.3496C12.8458 15.3496 13.5896 15.459 14.2353 15.6309L14.5058 15.708L14.6278 15.7598C14.8931 15.9045 15.0292 16.2203 14.9374 16.5205C14.8322 16.8635 14.469 17.0561 14.1259 16.9512C13.5422 16.7727 12.8369 16.6504 11.9999 16.6504C10.3811 16.6504 9.24784 17.1109 8.52823 17.5537C8.1664 17.7764 7.90548 17.9966 7.73917 18.1562C7.65625 18.2359 7.59679 18.3003 7.56046 18.3418C7.54261 18.3622 7.53012 18.3774 7.52335 18.3857L7.51749 18.3936V18.3916C7.30165 18.6768 6.89669 18.7344 6.61026 18.5195C6.32321 18.3041 6.2651 17.8975 6.48038 17.6104L6.83878 17.8789C6.4877 17.6155 6.48034 17.6097 6.48038 17.6094V17.6084L6.48233 17.6074C6.48304 17.6065 6.48343 17.6047 6.48428 17.6035C6.48614 17.6011 6.48854 17.598 6.49112 17.5947C6.49637 17.588 6.50339 17.5795 6.51163 17.5693C6.52854 17.5484 6.55237 17.5201 6.58194 17.4863C6.64127 17.4185 6.72667 17.3264 6.83878 17.2188C7.06303 17.0035 7.39616 16.7235 7.84659 16.4463C8.75192 15.8892 10.1189 15.3496 11.9999 15.3496ZM11.9999 4.34961C14.568 4.34961 16.6503 6.43188 16.6503 9C16.6503 11.5681 14.568 13.6504 11.9999 13.6504C9.43187 13.6503 7.34952 11.5681 7.34952 9C7.34952 6.43194 9.43187 4.34972 11.9999 4.34961ZM11.9999 5.65039C10.1498 5.6505 8.6503 7.14991 8.6503 9C8.6503 10.8501 10.1498 12.3495 11.9999 12.3496C13.8501 12.3496 15.3495 10.8502 15.3495 9C15.3495 7.14985 13.8501 5.65039 11.9999 5.65039Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), tc = p(ec), rc = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M17.9999 15.3496C18.3589 15.3496 18.6503 15.641 18.6503 16V17.3496H19.9999L20.1308 17.3633C20.427 17.4238 20.6503 17.6858 20.6503 18C20.6503 18.3142 20.427 18.5762 20.1308 18.6367L19.9999 18.6504H18.6503V20L18.6366 20.1309C18.576 20.4271 18.314 20.6504 17.9999 20.6504C17.6858 20.6503 17.4237 20.427 17.3632 20.1309L17.3495 20V18.6504H15.9999C15.641 18.6503 15.3495 18.3589 15.3495 18C15.3495 17.6411 15.641 17.3497 15.9999 17.3496H17.3495V16C17.3495 15.6411 17.641 15.3497 17.9999 15.3496ZM11.9999 15.3496C12.8339 15.3496 13.5686 15.4563 14.2079 15.624L14.4765 15.6992L14.5985 15.75C14.8645 15.8936 15.0017 16.2091 14.911 16.5098C14.8202 16.8103 14.5314 16.9973 14.2304 16.9697L14.1015 16.9443L13.8788 16.8818C13.3463 16.742 12.7222 16.6504 11.9999 16.6504C10.3811 16.6504 9.24784 17.1109 8.52823 17.5537C8.1664 17.7764 7.90548 17.9966 7.73917 18.1562C7.65625 18.2359 7.59679 18.3003 7.56046 18.3418C7.54261 18.3622 7.53012 18.3774 7.52335 18.3857L7.51749 18.3936V18.3916C7.30165 18.6768 6.89669 18.7344 6.61026 18.5195C6.32321 18.3041 6.2651 17.8975 6.48038 17.6104L6.83878 17.8789C6.4877 17.6155 6.48034 17.6097 6.48038 17.6094V17.6084L6.48233 17.6074C6.48304 17.6065 6.48343 17.6047 6.48428 17.6035C6.48614 17.6011 6.48854 17.598 6.49112 17.5947C6.49637 17.588 6.50339 17.5795 6.51163 17.5693C6.52854 17.5484 6.55237 17.5201 6.58194 17.4863C6.64127 17.4185 6.72667 17.3264 6.83878 17.2188C7.06303 17.0035 7.39616 16.7235 7.84659 16.4463C8.75192 15.8892 10.1189 15.3496 11.9999 15.3496ZM11.9999 4.34961C14.568 4.34961 16.6503 6.43188 16.6503 9C16.6503 11.5681 14.568 13.6504 11.9999 13.6504C9.43187 13.6503 7.34952 11.5681 7.34952 9C7.34952 6.43194 9.43187 4.34972 11.9999 4.34961ZM11.9999 5.65039C10.1498 5.6505 8.6503 7.14991 8.6503 9C8.6503 10.8501 10.1498 12.3495 11.9999 12.3496C13.8501 12.3496 15.3495 10.8502 15.3495 9C15.3495 7.14985 13.8501 5.65039 11.9999 5.65039Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), nc = p(rc), oc = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M10.7284 5.68377L11.7022 8.60545C11.8697 9.10777 11.6165 9.65354 11.1249 9.85017L9.50021 10.5C10.5002 12.5 11.5002 13.5 13.5002 14.5L14.15 12.8755C14.3467 12.3839 14.8924 12.1307 15.3947 12.2982L18.3164 13.2721C18.7248 13.4082 19.0002 13.7903 19.0002 14.2208L19.0001 16.5001C19 18.1569 17.6493 19.4784 16.0224 19.1645C13.4822 18.6743 9.8743 17.4681 7.50006 14.5C5.31143 11.7639 4.61982 9.17753 4.44221 7.39634C4.3027 5.99711 5.50072 5 6.90688 5H9.77967C10.2101 5 10.5922 5.27543 10.7284 5.68377Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), sc = p(oc), ic = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M16.9956 5.39244C16.4671 5.39244 15.9583 5.593 15.5719 5.95362L15.2615 6.24335C14.854 6.62368 14.2962 6.7835 13.7388 6.7835V6.7835H10.9567C7.49952 6.7835 4.69692 9.5861 4.69692 13.0433C4.69692 14.4501 5.16102 15.7486 5.94446 16.7939C6.41907 17.4271 6.78352 18.1614 6.78352 18.9528V19.3031C6.78352 20.0713 7.40632 20.6941 8.17458 20.6941H10.1691C10.6577 20.6941 11.1105 20.4378 11.3619 20.0188L11.5051 19.7802C11.6827 19.4842 12.0026 19.3031 12.3478 19.3031V19.3031C12.693 19.3031 13.0129 19.4842 13.1905 19.7802L13.3336 20.0188C13.585 20.4378 14.0378 20.6941 14.5264 20.6941H16.521C17.2892 20.6941 17.912 20.0713 17.912 19.3031V18.4283C17.912 17.9707 18.1149 17.5425 18.419 17.2004V17.2004C18.7756 16.7992 19.2667 16.5209 19.8036 16.5209H19.9986C20.7669 16.5209 21.3897 15.8981 21.3897 15.1299V13.7388C21.3897 12.9706 20.7669 12.3478 19.9986 12.3478V12.3478C19.9769 12.3478 19.9586 12.3313 19.9561 12.3097C19.7743 10.7527 19.0212 9.37022 17.912 8.37744V6.08797C17.912 5.70384 17.6006 5.39244 17.2165 5.39244H16.9956Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "rect",
        {
          width: 1.391,
          height: 1.391,
          x: 14.782,
          y: 11.305,
          fill: "currentColor",
          stroke: "currentColor",
          rx: 0.696,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M3.26033 10.2612C3.26033 9.90218 2.96931 9.61117 2.61033 9.61117C2.25134 9.61117 1.96033 9.90218 1.96033 10.2612H3.26033ZM4.7317 12.939L4.62484 12.2978C4.41139 12.3334 4.08864 12.3026 3.82727 12.084C3.57981 11.8769 3.26033 11.3941 3.26033 10.2612H2.61033H1.96033C1.96033 11.6322 2.35376 12.5462 2.99311 13.0811C3.61854 13.6043 4.35648 13.6605 4.83856 13.5801L4.7317 12.939Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "rect",
        {
          width: 3.478,
          height: 3.478,
          x: 8.87,
          y: 3.306,
          stroke: "currentColor",
          rx: 1.739,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ac = p(ic), cc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 20C15 16.8 18 13.9346 18 10.4C18 6.86538 15.3137 4 12 4C8.68629 4 6 6.86538 6 10.4C6 13.9346 9 16.8 12 20Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "rect",
        {
          width: 4,
          height: 4,
          x: 10,
          y: 8,
          stroke: "currentColor",
          rx: 2,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), lc = p(cc), dc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M6.11014 8.84108L4.6879 10.2653C3.73682 11.2149 3.73682 12.7569 4.6879 13.7065L6.11159 15.1297L7.50354 15.1231C7.81855 15.1231 8.1205 14.9978 8.38856 14.7521L10.7855 12.3583C10.9609 12.1819 11.1741 12.057 11.4017 11.985C11.175 11.9053 10.9713 11.7774 10.806 11.6328L10.7959 11.624L8.38846 9.21653C8.12043 8.97081 7.81852 8.84554 7.50354 8.84554L6.11014 8.84108Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M7.48424 16.5045C8.15386 16.3583 9.16119 16.117 9.45141 15.8268L11.8553 13.4229C11.8575 13.4207 11.8672 13.4135 11.8866 13.4135C11.9059 13.4135 11.9156 13.4207 11.9179 13.4229L14.3311 15.8362C14.6543 16.1593 15.5618 16.578 16.207 16.7873L13.7091 19.2852C12.7595 20.2098 11.2175 20.2098 10.2678 19.2852L7.48424 16.5045Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M17.6459 15.3484L16.279 15.1325C15.9533 15.1325 15.6321 14.9996 15.3999 14.7674L12.9867 12.3541C12.8119 12.1793 12.6001 12.0561 12.3733 11.9845C12.5991 11.9048 12.8023 11.777 12.9672 11.6328L12.9772 11.624L15.3985 9.20274C15.6311 8.97284 15.9534 8.83927 16.279 8.83927L17.8664 8.84388L19.2878 10.2653C20.2374 11.2149 20.2374 12.7569 19.2878 13.7065L17.6459 15.3484Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M16.207 7.18168L13.7091 4.68534C12.7595 3.73426 11.2175 3.73426 10.2647 4.68534L7.3897 7.56152C8.0887 7.6709 9.16261 7.83918 9.45559 8.14921L11.8553 10.5489L11.8578 10.5515C11.8651 10.5589 11.8704 10.5612 11.8704 10.5612C11.8704 10.5612 11.8721 10.5619 11.8746 10.5618C11.8783 10.5618 11.8992 10.5604 11.9312 10.5355L14.3311 8.13563C14.6548 7.81198 15.5616 7.39149 16.207 7.18168Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), fc = p(dc), uc = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.91907 16.4798L6.34806 16.837C6.5851 16.8963 6.70361 16.9259 6.80005 16.9876C6.88536 17.0422 6.9578 17.1146 7.01239 17.1999C7.0741 17.2964 7.10373 17.4149 7.16298 17.6519L7.52023 19.0809C7.67727 19.7091 7.75578 20.0231 7.93235 20.1696C8.0863 20.2973 8.28754 20.353 8.48526 20.3227C8.71201 20.288 8.94092 20.0591 9.39875 19.6012L9.67196 19.328C9.79303 19.207 9.85356 19.1464 9.89685 19.0758C9.93523 19.0132 9.96351 18.9449 9.98066 18.8735C10 18.7929 10 18.7073 10 18.5361L10 17.4639C10 17.2927 10 17.2071 10.0193 17.1265C10.0365 17.0551 10.0648 16.9868 10.1032 16.9242C10.1464 16.8536 10.207 16.793 10.328 16.672L11.799 15.201C12.2 14.8 12.4005 14.5995 12.6103 14.5586C12.7937 14.5228 12.9837 14.5618 13.1382 14.6669C13.3149 14.7872 13.4202 15.0505 13.6308 15.577L14.3692 17.423C14.5798 17.9495 14.6851 18.2128 14.8618 18.3331C15.0163 18.4382 15.2063 18.4772 15.3897 18.4414C15.5995 18.4005 15.8 18.2 16.201 17.799L16.5924 17.4076C16.7417 17.2583 16.8163 17.1837 16.8645 17.0955C16.9072 17.0174 16.9346 16.9319 16.9453 16.8436C16.9573 16.7438 16.9399 16.6397 16.9052 16.4315L16.0948 11.5685C16.0601 11.3603 16.0427 11.2562 16.0547 11.1564C16.0654 11.0681 16.0928 10.9826 16.1355 10.9045C16.1837 10.8163 16.2583 10.7417 16.4076 10.5924L18.5 8.5C19.3284 7.67157 19.3284 6.32843 18.5 5.5C17.6716 4.67157 16.3284 4.67157 15.5 5.5L13.4076 7.59244C13.2583 7.7417 13.1837 7.81633 13.0955 7.86453C13.0174 7.90721 12.9319 7.93461 12.8436 7.94527C12.7438 7.9573 12.6397 7.93995 12.4315 7.90525L7.56853 7.09475C7.36032 7.06005 7.25621 7.0427 7.15644 7.05473C7.0681 7.06539 6.98259 7.09279 6.90451 7.13547C6.81633 7.18367 6.7417 7.2583 6.59244 7.40756L6.20104 7.79896C5.80002 8.19998 5.59951 8.40049 5.55858 8.61028C5.5228 8.79365 5.56181 8.98372 5.66693 9.13818C5.7872 9.31488 6.05048 9.42019 6.57704 9.63082L8.42296 10.3692C8.94952 10.5798 9.2128 10.6851 9.33306 10.8618C9.43819 11.0163 9.4772 11.2063 9.44142 11.3897C9.40049 11.5995 9.19998 11.8 8.79897 12.201L8.79896 12.201L7.32804 13.672C7.20697 13.793 7.14644 13.8536 7.0758 13.8968C7.01317 13.9352 6.94489 13.9635 6.87346 13.9807C6.7929 14 6.70729 14 6.53608 14L5.46392 14C5.29271 14 5.2071 14 5.12654 14.0193C5.05511 14.0365 4.98683 14.0648 4.9242 14.1032C4.85356 14.1464 4.79303 14.207 4.67196 14.328L4.39875 14.6012C3.94092 15.0591 3.71201 15.288 3.67727 15.5147C3.64697 15.7125 3.70271 15.9137 3.83042 16.0677C3.97687 16.2442 4.29094 16.3227 4.91907 16.4798Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), hc = p(uc), gc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8L12 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 5.5C7 4.11929 8.11929 3 9.5 3V3C10.8807 3 12 4.11929 12 5.5V8H9.5C8.11929 8 7 6.88071 7 5.5V5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 5.5C17 4.11929 15.8807 3 14.5 3V3C13.1193 3 12 4.11929 12 5.5V8H14.5C15.8807 8 17 6.88071 17 5.5V5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M5 12V11.35C4.64101 11.35 4.35 11.641 4.35 12H5ZM19 12H19.65C19.65 11.641 19.359 11.35 19 11.35V12ZM5 12.65H19V11.35H5V12.65ZM18.35 12V16H19.65V12H18.35ZM16 18.35H8V19.65H16V18.35ZM5.65 16V12H4.35V16H5.65ZM8 18.35C6.70213 18.35 5.65 17.2979 5.65 16H4.35C4.35 18.0158 5.98416 19.65 8 19.65V18.35ZM18.35 16C18.35 17.2979 17.2979 18.35 16 18.35V19.65C18.0158 19.65 19.65 18.0158 19.65 16H18.35Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 10.6667C4 10.0467 4 9.7367 4.06815 9.48236C4.25308 8.79218 4.79218 8.25308 5.48236 8.06815C5.7367 8 6.04669 8 6.66667 8H17.3333C17.9533 8 18.2633 8 18.5176 8.06815C19.2078 8.25308 19.7469 8.79218 19.9319 9.48236C20 9.7367 20 10.0467 20 10.6667V10.6667C20 10.9767 20 11.1317 19.9659 11.2588C19.8735 11.6039 19.6039 11.8735 19.2588 11.9659C19.1317 12 18.9767 12 18.6667 12H5.33333C5.02334 12 4.86835 12 4.74118 11.9659C4.39609 11.8735 4.12654 11.6039 4.03407 11.2588C4 11.1317 4 10.9767 4 10.6667V10.6667Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), pc = p(gc), mc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13V11.8C4 10.1198 4 9.27976 4.32698 8.63803C4.6146 8.07354 5.07354 7.6146 5.63803 7.32698C6.27976 7 7.11984 7 8.8 7H15.2C16.8802 7 17.7202 7 18.362 7.32698C18.9265 7.6146 19.3854 8.07354 19.673 8.63803C20 9.27976 20 10.1198 20 11.8V13C20 13.93 20 14.395 19.8978 14.7765C19.6204 15.8117 18.8117 16.6204 17.7765 16.8978C17.395 17 16.93 17 16 17V15.6C16 15.0399 16 14.7599 15.891 14.546C15.7951 14.3578 15.6422 14.2049 15.454 14.109C15.2401 14 14.9601 14 14.4 14H9.6C9.03995 14 8.75992 14 8.54601 14.109C8.35785 14.2049 8.20487 14.3578 8.10899 14.546C8 14.7599 8 15.0399 8 15.6V17C7.07003 17 6.60504 17 6.22354 16.8978C5.18827 16.6204 4.37962 15.8117 4.10222 14.7765C4 14.395 4 13.93 4 13Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M17 7V7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7V7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M16 16.8V15.6C16 15.0399 16 14.7599 15.891 14.546C15.7951 14.3578 15.6422 14.2049 15.454 14.109C15.2401 14 14.9601 14 14.4 14H9.6C9.03995 14 8.75992 14 8.54601 14.109C8.35785 14.2049 8.20487 14.3578 8.10899 14.546C8 14.7599 8 15.0399 8 15.6V16.8C8 17.9201 8 18.4802 8.21799 18.908C8.40973 19.2843 8.71569 19.5903 9.09202 19.782C9.51984 20 10.0799 20 11.2 20H12.8C13.9201 20 14.4802 20 14.908 19.782C15.2843 19.5903 15.5903 19.2843 15.782 18.908C16 18.4802 16 17.9201 16 16.8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 17,
          cy: 11,
          r: 1,
          fill: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Cc = p(mc), vc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M5 5H19V12C19 13.6569 17.6569 15 16 15H8C6.34315 15 5 13.6569 5 12V5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15V20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15L7 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15L17 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 5H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 11.5L11 9.5L13 11.5L15.5 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5V3.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), wc = p(vc), xc = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M16.0237 3.34961C17.1906 3.35012 17.9884 4.52969 17.555 5.61328L16.3704 8.57422C16.2249 8.93815 16.1507 9.32682 16.1507 9.71875C16.1508 10.4043 16.3792 11.0712 16.8001 11.6123L18.2581 13.4873C19.1003 14.571 18.328 16.1502 16.9554 16.1504H12.6507V20C12.6505 20.3587 12.359 20.6502 12.0003 20.6504C11.6414 20.6504 11.3501 20.3588 11.3499 20V16.1504H7.0452C5.67228 16.1504 4.89988 14.5711 5.74246 13.4873L7.20047 11.6123C7.62137 11.0712 7.8498 10.4043 7.84989 9.71875C7.84985 9.32689 7.77557 8.9381 7.63016 8.57422L6.44559 5.61328C6.01212 4.5296 6.80978 3.34993 7.97684 3.34961H16.0237ZM7.97684 4.65039C7.72948 4.65071 7.56072 4.90013 7.65262 5.12988L8.83719 8.09082C9.04416 8.6084 9.15063 9.16133 9.15067 9.71875C9.15058 10.6934 8.82522 11.6408 8.22684 12.4102L6.76883 14.2852C6.59015 14.5151 6.75399 14.8496 7.0452 14.8496H16.9554C17.2463 14.8494 17.41 14.515 17.2317 14.2852L15.7737 12.4102C15.1753 11.6408 14.85 10.6934 14.8499 9.71875C14.8499 9.16126 14.9563 8.60845 15.1634 8.09082L16.3479 5.12988C16.4398 4.90022 16.2709 4.6509 16.0237 4.65039H7.97684Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), nr = p(xc), kc = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M16.0234 3.34961C17.1905 3.34991 17.9881 4.52862 17.5547 5.6123L16.3701 8.57324C16.2244 8.93747 16.1504 9.32647 16.1504 9.71875C16.1504 10.4044 16.3789 11.0701 16.7998 11.6113L18.2578 13.4863C19.1008 14.5701 18.3281 16.1494 16.9551 16.1494H12.6504V20C12.6502 20.3588 12.3588 20.6494 12 20.6494C11.6411 20.6494 11.3498 20.3588 11.3496 20V16.1494H7.0449C5.67186 16.1494 4.8992 14.5701 5.74217 13.4863L7.20017 11.6113C7.62108 11.0701 7.84956 10.4044 7.84959 9.71875C7.84959 9.32647 7.77555 8.93747 7.62986 8.57324L6.44529 5.6123C6.01182 4.52863 6.80949 3.34994 7.97654 3.34961H16.0234Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), bc = p(kc), Lc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 6.99999L18 18.8258C18 19.6801 16.9979 20.141 16.3492 19.585L15.1663 18.5711C14.7851 18.2444 14.2207 18.2509 13.8472 18.5865L12.6599 19.653C12.2785 19.9957 11.6998 19.9944 11.32 19.65L10.1531 18.5921C9.77987 18.2537 9.21318 18.2458 8.83066 18.5737L7.65079 19.585C7.00211 20.141 6 19.6801 6 18.8258L6 6.99999C6 5.34313 7.34314 3.99999 9 3.99999L15 3.99998C16.6569 3.99998 18 5.34313 18 6.99999Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 8H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 12H13",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), yc = p(Lc), Mc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 6,
          fill: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ec = p(Mc), Rc = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.4561 4.10842C12.167 3.96382 11.8282 3.96382 11.5391 4.10842C11.2986 4.2287 11.1657 4.4365 11.0944 4.55864C11.0194 4.68705 10.9414 4.85286 10.8607 5.02441L10.8503 5.04667L9.98786 6.87923C9.83501 7.20404 9.97441 7.59127 10.2992 7.74413C10.624 7.89699 11.0113 7.75759 11.1641 7.43277L11.9976 5.66168L13.6732 9.22232L13.6842 9.24593C13.7226 9.32875 13.7886 9.47135 13.8931 9.58936C13.9829 9.69075 14.0922 9.77468 14.2159 9.83501C14.3622 9.90634 14.5209 9.92951 14.6076 9.94215L14.6319 9.94575L18.4422 10.5299L18.4236 10.5489L16.2183 12.802C15.9672 13.0585 15.9716 13.4701 16.2281 13.7212C16.4846 13.9723 16.8962 13.9679 17.1473 13.7113L19.3526 11.4583L19.3698 11.4407C19.5002 11.3076 19.6272 11.1779 19.721 11.0628C19.814 10.9489 19.9542 10.7577 19.9867 10.4989C20.0252 10.1936 19.9315 9.88066 19.7207 9.64732C19.5399 9.44707 19.3067 9.37527 19.1655 9.33965C19.0229 9.30369 18.8456 9.27654 18.6666 9.24913L18.6417 9.24531L14.847 8.66354L13.1449 5.04667L13.1345 5.02443C13.0538 4.85288 12.9757 4.68705 12.9008 4.55864C12.8295 4.4365 12.6966 4.2287 12.4561 4.10842ZM6.87091 10.3279C7.22575 10.2735 7.4693 9.94171 7.4149 9.58687C7.3605 9.23203 7.02874 8.98848 6.6739 9.04288L5.35348 9.24531L5.32859 9.24913C5.14958 9.27654 4.97227 9.3037 4.82971 9.33965C4.68849 9.37527 4.45532 9.44707 4.27445 9.64732C4.06369 9.88066 3.97 10.1936 4.00844 10.4989C4.04103 10.7577 4.18123 10.9489 4.27415 11.0628C4.36799 11.1779 4.49496 11.3075 4.62534 11.4407L4.62536 11.4407L4.64255 11.4583L7.40051 14.2759L7.40544 14.2809L7.40307 14.2955L6.75231 18.2752L6.7484 18.2991L6.7484 18.2991C6.71746 18.4882 6.68774 18.6698 6.67648 18.819C6.66558 18.9634 6.65842 19.202 6.77813 19.4332C6.92172 19.7105 7.18415 19.9172 7.50273 19.9792C7.77318 20.0318 8.0071 19.942 8.13719 19.8854C8.27215 19.8267 8.4302 19.7395 8.59061 19.6509L8.61265 19.6388L11.9976 17.7716L15.3825 19.6388C15.6969 19.8122 16.0923 19.6979 16.2656 19.3836C16.439 19.0692 16.3248 18.6739 16.0104 18.5005L12.6018 16.6203L12.5801 16.6081L12.5801 16.6081C12.5033 16.5651 12.3626 16.4861 12.2036 16.4534C12.0676 16.4254 11.9276 16.4254 11.7916 16.4534C11.6326 16.4861 11.4919 16.5651 11.4151 16.6081L11.4151 16.6081L11.3934 16.6203L8.0375 18.4714L8.68603 14.5053L8.69039 14.4792C8.70593 14.3875 8.73172 14.2351 8.71381 14.0802C8.69853 13.948 8.6588 13.8191 8.59585 13.7005C8.52141 13.5602 8.41141 13.4492 8.34751 13.3848L8.34751 13.3848L8.32953 13.3665L5.57157 10.5489L5.55295 10.5299L6.87091 10.3279ZM6.45962 5.54039C6.20578 5.28655 5.79422 5.28655 5.54038 5.54039C5.28654 5.79423 5.28654 6.20578 5.54038 6.45963L17.5404 18.4596C17.7942 18.7135 18.2058 18.7135 18.4596 18.4596C18.7135 18.2058 18.7135 17.7942 18.4596 17.5404L6.45962 5.54039Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Fc = p(Rc), Nc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 10V9C20 7.34315 18.6569 6 17 6H14M14 6L16 4M14 6L16 8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 14V15C4 16.6569 5.34315 18 7 18H10M10 18L8 20M10 18L8 16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16C14 14.8954 14.8954 14 16 14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 4H8C9.10457 4 10 4.89543 10 6V8C10 9.10457 9.10457 10 8 10H6C4.89543 10 4 9.10457 4 8V6C4 4.89543 4.89543 4 6 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Sc = p(Nc), Vc = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19 14.12L16 14.12L12.75 14.12C11.1232 14.12 10.3098 14.12 9.63754 13.9633C7.4127 13.4445 5.6755 11.7073 5.15674 9.48245C5 8.81024 5 7.99682 5 6.37M19 14.12L15.5 17.62M19 14.12L15.5 10.62",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), R1 = p(Vc), Tc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M11 14.9999L9 12.9999M11 14.9999C12.0745 14.5913 13.413 14.0759 14.3846 13.4615M11 14.9999V18.9999C11 18.9999 14.2538 18.1153 15 16.9999C15.8308 15.7538 14.3846 13.4615 14.3846 13.4615M9 12.9999C9.40934 11.938 9.92477 10.6124 10.5385 9.6539M9 12.9999H5C5 12.9999 5.88462 9.74607 7 8.99993C8.24615 8.16917 10.5385 9.6539 10.5385 9.6539M10.5385 9.6539C12.5 6.50003 14.5 5.00003 19 5.00003C19 8.50003 18 11.5 14.3846 13.4615",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4.66921 17.526C4.74318 16.6629 5.46533 16 6.33156 16V16C7.25301 16 8 16.747 8 17.6684V17.6684C8 18.5347 7.3371 19.2568 6.47404 19.3308L4.5 19.5L4.66921 17.526Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Hc = p(Tc), Ac = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8.13954 2.45918C8.30339 2.34995 8.50792 2.32088 8.69571 2.38014C9.27902 2.56422 10.039 2.89291 10.7382 3.29241C11.2317 3.5744 11.7421 3.91791 12.138 4.30199C13.1925 3.74278 14.2487 3.45352 14.9055 3.35693C15.1941 3.31449 15.4756 3.46948 15.5941 3.73602C15.9395 4.51328 16.4053 5.75374 16.6836 6.96718C16.8227 7.57321 16.9204 8.19552 16.9251 8.7618C16.9267 8.9555 16.9176 9.15399 16.8917 9.35001H17.0001C17.3591 9.35001 17.6501 9.64102 17.6501 10C17.6501 12.6499 16.3024 14.9845 14.2577 16.3566V18C14.2577 18.359 13.9667 18.65 13.6077 18.65H6.39251C6.03353 18.65 5.74251 18.359 5.74251 18V16.3566C3.69781 14.9845 2.3501 12.6499 2.3501 10C2.3501 9.64102 2.64111 9.35001 3.0001 9.35001H3.12446C3.07724 9.06203 3.04738 8.73614 3.03785 8.39306C3.01558 7.59151 3.10279 6.63645 3.38345 5.79446C3.47193 5.52904 3.72032 5.35001 4.0001 5.35001C4.4017 5.35001 4.9702 5.39055 5.59368 5.4989C5.74138 5.17849 5.94898 4.80158 6.21243 4.41377C6.66155 3.75265 7.30084 3.01831 8.13954 2.45918ZM6.88594 5.81564C7.49072 6.01295 8.10525 6.29375 8.61957 6.69299C8.94699 6.52587 9.30754 6.41424 9.68834 6.37061C10.0641 5.84191 10.5182 5.39825 10.9996 5.02886C10.754 4.82928 10.4448 4.62201 10.0933 4.42115C9.58806 4.13248 9.0505 3.88794 8.60544 3.72343C8.06243 4.139 7.62119 4.65348 7.28777 5.14429C7.12302 5.3868 6.98957 5.61608 6.88594 5.81564ZM11.2118 6.57132C11.4739 6.67538 11.7188 6.81356 11.9408 6.98034C12.667 7.52596 13.1511 8.38069 13.1966 9.35001H15.5726C15.6064 9.20367 15.6271 9.01341 15.6251 8.7726C15.6215 8.33575 15.5442 7.81431 15.4166 7.25784C15.212 6.36613 14.8921 5.44355 14.6077 4.74037C13.9854 4.89216 13.1394 5.1912 12.3407 5.68264C11.9335 5.93325 11.5477 6.22825 11.2118 6.57132ZM16.3172 10.65H16.0001H12.5001H7.60012H4.0001H3.68295C3.88982 12.6852 5.05762 14.4368 6.72798 15.4433C6.92317 15.5609 7.04251 15.7721 7.04251 16V17.35H12.9577V16C12.9577 15.7721 13.077 15.5609 13.2722 15.4433C14.9426 14.4368 16.1104 12.6852 16.3172 10.65ZM4.44808 9.35001H6.90362C6.93549 8.67096 7.18261 8.04814 7.57743 7.54844C7.09896 7.24575 6.48991 7.02505 5.85311 6.87722C5.35783 6.76224 4.87859 6.69883 4.48902 6.66985C4.36654 7.21786 4.32233 7.81632 4.33735 8.35696C4.34697 8.70323 4.38052 9.01081 4.42721 9.25094C4.43403 9.28601 4.44101 9.31904 4.44808 9.35001ZM8.20609 9.35001H11.8941C11.8506 8.80697 11.573 8.33003 11.1599 8.01968C10.8507 7.7874 10.4674 7.65001 10.0501 7.65001C9.6328 7.65001 9.24947 7.7874 8.9403 8.01968C8.52723 8.33003 8.24958 8.80697 8.20609 9.35001Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Bc = p(Ac), $c = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 19V19C17.6569 19 19 17.6569 19 16V10.2426C19 9.44699 18.6839 8.68393 18.1213 8.12132L15.8787 5.87868C15.3161 5.31607 14.553 5 13.7574 5H8V5C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19V19M16 19V16C16 14.8954 15.1046 14 14 14H10C8.89543 14 8 14.8954 8 16V19M16 19H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 6V10H9V6",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ic = p($c), Pc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10.5 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 17.5,
          cy: 15.5,
          r: 4.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 14V15.054C17.5 15.3326 17.6393 15.5928 17.8711 15.7474L19 16.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 10L11 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 14H9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), jc = p(Pc), Dc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M10.3036 4.71638C11.0868 3.46223 12.9132 3.46223 13.6964 4.71638L14.4364 5.90129C14.7887 6.46555 15.3986 6.81766 16.0635 6.8407L17.4596 6.88908C18.9373 6.94029 19.8505 8.52194 19.156 9.8273L18.4998 11.0606C18.1873 11.6479 18.1873 12.3521 18.4998 12.9394L19.156 14.1727C19.8505 15.4781 18.9373 17.0597 17.4596 17.1109L16.0635 17.1593C15.3986 17.1823 14.7887 17.5345 14.4364 18.0987L13.6964 19.2836C12.9132 20.5378 11.0868 20.5378 10.3036 19.2836L9.56365 18.0987C9.21127 17.5345 8.60139 17.1823 7.93654 17.1593L6.54039 17.1109C5.06266 17.0597 4.14949 15.4781 4.84401 14.1727L5.50018 12.9394C5.81266 12.3521 5.81266 11.6479 5.50018 11.0606L4.84401 9.8273C4.14949 8.52194 5.06266 6.94029 6.54039 6.88908L7.93654 6.8407C8.60139 6.81766 9.21127 6.46555 9.56365 5.90129L10.3036 4.71638Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 11.999,
          cy: 12,
          r: 2.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Zc = p(Dc), _c = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M5 11.4038L5 6L6.63836 5.5319C7.87494 5.17859 9.06442 4.67747 10.181 4.03941L12 3L13.819 4.03941C14.9356 4.67747 16.1251 5.17859 17.3616 5.5319L19 6V11.4038C19 13.1235 18.7853 14.8943 17.7189 16.2435C15.6012 18.9228 12 21 12 21C12 21 8.39876 18.9228 6.28107 16.2435C5.21473 14.8943 5 13.1235 5 11.4038Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Oc = p(_c), Uc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 8,
          cy: 21,
          r: 1,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 19,
          cy: 21,
          r: 1,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), or = p(Uc);
or.displayName = "ShoppingCart";
const zc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 20L12 13",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 6L12 3",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16.5577 13H5.6C5.03995 13 4.75992 13 4.54601 12.891C4.35785 12.7951 4.20487 12.6422 4.10899 12.454C4 12.2401 4 11.9601 4 11.4V7.6C4 7.03995 4 6.75992 4.10899 6.54601C4.20487 6.35785 4.35785 6.20487 4.54601 6.10899C4.75992 6 5.03995 6 5.6 6H16.5577C17.104 6 17.3772 6 17.6306 6.06764C17.8552 6.12757 18.0675 6.22619 18.2582 6.35906C18.4735 6.50901 18.6497 6.71768 19.0022 7.13502L19.0023 7.13503L21 9.5L19.0023 11.865C18.6497 12.2823 18.4735 12.491 18.2582 12.6409C18.0675 12.7738 17.8552 12.8724 17.6306 12.9324C17.3772 13 17.104 13 16.5577 13Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Gc = p(zc), Wc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.5 20.5H3.5L10.5 13.5H3.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20.5 10.5H13.5L20.5 3.5H13.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), qc = p(Wc), Xc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 9V18M16 18L13 15M16 18L19 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 15V6M8 6L5 9M8 6L11 9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Yc = p(Xc), Kc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M11.7977 3.69779C11.9251 3.63406 12.0747 3.63406 12.2021 3.69779C12.3154 3.75444 12.3728 3.84956 12.3952 3.88789C12.4197 3.92977 12.444 3.98153 12.4647 4.02555L12.4688 4.03428L12.8928 4.93538L13.8346 5.07976L13.8442 5.08122C13.89 5.08823 13.9461 5.0968 13.9933 5.1087C14.0395 5.12036 14.1455 5.15012 14.2306 5.24425C14.3225 5.34607 14.3628 5.48181 14.3462 5.61368C14.331 5.73432 14.2664 5.81806 14.2363 5.85495C14.2056 5.89263 14.1658 5.93327 14.1323 5.96743L14.1256 5.97427L13.4348 6.68001L13.5985 7.68083L13.6 7.69027C13.608 7.73883 13.6172 7.7953 13.6209 7.84374C13.6243 7.8894 13.6302 7.99564 13.5743 8.10354C13.5119 8.22399 13.3972 8.31509 13.2564 8.34246C13.1285 8.36734 13.0233 8.32389 12.9816 8.30574C12.9371 8.28636 12.8872 8.25883 12.8462 8.23614L12.8377 8.23146L11.9999 7.76934L11.1621 8.23146L11.1536 8.23614L11.1536 8.23615C11.1125 8.25884 11.0627 8.28636 11.0182 8.30574C10.9765 8.32389 10.8713 8.36734 10.7434 8.34246C10.6026 8.31509 10.4879 8.22399 10.4255 8.10354C10.3696 7.99564 10.3755 7.8894 10.3789 7.84374C10.3826 7.7953 10.3918 7.73883 10.3998 7.69027L10.4013 7.68083L10.565 6.68001L9.87419 5.97427L9.86748 5.96742C9.83402 5.93327 9.79421 5.89263 9.76348 5.85495C9.73338 5.81806 9.66874 5.73432 9.65355 5.61368C9.63695 5.48181 9.67727 5.34607 9.76924 5.24425C9.85426 5.15012 9.96026 5.12036 10.0065 5.1087C10.0537 5.0968 10.1098 5.08823 10.1556 5.08122L10.1556 5.08122L10.1652 5.07976L11.1069 4.93538L11.531 4.03428L11.5351 4.02555L11.5351 4.02555C11.5558 3.98153 11.5801 3.92977 11.6046 3.88789C11.6269 3.84956 11.6844 3.75444 11.7977 3.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M5.79768 6.69779C5.92512 6.63406 6.07467 6.63406 6.20211 6.69779C6.31538 6.75444 6.37285 6.84956 6.39522 6.88789C6.41966 6.92977 6.444 6.98153 6.46469 7.02555L6.46879 7.03428L6.89285 7.93538L7.83464 8.07976L7.84417 8.08122C7.89003 8.08823 7.94612 8.0968 7.99331 8.1087C8.03953 8.12036 8.14553 8.15012 8.23056 8.24425C8.32252 8.34607 8.36284 8.48181 8.34624 8.61368C8.33105 8.73432 8.26641 8.81806 8.23631 8.85495C8.20558 8.89263 8.16576 8.93327 8.1323 8.96743L8.1256 8.97427L7.4348 9.68001L7.59845 10.6808L7.6 10.6903C7.60796 10.7388 7.61721 10.7953 7.62087 10.8437C7.62432 10.8894 7.63019 10.9956 7.57431 11.1035C7.51194 11.224 7.39718 11.3151 7.25642 11.3425C7.12848 11.3673 7.02333 11.3239 6.98162 11.3057C6.93709 11.2864 6.88725 11.2588 6.84616 11.2361L6.83768 11.2315L5.9999 10.7693L5.16211 11.2315L5.15363 11.2361L5.15363 11.2361C5.11254 11.2588 5.0627 11.2864 5.01817 11.3057C4.97646 11.3239 4.87131 11.3673 4.74337 11.3425C4.60261 11.3151 4.48786 11.224 4.42548 11.1035C4.36961 10.9956 4.37547 10.8894 4.37892 10.8437C4.38258 10.7953 4.39183 10.7388 4.39979 10.6903L4.40134 10.6808L4.56499 9.68001L3.87419 8.97427L3.86748 8.96742C3.83402 8.93327 3.79421 8.89263 3.76348 8.85495C3.73338 8.81806 3.66874 8.73432 3.65355 8.61368C3.63695 8.48181 3.67727 8.34607 3.76924 8.24425C3.85426 8.15012 3.96026 8.12036 4.00649 8.1087C4.05367 8.0968 4.10975 8.08823 4.15562 8.08122L4.15562 8.08122L4.16516 8.07976L5.10694 7.93538L5.531 7.03428L5.5351 7.02555L5.5351 7.02555C5.5558 6.98153 5.58013 6.92977 5.60457 6.88789C5.62694 6.84956 5.68441 6.75444 5.79768 6.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M17.7977 6.69779C17.9251 6.63406 18.0747 6.63406 18.2021 6.69779C18.3154 6.75444 18.3728 6.84956 18.3952 6.88789C18.4197 6.92977 18.444 6.98153 18.4647 7.02555L18.4688 7.03428L18.8928 7.93538L19.8346 8.07976L19.8442 8.08122C19.89 8.08823 19.9461 8.0968 19.9933 8.1087C20.0395 8.12036 20.1455 8.15012 20.2306 8.24425C20.3225 8.34607 20.3628 8.48181 20.3462 8.61368C20.331 8.73432 20.2664 8.81806 20.2363 8.85495C20.2056 8.89263 20.1658 8.93327 20.1323 8.96743L20.1256 8.97427L19.4348 9.68001L19.5985 10.6808L19.6 10.6903C19.608 10.7388 19.6172 10.7953 19.6209 10.8437C19.6243 10.8894 19.6302 10.9956 19.5743 11.1035C19.5119 11.224 19.3972 11.3151 19.2564 11.3425C19.1285 11.3673 19.0233 11.3239 18.9816 11.3057C18.9371 11.2864 18.8872 11.2588 18.8462 11.2361L18.8377 11.2315L17.9999 10.7693L17.1621 11.2315L17.1536 11.2361L17.1536 11.2361C17.1125 11.2588 17.0627 11.2864 17.0182 11.3057C16.9765 11.3239 16.8713 11.3673 16.7434 11.3425C16.6026 11.3151 16.4879 11.224 16.4255 11.1035C16.3696 10.9956 16.3755 10.8894 16.3789 10.8437C16.3826 10.7953 16.3918 10.7388 16.3998 10.6903L16.4013 10.6808L16.565 9.68001L15.8742 8.97427L15.8675 8.96742C15.834 8.93327 15.7942 8.89263 15.7635 8.85495C15.7334 8.81806 15.6687 8.73432 15.6536 8.61368C15.6369 8.48181 15.6773 8.34607 15.7692 8.24425C15.8543 8.15012 15.9603 8.12036 16.0065 8.1087C16.0537 8.0968 16.1098 8.08823 16.1556 8.08122L16.1556 8.08122L16.1652 8.07976L17.1069 7.93538L17.531 7.03428L17.5351 7.02555L17.5351 7.02555C17.5558 6.98153 17.5801 6.92977 17.6046 6.88789C17.6269 6.84956 17.6844 6.75444 17.7977 6.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 11V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 14C7 14.3333 9 16 9 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 14C17 14.3333 15 16 15 19",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Qc = p(Kc), Jc = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 12H9L10.6187 9.41C11.167 8.53286 12.1284 8 13.1627 8H19M19 8L17 6M19 8L17 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 16H13.1627C12.1284 16 11.167 15.4671 10.6187 14.59L9 12H5M19 16L17 14M19 16L17 18",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), el = p(Jc), tl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "rect",
        {
          width: 16,
          height: 12,
          x: 4,
          y: 7.5,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          d: "M9 7.49999V6.49999C9 5.39542 9.89543 4.49999 11 4.49999H13C14.1046 4.49999 15 5.39542 15 6.49999V7.49999",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12.5L4 12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11 12.5V14.25C11 14.3881 11.1119 14.5 11.25 14.5H12.75C12.8881 14.5 13 14.3881 13 14.25V12.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), rl = p(tl), nl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.0005 16L6.00049 16M6.00049 16L9.00049 13M6.00049 16L9.00049 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9.00049 8L18.0005 8M18.0005 8L15.0005 5M18.0005 8L15.0005 11",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ol = p(nl), sl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M8 4H16C17.6569 4 19 5.34315 19 7V17C19 18.6569 17.6569 20 16 20H8C6.34315 20 5 18.6569 5 17V7C5 5.34315 6.34315 4 8 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 16V16.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), il = p(sl), al = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 0.5,
          fill: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), cl = p(al), ll = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 12L15 9M15 9V6L18 3L19 5L21 6L18 9H15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), dl = p(ll), fl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 8V11C20 12.1046 19.1046 13 18 13H16.5207C16.1943 13 15.8886 13.1592 15.7014 13.4265L12.8927 17.439C12.6466 17.7906 12.2444 18 11.8152 18C11.0888 18 10.5 17.4112 10.5 16.6848V14H6.06155C4.76041 14 3.80569 12.7772 4.12127 11.5149L4.9319 8.27239C5.26578 6.93689 6.46573 6 7.84233 6H16H18C19.1046 6 20 6.89543 20 8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 6V13",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), sr = p(fl), ul = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M16.9401 6C16.9401 5.72386 17.164 5.5 17.4401 5.5L17.9401 5.5C19.3208 5.5 20.4401 6.61929 20.4401 8L20.4401 11C20.4401 12.3807 19.3208 13.5 17.9401 13.5L17.4401 13.5C17.164 13.5 16.9401 13.2761 16.9401 13L16.9401 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M11.7555 18.5C10.753 18.5 9.94011 17.6871 9.94011 16.6846L9.94011 14.5L6.00163 14.5C4.37522 14.5 3.18139 12.9714 3.57585 11.3936L4.38738 8.15137C4.7769 6.59328 6.17685 5.5 7.78288 5.5L14.9401 5.5C15.4924 5.5 15.9401 5.94771 15.9401 6.5L15.9401 12.9265C15.9401 13.5419 15.7508 14.1425 15.3979 14.6468L13.2428 17.7256C12.9032 18.2108 12.3478 18.4999 11.7555 18.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ir = p(ul), hl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 16V13C4 11.8954 4.89543 11 6 11H7.47934C7.80566 11 8.11145 10.8408 8.29858 10.5735L11.1073 6.56099C11.3534 6.2094 11.7556 6 12.1848 6C12.9112 6 13.5 6.58885 13.5 7.31522V10H17.9384C19.2396 10 20.1943 11.2228 19.8787 12.4851L19.0681 15.7276C18.7342 17.0631 17.5343 18 16.1577 18H8H6C4.89543 18 4 17.1046 4 16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 11V18",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ar = p(hl), gl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M7 18C7 18.2761 6.77614 18.5 6.5 18.5H6C4.61929 18.5 3.5 17.3807 3.5 16V13C3.5 11.6193 4.61929 10.5 6 10.5H6.5C6.77614 10.5 7 10.7239 7 11V18Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M12.1846 5.5C13.1871 5.5 14 6.31291 14 7.31543V9.5H17.9385C19.5649 9.50002 20.7587 11.0286 20.3643 12.6064L19.5527 15.8486C19.1632 17.4067 17.7633 18.5 16.1572 18.5H9C8.44772 18.5 8 18.0523 8 17.5V11.0735C8 10.4581 8.18931 9.85747 8.54225 9.35324L10.6973 6.27441C11.0369 5.78921 11.5923 5.50007 12.1846 5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), cr = p(gl), pl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 12,
          cy: 13,
          r: 7.35,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 10.3301V12.9967L15 14.6634",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5.5V3",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 3H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.0901 6L20.5043 7.41421",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.90991 6L3.4957 7.41421",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ml = p(pl), Cl = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.7549 2.39853C11.9383 2.32377 12.1476 2.33589 12.3223 2.43564L14.1416 3.4747C15.2128 4.08683 16.3537 4.56837 17.54 4.90732L19.1787 5.37509C19.4577 5.45487 19.6504 5.70993 19.6504 6.00009V11.4034C19.6504 13.1504 19.4389 15.1152 18.2285 16.6466C17.117 18.0528 15.6336 19.2821 14.4492 20.1505C13.8534 20.5874 13.3253 20.9392 12.9453 21.1817C12.7552 21.303 12.6018 21.3975 12.4951 21.462C12.4418 21.4942 12.3999 21.5192 12.3711 21.5362C12.3568 21.5446 12.3456 21.5512 12.3379 21.5558C12.3343 21.5579 12.3312 21.5594 12.3291 21.5606C12.328 21.5613 12.3268 21.5622 12.3262 21.5626H12.3252L12 21.0001L12.3252 21.5636C12.1242 21.6795 11.8758 21.6795 11.6748 21.5636V21.5626H11.6738C11.6732 21.5622 11.672 21.5613 11.6709 21.5606C11.6688 21.5594 11.6657 21.5579 11.6621 21.5558C11.6544 21.5512 11.6432 21.5446 11.6289 21.5362C11.6001 21.5192 11.5582 21.4942 11.5049 21.462C11.3982 21.3975 11.2448 21.303 11.0547 21.1817C10.6747 20.9392 10.1466 20.5873 9.55078 20.1505C8.36639 19.2821 6.88299 18.0528 5.77148 16.6466C4.56116 15.1152 4.34962 13.1504 4.34961 11.4034V6.00009L4.3584 5.89365C4.39886 5.64914 4.57703 5.44494 4.82129 5.37509L6.45996 4.90732C7.64627 4.56837 8.78717 4.08683 9.8584 3.4747L11.6777 2.43564L11.7549 2.39853ZM12 14.6505C10.2273 14.6505 8.77655 16.027 8.6582 17.7696C9.22229 18.2665 9.79442 18.7178 10.3193 19.1026C10.8883 19.5198 11.3926 19.8555 11.7539 20.086C11.8452 20.1443 11.9284 20.194 12 20.2384C12.0716 20.194 12.1548 20.1443 12.2461 20.086C12.6074 19.8555 13.1117 19.5198 13.6807 19.1026C14.2054 18.7179 14.7769 18.2663 15.3408 17.7696C15.2224 16.027 13.7727 14.6505 12 14.6505ZM10.5039 4.60361C9.34203 5.26753 8.10407 5.78966 6.81738 6.15732L5.65039 6.49033V11.4034C5.6504 13.0958 5.86868 14.6739 6.79102 15.8409C7.02193 16.133 7.27347 16.4176 7.53613 16.6944C8.00407 15.0921 9.31082 13.8484 10.9492 13.4698C9.72624 13.037 8.84964 11.8712 8.84961 10.5001C8.84961 8.7604 10.2603 7.3497 12 7.3497C13.7397 7.3497 15.1504 8.7604 15.1504 10.5001C15.1504 11.8715 14.2732 13.0372 13.0498 13.4698C14.6885 13.8481 15.9948 15.092 16.4629 16.6944C16.7257 16.4174 16.9779 16.1332 17.209 15.8409C18.1313 14.6739 18.3496 13.0958 18.3496 11.4034V6.49033L17.1826 6.15732C15.8959 5.78966 14.658 5.26753 13.4961 4.60361L12 3.74814L10.5039 4.60361ZM12 8.65048C10.9783 8.65048 10.1504 9.47837 10.1504 10.5001C10.1504 11.5218 10.9783 12.3497 12 12.3497C13.0217 12.3497 13.8496 11.5218 13.8496 10.5001C13.8496 9.47837 13.0217 8.65048 12 8.65048Z",
        fill: "currentColor"
      }
    )
  }
), vl = p(Cl), wl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "rect",
        {
          width: 13,
          height: 12,
          x: 4,
          y: 6,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 11L21 9V15L17 13V11Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), xl = p(wl), kl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 13.7V10.8C17 9.11984 17 8.27976 16.673 7.63803C16.3854 7.07354 15.9265 6.6146 15.362 6.32698C14.7202 6 13.8802 6 12.2 6H9.5M14.6676 17.8965C14.0998 18 13.345 18 12.2 18H8.8C7.11984 18 6.27976 18 5.63803 17.673C5.07354 17.3854 4.6146 16.9265 4.32698 16.362C4 15.7202 4 14.8802 4 13.2V10.8C4 9.76415 4 9.04761 4.07662 8.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 11L21 9V15L17 13V11Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 5L18 18",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), bl = p(kl), Ll = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 7V16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16V12C20 10.3431 18.6569 9 17 9H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 5H15C16.1046 5 17 5.89543 17 7V9H6C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "circle",
        {
          cx: 16.25,
          cy: 13.75,
          r: 1.25,
          fill: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), yl = p(Ll), Ml = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          d: "M12 2.34961C12.5182 2.34962 12.9694 2.37913 13.3516 2.42188C13.8208 2.47432 14.3633 2.50573 14.7822 2.93555C15.0225 3.18222 15.1214 3.48455 15.1768 3.76367C15.2306 4.03551 15.2589 4.37743 15.292 4.76172C15.3591 5.53967 15.5776 6.26032 15.7842 6.79297C15.8866 7.05713 15.9845 7.27054 16.0557 7.41602C16.0911 7.4885 16.1205 7.5441 16.1396 7.58008C16.1433 7.58694 16.1466 7.59314 16.1494 7.59863C17.3191 8.70192 18.0497 10.2654 18.0498 12C18.0497 13.7349 17.3184 15.2982 16.1484 16.4014C16.1457 16.4066 16.143 16.4126 16.1396 16.4189C16.1205 16.4548 16.0911 16.5106 16.0557 16.583C15.9845 16.7285 15.8867 16.9427 15.7842 17.207C15.5776 17.7396 15.3591 18.4605 15.292 19.2383C15.2589 19.6224 15.2306 19.9646 15.1768 20.2363C15.1214 20.5154 15.0224 20.8178 14.7822 21.0645C14.3633 21.4943 13.8207 21.5256 13.3516 21.5781C12.9695 21.6208 12.5182 21.6494 12 21.6494C11.6117 21.6494 11.2611 21.6336 10.9492 21.6074L10.6494 21.5781C10.1802 21.5256 9.63791 21.4943 9.21875 21.0645C8.97826 20.8178 8.87959 20.5155 8.82422 20.2363C8.77035 19.9646 8.74212 19.6225 8.70898 19.2383C8.64188 18.4605 8.42333 17.7396 8.2168 17.207C8.11424 16.9426 8.01651 16.7285 7.94531 16.583C7.90981 16.5105 7.88047 16.4549 7.86133 16.4189C7.8581 16.4129 7.85514 16.4073 7.85254 16.4023C6.68185 15.2991 5.94933 13.7353 5.94922 12C5.94933 10.2649 6.68115 8.70099 7.85156 7.59766C7.8543 7.59238 7.85789 7.58654 7.86133 7.58008C7.88049 7.54407 7.90988 7.48842 7.94531 7.41602C8.01649 7.27052 8.11437 7.05707 8.2168 6.79297C8.42335 6.26033 8.64189 5.53959 8.70898 4.76172C8.74213 4.37742 8.77033 4.0355 8.82422 3.76367C8.87958 3.48449 8.97829 3.18225 9.21875 2.93555C9.63788 2.50583 10.18 2.47435 10.6494 2.42188C11.0315 2.37915 11.482 2.34962 12 2.34961ZM14.2822 17.6025C13.5778 17.8898 12.8076 18.0498 12 18.0498C11.192 18.0498 10.4215 17.8901 9.7168 17.6025C9.84577 18.0586 9.95643 18.576 10.0039 19.126C10.0396 19.5404 10.0629 19.7982 10.0996 19.9834C10.1347 20.1606 10.1651 20.1734 10.1494 20.1572C10.165 20.1732 10.1793 20.1873 10.2529 20.207C10.3581 20.2352 10.5049 20.2538 10.7939 20.2861L11.0576 20.3115C11.3337 20.3347 11.648 20.3496 12 20.3496C12.4696 20.3496 12.8725 20.3235 13.207 20.2861C13.4962 20.2538 13.6429 20.2353 13.748 20.207C13.8215 20.1873 13.836 20.1732 13.8516 20.1572C13.8356 20.1736 13.8661 20.161 13.9014 19.9834C13.938 19.7983 13.9614 19.5403 13.9971 19.126C14.0446 18.5761 14.1533 18.0585 14.2822 17.6025ZM12 7.25C9.37696 7.25021 7.25021 9.37696 7.25 12C7.25021 14.623 9.37696 16.7498 12 16.75C14.623 16.7498 16.7498 14.623 16.75 12C16.7498 9.37696 14.623 7.25021 12 7.25ZM12 3.65039C11.5305 3.65041 11.1283 3.67648 10.7939 3.71387C10.5051 3.74616 10.3581 3.76385 10.2529 3.79199C10.1794 3.81174 10.165 3.82676 10.1494 3.84277C10.165 3.82668 10.1347 3.83965 10.0996 4.0166C10.0629 4.20169 10.0396 4.45884 10.0039 4.87305C9.95647 5.42304 9.84577 5.94044 9.7168 6.39648C10.4215 6.10898 11.1921 5.94927 12 5.94922C12.8075 5.94927 13.5779 6.10927 14.2822 6.39648C14.1533 5.94053 14.0445 5.42292 13.9971 4.87305C13.9614 4.45889 13.938 4.20167 13.9014 4.0166C13.8661 3.8389 13.8356 3.82639 13.8516 3.84277C13.836 3.82677 13.8215 3.81177 13.748 3.79199C13.6429 3.76379 13.496 3.74618 13.207 3.71387C12.8726 3.67646 12.4697 3.65041 12 3.65039Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          d: "M12 10V12L14 13",
          stroke: "currentColor",
          strokeWidth: "1.3",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), El = p(Ml), Rl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M12 5C8.13401 5 5 8.13401 5 12C5 13.1001 5.25305 14.1382 5.70318 15.0619L5.86304 15.39L5.03857 18.6682L8.27628 17.9409L8.6092 18.1256C9.6128 18.6825 10.7678 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C10.5586 21 9.19397 20.6604 7.98415 20.0563L5.47694 20.6196C4.02315 20.9461 2.73556 19.6254 3.09898 18.1804L3.74839 15.5982C3.26679 14.4952 3 13.2776 3 12Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M8.94117 8H10.485C10.6895 8 10.8733 8.12448 10.9492 8.3143L11.6066 9.95758C11.6977 10.1854 11.61 10.4458 11.3996 10.572L10.5882 11.0588C11.0922 12.0807 11.9193 12.9078 12.9412 13.4118L13.428 12.6004C13.5542 12.39 13.8146 12.3023 14.0424 12.3934L15.6857 13.0507C15.8755 13.1267 16 13.3105 16 13.515V15.0588C16 15.3084 15.9008 15.5478 15.7243 15.7243C15.5478 15.9008 15.3084 16 15.0588 16C13.2232 15.8884 11.4918 15.1089 10.1914 13.8086C8.89105 12.5082 8.11154 10.7768 7.99999 8.94118C7.99999 8.69156 8.09915 8.45217 8.27566 8.27566C8.45216 8.09916 8.69155 8 8.94117 8Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Fl = p(Rl), Nl = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ r("path", { d: "M12 20h.01", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ r("path", { d: "M2 8.82a15 15 0 0 1 20 0", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ r("path", { d: "M5 12.859a10 10 0 0 1 14 0", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ r("path", { d: "M8.5 16.429a5 5 0 0 1 7 0", vectorEffect: "non-scaling-stroke" })
    ]
  }
), Sl = p(Nl), Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcademicCap: yi,
  Add: bn,
  Ai: Ei,
  Alert: Ln,
  AlertCircle: kt,
  AlertCircleLine: yn,
  AlignTextCenter: Mn,
  AlignTextJustify: En,
  AlignTextLeft: Rn,
  AlignTextRight: Fn,
  Appearance: Fi,
  Archive: Si,
  ArchiveOpen: Ti,
  ArrowCycle: Ai,
  ArrowDown: bt,
  ArrowLeft: Nn,
  ArrowRight: Sn,
  ArrowUp: m1,
  Ascending: Vn,
  Balance: $i,
  Bank: Pi,
  BarGraph: Di,
  Basket: _i,
  Bell: Tn,
  Bold: Hn,
  BookOpen: Ui,
  Bookmark: An,
  BookmarkFilled: Bn,
  Briefcase: Gi,
  Bucket: qi,
  Building: Yi,
  Bullet: $n,
  Calculator: In,
  Calendar: Pn,
  CalendarArrowDown: Qi,
  CalendarArrowLeft: ea,
  CalendarArrowRight: ra,
  CameraPlus: oa,
  CardPin: ia,
  ChartFunnel: ca,
  ChartHorizontalBars: da,
  ChartLine: ua,
  ChartPie: ga,
  ChartVerticalBars: ma,
  Check: C1,
  CheckCircle: jn,
  CheckCircleLine: va,
  CheckDouble: Dn,
  ChevronDown: v1,
  ChevronLeft: Lt,
  ChevronRight: Ke,
  ChevronUp: yt,
  Chip: xa,
  Circle: Zn,
  Clock: _n,
  ClockBack: ba,
  ClockPlus: ya,
  Cloud: Ea,
  Code: On,
  Coffee: Fa,
  Command: Sa,
  Comment: Un,
  Completed: zn,
  Computer: Ta,
  Contactless: Aa,
  CornerHandle: $a,
  CreditCard: Pa,
  Cross: Le,
  CrossedCircle: Gn,
  Crown: _a,
  CursorClick: Da,
  Delete: Mt,
  Deny: Ua,
  Descending: Wn,
  Desktop: Ga,
  DollarBill: qa,
  DollarReset: Ya,
  DottedCircle: qn,
  Download: Re,
  DropdownDefault: Xn,
  DropdownOpen: Yn,
  Ellipsis: Et,
  EllipsisHorizontal: Rt,
  Envelope: Kn,
  EnvelopeOpen: Qa,
  Equal: Qn,
  EqualApproximately: Jn,
  EqualGreater: eo,
  EqualLess: to,
  Exit: e5,
  ExternalLink: Ft,
  EyeInvisible: ro,
  EyeVisible: no,
  FaceNegative: oo,
  FaceNeutral: so,
  FacePositive: io,
  FaceSuperNegative: ao,
  FaceSuperPositive: co,
  Feed: r5,
  File: o5,
  FileFilled: i5,
  FileSigned: c5,
  Files: d5,
  Filter: lo,
  FitView: fo,
  Flag: u5,
  Flask: g5,
  Folder: uo,
  Folders: m5,
  Globe: v5,
  Graph: x5,
  Greater: ho,
  Group: b5,
  GroupBy: y5,
  Handle: go,
  Handshake: E5,
  HardDrive: F5,
  HeadcountPlanning: S5,
  Heading1: po,
  Heading2: mo,
  Heading3: Co,
  Headset: T5,
  Heart: A5,
  HoldHeart: $5,
  Home: P5,
  Hub: D5,
  Image: vo,
  InProgressTask: wo,
  Inbox: _5,
  Info: U5,
  InfoCircle: xo,
  InfoCircleLine: ko,
  InputField: G5,
  Italic: bo,
  Kanban: Lo,
  Keyboard: q5,
  Laptop: Y5,
  LayersFront: yo,
  Less: Mo,
  Lightbulb: tr,
  Link: Eo,
  LinkRemove: J5,
  List: Ro,
  LockLocked: Fo,
  LockUnlocked: t0,
  LogoAvatar: No,
  LogoEruditai: n0,
  LogoTravelperk: s0,
  Marker: a0,
  Marketplace: l0,
  Masonry: f0,
  Maximize: Nt,
  Megaphone: So,
  Menu: Vo,
  MessageFilled: h0,
  MessageFrown: p0,
  MessageHeart: C0,
  Messages: w0,
  Microphone: St,
  MicrophoneNegative: k0,
  Minimize: Vt,
  Minus: To,
  Mobile: L0,
  Money: rr,
  MoneyBag: E0,
  MonitorDot: F0,
  MonitorSmartphone: S0,
  Moon: T0,
  Mouse: A0,
  MoveDown: Ho,
  MoveTop: $0,
  MoveUp: Ao,
  Multitask: P0,
  New: E1,
  Numbers: Z0,
  Office: O0,
  OlList: Bo,
  Organization: $o,
  PalmTree: z0,
  Paperclip: Tt,
  PartiallyCompleted: W0,
  Password: X0,
  PauseCircle: K0,
  Pencil: Io,
  People: J0,
  Person: Po,
  PersonMinus: tc,
  PersonNegative: jo,
  PersonPlus: nc,
  Phone: sc,
  Pig: ac,
  Pin: lc,
  PixBrazil: fc,
  Placeholder: Do,
  Plane: hc,
  Plus: Zo,
  Present: pc,
  Printer: Cc,
  Proyector: wc,
  PushPin: nr,
  PushPinSolid: bc,
  Question: _o,
  Quote: Ht,
  Reaction: Oo,
  Receipt: yc,
  Record: Ec,
  RemoveFavorite: Fc,
  Replace: Sc,
  Reply: R1,
  Reset: Uo,
  Rocket: Hc,
  Salad: Bc,
  Save: Ic,
  Schedule: jc,
  Search: w1,
  SearchPerson: zo,
  Settings: Zc,
  Share: Go,
  Shield: Oc,
  ShoppingCart: or,
  SignPost: Gc,
  Sleep: qc,
  Sliders: x1,
  SolidPause: Wo,
  SolidPlay: qo,
  SolidStop: At,
  Sort: Yc,
  Sparkles: Qc,
  Spinner: Xo,
  Split: el,
  Star: Yo,
  StarFilled: Ko,
  Strikethrough: Qo,
  Suitcase: rl,
  Swap: ol,
  Table: Jo,
  Tablet: il,
  Tag: cl,
  Target: dl,
  TextSize: es,
  ThumbsDown: sr,
  ThumbsDownFilled: ir,
  ThumbsUp: ar,
  ThumbsUpFilled: cr,
  Timer: ml,
  Underline: ts,
  Upload: rs,
  Upsell: Bt,
  UserProtected: vl,
  Video: ns,
  VideoRecorder: xl,
  VideoRecorderNegative: bl,
  Wallet: yl,
  Warning: os,
  Watch: El,
  WhatsappChat: Fl,
  Wifi: Sl,
  Windows: ss
}, Symbol.toStringTag, { value: "Module" })), Tl = (e, t) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Hl = p(Tl), Al = [
  "append",
  "className",
  "pressed",
  "compact",
  "noTitle",
  "noAutoTooltip",
  "style",
  "variant",
  "loading",
  "emoji"
], lr = p((e, t) => {
  const n = Al.reduce((o, s) => {
    const { [s]: i, ...a } = o;
    return a;
  }, e);
  return /* @__PURE__ */ r(
    fe,
    {
      ...n,
      variant: "ai",
      ref: t,
      iconRotate: e.icon == Hl
    }
  );
});
lr.displayName = "AIButton";
const Ae = Fe({
  base: "text-base text-f1-foreground",
  variants: {
    variant: {
      // -- PUBLIC VARIANTS
      // Heading
      heading: "text-lg font-semibold",
      // Body
      body: "",
      description: "text-f1-foreground-secondary",
      small: "text-sm font-medium text-f1-foreground-secondary",
      inverse: "text-f1-foreground-inverse",
      code: "text-f1-foreground-secondary",
      // Label
      label: "font-medium",
      // -- PRIVATE VARIANTS
      // Heading
      "heading-large": "text-2xl font-semibold",
      // Label
      "label-input": "font-medium text-f1-foreground-secondary",
      // Semantic text
      selected: "font-medium text-f1-foreground-selected",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      positive: "text-f1-foreground-positive",
      info: "text-f1-foreground-info",
      "warning-strong": "font-semibold text-f1-foreground-warning",
      "critical-strong": "font-semibold text-f1-foreground-critical",
      "positive-strong": "font-semibold text-f1-foreground-positive",
      "info-strong": "font-semibold text-f1-foreground-info"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "body",
    align: "left"
  }
}), Bl = {
  "heading-large": "h1",
  heading: "h2",
  body: "p",
  description: "p",
  label: "p",
  "label-input": "label",
  small: "p",
  selected: "p",
  inverse: "p",
  warning: "p",
  critical: "p",
  positive: "p",
  info: "p",
  "warning-strong": "p",
  "critical-strong": "p",
  "positive-strong": "p",
  "info-strong": "p",
  code: "code"
}, h1 = p(
  ({
    content: e,
    variant: t,
    align: n,
    className: o,
    as: s,
    ellipsis: i,
    noEllipsisTooltip: a,
    markdown: d,
    required: l,
    ...u
  }, f) => {
    const g = s ?? Bl[t ?? "body"], m = l ? /* @__PURE__ */ r("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (i !== void 0) {
      const h = typeof i == "number" ? i : 1;
      return m ? $e(
        g,
        {
          ...u,
          className: k(
            Ae({ variant: t, align: n }),
            o,
            "inline-flex gap-0.5"
          ),
          ref: f
        },
        /* @__PURE__ */ r(
          ce,
          {
            lines: h,
            noTooltip: a,
            tag: "span",
            className: "min-w-0",
            markdown: d,
            children: e
          }
        ),
        m
      ) : /* @__PURE__ */ r(
        ce,
        {
          ref: f,
          lines: h,
          noTooltip: a,
          tag: g,
          className: k(Ae({ variant: t, align: n }), o),
          markdown: d,
          ...u,
          children: e
        }
      );
    }
    if (d) {
      const h = is(e);
      return m ? $e(
        g,
        {
          ...u,
          className: k(Ae({ variant: t, align: n }), o),
          ref: f
        },
        /* @__PURE__ */ r("span", { dangerouslySetInnerHTML: { __html: h } }),
        m
      ) : $e(g, {
        ...u,
        className: k(Ae({ variant: t, align: n }), o),
        ref: f,
        dangerouslySetInnerHTML: { __html: h }
      });
    }
    return $e(
      g,
      {
        ...u,
        className: k(Ae({ variant: t, align: n }), o),
        ref: f
      },
      e,
      m
    );
  }
);
h1.displayName = "Text";
const dr = {
  background: {
    transparent: "bg-transparent",
    primary: "bg-f1-background",
    secondary: "bg-f1-background-secondary",
    tertiary: "bg-f1-background-tertiary",
    inverse: "bg-f1-background-inverse",
    "inverse-secondary": "bg-f1-background-inverse-secondary",
    bold: "bg-f1-background-bold",
    accent: "bg-f1-background-accent",
    "accent-bold": "bg-f1-background-accent-bold",
    promote: "bg-f1-background-promote",
    critical: "bg-f1-background-critical",
    "critical-bold": "bg-f1-background-critical-bold",
    info: "bg-f1-background-info",
    "info-bold": "bg-f1-background-info-bold",
    warning: "bg-f1-background-warning",
    "warning-bold": "bg-f1-background-warning-bold",
    positive: "bg-f1-background-positive",
    "positive-bold": "bg-f1-background-positive-bold",
    selected: "bg-f1-background-selected",
    "selected-secondary": "bg-f1-background-selected-secondary",
    "selected-bold": "bg-f1-background-selected-bold",
    overlay: "bg-f1-background-overlay"
  }
}, fr = {
  // -- Color --
  borderColor: {
    default: "border-f1-border",
    secondary: "border-f1-border-secondary",
    bold: "border-f1-border-bold",
    selected: "border-f1-border-selected",
    "selected-bold": "border-f1-border-selected-bold",
    critical: "border-f1-border-critical",
    "critical-bold": "border-f1-border-critical-bold",
    warning: "border-f1-border-warning",
    "warning-bold": "border-f1-border-warning-bold",
    info: "border-f1-border-info",
    "info-bold": "border-f1-border-info-bold",
    positive: "border-f1-border-positive",
    "positive-bold": "border-f1-border-positive-bold",
    promote: "border-f1-border-promote"
  },
  // -- Width (all sides) --
  border: {
    none: "border-0",
    default: "border border-solid",
    thick: "border-2 border-solid"
  },
  // -- Width per side (includes reset so only the specified side shows) --
  borderTop: {
    none: "border-t-0",
    default: "border-t border-solid",
    thick: "border-t-2 border-solid"
  },
  borderBottom: {
    none: "border-b-0",
    default: "border-b border-solid",
    thick: "border-b-2 border-solid"
  },
  borderLeft: {
    none: "border-l-0",
    default: "border-l border-solid",
    thick: "border-l-2 border-solid"
  },
  borderRight: {
    none: "border-r-0",
    default: "border-r border-solid",
    thick: "border-r-2 border-solid"
  },
  // -- Radius (all corners) --
  borderRadius: {
    none: "rounded-none",
    "2xs": "rounded-2xs",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full"
  },
  // -- Radius per corner --
  borderRadiusTopLeft: {
    none: "rounded-tl-none",
    "2xs": "rounded-tl-2xs",
    xs: "rounded-tl-xs",
    sm: "rounded-tl-sm",
    md: "rounded-tl-md",
    lg: "rounded-tl-lg",
    xl: "rounded-tl-xl",
    "2xl": "rounded-tl-2xl",
    "3xl": "rounded-tl-3xl",
    full: "rounded-tl-full"
  },
  borderRadiusTopRight: {
    none: "rounded-tr-none",
    "2xs": "rounded-tr-2xs",
    xs: "rounded-tr-xs",
    sm: "rounded-tr-sm",
    md: "rounded-tr-md",
    lg: "rounded-tr-lg",
    xl: "rounded-tr-xl",
    "2xl": "rounded-tr-2xl",
    "3xl": "rounded-tr-3xl",
    full: "rounded-tr-full"
  },
  borderRadiusBottomLeft: {
    none: "rounded-bl-none",
    "2xs": "rounded-bl-2xs",
    xs: "rounded-bl-xs",
    sm: "rounded-bl-sm",
    md: "rounded-bl-md",
    lg: "rounded-bl-lg",
    xl: "rounded-bl-xl",
    "2xl": "rounded-bl-2xl",
    "3xl": "rounded-bl-3xl",
    full: "rounded-bl-full"
  },
  borderRadiusBottomRight: {
    none: "rounded-br-none",
    "2xs": "rounded-br-2xs",
    xs: "rounded-br-xs",
    sm: "rounded-br-sm",
    md: "rounded-br-md",
    lg: "rounded-br-lg",
    xl: "rounded-br-xl",
    "2xl": "rounded-br-2xl",
    "3xl": "rounded-br-3xl",
    full: "rounded-br-full"
  },
  // -- Style --
  borderStyle: {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
    double: "border-double",
    none: "border-none"
  }
}, $l = {}, Il = {
  // Special
  auto: "w-auto",
  full: "w-full",
  screen: "w-screen",
  min: "w-min",
  max: "w-max",
  fit: "w-fit",
  // Numeric scale
  0: "w-0",
  "0.5": "w-0.5",
  1: "w-1",
  "1.5": "w-1.5",
  2: "w-2",
  "2.5": "w-2.5",
  3: "w-3",
  "3.5": "w-3.5",
  4: "w-4",
  5: "w-5",
  6: "w-6",
  7: "w-7",
  8: "w-8",
  9: "w-9",
  10: "w-10",
  11: "w-11",
  12: "w-12",
  14: "w-14",
  16: "w-16",
  18: "w-18",
  20: "w-20",
  24: "w-24",
  28: "w-28",
  32: "w-32",
  36: "w-36",
  40: "w-40",
  44: "w-44",
  48: "w-48",
  52: "w-52",
  56: "w-56",
  60: "w-60",
  64: "w-64",
  72: "w-72",
  80: "w-80",
  96: "w-96",
  // Fractions
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "2/3": "w-2/3",
  "1/4": "w-1/4",
  "2/4": "w-2/4",
  "3/4": "w-3/4",
  "1/5": "w-1/5",
  "2/5": "w-2/5",
  "3/5": "w-3/5",
  "4/5": "w-4/5",
  "1/6": "w-1/6",
  "5/6": "w-5/6"
}, Pl = {
  auto: "h-auto",
  full: "h-full",
  screen: "h-screen",
  min: "h-min",
  max: "h-max",
  fit: "h-fit",
  0: "h-0",
  "0.5": "h-0.5",
  1: "h-1",
  "1.5": "h-1.5",
  2: "h-2",
  "2.5": "h-2.5",
  3: "h-3",
  "3.5": "h-3.5",
  4: "h-4",
  5: "h-5",
  6: "h-6",
  7: "h-7",
  8: "h-8",
  9: "h-9",
  10: "h-10",
  11: "h-11",
  12: "h-12",
  14: "h-14",
  16: "h-16",
  18: "h-18",
  20: "h-20",
  24: "h-24",
  28: "h-28",
  32: "h-32",
  36: "h-36",
  40: "h-40",
  44: "h-44",
  48: "h-48",
  52: "h-52",
  56: "h-56",
  60: "h-60",
  64: "h-64",
  72: "h-72",
  80: "h-80",
  96: "h-96",
  "1/2": "h-1/2",
  "1/3": "h-1/3",
  "2/3": "h-2/3",
  "1/4": "h-1/4",
  "2/4": "h-2/4",
  "3/4": "h-3/4",
  "1/5": "h-1/5",
  "2/5": "h-2/5",
  "3/5": "h-3/5",
  "4/5": "h-4/5",
  "1/6": "h-1/6",
  "5/6": "h-5/6"
}, jl = {
  auto: "min-w-0",
  full: "min-w-full",
  screen: "min-w-screen",
  min: "min-w-min",
  max: "min-w-max",
  fit: "min-w-fit",
  0: "min-w-0",
  "0.5": "min-w-0.5",
  1: "min-w-1",
  "1.5": "min-w-1.5",
  2: "min-w-2",
  "2.5": "min-w-2.5",
  3: "min-w-3",
  "3.5": "min-w-3.5",
  4: "min-w-4",
  5: "min-w-5",
  6: "min-w-6",
  7: "min-w-7",
  8: "min-w-8",
  9: "min-w-9",
  10: "min-w-10",
  11: "min-w-11",
  12: "min-w-12",
  14: "min-w-14",
  16: "min-w-16",
  18: "min-w-18",
  20: "min-w-20",
  24: "min-w-24",
  28: "min-w-28",
  32: "min-w-32",
  36: "min-w-36",
  40: "min-w-40",
  44: "min-w-44",
  48: "min-w-48",
  52: "min-w-52",
  56: "min-w-56",
  60: "min-w-60",
  64: "min-w-64",
  72: "min-w-72",
  80: "min-w-80",
  96: "min-w-96",
  "1/2": "min-w-1/2",
  "1/3": "min-w-1/3",
  "2/3": "min-w-2/3",
  "1/4": "min-w-1/4",
  "2/4": "min-w-2/4",
  "3/4": "min-w-3/4",
  "1/5": "min-w-1/5",
  "2/5": "min-w-2/5",
  "3/5": "min-w-3/5",
  "4/5": "min-w-4/5",
  "1/6": "min-w-1/6",
  "5/6": "min-w-5/6"
}, Dl = {
  auto: "min-h-0",
  full: "min-h-full",
  screen: "min-h-screen",
  min: "min-h-min",
  max: "min-h-max",
  fit: "min-h-fit",
  0: "min-h-0",
  "0.5": "min-h-0.5",
  1: "min-h-1",
  "1.5": "min-h-1.5",
  2: "min-h-2",
  "2.5": "min-h-2.5",
  3: "min-h-3",
  "3.5": "min-h-3.5",
  4: "min-h-4",
  5: "min-h-5",
  6: "min-h-6",
  7: "min-h-7",
  8: "min-h-8",
  9: "min-h-9",
  10: "min-h-10",
  11: "min-h-11",
  12: "min-h-12",
  14: "min-h-14",
  16: "min-h-16",
  18: "min-h-18",
  20: "min-h-20",
  24: "min-h-24",
  28: "min-h-28",
  32: "min-h-32",
  36: "min-h-36",
  40: "min-h-40",
  44: "min-h-44",
  48: "min-h-48",
  52: "min-h-52",
  56: "min-h-56",
  60: "min-h-60",
  64: "min-h-64",
  72: "min-h-72",
  80: "min-h-80",
  96: "min-h-96",
  "1/2": "min-h-1/2",
  "1/3": "min-h-1/3",
  "2/3": "min-h-2/3",
  "1/4": "min-h-1/4",
  "2/4": "min-h-2/4",
  "3/4": "min-h-3/4",
  "1/5": "min-h-1/5",
  "2/5": "min-h-2/5",
  "3/5": "min-h-3/5",
  "4/5": "min-h-4/5",
  "1/6": "min-h-1/6",
  "5/6": "min-h-5/6"
}, Zl = {
  auto: "max-w-none",
  full: "max-w-full",
  screen: "max-w-screen",
  min: "max-w-min",
  max: "max-w-max",
  fit: "max-w-fit",
  0: "max-w-0",
  "0.5": "max-w-0.5",
  1: "max-w-1",
  "1.5": "max-w-1.5",
  2: "max-w-2",
  "2.5": "max-w-2.5",
  3: "max-w-3",
  "3.5": "max-w-3.5",
  4: "max-w-4",
  5: "max-w-5",
  6: "max-w-6",
  7: "max-w-7",
  8: "max-w-8",
  9: "max-w-9",
  10: "max-w-10",
  11: "max-w-11",
  12: "max-w-12",
  14: "max-w-14",
  16: "max-w-16",
  18: "max-w-18",
  20: "max-w-20",
  24: "max-w-24",
  28: "max-w-28",
  32: "max-w-32",
  36: "max-w-36",
  40: "max-w-40",
  44: "max-w-44",
  48: "max-w-48",
  52: "max-w-52",
  56: "max-w-56",
  60: "max-w-60",
  64: "max-w-64",
  72: "max-w-72",
  80: "max-w-80",
  96: "max-w-96",
  "1/2": "max-w-1/2",
  "1/3": "max-w-1/3",
  "2/3": "max-w-2/3",
  "1/4": "max-w-1/4",
  "2/4": "max-w-2/4",
  "3/4": "max-w-3/4",
  "1/5": "max-w-1/5",
  "2/5": "max-w-2/5",
  "3/5": "max-w-3/5",
  "4/5": "max-w-4/5",
  "1/6": "max-w-1/6",
  "5/6": "max-w-5/6"
}, _l = {
  auto: "max-h-none",
  full: "max-h-full",
  screen: "max-h-screen",
  min: "max-h-min",
  max: "max-h-max",
  fit: "max-h-fit",
  0: "max-h-0",
  "0.5": "max-h-0.5",
  1: "max-h-1",
  "1.5": "max-h-1.5",
  2: "max-h-2",
  "2.5": "max-h-2.5",
  3: "max-h-3",
  "3.5": "max-h-3.5",
  4: "max-h-4",
  5: "max-h-5",
  6: "max-h-6",
  7: "max-h-7",
  8: "max-h-8",
  9: "max-h-9",
  10: "max-h-10",
  11: "max-h-11",
  12: "max-h-12",
  14: "max-h-14",
  16: "max-h-16",
  18: "max-h-18",
  20: "max-h-20",
  24: "max-h-24",
  28: "max-h-28",
  32: "max-h-32",
  36: "max-h-36",
  40: "max-h-40",
  44: "max-h-44",
  48: "max-h-48",
  52: "max-h-52",
  56: "max-h-56",
  60: "max-h-60",
  64: "max-h-64",
  72: "max-h-72",
  80: "max-h-80",
  96: "max-h-96",
  "1/2": "max-h-1/2",
  "1/3": "max-h-1/3",
  "2/3": "max-h-2/3",
  "1/4": "max-h-1/4",
  "2/4": "max-h-2/4",
  "3/4": "max-h-3/4",
  "1/5": "max-h-1/5",
  "2/5": "max-h-2/5",
  "3/5": "max-h-3/5",
  "4/5": "max-h-4/5",
  "1/6": "max-h-1/6",
  "5/6": "max-h-5/6"
}, ur = {
  width: Il,
  height: Pl,
  minWidth: jl,
  minHeight: Dl,
  maxWidth: Zl,
  maxHeight: _l
}, hr = {
  display: {
    block: "block",
    flex: "flex",
    inline: "inline",
    "inline-flex": "inline-flex",
    grid: "grid",
    none: "hidden"
  },
  position: {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky"
  }
}, gr = {
  divider: {
    x: "divide-x divide-y-0 divide-solid",
    y: "divide-y divide-x-0 divide-solid"
  },
  dividerColor: {
    default: "divide-f1-border",
    secondary: "divide-f1-border-secondary",
    bold: "divide-f1-border-bold",
    selected: "divide-f1-border-selected",
    "selected-bold": "divide-f1-border-selected-bold",
    critical: "divide-f1-border-critical",
    "critical-bold": "divide-f1-border-critical-bold",
    warning: "divide-f1-border-warning",
    "warning-bold": "divide-f1-border-warning-bold",
    info: "divide-f1-border-info",
    "info-bold": "divide-f1-border-info-bold",
    positive: "divide-f1-border-positive",
    "positive-bold": "divide-f1-border-positive-bold",
    promote: "divide-f1-border-promote"
  }
}, pr = {
  gap: {
    none: "gap-0",
    xs: "gap-0.5",
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3",
    xl: "gap-4",
    "2xl": "gap-6",
    "3xl": "gap-8",
    "4xl": "gap-10",
    "5xl": "gap-12"
  },
  alignItems: {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline"
  },
  justifyContent: {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
    stretch: "justify-stretch"
  },
  flexDirection: {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse"
  },
  flexWrap: {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse"
  },
  grow: {
    true: "grow",
    false: "grow-0"
  },
  shrink: {
    true: "shrink",
    false: "shrink-0"
  }
}, Ol = {}, mr = {
  columns: {
    none: "grid-cols-none",
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12"
  },
  rows: {
    none: "grid-rows-none",
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3",
    4: "grid-rows-4",
    5: "grid-rows-5",
    6: "grid-rows-6"
  },
  colSpan: {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12",
    full: "col-span-full"
  },
  colStart: {
    auto: "col-start-auto",
    1: "col-start-1",
    2: "col-start-2",
    3: "col-start-3",
    4: "col-start-4",
    5: "col-start-5",
    6: "col-start-6",
    7: "col-start-7",
    8: "col-start-8",
    9: "col-start-9",
    10: "col-start-10",
    11: "col-start-11",
    12: "col-start-12",
    13: "col-start-13"
  },
  rowSpan: {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
    5: "row-span-5",
    6: "row-span-6",
    full: "row-span-full"
  }
}, Cr = {
  top: {
    none: "top-0",
    xs: "top-1",
    sm: "top-2",
    md: "top-3",
    lg: "top-4",
    xl: "top-6",
    "2xl": "top-8",
    "3xl": "top-10",
    "4xl": "top-12",
    "5xl": "top-16"
  },
  right: {
    none: "right-0",
    xs: "right-1",
    sm: "right-2",
    md: "right-3",
    lg: "right-4",
    xl: "right-6",
    "2xl": "right-8",
    "3xl": "right-10",
    "4xl": "right-12",
    "5xl": "right-16"
  },
  bottom: {
    none: "bottom-0",
    xs: "bottom-1",
    sm: "bottom-2",
    md: "bottom-3",
    lg: "bottom-4",
    xl: "bottom-6",
    "2xl": "bottom-8",
    "3xl": "bottom-10",
    "4xl": "bottom-12",
    "5xl": "bottom-16"
  },
  left: {
    none: "left-0",
    xs: "left-1",
    sm: "left-2",
    md: "left-3",
    lg: "left-4",
    xl: "left-6",
    "2xl": "left-8",
    "3xl": "left-10",
    "4xl": "left-12",
    "5xl": "left-16"
  }
}, vr = {
  margin: {
    none: "m-0",
    xs: "m-1",
    sm: "m-2",
    md: "m-3",
    lg: "m-4",
    xl: "m-6",
    "2xl": "m-8",
    "3xl": "m-10",
    "4xl": "m-12",
    "5xl": "m-16",
    auto: "m-auto"
  },
  marginX: {
    none: "mx-0",
    xs: "mx-1",
    sm: "mx-2",
    md: "mx-3",
    lg: "mx-4",
    xl: "mx-6",
    "2xl": "mx-8",
    "3xl": "mx-10",
    "4xl": "mx-12",
    "5xl": "mx-16",
    auto: "mx-auto"
  },
  marginY: {
    none: "my-0",
    xs: "my-1",
    sm: "my-2",
    md: "my-3",
    lg: "my-4",
    xl: "my-6",
    "2xl": "my-8",
    "3xl": "my-10",
    "4xl": "my-12",
    "5xl": "my-16",
    auto: "my-auto"
  },
  marginTop: {
    none: "mt-0",
    xs: "mt-1",
    sm: "mt-2",
    md: "mt-3",
    lg: "mt-4",
    xl: "mt-6",
    "2xl": "mt-8",
    "3xl": "mt-10",
    "4xl": "mt-12",
    "5xl": "mt-16",
    auto: "mt-auto"
  },
  marginBottom: {
    none: "mb-0",
    xs: "mb-1",
    sm: "mb-2",
    md: "mb-3",
    lg: "mb-4",
    xl: "mb-6",
    "2xl": "mb-8",
    "3xl": "mb-10",
    "4xl": "mb-12",
    "5xl": "mb-16",
    auto: "mb-auto"
  },
  marginLeft: {
    none: "ml-0",
    xs: "ml-1",
    sm: "ml-2",
    md: "ml-3",
    lg: "ml-4",
    xl: "ml-6",
    "2xl": "ml-8",
    "3xl": "ml-10",
    "4xl": "ml-12",
    "5xl": "ml-16",
    auto: "ml-auto"
  },
  marginRight: {
    none: "mr-0",
    xs: "mr-1",
    sm: "mr-2",
    md: "mr-3",
    lg: "mr-4",
    xl: "mr-6",
    "2xl": "mr-8",
    "3xl": "mr-10",
    "4xl": "mr-12",
    "5xl": "mr-16",
    auto: "mr-auto"
  }
}, Ul = {}, zl = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, wr = {
  overflow: zl,
  overflowX: {
    visible: "overflow-x-visible",
    hidden: "overflow-x-hidden",
    auto: "overflow-x-auto",
    scroll: "overflow-x-scroll"
  },
  overflowY: {
    visible: "overflow-y-visible",
    hidden: "overflow-y-hidden",
    auto: "overflow-y-auto",
    scroll: "overflow-y-scroll"
  }
}, Gl = {}, xr = {
  padding: {
    none: "p-0",
    xs: "p-1",
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
    xl: "p-6",
    "2xl": "p-8",
    "3xl": "p-10",
    "4xl": "p-12",
    "5xl": "p-16"
  },
  paddingX: {
    none: "px-0",
    xs: "px-1",
    sm: "px-2",
    md: "px-3",
    lg: "px-4",
    xl: "px-6",
    "2xl": "px-8",
    "3xl": "px-10",
    "4xl": "px-12",
    "5xl": "px-16"
  },
  paddingY: {
    none: "py-0",
    xs: "py-1",
    sm: "py-2",
    md: "py-3",
    lg: "py-4",
    xl: "py-6",
    "2xl": "py-8",
    "3xl": "py-10",
    "4xl": "py-12",
    "5xl": "py-16"
  },
  paddingTop: {
    none: "pt-0",
    xs: "pt-1",
    sm: "pt-2",
    md: "pt-3",
    lg: "pt-4",
    xl: "pt-6",
    "2xl": "pt-8",
    "3xl": "pt-10",
    "4xl": "pt-12",
    "5xl": "pt-16"
  },
  paddingBottom: {
    none: "pb-0",
    xs: "pb-1",
    sm: "pb-2",
    md: "pb-3",
    lg: "pb-4",
    xl: "pb-6",
    "2xl": "pb-8",
    "3xl": "pb-10",
    "4xl": "pb-12",
    "5xl": "pb-16"
  },
  paddingLeft: {
    none: "pl-0",
    xs: "pl-1",
    sm: "pl-2",
    md: "pl-3",
    lg: "pl-4",
    xl: "pl-6",
    "2xl": "pl-8",
    "3xl": "pl-10",
    "4xl": "pl-12",
    "5xl": "pl-16"
  },
  paddingRight: {
    none: "pr-0",
    xs: "pr-1",
    sm: "pr-2",
    md: "pr-3",
    lg: "pr-4",
    xl: "pr-6",
    "2xl": "pr-8",
    "3xl": "pr-10",
    "4xl": "pr-12",
    "5xl": "pr-16"
  }
}, Wl = {}, ql = {
  boxShadow: {
    none: "shadow-none",
    sm: "shadow",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl"
  }
}, kr = {
  zIndex: {
    auto: "z-auto",
    0: "z-0",
    10: "z-10",
    20: "z-20",
    30: "z-30",
    40: "z-40",
    50: "z-50"
  }
}, Xl = {
  ...hr,
  ...Cr,
  ...xr,
  ...vr,
  ...pr,
  ...mr,
  ...ur,
  ...dr,
  ...fr,
  ...wr,
  ...gr,
  ...kr
};
function Yl(e, t) {
  return t.split(" ").map((n) => `${e}:${n}`).join(" ");
}
function Kl(e, t) {
  const n = [];
  for (const [o, s] of Object.entries(t)) {
    if (s == null) continue;
    const i = Xl[o];
    if (!i) continue;
    const a = i[String(s)];
    a && n.push(Yl(e, a));
  }
  return n.join(" ");
}
const Ql = Fe({
  base: "",
  variants: {
    ...hr,
    ...Cr,
    ...xr,
    ...vr,
    ...pr,
    ...mr,
    ...ur,
    ...dr,
    ...fr,
    ...wr,
    ...gr,
    ...ql,
    ...kr
  },
  defaultVariants: {
    ...Wl,
    ...Ul,
    ...Ol,
    ...$l,
    ...Gl
  }
}), Jl = ["sm", "md", "lg", "xl"], br = p(
  ({
    // Display & Position
    display: e,
    position: t,
    top: n,
    right: o,
    bottom: s,
    left: i,
    zIndex: a,
    // Padding
    padding: d,
    paddingX: l,
    paddingY: u,
    paddingTop: f,
    paddingBottom: g,
    paddingLeft: m,
    paddingRight: h,
    // Margin
    margin: C,
    marginX: v,
    marginY: w,
    marginTop: x,
    marginBottom: N,
    marginLeft: T,
    marginRight: E,
    // Gap
    gap: y,
    // Grid
    columns: L,
    rows: H,
    colSpan: b,
    colStart: A,
    rowSpan: V,
    // Dimensions
    width: R,
    height: $,
    minWidth: _,
    minHeight: z,
    maxWidth: G,
    maxHeight: re,
    // Background
    background: K,
    // Border
    borderColor: O,
    border: Z,
    borderTop: D,
    borderBottom: Q,
    borderLeft: W,
    borderRight: he,
    borderRadius: ge,
    borderRadiusTopLeft: ie,
    borderRadiusTopRight: ne,
    borderRadiusBottomLeft: se,
    borderRadiusBottomRight: de,
    borderStyle: M,
    // Overflow
    overflow: S,
    overflowX: F,
    overflowY: j,
    // Divider
    divider: B,
    dividerColor: U,
    boxShadow: ae,
    // Flex
    alignItems: J,
    justifyContent: we,
    flexDirection: Ee,
    flexWrap: Te,
    grow: Ce,
    shrink: Je,
    // Responsive breakpoint overrides
    sm: e1,
    md: t1,
    lg: je,
    xl: r1,
    ...n1
  }, Se) => {
    const He = D && D !== "none" || Q && Q !== "none" || W && W !== "none" || he && he !== "none", De = Z && Z !== "none" || He, o1 = { sm: e1, md: t1, lg: je, xl: r1 }, s1 = Jl.map((Ze) => {
      const _e = o1[Ze];
      return _e ? Kl(Ze, _e) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ r(
      "div",
      {
        ref: Se,
        className: k(
          He && "border-0",
          Ql({
            display: e,
            position: t,
            top: n,
            right: o,
            bottom: s,
            left: i,
            zIndex: a,
            padding: d,
            paddingX: l,
            paddingY: u,
            paddingTop: f,
            paddingBottom: g,
            paddingLeft: m,
            paddingRight: h,
            margin: C,
            marginX: v,
            marginY: w,
            marginTop: x,
            marginBottom: N,
            marginLeft: T,
            marginRight: E,
            gap: y,
            columns: L,
            rows: H,
            colSpan: b,
            colStart: A,
            rowSpan: V,
            width: R,
            height: $,
            minWidth: _,
            minHeight: z,
            maxWidth: G,
            maxHeight: re,
            background: K,
            borderColor: O,
            border: Z,
            borderTop: D,
            borderBottom: Q,
            borderLeft: W,
            borderRight: he,
            borderRadius: ge,
            borderRadiusTopLeft: ie,
            borderRadiusTopRight: ne,
            borderRadiusBottomLeft: se,
            borderRadiusBottomRight: de,
            borderStyle: M,
            overflow: S,
            overflowX: F,
            overflowY: j,
            divider: B,
            dividerColor: U,
            alignItems: J,
            justifyContent: we,
            flexDirection: Ee,
            flexWrap: Te,
            grow: Ce,
            shrink: Je,
            boxShadow: ae
          }),
          s1,
          De && !O && "border-f1-border",
          B && !U && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...n1
      }
    );
  }
);
br.displayName = "F0Box";
const a1 = as(
  {
    name: "F0Box",
    type: "layout"
  },
  br
), e2 = Fe({
  // Gap is a fixed `gap-md` (8px) for every button group — a constant rhythm
  // across surfaces, not a per-call knob.
  base: "flex gap-md",
  variants: {
    // Action groups are never left-aligned (a left-positioned primary is an
    // anti-pattern), so only `end` (default, right-aligned) and `between`
    // (secondary ‖ primary) are exposed.
    align: {
      end: "justify-end",
      between: "justify-between"
    },
    /**
     * Orientation + responsive stacking, encoded as ONE axis:
     * - `none`: always a horizontal row.
     * - `sm` / `md`: stack as a column below the named *viewport* breakpoint and
     *   become a row at/above it (matches Card footer `sm`, ResourceHeader `md`).
     * - `container-md`: stack below the *container* `@md` breakpoint (28rem / 448px);
     *   requires an ancestor with `@container` (matches the Card oneLiner).
     */
    stack: {
      none: "flex-row items-center",
      sm: "flex-col items-stretch sm:flex-row sm:items-center",
      md: "flex-col items-stretch md:flex-row md:items-center",
      "container-md": "flex-col items-stretch @md:flex-row @md:items-center"
    },
    /**
     * When stacked, stretch every direct child to full width; revert to auto
     * width once the row layout kicks in. No-op when `stack="none"`.
     */
    fullWidthOnStack: {
      true: "",
      false: ""
    },
    /**
     * Reverse the *stacked* (column) order so the LAST child renders on top,
     * then restore source order once the row layout kicks in. Use it to promote
     * the primary (passed last) above the secondaries when the group stacks.
     * Note: this flips the WHOLE column, so secondary buttons also reverse.
     * No-op when `stack="none"`. Resolved via compound variants below.
     */
    reverseOnStack: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    // full-width only while stacked, released at the row breakpoint
    {
      stack: "sm",
      fullWidthOnStack: !0,
      class: "[&>*]:w-full sm:[&>*]:w-auto"
    },
    {
      stack: "md",
      fullWidthOnStack: !0,
      class: "[&>*]:w-full md:[&>*]:w-auto"
    },
    {
      stack: "container-md",
      fullWidthOnStack: !0,
      class: "[&>*]:w-full @md:[&>*]:w-auto"
    },
    // reverse only the stacked (column) part; `flex-col-reverse` wins over the
    // stack variant's `flex-col` via tailwind-merge, leaving the row class intact
    { stack: "sm", reverseOnStack: !0, class: "flex-col-reverse" },
    { stack: "md", reverseOnStack: !0, class: "flex-col-reverse" },
    { stack: "container-md", reverseOnStack: !0, class: "flex-col-reverse" }
  ],
  defaultVariants: {
    align: "end",
    stack: "none",
    fullWidthOnStack: !1,
    reverseOnStack: !1
  }
}), c1 = { sm: 640, md: 768, "container-md": 448 }, t2 = 8, g1 = (e) => "type" in e && e.type === "separator", qe = (e) => "type" in e && e.type === "split", r2 = (e) => !("type" in e), Xe = (e, t, n) => /* @__PURE__ */ r(
  pe,
  {
    label: e.label,
    icon: e.icon,
    iconPosition: e.iconPosition,
    variant: e.critical ? "critical" : n,
    size: t,
    disabled: e.disabled,
    loading: e.loading,
    hideLabel: e.hideLabel,
    tooltip: e.tooltip,
    ...e.href != null ? { href: e.href, target: e.target } : { onClick: e.onClick }
  },
  e.id
), F1 = (e, t, n) => {
  const { id: o, type: s, ...i } = e;
  return /* @__PURE__ */ r(
    fs,
    {
      ...i,
      size: t,
      variant: n
    },
    o
  );
}, Lr = (e, t) => /* @__PURE__ */ r(
  pe,
  {
    label: e.label,
    variant: "outline",
    size: t,
    disabled: e.disabled,
    href: e.href,
    target: e.target
  },
  "secondary-link"
), yr = (e, t) => {
  const n = e.variant ?? "default";
  return qe(e) ? F1(e, t, n) : Xe(e, t, n);
};
function Z1({
  primaryAction: e,
  secondaryActions: t,
  otherActions: n = [],
  size: o = "md",
  align: s = "end",
  stack: i = "none",
  fullWidthOnStack: a = !1,
  reverseOnStack: d = !1,
  canOverflow: l = !0,
  className: u
}) {
  const f = I(null), { width: g = 0 } = cs({
    ref: f,
    box: "border-box"
  }), m = i === "sm" || i === "md" ? c1[i] : c1.md, h = $t(`(min-width: ${m}px)`, {
    initializeWithValue: !1
  }), C = i === "none" ? !0 : i === "container-md" ? g >= c1["container-md"] : h, v = typeof o == "string" ? o : o.base, w = typeof o == "string" ? o : o.md, x = C ? w : v, N = Array.isArray(
    t
  ) ? t : [], T = t != null && !Array.isArray(t) ? t : void 0, E = {
    primaryAction: e,
    secondaryItems: N,
    secondaryLink: T,
    otherActions: n,
    size: x,
    align: s,
    canOverflow: l
  };
  return /* @__PURE__ */ r(
    "div",
    {
      ref: f,
      role: "group",
      className: k(
        C ? (
          // Keep the pinned trailing items (splits, divider, primary) at their
          // natural width; only the first child — the flex-1 cluster — shrinks,
          // so the title truncates against it rather than squeezing the buttons.
          "flex w-full items-center gap-md [&>*:not(:first-child)]:shrink-0"
        ) : e2({
          align: s,
          stack: i,
          fullWidthOnStack: a,
          reverseOnStack: d
        }),
        u
      ),
      children: C ? /* @__PURE__ */ r(o2, { ...E }, "row") : /* @__PURE__ */ r(n2, { ...E }, "stacked")
    }
  );
}
function n2({
  primaryAction: e,
  secondaryItems: t,
  secondaryLink: n,
  otherActions: o,
  size: s
}) {
  const i = t.filter(
    (a) => !g1(a)
  ).map(
    (a) => qe(a) ? F1(a, s, "outline") : Xe(a, s, "outline")
  );
  return /* @__PURE__ */ c(xe, { children: [
    o.length > 0 && /* @__PURE__ */ r(ds, { items: o }),
    i,
    n && Lr(n, s),
    e && yr(e, s)
  ] });
}
function o2({
  primaryAction: e,
  secondaryItems: t,
  secondaryLink: n,
  otherActions: o,
  size: s,
  align: i,
  canOverflow: a
}) {
  const d = ee(
    () => t.filter(r2),
    [t]
  ), {
    containerRef: l,
    measurementContainerRef: u,
    customOverflowIndicatorRef: f,
    visibleItems: g,
    overflowItems: m,
    isInitialized: h
  } = ls(d, t2);
  X(() => {
    u.current?.setAttribute("inert", "");
  }, [u]);
  const C = a && h ? g : d, v = a ? h ? m : [] : [], w = new Set(C.map((b) => b.id)), x = e ? yr(e, s) : null, N = t.filter(qe), T = t[t.length - 1], E = T != null && g1(T) && (N.length > 0 || x != null), y = [];
  t.forEach((b, A) => {
    if (!qe(b)) {
      if (g1(b)) {
        y.push({ kind: "sep", key: `sep-${A}` });
        return;
      }
      w.has(b.id) && y.push({
        kind: "node",
        node: Xe(b, s, "outline")
      });
    }
  });
  const L = y.filter(
    (b, A) => b.kind === "node" || y[A - 1]?.kind === "node" && y[A + 1]?.kind === "node"
  ), H = [
    ...v.map(
      (b) => ({
        label: b.label,
        icon: b.icon,
        onClick: b.onClick,
        href: b.href,
        critical: b.critical
      })
    ),
    ...v.length > 0 && o.length > 0 ? [{ type: "separator" }] : [],
    ...o
  ];
  return /* @__PURE__ */ c(xe, { children: [
    /* @__PURE__ */ c(
      "div",
      {
        ref: l,
        className: k(
          // `[&>*]:shrink-0` keeps each rendered secondary, separator, link and
          // the "⋯" trigger at its natural width: the row overflows by shedding
          // into the menu, never by squeezing a button to nothing.
          "relative flex min-w-0 flex-1 items-center gap-md [&>*]:shrink-0",
          i === "end" && "justify-end"
        ),
        children: [
          a && /* @__PURE__ */ r(
            "div",
            {
              ref: u,
              "aria-hidden": "true",
              className: "pointer-events-none invisible absolute left-0 top-0 flex items-center gap-md whitespace-nowrap",
              children: d.map(
                (b) => Xe(b, s, "outline")
              )
            }
          ),
          H.length > 0 && /* @__PURE__ */ r("div", { ref: f, children: /* @__PURE__ */ r(Qe, { items: H, icon: Et, size: s }) }),
          L.map(
            (b) => b.kind === "sep" ? /* @__PURE__ */ r(_1, {}, b.key) : b.node
          ),
          n && Lr(n, s)
        ]
      }
    ),
    N.map(
      (b) => F1(b, s, "outline")
    ),
    E && /* @__PURE__ */ r(_1, {}),
    x
  ] });
}
function _1() {
  return /* @__PURE__ */ r(
    "div",
    {
      role: "separator",
      "aria-orientation": "vertical",
      className: "h-4 w-px self-center bg-f1-border-secondary"
    }
  );
}
const s2 = {
  sm: "flex flex-col @xs:flex-row @xs:items-start @xs:justify-between @xs:gap-4",
  md: "flex flex-col @md:flex-row @md:items-start @md:justify-between @md:gap-4",
  lg: "flex flex-col @lg:flex-row @lg:items-start @lg:justify-between @lg:gap-4",
  never: "flex flex-row items-start justify-between gap-4"
}, i2 = {
  sm: "@xs:self-center",
  md: "@md:self-center",
  lg: "@lg:self-center",
  never: "self-center"
}, a2 = {
  sm: "@xs:flex-1",
  md: "@md:flex-1",
  lg: "@lg:flex-1",
  never: "flex-1"
}, c2 = {
  sm: "@xs:pt-1",
  md: "@md:pt-1",
  lg: "@lg:pt-1",
  never: "pt-1"
}, l2 = {
  sm: "@xs:min-h-10",
  md: "@md:min-h-10",
  lg: "@lg:min-h-10",
  never: "min-h-10"
}, d2 = {
  sm: "hidden @xs:flex",
  md: "hidden @md:flex",
  lg: "hidden @lg:flex",
  never: "flex"
}, f2 = {
  sm: "flex @xs:hidden",
  md: "flex @md:hidden",
  lg: "flex @lg:hidden",
  never: "hidden"
}, l1 = {
  sm: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @xs:mx-0 @xs:mt-0 @xs:border-t-0 @xs:px-0 @xs:pt-0",
  md: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @md:mx-0 @md:mt-0 @md:border-t-0 @md:px-0 @md:pt-0",
  lg: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @lg:mx-0 @lg:mt-0 @lg:border-t-0 @lg:px-0 @lg:pt-0",
  never: ""
}, u2 = {
  neutral: "secondary",
  info: "info",
  positive: "positive",
  warning: "warning",
  critical: "critical"
};
function h2({
  primaryAction: e,
  secondaryActions: t,
  otherActions: n,
  confirmAction: o,
  rejectAction: s,
  status: i,
  stackAt: a = "never",
  hasAvatar: d = !1
}) {
  const u = d ? c2[a] : void 0;
  if (i)
    return /* @__PURE__ */ r(
      "div",
      {
        className: k(
          "flex items-center justify-end",
          d && l2[a],
          l1[a]
        ),
        children: /* @__PURE__ */ r(
          le,
          {
            icon: i.icon,
            color: u2[i.variant],
            size: "lg",
            role: "img",
            "aria-label": i.label
          }
        )
      }
    );
  const f = k(
    "relative z-[1]",
    a2[a],
    // After stackedChrome: its `@{bp}:pt-0` reset and our `@{bp}:pt-1` are the
    // same utility, so ours must come last to win once the row goes inline.
    l1[a],
    u
  ), g = (v) => (
    // Keep action clicks from bubbling to the row's onClick / overlay link.
    /* @__PURE__ */ r("div", { className: f, onClick: (w) => w.stopPropagation(), children: v })
  );
  if (o || s) {
    const v = (x) => {
      const N = s ? {
        id: "reject",
        icon: Le,
        label: s.label ?? "Reject",
        hideLabel: x,
        disabled: s.disabled,
        onClick: s.onClick
      } : void 0, T = o ? {
        id: "confirm",
        icon: C1,
        label: o.label ?? "Confirm",
        hideLabel: x,
        disabled: o.disabled,
        onClick: o.onClick
      } : void 0;
      return /* @__PURE__ */ r(
        Z1,
        {
          primaryAction: T,
          secondaryActions: N ? [N] : void 0,
          size: "md",
          canOverflow: !1
        }
      );
    }, w = (
      // Icon-only, inline at the trailing edge.
      /* @__PURE__ */ r(
        "div",
        {
          className: k(
            "relative z-[1] min-w-0 flex-1",
            u,
            d2[a]
          ),
          onClick: (x) => x.stopPropagation(),
          children: v(!0)
        }
      )
    );
    return a === "never" ? w : /* @__PURE__ */ c(xe, { children: [
      w,
      /* @__PURE__ */ r(
        "div",
        {
          className: k(
            "relative z-[1]",
            f2[a],
            l1[a]
          ),
          onClick: (x) => x.stopPropagation(),
          children: v(!1)
        }
      )
    ] });
  }
  const m = Array.isArray(t) ? t.map(
    (v, w) => ({
      id: `secondary-${w}`,
      label: v.label,
      icon: v.icon,
      onClick: v.onClick
    })
  ) : t ? {
    label: t.label,
    // `CardSecondaryLink.href` is loosely typed as optional; a link always
    // carries one in practice, so pass it through unchanged.
    href: t.href,
    target: t.target,
    disabled: t.disabled
  } : void 0, h = e ? {
    id: "primary",
    label: e.label,
    icon: e.icon,
    onClick: e.onClick,
    variant: e.variant
  } : void 0;
  return !!h || (Array.isArray(t) ? t.length > 0 : !!t) || (n?.length ?? 0) > 0 ? g(
    /* @__PURE__ */ r(
      Z1,
      {
        primaryAction: h,
        secondaryActions: m,
        otherActions: n,
        size: "md"
      }
    )
  ) : null;
}
const Mr = p(
  function({
    title: t,
    description: n,
    avatar: o,
    primaryAction: s,
    secondaryActions: i,
    otherActions: a,
    confirmAction: d,
    rejectAction: l,
    status: u,
    inactive: f = !1,
    fullHeight: g = !1,
    alert: m,
    link: h,
    onClick: C,
    disableOverlayLink: v = !1,
    stackAt: w = "never"
  }, x) {
    const N = !!m && m.visible !== !1, E = /* @__PURE__ */ c(
      jt,
      {
        ref: N ? void 0 : x,
        className: k(
          "group relative @container bg-f1-background shadow-none transition-all",
          g && "h-full",
          // Pointer + hover/focus affordance only when the whole row is clickable.
          (!!h || !!C) && "cursor-pointer focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md"
        ),
        style: N ? {
          borderColor: hs[m.variant],
          borderWidth: "2px"
        } : void 0,
        onClick: C,
        "data-testid": "card",
        children: [
          h && !v && /* @__PURE__ */ r(
            Dt,
            {
              href: h,
              variant: "unstyled",
              className: k("z-1 absolute inset-0 block rounded-xl", me()),
              "aria-label": t,
              children: " "
            }
          ),
          /* @__PURE__ */ c("div", { className: s2[w], children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: k(
                  "flex min-w-0 flex-row gap-3",
                  // Centre a short single-line group against the taller controls, but
                  // let it fill from the top once it grows (see the class doc).
                  i2[w],
                  // Keep the avatar pinned to the top so it stays aligned with the
                  // title when the row grows (e.g. a long wrapping description).
                  o ? "items-start" : "items-center"
                ),
                children: [
                  o && /* @__PURE__ */ r(gs, { avatar: o, size: "lg" }),
                  /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-col gap-0", children: [
                    /* @__PURE__ */ r(
                      h1,
                      {
                        variant: "body",
                        content: t,
                        className: k(
                          "break-words font-medium",
                          f && "text-f1-foreground-secondary line-through"
                        )
                      }
                    ),
                    n && /* @__PURE__ */ r(
                      h1,
                      {
                        variant: "description",
                        content: n,
                        className: k("break-words", f && "line-through")
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ r(
              h2,
              {
                primaryAction: s,
                secondaryActions: i,
                otherActions: a,
                confirmAction: d,
                rejectAction: l,
                status: u,
                stackAt: w,
                hasAvatar: !!o
              }
            )
          ] })
        ]
      }
    );
    return N ? /* @__PURE__ */ r(ps, { ref: x, alert: m, fullHeight: g, children: E }) : E;
  }
);
Mr.displayName = "F0CardRow";
const g2 = () => /* @__PURE__ */ r(
  jt,
  {
    className: k("group relative bg-f1-background shadow-none"),
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-row items-center gap-3", children: [
        /* @__PURE__ */ r(ue, { className: "h-10 w-10 rounded-full" }),
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ r(ue, { className: "h-3 w-32 rounded-md" }),
          /* @__PURE__ */ r(ue, { className: "h-3 w-20 rounded-md" })
        ] })
      ] }),
      /* @__PURE__ */ r(ue, { className: "h-9 w-24 rounded-md" })
    ] })
  }
), p2 = It(
  us(
    "F0CardRow",
    Pt(Mr, g2)
  )
), f9 = ["xs", "sm", "md", "lg"], u9 = [
  "inProgress",
  "executing",
  "writing",
  "completed"
], m2 = ({
  onUploadFiles: e,
  isAtMaxFiles: t,
  maxFiles: n,
  acceptValue: o,
  fileInputRef: s,
  handleFileSelect: i,
  inProgress: a,
  hasDataToSend: d,
  isPreSending: l,
  canRecord: u,
  recordingStatus: f = "idle",
  recordingStream: g,
  onStartRecording: m,
  onStopRecording: h,
  onCancelRecording: C
}) => {
  const v = Y();
  return f === "recording" ? /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-3 p-3", children: [
    /* @__PURE__ */ r(
      ms,
      {
        stream: g ?? null,
        className: "min-w-0 flex-1"
      }
    ),
    /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ r(
        fe,
        {
          label: v.ai.cancelRecording,
          hideLabel: !0,
          type: "button",
          icon: Le,
          variant: "outline",
          size: "md",
          onClick: C
        }
      ),
      /* @__PURE__ */ r(
        fe,
        {
          label: v.ai.stopRecording,
          hideLabel: !0,
          type: "button",
          icon: C1,
          variant: "default",
          size: "md",
          onClick: h
        }
      )
    ] })
  ] }) : /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center justify-between p-3", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: e && /* @__PURE__ */ c(xe, { children: [
      /* @__PURE__ */ r(
        fe,
        {
          label: v.ai.attachFile,
          hideLabel: !0,
          type: "button",
          icon: Tt,
          variant: "outline",
          size: "md",
          disabled: t || f === "transcribing",
          onClick: (w) => {
            w.preventDefault(), s.current?.click();
          }
        }
      ),
      /* @__PURE__ */ r(
        "input",
        {
          ref: s,
          type: "file",
          multiple: n !== 1,
          disabled: t,
          accept: o,
          className: "hidden",
          onChange: i
        }
      )
    ] }) }),
    /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
      u && /* @__PURE__ */ r(
        fe,
        {
          label: v.ai.recordAudio,
          hideLabel: !0,
          type: "button",
          icon: St,
          variant: "outline",
          size: "md",
          disabled: a,
          onClick: m,
          loading: f === "transcribing"
        }
      ),
      f !== "transcribing" && a ? /* @__PURE__ */ r(
        fe,
        {
          type: "submit",
          variant: "neutral",
          label: v.ai.stopAnswerGeneration,
          icon: At,
          hideLabel: !0
        }
      ) : /* @__PURE__ */ r(
        fe,
        {
          type: "submit",
          disabled: !d || l,
          variant: "default",
          label: v.ai.sendMessage,
          icon: m1,
          hideLabel: !0
        }
      )
    ] })
  ] });
}, C2 = ({
  attachedFiles: e,
  isUploading: t,
  onRemove: n,
  removeLabel: o
}) => e.length === 0 ? null : /* @__PURE__ */ r(
  "div",
  {
    "aria-live": "polite",
    "aria-busy": t,
    className: "flex flex-wrap gap-1 px-1 pt-1",
    children: e.map(
      (s) => s.status === "uploading" ? /* @__PURE__ */ r(ue, { className: "h-9 w-36 rounded-[10px]" }, s.id) : s.status === "error" ? /* @__PURE__ */ r(
        v2,
        {
          att: s,
          onRemove: n,
          removeLabel: o
        },
        s.id
      ) : /* @__PURE__ */ r(
        Zt,
        {
          file: s.file,
          size: "md",
          actions: [
            {
              label: o,
              icon: Le,
              onClick: () => n(s.id)
            }
          ]
        },
        s.id
      )
    )
  }
);
function v2({
  att: e,
  onRemove: t,
  removeLabel: n
}) {
  const o = /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 rounded-lg border border-f1-border-critical bg-f1-background-critical/10 px-2.5 py-1.5", children: [
    /* @__PURE__ */ r(le, { icon: kt, size: "md", color: "critical" }),
    /* @__PURE__ */ r("span", { className: "max-w-40 truncate text-sm font-medium text-f1-foreground-critical", children: e.file.name }),
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        "aria-label": n,
        className: me(
          "rounded-full text-f1-foreground-critical hover:text-f1-foreground-critical/80"
        ),
        onClick: () => t(e.id),
        children: /* @__PURE__ */ r(le, { icon: Le, size: "md", "aria-hidden": "true" })
      }
    )
  ] });
  return e.errorMessage ? /* @__PURE__ */ r(Cs, { label: e.errorMessage, children: o }) : o;
}
const w2 = {
  soft: {
    text: "",
    bg: "bg-f1-background-info",
    fontColor: "text-f1-foreground-info",
    formBorder: "[&_form]:border-f1-border-info"
  }
}, x2 = ({
  creditWarning: e,
  children: t
}) => {
  const n = Y();
  if (!e) return t;
  const o = {
    ...w2[e.level],
    text: n.ai.creditWarning.soft
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: k("flex flex-col rounded-xl", o.bg, o.formBorder),
      children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 px-4 pb-1.5 pt-2", children: [
          /* @__PURE__ */ r(
            "p",
            {
              className: k("min-w-0 flex-1 text-sm font-medium", o.fontColor),
              children: o.text
            }
          ),
          /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
            e.onGetCredits && /* @__PURE__ */ r(
              pe,
              {
                label: n.ai.creditWarning.getCredits ?? "",
                size: "sm",
                variant: "outline",
                tooltip: n.ai.creditWarning.getCredits ?? "",
                onClick: e.onGetCredits
              }
            ),
            e.onDismiss && /* @__PURE__ */ r(
              pe,
              {
                label: n.ai.creditWarning.dismiss ?? "",
                size: "sm",
                variant: "ghost",
                icon: Le,
                hideLabel: !0,
                onClick: e.onDismiss
              }
            )
          ] })
        ] }),
        t
      ]
    }
  );
};
function k2({
  isOpen: e,
  results: t,
  isLoading: n,
  selectedIndex: o,
  position: s,
  onSelect: i
}) {
  const a = I(null), d = I(null);
  X(() => {
    d.current?.scrollIntoView({ block: "nearest" });
  }, [o]), Ct(() => {
    const f = a.current, g = f?.offsetParent;
    if (!f || !g) return;
    const m = f.offsetLeft + f.offsetWidth - g.clientWidth;
    m > 0 && (f.style.left = `${Math.max(0, f.offsetLeft - m)}px`);
  }, [s]);
  const l = n && t.length === 0, u = !n && t.length === 0;
  return !e || u ? null : /* @__PURE__ */ r(
    "div",
    {
      ref: a,
      role: "listbox",
      style: {
        position: "absolute",
        bottom: s ? `${s.bottom}px` : "100%",
        left: s ? `${s.left}px` : 0
      },
      className: k(
        "z-50",
        "w-64 max-h-60 overflow-y-auto",
        "rounded-lg border border-solid border-f1-border-secondary",
        "bg-f1-background shadow-md",
        "p-1"
      ),
      children: l ? Array.from({ length: 3 }, (f, g) => /* @__PURE__ */ c(
        "div",
        {
          className: "flex items-center gap-2 p-2",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ r(ue, { className: "size-5 shrink-0 rounded-full" }),
            /* @__PURE__ */ r(
              ue,
              {
                className: k("h-4 rounded", g === 1 ? "w-24" : "w-32")
              }
            )
          ]
        },
        g
      )) : t.map((f, g) => {
        const m = g === o, h = `${f.firstName} ${f.lastName}`.trim();
        return /* @__PURE__ */ c(
          "div",
          {
            ref: m ? d : void 0,
            role: "option",
            "aria-selected": m,
            className: k(
              "flex cursor-pointer items-center gap-2 p-2 rounded",
              "transition-colors",
              m ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary-hover"
            ),
            onMouseDown: (C) => {
              C.preventDefault(), i(f);
            },
            onMouseEnter: () => {
            },
            children: [
              /* @__PURE__ */ r(
                vs,
                {
                  firstName: f.firstName,
                  lastName: f.lastName,
                  src: f.avatarUrl,
                  size: "xsmall"
                }
              ),
              /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ r(ce, { className: "text-base font-medium text-f1-foreground", children: h }) })
            ]
          },
          String(f.id)
        );
      })
    }
  );
}
const b2 = ({
  quote: e,
  onRemove: t
}) => {
  const n = Y();
  return /* @__PURE__ */ r("div", { className: "p-1", children: /* @__PURE__ */ c(
    "div",
    {
      className: k(
        "flex items-start gap-2 justify-center",
        "rounded-[10px] bg-f1-background-hover pl-2 py-1.5 pr-1.5"
      ),
      children: [
        /* @__PURE__ */ r("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ r(le, { icon: R1, size: "md", color: "default" }) }),
        /* @__PURE__ */ r(
          ce,
          {
            className: "h-full flex-1 py-0.5 text-[12px] font-medium text-f1-foreground-secondary",
            lines: 1,
            children: e.text
          }
        ),
        /* @__PURE__ */ r(
          fe,
          {
            variant: "ghost",
            label: n.ai.removeQuote,
            onClick: t,
            icon: Le,
            hideLabel: !0,
            size: "sm"
          }
        )
      ]
    }
  ) });
}, L2 = ({
  placeholders: e,
  defaultPlaceholder: t,
  inputValue: n,
  inProgress: o
}) => {
  const s = ye(), [i, a] = P(""), [d, l] = P(0), [u, f] = P(!1), g = I(null), m = I(null), h = I(null), C = e[d] ?? t;
  return X(() => {
    const v = () => {
      m.current && (clearInterval(m.current), m.current = null), h.current && (clearInterval(h.current), h.current = null), g.current && (clearTimeout(g.current), g.current = null);
    };
    if (n.length > 0 || o) {
      f(!1), a(""), v();
      return;
    }
    if (s)
      return f(!1), a(C), v(), g.current = setTimeout(() => {
        const y = (d + 1) % Math.max(e.length, 1);
        l(y);
      }, 4e3), () => {
        v();
      };
    f(!0), a("");
    let w = 0;
    const x = 50, N = 30, T = 2e3, E = 1e3;
    return m.current = setInterval(() => {
      w < C.length ? (a(C.slice(0, w + 1)), w++) : (m.current && (clearInterval(m.current), m.current = null), g.current = setTimeout(() => {
        h.current = setInterval(() => {
          w > 0 ? (w--, a(C.slice(0, w))) : (h.current && (clearInterval(h.current), h.current = null), g.current = setTimeout(() => {
            const y = (d + 1) % Math.max(e.length, 1);
            l(y);
          }, E));
        }, N);
      }, T));
    }, x), () => {
      v();
    };
  }, [
    n,
    o,
    C,
    d,
    e.length,
    s
  ]), n.length > 0 || o ? null : /* @__PURE__ */ r(Ne, { children: /* @__PURE__ */ r(
    oe.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: s ? 0 : 0.4 },
      className: k(
        "col-start-1 row-start-1",
        "pointer-events-none",
        "text-f1-foreground-secondary",
        "text-[16px] sm:text-[14px] leading-[20px] font-normal",
        "pt-3 px-3"
      ),
      children: /* @__PURE__ */ c(
        "div",
        {
          className: k(
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "whitespace-pre-wrap break-words overflow-visible"
          ),
          children: [
            i,
            u && !s && /* @__PURE__ */ r("span", { className: "f0-chat-cursor-blink", children: "|" })
          ]
        }
      )
    }
  ) });
}, y2 = ({
  textareaRef: e,
  highlightRef: t,
  inputValue: n,
  onInputChange: o,
  onKeyDown: s,
  onCursorUpdate: i,
  onScroll: a,
  highlightSegments: d,
  hasOverlay: l,
  multiplePlaceholders: u,
  placeholders: f,
  resolvedDefaultPlaceholder: g,
  inProgress: m
}) => /* @__PURE__ */ c(
  "div",
  {
    className: k("grid flex-1 grid-cols-1 grid-rows-1", "min-h-[20px] py-0"),
    children: [
      /* @__PURE__ */ r(
        "div",
        {
          "aria-hidden": !0,
          className: k(
            "col-start-1 row-start-1",
            "pointer-events-none invisible",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3"
          ),
          children: n.endsWith(`
`) ? n + "_" : n
        }
      ),
      l && /* @__PURE__ */ r(
        "div",
        {
          ref: t,
          "aria-hidden": !0,
          className: k(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ),
          children: d.map(
            (h, C) => h.type === "mention" ? /* @__PURE__ */ r(
              "span",
              {
                className: "font-medium text-f1-foreground-secondary",
                children: h.text
              },
              C
            ) : h.type === "ghost" ? /* @__PURE__ */ r("span", { className: "text-f1-foreground-secondary opacity-50", children: h.text }, C) : /* @__PURE__ */ r("span", { children: h.text }, C)
          )
        }
      ),
      !n && !u && /* @__PURE__ */ r(
        "p",
        {
          className: k(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "text-f1-foreground-secondary",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "pt-3 px-3",
            "overflow-hidden text-ellipsis whitespace-nowrap"
          ),
          children: f.length === 1 ? f[0] : g
        }
      ),
      /* @__PURE__ */ r(
        "textarea",
        {
          autoFocus: !1,
          name: "one-ai-input",
          rows: 1,
          ref: e,
          value: n,
          onChange: (h) => {
            o(h.target.value, h.target.selectionStart ?? 0);
          },
          onKeyDown: s,
          onKeyUp: i,
          onClick: i,
          onSelect: i,
          onScroll: a,
          className: k(
            "col-start-1 row-start-1",
            "min-h-[20px] max-h-[240px] h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "mt-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "outline-none",
            l ? "text-transparent caret-f1-foreground" : "text-f1-foreground",
            !l && (n || !u ? "caret-f1-foreground" : "caret-transparent")
          )
        }
      ),
      u && /* @__PURE__ */ r(
        L2,
        {
          placeholders: f,
          defaultPlaceholder: g,
          inputValue: n,
          inProgress: m ?? !1
        }
      )
    ]
  }
), M2 = 5;
function E2(e, t = M2) {
  return e.length <= t ? e : [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
const R2 = ({
  suggestions: e,
  onItemClick: t,
  onItemHover: n,
  side: o = "top"
}) => {
  const [s, i] = P(null), a = s !== null ? e[s] : null;
  return e.length === 0 ? null : /* @__PURE__ */ c(
    k1,
    {
      open: a !== null,
      onOpenChange: (d) => {
        d || (i(null), n?.(null));
      },
      children: [
        /* @__PURE__ */ r(ws, { asChild: !0, children: /* @__PURE__ */ r("div", { className: "flex w-full flex-wrap items-center gap-2", children: e.map((d, l) => /* @__PURE__ */ r(b1, { asChild: !0, children: /* @__PURE__ */ r(
          fe,
          {
            variant: "outline",
            label: d.label,
            icon: d.icon,
            pressed: s === l,
            onClick: () => {
              i((u) => u === l ? null : l), n?.(null);
            }
          }
        ) }, `${d.label}-${l}`)) }) }),
        a && /* @__PURE__ */ c(
          L1,
          {
            side: o,
            align: "start",
            sideOffset: 8,
            onOpenAutoFocus: (d) => d.preventDefault(),
            className: k(
              "flex flex-col gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2",
              "w-[var(--radix-popover-trigger-width)]"
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 p-2 pb-1 text-sm font-medium text-f1-foreground-secondary", children: [
                /* @__PURE__ */ r(le, { icon: a.icon, size: "sm" }),
                /* @__PURE__ */ r("span", { children: a.label })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex flex-col", children: E2(a.items).map((d, l) => /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    t(d, a), i(null), n?.(null);
                  },
                  onMouseEnter: () => n?.(d),
                  onMouseLeave: () => n?.(null),
                  onFocus: () => n?.(d),
                  onBlur: () => n?.(null),
                  className: k(
                    "group flex items-center justify-between gap-2 rounded-sm px-2 py-2 text-left text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-hover focus-visible:bg-f1-background-hover",
                    me()
                  ),
                  children: [
                    /* @__PURE__ */ r("span", { className: "min-w-0 flex-1 truncate", children: d.title }),
                    /* @__PURE__ */ r(
                      "span",
                      {
                        "aria-hidden": !0,
                        className: "flex flex-shrink-0 items-center text-f1-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                        children: /* @__PURE__ */ r(le, { icon: m1, size: "sm" })
                      }
                    )
                  ]
                },
                l
              )) })
            ]
          }
        )
      ]
    }
  );
};
function O1(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function F2(e, t, n) {
  const o = n?.cursorPosition ?? e.length, s = n?.inlineCompletion ?? null, i = [];
  for (const f of t) {
    const g = `@${f.name}`;
    let m = 0;
    for (; ; ) {
      const h = e.indexOf(g, m);
      if (h === -1) break;
      i.push({ start: h, end: h + g.length }), m = h + g.length;
    }
  }
  i.sort((f, g) => f.start - g.start);
  const a = [];
  let d = 0, l = !1;
  const u = (f) => {
    if (!s || l || o < d || o > f) {
      f > d && a.push({ type: "text", text: e.slice(d, f) }), d = f;
      return;
    }
    o > d && a.push({ type: "text", text: e.slice(d, o) }), a.push({ type: "ghost", text: s }), l = !0, o < f && a.push({ type: "text", text: e.slice(o, f) }), d = f;
  };
  for (const f of i)
    u(f.start), a.push({ type: "mention", text: e.slice(f.start, f.end) }), d = f.end;
  return u(e.length), !l && s && o >= d && a.push({ type: "ghost", text: s }), a.length === 0 ? [{ type: "text", text: e }] : a;
}
function N2(e, t) {
  if (t === "*/*") return !0;
  if (t.endsWith("/*")) {
    const n = t.slice(0, t.indexOf("/"));
    return e.startsWith(n + "/");
  }
  return e === t;
}
function S2(e, t) {
  if (!t) return e;
  const n = Array.isArray(t) ? t : [t];
  return n.length === 0 ? e : e.filter(
    (o) => n.some((s) => N2(o.type, s))
  );
}
const V2 = 4e3;
function T2(e) {
  const [t, n] = P([]), [o, s] = P(null), i = I(
    null
  ), a = I(null), d = Y(), l = e?.onUploadFiles, u = e?.allowedMimeTypes, f = e?.maxFiles, g = ee(() => {
    if (u)
      return Array.isArray(u) ? u.join(",") : u;
  }, [u]), m = f !== void 0 && t.length >= f, h = I(0);
  X(() => {
    h.current = t.length;
  }, [t]);
  const C = q((T) => {
    i.current && clearTimeout(i.current), s(T), i.current = setTimeout(() => {
      s(null), i.current = null;
    }, V2);
  }, []);
  X(
    () => () => {
      i.current && clearTimeout(i.current);
    },
    []
  );
  const v = q(
    async (T) => {
      if (T.length === 0 || !l) return;
      const E = S2(T, u);
      if (E.length === 0) return;
      if (f !== void 0 && h.current + E.length > f) {
        C(
          d.ai.tooManyFilesError.replace(
            "{{maxFiles}}",
            String(f)
          )
        );
        return;
      }
      const y = E.map((b) => ({
        id: crypto.randomUUID(),
        file: b,
        status: "uploading"
      })), L = y.map((b) => b.id);
      n((b) => [...b, ...y]);
      const H = (b) => n(
        (A) => A.map(
          (V) => L.includes(V.id) ? { ...V, status: "error", errorMessage: b } : V
        )
      );
      try {
        const b = await l(E);
        if (!Array.isArray(b) || b.length !== E.length) {
          H(d.ai.fileUploadError);
          return;
        }
        n(
          (A) => A.map((V) => {
            const R = y.findIndex(($) => $.id === V.id);
            return R === -1 ? V : b[R] ? {
              ...V,
              status: "uploaded",
              uploadedFile: b[R]
            } : {
              ...V,
              status: "error",
              errorMessage: d.ai.fileUploadError
            };
          })
        );
      } catch (b) {
        const A = b instanceof Error && b.message ? b.message : d.ai.fileUploadError;
        H(A);
      }
    },
    [
      l,
      f,
      u,
      d.ai.tooManyFilesError,
      d.ai.fileUploadError,
      C
    ]
  ), w = q(
    async (T) => {
      await v(Array.from(T.target.files ?? [])), T.target.value = "";
    },
    [v]
  ), x = q((T) => {
    n((E) => E.filter((y) => y.id !== T));
  }, []), N = q(() => {
    n([]);
  }, []);
  return {
    attachedFiles: t,
    fileInputRef: a,
    onUploadFiles: l,
    acceptValue: g,
    isAtMaxFiles: m,
    maxFiles: f,
    processFiles: v,
    handleFileSelect: w,
    handleRemoveFile: x,
    clearFiles: N,
    transientError: o,
    showTransientError: C
  };
}
function H2(e, t, n) {
  const s = e.slice(0, t).lastIndexOf("@");
  if (s === -1) return null;
  if (s > 0) {
    const a = e[s - 1];
    if (a !== " " && a !== `
` && a !== "	")
      return null;
  }
  const i = e.slice(s + 1, t);
  if (i.includes(`
`)) return null;
  for (const a of n) {
    const d = e.slice(s + 1), l = s + 1 + a.name.length;
    if (d.startsWith(a.name) && t >= l) {
      const u = e[l];
      if (u === " " || u === `
` || u === "	")
        return null;
    }
  }
  return { atIndex: s, query: i };
}
const A2 = [
  "direction",
  "boxSizing",
  "width",
  "height",
  "overflowX",
  "overflowY",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "MozTabSize",
  "whiteSpace",
  "wordWrap",
  "wordBreak"
];
function B2(e, t) {
  const n = document.createElement("div"), o = n.style, s = window.getComputedStyle(e);
  o.whiteSpace = "pre-wrap", o.wordWrap = "break-word", o.position = "absolute", o.visibility = "hidden", o.overflow = "hidden";
  for (const l of A2)
    o.setProperty(l, s.getPropertyValue(l));
  n.textContent = e.value.substring(0, t);
  const i = document.createElement("span");
  i.textContent = e.value.substring(t) || "​", n.appendChild(i), document.body.appendChild(n);
  const a = i.offsetLeft, d = i.offsetTop - e.scrollTop;
  return document.body.removeChild(n), { left: a, top: d };
}
const $2 = 250;
function I2({
  inputValue: e,
  setInputValue: t,
  cursorPosition: n,
  searchPersons: o,
  textareaRef: s
}) {
  const [i, a] = P(!1), [d, l] = P(""), [u, f] = P([]), [g, m] = P(!1), [h, C] = P(0), [v, w] = P([]), x = I(-1), N = I(null), T = I(0), E = I(-1);
  X(() => {
    if (!o) {
      a(!1);
      return;
    }
    const R = H2(e, n, v);
    if (!R) {
      a(!1), l(""), f([]), C(0), x.current = -1, E.current = -1;
      return;
    }
    if (R.atIndex === E.current)
      return;
    x.current = R.atIndex, l(R.query), a(!0), C(0), m(!0), N.current && clearTimeout(N.current);
    const $ = ++T.current;
    return N.current = setTimeout(() => {
      o(R.query).then((_) => {
        $ === T.current && (f(_), C(0), _.length === 0 && R.query.length > 0 && (E.current = R.atIndex, a(!1)));
      }).catch(() => {
        $ === T.current && f([]);
      }).finally(() => {
        $ === T.current && m(!1);
      });
    }, $2), () => {
      N.current && clearTimeout(N.current);
    };
  }, [e, n, o, v]);
  const y = q(() => {
    a(!1), l(""), f([]), C(0), x.current = -1;
  }, []), L = q(
    (R) => {
      const $ = x.current;
      if ($ === -1) return;
      const _ = `${R.firstName} ${R.lastName}`.trim(), z = String(R.id), G = e.slice(0, $), re = e.slice(n), K = `@${_} `, O = G + K + re, Z = G.length + K.length;
      t(O), w((D) => [...D.filter((W) => !(W.id === z && W.name === _)), { id: z, name: _ }]), y(), requestAnimationFrame(() => {
        const D = s.current;
        D && (D.focus(), D.setSelectionRange(Z, Z));
      });
    },
    [e, n, t, s, y]
  ), H = q(
    (R) => {
      if (!i) return !1;
      if (R.key === "Escape")
        return R.preventDefault(), y(), !0;
      if (u.length === 0) return !1;
      switch (R.key) {
        case "ArrowDown":
          return R.preventDefault(), C(($) => ($ + 1) % u.length), !0;
        case "ArrowUp":
          return R.preventDefault(), C(
            ($) => ($ + u.length - 1) % u.length
          ), !0;
        case "Tab": {
          const $ = u[h];
          if ($) {
            const _ = `${$.firstName} ${$.lastName}`.trim();
            if (d.length === 0 || _.toLowerCase().startsWith(d.toLowerCase()))
              return R.preventDefault(), L($), !0;
          }
          return !1;
        }
        case "Enter":
          return R.preventDefault(), u[h] && L(u[h]), !0;
        default:
          return !1;
      }
    },
    [i, u, h, d, L, y]
  ), b = q(
    (R) => {
      if (v.length === 0) return R;
      let $ = R;
      const _ = [...v].sort((z, G) => G.name.length - z.name.length);
      for (const z of _) {
        const G = `@${z.name}`, re = `<entity-ref type="person" id="${O1(z.id)}">${O1(z.name)}</entity-ref>`;
        for (; $.includes(G); )
          $ = $.replace(G, re);
      }
      return $;
    },
    [v]
  );
  X(() => {
    w(
      (R) => R.filter(($) => {
        const _ = `@${$.name}`, z = e.indexOf(_);
        if (z === -1) return !1;
        const G = e[z + _.length];
        return G === " " || G === `
` || G === "	";
      })
    );
  }, [e]);
  const A = ee(() => {
    if (!i || x.current === -1) return null;
    const R = s.current;
    if (!R) return null;
    const $ = B2(R, x.current), _ = R.offsetLeft + $.left, G = (R.offsetParent ? R.offsetParent.offsetHeight : 0) - (R.offsetTop + $.top);
    return { left: _, bottom: G };
  }, [i, e, n, s]), V = ee(() => {
    if (!i || u.length === 0) return null;
    const R = u[h];
    if (!R) return null;
    const $ = `${R.firstName} ${R.lastName}`.trim();
    return d.length === 0 ? $ : $.toLowerCase().startsWith(d.toLowerCase()) ? $.slice(d.length) : null;
  }, [i, u, h, d]);
  return {
    isOpen: i,
    query: d,
    results: u,
    isLoading: g,
    selectedIndex: h,
    mentions: v,
    popoverPosition: A,
    inlineCompletion: V,
    handleKeyDown: H,
    selectPerson: L,
    transformMentions: b,
    close: y
  };
}
const P2 = /[\\`*_{}[\]()#+\-.!|~>]/g, j2 = (e) => e.split(/(<entity-ref\b[^>]*>[\s\S]*?<\/entity-ref>)/g).map((t, n) => n % 2 === 1 ? t : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(P2, "\\$&")).join(""), h9 = ({
  onSubmit: e,
  onStop: t,
  inProgress: n,
  onBeforeSubmit: o,
  placeholders: s,
  creditWarning: i,
  clarifyingUI: a,
  pendingContext: d = null,
  onPendingContextChange: l,
  pendingQuote: u = null,
  onPendingQuoteChange: f,
  fileAttachments: g,
  onTranscribe: m,
  searchPersons: h,
  onProcessFilesRef: C,
  disclaimer: v,
  footer: w,
  isWelcomeScreen: x = !1,
  fullscreen: N = !1,
  welcomeScreenSuggestions: T,
  onSuggestionClick: E,
  ref: y
}) => {
  const L = Y(), H = ye(), [b, A] = P(""), [V, R] = P(0), [$, _] = P(!1), [z, G] = P(!1), [re, K] = P(null), O = I(null), Z = I(null), D = I(null), Q = a != null, { tracking: W } = Me(), he = q(
    (te, ke) => {
      W?.onWelcomeSuggestionClick?.({
        item: te,
        group: ke,
        prompt: te.prompt || te.title
      }), E?.(te, ke);
    },
    [W, E]
  ), {
    attachedFiles: ge,
    fileInputRef: ie,
    onUploadFiles: ne,
    acceptValue: se,
    isAtMaxFiles: de,
    maxFiles: M,
    processFiles: S,
    handleFileSelect: F,
    handleRemoveFile: j,
    clearFiles: B,
    transientError: U,
    showTransientError: ae
  } = T2(g), J = I2({
    inputValue: b,
    setInputValue: A,
    cursorPosition: V,
    searchPersons: h,
    textareaRef: Z
  }), we = I(""), Ee = q((te) => {
    const ke = we.current, i1 = ke && !/\s$/.test(ke) ? " " : "", Ue = `${ke}${i1}${te}`;
    A(Ue), R(Ue.length);
  }, []), Te = {
    "permission-denied": L.ai.micPermissionDenied,
    "device-error": L.ai.micError,
    "transcription-failed": L.ai.transcriptionError
  }, Ce = xs({
    onTranscribe: m,
    onPartial: Ee,
    onFinal: (te) => {
      Ee(te), Z.current?.focus();
    },
    onError: (te) => ae(Te[te])
  }), Je = !!m && Ce.isSupported, e1 = q(() => {
    W?.onDictationStart?.(), we.current = b, Ce.start();
  }, [b, Ce, W]), t1 = q(() => {
    W?.onDictationCancel?.(), Ce.cancel();
  }, [Ce, W]);
  X(() => {
    typeof window < "u" && window.location.hash.length === 0 && Z.current?.focus();
  }, []), X(() => {
    if (C)
      return C((te) => {
        S(te);
      }), () => {
        C(null);
      };
  }, [C, S]);
  const je = Ce.status === "recording", r1 = je ? L.ai.listening : L.ai.inputPlaceholder, n1 = ge.filter((te) => te.status === "uploaded"), Se = ge.some((te) => te.status === "uploading"), He = ge.some((te) => te.status === "error"), De = b.trim().length > 0;
  X(() => {
    if (!(!z || Se)) {
      if (G(!1), He) {
        ae(L.ai.fileUploadBlockedSubmit);
        return;
      }
      O.current?.requestSubmit();
    }
  }, [
    z,
    Se,
    He,
    ae,
    L.ai.fileUploadBlockedSubmit
  ]);
  const o1 = async (te) => {
    if (te.preventDefault(), !Q) {
      if (J.close(), n)
        t?.();
      else if (De && !$) {
        if (Se) {
          G(!0), Z.current?.focus();
          return;
        }
        if (o) {
          _(!0);
          try {
            if (await o() === !1) {
              Z.current?.focus();
              return;
            }
          } finally {
            _(!1);
          }
        }
        const ke = J.transformMentions(b.trim()), i1 = j2(ke), Ue = n1.flatMap(
          (B1) => B1.uploadedFile ? [B1.uploadedFile] : []
        ), H1 = d, A1 = u;
        H1 && l?.(null), A1 && f?.(null), await e({
          text: i1,
          files: Ue,
          context: H1,
          quote: A1
        }), A(""), B();
      }
      Z.current?.focus();
    }
  }, s1 = (te) => {
    Q || J.handleKeyDown(te) || te.key === "Enter" && !te.shiftKey && (te.preventDefault(), n || O.current?.requestSubmit());
  }, Ze = () => {
    R(Z.current?.selectionStart ?? 0);
  }, _e = () => {
    D.current && Z.current && (D.current.scrollTop = Z.current.scrollTop);
  }, S1 = re ? re.prompt ?? re.title : null, V1 = je ? [L.ai.listening] : S1 ? [S1] : s ?? [], Kr = V1.length > 1, Qr = ee(() => F2(b, J.mentions, {
    cursorPosition: V,
    inlineCompletion: J.inlineCompletion
  }), [b, J.mentions, V, J.inlineCompletion]), Jr = J.mentions.length > 0 || J.inlineCompletion !== null, Oe = x && !!T && T.length > 0 && !!E ? /* @__PURE__ */ r(
    R2,
    {
      suggestions: T,
      onItemClick: he,
      onItemHover: K,
      side: N ? "bottom" : "top"
    }
  ) : null, T1 = N && x, { motionProps: en } = ks(
    x,
    160,
    0.5
  );
  return /* @__PURE__ */ c(
    oe.div,
    {
      ref: y,
      className: k(
        "flex flex-col items-center gap-2 px-4 pb-3 pt-2",
        T1 && "min-h-0 flex-1 justify-start -mt-20"
      ),
      ...N ? en : {},
      children: [
        /* @__PURE__ */ c("div", { className: "flex w-full max-w-content flex-col gap-2", children: [
          Oe && !N && /* @__PURE__ */ r("div", { children: Oe }),
          /* @__PURE__ */ r(x2, { creditWarning: i, children: /* @__PURE__ */ c(
            oe.form,
            {
              "aria-busy": n,
              ref: O,
              className: k(
                "relative isolate z-20",
                "flex flex-col items-stretch md:gap-3 gap-2",
                "rounded-lg border border-solid border-f1-border has-[textarea:focus]:border-f1-background-tertiary",
                "transition-all hover:cursor-text",
                "p-0",
                "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
                "before:rounded-[inherit] before:bg-f1-background before:content-['']",
                "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
                "after:rounded-md after:blur-[6px] after:content-['']",
                "after:scale-90 after:opacity-0",
                "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
                "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
                "after:transition-all after:delay-200 after:duration-300",
                "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100",
                Q && "after:scale-100 after:opacity-100 border-f1-background-tertiary"
              ),
              animate: {
                "--gradient-angle": ["0deg", "360deg"]
              },
              transition: {
                duration: 6,
                ease: "linear",
                repeat: 1 / 0
              },
              style: {
                "--gradient-angle": "180deg"
              },
              onClick: () => {
                Q || Z.current?.focus();
              },
              onSubmit: o1,
              children: [
                /* @__PURE__ */ r(
                  k2,
                  {
                    isOpen: J.isOpen,
                    results: J.results,
                    isLoading: J.isLoading,
                    selectedIndex: J.selectedIndex,
                    position: J.popoverPosition,
                    onSelect: J.selectPerson
                  }
                ),
                /* @__PURE__ */ r(Ne, { initial: !1, children: Q ? /* @__PURE__ */ r(
                  oe.div,
                  {
                    className: "overflow-hidden",
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        duration: H ? 0 : 0.22,
                        ease: [0.4, 0, 1, 1]
                      }
                    },
                    transition: {
                      duration: H ? 0 : 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    children: a
                  },
                  "clarifying"
                ) : /* @__PURE__ */ c(
                  oe.div,
                  {
                    className: "overflow-hidden",
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        duration: H ? 0 : 0.15,
                        ease: [0.55, 0, 1, 0.45]
                      }
                    },
                    transition: {
                      duration: H ? 0 : 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    children: [
                      u && /* @__PURE__ */ r(
                        b2,
                        {
                          quote: u,
                          onRemove: () => f?.(null)
                        }
                      ),
                      /* @__PURE__ */ r(Ne, { initial: !1, children: U && /* @__PURE__ */ r(
                        oe.div,
                        {
                          role: "alert",
                          "aria-live": "polite",
                          className: "p-1",
                          initial: { opacity: 0, y: -4 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -4 },
                          transition: {
                            duration: H ? 0 : 0.2,
                            ease: "easeOut"
                          },
                          children: /* @__PURE__ */ c(
                            "div",
                            {
                              className: k(
                                "flex w-full flex-row items-center gap-2 rounded-md p-2 pr-3",
                                "bg-f1-background-critical text-f1-foreground"
                              ),
                              children: [
                                /* @__PURE__ */ r("div", { className: "h-6 w-6 flex-shrink-0", children: /* @__PURE__ */ r(bs, { type: "critical", size: "sm" }) }),
                                /* @__PURE__ */ r("p", { className: "font-medium text-f1-foreground-critical", children: U })
                              ]
                            }
                          )
                        },
                        "transient-error"
                      ) }),
                      /* @__PURE__ */ r(
                        C2,
                        {
                          attachedFiles: ge,
                          isUploading: Se,
                          onRemove: j,
                          removeLabel: L.ai.removeFile
                        }
                      ),
                      /* @__PURE__ */ r(
                        y2,
                        {
                          textareaRef: Z,
                          highlightRef: D,
                          inputValue: b,
                          onInputChange: (te, ke) => {
                            A(te), R(ke);
                          },
                          onKeyDown: s1,
                          onCursorUpdate: Ze,
                          onScroll: _e,
                          highlightSegments: Qr,
                          hasOverlay: Jr,
                          multiplePlaceholders: Kr,
                          placeholders: V1,
                          resolvedDefaultPlaceholder: r1,
                          inProgress: n
                        }
                      ),
                      /* @__PURE__ */ r(
                        m2,
                        {
                          onUploadFiles: ne,
                          isAtMaxFiles: de,
                          maxFiles: M,
                          acceptValue: se,
                          fileInputRef: ie,
                          handleFileSelect: F,
                          inProgress: n,
                          hasDataToSend: De,
                          isPreSending: $ || z,
                          canRecord: Je,
                          recordingStatus: Ce.status,
                          recordingStream: Ce.stream,
                          onStartRecording: e1,
                          onStopRecording: Ce.stop,
                          onCancelRecording: t1
                        }
                      )
                    ]
                  },
                  "input"
                ) })
              ]
            }
          ) })
        ] }),
        Oe && N && /* @__PURE__ */ r("div", { className: "w-full max-w-content", children: Oe }),
        w && x && N && /* @__PURE__ */ r("div", { className: "w-full py-4 mx-auto flex max-w-content justify-center", children: w }),
        /* @__PURE__ */ r(Ne, { mode: "wait", initial: !1, children: Q ? /* @__PURE__ */ c(
          oe.div,
          {
            className: "flex w-full max-w-content flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-f1-foreground-tertiary",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.15, ease: "easeOut" },
            children: [
              /* @__PURE__ */ c("span", { children: [
                /* @__PURE__ */ r("kbd", { className: "font-sans", children: "↑↓" }),
                " ",
                L.ai.clarifyingQuestion.navHint.navigate
              ] }),
              /* @__PURE__ */ c("span", { children: [
                /* @__PURE__ */ r("kbd", { className: "font-sans", children: "Enter" }),
                " ",
                L.ai.clarifyingQuestion.navHint.select
              ] }),
              /* @__PURE__ */ c("span", { children: [
                /* @__PURE__ */ r("kbd", { className: "font-sans", children: "Esc" }),
                " ",
                L.ai.clarifyingQuestion.navHint.cancel
              ] })
            ]
          },
          "clarifying-nav-hint"
        ) : v?.text && !T1 && /* @__PURE__ */ c(
          oe.div,
          {
            className: "flex w-full max-w-content flex-row items-center justify-center gap-1",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: {
              duration: H ? 0 : 0.3,
              ease: "easeOut"
            },
            children: [
              v.onClick ? /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  onClick: v.onClick,
                  className: k(
                    "group min-w-0 cursor-pointer bg-transparent p-0 text-inherit",
                    "transition-transform duration-700 ease-out",
                    "hover:scale-[1.02] focus-visible:scale-[1.02]",
                    "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
                  ),
                  children: /* @__PURE__ */ r(
                    ce,
                    {
                      className: k(
                        "text-sm font-medium text-f1-foreground-tertiary transition-colors duration-700 ease-out",
                        "group-hover:bg-gradient-to-r group-hover:from-[#E55619] group-hover:to-[#A1ADE5] group-hover:bg-clip-text group-hover:text-transparent",
                        "group-focus-visible:bg-gradient-to-r group-focus-visible:from-[#E55619] group-focus-visible:to-[#A1ADE5] group-focus-visible:bg-clip-text group-focus-visible:text-transparent"
                      ),
                      children: v.text
                    }
                  )
                }
              ) : /* @__PURE__ */ r(ce, { className: "text-sm font-medium text-f1-foreground-tertiary", children: v.text }),
              v.link && v.linkText && /* @__PURE__ */ r(
                Ls,
                {
                  href: v.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary",
                  children: v.linkText
                }
              )
            ]
          },
          "chat-disclaimer"
        ) })
      ]
    }
  );
};
function D2({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "pre",
    {
      ...t,
      className: k(
        "relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2",
        t.className
      ),
      children: e
    }
  );
}
function Z2({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "code",
    {
      ...t,
      className: k(
        // Inline default
        "rounded bg-f1-background-secondary px-1 py-0.5 font-mono text-base text-f1-foreground",
        // Reset inside <pre> — let the parent handle the surface
        "[pre_&]:rounded-none [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-base",
        t.className
      ),
      children: e
    }
  );
}
function _2({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "blockquote",
    {
      ...t,
      className: k(
        "mr-1 my-2 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-3 text-base",
        t.className
      ),
      children: e
    }
  );
}
function O2({ ...e }) {
  return /* @__PURE__ */ r(
    "hr",
    {
      ...e,
      className: k("my-3 border-0 border-t border-f1-border", e.className)
    }
  );
}
function U2({
  src: e,
  alt: t,
  ...n
}) {
  const o = () => {
    if (e) {
      const s = document.createElement("a");
      s.href = e, s.download = t || "image", document.body.appendChild(s), s.click(), document.body.removeChild(s);
    }
  };
  return /* @__PURE__ */ c("div", { className: "relative w-fit", children: [
    /* @__PURE__ */ r(
      "img",
      {
        ...n,
        src: e,
        alt: t,
        className: k("max-w-full rounded-md", n.className)
      }
    ),
    /* @__PURE__ */ r("div", { className: "absolute right-2 top-2 rounded", children: /* @__PURE__ */ r(
      pe,
      {
        variant: "neutral",
        label: "Download",
        hideLabel: !0,
        icon: Re,
        onClick: o
      }
    ) })
  ] });
}
function z2({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(Dt, { ...t, variant: "link", href: t.href, children: e });
}
function G2({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "ul",
    {
      ...t,
      className: k(
        "list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        t.className
      ),
      children: e
    }
  );
}
function W2({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "ol",
    {
      ...t,
      className: k(
        "list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        t.className
      ),
      children: e
    }
  );
}
function q2({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r("li", { ...t, className: k("mb-2", t.className), children: e });
}
async function X2(e, t, n) {
  const o = await import("./xlsx-Bedf3nwD.js"), s = o.utils.table_to_book(e, { sheet: "Data" });
  o.writeFile(s, `${n}.${t}`);
}
function Y2({
  children: e,
  title: t,
  ...n
}) {
  const o = Y(), s = I(null), i = q(
    (a) => {
      if (!s.current) return;
      const d = t?.replace(/\s+/g, "_").toLowerCase() || "table";
      X2(s.current, a, d);
    },
    [t]
  );
  return /* @__PURE__ */ c("div", { className: "group/table relative flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary", children: [
    /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 py-2", children: [
      /* @__PURE__ */ r(
        ce,
        {
          tag: "h2",
          className: "text-base font-medium capitalize text-f1-foreground",
          children: t ?? o.ai.reportCard.tableLabel
        }
      ),
      /* @__PURE__ */ r(
        Qe,
        {
          icon: Re,
          size: "md",
          items: [
            {
              label: o.t("ai.dataDownload.download", {
                format: "Excel"
              }),
              icon: Re,
              onClick: () => i("xlsx")
            },
            {
              label: o.t("ai.dataDownload.download", {
                format: "CSV"
              }),
              icon: Re,
              onClick: () => i("csv")
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { className: "scrollbar-macos overflow-x-auto", children: /* @__PURE__ */ r(
      "table",
      {
        ref: s,
        ...n,
        className: k(
          "w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0",
          n.className
        ),
        children: e
      }
    ) })
  ] });
}
function K2({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "th",
    {
      ...t,
      className: k(
        "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
        t.className
      ),
      children: e
    }
  );
}
function Q2({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "td",
    {
      ...t,
      className: k(
        "max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        t.className
      ),
      children: e
    }
  );
}
function J2({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r("p", { ...t, className: k("text-base font-normal", t.className), children: e });
}
function e4({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "h1",
    {
      ...t,
      className: k(
        "mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0",
        t.className
      ),
      children: e
    }
  );
}
function t4({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "h2",
    {
      ...t,
      className: k(
        "mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0",
        t.className
      ),
      children: e
    }
  );
}
function r4({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "h3",
    {
      ...t,
      className: k(
        "mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0",
        t.className
      ),
      children: e
    }
  );
}
function n4({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r("strong", { ...t, className: k("font-semibold", t.className), children: e });
}
function o4({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r("em", { ...t, className: k("italic", t.className), children: e });
}
function Ve({
  id: e,
  trigger: t,
  resolver: n,
  mapToCard: o,
  fallbackCard: s
}) {
  const i = I(/* @__PURE__ */ new Map()), [a, d] = P(
    () => i.current.get(e) ?? null
  ), [l, u] = P(!1), [f, g] = P(!1), m = I(!0);
  X(() => () => {
    m.current = !1;
  }, []);
  const h = q(() => {
    if (a || l) return;
    const v = i.current.get(e);
    if (v) {
      d(v);
      return;
    }
    u(!0), g(!1), n(e).then((w) => {
      i.current.set(e, w), m.current && d(w);
    }).catch(() => {
      m.current && g(!0);
    }).finally(() => {
      m.current && u(!1);
    });
  }, [n, e, a, l]), C = f || !a ? s : o(a);
  return /* @__PURE__ */ c(
    ys,
    {
      openDelay: 300,
      closeDelay: 100,
      onOpenChange: (v) => {
        v && h();
      },
      children: [
        /* @__PURE__ */ r(Ms, { asChild: !0, children: t }),
        /* @__PURE__ */ r(
          Es,
          {
            side: "top",
            align: "start",
            className: "w-64 rounded-2xl border-none p-0 shadow-md",
            children: l ? /* @__PURE__ */ r($1.Skeleton, {}) : /* @__PURE__ */ r($1, { ...C })
          }
        )
      ]
    }
  );
}
const Er = p(
  ({ label: e, ...t }, n) => /* @__PURE__ */ r(
    "button",
    {
      ref: n,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        me()
      ),
      ...t,
      children: e
    }
  )
);
Er.displayName = "CandidateTrigger";
function s4({
  id: e,
  label: t
}) {
  const { entityRefs: n } = Me(), o = n?.resolvers?.candidate, s = Y(), i = n?.urls?.candidate?.(e), a = ee(
    () => (l) => {
      const u = [];
      return l.source && u.push({
        title: s.t("ai.entityRef.candidate.source"),
        value: l.source
      }), l.appliedAt && u.push({
        title: s.t("ai.entityRef.candidate.applied"),
        value: l.appliedAt
      }), {
        avatar: {
          type: "person",
          firstName: l.firstName,
          lastName: l.lastName,
          src: l.avatarUrl
        },
        title: `${l.firstName} ${l.lastName}`,
        ...u.length > 0 && {
          children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-2", children: u.map((f) => /* @__PURE__ */ c("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ r("p", { className: "text-f1-foreground-secondary", children: f.title }),
            /* @__PURE__ */ r("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: f.value })
          ] }, f.title)) })
        },
        ...i && {
          secondaryActions: {
            label: s.t("ai.view"),
            href: i
          }
        }
      };
    },
    [s, i]
  ), d = ee(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [t, s, i]
  );
  return o ? /* @__PURE__ */ r(
    Ve,
    {
      id: e,
      trigger: /* @__PURE__ */ r(Er, { label: t }),
      resolver: o,
      mapToCard: a,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
const Rr = p(
  ({ label: e, ...t }, n) => /* @__PURE__ */ r(
    "button",
    {
      ref: n,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        me()
      ),
      ...t,
      children: e
    }
  )
);
Rr.displayName = "ExpenseTrigger";
function i4({ id: e, label: t }) {
  const { entityRefs: n } = Me(), o = n?.resolvers?.expense, s = Y(), i = n?.urls?.expense?.(e), a = ee(
    () => (l) => ({
      avatar: {
        type: "icon",
        icon: rr
      },
      title: l.description || `Expense #${l.id}`,
      description: [l.amount, l.status].filter(Boolean).join(" · "),
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [s, i]
  ), d = ee(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [t, s, i]
  );
  return o ? /* @__PURE__ */ r(
    Ve,
    {
      id: e,
      trigger: /* @__PURE__ */ r(Rr, { label: t }),
      resolver: o,
      mapToCard: a,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
const Fr = p(
  ({ label: e, ...t }, n) => /* @__PURE__ */ r(
    "button",
    {
      ref: n,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        me()
      ),
      ...t,
      children: e
    }
  )
);
Fr.displayName = "JobPostingTrigger";
function a4({
  id: e,
  label: t
}) {
  const { entityRefs: n } = Me(), o = n?.resolvers?.jobPosting, s = Y(), i = n?.urls?.jobPosting?.(e), a = ee(
    () => (l) => ({
      title: l.title,
      description: [l.status, l.location].filter(Boolean).join(" · "),
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [s, i]
  ), d = ee(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [t, s, i]
  );
  return o ? /* @__PURE__ */ r(
    Ve,
    {
      id: e,
      trigger: /* @__PURE__ */ r(Fr, { label: t }),
      resolver: o,
      mapToCard: a,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
function c4({ rows: e }) {
  return e.length === 0 ? null : /* @__PURE__ */ r("div", { className: "flex flex-col gap-2", children: e.map((t, n) => /* @__PURE__ */ c("div", { className: "flex flex-col", children: [
    t.label && /* @__PURE__ */ r("p", { className: "text-f1-foreground-secondary", children: t.label }),
    /* @__PURE__ */ r("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: t.value })
  ] }, t.label ?? n)) });
}
const Nr = p(
  ({ label: e, ...t }, n) => /* @__PURE__ */ r(
    "button",
    {
      ref: n,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        me()
      ),
      ...t,
      children: e
    }
  )
);
Nr.displayName = "RequisitionTrigger";
function l4({
  id: e,
  label: t
}) {
  const { entityRefs: n } = Me(), o = n?.resolvers?.requisition, s = Y(), i = n?.urls?.requisition?.(e), a = ee(
    () => (l) => {
      const u = l.lineManager ? `${l.lineManager.firstName} ${l.lineManager.lastName}` : void 0, g = [
        l.status ? {
          label: s.t("ai.entityRef.requisition.status"),
          value: /* @__PURE__ */ r("div", { className: "flex items-center pt-1", children: /* @__PURE__ */ r(
            Rs,
            {
              text: l.status,
              variant: l.statusVariant ?? "neutral"
            }
          ) })
        } : void 0,
        l.lineManager ? {
          label: s.t("ai.entityRef.requisition.lineManager"),
          value: /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 pt-1", children: [
            /* @__PURE__ */ r(
              _t,
              {
                firstName: l.lineManager.firstName,
                lastName: l.lineManager.lastName,
                src: l.lineManager.avatarUrl,
                size: "xs"
              }
            ),
            /* @__PURE__ */ r("span", { children: u })
          ] })
        } : void 0,
        l.reason ? {
          label: s.t("ai.entityRef.requisition.reason"),
          value: l.reason
        } : void 0
      ].filter(
        (m) => m !== void 0
      );
      return {
        title: l.title,
        ...l.location && { description: l.location },
        ...g.length > 0 && {
          children: /* @__PURE__ */ r(c4, { rows: g })
        },
        ...i && {
          secondaryActions: {
            label: s.t("ai.view"),
            href: i
          }
        }
      };
    },
    [s, i]
  ), d = ee(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [t, s, i]
  );
  return o ? /* @__PURE__ */ r(
    Ve,
    {
      id: e,
      trigger: /* @__PURE__ */ r(Nr, { label: t }),
      resolver: o,
      mapToCard: a,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
const Sr = p(
  ({ label: e, ...t }, n) => /* @__PURE__ */ c(
    "button",
    {
      ref: n,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        me()
      ),
      ...t,
      children: [
        "@",
        e
      ]
    }
  )
);
Sr.displayName = "PersonTrigger";
function d4({ id: e, label: t }) {
  const { entityRefs: n } = Me(), o = n?.resolvers?.person, s = Y(), i = n?.urls?.person?.(e), a = ee(
    () => (l) => ({
      avatar: {
        type: "person",
        firstName: l.firstName,
        lastName: l.lastName,
        src: l.avatarUrl
      },
      title: `${l.firstName} ${l.lastName}`,
      description: l.jobTitle,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [s, i]
  ), d = ee(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [t, s, i]
  );
  return o ? /* @__PURE__ */ r(
    Ve,
    {
      id: e,
      trigger: /* @__PURE__ */ r(Sr, { label: t }),
      resolver: o,
      mapToCard: a,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
const Vr = p(
  ({ label: e, ...t }, n) => /* @__PURE__ */ r(
    "button",
    {
      ref: n,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        me()
      ),
      ...t,
      children: e
    }
  )
);
Vr.displayName = "VacancyTrigger";
function f4({ id: e, label: t }) {
  const { entityRefs: n } = Me(), o = n?.resolvers?.vacancy, s = Y(), i = n?.urls?.vacancy?.(e), a = ee(
    () => (l) => ({
      title: l.name,
      description: [l.status, l.vacancyType].filter(Boolean).join(" · "),
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [s, i]
  ), d = ee(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [t, s, i]
  );
  return o ? /* @__PURE__ */ r(
    Ve,
    {
      id: e,
      trigger: /* @__PURE__ */ r(Vr, { label: t }),
      resolver: o,
      mapToCard: a,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
const u4 = {
  person: d4,
  candidate: s4,
  expense: i4,
  "job-posting": a4,
  requisition: l4,
  vacancy: f4
};
function h4(e) {
  return u4[e];
}
function p1(e) {
  return typeof e == "string" ? e : typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(p1).join("") : e && typeof e == "object" && "props" in e ? p1(e.props.children) : "";
}
function g4({
  type: e,
  id: t,
  children: n
}) {
  if (!t || !e)
    return /* @__PURE__ */ r("span", { children: n });
  const o = p1(n), s = h4(e);
  return s ? /* @__PURE__ */ r(s, { id: t, label: o }) : /* @__PURE__ */ r("span", { children: n });
}
const g9 = {
  p: J2,
  h1: e4,
  h2: t4,
  h3: r4,
  a: z2,
  strong: n4,
  em: o4,
  li: q2,
  pre: D2,
  code: Z2,
  blockquote: _2,
  hr: O2,
  ul: G2,
  ol: W2,
  table: Y2,
  th: K2,
  td: Q2,
  img: U2,
  "entity-ref": g4
};
function Tr({
  avatar: e,
  title: t,
  description: n,
  isActive: o = !1,
  action: s,
  children: i
}) {
  const a = Y(), d = s.type === "open", l = d ? o ? s.onClose : s.onOpen : void 0;
  return /* @__PURE__ */ c(
    "div",
    {
      className: k(
        "flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2",
        d && "cursor-pointer",
        o ? "border-f1-border-hover" : "border-f1-border-secondary"
      ),
      onClick: l,
      children: [
        /* @__PURE__ */ c("div", { className: "flex w-full min-w-0 flex-row items-center gap-3", children: [
          e?.type === "module" && /* @__PURE__ */ r(Ot, { module: e.module, size: "lg" }),
          e?.type === "file" && /* @__PURE__ */ r(Fs, { file: e.file, size: "lg" }),
          /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ r(ce, { className: "text-lg font-semibold text-f1-foreground", children: t }),
            n && /* @__PURE__ */ r(ce, { className: "text-base text-f1-foreground-secondary", children: n })
          ] }),
          s.type === "open" && s.showButton !== !1 && /* @__PURE__ */ r(
            pe,
            {
              variant: "outline",
              size: "md",
              label: o ? a.actions.close : a.ai.reportCard.openButton,
              onClick: o ? s.onClose : s.onOpen
            }
          ),
          s.type === "custom" && /* @__PURE__ */ r(
            pe,
            {
              variant: "outline",
              size: "md",
              icon: s.icon,
              label: s.label,
              hideLabel: s.hideLabel,
              onClick: s.onClick
            }
          )
        ] }),
        i
      ]
    }
  );
}
Tr.displayName = "F0CanvasCard";
const N1 = Ye(null);
function p9({
  children: e
}) {
  const [t, n] = P(0), o = I([]), s = q(
    (a) => {
      const d = o.current, l = d.findIndex(
        (f) => f.formName === a.formName && f.customFieldName === a.customFieldName
      ), u = a;
      l >= 0 ? d[l] = u : d.push(u), n((f) => f + 1);
    },
    []
  ), i = ee(
    () => ({
      formatters: [...o.current],
      setFormCardValueFormatter: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, t]
  );
  return /* @__PURE__ */ r(N1.Provider, { value: i, children: e });
}
function p4(e) {
  const n = Pe(N1)?.formatters;
  return ee(() => !n || n.length === 0 ? null : (o, s, i) => {
    let a, d = -1;
    for (const l of n) {
      const u = l.formName === void 0 || l.formName === e, f = l.customFieldName === void 0 || l.customFieldName === i.customFieldName;
      if (!u || !f) continue;
      let g = 0;
      l.formName !== void 0 && (g += 2), l.customFieldName !== void 0 && (g += 1), g > d && (d = g, a = l);
    }
    if (a)
      return a.format(s, { key: o, ...i });
  }, [n, e]);
}
function m9() {
  const e = Pe(N1);
  if (!e)
    throw new Error(
      "useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider"
    );
  return e.setFormCardValueFormatter;
}
const U1 = 7, m4 = 625, z1 = /* @__PURE__ */ new Set();
function C4(e) {
  return typeof DOMParser < "u" ? new DOMParser().parseFromString(e, "text/html").body.textContent?.replace(/\s+/g, " ").trim() ?? "" : e.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
function v4(e) {
  return e && e.charAt(0).toUpperCase() + e.slice(1);
}
function w4(e) {
  const { days: t, hours: n, minutes: o, seconds: s } = Ss(e), i = [];
  return t > 0 && i.push(`${t}d`), n > 0 && i.push(`${n}h`), o > 0 && i.push(`${o}m`), (s > 0 || i.length === 0) && i.push(`${s}s`), i.join(" ");
}
function G1(e) {
  if (e instanceof Date) return !0;
  if (typeof e != "string") return !1;
  const t = new Date(e);
  return !Number.isNaN(t.getTime());
}
function W1(e) {
  return (e instanceof Date ? e : new Date(e)).toLocaleDateString();
}
function q1(e) {
  return e.type === "item" ? e.text : "";
}
function Hr(e, t) {
  if (e == null || e === "") return { type: "item", text: "—" };
  if (t === "duration" && typeof e == "number")
    return { type: "item", text: w4(e) };
  if (t === "richtext" && typeof e == "object" && e !== null && "value" in e) {
    const n = e.value;
    return { type: "item", text: (n ? C4(n) : "") || "—" };
  }
  if (t === "daterange" && typeof e == "object" && e !== null && "from" in e && "to" in e) {
    const { from: n, to: o } = e, s = G1(n) ? W1(n) : String(n), i = G1(o) ? W1(o) : String(o);
    return { type: "item", text: `${s} – ${i}` };
  }
  if (e instanceof Date)
    return { type: "item", text: e.toLocaleDateString() };
  if (typeof e == "boolean")
    return { type: "item", text: e ? "Yes" : "No" };
  if (Array.isArray(e))
    return { type: "item", text: e.map((o) => {
      const s = Hr(o);
      return Array.isArray(s) ? s.map(q1).join(", ") : q1(s);
    }).filter(Boolean).join(", ") || "—" };
  if (typeof e == "object" && e !== null) {
    const n = e;
    return typeof n.label == "string" ? { type: "item", text: n.label } : typeof n.name == "string" ? { type: "item", text: n.name } : typeof n.text == "string" ? { type: "item", text: n.text } : { type: "item", text: JSON.stringify(e) };
  }
  return { type: "item", text: v4(String(e)) };
}
function Ar({
  formName: e,
  formDescription: t,
  module: n,
  cardTitle: o,
  cardDescription: s,
  fieldDescriptions: i,
  formValues: a,
  valueFormatter: d
}) {
  const { canvasContent: l, openCanvas: u, closeCanvas: f } = Me(), g = p4(e), m = d ?? g, h = I(() => {
  }), C = o ?? e, v = s ?? t ?? "", w = l?.type === "form" && l.formName === e, x = () => u({
    type: "form",
    title: C,
    description: v,
    formName: e,
    formDescription: t,
    formModule: n
  });
  h.current = x, X(() => {
    typeof window > "u" || window.innerWidth < m4 || z1.has(e) || (z1.add(e), h.current());
  }, [e]);
  const N = i && a ? Object.entries(i).map(([y, L]) => {
    const H = a[y], b = m?.(y, H, {
      fieldType: L.fieldType,
      customFieldName: L.customFieldName
    });
    if (!b && L.fieldType === "custom" && typeof H == "object" && H !== null)
      return null;
    const A = b ?? Hr(H, L.fieldType), V = ["richtext", "textarea"];
    return {
      label: L.label,
      content: A,
      verticalLayout: V.includes(L.fieldType ?? "")
    };
  }).filter((y) => {
    if (!y) return !1;
    const L = Array.isArray(y.content) ? y.content[0] : y.content;
    return !(L?.type === "item" && L.text === "—");
  }) : [], T = N.slice(0, U1), E = N.length > U1;
  return /* @__PURE__ */ r(
    Tr,
    {
      avatar: n ? { type: "module", module: n } : void 0,
      title: C,
      description: v,
      isActive: w,
      action: {
        type: "open",
        onOpen: x,
        onClose: f,
        showButton: w
      },
      children: T.length > 0 && !w && /* @__PURE__ */ r("div", { className: "-mx-3 flex w-full flex-col overflow-hidden pb-1", children: /* @__PURE__ */ r(
        Ns,
        {
          details: T.map((y) => ({
            title: y.label,
            content: y.content,
            ...y.verticalLayout && { verticalLayout: !0 }
          })),
          showSeeMore: E,
          onClickSeeMore: x,
          tableView: !0
        }
      ) })
    }
  );
}
Ar.displayName = "FormCard";
function x4() {
  const e = Vs(), t = e?.activeForm;
  if (!t) return null;
  const n = t.cardTitle, o = t.cardDescription, s = (e?.getFillVersion(t.formName) ?? 0) > 0;
  return !n || !o || !s ? null : /* @__PURE__ */ r("div", { className: "mt-2 w-full", children: /* @__PURE__ */ r(
    Ar,
    {
      formName: t.formName,
      formDescription: t.description,
      module: t.module,
      cardTitle: n,
      cardDescription: o,
      fieldDescriptions: t.fieldDescriptions,
      formValues: t.formValues
    }
  ) });
}
const k4 = 2;
function b4(e, t) {
  if (!e.intersectsNode(t)) return null;
  const n = document.createRange();
  n.selectNodeContents(t);
  const o = e.cloneRange();
  o.compareBoundaryPoints(Range.START_TO_START, n) < 0 && o.setStart(n.startContainer, n.startOffset), o.compareBoundaryPoints(Range.END_TO_END, n) > 0 && o.setEnd(n.endContainer, n.endOffset);
  const s = o.toString().trim();
  if (s.length < k4) return null;
  const i = o.getBoundingClientRect();
  return { rect: i.width > 0 || i.height > 0 ? i : t.getBoundingClientRect(), text: s };
}
function Br({
  containerRef: e,
  enabled: t = !0
}) {
  const [n, o] = P(null), s = q(() => o(null), []);
  return X(() => {
    if (!t || typeof window > "u") return;
    const i = e.current;
    if (!i) return;
    const a = () => {
      const u = window.getSelection();
      if (!u || u.isCollapsed || u.rangeCount === 0) {
        o(null);
        return;
      }
      o(b4(u.getRangeAt(0), i));
    }, d = () => {
      window.setTimeout(a, 0);
    }, l = () => {
      const u = window.getSelection();
      (!u || u.isCollapsed || u.rangeCount === 0) && o(null);
    };
    return document.addEventListener("mouseup", d), document.addEventListener("keyup", d), document.addEventListener("selectionchange", l), () => {
      document.removeEventListener("mouseup", d), document.removeEventListener("keyup", d), document.removeEventListener("selectionchange", l);
    };
  }, [e, t]), { anchor: n, clear: s };
}
const X1 = 8, Be = 8;
function $r({ anchor: e, onReply: t }) {
  const n = Y(), o = I(null), [s, i] = P(
    null
  );
  if (Ct(() => {
    if (!e) {
      i(null);
      return;
    }
    const d = o.current;
    if (!d) return;
    const l = d.offsetWidth, u = d.offsetHeight, f = window.innerWidth, g = window.innerHeight;
    let m = e.rect.top - u - X1;
    m < Be && (m = e.rect.bottom + X1), m = Math.min(
      Math.max(m, Be),
      g - u - Be
    );
    const h = e.rect.left + e.rect.width / 2 - l / 2, C = Math.min(
      Math.max(h, Be),
      f - l - Be
    );
    i({ top: m, left: C });
  }, [e]), typeof document > "u" || !e) return null;
  const a = n.ai.reply;
  return Kt(
    /* @__PURE__ */ r(
      "div",
      {
        style: {
          position: "fixed",
          top: s?.top ?? -9999,
          left: s?.left ?? -9999,
          visibility: s ? "visible" : "hidden"
        },
        className: k(
          "z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary",
          "drop-shadow"
        ),
        children: /* @__PURE__ */ r(
          fe,
          {
            ref: o,
            type: "button",
            variant: "ghost",
            label: a,
            icon: Ht,
            onClick: () => {
              t(e.text);
            }
          }
        )
      }
    ),
    document.body
  );
}
const Ir = Ye(void 0), C9 = () => Pe(Ir), L4 = (e) => /* @__PURE__ */ r(Ut, { content: e, format: "markdown" }), y4 = ({
  isGenerating: e,
  isLoading: t,
  message: n,
  renderToolCall: o,
  onReplyQuote: s,
  onRendered: i,
  renderMarkdown: a
}) => {
  const d = typeof n?.content == "string" ? n.content : "", l = (n && o?.(n)) ?? n?.generativeUI?.() ?? null, u = n?.toolCalls?.[0]?.id, f = !d && !l, g = I(null), { anchor: m, clear: h } = Br({
    containerRef: g,
    enabled: !!(n?.id && d)
  });
  return X(() => {
    n?.id && !t && !e && i?.(n);
  }, [n, t, e, i]), !t && !e && f ? null : /* @__PURE__ */ r(Ir.Provider, { value: u, children: /* @__PURE__ */ c("div", { className: "relative isolate flex w-full flex-col items-start justify-center", children: [
    n && d && /* @__PURE__ */ r(
      "div",
      {
        ref: g,
        className: "w-full max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: (a ?? L4)(d)
      }
    ),
    !!l && /* @__PURE__ */ r("div", { className: "w-full", children: l }),
    /* @__PURE__ */ r(
      $r,
      {
        anchor: m,
        onReply: (C) => {
          s?.(C), h(), window.getSelection()?.removeAllRanges();
        }
      }
    )
  ] }) });
}, M4 = ({
  onClose: e,
  onSubmit: t,
  reactionType: n,
  message: o
}) => {
  const [s, i] = P(""), a = Y(), { title: d, label: l, placeholder: u } = n === "like" ? a.ai.feedbackModal.positive : a.ai.feedbackModal.negative, f = q(() => {
    t(o, s);
  }, [s, o, t]), g = () => {
    e(o);
  };
  return X(() => {
    const m = (h) => {
      h.key === "Enter" && (h.preventDefault(), f());
    };
    return document.addEventListener("keydown", m), () => {
      document.removeEventListener("keydown", m);
    };
  }, [f]), /* @__PURE__ */ r(
    Ts,
    {
      position: "center",
      isOpen: !0,
      onClose: g,
      width: "md",
      title: d,
      container: null,
      primaryAction: {
        label: a.actions.send,
        onClick: f
      },
      secondaryAction: {
        label: a.actions.cancel,
        onClick: g
      },
      children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ r(
        Hs,
        {
          autoFocus: !0,
          label: l,
          placeholder: u,
          value: s,
          onChange: (m) => i(m.trim()),
          size: "md",
          type: "text"
        }
      ) })
    }
  );
}, Pr = Ye(null), E4 = ({ children: e }) => {
  const [t, n] = P(null), o = t ? {
    isOpen: !0,
    currentReaction: t.action,
    currentMessage: t.message,
    open: (s, i) => n({ action: s, message: i }),
    close: () => n(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (s, i) => n({ action: s, message: i }),
    close: () => n(null)
  };
  return /* @__PURE__ */ r(Pr.Provider, { value: o, children: e });
}, jr = () => {
  const e = Pe(Pr);
  if (e === null)
    throw new Error(
      "useFeedbackModal must be used within a FeedbackModalProvider"
    );
  return e;
};
function R4(e) {
  const t = jr();
  return { modal: t, handleSubmit: (s, i) => {
    (t.currentReaction === "like" ? e.onThumbsUp : e.onThumbsDown)?.(s, { threadId: e.threadId, feedback: i }), t.close();
  }, handleClose: (s) => {
    (t.currentReaction === "like" ? e.onThumbsUp : e.onThumbsDown)?.(s, { threadId: e.threadId, feedback: "" }), t.close();
  } };
}
const F4 = ({
  content: e,
  targetMessage: t,
  onCopy: n
}) => {
  const o = Y(), { open: s } = jr(), [i, a] = P(null);
  return /* @__PURE__ */ c("div", { className: "flex", children: [
    /* @__PURE__ */ r(
      As,
      {
        size: "md",
        variant: "ghost",
        valueToCopy: e,
        onCopy: (d) => {
          d.currentTarget.blur(), n?.(e);
        }
      }
    ),
    /* @__PURE__ */ r(
      Ie,
      {
        onClick: (d) => {
          const l = i === "like" ? null : "like";
          l && s(l, t), a(l), d.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": o.actions.thumbsUp,
        children: /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ r(
          le,
          {
            size: "md",
            icon: i === "like" ? cr : ar,
            color: "default"
          }
        ) })
      }
    ),
    /* @__PURE__ */ r(
      Ie,
      {
        onClick: (d) => {
          const l = i === "dislike" ? null : "dislike";
          l && s(l, t), a(l), d.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": o.actions.thumbsDown,
        children: /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ r(
          le,
          {
            size: "md",
            icon: i === "dislike" ? ir : sr,
            color: "default"
          }
        ) })
      }
    )
  ] });
}, Y1 = ({ position: e }) => /* @__PURE__ */ r(
  oe.div,
  {
    transition: { duration: 0.2, ease: "easeOut" },
    className: k(
      // Inset 1px on both sides so the gradient and the thin `::after` rule
      // never sit flush against the chat panel's left/right edge. Matters in
      // canvas mode: the chat has `border-l-0` there and the ResizeHandle
      // (1px, transparent) lives right at that edge; without this inset the
      // opaque top of the gradient paints next to the handle and visually
      // swallows it. In non-canvas mode the 1px sits inside the chat's own
      // border so the change is imperceptible.
      "pointer-events-none absolute inset-x-px z-[5] after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-f1-background-inverse-secondary after:opacity-[0.04] after:content-['']",
      e === "top" ? [
        "top-0",
        "h-6",
        "bg-gradient-to-b from-f1-background dark:from-f1-background-secondary to-transparent",
        "after:top-0"
      ] : [
        "bottom-0",
        "h-6",
        "bg-gradient-to-t from-f1-background dark:from-f1-background-secondary to-transparent",
        "after:bottom-0"
      ]
    )
  }
), N4 = ({
  icon: e,
  title: t,
  children: n,
  open: o,
  defaultOpen: s = !1,
  onOpenChange: i,
  lockOpen: a = !1
}) => {
  const [d, l] = P(s), u = ye(), f = o !== void 0, g = f ? o : d;
  return /* @__PURE__ */ c(
    zt,
    {
      className: "mb-1 w-full",
      open: g,
      onOpenChange: (h) => {
        a || (f || l(h), i?.(h));
      },
      children: [
        /* @__PURE__ */ c(
          Gt,
          {
            disabled: a,
            className: k(
              "gap-1",
              a ? "flex w-full items-center text-base text-f1-foreground-secondary" : "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90"
            ),
            children: [
              /* @__PURE__ */ r("span", { className: "flex items-center justify-start h-6 w-6", children: /* @__PURE__ */ r(le, { icon: e, className: "block" }) }),
              /* @__PURE__ */ r("div", { className: "min-h-6 flex items-center", children: /* @__PURE__ */ r("span", { children: t }) }),
              !a && /* @__PURE__ */ r(le, { icon: Ke })
            ]
          }
        ),
        /* @__PURE__ */ r(Wt, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ r(
          oe.div,
          {
            initial: !1,
            animate: {
              height: g ? "auto" : 0,
              opacity: g ? 1 : 0,
              visibility: g ? "visible" : "hidden"
            },
            transition: {
              duration: u ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: n
          }
        ) })
      ]
    }
  );
}, S4 = ({
  titles: e,
  title: t,
  inProgress: n,
  isWriting: o
}) => {
  const s = Y(), [i, a] = P(!!n), d = I(n);
  X(() => {
    d.current && !n ? a(!1) : n && !i && a(!0), d.current = n;
  }, [n, i]);
  const l = n ? s.ai.thoughtsGroupTitle : t ?? s.ai.thoughtsGroupTitle, u = e.length - 1, f = (g) => !n || o ? "completed" : g === u ? "executing" : "completed";
  return /* @__PURE__ */ r(
    N4,
    {
      icon: tr,
      title: l,
      open: i,
      onOpenChange: a,
      lockOpen: n,
      children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3 pb-4", children: e.map((g, m) => /* @__PURE__ */ c("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          u1,
          {
            title: g,
            status: f(m),
            inGroup: !0
          }
        ),
        m < e.length - 1 && /* @__PURE__ */ r(
          "div",
          {
            "aria-hidden": !0,
            className: "absolute -bottom-3 left-2 ml-px top-5 w-px bg-f1-border-secondary rounded"
          }
        )
      ] }, m)) })
    }
  );
};
function V4(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) {
    const t = e.filter((n) => n.type === "text").map((n) => n.text).filter((n) => typeof n == "string");
    return t[t.length - 1];
  }
}
function T4(e, t) {
  const n = Array.isArray(e) ? e.filter((o) => o.type === "binary").map((o) => ({
    url: o.url,
    filename: o.filename,
    mimetype: o.mimeType
  })).filter(
    (o) => typeof o?.filename == "string" && typeof o?.mimetype == "string" && typeof o?.url == "string"
  ) : [];
  return n.length > 0 ? n : (t?.uploadedFiles ?? []).filter(
    (o) => typeof o?.filename == "string" && typeof o?.mimetype == "string" && typeof o?.url == "string"
  );
}
const Dr = (e) => /* @__PURE__ */ r(Ut, { content: e, format: "markdown" }), H4 = ({
  text: e,
  renderMarkdown: t
}) => /* @__PURE__ */ c("div", { className: "flex max-w-[90%] items-start gap-2 self-end pb-1 pr-2 text-f1-foreground-tertiary", children: [
  /* @__PURE__ */ r("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ r(le, { icon: R1 }) }),
  /* @__PURE__ */ r("div", { className: "min-w-0 whitespace-pre-wrap text-base leading-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&_p]:m-0", children: (t ?? Dr)(e) })
] }), A4 = ({
  message: e,
  onReplyQuote: t,
  autoScrollIntoView: n = !0,
  renderMarkdown: o
}) => {
  const s = I(null), i = I(null);
  X(() => {
    !s.current || !n || s.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [n]);
  const a = e.rawData, d = T4(
    e?.content,
    a
  ), l = (V4(e?.content) ?? "").trim(), u = e?.replyQuote ?? null, f = l.length > 0, { anchor: g, clear: m } = Br({
    containerRef: i,
    enabled: f
  });
  return /* @__PURE__ */ c(
    "div",
    {
      ref: s,
      className: "my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0",
      children: [
        u && /* @__PURE__ */ r(H4, { text: u, renderMarkdown: o }),
        d.length > 0 && /* @__PURE__ */ r("div", { className: "flex max-w-[90%] flex-wrap justify-end gap-1.5", children: d.map((h, C) => /* @__PURE__ */ r(
          Zt,
          {
            file: { name: h.filename, type: h.mimetype },
            size: "lg"
          },
          `${h.filename}-${C}`
        )) }),
        f && /* @__PURE__ */ r(
          "div",
          {
            ref: i,
            className: "w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-xl bg-f1-background-tertiary px-4 py-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
            children: (o ?? Dr)(l)
          }
        ),
        /* @__PURE__ */ r(
          $r,
          {
            anchor: g,
            onReply: (h) => {
              t?.(h), m(), window.getSelection()?.removeAllRanges();
            }
          }
        )
      ]
    }
  );
}, B4 = 35, $4 = 22, I4 = 400, P4 = 2500, j4 = 220, D4 = ({
  messages: e,
  onClick: t,
  fullscreen: n = !1
}) => {
  const [o, s] = P(0), [i, a] = P(0), [d, l] = P("starting"), u = e[o] ?? "";
  X(() => {
    e.length > 0 && o >= e.length && (s(0), a(0), l("starting"));
  }, [e.length, o]), X(() => {
    let m;
    if (d === "starting")
      m = setTimeout(() => l("writing"), I4);
    else if (d === "writing")
      i < u.length ? m = setTimeout(() => a((h) => h + 1), B4) : l("holding");
    else if (d === "holding") {
      if (e.length <= 1) return;
      m = setTimeout(() => l("erasing"), P4);
    } else d === "erasing" && (i > 0 ? m = setTimeout(() => a((h) => h - 1), $4) : m = setTimeout(() => {
      s((h) => (h + 1) % e.length), l("starting");
    }, j4));
    return () => {
      m && clearTimeout(m);
    };
  }, [d, i, u.length, e.length]);
  const f = !!t, g = f ? (m) => {
    (m.key === "Enter" || m.key === " ") && (m.preventDefault(), t?.());
  } : void 0;
  return /* @__PURE__ */ r(
    "div",
    {
      className: k(
        "flex w-full flex-1 justify-center px-4",
        n ? "items-end pb-24" : "items-center"
      ),
      children: /* @__PURE__ */ r(
        "p",
        {
          role: f ? "button" : void 0,
          tabIndex: f ? 0 : void 0,
          onClick: t,
          onKeyDown: g,
          className: k(
            "bg-gradient-to-r from-[#E55619] via-[#E51943] to-[#A1ADE5] bg-clip-text text-center text-2xl font-semibold leading-[28px] text-transparent",
            f && k(
              "cursor-pointer transition-transform duration-200",
              "hover:scale-[1.02] focus-visible:scale-[1.02]",
              "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
            )
          ),
          style: { minHeight: 28 },
          "aria-label": u,
          children: u.slice(0, i)
        },
        o
      )
    }
  );
};
function Z4({
  viewportRef: e,
  contentRef: t,
  endRef: n,
  lastTurnRef: o,
  turnsCount: s,
  freezeTurnMinHeight: i = !1
}) {
  const [a, d] = P(0), [l, u] = P(!1), f = I(s), g = I(i);
  g.current = i;
  const m = q(
    (C = "smooth") => {
      n.current?.scrollIntoView({ behavior: C });
    },
    [n]
  );
  X(() => {
    const C = e.current, v = t.current;
    if (!C || !v) return;
    const w = new ResizeObserver(() => {
      if (g.current) return;
      const x = parseFloat(getComputedStyle(v).paddingTop) + parseFloat(getComputedStyle(v).paddingBottom) + 1;
      d(C.clientHeight - x);
    });
    return w.observe(C), w.observe(v), () => w.disconnect();
  }, [e, t]);
  const h = q(() => {
    const C = e.current;
    if (!C) return;
    const { scrollTop: v, scrollHeight: w, clientHeight: x } = C, N = w - v - x;
    u(N > x);
  }, [e]);
  return X(() => {
    const C = e.current;
    if (C)
      return C.addEventListener("scroll", h, { passive: !0 }), () => C.removeEventListener("scroll", h);
  }, [h, e]), X(() => {
    s > f.current && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const C = e.current, v = o.current;
        if (!C || !v) return;
        const w = C.getBoundingClientRect(), x = v.getBoundingClientRect(), N = C.scrollTop + (x.top - w.top);
        C.scrollTo({ top: N, behavior: "smooth" });
      });
    }), s === 0 && u(!1), f.current = s;
  }, [s, o, e]), { showScrollBtn: l, turnMinHeight: a, scrollToBottom: m };
}
const _4 = {
  threadId: "",
  onThumbsUp: () => {
  },
  onThumbsDown: () => {
  }
}, v9 = (e) => /* @__PURE__ */ r(E4, { children: /* @__PURE__ */ r(O4, { ...e }) }), O4 = ({
  turns: e,
  isLoadingThread: t = !1,
  interrupt: n,
  initialMessage: o,
  onWelcomeClick: s,
  renderToolCall: i,
  onReplyQuote: a,
  onAssistantMessageRendered: d,
  autoScrollUserIntoView: l = !0,
  renderMarkdown: u,
  feedback: f,
  freezeLayout: g = !1,
  noShadows: m = !1,
  fullscreen: h = !1,
  children: C,
  AssistantMessage: v,
  UserMessage: w,
  onRegenerate: x,
  onCopy: N
}) => {
  const { modal: T, handleSubmit: E, handleClose: y } = R4(
    f ?? _4
  ), L = Y(), H = v ?? y4, b = w ?? A4, A = ee(() => {
    const D = o ?? L.ai.defaultInitialMessage;
    return (Array.isArray(D) ? D : [D]).filter((W) => typeof W == "string" && W.length > 0);
  }, [o, L.ai.defaultInitialMessage]), V = !t && e.length === 0 && A.length > 0, R = I(null), $ = I(null), _ = I(null), z = I(null), G = I(null), { showScrollBtn: re, turnMinHeight: K, scrollToBottom: O } = Z4({
    viewportRef: R,
    contentRef: $,
    endRef: _,
    lastTurnRef: G,
    turnsCount: e.length,
    freezeTurnMinHeight: g
  }), Z = (D, Q) => {
    const W = Q === e.length - 1, he = {
      renderToolCall: i,
      onReplyQuote: a,
      onRendered: d,
      autoScrollIntoView: l,
      renderMarkdown: u
    }, ge = (ne, se) => {
      const de = {
        message: ne,
        inProgress: D.isInProgress,
        index: se,
        isCurrentMessage: !1,
        AssistantMessage: H,
        UserMessage: b,
        onRegenerate: x,
        onCopy: N,
        rawData: ne.rawData || {},
        ...he
      };
      return /* @__PURE__ */ r(
        b,
        {
          ...de
        },
        `${Q}-u-${se}`
      );
    }, ie = (ne, se) => {
      const de = W && se === D.assistantMessages.length - 1, M = D.userMessages.length + se, S = {
        message: ne,
        inProgress: D.isInProgress,
        index: M,
        isCurrentMessage: de,
        AssistantMessage: H,
        UserMessage: b,
        onRegenerate: x,
        onCopy: N,
        rawData: ne.rawData || {},
        ...he
      };
      return /* @__PURE__ */ r(
        H,
        {
          ...S,
          isGenerating: D.isInProgress && de,
          isLoading: D.isInProgress && de && !ne.content
        },
        `${Q}-a-${se}`
      );
    };
    return /* @__PURE__ */ c(
      "div",
      {
        ref: W ? G : void 0,
        className: k(
          "flex flex-col items-start justify-start gap-2 px-1",
          W && "pb-5"
        ),
        style: {
          minHeight: W && K || void 0
        },
        children: [
          D.userMessages.map(
            (ne, se) => ge(ne, se)
          ),
          D.thinking && D.thinking.titles.length > 0 && /* @__PURE__ */ r(
            S4,
            {
              titles: D.thinking.titles,
              title: L.ai.thoughtsGroupTitle,
              inProgress: D.thinking.inProgress,
              isWriting: D.thinking.isWriting
            }
          ),
          D.assistantMessages.map(
            (ne, se) => ie(ne, se)
          ),
          D.endIndicator === "thinking" && /* @__PURE__ */ r(u1, { title: L.ai.thinking, status: "executing" }),
          D.endIndicator === "activity" && /* @__PURE__ */ r(u1, { status: "writing" }),
          D.feedback && /* @__PURE__ */ r(
            F4,
            {
              content: D.feedback.content,
              targetMessage: D.feedback.targetMessage,
              onCopy: N
            }
          ),
          W && /* @__PURE__ */ r(x4, {})
        ]
      },
      `turn-${Q}`
    );
  };
  return /* @__PURE__ */ c(xe, { children: [
    /* @__PURE__ */ c("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ r(
        "div",
        {
          ref: R,
          className: k(
            "flex-1 overflow-y-scroll",
            "[scrollbar-width:thin] [scrollbar-color:transparent_transparent]",
            "hover:[scrollbar-color:var(--scrollbar-thumb)_transparent]",
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent",
            "hover:[&::-webkit-scrollbar-thumb]:bg-f1-background-inverse/30"
          ),
          children: /* @__PURE__ */ c(
            "div",
            {
              ref: $,
              className: k("flex h-full flex-col items-center p-4"),
              children: [
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: k(
                      V ? "flex flex-1" : "flex flex-col gap-6",
                      "w-full max-w-content"
                    ),
                    children: [
                      t && /* @__PURE__ */ r(U4, {}),
                      V && /* @__PURE__ */ r(
                        D4,
                        {
                          messages: A,
                          onClick: s,
                          fullscreen: h
                        }
                      ),
                      !t && e.map((D, Q) => Z(D, Q)),
                      n
                    ]
                  }
                ),
                /* @__PURE__ */ r("div", { ref: z, className: "h-px shrink-0", "aria-hidden": !0 }),
                /* @__PURE__ */ r("footer", { className: "copilotKitMessagesFooter", ref: _, children: C }),
                /* @__PURE__ */ r(Ne, { children: re && /* @__PURE__ */ r(
                  oe.div,
                  {
                    className: "sticky bottom-2 z-10 flex justify-center",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.8 },
                    transition: { duration: 0.2 },
                    children: /* @__PURE__ */ r("div", { className: "rounded bg-f1-background", children: /* @__PURE__ */ r(
                      fe,
                      {
                        onClick: () => O(),
                        label: L.ai.scrollToBottom,
                        variant: "neutral",
                        icon: bt,
                        hideLabel: !0
                      }
                    ) })
                  }
                ) })
              ]
            }
          )
        }
      ),
      !m && !V && /* @__PURE__ */ c(xe, { children: [
        /* @__PURE__ */ r(Y1, { position: "top" }, "shadow-top"),
        /* @__PURE__ */ r(Y1, { position: "bottom" }, "shadow-bottom")
      ] })
    ] }),
    T.isOpen && /* @__PURE__ */ r(
      M4,
      {
        onSubmit: E,
        onClose: y,
        reactionType: T.currentReaction,
        message: T.currentMessage
      }
    )
  ] });
}, U4 = () => /* @__PURE__ */ r("div", { className: "flex h-full w-full max-w-content flex-col gap-6", children: /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ r("div", { className: "flex justify-end", children: /* @__PURE__ */ r(ue, { className: "h-12 w-2/5 rounded-full" }) }),
  /* @__PURE__ */ r(ue, { className: "mt-6 h-5 w-full rounded-md" }),
  /* @__PURE__ */ r(ue, { className: "h-5 w-2/5 rounded-md" }),
  /* @__PURE__ */ r(ue, { className: "h-5 w-4/5 rounded-md" })
] }) }), w9 = {
  ai: Ys.ai
}, Zr = Ye(null);
function x9({
  children: e,
  translations: t
}) {
  return /* @__PURE__ */ r(Zr.Provider, { value: t, children: e });
}
function k9() {
  const e = Pe(Zr);
  if (e === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return e;
}
function z4() {
  const { canvasEntities: e } = Me();
  return e;
}
function b9(e) {
  const t = z4();
  if (!(!e || !t))
    return t[e];
}
const G4 = ({
  canProceed: e,
  submitDisabled: t,
  label: n,
  onConfirm: o,
  onSkip: s,
  showSkip: i
}) => {
  const a = Y();
  return /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-3 p-3", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center", children: i && s && /* @__PURE__ */ r(
      pe,
      {
        variant: "outline",
        label: a.ai.clarifyingQuestion.skip,
        onClick: s,
        disabled: t
      }
    ) }),
    /* @__PURE__ */ r(
      pe,
      {
        disabled: !e || t,
        variant: "default",
        label: n,
        onClick: o
      }
    )
  ] });
}, _r = ({ isSelected: e }) => /* @__PURE__ */ r(
  "div",
  {
    className: k(
      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
      e ? "bg-f1-background-selected-bold" : "border-2 border-solid border-f1-border bg-f1-background"
    ),
    children: e && /* @__PURE__ */ r("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
  }
), W4 = ({
  mode: e,
  hasSelection: t,
  hasCustomText: n,
  customAnswerText: o,
  isCustomAnswerActive: s,
  canProceed: i,
  inputRef: a,
  onActivate: d,
  onChangeText: l,
  onToggleActive: u,
  onConfirm: f
}) => {
  const m = Y().ai.clarifyingQuestion.typeYourAnswer, h = e === "single" ? /* @__PURE__ */ r(_r, { isSelected: n && !t }) : /* @__PURE__ */ r(
    qt,
    {
      checked: s,
      onCheckedChange: () => u(!s),
      title: m,
      hideLabel: !0
    }
  );
  return /* @__PURE__ */ c(
    "div",
    {
      className: k(
        "flex items-center gap-2 rounded-md px-2 py-2",
        "transition-colors hover:bg-f1-background-hover"
      ),
      children: [
        h,
        /* @__PURE__ */ r(
          "input",
          {
            ref: a,
            type: "text",
            value: o ?? "",
            onChange: (C) => l(C.target.value),
            onFocus: d,
            onKeyDown: (C) => {
              C.key === "Enter" && i && (C.preventDefault(), f());
            },
            placeholder: m,
            "aria-label": m,
            className: "min-w-0 flex-1 bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          }
        )
      ]
    }
  );
}, Or = p(
  ({ option: e, isSelected: t, mode: n, isTabStop: o, onToggle: s, onKeyNavigate: i }, a) => n === "single" ? /* @__PURE__ */ c(
    "div",
    {
      ref: a,
      role: "radio",
      "aria-checked": t,
      tabIndex: o ? 0 : -1,
      className: k(
        "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary",
        me()
      ),
      onClick: () => s(e.id),
      onKeyDown: (d) => {
        if (d.key === " " || d.key === "Enter") {
          d.preventDefault(), s(e.id);
          return;
        }
        i?.(d);
      },
      children: [
        /* @__PURE__ */ r(_r, { isSelected: t }),
        /* @__PURE__ */ r("span", { className: "text-base font-medium text-f1-foreground", children: e.label })
      ]
    }
  ) : /* @__PURE__ */ c(
    "div",
    {
      ref: a,
      className: k(
        "flex cursor-pointer items-center rounded-md pl-2 transition-colors hover:bg-f1-background-secondary"
      ),
      children: [
        /* @__PURE__ */ r(
          qt,
          {
            checked: t,
            onCheckedChange: () => s(e.id),
            title: e.label,
            hideLabel: !0
          }
        ),
        /* @__PURE__ */ r(
          "span",
          {
            className: "w-full py-2 pl-2 pr-2 text-base font-medium text-f1-foreground",
            onClick: () => s(e.id),
            children: e.label
          }
        )
      ]
    }
  )
);
Or.displayName = "OptionRow";
const q4 = ({
  mode: e,
  question: t,
  options: n,
  selectedOptionIds: o,
  allowCustomAnswer: s,
  hasSelection: i,
  hasCustomText: a,
  customAnswerText: d,
  isCustomAnswerActive: l,
  canProceed: u,
  customInputRef: f,
  autoFocus: g,
  onToggleOption: m,
  onActivateCustom: h,
  onChangeCustomText: C,
  onToggleCustomActive: v,
  onConfirm: w
}) => {
  const x = ye(), N = (() => {
    if (e !== "single") return 0;
    const H = n.findIndex((b) => o.includes(b.id));
    return H >= 0 ? H : 0;
  })(), [T, E] = P(N), y = I([]);
  X(() => {
    g && e === "single" && y.current[T]?.focus();
  }, []);
  const L = (H) => {
    if (e !== "single") return;
    const b = n.length - 1;
    if (b < 0) return;
    let A = T;
    switch (H.key) {
      case "ArrowDown":
      case "ArrowRight":
        A = T >= b ? 0 : T + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        A = T <= 0 ? b : T - 1;
        break;
      case "Home":
        A = 0;
        break;
      case "End":
        A = b;
        break;
      default:
        return;
    }
    H.preventDefault(), E(A), y.current[A]?.focus();
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: "flex flex-col gap-0 overflow-y-auto px-1.5 py-0.5",
      role: e === "single" ? "radiogroup" : "group",
      "aria-label": t,
      children: [
        n.map((H, b) => /* @__PURE__ */ r(
          oe.div,
          {
            initial: x ? !1 : { opacity: 0, y: 4 },
            animate: { opacity: 1, y: 0 },
            transition: {
              duration: x ? 0 : 0.2,
              ease: [0.4, 0, 0.2, 1],
              delay: x ? 0 : 0.12 + b * 0.06
            },
            children: /* @__PURE__ */ r(
              Or,
              {
                ref: (A) => {
                  y.current[b] = A;
                },
                option: H,
                isSelected: o.includes(H.id),
                mode: e,
                isTabStop: e === "single" ? b === T : void 0,
                onToggle: m,
                onKeyNavigate: L
              }
            )
          },
          H.id
        )),
        s && /* @__PURE__ */ r(
          W4,
          {
            mode: e,
            hasSelection: i,
            hasCustomText: a,
            customAnswerText: d,
            isCustomAnswerActive: l,
            canProceed: u,
            inputRef: f,
            onActivate: h,
            onChangeText: C,
            onToggleActive: v,
            onConfirm: w
          }
        )
      ]
    }
  );
}, X4 = ({
  question: e,
  stepLabel: t,
  isFirstStep: n,
  isFinalStep: o,
  canProceed: s,
  onBack: i,
  onNext: a,
  onCancel: d
}) => {
  const l = Y();
  return /* @__PURE__ */ c("div", { className: "flex items-start gap-0.5 pl-4 pr-3", children: [
    /* @__PURE__ */ r(
      ce,
      {
        className: "min-w-0 flex-1 text-lg font-semibold text-f1-foreground",
        lines: 3,
        children: e
      }
    ),
    t && /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ r(
        pe,
        {
          variant: "ghost",
          size: "sm",
          onClick: i,
          disabled: n,
          label: l.ai.clarifyingQuestion.back,
          hideLabel: !0,
          icon: Lt
        }
      ),
      /* @__PURE__ */ r("span", { className: "text-sm font-semibold text-f1-foreground-tertiary", children: t }),
      /* @__PURE__ */ r(
        pe,
        {
          variant: "ghost",
          size: "sm",
          onClick: a,
          disabled: o || !s,
          label: l.ai.clarifyingQuestion.next,
          hideLabel: !0,
          icon: Ke
        }
      )
    ] }),
    /* @__PURE__ */ r(
      pe,
      {
        variant: "ghost",
        size: "sm",
        onClick: d,
        label: l.actions.cancel,
        hideLabel: !0,
        icon: Le
      }
    )
  ] });
}, Y4 = "easeOut", K4 = 0.3, L9 = ({
  clarifyingQuestion: e,
  isSubmitDisabled: t
}) => /* @__PURE__ */ r(
  Q4,
  {
    clarifyingQuestion: e,
    isSubmitDisabled: t
  }
), Q4 = ({
  clarifyingQuestion: e,
  isSubmitDisabled: t
}) => {
  const n = Y(), o = ye(), {
    currentStep: s,
    currentStepIndex: i,
    totalSteps: a,
    toggleOption: d,
    confirm: l,
    skip: u,
    cancel: f,
    back: g,
    setCustomAnswerText: m,
    setCustomAnswerActive: h,
    activateCustomAnswer: C
  } = e, {
    question: v,
    options: w,
    selectedOptionIds: x,
    selectionMode: N,
    optional: T,
    allowCustomAnswer: E,
    customAnswerText: y,
    isCustomAnswerActive: L
  } = s, H = I(null), b = N ?? "single", A = a > 1, V = i === 0, R = i === a - 1, $ = A ? n.t("ai.clarifyingQuestion.stepOf", {
    current: String(i + 1),
    total: String(a)
  }) : void 0, _ = x.length > 0, z = (y ?? "").trim().length > 0, G = _ || L && z || T === !0, re = t === !0 && R, K = () => {
    re || l();
  }, O = () => {
    re || u();
  }, Z = (ie) => {
    const ne = b === "single" && x.includes(ie);
    d(ie), b === "single" && !R && !ne && Promise.resolve().then(l);
  }, D = R ? n.ai.clarifyingQuestion.submit : n.ai.clarifyingQuestion.next, Q = T === !0 && !_ && !(L && z), W = () => {
    C(), requestAnimationFrame(() => {
      H.current?.focus();
    });
  }, he = (ie) => {
    ie.key === "Escape" && (ie.preventDefault(), f());
  }, ge = o ? 0 : K4 / 2;
  return /* @__PURE__ */ c("div", { className: "flex flex-col", onKeyDown: he, children: [
    /* @__PURE__ */ r("div", { className: "flex flex-col gap-3 pt-3", children: /* @__PURE__ */ r(Ne, { mode: "wait", initial: !1, children: /* @__PURE__ */ c(
      oe.div,
      {
        className: "flex flex-col gap-3",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: ge, ease: Y4 },
        children: [
          /* @__PURE__ */ r(
            X4,
            {
              question: v,
              stepLabel: $,
              isFirstStep: V,
              isFinalStep: R,
              canProceed: G,
              onBack: g,
              onNext: l,
              onCancel: f
            }
          ),
          /* @__PURE__ */ r(
            q4,
            {
              mode: b,
              question: v,
              options: w,
              selectedOptionIds: x,
              allowCustomAnswer: E,
              hasSelection: _,
              hasCustomText: z,
              customAnswerText: y,
              isCustomAnswerActive: L,
              canProceed: G,
              customInputRef: H,
              onToggleOption: Z,
              onActivateCustom: W,
              onChangeCustomText: m,
              onToggleCustomActive: h,
              onConfirm: K
            }
          )
        ]
      },
      i
    ) }) }),
    /* @__PURE__ */ r(
      G4,
      {
        canProceed: G,
        submitDisabled: re,
        label: D,
        onConfirm: K,
        onSkip: O,
        showSkip: Q
      }
    )
  ] });
};
function K1(e, t, n, o) {
  const s = Math.max(1, Math.min(e, t)), i = Math.min(n, 20), d = Math.min(i + o, s), l = Math.min(d, Math.floor(e / 2)), u = Math.min(d, Math.floor(t / 2)), f = (W) => W / e * 2 - 1, g = (W) => W / t * 2 - 1, m = 0, h = e, C = 0, v = t, w = l, x = e - l, N = u, T = t - u, E = f(m), y = f(h), L = g(C), H = g(v), b = f(w), A = f(x), V = g(N), R = g(T), $ = 0, _ = 0, z = 1, G = 1, re = l / e, K = 1 - l / e, O = u / t, Z = 1 - u / t, D = new Float32Array([
    // Top strip
    E,
    L,
    y,
    L,
    E,
    V,
    E,
    V,
    y,
    L,
    y,
    V,
    // Bottom strip
    E,
    R,
    y,
    R,
    E,
    H,
    E,
    H,
    y,
    R,
    y,
    H,
    // Left strip
    E,
    V,
    b,
    V,
    E,
    R,
    E,
    R,
    b,
    V,
    b,
    R,
    // Right strip
    A,
    V,
    y,
    V,
    A,
    R,
    A,
    R,
    y,
    V,
    y,
    R
  ]), Q = new Float32Array([
    // Top strip
    $,
    _,
    z,
    _,
    $,
    O,
    $,
    O,
    z,
    _,
    z,
    O,
    // Bottom strip
    $,
    Z,
    z,
    Z,
    $,
    G,
    $,
    G,
    z,
    Z,
    z,
    G,
    // Left strip
    $,
    O,
    re,
    O,
    $,
    Z,
    $,
    Z,
    re,
    O,
    re,
    Z,
    // Right strip
    K,
    O,
    z,
    O,
    K,
    Z,
    K,
    Z,
    z,
    O,
    z,
    Z
  ]);
  return { positions: D, uvs: Q };
}
function Q1(e, t, n) {
  const o = e.createShader(t);
  if (!o) throw new Error("Failed to create shader");
  if (e.shaderSource(o, n), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) {
    const s = e.getShaderInfoLog(o) || "Unknown shader error";
    throw e.deleteShader(o), new Error(s);
  }
  return o;
}
function J4(e, t, n) {
  const o = Q1(e, e.VERTEX_SHADER, t), s = Q1(e, e.FRAGMENT_SHADER, n), i = e.createProgram();
  if (!i) throw new Error("Failed to create program");
  if (e.attachShader(i, o), e.attachShader(i, s), e.linkProgram(i), !e.getProgramParameter(i, e.LINK_STATUS)) {
    const a = e.getProgramInfoLog(i) || "Unknown link error";
    throw e.deleteProgram(i), e.deleteShader(o), e.deleteShader(s), new Error(a);
  }
  return e.deleteShader(o), e.deleteShader(s), i;
}
const e6 = `#version 300 es
precision lowp float;

in vec2 vUV;
out vec4 outColor;

uniform vec2 uResolution;
uniform float uTime;
uniform float uBorderWidth;
uniform float uGlowWidth;
uniform float uBorderRadius;
uniform vec3 uColors[4];

// dark/light mode
uniform float uGlowExponent;
uniform float uGlowFactor;

const float PI = 3.14159265359;
const float TWO_PI = 2.0 * PI;
const float HALF_PI = 0.5 * PI;

// Light source parameters (constants)
const vec4 startPositions = vec4(0.0, PI, HALF_PI, 1.5 * PI);
const vec4 speeds = vec4(-1.9, -1.9, -1.5, 2.1);
const vec4 innerRadius = vec4(PI * 0.8, PI * 0.7, PI * 0.3, PI * 0.1);
const vec4 outerRadius = vec4(PI * 1.2, PI * 0.9, PI * 0.6, PI * 0.4);

/**
 * @brief Generates a random float value based on the input 2D coordinates.
 * @param st The input 2D coordinates.
 * @return float A random float value.
 */
float random(vec2 st) {
	return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

vec2 random2(vec2 st) {
	return vec2(random(st), random(st + 1.0));
}

/**
 * Derivative-based Anti-aliasing
 */
float aaStep(float edge, float d) {
    // Calculate the width of the anti-aliasing transition
    // This is the distance the value changes over one pixel.
	float width = fwidth(d);
	return smoothstep(edge - width * 0.5, edge + width * 0.5, d);
}

/**
 * @brief Provides an anti-aliased version of fract().
 * @param x The input value.
 * @return float The anti-aliased fractional part of x.
 */
float aaFract(float x) {
	float f = fract(x);
	float w = fwidth(x); // Get the width of the transition band for one pixel.

    // Use smoothstep to fade the line out as it approaches the 1.0 boundary.
    // The fade happens over a distance equal to the pixel width 'w'.
	float smooth_f = f * (1.0 - smoothstep(1.0 - w, 1.0, f));

	return smooth_f;
}

/**
 * @name sdRoundedBox
 * @description Calculates the signed distance from a point to a rounded rectangle.
 * @param {vec2} p - The point coordinates.
 * @param {vec2} b - Half the size of the rectangle (half width and half height).
 * @param {float} r - The corner radius.
 * @returns {float} - Signed distance to the surface of the rounded rectangle.
 */
float sdRoundedBox(in vec2 p, in vec2 b, in float r) {
	vec2 q = abs(p) - b + r;
	return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

/**
 * @brief Calculates the smooth inner glow intensity for a rectangle.
 * @param p The current pixel coordinate, centered at (0,0).
 * @param b The half-dimensions of the rectangle.
 * @param radius The radius of the glow/blur.
 * @return float The glow intensity, from 0.0 to 1.0.
 */
float getInnerGlow(vec2 p, vec2 b, float radius) {
	// Check if the pixel is outside the rectangle.
	// vec2 d_out = abs(p) - b;
	// if (max(d_out.x, d_out.y) > 0.0) {
	// 	return 0.0;
	// }

	// Calculate the distance to the nearest vertical and horizontal edges (positive inwards).
	float dist_x = b.x - abs(p.x);
	float dist_y = b.y - abs(p.y);

	// Calculate the horizontal and vertical glow intensities independently.
	float glow_x = smoothstep(radius, 0.0, dist_x);
	float glow_y = smoothstep(radius, 0.0, dist_y);

	// Combine the two directional glows using a screen blend mode: 1.0 - (1.0 - a) * (1.0 - b).
	return 1.0 - (1.0 - glow_x) * (1.0 - glow_y);
}

float getVignette(vec2 uv) {
	vec2 vignetteUv = uv;
	vignetteUv = vignetteUv * (1.0 - vignetteUv);
	float vignette = vignetteUv.x * vignetteUv.y * 25.0; // multiply with sth for intensity
	vignette = pow(vignette, 0.16); // change pow for modifying the extend of the  vignette
	// vignette = smoothstep(0.0, 0.7, vignette); // smoothstep to avoid hard edges
	vignette = 1.0 - vignette;

	return vignette;
}

/**
 * Convert UV coordinates to angle (0 to 2π) around the border
 */
float uvToAngle(vec2 uv) {
	vec2 center = vec2(0.5);
	vec2 dir = uv - center;
	return atan(dir.y, dir.x) + PI;
}

/**
 * Get current light center position (angle) based on start position, speed and time
 */
// float getLightCenter(float startPos, float speed, float time) {
//     return mod(startPos + speed * time, TWO_PI);
// }

void main() {
	vec2 uv = vUV;
	vec2 pos = uv * uResolution;
	vec2 centeredPos = pos - uResolution * 0.5;
	vec2 size = uResolution - uBorderWidth;
	vec2 halfSize = size * 0.5;

	// Calculate the signed distance from the rounded rectangle
	float dBorderBox = sdRoundedBox(centeredPos, halfSize, uBorderRadius);
	float border = aaStep(0.0, dBorderBox);

	// This will create a gradient mask to safely fade out from borders to inner edges.
	float glow = getInnerGlow(centeredPos, halfSize, uGlowWidth);
	// glow = smoothstep(0.0, 0.5, glow);
	// glow = aaFract(glow * 10.0);

	float vignette = getVignette(uv);
	glow *= vignette;

	float posAngle = uvToAngle(uv);

	// vec4 lightCenter = vec4(
	// 	getLightCenter(startPositions.x, speeds.x, uTime),
	// 	getLightCenter(startPositions.y, speeds.y, uTime),
	// 	getLightCenter(startPositions.z, speeds.z, uTime),
	// 	getLightCenter(startPositions.w, speeds.w, uTime)
	// );
	vec4 lightCenter = mod(startPositions + speeds * uTime, TWO_PI);

	vec4 angleDist = abs(posAngle - lightCenter);

	// Calculate shortest angular distance (considering wrap-around)
	vec4 disToLight = min(angleDist, TWO_PI - angleDist) / TWO_PI;

	float intensityBorder[4];
	intensityBorder[0] = 1.0;
	intensityBorder[1] = smoothstep(0.4, 0.0, disToLight.y);
	intensityBorder[2] = smoothstep(0.4, 0.0, disToLight.z);
	intensityBorder[3] = smoothstep(0.2, 0.0, disToLight.w) * 0.5;

	// mix these 4 colors with distance
	vec3 borderColor = vec3(0.0);
	for(int i = 0; i < 4; i++) {
		borderColor = mix(borderColor, uColors[i], intensityBorder[i]);
	}
	borderColor *= 1.1;

	borderColor = clamp(borderColor, 0.0, 1.0);

	float intensityGlow[4];
	intensityGlow[0] = smoothstep(0.9, 0.0, disToLight.x);
	intensityGlow[1] = smoothstep(0.7, 0.0, disToLight.y);
	intensityGlow[2] = smoothstep(0.4, 0.0, disToLight.z);
	intensityGlow[3] = smoothstep(0.1, 0.0, disToLight.w) * 0.7;

	// timely breathing effect
	vec4 breath = smoothstep(0.0, 1.0, sin(uTime * 1.0 + startPositions * PI) * 0.2 + 0.8);

	vec3 glowColor = vec3(0.0);
	glowColor += uColors[0] * intensityGlow[0] * breath.x;
	glowColor += uColors[1] * intensityGlow[1] * breath.y;
	glowColor += uColors[2] * intensityGlow[2] * breath.z;
	glowColor += uColors[3] * intensityGlow[3] * breath.w * glow; // fade it a little bit

	glow = pow(glow, uGlowExponent);
	glow *= random(pos + uTime) * 0.1 + 1.0;
	glowColor *= glow * uGlowFactor;
	glowColor = clamp(glowColor, 0.0, 1.0);

	vec3 color = mix(glowColor, borderColor + glowColor * 0.2, border);

	float alpha = mix(glow, 1.0, border);

	outColor = vec4(color, alpha);
}
`, t6 = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, r6 = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function n6(e) {
  const t = e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!t)
    throw new Error(`Invalid color format: ${e}`);
  const [, n, o, s] = t;
  return [parseInt(n) / 255, parseInt(o) / 255, parseInt(s) / 255];
}
class y9 {
  element;
  canvas;
  options;
  running = !1;
  disposed = !1;
  startTime = 0;
  lastTime = 0;
  rafId = null;
  glr;
  observer;
  constructor(t = {}) {
    this.options = {
      width: t.width ?? 600,
      height: t.height ?? 600,
      ratio: t.ratio ?? window.devicePixelRatio ?? 1,
      borderWidth: t.borderWidth ?? 8,
      glowWidth: t.glowWidth ?? 200,
      borderRadius: t.borderRadius ?? 8,
      mode: t.mode ?? "light",
      ...t
    }, this.canvas = document.createElement("canvas"), this.options.classNames && (this.canvas.className = this.options.classNames), this.options.styles && Object.assign(this.canvas.style, this.options.styles), this.canvas.style.display = "block", this.canvas.style.transformOrigin = "center", this.canvas.style.pointerEvents = "none", this.element = this.canvas, this.setupGL();
  }
  start() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.running) return;
    if (!this.glr) {
      console.error("WebGL resources are not initialized.");
      return;
    }
    this.running = !0, this.startTime = performance.now(), this.resize(
      this.options.width ?? 600,
      this.options.height ?? 600,
      this.options.ratio
    ), this.glr.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.glr.gl.useProgram(this.glr.program), this.glr.gl.uniform2f(
      this.glr.uResolution,
      this.canvas.width,
      this.canvas.height
    ), this.checkGLError(this.glr.gl, "start: after initial setup");
    const t = () => {
      if (!this.running || !this.glr) return;
      this.rafId = requestAnimationFrame(t);
      const n = performance.now();
      if (n - this.lastTime < 1e3 / 32) return;
      this.lastTime = n;
      const s = (n - this.startTime) * 1e-3;
      this.render(s);
    };
    this.rafId = requestAnimationFrame(t);
  }
  pause() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = !0, this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
    const { gl: t, vao: n, positionBuffer: o, uvBuffer: s, program: i } = this.glr;
    n && t.deleteVertexArray(n), o && t.deleteBuffer(o), s && t.deleteBuffer(s), t.deleteProgram(i), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(t, n, o) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = t, this.options.height = n, o && (this.options.ratio = o), !this.running) return;
    const { gl: s, program: i, vao: a, positionBuffer: d, uvBuffer: l, uResolution: u } = this.glr, f = o ?? this.options.ratio ?? window.devicePixelRatio ?? 1, g = Math.max(1, Math.floor(t * f)), m = Math.max(1, Math.floor(n * f));
    this.canvas.style.width = `${t}px`, this.canvas.style.height = `${n}px`, (this.canvas.width !== g || this.canvas.height !== m) && (this.canvas.width = g, this.canvas.height = m), s.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(s, "resize: after viewport setup");
    const { positions: h, uvs: C } = K1(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * f,
      this.options.glowWidth * f
    );
    s.bindVertexArray(a), s.bindBuffer(s.ARRAY_BUFFER, d), s.bufferData(s.ARRAY_BUFFER, h, s.STATIC_DRAW);
    const v = s.getAttribLocation(i, "aPosition");
    s.enableVertexAttribArray(v), s.vertexAttribPointer(v, 2, s.FLOAT, !1, 0, 0), this.checkGLError(s, "resize: after position buffer update"), s.bindBuffer(s.ARRAY_BUFFER, l), s.bufferData(s.ARRAY_BUFFER, C, s.STATIC_DRAW);
    const w = s.getAttribLocation(i, "aUV");
    s.enableVertexAttribArray(w), s.vertexAttribPointer(w, 2, s.FLOAT, !1, 0, 0), this.checkGLError(s, "resize: after UV buffer update"), s.useProgram(i), s.uniform2f(u, this.canvas.width, this.canvas.height), s.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * f), s.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * f), s.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * f), this.checkGLError(s, "resize: after uniform updates");
    const x = performance.now();
    this.lastTime = x;
    const N = (x - this.startTime) * 1e-3;
    this.render(N);
  }
  /**
   * Automatically resizes the canvas to match the dimensions of the given element.
   * @note using ResizeObserver
   */
  autoResize(t) {
    this.observer && this.observer.disconnect(), this.observer = new ResizeObserver(() => {
      const n = t.getBoundingClientRect();
      this.resize(n.width, n.height);
    }), this.observer.observe(t);
  }
  fadeIn() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((t, n) => {
      const o = this.canvas.animate(
        [
          { opacity: 0, transform: "scale(1.2)" },
          { opacity: 1, transform: "scale(1)" }
        ],
        { duration: 300, easing: "ease-out", fill: "forwards" }
      );
      o.onfinish = () => t(), o.oncancel = () => n("canceled");
    });
  }
  fadeOut() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((t, n) => {
      const o = this.canvas.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.2)" }
        ],
        { duration: 300, easing: "ease-in", fill: "forwards" }
      );
      o.onfinish = () => t(), o.oncancel = () => n("canceled");
    });
  }
  checkGLError(t, n) {
    let o = t.getError();
    if (o !== t.NO_ERROR)
      for (console.error(`WebGL Error in ${n}`); o !== t.NO_ERROR; ) {
        const s = this.getGLErrorName(t, o);
        console.error(`${s} (0x${o.toString(16)})`), o = t.getError();
      }
  }
  getGLErrorName(t, n) {
    switch (n) {
      case t.INVALID_ENUM:
        return "INVALID_ENUM";
      case t.INVALID_VALUE:
        return "INVALID_VALUE";
      case t.INVALID_OPERATION:
        return "INVALID_OPERATION";
      case t.INVALID_FRAMEBUFFER_OPERATION:
        return "INVALID_FRAMEBUFFER_OPERATION";
      case t.OUT_OF_MEMORY:
        return "OUT_OF_MEMORY";
      case t.CONTEXT_LOST_WEBGL:
        return "CONTEXT_LOST_WEBGL";
      default:
        return "UNKNOWN_ERROR";
    }
  }
  setupGL() {
    const t = this.canvas.getContext("webgl2", {
      antialias: !1,
      alpha: !0
    });
    if (!t)
      throw new Error("WebGL2 is required but not available.");
    const n = J4(t, t6, e6);
    this.checkGLError(t, "setupGL: after createProgram");
    const o = t.createVertexArray();
    t.bindVertexArray(o), this.checkGLError(t, "setupGL: after VAO creation");
    const s = this.canvas.width || 2, i = this.canvas.height || 2, { positions: a, uvs: d } = K1(
      s,
      i,
      this.options.borderWidth,
      this.options.glowWidth
    ), l = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, l), t.bufferData(t.ARRAY_BUFFER, a, t.STATIC_DRAW);
    const u = t.getAttribLocation(n, "aPosition");
    t.enableVertexAttribArray(u), t.vertexAttribPointer(u, 2, t.FLOAT, !1, 0, 0), this.checkGLError(t, "setupGL: after position buffer setup");
    const f = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, f), t.bufferData(t.ARRAY_BUFFER, d, t.STATIC_DRAW);
    const g = t.getAttribLocation(n, "aUV");
    t.enableVertexAttribArray(g), t.vertexAttribPointer(g, 2, t.FLOAT, !1, 0, 0), this.checkGLError(t, "setupGL: after UV buffer setup");
    const m = t.getUniformLocation(n, "uResolution"), h = t.getUniformLocation(n, "uTime"), C = t.getUniformLocation(n, "uBorderWidth"), v = t.getUniformLocation(n, "uGlowWidth"), w = t.getUniformLocation(n, "uBorderRadius"), x = t.getUniformLocation(n, "uColors"), N = t.getUniformLocation(n, "uGlowExponent"), T = t.getUniformLocation(n, "uGlowFactor");
    t.useProgram(n), t.uniform1f(C, this.options.borderWidth), t.uniform1f(v, this.options.glowWidth), t.uniform1f(w, this.options.borderRadius), this.options.mode === "dark" ? (t.uniform1f(N, 2), t.uniform1f(T, 1.8)) : (t.uniform1f(N, 1), t.uniform1f(T, 1));
    const E = (this.options.colors || r6).map(n6);
    for (let y = 0; y < E.length; y++)
      t.uniform3f(
        t.getUniformLocation(n, `uColors[${y}]`),
        ...E[y]
      );
    this.checkGLError(t, "setupGL: after uniform setup"), t.bindVertexArray(null), t.bindBuffer(t.ARRAY_BUFFER, null), this.glr = {
      gl: t,
      program: n,
      vao: o,
      positionBuffer: l,
      uvBuffer: f,
      uResolution: m,
      uTime: h,
      uBorderWidth: C,
      uGlowWidth: v,
      uBorderRadius: w,
      uColors: x
    };
  }
  render(t) {
    if (!this.glr) return;
    const { gl: n, program: o, vao: s, uTime: i } = this.glr;
    n.useProgram(o), n.bindVertexArray(s), n.uniform1f(i, t), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.disable(n.BLEND), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.drawArrays(n.TRIANGLES, 0, 24), this.checkGLError(n, "render: after draw call"), n.bindVertexArray(null);
  }
}
const J1 = ["lowp", "mediump", "highp"], o6 = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, s6 = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, et = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, tt = "iTime", rt = "iTimeDelta", nt = "iDate", ot = "iFrame", st = "iMouse", it = "iResolution", i6 = "iChannel", at = "iChannelResolution", ct = "iDeviceOrientation";
function a6(e, t) {
  return e.includes("Matrix") && Array.isArray(t);
}
function c6(e, t) {
  return e.includes("v") && Array.isArray(t) && t.length > Number.parseInt(e.charAt(0));
}
function l6(e, t) {
  return !e.includes("v") && Array.isArray(t) && t.length > Number.parseInt(e.charAt(0));
}
const d6 = (e, t, n, o) => {
  if (l6(n, o))
    switch (n) {
      case "2f":
        return e.uniform2f(t, o[0], o[1]);
      case "3f":
        return e.uniform3f(t, o[0], o[1], o[2]);
      case "4f":
        return e.uniform4f(t, o[0], o[1], o[2], o[3]);
      case "2i":
        return e.uniform2i(t, o[0], o[1]);
      case "3i":
        return e.uniform3i(t, o[0], o[1], o[2]);
      case "4i":
        return e.uniform4i(t, o[0], o[1], o[2], o[3]);
    }
  if (typeof o == "number")
    return n === "1i" ? e.uniform1i(t, o) : e.uniform1f(t, o);
  switch (n) {
    case "1iv":
      return e.uniform1iv(t, o);
    case "2iv":
      return e.uniform2iv(t, o);
    case "3iv":
      return e.uniform3iv(t, o);
    case "4iv":
      return e.uniform4iv(t, o);
    case "1fv":
      return e.uniform1fv(t, o);
    case "2fv":
      return e.uniform2fv(t, o);
    case "3fv":
      return e.uniform3fv(t, o);
    case "4fv":
      return e.uniform4fv(t, o);
    case "Matrix2fv":
      return e.uniformMatrix2fv(t, !1, o);
    case "Matrix3fv":
      return e.uniformMatrix3fv(t, !1, o);
    case "Matrix4fv":
      return e.uniformMatrix4fv(t, !1, o);
  }
}, f6 = (e) => {
  switch (e) {
    case "1f":
      return "float";
    case "2f":
      return "vec2";
    case "3f":
      return "vec3";
    case "4f":
      return "vec4";
    case "1i":
      return "int";
    case "2i":
      return "ivec2";
    case "3i":
      return "ivec3";
    case "4i":
      return "ivec4";
    case "1iv":
      return "int";
    case "2iv":
      return "ivec2";
    case "3iv":
      return "ivec3";
    case "4iv":
      return "ivec4";
    case "1fv":
      return "float";
    case "2fv":
      return "vec2";
    case "3fv":
      return "vec3";
    case "4fv":
      return "vec4";
    case "Matrix2fv":
      return "mat2";
    case "Matrix3fv":
      return "mat3";
    case "Matrix4fv":
      return "mat4";
    default:
      console.error(
        be(
          `The uniform type "${e}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, d1 = 9729, lt = 9728, u6 = 9987, dt = 33071, ft = 10497;
class h6 {
  gl;
  url;
  wrapS;
  wrapT;
  minFilter;
  magFilter;
  source;
  pow2canvas;
  isLoaded = !1;
  isVideo = !1;
  flipY = -1;
  width = 0;
  height = 0;
  _webglTexture = null;
  constructor(t) {
    this.gl = t;
  }
  updateTexture = (t, n, o) => {
    const { gl: s } = this, i = 0, a = s.RGBA, d = s.RGBA, l = s.UNSIGNED_BYTE;
    s.bindTexture(s.TEXTURE_2D, t), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, o), s.texImage2D(
      s.TEXTURE_2D,
      i,
      a,
      d,
      l,
      n
    );
  };
  setupVideo = (t) => {
    const n = document.createElement("video");
    let o = !1, s = !1;
    n.autoplay = !0, n.muted = !0, n.loop = !0, n.crossOrigin = "anonymous";
    const i = () => {
      o && s && (this.isLoaded = !0);
    };
    return n.addEventListener(
      "playing",
      () => {
        o = !0, this.width = n.videoWidth || 0, this.height = n.videoHeight || 0, i();
      },
      !0
    ), n.addEventListener(
      "timeupdate",
      () => {
        s = !0, i();
      },
      !0
    ), n.src = t, n;
  };
  makePowerOf2 = (t) => t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap ? (this.pow2canvas === void 0 && (this.pow2canvas = document.createElement("canvas")), this.pow2canvas.width = 2 ** Math.floor(Math.log(t.width) / Math.LN2), this.pow2canvas.height = 2 ** Math.floor(Math.log(t.height) / Math.LN2), this.pow2canvas.getContext("2d")?.drawImage(
    t,
    0,
    0,
    this.pow2canvas.width,
    this.pow2canvas.height
  ), console.warn(
    be(
      `Image is not power of two ${t.width} x ${t.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : t;
  load = async (t) => {
    const { gl: n } = this, {
      url: o,
      wrapS: s,
      wrapT: i,
      minFilter: a,
      magFilter: d,
      flipY: l = -1
    } = t;
    if (!o)
      return Promise.reject(
        new Error(
          be(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const u = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(o), f = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(o);
    if (u === null && f === null)
      return Promise.reject(
        new Error(
          be(
            `Please upload a video or an image with a valid format (url: ${o})`
          )
        )
      );
    Object.assign(this, { url: o, wrapS: s, wrapT: i, minFilter: a, magFilter: d, flipY: l });
    const g = 0, m = n.RGBA, h = 1, C = 1, v = 0, w = n.RGBA, x = n.UNSIGNED_BYTE, N = new Uint8Array([255, 255, 255, 0]), T = n.createTexture();
    if (n.bindTexture(n.TEXTURE_2D, T), n.texImage2D(
      n.TEXTURE_2D,
      g,
      m,
      h,
      C,
      v,
      w,
      x,
      N
    ), f) {
      const H = this.setupVideo(o);
      return n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), this._webglTexture = T, this.source = H, this.isVideo = !0, H.play().then(() => this);
    }
    async function E() {
      return new Promise((H, b) => {
        const A = new Image();
        A.crossOrigin = "anonymous", A.onload = () => {
          H(A);
        }, A.onerror = () => {
          b(new Error(be(`failed loading url: ${o}`)));
        }, A.src = o ?? "";
      });
    }
    let y = await E(), L = (y.width & y.width - 1) === 0 && (y.height & y.height - 1) === 0;
    return (t.wrapS !== dt || t.wrapT !== dt || t.minFilter !== lt && t.minFilter !== d1) && !L && (y = this.makePowerOf2(y), L = !0), n.bindTexture(n.TEXTURE_2D, T), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, l), n.texImage2D(
      n.TEXTURE_2D,
      g,
      m,
      w,
      x,
      y
    ), L && t.minFilter !== lt && t.minFilter !== d1 && n.generateMipmap(n.TEXTURE_2D), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_WRAP_S,
      this.wrapS || ft
    ), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_WRAP_T,
      this.wrapT || ft
    ), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_MIN_FILTER,
      this.minFilter || u6
    ), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_MAG_FILTER,
      this.magFilter || d1
    ), this._webglTexture = T, this.source = y, this.isVideo = !1, this.isLoaded = !0, this.width = y.width || 0, this.height = y.height || 0, this;
  };
}
const be = (e) => `react-shaders: ${e}`, ut = (e) => {
  if ("changedTouches" in e) {
    const t = e.changedTouches[0];
    return [t?.clientX ?? 0, t?.clientY ?? 0];
  }
  return [e.clientX, e.clientY];
}, ht = (e, t, n) => e * (1 - n) + t * n, g6 = (e, t, n) => n > 0 ? e.substring(0, n) + t + e.substring(n, e.length) : t + e;
function p6({
  fs: e,
  vs: t = et,
  textures: n = [],
  uniforms: o,
  clearColor: s = [0, 0, 0, 1],
  precision: i = "highp",
  style: a,
  contextAttributes: d = {},
  lerp: l = 1,
  devicePixelRatio: u = 1,
  onDoneLoadingTextures: f,
  onError: g = console.error,
  onWarning: m = console.warn
}) {
  const h = I(null), C = I(null), v = I(null), w = I(null), x = I(void 0), N = I(void 0), T = I(!1), E = I(void 0), y = I(0), L = I([0, 0]), H = I([]), b = I(0), A = I(void 0), V = I({
    [tt]: { type: "float", isNeeded: !1, value: 0 },
    [rt]: { type: "float", isNeeded: !1, value: 0 },
    [nt]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [st]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [it]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [ot]: { type: "int", isNeeded: !1, value: 0 },
    [ct]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), R = I(o), $ = (M, S) => {
    const F = "width" in M ? M.width ?? 0 : 0, j = "height" in M ? M.height ?? 0 : 0, B = V.current.iChannelResolution;
    if (!B) return;
    const U = Array.isArray(B.value) ? B.value : B.value = [];
    U[S * 3] = F * u, U[S * 3 + 1] = j * u, U[S * 3 + 2] = 0;
  }, _ = () => {
    h.current && (C.current = h.current.getContext("webgl", d) || h.current.getContext(
      "experimental-webgl",
      d
    ), C.current?.getExtension("OES_standard_derivatives"), C.current?.getExtension("EXT_shader_texture_lod"));
  }, z = () => {
    const M = C.current;
    v.current = M?.createBuffer() ?? null, M?.bindBuffer(M.ARRAY_BUFFER, v.current);
    const S = [
      1,
      1,
      0,
      -1,
      1,
      0,
      1,
      -1,
      0,
      -1,
      -1,
      0
    ];
    M?.bufferData(M.ARRAY_BUFFER, new Float32Array(S), M.STATIC_DRAW);
  }, G = ({
    alpha: M,
    beta: S,
    gamma: F
  }) => {
    V.current.iDeviceOrientation.value = [
      M ?? 0,
      S ?? 0,
      F ?? 0,
      window.orientation ?? 0
    ];
  }, re = (M) => {
    const [S = 0, F = 0] = ut(M), j = S - (E.current?.left ?? 0) - window.pageXOffset, B = (E.current?.height ?? 0) - F - (E.current?.top ?? 0) - window.pageYOffset;
    T.current = !0;
    const U = Array.isArray(V.current.iMouse?.value) ? V.current.iMouse.value : void 0;
    U && (U[2] = j, U[3] = B), L.current[0] = j, L.current[1] = B;
  }, K = (M) => {
    E.current = h.current?.getBoundingClientRect();
    const [S = 0, F = 0] = ut(M), j = S - (E.current?.left ?? 0), B = (E.current?.height ?? 0) - F - (E.current?.top ?? 0);
    if (l !== 1)
      L.current[0] = j, L.current[1] = B;
    else {
      const U = Array.isArray(V.current.iMouse?.value) ? V.current.iMouse.value : void 0;
      U && (U[0] = j, U[1] = B);
    }
  }, O = () => {
    const M = Array.isArray(V.current.iMouse?.value) ? V.current.iMouse.value : void 0;
    M && (M[2] = 0, M[3] = 0);
  }, Z = () => {
    const M = C.current;
    if (!M) return;
    E.current = h.current?.getBoundingClientRect();
    const S = u, F = Math.floor(
      (E.current?.width ?? 1) * S
    ), j = Math.floor(
      (E.current?.height ?? 1) * S
    );
    if (M.canvas.width = F, M.canvas.height = j, V.current.iResolution?.isNeeded && w.current) {
      const B = M.getUniformLocation(
        w.current,
        it
      );
      M.uniform2fv(B, [M.canvas.width, M.canvas.height]);
    }
  }, D = (M, S) => {
    const F = C.current;
    if (!F) return null;
    const j = F.createShader(M);
    if (!j) return null;
    if (F.shaderSource(j, S), F.compileShader(j), !F.getShaderParameter(j, F.COMPILE_STATUS)) {
      m?.(be(`Error compiling the shader:
${S}`));
      const B = F.getShaderInfoLog(j);
      F.deleteShader(j), g?.(be(`Shader compiler log: ${B}`));
    }
    return j;
  }, Q = (M, S) => {
    const F = C.current;
    if (!F) return;
    const j = D(F.FRAGMENT_SHADER, M), B = D(F.VERTEX_SHADER, S);
    if (w.current = F.createProgram(), !(!w.current || !B || !j)) {
      if (F.attachShader(w.current, B), F.attachShader(w.current, j), F.linkProgram(w.current), !F.getProgramParameter(w.current, F.LINK_STATUS)) {
        g?.(
          be(
            `Unable to initialize the shader program: ${F.getProgramInfoLog(
              w.current
            )}`
          )
        );
        return;
      }
      F.useProgram(w.current), x.current = F.getAttribLocation(
        w.current,
        "aVertexPosition"
      ), F.enableVertexAttribArray(x.current);
    }
  }, W = () => {
    if (o)
      for (const M of Object.keys(o)) {
        const S = o[M];
        if (!S) continue;
        const { value: F, type: j } = S, B = f6(j);
        if (!B) continue;
        const U = {};
        if (a6(j, F)) {
          const ae = j.length, J = Number.parseInt(j.charAt(ae - 3)), we = Math.floor(F.length / (J * J));
          F.length > J * J && (U.arraySize = `[${we}]`);
        } else c6(j, F) && (U.arraySize = `[${Math.floor(F.length / Number.parseInt(j.charAt(0)))}]`);
        V.current[M] = {
          type: B,
          isNeeded: !1,
          value: F,
          ...U
        };
      }
  }, he = () => {
    const M = C.current;
    if (M)
      if (n && n.length > 0) {
        V.current[`${at}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${n.length}]`,
          value: []
        };
        const S = n.map(
          (F, j) => (V.current[`${i6}${j}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, $(F, j), H.current[j] = new h6(M), H.current[j]?.load(F).then((B) => {
            $(B, j);
          }))
        );
        Promise.all(S).then(() => {
          f && f();
        }).catch((F) => {
          g?.(F), f && f();
        });
      } else f && f();
  }, ge = (M) => {
    const S = J1.includes(i ?? "highp"), F = `precision ${S ? i : J1[1]} float;
`;
    S || m?.(
      be(
        `wrong precision type ${i}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let j = F.concat(`#define DPR ${u.toFixed(1)}
`).concat(M.replace(/texture\(/g, "texture2D("));
    for (const U of Object.keys(V.current))
      if (M.includes(U)) {
        const ae = V.current[U];
        if (!ae) continue;
        j = g6(
          j,
          `uniform ${ae.type} ${U}${ae.arraySize || ""}; 
`,
          j.lastIndexOf(F) + F.length
        ), ae.isNeeded = !0;
      }
    return M.includes("mainImage") && (j = j.concat(o6)), j;
  }, ie = (M) => {
    const S = C.current;
    if (!S || !w.current) return;
    const F = b.current ? (M - b.current) / 1e3 : 0;
    b.current = M;
    const j = R.current;
    if (j)
      for (const B of Object.keys(j)) {
        const U = j[B];
        if (U && V.current[B]?.isNeeded) {
          if (!w.current) return;
          const ae = S.getUniformLocation(
            w.current,
            B
          );
          if (!ae) return;
          d6(
            S,
            ae,
            U.type,
            U.value
          );
        }
      }
    if (V.current.iMouse?.isNeeded) {
      const B = S.getUniformLocation(
        w.current,
        st
      );
      S.uniform4fv(B, V.current.iMouse.value);
    }
    if (V.current.iChannelResolution?.isNeeded) {
      const B = S.getUniformLocation(
        w.current,
        at
      );
      S.uniform3fv(
        B,
        V.current.iChannelResolution.value
      );
    }
    if (V.current.iDeviceOrientation?.isNeeded) {
      const B = S.getUniformLocation(
        w.current,
        ct
      );
      S.uniform4fv(
        B,
        V.current.iDeviceOrientation.value
      );
    }
    if (V.current.iTime?.isNeeded) {
      const B = S.getUniformLocation(
        w.current,
        tt
      );
      S.uniform1f(B, y.current += F);
    }
    if (V.current.iTimeDelta?.isNeeded) {
      const B = S.getUniformLocation(
        w.current,
        rt
      );
      S.uniform1f(B, F);
    }
    if (V.current.iDate?.isNeeded) {
      const B = /* @__PURE__ */ new Date(), U = B.getMonth() + 1, ae = B.getDate(), J = B.getFullYear(), we = B.getHours() * 60 * 60 + B.getMinutes() * 60 + B.getSeconds() + B.getMilliseconds() * 1e-3, Ee = S.getUniformLocation(
        w.current,
        nt
      );
      S.uniform4fv(Ee, [J, U, ae, we]);
    }
    if (V.current.iFrame?.isNeeded) {
      const B = S.getUniformLocation(
        w.current,
        ot
      ), U = V.current.iFrame.value;
      S.uniform1i(B, U), V.current.iFrame.value = U + 1;
    }
    if (H.current.length > 0)
      for (let B = 0; B < H.current.length; B++) {
        const U = H.current[B];
        if (!U) return;
        const { isVideo: ae, _webglTexture: J, source: we, flipY: Ee, isLoaded: Te } = U;
        if (!Te || !J || !we) return;
        if (V.current[`iChannel${B}`]?.isNeeded) {
          if (!w.current) return;
          const Ce = S.getUniformLocation(
            w.current,
            `iChannel${B}`
          );
          S.activeTexture(S.TEXTURE0 + B), S.bindTexture(S.TEXTURE_2D, J), S.uniform1i(Ce, B), ae && U.updateTexture(
            J,
            we,
            Ee
          );
        }
      }
  }, ne = (M) => {
    const S = C.current;
    if (!S) return;
    S.viewport(0, 0, S.drawingBufferWidth, S.drawingBufferHeight), S.clear(S.COLOR_BUFFER_BIT | S.DEPTH_BUFFER_BIT), S.bindBuffer(S.ARRAY_BUFFER, v.current), S.vertexAttribPointer(
      x.current ?? 0,
      3,
      S.FLOAT,
      !1,
      0,
      0
    ), ie(M), S.drawArrays(S.TRIANGLE_STRIP, 0, 4);
    const F = V.current.iMouse?.value;
    if (V.current.iMouse?.isNeeded && l !== 1 && Array.isArray(F)) {
      const j = F[0] ?? 0, B = F[1] ?? 0;
      F[0] = ht(j, L.current[0] ?? 0, l), F[1] = ht(B, L.current[1] ?? 0, l);
    }
    N.current = requestAnimationFrame(ne);
  }, se = () => {
    const M = { passive: !0 };
    V.current.iMouse?.isNeeded && h.current && (h.current.addEventListener("mousemove", K, M), h.current.addEventListener("mouseout", O, M), h.current.addEventListener("mouseup", O, M), h.current.addEventListener("mousedown", re, M), h.current.addEventListener("touchmove", K, M), h.current.addEventListener("touchend", O, M), h.current.addEventListener("touchstart", re, M)), V.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      G,
      M
    ), h.current && (A.current = new ResizeObserver(Z), A.current.observe(h.current), window.addEventListener("resize", Z, M));
  }, de = () => {
    const M = { passive: !0 };
    V.current.iMouse?.isNeeded && h.current && (h.current.removeEventListener("mousemove", K, M), h.current.removeEventListener("mouseout", O, M), h.current.removeEventListener("mouseup", O, M), h.current.removeEventListener("mousedown", re, M), h.current.removeEventListener("touchmove", K, M), h.current.removeEventListener("touchend", O, M), h.current.removeEventListener("touchstart", re, M)), V.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      G,
      M
    ), A.current && (A.current.disconnect(), window.removeEventListener("resize", Z, M));
  };
  return X(() => {
    R.current = o;
  }, [o]), X(() => {
    const M = H.current;
    function S() {
      _();
      const F = C.current;
      F && h.current && (F.clearColor(...s), F.clearDepth(1), F.enable(F.DEPTH_TEST), F.depthFunc(F.LEQUAL), F.viewport(0, 0, h.current.width, h.current.height), h.current.height = h.current.clientHeight, h.current.width = h.current.clientWidth, W(), he(), Q(ge(e || s6), t || et), z(), requestAnimationFrame(ne), se(), Z());
    }
    return requestAnimationFrame(S), () => {
      const F = C.current;
      if (F) {
        if (F.getExtension("WEBGL_lose_context")?.loseContext(), F.useProgram(null), F.deleteProgram(w.current ?? null), M.length > 0)
          for (const j of M)
            F.deleteTexture(j._webglTexture);
        w.current = null;
      }
      de(), cancelAnimationFrame(N.current ?? 0);
    };
  }, []), /* @__PURE__ */ r(
    "canvas",
    {
      ref: h,
      style: { height: "100%", width: "100%", ...a }
    }
  );
}
const m6 = `
const float TAU = 6.283185;

// Noise for dithering
vec2 randFibo(vec2 p) {
  p = fract(p * vec2(443.897, 441.423));
  p += dot(p, p.yx + 19.19);
  return fract((p.xx + p.yx) * p.xy);
}

// Tonemap
vec3 Tonemap(vec3 x) {
  x *= 4.0;
  return x / (1.0 + x);
}

// Luma for alpha
float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

// RGB to HSV
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// HSV to RGB
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// SDF shapes
float sdCircle(vec2 st, float r) {
  return length(st) - r;
}

float sdLine(vec2 p, float r) {
  float halfLen = r * 2.0;
  vec2 a = vec2(-halfLen, 0.0);
  vec2 b = vec2(halfLen, 0.0);
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float getSdf(vec2 st) {
  if(uShape == 1.0) return sdCircle(st, uScale);
  else if(uShape == 2.0) return sdLine(st, uScale);
  return sdCircle(st, uScale); // Default
}

vec2 turb(vec2 pos, float t, float it) {
  // Initial rotation matrix for swirl direction
  mat2 rotation = mat2(0.6, -0.25, 0.25, 0.9);
  // Secondary rotation applied each iteration (approx 53 degree rotation)
  mat2 layerRotation = mat2(0.6, -0.8, 0.8, 0.6);

  float frequency = mix(2.0, 15.0, uFrequency);
  float amplitude = uAmplitude;
  float frequencyGrowth = 1.4;
  float animTime = t * 0.1 * uSpeed;

  const int LAYERS = 4;
  for(int i = 0; i < LAYERS; i++) {
    // Calculate wave displacement for this layer
    vec2 rotatedPos = pos * rotation;
    vec2 wave = sin(frequency * rotatedPos + float(i) * animTime + it);

    // Apply displacement along rotation direction
    pos += (amplitude / frequency) * rotation[0] * wave;

    // Evolve parameters for next layer
    rotation *= layerRotation;
    amplitude *= mix(1.0, max(wave.x, wave.y), uVariance);
    frequency *= frequencyGrowth;
  }

  return pos;
}

const float ITERATIONS = 36.0;

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;

  vec3 pp = vec3(0.0);
  vec3 bloom = vec3(0.0);
  float t = iTime * 0.5;
  vec2 pos = uv - 0.5;

  vec2 prevPos = turb(pos, t, 0.0 - 1.0 / ITERATIONS);
  float spacing = mix(1.0, TAU, uSpacing);

  for(float i = 1.0; i < ITERATIONS + 1.0; i++) {
    float iter = i / ITERATIONS;
    vec2 st = turb(pos, t, iter * spacing);
    float d = abs(getSdf(st));
    float pd = distance(st, prevPos);
    prevPos = st;
    float dynamicBlur = exp2(pd * 2.0 * 1.4426950408889634) - 1.0;
    float ds = smoothstep(0.0, uBlur * 0.05 + max(dynamicBlur * uSmoothing, 0.001), d);

    // Shift color based on iteration using uColorScale
    vec3 color = uColor;
    if(uColorShift > 0.01) {
      vec3 hsv = rgb2hsv(color);
      // Shift hue by iteration
      hsv.x = fract(hsv.x + (1.0 - iter) * uColorShift * 0.3);
      color = hsv2rgb(hsv);
    }

    float invd = 1.0 / max(d + dynamicBlur, 0.001);
    pp += (ds - 1.0) * color;
    bloom += clamp(invd, 0.0, 250.0) * color;
  }

  pp *= 1.0 / ITERATIONS;

  vec3 color;

  // Dark mode (default)
  if(uMode < 0.5) {
    // use bloom effect
    bloom = bloom / (bloom + 2e4);
    color = (-pp + bloom * 3.0 * uBloom) * 1.2;
    color += (randFibo(fragCoord).x - 0.5) / 255.0;
    color = Tonemap(color);
    float alpha = luma(color) * uMix;
    fragColor = vec4(color * uMix, alpha);
  }

  // Light mode
  else {
    // no bloom effect
    color = -pp;
    color += (randFibo(fragCoord).x - 0.5) / 255.0;

    // Preserve hue by tone mapping brightness only
    float brightness = length(color);
    vec3 direction = brightness > 0.0 ? color / brightness : color;

    // Reinhard on brightness
    float factor = 2.0;
    float mappedBrightness = (brightness * factor) / (1.0 + brightness * factor);
    color = direction * mappedBrightness;

    // Boost saturation to compensate for white background bleed-through
    // When alpha < 1.0, white bleeds through making colors look desaturated
    // So we increase saturation to maintain vibrant appearance
    float gray = dot(color, vec3(0.2, 0.5, 0.1));
    float saturationBoost = 3.0;
    color = mix(vec3(gray), color, saturationBoost);

    // Clamp between 0-1
    color = clamp(color, 0.0, 1.0);

    float alpha = mappedBrightness * clamp(uMix, 1.0, 2.0);
    fragColor = vec4(color, alpha);
  }
}`, C6 = 10, v6 = 2, w6 = 0.5, x6 = 0.2, k6 = 1.5, ve = {
  duration: 0.5,
  ease: "easeOut"
}, gt = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function ze(e) {
  const [t, n] = P(e), o = Bs(e), s = I(null);
  Qs(o, "change", (a) => n(a));
  const i = q(
    (a, d) => {
      s.current = bi(o, a, d);
    },
    [o]
  );
  return { value: t, motionValue: o, controls: s, animate: i };
}
function b6(e, t) {
  const [n, o] = P(C6), {
    value: s,
    animate: i,
    motionValue: a
  } = ze(x6), { value: d, animate: l } = ze(v6), { value: u, animate: f } = ze(w6), { value: g, animate: m } = ze(k6), h = Ks(t, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return X(() => {
    switch (e) {
      case "idle":
      case "failed":
      case "disconnected":
        o(10), i(0.2, ve), l(1.2, ve), f(0.4, ve), m(1, ve);
        return;
      case "listening":
      case "pre-connect-buffering":
        o(20), i(0.3, { type: "spring", duration: 1, bounce: 0.35 }), l(1, ve), f(0.7, ve), m([1.5, 2], gt);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        o(30), i(0.3, ve), l(0.5, ve), f(1, ve), m([0.5, 2.5], gt);
        return;
      case "speaking":
        o(70), i(0.3, ve), l(0.75, ve), f(1.25, ve), m(1.5, ve);
        return;
    }
  }, [
    e,
    i,
    l,
    f,
    m
  ]), X(() => {
    e === "speaking" && h > 0 && !a.isAnimating() && i(0.2 + 0.2 * h, { duration: 0 });
  }, [
    e,
    h,
    a,
    i,
    l,
    f,
    m
  ]), {
    speed: n,
    scale: s,
    amplitude: d,
    frequency: u,
    brightness: g
  };
}
const L6 = Fe({
  base: "aspect-square",
  variants: {
    size: {
      icon: "h-[24px]",
      sm: "h-[56px]",
      md: "h-[112px]",
      lg: "h-[224px]",
      xl: "h-[448px]"
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
function y6(e) {
  const t = e.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (t) {
    const [, n, o, s] = t;
    return [n, o, s].map((a = "00") => parseInt(a, 16) / 255);
  }
}
function Ur({
  shape: e = 1,
  speed: t = 1,
  amplitude: n = 0.5,
  frequency: o = 0.5,
  scale: s = 0.2,
  blur: i = 1,
  color: a = "#FF355E",
  colorShift: d = 1,
  brightness: l = 1,
  themeMode: u = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: f,
  className: g,
  ...m
}) {
  const h = ee(() => y6(a), [a]);
  return /* @__PURE__ */ r("div", { ref: f, className: g, ...m, children: /* @__PURE__ */ r(
    p6,
    {
      fs: m6,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: t },
        // Edge blur/softness
        uBlur: { type: "1f", value: i },
        // Shape scale
        uScale: { type: "1f", value: s },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: e },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: o },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: n },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: l },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: d },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: u === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: h ?? [0, 0.7, 1] }
      },
      onError: (C) => {
        console.error("Shader error:", C);
      },
      onWarning: (C) => {
        console.warn("Shader warning:", C);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
Ur.displayName = "AuraShader";
function M9({
  size: e = "lg",
  state: t,
  color: n,
  colorShift: o = 0.05,
  audioTrack: s,
  themeMode: i,
  className: a,
  ref: d,
  ...l
}) {
  const { speed: u, scale: f, amplitude: g, frequency: m, brightness: h } = b6(t, s);
  return /* @__PURE__ */ r(
    Ur,
    {
      ref: d,
      blur: 0.2,
      color: n,
      colorShift: o,
      speed: u,
      scale: f,
      themeMode: i,
      amplitude: g,
      frequency: m,
      brightness: h,
      className: k(
        L6({ size: e }),
        "overflow-hidden rounded-full",
        a
      ),
      ...l
    }
  );
}
const E9 = ({
  text: e,
  description: t,
  avatar: n,
  confirmationText: o,
  onConfirm: s,
  cancelText: i,
  onCancel: a,
  stackAt: d = "sm"
}) => /* @__PURE__ */ r(
  p2,
  {
    title: e,
    description: t,
    avatar: n,
    stackAt: d,
    confirmAction: {
      label: o,
      onClick: s
    },
    rejectAction: {
      label: i,
      onClick: a
    }
  }
), M6 = Fe({
  base: [
    "relative flex flex-col rounded-2xl bg-f1-background",
    "border border-solid border-f1-border-secondary",
    "shadow transition-shadow duration-200",
    "w-[217px] h-[200px] p-4 gap-2"
  ],
  variants: {
    selected: {
      true: "shadow-none",
      false: "hover:shadow-md"
    }
  },
  defaultVariants: {
    selected: !1
  }
}), zr = Fe({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), E6 = Fe({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), Ge = Fe({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), R6 = ({
  description: e,
  isRevealed: t,
  onAskOne: n
}) => {
  const o = Y(), s = ye();
  return /* @__PURE__ */ c(xe, { children: [
    e && /* @__PURE__ */ r("span", { className: k(E6(), "truncate"), children: e }),
    /* @__PURE__ */ r(Ne, { children: n && t && /* @__PURE__ */ r(
      oe.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: s ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ r(
          lr,
          {
            size: "md",
            label: o.ai.ask,
            onClick: (i) => {
              i.stopPropagation(), n();
            }
          }
        )
      }
    ) })
  ] });
}, F6 = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), N6 = ({ balance: e }) => /* @__PURE__ */ r(
  js,
  {
    amount: e.amount,
    percentage: e.percentage ?? void 0,
    invertStatus: e.invertStatus,
    hint: e.hint
  }
), S6 = (e) => {
  const {
    heading: t,
    label: n,
    content: o,
    shouldFadeContent: s = !1,
    fadeTransition: i
  } = e;
  return /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ r("span", { className: k(zr()), children: t }),
    /* @__PURE__ */ c(
      oe.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: s ? 0 : 1 },
        transition: i,
        children: [
          o === "person" && /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ r(
              _t,
              {
                firstName: e.avatar.firstName,
                lastName: e.avatar.lastName,
                src: e.avatar.src,
                size: "xs"
              }
            ),
            n && /* @__PURE__ */ r("span", { className: k(Ge()), children: n })
          ] }),
          o === "people" && /* @__PURE__ */ r(
            $s,
            {
              type: "person",
              avatars: e.avatars,
              size: "md",
              max: 3
            }
          ),
          o === "team" && /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ r(
              Is,
              {
                name: e.avatar.name,
                src: e.avatar.src,
                size: "xs"
              }
            ),
            n && /* @__PURE__ */ r("span", { className: k(Ge()), children: n })
          ] }),
          o === "company" && /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ r(
              y1,
              {
                name: e.avatar.name,
                src: e.avatar.src,
                size: "xs"
              }
            ),
            n && /* @__PURE__ */ r("span", { className: k(Ge()), children: n })
          ] }),
          o === "alert" && /* @__PURE__ */ r(Ps, { text: e.alertLabel, level: e.level }),
          o === "balance" && /* @__PURE__ */ r(N6, { balance: e.balance })
        ]
      }
    ),
    n && !F6.has(o) && /* @__PURE__ */ r(
      oe.span,
      {
        className: k(Ge()),
        animate: { opacity: s ? 0 : 1 },
        transition: i,
        children: n
      }
    )
  ] });
}, Gr = {
  positive: {
    stroke: "hsl(var(--positive-50))",
    fill: "hsl(var(--positive-50))",
    border: "border-f1-border-positive-bold"
  },
  negative: {
    stroke: "hsl(var(--critical-50))",
    fill: "hsl(var(--critical-50))",
    border: "border-f1-border-critical-bold"
  },
  neutral: {
    stroke: "hsl(var(--neutral-50))",
    fill: "hsl(var(--neutral-50))",
    border: "border-f1-border"
  }
};
function V6(e, t) {
  const n = e[0]?.value ?? 0, o = e[e.length - 1]?.value ?? 0, s = Math.sign(o - n), i = t ? s * -1 : s;
  return i > 0 ? "positive" : i < 0 ? "negative" : "neutral";
}
const T6 = ({
  cx: e,
  cy: t,
  index: n,
  dataLength: o,
  color: s
}) => n !== o - 1 || e == null || t == null ? null : /* @__PURE__ */ r("circle", { cx: e, cy: t, r: 2, fill: s, stroke: "none" }), H6 = ({
  label: e,
  direction: t
}) => {
  const n = Gr[t];
  return /* @__PURE__ */ r(
    "span",
    {
      className: k(
        "absolute right-0 inline-flex items-center rounded-full border border-solid bg-f1-background px-1.5 py-px text-xs font-medium shadow",
        t === "negative" ? "bottom-0 translate-y-full" : "top-0 -translate-y-full",
        n.border,
        {
          positive: "text-f1-foreground-positive",
          negative: "text-f1-foreground-critical",
          neutral: "text-f1-foreground-secondary"
        }[t]
      ),
      "data-testid": "sparkline-balance",
      children: e
    }
  );
}, A6 = ({
  data: e,
  label: t,
  invertStatus: n
}) => {
  const s = `sparkline-gradient-${vt().replace(/:/g, "")}`, i = V6(e, n), a = Gr[i];
  return /* @__PURE__ */ r("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ c(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${i} trend`,
      children: [
        /* @__PURE__ */ r(Ds, { width: "100%", height: "100%", children: /* @__PURE__ */ c(
          Zs,
          {
            data: e,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ c("linearGradient", { id: s, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ r("stop", { offset: "5%", stopColor: a.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ r("stop", { offset: "95%", stopColor: a.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ r(_s, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ r(
                Os,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: a.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${s})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (d) => /* @__PURE__ */ $e(
                    T6,
                    {
                      ...d,
                      key: d.index,
                      dataLength: e.length,
                      color: a.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ r(H6, { label: t, direction: i })
      ]
    }
  ) });
}, Wr = p(
  (e, t) => {
    const {
      description: n,
      heading: o,
      label: s,
      selected: i = !1,
      onClick: a,
      onAskOne: d,
      className: l,
      ...u
    } = e, [f, g] = P(!1), [m, h] = P(!1), C = f || m, v = ye(), w = C && !!d, x = {
      duration: v ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, N = () => {
      a?.();
    }, T = (E) => {
      E.currentTarget === E.target && (E.key === "Enter" || E.key === " ") && (E.preventDefault(), a?.());
    };
    return /* @__PURE__ */ c("div", { className: "relative", children: [
      i && /* @__PURE__ */ c(xe, { children: [
        /* @__PURE__ */ r(
          "div",
          {
            "data-testid": "selected-border",
            className: k(
              "absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient"
            )
          }
        ),
        /* @__PURE__ */ r(
          "div",
          {
            "aria-hidden": !0,
            className: k(
              "pointer-events-none absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient opacity-80 blur-sm"
            )
          }
        )
      ] }),
      /* @__PURE__ */ c(
        "div",
        {
          ref: t,
          role: a ? "button" : void 0,
          tabIndex: a ? 0 : void 0,
          className: k(
            M6({ selected: i }),
            i && "relative border-transparent",
            a && "cursor-pointer select-none",
            a && me(),
            l
          ),
          onClick: a ? N : void 0,
          onKeyDown: a ? T : void 0,
          onMouseEnter: () => g(!0),
          onMouseLeave: () => g(!1),
          onFocus: () => h(!0),
          onBlur: () => h(!1),
          children: [
            /* @__PURE__ */ r(
              R6,
              {
                description: n,
                isRevealed: C,
                onAskOne: d
              }
            ),
            u.content === "sparkline" ? /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ r("span", { className: k(zr()), children: o }),
              /* @__PURE__ */ r(
                oe.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: w ? 0 : 1 },
                  transition: x,
                  children: /* @__PURE__ */ r(
                    A6,
                    {
                      data: u.data,
                      label: s ?? "",
                      invertStatus: u.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ r(
              S6,
              {
                heading: o,
                label: s,
                shouldFadeContent: w,
                fadeTransition: x,
                ...u
              }
            )
          ]
        }
      )
    ] });
  }
);
Wr.displayName = "F0AiInsightCardInternal";
const B6 = ["className"], qr = p((e, t) => {
  const n = B6.reduce((o, s) => {
    const { [s]: i, ...a } = o;
    return a;
  }, e);
  return /* @__PURE__ */ r(Wr, { ref: t, ...n });
});
qr.displayName = "F0AiInsightCard";
const $6 = () => /* @__PURE__ */ c(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ r(ue, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ r(ue, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ r(ue, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ r(ue, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ r(ue, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), R9 = It(
  Pt(qr, $6)
), F9 = [
  "text",
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance",
  "sparkline"
], Xr = 180, I6 = (e) => Number.isFinite(e) ? Math.max(0, Math.floor(e)) : Xr, P6 = (e, t) => e.length <= t ? e : `${e.slice(0, t).trimEnd()}...`, j6 = (e) => e.showActions !== !1, D6 = (e) => Object.fromEntries(
  Object.entries(e).filter(([t]) => t.startsWith("data-"))
);
function Z6(e) {
  const {
    module: t,
    heading: n,
    title: o,
    subtitle: s,
    description: i,
    seeMoreLabel: a,
    maxCollapsedDescriptionLength: d = Xr
  } = e, [l, u] = P(!1), f = vt(), g = I(null), m = I6(
    d
  ), h = i.length > m, C = l ? i : P6(i, m), v = j6(e) ? e : null, w = D6(e);
  return X(() => {
    l && g.current?.focus();
  }, [l]), /* @__PURE__ */ c(
    "section",
    {
      className: "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
      ...w,
      children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-3 px-4 py-3", children: [
          t && /* @__PURE__ */ r(Ot, { module: t, size: "lg" }),
          /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ r("h2", { className: "truncate text-lg font-semibold text-f1-foreground", children: n }),
            s && /* @__PURE__ */ r("p", { className: "truncate text-base text-f1-foreground-secondary", children: s })
          ] })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-2 px-4 py-3", children: [
          /* @__PURE__ */ r("h3", { className: "text-lg font-semibold text-f1-foreground", children: o }),
          /* @__PURE__ */ c(
            "p",
            {
              id: f,
              ref: g,
              tabIndex: l ? -1 : void 0,
              className: k(
                "text-base text-f1-foreground whitespace-pre-wrap break-words",
                l && me(),
                !l && "inline"
              ),
              children: [
                C,
                h && !l && /* @__PURE__ */ c(xe, { children: [
                  " ",
                  /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: k(
                        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
                        me()
                      ),
                      "aria-controls": f,
                      "aria-expanded": l,
                      onClick: () => u(!0),
                      children: a
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        v && /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-3 border-0 border-t border-solid border-f1-border-secondary px-4 py-3", children: /* @__PURE__ */ r(
          pe,
          {
            type: "button",
            label: v.primaryActionLabel,
            icon: v.primaryActionIcon,
            onClick: v.onPrimaryAction
          }
        ) })
      ]
    }
  );
}
Z6.displayName = "F0AiProposalCard";
const _6 = ({
  icon: e,
  title: t,
  children: n
}) => {
  const [o, s] = P(!1), i = ye();
  return /* @__PURE__ */ c(
    zt,
    {
      className: "mb-1 w-full",
      open: o,
      onOpenChange: s,
      children: [
        /* @__PURE__ */ c(Gt, { className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90", children: [
          /* @__PURE__ */ r("span", { className: "mr-2 *:block", children: /* @__PURE__ */ r(le, { icon: e, className: "block" }) }),
          /* @__PURE__ */ r("span", { className: "mr-[2px]", children: t }),
          /* @__PURE__ */ r(
            le,
            {
              icon: Ke,
              className: "h-4 w-4 transition-transform duration-200"
            }
          )
        ] }),
        /* @__PURE__ */ r(Wt, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ r(
          oe.div,
          {
            initial: !1,
            animate: {
              height: o ? "auto" : 0,
              opacity: o ? 1 : 0,
              visibility: o ? "visible" : "hidden"
            },
            transition: {
              duration: i ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: n
          }
        ) })
      ]
    }
  );
}, O6 = (e) => Vl[e] ?? Ft, U6 = ({ iconName: e }) => e ? /* @__PURE__ */ r("div", { className: "mr-1 flex items-center justify-center", children: /* @__PURE__ */ r(le, { icon: O6(e), size: "md", color: "default" }) }) : null;
function z6({
  sources: e,
  title: t
}) {
  const n = Y();
  if (!e || e.length === 0 || !Array.isArray(e))
    return null;
  const o = t ?? n.ai.resourcesGroupTitle;
  return /* @__PURE__ */ r(_6, { icon: w1, title: o, children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2", children: e.map((s, i) => {
    const a = /* @__PURE__ */ r(U6, { iconName: s.icon });
    return s.link ? /* @__PURE__ */ r(
      Ie,
      {
        "aria-label": s.title,
        href: s.link,
        size: "md",
        target: s.targetBlank ? "_blank" : "_self",
        variant: "ghost",
        className: "justify-start truncate hover:bg-f1-background-hover",
        compact: !0,
        prepend: a,
        children: /* @__PURE__ */ r("div", { className: "flex w-full items-start", children: s.title })
      },
      i
    ) : /* @__PURE__ */ c(
      "div",
      {
        className: "flex min-w-0 flex-1 items-center gap-1 px-[6px] py-1.5 font-medium text-f1-foreground",
        children: [
          a,
          s.title
        ]
      },
      i
    );
  }) }) });
}
z6.displayName = "F0AiMessageSources";
async function G6(e, t, n) {
  const o = await import("./xlsx-Bedf3nwD.js"), s = o.utils.table_to_book(e, { sheet: "Data" });
  o.writeFile(s, `${n}.${t}`);
}
function W6({
  dataset: e,
  title: t,
  filename: n
}) {
  const o = Y(), s = I(null), i = t ?? o.ai.aiTable.title, a = q(
    (d) => {
      if (!s.current) return;
      const l = n ?? (i.replace(/\s+/g, "_").toLowerCase() || "table");
      G6(s.current, d, l);
    },
    [i, n]
  );
  return e.columns?.length ? /* @__PURE__ */ c(
    a1,
    {
      display: "flex",
      flexDirection: "column",
      gap: "md",
      borderRadius: "md",
      border: "default",
      borderColor: "secondary",
      children: [
        /* @__PURE__ */ c(
          a1,
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: "lg",
            border: "none",
            borderBottom: "default",
            borderColor: "secondary",
            paddingX: "md",
            paddingY: "sm",
            children: [
              /* @__PURE__ */ r(
                ce,
                {
                  tag: "h2",
                  className: "text-base font-medium capitalize text-f1-foreground",
                  children: i
                }
              ),
              /* @__PURE__ */ r(
                Qe,
                {
                  icon: Re,
                  size: "md",
                  items: [
                    {
                      label: o.ai.aiTable.downloadExcel,
                      icon: Re,
                      onClick: () => a("xlsx")
                    },
                    {
                      label: o.ai.aiTable.downloadCsv,
                      icon: Re,
                      onClick: () => a("csv")
                    }
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ r(a1, { overflowX: "auto", children: /* @__PURE__ */ c(
          "table",
          {
            ref: s,
            className: k(
              "w-full border-separate border-spacing-0 text-md",
              "[&_tbody_tr:last-child_td]:border-b-0"
            ),
            children: [
              /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { children: e.columns.map((d) => /* @__PURE__ */ r(
                "th",
                {
                  className: "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
                  children: e.columnLabels?.[d] ?? d
                },
                d
              )) }) }),
              /* @__PURE__ */ r("tbody", { children: e.rows.map((d, l) => /* @__PURE__ */ r("tr", { children: e.columns.map((u) => {
                const f = d[u];
                return /* @__PURE__ */ r(
                  "td",
                  {
                    className: "max-w-72 border-0 border-b border-solid border-f1-border-secondary px-3 py-2 text-f1-foreground",
                    children: /* @__PURE__ */ r(ce, { children: f == null ? "" : String(f) })
                  },
                  u
                );
              }) }, l)) })
            ]
          }
        ) })
      ]
    }
  ) : null;
}
W6.displayName = "F0AiTableCard";
function q6({ credits: e }) {
  const t = Y(), [n, o] = P(!1), [s, i] = P(!1), [a, d] = P(!1), [l, u] = P(null), f = q(
    (h) => {
      o(h), h && e?.fetchUsage && (i(!0), d(!1), e.fetchUsage().then((C) => {
        u(C), d(!1);
      }).catch(() => {
        d(!0);
      }).finally(() => {
        i(!1);
      }));
    },
    [e]
  );
  if (!e) return null;
  const g = l ? Math.min(100, Math.round(l.used / l.total * 100)) : 0, m = e.companyName;
  return /* @__PURE__ */ c(k1, { open: n, onOpenChange: f, children: [
    /* @__PURE__ */ r(b1, { asChild: !0, children: /* @__PURE__ */ r(
      fe,
      {
        variant: "ghost",
        hideLabel: !0,
        label: t.t("ai.credits.title"),
        icon: x1,
        pressed: n
      }
    ) }),
    /* @__PURE__ */ c(
      L1,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          m && /* @__PURE__ */ c("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ r(
              y1,
              {
                name: e.companyName ?? "",
                src: e.companyLogoUrl,
                size: "lg"
              }
            ),
            /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ r(ce, { tag: "span", className: "font-medium", children: e.companyName ?? "" }),
              e.planName && /* @__PURE__ */ r(
                ce,
                {
                  tag: "span",
                  className: "text-sm font-medium text-f1-foreground-secondary",
                  children: e.planName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c("div", { className: "flex flex-col rounded border border-solid border-f1-border-secondary", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-col gap-2 p-3", children: [
              s && /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ c("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ r("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }),
                  /* @__PURE__ */ r("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })
                ] }),
                /* @__PURE__ */ r("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
                /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ r("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }),
                  /* @__PURE__ */ r("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })
                ] })
              ] }),
              a && /* @__PURE__ */ r("span", { className: "text-sm text-f1-foreground-secondary", children: t.t("ai.credits.creditsError") }),
              !s && !a && l && /* @__PURE__ */ c(xe, { children: [
                /* @__PURE__ */ c("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ r("span", { className: "text-base font-medium text-f1-foreground", children: t.t("ai.credits.title") }),
                  /* @__PURE__ */ r("span", { className: "font-medium text-f1-foreground-secondary", children: t.t("ai.credits.creditsLeft", {
                    total: Math.max(
                      0,
                      l.total - l.used
                    ).toLocaleString()
                  }) })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ r("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ r(
                  oe.div,
                  {
                    className: "h-full rounded-full",
                    style: {
                      width: `${g}%`,
                      backgroundImage: "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)",
                      backgroundSize: "300% 100%"
                    },
                    animate: {
                      backgroundPosition: ["0% 0%", "100% 0%"]
                    },
                    transition: {
                      duration: 4,
                      ease: "linear",
                      repeat: 1 / 0,
                      repeatType: "reverse"
                    }
                  }
                ) }) }),
                /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ r("div", { className: "h-2 w-2 rounded-full bg-f1-border" }),
                  /* @__PURE__ */ r("span", { className: "text-sm tabular-nums text-f1-foreground-secondary", children: t.t("ai.credits.monthlyCredits") })
                ] })
              ] })
            ] }),
            e.upgradePlanUrl && /* @__PURE__ */ c("div", { className: "flex items-center justify-between border-0 border-t border-solid border-f1-border-secondary p-3", children: [
              /* @__PURE__ */ r("span", { children: t.t("ai.credits.needMoreCredits") }),
              /* @__PURE__ */ r(
                pe,
                {
                  variant: "outlinePromote",
                  href: e.upgradePlanUrl,
                  label: t.t("ai.credits.upgradePlan"),
                  icon: Bt
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
const X6 = "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)";
function Y6({
  employeeCredits: e
}) {
  const t = Y(), n = ye(), [o, s] = P(!1), [i, a] = P(!1), [d, l] = P(!1), [u, f] = P(null), g = q(
    (v) => {
      s(v), v && e?.fetchUsage && (a(!0), l(!1), e.fetchUsage().then((w) => {
        f(w), l(!1);
      }).catch(() => {
        l(!0);
      }).finally(() => {
        a(!1);
      }));
    },
    [e]
  );
  if (!e) return null;
  const m = !!e.companyName, h = u && u.total > 0 ? Math.min(100, Math.round(u.used / u.total * 100)) : 0, C = u ? Math.max(0, u.total - u.used) : 0;
  return /* @__PURE__ */ c(k1, { open: o, onOpenChange: g, children: [
    /* @__PURE__ */ r(b1, { asChild: !0, children: /* @__PURE__ */ r(
      fe,
      {
        variant: "ghost",
        hideLabel: !0,
        label: t.t("ai.credits.title"),
        icon: x1,
        pressed: o
      }
    ) }),
    /* @__PURE__ */ c(
      L1,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          m && /* @__PURE__ */ c("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ r(
              y1,
              {
                name: e.companyName ?? "",
                src: e.companyLogoUrl,
                size: "lg"
              }
            ),
            /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ r(ce, { tag: "span", className: "font-medium", children: e.companyName ?? "" }),
              e.planName && /* @__PURE__ */ r(
                ce,
                {
                  tag: "span",
                  className: "text-sm font-medium text-f1-foreground-secondary",
                  children: e.planName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex flex-col rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ c("div", { className: "flex flex-col gap-2 p-3", children: [
            i && /* @__PURE__ */ c(
              "div",
              {
                className: "flex flex-col gap-2",
                "aria-busy": "true",
                "aria-live": "polite",
                children: [
                  /* @__PURE__ */ c("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ r("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }),
                    /* @__PURE__ */ r("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })
                  ] }),
                  /* @__PURE__ */ r("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
                  /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ r("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }),
                    /* @__PURE__ */ r("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })
                  ] })
                ]
              }
            ),
            d && /* @__PURE__ */ r("span", { className: "text-sm text-f1-foreground-secondary", children: t.t("ai.credits.creditsError") }),
            !i && !d && u && /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ c("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ r("span", { className: "text-base font-medium text-f1-foreground", children: t.t("ai.credits.employeeCredits") }),
                /* @__PURE__ */ r("span", { className: "font-medium text-f1-foreground-secondary", children: t.t("ai.credits.creditsLeft", {
                  total: C.toLocaleString()
                }) })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ r("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ r(
                oe.div,
                {
                  className: "h-full rounded-full",
                  style: {
                    width: `${h}%`,
                    backgroundImage: X6,
                    backgroundSize: "300% 100%"
                  },
                  animate: n ? void 0 : { backgroundPosition: ["0% 0%", "100% 0%"] },
                  transition: {
                    duration: n ? 0 : 4,
                    ease: "linear",
                    repeat: n ? 0 : 1 / 0,
                    repeatType: "reverse"
                  }
                }
              ) }) }),
              /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ r("div", { className: "h-2 w-2 rounded-full bg-f1-border" }),
                /* @__PURE__ */ r("span", { className: "text-sm tabular-nums text-f1-foreground-secondary", children: t.t("ai.credits.monthlyCredits") })
              ] })
            ] })
          ] }) })
        ]
      }
    )
  ] });
}
const pt = ({
  credits: e,
  employeeCredits: t
}) => t ? /* @__PURE__ */ r(Y6, { employeeCredits: t }) : e ? /* @__PURE__ */ r(q6, { credits: e }) : null, N9 = ({
  historyEnabled: e = !1,
  title: t,
  currentThreadTitle: n,
  fullscreen: o = !1,
  lockVisualizationMode: s = !1,
  onToggleVisualizationMode: i,
  onClose: a,
  onNewChat: d,
  onOpenHistory: l,
  hasMessages: u = !1,
  credits: f,
  employeeCredits: g
}) => {
  const m = Y(), h = $t(`(max-width: ${Us.md}px)`, {
    initializeWithValue: !0
  }), C = !s && !h && /* @__PURE__ */ r(
    fe,
    {
      variant: "ghost",
      hideLabel: !0,
      label: o ? m.ai.collapseChat : m.ai.expandChat,
      icon: o ? Vt : Nt,
      onClick: i
    }
  ), v = /* @__PURE__ */ r(
    fe,
    {
      variant: "ghost",
      hideLabel: !0,
      label: m.ai.closeChat,
      icon: Le,
      onClick: a
    }
  );
  return e ? /* @__PURE__ */ c(
    "header",
    {
      className: k(
        "flex justify-between pl-2.5 pr-3 py-3 w-full overflow-hidden gap-3"
      ),
      children: [
        /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 items-center", children: !s && /* @__PURE__ */ r(
          Ie,
          {
            variant: "ghost",
            size: "md",
            className: "min-w-0 max-w-full [&>div>span>span]:w-full",
            onClick: l,
            children: /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-1", children: [
              /* @__PURE__ */ r(ce, { lines: 1, className: "min-w-0 text-left", children: n ?? m.ai.newConversation }),
              /* @__PURE__ */ r(le, { icon: v1, color: "default", size: "md" })
            ] })
          }
        ) }),
        /* @__PURE__ */ c(
          oe.div,
          {
            className: "flex shrink-0 items-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.2, ease: "easeOut" },
            children: [
              /* @__PURE__ */ r(
                pt,
                {
                  credits: f,
                  employeeCredits: g
                }
              ),
              C,
              v
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ c("header", { className: k("flex justify-between px-4 py-3"), children: [
    /* @__PURE__ */ r("div", { className: "flex items-center", children: /* @__PURE__ */ r("h2", { className: "text-f1-foreground", children: t ?? "" }) }),
    /* @__PURE__ */ c(
      oe.div,
      {
        className: "flex items-center",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2, ease: "easeOut" },
        children: [
          u && !s && /* @__PURE__ */ r(
            fe,
            {
              variant: "ghost",
              hideLabel: !0,
              label: m.ai.startNewChat,
              icon: E1,
              onClick: d
            }
          ),
          /* @__PURE__ */ r(
            pt,
            {
              credits: f,
              employeeCredits: g
            }
          ),
          C,
          v
        ]
      }
    )
  ] });
};
function K6() {
  if (!(typeof navigator > "u"))
    return Ws(navigator.language);
}
function Q6(e) {
  const t = new Date(e), n = /* @__PURE__ */ new Date();
  return Xt(t) ? "today" : Yt(t) ? "yesterday" : zs(t, n) ? "thisMonth" : "older";
}
function J6(e, t) {
  const n = new Date(e), o = K6(), s = I1(n, "p", { locale: o });
  if (Xt(n)) return `${t.today}, ${s}`;
  if (Yt(n)) return `${t.yesterday}, ${s}`;
  const i = !Gs(n, /* @__PURE__ */ new Date());
  return `${I1(n, i ? "MMM d yyyy" : "MMM d", {
    locale: o
  })}, ${s}`;
}
function e9(e) {
  const t = {
    today: [],
    yesterday: [],
    thisMonth: [],
    older: []
  };
  for (const o of e) {
    const s = Q6(o.updatedAt);
    t[s].push(o);
  }
  return ["today", "yesterday", "thisMonth", "older"].filter((o) => t[o].length > 0).map((o) => ({ key: o, threads: t[o] }));
}
function t9({
  thread: e,
  isPinned: t,
  onSelect: n,
  onPin: o,
  onUnpin: s,
  onDelete: i
}) {
  const a = Y(), d = ee(
    () => [
      {
        label: t ? a.ai.unpinChat : a.ai.pinChat,
        icon: nr,
        onClick: () => t ? s(e.id) : o(e.id)
      },
      {
        label: a.ai.deleteChat,
        icon: Mt,
        critical: !0,
        onClick: () => i(e.id)
      }
    ],
    [t, e.id, o, s, i]
  ), l = ee(
    () => J6(e.updatedAt, {
      today: a.ai.today,
      yesterday: a.ai.yesterday
    }),
    [e.updatedAt, a.ai.today, a.ai.yesterday]
  );
  return /* @__PURE__ */ c(
    "div",
    {
      className: k(
        "group flex cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover",
        me("rounded")
      ),
      role: "button",
      tabIndex: 0,
      onKeyDown: (u) => {
        (u.key === "Enter" || u.key === " ") && (u.preventDefault(), n(e.id, e.title));
      },
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: "flex w-full min-w-0 items-center gap-1",
            onClick: () => n(e.id, e.title),
            children: [
              /* @__PURE__ */ r(ce, { lines: 1, className: "text-left font-medium", children: e.title }),
              /* @__PURE__ */ r("span", { className: "shrink-0 font-medium text-f1-foreground-tertiary", children: `- ${l}` })
            ]
          }
        ),
        /* @__PURE__ */ r(
          "div",
          {
            className: k(
              "flex items-center opacity-0 transition-opacity duration-150",
              "group-hover:opacity-100 focus-within:opacity-100",
              "has-[[aria-expanded=true]]:opacity-100"
            ),
            children: /* @__PURE__ */ r(Qe, { items: d, children: /* @__PURE__ */ r(
              pe,
              {
                icon: Rt,
                variant: "ghost",
                size: "md",
                label: a.ai.threadOptions,
                hideLabel: !0
              }
            ) })
          }
        )
      ]
    }
  );
}
function mt({
  label: e,
  threads: t,
  pinnedIds: n,
  onSelect: o,
  onPin: s,
  onUnpin: i,
  onDelete: a
}) {
  const [d, l] = P(!0), u = q(() => {
    l((g) => !g);
  }, []), f = q(
    (g) => {
      (g.key === "Enter" || g.key === " ") && (g.preventDefault(), u());
    },
    [u]
  );
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ c(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: u,
        onKeyDown: f,
        className: k(
          "flex cursor-pointer items-center p-3 gap-1 hover:bg-f1-background-hover",
          me("rounded")
        ),
        children: [
          /* @__PURE__ */ r("span", { className: "text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ r(
            le,
            {
              icon: d ? v1 : yt,
              color: "secondary",
              size: "xs"
            }
          )
        ]
      }
    ),
    d && /* @__PURE__ */ r("div", { className: "flex flex-col", children: t.map((g) => /* @__PURE__ */ r(
      t9,
      {
        thread: g,
        isPinned: n.has(g.id),
        onSelect: o,
        onPin: s,
        onUnpin: i,
        onDelete: a
      },
      g.id
    )) })
  ] });
}
function r9() {
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-2 py-3", children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ c(
    "div",
    {
      className: "flex items-center justify-between gap-3 rounded-lg px-3 py-2",
      children: [
        /* @__PURE__ */ r("div", { className: "h-5 w-full animate-pulse rounded bg-f1-background-secondary" }),
        /* @__PURE__ */ r("div", { className: "h-5 w-6 animate-pulse rounded bg-f1-background-secondary" })
      ]
    },
    t
  )) });
}
const S9 = ({
  onClose: e,
  onSelectThread: t,
  onNewChat: n,
  threads: o,
  isLoading: s,
  error: i,
  pinnedIds: a,
  onPinThread: d,
  onUnpinThread: l,
  onDeleteThread: u
}) => {
  const f = Y(), [g, m] = P("");
  X(() => {
    const L = (H) => {
      H.key === "Escape" && e();
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [e]);
  const h = ee(
    () => ({
      today: f.ai.today,
      yesterday: f.ai.yesterday,
      thisMonth: f.ai.thisMonth,
      older: f.ai.older
    }),
    [
      f.ai.today,
      f.ai.yesterday,
      f.ai.thisMonth,
      f.ai.older
    ]
  ), C = ee(() => {
    if (!g.trim()) return o;
    const L = g.toLowerCase();
    return o.filter((H) => H.title.toLowerCase().includes(L));
  }, [o, g]), v = ee(
    () => C.filter((L) => a.has(L.id)),
    [C, a]
  ), w = ee(
    () => C.filter((L) => !a.has(L.id)),
    [C, a]
  ), x = ee(
    () => e9(w),
    [w]
  ), N = q(
    (L, H) => {
      t(L, H), e();
    },
    [t, e]
  ), T = q(() => {
    n(), e();
  }, [n, e]), E = q(
    (L) => {
      u(L);
    },
    [u]
  ), y = v.length > 0 || x.length > 0;
  return Kt(
    /* @__PURE__ */ c(xe, { children: [
      /* @__PURE__ */ r(
        "div",
        {
          className: "fixed inset-0 z-50 bg-f1-background-overlay animate-in fade-in-0",
          onClick: e,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ r(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": f.ai.chatHistory,
          className: k(
            "fixed inset-0 z-50 flex items-center justify-center",
            "pointer-events-none",
            "animate-in fade-in-0 zoom-in-95"
          ),
          children: /* @__PURE__ */ c(
            "div",
            {
              className: k(
                "pointer-events-auto relative flex w-full max-w-[600px] flex-col",
                "rounded-xl bg-f1-background shadow-lg",
                "max-h-[min(600px,80vh)]"
              ),
              children: [
                /* @__PURE__ */ c("div", { className: "flex flex-shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary py-2 pl-5 pr-3", children: [
                  /* @__PURE__ */ r(le, { icon: w1, color: "secondary", size: "md" }),
                  /* @__PURE__ */ r(
                    "input",
                    {
                      type: "text",
                      value: g,
                      onChange: (L) => m(L.target.value),
                      placeholder: f.ai.searchChats,
                      className: k(
                        "w-full",
                        "py-2.5 pr-3",
                        "text-base text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary focus:outline-none",
                        "outline-none"
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-1 overflow-y-auto p-2", children: [
                  /* @__PURE__ */ r(
                    Ie,
                    {
                      variant: "ghost",
                      size: "md",
                      className: "py-1 [&>div>span>span]:w-full",
                      onClick: T,
                      children: /* @__PURE__ */ c("div", { className: "flex w-full items-center gap-2", children: [
                        /* @__PURE__ */ r(le, { icon: E1, color: "default", size: "md" }),
                        /* @__PURE__ */ r(ce, { lines: 1, className: "text-left", children: f.ai.startNewChat })
                      ] })
                    }
                  ),
                  s && /* @__PURE__ */ r(r9, {}),
                  !s && i && /* @__PURE__ */ r("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: i }),
                  !s && !i && !y && /* @__PURE__ */ r("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: f.ai.noPreviousChats }),
                  !s && !i && v.length > 0 && /* @__PURE__ */ r(
                    mt,
                    {
                      label: f.ai.pinnedChats,
                      threads: v,
                      pinnedIds: a,
                      onSelect: N,
                      onPin: d,
                      onUnpin: l,
                      onDelete: E
                    }
                  ),
                  !s && !i && x.map((L) => /* @__PURE__ */ r(
                    mt,
                    {
                      label: h[L.key],
                      threads: L.threads,
                      pinnedIds: a,
                      onSelect: N,
                      onPin: d,
                      onUnpin: l,
                      onDelete: E
                    },
                    L.key
                  ))
                ] })
              ]
            }
          )
        }
      )
    ] }),
    document.body
  );
}, Yr = "f0-ai-pinned-threads";
function n9() {
  const e = qs(Yr, []);
  return new Set(Array.isArray(e) ? e : []);
}
function f1(e) {
  Xs(Yr, [...e]);
}
function V9({
  enabled: e = !1,
  fetchThreads: t,
  deleteThread: n
}) {
  const [o, s] = P([]), [i, a] = P(!1), [d, l] = P(null), [u, f] = P(n9), g = q(async () => {
    a(!0), l(null);
    try {
      const v = await t();
      s(v);
    } catch (v) {
      const w = v instanceof Error ? v.message : "Failed to fetch chat history";
      l(w), s([]);
    } finally {
      a(!1);
    }
  }, [t]);
  X(() => {
    e && g();
  }, [e, g]);
  const m = q((v) => {
    f((w) => {
      const x = new Set(w);
      return x.add(v), f1(x), x;
    });
  }, []), h = q((v) => {
    f((w) => {
      const x = new Set(w);
      return x.delete(v), f1(x), x;
    });
  }, []), C = q(
    async (v) => {
      try {
        await n(v), s((w) => w.filter((x) => x.id !== v)), f((w) => {
          if (!w.has(v)) return w;
          const x = new Set(w);
          return x.delete(v), f1(x), x;
        });
      } catch {
        g();
      }
    },
    [n, g]
  );
  return {
    threads: o,
    isLoading: i,
    error: d,
    refetch: g,
    pinnedIds: u,
    pinThread: m,
    unpinThread: h,
    deleteThread: C
  };
}
export {
  x9 as A,
  bi as B,
  W0 as C,
  a0 as D,
  Z0 as E,
  p9 as F,
  yi as G,
  D5 as H,
  va as I,
  a1 as J,
  ma as K,
  da as L,
  ua as M,
  ca as N,
  ga as O,
  p2 as P,
  h1 as T,
  w9 as a,
  k9 as b,
  p4 as c,
  m9 as d,
  Tr as e,
  b9 as f,
  L9 as g,
  u9 as h,
  y9 as i,
  M9 as j,
  E9 as k,
  R9 as l,
  g9 as m,
  F9 as n,
  f9 as o,
  Z6 as p,
  z6 as q,
  W6 as r,
  N9 as s,
  S9 as t,
  C9 as u,
  V9 as v,
  h9 as w,
  v9 as x,
  lr as y,
  Hl as z
};
