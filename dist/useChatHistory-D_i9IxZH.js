import { jsxs as f, jsx as o, Fragment as ze } from "react/jsx-runtime";
import * as ss from "react";
import { useInsertionEffect as as, forwardRef as m, useRef as z, useState as q, useCallback as ee, useEffect as fe, useMemo as de, createContext as Vt, useContext as xt, useLayoutEffect as so, useId as ao, createElement as is } from "react";
import { c3 as cs, c4 as ls, c5 as ds, c6 as us, c7 as io, c8 as fs, c9 as hs, ca as ps, cb as ms, cc as gs, cd as co, ce as vs, cf as Cs, cg as ws, ch as xs, ci as ks, cj as ys, ck as bs, cl as Dt, cm as Ls, cn as Ms, co as Es, cp as _s, cq as Ss, cr as Rs, W as lo, cs as Ns, ct as Ts, cu as As, cv as Vs, cw as Fs, cx as uo, cy as Ps, cz as $s, a4 as Rr, cA as Hs, aG as Is, cB as js, cC as Os, cD as Zs, ae as Ds, cE as Bs, bB as Us, a8 as fo, ab as zs, cF as Ws, a2 as Nr, _ as ho, N as Kt, a1 as po, b2 as Gs, cG as qs, aY as Ys, bA as Xs, Y as st, as as Ks, b6 as mo, cH as Qs, by as go, cI as tt, bu as Js, cJ as ea, cK as vo, aX as Co, cL as ta, cM as ra, cN as na, cO as oa, cP as wo, bn as sa, bo as aa, cQ as ia, cR as ca, cS as la, cT as da, cU as ua, cV as fa, cW as ha, cX as pa, cY as ma, cZ as ga, c_ as va, c$ as Ca, d0 as wa, bz as xa, a9 as ka, bj as ya, d1 as ba, d2 as La, d3 as Ma, d4 as Ea, d5 as _a, d6 as Sa, d7 as Ra, an as Na, d8 as xo, J as Ta, Z as Aa, d9 as ko, da as Va, b5 as Fa, b4 as Pa, db as $a, dc as yo, dd as Ha, aW as Ia, aw as ja, de as Oa, aq as Za, b0 as Da, df as bo, dg as Ba, dh as Ua, ba as Tr, di as Ar, bw as za, bv as Wa, bx as Lo, dj as Ga, z as qa, y as Ya, dk as Xa, dl as Ka, dm as Qa, dn as Ja, dp as ei, dq as Mo, dr as ti, aa as ri, ds as ni, H as Se, m as F, o as at, bd as oi, dt as Eo, aj as si, du as ai, dv as ii, A as Oe, n as ve, ar as Wr, M as Ee, u as pe, dw as ci, dx as li, bS as di, l as ui, k as fi, i as hi, w as _o, dy as Gr, dz as pi, dA as mi, dB as gi, dC as vi, dD as Ci, a6 as So, a7 as wi, S as Pe, c1 as Ro, C as ye, s as Ne, $ as xi, dE as ki, ac as Le, aL as De, aB as Vr, dF as yi, aC as Fr, aD as Pr, b as Ge, br as bi, O as Li, aV as Mi, a3 as $r, dG as Ei, dH as _i, dI as Si, dJ as qr, a0 as Ri, ai as No, aN as To, bN as Ni, aS as Ao, bH as Ti, dK as Ai, aP as Rt, b8 as Vo, dL as Fo, b9 as Po, dM as $o, dN as Vi, bc as Fi, dO as Pi, b1 as Hr, bk as $i, dP as Hi, dQ as Ii, dR as ji, dS as Oi, dT as Zi, ad as Di, x as Bi, dU as Ho, dV as Io, dW as Ui, ah as Yr, dX as zi, ag as Wi, dY as Gi, dZ as qi } from "./F0CanvasPanel-9azF_D8x.js";
import { createPortal as jo } from "react-dom";
import { defaultTranslations as Yi } from "./i18n-provider-defaults.js";
import { useTrackVolume as Xi } from "@livekit/components-react";
import './useChatHistory.css';function Ki(t, e, r) {
  as(() => t.on(e, r), [t, e, r]);
}
function Ir(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Oo(t, e, r, n) {
  return typeof t == "string" && Ir(e) ? cs(t, r, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function Qi(t, e, r) {
  return t * (e + 1);
}
function Xr(t, e, r, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : n.get(e) ?? t;
}
const Ji = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function Zo(t, e) {
  return ls(t) ? t[Ji(0, t.length, e)] : t;
}
function ec(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    s.at > e && s.at < r && (us(t, s), n--);
  }
}
function tc(t, e, r, n, s, a) {
  ec(t, s, a);
  for (let i = 0; i < e.length; i++)
    t.push({
      value: e[i],
      at: ds(s, a, n[i]),
      easing: Zo(r, i)
    });
}
function rc(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] = t[r] / (e + 1);
}
function nc(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const oc = "easeInOut", sc = 20;
function ac(t, { defaultTransition: e = {}, ...r } = {}, n, s) {
  const a = e.duration || 0.3, i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), c = {}, d = /* @__PURE__ */ new Map();
  let u = 0, h = 0, w = 0;
  for (let p = 0; p < t.length; p++) {
    const g = t[p];
    if (typeof g == "string") {
      d.set(g, h);
      continue;
    } else if (!Array.isArray(g)) {
      d.set(g.name, Xr(h, g.at, u, d));
      continue;
    }
    let [y, k, M = {}] = g;
    M.at !== void 0 && (h = Xr(h, M.at, u, d));
    let P = 0;
    const I = (T, v, C, x = 0, S = 0) => {
      const _ = ic(T), { delay: b = 0, times: L = fs(_), type: N = "keyframes", repeat: D, repeatType: Q, repeatDelay: J = 0, ...ae } = v;
      let { ease: ne = e.ease || "easeOut", duration: X } = v;
      const E = typeof b == "function" ? b(x, S) : b, B = _.length, j = ms(N) ? N : s?.[N];
      if (B <= 2 && j) {
        let Z = 100;
        if (B === 2 && dc(_)) {
          const ke = _[1] - _[0];
          Z = Math.abs(ke);
        }
        const re = { ...ae };
        X !== void 0 && (re.duration = gs(X));
        const le = hs(re, Z, j);
        ne = le.ease, X = le.duration;
      }
      X ?? (X = a);
      const Y = h + E;
      L.length === 1 && L[0] === 0 && (L[1] = 1);
      const me = L.length - _.length;
      if (me > 0 && ps(L, me), _.length === 1 && _.unshift(null), D) {
        co(D < sc, "Repeat count too high, must be less than 20"), X = Qi(X, D);
        const Z = [..._], re = [...L];
        ne = Array.isArray(ne) ? [...ne] : [ne];
        const le = [...ne];
        for (let ke = 0; ke < D; ke++) {
          _.push(...Z);
          for (let R = 0; R < Z.length; R++)
            L.push(re[R] + (ke + 1)), ne.push(R === 0 ? "linear" : Zo(le, R - 1));
        }
        rc(L, D);
      }
      const Ce = Y + X;
      tc(C, _, ne, L, Y, Ce), P = Math.max(E + X, P), w = Math.max(Ce, w);
    };
    if (io(y)) {
      const T = Kr(y, l);
      I(k, M, Qr("default", T));
    } else {
      const T = Oo(y, k, n, c), v = T.length;
      for (let C = 0; C < v; C++) {
        k = k, M = M;
        const x = T[C], S = Kr(x, l);
        for (const _ in k)
          I(k[_], cc(M, _), Qr(_, S), C, v);
      }
    }
    u = h, h += P;
  }
  return l.forEach((p, g) => {
    for (const y in p) {
      const k = p[y];
      k.sort(nc);
      const M = [], P = [], I = [];
      for (let v = 0; v < k.length; v++) {
        const { at: C, value: x, easing: S } = k[v];
        M.push(x), P.push(vs(0, w, C)), I.push(S || "easeOut");
      }
      P[0] !== 0 && (P.unshift(0), M.unshift(M[0]), I.unshift(oc)), P[P.length - 1] !== 1 && (P.push(1), M.push(null)), i.has(g) || i.set(g, {
        keyframes: {},
        transition: {}
      });
      const T = i.get(g);
      T.keyframes[y] = M, T.transition[y] = {
        ...e,
        duration: w,
        ease: I,
        times: P,
        ...r
      };
    }
  }), i;
}
function Kr(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function Qr(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function ic(t) {
  return Array.isArray(t) ? t : [t];
}
function cc(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const lc = (t) => typeof t == "number", dc = (t) => t.every(lc);
function uc(t, e) {
  return t in e;
}
class fc extends Cs {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, r) {
    if (uc(r, e)) {
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
    return ws();
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
function hc(t) {
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
  }, r = xs(t) && !ks(t) ? new ys(e) : new bs(e);
  r.mount(t), Dt.set(t, r);
}
function pc(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, r = new fc(e);
  r.mount(t), Dt.set(t, r);
}
function mc(t, e) {
  return io(t) || typeof t == "number" || typeof t == "string" && !Ir(e);
}
function Do(t, e, r, n) {
  const s = [];
  if (mc(t, e))
    s.push(Ls(t, Ir(e) && e.default || e, r && (r.default || r)));
  else {
    const a = Oo(t, e, n), i = a.length;
    co(!!i, "No valid elements provided.");
    for (let l = 0; l < i; l++) {
      const c = a[l], d = c instanceof Element ? hc : pc;
      Dt.has(c) || d(c);
      const u = Dt.get(c), h = { ...r };
      "delay" in h && typeof h.delay == "function" && (h.delay = h.delay(l, i)), s.push(...Ms(u, { ...e, transition: h }, {}));
    }
  }
  return s;
}
function gc(t, e, r) {
  const n = [];
  return ac(t, e, r, { spring: Es }).forEach(({ keyframes: a, transition: i }, l) => {
    n.push(...Do(l, a, i));
  }), n;
}
class vc {
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
class Cc extends vc {
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function wc(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function xc(t) {
  function e(r, n, s) {
    let a = [];
    return wc(r) ? a = gc(r, n, t) : a = Do(r, n, s, t), new Cc(a);
  }
  return e;
}
const kc = xc(), yc = (t, e) => /* @__PURE__ */ f(
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
), bc = m(yc), Lc = (t, e) => /* @__PURE__ */ f(
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
), Mc = m(Lc), Ec = (t, e) => /* @__PURE__ */ f(
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
), _c = m(Ec), Sc = (t, e) => /* @__PURE__ */ f(
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
), Rc = m(Sc), Nc = (t, e) => /* @__PURE__ */ f(
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
), Tc = m(Nc), Ac = (t, e) => /* @__PURE__ */ f(
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
), Vc = m(Ac), Fc = (t, e) => /* @__PURE__ */ f(
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
), Pc = m(Fc), $c = (t, e) => /* @__PURE__ */ f(
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
), Hc = m($c), Ic = (t, e) => /* @__PURE__ */ o(
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
), jc = m(Ic), Oc = (t, e) => /* @__PURE__ */ o(
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
), Zc = m(Oc), Dc = (t, e) => /* @__PURE__ */ f(
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
), Bc = m(Dc), Uc = (t, e) => /* @__PURE__ */ f(
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
), zc = m(Uc), Wc = (t, e) => /* @__PURE__ */ f(
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
), Gc = m(Wc), qc = (t, e) => /* @__PURE__ */ f(
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
), Yc = m(qc), Xc = (t, e) => /* @__PURE__ */ f(
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
), Kc = m(Xc), Qc = (t, e) => /* @__PURE__ */ f(
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
), Jc = m(Qc), el = (t, e) => /* @__PURE__ */ f(
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
), tl = m(el), rl = (t, e) => /* @__PURE__ */ f(
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
), nl = m(rl), ol = (t, e) => /* @__PURE__ */ o(
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
), sl = m(ol), al = (t, e) => /* @__PURE__ */ o(
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
), il = m(al), cl = (t, e) => /* @__PURE__ */ o(
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
), ll = m(cl), dl = (t, e) => /* @__PURE__ */ o(
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
), ul = m(dl), fl = (t, e) => /* @__PURE__ */ o(
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
), hl = m(fl), pl = (t, e) => /* @__PURE__ */ f(
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
), ml = m(pl), gl = (t, e) => /* @__PURE__ */ f(
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
), vl = m(gl), Cl = (t, e) => /* @__PURE__ */ f(
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
), wl = m(Cl), xl = (t, e) => /* @__PURE__ */ o(
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
), kl = m(xl), yl = (t, e) => /* @__PURE__ */ f(
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
), bl = m(yl), Ll = (t, e) => /* @__PURE__ */ o(
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
), Ml = m(Ll), El = (t, e) => /* @__PURE__ */ f(
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
), _l = m(El), Sl = (t, e) => /* @__PURE__ */ f(
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
), Rl = m(Sl), Nl = (t, e) => /* @__PURE__ */ f(
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
), Tl = m(Nl), Al = (t, e) => /* @__PURE__ */ f(
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
), Vl = m(Al), Fl = (t, e) => /* @__PURE__ */ o(
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
), Pl = m(Fl), $l = (t, e) => /* @__PURE__ */ f(
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
), Hl = m($l), Il = (t, e) => /* @__PURE__ */ o(
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
), jl = m(Il), Ol = (t, e) => /* @__PURE__ */ o(
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
), Zl = m(Ol), Dl = (t, e) => /* @__PURE__ */ o(
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
), Bl = m(Dl), Ul = (t, e) => /* @__PURE__ */ f(
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
), zl = m(Ul), Wl = (t, e) => /* @__PURE__ */ f(
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
), Gl = m(Wl), ql = (t, e) => /* @__PURE__ */ f(
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
), Yl = m(ql), Xl = (t, e) => /* @__PURE__ */ f(
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
), Kl = m(Xl), Ql = (t, e) => /* @__PURE__ */ f(
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
), Jl = m(Ql), e0 = (t, e) => /* @__PURE__ */ f(
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
), t0 = m(e0), r0 = (t, e) => /* @__PURE__ */ o(
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
), n0 = m(r0), o0 = (t, e) => /* @__PURE__ */ o(
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
), s0 = m(o0), a0 = (t, e) => /* @__PURE__ */ f(
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
), i0 = m(a0), c0 = (t, e) => /* @__PURE__ */ f(
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
), l0 = m(c0), d0 = (t, e) => /* @__PURE__ */ o(
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
), u0 = m(d0), f0 = (t, e) => /* @__PURE__ */ o(
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
), h0 = m(f0), p0 = (t, e) => /* @__PURE__ */ f(
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
), m0 = m(p0), g0 = (t, e) => /* @__PURE__ */ f(
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
), v0 = m(g0), C0 = (t, e) => /* @__PURE__ */ f(
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
), w0 = m(C0), x0 = (t, e) => /* @__PURE__ */ f(
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
), k0 = m(x0), y0 = (t, e) => /* @__PURE__ */ f(
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
), b0 = m(y0), L0 = (t, e) => /* @__PURE__ */ o(
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
), M0 = m(L0), E0 = (t, e) => /* @__PURE__ */ o(
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
), _0 = m(E0), S0 = (t, e) => /* @__PURE__ */ f(
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
), R0 = m(S0), N0 = (t, e) => /* @__PURE__ */ f(
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
), T0 = m(N0), A0 = (t, e) => /* @__PURE__ */ f(
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
), V0 = m(A0), F0 = (t, e) => /* @__PURE__ */ o(
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
), P0 = m(F0), $0 = (t, e) => /* @__PURE__ */ f(
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
), H0 = m($0), I0 = (t, e) => /* @__PURE__ */ o(
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
), j0 = m(I0), O0 = (t, e) => /* @__PURE__ */ f(
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
), Z0 = m(O0), D0 = (t, e) => /* @__PURE__ */ f(
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
), B0 = m(D0), U0 = (t, e) => /* @__PURE__ */ f(
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
), z0 = m(U0), W0 = (t, e) => /* @__PURE__ */ f(
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
), G0 = m(W0), q0 = (t, e) => /* @__PURE__ */ f(
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
), Y0 = m(q0), X0 = (t, e) => /* @__PURE__ */ f(
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
), K0 = m(X0), Q0 = (t, e) => /* @__PURE__ */ f(
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
), Bo = m(Q0), J0 = (t, e) => /* @__PURE__ */ f(
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
), e5 = m(J0), t5 = (t, e) => /* @__PURE__ */ f(
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
), r5 = m(t5), n5 = (t, e) => /* @__PURE__ */ o(
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
), o5 = m(n5), s5 = (t, e) => /* @__PURE__ */ f(
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
), a5 = m(s5), i5 = (t, e) => /* @__PURE__ */ f(
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
), c5 = m(i5), l5 = (t, e) => /* @__PURE__ */ f(
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
), d5 = m(l5), u5 = (t, e) => /* @__PURE__ */ f(
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
), f5 = m(u5), h5 = (t, e) => /* @__PURE__ */ f(
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
), p5 = m(h5), m5 = (t, e) => /* @__PURE__ */ f(
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
), g5 = m(m5), v5 = (t, e) => /* @__PURE__ */ f(
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
), C5 = m(v5), w5 = (t, e) => /* @__PURE__ */ f(
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
), x5 = m(w5), k5 = (t, e) => /* @__PURE__ */ f(
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
), y5 = m(k5), b5 = (t, e) => /* @__PURE__ */ f(
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
), L5 = m(b5), M5 = (t, e) => /* @__PURE__ */ f(
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
), E5 = m(M5), _5 = (t, e) => /* @__PURE__ */ f(
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
), Uo = m(_5), S5 = (t, e) => /* @__PURE__ */ f(
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
), R5 = m(S5), N5 = (t, e) => /* @__PURE__ */ f(
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
), T5 = m(N5), A5 = (t, e) => /* @__PURE__ */ f(
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
), V5 = m(A5), F5 = (t, e) => /* @__PURE__ */ o(
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
), P5 = m(F5), $5 = (t, e) => /* @__PURE__ */ f(
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
), H5 = m($5), I5 = (t, e) => /* @__PURE__ */ f(
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
), j5 = m(I5), O5 = (t, e) => /* @__PURE__ */ f(
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
), Z5 = m(O5), D5 = (t, e) => /* @__PURE__ */ o(
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
), jr = m(D5), B5 = (t, e) => /* @__PURE__ */ o(
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
), U5 = m(B5), z5 = (t, e) => /* @__PURE__ */ f(
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
), W5 = m(z5), G5 = (t, e) => /* @__PURE__ */ f(
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
), q5 = m(G5), Y5 = (t, e) => /* @__PURE__ */ f(
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
), X5 = m(Y5), K5 = (t, e) => /* @__PURE__ */ o(
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
), Q5 = m(K5), J5 = (t, e) => /* @__PURE__ */ f(
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
), ed = m(J5), td = (t, e) => /* @__PURE__ */ o(
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
), rd = m(td), nd = (t, e) => /* @__PURE__ */ f(
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
), od = m(nd), sd = (t, e) => /* @__PURE__ */ o(
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
), ad = m(sd), id = (t, e) => /* @__PURE__ */ o(
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
), cd = m(id), ld = (t, e) => /* @__PURE__ */ o(
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
), dd = m(ld), ud = (t, e) => /* @__PURE__ */ f(
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
), fd = m(ud), hd = (t, e) => /* @__PURE__ */ f(
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
), pd = m(hd), md = (t, e) => /* @__PURE__ */ f(
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
), gd = m(md), vd = (t, e) => /* @__PURE__ */ o(
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
), Cd = m(vd), wd = (t, e) => /* @__PURE__ */ f(
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
), xd = m(wd), kd = (t, e) => /* @__PURE__ */ f(
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
), yd = m(kd), bd = (t, e) => /* @__PURE__ */ f(
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
), Ld = m(bd), Md = (t, e) => /* @__PURE__ */ o(
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
), zo = m(Md), Ed = (t, e) => /* @__PURE__ */ o(
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
), _d = m(Ed), Sd = (t, e) => /* @__PURE__ */ f(
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
), Rd = m(Sd), Nd = (t, e) => /* @__PURE__ */ f(
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
), Td = m(Nd), Ad = (t, e) => /* @__PURE__ */ o(
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
), Vd = m(Ad), Fd = (t, e) => /* @__PURE__ */ f(
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
), Pd = m(Fd), $d = (t, e) => /* @__PURE__ */ o(
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
), Or = m($d), Hd = (t, e) => /* @__PURE__ */ f(
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
), Id = m(Hd), jd = (t, e) => /* @__PURE__ */ o(
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
), Od = m(jd), Zd = (t, e) => /* @__PURE__ */ f(
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
), Dd = m(Zd), Bd = (t, e) => /* @__PURE__ */ f(
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
), Ud = m(Bd), zd = (t, e) => /* @__PURE__ */ f(
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
), Wd = m(zd), Gd = (t, e) => /* @__PURE__ */ f(
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
), qd = m(Gd), Yd = (t, e) => /* @__PURE__ */ f(
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
), Xd = m(Yd), Kd = (t, e) => /* @__PURE__ */ o(
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
), Qd = m(Kd), Jd = (t, e) => /* @__PURE__ */ f(
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
), Wo = m(Jd);
Wo.displayName = "ShoppingCart";
const e2 = (t, e) => /* @__PURE__ */ f(
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
), t2 = m(e2), r2 = (t, e) => /* @__PURE__ */ f(
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
), n2 = m(r2), o2 = (t, e) => /* @__PURE__ */ f(
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
), s2 = m(o2), a2 = (t, e) => /* @__PURE__ */ f(
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
), i2 = m(a2), c2 = (t, e) => /* @__PURE__ */ f(
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
), l2 = m(c2), d2 = (t, e) => /* @__PURE__ */ f(
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
), u2 = m(d2), f2 = (t, e) => /* @__PURE__ */ f(
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
), h2 = m(f2), p2 = (t, e) => /* @__PURE__ */ f(
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
), m2 = m(p2), g2 = (t, e) => /* @__PURE__ */ f(
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
), v2 = m(g2), C2 = (t, e) => /* @__PURE__ */ f(
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
), w2 = m(C2), x2 = (t, e) => /* @__PURE__ */ f(
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
), Go = m(x2), k2 = (t, e) => /* @__PURE__ */ f(
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
), qo = m(k2), y2 = (t, e) => /* @__PURE__ */ f(
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
), Yo = m(y2), b2 = (t, e) => /* @__PURE__ */ f(
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
), Xo = m(b2), L2 = (t, e) => /* @__PURE__ */ f(
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
), M2 = m(L2), E2 = (t, e) => /* @__PURE__ */ o(
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
), _2 = m(E2), S2 = (t, e) => /* @__PURE__ */ f(
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
), R2 = m(S2), N2 = (t, e) => /* @__PURE__ */ f(
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
), T2 = m(N2), A2 = (t, e) => /* @__PURE__ */ f(
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
), V2 = m(A2), F2 = (t, e) => /* @__PURE__ */ f(
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
), P2 = m(F2), $2 = (t, e) => /* @__PURE__ */ f(
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
), H2 = m($2), I2 = (t, e) => /* @__PURE__ */ f(
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
), j2 = m(I2), O2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcademicCap: bc,
  Add: _s,
  Ai: Ss,
  Alert: Rs,
  AlertCircle: lo,
  AlertCircleLine: Ns,
  AlignTextCenter: Ts,
  AlignTextJustify: As,
  AlignTextLeft: Vs,
  AlignTextRight: Fs,
  Appearance: Mc,
  Archive: _c,
  ArchiveOpen: Rc,
  ArrowCycle: Tc,
  ArrowDown: uo,
  ArrowLeft: Ps,
  ArrowRight: $s,
  ArrowUp: Rr,
  Ascending: Hs,
  Balance: Vc,
  Bank: Pc,
  BarGraph: Hc,
  Basket: jc,
  Bell: Is,
  Bold: js,
  BookOpen: Zc,
  Bookmark: Os,
  BookmarkFilled: Zs,
  Briefcase: Bc,
  Bucket: zc,
  Building: Gc,
  Bullet: Ds,
  Calculator: Bs,
  Calendar: Us,
  CalendarArrowDown: Yc,
  CalendarArrowLeft: Kc,
  CalendarArrowRight: Jc,
  CameraPlus: tl,
  CardPin: nl,
  ChartFunnel: sl,
  ChartHorizontalBars: il,
  ChartLine: ll,
  ChartPie: ul,
  ChartVerticalBars: hl,
  Check: fo,
  CheckCircle: zs,
  CheckCircleLine: ml,
  CheckDouble: Ws,
  ChevronDown: Nr,
  ChevronLeft: ho,
  ChevronRight: Kt,
  ChevronUp: po,
  Chip: vl,
  Circle: Gs,
  Clock: wl,
  ClockBack: kl,
  ClockPlus: bl,
  Cloud: Ml,
  Code: qs,
  Coffee: _l,
  Command: Rl,
  Comment: Ys,
  Completed: Xs,
  Computer: Tl,
  Contactless: Vl,
  CornerHandle: Pl,
  CreditCard: Hl,
  Cross: st,
  CrossedCircle: Ks,
  Crown: Zl,
  CursorClick: jl,
  Delete: mo,
  Deny: Bl,
  Descending: Qs,
  Desktop: zl,
  DollarBill: Gl,
  DollarReset: Yl,
  DottedCircle: go,
  Download: tt,
  DropdownDefault: Js,
  DropdownOpen: ea,
  Ellipsis: vo,
  EllipsisHorizontal: Co,
  Envelope: Kl,
  EnvelopeOpen: Jl,
  Equal: ta,
  EqualApproximately: ra,
  EqualGreater: na,
  EqualLess: oa,
  Exit: t0,
  ExternalLink: wo,
  EyeInvisible: sa,
  EyeVisible: aa,
  FaceNegative: ia,
  FaceNeutral: ca,
  FacePositive: la,
  FaceSuperNegative: da,
  FaceSuperPositive: ua,
  Feed: n0,
  File: s0,
  FileFilled: i0,
  FileSigned: l0,
  Files: u0,
  Filter: fa,
  FitView: h0,
  Flag: m0,
  Flask: v0,
  Folder: ha,
  Folders: w0,
  Globe: k0,
  Graph: b0,
  Greater: pa,
  Group: M0,
  GroupBy: _0,
  Handle: ma,
  Handshake: R0,
  HardDrive: T0,
  Heading1: ga,
  Heading2: va,
  Heading3: Ca,
  Headset: V0,
  Heart: P0,
  HoldHeart: H0,
  Home: j0,
  Hub: Z0,
  Image: wa,
  InProgressTask: xa,
  Inbox: B0,
  Info: z0,
  InfoCircle: ka,
  InfoCircleLine: ya,
  InputField: G0,
  Italic: ba,
  Kanban: La,
  Keyboard: Y0,
  Laptop: K0,
  LayersFront: Ma,
  Less: Ea,
  Lightbulb: Bo,
  Link: _a,
  LinkRemove: e5,
  List: Sa,
  LockLocked: Ra,
  LockUnlocked: r5,
  LogoAvatar: Na,
  LogoEruditai: o5,
  LogoTravelperk: a5,
  Marker: c5,
  Marketplace: d5,
  Masonry: f5,
  Maximize: xo,
  Megaphone: Ta,
  Menu: Aa,
  MessageFilled: p5,
  MessageFrown: g5,
  MessageHeart: C5,
  Messages: x5,
  Microphone: y5,
  MicrophoneNegative: L5,
  Minimize: ko,
  Minus: Va,
  Mobile: E5,
  Money: Uo,
  MoneyBag: R5,
  MonitorDot: T5,
  MonitorSmartphone: V5,
  Moon: P5,
  Mouse: H5,
  MoveDown: Fa,
  MoveTop: j5,
  MoveUp: Pa,
  Multitask: Z5,
  New: jr,
  Numbers: U5,
  Office: W5,
  OlList: $a,
  Organization: q5,
  PalmTree: X5,
  Paperclip: yo,
  PartiallyCompleted: Q5,
  Password: ed,
  PauseCircle: rd,
  Pencil: Ha,
  People: od,
  Person: Ia,
  PersonMinus: ad,
  PersonNegative: ja,
  PersonPlus: cd,
  Phone: dd,
  Pig: fd,
  Pin: pd,
  PixBrazil: gd,
  Placeholder: Oa,
  Plane: Cd,
  Plus: Za,
  Present: xd,
  Printer: yd,
  Proyector: Ld,
  PushPin: zo,
  PushPinSolid: _d,
  Question: Da,
  Quote: bo,
  Reaction: Ba,
  Receipt: Rd,
  Record: Td,
  RemoveFavorite: Vd,
  Replace: Pd,
  Reply: Or,
  Reset: Ua,
  Rocket: Id,
  Salad: Od,
  Save: Dd,
  Schedule: Ud,
  Search: Tr,
  SearchPerson: Wd,
  Settings: qd,
  Share: Xd,
  Shield: Qd,
  ShoppingCart: Wo,
  SignPost: t2,
  Sleep: n2,
  Sliders: Ar,
  SolidPause: za,
  SolidPlay: Wa,
  SolidStop: Lo,
  Sort: s2,
  Sparkles: i2,
  Spinner: Ga,
  Split: l2,
  Star: qa,
  StarFilled: Ya,
  Strikethrough: Xa,
  Suitcase: u2,
  Swap: h2,
  Table: Ka,
  Tablet: m2,
  Tag: v2,
  Target: w2,
  TextSize: Qa,
  ThumbsDown: Go,
  ThumbsDownFilled: qo,
  ThumbsUp: Yo,
  ThumbsUpFilled: Xo,
  Timer: M2,
  Underline: Ja,
  Upload: ei,
  Upsell: Mo,
  UserProtected: _2,
  Video: ti,
  VideoRecorder: R2,
  VideoRecorderNegative: T2,
  Wallet: V2,
  Warning: ri,
  Watch: P2,
  WhatsappChat: H2,
  Wifi: j2,
  Windows: ni
}, Symbol.toStringTag, { value: "Module" })), Z2 = (t, e) => /* @__PURE__ */ o(
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
), D2 = m(Z2), B2 = [
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
], Ko = m((t, e) => {
  const r = B2.reduce((n, s) => {
    const { [s]: a, ...i } = n;
    return i;
  }, t);
  return /* @__PURE__ */ o(
    Se,
    {
      ...r,
      variant: "ai",
      ref: e,
      iconRotate: t.icon == D2
    }
  );
});
Ko.displayName = "AIButton";
const Qo = {
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
}, Jo = {
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
}, U2 = {}, z2 = {
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
}, W2 = {
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
}, G2 = {
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
}, q2 = {
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
}, Y2 = {
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
}, X2 = {
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
}, e1 = {
  width: z2,
  height: W2,
  minWidth: G2,
  minHeight: q2,
  maxWidth: Y2,
  maxHeight: X2
}, t1 = {
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
}, r1 = {
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
}, n1 = {
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
}, K2 = {}, o1 = {
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
}, s1 = {
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
}, a1 = {
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
}, Q2 = {}, J2 = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, i1 = {
  overflow: J2,
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
}, eu = {}, c1 = {
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
}, tu = {}, ru = {
  boxShadow: {
    none: "shadow-none",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl"
  }
}, l1 = {
  zIndex: {
    auto: "z-auto",
    0: "z-0",
    10: "z-10",
    20: "z-20",
    30: "z-30",
    40: "z-40",
    50: "z-50"
  }
}, nu = {
  ...t1,
  ...s1,
  ...c1,
  ...a1,
  ...n1,
  ...o1,
  ...e1,
  ...Qo,
  ...Jo,
  ...i1,
  ...r1,
  ...l1
};
function ou(t, e) {
  return e.split(" ").map((r) => `${t}:${r}`).join(" ");
}
function su(t, e) {
  const r = [];
  for (const [n, s] of Object.entries(e)) {
    if (s == null) continue;
    const a = nu[n];
    if (!a) continue;
    const i = a[String(s)];
    i && r.push(ou(t, i));
  }
  return r.join(" ");
}
const au = at({
  base: "",
  variants: {
    ...t1,
    ...s1,
    ...c1,
    ...a1,
    ...n1,
    ...o1,
    ...e1,
    ...Qo,
    ...Jo,
    ...i1,
    ...r1,
    ...ru,
    ...l1
  },
  defaultVariants: {
    ...tu,
    ...Q2,
    ...K2,
    ...U2,
    ...eu
  }
}), iu = ["sm", "md", "lg", "xl"], d1 = m(
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
    padding: l,
    paddingX: c,
    paddingY: d,
    paddingTop: u,
    paddingBottom: h,
    paddingLeft: w,
    paddingRight: p,
    // Margin
    margin: g,
    marginX: y,
    marginY: k,
    marginTop: M,
    marginBottom: P,
    marginLeft: I,
    marginRight: T,
    // Gap
    gap: v,
    // Grid
    columns: C,
    rows: x,
    colSpan: S,
    colStart: _,
    rowSpan: b,
    // Dimensions
    width: L,
    height: N,
    minWidth: D,
    minHeight: Q,
    maxWidth: J,
    maxHeight: ae,
    // Background
    background: ne,
    // Border
    borderColor: X,
    border: E,
    borderTop: B,
    borderBottom: j,
    borderLeft: Y,
    borderRight: me,
    borderRadius: Ce,
    borderRadiusTopLeft: Z,
    borderRadiusTopRight: re,
    borderRadiusBottomLeft: le,
    borderRadiusBottomRight: ke,
    borderStyle: R,
    // Overflow
    overflow: H,
    overflowX: $,
    overflowY: K,
    // Divider
    divider: U,
    dividerColor: oe,
    boxShadow: ie,
    // Flex
    alignItems: be,
    justifyContent: Re,
    flexDirection: Ae,
    flexWrap: qe,
    grow: Ye,
    shrink: it,
    // Responsive breakpoint overrides
    sm: Qt,
    md: Jt,
    lg: er,
    xl: Ft,
    ...Pt
  }, tr) => {
    const $t = B && B !== "none" || j && j !== "none" || Y && Y !== "none" || me && me !== "none", rr = E && E !== "none" || $t, we = { sm: Qt, md: Jt, lg: er, xl: Ft }, Xe = iu.map((Ht) => {
      const It = we[Ht];
      return It ? su(Ht, It) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ o(
      "div",
      {
        ref: tr,
        className: F(
          $t && "border-0",
          au({
            display: t,
            position: e,
            top: r,
            right: n,
            bottom: s,
            left: a,
            zIndex: i,
            padding: l,
            paddingX: c,
            paddingY: d,
            paddingTop: u,
            paddingBottom: h,
            paddingLeft: w,
            paddingRight: p,
            margin: g,
            marginX: y,
            marginY: k,
            marginTop: M,
            marginBottom: P,
            marginLeft: I,
            marginRight: T,
            gap: v,
            columns: C,
            rows: x,
            colSpan: S,
            colStart: _,
            rowSpan: b,
            width: L,
            height: N,
            minWidth: D,
            minHeight: Q,
            maxWidth: J,
            maxHeight: ae,
            background: ne,
            borderColor: X,
            border: E,
            borderTop: B,
            borderBottom: j,
            borderLeft: Y,
            borderRight: me,
            borderRadius: Ce,
            borderRadiusTopLeft: Z,
            borderRadiusTopRight: re,
            borderRadiusBottomLeft: le,
            borderRadiusBottomRight: ke,
            borderStyle: R,
            overflow: H,
            overflowX: $,
            overflowY: K,
            divider: U,
            dividerColor: oe,
            alignItems: be,
            justifyContent: Re,
            flexDirection: Ae,
            flexWrap: qe,
            grow: Ye,
            shrink: it,
            boxShadow: ie
          }),
          Xe,
          rr && !X && "border-f1-border",
          U && !oe && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...Pt
      }
    );
  }
);
d1.displayName = "F0Box";
const nr = oi(
  {
    name: "F0Box",
    type: "layout"
  },
  d1
), Jr = ({ position: t }) => /* @__PURE__ */ o(
  ve.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: F(
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
), en = ({
  children: t,
  disableContentPadding: e = !1
}) => {
  const { position: r } = Eo(), n = z(null), [s, a] = q(!0), [i, l] = q(!0), c = ee(() => {
    const d = n.current;
    if (!d) return;
    const { scrollTop: u, scrollHeight: h, clientHeight: w } = d;
    a(u <= 0), l(u + w >= h - 1);
  }, []);
  return fe(() => {
    const d = n.current;
    if (!d) return;
    d.addEventListener("scroll", c, { passive: !0 }), c();
    const u = new ResizeObserver(() => c());
    return u.observe(d), () => {
      d.removeEventListener("scroll", c), u.disconnect();
    };
  }, [c]), /* @__PURE__ */ f("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
    /* @__PURE__ */ f(
      si,
      {
        viewportRef: n,
        className: F(
          "[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col",
          "[&_.resource-header]:p-0 [&_.resource-header]:pr-1",
          !e && "px-4 [&>div]:py-4",
          r === "fullscreen" && "h-full [&>div]:h-full [&>div>div]:h-full"
        ),
        children: [
          /* @__PURE__ */ o(ai, { layout: null, children: t }),
          /* @__PURE__ */ o(
            ii,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ f(Oe, { children: [
      !s && /* @__PURE__ */ o(Jr, { position: "top" }, "shadow-top"),
      !i && /* @__PURE__ */ o(Jr, { position: "bottom" }, "shadow-bottom")
    ] })
  ] });
}, cu = (t) => Array.isArray(t), lu = (t) => Array.isArray(t), tn = ({
  primaryAction: t,
  secondaryAction: e
}) => {
  const r = e, n = t;
  if (!n && !r)
    return null;
  const s = () => n ? cu(t) ? /* @__PURE__ */ o(
    Wr,
    {
      items: t.map((i) => ({
        value: i.value,
        label: i.label,
        icon: i.icon
      })),
      onClick: (i) => {
        t.find((c) => c.value === i)?.onClick();
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
      disabled: t.disabled,
      loading: t.loading
    }
  ) : null;
  return /* @__PURE__ */ f("div", { className: "flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3", children: [
    /* @__PURE__ */ o("div", { className: "flex-1" }),
    /* @__PURE__ */ f("div", { className: "flex flex-row items-center gap-2", children: [
      r ? lu(e) ? /* @__PURE__ */ o(
        Wr,
        {
          items: e.map((i) => ({
            value: i.value,
            label: i.label,
            icon: i.icon
          })),
          onClick: (i) => {
            e.find((c) => c.value === i)?.onClick();
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
          disabled: e.disabled,
          loading: e.loading
        }
      ) : null,
      s()
    ] })
  ] });
}, O3 = ["xs", "sm", "md", "lg"], rn = ({
  title: t,
  description: e,
  module: r,
  otherActions: n,
  tabs: s,
  activeTabId: a,
  setActiveTabId: i
}) => {
  const l = pe(), { onClose: c } = Eo(), d = !!s, u = () => /* @__PURE__ */ o("div", { className: "h-4 w-px self-center bg-f1-background-secondary" }), h = n?.filter(
    (g) => g.type !== "separator" && g.type !== "label"
  ) ?? [], w = () => {
    if (!h.length || !n) return null;
    const g = h.some((y) => y.critical);
    return h.length <= 2 && !g ? /* @__PURE__ */ o("div", { className: "flex flex-row gap-2", children: h.map((y) => /* @__PURE__ */ o(
      Se,
      {
        variant: "outline",
        icon: y.icon,
        onClick: y.onClick,
        label: y.label,
        hideLabel: !0
      },
      y.label
    )) }) : /* @__PURE__ */ o(hi, { items: n, icon: vo });
  }, p = () => r ? /* @__PURE__ */ o(ui, { children: /* @__PURE__ */ o(
    fi,
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
  return /* @__PURE__ */ f(ze, { children: [
    /* @__PURE__ */ f(
      "div",
      {
        className: F(
          "flex flex-row items-start justify-between gap-3 px-4 py-3",
          !d && "border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary"
        ),
        children: [
          /* @__PURE__ */ f("div", { className: "flex flex-col gap-1", children: [
            r ? /* @__PURE__ */ o(p, {}) : t && /* @__PURE__ */ o(ci, { className: "py-1 text-lg font-semibold text-f1-foreground", children: t }),
            !!e && /* @__PURE__ */ o(li, { className: "text-base text-f1-foreground-secondary", children: e })
          ] }),
          /* @__PURE__ */ f("div", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ o(w, {}),
            n && /* @__PURE__ */ o(u, {}),
            /* @__PURE__ */ o(
              Se,
              {
                variant: "outline",
                icon: st,
                onClick: c,
                label: l.actions.close,
                hideLabel: !0
              }
            )
          ] })
        ]
      }
    ),
    s && /* @__PURE__ */ o("div", { className: "-mx-2", children: /* @__PURE__ */ o(
      di,
      {
        tabs: s,
        activeTabId: a,
        setActiveTabId: i
      }
    ) })
  ] });
}, du = () => _o("(max-width: 560px)", {
  initializeWithValue: !1
}), uu = at({
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
}), fu = at({
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
}), hu = ({
  asBottomSheetInMobile: t = !0,
  position: e = "center",
  onClose: r,
  isOpen: n,
  children: s,
  width: a = "md",
  primaryAction: i,
  secondaryAction: l,
  title: c,
  description: d,
  module: u,
  otherActions: h,
  tabs: w,
  activeTabId: p,
  setActiveTabId: g,
  disableContentPadding: y,
  container: k
}) => {
  const [M, P] = q(null), I = ee((L) => {
    P(L);
  }, []), T = (L) => {
    L || r();
  }, v = du(), C = e === "left" || e === "right", x = de(() => v && t ? "bottomSheet" : e === "fullscreen" ? "fullscreen" : C ? "sidePosition" : "center", [v, t, C, e]), S = de(() => (a && !["center", "left", "right"].includes(e) && console.warn(
    "F0Dialog: `width` prop is only applicable to center and side panel positions"
  ), a), [x, a, e]), _ = de(() => fu({
    variant: x,
    position: e,
    width: S
  }), [x, e, S]), b = {
    title: c,
    description: d,
    module: u,
    otherActions: h,
    tabs: w,
    activeTabId: p,
    setActiveTabId: g
  };
  return v && t ? /* @__PURE__ */ o(
    Gr,
    {
      isOpen: n,
      onClose: r,
      position: e,
      portalContainer: M,
      shownBottomSheet: !0,
      children: /* @__PURE__ */ f(pi, { open: n, onOpenChange: T, children: [
        /* @__PURE__ */ o(mi, { className: "bg-f1-background-overlay" }),
        /* @__PURE__ */ f(gi, { ref: I, className: _, children: [
          /* @__PURE__ */ o(rn, { ...b }),
          /* @__PURE__ */ o(en, { disableContentPadding: y, children: s }),
          /* @__PURE__ */ o(
            tn,
            {
              primaryAction: i,
              secondaryAction: l
            }
          )
        ] })
      ] })
    }
  ) : /* @__PURE__ */ o(
    Gr,
    {
      isOpen: n,
      onClose: r,
      position: e,
      portalContainer: M,
      children: /* @__PURE__ */ o(
        vi,
        {
          open: n,
          onOpenChange: T,
          modal: e === "center" || e === "fullscreen",
          children: /* @__PURE__ */ f(
            Ci,
            {
              ref: I,
              withTranslateAnimation: !C,
              wrapperClassName: uu({
                variant: x,
                position: e
              }),
              className: _,
              onOpenAutoFocus: (L) => L.preventDefault(),
              container: k,
              children: [
                /* @__PURE__ */ o(rn, { ...b }),
                /* @__PURE__ */ o(en, { disableContentPadding: y, children: s }),
                /* @__PURE__ */ o(
                  tn,
                  {
                    primaryAction: i,
                    secondaryAction: l
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}, u1 = (t) => /* @__PURE__ */ o(hu, { ...t });
u1.displayName = "F0Dialog";
const pu = So(
  wi("F0Dialog", u1)
), mu = ["days", "hours", "minutes", "seconds"], Z3 = ["sm", "md"], f1 = [...mu], D3 = ["hours", "minutes"], Be = {
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1
};
function gu(t) {
  const e = Number.isFinite(t) ? t : 0;
  let r = Math.max(0, Math.floor(e));
  const n = Math.floor(r / Be.days);
  r = r % Be.days;
  const s = Math.floor(r / Be.hours);
  r = r % Be.hours;
  const a = Math.floor(r / Be.minutes), i = r % Be.minutes;
  return { days: n, hours: s, minutes: a, seconds: i };
}
function B3(t) {
  return f1.reduce((e, r) => {
    const n = t[r], s = Number.isFinite(n) ? n : 0, a = Math.max(0, Math.floor(s));
    return e + a * Be[r];
  }, 0);
}
function U3(t, e) {
  const r = Number.isFinite(t) ? t : 0;
  let n = Math.max(0, Math.floor(r));
  const s = { days: 0, hours: 0, minutes: 0, seconds: 0 }, a = f1.filter((i) => e.includes(i));
  for (const i of a)
    s[i] = Math.floor(n / Be[i]), n = n % Be[i];
  return s;
}
function z3(t, e) {
  return e != null && t > e ? e : t < 0 ? 0 : t;
}
var ue;
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
    const a = t.objectKeys(s).filter((l) => typeof s[s[l]] != "number"), i = {};
    for (const l of a)
      i[l] = s[l];
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
})(ue || (ue = {}));
var nn;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(nn || (nn = {}));
const W = ue.arrayToEnum([
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
]), Je = (t) => {
  switch (typeof t) {
    case "undefined":
      return W.undefined;
    case "string":
      return W.string;
    case "number":
      return Number.isNaN(t) ? W.nan : W.number;
    case "boolean":
      return W.boolean;
    case "function":
      return W.function;
    case "bigint":
      return W.bigint;
    case "symbol":
      return W.symbol;
    case "object":
      return Array.isArray(t) ? W.array : t === null ? W.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? W.promise : typeof Map < "u" && t instanceof Map ? W.map : typeof Set < "u" && t instanceof Set ? W.set : typeof Date < "u" && t instanceof Date ? W.date : W.object;
    default:
      return W.unknown;
  }
}, A = ue.arrayToEnum([
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
class We extends Error {
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
          let l = n, c = 0;
          for (; c < i.path.length; ) {
            const d = i.path[c];
            c === i.path.length - 1 ? (l[d] = l[d] || { _errors: [] }, l[d]._errors.push(r(i))) : l[d] = l[d] || { _errors: [] }, l = l[d], c++;
          }
        }
    };
    return s(this), n;
  }
  static assert(e) {
    if (!(e instanceof We))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ue.jsonStringifyReplacer, 2);
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
We.create = (t) => new We(t);
const vr = (t, e) => {
  let r;
  switch (t.code) {
    case A.invalid_type:
      t.received === W.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case A.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, ue.jsonStringifyReplacer)}`;
      break;
    case A.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${ue.joinValues(t.keys, ", ")}`;
      break;
    case A.invalid_union:
      r = "Invalid input";
      break;
    case A.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${ue.joinValues(t.options)}`;
      break;
    case A.invalid_enum_value:
      r = `Invalid enum value. Expected ${ue.joinValues(t.options)}, received '${t.received}'`;
      break;
    case A.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case A.invalid_return_type:
      r = "Invalid function return type";
      break;
    case A.invalid_date:
      r = "Invalid date";
      break;
    case A.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : ue.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case A.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "bigint" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case A.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case A.custom:
      r = "Invalid input";
      break;
    case A.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case A.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case A.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, ue.assertNever(t);
  }
  return { message: r };
};
let vu = vr;
function Cu() {
  return vu;
}
const wu = (t) => {
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
  let l = "";
  const c = n.filter((d) => !!d).slice().reverse();
  for (const d of c)
    l = d(i, { data: e, defaultError: l }).message;
  return {
    ...s,
    path: a,
    message: l
  };
};
function O(t, e) {
  const r = Cu(), n = wu({
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
      r === vr ? void 0 : vr
      // then global default map
    ].filter((s) => !!s)
  });
  t.common.issues.push(n);
}
class Fe {
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
        return te;
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
    return Fe.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: a, value: i } = s;
      if (a.status === "aborted" || i.status === "aborted")
        return te;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (n[a.value] = i.value);
    }
    return { status: e.value, value: n };
  }
}
const te = Object.freeze({
  status: "aborted"
}), Mt = (t) => ({ status: "dirty", value: t }), $e = (t) => ({ status: "valid", value: t }), on = (t) => t.status === "aborted", sn = (t) => t.status === "dirty", mt = (t) => t.status === "valid", Bt = (t) => typeof Promise < "u" && t instanceof Promise;
var G;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e?.message;
})(G || (G = {}));
class nt {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const an = (t, e) => {
  if (mt(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new We(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function se(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (i, l) => {
    const { message: c } = t;
    return i.code === "invalid_enum_value" ? { message: c ?? l.defaultError } : typeof l.data > "u" ? { message: c ?? n ?? l.defaultError } : i.code !== "invalid_type" ? { message: l.defaultError } : { message: c ?? r ?? l.defaultError };
  }, description: s };
}
class ce {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Je(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: Je(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Fe(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Je(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Bt(r))
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
      parsedType: Je(e)
    }, s = this._parseSync({ data: e, path: n.path, parent: n });
    return an(n, s);
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
      parsedType: Je(e)
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: r });
        return mt(n) ? {
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
    return this._parseAsync({ data: e, path: [], parent: r }).then((n) => mt(n) ? {
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
      parsedType: Je(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), a = await (Bt(s) ? s : Promise.resolve(s));
    return an(n, a);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, a) => {
      const i = e(s), l = () => a.addIssue({
        code: A.custom,
        ...n(s)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((c) => c ? !0 : (l(), !1)) : i ? !0 : (l(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new Ct({
      schema: this,
      typeName: V.ZodEffects,
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
    return rt.create(this, this._def);
  }
  nullable() {
    return wt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ze.create(this);
  }
  promise() {
    return Wt.create(this, this._def);
  }
  or(e) {
    return Ut.create([this, e], this._def);
  }
  and(e) {
    return zt.create(this, e, this._def);
  }
  transform(e) {
    return new Ct({
      ...se(this._def),
      schema: this,
      typeName: V.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new br({
      ...se(this._def),
      innerType: this,
      defaultValue: r,
      typeName: V.ZodDefault
    });
  }
  brand() {
    return new Du({
      typeName: V.ZodBranded,
      type: this,
      ...se(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Lr({
      ...se(this._def),
      innerType: this,
      catchValue: r,
      typeName: V.ZodCatch
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
    return Zr.create(this, e);
  }
  readonly() {
    return Mr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const xu = /^c[^\s-]{8,}$/i, ku = /^[0-9a-z]+$/, yu = /^[0-9A-HJKMNP-TV-Z]{26}$/i, bu = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Lu = /^[a-z0-9_-]{21}$/i, Mu = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Eu = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, _u = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Su = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let or;
const Ru = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Nu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Tu = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Au = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Vu = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Fu = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, h1 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Pu = new RegExp(`^${h1}$`);
function p1(t) {
  let e = "[0-5]\\d";
  t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`);
  const r = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${r}`;
}
function $u(t) {
  return new RegExp(`^${p1(t)}$`);
}
function Hu(t) {
  let e = `${h1}T${p1(t)}`;
  const r = [];
  return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function Iu(t, e) {
  return !!((e === "v4" || !e) && Ru.test(t) || (e === "v6" || !e) && Tu.test(t));
}
function ju(t, e) {
  if (!Mu.test(t))
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
function Ou(t, e) {
  return !!((e === "v4" || !e) && Nu.test(t) || (e === "v6" || !e) && Au.test(t));
}
class et extends ce {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== W.string) {
      const a = this._getOrReturnCtx(e);
      return O(a, {
        code: A.invalid_type,
        expected: W.string,
        received: a.parsedType
      }), te;
    }
    const n = new Fe();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (s = this._getOrReturnCtx(e, s), O(s, {
          code: A.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (s = this._getOrReturnCtx(e, s), O(s, {
          code: A.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, l = e.data.length < a.value;
        (i || l) && (s = this._getOrReturnCtx(e, s), i ? O(s, {
          code: A.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : l && O(s, {
          code: A.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        _u.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
          validation: "email",
          code: A.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        or || (or = new RegExp(Su, "u")), or.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
          validation: "emoji",
          code: A.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        bu.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
          validation: "uuid",
          code: A.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "nanoid")
        Lu.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
          validation: "nanoid",
          code: A.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        xu.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
          validation: "cuid",
          code: A.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        ku.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
          validation: "cuid2",
          code: A.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        yu.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
          validation: "ulid",
          code: A.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), O(s, {
            validation: "url",
            code: A.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
        validation: "regex",
        code: A.invalid_string,
        message: a.message
      }), n.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(e, s), O(s, {
        code: A.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), n.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s = this._getOrReturnCtx(e, s), O(s, {
        code: A.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), n.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s = this._getOrReturnCtx(e, s), O(s, {
        code: A.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), n.dirty()) : a.kind === "datetime" ? Hu(a).test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
        code: A.invalid_string,
        validation: "datetime",
        message: a.message
      }), n.dirty()) : a.kind === "date" ? Pu.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
        code: A.invalid_string,
        validation: "date",
        message: a.message
      }), n.dirty()) : a.kind === "time" ? $u(a).test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
        code: A.invalid_string,
        validation: "time",
        message: a.message
      }), n.dirty()) : a.kind === "duration" ? Eu.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
        validation: "duration",
        code: A.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "ip" ? Iu(e.data, a.version) || (s = this._getOrReturnCtx(e, s), O(s, {
        validation: "ip",
        code: A.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "jwt" ? ju(e.data, a.alg) || (s = this._getOrReturnCtx(e, s), O(s, {
        validation: "jwt",
        code: A.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "cidr" ? Ou(e.data, a.version) || (s = this._getOrReturnCtx(e, s), O(s, {
        validation: "cidr",
        code: A.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "base64" ? Vu.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
        validation: "base64",
        code: A.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "base64url" ? Fu.test(e.data) || (s = this._getOrReturnCtx(e, s), O(s, {
        validation: "base64url",
        code: A.invalid_string,
        message: a.message
      }), n.dirty()) : ue.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _regex(e, r, n) {
    return this.refinement((s) => e.test(s), {
      validation: r,
      code: A.invalid_string,
      ...G.errToObj(n)
    });
  }
  _addCheck(e) {
    return new et({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...G.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...G.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...G.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...G.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...G.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...G.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...G.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...G.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...G.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...G.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...G.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...G.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...G.errToObj(e) });
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
      ...G.errToObj(e?.message)
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
      ...G.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...G.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...G.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r?.position,
      ...G.errToObj(r?.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...G.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...G.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...G.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...G.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...G.errToObj(r)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, G.errToObj(e));
  }
  trim() {
    return new et({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new et({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new et({
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
et.create = (t) => new et({
  checks: [],
  typeName: V.ZodString,
  coerce: t?.coerce ?? !1,
  ...se(t)
});
function Zu(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, a = Number.parseInt(t.toFixed(s).replace(".", "")), i = Number.parseInt(e.toFixed(s).replace(".", ""));
  return a % i / 10 ** s;
}
class gt extends ce {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== W.number) {
      const a = this._getOrReturnCtx(e);
      return O(a, {
        code: A.invalid_type,
        expected: W.number,
        received: a.parsedType
      }), te;
    }
    let n;
    const s = new Fe();
    for (const a of this._def.checks)
      a.kind === "int" ? ue.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), O(n, {
        code: A.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: A.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: A.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? Zu(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), O(n, {
        code: A.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), O(n, {
        code: A.not_finite,
        message: a.message
      }), s.dirty()) : ue.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, G.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, G.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, G.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, G.toString(r));
  }
  setLimit(e, r, n, s) {
    return new gt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: G.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new gt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: G.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: G.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: G.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: G.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: G.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: G.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: G.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: G.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: G.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && ue.isInteger(e.value));
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
gt.create = (t) => new gt({
  checks: [],
  typeName: V.ZodNumber,
  coerce: t?.coerce || !1,
  ...se(t)
});
class Nt extends ce {
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
    if (this._getType(e) !== W.bigint)
      return this._getInvalidInput(e);
    let n;
    const s = new Fe();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: A.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: A.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: A.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : ue.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _getInvalidInput(e) {
    const r = this._getOrReturnCtx(e);
    return O(r, {
      code: A.invalid_type,
      expected: W.bigint,
      received: r.parsedType
    }), te;
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, G.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, G.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, G.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, G.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Nt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: G.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Nt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: G.toString(r)
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
Nt.create = (t) => new Nt({
  checks: [],
  typeName: V.ZodBigInt,
  coerce: t?.coerce ?? !1,
  ...se(t)
});
class Cr extends ce {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== W.boolean) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: A.invalid_type,
        expected: W.boolean,
        received: n.parsedType
      }), te;
    }
    return $e(e.data);
  }
}
Cr.create = (t) => new Cr({
  typeName: V.ZodBoolean,
  coerce: t?.coerce || !1,
  ...se(t)
});
class Tt extends ce {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== W.date) {
      const a = this._getOrReturnCtx(e);
      return O(a, {
        code: A.invalid_type,
        expected: W.date,
        received: a.parsedType
      }), te;
    }
    if (Number.isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return O(a, {
        code: A.invalid_date
      }), te;
    }
    const n = new Fe();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (s = this._getOrReturnCtx(e, s), O(s, {
        code: A.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s = this._getOrReturnCtx(e, s), O(s, {
        code: A.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : ue.assertNever(a);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Tt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: G.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: G.toString(r)
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
Tt.create = (t) => new Tt({
  checks: [],
  coerce: t?.coerce || !1,
  typeName: V.ZodDate,
  ...se(t)
});
class cn extends ce {
  _parse(e) {
    if (this._getType(e) !== W.symbol) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: A.invalid_type,
        expected: W.symbol,
        received: n.parsedType
      }), te;
    }
    return $e(e.data);
  }
}
cn.create = (t) => new cn({
  typeName: V.ZodSymbol,
  ...se(t)
});
class ln extends ce {
  _parse(e) {
    if (this._getType(e) !== W.undefined) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: A.invalid_type,
        expected: W.undefined,
        received: n.parsedType
      }), te;
    }
    return $e(e.data);
  }
}
ln.create = (t) => new ln({
  typeName: V.ZodUndefined,
  ...se(t)
});
class dn extends ce {
  _parse(e) {
    if (this._getType(e) !== W.null) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: A.invalid_type,
        expected: W.null,
        received: n.parsedType
      }), te;
    }
    return $e(e.data);
  }
}
dn.create = (t) => new dn({
  typeName: V.ZodNull,
  ...se(t)
});
class wr extends ce {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return $e(e.data);
  }
}
wr.create = (t) => new wr({
  typeName: V.ZodAny,
  ...se(t)
});
class xr extends ce {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return $e(e.data);
  }
}
xr.create = (t) => new xr({
  typeName: V.ZodUnknown,
  ...se(t)
});
class ot extends ce {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return O(r, {
      code: A.invalid_type,
      expected: W.never,
      received: r.parsedType
    }), te;
  }
}
ot.create = (t) => new ot({
  typeName: V.ZodNever,
  ...se(t)
});
class un extends ce {
  _parse(e) {
    if (this._getType(e) !== W.undefined) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: A.invalid_type,
        expected: W.void,
        received: n.parsedType
      }), te;
    }
    return $e(e.data);
  }
}
un.create = (t) => new un({
  typeName: V.ZodVoid,
  ...se(t)
});
class Ze extends ce {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== W.array)
      return O(r, {
        code: A.invalid_type,
        expected: W.array,
        received: r.parsedType
      }), te;
    if (s.exactLength !== null) {
      const i = r.data.length > s.exactLength.value, l = r.data.length < s.exactLength.value;
      (i || l) && (O(r, {
        code: i ? A.too_big : A.too_small,
        minimum: l ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (O(r, {
      code: A.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (O(r, {
      code: A.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((i, l) => s.type._parseAsync(new nt(r, i, r.path, l)))).then((i) => Fe.mergeArray(n, i));
    const a = [...r.data].map((i, l) => s.type._parseSync(new nt(r, i, r.path, l)));
    return Fe.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Ze({
      ...this._def,
      minLength: { value: e, message: G.toString(r) }
    });
  }
  max(e, r) {
    return new Ze({
      ...this._def,
      maxLength: { value: e, message: G.toString(r) }
    });
  }
  length(e, r) {
    return new Ze({
      ...this._def,
      exactLength: { value: e, message: G.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ze.create = (t, e) => new Ze({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: V.ZodArray,
  ...se(e)
});
function ft(t) {
  if (t instanceof xe) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = rt.create(ft(n));
    }
    return new xe({
      ...t._def,
      shape: () => e
    });
  } else return t instanceof Ze ? new Ze({
    ...t._def,
    type: ft(t.element)
  }) : t instanceof rt ? rt.create(ft(t.unwrap())) : t instanceof wt ? wt.create(ft(t.unwrap())) : t instanceof ct ? ct.create(t.items.map((e) => ft(e))) : t;
}
class xe extends ce {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = ue.objectKeys(e);
    return this._cached = { shape: e, keys: r }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== W.object) {
      const d = this._getOrReturnCtx(e);
      return O(d, {
        code: A.invalid_type,
        expected: W.object,
        received: d.parsedType
      }), te;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), l = [];
    if (!(this._def.catchall instanceof ot && this._def.unknownKeys === "strip"))
      for (const d in s.data)
        i.includes(d) || l.push(d);
    const c = [];
    for (const d of i) {
      const u = a[d], h = s.data[d];
      c.push({
        key: { status: "valid", value: d },
        value: u._parse(new nt(s, h, s.path, d)),
        alwaysSet: d in s.data
      });
    }
    if (this._def.catchall instanceof ot) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const u of l)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (d === "strict")
        l.length > 0 && (O(s, {
          code: A.unrecognized_keys,
          keys: l
        }), n.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const u of l) {
        const h = s.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: d._parse(
            new nt(s, h, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const u of c) {
        const h = await u.key, w = await u.value;
        d.push({
          key: h,
          value: w,
          alwaysSet: u.alwaysSet
        });
      }
      return d;
    }).then((d) => Fe.mergeObjectSync(n, d)) : Fe.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return G.errToObj, new xe({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          const s = this._def.errorMap?.(r, n).message ?? n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: G.errToObj(e).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new xe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new xe({
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
    return new xe({
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
    return new xe({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: V.ZodObject
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
    return new xe({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    for (const n of ue.objectKeys(e))
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    return new xe({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    for (const n of ue.objectKeys(this.shape))
      e[n] || (r[n] = this.shape[n]);
    return new xe({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ft(this);
  }
  partial(e) {
    const r = {};
    for (const n of ue.objectKeys(this.shape)) {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }
    return new xe({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    for (const n of ue.objectKeys(this.shape))
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let a = this.shape[n];
        for (; a instanceof rt; )
          a = a._def.innerType;
        r[n] = a;
      }
    return new xe({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return m1(ue.objectKeys(this.shape));
  }
}
xe.create = (t, e) => new xe({
  shape: () => t,
  unknownKeys: "strip",
  catchall: ot.create(),
  typeName: V.ZodObject,
  ...se(e)
});
xe.strictCreate = (t, e) => new xe({
  shape: () => t,
  unknownKeys: "strict",
  catchall: ot.create(),
  typeName: V.ZodObject,
  ...se(e)
});
xe.lazycreate = (t, e) => new xe({
  shape: t,
  unknownKeys: "strip",
  catchall: ot.create(),
  typeName: V.ZodObject,
  ...se(e)
});
class Ut extends ce {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(a) {
      for (const l of a)
        if (l.result.status === "valid")
          return l.result;
      for (const l of a)
        if (l.result.status === "dirty")
          return r.common.issues.push(...l.ctx.common.issues), l.result;
      const i = a.map((l) => new We(l.ctx.common.issues));
      return O(r, {
        code: A.invalid_union,
        unionErrors: i
      }), te;
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
      for (const c of n) {
        const d = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
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
      const l = i.map((c) => new We(c));
      return O(r, {
        code: A.invalid_union,
        unionErrors: l
      }), te;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ut.create = (t, e) => new Ut({
  options: t,
  typeName: V.ZodUnion,
  ...se(e)
});
function kr(t, e) {
  const r = Je(t), n = Je(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === W.object && n === W.object) {
    const s = ue.objectKeys(e), a = ue.objectKeys(t).filter((l) => s.indexOf(l) !== -1), i = { ...t, ...e };
    for (const l of a) {
      const c = kr(t[l], e[l]);
      if (!c.valid)
        return { valid: !1 };
      i[l] = c.data;
    }
    return { valid: !0, data: i };
  } else if (r === W.array && n === W.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a], l = e[a], c = kr(i, l);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else return r === W.date && n === W.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class zt extends ce {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (a, i) => {
      if (on(a) || on(i))
        return te;
      const l = kr(a.value, i.value);
      return l.valid ? ((sn(a) || sn(i)) && r.dirty(), { status: r.value, value: l.data }) : (O(n, {
        code: A.invalid_intersection_types
      }), te);
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
zt.create = (t, e, r) => new zt({
  left: t,
  right: e,
  typeName: V.ZodIntersection,
  ...se(r)
});
class ct extends ce {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== W.array)
      return O(n, {
        code: A.invalid_type,
        expected: W.array,
        received: n.parsedType
      }), te;
    if (n.data.length < this._def.items.length)
      return O(n, {
        code: A.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), te;
    !this._def.rest && n.data.length > this._def.items.length && (O(n, {
      code: A.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const a = [...n.data].map((i, l) => {
      const c = this._def.items[l] || this._def.rest;
      return c ? c._parse(new nt(n, i, n.path, l)) : null;
    }).filter((i) => !!i);
    return n.common.async ? Promise.all(a).then((i) => Fe.mergeArray(r, i)) : Fe.mergeArray(r, a);
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
    typeName: V.ZodTuple,
    rest: null,
    ...se(e)
  });
};
class fn extends ce {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== W.map)
      return O(n, {
        code: A.invalid_type,
        expected: W.map,
        received: n.parsedType
      }), te;
    const s = this._def.keyType, a = this._def.valueType, i = [...n.data.entries()].map(([l, c], d) => ({
      key: s._parse(new nt(n, l, n.path, [d, "key"])),
      value: a._parse(new nt(n, c, n.path, [d, "value"]))
    }));
    if (n.common.async) {
      const l = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of i) {
          const d = await c.key, u = await c.value;
          if (d.status === "aborted" || u.status === "aborted")
            return te;
          (d.status === "dirty" || u.status === "dirty") && r.dirty(), l.set(d.value, u.value);
        }
        return { status: r.value, value: l };
      });
    } else {
      const l = /* @__PURE__ */ new Map();
      for (const c of i) {
        const d = c.key, u = c.value;
        if (d.status === "aborted" || u.status === "aborted")
          return te;
        (d.status === "dirty" || u.status === "dirty") && r.dirty(), l.set(d.value, u.value);
      }
      return { status: r.value, value: l };
    }
  }
}
fn.create = (t, e, r) => new fn({
  valueType: e,
  keyType: t,
  typeName: V.ZodMap,
  ...se(r)
});
class At extends ce {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== W.set)
      return O(n, {
        code: A.invalid_type,
        expected: W.set,
        received: n.parsedType
      }), te;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (O(n, {
      code: A.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (O(n, {
      code: A.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const a = this._def.valueType;
    function i(c) {
      const d = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return te;
        u.status === "dirty" && r.dirty(), d.add(u.value);
      }
      return { status: r.value, value: d };
    }
    const l = [...n.data.values()].map((c, d) => a._parse(new nt(n, c, n.path, d)));
    return n.common.async ? Promise.all(l).then((c) => i(c)) : i(l);
  }
  min(e, r) {
    return new At({
      ...this._def,
      minSize: { value: e, message: G.toString(r) }
    });
  }
  max(e, r) {
    return new At({
      ...this._def,
      maxSize: { value: e, message: G.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
At.create = (t, e) => new At({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: V.ZodSet,
  ...se(e)
});
class hn extends ce {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
hn.create = (t, e) => new hn({
  getter: t,
  typeName: V.ZodLazy,
  ...se(e)
});
class yr extends ce {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        received: r.data,
        code: A.invalid_literal,
        expected: this._def.value
      }), te;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
yr.create = (t, e) => new yr({
  value: t,
  typeName: V.ZodLiteral,
  ...se(e)
});
function m1(t, e) {
  return new vt({
    values: t,
    typeName: V.ZodEnum,
    ...se(e)
  });
}
class vt extends ce {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return O(r, {
        expected: ue.joinValues(n),
        received: r.parsedType,
        code: A.invalid_type
      }), te;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return O(r, {
        received: r.data,
        code: A.invalid_enum_value,
        options: n
      }), te;
    }
    return $e(e.data);
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
    return vt.create(e, {
      ...this._def,
      ...r
    });
  }
  exclude(e, r = this._def) {
    return vt.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
vt.create = m1;
class pn extends ce {
  _parse(e) {
    const r = ue.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== W.string && n.parsedType !== W.number) {
      const s = ue.objectValues(r);
      return O(n, {
        expected: ue.joinValues(s),
        received: n.parsedType,
        code: A.invalid_type
      }), te;
    }
    if (this._cache || (this._cache = new Set(ue.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const s = ue.objectValues(r);
      return O(n, {
        received: n.data,
        code: A.invalid_enum_value,
        options: s
      }), te;
    }
    return $e(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
pn.create = (t, e) => new pn({
  values: t,
  typeName: V.ZodNativeEnum,
  ...se(e)
});
class Wt extends ce {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== W.promise && r.common.async === !1)
      return O(r, {
        code: A.invalid_type,
        expected: W.promise,
        received: r.parsedType
      }), te;
    const n = r.parsedType === W.promise ? r.data : Promise.resolve(r.data);
    return $e(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Wt.create = (t, e) => new Wt({
  type: t,
  typeName: V.ZodPromise,
  ...se(e)
});
class Ct extends ce {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === V.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = this._def.effect || null, a = {
      addIssue: (i) => {
        O(n, i), i.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
      const i = s.transform(n.data, a);
      if (n.common.async)
        return Promise.resolve(i).then(async (l) => {
          if (r.value === "aborted")
            return te;
          const c = await this._def.schema._parseAsync({
            data: l,
            path: n.path,
            parent: n
          });
          return c.status === "aborted" ? te : c.status === "dirty" || r.value === "dirty" ? Mt(c.value) : c;
        });
      {
        if (r.value === "aborted")
          return te;
        const l = this._def.schema._parseSync({
          data: i,
          path: n.path,
          parent: n
        });
        return l.status === "aborted" ? te : l.status === "dirty" || r.value === "dirty" ? Mt(l.value) : l;
      }
    }
    if (s.type === "refinement") {
      const i = (l) => {
        const c = s.refinement(l, a);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return l;
      };
      if (n.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return l.status === "aborted" ? te : (l.status === "dirty" && r.dirty(), i(l.value), { status: r.value, value: l.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((l) => l.status === "aborted" ? te : (l.status === "dirty" && r.dirty(), i(l.value).then(() => ({ status: r.value, value: l.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!mt(i))
          return te;
        const l = s.transform(i.value, a);
        if (l instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: l };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => mt(i) ? Promise.resolve(s.transform(i.value, a)).then((l) => ({
          status: r.value,
          value: l
        })) : te);
    ue.assertNever(s);
  }
}
Ct.create = (t, e, r) => new Ct({
  schema: t,
  typeName: V.ZodEffects,
  effect: e,
  ...se(r)
});
Ct.createWithPreprocess = (t, e, r) => new Ct({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: V.ZodEffects,
  ...se(r)
});
class rt extends ce {
  _parse(e) {
    return this._getType(e) === W.undefined ? $e(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
rt.create = (t, e) => new rt({
  innerType: t,
  typeName: V.ZodOptional,
  ...se(e)
});
class wt extends ce {
  _parse(e) {
    return this._getType(e) === W.null ? $e(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
wt.create = (t, e) => new wt({
  innerType: t,
  typeName: V.ZodNullable,
  ...se(e)
});
class br extends ce {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === W.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
br.create = (t, e) => new br({
  innerType: t,
  typeName: V.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...se(e)
});
class Lr extends ce {
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
    return Bt(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new We(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new We(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Lr.create = (t, e) => new Lr({
  innerType: t,
  typeName: V.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...se(e)
});
class mn extends ce {
  _parse(e) {
    if (this._getType(e) !== W.nan) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: A.invalid_type,
        expected: W.nan,
        received: n.parsedType
      }), te;
    }
    return { status: "valid", value: e.data };
  }
}
mn.create = (t) => new mn({
  typeName: V.ZodNaN,
  ...se(t)
});
class Du extends ce {
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
class Zr extends ce {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? te : a.status === "dirty" ? (r.dirty(), Mt(a.value)) : this._def.out._parseAsync({
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
      return s.status === "aborted" ? te : s.status === "dirty" ? (r.dirty(), {
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
    return new Zr({
      in: e,
      out: r,
      typeName: V.ZodPipeline
    });
  }
}
class Mr extends ce {
  _parse(e) {
    const r = this._def.innerType._parse(e), n = (s) => (mt(s) && (s.value = Object.freeze(s.value)), s);
    return Bt(r) ? r.then((s) => n(s)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mr.create = (t, e) => new Mr({
  innerType: t,
  typeName: V.ZodReadonly,
  ...se(e)
});
var V;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(V || (V = {}));
const Me = et.create, lt = gt.create, gn = Cr.create, Ke = Tt.create, W3 = wr.create, G3 = xr.create;
ot.create;
const yt = Ze.create, Er = xe.create;
Ut.create;
zt.create;
ct.create;
const vn = yr.create, bt = vt.create;
Wt.create;
rt.create;
wt.create;
function je(t, e) {
  return t._def?.typeName === e;
}
function q3(t) {
  return je(t, "ZodEffects") ? t._def.schema : t;
}
const g1 = /* @__PURE__ */ new WeakMap();
function Cn(t, e) {
  g1.set(t, e);
  const r = t;
  return r._f0Config = e, r._innerSchema = t, r;
}
function v1(t) {
  const e = t;
  return e._f0Config ? e._f0Config : g1.get(t);
}
function Y3(t) {
  return v1(t) !== void 0;
}
function Gt(t) {
  let e = t;
  for (; je(e, "ZodOptional") || je(e, "ZodNullable") || je(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function wn(t, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const r = Gt(t);
  return je(r, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : je(r, "ZodNumber") ? "number" : je(r, "ZodBoolean") ? "switch" : je(r, "ZodDate") ? "date" : je(r, "ZodEnum") || je(r, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : je(r, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
((t) => {
  function e({
    optional: v,
    minLength: C,
    maxLength: x,
    ...S
  }) {
    let _ = Me();
    const b = !v && C === void 0 ? 1 : C;
    b !== void 0 && (_ = _.min(b)), x !== void 0 && (_ = _.max(x));
    const L = v ? _.optional() : _;
    return t(L, S);
  }
  t.text = e;
  function r({ optional: v, ...C }) {
    const x = v ? Me().email().optional() : Me().email();
    return t(x, C);
  }
  t.email = r;
  function n({ optional: v, ...C }) {
    const x = v ? Me().optional() : Me().min(1);
    return t(
      x,
      { ...C, fieldType: "textarea" }
    );
  }
  t.textarea = n;
  function s({
    optional: v,
    min: C,
    max: x,
    isInt: S,
    ..._
  }) {
    let b = lt();
    S && (b = b.int()), C !== void 0 && (b = b.min(C)), x !== void 0 && (b = b.max(x));
    const L = v ? b.optional() : b;
    return t(L, _);
  }
  t.number = s;
  function a({ optional: v, ...C }) {
    const x = v ? gn() : vn(!0);
    return t(
      x,
      { ...C, fieldType: "switch" }
    );
  }
  t.boolean = a;
  function i({ optional: v, ...C }) {
    const x = v ? gn() : vn(!0);
    return t(
      x,
      { ...C, fieldType: "checkbox" }
    );
  }
  t.checkbox = i;
  function l({ optional: v, ...C }) {
    const x = v ? Ke().optional() : Ke();
    return t(x, C);
  }
  t.date = l;
  function c({ optional: v, ...C }) {
    const x = v ? Me().url().optional() : Me().url();
    return t(x, C);
  }
  t.url = c;
  function d({ optional: v, ...C }) {
    const x = v ? lt().optional() : lt();
    return t(
      x,
      { ...C, fieldType: "money" }
    );
  }
  t.money = d;
  function u({
    optional: v,
    min: C,
    max: x,
    ...S
  }) {
    let _ = lt();
    C !== void 0 && (_ = _.min(C)), x !== void 0 && (_ = _.max(x));
    const b = v ? _.optional() : _;
    return t(
      b,
      { ...S, fieldType: "percentage" }
    );
  }
  t.percentage = u;
  function h(v) {
    if (v.options.length === 0)
      throw new Error(
        "f0FormField.cardSelect requires at least one option to build a Zod enum"
      );
    const { optional: C, ...x } = v, S = x.options.map((b) => b.value), _ = C ? bt(S).optional() : bt(S);
    return t(
      _,
      { ...x, fieldType: "cardSelect" }
    );
  }
  t.cardSelect = h;
  function w({ optional: v, ...C }) {
    const x = v ? Me().optional() : Me().min(1);
    return t(
      x,
      { ...C, fieldType: "file", multiple: !1 }
    );
  }
  t.file = w;
  function p({ optional: v, ...C }) {
    const x = v ? yt(Me()).optional() : yt(Me()).min(1);
    return t(
      x,
      { ...C, fieldType: "file", multiple: !0 }
    );
  }
  t.multiFile = p;
  function g({ optional: v, ...C }) {
    const x = v ? Ke().optional() : Ke();
    return t(
      x,
      { ...C, fieldType: "time" }
    );
  }
  t.time = g;
  function y({ optional: v, ...C }) {
    const x = v ? Ke().optional() : Ke();
    return t(
      x,
      { ...C, fieldType: "datetime" }
    );
  }
  t.datetime = y;
  function k({ optional: v, ...C }) {
    const x = v ? lt().optional() : lt();
    return t(
      x,
      { ...C, fieldType: "duration" }
    );
  }
  t.duration = k;
  function M({ optional: v, ...C }) {
    const x = Er({ from: Ke(), to: Ke() }), S = v ? x.optional() : x;
    return t(
      S,
      { ...C, fieldType: "daterange" }
    );
  }
  t.dateRange = M;
  function P({ optional: v, ...C }) {
    const x = Er({
      value: Me(),
      mentionIds: yt(Me()).optional()
    }), S = v ? x.optional() : x;
    return t(
      S,
      { ...C, fieldType: "richtext" }
    );
  }
  t.richText = P;
  function I(v) {
    if (typeof v != "object" || v === null)
      throw new TypeError("f0FormField.select requires a config object");
    const C = v, { optional: x, ...S } = C, _ = Array.isArray(C.options) ? C.options : void 0;
    if (_ && _.length > 0) {
      const L = _.filter(
        (N) => typeof N == "object" && N !== null && "value" in N && typeof N.value == "string"
      ).map((N) => N.value);
      if (L.length > 0) {
        const N = x ? bt(L).optional() : bt(L);
        return t(N, S);
      }
    }
    const b = x ? Me().optional() : Me();
    return t(b, S);
  }
  t.select = I;
  function T(v) {
    if (typeof v != "object" || v === null)
      throw new TypeError("f0FormField.multiSelect requires a config object");
    const C = v, { optional: x, ...S } = C, _ = Array.isArray(C.options) ? C.options : void 0;
    if (_ && _.length > 0) {
      const N = _.filter(
        (D) => typeof D == "object" && D !== null && "value" in D && typeof D.value == "string"
      ).map((D) => D.value);
      if (N.length > 0) {
        const D = yt(bt(N)).min(1), Q = x ? D.optional() : D;
        return t(
          Q,
          { ...S, multiple: !0 }
        );
      }
    }
    const b = yt(Me()).min(1), L = x ? b.optional() : b;
    return t(L, { ...S, multiple: !0 });
  }
  t.multiSelect = T;
})(Cn || (Cn = {}));
const Bu = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use"), Uu = {
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
}, zu = (t) => ({
  ...Uu,
  ...t
}), Wu = (t) => {
  const e = zu(t), r = e.name !== void 0 ? [...e.basePath, e.definitionPath, e.name] : e.basePath;
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
function C1(t, e, r, n) {
  n?.errorMessages && r && (t.errorMessage = {
    ...t.errorMessage,
    [e]: r
  });
}
function ge(t, e, r, n, s) {
  t[e] = r, C1(t, e, n, s);
}
const w1 = (t, e) => {
  let r = 0;
  for (; r < t.length && r < e.length && t[r] === e[r]; r++)
    ;
  return [(t.length - r).toString(), ...e.slice(r)].join("/");
};
function Te(t) {
  if (t.target !== "openAi")
    return {};
  const e = [
    ...t.basePath,
    t.definitionPath,
    t.openAiAnyTypeName
  ];
  return t.flags.hasReferencedOpenAiAnyType = !0, {
    $ref: t.$refStrategy === "relative" ? w1(e, t.currentPath) : e.join("/")
  };
}
function Gu(t, e) {
  const r = {
    type: "array"
  };
  return t.type?._def && t.type?._def?.typeName !== V.ZodAny && (r.items = he(t.type._def, {
    ...e,
    currentPath: [...e.currentPath, "items"]
  })), t.minLength && ge(r, "minItems", t.minLength.value, t.minLength.message, e), t.maxLength && ge(r, "maxItems", t.maxLength.value, t.maxLength.message, e), t.exactLength && (ge(r, "minItems", t.exactLength.value, t.exactLength.message, e), ge(r, "maxItems", t.exactLength.value, t.exactLength.message, e)), r;
}
function qu(t, e) {
  const r = {
    type: "integer",
    format: "int64"
  };
  if (!t.checks)
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "min":
        e.target === "jsonSchema7" ? n.inclusive ? ge(r, "minimum", n.value, n.message, e) : ge(r, "exclusiveMinimum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMinimum = !0), ge(r, "minimum", n.value, n.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? n.inclusive ? ge(r, "maximum", n.value, n.message, e) : ge(r, "exclusiveMaximum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMaximum = !0), ge(r, "maximum", n.value, n.message, e));
        break;
      case "multipleOf":
        ge(r, "multipleOf", n.value, n.message, e);
        break;
    }
  return r;
}
function Yu() {
  return {
    type: "boolean"
  };
}
function x1(t, e) {
  return he(t.type._def, e);
}
const Xu = (t, e) => he(t.innerType._def, e);
function k1(t, e, r) {
  const n = r ?? e.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((s, a) => k1(t, e, s))
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
      return Ku(t, e);
  }
}
const Ku = (t, e) => {
  const r = {
    type: "integer",
    format: "unix-time"
  };
  if (e.target === "openApi3")
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "min":
        ge(
          r,
          "minimum",
          n.value,
          // This is in milliseconds
          n.message,
          e
        );
        break;
      case "max":
        ge(
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
function Qu(t, e) {
  return {
    ...he(t.innerType._def, e),
    default: t.defaultValue()
  };
}
function Ju(t, e) {
  return e.effectStrategy === "input" ? he(t.schema._def, e) : Te(e);
}
function e4(t) {
  return {
    type: "string",
    enum: Array.from(t.values)
  };
}
const t4 = (t) => "type" in t && t.type === "string" ? !1 : "allOf" in t;
function r4(t, e) {
  const r = [
    he(t.left._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "0"]
    }),
    he(t.right._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "1"]
    })
  ].filter((a) => !!a);
  let n = e.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const s = [];
  return r.forEach((a) => {
    if (t4(a))
      s.push(...a.allOf), a.unevaluatedProperties === void 0 && (n = void 0);
    else {
      let i = a;
      if ("additionalProperties" in a && a.additionalProperties === !1) {
        const { additionalProperties: l, ...c } = a;
        i = c;
      } else
        n = void 0;
      s.push(i);
    }
  }), s.length ? {
    allOf: s,
    ...n
  } : void 0;
}
function n4(t, e) {
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
let sr;
const He = {
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
  emoji: () => (sr === void 0 && (sr = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), sr),
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
function y1(t, e) {
  const r = {
    type: "string"
  };
  if (t.checks)
    for (const n of t.checks)
      switch (n.kind) {
        case "min":
          ge(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, n.message, e);
          break;
        case "max":
          ge(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value, n.message, e);
          break;
        case "email":
          switch (e.emailStrategy) {
            case "format:email":
              Ie(r, "email", n.message, e);
              break;
            case "format:idn-email":
              Ie(r, "idn-email", n.message, e);
              break;
            case "pattern:zod":
              _e(r, He.email, n.message, e);
              break;
          }
          break;
        case "url":
          Ie(r, "uri", n.message, e);
          break;
        case "uuid":
          Ie(r, "uuid", n.message, e);
          break;
        case "regex":
          _e(r, n.regex, n.message, e);
          break;
        case "cuid":
          _e(r, He.cuid, n.message, e);
          break;
        case "cuid2":
          _e(r, He.cuid2, n.message, e);
          break;
        case "startsWith":
          _e(r, RegExp(`^${ar(n.value, e)}`), n.message, e);
          break;
        case "endsWith":
          _e(r, RegExp(`${ar(n.value, e)}$`), n.message, e);
          break;
        case "datetime":
          Ie(r, "date-time", n.message, e);
          break;
        case "date":
          Ie(r, "date", n.message, e);
          break;
        case "time":
          Ie(r, "time", n.message, e);
          break;
        case "duration":
          Ie(r, "duration", n.message, e);
          break;
        case "length":
          ge(r, "minLength", typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, n.message, e), ge(r, "maxLength", typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value, n.message, e);
          break;
        case "includes": {
          _e(r, RegExp(ar(n.value, e)), n.message, e);
          break;
        }
        case "ip": {
          n.version !== "v6" && Ie(r, "ipv4", n.message, e), n.version !== "v4" && Ie(r, "ipv6", n.message, e);
          break;
        }
        case "base64url":
          _e(r, He.base64url, n.message, e);
          break;
        case "jwt":
          _e(r, He.jwt, n.message, e);
          break;
        case "cidr": {
          n.version !== "v6" && _e(r, He.ipv4Cidr, n.message, e), n.version !== "v4" && _e(r, He.ipv6Cidr, n.message, e);
          break;
        }
        case "emoji":
          _e(r, He.emoji(), n.message, e);
          break;
        case "ulid": {
          _e(r, He.ulid, n.message, e);
          break;
        }
        case "base64": {
          switch (e.base64Strategy) {
            case "format:binary": {
              Ie(r, "binary", n.message, e);
              break;
            }
            case "contentEncoding:base64": {
              ge(r, "contentEncoding", "base64", n.message, e);
              break;
            }
            case "pattern:zod": {
              _e(r, He.base64, n.message, e);
              break;
            }
          }
          break;
        }
        case "nanoid":
          _e(r, He.nanoid, n.message, e);
      }
  return r;
}
function ar(t, e) {
  return e.patternStrategy === "escape" ? s4(t) : t;
}
const o4 = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function s4(t) {
  let e = "";
  for (let r = 0; r < t.length; r++)
    o4.has(t[r]) || (e += "\\"), e += t[r];
  return e;
}
function Ie(t, e, r, n) {
  t.format || t.anyOf?.some((s) => s.format) ? (t.anyOf || (t.anyOf = []), t.format && (t.anyOf.push({
    format: t.format,
    ...t.errorMessage && n.errorMessages && {
      errorMessage: { format: t.errorMessage.format }
    }
  }), delete t.format, t.errorMessage && (delete t.errorMessage.format, Object.keys(t.errorMessage).length === 0 && delete t.errorMessage)), t.anyOf.push({
    format: e,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : ge(t, "format", e, r, n);
}
function _e(t, e, r, n) {
  t.pattern || t.allOf?.some((s) => s.pattern) ? (t.allOf || (t.allOf = []), t.pattern && (t.allOf.push({
    pattern: t.pattern,
    ...t.errorMessage && n.errorMessages && {
      errorMessage: { pattern: t.errorMessage.pattern }
    }
  }), delete t.pattern, t.errorMessage && (delete t.errorMessage.pattern, Object.keys(t.errorMessage).length === 0 && delete t.errorMessage)), t.allOf.push({
    pattern: xn(e, n),
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : ge(t, "pattern", xn(e, n), r, n);
}
function xn(t, e) {
  if (!e.applyRegexFlags || !t.flags)
    return t.source;
  const r = {
    i: t.flags.includes("i"),
    m: t.flags.includes("m"),
    s: t.flags.includes("s")
    // `.` matches newlines
  }, n = r.i ? t.source.toLowerCase() : t.source;
  let s = "", a = !1, i = !1, l = !1;
  for (let c = 0; c < n.length; c++) {
    if (a) {
      s += n[c], a = !1;
      continue;
    }
    if (r.i) {
      if (i) {
        if (n[c].match(/[a-z]/)) {
          l ? (s += n[c], s += `${n[c - 2]}-${n[c]}`.toUpperCase(), l = !1) : n[c + 1] === "-" && n[c + 2]?.match(/[a-z]/) ? (s += n[c], l = !0) : s += `${n[c]}${n[c].toUpperCase()}`;
          continue;
        }
      } else if (n[c].match(/[a-z]/)) {
        s += `[${n[c]}${n[c].toUpperCase()}]`;
        continue;
      }
    }
    if (r.m) {
      if (n[c] === "^") {
        s += `(^|(?<=[\r
]))`;
        continue;
      } else if (n[c] === "$") {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (r.s && n[c] === ".") {
      s += i ? `${n[c]}\r
` : `[${n[c]}\r
]`;
      continue;
    }
    s += n[c], n[c] === "\\" ? a = !0 : i && n[c] === "]" ? i = !1 : !i && n[c] === "[" && (i = !0);
  }
  try {
    new RegExp(s);
  } catch {
    return console.warn(`Could not convert regex pattern at ${e.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), t.source;
  }
  return s;
}
function b1(t, e) {
  if (e.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), e.target === "openApi3" && t.keyType?._def.typeName === V.ZodEnum)
    return {
      type: "object",
      required: t.keyType._def.values,
      properties: t.keyType._def.values.reduce((n, s) => ({
        ...n,
        [s]: he(t.valueType._def, {
          ...e,
          currentPath: [...e.currentPath, "properties", s]
        }) ?? Te(e)
      }), {}),
      additionalProperties: e.rejectedAdditionalProperties
    };
  const r = {
    type: "object",
    additionalProperties: he(t.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalProperties"]
    }) ?? e.allowedAdditionalProperties
  };
  if (e.target === "openApi3")
    return r;
  if (t.keyType?._def.typeName === V.ZodString && t.keyType._def.checks?.length) {
    const { type: n, ...s } = y1(t.keyType._def, e);
    return {
      ...r,
      propertyNames: s
    };
  } else {
    if (t.keyType?._def.typeName === V.ZodEnum)
      return {
        ...r,
        propertyNames: {
          enum: t.keyType._def.values
        }
      };
    if (t.keyType?._def.typeName === V.ZodBranded && t.keyType._def.type._def.typeName === V.ZodString && t.keyType._def.type._def.checks?.length) {
      const { type: n, ...s } = x1(t.keyType._def, e);
      return {
        ...r,
        propertyNames: s
      };
    }
  }
  return r;
}
function a4(t, e) {
  if (e.mapStrategy === "record")
    return b1(t, e);
  const r = he(t.keyType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "0"]
  }) || Te(e), n = he(t.valueType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "1"]
  }) || Te(e);
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
function i4(t) {
  const e = t.values, n = Object.keys(t.values).filter((a) => typeof e[e[a]] != "number").map((a) => e[a]), s = Array.from(new Set(n.map((a) => typeof a)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function c4(t) {
  return t.target === "openAi" ? void 0 : {
    not: Te({
      ...t,
      currentPath: [...t.currentPath, "not"]
    })
  };
}
function l4(t) {
  return t.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const qt = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function d4(t, e) {
  if (e.target === "openApi3")
    return kn(t, e);
  const r = t.options instanceof Map ? Array.from(t.options.values()) : t.options;
  if (r.every((n) => n._def.typeName in qt && (!n._def.checks || !n._def.checks.length))) {
    const n = r.reduce((s, a) => {
      const i = qt[a._def.typeName];
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
      const s = n.filter((a, i, l) => l.indexOf(a) === i);
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
  return kn(t, e);
}
const kn = (t, e) => {
  const r = (t.options instanceof Map ? Array.from(t.options.values()) : t.options).map((n, s) => he(n._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", `${s}`]
  })).filter((n) => !!n && (!e.strictUnions || typeof n == "object" && Object.keys(n).length > 0));
  return r.length ? { anyOf: r } : void 0;
};
function u4(t, e) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(t.innerType._def.typeName) && (!t.innerType._def.checks || !t.innerType._def.checks.length))
    return e.target === "openApi3" ? {
      type: qt[t.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        qt[t.innerType._def.typeName],
        "null"
      ]
    };
  if (e.target === "openApi3") {
    const n = he(t.innerType._def, {
      ...e,
      currentPath: [...e.currentPath]
    });
    return n && "$ref" in n ? { allOf: [n], nullable: !0 } : n && { ...n, nullable: !0 };
  }
  const r = he(t.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function f4(t, e) {
  const r = {
    type: "number"
  };
  if (!t.checks)
    return r;
  for (const n of t.checks)
    switch (n.kind) {
      case "int":
        r.type = "integer", C1(r, "type", n.message, e);
        break;
      case "min":
        e.target === "jsonSchema7" ? n.inclusive ? ge(r, "minimum", n.value, n.message, e) : ge(r, "exclusiveMinimum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMinimum = !0), ge(r, "minimum", n.value, n.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? n.inclusive ? ge(r, "maximum", n.value, n.message, e) : ge(r, "exclusiveMaximum", n.value, n.message, e) : (n.inclusive || (r.exclusiveMaximum = !0), ge(r, "maximum", n.value, n.message, e));
        break;
      case "multipleOf":
        ge(r, "multipleOf", n.value, n.message, e);
        break;
    }
  return r;
}
function h4(t, e) {
  const r = e.target === "openAi", n = {
    type: "object",
    properties: {}
  }, s = [], a = t.shape();
  for (const l in a) {
    let c = a[l];
    if (c === void 0 || c._def === void 0)
      continue;
    let d = m4(c);
    d && r && (c._def.typeName === "ZodOptional" && (c = c._def.innerType), c.isNullable() || (c = c.nullable()), d = !1);
    const u = he(c._def, {
      ...e,
      currentPath: [...e.currentPath, "properties", l],
      propertyPath: [...e.currentPath, "properties", l]
    });
    u !== void 0 && (n.properties[l] = u, d || s.push(l));
  }
  s.length && (n.required = s);
  const i = p4(t, e);
  return i !== void 0 && (n.additionalProperties = i), n;
}
function p4(t, e) {
  if (t.catchall._def.typeName !== "ZodNever")
    return he(t.catchall._def, {
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
function m4(t) {
  try {
    return t.isOptional();
  } catch {
    return !0;
  }
}
const g4 = (t, e) => {
  if (e.currentPath.toString() === e.propertyPath?.toString())
    return he(t.innerType._def, e);
  const r = he(t.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "1"]
  });
  return r ? {
    anyOf: [
      {
        not: Te(e)
      },
      r
    ]
  } : Te(e);
}, v4 = (t, e) => {
  if (e.pipeStrategy === "input")
    return he(t.in._def, e);
  if (e.pipeStrategy === "output")
    return he(t.out._def, e);
  const r = he(t.in._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", "0"]
  }), n = he(t.out._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((s) => s !== void 0)
  };
};
function C4(t, e) {
  return he(t.type._def, e);
}
function w4(t, e) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: he(t.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "items"]
    })
  };
  return t.minSize && ge(n, "minItems", t.minSize.value, t.minSize.message, e), t.maxSize && ge(n, "maxItems", t.maxSize.value, t.maxSize.message, e), n;
}
function x4(t, e) {
  return t.rest ? {
    type: "array",
    minItems: t.items.length,
    items: t.items.map((r, n) => he(r._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], []),
    additionalItems: he(t.rest._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: t.items.length,
    maxItems: t.items.length,
    items: t.items.map((r, n) => he(r._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${n}`]
    })).reduce((r, n) => n === void 0 ? r : [...r, n], [])
  };
}
function k4(t) {
  return {
    not: Te(t)
  };
}
function y4(t) {
  return Te(t);
}
const b4 = (t, e) => he(t.innerType._def, e), L4 = (t, e, r) => {
  switch (e) {
    case V.ZodString:
      return y1(t, r);
    case V.ZodNumber:
      return f4(t, r);
    case V.ZodObject:
      return h4(t, r);
    case V.ZodBigInt:
      return qu(t, r);
    case V.ZodBoolean:
      return Yu();
    case V.ZodDate:
      return k1(t, r);
    case V.ZodUndefined:
      return k4(r);
    case V.ZodNull:
      return l4(r);
    case V.ZodArray:
      return Gu(t, r);
    case V.ZodUnion:
    case V.ZodDiscriminatedUnion:
      return d4(t, r);
    case V.ZodIntersection:
      return r4(t, r);
    case V.ZodTuple:
      return x4(t, r);
    case V.ZodRecord:
      return b1(t, r);
    case V.ZodLiteral:
      return n4(t, r);
    case V.ZodEnum:
      return e4(t);
    case V.ZodNativeEnum:
      return i4(t);
    case V.ZodNullable:
      return u4(t, r);
    case V.ZodOptional:
      return g4(t, r);
    case V.ZodMap:
      return a4(t, r);
    case V.ZodSet:
      return w4(t, r);
    case V.ZodLazy:
      return () => t.getter()._def;
    case V.ZodPromise:
      return C4(t, r);
    case V.ZodNaN:
    case V.ZodNever:
      return c4(r);
    case V.ZodEffects:
      return Ju(t, r);
    case V.ZodAny:
      return Te(r);
    case V.ZodUnknown:
      return y4(r);
    case V.ZodDefault:
      return Qu(t, r);
    case V.ZodBranded:
      return x1(t, r);
    case V.ZodReadonly:
      return b4(t, r);
    case V.ZodCatch:
      return Xu(t, r);
    case V.ZodPipeline:
      return v4(t, r);
    case V.ZodFunction:
    case V.ZodVoid:
    case V.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
};
function he(t, e, r = !1) {
  const n = e.seen.get(t);
  if (e.override) {
    const l = e.override?.(t, e, n, r);
    if (l !== Bu)
      return l;
  }
  if (n && !r) {
    const l = M4(n, e);
    if (l !== void 0)
      return l;
  }
  const s = { def: t, path: e.currentPath, jsonSchema: void 0 };
  e.seen.set(t, s);
  const a = L4(t, t.typeName, e), i = typeof a == "function" ? he(a(), e) : a;
  if (i && E4(t, e, i), e.postProcess) {
    const l = e.postProcess(i, t, e);
    return s.jsonSchema = i, l;
  }
  return s.jsonSchema = i, i;
}
const M4 = (t, e) => {
  switch (e.$refStrategy) {
    case "root":
      return { $ref: t.path.join("/") };
    case "relative":
      return { $ref: w1(e.currentPath, t.path) };
    case "none":
    case "seen":
      return t.path.length < e.currentPath.length && t.path.every((r, n) => e.currentPath[n] === r) ? (console.warn(`Recursive reference detected at ${e.currentPath.join("/")}! Defaulting to any`), Te(e)) : e.$refStrategy === "seen" ? Te(e) : void 0;
  }
}, E4 = (t, e, r) => (t.description && (r.description = t.description, e.markdownDescription && (r.markdownDescription = t.description)), r), dt = (t, e) => {
  const r = Wu(e);
  let n = typeof e == "object" && e.definitions ? Object.entries(e.definitions).reduce((l, [c, d]) => ({
    ...l,
    [c]: he(d._def, {
      ...r,
      currentPath: [...r.basePath, r.definitionPath, c]
    }, !0) ?? Te(r)
  }), {}) : void 0;
  const s = typeof e == "string" ? e : e?.name, a = he(
    t._def,
    r,
    !1
  ) ?? Te(r);
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
function _4(t) {
  return "_brand" in t && (t._brand === "single" || t._brand === "per-section");
}
function yn(t) {
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
function L1(t) {
  if (!_4(t)) return t;
  const e = t._brand === "per-section" ? Object.fromEntries(
    Object.entries(t.schema).map(
      ([l, c]) => [
        l,
        Object.keys(yn(c).shape ?? {})
      ]
    )
  ) : void 0, r = t._brand === "single" ? t.schema : (
    // Per-section: merge all section schemas into one flat z.object.
    // The registry only understands a single F0FormSchema.
    // (section boundaries are preserved in `sections`)
    (() => {
      const l = {};
      for (const [c, d] of Object.entries(
        t.schema
      )) {
        const u = yn(d);
        if (u.shape)
          for (const [h, w] of Object.entries(u.shape))
            h in l && console.warn(
              `[toAvailableFormDefinition] Duplicate field "${h}" found in section "${c}". The later section's field will overwrite the earlier one.`
            ), l[h] = w;
      }
      return Er(l);
    })()
  ), n = t.onSubmit, s = n ? async (l) => {
    if (t._brand === "single")
      await n({ data: l });
    else {
      const c = t.schema, d = {};
      for (const [h, w] of Object.entries(
        e
      )) {
        const p = {};
        for (const g of w)
          g in l && (p[g] = l[g]);
        d[h] = p;
      }
      const u = Object.keys(c);
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
    for (const l of Object.values(
      t.defaultValues
    ))
      Object.assign(a, l);
  } else
    a = t.defaultValues;
  let i = a;
  if (t.defaultValuesFn)
    if (t._brand === "per-section") {
      const l = t.defaultValuesFn;
      i = async (c) => {
        const d = await l(c), u = {};
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
function X3(t) {
  return L1(t);
}
function bn(t, e = {}) {
  if (typeof t == "function") {
    const r = t(e);
    return r && typeof r.then == "function" ? {} : r;
  }
  return t ?? {};
}
function Ln(t, e = {}, r) {
  let n = { ...e };
  const s = { ...e }, a = /* @__PURE__ */ new Set();
  return { ref: {
    current: {
      submit: async () => {
        const c = t.safeParse(n);
        if (!c.success)
          throw new Error(c.error.issues.map((d) => d.message).join(", "));
        await r?.(c.data);
      },
      reset: () => {
        n = { ...s }, a.clear();
      },
      isDirty: () => JSON.stringify(n) !== JSON.stringify(s),
      getValues: () => ({ ...n }),
      setValue: (c, d, u) => {
        n = { ...n, [c]: d }, a.add(c);
      },
      setValues: (c, d) => {
        n = { ...n, ...c };
        for (const u of Object.keys(c))
          a.add(u);
      },
      trigger: async (c) => {
        if (c) {
          const u = Gt(t).shape?.[c];
          return u ? u.safeParse(n[c]).success : !0;
        }
        return t.safeParse(n).success;
      },
      getErrors: () => {
        const c = t.safeParse(n);
        if (c.success) return {};
        const d = {};
        for (const u of c.error.issues) {
          const h = u.path.join(".");
          h && !d[h] && (d[h] = u.message);
        }
        return d;
      },
      getFieldNames: () => {
        const c = Gt(t);
        return Object.keys(c.shape ?? {});
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
function ir(t) {
  const r = Gt(t).shape;
  if (!r) return {};
  const n = {};
  for (const [s, a] of Object.entries(r)) {
    const i = v1(a), l = a.description;
    (i?.label || l) && (n[s] = {
      label: i?.label ?? s,
      ...i?.section && { section: i.section },
      ...i?.placeholder && { placeholder: i.placeholder },
      ...i?.helpText && { helpText: i.helpText },
      ...l && { description: l },
      ...i?.customFieldName && {
        customFieldName: i.customFieldName
      },
      ...wn(a, i ?? { label: s }) !== "text" && {
        fieldType: wn(a, i ?? { label: s })
      }
    });
  }
  return n;
}
function cr(t) {
  if (!t) return {};
  const e = {};
  for (const [r, n] of Object.entries(t))
    e[r] = {
      title: n.title,
      ...n.description && { description: n.description }
    };
  return e;
}
const M1 = Vt(null);
function K3({
  children: t,
  availableFormDefinitions: e
}) {
  const r = de(
    () => e?.map(L1),
    [e]
  ), n = z(/* @__PURE__ */ new Map()), s = z(""), a = z(/* @__PURE__ */ new Map()), i = z(/* @__PURE__ */ new Set()), l = z(/* @__PURE__ */ new Map()), c = z(/* @__PURE__ */ new Map()), [d, u] = q([]), [h, w] = q(
    []
  ), [p, g] = q(
    null
  ), y = z(null), k = z({}), M = ee(() => {
    queueMicrotask(() => {
      const E = Array.from(n.current.entries()), B = [], j = [];
      let Y = null;
      for (const [Ce, Z] of E) {
        const re = Z.ref.current;
        if (re && (Z.virtual ? j.push({
          formName: Ce,
          ...Z.description ? { description: Z.description } : {},
          ...Z.module ? { module: Z.module } : {},
          cardTitle: "",
          cardDescription: "",
          formSchema: dt(Z.schema),
          fieldDescriptions: ir(Z.schema),
          sectionDescriptions: cr(Z.sections),
          formValues: re.getValues(),
          formErrors: re.getErrors(),
          isDirty: re.isDirty(),
          ...Z.defaultValuesParamsSchema ? {
            defaultValuesParamsSchema: dt(
              Z.defaultValuesParamsSchema
            )
          } : {},
          ...Z.defaultValuesParams ? { defaultValuesParams: Z.defaultValuesParams } : {}
        }) : B.push({
          formName: Ce,
          ...Z.description ? { description: Z.description } : {},
          ...Z.module ? { module: Z.module } : {},
          cardTitle: "",
          cardDescription: "",
          formSchema: dt(Z.schema),
          fieldDescriptions: ir(Z.schema),
          sectionDescriptions: cr(Z.sections),
          formValues: re.getValues(),
          formErrors: re.getErrors(),
          isDirty: re.isDirty(),
          ...Z.defaultValuesParamsSchema ? {
            defaultValuesParamsSchema: dt(
              Z.defaultValuesParamsSchema
            )
          } : {},
          ...Z.defaultValuesParams ? { defaultValuesParams: Z.defaultValuesParams } : {}
        }), y.current === Ce)) {
          const le = k.current;
          Y = {
            formName: Ce,
            ...Z.description ? { description: Z.description } : {},
            ...Z.module ? { module: Z.module } : {},
            cardTitle: le.cardTitle ?? "",
            cardDescription: le.cardDescription ?? "",
            formSchema: dt(Z.schema),
            fieldDescriptions: ir(Z.schema),
            sectionDescriptions: cr(Z.sections),
            formValues: re.getValues(),
            formErrors: re.getErrors(),
            isDirty: re.isDirty(),
            ...Z.defaultValuesParamsSchema ? {
              defaultValuesParamsSchema: dt(
                Z.defaultValuesParamsSchema
              )
            } : {},
            ...Z.defaultValuesParams ? { defaultValuesParams: Z.defaultValuesParams } : {}
          };
        }
      }
      const me = JSON.stringify({
        formsOnCurrentPage: B,
        availableForms: j,
        activeForm: Y
      });
      me !== s.current && (s.current = me, u(B), w(j), g(Y));
    });
  }, []), P = ee(
    (E, B, j, Y, me, Ce, Z, re) => {
      const le = n.current.get(E);
      n.current.set(E, {
        ref: B,
        schema: j,
        description: Z,
        module: re,
        sections: Y,
        defaultValuesParamsSchema: me ?? le?.defaultValuesParamsSchema,
        defaultValuesFn: Ce ?? le?.defaultValuesFn,
        defaultValuesParams: le?.defaultValuesParams,
        onSubmit: le?.onSubmit,
        steps: le?.steps,
        submitConfig: le?.submitConfig,
        errorTriggerMode: le?.errorTriggerMode
      }), M();
    },
    [M]
  ), I = ee(
    (E) => {
      const B = n.current.get(E);
      if (B?.virtual) return;
      const j = B?.ref.current?.getValues() ?? {};
      n.current.delete(E);
      const Y = r?.find((me) => me.name === E);
      if (Y) {
        const Ce = { ...typeof Y.defaultValues == "function" ? {} : bn(Y.defaultValues), ...j }, { ref: Z, dirtyFields: re } = Ln(
          Y.schema,
          Ce,
          Y.onSubmit
        ), le = typeof Y.defaultValues == "function" ? (() => {
          const ke = Y.defaultValues;
          return async (R) => {
            const H = ke(R);
            return typeof H?.then == "function" ? await H : H;
          };
        })() : void 0;
        n.current.set(E, {
          ref: Z,
          schema: Y.schema,
          description: Y.description,
          module: Y.module,
          sections: Y.sections,
          virtual: !0,
          defaultValuesParamsSchema: Y.defaultValuesParamsSchema,
          defaultValuesFn: le,
          defaultValuesParams: B?.defaultValuesParams,
          dirtyFields: re,
          onSubmit: Y.onSubmit,
          steps: Y.steps,
          submitConfig: Y.submitConfig,
          errorTriggerMode: Y.errorTriggerMode
        });
      }
      M();
    },
    [M, r]
  ), T = ee((E) => n.current.get(E), []), v = ee(() => Array.from(n.current.keys()), []), C = ee(
    (E, B) => {
      const j = n.current.get(E);
      if (!j) {
        const Y = Array.from(n.current.keys());
        return {
          success: !1,
          error: `Form "${E}" not found. Available forms: ${Y.join(", ")}`
        };
      }
      return j.virtual ? (y.current = E, k.current = {
        cardTitle: B?.cardTitle ?? "",
        cardDescription: B?.cardDescription ?? ""
      }, M(), { success: !0 }) : {
        success: !1,
        error: `Form "${E}" is a rendered form on the current page. You can co-edit it directly without picking it as active.`
      };
    },
    [M]
  ), x = ee(() => {
    y.current = null, k.current = { cardTitle: "", cardDescription: "" }, M();
  }, [M]), S = ee(
    (E, B) => {
      const j = n.current.get(E);
      j && (j.defaultValuesParams = B);
    },
    []
  ), _ = ee((E) => {
    const B = a.current.get(E) ?? 0;
    a.current.set(E, B + 1);
  }, []), b = ee((E) => {
    a.current.delete(E), i.current.delete(E), l.current.delete(E), c.current.delete(E);
  }, []), L = ee((E) => a.current.get(E) ?? 0, []), N = ee((E) => !i.current.has(E), []), D = ee((E) => {
    i.current.add(E);
  }, []), Q = ee(
    (E, B) => {
      i.current.delete(E), l.current.set(E, B ?? null);
      const j = c.current.get(E);
      if (j?.length) {
        c.current.delete(E);
        for (const Y of j)
          Y();
      }
      M();
    },
    [M]
  ), J = ee(
    (E, B) => {
      const j = c.current.get(E) ?? [];
      j.push(B), c.current.set(E, j);
    },
    []
  ), ae = ee(
    (E, B) => l.current.has(E) ? B === void 0 ? !0 : l.current.get(E) === B : !1,
    []
  ), ne = z(/* @__PURE__ */ new Set());
  fe(() => {
    const E = r ?? [], B = /* @__PURE__ */ new Set();
    for (const j of E) {
      B.add(j.name);
      const Y = n.current.get(j.name);
      if (Y && !Y.virtual || Y?.virtual) continue;
      const me = typeof j.defaultValues == "function" ? {} : bn(j.defaultValues), { ref: Ce, dirtyFields: Z } = Ln(
        j.schema,
        me,
        j.onSubmit
      ), re = typeof j.defaultValues == "function" ? (() => {
        const le = j.defaultValues;
        return async (ke) => {
          const R = le(ke);
          return typeof R?.then == "function" ? await R : R;
        };
      })() : void 0;
      n.current.set(j.name, {
        ref: Ce,
        schema: j.schema,
        description: j.description,
        module: j.module,
        sections: j.sections,
        virtual: !0,
        defaultValuesParamsSchema: j.defaultValuesParamsSchema,
        defaultValuesFn: re,
        dirtyFields: Z,
        onSubmit: j.onSubmit,
        steps: j.steps,
        submitConfig: j.submitConfig,
        errorTriggerMode: j.errorTriggerMode
      });
    }
    for (const j of ne.current)
      B.has(j) || n.current.get(j)?.virtual && n.current.delete(j);
    return ne.current = B, M(), () => {
      for (const j of B)
        n.current.get(j)?.virtual && n.current.delete(j);
      M();
    };
  }, [r, M]);
  const X = de(
    () => ({
      register: P,
      unregister: I,
      get: T,
      getFormNames: v,
      rebuildDescriptions: M,
      formsOnCurrentPage: d,
      availableForms: h,
      activeForm: p,
      setActiveForm: C,
      clearActiveForm: x,
      updateActiveFormDefaultValuesParams: S,
      incrementFillVersion: _,
      resetFillVersion: b,
      getFillVersion: L,
      isDefaultValuesResolved: N,
      markDefaultValuesResolving: D,
      markDefaultValuesResolved: Q,
      queueFillAction: J,
      hasDefaultValuesEverResolved: ae
    }),
    [
      P,
      I,
      T,
      v,
      M,
      d,
      h,
      p,
      C,
      x,
      S,
      _,
      b,
      L,
      N,
      D,
      Q,
      J,
      ae
    ]
  );
  return /* @__PURE__ */ o(M1.Provider, { value: X, children: t });
}
function S4() {
  return xt(M1);
}
const R4 = ({
  onUploadFiles: t,
  isAtMaxFiles: e,
  maxFiles: r,
  acceptValue: n,
  fileInputRef: s,
  handleFileSelect: a,
  inProgress: i,
  hasDataToSend: l,
  isPreSending: c
}) => {
  const d = pe();
  return /* @__PURE__ */ f("div", { className: "flex shrink-0 items-center justify-between p-3", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: t && /* @__PURE__ */ f(ze, { children: [
      /* @__PURE__ */ o(
        Se,
        {
          label: d.ai.attachFile,
          hideLabel: !0,
          type: "button",
          icon: yo,
          variant: "outline",
          size: "md",
          disabled: e,
          onClick: (u) => {
            u.preventDefault(), s.current?.click();
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
    /* @__PURE__ */ o("div", { className: "flex items-center", children: i ? /* @__PURE__ */ o(
      Se,
      {
        type: "submit",
        variant: "neutral",
        label: d.ai.stopAnswerGeneration,
        icon: Lo,
        hideLabel: !0
      }
    ) : /* @__PURE__ */ o(
      Se,
      {
        type: "submit",
        disabled: !l || c,
        variant: l && !c ? "default" : "neutral",
        label: d.ai.sendMessage,
        icon: Rr,
        hideLabel: !0
      }
    ) })
  ] });
}, N4 = ({
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
      (s) => s.status === "uploading" ? /* @__PURE__ */ o(Pe, { className: "h-9 w-36 rounded-[10px]" }, s.id) : s.status === "error" ? /* @__PURE__ */ o(
        T4,
        {
          att: s,
          onRemove: r,
          removeLabel: n
        },
        s.id
      ) : /* @__PURE__ */ o(
        Ro,
        {
          file: s.file,
          size: "md",
          actions: [
            {
              label: n,
              icon: st,
              onClick: () => r(s.id)
            }
          ]
        },
        s.id
      )
    )
  }
);
function T4({
  att: t,
  onRemove: e,
  removeLabel: r
}) {
  const n = /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5 rounded-lg border border-f1-border-critical bg-f1-background-critical/10 px-2.5 py-1.5", children: [
    /* @__PURE__ */ o(ye, { icon: lo, size: "md", color: "critical" }),
    /* @__PURE__ */ o("span", { className: "max-w-40 truncate text-sm font-medium text-f1-foreground-critical", children: t.file.name }),
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        "aria-label": r,
        className: Ne(
          "rounded-full text-f1-foreground-critical hover:text-f1-foreground-critical/80"
        ),
        onClick: () => e(t.id),
        children: /* @__PURE__ */ o(ye, { icon: st, size: "md", "aria-hidden": "true" })
      }
    )
  ] });
  return t.errorMessage ? /* @__PURE__ */ o(xi, { label: t.errorMessage, children: n }) : n;
}
const A4 = {
  soft: {
    text: "",
    bg: "bg-f1-background-info",
    fontColor: "text-f1-foreground-info",
    formBorder: "[&_form]:border-f1-border-info"
  }
}, V4 = ({
  creditWarning: t,
  children: e
}) => {
  const r = pe();
  if (!t) return e;
  const n = {
    ...A4[t.level],
    text: r.ai.creditWarning.soft
  };
  return /* @__PURE__ */ f(
    "div",
    {
      className: F("flex flex-col rounded-xl", n.bg, n.formBorder),
      children: [
        /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 px-4 pb-1.5 pt-2", children: [
          /* @__PURE__ */ o(
            "p",
            {
              className: F("min-w-0 flex-1 text-sm font-medium", n.fontColor),
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
                icon: st,
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
function F4({
  isOpen: t,
  results: e,
  isLoading: r,
  selectedIndex: n,
  position: s,
  onSelect: a
}) {
  const i = z(null), l = z(null);
  fe(() => {
    l.current?.scrollIntoView({ block: "nearest" });
  }, [n]), so(() => {
    const u = i.current, h = u?.offsetParent;
    if (!u || !h) return;
    const w = u.offsetLeft + u.offsetWidth - h.clientWidth;
    w > 0 && (u.style.left = `${Math.max(0, u.offsetLeft - w)}px`);
  }, [s]);
  const c = r && e.length === 0, d = !r && e.length === 0;
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
      className: F(
        "z-50",
        "w-64 max-h-60 overflow-y-auto",
        "rounded-lg border border-solid border-f1-border-secondary",
        "bg-f1-background shadow-md",
        "p-1"
      ),
      children: c ? Array.from({ length: 3 }, (u, h) => /* @__PURE__ */ f(
        "div",
        {
          className: "flex items-center gap-2 p-2",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ o(Pe, { className: "size-5 shrink-0 rounded-full" }),
            /* @__PURE__ */ o(
              Pe,
              {
                className: F("h-4 rounded", h === 1 ? "w-24" : "w-32")
              }
            )
          ]
        },
        h
      )) : e.map((u, h) => {
        const w = h === n, p = `${u.firstName} ${u.lastName}`.trim();
        return /* @__PURE__ */ f(
          "div",
          {
            ref: w ? l : void 0,
            role: "option",
            "aria-selected": w,
            className: F(
              "flex cursor-pointer items-center gap-2 p-2 rounded",
              "transition-colors",
              w ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary-hover"
            ),
            onMouseDown: (g) => {
              g.preventDefault(), a(u);
            },
            onMouseEnter: () => {
            },
            children: [
              /* @__PURE__ */ o(
                ki,
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
const P4 = ({
  quote: t,
  onRemove: e
}) => {
  const r = pe();
  return /* @__PURE__ */ o("div", { className: "p-1", children: /* @__PURE__ */ f(
    "div",
    {
      className: F(
        "flex items-start gap-2 justify-center",
        "rounded-[10px] bg-f1-background-hover pl-2 py-1.5 pr-1.5"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ o(ye, { icon: Or, size: "md", color: "default" }) }),
        /* @__PURE__ */ o(
          Le,
          {
            className: "h-full flex-1 py-0.5 text-[12px] font-medium text-f1-foreground-secondary",
            lines: 1,
            children: t.text
          }
        ),
        /* @__PURE__ */ o(
          Se,
          {
            variant: "ghost",
            label: r.ai.removeQuote,
            onClick: e,
            icon: st,
            hideLabel: !0,
            size: "sm"
          }
        )
      ]
    }
  ) });
}, $4 = ({
  placeholders: t,
  defaultPlaceholder: e,
  inputValue: r,
  inProgress: n
}) => {
  const s = De(), [a, i] = q(""), [l, c] = q(0), [d, u] = q(!1), h = z(null), w = z(null), p = z(null), g = t[l] ?? e;
  return fe(() => {
    const y = () => {
      w.current && (clearInterval(w.current), w.current = null), p.current && (clearInterval(p.current), p.current = null), h.current && (clearTimeout(h.current), h.current = null);
    };
    if (r.length > 0 || n) {
      u(!1), i(""), y();
      return;
    }
    if (s)
      return u(!1), i(g), y(), h.current = setTimeout(() => {
        const v = (l + 1) % Math.max(t.length, 1);
        c(v);
      }, 4e3), () => {
        y();
      };
    u(!0), i("");
    let k = 0;
    const M = 50, P = 30, I = 2e3, T = 1e3;
    return w.current = setInterval(() => {
      k < g.length ? (i(g.slice(0, k + 1)), k++) : (w.current && (clearInterval(w.current), w.current = null), h.current = setTimeout(() => {
        p.current = setInterval(() => {
          k > 0 ? (k--, i(g.slice(0, k))) : (p.current && (clearInterval(p.current), p.current = null), h.current = setTimeout(() => {
            const v = (l + 1) % Math.max(t.length, 1);
            c(v);
          }, T));
        }, P);
      }, I));
    }, M), () => {
      y();
    };
  }, [
    r,
    n,
    g,
    l,
    t.length,
    s
  ]), r.length > 0 || n ? null : /* @__PURE__ */ o(Oe, { children: /* @__PURE__ */ o(
    ve.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: s ? 0 : 0.4 },
      className: F(
        "col-start-1 row-start-1",
        "pointer-events-none",
        "text-f1-foreground-secondary",
        "text-[16px] sm:text-[14px] leading-[20px] font-normal",
        "pt-3 px-3"
      ),
      children: /* @__PURE__ */ f(
        "div",
        {
          className: F(
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
}, H4 = ({
  textareaRef: t,
  highlightRef: e,
  inputValue: r,
  onInputChange: n,
  onKeyDown: s,
  onCursorUpdate: a,
  onScroll: i,
  highlightSegments: l,
  hasOverlay: c,
  multiplePlaceholders: d,
  placeholders: u,
  resolvedDefaultPlaceholder: h,
  inProgress: w
}) => /* @__PURE__ */ f(
  "div",
  {
    className: F("grid flex-1 grid-cols-1 grid-rows-1", "min-h-[20px] py-0"),
    children: [
      /* @__PURE__ */ o(
        "div",
        {
          "aria-hidden": !0,
          className: F(
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
      c && /* @__PURE__ */ o(
        "div",
        {
          ref: e,
          "aria-hidden": !0,
          className: F(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ),
          children: l.map(
            (p, g) => p.type === "mention" ? /* @__PURE__ */ o(
              "span",
              {
                className: "font-medium text-f1-foreground-secondary",
                children: p.text
              },
              g
            ) : p.type === "ghost" ? /* @__PURE__ */ o("span", { className: "text-f1-foreground-secondary opacity-50", children: p.text }, g) : /* @__PURE__ */ o("span", { children: p.text }, g)
          )
        }
      ),
      !r && !d && /* @__PURE__ */ o(
        "p",
        {
          className: F(
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
          className: F(
            "col-start-1 row-start-1",
            "min-h-[20px] max-h-[240px] h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "mt-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "outline-none",
            c ? "text-transparent caret-f1-foreground" : "text-f1-foreground",
            !c && (r || !d ? "caret-f1-foreground" : "caret-transparent")
          )
        }
      ),
      d && /* @__PURE__ */ o(
        $4,
        {
          placeholders: u,
          defaultPlaceholder: h,
          inputValue: r,
          inProgress: w ?? !1
        }
      )
    ]
  }
), I4 = 5;
function j4(t, e = I4) {
  return t.length <= e ? t : [...t].sort(() => 0.5 - Math.random()).slice(0, e);
}
const O4 = ({
  suggestions: t,
  onItemClick: e,
  onItemHover: r
}) => {
  const [n, s] = q(null), a = n !== null ? t[n] : null;
  return t.length === 0 ? null : /* @__PURE__ */ f(
    Vr,
    {
      open: a !== null,
      onOpenChange: (i) => {
        i || (s(null), r?.(null));
      },
      children: [
        /* @__PURE__ */ o(yi, { asChild: !0, children: /* @__PURE__ */ o("div", { className: "flex w-full flex-wrap items-center gap-2", children: t.map((i, l) => /* @__PURE__ */ o(Fr, { asChild: !0, children: /* @__PURE__ */ o(
          Se,
          {
            variant: "outline",
            label: i.label,
            icon: i.icon,
            pressed: n === l,
            onClick: () => {
              s((c) => c === l ? null : l), r?.(null);
            }
          }
        ) }, `${i.label}-${l}`)) }) }),
        a && /* @__PURE__ */ f(
          Pr,
          {
            side: "top",
            align: "start",
            sideOffset: 8,
            onOpenAutoFocus: (i) => i.preventDefault(),
            className: F(
              "flex flex-col gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2",
              "w-[var(--radix-popover-trigger-width)]"
            ),
            children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5 p-2 pb-1 text-sm font-medium text-f1-foreground-secondary", children: [
                /* @__PURE__ */ o(ye, { icon: a.icon, size: "sm" }),
                /* @__PURE__ */ o("span", { children: a.label })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-col", children: j4(a.items).map((i, l) => /* @__PURE__ */ f(
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
                  className: F(
                    "group flex items-center justify-between gap-2 rounded-sm px-2 py-2 text-left text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-hover focus-visible:bg-f1-background-hover",
                    Ne()
                  ),
                  children: [
                    /* @__PURE__ */ o("span", { className: "min-w-0 flex-1 truncate", children: i.title }),
                    /* @__PURE__ */ o(
                      "span",
                      {
                        "aria-hidden": !0,
                        className: "flex flex-shrink-0 items-center text-f1-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                        children: /* @__PURE__ */ o(ye, { icon: Rr, size: "sm" })
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
function Mn(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Z4(t, e, r) {
  const n = r?.cursorPosition ?? t.length, s = r?.inlineCompletion ?? null, a = [];
  for (const u of e) {
    const h = `@${u.name}`;
    let w = 0;
    for (; ; ) {
      const p = t.indexOf(h, w);
      if (p === -1) break;
      a.push({ start: p, end: p + h.length }), w = p + h.length;
    }
  }
  a.sort((u, h) => u.start - h.start);
  const i = [];
  let l = 0, c = !1;
  const d = (u) => {
    if (!s || c || n < l || n > u) {
      u > l && i.push({ type: "text", text: t.slice(l, u) }), l = u;
      return;
    }
    n > l && i.push({ type: "text", text: t.slice(l, n) }), i.push({ type: "ghost", text: s }), c = !0, n < u && i.push({ type: "text", text: t.slice(n, u) }), l = u;
  };
  for (const u of a)
    d(u.start), i.push({ type: "mention", text: t.slice(u.start, u.end) }), l = u.end;
  return d(t.length), !c && s && n >= l && i.push({ type: "ghost", text: s }), i.length === 0 ? [{ type: "text", text: t }] : i;
}
function D4(t, e) {
  if (e === "*/*") return !0;
  if (e.endsWith("/*")) {
    const r = e.slice(0, e.indexOf("/"));
    return t.startsWith(r + "/");
  }
  return t === e;
}
function B4(t, e) {
  if (!e) return t;
  const r = Array.isArray(e) ? e : [e];
  return r.length === 0 ? t : t.filter(
    (n) => r.some((s) => D4(n.type, s))
  );
}
const U4 = 4e3;
function z4(t) {
  const [e, r] = q([]), [n, s] = q(null), a = z(
    null
  ), i = z(null), l = pe(), c = t?.onUploadFiles, d = t?.allowedMimeTypes, u = t?.maxFiles, h = de(() => {
    if (d)
      return Array.isArray(d) ? d.join(",") : d;
  }, [d]), w = u !== void 0 && e.length >= u, p = z(0);
  fe(() => {
    p.current = e.length;
  }, [e]);
  const g = ee((I) => {
    a.current && clearTimeout(a.current), s(I), a.current = setTimeout(() => {
      s(null), a.current = null;
    }, U4);
  }, []);
  fe(
    () => () => {
      a.current && clearTimeout(a.current);
    },
    []
  );
  const y = ee(
    async (I) => {
      if (I.length === 0 || !c) return;
      const T = B4(I, d);
      if (T.length === 0) return;
      if (u !== void 0 && p.current + T.length > u) {
        g(
          l.ai.tooManyFilesError.replace(
            "{{maxFiles}}",
            String(u)
          )
        );
        return;
      }
      const v = T.map((S) => ({
        id: crypto.randomUUID(),
        file: S,
        status: "uploading"
      })), C = v.map((S) => S.id);
      r((S) => [...S, ...v]);
      const x = (S) => r(
        (_) => _.map(
          (b) => C.includes(b.id) ? { ...b, status: "error", errorMessage: S } : b
        )
      );
      try {
        const S = await c(T);
        if (!Array.isArray(S) || S.length !== T.length) {
          x(l.ai.fileUploadError);
          return;
        }
        r(
          (_) => _.map((b) => {
            const L = v.findIndex((N) => N.id === b.id);
            return L === -1 ? b : S[L] ? {
              ...b,
              status: "uploaded",
              uploadedFile: S[L]
            } : {
              ...b,
              status: "error",
              errorMessage: l.ai.fileUploadError
            };
          })
        );
      } catch (S) {
        const _ = S instanceof Error && S.message ? S.message : l.ai.fileUploadError;
        x(_);
      }
    },
    [
      c,
      u,
      d,
      l.ai.tooManyFilesError,
      l.ai.fileUploadError,
      g
    ]
  ), k = ee(
    async (I) => {
      await y(Array.from(I.target.files ?? [])), I.target.value = "";
    },
    [y]
  ), M = ee((I) => {
    r((T) => T.filter((v) => v.id !== I));
  }, []), P = ee(() => {
    r([]);
  }, []);
  return {
    attachedFiles: e,
    fileInputRef: i,
    onUploadFiles: c,
    acceptValue: h,
    isAtMaxFiles: w,
    maxFiles: u,
    processFiles: y,
    handleFileSelect: k,
    handleRemoveFile: M,
    clearFiles: P,
    transientError: n,
    showTransientError: g
  };
}
function W4(t, e, r) {
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
    const l = t.slice(s + 1), c = s + 1 + i.name.length;
    if (l.startsWith(i.name) && e >= c) {
      const d = t[c];
      if (d === " " || d === `
` || d === "	")
        return null;
    }
  }
  return { atIndex: s, query: a };
}
const G4 = [
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
function q4(t, e) {
  const r = document.createElement("div"), n = r.style, s = window.getComputedStyle(t);
  n.whiteSpace = "pre-wrap", n.wordWrap = "break-word", n.position = "absolute", n.visibility = "hidden", n.overflow = "hidden";
  for (const c of G4)
    n.setProperty(c, s.getPropertyValue(c));
  r.textContent = t.value.substring(0, e);
  const a = document.createElement("span");
  a.textContent = t.value.substring(e) || "​", r.appendChild(a), document.body.appendChild(r);
  const i = a.offsetLeft, l = a.offsetTop - t.scrollTop;
  return document.body.removeChild(r), { left: i, top: l };
}
const Y4 = 250;
function X4({
  inputValue: t,
  setInputValue: e,
  cursorPosition: r,
  searchPersons: n,
  textareaRef: s
}) {
  const [a, i] = q(!1), [l, c] = q(""), [d, u] = q([]), [h, w] = q(!1), [p, g] = q(0), [y, k] = q([]), M = z(-1), P = z(null), I = z(0), T = z(-1);
  fe(() => {
    if (!n) {
      i(!1);
      return;
    }
    const L = W4(t, r, y);
    if (!L) {
      i(!1), c(""), u([]), g(0), M.current = -1, T.current = -1;
      return;
    }
    if (L.atIndex === T.current)
      return;
    M.current = L.atIndex, c(L.query), i(!0), g(0), w(!0), P.current && clearTimeout(P.current);
    const N = ++I.current;
    return P.current = setTimeout(() => {
      n(L.query).then((D) => {
        N === I.current && (u(D), g(0), D.length === 0 && L.query.length > 0 && (T.current = L.atIndex, i(!1)));
      }).catch(() => {
        N === I.current && u([]);
      }).finally(() => {
        N === I.current && w(!1);
      });
    }, Y4), () => {
      P.current && clearTimeout(P.current);
    };
  }, [t, r, n, y]);
  const v = ee(() => {
    i(!1), c(""), u([]), g(0), M.current = -1;
  }, []), C = ee(
    (L) => {
      const N = M.current;
      if (N === -1) return;
      const D = `${L.firstName} ${L.lastName}`.trim(), Q = String(L.id), J = t.slice(0, N), ae = t.slice(r), ne = `@${D} `, X = J + ne + ae, E = J.length + ne.length;
      e(X), k((B) => [...B.filter((Y) => !(Y.id === Q && Y.name === D)), { id: Q, name: D }]), v(), requestAnimationFrame(() => {
        const B = s.current;
        B && (B.focus(), B.setSelectionRange(E, E));
      });
    },
    [t, r, e, s, v]
  ), x = ee(
    (L) => {
      if (!a) return !1;
      if (L.key === "Escape")
        return L.preventDefault(), v(), !0;
      if (d.length === 0) return !1;
      switch (L.key) {
        case "ArrowDown":
          return L.preventDefault(), g((N) => (N + 1) % d.length), !0;
        case "ArrowUp":
          return L.preventDefault(), g(
            (N) => (N + d.length - 1) % d.length
          ), !0;
        case "Tab": {
          const N = d[p];
          if (N) {
            const D = `${N.firstName} ${N.lastName}`.trim();
            if (l.length === 0 || D.toLowerCase().startsWith(l.toLowerCase()))
              return L.preventDefault(), C(N), !0;
          }
          return !1;
        }
        case "Enter":
          return L.preventDefault(), d[p] && C(d[p]), !0;
        default:
          return !1;
      }
    },
    [a, d, p, l, C, v]
  ), S = ee(
    (L) => {
      if (y.length === 0) return L;
      let N = L;
      const D = [...y].sort((Q, J) => J.name.length - Q.name.length);
      for (const Q of D) {
        const J = `@${Q.name}`, ae = `<entity-ref type="person" id="${Mn(Q.id)}">${Mn(Q.name)}</entity-ref>`;
        for (; N.includes(J); )
          N = N.replace(J, ae);
      }
      return N;
    },
    [y]
  );
  fe(() => {
    k(
      (L) => L.filter((N) => {
        const D = `@${N.name}`, Q = t.indexOf(D);
        if (Q === -1) return !1;
        const J = t[Q + D.length];
        return J === " " || J === `
` || J === "	";
      })
    );
  }, [t]);
  const _ = de(() => {
    if (!a || M.current === -1) return null;
    const L = s.current;
    if (!L) return null;
    const N = q4(L, M.current), D = L.offsetLeft + N.left, J = (L.offsetParent ? L.offsetParent.offsetHeight : 0) - (L.offsetTop + N.top);
    return { left: D, bottom: J };
  }, [a, t, r, s]), b = de(() => {
    if (!a || d.length === 0) return null;
    const L = d[p];
    if (!L) return null;
    const N = `${L.firstName} ${L.lastName}`.trim();
    return l.length === 0 ? N : N.toLowerCase().startsWith(l.toLowerCase()) ? N.slice(l.length) : null;
  }, [a, d, p, l]);
  return {
    isOpen: a,
    query: l,
    results: d,
    isLoading: h,
    selectedIndex: p,
    mentions: y,
    popoverPosition: _,
    inlineCompletion: b,
    handleKeyDown: x,
    selectPerson: C,
    transformMentions: S,
    close: v
  };
}
const K4 = /[\\`*_{}[\]()#+\-.!|~>]/g, Q4 = (t) => t.split(/(<entity-ref\b[^>]*>[\s\S]*?<\/entity-ref>)/g).map((e, r) => r % 2 === 1 ? e : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(K4, "\\$&")).join(""), Q3 = ({
  onSubmit: t,
  onStop: e,
  inProgress: r,
  onBeforeSubmit: n,
  placeholders: s,
  creditWarning: a,
  clarifyingUI: i,
  pendingContext: l = null,
  onPendingContextChange: c,
  pendingQuote: d = null,
  onPendingQuoteChange: u,
  fileAttachments: h,
  searchPersons: w,
  onProcessFilesRef: p,
  disclaimer: g,
  footer: y,
  isWelcomeScreen: k = !1,
  fullscreen: M = !1,
  welcomeScreenSuggestions: P,
  onSuggestionClick: I,
  ref: T
}) => {
  const v = pe(), C = De(), [x, S] = q(""), [_, b] = q(0), [L, N] = q(!1), [D, Q] = q(!1), [J, ae] = q(null), ne = z(null), X = z(null), E = z(null), B = i != null, { tracking: j } = Ge(), Y = ee(
    (we, Xe) => {
      j?.onWelcomeSuggestionClick?.({
        item: we,
        group: Xe,
        prompt: we.prompt || we.title
      }), I?.(we, Xe);
    },
    [j, I]
  ), {
    attachedFiles: me,
    fileInputRef: Ce,
    onUploadFiles: Z,
    acceptValue: re,
    isAtMaxFiles: le,
    maxFiles: ke,
    processFiles: R,
    handleFileSelect: H,
    handleRemoveFile: $,
    clearFiles: K,
    transientError: U,
    showTransientError: oe
  } = z4(h), ie = X4({
    inputValue: x,
    setInputValue: S,
    cursorPosition: _,
    searchPersons: w,
    textareaRef: X
  });
  fe(() => {
    typeof window < "u" && window.location.hash.length === 0 && X.current?.focus();
  }, []), fe(() => {
    if (p)
      return p((we) => {
        R(we);
      }), () => {
        p(null);
      };
  }, [p, R]);
  const be = v.ai.inputPlaceholder, Re = me.filter((we) => we.status === "uploaded"), Ae = me.some((we) => we.status === "uploading"), qe = me.some((we) => we.status === "error"), Ye = x.trim().length > 0;
  fe(() => {
    if (!(!D || Ae)) {
      if (Q(!1), qe) {
        oe(v.ai.fileUploadBlockedSubmit);
        return;
      }
      ne.current?.requestSubmit();
    }
  }, [
    D,
    Ae,
    qe,
    oe,
    v.ai.fileUploadBlockedSubmit
  ]);
  const it = async (we) => {
    if (we.preventDefault(), !B) {
      if (ie.close(), r)
        e?.();
      else if (Ye && !L) {
        if (Ae) {
          Q(!0), X.current?.focus();
          return;
        }
        if (n) {
          N(!0);
          try {
            if (await n() === !1) {
              X.current?.focus();
              return;
            }
          } finally {
            N(!1);
          }
        }
        const Xe = ie.transformMentions(x.trim()), Ht = Q4(Xe), It = Re.flatMap(
          (zr) => zr.uploadedFile ? [zr.uploadedFile] : []
        ), Br = l, Ur = d;
        Br && c?.(null), Ur && u?.(null), await t({
          text: Ht,
          files: It,
          context: Br,
          quote: Ur
        }), S(""), K();
      }
      X.current?.focus();
    }
  }, Qt = (we) => {
    B || ie.handleKeyDown(we) || we.key === "Enter" && !we.shiftKey && (we.preventDefault(), r || ne.current?.requestSubmit());
  }, Jt = () => {
    b(X.current?.selectionStart ?? 0);
  }, er = () => {
    E.current && X.current && (E.current.scrollTop = X.current.scrollTop);
  }, Ft = J ? J.prompt ?? J.title : null, Pt = Ft ? [Ft] : s ?? [], tr = Pt.length > 1, $t = de(() => Z4(x, ie.mentions, {
    cursorPosition: _,
    inlineCompletion: ie.inlineCompletion
  }), [x, ie.mentions, _, ie.inlineCompletion]), rr = ie.mentions.length > 0 || ie.inlineCompletion !== null;
  return /* @__PURE__ */ f("div", { ref: T, className: "flex flex-col items-center gap-2 px-4 pb-3 pt-2", children: [
    /* @__PURE__ */ f("div", { className: "flex w-full max-w-content flex-col gap-2", children: [
      k && P && P.length > 0 && I && /* @__PURE__ */ o(
        O4,
        {
          suggestions: P,
          onItemClick: Y,
          onItemHover: ae
        }
      ),
      /* @__PURE__ */ o(V4, { creditWarning: a, children: /* @__PURE__ */ f(
        ve.form,
        {
          "aria-busy": r,
          ref: ne,
          className: F(
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
            B && "after:scale-100 after:opacity-100 border-f1-background-tertiary"
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
            B || X.current?.focus();
          },
          onSubmit: it,
          children: [
            /* @__PURE__ */ o(
              F4,
              {
                isOpen: ie.isOpen,
                results: ie.results,
                isLoading: ie.isLoading,
                selectedIndex: ie.selectedIndex,
                position: ie.popoverPosition,
                onSelect: ie.selectPerson
              }
            ),
            /* @__PURE__ */ o(Oe, { initial: !1, children: B ? /* @__PURE__ */ o("div", { children: i }, "clarifying") : /* @__PURE__ */ f(
              ve.div,
              {
                className: "overflow-hidden",
                initial: { height: "auto", opacity: 1 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: {
                  duration: C ? 0 : 0.3,
                  ease: "easeOut"
                },
                children: [
                  d && /* @__PURE__ */ o(
                    P4,
                    {
                      quote: d,
                      onRemove: () => u?.(null)
                    }
                  ),
                  /* @__PURE__ */ o(Oe, { initial: !1, children: U && /* @__PURE__ */ o(
                    ve.div,
                    {
                      role: "alert",
                      "aria-live": "polite",
                      className: "p-1",
                      initial: { opacity: 0, y: -4 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -4 },
                      transition: {
                        duration: C ? 0 : 0.2,
                        ease: "easeOut"
                      },
                      children: /* @__PURE__ */ f(
                        "div",
                        {
                          className: F(
                            "flex w-full flex-row items-center gap-2 rounded-md p-2 pr-3",
                            "bg-f1-background-critical text-f1-foreground"
                          ),
                          children: [
                            /* @__PURE__ */ o("div", { className: "h-6 w-6 flex-shrink-0", children: /* @__PURE__ */ o(bi, { type: "critical", size: "sm" }) }),
                            /* @__PURE__ */ o("p", { className: "font-medium text-f1-foreground-critical", children: U })
                          ]
                        }
                      )
                    },
                    "transient-error"
                  ) }),
                  /* @__PURE__ */ o(
                    N4,
                    {
                      attachedFiles: me,
                      isUploading: Ae,
                      onRemove: $,
                      removeLabel: v.ai.removeFile
                    }
                  ),
                  /* @__PURE__ */ o(
                    H4,
                    {
                      textareaRef: X,
                      highlightRef: E,
                      inputValue: x,
                      onInputChange: (we, Xe) => {
                        S(we), b(Xe);
                      },
                      onKeyDown: Qt,
                      onCursorUpdate: Jt,
                      onScroll: er,
                      highlightSegments: $t,
                      hasOverlay: rr,
                      multiplePlaceholders: tr,
                      placeholders: Pt,
                      resolvedDefaultPlaceholder: be,
                      inProgress: r
                    }
                  ),
                  /* @__PURE__ */ o(
                    R4,
                    {
                      onUploadFiles: Z,
                      isAtMaxFiles: le,
                      maxFiles: ke,
                      acceptValue: re,
                      fileInputRef: Ce,
                      handleFileSelect: H,
                      inProgress: r,
                      hasDataToSend: Ye,
                      isPreSending: L || D
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
    /* @__PURE__ */ o(Oe, { mode: "wait", initial: !1, children: B ? /* @__PURE__ */ f(
      ve.div,
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
            v.ai.clarifyingQuestion.navHint.navigate
          ] }),
          /* @__PURE__ */ f("span", { children: [
            /* @__PURE__ */ o("kbd", { className: "font-sans", children: "Enter" }),
            " ",
            v.ai.clarifyingQuestion.navHint.select
          ] }),
          /* @__PURE__ */ f("span", { children: [
            /* @__PURE__ */ o("kbd", { className: "font-sans", children: "Esc" }),
            " ",
            v.ai.clarifyingQuestion.navHint.cancel
          ] })
        ]
      },
      "clarifying-nav-hint"
    ) : g?.text && /* @__PURE__ */ f(
      ve.div,
      {
        className: "flex w-full max-w-content flex-row items-center justify-center gap-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15, ease: "easeOut" },
        children: [
          g.onClick ? /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: g.onClick,
              className: F(
                "group min-w-0 cursor-pointer bg-transparent p-0 text-inherit",
                "transition-transform duration-700 ease-out",
                "hover:scale-[1.02] focus-visible:scale-[1.02]",
                "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
              ),
              children: /* @__PURE__ */ o(
                Le,
                {
                  className: F(
                    "text-sm font-medium text-f1-foreground-tertiary transition-colors duration-700 ease-out",
                    "group-hover:bg-gradient-to-r group-hover:from-[#E55619] group-hover:to-[#A1ADE5] group-hover:bg-clip-text group-hover:text-transparent",
                    "group-focus-visible:bg-gradient-to-r group-focus-visible:from-[#E55619] group-focus-visible:to-[#A1ADE5] group-focus-visible:bg-clip-text group-focus-visible:text-transparent"
                  ),
                  children: g.text
                }
              )
            }
          ) : /* @__PURE__ */ o(Le, { className: "text-sm font-medium text-f1-foreground-tertiary", children: g.text }),
          g.link && g.linkText && /* @__PURE__ */ o(
            Li,
            {
              href: g.link,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary",
              children: g.linkText
            }
          )
        ]
      },
      "chat-disclaimer"
    ) }),
    /* @__PURE__ */ o(Oe, { children: y && k && /* @__PURE__ */ o(
      ve.div,
      {
        className: F(
          "w-full py-4 mx-auto max-w-content",
          M && "flex justify-center"
        ),
        initial: { opacity: 0, height: 0, overflow: "hidden" },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0, overflow: "hidden" },
        transition: { duration: 0.3, ease: "easeInOut" },
        children: y
      },
      "chat-footer"
    ) })
  ] });
};
function J4({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "pre",
    {
      ...e,
      className: F(
        "relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2",
        e.className
      ),
      children: t
    }
  );
}
function e6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "code",
    {
      ...e,
      className: F(
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
function t6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "blockquote",
    {
      ...e,
      className: F(
        "mr-1 my-2 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-3 text-base",
        e.className
      ),
      children: t
    }
  );
}
function r6({ ...t }) {
  return /* @__PURE__ */ o(
    "hr",
    {
      ...t,
      className: F("my-3 border-0 border-t border-f1-border", t.className)
    }
  );
}
function n6({
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
        className: F("max-w-full rounded-md", r.className)
      }
    ),
    /* @__PURE__ */ o("div", { className: "absolute right-2 top-2 rounded", children: /* @__PURE__ */ o(
      Ee,
      {
        variant: "neutral",
        label: "Download",
        hideLabel: !0,
        icon: tt,
        onClick: n
      }
    ) })
  ] });
}
function o6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(Mi, { ...e, variant: "link", href: e.href, children: t });
}
function s6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "ul",
    {
      ...e,
      className: F(
        "list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        e.className
      ),
      children: t
    }
  );
}
function a6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "ol",
    {
      ...e,
      className: F(
        "list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        e.className
      ),
      children: t
    }
  );
}
function i6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o("li", { ...e, className: F("mb-2", e.className), children: t });
}
async function c6(t, e, r) {
  const n = await import("./xlsx-Bedf3nwD.js"), s = n.utils.table_to_book(t, { sheet: "Data" });
  n.writeFile(s, `${r}.${e}`);
}
function l6({
  children: t,
  title: e,
  ...r
}) {
  const n = pe(), s = z(null), a = ee(
    (i) => {
      if (!s.current) return;
      const l = e?.replace(/\s+/g, "_").toLowerCase() || "table";
      c6(s.current, i, l);
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
        $r,
        {
          icon: tt,
          size: "md",
          items: [
            {
              label: n.t("ai.dataDownload.download", {
                format: "Excel"
              }),
              icon: tt,
              onClick: () => a("xlsx")
            },
            {
              label: n.t("ai.dataDownload.download", {
                format: "CSV"
              }),
              icon: tt,
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
        className: F(
          "w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0",
          r.className
        ),
        children: t
      }
    ) })
  ] });
}
function d6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "th",
    {
      ...e,
      className: F(
        "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
        e.className
      ),
      children: t
    }
  );
}
function u6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "td",
    {
      ...e,
      className: F(
        "max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        e.className
      ),
      children: t
    }
  );
}
function f6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o("p", { ...e, className: F("text-base font-normal", e.className), children: t });
}
function h6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "h1",
    {
      ...e,
      className: F(
        "mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0",
        e.className
      ),
      children: t
    }
  );
}
function p6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "h2",
    {
      ...e,
      className: F(
        "mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0",
        e.className
      ),
      children: t
    }
  );
}
function m6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    "h3",
    {
      ...e,
      className: F(
        "mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0",
        e.className
      ),
      children: t
    }
  );
}
function g6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o("strong", { ...e, className: F("font-semibold", e.className), children: t });
}
function v6({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ o("em", { ...e, className: F("italic", e.className), children: t });
}
function kt({
  id: t,
  trigger: e,
  resolver: r,
  mapToCard: n,
  fallbackCard: s
}) {
  const a = z(/* @__PURE__ */ new Map()), [i, l] = q(
    () => a.current.get(t) ?? null
  ), [c, d] = q(!1), [u, h] = q(!1), w = z(!0);
  fe(() => () => {
    w.current = !1;
  }, []);
  const p = ee(() => {
    if (i || c) return;
    const y = a.current.get(t);
    if (y) {
      l(y);
      return;
    }
    d(!0), h(!1), r(t).then((k) => {
      a.current.set(t, k), w.current && l(k);
    }).catch(() => {
      w.current && h(!0);
    }).finally(() => {
      w.current && d(!1);
    });
  }, [r, t, i, c]), g = u || !i ? s : n(i);
  return /* @__PURE__ */ f(
    Ei,
    {
      openDelay: 300,
      closeDelay: 100,
      onOpenChange: (y) => {
        y && p();
      },
      children: [
        /* @__PURE__ */ o(_i, { asChild: !0, children: e }),
        /* @__PURE__ */ o(
          Si,
          {
            side: "top",
            align: "start",
            className: "w-64 rounded-2xl border-none p-0 shadow-md",
            children: c ? /* @__PURE__ */ o(qr.Skeleton, {}) : /* @__PURE__ */ o(qr, { ...g })
          }
        )
      ]
    }
  );
}
const E1 = m(
  ({ label: t, ...e }, r) => /* @__PURE__ */ o(
    "button",
    {
      ref: r,
      type: "button",
      className: F(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Ne()
      ),
      ...e,
      children: t
    }
  )
);
E1.displayName = "CandidateTrigger";
function C6({
  id: t,
  label: e
}) {
  const { entityRefs: r } = Ge(), n = r?.resolvers?.candidate, s = pe(), a = r?.urls?.candidate?.(t), i = de(
    () => (c) => {
      const d = [];
      return c.source && d.push({
        title: s.t("ai.entityRef.candidate.source"),
        value: c.source
      }), c.appliedAt && d.push({
        title: s.t("ai.entityRef.candidate.applied"),
        value: c.appliedAt
      }), {
        avatar: {
          type: "person",
          firstName: c.firstName,
          lastName: c.lastName,
          src: c.avatarUrl
        },
        title: `${c.firstName} ${c.lastName}`,
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
  ), l = de(
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
    kt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(E1, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: l
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
const _1 = m(
  ({ label: t, ...e }, r) => /* @__PURE__ */ o(
    "button",
    {
      ref: r,
      type: "button",
      className: F(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Ne()
      ),
      ...e,
      children: t
    }
  )
);
_1.displayName = "ExpenseTrigger";
function w6({ id: t, label: e }) {
  const { entityRefs: r } = Ge(), n = r?.resolvers?.expense, s = pe(), a = r?.urls?.expense?.(t), i = de(
    () => (c) => ({
      avatar: {
        type: "icon",
        icon: Uo
      },
      title: c.description || `Expense #${c.id}`,
      description: [c.amount, c.status].filter(Boolean).join(" · "),
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [s, a]
  ), l = de(
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
    kt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(_1, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: l
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
const S1 = m(
  ({ label: t, ...e }, r) => /* @__PURE__ */ o(
    "button",
    {
      ref: r,
      type: "button",
      className: F(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Ne()
      ),
      ...e,
      children: t
    }
  )
);
S1.displayName = "JobPostingTrigger";
function x6({
  id: t,
  label: e
}) {
  const { entityRefs: r } = Ge(), n = r?.resolvers?.jobPosting, s = pe(), a = r?.urls?.jobPosting?.(t), i = de(
    () => (c) => ({
      title: c.title,
      description: [c.status, c.location].filter(Boolean).join(" · "),
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [s, a]
  ), l = de(
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
    kt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(S1, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: l
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
function k6({ rows: t }) {
  return t.length === 0 ? null : /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: t.map((e, r) => /* @__PURE__ */ f("div", { className: "flex flex-col", children: [
    e.label && /* @__PURE__ */ o("p", { className: "text-f1-foreground-secondary", children: e.label }),
    /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: e.value })
  ] }, e.label ?? r)) });
}
const R1 = m(
  ({ label: t, ...e }, r) => /* @__PURE__ */ o(
    "button",
    {
      ref: r,
      type: "button",
      className: F(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Ne()
      ),
      ...e,
      children: t
    }
  )
);
R1.displayName = "RequisitionTrigger";
function y6({
  id: t,
  label: e
}) {
  const { entityRefs: r } = Ge(), n = r?.resolvers?.requisition, s = pe(), a = r?.urls?.requisition?.(t), i = de(
    () => (c) => {
      const d = c.lineManager ? `${c.lineManager.firstName} ${c.lineManager.lastName}` : void 0, h = [
        c.status ? {
          label: s.t("ai.entityRef.requisition.status"),
          value: /* @__PURE__ */ o("div", { className: "flex items-center pt-1", children: /* @__PURE__ */ o(
            Ri,
            {
              text: c.status,
              variant: c.statusVariant ?? "neutral"
            }
          ) })
        } : void 0,
        c.lineManager ? {
          label: s.t("ai.entityRef.requisition.lineManager"),
          value: /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5 pt-1", children: [
            /* @__PURE__ */ o(
              No,
              {
                firstName: c.lineManager.firstName,
                lastName: c.lineManager.lastName,
                src: c.lineManager.avatarUrl,
                size: "xs"
              }
            ),
            /* @__PURE__ */ o("span", { children: d })
          ] })
        } : void 0,
        c.reason ? {
          label: s.t("ai.entityRef.requisition.reason"),
          value: c.reason
        } : void 0
      ].filter(
        (w) => w !== void 0
      );
      return {
        title: c.title,
        ...c.location && { description: c.location },
        ...h.length > 0 && {
          children: /* @__PURE__ */ o(k6, { rows: h })
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
  ), l = de(
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
    kt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(R1, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: l
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
const N1 = m(
  ({ label: t, ...e }, r) => /* @__PURE__ */ f(
    "button",
    {
      ref: r,
      type: "button",
      className: F(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Ne()
      ),
      ...e,
      children: [
        "@",
        t
      ]
    }
  )
);
N1.displayName = "PersonTrigger";
function b6({ id: t, label: e }) {
  const { entityRefs: r } = Ge(), n = r?.resolvers?.person, s = pe(), a = r?.urls?.person?.(t), i = de(
    () => (c) => ({
      avatar: {
        type: "person",
        firstName: c.firstName,
        lastName: c.lastName,
        src: c.avatarUrl
      },
      title: `${c.firstName} ${c.lastName}`,
      description: c.jobTitle,
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [s, a]
  ), l = de(
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
    kt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(N1, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: l
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
const T1 = m(
  ({ label: t, ...e }, r) => /* @__PURE__ */ o(
    "button",
    {
      ref: r,
      type: "button",
      className: F(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        Ne()
      ),
      ...e,
      children: t
    }
  )
);
T1.displayName = "VacancyTrigger";
function L6({ id: t, label: e }) {
  const { entityRefs: r } = Ge(), n = r?.resolvers?.vacancy, s = pe(), a = r?.urls?.vacancy?.(t), i = de(
    () => (c) => ({
      title: c.name,
      description: [c.status, c.vacancyType].filter(Boolean).join(" · "),
      ...a && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: a
        }
      }
    }),
    [s, a]
  ), l = de(
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
    kt,
    {
      id: t,
      trigger: /* @__PURE__ */ o(T1, { label: e }),
      resolver: n,
      mapToCard: i,
      fallbackCard: l
    }
  ) : /* @__PURE__ */ o("span", { children: e });
}
const M6 = {
  person: b6,
  candidate: C6,
  expense: w6,
  "job-posting": x6,
  requisition: y6,
  vacancy: L6
};
function E6(t) {
  return M6[t];
}
function _r(t) {
  return typeof t == "string" ? t : typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(_r).join("") : t && typeof t == "object" && "props" in t ? _r(t.props.children) : "";
}
function _6({
  type: t,
  id: e,
  children: r
}) {
  if (!e || !t)
    return /* @__PURE__ */ o("span", { children: r });
  const n = _r(r), s = E6(t);
  return s ? /* @__PURE__ */ o(s, { id: e, label: n }) : /* @__PURE__ */ o("span", { children: r });
}
const J3 = {
  p: f6,
  h1: h6,
  h2: p6,
  h3: m6,
  a: o6,
  strong: g6,
  em: v6,
  li: i6,
  pre: J4,
  code: e6,
  blockquote: t6,
  hr: r6,
  ul: s6,
  ol: a6,
  table: l6,
  th: d6,
  td: u6,
  img: n6,
  "entity-ref": _6
}, S6 = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2
}, R6 = {
  normal: {
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0 }
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1]
  }
}, N6 = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275]
}, T6 = {
  normal: {
    scale: 1
  },
  animate: {
    scale: [1, 0.9, 1]
  }
}, A1 = ss.forwardRef(({ animate: t = "normal", ...e }, r) => /* @__PURE__ */ f(
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
        ve.circle,
        {
          cx: "12",
          cy: "12",
          r: "8",
          initial: "normal",
          variants: T6,
          transition: N6,
          animate: t,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o(
        ve.path,
        {
          d: "M9.00003 12L11.4 14.4L15 9.6",
          initial: "normal",
          variants: R6,
          transition: S6,
          animate: t,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
));
A1.displayName = "CheckCircleLineAnimated";
const V1 = 60, F1 = 40, En = 2e3, A6 = 500, V6 = 12e3, P1 = 2, Et = 40, ut = [255, 60, 0], lr = [160, 140, 220], dr = { x: -12, y: 0, z: 0 }, ur = { x: -12, y: 12, z: 90 }, ht = {
  20: 0.72,
  28: 0.66,
  32: 0.72,
  60: 0.77,
  80: 0.8,
  120: 0.85
}, fr = Math.PI / 180, F6 = P1 / 8 * Math.PI, P6 = 4 * Math.PI;
function Yt(t, e) {
  return [
    t[0] * e[0] - t[1] * e[1] - t[2] * e[2] - t[3] * e[3],
    t[0] * e[1] + t[1] * e[0] + t[2] * e[3] - t[3] * e[2],
    t[0] * e[2] - t[1] * e[3] + t[2] * e[0] + t[3] * e[1],
    t[0] * e[3] + t[1] * e[2] - t[2] * e[1] + t[3] * e[0]
  ];
}
function $6(t) {
  const e = Math.sqrt(t[0] ** 2 + t[1] ** 2 + t[2] ** 2 + t[3] ** 2);
  return [t[0] / e, t[1] / e, t[2] / e, t[3] / e];
}
function _t(t, e, r, n) {
  const s = Math.sin(n / 2);
  return [Math.cos(n / 2), t * s, e * s, r * s];
}
const Qe = [0, 0, 0];
function _n(t, e, r, n, s) {
  const a = t[0], i = t[1], l = t[2], c = t[3], d = 2 * (l * n - c * r), u = 2 * (c * e - i * n), h = 2 * (i * r - l * e);
  s[0] = e + a * d + l * h - c * u, s[1] = r + a * u + c * d - i * h, s[2] = n + a * h + i * u - l * d;
}
function $1(t, e, r) {
  const n = _t(1, 0, 0, t * fr), s = _t(0, 1, 0, e * fr), a = _t(0, 0, 1, r * fr);
  return $6(Yt(Yt(s, n), a));
}
function H6(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
const St = 256, I6 = (() => {
  const t = new Array(St);
  for (let e = 0; e < St; e++) {
    const r = e / (St - 1), n = Math.round(ut[0] + (lr[0] - ut[0]) * r), s = Math.round(ut[1] + (lr[1] - ut[1]) * r), a = Math.round(ut[2] + (lr[2] - ut[2]) * r);
    t[e] = `rgb(${n},${s},${a})`;
  }
  return t;
})();
function j6(t) {
  const e = t <= 0 ? 0 : t >= 1 ? St - 1 : t * (St - 1) | 0;
  return I6[e];
}
const O6 = Object.keys(ht).map(Number).sort((t, e) => t - e);
function Z6(t) {
  const e = O6;
  if (t <= e[0]) return ht[e[0]];
  if (t >= e[e.length - 1])
    return ht[e[e.length - 1]];
  for (let r = 0; r < e.length - 1; r++)
    if (t >= e[r] && t <= e[r + 1]) {
      const n = (t - e[r]) / (e[r + 1] - e[r]);
      return ht[e[r]] + (ht[e[r + 1]] - ht[e[r]]) * n;
    }
  return 0.72;
}
const Sn = Math.sqrt(V1 ** 2 + F1 ** 2), hr = [V1 / Sn, F1 / Sn, 0], D6 = $1(dr.x, dr.y, dr.z), B6 = $1(ur.x, ur.y, ur.z), pt = P1 * 3, Zt = Et + 1, Rn = (pt + 1) * Zt, Xt = 4 * pt * Et, pr = [
  [0, 0, 0, 0],
  [0, 0, 0, 0]
], U6 = (t, e) => t.avgZ - e.avgZ;
function z6() {
  const t = new Array(Xt);
  for (let r = 0; r < Xt; r++)
    t[r] = { points: "", color: "", avgZ: 1 / 0 };
  const e = new Array(Rn);
  for (let r = 0; r < Rn; r++)
    e[r] = { x: 0, y: 0, z: 0, t: 0 };
  return { quads: t, grid: e };
}
function Nn(t, e, r, n) {
  const { quads: s, grid: a } = t, i = r * 0.392, l = r / 2, c = r / 2, d = F6 * Z6(r), u = e * P6, h = _t(0, 0, 1, n * 2 * Math.PI);
  _n(h, hr[0], hr[1], hr[2], Qe);
  const w = _t(Qe[0], Qe[1], Qe[2], u), p = Yt(w, D6), g = Yt(w, B6);
  pr[0] = p, pr[1] = g;
  let y = 0;
  for (let k = 0; k < 4; k++) {
    const M = pr[k >> 1], P = k & 1 ? -1 : 1;
    for (let I = 0; I <= pt; I++) {
      const T = P * (Math.PI / 2 - I / pt * d), v = Math.cos(T), C = Math.sin(T), x = Math.sin(I / pt * Math.PI), S = I * Zt;
      for (let _ = 0; _ <= Et; _++) {
        const b = _ / Et * Math.PI * 2;
        _n(M, v * Math.cos(b), C, v * Math.sin(b), Qe);
        const L = a[S + _];
        L.x = Qe[0], L.y = Qe[1], L.z = Qe[2], L.t = x;
      }
    }
    for (let I = 0; I < pt; I++) {
      const T = I * Zt, v = (I + 1) * Zt;
      for (let C = 0; C < Et; C++) {
        const x = a[T + C], S = a[T + C + 1], _ = a[v + C], b = a[v + C + 1];
        if ((x.t + S.t + _.t + b.t) * 0.25 < 1e-3) continue;
        const N = (x.x + S.x + _.x + b.x) * 0.25, D = (x.y + S.y + _.y + b.y) * 0.25, Q = (x.z + S.z + _.z + b.z) * 0.25, J = N * i, ae = D * i, ne = x.x * i - J, X = x.y * i - ae, E = Math.sqrt(ne * ne + X * X), B = E > 0 ? (E + 0.9) / E : 1, j = l + J + ne * B, Y = c - ae - X * B, me = S.x * i - J, Ce = S.y * i - ae, Z = Math.sqrt(me * me + Ce * Ce), re = Z > 0 ? (Z + 0.9) / Z : 1, le = l + J + me * re, ke = c - ae - Ce * re, R = b.x * i - J, H = b.y * i - ae, $ = Math.sqrt(R * R + H * H), K = $ > 0 ? ($ + 0.9) / $ : 1, U = l + J + R * K, oe = c - ae - H * K, ie = _.x * i - J, be = _.y * i - ae, Re = Math.sqrt(ie * ie + be * be), Ae = Re > 0 ? (Re + 0.9) / Re : 1, qe = l + J + ie * Ae, Ye = c - ae - be * Ae, it = s[y];
        it.points = `${j},${Y} ${le},${ke} ${U},${oe} ${qe},${Ye}`, it.color = j6((N + 1) * 0.5), it.avgZ = Q, y++;
      }
    }
  }
  for (let k = y; k < Xt; k++)
    s[k].avgZ = 1 / 0;
  return s.sort(U6), y;
}
const W6 = ({ size: t = 20, className: e, style: r, variant: n = "default" }, s) => {
  const a = z(null), i = z(null), l = z(null);
  l.current === null && (l.current = z6());
  const c = de(() => new Array(Xt).fill(0), []), d = (u) => {
    a.current = u, s && (typeof s == "function" ? s(u) : s.current = u);
  };
  return fe(() => {
    const u = i.current, h = a.current;
    if (!u || !h) return;
    const w = u.querySelectorAll(
      "polygon"
    ), p = l.current;
    let g = null, y = 0, k = 0, M = 0, P = null, I = "spin", T = !0, v = !1;
    const C = (L) => {
      const N = p.quads;
      for (let D = 0; D < w.length; D++) {
        const Q = w[D];
        if (D < L) {
          const J = N[D];
          Q.setAttribute("points", J.points), Q.setAttribute("fill", J.color), Q.hasAttribute("display") && Q.removeAttribute("display");
        } else Q.hasAttribute("display") || Q.setAttribute("display", "none");
      }
    }, x = (L) => {
      v || (y = L, k = L, v = !0);
      let N = 0, D = !0;
      if (n === "continuous") {
        const ne = En * 2, X = (L - y) % ne / ne;
        N = X < 0.5 ? X * 2 : (1 - X) * 2, D = !1;
      } else I === "spin" ? (N = Math.min((L - y) / En, 1), N >= 1 && (N = 0, I = "pause", M = L)) : (N = 0, L - M >= A6 && (I = "spin", y = L));
      const Q = (L - k) / V6 % 1, J = D ? H6(N) : N, ae = Nn(p, J, t, Q);
      C(ae), g = requestAnimationFrame(x);
    }, S = () => {
      g === null && (g = requestAnimationFrame(x));
    }, _ = () => {
      g !== null && (cancelAnimationFrame(g), g = null);
    };
    C(Nn(p, 0, t, 0));
    let b = null;
    return typeof IntersectionObserver < "u" && (b = new IntersectionObserver(
      (L) => {
        const N = L[0]?.isIntersecting ?? !0;
        if (N !== T)
          if (T = N, N) {
            if (P !== null && v) {
              const D = performance.now() - P;
              y += D, k += D, M += D;
            }
            P = null, S();
          } else
            P = performance.now(), _();
      },
      { threshold: 0 }
    ), b.observe(h)), S(), () => {
      _(), b?.disconnect();
    };
  }, [t, n]), /* @__PURE__ */ o(
    "div",
    {
      ref: d,
      role: "progressbar",
      "aria-label": "Loading",
      className: F("shrink-0 globe-spin-anim", e),
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
          children: c.map((u, h) => /* @__PURE__ */ o("polygon", { stroke: "none", display: "none" }, h))
        }
      )
    }
  );
}, H1 = m(
  W6
);
H1.displayName = "ChatSpinner";
const Tn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}, Sr = ({ title: t, status: e, inGroup: r }) => {
  const s = {
    duration: De() ? 0 : 0.18,
    ease: [0.33, 1, 0.68, 1]
  }, a = e === "inProgress", i = e === "executing", l = e === "completed", c = e === "writing";
  return /* @__PURE__ */ f("div", { className: "flex w-full items-start gap-1 text-f1-foreground-secondary", children: [
    /* @__PURE__ */ o("div", { className: "flex h-5 w-6 shrink-0 items-center justify-start", children: /* @__PURE__ */ f(Oe, { mode: "wait", children: [
      a && /* @__PURE__ */ o(
        ve.div,
        {
          className: "flex h-5 w-5 shrink-0 items-center justify-center",
          ...Tn,
          transition: s,
          children: /* @__PURE__ */ o(
            ye,
            {
              state: "animate",
              size: r ? "md" : "lg",
              icon: go
            }
          )
        },
        "inProgress"
      ),
      (i || c) && /* @__PURE__ */ o("div", { className: "flex h-5 w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ o(H1, { variant: i ? "default" : "continuous" }) }),
      l && /* @__PURE__ */ o(
        ve.div,
        {
          ...Tn,
          className: "flex h-5 w-5 shrink-0 items-center justify-center",
          transition: s,
          children: /* @__PURE__ */ o(
            ye,
            {
              color: "secondary",
              state: "animate",
              size: r ? "md" : "lg",
              icon: A1
            }
          )
        },
        "completed"
      )
    ] }) }),
    t && /* @__PURE__ */ o(
      "p",
      {
        className: F(
          "text-pretty leading-5",
          (i || c) && "shine-text"
        ),
        children: t
      }
    )
  ] });
}, ef = [
  "inProgress",
  "executing",
  "writing",
  "completed"
];
function I1({
  module: t,
  title: e,
  description: r,
  onOpen: n,
  showOpenButton: s = !0,
  onClose: a,
  isActive: i,
  children: l
}) {
  const c = pe();
  return /* @__PURE__ */ f(
    "div",
    {
      className: F(
        "flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2 cursor-pointer",
        i ? "border-f1-border-hover" : "border-f1-border-secondary hover:border-f1-border-hover"
      ),
      onClick: i ? a : n,
      children: [
        /* @__PURE__ */ f("div", { className: "flex w-full min-w-0 flex-row items-center gap-3", children: [
          !!t && /* @__PURE__ */ o(To, { module: t, size: "lg" }),
          /* @__PURE__ */ f("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ o(Le, { className: "text-lg font-semibold text-f1-foreground", children: e }),
            /* @__PURE__ */ o(Le, { className: "text-base text-f1-foreground-secondary", children: r })
          ] }),
          s && /* @__PURE__ */ o(
            Ee,
            {
              variant: "neutral",
              size: "md",
              label: i ? c.actions.close : c.ai.reportCard.openButton,
              onClick: i ? a : n
            }
          )
        ] }),
        l
      ]
    }
  );
}
I1.displayName = "F0CanvasCard";
const Dr = Vt(null);
function tf({
  children: t
}) {
  const [e, r] = q(0), n = z([]), s = ee(
    (i) => {
      const l = n.current, c = l.findIndex(
        (u) => u.formName === i.formName && u.customFieldName === i.customFieldName
      ), d = i;
      c >= 0 ? l[c] = d : l.push(d), r((u) => u + 1);
    },
    []
  ), a = de(
    () => ({
      formatters: [...n.current],
      setFormCardValueFormatter: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, e]
  );
  return /* @__PURE__ */ o(Dr.Provider, { value: a, children: t });
}
function G6(t) {
  const r = xt(Dr)?.formatters;
  return de(() => !r || r.length === 0 ? null : (n, s, a) => {
    let i, l = -1;
    for (const c of r) {
      const d = c.formName === void 0 || c.formName === t, u = c.customFieldName === void 0 || c.customFieldName === a.customFieldName;
      if (!d || !u) continue;
      let h = 0;
      c.formName !== void 0 && (h += 2), c.customFieldName !== void 0 && (h += 1), h > l && (l = h, i = c);
    }
    if (i)
      return i.format(s, { key: n, ...a });
  }, [r, t]);
}
function rf() {
  const t = xt(Dr);
  if (!t)
    throw new Error(
      "useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider"
    );
  return t.setFormCardValueFormatter;
}
const An = 7, q6 = 625, Vn = /* @__PURE__ */ new Set();
function Y6(t) {
  return typeof DOMParser < "u" ? new DOMParser().parseFromString(t, "text/html").body.textContent?.replace(/\s+/g, " ").trim() ?? "" : t.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
function X6(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
function K6(t) {
  const { days: e, hours: r, minutes: n, seconds: s } = gu(t), a = [];
  return e > 0 && a.push(`${e}d`), r > 0 && a.push(`${r}h`), n > 0 && a.push(`${n}m`), (s > 0 || a.length === 0) && a.push(`${s}s`), a.join(" ");
}
function Fn(t) {
  if (t instanceof Date) return !0;
  if (typeof t != "string") return !1;
  const e = new Date(t);
  return !Number.isNaN(e.getTime());
}
function Pn(t) {
  return (t instanceof Date ? t : new Date(t)).toLocaleDateString();
}
function $n(t) {
  return t.type === "item" ? t.text : "";
}
function j1(t, e) {
  if (t == null || t === "") return { type: "item", text: "—" };
  if (e === "duration" && typeof t == "number")
    return { type: "item", text: K6(t) };
  if (e === "richtext" && typeof t == "object" && t !== null && "value" in t) {
    const r = t.value;
    return { type: "item", text: (r ? Y6(r) : "") || "—" };
  }
  if (e === "daterange" && typeof t == "object" && t !== null && "from" in t && "to" in t) {
    const { from: r, to: n } = t, s = Fn(r) ? Pn(r) : String(r), a = Fn(n) ? Pn(n) : String(n);
    return { type: "item", text: `${s} – ${a}` };
  }
  if (t instanceof Date)
    return { type: "item", text: t.toLocaleDateString() };
  if (typeof t == "boolean")
    return { type: "item", text: t ? "Yes" : "No" };
  if (Array.isArray(t))
    return { type: "item", text: t.map((n) => {
      const s = j1(n);
      return Array.isArray(s) ? s.map($n).join(", ") : $n(s);
    }).filter(Boolean).join(", ") || "—" };
  if (typeof t == "object" && t !== null) {
    const r = t;
    return typeof r.label == "string" ? { type: "item", text: r.label } : typeof r.name == "string" ? { type: "item", text: r.name } : typeof r.text == "string" ? { type: "item", text: r.text } : { type: "item", text: JSON.stringify(t) };
  }
  return { type: "item", text: X6(String(t)) };
}
function O1({
  formName: t,
  formDescription: e,
  module: r,
  cardTitle: n,
  cardDescription: s,
  fieldDescriptions: a,
  formValues: i,
  valueFormatter: l
}) {
  const { canvasContent: c, openCanvas: d, closeCanvas: u } = Ge(), h = G6(t), w = l ?? h, p = z(() => {
  }), g = n ?? t, y = s ?? e ?? "", k = c?.type === "form" && c.formName === t, M = () => d({
    type: "form",
    title: g,
    description: y,
    formName: t,
    formDescription: e,
    formModule: r
  });
  p.current = M, fe(() => {
    typeof window > "u" || window.innerWidth < q6 || Vn.has(t) || (Vn.add(t), p.current());
  }, [t]);
  const P = a && i ? Object.entries(a).map(([v, C]) => {
    const x = i[v], S = w?.(v, x, {
      fieldType: C.fieldType,
      customFieldName: C.customFieldName
    });
    if (!S && C.fieldType === "custom" && typeof x == "object" && x !== null)
      return null;
    const _ = S ?? j1(x, C.fieldType), b = ["richtext", "textarea"];
    return {
      label: C.label,
      content: _,
      verticalLayout: b.includes(C.fieldType ?? "")
    };
  }).filter((v) => {
    if (!v) return !1;
    const C = Array.isArray(v.content) ? v.content[0] : v.content;
    return !(C?.type === "item" && C.text === "—");
  }) : [], I = P.slice(0, An), T = P.length > An;
  return /* @__PURE__ */ o(
    I1,
    {
      module: r,
      title: g,
      description: y,
      onClose: u,
      isActive: k,
      onOpen: M,
      showOpenButton: k,
      children: I.length > 0 && !k && /* @__PURE__ */ o("div", { className: "-mx-3 flex w-full flex-col overflow-hidden pb-1", children: /* @__PURE__ */ o(
        Ni,
        {
          details: I.map((v) => ({
            title: v.label,
            content: v.content,
            ...v.verticalLayout && { verticalLayout: !0 }
          })),
          showSeeMore: T,
          onClickSeeMore: M,
          tableView: !0
        }
      ) })
    }
  );
}
O1.displayName = "FormCard";
function Q6() {
  const t = S4(), e = t?.activeForm;
  if (!e) return null;
  const r = e.cardTitle, n = e.cardDescription, s = (t?.getFillVersion(e.formName) ?? 0) > 0;
  return !r || !n || !s ? null : /* @__PURE__ */ o("div", { className: "mt-2 w-full", children: /* @__PURE__ */ o(
    O1,
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
const J6 = 2;
function e9(t, e) {
  if (!t.intersectsNode(e)) return null;
  const r = document.createRange();
  r.selectNodeContents(e);
  const n = t.cloneRange();
  n.compareBoundaryPoints(Range.START_TO_START, r) < 0 && n.setStart(r.startContainer, r.startOffset), n.compareBoundaryPoints(Range.END_TO_END, r) > 0 && n.setEnd(r.endContainer, r.endOffset);
  const s = n.toString().trim();
  if (s.length < J6) return null;
  const a = n.getBoundingClientRect();
  return { rect: a.width > 0 || a.height > 0 ? a : e.getBoundingClientRect(), text: s };
}
function Z1({
  containerRef: t,
  enabled: e = !0
}) {
  const [r, n] = q(null), s = ee(() => n(null), []);
  return fe(() => {
    if (!e || typeof window > "u") return;
    const a = t.current;
    if (!a) return;
    const i = () => {
      const d = window.getSelection();
      if (!d || d.isCollapsed || d.rangeCount === 0) {
        n(null);
        return;
      }
      n(e9(d.getRangeAt(0), a));
    }, l = () => {
      window.setTimeout(i, 0);
    }, c = () => {
      const d = window.getSelection();
      (!d || d.isCollapsed || d.rangeCount === 0) && n(null);
    };
    return document.addEventListener("mouseup", l), document.addEventListener("keyup", l), document.addEventListener("selectionchange", c), () => {
      document.removeEventListener("mouseup", l), document.removeEventListener("keyup", l), document.removeEventListener("selectionchange", c);
    };
  }, [t, e]), { anchor: r, clear: s };
}
const Hn = 8, Lt = 8;
function D1({ anchor: t, onReply: e }) {
  const r = pe(), n = z(null), [s, a] = q(
    null
  );
  if (so(() => {
    if (!t) {
      a(null);
      return;
    }
    const l = n.current;
    if (!l) return;
    const c = l.offsetWidth, d = l.offsetHeight, u = window.innerWidth, h = window.innerHeight;
    let w = t.rect.top - d - Hn;
    w < Lt && (w = t.rect.bottom + Hn), w = Math.min(
      Math.max(w, Lt),
      h - d - Lt
    );
    const p = t.rect.left + t.rect.width / 2 - c / 2, g = Math.min(
      Math.max(p, Lt),
      u - c - Lt
    );
    a({ top: w, left: g });
  }, [t]), typeof document > "u" || !t) return null;
  const i = r.ai.reply;
  return jo(
    /* @__PURE__ */ o(
      "div",
      {
        style: {
          position: "fixed",
          top: s?.top ?? -9999,
          left: s?.left ?? -9999,
          visibility: s ? "visible" : "hidden"
        },
        className: F(
          "z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary",
          "drop-shadow"
        ),
        children: /* @__PURE__ */ o(
          Se,
          {
            ref: n,
            type: "button",
            variant: "ghost",
            label: i,
            icon: bo,
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
const B1 = Vt(void 0), nf = () => xt(B1), t9 = (t) => /* @__PURE__ */ o(Ao, { content: t, format: "markdown" }), r9 = ({
  isGenerating: t,
  isLoading: e,
  message: r,
  renderToolCall: n,
  onReplyQuote: s,
  onRendered: a,
  renderMarkdown: i
}) => {
  const l = typeof r?.content == "string" ? r.content : "", c = (r && n?.(r)) ?? r?.generativeUI?.() ?? null, d = r?.toolCalls?.[0]?.id, u = !l && !c, h = z(null), { anchor: w, clear: p } = Z1({
    containerRef: h,
    enabled: !!(r?.id && l)
  });
  return fe(() => {
    r?.id && !e && !t && a?.(r);
  }, [r, e, t, a]), !e && !t && u ? null : /* @__PURE__ */ o(B1.Provider, { value: d, children: /* @__PURE__ */ f("div", { className: "relative isolate flex w-full flex-col items-start justify-center", children: [
    r && l && /* @__PURE__ */ o(
      "div",
      {
        ref: h,
        className: "w-full max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: (i ?? t9)(l)
      }
    ),
    !!c && /* @__PURE__ */ o("div", { className: "w-full", children: c }),
    /* @__PURE__ */ o(
      D1,
      {
        anchor: w,
        onReply: (g) => {
          s?.(g), p(), window.getSelection()?.removeAllRanges();
        }
      }
    )
  ] }) });
}, n9 = ({
  onClose: t,
  onSubmit: e,
  reactionType: r,
  message: n
}) => {
  const [s, a] = q(""), i = pe(), { title: l, label: c, placeholder: d } = r === "like" ? i.ai.feedbackModal.positive : i.ai.feedbackModal.negative, u = ee(() => {
    e(n, s);
  }, [s, n, e]), h = () => {
    t(n);
  };
  return fe(() => {
    const w = (p) => {
      p.key === "Enter" && (p.preventDefault(), u());
    };
    return document.addEventListener("keydown", w), () => {
      document.removeEventListener("keydown", w);
    };
  }, [u]), /* @__PURE__ */ o(
    pu,
    {
      position: "center",
      isOpen: !0,
      onClose: h,
      width: "md",
      title: l,
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
        Ti,
        {
          autoFocus: !0,
          label: c,
          placeholder: d,
          value: s,
          onChange: (w) => a(w.trim()),
          size: "md",
          type: "text"
        }
      ) })
    }
  );
}, U1 = Vt(null), o9 = ({ children: t }) => {
  const [e, r] = q(null), n = e ? {
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
  return /* @__PURE__ */ o(U1.Provider, { value: n, children: t });
}, z1 = () => {
  const t = xt(U1);
  if (t === null)
    throw new Error(
      "useFeedbackModal must be used within a FeedbackModalProvider"
    );
  return t;
};
function s9(t) {
  const e = z1();
  return { modal: e, handleSubmit: (s, a) => {
    (e.currentReaction === "like" ? t.onThumbsUp : t.onThumbsDown)?.(s, { threadId: t.threadId, feedback: a }), e.close();
  }, handleClose: (s) => {
    (e.currentReaction === "like" ? t.onThumbsUp : t.onThumbsDown)?.(s, { threadId: t.threadId, feedback: "" }), e.close();
  } };
}
const a9 = ({
  content: t,
  targetMessage: e,
  onCopy: r
}) => {
  const n = pe(), { open: s } = z1(), [a, i] = q(null);
  return /* @__PURE__ */ f("div", { className: "flex", children: [
    /* @__PURE__ */ o(
      Ai,
      {
        size: "md",
        variant: "ghost",
        valueToCopy: t,
        onCopy: (l) => {
          l.currentTarget.blur(), r?.(t);
        }
      }
    ),
    /* @__PURE__ */ o(
      Rt,
      {
        onClick: (l) => {
          const c = a === "like" ? null : "like";
          c && s(c, e), i(c), l.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": n.actions.thumbsUp,
        children: /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ o(
          ye,
          {
            size: "md",
            icon: a === "like" ? Xo : Yo,
            color: "default"
          }
        ) })
      }
    ),
    /* @__PURE__ */ o(
      Rt,
      {
        onClick: (l) => {
          const c = a === "dislike" ? null : "dislike";
          c && s(c, e), i(c), l.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": n.actions.thumbsDown,
        children: /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ o(
          ye,
          {
            size: "md",
            icon: a === "dislike" ? qo : Go,
            color: "default"
          }
        ) })
      }
    )
  ] });
}, In = ({ position: t }) => /* @__PURE__ */ o(
  ve.div,
  {
    transition: { duration: 0.2, ease: "easeOut" },
    className: F(
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
), i9 = ({
  icon: t,
  title: e,
  children: r,
  open: n,
  defaultOpen: s = !1,
  onOpenChange: a,
  lockOpen: i = !1
}) => {
  const [l, c] = q(s), d = De(), u = n !== void 0, h = u ? n : l;
  return /* @__PURE__ */ f(
    Vo,
    {
      className: "mb-1 w-full",
      open: h,
      onOpenChange: (p) => {
        i || (u || c(p), a?.(p));
      },
      children: [
        /* @__PURE__ */ f(
          Fo,
          {
            disabled: i,
            className: F(
              "gap-1",
              i ? "flex w-full items-center text-base text-f1-foreground-secondary" : "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90"
            ),
            children: [
              /* @__PURE__ */ o("span", { className: "flex items-center justify-start h-6 w-6", children: /* @__PURE__ */ o(ye, { icon: t, className: "block" }) }),
              /* @__PURE__ */ o("div", { className: "min-h-6 flex items-center", children: /* @__PURE__ */ o("span", { children: e }) }),
              !i && /* @__PURE__ */ o(ye, { icon: Kt })
            ]
          }
        ),
        /* @__PURE__ */ o(Po, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ o(
          ve.div,
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
}, c9 = ({
  titles: t,
  title: e,
  inProgress: r,
  isWriting: n
}) => {
  const s = pe(), [a, i] = q(!!r), l = z(r);
  fe(() => {
    l.current && !r ? i(!1) : r && !a && i(!0), l.current = r;
  }, [r, a]);
  const c = r ? s.ai.thoughtsGroupTitle : e ?? s.ai.thoughtsGroupTitle, d = t.length - 1, u = (h) => !r || n ? "completed" : h === d ? "executing" : "completed";
  return /* @__PURE__ */ o(
    i9,
    {
      icon: Bo,
      title: c,
      open: a,
      onOpenChange: i,
      lockOpen: r,
      children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-4", children: t.map((h, w) => /* @__PURE__ */ f("div", { className: "relative", children: [
        /* @__PURE__ */ o(
          Sr,
          {
            title: h,
            status: u(w),
            inGroup: !0
          }
        ),
        w < t.length - 1 && /* @__PURE__ */ o(
          "div",
          {
            "aria-hidden": !0,
            className: "absolute -bottom-3 left-2 ml-px top-5 w-px bg-f1-border-secondary rounded"
          }
        )
      ] }, w)) })
    }
  );
};
function l9(t) {
  if (typeof t == "string") return t;
  if (Array.isArray(t)) {
    const e = t.filter((r) => r.type === "text").map((r) => r.text).filter((r) => typeof r == "string");
    return e[e.length - 1];
  }
}
function d9(t, e) {
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
const W1 = (t) => /* @__PURE__ */ o(Ao, { content: t, format: "markdown" }), u9 = ({
  text: t,
  renderMarkdown: e
}) => /* @__PURE__ */ f("div", { className: "flex max-w-[90%] items-start gap-2 self-end pb-1 pr-2 text-f1-foreground-tertiary", children: [
  /* @__PURE__ */ o("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ o(ye, { icon: Or }) }),
  /* @__PURE__ */ o("div", { className: "min-w-0 whitespace-pre-wrap text-base leading-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&_p]:m-0", children: (e ?? W1)(t) })
] }), f9 = ({
  message: t,
  onReplyQuote: e,
  autoScrollIntoView: r = !0,
  renderMarkdown: n
}) => {
  const s = z(null), a = z(null);
  fe(() => {
    !s.current || !r || s.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [r]);
  const i = t.rawData, l = d9(
    t?.content,
    i
  ), c = (l9(t?.content) ?? "").trim(), d = t?.replyQuote ?? null, u = c.length > 0, { anchor: h, clear: w } = Z1({
    containerRef: a,
    enabled: u
  });
  return /* @__PURE__ */ f(
    "div",
    {
      ref: s,
      className: "my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0",
      children: [
        d && /* @__PURE__ */ o(u9, { text: d, renderMarkdown: n }),
        l.length > 0 && /* @__PURE__ */ o("div", { className: "flex max-w-[90%] flex-wrap justify-end gap-1.5", children: l.map((p, g) => /* @__PURE__ */ o(
          Ro,
          {
            file: { name: p.filename, type: p.mimetype },
            size: "lg"
          },
          `${p.filename}-${g}`
        )) }),
        u && /* @__PURE__ */ o(
          "div",
          {
            ref: a,
            className: "w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-xl bg-f1-background-tertiary px-4 py-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
            children: (n ?? W1)(c)
          }
        ),
        /* @__PURE__ */ o(
          D1,
          {
            anchor: h,
            onReply: (p) => {
              e?.(p), w(), window.getSelection()?.removeAllRanges();
            }
          }
        )
      ]
    }
  );
}, h9 = 35, p9 = 22, m9 = 400, g9 = 2500, v9 = 220, C9 = ({ messages: t, onClick: e }) => {
  const [r, n] = q(0), [s, a] = q(0), [i, l] = q("starting"), c = t[r] ?? "";
  fe(() => {
    t.length > 0 && r >= t.length && (n(0), a(0), l("starting"));
  }, [t.length, r]), fe(() => {
    let h;
    if (i === "starting")
      h = setTimeout(() => l("writing"), m9);
    else if (i === "writing")
      s < c.length ? h = setTimeout(() => a((w) => w + 1), h9) : l("holding");
    else if (i === "holding") {
      if (t.length <= 1) return;
      h = setTimeout(() => l("erasing"), g9);
    } else i === "erasing" && (s > 0 ? h = setTimeout(() => a((w) => w - 1), p9) : h = setTimeout(() => {
      n((w) => (w + 1) % t.length), l("starting");
    }, v9));
    return () => {
      h && clearTimeout(h);
    };
  }, [i, s, c.length, t.length]);
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
      className: F(
        "bg-gradient-to-r from-[#E55619] to-[#A1ADE5] bg-clip-text text-center text-2xl font-semibold leading-[28px] text-transparent",
        d && F(
          "cursor-pointer transition-transform duration-200",
          "hover:scale-[1.02] focus-visible:scale-[1.02]",
          "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
        )
      ),
      style: { minHeight: 28 },
      "aria-label": c,
      children: c.slice(0, s)
    },
    r
  ) });
};
function w9({
  viewportRef: t,
  contentRef: e,
  endRef: r,
  lastTurnRef: n,
  turnsCount: s,
  freezeTurnMinHeight: a = !1
}) {
  const [i, l] = q(0), [c, d] = q(!1), u = z(s), h = z(a);
  h.current = a;
  const w = ee(
    (g = "smooth") => {
      r.current?.scrollIntoView({ behavior: g });
    },
    [r]
  );
  fe(() => {
    const g = t.current, y = e.current;
    if (!g || !y) return;
    const k = new ResizeObserver(() => {
      if (h.current) return;
      const M = parseFloat(getComputedStyle(y).paddingTop) + parseFloat(getComputedStyle(y).paddingBottom) + 1;
      l(g.clientHeight - M);
    });
    return k.observe(g), k.observe(y), () => k.disconnect();
  }, [t, e]);
  const p = ee(() => {
    const g = t.current;
    if (!g) return;
    const { scrollTop: y, scrollHeight: k, clientHeight: M } = g, P = k - y - M;
    d(P > M);
  }, [t]);
  return fe(() => {
    const g = t.current;
    if (g)
      return g.addEventListener("scroll", p, { passive: !0 }), () => g.removeEventListener("scroll", p);
  }, [p, t]), fe(() => {
    s > u.current && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const g = t.current, y = n.current;
        if (!g || !y) return;
        const k = g.getBoundingClientRect(), M = y.getBoundingClientRect(), P = g.scrollTop + (M.top - k.top);
        g.scrollTo({ top: P, behavior: "smooth" });
      });
    }), s === 0 && d(!1), u.current = s;
  }, [s, n, t]), { showScrollBtn: c, turnMinHeight: i, scrollToBottom: w };
}
const x9 = {
  threadId: "",
  onThumbsUp: () => {
  },
  onThumbsDown: () => {
  }
}, of = (t) => /* @__PURE__ */ o(o9, { children: /* @__PURE__ */ o(k9, { ...t }) }), k9 = ({
  turns: t,
  isLoadingThread: e = !1,
  interrupt: r,
  initialMessage: n,
  onWelcomeClick: s,
  renderToolCall: a,
  onReplyQuote: i,
  onAssistantMessageRendered: l,
  autoScrollUserIntoView: c = !0,
  renderMarkdown: d,
  feedback: u,
  freezeLayout: h = !1,
  noShadows: w = !1,
  children: p,
  AssistantMessage: g,
  UserMessage: y,
  onRegenerate: k,
  onCopy: M
}) => {
  const { modal: P, handleSubmit: I, handleClose: T } = s9(
    u ?? x9
  ), v = pe(), C = g ?? r9, x = y ?? f9, S = de(() => {
    const E = n ?? v.ai.defaultInitialMessage;
    return (Array.isArray(E) ? E : [E]).filter((j) => typeof j == "string" && j.length > 0);
  }, [n, v.ai.defaultInitialMessage]), _ = !e && t.length === 0 && S.length > 0, b = z(null), L = z(null), N = z(null), D = z(null), Q = z(null), { showScrollBtn: J, turnMinHeight: ae, scrollToBottom: ne } = w9({
    viewportRef: b,
    contentRef: L,
    endRef: N,
    lastTurnRef: Q,
    turnsCount: t.length,
    freezeTurnMinHeight: h
  }), X = (E, B) => {
    const j = B === t.length - 1, Y = {
      renderToolCall: a,
      onReplyQuote: i,
      onRendered: l,
      autoScrollIntoView: c,
      renderMarkdown: d
    }, me = (Z, re) => {
      const le = {
        message: Z,
        inProgress: E.isInProgress,
        index: re,
        isCurrentMessage: !1,
        AssistantMessage: C,
        UserMessage: x,
        onRegenerate: k,
        onCopy: M,
        rawData: Z.rawData || {},
        ...Y
      };
      return /* @__PURE__ */ o(
        x,
        {
          ...le
        },
        `${B}-u-${re}`
      );
    }, Ce = (Z, re) => {
      const le = j && re === E.assistantMessages.length - 1, ke = E.userMessages.length + re, R = {
        message: Z,
        inProgress: E.isInProgress,
        index: ke,
        isCurrentMessage: le,
        AssistantMessage: C,
        UserMessage: x,
        onRegenerate: k,
        onCopy: M,
        rawData: Z.rawData || {},
        ...Y
      };
      return /* @__PURE__ */ o(
        C,
        {
          ...R,
          isGenerating: E.isInProgress && le,
          isLoading: E.isInProgress && le && !Z.content
        },
        `${B}-a-${re}`
      );
    };
    return /* @__PURE__ */ f(
      "div",
      {
        ref: j ? Q : void 0,
        className: F(
          "flex flex-col items-start justify-start gap-2 px-1",
          j && "pb-5"
        ),
        style: {
          minHeight: j && ae || void 0
        },
        children: [
          E.userMessages.map(
            (Z, re) => me(Z, re)
          ),
          E.thinking && E.thinking.titles.length > 0 && /* @__PURE__ */ o(
            c9,
            {
              titles: E.thinking.titles,
              title: v.ai.thoughtsGroupTitle,
              inProgress: E.thinking.inProgress,
              isWriting: E.thinking.isWriting
            }
          ),
          E.assistantMessages.map(
            (Z, re) => Ce(Z, re)
          ),
          E.endIndicator === "thinking" && /* @__PURE__ */ o(Sr, { title: v.ai.thinking, status: "executing" }),
          E.endIndicator === "activity" && /* @__PURE__ */ o(Sr, { status: "writing" }),
          E.feedback && /* @__PURE__ */ o(
            a9,
            {
              content: E.feedback.content,
              targetMessage: E.feedback.targetMessage,
              onCopy: M
            }
          ),
          j && /* @__PURE__ */ o(Q6, {})
        ]
      },
      `turn-${B}`
    );
  };
  return /* @__PURE__ */ f(ze, { children: [
    /* @__PURE__ */ f("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ o(
        "div",
        {
          ref: b,
          className: F(
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
              ref: L,
              className: F("flex h-full flex-col items-center p-4"),
              children: [
                /* @__PURE__ */ f(
                  "div",
                  {
                    className: F(
                      _ ? "flex flex-1" : "flex flex-col gap-6",
                      "w-full max-w-content"
                    ),
                    children: [
                      e && /* @__PURE__ */ o(y9, {}),
                      _ && /* @__PURE__ */ o(
                        C9,
                        {
                          messages: S,
                          onClick: s
                        }
                      ),
                      !e && t.map((E, B) => X(E, B)),
                      r
                    ]
                  }
                ),
                /* @__PURE__ */ o("div", { ref: D, className: "h-px shrink-0", "aria-hidden": !0 }),
                /* @__PURE__ */ o("footer", { className: "copilotKitMessagesFooter", ref: N, children: p }),
                /* @__PURE__ */ o(Oe, { children: J && /* @__PURE__ */ o(
                  ve.div,
                  {
                    className: "sticky bottom-2 z-10 flex justify-center",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.8 },
                    transition: { duration: 0.2 },
                    children: /* @__PURE__ */ o("div", { className: "rounded bg-f1-background", children: /* @__PURE__ */ o(
                      Se,
                      {
                        onClick: () => ne(),
                        label: v.ai.scrollToBottom,
                        variant: "neutral",
                        icon: uo,
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
      !w && !_ && /* @__PURE__ */ f(ze, { children: [
        /* @__PURE__ */ o(In, { position: "top" }, "shadow-top"),
        /* @__PURE__ */ o(In, { position: "bottom" }, "shadow-bottom")
      ] })
    ] }),
    P.isOpen && /* @__PURE__ */ o(
      n9,
      {
        onSubmit: I,
        onClose: T,
        reactionType: P.currentReaction,
        message: P.currentMessage
      }
    )
  ] });
}, y9 = () => /* @__PURE__ */ o("div", { className: "flex h-full w-full max-w-content flex-col gap-6", children: /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ o("div", { className: "flex justify-end", children: /* @__PURE__ */ o(Pe, { className: "h-12 w-2/5 rounded-full" }) }),
  /* @__PURE__ */ o(Pe, { className: "mt-6 h-5 w-full rounded-md" }),
  /* @__PURE__ */ o(Pe, { className: "h-5 w-2/5 rounded-md" }),
  /* @__PURE__ */ o(Pe, { className: "h-5 w-4/5 rounded-md" })
] }) }), sf = {
  ai: Yi.ai
}, G1 = Vt(null);
function af({
  children: t,
  translations: e
}) {
  return /* @__PURE__ */ o(G1.Provider, { value: e, children: t });
}
function cf() {
  const t = xt(G1);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
function b9() {
  const { canvasEntities: t } = Ge();
  return t;
}
function lf(t) {
  const e = b9();
  if (!(!t || !e))
    return e[t];
}
const L9 = ({
  canProceed: t,
  label: e,
  onConfirm: r,
  onSkip: n,
  showSkip: s
}) => {
  const a = pe();
  return /* @__PURE__ */ f("div", { className: "flex items-center justify-end gap-3 p-3", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center", children: s && n && /* @__PURE__ */ o(
      Ee,
      {
        variant: "outline",
        label: a.ai.clarifyingQuestion.skip,
        onClick: n
      }
    ) }),
    /* @__PURE__ */ o(
      Ee,
      {
        disabled: !t,
        variant: "default",
        label: e,
        onClick: r
      }
    )
  ] });
}, q1 = ({ isSelected: t }) => /* @__PURE__ */ o(
  "div",
  {
    className: F(
      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
      t ? "bg-f1-background-selected-bold" : "border-2 border-solid border-f1-border bg-f1-background"
    ),
    children: t && /* @__PURE__ */ o("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
  }
), M9 = ({
  mode: t,
  hasSelection: e,
  hasCustomText: r,
  customAnswerText: n,
  isCustomAnswerActive: s,
  canProceed: a,
  inputRef: i,
  onActivate: l,
  onChangeText: c,
  onToggleActive: d,
  onConfirm: u
}) => {
  const w = pe().ai.clarifyingQuestion.typeYourAnswer, p = t === "single" ? /* @__PURE__ */ o(q1, { isSelected: r && !e }) : /* @__PURE__ */ o(
    $o,
    {
      checked: s,
      onCheckedChange: () => d(!s),
      title: w,
      hideLabel: !0
    }
  );
  return /* @__PURE__ */ f(
    "div",
    {
      className: F(
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
            onChange: (g) => c(g.target.value),
            onFocus: l,
            onKeyDown: (g) => {
              g.key === "Enter" && a && (g.preventDefault(), u());
            },
            placeholder: w,
            "aria-label": w,
            className: "min-w-0 flex-1 bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          }
        )
      ]
    }
  );
}, Y1 = m(
  ({ option: t, isSelected: e, mode: r, isTabStop: n, onToggle: s, onKeyNavigate: a }, i) => r === "single" ? /* @__PURE__ */ f(
    "div",
    {
      ref: i,
      role: "radio",
      "aria-checked": e,
      tabIndex: n ? 0 : -1,
      className: F(
        "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary",
        Ne()
      ),
      onClick: () => s(t.id),
      onKeyDown: (l) => {
        if (l.key === " " || l.key === "Enter") {
          l.preventDefault(), s(t.id);
          return;
        }
        a?.(l);
      },
      children: [
        /* @__PURE__ */ o(q1, { isSelected: e }),
        /* @__PURE__ */ o("span", { className: "text-base font-medium text-f1-foreground", children: t.label })
      ]
    }
  ) : /* @__PURE__ */ f(
    "div",
    {
      ref: i,
      className: F(
        "flex cursor-pointer items-center rounded-md pl-2 transition-colors hover:bg-f1-background-secondary"
      ),
      children: [
        /* @__PURE__ */ o(
          $o,
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
Y1.displayName = "OptionRow";
const E9 = ({
  mode: t,
  question: e,
  options: r,
  selectedOptionIds: n,
  allowCustomAnswer: s,
  hasSelection: a,
  hasCustomText: i,
  customAnswerText: l,
  isCustomAnswerActive: c,
  canProceed: d,
  customInputRef: u,
  autoFocus: h,
  onToggleOption: w,
  onActivateCustom: p,
  onChangeCustomText: g,
  onToggleCustomActive: y,
  onConfirm: k
}) => {
  const M = (() => {
    if (t !== "single") return 0;
    const C = r.findIndex((x) => n.includes(x.id));
    return C >= 0 ? C : 0;
  })(), [P, I] = q(M), T = z([]);
  fe(() => {
    h && t === "single" && T.current[P]?.focus();
  }, []);
  const v = (C) => {
    if (t !== "single") return;
    const x = r.length - 1;
    if (x < 0) return;
    let S = P;
    switch (C.key) {
      case "ArrowDown":
      case "ArrowRight":
        S = P >= x ? 0 : P + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        S = P <= 0 ? x : P - 1;
        break;
      case "Home":
        S = 0;
        break;
      case "End":
        S = x;
        break;
      default:
        return;
    }
    C.preventDefault(), I(S), T.current[S]?.focus();
  };
  return /* @__PURE__ */ f(
    "div",
    {
      className: "flex flex-col gap-0 overflow-y-auto px-1.5 py-0.5",
      role: t === "single" ? "radiogroup" : "group",
      "aria-label": e,
      children: [
        r.map((C, x) => /* @__PURE__ */ o(
          Y1,
          {
            ref: (S) => {
              T.current[x] = S;
            },
            option: C,
            isSelected: n.includes(C.id),
            mode: t,
            isTabStop: t === "single" ? x === P : void 0,
            onToggle: w,
            onKeyNavigate: v
          },
          C.id
        )),
        s && /* @__PURE__ */ o(
          M9,
          {
            mode: t,
            hasSelection: a,
            hasCustomText: i,
            customAnswerText: l,
            isCustomAnswerActive: c,
            canProceed: d,
            inputRef: u,
            onActivate: p,
            onChangeText: g,
            onToggleActive: y,
            onConfirm: k
          }
        )
      ]
    }
  );
}, _9 = ({
  question: t,
  stepLabel: e,
  isFirstStep: r,
  isFinalStep: n,
  canProceed: s,
  onBack: a,
  onNext: i,
  onCancel: l
}) => {
  const c = pe();
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
          label: c.ai.clarifyingQuestion.back,
          hideLabel: !0,
          icon: ho
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
          label: c.ai.clarifyingQuestion.next,
          hideLabel: !0,
          icon: Kt
        }
      )
    ] }),
    /* @__PURE__ */ o(
      Ee,
      {
        variant: "ghost",
        size: "sm",
        onClick: l,
        label: c.actions.cancel,
        hideLabel: !0,
        icon: st
      }
    )
  ] });
}, X1 = "easeOut", K1 = 0.3, df = ({
  clarifyingQuestion: t
}) => {
  const r = De() ? 0 : K1;
  return /* @__PURE__ */ o(
    ve.div,
    {
      initial: { height: 0, opacity: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: { height: 0, opacity: 0 },
      transition: { duration: r, ease: X1 },
      className: "overflow-hidden",
      children: /* @__PURE__ */ o(S9, { clarifyingQuestion: t })
    }
  );
}, S9 = ({
  clarifyingQuestion: t
}) => {
  const e = pe(), r = De(), {
    currentStep: n,
    currentStepIndex: s,
    totalSteps: a,
    toggleOption: i,
    confirm: l,
    skip: c,
    cancel: d,
    back: u,
    setCustomAnswerText: h,
    setCustomAnswerActive: w,
    activateCustomAnswer: p
  } = t, {
    question: g,
    options: y,
    selectedOptionIds: k,
    selectionMode: M,
    optional: P,
    allowCustomAnswer: I,
    customAnswerText: T,
    isCustomAnswerActive: v
  } = n, C = z(null), x = M ?? "single", S = a > 1, _ = s === 0, b = s === a - 1, L = S ? e.t("ai.clarifyingQuestion.stepOf", {
    current: String(s + 1),
    total: String(a)
  }) : void 0, N = k.length > 0, D = (T ?? "").trim().length > 0, Q = N || v && D || P === !0, J = (j) => {
    const Y = x === "single" && k.includes(j);
    i(j), x === "single" && !b && !Y && Promise.resolve().then(l);
  }, ae = b ? e.ai.clarifyingQuestion.submit : e.ai.clarifyingQuestion.next, ne = P === !0 && !N && !(v && D), X = () => {
    p(), requestAnimationFrame(() => {
      C.current?.focus();
    });
  }, E = (j) => {
    j.key === "Escape" && (j.preventDefault(), d());
  }, B = r ? 0 : K1 / 2;
  return /* @__PURE__ */ f("div", { className: "flex flex-col", onKeyDown: E, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pt-3", children: /* @__PURE__ */ o(Oe, { mode: "wait", initial: !1, children: /* @__PURE__ */ f(
      ve.div,
      {
        className: "flex flex-col gap-3",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: B, ease: X1 },
        children: [
          /* @__PURE__ */ o(
            _9,
            {
              question: g,
              stepLabel: L,
              isFirstStep: _,
              isFinalStep: b,
              canProceed: Q,
              onBack: u,
              onNext: l,
              onCancel: d
            }
          ),
          /* @__PURE__ */ o(
            E9,
            {
              mode: x,
              question: g,
              options: y,
              selectedOptionIds: k,
              allowCustomAnswer: I,
              hasSelection: N,
              hasCustomText: D,
              customAnswerText: T,
              isCustomAnswerActive: v,
              canProceed: Q,
              customInputRef: C,
              onToggleOption: J,
              onActivateCustom: X,
              onChangeCustomText: h,
              onToggleCustomActive: w,
              onConfirm: l
            }
          )
        ]
      },
      s
    ) }) }),
    /* @__PURE__ */ o(
      L9,
      {
        canProceed: Q,
        label: ae,
        onConfirm: l,
        onSkip: c,
        showSkip: ne
      }
    )
  ] });
};
function jn(t, e, r, n) {
  const s = Math.max(1, Math.min(t, e)), a = Math.min(r, 20), l = Math.min(a + n, s), c = Math.min(l, Math.floor(t / 2)), d = Math.min(l, Math.floor(e / 2)), u = (Y) => Y / t * 2 - 1, h = (Y) => Y / e * 2 - 1, w = 0, p = t, g = 0, y = e, k = c, M = t - c, P = d, I = e - d, T = u(w), v = u(p), C = h(g), x = h(y), S = u(k), _ = u(M), b = h(P), L = h(I), N = 0, D = 0, Q = 1, J = 1, ae = c / t, ne = 1 - c / t, X = d / e, E = 1 - d / e, B = new Float32Array([
    // Top strip
    T,
    C,
    v,
    C,
    T,
    b,
    T,
    b,
    v,
    C,
    v,
    b,
    // Bottom strip
    T,
    L,
    v,
    L,
    T,
    x,
    T,
    x,
    v,
    L,
    v,
    x,
    // Left strip
    T,
    b,
    S,
    b,
    T,
    L,
    T,
    L,
    S,
    b,
    S,
    L,
    // Right strip
    _,
    b,
    v,
    b,
    _,
    L,
    _,
    L,
    v,
    b,
    v,
    L
  ]), j = new Float32Array([
    // Top strip
    N,
    D,
    Q,
    D,
    N,
    X,
    N,
    X,
    Q,
    D,
    Q,
    X,
    // Bottom strip
    N,
    E,
    Q,
    E,
    N,
    J,
    N,
    J,
    Q,
    E,
    Q,
    J,
    // Left strip
    N,
    X,
    ae,
    X,
    N,
    E,
    N,
    E,
    ae,
    X,
    ae,
    E,
    // Right strip
    ne,
    X,
    Q,
    X,
    ne,
    E,
    ne,
    E,
    Q,
    X,
    Q,
    E
  ]);
  return { positions: B, uvs: j };
}
function On(t, e, r) {
  const n = t.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  if (t.shaderSource(n, r), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)) {
    const s = t.getShaderInfoLog(n) || "Unknown shader error";
    throw t.deleteShader(n), new Error(s);
  }
  return n;
}
function R9(t, e, r) {
  const n = On(t, t.VERTEX_SHADER, e), s = On(t, t.FRAGMENT_SHADER, r), a = t.createProgram();
  if (!a) throw new Error("Failed to create program");
  if (t.attachShader(a, n), t.attachShader(a, s), t.linkProgram(a), !t.getProgramParameter(a, t.LINK_STATUS)) {
    const i = t.getProgramInfoLog(a) || "Unknown link error";
    throw t.deleteProgram(a), t.deleteShader(n), t.deleteShader(s), new Error(i);
  }
  return t.deleteShader(n), t.deleteShader(s), a;
}
const N9 = `#version 300 es
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
`, T9 = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, A9 = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function V9(t) {
  const e = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${t}`);
  const [, r, n, s] = e;
  return [parseInt(r) / 255, parseInt(n) / 255, parseInt(s) / 255];
}
class uf {
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
    const { gl: s, program: a, vao: i, positionBuffer: l, uvBuffer: c, uResolution: d } = this.glr, u = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, h = Math.max(1, Math.floor(e * u)), w = Math.max(1, Math.floor(r * u));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${r}px`, (this.canvas.width !== h || this.canvas.height !== w) && (this.canvas.width = h, this.canvas.height = w), s.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(s, "resize: after viewport setup");
    const { positions: p, uvs: g } = jn(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * u,
      this.options.glowWidth * u
    );
    s.bindVertexArray(i), s.bindBuffer(s.ARRAY_BUFFER, l), s.bufferData(s.ARRAY_BUFFER, p, s.STATIC_DRAW);
    const y = s.getAttribLocation(a, "aPosition");
    s.enableVertexAttribArray(y), s.vertexAttribPointer(y, 2, s.FLOAT, !1, 0, 0), this.checkGLError(s, "resize: after position buffer update"), s.bindBuffer(s.ARRAY_BUFFER, c), s.bufferData(s.ARRAY_BUFFER, g, s.STATIC_DRAW);
    const k = s.getAttribLocation(a, "aUV");
    s.enableVertexAttribArray(k), s.vertexAttribPointer(k, 2, s.FLOAT, !1, 0, 0), this.checkGLError(s, "resize: after UV buffer update"), s.useProgram(a), s.uniform2f(d, this.canvas.width, this.canvas.height), s.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * u), s.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * u), s.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * u), this.checkGLError(s, "resize: after uniform updates");
    const M = performance.now();
    this.lastTime = M;
    const P = (M - this.startTime) * 1e-3;
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
    const r = R9(e, T9, N9);
    this.checkGLError(e, "setupGL: after createProgram");
    const n = e.createVertexArray();
    e.bindVertexArray(n), this.checkGLError(e, "setupGL: after VAO creation");
    const s = this.canvas.width || 2, a = this.canvas.height || 2, { positions: i, uvs: l } = jn(
      s,
      a,
      this.options.borderWidth,
      this.options.glowWidth
    ), c = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, c), e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW);
    const d = e.getAttribLocation(r, "aPosition");
    e.enableVertexAttribArray(d), e.vertexAttribPointer(d, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const u = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, u), e.bufferData(e.ARRAY_BUFFER, l, e.STATIC_DRAW);
    const h = e.getAttribLocation(r, "aUV");
    e.enableVertexAttribArray(h), e.vertexAttribPointer(h, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const w = e.getUniformLocation(r, "uResolution"), p = e.getUniformLocation(r, "uTime"), g = e.getUniformLocation(r, "uBorderWidth"), y = e.getUniformLocation(r, "uGlowWidth"), k = e.getUniformLocation(r, "uBorderRadius"), M = e.getUniformLocation(r, "uColors"), P = e.getUniformLocation(r, "uGlowExponent"), I = e.getUniformLocation(r, "uGlowFactor");
    e.useProgram(r), e.uniform1f(g, this.options.borderWidth), e.uniform1f(y, this.options.glowWidth), e.uniform1f(k, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(P, 2), e.uniform1f(I, 1.8)) : (e.uniform1f(P, 1), e.uniform1f(I, 1));
    const T = (this.options.colors || A9).map(V9);
    for (let v = 0; v < T.length; v++)
      e.uniform3f(
        e.getUniformLocation(r, `uColors[${v}]`),
        ...T[v]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: r,
      vao: n,
      positionBuffer: c,
      uvBuffer: u,
      uResolution: w,
      uTime: p,
      uBorderWidth: g,
      uGlowWidth: y,
      uBorderRadius: k,
      uColors: M
    };
  }
  render(e) {
    if (!this.glr) return;
    const { gl: r, program: n, vao: s, uTime: a } = this.glr;
    r.useProgram(n), r.bindVertexArray(s), r.uniform1f(a, e), r.disable(r.DEPTH_TEST), r.disable(r.CULL_FACE), r.disable(r.BLEND), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.drawArrays(r.TRIANGLES, 0, 24), this.checkGLError(r, "render: after draw call"), r.bindVertexArray(null);
  }
}
const Zn = ["lowp", "mediump", "highp"], F9 = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, P9 = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, Dn = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Bn = "iTime", Un = "iTimeDelta", zn = "iDate", Wn = "iFrame", Gn = "iMouse", qn = "iResolution", $9 = "iChannel", Yn = "iChannelResolution", Xn = "iDeviceOrientation";
function H9(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function I9(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function j9(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const O9 = (t, e, r, n) => {
  if (j9(r, n))
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
}, Z9 = (t) => {
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
        Ue(
          `The uniform type "${t}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, mr = 9729, Kn = 9728, D9 = 9987, Qn = 33071, Jn = 10497;
class B9 {
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
    const { gl: s } = this, a = 0, i = s.RGBA, l = s.RGBA, c = s.UNSIGNED_BYTE;
    s.bindTexture(s.TEXTURE_2D, e), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, n), s.texImage2D(
      s.TEXTURE_2D,
      a,
      i,
      l,
      c,
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
    Ue(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: r } = this, {
      url: n,
      wrapS: s,
      wrapT: a,
      minFilter: i,
      magFilter: l,
      flipY: c = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          Ue(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const d = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), u = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (d === null && u === null)
      return Promise.reject(
        new Error(
          Ue(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: s, wrapT: a, minFilter: i, magFilter: l, flipY: c });
    const h = 0, w = r.RGBA, p = 1, g = 1, y = 0, k = r.RGBA, M = r.UNSIGNED_BYTE, P = new Uint8Array([255, 255, 255, 0]), I = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, I), r.texImage2D(
      r.TEXTURE_2D,
      h,
      w,
      p,
      g,
      y,
      k,
      M,
      P
    ), u) {
      const x = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = I, this.source = x, this.isVideo = !0, x.play().then(() => this);
    }
    async function T() {
      return new Promise((x, S) => {
        const _ = new Image();
        _.crossOrigin = "anonymous", _.onload = () => {
          x(_);
        }, _.onerror = () => {
          S(new Error(Ue(`failed loading url: ${n}`)));
        }, _.src = n ?? "";
      });
    }
    let v = await T(), C = (v.width & v.width - 1) === 0 && (v.height & v.height - 1) === 0;
    return (e.wrapS !== Qn || e.wrapT !== Qn || e.minFilter !== Kn && e.minFilter !== mr) && !C && (v = this.makePowerOf2(v), C = !0), r.bindTexture(r.TEXTURE_2D, I), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, c), r.texImage2D(
      r.TEXTURE_2D,
      h,
      w,
      k,
      M,
      v
    ), C && e.minFilter !== Kn && e.minFilter !== mr && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_S,
      this.wrapS || Jn
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_T,
      this.wrapT || Jn
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MIN_FILTER,
      this.minFilter || D9
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MAG_FILTER,
      this.magFilter || mr
    ), this._webglTexture = I, this.source = v, this.isVideo = !1, this.isLoaded = !0, this.width = v.width || 0, this.height = v.height || 0, this;
  };
}
const Ue = (t) => `react-shaders: ${t}`, eo = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, to = (t, e, r) => t * (1 - r) + e * r, U9 = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function z9({
  fs: t,
  vs: e = Dn,
  textures: r = [],
  uniforms: n,
  clearColor: s = [0, 0, 0, 1],
  precision: a = "highp",
  style: i,
  contextAttributes: l = {},
  lerp: c = 1,
  devicePixelRatio: d = 1,
  onDoneLoadingTextures: u,
  onError: h = console.error,
  onWarning: w = console.warn
}) {
  const p = z(null), g = z(null), y = z(null), k = z(null), M = z(void 0), P = z(void 0), I = z(!1), T = z(void 0), v = z(0), C = z([0, 0]), x = z([]), S = z(0), _ = z(void 0), b = z({
    [Bn]: { type: "float", isNeeded: !1, value: 0 },
    [Un]: { type: "float", isNeeded: !1, value: 0 },
    [zn]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Gn]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [qn]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Wn]: { type: "int", isNeeded: !1, value: 0 },
    [Xn]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), L = z(n), N = (R, H) => {
    const $ = "width" in R ? R.width ?? 0 : 0, K = "height" in R ? R.height ?? 0 : 0, U = b.current.iChannelResolution;
    if (!U) return;
    const oe = Array.isArray(U.value) ? U.value : U.value = [];
    oe[H * 3] = $ * d, oe[H * 3 + 1] = K * d, oe[H * 3 + 2] = 0;
  }, D = () => {
    p.current && (g.current = p.current.getContext("webgl", l) || p.current.getContext(
      "experimental-webgl",
      l
    ), g.current?.getExtension("OES_standard_derivatives"), g.current?.getExtension("EXT_shader_texture_lod"));
  }, Q = () => {
    const R = g.current;
    y.current = R?.createBuffer() ?? null, R?.bindBuffer(R.ARRAY_BUFFER, y.current);
    const H = [
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
    R?.bufferData(R.ARRAY_BUFFER, new Float32Array(H), R.STATIC_DRAW);
  }, J = ({
    alpha: R,
    beta: H,
    gamma: $
  }) => {
    b.current.iDeviceOrientation.value = [
      R ?? 0,
      H ?? 0,
      $ ?? 0,
      window.orientation ?? 0
    ];
  }, ae = (R) => {
    const [H = 0, $ = 0] = eo(R), K = H - (T.current?.left ?? 0) - window.pageXOffset, U = (T.current?.height ?? 0) - $ - (T.current?.top ?? 0) - window.pageYOffset;
    I.current = !0;
    const oe = Array.isArray(b.current.iMouse?.value) ? b.current.iMouse.value : void 0;
    oe && (oe[2] = K, oe[3] = U), C.current[0] = K, C.current[1] = U;
  }, ne = (R) => {
    T.current = p.current?.getBoundingClientRect();
    const [H = 0, $ = 0] = eo(R), K = H - (T.current?.left ?? 0), U = (T.current?.height ?? 0) - $ - (T.current?.top ?? 0);
    if (c !== 1)
      C.current[0] = K, C.current[1] = U;
    else {
      const oe = Array.isArray(b.current.iMouse?.value) ? b.current.iMouse.value : void 0;
      oe && (oe[0] = K, oe[1] = U);
    }
  }, X = () => {
    const R = Array.isArray(b.current.iMouse?.value) ? b.current.iMouse.value : void 0;
    R && (R[2] = 0, R[3] = 0);
  }, E = () => {
    const R = g.current;
    if (!R) return;
    T.current = p.current?.getBoundingClientRect();
    const H = d, $ = Math.floor(
      (T.current?.width ?? 1) * H
    ), K = Math.floor(
      (T.current?.height ?? 1) * H
    );
    if (R.canvas.width = $, R.canvas.height = K, b.current.iResolution?.isNeeded && k.current) {
      const U = R.getUniformLocation(
        k.current,
        qn
      );
      R.uniform2fv(U, [R.canvas.width, R.canvas.height]);
    }
  }, B = (R, H) => {
    const $ = g.current;
    if (!$) return null;
    const K = $.createShader(R);
    if (!K) return null;
    if ($.shaderSource(K, H), $.compileShader(K), !$.getShaderParameter(K, $.COMPILE_STATUS)) {
      w?.(Ue(`Error compiling the shader:
${H}`));
      const U = $.getShaderInfoLog(K);
      $.deleteShader(K), h?.(Ue(`Shader compiler log: ${U}`));
    }
    return K;
  }, j = (R, H) => {
    const $ = g.current;
    if (!$) return;
    const K = B($.FRAGMENT_SHADER, R), U = B($.VERTEX_SHADER, H);
    if (k.current = $.createProgram(), !(!k.current || !U || !K)) {
      if ($.attachShader(k.current, U), $.attachShader(k.current, K), $.linkProgram(k.current), !$.getProgramParameter(k.current, $.LINK_STATUS)) {
        h?.(
          Ue(
            `Unable to initialize the shader program: ${$.getProgramInfoLog(
              k.current
            )}`
          )
        );
        return;
      }
      $.useProgram(k.current), M.current = $.getAttribLocation(
        k.current,
        "aVertexPosition"
      ), $.enableVertexAttribArray(M.current);
    }
  }, Y = () => {
    if (n)
      for (const R of Object.keys(n)) {
        const H = n[R];
        if (!H) continue;
        const { value: $, type: K } = H, U = Z9(K);
        if (!U) continue;
        const oe = {};
        if (H9(K, $)) {
          const ie = K.length, be = Number.parseInt(K.charAt(ie - 3)), Re = Math.floor($.length / (be * be));
          $.length > be * be && (oe.arraySize = `[${Re}]`);
        } else I9(K, $) && (oe.arraySize = `[${Math.floor($.length / Number.parseInt(K.charAt(0)))}]`);
        b.current[R] = {
          type: U,
          isNeeded: !1,
          value: $,
          ...oe
        };
      }
  }, me = () => {
    const R = g.current;
    if (R)
      if (r && r.length > 0) {
        b.current[`${Yn}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const H = r.map(
          ($, K) => (b.current[`${$9}${K}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, N($, K), x.current[K] = new B9(R), x.current[K]?.load($).then((U) => {
            N(U, K);
          }))
        );
        Promise.all(H).then(() => {
          u && u();
        }).catch(($) => {
          h?.($), u && u();
        });
      } else u && u();
  }, Ce = (R) => {
    const H = Zn.includes(a ?? "highp"), $ = `precision ${H ? a : Zn[1]} float;
`;
    H || w?.(
      Ue(
        `wrong precision type ${a}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let K = $.concat(`#define DPR ${d.toFixed(1)}
`).concat(R.replace(/texture\(/g, "texture2D("));
    for (const oe of Object.keys(b.current))
      if (R.includes(oe)) {
        const ie = b.current[oe];
        if (!ie) continue;
        K = U9(
          K,
          `uniform ${ie.type} ${oe}${ie.arraySize || ""}; 
`,
          K.lastIndexOf($) + $.length
        ), ie.isNeeded = !0;
      }
    return R.includes("mainImage") && (K = K.concat(F9)), K;
  }, Z = (R) => {
    const H = g.current;
    if (!H || !k.current) return;
    const $ = S.current ? (R - S.current) / 1e3 : 0;
    S.current = R;
    const K = L.current;
    if (K)
      for (const U of Object.keys(K)) {
        const oe = K[U];
        if (oe && b.current[U]?.isNeeded) {
          if (!k.current) return;
          const ie = H.getUniformLocation(
            k.current,
            U
          );
          if (!ie) return;
          O9(
            H,
            ie,
            oe.type,
            oe.value
          );
        }
      }
    if (b.current.iMouse?.isNeeded) {
      const U = H.getUniformLocation(
        k.current,
        Gn
      );
      H.uniform4fv(U, b.current.iMouse.value);
    }
    if (b.current.iChannelResolution?.isNeeded) {
      const U = H.getUniformLocation(
        k.current,
        Yn
      );
      H.uniform3fv(
        U,
        b.current.iChannelResolution.value
      );
    }
    if (b.current.iDeviceOrientation?.isNeeded) {
      const U = H.getUniformLocation(
        k.current,
        Xn
      );
      H.uniform4fv(
        U,
        b.current.iDeviceOrientation.value
      );
    }
    if (b.current.iTime?.isNeeded) {
      const U = H.getUniformLocation(
        k.current,
        Bn
      );
      H.uniform1f(U, v.current += $);
    }
    if (b.current.iTimeDelta?.isNeeded) {
      const U = H.getUniformLocation(
        k.current,
        Un
      );
      H.uniform1f(U, $);
    }
    if (b.current.iDate?.isNeeded) {
      const U = /* @__PURE__ */ new Date(), oe = U.getMonth() + 1, ie = U.getDate(), be = U.getFullYear(), Re = U.getHours() * 60 * 60 + U.getMinutes() * 60 + U.getSeconds() + U.getMilliseconds() * 1e-3, Ae = H.getUniformLocation(
        k.current,
        zn
      );
      H.uniform4fv(Ae, [be, oe, ie, Re]);
    }
    if (b.current.iFrame?.isNeeded) {
      const U = H.getUniformLocation(
        k.current,
        Wn
      ), oe = b.current.iFrame.value;
      H.uniform1i(U, oe), b.current.iFrame.value = oe + 1;
    }
    if (x.current.length > 0)
      for (let U = 0; U < x.current.length; U++) {
        const oe = x.current[U];
        if (!oe) return;
        const { isVideo: ie, _webglTexture: be, source: Re, flipY: Ae, isLoaded: qe } = oe;
        if (!qe || !be || !Re) return;
        if (b.current[`iChannel${U}`]?.isNeeded) {
          if (!k.current) return;
          const Ye = H.getUniformLocation(
            k.current,
            `iChannel${U}`
          );
          H.activeTexture(H.TEXTURE0 + U), H.bindTexture(H.TEXTURE_2D, be), H.uniform1i(Ye, U), ie && oe.updateTexture(
            be,
            Re,
            Ae
          );
        }
      }
  }, re = (R) => {
    const H = g.current;
    if (!H) return;
    H.viewport(0, 0, H.drawingBufferWidth, H.drawingBufferHeight), H.clear(H.COLOR_BUFFER_BIT | H.DEPTH_BUFFER_BIT), H.bindBuffer(H.ARRAY_BUFFER, y.current), H.vertexAttribPointer(
      M.current ?? 0,
      3,
      H.FLOAT,
      !1,
      0,
      0
    ), Z(R), H.drawArrays(H.TRIANGLE_STRIP, 0, 4);
    const $ = b.current.iMouse?.value;
    if (b.current.iMouse?.isNeeded && c !== 1 && Array.isArray($)) {
      const K = $[0] ?? 0, U = $[1] ?? 0;
      $[0] = to(K, C.current[0] ?? 0, c), $[1] = to(U, C.current[1] ?? 0, c);
    }
    P.current = requestAnimationFrame(re);
  }, le = () => {
    const R = { passive: !0 };
    b.current.iMouse?.isNeeded && p.current && (p.current.addEventListener("mousemove", ne, R), p.current.addEventListener("mouseout", X, R), p.current.addEventListener("mouseup", X, R), p.current.addEventListener("mousedown", ae, R), p.current.addEventListener("touchmove", ne, R), p.current.addEventListener("touchend", X, R), p.current.addEventListener("touchstart", ae, R)), b.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      J,
      R
    ), p.current && (_.current = new ResizeObserver(E), _.current.observe(p.current), window.addEventListener("resize", E, R));
  }, ke = () => {
    const R = { passive: !0 };
    b.current.iMouse?.isNeeded && p.current && (p.current.removeEventListener("mousemove", ne, R), p.current.removeEventListener("mouseout", X, R), p.current.removeEventListener("mouseup", X, R), p.current.removeEventListener("mousedown", ae, R), p.current.removeEventListener("touchmove", ne, R), p.current.removeEventListener("touchend", X, R), p.current.removeEventListener("touchstart", ae, R)), b.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      J,
      R
    ), _.current && (_.current.disconnect(), window.removeEventListener("resize", E, R));
  };
  return fe(() => {
    L.current = n;
  }, [n]), fe(() => {
    const R = x.current;
    function H() {
      D();
      const $ = g.current;
      $ && p.current && ($.clearColor(...s), $.clearDepth(1), $.enable($.DEPTH_TEST), $.depthFunc($.LEQUAL), $.viewport(0, 0, p.current.width, p.current.height), p.current.height = p.current.clientHeight, p.current.width = p.current.clientWidth, Y(), me(), j(Ce(t || P9), e || Dn), Q(), requestAnimationFrame(re), le(), E());
    }
    return requestAnimationFrame(H), () => {
      const $ = g.current;
      if ($) {
        if ($.getExtension("WEBGL_lose_context")?.loseContext(), $.useProgram(null), $.deleteProgram(k.current ?? null), R.length > 0)
          for (const K of R)
            $.deleteTexture(K._webglTexture);
        k.current = null;
      }
      ke(), cancelAnimationFrame(P.current ?? 0);
    };
  }, []), /* @__PURE__ */ o(
    "canvas",
    {
      ref: p,
      style: { height: "100%", width: "100%", ...i }
    }
  );
}
const W9 = `
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
}`, G9 = 10, q9 = 2, Y9 = 0.5, X9 = 0.2, K9 = 1.5, Ve = {
  duration: 0.5,
  ease: "easeOut"
}, ro = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function jt(t) {
  const [e, r] = q(t), n = Vi(t), s = z(null);
  Ki(n, "change", (i) => r(i));
  const a = ee(
    (i, l) => {
      s.current = kc(n, i, l);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: s, animate: a };
}
function Q9(t, e) {
  const [r, n] = q(G9), {
    value: s,
    animate: a,
    motionValue: i
  } = jt(X9), { value: l, animate: c } = jt(q9), { value: d, animate: u } = jt(Y9), { value: h, animate: w } = jt(K9), p = Xi(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return fe(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), a(0.2, Ve), c(1.2, Ve), u(0.4, Ve), w(1, Ve);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), a(0.3, { type: "spring", duration: 1, bounce: 0.35 }), c(1, Ve), u(0.7, Ve), w([1.5, 2], ro);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), a(0.3, Ve), c(0.5, Ve), u(1, Ve), w([0.5, 2.5], ro);
        return;
      case "speaking":
        n(70), a(0.3, Ve), c(0.75, Ve), u(1.25, Ve), w(1.5, Ve);
        return;
    }
  }, [
    t,
    a,
    c,
    u,
    w
  ]), fe(() => {
    t === "speaking" && p > 0 && !i.isAnimating() && a(0.2 + 0.2 * p, { duration: 0 });
  }, [
    t,
    p,
    i,
    a,
    c,
    u,
    w
  ]), {
    speed: r,
    scale: s,
    amplitude: l,
    frequency: d,
    brightness: h
  };
}
const J9 = at({
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
function e3(t) {
  const e = t.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, r, n, s] = e;
    return [r, n, s].map((i = "00") => parseInt(i, 16) / 255);
  }
}
function Q1({
  shape: t = 1,
  speed: e = 1,
  amplitude: r = 0.5,
  frequency: n = 0.5,
  scale: s = 0.2,
  blur: a = 1,
  color: i = "#FF355E",
  colorShift: l = 1,
  brightness: c = 1,
  themeMode: d = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: u,
  className: h,
  ...w
}) {
  const p = de(() => e3(i), [i]);
  return /* @__PURE__ */ o("div", { ref: u, className: h, ...w, children: /* @__PURE__ */ o(
    z9,
    {
      fs: W9,
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
        uMix: { type: "1f", value: c },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: l },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: d === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: p ?? [0, 0.7, 1] }
      },
      onError: (g) => {
        console.error("Shader error:", g);
      },
      onWarning: (g) => {
        console.warn("Shader warning:", g);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
Q1.displayName = "AuraShader";
function ff({
  size: t = "lg",
  state: e,
  color: r,
  colorShift: n = 0.05,
  audioTrack: s,
  themeMode: a,
  className: i,
  ref: l,
  ...c
}) {
  const { speed: d, scale: u, amplitude: h, frequency: w, brightness: p } = Q9(e, s);
  return /* @__PURE__ */ o(
    Q1,
    {
      ref: l,
      blur: 0.2,
      color: r,
      colorShift: n,
      speed: d,
      scale: u,
      themeMode: a,
      amplitude: h,
      frequency: w,
      brightness: p,
      className: F(
        J9({ size: t }),
        "overflow-hidden rounded-full",
        i
      ),
      ...c
    }
  );
}
const hf = ({
  text: t,
  confirmationText: e,
  onConfirm: r,
  cancelText: n,
  onCancel: s
}) => /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: [
  t && /* @__PURE__ */ o("p", { children: t }),
  /* @__PURE__ */ f("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ o(
      Ee,
      {
        type: "button",
        variant: "default",
        size: "md",
        icon: fo,
        onClick: r,
        label: e
      }
    ),
    /* @__PURE__ */ o(
      Ee,
      {
        type: "button",
        variant: "outline",
        size: "md",
        onClick: s,
        label: n
      }
    )
  ] })
] }), t3 = at({
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
}), J1 = at({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), r3 = at({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), Ot = at({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), n3 = ({
  description: t,
  isRevealed: e,
  onAskOne: r
}) => {
  const n = pe(), s = De();
  return /* @__PURE__ */ f(ze, { children: [
    t && /* @__PURE__ */ o("span", { className: F(r3(), "truncate"), children: t }),
    /* @__PURE__ */ o(Oe, { children: r && e && /* @__PURE__ */ o(
      ve.div,
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
          Ko,
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
}, o3 = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), s3 = ({ balance: t }) => /* @__PURE__ */ o(
  Hi,
  {
    amount: t.amount,
    percentage: t.percentage ?? void 0,
    invertStatus: t.invertStatus,
    hint: t.hint
  }
), a3 = (t) => {
  const {
    heading: e,
    label: r,
    content: n,
    shouldFadeContent: s = !1,
    fadeTransition: a
  } = t;
  return /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ o("span", { className: F(J1()), children: e }),
    /* @__PURE__ */ f(
      ve.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: s ? 0 : 1 },
        transition: a,
        children: [
          n === "person" && /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ o(
              No,
              {
                firstName: t.avatar.firstName,
                lastName: t.avatar.lastName,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ o("span", { className: F(Ot()), children: r })
          ] }),
          n === "people" && /* @__PURE__ */ o(
            Fi,
            {
              type: "person",
              avatars: t.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ o(
              Pi,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ o("span", { className: F(Ot()), children: r })
          ] }),
          n === "company" && /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ o(
              Hr,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ o("span", { className: F(Ot()), children: r })
          ] }),
          n === "alert" && /* @__PURE__ */ o($i, { text: t.alertLabel, level: t.level }),
          n === "balance" && /* @__PURE__ */ o(s3, { balance: t.balance })
        ]
      }
    ),
    r && !o3.has(n) && /* @__PURE__ */ o(
      ve.span,
      {
        className: F(Ot()),
        animate: { opacity: s ? 0 : 1 },
        transition: a,
        children: r
      }
    )
  ] });
}, es = {
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
function i3(t, e) {
  const r = t[0]?.value ?? 0, n = t[t.length - 1]?.value ?? 0, s = Math.sign(n - r), a = e ? s * -1 : s;
  return a > 0 ? "positive" : a < 0 ? "negative" : "neutral";
}
const c3 = ({
  cx: t,
  cy: e,
  index: r,
  dataLength: n,
  color: s
}) => r !== n - 1 || t == null || e == null ? null : /* @__PURE__ */ o("circle", { cx: t, cy: e, r: 2, fill: s, stroke: "none" }), l3 = ({
  label: t,
  direction: e
}) => {
  const r = es[e];
  return /* @__PURE__ */ o(
    "span",
    {
      className: F(
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
}, d3 = ({
  data: t,
  label: e,
  invertStatus: r
}) => {
  const s = `sparkline-gradient-${ao().replace(/:/g, "")}`, a = i3(t, r), i = es[a];
  return /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ f(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${a} trend`,
      children: [
        /* @__PURE__ */ o(Ii, { width: "100%", height: "100%", children: /* @__PURE__ */ f(
          ji,
          {
            data: t,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ o("defs", { children: /* @__PURE__ */ f("linearGradient", { id: s, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ o("stop", { offset: "5%", stopColor: i.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ o("stop", { offset: "95%", stopColor: i.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ o(Oi, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ o(
                Zi,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: i.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${s})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (l) => /* @__PURE__ */ is(
                    c3,
                    {
                      ...l,
                      key: l.index,
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
        /* @__PURE__ */ o(l3, { label: e, direction: a })
      ]
    }
  ) });
}, ts = m(
  (t, e) => {
    const {
      description: r,
      heading: n,
      label: s,
      selected: a = !1,
      onClick: i,
      onAskOne: l,
      className: c,
      ...d
    } = t, [u, h] = q(!1), [w, p] = q(!1), g = u || w, y = De(), k = g && !!l, M = {
      duration: y ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, P = () => {
      i?.();
    }, I = (T) => {
      T.currentTarget === T.target && (T.key === "Enter" || T.key === " ") && (T.preventDefault(), i?.());
    };
    return /* @__PURE__ */ f("div", { className: "relative", children: [
      a && /* @__PURE__ */ f(ze, { children: [
        /* @__PURE__ */ o(
          "div",
          {
            "data-testid": "selected-border",
            className: F(
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
            className: F(
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
          className: F(
            t3({ selected: a }),
            a && "relative border-transparent",
            i && "cursor-pointer select-none",
            i && Ne(),
            c
          ),
          onClick: i ? P : void 0,
          onKeyDown: i ? I : void 0,
          onMouseEnter: () => h(!0),
          onMouseLeave: () => h(!1),
          onFocus: () => p(!0),
          onBlur: () => p(!1),
          children: [
            /* @__PURE__ */ o(
              n3,
              {
                description: r,
                isRevealed: g,
                onAskOne: l
              }
            ),
            d.content === "sparkline" ? /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ o("span", { className: F(J1()), children: n }),
              /* @__PURE__ */ o(
                ve.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: k ? 0 : 1 },
                  transition: M,
                  children: /* @__PURE__ */ o(
                    d3,
                    {
                      data: d.data,
                      label: s ?? "",
                      invertStatus: d.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ o(
              a3,
              {
                heading: n,
                label: s,
                shouldFadeContent: k,
                fadeTransition: M,
                ...d
              }
            )
          ]
        }
      )
    ] });
  }
);
ts.displayName = "F0AiInsightCardInternal";
const u3 = ["className"], rs = m((t, e) => {
  const r = u3.reduce((n, s) => {
    const { [s]: a, ...i } = n;
    return i;
  }, t);
  return /* @__PURE__ */ o(ts, { ref: e, ...r });
});
rs.displayName = "F0AiInsightCard";
const f3 = () => /* @__PURE__ */ f(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ o(Pe, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ f("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ o(Pe, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ o(Pe, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ o(Pe, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ o(Pe, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), pf = So(
  Di(rs, f3)
), mf = [
  "text",
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance",
  "sparkline"
], ns = 180, h3 = (t) => Number.isFinite(t) ? Math.max(0, Math.floor(t)) : ns, p3 = (t, e) => t.length <= e ? t : `${t.slice(0, e).trimEnd()}...`, m3 = (t) => t.showActions !== !1, g3 = (t) => Object.fromEntries(
  Object.entries(t).filter(([e]) => e.startsWith("data-"))
);
function v3(t) {
  const {
    module: e,
    heading: r,
    title: n,
    subtitle: s,
    description: a,
    seeMoreLabel: i,
    maxCollapsedDescriptionLength: l = ns
  } = t, [c, d] = q(!1), u = ao(), h = z(null), w = h3(
    l
  ), p = a.length > w, g = c ? a : p3(a, w), y = m3(t) ? t : null, k = g3(t);
  return fe(() => {
    c && h.current?.focus();
  }, [c]), /* @__PURE__ */ f(
    "section",
    {
      className: "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
      ...k,
      children: [
        /* @__PURE__ */ f("div", { className: "flex items-center gap-3 px-4 py-3", children: [
          e && /* @__PURE__ */ o(To, { module: e, size: "lg" }),
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
              tabIndex: c ? -1 : void 0,
              className: F(
                "text-base text-f1-foreground whitespace-pre-wrap break-words",
                c && Ne(),
                !c && "inline"
              ),
              children: [
                g,
                p && !c && /* @__PURE__ */ f(ze, { children: [
                  " ",
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: F(
                        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
                        Ne()
                      ),
                      "aria-controls": u,
                      "aria-expanded": c,
                      onClick: () => d(!0),
                      children: i
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        y && /* @__PURE__ */ o("div", { className: "flex items-center justify-end gap-3 border-0 border-t border-solid border-f1-border-secondary px-4 py-3", children: /* @__PURE__ */ o(
          Ee,
          {
            type: "button",
            label: y.primaryActionLabel,
            icon: y.primaryActionIcon,
            onClick: y.onPrimaryAction
          }
        ) })
      ]
    }
  );
}
v3.displayName = "F0AiProposalCard";
const C3 = ({
  icon: t,
  title: e,
  children: r
}) => {
  const [n, s] = q(!1), a = De();
  return /* @__PURE__ */ f(
    Vo,
    {
      className: "mb-1 w-full",
      open: n,
      onOpenChange: s,
      children: [
        /* @__PURE__ */ f(Fo, { className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90", children: [
          /* @__PURE__ */ o("span", { className: "mr-2 *:block", children: /* @__PURE__ */ o(ye, { icon: t, className: "block" }) }),
          /* @__PURE__ */ o("span", { className: "mr-[2px]", children: e }),
          /* @__PURE__ */ o(
            ye,
            {
              icon: Kt,
              className: "h-4 w-4 transition-transform duration-200"
            }
          )
        ] }),
        /* @__PURE__ */ o(Po, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ o(
          ve.div,
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
}, w3 = (t) => O2[t] ?? wo, x3 = ({ iconName: t }) => t ? /* @__PURE__ */ o("div", { className: "mr-1 flex items-center justify-center", children: /* @__PURE__ */ o(ye, { icon: w3(t), size: "md", color: "default" }) }) : null;
function k3({
  sources: t,
  title: e
}) {
  const r = pe();
  if (!t || t.length === 0 || !Array.isArray(t))
    return null;
  const n = e ?? r.ai.resourcesGroupTitle;
  return /* @__PURE__ */ o(C3, { icon: Tr, title: n, children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2", children: t.map((s, a) => {
    const i = /* @__PURE__ */ o(x3, { iconName: s.icon });
    return s.link ? /* @__PURE__ */ o(
      Rt,
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
k3.displayName = "F0AiMessageSources";
async function y3(t, e, r) {
  const n = await import("./xlsx-Bedf3nwD.js"), s = n.utils.table_to_book(t, { sheet: "Data" });
  n.writeFile(s, `${r}.${e}`);
}
function b3({
  dataset: t,
  title: e,
  filename: r
}) {
  const n = pe(), s = z(null), a = e ?? n.ai.aiTable.title, i = ee(
    (l) => {
      if (!s.current) return;
      const c = r ?? (a.replace(/\s+/g, "_").toLowerCase() || "table");
      y3(s.current, l, c);
    },
    [a, r]
  );
  return t.columns?.length ? /* @__PURE__ */ f(
    nr,
    {
      display: "flex",
      flexDirection: "column",
      gap: "md",
      borderRadius: "md",
      border: "default",
      borderColor: "secondary",
      children: [
        /* @__PURE__ */ f(
          nr,
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
                $r,
                {
                  icon: tt,
                  size: "md",
                  items: [
                    {
                      label: n.ai.aiTable.downloadExcel,
                      icon: tt,
                      onClick: () => i("xlsx")
                    },
                    {
                      label: n.ai.aiTable.downloadCsv,
                      icon: tt,
                      onClick: () => i("csv")
                    }
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o(nr, { overflowX: "auto", children: /* @__PURE__ */ f(
          "table",
          {
            ref: s,
            className: F(
              "w-full border-separate border-spacing-0 text-md",
              "[&_tbody_tr:last-child_td]:border-b-0"
            ),
            children: [
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: t.columns.map((l) => /* @__PURE__ */ o(
                "th",
                {
                  className: "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
                  children: t.columnLabels?.[l] ?? l
                },
                l
              )) }) }),
              /* @__PURE__ */ o("tbody", { children: t.rows.map((l, c) => /* @__PURE__ */ o("tr", { children: t.columns.map((d) => {
                const u = l[d];
                return /* @__PURE__ */ o(
                  "td",
                  {
                    className: "max-w-72 border-0 border-b border-solid border-f1-border-secondary px-3 py-2 text-f1-foreground",
                    children: /* @__PURE__ */ o(Le, { children: u == null ? "" : String(u) })
                  },
                  d
                );
              }) }, c)) })
            ]
          }
        ) })
      ]
    }
  ) : null;
}
b3.displayName = "F0AiTableCard";
function L3({ credits: t }) {
  const e = pe(), [r, n] = q(!1), [s, a] = q(!1), [i, l] = q(!1), [c, d] = q(null), u = ee(
    (p) => {
      n(p), p && t?.fetchUsage && (a(!0), l(!1), t.fetchUsage().then((g) => {
        d(g), l(!1);
      }).catch(() => {
        l(!0);
      }).finally(() => {
        a(!1);
      }));
    },
    [t]
  );
  if (!t) return null;
  const h = c ? Math.min(100, Math.round(c.used / c.total * 100)) : 0, w = t.companyName;
  return /* @__PURE__ */ f(Vr, { open: r, onOpenChange: u, children: [
    /* @__PURE__ */ o(Fr, { asChild: !0, children: /* @__PURE__ */ o(
      Se,
      {
        variant: "ghost",
        hideLabel: !0,
        label: e.t("ai.credits.title"),
        icon: Ar,
        pressed: r
      }
    ) }),
    /* @__PURE__ */ f(
      Pr,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          w && /* @__PURE__ */ f("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ o(
              Hr,
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
              !s && !i && c && /* @__PURE__ */ f(ze, { children: [
                /* @__PURE__ */ f("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ o("span", { className: "text-base font-medium text-f1-foreground", children: e.t("ai.credits.title") }),
                  /* @__PURE__ */ o("span", { className: "font-medium text-f1-foreground-secondary", children: e.t("ai.credits.creditsLeft", {
                    total: Math.max(
                      0,
                      c.total - c.used
                    ).toLocaleString()
                  }) })
                ] }),
                /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ o("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ o(
                  ve.div,
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
                  icon: Mo
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
const M3 = "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)";
function E3({
  employeeCredits: t
}) {
  const e = pe(), r = De(), [n, s] = q(!1), [a, i] = q(!1), [l, c] = q(!1), [d, u] = q(null), h = ee(
    (y) => {
      s(y), y && t?.fetchUsage && (i(!0), c(!1), t.fetchUsage().then((k) => {
        u(k), c(!1);
      }).catch(() => {
        c(!0);
      }).finally(() => {
        i(!1);
      }));
    },
    [t]
  );
  if (!t) return null;
  const w = !!t.companyName, p = d && d.total > 0 ? Math.min(100, Math.round(d.used / d.total * 100)) : 0, g = d ? Math.max(0, d.total - d.used) : 0;
  return /* @__PURE__ */ f(Vr, { open: n, onOpenChange: h, children: [
    /* @__PURE__ */ o(Fr, { asChild: !0, children: /* @__PURE__ */ o(
      Se,
      {
        variant: "ghost",
        hideLabel: !0,
        label: e.t("ai.credits.title"),
        icon: Ar,
        pressed: n
      }
    ) }),
    /* @__PURE__ */ f(
      Pr,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          w && /* @__PURE__ */ f("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ o(
              Hr,
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
            l && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: e.t("ai.credits.creditsError") }),
            !a && !l && d && /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ f("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ o("span", { className: "text-base font-medium text-f1-foreground", children: e.t("ai.credits.employeeCredits") }),
                /* @__PURE__ */ o("span", { className: "font-medium text-f1-foreground-secondary", children: e.t("ai.credits.creditsLeft", {
                  total: g.toLocaleString()
                }) })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ o("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ o(
                ve.div,
                {
                  className: "h-full rounded-full",
                  style: {
                    width: `${p}%`,
                    backgroundImage: M3,
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
const no = ({
  credits: t,
  employeeCredits: e
}) => e ? /* @__PURE__ */ o(E3, { employeeCredits: e }) : t ? /* @__PURE__ */ o(L3, { credits: t }) : null, gf = ({
  historyEnabled: t = !1,
  title: e,
  currentThreadTitle: r,
  fullscreen: n = !1,
  lockVisualizationMode: s = !1,
  onToggleVisualizationMode: a,
  onClose: i,
  onNewChat: l,
  onOpenHistory: c,
  hasMessages: d = !1,
  credits: u,
  employeeCredits: h
}) => {
  const w = pe(), p = _o(`(max-width: ${Bi.md}px)`, {
    initializeWithValue: !0
  }), g = !s && !p && /* @__PURE__ */ o(
    Se,
    {
      variant: "ghost",
      hideLabel: !0,
      label: n ? w.ai.collapseChat : w.ai.expandChat,
      icon: n ? ko : xo,
      onClick: a
    }
  ), y = /* @__PURE__ */ o(
    Se,
    {
      variant: "ghost",
      hideLabel: !0,
      label: w.ai.closeChat,
      icon: st,
      onClick: i
    }
  );
  return t ? /* @__PURE__ */ f(
    "header",
    {
      className: F(
        "flex justify-between pl-2.5 pr-3 py-3 w-full overflow-hidden gap-3"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center", children: !s && /* @__PURE__ */ o(
          Rt,
          {
            variant: "ghost",
            size: "md",
            className: "min-w-0 max-w-full [&>div>span>span]:w-full",
            onClick: c,
            children: /* @__PURE__ */ f("div", { className: "flex min-w-0 items-center gap-1", children: [
              /* @__PURE__ */ o(Le, { lines: 1, className: "min-w-0 text-left", children: r ?? w.ai.newConversation }),
              /* @__PURE__ */ o(ye, { icon: Nr, color: "default", size: "md" })
            ] })
          }
        ) }),
        /* @__PURE__ */ f(
          ve.div,
          {
            className: "flex shrink-0 items-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.2, ease: "easeOut" },
            children: [
              /* @__PURE__ */ o(
                no,
                {
                  credits: u,
                  employeeCredits: h
                }
              ),
              g,
              y
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ f("header", { className: F("flex justify-between px-4 py-3"), children: [
    /* @__PURE__ */ o("div", { className: "flex items-center", children: /* @__PURE__ */ o("h2", { className: "text-f1-foreground", children: e ?? "" }) }),
    /* @__PURE__ */ f(
      ve.div,
      {
        className: "flex items-center",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2, ease: "easeOut" },
        children: [
          d && !s && /* @__PURE__ */ o(
            Se,
            {
              variant: "ghost",
              hideLabel: !0,
              label: w.ai.startNewChat,
              icon: jr,
              onClick: l
            }
          ),
          /* @__PURE__ */ o(
            no,
            {
              credits: u,
              employeeCredits: h
            }
          ),
          g,
          y
        ]
      }
    )
  ] });
};
function _3() {
  if (!(typeof navigator > "u"))
    return Wi(navigator.language);
}
function S3(t) {
  const e = new Date(t), r = /* @__PURE__ */ new Date();
  return Ho(e) ? "today" : Io(e) ? "yesterday" : Ui(e, r) ? "thisMonth" : "older";
}
function R3(t, e) {
  const r = new Date(t), n = _3(), s = Yr(r, "p", { locale: n });
  if (Ho(r)) return `${e.today}, ${s}`;
  if (Io(r)) return `${e.yesterday}, ${s}`;
  const a = !zi(r, /* @__PURE__ */ new Date());
  return `${Yr(r, a ? "MMM d yyyy" : "MMM d", {
    locale: n
  })}, ${s}`;
}
function N3(t) {
  const e = {
    today: [],
    yesterday: [],
    thisMonth: [],
    older: []
  };
  for (const n of t) {
    const s = S3(n.updatedAt);
    e[s].push(n);
  }
  return ["today", "yesterday", "thisMonth", "older"].filter((n) => e[n].length > 0).map((n) => ({ key: n, threads: e[n] }));
}
function T3({
  thread: t,
  isPinned: e,
  onSelect: r,
  onPin: n,
  onUnpin: s,
  onDelete: a
}) {
  const i = pe(), l = de(
    () => [
      {
        label: e ? i.ai.unpinChat : i.ai.pinChat,
        icon: zo,
        onClick: () => e ? s(t.id) : n(t.id)
      },
      {
        label: i.ai.deleteChat,
        icon: mo,
        critical: !0,
        onClick: () => a(t.id)
      }
    ],
    [e, t.id, n, s, a]
  ), c = de(
    () => R3(t.updatedAt, {
      today: i.ai.today,
      yesterday: i.ai.yesterday
    }),
    [t.updatedAt, i.ai.today, i.ai.yesterday]
  );
  return /* @__PURE__ */ f(
    "div",
    {
      className: F(
        "group flex cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover",
        Ne("rounded")
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
              /* @__PURE__ */ o("span", { className: "shrink-0 font-medium text-f1-foreground-tertiary", children: `- ${c}` })
            ]
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: F(
              "flex items-center opacity-0 transition-opacity duration-150",
              "group-hover:opacity-100 focus-within:opacity-100",
              "has-[[aria-expanded=true]]:opacity-100"
            ),
            children: /* @__PURE__ */ o($r, { items: l, children: /* @__PURE__ */ o(
              Ee,
              {
                icon: Co,
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
function oo({
  label: t,
  threads: e,
  pinnedIds: r,
  onSelect: n,
  onPin: s,
  onUnpin: a,
  onDelete: i
}) {
  const [l, c] = q(!0), d = ee(() => {
    c((h) => !h);
  }, []), u = ee(
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
        className: F(
          "flex cursor-pointer items-center p-3 gap-1 hover:bg-f1-background-hover",
          Ne("rounded")
        ),
        children: [
          /* @__PURE__ */ o("span", { className: "text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary", children: t }),
          /* @__PURE__ */ o(
            ye,
            {
              icon: l ? Nr : po,
              color: "secondary",
              size: "xs"
            }
          )
        ]
      }
    ),
    l && /* @__PURE__ */ o("div", { className: "flex flex-col", children: e.map((h) => /* @__PURE__ */ o(
      T3,
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
function A3() {
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
const vf = ({
  onClose: t,
  onSelectThread: e,
  onNewChat: r,
  threads: n,
  isLoading: s,
  error: a,
  pinnedIds: i,
  onPinThread: l,
  onUnpinThread: c,
  onDeleteThread: d
}) => {
  const u = pe(), [h, w] = q("");
  fe(() => {
    const C = (x) => {
      x.key === "Escape" && t();
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [t]);
  const p = de(
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
  ), g = de(() => {
    if (!h.trim()) return n;
    const C = h.toLowerCase();
    return n.filter((x) => x.title.toLowerCase().includes(C));
  }, [n, h]), y = de(
    () => g.filter((C) => i.has(C.id)),
    [g, i]
  ), k = de(
    () => g.filter((C) => !i.has(C.id)),
    [g, i]
  ), M = de(
    () => N3(k),
    [k]
  ), P = ee(
    (C, x) => {
      e(C, x), t();
    },
    [e, t]
  ), I = ee(() => {
    r(), t();
  }, [r, t]), T = ee(
    (C) => {
      d(C);
    },
    [d]
  ), v = y.length > 0 || M.length > 0;
  return jo(
    /* @__PURE__ */ f(ze, { children: [
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
          className: F(
            "fixed inset-0 z-50 flex items-center justify-center",
            "pointer-events-none",
            "animate-in fade-in-0 zoom-in-95"
          ),
          children: /* @__PURE__ */ f(
            "div",
            {
              className: F(
                "pointer-events-auto relative flex w-full max-w-[600px] flex-col",
                "rounded-xl bg-f1-background shadow-lg",
                "max-h-[min(600px,80vh)]"
              ),
              children: [
                /* @__PURE__ */ f("div", { className: "flex flex-shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary py-2 pl-5 pr-3", children: [
                  /* @__PURE__ */ o(ye, { icon: Tr, color: "secondary", size: "md" }),
                  /* @__PURE__ */ o(
                    "input",
                    {
                      type: "text",
                      value: h,
                      onChange: (C) => w(C.target.value),
                      placeholder: u.ai.searchChats,
                      className: F(
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
                    Rt,
                    {
                      variant: "ghost",
                      size: "md",
                      className: "py-1 [&>div>span>span]:w-full",
                      onClick: I,
                      children: /* @__PURE__ */ f("div", { className: "flex w-full items-center gap-2", children: [
                        /* @__PURE__ */ o(ye, { icon: jr, color: "default", size: "md" }),
                        /* @__PURE__ */ o(Le, { lines: 1, className: "text-left", children: u.ai.startNewChat })
                      ] })
                    }
                  ),
                  s && /* @__PURE__ */ o(A3, {}),
                  !s && a && /* @__PURE__ */ o("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: a }),
                  !s && !a && !v && /* @__PURE__ */ o("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: u.ai.noPreviousChats }),
                  !s && !a && y.length > 0 && /* @__PURE__ */ o(
                    oo,
                    {
                      label: u.ai.pinnedChats,
                      threads: y,
                      pinnedIds: i,
                      onSelect: P,
                      onPin: l,
                      onUnpin: c,
                      onDelete: T
                    }
                  ),
                  !s && !a && M.map((C) => /* @__PURE__ */ o(
                    oo,
                    {
                      label: p[C.key],
                      threads: C.threads,
                      pinnedIds: i,
                      onSelect: P,
                      onPin: l,
                      onUnpin: c,
                      onDelete: T
                    },
                    C.key
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
}, os = "f0-ai-pinned-threads";
function V3() {
  const t = Gi(os, []);
  return new Set(Array.isArray(t) ? t : []);
}
function gr(t) {
  qi(os, [...t]);
}
function Cf({
  enabled: t = !1,
  fetchThreads: e,
  deleteThread: r
}) {
  const [n, s] = q([]), [a, i] = q(!1), [l, c] = q(null), [d, u] = q(V3), h = ee(async () => {
    i(!0), c(null);
    try {
      const y = await e();
      s(y);
    } catch (y) {
      const k = y instanceof Error ? y.message : "Failed to fetch chat history";
      c(k), s([]);
    } finally {
      i(!1);
    }
  }, [e]);
  fe(() => {
    t && h();
  }, [t, h]);
  const w = ee((y) => {
    u((k) => {
      const M = new Set(k);
      return M.add(y), gr(M), M;
    });
  }, []), p = ee((y) => {
    u((k) => {
      const M = new Set(k);
      return M.delete(y), gr(M), M;
    });
  }, []), g = ee(
    async (y) => {
      try {
        await r(y), s((k) => k.filter((M) => M.id !== y)), u((k) => {
          if (!k.has(y)) return k;
          const M = new Set(k);
          return M.delete(y), gr(M), M;
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
    error: l,
    refetch: h,
    pinnedIds: d,
    pinThread: w,
    unpinThread: p,
    deleteThread: g
  };
}
export {
  Cn as $,
  af as A,
  D2 as B,
  H1 as C,
  D3 as D,
  U3 as E,
  tf as F,
  B3 as G,
  z3 as H,
  q3 as I,
  v1 as J,
  W3 as K,
  Er as L,
  je as M,
  Gt as N,
  wl as O,
  Kl as P,
  wn as Q,
  S4 as R,
  hu as S,
  Q5 as T,
  f1 as U,
  c5 as V,
  U5 as W,
  bc as X,
  Z0 as Y,
  A as Z,
  ml as _,
  sf as a,
  G3 as a0,
  gn as a1,
  yt as a2,
  Me as a3,
  lt as a4,
  Ke as a5,
  nr as a6,
  pu as a7,
  hl as a8,
  il as a9,
  ll as aa,
  sl as ab,
  ul as ac,
  gu as ad,
  mu as ae,
  Z3 as af,
  Y3 as ag,
  K3 as ah,
  X3 as ai,
  cf as b,
  G6 as c,
  rf as d,
  I1 as e,
  lf as f,
  df as g,
  Sr as h,
  ef as i,
  uf as j,
  ff as k,
  hf as l,
  J3 as m,
  pf as n,
  O3 as o,
  mf as p,
  v3 as q,
  k3 as r,
  b3 as s,
  gf as t,
  nf as u,
  vf as v,
  Cf as w,
  Q3 as x,
  of as y,
  Ko as z
};
