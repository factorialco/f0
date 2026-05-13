import { defaultTranslations as lt } from "./i18n-provider-defaults.js";
import { jsx as f, jsxs as P, Fragment as Xe } from "react/jsx-runtime";
import { useInsertionEffect as ut, forwardRef as me, createContext as Ye, useContext as we, useState as ie, useRef as O, useCallback as $e, useMemo as be, useEffect as de, useId as dt, createElement as ft } from "react";
import { r as ht, k as mt, m as pt, l as vt, n as qe, o as gt, p as wt, q as bt, s as yt, t as xt, v as je, w as Tt, V as Et, x as At, y as Rt, z as Ct, S as St, H as Ft, A as fe, B as Lt, D as It, E as Nt, G as _t, u as He, J as W, K as Pt, O as Te, L as ge, M as Ut, N as ae, P as Mt, Q as Ke, R as Bt, T as he, U as Vt, W as Ot, X as Dt, Y as Gt, Z as kt, _ as zt, $ as Wt, a0 as Xt, a1 as Yt, a2 as $t, a3 as qt, a4 as jt, a5 as Ht, a6 as oe } from "./F0AiChat-zhQznGHa.js";
import { useTrackVolume as Kt } from "@livekit/components-react";
function Zt(t, e, r) {
  ut(() => t.on(e, r), [t, e, r]);
}
function ye(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Ze(t, e, r, n) {
  return typeof t == "string" && ye(e) ? ht(t, r, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function Qt(t, e, r) {
  return t * (e + 1);
}
function Ee(t, e, r, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : n.get(e) ?? t;
}
const Jt = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function Qe(t, e) {
  return mt(t) ? t[Jt(0, t.length, e)] : t;
}
function er(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    o.at > e && o.at < r && (vt(t, o), n--);
  }
}
function tr(t, e, r, n, o, i) {
  er(t, o, i);
  for (let s = 0; s < e.length; s++)
    t.push({
      value: e[s],
      at: pt(o, i, n[s]),
      easing: Qe(r, s)
    });
}
function rr(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] = t[r] / (e + 1);
}
function nr(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const or = "easeInOut", ir = 20;
function ar(t, { defaultTransition: e = {}, ...r } = {}, n, o) {
  const i = e.duration || 0.3, s = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), h = {}, x = /* @__PURE__ */ new Map();
  let m = 0, b = 0, R = 0;
  for (let u = 0; u < t.length; u++) {
    const T = t[u];
    if (typeof T == "string") {
      x.set(T, b);
      continue;
    } else if (!Array.isArray(T)) {
      x.set(T.name, Ee(b, T.at, m, x));
      continue;
    }
    let [I, p, S = {}] = T;
    S.at !== void 0 && (b = Ee(b, S.at, m, x));
    let L = 0;
    const M = (y, E, N, U = 0, G = 0) => {
      const C = sr(y), { delay: v = 0, times: _ = gt(C), type: D = "keyframes", repeat: Y, repeatType: X, repeatDelay: K = 0, ...$ } = E;
      let { ease: B = e.ease || "easeOut", duration: F } = E;
      const V = typeof v == "function" ? v(U, G) : v, Z = C.length, te = yt(D) ? D : o?.[D];
      if (Z <= 2 && te) {
        let Q = 100;
        if (Z === 2 && ur(C)) {
          const ee = C[1] - C[0];
          Q = Math.abs(ee);
        }
        const J = { ...$ };
        F !== void 0 && (J.duration = xt(F));
        const re = wt(J, Q, te);
        B = re.ease, F = re.duration;
      }
      F ?? (F = i);
      const H = b + V;
      _.length === 1 && _[0] === 0 && (_[1] = 1);
      const se = _.length - C.length;
      if (se > 0 && bt(_, se), C.length === 1 && C.unshift(null), Y) {
        je(Y < ir, "Repeat count too high, must be less than 20"), F = Qt(F, Y);
        const Q = [...C], J = [..._];
        B = Array.isArray(B) ? [...B] : [B];
        const re = [...B];
        for (let ee = 0; ee < Y; ee++) {
          C.push(...Q);
          for (let a = 0; a < Q.length; a++)
            _.push(J[a] + (ee + 1)), B.push(a === 0 ? "linear" : Qe(re, a - 1));
        }
        rr(_, Y);
      }
      const ce = H + F;
      tr(N, C, B, _, H, ce), L = Math.max(V + F, L), R = Math.max(ce, R);
    };
    if (qe(I)) {
      const y = Ae(I, w);
      M(p, S, Re("default", y));
    } else {
      const y = Ze(I, p, n, h), E = y.length;
      for (let N = 0; N < E; N++) {
        p = p, S = S;
        const U = y[N], G = Ae(U, w);
        for (const C in p)
          M(p[C], cr(S, C), Re(C, G), N, E);
      }
    }
    m = b, b += L;
  }
  return w.forEach((u, T) => {
    for (const I in u) {
      const p = u[I];
      p.sort(nr);
      const S = [], L = [], M = [];
      for (let E = 0; E < p.length; E++) {
        const { at: N, value: U, easing: G } = p[E];
        S.push(U), L.push(Tt(0, R, N)), M.push(G || "easeOut");
      }
      L[0] !== 0 && (L.unshift(0), S.unshift(S[0]), M.unshift(or)), L[L.length - 1] !== 1 && (L.push(1), S.push(null)), s.has(T) || s.set(T, {
        keyframes: {},
        transition: {}
      });
      const y = s.get(T);
      y.keyframes[I] = S, y.transition[I] = {
        ...e,
        duration: R,
        ease: M,
        times: L,
        ...r
      };
    }
  }), s;
}
function Ae(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function Re(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function sr(t) {
  return Array.isArray(t) ? t : [t];
}
function cr(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const lr = (t) => typeof t == "number", ur = (t) => t.every(lr);
function dr(t, e) {
  return t in e;
}
class fr extends Et {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, r) {
    if (dr(r, e)) {
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
    return At();
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
function hr(t) {
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
  }, r = Rt(t) && !Ct(t) ? new St(e) : new Ft(e);
  r.mount(t), fe.set(t, r);
}
function mr(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, r = new fr(e);
  r.mount(t), fe.set(t, r);
}
function pr(t, e) {
  return qe(t) || typeof t == "number" || typeof t == "string" && !ye(e);
}
function Je(t, e, r, n) {
  const o = [];
  if (pr(t, e))
    o.push(Lt(t, ye(e) && e.default || e, r && (r.default || r)));
  else {
    const i = Ze(t, e, n), s = i.length;
    je(!!s, "No valid elements provided.");
    for (let w = 0; w < s; w++) {
      const h = i[w], x = h instanceof Element ? hr : mr;
      fe.has(h) || x(h);
      const m = fe.get(h), b = { ...r };
      "delay" in b && typeof b.delay == "function" && (b.delay = b.delay(w, s)), o.push(...It(m, { ...e, transition: b }, {}));
    }
  }
  return o;
}
function vr(t, e, r) {
  const n = [];
  return ar(t, e, r, { spring: Nt }).forEach(({ keyframes: i, transition: s }, w) => {
    n.push(...Je(w, i, s));
  }), n;
}
class gr {
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
class wr extends gr {
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function br(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function yr(t) {
  function e(r, n, o) {
    let i = [];
    return br(r) ? i = vr(r, n, t) : i = Je(r, n, o, t), new wr(i);
  }
  return e;
}
const xr = yr(), Tr = (t, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ f(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Er = me(Tr), Ar = [
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
], et = me((t, e) => {
  const r = Ar.reduce((n, o) => {
    const { [o]: i, ...s } = n;
    return s;
  }, t);
  return /* @__PURE__ */ f(
    _t,
    {
      ...r,
      variant: "ai",
      ref: e,
      iconRotate: t.icon == Er
    }
  );
});
et.displayName = "AIButton";
const vn = ["xs", "sm", "md", "lg"], gn = [
  "inProgress",
  "executing",
  "completed"
], wn = {
  ai: lt.ai
}, tt = Ye(null);
function bn({
  children: t,
  translations: e
}) {
  return /* @__PURE__ */ f(tt.Provider, { value: e, children: t });
}
function yn() {
  const t = we(tt);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
const xe = Ye(null);
function xn({
  children: t
}) {
  const [e, r] = ie(0), n = O([]), o = $e(
    (s) => {
      const w = n.current, h = w.findIndex(
        (m) => m.formName === s.formName && m.customFieldName === s.customFieldName
      ), x = s;
      h >= 0 ? w[h] = x : w.push(x), r((m) => m + 1);
    },
    []
  ), i = be(
    () => ({
      formatters: [...n.current],
      setFormCardValueFormatter: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, e]
  );
  return /* @__PURE__ */ f(xe.Provider, { value: i, children: t });
}
function Tn(t) {
  const r = we(xe)?.formatters;
  return be(() => !r || r.length === 0 ? null : (n, o, i) => {
    let s, w = -1;
    for (const h of r) {
      const x = h.formName === void 0 || h.formName === t, m = h.customFieldName === void 0 || h.customFieldName === i.customFieldName;
      if (!x || !m) continue;
      let b = 0;
      h.formName !== void 0 && (b += 2), h.customFieldName !== void 0 && (b += 1), b > w && (w = b, s = h);
    }
    if (s)
      return s.format(o, { key: n, ...i });
  }, [r, t]);
}
function En() {
  const t = we(xe);
  if (!t)
    throw new Error(
      "useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider"
    );
  return t.setFormCardValueFormatter;
}
function Rr({
  module: t,
  title: e,
  description: r,
  onOpen: n,
  showOpenButton: o = !0,
  onClose: i,
  isActive: s,
  children: w
}) {
  const h = He();
  return /* @__PURE__ */ P(
    "div",
    {
      className: W(
        "flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2 cursor-pointer",
        s ? "border-f1-border-hover" : "border-f1-border-secondary hover:border-f1-border-hover"
      ),
      onClick: s ? i : n,
      children: [
        /* @__PURE__ */ P("div", { className: "flex w-full min-w-0 flex-row items-center gap-3", children: [
          !!t && /* @__PURE__ */ f(Pt, { module: t, size: "lg" }),
          /* @__PURE__ */ P("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ f(Te, { className: "text-lg font-semibold text-f1-foreground", children: e }),
            /* @__PURE__ */ f(Te, { className: "text-base text-f1-foreground-secondary", children: r })
          ] }),
          o && /* @__PURE__ */ f(
            ge,
            {
              variant: "neutral",
              size: "md",
              label: s ? h.actions.close : h.ai.reportCard.openButton,
              onClick: s ? i : n
            }
          )
        ] }),
        w
      ]
    }
  );
}
Rr.displayName = "F0CanvasCard";
function Ce(t, e, r, n) {
  const o = Math.max(1, Math.min(t, e)), i = Math.min(r, 20), w = Math.min(i + n, o), h = Math.min(w, Math.floor(t / 2)), x = Math.min(w, Math.floor(e / 2)), m = (H) => H / t * 2 - 1, b = (H) => H / e * 2 - 1, R = 0, u = t, T = 0, I = e, p = h, S = t - h, L = x, M = e - x, y = m(R), E = m(u), N = b(T), U = b(I), G = m(p), C = m(S), v = b(L), _ = b(M), D = 0, Y = 0, X = 1, K = 1, $ = h / t, B = 1 - h / t, F = x / e, V = 1 - x / e, Z = new Float32Array([
    // Top strip
    y,
    N,
    E,
    N,
    y,
    v,
    y,
    v,
    E,
    N,
    E,
    v,
    // Bottom strip
    y,
    _,
    E,
    _,
    y,
    U,
    y,
    U,
    E,
    _,
    E,
    U,
    // Left strip
    y,
    v,
    G,
    v,
    y,
    _,
    y,
    _,
    G,
    v,
    G,
    _,
    // Right strip
    C,
    v,
    E,
    v,
    C,
    _,
    C,
    _,
    E,
    v,
    E,
    _
  ]), te = new Float32Array([
    // Top strip
    D,
    Y,
    X,
    Y,
    D,
    F,
    D,
    F,
    X,
    Y,
    X,
    F,
    // Bottom strip
    D,
    V,
    X,
    V,
    D,
    K,
    D,
    K,
    X,
    V,
    X,
    K,
    // Left strip
    D,
    F,
    $,
    F,
    D,
    V,
    D,
    V,
    $,
    F,
    $,
    V,
    // Right strip
    B,
    F,
    X,
    F,
    B,
    V,
    B,
    V,
    X,
    F,
    X,
    V
  ]);
  return { positions: Z, uvs: te };
}
function Se(t, e, r) {
  const n = t.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  if (t.shaderSource(n, r), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(n) || "Unknown shader error";
    throw t.deleteShader(n), new Error(o);
  }
  return n;
}
function Cr(t, e, r) {
  const n = Se(t, t.VERTEX_SHADER, e), o = Se(t, t.FRAGMENT_SHADER, r), i = t.createProgram();
  if (!i) throw new Error("Failed to create program");
  if (t.attachShader(i, n), t.attachShader(i, o), t.linkProgram(i), !t.getProgramParameter(i, t.LINK_STATUS)) {
    const s = t.getProgramInfoLog(i) || "Unknown link error";
    throw t.deleteProgram(i), t.deleteShader(n), t.deleteShader(o), new Error(s);
  }
  return t.deleteShader(n), t.deleteShader(o), i;
}
const Sr = `#version 300 es
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
`, Fr = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, Lr = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function Ir(t) {
  const e = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${t}`);
  const [, r, n, o] = e;
  return [parseInt(r) / 255, parseInt(n) / 255, parseInt(o) / 255];
}
class An {
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
    const { gl: o, program: i, vao: s, positionBuffer: w, uvBuffer: h, uResolution: x } = this.glr, m = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, b = Math.max(1, Math.floor(e * m)), R = Math.max(1, Math.floor(r * m));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${r}px`, (this.canvas.width !== b || this.canvas.height !== R) && (this.canvas.width = b, this.canvas.height = R), o.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(o, "resize: after viewport setup");
    const { positions: u, uvs: T } = Ce(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * m,
      this.options.glowWidth * m
    );
    o.bindVertexArray(s), o.bindBuffer(o.ARRAY_BUFFER, w), o.bufferData(o.ARRAY_BUFFER, u, o.STATIC_DRAW);
    const I = o.getAttribLocation(i, "aPosition");
    o.enableVertexAttribArray(I), o.vertexAttribPointer(I, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after position buffer update"), o.bindBuffer(o.ARRAY_BUFFER, h), o.bufferData(o.ARRAY_BUFFER, T, o.STATIC_DRAW);
    const p = o.getAttribLocation(i, "aUV");
    o.enableVertexAttribArray(p), o.vertexAttribPointer(p, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after UV buffer update"), o.useProgram(i), o.uniform2f(x, this.canvas.width, this.canvas.height), o.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * m), o.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * m), o.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * m), this.checkGLError(o, "resize: after uniform updates");
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
    const r = Cr(e, Fr, Sr);
    this.checkGLError(e, "setupGL: after createProgram");
    const n = e.createVertexArray();
    e.bindVertexArray(n), this.checkGLError(e, "setupGL: after VAO creation");
    const o = this.canvas.width || 2, i = this.canvas.height || 2, { positions: s, uvs: w } = Ce(
      o,
      i,
      this.options.borderWidth,
      this.options.glowWidth
    ), h = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, h), e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW);
    const x = e.getAttribLocation(r, "aPosition");
    e.enableVertexAttribArray(x), e.vertexAttribPointer(x, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const m = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, m), e.bufferData(e.ARRAY_BUFFER, w, e.STATIC_DRAW);
    const b = e.getAttribLocation(r, "aUV");
    e.enableVertexAttribArray(b), e.vertexAttribPointer(b, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const R = e.getUniformLocation(r, "uResolution"), u = e.getUniformLocation(r, "uTime"), T = e.getUniformLocation(r, "uBorderWidth"), I = e.getUniformLocation(r, "uGlowWidth"), p = e.getUniformLocation(r, "uBorderRadius"), S = e.getUniformLocation(r, "uColors"), L = e.getUniformLocation(r, "uGlowExponent"), M = e.getUniformLocation(r, "uGlowFactor");
    e.useProgram(r), e.uniform1f(T, this.options.borderWidth), e.uniform1f(I, this.options.glowWidth), e.uniform1f(p, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(L, 2), e.uniform1f(M, 1.8)) : (e.uniform1f(L, 1), e.uniform1f(M, 1));
    const y = (this.options.colors || Lr).map(Ir);
    for (let E = 0; E < y.length; E++)
      e.uniform3f(
        e.getUniformLocation(r, `uColors[${E}]`),
        ...y[E]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: r,
      vao: n,
      positionBuffer: h,
      uvBuffer: m,
      uResolution: R,
      uTime: u,
      uBorderWidth: T,
      uGlowWidth: I,
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
const Fe = ["lowp", "mediump", "highp"], Nr = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, _r = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, Le = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Ie = "iTime", Ne = "iTimeDelta", _e = "iDate", Pe = "iFrame", Ue = "iMouse", Me = "iResolution", Pr = "iChannel", Be = "iChannelResolution", Ve = "iDeviceOrientation";
function Ur(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function Mr(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function Br(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const Vr = (t, e, r, n) => {
  if (Br(r, n))
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
}, Or = (t) => {
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
        j(
          `The uniform type "${t}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, ve = 9729, Oe = 9728, Dr = 9987, De = 33071, Ge = 10497;
class Gr {
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
    const { gl: o } = this, i = 0, s = o.RGBA, w = o.RGBA, h = o.UNSIGNED_BYTE;
    o.bindTexture(o.TEXTURE_2D, e), o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, n), o.texImage2D(
      o.TEXTURE_2D,
      i,
      s,
      w,
      h,
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
    j(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: r } = this, {
      url: n,
      wrapS: o,
      wrapT: i,
      minFilter: s,
      magFilter: w,
      flipY: h = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          j(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const x = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), m = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (x === null && m === null)
      return Promise.reject(
        new Error(
          j(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: o, wrapT: i, minFilter: s, magFilter: w, flipY: h });
    const b = 0, R = r.RGBA, u = 1, T = 1, I = 0, p = r.RGBA, S = r.UNSIGNED_BYTE, L = new Uint8Array([255, 255, 255, 0]), M = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, M), r.texImage2D(
      r.TEXTURE_2D,
      b,
      R,
      u,
      T,
      I,
      p,
      S,
      L
    ), m) {
      const U = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = M, this.source = U, this.isVideo = !0, U.play().then(() => this);
    }
    async function y() {
      return new Promise((U, G) => {
        const C = new Image();
        C.crossOrigin = "anonymous", C.onload = () => {
          U(C);
        }, C.onerror = () => {
          G(new Error(j(`failed loading url: ${n}`)));
        }, C.src = n ?? "";
      });
    }
    let E = await y(), N = (E.width & E.width - 1) === 0 && (E.height & E.height - 1) === 0;
    return (e.wrapS !== De || e.wrapT !== De || e.minFilter !== Oe && e.minFilter !== ve) && !N && (E = this.makePowerOf2(E), N = !0), r.bindTexture(r.TEXTURE_2D, M), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, h), r.texImage2D(
      r.TEXTURE_2D,
      b,
      R,
      p,
      S,
      E
    ), N && e.minFilter !== Oe && e.minFilter !== ve && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_S,
      this.wrapS || Ge
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_T,
      this.wrapT || Ge
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MIN_FILTER,
      this.minFilter || Dr
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MAG_FILTER,
      this.magFilter || ve
    ), this._webglTexture = M, this.source = E, this.isVideo = !1, this.isLoaded = !0, this.width = E.width || 0, this.height = E.height || 0, this;
  };
}
const j = (t) => `react-shaders: ${t}`, ke = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, ze = (t, e, r) => t * (1 - r) + e * r, kr = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function zr({
  fs: t,
  vs: e = Le,
  textures: r = [],
  uniforms: n,
  clearColor: o = [0, 0, 0, 1],
  precision: i = "highp",
  style: s,
  contextAttributes: w = {},
  lerp: h = 1,
  devicePixelRatio: x = 1,
  onDoneLoadingTextures: m,
  onError: b = console.error,
  onWarning: R = console.warn
}) {
  const u = O(null), T = O(null), I = O(null), p = O(null), S = O(void 0), L = O(void 0), M = O(!1), y = O(void 0), E = O(0), N = O([0, 0]), U = O([]), G = O(0), C = O(void 0), v = O({
    [Ie]: { type: "float", isNeeded: !1, value: 0 },
    [Ne]: { type: "float", isNeeded: !1, value: 0 },
    [_e]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Ue]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Me]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Pe]: { type: "int", isNeeded: !1, value: 0 },
    [Ve]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), _ = O(n), D = (a, l) => {
    const c = "width" in a ? a.width ?? 0 : 0, g = "height" in a ? a.height ?? 0 : 0, d = v.current.iChannelResolution;
    if (!d) return;
    const A = Array.isArray(d.value) ? d.value : d.value = [];
    A[l * 3] = c * x, A[l * 3 + 1] = g * x, A[l * 3 + 2] = 0;
  }, Y = () => {
    u.current && (T.current = u.current.getContext("webgl", w) || u.current.getContext(
      "experimental-webgl",
      w
    ), T.current?.getExtension("OES_standard_derivatives"), T.current?.getExtension("EXT_shader_texture_lod"));
  }, X = () => {
    const a = T.current;
    I.current = a?.createBuffer() ?? null, a?.bindBuffer(a.ARRAY_BUFFER, I.current);
    const l = [
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
    a?.bufferData(a.ARRAY_BUFFER, new Float32Array(l), a.STATIC_DRAW);
  }, K = ({
    alpha: a,
    beta: l,
    gamma: c
  }) => {
    v.current.iDeviceOrientation.value = [
      a ?? 0,
      l ?? 0,
      c ?? 0,
      window.orientation ?? 0
    ];
  }, $ = (a) => {
    const [l = 0, c = 0] = ke(a), g = l - (y.current?.left ?? 0) - window.pageXOffset, d = (y.current?.height ?? 0) - c - (y.current?.top ?? 0) - window.pageYOffset;
    M.current = !0;
    const A = Array.isArray(v.current.iMouse?.value) ? v.current.iMouse.value : void 0;
    A && (A[2] = g, A[3] = d), N.current[0] = g, N.current[1] = d;
  }, B = (a) => {
    y.current = u.current?.getBoundingClientRect();
    const [l = 0, c = 0] = ke(a), g = l - (y.current?.left ?? 0), d = (y.current?.height ?? 0) - c - (y.current?.top ?? 0);
    if (h !== 1)
      N.current[0] = g, N.current[1] = d;
    else {
      const A = Array.isArray(v.current.iMouse?.value) ? v.current.iMouse.value : void 0;
      A && (A[0] = g, A[1] = d);
    }
  }, F = () => {
    const a = Array.isArray(v.current.iMouse?.value) ? v.current.iMouse.value : void 0;
    a && (a[2] = 0, a[3] = 0);
  }, V = () => {
    const a = T.current;
    if (!a) return;
    y.current = u.current?.getBoundingClientRect();
    const l = x, c = Math.floor(
      (y.current?.width ?? 1) * l
    ), g = Math.floor(
      (y.current?.height ?? 1) * l
    );
    if (a.canvas.width = c, a.canvas.height = g, v.current.iResolution?.isNeeded && p.current) {
      const d = a.getUniformLocation(
        p.current,
        Me
      );
      a.uniform2fv(d, [a.canvas.width, a.canvas.height]);
    }
  }, Z = (a, l) => {
    const c = T.current;
    if (!c) return null;
    const g = c.createShader(a);
    if (!g) return null;
    if (c.shaderSource(g, l), c.compileShader(g), !c.getShaderParameter(g, c.COMPILE_STATUS)) {
      R?.(j(`Error compiling the shader:
${l}`));
      const d = c.getShaderInfoLog(g);
      c.deleteShader(g), b?.(j(`Shader compiler log: ${d}`));
    }
    return g;
  }, te = (a, l) => {
    const c = T.current;
    if (!c) return;
    const g = Z(c.FRAGMENT_SHADER, a), d = Z(c.VERTEX_SHADER, l);
    if (p.current = c.createProgram(), !(!p.current || !d || !g)) {
      if (c.attachShader(p.current, d), c.attachShader(p.current, g), c.linkProgram(p.current), !c.getProgramParameter(p.current, c.LINK_STATUS)) {
        b?.(
          j(
            `Unable to initialize the shader program: ${c.getProgramInfoLog(
              p.current
            )}`
          )
        );
        return;
      }
      c.useProgram(p.current), S.current = c.getAttribLocation(
        p.current,
        "aVertexPosition"
      ), c.enableVertexAttribArray(S.current);
    }
  }, H = () => {
    if (n)
      for (const a of Object.keys(n)) {
        const l = n[a];
        if (!l) continue;
        const { value: c, type: g } = l, d = Or(g);
        if (!d) continue;
        const A = {};
        if (Ur(g, c)) {
          const k = g.length, q = Number.parseInt(g.charAt(k - 3)), ne = Math.floor(c.length / (q * q));
          c.length > q * q && (A.arraySize = `[${ne}]`);
        } else Mr(g, c) && (A.arraySize = `[${Math.floor(c.length / Number.parseInt(g.charAt(0)))}]`);
        v.current[a] = {
          type: d,
          isNeeded: !1,
          value: c,
          ...A
        };
      }
  }, se = () => {
    const a = T.current;
    if (a)
      if (r && r.length > 0) {
        v.current[`${Be}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const l = r.map(
          (c, g) => (v.current[`${Pr}${g}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, D(c, g), U.current[g] = new Gr(a), U.current[g]?.load(c).then((d) => {
            D(d, g);
          }))
        );
        Promise.all(l).then(() => {
          m && m();
        }).catch((c) => {
          b?.(c), m && m();
        });
      } else m && m();
  }, ce = (a) => {
    const l = Fe.includes(i ?? "highp"), c = `precision ${l ? i : Fe[1]} float;
`;
    l || R?.(
      j(
        `wrong precision type ${i}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let g = c.concat(`#define DPR ${x.toFixed(1)}
`).concat(a.replace(/texture\(/g, "texture2D("));
    for (const A of Object.keys(v.current))
      if (a.includes(A)) {
        const k = v.current[A];
        if (!k) continue;
        g = kr(
          g,
          `uniform ${k.type} ${A}${k.arraySize || ""}; 
`,
          g.lastIndexOf(c) + c.length
        ), k.isNeeded = !0;
      }
    return a.includes("mainImage") && (g = g.concat(Nr)), g;
  }, Q = (a) => {
    const l = T.current;
    if (!l || !p.current) return;
    const c = G.current ? (a - G.current) / 1e3 : 0;
    G.current = a;
    const g = _.current;
    if (g)
      for (const d of Object.keys(g)) {
        const A = g[d];
        if (A && v.current[d]?.isNeeded) {
          if (!p.current) return;
          const k = l.getUniformLocation(
            p.current,
            d
          );
          if (!k) return;
          Vr(
            l,
            k,
            A.type,
            A.value
          );
        }
      }
    if (v.current.iMouse?.isNeeded) {
      const d = l.getUniformLocation(
        p.current,
        Ue
      );
      l.uniform4fv(d, v.current.iMouse.value);
    }
    if (v.current.iChannelResolution?.isNeeded) {
      const d = l.getUniformLocation(
        p.current,
        Be
      );
      l.uniform3fv(
        d,
        v.current.iChannelResolution.value
      );
    }
    if (v.current.iDeviceOrientation?.isNeeded) {
      const d = l.getUniformLocation(
        p.current,
        Ve
      );
      l.uniform4fv(
        d,
        v.current.iDeviceOrientation.value
      );
    }
    if (v.current.iTime?.isNeeded) {
      const d = l.getUniformLocation(
        p.current,
        Ie
      );
      l.uniform1f(d, E.current += c);
    }
    if (v.current.iTimeDelta?.isNeeded) {
      const d = l.getUniformLocation(
        p.current,
        Ne
      );
      l.uniform1f(d, c);
    }
    if (v.current.iDate?.isNeeded) {
      const d = /* @__PURE__ */ new Date(), A = d.getMonth() + 1, k = d.getDate(), q = d.getFullYear(), ne = d.getHours() * 60 * 60 + d.getMinutes() * 60 + d.getSeconds() + d.getMilliseconds() * 1e-3, pe = l.getUniformLocation(
        p.current,
        _e
      );
      l.uniform4fv(pe, [q, A, k, ne]);
    }
    if (v.current.iFrame?.isNeeded) {
      const d = l.getUniformLocation(
        p.current,
        Pe
      ), A = v.current.iFrame.value;
      l.uniform1i(d, A), v.current.iFrame.value = A + 1;
    }
    if (U.current.length > 0)
      for (let d = 0; d < U.current.length; d++) {
        const A = U.current[d];
        if (!A) return;
        const { isVideo: k, _webglTexture: q, source: ne, flipY: pe, isLoaded: st } = A;
        if (!st || !q || !ne) return;
        if (v.current[`iChannel${d}`]?.isNeeded) {
          if (!p.current) return;
          const ct = l.getUniformLocation(
            p.current,
            `iChannel${d}`
          );
          l.activeTexture(l.TEXTURE0 + d), l.bindTexture(l.TEXTURE_2D, q), l.uniform1i(ct, d), k && A.updateTexture(
            q,
            ne,
            pe
          );
        }
      }
  }, J = (a) => {
    const l = T.current;
    if (!l) return;
    l.viewport(0, 0, l.drawingBufferWidth, l.drawingBufferHeight), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT), l.bindBuffer(l.ARRAY_BUFFER, I.current), l.vertexAttribPointer(
      S.current ?? 0,
      3,
      l.FLOAT,
      !1,
      0,
      0
    ), Q(a), l.drawArrays(l.TRIANGLE_STRIP, 0, 4);
    const c = v.current.iMouse?.value;
    if (v.current.iMouse?.isNeeded && h !== 1 && Array.isArray(c)) {
      const g = c[0] ?? 0, d = c[1] ?? 0;
      c[0] = ze(g, N.current[0] ?? 0, h), c[1] = ze(d, N.current[1] ?? 0, h);
    }
    L.current = requestAnimationFrame(J);
  }, re = () => {
    const a = { passive: !0 };
    v.current.iMouse?.isNeeded && u.current && (u.current.addEventListener("mousemove", B, a), u.current.addEventListener("mouseout", F, a), u.current.addEventListener("mouseup", F, a), u.current.addEventListener("mousedown", $, a), u.current.addEventListener("touchmove", B, a), u.current.addEventListener("touchend", F, a), u.current.addEventListener("touchstart", $, a)), v.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      K,
      a
    ), u.current && (C.current = new ResizeObserver(V), C.current.observe(u.current), window.addEventListener("resize", V, a));
  }, ee = () => {
    const a = { passive: !0 };
    v.current.iMouse?.isNeeded && u.current && (u.current.removeEventListener("mousemove", B, a), u.current.removeEventListener("mouseout", F, a), u.current.removeEventListener("mouseup", F, a), u.current.removeEventListener("mousedown", $, a), u.current.removeEventListener("touchmove", B, a), u.current.removeEventListener("touchend", F, a), u.current.removeEventListener("touchstart", $, a)), v.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      K,
      a
    ), C.current && (C.current.disconnect(), window.removeEventListener("resize", V, a));
  };
  return de(() => {
    _.current = n;
  }, [n]), de(() => {
    const a = U.current;
    function l() {
      Y();
      const c = T.current;
      c && u.current && (c.clearColor(...o), c.clearDepth(1), c.enable(c.DEPTH_TEST), c.depthFunc(c.LEQUAL), c.viewport(0, 0, u.current.width, u.current.height), u.current.height = u.current.clientHeight, u.current.width = u.current.clientWidth, H(), se(), te(ce(t || _r), e || Le), X(), requestAnimationFrame(J), re(), V());
    }
    return requestAnimationFrame(l), () => {
      const c = T.current;
      if (c) {
        if (c.getExtension("WEBGL_lose_context")?.loseContext(), c.useProgram(null), c.deleteProgram(p.current ?? null), a.length > 0)
          for (const g of a)
            c.deleteTexture(g._webglTexture);
        p.current = null;
      }
      ee(), cancelAnimationFrame(L.current ?? 0);
    };
  }, []), /* @__PURE__ */ f(
    "canvas",
    {
      ref: u,
      style: { height: "100%", width: "100%", ...s }
    }
  );
}
const Wr = `
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
}`, Xr = 10, Yr = 2, $r = 0.5, qr = 0.2, jr = 1.5, z = {
  duration: 0.5,
  ease: "easeOut"
}, We = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function le(t) {
  const [e, r] = ie(t), n = Ut(t), o = O(null);
  Zt(n, "change", (s) => r(s));
  const i = $e(
    (s, w) => {
      o.current = xr(n, s, w);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: o, animate: i };
}
function Hr(t, e) {
  const [r, n] = ie(Xr), {
    value: o,
    animate: i,
    motionValue: s
  } = le(qr), { value: w, animate: h } = le(Yr), { value: x, animate: m } = le($r), { value: b, animate: R } = le(jr), u = Kt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return de(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), i(0.2, z), h(1.2, z), m(0.4, z), R(1, z);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), i(0.3, { type: "spring", duration: 1, bounce: 0.35 }), h(1, z), m(0.7, z), R([1.5, 2], We);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), i(0.3, z), h(0.5, z), m(1, z), R([0.5, 2.5], We);
        return;
      case "speaking":
        n(70), i(0.3, z), h(0.75, z), m(1.25, z), R(1.5, z);
        return;
    }
  }, [
    t,
    i,
    h,
    m,
    R
  ]), de(() => {
    t === "speaking" && u > 0 && !s.isAnimating() && i(0.2 + 0.2 * u, { duration: 0 });
  }, [
    t,
    u,
    s,
    i,
    h,
    m,
    R
  ]), {
    speed: r,
    scale: o,
    amplitude: w,
    frequency: x,
    brightness: b
  };
}
const Kr = ae({
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
function Zr(t) {
  const e = t.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, r, n, o] = e;
    return [r, n, o].map((s = "00") => parseInt(s, 16) / 255);
  }
}
function rt({
  shape: t = 1,
  speed: e = 1,
  amplitude: r = 0.5,
  frequency: n = 0.5,
  scale: o = 0.2,
  blur: i = 1,
  color: s = "#FF355E",
  colorShift: w = 1,
  brightness: h = 1,
  themeMode: x = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: m,
  className: b,
  ...R
}) {
  const u = be(() => Zr(s), [s]);
  return /* @__PURE__ */ f("div", { ref: m, className: b, ...R, children: /* @__PURE__ */ f(
    zr,
    {
      fs: Wr,
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
        uMix: { type: "1f", value: h },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: w },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: x === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: u ?? [0, 0.7, 1] }
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
rt.displayName = "AuraShader";
function Rn({
  size: t = "lg",
  state: e,
  color: r,
  colorShift: n = 0.05,
  audioTrack: o,
  themeMode: i,
  className: s,
  ref: w,
  ...h
}) {
  const { speed: x, scale: m, amplitude: b, frequency: R, brightness: u } = Hr(e, o);
  return /* @__PURE__ */ f(
    rt,
    {
      ref: w,
      blur: 0.2,
      color: r,
      colorShift: n,
      speed: x,
      scale: m,
      themeMode: i,
      amplitude: b,
      frequency: R,
      brightness: u,
      className: W(
        Kr({ size: t }),
        "overflow-hidden rounded-full",
        s
      ),
      ...h
    }
  );
}
const Cn = ({
  text: t,
  confirmationText: e,
  onConfirm: r,
  cancelText: n,
  onCancel: o
}) => /* @__PURE__ */ P("div", { className: "flex flex-col gap-2", children: [
  t && /* @__PURE__ */ f("p", { children: t }),
  /* @__PURE__ */ P("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ f(
      ge,
      {
        type: "button",
        variant: "default",
        size: "md",
        icon: Mt,
        onClick: r,
        label: e
      }
    ),
    /* @__PURE__ */ f(
      ge,
      {
        type: "button",
        variant: "outline",
        size: "md",
        onClick: o,
        label: n
      }
    )
  ] })
] }), Qr = ae({
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
}), nt = ae({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), Jr = ae({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), ue = ae({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), en = ({
  description: t,
  isRevealed: e,
  onAskOne: r
}) => {
  const n = He(), o = Ke();
  return /* @__PURE__ */ P(Xe, { children: [
    t && /* @__PURE__ */ f("span", { className: W(Jr(), "truncate"), children: t }),
    /* @__PURE__ */ f(Bt, { children: r && e && /* @__PURE__ */ f(
      he.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: o ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ f(
          et,
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
}, tn = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), rn = ({ balance: t }) => /* @__PURE__ */ f(
  zt,
  {
    amount: t.amount,
    percentage: t.percentage ?? void 0,
    invertStatus: t.invertStatus,
    hint: t.hint
  }
), nn = (t) => {
  const {
    heading: e,
    label: r,
    content: n,
    shouldFadeContent: o = !1,
    fadeTransition: i
  } = t;
  return /* @__PURE__ */ P("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ f("span", { className: W(nt()), children: e }),
    /* @__PURE__ */ P(
      he.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: o ? 0 : 1 },
        transition: i,
        children: [
          n === "person" && /* @__PURE__ */ P("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ f(
              Vt,
              {
                firstName: t.avatar.firstName,
                lastName: t.avatar.lastName,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ f("span", { className: W(ue()), children: r })
          ] }),
          n === "people" && /* @__PURE__ */ f(
            Ot,
            {
              type: "person",
              avatars: t.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ P("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ f(
              Dt,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ f("span", { className: W(ue()), children: r })
          ] }),
          n === "company" && /* @__PURE__ */ P("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ f(
              Gt,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ f("span", { className: W(ue()), children: r })
          ] }),
          n === "alert" && /* @__PURE__ */ f(kt, { text: t.alertLabel, level: t.level }),
          n === "balance" && /* @__PURE__ */ f(rn, { balance: t.balance })
        ]
      }
    ),
    r && !tn.has(n) && /* @__PURE__ */ f(
      he.span,
      {
        className: W(ue()),
        animate: { opacity: o ? 0 : 1 },
        transition: i,
        children: r
      }
    )
  ] });
}, ot = {
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
function on(t, e) {
  const r = t[0]?.value ?? 0, n = t[t.length - 1]?.value ?? 0, o = Math.sign(n - r), i = e ? o * -1 : o;
  return i > 0 ? "positive" : i < 0 ? "negative" : "neutral";
}
const an = ({
  cx: t,
  cy: e,
  index: r,
  dataLength: n,
  color: o
}) => r !== n - 1 || t == null || e == null ? null : /* @__PURE__ */ f("circle", { cx: t, cy: e, r: 2, fill: o, stroke: "none" }), sn = ({
  label: t,
  direction: e
}) => {
  const r = ot[e];
  return /* @__PURE__ */ f(
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
}, cn = ({
  data: t,
  label: e,
  invertStatus: r
}) => {
  const o = `sparkline-gradient-${dt().replace(/:/g, "")}`, i = on(t, r), s = ot[i];
  return /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ P(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${i} trend`,
      children: [
        /* @__PURE__ */ f(Wt, { width: "100%", height: "100%", children: /* @__PURE__ */ P(
          Xt,
          {
            data: t,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ P("linearGradient", { id: o, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ f("stop", { offset: "5%", stopColor: s.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ f("stop", { offset: "95%", stopColor: s.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ f(Yt, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ f(
                $t,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: s.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${o})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (w) => /* @__PURE__ */ ft(
                    an,
                    {
                      ...w,
                      key: w.index,
                      dataLength: t.length,
                      color: s.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ f(sn, { label: e, direction: i })
      ]
    }
  ) });
}, it = me(
  (t, e) => {
    const {
      description: r,
      heading: n,
      label: o,
      selected: i = !1,
      onClick: s,
      onAskOne: w,
      className: h,
      ...x
    } = t, [m, b] = ie(!1), [R, u] = ie(!1), T = m || R, I = Ke(), p = T && !!w, S = {
      duration: I ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, L = () => {
      s?.();
    }, M = (y) => {
      y.currentTarget === y.target && (y.key === "Enter" || y.key === " ") && (y.preventDefault(), s?.());
    };
    return /* @__PURE__ */ P("div", { className: "relative", children: [
      i && /* @__PURE__ */ P(Xe, { children: [
        /* @__PURE__ */ f(
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
        /* @__PURE__ */ f(
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
      /* @__PURE__ */ P(
        "div",
        {
          ref: e,
          role: s ? "button" : void 0,
          tabIndex: s ? 0 : void 0,
          className: W(
            Qr({ selected: i }),
            i && "relative border-transparent",
            s && "cursor-pointer select-none",
            s && qt(),
            h
          ),
          onClick: s ? L : void 0,
          onKeyDown: s ? M : void 0,
          onMouseEnter: () => b(!0),
          onMouseLeave: () => b(!1),
          onFocus: () => u(!0),
          onBlur: () => u(!1),
          children: [
            /* @__PURE__ */ f(
              en,
              {
                description: r,
                isRevealed: T,
                onAskOne: w
              }
            ),
            x.content === "sparkline" ? /* @__PURE__ */ P("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ f("span", { className: W(nt()), children: n }),
              /* @__PURE__ */ f(
                he.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: p ? 0 : 1 },
                  transition: S,
                  children: /* @__PURE__ */ f(
                    cn,
                    {
                      data: x.data,
                      label: o ?? "",
                      invertStatus: x.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ f(
              nn,
              {
                heading: n,
                label: o,
                shouldFadeContent: p,
                fadeTransition: S,
                ...x
              }
            )
          ]
        }
      )
    ] });
  }
);
it.displayName = "F0AiInsightCardInternal";
const ln = ["className"], at = me((t, e) => {
  const r = ln.reduce((n, o) => {
    const { [o]: i, ...s } = n;
    return s;
  }, t);
  return /* @__PURE__ */ f(it, { ref: e, ...r });
});
at.displayName = "F0AiInsightCard";
const un = () => /* @__PURE__ */ P(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ f(oe, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ P("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ P("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ f(oe, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ f(oe, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ P("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ f(oe, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ f(oe, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), Sn = jt(
  Ht(at, un)
), Fn = [
  "text",
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance",
  "sparkline"
];
export {
  bn as A,
  xn as F,
  wn as a,
  Tn as b,
  En as c,
  Rr as d,
  gn as e,
  An as f,
  Rn as g,
  Cn as h,
  Sn as i,
  Fn as j,
  et as k,
  Er as l,
  vn as o,
  yn as u
};
