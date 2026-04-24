import { defaultTranslations as Mt } from "./i18n-provider-defaults.js";
import { jsx as v, jsxs as O, Fragment as dt } from "react/jsx-runtime";
import { useInsertionEffect as Ut, forwardRef as we, createContext as Dt, useContext as Pt, useRef as S, useEffect as re, useState as de, useCallback as mt, useMemo as Ot, useId as Bt, createElement as Vt } from "react";
import { r as $t, o as kt, p as Xt, q as zt, s as ht, t as Gt, v as Yt, w as Ht, x as jt, y as Wt, z as pt, A as qt, V as Kt, B as Zt, D as Qt, E as Jt, S as er, H as tr, G as ye, J as rr, K as nr, L as ir, M as or, N as vt, O as G, P as he, Q as gt, R as me, u as yt, T as Ne, U as sr, W as wt, X as ar, Y as cr, Z as ur, _ as lr, $ as fr, a0 as dr, a1 as mr, a2 as hr, a3 as pr, a4 as vr, a5 as gr, a6 as yr, a7 as wr, a8 as le } from "./F0AiChat-BZc0RhxN.js";
import { useTrackVolume as Tt } from "@livekit/components-react";
import './types.css';function Et(t, e, r) {
  Ut(() => t.on(e, r), [t, e, r]);
}
function Re(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function xt(t, e, r, n) {
  return typeof t == "string" && Re(e) ? $t(t, r, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function Tr(t, e, r) {
  return t * (e + 1);
}
function Se(t, e, r, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : n.get(e) ?? t;
}
const Er = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function bt(t, e) {
  return kt(t) ? t[Er(0, t.length, e)] : t;
}
function xr(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    const u = t[n];
    u.at > e && u.at < r && (zt(t, u), n--);
  }
}
function br(t, e, r, n, u, f) {
  xr(t, u, f);
  for (let d = 0; d < e.length; d++)
    t.push({
      value: e[d],
      at: Xt(u, f, n[d]),
      easing: bt(r, d)
    });
}
function Ar(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] = t[r] / (e + 1);
}
function Rr(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const Nr = "easeInOut", Sr = 20;
function Cr(t, { defaultTransition: e = {}, ...r } = {}, n, u) {
  const f = e.duration || 0.3, d = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), T = {}, E = /* @__PURE__ */ new Map();
  let x = 0, y = 0, R = 0;
  for (let l = 0; l < t.length; l++) {
    const w = t[l];
    if (typeof w == "string") {
      E.set(w, y);
      continue;
    } else if (!Array.isArray(w)) {
      E.set(w.name, Se(y, w.at, x, E));
      continue;
    }
    let [D, h, F = {}] = w;
    F.at !== void 0 && (y = Se(y, F.at, x, E));
    let I = 0;
    const U = (b, N, C, L = 0, $ = 0) => {
      const A = Fr(b), { delay: m = 0, times: k = Gt(A), type: W = "keyframes", repeat: q, repeatType: pe, repeatDelay: ie = 0, ...H } = N;
      let { ease: V = e.ease || "easeOut", duration: M } = N;
      const Y = typeof m == "function" ? m(L, $) : m, ee = A.length, oe = jt(W) ? W : u?.[W];
      if (ee <= 2 && oe) {
        let K = 100;
        if (ee === 2 && Ir(A)) {
          const Z = A[1] - A[0];
          K = Math.abs(Z);
        }
        const j = { ...H };
        M !== void 0 && (j.duration = Wt(M));
        const te = Yt(j, K, oe);
        V = te.ease, M = te.duration;
      }
      M ?? (M = f);
      const se = y + Y;
      k.length === 1 && k[0] === 0 && (k[1] = 1);
      const ae = k.length - A.length;
      if (ae > 0 && Ht(k, ae), A.length === 1 && A.unshift(null), q) {
        pt(q < Sr, "Repeat count too high, must be less than 20"), M = Tr(M, q);
        const K = [...A], j = [...k];
        V = Array.isArray(V) ? [...V] : [V];
        const te = [...V];
        for (let Z = 0; Z < q; Z++) {
          A.push(...K);
          for (let i = 0; i < K.length; i++)
            k.push(j[i] + (Z + 1)), V.push(i === 0 ? "linear" : bt(te, i - 1));
        }
        Ar(k, q);
      }
      const ce = se + M;
      br(C, A, V, k, se, ce), I = Math.max(Y + M, I), R = Math.max(ce, R);
    };
    if (ht(D)) {
      const b = Ce(D, g);
      U(h, F, Fe("default", b));
    } else {
      const b = xt(D, h, n, T), N = b.length;
      for (let C = 0; C < N; C++) {
        h = h, F = F;
        const L = b[C], $ = Ce(L, g);
        for (const A in h)
          U(h[A], Lr(F, A), Fe(A, $), C, N);
      }
    }
    x = y, y += I;
  }
  return g.forEach((l, w) => {
    for (const D in l) {
      const h = l[D];
      h.sort(Rr);
      const F = [], I = [], U = [];
      for (let N = 0; N < h.length; N++) {
        const { at: C, value: L, easing: $ } = h[N];
        F.push(L), I.push(qt(0, R, C)), U.push($ || "easeOut");
      }
      I[0] !== 0 && (I.unshift(0), F.unshift(F[0]), U.unshift(Nr)), I[I.length - 1] !== 1 && (I.push(1), F.push(null)), d.has(w) || d.set(w, {
        keyframes: {},
        transition: {}
      });
      const b = d.get(w);
      b.keyframes[D] = F, b.transition[D] = {
        ...e,
        duration: R,
        ease: U,
        times: I,
        ...r
      };
    }
  }), d;
}
function Ce(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function Fe(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function Fr(t) {
  return Array.isArray(t) ? t : [t];
}
function Lr(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const _r = (t) => typeof t == "number", Ir = (t) => t.every(_r);
function Mr(t, e) {
  return t in e;
}
class Ur extends Kt {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, r) {
    if (Mr(r, e)) {
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
    return Zt();
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
function Dr(t) {
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
  }, r = Qt(t) && !Jt(t) ? new er(e) : new tr(e);
  r.mount(t), ye.set(t, r);
}
function Pr(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, r = new Ur(e);
  r.mount(t), ye.set(t, r);
}
function Or(t, e) {
  return ht(t) || typeof t == "number" || typeof t == "string" && !Re(e);
}
function At(t, e, r, n) {
  const u = [];
  if (Or(t, e))
    u.push(rr(t, Re(e) && e.default || e, r && (r.default || r)));
  else {
    const f = xt(t, e, n), d = f.length;
    pt(!!d, "No valid elements provided.");
    for (let g = 0; g < d; g++) {
      const T = f[g], E = T instanceof Element ? Dr : Pr;
      ye.has(T) || E(T);
      const x = ye.get(T), y = { ...r };
      "delay" in y && typeof y.delay == "function" && (y.delay = y.delay(g, d)), u.push(...nr(x, { ...e, transition: y }, {}));
    }
  }
  return u;
}
function Br(t, e, r) {
  const n = [];
  return Cr(t, e, r, { spring: ir }).forEach(({ keyframes: f, transition: d }, g) => {
    n.push(...At(g, f, d));
  }), n;
}
class Vr {
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
      r.forEach((n, u) => {
        n && n(), this.animations[u].stop();
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
class $r extends Vr {
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function kr(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function Xr(t) {
  function e(r, n, u) {
    let f = [];
    return kr(r) ? f = Br(r, n, t) : f = At(r, n, u, t), new $r(f);
  }
  return e;
}
const Rt = Xr(), zr = (t, e) => /* @__PURE__ */ v(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...t,
    children: /* @__PURE__ */ v(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Gr = we(zr), Yr = [
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
], Nt = we((t, e) => {
  const r = Yr.reduce((n, u) => {
    const { [u]: f, ...d } = n;
    return d;
  }, t);
  return /* @__PURE__ */ v(
    or,
    {
      ...r,
      variant: "ai",
      ref: e,
      iconRotate: t.icon == Gr
    }
  );
});
Nt.displayName = "AIButton";
const jn = ["xs", "sm", "md", "lg"], Wn = [
  "inProgress",
  "executing",
  "completed"
], qn = {
  ai: Mt.ai
}, St = Dt(null);
function Kn({
  children: t,
  translations: e
}) {
  return /* @__PURE__ */ v(St.Provider, { value: e, children: t });
}
function Zn() {
  const t = Pt(St);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
class Qn {
  element;
  div;
  options;
  observer;
  constructor(e = {}) {
    this.options = {
      width: e.width ?? 600,
      height: e.height ?? 600,
      borderRadius: e.borderRadius ?? 0,
      ...e
    }, this.div = document.createElement("div"), this.div.className = ["f0-ai-mask", this.options.classNames ?? ""].join(" ").trim(), this.div.style.display = "block", this.div.style.width = `${this.options.width}px`, this.div.style.height = `${this.options.height}px`, this.div.style.borderRadius = `${this.options.borderRadius}px`, this.options.styles && Object.assign(this.div.style, this.options.styles), this.element = this.div;
  }
  /** No-op — kept for API compatibility. CSS renders immediately. */
  start() {
  }
  /** No-op — kept for API compatibility. */
  pause() {
  }
  dispose() {
    this.observer && this.observer.disconnect(), this.div.remove();
  }
  resize(e, r) {
    this.options.width = e, this.options.height = r, this.div.style.width = `${e}px`, this.div.style.height = `${r}px`;
  }
  /**
   * Automatically resizes the element to match the dimensions of the given element.
   * @note Uses ResizeObserver.
   */
  autoResize(e) {
    this.observer && this.observer.disconnect(), this.observer = new ResizeObserver(() => {
      const r = e.getBoundingClientRect();
      this.resize(r.width, r.height);
    }), this.observer.observe(e);
  }
  fadeIn() {
    return new Promise((e, r) => {
      const n = this.div.animate(
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
    return new Promise((e, r) => {
      const n = this.div.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.2)" }
        ],
        { duration: 300, easing: "ease-in", fill: "forwards" }
      );
      n.onfinish = () => e(), n.oncancel = () => r("canceled");
    });
  }
}
const Le = ["lowp", "mediump", "highp"], Hr = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, jr = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, _e = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Ie = "iTime", Me = "iTimeDelta", Ue = "iDate", De = "iFrame", Pe = "iMouse", Oe = "iResolution", Wr = "iChannel", Be = "iChannelResolution", Ve = "iDeviceOrientation";
function qr(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function Kr(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function Zr(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const Qr = (t, e, r, n) => {
  if (Zr(r, n))
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
}, Jr = (t) => {
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
        Q(
          `The uniform type "${t}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, xe = 9729, $e = 9728, en = 9987, ke = 33071, Xe = 10497;
let tn = class {
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
    const { gl: u } = this, f = 0, d = u.RGBA, g = u.RGBA, T = u.UNSIGNED_BYTE;
    u.bindTexture(u.TEXTURE_2D, e), u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL, n), u.texImage2D(
      u.TEXTURE_2D,
      f,
      d,
      g,
      T,
      r
    );
  };
  setupVideo = (e) => {
    const r = document.createElement("video");
    let n = !1, u = !1;
    r.autoplay = !0, r.muted = !0, r.loop = !0, r.crossOrigin = "anonymous";
    const f = () => {
      n && u && (this.isLoaded = !0);
    };
    return r.addEventListener(
      "playing",
      () => {
        n = !0, this.width = r.videoWidth || 0, this.height = r.videoHeight || 0, f();
      },
      !0
    ), r.addEventListener(
      "timeupdate",
      () => {
        u = !0, f();
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
    Q(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: r } = this, {
      url: n,
      wrapS: u,
      wrapT: f,
      minFilter: d,
      magFilter: g,
      flipY: T = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          Q(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const E = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), x = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (E === null && x === null)
      return Promise.reject(
        new Error(
          Q(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: u, wrapT: f, minFilter: d, magFilter: g, flipY: T });
    const y = 0, R = r.RGBA, l = 1, w = 1, D = 0, h = r.RGBA, F = r.UNSIGNED_BYTE, I = new Uint8Array([255, 255, 255, 0]), U = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, U), r.texImage2D(
      r.TEXTURE_2D,
      y,
      R,
      l,
      w,
      D,
      h,
      F,
      I
    ), x) {
      const L = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = U, this.source = L, this.isVideo = !0, L.play().then(() => this);
    }
    async function b() {
      return new Promise((L, $) => {
        const A = new Image();
        A.crossOrigin = "anonymous", A.onload = () => {
          L(A);
        }, A.onerror = () => {
          $(new Error(Q(`failed loading url: ${n}`)));
        }, A.src = n ?? "";
      });
    }
    let N = await b(), C = (N.width & N.width - 1) === 0 && (N.height & N.height - 1) === 0;
    return (e.wrapS !== ke || e.wrapT !== ke || e.minFilter !== $e && e.minFilter !== xe) && !C && (N = this.makePowerOf2(N), C = !0), r.bindTexture(r.TEXTURE_2D, U), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, T), r.texImage2D(
      r.TEXTURE_2D,
      y,
      R,
      h,
      F,
      N
    ), C && e.minFilter !== $e && e.minFilter !== xe && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_S,
      this.wrapS || Xe
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_T,
      this.wrapT || Xe
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MIN_FILTER,
      this.minFilter || en
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MAG_FILTER,
      this.magFilter || xe
    ), this._webglTexture = U, this.source = N, this.isVideo = !1, this.isLoaded = !0, this.width = N.width || 0, this.height = N.height || 0, this;
  };
};
const Q = (t) => `react-shaders: ${t}`, ze = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, Ge = (t, e, r) => t * (1 - r) + e * r, rn = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function nn({
  fs: t,
  vs: e = _e,
  textures: r = [],
  uniforms: n,
  clearColor: u = [0, 0, 0, 1],
  precision: f = "highp",
  style: d,
  contextAttributes: g = {},
  lerp: T = 1,
  devicePixelRatio: E = 1,
  onDoneLoadingTextures: x,
  onError: y = console.error,
  onWarning: R = console.warn
}) {
  const l = S(null), w = S(null), D = S(null), h = S(null), F = S(void 0), I = S(void 0), U = S(!1), b = S(void 0), N = S(0), C = S([0, 0]), L = S([]), $ = S(0), A = S(void 0), m = S({
    [Ie]: { type: "float", isNeeded: !1, value: 0 },
    [Me]: { type: "float", isNeeded: !1, value: 0 },
    [Ue]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Pe]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Oe]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [De]: { type: "int", isNeeded: !1, value: 0 },
    [Ve]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), k = S(n), W = (i, s) => {
    const o = "width" in i ? i.width ?? 0 : 0, c = "height" in i ? i.height ?? 0 : 0, a = m.current.iChannelResolution;
    if (!a) return;
    const p = Array.isArray(a.value) ? a.value : a.value = [];
    p[s * 3] = o * E, p[s * 3 + 1] = c * E, p[s * 3 + 2] = 0;
  }, q = () => {
    l.current && (w.current = l.current.getContext("webgl", g) || l.current.getContext(
      "experimental-webgl",
      g
    ), w.current?.getExtension("OES_standard_derivatives"), w.current?.getExtension("EXT_shader_texture_lod"));
  }, pe = () => {
    const i = w.current;
    D.current = i?.createBuffer() ?? null, i?.bindBuffer(i.ARRAY_BUFFER, D.current);
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
    i?.bufferData(i.ARRAY_BUFFER, new Float32Array(s), i.STATIC_DRAW);
  }, ie = ({
    alpha: i,
    beta: s,
    gamma: o
  }) => {
    m.current.iDeviceOrientation.value = [
      i ?? 0,
      s ?? 0,
      o ?? 0,
      window.orientation ?? 0
    ];
  }, H = (i) => {
    const [s = 0, o = 0] = ze(i), c = s - (b.current?.left ?? 0) - window.pageXOffset, a = (b.current?.height ?? 0) - o - (b.current?.top ?? 0) - window.pageYOffset;
    U.current = !0;
    const p = Array.isArray(m.current.iMouse?.value) ? m.current.iMouse.value : void 0;
    p && (p[2] = c, p[3] = a), C.current[0] = c, C.current[1] = a;
  }, V = (i) => {
    b.current = l.current?.getBoundingClientRect();
    const [s = 0, o = 0] = ze(i), c = s - (b.current?.left ?? 0), a = (b.current?.height ?? 0) - o - (b.current?.top ?? 0);
    if (T !== 1)
      C.current[0] = c, C.current[1] = a;
    else {
      const p = Array.isArray(m.current.iMouse?.value) ? m.current.iMouse.value : void 0;
      p && (p[0] = c, p[1] = a);
    }
  }, M = () => {
    const i = Array.isArray(m.current.iMouse?.value) ? m.current.iMouse.value : void 0;
    i && (i[2] = 0, i[3] = 0);
  }, Y = () => {
    const i = w.current;
    if (!i) return;
    b.current = l.current?.getBoundingClientRect();
    const s = E, o = Math.floor(
      (b.current?.width ?? 1) * s
    ), c = Math.floor(
      (b.current?.height ?? 1) * s
    );
    if (i.canvas.width = o, i.canvas.height = c, m.current.iResolution?.isNeeded && h.current) {
      const a = i.getUniformLocation(
        h.current,
        Oe
      );
      i.uniform2fv(a, [i.canvas.width, i.canvas.height]);
    }
  }, ee = (i, s) => {
    const o = w.current;
    if (!o) return null;
    const c = o.createShader(i);
    if (!c) return null;
    if (o.shaderSource(c, s), o.compileShader(c), !o.getShaderParameter(c, o.COMPILE_STATUS)) {
      R?.(Q(`Error compiling the shader:
${s}`));
      const a = o.getShaderInfoLog(c);
      o.deleteShader(c), y?.(Q(`Shader compiler log: ${a}`));
    }
    return c;
  }, oe = (i, s) => {
    const o = w.current;
    if (!o) return;
    const c = ee(o.FRAGMENT_SHADER, i), a = ee(o.VERTEX_SHADER, s);
    if (h.current = o.createProgram(), !(!h.current || !a || !c)) {
      if (o.attachShader(h.current, a), o.attachShader(h.current, c), o.linkProgram(h.current), !o.getProgramParameter(h.current, o.LINK_STATUS)) {
        y?.(
          Q(
            `Unable to initialize the shader program: ${o.getProgramInfoLog(
              h.current
            )}`
          )
        );
        return;
      }
      o.useProgram(h.current), F.current = o.getAttribLocation(
        h.current,
        "aVertexPosition"
      ), o.enableVertexAttribArray(F.current);
    }
  }, se = () => {
    if (n)
      for (const i of Object.keys(n)) {
        const s = n[i];
        if (!s) continue;
        const { value: o, type: c } = s, a = Jr(c);
        if (!a) continue;
        const p = {};
        if (qr(c, o)) {
          const _ = c.length, P = Number.parseInt(c.charAt(_ - 3)), X = Math.floor(o.length / (P * P));
          o.length > P * P && (p.arraySize = `[${X}]`);
        } else Kr(c, o) && (p.arraySize = `[${Math.floor(o.length / Number.parseInt(c.charAt(0)))}]`);
        m.current[i] = {
          type: a,
          isNeeded: !1,
          value: o,
          ...p
        };
      }
  }, ae = () => {
    const i = w.current;
    if (i)
      if (r && r.length > 0) {
        m.current[`${Be}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const s = r.map(
          (o, c) => (m.current[`${Wr}${c}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, W(o, c), L.current[c] = new tn(i), L.current[c]?.load(o).then((a) => {
            W(a, c);
          }))
        );
        Promise.all(s).then(() => {
          x && x();
        }).catch((o) => {
          y?.(o), x && x();
        });
      } else x && x();
  }, ce = (i) => {
    const s = Le.includes(f ?? "highp"), o = `precision ${s ? f : Le[1]} float;
`;
    s || R?.(
      Q(
        `wrong precision type ${f}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let c = o.concat(`#define DPR ${E.toFixed(1)}
`).concat(i.replace(/texture\(/g, "texture2D("));
    for (const p of Object.keys(m.current))
      if (i.includes(p)) {
        const _ = m.current[p];
        if (!_) continue;
        c = rn(
          c,
          `uniform ${_.type} ${p}${_.arraySize || ""}; 
`,
          c.lastIndexOf(o) + o.length
        ), _.isNeeded = !0;
      }
    return i.includes("mainImage") && (c = c.concat(Hr)), c;
  }, K = (i) => {
    const s = w.current;
    if (!s || !h.current) return;
    const o = $.current ? (i - $.current) / 1e3 : 0;
    $.current = i;
    const c = k.current;
    if (c)
      for (const a of Object.keys(c)) {
        const p = c[a];
        if (p && m.current[a]?.isNeeded) {
          if (!h.current) return;
          const _ = s.getUniformLocation(
            h.current,
            a
          );
          if (!_) return;
          Qr(
            s,
            _,
            p.type,
            p.value
          );
        }
      }
    if (m.current.iMouse?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        Pe
      );
      s.uniform4fv(a, m.current.iMouse.value);
    }
    if (m.current.iChannelResolution?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        Be
      );
      s.uniform3fv(
        a,
        m.current.iChannelResolution.value
      );
    }
    if (m.current.iDeviceOrientation?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        Ve
      );
      s.uniform4fv(
        a,
        m.current.iDeviceOrientation.value
      );
    }
    if (m.current.iTime?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        Ie
      );
      s.uniform1f(a, N.current += o);
    }
    if (m.current.iTimeDelta?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        Me
      );
      s.uniform1f(a, o);
    }
    if (m.current.iDate?.isNeeded) {
      const a = /* @__PURE__ */ new Date(), p = a.getMonth() + 1, _ = a.getDate(), P = a.getFullYear(), X = a.getHours() * 60 * 60 + a.getMinutes() * 60 + a.getSeconds() + a.getMilliseconds() * 1e-3, ne = s.getUniformLocation(
        h.current,
        Ue
      );
      s.uniform4fv(ne, [P, p, _, X]);
    }
    if (m.current.iFrame?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        De
      ), p = m.current.iFrame.value;
      s.uniform1i(a, p), m.current.iFrame.value = p + 1;
    }
    if (L.current.length > 0)
      for (let a = 0; a < L.current.length; a++) {
        const p = L.current[a];
        if (!p) return;
        const { isVideo: _, _webglTexture: P, source: X, flipY: ne, isLoaded: Te } = p;
        if (!Te || !P || !X) return;
        if (m.current[`iChannel${a}`]?.isNeeded) {
          if (!h.current) return;
          const Ee = s.getUniformLocation(
            h.current,
            `iChannel${a}`
          );
          s.activeTexture(s.TEXTURE0 + a), s.bindTexture(s.TEXTURE_2D, P), s.uniform1i(Ee, a), _ && p.updateTexture(
            P,
            X,
            ne
          );
        }
      }
  }, j = (i) => {
    const s = w.current;
    if (!s) return;
    s.viewport(0, 0, s.drawingBufferWidth, s.drawingBufferHeight), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.bindBuffer(s.ARRAY_BUFFER, D.current), s.vertexAttribPointer(
      F.current ?? 0,
      3,
      s.FLOAT,
      !1,
      0,
      0
    ), K(i), s.drawArrays(s.TRIANGLE_STRIP, 0, 4);
    const o = m.current.iMouse?.value;
    if (m.current.iMouse?.isNeeded && T !== 1 && Array.isArray(o)) {
      const c = o[0] ?? 0, a = o[1] ?? 0;
      o[0] = Ge(c, C.current[0] ?? 0, T), o[1] = Ge(a, C.current[1] ?? 0, T);
    }
    I.current = requestAnimationFrame(j);
  }, te = () => {
    const i = { passive: !0 };
    m.current.iMouse?.isNeeded && l.current && (l.current.addEventListener("mousemove", V, i), l.current.addEventListener("mouseout", M, i), l.current.addEventListener("mouseup", M, i), l.current.addEventListener("mousedown", H, i), l.current.addEventListener("touchmove", V, i), l.current.addEventListener("touchend", M, i), l.current.addEventListener("touchstart", H, i)), m.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      ie,
      i
    ), l.current && (A.current = new ResizeObserver(Y), A.current.observe(l.current), window.addEventListener("resize", Y, i));
  }, Z = () => {
    const i = { passive: !0 };
    m.current.iMouse?.isNeeded && l.current && (l.current.removeEventListener("mousemove", V, i), l.current.removeEventListener("mouseout", M, i), l.current.removeEventListener("mouseup", M, i), l.current.removeEventListener("mousedown", H, i), l.current.removeEventListener("touchmove", V, i), l.current.removeEventListener("touchend", M, i), l.current.removeEventListener("touchstart", H, i)), m.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      ie,
      i
    ), A.current && (A.current.disconnect(), window.removeEventListener("resize", Y, i));
  };
  return re(() => {
    k.current = n;
  }, [n]), re(() => {
    const i = L.current;
    function s() {
      q();
      const o = w.current;
      o && l.current && (o.clearColor(...u), o.clearDepth(1), o.enable(o.DEPTH_TEST), o.depthFunc(o.LEQUAL), o.viewport(0, 0, l.current.width, l.current.height), l.current.height = l.current.clientHeight, l.current.width = l.current.clientWidth, se(), ae(), oe(ce(t || jr), e || _e), pe(), requestAnimationFrame(j), te(), Y());
    }
    return requestAnimationFrame(s), () => {
      const o = w.current;
      if (o) {
        if (o.getExtension("WEBGL_lose_context")?.loseContext(), o.useProgram(null), o.deleteProgram(h.current ?? null), i.length > 0)
          for (const c of i)
            o.deleteTexture(c._webglTexture);
        h.current = null;
      }
      Z(), cancelAnimationFrame(I.current ?? 0);
    };
  }, []), /* @__PURE__ */ v(
    "canvas",
    {
      ref: l,
      style: { height: "100%", width: "100%", ...d }
    }
  );
}
const on = `
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
}`, sn = 10, an = 2, cn = 0.5, un = 0.2, ln = 1.5, z = {
  duration: 0.5,
  ease: "easeOut"
}, Ye = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function ve(t) {
  const [e, r] = de(t), n = vt(t), u = S(null);
  Et(n, "change", (d) => r(d));
  const f = mt(
    (d, g) => {
      u.current = Rt(n, d, g);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: u, animate: f };
}
function fn(t, e) {
  const [r, n] = de(sn), {
    value: u,
    animate: f,
    motionValue: d
  } = ve(un), { value: g, animate: T } = ve(an), { value: E, animate: x } = ve(cn), { value: y, animate: R } = ve(ln), l = Tt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return re(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), f(0.2, z), T(1.2, z), x(0.4, z), R(1, z);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), f(0.3, { type: "spring", duration: 1, bounce: 0.35 }), T(1, z), x(0.7, z), R([1.5, 2], Ye);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), f(0.3, z), T(0.5, z), x(1, z), R([0.5, 2.5], Ye);
        return;
      case "speaking":
        n(70), f(0.3, z), T(0.75, z), x(1.25, z), R(1.5, z);
        return;
    }
  }, [
    t,
    f,
    T,
    x,
    R
  ]), re(() => {
    t === "speaking" && l > 0 && !d.isAnimating() && f(0.2 + 0.2 * l, { duration: 0 });
  }, [
    t,
    l,
    d,
    f,
    T,
    x,
    R
  ]), {
    speed: r,
    scale: u,
    amplitude: g,
    frequency: E,
    brightness: y
  };
}
const dn = he({
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
function mn(t) {
  const e = t.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, r, n, u] = e;
    return [r, n, u].map((d = "00") => parseInt(d, 16) / 255);
  }
}
function Ct({
  shape: t = 1,
  speed: e = 1,
  amplitude: r = 0.5,
  frequency: n = 0.5,
  scale: u = 0.2,
  blur: f = 1,
  color: d = "#FF355E",
  colorShift: g = 1,
  brightness: T = 1,
  themeMode: E = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: x,
  className: y,
  ...R
}) {
  const l = Ot(() => mn(d), [d]);
  return /* @__PURE__ */ v("div", { ref: x, className: y, ...R, children: /* @__PURE__ */ v(
    nn,
    {
      fs: on,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: e },
        // Edge blur/softness
        uBlur: { type: "1f", value: f },
        // Shape scale
        uScale: { type: "1f", value: u },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: t },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: n },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: r },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: T },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: g },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: E === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: l ?? [0, 0.7, 1] }
      },
      onError: (w) => {
        console.error("Shader error:", w);
      },
      onWarning: (w) => {
        console.warn("Shader warning:", w);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
Ct.displayName = "AuraShader";
function ei({
  size: t = "lg",
  state: e,
  color: r,
  colorShift: n = 0.05,
  audioTrack: u,
  themeMode: f,
  className: d,
  ref: g,
  ...T
}) {
  const { speed: E, scale: x, amplitude: y, frequency: R, brightness: l } = fn(e, u);
  return /* @__PURE__ */ v(
    Ct,
    {
      ref: g,
      blur: 0.2,
      color: r,
      colorShift: n,
      speed: E,
      scale: x,
      themeMode: f,
      amplitude: y,
      frequency: R,
      brightness: l,
      className: G(
        dn({ size: t }),
        "overflow-hidden rounded-full",
        d
      ),
      ...T
    }
  );
}
const He = 1.8, je = 0.45, We = 0.62, qe = 1, Ke = 0, B = {
  duration: 0.45,
  ease: "easeOut"
}, ue = {
  duration: 0.5,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function fe(t) {
  const [e, r] = de(t), n = vt(t), u = S(null);
  Et(n, "change", (d) => r(d));
  const f = mt(
    (d, g) => {
      u.current = Rt(n, d, g);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: u, animate: f };
}
function hn(t, e) {
  const { value: r, animate: n } = fe(He), { value: u, animate: f } = fe(je), { value: d, animate: g } = fe(We), { value: T, animate: E } = fe(qe), { value: x, animate: y } = fe(Ke), R = Tt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return re(() => {
    switch (t) {
      case "idle":
        y(0, B), n(1.2, B), f(0.36, B), g(0.34, B), E(0.96, B);
        return;
      case "failed":
      case "disconnected":
      case "listening":
      case "pre-connect-buffering":
        y(1, B), n(1.9, B), f([0.46, 0.6], {
          ...ue,
          duration: 0.9
        }), g(0.56, B), E([0.99, 1.025], {
          ...ue,
          duration: 1
        });
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        y(2, B), n(2.5, B), f([0.56, 0.82], {
          ...ue,
          duration: 0.56
        }), g(0.82, B), E([1.02, 1.075], {
          ...ue,
          duration: 0.58
        });
        return;
      case "speaking":
        y(3, B), n(2.2, B), f(0.56, B), g(0.76, B), E(1.02, B);
        return;
      default:
        y(Ke, B), n(He, B), g(We, B), f([0.38, je], ue), E([0.99, qe], {
          ...ue,
          duration: 0.8
        });
        return;
    }
  }, [
    t,
    g,
    f,
    E,
    n,
    y
  ]), re(() => {
    if (t !== "speaking")
      return;
    const l = Math.min(Math.max(R, 0), 1);
    f(0.44 + l * 0.56, { duration: 0 }), n(1.9 + l * 2.2, { duration: 0 }), g(0.68 + l * 0.18, { duration: 0.12 }), E(1 + l * 0.11, { duration: 0 });
  }, [
    t,
    R,
    g,
    f,
    E,
    n
  ]), {
    speed: r,
    intensity: u,
    complexity: d,
    scale: T,
    statePhase: x
  };
}
const Ze = ["lowp", "mediump", "highp"], pn = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, vn = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, Qe = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Je = "iTime", et = "iTimeDelta", tt = "iDate", rt = "iFrame", nt = "iMouse", it = "iResolution", gn = "iChannel", ot = "iChannelResolution", st = "iDeviceOrientation";
function yn(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function wn(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function Tn(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const En = (t, e, r, n) => {
  if (Tn(r, n))
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
}, xn = (t) => {
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
        J(
          `The uniform type "${t}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, be = 9729, at = 9728, bn = 9987, ct = 33071, ut = 10497;
class An {
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
    const { gl: u } = this, f = 0, d = u.RGBA, g = u.RGBA, T = u.UNSIGNED_BYTE;
    u.bindTexture(u.TEXTURE_2D, e), u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL, n), u.texImage2D(
      u.TEXTURE_2D,
      f,
      d,
      g,
      T,
      r
    );
  };
  setupVideo = (e) => {
    const r = document.createElement("video");
    let n = !1, u = !1;
    r.autoplay = !0, r.muted = !0, r.loop = !0, r.crossOrigin = "anonymous";
    const f = () => {
      n && u && (this.isLoaded = !0);
    };
    return r.addEventListener(
      "playing",
      () => {
        n = !0, this.width = r.videoWidth || 0, this.height = r.videoHeight || 0, f();
      },
      !0
    ), r.addEventListener(
      "timeupdate",
      () => {
        u = !0, f();
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
    J(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: r } = this, {
      url: n,
      wrapS: u,
      wrapT: f,
      minFilter: d,
      magFilter: g,
      flipY: T = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          J(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const E = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), x = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (E === null && x === null)
      return Promise.reject(
        new Error(
          J(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: u, wrapT: f, minFilter: d, magFilter: g, flipY: T });
    const y = 0, R = r.RGBA, l = 1, w = 1, D = 0, h = r.RGBA, F = r.UNSIGNED_BYTE, I = new Uint8Array([255, 255, 255, 0]), U = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, U), r.texImage2D(
      r.TEXTURE_2D,
      y,
      R,
      l,
      w,
      D,
      h,
      F,
      I
    ), x) {
      const L = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = U, this.source = L, this.isVideo = !0, L.play().then(() => this);
    }
    async function b() {
      return new Promise((L, $) => {
        const A = new Image();
        A.crossOrigin = "anonymous", A.onload = () => {
          L(A);
        }, A.onerror = () => {
          $(new Error(J(`failed loading url: ${n}`)));
        }, A.src = n ?? "";
      });
    }
    let N = await b(), C = (N.width & N.width - 1) === 0 && (N.height & N.height - 1) === 0;
    return (e.wrapS !== ct || e.wrapT !== ct || e.minFilter !== at && e.minFilter !== be) && !C && (N = this.makePowerOf2(N), C = !0), r.bindTexture(r.TEXTURE_2D, U), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, T), r.texImage2D(
      r.TEXTURE_2D,
      y,
      R,
      h,
      F,
      N
    ), C && e.minFilter !== at && e.minFilter !== be && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_S,
      this.wrapS || ut
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_T,
      this.wrapT || ut
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MIN_FILTER,
      this.minFilter || bn
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MAG_FILTER,
      this.magFilter || be
    ), this._webglTexture = U, this.source = N, this.isVideo = !1, this.isLoaded = !0, this.width = N.width || 0, this.height = N.height || 0, this;
  };
}
const J = (t) => `react-shaders: ${t}`, lt = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, ft = (t, e, r) => t * (1 - r) + e * r, Rn = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function Nn({
  fs: t,
  vs: e = Qe,
  textures: r = [],
  uniforms: n,
  clearColor: u = [0, 0, 0, 1],
  precision: f = "highp",
  style: d,
  contextAttributes: g = {},
  lerp: T = 1,
  devicePixelRatio: E = 1,
  onDoneLoadingTextures: x,
  onError: y = console.error,
  onWarning: R = console.warn
}) {
  const l = S(null), w = S(null), D = S(null), h = S(null), F = S(void 0), I = S(void 0), U = S(!1), b = S(void 0), N = S(0), C = S([0, 0]), L = S([]), $ = S(0), A = S(void 0), m = S({
    [Je]: { type: "float", isNeeded: !1, value: 0 },
    [et]: { type: "float", isNeeded: !1, value: 0 },
    [tt]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [nt]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [it]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [rt]: { type: "int", isNeeded: !1, value: 0 },
    [st]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), k = S(n), W = (i, s) => {
    const o = "width" in i ? i.width ?? 0 : 0, c = "height" in i ? i.height ?? 0 : 0, a = m.current.iChannelResolution;
    if (!a) return;
    const p = Array.isArray(a.value) ? a.value : a.value = [];
    p[s * 3] = o * E, p[s * 3 + 1] = c * E, p[s * 3 + 2] = 0;
  }, q = () => {
    l.current && (w.current = l.current.getContext("webgl", g) || l.current.getContext(
      "experimental-webgl",
      g
    ), w.current?.getExtension("OES_standard_derivatives"), w.current?.getExtension("EXT_shader_texture_lod"));
  }, pe = () => {
    const i = w.current;
    D.current = i?.createBuffer() ?? null, i?.bindBuffer(i.ARRAY_BUFFER, D.current);
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
    i?.bufferData(i.ARRAY_BUFFER, new Float32Array(s), i.STATIC_DRAW);
  }, ie = ({
    alpha: i,
    beta: s,
    gamma: o
  }) => {
    m.current.iDeviceOrientation.value = [
      i ?? 0,
      s ?? 0,
      o ?? 0,
      window.orientation ?? 0
    ];
  }, H = (i) => {
    const [s = 0, o = 0] = lt(i), c = s - (b.current?.left ?? 0) - window.pageXOffset, a = (b.current?.height ?? 0) - o - (b.current?.top ?? 0) - window.pageYOffset;
    U.current = !0;
    const p = Array.isArray(m.current.iMouse?.value) ? m.current.iMouse.value : void 0;
    p && (p[2] = c, p[3] = a), C.current[0] = c, C.current[1] = a;
  }, V = (i) => {
    b.current = l.current?.getBoundingClientRect();
    const [s = 0, o = 0] = lt(i), c = s - (b.current?.left ?? 0), a = (b.current?.height ?? 0) - o - (b.current?.top ?? 0);
    if (T !== 1)
      C.current[0] = c, C.current[1] = a;
    else {
      const p = Array.isArray(m.current.iMouse?.value) ? m.current.iMouse.value : void 0;
      p && (p[0] = c, p[1] = a);
    }
  }, M = () => {
    const i = Array.isArray(m.current.iMouse?.value) ? m.current.iMouse.value : void 0;
    i && (i[2] = 0, i[3] = 0);
  }, Y = () => {
    const i = w.current;
    if (!i) return;
    b.current = l.current?.getBoundingClientRect();
    const s = E, o = Math.floor(
      (b.current?.width ?? 1) * s
    ), c = Math.floor(
      (b.current?.height ?? 1) * s
    );
    if (i.canvas.width = o, i.canvas.height = c, m.current.iResolution?.isNeeded && h.current) {
      const a = i.getUniformLocation(
        h.current,
        it
      );
      i.uniform2fv(a, [i.canvas.width, i.canvas.height]);
    }
  }, ee = (i, s) => {
    const o = w.current;
    if (!o) return null;
    const c = o.createShader(i);
    if (!c) return null;
    if (o.shaderSource(c, s), o.compileShader(c), !o.getShaderParameter(c, o.COMPILE_STATUS)) {
      R?.(J(`Error compiling the shader:
${s}`));
      const a = o.getShaderInfoLog(c);
      o.deleteShader(c), y?.(J(`Shader compiler log: ${a}`));
    }
    return c;
  }, oe = (i, s) => {
    const o = w.current;
    if (!o) return;
    const c = ee(o.FRAGMENT_SHADER, i), a = ee(o.VERTEX_SHADER, s);
    if (h.current = o.createProgram(), !(!h.current || !a || !c)) {
      if (o.attachShader(h.current, a), o.attachShader(h.current, c), o.linkProgram(h.current), !o.getProgramParameter(h.current, o.LINK_STATUS)) {
        y?.(
          J(
            `Unable to initialize the shader program: ${o.getProgramInfoLog(
              h.current
            )}`
          )
        );
        return;
      }
      o.useProgram(h.current), F.current = o.getAttribLocation(
        h.current,
        "aVertexPosition"
      ), o.enableVertexAttribArray(F.current);
    }
  }, se = () => {
    if (n)
      for (const i of Object.keys(n)) {
        const s = n[i];
        if (!s) continue;
        const { value: o, type: c } = s, a = xn(c);
        if (!a) continue;
        const p = {};
        if (yn(c, o)) {
          const _ = c.length, P = Number.parseInt(c.charAt(_ - 3)), X = Math.floor(o.length / (P * P));
          o.length > P * P && (p.arraySize = `[${X}]`);
        } else wn(c, o) && (p.arraySize = `[${Math.floor(o.length / Number.parseInt(c.charAt(0)))}]`);
        m.current[i] = {
          type: a,
          isNeeded: !1,
          value: o,
          ...p
        };
      }
  }, ae = () => {
    const i = w.current;
    if (i)
      if (r && r.length > 0) {
        m.current[`${ot}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const s = r.map(
          (o, c) => (m.current[`${gn}${c}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, W(o, c), L.current[c] = new An(i), L.current[c]?.load(o).then((a) => {
            W(a, c);
          }))
        );
        Promise.all(s).then(() => {
          x && x();
        }).catch((o) => {
          y?.(o), x && x();
        });
      } else x && x();
  }, ce = (i) => {
    const s = Ze.includes(f ?? "highp"), o = `precision ${s ? f : Ze[1]} float;
`;
    s || R?.(
      J(
        `wrong precision type ${f}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let c = o.concat(`#define DPR ${E.toFixed(1)}
`).concat(i.replace(/texture\(/g, "texture2D("));
    for (const p of Object.keys(m.current))
      if (i.includes(p)) {
        const _ = m.current[p];
        if (!_) continue;
        c = Rn(
          c,
          `uniform ${_.type} ${p}${_.arraySize || ""}; 
`,
          c.lastIndexOf(o) + o.length
        ), _.isNeeded = !0;
      }
    return i.includes("mainImage") && (c = c.concat(pn)), c;
  }, K = (i) => {
    const s = w.current;
    if (!s || !h.current) return;
    const o = $.current ? (i - $.current) / 1e3 : 0;
    $.current = i;
    const c = k.current;
    if (c)
      for (const a of Object.keys(c)) {
        const p = c[a];
        if (p && m.current[a]?.isNeeded) {
          if (!h.current) return;
          const _ = s.getUniformLocation(
            h.current,
            a
          );
          if (!_) return;
          En(
            s,
            _,
            p.type,
            p.value
          );
        }
      }
    if (m.current.iMouse?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        nt
      );
      s.uniform4fv(a, m.current.iMouse.value);
    }
    if (m.current.iChannelResolution?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        ot
      );
      s.uniform3fv(
        a,
        m.current.iChannelResolution.value
      );
    }
    if (m.current.iDeviceOrientation?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        st
      );
      s.uniform4fv(
        a,
        m.current.iDeviceOrientation.value
      );
    }
    if (m.current.iTime?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        Je
      );
      s.uniform1f(a, N.current += o);
    }
    if (m.current.iTimeDelta?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        et
      );
      s.uniform1f(a, o);
    }
    if (m.current.iDate?.isNeeded) {
      const a = /* @__PURE__ */ new Date(), p = a.getMonth() + 1, _ = a.getDate(), P = a.getFullYear(), X = a.getHours() * 60 * 60 + a.getMinutes() * 60 + a.getSeconds() + a.getMilliseconds() * 1e-3, ne = s.getUniformLocation(
        h.current,
        tt
      );
      s.uniform4fv(ne, [P, p, _, X]);
    }
    if (m.current.iFrame?.isNeeded) {
      const a = s.getUniformLocation(
        h.current,
        rt
      ), p = m.current.iFrame.value;
      s.uniform1i(a, p), m.current.iFrame.value = p + 1;
    }
    if (L.current.length > 0)
      for (let a = 0; a < L.current.length; a++) {
        const p = L.current[a];
        if (!p) return;
        const { isVideo: _, _webglTexture: P, source: X, flipY: ne, isLoaded: Te } = p;
        if (!Te || !P || !X) return;
        if (m.current[`iChannel${a}`]?.isNeeded) {
          if (!h.current) return;
          const Ee = s.getUniformLocation(
            h.current,
            `iChannel${a}`
          );
          s.activeTexture(s.TEXTURE0 + a), s.bindTexture(s.TEXTURE_2D, P), s.uniform1i(Ee, a), _ && p.updateTexture(
            P,
            X,
            ne
          );
        }
      }
  }, j = (i) => {
    const s = w.current;
    if (!s) return;
    s.viewport(0, 0, s.drawingBufferWidth, s.drawingBufferHeight), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.bindBuffer(s.ARRAY_BUFFER, D.current), s.vertexAttribPointer(
      F.current ?? 0,
      3,
      s.FLOAT,
      !1,
      0,
      0
    ), K(i), s.drawArrays(s.TRIANGLE_STRIP, 0, 4);
    const o = m.current.iMouse?.value;
    if (m.current.iMouse?.isNeeded && T !== 1 && Array.isArray(o)) {
      const c = o[0] ?? 0, a = o[1] ?? 0;
      o[0] = ft(c, C.current[0] ?? 0, T), o[1] = ft(a, C.current[1] ?? 0, T);
    }
    I.current = requestAnimationFrame(j);
  }, te = () => {
    const i = { passive: !0 };
    m.current.iMouse?.isNeeded && l.current && (l.current.addEventListener("mousemove", V, i), l.current.addEventListener("mouseout", M, i), l.current.addEventListener("mouseup", M, i), l.current.addEventListener("mousedown", H, i), l.current.addEventListener("touchmove", V, i), l.current.addEventListener("touchend", M, i), l.current.addEventListener("touchstart", H, i)), m.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      ie,
      i
    ), l.current && (A.current = new ResizeObserver(Y), A.current.observe(l.current), window.addEventListener("resize", Y, i));
  }, Z = () => {
    const i = { passive: !0 };
    m.current.iMouse?.isNeeded && l.current && (l.current.removeEventListener("mousemove", V, i), l.current.removeEventListener("mouseout", M, i), l.current.removeEventListener("mouseup", M, i), l.current.removeEventListener("mousedown", H, i), l.current.removeEventListener("touchmove", V, i), l.current.removeEventListener("touchend", M, i), l.current.removeEventListener("touchstart", H, i)), m.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      ie,
      i
    ), A.current && (A.current.disconnect(), window.removeEventListener("resize", Y, i));
  };
  return re(() => {
    k.current = n;
  }, [n]), re(() => {
    const i = L.current;
    function s() {
      q();
      const o = w.current;
      o && l.current && (o.clearColor(...u), o.clearDepth(1), o.enable(o.DEPTH_TEST), o.depthFunc(o.LEQUAL), o.viewport(0, 0, l.current.width, l.current.height), l.current.height = l.current.clientHeight, l.current.width = l.current.clientWidth, se(), ae(), oe(ce(t || vn), e || Qe), pe(), requestAnimationFrame(j), te(), Y());
    }
    return requestAnimationFrame(s), () => {
      const o = w.current;
      if (o) {
        if (o.getExtension("WEBGL_lose_context")?.loseContext(), o.useProgram(null), o.deleteProgram(h.current ?? null), i.length > 0)
          for (const c of i)
            o.deleteTexture(c._webglTexture);
        h.current = null;
      }
      Z(), cancelAnimationFrame(I.current ?? 0);
    };
  }, []), /* @__PURE__ */ v(
    "canvas",
    {
      ref: l,
      style: { height: "100%", width: "100%", ...d }
    }
  );
}
const Sn = `
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
`, Cn = {
  colorA: "#ED8262",
  // peach  — gradient right
  colorB: "#E9607F",
  // pink   — gradient centre
  colorC: "#A1ADE5",
  // lavender — gradient left
  colorD: "#ffffff"
};
function Ae(t) {
  const e = t.replace("#", ""), r = e.length === 3 ? e.split("").map((d) => d + d).join("") : e, n = Number.parseInt(r.slice(0, 2), 16) / 255, u = Number.parseInt(r.slice(2, 4), 16) / 255, f = Number.parseInt(r.slice(4, 6), 16) / 255;
  return [n, u, f];
}
function Fn(t) {
  const e = yt(), { connecting: r, listening: n, thinking: u, buffering: f, disconnected: d, failed: g } = e.ai.orbVoiceAnimation;
  switch (t) {
    case "connecting":
    case "initializing":
      return r;
    case "listening":
      return n;
    case "thinking":
      return u;
    case "pre-connect-buffering":
      return f;
    case "disconnected":
      return d;
    case "failed":
      return g;
    default:
      return null;
  }
}
function ti({
  state: t = "connecting",
  audioTrack: e,
  colors: r,
  className: n,
  ref: u,
  ...f
}) {
  const { speed: d, intensity: g, complexity: T, scale: E, statePhase: x } = hn(t, e), y = Fn(t), R = {
    ...Cn,
    ...r
  }, l = {
    uColorA: { type: "3fv", value: Ae(R.colorA) },
    uColorB: { type: "3fv", value: Ae(R.colorB) },
    uColorC: { type: "3fv", value: Ae(R.colorC) },
    uIntensity: { type: "1f", value: g },
    uSpeed: { type: "1f", value: d },
    uComplexity: { type: "1f", value: T },
    uStatePhase: { type: "1f", value: x }
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: u,
      className: G("flex flex-col items-center gap-3", n),
      ...f,
      children: [
        /* @__PURE__ */ v(
          "div",
          {
            style: {
              width: 90,
              height: 90,
              borderRadius: "50%",
              overflow: "hidden",
              transform: `scale(${E})`,
              transformOrigin: "center"
            },
            children: /* @__PURE__ */ v(
              Nn,
              {
                fs: Sn,
                uniforms: l,
                clearColor: [0, 0, 0, 0],
                contextAttributes: { alpha: !0 },
                style: { display: "block" }
              }
            )
          }
        ),
        /* @__PURE__ */ v(gt, { children: y !== null && /* @__PURE__ */ v(
          me.span,
          {
            className: "shine-text text-sm font-medium",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3 },
            children: y
          },
          y
        ) })
      ]
    }
  );
}
const ri = ({
  text: t,
  confirmationText: e,
  onConfirm: r,
  cancelText: n,
  onCancel: u
}) => /* @__PURE__ */ O("div", { className: "flex flex-col gap-2", children: [
  t && /* @__PURE__ */ v("p", { children: t }),
  /* @__PURE__ */ O("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ v(
      Ne,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        icon: sr,
        onClick: r,
        label: e
      }
    ),
    /* @__PURE__ */ v(
      Ne,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: u,
        label: n
      }
    )
  ] })
] }), Ln = he({
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
}), Ft = he({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), _n = he({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), ge = he({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), In = ({
  description: t,
  isRevealed: e,
  onAskOne: r
}) => {
  const n = yt(), u = wt();
  return /* @__PURE__ */ O(dt, { children: [
    t && /* @__PURE__ */ v("span", { className: G(_n(), "truncate"), children: t }),
    /* @__PURE__ */ v(gt, { children: r && e && /* @__PURE__ */ v(
      me.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: u ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ v(
          Nt,
          {
            size: "md",
            label: n.ai.ask,
            onClick: (f) => {
              f.stopPropagation(), r();
            }
          }
        )
      }
    ) })
  ] });
}, Mn = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), Un = ({ balance: t }) => /* @__PURE__ */ v(
  dr,
  {
    amount: t.amount,
    percentage: t.percentage ?? void 0,
    invertStatus: t.invertStatus,
    hint: t.hint
  }
), Dn = (t) => {
  const {
    heading: e,
    label: r,
    content: n,
    shouldFadeContent: u = !1,
    fadeTransition: f
  } = t;
  return /* @__PURE__ */ O("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ v("span", { className: G(Ft()), children: e }),
    /* @__PURE__ */ O(
      me.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: u ? 0 : 1 },
        transition: f,
        children: [
          n === "person" && /* @__PURE__ */ O("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ v(
              ar,
              {
                firstName: t.avatar.firstName,
                lastName: t.avatar.lastName,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ v("span", { className: G(ge()), children: r })
          ] }),
          n === "people" && /* @__PURE__ */ v(
            cr,
            {
              type: "person",
              avatars: t.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ O("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ v(
              ur,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ v("span", { className: G(ge()), children: r })
          ] }),
          n === "company" && /* @__PURE__ */ O("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ v(
              lr,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ v("span", { className: G(ge()), children: r })
          ] }),
          n === "alert" && /* @__PURE__ */ v(fr, { text: t.alertLabel, level: t.level }),
          n === "balance" && /* @__PURE__ */ v(Un, { balance: t.balance })
        ]
      }
    ),
    r && !Mn.has(n) && /* @__PURE__ */ v(
      me.span,
      {
        className: G(ge()),
        animate: { opacity: u ? 0 : 1 },
        transition: f,
        children: r
      }
    )
  ] });
}, Lt = {
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
function Pn(t, e) {
  const r = t[0]?.value ?? 0, n = t[t.length - 1]?.value ?? 0, u = Math.sign(n - r), f = e ? u * -1 : u;
  return f > 0 ? "positive" : f < 0 ? "negative" : "neutral";
}
const On = ({
  cx: t,
  cy: e,
  index: r,
  dataLength: n,
  color: u
}) => r !== n - 1 || t == null || e == null ? null : /* @__PURE__ */ v("circle", { cx: t, cy: e, r: 2, fill: u, stroke: "none" }), Bn = ({
  label: t,
  direction: e
}) => {
  const r = Lt[e];
  return /* @__PURE__ */ v(
    "span",
    {
      className: G(
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
}, Vn = ({
  data: t,
  label: e,
  invertStatus: r
}) => {
  const u = `sparkline-gradient-${Bt().replace(/:/g, "")}`, f = Pn(t, r), d = Lt[f];
  return /* @__PURE__ */ v("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ O(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${f} trend`,
      children: [
        /* @__PURE__ */ v(mr, { width: "100%", height: "100%", children: /* @__PURE__ */ O(
          hr,
          {
            data: t,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ v("defs", { children: /* @__PURE__ */ O("linearGradient", { id: u, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ v("stop", { offset: "5%", stopColor: d.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ v("stop", { offset: "95%", stopColor: d.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ v(pr, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ v(
                vr,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: d.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${u})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (g) => /* @__PURE__ */ Vt(
                    On,
                    {
                      ...g,
                      key: g.index,
                      dataLength: t.length,
                      color: d.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ v(Bn, { label: e, direction: f })
      ]
    }
  ) });
}, _t = we(
  (t, e) => {
    const {
      description: r,
      heading: n,
      label: u,
      selected: f = !1,
      onClick: d,
      onAskOne: g,
      className: T,
      ...E
    } = t, [x, y] = de(!1), [R, l] = de(!1), w = x || R, D = wt(), h = w && !!g, F = {
      duration: D ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, I = () => {
      d?.();
    }, U = (b) => {
      b.currentTarget === b.target && (b.key === "Enter" || b.key === " ") && (b.preventDefault(), d?.());
    };
    return /* @__PURE__ */ O("div", { className: "relative", children: [
      f && /* @__PURE__ */ O(dt, { children: [
        /* @__PURE__ */ v(
          "div",
          {
            "data-testid": "selected-border",
            className: G(
              "absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient"
            )
          }
        ),
        /* @__PURE__ */ v(
          "div",
          {
            "aria-hidden": !0,
            className: G(
              "pointer-events-none absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient opacity-80 blur-sm"
            )
          }
        )
      ] }),
      /* @__PURE__ */ O(
        "div",
        {
          ref: e,
          role: d ? "button" : void 0,
          tabIndex: d ? 0 : void 0,
          className: G(
            Ln({ selected: f }),
            f && "relative border-transparent",
            d && "cursor-pointer select-none",
            d && gr(),
            T
          ),
          onClick: d ? I : void 0,
          onKeyDown: d ? U : void 0,
          onMouseEnter: () => y(!0),
          onMouseLeave: () => y(!1),
          onFocus: () => l(!0),
          onBlur: () => l(!1),
          children: [
            /* @__PURE__ */ v(
              In,
              {
                description: r,
                isRevealed: w,
                onAskOne: g
              }
            ),
            E.content === "sparkline" ? /* @__PURE__ */ O("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ v("span", { className: G(Ft()), children: n }),
              /* @__PURE__ */ v(
                me.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: h ? 0 : 1 },
                  transition: F,
                  children: /* @__PURE__ */ v(
                    Vn,
                    {
                      data: E.data,
                      label: u ?? "",
                      invertStatus: E.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ v(
              Dn,
              {
                heading: n,
                label: u,
                shouldFadeContent: h,
                fadeTransition: F,
                ...E
              }
            )
          ]
        }
      )
    ] });
  }
);
_t.displayName = "F0AiInsightCardInternal";
const $n = ["className"], It = we((t, e) => {
  const r = $n.reduce((n, u) => {
    const { [u]: f, ...d } = n;
    return d;
  }, t);
  return /* @__PURE__ */ v(_t, { ref: e, ...r });
});
It.displayName = "F0AiInsightCard";
const kn = () => /* @__PURE__ */ O(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ v(le, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ O("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ O("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ v(le, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ v(le, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ O("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ v(le, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ v(le, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), ni = yr(
  wr(It, kn)
), ii = [
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
  Kn as A,
  Qn as F,
  qn as a,
  Wn as b,
  ei as c,
  ti as d,
  ri as e,
  ni as f,
  ii as g,
  Nt as h,
  Gr as i,
  jn as o,
  Zn as u
};
