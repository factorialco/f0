import { jsx as _e } from "react/jsx-runtime";
import { useRef as h, useEffect as q } from "react";
const K = ["lowp", "mediump", "highp"], ye = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, Le = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, Q = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, J = "iTime", Z = "iTimeDelta", ee = "iDate", te = "iFrame", re = "iMouse", ne = "iResolution", Ue = "iChannel", ie = "iChannelResolution", oe = "iDeviceOrientation";
function Ae(a, i) {
  return a.includes("Matrix") && Array.isArray(i);
}
function Me(a, i) {
  return a.includes("v") && Array.isArray(i) && i.length > Number.parseInt(a.charAt(0));
}
function Ne(a, i) {
  return !a.includes("v") && Array.isArray(i) && i.length > Number.parseInt(a.charAt(0));
}
const Fe = (a, i, t, s) => {
  if (Ne(t, s))
    switch (t) {
      case "2f":
        return a.uniform2f(i, s[0], s[1]);
      case "3f":
        return a.uniform3f(i, s[0], s[1], s[2]);
      case "4f":
        return a.uniform4f(i, s[0], s[1], s[2], s[3]);
      case "2i":
        return a.uniform2i(i, s[0], s[1]);
      case "3i":
        return a.uniform3i(i, s[0], s[1], s[2]);
      case "4i":
        return a.uniform4i(i, s[0], s[1], s[2], s[3]);
    }
  if (typeof s == "number")
    return t === "1i" ? a.uniform1i(i, s) : a.uniform1f(i, s);
  switch (t) {
    case "1iv":
      return a.uniform1iv(i, s);
    case "2iv":
      return a.uniform2iv(i, s);
    case "3iv":
      return a.uniform3iv(i, s);
    case "4iv":
      return a.uniform4iv(i, s);
    case "1fv":
      return a.uniform1fv(i, s);
    case "2fv":
      return a.uniform2fv(i, s);
    case "3fv":
      return a.uniform3fv(i, s);
    case "4fv":
      return a.uniform4fv(i, s);
    case "Matrix2fv":
      return a.uniformMatrix2fv(i, !1, s);
    case "Matrix3fv":
      return a.uniformMatrix3fv(i, !1, s);
    case "Matrix4fv":
      return a.uniformMatrix4fv(i, !1, s);
  }
}, Ie = (a) => {
  switch (a) {
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
        A(
          `The uniform type "${a}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, G = 9729, se = 9728, xe = 9987, ce = 33071, ae = 10497;
class Se {
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
  constructor(i) {
    this.gl = i;
  }
  updateTexture = (i, t, s) => {
    const { gl: m } = this, R = 0, P = m.RGBA, M = m.RGBA, L = m.UNSIGNED_BYTE;
    m.bindTexture(m.TEXTURE_2D, i), m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, s), m.texImage2D(
      m.TEXTURE_2D,
      R,
      P,
      M,
      L,
      t
    );
  };
  setupVideo = (i) => {
    const t = document.createElement("video");
    let s = !1, m = !1;
    t.autoplay = !0, t.muted = !0, t.loop = !0, t.crossOrigin = "anonymous";
    const R = () => {
      s && m && (this.isLoaded = !0);
    };
    return t.addEventListener(
      "playing",
      () => {
        s = !0, this.width = t.videoWidth || 0, this.height = t.videoHeight || 0, R();
      },
      !0
    ), t.addEventListener(
      "timeupdate",
      () => {
        m = !0, R();
      },
      !0
    ), t.src = i, t;
  };
  makePowerOf2 = (i) => i instanceof HTMLImageElement || i instanceof HTMLCanvasElement || i instanceof ImageBitmap ? (this.pow2canvas === void 0 && (this.pow2canvas = document.createElement("canvas")), this.pow2canvas.width = 2 ** Math.floor(Math.log(i.width) / Math.LN2), this.pow2canvas.height = 2 ** Math.floor(Math.log(i.height) / Math.LN2), this.pow2canvas.getContext("2d")?.drawImage(
    i,
    0,
    0,
    this.pow2canvas.width,
    this.pow2canvas.height
  ), console.warn(
    A(
      `Image is not power of two ${i.width} x ${i.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : i;
  load = async (i) => {
    const { gl: t } = this, {
      url: s,
      wrapS: m,
      wrapT: R,
      minFilter: P,
      magFilter: M,
      flipY: L = -1
    } = i;
    if (!s)
      return Promise.reject(
        new Error(
          A(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const N = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(s), U = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(s);
    if (N === null && U === null)
      return Promise.reject(
        new Error(
          A(
            `Please upload a video or an image with a valid format (url: ${s})`
          )
        )
      );
    Object.assign(this, { url: s, wrapS: m, wrapT: R, minFilter: P, magFilter: M, flipY: L });
    const F = 0, D = t.RGBA, f = 1, v = 1, b = 0, l = t.RGBA, I = t.UNSIGNED_BYTE, X = new Uint8Array([255, 255, 255, 0]), x = t.createTexture();
    if (t.bindTexture(t.TEXTURE_2D, x), t.texImage2D(
      t.TEXTURE_2D,
      F,
      D,
      f,
      v,
      b,
      l,
      I,
      X
    ), U) {
      const T = this.setupVideo(s);
      return t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), this._webglTexture = x, this.source = T, this.isVideo = !0, T.play().then(() => this);
    }
    async function p() {
      return new Promise((T, C) => {
        const _ = new Image();
        _.crossOrigin = "anonymous", _.onload = () => {
          T(_);
        }, _.onerror = () => {
          C(new Error(A(`failed loading url: ${s}`)));
        }, _.src = s ?? "";
      });
    }
    let E = await p(), w = (E.width & E.width - 1) === 0 && (E.height & E.height - 1) === 0;
    return (i.wrapS !== ce || i.wrapT !== ce || i.minFilter !== se && i.minFilter !== G) && !w && (E = this.makePowerOf2(E), w = !0), t.bindTexture(t.TEXTURE_2D, x), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, L), t.texImage2D(
      t.TEXTURE_2D,
      F,
      D,
      l,
      I,
      E
    ), w && i.minFilter !== se && i.minFilter !== G && t.generateMipmap(t.TEXTURE_2D), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_S,
      this.wrapS || ae
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_WRAP_T,
      this.wrapT || ae
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MIN_FILTER,
      this.minFilter || xe
    ), t.texParameteri(
      t.TEXTURE_2D,
      t.TEXTURE_MAG_FILTER,
      this.magFilter || G
    ), this._webglTexture = x, this.source = E, this.isVideo = !1, this.isLoaded = !0, this.width = E.width || 0, this.height = E.height || 0, this;
  };
}
const A = (a) => `react-shaders: ${a}`, ue = (a) => {
  if ("changedTouches" in a) {
    const i = a.changedTouches[0];
    return [i?.clientX ?? 0, i?.clientY ?? 0];
  }
  return [a.clientX, a.clientY];
}, fe = (a, i, t) => a * (1 - t) + i * t, Oe = (a, i, t) => t > 0 ? a.substring(0, t) + i + a.substring(t, a.length) : i + a;
function be({
  fs: a,
  vs: i = Q,
  textures: t = [],
  uniforms: s,
  clearColor: m = [0, 0, 0, 1],
  precision: R = "highp",
  style: P,
  contextAttributes: M = {},
  lerp: L = 1,
  devicePixelRatio: N = 1,
  onDoneLoadingTextures: U,
  onError: F = console.error,
  onWarning: D = console.warn
}) {
  const f = h(null), v = h(null), b = h(null), l = h(null), I = h(void 0), X = h(void 0), x = h(!1), p = h(void 0), E = h(0), w = h([0, 0]), T = h([]), C = h(0), _ = h(void 0), u = h({
    [J]: { type: "float", isNeeded: !1, value: 0 },
    [Z]: { type: "float", isNeeded: !1, value: 0 },
    [ee]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [re]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [ne]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [te]: { type: "int", isNeeded: !1, value: 0 },
    [oe]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), H = h(s), W = (r, n) => {
    const e = "width" in r ? r.width ?? 0 : 0, c = "height" in r ? r.height ?? 0 : 0, o = u.current.iChannelResolution;
    if (!o) return;
    const d = Array.isArray(o.value) ? o.value : o.value = [];
    d[n * 3] = e * N, d[n * 3 + 1] = c * N, d[n * 3 + 2] = 0;
  }, de = () => {
    f.current && (v.current = f.current.getContext("webgl", M) || f.current.getContext(
      "experimental-webgl",
      M
    ), v.current?.getExtension("OES_standard_derivatives"), v.current?.getExtension("EXT_shader_texture_lod"));
  }, le = () => {
    const r = v.current;
    b.current = r?.createBuffer() ?? null, r?.bindBuffer(r.ARRAY_BUFFER, b.current);
    const n = [
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
    r?.bufferData(r.ARRAY_BUFFER, new Float32Array(n), r.STATIC_DRAW);
  }, j = ({
    alpha: r,
    beta: n,
    gamma: e
  }) => {
    u.current.iDeviceOrientation.value = [
      r ?? 0,
      n ?? 0,
      e ?? 0,
      window.orientation ?? 0
    ];
  }, B = (r) => {
    const [n = 0, e = 0] = ue(r), c = n - (p.current?.left ?? 0) - window.pageXOffset, o = (p.current?.height ?? 0) - e - (p.current?.top ?? 0) - window.pageYOffset;
    x.current = !0;
    const d = Array.isArray(u.current.iMouse?.value) ? u.current.iMouse.value : void 0;
    d && (d[2] = c, d[3] = o), w.current[0] = c, w.current[1] = o;
  }, $ = (r) => {
    p.current = f.current?.getBoundingClientRect();
    const [n = 0, e = 0] = ue(r), c = n - (p.current?.left ?? 0), o = (p.current?.height ?? 0) - e - (p.current?.top ?? 0);
    if (L !== 1)
      w.current[0] = c, w.current[1] = o;
    else {
      const d = Array.isArray(u.current.iMouse?.value) ? u.current.iMouse.value : void 0;
      d && (d[0] = c, d[1] = o);
    }
  }, S = () => {
    const r = Array.isArray(u.current.iMouse?.value) ? u.current.iMouse.value : void 0;
    r && (r[2] = 0, r[3] = 0);
  }, V = () => {
    const r = v.current;
    if (!r) return;
    p.current = f.current?.getBoundingClientRect();
    const n = N, e = Math.floor(
      (p.current?.width ?? 1) * n
    ), c = Math.floor(
      (p.current?.height ?? 1) * n
    );
    if (r.canvas.width = e, r.canvas.height = c, u.current.iResolution?.isNeeded && l.current) {
      const o = r.getUniformLocation(
        l.current,
        ne
      );
      r.uniform2fv(o, [r.canvas.width, r.canvas.height]);
    }
  }, z = (r, n) => {
    const e = v.current;
    if (!e) return null;
    const c = e.createShader(r);
    if (!c) return null;
    if (e.shaderSource(c, n), e.compileShader(c), !e.getShaderParameter(c, e.COMPILE_STATUS)) {
      D?.(A(`Error compiling the shader:
${n}`));
      const o = e.getShaderInfoLog(c);
      e.deleteShader(c), F?.(A(`Shader compiler log: ${o}`));
    }
    return c;
  }, me = (r, n) => {
    const e = v.current;
    if (!e) return;
    const c = z(e.FRAGMENT_SHADER, r), o = z(e.VERTEX_SHADER, n);
    if (l.current = e.createProgram(), !(!l.current || !o || !c)) {
      if (e.attachShader(l.current, o), e.attachShader(l.current, c), e.linkProgram(l.current), !e.getProgramParameter(l.current, e.LINK_STATUS)) {
        F?.(
          A(
            `Unable to initialize the shader program: ${e.getProgramInfoLog(
              l.current
            )}`
          )
        );
        return;
      }
      e.useProgram(l.current), I.current = e.getAttribLocation(
        l.current,
        "aVertexPosition"
      ), e.enableVertexAttribArray(I.current);
    }
  }, he = () => {
    if (s)
      for (const r of Object.keys(s)) {
        const n = s[r];
        if (!n) continue;
        const { value: e, type: c } = n, o = Ie(c);
        if (!o) continue;
        const d = {};
        if (Ae(c, e)) {
          const g = c.length, y = Number.parseInt(c.charAt(g - 3)), O = Math.floor(e.length / (y * y));
          e.length > y * y && (d.arraySize = `[${O}]`);
        } else Me(c, e) && (d.arraySize = `[${Math.floor(e.length / Number.parseInt(c.charAt(0)))}]`);
        u.current[r] = {
          type: o,
          isNeeded: !1,
          value: e,
          ...d
        };
      }
  }, ve = () => {
    const r = v.current;
    if (r)
      if (t && t.length > 0) {
        u.current[`${ie}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${t.length}]`,
          value: []
        };
        const n = t.map(
          (e, c) => (u.current[`${Ue}${c}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, W(e, c), T.current[c] = new Se(r), T.current[c]?.load(e).then((o) => {
            W(o, c);
          }))
        );
        Promise.all(n).then(() => {
          U && U();
        }).catch((e) => {
          F?.(e), U && U();
        });
      } else U && U();
  }, ge = (r) => {
    const n = K.includes(R ?? "highp"), e = `precision ${n ? R : K[1]} float;
`;
    n || D?.(
      A(
        `wrong precision type ${R}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let c = e.concat(`#define DPR ${N.toFixed(1)}
`).concat(r.replace(/texture\(/g, "texture2D("));
    for (const d of Object.keys(u.current))
      if (r.includes(d)) {
        const g = u.current[d];
        if (!g) continue;
        c = Oe(
          c,
          `uniform ${g.type} ${d}${g.arraySize || ""}; 
`,
          c.lastIndexOf(e) + e.length
        ), g.isNeeded = !0;
      }
    return r.includes("mainImage") && (c = c.concat(ye)), c;
  }, pe = (r) => {
    const n = v.current;
    if (!n || !l.current) return;
    const e = C.current ? (r - C.current) / 1e3 : 0;
    C.current = r;
    const c = H.current;
    if (c)
      for (const o of Object.keys(c)) {
        const d = c[o];
        if (d && u.current[o]?.isNeeded) {
          if (!l.current) return;
          const g = n.getUniformLocation(
            l.current,
            o
          );
          if (!g) return;
          Fe(
            n,
            g,
            d.type,
            d.value
          );
        }
      }
    if (u.current.iMouse?.isNeeded) {
      const o = n.getUniformLocation(
        l.current,
        re
      );
      n.uniform4fv(o, u.current.iMouse.value);
    }
    if (u.current.iChannelResolution?.isNeeded) {
      const o = n.getUniformLocation(
        l.current,
        ie
      );
      n.uniform3fv(
        o,
        u.current.iChannelResolution.value
      );
    }
    if (u.current.iDeviceOrientation?.isNeeded) {
      const o = n.getUniformLocation(
        l.current,
        oe
      );
      n.uniform4fv(
        o,
        u.current.iDeviceOrientation.value
      );
    }
    if (u.current.iTime?.isNeeded) {
      const o = n.getUniformLocation(
        l.current,
        J
      );
      n.uniform1f(o, E.current += e);
    }
    if (u.current.iTimeDelta?.isNeeded) {
      const o = n.getUniformLocation(
        l.current,
        Z
      );
      n.uniform1f(o, e);
    }
    if (u.current.iDate?.isNeeded) {
      const o = /* @__PURE__ */ new Date(), d = o.getMonth() + 1, g = o.getDate(), y = o.getFullYear(), O = o.getHours() * 60 * 60 + o.getMinutes() * 60 + o.getSeconds() + o.getMilliseconds() * 1e-3, Y = n.getUniformLocation(
        l.current,
        ee
      );
      n.uniform4fv(Y, [y, d, g, O]);
    }
    if (u.current.iFrame?.isNeeded) {
      const o = n.getUniformLocation(
        l.current,
        te
      ), d = u.current.iFrame.value;
      n.uniform1i(o, d), u.current.iFrame.value = d + 1;
    }
    if (T.current.length > 0)
      for (let o = 0; o < T.current.length; o++) {
        const d = T.current[o];
        if (!d) return;
        const { isVideo: g, _webglTexture: y, source: O, flipY: Y, isLoaded: Re } = d;
        if (!Re || !y || !O) return;
        if (u.current[`iChannel${o}`]?.isNeeded) {
          if (!l.current) return;
          const we = n.getUniformLocation(
            l.current,
            `iChannel${o}`
          );
          n.activeTexture(n.TEXTURE0 + o), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(we, o), g && d.updateTexture(
            y,
            O,
            Y
          );
        }
      }
  }, k = (r) => {
    const n = v.current;
    if (!n) return;
    n.viewport(0, 0, n.drawingBufferWidth, n.drawingBufferHeight), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT), n.bindBuffer(n.ARRAY_BUFFER, b.current), n.vertexAttribPointer(
      I.current ?? 0,
      3,
      n.FLOAT,
      !1,
      0,
      0
    ), pe(r), n.drawArrays(n.TRIANGLE_STRIP, 0, 4);
    const e = u.current.iMouse?.value;
    if (u.current.iMouse?.isNeeded && L !== 1 && Array.isArray(e)) {
      const c = e[0] ?? 0, o = e[1] ?? 0;
      e[0] = fe(c, w.current[0] ?? 0, L), e[1] = fe(o, w.current[1] ?? 0, L);
    }
    X.current = requestAnimationFrame(k);
  }, Ee = () => {
    const r = { passive: !0 };
    u.current.iMouse?.isNeeded && f.current && (f.current.addEventListener("mousemove", $, r), f.current.addEventListener("mouseout", S, r), f.current.addEventListener("mouseup", S, r), f.current.addEventListener("mousedown", B, r), f.current.addEventListener("touchmove", $, r), f.current.addEventListener("touchend", S, r), f.current.addEventListener("touchstart", B, r)), u.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      j,
      r
    ), f.current && (_.current = new ResizeObserver(V), _.current.observe(f.current), window.addEventListener("resize", V, r));
  }, Te = () => {
    const r = { passive: !0 };
    u.current.iMouse?.isNeeded && f.current && (f.current.removeEventListener("mousemove", $, r), f.current.removeEventListener("mouseout", S, r), f.current.removeEventListener("mouseup", S, r), f.current.removeEventListener("mousedown", B, r), f.current.removeEventListener("touchmove", $, r), f.current.removeEventListener("touchend", S, r), f.current.removeEventListener("touchstart", B, r)), u.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      j,
      r
    ), _.current && (_.current.disconnect(), window.removeEventListener("resize", V, r));
  };
  return q(() => {
    H.current = s;
  }, [s]), q(() => {
    const r = T.current;
    function n() {
      de();
      const e = v.current;
      e && f.current && (e.clearColor(...m), e.clearDepth(1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.viewport(0, 0, f.current.width, f.current.height), f.current.height = f.current.clientHeight, f.current.width = f.current.clientWidth, he(), ve(), me(ge(a || Le), i || Q), le(), requestAnimationFrame(k), Ee(), V());
    }
    return requestAnimationFrame(n), () => {
      const e = v.current;
      if (e) {
        if (e.getExtension("WEBGL_lose_context")?.loseContext(), e.useProgram(null), e.deleteProgram(l.current ?? null), r.length > 0)
          for (const c of r)
            e.deleteTexture(c._webglTexture);
        l.current = null;
      }
      Te(), cancelAnimationFrame(X.current ?? 0);
    };
  }, []), /* @__PURE__ */ _e(
    "canvas",
    {
      ref: f,
      style: { height: "100%", width: "100%", ...P }
    }
  );
}
export {
  be as ReactShaderToy
};
