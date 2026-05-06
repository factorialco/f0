import { defaultTranslations as rt } from "./i18n-provider-defaults.js";
import { jsx as h, jsxs as M, Fragment as Ge } from "react/jsx-runtime";
import { useInsertionEffect as nt, forwardRef as me, createContext as ot, useContext as it, useRef as D, useEffect as ue, useState as de, useCallback as at, useMemo as st, useId as ct, createElement as lt } from "react";
import { r as ut, o as dt, p as ft, q as ht, s as ke, t as mt, v as pt, w as vt, x as gt, y as wt, z as We, A as bt, V as yt, B as Tt, D as xt, E as At, S as Et, H as Rt, G as fe, J as Ct, K as St, L as Lt, M as It, N as Ft, O as X, P as ie, Q as we, R as _t, u as Nt, T as ze, U as Pt, W as he, X as Ut, Y as Mt, Z as Bt, _ as Ot, $ as Vt, a0 as Dt, a1 as Gt, a2 as kt, a3 as Wt, a4 as zt, a5 as Xt, a6 as Yt, a7 as $t, a8 as oe } from "./F0AiChat-CJmCKlSt.js";
import { useTrackVolume as qt } from "@livekit/components-react";
function Ht(t, e, r) {
  nt(() => t.on(e, r), [t, e, r]);
}
function ge(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Xe(t, e, r, n) {
  return typeof t == "string" && ge(e) ? ut(t, r, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function Kt(t, e, r) {
  return t * (e + 1);
}
function be(t, e, r, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : n.get(e) ?? t;
}
const jt = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function Ye(t, e) {
  return dt(t) ? t[jt(0, t.length, e)] : t;
}
function Zt(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    o.at > e && o.at < r && (ht(t, o), n--);
  }
}
function Qt(t, e, r, n, o, i) {
  Zt(t, o, i);
  for (let l = 0; l < e.length; l++)
    t.push({
      value: e[l],
      at: ft(o, i, n[l]),
      easing: Ye(r, l)
    });
}
function Jt(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] = t[r] / (e + 1);
}
function er(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const tr = "easeInOut", rr = 20;
function nr(t, { defaultTransition: e = {}, ...r } = {}, n, o) {
  const i = e.duration || 0.3, l = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), b = {}, A = /* @__PURE__ */ new Map();
  let v = 0, w = 0, R = 0;
  for (let u = 0; u < t.length; u++) {
    const y = t[u];
    if (typeof y == "string") {
      A.set(y, w);
      continue;
    } else if (!Array.isArray(y)) {
      A.set(y.name, be(w, y.at, v, A));
      continue;
    }
    let [F, f, S = {}] = y;
    S.at !== void 0 && (w = be(w, S.at, v, A));
    let I = 0;
    const U = (g, x, _, P = 0, G = 0) => {
      const C = or(g), { delay: m = 0, times: N = mt(C), type: V = "keyframes", repeat: Y, repeatType: z, repeatDelay: j = 0, ...$ } = x;
      let { ease: B = e.ease || "easeOut", duration: L } = x;
      const O = typeof m == "function" ? m(P, G) : m, Z = C.length, te = gt(V) ? V : o?.[V];
      if (Z <= 2 && te) {
        let Q = 100;
        if (Z === 2 && sr(C)) {
          const ee = C[1] - C[0];
          Q = Math.abs(ee);
        }
        const J = { ...$ };
        L !== void 0 && (J.duration = wt(L));
        const re = pt(J, Q, te);
        B = re.ease, L = re.duration;
      }
      L ?? (L = i);
      const K = w + O;
      N.length === 1 && N[0] === 0 && (N[1] = 1);
      const ae = N.length - C.length;
      if (ae > 0 && vt(N, ae), C.length === 1 && C.unshift(null), Y) {
        We(Y < rr, "Repeat count too high, must be less than 20"), L = Kt(L, Y);
        const Q = [...C], J = [...N];
        B = Array.isArray(B) ? [...B] : [B];
        const re = [...B];
        for (let ee = 0; ee < Y; ee++) {
          C.push(...Q);
          for (let a = 0; a < Q.length; a++)
            N.push(J[a] + (ee + 1)), B.push(a === 0 ? "linear" : Ye(re, a - 1));
        }
        Jt(N, Y);
      }
      const se = K + L;
      Qt(_, C, B, N, K, se), I = Math.max(O + L, I), R = Math.max(se, R);
    };
    if (ke(F)) {
      const g = ye(F, T);
      U(f, S, Te("default", g));
    } else {
      const g = Xe(F, f, n, b), x = g.length;
      for (let _ = 0; _ < x; _++) {
        f = f, S = S;
        const P = g[_], G = ye(P, T);
        for (const C in f)
          U(f[C], ir(S, C), Te(C, G), _, x);
      }
    }
    v = w, w += I;
  }
  return T.forEach((u, y) => {
    for (const F in u) {
      const f = u[F];
      f.sort(er);
      const S = [], I = [], U = [];
      for (let x = 0; x < f.length; x++) {
        const { at: _, value: P, easing: G } = f[x];
        S.push(P), I.push(bt(0, R, _)), U.push(G || "easeOut");
      }
      I[0] !== 0 && (I.unshift(0), S.unshift(S[0]), U.unshift(tr)), I[I.length - 1] !== 1 && (I.push(1), S.push(null)), l.has(y) || l.set(y, {
        keyframes: {},
        transition: {}
      });
      const g = l.get(y);
      g.keyframes[F] = S, g.transition[F] = {
        ...e,
        duration: R,
        ease: U,
        times: I,
        ...r
      };
    }
  }), l;
}
function ye(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function Te(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function or(t) {
  return Array.isArray(t) ? t : [t];
}
function ir(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const ar = (t) => typeof t == "number", sr = (t) => t.every(ar);
function cr(t, e) {
  return t in e;
}
class lr extends yt {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, r) {
    if (cr(r, e)) {
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
    return Tt();
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
function ur(t) {
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
  }, r = xt(t) && !At(t) ? new Et(e) : new Rt(e);
  r.mount(t), fe.set(t, r);
}
function dr(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, r = new lr(e);
  r.mount(t), fe.set(t, r);
}
function fr(t, e) {
  return ke(t) || typeof t == "number" || typeof t == "string" && !ge(e);
}
function $e(t, e, r, n) {
  const o = [];
  if (fr(t, e))
    o.push(Ct(t, ge(e) && e.default || e, r && (r.default || r)));
  else {
    const i = Xe(t, e, n), l = i.length;
    We(!!l, "No valid elements provided.");
    for (let T = 0; T < l; T++) {
      const b = i[T], A = b instanceof Element ? ur : dr;
      fe.has(b) || A(b);
      const v = fe.get(b), w = { ...r };
      "delay" in w && typeof w.delay == "function" && (w.delay = w.delay(T, l)), o.push(...St(v, { ...e, transition: w }, {}));
    }
  }
  return o;
}
function hr(t, e, r) {
  const n = [];
  return nr(t, e, r, { spring: Lt }).forEach(({ keyframes: i, transition: l }, T) => {
    n.push(...$e(T, i, l));
  }), n;
}
class mr {
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
class pr extends mr {
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function vr(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function gr(t) {
  function e(r, n, o) {
    let i = [];
    return vr(r) ? i = hr(r, n, t) : i = $e(r, n, o, t), new pr(i);
  }
  return e;
}
const wr = gr(), br = (t, e) => /* @__PURE__ */ h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ h(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), yr = me(br), Tr = [
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
], qe = me((t, e) => {
  const r = Tr.reduce((n, o) => {
    const { [o]: i, ...l } = n;
    return l;
  }, t);
  return /* @__PURE__ */ h(
    It,
    {
      ...r,
      variant: "ai",
      ref: e,
      iconRotate: t.icon == yr
    }
  );
});
qe.displayName = "AIButton";
const fn = ["xs", "sm", "md", "lg"], hn = [
  "inProgress",
  "executing",
  "completed"
], mn = {
  ai: rt.ai
}, He = ot(null);
function pn({
  children: t,
  translations: e
}) {
  return /* @__PURE__ */ h(He.Provider, { value: e, children: t });
}
function vn() {
  const t = it(He);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
function xe(t, e, r, n) {
  const o = Math.max(1, Math.min(t, e)), i = Math.min(r, 20), T = Math.min(i + n, o), b = Math.min(T, Math.floor(t / 2)), A = Math.min(T, Math.floor(e / 2)), v = (K) => K / t * 2 - 1, w = (K) => K / e * 2 - 1, R = 0, u = t, y = 0, F = e, f = b, S = t - b, I = A, U = e - A, g = v(R), x = v(u), _ = w(y), P = w(F), G = v(f), C = v(S), m = w(I), N = w(U), V = 0, Y = 0, z = 1, j = 1, $ = b / t, B = 1 - b / t, L = A / e, O = 1 - A / e, Z = new Float32Array([
    // Top strip
    g,
    _,
    x,
    _,
    g,
    m,
    g,
    m,
    x,
    _,
    x,
    m,
    // Bottom strip
    g,
    N,
    x,
    N,
    g,
    P,
    g,
    P,
    x,
    N,
    x,
    P,
    // Left strip
    g,
    m,
    G,
    m,
    g,
    N,
    g,
    N,
    G,
    m,
    G,
    N,
    // Right strip
    C,
    m,
    x,
    m,
    C,
    N,
    C,
    N,
    x,
    m,
    x,
    N
  ]), te = new Float32Array([
    // Top strip
    V,
    Y,
    z,
    Y,
    V,
    L,
    V,
    L,
    z,
    Y,
    z,
    L,
    // Bottom strip
    V,
    O,
    z,
    O,
    V,
    j,
    V,
    j,
    z,
    O,
    z,
    j,
    // Left strip
    V,
    L,
    $,
    L,
    V,
    O,
    V,
    O,
    $,
    L,
    $,
    O,
    // Right strip
    B,
    L,
    z,
    L,
    B,
    O,
    B,
    O,
    z,
    L,
    z,
    O
  ]);
  return { positions: Z, uvs: te };
}
function Ae(t, e, r) {
  const n = t.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  if (t.shaderSource(n, r), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(n) || "Unknown shader error";
    throw t.deleteShader(n), new Error(o);
  }
  return n;
}
function xr(t, e, r) {
  const n = Ae(t, t.VERTEX_SHADER, e), o = Ae(t, t.FRAGMENT_SHADER, r), i = t.createProgram();
  if (!i) throw new Error("Failed to create program");
  if (t.attachShader(i, n), t.attachShader(i, o), t.linkProgram(i), !t.getProgramParameter(i, t.LINK_STATUS)) {
    const l = t.getProgramInfoLog(i) || "Unknown link error";
    throw t.deleteProgram(i), t.deleteShader(n), t.deleteShader(o), new Error(l);
  }
  return t.deleteShader(n), t.deleteShader(o), i;
}
const Ar = `#version 300 es
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
`, Er = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, Rr = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function Cr(t) {
  const e = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${t}`);
  const [, r, n, o] = e;
  return [parseInt(r) / 255, parseInt(n) / 255, parseInt(o) / 255];
}
class gn {
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
    const { gl: o, program: i, vao: l, positionBuffer: T, uvBuffer: b, uResolution: A } = this.glr, v = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, w = Math.max(1, Math.floor(e * v)), R = Math.max(1, Math.floor(r * v));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${r}px`, (this.canvas.width !== w || this.canvas.height !== R) && (this.canvas.width = w, this.canvas.height = R), o.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(o, "resize: after viewport setup");
    const { positions: u, uvs: y } = xe(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * v,
      this.options.glowWidth * v
    );
    o.bindVertexArray(l), o.bindBuffer(o.ARRAY_BUFFER, T), o.bufferData(o.ARRAY_BUFFER, u, o.STATIC_DRAW);
    const F = o.getAttribLocation(i, "aPosition");
    o.enableVertexAttribArray(F), o.vertexAttribPointer(F, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after position buffer update"), o.bindBuffer(o.ARRAY_BUFFER, b), o.bufferData(o.ARRAY_BUFFER, y, o.STATIC_DRAW);
    const f = o.getAttribLocation(i, "aUV");
    o.enableVertexAttribArray(f), o.vertexAttribPointer(f, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after UV buffer update"), o.useProgram(i), o.uniform2f(A, this.canvas.width, this.canvas.height), o.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * v), o.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * v), o.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * v), this.checkGLError(o, "resize: after uniform updates");
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
    const r = xr(e, Er, Ar);
    this.checkGLError(e, "setupGL: after createProgram");
    const n = e.createVertexArray();
    e.bindVertexArray(n), this.checkGLError(e, "setupGL: after VAO creation");
    const o = this.canvas.width || 2, i = this.canvas.height || 2, { positions: l, uvs: T } = xe(
      o,
      i,
      this.options.borderWidth,
      this.options.glowWidth
    ), b = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, b), e.bufferData(e.ARRAY_BUFFER, l, e.STATIC_DRAW);
    const A = e.getAttribLocation(r, "aPosition");
    e.enableVertexAttribArray(A), e.vertexAttribPointer(A, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const v = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, v), e.bufferData(e.ARRAY_BUFFER, T, e.STATIC_DRAW);
    const w = e.getAttribLocation(r, "aUV");
    e.enableVertexAttribArray(w), e.vertexAttribPointer(w, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const R = e.getUniformLocation(r, "uResolution"), u = e.getUniformLocation(r, "uTime"), y = e.getUniformLocation(r, "uBorderWidth"), F = e.getUniformLocation(r, "uGlowWidth"), f = e.getUniformLocation(r, "uBorderRadius"), S = e.getUniformLocation(r, "uColors"), I = e.getUniformLocation(r, "uGlowExponent"), U = e.getUniformLocation(r, "uGlowFactor");
    e.useProgram(r), e.uniform1f(y, this.options.borderWidth), e.uniform1f(F, this.options.glowWidth), e.uniform1f(f, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(I, 2), e.uniform1f(U, 1.8)) : (e.uniform1f(I, 1), e.uniform1f(U, 1));
    const g = (this.options.colors || Rr).map(Cr);
    for (let x = 0; x < g.length; x++)
      e.uniform3f(
        e.getUniformLocation(r, `uColors[${x}]`),
        ...g[x]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: r,
      vao: n,
      positionBuffer: b,
      uvBuffer: v,
      uResolution: R,
      uTime: u,
      uBorderWidth: y,
      uGlowWidth: F,
      uBorderRadius: f,
      uColors: S
    };
  }
  render(e) {
    if (!this.glr) return;
    const { gl: r, program: n, vao: o, uTime: i } = this.glr;
    r.useProgram(n), r.bindVertexArray(o), r.uniform1f(i, e), r.disable(r.DEPTH_TEST), r.disable(r.CULL_FACE), r.disable(r.BLEND), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.drawArrays(r.TRIANGLES, 0, 24), this.checkGLError(r, "render: after draw call"), r.bindVertexArray(null);
  }
}
const Ee = ["lowp", "mediump", "highp"], Sr = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, Lr = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, Re = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Ce = "iTime", Se = "iTimeDelta", Le = "iDate", Ie = "iFrame", Fe = "iMouse", _e = "iResolution", Ir = "iChannel", Ne = "iChannelResolution", Pe = "iDeviceOrientation";
function Fr(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function _r(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function Nr(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const Pr = (t, e, r, n) => {
  if (Nr(r, n))
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
}, Ur = (t) => {
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
        H(
          `The uniform type "${t}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, ve = 9729, Ue = 9728, Mr = 9987, Me = 33071, Be = 10497;
class Br {
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
    const { gl: o } = this, i = 0, l = o.RGBA, T = o.RGBA, b = o.UNSIGNED_BYTE;
    o.bindTexture(o.TEXTURE_2D, e), o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, n), o.texImage2D(
      o.TEXTURE_2D,
      i,
      l,
      T,
      b,
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
    H(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: r } = this, {
      url: n,
      wrapS: o,
      wrapT: i,
      minFilter: l,
      magFilter: T,
      flipY: b = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          H(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const A = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), v = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (A === null && v === null)
      return Promise.reject(
        new Error(
          H(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: o, wrapT: i, minFilter: l, magFilter: T, flipY: b });
    const w = 0, R = r.RGBA, u = 1, y = 1, F = 0, f = r.RGBA, S = r.UNSIGNED_BYTE, I = new Uint8Array([255, 255, 255, 0]), U = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, U), r.texImage2D(
      r.TEXTURE_2D,
      w,
      R,
      u,
      y,
      F,
      f,
      S,
      I
    ), v) {
      const P = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = U, this.source = P, this.isVideo = !0, P.play().then(() => this);
    }
    async function g() {
      return new Promise((P, G) => {
        const C = new Image();
        C.crossOrigin = "anonymous", C.onload = () => {
          P(C);
        }, C.onerror = () => {
          G(new Error(H(`failed loading url: ${n}`)));
        }, C.src = n ?? "";
      });
    }
    let x = await g(), _ = (x.width & x.width - 1) === 0 && (x.height & x.height - 1) === 0;
    return (e.wrapS !== Me || e.wrapT !== Me || e.minFilter !== Ue && e.minFilter !== ve) && !_ && (x = this.makePowerOf2(x), _ = !0), r.bindTexture(r.TEXTURE_2D, U), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, b), r.texImage2D(
      r.TEXTURE_2D,
      w,
      R,
      f,
      S,
      x
    ), _ && e.minFilter !== Ue && e.minFilter !== ve && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_S,
      this.wrapS || Be
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_T,
      this.wrapT || Be
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MIN_FILTER,
      this.minFilter || Mr
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MAG_FILTER,
      this.magFilter || ve
    ), this._webglTexture = U, this.source = x, this.isVideo = !1, this.isLoaded = !0, this.width = x.width || 0, this.height = x.height || 0, this;
  };
}
const H = (t) => `react-shaders: ${t}`, Oe = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, Ve = (t, e, r) => t * (1 - r) + e * r, Or = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function Vr({
  fs: t,
  vs: e = Re,
  textures: r = [],
  uniforms: n,
  clearColor: o = [0, 0, 0, 1],
  precision: i = "highp",
  style: l,
  contextAttributes: T = {},
  lerp: b = 1,
  devicePixelRatio: A = 1,
  onDoneLoadingTextures: v,
  onError: w = console.error,
  onWarning: R = console.warn
}) {
  const u = D(null), y = D(null), F = D(null), f = D(null), S = D(void 0), I = D(void 0), U = D(!1), g = D(void 0), x = D(0), _ = D([0, 0]), P = D([]), G = D(0), C = D(void 0), m = D({
    [Ce]: { type: "float", isNeeded: !1, value: 0 },
    [Se]: { type: "float", isNeeded: !1, value: 0 },
    [Le]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Fe]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [_e]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Ie]: { type: "int", isNeeded: !1, value: 0 },
    [Pe]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), N = D(n), V = (a, c) => {
    const s = "width" in a ? a.width ?? 0 : 0, p = "height" in a ? a.height ?? 0 : 0, d = m.current.iChannelResolution;
    if (!d) return;
    const E = Array.isArray(d.value) ? d.value : d.value = [];
    E[c * 3] = s * A, E[c * 3 + 1] = p * A, E[c * 3 + 2] = 0;
  }, Y = () => {
    u.current && (y.current = u.current.getContext("webgl", T) || u.current.getContext(
      "experimental-webgl",
      T
    ), y.current?.getExtension("OES_standard_derivatives"), y.current?.getExtension("EXT_shader_texture_lod"));
  }, z = () => {
    const a = y.current;
    F.current = a?.createBuffer() ?? null, a?.bindBuffer(a.ARRAY_BUFFER, F.current);
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
    a?.bufferData(a.ARRAY_BUFFER, new Float32Array(c), a.STATIC_DRAW);
  }, j = ({
    alpha: a,
    beta: c,
    gamma: s
  }) => {
    m.current.iDeviceOrientation.value = [
      a ?? 0,
      c ?? 0,
      s ?? 0,
      window.orientation ?? 0
    ];
  }, $ = (a) => {
    const [c = 0, s = 0] = Oe(a), p = c - (g.current?.left ?? 0) - window.pageXOffset, d = (g.current?.height ?? 0) - s - (g.current?.top ?? 0) - window.pageYOffset;
    U.current = !0;
    const E = Array.isArray(m.current.iMouse?.value) ? m.current.iMouse.value : void 0;
    E && (E[2] = p, E[3] = d), _.current[0] = p, _.current[1] = d;
  }, B = (a) => {
    g.current = u.current?.getBoundingClientRect();
    const [c = 0, s = 0] = Oe(a), p = c - (g.current?.left ?? 0), d = (g.current?.height ?? 0) - s - (g.current?.top ?? 0);
    if (b !== 1)
      _.current[0] = p, _.current[1] = d;
    else {
      const E = Array.isArray(m.current.iMouse?.value) ? m.current.iMouse.value : void 0;
      E && (E[0] = p, E[1] = d);
    }
  }, L = () => {
    const a = Array.isArray(m.current.iMouse?.value) ? m.current.iMouse.value : void 0;
    a && (a[2] = 0, a[3] = 0);
  }, O = () => {
    const a = y.current;
    if (!a) return;
    g.current = u.current?.getBoundingClientRect();
    const c = A, s = Math.floor(
      (g.current?.width ?? 1) * c
    ), p = Math.floor(
      (g.current?.height ?? 1) * c
    );
    if (a.canvas.width = s, a.canvas.height = p, m.current.iResolution?.isNeeded && f.current) {
      const d = a.getUniformLocation(
        f.current,
        _e
      );
      a.uniform2fv(d, [a.canvas.width, a.canvas.height]);
    }
  }, Z = (a, c) => {
    const s = y.current;
    if (!s) return null;
    const p = s.createShader(a);
    if (!p) return null;
    if (s.shaderSource(p, c), s.compileShader(p), !s.getShaderParameter(p, s.COMPILE_STATUS)) {
      R?.(H(`Error compiling the shader:
${c}`));
      const d = s.getShaderInfoLog(p);
      s.deleteShader(p), w?.(H(`Shader compiler log: ${d}`));
    }
    return p;
  }, te = (a, c) => {
    const s = y.current;
    if (!s) return;
    const p = Z(s.FRAGMENT_SHADER, a), d = Z(s.VERTEX_SHADER, c);
    if (f.current = s.createProgram(), !(!f.current || !d || !p)) {
      if (s.attachShader(f.current, d), s.attachShader(f.current, p), s.linkProgram(f.current), !s.getProgramParameter(f.current, s.LINK_STATUS)) {
        w?.(
          H(
            `Unable to initialize the shader program: ${s.getProgramInfoLog(
              f.current
            )}`
          )
        );
        return;
      }
      s.useProgram(f.current), S.current = s.getAttribLocation(
        f.current,
        "aVertexPosition"
      ), s.enableVertexAttribArray(S.current);
    }
  }, K = () => {
    if (n)
      for (const a of Object.keys(n)) {
        const c = n[a];
        if (!c) continue;
        const { value: s, type: p } = c, d = Ur(p);
        if (!d) continue;
        const E = {};
        if (Fr(p, s)) {
          const k = p.length, q = Number.parseInt(p.charAt(k - 3)), ne = Math.floor(s.length / (q * q));
          s.length > q * q && (E.arraySize = `[${ne}]`);
        } else _r(p, s) && (E.arraySize = `[${Math.floor(s.length / Number.parseInt(p.charAt(0)))}]`);
        m.current[a] = {
          type: d,
          isNeeded: !1,
          value: s,
          ...E
        };
      }
  }, ae = () => {
    const a = y.current;
    if (a)
      if (r && r.length > 0) {
        m.current[`${Ne}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const c = r.map(
          (s, p) => (m.current[`${Ir}${p}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, V(s, p), P.current[p] = new Br(a), P.current[p]?.load(s).then((d) => {
            V(d, p);
          }))
        );
        Promise.all(c).then(() => {
          v && v();
        }).catch((s) => {
          w?.(s), v && v();
        });
      } else v && v();
  }, se = (a) => {
    const c = Ee.includes(i ?? "highp"), s = `precision ${c ? i : Ee[1]} float;
`;
    c || R?.(
      H(
        `wrong precision type ${i}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let p = s.concat(`#define DPR ${A.toFixed(1)}
`).concat(a.replace(/texture\(/g, "texture2D("));
    for (const E of Object.keys(m.current))
      if (a.includes(E)) {
        const k = m.current[E];
        if (!k) continue;
        p = Or(
          p,
          `uniform ${k.type} ${E}${k.arraySize || ""}; 
`,
          p.lastIndexOf(s) + s.length
        ), k.isNeeded = !0;
      }
    return a.includes("mainImage") && (p = p.concat(Sr)), p;
  }, Q = (a) => {
    const c = y.current;
    if (!c || !f.current) return;
    const s = G.current ? (a - G.current) / 1e3 : 0;
    G.current = a;
    const p = N.current;
    if (p)
      for (const d of Object.keys(p)) {
        const E = p[d];
        if (E && m.current[d]?.isNeeded) {
          if (!f.current) return;
          const k = c.getUniformLocation(
            f.current,
            d
          );
          if (!k) return;
          Pr(
            c,
            k,
            E.type,
            E.value
          );
        }
      }
    if (m.current.iMouse?.isNeeded) {
      const d = c.getUniformLocation(
        f.current,
        Fe
      );
      c.uniform4fv(d, m.current.iMouse.value);
    }
    if (m.current.iChannelResolution?.isNeeded) {
      const d = c.getUniformLocation(
        f.current,
        Ne
      );
      c.uniform3fv(
        d,
        m.current.iChannelResolution.value
      );
    }
    if (m.current.iDeviceOrientation?.isNeeded) {
      const d = c.getUniformLocation(
        f.current,
        Pe
      );
      c.uniform4fv(
        d,
        m.current.iDeviceOrientation.value
      );
    }
    if (m.current.iTime?.isNeeded) {
      const d = c.getUniformLocation(
        f.current,
        Ce
      );
      c.uniform1f(d, x.current += s);
    }
    if (m.current.iTimeDelta?.isNeeded) {
      const d = c.getUniformLocation(
        f.current,
        Se
      );
      c.uniform1f(d, s);
    }
    if (m.current.iDate?.isNeeded) {
      const d = /* @__PURE__ */ new Date(), E = d.getMonth() + 1, k = d.getDate(), q = d.getFullYear(), ne = d.getHours() * 60 * 60 + d.getMinutes() * 60 + d.getSeconds() + d.getMilliseconds() * 1e-3, pe = c.getUniformLocation(
        f.current,
        Le
      );
      c.uniform4fv(pe, [q, E, k, ne]);
    }
    if (m.current.iFrame?.isNeeded) {
      const d = c.getUniformLocation(
        f.current,
        Ie
      ), E = m.current.iFrame.value;
      c.uniform1i(d, E), m.current.iFrame.value = E + 1;
    }
    if (P.current.length > 0)
      for (let d = 0; d < P.current.length; d++) {
        const E = P.current[d];
        if (!E) return;
        const { isVideo: k, _webglTexture: q, source: ne, flipY: pe, isLoaded: et } = E;
        if (!et || !q || !ne) return;
        if (m.current[`iChannel${d}`]?.isNeeded) {
          if (!f.current) return;
          const tt = c.getUniformLocation(
            f.current,
            `iChannel${d}`
          );
          c.activeTexture(c.TEXTURE0 + d), c.bindTexture(c.TEXTURE_2D, q), c.uniform1i(tt, d), k && E.updateTexture(
            q,
            ne,
            pe
          );
        }
      }
  }, J = (a) => {
    const c = y.current;
    if (!c) return;
    c.viewport(0, 0, c.drawingBufferWidth, c.drawingBufferHeight), c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT), c.bindBuffer(c.ARRAY_BUFFER, F.current), c.vertexAttribPointer(
      S.current ?? 0,
      3,
      c.FLOAT,
      !1,
      0,
      0
    ), Q(a), c.drawArrays(c.TRIANGLE_STRIP, 0, 4);
    const s = m.current.iMouse?.value;
    if (m.current.iMouse?.isNeeded && b !== 1 && Array.isArray(s)) {
      const p = s[0] ?? 0, d = s[1] ?? 0;
      s[0] = Ve(p, _.current[0] ?? 0, b), s[1] = Ve(d, _.current[1] ?? 0, b);
    }
    I.current = requestAnimationFrame(J);
  }, re = () => {
    const a = { passive: !0 };
    m.current.iMouse?.isNeeded && u.current && (u.current.addEventListener("mousemove", B, a), u.current.addEventListener("mouseout", L, a), u.current.addEventListener("mouseup", L, a), u.current.addEventListener("mousedown", $, a), u.current.addEventListener("touchmove", B, a), u.current.addEventListener("touchend", L, a), u.current.addEventListener("touchstart", $, a)), m.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      j,
      a
    ), u.current && (C.current = new ResizeObserver(O), C.current.observe(u.current), window.addEventListener("resize", O, a));
  }, ee = () => {
    const a = { passive: !0 };
    m.current.iMouse?.isNeeded && u.current && (u.current.removeEventListener("mousemove", B, a), u.current.removeEventListener("mouseout", L, a), u.current.removeEventListener("mouseup", L, a), u.current.removeEventListener("mousedown", $, a), u.current.removeEventListener("touchmove", B, a), u.current.removeEventListener("touchend", L, a), u.current.removeEventListener("touchstart", $, a)), m.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      j,
      a
    ), C.current && (C.current.disconnect(), window.removeEventListener("resize", O, a));
  };
  return ue(() => {
    N.current = n;
  }, [n]), ue(() => {
    const a = P.current;
    function c() {
      Y();
      const s = y.current;
      s && u.current && (s.clearColor(...o), s.clearDepth(1), s.enable(s.DEPTH_TEST), s.depthFunc(s.LEQUAL), s.viewport(0, 0, u.current.width, u.current.height), u.current.height = u.current.clientHeight, u.current.width = u.current.clientWidth, K(), ae(), te(se(t || Lr), e || Re), z(), requestAnimationFrame(J), re(), O());
    }
    return requestAnimationFrame(c), () => {
      const s = y.current;
      if (s) {
        if (s.getExtension("WEBGL_lose_context")?.loseContext(), s.useProgram(null), s.deleteProgram(f.current ?? null), a.length > 0)
          for (const p of a)
            s.deleteTexture(p._webglTexture);
        f.current = null;
      }
      ee(), cancelAnimationFrame(I.current ?? 0);
    };
  }, []), /* @__PURE__ */ h(
    "canvas",
    {
      ref: u,
      style: { height: "100%", width: "100%", ...l }
    }
  );
}
const Dr = `
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
}`, Gr = 10, kr = 2, Wr = 0.5, zr = 0.2, Xr = 1.5, W = {
  duration: 0.5,
  ease: "easeOut"
}, De = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function ce(t) {
  const [e, r] = de(t), n = Ft(t), o = D(null);
  Ht(n, "change", (l) => r(l));
  const i = at(
    (l, T) => {
      o.current = wr(n, l, T);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: o, animate: i };
}
function Yr(t, e) {
  const [r, n] = de(Gr), {
    value: o,
    animate: i,
    motionValue: l
  } = ce(zr), { value: T, animate: b } = ce(kr), { value: A, animate: v } = ce(Wr), { value: w, animate: R } = ce(Xr), u = qt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return ue(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), i(0.2, W), b(1.2, W), v(0.4, W), R(1, W);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), i(0.3, { type: "spring", duration: 1, bounce: 0.35 }), b(1, W), v(0.7, W), R([1.5, 2], De);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), i(0.3, W), b(0.5, W), v(1, W), R([0.5, 2.5], De);
        return;
      case "speaking":
        n(70), i(0.3, W), b(0.75, W), v(1.25, W), R(1.5, W);
        return;
    }
  }, [
    t,
    i,
    b,
    v,
    R
  ]), ue(() => {
    t === "speaking" && u > 0 && !l.isAnimating() && i(0.2 + 0.2 * u, { duration: 0 });
  }, [
    t,
    u,
    l,
    i,
    b,
    v,
    R
  ]), {
    speed: r,
    scale: o,
    amplitude: T,
    frequency: A,
    brightness: w
  };
}
const $r = ie({
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
function qr(t) {
  const e = t.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, r, n, o] = e;
    return [r, n, o].map((l = "00") => parseInt(l, 16) / 255);
  }
}
function Ke({
  shape: t = 1,
  speed: e = 1,
  amplitude: r = 0.5,
  frequency: n = 0.5,
  scale: o = 0.2,
  blur: i = 1,
  color: l = "#FF355E",
  colorShift: T = 1,
  brightness: b = 1,
  themeMode: A = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: v,
  className: w,
  ...R
}) {
  const u = st(() => qr(l), [l]);
  return /* @__PURE__ */ h("div", { ref: v, className: w, ...R, children: /* @__PURE__ */ h(
    Vr,
    {
      fs: Dr,
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
        uMix: { type: "1f", value: b },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: T },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: A === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: u ?? [0, 0.7, 1] }
      },
      onError: (y) => {
        console.error("Shader error:", y);
      },
      onWarning: (y) => {
        console.warn("Shader warning:", y);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
Ke.displayName = "AuraShader";
function wn({
  size: t = "lg",
  state: e,
  color: r,
  colorShift: n = 0.05,
  audioTrack: o,
  themeMode: i,
  className: l,
  ref: T,
  ...b
}) {
  const { speed: A, scale: v, amplitude: w, frequency: R, brightness: u } = Yr(e, o);
  return /* @__PURE__ */ h(
    Ke,
    {
      ref: T,
      blur: 0.2,
      color: r,
      colorShift: n,
      speed: A,
      scale: v,
      themeMode: i,
      amplitude: w,
      frequency: R,
      brightness: u,
      className: X(
        $r({ size: t }),
        "overflow-hidden rounded-full",
        l
      ),
      ...b
    }
  );
}
const bn = ({
  text: t,
  confirmationText: e,
  onConfirm: r,
  cancelText: n,
  onCancel: o
}) => /* @__PURE__ */ M("div", { className: "flex flex-col gap-2", children: [
  t && /* @__PURE__ */ h("p", { children: t }),
  /* @__PURE__ */ M("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ h(
      we,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        icon: _t,
        onClick: r,
        label: e
      }
    ),
    /* @__PURE__ */ h(
      we,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: o,
        label: n
      }
    )
  ] })
] }), Hr = ie({
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
}), je = ie({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), Kr = ie({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), le = ie({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), jr = ({
  description: t,
  isRevealed: e,
  onAskOne: r
}) => {
  const n = Nt(), o = ze();
  return /* @__PURE__ */ M(Ge, { children: [
    t && /* @__PURE__ */ h("span", { className: X(Kr(), "truncate"), children: t }),
    /* @__PURE__ */ h(Pt, { children: r && e && /* @__PURE__ */ h(
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
        children: /* @__PURE__ */ h(
          qe,
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
}, Zr = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), Qr = ({ balance: t }) => /* @__PURE__ */ h(
  Dt,
  {
    amount: t.amount,
    percentage: t.percentage ?? void 0,
    invertStatus: t.invertStatus,
    hint: t.hint
  }
), Jr = (t) => {
  const {
    heading: e,
    label: r,
    content: n,
    shouldFadeContent: o = !1,
    fadeTransition: i
  } = t;
  return /* @__PURE__ */ M("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ h("span", { className: X(je()), children: e }),
    /* @__PURE__ */ M(
      he.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: o ? 0 : 1 },
        transition: i,
        children: [
          n === "person" && /* @__PURE__ */ M("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ h(
              Ut,
              {
                firstName: t.avatar.firstName,
                lastName: t.avatar.lastName,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ h("span", { className: X(le()), children: r })
          ] }),
          n === "people" && /* @__PURE__ */ h(
            Mt,
            {
              type: "person",
              avatars: t.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ M("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ h(
              Bt,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ h("span", { className: X(le()), children: r })
          ] }),
          n === "company" && /* @__PURE__ */ M("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ h(
              Ot,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ h("span", { className: X(le()), children: r })
          ] }),
          n === "alert" && /* @__PURE__ */ h(Vt, { text: t.alertLabel, level: t.level }),
          n === "balance" && /* @__PURE__ */ h(Qr, { balance: t.balance })
        ]
      }
    ),
    r && !Zr.has(n) && /* @__PURE__ */ h(
      he.span,
      {
        className: X(le()),
        animate: { opacity: o ? 0 : 1 },
        transition: i,
        children: r
      }
    )
  ] });
}, Ze = {
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
function en(t, e) {
  const r = t[0]?.value ?? 0, n = t[t.length - 1]?.value ?? 0, o = Math.sign(n - r), i = e ? o * -1 : o;
  return i > 0 ? "positive" : i < 0 ? "negative" : "neutral";
}
const tn = ({
  cx: t,
  cy: e,
  index: r,
  dataLength: n,
  color: o
}) => r !== n - 1 || t == null || e == null ? null : /* @__PURE__ */ h("circle", { cx: t, cy: e, r: 2, fill: o, stroke: "none" }), rn = ({
  label: t,
  direction: e
}) => {
  const r = Ze[e];
  return /* @__PURE__ */ h(
    "span",
    {
      className: X(
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
}, nn = ({
  data: t,
  label: e,
  invertStatus: r
}) => {
  const o = `sparkline-gradient-${ct().replace(/:/g, "")}`, i = en(t, r), l = Ze[i];
  return /* @__PURE__ */ h("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ M(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${i} trend`,
      children: [
        /* @__PURE__ */ h(Gt, { width: "100%", height: "100%", children: /* @__PURE__ */ M(
          kt,
          {
            data: t,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ h("defs", { children: /* @__PURE__ */ M("linearGradient", { id: o, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ h("stop", { offset: "5%", stopColor: l.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ h("stop", { offset: "95%", stopColor: l.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ h(Wt, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ h(
                zt,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: l.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${o})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (T) => /* @__PURE__ */ lt(
                    tn,
                    {
                      ...T,
                      key: T.index,
                      dataLength: t.length,
                      color: l.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ h(rn, { label: e, direction: i })
      ]
    }
  ) });
}, Qe = me(
  (t, e) => {
    const {
      description: r,
      heading: n,
      label: o,
      selected: i = !1,
      onClick: l,
      onAskOne: T,
      className: b,
      ...A
    } = t, [v, w] = de(!1), [R, u] = de(!1), y = v || R, F = ze(), f = y && !!T, S = {
      duration: F ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, I = () => {
      l?.();
    }, U = (g) => {
      g.currentTarget === g.target && (g.key === "Enter" || g.key === " ") && (g.preventDefault(), l?.());
    };
    return /* @__PURE__ */ M("div", { className: "relative", children: [
      i && /* @__PURE__ */ M(Ge, { children: [
        /* @__PURE__ */ h(
          "div",
          {
            "data-testid": "selected-border",
            className: X(
              "absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient"
            )
          }
        ),
        /* @__PURE__ */ h(
          "div",
          {
            "aria-hidden": !0,
            className: X(
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
          role: l ? "button" : void 0,
          tabIndex: l ? 0 : void 0,
          className: X(
            Hr({ selected: i }),
            i && "relative border-transparent",
            l && "cursor-pointer select-none",
            l && Xt(),
            b
          ),
          onClick: l ? I : void 0,
          onKeyDown: l ? U : void 0,
          onMouseEnter: () => w(!0),
          onMouseLeave: () => w(!1),
          onFocus: () => u(!0),
          onBlur: () => u(!1),
          children: [
            /* @__PURE__ */ h(
              jr,
              {
                description: r,
                isRevealed: y,
                onAskOne: T
              }
            ),
            A.content === "sparkline" ? /* @__PURE__ */ M("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ h("span", { className: X(je()), children: n }),
              /* @__PURE__ */ h(
                he.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: f ? 0 : 1 },
                  transition: S,
                  children: /* @__PURE__ */ h(
                    nn,
                    {
                      data: A.data,
                      label: o ?? "",
                      invertStatus: A.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ h(
              Jr,
              {
                heading: n,
                label: o,
                shouldFadeContent: f,
                fadeTransition: S,
                ...A
              }
            )
          ]
        }
      )
    ] });
  }
);
Qe.displayName = "F0AiInsightCardInternal";
const on = ["className"], Je = me((t, e) => {
  const r = on.reduce((n, o) => {
    const { [o]: i, ...l } = n;
    return l;
  }, t);
  return /* @__PURE__ */ h(Qe, { ref: e, ...r });
});
Je.displayName = "F0AiInsightCard";
const an = () => /* @__PURE__ */ M(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ h(oe, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ M("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ M("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ h(oe, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ h(oe, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ M("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ h(oe, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ h(oe, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), yn = Yt(
  $t(Je, an)
), Tn = [
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
  pn as A,
  gn as F,
  mn as a,
  hn as b,
  wn as c,
  bn as d,
  yn as e,
  Tn as f,
  qe as g,
  yr as h,
  fn as o,
  vn as u
};
