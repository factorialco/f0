import { t as e } from "./rolldown-runtime-CEFd7nDs.js";
import { t } from "./dist-CqnuTXEz.js";
import { d as n, t as r } from "./OneEllipsis-DuhKMtYp.js";
import { A as i, B as a, D as o, G as s, H as c, J as l, K as u, L as d, M as f, N as p, Q as m, R as h, U as g, V as _, W as v, X as y, Y as b, Z as x, _ as S, ht as ee, it as C, j as w, k as T, lt as te, nt as ne, rt as re, z as E } from "./variants-D_OHTcOj.js";
import { t as D } from "./utils-CVzxZnoI.js";
import { _ as O } from "./value-BbnmXVI5.js";
import { r as ie } from "./F0Button-B67qxFBP.js";
import { _ as ae, p as oe } from "./popover-By8ytmVb.js";
import { d as se } from "./input-B2JSUD-n.js";
import { _ as ce, x as le } from "./progress-BbpMKllH.js";
import { s as ue } from "./F0Avatar-CyikaOUL.js";
import { c as de, d as fe, n as pe, r as me, s as he, t as ge } from "./dist-zRL9MpsG.js";
import * as k from "react";
import { createContext as _e, forwardRef as A, useCallback as j, useContext as ve, useEffect as ye, useMemo as be, useRef as M, useState as xe } from "react";
import { jsx as N, jsxs as P } from "react/jsx-runtime";
import './F0AiFormRegistry.css';//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function Se(e) {
	return typeof e == "object" && !Array.isArray(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function Ce(e, t, n, r) {
	return typeof e == "string" && Se(t) ? d(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function we(e, t, n) {
	return e * (t + 1);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function Te(e, t, n, r) {
	return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : r.get(t) ?? e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/wrap.mjs
var Ee = (e, t, n) => {
	let r = t - e;
	return ((n - e) % r + r) % r + e;
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
function De(e, t) {
	return v(e) ? e[Ee(0, e.length, t)] : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function Oe(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		i.at > t && i.at < n && (ne(e, i), r--);
	}
}
function ke(e, t, n, r, i, a) {
	Oe(e, i, a);
	for (let o = 0; o < t.length; o++) e.push({
		value: t[o],
		at: x(i, a, r[o]),
		easing: De(n, o)
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function Ae(e, t) {
	for (let n = 0; n < e.length; n++) e[n] = e[n] / (t + 1);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function je(e, t) {
	return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/create.mjs
var Me = "easeInOut", Ne = 20;
function Pe(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
	let a = t.duration || .3, o = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = {}, f = /* @__PURE__ */ new Map(), p = 0, h = 0, _ = 0;
	for (let n = 0; n < e.length; n++) {
		let o = e[n];
		if (typeof o == "string") {
			f.set(o, h);
			continue;
		}
		if (!Array.isArray(o)) {
			f.set(o.name, Te(h, o.at, p, f));
			continue;
		}
		let [l, v, b = {}] = o;
		b.at !== void 0 && (h = Te(h, b.at, p, f));
		let x = 0, S = (e, n, r, o = 0, c = 0) => {
			let l = Le(e), { delay: d = 0, times: f = s(l), type: p = "keyframes", repeat: v, repeatType: b, repeatDelay: S = 0, ...ee } = n, { ease: w = t.ease || "easeOut", duration: T } = n, te = typeof d == "function" ? d(o, c) : d, ne = l.length, re = g(p) ? p : i?.[p];
			if (ne <= 2 && re) {
				let e = 100;
				if (ne === 2 && Be(l)) {
					let t = l[1] - l[0];
					e = Math.abs(t);
				}
				let t = { ...ee };
				T !== void 0 && (t.duration = m(T));
				let n = y(t, e, re);
				w = n.ease, T = n.duration;
			}
			T ??= a;
			let E = h + te;
			f.length === 1 && f[0] === 0 && (f[1] = 1);
			let D = f.length - l.length;
			if (D > 0 && u(f, D), l.length === 1 && l.unshift(null), v) {
				C(v < Ne, "Repeat count too high, must be less than 20"), T = we(T, v);
				let e = [...l], t = [...f];
				w = Array.isArray(w) ? [...w] : [w];
				let n = [...w];
				for (let r = 0; r < v; r++) {
					l.push(...e);
					for (let i = 0; i < e.length; i++) f.push(t[i] + (r + 1)), w.push(i === 0 ? "linear" : De(n, i - 1));
				}
				Ae(f, v);
			}
			let O = E + T;
			ke(r, l, w, f, E, O), x = Math.max(te + T, x), _ = Math.max(O, _);
		};
		if (re(l)) {
			let e = Fe(l, c);
			S(v, b, Ie("default", e));
		} else {
			let e = Ce(l, v, r, d), t = e.length;
			for (let n = 0; n < t; n++) {
				v = v, b = b;
				let r = e[n], i = Fe(r, c);
				for (let e in v) S(v[e], Re(b, e), Ie(e, i), n, t);
			}
		}
		p = h, h += x;
	}
	return c.forEach((e, r) => {
		for (let i in e) {
			let a = e[i];
			a.sort(je);
			let s = [], c = [], u = [];
			for (let e = 0; e < a.length; e++) {
				let { at: t, value: n, easing: r } = a[e];
				s.push(n), c.push(l(0, _, t)), u.push(r || "easeOut");
			}
			c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), u.unshift(Me)), c[c.length - 1] !== 1 && (c.push(1), s.push(null)), o.has(r) || o.set(r, {
				keyframes: {},
				transition: {}
			});
			let d = o.get(r);
			d.keyframes[i] = s, d.transition[i] = {
				...t,
				duration: _,
				ease: u,
				times: c,
				...n
			};
		}
	}), o;
}
function Fe(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function Ie(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function Le(e) {
	return Array.isArray(e) ? e : [e];
}
function Re(e, t) {
	return e && e[t] ? {
		...e,
		...e[t]
	} : { ...e };
}
var ze = (e) => typeof e == "number", Be = (e) => e.every(ze);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/object/ObjectVisualElement.mjs
function Ve(e, t) {
	return e in t;
}
var He = class extends f {
	constructor() {
		super(...arguments), this.type = "object";
	}
	readValueFromInstance(e, t) {
		if (Ve(t, e)) {
			let n = e[t];
			if (typeof n == "string" || typeof n == "number") return n;
		}
	}
	getBaseTargetFromProps() {}
	removeValueFromRenderState(e, t) {
		delete t.output[e];
	}
	measureInstanceViewportBox() {
		return _();
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
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function Ue(e) {
	let t = {
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
	}, n = E(e) && !h(e) ? new i(t) : new w(t);
	n.mount(e), p.set(e, n);
}
function We(e) {
	let t = new He({
		presenceContext: null,
		props: {},
		visualState: {
			renderState: { output: {} },
			latestValues: {}
		}
	});
	t.mount(e), p.set(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/subject.mjs
function Ge(e, t) {
	return re(e) || typeof e == "number" || typeof e == "string" && !Se(t);
}
function Ke(e, t, n, r) {
	let i = [];
	if (Ge(e, t)) i.push(a(e, Se(t) && t.default || t, n && (n.default || n)));
	else {
		let a = Ce(e, t, r), o = a.length;
		C(!!o, "No valid elements provided.");
		for (let e = 0; e < o; e++) {
			let r = a[e], s = r instanceof Element ? Ue : We;
			p.has(r) || s(r);
			let l = p.get(r), u = { ...n };
			"delay" in u && typeof u.delay == "function" && (u.delay = u.delay(e, o)), i.push(...c(l, {
				...t,
				transition: u
			}, {}));
		}
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/sequence.mjs
function qe(e, t, n) {
	let r = [];
	return Pe(e, t, n, { spring: b }).forEach(({ keyframes: e, transition: t }, n) => {
		r.push(...Ke(n, e, t));
	}), r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/GroupAnimation.mjs
var Je = class {
	constructor(e) {
		this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
	}
	get finished() {
		return Promise.all(this.animations.map((e) => e.finished));
	}
	getAll(e) {
		return this.animations[0][e];
	}
	setAll(e, t) {
		for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
	}
	attachTimeline(e) {
		let t = this.animations.map((t) => t.attachTimeline(e));
		return () => {
			t.forEach((e, t) => {
				e && e(), this.animations[t].stop();
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
		for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
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
}, Ye = class extends Je {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs
function Xe(e) {
	return Array.isArray(e) && e.some(Array.isArray);
}
function Ze(e) {
	function t(t, n, r) {
		let i = [];
		i = Xe(t) ? qe(t, n, e) : Ke(t, n, r, e);
		let a = new Ye(i);
		return e && e.animations.push(a), a;
	}
	return t;
}
var Qe = Ze(), $e = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		d: "M12 14V6.99997"
	}), /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		d: "M12 17.1V17"
	})]
})), et = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 8H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 12H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M9 16L15 16"
		})
	]
})), tt = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 8H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 12H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 16H19"
		})
	]
})), nt = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 8H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 12H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 16H11"
		})
	]
})), rt = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 8H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 12H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M13 16H19"
		})
	]
})), it = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ N("path", {
		stroke: "currentColor",
		d: "M12.5 11.5C14.1569 11.5 15.5 10.1569 15.5 8.5C15.5 6.84315 14.1569 5.5 12.5 5.5L9 5.5C7.89543 5.5 7 6.39543 7 7.5L7 16.5C7 17.6046 7.89543 18.5 9 18.5H15"
	}), /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		d: "M14.8333 18.5C16.8584 18.5 18.5 16.933 18.5 15C18.5 13.067 16.8584 11.5 14.8333 11.5H7.5"
	})]
})), at = A((e, t) => /* @__PURE__ */ N("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 20 20",
	ref: t,
	...e,
	children: /* @__PURE__ */ N("path", {
		fill: "currentColor",
		d: "M10 7C7.75 7 7 7.75 7 10C7 12.25 7.75 13 10 13C12.25 13 13 12.25 13 10C13 7.75 12.25 7 10 7Z"
	})
})), ot = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M12 18L19.5 8"
	}), /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M4.5 13L7.67769 16.1777C8.11041 16.6104 8.82683 16.5564 9.18985 16.0638L15.5 7.5"
	})]
})), st = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M9 17L4 12L9 7"
	}), /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M15 17L20 12L15 7"
	})]
})), ct = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 7V12M5 17V12M5 12H12V7V17"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M18 7V17"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M16 9C17 9 18 8 18 7"
		})
	]
})), lt = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M4 7V12M4 17V12M4 12H11V7V17"
	}), /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M15 9.5V9.5C15 8.11929 16.1193 7 17.5 7V7C18.8807 7 20 8.11929 20 9.5V9.5C20 10.8807 18.8807 12 17.5 12V12C16.1193 12 15 13.1193 15 14.5V17H20"
	})]
})), ut = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M15 9V9C15 7.89543 15.8954 7 17 7H17.5C18.8807 7 20 8.11929 20 9.5V9.5C20 10.8807 18.8807 12 17.5 12V12"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M15 15V15C15 16.1046 15.8954 17 17 17H17.5C18.8807 17 20 15.8807 20 14.5V14.5C20 13.1193 18.8807 12 17.5 12V12"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M4 7V12M4 17V12M4 12H11V7V17"
		})
	]
})), dt = A((e, t) => /* @__PURE__ */ N("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M17 6H13M9 6H13M13 6L11 18H7H15"
	})
})), ft = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M9 7C9 5.34315 10.3431 4 12 4V4C13.6569 4 15 5.34315 15 7V11C15 12.6569 13.6569 14 12 14V14C10.3431 14 9 12.6569 9 11V7Z"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M18 11V11C18 14.3137 15.3137 17 12 17V17C8.68629 17 6 14.3137 6 11V11"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M12 17V20M12 20H10M12 20H14"
		})
	]
})), pt = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M7 4V10"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M13 7H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M13 12H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M13 17H19"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 14V14C5 12.8954 5.89543 12 7 12V12C8.10457 12 9 12.8954 9 14V14C9 15.1046 8.10457 16 7 16V16C5.89543 16 5 16.8954 5 18V19H9"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M5 6C6 6 7 5 7 4"
		})
	]
})), mt = A((e, t) => /* @__PURE__ */ N("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		d: "M15 11L10 16C9.44772 16.5523 8.55228 16.5523 8 16V16C7.44772 15.4477 7.44772 14.5523 8 14L15 7C16.1046 5.89543 17.8954 5.89543 19 7V7C20.1046 8.10457 20.1046 9.89543 19 11L12 18C10.3431 19.6569 7.65685 19.6569 6 18V18C4.34315 16.3431 4.34315 13.6569 6 12L11 7"
	})
})), ht = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M10 10V11"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M14 10V11"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M9.5 14V14C10.9616 15.1693 13.0384 15.1693 14.5 14V14"
		}),
		/* @__PURE__ */ N("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M18 3V6M18 9V6M18 6H15H21"
		})
	]
})), gt = A((e, t) => /* @__PURE__ */ N("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ N("path", {
		fill: "currentColor",
		d: "M8 5H16C17.6569 5 19 6.34315 19 8V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8C5 6.34315 6.34315 5 8 5Z"
	})
})), _t = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M15 7.5V7.5C14.7014 6.60421 13.8631 6 12.9189 6H11.6056C10.6025 6 9.6658 6.5013 9.1094 7.3359V7.3359C8.4376 8.3436 8.4376 9.6564 9.1094 10.6641V10.6641C9.6658 11.4987 10.6025 12 11.6056 12H12.3944C13.3975 12 14.3342 12.5013 14.8906 13.3359V13.3359C15.5624 14.3436 15.5624 15.6564 14.8906 16.6641V16.6641C14.3342 17.4987 13.3975 18 12.3944 18H11.0811C10.1369 18 9.2986 17.3958 9 16.5V16.5"
	}), /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M19 12H5"
	})]
})), vt = A((e, t) => /* @__PURE__ */ N("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M4 6H9M14 6H9M9 6V18M13 12H16M19 12H16M16 12V18"
	})
})), yt = A((e, t) => /* @__PURE__ */ P("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		d: "M16 6V11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11V6"
	}), /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M7 18H17"
	})]
})), bt = /* @__PURE__ */ e(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), xt = /* @__PURE__ */ e(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, ee = u, C = c, w = s, T = n, te = d, ne = i, re = h, E = m, D = r, O = o, ie = a, ae = f, oe = !1;
		function se(e) {
			return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ce(e) || x(e) === l;
		}
		function ce(e) {
			return x(e) === u;
		}
		function le(e) {
			return x(e) === c;
		}
		function ue(e) {
			return x(e) === s;
		}
		function de(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function fe(e) {
			return x(e) === d;
		}
		function pe(e) {
			return x(e) === i;
		}
		function me(e) {
			return x(e) === h;
		}
		function he(e) {
			return x(e) === m;
		}
		function ge(e) {
			return x(e) === r;
		}
		function k(e) {
			return x(e) === o;
		}
		function _e(e) {
			return x(e) === a;
		}
		function A(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = ee, e.ContextConsumer = C, e.ContextProvider = w, e.Element = T, e.ForwardRef = te, e.Fragment = ne, e.Lazy = re, e.Memo = E, e.Portal = D, e.Profiler = O, e.StrictMode = ie, e.Suspense = ae, e.isAsyncMode = se, e.isConcurrentMode = ce, e.isContextConsumer = le, e.isContextProvider = ue, e.isElement = de, e.isForwardRef = fe, e.isFragment = pe, e.isLazy = me, e.isMemo = he, e.isPortal = ge, e.isProfiler = k, e.isStrictMode = _e, e.isSuspense = A, e.isValidElementType = b, e.typeOf = x;
	})();
})), St = /* @__PURE__ */ e(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? bt() : xt();
})), Ct = /* @__PURE__ */ e(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), wt = /* @__PURE__ */ e(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), Tt = /* @__PURE__ */ e(((e, t) => {
	t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
})), Et = /* @__PURE__ */ e(((e, t) => {
	var n = function() {};
	if (process.env.NODE_ENV !== "production") {
		var r = wt(), i = {}, a = Tt();
		n = function(e) {
			var t = "Warning: " + e;
			typeof console < "u" && console.error(t);
			try {
				throw Error(t);
			} catch {}
		};
	}
	function o(e, t, o, s, c) {
		if (process.env.NODE_ENV !== "production") {
			for (var l in e) if (a(e, l)) {
				var u;
				try {
					if (typeof e[l] != "function") {
						var d = Error((s || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw d.name = "Invariant Violation", d;
					}
					u = e[l](t, l, s, o, null, r);
				} catch (e) {
					u = e;
				}
				if (u && !(u instanceof Error) && n((s || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
					i[u.message] = !0;
					var f = c ? c() : "";
					n("Failed " + o + " type: " + u.message + (f ?? ""));
				}
			}
		}
	}
	o.resetWarningCache = function() {
		process.env.NODE_ENV !== "production" && (i = {});
	}, t.exports = o;
})), Dt = /* @__PURE__ */ e(((e, t) => {
	var n = St(), r = Ct(), i = wt(), a = Tt(), o = Et(), s = function() {};
	process.env.NODE_ENV !== "production" && (s = function(e) {
		var t = "Warning: " + e;
		typeof console < "u" && console.error(t);
		try {
			throw Error(t);
		} catch {}
	});
	function c() {
		return null;
	}
	t.exports = function(e, t) {
		var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
		function d(e) {
			var t = e && (l && e[l] || e[u]);
			if (typeof t == "function") return t;
		}
		var f = "<<anonymous>>", p = {
			array: _("array"),
			bigint: _("bigint"),
			bool: _("boolean"),
			func: _("function"),
			number: _("number"),
			object: _("object"),
			string: _("string"),
			symbol: _("symbol"),
			any: v(),
			arrayOf: y,
			element: b(),
			elementType: x(),
			instanceOf: S,
			node: T(),
			objectOf: C,
			oneOf: ee,
			oneOfType: w,
			shape: ne,
			exact: re
		};
		function m(e, t) {
			return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
		}
		function h(e, t) {
			this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
		}
		h.prototype = Error.prototype;
		function g(e) {
			if (process.env.NODE_ENV !== "production") var n = {}, r = 0;
			function a(a, o, c, l, u, d, p) {
				if (l ||= f, d ||= c, p !== i) {
					if (t) {
						var m = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						throw m.name = "Invariant Violation", m;
					}
					if (process.env.NODE_ENV !== "production" && typeof console < "u") {
						var g = l + ":" + c;
						!n[g] && r < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[g] = !0, r++);
					}
				}
				return o[c] == null ? a ? o[c] === null ? new h("The " + u + " `" + d + "` is marked as required " + ("in `" + l + "`, but its value is `null`.")) : new h("The " + u + " `" + d + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null : e(o, c, l, u, d);
			}
			var o = a.bind(null, !1);
			return o.isRequired = a.bind(null, !0), o;
		}
		function _(e) {
			function t(t, n, r, i, a, o) {
				var s = t[n];
				if (O(s) !== e) {
					var c = ie(s);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."), { expectedType: e });
				}
				return null;
			}
			return g(t);
		}
		function v() {
			return g(c);
		}
		function y(e) {
			function t(t, n, r, a, o) {
				if (typeof e != "function") return new h("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var c = O(s);
					return new h("Invalid " + a + " `" + o + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
				}
				for (var l = 0; l < s.length; l++) {
					var u = e(s, l, r, a, o + "[" + l + "]", i);
					if (u instanceof Error) return u;
				}
				return null;
			}
			return g(t);
		}
		function b() {
			function t(t, n, r, i, a) {
				var o = t[n];
				if (!e(o)) {
					var s = O(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
				}
				return null;
			}
			return g(t);
		}
		function x() {
			function e(e, t, r, i, a) {
				var o = e[t];
				if (!n.isValidElementType(o)) {
					var s = O(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return g(e);
		}
		function S(e) {
			function t(t, n, r, i, a) {
				if (!(t[n] instanceof e)) {
					var o = e.name || f, s = oe(t[n]);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
				}
				return null;
			}
			return g(t);
		}
		function ee(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : s("Invalid argument supplied to oneOf, expected an array.")), c;
			function t(t, n, r, i, a) {
				for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
				var c = JSON.stringify(e, function(e, t) {
					return ie(t) === "symbol" ? String(t) : t;
				});
				return new h("Invalid " + i + " `" + a + "` of value `" + String(o) + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
			}
			return g(t);
		}
		function C(e) {
			function t(t, n, r, o, s) {
				if (typeof e != "function") return new h("Property `" + s + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var c = t[n], l = O(c);
				if (l !== "object") return new h("Invalid " + o + " `" + s + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."));
				for (var u in c) if (a(c, u)) {
					var d = e(c, u, r, o, s + "." + u, i);
					if (d instanceof Error) return d;
				}
				return null;
			}
			return g(t);
		}
		function w(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (typeof n != "function") return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(n) + " at index " + t + "."), c;
			}
			function r(t, n, r, o, s) {
				for (var c = [], l = 0; l < e.length; l++) {
					var u = e[l], d = u(t, n, r, o, s, i);
					if (d == null) return null;
					d.data && a(d.data, "expectedType") && c.push(d.data.expectedType);
				}
				var f = c.length > 0 ? ", expected one of type [" + c.join(", ") + "]" : "";
				return new h("Invalid " + o + " `" + s + "` supplied to " + ("`" + r + "`" + f + "."));
			}
			return g(r);
		}
		function T() {
			function e(e, t, n, r, i) {
				return E(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
			}
			return g(e);
		}
		function te(e, t, n, r, i) {
			return new h((e || "React class") + ": " + t + " type `" + n + "." + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`.");
		}
		function ne(e) {
			function t(t, n, r, a, o) {
				var s = t[n], c = O(s);
				if (c !== "object") return new h("Invalid " + a + " `" + o + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
				for (var l in e) {
					var u = e[l];
					if (typeof u != "function") return te(r, a, o, l, ie(u));
					var d = u(s, l, r, a, o + "." + l, i);
					if (d) return d;
				}
				return null;
			}
			return g(t);
		}
		function re(e) {
			function t(t, n, o, s, c) {
				var l = t[n], u = O(l);
				if (u !== "object") return new h("Invalid " + s + " `" + c + "` of type `" + u + "` " + ("supplied to `" + o + "`, expected `object`."));
				for (var d in r({}, t[n], e)) {
					var f = e[d];
					if (a(e, d) && typeof f != "function") return te(o, s, c, d, ie(f));
					if (!f) return new h("Invalid " + s + " `" + c + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
					var p = f(l, d, o, s, c + "." + d, i);
					if (p) return p;
				}
				return null;
			}
			return g(t);
		}
		function E(t) {
			switch (typeof t) {
				case "number":
				case "string":
				case "undefined": return !0;
				case "boolean": return !t;
				case "object":
					if (Array.isArray(t)) return t.every(E);
					if (t === null || e(t)) return !0;
					var n = d(t);
					if (n) {
						var r = n.call(t), i;
						if (n !== t.entries) {
							for (; !(i = r.next()).done;) if (!E(i.value)) return !1;
						} else for (; !(i = r.next()).done;) {
							var a = i.value;
							if (a && !E(a[1])) return !1;
						}
					} else return !1;
					return !0;
				default: return !1;
			}
		}
		function D(e, t) {
			return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
		}
		function O(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : D(t, e) ? "symbol" : t;
		}
		function ie(e) {
			if (e == null) return "" + e;
			var t = O(e);
			if (t === "object") {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp";
			}
			return t;
		}
		function ae(e) {
			var t = ie(e);
			switch (t) {
				case "array":
				case "object": return "an " + t;
				case "boolean":
				case "date":
				case "regexp": return "a " + t;
				default: return t;
			}
		}
		function oe(e) {
			return !e.constructor || !e.constructor.name ? f : e.constructor.name;
		}
		return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
	};
})), Ot = /* @__PURE__ */ e(((e, t) => {
	var n = wt();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), kt = /* @__PURE__ */ e(((e, t) => {
	if (process.env.NODE_ENV !== "production") {
		var n = St();
		t.exports = Dt()(n.isElement, !0);
	} else t.exports = Ot()();
})), At = "Collapsible", [jt, Mt] = fe(At), [Nt, Pt] = jt(At), Ft = k.forwardRef((e, t) => {
	let { __scopeCollapsible: n, open: r, defaultOpen: i, disabled: a, onOpenChange: o, ...s } = e, [c = !1, l] = ge({
		prop: r,
		defaultProp: i,
		onChange: o
	});
	return /* @__PURE__ */ N(Nt, {
		scope: n,
		disabled: a,
		contentId: ae(),
		open: c,
		onOpenToggle: k.useCallback(() => l((e) => !e), [l]),
		children: /* @__PURE__ */ N(me.div, {
			"data-state": Vt(c),
			"data-disabled": a ? "" : void 0,
			...s,
			ref: t
		})
	});
});
Ft.displayName = At;
var It = "CollapsibleTrigger", Lt = k.forwardRef((e, t) => {
	let { __scopeCollapsible: n, ...r } = e, i = Pt(It, n);
	return /* @__PURE__ */ N(me.button, {
		type: "button",
		"aria-controls": i.contentId,
		"aria-expanded": i.open || !1,
		"data-state": Vt(i.open),
		"data-disabled": i.disabled ? "" : void 0,
		disabled: i.disabled,
		...r,
		ref: t,
		onClick: pe(e.onClick, i.onOpenToggle)
	});
});
Lt.displayName = It;
var Rt = "CollapsibleContent", zt = k.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Pt(Rt, e.__scopeCollapsible);
	return /* @__PURE__ */ N(oe, {
		present: n || i.open,
		children: ({ present: e }) => /* @__PURE__ */ N(Bt, {
			...r,
			ref: t,
			present: e
		})
	});
});
zt.displayName = Rt;
var Bt = k.forwardRef((e, t) => {
	let { __scopeCollapsible: n, present: r, children: i, ...a } = e, o = Pt(Rt, n), [s, c] = k.useState(r), l = k.useRef(null), u = he(t, l), d = k.useRef(0), f = d.current, p = k.useRef(0), m = p.current, h = o.open || s, g = k.useRef(h), _ = k.useRef(void 0);
	return k.useEffect(() => {
		let e = requestAnimationFrame(() => g.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), de(() => {
		let e = l.current;
		if (e) {
			_.current = _.current || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let t = e.getBoundingClientRect();
			d.current = t.height, p.current = t.width, g.current || (e.style.transitionDuration = _.current.transitionDuration, e.style.animationName = _.current.animationName), c(r);
		}
	}, [o.open, r]), /* @__PURE__ */ N(me.div, {
		"data-state": Vt(o.open),
		"data-disabled": o.disabled ? "" : void 0,
		id: o.contentId,
		hidden: !h,
		...a,
		ref: u,
		style: {
			"--radix-collapsible-content-height": f ? `${f}px` : void 0,
			"--radix-collapsible-content-width": m ? `${m}px` : void 0,
			...e.style
		},
		children: h && i
	});
});
function Vt(e) {
	return e ? "open" : "closed";
}
//#endregion
//#region src/ui/collapsible.tsx
var Ht = Ft, Ut = Lt, Wt = zt, Gt = [
	"days",
	"hours",
	"minutes",
	"seconds"
], Kt = ["sm", "md"], qt = [...Gt], Jt = ["hours", "minutes"], Yt = {
	days: 86400,
	hours: 3600,
	minutes: 60,
	seconds: 1
};
function Xt(e) {
	let t = Math.max(0, Math.floor(Number.isFinite(e) ? e : 0)), n = Math.floor(t / Yt.days);
	t %= Yt.days;
	let r = Math.floor(t / Yt.hours);
	return t %= Yt.hours, {
		days: n,
		hours: r,
		minutes: Math.floor(t / Yt.minutes),
		seconds: t % Yt.minutes
	};
}
function Zt(e) {
	return qt.reduce((t, n) => {
		let r = e[n];
		return t + Math.max(0, Math.floor(Number.isFinite(r) ? r : 0)) * Yt[n];
	}, 0);
}
function Qt(e, t) {
	let n = Math.max(0, Math.floor(Number.isFinite(e) ? e : 0)), r = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}, i = qt.filter((e) => t.includes(e));
	for (let e of i) r[e] = Math.floor(n / Yt[e]), n %= Yt[e];
	return r;
}
function $t(e, t) {
	return t != null && e > t ? t : e < 0 ? 0 : e;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var F;
(function(e) {
	e.assertEqual = (e) => {};
	function t(e) {}
	e.assertIs = t;
	function n(e) {
		throw Error();
	}
	e.assertNever = n, e.arrayToEnum = (e) => {
		let t = {};
		for (let n of e) t[n] = n;
		return t;
	}, e.getValidEnumValues = (t) => {
		let n = e.objectKeys(t).filter((e) => typeof t[t[e]] != "number"), r = {};
		for (let e of n) r[e] = t[e];
		return e.objectValues(r);
	}, e.objectValues = (t) => e.objectKeys(t).map(function(e) {
		return t[e];
	}), e.objectKeys = typeof Object.keys == "function" ? (e) => Object.keys(e) : (e) => {
		let t = [];
		for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
		return t;
	}, e.find = (e, t) => {
		for (let n of e) if (t(n)) return n;
	}, e.isInteger = typeof Number.isInteger == "function" ? (e) => Number.isInteger(e) : (e) => typeof e == "number" && Number.isFinite(e) && Math.floor(e) === e;
	function r(e, t = " | ") {
		return e.map((e) => typeof e == "string" ? `'${e}'` : e).join(t);
	}
	e.joinValues = r, e.jsonStringifyReplacer = (e, t) => typeof t == "bigint" ? t.toString() : t;
})(F ||= {});
var en;
(function(e) {
	e.mergeShapes = (e, t) => ({
		...e,
		...t
	});
})(en ||= {});
var I = F.arrayToEnum([
	"string",
	"nan",
	"number",
	"integer",
	"float",
	"boolean",
	"date",
	"bigint",
	"symbol",
	"function",
	"undefined",
	"null",
	"array",
	"object",
	"unknown",
	"promise",
	"void",
	"never",
	"map",
	"set"
]), tn = (e) => {
	switch (typeof e) {
		case "undefined": return I.undefined;
		case "string": return I.string;
		case "number": return Number.isNaN(e) ? I.nan : I.number;
		case "boolean": return I.boolean;
		case "function": return I.function;
		case "bigint": return I.bigint;
		case "symbol": return I.symbol;
		case "object": return Array.isArray(e) ? I.array : e === null ? I.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? I.promise : typeof Map < "u" && e instanceof Map ? I.map : typeof Set < "u" && e instanceof Set ? I.set : typeof Date < "u" && e instanceof Date ? I.date : I.object;
		default: return I.unknown;
	}
}, L = F.arrayToEnum([
	"invalid_type",
	"invalid_literal",
	"custom",
	"invalid_union",
	"invalid_union_discriminator",
	"invalid_enum_value",
	"unrecognized_keys",
	"invalid_arguments",
	"invalid_return_type",
	"invalid_date",
	"invalid_string",
	"too_small",
	"too_big",
	"invalid_intersection_types",
	"not_multiple_of",
	"not_finite"
]), nn = class e extends Error {
	get errors() {
		return this.issues;
	}
	constructor(e) {
		super(), this.issues = [], this.addIssue = (e) => {
			this.issues = [...this.issues, e];
		}, this.addIssues = (e = []) => {
			this.issues = [...this.issues, ...e];
		};
		let t = new.target.prototype;
		Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
	}
	format(e) {
		let t = e || function(e) {
			return e.message;
		}, n = { _errors: [] }, r = (e) => {
			for (let i of e.issues) if (i.code === "invalid_union") i.unionErrors.map(r);
			else if (i.code === "invalid_return_type") r(i.returnTypeError);
			else if (i.code === "invalid_arguments") r(i.argumentsError);
			else if (i.path.length === 0) n._errors.push(t(i));
			else {
				let e = n, r = 0;
				for (; r < i.path.length;) {
					let n = i.path[r];
					r === i.path.length - 1 ? (e[n] = e[n] || { _errors: [] }, e[n]._errors.push(t(i))) : e[n] = e[n] || { _errors: [] }, e = e[n], r++;
				}
			}
		};
		return r(this), n;
	}
	static assert(t) {
		if (!(t instanceof e)) throw Error(`Not a ZodError: ${t}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, F.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(e = (e) => e.message) {
		let t = {}, n = [];
		for (let r of this.issues) if (r.path.length > 0) {
			let n = r.path[0];
			t[n] = t[n] || [], t[n].push(e(r));
		} else n.push(e(r));
		return {
			formErrors: n,
			fieldErrors: t
		};
	}
	get formErrors() {
		return this.flatten();
	}
};
nn.create = (e) => new nn(e);
//#endregion
//#region ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var rn = (e, t) => {
	let n;
	switch (e.code) {
		case L.invalid_type:
			n = e.received === I.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
			break;
		case L.invalid_literal:
			n = `Invalid literal value, expected ${JSON.stringify(e.expected, F.jsonStringifyReplacer)}`;
			break;
		case L.unrecognized_keys:
			n = `Unrecognized key(s) in object: ${F.joinValues(e.keys, ", ")}`;
			break;
		case L.invalid_union:
			n = "Invalid input";
			break;
		case L.invalid_union_discriminator:
			n = `Invalid discriminator value. Expected ${F.joinValues(e.options)}`;
			break;
		case L.invalid_enum_value:
			n = `Invalid enum value. Expected ${F.joinValues(e.options)}, received '${e.received}'`;
			break;
		case L.invalid_arguments:
			n = "Invalid function arguments";
			break;
		case L.invalid_return_type:
			n = "Invalid function return type";
			break;
		case L.invalid_date:
			n = "Invalid date";
			break;
		case L.invalid_string:
			typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : F.assertNever(e.validation) : n = e.validation === "regex" ? "Invalid" : `Invalid ${e.validation}`;
			break;
		case L.too_small:
			n = e.type === "array" ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" || e.type === "bigint" ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
			break;
		case L.too_big:
			n = e.type === "array" ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
			break;
		case L.custom:
			n = "Invalid input";
			break;
		case L.invalid_intersection_types:
			n = "Intersection results could not be merged";
			break;
		case L.not_multiple_of:
			n = `Number must be a multiple of ${e.multipleOf}`;
			break;
		case L.not_finite:
			n = "Number must be finite";
			break;
		default: n = t.defaultError, F.assertNever(e);
	}
	return { message: n };
}, an = rn;
function on() {
	return an;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var sn = (e) => {
	let { data: t, path: n, errorMaps: r, issueData: i } = e, a = [...n, ...i.path || []], o = {
		...i,
		path: a
	};
	if (i.message !== void 0) return {
		...i,
		path: a,
		message: i.message
	};
	let s = "", c = r.filter((e) => !!e).slice().reverse();
	for (let e of c) s = e(o, {
		data: t,
		defaultError: s
	}).message;
	return {
		...i,
		path: a,
		message: s
	};
};
function R(e, t) {
	let n = on(), r = sn({
		issueData: t,
		data: e.data,
		path: e.path,
		errorMaps: [
			e.common.contextualErrorMap,
			e.schemaErrorMap,
			n,
			n === rn ? void 0 : rn
		].filter((e) => !!e)
	});
	e.common.issues.push(r);
}
var z = class e {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		this.value === "valid" && (this.value = "dirty");
	}
	abort() {
		this.value !== "aborted" && (this.value = "aborted");
	}
	static mergeArray(e, t) {
		let n = [];
		for (let r of t) {
			if (r.status === "aborted") return B;
			r.status === "dirty" && e.dirty(), n.push(r.value);
		}
		return {
			status: e.value,
			value: n
		};
	}
	static async mergeObjectAsync(t, n) {
		let r = [];
		for (let e of n) {
			let t = await e.key, n = await e.value;
			r.push({
				key: t,
				value: n
			});
		}
		return e.mergeObjectSync(t, r);
	}
	static mergeObjectSync(e, t) {
		let n = {};
		for (let r of t) {
			let { key: t, value: i } = r;
			if (t.status === "aborted" || i.status === "aborted") return B;
			t.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), t.value !== "__proto__" && (i.value !== void 0 || r.alwaysSet) && (n[t.value] = i.value);
		}
		return {
			status: e.value,
			value: n
		};
	}
}, B = Object.freeze({ status: "aborted" }), cn = (e) => ({
	status: "dirty",
	value: e
}), V = (e) => ({
	status: "valid",
	value: e
}), ln = (e) => e.status === "aborted", un = (e) => e.status === "dirty", dn = (e) => e.status === "valid", fn = (e) => typeof Promise < "u" && e instanceof Promise, H;
(function(e) {
	e.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, e.toString = (e) => typeof e == "string" ? e : e?.message;
})(H ||= {});
//#endregion
//#region ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var pn = class {
	constructor(e, t, n, r) {
		this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = r;
	}
	get path() {
		return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
	}
}, mn = (e, t) => {
	if (dn(t)) return {
		success: !0,
		data: t.value
	};
	if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
	return {
		success: !1,
		get error() {
			if (this._error) return this._error;
			let t = new nn(e.common.issues);
			return this._error = t, this._error;
		}
	};
};
function U(e) {
	if (!e) return {};
	let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
	if (t && (n || r)) throw Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
	return t ? {
		errorMap: t,
		description: i
	} : {
		errorMap: (t, i) => {
			let { message: a } = e;
			return t.code === "invalid_enum_value" ? { message: a ?? i.defaultError } : i.data === void 0 ? { message: a ?? r ?? i.defaultError } : t.code === "invalid_type" ? { message: a ?? n ?? i.defaultError } : { message: i.defaultError };
		},
		description: i
	};
}
var W = class {
	get description() {
		return this._def.description;
	}
	_getType(e) {
		return tn(e.data);
	}
	_getOrReturnCtx(e, t) {
		return t || {
			common: e.parent.common,
			data: e.data,
			parsedType: tn(e.data),
			schemaErrorMap: this._def.errorMap,
			path: e.path,
			parent: e.parent
		};
	}
	_processInputParams(e) {
		return {
			status: new z(),
			ctx: {
				common: e.parent.common,
				data: e.data,
				parsedType: tn(e.data),
				schemaErrorMap: this._def.errorMap,
				path: e.path,
				parent: e.parent
			}
		};
	}
	_parseSync(e) {
		let t = this._parse(e);
		if (fn(t)) throw Error("Synchronous parse encountered promise.");
		return t;
	}
	_parseAsync(e) {
		let t = this._parse(e);
		return Promise.resolve(t);
	}
	parse(e, t) {
		let n = this.safeParse(e, t);
		if (n.success) return n.data;
		throw n.error;
	}
	safeParse(e, t) {
		let n = {
			common: {
				issues: [],
				async: t?.async ?? !1,
				contextualErrorMap: t?.errorMap
			},
			path: t?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: tn(e)
		};
		return mn(n, this._parseSync({
			data: e,
			path: n.path,
			parent: n
		}));
	}
	"~validate"(e) {
		let t = {
			common: {
				issues: [],
				async: !!this["~standard"].async
			},
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: tn(e)
		};
		if (!this["~standard"].async) try {
			let n = this._parseSync({
				data: e,
				path: [],
				parent: t
			});
			return dn(n) ? { value: n.value } : { issues: t.common.issues };
		} catch (e) {
			e?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), t.common = {
				issues: [],
				async: !0
			};
		}
		return this._parseAsync({
			data: e,
			path: [],
			parent: t
		}).then((e) => dn(e) ? { value: e.value } : { issues: t.common.issues });
	}
	async parseAsync(e, t) {
		let n = await this.safeParseAsync(e, t);
		if (n.success) return n.data;
		throw n.error;
	}
	async safeParseAsync(e, t) {
		let n = {
			common: {
				issues: [],
				contextualErrorMap: t?.errorMap,
				async: !0
			},
			path: t?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: tn(e)
		}, r = this._parse({
			data: e,
			path: n.path,
			parent: n
		});
		return mn(n, await (fn(r) ? r : Promise.resolve(r)));
	}
	refine(e, t) {
		let n = (e) => typeof t == "string" || t === void 0 ? { message: t } : typeof t == "function" ? t(e) : t;
		return this._refinement((t, r) => {
			let i = e(t), a = () => r.addIssue({
				code: L.custom,
				...n(t)
			});
			return typeof Promise < "u" && i instanceof Promise ? i.then((e) => e ? !0 : (a(), !1)) : i ? !0 : (a(), !1);
		});
	}
	refinement(e, t) {
		return this._refinement((n, r) => e(n) ? !0 : (r.addIssue(typeof t == "function" ? t(n, r) : t), !1));
	}
	_refinement(e) {
		return new _r({
			schema: this,
			typeName: G.ZodEffects,
			effect: {
				type: "refinement",
				refinement: e
			}
		});
	}
	superRefine(e) {
		return this._refinement(e);
	}
	constructor(e) {
		this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
			version: 1,
			vendor: "zod",
			validate: (e) => this["~validate"](e)
		};
	}
	optional() {
		return vr.create(this, this._def);
	}
	nullable() {
		return yr.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return Qn.create(this);
	}
	promise() {
		return gr.create(this, this._def);
	}
	or(e) {
		return tr.create([this, e], this._def);
	}
	and(e) {
		return ar.create(this, e, this._def);
	}
	transform(e) {
		return new _r({
			...U(this._def),
			schema: this,
			typeName: G.ZodEffects,
			effect: {
				type: "transform",
				transform: e
			}
		});
	}
	default(e) {
		let t = typeof e == "function" ? e : () => e;
		return new br({
			...U(this._def),
			innerType: this,
			defaultValue: t,
			typeName: G.ZodDefault
		});
	}
	brand() {
		return new Cr({
			typeName: G.ZodBranded,
			type: this,
			...U(this._def)
		});
	}
	catch(e) {
		let t = typeof e == "function" ? e : () => e;
		return new xr({
			...U(this._def),
			innerType: this,
			catchValue: t,
			typeName: G.ZodCatch
		});
	}
	describe(e) {
		let t = this.constructor;
		return new t({
			...this._def,
			description: e
		});
	}
	pipe(e) {
		return wr.create(this, e);
	}
	readonly() {
		return Tr.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
}, hn = /^c[^\s-]{8,}$/i, gn = /^[0-9a-z]+$/, _n = /^[0-9A-HJKMNP-TV-Z]{26}$/i, vn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, yn = /^[a-z0-9_-]{21}$/i, bn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, xn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Sn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Cn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", wn, Tn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, En = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Dn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, On = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, kn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, An = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, jn = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Mn = RegExp(`^${jn}$`);
function Nn(e) {
	let t = "[0-5]\\d";
	e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision ?? (t = `${t}(\\.\\d+)?`);
	let n = e.precision ? "+" : "?";
	return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function Pn(e) {
	return RegExp(`^${Nn(e)}$`);
}
function Fn(e) {
	let t = `${jn}T${Nn(e)}`, n = [];
	return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, RegExp(`^${t}$`);
}
function In(e, t) {
	return !!((t === "v4" || !t) && Tn.test(e) || (t === "v6" || !t) && Dn.test(e));
}
function Ln(e, t) {
	if (!bn.test(e)) return !1;
	try {
		let [n] = e.split(".");
		if (!n) return !1;
		let r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), i = JSON.parse(atob(r));
		return !(typeof i != "object" || !i || "typ" in i && i?.typ !== "JWT" || !i.alg || t && i.alg !== t);
	} catch {
		return !1;
	}
}
function Rn(e, t) {
	return !!((t === "v4" || !t) && En.test(e) || (t === "v6" || !t) && On.test(e));
}
var zn = class e extends W {
	_parse(e) {
		if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== I.string) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				code: L.invalid_type,
				expected: I.string,
				received: t.parsedType
			}), B;
		}
		let t = new z(), n;
		for (let r of this._def.checks) if (r.kind === "min") e.data.length < r.value && (n = this._getOrReturnCtx(e, n), R(n, {
			code: L.too_small,
			minimum: r.value,
			type: "string",
			inclusive: !0,
			exact: !1,
			message: r.message
		}), t.dirty());
		else if (r.kind === "max") e.data.length > r.value && (n = this._getOrReturnCtx(e, n), R(n, {
			code: L.too_big,
			maximum: r.value,
			type: "string",
			inclusive: !0,
			exact: !1,
			message: r.message
		}), t.dirty());
		else if (r.kind === "length") {
			let i = e.data.length > r.value, a = e.data.length < r.value;
			(i || a) && (n = this._getOrReturnCtx(e, n), i ? R(n, {
				code: L.too_big,
				maximum: r.value,
				type: "string",
				inclusive: !0,
				exact: !0,
				message: r.message
			}) : a && R(n, {
				code: L.too_small,
				minimum: r.value,
				type: "string",
				inclusive: !0,
				exact: !0,
				message: r.message
			}), t.dirty());
		} else if (r.kind === "email") Sn.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "email",
			code: L.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "emoji") wn ||= new RegExp(Cn, "u"), wn.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "emoji",
			code: L.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "uuid") vn.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "uuid",
			code: L.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "nanoid") yn.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "nanoid",
			code: L.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "cuid") hn.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "cuid",
			code: L.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "cuid2") gn.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "cuid2",
			code: L.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "ulid") _n.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "ulid",
			code: L.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "url") try {
			new URL(e.data);
		} catch {
			n = this._getOrReturnCtx(e, n), R(n, {
				validation: "url",
				code: L.invalid_string,
				message: r.message
			}), t.dirty();
		}
		else r.kind === "regex" ? (r.regex.lastIndex = 0, r.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "regex",
			code: L.invalid_string,
			message: r.message
		}), t.dirty())) : r.kind === "trim" ? e.data = e.data.trim() : r.kind === "includes" ? e.data.includes(r.value, r.position) || (n = this._getOrReturnCtx(e, n), R(n, {
			code: L.invalid_string,
			validation: {
				includes: r.value,
				position: r.position
			},
			message: r.message
		}), t.dirty()) : r.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : r.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : r.kind === "startsWith" ? e.data.startsWith(r.value) || (n = this._getOrReturnCtx(e, n), R(n, {
			code: L.invalid_string,
			validation: { startsWith: r.value },
			message: r.message
		}), t.dirty()) : r.kind === "endsWith" ? e.data.endsWith(r.value) || (n = this._getOrReturnCtx(e, n), R(n, {
			code: L.invalid_string,
			validation: { endsWith: r.value },
			message: r.message
		}), t.dirty()) : r.kind === "datetime" ? Fn(r).test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			code: L.invalid_string,
			validation: "datetime",
			message: r.message
		}), t.dirty()) : r.kind === "date" ? Mn.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			code: L.invalid_string,
			validation: "date",
			message: r.message
		}), t.dirty()) : r.kind === "time" ? Pn(r).test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			code: L.invalid_string,
			validation: "time",
			message: r.message
		}), t.dirty()) : r.kind === "duration" ? xn.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "duration",
			code: L.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "ip" ? In(e.data, r.version) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "ip",
			code: L.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "jwt" ? Ln(e.data, r.alg) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "jwt",
			code: L.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "cidr" ? Rn(e.data, r.version) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "cidr",
			code: L.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "base64" ? kn.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "base64",
			code: L.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "base64url" ? An.test(e.data) || (n = this._getOrReturnCtx(e, n), R(n, {
			validation: "base64url",
			code: L.invalid_string,
			message: r.message
		}), t.dirty()) : F.assertNever(r);
		return {
			status: t.value,
			value: e.data
		};
	}
	_regex(e, t, n) {
		return this.refinement((t) => e.test(t), {
			validation: t,
			code: L.invalid_string,
			...H.errToObj(n)
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	email(e) {
		return this._addCheck({
			kind: "email",
			...H.errToObj(e)
		});
	}
	url(e) {
		return this._addCheck({
			kind: "url",
			...H.errToObj(e)
		});
	}
	emoji(e) {
		return this._addCheck({
			kind: "emoji",
			...H.errToObj(e)
		});
	}
	uuid(e) {
		return this._addCheck({
			kind: "uuid",
			...H.errToObj(e)
		});
	}
	nanoid(e) {
		return this._addCheck({
			kind: "nanoid",
			...H.errToObj(e)
		});
	}
	cuid(e) {
		return this._addCheck({
			kind: "cuid",
			...H.errToObj(e)
		});
	}
	cuid2(e) {
		return this._addCheck({
			kind: "cuid2",
			...H.errToObj(e)
		});
	}
	ulid(e) {
		return this._addCheck({
			kind: "ulid",
			...H.errToObj(e)
		});
	}
	base64(e) {
		return this._addCheck({
			kind: "base64",
			...H.errToObj(e)
		});
	}
	base64url(e) {
		return this._addCheck({
			kind: "base64url",
			...H.errToObj(e)
		});
	}
	jwt(e) {
		return this._addCheck({
			kind: "jwt",
			...H.errToObj(e)
		});
	}
	ip(e) {
		return this._addCheck({
			kind: "ip",
			...H.errToObj(e)
		});
	}
	cidr(e) {
		return this._addCheck({
			kind: "cidr",
			...H.errToObj(e)
		});
	}
	datetime(e) {
		return typeof e == "string" ? this._addCheck({
			kind: "datetime",
			precision: null,
			offset: !1,
			local: !1,
			message: e
		}) : this._addCheck({
			kind: "datetime",
			precision: e?.precision === void 0 ? null : e?.precision,
			offset: e?.offset ?? !1,
			local: e?.local ?? !1,
			...H.errToObj(e?.message)
		});
	}
	date(e) {
		return this._addCheck({
			kind: "date",
			message: e
		});
	}
	time(e) {
		return typeof e == "string" ? this._addCheck({
			kind: "time",
			precision: null,
			message: e
		}) : this._addCheck({
			kind: "time",
			precision: e?.precision === void 0 ? null : e?.precision,
			...H.errToObj(e?.message)
		});
	}
	duration(e) {
		return this._addCheck({
			kind: "duration",
			...H.errToObj(e)
		});
	}
	regex(e, t) {
		return this._addCheck({
			kind: "regex",
			regex: e,
			...H.errToObj(t)
		});
	}
	includes(e, t) {
		return this._addCheck({
			kind: "includes",
			value: e,
			position: t?.position,
			...H.errToObj(t?.message)
		});
	}
	startsWith(e, t) {
		return this._addCheck({
			kind: "startsWith",
			value: e,
			...H.errToObj(t)
		});
	}
	endsWith(e, t) {
		return this._addCheck({
			kind: "endsWith",
			value: e,
			...H.errToObj(t)
		});
	}
	min(e, t) {
		return this._addCheck({
			kind: "min",
			value: e,
			...H.errToObj(t)
		});
	}
	max(e, t) {
		return this._addCheck({
			kind: "max",
			value: e,
			...H.errToObj(t)
		});
	}
	length(e, t) {
		return this._addCheck({
			kind: "length",
			value: e,
			...H.errToObj(t)
		});
	}
	nonempty(e) {
		return this.min(1, H.errToObj(e));
	}
	trim() {
		return new e({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }]
		});
	}
	toLowerCase() {
		return new e({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }]
		});
	}
	toUpperCase() {
		return new e({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }]
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((e) => e.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((e) => e.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((e) => e.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((e) => e.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((e) => e.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((e) => e.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((e) => e.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((e) => e.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((e) => e.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((e) => e.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((e) => e.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((e) => e.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((e) => e.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((e) => e.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((e) => e.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((e) => e.kind === "base64url");
	}
	get minLength() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxLength() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
};
zn.create = (e) => new zn({
	checks: [],
	typeName: G.ZodString,
	coerce: e?.coerce ?? !1,
	...U(e)
});
function Bn(e, t) {
	let n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r;
	return Number.parseInt(e.toFixed(i).replace(".", "")) % Number.parseInt(t.toFixed(i).replace(".", "")) / 10 ** i;
}
var Vn = class e extends W {
	constructor() {
		super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
	}
	_parse(e) {
		if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== I.number) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				code: L.invalid_type,
				expected: I.number,
				received: t.parsedType
			}), B;
		}
		let t, n = new z();
		for (let r of this._def.checks) r.kind === "int" ? F.isInteger(e.data) || (t = this._getOrReturnCtx(e, t), R(t, {
			code: L.invalid_type,
			expected: "integer",
			received: "float",
			message: r.message
		}), n.dirty()) : r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t), R(t, {
			code: L.too_small,
			minimum: r.value,
			type: "number",
			inclusive: r.inclusive,
			exact: !1,
			message: r.message
		}), n.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t), R(t, {
			code: L.too_big,
			maximum: r.value,
			type: "number",
			inclusive: r.inclusive,
			exact: !1,
			message: r.message
		}), n.dirty()) : r.kind === "multipleOf" ? Bn(e.data, r.value) !== 0 && (t = this._getOrReturnCtx(e, t), R(t, {
			code: L.not_multiple_of,
			multipleOf: r.value,
			message: r.message
		}), n.dirty()) : r.kind === "finite" ? Number.isFinite(e.data) || (t = this._getOrReturnCtx(e, t), R(t, {
			code: L.not_finite,
			message: r.message
		}), n.dirty()) : F.assertNever(r);
		return {
			status: n.value,
			value: e.data
		};
	}
	gte(e, t) {
		return this.setLimit("min", e, !0, H.toString(t));
	}
	gt(e, t) {
		return this.setLimit("min", e, !1, H.toString(t));
	}
	lte(e, t) {
		return this.setLimit("max", e, !0, H.toString(t));
	}
	lt(e, t) {
		return this.setLimit("max", e, !1, H.toString(t));
	}
	setLimit(t, n, r, i) {
		return new e({
			...this._def,
			checks: [...this._def.checks, {
				kind: t,
				value: n,
				inclusive: r,
				message: H.toString(i)
			}]
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	int(e) {
		return this._addCheck({
			kind: "int",
			message: H.toString(e)
		});
	}
	positive(e) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !1,
			message: H.toString(e)
		});
	}
	negative(e) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !1,
			message: H.toString(e)
		});
	}
	nonpositive(e) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !0,
			message: H.toString(e)
		});
	}
	nonnegative(e) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !0,
			message: H.toString(e)
		});
	}
	multipleOf(e, t) {
		return this._addCheck({
			kind: "multipleOf",
			value: e,
			message: H.toString(t)
		});
	}
	finite(e) {
		return this._addCheck({
			kind: "finite",
			message: H.toString(e)
		});
	}
	safe(e) {
		return this._addCheck({
			kind: "min",
			inclusive: !0,
			value: -(2 ** 53 - 1),
			message: H.toString(e)
		})._addCheck({
			kind: "max",
			inclusive: !0,
			value: 2 ** 53 - 1,
			message: H.toString(e)
		});
	}
	get minValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
	get isInt() {
		return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && F.isInteger(e.value));
	}
	get isFinite() {
		let e = null, t = null;
		for (let n of this._def.checks) if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return !0;
		else n.kind === "min" ? (t === null || n.value > t) && (t = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
		return Number.isFinite(t) && Number.isFinite(e);
	}
};
Vn.create = (e) => new Vn({
	checks: [],
	typeName: G.ZodNumber,
	coerce: e?.coerce || !1,
	...U(e)
});
var Hn = class e extends W {
	constructor() {
		super(...arguments), this.min = this.gte, this.max = this.lte;
	}
	_parse(e) {
		if (this._def.coerce) try {
			e.data = BigInt(e.data);
		} catch {
			return this._getInvalidInput(e);
		}
		if (this._getType(e) !== I.bigint) return this._getInvalidInput(e);
		let t, n = new z();
		for (let r of this._def.checks) r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t), R(t, {
			code: L.too_small,
			type: "bigint",
			minimum: r.value,
			inclusive: r.inclusive,
			message: r.message
		}), n.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t), R(t, {
			code: L.too_big,
			type: "bigint",
			maximum: r.value,
			inclusive: r.inclusive,
			message: r.message
		}), n.dirty()) : r.kind === "multipleOf" ? e.data % r.value !== BigInt(0) && (t = this._getOrReturnCtx(e, t), R(t, {
			code: L.not_multiple_of,
			multipleOf: r.value,
			message: r.message
		}), n.dirty()) : F.assertNever(r);
		return {
			status: n.value,
			value: e.data
		};
	}
	_getInvalidInput(e) {
		let t = this._getOrReturnCtx(e);
		return R(t, {
			code: L.invalid_type,
			expected: I.bigint,
			received: t.parsedType
		}), B;
	}
	gte(e, t) {
		return this.setLimit("min", e, !0, H.toString(t));
	}
	gt(e, t) {
		return this.setLimit("min", e, !1, H.toString(t));
	}
	lte(e, t) {
		return this.setLimit("max", e, !0, H.toString(t));
	}
	lt(e, t) {
		return this.setLimit("max", e, !1, H.toString(t));
	}
	setLimit(t, n, r, i) {
		return new e({
			...this._def,
			checks: [...this._def.checks, {
				kind: t,
				value: n,
				inclusive: r,
				message: H.toString(i)
			}]
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	positive(e) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !1,
			message: H.toString(e)
		});
	}
	negative(e) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !1,
			message: H.toString(e)
		});
	}
	nonpositive(e) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !0,
			message: H.toString(e)
		});
	}
	nonnegative(e) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !0,
			message: H.toString(e)
		});
	}
	multipleOf(e, t) {
		return this._addCheck({
			kind: "multipleOf",
			value: e,
			message: H.toString(t)
		});
	}
	get minValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
};
Hn.create = (e) => new Hn({
	checks: [],
	typeName: G.ZodBigInt,
	coerce: e?.coerce ?? !1,
	...U(e)
});
var Un = class extends W {
	_parse(e) {
		if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== I.boolean) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				code: L.invalid_type,
				expected: I.boolean,
				received: t.parsedType
			}), B;
		}
		return V(e.data);
	}
};
Un.create = (e) => new Un({
	typeName: G.ZodBoolean,
	coerce: e?.coerce || !1,
	...U(e)
});
var Wn = class e extends W {
	_parse(e) {
		if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== I.date) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				code: L.invalid_type,
				expected: I.date,
				received: t.parsedType
			}), B;
		}
		if (Number.isNaN(e.data.getTime())) return R(this._getOrReturnCtx(e), { code: L.invalid_date }), B;
		let t = new z(), n;
		for (let r of this._def.checks) r.kind === "min" ? e.data.getTime() < r.value && (n = this._getOrReturnCtx(e, n), R(n, {
			code: L.too_small,
			message: r.message,
			inclusive: !0,
			exact: !1,
			minimum: r.value,
			type: "date"
		}), t.dirty()) : r.kind === "max" ? e.data.getTime() > r.value && (n = this._getOrReturnCtx(e, n), R(n, {
			code: L.too_big,
			message: r.message,
			inclusive: !0,
			exact: !1,
			maximum: r.value,
			type: "date"
		}), t.dirty()) : F.assertNever(r);
		return {
			status: t.value,
			value: new Date(e.data.getTime())
		};
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	min(e, t) {
		return this._addCheck({
			kind: "min",
			value: e.getTime(),
			message: H.toString(t)
		});
	}
	max(e, t) {
		return this._addCheck({
			kind: "max",
			value: e.getTime(),
			message: H.toString(t)
		});
	}
	get minDate() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e == null ? null : new Date(e);
	}
	get maxDate() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e == null ? null : new Date(e);
	}
};
Wn.create = (e) => new Wn({
	checks: [],
	coerce: e?.coerce || !1,
	typeName: G.ZodDate,
	...U(e)
});
var Gn = class extends W {
	_parse(e) {
		if (this._getType(e) !== I.symbol) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				code: L.invalid_type,
				expected: I.symbol,
				received: t.parsedType
			}), B;
		}
		return V(e.data);
	}
};
Gn.create = (e) => new Gn({
	typeName: G.ZodSymbol,
	...U(e)
});
var Kn = class extends W {
	_parse(e) {
		if (this._getType(e) !== I.undefined) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				code: L.invalid_type,
				expected: I.undefined,
				received: t.parsedType
			}), B;
		}
		return V(e.data);
	}
};
Kn.create = (e) => new Kn({
	typeName: G.ZodUndefined,
	...U(e)
});
var qn = class extends W {
	_parse(e) {
		if (this._getType(e) !== I.null) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				code: L.invalid_type,
				expected: I.null,
				received: t.parsedType
			}), B;
		}
		return V(e.data);
	}
};
qn.create = (e) => new qn({
	typeName: G.ZodNull,
	...U(e)
});
var Jn = class extends W {
	constructor() {
		super(...arguments), this._any = !0;
	}
	_parse(e) {
		return V(e.data);
	}
};
Jn.create = (e) => new Jn({
	typeName: G.ZodAny,
	...U(e)
});
var Yn = class extends W {
	constructor() {
		super(...arguments), this._unknown = !0;
	}
	_parse(e) {
		return V(e.data);
	}
};
Yn.create = (e) => new Yn({
	typeName: G.ZodUnknown,
	...U(e)
});
var Xn = class extends W {
	_parse(e) {
		let t = this._getOrReturnCtx(e);
		return R(t, {
			code: L.invalid_type,
			expected: I.never,
			received: t.parsedType
		}), B;
	}
};
Xn.create = (e) => new Xn({
	typeName: G.ZodNever,
	...U(e)
});
var Zn = class extends W {
	_parse(e) {
		if (this._getType(e) !== I.undefined) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				code: L.invalid_type,
				expected: I.void,
				received: t.parsedType
			}), B;
		}
		return V(e.data);
	}
};
Zn.create = (e) => new Zn({
	typeName: G.ZodVoid,
	...U(e)
});
var Qn = class e extends W {
	_parse(e) {
		let { ctx: t, status: n } = this._processInputParams(e), r = this._def;
		if (t.parsedType !== I.array) return R(t, {
			code: L.invalid_type,
			expected: I.array,
			received: t.parsedType
		}), B;
		if (r.exactLength !== null) {
			let e = t.data.length > r.exactLength.value, i = t.data.length < r.exactLength.value;
			(e || i) && (R(t, {
				code: e ? L.too_big : L.too_small,
				minimum: i ? r.exactLength.value : void 0,
				maximum: e ? r.exactLength.value : void 0,
				type: "array",
				inclusive: !0,
				exact: !0,
				message: r.exactLength.message
			}), n.dirty());
		}
		if (r.minLength !== null && t.data.length < r.minLength.value && (R(t, {
			code: L.too_small,
			minimum: r.minLength.value,
			type: "array",
			inclusive: !0,
			exact: !1,
			message: r.minLength.message
		}), n.dirty()), r.maxLength !== null && t.data.length > r.maxLength.value && (R(t, {
			code: L.too_big,
			maximum: r.maxLength.value,
			type: "array",
			inclusive: !0,
			exact: !1,
			message: r.maxLength.message
		}), n.dirty()), t.common.async) return Promise.all([...t.data].map((e, n) => r.type._parseAsync(new pn(t, e, t.path, n)))).then((e) => z.mergeArray(n, e));
		let i = [...t.data].map((e, n) => r.type._parseSync(new pn(t, e, t.path, n)));
		return z.mergeArray(n, i);
	}
	get element() {
		return this._def.type;
	}
	min(t, n) {
		return new e({
			...this._def,
			minLength: {
				value: t,
				message: H.toString(n)
			}
		});
	}
	max(t, n) {
		return new e({
			...this._def,
			maxLength: {
				value: t,
				message: H.toString(n)
			}
		});
	}
	length(t, n) {
		return new e({
			...this._def,
			exactLength: {
				value: t,
				message: H.toString(n)
			}
		});
	}
	nonempty(e) {
		return this.min(1, e);
	}
};
Qn.create = (e, t) => new Qn({
	type: e,
	minLength: null,
	maxLength: null,
	exactLength: null,
	typeName: G.ZodArray,
	...U(t)
});
function $n(e) {
	if (e instanceof er) {
		let t = {};
		for (let n in e.shape) {
			let r = e.shape[n];
			t[n] = vr.create($n(r));
		}
		return new er({
			...e._def,
			shape: () => t
		});
	}
	return e instanceof Qn ? new Qn({
		...e._def,
		type: $n(e.element)
	}) : e instanceof vr ? vr.create($n(e.unwrap())) : e instanceof yr ? yr.create($n(e.unwrap())) : e instanceof or ? or.create(e.items.map((e) => $n(e))) : e;
}
var er = class e extends W {
	constructor() {
		super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		let e = this._def.shape(), t = F.objectKeys(e);
		return this._cached = {
			shape: e,
			keys: t
		}, this._cached;
	}
	_parse(e) {
		if (this._getType(e) !== I.object) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				code: L.invalid_type,
				expected: I.object,
				received: t.parsedType
			}), B;
		}
		let { status: t, ctx: n } = this._processInputParams(e), { shape: r, keys: i } = this._getCached(), a = [];
		if (!(this._def.catchall instanceof Xn && this._def.unknownKeys === "strip")) for (let e in n.data) i.includes(e) || a.push(e);
		let o = [];
		for (let e of i) {
			let t = r[e], i = n.data[e];
			o.push({
				key: {
					status: "valid",
					value: e
				},
				value: t._parse(new pn(n, i, n.path, e)),
				alwaysSet: e in n.data
			});
		}
		if (this._def.catchall instanceof Xn) {
			let e = this._def.unknownKeys;
			if (e === "passthrough") for (let e of a) o.push({
				key: {
					status: "valid",
					value: e
				},
				value: {
					status: "valid",
					value: n.data[e]
				}
			});
			else if (e === "strict") a.length > 0 && (R(n, {
				code: L.unrecognized_keys,
				keys: a
			}), t.dirty());
			else if (e !== "strip") throw Error("Internal ZodObject error: invalid unknownKeys value.");
		} else {
			let e = this._def.catchall;
			for (let t of a) {
				let r = n.data[t];
				o.push({
					key: {
						status: "valid",
						value: t
					},
					value: e._parse(new pn(n, r, n.path, t)),
					alwaysSet: t in n.data
				});
			}
		}
		return n.common.async ? Promise.resolve().then(async () => {
			let e = [];
			for (let t of o) {
				let n = await t.key, r = await t.value;
				e.push({
					key: n,
					value: r,
					alwaysSet: t.alwaysSet
				});
			}
			return e;
		}).then((e) => z.mergeObjectSync(t, e)) : z.mergeObjectSync(t, o);
	}
	get shape() {
		return this._def.shape();
	}
	strict(t) {
		return H.errToObj, new e({
			...this._def,
			unknownKeys: "strict",
			...t === void 0 ? {} : { errorMap: (e, n) => {
				let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
				return e.code === "unrecognized_keys" ? { message: H.errToObj(t).message ?? r } : { message: r };
			} }
		});
	}
	strip() {
		return new e({
			...this._def,
			unknownKeys: "strip"
		});
	}
	passthrough() {
		return new e({
			...this._def,
			unknownKeys: "passthrough"
		});
	}
	extend(t) {
		return new e({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...t
			})
		});
	}
	merge(t) {
		return new e({
			unknownKeys: t._def.unknownKeys,
			catchall: t._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...t._def.shape()
			}),
			typeName: G.ZodObject
		});
	}
	setKey(e, t) {
		return this.augment({ [e]: t });
	}
	catchall(t) {
		return new e({
			...this._def,
			catchall: t
		});
	}
	pick(t) {
		let n = {};
		for (let e of F.objectKeys(t)) t[e] && this.shape[e] && (n[e] = this.shape[e]);
		return new e({
			...this._def,
			shape: () => n
		});
	}
	omit(t) {
		let n = {};
		for (let e of F.objectKeys(this.shape)) t[e] || (n[e] = this.shape[e]);
		return new e({
			...this._def,
			shape: () => n
		});
	}
	deepPartial() {
		return $n(this);
	}
	partial(t) {
		let n = {};
		for (let e of F.objectKeys(this.shape)) {
			let r = this.shape[e];
			n[e] = t && !t[e] ? r : r.optional();
		}
		return new e({
			...this._def,
			shape: () => n
		});
	}
	required(t) {
		let n = {};
		for (let e of F.objectKeys(this.shape)) if (t && !t[e]) n[e] = this.shape[e];
		else {
			let t = this.shape[e];
			for (; t instanceof vr;) t = t._def.innerType;
			n[e] = t;
		}
		return new e({
			...this._def,
			shape: () => n
		});
	}
	keyof() {
		return pr(F.objectKeys(this.shape));
	}
};
er.create = (e, t) => new er({
	shape: () => e,
	unknownKeys: "strip",
	catchall: Xn.create(),
	typeName: G.ZodObject,
	...U(t)
}), er.strictCreate = (e, t) => new er({
	shape: () => e,
	unknownKeys: "strict",
	catchall: Xn.create(),
	typeName: G.ZodObject,
	...U(t)
}), er.lazycreate = (e, t) => new er({
	shape: e,
	unknownKeys: "strip",
	catchall: Xn.create(),
	typeName: G.ZodObject,
	...U(t)
});
var tr = class extends W {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = this._def.options;
		function r(e) {
			for (let t of e) if (t.result.status === "valid") return t.result;
			for (let n of e) if (n.result.status === "dirty") return t.common.issues.push(...n.ctx.common.issues), n.result;
			let n = e.map((e) => new nn(e.ctx.common.issues));
			return R(t, {
				code: L.invalid_union,
				unionErrors: n
			}), B;
		}
		if (t.common.async) return Promise.all(n.map(async (e) => {
			let n = {
				...t,
				common: {
					...t.common,
					issues: []
				},
				parent: null
			};
			return {
				result: await e._parseAsync({
					data: t.data,
					path: t.path,
					parent: n
				}),
				ctx: n
			};
		})).then(r);
		{
			let e, r = [];
			for (let i of n) {
				let n = {
					...t,
					common: {
						...t.common,
						issues: []
					},
					parent: null
				}, a = i._parseSync({
					data: t.data,
					path: t.path,
					parent: n
				});
				if (a.status === "valid") return a;
				a.status === "dirty" && !e && (e = {
					result: a,
					ctx: n
				}), n.common.issues.length && r.push(n.common.issues);
			}
			if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
			let i = r.map((e) => new nn(e));
			return R(t, {
				code: L.invalid_union,
				unionErrors: i
			}), B;
		}
	}
	get options() {
		return this._def.options;
	}
};
tr.create = (e, t) => new tr({
	options: e,
	typeName: G.ZodUnion,
	...U(t)
});
var nr = (e) => e instanceof dr ? nr(e.schema) : e instanceof _r ? nr(e.innerType()) : e instanceof fr ? [e.value] : e instanceof mr ? e.options : e instanceof hr ? F.objectValues(e.enum) : e instanceof br ? nr(e._def.innerType) : e instanceof Kn ? [void 0] : e instanceof qn ? [null] : e instanceof vr ? [void 0, ...nr(e.unwrap())] : e instanceof yr ? [null, ...nr(e.unwrap())] : e instanceof Cr || e instanceof Tr ? nr(e.unwrap()) : e instanceof xr ? nr(e._def.innerType) : [], rr = class e extends W {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== I.object) return R(t, {
			code: L.invalid_type,
			expected: I.object,
			received: t.parsedType
		}), B;
		let n = this.discriminator, r = t.data[n], i = this.optionsMap.get(r);
		return i ? t.common.async ? i._parseAsync({
			data: t.data,
			path: t.path,
			parent: t
		}) : i._parseSync({
			data: t.data,
			path: t.path,
			parent: t
		}) : (R(t, {
			code: L.invalid_union_discriminator,
			options: Array.from(this.optionsMap.keys()),
			path: [n]
		}), B);
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	static create(t, n, r) {
		let i = /* @__PURE__ */ new Map();
		for (let e of n) {
			let n = nr(e.shape[t]);
			if (!n.length) throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
			for (let r of n) {
				if (i.has(r)) throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);
				i.set(r, e);
			}
		}
		return new e({
			typeName: G.ZodDiscriminatedUnion,
			discriminator: t,
			options: n,
			optionsMap: i,
			...U(r)
		});
	}
};
function ir(e, t) {
	let n = tn(e), r = tn(t);
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (n === I.object && r === I.object) {
		let n = F.objectKeys(t), r = F.objectKeys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = ir(e[n], t[n]);
			if (!r.valid) return { valid: !1 };
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (n === I.array && r === I.array) {
		if (e.length !== t.length) return { valid: !1 };
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = ir(i, a);
			if (!o.valid) return { valid: !1 };
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return n === I.date && r === I.date && +e == +t ? {
		valid: !0,
		data: e
	} : { valid: !1 };
}
var ar = class extends W {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e), r = (e, r) => {
			if (ln(e) || ln(r)) return B;
			let i = ir(e.value, r.value);
			return i.valid ? ((un(e) || un(r)) && t.dirty(), {
				status: t.value,
				value: i.data
			}) : (R(n, { code: L.invalid_intersection_types }), B);
		};
		return n.common.async ? Promise.all([this._def.left._parseAsync({
			data: n.data,
			path: n.path,
			parent: n
		}), this._def.right._parseAsync({
			data: n.data,
			path: n.path,
			parent: n
		})]).then(([e, t]) => r(e, t)) : r(this._def.left._parseSync({
			data: n.data,
			path: n.path,
			parent: n
		}), this._def.right._parseSync({
			data: n.data,
			path: n.path,
			parent: n
		}));
	}
};
ar.create = (e, t, n) => new ar({
	left: e,
	right: t,
	typeName: G.ZodIntersection,
	...U(n)
});
var or = class e extends W {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== I.array) return R(n, {
			code: L.invalid_type,
			expected: I.array,
			received: n.parsedType
		}), B;
		if (n.data.length < this._def.items.length) return R(n, {
			code: L.too_small,
			minimum: this._def.items.length,
			inclusive: !0,
			exact: !1,
			type: "array"
		}), B;
		!this._def.rest && n.data.length > this._def.items.length && (R(n, {
			code: L.too_big,
			maximum: this._def.items.length,
			inclusive: !0,
			exact: !1,
			type: "array"
		}), t.dirty());
		let r = [...n.data].map((e, t) => {
			let r = this._def.items[t] || this._def.rest;
			return r ? r._parse(new pn(n, e, n.path, t)) : null;
		}).filter((e) => !!e);
		return n.common.async ? Promise.all(r).then((e) => z.mergeArray(t, e)) : z.mergeArray(t, r);
	}
	get items() {
		return this._def.items;
	}
	rest(t) {
		return new e({
			...this._def,
			rest: t
		});
	}
};
or.create = (e, t) => {
	if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new or({
		items: e,
		typeName: G.ZodTuple,
		rest: null,
		...U(t)
	});
};
var sr = class e extends W {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== I.object) return R(n, {
			code: L.invalid_type,
			expected: I.object,
			received: n.parsedType
		}), B;
		let r = [], i = this._def.keyType, a = this._def.valueType;
		for (let e in n.data) r.push({
			key: i._parse(new pn(n, e, n.path, e)),
			value: a._parse(new pn(n, n.data[e], n.path, e)),
			alwaysSet: e in n.data
		});
		return n.common.async ? z.mergeObjectAsync(t, r) : z.mergeObjectSync(t, r);
	}
	get element() {
		return this._def.valueType;
	}
	static create(t, n, r) {
		return n instanceof W ? new e({
			keyType: t,
			valueType: n,
			typeName: G.ZodRecord,
			...U(r)
		}) : new e({
			keyType: zn.create(),
			valueType: t,
			typeName: G.ZodRecord,
			...U(n)
		});
	}
}, cr = class extends W {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== I.map) return R(n, {
			code: L.invalid_type,
			expected: I.map,
			received: n.parsedType
		}), B;
		let r = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([e, t], a) => ({
			key: r._parse(new pn(n, e, n.path, [a, "key"])),
			value: i._parse(new pn(n, t, n.path, [a, "value"]))
		}));
		if (n.common.async) {
			let e = /* @__PURE__ */ new Map();
			return Promise.resolve().then(async () => {
				for (let n of a) {
					let r = await n.key, i = await n.value;
					if (r.status === "aborted" || i.status === "aborted") return B;
					(r.status === "dirty" || i.status === "dirty") && t.dirty(), e.set(r.value, i.value);
				}
				return {
					status: t.value,
					value: e
				};
			});
		}
		{
			let e = /* @__PURE__ */ new Map();
			for (let n of a) {
				let r = n.key, i = n.value;
				if (r.status === "aborted" || i.status === "aborted") return B;
				(r.status === "dirty" || i.status === "dirty") && t.dirty(), e.set(r.value, i.value);
			}
			return {
				status: t.value,
				value: e
			};
		}
	}
};
cr.create = (e, t, n) => new cr({
	valueType: t,
	keyType: e,
	typeName: G.ZodMap,
	...U(n)
});
var lr = class e extends W {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== I.set) return R(n, {
			code: L.invalid_type,
			expected: I.set,
			received: n.parsedType
		}), B;
		let r = this._def;
		r.minSize !== null && n.data.size < r.minSize.value && (R(n, {
			code: L.too_small,
			minimum: r.minSize.value,
			type: "set",
			inclusive: !0,
			exact: !1,
			message: r.minSize.message
		}), t.dirty()), r.maxSize !== null && n.data.size > r.maxSize.value && (R(n, {
			code: L.too_big,
			maximum: r.maxSize.value,
			type: "set",
			inclusive: !0,
			exact: !1,
			message: r.maxSize.message
		}), t.dirty());
		let i = this._def.valueType;
		function a(e) {
			let n = /* @__PURE__ */ new Set();
			for (let r of e) {
				if (r.status === "aborted") return B;
				r.status === "dirty" && t.dirty(), n.add(r.value);
			}
			return {
				status: t.value,
				value: n
			};
		}
		let o = [...n.data.values()].map((e, t) => i._parse(new pn(n, e, n.path, t)));
		return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
	}
	min(t, n) {
		return new e({
			...this._def,
			minSize: {
				value: t,
				message: H.toString(n)
			}
		});
	}
	max(t, n) {
		return new e({
			...this._def,
			maxSize: {
				value: t,
				message: H.toString(n)
			}
		});
	}
	size(e, t) {
		return this.min(e, t).max(e, t);
	}
	nonempty(e) {
		return this.min(1, e);
	}
};
lr.create = (e, t) => new lr({
	valueType: e,
	minSize: null,
	maxSize: null,
	typeName: G.ZodSet,
	...U(t)
});
var ur = class e extends W {
	constructor() {
		super(...arguments), this.validate = this.implement;
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== I.function) return R(t, {
			code: L.invalid_type,
			expected: I.function,
			received: t.parsedType
		}), B;
		function n(e, n) {
			return sn({
				data: e,
				path: t.path,
				errorMaps: [
					t.common.contextualErrorMap,
					t.schemaErrorMap,
					on(),
					rn
				].filter((e) => !!e),
				issueData: {
					code: L.invalid_arguments,
					argumentsError: n
				}
			});
		}
		function r(e, n) {
			return sn({
				data: e,
				path: t.path,
				errorMaps: [
					t.common.contextualErrorMap,
					t.schemaErrorMap,
					on(),
					rn
				].filter((e) => !!e),
				issueData: {
					code: L.invalid_return_type,
					returnTypeError: n
				}
			});
		}
		let i = { errorMap: t.common.contextualErrorMap }, a = t.data;
		if (this._def.returns instanceof gr) {
			let e = this;
			return V(async function(...t) {
				let o = new nn([]), s = await e._def.args.parseAsync(t, i).catch((e) => {
					throw o.addIssue(n(t, e)), o;
				}), c = await Reflect.apply(a, this, s);
				return await e._def.returns._def.type.parseAsync(c, i).catch((e) => {
					throw o.addIssue(r(c, e)), o;
				});
			});
		}
		{
			let e = this;
			return V(function(...t) {
				let o = e._def.args.safeParse(t, i);
				if (!o.success) throw new nn([n(t, o.error)]);
				let s = Reflect.apply(a, this, o.data), c = e._def.returns.safeParse(s, i);
				if (!c.success) throw new nn([r(s, c.error)]);
				return c.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...t) {
		return new e({
			...this._def,
			args: or.create(t).rest(Yn.create())
		});
	}
	returns(t) {
		return new e({
			...this._def,
			returns: t
		});
	}
	implement(e) {
		return this.parse(e);
	}
	strictImplement(e) {
		return this.parse(e);
	}
	static create(t, n, r) {
		return new e({
			args: t || or.create([]).rest(Yn.create()),
			returns: n || Yn.create(),
			typeName: G.ZodFunction,
			...U(r)
		});
	}
}, dr = class extends W {
	get schema() {
		return this._def.getter();
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		return this._def.getter()._parse({
			data: t.data,
			path: t.path,
			parent: t
		});
	}
};
dr.create = (e, t) => new dr({
	getter: e,
	typeName: G.ZodLazy,
	...U(t)
});
var fr = class extends W {
	_parse(e) {
		if (e.data !== this._def.value) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				received: t.data,
				code: L.invalid_literal,
				expected: this._def.value
			}), B;
		}
		return {
			status: "valid",
			value: e.data
		};
	}
	get value() {
		return this._def.value;
	}
};
fr.create = (e, t) => new fr({
	value: e,
	typeName: G.ZodLiteral,
	...U(t)
});
function pr(e, t) {
	return new mr({
		values: e,
		typeName: G.ZodEnum,
		...U(t)
	});
}
var mr = class e extends W {
	_parse(e) {
		if (typeof e.data != "string") {
			let t = this._getOrReturnCtx(e), n = this._def.values;
			return R(t, {
				expected: F.joinValues(n),
				received: t.parsedType,
				code: L.invalid_type
			}), B;
		}
		if (this._cache ||= new Set(this._def.values), !this._cache.has(e.data)) {
			let t = this._getOrReturnCtx(e), n = this._def.values;
			return R(t, {
				received: t.data,
				code: L.invalid_enum_value,
				options: n
			}), B;
		}
		return V(e.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	get Values() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	get Enum() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	extract(t, n = this._def) {
		return e.create(t, {
			...this._def,
			...n
		});
	}
	exclude(t, n = this._def) {
		return e.create(this.options.filter((e) => !t.includes(e)), {
			...this._def,
			...n
		});
	}
};
mr.create = pr;
var hr = class extends W {
	_parse(e) {
		let t = F.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
		if (n.parsedType !== I.string && n.parsedType !== I.number) {
			let e = F.objectValues(t);
			return R(n, {
				expected: F.joinValues(e),
				received: n.parsedType,
				code: L.invalid_type
			}), B;
		}
		if (this._cache ||= new Set(F.getValidEnumValues(this._def.values)), !this._cache.has(e.data)) {
			let e = F.objectValues(t);
			return R(n, {
				received: n.data,
				code: L.invalid_enum_value,
				options: e
			}), B;
		}
		return V(e.data);
	}
	get enum() {
		return this._def.values;
	}
};
hr.create = (e, t) => new hr({
	values: e,
	typeName: G.ZodNativeEnum,
	...U(t)
});
var gr = class extends W {
	unwrap() {
		return this._def.type;
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		return t.parsedType !== I.promise && t.common.async === !1 ? (R(t, {
			code: L.invalid_type,
			expected: I.promise,
			received: t.parsedType
		}), B) : V((t.parsedType === I.promise ? t.data : Promise.resolve(t.data)).then((e) => this._def.type.parseAsync(e, {
			path: t.path,
			errorMap: t.common.contextualErrorMap
		})));
	}
};
gr.create = (e, t) => new gr({
	type: e,
	typeName: G.ZodPromise,
	...U(t)
});
var _r = class extends W {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === G.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e), r = this._def.effect || null, i = {
			addIssue: (e) => {
				R(n, e), e.fatal ? t.abort() : t.dirty();
			},
			get path() {
				return n.path;
			}
		};
		if (i.addIssue = i.addIssue.bind(i), r.type === "preprocess") {
			let e = r.transform(n.data, i);
			if (n.common.async) return Promise.resolve(e).then(async (e) => {
				if (t.value === "aborted") return B;
				let r = await this._def.schema._parseAsync({
					data: e,
					path: n.path,
					parent: n
				});
				return r.status === "aborted" ? B : r.status === "dirty" || t.value === "dirty" ? cn(r.value) : r;
			});
			{
				if (t.value === "aborted") return B;
				let r = this._def.schema._parseSync({
					data: e,
					path: n.path,
					parent: n
				});
				return r.status === "aborted" ? B : r.status === "dirty" || t.value === "dirty" ? cn(r.value) : r;
			}
		}
		if (r.type === "refinement") {
			let e = (e) => {
				let t = r.refinement(e, i);
				if (n.common.async) return Promise.resolve(t);
				if (t instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
				return e;
			};
			if (n.common.async === !1) {
				let r = this._def.schema._parseSync({
					data: n.data,
					path: n.path,
					parent: n
				});
				return r.status === "aborted" ? B : (r.status === "dirty" && t.dirty(), e(r.value), {
					status: t.value,
					value: r.value
				});
			}
			return this._def.schema._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			}).then((n) => n.status === "aborted" ? B : (n.status === "dirty" && t.dirty(), e(n.value).then(() => ({
				status: t.value,
				value: n.value
			}))));
		}
		if (r.type === "transform") {
			if (n.common.async === !1) {
				let e = this._def.schema._parseSync({
					data: n.data,
					path: n.path,
					parent: n
				});
				if (!dn(e)) return B;
				let a = r.transform(e.value, i);
				if (a instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
				return {
					status: t.value,
					value: a
				};
			}
			return this._def.schema._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			}).then((e) => dn(e) ? Promise.resolve(r.transform(e.value, i)).then((e) => ({
				status: t.value,
				value: e
			})) : B);
		}
		F.assertNever(r);
	}
};
_r.create = (e, t, n) => new _r({
	schema: e,
	typeName: G.ZodEffects,
	effect: t,
	...U(n)
}), _r.createWithPreprocess = (e, t, n) => new _r({
	schema: t,
	effect: {
		type: "preprocess",
		transform: e
	},
	typeName: G.ZodEffects,
	...U(n)
});
var vr = class extends W {
	_parse(e) {
		return this._getType(e) === I.undefined ? V(void 0) : this._def.innerType._parse(e);
	}
	unwrap() {
		return this._def.innerType;
	}
};
vr.create = (e, t) => new vr({
	innerType: e,
	typeName: G.ZodOptional,
	...U(t)
});
var yr = class extends W {
	_parse(e) {
		return this._getType(e) === I.null ? V(null) : this._def.innerType._parse(e);
	}
	unwrap() {
		return this._def.innerType;
	}
};
yr.create = (e, t) => new yr({
	innerType: e,
	typeName: G.ZodNullable,
	...U(t)
});
var br = class extends W {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = t.data;
		return t.parsedType === I.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
			data: n,
			path: t.path,
			parent: t
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
};
br.create = (e, t) => new br({
	innerType: e,
	typeName: G.ZodDefault,
	defaultValue: typeof t.default == "function" ? t.default : () => t.default,
	...U(t)
});
var xr = class extends W {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = {
			...t,
			common: {
				...t.common,
				issues: []
			}
		}, r = this._def.innerType._parse({
			data: n.data,
			path: n.path,
			parent: { ...n }
		});
		return fn(r) ? r.then((e) => ({
			status: "valid",
			value: e.status === "valid" ? e.value : this._def.catchValue({
				get error() {
					return new nn(n.common.issues);
				},
				input: n.data
			})
		})) : {
			status: "valid",
			value: r.status === "valid" ? r.value : this._def.catchValue({
				get error() {
					return new nn(n.common.issues);
				},
				input: n.data
			})
		};
	}
	removeCatch() {
		return this._def.innerType;
	}
};
xr.create = (e, t) => new xr({
	innerType: e,
	typeName: G.ZodCatch,
	catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
	...U(t)
});
var Sr = class extends W {
	_parse(e) {
		if (this._getType(e) !== I.nan) {
			let t = this._getOrReturnCtx(e);
			return R(t, {
				code: L.invalid_type,
				expected: I.nan,
				received: t.parsedType
			}), B;
		}
		return {
			status: "valid",
			value: e.data
		};
	}
};
Sr.create = (e) => new Sr({
	typeName: G.ZodNaN,
	...U(e)
});
var Cr = class extends W {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = t.data;
		return this._def.type._parse({
			data: n,
			path: t.path,
			parent: t
		});
	}
	unwrap() {
		return this._def.type;
	}
}, wr = class e extends W {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.common.async) return (async () => {
			let e = await this._def.in._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			});
			return e.status === "aborted" ? B : e.status === "dirty" ? (t.dirty(), cn(e.value)) : this._def.out._parseAsync({
				data: e.value,
				path: n.path,
				parent: n
			});
		})();
		{
			let e = this._def.in._parseSync({
				data: n.data,
				path: n.path,
				parent: n
			});
			return e.status === "aborted" ? B : e.status === "dirty" ? (t.dirty(), {
				status: "dirty",
				value: e.value
			}) : this._def.out._parseSync({
				data: e.value,
				path: n.path,
				parent: n
			});
		}
	}
	static create(t, n) {
		return new e({
			in: t,
			out: n,
			typeName: G.ZodPipeline
		});
	}
}, Tr = class extends W {
	_parse(e) {
		let t = this._def.innerType._parse(e), n = (e) => (dn(e) && (e.value = Object.freeze(e.value)), e);
		return fn(t) ? t.then((e) => n(e)) : n(t);
	}
	unwrap() {
		return this._def.innerType;
	}
};
Tr.create = (e, t) => new Tr({
	innerType: e,
	typeName: G.ZodReadonly,
	...U(t)
}), er.lazycreate;
var G;
(function(e) {
	e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(G ||= {});
var K = zn.create, Er = Vn.create;
Sr.create, Hn.create;
var Dr = Un.create, Or = Wn.create;
Gn.create, Kn.create, qn.create;
var kr = Jn.create, Ar = Yn.create;
Xn.create, Zn.create;
var jr = Qn.create, Mr = er.create;
er.strictCreate, tr.create, rr.create, ar.create, or.create, sr.create, cr.create, lr.create, ur.create, dr.create;
var Nr = fr.create, Pr = mr.create;
hr.create, gr.create, _r.create, vr.create, yr.create, _r.createWithPreprocess, wr.create;
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/metadata.min.json.js
var Fr = {
	version: 4,
	country_calling_codes: {
		1: [
			"US",
			"AG",
			"AI",
			"AS",
			"BB",
			"BM",
			"BS",
			"CA",
			"DM",
			"DO",
			"GD",
			"GU",
			"JM",
			"KN",
			"KY",
			"LC",
			"MP",
			"MS",
			"PR",
			"SX",
			"TC",
			"TT",
			"VC",
			"VG",
			"VI"
		],
		7: ["RU", "KZ"],
		20: ["EG"],
		27: ["ZA"],
		30: ["GR"],
		31: ["NL"],
		32: ["BE"],
		33: ["FR"],
		34: ["ES"],
		36: ["HU"],
		39: ["IT", "VA"],
		40: ["RO"],
		41: ["CH"],
		43: ["AT"],
		44: [
			"GB",
			"GG",
			"IM",
			"JE"
		],
		45: ["DK"],
		46: ["SE"],
		47: ["NO", "SJ"],
		48: ["PL"],
		49: ["DE"],
		51: ["PE"],
		52: ["MX"],
		53: ["CU"],
		54: ["AR"],
		55: ["BR"],
		56: ["CL"],
		57: ["CO"],
		58: ["VE"],
		60: ["MY"],
		61: [
			"AU",
			"CC",
			"CX"
		],
		62: ["ID"],
		63: ["PH"],
		64: ["NZ"],
		65: ["SG"],
		66: ["TH"],
		81: ["JP"],
		82: ["KR"],
		84: ["VN"],
		86: ["CN"],
		90: ["TR"],
		91: ["IN"],
		92: ["PK"],
		93: ["AF"],
		94: ["LK"],
		95: ["MM"],
		98: ["IR"],
		211: ["SS"],
		212: ["MA", "EH"],
		213: ["DZ"],
		216: ["TN"],
		218: ["LY"],
		220: ["GM"],
		221: ["SN"],
		222: ["MR"],
		223: ["ML"],
		224: ["GN"],
		225: ["CI"],
		226: ["BF"],
		227: ["NE"],
		228: ["TG"],
		229: ["BJ"],
		230: ["MU"],
		231: ["LR"],
		232: ["SL"],
		233: ["GH"],
		234: ["NG"],
		235: ["TD"],
		236: ["CF"],
		237: ["CM"],
		238: ["CV"],
		239: ["ST"],
		240: ["GQ"],
		241: ["GA"],
		242: ["CG"],
		243: ["CD"],
		244: ["AO"],
		245: ["GW"],
		246: ["IO"],
		247: ["AC"],
		248: ["SC"],
		249: ["SD"],
		250: ["RW"],
		251: ["ET"],
		252: ["SO"],
		253: ["DJ"],
		254: ["KE"],
		255: ["TZ"],
		256: ["UG"],
		257: ["BI"],
		258: ["MZ"],
		260: ["ZM"],
		261: ["MG"],
		262: ["RE", "YT"],
		263: ["ZW"],
		264: ["NA"],
		265: ["MW"],
		266: ["LS"],
		267: ["BW"],
		268: ["SZ"],
		269: ["KM"],
		290: ["SH", "TA"],
		291: ["ER"],
		297: ["AW"],
		298: ["FO"],
		299: ["GL"],
		350: ["GI"],
		351: ["PT"],
		352: ["LU"],
		353: ["IE"],
		354: ["IS"],
		355: ["AL"],
		356: ["MT"],
		357: ["CY"],
		358: ["FI", "AX"],
		359: ["BG"],
		370: ["LT"],
		371: ["LV"],
		372: ["EE"],
		373: ["MD"],
		374: ["AM"],
		375: ["BY"],
		376: ["AD"],
		377: ["MC"],
		378: ["SM"],
		380: ["UA"],
		381: ["RS"],
		382: ["ME"],
		383: ["XK"],
		385: ["HR"],
		386: ["SI"],
		387: ["BA"],
		389: ["MK"],
		420: ["CZ"],
		421: ["SK"],
		423: ["LI"],
		500: ["FK"],
		501: ["BZ"],
		502: ["GT"],
		503: ["SV"],
		504: ["HN"],
		505: ["NI"],
		506: ["CR"],
		507: ["PA"],
		508: ["PM"],
		509: ["HT"],
		590: [
			"GP",
			"BL",
			"MF"
		],
		591: ["BO"],
		592: ["GY"],
		593: ["EC"],
		594: ["GF"],
		595: ["PY"],
		596: ["MQ"],
		597: ["SR"],
		598: ["UY"],
		599: ["CW", "BQ"],
		670: ["TL"],
		672: ["NF"],
		673: ["BN"],
		674: ["NR"],
		675: ["PG"],
		676: ["TO"],
		677: ["SB"],
		678: ["VU"],
		679: ["FJ"],
		680: ["PW"],
		681: ["WF"],
		682: ["CK"],
		683: ["NU"],
		685: ["WS"],
		686: ["KI"],
		687: ["NC"],
		688: ["TV"],
		689: ["PF"],
		690: ["TK"],
		691: ["FM"],
		692: ["MH"],
		850: ["KP"],
		852: ["HK"],
		853: ["MO"],
		855: ["KH"],
		856: ["LA"],
		880: ["BD"],
		886: ["TW"],
		960: ["MV"],
		961: ["LB"],
		962: ["JO"],
		963: ["SY"],
		964: ["IQ"],
		965: ["KW"],
		966: ["SA"],
		967: ["YE"],
		968: ["OM"],
		970: ["PS"],
		971: ["AE"],
		972: ["IL"],
		973: ["BH"],
		974: ["QA"],
		975: ["BT"],
		976: ["MN"],
		977: ["NP"],
		992: ["TJ"],
		993: ["TM"],
		994: ["AZ"],
		995: ["GE"],
		996: ["KG"],
		998: ["UZ"]
	},
	countries: {
		AC: [
			"247",
			"00",
			"(?:[01589]\\d|[2-467])\\d{4}",
			[5, 6]
		],
		AD: [
			"376",
			"00",
			"(?:1|6\\d)\\d{7}|[135-9]\\d{5}",
			[
				6,
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					["[135-9]"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["1"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["6"]
				]
			]
		],
		AE: [
			"971",
			"00",
			"(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{2,9})",
					"$1 $2",
					["60|8"]
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[236]|[479][2-8]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{5})",
					"$1 $2 $3",
					["[479]"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["5"],
					"0$1"
				]
			],
			"0"
		],
		AF: [
			"93",
			"00",
			"[2-7]\\d{8}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[2-7]"],
				"0$1"
			]],
			"0"
		],
		AG: [
			"1",
			"011",
			"(?:268|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([457]\\d{6})$|1",
			"268$1",
			0,
			"268"
		],
		AI: [
			"1",
			"011",
			"(?:264|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2457]\\d{6})$|1",
			"264$1",
			0,
			"264"
		],
		AL: [
			"355",
			"00",
			"(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
			[
				6,
				7,
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{3,4})",
					"$1 $2",
					["80|9"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["4[2-6]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[2358][2-5]|4"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["[23578]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["6"],
					"0$1"
				]
			],
			"0"
		],
		AM: [
			"374",
			"00",
			"(?:[1-489]\\d|55|60|77)\\d{6}",
			[8],
			[
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["[89]0"],
					"0 $1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["2|3[12]"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["1|47"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["[3-9]"],
					"0$1"
				]
			],
			"0"
		],
		AO: [
			"244",
			"00",
			"[29]\\d{8}",
			[9],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[29]"]
			]]
		],
		AR: [
			"54",
			"00",
			"(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",
			[10, 11],
			[
				[
					"(\\d{4})(\\d{2})(\\d{4})",
					"$1 $2-$3",
					[
						"2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
						"2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
						"2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
						"2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
					],
					"0$1",
					1
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2-$3",
					["1"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["[68]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2-$3",
					["[23]"],
					"0$1",
					1
				],
				[
					"(\\d)(\\d{4})(\\d{2})(\\d{4})",
					"$2 15-$3-$4",
					[
						"9(?:2[2-469]|3[3-578])",
						"9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
						"9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
						"9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
						"9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
					],
					"0$1",
					0,
					"$1 $2 $3-$4"
				],
				[
					"(\\d)(\\d{2})(\\d{4})(\\d{4})",
					"$2 15-$3-$4",
					["91"],
					"0$1",
					0,
					"$1 $2 $3-$4"
				],
				[
					"(\\d{3})(\\d{3})(\\d{5})",
					"$1-$2-$3",
					["8"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{4})",
					"$2 15-$3-$4",
					["9"],
					"0$1",
					0,
					"$1 $2 $3-$4"
				]
			],
			"0",
			0,
			"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
			"9$1"
		],
		AS: [
			"1",
			"011",
			"(?:[58]\\d\\d|684|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([267]\\d{6})$|1",
			"684$1",
			0,
			"684"
		],
		AT: [
			"43",
			"00",
			"1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d)(\\d{3,12})",
					"$1 $2",
					["1(?:11|[2-9])"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})",
					"$1 $2",
					["517"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,5})",
					"$1 $2",
					["5[079]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,10})",
					"$1 $2",
					["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3,9})",
					"$1 $2",
					["[2-467]|5[2-6]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["5"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4,7})",
					"$1 $2 $3",
					["5"],
					"0$1"
				]
			],
			"0"
		],
		AU: [
			"61",
			"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
			"1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				12
			],
			[
				[
					"(\\d{2})(\\d{3,4})",
					"$1 $2",
					["16"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					["16"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["14|4"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[2378]"],
					"(0$1)"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1(?:30|[89])"]
				]
			],
			"0",
			0,
			"(183[12])|0",
			0,
			0,
			0,
			[
				["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}", [9]],
				["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]],
				["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
				["190[0-26]\\d{6}", [10]],
				0,
				0,
				0,
				["163\\d{2,6}", [
					5,
					6,
					7,
					8,
					9
				]],
				["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
				["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [
					6,
					8,
					10,
					12
				]]
			],
			"0011"
		],
		AW: [
			"297",
			"00",
			"(?:[25-79]\\d\\d|800)\\d{4}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[25-9]"]
			]]
		],
		AX: [
			"358",
			"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
			"2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			0,
			"0",
			0,
			0,
			0,
			0,
			"18",
			0,
			"00"
		],
		AZ: [
			"994",
			"00",
			"365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
			[9],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["90"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"1[28]|2|365|46",
						"1[28]|2|365[45]|46",
						"1[28]|2|365(?:4|5[02])|46"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[13-9]"],
					"0$1"
				]
			],
			"0"
		],
		BA: [
			"387",
			"00",
			"6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",
			[8, 9],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["6[1-3]|[7-9]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2-$3",
					["[3-5]|6[56]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					["6"],
					"0$1"
				]
			],
			"0"
		],
		BB: [
			"1",
			"011",
			"(?:246|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"246$1",
			0,
			"246"
		],
		BD: [
			"880",
			"00",
			"[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{4,6})",
					"$1-$2",
					["31[5-8]|[459]1"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,7})",
					"$1-$2",
					["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3,6})",
					"$1-$2",
					["[13-9]|2[23]"],
					"0$1"
				],
				[
					"(\\d)(\\d{7,8})",
					"$1-$2",
					["2"],
					"0$1"
				]
			],
			"0"
		],
		BE: [
			"32",
			"00",
			"4\\d{8}|[1-9]\\d{7}",
			[8, 9],
			[
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["(?:80|9)0"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[239]|4[23]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[15-8]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["4"],
					"0$1"
				]
			],
			"0"
		],
		BF: [
			"226",
			"00",
			"[024-7]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[024-7]"]
			]]
		],
		BG: [
			"359",
			"00",
			"00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
			[
				6,
				7,
				8,
				9,
				12
			],
			[
				[
					"(\\d)(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["2"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["43[1-6]|70[1-9]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,3})",
					"$1 $2 $3",
					["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["(?:70|8)0"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3",
					["43[1-7]|7"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[48]|9[08]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["9"],
					"0$1"
				]
			],
			"0"
		],
		BH: [
			"973",
			"00",
			"[136-9]\\d{7}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[13679]|8[02-4679]"]
			]]
		],
		BI: [
			"257",
			"00",
			"(?:[267]\\d|31)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[2367]"]
			]]
		],
		BJ: [
			"229",
			"00",
			"(?:01\\d|8)\\d{7}",
			[8, 10],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"]
			], [
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				["0"]
			]]
		],
		BL: [
			"590",
			"00",
			"7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",
			[9],
			0,
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"],
				["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],
				["80[0-5]\\d{6}"],
				["8[129]\\d{7}"],
				0,
				0,
				0,
				0,
				["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
			]
		],
		BM: [
			"1",
			"011",
			"(?:441|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"441$1",
			0,
			"441"
		],
		BN: [
			"673",
			"00",
			"[2-578]\\d{6}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[2-578]"]
			]]
		],
		BO: [
			"591",
			"00(?:1\\d)?",
			"(?:[2-7]\\d\\d|8001)\\d{5}",
			[8, 9],
			[
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					["[23]|4[46]|50"]
				],
				[
					"(\\d{8})",
					"$1",
					["[5-7]"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["8"]
				]
			],
			"0",
			0,
			"0(1\\d)?"
		],
		BQ: [
			"599",
			"00",
			"(?:[34]1|7\\d)\\d{5}",
			[7],
			0,
			0,
			0,
			0,
			0,
			0,
			"[347]"
		],
		BR: [
			"55",
			"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
			"[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",
			[
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]
				],
				[
					"(\\d{3})(\\d{2,3})(\\d{4})",
					"$1 $2 $3",
					["(?:[358]|90)0"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2-$3",
					["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],
					"($1)"
				],
				[
					"(\\d{2})(\\d{5})(\\d{4})",
					"$1 $2-$3",
					["[16][1-9]|[2-57-9]"],
					"($1)"
				]
			],
			"0",
			0,
			"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
			"$2"
		],
		BS: [
			"1",
			"011",
			"(?:242|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([3-8]\\d{6})$|1",
			"242$1",
			0,
			"242"
		],
		BT: [
			"975",
			"00",
			"[178]\\d{7}|[2-8]\\d{6}",
			[7, 8],
			[[
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[2-6]|7[246]|8[2-4]"]
			], [
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["1[67]|[78]"]
			]]
		],
		BW: [
			"267",
			"00",
			"(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",
			[
				7,
				8,
				10
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["90"]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[24-6]|3[15-9]"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[37]"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["0"]
				],
				[
					"(\\d{3})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					["8"]
				]
			]
		],
		BY: [
			"375",
			"810",
			"(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
			[
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					["800"],
					"8 $1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,4})",
					"$1 $2 $3",
					["800"],
					"8 $1"
				],
				[
					"(\\d{4})(\\d{2})(\\d{3})",
					"$1 $2-$3",
					["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],
					"8 0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					["1(?:[56]|7[467])|2[1-3]"],
					"8 0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					["[1-4]"],
					"8 0$1"
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["[89]"],
					"8 $1"
				]
			],
			"8",
			0,
			"0|80?",
			0,
			0,
			0,
			0,
			"8~10"
		],
		BZ: [
			"501",
			"00",
			"(?:0800\\d|[2-8])\\d{6}",
			[7, 11],
			[[
				"(\\d{3})(\\d{4})",
				"$1-$2",
				["[2-8]"]
			], [
				"(\\d)(\\d{3})(\\d{4})(\\d{3})",
				"$1-$2-$3-$4",
				["0"]
			]]
		],
		CA: [
			"1",
			"011",
			"[2-9]\\d{9}|3\\d{6}",
			[7, 10],
			0,
			"1",
			0,
			0,
			0,
			0,
			0,
			[
				["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]],
				["", [10]],
				["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
				["900[2-9]\\d{6}", [10]],
				["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]],
				0,
				["310\\d{4}", [7]],
				0,
				["600[2-9]\\d{6}", [10]]
			]
		],
		CC: [
			"61",
			"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
			"1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
			[
				6,
				7,
				8,
				9,
				10,
				12
			],
			0,
			"0",
			0,
			"([59]\\d{7})$|0",
			"8$1",
			0,
			0,
			[
				["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
				["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]],
				["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
				["190[0-26]\\d{6}", [10]],
				0,
				0,
				0,
				0,
				["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
				["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [
					6,
					8,
					10,
					12
				]]
			],
			"0011"
		],
		CD: [
			"243",
			"00",
			"(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["88"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["[1-6]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["5"],
					"0$1"
				]
			],
			"0"
		],
		CF: [
			"236",
			"00",
			"8776\\d{4}|(?:[27]\\d|61)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[26-8]"]
			]]
		],
		CG: [
			"242",
			"00",
			"222\\d{6}|(?:0\\d|80)\\d{7}",
			[9],
			[[
				"(\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				["8"]
			], [
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[02]"]
			]]
		],
		CH: [
			"41",
			"00",
			"8\\d{11}|[2-9]\\d{8}",
			[9, 12],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8[047]|90"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[2-79]|81"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		CI: [
			"225",
			"00",
			"[02]\\d{9}",
			[10],
			[[
				"(\\d{2})(\\d{2})(\\d)(\\d{5})",
				"$1 $2 $3 $4",
				["2"]
			], [
				"(\\d{2})(\\d{2})(\\d{2})(\\d{4})",
				"$1 $2 $3 $4",
				["0"]
			]]
		],
		CK: [
			"682",
			"00",
			"[2-578]\\d{4}",
			[5],
			[[
				"(\\d{2})(\\d{3})",
				"$1 $2",
				["[2-578]"]
			]]
		],
		CL: [
			"56",
			"(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",
			"12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
			[
				9,
				10,
				11
			],
			[
				[
					"(\\d{5})(\\d{4})",
					"$1 $2",
					["219", "2196"],
					"($1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["60|809"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["44"]
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["2[1-36]"],
					"($1)"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["9(?:10|[2-9])"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"],
					"($1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["60|8"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					["60"]
				]
			]
		],
		CM: [
			"237",
			"00",
			"[26]\\d{8}|88\\d{6,7}",
			[8, 9],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["88"]
			], [
				"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				["[26]|88"]
			]]
		],
		CN: [
			"86",
			"00|1(?:[12]\\d|79)\\d\\d00",
			"(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",
			[
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{2})(\\d{5,6})",
					"$1 $2",
					[
						"(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]",
						"(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1",
						"10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12",
						"10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123",
						"10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
						"(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
						"85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
						"85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["(?:4|80)0"]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"10|2(?:[02-57-9]|1[1-9])",
						"10|2(?:[02-57-9]|1[1-9])",
						"10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{7,8})",
					"$1 $2",
					["9"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["80"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[3-578]"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["1[3-9]"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					["[12]"],
					"0$1",
					1
				]
			],
			"0",
			0,
			"(1(?:[12]\\d|79)\\d\\d)|0",
			0,
			0,
			0,
			0,
			"00"
		],
		CO: [
			"57",
			"00(?:4(?:[14]4|56)|[579])",
			"(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}",
			[
				8,
				10,
				11
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["46"]
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					["6|90"],
					"($1)"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					["3[0-357]|9[14]"]
				],
				[
					"(\\d)(\\d{3})(\\d{7})",
					"$1-$2-$3",
					["1"],
					"0$1",
					0,
					"$1 $2 $3"
				]
			],
			"0",
			0,
			"0([3579]|4(?:[14]4|56))?"
		],
		CR: [
			"506",
			"00",
			"(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",
			[8, 10],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[2-7]|8[3-9]"]
			], [
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1-$2-$3",
				["[89]"]
			]],
			0,
			0,
			"(19(?:0[0-2468]|1[09]|20|66|77|99))"
		],
		CU: [
			"53",
			"119",
			"(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",
			[
				6,
				7,
				8,
				10
			],
			[
				[
					"(\\d{2})(\\d{4,6})",
					"$1 $2",
					["2[1-4]|[34]"],
					"(0$1)"
				],
				[
					"(\\d)(\\d{6,7})",
					"$1 $2",
					["7"],
					"(0$1)"
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					["[56]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		CV: [
			"238",
			"0",
			"(?:[2-59]\\d\\d|800)\\d{4}",
			[7],
			[[
				"(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3",
				["[2-589]"]
			]]
		],
		CW: [
			"599",
			"00",
			"(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
			[7, 8],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[3467]"]
			], [
				"(\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["9[4-8]"]
			]],
			0,
			0,
			0,
			0,
			0,
			"[69]"
		],
		CX: [
			"61",
			"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
			"1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
			[
				6,
				7,
				8,
				9,
				10,
				12
			],
			0,
			"0",
			0,
			"([59]\\d{7})$|0",
			"8$1",
			0,
			0,
			[
				["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
				["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]],
				["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
				["190[0-26]\\d{6}", [10]],
				0,
				0,
				0,
				0,
				["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
				["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [
					6,
					8,
					10,
					12
				]]
			],
			"0011"
		],
		CY: [
			"357",
			"00",
			"(?:[279]\\d|[58]0)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{6})",
				"$1 $2",
				["[257-9]"]
			]]
		],
		CZ: [
			"420",
			"00",
			"(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
			[
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[2-8]|9[015-7]"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3 $4",
					["96"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["9"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["9"]
				]
			]
		],
		DE: [
			"49",
			"00",
			"[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15
			],
			[
				[
					"(\\d{2})(\\d{3,13})",
					"$1 $2",
					["3[02]|40|[68]9"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,12})",
					"$1 $2",
					["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{2,11})",
					"$1 $2",
					["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["138"],
					"0$1"
				],
				[
					"(\\d{5})(\\d{2,10})",
					"$1 $2",
					["3"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5,11})",
					"$1 $2",
					["181"],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{4,10})",
					"$1 $2 $3",
					["1(?:3|80)|9"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7,8})",
					"$1 $2",
					["1[67]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7,12})",
					"$1 $2",
					["8"],
					"0$1"
				],
				[
					"(\\d{5})(\\d{6})",
					"$1 $2",
					[
						"185",
						"1850",
						"18500"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["7"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{7})",
					"$1 $2",
					["18[68]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{7})",
					"$1 $2",
					["15[1279]"],
					"0$1"
				],
				[
					"(\\d{5})(\\d{6})",
					"$1 $2",
					["15[03568]", "15(?:[0568]|3[13])"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{8})",
					"$1 $2",
					["18"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{7,8})",
					"$1 $2 $3",
					["1(?:6[023]|7)"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{2})(\\d{7})",
					"$1 $2 $3",
					["15[279]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{8})",
					"$1 $2 $3",
					["15"],
					"0$1"
				]
			],
			"0"
		],
		DJ: [
			"253",
			"00",
			"(?:2\\d|77)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[27]"]
			]]
		],
		DK: [
			"45",
			"00",
			"[2-9]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[2-9]"]
			]]
		],
		DM: [
			"1",
			"011",
			"(?:[58]\\d\\d|767|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-7]\\d{6})$|1",
			"767$1",
			0,
			"767"
		],
		DO: [
			"1",
			"011",
			"(?:[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			0,
			0,
			0,
			"8001|8[024]9"
		],
		DZ: [
			"213",
			"00",
			"(?:[1-4]|[5-79]\\d|80)\\d{7}",
			[8, 9],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[1-4]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["9"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[5-8]"],
					"0$1"
				]
			],
			"0"
		],
		EC: [
			"593",
			"00",
			"1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",
			[
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2-$3",
					["[2-7]"],
					"(0$1)",
					0,
					"$1-$2-$3"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["9"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["1"]
				]
			],
			"0"
		],
		EE: [
			"372",
			"00",
			"8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",
			[
				7,
				8,
				10
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]
				],
				[
					"(\\d{4})(\\d{3,4})",
					"$1 $2",
					["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["7"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8"]
				]
			]
		],
		EG: [
			"20",
			"00",
			"[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{7,8})",
					"$1 $2",
					["[23]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{6,7})",
					"$1 $2",
					["1[35]|[4-6]|8[2468]|9[235-7]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{8})",
					"$1 $2",
					["1"],
					"0$1"
				]
			],
			"0"
		],
		EH: [
			"212",
			"00",
			"[5-8]\\d{8}",
			[9],
			0,
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["528[89]\\d{5}"],
				["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|5[0-5]))\\d{6}"],
				["80[0-7]\\d{6}"],
				["89\\d{7}"],
				0,
				0,
				0,
				0,
				["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]
			]
		],
		ER: [
			"291",
			"00",
			"[178]\\d{6}",
			[7],
			[[
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[178]"],
				"0$1"
			]],
			"0"
		],
		ES: [
			"34",
			"00",
			"(?:400|[5-9]\\d\\d)\\d{6}",
			[9],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[89]00"]
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[4-9]"]
			]]
		],
		ET: [
			"251",
			"00",
			"(?:11|[2-57-9]\\d)\\d{7}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[1-57-9]"],
				"0$1"
			]],
			"0"
		],
		FI: [
			"358",
			"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
			"[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{5})",
					"$1",
					["20[2-59]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,7})",
					"$1 $2",
					["(?:[1-3]0|[68])0|70[07-9]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4,8})",
					"$1 $2",
					["[14]|2[09]|50|7[135]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{6,10})",
					"$1 $2",
					["7"],
					"0$1"
				],
				[
					"(\\d)(\\d{4,9})",
					"$1 $2",
					["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			"1[03-79]|[2-9]",
			0,
			"00"
		],
		FJ: [
			"679",
			"0(?:0|52)",
			"45\\d{5}|(?:0800\\d|[235-9])\\d{6}",
			[7, 11],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[235-9]|45"]
			], [
				"(\\d{4})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["0"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		FK: [
			"500",
			"00",
			"[2-7]\\d{4}",
			[5]
		],
		FM: [
			"691",
			"00",
			"(?:[39]\\d\\d|820)\\d{4}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[389]"]
			]]
		],
		FO: [
			"298",
			"00",
			"[2-9]\\d{5}",
			[6],
			[[
				"(\\d{6})",
				"$1",
				["[2-9]"]
			]],
			0,
			0,
			"(10(?:01|[12]0|88))"
		],
		FR: [
			"33",
			"00",
			"[1-9]\\d{8}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"],
				"0 $1"
			], [
				"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				["[1-79]"],
				"0$1"
			]],
			"0"
		],
		GA: [
			"241",
			"00",
			"(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",
			[7, 8],
			[
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[2-7]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["0"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["11|[67]"],
					"0$1"
				]
			],
			0,
			0,
			"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})",
			"$1"
		],
		GB: [
			"44",
			"00",
			"[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
			[
				7,
				9,
				10
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"800",
						"8001",
						"80011",
						"800111",
						"8001111"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"845",
						"8454",
						"84546",
						"845464"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					["800"],
					"0$1"
				],
				[
					"(\\d{5})(\\d{4,5})",
					"$1 $2",
					[
						"1(?:38|5[23]|69|76|94)",
						"1(?:(?:38|69)7|5(?:24|39)|768|946)",
						"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5,6})",
					"$1 $2",
					["1(?:[2-69][02-9]|[78])"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{6})",
					"$1 $2",
					["7"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[1389]"],
					"0$1"
				]
			],
			"0",
			0,
			"0|180020",
			0,
			0,
			0,
			[
				["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
				["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
				["80[08]\\d{7}|800\\d{6}|8001111"],
				["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
				["70\\d{8}", [10]],
				0,
				["(?:3[0347]|55)\\d{8}", [10]],
				["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
				["56\\d{8}", [10]]
			],
			0,
			" x"
		],
		GD: [
			"1",
			"011",
			"(?:473|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"473$1",
			0,
			"473"
		],
		GE: [
			"995",
			"00",
			"(?:[3-57]\\d\\d|800)\\d{6}",
			[9],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["70"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["32"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["5(?:[0-46-9]|5[0-57-9])|7", "5(?:[0-46-9]|5(?:[0-357-9]|44))|7"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[3-58]"],
					"0$1"
				]
			],
			"0"
		],
		GF: [
			"594",
			"00",
			"(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[5-7]|80[6-9]|9[47]"],
				"0$1"
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[89]"],
				"0$1"
			]],
			"0"
		],
		GG: [
			"44",
			"00",
			"(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
			[
				7,
				9,
				10
			],
			0,
			"0",
			0,
			"([25-9]\\d{5})$|0|180020",
			"1481$1",
			0,
			0,
			[
				["1481[25-9]\\d{5}", [10]],
				["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
				["80[08]\\d{7}|800\\d{6}|8001111"],
				["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
				["70\\d{8}", [10]],
				0,
				["(?:3[0347]|55)\\d{8}", [10]],
				["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
				["56\\d{8}", [10]]
			]
		],
		GH: [
			"233",
			"00",
			"[235]\\d{8}|800\\d{5,6}",
			[8, 9],
			[[
				"(\\d{3})(\\d{5})",
				"$1 $2",
				["8"],
				"0$1"
			], [
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[2358]"],
				"0$1"
			]],
			"0"
		],
		GI: [
			"350",
			"00",
			"(?:[25]\\d|60)\\d{6}",
			[8],
			[[
				"(\\d{3})(\\d{5})",
				"$1 $2",
				["2"]
			]]
		],
		GL: [
			"299",
			"00",
			"(?:19|[2-689]\\d|70)\\d{4}",
			[6],
			[[
				"(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3",
				["19|[2-9]"]
			]]
		],
		GM: [
			"220",
			"00",
			"[2-9]\\d{6}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[2-9]"]
			]]
		],
		GN: [
			"224",
			"00",
			"722\\d{6}|(?:3|6\\d)\\d{7}",
			[8, 9],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["3"]
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[67]"]
			]]
		],
		GP: [
			"590",
			"00",
			"7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[5-79]|80[6-9]"],
				"0$1"
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"],
				"0$1"
			]],
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"],
				["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],
				["80[0-5]\\d{6}"],
				["8[129]\\d{7}"],
				0,
				0,
				0,
				0,
				["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
			]
		],
		GQ: [
			"240",
			"00",
			"222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[235]"]
			], [
				"(\\d{3})(\\d{6})",
				"$1 $2",
				["[89]"]
			]]
		],
		GR: [
			"30",
			"00",
			"5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",
			[
				10,
				11,
				12
			],
			[
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["21|7"]
				],
				[
					"(\\d{4})(\\d{6})",
					"$1 $2",
					["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[2689]"]
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{5})",
					"$1 $2 $3",
					["8"]
				]
			]
		],
		GT: [
			"502",
			"00",
			"80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",
			[8, 11],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[2-8]"]
			], [
				"(\\d{4})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["1"]
			]]
		],
		GU: [
			"1",
			"011",
			"(?:[58]\\d\\d|671|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"671$1",
			0,
			"671"
		],
		GW: [
			"245",
			"00",
			"[49]\\d{8}|4\\d{6}",
			[7, 9],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["40"]
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[49]"]
			]]
		],
		GY: [
			"592",
			"001",
			"(?:[2-8]\\d{3}|9008)\\d{3}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[2-9]"]
			]]
		],
		HK: [
			"852",
			"00(?:30|5[09]|[126-9]?)",
			"8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",
			[
				5,
				6,
				7,
				8,
				9,
				11
			],
			[
				[
					"(\\d{3})(\\d{2,5})",
					"$1 $2",
					["900", "9003"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["9"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		HN: [
			"504",
			"00",
			"8\\d{10}|[237-9]\\d{7}",
			[8, 11],
			[[
				"(\\d{4})(\\d{4})",
				"$1-$2",
				["[237-9]"]
			]]
		],
		HR: [
			"385",
			"00",
			"[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",
			[
				7,
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["6[01]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					["8"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{3})",
					"$1 $2 $3",
					["1"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["6|7[245]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["9"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[2-57]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		HT: [
			"509",
			"00",
			"[2-589]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{4})",
				"$1 $2 $3",
				["[2-589]"]
			]]
		],
		HU: [
			"36",
			"00",
			"[235-7]\\d{8}|[1-9]\\d{7}",
			[8, 9],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"(06 $1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],
					"(06 $1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[2-9]"],
					"06 $1"
				]
			],
			"06"
		],
		ID: [
			"62",
			"00[89]",
			"00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",
			[
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["15"]
				],
				[
					"(\\d{2})(\\d{5,9})",
					"$1 $2",
					["2[124]|[36]1"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{5,7})",
					"$1 $2",
					["800"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5,8})",
					"$1 $2",
					["[2-79]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{3})",
					"$1-$2-$3",
					["8[1-35-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6,8})",
					"$1 $2",
					["1"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["804"],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["80"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4,5})",
					"$1-$2-$3",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		IE: [
			"353",
			"00",
			"(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["2[24-9]|47|58|6[237-9]|9[35-9]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["[45]0"],
					"(0$1)"
				],
				[
					"(\\d)(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[2569]|4[1-69]|7[14]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["70"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["81"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[78]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1"]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["4"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		IL: [
			"972",
			"0(?:0|1[2-9])",
			"1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",
			[
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{4})(\\d{3})",
					"$1-$2",
					["125"]
				],
				[
					"(\\d{4})(\\d{2})(\\d{2})",
					"$1-$2-$3",
					["121"]
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["[2-489]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["[57]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1-$2-$3",
					["12"]
				],
				[
					"(\\d{4})(\\d{6})",
					"$1-$2",
					["159"]
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{3})",
					"$1-$2-$3-$4",
					["1[7-9]"]
				],
				[
					"(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})",
					"$1-$2 $3-$4",
					["15"]
				]
			],
			"0"
		],
		IM: [
			"44",
			"00",
			"1624\\d{6}|(?:[3578]\\d|90)\\d{8}",
			[10],
			0,
			"0",
			0,
			"([25-8]\\d{5})$|0|180020",
			"1624$1",
			0,
			"74576|(?:16|7[56])24"
		],
		IN: [
			"91",
			"00",
			"(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",
			[
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d{8})",
					"$1",
					[
						"5(?:0|2[23]|3[03]|[67]1|88)",
						"5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)",
						"5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"
					],
					0,
					1
				],
				[
					"(\\d{4})(\\d{4,5})",
					"$1 $2",
					["180", "1800"],
					0,
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["140"],
					0,
					1
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"11|2[02]|33|4[04]|79[1-7]|80[2-46]",
						"11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
						"11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67)[14]",
						"1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31)|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
						"1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:3171|5[15][2-6]|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|8(?:16|2[014]|3[126]|6[136]|7[78]|83)(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"
					],
					"0$1",
					1
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|3[129]|5[29]|6[02-5]|70)|807",
						"1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7(?:[23569]|8[0-57-9])|8[1-6])|7(?:1(?:[013-8]|9[6-9])|3(?:17|2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
						"1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\\d|7(?:[23569]\\d|8[0-57-9])|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|3(?:2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"
					],
					"0$1",
					1
				],
				[
					"(\\d{5})(\\d{5})",
					"$1 $2",
					["16|[6-9]"],
					"0$1",
					1
				],
				[
					"(\\d{4})(\\d{2,4})(\\d{4})",
					"$1 $2 $3",
					["18[06]", "18[06]0"],
					0,
					1
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["18"],
					0,
					1
				]
			],
			"0"
		],
		IO: [
			"246",
			"00",
			"3\\d{6}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["3"]
			]]
		],
		IQ: [
			"964",
			"00",
			"(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[2-6]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["7"],
					"0$1"
				]
			],
			"0"
		],
		IR: [
			"98",
			"00",
			"[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
			[
				4,
				5,
				6,
				7,
				10
			],
			[
				[
					"(\\d{4,5})",
					"$1",
					["96"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4,5})",
					"$1 $2",
					["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["9"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[1-8]"],
					"0$1"
				]
			],
			"0"
		],
		IS: [
			"354",
			"00|1(?:0(?:01|[12]0)|100)",
			"(?:38\\d|[4-9])\\d{6}",
			[7, 9],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[4-9]"]
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["3"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		IT: [
			"39",
			"00",
			"0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",
			[
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{2})(\\d{4,6})",
					"$1 $2",
					["0[26]"]
				],
				[
					"(\\d{3})(\\d{3,6})",
					"$1 $2",
					["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]
				],
				[
					"(\\d{4})(\\d{2,6})",
					"$1 $2",
					["0(?:[13-579][2-46-8]|8[236-8])"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["894"]
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["0[26]|5"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["1(?:44|[679])|[378]|43"]
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["0[13-57-9][0159]|14"]
				],
				[
					"(\\d{2})(\\d{4})(\\d{5})",
					"$1 $2 $3",
					["0[26]"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["0"]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4,5})",
					"$1 $2 $3",
					["[03]"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
				["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]],
				["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
				["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [
					6,
					8,
					9,
					10
				]],
				["1(?:78\\d|99)\\d{6}", [9, 10]],
				["3[2-8]\\d{9,10}", [11, 12]],
				0,
				0,
				["55\\d{8}", [10]],
				["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
			]
		],
		JE: [
			"44",
			"00",
			"1534\\d{6}|(?:[3578]\\d|90)\\d{8}",
			[10],
			0,
			"0",
			0,
			"([0-24-8]\\d{5})$|0|180020",
			"1534$1",
			0,
			0,
			[
				["1534[0-24-8]\\d{5}"],
				["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],
				["80(?:07(?:35|81)|8901)\\d{4}"],
				["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
				["701511\\d{4}"],
				0,
				["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
				["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
				["56\\d{8}"]
			]
		],
		JM: [
			"1",
			"011",
			"(?:[58]\\d\\d|658|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			0,
			0,
			0,
			"658|876"
		],
		JO: [
			"962",
			"00",
			"(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}",
			[8, 9],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[2356]|87"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					["70"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[47]"],
					"0$1"
				]
			],
			"0"
		],
		JP: [
			"81",
			"010",
			"00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
			[
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1-$2-$3",
					["(?:12|57|99)0"],
					"0$1"
				],
				[
					"(\\d{4})(\\d)(\\d{4})",
					"$1-$2-$3",
					[
						"1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])",
						"1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
						"1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["60"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1-$2-$3",
					["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
						"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
						"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1-$2-$3",
					["[14]|[289][2-9]|5[3-9]|7[2-4679]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["800"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2-$3",
					["[25-9]"],
					"0$1"
				]
			],
			"0",
			0,
			"(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0",
			"$1"
		],
		KE: [
			"254",
			"000",
			"(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{5,7})",
					"$1 $2",
					["[24-6]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					["[17]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				]
			],
			"0"
		],
		KG: [
			"996",
			"00",
			"8\\d{9}|[235-9]\\d{8}",
			[9, 10],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					["3(?:1[346]|[24-79])"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[235-79]|88"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d)(\\d{2,3})",
					"$1 $2 $3 $4",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		KH: [
			"855",
			"00[14-9]",
			"1\\d{9}|[1-9]\\d{7,8}",
			[
				8,
				9,
				10
			],
			[[
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				["[1-9]"],
				"0$1"
			], [
				"(\\d{4})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["1"]
			]],
			"0"
		],
		KI: [
			"686",
			"00",
			"(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
			[5, 8],
			0,
			"0"
		],
		KM: [
			"269",
			"00",
			"[3478]\\d{6}",
			[7],
			[[
				"(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3",
				["[3478]"]
			]]
		],
		KN: [
			"1",
			"011",
			"(?:[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-7]\\d{6})$|1",
			"869$1",
			0,
			"869"
		],
		KP: [
			"850",
			"00|99",
			"85\\d{6}|(?:19\\d|[2-7])\\d{7}",
			[8, 10],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[2-7]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"0$1"
				]
			],
			"0"
		],
		KR: [
			"82",
			"00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
			"00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
			[
				5,
				6,
				8,
				9,
				10,
				11,
				12,
				13,
				14
			],
			[
				[
					"(\\d{2})(\\d{3,4})",
					"$1-$2",
					["(?:3[1-3]|[46][1-4]|5[1-5])1"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					["1"]
				],
				[
					"(\\d)(\\d{3,4})(\\d{4})",
					"$1-$2-$3",
					["2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["[36]0|8"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1-$2-$3",
					["[1346]|5[1-5]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2-$3",
					["[57]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{5})(\\d{4})",
					"$1-$2-$3",
					["5"],
					"0$1"
				]
			],
			"0",
			0,
			"0(8(?:[1-46-8]|5\\d\\d))?"
		],
		KW: [
			"965",
			"00",
			"18\\d{5}|(?:[2569]\\d|41)\\d{6}",
			[7, 8],
			[[
				"(\\d{4})(\\d{3,4})",
				"$1 $2",
				["[169]|2(?:[235]|4[1-35-9])|52"]
			], [
				"(\\d{3})(\\d{5})",
				"$1 $2",
				["[245]"]
			]]
		],
		KY: [
			"1",
			"011",
			"(?:345|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"345$1",
			0,
			"345"
		],
		KZ: [
			"7",
			"810",
			"8\\d{13}|[78]\\d{9}",
			[10, 14],
			0,
			"8",
			0,
			0,
			0,
			0,
			"7",
			0,
			"8~10"
		],
		LA: [
			"856",
			"00",
			"[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["2[13]|3[14]|[4-8]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					["3"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["[23]"],
					"0$1"
				]
			],
			"0"
		],
		LB: [
			"961",
			"00",
			"[27-9]\\d{7}|[13-9]\\d{6}",
			[7, 8],
			[[
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"],
				"0$1"
			], [
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[27-9]"]
			]],
			"0"
		],
		LC: [
			"1",
			"011",
			"(?:[58]\\d\\d|758|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-8]\\d{6})$|1",
			"758$1",
			0,
			"758"
		],
		LI: [
			"423",
			"00",
			"[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",
			[7, 9],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["69"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["6"]
				]
			],
			"0",
			0,
			"(1001)|0"
		],
		LK: [
			"94",
			"00",
			"[1-9]\\d{8}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["7"],
				"0$1"
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[1-689]"],
				"0$1"
			]],
			"0"
		],
		LR: [
			"231",
			"00",
			"(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",
			[
				7,
				8,
				9
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["4[67]|[56]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[2-578]"],
					"0$1"
				]
			],
			"0"
		],
		LS: [
			"266",
			"00",
			"(?:[256]\\d\\d|800)\\d{5}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[2568]"]
			]]
		],
		LT: [
			"370",
			"00",
			"(?:[3469]\\d|52|[78]0)\\d{6}",
			[8],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["52[0-7]"],
					"(0-$1)",
					1
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["[7-9]"],
					"0 $1",
					1
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["37|4(?:[15]|6[1-8])"],
					"(0-$1)",
					1
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["[3-6]"],
					"(0-$1)",
					1
				]
			],
			"0",
			0,
			"[08]"
		],
		LU: [
			"352",
			"00",
			"35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{2})(\\d{3})",
					"$1 $2",
					["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["20[2-689]"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
					"$1 $2 $3 $4",
					["20"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
					"$1 $2 $3 $4",
					["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["80[01]|90[015]"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					["20"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["6"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
					"$1 $2 $3 $4 $5",
					["20"]
				]
			],
			0,
			0,
			"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
		],
		LV: [
			"371",
			"00",
			"(?:[268]\\d|78|90)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[2679]|8[01]"]
			]]
		],
		LY: [
			"218",
			"00",
			"[2-9]\\d{8}",
			[9],
			[[
				"(\\d{2})(\\d{7})",
				"$1-$2",
				["[2-9]"],
				"0$1"
			]],
			"0"
		],
		MA: [
			"212",
			"00",
			"[5-8]\\d{8}",
			[9],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1-$2",
					["892"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1-$2",
					["8(?:0[0-7]|9)"],
					"0$1"
				],
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					["[5-8]"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			"[5-8]"
		],
		MC: [
			"377",
			"00",
			"(?:[3489]|[67]\\d)\\d{7}",
			[8, 9],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["4"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[389]"]
				],
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					["[67]"],
					"0$1"
				]
			],
			"0"
		],
		MD: [
			"373",
			"00",
			"(?:[235-7]\\d|[89]0)\\d{6}",
			[8],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["22|3"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["[25-7]"],
					"0$1"
				]
			],
			"0"
		],
		ME: [
			"382",
			"00",
			"(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",
			[8, 9],
			[[
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				["[2-9]"],
				"0$1"
			]],
			"0"
		],
		MF: [
			"590",
			"00",
			"7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",
			[9],
			0,
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"],
				["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],
				["80[0-5]\\d{6}"],
				["8[129]\\d{7}"],
				0,
				0,
				0,
				0,
				["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
			]
		],
		MG: [
			"261",
			"00",
			"[23]\\d{8}",
			[9],
			[[
				"(\\d{2})(\\d{2})(\\d{3})(\\d{2})",
				"$1 $2 $3 $4",
				["[23]"],
				"0$1"
			]],
			"0",
			0,
			"([24-9]\\d{6})$|0",
			"20$1"
		],
		MH: [
			"692",
			"011",
			"329\\d{4}|(?:[256]\\d|45)\\d{5}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1-$2",
				["[2-6]"]
			]],
			"1"
		],
		MK: [
			"389",
			"00",
			"[2-578]\\d{7}",
			[8],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["2|34[47]|4(?:[37]7|5[47]|64)"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[347]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[58]"],
					"0$1"
				]
			],
			"0"
		],
		ML: [
			"223",
			"00",
			"[24-9]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[24-9]"]
			]]
		],
		MM: [
			"95",
			"00",
			"1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["16|2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[12]|452|678|86", "[12]|452|6788|86"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[4-7]|8[1-35]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4,6})",
					"$1 $2 $3",
					["9(?:2[0-4]|[35-9]|4[137-9])"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["92"],
					"0$1"
				],
				[
					"(\\d)(\\d{5})(\\d{4})",
					"$1 $2 $3",
					["9"],
					"0$1"
				]
			],
			"0"
		],
		MN: [
			"976",
			"001",
			"[12]\\d{7,9}|[5-9]\\d{7}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["11|2[16]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[5-9]"]
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					["[12]2[1-3]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5,6})",
					"$1 $2",
					["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],
					"0$1"
				],
				[
					"(\\d{5})(\\d{4,5})",
					"$1 $2",
					["[12]"],
					"0$1"
				]
			],
			"0"
		],
		MO: [
			"853",
			"00",
			"0800\\d{3}|(?:28|[68]\\d)\\d{6}",
			[7, 8],
			[[
				"(\\d{4})(\\d{3})",
				"$1 $2",
				["0"]
			], [
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[268]"]
			]]
		],
		MP: [
			"1",
			"011",
			"[58]\\d{9}|(?:67|90)0\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"670$1",
			0,
			"670"
		],
		MQ: [
			"596",
			"00",
			"7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[5-79]|8(?:0[6-9]|[36])"],
				"0$1"
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"],
				"0$1"
			]],
			"0"
		],
		MR: [
			"222",
			"00",
			"(?:[2-4]\\d\\d|800)\\d{5}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[2-48]"]
			]]
		],
		MS: [
			"1",
			"011",
			"(?:[58]\\d\\d|664|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([34]\\d{6})$|1",
			"664$1",
			0,
			"664"
		],
		MT: [
			"356",
			"00",
			"3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[2357-9]"]
			]]
		],
		MU: [
			"230",
			"0(?:0|[24-7]0|3[03])",
			"(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",
			[
				7,
				8,
				10
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[2-46]|8[013]"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[57]"]
				],
				[
					"(\\d{5})(\\d{5})",
					"$1 $2",
					["8"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"020"
		],
		MV: [
			"960",
			"0(?:0|19)",
			"(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
			[7, 10],
			[[
				"(\\d{3})(\\d{4})",
				"$1-$2",
				["[34679]"]
			], [
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[89]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		MW: [
			"265",
			"00",
			"(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",
			[7, 9],
			[[
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["1[2-9]"],
				"0$1"
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[1-37-9]"],
				"0$1"
			]],
			"0"
		],
		MX: [
			"52",
			"0[09]",
			"[2-9]\\d{9}",
			[10],
			[[
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				["33|5[56]|81"]
			], [
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[2-9]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		MY: [
			"60",
			"00",
			"1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1-$2 $3",
					["[4-79]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1-$2 $3",
					["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1-$2 $3",
					["3"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{4})",
					"$1-$2-$3-$4",
					["1(?:[367]|80)"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2 $3",
					["15"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2 $3",
					["1"],
					"0$1"
				]
			],
			"0"
		],
		MZ: [
			"258",
			"00",
			"(?:2|8\\d)\\d{7}",
			[8, 9],
			[[
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				["2|8[2-9]"]
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["8"]
			]]
		],
		NA: [
			"264",
			"00",
			"[68]\\d{7,8}",
			[8, 9],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["88"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["6"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["87"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		NC: [
			"687",
			"00",
			"(?:050|[2-57-9]\\d\\d)\\d{3}",
			[6],
			[[
				"(\\d{2})(\\d{2})(\\d{2})",
				"$1.$2.$3",
				["[02-57-9]"]
			]]
		],
		NE: [
			"227",
			"00",
			"[027-9]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["08"]
			], [
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[089]|2[013]|7[0467]"]
			]]
		],
		NF: [
			"672",
			"00",
			"[13]\\d{5}",
			[6],
			[[
				"(\\d{2})(\\d{4})",
				"$1 $2",
				["1[0-3]"]
			], [
				"(\\d)(\\d{5})",
				"$1 $2",
				["[13]"]
			]],
			0,
			0,
			"([0-258]\\d{4})$",
			"3$1"
		],
		NG: [
			"234",
			"009",
			"(?:20|9\\d)\\d{8}|[78]\\d{9,13}",
			[
				10,
				11,
				12,
				13,
				14
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[7-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["20[129]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4,5})",
					"$1 $2 $3",
					["[78]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})(\\d{5,6})",
					"$1 $2 $3",
					["[78]"],
					"0$1"
				]
			],
			"0"
		],
		NI: [
			"505",
			"00",
			"(?:1800|[25-8]\\d{3})\\d{4}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[125-8]"]
			]]
		],
		NL: [
			"31",
			"00",
			"(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{3})(\\d{4,7})",
					"$1 $2",
					["[89]0"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					["66"],
					"0$1"
				],
				[
					"(\\d)(\\d{8})",
					"$1 $2",
					["6"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[1-578]|91"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{5})",
					"$1 $2 $3",
					["9"],
					"0$1"
				]
			],
			"0"
		],
		NO: [
			"47",
			"00",
			"(?:0|[2-9]\\d{3})\\d{4}",
			[5, 8],
			[[
				"(\\d{3})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				["8"]
			], [
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[2-79]"]
			]],
			0,
			0,
			0,
			0,
			0,
			"[02-689]|7[0-8]"
		],
		NP: [
			"977",
			"00",
			"(?:1\\d|9)\\d{9}|[1-9]\\d{7}",
			[
				8,
				10,
				11
			],
			[
				[
					"(\\d)(\\d{7})",
					"$1-$2",
					["1[2-6]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1-$2",
					["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1-$2",
					["9"]
				]
			],
			"0"
		],
		NR: [
			"674",
			"00",
			"(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[24-9]"]
			]]
		],
		NU: [
			"683",
			"00",
			"(?:[4-7]|888\\d)\\d{3}",
			[4, 7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["8"]
			]]
		],
		NZ: [
			"64",
			"0(?:0|161)",
			"[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{3,8})",
					"$1 $2",
					["8[1-79]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					["50[036-8]|8|90", "50(?:[0367]|88)|8|90"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["24|[346]|7[2-57-9]|9[2-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["2(?:10|74)|[589]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["1|2[028]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,5})",
					"$1 $2 $3",
					["2(?:[169]|7[0-35-9])|7"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		OM: [
			"968",
			"00",
			"(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",
			[
				7,
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{4,6})",
					"$1 $2",
					["[58]"]
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["2"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[179]"]
				]
			]
		],
		PA: [
			"507",
			"00",
			"(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
			[
				7,
				8,
				10,
				11
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					["[1-57-9]"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					["[68]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"]
				]
			]
		],
		PE: [
			"51",
			"00|19(?:1[124]|77|90)00",
			"(?:[14-8]|9\\d)\\d{7}",
			[8, 9],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["80"],
					"(0$1)"
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					["1"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["[4-8]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["9"]
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00",
			" Anexo "
		],
		PF: [
			"689",
			"00",
			"4\\d{5}(?:\\d{2})?|8\\d{7,8}",
			[
				6,
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					["44"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["4|8[7-9]"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["8"]
				]
			]
		],
		PG: [
			"675",
			"00|140[1-3]",
			"(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
			[7, 8],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["18|[2-69]|85"]
			], [
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[78]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		PH: [
			"63",
			"00",
			"(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",
			[
				6,
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d)(\\d{5})",
					"$1 $2",
					["2"],
					"(0$1)"
				],
				[
					"(\\d{4})(\\d{4,6})",
					"$1 $2",
					["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],
					"(0$1)"
				],
				[
					"(\\d{5})(\\d{4})",
					"$1 $2",
					["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"],
					"(0$1)"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["2"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[3-7]|8[2-8]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"]
				],
				[
					"(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					["1"]
				]
			],
			"0"
		],
		PK: [
			"92",
			"00",
			"122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
			[
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{2,7})",
					"$1 $2 $3",
					["[89]0"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					["1"]
				],
				[
					"(\\d{3})(\\d{6,7})",
					"$1 $2",
					["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{7,8})",
					"$1 $2",
					["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],
					"(0$1)"
				],
				[
					"(\\d{5})(\\d{5})",
					"$1 $2",
					["58"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					["3"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["[24-9]"],
					"(0$1)"
				]
			],
			"0"
		],
		PL: [
			"48",
			"00",
			"(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{5})",
					"$1",
					["19"]
				],
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					["11|20|64"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					["64"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["1[2-8]|[2-7]|8[1-79]|9[145]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["8"]
				]
			]
		],
		PM: [
			"508",
			"00",
			"[78]\\d{8}|[2-9]\\d{5}",
			[6, 9],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					["[2-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["7"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		PR: [
			"1",
			"011",
			"(?:[589]\\d\\d|787)\\d{7}",
			[10],
			0,
			"1",
			0,
			0,
			0,
			0,
			"787|939"
		],
		PS: [
			"970",
			"00",
			"[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[2489]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["5"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1"]
				]
			],
			"0"
		],
		PT: [
			"351",
			"00",
			"1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["2[12]"]
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["16|[236-9]"]
			]]
		],
		PW: [
			"680",
			"01[12]",
			"(?:[24-8]\\d\\d|345|900)\\d{4}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[2-9]"]
			]]
		],
		PY: [
			"595",
			"00",
			"[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}",
			[
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{3})(\\d{3,6})",
					"$1 $2",
					["[2-9]0"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["3[289]|4[246-8]|61|7[1-3]|8[1-36]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{4,5})",
					"$1 $2",
					["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["87"]
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					["9(?:[5-79]|8[1-7])"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[2-8]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["9"]
				]
			],
			"0"
		],
		QA: [
			"974",
			"00",
			"800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",
			[
				7,
				8,
				9,
				11
			],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["2[136]|8"]
			], [
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[3-7]"]
			]]
		],
		RE: [
			"262",
			"00",
			"709\\d{6}|(?:26|[689]\\d)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[26-9]"],
				"0$1"
			]],
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"],
				["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],
				["80\\d{7}"],
				["89[1-37-9]\\d{6}"],
				0,
				0,
				0,
				0,
				["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],
				["8(?:1[019]|2[0156]|84|90)\\d{6}"]
			]
		],
		RO: [
			"40",
			"00",
			"(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",
			[6, 9],
			[
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					["2[3-6]", "2[3-6]\\d9"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					["219|31"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[23]1"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[236-9]"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			" int "
		],
		RS: [
			"381",
			"00",
			"38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",
			[
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[[
				"(\\d{3})(\\d{3,9})",
				"$1 $2",
				["(?:2[389]|39)0|[7-9]"],
				"0$1"
			], [
				"(\\d{2})(\\d{5,10})",
				"$1 $2",
				["[1-36]"],
				"0$1"
			]],
			"0"
		],
		RU: [
			"7",
			"810",
			"8\\d{13}|[347-9]\\d{9}",
			[10, 14],
			[
				[
					"(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"7(?:1[0-8]|2[1-9])",
						"7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))",
						"7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"
					],
					"8 ($1)",
					1
				],
				[
					"(\\d{5})(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"7(?:1[0-68]|2[1-9])",
						"7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
						"7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"
					],
					"8 ($1)",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["7"],
					"8 ($1)",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					["[349]|8(?:[02-7]|1[1-8])"],
					"8 ($1)",
					1
				],
				[
					"(\\d{4})(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["8"],
					"8 ($1)"
				]
			],
			"8",
			0,
			0,
			0,
			0,
			"[3489]",
			0,
			"8~10"
		],
		RW: [
			"250",
			"00",
			"(?:06|[27]\\d\\d|[89]00)\\d{6}",
			[8, 9],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["0"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["2"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[7-9]"],
					"0$1"
				]
			],
			"0"
		],
		SA: [
			"966",
			"00",
			"(?:[15]\\d|800|92)\\d{7}",
			[9, 10],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					["9"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["5"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"]
				]
			],
			"0"
		],
		SB: [
			"677",
			"0[01]",
			"[6-9]\\d{6}|[1-6]\\d{4}",
			[5, 7],
			[[
				"(\\d{2})(\\d{5})",
				"$1 $2",
				["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]
			]]
		],
		SC: [
			"248",
			"010|0[0-2]",
			"(?:[2489]\\d|64)\\d{5}",
			[7],
			[[
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[246]|9[57]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		SD: [
			"249",
			"00",
			"[19]\\d{8}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[19]"],
				"0$1"
			]],
			"0"
		],
		SE: [
			"46",
			"00",
			"(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
			[
				6,
				7,
				8,
				9,
				10,
				12
			],
			[
				[
					"(\\d{2})(\\d{2,3})(\\d{2})",
					"$1-$2 $3",
					["20"],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					["9(?:00|39|44|9)"],
					"0$1",
					0,
					"$1 $2"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})",
					"$1-$2 $3",
					["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					["8"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2,3})(\\d{2})",
					"$1-$2 $3",
					["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d{3})(\\d{2,3})(\\d{3})",
					"$1-$2 $3",
					["9(?:00|39|44)"],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					["10|7"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{2})",
					"$1-$2 $3 $4",
					["8"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
					"$1-$2 $3 $4",
					["9"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4 $5",
					["[26]"],
					"0$1",
					0,
					"$1 $2 $3 $4 $5"
				]
			],
			"0"
		],
		SG: [
			"65",
			"0[0-3]\\d",
			"(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",
			[
				8,
				10,
				11
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[369]|8(?:0[1-9]|[1-9])"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"]
				],
				[
					"(\\d{4})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					["7"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"]
				]
			]
		],
		SH: [
			"290",
			"00",
			"(?:[256]\\d|8)\\d{3}",
			[4, 5],
			0,
			0,
			0,
			0,
			0,
			0,
			"[256]"
		],
		SI: [
			"386",
			"00|10(?:22|66|88|99)",
			"[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",
			[
				5,
				6,
				7,
				8
			],
			[
				[
					"(\\d{2})(\\d{3,6})",
					"$1 $2",
					["8[09]|9"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["59|8"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[37][01]|4[013]|51|6"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[1-57]"],
					"(0$1)"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		SJ: [
			"47",
			"00",
			"0\\d{4}|(?:[489]\\d|79)\\d{6}",
			[5, 8],
			0,
			0,
			0,
			0,
			0,
			0,
			"79"
		],
		SK: [
			"421",
			"00",
			"[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
			[
				6,
				7,
				9
			],
			[
				[
					"(\\d)(\\d{2})(\\d{3,4})",
					"$1 $2 $3",
					["21"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					["[3-5][1-8]1", "[3-5][1-8]1[67]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3 $4",
					["2"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[689]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[3-5]"],
					"0$1"
				]
			],
			"0"
		],
		SL: [
			"232",
			"00",
			"(?:[237-9]\\d|66)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{6})",
				"$1 $2",
				["[236-9]"],
				"(0$1)"
			]],
			"0"
		],
		SM: [
			"378",
			"00",
			"(?:0549|[5-7]\\d)\\d{6}",
			[8, 10],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[5-7]"]
			], [
				"(\\d{4})(\\d{6})",
				"$1 $2",
				["0"]
			]],
			0,
			0,
			"([89]\\d{5})$",
			"0549$1"
		],
		SN: [
			"221",
			"00",
			"(?:[378]\\d|93)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"]
			], [
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[379]"]
			]]
		],
		SO: [
			"252",
			"00",
			"[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
			[
				6,
				7,
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					["8[125]"]
				],
				[
					"(\\d{6})",
					"$1",
					["[134]"]
				],
				[
					"(\\d)(\\d{6})",
					"$1 $2",
					["[15]|2[0-79]|3[0-46-8]|4[0-7]"]
				],
				[
					"(\\d{2})(\\d{5,7})",
					"$1 $2",
					["1|28|9[2-9]"]
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					["[267]|904"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[346-9]"]
				]
			],
			"0"
		],
		SR: [
			"597",
			"00",
			"(?:[2-5]|[6-9]\\d)\\d{5}",
			[6, 7],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1-$2-$3",
					["56"]
				],
				[
					"(\\d{3})(\\d{3})",
					"$1-$2",
					["[2-5]"]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					["[6-9]"]
				]
			]
		],
		SS: [
			"211",
			"00",
			"[19]\\d{8}",
			[9],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[19]"],
				"0$1"
			]],
			"0"
		],
		ST: [
			"239",
			"00",
			"(?:22|9\\d)\\d{5}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[29]"]
			]]
		],
		SV: [
			"503",
			"00",
			"[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",
			[
				7,
				8,
				11
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[89]"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[25-7]"]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[89]"]
				]
			]
		],
		SX: [
			"1",
			"011",
			"7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"(5\\d{6})$|1",
			"721$1",
			0,
			"721"
		],
		SY: [
			"963",
			"00",
			"[1-359]\\d{8}|[1-5]\\d{7}",
			[8, 9],
			[[
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				["[1-4]|5[1-3]"],
				"0$1",
				1
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[59]"],
				"0$1",
				1
			]],
			"0"
		],
		SZ: [
			"268",
			"00",
			"0800\\d{4}|(?:[237]\\d|900)\\d{6}",
			[8, 9],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[0237]"]
			], [
				"(\\d{5})(\\d{4})",
				"$1 $2",
				["9"]
			]]
		],
		TA: [
			"290",
			"00",
			"8\\d{3}",
			[4],
			0,
			0,
			0,
			0,
			0,
			0,
			"8"
		],
		TC: [
			"1",
			"011",
			"(?:[58]\\d\\d|649|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-479]\\d{6})$|1",
			"649$1",
			0,
			"649"
		],
		TD: [
			"235",
			"00|16",
			"(?:22|[3689]\\d|77)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[236-9]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		TG: [
			"228",
			"00",
			"[279]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[279]"]
			]]
		],
		TH: [
			"66",
			"00[1-9]",
			"(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",
			[
				8,
				9,
				10,
				13
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[13-9]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1"]
				]
			],
			"0"
		],
		TJ: [
			"992",
			"810",
			"(?:[0-57-9]\\d|66)\\d{7}",
			[9],
			[
				[
					"(\\d{6})(\\d)(\\d{2})",
					"$1 $2 $3",
					["331", "3317"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["44[02-479]|[34]7"]
				],
				[
					"(\\d{4})(\\d)(\\d{4})",
					"$1 $2 $3",
					["3(?:[1245]|3[12])"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["\\d"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"8~10"
		],
		TK: [
			"690",
			"00",
			"[2-47]\\d{3,6}",
			[
				4,
				5,
				6,
				7
			]
		],
		TL: [
			"670",
			"00",
			"7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",
			[7, 8],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[2-489]|70"]
			], [
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["7"]
			]]
		],
		TM: [
			"993",
			"810",
			"[1-7]\\d{7}",
			[8],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					["12"],
					"(8 $1)"
				],
				[
					"(\\d{3})(\\d)(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					["[1-5]"],
					"(8 $1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["[67]"],
					"8 $1"
				]
			],
			"8",
			0,
			0,
			0,
			0,
			0,
			0,
			"8~10"
		],
		TN: [
			"216",
			"00",
			"[2-57-9]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[2-57-9]"]
			]]
		],
		TO: [
			"676",
			"00",
			"(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",
			[5, 7],
			[
				[
					"(\\d{2})(\\d{3})",
					"$1-$2",
					["[2-4]|50|6[09]|7[0-24-69]|8[05]"]
				],
				[
					"(\\d{4})(\\d{3})",
					"$1 $2",
					["0"]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[5-9]"]
				]
			]
		],
		TR: [
			"90",
			"00",
			"4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",
			[
				7,
				10,
				12,
				13
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["512|8[01589]|90"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["5[0-79]"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[24][1-8]|3[1-9]"],
					"(0$1)",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{6,7})",
					"$1 $2 $3",
					["80"],
					"0$1",
					1
				]
			],
			"0"
		],
		TT: [
			"1",
			"011",
			"(?:[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-46-8]\\d{6})$|1",
			"868$1",
			0,
			"868"
		],
		TV: [
			"688",
			"00",
			"(?:2|7\\d\\d|90)\\d{4}",
			[
				5,
				6,
				7
			],
			[
				[
					"(\\d{2})(\\d{3})",
					"$1 $2",
					["2"]
				],
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					["90"]
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["7"]
				]
			]
		],
		TW: [
			"886",
			"0(?:0[25-79]|19)",
			"[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
			[
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{2})(\\d)(\\d{4})",
					"$1 $2 $3",
					["202"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["826"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["83"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["82"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[25]0|37|49|8[09]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["[23568]|4(?:0[02-48]|[1-478])|7[1-9]", "[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[49]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4,5})",
					"$1 $2 $3",
					["7"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"#"
		],
		TZ: [
			"255",
			"00[056]",
			"(?:[25-8]\\d|41|90)\\d{7}",
			[9],
			[
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[24]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					["5"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[67]"],
					"0$1"
				]
			],
			"0"
		],
		UA: [
			"380",
			"00",
			"[89]\\d{9}|[3-9]\\d{8}",
			[9, 10],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[3-7]|89|9[1-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"0~0"
		],
		UG: [
			"256",
			"00[057]",
			"800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",
			[9],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					["202", "2024"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					["[27-9]|4(?:6[45]|[7-9])"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					["[34]"],
					"0$1"
				]
			],
			"0"
		],
		US: [
			"1",
			"011",
			"[2-9]\\d{9}|3\\d{6}",
			[10],
			[[
				"(\\d{3})(\\d{4})",
				"$1-$2",
				["310"],
				0,
				1
			], [
				"(\\d{3})(\\d{3})(\\d{4})",
				"($1) $2-$3",
				["[2-9]"],
				0,
				1,
				"$1-$2-$3"
			]],
			"1",
			0,
			0,
			0,
			0,
			0,
			[
				["(?:472[2-47-9]|983[2-57-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[02469]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"],
				[""],
				["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
				["900[2-9]\\d{6}"],
				["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]
			]
		],
		UY: [
			"598",
			"0(?:0|1[3-9]\\d)",
			"0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d{4,5})",
					"$1",
					["21"]
				],
				[
					"(\\d{3})(\\d{3,4})",
					"$1 $2",
					["0"]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[49]0|8"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["9"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[124]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					["0"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})",
					"$1 $2 $3 $4",
					["0"]
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00",
			" int. "
		],
		UZ: [
			"998",
			"00",
			"(?:20|33|[5-9]\\d)\\d{7}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[235-9]"]
			]]
		],
		VA: [
			"39",
			"00",
			"0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
			[
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			0,
			0,
			0,
			0,
			0,
			0,
			"06698"
		],
		VC: [
			"1",
			"011",
			"(?:[58]\\d\\d|784|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-7]\\d{6})$|1",
			"784$1",
			0,
			"784"
		],
		VE: [
			"58",
			"00",
			"[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",
			[10],
			[[
				"(\\d{3})(\\d{7})",
				"$1-$2",
				["[24-689]"],
				"0$1"
			]],
			"0"
		],
		VG: [
			"1",
			"011",
			"(?:284|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-578]\\d{6})$|1",
			"284$1",
			0,
			"284"
		],
		VI: [
			"1",
			"011",
			"[58]\\d{9}|(?:34|90)0\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"340$1",
			0,
			"340"
		],
		VN: [
			"84",
			"00",
			"[12]\\d{9}|[135-9]\\d{8}|[16]\\d{6,7}|7\\d{6}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{4})(\\d{4,6})",
					"$1 $2",
					["1(?:2[02]|[89])"],
					0,
					1
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["1[26]|6"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[357-9]"],
					"0$1",
					1
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["2[48]"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					["2"],
					"0$1",
					1
				]
			],
			"0"
		],
		VU: [
			"678",
			"00",
			"[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",
			[5, 7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[57-9]"]
			]]
		],
		WF: [
			"681",
			"00",
			"(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",
			[6, 9],
			[[
				"(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3",
				["[47-9]"]
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"]
			]]
		],
		WS: [
			"685",
			"0",
			"(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
			[
				5,
				6,
				7,
				10
			],
			[
				[
					"(\\d{5})",
					"$1",
					["[2-5]|6[1-9]"]
				],
				[
					"(\\d{3})(\\d{3,7})",
					"$1 $2",
					["[68]"]
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["7"]
				]
			]
		],
		XK: [
			"383",
			"00",
			"2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",
			[
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[2-4]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["2|39"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7,10})",
					"$1 $2",
					["3"],
					"0$1"
				]
			],
			"0"
		],
		YE: [
			"967",
			"00",
			"(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
			[
				7,
				8,
				9
			],
			[[
				"(\\d)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				["[1-6]|7(?:[24-6]|8[0-7])"],
				"0$1"
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["7"],
				"0$1"
			]],
			"0"
		],
		YT: [
			"262",
			"00",
			"(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}",
			[9],
			0,
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"],
				["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],
				["80\\d{7}"],
				0,
				0,
				0,
				0,
				0,
				["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]
			]
		],
		ZA: [
			"27",
			"00",
			"[1-79]\\d{8}|8\\d{4,9}",
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{3,4})",
					"$1 $2",
					["8[1-4]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,3})",
					"$1 $2 $3",
					["8[1-4]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["860"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[1-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		ZM: [
			"260",
			"00",
			"800\\d{6}|(?:21|[579]\\d|63)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[28]"],
				"0$1"
			], [
				"(\\d{2})(\\d{7})",
				"$1 $2",
				["[579]"],
				"0$1"
			]],
			"0"
		],
		ZW: [
			"263",
			"00",
			"2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{3})(\\d{3,5})",
					"$1 $2",
					["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					["[49]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["80"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["7"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{6})",
					"$1 $2",
					["8"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,5})",
					"$1 $2",
					["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["29[013-9]|39|54"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3,5})",
					"$1 $2",
					["(?:25|54)8", "258|5483"],
					"0$1"
				]
			],
			"0"
		]
	},
	nonGeographic: {
		800: [
			"800",
			0,
			"(?:00|[1-9]\\d)\\d{6}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["\\d"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				["(?:00|[1-9]\\d)\\d{6}"]
			]
		],
		808: [
			"808",
			0,
			"[1-9]\\d{7}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[1-9]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				["[1-9]\\d{7}"]
			]
		],
		870: [
			"870",
			0,
			"7\\d{11}|[235-7]\\d{8}",
			[9, 12],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[235-7]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"],
				0,
				0,
				0,
				0,
				0,
				0,
				["2\\d{8}", [9]]
			]
		],
		878: [
			"878",
			0,
			"10\\d{10}",
			[12],
			[[
				"(\\d{2})(\\d{5})(\\d{5})",
				"$1 $2 $3",
				["1"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				["10\\d{10}"]
			]
		],
		881: [
			"881",
			0,
			"6\\d{9}|[0-36-9]\\d{8}",
			[9, 10],
			[[
				"(\\d)(\\d{3})(\\d{5})",
				"$1 $2 $3",
				["[0-37-9]"]
			], [
				"(\\d)(\\d{3})(\\d{5,6})",
				"$1 $2 $3",
				["6"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[0, ["6\\d{9}|[0-36-9]\\d{8}"]]
		],
		882: [
			"882",
			0,
			"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",
			[
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["16|342"]
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["49"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["1[36]|9"]
				],
				[
					"(\\d{2})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					["3[23]"]
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["16"]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["10|23|3(?:[15]|4[57])|4|5[12]"]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["34"]
				],
				[
					"(\\d{2})(\\d{4,5})(\\d{5})",
					"$1 $2 $3",
					["[1-35]"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}", [
					7,
					8,
					9,
					10,
					12
				]],
				0,
				0,
				0,
				["348[57]\\d{7}", [11]],
				0,
				0,
				["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]
			]
		],
		883: [
			"883",
			0,
			"(?:[1-4]\\d|51)\\d{6,10}",
			[
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{2,8})",
					"$1 $2 $3",
					["[14]|2[24-689]|3[02-689]|51[24-9]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["510"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["21"]
				],
				[
					"(\\d{4})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["51[13]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["[235]"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]
			]
		],
		888: [
			"888",
			0,
			"\\d{11}",
			[11],
			[["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				["\\d{11}"]
			]
		],
		979: [
			"979",
			0,
			"[1359]\\d{8}",
			[9],
			[[
				"(\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				["[1359]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				["[1359]\\d{8}"]
			]
		]
	}
};
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/min/exports/withMetadataArgument.js
function Ir(e, t) {
	var n = Array.prototype.slice.call(t);
	return n.push(Fr), e.apply(this, n);
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/tools/semver-compare.js
function Lr(e, t) {
	e = e.split("-"), t = t.split("-");
	for (var n = e[0].split("."), r = t[0].split("."), i = 0; i < 3; i++) {
		var a = Number(n[i]), o = Number(r[i]);
		if (a > o) return 1;
		if (o > a) return -1;
		if (!isNaN(a) && isNaN(o)) return 1;
		if (isNaN(a) && !isNaN(o)) return -1;
	}
	return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0;
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/isObject.js
var Rr = {}.constructor;
function zr(e) {
	return e != null && e.constructor === Rr;
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/isCallingCode.js
var Br = /^\d+$/;
function Vr(e) {
	return Br.test(e);
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/metadata.js
function Hr(e) {
	"@babel/helpers - typeof";
	return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Hr(e);
}
function Ur(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Wr(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Kr(r.key), r);
	}
}
function Gr(e, t, n) {
	return t && Wr(e.prototype, t), n && Wr(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Kr(e) {
	var t = qr(e, "string");
	return Hr(t) == "symbol" ? t : t + "";
}
function qr(e, t) {
	if (Hr(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Hr(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Jr = "1.2.0", Yr = "1.7.35", Xr = " ext. ", q = /*#__PURE__*/ function() {
	function e(t) {
		Ur(this, e), ni(t), this.metadata = t, oi.call(this, t);
	}
	return Gr(e, [
		{
			key: "getCountries",
			value: function() {
				return Object.keys(this.metadata.countries).filter(function(e) {
					return e !== "001";
				});
			}
		},
		{
			key: "getCountryMetadata",
			value: function(e) {
				return this.metadata.countries[e];
			}
		},
		{
			key: "nonGeographic",
			value: function() {
				if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical;
			}
		},
		{
			key: "hasCountry",
			value: function(e) {
				return this.getCountryMetadata(e) !== void 0;
			}
		},
		{
			key: "hasCallingCode",
			value: function(e) {
				if (this.getCountryCodesForCallingCode(e)) return !0;
				if (this.nonGeographic()) {
					if (this.nonGeographic()[e]) return !0;
				} else {
					var t = this.countryCallingCodes()[e];
					if (t && t.length === 1 && t[0] === "001") return !0;
				}
			}
		},
		{
			key: "isNonGeographicCallingCode",
			value: function(e) {
				return this.nonGeographic() ? !!this.nonGeographic()[e] : !this.getCountryCodesForCallingCode(e);
			}
		},
		{
			key: "country",
			value: function(e) {
				return this.selectNumberingPlan(e);
			}
		},
		{
			key: "selectNumberingPlan",
			value: function(e, t) {
				var n, r;
				if (e && (Vr(e) ? r = e : n = e), t && (r = t), n && n !== "001") {
					var i = this.getCountryMetadata(n);
					if (!i) throw Error(`Unknown country: ${n}`);
					this.numberingPlan = new Zr(i, this);
				} else if (r) {
					if (!this.hasCallingCode(r)) throw Error(`Unknown calling code: ${r}`);
					this.numberingPlan = new Zr(this.getNumberingPlanMetadata(r), this);
				} else this.numberingPlan = void 0;
				return this;
			}
		},
		{
			key: "getCountryCodesForCallingCode",
			value: function(e) {
				var t = this.countryCallingCodes()[e];
				if (t) return t.length === 1 && t[0].length === 3 ? void 0 : t;
			}
		},
		{
			key: "getCountryCodeForCallingCode",
			value: function(e) {
				var t = this.getCountryCodesForCallingCode(e);
				if (t) return t[0];
			}
		},
		{
			key: "getNumberingPlanMetadata",
			value: function(e) {
				var t = this.getCountryCodeForCallingCode(e);
				if (t) return this.getCountryMetadata(t);
				if (this.nonGeographic()) {
					var n = this.nonGeographic()[e];
					if (n) return n;
				} else {
					var r = this.countryCallingCodes()[e];
					if (r && r.length === 1 && r[0] === "001") return this.metadata.countries["001"];
				}
			}
		},
		{
			key: "countryCallingCode",
			value: function() {
				return this.numberingPlan.callingCode();
			}
		},
		{
			key: "IDDPrefix",
			value: function() {
				return this.numberingPlan.IDDPrefix();
			}
		},
		{
			key: "defaultIDDPrefix",
			value: function() {
				return this.numberingPlan.defaultIDDPrefix();
			}
		},
		{
			key: "nationalNumberPattern",
			value: function() {
				return this.numberingPlan.nationalNumberPattern();
			}
		},
		{
			key: "possibleLengths",
			value: function() {
				return this.numberingPlan.possibleLengths();
			}
		},
		{
			key: "formats",
			value: function() {
				return this.numberingPlan.formats();
			}
		},
		{
			key: "nationalPrefixForParsing",
			value: function() {
				return this.numberingPlan.nationalPrefixForParsing();
			}
		},
		{
			key: "nationalPrefixTransformRule",
			value: function() {
				return this.numberingPlan.nationalPrefixTransformRule();
			}
		},
		{
			key: "leadingDigits",
			value: function() {
				return this.numberingPlan.leadingDigits();
			}
		},
		{
			key: "hasTypes",
			value: function() {
				return this.numberingPlan.hasTypes();
			}
		},
		{
			key: "type",
			value: function(e) {
				return this.numberingPlan.type(e);
			}
		},
		{
			key: "ext",
			value: function() {
				return this.numberingPlan.ext();
			}
		},
		{
			key: "countryCallingCodes",
			value: function() {
				return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
			}
		},
		{
			key: "chooseCountryByCountryCallingCode",
			value: function(e) {
				return this.selectNumberingPlan(e);
			}
		},
		{
			key: "hasSelectedNumberingPlan",
			value: function() {
				return this.numberingPlan !== void 0;
			}
		}
	]);
}(), Zr = /*#__PURE__*/ function() {
	function e(t, n) {
		Ur(this, e), this.globalMetadataObject = n, this.metadata = t, oi.call(this, n.metadata);
	}
	return Gr(e, [
		{
			key: "callingCode",
			value: function() {
				return this.metadata[0];
			}
		},
		{
			key: "_getDefaultCountryMetadataForThisCallingCode",
			value: function() {
				return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
			}
		},
		{
			key: "getDefaultCountryMetadataForRegion",
			value: function() {
				return this._getDefaultCountryMetadataForThisCallingCode();
			}
		},
		{
			key: "IDDPrefix",
			value: function() {
				if (!(this.v1 || this.v2)) return this.metadata[1];
			}
		},
		{
			key: "defaultIDDPrefix",
			value: function() {
				if (!(this.v1 || this.v2)) return this.metadata[12];
			}
		},
		{
			key: "nationalNumberPattern",
			value: function() {
				return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
			}
		},
		{
			key: "possibleLengths",
			value: function() {
				if (!this.v1) return this.metadata[this.v2 ? 2 : 3];
			}
		},
		{
			key: "_getFormats",
			value: function(e) {
				return e[this.v1 ? 2 : this.v2 ? 3 : 4];
			}
		},
		{
			key: "formats",
			value: function() {
				var e = this;
				return (this._getFormats(this.metadata) || this._getFormats(this._getDefaultCountryMetadataForThisCallingCode()) || []).map(function(t) {
					return new Qr(t, e);
				});
			}
		},
		{
			key: "nationalPrefix",
			value: function() {
				return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
			}
		},
		{
			key: "_getNationalPrefixFormattingRule",
			value: function(e) {
				return e[this.v1 ? 4 : this.v2 ? 5 : 6];
			}
		},
		{
			key: "nationalPrefixFormattingRule",
			value: function() {
				return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this._getDefaultCountryMetadataForThisCallingCode());
			}
		},
		{
			key: "_nationalPrefixForParsing",
			value: function() {
				return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
			}
		},
		{
			key: "nationalPrefixForParsing",
			value: function() {
				return this._nationalPrefixForParsing() || this.nationalPrefix();
			}
		},
		{
			key: "nationalPrefixTransformRule",
			value: function() {
				return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
			}
		},
		{
			key: "_getNationalPrefixIsOptionalWhenFormatting",
			value: function() {
				return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
			}
		},
		{
			key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
			value: function() {
				return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this._getDefaultCountryMetadataForThisCallingCode());
			}
		},
		{
			key: "leadingDigits",
			value: function() {
				return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
			}
		},
		{
			key: "types",
			value: function() {
				return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
			}
		},
		{
			key: "hasTypes",
			value: function() {
				return this.types() && this.types().length === 0 ? !1 : !!this.types();
			}
		},
		{
			key: "type",
			value: function(e) {
				if (this.hasTypes() && ti(this.types(), e)) return new ei(ti(this.types(), e), this);
			}
		},
		{
			key: "ext",
			value: function() {
				return this.v1 || this.v2 ? Xr : this.metadata[13] || Xr;
			}
		}
	]);
}(), Qr = /*#__PURE__*/ function() {
	function e(t, n) {
		Ur(this, e), this._format = t, this.metadata = n;
	}
	return Gr(e, [
		{
			key: "pattern",
			value: function() {
				return this._format[0];
			}
		},
		{
			key: "format",
			value: function() {
				return this._format[1];
			}
		},
		{
			key: "leadingDigitsPatterns",
			value: function() {
				return this._format[2] || [];
			}
		},
		{
			key: "nationalPrefixFormattingRule",
			value: function() {
				return this._format[3] || this.metadata.nationalPrefixFormattingRule();
			}
		},
		{
			key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
			value: function() {
				return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
			}
		},
		{
			key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
			value: function() {
				return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
			}
		},
		{
			key: "usesNationalPrefix",
			value: function() {
				return !!(this.nationalPrefixFormattingRule() && !$r.test(this.nationalPrefixFormattingRule()));
			}
		},
		{
			key: "internationalFormat",
			value: function() {
				return this._format[5] || this.format();
			}
		}
	]);
}(), $r = /^\(?\$1\)?$/, ei = /*#__PURE__*/ function() {
	function e(t, n) {
		Ur(this, e), this.type = t, this.metadata = n;
	}
	return Gr(e, [{
		key: "pattern",
		value: function() {
			return this.metadata.v1 ? this.type : this.type[0];
		}
	}, {
		key: "possibleLengths",
		value: function() {
			if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths();
		}
	}]);
}();
function ti(e, t) {
	switch (t) {
		case "FIXED_LINE": return e[0];
		case "MOBILE": return e[1];
		case "TOLL_FREE": return e[2];
		case "PREMIUM_RATE": return e[3];
		case "PERSONAL_NUMBER": return e[4];
		case "VOICEMAIL": return e[5];
		case "UAN": return e[6];
		case "PAGER": return e[7];
		case "VOIP": return e[8];
		case "SHARED_COST": return e[9];
	}
}
function ni(e) {
	if (!e) throw Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
	if (!zr(e) || !zr(e.countries)) throw Error(`[libphonenumber-js] \`metadata\` argument was passed but it's not a valid metadata. Must be an object having \`.countries\` child object property. Got ${zr(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + ri(e) + ": " + e}.`);
}
/* istanbul ignore next */
var ri = function(e) {
	return Hr(e);
};
function ii(e, t) {
	var n = new q(t);
	if (n.hasCountry(e)) return n.selectNumberingPlan(e).countryCallingCode();
	throw Error(`Unknown country: ${e}`);
}
function ai(e, t) {
	return t.countries.hasOwnProperty(e);
}
function oi(e) {
	var t = e.version;
	typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? Lr(t, Jr) === -1 ? this.v2 = !0 : Lr(t, Yr) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
function si(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = ci(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ci(e, t) {
	if (e) {
		if (typeof e == "string") return li(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? li(e, t) : void 0;
	}
}
function li(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function ui(e, t) {
	for (var n = e.slice(), r = si(t), i; !(i = r()).done;) {
		var a = i.value;
		e.indexOf(a) < 0 && n.push(a);
	}
	return n.sort(function(e, t) {
		return e - t;
	});
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
function di(e, t, n) {
	return fi(e, void 0, t, n);
}
function fi(e, t, n, r) {
	n && (r = new q(r.metadata), r.selectNumberingPlan(n));
	var i = r.type(t), a = i && i.possibleLengths() || r.possibleLengths();
	if (!a) return "IS_POSSIBLE";
	if (t === "FIXED_LINE_OR_MOBILE") {
		/* istanbul ignore next */
		if (!r.type("FIXED_LINE")) return fi(e, "MOBILE", n, r);
		var o = r.type("MOBILE");
		o && (a = ui(a, o.possibleLengths()));
	} else if (t && !i) return "INVALID_LENGTH";
	var s = e.length, c = a[0];
	return c === s ? "IS_POSSIBLE" : c > s ? "TOO_SHORT" : a[a.length - 1] < s ? "TOO_LONG" : a.indexOf(s, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/isPossible.js
function pi(e, t, n) {
	/* istanbul ignore if */
	t === void 0 && (t = {});
	var r = new q(n);
	if (t.v2) {
		if (!e.countryCallingCode) throw Error("Invalid phone number object passed");
		r.selectNumberingPlan(e.country || e.countryCallingCode);
	} else {
		if (!e.phone) return !1;
		if (e.country) {
			if (!r.hasCountry(e.country)) throw Error(`Unknown country: ${e.country}`);
			r.selectNumberingPlan(e.country);
		} else {
			if (!e.countryCallingCode) throw Error("Invalid phone number object passed");
			r.selectNumberingPlan(e.countryCallingCode);
		}
	}
	if (r.possibleLengths()) return mi(e.phone || e.nationalNumber, r);
	if (e.countryCallingCode && r.isNonGeographicCallingCode(e.countryCallingCode)) return !0;
	throw Error("Missing \"possibleLengths\" in metadata. Perhaps the metadata has been generated before v1.0.18.");
}
function mi(e, t) {
	switch (di(e, void 0, t)) {
		case "IS_POSSIBLE": return !0;
		default: return !1;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
function hi(e, t) {
	return e ||= "", RegExp("^(?:" + t + ")$").test(e);
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/getNumberType.js
function gi(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = _i(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _i(e, t) {
	if (e) {
		if (typeof e == "string") return vi(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vi(e, t) : void 0;
	}
}
function vi(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var yi = [
	"MOBILE",
	"PREMIUM_RATE",
	"TOLL_FREE",
	"SHARED_COST",
	"VOIP",
	"PERSONAL_NUMBER",
	"PAGER",
	"UAN",
	"VOICEMAIL"
];
function bi(e, t, n) {
	if (t ||= {}, !(!e.country && !e.countryCallingCode)) {
		var r = new q(n);
		r.selectNumberingPlan(e.country || e.countryCallingCode);
		var i = t.v2 ? e.nationalNumber : e.phone;
		if (hi(i, r.nationalNumberPattern())) {
			if (xi(i, "FIXED_LINE", r)) return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || xi(i, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
			for (var a = gi(yi), o; !(o = a()).done;) {
				var s = o.value;
				if (xi(i, s, r)) return s;
			}
		}
	}
}
function xi(e, t, n) {
	var r = n.type(t);
	return !r || !r.pattern() || r.possibleLengths() && r.possibleLengths().indexOf(e.length) < 0 ? !1 : hi(e, r.pattern());
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/isValid.js
function Si(e, t, n) {
	t ||= {};
	var r = new q(n);
	return r.selectNumberingPlan(e.country || e.countryCallingCode), r.hasTypes() ? bi(e, t, r.metadata) !== void 0 : hi(t.v2 ? e.nationalNumber : e.phone, r.nationalNumberPattern());
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/isCountryCode.js
var Ci = /^[A-Z]{2}$/;
function wi(e) {
	return Ci.test(e);
}
function Ti(e, t) {
	var n, r, i = new q(t);
	return wi(e) ? (n = e, i.selectNumberingPlan(n), r = i.countryCallingCode()) : r = e, {
		country: n,
		callingCode: r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
function Ei(e, t, n) {
	var r = new q(n).getCountryCodesForCallingCode(e);
	return r ? r.filter(function(e) {
		return Di(t, e, n);
	}) : [];
}
function Di(e, t, n) {
	var r = new q(n);
	return r.selectNumberingPlan(t), r.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/constants.js
var J = "0-9０-９٠-٩۰-۹", Oi = "-‐-―−ー－／/．. \xA0­​⁠　()（）［］\\[\\]~⁓∼～", ki = "+＋", Ai = RegExp("([" + J + "])");
function ji(e, t, n, r) {
	if (t) {
		var i = new q(r);
		i.selectNumberingPlan(t || n);
		var a = new RegExp(i.IDDPrefix());
		if (e.search(a) === 0) {
			e = e.slice(e.match(a)[0].length);
			var o = e.match(Ai);
			if (!(o && o[1] != null && o[1].length > 0 && o[1] === "0")) return e;
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
function Mi(e, t) {
	if (e && t.numberingPlan.nationalPrefixForParsing()) {
		var n = RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")"), r = n.exec(e);
		if (r) {
			var i, a, o = r.length - 1, s = o > 0 && r[o];
			if (t.nationalPrefixTransformRule() && s) i = e.replace(n, t.nationalPrefixTransformRule()), o > 1 && (a = r[1]);
			else {
				var c = r[0];
				i = e.slice(c.length), s && (a = r[1]);
			}
			var l;
			if (s) {
				var u = e.indexOf(r[1]);
				e.slice(0, u) === t.numberingPlan.nationalPrefix() && (l = t.numberingPlan.nationalPrefix());
			} else l = r[0];
			return {
				nationalNumber: i,
				nationalPrefix: l,
				carrierCode: a
			};
		}
	}
	return { nationalNumber: e };
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/getCountryByNationalNumber.js
function Ni(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = Pi(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Pi(e, t) {
	if (e) {
		if (typeof e == "string") return Fi(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Fi(e, t) : void 0;
	}
}
function Fi(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Ii(e, t, n) {
	for (var r = new q(n), i = Ni(t), a; !(a = i()).done;) {
		var o = a.value;
		if (r.selectNumberingPlan(o), r.leadingDigits()) {
			if (e && e.search(r.leadingDigits()) === 0) return o;
		} else if (bi({
			phone: e,
			country: o
		}, void 0, r.metadata)) return o;
	}
}
function Li(e, t) {
	var n = t.nationalNumber, r = t.metadata, i = r.getCountryCodesForCallingCode(e);
	if (i) return i.length === 1 ? i[0] : Ii(n, i, r.metadata);
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
function Ri(e, t, n) {
	var r = Mi(e, n), i = r.carrierCode, a = r.nationalNumber;
	return a !== e && (!zi(e, a, n) || n.numberingPlan.possibleLengths() && (t ||= Li(n.numberingPlan.callingCode(), {
		nationalNumber: a,
		metadata: n
	}), !Bi(a, t, n))) ? { nationalNumber: e } : {
		nationalNumber: a,
		carrierCode: i
	};
}
function zi(e, t, n) {
	return !(hi(e, n.nationalNumberPattern()) && !hi(t, n.nationalNumberPattern()));
}
function Bi(e, t, n) {
	switch (di(e, t, n)) {
		case "TOO_SHORT":
		case "INVALID_LENGTH": return !1;
		default: return !0;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
function Vi(e, t, n, r, i) {
	if (!(t || n || r)) return { number: e };
	var a = t || n ? ii(t || n, i) : r;
	if (e.indexOf(a) === 0) {
		var o = new q(i);
		o.selectNumberingPlan(t || n || r);
		var s = e.slice(a.length), c = Ri(s, void 0, o).nationalNumber, l = Ri(e, void 0, o).nationalNumber;
		if (!hi(l, o.nationalNumberPattern()) && hi(c, o.nationalNumberPattern()) || di(l, void 0, o) === "TOO_LONG") return {
			countryCallingCode: a,
			number: s
		};
	}
	return { number: e };
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
function Hi(e, t, n, r, i) {
	if (!e) return {};
	var a;
	if (e[0] !== "+") {
		var o = ji(e, t || n, r, i);
		if (o && o !== e) a = !0, e = "+" + o;
		else {
			if (t || n || r) {
				var s = Vi(e, t, n, r, i), c = s.countryCallingCode, l = s.number;
				if (c) return {
					countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
					countryCallingCode: c,
					number: l
				};
			}
			return { number: e };
		}
	}
	if (e[1] === "0") return {};
	for (var u = new q(i), d = 2; d - 1 <= 3 && d <= e.length;) {
		var f = e.slice(1, d);
		if (u.hasCallingCode(f)) return u.selectNumberingPlan(f), {
			countryCallingCodeSource: a ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
			countryCallingCode: f,
			number: e.slice(d)
		};
		d++;
	}
	return {};
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
function Ui(e) {
	return e.replace(RegExp(`[${Oi}]+`, "g"), " ").trim();
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
var Wi = /(\$\d)/;
function Gi(e, t, n) {
	var r = n.useInternationalFormat, i = n.withNationalPrefix;
	n.carrierCode, n.metadata;
	var a = e.replace(new RegExp(t.pattern()), r ? t.internationalFormat() : i && t.nationalPrefixFormattingRule() ? t.format().replace(Wi, t.nationalPrefixFormattingRule()) : t.format());
	return r ? Ui(a) : a;
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
var Ki = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function qi(e, t, n) {
	var r = new q(n);
	if (r.selectNumberingPlan(e || t), r.defaultIDDPrefix()) return r.defaultIDDPrefix();
	if (Ki.test(r.IDDPrefix())) return r.IDDPrefix();
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
var Ji = ";ext=", Yi = function(e) {
	return `([${J}]{1,${e}})`;
};
function Xi(e) {
	var t = "20", n = "15", r = "9", i = "6", a = "[ \xA0\\t,]*", o = "[:\\.．]?[ \xA0\\t,-]*", s = "#?", c = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", l = "(?:[xｘ#＃~～]|int|ｉｎｔ)", u = "[- ]+", d = "[ \xA0\\t]*", f = "(?:,{2}|;)", p = Ji + Yi(t), m = a + c + o + Yi(t) + s, h = a + l + o + Yi(r) + s, g = u + Yi(i) + "#", _ = d + f + o + Yi(n) + s, v = d + "(?:,)+" + o + Yi(r) + s;
	return p + "|" + m + "|" + h + "|" + g + "|" + _ + "|" + v;
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
var Zi = "[" + J + "]{2}", Qi = "[" + ki + "]{0,1}(?:[" + Oi + "]*[" + J + "]){3,}[" + Oi + J + "]*", $i = RegExp("^[" + ki + "]{0,1}(?:[" + Oi + "]*[" + J + "]){1,2}$", "i"), ea = Qi + "(?:" + Xi() + ")?", ta = RegExp("^" + Zi + "$|^" + ea + "$", "i");
function na(e) {
	return e.length >= 2 && ta.test(e);
}
function ra(e) {
	return $i.test(e);
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function ia(e) {
	var t = e.number, n = e.ext;
	if (!t) return "";
	if (t[0] !== "+") throw Error("\"formatRFC3966()\" expects \"number\" to be in E.164 format.");
	return `tel:${t}${n ? ";ext=" + n : ""}`;
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/format.js
var aa = { formatExtension: function(e, t, n) {
	return `${e}${n.ext()}${t}`;
} };
function oa(e, t, n, r) {
	n = n ? da({}, aa, n) : aa;
	var i = new q(r);
	if (e.country && e.country !== "001") {
		if (!i.hasCountry(e.country)) throw Error(`Unknown country: ${e.country}`);
		i.selectNumberingPlan(e.country);
	} else if (e.countryCallingCode) i.selectNumberingPlan(e.countryCallingCode);
	else return e.phone || "";
	var a = i.countryCallingCode(), o = n.v2 ? e.nationalNumber : e.phone, s;
	switch (t) {
		case "NATIONAL": return o ? (s = sa(o, e.carrierCode, "NATIONAL", i, n), la(s, e.ext, i, n.formatExtension)) : "";
		case "INTERNATIONAL": return o ? (s = sa(o, null, "INTERNATIONAL", i, n), s = `+${a} ${s}`, la(s, e.ext, i, n.formatExtension)) : `+${a}`;
		case "E.164": return `+${a}${o}`;
		case "RFC3966": return ia({
			number: `+${a}${o}`,
			ext: e.ext
		});
		case "IDD":
			if (!n.fromCountry) return;
			var c = ua(o, e.carrierCode, a, n.fromCountry, i);
			return c ? la(c, e.ext, i, n.formatExtension) : void 0;
		default: throw Error(`Unknown "format" argument passed to "formatNumber()": "${t}"`);
	}
}
function sa(e, t, n, r, i) {
	var a = ca(r.formats(), e);
	return a ? Gi(e, a, {
		useInternationalFormat: n === "INTERNATIONAL",
		withNationalPrefix: !(a.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && i && i.nationalPrefix === !1),
		carrierCode: t,
		metadata: r
	}) : e;
}
function ca(e, t) {
	return fa(e, function(e) {
		if (e.leadingDigitsPatterns().length > 0) {
			var n = e.leadingDigitsPatterns()[e.leadingDigitsPatterns().length - 1];
			if (t.search(n) !== 0) return !1;
		}
		return hi(t, e.pattern());
	});
}
function la(e, t, n, r) {
	return t ? r(e, t, n) : e;
}
function ua(e, t, n, r, i) {
	if (ii(r, i.metadata) === n) {
		var a = sa(e, t, "NATIONAL", i);
		return n === "1" ? n + " " + a : a;
	}
	var o = qi(r, void 0, i.metadata);
	if (o) return `${o} ${n} ${sa(e, null, "INTERNATIONAL", i)}`;
}
function da() {
	for (var e = 1, t = [...arguments]; e < t.length;) {
		if (t[e]) for (var n in t[e]) t[0][n] = t[e][n];
		e++;
	}
	return t[0];
}
function fa(e, t) {
	for (var n = 0; n < e.length;) {
		if (t(e[n])) return e[n];
		n++;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/PhoneNumber.js
function pa(e) {
	"@babel/helpers - typeof";
	return pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, pa(e);
}
function ma(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ha(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ma(Object(n), !0).forEach(function(t) {
			ga(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ma(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ga(e, t, n) {
	return (t = ba(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _a(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function va(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ba(r.key), r);
	}
}
function ya(e, t, n) {
	return t && va(e.prototype, t), n && va(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ba(e) {
	var t = xa(e, "string");
	return pa(t) == "symbol" ? t : t + "";
}
function xa(e, t) {
	if (pa(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (pa(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Sa = /*#__PURE__*/ function() {
	function e(t, n, r) {
		if (_a(this, e), !t) throw TypeError("First argument is required");
		if (typeof t != "string") throw TypeError("First argument must be a string");
		if (t[0] === "+" && !n) throw TypeError("`metadata` argument not passed");
		if (zr(n) && zr(n.countries)) {
			r = n;
			var i = t;
			if (!Ca.test(i)) throw Error("Invalid `number` argument passed: must consist of a \"+\" followed by digits");
			var a = Hi(i, void 0, void 0, void 0, r), o = a.countryCallingCode;
			if (n = a.number, t = o, !n) throw Error("Invalid `number` argument passed: too short");
		}
		if (!n) throw TypeError("`nationalNumber` argument is required");
		if (typeof n != "string") throw TypeError("`nationalNumber` argument must be a string");
		ni(r);
		var s = Ti(t, r), c = s.country, l = s.callingCode;
		this.country = c, this.countryCallingCode = l, this.nationalNumber = n, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
			return r;
		};
	}
	return ya(e, [
		{
			key: "setExt",
			value: function(e) {
				this.ext = e;
			}
		},
		{
			key: "getPossibleCountries",
			value: function() {
				return this.country ? [this.country] : Ei(this.countryCallingCode, this.nationalNumber, this.getMetadata());
			}
		},
		{
			key: "isPossible",
			value: function() {
				return pi(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "isValid",
			value: function() {
				return Si(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "isNonGeographic",
			value: function() {
				return new q(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode);
			}
		},
		{
			key: "isEqual",
			value: function(e) {
				return this.number === e.number && this.ext === e.ext;
			}
		},
		{
			key: "getType",
			value: function() {
				return bi(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "format",
			value: function(e, t) {
				return oa(this, e, t ? ha(ha({}, t), {}, { v2: !0 }) : { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "formatNational",
			value: function(e) {
				return this.format("NATIONAL", e);
			}
		},
		{
			key: "formatInternational",
			value: function(e) {
				return this.format("INTERNATIONAL", e);
			}
		},
		{
			key: "getURI",
			value: function(e) {
				return this.format("RFC3966", e);
			}
		}
	]);
}(), Ca = /^\+\d+$/;
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/ParseError.js
function wa(e) {
	"@babel/helpers - typeof";
	return wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, wa(e);
}
function Ta(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Da(r.key), r);
	}
}
function Ea(e, t, n) {
	return t && Ta(e.prototype, t), n && Ta(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Da(e) {
	var t = Oa(e, "string");
	return wa(t) == "symbol" ? t : t + "";
}
function Oa(e, t) {
	if (wa(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (wa(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function ka(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Aa(e, t, n) {
	return t = za(t), ja(e, Ia() ? Reflect.construct(t, n || [], za(e).constructor) : t.apply(e, n));
}
function ja(e, t) {
	if (t && (wa(t) == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Ma(e);
}
function Ma(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Na(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ra(e, t);
}
function Pa(e) {
	var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
	return Pa = function(e) {
		if (e === null || !La(e)) return e;
		if (typeof e != "function") throw TypeError("Super expression must either be null or a function");
		if (t !== void 0) {
			if (t.has(e)) return t.get(e);
			t.set(e, n);
		}
		function n() {
			return Fa(e, arguments, za(this).constructor);
		}
		return n.prototype = Object.create(e.prototype, { constructor: {
			value: n,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), Ra(n, e);
	}, Pa(e);
}
function Fa(e, t, n) {
	if (Ia()) return Reflect.construct.apply(null, arguments);
	var r = [null];
	r.push.apply(r, t);
	var i = new (e.bind.apply(e, r))();
	return n && Ra(i, n.prototype), i;
}
function Ia() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Ia = function() {
		return !!e;
	})();
}
function La(e) {
	try {
		return Function.toString.call(e).indexOf("[native code]") !== -1;
	} catch {
		return typeof e == "function";
	}
}
function Ra(e, t) {
	return Ra = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Ra(e, t);
}
function za(e) {
	return za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, za(e);
}
var Ba = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return ka(this, t), n = Aa(this, t, [e]), Object.setPrototypeOf(n, t.prototype), n.name = n.constructor.name, n;
	}
	return Na(t, e), Ea(t);
}(/*#__PURE__*/ Pa(Error)), Va = RegExp("(?:" + Xi() + ")$", "i");
function Ha(e) {
	var t = e.search(Va);
	if (t < 0) return {};
	for (var n = e.slice(0, t), r = e.match(Va), i = 1; i < r.length;) {
		if (r[i]) return {
			number: n,
			ext: r[i]
		};
		i++;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/parseDigits.js
function Ua(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = Wa(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Wa(e, t) {
	if (e) {
		if (typeof e == "string") return Ga(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ga(e, t) : void 0;
	}
}
function Ga(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var Ka = {
	0: "0",
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
	9: "9",
	"０": "0",
	"１": "1",
	"２": "2",
	"３": "3",
	"４": "4",
	"５": "5",
	"６": "6",
	"７": "7",
	"８": "8",
	"９": "9",
	"٠": "0",
	"١": "1",
	"٢": "2",
	"٣": "3",
	"٤": "4",
	"٥": "5",
	"٦": "6",
	"٧": "7",
	"٨": "8",
	"٩": "9",
	"۰": "0",
	"۱": "1",
	"۲": "2",
	"۳": "3",
	"۴": "4",
	"۵": "5",
	"۶": "6",
	"۷": "7",
	"۸": "8",
	"۹": "9"
};
function qa(e) {
	return Ka[e];
}
function Ja(e) {
	for (var t = "", n = Ua(e.split("")), r; !(r = n()).done;) {
		var i = r.value, a = qa(i);
		a && (t += a);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
function Ya(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = Xa(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Xa(e, t) {
	if (e) {
		if (typeof e == "string") return Za(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Za(e, t) : void 0;
	}
}
function Za(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Qa(e) {
	for (var t = "", n = Ya(e.split("")), r; !(r = n()).done;) {
		var i = r.value;
		t += $a(i, t) || "";
	}
	return t;
}
function $a(e, t, n) {
	if (e === "+") {
		if (t) {
			typeof n == "function" && n("end");
			return;
		}
		return "+";
	}
	return qa(e);
}
var eo = "([" + J + "]|[\\-\\.\\(\\)]?)", to = "^\\+" + eo + "*[" + J + "]" + eo + "*$", no = new RegExp(to, "g"), ro = J, io = "[" + ro + "]+((\\-)*[" + ro + "])*", ao = "[a-zA-Z]+((\\-)*[" + ro + "])*", oo = "^(" + io + "\\.)*" + ao + "\\.?$", so = new RegExp(oo, "g"), co = "tel:", lo = ";phone-context=", uo = ";isub=";
function fo(e) {
	var t = e.indexOf(lo);
	if (t < 0) return null;
	var n = t + lo.length;
	if (n >= e.length) return "";
	var r = e.indexOf(";", n);
	return r >= 0 ? e.substring(n, r) : e.substring(n);
}
function po(e) {
	return e === null ? !0 : e.length === 0 ? !1 : no.test(e) || so.test(e);
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
function mo(e, t) {
	var n = t.extractFormattedPhoneNumber, r = fo(e);
	if (!po(r)) throw new Ba("NOT_A_NUMBER");
	var i;
	if (r === null) i = n(e) || "";
	else {
		i = "", r.charAt(0) === "+" && (i += r);
		var a = e.indexOf(co), o = a >= 0 ? a + co.length : 0, s = e.indexOf(lo);
		i += e.substring(o, s);
	}
	var c = i.indexOf(uo);
	if (c > 0 && (i = i.substring(0, c)), i !== "") return i;
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/parse.js
var ho = 250, go = RegExp("[" + ki + J + "]"), _o = RegExp("[^" + J + "#]+$");
function vo(e, t, n) {
	t ||= {};
	var r = new q(n);
	if (t.defaultCountry && !r.hasCountry(t.defaultCountry)) throw t.v2 ? new Ba("INVALID_COUNTRY") : Error(`Unknown country: ${t.defaultCountry}`);
	var i = bo(e, t.v2, t.extract), a = i.number, o = i.ext, s = i.error;
	if (!a) {
		if (t.v2) throw s === "TOO_SHORT" ? new Ba("TOO_SHORT") : new Ba("NOT_A_NUMBER");
		return {};
	}
	var c = So(a, t.defaultCountry, t.defaultCallingCode, r), l = c.country, u = c.nationalNumber, d = c.countryCallingCode, f = c.countryCallingCodeSource, p = c.carrierCode;
	if (!r.hasSelectedNumberingPlan()) {
		if (t.v2) throw new Ba("INVALID_COUNTRY");
		return {};
	}
	if (!u || u.length < 2) {
		/* istanbul ignore if */
		if (t.v2) throw new Ba("TOO_SHORT");
		return {};
	}
	if (u.length > 17) {
		if (t.v2) throw new Ba("TOO_LONG");
		return {};
	}
	if (t.v2) {
		var m = new Sa(d, u, r.metadata);
		return l && (m.country = l), p && (m.carrierCode = p), o && (m.ext = o), m.__countryCallingCodeSource = f, m;
	}
	var h = (t.extended ? r.hasSelectedNumberingPlan() : l) ? hi(u, r.nationalNumberPattern()) : !1;
	return t.extended ? {
		country: l,
		countryCallingCode: d,
		carrierCode: p,
		valid: h,
		possible: h ? !0 : !!(t.extended === !0 && r.possibleLengths() && mi(u, r)),
		phone: u,
		ext: o
	} : h ? xo(l, u, o) : {};
}
function yo(e, t, n) {
	if (e) {
		if (e.length > ho) {
			if (n) throw new Ba("TOO_LONG");
			return;
		}
		if (t === !1) return e;
		var r = e.search(go);
		if (!(r < 0)) return e.slice(r).replace(_o, "");
	}
}
function bo(e, t, n) {
	var r = mo(e, { extractFormattedPhoneNumber: function(e) {
		return yo(e, n, t);
	} });
	if (!r) return {};
	if (!na(r)) return ra(r) ? { error: "TOO_SHORT" } : {};
	var i = Ha(r);
	return i.ext ? i : { number: r };
}
function xo(e, t, n) {
	var r = {
		country: e,
		phone: t
	};
	return n && (r.ext = n), r;
}
function So(e, t, n, r) {
	var i = Hi(Qa(e), void 0, t, n, r.metadata), a = i.countryCallingCodeSource, o = i.countryCallingCode, s = i.number, c;
	if (o) r.selectNumberingPlan(o);
	else if (s && (t || n)) t ? (c = t, r.selectNumberingPlan(t), o = r.numberingPlan.callingCode()) : (r.selectNumberingPlan(n), o = n);
	else return {};
	if (!s) return {
		countryCallingCodeSource: a,
		countryCallingCode: o
	};
	var l = Ri(Qa(s), void 0, r), u = l.nationalNumber, d = l.carrierCode, f = Li(o, {
		nationalNumber: u,
		metadata: r
	});
	return f && (c = f, f === "001" || r.selectNumberingPlan(c)), {
		country: c,
		countryCallingCode: o,
		countryCallingCodeSource: a,
		nationalNumber: u,
		carrierCode: d
	};
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/parsePhoneNumberWithError_.js
function Co(e) {
	"@babel/helpers - typeof";
	return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Co(e);
}
function wo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function To(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? wo(Object(n), !0).forEach(function(t) {
			Eo(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Eo(e, t, n) {
	return (t = Do(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Do(e) {
	var t = Oo(e, "string");
	return Co(t) == "symbol" ? t : t + "";
}
function Oo(e, t) {
	if (Co(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Co(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function ko(e, t, n) {
	return vo(e, To(To({}, t), {}, { v2: !0 }), n);
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/normalizeArguments.js
function Ao(e) {
	"@babel/helpers - typeof";
	return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ao(e);
}
function jo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Mo(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? jo(Object(n), !0).forEach(function(t) {
			No(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function No(e, t, n) {
	return (t = Po(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Po(e) {
	var t = Fo(e, "string");
	return Ao(t) == "symbol" ? t : t + "";
}
function Fo(e, t) {
	if (Ao(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ao(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Io(e, t) {
	return Vo(e) || Bo(e, t) || Ro(e, t) || Lo();
}
function Lo() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Ro(e, t) {
	if (e) {
		if (typeof e == "string") return zo(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zo(e, t) : void 0;
	}
}
function zo(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Bo(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Vo(e) {
	if (Array.isArray(e)) return e;
}
function Ho(e) {
	var t = Io(Array.prototype.slice.call(e), 4), n = t[0], r = t[1], i = t[2], a = t[3], o, s, c;
	if (typeof n == "string") o = n;
	else throw TypeError("A text for parsing must be a string.");
	if (!r || typeof r == "string") a ? (s = i, c = a) : (s = void 0, c = i), r && (s = Mo({ defaultCountry: r }, s));
	else if (zr(r)) i ? (s = r, c = i) : c = r;
	else throw Error(`Invalid second argument: ${r}`);
	return {
		text: o,
		options: s,
		metadata: c
	};
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
function Uo(e) {
	"@babel/helpers - typeof";
	return Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Uo(e);
}
function Wo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Go(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wo(Object(n), !0).forEach(function(t) {
			Ko(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ko(e, t, n) {
	return (t = qo(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function qo(e) {
	var t = Jo(e, "string");
	return Uo(t) == "symbol" ? t : t + "";
}
function Jo(e, t) {
	if (Uo(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Uo(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Yo(e, t, n) {
	t && t.defaultCountry && !ai(t.defaultCountry, n) && (t = Go(Go({}, t), {}, { defaultCountry: void 0 }));
	try {
		return ko(e, t, n);
	} catch (e) {
		/* istanbul ignore else */
		if (!(e instanceof Ba)) throw e;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/parsePhoneNumber.js
function Xo() {
	var e = Ho(arguments), t = e.text, n = e.options, r = e.metadata;
	return Yo(t, n, r);
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/es6/getCountries.js
function Zo(e) {
	return new q(e).getCountries();
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/min/exports/parsePhoneNumber.js
function Qo() {
	return Ir(Xo, arguments);
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/min/exports/getCountries.js
function $o() {
	return Ir(Zo, arguments);
}
//#endregion
//#region ../../node_modules/.pnpm/libphonenumber-js@1.13.9/node_modules/libphonenumber-js/min/exports/getCountryCallingCode.js
function es() {
	return Ir(ii, arguments);
}
//#endregion
//#region src/experimental/Forms/F0PhoneInput/lib/phone.ts
var ts = /^\+\d{1,4}$/, ns = (e, t) => {
	let n = Fr.country_calling_codes[e];
	if (n) return t ? n.find((e) => t.includes(e)) : n[0];
}, rs = (e) => e.replace(/\D/g, ""), is = (e) => {
	if (!e) return;
	let t = e.toUpperCase();
	return $o().includes(t) ? t : void 0;
}, as = (e) => e ? e.toLowerCase() : void 0, os = (e) => `+${es(e)}`, ss = (e) => {
	if (ts.test(e.trim())) return ns(rs(e));
}, cs = (e, t) => {
	if (!e.startsWith("+")) return;
	let n = rs(e);
	for (let e = 1; e <= Math.min(3, n.length); e++) {
		let r = ns(n.slice(0, e), t);
		if (r) return r;
	}
}, ls = (e, t) => {
	if (!e) return;
	let n = e.number?.trim() ?? "", r = e.prefix?.trim();
	if (n.startsWith("+")) {
		let e = Qo(n);
		if (e) return e.number;
		let t = rs(n);
		return t ? `+${t}` : void 0;
	}
	if (n) {
		if (r && ts.test(r)) {
			let e = ss(r), t = e ? Qo(n, e) : Qo(`${r}${rs(n)}`);
			return t ? t.number : `${r}${rs(n)}`;
		}
		if (t) {
			let e = Qo(n, t);
			if (e) return e.number;
			let r = rs(n);
			return r ? `+${es(t)}${r}` : void 0;
		}
	}
}, us = (e, t) => {
	if (!e) return;
	let n = Qo(e);
	if (n) return {
		prefix: `+${n.countryCallingCode}`,
		number: n.nationalNumber
	};
	if (t) {
		let n = os(t);
		if (e.startsWith(n)) {
			let t = e.slice(n.length);
			return t ? {
				prefix: n,
				number: t
			} : void 0;
		}
	}
	return {
		prefix: void 0,
		number: e
	};
}, ds = (e, t) => {
	let n = ls(e, is(t));
	return n ? Qo(n)?.isValid() ?? !1 : !1;
}, fs = (e, t) => {
	let n = ls(e, is(t));
	return n ? Qo(n)?.isPossible() ?? !1 : !1;
}, ps = (e, t) => {
	let n = e ? Qo(e) : void 0;
	return {
		country: as(n?.country ?? t),
		e164: e || void 0,
		isValid: n?.isValid() ?? !1,
		isPossible: n?.isPossible() ?? !1
	};
}, ms = (e) => {
	if (!e) return;
	let t = ls(e), n = t ? Qo(t) : void 0;
	if (n?.country) return n.country;
	if (e.prefix) return ss(e.prefix);
};
//#endregion
//#region src/patterns/F0Form/f0Schema.ts
function hs(e, t) {
	return e._def?.typeName === t;
}
function gs(e) {
	return hs(e, "ZodEffects") ? e._def.schema : e;
}
var _s = /* @__PURE__ */ new WeakMap();
function Y(e, t) {
	_s.set(e, t);
	let n = e;
	return n._f0Config = t, n._innerSchema = e, n;
}
function vs(e) {
	let t = e;
	return t._f0Config ? t._f0Config : _s.get(e);
}
function ys(e) {
	return vs(e) !== void 0;
}
function bs(e) {
	let t = e;
	for (; hs(t, "ZodOptional") || hs(t, "ZodNullable") || hs(t, "ZodDefault");) t = t._def.innerType;
	return t;
}
function xs(e, t) {
	if ("fieldType" in t && t.fieldType) return t.fieldType;
	if ("options" in t && t.options || "source" in t && t.source) return "select";
	let n = bs(e);
	return hs(n, "ZodString") ? "rows" in t && t.rows ? "textarea" : "text" : hs(n, "ZodNumber") ? "number" : hs(n, "ZodBoolean") ? "switch" : hs(n, "ZodDate") ? "date" : hs(n, "ZodEnum") || hs(n, "ZodArray") && ("options" in t && t.options || "source" in t && t.source) ? "select" : hs(n, "ZodObject") && "render" in t && t.render ? "custom" : "text";
}
(function(e) {
	function t({ optional: e, minLength: t, maxLength: n, ...r }) {
		let i = K(), a = !e && t === void 0 ? 1 : t;
		a !== void 0 && (i = i.min(a)), n !== void 0 && (i = i.max(n));
		let o = e ? i.optional() : i;
		return Y(o, r);
	}
	e.text = t;
	function n({ optional: e, ...t }) {
		let n = e ? K().email().optional() : K().email();
		return Y(n, t);
	}
	e.email = n;
	function r({ optional: e, ...t }) {
		let n = e ? K().optional() : K().min(1);
		return Y(n, {
			...t,
			fieldType: "textarea"
		});
	}
	e.textarea = r;
	function i({ optional: e, min: t, max: n, isInt: r, ...i }) {
		let a = Er();
		r && (a = a.int()), t !== void 0 && (a = a.min(t)), n !== void 0 && (a = a.max(n));
		let o = e ? a.optional() : a;
		return Y(o, i);
	}
	e.number = i;
	function a({ optional: e, ...t }) {
		let n = e ? Dr() : Nr(!0);
		return Y(n, {
			...t,
			fieldType: "switch"
		});
	}
	e.boolean = a;
	function o({ optional: e, ...t }) {
		let n = e ? Dr() : Nr(!0);
		return Y(n, {
			...t,
			fieldType: "checkbox"
		});
	}
	e.checkbox = o;
	function s({ optional: e, ...t }) {
		let n = e ? Or().optional() : Or();
		return Y(n, t);
	}
	e.date = s;
	function c({ optional: e, ...t }) {
		let n = e ? K().url().optional() : K().url();
		return Y(n, t);
	}
	e.url = c;
	function l({ optional: e, ...t }) {
		let n = e ? Er().optional() : Er();
		return Y(n, {
			...t,
			fieldType: "money"
		});
	}
	e.money = l;
	function u({ optional: e, min: t, max: n, ...r }) {
		let i = Er();
		t !== void 0 && (i = i.min(t)), n !== void 0 && (i = i.max(n));
		let a = e ? i.optional() : i;
		return Y(a, {
			...r,
			fieldType: "percentage"
		});
	}
	e.percentage = u;
	function d(e) {
		if (e.options.length === 0) throw Error("f0FormField.cardSelect requires at least one option to build a Zod enum");
		let { optional: t, ...n } = e, r = n.options.map((e) => e.value), i = t ? Pr(r).optional() : Pr(r);
		return Y(i, {
			...n,
			fieldType: "cardSelect"
		});
	}
	e.cardSelect = d;
	function f({ optional: e, ...t }) {
		let n = e ? K().optional() : K().min(1);
		return Y(n, {
			...t,
			fieldType: "file",
			multiple: !1
		});
	}
	e.file = f;
	function p({ optional: e, ...t }) {
		let n = e ? jr(K()).optional() : jr(K()).min(1);
		return Y(n, {
			...t,
			fieldType: "file",
			multiple: !0
		});
	}
	e.multiFile = p;
	function m({ optional: e, ...t }) {
		let n = e ? Or().optional() : Or();
		return Y(n, {
			...t,
			fieldType: "time"
		});
	}
	e.time = m;
	function h({ optional: e, ...t }) {
		let n = e ? Or().optional() : Or();
		return Y(n, {
			...t,
			fieldType: "datetime"
		});
	}
	e.datetime = h;
	function g({ optional: e, ...t }) {
		let n = e ? Er().optional() : Er();
		return Y(n, {
			...t,
			fieldType: "duration"
		});
	}
	e.duration = g;
	function _({ optional: e, ...t }) {
		let n = Mr({
			from: Or(),
			to: Or()
		}), r = e ? n.optional() : n;
		return Y(r, {
			...t,
			fieldType: "daterange"
		});
	}
	e.dateRange = _;
	function v({ optional: e, ...t }) {
		let n = Mr({
			value: Mr({
				from: Or(),
				to: Or()
			}),
			granularity: Pr([
				"day",
				"week",
				"month",
				"quarter",
				"halfyear",
				"year",
				"range"
			])
		}), r = e ? n.nullish() : n;
		return Y(r, {
			...t,
			fieldType: "period"
		});
	}
	e.datePeriod = v;
	function y({ optional: e, validate: t = "valid", invalidMessage: n, ...r }) {
		let i = Mr({
			prefix: K().optional(),
			number: K()
		}).superRefine((i, a) => {
			if (t === !1 || e && !i.number?.trim()) return;
			let o = {
				prefix: i.prefix,
				number: i.number
			};
			(t === "possible" ? fs(o, r.defaultCountry) : ds(o, r.defaultCountry)) || a.addIssue({
				code: L.custom,
				params: { type: "phone" },
				...n ? { message: n } : {}
			});
		}), a = e ? i.optional() : i;
		return Y(a, {
			...r,
			fieldType: "phone"
		});
	}
	e.phone = y;
	function b({ optional: e, ...t }) {
		let n = Mr({
			value: K(),
			mentionIds: jr(K()).optional()
		}), r = e ? n.optional() : n;
		return Y(r, {
			...t,
			fieldType: "richtext"
		});
	}
	e.richText = b;
	function x(e) {
		if (typeof e != "object" || !e) throw TypeError("f0FormField.select requires a config object");
		let t = e, { optional: n, ...r } = t, i = Array.isArray(t.options) ? t.options : void 0;
		if (i && i.length > 0) {
			let e = i.filter((e) => typeof e == "object" && !!e && "value" in e && typeof e.value == "string").map((e) => e.value);
			if (e.length > 0) {
				let t = n ? Pr(e).optional() : Pr(e);
				return Y(t, r);
			}
		}
		let a = n ? K().optional() : K();
		return Y(a, r);
	}
	e.select = x;
	function S(e) {
		if (typeof e != "object" || !e) throw TypeError("f0FormField.multiSelect requires a config object");
		let t = e, { optional: n, ...r } = t, i = Array.isArray(t.options) ? t.options : void 0;
		if (i && i.length > 0) {
			let e = i.filter((e) => typeof e == "object" && !!e && "value" in e && typeof e.value == "string").map((e) => e.value);
			if (e.length > 0) {
				let t = jr(Pr(e)).min(1), i = n ? t.optional() : t;
				return Y(i, {
					...r,
					multiple: !0
				});
			}
		}
		let a = jr(K()).min(1), o = n ? a.optional() : a;
		return Y(o, {
			...r,
			multiple: !0
		});
	}
	e.multiSelect = S;
	function ee(e) {
		let { optional: t, schema: n, createFormDefinition: r, updateFormDefinition: i, ...a } = e, o = n ?? i?.schema, s = a.config, c = jr(o), l = s?.minItems ?? (t ? void 0 : 1);
		l !== void 0 && (c = c.min(l)), s?.maxItems !== void 0 && (c = c.max(s.maxItems));
		let u = t ? c.optional() : c;
		return Y(u, {
			...a,
			schema: o,
			createFormDefinition: r,
			updateFormDefinition: i,
			fieldType: "entitiesList"
		});
	}
	e.entitiesList = ee;
})(Y ||= {});
//#endregion
//#region src/icons/animated/CheckCircleLine.tsx
var Ss = {
	duration: .5,
	ease: [
		0,
		0,
		.2,
		1
	],
	delay: .2
}, Cs = {
	normal: {
		pathLength: 1,
		opacity: 1,
		transition: { delay: 0 }
	},
	animate: {
		pathLength: [0, 1],
		opacity: [0, 1]
	}
}, ws = {
	duration: .5,
	ease: [
		.175,
		.885,
		.32,
		1.275
	]
}, Ts = {
	normal: { scale: 1 },
	animate: { scale: [
		1,
		.9,
		1
	] }
}, Es = k.forwardRef(({ animate: e = "normal", ...t }, n) => /* @__PURE__ */ P("svg", {
	ref: n,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	strokeWidth: "1.3",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...t,
	children: [/* @__PURE__ */ N(T.circle, {
		cx: "12",
		cy: "12",
		r: "8",
		initial: "normal",
		variants: Ts,
		transition: ws,
		animate: e
	}), /* @__PURE__ */ N(T.path, {
		d: "M9.00003 12L11.4 14.4L15 9.6",
		initial: "normal",
		variants: Cs,
		transition: Ss,
		animate: e
	})]
}));
Es.displayName = "CheckCircleLineAnimated";
var Ds = 2e3, Os = 12e3, ks = 2, As = 40, js = [
	255,
	60,
	0
], Ms = [
	160,
	140,
	220
], Ns = {
	x: -12,
	y: 0,
	z: 0
}, Ps = {
	x: -12,
	y: 12,
	z: 90
}, Fs = {
	20: .72,
	28: .66,
	32: .72,
	60: .77,
	80: .8,
	120: .85
}, Is = Math.PI / 180, Ls = ks / 8 * Math.PI, Rs = 4 * Math.PI;
function zs(e, t) {
	return [
		e[0] * t[0] - e[1] * t[1] - e[2] * t[2] - e[3] * t[3],
		e[0] * t[1] + e[1] * t[0] + e[2] * t[3] - e[3] * t[2],
		e[0] * t[2] - e[1] * t[3] + e[2] * t[0] + e[3] * t[1],
		e[0] * t[3] + e[1] * t[2] - e[2] * t[1] + e[3] * t[0]
	];
}
function Bs(e) {
	let t = Math.sqrt(e[0] ** 2 + e[1] ** 2 + e[2] ** 2 + e[3] ** 2);
	return [
		e[0] / t,
		e[1] / t,
		e[2] / t,
		e[3] / t
	];
}
function Vs(e, t, n, r) {
	let i = Math.sin(r / 2);
	return [
		Math.cos(r / 2),
		e * i,
		t * i,
		n * i
	];
}
var Hs = [
	0,
	0,
	0
];
function Us(e, t, n, r, i) {
	let a = e[0], o = e[1], s = e[2], c = e[3], l = 2 * (s * r - c * n), u = 2 * (c * t - o * r), d = 2 * (o * n - s * t);
	i[0] = t + a * l + s * d - c * u, i[1] = n + a * u + c * l - o * d, i[2] = r + a * d + o * u - s * l;
}
function Ws(e, t, n) {
	let r = Vs(1, 0, 0, e * Is), i = Vs(0, 1, 0, t * Is), a = Vs(0, 0, 1, n * Is);
	return Bs(zs(zs(i, r), a));
}
function Gs(e) {
	return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
var Ks = 256, qs = (() => {
	let e = Array(Ks);
	for (let t = 0; t < Ks; t++) {
		let n = t / 255, r = Math.round(js[0] + (Ms[0] - js[0]) * n), i = Math.round(js[1] + (Ms[1] - js[1]) * n), a = Math.round(js[2] + (Ms[2] - js[2]) * n);
		e[t] = `rgb(${r},${i},${a})`;
	}
	return e;
})();
function Js(e) {
	return qs[e <= 0 ? 0 : e >= 1 ? 255 : e * 255 | 0];
}
var Ys = Object.keys(Fs).map(Number).sort((e, t) => e - t);
function Xs(e) {
	let t = Ys;
	if (e <= t[0]) return Fs[t[0]];
	if (e >= t[t.length - 1]) return Fs[t[t.length - 1]];
	for (let n = 0; n < t.length - 1; n++) if (e >= t[n] && e <= t[n + 1]) {
		let r = (e - t[n]) / (t[n + 1] - t[n]);
		return Fs[t[n]] + (Fs[t[n + 1]] - Fs[t[n]]) * r;
	}
	return .72;
}
var Zs = Math.sqrt(5200), Qs = [
	60 / Zs,
	40 / Zs,
	0
], $s = Ws(Ns.x, Ns.y, Ns.z), ec = Ws(Ps.x, Ps.y, Ps.z), tc = 6, nc = 41, rc = 287, ic = [[
	0,
	0,
	0,
	0
], [
	0,
	0,
	0,
	0
]], ac = (e, t) => e.avgZ - t.avgZ;
function oc() {
	let e = Array(960);
	for (let t = 0; t < 960; t++) e[t] = {
		points: "",
		color: "",
		avgZ: Infinity
	};
	let t = Array(rc);
	for (let e = 0; e < rc; e++) t[e] = {
		x: 0,
		y: 0,
		z: 0,
		t: 0
	};
	return {
		quads: e,
		grid: t
	};
}
function sc(e, t, n, r) {
	let { quads: i, grid: a } = e, o = n * .392, s = n / 2, c = n / 2, l = Ls * Xs(n), u = t * Rs;
	Us(Vs(0, 0, 1, r * 2 * Math.PI), Qs[0], Qs[1], Qs[2], Hs);
	let d = Vs(Hs[0], Hs[1], Hs[2], u), f = zs(d, $s), p = zs(d, ec);
	ic[0] = f, ic[1] = p;
	let m = 0;
	for (let e = 0; e < 4; e++) {
		let t = ic[e >> 1], n = e & 1 ? -1 : 1;
		for (let e = 0; e <= tc; e++) {
			let r = n * (Math.PI / 2 - e / tc * l), i = Math.cos(r), o = Math.sin(r), s = Math.sin(e / tc * Math.PI), c = e * nc;
			for (let e = 0; e <= As; e++) {
				let n = e / As * Math.PI * 2;
				Us(t, i * Math.cos(n), o, i * Math.sin(n), Hs);
				let r = a[c + e];
				r.x = Hs[0], r.y = Hs[1], r.z = Hs[2], r.t = s;
			}
		}
		for (let e = 0; e < tc; e++) {
			let t = e * nc, n = (e + 1) * nc;
			for (let e = 0; e < As; e++) {
				let r = a[t + e], l = a[t + e + 1], u = a[n + e], d = a[n + e + 1];
				if ((r.t + l.t + u.t + d.t) * .25 < .001) continue;
				let f = (r.x + l.x + u.x + d.x) * .25, p = (r.y + l.y + u.y + d.y) * .25, h = (r.z + l.z + u.z + d.z) * .25, g = f * o, _ = p * o, v = r.x * o - g, y = r.y * o - _, b = Math.sqrt(v * v + y * y), x = b > 0 ? (b + .9) / b : 1, S = s + g + v * x, ee = c - _ - y * x, C = l.x * o - g, w = l.y * o - _, T = Math.sqrt(C * C + w * w), te = T > 0 ? (T + .9) / T : 1, ne = s + g + C * te, re = c - _ - w * te, E = d.x * o - g, D = d.y * o - _, O = Math.sqrt(E * E + D * D), ie = O > 0 ? (O + .9) / O : 1, ae = s + g + E * ie, oe = c - _ - D * ie, se = u.x * o - g, ce = u.y * o - _, le = Math.sqrt(se * se + ce * ce), ue = le > 0 ? (le + .9) / le : 1, de = s + g + se * ue, fe = c - _ - ce * ue, pe = i[m];
				pe.points = `${S},${ee} ${ne},${re} ${ae},${oe} ${de},${fe}`, pe.color = Js((f + 1) * .5), pe.avgZ = h, m++;
			}
		}
	}
	for (let e = m; e < 960; e++) i[e].avgZ = Infinity;
	return i.sort(ac), m;
}
var cc = A(({ size: e = 20, className: t, style: n, variant: r = "default" }, i) => {
	let a = M(null), o = M(null), s = M(null);
	s.current === null && (s.current = oc());
	let c = be(() => Array(960).fill(0), []);
	return ye(() => {
		let t = o.current, n = a.current;
		if (!t || !n) return;
		let i = t.querySelectorAll("polygon"), c = s.current, l = null, u = 0, d = 0, f = 0, p = null, m = "spin", h = !0, g = !1, _ = (e) => {
			let t = c.quads;
			for (let n = 0; n < i.length; n++) {
				let r = i[n];
				if (n < e) {
					let e = t[n];
					r.setAttribute("points", e.points), r.setAttribute("fill", e.color), r.hasAttribute("display") && r.removeAttribute("display");
				} else r.hasAttribute("display") || r.setAttribute("display", "none");
			}
		}, v = (t) => {
			g ||= (u = t, d = t, !0);
			let n = 0, i = !0;
			if (r === "continuous") {
				let e = Ds * 2, r = (t - u) % e / e;
				n = r < .5 ? r * 2 : (1 - r) * 2, i = !1;
			} else m === "spin" ? (n = Math.min((t - u) / Ds, 1), n >= 1 && (n = 0, m = "pause", f = t)) : (n = 0, t - f >= 500 && (m = "spin", u = t));
			let a = (t - d) / Os % 1, o = i ? Gs(n) : n, s = sc(c, o, e, a);
			_(s), l = requestAnimationFrame(v);
		}, y = () => {
			l === null && (l = requestAnimationFrame(v));
		}, b = () => {
			l !== null && (cancelAnimationFrame(l), l = null);
		};
		_(sc(c, 0, e, 0));
		let x = null;
		return typeof IntersectionObserver < "u" && (x = new IntersectionObserver((e) => {
			let t = e[0]?.isIntersecting ?? !0;
			if (t !== h) {
				if (h = t, t) {
					if (p !== null && g) {
						let e = performance.now() - p;
						u += e, d += e, f += e;
					}
					p = null, y();
				} else p = performance.now(), b();
			}
		}, { threshold: 0 }), x.observe(n)), y(), () => {
			b(), x?.disconnect();
		};
	}, [e, r]), /* @__PURE__ */ N("div", {
		ref: (e) => {
			a.current = e, i && (typeof i == "function" ? i(e) : i.current = e);
		},
		role: "progressbar",
		"aria-label": "Loading",
		className: D("shrink-0 globe-spin-anim", t),
		style: {
			width: e,
			height: e,
			...n
		},
		children: /* @__PURE__ */ N("svg", {
			ref: o,
			width: "100%",
			height: "100%",
			viewBox: `0 0 ${e} ${e}`,
			xmlns: "http://www.w3.org/2000/svg",
			shapeRendering: "geometricPrecision",
			style: {
				display: "block",
				overflow: "visible"
			},
			children: c.map((e, t) => /* @__PURE__ */ N("polygon", {
				stroke: "none",
				display: "none"
			}, t))
		})
	});
});
cc.displayName = "ChatSpinner";
//#endregion
//#region src/kits/ai/F0ActionItem/F0ActionItem.tsx
var lc = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 }
}, uc = ({ title: e, status: t, inGroup: n }) => {
	let r = {
		duration: S() ? 0 : .18,
		ease: [
			.33,
			1,
			.68,
			1
		]
	}, i = t === "inProgress", a = t === "executing", s = t === "completed", c = t === "writing";
	return /* @__PURE__ */ P("div", {
		className: "flex w-full items-start gap-1 text-f1-foreground-secondary",
		children: [/* @__PURE__ */ N("div", {
			className: "flex h-5 w-6 shrink-0 items-center justify-start",
			children: /* @__PURE__ */ P(te, {
				mode: "wait",
				children: [
					i && /* @__PURE__ */ N(T.div, {
						className: "flex h-5 w-5 shrink-0 items-center justify-center",
						...lc,
						transition: r,
						children: /* @__PURE__ */ N(o, {
							state: "animate",
							size: n ? "md" : "lg",
							icon: O
						})
					}, "inProgress"),
					(a || c) && /* @__PURE__ */ N("div", {
						className: "flex h-5 w-5 shrink-0 items-center justify-center",
						children: /* @__PURE__ */ N(cc, { variant: a ? "default" : "continuous" })
					}),
					s && /* @__PURE__ */ N(T.div, {
						...lc,
						className: "flex h-5 w-5 shrink-0 items-center justify-center",
						transition: r,
						children: /* @__PURE__ */ N(o, {
							color: "secondary",
							state: "animate",
							size: n ? "md" : "lg",
							icon: Es
						})
					}, "completed")
				]
			})
		}), e && /* @__PURE__ */ N("p", {
			className: D("text-pretty leading-5", (a || c) && "shine-text"),
			children: e
		})]
	});
}, dc = 250, fc = 12e4, pc = () => typeof navigator < "u" && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder < "u";
function mc({ onTranscribe: e, onPartial: t, onFinal: n, onError: r, maxDurationMs: i = fc, onAudio: a }) {
	let [o, s] = xe("idle"), [c, l] = xe(0), [u] = xe(pc), [d, f] = xe(null), p = M(null), m = M(null), h = M([]), g = M(null), _ = M(!1), v = M(null), y = M(null), b = M(0), x = M({
		onTranscribe: e,
		onPartial: t,
		onFinal: n,
		onError: r,
		onAudio: a
	});
	x.current = {
		onTranscribe: e,
		onPartial: t,
		onFinal: n,
		onError: r,
		onAudio: a
	};
	let S = j(() => {
		m.current?.getTracks().forEach((e) => e.stop()), m.current = null, p.current = null, f(null), v.current &&= (clearInterval(v.current), null), y.current &&= (clearTimeout(y.current), null);
	}, []), ee = j(async () => {
		let { onTranscribe: e, onPartial: t, onFinal: n, onError: r, onAudio: i } = x.current, a = h.current;
		if (h.current = [], a.length === 0 || !e && !i) {
			s("idle"), l(0);
			return;
		}
		let o = new Blob(a, { type: a[0]?.type || "audio/webm" });
		if (i) {
			let e = Date.now() - b.current;
			s("idle"), l(0), i(o, e);
			return;
		}
		if (!e) {
			s("idle"), l(0);
			return;
		}
		let c = new AbortController();
		g.current = c, s("transcribing");
		try {
			let r = await e(o, {
				onPartial: t,
				signal: c.signal
			});
			c.signal.aborted || n(r);
		} catch {
			c.signal.aborted || r("transcription-failed");
		} finally {
			g.current = null, s("idle"), l(0);
		}
	}, []), C = j(() => {
		let e = p.current;
		e && e.state !== "inactive" && e.stop();
	}, []), w = j(async () => {
		if (o !== "idle" || !e && !a || !u) return;
		_.current = !1, h.current = [];
		let t;
		try {
			t = await navigator.mediaDevices.getUserMedia({ audio: !0 });
		} catch (e) {
			r(e instanceof DOMException && e.name === "NotAllowedError" ? "permission-denied" : "device-error");
			return;
		}
		m.current = t, f(t);
		let n = new MediaRecorder(t);
		p.current = n, n.ondataavailable = (e) => {
			e.data.size > 0 && h.current.push(e.data);
		}, n.onstop = () => {
			if (S(), _.current) {
				h.current = [], s("idle"), l(0);
				return;
			}
			ee();
		}, n.start(dc), b.current = Date.now(), s("recording"), l(0), v.current = setInterval(() => {
			l(Date.now() - b.current);
		}, 200), y.current = setTimeout(C, i);
	}, [
		o,
		e,
		a,
		u,
		r,
		S,
		ee,
		C,
		i
	]), T = j(() => {
		o === "recording" ? (_.current = !0, C()) : o === "transcribing" && (g.current?.abort(), g.current = null, s("idle"), l(0));
	}, [o, C]);
	return ye(() => () => {
		_.current = !0, g.current?.abort();
		let e = p.current;
		e && e.state !== "inactive" && e.stop(), S();
	}, [S]), {
		status: o,
		durationMs: c,
		isSupported: u,
		stream: d,
		start: w,
		stop: C,
		cancel: T
	};
}
//#endregion
//#region src/components/F0FileItem/F0FileItem.tsx
var hc = ["md", "lg"], gc = t({
	base: "flex w-fit flex-row items-center overflow-hidden bg-f1-background-tertiary rounded-[10px]",
	variants: { size: {
		md: "max-w-48 gap-2 py-0.5 pl-0.5 pr-1.5",
		lg: "max-w-56 gap-2.5 p-1"
	} },
	defaultVariants: { size: "md" }
}), _c = {
	md: "md",
	lg: "md"
}, vc = {
	md: "sm",
	lg: "md"
}, yc = A(({ file: e, actions: t = [], disabled: n = !1, size: i = "md", className: a, ...o }, s) => {
	let c = t.length > 0, l = t.length === 1 ? t[0] : null, u = t.map((e) => ({
		label: e.label,
		icon: e.icon,
		critical: e.critical,
		onClick: n ? void 0 : e.onClick
	}));
	return /* @__PURE__ */ P("div", {
		ref: s,
		className: D(gc({ size: i }), a),
		...o,
		children: [
			/* @__PURE__ */ N(ue, {
				file: e,
				size: _c[i]
			}),
			/* @__PURE__ */ N(r, {
				className: D("text-neutral-1000 grow text-sm font-medium", !c && "pr-3"),
				children: e.name
			}),
			c && (l ? /* @__PURE__ */ N(ie, {
				label: l.label,
				size: vc[i],
				icon: l.icon ?? se,
				disabled: n,
				onClick: n ? void 0 : l.onClick,
				hideLabel: !0,
				variant: "ghost"
			}) : /* @__PURE__ */ N(ce, {
				items: u,
				icon: le,
				size: vc[i]
			}))
		]
	});
});
yc.displayName = "F0FileItem";
var bc = ee("F0FileItem", n(yc)), xc = bc, Sc = 2, Cc = 70, wc = .08, Tc = 6, Ec = .6, Dc = () => {
	if (typeof window > "u") return;
	let e = window;
	return e.AudioContext ?? e.webkitAudioContext;
}, Oc = ({ stream: e, className: t, anchor: n = "right" }) => {
	let r = M(null), [i, a] = xe(0), [o, s] = xe([]);
	ye(() => {
		let e = r.current;
		if (!e) return;
		let t = () => {
			let t = e.clientWidth;
			a(Math.max(1, Math.floor((t + Sc) / 4)));
		};
		if (t(), typeof ResizeObserver > "u") return;
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []), ye(() => {
		let t = Dc();
		if (!e || !t || i === 0) {
			s([]);
			return;
		}
		let n = new t(), r = n.createMediaStreamSource(e), a = n.createAnalyser();
		a.fftSize = 1024, r.connect(a);
		let o = new Uint8Array(a.fftSize), c = setInterval(() => {
			a.getByteTimeDomainData(o);
			let e = 0;
			for (let t = 0; t < o.length; t++) {
				let n = (o[t] - 128) / 128;
				e += n * n;
			}
			let t = Math.sqrt(e / o.length), n = Math.min(1, (t * Tc) ** +Ec);
			s((e) => {
				let t = e.length >= i ? e.slice(e.length - i + 1) : e.slice();
				return t.push(n), t;
			});
		}, Cc);
		return () => {
			clearInterval(c), r.disconnect(), a.disconnect(), n.close(), s([]);
		};
	}, [e, i]);
	let c = n === "left" ? [...o].reverse() : o;
	return /* @__PURE__ */ N("div", {
		ref: r,
		className: D("flex h-6 items-center overflow-hidden gap-0.5", n === "left" ? "justify-start" : "justify-end", t),
		"aria-hidden": "true",
		children: c.map((e, t) => /* @__PURE__ */ N("span", {
			className: "shrink-0 rounded-full bg-f1-foreground-secondary w-0.5",
			style: { height: `${(wc + e * .92) * 100}%` }
		}, t))
	});
}, kc = Symbol("Let zodToJsonSchema decide on which parser to use"), Ac = {
	name: void 0,
	$refStrategy: "root",
	basePath: ["#"],
	effectStrategy: "input",
	pipeStrategy: "all",
	dateStrategy: "format:date-time",
	mapStrategy: "entries",
	removeAdditionalStrategy: "passthrough",
	allowedAdditionalProperties: !0,
	rejectedAdditionalProperties: !1,
	definitionPath: "definitions",
	target: "jsonSchema7",
	strictUnions: !1,
	definitions: {},
	errorMessages: !1,
	markdownDescription: !1,
	patternStrategy: "escape",
	applyRegexFlags: !1,
	emailStrategy: "format:email",
	base64Strategy: "contentEncoding:base64",
	nameStrategy: "ref",
	openAiAnyTypeName: "OpenAiAnyType"
}, jc = (e) => typeof e == "string" ? {
	...Ac,
	name: e
} : {
	...Ac,
	...e
}, Mc = (e) => {
	let t = jc(e), n = t.name === void 0 ? t.basePath : [
		...t.basePath,
		t.definitionPath,
		t.name
	];
	return {
		...t,
		flags: { hasReferencedOpenAiAnyType: !1 },
		currentPath: n,
		propertyPath: void 0,
		seen: new Map(Object.entries(t.definitions).map(([e, n]) => [n._def, {
			def: n._def,
			path: [
				...t.basePath,
				t.definitionPath,
				e
			],
			jsonSchema: void 0
		}]))
	};
};
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/errorMessages.js
function Nc(e, t, n, r) {
	r?.errorMessages && n && (e.errorMessage = {
		...e.errorMessage,
		[t]: n
	});
}
function X(e, t, n, r, i) {
	e[t] = n, Nc(e, t, r, i);
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/getRelativePath.js
var Pc = (e, t) => {
	let n = 0;
	for (; n < e.length && n < t.length && e[n] === t[n]; n++);
	return [(e.length - n).toString(), ...t.slice(n)].join("/");
};
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/any.js
function Z(e) {
	if (e.target !== "openAi") return {};
	let t = [
		...e.basePath,
		e.definitionPath,
		e.openAiAnyTypeName
	];
	return e.flags.hasReferencedOpenAiAnyType = !0, { $ref: e.$refStrategy === "relative" ? Pc(t, e.currentPath) : t.join("/") };
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/array.js
function Fc(e, t) {
	let n = { type: "array" };
	return e.type?._def && e.type?._def?.typeName !== G.ZodAny && (n.items = $(e.type._def, {
		...t,
		currentPath: [...t.currentPath, "items"]
	})), e.minLength && X(n, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && X(n, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (X(n, "minItems", e.exactLength.value, e.exactLength.message, t), X(n, "maxItems", e.exactLength.value, e.exactLength.message, t)), n;
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js
function Ic(e, t) {
	let n = {
		type: "integer",
		format: "int64"
	};
	if (!e.checks) return n;
	for (let r of e.checks) switch (r.kind) {
		case "min":
			t.target === "jsonSchema7" ? r.inclusive ? X(n, "minimum", r.value, r.message, t) : X(n, "exclusiveMinimum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMinimum = !0), X(n, "minimum", r.value, r.message, t));
			break;
		case "max":
			t.target === "jsonSchema7" ? r.inclusive ? X(n, "maximum", r.value, r.message, t) : X(n, "exclusiveMaximum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMaximum = !0), X(n, "maximum", r.value, r.message, t));
			break;
		case "multipleOf": X(n, "multipleOf", r.value, r.message, t);
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js
function Lc() {
	return { type: "boolean" };
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js
function Rc(e, t) {
	return $(e.type._def, t);
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js
var zc = (e, t) => $(e.innerType._def, t);
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/date.js
function Bc(e, t, n) {
	let r = n ?? t.dateStrategy;
	if (Array.isArray(r)) return { anyOf: r.map((n, r) => Bc(e, t, n)) };
	switch (r) {
		case "string":
		case "format:date-time": return {
			type: "string",
			format: "date-time"
		};
		case "format:date": return {
			type: "string",
			format: "date"
		};
		case "integer": return Vc(e, t);
	}
}
var Vc = (e, t) => {
	let n = {
		type: "integer",
		format: "unix-time"
	};
	if (t.target === "openApi3") return n;
	for (let r of e.checks) switch (r.kind) {
		case "min":
			X(n, "minimum", r.value, r.message, t);
			break;
		case "max": X(n, "maximum", r.value, r.message, t);
	}
	return n;
};
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/default.js
function Hc(e, t) {
	return {
		...$(e.innerType._def, t),
		default: e.defaultValue()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js
function Uc(e, t) {
	return t.effectStrategy === "input" ? $(e.schema._def, t) : Z(t);
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js
function Wc(e) {
	return {
		type: "string",
		enum: Array.from(e.values)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js
var Gc = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Kc(e, t) {
	let n = [$(e.left._def, {
		...t,
		currentPath: [
			...t.currentPath,
			"allOf",
			"0"
		]
	}), $(e.right._def, {
		...t,
		currentPath: [
			...t.currentPath,
			"allOf",
			"1"
		]
	})].filter((e) => !!e), r = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0, i = [];
	return n.forEach((e) => {
		if (Gc(e)) i.push(...e.allOf), e.unevaluatedProperties === void 0 && (r = void 0);
		else {
			let t = e;
			if ("additionalProperties" in e && e.additionalProperties === !1) {
				let { additionalProperties: n, ...r } = e;
				t = r;
			} else r = void 0;
			i.push(t);
		}
	}), i.length ? {
		allOf: i,
		...r
	} : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js
function qc(e, t) {
	let n = typeof e.value;
	return n !== "bigint" && n !== "number" && n !== "boolean" && n !== "string" ? { type: Array.isArray(e.value) ? "array" : "object" } : t.target === "openApi3" ? {
		type: n === "bigint" ? "integer" : n,
		enum: [e.value]
	} : {
		type: n === "bigint" ? "integer" : n,
		const: e.value
	};
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/string.js
var Jc = void 0, Yc = {
	cuid: /^[cC][^\s-]{8,}$/,
	cuid2: /^[0-9a-z]+$/,
	ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
	email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
	emoji: () => (Jc === void 0 && (Jc = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Jc),
	uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
	ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	nanoid: /^[a-zA-Z0-9_-]{21}$/,
	jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function Xc(e, t) {
	let n = { type: "string" };
	if (e.checks) for (let r of e.checks) switch (r.kind) {
		case "min":
			X(n, "minLength", typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, r.message, t);
			break;
		case "max":
			X(n, "maxLength", typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value, r.message, t);
			break;
		case "email":
			switch (t.emailStrategy) {
				case "format:email":
					el(n, "email", r.message, t);
					break;
				case "format:idn-email":
					el(n, "idn-email", r.message, t);
					break;
				case "pattern:zod": Q(n, Yc.email, r.message, t);
			}
			break;
		case "url":
			el(n, "uri", r.message, t);
			break;
		case "uuid":
			el(n, "uuid", r.message, t);
			break;
		case "regex":
			Q(n, r.regex, r.message, t);
			break;
		case "cuid":
			Q(n, Yc.cuid, r.message, t);
			break;
		case "cuid2":
			Q(n, Yc.cuid2, r.message, t);
			break;
		case "startsWith":
			Q(n, RegExp(`^${Zc(r.value, t)}`), r.message, t);
			break;
		case "endsWith":
			Q(n, RegExp(`${Zc(r.value, t)}$`), r.message, t);
			break;
		case "datetime":
			el(n, "date-time", r.message, t);
			break;
		case "date":
			el(n, "date", r.message, t);
			break;
		case "time":
			el(n, "time", r.message, t);
			break;
		case "duration":
			el(n, "duration", r.message, t);
			break;
		case "length":
			X(n, "minLength", typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, r.message, t), X(n, "maxLength", typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value, r.message, t);
			break;
		case "includes":
			Q(n, RegExp(Zc(r.value, t)), r.message, t);
			break;
		case "ip":
			r.version !== "v6" && el(n, "ipv4", r.message, t), r.version !== "v4" && el(n, "ipv6", r.message, t);
			break;
		case "base64url":
			Q(n, Yc.base64url, r.message, t);
			break;
		case "jwt":
			Q(n, Yc.jwt, r.message, t);
			break;
		case "cidr":
			r.version !== "v6" && Q(n, Yc.ipv4Cidr, r.message, t), r.version !== "v4" && Q(n, Yc.ipv6Cidr, r.message, t);
			break;
		case "emoji":
			Q(n, Yc.emoji(), r.message, t);
			break;
		case "ulid":
			Q(n, Yc.ulid, r.message, t);
			break;
		case "base64":
			switch (t.base64Strategy) {
				case "format:binary":
					el(n, "binary", r.message, t);
					break;
				case "contentEncoding:base64":
					X(n, "contentEncoding", "base64", r.message, t);
					break;
				case "pattern:zod": Q(n, Yc.base64, r.message, t);
			}
			break;
		case "nanoid": Q(n, Yc.nanoid, r.message, t);
	}
	return n;
}
function Zc(e, t) {
	return t.patternStrategy === "escape" ? $c(e) : e;
}
var Qc = /* @__PURE__ */ new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function $c(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) Qc.has(e[n]) || (t += "\\"), t += e[n];
	return t;
}
function el(e, t, n, r) {
	e.format || e.anyOf?.some((e) => e.format) ? (e.anyOf ||= [], e.format && (e.anyOf.push({
		format: e.format,
		...e.errorMessage && r.errorMessages && { errorMessage: { format: e.errorMessage.format } }
	}), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
		format: t,
		...n && r.errorMessages && { errorMessage: { format: n } }
	})) : X(e, "format", t, n, r);
}
function Q(e, t, n, r) {
	e.pattern || e.allOf?.some((e) => e.pattern) ? (e.allOf ||= [], e.pattern && (e.allOf.push({
		pattern: e.pattern,
		...e.errorMessage && r.errorMessages && { errorMessage: { pattern: e.errorMessage.pattern } }
	}), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
		pattern: tl(t, r),
		...n && r.errorMessages && { errorMessage: { pattern: n } }
	})) : X(e, "pattern", tl(t, r), n, r);
}
function tl(e, t) {
	if (!t.applyRegexFlags || !e.flags) return e.source;
	let n = {
		i: e.flags.includes("i"),
		m: e.flags.includes("m"),
		s: e.flags.includes("s")
	}, r = n.i ? e.source.toLowerCase() : e.source, i = "", a = !1, o = !1, s = !1;
	for (let e = 0; e < r.length; e++) {
		if (a) {
			i += r[e], a = !1;
			continue;
		}
		if (n.i) {
			if (o) {
				if (r[e].match(/[a-z]/)) {
					s ? (i += r[e], i += `${r[e - 2]}-${r[e]}`.toUpperCase(), s = !1) : r[e + 1] === "-" && r[e + 2]?.match(/[a-z]/) ? (i += r[e], s = !0) : i += `${r[e]}${r[e].toUpperCase()}`;
					continue;
				}
			} else if (r[e].match(/[a-z]/)) {
				i += `[${r[e]}${r[e].toUpperCase()}]`;
				continue;
			}
		}
		if (n.m) {
			if (r[e] === "^") {
				i += "(^|(?<=[\r\n]))";
				continue;
			}
			if (r[e] === "$") {
				i += "($|(?=[\r\n]))";
				continue;
			}
		}
		if (n.s && r[e] === ".") {
			i += o ? `${r[e]}\r\n` : `[${r[e]}\r\n]`;
			continue;
		}
		i += r[e], r[e] === "\\" ? a = !0 : o && r[e] === "]" ? o = !1 : !o && r[e] === "[" && (o = !0);
	}
	try {
		new RegExp(i);
	} catch {
		return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e.source;
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/record.js
function nl(e, t) {
	if (t.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), t.target === "openApi3" && e.keyType?._def.typeName === G.ZodEnum) return {
		type: "object",
		required: e.keyType._def.values,
		properties: e.keyType._def.values.reduce((n, r) => ({
			...n,
			[r]: $(e.valueType._def, {
				...t,
				currentPath: [
					...t.currentPath,
					"properties",
					r
				]
			}) ?? Z(t)
		}), {}),
		additionalProperties: t.rejectedAdditionalProperties
	};
	let n = {
		type: "object",
		additionalProperties: $(e.valueType._def, {
			...t,
			currentPath: [...t.currentPath, "additionalProperties"]
		}) ?? t.allowedAdditionalProperties
	};
	if (t.target === "openApi3") return n;
	if (e.keyType?._def.typeName === G.ZodString && e.keyType._def.checks?.length) {
		let { type: r, ...i } = Xc(e.keyType._def, t);
		return {
			...n,
			propertyNames: i
		};
	}
	if (e.keyType?._def.typeName === G.ZodEnum) return {
		...n,
		propertyNames: { enum: e.keyType._def.values }
	};
	if (e.keyType?._def.typeName === G.ZodBranded && e.keyType._def.type._def.typeName === G.ZodString && e.keyType._def.type._def.checks?.length) {
		let { type: r, ...i } = Rc(e.keyType._def, t);
		return {
			...n,
			propertyNames: i
		};
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/map.js
function rl(e, t) {
	return t.mapStrategy === "record" ? nl(e, t) : {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [$(e.keyType._def, {
				...t,
				currentPath: [
					...t.currentPath,
					"items",
					"items",
					"0"
				]
			}) || Z(t), $(e.valueType._def, {
				...t,
				currentPath: [
					...t.currentPath,
					"items",
					"items",
					"1"
				]
			}) || Z(t)],
			minItems: 2,
			maxItems: 2
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js
function il(e) {
	let t = e.values, n = Object.keys(e.values).filter((e) => typeof t[t[e]] != "number").map((e) => t[e]), r = Array.from(new Set(n.map((e) => typeof e)));
	return {
		type: r.length === 1 ? r[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/never.js
function al(e) {
	return e.target === "openAi" ? void 0 : { not: Z({
		...e,
		currentPath: [...e.currentPath, "not"]
	}) };
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/null.js
function ol(e) {
	return e.target === "openApi3" ? {
		enum: ["null"],
		nullable: !0
	} : { type: "null" };
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/union.js
var sl = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};
function cl(e, t) {
	if (t.target === "openApi3") return ll(e, t);
	let n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
	if (n.every((e) => e._def.typeName in sl && (!e._def.checks || !e._def.checks.length))) {
		let e = n.reduce((e, t) => {
			let n = sl[t._def.typeName];
			return n && !e.includes(n) ? [...e, n] : e;
		}, []);
		return { type: e.length > 1 ? e : e[0] };
	}
	if (n.every((e) => e._def.typeName === "ZodLiteral" && !e.description)) {
		let e = n.reduce((e, t) => {
			let n = typeof t._def.value;
			switch (n) {
				case "string":
				case "number":
				case "boolean": return [...e, n];
				case "bigint": return [...e, "integer"];
				case "object": if (t._def.value === null) return [...e, "null"];
				default: return e;
			}
		}, []);
		if (e.length === n.length) {
			let t = e.filter((e, t, n) => n.indexOf(e) === t);
			return {
				type: t.length > 1 ? t : t[0],
				enum: n.reduce((e, t) => e.includes(t._def.value) ? e : [...e, t._def.value], [])
			};
		}
	} else if (n.every((e) => e._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: n.reduce((e, t) => [...e, ...t._def.values.filter((t) => !e.includes(t))], [])
	};
	return ll(e, t);
}
var ll = (e, t) => {
	let n = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((e, n) => $(e._def, {
		...t,
		currentPath: [
			...t.currentPath,
			"anyOf",
			`${n}`
		]
	})).filter((e) => !!e && (!t.strictUnions || typeof e == "object" && Object.keys(e).length > 0));
	return n.length ? { anyOf: n } : void 0;
};
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
function ul(e, t) {
	if ([
		"ZodString",
		"ZodNumber",
		"ZodBigInt",
		"ZodBoolean",
		"ZodNull"
	].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length)) return t.target === "openApi3" ? {
		type: sl[e.innerType._def.typeName],
		nullable: !0
	} : { type: [sl[e.innerType._def.typeName], "null"] };
	if (t.target === "openApi3") {
		let n = $(e.innerType._def, {
			...t,
			currentPath: [...t.currentPath]
		});
		return n && "$ref" in n ? {
			allOf: [n],
			nullable: !0
		} : n && {
			...n,
			nullable: !0
		};
	}
	let n = $(e.innerType._def, {
		...t,
		currentPath: [
			...t.currentPath,
			"anyOf",
			"0"
		]
	});
	return n && { anyOf: [n, { type: "null" }] };
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/number.js
function dl(e, t) {
	let n = { type: "number" };
	if (!e.checks) return n;
	for (let r of e.checks) switch (r.kind) {
		case "int":
			n.type = "integer", Nc(n, "type", r.message, t);
			break;
		case "min":
			t.target === "jsonSchema7" ? r.inclusive ? X(n, "minimum", r.value, r.message, t) : X(n, "exclusiveMinimum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMinimum = !0), X(n, "minimum", r.value, r.message, t));
			break;
		case "max":
			t.target === "jsonSchema7" ? r.inclusive ? X(n, "maximum", r.value, r.message, t) : X(n, "exclusiveMaximum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMaximum = !0), X(n, "maximum", r.value, r.message, t));
			break;
		case "multipleOf": X(n, "multipleOf", r.value, r.message, t);
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/object.js
function fl(e, t) {
	let n = t.target === "openAi", r = {
		type: "object",
		properties: {}
	}, i = [], a = e.shape();
	for (let e in a) {
		let o = a[e];
		if (o === void 0 || o._def === void 0) continue;
		let s = ml(o);
		s && n && (o._def.typeName === "ZodOptional" && (o = o._def.innerType), o.isNullable() || (o = o.nullable()), s = !1);
		let c = $(o._def, {
			...t,
			currentPath: [
				...t.currentPath,
				"properties",
				e
			],
			propertyPath: [
				...t.currentPath,
				"properties",
				e
			]
		});
		c !== void 0 && (r.properties[e] = c, s || i.push(e));
	}
	i.length && (r.required = i);
	let o = pl(e, t);
	return o !== void 0 && (r.additionalProperties = o), r;
}
function pl(e, t) {
	if (e.catchall._def.typeName !== "ZodNever") return $(e.catchall._def, {
		...t,
		currentPath: [...t.currentPath, "additionalProperties"]
	});
	switch (e.unknownKeys) {
		case "passthrough": return t.allowedAdditionalProperties;
		case "strict": return t.rejectedAdditionalProperties;
		case "strip": return t.removeAdditionalStrategy === "strict" ? t.allowedAdditionalProperties : t.rejectedAdditionalProperties;
	}
}
function ml(e) {
	try {
		return e.isOptional();
	} catch {
		return !0;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js
var hl = (e, t) => {
	if (t.currentPath.toString() === t.propertyPath?.toString()) return $(e.innerType._def, t);
	let n = $(e.innerType._def, {
		...t,
		currentPath: [
			...t.currentPath,
			"anyOf",
			"1"
		]
	});
	return n ? { anyOf: [{ not: Z(t) }, n] } : Z(t);
}, gl = (e, t) => {
	if (t.pipeStrategy === "input") return $(e.in._def, t);
	if (t.pipeStrategy === "output") return $(e.out._def, t);
	let n = $(e.in._def, {
		...t,
		currentPath: [
			...t.currentPath,
			"allOf",
			"0"
		]
	});
	return { allOf: [n, $(e.out._def, {
		...t,
		currentPath: [
			...t.currentPath,
			"allOf",
			n ? "1" : "0"
		]
	})].filter((e) => e !== void 0) };
};
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js
function _l(e, t) {
	return $(e.type._def, t);
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/set.js
function vl(e, t) {
	let n = {
		type: "array",
		uniqueItems: !0,
		items: $(e.valueType._def, {
			...t,
			currentPath: [...t.currentPath, "items"]
		})
	};
	return e.minSize && X(n, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && X(n, "maxItems", e.maxSize.value, e.maxSize.message, t), n;
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js
function yl(e, t) {
	return e.rest ? {
		type: "array",
		minItems: e.items.length,
		items: e.items.map((e, n) => $(e._def, {
			...t,
			currentPath: [
				...t.currentPath,
				"items",
				`${n}`
			]
		})).reduce((e, t) => t === void 0 ? e : [...e, t], []),
		additionalItems: $(e.rest._def, {
			...t,
			currentPath: [...t.currentPath, "additionalItems"]
		})
	} : {
		type: "array",
		minItems: e.items.length,
		maxItems: e.items.length,
		items: e.items.map((e, n) => $(e._def, {
			...t,
			currentPath: [
				...t.currentPath,
				"items",
				`${n}`
			]
		})).reduce((e, t) => t === void 0 ? e : [...e, t], [])
	};
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js
function bl(e) {
	return { not: Z(e) };
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js
function xl(e) {
	return Z(e);
}
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js
var Sl = (e, t) => $(e.innerType._def, t), Cl = (e, t, n) => {
	switch (t) {
		case G.ZodString: return Xc(e, n);
		case G.ZodNumber: return dl(e, n);
		case G.ZodObject: return fl(e, n);
		case G.ZodBigInt: return Ic(e, n);
		case G.ZodBoolean: return Lc();
		case G.ZodDate: return Bc(e, n);
		case G.ZodUndefined: return bl(n);
		case G.ZodNull: return ol(n);
		case G.ZodArray: return Fc(e, n);
		case G.ZodUnion:
		case G.ZodDiscriminatedUnion: return cl(e, n);
		case G.ZodIntersection: return Kc(e, n);
		case G.ZodTuple: return yl(e, n);
		case G.ZodRecord: return nl(e, n);
		case G.ZodLiteral: return qc(e, n);
		case G.ZodEnum: return Wc(e);
		case G.ZodNativeEnum: return il(e);
		case G.ZodNullable: return ul(e, n);
		case G.ZodOptional: return hl(e, n);
		case G.ZodMap: return rl(e, n);
		case G.ZodSet: return vl(e, n);
		case G.ZodLazy: return () => e.getter()._def;
		case G.ZodPromise: return _l(e, n);
		case G.ZodNaN:
		case G.ZodNever: return al(n);
		case G.ZodEffects: return Uc(e, n);
		case G.ZodAny: return Z(n);
		case G.ZodUnknown: return xl(n);
		case G.ZodDefault: return Hc(e, n);
		case G.ZodBranded: return Rc(e, n);
		case G.ZodReadonly: return Sl(e, n);
		case G.ZodCatch: return zc(e, n);
		case G.ZodPipeline: return gl(e, n);
		case G.ZodFunction:
		case G.ZodVoid:
		case G.ZodSymbol: return;
		default: return ((e) => void 0)(t);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/zod-to-json-schema@3.25.1_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parseDef.js
function $(e, t, n = !1) {
	let r = t.seen.get(e);
	if (t.override) {
		let i = t.override?.(e, t, r, n);
		if (i !== kc) return i;
	}
	if (r && !n) {
		let e = wl(r, t);
		if (e !== void 0) return e;
	}
	let i = {
		def: e,
		path: t.currentPath,
		jsonSchema: void 0
	};
	t.seen.set(e, i);
	let a = Cl(e, e.typeName, t), o = typeof a == "function" ? $(a(), t) : a;
	if (o && Tl(e, t, o), t.postProcess) {
		let n = t.postProcess(o, e, t);
		return i.jsonSchema = o, n;
	}
	return i.jsonSchema = o, o;
}
var wl = (e, t) => {
	switch (t.$refStrategy) {
		case "root": return { $ref: e.path.join("/") };
		case "relative": return { $ref: Pc(t.currentPath, e.path) };
		case "none":
		case "seen": return e.path.length < t.currentPath.length && e.path.every((e, n) => t.currentPath[n] === e) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), Z(t)) : t.$refStrategy === "seen" ? Z(t) : void 0;
	}
}, Tl = (e, t, n) => (e.description && (n.description = e.description, t.markdownDescription && (n.markdownDescription = e.description)), n), El = (e, t) => {
	let n = Mc(t), r = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((e, [t, r]) => ({
		...e,
		[t]: $(r._def, {
			...n,
			currentPath: [
				...n.basePath,
				n.definitionPath,
				t
			]
		}, !0) ?? Z(n)
	}), {}) : void 0, i = typeof t == "string" ? t : t?.nameStrategy === "title" ? void 0 : t?.name, a = $(e._def, i === void 0 ? n : {
		...n,
		currentPath: [
			...n.basePath,
			n.definitionPath,
			i
		]
	}, !1) ?? Z(n), o = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
	o !== void 0 && (a.title = o), n.flags.hasReferencedOpenAiAnyType && (r ||= {}, r[n.openAiAnyTypeName] || (r[n.openAiAnyTypeName] = {
		type: [
			"string",
			"number",
			"integer",
			"boolean",
			"array",
			"null"
		],
		items: { $ref: n.$refStrategy === "relative" ? "1" : [
			...n.basePath,
			n.definitionPath,
			n.openAiAnyTypeName
		].join("/") }
	}));
	let s = i === void 0 ? r ? {
		...a,
		[n.definitionPath]: r
	} : a : {
		$ref: [
			...n.$refStrategy === "relative" ? [] : n.basePath,
			n.definitionPath,
			i
		].join("/"),
		[n.definitionPath]: {
			...r,
			[i]: a
		}
	};
	return n.target === "jsonSchema7" ? s.$schema = "http://json-schema.org/draft-07/schema#" : (n.target === "jsonSchema2019-09" || n.target === "openAi") && (s.$schema = "https://json-schema.org/draft/2019-09/schema#"), n.target === "openAi" && ("anyOf" in s || "oneOf" in s || "allOf" in s || "type" in s && Array.isArray(s.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), s;
};
//#endregion
//#region src/patterns/F0Form/F0AiFormRegistry.tsx
function Dl(e) {
	return "_brand" in e && (e._brand === "single" || e._brand === "per-section");
}
function Ol(e) {
	let t = e;
	for (; t;) {
		let e = t._def;
		if ("shape" in e && typeof e.shape == "function") return { shape: e.shape() };
		if ("schema" in e && e.schema instanceof W) {
			t = e.schema;
			continue;
		}
		if ("innerType" in e && e.innerType instanceof W) {
			t = e.innerType;
			continue;
		}
		break;
	}
	return {};
}
function kl(e) {
	if (!Dl(e)) return e;
	let t = e._brand === "per-section" ? Object.fromEntries(Object.entries(e.schema).map(([e, t]) => [e, Object.keys(Ol(t).shape ?? {})])) : void 0, n = e._brand === "single" ? e.schema : (() => {
		let t = {};
		for (let [n, r] of Object.entries(e.schema)) {
			let e = Ol(r);
			if (e.shape) for (let [r, i] of Object.entries(e.shape)) r in t && console.warn(`[toAvailableFormDefinition] Duplicate field "${r}" found in section "${n}". The later section's field will overwrite the earlier one.`), t[r] = i;
		}
		return Mr(t);
	})(), r = e.onSubmit, i = r ? async (n) => {
		if (e._brand === "single") await r({ data: n });
		else {
			let i = e.schema, a = {};
			for (let [e, r] of Object.entries(t)) {
				let t = {};
				for (let e of r) e in n && (t[e] = n[e]);
				a[e] = t;
			}
			let o = Object.keys(i);
			for (let e of o) await r({
				sectionId: e,
				data: a[e],
				fullData: a
			});
		}
	} : void 0, a;
	if (e._brand === "per-section" && e.defaultValues) {
		a = {};
		for (let t of Object.values(e.defaultValues)) Object.assign(a, t);
	} else a = e.defaultValues;
	let o = a;
	if (e.defaultValuesFn) {
		if (e._brand === "per-section") {
			let t = e.defaultValuesFn;
			o = async (e) => {
				let n = await t(e), r = {};
				for (let e of Object.values(n)) Object.assign(r, e);
				return r;
			};
		} else o = e.defaultValuesFn;
	}
	return {
		name: e.name,
		schema: n,
		defaultValues: o,
		defaultValuesParamsSchema: e.defaultValuesParamsSchema,
		sections: e.sections,
		onSubmit: i,
		description: e.description,
		module: e.module,
		steps: e.steps,
		submitConfig: e.submitConfig,
		errorTriggerMode: e.errorTriggerMode
	};
}
function Al(e) {
	return kl(e);
}
function jl(e, t = {}) {
	if (typeof e == "function") {
		let n = e(t);
		return n && typeof n.then == "function" ? {} : n;
	}
	return e ?? {};
}
function Ml(e, t = {}, n) {
	let r = { ...t }, i = { ...t }, a = /* @__PURE__ */ new Set();
	return {
		ref: { current: {
			submit: async () => {
				let t = e.safeParse(r);
				if (!t.success) throw Error(t.error.issues.map((e) => e.message).join(", "));
				await n?.(t.data);
			},
			reset: () => {
				r = { ...i }, a.clear();
			},
			isDirty: () => JSON.stringify(r) !== JSON.stringify(i),
			getValues: () => ({ ...r }),
			setValue: (e, t, n) => {
				r = {
					...r,
					[e]: t
				}, a.add(e);
			},
			setValues: (e, t) => {
				r = {
					...r,
					...e
				};
				for (let t of Object.keys(e)) a.add(t);
			},
			trigger: async (t) => {
				if (t) {
					let n = bs(e).shape?.[t];
					return !n || n.safeParse(r[t]).success;
				}
				return e.safeParse(r).success;
			},
			getErrors: () => {
				let t = e.safeParse(r);
				if (t.success) return {};
				let n = {};
				for (let e of t.error.issues) {
					let t = e.path.join(".");
					t && !n[t] && (n[t] = e.message);
				}
				return n;
			},
			getFieldNames: () => {
				let t = bs(e);
				return Object.keys(t.shape ?? {});
			},
			actionBar: { wiggle: () => {} },
			_setStateCallback: () => {}
		} },
		dirtyFields: a
	};
}
function Nl(e) {
	let t = bs(e).shape;
	if (!t) return {};
	let n = {};
	for (let [e, r] of Object.entries(t)) {
		let t = vs(r), i = r.description;
		(t?.label || i) && (n[e] = {
			label: t?.label ?? e,
			...t?.section && { section: t.section },
			...t?.placeholder && { placeholder: t.placeholder },
			...t?.helpText && { helpText: t.helpText },
			...i && { description: i },
			...t?.customFieldName && { customFieldName: t.customFieldName },
			...xs(r, t ?? { label: e }) !== "text" && { fieldType: xs(r, t ?? { label: e }) }
		});
	}
	return n;
}
function Pl(e) {
	if (!e) return {};
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = {
		title: r.title,
		...r.description && { description: r.description }
	};
	return t;
}
var Fl = _e(null);
function Il({ children: e, availableFormDefinitions: t }) {
	let n = be(() => t?.map(kl), [t]), r = M(/* @__PURE__ */ new Map()), i = M(""), a = M(/* @__PURE__ */ new Map()), o = M(/* @__PURE__ */ new Set()), s = M(/* @__PURE__ */ new Map()), c = M(/* @__PURE__ */ new Map()), [l, u] = xe([]), [d, f] = xe([]), [p, m] = xe(null), h = M(null), g = M({}), _ = j(() => {
		queueMicrotask(() => {
			let e = Array.from(r.current.entries()), t = [], n = [], a = null;
			for (let [r, i] of e) {
				let e = i.ref.current;
				if (e && (i.virtual ? n.push({
					formName: r,
					...i.description ? { description: i.description } : {},
					...i.module ? { module: i.module } : {},
					cardTitle: "",
					cardDescription: "",
					formSchema: El(i.schema),
					fieldDescriptions: Nl(i.schema),
					sectionDescriptions: Pl(i.sections),
					formValues: e.getValues(),
					formErrors: e.getErrors(),
					isDirty: e.isDirty(),
					...i.defaultValuesParamsSchema ? { defaultValuesParamsSchema: El(i.defaultValuesParamsSchema) } : {},
					...i.defaultValuesParams ? { defaultValuesParams: i.defaultValuesParams } : {}
				}) : t.push({
					formName: r,
					...i.description ? { description: i.description } : {},
					...i.module ? { module: i.module } : {},
					cardTitle: "",
					cardDescription: "",
					formSchema: El(i.schema),
					fieldDescriptions: Nl(i.schema),
					sectionDescriptions: Pl(i.sections),
					formValues: e.getValues(),
					formErrors: e.getErrors(),
					isDirty: e.isDirty(),
					...i.defaultValuesParamsSchema ? { defaultValuesParamsSchema: El(i.defaultValuesParamsSchema) } : {},
					...i.defaultValuesParams ? { defaultValuesParams: i.defaultValuesParams } : {}
				}), h.current === r)) {
					let t = g.current;
					a = {
						formName: r,
						...i.description ? { description: i.description } : {},
						...i.module ? { module: i.module } : {},
						cardTitle: t.cardTitle ?? "",
						cardDescription: t.cardDescription ?? "",
						formSchema: El(i.schema),
						fieldDescriptions: Nl(i.schema),
						sectionDescriptions: Pl(i.sections),
						formValues: e.getValues(),
						formErrors: e.getErrors(),
						isDirty: e.isDirty(),
						...i.defaultValuesParamsSchema ? { defaultValuesParamsSchema: El(i.defaultValuesParamsSchema) } : {},
						...i.defaultValuesParams ? { defaultValuesParams: i.defaultValuesParams } : {}
					};
				}
			}
			let o = JSON.stringify({
				formsOnCurrentPage: t,
				availableForms: n,
				activeForm: a
			});
			o !== i.current && (i.current = o, u(t), f(n), m(a));
		});
	}, []), v = j((e, t, n, i, a, o, s, c) => {
		let l = r.current.get(e);
		r.current.set(e, {
			ref: t,
			schema: n,
			description: s,
			module: c,
			sections: i,
			defaultValuesParamsSchema: a ?? l?.defaultValuesParamsSchema,
			defaultValuesFn: o ?? l?.defaultValuesFn,
			defaultValuesParams: l?.defaultValuesParams,
			onSubmit: l?.onSubmit,
			steps: l?.steps,
			submitConfig: l?.submitConfig,
			errorTriggerMode: l?.errorTriggerMode
		}), _();
	}, [_]), y = j((e) => {
		let t = r.current.get(e);
		if (t?.virtual) return;
		let i = t?.ref.current?.getValues() ?? {};
		r.current.delete(e);
		let a = n?.find((t) => t.name === e);
		if (a) {
			let n = {
				...typeof a.defaultValues == "function" ? {} : jl(a.defaultValues),
				...i
			}, { ref: o, dirtyFields: s } = Ml(a.schema, n, a.onSubmit), c = typeof a.defaultValues == "function" ? (() => {
				let e = a.defaultValues;
				return async (t) => {
					let n = e(t);
					return typeof n?.then == "function" ? await n : n;
				};
			})() : void 0;
			r.current.set(e, {
				ref: o,
				schema: a.schema,
				description: a.description,
				module: a.module,
				sections: a.sections,
				virtual: !0,
				defaultValuesParamsSchema: a.defaultValuesParamsSchema,
				defaultValuesFn: c,
				defaultValuesParams: t?.defaultValuesParams,
				dirtyFields: s,
				onSubmit: a.onSubmit,
				steps: a.steps,
				submitConfig: a.submitConfig,
				errorTriggerMode: a.errorTriggerMode
			});
		}
		_();
	}, [_, n]), b = j((e) => r.current.get(e), []), x = j(() => Array.from(r.current.keys()), []), S = j((e, t) => {
		let n = r.current.get(e);
		return n ? n.virtual ? (h.current = e, g.current = {
			cardTitle: t?.cardTitle ?? "",
			cardDescription: t?.cardDescription ?? ""
		}, _(), { success: !0 }) : {
			success: !1,
			error: `Form "${e}" is a rendered form on the current page. You can co-edit it directly without picking it as active.`
		} : {
			success: !1,
			error: `Form "${e}" not found. Available forms: ${Array.from(r.current.keys()).join(", ")}`
		};
	}, [_]), ee = j(() => {
		h.current = null, g.current = {
			cardTitle: "",
			cardDescription: ""
		}, _();
	}, [_]), C = j((e, t) => {
		let n = r.current.get(e);
		n && (n.defaultValuesParams = t);
	}, []), w = j((e) => {
		let t = a.current.get(e) ?? 0;
		a.current.set(e, t + 1);
	}, []), T = j((e) => {
		a.current.delete(e), o.current.delete(e), s.current.delete(e), c.current.delete(e);
	}, []), te = j((e) => a.current.get(e) ?? 0, []), ne = j((e) => !o.current.has(e), []), re = j((e) => {
		o.current.add(e);
	}, []), E = j((e, t) => {
		o.current.delete(e), s.current.set(e, t ?? null);
		let n = c.current.get(e);
		if (n?.length) {
			c.current.delete(e);
			for (let e of n) e();
		}
		_();
	}, [_]), D = j((e, t) => {
		let n = c.current.get(e) ?? [];
		n.push(t), c.current.set(e, n);
	}, []), O = j((e, t) => s.current.has(e) ? t === void 0 || s.current.get(e) === t : !1, []), ie = M(/* @__PURE__ */ new Set());
	ye(() => {
		let e = n ?? [], t = /* @__PURE__ */ new Set();
		for (let n of e) {
			t.add(n.name);
			let e = r.current.get(n.name);
			if (e && !e.virtual || e?.virtual) continue;
			let i = typeof n.defaultValues == "function" ? {} : jl(n.defaultValues), { ref: a, dirtyFields: o } = Ml(n.schema, i, n.onSubmit), s = typeof n.defaultValues == "function" ? (() => {
				let e = n.defaultValues;
				return async (t) => {
					let n = e(t);
					return typeof n?.then == "function" ? await n : n;
				};
			})() : void 0;
			r.current.set(n.name, {
				ref: a,
				schema: n.schema,
				description: n.description,
				module: n.module,
				sections: n.sections,
				virtual: !0,
				defaultValuesParamsSchema: n.defaultValuesParamsSchema,
				defaultValuesFn: s,
				dirtyFields: o,
				onSubmit: n.onSubmit,
				steps: n.steps,
				submitConfig: n.submitConfig,
				errorTriggerMode: n.errorTriggerMode
			});
		}
		for (let e of ie.current) t.has(e) || r.current.get(e)?.virtual && r.current.delete(e);
		return ie.current = t, _(), () => {
			for (let e of t) r.current.get(e)?.virtual && r.current.delete(e);
			_();
		};
	}, [n, _]);
	let ae = be(() => ({
		register: v,
		unregister: y,
		get: b,
		getFormNames: x,
		rebuildDescriptions: _,
		formsOnCurrentPage: l,
		availableForms: d,
		activeForm: p,
		setActiveForm: S,
		clearActiveForm: ee,
		updateActiveFormDefaultValuesParams: C,
		incrementFillVersion: w,
		resetFillVersion: T,
		getFillVersion: te,
		isDefaultValuesResolved: ne,
		markDefaultValuesResolving: re,
		markDefaultValuesResolved: E,
		queueFillAction: D,
		hasDefaultValuesEverResolved: O
	}), [
		v,
		y,
		b,
		x,
		_,
		l,
		d,
		p,
		S,
		ee,
		C,
		w,
		T,
		te,
		ne,
		re,
		E,
		D,
		O
	]);
	return /* @__PURE__ */ N(Fl.Provider, {
		value: ae,
		children: e
	});
}
function Ll() {
	return ve(Fl);
}
//#endregion
export { kr as $, Qa as A, lt as At, Ii as B, $e as Bt, fs as C, gt as Ct, ls as D, ft as Dt, is as E, pt as Et, Gi as F, it as Ft, Oi as G, ji as H, Ui as I, rt as It, ii as J, di as K, Hi as L, nt as Lt, Ja as M, st as Mt, Sa as N, ot as Nt, Zo as O, dt as Ot, Wi as P, at as Pt, Fr as Q, Vi as R, tt as Rt, us as S, _t as St, as as T, mt as Tt, ki as U, Mi as V, Qe as Vt, J as W, zr as X, ai as Y, Ir as Z, bs as _, Wt as _t, bc as a, K as at, ms as b, yt as bt, mc as c, Jt as ct, Y as d, Zt as dt, jr as et, vs as f, Xt as ft, gs as g, Ht as gt, hs as h, Gt as ht, Oc as i, Mr as it, $a as j, ct as jt, Xo as k, ut as kt, uc as l, qt as lt, xs as m, Kt as mt, Al as n, Or as nt, xc as o, Ar as ot, ys as p, Qt as pt, q, Ll as r, Er as rt, hc as s, L as st, Il as t, Dr as tt, cc as u, $t as ut, ps as v, Ut as vt, ds as w, ht as wt, os as x, vt as xt, cs as y, kt as yt, Li as z, et as zt };
