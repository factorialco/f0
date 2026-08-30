import { useEffect as e, useRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/kits/ai/F0AuraVoiceAnimation/components/ReactShaderToy.tsx
var r = [
	"lowp",
	"mediump",
	"highp"
], i = "\nvoid main(void){\n    vec4 color = vec4(0.0,0.0,0.0,1.0);\n    mainImage( color, gl_FragCoord.xy );\n    gl_FragColor = color;\n}", a = "void mainImage( out vec4 fragColor, in vec2 fragCoord ) {\n    vec2 uv = fragCoord/iResolution.xy;\n    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n    fragColor = vec4(col,1.0);\n}", o = "attribute vec3 aVertexPosition;\nvoid main(void) {\n    gl_Position = vec4(aVertexPosition, 1.0);\n}", s = "iTime", c = "iTimeDelta", l = "iDate", u = "iFrame", d = "iMouse", f = "iResolution", p = "iChannel", m = "iChannelResolution", h = "iDeviceOrientation";
function g(e, t) {
	return e.includes("Matrix") && Array.isArray(t);
}
function _(e, t) {
	return e.includes("v") && Array.isArray(t) && t.length > Number.parseInt(e.charAt(0));
}
function v(e, t) {
	return !e.includes("v") && Array.isArray(t) && t.length > Number.parseInt(e.charAt(0));
}
var ee = (e, t, n, r) => {
	if (v(n, r)) switch (n) {
		case "2f": return e.uniform2f(t, r[0], r[1]);
		case "3f": return e.uniform3f(t, r[0], r[1], r[2]);
		case "4f": return e.uniform4f(t, r[0], r[1], r[2], r[3]);
		case "2i": return e.uniform2i(t, r[0], r[1]);
		case "3i": return e.uniform3i(t, r[0], r[1], r[2]);
		case "4i": return e.uniform4i(t, r[0], r[1], r[2], r[3]);
	}
	if (typeof r == "number") switch (n) {
		case "1i": return e.uniform1i(t, r);
		default: return e.uniform1f(t, r);
	}
	switch (n) {
		case "1iv": return e.uniform1iv(t, r);
		case "2iv": return e.uniform2iv(t, r);
		case "3iv": return e.uniform3iv(t, r);
		case "4iv": return e.uniform4iv(t, r);
		case "1fv": return e.uniform1fv(t, r);
		case "2fv": return e.uniform2fv(t, r);
		case "3fv": return e.uniform3fv(t, r);
		case "4fv": return e.uniform4fv(t, r);
		case "Matrix2fv": return e.uniformMatrix2fv(t, !1, r);
		case "Matrix3fv": return e.uniformMatrix3fv(t, !1, r);
		case "Matrix4fv": return e.uniformMatrix4fv(t, !1, r);
	}
}, te = (e) => {
	switch (e) {
		case "1f": return "float";
		case "2f": return "vec2";
		case "3f": return "vec3";
		case "4f": return "vec4";
		case "1i": return "int";
		case "2i": return "ivec2";
		case "3i": return "ivec3";
		case "4i": return "ivec4";
		case "1iv": return "int";
		case "2iv": return "ivec2";
		case "3iv": return "ivec3";
		case "4iv": return "ivec4";
		case "1fv": return "float";
		case "2fv": return "vec2";
		case "3fv": return "vec3";
		case "4fv": return "vec4";
		case "Matrix2fv": return "mat2";
		case "Matrix3fv": return "mat3";
		case "Matrix4fv": return "mat4";
		default: console.error(w(`The uniform type "${e}" is not valid, please make sure your uniform type is valid`));
	}
}, y = 9729, b = 9728, x = 9987, S = 33071, C = 10497, ne = class {
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
		let { gl: r } = this, i = r.RGBA, a = r.RGBA, o = r.UNSIGNED_BYTE;
		r.bindTexture(r.TEXTURE_2D, e), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, n), r.texImage2D(r.TEXTURE_2D, 0, i, a, o, t);
	};
	setupVideo = (e) => {
		let t = document.createElement("video"), n = !1, r = !1;
		t.autoplay = !0, t.muted = !0, t.loop = !0, t.crossOrigin = "anonymous";
		let i = () => {
			n && r && (this.isLoaded = !0);
		};
		return t.addEventListener("playing", () => {
			n = !0, this.width = t.videoWidth || 0, this.height = t.videoHeight || 0, i();
		}, !0), t.addEventListener("timeupdate", () => {
			r = !0, i();
		}, !0), t.src = e, t;
	};
	makePowerOf2 = (e) => e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageBitmap ? (this.pow2canvas === void 0 && (this.pow2canvas = document.createElement("canvas")), this.pow2canvas.width = 2 ** Math.floor(Math.log(e.width) / Math.LN2), this.pow2canvas.height = 2 ** Math.floor(Math.log(e.height) / Math.LN2), this.pow2canvas.getContext("2d")?.drawImage(e, 0, 0, this.pow2canvas.width, this.pow2canvas.height), console.warn(w(`Image is not power of two ${e.width} x ${e.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`)), this.pow2canvas) : e;
	load = async (e) => {
		let { gl: t } = this, { url: n, wrapS: r, wrapT: i, minFilter: a, magFilter: o, flipY: s = -1 } = e;
		if (!n) return Promise.reject(Error(w("Missing url, please make sure to pass the url of your texture { url: ... }")));
		let c = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), l = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
		if (c === null && l === null) return Promise.reject(Error(w(`Please upload a video or an image with a valid format (url: ${n})`)));
		Object.assign(this, {
			url: n,
			wrapS: r,
			wrapT: i,
			minFilter: a,
			magFilter: o,
			flipY: s
		});
		let u = t.RGBA, d = t.RGBA, f = t.UNSIGNED_BYTE, p = new Uint8Array([
			255,
			255,
			255,
			0
		]), m = t.createTexture();
		if (t.bindTexture(t.TEXTURE_2D, m), t.texImage2D(t.TEXTURE_2D, 0, u, 1, 1, 0, d, f, p), l) {
			let e = this.setupVideo(n);
			return t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), this._webglTexture = m, this.source = e, this.isVideo = !0, e.play().then(() => this);
		}
		async function h() {
			return new Promise((e, t) => {
				let r = new Image();
				r.crossOrigin = "anonymous", r.onload = () => {
					e(r);
				}, r.onerror = () => {
					t(Error(w(`failed loading url: ${n}`)));
				}, r.src = n ?? "";
			});
		}
		let g = await h(), _ = !(g.width & g.width - 1) && !(g.height & g.height - 1);
		return (e.wrapS !== S || e.wrapT !== S || e.minFilter !== b && e.minFilter !== y) && !_ && (g = this.makePowerOf2(g), _ = !0), t.bindTexture(t.TEXTURE_2D, m), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, s), t.texImage2D(t.TEXTURE_2D, 0, u, d, f, g), _ && e.minFilter !== b && e.minFilter !== y && t.generateMipmap(t.TEXTURE_2D), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, this.wrapS || C), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, this.wrapT || C), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, this.minFilter || x), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, this.magFilter || y), this._webglTexture = m, this.source = g, this.isVideo = !1, this.isLoaded = !0, this.width = g.width || 0, this.height = g.height || 0, this;
	};
}, w = (e) => `react-shaders: ${e}`, T = (e) => {
	if ("changedTouches" in e) {
		let t = e.changedTouches[0];
		return [t?.clientX ?? 0, t?.clientY ?? 0];
	}
	return [e.clientX, e.clientY];
}, E = (e, t, n) => e * (1 - n) + t * n, re = (e, t, n) => n > 0 ? e.substring(0, n) + t + e.substring(n, e.length) : t + e;
function D({ fs: v, vs: y = o, textures: b = [], uniforms: x, clearColor: S = [
	0,
	0,
	0,
	1
], precision: C = "highp", style: D, contextAttributes: O = {}, lerp: k = 1, devicePixelRatio: A = 1, onDoneLoadingTextures: j, onError: M = console.error, onWarning: N = console.warn }) {
	let P = t(null), F = t(null), I = t(null), L = t(null), R = t(void 0), z = t(void 0), ie = t(!1), B = t(void 0), ae = t(0), V = t([0, 0]), H = t([]), U = t(0), W = t(void 0), G = t({
		[s]: {
			type: "float",
			isNeeded: !1,
			value: 0
		},
		[c]: {
			type: "float",
			isNeeded: !1,
			value: 0
		},
		[l]: {
			type: "vec4",
			isNeeded: !1,
			value: [
				0,
				0,
				0,
				0
			]
		},
		[d]: {
			type: "vec4",
			isNeeded: !1,
			value: [
				0,
				0,
				0,
				0
			]
		},
		[f]: {
			type: "vec2",
			isNeeded: !1,
			value: [0, 0]
		},
		[u]: {
			type: "int",
			isNeeded: !1,
			value: 0
		},
		[h]: {
			type: "vec4",
			isNeeded: !1,
			value: [
				0,
				0,
				0,
				0
			]
		}
	}), K = t(x), q = (e, t) => {
		let n = "width" in e ? e.width ?? 0 : 0, r = "height" in e ? e.height ?? 0 : 0, i = G.current.iChannelResolution;
		if (!i) return;
		let a = Array.isArray(i.value) ? i.value : i.value = [];
		a[t * 3] = n * A, a[t * 3 + 1] = r * A, a[t * 3 + 2] = 0;
	}, oe = () => {
		P.current && (F.current = P.current.getContext("webgl", O) || P.current.getContext("experimental-webgl", O), F.current?.getExtension("OES_standard_derivatives"), F.current?.getExtension("EXT_shader_texture_lod"));
	}, se = () => {
		let e = F.current;
		I.current = e?.createBuffer() ?? null, e?.bindBuffer(e.ARRAY_BUFFER, I.current), e?.bufferData(e.ARRAY_BUFFER, new Float32Array([
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
		]), e.STATIC_DRAW);
	}, J = ({ alpha: e, beta: t, gamma: n }) => {
		G.current.iDeviceOrientation.value = [
			e ?? 0,
			t ?? 0,
			n ?? 0,
			window.orientation ?? 0
		];
	}, Y = (e) => {
		let [t = 0, n = 0] = T(e), r = t - (B.current?.left ?? 0) - window.pageXOffset, i = (B.current?.height ?? 0) - n - (B.current?.top ?? 0) - window.pageYOffset;
		ie.current = !0;
		let a = Array.isArray(G.current.iMouse?.value) ? G.current.iMouse.value : void 0;
		a && (a[2] = r, a[3] = i), V.current[0] = r, V.current[1] = i;
	}, X = (e) => {
		B.current = P.current?.getBoundingClientRect();
		let [t = 0, n = 0] = T(e), r = t - (B.current?.left ?? 0), i = (B.current?.height ?? 0) - n - (B.current?.top ?? 0);
		if (k !== 1) V.current[0] = r, V.current[1] = i;
		else {
			let e = Array.isArray(G.current.iMouse?.value) ? G.current.iMouse.value : void 0;
			e && (e[0] = r, e[1] = i);
		}
	}, Z = () => {
		let e = Array.isArray(G.current.iMouse?.value) ? G.current.iMouse.value : void 0;
		e && (e[2] = 0, e[3] = 0);
	}, Q = () => {
		let e = F.current;
		if (!e) return;
		B.current = P.current?.getBoundingClientRect();
		let t = A, n = Math.floor((B.current?.width ?? 1) * t), r = Math.floor((B.current?.height ?? 1) * t);
		if (e.canvas.width = n, e.canvas.height = r, G.current.iResolution?.isNeeded && L.current) {
			let t = e.getUniformLocation(L.current, f);
			e.uniform2fv(t, [e.canvas.width, e.canvas.height]);
		}
	}, $ = (e, t) => {
		let n = F.current;
		if (!n) return null;
		let r = n.createShader(e);
		if (!r) return null;
		if (n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS)) {
			N?.(w(`Error compiling the shader:\n${t}`));
			let e = n.getShaderInfoLog(r);
			n.deleteShader(r), M?.(w(`Shader compiler log: ${e}`));
		}
		return r;
	}, ce = (e, t) => {
		let n = F.current;
		if (!n) return;
		let r = $(n.FRAGMENT_SHADER, e), i = $(n.VERTEX_SHADER, t);
		if (L.current = n.createProgram(), !(!L.current || !i || !r)) {
			if (n.attachShader(L.current, i), n.attachShader(L.current, r), n.linkProgram(L.current), !n.getProgramParameter(L.current, n.LINK_STATUS)) {
				M?.(w(`Unable to initialize the shader program: ${n.getProgramInfoLog(L.current)}`));
				return;
			}
			n.useProgram(L.current), R.current = n.getAttribLocation(L.current, "aVertexPosition"), n.enableVertexAttribArray(R.current);
		}
	}, le = () => {
		if (x) for (let e of Object.keys(x)) {
			let t = x[e];
			if (!t) continue;
			let { value: n, type: r } = t, i = te(r);
			if (!i) continue;
			let a = {};
			if (g(r, n)) {
				let e = r.length, t = Number.parseInt(r.charAt(e - 3)), i = Math.floor(n.length / (t * t));
				n.length > t * t && (a.arraySize = `[${i}]`);
			} else _(r, n) && (a.arraySize = `[${Math.floor(n.length / Number.parseInt(r.charAt(0)))}]`);
			G.current[e] = {
				type: i,
				isNeeded: !1,
				value: n,
				...a
			};
		}
	}, ue = () => {
		let e = F.current;
		if (e) {
			if (b && b.length > 0) {
				G.current[`${m}`] = {
					type: "vec3",
					isNeeded: !1,
					arraySize: `[${b.length}]`,
					value: []
				};
				let t = b.map((t, n) => (G.current[`${p}${n}`] = {
					type: "sampler2D",
					isNeeded: !1
				}, q(t, n), H.current[n] = new ne(e), H.current[n]?.load(t).then((e) => {
					q(e, n);
				})));
				Promise.all(t).then(() => {
					j && j();
				}).catch((e) => {
					M?.(e), j && j();
				});
			} else j && j();
		}
	}, de = (e) => {
		let t = r.includes(C ?? "highp"), n = `precision ${t ? C : r[1]} float;\n`;
		t || N?.(w(`wrong precision type ${C}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`));
		let a = n.concat(`#define DPR ${A.toFixed(1)}\n`).concat(e.replace(/texture\(/g, "texture2D("));
		for (let t of Object.keys(G.current)) if (e.includes(t)) {
			let e = G.current[t];
			if (!e) continue;
			a = re(a, `uniform ${e.type} ${t}${e.arraySize || ""}; \n`, a.lastIndexOf(n) + n.length), e.isNeeded = !0;
		}
		return e.includes("mainImage") && (a = a.concat(i)), a;
	}, fe = (e) => {
		let t = F.current;
		if (!t || !L.current) return;
		let n = U.current ? (e - U.current) / 1e3 : 0;
		U.current = e;
		let r = K.current;
		if (r) for (let e of Object.keys(r)) {
			let n = r[e];
			if (n && G.current[e]?.isNeeded) {
				if (!L.current) return;
				let r = t.getUniformLocation(L.current, e);
				if (!r) return;
				ee(t, r, n.type, n.value);
			}
		}
		if (G.current.iMouse?.isNeeded) {
			let e = t.getUniformLocation(L.current, d);
			t.uniform4fv(e, G.current.iMouse.value);
		}
		if (G.current.iChannelResolution?.isNeeded) {
			let e = t.getUniformLocation(L.current, m);
			t.uniform3fv(e, G.current.iChannelResolution.value);
		}
		if (G.current.iDeviceOrientation?.isNeeded) {
			let e = t.getUniformLocation(L.current, h);
			t.uniform4fv(e, G.current.iDeviceOrientation.value);
		}
		if (G.current.iTime?.isNeeded) {
			let e = t.getUniformLocation(L.current, s);
			t.uniform1f(e, ae.current += n);
		}
		if (G.current.iTimeDelta?.isNeeded) {
			let e = t.getUniformLocation(L.current, c);
			t.uniform1f(e, n);
		}
		if (G.current.iDate?.isNeeded) {
			let e = /* @__PURE__ */ new Date(), n = e.getMonth() + 1, r = e.getDate(), i = e.getFullYear(), a = e.getHours() * 60 * 60 + e.getMinutes() * 60 + e.getSeconds() + e.getMilliseconds() * .001, o = t.getUniformLocation(L.current, l);
			t.uniform4fv(o, [
				i,
				n,
				r,
				a
			]);
		}
		if (G.current.iFrame?.isNeeded) {
			let e = t.getUniformLocation(L.current, u), n = G.current.iFrame.value;
			t.uniform1i(e, n), G.current.iFrame.value = n + 1;
		}
		if (H.current.length > 0) for (let e = 0; e < H.current.length; e++) {
			let n = H.current[e];
			if (!n) return;
			let { isVideo: r, _webglTexture: i, source: a, flipY: o, isLoaded: s } = n;
			if (!s || !i || !a) return;
			if (G.current[`iChannel${e}`]?.isNeeded) {
				if (!L.current) return;
				let s = t.getUniformLocation(L.current, `iChannel${e}`);
				t.activeTexture(t.TEXTURE0 + e), t.bindTexture(t.TEXTURE_2D, i), t.uniform1i(s, e), r && n.updateTexture(i, a, o);
			}
		}
	}, pe = (e) => {
		let t = F.current;
		if (!t) return;
		t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), t.bindBuffer(t.ARRAY_BUFFER, I.current), t.vertexAttribPointer(R.current ?? 0, 3, t.FLOAT, !1, 0, 0), fe(e), t.drawArrays(t.TRIANGLE_STRIP, 0, 4);
		let n = G.current.iMouse?.value;
		if (G.current.iMouse?.isNeeded && k !== 1 && Array.isArray(n)) {
			let e = n[0] ?? 0, t = n[1] ?? 0;
			n[0] = E(e, V.current[0] ?? 0, k), n[1] = E(t, V.current[1] ?? 0, k);
		}
		z.current = requestAnimationFrame(pe);
	}, me = () => {
		let e = { passive: !0 };
		G.current.iMouse?.isNeeded && P.current && (P.current.addEventListener("mousemove", X, e), P.current.addEventListener("mouseout", Z, e), P.current.addEventListener("mouseup", Z, e), P.current.addEventListener("mousedown", Y, e), P.current.addEventListener("touchmove", X, e), P.current.addEventListener("touchend", Z, e), P.current.addEventListener("touchstart", Y, e)), G.current.iDeviceOrientation?.isNeeded && window.addEventListener("deviceorientation", J, e), P.current && (W.current = new ResizeObserver(Q), W.current.observe(P.current), window.addEventListener("resize", Q, e));
	}, he = () => {
		let e = { passive: !0 };
		G.current.iMouse?.isNeeded && P.current && (P.current.removeEventListener("mousemove", X, e), P.current.removeEventListener("mouseout", Z, e), P.current.removeEventListener("mouseup", Z, e), P.current.removeEventListener("mousedown", Y, e), P.current.removeEventListener("touchmove", X, e), P.current.removeEventListener("touchend", Z, e), P.current.removeEventListener("touchstart", Y, e)), G.current.iDeviceOrientation?.isNeeded && window.removeEventListener("deviceorientation", J, e), W.current && (W.current.disconnect(), window.removeEventListener("resize", Q, e));
	};
	return e(() => {
		K.current = x;
	}, [x]), e(() => {
		let e = H.current;
		function t() {
			oe();
			let e = F.current;
			e && P.current && (e.clearColor(...S), e.clearDepth(1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.viewport(0, 0, P.current.width, P.current.height), P.current.height = P.current.clientHeight, P.current.width = P.current.clientWidth, le(), ue(), ce(de(v || a), y || o), se(), requestAnimationFrame(pe), me(), Q());
		}
		return requestAnimationFrame(t), () => {
			let t = F.current;
			if (t) {
				if (t.getExtension("WEBGL_lose_context")?.loseContext(), t.useProgram(null), t.deleteProgram(L.current ?? null), e.length > 0) for (let n of e) t.deleteTexture(n._webglTexture);
				L.current = null;
			}
			he(), cancelAnimationFrame(z.current ?? 0);
		};
	}, []), /* @__PURE__ */ n("canvas", {
		ref: P,
		style: {
			height: "100%",
			width: "100%",
			...D
		}
	});
}
//#endregion
export { D as ReactShaderToy };
