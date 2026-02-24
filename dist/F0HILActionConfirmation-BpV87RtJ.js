import { jsx as M, jsxs as Z } from "react/jsx-runtime";
import { useInsertionEffect as Ce, createContext as Ue, useContext as Me, useRef as w, useEffect as Y, useState as ge, useCallback as Ne, useMemo as Pe } from "react";
import { y as Oe, z as De, D as Be, G as Ve, J as ee, K as ke } from "./F0AiChat-BfVIQVDE.js";
import { useTrackVolume as Xe } from "@livekit/components-react";
function $e(r, t, e) {
  Ce(() => r.on(t, e), [r, t, e]);
}
const ht = ["xs", "sm", "md", "lg"], pt = [
  "inProgress",
  "executing",
  "completed"
], vt = {
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
    expandChat: "Expand chat",
    collapseChat: "Collapse chat",
    ask: "Ask One"
  }
}, Te = Ue(null);
function gt({ children: r, translations: t }) {
  return M(Te.Provider, {
    value: t,
    children: r
  });
}
function Tt() {
  const r = Me(Te);
  if (r === null)
    throw new Error("useAiChatTranslations must be used within an AiChatTranslationsProvider");
  return r;
}
const te = ["lowp", "mediump", "highp"], Ge = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, qe = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, re = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, ne = "iTime", oe = "iTimeDelta", ie = "iDate", ae = "iFrame", se = "iMouse", ce = "iResolution", Ye = "iChannel", ue = "iChannelResolution", le = "iDeviceOrientation";
function ze(r, t) {
  return r.includes("Matrix") && Array.isArray(t);
}
function He(r, t) {
  return r.includes("v") && Array.isArray(t) && t.length > Number.parseInt(r.charAt(0));
}
function We(r, t) {
  return !r.includes("v") && Array.isArray(t) && t.length > Number.parseInt(r.charAt(0));
}
const je = (r, t, e, n) => {
  if (We(e, n))
    switch (e) {
      case "2f":
        return r.uniform2f(t, n[0], n[1]);
      case "3f":
        return r.uniform3f(t, n[0], n[1], n[2]);
      case "4f":
        return r.uniform4f(t, n[0], n[1], n[2], n[3]);
      case "2i":
        return r.uniform2i(t, n[0], n[1]);
      case "3i":
        return r.uniform3i(t, n[0], n[1], n[2]);
      case "4i":
        return r.uniform4i(t, n[0], n[1], n[2], n[3]);
    }
  if (typeof n == "number")
    return e === "1i" ? r.uniform1i(t, n) : r.uniform1f(t, n);
  switch (e) {
    case "1iv":
      return r.uniform1iv(t, n);
    case "2iv":
      return r.uniform2iv(t, n);
    case "3iv":
      return r.uniform3iv(t, n);
    case "4iv":
      return r.uniform4iv(t, n);
    case "1fv":
      return r.uniform1fv(t, n);
    case "2fv":
      return r.uniform2fv(t, n);
    case "3fv":
      return r.uniform3fv(t, n);
    case "4fv":
      return r.uniform4fv(t, n);
    case "Matrix2fv":
      return r.uniformMatrix2fv(t, !1, n);
    case "Matrix3fv":
      return r.uniformMatrix3fv(t, !1, n);
    case "Matrix4fv":
      return r.uniformMatrix4fv(t, !1, n);
  }
}, Ke = (r) => {
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
      console.error(U(`The uniform type "${r}" is not valid, please make sure your uniform type is valid`));
  }
}, H = 9729, fe = 9728, Qe = 9987, de = 33071, me = 10497;
class Je {
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
  constructor(t) {
    this.gl = t;
  }
  updateTexture = (t, e, n) => {
    const { gl: d } = this, h = 0, g = d.RGBA, y = d.RGBA, p = d.UNSIGNED_BYTE;
    d.bindTexture(d.TEXTURE_2D, t), d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL, n), d.texImage2D(d.TEXTURE_2D, h, g, y, p, e);
  };
  setupVideo = (t) => {
    const e = document.createElement("video");
    let n = !1, d = !1;
    e.autoplay = !0, e.muted = !0, e.loop = !0, e.crossOrigin = "anonymous";
    const h = () => {
      n && d && (this.isLoaded = !0);
    };
    return e.addEventListener("playing", () => {
      n = !0, this.width = e.videoWidth || 0, this.height = e.videoHeight || 0, h();
    }, !0), e.addEventListener("timeupdate", () => {
      d = !0, h();
    }, !0), e.src = t, e;
  };
  makePowerOf2 = (t) => t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap ? (this.pow2canvas === void 0 && (this.pow2canvas = document.createElement("canvas")), this.pow2canvas.width = 2 ** Math.floor(Math.log(t.width) / Math.LN2), this.pow2canvas.height = 2 ** Math.floor(Math.log(t.height) / Math.LN2), this.pow2canvas.getContext("2d")?.drawImage(t, 0, 0, this.pow2canvas.width, this.pow2canvas.height), console.warn(U(`Image is not power of two ${t.width} x ${t.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`)), this.pow2canvas) : t;
  load = async (t) => {
    const { gl: e } = this, { url: n, wrapS: d, wrapT: h, minFilter: g, magFilter: y, flipY: p = -1 } = t;
    if (!n)
      return Promise.reject(new Error(U("Missing url, please make sure to pass the url of your texture { url: ... }")));
    const b = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), v = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (b === null && v === null)
      return Promise.reject(new Error(U(`Please upload a video or an image with a valid format (url: ${n})`)));
    Object.assign(this, {
      url: n,
      wrapS: d,
      wrapT: h,
      minFilter: g,
      magFilter: y,
      flipY: p
    });
    const A = 0, E = e.RGBA, u = 1, T = 1, B = 0, m = e.RGBA, N = e.UNSIGNED_BYTE, k = new Uint8Array([255, 255, 255, 0]), P = e.createTexture();
    if (e.bindTexture(e.TEXTURE_2D, P), e.texImage2D(e.TEXTURE_2D, A, E, u, T, B, m, N, k), v) {
      const F = this.setupVideo(n);
      return e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), this._webglTexture = P, this.source = F, this.isVideo = !0, F.play().then(() => this);
    }
    async function S() {
      return new Promise((F, V) => {
        const I = new Image();
        I.crossOrigin = "anonymous", I.onload = () => {
          F(I);
        }, I.onerror = () => {
          V(new Error(U(`failed loading url: ${n}`)));
        }, I.src = n ?? "";
      });
    }
    let L = await S(), _ = (L.width & L.width - 1) === 0 && (L.height & L.height - 1) === 0;
    return (t.wrapS !== de || t.wrapT !== de || t.minFilter !== fe && t.minFilter !== H) && !_ && (L = this.makePowerOf2(L), _ = !0), e.bindTexture(e.TEXTURE_2D, P), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, p), e.texImage2D(e.TEXTURE_2D, A, E, m, N, L), _ && t.minFilter !== fe && t.minFilter !== H && e.generateMipmap(e.TEXTURE_2D), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, this.wrapS || me), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, this.wrapT || me), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, this.minFilter || Qe), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, this.magFilter || H), this._webglTexture = P, this.source = L, this.isVideo = !1, this.isLoaded = !0, this.width = L.width || 0, this.height = L.height || 0, this;
  };
}
const U = (r) => `react-shaders: ${r}`, he = (r) => {
  if ("changedTouches" in r) {
    const t = r.changedTouches[0];
    return [t?.clientX ?? 0, t?.clientY ?? 0];
  }
  return [r.clientX, r.clientY];
}, pe = (r, t, e) => r * (1 - e) + t * e, Ze = (r, t, e) => e > 0 ? r.substring(0, e) + t + r.substring(e, r.length) : t + r;
function et({ fs: r, vs: t = re, textures: e = [], uniforms: n, clearColor: d = [0, 0, 0, 1], precision: h = "highp", style: g, contextAttributes: y = {}, lerp: p = 1, devicePixelRatio: b = 1, onDoneLoadingTextures: v, onError: A = console.error, onWarning: E = console.warn }) {
  const u = w(null), T = w(null), B = w(null), m = w(null), N = w(void 0), k = w(void 0), P = w(!1), S = w(void 0), L = w(0), _ = w([0, 0]), F = w([]), V = w(0), I = w(void 0), l = w({
    [ne]: {
      type: "float",
      isNeeded: !1,
      value: 0
    },
    [oe]: {
      type: "float",
      isNeeded: !1,
      value: 0
    },
    [ie]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    },
    [se]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    },
    [ce]: {
      type: "vec2",
      isNeeded: !1,
      value: [0, 0]
    },
    [ae]: {
      type: "int",
      isNeeded: !1,
      value: 0
    },
    [le]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), W = w(n), j = (i, a) => {
    const o = "width" in i ? i.width ?? 0 : 0, c = "height" in i ? i.height ?? 0 : 0, s = l.current.iChannelResolution;
    if (!s) return;
    const f = Array.isArray(s.value) ? s.value : s.value = [];
    f[a * 3] = o * b, f[a * 3 + 1] = c * b, f[a * 3 + 2] = 0;
  }, we = () => {
    u.current && (T.current = u.current.getContext("webgl", y) || u.current.getContext("experimental-webgl", y), T.current?.getExtension("OES_standard_derivatives"), T.current?.getExtension("EXT_shader_texture_lod"));
  }, ye = () => {
    const i = T.current;
    B.current = i?.createBuffer() ?? null, i?.bindBuffer(i.ARRAY_BUFFER, B.current);
    const a = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0];
    i?.bufferData(i.ARRAY_BUFFER, new Float32Array(a), i.STATIC_DRAW);
  }, K = ({ alpha: i, beta: a, gamma: o }) => {
    l.current.iDeviceOrientation.value = [i ?? 0, a ?? 0, o ?? 0, window.orientation ?? 0];
  }, X = (i) => {
    const [a = 0, o = 0] = he(i), c = a - (S.current?.left ?? 0) - window.pageXOffset, s = (S.current?.height ?? 0) - o - (S.current?.top ?? 0) - window.pageYOffset;
    P.current = !0;
    const f = Array.isArray(l.current.iMouse?.value) ? l.current.iMouse.value : void 0;
    f && (f[2] = c, f[3] = s), _.current[0] = c, _.current[1] = s;
  }, $ = (i) => {
    S.current = u.current?.getBoundingClientRect();
    const [a = 0, o = 0] = he(i), c = a - (S.current?.left ?? 0), s = (S.current?.height ?? 0) - o - (S.current?.top ?? 0);
    if (p !== 1)
      _.current[0] = c, _.current[1] = s;
    else {
      const f = Array.isArray(l.current.iMouse?.value) ? l.current.iMouse.value : void 0;
      f && (f[0] = c, f[1] = s);
    }
  }, O = () => {
    const i = Array.isArray(l.current.iMouse?.value) ? l.current.iMouse.value : void 0;
    i && (i[2] = 0, i[3] = 0);
  }, G = () => {
    const i = T.current;
    if (!i) return;
    S.current = u.current?.getBoundingClientRect();
    const a = b, o = Math.floor((S.current?.width ?? 1) * a), c = Math.floor((S.current?.height ?? 1) * a);
    if (i.canvas.width = o, i.canvas.height = c, l.current.iResolution?.isNeeded && m.current) {
      const s = i.getUniformLocation(m.current, ce);
      i.uniform2fv(s, [i.canvas.width, i.canvas.height]);
    }
  }, Q = (i, a) => {
    const o = T.current;
    if (!o) return null;
    const c = o.createShader(i);
    if (!c) return null;
    if (o.shaderSource(c, a), o.compileShader(c), !o.getShaderParameter(c, o.COMPILE_STATUS)) {
      E?.(U(`Error compiling the shader:
${a}`));
      const s = o.getShaderInfoLog(c);
      o.deleteShader(c), A?.(U(`Shader compiler log: ${s}`));
    }
    return c;
  }, xe = (i, a) => {
    const o = T.current;
    if (!o) return;
    const c = Q(o.FRAGMENT_SHADER, i), s = Q(o.VERTEX_SHADER, a);
    if (m.current = o.createProgram(), !(!m.current || !s || !c)) {
      if (o.attachShader(m.current, s), o.attachShader(m.current, c), o.linkProgram(m.current), !o.getProgramParameter(m.current, o.LINK_STATUS)) {
        A?.(U(`Unable to initialize the shader program: ${o.getProgramInfoLog(m.current)}`));
        return;
      }
      o.useProgram(m.current), N.current = o.getAttribLocation(m.current, "aVertexPosition"), o.enableVertexAttribArray(N.current);
    }
  }, Re = () => {
    if (n)
      for (const i of Object.keys(n)) {
        const a = n[i];
        if (!a) continue;
        const { value: o, type: c } = a, s = Ke(c);
        if (!s) continue;
        const f = {};
        if (ze(c, o)) {
          const x = c.length, C = Number.parseInt(c.charAt(x - 3)), D = Math.floor(o.length / (C * C));
          o.length > C * C && (f.arraySize = `[${D}]`);
        } else He(c, o) && (f.arraySize = `[${Math.floor(o.length / Number.parseInt(c.charAt(0)))}]`);
        l.current[i] = {
          type: s,
          isNeeded: !1,
          value: o,
          ...f
        };
      }
  }, be = () => {
    const i = T.current;
    if (i)
      if (e && e.length > 0) {
        l.current[`${ue}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${e.length}]`,
          value: []
        };
        const a = e.map((o, c) => (l.current[`${Ye}${c}`] = {
          type: "sampler2D",
          isNeeded: !1
        }, j(o, c), F.current[c] = new Je(i), F.current[c]?.load(o).then((s) => {
          j(s, c);
        })));
        Promise.all(a).then(() => {
          v && v();
        }).catch((o) => {
          A?.(o), v && v();
        });
      } else v && v();
  }, Ae = (i) => {
    const a = te.includes(h ?? "highp"), o = `precision ${a ? h : te[1]} float;
`;
    a || E?.(U(`wrong precision type ${h}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`));
    let c = o.concat(`#define DPR ${b.toFixed(1)}
`).concat(i.replace(/texture\(/g, "texture2D("));
    for (const f of Object.keys(l.current))
      if (i.includes(f)) {
        const x = l.current[f];
        if (!x) continue;
        c = Ze(c, `uniform ${x.type} ${f}${x.arraySize || ""}; 
`, c.lastIndexOf(o) + o.length), x.isNeeded = !0;
      }
    return i.includes("mainImage") && (c = c.concat(Ge)), c;
  }, Se = (i) => {
    const a = T.current;
    if (!a || !m.current) return;
    const o = V.current ? (i - V.current) / 1e3 : 0;
    V.current = i;
    const c = W.current;
    if (c)
      for (const s of Object.keys(c)) {
        const f = c[s];
        if (f && l.current[s]?.isNeeded) {
          if (!m.current) return;
          const x = a.getUniformLocation(m.current, s);
          if (!x) return;
          je(a, x, f.type, f.value);
        }
      }
    if (l.current.iMouse?.isNeeded) {
      const s = a.getUniformLocation(m.current, se);
      a.uniform4fv(s, l.current.iMouse.value);
    }
    if (l.current.iChannelResolution?.isNeeded) {
      const s = a.getUniformLocation(m.current, ue);
      a.uniform3fv(s, l.current.iChannelResolution.value);
    }
    if (l.current.iDeviceOrientation?.isNeeded) {
      const s = a.getUniformLocation(m.current, le);
      a.uniform4fv(s, l.current.iDeviceOrientation.value);
    }
    if (l.current.iTime?.isNeeded) {
      const s = a.getUniformLocation(m.current, ne);
      a.uniform1f(s, L.current += o);
    }
    if (l.current.iTimeDelta?.isNeeded) {
      const s = a.getUniformLocation(m.current, oe);
      a.uniform1f(s, o);
    }
    if (l.current.iDate?.isNeeded) {
      const s = /* @__PURE__ */ new Date(), f = s.getMonth() + 1, x = s.getDate(), C = s.getFullYear(), D = s.getHours() * 60 * 60 + s.getMinutes() * 60 + s.getSeconds() + s.getMilliseconds() * 1e-3, z = a.getUniformLocation(m.current, ie);
      a.uniform4fv(z, [C, f, x, D]);
    }
    if (l.current.iFrame?.isNeeded) {
      const s = a.getUniformLocation(m.current, ae), f = l.current.iFrame.value;
      a.uniform1i(s, f), l.current.iFrame.value = f + 1;
    }
    if (F.current.length > 0)
      for (let s = 0; s < F.current.length; s++) {
        const f = F.current[s];
        if (!f) return;
        const { isVideo: x, _webglTexture: C, source: D, flipY: z, isLoaded: _e } = f;
        if (!_e || !C || !D) return;
        if (l.current[`iChannel${s}`]?.isNeeded) {
          if (!m.current) return;
          const Ie = a.getUniformLocation(m.current, `iChannel${s}`);
          a.activeTexture(a.TEXTURE0 + s), a.bindTexture(a.TEXTURE_2D, C), a.uniform1i(Ie, s), x && f.updateTexture(C, D, z);
        }
      }
  }, J = (i) => {
    const a = T.current;
    if (!a) return;
    a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), a.bindBuffer(a.ARRAY_BUFFER, B.current), a.vertexAttribPointer(N.current ?? 0, 3, a.FLOAT, !1, 0, 0), Se(i), a.drawArrays(a.TRIANGLE_STRIP, 0, 4);
    const o = l.current.iMouse?.value;
    if (l.current.iMouse?.isNeeded && p !== 1 && Array.isArray(o)) {
      const c = o[0] ?? 0, s = o[1] ?? 0;
      o[0] = pe(c, _.current[0] ?? 0, p), o[1] = pe(s, _.current[1] ?? 0, p);
    }
    k.current = requestAnimationFrame(J);
  }, Le = () => {
    const i = {
      passive: !0
    };
    l.current.iMouse?.isNeeded && u.current && (u.current.addEventListener("mousemove", $, i), u.current.addEventListener("mouseout", O, i), u.current.addEventListener("mouseup", O, i), u.current.addEventListener("mousedown", X, i), u.current.addEventListener("touchmove", $, i), u.current.addEventListener("touchend", O, i), u.current.addEventListener("touchstart", X, i)), l.current.iDeviceOrientation?.isNeeded && window.addEventListener("deviceorientation", K, i), u.current && (I.current = new ResizeObserver(G), I.current.observe(u.current), window.addEventListener("resize", G, i));
  }, Fe = () => {
    const i = {
      passive: !0
    };
    l.current.iMouse?.isNeeded && u.current && (u.current.removeEventListener("mousemove", $, i), u.current.removeEventListener("mouseout", O, i), u.current.removeEventListener("mouseup", O, i), u.current.removeEventListener("mousedown", X, i), u.current.removeEventListener("touchmove", $, i), u.current.removeEventListener("touchend", O, i), u.current.removeEventListener("touchstart", X, i)), l.current.iDeviceOrientation?.isNeeded && window.removeEventListener("deviceorientation", K, i), I.current && (I.current.disconnect(), window.removeEventListener("resize", G, i));
  };
  return Y(() => {
    W.current = n;
  }, [n]), Y(() => {
    const i = F.current;
    function a() {
      we();
      const o = T.current;
      o && u.current && (o.clearColor(...d), o.clearDepth(1), o.enable(o.DEPTH_TEST), o.depthFunc(o.LEQUAL), o.viewport(0, 0, u.current.width, u.current.height), u.current.height = u.current.clientHeight, u.current.width = u.current.clientWidth, Re(), be(), xe(Ae(r || qe), t || re), ye(), requestAnimationFrame(J), Le(), G());
    }
    return requestAnimationFrame(a), () => {
      const o = T.current;
      if (o) {
        if (o.getExtension("WEBGL_lose_context")?.loseContext(), o.useProgram(null), o.deleteProgram(m.current ?? null), i.length > 0)
          for (const c of i)
            o.deleteTexture(c._webglTexture);
        m.current = null;
      }
      Fe(), cancelAnimationFrame(k.current ?? 0);
    };
  }, []), M("canvas", {
    ref: u,
    style: {
      height: "100%",
      width: "100%",
      ...g
    }
  });
}
const tt = `
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
}`, rt = 10, nt = 2, ot = 0.5, it = 0.2, at = 1.5, R = {
  duration: 0.5,
  ease: "easeOut"
}, ve = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function q(r) {
  const [t, e] = ge(r), n = Oe(r), d = w(null);
  $e(n, "change", (g) => e(g));
  const h = Ne(
    (g, y) => {
      d.current = De(n, g, y);
    },
    [n]
  );
  return { value: t, motionValue: n, controls: d, animate: h };
}
function st(r, t) {
  const [e, n] = ge(rt), {
    value: d,
    animate: h,
    motionValue: g
  } = q(it), { value: y, animate: p } = q(nt), { value: b, animate: v } = q(ot), { value: A, animate: E } = q(at), u = Xe(t, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return Y(() => {
    switch (r) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), h(0.2, R), p(1.2, R), v(0.4, R), E(1, R);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), h(0.3, { type: "spring", duration: 1, bounce: 0.35 }), p(1, R), v(0.7, R), E([1.5, 2], ve);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), h(0.3, R), p(0.5, R), v(1, R), E([0.5, 2.5], ve);
        return;
      case "speaking":
        n(70), h(0.3, R), p(0.75, R), v(1.25, R), E(1.5, R);
        return;
    }
  }, [
    r,
    h,
    p,
    v,
    E
  ]), Y(() => {
    r === "speaking" && u > 0 && !g.isAnimating() && h(0.2 + 0.2 * u, { duration: 0 });
  }, [
    r,
    u,
    g,
    h,
    p,
    v,
    E
  ]), {
    speed: e,
    scale: d,
    amplitude: y,
    frequency: b,
    brightness: A
  };
}
const ct = Ve({
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
function ut(r) {
  const t = r.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
  if (t) {
    const [, e, n, d] = t;
    return [e, n, d].map((g = "00") => parseInt(g, 16) / 255);
  }
}
function Ee({ shape: r = 1, speed: t = 1, amplitude: e = 0.5, frequency: n = 0.5, scale: d = 0.2, blur: h = 1, color: g = "#FF355E", colorShift: y = 1, brightness: p = 1, themeMode: b = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light", ref: v, className: A, ...E }) {
  const u = Pe(() => ut(g), [g]);
  return M("div", {
    ref: v,
    className: A,
    ...E,
    children: M(et, {
      fs: tt,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        uSpeed: {
          type: "1f",
          value: t
        },
        uBlur: {
          type: "1f",
          value: h
        },
        uScale: {
          type: "1f",
          value: d
        },
        uShape: {
          type: "1f",
          value: r
        },
        uFrequency: {
          type: "1f",
          value: n
        },
        uAmplitude: {
          type: "1f",
          value: e
        },
        uBloom: {
          type: "1f",
          value: 0
        },
        uMix: {
          type: "1f",
          value: p
        },
        uSpacing: {
          type: "1f",
          value: 0.5
        },
        uColorShift: {
          type: "1f",
          value: y
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
          value: b === "light" ? 1 : 0
        },
        uColor: {
          type: "3fv",
          value: u ?? [0, 0.7, 1]
        }
      },
      onError: (T) => {
        console.error("Shader error:", T);
      },
      onWarning: (T) => {
        console.warn("Shader warning:", T);
      },
      style: {
        width: "100%",
        height: "100%"
      }
    })
  });
}
Ee.displayName = "AuraShader";
function Et({ size: r = "lg", state: t, color: e, colorShift: n = 0.05, audioTrack: d, themeMode: h, className: g, ref: y, ...p }) {
  const { speed: b, scale: v, amplitude: A, frequency: E, brightness: u } = st(t, d);
  return M(Ee, {
    ref: y,
    blur: 0.2,
    color: e,
    colorShift: n,
    speed: b,
    scale: v,
    themeMode: h,
    amplitude: A,
    frequency: E,
    brightness: u,
    className: Be(ct({
      size: r
    }), "overflow-hidden rounded-full", g),
    ...p
  });
}
const wt = ({ text: r, confirmationText: t, onConfirm: e, cancelText: n, onCancel: d }) => Z("div", {
  className: "flex flex-col gap-2",
  children: [r && M("p", {
    children: r
  }), Z("div", {
    className: "flex gap-2",
    children: [M(ee, {
      type: "button",
      variant: "outline",
      size: "sm",
      icon: ke,
      onClick: e,
      label: t
    }), M(ee, {
      type: "button",
      variant: "ghost",
      size: "sm",
      onClick: d,
      label: n
    })]
  })]
});
export {
  gt as A,
  Et as F,
  vt as a,
  pt as b,
  wt as c,
  ht as o,
  Tt as u
};
