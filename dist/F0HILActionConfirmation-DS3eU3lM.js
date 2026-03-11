import { jsx as q, jsxs as le } from "react/jsx-runtime";
import { useInsertionEffect as ze, createContext as Xe, useContext as Ye, useRef as B, useEffect as ie, useState as Ue, useCallback as $e, useMemo as qe } from "react";
import { G as He, J as Ke, K as je, M as Qe, N as Me, Q as Je, R as Ze, V as et, W as tt, X as nt, Y as Ne, Z as rt, _ as ot, $ as it, a0 as st, a1 as at, a2 as ct, a3 as ut, a4 as se, a5 as lt, a6 as ft, a7 as ht, a8 as dt, a9 as mt, aa as pt, ab as fe, ac as gt } from "./F0AiChat-7dqhQeJM.js";
import { useTrackVolume as vt } from "@livekit/components-react";
function wt(t, e, n) {
  ze(() => t.on(e, n), [t, e, n]);
}
function ue(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Oe(t, e, n, r) {
  return typeof t == "string" && ue(e) ? He(t, n, r) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function Tt(t, e, n) {
  return t * (e + 1);
}
function he(t, e, n, r) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? n : r.get(e) ?? t;
}
const yt = (t, e, n) => {
  const r = e - t;
  return ((n - t) % r + r) % r + t;
};
function Be(t, e) {
  return Ke(t) ? t[yt(0, t.length, e)] : t;
}
function Et(t, e, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    o.at > e && o.at < n && (Qe(t, o), r--);
  }
}
function bt(t, e, n, r, o, c) {
  Et(t, o, c);
  for (let m = 0; m < e.length; m++)
    t.push({
      value: e[m],
      at: je(o, c, r[m]),
      easing: Be(n, m)
    });
}
function At(t, e) {
  for (let n = 0; n < t.length; n++)
    t[n] = t[n] / (e + 1);
}
function Rt(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const xt = "easeInOut", St = 20;
function Lt(t, { defaultTransition: e = {}, ...n } = {}, r, o) {
  const c = e.duration || 0.3, m = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), g = {}, R = /* @__PURE__ */ new Map();
  let p = 0, v = 0, x = 0;
  for (let l = 0; l < t.length; l++) {
    const T = t[l];
    if (typeof T == "string") {
      R.set(T, v);
      continue;
    } else if (!Array.isArray(T)) {
      R.set(T.name, he(v, T.at, p, R));
      continue;
    }
    let [F, d, S = {}] = T;
    S.at !== void 0 && (v = he(v, S.at, p, R));
    let I = 0;
    const U = (y, w, _, P = 0, V = 0) => {
      const A = It(y), { delay: f = 0, times: C = Je(A), type: O = "keyframes", repeat: W, repeatType: k, repeatDelay: H = 0, ...z } = w;
      let { ease: M = e.ease || "easeOut", duration: L } = w;
      const N = typeof f == "function" ? f(P, V) : f, K = A.length, Z = tt(O) ? O : o?.[O];
      if (K <= 2 && Z) {
        let j = 100;
        if (K === 2 && Ft(A)) {
          const J = A[1] - A[0];
          j = Math.abs(J);
        }
        const Q = { ...z };
        L !== void 0 && (Q.duration = nt(L));
        const ee = Ze(Q, j, Z);
        M = ee.ease, L = ee.duration;
      }
      L ?? (L = c);
      const $ = v + N;
      C.length === 1 && C[0] === 0 && (C[1] = 1);
      const ne = C.length - A.length;
      if (ne > 0 && et(C, ne), A.length === 1 && A.unshift(null), W) {
        Ne(W < St, "Repeat count too high, must be less than 20"), L = Tt(L, W);
        const j = [...A], Q = [...C];
        M = Array.isArray(M) ? [...M] : [M];
        const ee = [...M];
        for (let J = 0; J < W; J++) {
          A.push(...j);
          for (let i = 0; i < j.length; i++)
            C.push(Q[i] + (J + 1)), M.push(i === 0 ? "linear" : Be(ee, i - 1));
        }
        At(C, W);
      }
      const re = $ + L;
      bt(_, A, M, C, $, re), I = Math.max(N + L, I), x = Math.max(re, x);
    };
    if (Me(F)) {
      const y = de(F, E);
      U(d, S, me("default", y));
    } else {
      const y = Oe(F, d, r, g), w = y.length;
      for (let _ = 0; _ < w; _++) {
        d = d, S = S;
        const P = y[_], V = de(P, E);
        for (const A in d)
          U(d[A], _t(S, A), me(A, V), _, w);
      }
    }
    p = v, v += I;
  }
  return E.forEach((l, T) => {
    for (const F in l) {
      const d = l[F];
      d.sort(Rt);
      const S = [], I = [], U = [];
      for (let w = 0; w < d.length; w++) {
        const { at: _, value: P, easing: V } = d[w];
        S.push(P), I.push(rt(0, x, _)), U.push(V || "easeOut");
      }
      I[0] !== 0 && (I.unshift(0), S.unshift(S[0]), U.unshift(xt)), I[I.length - 1] !== 1 && (I.push(1), S.push(null)), m.has(T) || m.set(T, {
        keyframes: {},
        transition: {}
      });
      const y = m.get(T);
      y.keyframes[F] = S, y.transition[F] = {
        ...e,
        duration: x,
        ease: U,
        times: I,
        ...n
      };
    }
  }), m;
}
function de(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function me(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function It(t) {
  return Array.isArray(t) ? t : [t];
}
function _t(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const Ct = (t) => typeof t == "number", Ft = (t) => t.every(Ct);
function Pt(t, e) {
  return t in e;
}
class Ut extends ot {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, n) {
    if (Pt(n, e)) {
      const r = e[n];
      if (typeof r == "string" || typeof r == "number")
        return r;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(e, n) {
    delete n.output[e];
  }
  measureInstanceViewportBox() {
    return it();
  }
  build(e, n) {
    Object.assign(e.output, n);
  }
  renderInstance(e, { output: n }) {
    Object.assign(e, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function Mt(t) {
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
  }, n = st(t) && !at(t) ? new ct(e) : new ut(e);
  n.mount(t), se.set(t, n);
}
function Nt(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, n = new Ut(e);
  n.mount(t), se.set(t, n);
}
function Ot(t, e) {
  return Me(t) || typeof t == "number" || typeof t == "string" && !ue(e);
}
function Ve(t, e, n, r) {
  const o = [];
  if (Ot(t, e))
    o.push(lt(t, ue(e) && e.default || e, n && (n.default || n)));
  else {
    const c = Oe(t, e, r), m = c.length;
    Ne(!!m, "No valid elements provided.");
    for (let E = 0; E < m; E++) {
      const g = c[E], R = g instanceof Element ? Mt : Nt;
      se.has(g) || R(g);
      const p = se.get(g), v = { ...n };
      "delay" in v && typeof v.delay == "function" && (v.delay = v.delay(E, m)), o.push(...ft(p, { ...e, transition: v }, {}));
    }
  }
  return o;
}
function Bt(t, e, n) {
  const r = [];
  return Lt(t, e, n, { spring: ht }).forEach(({ keyframes: c, transition: m }, E) => {
    r.push(...Ve(E, c, m));
  }), r;
}
class Vt {
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
  setAll(e, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][e] = n;
  }
  attachTimeline(e) {
    const n = this.animations.map((r) => r.attachTimeline(e));
    return () => {
      n.forEach((r, o) => {
        r && r(), this.animations[o].stop();
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
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
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
class Dt extends Vt {
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function Gt(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function kt(t) {
  function e(n, r, o) {
    let c = [];
    return Gt(n) ? c = Bt(n, r, t) : c = Ve(n, r, o, t), new Dt(c);
  }
  return e;
}
const Wt = kt(), yn = ["xs", "sm", "md", "lg"], En = [
  "inProgress",
  "executing",
  "completed"
], bn = {
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    startNewChat: "Start new chat",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info and a lot of other things...",
    stopAnswerGeneration: "Stop generating",
    responseStopped: "You stopped this response",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    resourcesGroupTitle: "Resources",
    thinking: "Thinking...",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well"
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn't work"
      }
    },
    dataDownloadPreview: "Preview {{shown}} of {{total}} rows — download the Excel to see all data.",
    expandChat: "Expand chat",
    collapseChat: "Collapse chat",
    ask: "Ask One",
    viewProfile: "View profile",
    tools: "Tools"
  }
}, De = Xe(null);
function An({
  children: t,
  translations: e
}) {
  return /* @__PURE__ */ q(De.Provider, { value: e, children: t });
}
function Rn() {
  const t = Ye(De);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
function pe(t, e, n, r) {
  const o = Math.max(1, Math.min(t, e)), c = Math.min(n, 20), E = Math.min(c + r, o), g = Math.min(E, Math.floor(t / 2)), R = Math.min(E, Math.floor(e / 2)), p = ($) => $ / t * 2 - 1, v = ($) => $ / e * 2 - 1, x = 0, l = t, T = 0, F = e, d = g, S = t - g, I = R, U = e - R, y = p(x), w = p(l), _ = v(T), P = v(F), V = p(d), A = p(S), f = v(I), C = v(U), O = 0, W = 0, k = 1, H = 1, z = g / t, M = 1 - g / t, L = R / e, N = 1 - R / e, K = new Float32Array([
    // Top strip
    y,
    _,
    w,
    _,
    y,
    f,
    y,
    f,
    w,
    _,
    w,
    f,
    // Bottom strip
    y,
    C,
    w,
    C,
    y,
    P,
    y,
    P,
    w,
    C,
    w,
    P,
    // Left strip
    y,
    f,
    V,
    f,
    y,
    C,
    y,
    C,
    V,
    f,
    V,
    C,
    // Right strip
    A,
    f,
    w,
    f,
    A,
    C,
    A,
    C,
    w,
    f,
    w,
    C
  ]), Z = new Float32Array([
    // Top strip
    O,
    W,
    k,
    W,
    O,
    L,
    O,
    L,
    k,
    W,
    k,
    L,
    // Bottom strip
    O,
    N,
    k,
    N,
    O,
    H,
    O,
    H,
    k,
    N,
    k,
    H,
    // Left strip
    O,
    L,
    z,
    L,
    O,
    N,
    O,
    N,
    z,
    L,
    z,
    N,
    // Right strip
    M,
    L,
    k,
    L,
    M,
    N,
    M,
    N,
    k,
    L,
    k,
    N
  ]);
  return { positions: K, uvs: Z };
}
function ge(t, e, n) {
  const r = t.createShader(e);
  if (!r) throw new Error("Failed to create shader");
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(r) || "Unknown shader error";
    throw t.deleteShader(r), new Error(o);
  }
  return r;
}
function zt(t, e, n) {
  const r = ge(t, t.VERTEX_SHADER, e), o = ge(t, t.FRAGMENT_SHADER, n), c = t.createProgram();
  if (!c) throw new Error("Failed to create program");
  if (t.attachShader(c, r), t.attachShader(c, o), t.linkProgram(c), !t.getProgramParameter(c, t.LINK_STATUS)) {
    const m = t.getProgramInfoLog(c) || "Unknown link error";
    throw t.deleteProgram(c), t.deleteShader(r), t.deleteShader(o), new Error(m);
  }
  return t.deleteShader(r), t.deleteShader(o), c;
}
const Xt = `#version 300 es
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
}`, Yt = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}`, $t = [
  "rgb(57, 182, 255)",
  "rgb(189, 69, 251)",
  "rgb(255, 87, 51)",
  "rgb(255, 214, 0)"
];
function qt(t) {
  const e = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${t}`);
  const [, n, r, o] = e;
  return [parseInt(n) / 255, parseInt(r) / 255, parseInt(o) / 255];
}
class xn {
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
      const n = performance.now();
      if (n - this.lastTime < 1e3 / 32) return;
      this.lastTime = n;
      const o = (n - this.startTime) * 1e-3;
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
    const { gl: e, vao: n, positionBuffer: r, uvBuffer: o, program: c } = this.glr;
    n && e.deleteVertexArray(n), r && e.deleteBuffer(r), o && e.deleteBuffer(o), e.deleteProgram(c), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(e, n, r) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = e, this.options.height = n, r && (this.options.ratio = r), !this.running) return;
    const { gl: o, program: c, vao: m, positionBuffer: E, uvBuffer: g, uResolution: R } = this.glr, p = r ?? this.options.ratio ?? window.devicePixelRatio ?? 1, v = Math.max(1, Math.floor(e * p)), x = Math.max(1, Math.floor(n * p));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${n}px`, (this.canvas.width !== v || this.canvas.height !== x) && (this.canvas.width = v, this.canvas.height = x), o.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(o, "resize: after viewport setup");
    const { positions: l, uvs: T } = pe(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * p,
      this.options.glowWidth * p
    );
    o.bindVertexArray(m), o.bindBuffer(o.ARRAY_BUFFER, E), o.bufferData(o.ARRAY_BUFFER, l, o.STATIC_DRAW);
    const F = o.getAttribLocation(c, "aPosition");
    o.enableVertexAttribArray(F), o.vertexAttribPointer(F, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after position buffer update"), o.bindBuffer(o.ARRAY_BUFFER, g), o.bufferData(o.ARRAY_BUFFER, T, o.STATIC_DRAW);
    const d = o.getAttribLocation(c, "aUV");
    o.enableVertexAttribArray(d), o.vertexAttribPointer(d, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "resize: after UV buffer update"), o.useProgram(c), o.uniform2f(R, this.canvas.width, this.canvas.height), o.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * p), o.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * p), o.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * p), this.checkGLError(o, "resize: after uniform updates");
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
      const n = e.getBoundingClientRect();
      this.resize(n.width, n.height);
    }), this.observer.observe(e);
  }
  fadeIn() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((e, n) => {
      const r = this.canvas.animate(
        [
          { opacity: 0, transform: "scale(1.2)" },
          { opacity: 1, transform: "scale(1)" }
        ],
        { duration: 300, easing: "ease-out", fill: "forwards" }
      );
      r.onfinish = () => e(), r.oncancel = () => n("canceled");
    });
  }
  fadeOut() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((e, n) => {
      const r = this.canvas.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.2)" }
        ],
        { duration: 300, easing: "ease-in", fill: "forwards" }
      );
      r.onfinish = () => e(), r.oncancel = () => n("canceled");
    });
  }
  checkGLError(e, n) {
    let r = e.getError();
    if (r !== e.NO_ERROR)
      for (console.error(`WebGL Error in ${n}`); r !== e.NO_ERROR; ) {
        const o = this.getGLErrorName(e, r);
        console.error(`${o} (0x${r.toString(16)})`), r = e.getError();
      }
  }
  getGLErrorName(e, n) {
    switch (n) {
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
    const n = zt(e, Yt, Xt);
    this.checkGLError(e, "setupGL: after createProgram");
    const r = e.createVertexArray();
    e.bindVertexArray(r), this.checkGLError(e, "setupGL: after VAO creation");
    const o = this.canvas.width || 2, c = this.canvas.height || 2, { positions: m, uvs: E } = pe(
      o,
      c,
      this.options.borderWidth,
      this.options.glowWidth
    ), g = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, g), e.bufferData(e.ARRAY_BUFFER, m, e.STATIC_DRAW);
    const R = e.getAttribLocation(n, "aPosition");
    e.enableVertexAttribArray(R), e.vertexAttribPointer(R, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const p = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, p), e.bufferData(e.ARRAY_BUFFER, E, e.STATIC_DRAW);
    const v = e.getAttribLocation(n, "aUV");
    e.enableVertexAttribArray(v), e.vertexAttribPointer(v, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const x = e.getUniformLocation(n, "uResolution"), l = e.getUniformLocation(n, "uTime"), T = e.getUniformLocation(n, "uBorderWidth"), F = e.getUniformLocation(n, "uGlowWidth"), d = e.getUniformLocation(n, "uBorderRadius"), S = e.getUniformLocation(n, "uColors"), I = e.getUniformLocation(n, "uGlowExponent"), U = e.getUniformLocation(n, "uGlowFactor");
    e.useProgram(n), e.uniform1f(T, this.options.borderWidth), e.uniform1f(F, this.options.glowWidth), e.uniform1f(d, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(I, 2), e.uniform1f(U, 1.8)) : (e.uniform1f(I, 1), e.uniform1f(U, 1));
    const y = (this.options.colors || $t).map(qt);
    for (let w = 0; w < y.length; w++)
      e.uniform3f(
        e.getUniformLocation(n, `uColors[${w}]`),
        ...y[w]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: n,
      vao: r,
      positionBuffer: g,
      uvBuffer: p,
      uResolution: x,
      uTime: l,
      uBorderWidth: T,
      uGlowWidth: F,
      uBorderRadius: d,
      uColors: S
    };
  }
  render(e) {
    if (!this.glr) return;
    const { gl: n, program: r, vao: o, uTime: c } = this.glr;
    n.useProgram(r), n.bindVertexArray(o), n.uniform1f(c, e), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.disable(n.BLEND), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.drawArrays(n.TRIANGLES, 0, 24), this.checkGLError(n, "render: after draw call"), n.bindVertexArray(null);
  }
}
const ve = ["lowp", "mediump", "highp"], Ht = `
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
}`, Te = "iTime", ye = "iTimeDelta", Ee = "iDate", be = "iFrame", Ae = "iMouse", Re = "iResolution", jt = "iChannel", xe = "iChannelResolution", Se = "iDeviceOrientation";
function Qt(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function Jt(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function Zt(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const en = (t, e, n, r) => {
  if (Zt(n, r))
    switch (n) {
      case "2f":
        return t.uniform2f(e, r[0], r[1]);
      case "3f":
        return t.uniform3f(e, r[0], r[1], r[2]);
      case "4f":
        return t.uniform4f(e, r[0], r[1], r[2], r[3]);
      case "2i":
        return t.uniform2i(e, r[0], r[1]);
      case "3i":
        return t.uniform3i(e, r[0], r[1], r[2]);
      case "4i":
        return t.uniform4i(e, r[0], r[1], r[2], r[3]);
    }
  if (typeof r == "number")
    return n === "1i" ? t.uniform1i(e, r) : t.uniform1f(e, r);
  switch (n) {
    case "1iv":
      return t.uniform1iv(e, r);
    case "2iv":
      return t.uniform2iv(e, r);
    case "3iv":
      return t.uniform3iv(e, r);
    case "4iv":
      return t.uniform4iv(e, r);
    case "1fv":
      return t.uniform1fv(e, r);
    case "2fv":
      return t.uniform2fv(e, r);
    case "3fv":
      return t.uniform3fv(e, r);
    case "4fv":
      return t.uniform4fv(e, r);
    case "Matrix2fv":
      return t.uniformMatrix2fv(e, !1, r);
    case "Matrix3fv":
      return t.uniformMatrix3fv(e, !1, r);
    case "Matrix4fv":
      return t.uniformMatrix4fv(e, !1, r);
  }
}, tn = (t) => {
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
}, ce = 9729, Le = 9728, nn = 9987, Ie = 33071, _e = 10497;
class rn {
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
  updateTexture = (e, n, r) => {
    const { gl: o } = this, c = 0, m = o.RGBA, E = o.RGBA, g = o.UNSIGNED_BYTE;
    o.bindTexture(o.TEXTURE_2D, e), o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, r), o.texImage2D(
      o.TEXTURE_2D,
      c,
      m,
      E,
      g,
      n
    );
  };
  setupVideo = (e) => {
    const n = document.createElement("video");
    let r = !1, o = !1;
    n.autoplay = !0, n.muted = !0, n.loop = !0, n.crossOrigin = "anonymous";
    const c = () => {
      r && o && (this.isLoaded = !0);
    };
    return n.addEventListener(
      "playing",
      () => {
        r = !0, this.width = n.videoWidth || 0, this.height = n.videoHeight || 0, c();
      },
      !0
    ), n.addEventListener(
      "timeupdate",
      () => {
        o = !0, c();
      },
      !0
    ), n.src = e, n;
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
    const { gl: n } = this, {
      url: r,
      wrapS: o,
      wrapT: c,
      minFilter: m,
      magFilter: E,
      flipY: g = -1
    } = e;
    if (!r)
      return Promise.reject(
        new Error(
          Y(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const R = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(r), p = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(r);
    if (R === null && p === null)
      return Promise.reject(
        new Error(
          Y(
            `Please upload a video or an image with a valid format (url: ${r})`
          )
        )
      );
    Object.assign(this, { url: r, wrapS: o, wrapT: c, minFilter: m, magFilter: E, flipY: g });
    const v = 0, x = n.RGBA, l = 1, T = 1, F = 0, d = n.RGBA, S = n.UNSIGNED_BYTE, I = new Uint8Array([255, 255, 255, 0]), U = n.createTexture();
    if (n.bindTexture(n.TEXTURE_2D, U), n.texImage2D(
      n.TEXTURE_2D,
      v,
      x,
      l,
      T,
      F,
      d,
      S,
      I
    ), p) {
      const P = this.setupVideo(r);
      return n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), this._webglTexture = U, this.source = P, this.isVideo = !0, P.play().then(() => this);
    }
    async function y() {
      return new Promise((P, V) => {
        const A = new Image();
        A.crossOrigin = "anonymous", A.onload = () => {
          P(A);
        }, A.onerror = () => {
          V(new Error(Y(`failed loading url: ${r}`)));
        }, A.src = r ?? "";
      });
    }
    let w = await y(), _ = (w.width & w.width - 1) === 0 && (w.height & w.height - 1) === 0;
    return (e.wrapS !== Ie || e.wrapT !== Ie || e.minFilter !== Le && e.minFilter !== ce) && !_ && (w = this.makePowerOf2(w), _ = !0), n.bindTexture(n.TEXTURE_2D, U), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g), n.texImage2D(
      n.TEXTURE_2D,
      v,
      x,
      d,
      S,
      w
    ), _ && e.minFilter !== Le && e.minFilter !== ce && n.generateMipmap(n.TEXTURE_2D), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_WRAP_S,
      this.wrapS || _e
    ), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_WRAP_T,
      this.wrapT || _e
    ), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_MIN_FILTER,
      this.minFilter || nn
    ), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_MAG_FILTER,
      this.magFilter || ce
    ), this._webglTexture = U, this.source = w, this.isVideo = !1, this.isLoaded = !0, this.width = w.width || 0, this.height = w.height || 0, this;
  };
}
const Y = (t) => `react-shaders: ${t}`, Ce = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, Fe = (t, e, n) => t * (1 - n) + e * n, on = (t, e, n) => n > 0 ? t.substring(0, n) + e + t.substring(n, t.length) : e + t;
function sn({
  fs: t,
  vs: e = we,
  textures: n = [],
  uniforms: r,
  clearColor: o = [0, 0, 0, 1],
  precision: c = "highp",
  style: m,
  contextAttributes: E = {},
  lerp: g = 1,
  devicePixelRatio: R = 1,
  onDoneLoadingTextures: p,
  onError: v = console.error,
  onWarning: x = console.warn
}) {
  const l = B(null), T = B(null), F = B(null), d = B(null), S = B(void 0), I = B(void 0), U = B(!1), y = B(void 0), w = B(0), _ = B([0, 0]), P = B([]), V = B(0), A = B(void 0), f = B({
    [Te]: { type: "float", isNeeded: !1, value: 0 },
    [ye]: { type: "float", isNeeded: !1, value: 0 },
    [Ee]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Ae]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Re]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [be]: { type: "int", isNeeded: !1, value: 0 },
    [Se]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), C = B(r), O = (i, a) => {
    const s = "width" in i ? i.width ?? 0 : 0, h = "height" in i ? i.height ?? 0 : 0, u = f.current.iChannelResolution;
    if (!u) return;
    const b = Array.isArray(u.value) ? u.value : u.value = [];
    b[a * 3] = s * R, b[a * 3 + 1] = h * R, b[a * 3 + 2] = 0;
  }, W = () => {
    l.current && (T.current = l.current.getContext("webgl", E) || l.current.getContext(
      "experimental-webgl",
      E
    ), T.current?.getExtension("OES_standard_derivatives"), T.current?.getExtension("EXT_shader_texture_lod"));
  }, k = () => {
    const i = T.current;
    F.current = i?.createBuffer() ?? null, i?.bindBuffer(i.ARRAY_BUFFER, F.current);
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
  }, H = ({
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
    const [a = 0, s = 0] = Ce(i), h = a - (y.current?.left ?? 0) - window.pageXOffset, u = (y.current?.height ?? 0) - s - (y.current?.top ?? 0) - window.pageYOffset;
    U.current = !0;
    const b = Array.isArray(f.current.iMouse?.value) ? f.current.iMouse.value : void 0;
    b && (b[2] = h, b[3] = u), _.current[0] = h, _.current[1] = u;
  }, M = (i) => {
    y.current = l.current?.getBoundingClientRect();
    const [a = 0, s = 0] = Ce(i), h = a - (y.current?.left ?? 0), u = (y.current?.height ?? 0) - s - (y.current?.top ?? 0);
    if (g !== 1)
      _.current[0] = h, _.current[1] = u;
    else {
      const b = Array.isArray(f.current.iMouse?.value) ? f.current.iMouse.value : void 0;
      b && (b[0] = h, b[1] = u);
    }
  }, L = () => {
    const i = Array.isArray(f.current.iMouse?.value) ? f.current.iMouse.value : void 0;
    i && (i[2] = 0, i[3] = 0);
  }, N = () => {
    const i = T.current;
    if (!i) return;
    y.current = l.current?.getBoundingClientRect();
    const a = R, s = Math.floor(
      (y.current?.width ?? 1) * a
    ), h = Math.floor(
      (y.current?.height ?? 1) * a
    );
    if (i.canvas.width = s, i.canvas.height = h, f.current.iResolution?.isNeeded && d.current) {
      const u = i.getUniformLocation(
        d.current,
        Re
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
      s.deleteShader(h), v?.(Y(`Shader compiler log: ${u}`));
    }
    return h;
  }, Z = (i, a) => {
    const s = T.current;
    if (!s) return;
    const h = K(s.FRAGMENT_SHADER, i), u = K(s.VERTEX_SHADER, a);
    if (d.current = s.createProgram(), !(!d.current || !u || !h)) {
      if (s.attachShader(d.current, u), s.attachShader(d.current, h), s.linkProgram(d.current), !s.getProgramParameter(d.current, s.LINK_STATUS)) {
        v?.(
          Y(
            `Unable to initialize the shader program: ${s.getProgramInfoLog(
              d.current
            )}`
          )
        );
        return;
      }
      s.useProgram(d.current), S.current = s.getAttribLocation(
        d.current,
        "aVertexPosition"
      ), s.enableVertexAttribArray(S.current);
    }
  }, $ = () => {
    if (r)
      for (const i of Object.keys(r)) {
        const a = r[i];
        if (!a) continue;
        const { value: s, type: h } = a, u = tn(h);
        if (!u) continue;
        const b = {};
        if (Qt(h, s)) {
          const D = h.length, X = Number.parseInt(h.charAt(D - 3)), te = Math.floor(s.length / (X * X));
          s.length > X * X && (b.arraySize = `[${te}]`);
        } else Jt(h, s) && (b.arraySize = `[${Math.floor(s.length / Number.parseInt(h.charAt(0)))}]`);
        f.current[i] = {
          type: u,
          isNeeded: !1,
          value: s,
          ...b
        };
      }
  }, ne = () => {
    const i = T.current;
    if (i)
      if (n && n.length > 0) {
        f.current[`${xe}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${n.length}]`,
          value: []
        };
        const a = n.map(
          (s, h) => (f.current[`${jt}${h}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, O(s, h), P.current[h] = new rn(i), P.current[h]?.load(s).then((u) => {
            O(u, h);
          }))
        );
        Promise.all(a).then(() => {
          p && p();
        }).catch((s) => {
          v?.(s), p && p();
        });
      } else p && p();
  }, re = (i) => {
    const a = ve.includes(c ?? "highp"), s = `precision ${a ? c : ve[1]} float;
`;
    a || x?.(
      Y(
        `wrong precision type ${c}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let h = s.concat(`#define DPR ${R.toFixed(1)}
`).concat(i.replace(/texture\(/g, "texture2D("));
    for (const b of Object.keys(f.current))
      if (i.includes(b)) {
        const D = f.current[b];
        if (!D) continue;
        h = on(
          h,
          `uniform ${D.type} ${b}${D.arraySize || ""}; 
`,
          h.lastIndexOf(s) + s.length
        ), D.isNeeded = !0;
      }
    return i.includes("mainImage") && (h = h.concat(Ht)), h;
  }, j = (i) => {
    const a = T.current;
    if (!a || !d.current) return;
    const s = V.current ? (i - V.current) / 1e3 : 0;
    V.current = i;
    const h = C.current;
    if (h)
      for (const u of Object.keys(h)) {
        const b = h[u];
        if (b && f.current[u]?.isNeeded) {
          if (!d.current) return;
          const D = a.getUniformLocation(
            d.current,
            u
          );
          if (!D) return;
          en(
            a,
            D,
            b.type,
            b.value
          );
        }
      }
    if (f.current.iMouse?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        Ae
      );
      a.uniform4fv(u, f.current.iMouse.value);
    }
    if (f.current.iChannelResolution?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        xe
      );
      a.uniform3fv(
        u,
        f.current.iChannelResolution.value
      );
    }
    if (f.current.iDeviceOrientation?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        Se
      );
      a.uniform4fv(
        u,
        f.current.iDeviceOrientation.value
      );
    }
    if (f.current.iTime?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        Te
      );
      a.uniform1f(u, w.current += s);
    }
    if (f.current.iTimeDelta?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        ye
      );
      a.uniform1f(u, s);
    }
    if (f.current.iDate?.isNeeded) {
      const u = /* @__PURE__ */ new Date(), b = u.getMonth() + 1, D = u.getDate(), X = u.getFullYear(), te = u.getHours() * 60 * 60 + u.getMinutes() * 60 + u.getSeconds() + u.getMilliseconds() * 1e-3, ae = a.getUniformLocation(
        d.current,
        Ee
      );
      a.uniform4fv(ae, [X, b, D, te]);
    }
    if (f.current.iFrame?.isNeeded) {
      const u = a.getUniformLocation(
        d.current,
        be
      ), b = f.current.iFrame.value;
      a.uniform1i(u, b), f.current.iFrame.value = b + 1;
    }
    if (P.current.length > 0)
      for (let u = 0; u < P.current.length; u++) {
        const b = P.current[u];
        if (!b) return;
        const { isVideo: D, _webglTexture: X, source: te, flipY: ae, isLoaded: ke } = b;
        if (!ke || !X || !te) return;
        if (f.current[`iChannel${u}`]?.isNeeded) {
          if (!d.current) return;
          const We = a.getUniformLocation(
            d.current,
            `iChannel${u}`
          );
          a.activeTexture(a.TEXTURE0 + u), a.bindTexture(a.TEXTURE_2D, X), a.uniform1i(We, u), D && b.updateTexture(
            X,
            te,
            ae
          );
        }
      }
  }, Q = (i) => {
    const a = T.current;
    if (!a) return;
    a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), a.bindBuffer(a.ARRAY_BUFFER, F.current), a.vertexAttribPointer(
      S.current ?? 0,
      3,
      a.FLOAT,
      !1,
      0,
      0
    ), j(i), a.drawArrays(a.TRIANGLE_STRIP, 0, 4);
    const s = f.current.iMouse?.value;
    if (f.current.iMouse?.isNeeded && g !== 1 && Array.isArray(s)) {
      const h = s[0] ?? 0, u = s[1] ?? 0;
      s[0] = Fe(h, _.current[0] ?? 0, g), s[1] = Fe(u, _.current[1] ?? 0, g);
    }
    I.current = requestAnimationFrame(Q);
  }, ee = () => {
    const i = { passive: !0 };
    f.current.iMouse?.isNeeded && l.current && (l.current.addEventListener("mousemove", M, i), l.current.addEventListener("mouseout", L, i), l.current.addEventListener("mouseup", L, i), l.current.addEventListener("mousedown", z, i), l.current.addEventListener("touchmove", M, i), l.current.addEventListener("touchend", L, i), l.current.addEventListener("touchstart", z, i)), f.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      H,
      i
    ), l.current && (A.current = new ResizeObserver(N), A.current.observe(l.current), window.addEventListener("resize", N, i));
  }, J = () => {
    const i = { passive: !0 };
    f.current.iMouse?.isNeeded && l.current && (l.current.removeEventListener("mousemove", M, i), l.current.removeEventListener("mouseout", L, i), l.current.removeEventListener("mouseup", L, i), l.current.removeEventListener("mousedown", z, i), l.current.removeEventListener("touchmove", M, i), l.current.removeEventListener("touchend", L, i), l.current.removeEventListener("touchstart", z, i)), f.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      H,
      i
    ), A.current && (A.current.disconnect(), window.removeEventListener("resize", N, i));
  };
  return ie(() => {
    C.current = r;
  }, [r]), ie(() => {
    const i = P.current;
    function a() {
      W();
      const s = T.current;
      s && l.current && (s.clearColor(...o), s.clearDepth(1), s.enable(s.DEPTH_TEST), s.depthFunc(s.LEQUAL), s.viewport(0, 0, l.current.width, l.current.height), l.current.height = l.current.clientHeight, l.current.width = l.current.clientWidth, $(), ne(), Z(re(t || Kt), e || we), k(), requestAnimationFrame(Q), ee(), N());
    }
    return requestAnimationFrame(a), () => {
      const s = T.current;
      if (s) {
        if (s.getExtension("WEBGL_lose_context")?.loseContext(), s.useProgram(null), s.deleteProgram(d.current ?? null), i.length > 0)
          for (const h of i)
            s.deleteTexture(h._webglTexture);
        d.current = null;
      }
      J(), cancelAnimationFrame(I.current ?? 0);
    };
  }, []), /* @__PURE__ */ q(
    "canvas",
    {
      ref: l,
      style: { height: "100%", width: "100%", ...m }
    }
  );
}
const an = `
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
}`, cn = 10, un = 2, ln = 0.5, fn = 0.2, hn = 1.5, G = {
  duration: 0.5,
  ease: "easeOut"
}, Pe = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function oe(t) {
  const [e, n] = Ue(t), r = dt(t), o = B(null);
  wt(r, "change", (m) => n(m));
  const c = $e(
    (m, E) => {
      o.current = Wt(r, m, E);
    },
    [r]
  );
  return { value: e, motionValue: r, controls: o, animate: c };
}
function dn(t, e) {
  const [n, r] = Ue(cn), {
    value: o,
    animate: c,
    motionValue: m
  } = oe(fn), { value: E, animate: g } = oe(un), { value: R, animate: p } = oe(ln), { value: v, animate: x } = oe(hn), l = vt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return ie(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        r(10), c(0.2, G), g(1.2, G), p(0.4, G), x(1, G);
        return;
      case "listening":
      case "pre-connect-buffering":
        r(20), c(0.3, { type: "spring", duration: 1, bounce: 0.35 }), g(1, G), p(0.7, G), x([1.5, 2], Pe);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        r(30), c(0.3, G), g(0.5, G), p(1, G), x([0.5, 2.5], Pe);
        return;
      case "speaking":
        r(70), c(0.3, G), g(0.75, G), p(1.25, G), x(1.5, G);
        return;
    }
  }, [
    t,
    c,
    g,
    p,
    x
  ]), ie(() => {
    t === "speaking" && l > 0 && !m.isAnimating() && c(0.2 + 0.2 * l, { duration: 0 });
  }, [
    t,
    l,
    m,
    c,
    g,
    p,
    x
  ]), {
    speed: n,
    scale: o,
    amplitude: E,
    frequency: R,
    brightness: v
  };
}
const mn = pt({
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
function pn(t) {
  const e = t.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, n, r, o] = e;
    return [n, r, o].map((m = "00") => parseInt(m, 16) / 255);
  }
}
function Ge({
  shape: t = 1,
  speed: e = 1,
  amplitude: n = 0.5,
  frequency: r = 0.5,
  scale: o = 0.2,
  blur: c = 1,
  color: m = "#FF355E",
  colorShift: E = 1,
  brightness: g = 1,
  themeMode: R = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: p,
  className: v,
  ...x
}) {
  const l = qe(() => pn(m), [m]);
  return /* @__PURE__ */ q("div", { ref: p, className: v, ...x, children: /* @__PURE__ */ q(
    sn,
    {
      fs: an,
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
        uFrequency: { type: "1f", value: r },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: n },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: g },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: E },
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
function Sn({
  size: t = "lg",
  state: e,
  color: n,
  colorShift: r = 0.05,
  audioTrack: o,
  themeMode: c,
  className: m,
  ref: E,
  ...g
}) {
  const { speed: R, scale: p, amplitude: v, frequency: x, brightness: l } = dn(e, o);
  return /* @__PURE__ */ q(
    Ge,
    {
      ref: E,
      blur: 0.2,
      color: n,
      colorShift: r,
      speed: R,
      scale: p,
      themeMode: c,
      amplitude: v,
      frequency: x,
      brightness: l,
      className: mt(
        mn({ size: t }),
        "overflow-hidden rounded-full",
        m
      ),
      ...g
    }
  );
}
const Ln = ({
  text: t,
  confirmationText: e,
  onConfirm: n,
  cancelText: r,
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
        icon: gt,
        onClick: n,
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
        label: r
      }
    )
  ] })
] });
export {
  An as A,
  xn as F,
  bn as a,
  En as b,
  Sn as c,
  Ln as d,
  yn as o,
  Rn as u
};
