import { jsx as X, jsxs as le } from "react/jsx-runtime";
import { useInsertionEffect as Xe, createContext as ke, useContext as $e, useRef as _, useEffect as ne, useState as _e, useCallback as ze, useMemo as Ye } from "react";
import { y as qe, z as We, D as He, G as je, J as Ne, K as Ke, M as Qe, N as Je, Q as Ze, R as et, V as Ce, W as tt, X as rt, Y as nt, Z as it, _ as ot, $ as at, a0 as st, a1 as ie, a2 as ct, a3 as ut, a4 as lt, a5 as ft, a6 as mt, a7 as dt, a8 as fe, a9 as ht } from "./F0AiChat-BJbUX4IN.js";
import { useTrackVolume as pt } from "@livekit/components-react";
function vt(t, e, r) {
  Xe(() => t.on(e, r), [t, e, r]);
}
function ce(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Ue(t, e, r, n) {
  return typeof t == "string" && ce(e) ? qe(t, r, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function gt(t, e, r) {
  return t * (e + 1);
}
function me(t, e, r, n) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : n.get(e) ?? t;
}
const yt = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function Oe(t, e) {
  return We(t) ? t[yt(0, t.length, e)] : t;
}
function Tt(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    const l = t[n];
    l.at > e && l.at < r && (je(t, l), n--);
  }
}
function Et(t, e, r, n, l, f) {
  Tt(t, l, f);
  for (let h = 0; h < e.length; h++)
    t.push({
      value: e[h],
      at: He(l, f, n[h]),
      easing: Oe(r, h)
    });
}
function At(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] = t[r] / (e + 1);
}
function wt(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const St = "easeInOut", bt = 20;
function xt(t, { defaultTransition: e = {}, ...r } = {}, n, l) {
  const f = e.duration || 0.3, h = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), g = {}, x = /* @__PURE__ */ new Map();
  let y = 0, T = 0, b = 0;
  for (let c = 0; c < t.length; c++) {
    const v = t[c];
    if (typeof v == "string") {
      x.set(v, T);
      continue;
    } else if (!Array.isArray(v)) {
      x.set(v.name, me(T, v.at, y, x));
      continue;
    }
    let [N, m, R = {}] = v;
    R.at !== void 0 && (T = me(T, R.at, y, x));
    let L = 0;
    const C = (w, S, I, F = 0, V = 0) => {
      const E = Rt(w), { delay: d = 0, times: P = Ke(E), type: W = "keyframes", repeat: k, repeatType: ue, repeatDelay: oe = 0, ...H } = S;
      let { ease: U = e.ease || "easeOut", duration: M } = S;
      const $ = typeof d == "function" ? d(F, V) : d, Q = E.length, J = Ze(W) ? W : l?.[W];
      if (Q <= 2 && J) {
        let z = 100;
        if (Q === 2 && Lt(E)) {
          const q = E[1] - E[0];
          z = Math.abs(q);
        }
        const Y = { ...H };
        M !== void 0 && (Y.duration = et(M));
        const j = Qe(Y, z, J);
        U = j.ease, M = j.duration;
      }
      M ?? (M = f);
      const Z = T + $;
      P.length === 1 && P[0] === 0 && (P[1] = 1);
      const ee = P.length - E.length;
      if (ee > 0 && Je(P, ee), E.length === 1 && E.unshift(null), k) {
        Ce(k < bt, "Repeat count too high, must be less than 20"), M = gt(M, k);
        const z = [...E], Y = [...P];
        U = Array.isArray(U) ? [...U] : [U];
        const j = [...U];
        for (let q = 0; q < k; q++) {
          E.push(...z);
          for (let i = 0; i < z.length; i++)
            P.push(Y[i] + (q + 1)), U.push(i === 0 ? "linear" : Oe(j, i - 1));
        }
        At(P, k);
      }
      const te = Z + M;
      Et(I, E, U, P, Z, te), L = Math.max($ + M, L), b = Math.max(te, b);
    };
    if (Ne(N)) {
      const w = de(N, A);
      C(m, R, he("default", w));
    } else {
      const w = Ue(N, m, n, g), S = w.length;
      for (let I = 0; I < S; I++) {
        m = m, R = R;
        const F = w[I], V = de(F, A);
        for (const E in m)
          C(m[E], It(R, E), he(E, V), I, S);
      }
    }
    y = T, T += L;
  }
  return A.forEach((c, v) => {
    for (const N in c) {
      const m = c[N];
      m.sort(wt);
      const R = [], L = [], C = [];
      for (let S = 0; S < m.length; S++) {
        const { at: I, value: F, easing: V } = m[S];
        R.push(F), L.push(tt(0, b, I)), C.push(V || "easeOut");
      }
      L[0] !== 0 && (L.unshift(0), R.unshift(R[0]), C.unshift(St)), L[L.length - 1] !== 1 && (L.push(1), R.push(null)), h.has(v) || h.set(v, {
        keyframes: {},
        transition: {}
      });
      const w = h.get(v);
      w.keyframes[N] = R, w.transition[N] = {
        ...e,
        duration: b,
        ease: C,
        times: L,
        ...r
      };
    }
  }), h;
}
function de(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function he(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function Rt(t) {
  return Array.isArray(t) ? t : [t];
}
function It(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const Ft = (t) => typeof t == "number", Lt = (t) => t.every(Ft);
function Mt(t, e) {
  return t in e;
}
class _t extends rt {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, r) {
    if (Mt(r, e)) {
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
    return nt();
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
  }, r = it(t) && !ot(t) ? new at(e) : new st(e);
  r.mount(t), ie.set(t, r);
}
function Ct(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, r = new _t(e);
  r.mount(t), ie.set(t, r);
}
function Ut(t, e) {
  return Ne(t) || typeof t == "number" || typeof t == "string" && !ce(e);
}
function De(t, e, r, n) {
  const l = [];
  if (Ut(t, e))
    l.push(ct(t, ce(e) && e.default || e, r && (r.default || r)));
  else {
    const f = Ue(t, e, n), h = f.length;
    Ce(!!h, "No valid elements provided.");
    for (let A = 0; A < h; A++) {
      const g = f[A], x = g instanceof Element ? Nt : Ct;
      ie.has(g) || x(g);
      const y = ie.get(g), T = { ...r };
      "delay" in T && typeof T.delay == "function" && (T.delay = T.delay(A, h)), l.push(...ut(y, { ...e, transition: T }, {}));
    }
  }
  return l;
}
function Ot(t, e, r) {
  const n = [];
  return xt(t, e, r, { spring: lt }).forEach(({ keyframes: f, transition: h }, A) => {
    n.push(...De(A, f, h));
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
      r.forEach((n, l) => {
        n && n(), this.animations[l].stop();
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
class Pt extends Dt {
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function Vt(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function Bt(t) {
  function e(r, n, l) {
    let f = [];
    return Vt(r) ? f = Ot(r, n, t) : f = De(r, n, l, t), new Pt(f);
  }
  return e;
}
const Gt = Bt(), mr = ["xs", "sm", "md", "lg"], dr = [
  "inProgress",
  "executing",
  "completed"
], hr = {
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    startNewChat: "Start new chat",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info and a lot of other things...",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    resourcesGroupTitle: "Resources",
    thinking: "Thinking...",
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
    ask: "Ask One"
  }
}, Pe = ke(null);
function pr({ children: t, translations: e }) {
  return X(Pe.Provider, {
    value: e,
    children: t
  });
}
function vr() {
  const t = $e(Pe);
  if (t === null)
    throw new Error("useAiChatTranslations must be used within an AiChatTranslationsProvider");
  return t;
}
const pe = ["lowp", "mediump", "highp"], Xt = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, kt = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, ve = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, ge = "iTime", ye = "iTimeDelta", Te = "iDate", Ee = "iFrame", Ae = "iMouse", we = "iResolution", $t = "iChannel", Se = "iChannelResolution", be = "iDeviceOrientation";
function zt(t, e) {
  return t.includes("Matrix") && Array.isArray(e);
}
function Yt(t, e) {
  return t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
function qt(t, e) {
  return !t.includes("v") && Array.isArray(e) && e.length > Number.parseInt(t.charAt(0));
}
const Wt = (t, e, r, n) => {
  if (qt(r, n))
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
}, Ht = (t) => {
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
      console.error(G(`The uniform type "${t}" is not valid, please make sure your uniform type is valid`));
  }
}, se = 9729, xe = 9728, jt = 9987, Re = 33071, Ie = 10497;
class Kt {
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
    const { gl: l } = this, f = 0, h = l.RGBA, A = l.RGBA, g = l.UNSIGNED_BYTE;
    l.bindTexture(l.TEXTURE_2D, e), l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, n), l.texImage2D(l.TEXTURE_2D, f, h, A, g, r);
  };
  setupVideo = (e) => {
    const r = document.createElement("video");
    let n = !1, l = !1;
    r.autoplay = !0, r.muted = !0, r.loop = !0, r.crossOrigin = "anonymous";
    const f = () => {
      n && l && (this.isLoaded = !0);
    };
    return r.addEventListener("playing", () => {
      n = !0, this.width = r.videoWidth || 0, this.height = r.videoHeight || 0, f();
    }, !0), r.addEventListener("timeupdate", () => {
      l = !0, f();
    }, !0), r.src = e, r;
  };
  makePowerOf2 = (e) => e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageBitmap ? (this.pow2canvas === void 0 && (this.pow2canvas = document.createElement("canvas")), this.pow2canvas.width = 2 ** Math.floor(Math.log(e.width) / Math.LN2), this.pow2canvas.height = 2 ** Math.floor(Math.log(e.height) / Math.LN2), this.pow2canvas.getContext("2d")?.drawImage(e, 0, 0, this.pow2canvas.width, this.pow2canvas.height), console.warn(G(`Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`)), this.pow2canvas) : e;
  load = async (e) => {
    const { gl: r } = this, { url: n, wrapS: l, wrapT: f, minFilter: h, magFilter: A, flipY: g = -1 } = e;
    if (!n)
      return Promise.reject(new Error(G("Missing url, please make sure to pass the url of your texture { url: ... }")));
    const x = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), y = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (x === null && y === null)
      return Promise.reject(new Error(G(`Please upload a video or an image with a valid format (url: ${n})`)));
    Object.assign(this, {
      url: n,
      wrapS: l,
      wrapT: f,
      minFilter: h,
      magFilter: A,
      flipY: g
    });
    const T = 0, b = r.RGBA, c = 1, v = 1, N = 0, m = r.RGBA, R = r.UNSIGNED_BYTE, L = new Uint8Array([255, 255, 255, 0]), C = r.createTexture();
    if (r.bindTexture(r.TEXTURE_2D, C), r.texImage2D(r.TEXTURE_2D, T, b, c, v, N, m, R, L), y) {
      const F = this.setupVideo(n);
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), this._webglTexture = C, this.source = F, this.isVideo = !0, F.play().then(() => this);
    }
    async function w() {
      return new Promise((F, V) => {
        const E = new Image();
        E.crossOrigin = "anonymous", E.onload = () => {
          F(E);
        }, E.onerror = () => {
          V(new Error(G(`failed loading url: ${n}`)));
        }, E.src = n ?? "";
      });
    }
    let S = await w(), I = (S.width & S.width - 1) === 0 && (S.height & S.height - 1) === 0;
    return (e.wrapS !== Re || e.wrapT !== Re || e.minFilter !== xe && e.minFilter !== se) && !I && (S = this.makePowerOf2(S), I = !0), r.bindTexture(r.TEXTURE_2D, C), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, g), r.texImage2D(r.TEXTURE_2D, T, b, m, R, S), I && e.minFilter !== xe && e.minFilter !== se && r.generateMipmap(r.TEXTURE_2D), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, this.wrapS || Ie), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, this.wrapT || Ie), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, this.minFilter || jt), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, this.magFilter || se), this._webglTexture = C, this.source = S, this.isVideo = !1, this.isLoaded = !0, this.width = S.width || 0, this.height = S.height || 0, this;
  };
}
const G = (t) => `react-shaders: ${t}`, Fe = (t) => {
  if ("changedTouches" in t) {
    const e = t.changedTouches[0];
    return [e?.clientX ?? 0, e?.clientY ?? 0];
  }
  return [t.clientX, t.clientY];
}, Le = (t, e, r) => t * (1 - r) + e * r, Qt = (t, e, r) => r > 0 ? t.substring(0, r) + e + t.substring(r, t.length) : e + t;
function Jt({ fs: t, vs: e = ve, textures: r = [], uniforms: n, clearColor: l = [0, 0, 0, 1], precision: f = "highp", style: h, contextAttributes: A = {}, lerp: g = 1, devicePixelRatio: x = 1, onDoneLoadingTextures: y, onError: T = console.error, onWarning: b = console.warn }) {
  const c = _(null), v = _(null), N = _(null), m = _(null), R = _(void 0), L = _(void 0), C = _(!1), w = _(void 0), S = _(0), I = _([0, 0]), F = _([]), V = _(0), E = _(void 0), d = _({
    [ge]: {
      type: "float",
      isNeeded: !1,
      value: 0
    },
    [ye]: {
      type: "float",
      isNeeded: !1,
      value: 0
    },
    [Te]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    },
    [Ae]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    },
    [we]: {
      type: "vec2",
      isNeeded: !1,
      value: [0, 0]
    },
    [Ee]: {
      type: "int",
      isNeeded: !1,
      value: 0
    },
    [be]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), P = _(n), W = (i, a) => {
    const o = "width" in i ? i.width ?? 0 : 0, u = "height" in i ? i.height ?? 0 : 0, s = d.current.iChannelResolution;
    if (!s) return;
    const p = Array.isArray(s.value) ? s.value : s.value = [];
    p[a * 3] = o * x, p[a * 3 + 1] = u * x, p[a * 3 + 2] = 0;
  }, k = () => {
    c.current && (v.current = c.current.getContext("webgl", A) || c.current.getContext("experimental-webgl", A), v.current?.getExtension("OES_standard_derivatives"), v.current?.getExtension("EXT_shader_texture_lod"));
  }, ue = () => {
    const i = v.current;
    N.current = i?.createBuffer() ?? null, i?.bindBuffer(i.ARRAY_BUFFER, N.current);
    const a = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0];
    i?.bufferData(i.ARRAY_BUFFER, new Float32Array(a), i.STATIC_DRAW);
  }, oe = ({ alpha: i, beta: a, gamma: o }) => {
    d.current.iDeviceOrientation.value = [i ?? 0, a ?? 0, o ?? 0, window.orientation ?? 0];
  }, H = (i) => {
    const [a = 0, o = 0] = Fe(i), u = a - (w.current?.left ?? 0) - window.pageXOffset, s = (w.current?.height ?? 0) - o - (w.current?.top ?? 0) - window.pageYOffset;
    C.current = !0;
    const p = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
    p && (p[2] = u, p[3] = s), I.current[0] = u, I.current[1] = s;
  }, U = (i) => {
    w.current = c.current?.getBoundingClientRect();
    const [a = 0, o = 0] = Fe(i), u = a - (w.current?.left ?? 0), s = (w.current?.height ?? 0) - o - (w.current?.top ?? 0);
    if (g !== 1)
      I.current[0] = u, I.current[1] = s;
    else {
      const p = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
      p && (p[0] = u, p[1] = s);
    }
  }, M = () => {
    const i = Array.isArray(d.current.iMouse?.value) ? d.current.iMouse.value : void 0;
    i && (i[2] = 0, i[3] = 0);
  }, $ = () => {
    const i = v.current;
    if (!i) return;
    w.current = c.current?.getBoundingClientRect();
    const a = x, o = Math.floor((w.current?.width ?? 1) * a), u = Math.floor((w.current?.height ?? 1) * a);
    if (i.canvas.width = o, i.canvas.height = u, d.current.iResolution?.isNeeded && m.current) {
      const s = i.getUniformLocation(m.current, we);
      i.uniform2fv(s, [i.canvas.width, i.canvas.height]);
    }
  }, Q = (i, a) => {
    const o = v.current;
    if (!o) return null;
    const u = o.createShader(i);
    if (!u) return null;
    if (o.shaderSource(u, a), o.compileShader(u), !o.getShaderParameter(u, o.COMPILE_STATUS)) {
      b?.(G(`Error compiling the shader:
${a}`));
      const s = o.getShaderInfoLog(u);
      o.deleteShader(u), T?.(G(`Shader compiler log: ${s}`));
    }
    return u;
  }, J = (i, a) => {
    const o = v.current;
    if (!o) return;
    const u = Q(o.FRAGMENT_SHADER, i), s = Q(o.VERTEX_SHADER, a);
    if (m.current = o.createProgram(), !(!m.current || !s || !u)) {
      if (o.attachShader(m.current, s), o.attachShader(m.current, u), o.linkProgram(m.current), !o.getProgramParameter(m.current, o.LINK_STATUS)) {
        T?.(G(`Unable to initialize the shader program: ${o.getProgramInfoLog(m.current)}`));
        return;
      }
      o.useProgram(m.current), R.current = o.getAttribLocation(m.current, "aVertexPosition"), o.enableVertexAttribArray(R.current);
    }
  }, Z = () => {
    if (n)
      for (const i of Object.keys(n)) {
        const a = n[i];
        if (!a) continue;
        const { value: o, type: u } = a, s = Ht(u);
        if (!s) continue;
        const p = {};
        if (zt(u, o)) {
          const O = u.length, B = Number.parseInt(u.charAt(O - 3)), K = Math.floor(o.length / (B * B));
          o.length > B * B && (p.arraySize = `[${K}]`);
        } else Yt(u, o) && (p.arraySize = `[${Math.floor(o.length / Number.parseInt(u.charAt(0)))}]`);
        d.current[i] = {
          type: s,
          isNeeded: !1,
          value: o,
          ...p
        };
      }
  }, ee = () => {
    const i = v.current;
    if (i)
      if (r && r.length > 0) {
        d.current[`${Se}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${r.length}]`,
          value: []
        };
        const a = r.map((o, u) => (d.current[`${$t}${u}`] = {
          type: "sampler2D",
          isNeeded: !1
        }, W(o, u), F.current[u] = new Kt(i), F.current[u]?.load(o).then((s) => {
          W(s, u);
        })));
        Promise.all(a).then(() => {
          y && y();
        }).catch((o) => {
          T?.(o), y && y();
        });
      } else y && y();
  }, te = (i) => {
    const a = pe.includes(f ?? "highp"), o = `precision ${a ? f : pe[1]} float;
`;
    a || b?.(G(`wrong precision type ${f}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`));
    let u = o.concat(`#define DPR ${x.toFixed(1)}
`).concat(i.replace(/texture\(/g, "texture2D("));
    for (const p of Object.keys(d.current))
      if (i.includes(p)) {
        const O = d.current[p];
        if (!O) continue;
        u = Qt(u, `uniform ${O.type} ${p}${O.arraySize || ""}; 
`, u.lastIndexOf(o) + o.length), O.isNeeded = !0;
      }
    return i.includes("mainImage") && (u = u.concat(Xt)), u;
  }, z = (i) => {
    const a = v.current;
    if (!a || !m.current) return;
    const o = V.current ? (i - V.current) / 1e3 : 0;
    V.current = i;
    const u = P.current;
    if (u)
      for (const s of Object.keys(u)) {
        const p = u[s];
        if (p && d.current[s]?.isNeeded) {
          if (!m.current) return;
          const O = a.getUniformLocation(m.current, s);
          if (!O) return;
          Wt(a, O, p.type, p.value);
        }
      }
    if (d.current.iMouse?.isNeeded) {
      const s = a.getUniformLocation(m.current, Ae);
      a.uniform4fv(s, d.current.iMouse.value);
    }
    if (d.current.iChannelResolution?.isNeeded) {
      const s = a.getUniformLocation(m.current, Se);
      a.uniform3fv(s, d.current.iChannelResolution.value);
    }
    if (d.current.iDeviceOrientation?.isNeeded) {
      const s = a.getUniformLocation(m.current, be);
      a.uniform4fv(s, d.current.iDeviceOrientation.value);
    }
    if (d.current.iTime?.isNeeded) {
      const s = a.getUniformLocation(m.current, ge);
      a.uniform1f(s, S.current += o);
    }
    if (d.current.iTimeDelta?.isNeeded) {
      const s = a.getUniformLocation(m.current, ye);
      a.uniform1f(s, o);
    }
    if (d.current.iDate?.isNeeded) {
      const s = /* @__PURE__ */ new Date(), p = s.getMonth() + 1, O = s.getDate(), B = s.getFullYear(), K = s.getHours() * 60 * 60 + s.getMinutes() * 60 + s.getSeconds() + s.getMilliseconds() * 1e-3, ae = a.getUniformLocation(m.current, Te);
      a.uniform4fv(ae, [B, p, O, K]);
    }
    if (d.current.iFrame?.isNeeded) {
      const s = a.getUniformLocation(m.current, Ee), p = d.current.iFrame.value;
      a.uniform1i(s, p), d.current.iFrame.value = p + 1;
    }
    if (F.current.length > 0)
      for (let s = 0; s < F.current.length; s++) {
        const p = F.current[s];
        if (!p) return;
        const { isVideo: O, _webglTexture: B, source: K, flipY: ae, isLoaded: Be } = p;
        if (!Be || !B || !K) return;
        if (d.current[`iChannel${s}`]?.isNeeded) {
          if (!m.current) return;
          const Ge = a.getUniformLocation(m.current, `iChannel${s}`);
          a.activeTexture(a.TEXTURE0 + s), a.bindTexture(a.TEXTURE_2D, B), a.uniform1i(Ge, s), O && p.updateTexture(B, K, ae);
        }
      }
  }, Y = (i) => {
    const a = v.current;
    if (!a) return;
    a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), a.bindBuffer(a.ARRAY_BUFFER, N.current), a.vertexAttribPointer(R.current ?? 0, 3, a.FLOAT, !1, 0, 0), z(i), a.drawArrays(a.TRIANGLE_STRIP, 0, 4);
    const o = d.current.iMouse?.value;
    if (d.current.iMouse?.isNeeded && g !== 1 && Array.isArray(o)) {
      const u = o[0] ?? 0, s = o[1] ?? 0;
      o[0] = Le(u, I.current[0] ?? 0, g), o[1] = Le(s, I.current[1] ?? 0, g);
    }
    L.current = requestAnimationFrame(Y);
  }, j = () => {
    const i = {
      passive: !0
    };
    d.current.iMouse?.isNeeded && c.current && (c.current.addEventListener("mousemove", U, i), c.current.addEventListener("mouseout", M, i), c.current.addEventListener("mouseup", M, i), c.current.addEventListener("mousedown", H, i), c.current.addEventListener("touchmove", U, i), c.current.addEventListener("touchend", M, i), c.current.addEventListener("touchstart", H, i)), d.current.iDeviceOrientation?.isNeeded && window.addEventListener("deviceorientation", oe, i), c.current && (E.current = new ResizeObserver($), E.current.observe(c.current), window.addEventListener("resize", $, i));
  }, q = () => {
    const i = {
      passive: !0
    };
    d.current.iMouse?.isNeeded && c.current && (c.current.removeEventListener("mousemove", U, i), c.current.removeEventListener("mouseout", M, i), c.current.removeEventListener("mouseup", M, i), c.current.removeEventListener("mousedown", H, i), c.current.removeEventListener("touchmove", U, i), c.current.removeEventListener("touchend", M, i), c.current.removeEventListener("touchstart", H, i)), d.current.iDeviceOrientation?.isNeeded && window.removeEventListener("deviceorientation", oe, i), E.current && (E.current.disconnect(), window.removeEventListener("resize", $, i));
  };
  return ne(() => {
    P.current = n;
  }, [n]), ne(() => {
    const i = F.current;
    function a() {
      k();
      const o = v.current;
      o && c.current && (o.clearColor(...l), o.clearDepth(1), o.enable(o.DEPTH_TEST), o.depthFunc(o.LEQUAL), o.viewport(0, 0, c.current.width, c.current.height), c.current.height = c.current.clientHeight, c.current.width = c.current.clientWidth, Z(), ee(), J(te(t || kt), e || ve), ue(), requestAnimationFrame(Y), j(), $());
    }
    return requestAnimationFrame(a), () => {
      const o = v.current;
      if (o) {
        if (o.getExtension("WEBGL_lose_context")?.loseContext(), o.useProgram(null), o.deleteProgram(m.current ?? null), i.length > 0)
          for (const u of i)
            o.deleteTexture(u._webglTexture);
        m.current = null;
      }
      q(), cancelAnimationFrame(L.current ?? 0);
    };
  }, []), X("canvas", {
    ref: c,
    style: {
      height: "100%",
      width: "100%",
      ...h
    }
  });
}
const Zt = `
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
}`, er = 10, tr = 2, rr = 0.5, nr = 0.2, ir = 1.5, D = {
  duration: 0.5,
  ease: "easeOut"
}, Me = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function re(t) {
  const [e, r] = _e(t), n = ft(t), l = _(null);
  vt(n, "change", (h) => r(h));
  const f = ze(
    (h, A) => {
      l.current = Gt(n, h, A);
    },
    [n]
  );
  return { value: e, motionValue: n, controls: l, animate: f };
}
function or(t, e) {
  const [r, n] = _e(er), {
    value: l,
    animate: f,
    motionValue: h
  } = re(nr), { value: A, animate: g } = re(tr), { value: x, animate: y } = re(rr), { value: T, animate: b } = re(ir), c = pt(e, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return ne(() => {
    switch (t) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), f(0.2, D), g(1.2, D), y(0.4, D), b(1, D);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), f(0.3, { type: "spring", duration: 1, bounce: 0.35 }), g(1, D), y(0.7, D), b([1.5, 2], Me);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), f(0.3, D), g(0.5, D), y(1, D), b([0.5, 2.5], Me);
        return;
      case "speaking":
        n(70), f(0.3, D), g(0.75, D), y(1.25, D), b(1.5, D);
        return;
    }
  }, [
    t,
    f,
    g,
    y,
    b
  ]), ne(() => {
    t === "speaking" && c > 0 && !h.isAnimating() && f(0.2 + 0.2 * c, { duration: 0 });
  }, [
    t,
    c,
    h,
    f,
    g,
    y,
    b
  ]), {
    speed: r,
    scale: l,
    amplitude: A,
    frequency: x,
    brightness: T
  };
}
const ar = dt({
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
function sr(t) {
  const e = t.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
  if (e) {
    const [, r, n, l] = e;
    return [r, n, l].map((h = "00") => parseInt(h, 16) / 255);
  }
}
function Ve({ shape: t = 1, speed: e = 1, amplitude: r = 0.5, frequency: n = 0.5, scale: l = 0.2, blur: f = 1, color: h = "#FF355E", colorShift: A = 1, brightness: g = 1, themeMode: x = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light", ref: y, className: T, ...b }) {
  const c = Ye(() => sr(h), [h]);
  return X("div", {
    ref: y,
    className: T,
    ...b,
    children: X(Jt, {
      fs: Zt,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        uSpeed: {
          type: "1f",
          value: e
        },
        uBlur: {
          type: "1f",
          value: f
        },
        uScale: {
          type: "1f",
          value: l
        },
        uShape: {
          type: "1f",
          value: t
        },
        uFrequency: {
          type: "1f",
          value: n
        },
        uAmplitude: {
          type: "1f",
          value: r
        },
        uBloom: {
          type: "1f",
          value: 0
        },
        uMix: {
          type: "1f",
          value: g
        },
        uSpacing: {
          type: "1f",
          value: 0.5
        },
        uColorShift: {
          type: "1f",
          value: A
        },
        uVariance: {
          type: "1f",
          value: 0.1
        },
        uSmoothing: {
          type: "1f",
          value: 1
        },
        uMode: {
          type: "1f",
          value: x === "light" ? 1 : 0
        },
        uColor: {
          type: "3fv",
          value: c ?? [0, 0.7, 1]
        }
      },
      onError: (v) => {
        console.error("Shader error:", v);
      },
      onWarning: (v) => {
        console.warn("Shader warning:", v);
      },
      style: {
        width: "100%",
        height: "100%"
      }
    })
  });
}
Ve.displayName = "AuraShader";
function gr({ size: t = "lg", state: e, color: r, colorShift: n = 0.05, audioTrack: l, themeMode: f, className: h, ref: A, ...g }) {
  const { speed: x, scale: y, amplitude: T, frequency: b, brightness: c } = or(e, l);
  return X(Ve, {
    ref: A,
    blur: 0.2,
    color: r,
    colorShift: n,
    speed: x,
    scale: y,
    themeMode: f,
    amplitude: T,
    frequency: b,
    brightness: c,
    className: mt(ar({
      size: t
    }), "overflow-hidden rounded-full", h),
    ...g
  });
}
const yr = ({ text: t, confirmationText: e, onConfirm: r, cancelText: n, onCancel: l }) => le("div", {
  className: "flex flex-col gap-2",
  children: [t && X("p", {
    children: t
  }), le("div", {
    className: "flex gap-2",
    children: [X(fe, {
      type: "button",
      variant: "outline",
      size: "sm",
      icon: ht,
      onClick: r,
      label: e
    }), X(fe, {
      type: "button",
      variant: "ghost",
      size: "sm",
      onClick: l,
      label: n
    })]
  })]
});
export {
  pr as A,
  gr as F,
  hr as a,
  dr as b,
  yr as c,
  mr as o,
  vr as u
};
