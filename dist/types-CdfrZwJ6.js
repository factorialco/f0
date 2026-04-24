import { defaultTranslations as Mt } from "./i18n-provider-defaults.js";
import { jsx as y, jsxs as k, Fragment as mt } from "react/jsx-runtime";
import { useInsertionEffect as Ot, forwardRef as ye, createContext as Dt, useContext as Bt, useRef as I, useEffect as se, useState as he, useCallback as pt, useMemo as Vt, useId as Gt, createElement as kt } from "react";
import { r as $t, o as zt, p as Xt, q as Wt, s as vt, t as Yt, v as qt, w as Ht, x as jt, y as Kt, z as gt, A as Zt, V as Qt, B as Jt, D as er, E as tr, S as rr, H as nr, G as we, J as or, K as ir, L as sr, M as ar, N as wt, O as j, P as pe, Q as yt, R as me, u as Tt, T as Le, U as cr, W as Et, X as lr, Y as ur, Z as fr, _ as dr, $ as hr, a0 as mr, a1 as pr, a2 as vr, a3 as gr, a4 as wr, a5 as yr, a6 as Tr, a7 as Er, a8 as fe } from "./F0AiChat-BZc0RhxN.js";
import { useTrackVolume as bt } from "@livekit/components-react";
import './types.css';function xt(r, e, t) {
  Ot(() => r.on(e, t), [r, e, t]);
}
function Re(r) {
  return typeof r == "object" && !Array.isArray(r);
}
function At(r, e, t, n) {
  return typeof r == "string" && Re(e) ? $t(r, t, n) : r instanceof NodeList ? Array.from(r) : Array.isArray(r) ? r : [r];
}
function br(r, e, t) {
  return r * (e + 1);
}
function Ce(r, e, t, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, r + parseFloat(e)) : e === "<" ? t : n.get(e) ?? r;
}
const xr = (r, e, t) => {
  const n = e - r;
  return ((t - r) % n + n) % n + r;
};
function Rt(r, e) {
  return zt(r) ? r[xr(0, r.length, e)] : r;
}
function Ar(r, e, t) {
  for (let n = 0; n < r.length; n++) {
    const i = r[n];
    i.at > e && i.at < t && (Wt(r, i), n--);
  }
}
function Rr(r, e, t, n, i, l) {
  Ar(r, i, l);
  for (let h = 0; h < e.length; h++)
    r.push({
      value: e[h],
      at: Xt(i, l, n[h]),
      easing: Rt(t, h)
    });
}
function Lr(r, e) {
  for (let t = 0; t < r.length; t++)
    r[t] = r[t] / (e + 1);
}
function Cr(r, e) {
  return r.at === e.at ? r.value === null ? 1 : e.value === null ? -1 : 0 : r.at - e.at;
}
const Nr = "easeInOut", Sr = 20;
function _r(r, { defaultTransition: e = {}, ...t } = {}, n, i) {
  const l = e.duration || 0.3, h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), b = {}, x = /* @__PURE__ */ new Map();
  let g = 0, w = 0, R = 0;
  for (let u = 0; u < r.length; u++) {
    const T = r[u];
    if (typeof T == "string") {
      x.set(T, w);
      continue;
    } else if (!Array.isArray(T)) {
      x.set(T.name, Ce(w, T.at, g, x));
      continue;
    }
    let [U, m, C = {}] = T;
    C.at !== void 0 && (w = Ce(w, C.at, g, x));
    let F = 0;
    const P = (E, A, N, S = 0, V = 0) => {
      const L = Ir(E), { delay: d = 0, times: O = Yt(L), type: $ = "keyframes", repeat: Y, repeatType: W, repeatDelay: K = 0, ...X } = A;
      let { ease: D = e.ease || "easeOut", duration: _ } = A;
      const B = typeof d == "function" ? d(S, V) : d, Z = L.length, oe = jt($) ? $ : i?.[$];
      if (Z <= 2 && oe) {
        let ee = 100;
        if (Z === 2 && Pr(L)) {
          const te = L[1] - L[0];
          ee = Math.abs(te);
        }
        const J = { ...X };
        _ !== void 0 && (J.duration = Kt(_));
        const ie = qt(J, ee, oe);
        D = ie.ease, _ = ie.duration;
      }
      _ ?? (_ = l);
      const Q = w + B;
      O.length === 1 && O[0] === 0 && (O[1] = 1);
      const ce = O.length - L.length;
      if (ce > 0 && Ht(O, ce), L.length === 1 && L.unshift(null), Y) {
        gt(Y < Sr, "Repeat count too high, must be less than 20"), _ = br(_, Y);
        const ee = [...L], J = [...O];
        D = Array.isArray(D) ? [...D] : [D];
        const ie = [...D];
        for (let te = 0; te < Y; te++) {
          L.push(...ee);
          for (let o = 0; o < ee.length; o++)
            O.push(J[o] + (te + 1)), D.push(o === 0 ? "linear" : Rt(ie, o - 1));
        }
        Lr(O, Y);
      }
      const le = Q + _;
      Rr(N, L, D, O, Q, le), F = Math.max(B + _, F), R = Math.max(le, R);
    };
    if (vt(U)) {
      const E = Ne(U, v);
      P(m, C, Se("default", E));
    } else {
      const E = At(U, m, n, b), A = E.length;
      for (let N = 0; N < A; N++) {
        m = m, C = C;
        const S = E[N], V = Ne(S, v);
        for (const L in m)
          P(m[L], Fr(C, L), Se(L, V), N, A);
      }
    }
    g = w, w += F;
  }
  return v.forEach((u, T) => {
    for (const U in u) {
      const m = u[U];
      m.sort(Cr);
      const C = [], F = [], P = [];
      for (let A = 0; A < m.length; A++) {
        const { at: N, value: S, easing: V } = m[A];
        C.push(S), F.push(Zt(0, R, N)), P.push(V || "easeOut");
      }
      F[0] !== 0 && (F.unshift(0), C.unshift(C[0]), P.unshift(Nr)), F[F.length - 1] !== 1 && (F.push(1), C.push(null)), h.has(T) || h.set(T, {
        keyframes: {},
        transition: {}
      });
      const E = h.get(T);
      E.keyframes[U] = C, E.transition[U] = {
        ...e,
        duration: R,
        ease: P,
        times: F,
        ...t
      };
    }
  }), h;
}
function Ne(r, e) {
  return !e.has(r) && e.set(r, {}), e.get(r);
}
function Se(r, e) {
  return e[r] || (e[r] = []), e[r];
}
function Ir(r) {
  return Array.isArray(r) ? r : [r];
}
function Fr(r, e) {
  return r && r[e] ? {
    ...r,
    ...r[e]
  } : { ...r };
}
const Ur = (r) => typeof r == "number", Pr = (r) => r.every(Ur);
function Mr(r, e) {
  return r in e;
}
class Or extends Qt {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, t) {
    if (Mr(t, e)) {
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
    return Jt();
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
function Dr(r) {
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
  }, t = er(r) && !tr(r) ? new rr(e) : new nr(e);
  t.mount(r), we.set(r, t);
}
function Br(r) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, t = new Or(e);
  t.mount(r), we.set(r, t);
}
function Vr(r, e) {
  return vt(r) || typeof r == "number" || typeof r == "string" && !Re(e);
}
function Lt(r, e, t, n) {
  const i = [];
  if (Vr(r, e))
    i.push(or(r, Re(e) && e.default || e, t && (t.default || t)));
  else {
    const l = At(r, e, n), h = l.length;
    gt(!!h, "No valid elements provided.");
    for (let v = 0; v < h; v++) {
      const b = l[v], x = b instanceof Element ? Dr : Br;
      we.has(b) || x(b);
      const g = we.get(b), w = { ...t };
      "delay" in w && typeof w.delay == "function" && (w.delay = w.delay(v, h)), i.push(...ir(g, { ...e, transition: w }, {}));
    }
  }
  return i;
}
function Gr(r, e, t) {
  const n = [];
  return _r(r, e, t, { spring: sr }).forEach(({ keyframes: l, transition: h }, v) => {
    n.push(...Lt(v, l, h));
  }), n;
}
class kr {
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
      t.forEach((n, i) => {
        n && n(), this.animations[i].stop();
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
class $r extends kr {
  then(e, t) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function zr(r) {
  return Array.isArray(r) && r.some(Array.isArray);
}
function Xr(r) {
  function e(t, n, i) {
    let l = [];
    return zr(t) ? l = Gr(t, n, r) : l = Lt(t, n, i, r), new $r(l);
  }
  return e;
}
const Ct = Xr(), Wr = (r, e) => /* @__PURE__ */ y(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...r,
    children: /* @__PURE__ */ y(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Yr = ye(Wr), qr = [
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
], Nt = ye((r, e) => {
  const t = qr.reduce((n, i) => {
    const { [i]: l, ...h } = n;
    return h;
  }, r);
  return /* @__PURE__ */ y(
    ar,
    {
      ...t,
      variant: "ai",
      ref: e,
      iconRotate: r.icon == Yr
    }
  );
});
Nt.displayName = "AIButton";
const eo = ["xs", "sm", "md", "lg"], to = [
  "inProgress",
  "executing",
  "completed"
], ro = {
  ai: Mt.ai
}, St = Dt(null);
function no({
  children: r,
  translations: e
}) {
  return /* @__PURE__ */ y(St.Provider, { value: e, children: r });
}
function oo() {
  const r = Bt(St);
  if (r === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return r;
}
function _e(r, e, t, n) {
  const i = Math.max(1, Math.min(r, e)), l = Math.min(t, 20), v = Math.min(l + n, i), b = Math.min(v, Math.floor(r / 2)), x = Math.min(v, Math.floor(e / 2)), g = (Q) => Q / r * 2 - 1, w = (Q) => Q / e * 2 - 1, R = 0, u = r, T = 0, U = e, m = b, C = r - b, F = x, P = e - x, E = g(R), A = g(u), N = w(T), S = w(U), V = g(m), L = g(C), d = w(F), O = w(P), $ = 0, Y = 0, W = 1, K = 1, X = b / r, D = 1 - b / r, _ = x / e, B = 1 - x / e, Z = new Float32Array([
    // Top strip
    E,
    N,
    A,
    N,
    E,
    d,
    E,
    d,
    A,
    N,
    A,
    d,
    // Bottom strip
    E,
    O,
    A,
    O,
    E,
    S,
    E,
    S,
    A,
    O,
    A,
    S,
    // Left strip
    E,
    d,
    V,
    d,
    E,
    O,
    E,
    O,
    V,
    d,
    V,
    O,
    // Right strip
    L,
    d,
    A,
    d,
    L,
    O,
    L,
    O,
    A,
    d,
    A,
    O
  ]), oe = new Float32Array([
    // Top strip
    $,
    Y,
    W,
    Y,
    $,
    _,
    $,
    _,
    W,
    Y,
    W,
    _,
    // Bottom strip
    $,
    B,
    W,
    B,
    $,
    K,
    $,
    K,
    W,
    B,
    W,
    K,
    // Left strip
    $,
    _,
    X,
    _,
    $,
    B,
    $,
    B,
    X,
    _,
    X,
    B,
    // Right strip
    D,
    _,
    W,
    _,
    D,
    B,
    D,
    B,
    W,
    _,
    W,
    B
  ]);
  return { positions: Z, uvs: oe };
}
function Ie(r, e, t) {
  const n = r.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  if (r.shaderSource(n, t), r.compileShader(n), !r.getShaderParameter(n, r.COMPILE_STATUS)) {
    const i = r.getShaderInfoLog(n) || "Unknown shader error";
    throw r.deleteShader(n), new Error(i);
  }
  return n;
}
function Hr(r, e, t) {
  const n = Ie(r, r.VERTEX_SHADER, e), i = Ie(r, r.FRAGMENT_SHADER, t), l = r.createProgram();
  if (!l) throw new Error("Failed to create program");
  if (r.attachShader(l, n), r.attachShader(l, i), r.linkProgram(l), !r.getProgramParameter(l, r.LINK_STATUS)) {
    const h = r.getProgramInfoLog(l) || "Unknown link error";
    throw r.deleteProgram(l), r.deleteShader(n), r.deleteShader(i), new Error(h);
  }
  return r.deleteShader(n), r.deleteShader(i), l;
}
const jr = `#version 300 es
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
`, Kr = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, Zr = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function Qr(r) {
  const e = r.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!e)
    throw new Error(`Invalid color format: ${r}`);
  const [, t, n, i] = e;
  return [parseInt(t) / 255, parseInt(n) / 255, parseInt(i) / 255];
}
class io {
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
      const i = (t - this.startTime) * 1e-3;
      this.render(i);
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
    const { gl: e, vao: t, positionBuffer: n, uvBuffer: i, program: l } = this.glr;
    t && e.deleteVertexArray(t), n && e.deleteBuffer(n), i && e.deleteBuffer(i), e.deleteProgram(l), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(e, t, n) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = e, this.options.height = t, n && (this.options.ratio = n), !this.running) return;
    const { gl: i, program: l, vao: h, positionBuffer: v, uvBuffer: b, uResolution: x } = this.glr, g = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, w = Math.max(1, Math.floor(e * g)), R = Math.max(1, Math.floor(t * g));
    this.canvas.style.width = `${e}px`, this.canvas.style.height = `${t}px`, (this.canvas.width !== w || this.canvas.height !== R) && (this.canvas.width = w, this.canvas.height = R), i.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(i, "resize: after viewport setup");
    const { positions: u, uvs: T } = _e(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * g,
      this.options.glowWidth * g
    );
    i.bindVertexArray(h), i.bindBuffer(i.ARRAY_BUFFER, v), i.bufferData(i.ARRAY_BUFFER, u, i.STATIC_DRAW);
    const U = i.getAttribLocation(l, "aPosition");
    i.enableVertexAttribArray(U), i.vertexAttribPointer(U, 2, i.FLOAT, !1, 0, 0), this.checkGLError(i, "resize: after position buffer update"), i.bindBuffer(i.ARRAY_BUFFER, b), i.bufferData(i.ARRAY_BUFFER, T, i.STATIC_DRAW);
    const m = i.getAttribLocation(l, "aUV");
    i.enableVertexAttribArray(m), i.vertexAttribPointer(m, 2, i.FLOAT, !1, 0, 0), this.checkGLError(i, "resize: after UV buffer update"), i.useProgram(l), i.uniform2f(x, this.canvas.width, this.canvas.height), i.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * g), i.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * g), i.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * g), this.checkGLError(i, "resize: after uniform updates");
    const C = performance.now();
    this.lastTime = C;
    const F = (C - this.startTime) * 1e-3;
    this.render(F);
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
        const i = this.getGLErrorName(e, n);
        console.error(`${i} (0x${n.toString(16)})`), n = e.getError();
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
    const t = Hr(e, Kr, jr);
    this.checkGLError(e, "setupGL: after createProgram");
    const n = e.createVertexArray();
    e.bindVertexArray(n), this.checkGLError(e, "setupGL: after VAO creation");
    const i = this.canvas.width || 2, l = this.canvas.height || 2, { positions: h, uvs: v } = _e(
      i,
      l,
      this.options.borderWidth,
      this.options.glowWidth
    ), b = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, b), e.bufferData(e.ARRAY_BUFFER, h, e.STATIC_DRAW);
    const x = e.getAttribLocation(t, "aPosition");
    e.enableVertexAttribArray(x), e.vertexAttribPointer(x, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after position buffer setup");
    const g = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, g), e.bufferData(e.ARRAY_BUFFER, v, e.STATIC_DRAW);
    const w = e.getAttribLocation(t, "aUV");
    e.enableVertexAttribArray(w), e.vertexAttribPointer(w, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "setupGL: after UV buffer setup");
    const R = e.getUniformLocation(t, "uResolution"), u = e.getUniformLocation(t, "uTime"), T = e.getUniformLocation(t, "uBorderWidth"), U = e.getUniformLocation(t, "uGlowWidth"), m = e.getUniformLocation(t, "uBorderRadius"), C = e.getUniformLocation(t, "uColors"), F = e.getUniformLocation(t, "uGlowExponent"), P = e.getUniformLocation(t, "uGlowFactor");
    e.useProgram(t), e.uniform1f(T, this.options.borderWidth), e.uniform1f(U, this.options.glowWidth), e.uniform1f(m, this.options.borderRadius), this.options.mode === "dark" ? (e.uniform1f(F, 2), e.uniform1f(P, 1.8)) : (e.uniform1f(F, 1), e.uniform1f(P, 1));
    const E = (this.options.colors || Zr).map(Qr);
    for (let A = 0; A < E.length; A++)
      e.uniform3f(
        e.getUniformLocation(t, `uColors[${A}]`),
        ...E[A]
      );
    this.checkGLError(e, "setupGL: after uniform setup"), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), this.glr = {
      gl: e,
      program: t,
      vao: n,
      positionBuffer: b,
      uvBuffer: g,
      uResolution: R,
      uTime: u,
      uBorderWidth: T,
      uGlowWidth: U,
      uBorderRadius: m,
      uColors: C
    };
  }
  render(e) {
    if (!this.glr) return;
    const { gl: t, program: n, vao: i, uTime: l } = this.glr;
    t.useProgram(n), t.bindVertexArray(i), t.uniform1f(l, e), t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.disable(t.BLEND), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLES, 0, 24), this.checkGLError(t, "render: after draw call"), t.bindVertexArray(null);
  }
}
const Fe = ["lowp", "mediump", "highp"], Jr = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, en = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, Ue = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Pe = "iTime", Me = "iTimeDelta", Oe = "iDate", De = "iFrame", Be = "iMouse", Ve = "iResolution", tn = "iChannel", Ge = "iChannelResolution", ke = "iDeviceOrientation";
function rn(r, e) {
  return r.includes("Matrix") && Array.isArray(e);
}
function nn(r, e) {
  return r.includes("v") && Array.isArray(e) && e.length > Number.parseInt(r.charAt(0));
}
function on(r, e) {
  return !r.includes("v") && Array.isArray(e) && e.length > Number.parseInt(r.charAt(0));
}
const sn = (r, e, t, n) => {
  if (on(t, n))
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
}, an = (r) => {
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
        re(
          `The uniform type "${r}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, be = 9729, $e = 9728, cn = 9987, ze = 33071, Xe = 10497;
let ln = class {
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
    const { gl: i } = this, l = 0, h = i.RGBA, v = i.RGBA, b = i.UNSIGNED_BYTE;
    i.bindTexture(i.TEXTURE_2D, e), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, n), i.texImage2D(
      i.TEXTURE_2D,
      l,
      h,
      v,
      b,
      t
    );
  };
  setupVideo = (e) => {
    const t = document.createElement("video");
    let n = !1, i = !1;
    t.autoplay = !0, t.muted = !0, t.loop = !0, t.crossOrigin = "anonymous";
    const l = () => {
      n && i && (this.isLoaded = !0);
    };
    return t.addEventListener(
      "playing",
      () => {
        n = !0, this.width = t.videoWidth || 0, this.height = t.videoHeight || 0, l();
      },
      !0
    ), t.addEventListener(
      "timeupdate",
      () => {
        i = !0, l();
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
    re(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: t } = this, {
      url: n,
      wrapS: i,
      wrapT: l,
      minFilter: h,
      magFilter: v,
      flipY: b = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          re(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const x = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), g = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (x === null && g === null)
      return Promise.reject(
        new Error(
          re(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: i, wrapT: l, minFilter: h, magFilter: v, flipY: b });
    const w = 0, R = t.RGBA, u = 1, T = 1, U = 0, m = t.RGBA, C = t.UNSIGNED_BYTE, F = new Uint8Array([255, 255, 255, 0]), P = t.createTexture();
    if (t.bindTexture(t.TEXTURE_2D, P), t.texImage2D(
      t.TEXTURE_2D,
      w,
      R,
      u,
      T,
      U,
      m,
      C,
      F
    ), g) {
      const S = this.setupVideo(n);
      return t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), this._webglTexture = P, this.source = S, this.isVideo = !0, S.play().then(() => this);
    }
    async function E() {
      return new Promise((S, V) => {
        const L = new Image();
        L.crossOrigin = "anonymous", L.onload = () => {
          S(L);
        }, L.onerror = () => {
          V(new Error(re(`failed loading url: ${n}`)));
        }, L.src = n ?? "";
      });
    }
    let A = await E(), N = (A.width & A.width - 1) === 0 && (A.height & A.height - 1) === 0;
    return (e.wrapS !== ze || e.wrapT !== ze || e.minFilter !== $e && e.minFilter !== be) && !N && (A = this.makePowerOf2(A), N = !0), t.bindTexture(t.TEXTURE_2D, P), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, b), t.texImage2D(
      t.TEXTURE_2D,
      w,
      R,
      m,
      C,
      A
    ), N && e.minFilter !== $e && e.minFilter !== be && t.generateMipmap(t.TEXTURE_2D), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_S,
      this.wrapS || Xe
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_T,
      this.wrapT || Xe
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MIN_FILTER,
      this.minFilter || cn
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MAG_FILTER,
      this.magFilter || be
    ), this._webglTexture = P, this.source = A, this.isVideo = !1, this.isLoaded = !0, this.width = A.width || 0, this.height = A.height || 0, this;
  };
};
const re = (r) => `react-shaders: ${r}`, We = (r) => {
  if ("changedTouches" in r) {
    const e = r.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [r.clientX, r.clientY];
}, Ye = (r, e, t) => r * (1 - t) + e * t, un = (r, e, t) => t > 0 ? r.substring(0, t) + e + r.substring(t, r.length) : e + r;
function fn({
  fs: r,
  vs: e = Ue,
  textures: t = [],
  uniforms: n,
  clearColor: i = [0, 0, 0, 1],
  precision: l = "highp",
  style: h,
  contextAttributes: v = {},
  lerp: b = 1,
  devicePixelRatio: x = 1,
  onDoneLoadingTextures: g,
  onError: w = console.error,
  onWarning: R = console.warn
}) {
  const u = I(null), T = I(null), U = I(null), m = I(null), C = I(void 0), F = I(void 0), P = I(!1), E = I(void 0), A = I(0), N = I([0, 0]), S = I([]), V = I(0), L = I(void 0), d = I({
    [Pe]: { type: "float", isNeeded: !1, value: 0 },
    [Me]: { type: "float", isNeeded: !1, value: 0 },
    [Oe]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Be]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Ve]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [De]: { type: "int", isNeeded: !1, value: 0 },
    [ke]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), O = I(n), $ = (o, a) => {
    const s = "width" in o ? o.width ?? 0 : 0, f = "height" in o ? o.height ?? 0 : 0, c = d.current.iChannelResolution;
    if (!c) return;
    const p = Array.isArray(c.value) ? c.value : c.value = [];
    p[a * 3] = s * x, p[a * 3 + 1] = f * x, p[a * 3 + 2] = 0;
  }, Y = () => {
    u.current && (T.current = u.current.getContext("webgl", v) || u.current.getContext(
      "experimental-webgl",
      v
    ), T.current?.getExtension("OES_standard_derivatives"), T.current?.getExtension("EXT_shader_texture_lod"));
  }, W = () => {
    const o = T.current;
    U.current = o?.createBuffer() ?? null, o?.bindBuffer(o.ARRAY_BUFFER, U.current);
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
    o?.bufferData(o.ARRAY_BUFFER, new Float32Array(a), o.STATIC_DRAW);
  }, K = ({
    alpha: o,
    beta: a,
    gamma: s
  }) => {
    d.current.iDeviceOrientation.value = [
      o ?? 0,
      a ?? 0,
      s ?? 0,
      window.orientation ?? 0
    ];
  }, X = (o) => {
    const [a = 0, s = 0] = We(o), f = a - (E.current?.left ?? 0) - window.pageXOffset, c = (E.current?.height ?? 0) - s - (E.current?.top ?? 0) - window.pageYOffset;
    P.current = !0;
    const p = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
    p && (p[2] = f, p[3] = c), N.current[0] = f, N.current[1] = c;
  }, D = (o) => {
    E.current = u.current?.getBoundingClientRect();
    const [a = 0, s = 0] = We(o), f = a - (E.current?.left ?? 0), c = (E.current?.height ?? 0) - s - (E.current?.top ?? 0);
    if (b !== 1)
      N.current[0] = f, N.current[1] = c;
    else {
      const p = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
      p && (p[0] = f, p[1] = c);
    }
  }, _ = () => {
    const o = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
    o && (o[2] = 0, o[3] = 0);
  }, B = () => {
    const o = T.current;
    if (!o) return;
    E.current = u.current?.getBoundingClientRect();
    const a = x, s = Math.floor(
      (E.current?.width ?? 1) * a
    ), f = Math.floor(
      (E.current?.height ?? 1) * a
    );
    if (o.canvas.width = s, o.canvas.height = f, d.current.iResolution?.isNeeded && m.current) {
      const c = o.getUniformLocation(
        m.current,
        Ve
      );
      o.uniform2fv(c, [o.canvas.width, o.canvas.height]);
    }
  }, Z = (o, a) => {
    const s = T.current;
    if (!s) return null;
    const f = s.createShader(o);
    if (!f) return null;
    if (s.shaderSource(f, a), s.compileShader(f), !s.getShaderParameter(f, s.COMPILE_STATUS)) {
      R?.(re(`Error compiling the shader:
${a}`));
      const c = s.getShaderInfoLog(f);
      s.deleteShader(f), w?.(re(`Shader compiler log: ${c}`));
    }
    return f;
  }, oe = (o, a) => {
    const s = T.current;
    if (!s) return;
    const f = Z(s.FRAGMENT_SHADER, o), c = Z(s.VERTEX_SHADER, a);
    if (m.current = s.createProgram(), !(!m.current || !c || !f)) {
      if (s.attachShader(m.current, c), s.attachShader(m.current, f), s.linkProgram(m.current), !s.getProgramParameter(m.current, s.LINK_STATUS)) {
        w?.(
          re(
            `Unable to initialize the shader program: ${s.getProgramInfoLog(
              m.current
            )}`
          )
        );
        return;
      }
      s.useProgram(m.current), C.current = s.getAttribLocation(
        m.current,
        "aVertexPosition"
      ), s.enableVertexAttribArray(C.current);
    }
  }, Q = () => {
    if (n)
      for (const o of Object.keys(n)) {
        const a = n[o];
        if (!a) continue;
        const { value: s, type: f } = a, c = an(f);
        if (!c) continue;
        const p = {};
        if (rn(f, s)) {
          const M = f.length, G = Number.parseInt(f.charAt(M - 3)), q = Math.floor(s.length / (G * G));
          s.length > G * G && (p.arraySize = `[${q}]`);
        } else nn(f, s) && (p.arraySize = `[${Math.floor(s.length / Number.parseInt(f.charAt(0)))}]`);
        d.current[o] = {
          type: c,
          isNeeded: !1,
          value: s,
          ...p
        };
      }
  }, ce = () => {
    const o = T.current;
    if (o)
      if (t && t.length > 0) {
        d.current[`${Ge}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${t.length}]`,
          value: []
        };
        const a = t.map(
          (s, f) => (d.current[`${tn}${f}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, $(s, f), S.current[f] = new ln(o), S.current[f]?.load(s).then((c) => {
            $(c, f);
          }))
        );
        Promise.all(a).then(() => {
          g && g();
        }).catch((s) => {
          w?.(s), g && g();
        });
      } else g && g();
  }, le = (o) => {
    const a = Fe.includes(l ?? "highp"), s = `precision ${a ? l : Fe[1]} float;
`;
    a || R?.(
      re(
        `wrong precision type ${l}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let f = s.concat(`#define DPR ${x.toFixed(1)}
`).concat(o.replace(/texture\(/g, "texture2D("));
    for (const p of Object.keys(d.current))
      if (o.includes(p)) {
        const M = d.current[p];
        if (!M) continue;
        f = un(
          f,
          `uniform ${M.type} ${p}${M.arraySize || ""}; 
`,
          f.lastIndexOf(s) + s.length
        ), M.isNeeded = !0;
      }
    return o.includes("mainImage") && (f = f.concat(Jr)), f;
  }, ee = (o) => {
    const a = T.current;
    if (!a || !m.current) return;
    const s = V.current ? (o - V.current) / 1e3 : 0;
    V.current = o;
    const f = O.current;
    if (f)
      for (const c of Object.keys(f)) {
        const p = f[c];
        if (p && d.current[c]?.isNeeded) {
          if (!m.current) return;
          const M = a.getUniformLocation(
            m.current,
            c
          );
          if (!M) return;
          sn(
            a,
            M,
            p.type,
            p.value
          );
        }
      }
    if (d.current.iMouse?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        Be
      );
      a.uniform4fv(c, d.current.iMouse.value);
    }
    if (d.current.iChannelResolution?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        Ge
      );
      a.uniform3fv(
        c,
        d.current.iChannelResolution.value
      );
    }
    if (d.current.iDeviceOrientation?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        ke
      );
      a.uniform4fv(
        c,
        d.current.iDeviceOrientation.value
      );
    }
    if (d.current.iTime?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        Pe
      );
      a.uniform1f(c, A.current += s);
    }
    if (d.current.iTimeDelta?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        Me
      );
      a.uniform1f(c, s);
    }
    if (d.current.iDate?.isNeeded) {
      const c = /* @__PURE__ */ new Date(), p = c.getMonth() + 1, M = c.getDate(), G = c.getFullYear(), q = c.getHours() * 60 * 60 + c.getMinutes() * 60 + c.getSeconds() + c.getMilliseconds() * 1e-3, ae = a.getUniformLocation(
        m.current,
        Oe
      );
      a.uniform4fv(ae, [G, p, M, q]);
    }
    if (d.current.iFrame?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        De
      ), p = d.current.iFrame.value;
      a.uniform1i(c, p), d.current.iFrame.value = p + 1;
    }
    if (S.current.length > 0)
      for (let c = 0; c < S.current.length; c++) {
        const p = S.current[c];
        if (!p) return;
        const { isVideo: M, _webglTexture: G, source: q, flipY: ae, isLoaded: Te } = p;
        if (!Te || !G || !q) return;
        if (d.current[`iChannel${c}`]?.isNeeded) {
          if (!m.current) return;
          const Ee = a.getUniformLocation(
            m.current,
            `iChannel${c}`
          );
          a.activeTexture(a.TEXTURE0 + c), a.bindTexture(a.TEXTURE_2D, G), a.uniform1i(Ee, c), M && p.updateTexture(
            G,
            q,
            ae
          );
        }
      }
  }, J = (o) => {
    const a = T.current;
    if (!a) return;
    a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), a.bindBuffer(a.ARRAY_BUFFER, U.current), a.vertexAttribPointer(
      C.current ?? 0,
      3,
      a.FLOAT,
      !1,
      0,
      0
    ), ee(o), a.drawArrays(a.TRIANGLE_STRIP, 0, 4);
    const s = d.current.iMouse?.value;
    if (d.current.iMouse?.isNeeded && b !== 1 && Array.isArray(s)) {
      const f = s[0] ?? 0, c = s[1] ?? 0;
      s[0] = Ye(f, N.current[0] ?? 0, b), s[1] = Ye(c, N.current[1] ?? 0, b);
    }
    F.current = requestAnimationFrame(J);
  }, ie = () => {
    const o = { passive: !0 };
    d.current.iMouse?.isNeeded && u.current && (u.current.addEventListener("mousemove", D, o), u.current.addEventListener("mouseout", _, o), u.current.addEventListener("mouseup", _, o), u.current.addEventListener("mousedown", X, o), u.current.addEventListener("touchmove", D, o), u.current.addEventListener("touchend", _, o), u.current.addEventListener("touchstart", X, o)), d.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      K,
      o
    ), u.current && (L.current = new ResizeObserver(B), L.current.observe(u.current), window.addEventListener("resize", B, o));
  }, te = () => {
    const o = { passive: !0 };
    d.current.iMouse?.isNeeded && u.current && (u.current.removeEventListener("mousemove", D, o), u.current.removeEventListener("mouseout", _, o), u.current.removeEventListener("mouseup", _, o), u.current.removeEventListener("mousedown", X, o), u.current.removeEventListener("touchmove", D, o), u.current.removeEventListener("touchend", _, o), u.current.removeEventListener("touchstart", X, o)), d.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      K,
      o
    ), L.current && (L.current.disconnect(), window.removeEventListener("resize", B, o));
  };
  return se(() => {
    O.current = n;
  }, [n]), se(() => {
    const o = S.current;
    function a() {
      Y();
      const s = T.current;
      s && u.current && (s.clearColor(...i), s.clearDepth(1), s.enable(s.DEPTH_TEST), s.depthFunc(s.LEQUAL), s.viewport(0, 0, u.current.width, u.current.height), u.current.height = u.current.clientHeight, u.current.width = u.current.clientWidth, Q(), ce(), oe(le(r || en), e || Ue), W(), requestAnimationFrame(J), ie(), B());
    }
    return requestAnimationFrame(a), () => {
      const s = T.current;
      if (s) {
        if (s.getExtension("WEBGL_lose_context")?.loseContext(), s.useProgram(null), s.deleteProgram(m.current ?? null), o.length > 0)
          for (const f of o)
            s.deleteTexture(f._webglTexture);
        m.current = null;
      }
      te(), cancelAnimationFrame(F.current ?? 0);
    };
  }, []), /* @__PURE__ */ y(
    "canvas",
    {
      ref: u,
      style: { height: "100%", width: "100%", ...h }
    }
  );
}
const dn = `
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
}`, hn = 10, mn = 2, pn = 0.5, vn = 0.2, gn = 1.5, H = {
  duration: 0.5,
  ease: "easeOut"
}, qe = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function ve(r) {
  const [e, t] = he(r), n = wt(r), i = I(null);
  xt(n, "change", (h) => t(h));
  const l = pt(
    (h, v) => {
      i.current = Ct(n, h, v);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: i, animate: l };
}
function wn(r, e) {
  const [t, n] = he(hn), {
    value: i,
    animate: l,
    motionValue: h
  } = ve(vn), { value: v, animate: b } = ve(mn), { value: x, animate: g } = ve(pn), { value: w, animate: R } = ve(gn), u = bt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return se(() => {
    switch (r) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), l(0.2, H), b(1.2, H), g(0.4, H), R(1, H);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), l(0.3, { type: "spring", duration: 1, bounce: 0.35 }), b(1, H), g(0.7, H), R([1.5, 2], qe);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), l(0.3, H), b(0.5, H), g(1, H), R([0.5, 2.5], qe);
        return;
      case "speaking":
        n(70), l(0.3, H), b(0.75, H), g(1.25, H), R(1.5, H);
        return;
    }
  }, [
    r,
    l,
    b,
    g,
    R
  ]), se(() => {
    r === "speaking" && u > 0 && !h.isAnimating() && l(0.2 + 0.2 * u, { duration: 0 });
  }, [
    r,
    u,
    h,
    l,
    b,
    g,
    R
  ]), {
    speed: t,
    scale: i,
    amplitude: v,
    frequency: x,
    brightness: w
  };
}
const yn = pe({
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
function Tn(r) {
  const e = r.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, t, n, i] = e;
    return [t, n, i].map((h = "00") => parseInt(h, 16) / 255);
  }
}
function _t({
  shape: r = 1,
  speed: e = 1,
  amplitude: t = 0.5,
  frequency: n = 0.5,
  scale: i = 0.2,
  blur: l = 1,
  color: h = "#FF355E",
  colorShift: v = 1,
  brightness: b = 1,
  themeMode: x = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: g,
  className: w,
  ...R
}) {
  const u = Vt(() => Tn(h), [h]);
  return /* @__PURE__ */ y("div", { ref: g, className: w, ...R, children: /* @__PURE__ */ y(
    fn,
    {
      fs: dn,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: e },
        // Edge blur/softness
        uBlur: { type: "1f", value: l },
        // Shape scale
        uScale: { type: "1f", value: i },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: r },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: n },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: t },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: b },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: v },
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
_t.displayName = "AuraShader";
function ao({
  size: r = "lg",
  state: e,
  color: t,
  colorShift: n = 0.05,
  audioTrack: i,
  themeMode: l,
  className: h,
  ref: v,
  ...b
}) {
  const { speed: x, scale: g, amplitude: w, frequency: R, brightness: u } = wn(e, i);
  return /* @__PURE__ */ y(
    _t,
    {
      ref: v,
      blur: 0.2,
      color: t,
      colorShift: n,
      speed: x,
      scale: g,
      themeMode: l,
      amplitude: w,
      frequency: R,
      brightness: u,
      className: j(
        yn({ size: r }),
        "overflow-hidden rounded-full",
        h
      ),
      ...b
    }
  );
}
const He = 1.8, je = 0.45, Ke = 0.62, Ze = 1, Qe = 0, z = {
  duration: 0.45,
  ease: "easeOut"
}, ue = {
  duration: 0.5,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function de(r) {
  const [e, t] = he(r), n = wt(r), i = I(null);
  xt(n, "change", (h) => t(h));
  const l = pt(
    (h, v) => {
      i.current = Ct(n, h, v);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: i, animate: l };
}
function En(r, e) {
  const { value: t, animate: n } = de(He), { value: i, animate: l } = de(je), { value: h, animate: v } = de(Ke), { value: b, animate: x } = de(Ze), { value: g, animate: w } = de(Qe), R = bt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return se(() => {
    switch (r) {
      case "idle":
        w(0, z), n(1.2, z), l(0.36, z), v(0.34, z), x(0.96, z);
        return;
      case "failed":
      case "disconnected":
      case "listening":
      case "pre-connect-buffering":
        w(1, z), n(1.9, z), l([0.46, 0.6], {
          ...ue,
          duration: 0.9
        }), v(0.56, z), x([0.99, 1.025], {
          ...ue,
          duration: 1
        });
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        w(2, z), n(2.5, z), l([0.56, 0.82], {
          ...ue,
          duration: 0.56
        }), v(0.82, z), x([1.02, 1.075], {
          ...ue,
          duration: 0.58
        });
        return;
      case "speaking":
        w(3, z), n(2.2, z), l(0.56, z), v(0.76, z), x(1.02, z);
        return;
      default:
        w(Qe, z), n(He, z), v(Ke, z), l([0.38, je], ue), x([0.99, Ze], {
          ...ue,
          duration: 0.8
        });
        return;
    }
  }, [
    r,
    v,
    l,
    x,
    n,
    w
  ]), se(() => {
    if (r !== "speaking")
      return;
    const u = Math.min(Math.max(R, 0), 1);
    l(0.44 + u * 0.56, { duration: 0 }), n(1.9 + u * 2.2, { duration: 0 }), v(0.68 + u * 0.18, { duration: 0.12 }), x(1 + u * 0.11, { duration: 0 });
  }, [
    r,
    R,
    v,
    l,
    x,
    n
  ]), {
    speed: t,
    intensity: i,
    complexity: h,
    scale: b,
    statePhase: g
  };
}
const Je = ["lowp", "mediump", "highp"], bn = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, xn = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, et = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, tt = "iTime", rt = "iTimeDelta", nt = "iDate", ot = "iFrame", it = "iMouse", st = "iResolution", An = "iChannel", at = "iChannelResolution", ct = "iDeviceOrientation";
function Rn(r, e) {
  return r.includes("Matrix") && Array.isArray(e);
}
function Ln(r, e) {
  return r.includes("v") && Array.isArray(e) && e.length > Number.parseInt(r.charAt(0));
}
function Cn(r, e) {
  return !r.includes("v") && Array.isArray(e) && e.length > Number.parseInt(r.charAt(0));
}
const Nn = (r, e, t, n) => {
  if (Cn(t, n))
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
}, Sn = (r) => {
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
        ne(
          `The uniform type "${r}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, xe = 9729, lt = 9728, _n = 9987, ut = 33071, ft = 10497;
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
  updateTexture = (e, t, n) => {
    const { gl: i } = this, l = 0, h = i.RGBA, v = i.RGBA, b = i.UNSIGNED_BYTE;
    i.bindTexture(i.TEXTURE_2D, e), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, n), i.texImage2D(
      i.TEXTURE_2D,
      l,
      h,
      v,
      b,
      t
    );
  };
  setupVideo = (e) => {
    const t = document.createElement("video");
    let n = !1, i = !1;
    t.autoplay = !0, t.muted = !0, t.loop = !0, t.crossOrigin = "anonymous";
    const l = () => {
      n && i && (this.isLoaded = !0);
    };
    return t.addEventListener(
      "playing",
      () => {
        n = !0, this.width = t.videoWidth || 0, this.height = t.videoHeight || 0, l();
      },
      !0
    ), t.addEventListener(
      "timeupdate",
      () => {
        i = !0, l();
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
    ne(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: t } = this, {
      url: n,
      wrapS: i,
      wrapT: l,
      minFilter: h,
      magFilter: v,
      flipY: b = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          ne(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const x = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), g = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (x === null && g === null)
      return Promise.reject(
        new Error(
          ne(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: i, wrapT: l, minFilter: h, magFilter: v, flipY: b });
    const w = 0, R = t.RGBA, u = 1, T = 1, U = 0, m = t.RGBA, C = t.UNSIGNED_BYTE, F = new Uint8Array([255, 255, 255, 0]), P = t.createTexture();
    if (t.bindTexture(t.TEXTURE_2D, P), t.texImage2D(
      t.TEXTURE_2D,
      w,
      R,
      u,
      T,
      U,
      m,
      C,
      F
    ), g) {
      const S = this.setupVideo(n);
      return t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), this._webglTexture = P, this.source = S, this.isVideo = !0, S.play().then(() => this);
    }
    async function E() {
      return new Promise((S, V) => {
        const L = new Image();
        L.crossOrigin = "anonymous", L.onload = () => {
          S(L);
        }, L.onerror = () => {
          V(new Error(ne(`failed loading url: ${n}`)));
        }, L.src = n ?? "";
      });
    }
    let A = await E(), N = (A.width & A.width - 1) === 0 && (A.height & A.height - 1) === 0;
    return (e.wrapS !== ut || e.wrapT !== ut || e.minFilter !== lt && e.minFilter !== xe) && !N && (A = this.makePowerOf2(A), N = !0), t.bindTexture(t.TEXTURE_2D, P), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, b), t.texImage2D(
      t.TEXTURE_2D,
      w,
      R,
      m,
      C,
      A
    ), N && e.minFilter !== lt && e.minFilter !== xe && t.generateMipmap(t.TEXTURE_2D), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_S,
      this.wrapS || ft
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_T,
      this.wrapT || ft
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MIN_FILTER,
      this.minFilter || _n
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MAG_FILTER,
      this.magFilter || xe
    ), this._webglTexture = P, this.source = A, this.isVideo = !1, this.isLoaded = !0, this.width = A.width || 0, this.height = A.height || 0, this;
  };
}
const ne = (r) => `react-shaders: ${r}`, dt = (r) => {
  if ("changedTouches" in r) {
    const e = r.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [r.clientX, r.clientY];
}, ht = (r, e, t) => r * (1 - t) + e * t, Fn = (r, e, t) => t > 0 ? r.substring(0, t) + e + r.substring(t, r.length) : e + r;
function Un({
  fs: r,
  vs: e = et,
  textures: t = [],
  uniforms: n,
  clearColor: i = [0, 0, 0, 1],
  precision: l = "highp",
  style: h,
  contextAttributes: v = {},
  lerp: b = 1,
  devicePixelRatio: x = 1,
  onDoneLoadingTextures: g,
  onError: w = console.error,
  onWarning: R = console.warn
}) {
  const u = I(null), T = I(null), U = I(null), m = I(null), C = I(void 0), F = I(void 0), P = I(!1), E = I(void 0), A = I(0), N = I([0, 0]), S = I([]), V = I(0), L = I(void 0), d = I({
    [tt]: { type: "float", isNeeded: !1, value: 0 },
    [rt]: { type: "float", isNeeded: !1, value: 0 },
    [nt]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [it]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [st]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [ot]: { type: "int", isNeeded: !1, value: 0 },
    [ct]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), O = I(n), $ = (o, a) => {
    const s = "width" in o ? o.width ?? 0 : 0, f = "height" in o ? o.height ?? 0 : 0, c = d.current.iChannelResolution;
    if (!c) return;
    const p = Array.isArray(c.value) ? c.value : c.value = [];
    p[a * 3] = s * x, p[a * 3 + 1] = f * x, p[a * 3 + 2] = 0;
  }, Y = () => {
    u.current && (T.current = u.current.getContext("webgl", v) || u.current.getContext(
      "experimental-webgl",
      v
    ), T.current?.getExtension("OES_standard_derivatives"), T.current?.getExtension("EXT_shader_texture_lod"));
  }, W = () => {
    const o = T.current;
    U.current = o?.createBuffer() ?? null, o?.bindBuffer(o.ARRAY_BUFFER, U.current);
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
    o?.bufferData(o.ARRAY_BUFFER, new Float32Array(a), o.STATIC_DRAW);
  }, K = ({
    alpha: o,
    beta: a,
    gamma: s
  }) => {
    d.current.iDeviceOrientation.value = [
      o ?? 0,
      a ?? 0,
      s ?? 0,
      window.orientation ?? 0
    ];
  }, X = (o) => {
    const [a = 0, s = 0] = dt(o), f = a - (E.current?.left ?? 0) - window.pageXOffset, c = (E.current?.height ?? 0) - s - (E.current?.top ?? 0) - window.pageYOffset;
    P.current = !0;
    const p = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
    p && (p[2] = f, p[3] = c), N.current[0] = f, N.current[1] = c;
  }, D = (o) => {
    E.current = u.current?.getBoundingClientRect();
    const [a = 0, s = 0] = dt(o), f = a - (E.current?.left ?? 0), c = (E.current?.height ?? 0) - s - (E.current?.top ?? 0);
    if (b !== 1)
      N.current[0] = f, N.current[1] = c;
    else {
      const p = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
      p && (p[0] = f, p[1] = c);
    }
  }, _ = () => {
    const o = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
    o && (o[2] = 0, o[3] = 0);
  }, B = () => {
    const o = T.current;
    if (!o) return;
    E.current = u.current?.getBoundingClientRect();
    const a = x, s = Math.floor(
      (E.current?.width ?? 1) * a
    ), f = Math.floor(
      (E.current?.height ?? 1) * a
    );
    if (o.canvas.width = s, o.canvas.height = f, d.current.iResolution?.isNeeded && m.current) {
      const c = o.getUniformLocation(
        m.current,
        st
      );
      o.uniform2fv(c, [o.canvas.width, o.canvas.height]);
    }
  }, Z = (o, a) => {
    const s = T.current;
    if (!s) return null;
    const f = s.createShader(o);
    if (!f) return null;
    if (s.shaderSource(f, a), s.compileShader(f), !s.getShaderParameter(f, s.COMPILE_STATUS)) {
      R?.(ne(`Error compiling the shader:
${a}`));
      const c = s.getShaderInfoLog(f);
      s.deleteShader(f), w?.(ne(`Shader compiler log: ${c}`));
    }
    return f;
  }, oe = (o, a) => {
    const s = T.current;
    if (!s) return;
    const f = Z(s.FRAGMENT_SHADER, o), c = Z(s.VERTEX_SHADER, a);
    if (m.current = s.createProgram(), !(!m.current || !c || !f)) {
      if (s.attachShader(m.current, c), s.attachShader(m.current, f), s.linkProgram(m.current), !s.getProgramParameter(m.current, s.LINK_STATUS)) {
        w?.(
          ne(
            `Unable to initialize the shader program: ${s.getProgramInfoLog(
              m.current
            )}`
          )
        );
        return;
      }
      s.useProgram(m.current), C.current = s.getAttribLocation(
        m.current,
        "aVertexPosition"
      ), s.enableVertexAttribArray(C.current);
    }
  }, Q = () => {
    if (n)
      for (const o of Object.keys(n)) {
        const a = n[o];
        if (!a) continue;
        const { value: s, type: f } = a, c = Sn(f);
        if (!c) continue;
        const p = {};
        if (Rn(f, s)) {
          const M = f.length, G = Number.parseInt(f.charAt(M - 3)), q = Math.floor(s.length / (G * G));
          s.length > G * G && (p.arraySize = `[${q}]`);
        } else Ln(f, s) && (p.arraySize = `[${Math.floor(s.length / Number.parseInt(f.charAt(0)))}]`);
        d.current[o] = {
          type: c,
          isNeeded: !1,
          value: s,
          ...p
        };
      }
  }, ce = () => {
    const o = T.current;
    if (o)
      if (t && t.length > 0) {
        d.current[`${at}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${t.length}]`,
          value: []
        };
        const a = t.map(
          (s, f) => (d.current[`${An}${f}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, $(s, f), S.current[f] = new In(o), S.current[f]?.load(s).then((c) => {
            $(c, f);
          }))
        );
        Promise.all(a).then(() => {
          g && g();
        }).catch((s) => {
          w?.(s), g && g();
        });
      } else g && g();
  }, le = (o) => {
    const a = Je.includes(l ?? "highp"), s = `precision ${a ? l : Je[1]} float;
`;
    a || R?.(
      ne(
        `wrong precision type ${l}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let f = s.concat(`#define DPR ${x.toFixed(1)}
`).concat(o.replace(/texture\(/g, "texture2D("));
    for (const p of Object.keys(d.current))
      if (o.includes(p)) {
        const M = d.current[p];
        if (!M) continue;
        f = Fn(
          f,
          `uniform ${M.type} ${p}${M.arraySize || ""}; 
`,
          f.lastIndexOf(s) + s.length
        ), M.isNeeded = !0;
      }
    return o.includes("mainImage") && (f = f.concat(bn)), f;
  }, ee = (o) => {
    const a = T.current;
    if (!a || !m.current) return;
    const s = V.current ? (o - V.current) / 1e3 : 0;
    V.current = o;
    const f = O.current;
    if (f)
      for (const c of Object.keys(f)) {
        const p = f[c];
        if (p && d.current[c]?.isNeeded) {
          if (!m.current) return;
          const M = a.getUniformLocation(
            m.current,
            c
          );
          if (!M) return;
          Nn(
            a,
            M,
            p.type,
            p.value
          );
        }
      }
    if (d.current.iMouse?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        it
      );
      a.uniform4fv(c, d.current.iMouse.value);
    }
    if (d.current.iChannelResolution?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        at
      );
      a.uniform3fv(
        c,
        d.current.iChannelResolution.value
      );
    }
    if (d.current.iDeviceOrientation?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        ct
      );
      a.uniform4fv(
        c,
        d.current.iDeviceOrientation.value
      );
    }
    if (d.current.iTime?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        tt
      );
      a.uniform1f(c, A.current += s);
    }
    if (d.current.iTimeDelta?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        rt
      );
      a.uniform1f(c, s);
    }
    if (d.current.iDate?.isNeeded) {
      const c = /* @__PURE__ */ new Date(), p = c.getMonth() + 1, M = c.getDate(), G = c.getFullYear(), q = c.getHours() * 60 * 60 + c.getMinutes() * 60 + c.getSeconds() + c.getMilliseconds() * 1e-3, ae = a.getUniformLocation(
        m.current,
        nt
      );
      a.uniform4fv(ae, [G, p, M, q]);
    }
    if (d.current.iFrame?.isNeeded) {
      const c = a.getUniformLocation(
        m.current,
        ot
      ), p = d.current.iFrame.value;
      a.uniform1i(c, p), d.current.iFrame.value = p + 1;
    }
    if (S.current.length > 0)
      for (let c = 0; c < S.current.length; c++) {
        const p = S.current[c];
        if (!p) return;
        const { isVideo: M, _webglTexture: G, source: q, flipY: ae, isLoaded: Te } = p;
        if (!Te || !G || !q) return;
        if (d.current[`iChannel${c}`]?.isNeeded) {
          if (!m.current) return;
          const Ee = a.getUniformLocation(
            m.current,
            `iChannel${c}`
          );
          a.activeTexture(a.TEXTURE0 + c), a.bindTexture(a.TEXTURE_2D, G), a.uniform1i(Ee, c), M && p.updateTexture(
            G,
            q,
            ae
          );
        }
      }
  }, J = (o) => {
    const a = T.current;
    if (!a) return;
    a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), a.bindBuffer(a.ARRAY_BUFFER, U.current), a.vertexAttribPointer(
      C.current ?? 0,
      3,
      a.FLOAT,
      !1,
      0,
      0
    ), ee(o), a.drawArrays(a.TRIANGLE_STRIP, 0, 4);
    const s = d.current.iMouse?.value;
    if (d.current.iMouse?.isNeeded && b !== 1 && Array.isArray(s)) {
      const f = s[0] ?? 0, c = s[1] ?? 0;
      s[0] = ht(f, N.current[0] ?? 0, b), s[1] = ht(c, N.current[1] ?? 0, b);
    }
    F.current = requestAnimationFrame(J);
  }, ie = () => {
    const o = { passive: !0 };
    d.current.iMouse?.isNeeded && u.current && (u.current.addEventListener("mousemove", D, o), u.current.addEventListener("mouseout", _, o), u.current.addEventListener("mouseup", _, o), u.current.addEventListener("mousedown", X, o), u.current.addEventListener("touchmove", D, o), u.current.addEventListener("touchend", _, o), u.current.addEventListener("touchstart", X, o)), d.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      K,
      o
    ), u.current && (L.current = new ResizeObserver(B), L.current.observe(u.current), window.addEventListener("resize", B, o));
  }, te = () => {
    const o = { passive: !0 };
    d.current.iMouse?.isNeeded && u.current && (u.current.removeEventListener("mousemove", D, o), u.current.removeEventListener("mouseout", _, o), u.current.removeEventListener("mouseup", _, o), u.current.removeEventListener("mousedown", X, o), u.current.removeEventListener("touchmove", D, o), u.current.removeEventListener("touchend", _, o), u.current.removeEventListener("touchstart", X, o)), d.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      K,
      o
    ), L.current && (L.current.disconnect(), window.removeEventListener("resize", B, o));
  };
  return se(() => {
    O.current = n;
  }, [n]), se(() => {
    const o = S.current;
    function a() {
      Y();
      const s = T.current;
      s && u.current && (s.clearColor(...i), s.clearDepth(1), s.enable(s.DEPTH_TEST), s.depthFunc(s.LEQUAL), s.viewport(0, 0, u.current.width, u.current.height), u.current.height = u.current.clientHeight, u.current.width = u.current.clientWidth, Q(), ce(), oe(le(r || xn), e || et), W(), requestAnimationFrame(J), ie(), B());
    }
    return requestAnimationFrame(a), () => {
      const s = T.current;
      if (s) {
        if (s.getExtension("WEBGL_lose_context")?.loseContext(), s.useProgram(null), s.deleteProgram(m.current ?? null), o.length > 0)
          for (const f of o)
            s.deleteTexture(f._webglTexture);
        m.current = null;
      }
      te(), cancelAnimationFrame(F.current ?? 0);
    };
  }, []), /* @__PURE__ */ y(
    "canvas",
    {
      ref: u,
      style: { height: "100%", width: "100%", ...h }
    }
  );
}
const Pn = `
// ─── morphic gradient orb ─────────────────────────────────────────────────────
//
// Colours: colorC (lavender) → colorB (pink) → colorA (peach)
//
// Visual layers (back → front):
//   1. Domain-warped colour anchors  — non-linear morphing blobs
//   2. Ghost 4th anchor that pulses in/out — unexpected colour bursts
//   3. Turbulent sine interference   — swirling brightness modulation
//   4. Fast iridescent rings
//   5. Soft diffuse + Fresnel edge lift
//   6. Rim + audio glow + idle desaturation

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;
  vec2 p  = uv - 0.5;
  p.x    *= iResolution.x / iResolution.y;

  float orbR = 0.46;
  vec2  pn   = p / orbR;
  float r2   = dot(pn, pn);

  if (r2 > 1.0) {
    fragColor = vec4(0.0);
    return;
  }

  // ── View-space sphere normal ──────────────────────────────────────────────
  float nz = sqrt(max(0.0, 1.0 - r2));
  vec3  N  = vec3(pn, nz);

  // ── Fast compound rotation → rN (object-space) ───────────────────────────
  float t  = iTime * uSpeed * 0.30;
  float cy = cos(t * 0.71), sy = sin(t * 0.71);
  float cx = cos(t * 0.53), sx = sin(t * 0.53);
  float rx = N.x * cy + N.z * sy;
  float rz = -N.x * sy + N.z * cy;
  vec3  rN = vec3(rx, N.y * cx - rz * sx, N.y * sx + rz * cx);

  // ── Domain warp ──────────────────────────────────────────────────────────
  // Twist the colour-lookup space with layered sines before computing anchor
  // distances. This breaks the blobs out of smooth circular shapes into
  // irregular morphing regions — gradients become non-linear and organic.
  float tw = t * 0.85;
  vec2 warp1 = vec2(
    sin(rN.y * 4.5 + tw * 1.20) * 0.22 + sin(rN.x * 3.1 - tw * 0.75) * 0.14,
    cos(rN.x * 3.8 + tw * 1.05) * 0.19 + cos(rN.y * 2.7 + tw * 1.50) * 0.13
  );
  // Second warp pass (fbm-style, but only 2 octaves in colour-space — not geometry)
  vec2 warp2 = vec2(
    sin(rN.y * 8.3 + warp1.x * 3.0 + tw * 0.60) * 0.09,
    cos(rN.x * 7.6 + warp1.y * 3.0 - tw * 0.55) * 0.08
  );
  vec2 cN = rN.xy + warp1 + warp2; // warped coords used for colour lookup only

  // ── 3 drifting colour anchors ─────────────────────────────────────────────
  vec2 anchorC = vec2(sin(t * 0.83)        * 0.80, cos(t * 0.67)        * 0.75);
  vec2 anchorB = vec2(sin(t * 0.57 + 2.10) * 0.75, cos(t * 0.43 + 1.40) * 0.80);
  vec2 anchorA = vec2(sin(t * 0.71 + 4.30) * 0.78, cos(t * 0.91 + 0.80) * 0.70);

  float dC = length(cN - anchorC);
  float dB = length(cN - anchorB);
  float dA = length(cN - anchorA);

  // Falloff softness breathes over time — sometimes blobs blend softly,
  // sometimes they pop with a sharper edge.
  float softness = 0.07 + sin(t * 0.37) * 0.04 + sin(t * 0.61) * 0.02;

  float wC = 1.0 / (dC * dC + softness);
  float wB = 1.0 / (dB * dB + softness);
  float wA = 1.0 / (dA * dA + softness);

  // ── Ghost 4th anchor (pulses in and out) ──────────────────────────────────
  // Alternates between a lavender echo and a pink echo, creating unexpected
  // pockets of colour that swell up and then melt back into the blend.
  float ghostLife = sin(t * 0.29) * 0.5 + 0.5;             // 0→1 slow pulse
  vec2  anchorG   = vec2(sin(t * 0.47 + 1.57) * 0.60, cos(t * 0.38 + 3.14) * 0.65);
  float dG        = length(cN - anchorG);
  float wG        = (1.0 / (dG * dG + softness)) * ghostLife * 0.70;
  // Ghost colour shifts between colorC and colorA over time
  vec3  colorG    = mix(uColorC, uColorA, sin(t * 0.19) * 0.5 + 0.5);

  float wSum = wC + wB + wA + wG;
  vec3 col = (uColorC * wC + uColorB * wB + uColorA * wA + colorG * wG) / wSum;

  // ── Turbulent sine interference ───────────────────────────────────────────
  float w1 = sin(rN.x * 6.5 + rN.y * 2.8 + t * 1.80) * 0.5 + 0.5;
  float w2 = sin(rN.x * 4.1 - rN.y * 5.7 + t * 1.30) * 0.5 + 0.5;
  float w3 = sin(rN.x * 2.9 + rN.y * 7.1 - t * 1.10) * 0.5 + 0.5;
  float waves = w1 * 0.45 + w2 * 0.35 + w3 * 0.20;

  col = mix(col, col * (0.82 + waves * 0.28), N.z * 0.75);

  // ── Drifting highlight blobs ──────────────────────────────────────────────
  vec2  h1Focal = vec2(sin(t * 0.73) * 0.42, cos(t * 0.61) * 0.36);
  float h1Dist  = length(rN.xy - h1Focal);
  float h1Mask  = (1.0 - smoothstep(0.0, 0.52, h1Dist)) * smoothstep(0.15, 0.42, N.z);
  col = mix(col, mix(col, vec3(1.0, 0.97, 1.0), 0.10), h1Mask * h1Mask);

  vec2  h2Focal = vec2(sin(t * 0.51 + 1.80) * 0.35, cos(t * 0.44 + 0.90) * 0.44);
  float h2Dist  = length(rN.xy - h2Focal);
  float h2Mask  = (1.0 - smoothstep(0.0, 0.44, h2Dist)) * smoothstep(0.15, 0.42, N.z);
  col = mix(col, mix(col, vec3(1.0, 0.95, 0.97), 0.07), h2Mask * h2Mask);



  // ── Soft diffuse + Fresnel edge lift ──────────────────────────────────────
  vec3  L    = normalize(vec3(-0.22, 0.52, 1.0));
  vec3  V    = vec3(0.0, 0.0, 1.0);
  float diff = max(dot(N, L), 0.0);
  col  = col * (0.68 + diff * 0.38);
  float fresnel = pow(1.0 - dot(N, V), 2.5);
  col += vec3(1.0, 0.94, 0.96) * fresnel * 0.10;

  // ── Rim ───────────────────────────────────────────────────────────────────
  float rim = pow(1.0 - N.z, 4.0);
  col += mix(uColorC, uColorB, 0.5) * 0.07 * rim;

  // ── Audio glow ────────────────────────────────────────────────────────────
  float glow = exp(-length(p) * 5.0);
  col += uColorB * 0.18 * glow * uIntensity;

  // ── Idle: desaturate + dim ────────────────────────────────────────────────
  float idle = clamp(1.0 - uStatePhase, 0.0, 1.0);
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, vec3(luma) * 0.72, idle * 0.52);

  // ── Soft edge mask ────────────────────────────────────────────────────────
  float mask = 1.0 - smoothstep(0.88, 1.0, r2);

  // ── Tonemap + gamma ───────────────────────────────────────────────────────
  col = col / (1.0 + col * 0.08);
  col = pow(clamp(col, 0.0, 1.0), vec3(0.90));

  fragColor = vec4(col * mask, mask);
}
`, Mn = {
  colorA: "#ED8262",
  // peach  — gradient right
  colorB: "#E9607F",
  // pink   — gradient centre
  colorC: "#A1ADE5",
  // lavender — gradient left
  colorD: "#ffffff"
};
function Ae(r) {
  const e = r.replace("#", ""), t = e.length === 3 ? e.split("").map((h) => h + h).join("") : e, n = Number.parseInt(t.slice(0, 2), 16) / 255, i = Number.parseInt(t.slice(2, 4), 16) / 255, l = Number.parseInt(t.slice(4, 6), 16) / 255;
  return [n, i, l];
}
function On(r) {
  const e = Tt(), { connecting: t, listening: n, thinking: i, buffering: l, disconnected: h, failed: v } = e.ai.orbVoiceAnimation;
  switch (r) {
    case "connecting":
    case "initializing":
      return t;
    case "listening":
      return n;
    case "thinking":
      return i;
    case "pre-connect-buffering":
      return l;
    case "disconnected":
      return h;
    case "failed":
      return v;
    default:
      return null;
  }
}
function co({
  state: r = "connecting",
  audioTrack: e,
  colors: t,
  className: n,
  ref: i,
  ...l
}) {
  const { speed: h, intensity: v, complexity: b, scale: x, statePhase: g } = En(r, e), w = On(r), R = {
    ...Mn,
    ...t
  }, u = {
    uColorA: { type: "3fv", value: Ae(R.colorA) },
    uColorB: { type: "3fv", value: Ae(R.colorB) },
    uColorC: { type: "3fv", value: Ae(R.colorC) },
    uIntensity: { type: "1f", value: v },
    uSpeed: { type: "1f", value: h },
    uComplexity: { type: "1f", value: b },
    uStatePhase: { type: "1f", value: g }
  };
  return /* @__PURE__ */ k(
    "div",
    {
      ref: i,
      className: j("flex flex-col items-center gap-3", n),
      ...l,
      children: [
        /* @__PURE__ */ y(
          "div",
          {
            style: {
              width: 90,
              height: 90,
              borderRadius: "50%",
              overflow: "hidden",
              transform: `scale(${x})`,
              transformOrigin: "center"
            },
            children: /* @__PURE__ */ y(
              Un,
              {
                fs: Pn,
                uniforms: u,
                clearColor: [0, 0, 0, 0],
                contextAttributes: { alpha: !0 },
                style: { display: "block" }
              }
            )
          }
        ),
        /* @__PURE__ */ y(yt, { children: w !== null && /* @__PURE__ */ y(
          me.span,
          {
            className: "shine-text text-sm font-medium",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3 },
            children: w
          },
          w
        ) })
      ]
    }
  );
}
const lo = ({
  text: r,
  confirmationText: e,
  onConfirm: t,
  cancelText: n,
  onCancel: i
}) => /* @__PURE__ */ k("div", { className: "flex flex-col gap-2", children: [
  r && /* @__PURE__ */ y("p", { children: r }),
  /* @__PURE__ */ k("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ y(
      Le,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        icon: cr,
        onClick: t,
        label: e
      }
    ),
    /* @__PURE__ */ y(
      Le,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: i,
        label: n
      }
    )
  ] })
] }), Dn = pe({
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
}), It = pe({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), Bn = pe({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), ge = pe({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), Vn = ({
  description: r,
  isRevealed: e,
  onAskOne: t
}) => {
  const n = Tt(), i = Et();
  return /* @__PURE__ */ k(mt, { children: [
    r && /* @__PURE__ */ y("span", { className: j(Bn(), "truncate"), children: r }),
    /* @__PURE__ */ y(yt, { children: t && e && /* @__PURE__ */ y(
      me.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: i ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ y(
          Nt,
          {
            size: "md",
            label: n.ai.ask,
            onClick: (l) => {
              l.stopPropagation(), t();
            }
          }
        )
      }
    ) })
  ] });
}, Gn = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), kn = ({ balance: r }) => /* @__PURE__ */ y(
  mr,
  {
    amount: r.amount,
    percentage: r.percentage ?? void 0,
    invertStatus: r.invertStatus,
    hint: r.hint
  }
), $n = (r) => {
  const {
    heading: e,
    label: t,
    content: n,
    shouldFadeContent: i = !1,
    fadeTransition: l
  } = r;
  return /* @__PURE__ */ k("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ y("span", { className: j(It()), children: e }),
    /* @__PURE__ */ k(
      me.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: i ? 0 : 1 },
        transition: l,
        children: [
          n === "person" && /* @__PURE__ */ k("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ y(
              lr,
              {
                firstName: r.avatar.firstName,
                lastName: r.avatar.lastName,
                src: r.avatar.src,
                size: "xs"
              }
            ),
            t && /* @__PURE__ */ y("span", { className: j(ge()), children: t })
          ] }),
          n === "people" && /* @__PURE__ */ y(
            ur,
            {
              type: "person",
              avatars: r.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ k("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ y(
              fr,
              {
                name: r.avatar.name,
                src: r.avatar.src,
                size: "xs"
              }
            ),
            t && /* @__PURE__ */ y("span", { className: j(ge()), children: t })
          ] }),
          n === "company" && /* @__PURE__ */ k("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ y(
              dr,
              {
                name: r.avatar.name,
                src: r.avatar.src,
                size: "xs"
              }
            ),
            t && /* @__PURE__ */ y("span", { className: j(ge()), children: t })
          ] }),
          n === "alert" && /* @__PURE__ */ y(hr, { text: r.alertLabel, level: r.level }),
          n === "balance" && /* @__PURE__ */ y(kn, { balance: r.balance })
        ]
      }
    ),
    t && !Gn.has(n) && /* @__PURE__ */ y(
      me.span,
      {
        className: j(ge()),
        animate: { opacity: i ? 0 : 1 },
        transition: l,
        children: t
      }
    )
  ] });
}, Ft = {
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
function zn(r, e) {
  const t = r[0]?.value ?? 0, n = r[r.length - 1]?.value ?? 0, i = Math.sign(n - t), l = e ? i * -1 : i;
  return l > 0 ? "positive" : l < 0 ? "negative" : "neutral";
}
const Xn = ({
  cx: r,
  cy: e,
  index: t,
  dataLength: n,
  color: i
}) => t !== n - 1 || r == null || e == null ? null : /* @__PURE__ */ y("circle", { cx: r, cy: e, r: 2, fill: i, stroke: "none" }), Wn = ({
  label: r,
  direction: e
}) => {
  const t = Ft[e];
  return /* @__PURE__ */ y(
    "span",
    {
      className: j(
        "absolute right-0 inline-flex items-center rounded-full border border-solid bg-f1-background px-1.5 py-px text-xs font-medium shadow",
        e === "negative" ? "bottom-0 translate-y-full" : "top-0 -translate-y-full",
        t.border,
        {
          positive: "text-f1-foreground-positive",
          negative: "text-f1-foreground-critical",
          neutral: "text-f1-foreground-secondary"
        }[e]
      ),
      "data-testid": "sparkline-balance",
      children: r
    }
  );
}, Yn = ({
  data: r,
  label: e,
  invertStatus: t
}) => {
  const i = `sparkline-gradient-${Gt().replace(/:/g, "")}`, l = zn(r, t), h = Ft[l];
  return /* @__PURE__ */ y("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ k(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${l} trend`,
      children: [
        /* @__PURE__ */ y(pr, { width: "100%", height: "100%", children: /* @__PURE__ */ k(
          vr,
          {
            data: r,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ y("defs", { children: /* @__PURE__ */ k("linearGradient", { id: i, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ y("stop", { offset: "5%", stopColor: h.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ y("stop", { offset: "95%", stopColor: h.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ y(gr, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ y(
                wr,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: h.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${i})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (v) => /* @__PURE__ */ kt(
                    Xn,
                    {
                      ...v,
                      key: v.index,
                      dataLength: r.length,
                      color: h.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ y(Wn, { label: e, direction: l })
      ]
    }
  ) });
}, Ut = ye(
  (r, e) => {
    const {
      description: t,
      heading: n,
      label: i,
      selected: l = !1,
      onClick: h,
      onAskOne: v,
      className: b,
      ...x
    } = r, [g, w] = he(!1), [R, u] = he(!1), T = g || R, U = Et(), m = T && !!v, C = {
      duration: U ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, F = () => {
      h?.();
    }, P = (E) => {
      E.currentTarget === E.target && (E.key === "Enter" || E.key === " ") && (E.preventDefault(), h?.());
    };
    return /* @__PURE__ */ k("div", { className: "relative", children: [
      l && /* @__PURE__ */ k(mt, { children: [
        /* @__PURE__ */ y(
          "div",
          {
            "data-testid": "selected-border",
            className: j(
              "absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient"
            )
          }
        ),
        /* @__PURE__ */ y(
          "div",
          {
            "aria-hidden": !0,
            className: j(
              "pointer-events-none absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient opacity-80 blur-sm"
            )
          }
        )
      ] }),
      /* @__PURE__ */ k(
        "div",
        {
          ref: e,
          role: h ? "button" : void 0,
          tabIndex: h ? 0 : void 0,
          className: j(
            Dn({ selected: l }),
            l && "relative border-transparent",
            h && "cursor-pointer select-none",
            h && yr(),
            b
          ),
          onClick: h ? F : void 0,
          onKeyDown: h ? P : void 0,
          onMouseEnter: () => w(!0),
          onMouseLeave: () => w(!1),
          onFocus: () => u(!0),
          onBlur: () => u(!1),
          children: [
            /* @__PURE__ */ y(
              Vn,
              {
                description: t,
                isRevealed: T,
                onAskOne: v
              }
            ),
            x.content === "sparkline" ? /* @__PURE__ */ k("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ y("span", { className: j(It()), children: n }),
              /* @__PURE__ */ y(
                me.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: m ? 0 : 1 },
                  transition: C,
                  children: /* @__PURE__ */ y(
                    Yn,
                    {
                      data: x.data,
                      label: i ?? "",
                      invertStatus: x.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ y(
              $n,
              {
                heading: n,
                label: i,
                shouldFadeContent: m,
                fadeTransition: C,
                ...x
              }
            )
          ]
        }
      )
    ] });
  }
);
Ut.displayName = "F0AiInsightCardInternal";
const qn = ["className"], Pt = ye((r, e) => {
  const t = qn.reduce((n, i) => {
    const { [i]: l, ...h } = n;
    return h;
  }, r);
  return /* @__PURE__ */ y(Ut, { ref: e, ...t });
});
Pt.displayName = "F0AiInsightCard";
const Hn = () => /* @__PURE__ */ k(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ y(fe, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ k("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ k("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ y(fe, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ y(fe, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ k("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ y(fe, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ y(fe, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), uo = Tr(
  Er(Pt, Hn)
), fo = [
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
  no as A,
  io as F,
  ro as a,
  to as b,
  ao as c,
  co as d,
  lo as e,
  uo as f,
  fo as g,
  Nt as h,
  Yr as i,
  eo as o,
  oo as u
};
