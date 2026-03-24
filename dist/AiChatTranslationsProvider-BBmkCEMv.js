import { jsx as te } from "react/jsx-runtime";
import { useInsertionEffect as We, useRef as B, useEffect as ie, useState as Pe, useCallback as ze, useMemo as ke, createContext as Xe, useContext as Ye } from "react";
import { r as $e, m as qe, n as Ke, o as He, p as Ce, q as je, s as Qe, t as Je, v as Ze, w as et, x as Ue, y as tt, V as rt, z as nt, A as ot, B as it, S as st, H as at, D as se, E as ct, G as ut, J as lt, K as ft, L as ht, M as dt } from "./registry-BIeOKTJD.js";
import { useTrackVolume as mt } from "@livekit/components-react";
import { defaultTranslations as pt } from "./i18n-provider-defaults.js";
function vt(r, e, t) {
  We(() => r.on(e, t), [r, e, t]);
}
function ue(r) {
  return typeof r == "object" && !Array.isArray(r);
}
function Me(r, e, t, n) {
  return typeof r == "string" && ue(e) ? $e(r, t, n) : r instanceof NodeList ? Array.from(r) : Array.isArray(r) ? r : [r];
}
function gt(r, e, t) {
  return r * (e + 1);
}
function le(r, e, t, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, r + parseFloat(e)) : e === "<" ? t : n.get(e) ?? r;
}
const wt = (r, e, t) => {
  const n = e - r;
  return ((t - r) % n + n) % n + r;
};
function Ne(r, e) {
  return qe(r) ? r[wt(0, r.length, e)] : r;
}
function Tt(r, e, t) {
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    o.at > e && o.at < t && (He(r, o), n--);
  }
}
function Et(r, e, t, n, o, c) {
  Tt(r, o, c);
  for (let m = 0; m < e.length; m++)
    r.push({
      value: e[m],
      at: Ke(o, c, n[m]),
      easing: Ne(t, m)
    });
}
function yt(r, e) {
  for (let t = 0; t < r.length; t++)
    r[t] = r[t] / (e + 1);
}
function At(r, e) {
  return r.at === e.at ? r.value === null ? 1 : e.value === null ? -1 : 0 : r.at - e.at;
}
const bt = "easeInOut", Rt = 20;
function xt(r, { defaultTransition: e = {}, ...t } = {}, n, o) {
  const c = e.duration || 0.3, m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = {}, R = /* @__PURE__ */ new Map();
  let p = 0, g = 0, x = 0;
  for (let l = 0; l < r.length; l++) {
    const T = r[l];
    if (typeof T == "string") {
      R.set(T, g);
      continue;
    } else if (!Array.isArray(T)) {
      R.set(T.name, le(g, T.at, p, R));
      continue;
    }
    let [P, d, L = {}] = T;
    L.at !== void 0 && (g = le(g, L.at, p, R));
    let I = 0;
    const U = (E, w, _, C = 0, V = 0) => {
      const b = Lt(E), { delay: f = 0, times: F = je(b), type: O = "keyframes", repeat: z, repeatType: W, repeatDelay: q = 0, ...k } = w;
      let { ease: M = e.ease || "easeOut", duration: S } = w;
      const N = typeof f == "function" ? f(C, V) : f, K = b.length, J = Ze(O) ? O : o?.[O];
      if (K <= 2 && J) {
        let H = 100;
        if (K === 2 && _t(b)) {
          const Q = b[1] - b[0];
          H = Math.abs(Q);
        }
        const j = { ...k };
        S !== void 0 && (j.duration = et(S));
        const Z = Qe(j, H, J);
        M = Z.ease, S = Z.duration;
      }
      S ?? (S = c);
      const $ = g + N;
      F.length === 1 && F[0] === 0 && (F[1] = 1);
      const re = F.length - b.length;
      if (re > 0 && Je(F, re), b.length === 1 && b.unshift(null), z) {
        Ue(z < Rt, "Repeat count too high, must be less than 20"), S = gt(S, z);
        const H = [...b], j = [...F];
        M = Array.isArray(M) ? [...M] : [M];
        const Z = [...M];
        for (let Q = 0; Q < z; Q++) {
          b.push(...H);
          for (let i = 0; i < H.length; i++)
            F.push(j[i] + (Q + 1)), M.push(i === 0 ? "linear" : Ne(Z, i - 1));
        }
        yt(F, z);
      }
      const ne = $ + S;
      Et(_, b, M, F, $, ne), I = Math.max(N + S, I), x = Math.max(ne, x);
    };
    if (Ce(P)) {
      const E = fe(P, y);
      U(d, L, he("default", E));
    } else {
      const E = Me(P, d, n, v), w = E.length;
      for (let _ = 0; _ < w; _++) {
        d = d, L = L;
        const C = E[_], V = fe(C, y);
        for (const b in d)
          U(d[b], St(L, b), he(b, V), _, w);
      }
    }
    p = g, g += I;
  }
  return y.forEach((l, T) => {
    for (const P in l) {
      const d = l[P];
      d.sort(At);
      const L = [], I = [], U = [];
      for (let w = 0; w < d.length; w++) {
        const { at: _, value: C, easing: V } = d[w];
        L.push(C), I.push(tt(0, x, _)), U.push(V || "easeOut");
      }
      I[0] !== 0 && (I.unshift(0), L.unshift(L[0]), U.unshift(bt)), I[I.length - 1] !== 1 && (I.push(1), L.push(null)), m.has(T) || m.set(T, {
        keyframes: {},
        transition: {}
      });
      const E = m.get(T);
      E.keyframes[P] = L, E.transition[P] = {
        ...e,
        duration: x,
        ease: U,
        times: I,
        ...t
      };
    }
  }), m;
}
function fe(r, e) {
  return !e.has(r) && e.set(r, {}), e.get(r);
}
function he(r, e) {
  return e[r] || (e[r] = []), e[r];
}
function Lt(r) {
  return Array.isArray(r) ? r : [r];
}
function St(r, e) {
  return r && r[e] ? {
    ...r,
    ...r[e]
  } : { ...r };
}
const It = (r) => typeof r == "number", _t = (r) => r.every(It);
function Ft(r, e) {
  return r in e;
}
class Pt extends rt {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, t) {
    if (Ft(t, e)) {
      const n = e[t];
      if (typeof n == "string" || typeof n == "number")
        return n;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(e, t) {
    delete t.output[e];
  }
  measureInstanceViewportBox() {
    return nt();
  }
  build(e, t) {
    Object.assign(e.output, t);
  }
  renderInstance(e, { output: t }) {
    Object.assign(e, t);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function Ct(r) {
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
  }, t = ot(r) && !it(r) ? new st(e) : new at(e);
  t.mount(r), se.set(r, t);
}
function Ut(r) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, t = new Pt(e);
  t.mount(r), se.set(r, t);
}
function Mt(r, e) {
  return Ce(r) || typeof r == "number" || typeof r == "string" && !ue(e);
}
function Oe(r, e, t, n) {
  const o = [];
  if (Mt(r, e))
    o.push(ct(r, ue(e) && e.default || e, t && (t.default || t)));
  else {
    const c = Me(r, e, n), m = c.length;
    Ue(!!m, "No valid elements provided.");
    for (let y = 0; y < m; y++) {
      const v = c[y], R = v instanceof Element ? Ct : Ut;
      se.has(v) || R(v);
      const p = se.get(v), g = { ...t };
      "delay" in g && typeof g.delay == "function" && (g.delay = g.delay(y, m)), o.push(...ut(p, { ...e, transition: g }, {}));
    }
  }
  return o;
}
function Nt(r, e, t) {
  const n = [];
  return xt(r, e, t, { spring: lt }).forEach(({ keyframes: c, transition: m }, y) => {
    n.push(...Oe(y, c, m));
  }), n;
}
class Ot {
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
  setAll(e, t) {
    for (let n = 0; n < this.animations.length; n++)
      this.animations[n][e] = t;
  }
  attachTimeline(e) {
    const t = this.animations.map((n) => n.attachTimeline(e));
    return () => {
      t.forEach((n, o) => {
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
    for (let t = 0; t < this.animations.length; t++)
      e = Math.max(e, this.animations[t].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((t) => t[e]());
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
class Bt extends Ot {
  then(e, t) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function Vt(r) {
  return Array.isArray(r) && r.some(Array.isArray);
}
function Dt(r) {
  function e(t, n, o) {
    let c = [];
    return Vt(t) ? c = Nt(t, n, r) : c = Oe(t, n, o, r), new Bt(c);
  }
  return e;
}
const Gt = Dt(), wr = ["xs", "sm", "md", "lg"], Tr = [
  "inProgress",
  "executing",
  "completed"
];
function de(r, e, t, n) {
  const o = Math.max(1, Math.min(r, e)), c = Math.min(t, 20), y = Math.min(c + n, o), v = Math.min(y, Math.floor(r / 2)), R = Math.min(y, Math.floor(e / 2)), p = ($) => $ / r * 2 - 1, g = ($) => $ / e * 2 - 1, x = 0, l = r, T = 0, P = e, d = v, L = r - v, I = R, U = e - R, E = p(x), w = p(l), _ = g(T), C = g(P), V = p(d), b = p(L), f = g(I), F = g(U), O = 0, z = 0, W = 1, q = 1, k = v / r, M = 1 - v / r, S = R / e, N = 1 - R / e, K = new Float32Array([
    // Top strip
    E,
    _,
    w,
    _,
    E,
    f,
    E,
    f,
    w,
    _,
    w,
    f,
    // Bottom strip
    E,
    F,
    w,
    F,
    E,
    C,
    E,
    C,
    w,
    F,
    w,
    C,
    // Left strip
    E,
    f,
    V,
    f,
    E,
    F,
    E,
    F,
    V,
    f,
    V,
    F,
    // Right strip
    b,
    f,
    w,
    f,
    b,
    F,
    b,
    F,
    w,
    f,
    w,
    F
  ]), J = new Float32Array([
    // Top strip
    O,
    z,
    W,
    z,
    O,
    S,
    O,
    S,
    W,
    z,
    W,
    S,
    // Bottom strip
    O,
    N,
    W,
    N,
    O,
    q,
    O,
    q,
    W,
    N,
    W,
    q,
    // Left strip
    O,
    S,
    k,
    S,
    O,
    N,
    O,
    N,
    k,
    S,
    k,
    N,
    // Right strip
    M,
    S,
    W,
    S,
    M,
    N,
    M,
    N,
    W,
    S,
    W,
    N
  ]);
  return { positions: K, uvs: J };
}
function me(r, e, t) {
  const n = r.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  if (r.shaderSource(n, t), r.compileShader(n), !r.getShaderParameter(n, r.COMPILE_STATUS)) {
    const o = r.getShaderInfoLog(n) || "Unknown shader error";
    throw r.deleteShader(n), new Error(o);
  }
  return n;
}
function Wt(r, e, t) {
  const n = me(r, r.VERTEX_SHADER, e), o = me(r, r.FRAGMENT_SHADER, t), c = r.createProgram();
  if (!c) throw new Error("Failed to create program");
  if (r.attachShader(c, n), r.attachShader(c, o), r.linkProgram(c), !r.getProgramParameter(c, r.LINK_STATUS)) {
    const m = r.getProgramInfoLog(c) || "Unknown link error";
    throw r.deleteProgram(c), r.deleteShader(n), r.deleteShader(o), new Error(m);
  }
  return r.deleteShader(n), r.deleteShader(o), c;
}
const zt = `#version 300 es
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
`, kt = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, Xt = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function Yt(r) {
  const e = r.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${r}`);
  const [, t, n, o] = e;
  return [parseInt(t) / 255, parseInt(n) / 255, parseInt(o) / 255];
}
class Er {
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
      const t = performance.now();
      if (t - this.lastTime < 1e3 / 32) return;
      this.lastTime = t;
      const o = (t - this.startTime) * 1e-3;
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
    const { gl: e, vao: t, positionBuffer: n, uvBuffer: o, program: c } = this.glr;
    t && e.deleteVertexArray(t), n && e.deleteBuffer(n), o && e.deleteBuffer(o), e.deleteProgram(c), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(e, t, n) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = e, this.options.height = t, n && (this.options.ratio = n), !this.running) return;
    const { gl: o, program: c, vao: m, positionBuffer: y, uvBuffer: v, uResolution: R } = this.glr, p = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, g = Math.max(1, Math.floor(e * p)), x = Math.max(1, Math.floor(t * p));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${t}px`, (this.canvas.width !== g || this.canvas.height !== x) && (this.canvas.width = g, this.canvas.height = x), o.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(o, "resize: after viewport setup");
    const { positions: l, uvs: T } = de(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * p,
      this.options.glowWidth * p
    );
    o.bindVertexArray(m), o.bindBuffer(o.ARRAY_BUFFER, y), o.bufferData(o.ARRAY_BUFFER, l, o.STATIC_DRAW);
    const P = o.getAttribLocation(c, "aPosition");
    o.enableVertexAttribArray(P), o.vertexAttribPointer(P, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after position buffer update"), o.bindBuffer(o.ARRAY_BUFFER, v), o.bufferData(o.ARRAY_BUFFER, T, o.STATIC_DRAW);
    const d = o.getAttribLocation(c, "aUV");
    o.enableVertexAttribArray(d), o.vertexAttribPointer(d, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after UV buffer update"), o.useProgram(c), o.uniform2f(R, this.canvas.width, this.canvas.height), o.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * p), o.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * p), o.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * p), this.checkGLError(o, "resize: after uniform updates");
    const L = performance.now();
    this.lastTime = L;
    const I = (L - this.startTime) * 1e-3;
    this.render(I);
  }
  /**
   * Automatically resizes the canvas to match the dimensions of the given element.
   * @note using ResizeObserver
   */
  autoResize(e) {
    this.observer && this.observer.disconnect(), this.observer = new ResizeObserver(() => {
      const t = e.getBoundingClientRect();
      this.resize(t.width, t.height);
    }), this.observer.observe(e);
  }
  fadeIn() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((e, t) => {
      const n = this.canvas.animate(
        [
          { opacity: 0, transform: "scale(1.2)" },
          { opacity: 1, transform: "scale(1)" }
        ],
        { duration: 300, easing: "ease-out", fill: "forwards" }
      );
      n.onfinish = () => e(), n.oncancel = () => t("canceled");
    });
  }
  fadeOut() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((e, t) => {
      const n = this.canvas.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.2)" }
        ],
        { duration: 300, easing: "ease-in", fill: "forwards" }
      );
      n.onfinish = () => e(), n.oncancel = () => t("canceled");
    });
  }
  checkGLError(e, t) {
    let n = e.getError();
    if (n !== e.NO_ERROR)
      for (console.error(`WebGL Error in ${t}`); n !== e.NO_ERROR; ) {
        const o = this.getGLErrorName(e, n);
        console.error(`${o} (0x${n.toString(16)})`), n = e.getError();
      }
  }
  getGLErrorName(e, t) {
    switch (t) {
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
    const t = Wt(e, kt, zt);
    this.checkGLError(e, "setupGL: after createProgram");
    const n = e.createVertexArray();
    e.bindVertexArray(n), this.checkGLError(e, "setupGL: after VAO creation");
    const o = this.canvas.width || 2, c = this.canvas.height || 2, { positions: m, uvs: y } = de(
      o,
      c,
      this.options.borderWidth,
      this.options.glowWidth
    ), v = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, v), e.bufferData(e.ARRAY_BUFFER, m, e.STATIC_DRAW);
    const R = e.getAttribLocation(t, "aPosition");
    e.enableVertexAttribArray(R), e.vertexAttribPointer(R, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const p = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, p), e.bufferData(e.ARRAY_BUFFER, y, e.STATIC_DRAW);
    const g = e.getAttribLocation(t, "aUV");
    e.enableVertexAttribArray(g), e.vertexAttribPointer(g, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const x = e.getUniformLocation(t, "uResolution"), l = e.getUniformLocation(t, "uTime"), T = e.getUniformLocation(t, "uBorderWidth"), P = e.getUniformLocation(t, "uGlowWidth"), d = e.getUniformLocation(t, "uBorderRadius"), L = e.getUniformLocation(t, "uColors"), I = e.getUniformLocation(t, "uGlowExponent"), U = e.getUniformLocation(t, "uGlowFactor");
    e.useProgram(t), e.uniform1f(T, this.options.borderWidth), e.uniform1f(P, this.options.glowWidth), e.uniform1f(d, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(I, 2), e.uniform1f(U, 1.8)) : (e.uniform1f(I, 1), e.uniform1f(U, 1));
    const E = (this.options.colors || Xt).map(Yt);
    for (let w = 0; w < E.length; w++)
      e.uniform3f(
        e.getUniformLocation(t, `uColors[${w}]`),
        ...E[w]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: t,
      vao: n,
      positionBuffer: v,
      uvBuffer: p,
      uResolution: x,
      uTime: l,
      uBorderWidth: T,
      uGlowWidth: P,
      uBorderRadius: d,
      uColors: L
    };
  }
  render(e) {
    if (!this.glr) return;
    const { gl: t, program: n, vao: o, uTime: c } = this.glr;
    t.useProgram(n), t.bindVertexArray(o), t.uniform1f(c, e), t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.disable(t.BLEND), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLES, 0, 24), this.checkGLError(t, "render: after draw call"), t.bindVertexArray(null);
  }
}
const pe = ["lowp", "mediump", "highp"], $t = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, qt = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, ve = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, ge = "iTime", we = "iTimeDelta", Te = "iDate", Ee = "iFrame", ye = "iMouse", Ae = "iResolution", Kt = "iChannel", be = "iChannelResolution", Re = "iDeviceOrientation";
function Ht(r, e) {
  return r.includes("Matrix") && Array.isArray(e);
}
function jt(r, e) {
  return r.includes("v") && Array.isArray(e) && e.length > Number.parseInt(r.charAt(0));
}
function Qt(r, e) {
  return !r.includes("v") && Array.isArray(e) && e.length > Number.parseInt(r.charAt(0));
}
const Jt = (r, e, t, n) => {
  if (Qt(t, n))
    switch (t) {
      case "2f":
        return r.uniform2f(e, n[0], n[1]);
      case "3f":
        return r.uniform3f(e, n[0], n[1], n[2]);
      case "4f":
        return r.uniform4f(e, n[0], n[1], n[2], n[3]);
      case "2i":
        return r.uniform2i(e, n[0], n[1]);
      case "3i":
        return r.uniform3i(e, n[0], n[1], n[2]);
      case "4i":
        return r.uniform4i(e, n[0], n[1], n[2], n[3]);
    }
  if (typeof n == "number")
    return t === "1i" ? r.uniform1i(e, n) : r.uniform1f(e, n);
  switch (t) {
    case "1iv":
      return r.uniform1iv(e, n);
    case "2iv":
      return r.uniform2iv(e, n);
    case "3iv":
      return r.uniform3iv(e, n);
    case "4iv":
      return r.uniform4iv(e, n);
    case "1fv":
      return r.uniform1fv(e, n);
    case "2fv":
      return r.uniform2fv(e, n);
    case "3fv":
      return r.uniform3fv(e, n);
    case "4fv":
      return r.uniform4fv(e, n);
    case "Matrix2fv":
      return r.uniformMatrix2fv(e, !1, n);
    case "Matrix3fv":
      return r.uniformMatrix3fv(e, !1, n);
    case "Matrix4fv":
      return r.uniformMatrix4fv(e, !1, n);
  }
}, Zt = (r) => {
  switch (r) {
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
        Y(
          `The uniform type "${r}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, ce = 9729, xe = 9728, er = 9987, Le = 33071, Se = 10497;
class tr {
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
  updateTexture = (e, t, n) => {
    const { gl: o } = this, c = 0, m = o.RGBA, y = o.RGBA, v = o.UNSIGNED_BYTE;
    o.bindTexture(o.TEXTURE_2D, e), o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, n), o.texImage2D(
      o.TEXTURE_2D,
      c,
      m,
      y,
      v,
      t
    );
  };
  setupVideo = (e) => {
    const t = document.createElement("video");
    let n = !1, o = !1;
    t.autoplay = !0, t.muted = !0, t.loop = !0, t.crossOrigin = "anonymous";
    const c = () => {
      n && o && (this.isLoaded = !0);
    };
    return t.addEventListener(
      "playing",
      () => {
        n = !0, this.width = t.videoWidth || 0, this.height = t.videoHeight || 0, c();
      },
      !0
    ), t.addEventListener(
      "timeupdate",
      () => {
        o = !0, c();
      },
      !0
    ), t.src = e, t;
  };
  makePowerOf2 = (e) => e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageBitmap ? (this.pow2canvas === void 0 && (this.pow2canvas = document.createElement("canvas")), this.pow2canvas.width = 2 ** Math.floor(Math.log(e.width) / Math.LN2), this.pow2canvas.height = 2 ** Math.floor(Math.log(e.height) / Math.LN2), this.pow2canvas.getContext("2d")?.drawImage(
    e,
    0,
    0,
    this.pow2canvas.width,
    this.pow2canvas.height
  ), console.warn(
    Y(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: t } = this, {
      url: n,
      wrapS: o,
      wrapT: c,
      minFilter: m,
      magFilter: y,
      flipY: v = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          Y(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const R = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), p = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (R === null && p === null)
      return Promise.reject(
        new Error(
          Y(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: o, wrapT: c, minFilter: m, magFilter: y, flipY: v });
    const g = 0, x = t.RGBA, l = 1, T = 1, P = 0, d = t.RGBA, L = t.UNSIGNED_BYTE, I = new Uint8Array([255, 255, 255, 0]), U = t.createTexture();
    if (t.bindTexture(t.TEXTURE_2D, U), t.texImage2D(
      t.TEXTURE_2D,
      g,
      x,
      l,
      T,
      P,
      d,
      L,
      I
    ), p) {
      const C = this.setupVideo(n);
      return t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), this._webglTexture = U, this.source = C, this.isVideo = !0, C.play().then(() => this);
    }
    async function E() {
      return new Promise((C, V) => {
        const b = new Image();
        b.crossOrigin = "anonymous", b.onload = () => {
          C(b);
        }, b.onerror = () => {
          V(new Error(Y(`failed loading url: ${n}`)));
        }, b.src = n ?? "";
      });
    }
    let w = await E(), _ = (w.width & w.width - 1) === 0 && (w.height & w.height - 1) === 0;
    return (e.wrapS !== Le || e.wrapT !== Le || e.minFilter !== xe && e.minFilter !== ce) && !_ && (w = this.makePowerOf2(w), _ = !0), t.bindTexture(t.TEXTURE_2D, U), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, v), t.texImage2D(
      t.TEXTURE_2D,
      g,
      x,
      d,
      L,
      w
    ), _ && e.minFilter !== xe && e.minFilter !== ce && t.generateMipmap(t.TEXTURE_2D), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_S,
      this.wrapS || Se
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_T,
      this.wrapT || Se
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MIN_FILTER,
      this.minFilter || er
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MAG_FILTER,
      this.magFilter || ce
    ), this._webglTexture = U, this.source = w, this.isVideo = !1, this.isLoaded = !0, this.width = w.width || 0, this.height = w.height || 0, this;
  };
}
const Y = (r) => `react-shaders: ${r}`, Ie = (r) => {
  if ("changedTouches" in r) {
    const e = r.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [r.clientX, r.clientY];
}, _e = (r, e, t) => r * (1 - t) + e * t, rr = (r, e, t) => t > 0 ? r.substring(0, t) + e + r.substring(t, r.length) : e + r;
function nr({
  fs: r,
  vs: e = ve,
  textures: t = [],
  uniforms: n,
  clearColor: o = [0, 0, 0, 1],
  precision: c = "highp",
  style: m,
  contextAttributes: y = {},
  lerp: v = 1,
  devicePixelRatio: R = 1,
  onDoneLoadingTextures: p,
  onError: g = console.error,
  onWarning: x = console.warn
}) {
  const l = B(null), T = B(null), P = B(null), d = B(null), L = B(void 0), I = B(void 0), U = B(!1), E = B(void 0), w = B(0), _ = B([0, 0]), C = B([]), V = B(0), b = B(void 0), f = B({
    [ge]: { type: "float", isNeeded: !1, value: 0 },
    [we]: { type: "float", isNeeded: !1, value: 0 },
    [Te]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [ye]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Ae]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Ee]: { type: "int", isNeeded: !1, value: 0 },
    [Re]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), F = B(n), O = (i, a) => {
    const s = "width" in i ? i.width ?? 0 : 0, h = "height" in i ? i.height ?? 0 : 0, u = f.current.iChannelResolution;
    if (!u) return;
    const A = Array.isArray(u.value) ? u.value : u.value = [];
    A[a * 3] = s * R, A[a * 3 + 1] = h * R, A[a * 3 + 2] = 0;
  }, z = () => {
    l.current && (T.current = l.current.getContext("webgl", y) || l.current.getContext(
      "experimental-webgl",
      y
    ), T.current?.getExtension("OES_standard_derivatives"), T.current?.getExtension("EXT_shader_texture_lod"));
  }, W = () => {
    const i = T.current;
    P.current = i?.createBuffer() ?? null, i?.bindBuffer(i.ARRAY_BUFFER, P.current);
    const a = [
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
    i?.bufferData(i.ARRAY_BUFFER, new Float32Array(a), i.STATIC_DRAW);
  }, q = ({
    alpha: i,
    beta: a,
    gamma: s
  }) => {
    f.current.iDeviceOrientation.value = [
      i ?? 0,
      a ?? 0,
      s ?? 0,
      window.orientation ?? 0
    ];
  }, k = (i) => {
    const [a = 0, s = 0] = Ie(i), h = a - (E.current?.left ?? 0) - window.pageXOffset, u = (E.current?.height ?? 0) - s - (E.current?.top ?? 0) - window.pageYOffset;
    U.current = !0;
    const A = Array.isArray(f.current.iMouse?.value) ? f.current.iMouse.value : void 0;
    A && (A[2] = h, A[3] = u), _.current[0] = h, _.current[1] = u;
  }, M = (i) => {
    E.current = l.current?.getBoundingClientRect();
    const [a = 0, s = 0] = Ie(i), h = a - (E.current?.left ?? 0), u = (E.current?.height ?? 0) - s - (E.current?.top ?? 0);
    if (v !== 1)
      _.current[0] = h, _.current[1] = u;
    else {
      const A = Array.isArray(f.current.iMouse?.value) ? f.current.iMouse.value : void 0;
      A && (A[0] = h, A[1] = u);
    }
  }, S = () => {
    const i = Array.isArray(f.current.iMouse?.value) ? f.current.iMouse.value : void 0;
    i && (i[2] = 0, i[3] = 0);
  }, N = () => {
    const i = T.current;
    if (!i) return;
    E.current = l.current?.getBoundingClientRect();
    const a = R, s = Math.floor(
      (E.current?.width ?? 1) * a
    ), h = Math.floor(
      (E.current?.height ?? 1) * a
    );
    if (i.canvas.width = s, i.canvas.height = h, f.current.iResolution?.isNeeded && d.current) {
      const u = i.getUniformLocation(
        d.current,
        Ae
      );
      i.uniform2fv(u, [i.canvas.width, i.canvas.height]);
    }
  }, K = (i, a) => {
    const s = T.current;
    if (!s) return null;
    const h = s.createShader(i);
    if (!h) return null;
    if (s.shaderSource(h, a), s.compileShader(h), !s.getShaderParameter(h, s.COMPILE_STATUS)) {
      x?.(Y(`Error compiling the shader:
${a}`));
      const u = s.getShaderInfoLog(h);
      s.deleteShader(h), g?.(Y(`Shader compiler log: ${u}`));
    }
    return h;
  }, J = (i, a) => {
    const s = T.current;
    if (!s) return;
    const h = K(s.FRAGMENT_SHADER, i), u = K(s.VERTEX_SHADER, a);
    if (d.current = s.createProgram(), !(!d.current || !u || !h)) {
      if (s.attachShader(d.current, u), s.attachShader(d.current, h), s.linkProgram(d.current), !s.getProgramParameter(d.current, s.LINK_STATUS)) {
        g?.(
          Y(
            `Unable to initialize the shader program: ${s.getProgramInfoLog(
              d.current
            )}`
          )
        );
        return;
      }
      s.useProgram(d.current), L.current = s.getAttribLocation(
        d.current,
        "aVertexPosition"
      ), s.enableVertexAttribArray(L.current);
    }
  }, $ = () => {
    if (n)
      for (const i of Object.keys(n)) {
        const a = n[i];
        if (!a) continue;
        const { value: s, type: h } = a, u = Zt(h);
        if (!u) continue;
        const A = {};
        if (Ht(h, s)) {
          const D = h.length, X = Number.parseInt(h.charAt(D - 3)), ee = Math.floor(s.length / (X * X));
          s.length > X * X && (A.arraySize = `[${ee}]`);
        } else jt(h, s) && (A.arraySize = `[${Math.floor(s.length / Number.parseInt(h.charAt(0)))}]`);
        f.current[i] = {
          type: u,
          isNeeded: !1,
          value: s,
          ...A
        };
      }
  }, re = () => {
    const i = T.current;
    if (i)
      if (t && t.length > 0) {
        f.current[`${be}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${t.length}]`,
          value: []
        };
        const a = t.map(
          (s, h) => (f.current[`${Kt}${h}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, O(s, h), C.current[h] = new tr(i), C.current[h]?.load(s).then((u) => {
            O(u, h);
          }))
        );
        Promise.all(a).then(() => {
          p && p();
        }).catch((s) => {
          g?.(s), p && p();
        });
      } else p && p();
  }, ne = (i) => {
    const a = pe.includes(c ?? "highp"), s = `precision ${a ? c : pe[1]} float;
`;
    a || x?.(
      Y(
        `wrong precision type ${c}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let h = s.concat(`#define DPR ${R.toFixed(1)}
`).concat(i.replace(/texture\(/g, "texture2D("));
    for (const A of Object.keys(f.current))
      if (i.includes(A)) {
        const D = f.current[A];
        if (!D) continue;
        h = rr(
          h,
          `uniform ${D.type} ${A}${D.arraySize || ""}; 
`,
          h.lastIndexOf(s) + s.length
        ), D.isNeeded = !0;
      }
    return i.includes("mainImage") && (h = h.concat($t)), h;
  }, H = (i) => {
    const a = T.current;
    if (!a || !d.current) return;
    const s = V.current ? (i - V.current) / 1e3 : 0;
    V.current = i;
    const h = F.current;
    if (h)
      for (const u of Object.keys(h)) {
        const A = h[u];
        if (A && f.current[u]?.isNeeded) {
          if (!d.current) return;
          const D = a.getUniformLocation(
            d.current,
            u
          );
          if (!D) return;
          Jt(
            a,
            D,
            A.type,
            A.value
          );
        }
      }
    if (f.current.iMouse?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        ye
      );
      a.uniform4fv(u, f.current.iMouse.value);
    }
    if (f.current.iChannelResolution?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        be
      );
      a.uniform3fv(
        u,
        f.current.iChannelResolution.value
      );
    }
    if (f.current.iDeviceOrientation?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        Re
      );
      a.uniform4fv(
        u,
        f.current.iDeviceOrientation.value
      );
    }
    if (f.current.iTime?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        ge
      );
      a.uniform1f(u, w.current += s);
    }
    if (f.current.iTimeDelta?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        we
      );
      a.uniform1f(u, s);
    }
    if (f.current.iDate?.isNeeded) {
      const u = /* @__PURE__ */ new Date(), A = u.getMonth() + 1, D = u.getDate(), X = u.getFullYear(), ee = u.getHours() * 60 * 60 + u.getMinutes() * 60 + u.getSeconds() + u.getMilliseconds() * 1e-3, ae = a.getUniformLocation(
        d.current,
        Te
      );
      a.uniform4fv(ae, [X, A, D, ee]);
    }
    if (f.current.iFrame?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        Ee
      ), A = f.current.iFrame.value;
      a.uniform1i(u, A), f.current.iFrame.value = A + 1;
    }
    if (C.current.length > 0)
      for (let u = 0; u < C.current.length; u++) {
        const A = C.current[u];
        if (!A) return;
        const { isVideo: D, _webglTexture: X, source: ee, flipY: ae, isLoaded: De } = A;
        if (!De || !X || !ee) return;
        if (f.current[`iChannel${u}`]?.isNeeded) {
          if (!d.current) return;
          const Ge = a.getUniformLocation(
            d.current,
            `iChannel${u}`
          );
          a.activeTexture(a.TEXTURE0 + u), a.bindTexture(a.TEXTURE_2D, X), a.uniform1i(Ge, u), D && A.updateTexture(
            X,
            ee,
            ae
          );
        }
      }
  }, j = (i) => {
    const a = T.current;
    if (!a) return;
    a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), a.bindBuffer(a.ARRAY_BUFFER, P.current), a.vertexAttribPointer(
      L.current ?? 0,
      3,
      a.FLOAT,
      !1,
      0,
      0
    ), H(i), a.drawArrays(a.TRIANGLE_STRIP, 0, 4);
    const s = f.current.iMouse?.value;
    if (f.current.iMouse?.isNeeded && v !== 1 && Array.isArray(s)) {
      const h = s[0] ?? 0, u = s[1] ?? 0;
      s[0] = _e(h, _.current[0] ?? 0, v), s[1] = _e(u, _.current[1] ?? 0, v);
    }
    I.current = requestAnimationFrame(j);
  }, Z = () => {
    const i = { passive: !0 };
    f.current.iMouse?.isNeeded && l.current && (l.current.addEventListener("mousemove", M, i), l.current.addEventListener("mouseout", S, i), l.current.addEventListener("mouseup", S, i), l.current.addEventListener("mousedown", k, i), l.current.addEventListener("touchmove", M, i), l.current.addEventListener("touchend", S, i), l.current.addEventListener("touchstart", k, i)), f.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      q,
      i
    ), l.current && (b.current = new ResizeObserver(N), b.current.observe(l.current), window.addEventListener("resize", N, i));
  }, Q = () => {
    const i = { passive: !0 };
    f.current.iMouse?.isNeeded && l.current && (l.current.removeEventListener("mousemove", M, i), l.current.removeEventListener("mouseout", S, i), l.current.removeEventListener("mouseup", S, i), l.current.removeEventListener("mousedown", k, i), l.current.removeEventListener("touchmove", M, i), l.current.removeEventListener("touchend", S, i), l.current.removeEventListener("touchstart", k, i)), f.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      q,
      i
    ), b.current && (b.current.disconnect(), window.removeEventListener("resize", N, i));
  };
  return ie(() => {
    F.current = n;
  }, [n]), ie(() => {
    const i = C.current;
    function a() {
      z();
      const s = T.current;
      s && l.current && (s.clearColor(...o), s.clearDepth(1), s.enable(s.DEPTH_TEST), s.depthFunc(s.LEQUAL), s.viewport(0, 0, l.current.width, l.current.height), l.current.height = l.current.clientHeight, l.current.width = l.current.clientWidth, $(), re(), J(ne(r || qt), e || ve), W(), requestAnimationFrame(j), Z(), N());
    }
    return requestAnimationFrame(a), () => {
      const s = T.current;
      if (s) {
        if (s.getExtension("WEBGL_lose_context")?.loseContext(), s.useProgram(null), s.deleteProgram(d.current ?? null), i.length > 0)
          for (const h of i)
            s.deleteTexture(h._webglTexture);
        d.current = null;
      }
      Q(), cancelAnimationFrame(I.current ?? 0);
    };
  }, []), /* @__PURE__ */ te(
    "canvas",
    {
      ref: l,
      style: { height: "100%", width: "100%", ...m }
    }
  );
}
const or = `
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
}`, ir = 10, sr = 2, ar = 0.5, cr = 0.2, ur = 1.5, G = {
  duration: 0.5,
  ease: "easeOut"
}, Fe = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function oe(r) {
  const [e, t] = Pe(r), n = ft(r), o = B(null);
  vt(n, "change", (m) => t(m));
  const c = ze(
    (m, y) => {
      o.current = Gt(n, m, y);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: o, animate: c };
}
function lr(r, e) {
  const [t, n] = Pe(ir), {
    value: o,
    animate: c,
    motionValue: m
  } = oe(cr), { value: y, animate: v } = oe(sr), { value: R, animate: p } = oe(ar), { value: g, animate: x } = oe(ur), l = mt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return ie(() => {
    switch (r) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), c(0.2, G), v(1.2, G), p(0.4, G), x(1, G);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), c(0.3, { type: "spring", duration: 1, bounce: 0.35 }), v(1, G), p(0.7, G), x([1.5, 2], Fe);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), c(0.3, G), v(0.5, G), p(1, G), x([0.5, 2.5], Fe);
        return;
      case "speaking":
        n(70), c(0.3, G), v(0.75, G), p(1.25, G), x(1.5, G);
        return;
    }
  }, [
    r,
    c,
    v,
    p,
    x
  ]), ie(() => {
    r === "speaking" && l > 0 && !m.isAnimating() && c(0.2 + 0.2 * l, { duration: 0 });
  }, [
    r,
    l,
    m,
    c,
    v,
    p,
    x
  ]), {
    speed: t,
    scale: o,
    amplitude: y,
    frequency: R,
    brightness: g
  };
}
const fr = dt({
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
function hr(r) {
  const e = r.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, t, n, o] = e;
    return [t, n, o].map((m = "00") => parseInt(m, 16) / 255);
  }
}
function Be({
  shape: r = 1,
  speed: e = 1,
  amplitude: t = 0.5,
  frequency: n = 0.5,
  scale: o = 0.2,
  blur: c = 1,
  color: m = "#FF355E",
  colorShift: y = 1,
  brightness: v = 1,
  themeMode: R = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: p,
  className: g,
  ...x
}) {
  const l = ke(() => hr(m), [m]);
  return /* @__PURE__ */ te("div", { ref: p, className: g, ...x, children: /* @__PURE__ */ te(
    nr,
    {
      fs: or,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: e },
        // Edge blur/softness
        uBlur: { type: "1f", value: c },
        // Shape scale
        uScale: { type: "1f", value: o },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: r },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: n },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: t },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: v },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: y },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: R === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: l ?? [0, 0.7, 1] }
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
Be.displayName = "AuraShader";
function yr({
  size: r = "lg",
  state: e,
  color: t,
  colorShift: n = 0.05,
  audioTrack: o,
  themeMode: c,
  className: m,
  ref: y,
  ...v
}) {
  const { speed: R, scale: p, amplitude: g, frequency: x, brightness: l } = lr(e, o);
  return /* @__PURE__ */ te(
    Be,
    {
      ref: y,
      blur: 0.2,
      color: t,
      colorShift: n,
      speed: R,
      scale: p,
      themeMode: c,
      amplitude: g,
      frequency: x,
      brightness: l,
      className: ht(
        fr({ size: r }),
        "overflow-hidden rounded-full",
        m
      ),
      ...v
    }
  );
}
const Ar = {
  ai: pt.ai
}, Ve = Xe(null);
function br({
  children: r,
  translations: e
}) {
  return /* @__PURE__ */ te(Ve.Provider, { value: e, children: r });
}
function Rr() {
  const r = Ye(Ve);
  if (r === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return r;
}
export {
  br as A,
  Er as F,
  Ar as a,
  Tr as b,
  yr as c,
  wr as o,
  Rr as u
};
