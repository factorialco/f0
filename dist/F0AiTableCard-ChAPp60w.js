import { defaultTranslations as Mt } from "./i18n-provider-defaults.js";
import { jsx as d, jsxs as M, Fragment as He } from "react/jsx-runtime";
import { useInsertionEffect as Ut, forwardRef as de, createContext as Ke, useContext as we, useState as ce, useRef as D, useCallback as Ze, useMemo as ye, useEffect as fe, useId as Vt, createElement as Bt } from "react";
import { r as Ot, k as kt, m as Dt, l as Gt, n as Qe, o as zt, p as Wt, q as Xt, s as Yt, t as $t, v as Je, w as jt, V as qt, x as Ht, y as Kt, z as Zt, S as Qt, H as Jt, A as he, B as er, D as tr, E as rr, G as nr, J as W, K as ae, L as or, u as et, M as ir, O as Se, N as be, P as ar, Q as sr, R as tt, T as lr, U as pe, W as cr, X as dr, Y as ur, Z as mr, _ as fr, $ as hr, a0 as pr, a1 as gr, a2 as vr, a3 as xr, a4 as br, a5 as wr, a6 as yr, a7 as le } from "./F0AiChat-mniTB5uk.js";
import { useTrackVolume as Tr } from "@livekit/components-react";
function Ar(t, e, r) {
  Ut(() => t.on(e, r), [t, e, r]);
}
function Te(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function rt(t, e, r, n) {
  return typeof t == "string" && Te(e) ? Ot(t, r, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function Er(t, e, r) {
  return t * (e + 1);
}
function Fe(t, e, r, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : n.get(e) ?? t;
}
const Rr = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function nt(t, e) {
  return kt(t) ? t[Rr(0, t.length, e)] : t;
}
function Cr(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    o.at > e && o.at < r && (Gt(t, o), n--);
  }
}
function Sr(t, e, r, n, o, i) {
  Cr(t, o, i);
  for (let a = 0; a < e.length; a++)
    t.push({
      value: e[a],
      at: Dt(o, i, n[a]),
      easing: nt(r, a)
    });
}
function Fr(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] = t[r] / (e + 1);
}
function Lr(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const Nr = "easeInOut", Ir = 20;
function _r(t, { defaultTransition: e = {}, ...r } = {}, n, o) {
  const i = e.duration || 0.3, a = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), f = {}, y = /* @__PURE__ */ new Map();
  let h = 0, b = 0, R = 0;
  for (let m = 0; m < t.length; m++) {
    const T = t[m];
    if (typeof T == "string") {
      y.set(T, b);
      continue;
    } else if (!Array.isArray(T)) {
      y.set(T.name, Fe(b, T.at, h, y));
      continue;
    }
    let [N, p, S = {}] = T;
    S.at !== void 0 && (b = Fe(b, S.at, h, y));
    let L = 0;
    const U = (w, A, I, P = 0, k = 0) => {
      const C = Pr(w), { delay: g = 0, times: _ = zt(C), type: O = "keyframes", repeat: X, repeatType: z, repeatDelay: Z = 0, ...$ } = A;
      let { ease: B = e.ease || "easeOut", duration: F } = A;
      const V = typeof g == "function" ? g(P, k) : g, H = C.length, K = Yt(O) ? O : o?.[O];
      if (H <= 2 && K) {
        let Q = 100;
        if (H === 2 && Vr(C)) {
          const ee = C[1] - C[0];
          Q = Math.abs(ee);
        }
        const J = { ...$ };
        F !== void 0 && (J.duration = $t(F));
        const ne = Wt(J, Q, K);
        B = ne.ease, F = ne.duration;
      }
      F ?? (F = i);
      const j = b + V;
      _.length === 1 && _[0] === 0 && (_[1] = 1);
      const re = _.length - C.length;
      if (re > 0 && Xt(_, re), C.length === 1 && C.unshift(null), X) {
        Je(X < Ir, "Repeat count too high, must be less than 20"), F = Er(F, X);
        const Q = [...C], J = [..._];
        B = Array.isArray(B) ? [...B] : [B];
        const ne = [...B];
        for (let ee = 0; ee < X; ee++) {
          C.push(...Q);
          for (let s = 0; s < Q.length; s++)
            _.push(J[s] + (ee + 1)), B.push(s === 0 ? "linear" : nt(ne, s - 1));
        }
        Fr(_, X);
      }
      const ie = j + F;
      Sr(I, C, B, _, j, ie), L = Math.max(V + F, L), R = Math.max(ie, R);
    };
    if (Qe(N)) {
      const w = Le(N, x);
      U(p, S, Ne("default", w));
    } else {
      const w = rt(N, p, n, f), A = w.length;
      for (let I = 0; I < A; I++) {
        p = p, S = S;
        const P = w[I], k = Le(P, x);
        for (const C in p)
          U(p[C], Mr(S, C), Ne(C, k), I, A);
      }
    }
    h = b, b += L;
  }
  return x.forEach((m, T) => {
    for (const N in m) {
      const p = m[N];
      p.sort(Lr);
      const S = [], L = [], U = [];
      for (let A = 0; A < p.length; A++) {
        const { at: I, value: P, easing: k } = p[A];
        S.push(P), L.push(jt(0, R, I)), U.push(k || "easeOut");
      }
      L[0] !== 0 && (L.unshift(0), S.unshift(S[0]), U.unshift(Nr)), L[L.length - 1] !== 1 && (L.push(1), S.push(null)), a.has(T) || a.set(T, {
        keyframes: {},
        transition: {}
      });
      const w = a.get(T);
      w.keyframes[N] = S, w.transition[N] = {
        ...e,
        duration: R,
        ease: U,
        times: L,
        ...r
      };
    }
  }), a;
}
function Le(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function Ne(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function Pr(t) {
  return Array.isArray(t) ? t : [t];
}
function Mr(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const Ur = (t) => typeof t == "number", Vr = (t) => t.every(Ur);
function Br(t, e) {
  return t in e;
}
class Or extends qt {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, r) {
    if (Br(r, e)) {
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
    return Ht();
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
function kr(t) {
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
  }, r = Kt(t) && !Zt(t) ? new Qt(e) : new Jt(e);
  r.mount(t), he.set(t, r);
}
function Dr(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, r = new Or(e);
  r.mount(t), he.set(t, r);
}
function Gr(t, e) {
  return Qe(t) || typeof t == "number" || typeof t == "string" && !Te(e);
}
function ot(t, e, r, n) {
  const o = [];
  if (Gr(t, e))
    o.push(er(t, Te(e) && e.default || e, r && (r.default || r)));
  else {
    const i = rt(t, e, n), a = i.length;
    Je(!!a, "No valid elements provided.");
    for (let x = 0; x < a; x++) {
      const f = i[x], y = f instanceof Element ? kr : Dr;
      he.has(f) || y(f);
      const h = he.get(f), b = { ...r };
      "delay" in b && typeof b.delay == "function" && (b.delay = b.delay(x, a)), o.push(...tr(h, { ...e, transition: b }, {}));
    }
  }
  return o;
}
function zr(t, e, r) {
  const n = [];
  return _r(t, e, r, { spring: rr }).forEach(({ keyframes: i, transition: a }, x) => {
    n.push(...ot(x, i, a));
  }), n;
}
class Wr {
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
      r.forEach((n, o) => {
        n && n(), this.animations[o].stop();
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
class Xr extends Wr {
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function Yr(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function $r(t) {
  function e(r, n, o) {
    let i = [];
    return Yr(r) ? i = zr(r, n, t) : i = ot(r, n, o, t), new Xr(i);
  }
  return e;
}
const jr = $r(), qr = (t, e) => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ d(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Hr = de(qr), Kr = [
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
], it = de((t, e) => {
  const r = Kr.reduce((n, o) => {
    const { [o]: i, ...a } = n;
    return a;
  }, t);
  return /* @__PURE__ */ d(
    nr,
    {
      ...r,
      variant: "ai",
      ref: e,
      iconRotate: t.icon == Hr
    }
  );
});
it.displayName = "AIButton";
const at = {
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
}, st = {
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
}, Zr = {}, Qr = {
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
}, Jr = {
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
}, en = {
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
}, tn = {
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
}, rn = {
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
}, nn = {
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
}, lt = {
  width: Qr,
  height: Jr,
  minWidth: en,
  minHeight: tn,
  maxWidth: rn,
  maxHeight: nn
}, ct = {
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
}, dt = {
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
}, ut = {
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
}, on = {}, mt = {
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
}, ft = {
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
}, ht = {
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
}, an = {}, sn = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, pt = {
  overflow: sn,
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
}, ln = {}, gt = {
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
}, cn = {}, vt = {
  zIndex: {
    auto: "z-auto",
    0: "z-0",
    10: "z-10",
    20: "z-20",
    30: "z-30",
    40: "z-40",
    50: "z-50"
  }
}, dn = {
  ...ct,
  ...ft,
  ...gt,
  ...ht,
  ...ut,
  ...mt,
  ...lt,
  ...at,
  ...st,
  ...pt,
  ...dt,
  ...vt
};
function un(t, e) {
  return e.split(" ").map((r) => `${t}:${r}`).join(" ");
}
function mn(t, e) {
  const r = [];
  for (const [n, o] of Object.entries(e)) {
    if (o == null) continue;
    const i = dn[n];
    if (!i) continue;
    const a = i[String(o)];
    a && r.push(un(t, a));
  }
  return r.join(" ");
}
const fn = ae({
  base: "",
  variants: {
    ...ct,
    ...ft,
    ...gt,
    ...ht,
    ...ut,
    ...mt,
    ...lt,
    ...at,
    ...st,
    ...pt,
    ...dt,
    ...vt
  },
  defaultVariants: {
    ...cn,
    ...an,
    ...on,
    ...Zr,
    ...ln
  }
}), hn = ["sm", "md", "lg", "xl"], xt = de(
  ({
    // Display & Position
    display: t,
    position: e,
    top: r,
    right: n,
    bottom: o,
    left: i,
    zIndex: a,
    // Padding
    padding: x,
    paddingX: f,
    paddingY: y,
    paddingTop: h,
    paddingBottom: b,
    paddingLeft: R,
    paddingRight: m,
    // Margin
    margin: T,
    marginX: N,
    marginY: p,
    marginTop: S,
    marginBottom: L,
    marginLeft: U,
    marginRight: w,
    // Gap
    gap: A,
    // Grid
    columns: I,
    rows: P,
    colSpan: k,
    colStart: C,
    rowSpan: g,
    // Dimensions
    width: _,
    height: O,
    minWidth: X,
    minHeight: z,
    maxWidth: Z,
    maxHeight: $,
    // Background
    background: B,
    // Border
    borderColor: F,
    border: V,
    borderTop: H,
    borderBottom: K,
    borderLeft: j,
    borderRight: re,
    borderRadius: ie,
    borderRadiusTopLeft: Q,
    borderRadiusTopRight: J,
    borderRadiusBottomLeft: ne,
    borderRadiusBottomRight: ee,
    borderStyle: s,
    // Overflow
    overflow: c,
    overflowX: l,
    overflowY: v,
    // Divider
    divider: u,
    dividerColor: E,
    // Flex
    alignItems: G,
    justifyContent: q,
    flexDirection: oe,
    flexWrap: se,
    grow: ge,
    shrink: ve,
    // Responsive breakpoint overrides
    sm: Rt,
    md: Ct,
    lg: St,
    xl: Ft,
    ...Lt
  }, Nt) => {
    const Ee = H && H !== "none" || K && K !== "none" || j && j !== "none" || re && re !== "none", It = V && V !== "none" || Ee, _t = { sm: Rt, md: Ct, lg: St, xl: Ft }, Pt = hn.map((Re) => {
      const Ce = _t[Re];
      return Ce ? mn(Re, Ce) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "div",
      {
        ref: Nt,
        className: W(
          Ee && "border-0",
          fn({
            display: t,
            position: e,
            top: r,
            right: n,
            bottom: o,
            left: i,
            zIndex: a,
            padding: x,
            paddingX: f,
            paddingY: y,
            paddingTop: h,
            paddingBottom: b,
            paddingLeft: R,
            paddingRight: m,
            margin: T,
            marginX: N,
            marginY: p,
            marginTop: S,
            marginBottom: L,
            marginLeft: U,
            marginRight: w,
            gap: A,
            columns: I,
            rows: P,
            colSpan: k,
            colStart: C,
            rowSpan: g,
            width: _,
            height: O,
            minWidth: X,
            minHeight: z,
            maxWidth: Z,
            maxHeight: $,
            background: B,
            borderColor: F,
            border: V,
            borderTop: H,
            borderBottom: K,
            borderLeft: j,
            borderRight: re,
            borderRadius: ie,
            borderRadiusTopLeft: Q,
            borderRadiusTopRight: J,
            borderRadiusBottomLeft: ne,
            borderRadiusBottomRight: ee,
            borderStyle: s,
            overflow: c,
            overflowX: l,
            overflowY: v,
            divider: u,
            dividerColor: E,
            alignItems: G,
            justifyContent: q,
            flexDirection: oe,
            flexWrap: se,
            grow: ge,
            shrink: ve
          }),
          Pt,
          It && !F && "border-f1-border",
          u && !E && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...Lt
      }
    );
  }
);
xt.displayName = "F0Box";
const pn = or(
  {
    name: "F0Box",
    type: "layout"
  },
  xt
), so = ["xs", "sm", "md", "lg"], lo = [
  "inProgress",
  "executing",
  "completed"
], co = {
  ai: Mt.ai
}, bt = Ke(null);
function uo({
  children: t,
  translations: e
}) {
  return /* @__PURE__ */ d(bt.Provider, { value: e, children: t });
}
function mo() {
  const t = we(bt);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
const Ae = Ke(null);
function fo({
  children: t
}) {
  const [e, r] = ce(0), n = D([]), o = Ze(
    (a) => {
      const x = n.current, f = x.findIndex(
        (h) => h.formName === a.formName && h.customFieldName === a.customFieldName
      ), y = a;
      f >= 0 ? x[f] = y : x.push(y), r((h) => h + 1);
    },
    []
  ), i = ye(
    () => ({
      formatters: [...n.current],
      setFormCardValueFormatter: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, e]
  );
  return /* @__PURE__ */ d(Ae.Provider, { value: i, children: t });
}
function ho(t) {
  const r = we(Ae)?.formatters;
  return ye(() => !r || r.length === 0 ? null : (n, o, i) => {
    let a, x = -1;
    for (const f of r) {
      const y = f.formName === void 0 || f.formName === t, h = f.customFieldName === void 0 || f.customFieldName === i.customFieldName;
      if (!y || !h) continue;
      let b = 0;
      f.formName !== void 0 && (b += 2), f.customFieldName !== void 0 && (b += 1), b > x && (x = b, a = f);
    }
    if (a)
      return a.format(o, { key: n, ...i });
  }, [r, t]);
}
function po() {
  const t = we(Ae);
  if (!t)
    throw new Error(
      "useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider"
    );
  return t.setFormCardValueFormatter;
}
function gn({
  module: t,
  title: e,
  description: r,
  onOpen: n,
  showOpenButton: o = !0,
  onClose: i,
  isActive: a,
  children: x
}) {
  const f = et();
  return /* @__PURE__ */ M(
    "div",
    {
      className: W(
        "flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2 cursor-pointer",
        a ? "border-f1-border-hover" : "border-f1-border-secondary hover:border-f1-border-hover"
      ),
      onClick: a ? i : n,
      children: [
        /* @__PURE__ */ M("div", { className: "flex w-full min-w-0 flex-row items-center gap-3", children: [
          !!t && /* @__PURE__ */ d(ir, { module: t, size: "lg" }),
          /* @__PURE__ */ M("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ d(Se, { className: "text-lg font-semibold text-f1-foreground", children: e }),
            /* @__PURE__ */ d(Se, { className: "text-base text-f1-foreground-secondary", children: r })
          ] }),
          o && /* @__PURE__ */ d(
            be,
            {
              variant: "neutral",
              size: "md",
              label: a ? f.actions.close : f.ai.reportCard.openButton,
              onClick: a ? i : n
            }
          )
        ] }),
        x
      ]
    }
  );
}
gn.displayName = "F0CanvasCard";
function Ie(t, e, r, n) {
  const o = Math.max(1, Math.min(t, e)), i = Math.min(r, 20), x = Math.min(i + n, o), f = Math.min(x, Math.floor(t / 2)), y = Math.min(x, Math.floor(e / 2)), h = (j) => j / t * 2 - 1, b = (j) => j / e * 2 - 1, R = 0, m = t, T = 0, N = e, p = f, S = t - f, L = y, U = e - y, w = h(R), A = h(m), I = b(T), P = b(N), k = h(p), C = h(S), g = b(L), _ = b(U), O = 0, X = 0, z = 1, Z = 1, $ = f / t, B = 1 - f / t, F = y / e, V = 1 - y / e, H = new Float32Array([
    // Top strip
    w,
    I,
    A,
    I,
    w,
    g,
    w,
    g,
    A,
    I,
    A,
    g,
    // Bottom strip
    w,
    _,
    A,
    _,
    w,
    P,
    w,
    P,
    A,
    _,
    A,
    P,
    // Left strip
    w,
    g,
    k,
    g,
    w,
    _,
    w,
    _,
    k,
    g,
    k,
    _,
    // Right strip
    C,
    g,
    A,
    g,
    C,
    _,
    C,
    _,
    A,
    g,
    A,
    _
  ]), K = new Float32Array([
    // Top strip
    O,
    X,
    z,
    X,
    O,
    F,
    O,
    F,
    z,
    X,
    z,
    F,
    // Bottom strip
    O,
    V,
    z,
    V,
    O,
    Z,
    O,
    Z,
    z,
    V,
    z,
    Z,
    // Left strip
    O,
    F,
    $,
    F,
    O,
    V,
    O,
    V,
    $,
    F,
    $,
    V,
    // Right strip
    B,
    F,
    z,
    F,
    B,
    V,
    B,
    V,
    z,
    F,
    z,
    V
  ]);
  return { positions: H, uvs: K };
}
function _e(t, e, r) {
  const n = t.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  if (t.shaderSource(n, r), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(n) || "Unknown shader error";
    throw t.deleteShader(n), new Error(o);
  }
  return n;
}
function vn(t, e, r) {
  const n = _e(t, t.VERTEX_SHADER, e), o = _e(t, t.FRAGMENT_SHADER, r), i = t.createProgram();
  if (!i) throw new Error("Failed to create program");
  if (t.attachShader(i, n), t.attachShader(i, o), t.linkProgram(i), !t.getProgramParameter(i, t.LINK_STATUS)) {
    const a = t.getProgramInfoLog(i) || "Unknown link error";
    throw t.deleteProgram(i), t.deleteShader(n), t.deleteShader(o), new Error(a);
  }
  return t.deleteShader(n), t.deleteShader(o), i;
}
const xn = `#version 300 es
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
`, bn = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, wn = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function yn(t) {
  const e = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${t}`);
  const [, r, n, o] = e;
  return [parseInt(r) / 255, parseInt(n) / 255, parseInt(o) / 255];
}
class go {
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
      const o = (r - this.startTime) * 1e-3;
      this.render(o);
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
    const { gl: e, vao: r, positionBuffer: n, uvBuffer: o, program: i } = this.glr;
    r && e.deleteVertexArray(r), n && e.deleteBuffer(n), o && e.deleteBuffer(o), e.deleteProgram(i), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(e, r, n) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = e, this.options.height = r, n && (this.options.ratio = n), !this.running) return;
    const { gl: o, program: i, vao: a, positionBuffer: x, uvBuffer: f, uResolution: y } = this.glr, h = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, b = Math.max(1, Math.floor(e * h)), R = Math.max(1, Math.floor(r * h));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${r}px`, (this.canvas.width !== b || this.canvas.height !== R) && (this.canvas.width = b, this.canvas.height = R), o.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(o, "resize: after viewport setup");
    const { positions: m, uvs: T } = Ie(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * h,
      this.options.glowWidth * h
    );
    o.bindVertexArray(a), o.bindBuffer(o.ARRAY_BUFFER, x), o.bufferData(o.ARRAY_BUFFER, m, o.STATIC_DRAW);
    const N = o.getAttribLocation(i, "aPosition");
    o.enableVertexAttribArray(N), o.vertexAttribPointer(N, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after position buffer update"), o.bindBuffer(o.ARRAY_BUFFER, f), o.bufferData(o.ARRAY_BUFFER, T, o.STATIC_DRAW);
    const p = o.getAttribLocation(i, "aUV");
    o.enableVertexAttribArray(p), o.vertexAttribPointer(p, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after UV buffer update"), o.useProgram(i), o.uniform2f(y, this.canvas.width, this.canvas.height), o.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * h), o.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * h), o.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * h), this.checkGLError(o, "resize: after uniform updates");
    const S = performance.now();
    this.lastTime = S;
    const L = (S - this.startTime) * 1e-3;
    this.render(L);
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
        const o = this.getGLErrorName(e, n);
        console.error(`${o} (0x${n.toString(16)})`), n = e.getError();
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
    const r = vn(e, bn, xn);
    this.checkGLError(e, "setupGL: after createProgram");
    const n = e.createVertexArray();
    e.bindVertexArray(n), this.checkGLError(e, "setupGL: after VAO creation");
    const o = this.canvas.width || 2, i = this.canvas.height || 2, { positions: a, uvs: x } = Ie(
      o,
      i,
      this.options.borderWidth,
      this.options.glowWidth
    ), f = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, f), e.bufferData(e.ARRAY_BUFFER, a, e.STATIC_DRAW);
    const y = e.getAttribLocation(r, "aPosition");
    e.enableVertexAttribArray(y), e.vertexAttribPointer(y, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const h = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, h), e.bufferData(e.ARRAY_BUFFER, x, e.STATIC_DRAW);
    const b = e.getAttribLocation(r, "aUV");
    e.enableVertexAttribArray(b), e.vertexAttribPointer(b, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const R = e.getUniformLocation(r, "uResolution"), m = e.getUniformLocation(r, "uTime"), T = e.getUniformLocation(r, "uBorderWidth"), N = e.getUniformLocation(r, "uGlowWidth"), p = e.getUniformLocation(r, "uBorderRadius"), S = e.getUniformLocation(r, "uColors"), L = e.getUniformLocation(r, "uGlowExponent"), U = e.getUniformLocation(r, "uGlowFactor");
    e.useProgram(r), e.uniform1f(T, this.options.borderWidth), e.uniform1f(N, this.options.glowWidth), e.uniform1f(p, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(L, 2), e.uniform1f(U, 1.8)) : (e.uniform1f(L, 1), e.uniform1f(U, 1));
    const w = (this.options.colors || wn).map(yn);
    for (let A = 0; A < w.length; A++)
      e.uniform3f(
        e.getUniformLocation(r, `uColors[${A}]`),
        ...w[A]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: r,
      vao: n,
      positionBuffer: f,
      uvBuffer: h,
      uResolution: R,
      uTime: m,
      uBorderWidth: T,
      uGlowWidth: N,
      uBorderRadius: p,
      uColors: S
    };
  }
  render(e) {
    if (!this.glr) return;
    const { gl: r, program: n, vao: o, uTime: i } = this.glr;
    r.useProgram(n), r.bindVertexArray(o), r.uniform1f(i, e), r.disable(r.DEPTH_TEST), r.disable(r.CULL_FACE), r.disable(r.BLEND), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.drawArrays(r.TRIANGLES, 0, 24), this.checkGLError(r, "render: after draw call"), r.bindVertexArray(null);
  }
}
const Pe = ["lowp", "mediump", "highp"], Tn = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, An = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, Me = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Ue = "iTime", Ve = "iTimeDelta", Be = "iDate", Oe = "iFrame", ke = "iMouse", De = "iResolution", En = "iChannel", Ge = "iChannelResolution", ze = "iDeviceOrientation";
function Rn(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function Cn(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function Sn(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const Fn = (t, e, r, n) => {
  if (Sn(r, n))
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
}, Ln = (t) => {
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
        te(
          `The uniform type "${t}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, xe = 9729, We = 9728, Nn = 9987, Xe = 33071, Ye = 10497;
class In {
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
    const { gl: o } = this, i = 0, a = o.RGBA, x = o.RGBA, f = o.UNSIGNED_BYTE;
    o.bindTexture(o.TEXTURE_2D, e), o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, n), o.texImage2D(
      o.TEXTURE_2D,
      i,
      a,
      x,
      f,
      r
    );
  };
  setupVideo = (e) => {
    const r = document.createElement("video");
    let n = !1, o = !1;
    r.autoplay = !0, r.muted = !0, r.loop = !0, r.crossOrigin = "anonymous";
    const i = () => {
      n && o && (this.isLoaded = !0);
    };
    return r.addEventListener(
      "playing",
      () => {
        n = !0, this.width = r.videoWidth || 0, this.height = r.videoHeight || 0, i();
      },
      !0
    ), r.addEventListener(
      "timeupdate",
      () => {
        o = !0, i();
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
    te(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: r } = this, {
      url: n,
      wrapS: o,
      wrapT: i,
      minFilter: a,
      magFilter: x,
      flipY: f = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          te(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const y = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), h = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (y === null && h === null)
      return Promise.reject(
        new Error(
          te(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: o, wrapT: i, minFilter: a, magFilter: x, flipY: f });
    const b = 0, R = r.RGBA, m = 1, T = 1, N = 0, p = r.RGBA, S = r.UNSIGNED_BYTE, L = new Uint8Array([255, 255, 255, 0]), U = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, U), r.texImage2D(
      r.TEXTURE_2D,
      b,
      R,
      m,
      T,
      N,
      p,
      S,
      L
    ), h) {
      const P = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = U, this.source = P, this.isVideo = !0, P.play().then(() => this);
    }
    async function w() {
      return new Promise((P, k) => {
        const C = new Image();
        C.crossOrigin = "anonymous", C.onload = () => {
          P(C);
        }, C.onerror = () => {
          k(new Error(te(`failed loading url: ${n}`)));
        }, C.src = n ?? "";
      });
    }
    let A = await w(), I = (A.width & A.width - 1) === 0 && (A.height & A.height - 1) === 0;
    return (e.wrapS !== Xe || e.wrapT !== Xe || e.minFilter !== We && e.minFilter !== xe) && !I && (A = this.makePowerOf2(A), I = !0), r.bindTexture(r.TEXTURE_2D, U), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, f), r.texImage2D(
      r.TEXTURE_2D,
      b,
      R,
      p,
      S,
      A
    ), I && e.minFilter !== We && e.minFilter !== xe && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_S,
      this.wrapS || Ye
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_T,
      this.wrapT || Ye
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MIN_FILTER,
      this.minFilter || Nn
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MAG_FILTER,
      this.magFilter || xe
    ), this._webglTexture = U, this.source = A, this.isVideo = !1, this.isLoaded = !0, this.width = A.width || 0, this.height = A.height || 0, this;
  };
}
const te = (t) => `react-shaders: ${t}`, $e = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, je = (t, e, r) => t * (1 - r) + e * r, _n = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function Pn({
  fs: t,
  vs: e = Me,
  textures: r = [],
  uniforms: n,
  clearColor: o = [0, 0, 0, 1],
  precision: i = "highp",
  style: a,
  contextAttributes: x = {},
  lerp: f = 1,
  devicePixelRatio: y = 1,
  onDoneLoadingTextures: h,
  onError: b = console.error,
  onWarning: R = console.warn
}) {
  const m = D(null), T = D(null), N = D(null), p = D(null), S = D(void 0), L = D(void 0), U = D(!1), w = D(void 0), A = D(0), I = D([0, 0]), P = D([]), k = D(0), C = D(void 0), g = D({
    [Ue]: { type: "float", isNeeded: !1, value: 0 },
    [Ve]: { type: "float", isNeeded: !1, value: 0 },
    [Be]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [ke]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [De]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Oe]: { type: "int", isNeeded: !1, value: 0 },
    [ze]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), _ = D(n), O = (s, c) => {
    const l = "width" in s ? s.width ?? 0 : 0, v = "height" in s ? s.height ?? 0 : 0, u = g.current.iChannelResolution;
    if (!u) return;
    const E = Array.isArray(u.value) ? u.value : u.value = [];
    E[c * 3] = l * y, E[c * 3 + 1] = v * y, E[c * 3 + 2] = 0;
  }, X = () => {
    m.current && (T.current = m.current.getContext("webgl", x) || m.current.getContext(
      "experimental-webgl",
      x
    ), T.current?.getExtension("OES_standard_derivatives"), T.current?.getExtension("EXT_shader_texture_lod"));
  }, z = () => {
    const s = T.current;
    N.current = s?.createBuffer() ?? null, s?.bindBuffer(s.ARRAY_BUFFER, N.current);
    const c = [
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
    s?.bufferData(s.ARRAY_BUFFER, new Float32Array(c), s.STATIC_DRAW);
  }, Z = ({
    alpha: s,
    beta: c,
    gamma: l
  }) => {
    g.current.iDeviceOrientation.value = [
      s ?? 0,
      c ?? 0,
      l ?? 0,
      window.orientation ?? 0
    ];
  }, $ = (s) => {
    const [c = 0, l = 0] = $e(s), v = c - (w.current?.left ?? 0) - window.pageXOffset, u = (w.current?.height ?? 0) - l - (w.current?.top ?? 0) - window.pageYOffset;
    U.current = !0;
    const E = Array.isArray(g.current.iMouse?.value) ? g.current.iMouse.value : void 0;
    E && (E[2] = v, E[3] = u), I.current[0] = v, I.current[1] = u;
  }, B = (s) => {
    w.current = m.current?.getBoundingClientRect();
    const [c = 0, l = 0] = $e(s), v = c - (w.current?.left ?? 0), u = (w.current?.height ?? 0) - l - (w.current?.top ?? 0);
    if (f !== 1)
      I.current[0] = v, I.current[1] = u;
    else {
      const E = Array.isArray(g.current.iMouse?.value) ? g.current.iMouse.value : void 0;
      E && (E[0] = v, E[1] = u);
    }
  }, F = () => {
    const s = Array.isArray(g.current.iMouse?.value) ? g.current.iMouse.value : void 0;
    s && (s[2] = 0, s[3] = 0);
  }, V = () => {
    const s = T.current;
    if (!s) return;
    w.current = m.current?.getBoundingClientRect();
    const c = y, l = Math.floor(
      (w.current?.width ?? 1) * c
    ), v = Math.floor(
      (w.current?.height ?? 1) * c
    );
    if (s.canvas.width = l, s.canvas.height = v, g.current.iResolution?.isNeeded && p.current) {
      const u = s.getUniformLocation(
        p.current,
        De
      );
      s.uniform2fv(u, [s.canvas.width, s.canvas.height]);
    }
  }, H = (s, c) => {
    const l = T.current;
    if (!l) return null;
    const v = l.createShader(s);
    if (!v) return null;
    if (l.shaderSource(v, c), l.compileShader(v), !l.getShaderParameter(v, l.COMPILE_STATUS)) {
      R?.(te(`Error compiling the shader:
${c}`));
      const u = l.getShaderInfoLog(v);
      l.deleteShader(v), b?.(te(`Shader compiler log: ${u}`));
    }
    return v;
  }, K = (s, c) => {
    const l = T.current;
    if (!l) return;
    const v = H(l.FRAGMENT_SHADER, s), u = H(l.VERTEX_SHADER, c);
    if (p.current = l.createProgram(), !(!p.current || !u || !v)) {
      if (l.attachShader(p.current, u), l.attachShader(p.current, v), l.linkProgram(p.current), !l.getProgramParameter(p.current, l.LINK_STATUS)) {
        b?.(
          te(
            `Unable to initialize the shader program: ${l.getProgramInfoLog(
              p.current
            )}`
          )
        );
        return;
      }
      l.useProgram(p.current), S.current = l.getAttribLocation(
        p.current,
        "aVertexPosition"
      ), l.enableVertexAttribArray(S.current);
    }
  }, j = () => {
    if (n)
      for (const s of Object.keys(n)) {
        const c = n[s];
        if (!c) continue;
        const { value: l, type: v } = c, u = Ln(v);
        if (!u) continue;
        const E = {};
        if (Rn(v, l)) {
          const G = v.length, q = Number.parseInt(v.charAt(G - 3)), oe = Math.floor(l.length / (q * q));
          l.length > q * q && (E.arraySize = `[${oe}]`);
        } else Cn(v, l) && (E.arraySize = `[${Math.floor(l.length / Number.parseInt(v.charAt(0)))}]`);
        g.current[s] = {
          type: u,
          isNeeded: !1,
          value: l,
          ...E
        };
      }
  }, re = () => {
    const s = T.current;
    if (s)
      if (r && r.length > 0) {
        g.current[`${Ge}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const c = r.map(
          (l, v) => (g.current[`${En}${v}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, O(l, v), P.current[v] = new In(s), P.current[v]?.load(l).then((u) => {
            O(u, v);
          }))
        );
        Promise.all(c).then(() => {
          h && h();
        }).catch((l) => {
          b?.(l), h && h();
        });
      } else h && h();
  }, ie = (s) => {
    const c = Pe.includes(i ?? "highp"), l = `precision ${c ? i : Pe[1]} float;
`;
    c || R?.(
      te(
        `wrong precision type ${i}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let v = l.concat(`#define DPR ${y.toFixed(1)}
`).concat(s.replace(/texture\(/g, "texture2D("));
    for (const E of Object.keys(g.current))
      if (s.includes(E)) {
        const G = g.current[E];
        if (!G) continue;
        v = _n(
          v,
          `uniform ${G.type} ${E}${G.arraySize || ""}; 
`,
          v.lastIndexOf(l) + l.length
        ), G.isNeeded = !0;
      }
    return s.includes("mainImage") && (v = v.concat(Tn)), v;
  }, Q = (s) => {
    const c = T.current;
    if (!c || !p.current) return;
    const l = k.current ? (s - k.current) / 1e3 : 0;
    k.current = s;
    const v = _.current;
    if (v)
      for (const u of Object.keys(v)) {
        const E = v[u];
        if (E && g.current[u]?.isNeeded) {
          if (!p.current) return;
          const G = c.getUniformLocation(
            p.current,
            u
          );
          if (!G) return;
          Fn(
            c,
            G,
            E.type,
            E.value
          );
        }
      }
    if (g.current.iMouse?.isNeeded) {
      const u = c.getUniformLocation(
        p.current,
        ke
      );
      c.uniform4fv(u, g.current.iMouse.value);
    }
    if (g.current.iChannelResolution?.isNeeded) {
      const u = c.getUniformLocation(
        p.current,
        Ge
      );
      c.uniform3fv(
        u,
        g.current.iChannelResolution.value
      );
    }
    if (g.current.iDeviceOrientation?.isNeeded) {
      const u = c.getUniformLocation(
        p.current,
        ze
      );
      c.uniform4fv(
        u,
        g.current.iDeviceOrientation.value
      );
    }
    if (g.current.iTime?.isNeeded) {
      const u = c.getUniformLocation(
        p.current,
        Ue
      );
      c.uniform1f(u, A.current += l);
    }
    if (g.current.iTimeDelta?.isNeeded) {
      const u = c.getUniformLocation(
        p.current,
        Ve
      );
      c.uniform1f(u, l);
    }
    if (g.current.iDate?.isNeeded) {
      const u = /* @__PURE__ */ new Date(), E = u.getMonth() + 1, G = u.getDate(), q = u.getFullYear(), oe = u.getHours() * 60 * 60 + u.getMinutes() * 60 + u.getSeconds() + u.getMilliseconds() * 1e-3, se = c.getUniformLocation(
        p.current,
        Be
      );
      c.uniform4fv(se, [q, E, G, oe]);
    }
    if (g.current.iFrame?.isNeeded) {
      const u = c.getUniformLocation(
        p.current,
        Oe
      ), E = g.current.iFrame.value;
      c.uniform1i(u, E), g.current.iFrame.value = E + 1;
    }
    if (P.current.length > 0)
      for (let u = 0; u < P.current.length; u++) {
        const E = P.current[u];
        if (!E) return;
        const { isVideo: G, _webglTexture: q, source: oe, flipY: se, isLoaded: ge } = E;
        if (!ge || !q || !oe) return;
        if (g.current[`iChannel${u}`]?.isNeeded) {
          if (!p.current) return;
          const ve = c.getUniformLocation(
            p.current,
            `iChannel${u}`
          );
          c.activeTexture(c.TEXTURE0 + u), c.bindTexture(c.TEXTURE_2D, q), c.uniform1i(ve, u), G && E.updateTexture(
            q,
            oe,
            se
          );
        }
      }
  }, J = (s) => {
    const c = T.current;
    if (!c) return;
    c.viewport(0, 0, c.drawingBufferWidth, c.drawingBufferHeight), c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT), c.bindBuffer(c.ARRAY_BUFFER, N.current), c.vertexAttribPointer(
      S.current ?? 0,
      3,
      c.FLOAT,
      !1,
      0,
      0
    ), Q(s), c.drawArrays(c.TRIANGLE_STRIP, 0, 4);
    const l = g.current.iMouse?.value;
    if (g.current.iMouse?.isNeeded && f !== 1 && Array.isArray(l)) {
      const v = l[0] ?? 0, u = l[1] ?? 0;
      l[0] = je(v, I.current[0] ?? 0, f), l[1] = je(u, I.current[1] ?? 0, f);
    }
    L.current = requestAnimationFrame(J);
  }, ne = () => {
    const s = { passive: !0 };
    g.current.iMouse?.isNeeded && m.current && (m.current.addEventListener("mousemove", B, s), m.current.addEventListener("mouseout", F, s), m.current.addEventListener("mouseup", F, s), m.current.addEventListener("mousedown", $, s), m.current.addEventListener("touchmove", B, s), m.current.addEventListener("touchend", F, s), m.current.addEventListener("touchstart", $, s)), g.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      Z,
      s
    ), m.current && (C.current = new ResizeObserver(V), C.current.observe(m.current), window.addEventListener("resize", V, s));
  }, ee = () => {
    const s = { passive: !0 };
    g.current.iMouse?.isNeeded && m.current && (m.current.removeEventListener("mousemove", B, s), m.current.removeEventListener("mouseout", F, s), m.current.removeEventListener("mouseup", F, s), m.current.removeEventListener("mousedown", $, s), m.current.removeEventListener("touchmove", B, s), m.current.removeEventListener("touchend", F, s), m.current.removeEventListener("touchstart", $, s)), g.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      Z,
      s
    ), C.current && (C.current.disconnect(), window.removeEventListener("resize", V, s));
  };
  return fe(() => {
    _.current = n;
  }, [n]), fe(() => {
    const s = P.current;
    function c() {
      X();
      const l = T.current;
      l && m.current && (l.clearColor(...o), l.clearDepth(1), l.enable(l.DEPTH_TEST), l.depthFunc(l.LEQUAL), l.viewport(0, 0, m.current.width, m.current.height), m.current.height = m.current.clientHeight, m.current.width = m.current.clientWidth, j(), re(), K(ie(t || An), e || Me), z(), requestAnimationFrame(J), ne(), V());
    }
    return requestAnimationFrame(c), () => {
      const l = T.current;
      if (l) {
        if (l.getExtension("WEBGL_lose_context")?.loseContext(), l.useProgram(null), l.deleteProgram(p.current ?? null), s.length > 0)
          for (const v of s)
            l.deleteTexture(v._webglTexture);
        p.current = null;
      }
      ee(), cancelAnimationFrame(L.current ?? 0);
    };
  }, []), /* @__PURE__ */ d(
    "canvas",
    {
      ref: m,
      style: { height: "100%", width: "100%", ...a }
    }
  );
}
const Mn = `
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
}`, Un = 10, Vn = 2, Bn = 0.5, On = 0.2, kn = 1.5, Y = {
  duration: 0.5,
  ease: "easeOut"
}, qe = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function ue(t) {
  const [e, r] = ce(t), n = ar(t), o = D(null);
  Ar(n, "change", (a) => r(a));
  const i = Ze(
    (a, x) => {
      o.current = jr(n, a, x);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: o, animate: i };
}
function Dn(t, e) {
  const [r, n] = ce(Un), {
    value: o,
    animate: i,
    motionValue: a
  } = ue(On), { value: x, animate: f } = ue(Vn), { value: y, animate: h } = ue(Bn), { value: b, animate: R } = ue(kn), m = Tr(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return fe(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), i(0.2, Y), f(1.2, Y), h(0.4, Y), R(1, Y);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), i(0.3, { type: "spring", duration: 1, bounce: 0.35 }), f(1, Y), h(0.7, Y), R([1.5, 2], qe);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), i(0.3, Y), f(0.5, Y), h(1, Y), R([0.5, 2.5], qe);
        return;
      case "speaking":
        n(70), i(0.3, Y), f(0.75, Y), h(1.25, Y), R(1.5, Y);
        return;
    }
  }, [
    t,
    i,
    f,
    h,
    R
  ]), fe(() => {
    t === "speaking" && m > 0 && !a.isAnimating() && i(0.2 + 0.2 * m, { duration: 0 });
  }, [
    t,
    m,
    a,
    i,
    f,
    h,
    R
  ]), {
    speed: r,
    scale: o,
    amplitude: x,
    frequency: y,
    brightness: b
  };
}
const Gn = ae({
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
function zn(t) {
  const e = t.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, r, n, o] = e;
    return [r, n, o].map((a = "00") => parseInt(a, 16) / 255);
  }
}
function wt({
  shape: t = 1,
  speed: e = 1,
  amplitude: r = 0.5,
  frequency: n = 0.5,
  scale: o = 0.2,
  blur: i = 1,
  color: a = "#FF355E",
  colorShift: x = 1,
  brightness: f = 1,
  themeMode: y = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: h,
  className: b,
  ...R
}) {
  const m = ye(() => zn(a), [a]);
  return /* @__PURE__ */ d("div", { ref: h, className: b, ...R, children: /* @__PURE__ */ d(
    Pn,
    {
      fs: Mn,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: e },
        // Edge blur/softness
        uBlur: { type: "1f", value: i },
        // Shape scale
        uScale: { type: "1f", value: o },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: t },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: n },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: r },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: f },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: x },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: y === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: m ?? [0, 0.7, 1] }
      },
      onError: (T) => {
        console.error("Shader error:", T);
      },
      onWarning: (T) => {
        console.warn("Shader warning:", T);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
wt.displayName = "AuraShader";
function vo({
  size: t = "lg",
  state: e,
  color: r,
  colorShift: n = 0.05,
  audioTrack: o,
  themeMode: i,
  className: a,
  ref: x,
  ...f
}) {
  const { speed: y, scale: h, amplitude: b, frequency: R, brightness: m } = Dn(e, o);
  return /* @__PURE__ */ d(
    wt,
    {
      ref: x,
      blur: 0.2,
      color: r,
      colorShift: n,
      speed: y,
      scale: h,
      themeMode: i,
      amplitude: b,
      frequency: R,
      brightness: m,
      className: W(
        Gn({ size: t }),
        "overflow-hidden rounded-full",
        a
      ),
      ...f
    }
  );
}
const xo = ({
  text: t,
  confirmationText: e,
  onConfirm: r,
  cancelText: n,
  onCancel: o
}) => /* @__PURE__ */ M("div", { className: "flex flex-col gap-2", children: [
  t && /* @__PURE__ */ d("p", { children: t }),
  /* @__PURE__ */ M("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ d(
      be,
      {
        type: "button",
        variant: "default",
        size: "md",
        icon: sr,
        onClick: r,
        label: e
      }
    ),
    /* @__PURE__ */ d(
      be,
      {
        type: "button",
        variant: "outline",
        size: "md",
        onClick: o,
        label: n
      }
    )
  ] })
] }), Wn = ae({
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
}), yt = ae({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), Xn = ae({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), me = ae({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), Yn = ({
  description: t,
  isRevealed: e,
  onAskOne: r
}) => {
  const n = et(), o = tt();
  return /* @__PURE__ */ M(He, { children: [
    t && /* @__PURE__ */ d("span", { className: W(Xn(), "truncate"), children: t }),
    /* @__PURE__ */ d(lr, { children: r && e && /* @__PURE__ */ d(
      pe.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: o ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ d(
          it,
          {
            size: "md",
            label: n.ai.ask,
            onClick: (i) => {
              i.stopPropagation(), r();
            }
          }
        )
      }
    ) })
  ] });
}, $n = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), jn = ({ balance: t }) => /* @__PURE__ */ d(
  hr,
  {
    amount: t.amount,
    percentage: t.percentage ?? void 0,
    invertStatus: t.invertStatus,
    hint: t.hint
  }
), qn = (t) => {
  const {
    heading: e,
    label: r,
    content: n,
    shouldFadeContent: o = !1,
    fadeTransition: i
  } = t;
  return /* @__PURE__ */ M("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ d("span", { className: W(yt()), children: e }),
    /* @__PURE__ */ M(
      pe.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: o ? 0 : 1 },
        transition: i,
        children: [
          n === "person" && /* @__PURE__ */ M("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ d(
              cr,
              {
                firstName: t.avatar.firstName,
                lastName: t.avatar.lastName,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ d("span", { className: W(me()), children: r })
          ] }),
          n === "people" && /* @__PURE__ */ d(
            dr,
            {
              type: "person",
              avatars: t.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ M("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ d(
              ur,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ d("span", { className: W(me()), children: r })
          ] }),
          n === "company" && /* @__PURE__ */ M("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ d(
              mr,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ d("span", { className: W(me()), children: r })
          ] }),
          n === "alert" && /* @__PURE__ */ d(fr, { text: t.alertLabel, level: t.level }),
          n === "balance" && /* @__PURE__ */ d(jn, { balance: t.balance })
        ]
      }
    ),
    r && !$n.has(n) && /* @__PURE__ */ d(
      pe.span,
      {
        className: W(me()),
        animate: { opacity: o ? 0 : 1 },
        transition: i,
        children: r
      }
    )
  ] });
}, Tt = {
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
function Hn(t, e) {
  const r = t[0]?.value ?? 0, n = t[t.length - 1]?.value ?? 0, o = Math.sign(n - r), i = e ? o * -1 : o;
  return i > 0 ? "positive" : i < 0 ? "negative" : "neutral";
}
const Kn = ({
  cx: t,
  cy: e,
  index: r,
  dataLength: n,
  color: o
}) => r !== n - 1 || t == null || e == null ? null : /* @__PURE__ */ d("circle", { cx: t, cy: e, r: 2, fill: o, stroke: "none" }), Zn = ({
  label: t,
  direction: e
}) => {
  const r = Tt[e];
  return /* @__PURE__ */ d(
    "span",
    {
      className: W(
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
}, Qn = ({
  data: t,
  label: e,
  invertStatus: r
}) => {
  const o = `sparkline-gradient-${Vt().replace(/:/g, "")}`, i = Hn(t, r), a = Tt[i];
  return /* @__PURE__ */ d("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ M(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${i} trend`,
      children: [
        /* @__PURE__ */ d(pr, { width: "100%", height: "100%", children: /* @__PURE__ */ M(
          gr,
          {
            data: t,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ d("defs", { children: /* @__PURE__ */ M("linearGradient", { id: o, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ d("stop", { offset: "5%", stopColor: a.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ d("stop", { offset: "95%", stopColor: a.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ d(vr, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ d(
                xr,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: a.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${o})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (x) => /* @__PURE__ */ Bt(
                    Kn,
                    {
                      ...x,
                      key: x.index,
                      dataLength: t.length,
                      color: a.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ d(Zn, { label: e, direction: i })
      ]
    }
  ) });
}, At = de(
  (t, e) => {
    const {
      description: r,
      heading: n,
      label: o,
      selected: i = !1,
      onClick: a,
      onAskOne: x,
      className: f,
      ...y
    } = t, [h, b] = ce(!1), [R, m] = ce(!1), T = h || R, N = tt(), p = T && !!x, S = {
      duration: N ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, L = () => {
      a?.();
    }, U = (w) => {
      w.currentTarget === w.target && (w.key === "Enter" || w.key === " ") && (w.preventDefault(), a?.());
    };
    return /* @__PURE__ */ M("div", { className: "relative", children: [
      i && /* @__PURE__ */ M(He, { children: [
        /* @__PURE__ */ d(
          "div",
          {
            "data-testid": "selected-border",
            className: W(
              "absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient"
            )
          }
        ),
        /* @__PURE__ */ d(
          "div",
          {
            "aria-hidden": !0,
            className: W(
              "pointer-events-none absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient opacity-80 blur-sm"
            )
          }
        )
      ] }),
      /* @__PURE__ */ M(
        "div",
        {
          ref: e,
          role: a ? "button" : void 0,
          tabIndex: a ? 0 : void 0,
          className: W(
            Wn({ selected: i }),
            i && "relative border-transparent",
            a && "cursor-pointer select-none",
            a && br(),
            f
          ),
          onClick: a ? L : void 0,
          onKeyDown: a ? U : void 0,
          onMouseEnter: () => b(!0),
          onMouseLeave: () => b(!1),
          onFocus: () => m(!0),
          onBlur: () => m(!1),
          children: [
            /* @__PURE__ */ d(
              Yn,
              {
                description: r,
                isRevealed: T,
                onAskOne: x
              }
            ),
            y.content === "sparkline" ? /* @__PURE__ */ M("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ d("span", { className: W(yt()), children: n }),
              /* @__PURE__ */ d(
                pe.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: p ? 0 : 1 },
                  transition: S,
                  children: /* @__PURE__ */ d(
                    Qn,
                    {
                      data: y.data,
                      label: o ?? "",
                      invertStatus: y.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ d(
              qn,
              {
                heading: n,
                label: o,
                shouldFadeContent: p,
                fadeTransition: S,
                ...y
              }
            )
          ]
        }
      )
    ] });
  }
);
At.displayName = "F0AiInsightCardInternal";
const Jn = ["className"], Et = de((t, e) => {
  const r = Jn.reduce((n, o) => {
    const { [o]: i, ...a } = n;
    return a;
  }, t);
  return /* @__PURE__ */ d(At, { ref: e, ...r });
});
Et.displayName = "F0AiInsightCard";
const eo = () => /* @__PURE__ */ M(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ d(le, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ M("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ M("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ d(le, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ d(le, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ M("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ d(le, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ d(le, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), bo = wr(
  yr(Et, eo)
), wo = [
  "text",
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance",
  "sparkline"
];
function to({ dataset: t }) {
  return t.columns?.length ? /* @__PURE__ */ d(
    pn,
    {
      marginY: "sm",
      overflow: "auto",
      borderRadius: "lg",
      border: "default",
      borderColor: "secondary",
      children: /* @__PURE__ */ M("table", { className: "w-full border-collapse text-sm", children: [
        /* @__PURE__ */ d("thead", { className: "bg-f1-background-secondary", children: /* @__PURE__ */ d("tr", { children: t.columns.map((e) => /* @__PURE__ */ d(
          "th",
          {
            className: "px-3 py-2 text-left font-semibold text-f1-foreground",
            children: t.columnLabels?.[e] ?? e
          },
          e
        )) }) }),
        /* @__PURE__ */ d("tbody", { children: t.rows.map((e, r) => /* @__PURE__ */ d(
          "tr",
          {
            className: "border-0 border-t border-solid border-f1-border-secondary",
            children: t.columns.map((n) => {
              const o = e[n];
              return /* @__PURE__ */ d("td", { className: "px-3 py-2 text-f1-foreground", children: o == null ? "" : String(o) }, n);
            })
          },
          r
        )) })
      ] })
    }
  ) : null;
}
to.displayName = "F0AiTableCard";
export {
  uo as A,
  fo as F,
  co as a,
  ho as b,
  po as c,
  gn as d,
  lo as e,
  go as f,
  vo as g,
  xo as h,
  bo as i,
  wo as j,
  to as k,
  it as l,
  Hr as m,
  pn as n,
  so as o,
  mo as u
};
