import { defaultTranslations as ze } from "./i18n-provider-defaults.js";
import { jsx as q, jsxs as le } from "react/jsx-runtime";
import { useInsertionEffect as Xe, createContext as Ye, useContext as $e, useRef as B, useEffect as ie, useState as Ue, useCallback as qe, useMemo as je } from "react";
import { O as He, Q as Ke, U as Qe, V as Ze, W as Me, X as Je, Y as et, Z as tt, _ as rt, $ as nt, a0 as Ne, a1 as ot, a2 as it, a3 as st, a4 as at, a5 as ct, a6 as ut, a7 as lt, a8 as se, a9 as ft, aa as dt, ab as ht, h as mt, r as pt, E as fe } from "./index-Bla76Kfk.js";
import { useTrackVolume as vt } from "@livekit/components-react";
import { k as gt, l as wt } from "./F0AiChat--Le5-xiy.js";
function Tt(t, e, r) {
  Xe(() => t.on(e, r), [t, e, r]);
}
function ue(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Oe(t, e, r, n) {
  return typeof t == "string" && ue(e) ? He(t, r, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function Et(t, e, r) {
  return t * (e + 1);
}
function de(t, e, r, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : n.get(e) ?? t;
}
const yt = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function Be(t, e) {
  return Ke(t) ? t[yt(0, t.length, e)] : t;
}
function At(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    o.at > e && o.at < r && (Ze(t, o), n--);
  }
}
function bt(t, e, r, n, o, c) {
  At(t, o, c);
  for (let m = 0; m < e.length; m++)
    t.push({
      value: e[m],
      at: Qe(o, c, n[m]),
      easing: Be(r, m)
    });
}
function Rt(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] = t[r] / (e + 1);
}
function xt(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const Lt = "easeInOut", St = 20;
function It(t, { defaultTransition: e = {}, ...r } = {}, n, o) {
  const c = e.duration || 0.3, m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = {}, R = /* @__PURE__ */ new Map();
  let p = 0, g = 0, x = 0;
  for (let l = 0; l < t.length; l++) {
    const T = t[l];
    if (typeof T == "string") {
      R.set(T, g);
      continue;
    } else if (!Array.isArray(T)) {
      R.set(T.name, de(g, T.at, p, R));
      continue;
    }
    let [C, h, L = {}] = T;
    L.at !== void 0 && (g = de(g, L.at, p, R));
    let I = 0;
    const U = (E, w, _, P = 0, V = 0) => {
      const b = _t(E), { delay: f = 0, times: F = Je(b), type: O = "keyframes", repeat: k, repeatType: W, repeatDelay: j = 0, ...z } = w;
      let { ease: M = e.ease || "easeOut", duration: S } = w;
      const N = typeof f == "function" ? f(P, V) : f, H = b.length, J = rt(O) ? O : o?.[O];
      if (H <= 2 && J) {
        let K = 100;
        if (H === 2 && Pt(b)) {
          const Z = b[1] - b[0];
          K = Math.abs(Z);
        }
        const Q = { ...z };
        S !== void 0 && (Q.duration = nt(S));
        const ee = et(Q, K, J);
        M = ee.ease, S = ee.duration;
      }
      S ?? (S = c);
      const $ = g + N;
      F.length === 1 && F[0] === 0 && (F[1] = 1);
      const re = F.length - b.length;
      if (re > 0 && tt(F, re), b.length === 1 && b.unshift(null), k) {
        Ne(k < St, "Repeat count too high, must be less than 20"), S = Et(S, k);
        const K = [...b], Q = [...F];
        M = Array.isArray(M) ? [...M] : [M];
        const ee = [...M];
        for (let Z = 0; Z < k; Z++) {
          b.push(...K);
          for (let i = 0; i < K.length; i++)
            F.push(Q[i] + (Z + 1)), M.push(i === 0 ? "linear" : Be(ee, i - 1));
        }
        Rt(F, k);
      }
      const ne = $ + S;
      bt(_, b, M, F, $, ne), I = Math.max(N + S, I), x = Math.max(ne, x);
    };
    if (Me(C)) {
      const E = he(C, y);
      U(h, L, me("default", E));
    } else {
      const E = Oe(C, h, n, v), w = E.length;
      for (let _ = 0; _ < w; _++) {
        h = h, L = L;
        const P = E[_], V = he(P, y);
        for (const b in h)
          U(h[b], Ft(L, b), me(b, V), _, w);
      }
    }
    p = g, g += I;
  }
  return y.forEach((l, T) => {
    for (const C in l) {
      const h = l[C];
      h.sort(xt);
      const L = [], I = [], U = [];
      for (let w = 0; w < h.length; w++) {
        const { at: _, value: P, easing: V } = h[w];
        L.push(P), I.push(ot(0, x, _)), U.push(V || "easeOut");
      }
      I[0] !== 0 && (I.unshift(0), L.unshift(L[0]), U.unshift(Lt)), I[I.length - 1] !== 1 && (I.push(1), L.push(null)), m.has(T) || m.set(T, {
        keyframes: {},
        transition: {}
      });
      const E = m.get(T);
      E.keyframes[C] = L, E.transition[C] = {
        ...e,
        duration: x,
        ease: U,
        times: I,
        ...r
      };
    }
  }), m;
}
function he(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function me(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function _t(t) {
  return Array.isArray(t) ? t : [t];
}
function Ft(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const Ct = (t) => typeof t == "number", Pt = (t) => t.every(Ct);
function Ut(t, e) {
  return t in e;
}
class Mt extends it {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, r) {
    if (Ut(r, e)) {
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
    return st();
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
function Nt(t) {
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
  }, r = at(t) && !ct(t) ? new ut(e) : new lt(e);
  r.mount(t), se.set(t, r);
}
function Ot(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, r = new Mt(e);
  r.mount(t), se.set(t, r);
}
function Bt(t, e) {
  return Me(t) || typeof t == "number" || typeof t == "string" && !ue(e);
}
function Ve(t, e, r, n) {
  const o = [];
  if (Bt(t, e))
    o.push(ft(t, ue(e) && e.default || e, r && (r.default || r)));
  else {
    const c = Oe(t, e, n), m = c.length;
    Ne(!!m, "No valid elements provided.");
    for (let y = 0; y < m; y++) {
      const v = c[y], R = v instanceof Element ? Nt : Ot;
      se.has(v) || R(v);
      const p = se.get(v), g = { ...r };
      "delay" in g && typeof g.delay == "function" && (g.delay = g.delay(y, m)), o.push(...dt(p, { ...e, transition: g }, {}));
    }
  }
  return o;
}
function Vt(t, e, r) {
  const n = [];
  return It(t, e, r, { spring: ht }).forEach(({ keyframes: c, transition: m }, y) => {
    n.push(...Ve(y, c, m));
  }), n;
}
class Dt {
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
class Gt extends Dt {
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function Wt(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function kt(t) {
  function e(r, n, o) {
    let c = [];
    return Wt(r) ? c = Vt(r, n, t) : c = Ve(r, n, o, t), new Gt(c);
  }
  return e;
}
const zt = kt(), Ar = ["xs", "sm", "md", "lg"], br = [
  "inProgress",
  "executing",
  "completed"
], Rr = {
  ai: ze.ai
}, De = Ye(null);
function xr({
  children: t,
  translations: e
}) {
  return /* @__PURE__ */ q(De.Provider, { value: e, children: t });
}
function Lr() {
  const t = $e(De);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
function pe(t, e, r, n) {
  const o = Math.max(1, Math.min(t, e)), c = Math.min(r, 20), y = Math.min(c + n, o), v = Math.min(y, Math.floor(t / 2)), R = Math.min(y, Math.floor(e / 2)), p = ($) => $ / t * 2 - 1, g = ($) => $ / e * 2 - 1, x = 0, l = t, T = 0, C = e, h = v, L = t - v, I = R, U = e - R, E = p(x), w = p(l), _ = g(T), P = g(C), V = p(h), b = p(L), f = g(I), F = g(U), O = 0, k = 0, W = 1, j = 1, z = v / t, M = 1 - v / t, S = R / e, N = 1 - R / e, H = new Float32Array([
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
    P,
    E,
    P,
    w,
    F,
    w,
    P,
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
    k,
    W,
    k,
    O,
    S,
    O,
    S,
    W,
    k,
    W,
    S,
    // Bottom strip
    O,
    N,
    W,
    N,
    O,
    j,
    O,
    j,
    W,
    N,
    W,
    j,
    // Left strip
    O,
    S,
    z,
    S,
    O,
    N,
    O,
    N,
    z,
    S,
    z,
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
  return { positions: H, uvs: J };
}
function ve(t, e, r) {
  const n = t.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  if (t.shaderSource(n, r), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(n) || "Unknown shader error";
    throw t.deleteShader(n), new Error(o);
  }
  return n;
}
function Xt(t, e, r) {
  const n = ve(t, t.VERTEX_SHADER, e), o = ve(t, t.FRAGMENT_SHADER, r), c = t.createProgram();
  if (!c) throw new Error("Failed to create program");
  if (t.attachShader(c, n), t.attachShader(c, o), t.linkProgram(c), !t.getProgramParameter(c, t.LINK_STATUS)) {
    const m = t.getProgramInfoLog(c) || "Unknown link error";
    throw t.deleteProgram(c), t.deleteShader(n), t.deleteShader(o), new Error(m);
  }
  return t.deleteShader(n), t.deleteShader(o), c;
}
const Yt = `#version 300 es
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
`, $t = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, qt = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function jt(t) {
  const e = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${t}`);
  const [, r, n, o] = e;
  return [parseInt(r) / 255, parseInt(n) / 255, parseInt(o) / 255];
}
class Sr {
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
    const { gl: e, vao: r, positionBuffer: n, uvBuffer: o, program: c } = this.glr;
    r && e.deleteVertexArray(r), n && e.deleteBuffer(n), o && e.deleteBuffer(o), e.deleteProgram(c), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(e, r, n) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = e, this.options.height = r, n && (this.options.ratio = n), !this.running) return;
    const { gl: o, program: c, vao: m, positionBuffer: y, uvBuffer: v, uResolution: R } = this.glr, p = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, g = Math.max(1, Math.floor(e * p)), x = Math.max(1, Math.floor(r * p));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${r}px`, (this.canvas.width !== g || this.canvas.height !== x) && (this.canvas.width = g, this.canvas.height = x), o.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(o, "resize: after viewport setup");
    const { positions: l, uvs: T } = pe(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * p,
      this.options.glowWidth * p
    );
    o.bindVertexArray(m), o.bindBuffer(o.ARRAY_BUFFER, y), o.bufferData(o.ARRAY_BUFFER, l, o.STATIC_DRAW);
    const C = o.getAttribLocation(c, "aPosition");
    o.enableVertexAttribArray(C), o.vertexAttribPointer(C, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after position buffer update"), o.bindBuffer(o.ARRAY_BUFFER, v), o.bufferData(o.ARRAY_BUFFER, T, o.STATIC_DRAW);
    const h = o.getAttribLocation(c, "aUV");
    o.enableVertexAttribArray(h), o.vertexAttribPointer(h, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after UV buffer update"), o.useProgram(c), o.uniform2f(R, this.canvas.width, this.canvas.height), o.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * p), o.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * p), o.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * p), this.checkGLError(o, "resize: after uniform updates");
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
    const r = Xt(e, $t, Yt);
    this.checkGLError(e, "setupGL: after createProgram");
    const n = e.createVertexArray();
    e.bindVertexArray(n), this.checkGLError(e, "setupGL: after VAO creation");
    const o = this.canvas.width || 2, c = this.canvas.height || 2, { positions: m, uvs: y } = pe(
      o,
      c,
      this.options.borderWidth,
      this.options.glowWidth
    ), v = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, v), e.bufferData(e.ARRAY_BUFFER, m, e.STATIC_DRAW);
    const R = e.getAttribLocation(r, "aPosition");
    e.enableVertexAttribArray(R), e.vertexAttribPointer(R, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const p = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, p), e.bufferData(e.ARRAY_BUFFER, y, e.STATIC_DRAW);
    const g = e.getAttribLocation(r, "aUV");
    e.enableVertexAttribArray(g), e.vertexAttribPointer(g, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const x = e.getUniformLocation(r, "uResolution"), l = e.getUniformLocation(r, "uTime"), T = e.getUniformLocation(r, "uBorderWidth"), C = e.getUniformLocation(r, "uGlowWidth"), h = e.getUniformLocation(r, "uBorderRadius"), L = e.getUniformLocation(r, "uColors"), I = e.getUniformLocation(r, "uGlowExponent"), U = e.getUniformLocation(r, "uGlowFactor");
    e.useProgram(r), e.uniform1f(T, this.options.borderWidth), e.uniform1f(C, this.options.glowWidth), e.uniform1f(h, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(I, 2), e.uniform1f(U, 1.8)) : (e.uniform1f(I, 1), e.uniform1f(U, 1));
    const E = (this.options.colors || qt).map(jt);
    for (let w = 0; w < E.length; w++)
      e.uniform3f(
        e.getUniformLocation(r, `uColors[${w}]`),
        ...E[w]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: r,
      vao: n,
      positionBuffer: v,
      uvBuffer: p,
      uResolution: x,
      uTime: l,
      uBorderWidth: T,
      uGlowWidth: C,
      uBorderRadius: h,
      uColors: L
    };
  }
  render(e) {
    if (!this.glr) return;
    const { gl: r, program: n, vao: o, uTime: c } = this.glr;
    r.useProgram(n), r.bindVertexArray(o), r.uniform1f(c, e), r.disable(r.DEPTH_TEST), r.disable(r.CULL_FACE), r.disable(r.BLEND), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.drawArrays(r.TRIANGLES, 0, 24), this.checkGLError(r, "render: after draw call"), r.bindVertexArray(null);
  }
}
const ge = ["lowp", "mediump", "highp"], Ht = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, Kt = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, we = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Te = "iTime", Ee = "iTimeDelta", ye = "iDate", Ae = "iFrame", be = "iMouse", Re = "iResolution", Qt = "iChannel", xe = "iChannelResolution", Le = "iDeviceOrientation";
function Zt(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function Jt(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function er(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const tr = (t, e, r, n) => {
  if (er(r, n))
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
}, rr = (t) => {
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
        Y(
          `The uniform type "${t}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, ce = 9729, Se = 9728, nr = 9987, Ie = 33071, _e = 10497;
class or {
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
    const { gl: o } = this, c = 0, m = o.RGBA, y = o.RGBA, v = o.UNSIGNED_BYTE;
    o.bindTexture(o.TEXTURE_2D, e), o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, n), o.texImage2D(
      o.TEXTURE_2D,
      c,
      m,
      y,
      v,
      r
    );
  };
  setupVideo = (e) => {
    const r = document.createElement("video");
    let n = !1, o = !1;
    r.autoplay = !0, r.muted = !0, r.loop = !0, r.crossOrigin = "anonymous";
    const c = () => {
      n && o && (this.isLoaded = !0);
    };
    return r.addEventListener(
      "playing",
      () => {
        n = !0, this.width = r.videoWidth || 0, this.height = r.videoHeight || 0, c();
      },
      !0
    ), r.addEventListener(
      "timeupdate",
      () => {
        o = !0, c();
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
    Y(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: r } = this, {
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
    const g = 0, x = r.RGBA, l = 1, T = 1, C = 0, h = r.RGBA, L = r.UNSIGNED_BYTE, I = new Uint8Array([255, 255, 255, 0]), U = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, U), r.texImage2D(
      r.TEXTURE_2D,
      g,
      x,
      l,
      T,
      C,
      h,
      L,
      I
    ), p) {
      const P = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = U, this.source = P, this.isVideo = !0, P.play().then(() => this);
    }
    async function E() {
      return new Promise((P, V) => {
        const b = new Image();
        b.crossOrigin = "anonymous", b.onload = () => {
          P(b);
        }, b.onerror = () => {
          V(new Error(Y(`failed loading url: ${n}`)));
        }, b.src = n ?? "";
      });
    }
    let w = await E(), _ = (w.width & w.width - 1) === 0 && (w.height & w.height - 1) === 0;
    return (e.wrapS !== Ie || e.wrapT !== Ie || e.minFilter !== Se && e.minFilter !== ce) && !_ && (w = this.makePowerOf2(w), _ = !0), r.bindTexture(r.TEXTURE_2D, U), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v), r.texImage2D(
      r.TEXTURE_2D,
      g,
      x,
      h,
      L,
      w
    ), _ && e.minFilter !== Se && e.minFilter !== ce && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_S,
      this.wrapS || _e
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_T,
      this.wrapT || _e
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MIN_FILTER,
      this.minFilter || nr
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MAG_FILTER,
      this.magFilter || ce
    ), this._webglTexture = U, this.source = w, this.isVideo = !1, this.isLoaded = !0, this.width = w.width || 0, this.height = w.height || 0, this;
  };
}
const Y = (t) => `react-shaders: ${t}`, Fe = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, Ce = (t, e, r) => t * (1 - r) + e * r, ir = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function sr({
  fs: t,
  vs: e = we,
  textures: r = [],
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
  const l = B(null), T = B(null), C = B(null), h = B(null), L = B(void 0), I = B(void 0), U = B(!1), E = B(void 0), w = B(0), _ = B([0, 0]), P = B([]), V = B(0), b = B(void 0), f = B({
    [Te]: { type: "float", isNeeded: !1, value: 0 },
    [Ee]: { type: "float", isNeeded: !1, value: 0 },
    [ye]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [be]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Re]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Ae]: { type: "int", isNeeded: !1, value: 0 },
    [Le]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), F = B(n), O = (i, a) => {
    const s = "width" in i ? i.width ?? 0 : 0, d = "height" in i ? i.height ?? 0 : 0, u = f.current.iChannelResolution;
    if (!u) return;
    const A = Array.isArray(u.value) ? u.value : u.value = [];
    A[a * 3] = s * R, A[a * 3 + 1] = d * R, A[a * 3 + 2] = 0;
  }, k = () => {
    l.current && (T.current = l.current.getContext("webgl", y) || l.current.getContext(
      "experimental-webgl",
      y
    ), T.current?.getExtension("OES_standard_derivatives"), T.current?.getExtension("EXT_shader_texture_lod"));
  }, W = () => {
    const i = T.current;
    C.current = i?.createBuffer() ?? null, i?.bindBuffer(i.ARRAY_BUFFER, C.current);
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
  }, j = ({
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
  }, z = (i) => {
    const [a = 0, s = 0] = Fe(i), d = a - (E.current?.left ?? 0) - window.pageXOffset, u = (E.current?.height ?? 0) - s - (E.current?.top ?? 0) - window.pageYOffset;
    U.current = !0;
    const A = Array.isArray(f.current.iMouse?.value) ? f.current.iMouse.value : void 0;
    A && (A[2] = d, A[3] = u), _.current[0] = d, _.current[1] = u;
  }, M = (i) => {
    E.current = l.current?.getBoundingClientRect();
    const [a = 0, s = 0] = Fe(i), d = a - (E.current?.left ?? 0), u = (E.current?.height ?? 0) - s - (E.current?.top ?? 0);
    if (v !== 1)
      _.current[0] = d, _.current[1] = u;
    else {
      const A = Array.isArray(f.current.iMouse?.value) ? f.current.iMouse.value : void 0;
      A && (A[0] = d, A[1] = u);
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
    ), d = Math.floor(
      (E.current?.height ?? 1) * a
    );
    if (i.canvas.width = s, i.canvas.height = d, f.current.iResolution?.isNeeded && h.current) {
      const u = i.getUniformLocation(
        h.current,
        Re
      );
      i.uniform2fv(u, [i.canvas.width, i.canvas.height]);
    }
  }, H = (i, a) => {
    const s = T.current;
    if (!s) return null;
    const d = s.createShader(i);
    if (!d) return null;
    if (s.shaderSource(d, a), s.compileShader(d), !s.getShaderParameter(d, s.COMPILE_STATUS)) {
      x?.(Y(`Error compiling the shader:
${a}`));
      const u = s.getShaderInfoLog(d);
      s.deleteShader(d), g?.(Y(`Shader compiler log: ${u}`));
    }
    return d;
  }, J = (i, a) => {
    const s = T.current;
    if (!s) return;
    const d = H(s.FRAGMENT_SHADER, i), u = H(s.VERTEX_SHADER, a);
    if (h.current = s.createProgram(), !(!h.current || !u || !d)) {
      if (s.attachShader(h.current, u), s.attachShader(h.current, d), s.linkProgram(h.current), !s.getProgramParameter(h.current, s.LINK_STATUS)) {
        g?.(
          Y(
            `Unable to initialize the shader program: ${s.getProgramInfoLog(
              h.current
            )}`
          )
        );
        return;
      }
      s.useProgram(h.current), L.current = s.getAttribLocation(
        h.current,
        "aVertexPosition"
      ), s.enableVertexAttribArray(L.current);
    }
  }, $ = () => {
    if (n)
      for (const i of Object.keys(n)) {
        const a = n[i];
        if (!a) continue;
        const { value: s, type: d } = a, u = rr(d);
        if (!u) continue;
        const A = {};
        if (Zt(d, s)) {
          const D = d.length, X = Number.parseInt(d.charAt(D - 3)), te = Math.floor(s.length / (X * X));
          s.length > X * X && (A.arraySize = `[${te}]`);
        } else Jt(d, s) && (A.arraySize = `[${Math.floor(s.length / Number.parseInt(d.charAt(0)))}]`);
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
      if (r && r.length > 0) {
        f.current[`${xe}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const a = r.map(
          (s, d) => (f.current[`${Qt}${d}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, O(s, d), P.current[d] = new or(i), P.current[d]?.load(s).then((u) => {
            O(u, d);
          }))
        );
        Promise.all(a).then(() => {
          p && p();
        }).catch((s) => {
          g?.(s), p && p();
        });
      } else p && p();
  }, ne = (i) => {
    const a = ge.includes(c ?? "highp"), s = `precision ${a ? c : ge[1]} float;
`;
    a || x?.(
      Y(
        `wrong precision type ${c}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let d = s.concat(`#define DPR ${R.toFixed(1)}
`).concat(i.replace(/texture\(/g, "texture2D("));
    for (const A of Object.keys(f.current))
      if (i.includes(A)) {
        const D = f.current[A];
        if (!D) continue;
        d = ir(
          d,
          `uniform ${D.type} ${A}${D.arraySize || ""}; 
`,
          d.lastIndexOf(s) + s.length
        ), D.isNeeded = !0;
      }
    return i.includes("mainImage") && (d = d.concat(Ht)), d;
  }, K = (i) => {
    const a = T.current;
    if (!a || !h.current) return;
    const s = V.current ? (i - V.current) / 1e3 : 0;
    V.current = i;
    const d = F.current;
    if (d)
      for (const u of Object.keys(d)) {
        const A = d[u];
        if (A && f.current[u]?.isNeeded) {
          if (!h.current) return;
          const D = a.getUniformLocation(
            h.current,
            u
          );
          if (!D) return;
          tr(
            a,
            D,
            A.type,
            A.value
          );
        }
      }
    if (f.current.iMouse?.isNeeded) {
      const u = a.getUniformLocation(
        h.current,
        be
      );
      a.uniform4fv(u, f.current.iMouse.value);
    }
    if (f.current.iChannelResolution?.isNeeded) {
      const u = a.getUniformLocation(
        h.current,
        xe
      );
      a.uniform3fv(
        u,
        f.current.iChannelResolution.value
      );
    }
    if (f.current.iDeviceOrientation?.isNeeded) {
      const u = a.getUniformLocation(
        h.current,
        Le
      );
      a.uniform4fv(
        u,
        f.current.iDeviceOrientation.value
      );
    }
    if (f.current.iTime?.isNeeded) {
      const u = a.getUniformLocation(
        h.current,
        Te
      );
      a.uniform1f(u, w.current += s);
    }
    if (f.current.iTimeDelta?.isNeeded) {
      const u = a.getUniformLocation(
        h.current,
        Ee
      );
      a.uniform1f(u, s);
    }
    if (f.current.iDate?.isNeeded) {
      const u = /* @__PURE__ */ new Date(), A = u.getMonth() + 1, D = u.getDate(), X = u.getFullYear(), te = u.getHours() * 60 * 60 + u.getMinutes() * 60 + u.getSeconds() + u.getMilliseconds() * 1e-3, ae = a.getUniformLocation(
        h.current,
        ye
      );
      a.uniform4fv(ae, [X, A, D, te]);
    }
    if (f.current.iFrame?.isNeeded) {
      const u = a.getUniformLocation(
        h.current,
        Ae
      ), A = f.current.iFrame.value;
      a.uniform1i(u, A), f.current.iFrame.value = A + 1;
    }
    if (P.current.length > 0)
      for (let u = 0; u < P.current.length; u++) {
        const A = P.current[u];
        if (!A) return;
        const { isVideo: D, _webglTexture: X, source: te, flipY: ae, isLoaded: We } = A;
        if (!We || !X || !te) return;
        if (f.current[`iChannel${u}`]?.isNeeded) {
          if (!h.current) return;
          const ke = a.getUniformLocation(
            h.current,
            `iChannel${u}`
          );
          a.activeTexture(a.TEXTURE0 + u), a.bindTexture(a.TEXTURE_2D, X), a.uniform1i(ke, u), D && A.updateTexture(
            X,
            te,
            ae
          );
        }
      }
  }, Q = (i) => {
    const a = T.current;
    if (!a) return;
    a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), a.bindBuffer(a.ARRAY_BUFFER, C.current), a.vertexAttribPointer(
      L.current ?? 0,
      3,
      a.FLOAT,
      !1,
      0,
      0
    ), K(i), a.drawArrays(a.TRIANGLE_STRIP, 0, 4);
    const s = f.current.iMouse?.value;
    if (f.current.iMouse?.isNeeded && v !== 1 && Array.isArray(s)) {
      const d = s[0] ?? 0, u = s[1] ?? 0;
      s[0] = Ce(d, _.current[0] ?? 0, v), s[1] = Ce(u, _.current[1] ?? 0, v);
    }
    I.current = requestAnimationFrame(Q);
  }, ee = () => {
    const i = { passive: !0 };
    f.current.iMouse?.isNeeded && l.current && (l.current.addEventListener("mousemove", M, i), l.current.addEventListener("mouseout", S, i), l.current.addEventListener("mouseup", S, i), l.current.addEventListener("mousedown", z, i), l.current.addEventListener("touchmove", M, i), l.current.addEventListener("touchend", S, i), l.current.addEventListener("touchstart", z, i)), f.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      j,
      i
    ), l.current && (b.current = new ResizeObserver(N), b.current.observe(l.current), window.addEventListener("resize", N, i));
  }, Z = () => {
    const i = { passive: !0 };
    f.current.iMouse?.isNeeded && l.current && (l.current.removeEventListener("mousemove", M, i), l.current.removeEventListener("mouseout", S, i), l.current.removeEventListener("mouseup", S, i), l.current.removeEventListener("mousedown", z, i), l.current.removeEventListener("touchmove", M, i), l.current.removeEventListener("touchend", S, i), l.current.removeEventListener("touchstart", z, i)), f.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      j,
      i
    ), b.current && (b.current.disconnect(), window.removeEventListener("resize", N, i));
  };
  return ie(() => {
    F.current = n;
  }, [n]), ie(() => {
    const i = P.current;
    function a() {
      k();
      const s = T.current;
      s && l.current && (s.clearColor(...o), s.clearDepth(1), s.enable(s.DEPTH_TEST), s.depthFunc(s.LEQUAL), s.viewport(0, 0, l.current.width, l.current.height), l.current.height = l.current.clientHeight, l.current.width = l.current.clientWidth, $(), re(), J(ne(t || Kt), e || we), W(), requestAnimationFrame(Q), ee(), N());
    }
    return requestAnimationFrame(a), () => {
      const s = T.current;
      if (s) {
        if (s.getExtension("WEBGL_lose_context")?.loseContext(), s.useProgram(null), s.deleteProgram(h.current ?? null), i.length > 0)
          for (const d of i)
            s.deleteTexture(d._webglTexture);
        h.current = null;
      }
      Z(), cancelAnimationFrame(I.current ?? 0);
    };
  }, []), /* @__PURE__ */ q(
    "canvas",
    {
      ref: l,
      style: { height: "100%", width: "100%", ...m }
    }
  );
}
const ar = `
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
}`, cr = 10, ur = 2, lr = 0.5, fr = 0.2, dr = 1.5, G = {
  duration: 0.5,
  ease: "easeOut"
}, Pe = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function oe(t) {
  const [e, r] = Ue(t), n = gt(t), o = B(null);
  Tt(n, "change", (m) => r(m));
  const c = qe(
    (m, y) => {
      o.current = zt(n, m, y);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: o, animate: c };
}
function hr(t, e) {
  const [r, n] = Ue(cr), {
    value: o,
    animate: c,
    motionValue: m
  } = oe(fr), { value: y, animate: v } = oe(ur), { value: R, animate: p } = oe(lr), { value: g, animate: x } = oe(dr), l = vt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return ie(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), c(0.2, G), v(1.2, G), p(0.4, G), x(1, G);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), c(0.3, { type: "spring", duration: 1, bounce: 0.35 }), v(1, G), p(0.7, G), x([1.5, 2], Pe);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), c(0.3, G), v(0.5, G), p(1, G), x([0.5, 2.5], Pe);
        return;
      case "speaking":
        n(70), c(0.3, G), v(0.75, G), p(1.25, G), x(1.5, G);
        return;
    }
  }, [
    t,
    c,
    v,
    p,
    x
  ]), ie(() => {
    t === "speaking" && l > 0 && !m.isAnimating() && c(0.2 + 0.2 * l, { duration: 0 });
  }, [
    t,
    l,
    m,
    c,
    v,
    p,
    x
  ]), {
    speed: r,
    scale: o,
    amplitude: y,
    frequency: R,
    brightness: g
  };
}
const mr = pt({
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
function pr(t) {
  const e = t.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, r, n, o] = e;
    return [r, n, o].map((m = "00") => parseInt(m, 16) / 255);
  }
}
function Ge({
  shape: t = 1,
  speed: e = 1,
  amplitude: r = 0.5,
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
  const l = je(() => pr(m), [m]);
  return /* @__PURE__ */ q("div", { ref: p, className: g, ...x, children: /* @__PURE__ */ q(
    sr,
    {
      fs: ar,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: e },
        // Edge blur/softness
        uBlur: { type: "1f", value: c },
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
Ge.displayName = "AuraShader";
function Ir({
  size: t = "lg",
  state: e,
  color: r,
  colorShift: n = 0.05,
  audioTrack: o,
  themeMode: c,
  className: m,
  ref: y,
  ...v
}) {
  const { speed: R, scale: p, amplitude: g, frequency: x, brightness: l } = hr(e, o);
  return /* @__PURE__ */ q(
    Ge,
    {
      ref: y,
      blur: 0.2,
      color: r,
      colorShift: n,
      speed: R,
      scale: p,
      themeMode: c,
      amplitude: g,
      frequency: x,
      brightness: l,
      className: mt(
        mr({ size: t }),
        "overflow-hidden rounded-full",
        m
      ),
      ...v
    }
  );
}
const _r = ({
  text: t,
  confirmationText: e,
  onConfirm: r,
  cancelText: n,
  onCancel: o
}) => /* @__PURE__ */ le("div", { className: "flex flex-col gap-2", children: [
  t && /* @__PURE__ */ q("p", { children: t }),
  /* @__PURE__ */ le("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ q(
      fe,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        icon: wt,
        onClick: r,
        label: e
      }
    ),
    /* @__PURE__ */ q(
      fe,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: o,
        label: n
      }
    )
  ] })
] });
export {
  xr as A,
  Sr as F,
  Rr as a,
  br as b,
  Ir as c,
  _r as d,
  Ar as o,
  Lr as u
};
