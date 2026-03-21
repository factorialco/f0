import { jsx as Y, jsxs as Ee } from "react/jsx-runtime";
import { useInsertionEffect as At, createContext as bt, useContext as Rt, useRef as F, useEffect as re, useState as we, useCallback as ut, useMemo as xt } from "react";
import { r as St, i as Lt, m as _t, a as Ct, b as lt, d as It, c as Ft, f as Ut, e as Pt, s as Mt, g as ft, p as Nt, V as Ot, h as Dt, j as Bt, k as Vt, S as Gt, H as $t, v as he, l as kt, n as Xt, o as Wt, q as dt, t as ht, w as qt, F as ye, x as zt } from "./F0Input-C9w04Jpr.js";
import { useTrackVolume as mt } from "@livekit/components-react";
import { G as Yt } from "./F0AiChat-CMz8oLke.js";
function pt(r, e, t) {
  At(() => r.on(e, t), [r, e, t]);
}
function Te(r) {
  return typeof r == "object" && !Array.isArray(r);
}
function vt(r, e, t, n) {
  return typeof r == "string" && Te(e) ? St(r, t, n) : r instanceof NodeList ? Array.from(r) : Array.isArray(r) ? r : [r];
}
function Ht(r, e, t) {
  return r * (e + 1);
}
function Ae(r, e, t, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, r + parseFloat(e)) : e === "<" ? t : n.get(e) ?? r;
}
const jt = (r, e, t) => {
  const n = e - r;
  return ((t - r) % n + n) % n + r;
};
function gt(r, e) {
  return Lt(r) ? r[jt(0, r.length, e)] : r;
}
function Kt(r, e, t) {
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    a.at > e && a.at < t && (Ct(r, a), n--);
  }
}
function Qt(r, e, t, n, a, f) {
  Kt(r, a, f);
  for (let p = 0; p < e.length; p++)
    r.push({
      value: e[p],
      at: _t(a, f, n[p]),
      easing: gt(t, p)
    });
}
function Jt(r, e) {
  for (let t = 0; t < r.length; t++)
    r[t] = r[t] / (e + 1);
}
function Zt(r, e) {
  return r.at === e.at ? r.value === null ? 1 : e.value === null ? -1 : 0 : r.at - e.at;
}
const er = "easeInOut", tr = 20;
function rr(r, { defaultTransition: e = {}, ...t } = {}, n, a) {
  const f = e.duration || 0.3, p = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), E = {}, b = /* @__PURE__ */ new Map();
  let v = 0, w = 0, x = 0;
  for (let l = 0; l < r.length; l++) {
    const g = r[l];
    if (typeof g == "string") {
      b.set(g, w);
      continue;
    } else if (!Array.isArray(g)) {
      b.set(g.name, Ae(w, g.at, v, b));
      continue;
    }
    let [S, h, _ = {}] = g;
    _.at !== void 0 && (w = Ae(w, _.at, v, b));
    let U = 0;
    const M = (A, y, L, C = 0, B = 0) => {
      const R = nr(A), { delay: d = 0, times: N = It(R), type: G = "keyframes", repeat: W, repeatType: X, repeatDelay: H = 0, ...k } = y;
      let { ease: O = e.ease || "easeOut", duration: I } = y;
      const D = typeof d == "function" ? d(C, B) : d, j = R.length, ne = Pt(G) ? G : a?.[G];
      if (j <= 2 && ne) {
        let J = 100;
        if (j === 2 && sr(R)) {
          const Z = R[1] - R[0];
          J = Math.abs(Z);
        }
        const Q = { ...k };
        I !== void 0 && (Q.duration = Mt(I));
        const oe = Ft(Q, J, ne);
        O = oe.ease, I = oe.duration;
      }
      I ?? (I = f);
      const K = w + D;
      N.length === 1 && N[0] === 0 && (N[1] = 1);
      const ae = N.length - R.length;
      if (ae > 0 && Ut(N, ae), R.length === 1 && R.unshift(null), W) {
        ft(W < tr, "Repeat count too high, must be less than 20"), I = Ht(I, W);
        const J = [...R], Q = [...N];
        O = Array.isArray(O) ? [...O] : [O];
        const oe = [...O];
        for (let Z = 0; Z < W; Z++) {
          R.push(...J);
          for (let o = 0; o < J.length; o++)
            N.push(Q[o] + (Z + 1)), O.push(o === 0 ? "linear" : gt(oe, o - 1));
        }
        Jt(N, W);
      }
      const ce = K + I;
      Qt(L, R, O, N, K, ce), U = Math.max(D + I, U), x = Math.max(ce, x);
    };
    if (lt(S)) {
      const A = be(S, T);
      M(h, _, Re("default", A));
    } else {
      const A = vt(S, h, n, E), y = A.length;
      for (let L = 0; L < y; L++) {
        h = h, _ = _;
        const C = A[L], B = be(C, T);
        for (const R in h)
          M(h[R], or(_, R), Re(R, B), L, y);
      }
    }
    v = w, w += U;
  }
  return T.forEach((l, g) => {
    for (const S in l) {
      const h = l[S];
      h.sort(Zt);
      const _ = [], U = [], M = [];
      for (let y = 0; y < h.length; y++) {
        const { at: L, value: C, easing: B } = h[y];
        _.push(C), U.push(Nt(0, x, L)), M.push(B || "easeOut");
      }
      U[0] !== 0 && (U.unshift(0), _.unshift(_[0]), M.unshift(er)), U[U.length - 1] !== 1 && (U.push(1), _.push(null)), p.has(g) || p.set(g, {
        keyframes: {},
        transition: {}
      });
      const A = p.get(g);
      A.keyframes[S] = _, A.transition[S] = {
        ...e,
        duration: x,
        ease: M,
        times: U,
        ...t
      };
    }
  }), p;
}
function be(r, e) {
  return !e.has(r) && e.set(r, {}), e.get(r);
}
function Re(r, e) {
  return e[r] || (e[r] = []), e[r];
}
function nr(r) {
  return Array.isArray(r) ? r : [r];
}
function or(r, e) {
  return r && r[e] ? {
    ...r,
    ...r[e]
  } : { ...r };
}
const ir = (r) => typeof r == "number", sr = (r) => r.every(ir);
function ar(r, e) {
  return r in e;
}
class cr extends Ot {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, t) {
    if (ar(t, e)) {
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
    return Dt();
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
function ur(r) {
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
  }, t = Bt(r) && !Vt(r) ? new Gt(e) : new $t(e);
  t.mount(r), he.set(r, t);
}
function lr(r) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, t = new cr(e);
  t.mount(r), he.set(r, t);
}
function fr(r, e) {
  return lt(r) || typeof r == "number" || typeof r == "string" && !Te(e);
}
function wt(r, e, t, n) {
  const a = [];
  if (fr(r, e))
    a.push(kt(r, Te(e) && e.default || e, t && (t.default || t)));
  else {
    const f = vt(r, e, n), p = f.length;
    ft(!!p, "No valid elements provided.");
    for (let T = 0; T < p; T++) {
      const E = f[T], b = E instanceof Element ? ur : lr;
      he.has(E) || b(E);
      const v = he.get(E), w = { ...t };
      "delay" in w && typeof w.delay == "function" && (w.delay = w.delay(T, p)), a.push(...Xt(v, { ...e, transition: w }, {}));
    }
  }
  return a;
}
function dr(r, e, t) {
  const n = [];
  return rr(r, e, t, { spring: Wt }).forEach(({ keyframes: f, transition: p }, T) => {
    n.push(...wt(T, f, p));
  }), n;
}
class hr {
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
      t.forEach((n, a) => {
        n && n(), this.animations[a].stop();
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
class mr extends hr {
  then(e, t) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function pr(r) {
  return Array.isArray(r) && r.some(Array.isArray);
}
function vr(r) {
  function e(t, n, a) {
    let f = [];
    return pr(t) ? f = dr(t, n, r) : f = wt(t, n, a, r), new mr(f);
  }
  return e;
}
const Tt = vr(), ln = ["xs", "sm", "md", "lg"], fn = [
  "inProgress",
  "executing",
  "completed"
], dn = {
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
    closeDashboard: "Close dashboard",
    exportTable: "Download table",
    generatedTableFilename: "OneGeneratedTable",
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
    dataDownloadPreview: "Preview {{shown}} of {{total}} rows — download to see all data.",
    expandChat: "Expand chat",
    collapseChat: "Collapse chat",
    chatHistory: "Chat history",
    noPreviousChats: "No previous conversations",
    newConversation: "New conversation",
    today: "Today",
    yesterday: "Yesterday",
    thisMonth: "This month",
    older: "Older",
    searchChats: "Search conversations...",
    pinnedChats: "Pinned",
    threadOptions: "Thread options",
    pinChat: "Pin chat",
    unpinChat: "Unpin chat",
    deleteChat: "Delete chat",
    ask: "Ask One",
    viewProfile: "View profile",
    tools: "Tools",
    reportCard: {
      reportLabel: "Report",
      openButton: "Open"
    },
    dataDownload: {
      download: "Download {{format}}"
    },
    unsavedChanges: "Unsaved changes",
    saveChanges: "Save changes",
    discardChanges: "Discard"
  }
}, Et = bt(null);
function hn({
  children: r,
  translations: e
}) {
  return /* @__PURE__ */ Y(Et.Provider, { value: e, children: r });
}
function mn() {
  const r = Rt(Et);
  if (r === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return r;
}
function xe(r, e, t, n) {
  const a = Math.max(1, Math.min(r, e)), f = Math.min(t, 20), T = Math.min(f + n, a), E = Math.min(T, Math.floor(r / 2)), b = Math.min(T, Math.floor(e / 2)), v = (K) => K / r * 2 - 1, w = (K) => K / e * 2 - 1, x = 0, l = r, g = 0, S = e, h = E, _ = r - E, U = b, M = e - b, A = v(x), y = v(l), L = w(g), C = w(S), B = v(h), R = v(_), d = w(U), N = w(M), G = 0, W = 0, X = 1, H = 1, k = E / r, O = 1 - E / r, I = b / e, D = 1 - b / e, j = new Float32Array([
    // Top strip
    A,
    L,
    y,
    L,
    A,
    d,
    A,
    d,
    y,
    L,
    y,
    d,
    // Bottom strip
    A,
    N,
    y,
    N,
    A,
    C,
    A,
    C,
    y,
    N,
    y,
    C,
    // Left strip
    A,
    d,
    B,
    d,
    A,
    N,
    A,
    N,
    B,
    d,
    B,
    N,
    // Right strip
    R,
    d,
    y,
    d,
    R,
    N,
    R,
    N,
    y,
    d,
    y,
    N
  ]), ne = new Float32Array([
    // Top strip
    G,
    W,
    X,
    W,
    G,
    I,
    G,
    I,
    X,
    W,
    X,
    I,
    // Bottom strip
    G,
    D,
    X,
    D,
    G,
    H,
    G,
    H,
    X,
    D,
    X,
    H,
    // Left strip
    G,
    I,
    k,
    I,
    G,
    D,
    G,
    D,
    k,
    I,
    k,
    D,
    // Right strip
    O,
    I,
    X,
    I,
    O,
    D,
    O,
    D,
    X,
    I,
    X,
    D
  ]);
  return { positions: j, uvs: ne };
}
function Se(r, e, t) {
  const n = r.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  if (r.shaderSource(n, t), r.compileShader(n), !r.getShaderParameter(n, r.COMPILE_STATUS)) {
    const a = r.getShaderInfoLog(n) || "Unknown shader error";
    throw r.deleteShader(n), new Error(a);
  }
  return n;
}
function gr(r, e, t) {
  const n = Se(r, r.VERTEX_SHADER, e), a = Se(r, r.FRAGMENT_SHADER, t), f = r.createProgram();
  if (!f) throw new Error("Failed to create program");
  if (r.attachShader(f, n), r.attachShader(f, a), r.linkProgram(f), !r.getProgramParameter(f, r.LINK_STATUS)) {
    const p = r.getProgramInfoLog(f) || "Unknown link error";
    throw r.deleteProgram(f), r.deleteShader(n), r.deleteShader(a), new Error(p);
  }
  return r.deleteShader(n), r.deleteShader(a), f;
}
const wr = `#version 300 es
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
}`, Tr = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}`, Er = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function yr(r) {
  const e = r.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${r}`);
  const [, t, n, a] = e;
  return [parseInt(t) / 255, parseInt(n) / 255, parseInt(a) / 255];
}
class pn {
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
      const a = (t - this.startTime) * 1e-3;
      this.render(a);
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
    const { gl: e, vao: t, positionBuffer: n, uvBuffer: a, program: f } = this.glr;
    t && e.deleteVertexArray(t), n && e.deleteBuffer(n), a && e.deleteBuffer(a), e.deleteProgram(f), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(e, t, n) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = e, this.options.height = t, n && (this.options.ratio = n), !this.running) return;
    const { gl: a, program: f, vao: p, positionBuffer: T, uvBuffer: E, uResolution: b } = this.glr, v = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, w = Math.max(1, Math.floor(e * v)), x = Math.max(1, Math.floor(t * v));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${t}px`, (this.canvas.width !== w || this.canvas.height !== x) && (this.canvas.width = w, this.canvas.height = x), a.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(a, "resize: after viewport setup");
    const { positions: l, uvs: g } = xe(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * v,
      this.options.glowWidth * v
    );
    a.bindVertexArray(p), a.bindBuffer(a.ARRAY_BUFFER, T), a.bufferData(a.ARRAY_BUFFER, l, a.STATIC_DRAW);
    const S = a.getAttribLocation(f, "aPosition");
    a.enableVertexAttribArray(S), a.vertexAttribPointer(S, 2, a.FLOAT, !1, 0, 0), this.checkGLError(a, "resize: after position buffer update"), a.bindBuffer(a.ARRAY_BUFFER, E), a.bufferData(a.ARRAY_BUFFER, g, a.STATIC_DRAW);
    const h = a.getAttribLocation(f, "aUV");
    a.enableVertexAttribArray(h), a.vertexAttribPointer(h, 2, a.FLOAT, !1, 0, 0), this.checkGLError(a, "resize: after UV buffer update"), a.useProgram(f), a.uniform2f(b, this.canvas.width, this.canvas.height), a.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * v), a.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * v), a.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * v), this.checkGLError(a, "resize: after uniform updates");
    const _ = performance.now();
    this.lastTime = _;
    const U = (_ - this.startTime) * 1e-3;
    this.render(U);
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
        const a = this.getGLErrorName(e, n);
        console.error(`${a} (0x${n.toString(16)})`), n = e.getError();
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
    const t = gr(e, Tr, wr);
    this.checkGLError(e, "setupGL: after createProgram");
    const n = e.createVertexArray();
    e.bindVertexArray(n), this.checkGLError(e, "setupGL: after VAO creation");
    const a = this.canvas.width || 2, f = this.canvas.height || 2, { positions: p, uvs: T } = xe(
      a,
      f,
      this.options.borderWidth,
      this.options.glowWidth
    ), E = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, E), e.bufferData(e.ARRAY_BUFFER, p, e.STATIC_DRAW);
    const b = e.getAttribLocation(t, "aPosition");
    e.enableVertexAttribArray(b), e.vertexAttribPointer(b, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const v = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, v), e.bufferData(e.ARRAY_BUFFER, T, e.STATIC_DRAW);
    const w = e.getAttribLocation(t, "aUV");
    e.enableVertexAttribArray(w), e.vertexAttribPointer(w, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const x = e.getUniformLocation(t, "uResolution"), l = e.getUniformLocation(t, "uTime"), g = e.getUniformLocation(t, "uBorderWidth"), S = e.getUniformLocation(t, "uGlowWidth"), h = e.getUniformLocation(t, "uBorderRadius"), _ = e.getUniformLocation(t, "uColors"), U = e.getUniformLocation(t, "uGlowExponent"), M = e.getUniformLocation(t, "uGlowFactor");
    e.useProgram(t), e.uniform1f(g, this.options.borderWidth), e.uniform1f(S, this.options.glowWidth), e.uniform1f(h, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(U, 2), e.uniform1f(M, 1.8)) : (e.uniform1f(U, 1), e.uniform1f(M, 1));
    const A = (this.options.colors || Er).map(yr);
    for (let y = 0; y < A.length; y++)
      e.uniform3f(
        e.getUniformLocation(t, `uColors[${y}]`),
        ...A[y]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: t,
      vao: n,
      positionBuffer: E,
      uvBuffer: v,
      uResolution: x,
      uTime: l,
      uBorderWidth: g,
      uGlowWidth: S,
      uBorderRadius: h,
      uColors: _
    };
  }
  render(e) {
    if (!this.glr) return;
    const { gl: t, program: n, vao: a, uTime: f } = this.glr;
    t.useProgram(n), t.bindVertexArray(a), t.uniform1f(f, e), t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.disable(t.BLEND), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLES, 0, 24), this.checkGLError(t, "render: after draw call"), t.bindVertexArray(null);
  }
}
const Le = ["lowp", "mediump", "highp"], Ar = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, br = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, _e = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Ce = "iTime", Ie = "iTimeDelta", Fe = "iDate", Ue = "iFrame", Pe = "iMouse", Me = "iResolution", Rr = "iChannel", Ne = "iChannelResolution", Oe = "iDeviceOrientation";
function xr(r, e) {
  return r.includes("Matrix") && Array.isArray(e);
}
function Sr(r, e) {
  return r.includes("v") && Array.isArray(e) && e.length > Number.parseInt(r.charAt(0));
}
function Lr(r, e) {
  return !r.includes("v") && Array.isArray(e) && e.length > Number.parseInt(r.charAt(0));
}
const _r = (r, e, t, n) => {
  if (Lr(t, n))
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
}, Cr = (r) => {
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
        ee(
          `The uniform type "${r}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, ve = 9729, De = 9728, Ir = 9987, Be = 33071, Ve = 10497;
let Fr = class {
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
    const { gl: a } = this, f = 0, p = a.RGBA, T = a.RGBA, E = a.UNSIGNED_BYTE;
    a.bindTexture(a.TEXTURE_2D, e), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, n), a.texImage2D(
      a.TEXTURE_2D,
      f,
      p,
      T,
      E,
      t
    );
  };
  setupVideo = (e) => {
    const t = document.createElement("video");
    let n = !1, a = !1;
    t.autoplay = !0, t.muted = !0, t.loop = !0, t.crossOrigin = "anonymous";
    const f = () => {
      n && a && (this.isLoaded = !0);
    };
    return t.addEventListener(
      "playing",
      () => {
        n = !0, this.width = t.videoWidth || 0, this.height = t.videoHeight || 0, f();
      },
      !0
    ), t.addEventListener(
      "timeupdate",
      () => {
        a = !0, f();
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
    ee(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: t } = this, {
      url: n,
      wrapS: a,
      wrapT: f,
      minFilter: p,
      magFilter: T,
      flipY: E = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          ee(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const b = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), v = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (b === null && v === null)
      return Promise.reject(
        new Error(
          ee(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: a, wrapT: f, minFilter: p, magFilter: T, flipY: E });
    const w = 0, x = t.RGBA, l = 1, g = 1, S = 0, h = t.RGBA, _ = t.UNSIGNED_BYTE, U = new Uint8Array([255, 255, 255, 0]), M = t.createTexture();
    if (t.bindTexture(t.TEXTURE_2D, M), t.texImage2D(
      t.TEXTURE_2D,
      w,
      x,
      l,
      g,
      S,
      h,
      _,
      U
    ), v) {
      const C = this.setupVideo(n);
      return t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), this._webglTexture = M, this.source = C, this.isVideo = !0, C.play().then(() => this);
    }
    async function A() {
      return new Promise((C, B) => {
        const R = new Image();
        R.crossOrigin = "anonymous", R.onload = () => {
          C(R);
        }, R.onerror = () => {
          B(new Error(ee(`failed loading url: ${n}`)));
        }, R.src = n ?? "";
      });
    }
    let y = await A(), L = (y.width & y.width - 1) === 0 && (y.height & y.height - 1) === 0;
    return (e.wrapS !== Be || e.wrapT !== Be || e.minFilter !== De && e.minFilter !== ve) && !L && (y = this.makePowerOf2(y), L = !0), t.bindTexture(t.TEXTURE_2D, M), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, E), t.texImage2D(
      t.TEXTURE_2D,
      w,
      x,
      h,
      _,
      y
    ), L && e.minFilter !== De && e.minFilter !== ve && t.generateMipmap(t.TEXTURE_2D), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_S,
      this.wrapS || Ve
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_T,
      this.wrapT || Ve
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MIN_FILTER,
      this.minFilter || Ir
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MAG_FILTER,
      this.magFilter || ve
    ), this._webglTexture = M, this.source = y, this.isVideo = !1, this.isLoaded = !0, this.width = y.width || 0, this.height = y.height || 0, this;
  };
};
const ee = (r) => `react-shaders: ${r}`, Ge = (r) => {
  if ("changedTouches" in r) {
    const e = r.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [r.clientX, r.clientY];
}, $e = (r, e, t) => r * (1 - t) + e * t, Ur = (r, e, t) => t > 0 ? r.substring(0, t) + e + r.substring(t, r.length) : e + r;
function Pr({
  fs: r,
  vs: e = _e,
  textures: t = [],
  uniforms: n,
  clearColor: a = [0, 0, 0, 1],
  precision: f = "highp",
  style: p,
  contextAttributes: T = {},
  lerp: E = 1,
  devicePixelRatio: b = 1,
  onDoneLoadingTextures: v,
  onError: w = console.error,
  onWarning: x = console.warn
}) {
  const l = F(null), g = F(null), S = F(null), h = F(null), _ = F(void 0), U = F(void 0), M = F(!1), A = F(void 0), y = F(0), L = F([0, 0]), C = F([]), B = F(0), R = F(void 0), d = F({
    [Ce]: { type: "float", isNeeded: !1, value: 0 },
    [Ie]: { type: "float", isNeeded: !1, value: 0 },
    [Fe]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Pe]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Me]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Ue]: { type: "int", isNeeded: !1, value: 0 },
    [Oe]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), N = F(n), G = (o, s) => {
    const i = "width" in o ? o.width ?? 0 : 0, u = "height" in o ? o.height ?? 0 : 0, c = d.current.iChannelResolution;
    if (!c) return;
    const m = Array.isArray(c.value) ? c.value : c.value = [];
    m[s * 3] = i * b, m[s * 3 + 1] = u * b, m[s * 3 + 2] = 0;
  }, W = () => {
    l.current && (g.current = l.current.getContext("webgl", T) || l.current.getContext(
      "experimental-webgl",
      T
    ), g.current?.getExtension("OES_standard_derivatives"), g.current?.getExtension("EXT_shader_texture_lod"));
  }, X = () => {
    const o = g.current;
    S.current = o?.createBuffer() ?? null, o?.bindBuffer(o.ARRAY_BUFFER, S.current);
    const s = [
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
    o?.bufferData(o.ARRAY_BUFFER, new Float32Array(s), o.STATIC_DRAW);
  }, H = ({
    alpha: o,
    beta: s,
    gamma: i
  }) => {
    d.current.iDeviceOrientation.value = [
      o ?? 0,
      s ?? 0,
      i ?? 0,
      window.orientation ?? 0
    ];
  }, k = (o) => {
    const [s = 0, i = 0] = Ge(o), u = s - (A.current?.left ?? 0) - window.pageXOffset, c = (A.current?.height ?? 0) - i - (A.current?.top ?? 0) - window.pageYOffset;
    M.current = !0;
    const m = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
    m && (m[2] = u, m[3] = c), L.current[0] = u, L.current[1] = c;
  }, O = (o) => {
    A.current = l.current?.getBoundingClientRect();
    const [s = 0, i = 0] = Ge(o), u = s - (A.current?.left ?? 0), c = (A.current?.height ?? 0) - i - (A.current?.top ?? 0);
    if (E !== 1)
      L.current[0] = u, L.current[1] = c;
    else {
      const m = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
      m && (m[0] = u, m[1] = c);
    }
  }, I = () => {
    const o = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
    o && (o[2] = 0, o[3] = 0);
  }, D = () => {
    const o = g.current;
    if (!o) return;
    A.current = l.current?.getBoundingClientRect();
    const s = b, i = Math.floor(
      (A.current?.width ?? 1) * s
    ), u = Math.floor(
      (A.current?.height ?? 1) * s
    );
    if (o.canvas.width = i, o.canvas.height = u, d.current.iResolution?.isNeeded && h.current) {
      const c = o.getUniformLocation(
        h.current,
        Me
      );
      o.uniform2fv(c, [o.canvas.width, o.canvas.height]);
    }
  }, j = (o, s) => {
    const i = g.current;
    if (!i) return null;
    const u = i.createShader(o);
    if (!u) return null;
    if (i.shaderSource(u, s), i.compileShader(u), !i.getShaderParameter(u, i.COMPILE_STATUS)) {
      x?.(ee(`Error compiling the shader:
${s}`));
      const c = i.getShaderInfoLog(u);
      i.deleteShader(u), w?.(ee(`Shader compiler log: ${c}`));
    }
    return u;
  }, ne = (o, s) => {
    const i = g.current;
    if (!i) return;
    const u = j(i.FRAGMENT_SHADER, o), c = j(i.VERTEX_SHADER, s);
    if (h.current = i.createProgram(), !(!h.current || !c || !u)) {
      if (i.attachShader(h.current, c), i.attachShader(h.current, u), i.linkProgram(h.current), !i.getProgramParameter(h.current, i.LINK_STATUS)) {
        w?.(
          ee(
            `Unable to initialize the shader program: ${i.getProgramInfoLog(
              h.current
            )}`
          )
        );
        return;
      }
      i.useProgram(h.current), _.current = i.getAttribLocation(
        h.current,
        "aVertexPosition"
      ), i.enableVertexAttribArray(_.current);
    }
  }, K = () => {
    if (n)
      for (const o of Object.keys(n)) {
        const s = n[o];
        if (!s) continue;
        const { value: i, type: u } = s, c = Cr(u);
        if (!c) continue;
        const m = {};
        if (xr(u, i)) {
          const P = u.length, V = Number.parseInt(u.charAt(P - 3)), q = Math.floor(i.length / (V * V));
          i.length > V * V && (m.arraySize = `[${q}]`);
        } else Sr(u, i) && (m.arraySize = `[${Math.floor(i.length / Number.parseInt(u.charAt(0)))}]`);
        d.current[o] = {
          type: c,
          isNeeded: !1,
          value: i,
          ...m
        };
      }
  }, ae = () => {
    const o = g.current;
    if (o)
      if (t && t.length > 0) {
        d.current[`${Ne}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${t.length}]`,
          value: []
        };
        const s = t.map(
          (i, u) => (d.current[`${Rr}${u}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, G(i, u), C.current[u] = new Fr(o), C.current[u]?.load(i).then((c) => {
            G(c, u);
          }))
        );
        Promise.all(s).then(() => {
          v && v();
        }).catch((i) => {
          w?.(i), v && v();
        });
      } else v && v();
  }, ce = (o) => {
    const s = Le.includes(f ?? "highp"), i = `precision ${s ? f : Le[1]} float;
`;
    s || x?.(
      ee(
        `wrong precision type ${f}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let u = i.concat(`#define DPR ${b.toFixed(1)}
`).concat(o.replace(/texture\(/g, "texture2D("));
    for (const m of Object.keys(d.current))
      if (o.includes(m)) {
        const P = d.current[m];
        if (!P) continue;
        u = Ur(
          u,
          `uniform ${P.type} ${m}${P.arraySize || ""}; 
`,
          u.lastIndexOf(i) + i.length
        ), P.isNeeded = !0;
      }
    return o.includes("mainImage") && (u = u.concat(Ar)), u;
  }, J = (o) => {
    const s = g.current;
    if (!s || !h.current) return;
    const i = B.current ? (o - B.current) / 1e3 : 0;
    B.current = o;
    const u = N.current;
    if (u)
      for (const c of Object.keys(u)) {
        const m = u[c];
        if (m && d.current[c]?.isNeeded) {
          if (!h.current) return;
          const P = s.getUniformLocation(
            h.current,
            c
          );
          if (!P) return;
          _r(
            s,
            P,
            m.type,
            m.value
          );
        }
      }
    if (d.current.iMouse?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        Pe
      );
      s.uniform4fv(c, d.current.iMouse.value);
    }
    if (d.current.iChannelResolution?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        Ne
      );
      s.uniform3fv(
        c,
        d.current.iChannelResolution.value
      );
    }
    if (d.current.iDeviceOrientation?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        Oe
      );
      s.uniform4fv(
        c,
        d.current.iDeviceOrientation.value
      );
    }
    if (d.current.iTime?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        Ce
      );
      s.uniform1f(c, y.current += i);
    }
    if (d.current.iTimeDelta?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        Ie
      );
      s.uniform1f(c, i);
    }
    if (d.current.iDate?.isNeeded) {
      const c = /* @__PURE__ */ new Date(), m = c.getMonth() + 1, P = c.getDate(), V = c.getFullYear(), q = c.getHours() * 60 * 60 + c.getMinutes() * 60 + c.getSeconds() + c.getMilliseconds() * 1e-3, se = s.getUniformLocation(
        h.current,
        Fe
      );
      s.uniform4fv(se, [V, m, P, q]);
    }
    if (d.current.iFrame?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        Ue
      ), m = d.current.iFrame.value;
      s.uniform1i(c, m), d.current.iFrame.value = m + 1;
    }
    if (C.current.length > 0)
      for (let c = 0; c < C.current.length; c++) {
        const m = C.current[c];
        if (!m) return;
        const { isVideo: P, _webglTexture: V, source: q, flipY: se, isLoaded: me } = m;
        if (!me || !V || !q) return;
        if (d.current[`iChannel${c}`]?.isNeeded) {
          if (!h.current) return;
          const pe = s.getUniformLocation(
            h.current,
            `iChannel${c}`
          );
          s.activeTexture(s.TEXTURE0 + c), s.bindTexture(s.TEXTURE_2D, V), s.uniform1i(pe, c), P && m.updateTexture(
            V,
            q,
            se
          );
        }
      }
  }, Q = (o) => {
    const s = g.current;
    if (!s) return;
    s.viewport(0, 0, s.drawingBufferWidth, s.drawingBufferHeight), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.bindBuffer(s.ARRAY_BUFFER, S.current), s.vertexAttribPointer(
      _.current ?? 0,
      3,
      s.FLOAT,
      !1,
      0,
      0
    ), J(o), s.drawArrays(s.TRIANGLE_STRIP, 0, 4);
    const i = d.current.iMouse?.value;
    if (d.current.iMouse?.isNeeded && E !== 1 && Array.isArray(i)) {
      const u = i[0] ?? 0, c = i[1] ?? 0;
      i[0] = $e(u, L.current[0] ?? 0, E), i[1] = $e(c, L.current[1] ?? 0, E);
    }
    U.current = requestAnimationFrame(Q);
  }, oe = () => {
    const o = { passive: !0 };
    d.current.iMouse?.isNeeded && l.current && (l.current.addEventListener("mousemove", O, o), l.current.addEventListener("mouseout", I, o), l.current.addEventListener("mouseup", I, o), l.current.addEventListener("mousedown", k, o), l.current.addEventListener("touchmove", O, o), l.current.addEventListener("touchend", I, o), l.current.addEventListener("touchstart", k, o)), d.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      H,
      o
    ), l.current && (R.current = new ResizeObserver(D), R.current.observe(l.current), window.addEventListener("resize", D, o));
  }, Z = () => {
    const o = { passive: !0 };
    d.current.iMouse?.isNeeded && l.current && (l.current.removeEventListener("mousemove", O, o), l.current.removeEventListener("mouseout", I, o), l.current.removeEventListener("mouseup", I, o), l.current.removeEventListener("mousedown", k, o), l.current.removeEventListener("touchmove", O, o), l.current.removeEventListener("touchend", I, o), l.current.removeEventListener("touchstart", k, o)), d.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      H,
      o
    ), R.current && (R.current.disconnect(), window.removeEventListener("resize", D, o));
  };
  return re(() => {
    N.current = n;
  }, [n]), re(() => {
    const o = C.current;
    function s() {
      W();
      const i = g.current;
      i && l.current && (i.clearColor(...a), i.clearDepth(1), i.enable(i.DEPTH_TEST), i.depthFunc(i.LEQUAL), i.viewport(0, 0, l.current.width, l.current.height), l.current.height = l.current.clientHeight, l.current.width = l.current.clientWidth, K(), ae(), ne(ce(r || br), e || _e), X(), requestAnimationFrame(Q), oe(), D());
    }
    return requestAnimationFrame(s), () => {
      const i = g.current;
      if (i) {
        if (i.getExtension("WEBGL_lose_context")?.loseContext(), i.useProgram(null), i.deleteProgram(h.current ?? null), o.length > 0)
          for (const u of o)
            i.deleteTexture(u._webglTexture);
        h.current = null;
      }
      Z(), cancelAnimationFrame(U.current ?? 0);
    };
  }, []), /* @__PURE__ */ Y(
    "canvas",
    {
      ref: l,
      style: { height: "100%", width: "100%", ...p }
    }
  );
}
const Mr = `
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
}`, Nr = 10, Or = 2, Dr = 0.5, Br = 0.2, Vr = 1.5, z = {
  duration: 0.5,
  ease: "easeOut"
}, ke = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function le(r) {
  const [e, t] = we(r), n = dt(r), a = F(null);
  pt(n, "change", (p) => t(p));
  const f = ut(
    (p, T) => {
      a.current = Tt(n, p, T);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: a, animate: f };
}
function Gr(r, e) {
  const [t, n] = we(Nr), {
    value: a,
    animate: f,
    motionValue: p
  } = le(Br), { value: T, animate: E } = le(Or), { value: b, animate: v } = le(Dr), { value: w, animate: x } = le(Vr), l = mt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return re(() => {
    switch (r) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), f(0.2, z), E(1.2, z), v(0.4, z), x(1, z);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), f(0.3, { type: "spring", duration: 1, bounce: 0.35 }), E(1, z), v(0.7, z), x([1.5, 2], ke);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), f(0.3, z), E(0.5, z), v(1, z), x([0.5, 2.5], ke);
        return;
      case "speaking":
        n(70), f(0.3, z), E(0.75, z), v(1.25, z), x(1.5, z);
        return;
    }
  }, [
    r,
    f,
    E,
    v,
    x
  ]), re(() => {
    r === "speaking" && l > 0 && !p.isAnimating() && f(0.2 + 0.2 * l, { duration: 0 });
  }, [
    r,
    l,
    p,
    f,
    E,
    v,
    x
  ]), {
    speed: t,
    scale: a,
    amplitude: T,
    frequency: b,
    brightness: w
  };
}
const $r = qt({
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
function kr(r) {
  const e = r.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, t, n, a] = e;
    return [t, n, a].map((p = "00") => parseInt(p, 16) / 255);
  }
}
function yt({
  shape: r = 1,
  speed: e = 1,
  amplitude: t = 0.5,
  frequency: n = 0.5,
  scale: a = 0.2,
  blur: f = 1,
  color: p = "#FF355E",
  colorShift: T = 1,
  brightness: E = 1,
  themeMode: b = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: v,
  className: w,
  ...x
}) {
  const l = xt(() => kr(p), [p]);
  return /* @__PURE__ */ Y("div", { ref: v, className: w, ...x, children: /* @__PURE__ */ Y(
    Pr,
    {
      fs: Mr,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: e },
        // Edge blur/softness
        uBlur: { type: "1f", value: f },
        // Shape scale
        uScale: { type: "1f", value: a },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: r },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: n },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: t },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: E },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: T },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: b === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: l ?? [0, 0.7, 1] }
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
yt.displayName = "AuraShader";
function gn({
  size: r = "lg",
  state: e,
  color: t,
  colorShift: n = 0.05,
  audioTrack: a,
  themeMode: f,
  className: p,
  ref: T,
  ...E
}) {
  const { speed: b, scale: v, amplitude: w, frequency: x, brightness: l } = Gr(e, a);
  return /* @__PURE__ */ Y(
    yt,
    {
      ref: T,
      blur: 0.2,
      color: t,
      colorShift: n,
      speed: b,
      scale: v,
      themeMode: f,
      amplitude: w,
      frequency: x,
      brightness: l,
      className: ht(
        $r({ size: r }),
        "overflow-hidden rounded-full",
        p
      ),
      ...E
    }
  );
}
const Xe = 1.8, We = 0.45, qe = 0.62, ze = 1, Ye = 0, $ = {
  duration: 0.5,
  ease: "easeOut"
}, ie = {
  ease: "easeInOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function ue(r) {
  const [e, t] = we(r), n = dt(r), a = F(null);
  pt(n, "change", (p) => t(p));
  const f = ut(
    (p, T) => {
      a.current = Tt(n, p, T);
    },
    [n]
  );
  return { value: e, animate: f };
}
function Xr(r, e) {
  const { value: t, animate: n } = ue(Xe), { value: a, animate: f } = ue(We), { value: p, animate: T } = ue(qe), { value: E, animate: b } = ue(ze), { value: v, animate: w } = ue(Ye), { value: x, animate: l } = ue(1), g = mt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return re(() => {
    l(1, { duration: 0.5, ease: "easeOut" });
  }, [l]), re(() => {
    switch (r) {
      case "idle":
      case "failed":
      case "disconnected":
        w(0, $), n(0.9, $), f([0.24, 0.4], { ...ie, duration: 3 }), T(0.28, $), b([0.97, 1.02], { ...ie, duration: 2.5 });
        return;
      case "listening":
      case "pre-connect-buffering":
        w(1, $), n(1.9, $), f([0.42, 0.64], { ...ie, duration: 1.1 }), T(0.54, $), b([0.98, 1.04], { ...ie, duration: 1 });
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        w(2, $), n(2.6, $), f([0.58, 0.84], { ...ie, duration: 0.58 }), T(0.8, $), b([1.01, 1.08], { ...ie, duration: 0.55 });
        return;
      case "speaking":
        w(3, $), n(2.2, $), f(0.56, $), T(0.76, $), b(1.02, $);
        return;
      default:
        w(Ye, $), n(Xe, $), f([0.3, We], { ...ie, duration: 2.2 }), T(qe, $), b([0.98, ze], { ...ie, duration: 1.8 });
        return;
    }
  }, [
    r,
    T,
    f,
    b,
    n,
    w
  ]), re(() => {
    if (r !== "speaking") return;
    const S = Math.min(Math.max(g, 0), 1);
    f(0.44 + S * 0.56, { duration: 0 }), n(2 + S * 2.4, { duration: 0 }), T(0.68 + S * 0.2, { duration: 0.1 }), b(1 + S * 0.12, { duration: 0 });
  }, [
    r,
    g,
    T,
    f,
    b,
    n
  ]), { speed: t, intensity: a, complexity: p, scale: E, statePhase: v, opacity: x };
}
const He = ["lowp", "mediump", "highp"], Wr = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, qr = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, je = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Ke = "iTime", Qe = "iTimeDelta", Je = "iDate", Ze = "iFrame", et = "iMouse", tt = "iResolution", zr = "iChannel", rt = "iChannelResolution", nt = "iDeviceOrientation";
function Yr(r, e) {
  return r.includes("Matrix") && Array.isArray(e);
}
function Hr(r, e) {
  return r.includes("v") && Array.isArray(e) && e.length > Number.parseInt(r.charAt(0));
}
function jr(r, e) {
  return !r.includes("v") && Array.isArray(e) && e.length > Number.parseInt(r.charAt(0));
}
const Kr = (r, e, t, n) => {
  if (jr(t, n))
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
}, Qr = (r) => {
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
        te(
          `The uniform type "${r}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, ge = 9729, ot = 9728, Jr = 9987, it = 33071, st = 10497;
class Zr {
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
    const { gl: a } = this, f = 0, p = a.RGBA, T = a.RGBA, E = a.UNSIGNED_BYTE;
    a.bindTexture(a.TEXTURE_2D, e), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, n), a.texImage2D(
      a.TEXTURE_2D,
      f,
      p,
      T,
      E,
      t
    );
  };
  setupVideo = (e) => {
    const t = document.createElement("video");
    let n = !1, a = !1;
    t.autoplay = !0, t.muted = !0, t.loop = !0, t.crossOrigin = "anonymous";
    const f = () => {
      n && a && (this.isLoaded = !0);
    };
    return t.addEventListener(
      "playing",
      () => {
        n = !0, this.width = t.videoWidth || 0, this.height = t.videoHeight || 0, f();
      },
      !0
    ), t.addEventListener(
      "timeupdate",
      () => {
        a = !0, f();
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
    te(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: t } = this, {
      url: n,
      wrapS: a,
      wrapT: f,
      minFilter: p,
      magFilter: T,
      flipY: E = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          te(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const b = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), v = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (b === null && v === null)
      return Promise.reject(
        new Error(
          te(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: a, wrapT: f, minFilter: p, magFilter: T, flipY: E });
    const w = 0, x = t.RGBA, l = 1, g = 1, S = 0, h = t.RGBA, _ = t.UNSIGNED_BYTE, U = new Uint8Array([255, 255, 255, 0]), M = t.createTexture();
    if (t.bindTexture(t.TEXTURE_2D, M), t.texImage2D(
      t.TEXTURE_2D,
      w,
      x,
      l,
      g,
      S,
      h,
      _,
      U
    ), v) {
      const C = this.setupVideo(n);
      return t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), this._webglTexture = M, this.source = C, this.isVideo = !0, C.play().then(() => this);
    }
    async function A() {
      return new Promise((C, B) => {
        const R = new Image();
        R.crossOrigin = "anonymous", R.onload = () => {
          C(R);
        }, R.onerror = () => {
          B(new Error(te(`failed loading url: ${n}`)));
        }, R.src = n ?? "";
      });
    }
    let y = await A(), L = (y.width & y.width - 1) === 0 && (y.height & y.height - 1) === 0;
    return (e.wrapS !== it || e.wrapT !== it || e.minFilter !== ot && e.minFilter !== ge) && !L && (y = this.makePowerOf2(y), L = !0), t.bindTexture(t.TEXTURE_2D, M), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, E), t.texImage2D(
      t.TEXTURE_2D,
      w,
      x,
      h,
      _,
      y
    ), L && e.minFilter !== ot && e.minFilter !== ge && t.generateMipmap(t.TEXTURE_2D), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_S,
      this.wrapS || st
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_T,
      this.wrapT || st
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MIN_FILTER,
      this.minFilter || Jr
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MAG_FILTER,
      this.magFilter || ge
    ), this._webglTexture = M, this.source = y, this.isVideo = !1, this.isLoaded = !0, this.width = y.width || 0, this.height = y.height || 0, this;
  };
}
const te = (r) => `react-shaders: ${r}`, at = (r) => {
  if ("changedTouches" in r) {
    const e = r.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [r.clientX, r.clientY];
}, ct = (r, e, t) => r * (1 - t) + e * t, en = (r, e, t) => t > 0 ? r.substring(0, t) + e + r.substring(t, r.length) : e + r;
function tn({
  fs: r,
  vs: e = je,
  textures: t = [],
  uniforms: n,
  clearColor: a = [0, 0, 0, 1],
  precision: f = "highp",
  style: p,
  contextAttributes: T = {},
  lerp: E = 1,
  devicePixelRatio: b = 1,
  onDoneLoadingTextures: v,
  onError: w = console.error,
  onWarning: x = console.warn
}) {
  const l = F(null), g = F(null), S = F(null), h = F(null), _ = F(void 0), U = F(void 0), M = F(!1), A = F(void 0), y = F(0), L = F([0, 0]), C = F([]), B = F(0), R = F(void 0), d = F({
    [Ke]: { type: "float", isNeeded: !1, value: 0 },
    [Qe]: { type: "float", isNeeded: !1, value: 0 },
    [Je]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [et]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [tt]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Ze]: { type: "int", isNeeded: !1, value: 0 },
    [nt]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), N = F(n), G = (o, s) => {
    const i = "width" in o ? o.width ?? 0 : 0, u = "height" in o ? o.height ?? 0 : 0, c = d.current.iChannelResolution;
    if (!c) return;
    const m = Array.isArray(c.value) ? c.value : c.value = [];
    m[s * 3] = i * b, m[s * 3 + 1] = u * b, m[s * 3 + 2] = 0;
  }, W = () => {
    l.current && (g.current = l.current.getContext("webgl", T) || l.current.getContext(
      "experimental-webgl",
      T
    ), g.current?.getExtension("OES_standard_derivatives"), g.current?.getExtension("EXT_shader_texture_lod"));
  }, X = () => {
    const o = g.current;
    S.current = o?.createBuffer() ?? null, o?.bindBuffer(o.ARRAY_BUFFER, S.current);
    const s = [
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
    o?.bufferData(o.ARRAY_BUFFER, new Float32Array(s), o.STATIC_DRAW);
  }, H = ({
    alpha: o,
    beta: s,
    gamma: i
  }) => {
    d.current.iDeviceOrientation.value = [
      o ?? 0,
      s ?? 0,
      i ?? 0,
      window.orientation ?? 0
    ];
  }, k = (o) => {
    const [s = 0, i = 0] = at(o), u = s - (A.current?.left ?? 0) - window.pageXOffset, c = (A.current?.height ?? 0) - i - (A.current?.top ?? 0) - window.pageYOffset;
    M.current = !0;
    const m = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
    m && (m[2] = u, m[3] = c), L.current[0] = u, L.current[1] = c;
  }, O = (o) => {
    A.current = l.current?.getBoundingClientRect();
    const [s = 0, i = 0] = at(o), u = s - (A.current?.left ?? 0), c = (A.current?.height ?? 0) - i - (A.current?.top ?? 0);
    if (E !== 1)
      L.current[0] = u, L.current[1] = c;
    else {
      const m = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
      m && (m[0] = u, m[1] = c);
    }
  }, I = () => {
    const o = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
    o && (o[2] = 0, o[3] = 0);
  }, D = () => {
    const o = g.current;
    if (!o) return;
    A.current = l.current?.getBoundingClientRect();
    const s = b, i = Math.floor(
      (A.current?.width ?? 1) * s
    ), u = Math.floor(
      (A.current?.height ?? 1) * s
    );
    if (o.canvas.width = i, o.canvas.height = u, d.current.iResolution?.isNeeded && h.current) {
      const c = o.getUniformLocation(
        h.current,
        tt
      );
      o.uniform2fv(c, [o.canvas.width, o.canvas.height]);
    }
  }, j = (o, s) => {
    const i = g.current;
    if (!i) return null;
    const u = i.createShader(o);
    if (!u) return null;
    if (i.shaderSource(u, s), i.compileShader(u), !i.getShaderParameter(u, i.COMPILE_STATUS)) {
      x?.(te(`Error compiling the shader:
${s}`));
      const c = i.getShaderInfoLog(u);
      i.deleteShader(u), w?.(te(`Shader compiler log: ${c}`));
    }
    return u;
  }, ne = (o, s) => {
    const i = g.current;
    if (!i) return;
    const u = j(i.FRAGMENT_SHADER, o), c = j(i.VERTEX_SHADER, s);
    if (h.current = i.createProgram(), !(!h.current || !c || !u)) {
      if (i.attachShader(h.current, c), i.attachShader(h.current, u), i.linkProgram(h.current), !i.getProgramParameter(h.current, i.LINK_STATUS)) {
        w?.(
          te(
            `Unable to initialize the shader program: ${i.getProgramInfoLog(
              h.current
            )}`
          )
        );
        return;
      }
      i.useProgram(h.current), _.current = i.getAttribLocation(
        h.current,
        "aVertexPosition"
      ), i.enableVertexAttribArray(_.current);
    }
  }, K = () => {
    if (n)
      for (const o of Object.keys(n)) {
        const s = n[o];
        if (!s) continue;
        const { value: i, type: u } = s, c = Qr(u);
        if (!c) continue;
        const m = {};
        if (Yr(u, i)) {
          const P = u.length, V = Number.parseInt(u.charAt(P - 3)), q = Math.floor(i.length / (V * V));
          i.length > V * V && (m.arraySize = `[${q}]`);
        } else Hr(u, i) && (m.arraySize = `[${Math.floor(i.length / Number.parseInt(u.charAt(0)))}]`);
        d.current[o] = {
          type: c,
          isNeeded: !1,
          value: i,
          ...m
        };
      }
  }, ae = () => {
    const o = g.current;
    if (o)
      if (t && t.length > 0) {
        d.current[`${rt}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${t.length}]`,
          value: []
        };
        const s = t.map(
          (i, u) => (d.current[`${zr}${u}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, G(i, u), C.current[u] = new Zr(o), C.current[u]?.load(i).then((c) => {
            G(c, u);
          }))
        );
        Promise.all(s).then(() => {
          v && v();
        }).catch((i) => {
          w?.(i), v && v();
        });
      } else v && v();
  }, ce = (o) => {
    const s = He.includes(f ?? "highp"), i = `precision ${s ? f : He[1]} float;
`;
    s || x?.(
      te(
        `wrong precision type ${f}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let u = i.concat(`#define DPR ${b.toFixed(1)}
`).concat(o.replace(/texture\(/g, "texture2D("));
    for (const m of Object.keys(d.current))
      if (o.includes(m)) {
        const P = d.current[m];
        if (!P) continue;
        u = en(
          u,
          `uniform ${P.type} ${m}${P.arraySize || ""}; 
`,
          u.lastIndexOf(i) + i.length
        ), P.isNeeded = !0;
      }
    return o.includes("mainImage") && (u = u.concat(Wr)), u;
  }, J = (o) => {
    const s = g.current;
    if (!s || !h.current) return;
    const i = B.current ? (o - B.current) / 1e3 : 0;
    B.current = o;
    const u = N.current;
    if (u)
      for (const c of Object.keys(u)) {
        const m = u[c];
        if (m && d.current[c]?.isNeeded) {
          if (!h.current) return;
          const P = s.getUniformLocation(
            h.current,
            c
          );
          if (!P) return;
          Kr(
            s,
            P,
            m.type,
            m.value
          );
        }
      }
    if (d.current.iMouse?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        et
      );
      s.uniform4fv(c, d.current.iMouse.value);
    }
    if (d.current.iChannelResolution?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        rt
      );
      s.uniform3fv(
        c,
        d.current.iChannelResolution.value
      );
    }
    if (d.current.iDeviceOrientation?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        nt
      );
      s.uniform4fv(
        c,
        d.current.iDeviceOrientation.value
      );
    }
    if (d.current.iTime?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        Ke
      );
      s.uniform1f(c, y.current += i);
    }
    if (d.current.iTimeDelta?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        Qe
      );
      s.uniform1f(c, i);
    }
    if (d.current.iDate?.isNeeded) {
      const c = /* @__PURE__ */ new Date(), m = c.getMonth() + 1, P = c.getDate(), V = c.getFullYear(), q = c.getHours() * 60 * 60 + c.getMinutes() * 60 + c.getSeconds() + c.getMilliseconds() * 1e-3, se = s.getUniformLocation(
        h.current,
        Je
      );
      s.uniform4fv(se, [V, m, P, q]);
    }
    if (d.current.iFrame?.isNeeded) {
      const c = s.getUniformLocation(
        h.current,
        Ze
      ), m = d.current.iFrame.value;
      s.uniform1i(c, m), d.current.iFrame.value = m + 1;
    }
    if (C.current.length > 0)
      for (let c = 0; c < C.current.length; c++) {
        const m = C.current[c];
        if (!m) return;
        const { isVideo: P, _webglTexture: V, source: q, flipY: se, isLoaded: me } = m;
        if (!me || !V || !q) return;
        if (d.current[`iChannel${c}`]?.isNeeded) {
          if (!h.current) return;
          const pe = s.getUniformLocation(
            h.current,
            `iChannel${c}`
          );
          s.activeTexture(s.TEXTURE0 + c), s.bindTexture(s.TEXTURE_2D, V), s.uniform1i(pe, c), P && m.updateTexture(
            V,
            q,
            se
          );
        }
      }
  }, Q = (o) => {
    const s = g.current;
    if (!s) return;
    s.viewport(0, 0, s.drawingBufferWidth, s.drawingBufferHeight), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.bindBuffer(s.ARRAY_BUFFER, S.current), s.vertexAttribPointer(
      _.current ?? 0,
      3,
      s.FLOAT,
      !1,
      0,
      0
    ), J(o), s.drawArrays(s.TRIANGLE_STRIP, 0, 4);
    const i = d.current.iMouse?.value;
    if (d.current.iMouse?.isNeeded && E !== 1 && Array.isArray(i)) {
      const u = i[0] ?? 0, c = i[1] ?? 0;
      i[0] = ct(u, L.current[0] ?? 0, E), i[1] = ct(c, L.current[1] ?? 0, E);
    }
    U.current = requestAnimationFrame(Q);
  }, oe = () => {
    const o = { passive: !0 };
    d.current.iMouse?.isNeeded && l.current && (l.current.addEventListener("mousemove", O, o), l.current.addEventListener("mouseout", I, o), l.current.addEventListener("mouseup", I, o), l.current.addEventListener("mousedown", k, o), l.current.addEventListener("touchmove", O, o), l.current.addEventListener("touchend", I, o), l.current.addEventListener("touchstart", k, o)), d.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      H,
      o
    ), l.current && (R.current = new ResizeObserver(D), R.current.observe(l.current), window.addEventListener("resize", D, o));
  }, Z = () => {
    const o = { passive: !0 };
    d.current.iMouse?.isNeeded && l.current && (l.current.removeEventListener("mousemove", O, o), l.current.removeEventListener("mouseout", I, o), l.current.removeEventListener("mouseup", I, o), l.current.removeEventListener("mousedown", k, o), l.current.removeEventListener("touchmove", O, o), l.current.removeEventListener("touchend", I, o), l.current.removeEventListener("touchstart", k, o)), d.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      H,
      o
    ), R.current && (R.current.disconnect(), window.removeEventListener("resize", D, o));
  };
  return re(() => {
    N.current = n;
  }, [n]), re(() => {
    const o = C.current;
    function s() {
      W();
      const i = g.current;
      i && l.current && (i.clearColor(...a), i.clearDepth(1), i.enable(i.DEPTH_TEST), i.depthFunc(i.LEQUAL), i.viewport(0, 0, l.current.width, l.current.height), l.current.height = l.current.clientHeight, l.current.width = l.current.clientWidth, K(), ae(), ne(ce(r || qr), e || je), X(), requestAnimationFrame(Q), oe(), D());
    }
    return requestAnimationFrame(s), () => {
      const i = g.current;
      if (i) {
        if (i.getExtension("WEBGL_lose_context")?.loseContext(), i.useProgram(null), i.deleteProgram(h.current ?? null), o.length > 0)
          for (const u of o)
            i.deleteTexture(u._webglTexture);
        h.current = null;
      }
      Z(), cancelAnimationFrame(U.current ?? 0);
    };
  }, []), /* @__PURE__ */ Y(
    "canvas",
    {
      ref: l,
      style: { height: "100%", width: "100%", ...p }
    }
  );
}
const rn = `
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 23.45);
  return fract(p.x * p.y);
}

mat2 rot(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c);
}

