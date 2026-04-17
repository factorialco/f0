import { defaultTranslations as At } from "./i18n-provider-defaults.js";
import { jsx as c, jsxs as F, Fragment as Ze } from "react/jsx-runtime";
import { useInsertionEffect as xt, forwardRef as be, createContext as Et, useContext as Rt, useRef as B, useEffect as re, useState as ce, useCallback as Qe, useMemo as Ct, useId as Te, createElement as St } from "react";
import { r as Lt, l as It, m as Ft, n as Nt, o as Je, p as _t, q as Pt, s as Ot, t as Ut, v as Mt, w as et, x as Bt, V as Dt, y as Vt, z as kt, A as Gt, S as $t, H as zt, B as ve, D as Wt, E as Xt, G as Yt, J as qt, K as tt, L as W, M as de, N as rt, O as ne, u as nt, P as xe, Q as Ht, R as ot, T as jt, U as Kt, W as Zt, X as Qt, Y as Jt, Z as er, _ as tr, $ as rr, a0 as nr, a1 as or, a2 as ir, a3 as ar, a4 as sr, a5 as le } from "./F0AiChat-__DDafxb.js";
import { useTrackVolume as it } from "@livekit/components-react";
import './types.css';function at(t, e, r) {
  xt(() => t.on(e, r), [t, e, r]);
}
function Ae(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function st(t, e, r, n) {
  return typeof t == "string" && Ae(e) ? Lt(t, r, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function cr(t, e, r) {
  return t * (e + 1);
}
function Ee(t, e, r, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : n.get(e) ?? t;
}
const lr = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function ct(t, e) {
  return It(t) ? t[lr(0, t.length, e)] : t;
}
function ur(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    o.at > e && o.at < r && (Nt(t, o), n--);
  }
}
function dr(t, e, r, n, o, i) {
  ur(t, o, i);
  for (let a = 0; a < e.length; a++)
    t.push({
      value: e[a],
      at: Ft(o, i, n[a]),
      easing: ct(r, a)
    });
}
function fr(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] = t[r] / (e + 1);
}
function hr(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const mr = "easeInOut", pr = 20;
function gr(t, { defaultTransition: e = {}, ...r } = {}, n, o) {
  const i = e.duration || 0.3, a = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = {}, v = /* @__PURE__ */ new Map();
  let b = 0, g = 0, E = 0;
  for (let d = 0; d < t.length; d++) {
    const A = t[d];
    if (typeof A == "string") {
      v.set(A, g);
      continue;
    } else if (!Array.isArray(A)) {
      v.set(A.name, Ee(g, A.at, b, v));
      continue;
    }
    let [N, p, S = {}] = A;
    S.at !== void 0 && (g = Ee(g, S.at, b, v));
    let I = 0;
    const U = (T, x, _, O = 0, G = 0) => {
      const C = vr(T), { delay: w = 0, times: P = _t(C), type: k = "keyframes", repeat: Y, repeatType: X, repeatDelay: Z = 0, ...q } = x;
      let { ease: D = e.ease || "easeOut", duration: L } = x;
      const V = typeof w == "function" ? w(O, G) : w, Q = C.length, oe = Ut(k) ? k : o?.[k];
      if (Q <= 2 && oe) {
        let J = 100;
        if (Q === 2 && yr(C)) {
          const te = C[1] - C[0];
          J = Math.abs(te);
        }
        const ee = { ...q };
        L !== void 0 && (ee.duration = Mt(L));
        const ie = Pt(ee, J, oe);
        D = ie.ease, L = ie.duration;
      }
      L ?? (L = i);
      const K = g + V;
      P.length === 1 && P[0] === 0 && (P[1] = 1);
      const fe = P.length - C.length;
      if (fe > 0 && Ot(P, fe), C.length === 1 && C.unshift(null), Y) {
        et(Y < pr, "Repeat count too high, must be less than 20"), L = cr(L, Y);
        const J = [...C], ee = [...P];
        D = Array.isArray(D) ? [...D] : [D];
        const ie = [...D];
        for (let te = 0; te < Y; te++) {
          C.push(...J);
          for (let s = 0; s < J.length; s++)
            P.push(ee[s] + (te + 1)), D.push(s === 0 ? "linear" : ct(ie, s - 1));
        }
        fr(P, Y);
      }
      const he = K + L;
      dr(_, C, D, P, K, he), I = Math.max(V + L, I), E = Math.max(he, E);
    };
    if (Je(N)) {
      const T = Re(N, f);
      U(p, S, Ce("default", T));
    } else {
      const T = st(N, p, n, h), x = T.length;
      for (let _ = 0; _ < x; _++) {
        p = p, S = S;
        const O = T[_], G = Re(O, f);
        for (const C in p)
          U(p[C], br(S, C), Ce(C, G), _, x);
      }
    }
    b = g, g += I;
  }
  return f.forEach((d, A) => {
    for (const N in d) {
      const p = d[N];
      p.sort(hr);
      const S = [], I = [], U = [];
      for (let x = 0; x < p.length; x++) {
        const { at: _, value: O, easing: G } = p[x];
        S.push(O), I.push(Bt(0, E, _)), U.push(G || "easeOut");
      }
      I[0] !== 0 && (I.unshift(0), S.unshift(S[0]), U.unshift(mr)), I[I.length - 1] !== 1 && (I.push(1), S.push(null)), a.has(A) || a.set(A, {
        keyframes: {},
        transition: {}
      });
      const T = a.get(A);
      T.keyframes[N] = S, T.transition[N] = {
        ...e,
        duration: E,
        ease: U,
        times: I,
        ...r
      };
    }
  }), a;
}
function Re(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function Ce(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function vr(t) {
  return Array.isArray(t) ? t : [t];
}
function br(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const wr = (t) => typeof t == "number", yr = (t) => t.every(wr);
function Tr(t, e) {
  return t in e;
}
class Ar extends Dt {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, r) {
    if (Tr(r, e)) {
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
    return Vt();
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
function xr(t) {
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
  }, r = kt(t) && !Gt(t) ? new $t(e) : new zt(e);
  r.mount(t), ve.set(t, r);
}
function Er(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, r = new Ar(e);
  r.mount(t), ve.set(t, r);
}
function Rr(t, e) {
  return Je(t) || typeof t == "number" || typeof t == "string" && !Ae(e);
}
function lt(t, e, r, n) {
  const o = [];
  if (Rr(t, e))
    o.push(Wt(t, Ae(e) && e.default || e, r && (r.default || r)));
  else {
    const i = st(t, e, n), a = i.length;
    et(!!a, "No valid elements provided.");
    for (let f = 0; f < a; f++) {
      const h = i[f], v = h instanceof Element ? xr : Er;
      ve.has(h) || v(h);
      const b = ve.get(h), g = { ...r };
      "delay" in g && typeof g.delay == "function" && (g.delay = g.delay(f, a)), o.push(...Xt(b, { ...e, transition: g }, {}));
    }
  }
  return o;
}
function Cr(t, e, r) {
  const n = [];
  return gr(t, e, r, { spring: Yt }).forEach(({ keyframes: i, transition: a }, f) => {
    n.push(...lt(f, i, a));
  }), n;
}
class Sr {
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
class Lr extends Sr {
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function Ir(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function Fr(t) {
  function e(r, n, o) {
    let i = [];
    return Ir(r) ? i = Cr(r, n, t) : i = lt(r, n, o, t), new Lr(i);
  }
  return e;
}
const ut = Fr(), Nr = (t, e) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ c(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), _r = be(Nr), Pr = [
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
], dt = be((t, e) => {
  const r = Pr.reduce((n, o) => {
    const { [o]: i, ...a } = n;
    return a;
  }, t);
  return /* @__PURE__ */ c(
    qt,
    {
      ...r,
      variant: "ai",
      ref: e,
      iconRotate: t.icon == _r
    }
  );
});
dt.displayName = "AIButton";
const Sn = ["xs", "sm", "md", "lg"], Ln = [
  "inProgress",
  "executing",
  "completed"
], In = {
  ai: At.ai
}, ft = Et(null);
function Fn({
  children: t,
  translations: e
}) {
  return /* @__PURE__ */ c(ft.Provider, { value: e, children: t });
}
function Nn() {
  const t = Rt(ft);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
function Se(t, e, r, n) {
  const o = Math.max(1, Math.min(t, e)), i = Math.min(r, 20), f = Math.min(i + n, o), h = Math.min(f, Math.floor(t / 2)), v = Math.min(f, Math.floor(e / 2)), b = (K) => K / t * 2 - 1, g = (K) => K / e * 2 - 1, E = 0, d = t, A = 0, N = e, p = h, S = t - h, I = v, U = e - v, T = b(E), x = b(d), _ = g(A), O = g(N), G = b(p), C = b(S), w = g(I), P = g(U), k = 0, Y = 0, X = 1, Z = 1, q = h / t, D = 1 - h / t, L = v / e, V = 1 - v / e, Q = new Float32Array([
    // Top strip
    T,
    _,
    x,
    _,
    T,
    w,
    T,
    w,
    x,
    _,
    x,
    w,
    // Bottom strip
    T,
    P,
    x,
    P,
    T,
    O,
    T,
    O,
    x,
    P,
    x,
    O,
    // Left strip
    T,
    w,
    G,
    w,
    T,
    P,
    T,
    P,
    G,
    w,
    G,
    P,
    // Right strip
    C,
    w,
    x,
    w,
    C,
    P,
    C,
    P,
    x,
    w,
    x,
    P
  ]), oe = new Float32Array([
    // Top strip
    k,
    Y,
    X,
    Y,
    k,
    L,
    k,
    L,
    X,
    Y,
    X,
    L,
    // Bottom strip
    k,
    V,
    X,
    V,
    k,
    Z,
    k,
    Z,
    X,
    V,
    X,
    Z,
    // Left strip
    k,
    L,
    q,
    L,
    k,
    V,
    k,
    V,
    q,
    L,
    q,
    V,
    // Right strip
    D,
    L,
    X,
    L,
    D,
    V,
    D,
    V,
    X,
    L,
    X,
    V
  ]);
  return { positions: Q, uvs: oe };
}
function Le(t, e, r) {
  const n = t.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  if (t.shaderSource(n, r), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(n) || "Unknown shader error";
    throw t.deleteShader(n), new Error(o);
  }
  return n;
}
function Or(t, e, r) {
  const n = Le(t, t.VERTEX_SHADER, e), o = Le(t, t.FRAGMENT_SHADER, r), i = t.createProgram();
  if (!i) throw new Error("Failed to create program");
  if (t.attachShader(i, n), t.attachShader(i, o), t.linkProgram(i), !t.getProgramParameter(i, t.LINK_STATUS)) {
    const a = t.getProgramInfoLog(i) || "Unknown link error";
    throw t.deleteProgram(i), t.deleteShader(n), t.deleteShader(o), new Error(a);
  }
  return t.deleteShader(n), t.deleteShader(o), i;
}
const Ur = `#version 300 es
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
`, Mr = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, Br = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function Dr(t) {
  const e = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${t}`);
  const [, r, n, o] = e;
  return [parseInt(r) / 255, parseInt(n) / 255, parseInt(o) / 255];
}
class _n {
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
    const { gl: o, program: i, vao: a, positionBuffer: f, uvBuffer: h, uResolution: v } = this.glr, b = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, g = Math.max(1, Math.floor(e * b)), E = Math.max(1, Math.floor(r * b));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${r}px`, (this.canvas.width !== g || this.canvas.height !== E) && (this.canvas.width = g, this.canvas.height = E), o.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(o, "resize: after viewport setup");
    const { positions: d, uvs: A } = Se(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * b,
      this.options.glowWidth * b
    );
    o.bindVertexArray(a), o.bindBuffer(o.ARRAY_BUFFER, f), o.bufferData(o.ARRAY_BUFFER, d, o.STATIC_DRAW);
    const N = o.getAttribLocation(i, "aPosition");
    o.enableVertexAttribArray(N), o.vertexAttribPointer(N, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after position buffer update"), o.bindBuffer(o.ARRAY_BUFFER, h), o.bufferData(o.ARRAY_BUFFER, A, o.STATIC_DRAW);
    const p = o.getAttribLocation(i, "aUV");
    o.enableVertexAttribArray(p), o.vertexAttribPointer(p, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after UV buffer update"), o.useProgram(i), o.uniform2f(v, this.canvas.width, this.canvas.height), o.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * b), o.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * b), o.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * b), this.checkGLError(o, "resize: after uniform updates");
    const S = performance.now();
    this.lastTime = S;
    const I = (S - this.startTime) * 1e-3;
    this.render(I);
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
    const r = Or(e, Mr, Ur);
    this.checkGLError(e, "setupGL: after createProgram");
    const n = e.createVertexArray();
    e.bindVertexArray(n), this.checkGLError(e, "setupGL: after VAO creation");
    const o = this.canvas.width || 2, i = this.canvas.height || 2, { positions: a, uvs: f } = Se(
      o,
      i,
      this.options.borderWidth,
      this.options.glowWidth
    ), h = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, h), e.bufferData(e.ARRAY_BUFFER, a, e.STATIC_DRAW);
    const v = e.getAttribLocation(r, "aPosition");
    e.enableVertexAttribArray(v), e.vertexAttribPointer(v, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const b = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, b), e.bufferData(e.ARRAY_BUFFER, f, e.STATIC_DRAW);
    const g = e.getAttribLocation(r, "aUV");
    e.enableVertexAttribArray(g), e.vertexAttribPointer(g, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const E = e.getUniformLocation(r, "uResolution"), d = e.getUniformLocation(r, "uTime"), A = e.getUniformLocation(r, "uBorderWidth"), N = e.getUniformLocation(r, "uGlowWidth"), p = e.getUniformLocation(r, "uBorderRadius"), S = e.getUniformLocation(r, "uColors"), I = e.getUniformLocation(r, "uGlowExponent"), U = e.getUniformLocation(r, "uGlowFactor");
    e.useProgram(r), e.uniform1f(A, this.options.borderWidth), e.uniform1f(N, this.options.glowWidth), e.uniform1f(p, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(I, 2), e.uniform1f(U, 1.8)) : (e.uniform1f(I, 1), e.uniform1f(U, 1));
    const T = (this.options.colors || Br).map(Dr);
    for (let x = 0; x < T.length; x++)
      e.uniform3f(
        e.getUniformLocation(r, `uColors[${x}]`),
        ...T[x]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: r,
      vao: n,
      positionBuffer: h,
      uvBuffer: b,
      uResolution: E,
      uTime: d,
      uBorderWidth: A,
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
const Ie = ["lowp", "mediump", "highp"], Vr = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, kr = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, Fe = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Ne = "iTime", _e = "iTimeDelta", Pe = "iDate", Oe = "iFrame", Ue = "iMouse", Me = "iResolution", Gr = "iChannel", Be = "iChannelResolution", De = "iDeviceOrientation";
function $r(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function zr(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function Wr(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const Xr = (t, e, r, n) => {
  if (Wr(r, n))
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
}, Yr = (t) => {
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
}, ye = 9729, Ve = 9728, qr = 9987, ke = 33071, Ge = 10497;
class Hr {
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
    const { gl: o } = this, i = 0, a = o.RGBA, f = o.RGBA, h = o.UNSIGNED_BYTE;
    o.bindTexture(o.TEXTURE_2D, e), o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, n), o.texImage2D(
      o.TEXTURE_2D,
      i,
      a,
      f,
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
      minFilter: a,
      magFilter: f,
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
    const v = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), b = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (v === null && b === null)
      return Promise.reject(
        new Error(
          j(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: o, wrapT: i, minFilter: a, magFilter: f, flipY: h });
    const g = 0, E = r.RGBA, d = 1, A = 1, N = 0, p = r.RGBA, S = r.UNSIGNED_BYTE, I = new Uint8Array([255, 255, 255, 0]), U = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, U), r.texImage2D(
      r.TEXTURE_2D,
      g,
      E,
      d,
      A,
      N,
      p,
      S,
      I
    ), b) {
      const O = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = U, this.source = O, this.isVideo = !0, O.play().then(() => this);
    }
    async function T() {
      return new Promise((O, G) => {
        const C = new Image();
        C.crossOrigin = "anonymous", C.onload = () => {
          O(C);
        }, C.onerror = () => {
          G(new Error(j(`failed loading url: ${n}`)));
        }, C.src = n ?? "";
      });
    }
    let x = await T(), _ = (x.width & x.width - 1) === 0 && (x.height & x.height - 1) === 0;
    return (e.wrapS !== ke || e.wrapT !== ke || e.minFilter !== Ve && e.minFilter !== ye) && !_ && (x = this.makePowerOf2(x), _ = !0), r.bindTexture(r.TEXTURE_2D, U), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, h), r.texImage2D(
      r.TEXTURE_2D,
      g,
      E,
      p,
      S,
      x
    ), _ && e.minFilter !== Ve && e.minFilter !== ye && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(
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
      this.minFilter || qr
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MAG_FILTER,
      this.magFilter || ye
    ), this._webglTexture = U, this.source = x, this.isVideo = !1, this.isLoaded = !0, this.width = x.width || 0, this.height = x.height || 0, this;
  };
}
const j = (t) => `react-shaders: ${t}`, $e = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, ze = (t, e, r) => t * (1 - r) + e * r, jr = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function Kr({
  fs: t,
  vs: e = Fe,
  textures: r = [],
  uniforms: n,
  clearColor: o = [0, 0, 0, 1],
  precision: i = "highp",
  style: a,
  contextAttributes: f = {},
  lerp: h = 1,
  devicePixelRatio: v = 1,
  onDoneLoadingTextures: b,
  onError: g = console.error,
  onWarning: E = console.warn
}) {
  const d = B(null), A = B(null), N = B(null), p = B(null), S = B(void 0), I = B(void 0), U = B(!1), T = B(void 0), x = B(0), _ = B([0, 0]), O = B([]), G = B(0), C = B(void 0), w = B({
    [Ne]: { type: "float", isNeeded: !1, value: 0 },
    [_e]: { type: "float", isNeeded: !1, value: 0 },
    [Pe]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Ue]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Me]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Oe]: { type: "int", isNeeded: !1, value: 0 },
    [De]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), P = B(n), k = (s, u) => {
    const l = "width" in s ? s.width ?? 0 : 0, y = "height" in s ? s.height ?? 0 : 0, m = w.current.iChannelResolution;
    if (!m) return;
    const R = Array.isArray(m.value) ? m.value : m.value = [];
    R[u * 3] = l * v, R[u * 3 + 1] = y * v, R[u * 3 + 2] = 0;
  }, Y = () => {
    d.current && (A.current = d.current.getContext("webgl", f) || d.current.getContext(
      "experimental-webgl",
      f
    ), A.current?.getExtension("OES_standard_derivatives"), A.current?.getExtension("EXT_shader_texture_lod"));
  }, X = () => {
    const s = A.current;
    N.current = s?.createBuffer() ?? null, s?.bindBuffer(s.ARRAY_BUFFER, N.current);
    const u = [
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
    s?.bufferData(s.ARRAY_BUFFER, new Float32Array(u), s.STATIC_DRAW);
  }, Z = ({
    alpha: s,
    beta: u,
    gamma: l
  }) => {
    w.current.iDeviceOrientation.value = [
      s ?? 0,
      u ?? 0,
      l ?? 0,
      window.orientation ?? 0
    ];
  }, q = (s) => {
    const [u = 0, l = 0] = $e(s), y = u - (T.current?.left ?? 0) - window.pageXOffset, m = (T.current?.height ?? 0) - l - (T.current?.top ?? 0) - window.pageYOffset;
    U.current = !0;
    const R = Array.isArray(w.current.iMouse?.value) ? w.current.iMouse.value : void 0;
    R && (R[2] = y, R[3] = m), _.current[0] = y, _.current[1] = m;
  }, D = (s) => {
    T.current = d.current?.getBoundingClientRect();
    const [u = 0, l = 0] = $e(s), y = u - (T.current?.left ?? 0), m = (T.current?.height ?? 0) - l - (T.current?.top ?? 0);
    if (h !== 1)
      _.current[0] = y, _.current[1] = m;
    else {
      const R = Array.isArray(w.current.iMouse?.value) ? w.current.iMouse.value : void 0;
      R && (R[0] = y, R[1] = m);
    }
  }, L = () => {
    const s = Array.isArray(w.current.iMouse?.value) ? w.current.iMouse.value : void 0;
    s && (s[2] = 0, s[3] = 0);
  }, V = () => {
    const s = A.current;
    if (!s) return;
    T.current = d.current?.getBoundingClientRect();
    const u = v, l = Math.floor(
      (T.current?.width ?? 1) * u
    ), y = Math.floor(
      (T.current?.height ?? 1) * u
    );
    if (s.canvas.width = l, s.canvas.height = y, w.current.iResolution?.isNeeded && p.current) {
      const m = s.getUniformLocation(
        p.current,
        Me
      );
      s.uniform2fv(m, [s.canvas.width, s.canvas.height]);
    }
  }, Q = (s, u) => {
    const l = A.current;
    if (!l) return null;
    const y = l.createShader(s);
    if (!y) return null;
    if (l.shaderSource(y, u), l.compileShader(y), !l.getShaderParameter(y, l.COMPILE_STATUS)) {
      E?.(j(`Error compiling the shader:
${u}`));
      const m = l.getShaderInfoLog(y);
      l.deleteShader(y), g?.(j(`Shader compiler log: ${m}`));
    }
    return y;
  }, oe = (s, u) => {
    const l = A.current;
    if (!l) return;
    const y = Q(l.FRAGMENT_SHADER, s), m = Q(l.VERTEX_SHADER, u);
    if (p.current = l.createProgram(), !(!p.current || !m || !y)) {
      if (l.attachShader(p.current, m), l.attachShader(p.current, y), l.linkProgram(p.current), !l.getProgramParameter(p.current, l.LINK_STATUS)) {
        g?.(
          j(
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
  }, K = () => {
    if (n)
      for (const s of Object.keys(n)) {
        const u = n[s];
        if (!u) continue;
        const { value: l, type: y } = u, m = Yr(y);
        if (!m) continue;
        const R = {};
        if ($r(y, l)) {
          const $ = y.length, H = Number.parseInt(y.charAt($ - 3)), ae = Math.floor(l.length / (H * H));
          l.length > H * H && (R.arraySize = `[${ae}]`);
        } else zr(y, l) && (R.arraySize = `[${Math.floor(l.length / Number.parseInt(y.charAt(0)))}]`);
        w.current[s] = {
          type: m,
          isNeeded: !1,
          value: l,
          ...R
        };
      }
  }, fe = () => {
    const s = A.current;
    if (s)
      if (r && r.length > 0) {
        w.current[`${Be}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const u = r.map(
          (l, y) => (w.current[`${Gr}${y}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, k(l, y), O.current[y] = new Hr(s), O.current[y]?.load(l).then((m) => {
            k(m, y);
          }))
        );
        Promise.all(u).then(() => {
          b && b();
        }).catch((l) => {
          g?.(l), b && b();
        });
      } else b && b();
  }, he = (s) => {
    const u = Ie.includes(i ?? "highp"), l = `precision ${u ? i : Ie[1]} float;
`;
    u || E?.(
      j(
        `wrong precision type ${i}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let y = l.concat(`#define DPR ${v.toFixed(1)}
`).concat(s.replace(/texture\(/g, "texture2D("));
    for (const R of Object.keys(w.current))
      if (s.includes(R)) {
        const $ = w.current[R];
        if (!$) continue;
        y = jr(
          y,
          `uniform ${$.type} ${R}${$.arraySize || ""}; 
`,
          y.lastIndexOf(l) + l.length
        ), $.isNeeded = !0;
      }
    return s.includes("mainImage") && (y = y.concat(Vr)), y;
  }, J = (s) => {
    const u = A.current;
    if (!u || !p.current) return;
    const l = G.current ? (s - G.current) / 1e3 : 0;
    G.current = s;
    const y = P.current;
    if (y)
      for (const m of Object.keys(y)) {
        const R = y[m];
        if (R && w.current[m]?.isNeeded) {
          if (!p.current) return;
          const $ = u.getUniformLocation(
            p.current,
            m
          );
          if (!$) return;
          Xr(
            u,
            $,
            R.type,
            R.value
          );
        }
      }
    if (w.current.iMouse?.isNeeded) {
      const m = u.getUniformLocation(
        p.current,
        Ue
      );
      u.uniform4fv(m, w.current.iMouse.value);
    }
    if (w.current.iChannelResolution?.isNeeded) {
      const m = u.getUniformLocation(
        p.current,
        Be
      );
      u.uniform3fv(
        m,
        w.current.iChannelResolution.value
      );
    }
    if (w.current.iDeviceOrientation?.isNeeded) {
      const m = u.getUniformLocation(
        p.current,
        De
      );
      u.uniform4fv(
        m,
        w.current.iDeviceOrientation.value
      );
    }
    if (w.current.iTime?.isNeeded) {
      const m = u.getUniformLocation(
        p.current,
        Ne
      );
      u.uniform1f(m, x.current += l);
    }
    if (w.current.iTimeDelta?.isNeeded) {
      const m = u.getUniformLocation(
        p.current,
        _e
      );
      u.uniform1f(m, l);
    }
    if (w.current.iDate?.isNeeded) {
      const m = /* @__PURE__ */ new Date(), R = m.getMonth() + 1, $ = m.getDate(), H = m.getFullYear(), ae = m.getHours() * 60 * 60 + m.getMinutes() * 60 + m.getSeconds() + m.getMilliseconds() * 1e-3, we = u.getUniformLocation(
        p.current,
        Pe
      );
      u.uniform4fv(we, [H, R, $, ae]);
    }
    if (w.current.iFrame?.isNeeded) {
      const m = u.getUniformLocation(
        p.current,
        Oe
      ), R = w.current.iFrame.value;
      u.uniform1i(m, R), w.current.iFrame.value = R + 1;
    }
    if (O.current.length > 0)
      for (let m = 0; m < O.current.length; m++) {
        const R = O.current[m];
        if (!R) return;
        const { isVideo: $, _webglTexture: H, source: ae, flipY: we, isLoaded: yt } = R;
        if (!yt || !H || !ae) return;
        if (w.current[`iChannel${m}`]?.isNeeded) {
          if (!p.current) return;
          const Tt = u.getUniformLocation(
            p.current,
            `iChannel${m}`
          );
          u.activeTexture(u.TEXTURE0 + m), u.bindTexture(u.TEXTURE_2D, H), u.uniform1i(Tt, m), $ && R.updateTexture(
            H,
            ae,
            we
          );
        }
      }
  }, ee = (s) => {
    const u = A.current;
    if (!u) return;
    u.viewport(0, 0, u.drawingBufferWidth, u.drawingBufferHeight), u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT), u.bindBuffer(u.ARRAY_BUFFER, N.current), u.vertexAttribPointer(
      S.current ?? 0,
      3,
      u.FLOAT,
      !1,
      0,
      0
    ), J(s), u.drawArrays(u.TRIANGLE_STRIP, 0, 4);
    const l = w.current.iMouse?.value;
    if (w.current.iMouse?.isNeeded && h !== 1 && Array.isArray(l)) {
      const y = l[0] ?? 0, m = l[1] ?? 0;
      l[0] = ze(y, _.current[0] ?? 0, h), l[1] = ze(m, _.current[1] ?? 0, h);
    }
    I.current = requestAnimationFrame(ee);
  }, ie = () => {
    const s = { passive: !0 };
    w.current.iMouse?.isNeeded && d.current && (d.current.addEventListener("mousemove", D, s), d.current.addEventListener("mouseout", L, s), d.current.addEventListener("mouseup", L, s), d.current.addEventListener("mousedown", q, s), d.current.addEventListener("touchmove", D, s), d.current.addEventListener("touchend", L, s), d.current.addEventListener("touchstart", q, s)), w.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      Z,
      s
    ), d.current && (C.current = new ResizeObserver(V), C.current.observe(d.current), window.addEventListener("resize", V, s));
  }, te = () => {
    const s = { passive: !0 };
    w.current.iMouse?.isNeeded && d.current && (d.current.removeEventListener("mousemove", D, s), d.current.removeEventListener("mouseout", L, s), d.current.removeEventListener("mouseup", L, s), d.current.removeEventListener("mousedown", q, s), d.current.removeEventListener("touchmove", D, s), d.current.removeEventListener("touchend", L, s), d.current.removeEventListener("touchstart", q, s)), w.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      Z,
      s
    ), C.current && (C.current.disconnect(), window.removeEventListener("resize", V, s));
  };
  return re(() => {
    P.current = n;
  }, [n]), re(() => {
    const s = O.current;
    function u() {
      Y();
      const l = A.current;
      l && d.current && (l.clearColor(...o), l.clearDepth(1), l.enable(l.DEPTH_TEST), l.depthFunc(l.LEQUAL), l.viewport(0, 0, d.current.width, d.current.height), d.current.height = d.current.clientHeight, d.current.width = d.current.clientWidth, K(), fe(), oe(he(t || kr), e || Fe), X(), requestAnimationFrame(ee), ie(), V());
    }
    return requestAnimationFrame(u), () => {
      const l = A.current;
      if (l) {
        if (l.getExtension("WEBGL_lose_context")?.loseContext(), l.useProgram(null), l.deleteProgram(p.current ?? null), s.length > 0)
          for (const y of s)
            l.deleteTexture(y._webglTexture);
        p.current = null;
      }
      te(), cancelAnimationFrame(I.current ?? 0);
    };
  }, []), /* @__PURE__ */ c(
    "canvas",
    {
      ref: d,
      style: { height: "100%", width: "100%", ...a }
    }
  );
}
const Zr = `
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
}`, Qr = 10, Jr = 2, en = 0.5, tn = 0.2, rn = 1.5, z = {
  duration: 0.5,
  ease: "easeOut"
}, We = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function me(t) {
  const [e, r] = ce(t), n = tt(t), o = B(null);
  at(n, "change", (a) => r(a));
  const i = Qe(
    (a, f) => {
      o.current = ut(n, a, f);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: o, animate: i };
}
function nn(t, e) {
  const [r, n] = ce(Qr), {
    value: o,
    animate: i,
    motionValue: a
  } = me(tn), { value: f, animate: h } = me(Jr), { value: v, animate: b } = me(en), { value: g, animate: E } = me(rn), d = it(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return re(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), i(0.2, z), h(1.2, z), b(0.4, z), E(1, z);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), i(0.3, { type: "spring", duration: 1, bounce: 0.35 }), h(1, z), b(0.7, z), E([1.5, 2], We);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), i(0.3, z), h(0.5, z), b(1, z), E([0.5, 2.5], We);
        return;
      case "speaking":
        n(70), i(0.3, z), h(0.75, z), b(1.25, z), E(1.5, z);
        return;
    }
  }, [
    t,
    i,
    h,
    b,
    E
  ]), re(() => {
    t === "speaking" && d > 0 && !a.isAnimating() && i(0.2 + 0.2 * d, { duration: 0 });
  }, [
    t,
    d,
    a,
    i,
    h,
    b,
    E
  ]), {
    speed: r,
    scale: o,
    amplitude: f,
    frequency: v,
    brightness: g
  };
}
const on = de({
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
function an(t) {
  const e = t.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, r, n, o] = e;
    return [r, n, o].map((a = "00") => parseInt(a, 16) / 255);
  }
}
function ht({
  shape: t = 1,
  speed: e = 1,
  amplitude: r = 0.5,
  frequency: n = 0.5,
  scale: o = 0.2,
  blur: i = 1,
  color: a = "#FF355E",
  colorShift: f = 1,
  brightness: h = 1,
  themeMode: v = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: b,
  className: g,
  ...E
}) {
  const d = Ct(() => an(a), [a]);
  return /* @__PURE__ */ c("div", { ref: b, className: g, ...E, children: /* @__PURE__ */ c(
    Kr,
    {
      fs: Zr,
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
        uColorShift: { type: "1f", value: f },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: v === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: d ?? [0, 0.7, 1] }
      },
      onError: (A) => {
        console.error("Shader error:", A);
      },
      onWarning: (A) => {
        console.warn("Shader warning:", A);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
ht.displayName = "AuraShader";
function Pn({
  size: t = "lg",
  state: e,
  color: r,
  colorShift: n = 0.05,
  audioTrack: o,
  themeMode: i,
  className: a,
  ref: f,
  ...h
}) {
  const { speed: v, scale: b, amplitude: g, frequency: E, brightness: d } = nn(e, o);
  return /* @__PURE__ */ c(
    ht,
    {
      ref: f,
      blur: 0.2,
      color: r,
      colorShift: n,
      speed: v,
      scale: b,
      themeMode: i,
      amplitude: g,
      frequency: E,
      brightness: d,
      className: W(
        on({ size: t }),
        "overflow-hidden rounded-full",
        a
      ),
      ...h
    }
  );
}
const Xe = 1.8, Ye = 0.45, qe = 0.62, He = 1, je = 0, M = {
  duration: 0.45,
  ease: "easeOut"
}, se = {
  duration: 0.5,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function ue(t) {
  const [e, r] = ce(t), n = tt(t), o = B(null);
  at(n, "change", (a) => r(a));
  const i = Qe(
    (a, f) => {
      o.current = ut(n, a, f);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: o, animate: i };
}
function sn(t, e) {
  const { value: r, animate: n } = ue(Xe), { value: o, animate: i } = ue(Ye), { value: a, animate: f } = ue(qe), { value: h, animate: v } = ue(He), { value: b, animate: g } = ue(je), E = it(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return re(() => {
    switch (t) {
      case "idle":
        g(0, M), n(1.2, M), i(0.36, M), f(0.34, M), v(0.96, M);
        return;
      case "failed":
      case "disconnected":
      case "listening":
      case "pre-connect-buffering":
        g(1, M), n(1.9, M), i([0.46, 0.6], {
          ...se,
          duration: 0.9
        }), f(0.56, M), v([0.99, 1.025], {
          ...se,
          duration: 1
        });
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        g(2, M), n(2.5, M), i([0.56, 0.82], {
          ...se,
          duration: 0.56
        }), f(0.82, M), v([1.02, 1.075], {
          ...se,
          duration: 0.58
        });
        return;
      case "speaking":
        g(3, M), n(2.2, M), i(0.56, M), f(0.76, M), v(1.02, M);
        return;
      default:
        g(je, M), n(Xe, M), f(qe, M), i([0.38, Ye], se), v([0.99, He], {
          ...se,
          duration: 0.8
        });
        return;
    }
  }, [
    t,
    f,
    i,
    v,
    n,
    g
  ]), re(() => {
    if (t !== "speaking")
      return;
    const d = Math.min(Math.max(E, 0), 1);
    i(0.44 + d * 0.56, { duration: 0 }), n(1.9 + d * 2.2, { duration: 0 }), f(0.68 + d * 0.18, { duration: 0.12 }), v(1 + d * 0.11, { duration: 0 });
  }, [
    t,
    E,
    f,
    i,
    v,
    n
  ]), {
    speed: r,
    intensity: o,
    complexity: a,
    scale: h,
    statePhase: b
  };
}
const cn = {
  colorA: "#e55619",
  colorB: "#e51943",
  colorC: "#a1ade5",
  colorD: "#ffffff"
}, Ke = [
  {
    id: "bottom",
    transformOrigin: "center 89%",
    path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z"
  },
  {
    id: "right",
    transformOrigin: "88.5% center",
    path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z"
  },
  {
    id: "top",
    transformOrigin: "center 11%",
    path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z"
  },
  {
    id: "left",
    transformOrigin: "11% center",
    path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z"
  }
];
function ge({
  colors: t,
  pulse: e = !1,
  spinDuration: r = 2,
  gradDuration: n = 3
}) {
  const o = Te(), { colorA: i, colorB: a, colorC: f } = t;
  return /* @__PURE__ */ F(
    ne.svg,
    {
      viewBox: "0 0 32 32",
      width: "100%",
      height: "100%",
      xmlns: "http://www.w3.org/2000/svg",
      animate: {
        "--gradient-angle": ["0deg", "360deg"],
        rotate: "360deg",
        ...e ? { opacity: [0.5, 1, 0.5] } : {}
      },
      transition: {
        "--gradient-angle": {
          duration: n,
          ease: "linear",
          repeat: 1 / 0
        },
        rotate: {
          duration: r,
          ease: "linear",
          repeat: 1 / 0
        },
        ...e ? {
          opacity: {
            duration: 3.2,
            ease: "easeInOut",
            repeat: 1 / 0
          }
        } : {}
      },
      style: {
        "--gradient-angle": "0deg"
      },
      children: [
        /* @__PURE__ */ F("defs", { children: [
          /* @__PURE__ */ c("clipPath", { id: `${o}-circle`, children: /* @__PURE__ */ c("circle", { cx: "16", cy: "16", r: "16" }) }),
          Ke.map((h) => /* @__PURE__ */ c("clipPath", { id: `${o}-${h.id}`, children: /* @__PURE__ */ c("path", { d: h.path }) }, h.id))
        ] }),
        /* @__PURE__ */ c("g", { clipPath: `url(#${o}-circle)`, children: Ke.map((h) => /* @__PURE__ */ c(
          ne.foreignObject,
          {
            x: "0",
            y: "0",
            width: "32",
            height: "32",
            clipPath: `url(#${o}-${h.id})`,
            animate: {
              "--scale": [1, 8, 1]
            },
            transition: {
              "--scale": {
                duration: 2,
                ease: [0.85, 0, 0.15, 1],
                repeat: 1 / 0,
                delay: 1
              }
            },
            style: {
              "--scale": 1,
              transform: "scale(var(--scale))",
              transformOrigin: h.transformOrigin,
              willChange: "transform"
            },
            children: /* @__PURE__ */ c(
              "div",
              {
                style: {
                  width: "100%",
                  height: "100%",
                  background: `conic-gradient(from var(--gradient-angle) at 50% 50%, ${i} 0%, ${f} 33%, ${a} 66%, ${i} 100%)`
                }
              }
            )
          },
          h.id
        )) })
      ]
    }
  );
}
ge.displayName = "ActionOrb";
function mt({ colors: t, scale: e }) {
  const r = B(null), [n, o] = ce(1), { colorA: i, colorB: a, colorC: f } = t;
  return re(() => {
    const h = r.current;
    if (!h) return;
    const v = new ResizeObserver((b) => {
      const g = b[0]?.contentRect.width ?? 90;
      o(g / 90);
    });
    return v.observe(h), () => v.disconnect();
  }, []), /* @__PURE__ */ c(
    "div",
    {
      ref: r,
      style: { width: "100%", aspectRatio: "1", position: "relative" },
      children: /* @__PURE__ */ c(
        "div",
        {
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 90,
            height: 90,
            transform: `translate(-50%, -50%) scale(${n * e})`,
            transformOrigin: "center"
          },
          children: /* @__PURE__ */ F(
            "div",
            {
              className: "orb-speaking-ball",
              style: {
                width: 90,
                height: 90,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                background: `linear-gradient(270deg, ${f} 0%, ${a}b3 50%, ${i}b3 100%)`
              },
              children: [
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: "orb-blob orb-blob--1",
                    style: { background: `${i}b3` }
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: "orb-blob orb-blob--2",
                    style: { background: `${a}b3` }
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: "orb-blob orb-blob--3",
                    style: { background: f }
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: "orb-blob orb-blob--4",
                    style: { background: `${f}d9` }
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}
mt.displayName = "SpeakingOrb";
function pt({ colors: t }) {
  const e = Te(), { colorA: r, colorB: n, colorC: o } = t;
  return /* @__PURE__ */ F(
    "svg",
    {
      viewBox: "0 0 90 90",
      width: "100%",
      height: "100%",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        filter: "grayscale(0.6) opacity(0.5)",
        transform: "scale(0.9)",
        transformOrigin: "center"
      },
      children: [
        /* @__PURE__ */ c("defs", { children: /* @__PURE__ */ F(
          "linearGradient",
          {
            id: e,
            x1: "90",
            y1: "45",
            x2: "0",
            y2: "45",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ c("stop", { offset: "0%", stopColor: o }),
              /* @__PURE__ */ c("stop", { offset: "50%", stopColor: n, stopOpacity: 0.7 }),
              /* @__PURE__ */ c("stop", { offset: "100%", stopColor: r, stopOpacity: 0.7 })
            ]
          }
        ) }),
        /* @__PURE__ */ c("circle", { cx: "45", cy: "45", r: "45", fill: `url(#${e})` })
      ]
    }
  );
}
pt.displayName = "StaticOrb";
function ln(t) {
  const e = nt(), { connecting: r, listening: n, thinking: o, buffering: i, disconnected: a, failed: f } = e.ai.orbVoiceAnimation;
  switch (t) {
    case "connecting":
    case "initializing":
      return r;
    case "listening":
      return n;
    case "thinking":
      return o;
    case "pre-connect-buffering":
      return i;
    case "disconnected":
      return a;
    case "failed":
      return f;
    default:
      return null;
  }
}
function On({
  state: t = "connecting",
  audioTrack: e,
  colors: r,
  className: n,
  ref: o,
  ...i
}) {
  const { scale: a } = sn(t, e), f = ln(t), h = {
    ...cn,
    ...r
  };
  function v() {
    switch (t) {
      case "thinking":
        return /* @__PURE__ */ c(
          ge,
          {
            colors: h,
            spinDuration: 2,
            gradDuration: 3
          }
        );
      case "listening":
      case "pre-connect-buffering":
        return /* @__PURE__ */ c(
          ge,
          {
            colors: h,
            spinDuration: 2.5,
            gradDuration: 4
          }
        );
      case "connecting":
      case "initializing":
        return /* @__PURE__ */ c(
          ge,
          {
            colors: h,
            pulse: !0,
            spinDuration: 3,
            gradDuration: 3
          }
        );
      case "speaking":
        return /* @__PURE__ */ c(mt, { colors: h, scale: a });
      default:
        return /* @__PURE__ */ c(pt, { colors: h });
    }
  }
  return /* @__PURE__ */ F(
    "div",
    {
      ref: o,
      className: W("flex flex-col items-center gap-3", n),
      ...i,
      children: [
        /* @__PURE__ */ c("div", { style: { width: "100%", aspectRatio: "1" }, children: v() }),
        /* @__PURE__ */ c(rt, { children: f !== null && /* @__PURE__ */ c(
          ne.span,
          {
            className: "shine-text text-sm font-medium",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3 },
            children: f
          },
          f
        ) })
      ]
    }
  );
}
const Un = ({
  text: t,
  confirmationText: e,
  onConfirm: r,
  cancelText: n,
  onCancel: o
}) => /* @__PURE__ */ F("div", { className: "flex flex-col gap-2", children: [
  t && /* @__PURE__ */ c("p", { children: t }),
  /* @__PURE__ */ F("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ c(
      xe,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        icon: Ht,
        onClick: r,
        label: e
      }
    ),
    /* @__PURE__ */ c(
      xe,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: o,
        label: n
      }
    )
  ] })
] }), un = de({
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
}), gt = de({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), dn = de({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), pe = de({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), fn = ({
  description: t,
  isRevealed: e,
  onAskOne: r
}) => {
  const n = nt(), o = ot();
  return /* @__PURE__ */ F(Ze, { children: [
    t && /* @__PURE__ */ c("span", { className: W(dn(), "truncate"), children: t }),
    /* @__PURE__ */ c(rt, { children: r && e && /* @__PURE__ */ c(
      ne.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: o ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ c(
          dt,
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
}, hn = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), mn = ({ balance: t }) => /* @__PURE__ */ c(
  er,
  {
    amount: t.amount,
    percentage: t.percentage ?? void 0,
    invertStatus: t.invertStatus,
    hint: t.hint
  }
), pn = (t) => {
  const {
    heading: e,
    label: r,
    content: n,
    shouldFadeContent: o = !1,
    fadeTransition: i
  } = t;
  return /* @__PURE__ */ F("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ c("span", { className: W(gt()), children: e }),
    /* @__PURE__ */ F(
      ne.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: o ? 0 : 1 },
        transition: i,
        children: [
          n === "person" && /* @__PURE__ */ F("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ c(
              jt,
              {
                firstName: t.avatar.firstName,
                lastName: t.avatar.lastName,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ c("span", { className: W(pe()), children: r })
          ] }),
          n === "people" && /* @__PURE__ */ c(
            Kt,
            {
              type: "person",
              avatars: t.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ F("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ c(
              Zt,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ c("span", { className: W(pe()), children: r })
          ] }),
          n === "company" && /* @__PURE__ */ F("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ c(
              Qt,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ c("span", { className: W(pe()), children: r })
          ] }),
          n === "alert" && /* @__PURE__ */ c(Jt, { text: t.alertLabel, level: t.level }),
          n === "balance" && /* @__PURE__ */ c(mn, { balance: t.balance })
        ]
      }
    ),
    r && !hn.has(n) && /* @__PURE__ */ c(
      ne.span,
      {
        className: W(pe()),
        animate: { opacity: o ? 0 : 1 },
        transition: i,
        children: r
      }
    )
  ] });
}, vt = {
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
function gn(t, e) {
  const r = t[0]?.value ?? 0, n = t[t.length - 1]?.value ?? 0, o = Math.sign(n - r), i = e ? o * -1 : o;
  return i > 0 ? "positive" : i < 0 ? "negative" : "neutral";
}
const vn = ({
  cx: t,
  cy: e,
  index: r,
  dataLength: n,
  color: o
}) => r !== n - 1 || t == null || e == null ? null : /* @__PURE__ */ c("circle", { cx: t, cy: e, r: 2, fill: o, stroke: "none" }), bn = ({
  label: t,
  direction: e
}) => {
  const r = vt[e];
  return /* @__PURE__ */ c(
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
}, wn = ({
  data: t,
  label: e,
  invertStatus: r
}) => {
  const o = `sparkline-gradient-${Te().replace(/:/g, "")}`, i = gn(t, r), a = vt[i];
  return /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ F(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${i} trend`,
      children: [
        /* @__PURE__ */ c(tr, { width: "100%", height: "100%", children: /* @__PURE__ */ F(
          rr,
          {
            data: t,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ c("defs", { children: /* @__PURE__ */ F("linearGradient", { id: o, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ c("stop", { offset: "5%", stopColor: a.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ c("stop", { offset: "95%", stopColor: a.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ c(nr, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ c(
                or,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: a.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${o})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (f) => /* @__PURE__ */ St(
                    vn,
                    {
                      ...f,
                      key: f.index,
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
        /* @__PURE__ */ c(bn, { label: e, direction: i })
      ]
    }
  ) });
}, bt = be(
  (t, e) => {
    const {
      description: r,
      heading: n,
      label: o,
      selected: i = !1,
      onClick: a,
      onAskOne: f,
      className: h,
      ...v
    } = t, [b, g] = ce(!1), [E, d] = ce(!1), A = b || E, N = ot(), p = A && !!f, S = {
      duration: N ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, I = () => {
      a?.();
    }, U = (T) => {
      T.currentTarget === T.target && (T.key === "Enter" || T.key === " ") && (T.preventDefault(), a?.());
    };
    return /* @__PURE__ */ F("div", { className: "relative", children: [
      i && /* @__PURE__ */ F(Ze, { children: [
        /* @__PURE__ */ c(
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
        /* @__PURE__ */ c(
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
      /* @__PURE__ */ F(
        "div",
        {
          ref: e,
          role: a ? "button" : void 0,
          tabIndex: a ? 0 : void 0,
          className: W(
            un({ selected: i }),
            i && "relative border-transparent",
            a && "cursor-pointer select-none",
            a && ir(),
            h
          ),
          onClick: a ? I : void 0,
          onKeyDown: a ? U : void 0,
          onMouseEnter: () => g(!0),
          onMouseLeave: () => g(!1),
          onFocus: () => d(!0),
          onBlur: () => d(!1),
          children: [
            /* @__PURE__ */ c(
              fn,
              {
                description: r,
                isRevealed: A,
                onAskOne: f
              }
            ),
            v.content === "sparkline" ? /* @__PURE__ */ F("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ c("span", { className: W(gt()), children: n }),
              /* @__PURE__ */ c(
                ne.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: p ? 0 : 1 },
                  transition: S,
                  children: /* @__PURE__ */ c(
                    wn,
                    {
                      data: v.data,
                      label: o ?? "",
                      invertStatus: v.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ c(
              pn,
              {
                heading: n,
                label: o,
                shouldFadeContent: p,
                fadeTransition: S,
                ...v
              }
            )
          ]
        }
      )
    ] });
  }
);
bt.displayName = "F0AiInsightCardInternal";
const yn = ["className"], wt = be((t, e) => {
  const r = yn.reduce((n, o) => {
    const { [o]: i, ...a } = n;
    return a;
  }, t);
  return /* @__PURE__ */ c(bt, { ref: e, ...r });
});
wt.displayName = "F0AiInsightCard";
const Tn = () => /* @__PURE__ */ F(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ c(le, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ F("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ F("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ c(le, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ c(le, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ F("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ c(le, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ c(le, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), Mn = ar(
  sr(wt, Tn)
), Bn = [
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
  Fn as A,
  _n as F,
  In as a,
  Ln as b,
  Pn as c,
  On as d,
  Un as e,
  Mn as f,
  Bn as g,
  dt as h,
  _r as i,
  Sn as o,
  Nn as u
};
