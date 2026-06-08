import { jsxs as f, jsx as o, Fragment as $e } from "react/jsx-runtime";
import * as As from "react";
import { useInsertionEffect as Vs, forwardRef as v, createElement as Rt, useRef as j, useMemo as le, useEffect as ie, useState as U, useCallback as Q, createContext as Ht, useContext as kt, useLayoutEffect as Ro, useId as No, memo as Fs } from "react";
import { c9 as Ps, ca as $s, cb as Is, cc as Hs, cd as To, ce as Os, cf as js, cg as Ds, ch as Zs, ci as Bs, cj as Ao, ck as Us, cl as zs, cm as Ws, cn as Gs, co as qs, cp as Xs, cq as Ys, cr as Wt, cs as Ks, ct as Qs, cu as Js, cv as ea, cw as ta, cx as ra, W as Vo, cy as na, cz as oa, cA as sa, cB as aa, cC as ia, cD as Fo, cE as ca, cF as la, a4 as Br, cG as da, aH as ua, cH as fa, cI as ha, cJ as pa, ae as ma, cK as ga, bH as va, a8 as Ur, ab as Ca, cL as wa, a2 as zr, _ as Po, N as nr, a1 as $o, b7 as xa, cM as ka, b0 as ya, bG as ba, Y as ze, as as La, bb as Io, cN as Ma, bE as Ho, cO as rt, bA as Ea, cP as _a, cQ as Wr, a$ as Oo, cR as Sa, cS as Ra, cT as Na, cU as Ta, cV as jo, bs as Aa, bt as Va, cW as Fa, cX as Pa, cY as $a, cZ as Ia, c_ as Ha, c$ as Oa, d0 as ja, d1 as Da, d2 as Za, d3 as Ba, d4 as Ua, d5 as za, d6 as Wa, bF as Ga, a9 as qa, bo as Xa, d7 as Ya, d8 as Ka, d9 as Qa, da as Ja, db as ei, dc as ti, dd as ri, an as ni, de as Do, J as oi, Z as si, df as Zo, dg as ai, ba as ii, b9 as ci, dh as li, di as Bo, dj as di, a_ as ui, aw as fi, dk as hi, aq as pi, b5 as mi, dl as Uo, dm as gi, dn as vi, bf as Gr, dp as qr, bC as Ci, bB as wi, bD as zo, dq as xi, z as ki, y as yi, dr as bi, ds as Li, dt as Mi, du as Ei, dv as _i, dw as Wo, dx as Si, aa as Ri, dy as Ni, H as Me, o as We, m as R, ac as Le, dz as Ti, bi as Ai, bv as Vi, w as Xr, dA as Fi, a3 as or, bU as Pi, ar as Sr, M as Ee, C as ye, a6 as Yr, ad as Go, bj as qo, dB as $i, aZ as Xo, s as Te, dC as Ii, dD as Hi, S as Se, dE as Yo, aj as Oi, dF as ji, dG as Di, A as Ze, n as ge, u as he, dH as Zi, dI as Bi, bY as Ui, l as zi, k as Wi, i as Gi, dJ as fn, dK as qi, dL as Xi, dM as Yi, dN as Ki, dO as Qi, a7 as Ji, c7 as Ko, $ as ec, dP as tc, aN as Ge, aB as Kr, dQ as rc, aC as Qr, aD as Jr, b as Ke, bw as nc, O as oc, dR as sc, dS as ac, dT as ic, dU as hn, a0 as cc, ai as Qo, aQ as Jo, dV as lc, bT as dc, aV as e1, bN as uc, dW as fc, aS as Ft, bd as t1, dX as r1, be as n1, dY as o1, dZ as hc, bh as pc, d_ as mc, b6 as en, bp as gc, d$ as vc, e0 as Cc, e1 as wc, e2 as xc, e3 as kc, x as yc, e4 as s1, e5 as a1, e6 as bc, ah as pn, e7 as Lc, ag as Mc, e8 as Ec, e9 as _c, c as Sc } from "./F0CanvasPanel-xA-JU8Gz.js";
import { createPortal as i1 } from "react-dom";
import { defaultTranslations as Rc } from "./i18n-provider-defaults.js";
import { useTrackVolume as Nc } from "@livekit/components-react";
import './F0AiProcessingOverlay.css';function Tc(t, e, r) {
  Vs(() => t.on(e, r), [t, e, r]);
}
function tn(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function c1(t, e, r, n) {
  return typeof t == "string" && tn(e) ? Ps(t, r, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function Ac(t, e, r) {
  return t * (e + 1);
}
function mn(t, e, r, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : n.get(e) ?? t;
}
const Vc = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function l1(t, e) {
  return $s(t) ? t[Vc(0, t.length, e)] : t;
}
function Fc(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    s.at > e && s.at < r && (Hs(t, s), n--);
  }
}
function Pc(t, e, r, n, s, a) {
  Fc(t, s, a);
  for (let i = 0; i < e.length; i++)
    t.push({
      value: e[i],
      at: Is(s, a, n[i]),
      easing: l1(r, i)
    });
}
function $c(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] = t[r] / (e + 1);
}
function Ic(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const Hc = "easeInOut", Oc = 20;
function jc(t, { defaultTransition: e = {}, ...r } = {}, n, s) {
  const a = e.duration || 0.3, i = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = {}, d = /* @__PURE__ */ new Map();
  let u = 0, h = 0, g = 0;
  for (let p = 0; p < t.length; p++) {
    const m = t[p];
    if (typeof m == "string") {
      d.set(m, h);
      continue;
    } else if (!Array.isArray(m)) {
      d.set(m.name, mn(h, m.at, u, d));
      continue;
    }
    let [C, w, b = {}] = m;
    b.at !== void 0 && (h = mn(h, b.at, u, d));
    let P = 0;
    const A = (N, x, k, y = 0, M = 0) => {
      const _ = Dc(N), { delay: L = 0, times: E = Os(_), type: T = "keyframes", repeat: B, repeatType: X, repeatDelay: J = 0, ...te } = x;
      let { ease: oe = e.ease || "easeOut", duration: ee } = x;
      const S = typeof L == "function" ? L(y, M) : L, W = _.length, O = Zs(T) ? T : s?.[T];
      if (W <= 2 && O) {
        let D = 100;
        if (W === 2 && Uc(_)) {
          const be = _[1] - _[0];
          D = Math.abs(be);
        }
        const re = { ...te };
        ee !== void 0 && (re.duration = Bs(ee));
        const de = js(re, D, O);
        oe = de.ease, ee = de.duration;
      }
      ee ?? (ee = a);
      const Y = h + S;
      E.length === 1 && E[0] === 0 && (E[1] = 1);
      const Ce = E.length - _.length;
      if (Ce > 0 && Ds(E, Ce), _.length === 1 && _.unshift(null), B) {
        Ao(B < Oc, "Repeat count too high, must be less than 20"), ee = Ac(ee, B);
        const D = [..._], re = [...E];
        oe = Array.isArray(oe) ? [...oe] : [oe];
        const de = [...oe];
        for (let be = 0; be < B; be++) {
          _.push(...D);
          for (let V = 0; V < D.length; V++)
            E.push(re[V] + (be + 1)), oe.push(V === 0 ? "linear" : l1(de, V - 1));
        }
        $c(E, B);
      }
      const me = Y + ee;
      Pc(k, _, oe, E, Y, me), P = Math.max(S + ee, P), g = Math.max(me, g);
    };
    if (To(C)) {
      const N = gn(C, c);
      A(w, b, vn("default", N));
    } else {
      const N = c1(C, w, n, l), x = N.length;
      for (let k = 0; k < x; k++) {
        w = w, b = b;
        const y = N[k], M = gn(y, c);
        for (const _ in w)
          A(w[_], Zc(b, _), vn(_, M), k, x);
      }
    }
    u = h, h += P;
  }
  return c.forEach((p, m) => {
    for (const C in p) {
      const w = p[C];
      w.sort(Ic);
      const b = [], P = [], A = [];
      for (let x = 0; x < w.length; x++) {
        const { at: k, value: y, easing: M } = w[x];
        b.push(y), P.push(Us(0, g, k)), A.push(M || "easeOut");
      }
      P[0] !== 0 && (P.unshift(0), b.unshift(b[0]), A.unshift(Hc)), P[P.length - 1] !== 1 && (P.push(1), b.push(null)), i.has(m) || i.set(m, {
        keyframes: {},
        transition: {}
      });
      const N = i.get(m);
      N.keyframes[C] = b, N.transition[C] = {
        ...e,
        duration: g,
        ease: A,
        times: P,
        ...r
      };
    }
  }), i;
}
function gn(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function vn(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function Dc(t) {
  return Array.isArray(t) ? t : [t];
}
function Zc(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const Bc = (t) => typeof t == "number", Uc = (t) => t.every(Bc);
function zc(t, e) {
  return t in e;
}
class Wc extends zs {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, r) {
    if (zc(r, e)) {
      const n = e[r];
      if (typeof n == "string" || typeof n == "number")
        return n;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(e, r) {
    delete r.output[e];
  }
  measureInstanceViewportBox() {
    return Ws();
  }
  build(e, r) {
    Object.assign(e.output, r);
  }
  renderInstance(e, { output: r }) {
    Object.assign(e, r);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function Gc(t) {
  const e = {
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
  }, r = Gs(t) && !qs(t) ? new Xs(e) : new Ys(e);
  r.mount(t), Wt.set(t, r);
}
function qc(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, r = new Wc(e);
  r.mount(t), Wt.set(t, r);
}
function Xc(t, e) {
  return To(t) || typeof t == "number" || typeof t == "string" && !tn(e);
}
function d1(t, e, r, n) {
  const s = [];
  if (Xc(t, e))
    s.push(Ks(t, tn(e) && e.default || e, r && (r.default || r)));
  else {
    const a = c1(t, e, n), i = a.length;
    Ao(!!i, "No valid elements provided.");
    for (let c = 0; c < i; c++) {
      const l = a[c], d = l instanceof Element ? Gc : qc;
      Wt.has(l) || d(l);
      const u = Wt.get(l), h = { ...r };
      "delay" in h && typeof h.delay == "function" && (h.delay = h.delay(c, i)), s.push(...Qs(u, { ...e, transition: h }, {}));
    }
  }
  return s;
}
function Yc(t, e, r) {
  const n = [];
  return jc(t, e, r, { spring: Js }).forEach(({ keyframes: a, transition: i }, c) => {
    n.push(...d1(c, a, i));
  }), n;
}
class Kc {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, r) {
    for (let n = 0; n < this.animations.length; n++)
      this.animations[n][e] = r;
  }
  attachTimeline(e) {
    const r = this.animations.map((n) => n.attachTimeline(e));
    return () => {
      r.forEach((n, s) => {
        n && n(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let r = 0; r < this.animations.length; r++)
      e = Math.max(e, this.animations[r].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((r) => r[e]());
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
class Qc extends Kc {
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function Jc(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function el(t) {
  function e(r, n, s) {
    let a = [];
    return Jc(r) ? a = Yc(r, n, t) : a = d1(r, n, s, t), new Qc(a);
  }
  return e;
}
const tl = el(), rl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M3.1606 8.53576L11.8143 5.07428C11.9335 5.0266 12.0665 5.0266 12.1857 5.07428L20.8394 8.53576C21.2585 8.70339 21.2585 9.29661 20.8394 9.46424L12.1857 12.9257C12.0665 12.9734 11.9335 12.9734 11.8143 12.9257L3.1606 9.46424C2.74152 9.29661 2.74152 8.70339 3.1606 8.53576Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M19 10V15.6703C19 15.8703 18.8808 16.0511 18.697 16.1299L12.197 18.9156C12.0712 18.9695 11.9288 18.9695 11.803 18.9156L5.30304 16.1299C5.1192 16.0511 5 15.8703 5 15.6703V10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), nl = v(rl), ol = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o("mask", { id: "a", fill: "currentColor", children: /* @__PURE__ */ o(
        "path",
        {
          fillRule: "evenodd",
          d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z",
          clipRule: "evenodd",
          vectorEffect: "non-scaling-stroke"
        }
      ) }),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z",
          clipRule: "evenodd",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), sl = v(ol), al = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 9V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V9C20 9.55228 19.5523 10 19 10H5C4.44772 10 4 9.55228 4 9Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 15V10H19V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), il = v(al), cl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.87597 10.0077L3.62403 7.99228C3.55553 7.44426 3.94426 6.94447 4.49228 6.87597L18.5077 5.12403C19.0557 5.05553 19.5555 5.44426 19.624 5.99228L19.876 8.00772C19.9445 8.55574 19.5557 9.05553 19.0077 9.12403L4.99228 10.876C4.44426 10.9445 3.94447 10.5557 3.87597 10.0077Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), ll = v(cl), dl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12.0378 4.99827C9.27031 4.98425 6.64086 6.62323 5.52481 9.34068C4.86209 10.9543 4.84625 12.6725 5.35698 14.2073C5.60483 14.9521 5.9767 15.6537 6.45883 16.2793C6.6563 16.5355 6.87225 16.7789 7.10576 17.0073M16.8942 6.99277C17.4439 7.53039 17.8963 8.15128 18.2391 8.82593C19.1303 10.5797 19.2812 12.6969 18.4752 14.6594C17.3591 17.3768 14.7297 19.0158 11.9621 19.0018",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.51576 15.4263L7.93678 18.1948L5.16824 17.6158",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), ul = v(dl), fl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 19H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 13V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 12.5L19 13.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 7.5,
          cy: 6.5,
          r: 2.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), hl = v(fl), pl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M4 5.78078C4 5.32191 4.3123 4.92193 4.75746 4.81063L11.7575 3.06063C11.9167 3.02082 12.0833 3.02082 12.2425 3.06063L19.2425 4.81063C19.6877 4.92193 20 5.32191 20 5.78078V8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8V5.78078Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o("path", { stroke: "currentColor", d: "M6 9V16", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M18 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M14 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M10 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ml = v(pl), gl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 13L8 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9L12 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), vl = v(gl), Cl = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        d: "M12 1.75C13.3815 1.75019 14.4595 2.86532 15.1504 4.19336C15.4816 4.8302 15.7498 5.56266 15.9434 6.34961C16.4284 6.34988 16.8333 6.35262 17.167 6.37988C17.5405 6.41043 17.8825 6.47529 18.2031 6.63867C18.7018 6.89274 19.1073 7.29825 19.3613 7.79688C19.5247 8.11754 19.5896 8.45951 19.6201 8.83301C19.65 9.19912 19.6504 9.65087 19.6504 10.2002V15.2002C19.6504 16.0295 19.651 16.6908 19.6074 17.2236C19.5633 17.764 19.4699 18.2295 19.252 18.6572C18.902 19.3438 18.3438 19.902 17.6572 20.252C17.2295 20.4699 16.764 20.5633 16.2236 20.6074C15.6908 20.651 15.0295 20.6504 14.2002 20.6504H9.7998C8.97054 20.6504 8.30919 20.651 7.77637 20.6074C7.23603 20.5633 6.77047 20.4699 6.34277 20.252C5.65615 19.902 5.09795 19.3438 4.74805 18.6572C4.53012 18.2295 4.43674 17.764 4.39258 17.2236C4.34904 16.6908 4.34961 16.0295 4.34961 15.2002V10.2002C4.34961 9.65087 4.34997 9.19912 4.37988 8.83301C4.41043 8.45951 4.47529 8.11754 4.63867 7.79688C4.89274 7.29825 5.29825 6.89274 5.79688 6.63867C6.11754 6.47529 6.45951 6.41043 6.83301 6.37988C7.16627 6.35265 7.5705 6.34988 8.05469 6.34961C8.24828 5.56243 8.51833 4.83035 8.84961 4.19336C9.54044 2.86519 10.6184 1.75019 12 1.75ZM9.12598 7.65039C9.05158 8.16025 9.01074 8.68958 9.01074 9.22559C9.01043 9.58418 8.71898 9.87481 8.36035 9.875C8.00156 9.875 7.71028 9.5843 7.70996 9.22559C7.70996 8.69464 7.7455 8.16652 7.8125 7.65137C7.44434 7.65243 7.16671 7.65624 6.93945 7.6748C6.64615 7.69877 6.49373 7.74235 6.38672 7.79688C6.13286 7.92628 5.92628 8.13286 5.79688 8.38672C5.74235 8.49373 5.69877 8.64615 5.6748 8.93945C5.65023 9.24033 5.65039 9.62951 5.65039 10.2002V15.2002C5.65039 16.0507 5.65029 16.6496 5.68848 17.1172C5.72605 17.577 5.79732 17.8525 5.90625 18.0664C6.13155 18.5086 6.49141 18.8684 6.93359 19.0938C7.14751 19.2027 7.42299 19.274 7.88281 19.3115C8.35038 19.3497 8.94928 19.3496 9.7998 19.3496H14.2002C15.0507 19.3496 15.6496 19.3497 16.1172 19.3115C16.577 19.274 16.8525 19.2027 17.0664 19.0938C17.5086 18.8684 17.8684 18.5086 18.0938 18.0664C18.2027 17.8525 18.274 17.577 18.3115 17.1172C18.3497 16.6496 18.3496 16.0507 18.3496 15.2002V10.2002C18.3496 9.62951 18.3498 9.24033 18.3252 8.93945C18.3012 8.64615 18.2576 8.49373 18.2031 8.38672C18.0737 8.13286 17.8671 7.92628 17.6133 7.79688C17.5063 7.74235 17.3539 7.69877 17.0605 7.6748C16.8329 7.65621 16.5547 7.65242 16.1855 7.65137C16.2526 8.16657 16.29 8.69458 16.29 9.22559C16.2897 9.58409 15.9991 9.87466 15.6406 9.875C15.2818 9.875 14.9906 9.5843 14.9902 9.22559C14.9902 8.68955 14.9485 8.16024 14.874 7.65039H9.12598ZM12 3.05078C11.3716 3.05098 10.6293 3.58955 10.0029 4.79395C9.76477 5.25197 9.56079 5.77813 9.40039 6.34961H14.5986C14.4381 5.77833 14.2352 5.25187 13.9971 4.79395C13.3706 3.58954 12.6284 3.05098 12 3.05078Z",
        fill: "currentColor"
      }
    )
  }
), wl = v(Cl), xl = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), kl = v(xl), yl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M8.9999 6.99998V5.99998C8.9999 4.89542 9.89533 3.99998 10.9999 3.99998H12.9999C14.1045 3.99998 14.9999 4.89542 14.9999 5.99998V6.99998",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M7.9999 6.99998V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), bl = v(yl), Ll = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M9.00195 4.53821L4.85303 10.1967C3.8316 11.5898 3.97926 13.5197 5.20072 14.7411L5.35342 14.8938C6.58509 16.1255 8.53503 16.264 9.92845 15.2188L15.5019 11.0382",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M15.502 11.0382C14.6524 11.8878 12.5023 11.1152 10.7096 9.32251C8.91686 7.52977 8.15226 5.38778 9.0018 4.53824C9.85135 3.68869 11.9933 4.4533 13.7861 6.24603C15.5788 8.03877 16.3515 10.1887 15.502 11.0382Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M19.5 17.5C19.5 18.6046 18.6046 19.5 17.5 19.5C16.3954 19.5 15.5 18.6046 15.5 17.5C15.5 15.8589 16.8467 14.2177 17.3299 13.6816C17.4224 13.5791 17.5776 13.5791 17.6701 13.6816C18.1533 14.2177 19.5 15.8589 19.5 17.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ml = v(Ll), El = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5.52922 6.63982L10.5292 3.82732C11.4425 3.31362 12.5575 3.31362 13.4708 3.82732L18.4708 6.63982C19.4154 7.17117 20 8.17072 20 9.25454V14.7455C20 15.8293 19.4154 16.8288 18.4708 17.3602L13.4708 20.1727C12.5575 20.6864 11.4425 20.6864 10.5292 20.1727L5.52922 17.3602C4.58459 16.8288 4 15.8293 4 14.7455V9.25454C4 8.17072 4.58459 7.17117 5.52922 6.63982Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 8L12 12M12 20V12M19 8L12 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M15 15.0662V18.2338C15 19.0111 15.848 19.4912 16.5145 19.0913L17.0145 18.7913C17.3157 18.6106 17.5 18.2851 17.5 17.9338V13.8831C17.5 13.4944 17.076 13.2544 16.7428 13.4543L15.4855 14.2087C15.1843 14.3894 15 14.7149 15 15.0662Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), _l = v(El), Sl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Rl = v(Sl), Nl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Tl = v(Nl), Al = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Vl = v(Al), Fl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 10V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V10C4 8.34315 5.34315 7 7 7H7.27924C7.70967 7 8.09181 6.72457 8.22792 6.31623L8.31623 6.05132C8.72457 4.82629 9.87099 4 11.1623 4H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 6.5L16 6.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Pl = v(Fl), $l = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Il = v($l), Hl = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M19.9995 12.6495C19.9995 13.9164 19.1682 15.0475 17.9214 15.4767L8.20654 18.8194C6.15882 19.5237 3.99986 18.0738 3.99951 15.9933L3.99951 8.00694C3.99979 5.92631 6.15877 4.47641 8.20654 5.18077L17.9214 8.52354C19.1683 8.95274 19.9995 10.0837 19.9995 11.3507L19.9995 12.6495ZM7.71924 6.59874C6.55322 6.19771 5.49981 7.0517 5.49951 8.00694L5.49951 15.9933C5.49988 16.9485 6.55329 17.8024 7.71924 17.4015L8.74951 17.047L8.74951 6.95323L7.71924 6.59874ZM10.2495 7.46983L10.2495 16.5304L13.7495 15.3253L13.7495 8.67491L10.2495 7.46983ZM18.4995 11.3507C18.4995 10.7587 18.108 10.1748 17.4331 9.94249L15.2495 9.19053L15.2495 14.8097L17.4331 14.0577C18.1079 13.8254 18.4995 13.2415 18.4995 12.6495L18.4995 11.3507Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Ol = v(Hl), jl = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M12.9712 6.72803C12.9711 7.69427 12.1874 8.47779 11.2212 8.47803L6.77686 8.47803C5.81044 8.47803 5.02699 7.69441 5.02686 6.72803L5.02686 5.72803C5.02686 4.76153 5.81036 3.97803 6.77686 3.97803L11.2212 3.97803C12.1875 3.97826 12.9712 4.76167 12.9712 5.72803L12.9712 6.72803ZM18.9712 12.5005C18.9712 13.4668 18.1875 14.2503 17.2212 14.2505L6.77686 14.2505C5.81036 14.2505 5.02686 13.467 5.02686 12.5005L5.02686 11.5005C5.02686 10.534 5.81036 9.75049 6.77686 9.75049L17.2212 9.75049C18.1875 9.75072 18.9712 10.5341 18.9712 11.5005L18.9712 12.5005ZM15.9712 18.271C15.9709 19.2371 15.1873 20.0208 14.2212 20.021L6.77685 20.021C5.81052 20.021 5.02712 19.2373 5.02685 18.271L5.02685 17.271C5.02685 16.3045 5.81036 15.521 6.77685 15.521L14.2212 15.521C15.1875 15.5212 15.9712 16.3046 15.9712 17.271L15.9712 18.271ZM11.4712 5.72803C11.4712 5.5901 11.3591 5.47826 11.2212 5.47803L6.77686 5.47803C6.63878 5.47803 6.52686 5.58996 6.52686 5.72803L6.52686 6.72803C6.52699 6.86599 6.63887 6.97803 6.77686 6.97803L11.2212 6.97803C11.359 6.97779 11.4711 6.86584 11.4712 6.72803L11.4712 5.72803ZM17.4712 11.5005C17.4712 11.3626 17.3591 11.2507 17.2212 11.2505L6.77686 11.2505C6.63878 11.2505 6.52686 11.3624 6.52686 11.5005L6.52686 12.5005C6.52686 12.6386 6.63878 12.7505 6.77686 12.7505L17.2212 12.7505C17.3591 12.7503 17.4712 12.6384 17.4712 12.5005L17.4712 11.5005ZM14.4712 17.271C14.4712 17.1331 14.3591 17.0212 14.2212 17.021L6.77685 17.021C6.63878 17.021 6.52685 17.1329 6.52685 17.271L6.52685 18.271C6.52712 18.4088 6.63895 18.521 6.77685 18.521L14.2212 18.521C14.3589 18.5208 14.4709 18.4087 14.4712 18.271L14.4712 17.271Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Dl = v(jl), Zl = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M3.73145 4.97357C4.14535 4.97393 4.48145 5.30958 4.48145 5.72357V10.2646C4.48145 11.6768 4.48184 12.6912 4.54688 13.4872C4.61121 14.2744 4.73473 14.7829 4.94434 15.1943C5.3518 15.9936 6.00238 16.6434 6.80176 17.0507C7.21303 17.2602 7.72096 17.3848 8.50781 17.4492C9.30388 17.5142 10.3192 17.5146 11.7314 17.5146H20.2607C20.6748 17.5148 21.0107 17.8505 21.0107 18.2646C21.0104 18.6784 20.6746 19.0144 20.2607 19.0146H11.7314C10.3439 19.0146 9.25705 19.0145 8.38574 18.9433C7.50611 18.8714 6.77893 18.7227 6.12109 18.3876C5.0394 17.8365 4.15969 16.9565 3.6084 15.8749C3.2731 15.2169 3.12368 14.4893 3.05176 13.6093C2.98058 12.7381 2.98145 11.652 2.98145 10.2646V5.72357C2.98145 5.30936 3.31723 4.97357 3.73145 4.97357ZM18.7578 8.46674C19.0521 8.17559 19.527 8.17856 19.8184 8.4726C20.1095 8.76702 20.1068 9.24185 19.8125 9.53314L16.4014 12.9091L16.3447 12.9599C16.0511 13.1972 15.6197 13.1803 15.3457 12.9091L12.4629 10.0556L8.11621 14.3564C7.82179 14.6474 7.34694 14.6448 7.05566 14.3505C6.76484 14.0561 6.76743 13.5812 7.06152 13.29L11.9346 8.46674C12.2267 8.17759 12.698 8.17781 12.9902 8.46674L15.874 11.3212L18.7578 8.46674Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Bl = v(Zl), Ul = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M21.0005 11.9995C21.0005 12.4136 20.6645 12.7492 20.2505 12.7495L19.9644 12.7495C19.5862 16.8159 16.1656 20.0002 12.0005 20.0005C7.58237 20.0005 4.00075 16.4185 4.00049 12.0005C4.00049 7.83514 7.18391 4.41376 11.2505 4.03564L11.2495 3.75049C11.2495 3.33644 11.5855 3.00075 11.9995 3.00049C16.9699 3.00049 21.0002 7.02917 21.0005 11.9995ZM15.6753 12.7505C15.3277 14.4617 13.8143 15.7503 12.0005 15.7505C9.92963 15.7505 8.25083 14.0713 8.25049 12.0005C8.25049 10.1862 9.53875 8.67211 11.2505 8.32471L11.2505 5.54443C8.01397 5.91634 5.50049 8.66434 5.50049 12.0005C5.50075 15.5901 8.4108 18.5005 12.0005 18.5005C15.3364 18.5002 18.0847 15.9859 18.4565 12.7495L15.6753 12.7505ZM14.2505 12.0005C14.2505 10.758 13.2429 9.75075 12.0005 9.75049C10.7578 9.75049 9.75049 10.7578 9.75049 12.0005C9.75083 13.2428 10.7581 14.2505 12.0005 14.2505C13.2427 14.2502 14.2501 13.2427 14.2505 12.0005ZM19.4624 11.2495C19.1104 7.70663 16.2934 4.88961 12.7505 4.5376L12.7505 8.32471C14.2197 8.62312 15.3771 9.78123 15.6753 11.2505L19.4624 11.2495Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), zl = v(Ul), Wl = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M6.72754 11.0273C7.69378 11.0275 8.4773 11.8111 8.47754 12.7773V17.2217C8.47754 18.1881 7.69393 18.9715 6.72754 18.9717H5.72754C4.76104 18.9717 3.97754 18.1882 3.97754 17.2217V12.7773C3.97777 11.811 4.76119 11.0273 5.72754 11.0273H6.72754ZM12.5 5.02734C13.4664 5.02734 14.2498 5.81104 14.25 6.77734V17.2217C14.25 18.1882 13.4665 18.9717 12.5 18.9717H11.5C10.5335 18.9717 9.75 18.1882 9.75 17.2217V6.77734C9.75023 5.81104 10.5336 5.02734 11.5 5.02734H12.5ZM18.2705 8.02734C19.2366 8.02761 20.0203 8.81121 20.0205 9.77734V17.2217C20.0205 18.188 19.2368 18.9714 18.2705 18.9717H17.2705C16.304 18.9717 15.5205 18.1882 15.5205 17.2217V9.77734C15.5207 8.81104 16.3042 8.02734 17.2705 8.02734H18.2705ZM5.72754 12.5273C5.58961 12.5273 5.47777 12.6395 5.47754 12.7773V17.2217C5.47754 17.3598 5.58947 17.4717 5.72754 17.4717H6.72754C6.8655 17.4715 6.97754 17.3597 6.97754 17.2217V12.7773C6.97731 12.6396 6.86535 12.5275 6.72754 12.5273H5.72754ZM11.5 6.52734C11.3621 6.52734 11.2502 6.63947 11.25 6.77734V17.2217C11.25 17.3598 11.3619 17.4717 11.5 17.4717H12.5C12.6381 17.4717 12.75 17.3598 12.75 17.2217V6.77734C12.7498 6.63947 12.6379 6.52734 12.5 6.52734H11.5ZM17.2705 9.52734C17.1326 9.52734 17.0207 9.63947 17.0205 9.77734V17.2217C17.0205 17.3598 17.1324 17.4717 17.2705 17.4717H18.2705C18.4084 17.4714 18.5205 17.3596 18.5205 17.2217V9.77734C18.5203 9.63963 18.4082 9.52761 18.2705 9.52734H17.2705Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Gl = v(Wl), ql = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Xl = v(ql), Yl = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 6V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 9L20 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 9L6 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 6V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 20V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 15L20 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 15L6 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9L9 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Kl = v(Yl), Ql = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9V12L15.5 14",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Jl = v(Ql), e0 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M10.508 4.49715C12.2437 4.15195 14.0458 4.41874 15.6066 5.253C17.1673 6.08728 18.3903 7.43741 19.0675 9.07234C19.7447 10.7074 19.8342 12.5272 19.3205 14.2208C18.8067 15.9143 17.7216 17.3772 16.2502 18.3604C14.7786 19.3437 13.0114 19.7868 11.2502 19.6134C9.48897 19.4399 7.8424 18.6606 6.59098 17.4093C6.33717 17.1554 6.33722 16.7442 6.59098 16.4903C6.84482 16.2365 7.2561 16.2365 7.50992 16.4903C8.54871 17.529 9.91615 18.1754 11.3781 18.3194C12.8399 18.4633 14.3071 18.0964 15.5285 17.2803C16.7497 16.4643 17.6498 15.2493 18.0763 13.8438C18.5027 12.4381 18.4284 10.9276 17.8664 9.57039C17.3042 8.21318 16.2889 7.09203 14.9933 6.39949C13.6978 5.7071 12.2016 5.48597 10.7609 5.77254C9.32029 6.05921 8.02383 6.83634 7.09196 7.97175C6.28743 8.95212 5.7977 10.1469 5.67887 11.4005L6.5402 10.5401L6.64274 10.4571C6.89502 10.2907 7.23806 10.3181 7.46012 10.5401C7.68199 10.7622 7.70952 11.1053 7.54313 11.3575L7.46012 11.46L5.46012 13.46C5.23812 13.682 4.89497 13.7093 4.64274 13.543L4.5402 13.46L2.5402 11.46L2.45719 11.3575C2.29077 11.1052 2.31822 10.7622 2.5402 10.5401C2.76225 10.3181 3.1053 10.2907 3.35758 10.4571L3.46012 10.5401L4.37028 11.4503C4.48367 9.87729 5.08099 8.37252 6.08707 7.14656C7.20984 5.77868 8.77231 4.84239 10.508 4.49715ZM12.0002 8.34968C12.3591 8.34975 12.6505 8.64113 12.6505 9.00007V11.6231L15.8224 13.4356L15.9298 13.5118C16.1569 13.7113 16.2203 14.0497 16.0646 14.3223C15.9088 14.5948 15.5851 14.7124 15.298 14.6182L15.1779 14.5645L11.6779 12.5645C11.4755 12.4488 11.3499 12.2332 11.3498 12.0001V9.00007C11.3498 8.64109 11.6412 8.34968 12.0002 8.34968Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), t0 = v(e0), r0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13 19.9381C12.6724 19.979 12.3387 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.4104 19.9691 12.8136 19.9095 13.2073",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9V12L15.5 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 18H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), n0 = v(r0), o0 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M12 6C14.2091 6 16 7.79086 16 10C18.2091 10 20 11.7909 20 14C20 16.2091 18.2091 18 16 18H8C5.79086 18 4 16.2091 4 14C4 11.7909 5.79086 10 8 10C8 7.79086 9.79086 6 12 6Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), s0 = v(o0), a0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M6 17V8.5C6 7.94772 6.44772 7.5 7 7.5H15C15.5523 7.5 16 7.94772 16 8.5V17C16 18.6569 14.6569 20 13 20H9C7.34315 20 6 18.6569 6 17Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 2V2C7.44772 2.55228 7.44772 3.44772 8 4V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 2V2C11.4477 2.55228 11.4477 3.44772 12 4V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), i0 = v(a0), c0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 9L11 12L8 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), l0 = v(c0), d0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 18H13",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 15V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12.5 7H6.2C5.0799 7 4.51984 7 4.09202 7.21799C3.71569 7.40973 3.40973 7.71569 3.21799 8.09202C3 8.51984 3 9.0799 3 10.2V11.8C3 12.9201 3 13.4802 3.21799 13.908C3.40973 14.2843 3.71569 14.5903 4.09202 14.782C4.51984 15 5.07989 15 6.2 15H12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M15 8C15 7.06812 15 6.60218 15.1522 6.23463C15.3552 5.74458 15.7446 5.35523 16.2346 5.15224C16.6022 5 17.0681 5 18 5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V15C21 15.9319 21 16.3978 20.8478 16.7654C20.6448 17.2554 20.2554 17.6448 19.7654 17.8478C19.3978 18 18.9319 18 18 18C17.0681 18 16.6022 18 16.2346 17.8478C15.7446 17.6448 15.3552 17.2554 15.1522 16.7654C15 16.3978 15 15.9319 15 15V8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), u0 = v(d0), f0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6.5 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 5C17.0499 6.64327 18.3625 9.16835 18.3625 12C18.3625 14.8316 17.0499 17.3567 15 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), h0 = v(f0), p0 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), m0 = v(p0), g0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 10V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V10M20 10V9C20 7.34315 18.6569 6 17 6H7C5.34315 6 4 7.34315 4 9V10M20 10H4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), v0 = v(g0), C0 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        stroke: "currentColor",
        d: "M4.93 4.54l14.14 5.39c.6.22.59.36.14.62l-5.56 2.85c-.46.23-.66.41-.89.86l-2.89 5.31c-.22.39-.4.4-.55 0L4.34 5.22c-.21-.69-.14-.84.59-.68Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), w0 = v(C0), x0 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), k0 = v(x0), y0 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), b0 = v(y0), L0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 4H18C19.6569 4 21 5.34315 21 7V13C21 14.6569 19.6569 16 18 16H6C4.34315 16 3 14.6569 3 13V7C3 5.34315 4.34315 4 6 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 20H17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 20L9 16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), M0 = v(L0), E0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 9H11.5C10.6716 9 10 9.67157 10 10.5V10.5C10 11.3284 10.6716 12 11.5 12H12.5C13.3284 12 14 12.6716 14 13.5V13.5C14 14.3284 13.3284 15 12.5 15H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), _0 = v(E0), S0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14.5 9H11C10.1716 9 9.5 9.67157 9.5 10.5C9.5 11.3284 10.1716 12 11 12H13C13.8284 12 14.5 12.6716 14.5 13.5C14.5 14.3284 13.8284 15 13 15H9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9V8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 16V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1304 20 16.0663 19.1672 17.5 17.8095",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), R0 = v(S0), N0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4.5 9.5L11.1542 12.6053C11.6903 12.8555 12.3097 12.8555 12.8458 12.6053L19.5 9.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), T0 = v(N0), A0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M20 15V8.61803C20 8.23926 19.786 7.893 19.4472 7.72361L13.3416 4.67082C12.4971 4.24853 11.5029 4.24853 10.6584 4.67082L4.55279 7.72361C4.214 7.893 4 8.23926 4 8.61803V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M4 9L11.4969 12.7484C11.8136 12.9068 12.1864 12.9068 12.5031 12.7484L20 9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), V0 = v(A0), F0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.0001 12L19.0001 12M19.0001 12L16.0001 9.00001M19.0001 12L16.0001 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), P0 = v(F0), $0 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), I0 = v($0), H0 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), O0 = v(H0), j0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.8787 4.87868L17.1213 7.12132C17.6839 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 12H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), D0 = v(j0), Z0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.8787 4.87868L17.1213 7.12132C17.6839 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), B0 = v(Z0), U0 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), z0 = v(U0), W0 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8.44 3.67H8.26c-1.49 0-2.24 0-2.81.29a2.67 2.67 0 0 0-1.17 1.17c-.29.57-.29 1.31-.29 2.81v.18M8.44 20.33H8.26c-1.49 0-2.24 0-2.81-.29a2.67 2.67 0 0 1-1.17-1.17c-.29-.57-.29-1.31-.29-2.81v-.18M20 8.11V7.93c0-1.49 0-2.24-.29-2.81a2.67 2.67 0 0 0-1.17-1.17c-.57-.29-1.31-.29-2.81-.29h-.18M20 15.89v.18c0 1.49 0 2.24-.29 2.81a2.67 2.67 0 0 1-1.17 1.17c-.57.29-1.31.29-2.81.29h-.18",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), G0 = v(W0), q0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 5.50001C9.5 4.50001 11 5.00001 12.5 6.00001C14 7 16 7.00002 18 5.50002V15C16 16.5 14 16.5 12.5 15.5C11 14.5 9.5 14 6 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), X0 = v(q0), Y0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M9 9.44526V4H14.8038V9.44526C14.8038 10.4578 15.1113 11.4466 15.6855 12.2806L18.8423 16.8659C19.7558 18.1928 18.8059 20 17.1949 20H6.60892C4.99797 20 4.04806 18.1928 4.96158 16.8659L8.11836 12.2806C8.69256 11.4466 9 10.4578 9 9.44526Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 4L16 4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), K0 = v(Y0), Q0 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M10.4375 5C10.09 4.38228 9.43639 4 8.72765 4H7.12954C6.07585 4 5.54901 4 5.14167 4.19355C4.72595 4.39108 4.39108 4.72595 4.19355 5.14167C4 5.54901 4 6.07585 4 7.12954V11.2C4 12.8802 4 13.7202 4.32698 14.362C4.6146 14.9265 5.07354 15.3854 5.63803 15.673C6.27976 16 7.11984 16 8.8 16H13.2C14.8802 16 15.7202 16 16.362 15.673C16.9265 15.3854 17.3854 14.9265 17.673 14.362C18 13.7202 18 12.8802 18 11.2V10.4168C18 9.09704 18 8.43714 17.796 7.91257C17.4911 7.12874 16.8713 6.50887 16.0874 6.20402C15.5629 6 14.903 6 13.5832 6H12.1473C11.4386 6 10.785 5.61772 10.4375 5V5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), J0 = v(Q0), ed = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12H5.00001",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M12 20C10.2326 18.1964 9.00001 14.7247 9.00001 12C9.00001 9.27527 10.2326 5.80363 12 4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M12 20C13.7674 18.1964 15 14.7247 15 12C15 9.27527 13.7674 5.80363 12 4",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), td = v(ed), rd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 6V15C4 16.6569 5.34315 18 7 18H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), nd = v(rd), od = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), sd = v(od), ad = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), id = v(ad), cd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5.32843 14.3284L5.5 14.5L10.5 9.5L12.25 11.25C12.9404 11.9404 14.0596 11.9404 14.75 11.25C15.4404 10.5596 15.4404 9.44035 14.75 8.75L12.1213 6.12132C10.9497 4.94975 9.05025 4.94975 7.87868 6.12132L5.32843 8.67157C3.76633 10.2337 3.76633 12.7663 5.32843 14.3284Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M13 7V7C14.1046 5.89543 15.8954 5.89543 17 7L18.6716 8.67157C20.2337 10.2337 20.2337 12.7663 18.6716 14.3284L14.4142 18.5858C13.6332 19.3668 12.3668 19.3668 11.5858 18.5858L11 18L10.9142 18.0858C10.1332 18.8668 8.86683 18.8668 8.08579 18.0858L7.5 17.5V17.5C6.94772 18.0523 6.05228 18.0523 5.5 17.5L5.25 17.25C4.55964 16.5596 4.55964 15.4404 5.25 14.75L6 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M10.4596 15.4596C10.7135 15.2058 10.7135 14.7942 10.4596 14.5404C10.2058 14.2865 9.79422 14.2865 9.54038 14.5404L10.4596 15.4596ZM7.95962 17.9596L10.4596 15.4596L9.54038 14.5404L7.04038 17.0404L7.95962 17.9596Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M13.4596 16.4596C13.7135 16.2058 13.7135 15.7942 13.4596 15.5404C13.2058 15.2865 12.7942 15.2865 12.5404 15.5404L13.4596 16.4596ZM10.9596 18.9596L13.4596 16.4596L12.5404 15.5404L10.0404 18.0404L10.9596 18.9596Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ld = v(cd), dd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 14L20 14V15.2C20 16.8802 20 17.7202 19.673 18.362C19.3854 18.9265 18.9265 19.3854 18.362 19.673C17.7202 20 16.8802 20 15.2 20H8.8C7.11984 20 6.27976 20 5.63803 19.673C5.07354 19.3854 4.6146 18.9265 4.32698 18.362C4 17.7202 4 16.8802 4 15.2V14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 17H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 17H11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), ud = v(dd), fd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M15 13.75C15 12.7835 15.7462 12 16.6667 12C18.5076 12 20 13.567 20 15.5C20 17.433 18.5076 19 16.6667 19C15.7462 19 15 18.2165 15 17.25V13.75Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M9 13.75C9 12.7835 8.25381 12 7.33333 12C5.49238 12 4 13.567 4 15.5C4 17.433 5.49238 19 7.33333 19C8.25381 19 9 18.2165 9 17.25V13.75Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), hd = v(fd), pd = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), md = v(pd), gd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.02676 21H8.70114C8.88929 21 9.06254 20.8948 9.14268 20.7245C9.74058 19.4545 9.99622 18.2105 9.99622 17.0039C9.99622 16.3524 9.76813 15.9227 9.46286 15.2206C9.26905 14.7748 9.03558 14.2714 8.87603 14.0142C8.55464 13.4962 7.92802 13.3349 7.46497 13.5664C7.00191 13.7979 6.88253 14.3546 7.13253 14.8546C7.38253 15.3546 8.08594 16.7242 7.42007 17.162C7.00161 17.437 6.48266 17.3625 6.10336 16.889C5.87911 16.609 5.50323 16.1147 5.50323 15.6956L5.50312 11C5.50312 9.99999 5.25003 9 4.2344 9C3.21877 9 3 10 3 11V16C3 17.5096 3.59595 18.2663 5.20354 20.5694C5.39126 20.8383 5.6988 21 6.02676 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17.9695 21H15.2951C15.1069 21 14.9337 20.8948 14.8535 20.7245C14.2556 19.4545 14 18.2105 14 17.0039C14 16.3524 14.2281 15.9227 14.5334 15.2206C14.7272 14.7748 14.9606 14.2714 15.1202 14.0142C15.4416 13.4962 16.0682 13.3349 16.5312 13.5664C16.9943 13.7979 17.1137 14.3546 16.8637 14.8546C16.6137 15.3546 15.9103 16.7242 16.5761 17.162C16.9946 17.437 17.5136 17.3625 17.8929 16.889C18.1171 16.609 18.493 16.1147 18.493 15.6956L18.4931 11C18.4931 9.99999 18.7462 9 19.7618 9C20.7774 9 20.9962 10 20.9962 11V16C20.9962 17.5096 20.4003 18.2663 18.7927 20.5694C18.605 20.8383 18.2974 21 17.9695 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), vd = v(gd), Cd = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M6.25629 7.60265L10.2563 4.74551C11.2994 4.00044 12.7006 4.00044 13.7437 4.74551L17.7437 7.60265C18.5321 8.16579 19 9.075 19 10.0439V16C19 17.6569 17.6569 19 16 19H15C14.4477 19 14 18.5523 14 18V15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5V18C10 18.5523 9.55228 19 9 19H8C6.34315 19 5 17.6569 5 16V10.0439C5 9.075 5.4679 8.16579 6.25629 7.60265Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), wd = v(Cd), xd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
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
), kd = v(xd), yd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M20 15V10.7146C20 10.2525 19.84 9.80468 19.5471 9.44721L17.6236 7.09895C17.0538 6.40334 16.202 6.00001 15.3028 6.00001H8.31014C7.31744 6.00001 6.38901 6.49108 5.83033 7.31164L4.34677 9.49064C4.12081 9.82252 3.99997 10.2147 3.99997 10.6162V15C3.99997 16.6569 5.34312 18 6.99997 18H17C18.6568 18 20 16.6569 20 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), bd = v(yd), Ld = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 10H11C11.5523 10 12 10.4477 12 11V17C12 17.5523 11.5523 18 11 18H10H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Md = v(Ld), Ed = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 6H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 18H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 6L12 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 9H6C4.89543 9 4 9.89543 4 11V13C4 14.1046 4.89543 15 6 15H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), _d = v(Ed), Sd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 11H9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 11H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 15H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11.5 11H12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 15L12.5 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Rd = v(Sd), Nd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5 15V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Td = v(Nd), Ad = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M8 16H16V17C16 18.6569 14.6569 20 13 20H11C9.34315 20 8 18.6569 8 17V16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16V11.5M12 11.5L10.5 10.5M12 11.5L13.5 10.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M8 16V13.9192C8 13.6348 7.87558 13.3669 7.67824 13.162C6.63904 12.0832 6 10.6162 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 10.6162 17.361 12.0832 16.3218 13.162C16.1244 13.3669 16 13.6348 16 13.9192V16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), u1 = v(Ad), Vd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 5L6 6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 5V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 9L4 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 19L18 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 19L15 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 15L20 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17L11 18C9.61929 19.3807 7.38071 19.3807 6 18V18C4.61929 16.6193 4.61929 14.3807 6 13L7 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Fd = v(Vd), Pd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 10H8C6.34315 10 5 11.3431 5 13V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13C19 11.3431 17.6569 10 16 10Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 14V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), $d = v(Pd), Id = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M14.9388 10.137C14.9587 9.94491 14.9689 9.74991 14.9689 9.55251C14.9689 6.48594 12.5134 4 9.48443 4C6.45546 4 4 6.48594 4 9.55251C4 12.6191 6.45546 15.105 9.48443 15.105C9.70417 15.105 9.9209 15.0919 10.1339 15.0665V18.9333C10.1339 19.5224 10.6056 20 11.1875 20H18.4616C19.0434 20 19.5152 19.5224 19.5152 18.9333V11.2037C19.5152 10.6145 19.0434 10.137 18.4616 10.137H14.9388ZM14.9388 10.137C14.6727 12.7123 12.6678 14.7638 10.1339 15.0665V11.2037C10.1339 10.6145 10.6056 10.137 11.1875 10.137H14.9388Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Hd = v(Id), Od = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M13.635 6.37192C13.9349 6.076 15.2013 5.25398 15.4679 5.51702C15.7178 5.78007 14.9013 7.04599 14.6181 7.32547C14.3348 7.6214 14.1182 7.83513 13.9682 7.98309L14.4348 12.7508L13.9016 13.2769L12.302 9.62714L11.6688 10.2519C11.219 10.7122 10.5525 11.189 10.0026 11.5178L10.0859 13.1618L9.83599 13.4084C9.83599 13.4084 9.05286 11.9617 9.01953 11.9288C9.00287 11.8959 7.53659 11.1068 7.53659 11.1068L7.78652 10.8602L9.43609 10.9424C9.76934 10.3998 10.2359 9.74222 10.7024 9.28189L11.3189 8.67359L7.65322 7.07887L8.18642 6.55277L12.9852 7.02954C13.1351 6.86514 13.3517 6.65141 13.635 6.37192Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M6.33689 3.33043C9.46941 0.223189 14.5348 0.223189 17.6506 3.33043C20.7831 6.43768 20.7831 11.4849 17.6506 14.5921C14.5181 17.6994 9.45275 17.6994 6.33689 14.5921C3.22104 11.4849 3.22104 6.43768 6.33689 3.33043ZM7.33663 13.6222C9.91929 16.1869 14.0849 16.1869 16.6675 13.6222C19.2502 11.041 19.2502 6.88157 16.6675 4.3333C14.0849 1.76859 9.91929 1.76859 7.33663 4.3333C4.75397 6.89801 4.75397 11.0574 7.33663 13.6222Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M12.0021 18.3406C13.3851 18.3406 14.7014 18.0611 15.9344 17.4857C16.2843 17.3212 16.7009 17.4692 16.8675 17.8309C17.0175 18.1762 16.8675 18.5872 16.5176 18.7516C15.1013 19.4092 13.585 19.738 12.0021 19.738C10.4358 19.738 8.9029 19.4092 7.48661 18.7516C7.12004 18.5872 6.97007 18.1762 7.1367 17.8309C7.30332 17.4692 7.71988 17.3212 8.06979 17.4857C9.3028 18.0446 10.6358 18.3406 12.0021 18.3406Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M12.0021 22.5C10.7524 22.5 9.53607 22.3192 8.35304 21.941C7.98647 21.8259 7.78652 21.4314 7.8865 21.0697C8.00313 20.708 8.38637 20.4943 8.7696 20.6093C9.80266 20.9382 10.9024 21.1026 12.0021 21.1026C13.1018 21.1026 14.1682 20.9382 15.2179 20.6258C15.5845 20.5107 15.9844 20.7244 16.101 21.0861C16.2177 21.4478 16.0177 21.8424 15.6345 21.9575C14.4515 22.3192 13.2351 22.5 12.0021 22.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), jd = v(Od), Dd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M14.0404 5.03957C15.3988 3.68158 17.602 3.68137 18.9603 5.03957C20.3186 6.39785 20.3183 8.60105 18.9603 9.95949L11.4603 17.4595C11.389 17.5307 11.301 17.5838 11.2054 17.6157L8.20539 18.6157C8.1393 18.6377 8.06997 18.6499 8.00031 18.6499H6.00031C5.80558 18.6499 5.62084 18.5622 5.49738 18.4116C5.37407 18.2611 5.32445 18.0625 5.36262 17.8716L6.36262 12.8716C6.3879 12.7461 6.44982 12.6301 6.54035 12.5396L14.0404 5.03957ZM6.79328 17.3491H7.89777L9.79621 16.7154L7.39973 14.3189L6.79328 17.3491ZM18.0404 5.95949C17.1897 5.10897 15.811 5.10918 14.9603 5.95949L7.92023 12.9995L11.0003 16.0796L18.0404 9.03957C18.8907 8.18881 18.891 6.81009 18.0404 5.95949Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Zd = v(Dd), Bd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5 11V16C5 17.6569 6.34315 19 8 19H9C9.55228 19 10 18.5523 10 18V16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16V18C14 18.5523 14.4477 19 15 19H16C17.6569 19 19 17.6569 19 16V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Ud = v(Bd), zd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M5 6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 5.44772 10 6V8C10 8.55228 9.55228 9 9 9H6C5.44772 9 5 8.55228 5 8V6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M5 14C5 13.4477 5.44772 13 6 13H9C9.55228 13 10 13.4477 10 14V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M14 16C14 15.4477 14.4477 15 15 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M14 6C14 5.44772 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V10C19 10.5523 18.5523 11 18 11H15C14.4477 11 14 10.5523 14 10V6Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Wd = v(zd), Gd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7.5 10.5H16.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), qd = v(Gd), Xd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 14L14.2361 13.618C12.8284 12.9142 11.1716 12.9142 9.76393 13.618L9 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 10V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Yd = v(Xd), Kd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Qd = v(Kd), Jd = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), e5 = v(Jd), t5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 7C9 5.34315 10.3431 4 12 4V4C13.6569 4 15 5.34315 15 7V11C15 12.6569 13.6569 14 12 14V14C10.3431 14 9 12.6569 9 11V7Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 11V11C18 14.3137 15.3137 17 12 17V17C8.68629 17 6 14.3137 6 11V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17V20M12 20H10M12 20H14",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), f1 = v(t5), r5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 11V7C15 5.34315 13.6569 4 12 4C10.7386 4 9.65897 4.77854 9.21552 5.88133M10.3411 13.5C9.98492 13.2632 9.68224 12.9523 9.45508 12.5893",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6 11C6 14.3137 8.68629 17 12 17C12.3807 17 12.7531 16.9645 13.1142 16.8967M18 11C18 11.9233 17.7915 12.7979 17.4189 13.5792",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17V20M12 20H10M12 20H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), n5 = v(r5), o5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M10.8 4H13.2C14.8802 4 15.7202 4 16.362 4.32698C16.9265 4.6146 17.3854 5.07354 17.673 5.63803C18 6.27976 18 7.11984 18 8.8V15.2C18 16.8802 18 17.7202 17.673 18.362C17.3854 18.9265 16.9265 19.3854 16.362 19.673C15.7202 20 14.8802 20 13.2 20H10.8C9.11984 20 8.27976 20 7.63803 19.673C7.07354 19.3854 6.6146 18.9265 6.32698 18.362C6 17.7202 6 16.8802 6 15.2V8.8C6 7.11984 6 6.27976 6.32698 5.63803C6.6146 5.07354 7.07354 4.6146 7.63803 4.32698C8.27976 4 9.11984 4 10.8 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), s5 = v(o5), a5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11.5 7V6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), h1 = v(a5), i5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M5.54981 14.121L6.2641 10.121C6.68993 7.73641 8.76387 6 11.1862 6H12.8138C15.2361 6 17.3101 7.73641 17.7359 10.121L18.4502 14.121C18.9974 17.1857 16.6412 20 13.528 20H10.472C7.35882 20 5.00255 17.1857 5.54981 14.121Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M10.3257 2.5H13.6743C14.3386 2.5 14.8183 3.13591 14.6358 3.77472L14 6H10L9.36421 3.77472C9.18169 3.1359 9.66135 2.5 10.3257 2.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 10H11.5C10.6716 10 10 10.6716 10 11.5V11.5C10 12.3284 10.6716 13 11.5 13H12.5C13.3284 13 14 13.6716 14 14.5V14.5C14 15.3284 13.3284 16 12.5 16H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 16V17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), c5 = v(i5), l5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o("circle", { cx: 19, cy: 6, r: 3, vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o("path", { d: "M12 17v4", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ o("path", { d: "M8 21h8", vectorEffect: "non-scaling-stroke" })
    ]
  }
), d5 = v(l5), u5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 19v-3.96 3.15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 19h5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), f5 = v(u5), h5 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), p5 = v(h5), m5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 7V9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M6.19249 16.071C6.34438 17.9842 7.85934 19.6088 9.81202 19.8494C10.5301 19.9378 11.2602 20 12 20C12.7398 20 13.4698 19.9378 14.1879 19.8494C16.1406 19.6088 17.6555 17.9842 17.8074 16.071C17.9127 14.7454 18 13.3856 18 12C18 10.6144 17.9127 9.25466 17.8074 7.92894C17.6555 6.01572 16.1406 4.39114 14.1879 4.15056C13.4698 4.0621 12.7398 4 12 4C11.2602 4 10.5301 4.0621 9.81202 4.15056C7.85934 4.39114 6.34438 6.01572 6.19249 7.92894C6.08722 9.25466 6 10.6144 6 12C6 13.3856 6.08722 14.7454 6.19249 16.071Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), g5 = v(m5), v5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M13 19H7C5.89543 19 5 18.1046 5 17V6.99998C5 5.89541 5.89543 4.99998 7 4.99998H9.80017",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.00041 3L10.0004 5L8.00041 7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          stroke: "currentColor",
          d: "M14 2.65002H18C18.7456 2.65002 19.35 3.25444 19.35 4.00002V6.00002C19.35 6.74561 18.7456 7.35002 18 7.35002H14C13.2544 7.35002 12.65 6.74561 12.65 6.00002V4.00002C12.65 3.25444 13.2544 2.65002 14 2.65002Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M14 9.65002H18C18.7456 9.65002 19.35 10.2544 19.35 11L19.35 13C19.35 13.7456 18.7456 14.35 18 14.35H14C13.2544 14.35 12.65 13.7456 12.65 13L12.65 11C12.65 10.2544 13.2544 9.65002 14 9.65002Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M14 16.65H18C18.7456 16.65 19.35 17.2544 19.35 18V20C19.35 20.7456 18.7456 21.35 18 21.35H14C13.2544 21.35 12.65 20.7456 12.65 20V18C12.65 17.2544 13.2544 16.65 14 16.65Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), C5 = v(v5), w5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 6.5H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6.5 9V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 9V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 7.333 5.5 9 9 6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 11.333 5.5 13 9 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 15.333 5.5 17 9 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 12H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), x5 = v(w5), k5 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M10.0004 4.34964C10.3592 4.34985 10.6508 4.64118 10.6508 5.00003C10.6508 5.35887 10.3592 5.65021 10.0004 5.65042H8.00039C6.70252 5.65042 5.65078 6.70216 5.65078 8.00003V16C5.65079 17.2979 6.70253 18.3496 8.00039 18.3496H16.0004C17.2981 18.3494 18.35 17.2978 18.35 16V13.5C18.35 13.141 18.6414 12.8496 19.0004 12.8496C19.3592 12.8499 19.6508 13.1412 19.6508 13.5V16C19.6508 18.0157 18.016 19.6502 16.0004 19.6504H8.00039C5.98456 19.6504 4.35001 18.0159 4.35 16V8.00003C4.35 5.98419 5.98455 4.34964 8.00039 4.34964H10.0004ZM15.7465 4.3721C16.8186 3.30024 18.5563 3.30022 19.6283 4.3721C20.7003 5.44416 20.7002 7.18184 19.6283 8.25394L14.0727 13.8106C13.9927 13.8905 13.8926 13.9478 13.7836 13.9776L9.70937 15.0889C9.48438 15.1502 9.24342 15.0858 9.07851 14.9209C8.91405 14.7561 8.85035 14.5158 8.91152 14.291L10.0229 10.2159L10.0502 10.1367C10.0827 10.0591 10.1299 9.98771 10.1898 9.92776L15.7465 4.3721ZM18.7094 5.29105C18.145 4.72685 17.2298 4.72687 16.6654 5.29105L11.2309 10.7246L10.4643 13.5352L13.2748 12.7686L18.7094 7.33499C19.2736 6.77058 19.2736 5.85542 18.7094 5.29105Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), rn = v(k5), y5 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), b5 = v(y5), L5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 7C6 5.34315 7.34315 4 9 4H15C16.6569 4 18 5.34315 18 7V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V7Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 12H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 8H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M10 16.5C10 15.9477 10.4477 15.5 11 15.5H13C13.5523 15.5 14 15.9477 14 16.5V20H10V16.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), M5 = v(L5), E5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 12,
          cy: 6,
          r: 2,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 12,
          cy: 18,
          r: 2,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 4,
          cy: 18,
          r: 2,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 20,
          cy: 18,
          r: 2,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 16V15.5C4 13.2909 5.79086 11.5 8 11.5H16C18.2091 11.5 20 13.2909 20 15.5V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8V16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), _5 = v(E5), S5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12L17.9536 14.9768C17.9781 14.989 18.0078 14.9765 18.0161 14.9505C18.4772 13.5039 18.0133 12.0621 17.0728 11.0423C17.0459 11.0131 17.0663 10.9652 17.1061 10.9652H19.955C19.9799 10.9652 20.0001 10.9454 19.9995 10.9205C19.9697 9.47309 18.492 7.53588 15.0948 7.50048C15.0571 7.50008 15.0349 7.45634 15.0585 7.42687L16.982 5.02247C16.993 5.00876 16.9952 4.99013 16.9869 4.97467C16.4577 3.99167 13.9831 3.51695 12 5.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12L6.04641 14.9768C6.02191 14.989 5.99217 14.9766 5.98385 14.9505C5.52281 13.5039 5.98675 12.0621 6.92718 11.0423C6.95411 11.0131 6.93366 10.9652 6.89394 10.9652H4.045C4.02015 10.9652 3.99995 10.9454 4.00046 10.9206C4.0303 9.47311 5.50795 7.5359 8.90518 7.50049C8.94291 7.5001 8.96508 7.45635 8.94151 7.42689L7.01799 5.02248C7.00702 5.00878 7.00482 4.99014 7.01314 4.97469C7.54231 3.99168 10.0169 3.51697 12 5.50001",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), R5 = v(S5), N5 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), T5 = v(N5), A5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 18H6.8C5.11984 18 4.27976 18 3.63803 17.673C3.07354 17.3854 2.6146 16.9265 2.32698 16.362C2 15.7202 2 14.8802 2 13.2V10.8C2 9.11984 2 8.27976 2.32698 7.63803C2.6146 7.07354 3.07354 6.6146 3.63803 6.32698C4.27976 6 5.11984 6 6.8 6H17.2C18.8802 6 19.7202 6 20.362 6.32698C20.9265 6.6146 21.3854 7.07354 21.673 7.63803C22 8.27976 22 9.11984 22 10.8V12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), V5 = v(A5), F5 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), P5 = v(F5), $5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 9,
          cy: 9,
          r: 4,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.00002 18C4.00002 18 5.50002 16 9.00002 16C12.5 16 14 18 14 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), I5 = v($5), H5 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M20.1308 17.3633C20.427 17.4238 20.6503 17.6858 20.6503 18C20.6503 18.3142 20.427 18.5762 20.1308 18.6367L19.9999 18.6504H15.9999C15.641 18.6503 15.3495 18.3589 15.3495 18C15.3495 17.6411 15.641 17.3497 15.9999 17.3496H19.9999L20.1308 17.3633ZM11.9999 15.3496C12.8458 15.3496 13.5896 15.459 14.2353 15.6309L14.5058 15.708L14.6278 15.7598C14.8931 15.9045 15.0292 16.2203 14.9374 16.5205C14.8322 16.8635 14.469 17.0561 14.1259 16.9512C13.5422 16.7727 12.8369 16.6504 11.9999 16.6504C10.3811 16.6504 9.24784 17.1109 8.52823 17.5537C8.1664 17.7764 7.90548 17.9966 7.73917 18.1562C7.65625 18.2359 7.59679 18.3003 7.56046 18.3418C7.54261 18.3622 7.53012 18.3774 7.52335 18.3857L7.51749 18.3936V18.3916C7.30165 18.6768 6.89669 18.7344 6.61026 18.5195C6.32321 18.3041 6.2651 17.8975 6.48038 17.6104L6.83878 17.8789C6.4877 17.6155 6.48034 17.6097 6.48038 17.6094V17.6084L6.48233 17.6074C6.48304 17.6065 6.48343 17.6047 6.48428 17.6035C6.48614 17.6011 6.48854 17.598 6.49112 17.5947C6.49637 17.588 6.50339 17.5795 6.51163 17.5693C6.52854 17.5484 6.55237 17.5201 6.58194 17.4863C6.64127 17.4185 6.72667 17.3264 6.83878 17.2188C7.06303 17.0035 7.39616 16.7235 7.84659 16.4463C8.75192 15.8892 10.1189 15.3496 11.9999 15.3496ZM11.9999 4.34961C14.568 4.34961 16.6503 6.43188 16.6503 9C16.6503 11.5681 14.568 13.6504 11.9999 13.6504C9.43187 13.6503 7.34952 11.5681 7.34952 9C7.34952 6.43194 9.43187 4.34972 11.9999 4.34961ZM11.9999 5.65039C10.1498 5.6505 8.6503 7.14991 8.6503 9C8.6503 10.8501 10.1498 12.3495 11.9999 12.3496C13.8501 12.3496 15.3495 10.8502 15.3495 9C15.3495 7.14985 13.8501 5.65039 11.9999 5.65039Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), O5 = v(H5), j5 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M17.9999 15.3496C18.3589 15.3496 18.6503 15.641 18.6503 16V17.3496H19.9999L20.1308 17.3633C20.427 17.4238 20.6503 17.6858 20.6503 18C20.6503 18.3142 20.427 18.5762 20.1308 18.6367L19.9999 18.6504H18.6503V20L18.6366 20.1309C18.576 20.4271 18.314 20.6504 17.9999 20.6504C17.6858 20.6503 17.4237 20.427 17.3632 20.1309L17.3495 20V18.6504H15.9999C15.641 18.6503 15.3495 18.3589 15.3495 18C15.3495 17.6411 15.641 17.3497 15.9999 17.3496H17.3495V16C17.3495 15.6411 17.641 15.3497 17.9999 15.3496ZM11.9999 15.3496C12.8339 15.3496 13.5686 15.4563 14.2079 15.624L14.4765 15.6992L14.5985 15.75C14.8645 15.8936 15.0017 16.2091 14.911 16.5098C14.8202 16.8103 14.5314 16.9973 14.2304 16.9697L14.1015 16.9443L13.8788 16.8818C13.3463 16.742 12.7222 16.6504 11.9999 16.6504C10.3811 16.6504 9.24784 17.1109 8.52823 17.5537C8.1664 17.7764 7.90548 17.9966 7.73917 18.1562C7.65625 18.2359 7.59679 18.3003 7.56046 18.3418C7.54261 18.3622 7.53012 18.3774 7.52335 18.3857L7.51749 18.3936V18.3916C7.30165 18.6768 6.89669 18.7344 6.61026 18.5195C6.32321 18.3041 6.2651 17.8975 6.48038 17.6104L6.83878 17.8789C6.4877 17.6155 6.48034 17.6097 6.48038 17.6094V17.6084L6.48233 17.6074C6.48304 17.6065 6.48343 17.6047 6.48428 17.6035C6.48614 17.6011 6.48854 17.598 6.49112 17.5947C6.49637 17.588 6.50339 17.5795 6.51163 17.5693C6.52854 17.5484 6.55237 17.5201 6.58194 17.4863C6.64127 17.4185 6.72667 17.3264 6.83878 17.2188C7.06303 17.0035 7.39616 16.7235 7.84659 16.4463C8.75192 15.8892 10.1189 15.3496 11.9999 15.3496ZM11.9999 4.34961C14.568 4.34961 16.6503 6.43188 16.6503 9C16.6503 11.5681 14.568 13.6504 11.9999 13.6504C9.43187 13.6503 7.34952 11.5681 7.34952 9C7.34952 6.43194 9.43187 4.34972 11.9999 4.34961ZM11.9999 5.65039C10.1498 5.6505 8.6503 7.14991 8.6503 9C8.6503 10.8501 10.1498 12.3495 11.9999 12.3496C13.8501 12.3496 15.3495 10.8502 15.3495 9C15.3495 7.14985 13.8501 5.65039 11.9999 5.65039Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), D5 = v(j5), Z5 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M10.7284 5.68377L11.7022 8.60545C11.8697 9.10777 11.6165 9.65354 11.1249 9.85017L9.50021 10.5C10.5002 12.5 11.5002 13.5 13.5002 14.5L14.15 12.8755C14.3467 12.3839 14.8924 12.1307 15.3947 12.2982L18.3164 13.2721C18.7248 13.4082 19.0002 13.7903 19.0002 14.2208L19.0001 16.5001C19 18.1569 17.6493 19.4784 16.0224 19.1645C13.4822 18.6743 9.8743 17.4681 7.50006 14.5C5.31143 11.7639 4.61982 9.17753 4.44221 7.39634C4.3027 5.99711 5.50072 5 6.90688 5H9.77967C10.2101 5 10.5922 5.27543 10.7284 5.68377Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), B5 = v(Z5), U5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M16.9956 5.39244C16.4671 5.39244 15.9583 5.593 15.5719 5.95362L15.2615 6.24335C14.854 6.62368 14.2962 6.7835 13.7388 6.7835V6.7835H10.9567C7.49952 6.7835 4.69692 9.5861 4.69692 13.0433C4.69692 14.4501 5.16102 15.7486 5.94446 16.7939C6.41907 17.4271 6.78352 18.1614 6.78352 18.9528V19.3031C6.78352 20.0713 7.40632 20.6941 8.17458 20.6941H10.1691C10.6577 20.6941 11.1105 20.4378 11.3619 20.0188L11.5051 19.7802C11.6827 19.4842 12.0026 19.3031 12.3478 19.3031V19.3031C12.693 19.3031 13.0129 19.4842 13.1905 19.7802L13.3336 20.0188C13.585 20.4378 14.0378 20.6941 14.5264 20.6941H16.521C17.2892 20.6941 17.912 20.0713 17.912 19.3031V18.4283C17.912 17.9707 18.1149 17.5425 18.419 17.2004V17.2004C18.7756 16.7992 19.2667 16.5209 19.8036 16.5209H19.9986C20.7669 16.5209 21.3897 15.8981 21.3897 15.1299V13.7388C21.3897 12.9706 20.7669 12.3478 19.9986 12.3478V12.3478C19.9769 12.3478 19.9586 12.3313 19.9561 12.3097C19.7743 10.7527 19.0212 9.37022 17.912 8.37744V6.08797C17.912 5.70384 17.6006 5.39244 17.2165 5.39244H16.9956Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M3.26033 10.2612C3.26033 9.90218 2.96931 9.61117 2.61033 9.61117C2.25134 9.61117 1.96033 9.90218 1.96033 10.2612H3.26033ZM4.7317 12.939L4.62484 12.2978C4.41139 12.3334 4.08864 12.3026 3.82727 12.084C3.57981 11.8769 3.26033 11.3941 3.26033 10.2612H2.61033H1.96033C1.96033 11.6322 2.35376 12.5462 2.99311 13.0811C3.61854 13.6043 4.35648 13.6605 4.83856 13.5801L4.7317 12.939Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), z5 = v(U5), W5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 20C15 16.8 18 13.9346 18 10.4C18 6.86538 15.3137 4 12 4C8.68629 4 6 6.86538 6 10.4C6 13.9346 9 16.8 12 20Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), G5 = v(W5), q5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M6.11014 8.84108L4.6879 10.2653C3.73682 11.2149 3.73682 12.7569 4.6879 13.7065L6.11159 15.1297L7.50354 15.1231C7.81855 15.1231 8.1205 14.9978 8.38856 14.7521L10.7855 12.3583C10.9609 12.1819 11.1741 12.057 11.4017 11.985C11.175 11.9053 10.9713 11.7774 10.806 11.6328L10.7959 11.624L8.38846 9.21653C8.12043 8.97081 7.81852 8.84554 7.50354 8.84554L6.11014 8.84108Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M7.48424 16.5045C8.15386 16.3583 9.16119 16.117 9.45141 15.8268L11.8553 13.4229C11.8575 13.4207 11.8672 13.4135 11.8866 13.4135C11.9059 13.4135 11.9156 13.4207 11.9179 13.4229L14.3311 15.8362C14.6543 16.1593 15.5618 16.578 16.207 16.7873L13.7091 19.2852C12.7595 20.2098 11.2175 20.2098 10.2678 19.2852L7.48424 16.5045Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M17.6459 15.3484L16.279 15.1325C15.9533 15.1325 15.6321 14.9996 15.3999 14.7674L12.9867 12.3541C12.8119 12.1793 12.6001 12.0561 12.3733 11.9845C12.5991 11.9048 12.8023 11.777 12.9672 11.6328L12.9772 11.624L15.3985 9.20274C15.6311 8.97284 15.9534 8.83927 16.279 8.83927L17.8664 8.84388L19.2878 10.2653C20.2374 11.2149 20.2374 12.7569 19.2878 13.7065L17.6459 15.3484Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M16.207 7.18168L13.7091 4.68534C12.7595 3.73426 11.2175 3.73426 10.2647 4.68534L7.3897 7.56152C8.0887 7.6709 9.16261 7.83918 9.45559 8.14921L11.8553 10.5489L11.8578 10.5515C11.8651 10.5589 11.8704 10.5612 11.8704 10.5612C11.8704 10.5612 11.8721 10.5619 11.8746 10.5618C11.8783 10.5618 11.8992 10.5604 11.9312 10.5355L14.3311 8.13563C14.6548 7.81198 15.5616 7.39149 16.207 7.18168Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), X5 = v(q5), Y5 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), K5 = v(Y5), Q5 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8L12 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 5.5C7 4.11929 8.11929 3 9.5 3V3C10.8807 3 12 4.11929 12 5.5V8H9.5C8.11929 8 7 6.88071 7 5.5V5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 5.5C17 4.11929 15.8807 3 14.5 3V3C13.1193 3 12 4.11929 12 5.5V8H14.5C15.8807 8 17 6.88071 17 5.5V5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M5 12V11.35C4.64101 11.35 4.35 11.641 4.35 12H5ZM19 12H19.65C19.65 11.641 19.359 11.35 19 11.35V12ZM5 12.65H19V11.35H5V12.65ZM18.35 12V16H19.65V12H18.35ZM16 18.35H8V19.65H16V18.35ZM5.65 16V12H4.35V16H5.65ZM8 18.35C6.70213 18.35 5.65 17.2979 5.65 16H4.35C4.35 18.0158 5.98416 19.65 8 19.65V18.35ZM18.35 16C18.35 17.2979 17.2979 18.35 16 18.35V19.65C18.0158 19.65 19.65 18.0158 19.65 16H18.35Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), J5 = v(Q5), e2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13V11.8C4 10.1198 4 9.27976 4.32698 8.63803C4.6146 8.07354 5.07354 7.6146 5.63803 7.32698C6.27976 7 7.11984 7 8.8 7H15.2C16.8802 7 17.7202 7 18.362 7.32698C18.9265 7.6146 19.3854 8.07354 19.673 8.63803C20 9.27976 20 10.1198 20 11.8V13C20 13.93 20 14.395 19.8978 14.7765C19.6204 15.8117 18.8117 16.6204 17.7765 16.8978C17.395 17 16.93 17 16 17V15.6C16 15.0399 16 14.7599 15.891 14.546C15.7951 14.3578 15.6422 14.2049 15.454 14.109C15.2401 14 14.9601 14 14.4 14H9.6C9.03995 14 8.75992 14 8.54601 14.109C8.35785 14.2049 8.20487 14.3578 8.10899 14.546C8 14.7599 8 15.0399 8 15.6V17C7.07003 17 6.60504 17 6.22354 16.8978C5.18827 16.6204 4.37962 15.8117 4.10222 14.7765C4 14.395 4 13.93 4 13Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M17 7V7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7V7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M16 16.8V15.6C16 15.0399 16 14.7599 15.891 14.546C15.7951 14.3578 15.6422 14.2049 15.454 14.109C15.2401 14 14.9601 14 14.4 14H9.6C9.03995 14 8.75992 14 8.54601 14.109C8.35785 14.2049 8.20487 14.3578 8.10899 14.546C8 14.7599 8 15.0399 8 15.6V16.8C8 17.9201 8 18.4802 8.21799 18.908C8.40973 19.2843 8.71569 19.5903 9.09202 19.782C9.51984 20 10.0799 20 11.2 20H12.8C13.9201 20 14.4802 20 14.908 19.782C15.2843 19.5903 15.5903 19.2843 15.782 18.908C16 18.4802 16 17.9201 16 16.8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), t2 = v(e2), r2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M5 5H19V12C19 13.6569 17.6569 15 16 15H8C6.34315 15 5 13.6569 5 12V5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15V20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15L7 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15L17 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 5H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 11.5L11 9.5L13 11.5L15.5 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), n2 = v(r2), o2 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M16.0237 3.34961C17.1906 3.35012 17.9884 4.52969 17.555 5.61328L16.3704 8.57422C16.2249 8.93815 16.1507 9.32682 16.1507 9.71875C16.1508 10.4043 16.3792 11.0712 16.8001 11.6123L18.2581 13.4873C19.1003 14.571 18.328 16.1502 16.9554 16.1504H12.6507V20C12.6505 20.3587 12.359 20.6502 12.0003 20.6504C11.6414 20.6504 11.3501 20.3588 11.3499 20V16.1504H7.0452C5.67228 16.1504 4.89988 14.5711 5.74246 13.4873L7.20047 11.6123C7.62137 11.0712 7.8498 10.4043 7.84989 9.71875C7.84985 9.32689 7.77557 8.9381 7.63016 8.57422L6.44559 5.61328C6.01212 4.5296 6.80978 3.34993 7.97684 3.34961H16.0237ZM7.97684 4.65039C7.72948 4.65071 7.56072 4.90013 7.65262 5.12988L8.83719 8.09082C9.04416 8.6084 9.15063 9.16133 9.15067 9.71875C9.15058 10.6934 8.82522 11.6408 8.22684 12.4102L6.76883 14.2852C6.59015 14.5151 6.75399 14.8496 7.0452 14.8496H16.9554C17.2463 14.8494 17.41 14.515 17.2317 14.2852L15.7737 12.4102C15.1753 11.6408 14.85 10.6934 14.8499 9.71875C14.8499 9.16126 14.9563 8.60845 15.1634 8.09082L16.3479 5.12988C16.4398 4.90022 16.2709 4.6509 16.0237 4.65039H7.97684Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), p1 = v(o2), s2 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M16.0234 3.34961C17.1905 3.34991 17.9881 4.52862 17.5547 5.6123L16.3701 8.57324C16.2244 8.93747 16.1504 9.32647 16.1504 9.71875C16.1504 10.4044 16.3789 11.0701 16.7998 11.6113L18.2578 13.4863C19.1008 14.5701 18.3281 16.1494 16.9551 16.1494H12.6504V20C12.6502 20.3588 12.3588 20.6494 12 20.6494C11.6411 20.6494 11.3498 20.3588 11.3496 20V16.1494H7.0449C5.67186 16.1494 4.8992 14.5701 5.74217 13.4863L7.20017 11.6113C7.62108 11.0701 7.84956 10.4044 7.84959 9.71875C7.84959 9.32647 7.77555 8.93747 7.62986 8.57324L6.44529 5.6123C6.01182 4.52863 6.80949 3.34994 7.97654 3.34961H16.0234Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), a2 = v(s2), i2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 6.99999L18 18.8258C18 19.6801 16.9979 20.141 16.3492 19.585L15.1663 18.5711C14.7851 18.2444 14.2207 18.2509 13.8472 18.5865L12.6599 19.653C12.2785 19.9957 11.6998 19.9944 11.32 19.65L10.1531 18.5921C9.77987 18.2537 9.21318 18.2458 8.83066 18.5737L7.65079 19.585C7.00211 20.141 6 19.6801 6 18.8258L6 6.99999C6 5.34313 7.34314 3.99999 9 3.99999L15 3.99998C16.6569 3.99998 18 5.34313 18 6.99999Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 8H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), c2 = v(i2), l2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), d2 = v(l2), u2 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), f2 = v(u2), h2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 10V9C20 7.34315 18.6569 6 17 6H14M14 6L16 4M14 6L16 8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 14V15C4 16.6569 5.34315 18 7 18H10M10 18L8 20M10 18L8 16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16C14 14.8954 14.8954 14 16 14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), p2 = v(h2), m2 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), nn = v(m2), g2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M11 14.9999L9 12.9999M11 14.9999C12.0745 14.5913 13.413 14.0759 14.3846 13.4615M11 14.9999V18.9999C11 18.9999 14.2538 18.1153 15 16.9999C15.8308 15.7538 14.3846 13.4615 14.3846 13.4615M9 12.9999C9.40934 11.938 9.92477 10.6124 10.5385 9.6539M9 12.9999H5C5 12.9999 5.88462 9.74607 7 8.99993C8.24615 8.16917 10.5385 9.6539 10.5385 9.6539M10.5385 9.6539C12.5 6.50003 14.5 5.00003 19 5.00003C19 8.50003 18 11.5 14.3846 13.4615",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), v2 = v(g2), C2 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
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
), w2 = v(C2), x2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 19V19C17.6569 19 19 17.6569 19 16V10.2426C19 9.44699 18.6839 8.68393 18.1213 8.12132L15.8787 5.87868C15.3161 5.31607 14.553 5 13.7574 5H8V5C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19V19M16 19V16C16 14.8954 15.1046 14 14 14H10C8.89543 14 8 14.8954 8 16V19M16 19H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), k2 = v(x2), y2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10.5 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 17.5,
          cy: 15.5,
          r: 4.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 14V15.054C17.5 15.3326 17.6393 15.5928 17.8711 15.7474L19 16.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 10L11 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), b2 = v(y2), L2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.5 16V16C8.60581 12.7243 13.3942 12.7243 15.5 16V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 16L19 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 11,
          cy: 10.5,
          r: 2.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 11,
          cy: 11,
          r: 7,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), M2 = v(L2), E2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M10.3036 4.71638C11.0868 3.46223 12.9132 3.46223 13.6964 4.71638L14.4364 5.90129C14.7887 6.46555 15.3986 6.81766 16.0635 6.8407L17.4596 6.88908C18.9373 6.94029 19.8505 8.52194 19.156 9.8273L18.4998 11.0606C18.1873 11.6479 18.1873 12.3521 18.4998 12.9394L19.156 14.1727C19.8505 15.4781 18.9373 17.0597 17.4596 17.1109L16.0635 17.1593C15.3986 17.1823 14.7887 17.5345 14.4364 18.0987L13.6964 19.2836C12.9132 20.5378 11.0868 20.5378 10.3036 19.2836L9.56365 18.0987C9.21127 17.5345 8.60139 17.1823 7.93654 17.1593L6.54039 17.1109C5.06266 17.0597 4.14949 15.4781 4.84401 14.1727L5.50018 12.9394C5.81266 12.3521 5.81266 11.6479 5.50018 11.0606L4.84401 9.8273C4.14949 8.52194 5.06266 6.94029 6.54039 6.88908L7.93654 6.8407C8.60139 6.81766 9.21127 6.46555 9.56365 5.90129L10.3036 4.71638Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), _2 = v(E2), S2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 4L20 7M20 7L17 10M20 7H16C13.7909 7 12 8.79086 12 11V11.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), R2 = v(S2), N2 = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M5 11.4038L5 6L6.63836 5.5319C7.87494 5.17859 9.06442 4.67747 10.181 4.03941L12 3L13.819 4.03941C14.9356 4.67747 16.1251 5.17859 17.3616 5.5319L19 6V11.4038C19 13.1235 18.7853 14.8943 17.7189 16.2435C15.6012 18.9228 12 21 12 21C12 21 8.39876 18.9228 6.28107 16.2435C5.21473 14.8943 5 13.1235 5 11.4038Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), T2 = v(N2), A2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
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
), m1 = v(A2);
m1.displayName = "ShoppingCart";
const V2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 20L12 13",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 6L12 3",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), F2 = v(V2), P2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.5 20.5H3.5L10.5 13.5H3.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), $2 = v(P2), I2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 9V18M16 18L13 15M16 18L19 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), H2 = v(I2), O2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M11.7977 3.69779C11.9251 3.63406 12.0747 3.63406 12.2021 3.69779C12.3154 3.75444 12.3728 3.84956 12.3952 3.88789C12.4197 3.92977 12.444 3.98153 12.4647 4.02555L12.4688 4.03428L12.8928 4.93538L13.8346 5.07976L13.8442 5.08122C13.89 5.08823 13.9461 5.0968 13.9933 5.1087C14.0395 5.12036 14.1455 5.15012 14.2306 5.24425C14.3225 5.34607 14.3628 5.48181 14.3462 5.61368C14.331 5.73432 14.2664 5.81806 14.2363 5.85495C14.2056 5.89263 14.1658 5.93327 14.1323 5.96743L14.1256 5.97427L13.4348 6.68001L13.5985 7.68083L13.6 7.69027C13.608 7.73883 13.6172 7.7953 13.6209 7.84374C13.6243 7.8894 13.6302 7.99564 13.5743 8.10354C13.5119 8.22399 13.3972 8.31509 13.2564 8.34246C13.1285 8.36734 13.0233 8.32389 12.9816 8.30574C12.9371 8.28636 12.8872 8.25883 12.8462 8.23614L12.8377 8.23146L11.9999 7.76934L11.1621 8.23146L11.1536 8.23614L11.1536 8.23615C11.1125 8.25884 11.0627 8.28636 11.0182 8.30574C10.9765 8.32389 10.8713 8.36734 10.7434 8.34246C10.6026 8.31509 10.4879 8.22399 10.4255 8.10354C10.3696 7.99564 10.3755 7.8894 10.3789 7.84374C10.3826 7.7953 10.3918 7.73883 10.3998 7.69027L10.4013 7.68083L10.565 6.68001L9.87419 5.97427L9.86748 5.96742C9.83402 5.93327 9.79421 5.89263 9.76348 5.85495C9.73338 5.81806 9.66874 5.73432 9.65355 5.61368C9.63695 5.48181 9.67727 5.34607 9.76924 5.24425C9.85426 5.15012 9.96026 5.12036 10.0065 5.1087C10.0537 5.0968 10.1098 5.08823 10.1556 5.08122L10.1556 5.08122L10.1652 5.07976L11.1069 4.93538L11.531 4.03428L11.5351 4.02555L11.5351 4.02555C11.5558 3.98153 11.5801 3.92977 11.6046 3.88789C11.6269 3.84956 11.6844 3.75444 11.7977 3.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M5.79768 6.69779C5.92512 6.63406 6.07467 6.63406 6.20211 6.69779C6.31538 6.75444 6.37285 6.84956 6.39522 6.88789C6.41966 6.92977 6.444 6.98153 6.46469 7.02555L6.46879 7.03428L6.89285 7.93538L7.83464 8.07976L7.84417 8.08122C7.89003 8.08823 7.94612 8.0968 7.99331 8.1087C8.03953 8.12036 8.14553 8.15012 8.23056 8.24425C8.32252 8.34607 8.36284 8.48181 8.34624 8.61368C8.33105 8.73432 8.26641 8.81806 8.23631 8.85495C8.20558 8.89263 8.16576 8.93327 8.1323 8.96743L8.1256 8.97427L7.4348 9.68001L7.59845 10.6808L7.6 10.6903C7.60796 10.7388 7.61721 10.7953 7.62087 10.8437C7.62432 10.8894 7.63019 10.9956 7.57431 11.1035C7.51194 11.224 7.39718 11.3151 7.25642 11.3425C7.12848 11.3673 7.02333 11.3239 6.98162 11.3057C6.93709 11.2864 6.88725 11.2588 6.84616 11.2361L6.83768 11.2315L5.9999 10.7693L5.16211 11.2315L5.15363 11.2361L5.15363 11.2361C5.11254 11.2588 5.0627 11.2864 5.01817 11.3057C4.97646 11.3239 4.87131 11.3673 4.74337 11.3425C4.60261 11.3151 4.48786 11.224 4.42548 11.1035C4.36961 10.9956 4.37547 10.8894 4.37892 10.8437C4.38258 10.7953 4.39183 10.7388 4.39979 10.6903L4.40134 10.6808L4.56499 9.68001L3.87419 8.97427L3.86748 8.96742C3.83402 8.93327 3.79421 8.89263 3.76348 8.85495C3.73338 8.81806 3.66874 8.73432 3.65355 8.61368C3.63695 8.48181 3.67727 8.34607 3.76924 8.24425C3.85426 8.15012 3.96026 8.12036 4.00649 8.1087C4.05367 8.0968 4.10975 8.08823 4.15562 8.08122L4.15562 8.08122L4.16516 8.07976L5.10694 7.93538L5.531 7.03428L5.5351 7.02555L5.5351 7.02555C5.5558 6.98153 5.58013 6.92977 5.60457 6.88789C5.62694 6.84956 5.68441 6.75444 5.79768 6.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M17.7977 6.69779C17.9251 6.63406 18.0747 6.63406 18.2021 6.69779C18.3154 6.75444 18.3728 6.84956 18.3952 6.88789C18.4197 6.92977 18.444 6.98153 18.4647 7.02555L18.4688 7.03428L18.8928 7.93538L19.8346 8.07976L19.8442 8.08122C19.89 8.08823 19.9461 8.0968 19.9933 8.1087C20.0395 8.12036 20.1455 8.15012 20.2306 8.24425C20.3225 8.34607 20.3628 8.48181 20.3462 8.61368C20.331 8.73432 20.2664 8.81806 20.2363 8.85495C20.2056 8.89263 20.1658 8.93327 20.1323 8.96743L20.1256 8.97427L19.4348 9.68001L19.5985 10.6808L19.6 10.6903C19.608 10.7388 19.6172 10.7953 19.6209 10.8437C19.6243 10.8894 19.6302 10.9956 19.5743 11.1035C19.5119 11.224 19.3972 11.3151 19.2564 11.3425C19.1285 11.3673 19.0233 11.3239 18.9816 11.3057C18.9371 11.2864 18.8872 11.2588 18.8462 11.2361L18.8377 11.2315L17.9999 10.7693L17.1621 11.2315L17.1536 11.2361L17.1536 11.2361C17.1125 11.2588 17.0627 11.2864 17.0182 11.3057C16.9765 11.3239 16.8713 11.3673 16.7434 11.3425C16.6026 11.3151 16.4879 11.224 16.4255 11.1035C16.3696 10.9956 16.3755 10.8894 16.3789 10.8437C16.3826 10.7953 16.3918 10.7388 16.3998 10.6903L16.4013 10.6808L16.565 9.68001L15.8742 8.97427L15.8675 8.96742C15.834 8.93327 15.7942 8.89263 15.7635 8.85495C15.7334 8.81806 15.6687 8.73432 15.6536 8.61368C15.6369 8.48181 15.6773 8.34607 15.7692 8.24425C15.8543 8.15012 15.9603 8.12036 16.0065 8.1087C16.0537 8.0968 16.1098 8.08823 16.1556 8.08122L16.1556 8.08122L16.1652 8.07976L17.1069 7.93538L17.531 7.03428L17.5351 7.02555L17.5351 7.02555C17.5558 6.98153 17.5801 6.92977 17.6046 6.88789C17.6269 6.84956 17.6844 6.75444 17.7977 6.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 11V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 14C7 14.3333 9 16 9 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), j2 = v(O2), D2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 12H9L10.6187 9.41C11.167 8.53286 12.1284 8 13.1627 8H19M19 8L17 6M19 8L17 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Z2 = v(D2), B2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          d: "M9 7.49999V6.49999C9 5.39542 9.89543 4.49999 11 4.49999H13C14.1046 4.49999 15 5.39542 15 6.49999V7.49999",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12.5L4 12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), U2 = v(B2), z2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.0005 16L6.00049 16M6.00049 16L9.00049 13M6.00049 16L9.00049 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), W2 = v(z2), G2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M8 4H16C17.6569 4 19 5.34315 19 7V17C19 18.6569 17.6569 20 16 20H8C6.34315 20 5 18.6569 5 17V7C5 5.34315 6.34315 4 8 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), q2 = v(G2), X2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Y2 = v(X2), K2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 12L15 9M15 9V6L18 3L19 5L21 6L18 9H15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), Q2 = v(K2), J2 = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 8V11C20 12.1046 19.1046 13 18 13H16.5207C16.1943 13 15.8886 13.1592 15.7014 13.4265L12.8927 17.439C12.6466 17.7906 12.2444 18 11.8152 18C11.0888 18 10.5 17.4112 10.5 16.6848V14H6.06155C4.76041 14 3.80569 12.7772 4.12127 11.5149L4.9319 8.27239C5.26578 6.93689 6.46573 6 7.84233 6H16H18C19.1046 6 20 6.89543 20 8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), g1 = v(J2), eu = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M16.9401 6C16.9401 5.72386 17.164 5.5 17.4401 5.5L17.9401 5.5C19.3208 5.5 20.4401 6.61929 20.4401 8L20.4401 11C20.4401 12.3807 19.3208 13.5 17.9401 13.5L17.4401 13.5C17.164 13.5 16.9401 13.2761 16.9401 13L16.9401 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M11.7555 18.5C10.753 18.5 9.94011 17.6871 9.94011 16.6846L9.94011 14.5L6.00163 14.5C4.37522 14.5 3.18139 12.9714 3.57585 11.3936L4.38738 8.15137C4.7769 6.59328 6.17685 5.5 7.78288 5.5L14.9401 5.5C15.4924 5.5 15.9401 5.94771 15.9401 6.5L15.9401 12.9265C15.9401 13.5419 15.7508 14.1425 15.3979 14.6468L13.2428 17.7256C12.9032 18.2108 12.3478 18.4999 11.7555 18.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), v1 = v(eu), tu = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 16V13C4 11.8954 4.89543 11 6 11H7.47934C7.80566 11 8.11145 10.8408 8.29858 10.5735L11.1073 6.56099C11.3534 6.2094 11.7556 6 12.1848 6C12.9112 6 13.5 6.58885 13.5 7.31522V10H17.9384C19.2396 10 20.1943 11.2228 19.8787 12.4851L19.0681 15.7276C18.7342 17.0631 17.5343 18 16.1577 18H8H6C4.89543 18 4 17.1046 4 16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), C1 = v(tu), ru = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M7 18C7 18.2761 6.77614 18.5 6.5 18.5H6C4.61929 18.5 3.5 17.3807 3.5 16V13C3.5 11.6193 4.61929 10.5 6 10.5H6.5C6.77614 10.5 7 10.7239 7 11V18Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M12.1846 5.5C13.1871 5.5 14 6.31291 14 7.31543V9.5H17.9385C19.5649 9.50002 20.7587 11.0286 20.3643 12.6064L19.5527 15.8486C19.1632 17.4067 17.7633 18.5 16.1572 18.5H9C8.44772 18.5 8 18.0523 8 17.5V11.0735C8 10.4581 8.18931 9.85747 8.54225 9.35324L10.6973 6.27441C11.0369 5.78921 11.5923 5.50007 12.1846 5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), w1 = v(ru), nu = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "circle",
        {
          cx: 12,
          cy: 13,
          r: 7.35,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 10.3301V12.9967L15 14.6634",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5.5V3",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 3H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.0901 6L20.5043 7.41421",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), ou = v(nu), su = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.7549 2.39853C11.9383 2.32377 12.1476 2.33589 12.3223 2.43564L14.1416 3.4747C15.2128 4.08683 16.3537 4.56837 17.54 4.90732L19.1787 5.37509C19.4577 5.45487 19.6504 5.70993 19.6504 6.00009V11.4034C19.6504 13.1504 19.4389 15.1152 18.2285 16.6466C17.117 18.0528 15.6336 19.2821 14.4492 20.1505C13.8534 20.5874 13.3253 20.9392 12.9453 21.1817C12.7552 21.303 12.6018 21.3975 12.4951 21.462C12.4418 21.4942 12.3999 21.5192 12.3711 21.5362C12.3568 21.5446 12.3456 21.5512 12.3379 21.5558C12.3343 21.5579 12.3312 21.5594 12.3291 21.5606C12.328 21.5613 12.3268 21.5622 12.3262 21.5626H12.3252L12 21.0001L12.3252 21.5636C12.1242 21.6795 11.8758 21.6795 11.6748 21.5636V21.5626H11.6738C11.6732 21.5622 11.672 21.5613 11.6709 21.5606C11.6688 21.5594 11.6657 21.5579 11.6621 21.5558C11.6544 21.5512 11.6432 21.5446 11.6289 21.5362C11.6001 21.5192 11.5582 21.4942 11.5049 21.462C11.3982 21.3975 11.2448 21.303 11.0547 21.1817C10.6747 20.9392 10.1466 20.5873 9.55078 20.1505C8.36639 19.2821 6.88299 18.0528 5.77148 16.6466C4.56116 15.1152 4.34962 13.1504 4.34961 11.4034V6.00009L4.3584 5.89365C4.39886 5.64914 4.57703 5.44494 4.82129 5.37509L6.45996 4.90732C7.64627 4.56837 8.78717 4.08683 9.8584 3.4747L11.6777 2.43564L11.7549 2.39853ZM12 14.6505C10.2273 14.6505 8.77655 16.027 8.6582 17.7696C9.22229 18.2665 9.79442 18.7178 10.3193 19.1026C10.8883 19.5198 11.3926 19.8555 11.7539 20.086C11.8452 20.1443 11.9284 20.194 12 20.2384C12.0716 20.194 12.1548 20.1443 12.2461 20.086C12.6074 19.8555 13.1117 19.5198 13.6807 19.1026C14.2054 18.7179 14.7769 18.2663 15.3408 17.7696C15.2224 16.027 13.7727 14.6505 12 14.6505ZM10.5039 4.60361C9.34203 5.26753 8.10407 5.78966 6.81738 6.15732L5.65039 6.49033V11.4034C5.6504 13.0958 5.86868 14.6739 6.79102 15.8409C7.02193 16.133 7.27347 16.4176 7.53613 16.6944C8.00407 15.0921 9.31082 13.8484 10.9492 13.4698C9.72624 13.037 8.84964 11.8712 8.84961 10.5001C8.84961 8.7604 10.2603 7.3497 12 7.3497C13.7397 7.3497 15.1504 8.7604 15.1504 10.5001C15.1504 11.8715 14.2732 13.0372 13.0498 13.4698C14.6885 13.8481 15.9948 15.092 16.4629 16.6944C16.7257 16.4174 16.9779 16.1332 17.209 15.8409C18.1313 14.6739 18.3496 13.0958 18.3496 11.4034V6.49033L17.1826 6.15732C15.8959 5.78966 14.658 5.26753 13.4961 4.60361L12 3.74814L10.5039 4.60361ZM12 8.65048C10.9783 8.65048 10.1504 9.47837 10.1504 10.5001C10.1504 11.5218 10.9783 12.3497 12 12.3497C13.0217 12.3497 13.8496 11.5218 13.8496 10.5001C13.8496 9.47837 13.0217 8.65048 12 8.65048Z",
        fill: "currentColor"
      }
    )
  }
), au = v(su), iu = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
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
), cu = v(iu), lu = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 13.7V10.8C17 9.11984 17 8.27976 16.673 7.63803C16.3854 7.07354 15.9265 6.6146 15.362 6.32698C14.7202 6 13.8802 6 12.2 6H9.5M14.6676 17.8965C14.0998 18 13.345 18 12.2 18H8.8C7.11984 18 6.27976 18 5.63803 17.673C5.07354 17.3854 4.6146 16.9265 4.32698 16.362C4 15.7202 4 14.8802 4 13.2V10.8C4 9.76415 4 9.04761 4.07662 8.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 11L21 9V15L17 13V11Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), du = v(lu), uu = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 7V16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16V12C20 10.3431 18.6569 9 17 9H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 5H15C16.1046 5 17 5.89543 17 7V9H6C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
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
), fu = v(uu), hu = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: "M12 2.34961C12.5182 2.34962 12.9694 2.37913 13.3516 2.42188C13.8208 2.47432 14.3633 2.50573 14.7822 2.93555C15.0225 3.18222 15.1214 3.48455 15.1768 3.76367C15.2306 4.03551 15.2589 4.37743 15.292 4.76172C15.3591 5.53967 15.5776 6.26032 15.7842 6.79297C15.8866 7.05713 15.9845 7.27054 16.0557 7.41602C16.0911 7.4885 16.1205 7.5441 16.1396 7.58008C16.1433 7.58694 16.1466 7.59314 16.1494 7.59863C17.3191 8.70192 18.0497 10.2654 18.0498 12C18.0497 13.7349 17.3184 15.2982 16.1484 16.4014C16.1457 16.4066 16.143 16.4126 16.1396 16.4189C16.1205 16.4548 16.0911 16.5106 16.0557 16.583C15.9845 16.7285 15.8867 16.9427 15.7842 17.207C15.5776 17.7396 15.3591 18.4605 15.292 19.2383C15.2589 19.6224 15.2306 19.9646 15.1768 20.2363C15.1214 20.5154 15.0224 20.8178 14.7822 21.0645C14.3633 21.4943 13.8207 21.5256 13.3516 21.5781C12.9695 21.6208 12.5182 21.6494 12 21.6494C11.6117 21.6494 11.2611 21.6336 10.9492 21.6074L10.6494 21.5781C10.1802 21.5256 9.63791 21.4943 9.21875 21.0645C8.97826 20.8178 8.87959 20.5155 8.82422 20.2363C8.77035 19.9646 8.74212 19.6225 8.70898 19.2383C8.64188 18.4605 8.42333 17.7396 8.2168 17.207C8.11424 16.9426 8.01651 16.7285 7.94531 16.583C7.90981 16.5105 7.88047 16.4549 7.86133 16.4189C7.8581 16.4129 7.85514 16.4073 7.85254 16.4023C6.68185 15.2991 5.94933 13.7353 5.94922 12C5.94933 10.2649 6.68115 8.70099 7.85156 7.59766C7.8543 7.59238 7.85789 7.58654 7.86133 7.58008C7.88049 7.54407 7.90988 7.48842 7.94531 7.41602C8.01649 7.27052 8.11437 7.05707 8.2168 6.79297C8.42335 6.26033 8.64189 5.53959 8.70898 4.76172C8.74213 4.37742 8.77033 4.0355 8.82422 3.76367C8.87958 3.48449 8.97829 3.18225 9.21875 2.93555C9.63788 2.50583 10.18 2.47435 10.6494 2.42188C11.0315 2.37915 11.482 2.34962 12 2.34961ZM14.2822 17.6025C13.5778 17.8898 12.8076 18.0498 12 18.0498C11.192 18.0498 10.4215 17.8901 9.7168 17.6025C9.84577 18.0586 9.95643 18.576 10.0039 19.126C10.0396 19.5404 10.0629 19.7982 10.0996 19.9834C10.1347 20.1606 10.1651 20.1734 10.1494 20.1572C10.165 20.1732 10.1793 20.1873 10.2529 20.207C10.3581 20.2352 10.5049 20.2538 10.7939 20.2861L11.0576 20.3115C11.3337 20.3347 11.648 20.3496 12 20.3496C12.4696 20.3496 12.8725 20.3235 13.207 20.2861C13.4962 20.2538 13.6429 20.2353 13.748 20.207C13.8215 20.1873 13.836 20.1732 13.8516 20.1572C13.8356 20.1736 13.8661 20.161 13.9014 19.9834C13.938 19.7983 13.9614 19.5403 13.9971 19.126C14.0446 18.5761 14.1533 18.0585 14.2822 17.6025ZM12 7.25C9.37696 7.25021 7.25021 9.37696 7.25 12C7.25021 14.623 9.37696 16.7498 12 16.75C14.623 16.7498 16.7498 14.623 16.75 12C16.7498 9.37696 14.623 7.25021 12 7.25ZM12 3.65039C11.5305 3.65041 11.1283 3.67648 10.7939 3.71387C10.5051 3.74616 10.3581 3.76385 10.2529 3.79199C10.1794 3.81174 10.165 3.82676 10.1494 3.84277C10.165 3.82668 10.1347 3.83965 10.0996 4.0166C10.0629 4.20169 10.0396 4.45884 10.0039 4.87305C9.95647 5.42304 9.84577 5.94044 9.7168 6.39648C10.4215 6.10898 11.1921 5.94927 12 5.94922C12.8075 5.94927 13.5779 6.10927 14.2822 6.39648C14.1533 5.94053 14.0445 5.42292 13.9971 4.87305C13.9614 4.45889 13.938 4.20167 13.9014 4.0166C13.8661 3.8389 13.8356 3.82639 13.8516 3.84277C13.836 3.82677 13.8215 3.81177 13.748 3.79199C13.6429 3.76379 13.496 3.74618 13.207 3.71387C12.8726 3.67646 12.4697 3.65041 12 3.65039Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ o(
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
), pu = v(hu), mu = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M12 5C8.13401 5 5 8.13401 5 12C5 13.1001 5.25305 14.1382 5.70318 15.0619L5.86304 15.39L5.03857 18.6682L8.27628 17.9409L8.6092 18.1256C9.6128 18.6825 10.7678 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C10.5586 21 9.19397 20.6604 7.98415 20.0563L5.47694 20.6196C4.02315 20.9461 2.73556 19.6254 3.09898 18.1804L3.74839 15.5982C3.26679 14.4952 3 13.2776 3 12Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M8.94117 8H10.485C10.6895 8 10.8733 8.12448 10.9492 8.3143L11.6066 9.95758C11.6977 10.1854 11.61 10.4458 11.3996 10.572L10.5882 11.0588C11.0922 12.0807 11.9193 12.9078 12.9412 13.4118L13.428 12.6004C13.5542 12.39 13.8146 12.3023 14.0424 12.3934L15.6857 13.0507C15.8755 13.1267 16 13.3105 16 13.515V15.0588C16 15.3084 15.9008 15.5478 15.7243 15.7243C15.5478 15.9008 15.3084 16 15.0588 16C13.2232 15.8884 11.4918 15.1089 10.1914 13.8086C8.89105 12.5082 8.11154 10.7768 7.99999 8.94118C7.99999 8.69156 8.09915 8.45217 8.27566 8.27566C8.45216 8.09916 8.69155 8 8.94117 8Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), gu = v(mu), vu = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: [
      /* @__PURE__ */ o("path", { d: "M12 20h.01", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ o("path", { d: "M2 8.82a15 15 0 0 1 20 0", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ o("path", { d: "M5 12.859a10 10 0 0 1 14 0", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ o("path", { d: "M8.5 16.429a5 5 0 0 1 7 0", vectorEffect: "non-scaling-stroke" })
    ]
  }
), Cu = v(vu), wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcademicCap: nl,
  Add: ea,
  Ai: ta,
  Alert: ra,
  AlertCircle: Vo,
  AlertCircleLine: na,
  AlignTextCenter: oa,
  AlignTextJustify: sa,
  AlignTextLeft: aa,
  AlignTextRight: ia,
  Appearance: sl,
  Archive: il,
  ArchiveOpen: ll,
  ArrowCycle: ul,
  ArrowDown: Fo,
  ArrowLeft: ca,
  ArrowRight: la,
  ArrowUp: Br,
  Ascending: da,
  Balance: hl,
  Bank: ml,
  BarGraph: vl,
  Basket: wl,
  Bell: ua,
  Bold: fa,
  BookOpen: kl,
  Bookmark: ha,
  BookmarkFilled: pa,
  Briefcase: bl,
  Bucket: Ml,
  Building: _l,
  Bullet: ma,
  Calculator: ga,
  Calendar: va,
  CalendarArrowDown: Rl,
  CalendarArrowLeft: Tl,
  CalendarArrowRight: Vl,
  CameraPlus: Pl,
  CardPin: Il,
  ChartFunnel: Ol,
  ChartHorizontalBars: Dl,
  ChartLine: Bl,
  ChartPie: zl,
  ChartVerticalBars: Gl,
  Check: Ur,
  CheckCircle: Ca,
  CheckCircleLine: Xl,
  CheckDouble: wa,
  ChevronDown: zr,
  ChevronLeft: Po,
  ChevronRight: nr,
  ChevronUp: $o,
  Chip: Kl,
  Circle: xa,
  Clock: Jl,
  ClockBack: t0,
  ClockPlus: n0,
  Cloud: s0,
  Code: ka,
  Coffee: i0,
  Command: l0,
  Comment: ya,
  Completed: ba,
  Computer: u0,
  Contactless: h0,
  CornerHandle: m0,
  CreditCard: v0,
  Cross: ze,
  CrossedCircle: La,
  Crown: k0,
  CursorClick: w0,
  Delete: Io,
  Deny: b0,
  Descending: Ma,
  Desktop: M0,
  DollarBill: _0,
  DollarReset: R0,
  DottedCircle: Ho,
  Download: rt,
  DropdownDefault: Ea,
  DropdownOpen: _a,
  Ellipsis: Wr,
  EllipsisHorizontal: Oo,
  Envelope: T0,
  EnvelopeOpen: V0,
  Equal: Sa,
  EqualApproximately: Ra,
  EqualGreater: Na,
  EqualLess: Ta,
  Exit: P0,
  ExternalLink: jo,
  EyeInvisible: Aa,
  EyeVisible: Va,
  FaceNegative: Fa,
  FaceNeutral: Pa,
  FacePositive: $a,
  FaceSuperNegative: Ia,
  FaceSuperPositive: Ha,
  Feed: I0,
  File: O0,
  FileFilled: D0,
  FileSigned: B0,
  Files: z0,
  Filter: Oa,
  FitView: G0,
  Flag: X0,
  Flask: K0,
  Folder: ja,
  Folders: J0,
  Globe: td,
  Graph: nd,
  Greater: Da,
  Group: sd,
  GroupBy: id,
  Handle: Za,
  Handshake: ld,
  HardDrive: ud,
  Heading1: Ba,
  Heading2: Ua,
  Heading3: za,
  Headset: hd,
  Heart: md,
  HoldHeart: vd,
  Home: wd,
  Hub: kd,
  Image: Wa,
  InProgressTask: Ga,
  Inbox: bd,
  Info: Md,
  InfoCircle: qa,
  InfoCircleLine: Xa,
  InputField: _d,
  Italic: Ya,
  Kanban: Ka,
  Keyboard: Rd,
  Laptop: Td,
  LayersFront: Qa,
  Less: Ja,
  Lightbulb: u1,
  Link: ei,
  LinkRemove: Fd,
  List: ti,
  LockLocked: ri,
  LockUnlocked: $d,
  LogoAvatar: ni,
  LogoEruditai: Hd,
  LogoTravelperk: jd,
  Marker: Zd,
  Marketplace: Ud,
  Masonry: Wd,
  Maximize: Do,
  Megaphone: oi,
  Menu: si,
  MessageFilled: qd,
  MessageFrown: Yd,
  MessageHeart: Qd,
  Messages: e5,
  Microphone: f1,
  MicrophoneNegative: n5,
  Minimize: Zo,
  Minus: ai,
  Mobile: s5,
  Money: h1,
  MoneyBag: c5,
  MonitorDot: d5,
  MonitorSmartphone: f5,
  Moon: p5,
  Mouse: g5,
  MoveDown: ii,
  MoveTop: C5,
  MoveUp: ci,
  Multitask: x5,
  New: rn,
  Numbers: b5,
  Office: M5,
  OlList: li,
  Organization: _5,
  PalmTree: R5,
  Paperclip: Bo,
  PartiallyCompleted: T5,
  Password: V5,
  PauseCircle: P5,
  Pencil: di,
  People: I5,
  Person: ui,
  PersonMinus: O5,
  PersonNegative: fi,
  PersonPlus: D5,
  Phone: B5,
  Pig: z5,
  Pin: G5,
  PixBrazil: X5,
  Placeholder: hi,
  Plane: K5,
  Plus: pi,
  Present: J5,
  Printer: t2,
  Proyector: n2,
  PushPin: p1,
  PushPinSolid: a2,
  Question: mi,
  Quote: Uo,
  Reaction: gi,
  Receipt: c2,
  Record: d2,
  RemoveFavorite: f2,
  Replace: p2,
  Reply: nn,
  Reset: vi,
  Rocket: v2,
  Salad: w2,
  Save: k2,
  Schedule: b2,
  Search: Gr,
  SearchPerson: M2,
  Settings: _2,
  Share: R2,
  Shield: T2,
  ShoppingCart: m1,
  SignPost: F2,
  Sleep: $2,
  Sliders: qr,
  SolidPause: Ci,
  SolidPlay: wi,
  SolidStop: zo,
  Sort: H2,
  Sparkles: j2,
  Spinner: xi,
  Split: Z2,
  Star: ki,
  StarFilled: yi,
  Strikethrough: bi,
  Suitcase: U2,
  Swap: W2,
  Table: Li,
  Tablet: q2,
  Tag: Y2,
  Target: Q2,
  TextSize: Mi,
  ThumbsDown: g1,
  ThumbsDownFilled: v1,
  ThumbsUp: C1,
  ThumbsUpFilled: w1,
  Timer: ou,
  Underline: Ei,
  Upload: _i,
  Upsell: Wo,
  UserProtected: au,
  Video: Si,
  VideoRecorder: cu,
  VideoRecorderNegative: du,
  Wallet: fu,
  Warning: Ri,
  Watch: pu,
  WhatsappChat: gu,
  Wifi: Cu,
  Windows: Ni
}, Symbol.toStringTag, { value: "Module" })), xu = (t, e) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ o(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ku = v(xu), yu = [
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
], x1 = v((t, e) => {
  const r = yu.reduce((n, s) => {
    const { [s]: a, ...i } = n;
    return i;
  }, t);
  return /* @__PURE__ */ o(
    Me,
    {
      ...r,
      variant: "ai",
      ref: e,
      iconRotate: t.icon == ku
    }
  );
});
x1.displayName = "AIButton";
const Mt = We({
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
}), bu = {
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
}, Rr = v(
  ({
    content: t,
    variant: e,
    align: r,
    className: n,
    as: s,
    ellipsis: a,
    noEllipsisTooltip: i,
    markdown: c,
    required: l,
    ...d
  }, u) => {
    const h = s ?? bu[e ?? "body"], g = l ? /* @__PURE__ */ o("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (a !== void 0) {
      const p = typeof a == "number" ? a : 1;
      return g ? Rt(
        h,
        {
          ...d,
          className: R(
            Mt({ variant: e, align: r }),
            n,
            "inline-flex gap-0.5"
          ),
          ref: u
        },
        /* @__PURE__ */ o(
          Le,
          {
            lines: p,
            noTooltip: i,
            tag: "span",
            className: "min-w-0",
            markdown: c,
            children: t
          }
        ),
        g
      ) : /* @__PURE__ */ o(
        Le,
        {
          ref: u,
          lines: p,
          noTooltip: i,
          tag: h,
          className: R(Mt({ variant: e, align: r }), n),
          markdown: c,
          ...d,
          children: t
        }
      );
    }
    if (c) {
      const p = Ti(t);
      return g ? Rt(
        h,
        {
          ...d,
          className: R(Mt({ variant: e, align: r }), n),
          ref: u
        },
        /* @__PURE__ */ o("span", { dangerouslySetInnerHTML: { __html: p } }),
        g
      ) : Rt(h, {
        ...d,
        className: R(Mt({ variant: e, align: r }), n),
        ref: u,
        dangerouslySetInnerHTML: { __html: p }
      });
    }
    return Rt(
      h,
      {
        ...d,
        className: R(Mt({ variant: e, align: r }), n),
        ref: u
      },
      t,
      g
    );
  }
);
Rr.displayName = "Text";
const k1 = {
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
}, y1 = {
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
}, Lu = {}, Mu = {
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
}, Eu = {
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
}, _u = {
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
}, Su = {
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
}, Ru = {
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
}, Nu = {
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
}, b1 = {
  width: Mu,
  height: Eu,
  minWidth: _u,
  minHeight: Su,
  maxWidth: Ru,
  maxHeight: Nu
}, L1 = {
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
}, M1 = {
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
}, E1 = {
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
}, Tu = {}, _1 = {
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
}, S1 = {
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
}, R1 = {
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
}, Au = {}, Vu = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, N1 = {
  overflow: Vu,
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
}, Fu = {}, T1 = {
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
}, Pu = {}, $u = {
  boxShadow: {
    none: "shadow-none",
    sm: "shadow",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl"
  }
}, A1 = {
  zIndex: {
    auto: "z-auto",
    0: "z-0",
    10: "z-10",
    20: "z-20",
    30: "z-30",
    40: "z-40",
    50: "z-50"
  }
}, Iu = {
  ...L1,
  ...S1,
  ...T1,
  ...R1,
  ...E1,
  ..._1,
  ...b1,
  ...k1,
  ...y1,
  ...N1,
  ...M1,
  ...A1
};
function Hu(t, e) {
  return e.split(" ").map((r) => `${t}:${r}`).join(" ");
}
function Ou(t, e) {
  const r = [];
  for (const [n, s] of Object.entries(e)) {
    if (s == null) continue;
    const a = Iu[n];
    if (!a) continue;
    const i = a[String(s)];
    i && r.push(Hu(t, i));
  }
  return r.join(" ");
}
const ju = We({
  base: "",
  variants: {
    ...L1,
    ...S1,
    ...T1,
    ...R1,
    ...E1,
    ..._1,
    ...b1,
    ...k1,
    ...y1,
    ...N1,
    ...M1,
    ...$u,
    ...A1
  },
  defaultVariants: {
    ...Pu,
    ...Au,
    ...Tu,
    ...Lu,
    ...Fu
  }
}), Du = ["sm", "md", "lg", "xl"], V1 = v(
  ({
    // Display & Position
    display: t,
    position: e,
    top: r,
    right: n,
    bottom: s,
    left: a,
    zIndex: i,
    // Padding
    padding: c,
    paddingX: l,
    paddingY: d,
    paddingTop: u,
    paddingBottom: h,
    paddingLeft: g,
    paddingRight: p,
    // Margin
    margin: m,
    marginX: C,
    marginY: w,
    marginTop: b,
    marginBottom: P,
    marginLeft: A,
    marginRight: N,
    // Gap
    gap: x,
    // Grid
    columns: k,
    rows: y,
    colSpan: M,
    colStart: _,
    rowSpan: L,
    // Dimensions
    width: E,
    height: T,
    minWidth: B,
    minHeight: X,
    maxWidth: J,
    maxHeight: te,
    // Background
    background: oe,
    // Border
    borderColor: ee,
    border: S,
    borderTop: W,
    borderBottom: O,
    borderLeft: Y,
    borderRight: Ce,
    borderRadius: me,
    borderRadiusTopLeft: D,
    borderRadiusTopRight: re,
    borderRadiusBottomLeft: de,
    borderRadiusBottomRight: be,
    borderStyle: V,
    // Overflow
    overflow: I,
    overflowX: H,
    overflowY: K,
    // Divider
    divider: z,
    dividerColor: se,
    boxShadow: xe,
    // Flex
    alignItems: ue,
    justifyContent: Re,
    flexDirection: He,
    flexWrap: at,
    grow: Ae,
    shrink: it,
    // Responsive breakpoint overrides
    sm: sr,
    md: Ot,
    lg: ar,
    xl: ir,
    ...lt
  }, jt) => {
    const bt = W && W !== "none" || O && O !== "none" || Y && Y !== "none" || Ce && Ce !== "none", cr = S && S !== "none" || bt, lr = { sm: sr, md: Ot, lg: ar, xl: ir }, dr = Du.map((Dt) => {
      const Lt = lr[Dt];
      return Lt ? Ou(Dt, Lt) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ o(
      "div",
      {
        ref: jt,
        className: R(
          bt && "border-0",
          ju({
            display: t,
            position: e,
            top: r,
            right: n,
            bottom: s,
            left: a,
            zIndex: i,
            padding: c,
            paddingX: l,
            paddingY: d,
            paddingTop: u,
            paddingBottom: h,
            paddingLeft: g,
            paddingRight: p,
            margin: m,
            marginX: C,
            marginY: w,
            marginTop: b,
            marginBottom: P,
            marginLeft: A,
            marginRight: N,
            gap: x,
            columns: k,
            rows: y,
            colSpan: M,
            colStart: _,
            rowSpan: L,
            width: E,
            height: T,
            minWidth: B,
            minHeight: X,
            maxWidth: J,
            maxHeight: te,
            background: oe,
            borderColor: ee,
            border: S,
            borderTop: W,
            borderBottom: O,
            borderLeft: Y,
            borderRight: Ce,
            borderRadius: me,
            borderRadiusTopLeft: D,
            borderRadiusTopRight: re,
            borderRadiusBottomLeft: de,
            borderRadiusBottomRight: be,
            borderStyle: V,
            overflow: I,
            overflowX: H,
            overflowY: K,
            divider: z,
            dividerColor: se,
            alignItems: ue,
            justifyContent: Re,
            flexDirection: He,
            flexWrap: at,
            grow: Ae,
            shrink: it,
            boxShadow: xe
          }),
          dr,
          cr && !ee && "border-f1-border",
          z && !se && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...lt
      }
    );
  }
);
V1.displayName = "F0Box";
const fr = Ai(
  {
    name: "F0Box",
    type: "layout"
  },
  V1
), Zu = We({
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
}), hr = { sm: 640, md: 768, "container-md": 448 }, Nr = (t) => "type" in t && t.type === "separator", Gt = (t) => "type" in t && t.type === "split", Bu = (t) => !("type" in t), qt = (t, e, r) => /* @__PURE__ */ o(
  Ee,
  {
    label: t.label,
    icon: t.icon,
    iconPosition: t.iconPosition,
    variant: t.critical ? "critical" : r,
    size: e,
    disabled: t.disabled,
    loading: t.loading,
    hideLabel: t.hideLabel,
    tooltip: t.tooltip,
    ...t.href != null ? { href: t.href, target: t.target } : { onClick: t.onClick }
  },
  t.id
), on = (t, e, r) => {
  const { id: n, type: s, ...a } = t;
  return /* @__PURE__ */ o(
    Sr,
    {
      ...a,
      size: e,
      variant: r
    },
    n
  );
}, F1 = (t, e) => /* @__PURE__ */ o(
  Ee,
  {
    label: t.label,
    variant: "outline",
    size: e,
    disabled: t.disabled,
    href: t.href,
    target: t.target
  },
  "secondary-link"
), P1 = (t, e) => Gt(t) ? on(t, e, "default") : qt(t, e, "default");
function Cn({
  primaryAction: t,
  secondaryActions: e,
  otherActions: r = [],
  size: n = "md",
  gap: s = 8,
  align: a = "end",
  stack: i = "none",
  fullWidthOnStack: c = !1,
  reverseOnStack: l = !1,
  className: d
}) {
  const u = j(null), { width: h = 0 } = Vi({
    ref: u,
    box: "border-box"
  }), g = i === "sm" || i === "md" ? hr[i] : hr.md, p = Xr(`(min-width: ${g}px)`, {
    initializeWithValue: !1
  }), m = i === "none" ? !0 : i === "container-md" ? h >= hr["container-md"] : p, C = typeof n == "string" ? n : n.base, w = typeof n == "string" ? n : n.md, b = m ? w : C, P = Array.isArray(
    e
  ) ? e : [], A = e != null && !Array.isArray(e) ? e : void 0, N = {
    primaryAction: t,
    secondaryItems: P,
    secondaryLink: A,
    otherActions: r,
    size: b,
    gap: s,
    align: a
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: u,
      role: "group",
      className: R(
        m ? "flex w-full items-center" : Zu({
          align: a,
          stack: i,
          fullWidthOnStack: c,
          reverseOnStack: l
        }),
        d
      ),
      style: { gap: s },
      children: m ? /* @__PURE__ */ o(zu, { ...N }, "row") : /* @__PURE__ */ o(Uu, { ...N }, "stacked")
    }
  );
}
function Uu({
  primaryAction: t,
  secondaryItems: e,
  secondaryLink: r,
  otherActions: n,
  size: s
}) {
  const a = e.filter(
    (i) => !Nr(i)
  ).map(
    (i) => Gt(i) ? on(i, s, "outline") : qt(i, s, "outline")
  );
  return /* @__PURE__ */ f($e, { children: [
    n.length > 0 && /* @__PURE__ */ o(Pi, { items: n }),
    a,
    r && F1(r, s),
    t && P1(t, s)
  ] });
}
function zu({
  primaryAction: t,
  secondaryItems: e,
  secondaryLink: r,
  otherActions: n,
  size: s,
  gap: a,
  align: i
}) {
  const c = le(
    () => e.filter(Bu),
    [e]
  ), {
    containerRef: l,
    measurementContainerRef: d,
    customOverflowIndicatorRef: u,
    visibleItems: h,
    overflowItems: g,
    isInitialized: p
  } = Fi(c, a);
  ie(() => {
    d.current?.setAttribute("inert", "");
  }, [d]);
  const m = p ? h : c, C = p ? g : [], w = new Set(m.map((M) => M.id)), b = t ? P1(t, s) : null, P = e.filter(Gt), A = e[e.length - 1], N = A != null && Nr(A) && (P.length > 0 || b != null), x = [];
  e.forEach((M, _) => {
    if (!Gt(M)) {
      if (Nr(M)) {
        x.push({ kind: "sep", key: `sep-${_}` });
        return;
      }
      w.has(M.id) && x.push({
        kind: "node",
        node: qt(M, s, "outline")
      });
    }
  });
  const k = x.filter(
    (M, _) => M.kind === "node" || x[_ - 1]?.kind === "node" && x[_ + 1]?.kind === "node"
  ), y = [
    ...C.map(
      (M) => ({
        label: M.label,
        icon: M.icon,
        onClick: M.onClick,
        href: M.href,
        critical: M.critical
      })
    ),
    ...C.length > 0 && n.length > 0 ? [{ type: "separator" }] : [],
    ...n
  ];
  return /* @__PURE__ */ f($e, { children: [
    /* @__PURE__ */ f(
      "div",
      {
        ref: l,
        className: R(
          "relative flex min-w-0 flex-1 items-center",
          i === "end" && "justify-end"
        ),
        style: { gap: a },
        children: [
          /* @__PURE__ */ o(
            "div",
            {
              ref: d,
              "aria-hidden": "true",
              className: "pointer-events-none invisible absolute left-0 top-0 flex items-center whitespace-nowrap",
              style: { gap: a },
              children: c.map(
                (M) => qt(M, s, "outline")
              )
            }
          ),
          y.length > 0 && /* @__PURE__ */ o("div", { ref: u, children: /* @__PURE__ */ o(or, { items: y, icon: Wr, size: s }) }),
          k.map(
            (M) => M.kind === "sep" ? /* @__PURE__ */ o(wn, {}, M.key) : M.node
          ),
          r && F1(r, s)
        ]
      }
    ),
    P.map(
      (M) => on(M, s, "outline")
    ),
    N && /* @__PURE__ */ o(wn, {}),
    b
  ] });
}
function wn() {
  return /* @__PURE__ */ o(
    "div",
    {
      role: "separator",
      "aria-orientation": "vertical",
      className: "h-4 w-px self-center bg-f1-border-secondary"
    }
  );
}
const xn = 8, Wu = {
  sm: "flex flex-col @xs:flex-row @xs:items-center @xs:justify-between @xs:gap-4",
  md: "flex flex-col @md:flex-row @md:items-center @md:justify-between @md:gap-4",
  lg: "flex flex-col @lg:flex-row @lg:items-center @lg:justify-between @lg:gap-4",
  never: "flex flex-row items-center justify-between gap-4"
}, Gu = {
  sm: "@xs:min-w-0 @xs:flex-1",
  md: "@md:min-w-0 @md:flex-1",
  lg: "@lg:min-w-0 @lg:flex-1",
  never: "min-w-0 flex-1"
}, qu = {
  sm: "hidden @xs:flex",
  md: "hidden @md:flex",
  lg: "hidden @lg:flex",
  never: "flex"
}, Xu = {
  sm: "flex @xs:hidden",
  md: "flex @md:hidden",
  lg: "flex @lg:hidden",
  never: "hidden"
}, pr = {
  sm: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @xs:mx-0 @xs:mt-0 @xs:border-t-0 @xs:px-0 @xs:pt-0",
  md: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @md:mx-0 @md:mt-0 @md:border-t-0 @md:px-0 @md:pt-0",
  lg: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @lg:mx-0 @lg:mt-0 @lg:border-t-0 @lg:px-0 @lg:pt-0",
  never: ""
}, Yu = {
  neutral: "secondary",
  info: "info",
  positive: "positive",
  warning: "warning",
  critical: "critical"
};
function Ku({
  primaryAction: t,
  secondaryActions: e,
  otherActions: r,
  confirmAction: n,
  rejectAction: s,
  status: a,
  compact: i = !1,
  stackAt: c = "never"
}) {
  const l = i ? "sm" : "md";
  if (a)
    return /* @__PURE__ */ o(
      "div",
      {
        className: R(
          "flex items-center justify-end",
          pr[c],
          c !== "never" && i && "mt-3 pt-3"
        ),
        children: /* @__PURE__ */ o(
          ye,
          {
            icon: a.icon,
            color: Yu[a.variant],
            size: "lg",
            role: "img",
            "aria-label": a.label
          }
        )
      }
    );
  const d = R(
    "relative z-[1]",
    Gu[c],
    pr[c],
    c !== "never" && i && "mt-3 pt-3"
  ), u = (m) => (
    // Keep action clicks from bubbling to the row's onClick / overlay link.
    /* @__PURE__ */ o("div", { className: d, onClick: (C) => C.stopPropagation(), children: m })
  );
  if (n || s) {
    const m = (w) => {
      const b = s ? {
        id: "reject",
        icon: ze,
        label: s.label ?? "Reject",
        hideLabel: w,
        disabled: s.disabled,
        onClick: s.onClick
      } : void 0, P = n ? {
        id: "confirm",
        icon: Ur,
        label: n.label ?? "Confirm",
        hideLabel: w,
        disabled: n.disabled,
        onClick: n.onClick
      } : void 0;
      return /* @__PURE__ */ o(
        Cn,
        {
          primaryAction: P,
          secondaryActions: b ? [b] : void 0,
          size: l,
          gap: xn
        }
      );
    }, C = (
      // Icon-only, inline at the trailing edge.
      /* @__PURE__ */ o(
        "div",
        {
          className: R(
            "relative z-[1] min-w-0 flex-1",
            qu[c]
          ),
          onClick: (w) => w.stopPropagation(),
          children: m(!0)
        }
      )
    );
    return c === "never" ? C : /* @__PURE__ */ f($e, { children: [
      C,
      /* @__PURE__ */ o(
        "div",
        {
          className: R(
            "relative z-[1]",
            Xu[c],
            pr[c],
            i && "mt-3 pt-3"
          ),
          onClick: (w) => w.stopPropagation(),
          children: m(!1)
        }
      )
    ] });
  }
  const h = Array.isArray(e) ? e.map(
    (m, C) => ({
      id: `secondary-${C}`,
      label: m.label,
      icon: m.icon,
      onClick: m.onClick
    })
  ) : e ? {
    label: e.label,
    // `CardSecondaryLink.href` is loosely typed as optional; a link always
    // carries one in practice, so pass it through unchanged.
    href: e.href,
    target: e.target,
    disabled: e.disabled
  } : void 0, g = t ? {
    id: "primary",
    label: t.label,
    icon: t.icon,
    onClick: t.onClick
  } : void 0;
  return !!g || (Array.isArray(e) ? e.length > 0 : !!e) || (r?.length ?? 0) > 0 ? u(
    /* @__PURE__ */ o(
      Cn,
      {
        primaryAction: g,
        secondaryActions: h,
        otherActions: r,
        size: l,
        gap: xn
      }
    )
  ) : null;
}
const $1 = v(
  function({
    title: e,
    description: r,
    avatar: n,
    primaryAction: s,
    secondaryActions: a,
    otherActions: i,
    confirmAction: c,
    rejectAction: l,
    status: d,
    inactive: u = !1,
    compact: h = !1,
    link: g,
    fullHeight: p = !1,
    alert: m,
    onClick: C,
    disableOverlayLink: w = !1,
    stackAt: b = "never"
  }, P) {
    const A = !!m && m.visible !== !1, N = /* @__PURE__ */ f(
      qo,
      {
        ref: A ? void 0 : P,
        className: R(
          "group relative @container bg-f1-background shadow-none transition-all",
          h && "p-3",
          p && "h-full",
          g && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md"
        ),
        style: A ? {
          borderColor: $i[m.variant],
          borderWidth: "2px"
        } : void 0,
        onClick: C,
        "data-testid": "card",
        children: [
          g && !w && /* @__PURE__ */ o(
            Xo,
            {
              href: g,
              variant: "unstyled",
              className: R("z-1 absolute inset-0 block rounded-xl", Te()),
              "aria-label": e,
              children: " "
            }
          ),
          /* @__PURE__ */ f("div", { className: Wu[b], children: [
            /* @__PURE__ */ f("div", { className: "flex min-w-0 flex-row items-center gap-3", children: [
              n && /* @__PURE__ */ o(Ii, { avatar: n, size: "lg" }),
              /* @__PURE__ */ f("div", { className: "flex min-w-0 flex-col gap-0", children: [
                /* @__PURE__ */ o(
                  Rr,
                  {
                    variant: "body",
                    content: e,
                    className: R(
                      "font-medium",
                      u && "text-f1-foreground-secondary line-through"
                    )
                  }
                ),
                r && /* @__PURE__ */ o(
                  Rr,
                  {
                    variant: "description",
                    content: r,
                    className: R(u && "line-through")
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ o(
              Ku,
              {
                primaryAction: s,
                secondaryActions: a,
                otherActions: i,
                confirmAction: c,
                rejectAction: l,
                status: d,
                compact: h,
                stackAt: b
              }
            )
          ] })
        ]
      }
    );
    return A ? /* @__PURE__ */ o(Hi, { ref: P, alert: m, fullHeight: p, children: N }) : N;
  }
);
$1.displayName = "F0CardRow";
const Qu = ({ compact: t = !1 }) => /* @__PURE__ */ o(
  qo,
  {
    className: R(
      "group relative bg-f1-background shadow-none",
      t && "p-3"
    ),
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ f("div", { className: "flex flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ f("div", { className: "flex min-w-0 flex-row items-center gap-3", children: [
        /* @__PURE__ */ o(
          Se,
          {
            className: R("h-10 w-10 rounded-full", t && "h-8 w-8")
          }
        ),
        /* @__PURE__ */ f("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ o(Se, { className: "h-3 w-32 rounded-md" }),
          /* @__PURE__ */ o(Se, { className: "h-3 w-20 rounded-md" })
        ] })
      ] }),
      /* @__PURE__ */ o(Se, { className: "h-9 w-24 rounded-md" })
    ] })
  }
), Ju = Yr(
  Go($1, Qu)
), kn = ({ position: t }) => /* @__PURE__ */ o(
  ge.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: R(
      "pointer-events-none absolute inset-x-0 z-10 h-4",
      t === "top" ? [
        "top-0",
        "bg-gradient-to-b from-f1-background-secondary to-transparent",
        "after:top-0"
      ] : [
        "bottom-0",
        "bg-gradient-to-t from-f1-background-secondary to-transparent",
        "after:bottom-0"
      ]
    )
  }
), yn = ({
  children: t,
  disableContentPadding: e = !1
}) => {
  const { position: r } = Yo(), n = j(null), [s, a] = U(!0), [i, c] = U(!0), l = Q(() => {
    const d = n.current;
    if (!d) return;
    const { scrollTop: u, scrollHeight: h, clientHeight: g } = d;
    a(u <= 0), c(u + g >= h - 1);
  }, []);
  return ie(() => {
    const d = n.current;
    if (!d) return;
    d.addEventListener("scroll", l, { passive: !0 }), l();
    const u = new ResizeObserver(() => l());
    return u.observe(d), () => {
      d.removeEventListener("scroll", l), u.disconnect();
    };
  }, [l]), /* @__PURE__ */ f("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
    /* @__PURE__ */ f(
      Oi,
      {
        viewportRef: n,
        className: R(
          "[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col",
          "[&_.resource-header]:p-0 [&_.resource-header]:pr-1",
          !e && "px-4 [&>div]:py-4",
          r === "fullscreen" && "h-full [&>div]:h-full [&>div>div]:h-full"
        ),
        children: [
          /* @__PURE__ */ o(ji, { layout: null, children: t }),
          /* @__PURE__ */ o(
            Di,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ f(Ze, { children: [
      !s && /* @__PURE__ */ o(kn, { position: "top" }, "shadow-top"),
      !i && /* @__PURE__ */ o(kn, { position: "bottom" }, "shadow-bottom")
    ] })
  ] });
}, e4 = (t) => Array.isArray(t), t4 = (t) => Array.isArray(t), bn = ({
  primaryAction: t,
  secondaryAction: e
}) => {
  const r = e, n = t;
  if (!n && !r)
    return null;
  const s = () => n ? e4(t) ? /* @__PURE__ */ o(
    Sr,
    {
      items: t.map((i) => ({
        value: i.value,
        label: i.label,
        icon: i.icon
      })),
      onClick: (i) => {
        t.find((l) => l.value === i)?.onClick();
      },
      variant: "default"
    }
  ) : /* @__PURE__ */ o(
    Ee,
    {
      label: t.label,
      onClick: t.onClick,
      variant: "default",
      icon: t.icon,
      iconPosition: t.iconPosition,
      disabled: t.disabled,
      loading: t.loading
    }
  ) : null;
  return /* @__PURE__ */ f("div", { className: "flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3", children: [
    /* @__PURE__ */ o("div", { className: "flex-1" }),
    /* @__PURE__ */ f("div", { className: "flex flex-row items-center gap-2", children: [
      r ? t4(e) ? /* @__PURE__ */ o(
        Sr,
        {
          items: e.map((i) => ({
            value: i.value,
            label: i.label,
            icon: i.icon
          })),
          onClick: (i) => {
            e.find((l) => l.value === i)?.onClick();
          },
          variant: "outline"
        }
      ) : /* @__PURE__ */ o(
        Ee,
        {
          label: e.label,
          onClick: e.onClick,
          variant: "outline",
          icon: e.icon,
          iconPosition: e.iconPosition,
          disabled: e.disabled,
          loading: e.loading
        }
      ) : null,
      s()
    ] })
  ] });
}, Gf = ["xs", "sm", "md", "lg"], Ln = ({
  title: t,
  description: e,
  module: r,
  otherActions: n,
  tabs: s,
  activeTabId: a,
  setActiveTabId: i
}) => {
  const c = he(), { onClose: l } = Yo(), d = !!s, u = () => /* @__PURE__ */ o("div", { className: "h-4 w-px self-center bg-f1-background-secondary" }), h = n?.filter(
    (m) => m.type !== "separator" && m.type !== "label"
  ) ?? [], g = () => {
    if (!h.length || !n) return null;
    const m = h.some((C) => C.critical);
    return h.length <= 2 && !m ? /* @__PURE__ */ o("div", { className: "flex flex-row gap-2", children: h.map((C) => /* @__PURE__ */ o(
      Me,
      {
        variant: "outline",
        icon: C.icon,
        onClick: C.onClick,
        label: C.label,
        hideLabel: !0
      },
      C.label
    )) }) : /* @__PURE__ */ o(Gi, { items: n, icon: Wr });
  }, p = () => r ? /* @__PURE__ */ o(zi, { children: /* @__PURE__ */ o(
    Wi,
    {
      item: {
        id: r.id,
        label: r.label,
        href: r.href,
        module: r.id
      },
      isLast: !1,
      isFirst: !0
    }
  ) }) : null;
  return /* @__PURE__ */ f($e, { children: [
    /* @__PURE__ */ f(
      "div",
      {
        className: R(
          "flex flex-row items-start justify-between gap-3 px-4 py-3",
          !d && "border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary"
        ),
        children: [
          /* @__PURE__ */ f("div", { className: "flex flex-col gap-1", children: [
            r ? /* @__PURE__ */ o(p, {}) : t && /* @__PURE__ */ o(Zi, { className: "py-1 text-lg font-semibold text-f1-foreground", children: t }),
            !!e && /* @__PURE__ */ o(Bi, { className: "text-base text-f1-foreground-secondary", children: e })
          ] }),
          /* @__PURE__ */ f("div", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ o(g, {}),
            n && /* @__PURE__ */ o(u, {}),
            /* @__PURE__ */ o(
              Me,
              {
                variant: "outline",
                icon: ze,
                onClick: l,
                label: c.actions.close,
                hideLabel: !0
              }
            )
          ] })
        ]
      }
    ),
    s && /* @__PURE__ */ o("div", { className: "-mx-2", children: /* @__PURE__ */ o(
      Ui,
      {
        tabs: s,
        activeTabId: a,
        setActiveTabId: i
      }
    ) })
  ] });
}, r4 = () => Xr("(max-width: 560px)", {
  initializeWithValue: !1
}), n4 = We({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition: "absolute flex flex-col rounded-md w-full",
      center: "flex",
      fullscreen: ""
    },
    position: {
      right: "left-auto right-0 items-end p-3",
      left: "left-0 items-start p-3",
      center: "",
      fullscreen: "inset-6"
    }
  },
  defaultVariants: {
    variant: "center"
  }
}), o4 = We({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition: "flex h-full w-full flex-col rounded-md border border-solid border-f1-border-secondary",
      center: "flex max-h-[95vh] flex-1 flex-col rounded-xl",
      fullscreen: "h-full w-full rounded-xl"
    },
    position: {
      left: "",
      right: "",
      center: "",
      fullscreen: ""
    },
    width: {
      sm: "max-w-[480px]",
      md: "max-w-[640px]",
      lg: "max-w-[800px]",
      xl: "max-w-[960px]"
    }
  },
  compoundVariants: [
    {
      variant: "fullscreen",
      width: ["sm", "md", "lg", "xl"],
      class: "max-w-full"
    }
  ],
  defaultVariants: {
    variant: "center"
  }
}), s4 = ({
  asBottomSheetInMobile: t = !0,
  position: e = "center",
  onClose: r,
  isOpen: n,
  children: s,
  width: a = "md",
  primaryAction: i,
  secondaryAction: c,
  title: l,
  description: d,
  module: u,
  otherActions: h,
  tabs: g,
  activeTabId: p,
  setActiveTabId: m,
  disableContentPadding: C,
  container: w
}) => {
  const [b, P] = U(null), A = Q((E) => {
    P(E);
  }, []), N = (E) => {
    E || r();
  }, x = r4(), k = e === "left" || e === "right", y = le(() => x && t ? "bottomSheet" : e === "fullscreen" ? "fullscreen" : k ? "sidePosition" : "center", [x, t, k, e]), M = le(() => (a && !["center", "left", "right"].includes(e) && console.warn(
    "F0Dialog: `width` prop is only applicable to center and side panel positions"
  ), a), [y, a, e]), _ = le(() => o4({
    variant: y,
    position: e,
    width: M
  }), [y, e, M]), L = {
    title: l,
    description: d,
    module: u,
    otherActions: h,
    tabs: g,
    activeTabId: p,
    setActiveTabId: m
  };
  return x && t ? /* @__PURE__ */ o(
    fn,
    {
      isOpen: n,
      onClose: r,
      position: e,
      portalContainer: b,
      shownBottomSheet: !0,
      children: /* @__PURE__ */ f(qi, { open: n, onOpenChange: N, children: [
        /* @__PURE__ */ o(Xi, { className: "bg-f1-background-overlay" }),
        /* @__PURE__ */ f(Yi, { ref: A, className: _, children: [
          /* @__PURE__ */ o(Ln, { ...L }),
          /* @__PURE__ */ o(yn, { disableContentPadding: C, children: s }),
          /* @__PURE__ */ o(
            bn,
            {
              primaryAction: i,
              secondaryAction: c
            }
          )
        ] })
      ] })
    }
  ) : /* @__PURE__ */ o(
    fn,
    {
      isOpen: n,
      onClose: r,
      position: e,
      portalContainer: b,
      children: /* @__PURE__ */ o(
        Ki,
        {
          open: n,
          onOpenChange: N,
          modal: e === "center" || e === "fullscreen",
          children: /* @__PURE__ */ f(
            Qi,
            {
              ref: A,
              withTranslateAnimation: !k,
              wrapperClassName: n4({
                variant: y,
                position: e
              }),
              className: _,
              onOpenAutoFocus: (E) => E.preventDefault(),
              container: w,
              children: [
                /* @__PURE__ */ o(Ln, { ...L }),
                /* @__PURE__ */ o(yn, { disableContentPadding: C, children: s }),
                /* @__PURE__ */ o(
                  bn,
                  {
                    primaryAction: i,
                    secondaryAction: c
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}, I1 = (t) => /* @__PURE__ */ o(s4, { ...t });
I1.displayName = "F0Dialog";
const a4 = Yr(
  Ji("F0Dialog", I1)
), i4 = ["days", "hours", "minutes", "seconds"], qf = ["sm", "md"], H1 = [...i4], Xf = ["hours", "minutes"], qe = {
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1
};
function c4(t) {
  const e = Number.isFinite(t) ? t : 0;
  let r = Math.max(0, Math.floor(e));
  const n = Math.floor(r / qe.days);
  r = r % qe.days;
  const s = Math.floor(r / qe.hours);
  r = r % qe.hours;
  const a = Math.floor(r / qe.minutes), i = r % qe.minutes;
  return { days: n, hours: s, minutes: a, seconds: i };
}
function Yf(t) {
  return H1.reduce((e, r) => {
    const n = t[r], s = Number.isFinite(n) ? n : 0, a = Math.max(0, Math.floor(s));
    return e + a * qe[r];
  }, 0);
}
function Kf(t, e) {
  const r = Number.isFinite(t) ? t : 0;
  let n = Math.max(0, Math.floor(r));
  const s = { days: 0, hours: 0, minutes: 0, seconds: 0 }, a = H1.filter((i) => e.includes(i));
  for (const i of a)
    s[i] = Math.floor(n / qe[i]), n = n % qe[i];
  return s;
}
function Qf(t, e) {
  return e != null && t > e ? e : t < 0 ? 0 : t;
}
var fe;
(function(t) {
  t.assertEqual = (s) => {
  };
  function e(s) {
  }
  t.assertIs = e;
  function r(s) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (s) => {
    const a = {};
    for (const i of s)
      a[i] = i;
    return a;
  }, t.getValidEnumValues = (s) => {
    const a = t.objectKeys(s).filter((c) => typeof s[s[c]] != "number"), i = {};
    for (const c of a)
      i[c] = s[c];
    return t.objectValues(i);
  }, t.objectValues = (s) => t.objectKeys(s).map(function(a) {
    return s[a];
  }), t.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const a = [];
    for (const i in s)
      Object.prototype.hasOwnProperty.call(s, i) && a.push(i);
    return a;
  }, t.find = (s, a) => {
    for (const i of s)
      if (a(i))
        return i;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function n(s, a = " | ") {
    return s.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a;
})(fe || (fe = {}));
var Mn;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Mn || (Mn = {}));
const G = fe.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), et = (t) => {
  switch (typeof t) {
    case "undefined":
      return G.undefined;
    case "string":
      return G.string;
    case "number":
      return Number.isNaN(t) ? G.nan : G.number;
    case "boolean":
      return G.boolean;
    case "function":
      return G.function;
    case "bigint":
      return G.bigint;
    case "symbol":
      return G.symbol;
    case "object":
      return Array.isArray(t) ? G.array : t === null ? G.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? G.promise : typeof Map < "u" && t instanceof Map ? G.map : typeof Set < "u" && t instanceof Set ? G.set : typeof Date < "u" && t instanceof Date ? G.date : G.object;
    default:
      return G.unknown;
  }
}, F = fe.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class Ye extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const r = e || function(a) {
      return a.message;
    }, n = { _errors: [] }, s = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(s);
        else if (i.code === "invalid_return_type")
          s(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          s(i.argumentsError);
        else if (i.path.length === 0)
          n._errors.push(r(i));
        else {
          let c = n, l = 0;
          for (; l < i.path.length; ) {
            const d = i.path[l];
            l === i.path.length - 1 ? (c[d] = c[d] || { _errors: [] }, c[d]._errors.push(r(i))) : c[d] = c[d] || { _errors: [] }, c = c[d], l++;
          }
        }
    };
    return s(this), n;
  }
  static assert(e) {
    if (!(e instanceof Ye))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, fe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, n = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const a = s.path[0];
        r[a] = r[a] || [], r[a].push(e(s));
      } else
        n.push(e(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Ye.create = (t) => new Ye(t);
const Tr = (t, e) => {
  let r;
  switch (t.code) {
    case F.invalid_type:
      t.received === G.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case F.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, fe.jsonStringifyReplacer)}`;
      break;
    case F.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${fe.joinValues(t.keys, ", ")}`;
      break;
    case F.invalid_union:
      r = "Invalid input";
      break;
    case F.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${fe.joinValues(t.options)}`;
      break;
    case F.invalid_enum_value:
      r = `Invalid enum value. Expected ${fe.joinValues(t.options)}, received '${t.received}'`;
      break;
    case F.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case F.invalid_return_type:
      r = "Invalid function return type";
      break;
    case F.invalid_date:
      r = "Invalid date";
      break;
    case F.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : fe.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case F.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "bigint" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case F.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case F.custom:
      r = "Invalid input";
      break;
    case F.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case F.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case F.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, fe.assertNever(t);
  }
  return { message: r };
};
let l4 = Tr;
function d4() {
  return l4;
}
const u4 = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, a = [...r, ...s.path || []], i = {
    ...s,
    path: a
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: a,
      message: s.message
    };
  let c = "";
  const l = n.filter((d) => !!d).slice().reverse();
  for (const d of l)
    c = d(i, { data: e, defaultError: c }).message;
  return {
    ...s,
    path: a,
    message: c
  };
};
function Z(t, e) {
  const r = d4(), n = u4({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      // contextual error map is first priority
      t.schemaErrorMap,
      // then schema-bound map if available
      r,
      // then global override map
      r === Tr ? void 0 : Tr
      // then global default map
    ].filter((s) => !!s)
  });
  t.common.issues.push(n);
}
class Pe {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted")
        return ne;
      s.status === "dirty" && e.dirty(), n.push(s.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const s of r) {
      const a = await s.key, i = await s.value;
      n.push({
        key: a,
        value: i
      });
    }
    return Pe.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: a, value: i } = s;
      if (a.status === "aborted" || i.status === "aborted")
        return ne;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (n[a.value] = i.value);
    }
    return { status: e.value, value: n };
  }
}
const ne = Object.freeze({
  status: "aborted"
}), Nt = (t) => ({ status: "dirty", value: t }), Ie = (t) => ({ status: "valid", value: t }), En = (t) => t.status === "aborted", _n = (t) => t.status === "dirty", gt = (t) => t.status === "valid", Xt = (t) => typeof Promise < "u" && t instanceof Promise;
var q;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e?.message;
})(q || (q = {}));
class ot {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Sn = (t, e) => {
  if (gt(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Ye(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ae(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (i, c) => {
    const { message: l } = t;
    return i.code === "invalid_enum_value" ? { message: l ?? c.defaultError } : typeof c.data > "u" ? { message: l ?? n ?? c.defaultError } : i.code !== "invalid_type" ? { message: c.defaultError } : { message: l ?? r ?? c.defaultError };
  }, description: s };
}
class ce {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return et(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: et(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Pe(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: et(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Xt(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    const n = {
      common: {
        issues: [],
        async: r?.async ?? !1,
        contextualErrorMap: r?.errorMap
      },
      path: r?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: et(e)
    }, s = this._parseSync({ data: e, path: n.path, parent: n });
    return Sn(n, s);
  }
  "~validate"(e) {
    const r = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: et(e)
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: r });
        return gt(n) ? {
          value: n.value
        } : {
          issues: r.common.issues
        };
      } catch (n) {
        n?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), r.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: r }).then((n) => gt(n) ? {
      value: n.value
    } : {
      issues: r.common.issues
    });
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r?.errorMap,
        async: !0
      },
      path: r?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: et(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), a = await (Xt(s) ? s : Promise.resolve(s));
    return Sn(n, a);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, a) => {
      const i = e(s), c = () => a.addIssue({
        code: F.custom,
        ...n(s)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((l) => l ? !0 : (c(), !1)) : i ? !0 : (c(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new wt({
      schema: this,
      typeName: $.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (r) => this["~validate"](r)
    };
  }
  optional() {
    return nt.create(this, this._def);
  }
  nullable() {
    return xt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ue.create(this);
  }
  promise() {
    return Qt.create(this, this._def);
  }
  or(e) {
    return Yt.create([this, e], this._def);
  }
  and(e) {
    return Kt.create(this, e, this._def);
  }
  transform(e) {
    return new wt({
      ...ae(this._def),
      schema: this,
      typeName: $.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ir({
      ...ae(this._def),
      innerType: this,
      defaultValue: r,
      typeName: $.ZodDefault
    });
  }
  brand() {
    return new F4({
      typeName: $.ZodBranded,
      type: this,
      ...ae(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Hr({
      ...ae(this._def),
      innerType: this,
      catchValue: r,
      typeName: $.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return sn.create(this, e);
  }
  readonly() {
    return Or.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const f4 = /^c[^\s-]{8,}$/i, h4 = /^[0-9a-z]+$/, p4 = /^[0-9A-HJKMNP-TV-Z]{26}$/i, m4 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, g4 = /^[a-z0-9_-]{21}$/i, v4 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, C4 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, w4 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, x4 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let mr;
const k4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, y4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, b4 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, L4 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, M4 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, E4 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, O1 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", _4 = new RegExp(`^${O1}$`);
function j1(t) {
  let e = "[0-5]\\d";
  t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`);
  const r = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${r}`;
}
function S4(t) {
  return new RegExp(`^${j1(t)}$`);
}
function R4(t) {
  let e = `${O1}T${j1(t)}`;
  const r = [];
  return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function N4(t, e) {
  return !!((e === "v4" || !e) && k4.test(t) || (e === "v6" || !e) && b4.test(t));
}
function T4(t, e) {
  if (!v4.test(t))
    return !1;
  try {
    const [r] = t.split(".");
    if (!r)
      return !1;
    const n = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), s = JSON.parse(atob(n));
    return !(typeof s != "object" || s === null || "typ" in s && s?.typ !== "JWT" || !s.alg || e && s.alg !== e);
  } catch {
    return !1;
  }
}
function A4(t, e) {
  return !!((e === "v4" || !e) && y4.test(t) || (e === "v6" || !e) && L4.test(t));
}
class tt extends ce {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== G.string) {
      const a = this._getOrReturnCtx(e);
      return Z(a, {
        code: F.invalid_type,
        expected: G.string,
        received: a.parsedType
      }), ne;
    }
    const n = new Pe();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (s = this._getOrReturnCtx(e, s), Z(s, {
          code: F.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (s = this._getOrReturnCtx(e, s), Z(s, {
          code: F.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, c = e.data.length < a.value;
        (i || c) && (s = this._getOrReturnCtx(e, s), i ? Z(s, {
          code: F.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : c && Z(s, {
          code: F.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        w4.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
          validation: "email",
          code: F.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        mr || (mr = new RegExp(x4, "u")), mr.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
          validation: "emoji",
          code: F.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        m4.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
          validation: "uuid",
          code: F.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "nanoid")
        g4.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
          validation: "nanoid",
          code: F.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        f4.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
          validation: "cuid",
          code: F.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        h4.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
          validation: "cuid2",
          code: F.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        p4.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
          validation: "ulid",
          code: F.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), Z(s, {
            validation: "url",
            code: F.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
        validation: "regex",
        code: F.invalid_string,
        message: a.message
      }), n.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(e, s), Z(s, {
        code: F.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), n.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s = this._getOrReturnCtx(e, s), Z(s, {
        code: F.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), n.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s = this._getOrReturnCtx(e, s), Z(s, {
        code: F.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), n.dirty()) : a.kind === "datetime" ? R4(a).test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
        code: F.invalid_string,
        validation: "datetime",
        message: a.message
      }), n.dirty()) : a.kind === "date" ? _4.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
        code: F.invalid_string,
        validation: "date",
        message: a.message
      }), n.dirty()) : a.kind === "time" ? S4(a).test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
        code: F.invalid_string,
        validation: "time",
        message: a.message
      }), n.dirty()) : a.kind === "duration" ? C4.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
        validation: "duration",
        code: F.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "ip" ? N4(e.data, a.version) || (s = this._getOrReturnCtx(e, s), Z(s, {
        validation: "ip",
        code: F.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "jwt" ? T4(e.data, a.alg) || (s = this._getOrReturnCtx(e, s), Z(s, {
        validation: "jwt",
        code: F.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "cidr" ? A4(e.data, a.version) || (s = this._getOrReturnCtx(e, s), Z(s, {
        validation: "cidr",
        code: F.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "base64" ? M4.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
        validation: "base64",
        code: F.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "base64url" ? E4.test(e.data) || (s = this._getOrReturnCtx(e, s), Z(s, {
        validation: "base64url",
        code: F.invalid_string,
        message: a.message
      }), n.dirty()) : fe.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _regex(e, r, n) {
    return this.refinement((s) => e.test(s), {
      validation: r,
      code: F.invalid_string,
      ...q.errToObj(n)
    });
  }
  _addCheck(e) {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...q.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...q.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...q.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...q.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...q.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...q.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...q.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...q.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...q.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...q.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...q.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...q.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...q.errToObj(e) });
  }
  datetime(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      offset: e?.offset ?? !1,
      local: e?.local ?? !1,
      ...q.errToObj(e?.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      ...q.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...q.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...q.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r?.position,
      ...q.errToObj(r?.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...q.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...q.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...q.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...q.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...q.errToObj(r)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, q.errToObj(e));
  }
  trim() {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
tt.create = (t) => new tt({
  checks: [],
  typeName: $.ZodString,
  coerce: t?.coerce ?? !1,
  ...ae(t)
});
function V4(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, a = Number.parseInt(t.toFixed(s).replace(".", "")), i = Number.parseInt(e.toFixed(s).replace(".", ""));
  return a % i / 10 ** s;
}
class vt extends ce {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== G.number) {
      const a = this._getOrReturnCtx(e);
      return Z(a, {
        code: F.invalid_type,
        expected: G.number,
        received: a.parsedType
      }), ne;
    }
    let n;
    const s = new Pe();
    for (const a of this._def.checks)
      a.kind === "int" ? fe.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), Z(n, {
        code: F.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), Z(n, {
        code: F.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), Z(n, {
        code: F.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? V4(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), Z(n, {
        code: F.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), Z(n, {
        code: F.not_finite,
        message: a.message
      }), s.dirty()) : fe.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, q.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, q.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, q.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, q.toString(r));
  }
  setLimit(e, r, n, s) {
    return new vt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: q.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new vt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: q.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: q.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: q.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: q.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: q.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: q.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: q.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: q.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: q.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && fe.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
vt.create = (t) => new vt({
  checks: [],
  typeName: $.ZodNumber,
  coerce: t?.coerce || !1,
  ...ae(t)
});
class Pt extends ce {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== G.bigint)
      return this._getInvalidInput(e);
    let n;
    const s = new Pe();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), Z(n, {
        code: F.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), Z(n, {
        code: F.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), Z(n, {
        code: F.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : fe.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _getInvalidInput(e) {
    const r = this._getOrReturnCtx(e);
    return Z(r, {
      code: F.invalid_type,
      expected: G.bigint,
      received: r.parsedType
    }), ne;
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, q.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, q.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, q.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, q.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Pt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: q.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Pt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: q.toString(r)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
Pt.create = (t) => new Pt({
  checks: [],
  typeName: $.ZodBigInt,
  coerce: t?.coerce ?? !1,
  ...ae(t)
});
class Ar extends ce {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== G.boolean) {
      const n = this._getOrReturnCtx(e);
      return Z(n, {
        code: F.invalid_type,
        expected: G.boolean,
        received: n.parsedType
      }), ne;
    }
    return Ie(e.data);
  }
}
Ar.create = (t) => new Ar({
  typeName: $.ZodBoolean,
  coerce: t?.coerce || !1,
  ...ae(t)
});
class $t extends ce {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== G.date) {
      const a = this._getOrReturnCtx(e);
      return Z(a, {
        code: F.invalid_type,
        expected: G.date,
        received: a.parsedType
      }), ne;
    }
    if (Number.isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return Z(a, {
        code: F.invalid_date
      }), ne;
    }
    const n = new Pe();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (s = this._getOrReturnCtx(e, s), Z(s, {
        code: F.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s = this._getOrReturnCtx(e, s), Z(s, {
        code: F.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : fe.assertNever(a);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new $t({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: q.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: q.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
$t.create = (t) => new $t({
  checks: [],
  coerce: t?.coerce || !1,
  typeName: $.ZodDate,
  ...ae(t)
});
class Rn extends ce {
  _parse(e) {
    if (this._getType(e) !== G.symbol) {
      const n = this._getOrReturnCtx(e);
      return Z(n, {
        code: F.invalid_type,
        expected: G.symbol,
        received: n.parsedType
      }), ne;
    }
    return Ie(e.data);
  }
}
Rn.create = (t) => new Rn({
  typeName: $.ZodSymbol,
  ...ae(t)
});
class Nn extends ce {
  _parse(e) {
    if (this._getType(e) !== G.undefined) {
      const n = this._getOrReturnCtx(e);
      return Z(n, {
        code: F.invalid_type,
        expected: G.undefined,
        received: n.parsedType
      }), ne;
    }
    return Ie(e.data);
  }
}
Nn.create = (t) => new Nn({
  typeName: $.ZodUndefined,
  ...ae(t)
});
class Tn extends ce {
  _parse(e) {
    if (this._getType(e) !== G.null) {
      const n = this._getOrReturnCtx(e);
      return Z(n, {
        code: F.invalid_type,
        expected: G.null,
        received: n.parsedType
      }), ne;
    }
    return Ie(e.data);
  }
}
Tn.create = (t) => new Tn({
  typeName: $.ZodNull,
  ...ae(t)
});
class Vr extends ce {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Ie(e.data);
  }
}
Vr.create = (t) => new Vr({
  typeName: $.ZodAny,
  ...ae(t)
});
class Fr extends ce {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Ie(e.data);
  }
}
Fr.create = (t) => new Fr({
  typeName: $.ZodUnknown,
  ...ae(t)
});
class st extends ce {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return Z(r, {
      code: F.invalid_type,
      expected: G.never,
      received: r.parsedType
    }), ne;
  }
}
st.create = (t) => new st({
  typeName: $.ZodNever,
  ...ae(t)
});
class An extends ce {
  _parse(e) {
    if (this._getType(e) !== G.undefined) {
      const n = this._getOrReturnCtx(e);
      return Z(n, {
        code: F.invalid_type,
        expected: G.void,
        received: n.parsedType
      }), ne;
    }
    return Ie(e.data);
  }
}
An.create = (t) => new An({
  typeName: $.ZodVoid,
  ...ae(t)
});
class Ue extends ce {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== G.array)
      return Z(r, {
        code: F.invalid_type,
        expected: G.array,
        received: r.parsedType
      }), ne;
    if (s.exactLength !== null) {
      const i = r.data.length > s.exactLength.value, c = r.data.length < s.exactLength.value;
      (i || c) && (Z(r, {
        code: i ? F.too_big : F.too_small,
        minimum: c ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (Z(r, {
      code: F.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (Z(r, {
      code: F.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((i, c) => s.type._parseAsync(new ot(r, i, r.path, c)))).then((i) => Pe.mergeArray(n, i));
    const a = [...r.data].map((i, c) => s.type._parseSync(new ot(r, i, r.path, c)));
    return Pe.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Ue({
      ...this._def,
      minLength: { value: e, message: q.toString(r) }
    });
  }
  max(e, r) {
    return new Ue({
      ...this._def,
      maxLength: { value: e, message: q.toString(r) }
    });
  }
  length(e, r) {
    return new Ue({
      ...this._def,
      exactLength: { value: e, message: q.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ue.create = (t, e) => new Ue({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: $.ZodArray,
  ...ae(e)
});
function ht(t) {
  if (t instanceof ke) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = nt.create(ht(n));
    }
    return new ke({
      ...t._def,
      shape: () => e
    });
  } else return t instanceof Ue ? new Ue({
    ...t._def,
    type: ht(t.element)
  }) : t instanceof nt ? nt.create(ht(t.unwrap())) : t instanceof xt ? xt.create(ht(t.unwrap())) : t instanceof ct ? ct.create(t.items.map((e) => ht(e))) : t;
}
class ke extends ce {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = fe.objectKeys(e);
    return this._cached = { shape: e, keys: r }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== G.object) {
      const d = this._getOrReturnCtx(e);
      return Z(d, {
        code: F.invalid_type,
        expected: G.object,
        received: d.parsedType
      }), ne;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), c = [];
    if (!(this._def.catchall instanceof st && this._def.unknownKeys === "strip"))
      for (const d in s.data)
        i.includes(d) || c.push(d);
    const l = [];
    for (const d of i) {
      const u = a[d], h = s.data[d];
      l.push({
        key: { status: "valid", value: d },
        value: u._parse(new ot(s, h, s.path, d)),
        alwaysSet: d in s.data
      });
    }
    if (this._def.catchall instanceof st) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const u of c)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (d === "strict")
        c.length > 0 && (Z(s, {
          code: F.unrecognized_keys,
          keys: c
        }), n.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const u of c) {
        const h = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: d._parse(
            new ot(s, h, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const u of l) {
        const h = await u.key, g = await u.value;
        d.push({
          key: h,
          value: g,
          alwaysSet: u.alwaysSet
        });
      }
      return d;
    }).then((d) => Pe.mergeObjectSync(n, d)) : Pe.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return q.errToObj, new ke({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          const s = this._def.errorMap?.(r, n).message ?? n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: q.errToObj(e).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new ke({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ke({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new ke({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new ke({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: $.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new ke({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    for (const n of fe.objectKeys(e))
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    return new ke({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    for (const n of fe.objectKeys(this.shape))
      e[n] || (r[n] = this.shape[n]);
    return new ke({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ht(this);
  }
  partial(e) {
    const r = {};
    for (const n of fe.objectKeys(this.shape)) {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }
    return new ke({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    for (const n of fe.objectKeys(this.shape))
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let a = this.shape[n];
        for (; a instanceof nt; )
          a = a._def.innerType;
        r[n] = a;
      }
    return new ke({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return D1(fe.objectKeys(this.shape));
  }
}
ke.create = (t, e) => new ke({
  shape: () => t,
  unknownKeys: "strip",
  catchall: st.create(),
  typeName: $.ZodObject,
  ...ae(e)
});
ke.strictCreate = (t, e) => new ke({
  shape: () => t,
  unknownKeys: "strict",
  catchall: st.create(),
  typeName: $.ZodObject,
  ...ae(e)
});
ke.lazycreate = (t, e) => new ke({
  shape: t,
  unknownKeys: "strip",
  catchall: st.create(),
  typeName: $.ZodObject,
  ...ae(e)
});
class Yt extends ce {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(a) {
      for (const c of a)
        if (c.result.status === "valid")
          return c.result;
      for (const c of a)
        if (c.result.status === "dirty")
          return r.common.issues.push(...c.ctx.common.issues), c.result;
      const i = a.map((c) => new Ye(c.ctx.common.issues));
      return Z(r, {
        code: F.invalid_union,
        unionErrors: i
      }), ne;
    }
    if (r.common.async)
      return Promise.all(n.map(async (a) => {
        const i = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: r.data,
            path: r.path,
            parent: i
          }),
          ctx: i
        };
      })).then(s);
    {
      let a;
      const i = [];
      for (const l of n) {
        const d = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: r.data,
          path: r.path,
          parent: d
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !a && (a = { result: u, ctx: d }), d.common.issues.length && i.push(d.common.issues);
      }
      if (a)
        return r.common.issues.push(...a.ctx.common.issues), a.result;
      const c = i.map((l) => new Ye(l));
      return Z(r, {
        code: F.invalid_union,
        unionErrors: c
      }), ne;
    }
  }
  get options() {
    return this._def.options;
  }
}
Yt.create = (t, e) => new Yt({
  options: t,
  typeName: $.ZodUnion,
  ...ae(e)
});
function Pr(t, e) {
  const r = et(t), n = et(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === G.object && n === G.object) {
    const s = fe.objectKeys(e), a = fe.objectKeys(t).filter((c) => s.indexOf(c) !== -1), i = { ...t, ...e };
    for (const c of a) {
      const l = Pr(t[c], e[c]);
      if (!l.valid)
        return { valid: !1 };
      i[c] = l.data;
    }
    return { valid: !0, data: i };
  } else if (r === G.array && n === G.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a], c = e[a], l = Pr(i, c);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return r === G.date && n === G.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Kt extends ce {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (a, i) => {
      if (En(a) || En(i))
        return ne;
      const c = Pr(a.value, i.value);
      return c.valid ? ((_n(a) || _n(i)) && r.dirty(), { status: r.value, value: c.data }) : (Z(n, {
        code: F.invalid_intersection_types
      }), ne);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([a, i]) => s(a, i)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Kt.create = (t, e, r) => new Kt({
  left: t,
  right: e,
  typeName: $.ZodIntersection,
  ...ae(r)
});
class ct extends ce {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== G.array)
      return Z(n, {
        code: F.invalid_type,
        expected: G.array,
        received: n.parsedType
      }), ne;
    if (n.data.length < this._def.items.length)
      return Z(n, {
        code: F.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ne;
    !this._def.rest && n.data.length > this._def.items.length && (Z(n, {
      code: F.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const a = [...n.data].map((i, c) => {
      const l = this._def.items[c] || this._def.rest;
      return l ? l._parse(new ot(n, i, n.path, c)) : null;
    }).filter((i) => !!i);
    return n.common.async ? Promise.all(a).then((i) => Pe.mergeArray(r, i)) : Pe.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new ct({
      ...this._def,
      rest: e
    });
  }
}
ct.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ct({
    items: t,
    typeName: $.ZodTuple,
    rest: null,
    ...ae(e)
  });
};
class Vn extends ce {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== G.map)
      return Z(n, {
        code: F.invalid_type,
        expected: G.map,
        received: n.parsedType
      }), ne;
    const s = this._def.keyType, a = this._def.valueType, i = [...n.data.entries()].map(([c, l], d) => ({
      key: s._parse(new ot(n, c, n.path, [d, "key"])),
      value: a._parse(new ot(n, l, n.path, [d, "value"]))
    }));
    if (n.common.async) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of i) {
          const d = await l.key, u = await l.value;
          if (d.status === "aborted" || u.status === "aborted")
            return ne;
          (d.status === "dirty" || u.status === "dirty") && r.dirty(), c.set(d.value, u.value);
        }
        return { status: r.value, value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const l of i) {
        const d = l.key, u = l.value;
        if (d.status === "aborted" || u.status === "aborted")
          return ne;
        (d.status === "dirty" || u.status === "dirty") && r.dirty(), c.set(d.value, u.value);
      }
      return { status: r.value, value: c };
    }
  }
}
Vn.create = (t, e, r) => new Vn({
  valueType: e,
  keyType: t,
  typeName: $.ZodMap,
  ...ae(r)
});
class It extends ce {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== G.set)
      return Z(n, {
        code: F.invalid_type,
        expected: G.set,
        received: n.parsedType
      }), ne;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (Z(n, {
      code: F.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (Z(n, {
      code: F.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const a = this._def.valueType;
    function i(l) {
      const d = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return ne;
        u.status === "dirty" && r.dirty(), d.add(u.value);
      }
      return { status: r.value, value: d };
    }
    const c = [...n.data.values()].map((l, d) => a._parse(new ot(n, l, n.path, d)));
    return n.common.async ? Promise.all(c).then((l) => i(l)) : i(c);
  }
  min(e, r) {
    return new It({
      ...this._def,
      minSize: { value: e, message: q.toString(r) }
    });
  }
  max(e, r) {
    return new It({
      ...this._def,
      maxSize: { value: e, message: q.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
It.create = (t, e) => new It({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: $.ZodSet,
  ...ae(e)
});
class Fn extends ce {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Fn.create = (t, e) => new Fn({
  getter: t,
  typeName: $.ZodLazy,
  ...ae(e)
});
class $r extends ce {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return Z(r, {
        received: r.data,
        code: F.invalid_literal,
        expected: this._def.value
      }), ne;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
$r.create = (t, e) => new $r({
  value: t,
  typeName: $.ZodLiteral,
  ...ae(e)
});
function D1(t, e) {
  return new Ct({
    values: t,
    typeName: $.ZodEnum,
    ...ae(e)
  });
}
class Ct extends ce {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return Z(r, {
        expected: fe.joinValues(n),
        received: r.parsedType,
        code: F.invalid_type
      }), ne;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return Z(r, {
        received: r.data,
        code: F.invalid_enum_value,
        options: n
      }), ne;
    }
    return Ie(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e, r = this._def) {
    return Ct.create(e, {
      ...this._def,
      ...r
    });
  }
  exclude(e, r = this._def) {
    return Ct.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
Ct.create = D1;
class Pn extends ce {
  _parse(e) {
    const r = fe.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== G.string && n.parsedType !== G.number) {
      const s = fe.objectValues(r);
      return Z(n, {
        expected: fe.joinValues(s),
        received: n.parsedType,
        code: F.invalid_type
      }), ne;
    }
    if (this._cache || (this._cache = new Set(fe.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const s = fe.objectValues(r);
      return Z(n, {
        received: n.data,
        code: F.invalid_enum_value,
        options: s
      }), ne;
    }
    return Ie(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Pn.create = (t, e) => new Pn({
  values: t,
  typeName: $.ZodNativeEnum,
  ...ae(e)
});
class Qt extends ce {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== G.promise && r.common.async === !1)
      return Z(r, {
        code: F.invalid_type,
        expected: G.promise,
        received: r.parsedType
      }), ne;
    const n = r.parsedType === G.promise ? r.data : Promise.resolve(r.data);
    return Ie(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Qt.create = (t, e) => new Qt({
  type: t,
  typeName: $.ZodPromise,
  ...ae(e)
});
class wt extends ce {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === $.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = this._def.effect || null, a = {
      addIssue: (i) => {
        Z(n, i), i.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
      const i = s.transform(n.data, a);
      if (n.common.async)
        return Promise.resolve(i).then(async (c) => {
          if (r.value === "aborted")
            return ne;
          const l = await this._def.schema._parseAsync({
            data: c,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? ne : l.status === "dirty" || r.value === "dirty" ? Nt(l.value) : l;
        });
      {
        if (r.value === "aborted")
          return ne;
        const c = this._def.schema._parseSync({
          data: i,
          path: n.path,
          parent: n
        });
        return c.status === "aborted" ? ne : c.status === "dirty" || r.value === "dirty" ? Nt(c.value) : c;
      }
    }
    if (s.type === "refinement") {
      const i = (c) => {
        const l = s.refinement(c, a);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return c;
      };
      if (n.common.async === !1) {
        const c = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return c.status === "aborted" ? ne : (c.status === "dirty" && r.dirty(), i(c.value), { status: r.value, value: c.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((c) => c.status === "aborted" ? ne : (c.status === "dirty" && r.dirty(), i(c.value).then(() => ({ status: r.value, value: c.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!gt(i))
          return ne;
        const c = s.transform(i.value, a);
        if (c instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: c };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => gt(i) ? Promise.resolve(s.transform(i.value, a)).then((c) => ({
          status: r.value,
          value: c
        })) : ne);
    fe.assertNever(s);
  }
}
wt.create = (t, e, r) => new wt({
  schema: t,
  typeName: $.ZodEffects,
  effect: e,
  ...ae(r)
});
wt.createWithPreprocess = (t, e, r) => new wt({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: $.ZodEffects,
  ...ae(r)
});
class nt extends ce {
  _parse(e) {
    return this._getType(e) === G.undefined ? Ie(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
nt.create = (t, e) => new nt({
  innerType: t,
  typeName: $.ZodOptional,
  ...ae(e)
});
class xt extends ce {
  _parse(e) {
    return this._getType(e) === G.null ? Ie(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
xt.create = (t, e) => new xt({
  innerType: t,
  typeName: $.ZodNullable,
  ...ae(e)
});
class Ir extends ce {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === G.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ir.create = (t, e) => new Ir({
  innerType: t,
  typeName: $.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ae(e)
});
class Hr extends ce {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Xt(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Ye(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Ye(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Hr.create = (t, e) => new Hr({
  innerType: t,
  typeName: $.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ae(e)
});
class $n extends ce {
  _parse(e) {
    if (this._getType(e) !== G.nan) {
      const n = this._getOrReturnCtx(e);
      return Z(n, {
        code: F.invalid_type,
        expected: G.nan,
        received: n.parsedType
      }), ne;
    }
    return { status: "valid", value: e.data };
  }
}
$n.create = (t) => new $n({
  typeName: $.ZodNaN,
  ...ae(t)
});
class F4 extends ce {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class sn extends ce {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? ne : a.status === "dirty" ? (r.dirty(), Nt(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? ne : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, r) {
    return new sn({
      in: e,
      out: r,
      typeName: $.ZodPipeline
    });
  }
}
class Or extends ce {
  _parse(e) {
    const r = this._def.innerType._parse(e), n = (s) => (gt(s) && (s.value = Object.freeze(s.value)), s);
    return Xt(r) ? r.then((s) => n(s)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Or.create = (t, e) => new Or({
  innerType: t,
  typeName: $.ZodReadonly,
  ...ae(e)
});
var $;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})($ || ($ = {}));
const _e = tt.create, dt = vt.create, In = Ar.create, Qe = $t.create, Jf = Vr.create, e8 = Fr.create;
st.create;
const Et = Ue.create, jr = ke.create;
Yt.create;
Kt.create;
ct.create;
const Hn = $r.create, _t = Ct.create;
Qt.create;
nt.create;
xt.create;
function De(t, e) {
  return t._def?.typeName === e;
}
function t8(t) {
  return De(t, "ZodEffects") ? t._def.schema : t;
}
const Z1 = /* @__PURE__ */ new WeakMap();
function On(t, e) {
  Z1.set(t, e);
  const r = t;
  return r._f0Config = e, r._innerSchema = t, r;
}
function B1(t) {
  const e = t;
  return e._f0Config ? e._f0Config : Z1.get(t);
}
function r8(t) {
  return B1(t) !== void 0;
}
function Jt(t) {
  let e = t;
  for (; De(e, "ZodOptional") || De(e, "ZodNullable") || De(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function jn(t, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const r = Jt(t);
  return De(r, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : De(r, "ZodNumber") ? "number" : De(r, "ZodBoolean") ? "switch" : De(r, "ZodDate") ? "date" : De(r, "ZodEnum") || De(r, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : De(r, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
((t) => {
  function e({
    optional: x,
    minLength: k,
    maxLength: y,
    ...M
  }) {
    let _ = _e();
    const L = !x && k === void 0 ? 1 : k;
    L !== void 0 && (_ = _.min(L)), y !== void 0 && (_ = _.max(y));
    const E = x ? _.optional() : _;
    return t(E, M);
  }
  t.text = e;
  function r({ optional: x, ...k }) {
    const y = x ? _e().email().optional() : _e().email();
    return t(y, k);
  }
  t.email = r;
  function n({ optional: x, ...k }) {
    const y = x ? _e().optional() : _e().min(1);
    return t(
      y,
      { ...k, fieldType: "textarea" }
    );
  }
  t.textarea = n;
  function s({
    optional: x,
    min: k,
    max: y,
    isInt: M,
    ..._
  }) {
    let L = dt();
    M && (L = L.int()), k !== void 0 && (L = L.min(k)), y !== void 0 && (L = L.max(y));
    const E = x ? L.optional() : L;
    return t(E, _);
  }
  t.number = s;
  function a({ optional: x, ...k }) {
    const y = x ? In() : Hn(!0);
    return t(
      y,
      { ...k, fieldType: "switch" }
    );
  }
  t.boolean = a;
  function i({ optional: x, ...k }) {
    const y = x ? In() : Hn(!0);
    return t(
      y,
      { ...k, fieldType: "checkbox" }
    );
  }
  t.checkbox = i;
  function c({ optional: x, ...k }) {
    const y = x ? Qe().optional() : Qe();
    return t(y, k);
  }
  t.date = c;
  function l({ optional: x, ...k }) {
    const y = x ? _e().url().optional() : _e().url();
    return t(y, k);
  }
  t.url = l;
  function d({ optional: x, ...k }) {
    const y = x ? dt().optional() : dt();
    return t(
      y,
      { ...k, fieldType: "money" }
    );
  }
  t.money = d;
  function u({
    optional: x,
    min: k,
    max: y,
    ...M
  }) {
    let _ = dt();
    k !== void 0 && (_ = _.min(k)), y !== void 0 && (_ = _.max(y));
    const L = x ? _.optional() : _;
    return t(
      L,
      { ...M, fieldType: "percentage" }
    );
  }
  t.percentage = u;
  function h(x) {
    if (x.options.length === 0)
      throw new Error(
        "f0FormField.cardSelect requires at least one option to build a Zod enum"
      );
    const { optional: k, ...y } = x, M = y.options.map((L) => L.value), _ = k ? _t(M).optional() : _t(M);
    return t(
      _,
      { ...y, fieldType: "cardSelect" }
    );
  }
  t.cardSelect = h;
  function g({ optional: x, ...k }) {
    const y = x ? _e().optional() : _e().min(1);
    return t(
      y,
      { ...k, fieldType: "file", multiple: !1 }
    );
  }
  t.file = g;
  function p({ optional: x, ...k }) {
    const y = x ? Et(_e()).optional() : Et(_e()).min(1);
    return t(
      y,
      { ...k, fieldType: "file", multiple: !0 }
    );
  }
  t.multiFile = p;
  function m({ optional: x, ...k }) {
    const y = x ? Qe().optional() : Qe();
    return t(
      y,
      { ...k, fieldType: "time" }
    );
  }
  t.time = m;
  function C({ optional: x, ...k }) {
    const y = x ? Qe().optional() : Qe();
    return t(
      y,
      { ...k, fieldType: "datetime" }
    );
  }
  t.datetime = C;
  function w({ optional: x, ...k }) {
    const y = x ? dt().optional() : dt();
    return t(
      y,
      { ...k, fieldType: "duration" }
    );
  }
  t.duration = w;
  function b({ optional: x, ...k }) {
    const y = jr({ from: Qe(), to: Qe() }), M = x ? y.optional() : y;
    return t(
      M,
      { ...k, fieldType: "daterange" }
    );
  }
  t.dateRange = b;
  function P({ optional: x, ...k }) {
    const y = jr({
      value: _e(),
      mentionIds: Et(_e()).optional()
    }), M = x ? y.optional() : y;
    return t(
      M,
      { ...k, fieldType: "richtext" }
    );
  }
  t.richText = P;
  function A(x) {
    if (typeof x != "object" || x === null)
      throw new TypeError("f0FormField.select requires a config object");
    const k = x, { optional: y, ...M } = k, _ = Array.isArray(k.options) ? k.options : void 0;
    if (_ && _.length > 0) {
      const E = _.filter(
        (T) => typeof T == "object" && T !== null && "value" in T && typeof T.value == "string"
      ).map((T) => T.value);
      if (E.length > 0) {
        const T = y ? _t(E).optional() : _t(E);
        return t(T, M);
      }
    }
    const L = y ? _e().optional() : _e();
    return t(L, M);
  }
  t.select = A;
  function N(x) {
    if (typeof x != "object" || x === null)
      throw new TypeError("f0FormField.multiSelect requires a config object");
    const k = x, { optional: y, ...M } = k, _ = Array.isArray(k.options) ? k.options : void 0;
    if (_ && _.length > 0) {
      const T = _.filter(
        (B) => typeof B == "object" && B !== null && "value" in B && typeof B.value == "string"
      ).map((B) => B.value);
      if (T.length > 0) {
        const B = Et(_t(T)).min(1), X = y ? B.optional() : B;
        return t(
          X,
          { ...M, multiple: !0 }
        );
      }
    }
    const L = Et(_e()).min(1), E = y ? L.optional() : L;
    return t(E, { ...M, multiple: !0 });
  }
  t.multiSelect = N;
})(On || (On = {}));
const P4 = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use"), $4 = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: !0,
  rejectedAdditionalProperties: !1,
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: !1,
  definitions: {},
  errorMessages: !1,
  markdownDescription: !1,
  patternStrategy: "escape",
  applyRegexFlags: !1,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref",
  openAiAnyTypeName: "OpenAiAnyType"
}, I4 = (t) => ({
  ...$4,
  ...t
}), H4 = (t) => {
  const e = I4(t), r = e.name !== void 0 ? [...e.basePath, e.definitionPath, e.name] : e.basePath;
  return {
    ...e,
    flags: { hasReferencedOpenAiAnyType: !1 },
    currentPath: r,
    propertyPath: void 0,
    seen: new Map(Object.entries(e.definitions).map(([n, s]) => [
      s._def,
      {
        def: s._def,
        path: [...e.basePath, e.definitionPath, n],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
};
function U1(t, e, r, n) {
  n?.errorMessages && r && (t.errorMessage = {
    ...t.errorMessage,
    [e]: r
  });
}
function ve(t, e, r, n, s) {
  t[e] = r, U1(t, e, n, s);
}
const z1 = (t, e) => {
  let r = 0;
  for (; r < t.length && r < e.length && t[r] === e[r]; r++)
    ;
  return [(t.length - r).toString(), ...e.slice(r)].join("/");
};
function Ve(t) {
  if (t.target !== "openAi")
    return {};
  const e = [
    ...t.basePath,
    t.definitionPath,
    t.openAiAnyTypeName
  ];
  return t.flags.hasReferencedOpenAiAnyType = !0, {
    $ref: t.$refStrategy === "relative" ? z1(e, t.currentPath) : e.join("/")
  };
}
function O4(t, e) {
  const r = {
    type: "array"
  };
  return t.type?._def && t.type?._def?.typeName !== $.ZodAny && (r.items = pe(t.type._def, {
    ...e,
    currentPath: [...e.currentPath, "items"]
  })), t.minLength && ve(r, "minItems", t.minLength.value, t.minLength.message, e), t.maxLength && ve(r, "maxItems", t.maxLength.value, t.maxLength.message, e), t.exactLength && (ve(r, "minItems", t.exactLength.value, t.exactLength.message, e), ve(r, "maxItems", t.exactLength.value, t.exactLength.message, e)), r;
}
function j4(t, e) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!t.checks)
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "min":
        e.target === "jsonSchema7" ? n.inclusive ? ve(r, "minimum", n.value, n.message, e) : ve(r, "exclusiveMinimum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMinimum = !0), ve(r, "minimum", n.value, n.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? n.inclusive ? ve(r, "maximum", n.value, n.message, e) : ve(r, "exclusiveMaximum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMaximum = !0), ve(r, "maximum", n.value, n.message, e));
        break;
      case "multipleOf":
        ve(r, "multipleOf", n.value, n.message, e);
        break;
    }
  return r;
}
function D4() {
  return {
    type: "boolean"
  };
}
function W1(t, e) {
  return pe(t.type._def, e);
}
const Z4 = (t, e) => pe(t.innerType._def, e);
function G1(t, e, r) {
  const n = r ?? e.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((s, a) => G1(t, e, s))
    };
  switch (n) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return B4(t, e);
  }
}
const B4 = (t, e) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (e.target === "openApi3")
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "min":
        ve(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          e
        );
        break;
      case "max":
        ve(
          r,
          "maximum",
          n.value,
          // This is in milliseconds
          n.message,
          e
        );
        break;
    }
  return r;
};
function U4(t, e) {
  return {
    ...pe(t.innerType._def, e),
    default: t.defaultValue()
  };
}
function z4(t, e) {
  return e.effectStrategy === "input" ? pe(t.schema._def, e) : Ve(e);
}
function W4(t) {
  return {
    type: "string",
    enum: Array.from(t.values)
  };
}
const G4 = (t) => "type" in t && t.type === "string" ? !1 : "allOf" in t;
function q4(t, e) {
  const r = [
    pe(t.left._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "0"]
    }),
    pe(t.right._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "1"]
    })
  ].filter((a) => !!a);
  let n = e.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const s = [];
  return r.forEach((a) => {
    if (G4(a))
      s.push(...a.allOf), a.unevaluatedProperties === void 0 && (n = void 0);
    else {
      let i = a;
      if ("additionalProperties" in a && a.additionalProperties === !1) {
        const { additionalProperties: c, ...l } = a;
        i = l;
      } else
        n = void 0;
      s.push(i);
    }
  }), s.length ? {
    allOf: s,
    ...n
  } : void 0;
}
function X4(t, e) {
  const r = typeof t.value;
  return r !== "bigint" && r !== "number" && r !== "boolean" && r !== "string" ? {
    type: Array.isArray(t.value) ? "array" : "object"
  } : e.target === "openApi3" ? {
    type: r === "bigint" ? "integer" : r,
    enum: [t.value]
  } : {
    type: r === "bigint" ? "integer" : r,
    const: t.value
  };
}
let gr;
const Oe = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => (gr === void 0 && (gr = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), gr),
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function q1(t, e) {
  const r = {
    type: "string"
  };
  if (t.checks)
    for (const n of t.checks)
      switch (n.kind) {
        case "min":
          ve(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, n.message, e);
          break;
        case "max":
          ve(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value, n.message, e);
          break;
        case "email":
          switch (e.emailStrategy) {
            case "format:email":
              je(r, "email", n.message, e);
              break;
            case "format:idn-email":
              je(r, "idn-email", n.message, e);
              break;
            case "pattern:zod":
              Ne(r, Oe.email, n.message, e);
              break;
          }
          break;
        case "url":
          je(r, "uri", n.message, e);
          break;
        case "uuid":
          je(r, "uuid", n.message, e);
          break;
        case "regex":
          Ne(r, n.regex, n.message, e);
          break;
        case "cuid":
          Ne(r, Oe.cuid, n.message, e);
          break;
        case "cuid2":
          Ne(r, Oe.cuid2, n.message, e);
          break;
        case "startsWith":
          Ne(r, RegExp(`^${vr(n.value, e)}`), n.message, e);
          break;
        case "endsWith":
          Ne(r, RegExp(`${vr(n.value, e)}$`), n.message, e);
          break;
        case "datetime":
          je(r, "date-time", n.message, e);
          break;
        case "date":
          je(r, "date", n.message, e);
          break;
        case "time":
          je(r, "time", n.message, e);
          break;
        case "duration":
          je(r, "duration", n.message, e);
          break;
        case "length":
          ve(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, n.message, e), ve(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value, n.message, e);
          break;
        case "includes": {
          Ne(r, RegExp(vr(n.value, e)), n.message, e);
          break;
        }
        case "ip": {
          n.version !== "v6" && je(r, "ipv4", n.message, e), n.version !== "v4" && je(r, "ipv6", n.message, e);
          break;
        }
        case "base64url":
          Ne(r, Oe.base64url, n.message, e);
          break;
        case "jwt":
          Ne(r, Oe.jwt, n.message, e);
          break;
        case "cidr": {
          n.version !== "v6" && Ne(r, Oe.ipv4Cidr, n.message, e), n.version !== "v4" && Ne(r, Oe.ipv6Cidr, n.message, e);
          break;
        }
        case "emoji":
          Ne(r, Oe.emoji(), n.message, e);
          break;
        case "ulid": {
          Ne(r, Oe.ulid, n.message, e);
          break;
        }
        case "base64": {
          switch (e.base64Strategy) {
            case "format:binary": {
              je(r, "binary", n.message, e);
              break;
            }
            case "contentEncoding:base64": {
              ve(r, "contentEncoding", "base64", n.message, e);
              break;
            }
            case "pattern:zod": {
              Ne(r, Oe.base64, n.message, e);
              break;
            }
          }
          break;
        }
        case "nanoid":
          Ne(r, Oe.nanoid, n.message, e);
      }
  return r;
}
function vr(t, e) {
  return e.patternStrategy === "escape" ? K4(t) : t;
}
const Y4 = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function K4(t) {
  let e = "";
  for (let r = 0; r < t.length; r++)
    Y4.has(t[r]) || (e += "\\"), e += t[r];
  return e;
}
function je(t, e, r, n) {
  t.format || t.anyOf?.some((s) => s.format) ? (t.anyOf || (t.anyOf = []), t.format && (t.anyOf.push({
    format: t.format,
    ...t.errorMessage && n.errorMessages && {
      errorMessage: { format: t.errorMessage.format }
    }
  }), delete t.format, t.errorMessage && (delete t.errorMessage.format, Object.keys(t.errorMessage).length === 0 && delete t.errorMessage)), t.anyOf.push({
    format: e,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : ve(t, "format", e, r, n);
}
function Ne(t, e, r, n) {
  t.pattern || t.allOf?.some((s) => s.pattern) ? (t.allOf || (t.allOf = []), t.pattern && (t.allOf.push({
    pattern: t.pattern,
    ...t.errorMessage && n.errorMessages && {
      errorMessage: { pattern: t.errorMessage.pattern }
    }
  }), delete t.pattern, t.errorMessage && (delete t.errorMessage.pattern, Object.keys(t.errorMessage).length === 0 && delete t.errorMessage)), t.allOf.push({
    pattern: Dn(e, n),
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : ve(t, "pattern", Dn(e, n), r, n);
}
function Dn(t, e) {
  if (!e.applyRegexFlags || !t.flags)
    return t.source;
  const r = {
    i: t.flags.includes("i"),
    m: t.flags.includes("m"),
    s: t.flags.includes("s")
    // `.` matches newlines
  }, n = r.i ? t.source.toLowerCase() : t.source;
  let s = "", a = !1, i = !1, c = !1;
  for (let l = 0; l < n.length; l++) {
    if (a) {
      s += n[l], a = !1;
      continue;
    }
    if (r.i) {
      if (i) {
        if (n[l].match(/[a-z]/)) {
          c ? (s += n[l], s += `${n[l - 2]}-${n[l]}`.toUpperCase(), c = !1) : n[l + 1] === "-" && n[l + 2]?.match(/[a-z]/) ? (s += n[l], c = !0) : s += `${n[l]}${n[l].toUpperCase()}`;
          continue;
        }
      } else if (n[l].match(/[a-z]/)) {
        s += `[${n[l]}${n[l].toUpperCase()}]`;
        continue;
      }
    }
    if (r.m) {
      if (n[l] === "^") {
        s += `(^|(?<=[\r
]))`;
        continue;
      } else if (n[l] === "$") {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (r.s && n[l] === ".") {
      s += i ? `${n[l]}\r
` : `[${n[l]}\r
]`;
      continue;
    }
    s += n[l], n[l] === "\\" ? a = !0 : i && n[l] === "]" ? i = !1 : !i && n[l] === "[" && (i = !0);
  }
  try {
    new RegExp(s);
  } catch {
    return console.warn(`Could not convert regex pattern at ${e.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), t.source;
  }
  return s;
}
function X1(t, e) {
  if (e.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), e.target === "openApi3" && t.keyType?._def.typeName === $.ZodEnum)
    return {
      type: "object",
      required: t.keyType._def.values,
      properties: t.keyType._def.values.reduce((n, s) => ({
        ...n,
        [s]: pe(t.valueType._def, {
          ...e,
          currentPath: [...e.currentPath, "properties", s]
        }) ?? Ve(e)
      }), {}),
      additionalProperties: e.rejectedAdditionalProperties
    };
  const r = {
    type: "object",
    additionalProperties: pe(t.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalProperties"]
    }) ?? e.allowedAdditionalProperties
  };
  if (e.target === "openApi3")
    return r;
  if (t.keyType?._def.typeName === $.ZodString && t.keyType._def.checks?.length) {
    const { type: n, ...s } = q1(t.keyType._def, e);
    return {
      ...r,
      propertyNames: s
    };
  } else {
    if (t.keyType?._def.typeName === $.ZodEnum)
      return {
        ...r,
        propertyNames: {
          enum: t.keyType._def.values
        }
      };
    if (t.keyType?._def.typeName === $.ZodBranded && t.keyType._def.type._def.typeName === $.ZodString && t.keyType._def.type._def.checks?.length) {
      const { type: n, ...s } = W1(t.keyType._def, e);
      return {
        ...r,
        propertyNames: s
      };
    }
  }
  return r;
}
function Q4(t, e) {
  if (e.mapStrategy === "record")
    return X1(t, e);
  const r = pe(t.keyType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "0"]
  }) || Ve(e), n = pe(t.valueType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "1"]
  }) || Ve(e);
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [r, n],
      minItems: 2,
      maxItems: 2
    }
  };
}
function J4(t) {
  const e = t.values, n = Object.keys(t.values).filter((a) => typeof e[e[a]] != "number").map((a) => e[a]), s = Array.from(new Set(n.map((a) => typeof a)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function e6(t) {
  return t.target === "openAi" ? void 0 : {
    not: Ve({
      ...t,
      currentPath: [...t.currentPath, "not"]
    })
  };
}
function t6(t) {
  return t.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const er = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function r6(t, e) {
  if (e.target === "openApi3")
    return Zn(t, e);
  const r = t.options instanceof Map ? Array.from(t.options.values()) : t.options;
  if (r.every((n) => n._def.typeName in er && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((s, a) => {
      const i = er[a._def.typeName];
      return i && !s.includes(i) ? [...s, i] : s;
    }, []);
    return {
      type: n.length > 1 ? n : n[0]
    };
  } else if (r.every((n) => n._def.typeName === "ZodLiteral" && !n.description)) {
    const n = r.reduce((s, a) => {
      const i = typeof a._def.value;
      switch (i) {
        case "string":
        case "number":
        case "boolean":
          return [...s, i];
        case "bigint":
          return [...s, "integer"];
        case "object":
          if (a._def.value === null)
            return [...s, "null"];
        default:
          return s;
      }
    }, []);
    if (n.length === r.length) {
      const s = n.filter((a, i, c) => c.indexOf(a) === i);
      return {
        type: s.length > 1 ? s : s[0],
        enum: r.reduce((a, i) => a.includes(i._def.value) ? a : [...a, i._def.value], [])
      };
    }
  } else if (r.every((n) => n._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: r.reduce((n, s) => [
        ...n,
        ...s._def.values.filter((a) => !n.includes(a))
      ], [])
    };
  return Zn(t, e);
}
const Zn = (t, e) => {
  const r = (t.options instanceof Map ? Array.from(t.options.values()) : t.options).map((n, s) => pe(n._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", `${s}`]
  })).filter((n) => !!n && (!e.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function n6(t, e) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(t.innerType._def.typeName) && (!t.innerType._def.checks || !t.innerType._def.checks.length))
    return e.target === "openApi3" ? {
      type: er[t.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        er[t.innerType._def.typeName],
        "null"
      ]
    };
  if (e.target === "openApi3") {
    const n = pe(t.innerType._def, {
      ...e,
      currentPath: [...e.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = pe(t.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function o6(t, e) {
  const r = {
    type: "number"
  };
  if (!t.checks)
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", U1(r, "type", n.message, e);
        break;
      case "min":
        e.target === "jsonSchema7" ? n.inclusive ? ve(r, "minimum", n.value, n.message, e) : ve(r, "exclusiveMinimum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMinimum = !0), ve(r, "minimum", n.value, n.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? n.inclusive ? ve(r, "maximum", n.value, n.message, e) : ve(r, "exclusiveMaximum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMaximum = !0), ve(r, "maximum", n.value, n.message, e));
        break;
      case "multipleOf":
        ve(r, "multipleOf", n.value, n.message, e);
        break;
    }
  return r;
}
function s6(t, e) {
  const r = e.target === "openAi", n = {
    type: "object",
    properties: {}
  }, s = [], a = t.shape();
  for (const c in a) {
    let l = a[c];
    if (l === void 0 || l._def === void 0)
      continue;
    let d = i6(l);
    d && r && (l._def.typeName === "ZodOptional" && (l = l._def.innerType), l.isNullable() || (l = l.nullable()), d = !1);
    const u = pe(l._def, {
      ...e,
      currentPath: [...e.currentPath, "properties", c],
      propertyPath: [...e.currentPath, "properties", c]
    });
    u !== void 0 && (n.properties[c] = u, d || s.push(c));
  }
  s.length && (n.required = s);
  const i = a6(t, e);
  return i !== void 0 && (n.additionalProperties = i), n;
}
function a6(t, e) {
  if (t.catchall._def.typeName !== "ZodNever")
    return pe(t.catchall._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalProperties"]
    });
  switch (t.unknownKeys) {
    case "passthrough":
      return e.allowedAdditionalProperties;
    case "strict":
      return e.rejectedAdditionalProperties;
    case "strip":
      return e.removeAdditionalStrategy === "strict" ? e.allowedAdditionalProperties : e.rejectedAdditionalProperties;
  }
}
function i6(t) {
  try {
    return t.isOptional();
  } catch {
    return !0;
  }
}
const c6 = (t, e) => {
  if (e.currentPath.toString() === e.propertyPath?.toString())
    return pe(t.innerType._def, e);
  const r = pe(t.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "1"]
  });
  return r ? {
    anyOf: [
      {
        not: Ve(e)
      },
      r
    ]
  } : Ve(e);
}, l6 = (t, e) => {
  if (e.pipeStrategy === "input")
    return pe(t.in._def, e);
  if (e.pipeStrategy === "output")
    return pe(t.out._def, e);
  const r = pe(t.in._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", "0"]
  }), n = pe(t.out._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((s) => s !== void 0)
  };
};
function d6(t, e) {
  return pe(t.type._def, e);
}
function u6(t, e) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: pe(t.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "items"]
    })
  };
  return t.minSize && ve(n, "minItems", t.minSize.value, t.minSize.message, e), t.maxSize && ve(n, "maxItems", t.maxSize.value, t.maxSize.message, e), n;
}
function f6(t, e) {
  return t.rest ? {
    type: "array",
    minItems: t.items.length,
    items: t.items.map((r, n) => pe(r._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: pe(t.rest._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: t.items.length,
    maxItems: t.items.length,
    items: t.items.map((r, n) => pe(r._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function h6(t) {
  return {
    not: Ve(t)
  };
}
function p6(t) {
  return Ve(t);
}
const m6 = (t, e) => pe(t.innerType._def, e), g6 = (t, e, r) => {
  switch (e) {
    case $.ZodString:
      return q1(t, r);
    case $.ZodNumber:
      return o6(t, r);
    case $.ZodObject:
      return s6(t, r);
    case $.ZodBigInt:
      return j4(t, r);
    case $.ZodBoolean:
      return D4();
    case $.ZodDate:
      return G1(t, r);
    case $.ZodUndefined:
      return h6(r);
    case $.ZodNull:
      return t6(r);
    case $.ZodArray:
      return O4(t, r);
    case $.ZodUnion:
    case $.ZodDiscriminatedUnion:
      return r6(t, r);
    case $.ZodIntersection:
      return q4(t, r);
    case $.ZodTuple:
      return f6(t, r);
    case $.ZodRecord:
      return X1(t, r);
    case $.ZodLiteral:
      return X4(t, r);
    case $.ZodEnum:
      return W4(t);
    case $.ZodNativeEnum:
      return J4(t);
    case $.ZodNullable:
      return n6(t, r);
    case $.ZodOptional:
      return c6(t, r);
    case $.ZodMap:
      return Q4(t, r);
    case $.ZodSet:
      return u6(t, r);
    case $.ZodLazy:
      return () => t.getter()._def;
    case $.ZodPromise:
      return d6(t, r);
    case $.ZodNaN:
    case $.ZodNever:
      return e6(r);
    case $.ZodEffects:
      return z4(t, r);
    case $.ZodAny:
      return Ve(r);
    case $.ZodUnknown:
      return p6(r);
    case $.ZodDefault:
      return U4(t, r);
    case $.ZodBranded:
      return W1(t, r);
    case $.ZodReadonly:
      return m6(t, r);
    case $.ZodCatch:
      return Z4(t, r);
    case $.ZodPipeline:
      return l6(t, r);
    case $.ZodFunction:
    case $.ZodVoid:
    case $.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
};
function pe(t, e, r = !1) {
  const n = e.seen.get(t);
  if (e.override) {
    const c = e.override?.(t, e, n, r);
    if (c !== P4)
      return c;
  }
  if (n && !r) {
    const c = v6(n, e);
    if (c !== void 0)
      return c;
  }
  const s = { def: t, path: e.currentPath, jsonSchema: void 0 };
  e.seen.set(t, s);
  const a = g6(t, t.typeName, e), i = typeof a == "function" ? pe(a(), e) : a;
  if (i && C6(t, e, i), e.postProcess) {
    const c = e.postProcess(i, t, e);
    return s.jsonSchema = i, c;
  }
  return s.jsonSchema = i, i;
}
const v6 = (t, e) => {
  switch (e.$refStrategy) {
    case "root":
      return { $ref: t.path.join("/") };
    case "relative":
      return { $ref: z1(e.currentPath, t.path) };
    case "none":
    case "seen":
      return t.path.length < e.currentPath.length && t.path.every((r, n) => e.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${e.currentPath.join("/")}! Defaulting to any`), Ve(e)) : e.$refStrategy === "seen" ? Ve(e) : void 0;
  }
}, C6 = (t, e, r) => (t.description && (r.description = t.description, e.markdownDescription && (r.markdownDescription = t.description)), r), ut = (t, e) => {
  const r = H4(e);
  let n = typeof e == "object" && e.definitions ? Object.entries(e.definitions).reduce((c, [l, d]) => ({
    ...c,
    [l]: pe(d._def, {
      ...r,
      currentPath: [...r.basePath, r.definitionPath, l]
    }, !0) ?? Ve(r)
  }), {}) : void 0;
  const s = typeof e == "string" ? e : e?.name, a = pe(
    t._def,
    r,
    !1
  ) ?? Ve(r);
  r.flags.hasReferencedOpenAiAnyType && (n || (n = {}), n[r.openAiAnyTypeName] || (n[r.openAiAnyTypeName] = {
    // Skipping "object" as no properties can be defined and additionalProperties must be "false"
    type: ["string", "number", "integer", "boolean", "array", "null"],
    items: {
      $ref: r.$refStrategy === "relative" ? "1" : [
        ...r.basePath,
        r.definitionPath,
        r.openAiAnyTypeName
      ].join("/")
    }
  }));
  const i = s === void 0 ? n ? {
    ...a,
    [r.definitionPath]: n
  } : a : {
    $ref: [
      ...r.$refStrategy === "relative" ? [] : r.basePath,
      r.definitionPath,
      s
    ].join("/"),
    [r.definitionPath]: {
      ...n,
      [s]: a
    }
  };
  return r.target === "jsonSchema7" ? i.$schema = "http://json-schema.org/draft-07/schema#" : (r.target === "jsonSchema2019-09" || r.target === "openAi") && (i.$schema = "https://json-schema.org/draft/2019-09/schema#"), r.target === "openAi" && ("anyOf" in i || "oneOf" in i || "allOf" in i || "type" in i && Array.isArray(i.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), i;
};
function w6(t) {
  return "_brand" in t && (t._brand === "single" || t._brand === "per-section");
}
function Bn(t) {
  let e = t;
  for (; e; ) {
    const r = e._def;
    if ("shape" in r && typeof r.shape == "function")
      return { shape: r.shape() };
    if ("schema" in r && r.schema instanceof ce) {
      e = r.schema;
      continue;
    }
    if ("innerType" in r && r.innerType instanceof ce) {
      e = r.innerType;
      continue;
    }
    break;
  }
  return {};
}
function Y1(t) {
  if (!w6(t)) return t;
  const e = t._brand === "per-section" ? Object.fromEntries(
    Object.entries(t.schema).map(
      ([c, l]) => [
        c,
        Object.keys(Bn(l).shape ?? {})
      ]
    )
  ) : void 0, r = t._brand === "single" ? t.schema : (
    // Per-section: merge all section schemas into one flat z.object.
    // The registry only understands a single F0FormSchema.
    // (section boundaries are preserved in `sections`)
    (() => {
      const c = {};
      for (const [l, d] of Object.entries(
        t.schema
      )) {
        const u = Bn(d);
        if (u.shape)
          for (const [h, g] of Object.entries(u.shape))
            h in c && console.warn(
              `[toAvailableFormDefinition] Duplicate field "${h}" found in section "${l}". The later section's field will overwrite the earlier one.`
            ), c[h] = g;
      }
      return jr(c);
    })()
  ), n = t.onSubmit, s = n ? async (c) => {
    if (t._brand === "single")
      await n({ data: c });
    else {
      const l = t.schema, d = {};
      for (const [h, g] of Object.entries(
        e
      )) {
        const p = {};
        for (const m of g)
          m in c && (p[m] = c[m]);
        d[h] = p;
      }
      const u = Object.keys(l);
      for (const h of u)
        await n({
          sectionId: h,
          data: d[h],
          fullData: d
        });
    }
  } : void 0;
  let a;
  if (t._brand === "per-section" && t.defaultValues) {
    a = {};
    for (const c of Object.values(
      t.defaultValues
    ))
      Object.assign(a, c);
  } else
    a = t.defaultValues;
  let i = a;
  if (t.defaultValuesFn)
    if (t._brand === "per-section") {
      const c = t.defaultValuesFn;
      i = async (l) => {
        const d = await c(l), u = {};
        for (const h of Object.values(d))
          Object.assign(u, h);
        return u;
      };
    } else
      i = t.defaultValuesFn;
  return {
    name: t.name,
    schema: r,
    defaultValues: i,
    defaultValuesParamsSchema: t.defaultValuesParamsSchema,
    sections: t.sections,
    onSubmit: s,
    description: t.description,
    module: t.module,
    steps: t.steps,
    submitConfig: t.submitConfig,
    errorTriggerMode: t.errorTriggerMode
  };
}
function n8(t) {
  return Y1(t);
}
function Un(t, e = {}) {
  if (typeof t == "function") {
    const r = t(e);
    return r && typeof r.then == "function" ? {} : r;
  }
  return t ?? {};
}
function zn(t, e = {}, r) {
  let n = { ...e };
  const s = { ...e }, a = /* @__PURE__ */ new Set();
  return { ref: {
    current: {
      submit: async () => {
        const l = t.safeParse(n);
        if (!l.success)
          throw new Error(l.error.issues.map((d) => d.message).join(", "));
        await r?.(l.data);
      },
      reset: () => {
        n = { ...s }, a.clear();
      },
      isDirty: () => JSON.stringify(n) !== JSON.stringify(s),
      getValues: () => ({ ...n }),
      setValue: (l, d, u) => {
        n = { ...n, [l]: d }, a.add(l);
      },
      setValues: (l, d) => {
        n = { ...n, ...l };
        for (const u of Object.keys(l))
          a.add(u);
      },
      trigger: async (l) => {
        if (l) {
          const u = Jt(t).shape?.[l];
          return u ? u.safeParse(n[l]).success : !0;
        }
        return t.safeParse(n).success;
      },
      getErrors: () => {
        const l = t.safeParse(n);
        if (l.success) return {};
        const d = {};
        for (const u of l.error.issues) {
          const h = u.path.join(".");
          h && !d[h] && (d[h] = u.message);
        }
        return d;
      },
      getFieldNames: () => {
        const l = Jt(t);
        return Object.keys(l.shape ?? {});
      },
      actionBar: {
        wiggle: () => {
        }
      },
      _setStateCallback: () => {
      }
    }
  }, dirtyFields: a };
}
function Cr(t) {
  const r = Jt(t).shape;
  if (!r) return {};
  const n = {};
  for (const [s, a] of Object.entries(r)) {
    const i = B1(a), c = a.description;
    (i?.label || c) && (n[s] = {
      label: i?.label ?? s,
      ...i?.section && { section: i.section },
      ...i?.placeholder && { placeholder: i.placeholder },
      ...i?.helpText && { helpText: i.helpText },
      ...c && { description: c },
      ...i?.customFieldName && {
        customFieldName: i.customFieldName
      },
      ...jn(a, i ?? { label: s }) !== "text" && {
        fieldType: jn(a, i ?? { label: s })
      }
    });
  }
  return n;
}
function wr(t) {
  if (!t) return {};
  const e = {};
  for (const [r, n] of Object.entries(t))
    e[r] = {
      title: n.title,
      ...n.description && { description: n.description }
    };
  return e;
}
const K1 = Ht(null);
function o8({
  children: t,
  availableFormDefinitions: e
}) {
  const r = le(
    () => e?.map(Y1),
    [e]
  ), n = j(/* @__PURE__ */ new Map()), s = j(""), a = j(/* @__PURE__ */ new Map()), i = j(/* @__PURE__ */ new Set()), c = j(/* @__PURE__ */ new Map()), l = j(/* @__PURE__ */ new Map()), [d, u] = U([]), [h, g] = U(
    []
  ), [p, m] = U(
    null
  ), C = j(null), w = j({}), b = Q(() => {
    queueMicrotask(() => {
      const S = Array.from(n.current.entries()), W = [], O = [];
      let Y = null;
      for (const [me, D] of S) {
        const re = D.ref.current;
        if (re && (D.virtual ? O.push({
          formName: me,
          ...D.description ? { description: D.description } : {},
          ...D.module ? { module: D.module } : {},
          cardTitle: "",
          cardDescription: "",
          formSchema: ut(D.schema),
          fieldDescriptions: Cr(D.schema),
          sectionDescriptions: wr(D.sections),
          formValues: re.getValues(),
          formErrors: re.getErrors(),
          isDirty: re.isDirty(),
          ...D.defaultValuesParamsSchema ? {
            defaultValuesParamsSchema: ut(
              D.defaultValuesParamsSchema
            )
          } : {},
          ...D.defaultValuesParams ? { defaultValuesParams: D.defaultValuesParams } : {}
        }) : W.push({
          formName: me,
          ...D.description ? { description: D.description } : {},
          ...D.module ? { module: D.module } : {},
          cardTitle: "",
          cardDescription: "",
          formSchema: ut(D.schema),
          fieldDescriptions: Cr(D.schema),
          sectionDescriptions: wr(D.sections),
          formValues: re.getValues(),
          formErrors: re.getErrors(),
          isDirty: re.isDirty(),
          ...D.defaultValuesParamsSchema ? {
            defaultValuesParamsSchema: ut(
              D.defaultValuesParamsSchema
            )
          } : {},
          ...D.defaultValuesParams ? { defaultValuesParams: D.defaultValuesParams } : {}
        }), C.current === me)) {
          const de = w.current;
          Y = {
            formName: me,
            ...D.description ? { description: D.description } : {},
            ...D.module ? { module: D.module } : {},
            cardTitle: de.cardTitle ?? "",
            cardDescription: de.cardDescription ?? "",
            formSchema: ut(D.schema),
            fieldDescriptions: Cr(D.schema),
            sectionDescriptions: wr(D.sections),
            formValues: re.getValues(),
            formErrors: re.getErrors(),
            isDirty: re.isDirty(),
            ...D.defaultValuesParamsSchema ? {
              defaultValuesParamsSchema: ut(
                D.defaultValuesParamsSchema
              )
            } : {},
            ...D.defaultValuesParams ? { defaultValuesParams: D.defaultValuesParams } : {}
          };
        }
      }
      const Ce = JSON.stringify({
        formsOnCurrentPage: W,
        availableForms: O,
        activeForm: Y
      });
      Ce !== s.current && (s.current = Ce, u(W), g(O), m(Y));
    });
  }, []), P = Q(
    (S, W, O, Y, Ce, me, D, re) => {
      const de = n.current.get(S);
      n.current.set(S, {
        ref: W,
        schema: O,
        description: D,
        module: re,
        sections: Y,
        defaultValuesParamsSchema: Ce ?? de?.defaultValuesParamsSchema,
        defaultValuesFn: me ?? de?.defaultValuesFn,
        defaultValuesParams: de?.defaultValuesParams,
        onSubmit: de?.onSubmit,
        steps: de?.steps,
        submitConfig: de?.submitConfig,
        errorTriggerMode: de?.errorTriggerMode
      }), b();
    },
    [b]
  ), A = Q(
    (S) => {
      const W = n.current.get(S);
      if (W?.virtual) return;
      const O = W?.ref.current?.getValues() ?? {};
      n.current.delete(S);
      const Y = r?.find((Ce) => Ce.name === S);
      if (Y) {
        const me = { ...typeof Y.defaultValues == "function" ? {} : Un(Y.defaultValues), ...O }, { ref: D, dirtyFields: re } = zn(
          Y.schema,
          me,
          Y.onSubmit
        ), de = typeof Y.defaultValues == "function" ? (() => {
          const be = Y.defaultValues;
          return async (V) => {
            const I = be(V);
            return typeof I?.then == "function" ? await I : I;
          };
        })() : void 0;
        n.current.set(S, {
          ref: D,
          schema: Y.schema,
          description: Y.description,
          module: Y.module,
          sections: Y.sections,
          virtual: !0,
          defaultValuesParamsSchema: Y.defaultValuesParamsSchema,
          defaultValuesFn: de,
          defaultValuesParams: W?.defaultValuesParams,
          dirtyFields: re,
          onSubmit: Y.onSubmit,
          steps: Y.steps,
          submitConfig: Y.submitConfig,
          errorTriggerMode: Y.errorTriggerMode
        });
      }
      b();
    },
    [b, r]
  ), N = Q((S) => n.current.get(S), []), x = Q(() => Array.from(n.current.keys()), []), k = Q(
    (S, W) => {
      const O = n.current.get(S);
      if (!O) {
        const Y = Array.from(n.current.keys());
        return {
          success: !1,
          error: `Form "${S}" not found. Available forms: ${Y.join(", ")}`
        };
      }
      return O.virtual ? (C.current = S, w.current = {
        cardTitle: W?.cardTitle ?? "",
        cardDescription: W?.cardDescription ?? ""
      }, b(), { success: !0 }) : {
        success: !1,
        error: `Form "${S}" is a rendered form on the current page. You can co-edit it directly without picking it as active.`
      };
    },
    [b]
  ), y = Q(() => {
    C.current = null, w.current = { cardTitle: "", cardDescription: "" }, b();
  }, [b]), M = Q(
    (S, W) => {
      const O = n.current.get(S);
      O && (O.defaultValuesParams = W);
    },
    []
  ), _ = Q((S) => {
    const W = a.current.get(S) ?? 0;
    a.current.set(S, W + 1);
  }, []), L = Q((S) => {
    a.current.delete(S), i.current.delete(S), c.current.delete(S), l.current.delete(S);
  }, []), E = Q((S) => a.current.get(S) ?? 0, []), T = Q((S) => !i.current.has(S), []), B = Q((S) => {
    i.current.add(S);
  }, []), X = Q(
    (S, W) => {
      i.current.delete(S), c.current.set(S, W ?? null);
      const O = l.current.get(S);
      if (O?.length) {
        l.current.delete(S);
        for (const Y of O)
          Y();
      }
      b();
    },
    [b]
  ), J = Q(
    (S, W) => {
      const O = l.current.get(S) ?? [];
      O.push(W), l.current.set(S, O);
    },
    []
  ), te = Q(
    (S, W) => c.current.has(S) ? W === void 0 ? !0 : c.current.get(S) === W : !1,
    []
  ), oe = j(/* @__PURE__ */ new Set());
  ie(() => {
    const S = r ?? [], W = /* @__PURE__ */ new Set();
    for (const O of S) {
      W.add(O.name);
      const Y = n.current.get(O.name);
      if (Y && !Y.virtual || Y?.virtual) continue;
      const Ce = typeof O.defaultValues == "function" ? {} : Un(O.defaultValues), { ref: me, dirtyFields: D } = zn(
        O.schema,
        Ce,
        O.onSubmit
      ), re = typeof O.defaultValues == "function" ? (() => {
        const de = O.defaultValues;
        return async (be) => {
          const V = de(be);
          return typeof V?.then == "function" ? await V : V;
        };
      })() : void 0;
      n.current.set(O.name, {
        ref: me,
        schema: O.schema,
        description: O.description,
        module: O.module,
        sections: O.sections,
        virtual: !0,
        defaultValuesParamsSchema: O.defaultValuesParamsSchema,
        defaultValuesFn: re,
        dirtyFields: D,
        onSubmit: O.onSubmit,
        steps: O.steps,
        submitConfig: O.submitConfig,
        errorTriggerMode: O.errorTriggerMode
      });
    }
    for (const O of oe.current)
      W.has(O) || n.current.get(O)?.virtual && n.current.delete(O);
    return oe.current = W, b(), () => {
      for (const O of W)
        n.current.get(O)?.virtual && n.current.delete(O);
      b();
    };
  }, [r, b]);
  const ee = le(
    () => ({
      register: P,
      unregister: A,
      get: N,
      getFormNames: x,
      rebuildDescriptions: b,
      formsOnCurrentPage: d,
      availableForms: h,
      activeForm: p,
      setActiveForm: k,
      clearActiveForm: y,
      updateActiveFormDefaultValuesParams: M,
      incrementFillVersion: _,
      resetFillVersion: L,
      getFillVersion: E,
      isDefaultValuesResolved: T,
      markDefaultValuesResolving: B,
      markDefaultValuesResolved: X,
      queueFillAction: J,
      hasDefaultValuesEverResolved: te
    }),
    [
      P,
      A,
      N,
      x,
      b,
      d,
      h,
      p,
      k,
      y,
      M,
      _,
      L,
      E,
      T,
      B,
      X,
      J,
      te
    ]
  );
  return /* @__PURE__ */ o(K1.Provider, { value: ee, children: t });
}
function x6() {
  return kt(K1);
}
const k6 = 2, Wn = 2, y6 = 70, Gn = 0.08, b6 = 6, L6 = 0.6, M6 = () => {
  if (typeof window > "u") return;
  const t = window;
  return t.AudioContext ?? t.webkitAudioContext;
}, E6 = ({
  stream: t,
  className: e
}) => {
  const r = j(null), [n, s] = U(0), [a, i] = U([]);
  return ie(() => {
    const c = r.current;
    if (!c) return;
    const l = () => {
      const u = c.clientWidth;
      s(
        Math.max(1, Math.floor((u + Wn) / (k6 + Wn)))
      );
    };
    if (l(), typeof ResizeObserver > "u") return;
    const d = new ResizeObserver(l);
    return d.observe(c), () => d.disconnect();
  }, []), ie(() => {
    const c = M6();
    if (!t || !c || n === 0) {
      i([]);
      return;
    }
    const l = new c(), d = l.createMediaStreamSource(t), u = l.createAnalyser();
    u.fftSize = 1024, d.connect(u);
    const h = new Uint8Array(u.fftSize), g = setInterval(() => {
      u.getByteTimeDomainData(h);
      let p = 0;
      for (let w = 0; w < h.length; w++) {
        const b = (h[w] - 128) / 128;
        p += b * b;
      }
      const m = Math.sqrt(p / h.length), C = Math.min(1, Math.pow(m * b6, L6));
      i((w) => {
        const b = w.length >= n ? w.slice(w.length - n + 1) : w.slice();
        return b.push(C), b;
      });
    }, y6);
    return () => {
      clearInterval(g), d.disconnect(), u.disconnect(), l.close(), i([]);
    };
  }, [t, n]), /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      className: R(
        "flex h-6 items-center justify-end overflow-hidden gap-0.5",
        e
      ),
      "aria-hidden": "true",
      children: a.map((c, l) => /* @__PURE__ */ o(
        "span",
        {
          className: "shrink-0 rounded-full bg-f1-foreground-secondary w-0.5",
          style: { height: `${(Gn + c * (1 - Gn)) * 100}%` }
        },
        l
      ))
    }
  );
}, _6 = ({
  onUploadFiles: t,
  isAtMaxFiles: e,
  maxFiles: r,
  acceptValue: n,
  fileInputRef: s,
  handleFileSelect: a,
  inProgress: i,
  hasDataToSend: c,
  isPreSending: l,
  canRecord: d,
  recordingStatus: u = "idle",
  recordingStream: h,
  onStartRecording: g,
  onStopRecording: p,
  onCancelRecording: m
}) => {
  const C = he();
  return u === "recording" ? /* @__PURE__ */ f("div", { className: "flex shrink-0 items-center gap-3 p-3", children: [
    /* @__PURE__ */ o(
      E6,
      {
        stream: h ?? null,
        className: "min-w-0 flex-1"
      }
    ),
    /* @__PURE__ */ f("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ o(
        Me,
        {
          label: C.ai.cancelRecording,
          hideLabel: !0,
          type: "button",
          icon: ze,
          variant: "outline",
          size: "md",
          onClick: m
        }
      ),
      /* @__PURE__ */ o(
        Me,
        {
          label: C.ai.stopRecording,
          hideLabel: !0,
          type: "button",
          icon: Ur,
          variant: "default",
          size: "md",
          onClick: p
        }
      )
    ] })
  ] }) : /* @__PURE__ */ f("div", { className: "flex shrink-0 items-center justify-between p-3", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: t && /* @__PURE__ */ f($e, { children: [
      /* @__PURE__ */ o(
        Me,
        {
          label: C.ai.attachFile,
          hideLabel: !0,
          type: "button",
          icon: Bo,
          variant: "outline",
          size: "md",
          disabled: e || u === "transcribing",
          onClick: (w) => {
            w.preventDefault(), s.current?.click();
          }
        }
      ),
      /* @__PURE__ */ o(
        "input",
        {
          ref: s,
          type: "file",
          multiple: r !== 1,
          disabled: e,
          accept: n,
          className: "hidden",
          onChange: a
        }
      )
    ] }) }),
    /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
      d && /* @__PURE__ */ o(
        Me,
        {
          label: C.ai.recordAudio,
          hideLabel: !0,
          type: "button",
          icon: f1,
          variant: "ghost",
          size: "md",
          disabled: i,
          onClick: g,
          loading: u === "transcribing"
        }
      ),
      u !== "transcribing" && i ? /* @__PURE__ */ o(
        Me,
        {
          type: "submit",
          variant: "neutral",
          label: C.ai.stopAnswerGeneration,
          icon: zo,
          hideLabel: !0
        }
      ) : /* @__PURE__ */ o(
        Me,
        {
          type: "submit",
          disabled: !c || l,
          variant: "default",
          label: C.ai.sendMessage,
          icon: Br,
          hideLabel: !0
        }
      )
    ] })
  ] });
}, S6 = ({
  attachedFiles: t,
  isUploading: e,
  onRemove: r,
  removeLabel: n
}) => t.length === 0 ? null : /* @__PURE__ */ o(
  "div",
  {
    "aria-live": "polite",
    "aria-busy": e,
    className: "flex flex-wrap gap-1 px-1 pt-1",
    children: t.map(
      (s) => s.status === "uploading" ? /* @__PURE__ */ o(Se, { className: "h-9 w-36 rounded-[10px]" }, s.id) : s.status === "error" ? /* @__PURE__ */ o(
        R6,
        {
          att: s,
          onRemove: r,
          removeLabel: n
        },
        s.id
      ) : /* @__PURE__ */ o(
        Ko,
        {
          file: s.file,
          size: "md",
          actions: [
            {
              label: n,
              icon: ze,
              onClick: () => r(s.id)
            }
          ]
        },
        s.id
      )
    )
  }
);
function R6({
  att: t,
  onRemove: e,
  removeLabel: r
}) {
  const n = /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5 rounded-lg border border-f1-border-critical bg-f1-background-critical/10 px-2.5 py-1.5", children: [
    /* @__PURE__ */ o(ye, { icon: Vo, size: "md", color: "critical" }),
    /* @__PURE__ */ o("span", { className: "max-w-40 truncate text-sm font-medium text-f1-foreground-critical", children: t.file.name }),
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        "aria-label": r,
        className: Te(
          "rounded-full text-f1-foreground-critical hover:text-f1-foreground-critical/80"
        ),
        onClick: () => e(t.id),
        children: /* @__PURE__ */ o(ye, { icon: ze, size: "md", "aria-hidden": "true" })
      }
    )
  ] });
  return t.errorMessage ? /* @__PURE__ */ o(ec, { label: t.errorMessage, children: n }) : n;
}
const N6 = {
  soft: {
    text: "",
    bg: "bg-f1-background-info",
    fontColor: "text-f1-foreground-info",
    formBorder: "[&_form]:border-f1-border-info"
  }
}, T6 = ({
  creditWarning: t,
  children: e
}) => {
  const r = he();
  if (!t) return e;
  const n = {
    ...N6[t.level],
    text: r.ai.creditWarning.soft
  };
  return /* @__PURE__ */ f(
    "div",
    {
      className: R("flex flex-col rounded-xl", n.bg, n.formBorder),
      children: [
        /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 px-4 pb-1.5 pt-2", children: [
          /* @__PURE__ */ o(
            "p",
            {
              className: R("min-w-0 flex-1 text-sm font-medium", n.fontColor),
              children: n.text
            }
          ),
          /* @__PURE__ */ f("div", { className: "flex shrink-0 items-center gap-1", children: [
            t.onGetCredits && /* @__PURE__ */ o(
              Ee,
              {
                label: r.ai.creditWarning.getCredits ?? "",
                size: "sm",
                variant: "outline",
                tooltip: r.ai.creditWarning.getCredits ?? "",
                onClick: t.onGetCredits
              }
            ),
            t.onDismiss && /* @__PURE__ */ o(
              Ee,
              {
                label: r.ai.creditWarning.dismiss ?? "",
                size: "sm",
                variant: "ghost",
                icon: ze,
                hideLabel: !0,
                onClick: t.onDismiss
              }
            )
          ] })
        ] }),
        e
      ]
    }
  );
};
function A6({
  isOpen: t,
  results: e,
  isLoading: r,
  selectedIndex: n,
  position: s,
  onSelect: a
}) {
  const i = j(null), c = j(null);
  ie(() => {
    c.current?.scrollIntoView({ block: "nearest" });
  }, [n]), Ro(() => {
    const u = i.current, h = u?.offsetParent;
    if (!u || !h) return;
    const g = u.offsetLeft + u.offsetWidth - h.clientWidth;
    g > 0 && (u.style.left = `${Math.max(0, u.offsetLeft - g)}px`);
  }, [s]);
  const l = r && e.length === 0, d = !r && e.length === 0;
  return !t || d ? null : /* @__PURE__ */ o(
    "div",
    {
      ref: i,
      role: "listbox",
      style: {
        position: "absolute",
        bottom: s ? `${s.bottom}px` : "100%",
        left: s ? `${s.left}px` : 0
      },
      className: R(
        "z-50",
        "w-64 max-h-60 overflow-y-auto",
        "rounded-lg border border-solid border-f1-border-secondary",
        "bg-f1-background shadow-md",
        "p-1"
      ),
      children: l ? Array.from({ length: 3 }, (u, h) => /* @__PURE__ */ f(
        "div",
        {
          className: "flex items-center gap-2 p-2",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ o(Se, { className: "size-5 shrink-0 rounded-full" }),
            /* @__PURE__ */ o(
              Se,
              {
                className: R("h-4 rounded", h === 1 ? "w-24" : "w-32")
              }
            )
          ]
        },
        h
      )) : e.map((u, h) => {
        const g = h === n, p = `${u.firstName} ${u.lastName}`.trim();
        return /* @__PURE__ */ f(
          "div",
          {
            ref: g ? c : void 0,
            role: "option",
            "aria-selected": g,
            className: R(
              "flex cursor-pointer items-center gap-2 p-2 rounded",
              "transition-colors",
              g ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary-hover"
            ),
            onMouseDown: (m) => {
              m.preventDefault(), a(u);
            },
            onMouseEnter: () => {
            },
            children: [
              /* @__PURE__ */ o(
                tc,
                {
                  firstName: u.firstName,
                  lastName: u.lastName,
                  src: u.avatarUrl,
                  size: "xsmall"
                }
              ),
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o(Le, { className: "text-base font-medium text-f1-foreground", children: p }) })
            ]
          },
          String(u.id)
        );
      })
    }
  );
}
const V6 = ({
  quote: t,
  onRemove: e
}) => {
  const r = he();
  return /* @__PURE__ */ o("div", { className: "p-1", children: /* @__PURE__ */ f(
    "div",
    {
      className: R(
        "flex items-start gap-2 justify-center",
        "rounded-[10px] bg-f1-background-hover pl-2 py-1.5 pr-1.5"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ o(ye, { icon: nn, size: "md", color: "default" }) }),
        /* @__PURE__ */ o(
          Le,
          {
            className: "h-full flex-1 py-0.5 text-[12px] font-medium text-f1-foreground-secondary",
            lines: 1,
            children: t.text
          }
        ),
        /* @__PURE__ */ o(
          Me,
          {
            variant: "ghost",
            label: r.ai.removeQuote,
            onClick: e,
            icon: ze,
            hideLabel: !0,
            size: "sm"
          }
        )
      ]
    }
  ) });
}, F6 = ({
  placeholders: t,
  defaultPlaceholder: e,
  inputValue: r,
  inProgress: n
}) => {
  const s = Ge(), [a, i] = U(""), [c, l] = U(0), [d, u] = U(!1), h = j(null), g = j(null), p = j(null), m = t[c] ?? e;
  return ie(() => {
    const C = () => {
      g.current && (clearInterval(g.current), g.current = null), p.current && (clearInterval(p.current), p.current = null), h.current && (clearTimeout(h.current), h.current = null);
    };
    if (r.length > 0 || n) {
      u(!1), i(""), C();
      return;
    }
    if (s)
      return u(!1), i(m), C(), h.current = setTimeout(() => {
        const x = (c + 1) % Math.max(t.length, 1);
        l(x);
      }, 4e3), () => {
        C();
      };
    u(!0), i("");
    let w = 0;
    const b = 50, P = 30, A = 2e3, N = 1e3;
    return g.current = setInterval(() => {
      w < m.length ? (i(m.slice(0, w + 1)), w++) : (g.current && (clearInterval(g.current), g.current = null), h.current = setTimeout(() => {
        p.current = setInterval(() => {
          w > 0 ? (w--, i(m.slice(0, w))) : (p.current && (clearInterval(p.current), p.current = null), h.current = setTimeout(() => {
            const x = (c + 1) % Math.max(t.length, 1);
            l(x);
          }, N));
        }, P);
      }, A));
    }, b), () => {
      C();
    };
  }, [
    r,
    n,
    m,
    c,
    t.length,
    s
  ]), r.length > 0 || n ? null : /* @__PURE__ */ o(Ze, { children: /* @__PURE__ */ o(
    ge.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: s ? 0 : 0.4 },
      className: R(
        "col-start-1 row-start-1",
        "pointer-events-none",
        "text-f1-foreground-secondary",
        "text-[16px] sm:text-[14px] leading-[20px] font-normal",
        "pt-3 px-3"
      ),
      children: /* @__PURE__ */ f(
        "div",
        {
          className: R(
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "whitespace-pre-wrap break-words overflow-visible"
          ),
          children: [
            a,
            d && !s && /* @__PURE__ */ o("span", { className: "f0-chat-cursor-blink", children: "|" })
          ]
        }
      )
    }
  ) });
}, P6 = ({
  textareaRef: t,
  highlightRef: e,
  inputValue: r,
  onInputChange: n,
  onKeyDown: s,
  onCursorUpdate: a,
  onScroll: i,
  highlightSegments: c,
  hasOverlay: l,
  multiplePlaceholders: d,
  placeholders: u,
  resolvedDefaultPlaceholder: h,
  inProgress: g
}) => /* @__PURE__ */ f(
  "div",
  {
    className: R("grid flex-1 grid-cols-1 grid-rows-1", "min-h-[20px] py-0"),
    children: [
      /* @__PURE__ */ o(
        "div",
        {
          "aria-hidden": !0,
          className: R(
            "col-start-1 row-start-1",
            "pointer-events-none invisible",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3"
          ),
          children: r.endsWith(`
`) ? r + "_" : r
        }
      ),
      l && /* @__PURE__ */ o(
        "div",
        {
          ref: e,
          "aria-hidden": !0,
          className: R(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ),
          children: c.map(
            (p, m) => p.type === "mention" ? /* @__PURE__ */ o(
              "span",
              {
                className: "font-medium text-f1-foreground-secondary",
                children: p.text
              },
              m
            ) : p.type === "ghost" ? /* @__PURE__ */ o("span", { className: "text-f1-foreground-secondary opacity-50", children: p.text }, m) : /* @__PURE__ */ o("span", { children: p.text }, m)
          )
        }
      ),
      !r && !d && /* @__PURE__ */ o(
        "p",
        {
          className: R(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "text-f1-foreground-secondary",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "pt-3 px-3",
            "overflow-hidden text-ellipsis whitespace-nowrap"
          ),
          children: u.length === 1 ? u[0] : h
        }
      ),
      /* @__PURE__ */ o(
        "textarea",
        {
          autoFocus: !1,
          name: "one-ai-input",
          rows: 1,
          ref: t,
          value: r,
          onChange: (p) => {
            n(p.target.value, p.target.selectionStart ?? 0);
          },
          onKeyDown: s,
          onKeyUp: a,
          onClick: a,
          onSelect: a,
          onScroll: i,
          className: R(
            "col-start-1 row-start-1",
            "min-h-[20px] max-h-[240px] h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "mt-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "outline-none",
            l ? "text-transparent caret-f1-foreground" : "text-f1-foreground",
            !l && (r || !d ? "caret-f1-foreground" : "caret-transparent")
          )
        }
      ),
      d && /* @__PURE__ */ o(
        F6,
        {
          placeholders: u,
          defaultPlaceholder: h,
          inputValue: r,
          inProgress: g ?? !1
        }
      )
    ]
  }
), $6 = 5;
function I6(t, e = $6) {
  return t.length <= e ? t : [...t].sort(() => 0.5 - Math.random()).slice(0, e);
}
const H6 = ({
  suggestions: t,
  onItemClick: e,
  onItemHover: r
}) => {
  const [n, s] = U(null), a = n !== null ? t[n] : null;
  return t.length === 0 ? null : /* @__PURE__ */ f(
    Kr,
    {
      open: a !== null,
      onOpenChange: (i) => {
        i || (s(null), r?.(null));
      },
      children: [
        /* @__PURE__ */ o(rc, { asChild: !0, children: /* @__PURE__ */ o("div", { className: "flex w-full flex-wrap items-center gap-2", children: t.map((i, c) => /* @__PURE__ */ o(Qr, { asChild: !0, children: /* @__PURE__ */ o(
          Me,
          {
            variant: "outline",
            label: i.label,
            icon: i.icon,
            pressed: n === c,
            onClick: () => {
              s((l) => l === c ? null : c), r?.(null);
            }
          }
        ) }, `${i.label}-${c}`)) }) }),
        a && /* @__PURE__ */ f(
          Jr,
          {
            side: "top",
            align: "start",
            sideOffset: 8,
            onOpenAutoFocus: (i) => i.preventDefault(),
            className: R(
              "flex flex-col gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2",
              "w-[var(--radix-popover-trigger-width)]"
            ),
            children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5 p-2 pb-1 text-sm font-medium text-f1-foreground-secondary", children: [
                /* @__PURE__ */ o(ye, { icon: a.icon, size: "sm" }),
                /* @__PURE__ */ o("span", { children: a.label })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-col", children: I6(a.items).map((i, c) => /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    e(i, a), s(null), r?.(null);
                  },
                  onMouseEnter: () => r?.(i),
                  onMouseLeave: () => r?.(null),
                  onFocus: () => r?.(i),
                  onBlur: () => r?.(null),
                  className: R(
                    "group flex items-center justify-between gap-2 rounded-sm px-2 py-2 text-left text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-hover focus-visible:bg-f1-background-hover",
                    Te()
                  ),
                  children: [
                    /* @__PURE__ */ o("span", { className: "min-w-0 flex-1 truncate", children: i.title }),
                    /* @__PURE__ */ o(
                      "span",
                      {
                        "aria-hidden": !0,
                        className: "flex flex-shrink-0 items-center text-f1-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                        children: /* @__PURE__ */ o(ye, { icon: Br, size: "sm" })
                      }
                    )
                  ]
                },
                c
              )) })
            ]
          }
        )
      ]
    }
  );
};
function qn(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function O6(t, e, r) {
  const n = r?.cursorPosition ?? t.length, s = r?.inlineCompletion ?? null, a = [];
  for (const u of e) {
    const h = `@${u.name}`;
    let g = 0;
    for (; ; ) {
      const p = t.indexOf(h, g);
      if (p === -1) break;
      a.push({ start: p, end: p + h.length }), g = p + h.length;
    }
  }
  a.sort((u, h) => u.start - h.start);
  const i = [];
  let c = 0, l = !1;
  const d = (u) => {
    if (!s || l || n < c || n > u) {
      u > c && i.push({ type: "text", text: t.slice(c, u) }), c = u;
      return;
    }
    n > c && i.push({ type: "text", text: t.slice(c, n) }), i.push({ type: "ghost", text: s }), l = !0, n < u && i.push({ type: "text", text: t.slice(n, u) }), c = u;
  };
  for (const u of a)
    d(u.start), i.push({ type: "mention", text: t.slice(u.start, u.end) }), c = u.end;
  return d(t.length), !l && s && n >= c && i.push({ type: "ghost", text: s }), i.length === 0 ? [{ type: "text", text: t }] : i;
}
const j6 = 250, D6 = 12e4, Z6 = () => typeof navigator < "u" && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder < "u";
function B6({
  onTranscribe: t,
  onPartial: e,
  onFinal: r,
  onError: n,
  maxDurationMs: s = D6
}) {
  const [a, i] = U("idle"), [c, l] = U(0), [d] = U(Z6), [u, h] = U(null), g = j(null), p = j(null), m = j([]), C = j(null), w = j(!1), b = j(null), P = j(null), A = j(0), N = j({ onTranscribe: t, onPartial: e, onFinal: r, onError: n });
  N.current = { onTranscribe: t, onPartial: e, onFinal: r, onError: n };
  const x = Q(() => {
    p.current?.getTracks().forEach((L) => L.stop()), p.current = null, g.current = null, h(null), b.current && (clearInterval(b.current), b.current = null), P.current && (clearTimeout(P.current), P.current = null);
  }, []), k = Q(async () => {
    const { onTranscribe: L, onPartial: E, onFinal: T, onError: B } = N.current, X = m.current;
    if (m.current = [], X.length === 0 || !L) {
      i("idle"), l(0);
      return;
    }
    const J = new Blob(X, { type: X[0]?.type || "audio/webm" }), te = new AbortController();
    C.current = te, i("transcribing");
    try {
      const oe = await L(J, {
        onPartial: E,
        signal: te.signal
      });
      te.signal.aborted || T(oe);
    } catch {
      te.signal.aborted || B("transcription-failed");
    } finally {
      C.current = null, i("idle"), l(0);
    }
  }, []), y = Q(() => {
    const L = g.current;
    L && L.state !== "inactive" && L.stop();
  }, []), M = Q(async () => {
    if (a !== "idle" || !t || !d) return;
    w.current = !1, m.current = [];
    let L;
    try {
      L = await navigator.mediaDevices.getUserMedia({ audio: !0 });
    } catch (T) {
      n(
        T instanceof DOMException && T.name === "NotAllowedError" ? "permission-denied" : "device-error"
      );
      return;
    }
    p.current = L, h(L);
    const E = new MediaRecorder(L);
    g.current = E, E.ondataavailable = (T) => {
      T.data.size > 0 && m.current.push(T.data);
    }, E.onstop = () => {
      if (x(), w.current) {
        m.current = [], i("idle"), l(0);
        return;
      }
      k();
    }, E.start(j6), A.current = Date.now(), i("recording"), l(0), b.current = setInterval(() => {
      l(Date.now() - A.current);
    }, 200), P.current = setTimeout(y, s);
  }, [
    a,
    t,
    d,
    n,
    x,
    k,
    y,
    s
  ]), _ = Q(() => {
    a === "recording" ? (w.current = !0, y()) : a === "transcribing" && (C.current?.abort(), C.current = null, i("idle"), l(0));
  }, [a, y]);
  return ie(
    () => () => {
      w.current = !0, C.current?.abort();
      const L = g.current;
      L && L.state !== "inactive" && L.stop(), x();
    },
    [x]
  ), { status: a, durationMs: c, isSupported: d, stream: u, start: M, stop: y, cancel: _ };
}
function U6(t, e) {
  if (e === "*/*") return !0;
  if (e.endsWith("/*")) {
    const r = e.slice(0, e.indexOf("/"));
    return t.startsWith(r + "/");
  }
  return t === e;
}
function z6(t, e) {
  if (!e) return t;
  const r = Array.isArray(e) ? e : [e];
  return r.length === 0 ? t : t.filter(
    (n) => r.some((s) => U6(n.type, s))
  );
}
const W6 = 4e3;
function G6(t) {
  const [e, r] = U([]), [n, s] = U(null), a = j(
    null
  ), i = j(null), c = he(), l = t?.onUploadFiles, d = t?.allowedMimeTypes, u = t?.maxFiles, h = le(() => {
    if (d)
      return Array.isArray(d) ? d.join(",") : d;
  }, [d]), g = u !== void 0 && e.length >= u, p = j(0);
  ie(() => {
    p.current = e.length;
  }, [e]);
  const m = Q((A) => {
    a.current && clearTimeout(a.current), s(A), a.current = setTimeout(() => {
      s(null), a.current = null;
    }, W6);
  }, []);
  ie(
    () => () => {
      a.current && clearTimeout(a.current);
    },
    []
  );
  const C = Q(
    async (A) => {
      if (A.length === 0 || !l) return;
      const N = z6(A, d);
      if (N.length === 0) return;
      if (u !== void 0 && p.current + N.length > u) {
        m(
          c.ai.tooManyFilesError.replace(
            "{{maxFiles}}",
            String(u)
          )
        );
        return;
      }
      const x = N.map((M) => ({
        id: crypto.randomUUID(),
        file: M,
        status: "uploading"
      })), k = x.map((M) => M.id);
      r((M) => [...M, ...x]);
      const y = (M) => r(
        (_) => _.map(
          (L) => k.includes(L.id) ? { ...L, status: "error", errorMessage: M } : L
        )
      );
      try {
        const M = await l(N);
        if (!Array.isArray(M) || M.length !== N.length) {
          y(c.ai.fileUploadError);
          return;
        }
        r(
          (_) => _.map((L) => {
            const E = x.findIndex((T) => T.id === L.id);
            return E === -1 ? L : M[E] ? {
              ...L,
              status: "uploaded",
              uploadedFile: M[E]
            } : {
              ...L,
              status: "error",
              errorMessage: c.ai.fileUploadError
            };
          })
        );
      } catch (M) {
        const _ = M instanceof Error && M.message ? M.message : c.ai.fileUploadError;
        y(_);
      }
    },
    [
      l,
      u,
      d,
      c.ai.tooManyFilesError,
      c.ai.fileUploadError,
      m
    ]
  ), w = Q(
    async (A) => {
      await C(Array.from(A.target.files ?? [])), A.target.value = "";
    },
    [C]
  ), b = Q((A) => {
    r((N) => N.filter((x) => x.id !== A));
  }, []), P = Q(() => {
    r([]);
  }, []);
  return {
    attachedFiles: e,
    fileInputRef: i,
    onUploadFiles: l,
    acceptValue: h,
    isAtMaxFiles: g,
    maxFiles: u,
    processFiles: C,
    handleFileSelect: w,
    handleRemoveFile: b,
    clearFiles: P,
    transientError: n,
    showTransientError: m
  };
}
function q6(t, e, r) {
  const s = t.slice(0, e).lastIndexOf("@");
  if (s === -1) return null;
  if (s > 0) {
    const i = t[s - 1];
    if (i !== " " && i !== `
` && i !== "	")
      return null;
  }
  const a = t.slice(s + 1, e);
  if (a.includes(`
`)) return null;
  for (const i of r) {
    const c = t.slice(s + 1), l = s + 1 + i.name.length;
    if (c.startsWith(i.name) && e >= l) {
      const d = t[l];
      if (d === " " || d === `
` || d === "	")
        return null;
    }
  }
  return { atIndex: s, query: a };
}
const X6 = [
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
function Y6(t, e) {
  const r = document.createElement("div"), n = r.style, s = window.getComputedStyle(t);
  n.whiteSpace = "pre-wrap", n.wordWrap = "break-word", n.position = "absolute", n.visibility = "hidden", n.overflow = "hidden";
  for (const l of X6)
    n.setProperty(l, s.getPropertyValue(l));
  r.textContent = t.value.substring(0, e);
  const a = document.createElement("span");
  a.textContent = t.value.substring(e) || "​", r.appendChild(a), document.body.appendChild(r);
  const i = a.offsetLeft, c = a.offsetTop - t.scrollTop;
  return document.body.removeChild(r), { left: i, top: c };
}
const K6 = 250;
function Q6({
  inputValue: t,
  setInputValue: e,
  cursorPosition: r,
  searchPersons: n,
  textareaRef: s
}) {
  const [a, i] = U(!1), [c, l] = U(""), [d, u] = U([]), [h, g] = U(!1), [p, m] = U(0), [C, w] = U([]), b = j(-1), P = j(null), A = j(0), N = j(-1);
  ie(() => {
    if (!n) {
      i(!1);
      return;
    }
    const E = q6(t, r, C);
    if (!E) {
      i(!1), l(""), u([]), m(0), b.current = -1, N.current = -1;
      return;
    }
    if (E.atIndex === N.current)
      return;
    b.current = E.atIndex, l(E.query), i(!0), m(0), g(!0), P.current && clearTimeout(P.current);
    const T = ++A.current;
    return P.current = setTimeout(() => {
      n(E.query).then((B) => {
        T === A.current && (u(B), m(0), B.length === 0 && E.query.length > 0 && (N.current = E.atIndex, i(!1)));
      }).catch(() => {
        T === A.current && u([]);
      }).finally(() => {
        T === A.current && g(!1);
      });
    }, K6), () => {
      P.current && clearTimeout(P.current);
    };
  }, [t, r, n, C]);
  const x = Q(() => {
    i(!1), l(""), u([]), m(0), b.current = -1;
  }, []), k = Q(
    (E) => {
      const T = b.current;
      if (T === -1) return;
      const B = `${E.firstName} ${E.lastName}`.trim(), X = String(E.id), J = t.slice(0, T), te = t.slice(r), oe = `@${B} `, ee = J + oe + te, S = J.length + oe.length;
      e(ee), w((W) => [...W.filter((Y) => !(Y.id === X && Y.name === B)), { id: X, name: B }]), x(), requestAnimationFrame(() => {
        const W = s.current;
        W && (W.focus(), W.setSelectionRange(S, S));
      });
    },
    [t, r, e, s, x]
  ), y = Q(
    (E) => {
      if (!a) return !1;
      if (E.key === "Escape")
        return E.preventDefault(), x(), !0;
      if (d.length === 0) return !1;
      switch (E.key) {
        case "ArrowDown":
          return E.preventDefault(), m((T) => (T + 1) % d.length), !0;
        case "ArrowUp":
          return E.preventDefault(), m(
            (T) => (T + d.length - 1) % d.length
          ), !0;
        case "Tab": {
          const T = d[p];
          if (T) {
            const B = `${T.firstName} ${T.lastName}`.trim();
            if (c.length === 0 || B.toLowerCase().startsWith(c.toLowerCase()))
              return E.preventDefault(), k(T), !0;
          }
          return !1;
        }
        case "Enter":
          return E.preventDefault(), d[p] && k(d[p]), !0;
        default:
          return !1;
      }
    },
    [a, d, p, c, k, x]
  ), M = Q(
    (E) => {
      if (C.length === 0) return E;
      let T = E;
      const B = [...C].sort((X, J) => J.name.length - X.name.length);
      for (const X of B) {
        const J = `@${X.name}`, te = `<entity-ref type="person" id="${qn(X.id)}">${qn(X.name)}</entity-ref>`;
        for (; T.includes(J); )
          T = T.replace(J, te);
      }
      return T;
    },
    [C]
  );
  ie(() => {
    w(
      (E) => E.filter((T) => {
        const B = `@${T.name}`, X = t.indexOf(B);
        if (X === -1) return !1;
        const J = t[X + B.length];
        return J === " " || J === `
` || J === "	";
      })
    );
  }, [t]);
  const _ = le(() => {
    if (!a || b.current === -1) return null;
    const E = s.current;
    if (!E) return null;
    const T = Y6(E, b.current), B = E.offsetLeft + T.left, J = (E.offsetParent ? E.offsetParent.offsetHeight : 0) - (E.offsetTop + T.top);
    return { left: B, bottom: J };
  }, [a, t, r, s]), L = le(() => {
    if (!a || d.length === 0) return null;
    const E = d[p];
    if (!E) return null;
    const T = `${E.firstName} ${E.lastName}`.trim();
    return c.length === 0 ? T : T.toLowerCase().startsWith(c.toLowerCase()) ? T.slice(c.length) : null;
  }, [a, d, p, c]);
  return {
    isOpen: a,
    query: c,
    results: d,
    isLoading: h,
    selectedIndex: p,
    mentions: C,
    popoverPosition: _,
    inlineCompletion: L,
    handleKeyDown: y,
    selectPerson: k,
    transformMentions: M,
    close: x
  };
}
const J6 = /[\\`*_{}[\]()#+\-.!|~>]/g, e9 = (t) => t.split(/(<entity-ref\b[^>]*>[\s\S]*?<\/entity-ref>)/g).map((e, r) => r % 2 === 1 ? e : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(J6, "\\$&")).join(""), s8 = ({
  onSubmit: t,
  onStop: e,
  inProgress: r,
  onBeforeSubmit: n,
  placeholders: s,
  creditWarning: a,
  clarifyingUI: i,
  pendingContext: c = null,
  onPendingContextChange: l,
  pendingQuote: d = null,
  onPendingQuoteChange: u,
  fileAttachments: h,
  onTranscribe: g,
  searchPersons: p,
  onProcessFilesRef: m,
  disclaimer: C,
  footer: w,
  isWelcomeScreen: b = !1,
  fullscreen: P = !1,
  welcomeScreenSuggestions: A,
  onSuggestionClick: N,
  ref: x
}) => {
  const k = he(), y = Ge(), [M, _] = U(""), [L, E] = U(0), [T, B] = U(!1), [X, J] = U(!1), [te, oe] = U(null), ee = j(null), S = j(null), W = j(null), O = i != null, { tracking: Y } = Ke(), Ce = Q(
    (we, Be) => {
      Y?.onWelcomeSuggestionClick?.({
        item: we,
        group: Be,
        prompt: we.prompt || we.title
      }), N?.(we, Be);
    },
    [Y, N]
  ), {
    attachedFiles: me,
    fileInputRef: D,
    onUploadFiles: re,
    acceptValue: de,
    isAtMaxFiles: be,
    maxFiles: V,
    processFiles: I,
    handleFileSelect: H,
    handleRemoveFile: K,
    clearFiles: z,
    transientError: se,
    showTransientError: xe
  } = G6(h), ue = Q6({
    inputValue: M,
    setInputValue: _,
    cursorPosition: L,
    searchPersons: p,
    textareaRef: S
  }), Re = j(""), He = Q((we) => {
    const Be = Re.current, ur = Be && !/\s$/.test(Be) ? " " : "", Zt = `${Be}${ur}${we}`;
    _(Zt), E(Zt.length);
  }, []), at = {
    "permission-denied": k.ai.micPermissionDenied,
    "device-error": k.ai.micError,
    "transcription-failed": k.ai.transcriptionError
  }, Ae = B6({
    onTranscribe: g,
    onPartial: He,
    onFinal: (we) => {
      He(we), S.current?.focus();
    },
    onError: (we) => xe(at[we])
  }), it = !!g && Ae.isSupported, sr = Q(() => {
    Re.current = M, Ae.start();
  }, [M, Ae]);
  ie(() => {
    typeof window < "u" && window.location.hash.length === 0 && S.current?.focus();
  }, []), ie(() => {
    if (m)
      return m((we) => {
        I(we);
      }), () => {
        m(null);
      };
  }, [m, I]);
  const Ot = Ae.status === "recording", ar = Ot ? k.ai.listening : k.ai.inputPlaceholder, ir = me.filter((we) => we.status === "uploaded"), lt = me.some((we) => we.status === "uploading"), jt = me.some((we) => we.status === "error"), bt = M.trim().length > 0;
  ie(() => {
    if (!(!X || lt)) {
      if (J(!1), jt) {
        xe(k.ai.fileUploadBlockedSubmit);
        return;
      }
      ee.current?.requestSubmit();
    }
  }, [
    X,
    lt,
    jt,
    xe,
    k.ai.fileUploadBlockedSubmit
  ]);
  const cr = async (we) => {
    if (we.preventDefault(), !O) {
      if (ue.close(), r)
        e?.();
      else if (bt && !T) {
        if (lt) {
          J(!0), S.current?.focus();
          return;
        }
        if (n) {
          B(!0);
          try {
            if (await n() === !1) {
              S.current?.focus();
              return;
            }
          } finally {
            B(!1);
          }
        }
        const Be = ue.transformMentions(M.trim()), ur = e9(Be), Zt = ir.flatMap(
          (un) => un.uploadedFile ? [un.uploadedFile] : []
        ), ln = c, dn = d;
        ln && l?.(null), dn && u?.(null), await t({
          text: ur,
          files: Zt,
          context: ln,
          quote: dn
        }), _(""), z();
      }
      S.current?.focus();
    }
  }, lr = (we) => {
    O || ue.handleKeyDown(we) || we.key === "Enter" && !we.shiftKey && (we.preventDefault(), r || ee.current?.requestSubmit());
  }, dr = () => {
    E(S.current?.selectionStart ?? 0);
  }, Dt = () => {
    W.current && S.current && (W.current.scrollTop = S.current.scrollTop);
  }, Lt = te ? te.prompt ?? te.title : null, cn = Ot ? [k.ai.listening] : Lt ? [Lt] : s ?? [], Rs = cn.length > 1, Ns = le(() => O6(M, ue.mentions, {
    cursorPosition: L,
    inlineCompletion: ue.inlineCompletion
  }), [M, ue.mentions, L, ue.inlineCompletion]), Ts = ue.mentions.length > 0 || ue.inlineCompletion !== null;
  return /* @__PURE__ */ f("div", { ref: x, className: "flex flex-col items-center gap-2 px-4 pb-3 pt-2", children: [
    /* @__PURE__ */ f("div", { className: "flex w-full max-w-content flex-col gap-2", children: [
      b && A && A.length > 0 && N && /* @__PURE__ */ o(
        H6,
        {
          suggestions: A,
          onItemClick: Ce,
          onItemHover: oe
        }
      ),
      /* @__PURE__ */ o(T6, { creditWarning: a, children: /* @__PURE__ */ f(
        ge.form,
        {
          "aria-busy": r,
          ref: ee,
          className: R(
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
            O && "after:scale-100 after:opacity-100 border-f1-background-tertiary"
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
            O || S.current?.focus();
          },
          onSubmit: cr,
          children: [
            /* @__PURE__ */ o(
              A6,
              {
                isOpen: ue.isOpen,
                results: ue.results,
                isLoading: ue.isLoading,
                selectedIndex: ue.selectedIndex,
                position: ue.popoverPosition,
                onSelect: ue.selectPerson
              }
            ),
            /* @__PURE__ */ o(Ze, { initial: !1, children: O ? /* @__PURE__ */ o(
              ge.div,
              {
                className: "overflow-hidden",
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: {
                  height: 0,
                  opacity: 0,
                  transition: {
                    duration: y ? 0 : 0.22,
                    ease: [0.4, 0, 1, 1]
                  }
                },
                transition: {
                  duration: y ? 0 : 0.4,
                  ease: [0.4, 0, 0.2, 1]
                },
                children: i
              },
              "clarifying"
            ) : /* @__PURE__ */ f(
              ge.div,
              {
                className: "overflow-hidden",
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: {
                  height: 0,
                  opacity: 0,
                  transition: {
                    duration: y ? 0 : 0.15,
                    ease: [0.55, 0, 1, 0.45]
                  }
                },
                transition: {
                  duration: y ? 0 : 0.4,
                  ease: [0.4, 0, 0.2, 1]
                },
                children: [
                  d && /* @__PURE__ */ o(
                    V6,
                    {
                      quote: d,
                      onRemove: () => u?.(null)
                    }
                  ),
                  /* @__PURE__ */ o(Ze, { initial: !1, children: se && /* @__PURE__ */ o(
                    ge.div,
                    {
                      role: "alert",
                      "aria-live": "polite",
                      className: "p-1",
                      initial: { opacity: 0, y: -4 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -4 },
                      transition: {
                        duration: y ? 0 : 0.2,
                        ease: "easeOut"
                      },
                      children: /* @__PURE__ */ f(
                        "div",
                        {
                          className: R(
                            "flex w-full flex-row items-center gap-2 rounded-md p-2 pr-3",
                            "bg-f1-background-critical text-f1-foreground"
                          ),
                          children: [
                            /* @__PURE__ */ o("div", { className: "h-6 w-6 flex-shrink-0", children: /* @__PURE__ */ o(nc, { type: "critical", size: "sm" }) }),
                            /* @__PURE__ */ o("p", { className: "font-medium text-f1-foreground-critical", children: se })
                          ]
                        }
                      )
                    },
                    "transient-error"
                  ) }),
                  /* @__PURE__ */ o(
                    S6,
                    {
                      attachedFiles: me,
                      isUploading: lt,
                      onRemove: K,
                      removeLabel: k.ai.removeFile
                    }
                  ),
                  /* @__PURE__ */ o(
                    P6,
                    {
                      textareaRef: S,
                      highlightRef: W,
                      inputValue: M,
                      onInputChange: (we, Be) => {
                        _(we), E(Be);
                      },
                      onKeyDown: lr,
                      onCursorUpdate: dr,
                      onScroll: Dt,
                      highlightSegments: Ns,
                      hasOverlay: Ts,
                      multiplePlaceholders: Rs,
                      placeholders: cn,
                      resolvedDefaultPlaceholder: ar,
                      inProgress: r
                    }
                  ),
                  /* @__PURE__ */ o(
                    _6,
                    {
                      onUploadFiles: re,
                      isAtMaxFiles: be,
                      maxFiles: V,
                      acceptValue: de,
                      fileInputRef: D,
                      handleFileSelect: H,
                      inProgress: r,
                      hasDataToSend: bt,
                      isPreSending: T || X,
                      canRecord: it,
                      recordingStatus: Ae.status,
                      recordingStream: Ae.stream,
                      onStartRecording: sr,
                      onStopRecording: Ae.stop,
                      onCancelRecording: Ae.cancel
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
    /* @__PURE__ */ o(Ze, { mode: "wait", initial: !1, children: O ? /* @__PURE__ */ f(
      ge.div,
      {
        className: "flex w-full max-w-content flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-f1-foreground-tertiary",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15, ease: "easeOut" },
        children: [
          /* @__PURE__ */ f("span", { children: [
            /* @__PURE__ */ o("kbd", { className: "font-sans", children: "↑↓" }),
            " ",
            k.ai.clarifyingQuestion.navHint.navigate
          ] }),
          /* @__PURE__ */ f("span", { children: [
            /* @__PURE__ */ o("kbd", { className: "font-sans", children: "Enter" }),
            " ",
            k.ai.clarifyingQuestion.navHint.select
          ] }),
          /* @__PURE__ */ f("span", { children: [
            /* @__PURE__ */ o("kbd", { className: "font-sans", children: "Esc" }),
            " ",
            k.ai.clarifyingQuestion.navHint.cancel
          ] })
        ]
      },
      "clarifying-nav-hint"
    ) : C?.text && /* @__PURE__ */ f(
      ge.div,
      {
        className: "flex w-full max-w-content flex-row items-center justify-center gap-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15, ease: "easeOut" },
        children: [
          C.onClick ? /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: C.onClick,
              className: R(
                "group min-w-0 cursor-pointer bg-transparent p-0 text-inherit",
                "transition-transform duration-700 ease-out",
                "hover:scale-[1.02] focus-visible:scale-[1.02]",
                "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
              ),
              children: /* @__PURE__ */ o(
                Le,
                {
                  className: R(
                    "text-sm font-medium text-f1-foreground-tertiary transition-colors duration-700 ease-out",
                    "group-hover:bg-gradient-to-r group-hover:from-[#E55619] group-hover:to-[#A1ADE5] group-hover:bg-clip-text group-hover:text-transparent",
                    "group-focus-visible:bg-gradient-to-r group-focus-visible:from-[#E55619] group-focus-visible:to-[#A1ADE5] group-focus-visible:bg-clip-text group-focus-visible:text-transparent"
                  ),
                  children: C.text
                }
              )
            }
          ) : /* @__PURE__ */ o(Le, { className: "text-sm font-medium text-f1-foreground-tertiary", children: C.text }),
          C.link && C.linkText && /* @__PURE__ */ o(
            oc,
            {
              href: C.link,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary",
              children: C.linkText
            }
          )
        ]
      },
      "chat-disclaimer"
    ) }),
    /* @__PURE__ */ o(Ze, { children: w && b && /* @__PURE__ */ o(
      ge.div,
      {
        className: R(
          "w-full py-4 mx-auto max-w-content",
          P && "flex justify-center"
        ),
        initial: { opacity: 0, height: 0, overflow: "hidden" },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0, overflow: "hidden" },
        transition: { duration: 0.3, ease: "easeInOut" },
        children: w
      },
      "chat-footer"
    ) })
  ] });
};
function t9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "pre",
    {
      ...e,
      className: R(
        "relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2",
        e.className
      ),
      children: t
    }
  );
}
function r9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "code",
    {
      ...e,
      className: R(
        // Inline default
        "rounded bg-f1-background-secondary px-1 py-0.5 font-mono text-base text-f1-foreground",
        // Reset inside <pre> — let the parent handle the surface
        "[pre_&]:rounded-none [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-base",
        e.className
      ),
      children: t
    }
  );
}
function n9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "blockquote",
    {
      ...e,
      className: R(
        "mr-1 my-2 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-3 text-base",
        e.className
      ),
      children: t
    }
  );
}
function o9({ ...t }) {
  return /* @__PURE__ */ o(
    "hr",
    {
      ...t,
      className: R("my-3 border-0 border-t border-f1-border", t.className)
    }
  );
}
function s9({
  src: t,
  alt: e,
  ...r
}) {
  const n = () => {
    if (t) {
      const s = document.createElement("a");
      s.href = t, s.download = e || "image", document.body.appendChild(s), s.click(), document.body.removeChild(s);
    }
  };
  return /* @__PURE__ */ f("div", { className: "relative w-fit", children: [
    /* @__PURE__ */ o(
      "img",
      {
        ...r,
        src: t,
        alt: e,
        className: R("max-w-full rounded-md", r.className)
      }
    ),
    /* @__PURE__ */ o("div", { className: "absolute right-2 top-2 rounded", children: /* @__PURE__ */ o(
      Ee,
      {
        variant: "neutral",
        label: "Download",
        hideLabel: !0,
        icon: rt,
        onClick: n
      }
    ) })
  ] });
}
function a9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(Xo, { ...e, variant: "link", href: e.href, children: t });
}
function i9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "ul",
    {
      ...e,
      className: R(
        "list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        e.className
      ),
      children: t
    }
  );
}
function c9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "ol",
    {
      ...e,
      className: R(
        "list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        e.className
      ),
      children: t
    }
  );
}
function l9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o("li", { ...e, className: R("mb-2", e.className), children: t });
}
async function d9(t, e, r) {
  const n = await import("./xlsx-Bedf3nwD.js"), s = n.utils.table_to_book(t, { sheet: "Data" });
  n.writeFile(s, `${r}.${e}`);
}
function u9({
  children: t,
  title: e,
  ...r
}) {
  const n = he(), s = j(null), a = Q(
    (i) => {
      if (!s.current) return;
      const c = e?.replace(/\s+/g, "_").toLowerCase() || "table";
      d9(s.current, i, c);
    },
    [e]
  );
  return /* @__PURE__ */ f("div", { className: "group/table relative flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary", children: [
    /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 py-2", children: [
      /* @__PURE__ */ o(
        Le,
        {
          tag: "h2",
          className: "text-base font-medium capitalize text-f1-foreground",
          children: e ?? n.ai.reportCard.tableLabel
        }
      ),
      /* @__PURE__ */ o(
        or,
        {
          icon: rt,
          size: "md",
          items: [
            {
              label: n.t("ai.dataDownload.download", {
                format: "Excel"
              }),
              icon: rt,
              onClick: () => a("xlsx")
            },
            {
              label: n.t("ai.dataDownload.download", {
                format: "CSV"
              }),
              icon: rt,
              onClick: () => a("csv")
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "scrollbar-macos overflow-x-auto", children: /* @__PURE__ */ o(
      "table",
      {
        ref: s,
        ...r,
        className: R(
          "w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0",
          r.className
        ),
        children: t
      }
    ) })
  ] });
}
function f9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "th",
    {
      ...e,
      className: R(
        "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
        e.className
      ),
      children: t
    }
  );
}
function h9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "td",
    {
      ...e,
      className: R(
        "max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        e.className
      ),
      children: t
    }
  );
}
function p9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o("p", { ...e, className: R("text-base font-normal", e.className), children: t });
}
function m9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "h1",
    {
      ...e,
      className: R(
        "mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0",
        e.className
      ),
      children: t
    }
  );
}
function g9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "h2",
    {
      ...e,
      className: R(
        "mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0",
        e.className
      ),
      children: t
    }
  );
}
function v9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "h3",
    {
      ...e,
      className: R(
        "mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0",
        e.className
      ),
      children: t
    }
  );
}
function C9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o("strong", { ...e, className: R("font-semibold", e.className), children: t });
}
function w9({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o("em", { ...e, className: R("italic", e.className), children: t });
}
function yt({
  id: t,
  trigger: e,
  resolver: r,
  mapToCard: n,
  fallbackCard: s
}) {
  const a = j(/* @__PURE__ */ new Map()), [i, c] = U(
    () => a.current.get(t) ?? null
  ), [l, d] = U(!1), [u, h] = U(!1), g = j(!0);
  ie(() => () => {
    g.current = !1;
  }, []);
  const p = Q(() => {
    if (i || l) return;
    const C = a.current.get(t);
    if (C) {
      c(C);
      return;
    }
    d(!0), h(!1), r(t).then((w) => {
      a.current.set(t, w), g.current && c(w);
    }).catch(() => {
      g.current && h(!0);
    }).finally(() => {
      g.current && d(!1);
    });
  }, [r, t, i, l]), m = u || !i ? s : n(i);
  return /* @__PURE__ */ f(
    sc,
    {
      openDelay: 300,
      closeDelay: 100,
      onOpenChange: (C) => {
        C && p();
      },
      children: [
        /* @__PURE__ */ o(ac, { asChild: !0, children: e }),
        /* @__PURE__ */ o(
          ic,
          {
            side: "top",
            align: "start",
            className: "w-64 rounded-2xl border-none p-0 shadow-md",
            children: l ? /* @__PURE__ */ o(hn.Skeleton, {}) : /* @__PURE__ */ o(hn, { ...m })
          }
        )
      ]
    }
  );
}
const Q1 = v(
  ({ label: t, ...e }, r) => /* @__PURE__ */ o(
    "button",
    {
      ref: r,
      type: "button",
      className: R(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Te()
      ),
      ...e,
      children: t
    }
  )
);
Q1.displayName = "CandidateTrigger";
function x9({
  id: t,
  label: e
}) {
  const { entityRefs: r } = Ke(), n = r?.resolvers?.candidate, s = he(), a = r?.urls?.candidate?.(t), i = le(
    () => (l) => {
      const d = [];
      return l.source && d.push({
        title: s.t("ai.entityRef.candidate.source"),
        value: l.source
      }), l.appliedAt && d.push({
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
        ...d.length > 0 && {
          children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: d.map((u) => /* @__PURE__ */ f("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ o("p", { className: "text-f1-foreground-secondary", children: u.title }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: u.value })
          ] }, u.title)) })
        },
        ...a && {
          secondaryActions: {
            label: s.t("ai.view"),
            href: a
          }
        }
      };
    },
    [s, a]
  ), c = le(
    () => ({
      title: e,
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [e, s, a]
  );
  return n ? /* @__PURE__ */ o(
    yt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(Q1, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: c
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
const J1 = v(
  ({ label: t, ...e }, r) => /* @__PURE__ */ o(
    "button",
    {
      ref: r,
      type: "button",
      className: R(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Te()
      ),
      ...e,
      children: t
    }
  )
);
J1.displayName = "ExpenseTrigger";
function k9({ id: t, label: e }) {
  const { entityRefs: r } = Ke(), n = r?.resolvers?.expense, s = he(), a = r?.urls?.expense?.(t), i = le(
    () => (l) => ({
      avatar: {
        type: "icon",
        icon: h1
      },
      title: l.description || `Expense #${l.id}`,
      description: [l.amount, l.status].filter(Boolean).join(" · "),
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [s, a]
  ), c = le(
    () => ({
      title: e,
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [e, s, a]
  );
  return n ? /* @__PURE__ */ o(
    yt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(J1, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: c
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
const es = v(
  ({ label: t, ...e }, r) => /* @__PURE__ */ o(
    "button",
    {
      ref: r,
      type: "button",
      className: R(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Te()
      ),
      ...e,
      children: t
    }
  )
);
es.displayName = "JobPostingTrigger";
function y9({
  id: t,
  label: e
}) {
  const { entityRefs: r } = Ke(), n = r?.resolvers?.jobPosting, s = he(), a = r?.urls?.jobPosting?.(t), i = le(
    () => (l) => ({
      title: l.title,
      description: [l.status, l.location].filter(Boolean).join(" · "),
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [s, a]
  ), c = le(
    () => ({
      title: e,
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [e, s, a]
  );
  return n ? /* @__PURE__ */ o(
    yt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(es, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: c
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
function b9({ rows: t }) {
  return t.length === 0 ? null : /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: t.map((e, r) => /* @__PURE__ */ f("div", { className: "flex flex-col", children: [
    e.label && /* @__PURE__ */ o("p", { className: "text-f1-foreground-secondary", children: e.label }),
    /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: e.value })
  ] }, e.label ?? r)) });
}
const ts = v(
  ({ label: t, ...e }, r) => /* @__PURE__ */ o(
    "button",
    {
      ref: r,
      type: "button",
      className: R(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Te()
      ),
      ...e,
      children: t
    }
  )
);
ts.displayName = "RequisitionTrigger";
function L9({
  id: t,
  label: e
}) {
  const { entityRefs: r } = Ke(), n = r?.resolvers?.requisition, s = he(), a = r?.urls?.requisition?.(t), i = le(
    () => (l) => {
      const d = l.lineManager ? `${l.lineManager.firstName} ${l.lineManager.lastName}` : void 0, h = [
        l.status ? {
          label: s.t("ai.entityRef.requisition.status"),
          value: /* @__PURE__ */ o("div", { className: "flex items-center pt-1", children: /* @__PURE__ */ o(
            cc,
            {
              text: l.status,
              variant: l.statusVariant ?? "neutral"
            }
          ) })
        } : void 0,
        l.lineManager ? {
          label: s.t("ai.entityRef.requisition.lineManager"),
          value: /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5 pt-1", children: [
            /* @__PURE__ */ o(
              Qo,
              {
                firstName: l.lineManager.firstName,
                lastName: l.lineManager.lastName,
                src: l.lineManager.avatarUrl,
                size: "xs"
              }
            ),
            /* @__PURE__ */ o("span", { children: d })
          ] })
        } : void 0,
        l.reason ? {
          label: s.t("ai.entityRef.requisition.reason"),
          value: l.reason
        } : void 0
      ].filter(
        (g) => g !== void 0
      );
      return {
        title: l.title,
        ...l.location && { description: l.location },
        ...h.length > 0 && {
          children: /* @__PURE__ */ o(b9, { rows: h })
        },
        ...a && {
          secondaryActions: {
            label: s.t("ai.view"),
            href: a
          }
        }
      };
    },
    [s, a]
  ), c = le(
    () => ({
      title: e,
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [e, s, a]
  );
  return n ? /* @__PURE__ */ o(
    yt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(ts, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: c
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
const rs = v(
  ({ label: t, ...e }, r) => /* @__PURE__ */ f(
    "button",
    {
      ref: r,
      type: "button",
      className: R(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Te()
      ),
      ...e,
      children: [
        "@",
        t
      ]
    }
  )
);
rs.displayName = "PersonTrigger";
function M9({ id: t, label: e }) {
  const { entityRefs: r } = Ke(), n = r?.resolvers?.person, s = he(), a = r?.urls?.person?.(t), i = le(
    () => (l) => ({
      avatar: {
        type: "person",
        firstName: l.firstName,
        lastName: l.lastName,
        src: l.avatarUrl
      },
      title: `${l.firstName} ${l.lastName}`,
      description: l.jobTitle,
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [s, a]
  ), c = le(
    () => ({
      title: e,
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [e, s, a]
  );
  return n ? /* @__PURE__ */ o(
    yt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(rs, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: c
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
const ns = v(
  ({ label: t, ...e }, r) => /* @__PURE__ */ o(
    "button",
    {
      ref: r,
      type: "button",
      className: R(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Te()
      ),
      ...e,
      children: t
    }
  )
);
ns.displayName = "VacancyTrigger";
function E9({ id: t, label: e }) {
  const { entityRefs: r } = Ke(), n = r?.resolvers?.vacancy, s = he(), a = r?.urls?.vacancy?.(t), i = le(
    () => (l) => ({
      title: l.name,
      description: [l.status, l.vacancyType].filter(Boolean).join(" · "),
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [s, a]
  ), c = le(
    () => ({
      title: e,
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [e, s, a]
  );
  return n ? /* @__PURE__ */ o(
    yt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(ns, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: c
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
const _9 = {
  person: M9,
  candidate: x9,
  expense: k9,
  "job-posting": y9,
  requisition: L9,
  vacancy: E9
};
function S9(t) {
  return _9[t];
}
function Dr(t) {
  return typeof t == "string" ? t : typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(Dr).join("") : t && typeof t == "object" && "props" in t ? Dr(t.props.children) : "";
}
function R9({
  type: t,
  id: e,
  children: r
}) {
  if (!e || !t)
    return /* @__PURE__ */ o("span", { children: r });
  const n = Dr(r), s = S9(t);
  return s ? /* @__PURE__ */ o(s, { id: e, label: n }) : /* @__PURE__ */ o("span", { children: r });
}
const a8 = {
  p: p9,
  h1: m9,
  h2: g9,
  h3: v9,
  a: a9,
  strong: C9,
  em: w9,
  li: l9,
  pre: t9,
  code: r9,
  blockquote: n9,
  hr: o9,
  ul: i9,
  ol: c9,
  table: u9,
  th: f9,
  td: h9,
  img: s9,
  "entity-ref": R9
}, N9 = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2
}, T9 = {
  normal: {
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0 }
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1]
  }
}, A9 = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275]
}, V9 = {
  normal: {
    scale: 1
  },
  animate: {
    scale: [1, 0.9, 1]
  }
}, os = As.forwardRef(({ animate: t = "normal", ...e }, r) => /* @__PURE__ */ f(
  "svg",
  {
    ref: r,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "1.3",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...e,
    children: [
      /* @__PURE__ */ o(
        ge.circle,
        {
          cx: "12",
          cy: "12",
          r: "8",
          initial: "normal",
          variants: V9,
          transition: A9,
          animate: t,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        ge.path,
        {
          d: "M9.00003 12L11.4 14.4L15 9.6",
          initial: "normal",
          variants: T9,
          transition: N9,
          animate: t,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
));
os.displayName = "CheckCircleLineAnimated";
const ss = 60, as = 40, Xn = 2e3, F9 = 500, P9 = 12e3, is = 2, Tt = 40, ft = [255, 60, 0], xr = [160, 140, 220], kr = { x: -12, y: 0, z: 0 }, yr = { x: -12, y: 12, z: 90 }, pt = {
  20: 0.72,
  28: 0.66,
  32: 0.72,
  60: 0.77,
  80: 0.8,
  120: 0.85
}, br = Math.PI / 180, $9 = is / 8 * Math.PI, I9 = 4 * Math.PI;
function tr(t, e) {
  return [
    t[0] * e[0] - t[1] * e[1] - t[2] * e[2] - t[3] * e[3],
    t[0] * e[1] + t[1] * e[0] + t[2] * e[3] - t[3] * e[2],
    t[0] * e[2] - t[1] * e[3] + t[2] * e[0] + t[3] * e[1],
    t[0] * e[3] + t[1] * e[2] - t[2] * e[1] + t[3] * e[0]
  ];
}
function H9(t) {
  const e = Math.sqrt(t[0] ** 2 + t[1] ** 2 + t[2] ** 2 + t[3] ** 2);
  return [t[0] / e, t[1] / e, t[2] / e, t[3] / e];
}
function At(t, e, r, n) {
  const s = Math.sin(n / 2);
  return [Math.cos(n / 2), t * s, e * s, r * s];
}
const Je = [0, 0, 0];
function Yn(t, e, r, n, s) {
  const a = t[0], i = t[1], c = t[2], l = t[3], d = 2 * (c * n - l * r), u = 2 * (l * e - i * n), h = 2 * (i * r - c * e);
  s[0] = e + a * d + c * h - l * u, s[1] = r + a * u + l * d - i * h, s[2] = n + a * h + i * u - c * d;
}
function cs(t, e, r) {
  const n = At(1, 0, 0, t * br), s = At(0, 1, 0, e * br), a = At(0, 0, 1, r * br);
  return H9(tr(tr(s, n), a));
}
function O9(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
const Vt = 256, j9 = (() => {
  const t = new Array(Vt);
  for (let e = 0; e < Vt; e++) {
    const r = e / (Vt - 1), n = Math.round(ft[0] + (xr[0] - ft[0]) * r), s = Math.round(ft[1] + (xr[1] - ft[1]) * r), a = Math.round(ft[2] + (xr[2] - ft[2]) * r);
    t[e] = `rgb(${n},${s},${a})`;
  }
  return t;
})();
function D9(t) {
  const e = t <= 0 ? 0 : t >= 1 ? Vt - 1 : t * (Vt - 1) | 0;
  return j9[e];
}
const Z9 = Object.keys(pt).map(Number).sort((t, e) => t - e);
function B9(t) {
  const e = Z9;
  if (t <= e[0]) return pt[e[0]];
  if (t >= e[e.length - 1])
    return pt[e[e.length - 1]];
  for (let r = 0; r < e.length - 1; r++)
    if (t >= e[r] && t <= e[r + 1]) {
      const n = (t - e[r]) / (e[r + 1] - e[r]);
      return pt[e[r]] + (pt[e[r + 1]] - pt[e[r]]) * n;
    }
  return 0.72;
}
const Kn = Math.sqrt(ss ** 2 + as ** 2), Lr = [ss / Kn, as / Kn, 0], U9 = cs(kr.x, kr.y, kr.z), z9 = cs(yr.x, yr.y, yr.z), mt = is * 3, zt = Tt + 1, Qn = (mt + 1) * zt, rr = 4 * mt * Tt, Mr = [
  [0, 0, 0, 0],
  [0, 0, 0, 0]
], W9 = (t, e) => t.avgZ - e.avgZ;
function G9() {
  const t = new Array(rr);
  for (let r = 0; r < rr; r++)
    t[r] = { points: "", color: "", avgZ: 1 / 0 };
  const e = new Array(Qn);
  for (let r = 0; r < Qn; r++)
    e[r] = { x: 0, y: 0, z: 0, t: 0 };
  return { quads: t, grid: e };
}
function Jn(t, e, r, n) {
  const { quads: s, grid: a } = t, i = r * 0.392, c = r / 2, l = r / 2, d = $9 * B9(r), u = e * I9, h = At(0, 0, 1, n * 2 * Math.PI);
  Yn(h, Lr[0], Lr[1], Lr[2], Je);
  const g = At(Je[0], Je[1], Je[2], u), p = tr(g, U9), m = tr(g, z9);
  Mr[0] = p, Mr[1] = m;
  let C = 0;
  for (let w = 0; w < 4; w++) {
    const b = Mr[w >> 1], P = w & 1 ? -1 : 1;
    for (let A = 0; A <= mt; A++) {
      const N = P * (Math.PI / 2 - A / mt * d), x = Math.cos(N), k = Math.sin(N), y = Math.sin(A / mt * Math.PI), M = A * zt;
      for (let _ = 0; _ <= Tt; _++) {
        const L = _ / Tt * Math.PI * 2;
        Yn(b, x * Math.cos(L), k, x * Math.sin(L), Je);
        const E = a[M + _];
        E.x = Je[0], E.y = Je[1], E.z = Je[2], E.t = y;
      }
    }
    for (let A = 0; A < mt; A++) {
      const N = A * zt, x = (A + 1) * zt;
      for (let k = 0; k < Tt; k++) {
        const y = a[N + k], M = a[N + k + 1], _ = a[x + k], L = a[x + k + 1];
        if ((y.t + M.t + _.t + L.t) * 0.25 < 1e-3) continue;
        const T = (y.x + M.x + _.x + L.x) * 0.25, B = (y.y + M.y + _.y + L.y) * 0.25, X = (y.z + M.z + _.z + L.z) * 0.25, J = T * i, te = B * i, oe = y.x * i - J, ee = y.y * i - te, S = Math.sqrt(oe * oe + ee * ee), W = S > 0 ? (S + 0.9) / S : 1, O = c + J + oe * W, Y = l - te - ee * W, Ce = M.x * i - J, me = M.y * i - te, D = Math.sqrt(Ce * Ce + me * me), re = D > 0 ? (D + 0.9) / D : 1, de = c + J + Ce * re, be = l - te - me * re, V = L.x * i - J, I = L.y * i - te, H = Math.sqrt(V * V + I * I), K = H > 0 ? (H + 0.9) / H : 1, z = c + J + V * K, se = l - te - I * K, xe = _.x * i - J, ue = _.y * i - te, Re = Math.sqrt(xe * xe + ue * ue), He = Re > 0 ? (Re + 0.9) / Re : 1, at = c + J + xe * He, Ae = l - te - ue * He, it = s[C];
        it.points = `${O},${Y} ${de},${be} ${z},${se} ${at},${Ae}`, it.color = D9((T + 1) * 0.5), it.avgZ = X, C++;
      }
    }
  }
  for (let w = C; w < rr; w++)
    s[w].avgZ = 1 / 0;
  return s.sort(W9), C;
}
const q9 = ({ size: t = 20, className: e, style: r, variant: n = "default" }, s) => {
  const a = j(null), i = j(null), c = j(null);
  c.current === null && (c.current = G9());
  const l = le(() => new Array(rr).fill(0), []), d = (u) => {
    a.current = u, s && (typeof s == "function" ? s(u) : s.current = u);
  };
  return ie(() => {
    const u = i.current, h = a.current;
    if (!u || !h) return;
    const g = u.querySelectorAll(
      "polygon"
    ), p = c.current;
    let m = null, C = 0, w = 0, b = 0, P = null, A = "spin", N = !0, x = !1;
    const k = (E) => {
      const T = p.quads;
      for (let B = 0; B < g.length; B++) {
        const X = g[B];
        if (B < E) {
          const J = T[B];
          X.setAttribute("points", J.points), X.setAttribute("fill", J.color), X.hasAttribute("display") && X.removeAttribute("display");
        } else X.hasAttribute("display") || X.setAttribute("display", "none");
      }
    }, y = (E) => {
      x || (C = E, w = E, x = !0);
      let T = 0, B = !0;
      if (n === "continuous") {
        const oe = Xn * 2, ee = (E - C) % oe / oe;
        T = ee < 0.5 ? ee * 2 : (1 - ee) * 2, B = !1;
      } else A === "spin" ? (T = Math.min((E - C) / Xn, 1), T >= 1 && (T = 0, A = "pause", b = E)) : (T = 0, E - b >= F9 && (A = "spin", C = E));
      const X = (E - w) / P9 % 1, J = B ? O9(T) : T, te = Jn(p, J, t, X);
      k(te), m = requestAnimationFrame(y);
    }, M = () => {
      m === null && (m = requestAnimationFrame(y));
    }, _ = () => {
      m !== null && (cancelAnimationFrame(m), m = null);
    };
    k(Jn(p, 0, t, 0));
    let L = null;
    return typeof IntersectionObserver < "u" && (L = new IntersectionObserver(
      (E) => {
        const T = E[0]?.isIntersecting ?? !0;
        if (T !== N)
          if (N = T, T) {
            if (P !== null && x) {
              const B = performance.now() - P;
              C += B, w += B, b += B;
            }
            P = null, M();
          } else
            P = performance.now(), _();
      },
      { threshold: 0 }
    ), L.observe(h)), M(), () => {
      _(), L?.disconnect();
    };
  }, [t, n]), /* @__PURE__ */ o(
    "div",
    {
      ref: d,
      role: "progressbar",
      "aria-label": "Loading",
      className: R("shrink-0 globe-spin-anim", e),
      style: { width: t, height: t, ...r },
      children: /* @__PURE__ */ o(
        "svg",
        {
          ref: i,
          width: "100%",
          height: "100%",
          viewBox: `0 0 ${t} ${t}`,
          xmlns: "http://www.w3.org/2000/svg",
          shapeRendering: "geometricPrecision",
          style: { display: "block", overflow: "visible" },
          children: l.map((u, h) => /* @__PURE__ */ o("polygon", { stroke: "none", display: "none" }, h))
        }
      )
    }
  );
}, ls = v(
  q9
);
ls.displayName = "ChatSpinner";
const eo = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}, Zr = ({ title: t, status: e, inGroup: r }) => {
  const s = {
    duration: Ge() ? 0 : 0.18,
    ease: [0.33, 1, 0.68, 1]
  }, a = e === "inProgress", i = e === "executing", c = e === "completed", l = e === "writing";
  return /* @__PURE__ */ f("div", { className: "flex w-full items-start gap-1 text-f1-foreground-secondary", children: [
    /* @__PURE__ */ o("div", { className: "flex h-5 w-6 shrink-0 items-center justify-start", children: /* @__PURE__ */ f(Ze, { mode: "wait", children: [
      a && /* @__PURE__ */ o(
        ge.div,
        {
          className: "flex h-5 w-5 shrink-0 items-center justify-center",
          ...eo,
          transition: s,
          children: /* @__PURE__ */ o(
            ye,
            {
              state: "animate",
              size: r ? "md" : "lg",
              icon: Ho
            }
          )
        },
        "inProgress"
      ),
      (i || l) && /* @__PURE__ */ o("div", { className: "flex h-5 w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ o(ls, { variant: i ? "default" : "continuous" }) }),
      c && /* @__PURE__ */ o(
        ge.div,
        {
          ...eo,
          className: "flex h-5 w-5 shrink-0 items-center justify-center",
          transition: s,
          children: /* @__PURE__ */ o(
            ye,
            {
              color: "secondary",
              state: "animate",
              size: r ? "md" : "lg",
              icon: os
            }
          )
        },
        "completed"
      )
    ] }) }),
    t && /* @__PURE__ */ o(
      "p",
      {
        className: R(
          "text-pretty leading-5",
          (i || l) && "shine-text"
        ),
        children: t
      }
    )
  ] });
}, i8 = [
  "inProgress",
  "executing",
  "writing",
  "completed"
];
function ds({
  avatar: t,
  title: e,
  description: r,
  isActive: n = !1,
  action: s,
  children: a
}) {
  const i = he(), c = s.type === "open", l = c ? n ? s.onClose : s.onOpen : void 0;
  return /* @__PURE__ */ f(
    "div",
    {
      className: R(
        "flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2",
        c && "cursor-pointer",
        n ? "border-f1-border-hover" : "border-f1-border-secondary"
      ),
      onClick: l,
      children: [
        /* @__PURE__ */ f("div", { className: "flex w-full min-w-0 flex-row items-center gap-3", children: [
          t?.type === "module" && /* @__PURE__ */ o(Jo, { module: t.module, size: "lg" }),
          t?.type === "file" && /* @__PURE__ */ o(lc, { file: t.file, size: "lg" }),
          /* @__PURE__ */ f("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ o(Le, { className: "text-lg font-semibold text-f1-foreground", children: e }),
            r && /* @__PURE__ */ o(Le, { className: "text-base text-f1-foreground-secondary", children: r })
          ] }),
          s.type === "open" && s.showButton !== !1 && /* @__PURE__ */ o(
            Ee,
            {
              variant: "outline",
              size: "md",
              label: n ? i.actions.close : i.ai.reportCard.openButton,
              onClick: n ? s.onClose : s.onOpen
            }
          ),
          s.type === "custom" && /* @__PURE__ */ o(
            Ee,
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
        a
      ]
    }
  );
}
ds.displayName = "F0CanvasCard";
const an = Ht(null);
function c8({
  children: t
}) {
  const [e, r] = U(0), n = j([]), s = Q(
    (i) => {
      const c = n.current, l = c.findIndex(
        (u) => u.formName === i.formName && u.customFieldName === i.customFieldName
      ), d = i;
      l >= 0 ? c[l] = d : c.push(d), r((u) => u + 1);
    },
    []
  ), a = le(
    () => ({
      formatters: [...n.current],
      setFormCardValueFormatter: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, e]
  );
  return /* @__PURE__ */ o(an.Provider, { value: a, children: t });
}
function X9(t) {
  const r = kt(an)?.formatters;
  return le(() => !r || r.length === 0 ? null : (n, s, a) => {
    let i, c = -1;
    for (const l of r) {
      const d = l.formName === void 0 || l.formName === t, u = l.customFieldName === void 0 || l.customFieldName === a.customFieldName;
      if (!d || !u) continue;
      let h = 0;
      l.formName !== void 0 && (h += 2), l.customFieldName !== void 0 && (h += 1), h > c && (c = h, i = l);
    }
    if (i)
      return i.format(s, { key: n, ...a });
  }, [r, t]);
}
function l8() {
  const t = kt(an);
  if (!t)
    throw new Error(
      "useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider"
    );
  return t.setFormCardValueFormatter;
}
const to = 7, Y9 = 625, ro = /* @__PURE__ */ new Set();
function K9(t) {
  return typeof DOMParser < "u" ? new DOMParser().parseFromString(t, "text/html").body.textContent?.replace(/\s+/g, " ").trim() ?? "" : t.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
function Q9(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
function J9(t) {
  const { days: e, hours: r, minutes: n, seconds: s } = c4(t), a = [];
  return e > 0 && a.push(`${e}d`), r > 0 && a.push(`${r}h`), n > 0 && a.push(`${n}m`), (s > 0 || a.length === 0) && a.push(`${s}s`), a.join(" ");
}
function no(t) {
  if (t instanceof Date) return !0;
  if (typeof t != "string") return !1;
  const e = new Date(t);
  return !Number.isNaN(e.getTime());
}
function oo(t) {
  return (t instanceof Date ? t : new Date(t)).toLocaleDateString();
}
function so(t) {
  return t.type === "item" ? t.text : "";
}
function us(t, e) {
  if (t == null || t === "") return { type: "item", text: "—" };
  if (e === "duration" && typeof t == "number")
    return { type: "item", text: J9(t) };
  if (e === "richtext" && typeof t == "object" && t !== null && "value" in t) {
    const r = t.value;
    return { type: "item", text: (r ? K9(r) : "") || "—" };
  }
  if (e === "daterange" && typeof t == "object" && t !== null && "from" in t && "to" in t) {
    const { from: r, to: n } = t, s = no(r) ? oo(r) : String(r), a = no(n) ? oo(n) : String(n);
    return { type: "item", text: `${s} – ${a}` };
  }
  if (t instanceof Date)
    return { type: "item", text: t.toLocaleDateString() };
  if (typeof t == "boolean")
    return { type: "item", text: t ? "Yes" : "No" };
  if (Array.isArray(t))
    return { type: "item", text: t.map((n) => {
      const s = us(n);
      return Array.isArray(s) ? s.map(so).join(", ") : so(s);
    }).filter(Boolean).join(", ") || "—" };
  if (typeof t == "object" && t !== null) {
    const r = t;
    return typeof r.label == "string" ? { type: "item", text: r.label } : typeof r.name == "string" ? { type: "item", text: r.name } : typeof r.text == "string" ? { type: "item", text: r.text } : { type: "item", text: JSON.stringify(t) };
  }
  return { type: "item", text: Q9(String(t)) };
}
function fs({
  formName: t,
  formDescription: e,
  module: r,
  cardTitle: n,
  cardDescription: s,
  fieldDescriptions: a,
  formValues: i,
  valueFormatter: c
}) {
  const { canvasContent: l, openCanvas: d, closeCanvas: u } = Ke(), h = X9(t), g = c ?? h, p = j(() => {
  }), m = n ?? t, C = s ?? e ?? "", w = l?.type === "form" && l.formName === t, b = () => d({
    type: "form",
    title: m,
    description: C,
    formName: t,
    formDescription: e,
    formModule: r
  });
  p.current = b, ie(() => {
    typeof window > "u" || window.innerWidth < Y9 || ro.has(t) || (ro.add(t), p.current());
  }, [t]);
  const P = a && i ? Object.entries(a).map(([x, k]) => {
    const y = i[x], M = g?.(x, y, {
      fieldType: k.fieldType,
      customFieldName: k.customFieldName
    });
    if (!M && k.fieldType === "custom" && typeof y == "object" && y !== null)
      return null;
    const _ = M ?? us(y, k.fieldType), L = ["richtext", "textarea"];
    return {
      label: k.label,
      content: _,
      verticalLayout: L.includes(k.fieldType ?? "")
    };
  }).filter((x) => {
    if (!x) return !1;
    const k = Array.isArray(x.content) ? x.content[0] : x.content;
    return !(k?.type === "item" && k.text === "—");
  }) : [], A = P.slice(0, to), N = P.length > to;
  return /* @__PURE__ */ o(
    ds,
    {
      avatar: r ? { type: "module", module: r } : void 0,
      title: m,
      description: C,
      isActive: w,
      action: {
        type: "open",
        onOpen: b,
        onClose: u,
        showButton: w
      },
      children: A.length > 0 && !w && /* @__PURE__ */ o("div", { className: "-mx-3 flex w-full flex-col overflow-hidden pb-1", children: /* @__PURE__ */ o(
        dc,
        {
          details: A.map((x) => ({
            title: x.label,
            content: x.content,
            ...x.verticalLayout && { verticalLayout: !0 }
          })),
          showSeeMore: N,
          onClickSeeMore: b,
          tableView: !0
        }
      ) })
    }
  );
}
fs.displayName = "FormCard";
function e3() {
  const t = x6(), e = t?.activeForm;
  if (!e) return null;
  const r = e.cardTitle, n = e.cardDescription, s = (t?.getFillVersion(e.formName) ?? 0) > 0;
  return !r || !n || !s ? null : /* @__PURE__ */ o("div", { className: "mt-2 w-full", children: /* @__PURE__ */ o(
    fs,
    {
      formName: e.formName,
      formDescription: e.description,
      module: e.module,
      cardTitle: r,
      cardDescription: n,
      fieldDescriptions: e.fieldDescriptions,
      formValues: e.formValues
    }
  ) });
}
const t3 = 2;
function r3(t, e) {
  if (!t.intersectsNode(e)) return null;
  const r = document.createRange();
  r.selectNodeContents(e);
  const n = t.cloneRange();
  n.compareBoundaryPoints(Range.START_TO_START, r) < 0 && n.setStart(r.startContainer, r.startOffset), n.compareBoundaryPoints(Range.END_TO_END, r) > 0 && n.setEnd(r.endContainer, r.endOffset);
  const s = n.toString().trim();
  if (s.length < t3) return null;
  const a = n.getBoundingClientRect();
  return { rect: a.width > 0 || a.height > 0 ? a : e.getBoundingClientRect(), text: s };
}
function hs({
  containerRef: t,
  enabled: e = !0
}) {
  const [r, n] = U(null), s = Q(() => n(null), []);
  return ie(() => {
    if (!e || typeof window > "u") return;
    const a = t.current;
    if (!a) return;
    const i = () => {
      const d = window.getSelection();
      if (!d || d.isCollapsed || d.rangeCount === 0) {
        n(null);
        return;
      }
      n(r3(d.getRangeAt(0), a));
    }, c = () => {
      window.setTimeout(i, 0);
    }, l = () => {
      const d = window.getSelection();
      (!d || d.isCollapsed || d.rangeCount === 0) && n(null);
    };
    return document.addEventListener("mouseup", c), document.addEventListener("keyup", c), document.addEventListener("selectionchange", l), () => {
      document.removeEventListener("mouseup", c), document.removeEventListener("keyup", c), document.removeEventListener("selectionchange", l);
    };
  }, [t, e]), { anchor: r, clear: s };
}
const ao = 8, St = 8;
function ps({ anchor: t, onReply: e }) {
  const r = he(), n = j(null), [s, a] = U(
    null
  );
  if (Ro(() => {
    if (!t) {
      a(null);
      return;
    }
    const c = n.current;
    if (!c) return;
    const l = c.offsetWidth, d = c.offsetHeight, u = window.innerWidth, h = window.innerHeight;
    let g = t.rect.top - d - ao;
    g < St && (g = t.rect.bottom + ao), g = Math.min(
      Math.max(g, St),
      h - d - St
    );
    const p = t.rect.left + t.rect.width / 2 - l / 2, m = Math.min(
      Math.max(p, St),
      u - l - St
    );
    a({ top: g, left: m });
  }, [t]), typeof document > "u" || !t) return null;
  const i = r.ai.reply;
  return i1(
    /* @__PURE__ */ o(
      "div",
      {
        style: {
          position: "fixed",
          top: s?.top ?? -9999,
          left: s?.left ?? -9999,
          visibility: s ? "visible" : "hidden"
        },
        className: R(
          "z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary",
          "drop-shadow"
        ),
        children: /* @__PURE__ */ o(
          Me,
          {
            ref: n,
            type: "button",
            variant: "ghost",
            label: i,
            icon: Uo,
            onClick: () => {
              e(t.text);
            }
          }
        )
      }
    ),
    document.body
  );
}
const ms = Ht(void 0), d8 = () => kt(ms), n3 = (t) => /* @__PURE__ */ o(e1, { content: t, format: "markdown" }), o3 = ({
  isGenerating: t,
  isLoading: e,
  message: r,
  renderToolCall: n,
  onReplyQuote: s,
  onRendered: a,
  renderMarkdown: i
}) => {
  const c = typeof r?.content == "string" ? r.content : "", l = (r && n?.(r)) ?? r?.generativeUI?.() ?? null, d = r?.toolCalls?.[0]?.id, u = !c && !l, h = j(null), { anchor: g, clear: p } = hs({
    containerRef: h,
    enabled: !!(r?.id && c)
  });
  return ie(() => {
    r?.id && !e && !t && a?.(r);
  }, [r, e, t, a]), !e && !t && u ? null : /* @__PURE__ */ o(ms.Provider, { value: d, children: /* @__PURE__ */ f("div", { className: "relative isolate flex w-full flex-col items-start justify-center", children: [
    r && c && /* @__PURE__ */ o(
      "div",
      {
        ref: h,
        className: "w-full max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: (i ?? n3)(c)
      }
    ),
    !!l && /* @__PURE__ */ o("div", { className: "w-full", children: l }),
    /* @__PURE__ */ o(
      ps,
      {
        anchor: g,
        onReply: (m) => {
          s?.(m), p(), window.getSelection()?.removeAllRanges();
        }
      }
    )
  ] }) });
}, s3 = ({
  onClose: t,
  onSubmit: e,
  reactionType: r,
  message: n
}) => {
  const [s, a] = U(""), i = he(), { title: c, label: l, placeholder: d } = r === "like" ? i.ai.feedbackModal.positive : i.ai.feedbackModal.negative, u = Q(() => {
    e(n, s);
  }, [s, n, e]), h = () => {
    t(n);
  };
  return ie(() => {
    const g = (p) => {
      p.key === "Enter" && (p.preventDefault(), u());
    };
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, [u]), /* @__PURE__ */ o(
    a4,
    {
      position: "center",
      isOpen: !0,
      onClose: h,
      width: "md",
      title: c,
      container: null,
      primaryAction: {
        label: i.actions.send,
        onClick: u
      },
      secondaryAction: {
        label: i.actions.cancel,
        onClick: h
      },
      children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ o(
        uc,
        {
          autoFocus: !0,
          label: l,
          placeholder: d,
          value: s,
          onChange: (g) => a(g.trim()),
          size: "md",
          type: "text"
        }
      ) })
    }
  );
}, gs = Ht(null), a3 = ({ children: t }) => {
  const [e, r] = U(null), n = e ? {
    isOpen: !0,
    currentReaction: e.action,
    currentMessage: e.message,
    open: (s, a) => r({ action: s, message: a }),
    close: () => r(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (s, a) => r({ action: s, message: a }),
    close: () => r(null)
  };
  return /* @__PURE__ */ o(gs.Provider, { value: n, children: t });
}, vs = () => {
  const t = kt(gs);
  if (t === null)
    throw new Error(
      "useFeedbackModal must be used within a FeedbackModalProvider"
    );
  return t;
};
function i3(t) {
  const e = vs();
  return { modal: e, handleSubmit: (s, a) => {
    (e.currentReaction === "like" ? t.onThumbsUp : t.onThumbsDown)?.(s, { threadId: t.threadId, feedback: a }), e.close();
  }, handleClose: (s) => {
    (e.currentReaction === "like" ? t.onThumbsUp : t.onThumbsDown)?.(s, { threadId: t.threadId, feedback: "" }), e.close();
  } };
}
const c3 = ({
  content: t,
  targetMessage: e,
  onCopy: r
}) => {
  const n = he(), { open: s } = vs(), [a, i] = U(null);
  return /* @__PURE__ */ f("div", { className: "flex", children: [
    /* @__PURE__ */ o(
      fc,
      {
        size: "md",
        variant: "ghost",
        valueToCopy: t,
        onCopy: (c) => {
          c.currentTarget.blur(), r?.(t);
        }
      }
    ),
    /* @__PURE__ */ o(
      Ft,
      {
        onClick: (c) => {
          const l = a === "like" ? null : "like";
          l && s(l, e), i(l), c.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": n.actions.thumbsUp,
        children: /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ o(
          ye,
          {
            size: "md",
            icon: a === "like" ? w1 : C1,
            color: "default"
          }
        ) })
      }
    ),
    /* @__PURE__ */ o(
      Ft,
      {
        onClick: (c) => {
          const l = a === "dislike" ? null : "dislike";
          l && s(l, e), i(l), c.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": n.actions.thumbsDown,
        children: /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ o(
          ye,
          {
            size: "md",
            icon: a === "dislike" ? v1 : g1,
            color: "default"
          }
        ) })
      }
    )
  ] });
}, io = ({ position: t }) => /* @__PURE__ */ o(
  ge.div,
  {
    transition: { duration: 0.2, ease: "easeOut" },
    className: R(
      // Inset 1px on both sides so the gradient and the thin `::after` rule
      // never sit flush against the chat panel's left/right edge. Matters in
      // canvas mode: the chat has `border-l-0` there and the ResizeHandle
      // (1px, transparent) lives right at that edge; without this inset the
      // opaque top of the gradient paints next to the handle and visually
      // swallows it. In non-canvas mode the 1px sits inside the chat's own
      // border so the change is imperceptible.
      "pointer-events-none absolute inset-x-px z-[5] after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-f1-background-inverse-secondary after:opacity-[0.04] after:content-['']",
      t === "top" ? [
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
), l3 = ({
  icon: t,
  title: e,
  children: r,
  open: n,
  defaultOpen: s = !1,
  onOpenChange: a,
  lockOpen: i = !1
}) => {
  const [c, l] = U(s), d = Ge(), u = n !== void 0, h = u ? n : c;
  return /* @__PURE__ */ f(
    t1,
    {
      className: "mb-1 w-full",
      open: h,
      onOpenChange: (p) => {
        i || (u || l(p), a?.(p));
      },
      children: [
        /* @__PURE__ */ f(
          r1,
          {
            disabled: i,
            className: R(
              "gap-1",
              i ? "flex w-full items-center text-base text-f1-foreground-secondary" : "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90"
            ),
            children: [
              /* @__PURE__ */ o("span", { className: "flex items-center justify-start h-6 w-6", children: /* @__PURE__ */ o(ye, { icon: t, className: "block" }) }),
              /* @__PURE__ */ o("div", { className: "min-h-6 flex items-center", children: /* @__PURE__ */ o("span", { children: e }) }),
              !i && /* @__PURE__ */ o(ye, { icon: nr })
            ]
          }
        ),
        /* @__PURE__ */ o(n1, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ o(
          ge.div,
          {
            initial: !1,
            animate: {
              height: h ? "auto" : 0,
              opacity: h ? 1 : 0,
              visibility: h ? "visible" : "hidden"
            },
            transition: {
              duration: d ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: r
          }
        ) })
      ]
    }
  );
}, d3 = ({
  titles: t,
  title: e,
  inProgress: r,
  isWriting: n
}) => {
  const s = he(), [a, i] = U(!!r), c = j(r);
  ie(() => {
    c.current && !r ? i(!1) : r && !a && i(!0), c.current = r;
  }, [r, a]);
  const l = r ? s.ai.thoughtsGroupTitle : e ?? s.ai.thoughtsGroupTitle, d = t.length - 1, u = (h) => !r || n ? "completed" : h === d ? "executing" : "completed";
  return /* @__PURE__ */ o(
    l3,
    {
      icon: u1,
      title: l,
      open: a,
      onOpenChange: i,
      lockOpen: r,
      children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-4", children: t.map((h, g) => /* @__PURE__ */ f("div", { className: "relative", children: [
        /* @__PURE__ */ o(
          Zr,
          {
            title: h,
            status: u(g),
            inGroup: !0
          }
        ),
        g < t.length - 1 && /* @__PURE__ */ o(
          "div",
          {
            "aria-hidden": !0,
            className: "absolute -bottom-3 left-2 ml-px top-5 w-px bg-f1-border-secondary rounded"
          }
        )
      ] }, g)) })
    }
  );
};
function u3(t) {
  if (typeof t == "string") return t;
  if (Array.isArray(t)) {
    const e = t.filter((r) => r.type === "text").map((r) => r.text).filter((r) => typeof r == "string");
    return e[e.length - 1];
  }
}
function f3(t, e) {
  const r = Array.isArray(t) ? t.filter((n) => n.type === "binary").map((n) => ({
    url: n.url,
    filename: n.filename,
    mimetype: n.mimeType
  })).filter(
    (n) => typeof n?.filename == "string" && typeof n?.mimetype == "string" && typeof n?.url == "string"
  ) : [];
  return r.length > 0 ? r : (e?.uploadedFiles ?? []).filter(
    (n) => typeof n?.filename == "string" && typeof n?.mimetype == "string" && typeof n?.url == "string"
  );
}
const Cs = (t) => /* @__PURE__ */ o(e1, { content: t, format: "markdown" }), h3 = ({
  text: t,
  renderMarkdown: e
}) => /* @__PURE__ */ f("div", { className: "flex max-w-[90%] items-start gap-2 self-end pb-1 pr-2 text-f1-foreground-tertiary", children: [
  /* @__PURE__ */ o("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ o(ye, { icon: nn }) }),
  /* @__PURE__ */ o("div", { className: "min-w-0 whitespace-pre-wrap text-base leading-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&_p]:m-0", children: (e ?? Cs)(t) })
] }), p3 = ({
  message: t,
  onReplyQuote: e,
  autoScrollIntoView: r = !0,
  renderMarkdown: n
}) => {
  const s = j(null), a = j(null);
  ie(() => {
    !s.current || !r || s.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [r]);
  const i = t.rawData, c = f3(
    t?.content,
    i
  ), l = (u3(t?.content) ?? "").trim(), d = t?.replyQuote ?? null, u = l.length > 0, { anchor: h, clear: g } = hs({
    containerRef: a,
    enabled: u
  });
  return /* @__PURE__ */ f(
    "div",
    {
      ref: s,
      className: "my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0",
      children: [
        d && /* @__PURE__ */ o(h3, { text: d, renderMarkdown: n }),
        c.length > 0 && /* @__PURE__ */ o("div", { className: "flex max-w-[90%] flex-wrap justify-end gap-1.5", children: c.map((p, m) => /* @__PURE__ */ o(
          Ko,
          {
            file: { name: p.filename, type: p.mimetype },
            size: "lg"
          },
          `${p.filename}-${m}`
        )) }),
        u && /* @__PURE__ */ o(
          "div",
          {
            ref: a,
            className: "w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-xl bg-f1-background-tertiary px-4 py-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
            children: (n ?? Cs)(l)
          }
        ),
        /* @__PURE__ */ o(
          ps,
          {
            anchor: h,
            onReply: (p) => {
              e?.(p), g(), window.getSelection()?.removeAllRanges();
            }
          }
        )
      ]
    }
  );
}, m3 = 35, g3 = 22, v3 = 400, C3 = 2500, w3 = 220, x3 = ({ messages: t, onClick: e }) => {
  const [r, n] = U(0), [s, a] = U(0), [i, c] = U("starting"), l = t[r] ?? "";
  ie(() => {
    t.length > 0 && r >= t.length && (n(0), a(0), c("starting"));
  }, [t.length, r]), ie(() => {
    let h;
    if (i === "starting")
      h = setTimeout(() => c("writing"), v3);
    else if (i === "writing")
      s < l.length ? h = setTimeout(() => a((g) => g + 1), m3) : c("holding");
    else if (i === "holding") {
      if (t.length <= 1) return;
      h = setTimeout(() => c("erasing"), C3);
    } else i === "erasing" && (s > 0 ? h = setTimeout(() => a((g) => g - 1), g3) : h = setTimeout(() => {
      n((g) => (g + 1) % t.length), c("starting");
    }, w3));
    return () => {
      h && clearTimeout(h);
    };
  }, [i, s, l.length, t.length]);
  const d = !!e;
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-1 items-center justify-center px-4", children: /* @__PURE__ */ o(
    "p",
    {
      role: d ? "button" : void 0,
      tabIndex: d ? 0 : void 0,
      onClick: e,
      onKeyDown: d ? (h) => {
        (h.key === "Enter" || h.key === " ") && (h.preventDefault(), e?.());
      } : void 0,
      className: R(
        "bg-gradient-to-r from-[#E55619] via-[#E51943] to-[#A1ADE5] bg-clip-text text-center text-2xl font-semibold leading-[28px] text-transparent",
        d && R(
          "cursor-pointer transition-transform duration-200",
          "hover:scale-[1.02] focus-visible:scale-[1.02]",
          "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
        )
      ),
      style: { minHeight: 28 },
      "aria-label": l,
      children: l.slice(0, s)
    },
    r
  ) });
};
function k3({
  viewportRef: t,
  contentRef: e,
  endRef: r,
  lastTurnRef: n,
  turnsCount: s,
  freezeTurnMinHeight: a = !1
}) {
  const [i, c] = U(0), [l, d] = U(!1), u = j(s), h = j(a);
  h.current = a;
  const g = Q(
    (m = "smooth") => {
      r.current?.scrollIntoView({ behavior: m });
    },
    [r]
  );
  ie(() => {
    const m = t.current, C = e.current;
    if (!m || !C) return;
    const w = new ResizeObserver(() => {
      if (h.current) return;
      const b = parseFloat(getComputedStyle(C).paddingTop) + parseFloat(getComputedStyle(C).paddingBottom) + 1;
      c(m.clientHeight - b);
    });
    return w.observe(m), w.observe(C), () => w.disconnect();
  }, [t, e]);
  const p = Q(() => {
    const m = t.current;
    if (!m) return;
    const { scrollTop: C, scrollHeight: w, clientHeight: b } = m, P = w - C - b;
    d(P > b);
  }, [t]);
  return ie(() => {
    const m = t.current;
    if (m)
      return m.addEventListener("scroll", p, { passive: !0 }), () => m.removeEventListener("scroll", p);
  }, [p, t]), ie(() => {
    s > u.current && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const m = t.current, C = n.current;
        if (!m || !C) return;
        const w = m.getBoundingClientRect(), b = C.getBoundingClientRect(), P = m.scrollTop + (b.top - w.top);
        m.scrollTo({ top: P, behavior: "smooth" });
      });
    }), s === 0 && d(!1), u.current = s;
  }, [s, n, t]), { showScrollBtn: l, turnMinHeight: i, scrollToBottom: g };
}
const y3 = {
  threadId: "",
  onThumbsUp: () => {
  },
  onThumbsDown: () => {
  }
}, u8 = (t) => /* @__PURE__ */ o(a3, { children: /* @__PURE__ */ o(b3, { ...t }) }), b3 = ({
  turns: t,
  isLoadingThread: e = !1,
  interrupt: r,
  initialMessage: n,
  onWelcomeClick: s,
  renderToolCall: a,
  onReplyQuote: i,
  onAssistantMessageRendered: c,
  autoScrollUserIntoView: l = !0,
  renderMarkdown: d,
  feedback: u,
  freezeLayout: h = !1,
  noShadows: g = !1,
  children: p,
  AssistantMessage: m,
  UserMessage: C,
  onRegenerate: w,
  onCopy: b
}) => {
  const { modal: P, handleSubmit: A, handleClose: N } = i3(
    u ?? y3
  ), x = he(), k = m ?? o3, y = C ?? p3, M = le(() => {
    const S = n ?? x.ai.defaultInitialMessage;
    return (Array.isArray(S) ? S : [S]).filter((O) => typeof O == "string" && O.length > 0);
  }, [n, x.ai.defaultInitialMessage]), _ = !e && t.length === 0 && M.length > 0, L = j(null), E = j(null), T = j(null), B = j(null), X = j(null), { showScrollBtn: J, turnMinHeight: te, scrollToBottom: oe } = k3({
    viewportRef: L,
    contentRef: E,
    endRef: T,
    lastTurnRef: X,
    turnsCount: t.length,
    freezeTurnMinHeight: h
  }), ee = (S, W) => {
    const O = W === t.length - 1, Y = {
      renderToolCall: a,
      onReplyQuote: i,
      onRendered: c,
      autoScrollIntoView: l,
      renderMarkdown: d
    }, Ce = (D, re) => {
      const de = {
        message: D,
        inProgress: S.isInProgress,
        index: re,
        isCurrentMessage: !1,
        AssistantMessage: k,
        UserMessage: y,
        onRegenerate: w,
        onCopy: b,
        rawData: D.rawData || {},
        ...Y
      };
      return /* @__PURE__ */ o(
        y,
        {
          ...de
        },
        `${W}-u-${re}`
      );
    }, me = (D, re) => {
      const de = O && re === S.assistantMessages.length - 1, be = S.userMessages.length + re, V = {
        message: D,
        inProgress: S.isInProgress,
        index: be,
        isCurrentMessage: de,
        AssistantMessage: k,
        UserMessage: y,
        onRegenerate: w,
        onCopy: b,
        rawData: D.rawData || {},
        ...Y
      };
      return /* @__PURE__ */ o(
        k,
        {
          ...V,
          isGenerating: S.isInProgress && de,
          isLoading: S.isInProgress && de && !D.content
        },
        `${W}-a-${re}`
      );
    };
    return /* @__PURE__ */ f(
      "div",
      {
        ref: O ? X : void 0,
        className: R(
          "flex flex-col items-start justify-start gap-2 px-1",
          O && "pb-5"
        ),
        style: {
          minHeight: O && te || void 0
        },
        children: [
          S.userMessages.map(
            (D, re) => Ce(D, re)
          ),
          S.thinking && S.thinking.titles.length > 0 && /* @__PURE__ */ o(
            d3,
            {
              titles: S.thinking.titles,
              title: x.ai.thoughtsGroupTitle,
              inProgress: S.thinking.inProgress,
              isWriting: S.thinking.isWriting
            }
          ),
          S.assistantMessages.map(
            (D, re) => me(D, re)
          ),
          S.endIndicator === "thinking" && /* @__PURE__ */ o(Zr, { title: x.ai.thinking, status: "executing" }),
          S.endIndicator === "activity" && /* @__PURE__ */ o(Zr, { status: "writing" }),
          S.feedback && /* @__PURE__ */ o(
            c3,
            {
              content: S.feedback.content,
              targetMessage: S.feedback.targetMessage,
              onCopy: b
            }
          ),
          O && /* @__PURE__ */ o(e3, {})
        ]
      },
      `turn-${W}`
    );
  };
  return /* @__PURE__ */ f($e, { children: [
    /* @__PURE__ */ f("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ o(
        "div",
        {
          ref: L,
          className: R(
            "flex-1 overflow-y-scroll",
            "[scrollbar-width:thin] [scrollbar-color:transparent_transparent]",
            "hover:[scrollbar-color:var(--scrollbar-thumb)_transparent]",
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent",
            "hover:[&::-webkit-scrollbar-thumb]:bg-f1-background-inverse/30"
          ),
          children: /* @__PURE__ */ f(
            "div",
            {
              ref: E,
              className: R("flex h-full flex-col items-center p-4"),
              children: [
                /* @__PURE__ */ f(
                  "div",
                  {
                    className: R(
                      _ ? "flex flex-1" : "flex flex-col gap-6",
                      "w-full max-w-content"
                    ),
                    children: [
                      e && /* @__PURE__ */ o(L3, {}),
                      _ && /* @__PURE__ */ o(
                        x3,
                        {
                          messages: M,
                          onClick: s
                        }
                      ),
                      !e && t.map((S, W) => ee(S, W)),
                      r
                    ]
                  }
                ),
                /* @__PURE__ */ o("div", { ref: B, className: "h-px shrink-0", "aria-hidden": !0 }),
                /* @__PURE__ */ o("footer", { className: "copilotKitMessagesFooter", ref: T, children: p }),
                /* @__PURE__ */ o(Ze, { children: J && /* @__PURE__ */ o(
                  ge.div,
                  {
                    className: "sticky bottom-2 z-10 flex justify-center",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.8 },
                    transition: { duration: 0.2 },
                    children: /* @__PURE__ */ o("div", { className: "rounded bg-f1-background", children: /* @__PURE__ */ o(
                      Me,
                      {
                        onClick: () => oe(),
                        label: x.ai.scrollToBottom,
                        variant: "neutral",
                        icon: Fo,
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
      !g && !_ && /* @__PURE__ */ f($e, { children: [
        /* @__PURE__ */ o(io, { position: "top" }, "shadow-top"),
        /* @__PURE__ */ o(io, { position: "bottom" }, "shadow-bottom")
      ] })
    ] }),
    P.isOpen && /* @__PURE__ */ o(
      s3,
      {
        onSubmit: A,
        onClose: N,
        reactionType: P.currentReaction,
        message: P.currentMessage
      }
    )
  ] });
}, L3 = () => /* @__PURE__ */ o("div", { className: "flex h-full w-full max-w-content flex-col gap-6", children: /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ o("div", { className: "flex justify-end", children: /* @__PURE__ */ o(Se, { className: "h-12 w-2/5 rounded-full" }) }),
  /* @__PURE__ */ o(Se, { className: "mt-6 h-5 w-full rounded-md" }),
  /* @__PURE__ */ o(Se, { className: "h-5 w-2/5 rounded-md" }),
  /* @__PURE__ */ o(Se, { className: "h-5 w-4/5 rounded-md" })
] }) }), f8 = {
  ai: Rc.ai
}, ws = Ht(null);
function h8({
  children: t,
  translations: e
}) {
  return /* @__PURE__ */ o(ws.Provider, { value: e, children: t });
}
function p8() {
  const t = kt(ws);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
function M3() {
  const { canvasEntities: t } = Ke();
  return t;
}
function m8(t) {
  const e = M3();
  if (!(!t || !e))
    return e[t];
}
const E3 = ({
  canProceed: t,
  submitDisabled: e,
  label: r,
  onConfirm: n,
  onSkip: s,
  showSkip: a
}) => {
  const i = he();
  return /* @__PURE__ */ f("div", { className: "flex items-center justify-end gap-3 p-3", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center", children: a && s && /* @__PURE__ */ o(
      Ee,
      {
        variant: "outline",
        label: i.ai.clarifyingQuestion.skip,
        onClick: s,
        disabled: e
      }
    ) }),
    /* @__PURE__ */ o(
      Ee,
      {
        disabled: !t || e,
        variant: "default",
        label: r,
        onClick: n
      }
    )
  ] });
}, xs = ({ isSelected: t }) => /* @__PURE__ */ o(
  "div",
  {
    className: R(
      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
      t ? "bg-f1-background-selected-bold" : "border-2 border-solid border-f1-border bg-f1-background"
    ),
    children: t && /* @__PURE__ */ o("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
  }
), _3 = ({
  mode: t,
  hasSelection: e,
  hasCustomText: r,
  customAnswerText: n,
  isCustomAnswerActive: s,
  canProceed: a,
  inputRef: i,
  onActivate: c,
  onChangeText: l,
  onToggleActive: d,
  onConfirm: u
}) => {
  const g = he().ai.clarifyingQuestion.typeYourAnswer, p = t === "single" ? /* @__PURE__ */ o(xs, { isSelected: r && !e }) : /* @__PURE__ */ o(
    o1,
    {
      checked: s,
      onCheckedChange: () => d(!s),
      title: g,
      hideLabel: !0
    }
  );
  return /* @__PURE__ */ f(
    "div",
    {
      className: R(
        "flex items-center gap-2 rounded-md px-2 py-2",
        "transition-colors hover:bg-f1-background-hover"
      ),
      children: [
        p,
        /* @__PURE__ */ o(
          "input",
          {
            ref: i,
            type: "text",
            value: n ?? "",
            onChange: (m) => l(m.target.value),
            onFocus: c,
            onKeyDown: (m) => {
              m.key === "Enter" && a && (m.preventDefault(), u());
            },
            placeholder: g,
            "aria-label": g,
            className: "min-w-0 flex-1 bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          }
        )
      ]
    }
  );
}, ks = v(
  ({ option: t, isSelected: e, mode: r, isTabStop: n, onToggle: s, onKeyNavigate: a }, i) => r === "single" ? /* @__PURE__ */ f(
    "div",
    {
      ref: i,
      role: "radio",
      "aria-checked": e,
      tabIndex: n ? 0 : -1,
      className: R(
        "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary",
        Te()
      ),
      onClick: () => s(t.id),
      onKeyDown: (c) => {
        if (c.key === " " || c.key === "Enter") {
          c.preventDefault(), s(t.id);
          return;
        }
        a?.(c);
      },
      children: [
        /* @__PURE__ */ o(xs, { isSelected: e }),
        /* @__PURE__ */ o("span", { className: "text-base font-medium text-f1-foreground", children: t.label })
      ]
    }
  ) : /* @__PURE__ */ f(
    "div",
    {
      ref: i,
      className: R(
        "flex cursor-pointer items-center rounded-md pl-2 transition-colors hover:bg-f1-background-secondary"
      ),
      children: [
        /* @__PURE__ */ o(
          o1,
          {
            checked: e,
            onCheckedChange: () => s(t.id),
            title: t.label,
            hideLabel: !0
          }
        ),
        /* @__PURE__ */ o(
          "span",
          {
            className: "w-full py-2 pl-2 pr-2 text-base font-medium text-f1-foreground",
            onClick: () => s(t.id),
            children: t.label
          }
        )
      ]
    }
  )
);
ks.displayName = "OptionRow";
const S3 = ({
  mode: t,
  question: e,
  options: r,
  selectedOptionIds: n,
  allowCustomAnswer: s,
  hasSelection: a,
  hasCustomText: i,
  customAnswerText: c,
  isCustomAnswerActive: l,
  canProceed: d,
  customInputRef: u,
  autoFocus: h,
  onToggleOption: g,
  onActivateCustom: p,
  onChangeCustomText: m,
  onToggleCustomActive: C,
  onConfirm: w
}) => {
  const b = Ge(), P = (() => {
    if (t !== "single") return 0;
    const y = r.findIndex((M) => n.includes(M.id));
    return y >= 0 ? y : 0;
  })(), [A, N] = U(P), x = j([]);
  ie(() => {
    h && t === "single" && x.current[A]?.focus();
  }, []);
  const k = (y) => {
    if (t !== "single") return;
    const M = r.length - 1;
    if (M < 0) return;
    let _ = A;
    switch (y.key) {
      case "ArrowDown":
      case "ArrowRight":
        _ = A >= M ? 0 : A + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        _ = A <= 0 ? M : A - 1;
        break;
      case "Home":
        _ = 0;
        break;
      case "End":
        _ = M;
        break;
      default:
        return;
    }
    y.preventDefault(), N(_), x.current[_]?.focus();
  };
  return /* @__PURE__ */ f(
    "div",
    {
      className: "flex flex-col gap-0 overflow-y-auto px-1.5 py-0.5",
      role: t === "single" ? "radiogroup" : "group",
      "aria-label": e,
      children: [
        r.map((y, M) => /* @__PURE__ */ o(
          ge.div,
          {
            initial: b ? !1 : { opacity: 0, y: 4 },
            animate: { opacity: 1, y: 0 },
            transition: {
              duration: b ? 0 : 0.2,
              ease: [0.4, 0, 0.2, 1],
              delay: b ? 0 : 0.12 + M * 0.06
            },
            children: /* @__PURE__ */ o(
              ks,
              {
                ref: (_) => {
                  x.current[M] = _;
                },
                option: y,
                isSelected: n.includes(y.id),
                mode: t,
                isTabStop: t === "single" ? M === A : void 0,
                onToggle: g,
                onKeyNavigate: k
              }
            )
          },
          y.id
        )),
        s && /* @__PURE__ */ o(
          _3,
          {
            mode: t,
            hasSelection: a,
            hasCustomText: i,
            customAnswerText: c,
            isCustomAnswerActive: l,
            canProceed: d,
            inputRef: u,
            onActivate: p,
            onChangeText: m,
            onToggleActive: C,
            onConfirm: w
          }
        )
      ]
    }
  );
}, R3 = ({
  question: t,
  stepLabel: e,
  isFirstStep: r,
  isFinalStep: n,
  canProceed: s,
  onBack: a,
  onNext: i,
  onCancel: c
}) => {
  const l = he();
  return /* @__PURE__ */ f("div", { className: "flex items-start gap-0.5 pl-4 pr-3", children: [
    /* @__PURE__ */ o(
      Le,
      {
        className: "min-w-0 flex-1 text-lg font-semibold text-f1-foreground",
        lines: 3,
        children: t
      }
    ),
    e && /* @__PURE__ */ f("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ o(
        Ee,
        {
          variant: "ghost",
          size: "sm",
          onClick: a,
          disabled: r,
          label: l.ai.clarifyingQuestion.back,
          hideLabel: !0,
          icon: Po
        }
      ),
      /* @__PURE__ */ o("span", { className: "text-sm font-semibold text-f1-foreground-tertiary", children: e }),
      /* @__PURE__ */ o(
        Ee,
        {
          variant: "ghost",
          size: "sm",
          onClick: i,
          disabled: n || !s,
          label: l.ai.clarifyingQuestion.next,
          hideLabel: !0,
          icon: nr
        }
      )
    ] }),
    /* @__PURE__ */ o(
      Ee,
      {
        variant: "ghost",
        size: "sm",
        onClick: c,
        label: l.actions.cancel,
        hideLabel: !0,
        icon: ze
      }
    )
  ] });
}, N3 = "easeOut", T3 = 0.3, g8 = ({
  clarifyingQuestion: t,
  isSubmitDisabled: e
}) => /* @__PURE__ */ o(
  A3,
  {
    clarifyingQuestion: t,
    isSubmitDisabled: e
  }
), A3 = ({
  clarifyingQuestion: t,
  isSubmitDisabled: e
}) => {
  const r = he(), n = Ge(), {
    currentStep: s,
    currentStepIndex: a,
    totalSteps: i,
    toggleOption: c,
    confirm: l,
    skip: d,
    cancel: u,
    back: h,
    setCustomAnswerText: g,
    setCustomAnswerActive: p,
    activateCustomAnswer: m
  } = t, {
    question: C,
    options: w,
    selectedOptionIds: b,
    selectionMode: P,
    optional: A,
    allowCustomAnswer: N,
    customAnswerText: x,
    isCustomAnswerActive: k
  } = s, y = j(null), M = P ?? "single", _ = i > 1, L = a === 0, E = a === i - 1, T = _ ? r.t("ai.clarifyingQuestion.stepOf", {
    current: String(a + 1),
    total: String(i)
  }) : void 0, B = b.length > 0, X = (x ?? "").trim().length > 0, J = B || k && X || A === !0, te = e === !0 && E, oe = () => {
    te || l();
  }, ee = () => {
    te || d();
  }, S = (D) => {
    const re = M === "single" && b.includes(D);
    c(D), M === "single" && !E && !re && Promise.resolve().then(l);
  }, W = E ? r.ai.clarifyingQuestion.submit : r.ai.clarifyingQuestion.next, O = A === !0 && !B && !(k && X), Y = () => {
    m(), requestAnimationFrame(() => {
      y.current?.focus();
    });
  }, Ce = (D) => {
    D.key === "Escape" && (D.preventDefault(), u());
  }, me = n ? 0 : T3 / 2;
  return /* @__PURE__ */ f("div", { className: "flex flex-col", onKeyDown: Ce, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pt-3", children: /* @__PURE__ */ o(Ze, { mode: "wait", initial: !1, children: /* @__PURE__ */ f(
      ge.div,
      {
        className: "flex flex-col gap-3",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: me, ease: N3 },
        children: [
          /* @__PURE__ */ o(
            R3,
            {
              question: C,
              stepLabel: T,
              isFirstStep: L,
              isFinalStep: E,
              canProceed: J,
              onBack: h,
              onNext: l,
              onCancel: u
            }
          ),
          /* @__PURE__ */ o(
            S3,
            {
              mode: M,
              question: C,
              options: w,
              selectedOptionIds: b,
              allowCustomAnswer: N,
              hasSelection: B,
              hasCustomText: X,
              customAnswerText: x,
              isCustomAnswerActive: k,
              canProceed: J,
              customInputRef: y,
              onToggleOption: S,
              onActivateCustom: Y,
              onChangeCustomText: g,
              onToggleCustomActive: p,
              onConfirm: oe
            }
          )
        ]
      },
      a
    ) }) }),
    /* @__PURE__ */ o(
      E3,
      {
        canProceed: J,
        submitDisabled: te,
        label: W,
        onConfirm: oe,
        onSkip: ee,
        showSkip: O
      }
    )
  ] });
};
function co(t, e, r, n) {
  const s = Math.max(1, Math.min(t, e)), a = Math.min(r, 20), c = Math.min(a + n, s), l = Math.min(c, Math.floor(t / 2)), d = Math.min(c, Math.floor(e / 2)), u = (Y) => Y / t * 2 - 1, h = (Y) => Y / e * 2 - 1, g = 0, p = t, m = 0, C = e, w = l, b = t - l, P = d, A = e - d, N = u(g), x = u(p), k = h(m), y = h(C), M = u(w), _ = u(b), L = h(P), E = h(A), T = 0, B = 0, X = 1, J = 1, te = l / t, oe = 1 - l / t, ee = d / e, S = 1 - d / e, W = new Float32Array([
    // Top strip
    N,
    k,
    x,
    k,
    N,
    L,
    N,
    L,
    x,
    k,
    x,
    L,
    // Bottom strip
    N,
    E,
    x,
    E,
    N,
    y,
    N,
    y,
    x,
    E,
    x,
    y,
    // Left strip
    N,
    L,
    M,
    L,
    N,
    E,
    N,
    E,
    M,
    L,
    M,
    E,
    // Right strip
    _,
    L,
    x,
    L,
    _,
    E,
    _,
    E,
    x,
    L,
    x,
    E
  ]), O = new Float32Array([
    // Top strip
    T,
    B,
    X,
    B,
    T,
    ee,
    T,
    ee,
    X,
    B,
    X,
    ee,
    // Bottom strip
    T,
    S,
    X,
    S,
    T,
    J,
    T,
    J,
    X,
    S,
    X,
    J,
    // Left strip
    T,
    ee,
    te,
    ee,
    T,
    S,
    T,
    S,
    te,
    ee,
    te,
    S,
    // Right strip
    oe,
    ee,
    X,
    ee,
    oe,
    S,
    oe,
    S,
    X,
    ee,
    X,
    S
  ]);
  return { positions: W, uvs: O };
}
function lo(t, e, r) {
  const n = t.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  if (t.shaderSource(n, r), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)) {
    const s = t.getShaderInfoLog(n) || "Unknown shader error";
    throw t.deleteShader(n), new Error(s);
  }
  return n;
}
function V3(t, e, r) {
  const n = lo(t, t.VERTEX_SHADER, e), s = lo(t, t.FRAGMENT_SHADER, r), a = t.createProgram();
  if (!a) throw new Error("Failed to create program");
  if (t.attachShader(a, n), t.attachShader(a, s), t.linkProgram(a), !t.getProgramParameter(a, t.LINK_STATUS)) {
    const i = t.getProgramInfoLog(a) || "Unknown link error";
    throw t.deleteProgram(a), t.deleteShader(n), t.deleteShader(s), new Error(i);
  }
  return t.deleteShader(n), t.deleteShader(s), a;
}
const F3 = `#version 300 es
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
`, P3 = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, $3 = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function I3(t) {
  const e = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${t}`);
  const [, r, n, s] = e;
  return [parseInt(r) / 255, parseInt(n) / 255, parseInt(s) / 255];
}
class v8 {
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
  constructor(e = {}) {
    this.options = {
      width: e.width ?? 600,
      height: e.height ?? 600,
      ratio: e.ratio ?? window.devicePixelRatio ?? 1,
      borderWidth: e.borderWidth ?? 8,
      glowWidth: e.glowWidth ?? 200,
      borderRadius: e.borderRadius ?? 8,
      mode: e.mode ?? "light",
      ...e
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
    const e = () => {
      if (!this.running || !this.glr) return;
      this.rafId = requestAnimationFrame(e);
      const r = performance.now();
      if (r - this.lastTime < 1e3 / 32) return;
      this.lastTime = r;
      const s = (r - this.startTime) * 1e-3;
      this.render(s);
    };
    this.rafId = requestAnimationFrame(e);
  }
  pause() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = !0, this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
    const { gl: e, vao: r, positionBuffer: n, uvBuffer: s, program: a } = this.glr;
    r && e.deleteVertexArray(r), n && e.deleteBuffer(n), s && e.deleteBuffer(s), e.deleteProgram(a), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(e, r, n) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = e, this.options.height = r, n && (this.options.ratio = n), !this.running) return;
    const { gl: s, program: a, vao: i, positionBuffer: c, uvBuffer: l, uResolution: d } = this.glr, u = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, h = Math.max(1, Math.floor(e * u)), g = Math.max(1, Math.floor(r * u));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${r}px`, (this.canvas.width !== h || this.canvas.height !== g) && (this.canvas.width = h, this.canvas.height = g), s.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(s, "resize: after viewport setup");
    const { positions: p, uvs: m } = co(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * u,
      this.options.glowWidth * u
    );
    s.bindVertexArray(i), s.bindBuffer(s.ARRAY_BUFFER, c), s.bufferData(s.ARRAY_BUFFER, p, s.STATIC_DRAW);
    const C = s.getAttribLocation(a, "aPosition");
    s.enableVertexAttribArray(C), s.vertexAttribPointer(C, 2, s.FLOAT, !1, 0, 0), this.checkGLError(s, "resize: after position buffer update"), s.bindBuffer(s.ARRAY_BUFFER, l), s.bufferData(s.ARRAY_BUFFER, m, s.STATIC_DRAW);
    const w = s.getAttribLocation(a, "aUV");
    s.enableVertexAttribArray(w), s.vertexAttribPointer(w, 2, s.FLOAT, !1, 0, 0), this.checkGLError(s, "resize: after UV buffer update"), s.useProgram(a), s.uniform2f(d, this.canvas.width, this.canvas.height), s.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * u), s.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * u), s.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * u), this.checkGLError(s, "resize: after uniform updates");
    const b = performance.now();
    this.lastTime = b;
    const P = (b - this.startTime) * 1e-3;
    this.render(P);
  }
  /**
   * Automatically resizes the canvas to match the dimensions of the given element.
   * @note using ResizeObserver
   */
  autoResize(e) {
    this.observer && this.observer.disconnect(), this.observer = new ResizeObserver(() => {
      const r = e.getBoundingClientRect();
      this.resize(r.width, r.height);
    }), this.observer.observe(e);
  }
  fadeIn() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((e, r) => {
      const n = this.canvas.animate(
        [
          { opacity: 0, transform: "scale(1.2)" },
          { opacity: 1, transform: "scale(1)" }
        ],
        { duration: 300, easing: "ease-out", fill: "forwards" }
      );
      n.onfinish = () => e(), n.oncancel = () => r("canceled");
    });
  }
  fadeOut() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((e, r) => {
      const n = this.canvas.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.2)" }
        ],
        { duration: 300, easing: "ease-in", fill: "forwards" }
      );
      n.onfinish = () => e(), n.oncancel = () => r("canceled");
    });
  }
  checkGLError(e, r) {
    let n = e.getError();
    if (n !== e.NO_ERROR)
      for (console.error(`WebGL Error in ${r}`); n !== e.NO_ERROR; ) {
        const s = this.getGLErrorName(e, n);
        console.error(`${s} (0x${n.toString(16)})`), n = e.getError();
      }
  }
  getGLErrorName(e, r) {
    switch (r) {
      case e.INVALID_ENUM:
        return "INVALID_ENUM";
      case e.INVALID_VALUE:
        return "INVALID_VALUE";
      case e.INVALID_OPERATION:
        return "INVALID_OPERATION";
      case e.INVALID_FRAMEBUFFER_OPERATION:
        return "INVALID_FRAMEBUFFER_OPERATION";
      case e.OUT_OF_MEMORY:
        return "OUT_OF_MEMORY";
      case e.CONTEXT_LOST_WEBGL:
        return "CONTEXT_LOST_WEBGL";
      default:
        return "UNKNOWN_ERROR";
    }
  }
  setupGL() {
    const e = this.canvas.getContext("webgl2", {
      antialias: !1,
      alpha: !0
    });
    if (!e)
      throw new Error("WebGL2 is required but not available.");
    const r = V3(e, P3, F3);
    this.checkGLError(e, "setupGL: after createProgram");
    const n = e.createVertexArray();
    e.bindVertexArray(n), this.checkGLError(e, "setupGL: after VAO creation");
    const s = this.canvas.width || 2, a = this.canvas.height || 2, { positions: i, uvs: c } = co(
      s,
      a,
      this.options.borderWidth,
      this.options.glowWidth
    ), l = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW);
    const d = e.getAttribLocation(r, "aPosition");
    e.enableVertexAttribArray(d), e.vertexAttribPointer(d, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const u = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, u), e.bufferData(e.ARRAY_BUFFER, c, e.STATIC_DRAW);
    const h = e.getAttribLocation(r, "aUV");
    e.enableVertexAttribArray(h), e.vertexAttribPointer(h, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const g = e.getUniformLocation(r, "uResolution"), p = e.getUniformLocation(r, "uTime"), m = e.getUniformLocation(r, "uBorderWidth"), C = e.getUniformLocation(r, "uGlowWidth"), w = e.getUniformLocation(r, "uBorderRadius"), b = e.getUniformLocation(r, "uColors"), P = e.getUniformLocation(r, "uGlowExponent"), A = e.getUniformLocation(r, "uGlowFactor");
    e.useProgram(r), e.uniform1f(m, this.options.borderWidth), e.uniform1f(C, this.options.glowWidth), e.uniform1f(w, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(P, 2), e.uniform1f(A, 1.8)) : (e.uniform1f(P, 1), e.uniform1f(A, 1));
    const N = (this.options.colors || $3).map(I3);
    for (let x = 0; x < N.length; x++)
      e.uniform3f(
        e.getUniformLocation(r, `uColors[${x}]`),
        ...N[x]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: r,
      vao: n,
      positionBuffer: l,
      uvBuffer: u,
      uResolution: g,
      uTime: p,
      uBorderWidth: m,
      uGlowWidth: C,
      uBorderRadius: w,
      uColors: b
    };
  }
  render(e) {
    if (!this.glr) return;
    const { gl: r, program: n, vao: s, uTime: a } = this.glr;
    r.useProgram(n), r.bindVertexArray(s), r.uniform1f(a, e), r.disable(r.DEPTH_TEST), r.disable(r.CULL_FACE), r.disable(r.BLEND), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.drawArrays(r.TRIANGLES, 0, 24), this.checkGLError(r, "render: after draw call"), r.bindVertexArray(null);
  }
}
const uo = ["lowp", "mediump", "highp"], H3 = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, O3 = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, fo = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, ho = "iTime", po = "iTimeDelta", mo = "iDate", go = "iFrame", vo = "iMouse", Co = "iResolution", j3 = "iChannel", wo = "iChannelResolution", xo = "iDeviceOrientation";
function D3(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function Z3(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function B3(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const U3 = (t, e, r, n) => {
  if (B3(r, n))
    switch (r) {
      case "2f":
        return t.uniform2f(e, n[0], n[1]);
      case "3f":
        return t.uniform3f(e, n[0], n[1], n[2]);
      case "4f":
        return t.uniform4f(e, n[0], n[1], n[2], n[3]);
      case "2i":
        return t.uniform2i(e, n[0], n[1]);
      case "3i":
        return t.uniform3i(e, n[0], n[1], n[2]);
      case "4i":
        return t.uniform4i(e, n[0], n[1], n[2], n[3]);
    }
  if (typeof n == "number")
    return r === "1i" ? t.uniform1i(e, n) : t.uniform1f(e, n);
  switch (r) {
    case "1iv":
      return t.uniform1iv(e, n);
    case "2iv":
      return t.uniform2iv(e, n);
    case "3iv":
      return t.uniform3iv(e, n);
    case "4iv":
      return t.uniform4iv(e, n);
    case "1fv":
      return t.uniform1fv(e, n);
    case "2fv":
      return t.uniform2fv(e, n);
    case "3fv":
      return t.uniform3fv(e, n);
    case "4fv":
      return t.uniform4fv(e, n);
    case "Matrix2fv":
      return t.uniformMatrix2fv(e, !1, n);
    case "Matrix3fv":
      return t.uniformMatrix3fv(e, !1, n);
    case "Matrix4fv":
      return t.uniformMatrix4fv(e, !1, n);
  }
}, z3 = (t) => {
  switch (t) {
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
        Xe(
          `The uniform type "${t}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, Er = 9729, ko = 9728, W3 = 9987, yo = 33071, bo = 10497;
class G3 {
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
  constructor(e) {
    this.gl = e;
  }
  updateTexture = (e, r, n) => {
    const { gl: s } = this, a = 0, i = s.RGBA, c = s.RGBA, l = s.UNSIGNED_BYTE;
    s.bindTexture(s.TEXTURE_2D, e), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, n), s.texImage2D(
      s.TEXTURE_2D,
      a,
      i,
      c,
      l,
      r
    );
  };
  setupVideo = (e) => {
    const r = document.createElement("video");
    let n = !1, s = !1;
    r.autoplay = !0, r.muted = !0, r.loop = !0, r.crossOrigin = "anonymous";
    const a = () => {
      n && s && (this.isLoaded = !0);
    };
    return r.addEventListener(
      "playing",
      () => {
        n = !0, this.width = r.videoWidth || 0, this.height = r.videoHeight || 0, a();
      },
      !0
    ), r.addEventListener(
      "timeupdate",
      () => {
        s = !0, a();
      },
      !0
    ), r.src = e, r;
  };
  makePowerOf2 = (e) => e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageBitmap ? (this.pow2canvas === void 0 && (this.pow2canvas = document.createElement("canvas")), this.pow2canvas.width = 2 ** Math.floor(Math.log(e.width) / Math.LN2), this.pow2canvas.height = 2 ** Math.floor(Math.log(e.height) / Math.LN2), this.pow2canvas.getContext("2d")?.drawImage(
    e,
    0,
    0,
    this.pow2canvas.width,
    this.pow2canvas.height
  ), console.warn(
    Xe(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: r } = this, {
      url: n,
      wrapS: s,
      wrapT: a,
      minFilter: i,
      magFilter: c,
      flipY: l = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          Xe(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const d = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), u = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (d === null && u === null)
      return Promise.reject(
        new Error(
          Xe(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: s, wrapT: a, minFilter: i, magFilter: c, flipY: l });
    const h = 0, g = r.RGBA, p = 1, m = 1, C = 0, w = r.RGBA, b = r.UNSIGNED_BYTE, P = new Uint8Array([255, 255, 255, 0]), A = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, A), r.texImage2D(
      r.TEXTURE_2D,
      h,
      g,
      p,
      m,
      C,
      w,
      b,
      P
    ), u) {
      const y = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = A, this.source = y, this.isVideo = !0, y.play().then(() => this);
    }
    async function N() {
      return new Promise((y, M) => {
        const _ = new Image();
        _.crossOrigin = "anonymous", _.onload = () => {
          y(_);
        }, _.onerror = () => {
          M(new Error(Xe(`failed loading url: ${n}`)));
        }, _.src = n ?? "";
      });
    }
    let x = await N(), k = (x.width & x.width - 1) === 0 && (x.height & x.height - 1) === 0;
    return (e.wrapS !== yo || e.wrapT !== yo || e.minFilter !== ko && e.minFilter !== Er) && !k && (x = this.makePowerOf2(x), k = !0), r.bindTexture(r.TEXTURE_2D, A), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, l), r.texImage2D(
      r.TEXTURE_2D,
      h,
      g,
      w,
      b,
      x
    ), k && e.minFilter !== ko && e.minFilter !== Er && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_S,
      this.wrapS || bo
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_T,
      this.wrapT || bo
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MIN_FILTER,
      this.minFilter || W3
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MAG_FILTER,
      this.magFilter || Er
    ), this._webglTexture = A, this.source = x, this.isVideo = !1, this.isLoaded = !0, this.width = x.width || 0, this.height = x.height || 0, this;
  };
}
const Xe = (t) => `react-shaders: ${t}`, Lo = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, Mo = (t, e, r) => t * (1 - r) + e * r, q3 = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function X3({
  fs: t,
  vs: e = fo,
  textures: r = [],
  uniforms: n,
  clearColor: s = [0, 0, 0, 1],
  precision: a = "highp",
  style: i,
  contextAttributes: c = {},
  lerp: l = 1,
  devicePixelRatio: d = 1,
  onDoneLoadingTextures: u,
  onError: h = console.error,
  onWarning: g = console.warn
}) {
  const p = j(null), m = j(null), C = j(null), w = j(null), b = j(void 0), P = j(void 0), A = j(!1), N = j(void 0), x = j(0), k = j([0, 0]), y = j([]), M = j(0), _ = j(void 0), L = j({
    [ho]: { type: "float", isNeeded: !1, value: 0 },
    [po]: { type: "float", isNeeded: !1, value: 0 },
    [mo]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [vo]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Co]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [go]: { type: "int", isNeeded: !1, value: 0 },
    [xo]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), E = j(n), T = (V, I) => {
    const H = "width" in V ? V.width ?? 0 : 0, K = "height" in V ? V.height ?? 0 : 0, z = L.current.iChannelResolution;
    if (!z) return;
    const se = Array.isArray(z.value) ? z.value : z.value = [];
    se[I * 3] = H * d, se[I * 3 + 1] = K * d, se[I * 3 + 2] = 0;
  }, B = () => {
    p.current && (m.current = p.current.getContext("webgl", c) || p.current.getContext(
      "experimental-webgl",
      c
    ), m.current?.getExtension("OES_standard_derivatives"), m.current?.getExtension("EXT_shader_texture_lod"));
  }, X = () => {
    const V = m.current;
    C.current = V?.createBuffer() ?? null, V?.bindBuffer(V.ARRAY_BUFFER, C.current);
    const I = [
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
    V?.bufferData(V.ARRAY_BUFFER, new Float32Array(I), V.STATIC_DRAW);
  }, J = ({
    alpha: V,
    beta: I,
    gamma: H
  }) => {
    L.current.iDeviceOrientation.value = [
      V ?? 0,
      I ?? 0,
      H ?? 0,
      window.orientation ?? 0
    ];
  }, te = (V) => {
    const [I = 0, H = 0] = Lo(V), K = I - (N.current?.left ?? 0) - window.pageXOffset, z = (N.current?.height ?? 0) - H - (N.current?.top ?? 0) - window.pageYOffset;
    A.current = !0;
    const se = Array.isArray(L.current.iMouse?.value) ? L.current.iMouse.value : void 0;
    se && (se[2] = K, se[3] = z), k.current[0] = K, k.current[1] = z;
  }, oe = (V) => {
    N.current = p.current?.getBoundingClientRect();
    const [I = 0, H = 0] = Lo(V), K = I - (N.current?.left ?? 0), z = (N.current?.height ?? 0) - H - (N.current?.top ?? 0);
    if (l !== 1)
      k.current[0] = K, k.current[1] = z;
    else {
      const se = Array.isArray(L.current.iMouse?.value) ? L.current.iMouse.value : void 0;
      se && (se[0] = K, se[1] = z);
    }
  }, ee = () => {
    const V = Array.isArray(L.current.iMouse?.value) ? L.current.iMouse.value : void 0;
    V && (V[2] = 0, V[3] = 0);
  }, S = () => {
    const V = m.current;
    if (!V) return;
    N.current = p.current?.getBoundingClientRect();
    const I = d, H = Math.floor(
      (N.current?.width ?? 1) * I
    ), K = Math.floor(
      (N.current?.height ?? 1) * I
    );
    if (V.canvas.width = H, V.canvas.height = K, L.current.iResolution?.isNeeded && w.current) {
      const z = V.getUniformLocation(
        w.current,
        Co
      );
      V.uniform2fv(z, [V.canvas.width, V.canvas.height]);
    }
  }, W = (V, I) => {
    const H = m.current;
    if (!H) return null;
    const K = H.createShader(V);
    if (!K) return null;
    if (H.shaderSource(K, I), H.compileShader(K), !H.getShaderParameter(K, H.COMPILE_STATUS)) {
      g?.(Xe(`Error compiling the shader:
${I}`));
      const z = H.getShaderInfoLog(K);
      H.deleteShader(K), h?.(Xe(`Shader compiler log: ${z}`));
    }
    return K;
  }, O = (V, I) => {
    const H = m.current;
    if (!H) return;
    const K = W(H.FRAGMENT_SHADER, V), z = W(H.VERTEX_SHADER, I);
    if (w.current = H.createProgram(), !(!w.current || !z || !K)) {
      if (H.attachShader(w.current, z), H.attachShader(w.current, K), H.linkProgram(w.current), !H.getProgramParameter(w.current, H.LINK_STATUS)) {
        h?.(
          Xe(
            `Unable to initialize the shader program: ${H.getProgramInfoLog(
              w.current
            )}`
          )
        );
        return;
      }
      H.useProgram(w.current), b.current = H.getAttribLocation(
        w.current,
        "aVertexPosition"
      ), H.enableVertexAttribArray(b.current);
    }
  }, Y = () => {
    if (n)
      for (const V of Object.keys(n)) {
        const I = n[V];
        if (!I) continue;
        const { value: H, type: K } = I, z = z3(K);
        if (!z) continue;
        const se = {};
        if (D3(K, H)) {
          const xe = K.length, ue = Number.parseInt(K.charAt(xe - 3)), Re = Math.floor(H.length / (ue * ue));
          H.length > ue * ue && (se.arraySize = `[${Re}]`);
        } else Z3(K, H) && (se.arraySize = `[${Math.floor(H.length / Number.parseInt(K.charAt(0)))}]`);
        L.current[V] = {
          type: z,
          isNeeded: !1,
          value: H,
          ...se
        };
      }
  }, Ce = () => {
    const V = m.current;
    if (V)
      if (r && r.length > 0) {
        L.current[`${wo}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const I = r.map(
          (H, K) => (L.current[`${j3}${K}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, T(H, K), y.current[K] = new G3(V), y.current[K]?.load(H).then((z) => {
            T(z, K);
          }))
        );
        Promise.all(I).then(() => {
          u && u();
        }).catch((H) => {
          h?.(H), u && u();
        });
      } else u && u();
  }, me = (V) => {
    const I = uo.includes(a ?? "highp"), H = `precision ${I ? a : uo[1]} float;
`;
    I || g?.(
      Xe(
        `wrong precision type ${a}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let K = H.concat(`#define DPR ${d.toFixed(1)}
`).concat(V.replace(/texture\(/g, "texture2D("));
    for (const se of Object.keys(L.current))
      if (V.includes(se)) {
        const xe = L.current[se];
        if (!xe) continue;
        K = q3(
          K,
          `uniform ${xe.type} ${se}${xe.arraySize || ""}; 
`,
          K.lastIndexOf(H) + H.length
        ), xe.isNeeded = !0;
      }
    return V.includes("mainImage") && (K = K.concat(H3)), K;
  }, D = (V) => {
    const I = m.current;
    if (!I || !w.current) return;
    const H = M.current ? (V - M.current) / 1e3 : 0;
    M.current = V;
    const K = E.current;
    if (K)
      for (const z of Object.keys(K)) {
        const se = K[z];
        if (se && L.current[z]?.isNeeded) {
          if (!w.current) return;
          const xe = I.getUniformLocation(
            w.current,
            z
          );
          if (!xe) return;
          U3(
            I,
            xe,
            se.type,
            se.value
          );
        }
      }
    if (L.current.iMouse?.isNeeded) {
      const z = I.getUniformLocation(
        w.current,
        vo
      );
      I.uniform4fv(z, L.current.iMouse.value);
    }
    if (L.current.iChannelResolution?.isNeeded) {
      const z = I.getUniformLocation(
        w.current,
        wo
      );
      I.uniform3fv(
        z,
        L.current.iChannelResolution.value
      );
    }
    if (L.current.iDeviceOrientation?.isNeeded) {
      const z = I.getUniformLocation(
        w.current,
        xo
      );
      I.uniform4fv(
        z,
        L.current.iDeviceOrientation.value
      );
    }
    if (L.current.iTime?.isNeeded) {
      const z = I.getUniformLocation(
        w.current,
        ho
      );
      I.uniform1f(z, x.current += H);
    }
    if (L.current.iTimeDelta?.isNeeded) {
      const z = I.getUniformLocation(
        w.current,
        po
      );
      I.uniform1f(z, H);
    }
    if (L.current.iDate?.isNeeded) {
      const z = /* @__PURE__ */ new Date(), se = z.getMonth() + 1, xe = z.getDate(), ue = z.getFullYear(), Re = z.getHours() * 60 * 60 + z.getMinutes() * 60 + z.getSeconds() + z.getMilliseconds() * 1e-3, He = I.getUniformLocation(
        w.current,
        mo
      );
      I.uniform4fv(He, [ue, se, xe, Re]);
    }
    if (L.current.iFrame?.isNeeded) {
      const z = I.getUniformLocation(
        w.current,
        go
      ), se = L.current.iFrame.value;
      I.uniform1i(z, se), L.current.iFrame.value = se + 1;
    }
    if (y.current.length > 0)
      for (let z = 0; z < y.current.length; z++) {
        const se = y.current[z];
        if (!se) return;
        const { isVideo: xe, _webglTexture: ue, source: Re, flipY: He, isLoaded: at } = se;
        if (!at || !ue || !Re) return;
        if (L.current[`iChannel${z}`]?.isNeeded) {
          if (!w.current) return;
          const Ae = I.getUniformLocation(
            w.current,
            `iChannel${z}`
          );
          I.activeTexture(I.TEXTURE0 + z), I.bindTexture(I.TEXTURE_2D, ue), I.uniform1i(Ae, z), xe && se.updateTexture(
            ue,
            Re,
            He
          );
        }
      }
  }, re = (V) => {
    const I = m.current;
    if (!I) return;
    I.viewport(0, 0, I.drawingBufferWidth, I.drawingBufferHeight), I.clear(I.COLOR_BUFFER_BIT | I.DEPTH_BUFFER_BIT), I.bindBuffer(I.ARRAY_BUFFER, C.current), I.vertexAttribPointer(
      b.current ?? 0,
      3,
      I.FLOAT,
      !1,
      0,
      0
    ), D(V), I.drawArrays(I.TRIANGLE_STRIP, 0, 4);
    const H = L.current.iMouse?.value;
    if (L.current.iMouse?.isNeeded && l !== 1 && Array.isArray(H)) {
      const K = H[0] ?? 0, z = H[1] ?? 0;
      H[0] = Mo(K, k.current[0] ?? 0, l), H[1] = Mo(z, k.current[1] ?? 0, l);
    }
    P.current = requestAnimationFrame(re);
  }, de = () => {
    const V = { passive: !0 };
    L.current.iMouse?.isNeeded && p.current && (p.current.addEventListener("mousemove", oe, V), p.current.addEventListener("mouseout", ee, V), p.current.addEventListener("mouseup", ee, V), p.current.addEventListener("mousedown", te, V), p.current.addEventListener("touchmove", oe, V), p.current.addEventListener("touchend", ee, V), p.current.addEventListener("touchstart", te, V)), L.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      J,
      V
    ), p.current && (_.current = new ResizeObserver(S), _.current.observe(p.current), window.addEventListener("resize", S, V));
  }, be = () => {
    const V = { passive: !0 };
    L.current.iMouse?.isNeeded && p.current && (p.current.removeEventListener("mousemove", oe, V), p.current.removeEventListener("mouseout", ee, V), p.current.removeEventListener("mouseup", ee, V), p.current.removeEventListener("mousedown", te, V), p.current.removeEventListener("touchmove", oe, V), p.current.removeEventListener("touchend", ee, V), p.current.removeEventListener("touchstart", te, V)), L.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      J,
      V
    ), _.current && (_.current.disconnect(), window.removeEventListener("resize", S, V));
  };
  return ie(() => {
    E.current = n;
  }, [n]), ie(() => {
    const V = y.current;
    function I() {
      B();
      const H = m.current;
      H && p.current && (H.clearColor(...s), H.clearDepth(1), H.enable(H.DEPTH_TEST), H.depthFunc(H.LEQUAL), H.viewport(0, 0, p.current.width, p.current.height), p.current.height = p.current.clientHeight, p.current.width = p.current.clientWidth, Y(), Ce(), O(me(t || O3), e || fo), X(), requestAnimationFrame(re), de(), S());
    }
    return requestAnimationFrame(I), () => {
      const H = m.current;
      if (H) {
        if (H.getExtension("WEBGL_lose_context")?.loseContext(), H.useProgram(null), H.deleteProgram(w.current ?? null), V.length > 0)
          for (const K of V)
            H.deleteTexture(K._webglTexture);
        w.current = null;
      }
      be(), cancelAnimationFrame(P.current ?? 0);
    };
  }, []), /* @__PURE__ */ o(
    "canvas",
    {
      ref: p,
      style: { height: "100%", width: "100%", ...i }
    }
  );
}
const Y3 = `
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
}`, K3 = 10, Q3 = 2, J3 = 0.5, ef = 0.2, tf = 1.5, Fe = {
  duration: 0.5,
  ease: "easeOut"
}, Eo = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function Bt(t) {
  const [e, r] = U(t), n = hc(t), s = j(null);
  Tc(n, "change", (i) => r(i));
  const a = Q(
    (i, c) => {
      s.current = tl(n, i, c);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: s, animate: a };
}
function rf(t, e) {
  const [r, n] = U(K3), {
    value: s,
    animate: a,
    motionValue: i
  } = Bt(ef), { value: c, animate: l } = Bt(Q3), { value: d, animate: u } = Bt(J3), { value: h, animate: g } = Bt(tf), p = Nc(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return ie(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), a(0.2, Fe), l(1.2, Fe), u(0.4, Fe), g(1, Fe);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), a(0.3, { type: "spring", duration: 1, bounce: 0.35 }), l(1, Fe), u(0.7, Fe), g([1.5, 2], Eo);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), a(0.3, Fe), l(0.5, Fe), u(1, Fe), g([0.5, 2.5], Eo);
        return;
      case "speaking":
        n(70), a(0.3, Fe), l(0.75, Fe), u(1.25, Fe), g(1.5, Fe);
        return;
    }
  }, [
    t,
    a,
    l,
    u,
    g
  ]), ie(() => {
    t === "speaking" && p > 0 && !i.isAnimating() && a(0.2 + 0.2 * p, { duration: 0 });
  }, [
    t,
    p,
    i,
    a,
    l,
    u,
    g
  ]), {
    speed: r,
    scale: s,
    amplitude: c,
    frequency: d,
    brightness: h
  };
}
const nf = We({
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
function of(t) {
  const e = t.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, r, n, s] = e;
    return [r, n, s].map((i = "00") => parseInt(i, 16) / 255);
  }
}
function ys({
  shape: t = 1,
  speed: e = 1,
  amplitude: r = 0.5,
  frequency: n = 0.5,
  scale: s = 0.2,
  blur: a = 1,
  color: i = "#FF355E",
  colorShift: c = 1,
  brightness: l = 1,
  themeMode: d = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: u,
  className: h,
  ...g
}) {
  const p = le(() => of(i), [i]);
  return /* @__PURE__ */ o("div", { ref: u, className: h, ...g, children: /* @__PURE__ */ o(
    X3,
    {
      fs: Y3,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: e },
        // Edge blur/softness
        uBlur: { type: "1f", value: a },
        // Shape scale
        uScale: { type: "1f", value: s },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: t },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: n },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: r },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: l },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: c },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: d === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: p ?? [0, 0.7, 1] }
      },
      onError: (m) => {
        console.error("Shader error:", m);
      },
      onWarning: (m) => {
        console.warn("Shader warning:", m);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
ys.displayName = "AuraShader";
function C8({
  size: t = "lg",
  state: e,
  color: r,
  colorShift: n = 0.05,
  audioTrack: s,
  themeMode: a,
  className: i,
  ref: c,
  ...l
}) {
  const { speed: d, scale: u, amplitude: h, frequency: g, brightness: p } = rf(e, s);
  return /* @__PURE__ */ o(
    ys,
    {
      ref: c,
      blur: 0.2,
      color: r,
      colorShift: n,
      speed: d,
      scale: u,
      themeMode: a,
      amplitude: h,
      frequency: g,
      brightness: p,
      className: R(
        nf({ size: t }),
        "overflow-hidden rounded-full",
        i
      ),
      ...l
    }
  );
}
const w8 = ({
  text: t,
  description: e,
  avatar: r,
  confirmationText: n,
  onConfirm: s,
  cancelText: a,
  onCancel: i,
  stackAt: c = "sm"
}) => /* @__PURE__ */ o(
  Ju,
  {
    title: t,
    description: e,
    avatar: r,
    stackAt: c,
    confirmAction: {
      label: n,
      onClick: s
    },
    rejectAction: {
      label: a,
      onClick: i
    }
  }
), sf = We({
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
}), bs = We({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), af = We({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), Ut = We({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), cf = ({
  description: t,
  isRevealed: e,
  onAskOne: r
}) => {
  const n = he(), s = Ge();
  return /* @__PURE__ */ f($e, { children: [
    t && /* @__PURE__ */ o("span", { className: R(af(), "truncate"), children: t }),
    /* @__PURE__ */ o(Ze, { children: r && e && /* @__PURE__ */ o(
      ge.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: s ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ o(
          x1,
          {
            size: "md",
            label: n.ai.ask,
            onClick: (a) => {
              a.stopPropagation(), r();
            }
          }
        )
      }
    ) })
  ] });
}, lf = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), df = ({ balance: t }) => /* @__PURE__ */ o(
  vc,
  {
    amount: t.amount,
    percentage: t.percentage ?? void 0,
    invertStatus: t.invertStatus,
    hint: t.hint
  }
), uf = (t) => {
  const {
    heading: e,
    label: r,
    content: n,
    shouldFadeContent: s = !1,
    fadeTransition: a
  } = t;
  return /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ o("span", { className: R(bs()), children: e }),
    /* @__PURE__ */ f(
      ge.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: s ? 0 : 1 },
        transition: a,
        children: [
          n === "person" && /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ o(
              Qo,
              {
                firstName: t.avatar.firstName,
                lastName: t.avatar.lastName,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ o("span", { className: R(Ut()), children: r })
          ] }),
          n === "people" && /* @__PURE__ */ o(
            pc,
            {
              type: "person",
              avatars: t.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ o(
              mc,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ o("span", { className: R(Ut()), children: r })
          ] }),
          n === "company" && /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ o(
              en,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ o("span", { className: R(Ut()), children: r })
          ] }),
          n === "alert" && /* @__PURE__ */ o(gc, { text: t.alertLabel, level: t.level }),
          n === "balance" && /* @__PURE__ */ o(df, { balance: t.balance })
        ]
      }
    ),
    r && !lf.has(n) && /* @__PURE__ */ o(
      ge.span,
      {
        className: R(Ut()),
        animate: { opacity: s ? 0 : 1 },
        transition: a,
        children: r
      }
    )
  ] });
}, Ls = {
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
function ff(t, e) {
  const r = t[0]?.value ?? 0, n = t[t.length - 1]?.value ?? 0, s = Math.sign(n - r), a = e ? s * -1 : s;
  return a > 0 ? "positive" : a < 0 ? "negative" : "neutral";
}
const hf = ({
  cx: t,
  cy: e,
  index: r,
  dataLength: n,
  color: s
}) => r !== n - 1 || t == null || e == null ? null : /* @__PURE__ */ o("circle", { cx: t, cy: e, r: 2, fill: s, stroke: "none" }), pf = ({
  label: t,
  direction: e
}) => {
  const r = Ls[e];
  return /* @__PURE__ */ o(
    "span",
    {
      className: R(
        "absolute right-0 inline-flex items-center rounded-full border border-solid bg-f1-background px-1.5 py-px text-xs font-medium shadow",
        e === "negative" ? "bottom-0 translate-y-full" : "top-0 -translate-y-full",
        r.border,
        {
          positive: "text-f1-foreground-positive",
          negative: "text-f1-foreground-critical",
          neutral: "text-f1-foreground-secondary"
        }[e]
      ),
      "data-testid": "sparkline-balance",
      children: t
    }
  );
}, mf = ({
  data: t,
  label: e,
  invertStatus: r
}) => {
  const s = `sparkline-gradient-${No().replace(/:/g, "")}`, a = ff(t, r), i = Ls[a];
  return /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ f(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${a} trend`,
      children: [
        /* @__PURE__ */ o(Cc, { width: "100%", height: "100%", children: /* @__PURE__ */ f(
          wc,
          {
            data: t,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ o("defs", { children: /* @__PURE__ */ f("linearGradient", { id: s, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ o("stop", { offset: "5%", stopColor: i.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ o("stop", { offset: "95%", stopColor: i.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ o(xc, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ o(
                kc,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: i.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${s})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (c) => /* @__PURE__ */ Rt(
                    hf,
                    {
                      ...c,
                      key: c.index,
                      dataLength: t.length,
                      color: i.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ o(pf, { label: e, direction: a })
      ]
    }
  ) });
}, Ms = v(
  (t, e) => {
    const {
      description: r,
      heading: n,
      label: s,
      selected: a = !1,
      onClick: i,
      onAskOne: c,
      className: l,
      ...d
    } = t, [u, h] = U(!1), [g, p] = U(!1), m = u || g, C = Ge(), w = m && !!c, b = {
      duration: C ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, P = () => {
      i?.();
    }, A = (N) => {
      N.currentTarget === N.target && (N.key === "Enter" || N.key === " ") && (N.preventDefault(), i?.());
    };
    return /* @__PURE__ */ f("div", { className: "relative", children: [
      a && /* @__PURE__ */ f($e, { children: [
        /* @__PURE__ */ o(
          "div",
          {
            "data-testid": "selected-border",
            className: R(
              "absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient"
            )
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            "aria-hidden": !0,
            className: R(
              "pointer-events-none absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient opacity-80 blur-sm"
            )
          }
        )
      ] }),
      /* @__PURE__ */ f(
        "div",
        {
          ref: e,
          role: i ? "button" : void 0,
          tabIndex: i ? 0 : void 0,
          className: R(
            sf({ selected: a }),
            a && "relative border-transparent",
            i && "cursor-pointer select-none",
            i && Te(),
            l
          ),
          onClick: i ? P : void 0,
          onKeyDown: i ? A : void 0,
          onMouseEnter: () => h(!0),
          onMouseLeave: () => h(!1),
          onFocus: () => p(!0),
          onBlur: () => p(!1),
          children: [
            /* @__PURE__ */ o(
              cf,
              {
                description: r,
                isRevealed: m,
                onAskOne: c
              }
            ),
            d.content === "sparkline" ? /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ o("span", { className: R(bs()), children: n }),
              /* @__PURE__ */ o(
                ge.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: w ? 0 : 1 },
                  transition: b,
                  children: /* @__PURE__ */ o(
                    mf,
                    {
                      data: d.data,
                      label: s ?? "",
                      invertStatus: d.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ o(
              uf,
              {
                heading: n,
                label: s,
                shouldFadeContent: w,
                fadeTransition: b,
                ...d
              }
            )
          ]
        }
      )
    ] });
  }
);
Ms.displayName = "F0AiInsightCardInternal";
const gf = ["className"], Es = v((t, e) => {
  const r = gf.reduce((n, s) => {
    const { [s]: a, ...i } = n;
    return i;
  }, t);
  return /* @__PURE__ */ o(Ms, { ref: e, ...r });
});
Es.displayName = "F0AiInsightCard";
const vf = () => /* @__PURE__ */ f(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ o(Se, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ f("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ o(Se, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ o(Se, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ o(Se, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ o(Se, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), x8 = Yr(
  Go(Es, vf)
), k8 = [
  "text",
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance",
  "sparkline"
], _s = 180, Cf = (t) => Number.isFinite(t) ? Math.max(0, Math.floor(t)) : _s, wf = (t, e) => t.length <= e ? t : `${t.slice(0, e).trimEnd()}...`, xf = (t) => t.showActions !== !1, kf = (t) => Object.fromEntries(
  Object.entries(t).filter(([e]) => e.startsWith("data-"))
);
function yf(t) {
  const {
    module: e,
    heading: r,
    title: n,
    subtitle: s,
    description: a,
    seeMoreLabel: i,
    maxCollapsedDescriptionLength: c = _s
  } = t, [l, d] = U(!1), u = No(), h = j(null), g = Cf(
    c
  ), p = a.length > g, m = l ? a : wf(a, g), C = xf(t) ? t : null, w = kf(t);
  return ie(() => {
    l && h.current?.focus();
  }, [l]), /* @__PURE__ */ f(
    "section",
    {
      className: "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
      ...w,
      children: [
        /* @__PURE__ */ f("div", { className: "flex items-center gap-3 px-4 py-3", children: [
          e && /* @__PURE__ */ o(Jo, { module: e, size: "lg" }),
          /* @__PURE__ */ f("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ o("h2", { className: "truncate text-lg font-semibold text-f1-foreground", children: r }),
            s && /* @__PURE__ */ o("p", { className: "truncate text-base text-f1-foreground-secondary", children: s })
          ] })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex flex-col gap-2 px-4 py-3", children: [
          /* @__PURE__ */ o("h3", { className: "text-lg font-semibold text-f1-foreground", children: n }),
          /* @__PURE__ */ f(
            "p",
            {
              id: u,
              ref: h,
              tabIndex: l ? -1 : void 0,
              className: R(
                "text-base text-f1-foreground whitespace-pre-wrap break-words",
                l && Te(),
                !l && "inline"
              ),
              children: [
                m,
                p && !l && /* @__PURE__ */ f($e, { children: [
                  " ",
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: R(
                        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
                        Te()
                      ),
                      "aria-controls": u,
                      "aria-expanded": l,
                      onClick: () => d(!0),
                      children: i
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        C && /* @__PURE__ */ o("div", { className: "flex items-center justify-end gap-3 border-0 border-t border-solid border-f1-border-secondary px-4 py-3", children: /* @__PURE__ */ o(
          Ee,
          {
            type: "button",
            label: C.primaryActionLabel,
            icon: C.primaryActionIcon,
            onClick: C.onPrimaryAction
          }
        ) })
      ]
    }
  );
}
yf.displayName = "F0AiProposalCard";
const bf = ({
  icon: t,
  title: e,
  children: r
}) => {
  const [n, s] = U(!1), a = Ge();
  return /* @__PURE__ */ f(
    t1,
    {
      className: "mb-1 w-full",
      open: n,
      onOpenChange: s,
      children: [
        /* @__PURE__ */ f(r1, { className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90", children: [
          /* @__PURE__ */ o("span", { className: "mr-2 *:block", children: /* @__PURE__ */ o(ye, { icon: t, className: "block" }) }),
          /* @__PURE__ */ o("span", { className: "mr-[2px]", children: e }),
          /* @__PURE__ */ o(
            ye,
            {
              icon: nr,
              className: "h-4 w-4 transition-transform duration-200"
            }
          )
        ] }),
        /* @__PURE__ */ o(n1, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ o(
          ge.div,
          {
            initial: !1,
            animate: {
              height: n ? "auto" : 0,
              opacity: n ? 1 : 0,
              visibility: n ? "visible" : "hidden"
            },
            transition: {
              duration: a ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: r
          }
        ) })
      ]
    }
  );
}, Lf = (t) => wu[t] ?? jo, Mf = ({ iconName: t }) => t ? /* @__PURE__ */ o("div", { className: "mr-1 flex items-center justify-center", children: /* @__PURE__ */ o(ye, { icon: Lf(t), size: "md", color: "default" }) }) : null;
function Ef({
  sources: t,
  title: e
}) {
  const r = he();
  if (!t || t.length === 0 || !Array.isArray(t))
    return null;
  const n = e ?? r.ai.resourcesGroupTitle;
  return /* @__PURE__ */ o(bf, { icon: Gr, title: n, children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2", children: t.map((s, a) => {
    const i = /* @__PURE__ */ o(Mf, { iconName: s.icon });
    return s.link ? /* @__PURE__ */ o(
      Ft,
      {
        "aria-label": s.title,
        href: s.link,
        size: "md",
        target: s.targetBlank ? "_blank" : "_self",
        variant: "ghost",
        className: "justify-start truncate hover:bg-f1-background-hover",
        compact: !0,
        prepend: i,
        children: /* @__PURE__ */ o("div", { className: "flex w-full items-start", children: s.title })
      },
      a
    ) : /* @__PURE__ */ f(
      "div",
      {
        className: "flex min-w-0 flex-1 items-center gap-1 px-[6px] py-1.5 font-medium text-f1-foreground",
        children: [
          i,
          s.title
        ]
      },
      a
    );
  }) }) });
}
Ef.displayName = "F0AiMessageSources";
async function _f(t, e, r) {
  const n = await import("./xlsx-Bedf3nwD.js"), s = n.utils.table_to_book(t, { sheet: "Data" });
  n.writeFile(s, `${r}.${e}`);
}
function Sf({
  dataset: t,
  title: e,
  filename: r
}) {
  const n = he(), s = j(null), a = e ?? n.ai.aiTable.title, i = Q(
    (c) => {
      if (!s.current) return;
      const l = r ?? (a.replace(/\s+/g, "_").toLowerCase() || "table");
      _f(s.current, c, l);
    },
    [a, r]
  );
  return t.columns?.length ? /* @__PURE__ */ f(
    fr,
    {
      display: "flex",
      flexDirection: "column",
      gap: "md",
      borderRadius: "md",
      border: "default",
      borderColor: "secondary",
      children: [
        /* @__PURE__ */ f(
          fr,
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
              /* @__PURE__ */ o(
                Le,
                {
                  tag: "h2",
                  className: "text-base font-medium capitalize text-f1-foreground",
                  children: a
                }
              ),
              /* @__PURE__ */ o(
                or,
                {
                  icon: rt,
                  size: "md",
                  items: [
                    {
                      label: n.ai.aiTable.downloadExcel,
                      icon: rt,
                      onClick: () => i("xlsx")
                    },
                    {
                      label: n.ai.aiTable.downloadCsv,
                      icon: rt,
                      onClick: () => i("csv")
                    }
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o(fr, { overflowX: "auto", children: /* @__PURE__ */ f(
          "table",
          {
            ref: s,
            className: R(
              "w-full border-separate border-spacing-0 text-md",
              "[&_tbody_tr:last-child_td]:border-b-0"
            ),
            children: [
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: t.columns.map((c) => /* @__PURE__ */ o(
                "th",
                {
                  className: "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
                  children: t.columnLabels?.[c] ?? c
                },
                c
              )) }) }),
              /* @__PURE__ */ o("tbody", { children: t.rows.map((c, l) => /* @__PURE__ */ o("tr", { children: t.columns.map((d) => {
                const u = c[d];
                return /* @__PURE__ */ o(
                  "td",
                  {
                    className: "max-w-72 border-0 border-b border-solid border-f1-border-secondary px-3 py-2 text-f1-foreground",
                    children: /* @__PURE__ */ o(Le, { children: u == null ? "" : String(u) })
                  },
                  d
                );
              }) }, l)) })
            ]
          }
        ) })
      ]
    }
  ) : null;
}
Sf.displayName = "F0AiTableCard";
function Rf({ credits: t }) {
  const e = he(), [r, n] = U(!1), [s, a] = U(!1), [i, c] = U(!1), [l, d] = U(null), u = Q(
    (p) => {
      n(p), p && t?.fetchUsage && (a(!0), c(!1), t.fetchUsage().then((m) => {
        d(m), c(!1);
      }).catch(() => {
        c(!0);
      }).finally(() => {
        a(!1);
      }));
    },
    [t]
  );
  if (!t) return null;
  const h = l ? Math.min(100, Math.round(l.used / l.total * 100)) : 0, g = t.companyName;
  return /* @__PURE__ */ f(Kr, { open: r, onOpenChange: u, children: [
    /* @__PURE__ */ o(Qr, { asChild: !0, children: /* @__PURE__ */ o(
      Me,
      {
        variant: "ghost",
        hideLabel: !0,
        label: e.t("ai.credits.title"),
        icon: qr,
        pressed: r
      }
    ) }),
    /* @__PURE__ */ f(
      Jr,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          g && /* @__PURE__ */ f("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ o(
              en,
              {
                name: t.companyName ?? "",
                src: t.companyLogoUrl,
                size: "lg"
              }
            ),
            /* @__PURE__ */ f("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ o(Le, { tag: "span", className: "font-medium", children: t.companyName ?? "" }),
              t.planName && /* @__PURE__ */ o(
                Le,
                {
                  tag: "span",
                  className: "text-sm font-medium text-f1-foreground-secondary",
                  children: t.planName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: "flex flex-col rounded border border-solid border-f1-border-secondary", children: [
            /* @__PURE__ */ f("div", { className: "flex flex-col gap-2 p-3", children: [
              s && /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ f("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ o("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }),
                  /* @__PURE__ */ o("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })
                ] }),
                /* @__PURE__ */ o("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ o("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }),
                  /* @__PURE__ */ o("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })
                ] })
              ] }),
              i && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: e.t("ai.credits.creditsError") }),
              !s && !i && l && /* @__PURE__ */ f($e, { children: [
                /* @__PURE__ */ f("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ o("span", { className: "text-base font-medium text-f1-foreground", children: e.t("ai.credits.title") }),
                  /* @__PURE__ */ o("span", { className: "font-medium text-f1-foreground-secondary", children: e.t("ai.credits.creditsLeft", {
                    total: Math.max(
                      0,
                      l.total - l.used
                    ).toLocaleString()
                  }) })
                ] }),
                /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ o("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ o(
                  ge.div,
                  {
                    className: "h-full rounded-full",
                    style: {
                      width: `${h}%`,
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
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ o("div", { className: "h-2 w-2 rounded-full bg-f1-border" }),
                  /* @__PURE__ */ o("span", { className: "text-sm tabular-nums text-f1-foreground-secondary", children: e.t("ai.credits.monthlyCredits") })
                ] })
              ] })
            ] }),
            t.upgradePlanUrl && /* @__PURE__ */ f("div", { className: "flex items-center justify-between border-0 border-t border-solid border-f1-border-secondary p-3", children: [
              /* @__PURE__ */ o("span", { children: e.t("ai.credits.needMoreCredits") }),
              /* @__PURE__ */ o(
                Ee,
                {
                  variant: "outlinePromote",
                  href: t.upgradePlanUrl,
                  label: e.t("ai.credits.upgradePlan"),
                  icon: Wo
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
const Nf = "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)";
function Tf({
  employeeCredits: t
}) {
  const e = he(), r = Ge(), [n, s] = U(!1), [a, i] = U(!1), [c, l] = U(!1), [d, u] = U(null), h = Q(
    (C) => {
      s(C), C && t?.fetchUsage && (i(!0), l(!1), t.fetchUsage().then((w) => {
        u(w), l(!1);
      }).catch(() => {
        l(!0);
      }).finally(() => {
        i(!1);
      }));
    },
    [t]
  );
  if (!t) return null;
  const g = !!t.companyName, p = d && d.total > 0 ? Math.min(100, Math.round(d.used / d.total * 100)) : 0, m = d ? Math.max(0, d.total - d.used) : 0;
  return /* @__PURE__ */ f(Kr, { open: n, onOpenChange: h, children: [
    /* @__PURE__ */ o(Qr, { asChild: !0, children: /* @__PURE__ */ o(
      Me,
      {
        variant: "ghost",
        hideLabel: !0,
        label: e.t("ai.credits.title"),
        icon: qr,
        pressed: n
      }
    ) }),
    /* @__PURE__ */ f(
      Jr,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          g && /* @__PURE__ */ f("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ o(
              en,
              {
                name: t.companyName ?? "",
                src: t.companyLogoUrl,
                size: "lg"
              }
            ),
            /* @__PURE__ */ f("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ o(Le, { tag: "span", className: "font-medium", children: t.companyName ?? "" }),
              t.planName && /* @__PURE__ */ o(
                Le,
                {
                  tag: "span",
                  className: "text-sm font-medium text-f1-foreground-secondary",
                  children: t.planName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex flex-col rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ f("div", { className: "flex flex-col gap-2 p-3", children: [
            a && /* @__PURE__ */ f(
              "div",
              {
                className: "flex flex-col gap-2",
                "aria-busy": "true",
                "aria-live": "polite",
                children: [
                  /* @__PURE__ */ f("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ o("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }),
                    /* @__PURE__ */ o("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })
                  ] }),
                  /* @__PURE__ */ o("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
                  /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ o("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }),
                    /* @__PURE__ */ o("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })
                  ] })
                ]
              }
            ),
            c && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: e.t("ai.credits.creditsError") }),
            !a && !c && d && /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ f("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ o("span", { className: "text-base font-medium text-f1-foreground", children: e.t("ai.credits.employeeCredits") }),
                /* @__PURE__ */ o("span", { className: "font-medium text-f1-foreground-secondary", children: e.t("ai.credits.creditsLeft", {
                  total: m.toLocaleString()
                }) })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ o("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ o(
                ge.div,
                {
                  className: "h-full rounded-full",
                  style: {
                    width: `${p}%`,
                    backgroundImage: Nf,
                    backgroundSize: "300% 100%"
                  },
                  animate: r ? void 0 : { backgroundPosition: ["0% 0%", "100% 0%"] },
                  transition: {
                    duration: r ? 0 : 4,
                    ease: "linear",
                    repeat: r ? 0 : 1 / 0,
                    repeatType: "reverse"
                  }
                }
              ) }) }),
              /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ o("div", { className: "h-2 w-2 rounded-full bg-f1-border" }),
                /* @__PURE__ */ o("span", { className: "text-sm tabular-nums text-f1-foreground-secondary", children: e.t("ai.credits.monthlyCredits") })
              ] })
            ] })
          ] }) })
        ]
      }
    )
  ] });
}
const _o = ({
  credits: t,
  employeeCredits: e
}) => e ? /* @__PURE__ */ o(Tf, { employeeCredits: e }) : t ? /* @__PURE__ */ o(Rf, { credits: t }) : null, y8 = ({
  historyEnabled: t = !1,
  title: e,
  currentThreadTitle: r,
  fullscreen: n = !1,
  lockVisualizationMode: s = !1,
  onToggleVisualizationMode: a,
  onClose: i,
  onNewChat: c,
  onOpenHistory: l,
  hasMessages: d = !1,
  credits: u,
  employeeCredits: h
}) => {
  const g = he(), p = Xr(`(max-width: ${yc.md}px)`, {
    initializeWithValue: !0
  }), m = !s && !p && /* @__PURE__ */ o(
    Me,
    {
      variant: "ghost",
      hideLabel: !0,
      label: n ? g.ai.collapseChat : g.ai.expandChat,
      icon: n ? Zo : Do,
      onClick: a
    }
  ), C = /* @__PURE__ */ o(
    Me,
    {
      variant: "ghost",
      hideLabel: !0,
      label: g.ai.closeChat,
      icon: ze,
      onClick: i
    }
  );
  return t ? /* @__PURE__ */ f(
    "header",
    {
      className: R(
        "flex justify-between pl-2.5 pr-3 py-3 w-full overflow-hidden gap-3"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center", children: !s && /* @__PURE__ */ o(
          Ft,
          {
            variant: "ghost",
            size: "md",
            className: "min-w-0 max-w-full [&>div>span>span]:w-full",
            onClick: l,
            children: /* @__PURE__ */ f("div", { className: "flex min-w-0 items-center gap-1", children: [
              /* @__PURE__ */ o(Le, { lines: 1, className: "min-w-0 text-left", children: r ?? g.ai.newConversation }),
              /* @__PURE__ */ o(ye, { icon: zr, color: "default", size: "md" })
            ] })
          }
        ) }),
        /* @__PURE__ */ f(
          ge.div,
          {
            className: "flex shrink-0 items-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.2, ease: "easeOut" },
            children: [
              /* @__PURE__ */ o(
                _o,
                {
                  credits: u,
                  employeeCredits: h
                }
              ),
              m,
              C
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ f("header", { className: R("flex justify-between px-4 py-3"), children: [
    /* @__PURE__ */ o("div", { className: "flex items-center", children: /* @__PURE__ */ o("h2", { className: "text-f1-foreground", children: e ?? "" }) }),
    /* @__PURE__ */ f(
      ge.div,
      {
        className: "flex items-center",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2, ease: "easeOut" },
        children: [
          d && !s && /* @__PURE__ */ o(
            Me,
            {
              variant: "ghost",
              hideLabel: !0,
              label: g.ai.startNewChat,
              icon: rn,
              onClick: c
            }
          ),
          /* @__PURE__ */ o(
            _o,
            {
              credits: u,
              employeeCredits: h
            }
          ),
          m,
          C
        ]
      }
    )
  ] });
};
function Af() {
  if (!(typeof navigator > "u"))
    return Mc(navigator.language);
}
function Vf(t) {
  const e = new Date(t), r = /* @__PURE__ */ new Date();
  return s1(e) ? "today" : a1(e) ? "yesterday" : bc(e, r) ? "thisMonth" : "older";
}
function Ff(t, e) {
  const r = new Date(t), n = Af(), s = pn(r, "p", { locale: n });
  if (s1(r)) return `${e.today}, ${s}`;
  if (a1(r)) return `${e.yesterday}, ${s}`;
  const a = !Lc(r, /* @__PURE__ */ new Date());
  return `${pn(r, a ? "MMM d yyyy" : "MMM d", {
    locale: n
  })}, ${s}`;
}
function Pf(t) {
  const e = {
    today: [],
    yesterday: [],
    thisMonth: [],
    older: []
  };
  for (const n of t) {
    const s = Vf(n.updatedAt);
    e[s].push(n);
  }
  return ["today", "yesterday", "thisMonth", "older"].filter((n) => e[n].length > 0).map((n) => ({ key: n, threads: e[n] }));
}
function $f({
  thread: t,
  isPinned: e,
  onSelect: r,
  onPin: n,
  onUnpin: s,
  onDelete: a
}) {
  const i = he(), c = le(
    () => [
      {
        label: e ? i.ai.unpinChat : i.ai.pinChat,
        icon: p1,
        onClick: () => e ? s(t.id) : n(t.id)
      },
      {
        label: i.ai.deleteChat,
        icon: Io,
        critical: !0,
        onClick: () => a(t.id)
      }
    ],
    [e, t.id, n, s, a]
  ), l = le(
    () => Ff(t.updatedAt, {
      today: i.ai.today,
      yesterday: i.ai.yesterday
    }),
    [t.updatedAt, i.ai.today, i.ai.yesterday]
  );
  return /* @__PURE__ */ f(
    "div",
    {
      className: R(
        "group flex cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover",
        Te("rounded")
      ),
      role: "button",
      tabIndex: 0,
      onKeyDown: (d) => {
        (d.key === "Enter" || d.key === " ") && (d.preventDefault(), r(t.id, t.title));
      },
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "flex w-full min-w-0 items-center gap-1",
            onClick: () => r(t.id, t.title),
            children: [
              /* @__PURE__ */ o(Le, { lines: 1, className: "text-left font-medium", children: t.title }),
              /* @__PURE__ */ o("span", { className: "shrink-0 font-medium text-f1-foreground-tertiary", children: `- ${l}` })
            ]
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: R(
              "flex items-center opacity-0 transition-opacity duration-150",
              "group-hover:opacity-100 focus-within:opacity-100",
              "has-[[aria-expanded=true]]:opacity-100"
            ),
            children: /* @__PURE__ */ o(or, { items: c, children: /* @__PURE__ */ o(
              Ee,
              {
                icon: Oo,
                variant: "ghost",
                size: "md",
                label: i.ai.threadOptions,
                hideLabel: !0
              }
            ) })
          }
        )
      ]
    }
  );
}
function So({
  label: t,
  threads: e,
  pinnedIds: r,
  onSelect: n,
  onPin: s,
  onUnpin: a,
  onDelete: i
}) {
  const [c, l] = U(!0), d = Q(() => {
    l((h) => !h);
  }, []), u = Q(
    (h) => {
      (h.key === "Enter" || h.key === " ") && (h.preventDefault(), d());
    },
    [d]
  );
  return /* @__PURE__ */ f("div", { children: [
    /* @__PURE__ */ f(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: d,
        onKeyDown: u,
        className: R(
          "flex cursor-pointer items-center p-3 gap-1 hover:bg-f1-background-hover",
          Te("rounded")
        ),
        children: [
          /* @__PURE__ */ o("span", { className: "text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary", children: t }),
          /* @__PURE__ */ o(
            ye,
            {
              icon: c ? zr : $o,
              color: "secondary",
              size: "xs"
            }
          )
        ]
      }
    ),
    c && /* @__PURE__ */ o("div", { className: "flex flex-col", children: e.map((h) => /* @__PURE__ */ o(
      $f,
      {
        thread: h,
        isPinned: r.has(h.id),
        onSelect: n,
        onPin: s,
        onUnpin: a,
        onDelete: i
      },
      h.id
    )) })
  ] });
}
function If() {
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-3", children: Array.from({ length: 5 }).map((t, e) => /* @__PURE__ */ f(
    "div",
    {
      className: "flex items-center justify-between gap-3 rounded-lg px-3 py-2",
      children: [
        /* @__PURE__ */ o("div", { className: "h-5 w-full animate-pulse rounded bg-f1-background-secondary" }),
        /* @__PURE__ */ o("div", { className: "h-5 w-6 animate-pulse rounded bg-f1-background-secondary" })
      ]
    },
    e
  )) });
}
const b8 = ({
  onClose: t,
  onSelectThread: e,
  onNewChat: r,
  threads: n,
  isLoading: s,
  error: a,
  pinnedIds: i,
  onPinThread: c,
  onUnpinThread: l,
  onDeleteThread: d
}) => {
  const u = he(), [h, g] = U("");
  ie(() => {
    const k = (y) => {
      y.key === "Escape" && t();
    };
    return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [t]);
  const p = le(
    () => ({
      today: u.ai.today,
      yesterday: u.ai.yesterday,
      thisMonth: u.ai.thisMonth,
      older: u.ai.older
    }),
    [
      u.ai.today,
      u.ai.yesterday,
      u.ai.thisMonth,
      u.ai.older
    ]
  ), m = le(() => {
    if (!h.trim()) return n;
    const k = h.toLowerCase();
    return n.filter((y) => y.title.toLowerCase().includes(k));
  }, [n, h]), C = le(
    () => m.filter((k) => i.has(k.id)),
    [m, i]
  ), w = le(
    () => m.filter((k) => !i.has(k.id)),
    [m, i]
  ), b = le(
    () => Pf(w),
    [w]
  ), P = Q(
    (k, y) => {
      e(k, y), t();
    },
    [e, t]
  ), A = Q(() => {
    r(), t();
  }, [r, t]), N = Q(
    (k) => {
      d(k);
    },
    [d]
  ), x = C.length > 0 || b.length > 0;
  return i1(
    /* @__PURE__ */ f($e, { children: [
      /* @__PURE__ */ o(
        "div",
        {
          className: "fixed inset-0 z-50 bg-f1-background-overlay animate-in fade-in-0",
          onClick: t,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": u.ai.chatHistory,
          className: R(
            "fixed inset-0 z-50 flex items-center justify-center",
            "pointer-events-none",
            "animate-in fade-in-0 zoom-in-95"
          ),
          children: /* @__PURE__ */ f(
            "div",
            {
              className: R(
                "pointer-events-auto relative flex w-full max-w-[600px] flex-col",
                "rounded-xl bg-f1-background shadow-lg",
                "max-h-[min(600px,80vh)]"
              ),
              children: [
                /* @__PURE__ */ f("div", { className: "flex flex-shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary py-2 pl-5 pr-3", children: [
                  /* @__PURE__ */ o(ye, { icon: Gr, color: "secondary", size: "md" }),
                  /* @__PURE__ */ o(
                    "input",
                    {
                      type: "text",
                      value: h,
                      onChange: (k) => g(k.target.value),
                      placeholder: u.ai.searchChats,
                      className: R(
                        "w-full",
                        "py-2.5 pr-3",
                        "text-base text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary focus:outline-none",
                        "outline-none"
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col gap-1 overflow-y-auto p-2", children: [
                  /* @__PURE__ */ o(
                    Ft,
                    {
                      variant: "ghost",
                      size: "md",
                      className: "py-1 [&>div>span>span]:w-full",
                      onClick: A,
                      children: /* @__PURE__ */ f("div", { className: "flex w-full items-center gap-2", children: [
                        /* @__PURE__ */ o(ye, { icon: rn, color: "default", size: "md" }),
                        /* @__PURE__ */ o(Le, { lines: 1, className: "text-left", children: u.ai.startNewChat })
                      ] })
                    }
                  ),
                  s && /* @__PURE__ */ o(If, {}),
                  !s && a && /* @__PURE__ */ o("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: a }),
                  !s && !a && !x && /* @__PURE__ */ o("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: u.ai.noPreviousChats }),
                  !s && !a && C.length > 0 && /* @__PURE__ */ o(
                    So,
                    {
                      label: u.ai.pinnedChats,
                      threads: C,
                      pinnedIds: i,
                      onSelect: P,
                      onPin: c,
                      onUnpin: l,
                      onDelete: N
                    }
                  ),
                  !s && !a && b.map((k) => /* @__PURE__ */ o(
                    So,
                    {
                      label: p[k.key],
                      threads: k.threads,
                      pinnedIds: i,
                      onSelect: P,
                      onPin: c,
                      onUnpin: l,
                      onDelete: N
                    },
                    k.key
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
}, Ss = "f0-ai-pinned-threads";
function Hf() {
  const t = Ec(Ss, []);
  return new Set(Array.isArray(t) ? t : []);
}
function _r(t) {
  _c(Ss, [...t]);
}
function L8({
  enabled: t = !1,
  fetchThreads: e,
  deleteThread: r
}) {
  const [n, s] = U([]), [a, i] = U(!1), [c, l] = U(null), [d, u] = U(Hf), h = Q(async () => {
    i(!0), l(null);
    try {
      const C = await e();
      s(C);
    } catch (C) {
      const w = C instanceof Error ? C.message : "Failed to fetch chat history";
      l(w), s([]);
    } finally {
      i(!1);
    }
  }, [e]);
  ie(() => {
    t && h();
  }, [t, h]);
  const g = Q((C) => {
    u((w) => {
      const b = new Set(w);
      return b.add(C), _r(b), b;
    });
  }, []), p = Q((C) => {
    u((w) => {
      const b = new Set(w);
      return b.delete(C), _r(b), b;
    });
  }, []), m = Q(
    async (C) => {
      try {
        await r(C), s((w) => w.filter((b) => b.id !== C)), u((w) => {
          if (!w.has(C)) return w;
          const b = new Set(w);
          return b.delete(C), _r(b), b;
        });
      } catch {
        h();
      }
    },
    [r, h]
  );
  return {
    threads: n,
    isLoading: a,
    error: c,
    refetch: h,
    pinnedIds: d,
    pinThread: g,
    unpinThread: p,
    deleteThread: m
  };
}
const Of = ge.create(Sc), jf = ({ label: t }) => /* @__PURE__ */ f("div", { className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md", children: [
  /* @__PURE__ */ o(
    Of,
    {
      size: "xs",
      animate: {
        rotate: [0, 360],
        scale: [1, 0.8, 1],
        filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
      },
      transition: {
        rotate: {
          duration: 1,
          ease: "linear",
          repeat: 1 / 0,
          repeatDelay: 1
        },
        scale: {
          duration: 1,
          times: [0, 0.5, 1],
          ease: "easeInOut",
          repeat: 1 / 0,
          repeatDelay: 1
        },
        filter: {
          duration: 1,
          times: [0, 0.5, 1],
          ease: "easeInOut",
          repeat: 1 / 0,
          repeatDelay: 1
        }
      }
    }
  ),
  /* @__PURE__ */ o("span", { className: "font-medium", children: t })
] }), M8 = Fs(function({
  active: e,
  label: r,
  className: n,
  children: s
}) {
  const { t: a } = he(), i = r ?? a("ai.applyingChanges");
  return ie(() => {
    if (!e) return;
    const c = document.activeElement;
    c && c.getAttribute("name") !== "one-ai-input" && c.blur();
  }, [e]), /* @__PURE__ */ f("div", { className: R("relative flex flex-1 flex-col", n), children: [
    /* @__PURE__ */ o(Ze, { children: e && // Zero-height sticky anchor pinned to the top of the scroll viewport,
    // with the pill pushed to ~half the viewport height. This keeps the
    // pill centred in the visible area regardless of how tall the blurred
    // content is or how far it's scrolled.
    /* @__PURE__ */ o(
      ge.div,
      {
        className: "pointer-events-none sticky top-0 z-50 flex h-0 w-full items-start justify-center overflow-visible",
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        children: /* @__PURE__ */ o("div", { className: "mt-[40vh]", children: /* @__PURE__ */ o(jf, { label: i }) })
      }
    ) }),
    /* @__PURE__ */ o(
      ge.div,
      {
        className: R("flex flex-1 flex-col", e && "pointer-events-none"),
        initial: { filter: "blur(0px)" },
        animate: { filter: e ? "blur(2px)" : "blur(0px)" },
        children: s
      }
    )
  ] });
});
export {
  kd as $,
  h8 as A,
  x1 as B,
  ls as C,
  ku as D,
  Xf as E,
  c8 as F,
  Kf as G,
  Yf as H,
  Qf as I,
  t8 as J,
  B1 as K,
  Jf as L,
  jr as M,
  De as N,
  Jt as O,
  Jl as P,
  T0 as Q,
  jn as R,
  x6 as S,
  Rr as T,
  H1 as U,
  s4 as V,
  T5 as W,
  Zd as X,
  b5 as Y,
  F as Z,
  nl as _,
  f8 as a,
  Xl as a0,
  On as a1,
  e8 as a2,
  In as a3,
  Et as a4,
  _e as a5,
  dt as a6,
  Qe as a7,
  fr as a8,
  a4 as a9,
  Gl as aa,
  Dl as ab,
  Bl as ac,
  Ol as ad,
  zl as ae,
  Ju as af,
  c4 as ag,
  i4 as ah,
  qf as ai,
  r8 as aj,
  o8 as ak,
  n8 as al,
  p8 as b,
  X9 as c,
  l8 as d,
  ds as e,
  m8 as f,
  g8 as g,
  Zr as h,
  i8 as i,
  v8 as j,
  C8 as k,
  w8 as l,
  a8 as m,
  x8 as n,
  Gf as o,
  k8 as p,
  yf as q,
  Ef as r,
  Sf as s,
  y8 as t,
  d8 as u,
  b8 as v,
  L8 as w,
  s8 as x,
  u8 as y,
  M8 as z
};
