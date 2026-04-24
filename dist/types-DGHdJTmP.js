import { defaultTranslations as et } from "./i18n-provider-defaults.js";
import { jsx as f, jsxs as F, Fragment as Ve } from "react/jsx-runtime";
import { useInsertionEffect as tt, forwardRef as fe, createContext as rt, useContext as nt, useRef as _, useEffect as ce, useState as le, useCallback as it, useMemo as at, useId as st, createElement as ot } from "react";
import { r as ct, o as lt, p as ut, q as dt, s as Be, t as ft, v as mt, w as ht, x as pt, y as vt, z as ke, A as gt, V as yt, B as xt, D as bt, E as Tt, S as Et, H as wt, G as ue, J as At, K as St, L as Rt, M as Nt, N as Ct, O as k, P as te, Q as ye, R as Ft, u as It, T as $e, U as Mt, W as de, X as Lt, Y as _t, Z as Ut, _ as Dt, $ as Pt, a0 as Ot, a1 as Vt, a2 as Bt, a3 as kt, a4 as $t, a5 as zt, a6 as Xt, a7 as Gt, a8 as ee } from "./F0AiChat-00JETxUi.js";
import { useTrackVolume as qt } from "@livekit/components-react";
import './types.css';function jt(t, e, r) {
  tt(() => t.on(e, r), [t, e, r]);
}
function ve(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function ze(t, e, r, n) {
  return typeof t == "string" && ve(e) ? ct(t, r, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function Yt(t, e, r) {
  return t * (e + 1);
}
function xe(t, e, r, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : n.get(e) ?? t;
}
const Ht = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function Xe(t, e) {
  return lt(t) ? t[Ht(0, t.length, e)] : t;
}
function Kt(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    s.at > e && s.at < r && (dt(t, s), n--);
  }
}
function Wt(t, e, r, n, s, c) {
  Kt(t, s, c);
  for (let u = 0; u < e.length; u++)
    t.push({
      value: e[u],
      at: ut(s, c, n[u]),
      easing: Xe(r, u)
    });
}
function Zt(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] = t[r] / (e + 1);
}
function Qt(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const Jt = "easeInOut", er = 20;
function tr(t, { defaultTransition: e = {}, ...r } = {}, n, s) {
  const c = e.duration || 0.3, u = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = {}, A = /* @__PURE__ */ new Map();
  let T = 0, b = 0, S = 0;
  for (let d = 0; d < t.length; d++) {
    const v = t[d];
    if (typeof v == "string") {
      A.set(v, b);
      continue;
    } else if (!Array.isArray(v)) {
      A.set(v.name, xe(b, v.at, T, A));
      continue;
    }
    let [U, h, R = {}] = v;
    R.at !== void 0 && (b = xe(b, R.at, T, A));
    let I = 0;
    const D = (E, N, C, M = 0, $ = 0) => {
      const w = rr(E), { delay: p = 0, times: B = ft(w), type: K = "keyframes", repeat: G, repeatType: ge, repeatDelay: me = 0, ...W } = N;
      let { ease: P = e.ease || "easeOut", duration: L } = N;
      const q = typeof p == "function" ? p(M, $) : p, J = w.length, re = pt(K) ? K : s?.[K];
      if (J <= 2 && re) {
        let j = 100;
        if (J === 2 && ar(w)) {
          const H = w[1] - w[0];
          j = Math.abs(H);
        }
        const Y = { ...W };
        L !== void 0 && (Y.duration = vt(L));
        const Z = mt(Y, j, re);
        P = Z.ease, L = Z.duration;
      }
      L ?? (L = c);
      const ne = b + q;
      B.length === 1 && B[0] === 0 && (B[1] = 1);
      const ie = B.length - w.length;
      if (ie > 0 && ht(B, ie), w.length === 1 && w.unshift(null), G) {
        ke(G < er, "Repeat count too high, must be less than 20"), L = Yt(L, G);
        const j = [...w], Y = [...B];
        P = Array.isArray(P) ? [...P] : [P];
        const Z = [...P];
        for (let H = 0; H < G; H++) {
          w.push(...j);
          for (let i = 0; i < j.length; i++)
            B.push(Y[i] + (H + 1)), P.push(i === 0 ? "linear" : Xe(Z, i - 1));
        }
        Zt(B, G);
      }
      const ae = ne + L;
      Wt(C, w, P, B, ne, ae), I = Math.max(q + L, I), S = Math.max(ae, S);
    };
    if (Be(U)) {
      const E = be(U, y);
      D(h, R, Te("default", E));
    } else {
      const E = ze(U, h, n, x), N = E.length;
      for (let C = 0; C < N; C++) {
        h = h, R = R;
        const M = E[C], $ = be(M, y);
        for (const w in h)
          D(h[w], nr(R, w), Te(w, $), C, N);
      }
    }
    T = b, b += I;
  }
  return y.forEach((d, v) => {
    for (const U in d) {
      const h = d[U];
      h.sort(Qt);
      const R = [], I = [], D = [];
      for (let N = 0; N < h.length; N++) {
        const { at: C, value: M, easing: $ } = h[N];
        R.push(M), I.push(gt(0, S, C)), D.push($ || "easeOut");
      }
      I[0] !== 0 && (I.unshift(0), R.unshift(R[0]), D.unshift(Jt)), I[I.length - 1] !== 1 && (I.push(1), R.push(null)), u.has(v) || u.set(v, {
        keyframes: {},
        transition: {}
      });
      const E = u.get(v);
      E.keyframes[U] = R, E.transition[U] = {
        ...e,
        duration: S,
        ease: D,
        times: I,
        ...r
      };
    }
  }), u;
}
function be(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function Te(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function rr(t) {
  return Array.isArray(t) ? t : [t];
}
function nr(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const ir = (t) => typeof t == "number", ar = (t) => t.every(ir);
function sr(t, e) {
  return t in e;
}
class or extends yt {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, r) {
    if (sr(r, e)) {
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
    return xt();
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
function cr(t) {
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
  }, r = bt(t) && !Tt(t) ? new Et(e) : new wt(e);
  r.mount(t), ue.set(t, r);
}
function lr(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, r = new or(e);
  r.mount(t), ue.set(t, r);
}
function ur(t, e) {
  return Be(t) || typeof t == "number" || typeof t == "string" && !ve(e);
}
function Ge(t, e, r, n) {
  const s = [];
  if (ur(t, e))
    s.push(At(t, ve(e) && e.default || e, r && (r.default || r)));
  else {
    const c = ze(t, e, n), u = c.length;
    ke(!!u, "No valid elements provided.");
    for (let y = 0; y < u; y++) {
      const x = c[y], A = x instanceof Element ? cr : lr;
      ue.has(x) || A(x);
      const T = ue.get(x), b = { ...r };
      "delay" in b && typeof b.delay == "function" && (b.delay = b.delay(y, u)), s.push(...St(T, { ...e, transition: b }, {}));
    }
  }
  return s;
}
function dr(t, e, r) {
  const n = [];
  return tr(t, e, r, { spring: Rt }).forEach(({ keyframes: c, transition: u }, y) => {
    n.push(...Ge(y, c, u));
  }), n;
}
class fr {
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
      r.forEach((n, s) => {
        n && n(), this.animations[s].stop();
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
class mr extends fr {
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function hr(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function pr(t) {
  function e(r, n, s) {
    let c = [];
    return hr(r) ? c = dr(r, n, t) : c = Ge(r, n, s, t), new mr(c);
  }
  return e;
}
const vr = pr(), gr = (t, e) => /* @__PURE__ */ f(
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
), yr = fe(gr), xr = [
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
], qe = fe((t, e) => {
  const r = xr.reduce((n, s) => {
    const { [s]: c, ...u } = n;
    return u;
  }, t);
  return /* @__PURE__ */ f(
    Nt,
    {
      ...r,
      variant: "ai",
      ref: e,
      iconRotate: t.icon == yr
    }
  );
});
qe.displayName = "AIButton";
const an = ["xs", "sm", "md", "lg"], sn = [
  "inProgress",
  "executing",
  "completed"
], on = {
  ai: et.ai
}, je = rt(null);
function cn({
  children: t,
  translations: e
}) {
  return /* @__PURE__ */ f(je.Provider, { value: e, children: t });
}
function ln() {
  const t = nt(je);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
class un {
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
const Ee = ["lowp", "mediump", "highp"], br = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, Tr = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, we = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Ae = "iTime", Se = "iTimeDelta", Re = "iDate", Ne = "iFrame", Ce = "iMouse", Fe = "iResolution", Er = "iChannel", Ie = "iChannelResolution", Me = "iDeviceOrientation";
function wr(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function Ar(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function Sr(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const Rr = (t, e, r, n) => {
  if (Sr(r, n))
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
}, Nr = (t) => {
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
        X(
          `The uniform type "${t}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, pe = 9729, Le = 9728, Cr = 9987, _e = 33071, Ue = 10497;
class Fr {
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
    const { gl: s } = this, c = 0, u = s.RGBA, y = s.RGBA, x = s.UNSIGNED_BYTE;
    s.bindTexture(s.TEXTURE_2D, e), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, n), s.texImage2D(
      s.TEXTURE_2D,
      c,
      u,
      y,
      x,
      r
    );
  };
  setupVideo = (e) => {
    const r = document.createElement("video");
    let n = !1, s = !1;
    r.autoplay = !0, r.muted = !0, r.loop = !0, r.crossOrigin = "anonymous";
    const c = () => {
      n && s && (this.isLoaded = !0);
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
        s = !0, c();
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
    X(
      `Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: r } = this, {
      url: n,
      wrapS: s,
      wrapT: c,
      minFilter: u,
      magFilter: y,
      flipY: x = -1
    } = e;
    if (!n)
      return Promise.reject(
        new Error(
          X(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const A = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), T = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (A === null && T === null)
      return Promise.reject(
        new Error(
          X(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: s, wrapT: c, minFilter: u, magFilter: y, flipY: x });
    const b = 0, S = r.RGBA, d = 1, v = 1, U = 0, h = r.RGBA, R = r.UNSIGNED_BYTE, I = new Uint8Array([255, 255, 255, 0]), D = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, D), r.texImage2D(
      r.TEXTURE_2D,
      b,
      S,
      d,
      v,
      U,
      h,
      R,
      I
    ), T) {
      const M = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = D, this.source = M, this.isVideo = !0, M.play().then(() => this);
    }
    async function E() {
      return new Promise((M, $) => {
        const w = new Image();
        w.crossOrigin = "anonymous", w.onload = () => {
          M(w);
        }, w.onerror = () => {
          $(new Error(X(`failed loading url: ${n}`)));
        }, w.src = n ?? "";
      });
    }
    let N = await E(), C = (N.width & N.width - 1) === 0 && (N.height & N.height - 1) === 0;
    return (e.wrapS !== _e || e.wrapT !== _e || e.minFilter !== Le && e.minFilter !== pe) && !C && (N = this.makePowerOf2(N), C = !0), r.bindTexture(r.TEXTURE_2D, D), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x), r.texImage2D(
      r.TEXTURE_2D,
      b,
      S,
      h,
      R,
      N
    ), C && e.minFilter !== Le && e.minFilter !== pe && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_S,
      this.wrapS || Ue
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_WRAP_T,
      this.wrapT || Ue
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MIN_FILTER,
      this.minFilter || Cr
    ), r.texParameteri(
      r.TEXTURE_2D,
      r.TEXTURE_MAG_FILTER,
      this.magFilter || pe
    ), this._webglTexture = D, this.source = N, this.isVideo = !1, this.isLoaded = !0, this.width = N.width || 0, this.height = N.height || 0, this;
  };
}
const X = (t) => `react-shaders: ${t}`, De = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, Pe = (t, e, r) => t * (1 - r) + e * r, Ir = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function Mr({
  fs: t,
  vs: e = we,
  textures: r = [],
  uniforms: n,
  clearColor: s = [0, 0, 0, 1],
  precision: c = "highp",
  style: u,
  contextAttributes: y = {},
  lerp: x = 1,
  devicePixelRatio: A = 1,
  onDoneLoadingTextures: T,
  onError: b = console.error,
  onWarning: S = console.warn
}) {
  const d = _(null), v = _(null), U = _(null), h = _(null), R = _(void 0), I = _(void 0), D = _(!1), E = _(void 0), N = _(0), C = _([0, 0]), M = _([]), $ = _(0), w = _(void 0), p = _({
    [Ae]: { type: "float", isNeeded: !1, value: 0 },
    [Se]: { type: "float", isNeeded: !1, value: 0 },
    [Re]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Ce]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Fe]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Ne]: { type: "int", isNeeded: !1, value: 0 },
    [Me]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), B = _(n), K = (i, o) => {
    const a = "width" in i ? i.width ?? 0 : 0, m = "height" in i ? i.height ?? 0 : 0, l = p.current.iChannelResolution;
    if (!l) return;
    const g = Array.isArray(l.value) ? l.value : l.value = [];
    g[o * 3] = a * A, g[o * 3 + 1] = m * A, g[o * 3 + 2] = 0;
  }, G = () => {
    d.current && (v.current = d.current.getContext("webgl", y) || d.current.getContext(
      "experimental-webgl",
      y
    ), v.current?.getExtension("OES_standard_derivatives"), v.current?.getExtension("EXT_shader_texture_lod"));
  }, ge = () => {
    const i = v.current;
    U.current = i?.createBuffer() ?? null, i?.bindBuffer(i.ARRAY_BUFFER, U.current);
    const o = [
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
    i?.bufferData(i.ARRAY_BUFFER, new Float32Array(o), i.STATIC_DRAW);
  }, me = ({
    alpha: i,
    beta: o,
    gamma: a
  }) => {
    p.current.iDeviceOrientation.value = [
      i ?? 0,
      o ?? 0,
      a ?? 0,
      window.orientation ?? 0
    ];
  }, W = (i) => {
    const [o = 0, a = 0] = De(i), m = o - (E.current?.left ?? 0) - window.pageXOffset, l = (E.current?.height ?? 0) - a - (E.current?.top ?? 0) - window.pageYOffset;
    D.current = !0;
    const g = Array.isArray(p.current.iMouse?.value) ? p.current.iMouse.value : void 0;
    g && (g[2] = m, g[3] = l), C.current[0] = m, C.current[1] = l;
  }, P = (i) => {
    E.current = d.current?.getBoundingClientRect();
    const [o = 0, a = 0] = De(i), m = o - (E.current?.left ?? 0), l = (E.current?.height ?? 0) - a - (E.current?.top ?? 0);
    if (x !== 1)
      C.current[0] = m, C.current[1] = l;
    else {
      const g = Array.isArray(p.current.iMouse?.value) ? p.current.iMouse.value : void 0;
      g && (g[0] = m, g[1] = l);
    }
  }, L = () => {
    const i = Array.isArray(p.current.iMouse?.value) ? p.current.iMouse.value : void 0;
    i && (i[2] = 0, i[3] = 0);
  }, q = () => {
    const i = v.current;
    if (!i) return;
    E.current = d.current?.getBoundingClientRect();
    const o = A, a = Math.floor(
      (E.current?.width ?? 1) * o
    ), m = Math.floor(
      (E.current?.height ?? 1) * o
    );
    if (i.canvas.width = a, i.canvas.height = m, p.current.iResolution?.isNeeded && h.current) {
      const l = i.getUniformLocation(
        h.current,
        Fe
      );
      i.uniform2fv(l, [i.canvas.width, i.canvas.height]);
    }
  }, J = (i, o) => {
    const a = v.current;
    if (!a) return null;
    const m = a.createShader(i);
    if (!m) return null;
    if (a.shaderSource(m, o), a.compileShader(m), !a.getShaderParameter(m, a.COMPILE_STATUS)) {
      S?.(X(`Error compiling the shader:
${o}`));
      const l = a.getShaderInfoLog(m);
      a.deleteShader(m), b?.(X(`Shader compiler log: ${l}`));
    }
    return m;
  }, re = (i, o) => {
    const a = v.current;
    if (!a) return;
    const m = J(a.FRAGMENT_SHADER, i), l = J(a.VERTEX_SHADER, o);
    if (h.current = a.createProgram(), !(!h.current || !l || !m)) {
      if (a.attachShader(h.current, l), a.attachShader(h.current, m), a.linkProgram(h.current), !a.getProgramParameter(h.current, a.LINK_STATUS)) {
        b?.(
          X(
            `Unable to initialize the shader program: ${a.getProgramInfoLog(
              h.current
            )}`
          )
        );
        return;
      }
      a.useProgram(h.current), R.current = a.getAttribLocation(
        h.current,
        "aVertexPosition"
      ), a.enableVertexAttribArray(R.current);
    }
  }, ne = () => {
    if (n)
      for (const i of Object.keys(n)) {
        const o = n[i];
        if (!o) continue;
        const { value: a, type: m } = o, l = Nr(m);
        if (!l) continue;
        const g = {};
        if (wr(m, a)) {
          const O = m.length, z = Number.parseInt(m.charAt(O - 3)), Q = Math.floor(a.length / (z * z));
          a.length > z * z && (g.arraySize = `[${Q}]`);
        } else Ar(m, a) && (g.arraySize = `[${Math.floor(a.length / Number.parseInt(m.charAt(0)))}]`);
        p.current[i] = {
          type: l,
          isNeeded: !1,
          value: a,
          ...g
        };
      }
  }, ie = () => {
    const i = v.current;
    if (i)
      if (r && r.length > 0) {
        p.current[`${Ie}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const o = r.map(
          (a, m) => (p.current[`${Er}${m}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, K(a, m), M.current[m] = new Fr(i), M.current[m]?.load(a).then((l) => {
            K(l, m);
          }))
        );
        Promise.all(o).then(() => {
          T && T();
        }).catch((a) => {
          b?.(a), T && T();
        });
      } else T && T();
  }, ae = (i) => {
    const o = Ee.includes(c ?? "highp"), a = `precision ${o ? c : Ee[1]} float;
`;
    o || S?.(
      X(
        `wrong precision type ${c}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let m = a.concat(`#define DPR ${A.toFixed(1)}
`).concat(i.replace(/texture\(/g, "texture2D("));
    for (const g of Object.keys(p.current))
      if (i.includes(g)) {
        const O = p.current[g];
        if (!O) continue;
        m = Ir(
          m,
          `uniform ${O.type} ${g}${O.arraySize || ""}; 
`,
          m.lastIndexOf(a) + a.length
        ), O.isNeeded = !0;
      }
    return i.includes("mainImage") && (m = m.concat(br)), m;
  }, j = (i) => {
    const o = v.current;
    if (!o || !h.current) return;
    const a = $.current ? (i - $.current) / 1e3 : 0;
    $.current = i;
    const m = B.current;
    if (m)
      for (const l of Object.keys(m)) {
        const g = m[l];
        if (g && p.current[l]?.isNeeded) {
          if (!h.current) return;
          const O = o.getUniformLocation(
            h.current,
            l
          );
          if (!O) return;
          Rr(
            o,
            O,
            g.type,
            g.value
          );
        }
      }
    if (p.current.iMouse?.isNeeded) {
      const l = o.getUniformLocation(
        h.current,
        Ce
      );
      o.uniform4fv(l, p.current.iMouse.value);
    }
    if (p.current.iChannelResolution?.isNeeded) {
      const l = o.getUniformLocation(
        h.current,
        Ie
      );
      o.uniform3fv(
        l,
        p.current.iChannelResolution.value
      );
    }
    if (p.current.iDeviceOrientation?.isNeeded) {
      const l = o.getUniformLocation(
        h.current,
        Me
      );
      o.uniform4fv(
        l,
        p.current.iDeviceOrientation.value
      );
    }
    if (p.current.iTime?.isNeeded) {
      const l = o.getUniformLocation(
        h.current,
        Ae
      );
      o.uniform1f(l, N.current += a);
    }
    if (p.current.iTimeDelta?.isNeeded) {
      const l = o.getUniformLocation(
        h.current,
        Se
      );
      o.uniform1f(l, a);
    }
    if (p.current.iDate?.isNeeded) {
      const l = /* @__PURE__ */ new Date(), g = l.getMonth() + 1, O = l.getDate(), z = l.getFullYear(), Q = l.getHours() * 60 * 60 + l.getMinutes() * 60 + l.getSeconds() + l.getMilliseconds() * 1e-3, he = o.getUniformLocation(
        h.current,
        Re
      );
      o.uniform4fv(he, [z, g, O, Q]);
    }
    if (p.current.iFrame?.isNeeded) {
      const l = o.getUniformLocation(
        h.current,
        Ne
      ), g = p.current.iFrame.value;
      o.uniform1i(l, g), p.current.iFrame.value = g + 1;
    }
    if (M.current.length > 0)
      for (let l = 0; l < M.current.length; l++) {
        const g = M.current[l];
        if (!g) return;
        const { isVideo: O, _webglTexture: z, source: Q, flipY: he, isLoaded: Qe } = g;
        if (!Qe || !z || !Q) return;
        if (p.current[`iChannel${l}`]?.isNeeded) {
          if (!h.current) return;
          const Je = o.getUniformLocation(
            h.current,
            `iChannel${l}`
          );
          o.activeTexture(o.TEXTURE0 + l), o.bindTexture(o.TEXTURE_2D, z), o.uniform1i(Je, l), O && g.updateTexture(
            z,
            Q,
            he
          );
        }
      }
  }, Y = (i) => {
    const o = v.current;
    if (!o) return;
    o.viewport(0, 0, o.drawingBufferWidth, o.drawingBufferHeight), o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT), o.bindBuffer(o.ARRAY_BUFFER, U.current), o.vertexAttribPointer(
      R.current ?? 0,
      3,
      o.FLOAT,
      !1,
      0,
      0
    ), j(i), o.drawArrays(o.TRIANGLE_STRIP, 0, 4);
    const a = p.current.iMouse?.value;
    if (p.current.iMouse?.isNeeded && x !== 1 && Array.isArray(a)) {
      const m = a[0] ?? 0, l = a[1] ?? 0;
      a[0] = Pe(m, C.current[0] ?? 0, x), a[1] = Pe(l, C.current[1] ?? 0, x);
    }
    I.current = requestAnimationFrame(Y);
  }, Z = () => {
    const i = { passive: !0 };
    p.current.iMouse?.isNeeded && d.current && (d.current.addEventListener("mousemove", P, i), d.current.addEventListener("mouseout", L, i), d.current.addEventListener("mouseup", L, i), d.current.addEventListener("mousedown", W, i), d.current.addEventListener("touchmove", P, i), d.current.addEventListener("touchend", L, i), d.current.addEventListener("touchstart", W, i)), p.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      me,
      i
    ), d.current && (w.current = new ResizeObserver(q), w.current.observe(d.current), window.addEventListener("resize", q, i));
  }, H = () => {
    const i = { passive: !0 };
    p.current.iMouse?.isNeeded && d.current && (d.current.removeEventListener("mousemove", P, i), d.current.removeEventListener("mouseout", L, i), d.current.removeEventListener("mouseup", L, i), d.current.removeEventListener("mousedown", W, i), d.current.removeEventListener("touchmove", P, i), d.current.removeEventListener("touchend", L, i), d.current.removeEventListener("touchstart", W, i)), p.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      me,
      i
    ), w.current && (w.current.disconnect(), window.removeEventListener("resize", q, i));
  };
  return ce(() => {
    B.current = n;
  }, [n]), ce(() => {
    const i = M.current;
    function o() {
      G();
      const a = v.current;
      a && d.current && (a.clearColor(...s), a.clearDepth(1), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.viewport(0, 0, d.current.width, d.current.height), d.current.height = d.current.clientHeight, d.current.width = d.current.clientWidth, ne(), ie(), re(ae(t || Tr), e || we), ge(), requestAnimationFrame(Y), Z(), q());
    }
    return requestAnimationFrame(o), () => {
      const a = v.current;
      if (a) {
        if (a.getExtension("WEBGL_lose_context")?.loseContext(), a.useProgram(null), a.deleteProgram(h.current ?? null), i.length > 0)
          for (const m of i)
            a.deleteTexture(m._webglTexture);
        h.current = null;
      }
      H(), cancelAnimationFrame(I.current ?? 0);
    };
  }, []), /* @__PURE__ */ f(
    "canvas",
    {
      ref: d,
      style: { height: "100%", width: "100%", ...u }
    }
  );
}
const Lr = `
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
}`, _r = 10, Ur = 2, Dr = 0.5, Pr = 0.2, Or = 1.5, V = {
  duration: 0.5,
  ease: "easeOut"
}, Oe = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function se(t) {
  const [e, r] = le(t), n = Ct(t), s = _(null);
  jt(n, "change", (u) => r(u));
  const c = it(
    (u, y) => {
      s.current = vr(n, u, y);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: s, animate: c };
}
function Vr(t, e) {
  const [r, n] = le(_r), {
    value: s,
    animate: c,
    motionValue: u
  } = se(Pr), { value: y, animate: x } = se(Ur), { value: A, animate: T } = se(Dr), { value: b, animate: S } = se(Or), d = qt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return ce(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), c(0.2, V), x(1.2, V), T(0.4, V), S(1, V);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), c(0.3, { type: "spring", duration: 1, bounce: 0.35 }), x(1, V), T(0.7, V), S([1.5, 2], Oe);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), c(0.3, V), x(0.5, V), T(1, V), S([0.5, 2.5], Oe);
        return;
      case "speaking":
        n(70), c(0.3, V), x(0.75, V), T(1.25, V), S(1.5, V);
        return;
    }
  }, [
    t,
    c,
    x,
    T,
    S
  ]), ce(() => {
    t === "speaking" && d > 0 && !u.isAnimating() && c(0.2 + 0.2 * d, { duration: 0 });
  }, [
    t,
    d,
    u,
    c,
    x,
    T,
    S
  ]), {
    speed: r,
    scale: s,
    amplitude: y,
    frequency: A,
    brightness: b
  };
}
const Br = te({
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
function kr(t) {
  const e = t.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, r, n, s] = e;
    return [r, n, s].map((u = "00") => parseInt(u, 16) / 255);
  }
}
function Ye({
  shape: t = 1,
  speed: e = 1,
  amplitude: r = 0.5,
  frequency: n = 0.5,
  scale: s = 0.2,
  blur: c = 1,
  color: u = "#FF355E",
  colorShift: y = 1,
  brightness: x = 1,
  themeMode: A = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: T,
  className: b,
  ...S
}) {
  const d = at(() => kr(u), [u]);
  return /* @__PURE__ */ f("div", { ref: T, className: b, ...S, children: /* @__PURE__ */ f(
    Mr,
    {
      fs: Lr,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: e },
        // Edge blur/softness
        uBlur: { type: "1f", value: c },
        // Shape scale
        uScale: { type: "1f", value: s },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: t },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: n },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: r },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: x },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: y },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: A === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: d ?? [0, 0.7, 1] }
      },
      onError: (v) => {
        console.error("Shader error:", v);
      },
      onWarning: (v) => {
        console.warn("Shader warning:", v);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
Ye.displayName = "AuraShader";
function dn({
  size: t = "lg",
  state: e,
  color: r,
  colorShift: n = 0.05,
  audioTrack: s,
  themeMode: c,
  className: u,
  ref: y,
  ...x
}) {
  const { speed: A, scale: T, amplitude: b, frequency: S, brightness: d } = Vr(e, s);
  return /* @__PURE__ */ f(
    Ye,
    {
      ref: y,
      blur: 0.2,
      color: r,
      colorShift: n,
      speed: A,
      scale: T,
      themeMode: c,
      amplitude: b,
      frequency: S,
      brightness: d,
      className: k(
        Br({ size: t }),
        "overflow-hidden rounded-full",
        u
      ),
      ...x
    }
  );
}
const fn = ({
  text: t,
  confirmationText: e,
  onConfirm: r,
  cancelText: n,
  onCancel: s
}) => /* @__PURE__ */ F("div", { className: "flex flex-col gap-2", children: [
  t && /* @__PURE__ */ f("p", { children: t }),
  /* @__PURE__ */ F("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ f(
      ye,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        icon: Ft,
        onClick: r,
        label: e
      }
    ),
    /* @__PURE__ */ f(
      ye,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: s,
        label: n
      }
    )
  ] })
] }), $r = te({
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
}), He = te({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), zr = te({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), oe = te({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), Xr = ({
  description: t,
  isRevealed: e,
  onAskOne: r
}) => {
  const n = It(), s = $e();
  return /* @__PURE__ */ F(Ve, { children: [
    t && /* @__PURE__ */ f("span", { className: k(zr(), "truncate"), children: t }),
    /* @__PURE__ */ f(Mt, { children: r && e && /* @__PURE__ */ f(
      de.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: s ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ f(
          qe,
          {
            size: "md",
            label: n.ai.ask,
            onClick: (c) => {
              c.stopPropagation(), r();
            }
          }
        )
      }
    ) })
  ] });
}, Gr = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), qr = ({ balance: t }) => /* @__PURE__ */ f(
  Ot,
  {
    amount: t.amount,
    percentage: t.percentage ?? void 0,
    invertStatus: t.invertStatus,
    hint: t.hint
  }
), jr = (t) => {
  const {
    heading: e,
    label: r,
    content: n,
    shouldFadeContent: s = !1,
    fadeTransition: c
  } = t;
  return /* @__PURE__ */ F("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ f("span", { className: k(He()), children: e }),
    /* @__PURE__ */ F(
      de.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: s ? 0 : 1 },
        transition: c,
        children: [
          n === "person" && /* @__PURE__ */ F("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ f(
              Lt,
              {
                firstName: t.avatar.firstName,
                lastName: t.avatar.lastName,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ f("span", { className: k(oe()), children: r })
          ] }),
          n === "people" && /* @__PURE__ */ f(
            _t,
            {
              type: "person",
              avatars: t.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ F("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ f(
              Ut,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ f("span", { className: k(oe()), children: r })
          ] }),
          n === "company" && /* @__PURE__ */ F("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ f(
              Dt,
              {
                name: t.avatar.name,
                src: t.avatar.src,
                size: "xs"
              }
            ),
            r && /* @__PURE__ */ f("span", { className: k(oe()), children: r })
          ] }),
          n === "alert" && /* @__PURE__ */ f(Pt, { text: t.alertLabel, level: t.level }),
          n === "balance" && /* @__PURE__ */ f(qr, { balance: t.balance })
        ]
      }
    ),
    r && !Gr.has(n) && /* @__PURE__ */ f(
      de.span,
      {
        className: k(oe()),
        animate: { opacity: s ? 0 : 1 },
        transition: c,
        children: r
      }
    )
  ] });
}, Ke = {
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
function Yr(t, e) {
  const r = t[0]?.value ?? 0, n = t[t.length - 1]?.value ?? 0, s = Math.sign(n - r), c = e ? s * -1 : s;
  return c > 0 ? "positive" : c < 0 ? "negative" : "neutral";
}
const Hr = ({
  cx: t,
  cy: e,
  index: r,
  dataLength: n,
  color: s
}) => r !== n - 1 || t == null || e == null ? null : /* @__PURE__ */ f("circle", { cx: t, cy: e, r: 2, fill: s, stroke: "none" }), Kr = ({
  label: t,
  direction: e
}) => {
  const r = Ke[e];
  return /* @__PURE__ */ f(
    "span",
    {
      className: k(
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
}, Wr = ({
  data: t,
  label: e,
  invertStatus: r
}) => {
  const s = `sparkline-gradient-${st().replace(/:/g, "")}`, c = Yr(t, r), u = Ke[c];
  return /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ F(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${c} trend`,
      children: [
        /* @__PURE__ */ f(Vt, { width: "100%", height: "100%", children: /* @__PURE__ */ F(
          Bt,
          {
            data: t,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ F("linearGradient", { id: s, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ f("stop", { offset: "5%", stopColor: u.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ f("stop", { offset: "95%", stopColor: u.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ f(kt, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ f(
                $t,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: u.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${s})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (y) => /* @__PURE__ */ ot(
                    Hr,
                    {
                      ...y,
                      key: y.index,
                      dataLength: t.length,
                      color: u.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ f(Kr, { label: e, direction: c })
      ]
    }
  ) });
}, We = fe(
  (t, e) => {
    const {
      description: r,
      heading: n,
      label: s,
      selected: c = !1,
      onClick: u,
      onAskOne: y,
      className: x,
      ...A
    } = t, [T, b] = le(!1), [S, d] = le(!1), v = T || S, U = $e(), h = v && !!y, R = {
      duration: U ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, I = () => {
      u?.();
    }, D = (E) => {
      E.currentTarget === E.target && (E.key === "Enter" || E.key === " ") && (E.preventDefault(), u?.());
    };
    return /* @__PURE__ */ F("div", { className: "relative", children: [
      c && /* @__PURE__ */ F(Ve, { children: [
        /* @__PURE__ */ f(
          "div",
          {
            "data-testid": "selected-border",
            className: k(
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
            className: k(
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
          role: u ? "button" : void 0,
          tabIndex: u ? 0 : void 0,
          className: k(
            $r({ selected: c }),
            c && "relative border-transparent",
            u && "cursor-pointer select-none",
            u && zt(),
            x
          ),
          onClick: u ? I : void 0,
          onKeyDown: u ? D : void 0,
          onMouseEnter: () => b(!0),
          onMouseLeave: () => b(!1),
          onFocus: () => d(!0),
          onBlur: () => d(!1),
          children: [
            /* @__PURE__ */ f(
              Xr,
              {
                description: r,
                isRevealed: v,
                onAskOne: y
              }
            ),
            A.content === "sparkline" ? /* @__PURE__ */ F("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ f("span", { className: k(He()), children: n }),
              /* @__PURE__ */ f(
                de.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: h ? 0 : 1 },
                  transition: R,
                  children: /* @__PURE__ */ f(
                    Wr,
                    {
                      data: A.data,
                      label: s ?? "",
                      invertStatus: A.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ f(
              jr,
              {
                heading: n,
                label: s,
                shouldFadeContent: h,
                fadeTransition: R,
                ...A
              }
            )
          ]
        }
      )
    ] });
  }
);
We.displayName = "F0AiInsightCardInternal";
const Zr = ["className"], Ze = fe((t, e) => {
  const r = Zr.reduce((n, s) => {
    const { [s]: c, ...u } = n;
    return u;
  }, t);
  return /* @__PURE__ */ f(We, { ref: e, ...r });
});
Ze.displayName = "F0AiInsightCard";
const Qr = () => /* @__PURE__ */ F(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ f(ee, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ F("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ F("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ f(ee, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ f(ee, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ F("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ f(ee, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ f(ee, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), mn = Xt(
  Gt(Ze, Qr)
), hn = [
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
  cn as A,
  un as F,
  on as a,
  sn as b,
  dn as c,
  fn as d,
  mn as e,
  hn as f,
  qe as g,
  yr as h,
  an as o,
  ln as u
};
