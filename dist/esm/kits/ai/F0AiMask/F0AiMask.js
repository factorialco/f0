import { computeBorderGeometry as e } from "./gl/geometry.js";
import { createProgram as t } from "./gl/program.js";
import n from "./gl/shaders/fragment.js";
import r from "./gl/shaders/vertex.js";
//#region src/kits/ai/F0AiMask/F0AiMask.ts
var i = [
	"rgb(229, 25, 67)",
	"rgb(229, 86, 25)",
	"rgb(229, 25, 67)",
	"rgb(161, 173, 229)"
];
function a(e) {
	let t = e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
	if (!t) throw Error(`Invalid color format: ${e}`);
	let [, n, r, i] = t;
	return [
		parseInt(n) / 255,
		parseInt(r) / 255,
		parseInt(i) / 255
	];
}
var o = class {
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
		if (this.disposed) throw Error("Mask instance has been disposed.");
		if (this.running) return;
		if (!this.glr) {
			console.error("WebGL resources are not initialized.");
			return;
		}
		this.running = !0, this.startTime = performance.now(), this.resize(this.options.width ?? 600, this.options.height ?? 600, this.options.ratio), this.glr.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.glr.gl.useProgram(this.glr.program), this.glr.gl.uniform2f(this.glr.uResolution, this.canvas.width, this.canvas.height), this.checkGLError(this.glr.gl, "start: after initial setup");
		let e = () => {
			if (!this.running || !this.glr) return;
			this.rafId = requestAnimationFrame(e);
			let t = performance.now();
			if (t - this.lastTime < 1e3 / 32) return;
			this.lastTime = t;
			let n = (t - this.startTime) * .001;
			this.render(n);
		};
		this.rafId = requestAnimationFrame(e);
	}
	pause() {
		if (this.disposed) throw Error("Mask instance has been disposed.");
		this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
	}
	dispose() {
		if (this.disposed) return;
		this.disposed = !0, this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
		let { gl: e, vao: t, positionBuffer: n, uvBuffer: r, program: i } = this.glr;
		t && e.deleteVertexArray(t), n && e.deleteBuffer(n), r && e.deleteBuffer(r), e.deleteProgram(i), this.observer && this.observer.disconnect(), this.canvas.remove();
	}
	resize(t, n, r) {
		if (this.disposed) throw Error("Mask instance has been disposed.");
		if (this.options.width = t, this.options.height = n, r && (this.options.ratio = r), !this.running) return;
		let { gl: i, program: a, vao: o, positionBuffer: s, uvBuffer: c, uResolution: l } = this.glr, u = r ?? this.options.ratio ?? window.devicePixelRatio ?? 1, d = Math.max(1, Math.floor(t * u)), f = Math.max(1, Math.floor(n * u));
		this.canvas.style.width = `${t}px`, this.canvas.style.height = `${n}px`, (this.canvas.width !== d || this.canvas.height !== f) && (this.canvas.width = d, this.canvas.height = f), i.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(i, "resize: after viewport setup");
		let { positions: p, uvs: m } = e(this.canvas.width, this.canvas.height, this.options.borderWidth * u, this.options.glowWidth * u);
		i.bindVertexArray(o), i.bindBuffer(i.ARRAY_BUFFER, s), i.bufferData(i.ARRAY_BUFFER, p, i.STATIC_DRAW);
		let h = i.getAttribLocation(a, "aPosition");
		i.enableVertexAttribArray(h), i.vertexAttribPointer(h, 2, i.FLOAT, !1, 0, 0), this.checkGLError(i, "resize: after position buffer update"), i.bindBuffer(i.ARRAY_BUFFER, c), i.bufferData(i.ARRAY_BUFFER, m, i.STATIC_DRAW);
		let g = i.getAttribLocation(a, "aUV");
		i.enableVertexAttribArray(g), i.vertexAttribPointer(g, 2, i.FLOAT, !1, 0, 0), this.checkGLError(i, "resize: after UV buffer update"), i.useProgram(a), i.uniform2f(l, this.canvas.width, this.canvas.height), i.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * u), i.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * u), i.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * u), this.checkGLError(i, "resize: after uniform updates");
		let _ = performance.now();
		this.lastTime = _;
		let v = (_ - this.startTime) * .001;
		this.render(v);
	}
	autoResize(e) {
		this.observer && this.observer.disconnect(), this.observer = new ResizeObserver(() => {
			let t = e.getBoundingClientRect();
			this.resize(t.width, t.height);
		}), this.observer.observe(e);
	}
	fadeIn() {
		if (this.disposed) throw Error("Mask instance has been disposed.");
		return new Promise((e, t) => {
			let n = this.canvas.animate([{
				opacity: 0,
				transform: "scale(1.2)"
			}, {
				opacity: 1,
				transform: "scale(1)"
			}], {
				duration: 300,
				easing: "ease-out",
				fill: "forwards"
			});
			n.onfinish = () => e(), n.oncancel = () => t("canceled");
		});
	}
	fadeOut() {
		if (this.disposed) throw Error("Mask instance has been disposed.");
		return new Promise((e, t) => {
			let n = this.canvas.animate([{
				opacity: 1,
				transform: "scale(1)"
			}, {
				opacity: 0,
				transform: "scale(1.2)"
			}], {
				duration: 300,
				easing: "ease-in",
				fill: "forwards"
			});
			n.onfinish = () => e(), n.oncancel = () => t("canceled");
		});
	}
	checkGLError(e, t) {
		let n = e.getError();
		if (n !== e.NO_ERROR) for (console.error(`WebGL Error in ${t}`); n !== e.NO_ERROR;) {
			let t = this.getGLErrorName(e, n);
			console.error(`${t} (0x${n.toString(16)})`), n = e.getError();
		}
	}
	getGLErrorName(e, t) {
		switch (t) {
			case e.INVALID_ENUM: return "INVALID_ENUM";
			case e.INVALID_VALUE: return "INVALID_VALUE";
			case e.INVALID_OPERATION: return "INVALID_OPERATION";
			case e.INVALID_FRAMEBUFFER_OPERATION: return "INVALID_FRAMEBUFFER_OPERATION";
			case e.OUT_OF_MEMORY: return "OUT_OF_MEMORY";
			case e.CONTEXT_LOST_WEBGL: return "CONTEXT_LOST_WEBGL";
			default: return "UNKNOWN_ERROR";
		}
	}
	setupGL() {
		let o = this.canvas.getContext("webgl2", {
			antialias: !1,
			alpha: !0
		});
		if (!o) throw Error("WebGL2 is required but not available.");
		let s = t(o, r, n);
		this.checkGLError(o, "setupGL: after createProgram");
		let c = o.createVertexArray();
		o.bindVertexArray(c), this.checkGLError(o, "setupGL: after VAO creation");
		let l = this.canvas.width || 2, u = this.canvas.height || 2, { positions: d, uvs: f } = e(l, u, this.options.borderWidth, this.options.glowWidth), p = o.createBuffer();
		o.bindBuffer(o.ARRAY_BUFFER, p), o.bufferData(o.ARRAY_BUFFER, d, o.STATIC_DRAW);
		let m = o.getAttribLocation(s, "aPosition");
		o.enableVertexAttribArray(m), o.vertexAttribPointer(m, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "setupGL: after position buffer setup");
		let h = o.createBuffer();
		o.bindBuffer(o.ARRAY_BUFFER, h), o.bufferData(o.ARRAY_BUFFER, f, o.STATIC_DRAW);
		let g = o.getAttribLocation(s, "aUV");
		o.enableVertexAttribArray(g), o.vertexAttribPointer(g, 2, o.FLOAT, !1, 0, 0), this.checkGLError(o, "setupGL: after UV buffer setup");
		let _ = o.getUniformLocation(s, "uResolution"), v = o.getUniformLocation(s, "uTime"), y = o.getUniformLocation(s, "uBorderWidth"), b = o.getUniformLocation(s, "uGlowWidth"), x = o.getUniformLocation(s, "uBorderRadius"), S = o.getUniformLocation(s, "uColors"), C = o.getUniformLocation(s, "uGlowExponent"), w = o.getUniformLocation(s, "uGlowFactor");
		o.useProgram(s), o.uniform1f(y, this.options.borderWidth), o.uniform1f(b, this.options.glowWidth), o.uniform1f(x, this.options.borderRadius), this.options.mode === "dark" ? (o.uniform1f(C, 2), o.uniform1f(w, 1.8)) : (o.uniform1f(C, 1), o.uniform1f(w, 1));
		let T = (this.options.colors || i).map(a);
		for (let e = 0; e < T.length; e++) o.uniform3f(o.getUniformLocation(s, `uColors[${e}]`), ...T[e]);
		this.checkGLError(o, "setupGL: after uniform setup"), o.bindVertexArray(null), o.bindBuffer(o.ARRAY_BUFFER, null), this.glr = {
			gl: o,
			program: s,
			vao: c,
			positionBuffer: p,
			uvBuffer: h,
			uResolution: _,
			uTime: v,
			uBorderWidth: y,
			uGlowWidth: b,
			uBorderRadius: x,
			uColors: S
		};
	}
	render(e) {
		if (!this.glr) return;
		let { gl: t, program: n, vao: r, uTime: i } = this.glr;
		t.useProgram(n), t.bindVertexArray(r), t.uniform1f(i, e), t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.disable(t.BLEND), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLES, 0, 24), this.checkGLError(t, "render: after draw call"), t.bindVertexArray(null);
	}
};
//#endregion
export { o as F0AiMask };
