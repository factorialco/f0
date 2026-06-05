import { computeBorderGeometry as w } from "./gl/geometry.js";
import { createProgram as L } from "./gl/program.js";
import F from "./gl/shaders/fragment.js";
import T from "./gl/shaders/vertex.js";
const B = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function _(g) {
  const t = g.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!t)
    throw new Error(`Invalid color format: ${g}`);
  const [, r, i, e] = t;
  return [parseInt(r) / 255, parseInt(i) / 255, parseInt(e) / 255];
}
class N {
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
  constructor(t = {}) {
    this.options = {
      width: t.width ?? 600,
      height: t.height ?? 600,
      ratio: t.ratio ?? window.devicePixelRatio ?? 1,
      borderWidth: t.borderWidth ?? 8,
      glowWidth: t.glowWidth ?? 200,
      borderRadius: t.borderRadius ?? 8,
      mode: t.mode ?? "light",
      ...t
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
    const t = () => {
      if (!this.running || !this.glr) return;
      this.rafId = requestAnimationFrame(t);
      const r = performance.now();
      if (r - this.lastTime < 1e3 / 32) return;
      this.lastTime = r;
      const e = (r - this.startTime) * 1e-3;
      this.render(e);
    };
    this.rafId = requestAnimationFrame(t);
  }
  pause() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = !0, this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
    const { gl: t, vao: r, positionBuffer: i, uvBuffer: e, program: o } = this.glr;
    r && t.deleteVertexArray(r), i && t.deleteBuffer(i), e && t.deleteBuffer(e), t.deleteProgram(o), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(t, r, i) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = t, this.options.height = r, i && (this.options.ratio = i), !this.running) return;
    const { gl: e, program: o, vao: A, positionBuffer: b, uvBuffer: c, uResolution: f } = this.glr, s = i ?? this.options.ratio ?? window.devicePixelRatio ?? 1, n = Math.max(1, Math.floor(t * s)), d = Math.max(1, Math.floor(r * s));
    this.canvas.style.width = `${t}px`, this.canvas.style.height = `${r}px`, (this.canvas.width !== n || this.canvas.height !== d) && (this.canvas.width = n, this.canvas.height = d), e.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(e, "resize: after viewport setup");
    const { positions: R, uvs: u } = w(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * s,
      this.options.glowWidth * s
    );
    e.bindVertexArray(A), e.bindBuffer(e.ARRAY_BUFFER, b), e.bufferData(e.ARRAY_BUFFER, R, e.STATIC_DRAW);
    const a = e.getAttribLocation(o, "aPosition");
    e.enableVertexAttribArray(a), e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "resize: after position buffer update"), e.bindBuffer(e.ARRAY_BUFFER, c), e.bufferData(e.ARRAY_BUFFER, u, e.STATIC_DRAW);
    const h = e.getAttribLocation(o, "aUV");
    e.enableVertexAttribArray(h), e.vertexAttribPointer(h, 2, e.FLOAT, !1, 0, 0), this.checkGLError(e, "resize: after UV buffer update"), e.useProgram(o), e.uniform2f(f, this.canvas.width, this.canvas.height), e.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * s), e.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * s), e.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * s), this.checkGLError(e, "resize: after uniform updates");
    const l = performance.now();
    this.lastTime = l;
    const m = (l - this.startTime) * 1e-3;
    this.render(m);
  }
  /**
   * Automatically resizes the canvas to match the dimensions of the given element.
   * @note using ResizeObserver
   */
  autoResize(t) {
    this.observer && this.observer.disconnect(), this.observer = new ResizeObserver(() => {
      const r = t.getBoundingClientRect();
      this.resize(r.width, r.height);
    }), this.observer.observe(t);
  }
  fadeIn() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((t, r) => {
      const i = this.canvas.animate(
        [
          { opacity: 0, transform: "scale(1.2)" },
          { opacity: 1, transform: "scale(1)" }
        ],
        { duration: 300, easing: "ease-out", fill: "forwards" }
      );
      i.onfinish = () => t(), i.oncancel = () => r("canceled");
    });
  }
  fadeOut() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((t, r) => {
      const i = this.canvas.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.2)" }
        ],
        { duration: 300, easing: "ease-in", fill: "forwards" }
      );
      i.onfinish = () => t(), i.oncancel = () => r("canceled");
    });
  }
  checkGLError(t, r) {
    let i = t.getError();
    if (i !== t.NO_ERROR)
      for (console.error(`WebGL Error in ${r}`); i !== t.NO_ERROR; ) {
        const e = this.getGLErrorName(t, i);
        console.error(`${e} (0x${i.toString(16)})`), i = t.getError();
      }
  }
  getGLErrorName(t, r) {
    switch (r) {
      case t.INVALID_ENUM:
        return "INVALID_ENUM";
      case t.INVALID_VALUE:
        return "INVALID_VALUE";
      case t.INVALID_OPERATION:
        return "INVALID_OPERATION";
      case t.INVALID_FRAMEBUFFER_OPERATION:
        return "INVALID_FRAMEBUFFER_OPERATION";
      case t.OUT_OF_MEMORY:
        return "OUT_OF_MEMORY";
      case t.CONTEXT_LOST_WEBGL:
        return "CONTEXT_LOST_WEBGL";
      default:
        return "UNKNOWN_ERROR";
    }
  }
  setupGL() {
    const t = this.canvas.getContext("webgl2", {
      antialias: !1,
      alpha: !0
    });
    if (!t)
      throw new Error("WebGL2 is required but not available.");
    const r = L(t, T, F);
    this.checkGLError(t, "setupGL: after createProgram");
    const i = t.createVertexArray();
    t.bindVertexArray(i), this.checkGLError(t, "setupGL: after VAO creation");
    const e = this.canvas.width || 2, o = this.canvas.height || 2, { positions: A, uvs: b } = w(
      e,
      o,
      this.options.borderWidth,
      this.options.glowWidth
    ), c = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, c), t.bufferData(t.ARRAY_BUFFER, A, t.STATIC_DRAW);
    const f = t.getAttribLocation(r, "aPosition");
    t.enableVertexAttribArray(f), t.vertexAttribPointer(f, 2, t.FLOAT, !1, 0, 0), this.checkGLError(t, "setupGL: after position buffer setup");
    const s = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, s), t.bufferData(t.ARRAY_BUFFER, b, t.STATIC_DRAW);
    const n = t.getAttribLocation(r, "aUV");
    t.enableVertexAttribArray(n), t.vertexAttribPointer(n, 2, t.FLOAT, !1, 0, 0), this.checkGLError(t, "setupGL: after UV buffer setup");
    const d = t.getUniformLocation(r, "uResolution"), R = t.getUniformLocation(r, "uTime"), u = t.getUniformLocation(r, "uBorderWidth"), a = t.getUniformLocation(r, "uGlowWidth"), h = t.getUniformLocation(r, "uBorderRadius"), l = t.getUniformLocation(r, "uColors"), m = t.getUniformLocation(r, "uGlowExponent"), E = t.getUniformLocation(r, "uGlowFactor");
    t.useProgram(r), t.uniform1f(u, this.options.borderWidth), t.uniform1f(a, this.options.glowWidth), t.uniform1f(h, this.options.borderRadius), this.options.mode === "dark" ? (t.uniform1f(m, 2), t.uniform1f(E, 1.8)) : (t.uniform1f(m, 1), t.uniform1f(E, 1));
    const v = (this.options.colors || B).map(_);
    for (let p = 0; p < v.length; p++)
      t.uniform3f(
        t.getUniformLocation(r, `uColors[${p}]`),
        ...v[p]
      );
    this.checkGLError(t, "setupGL: after uniform setup"), t.bindVertexArray(null), t.bindBuffer(t.ARRAY_BUFFER, null), this.glr = {
      gl: t,
      program: r,
      vao: i,
      positionBuffer: c,
      uvBuffer: s,
      uResolution: d,
      uTime: R,
      uBorderWidth: u,
      uGlowWidth: a,
      uBorderRadius: h,
      uColors: l
    };
  }
  render(t) {
    if (!this.glr) return;
    const { gl: r, program: i, vao: e, uTime: o } = this.glr;
    r.useProgram(i), r.bindVertexArray(e), r.uniform1f(o, t), r.disable(r.DEPTH_TEST), r.disable(r.CULL_FACE), r.disable(r.BLEND), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.drawArrays(r.TRIANGLES, 0, 24), this.checkGLError(r, "render: after draw call"), r.bindVertexArray(null);
  }
}
export {
  N as F0AiMask
};