vec2 rotateAround(vec2 point, vec2 center, float angle) {
  vec2 local = point - center;
  local = rot(angle) * local;
  return local + center;
}

vec3 orbPalette(float t) {
  float wA = exp(-18.0 * pow(t - 0.1, 2.0));
  float wB = exp(-16.0 * pow(t - 0.35, 2.0));
  float wC = exp(-16.0 * pow(t - 0.62, 2.0));
  float wD = exp(-18.0 * pow(t - 0.86, 2.0));
  float sum = max(wA + wB + wC + wD, 0.0001);
  return (uColorA * wA + uColorB * wB + uColorC * wC + uColorD * wD) / sum;
}

float luma(vec3 c) {
  return dot(c, vec3(0.299, 0.587, 0.114));
}

vec3 boostSaturation(vec3 color, float amount) {
  float gray = luma(color);
  return mix(vec3(gray), color, amount);
}

float stateWeight(float center) {
  return exp(-5.0 * pow(uStatePhase - center, 2.0));
}

float orbField(vec2 p, float t, float warp, float microSpeed) {
  vec2 q = p;
  q += 0.05 * vec2(
    sin((q.y + 0.1) * 7.0 + t * 0.85),
    cos((q.x - 0.07) * 6.5 - t * 0.72)
  );

  q = rotateAround(q, vec2(-0.15, 0.16), t * (0.55 + 0.3 * warp));
  q = rotateAround(q, vec2(0.18, -0.08), -t * (0.78 + 0.22 * warp));
  q = rotateAround(q, vec2(-0.02, -0.2), t * (0.36 + 0.18 * warp));

  vec2 q2 = rotateAround(q, vec2(0.07, 0.05), -t * (0.44 + 0.16 * warp));
  vec2 q3 = rotateAround(q, vec2(-0.08, 0.02), t * (0.62 + 0.1 * warp));

  float flow1 = sin((q.x * 7.2 + q.y * 4.4) * (0.9 + warp) + t * 1.12);
  float flow2 = sin((q2.x * 3.0 - q2.y * 8.8) * (1.1 + 0.8 * warp) - t * 0.96);
  float flow3 = cos((q3.x * 11.8 + q3.y * 2.1) * (0.65 + 0.5 * warp) + t * 1.42);
  float flow4 = sin(length(q2 * vec2(1.15, 0.9)) * 15.0 - t * (0.9 + 0.55 * warp));

  // Fast micro-turbulence for more alive movement.
  float jitter = sin((q.x * 18.0 + q.y * 14.0) + t * microSpeed);
  float sparkle = cos((q.x * 22.0 - q.y * 16.0) - t * (microSpeed * 1.08));
  float noise = hash(q * 14.0 + t * 0.07) - 0.5;

  return
    0.5 +
    0.2 * flow1 +
    0.16 * flow2 +
    0.13 * flow3 +
    0.12 * flow4 +
    0.04 * jitter +
    0.03 * sparkle +
    0.06 * noise;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;
  vec2 p = uv - 0.5;
  p.x *= iResolution.x / iResolution.y;

  float radius = length(p);
  float orbRadius = 0.46;
  float orbMask = 1.0 - smoothstep(orbRadius, orbRadius + 0.008, radius);

  if (orbMask <= 0.0) {
    fragColor = vec4(0.0);
    return;
  }

  float speaking = stateWeight(3.0);
  float listening = stateWeight(1.0);
  float thinking = stateWeight(2.0);

  float t = iTime * (0.13 + uSpeed * 0.1 + speaking * 0.11 + thinking * 0.05);
  float warp =
    0.22 +
    0.58 * uComplexity +
    speaking * 0.2 +
    thinking * 0.16 -
    listening * 0.1;
  float microSpeed = 6.0 + uSpeed * 2.5 + speaking * 7.0 + thinking * 3.5;

  float field0 = orbField(p, t, warp, microSpeed);
  float field1 = orbField(p + vec2(0.008, 0.0), t, warp, microSpeed);
  float field2 = orbField(p + vec2(-0.008, 0.0), t, warp, microSpeed);
  float field3 = orbField(p + vec2(0.0, 0.008), t, warp, microSpeed);
  float field4 = orbField(p + vec2(0.0, -0.008), t, warp, microSpeed);

  // 5-tap diffusion smooths hard gaps and creates a more liquid spread.
  float field = (field0 * 0.4 + (field1 + field2 + field3 + field4) * 0.15);
  field = smoothstep(-0.02, 0.93, field);
  field = 0.12 + field * 0.82;

  float radialShift = 0.5 + 0.5 * sin(t * 0.16 + p.x * 2.0 - p.y * 1.6);
  float paletteT = clamp(field * 0.8 + radialShift * 0.2, 0.0, 1.0);

  vec3 color = orbPalette(paletteT);

  float lighting = smoothstep(orbRadius, 0.0, radius);
  vec2 lightPos = vec2(-0.14, 0.22);
  float specular = exp(-24.0 * pow(length(p - lightPos), 2.0));
  float rim = smoothstep(orbRadius, orbRadius - 0.06, radius);
  vec3 warmTint = normalize(uColorA + uColorB + vec3(0.001));
  vec3 coolTint = normalize(uColorC + uColorD + vec3(0.001));
  vec3 diffTint = normalize(mix(warmTint, coolTint, 0.48));

  float diffusion = 0.32 + uIntensity * 0.3 + listening * 0.08;
  color *= 0.78 + lighting * (0.44 + diffusion * 0.22);
  color += mix(coolTint, warmTint, 0.35) * rim * 0.2;
  color += diffTint * specular * 0.08;
  color += diffTint * (1.0 - smoothstep(0.18, orbRadius, radius)) * diffusion * 0.18;

  float pulse =
    0.88 +
    uIntensity * 0.48 +
    speaking * 0.08 +
    listening * 0.03 +
    thinking * 0.06;
  color *= pulse;

  // Gentle tonemap to avoid clip without the washed-out "filter" look.
  color = color / (1.0 + color * 0.16);
  color = boostSaturation(color, 1.14);
  color = pow(clamp(color, 0.0, 1.0), vec3(0.95));

  // uOpacity drives the fade-in on mount.
  float alpha = orbMask * uOpacity;
  fragColor = vec4(clamp(color, 0.0, 1.0), alpha);
}`, fe = {
  colorA: "#ffd1f2",
  colorB: "#b58cff",
  colorC: "#28e0ff",
  colorD: "#1861ff"
};
function de(r) {
  const e = r.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, t, n, a] = e;
    return [t, n, a].map((f = "00") => parseInt(f, 16) / 255);
  }
  return [0, 0, 0];
}
function wn({
  state: r = "connecting",
  audioTrack: e,
  colors: t,
  className: n,
  ref: a,
  ...f
}) {
  const { speed: p, intensity: T, complexity: E, scale: b, statePhase: v, opacity: w } = Xr(r, e), x = de(t?.colorA ?? fe.colorA), l = de(t?.colorB ?? fe.colorB), g = de(t?.colorC ?? fe.colorC), S = de(t?.colorD ?? fe.colorD);
  return /* @__PURE__ */ Y(
    "div",
    {
      ref: a,
      className: ht("overflow-hidden rounded-full", n),
      style: { clipPath: "circle(50% at 50% 50%)" },
      ...f,
      children: /* @__PURE__ */ Y(
        "div",
        {
          style: {
            width: "100%",
            height: "100%",
            transform: `scale(${b})`,
            transformOrigin: "center"
          },
          children: /* @__PURE__ */ Y(
            tn,
            {
              fs: rn,
              devicePixelRatio: globalThis.devicePixelRatio ?? 1,
              clearColor: [0, 0, 0, 0],
              uniforms: {
                uSpeed: { type: "1f", value: p },
                uIntensity: { type: "1f", value: T },
                uComplexity: { type: "1f", value: E },
                uStatePhase: { type: "1f", value: v },
                uOpacity: { type: "1f", value: w },
                uColorA: { type: "3fv", value: x },
                uColorB: { type: "3fv", value: l },
                uColorC: { type: "3fv", value: g },
                uColorD: { type: "3fv", value: S }
              },
              onError: (h) => {
                console.error("Shader error:", h);
              },
              onWarning: (h) => {
                console.warn("Shader warning:", h);
              },
              style: { width: "100%", height: "100%" }
            }
          )
        }
      )
    }
  );
}
const nn = Yt;
nn.displayName = "F0ChatReportCard";
const Tn = ({
  text: r,
  confirmationText: e,
  onConfirm: t,
  cancelText: n,
  onCancel: a
}) => /* @__PURE__ */ Ee("div", { className: "flex flex-col gap-2", children: [
  r && /* @__PURE__ */ Y("p", { children: r }),
  /* @__PURE__ */ Ee("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ Y(
      ye,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        icon: zt,
        onClick: t,
        label: e
      }
    ),
    /* @__PURE__ */ Y(
      ye,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: a,
        label: n
      }
    )
  ] })
] });
export {
  hn as A,
  pn as F,
  dn as a,
  fn as b,
  gn as c,
  wn as d,
  nn as e,
  Tn as f,
  ln as o,
  mn as u
};
