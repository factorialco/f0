import { i as e, o as t, t as n } from "./rolldown-runtime-CEFd7nDs.js";
import { t as r } from "./dist-HAF2K0vx.js";
import { t as i } from "./component-DIiKjQeI.js";
import { d as a, m as o, t as s, u as c } from "./OneEllipsis-DuhKMtYp.js";
import { Ct as l, F as u, G as d, K as f, L as p, O as m, P as h, S as g, St as _, Tt as v, W as y, _ as b, _t as x, a as S, bt as C, dt as w, f as T, gt as E, ht as D, i as O, k, lt as A, mt as j, p as M, pt as N, r as P, rt as F, st as I, vt as L, xt as R, yt as z, z as B } from "./F0Button-BFtTqm8n.js";
import { n as V, t as H } from "./utils-CVzxZnoI.js";
import { A as ee, D as te, E as ne, F as U, M as re, N as ie, T as ae, h as oe, m as se, t as ce } from "./F0Dialog-Bh28_1sh.js";
import { C as le, D as ue, E as de, O as fe, S as pe, T as me, _ as he, a as ge, b as _e, c as ve, d as ye, f as be, g as xe, h as Se, i as Ce, l as we, m as Te, n as Ee, o as De, p as Oe, r as ke, s as Ae, t as je, u as Me, v as Ne, w as Pe, x as Fe, y as Ie } from "./F0TextInput-DFE9ZYg6.js";
import { i as Le, n as Re, o as ze, r as Be, t as Ve } from "./tooltip-BPSwDQpD.js";
import { $t as He, B as Ue, C as We, Ct as Ge, D as Ke, Dt as qe, E as Je, Et as Ye, H as Xe, M as Ze, O as Qe, P as $e, Q as et, R as tt, S as nt, T as rt, U as it, W as at, X as ot, Z as st, _n as ct, at as lt, bn as ut, c as dt, ct as ft, d as pt, en as mt, g as ht, hn as gt, in as _t, it as vt, j as yt, m as bt, n as xt, nn as St, nt as Ct, ot as wt, q as Tt, rn as Et, rt as Dt, st as Ot, t as kt, tn as At, v as jt, vt as Mt, z as Nt } from "./F0Select-D7w3Lovd.js";
import { At as Pt, C as Ft, D as It, Dt as Lt, Ft as Rt, J as zt, Mt as Bt, Ot as Vt, Pt as Ht, R as Ut, St as Wt, Tt as Gt, n as Kt, o as qt, p as Jt, pt as Yt, q as Xt, rt as Zt, t as Qt, w as $t, x as en } from "./F0Checkbox-B2ZT94HT.js";
import { Q as tn, X as nn, Y as rn, b as an, d as on, et as sn, f as cn, h as ln, n as un, nt as dn, o as fn, s as pn, t as mn, u as hn, y as gn } from "./F0Card-SSGaEK9S.js";
import { a as _n, i as vn, k as yn, t as bn } from "./popover-DDfM6CZG.js";
import { a as xn, b as Sn, f as Cn, o as wn, v as Tn, x as En } from "./progress-BJOpxq7D.js";
import { t as Dn } from "./Download-Dvj6cfxp.js";
import { t as On } from "./Minimize-C1HdMgmx.js";
import { t as kn } from "./Reset-gUsyzwG8.js";
import { n as An } from "./skeleton-gsHEXIPQ.js";
import { i as jn, r as Mn } from "./dist-V-dG5cV7.js";
import { t as Nn } from "./dist-Dt-cTb6D.js";
import * as Pn from "react";
import Fn, { Fragment as In, cloneElement as Ln, createContext as Rn, createElement as zn, forwardRef as Bn, isValidElement as Vn, memo as Hn, useCallback as W, useContext as Un, useEffect as G, useId as Wn, useImperativeHandle as Gn, useLayoutEffect as Kn, useMemo as K, useRef as q, useState as J } from "react";
import { createPortal as qn } from "react-dom";
import { Fragment as Y, jsx as X, jsxs as Z } from "react/jsx-runtime";
import './useDataCollectionSource.css';//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/MotionConfig/index.mjs
function Jn({ children: e, isValidProp: t, ...n }) {
	t && E(t), n = {
		...Un(R),
		...n
	}, n.isStatic = l(() => n.isStatic);
	let r = K(() => n, [
		JSON.stringify(n.transition),
		n.transformPagePoint,
		n.reducedMotion
	]);
	return X(R.Provider, {
		value: r,
		children: e
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-combine-values.mjs
function Yn(e, t) {
	let n = fe(t()), r = () => n.set(t());
	return r(), _(() => {
		let t = () => L.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return () => {
			n.forEach((e) => e()), x(r);
		};
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-computed.mjs
function Xn(e) {
	A.current = [], e();
	let t = Yn(A.current, e);
	return A.current = void 0, t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/transform.mjs
function Zn(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = F(i, a, o);
	return t ? s(r) : s;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-transform.mjs
function Qn(e, t, n, r) {
	if (typeof e == "function") return Xn(e);
	let i = typeof t == "function" ? t : Zn(t, n, r);
	return Array.isArray(e) ? $n(e, i) : $n([e], ([e]) => i(e));
}
function $n(e, t) {
	let n = l(() => []);
	return Yn(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
function er() {
	!d.current && y();
	let [e] = J(f.current);
	return process.env.NODE_ENV !== "production" && D(e !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs
var tr = class {
	constructor() {
		this.componentControls = /* @__PURE__ */ new Set();
	}
	subscribe(e) {
		return this.componentControls.add(e), () => this.componentControls.delete(e);
	}
	start(e, t) {
		this.componentControls.forEach((n) => {
			n.start(e.nativeEvent || e, t);
		});
	}
}, nr = () => new tr();
function rr() {
	return l(nr);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/ReorderContext.mjs
var ir = Rn(null);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function ar(e, t, n, r) {
	if (!r) return e;
	let i = e.findIndex((e) => e.value === t);
	if (i === -1) return e;
	let a = r > 0 ? 1 : -1, o = e[i + a];
	if (!o) return e;
	let s = e[i], c = o.layout, l = I(c.min, c.max, .5);
	return a === 1 && s.layout.max + n > l || a === -1 && s.layout.min + n < l ? w(e, i, i + a) : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Group.mjs
function or({ children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...a }, o) {
	let s = l(() => B[t]), c = [], u = q(!1);
	j(!!i, "Reorder.Group must be provided a values prop");
	let d = {
		axis: n,
		registerItem: (e, t) => {
			let r = c.findIndex((t) => e === t.value);
			r === -1 ? c.push({
				value: e,
				layout: t[n]
			}) : c[r].layout = t[n], c.sort(lr);
		},
		updateOrder: (e, t, n) => {
			if (u.current) return;
			let a = ar(c, e, t, n);
			c !== a && (u.current = !0, r(a.map(cr).filter((e) => i.indexOf(e) !== -1)));
		}
	};
	return G(() => {
		u.current = !1;
	}), X(s, {
		...a,
		ref: o,
		ignoreStrict: !0,
		children: X(ir.Provider, {
			value: d,
			children: e
		})
	});
}
var sr = /*@__PURE__*/ Bn(or);
function cr(e) {
	return e.value;
}
function lr(e, t) {
	return e.layout.min - t.layout.min;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Item.mjs
function ur(e, t = 0) {
	return N(e) ? e : fe(t);
}
function dr({ children: e, style: t = {}, value: n, as: r = "li", onDrag: i, layout: a = !0, ...o }, s) {
	let c = l(() => B[r]), u = Un(ir), d = {
		x: ur(t.x),
		y: ur(t.y)
	}, f = Qn([d.x, d.y], ([e, t]) => e || t ? 1 : "unset");
	j(!!u, "Reorder.Item must be a child of Reorder.Group");
	let { axis: p, registerItem: m, updateOrder: h } = u;
	return X(c, {
		drag: p,
		...o,
		dragSnapToOrigin: !0,
		style: {
			...t,
			x: d.x,
			y: d.y,
			zIndex: f
		},
		layout: a,
		onDrag: (e, t) => {
			let { velocity: r } = t;
			r[p] && h(n, d[p].get(), r[p]), i && i(e, t);
		},
		onLayoutMeasure: (e) => m(n, e),
		ref: s,
		ignoreStrict: !0,
		children: e
	});
}
var fr = /*@__PURE__*/ Bn(dr), pr = Bn(function({ bare: e = !1, ...t }, n) {
	return /* @__PURE__ */ X("div", {
		ref: n,
		role: "separator",
		className: H("-mx-4 h-[1px]", e ? void 0 : "my-4"),
		style: { backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)" },
		...t
	});
});
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parseISO.mjs
function mr(e, t) {
	let n = t?.additionalDigits ?? 2, r = yr(e), i;
	if (r.date) {
		let e = br(r.date, n);
		i = xr(e.restDateString, e.year);
	}
	if (!i || isNaN(i.getTime())) return /* @__PURE__ */ new Date(NaN);
	let a = i.getTime(), o = 0, s;
	if (r.time && (o = Cr(r.time), isNaN(o))) return /* @__PURE__ */ new Date(NaN);
	if (r.timezone) {
		if (s = Tr(r.timezone), isNaN(s)) return /* @__PURE__ */ new Date(NaN);
	} else {
		let e = new Date(a + o), t = /* @__PURE__ */ new Date(0);
		return t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), t.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), t;
	}
	return new Date(a + o + s);
}
var hr = {
	dateTimeDelimiter: /[T ]/,
	timeZoneDelimiter: /[Z ]/i,
	timezone: /([Z+-].*)$/
}, gr = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, _r = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, vr = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function yr(e) {
	let t = {}, n = e.split(hr.dateTimeDelimiter), r;
	if (n.length > 2) return t;
	if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], hr.timeZoneDelimiter.test(t.date) && (t.date = e.split(hr.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
		let e = hr.timezone.exec(r);
		e ? (t.time = r.replace(e[1], ""), t.timezone = e[1]) : t.time = r;
	}
	return t;
}
function br(e, t) {
	let n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), r = e.match(n);
	if (!r) return {
		year: NaN,
		restDateString: ""
	};
	let i = r[1] ? parseInt(r[1]) : null, a = r[2] ? parseInt(r[2]) : null;
	return {
		year: a === null ? i : a * 100,
		restDateString: e.slice((r[1] || r[2]).length)
	};
}
function xr(e, t) {
	if (t === null) return /* @__PURE__ */ new Date(NaN);
	let n = e.match(gr);
	if (!n) return /* @__PURE__ */ new Date(NaN);
	let r = !!n[4], i = Sr(n[1]), a = Sr(n[2]) - 1, o = Sr(n[3]), s = Sr(n[4]), c = Sr(n[5]) - 1;
	if (r) return jr(t, s, c) ? Er(t, s, c) : /* @__PURE__ */ new Date(NaN);
	{
		let e = /* @__PURE__ */ new Date(0);
		return !kr(t, a, o) || !Ar(t, i) ? /* @__PURE__ */ new Date(NaN) : (e.setUTCFullYear(t, a, Math.max(i, o)), e);
	}
}
function Sr(e) {
	return e ? parseInt(e) : 1;
}
function Cr(e) {
	let t = e.match(_r);
	if (!t) return NaN;
	let n = wr(t[1]), r = wr(t[2]), i = wr(t[3]);
	return Mr(n, r, i) ? n * Xt + r * zt + i * 1e3 : NaN;
}
function wr(e) {
	return e && parseFloat(e.replace(",", ".")) || 0;
}
function Tr(e) {
	if (e === "Z") return 0;
	let t = e.match(vr);
	if (!t) return 0;
	let n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), i = t[3] && parseInt(t[3]) || 0;
	return Nr(r, i) ? n * (r * Xt + i * zt) : NaN;
}
function Er(e, t, n) {
	let r = /* @__PURE__ */ new Date(0);
	r.setUTCFullYear(e, 0, 4);
	let i = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - i;
	return r.setUTCDate(r.getUTCDate() + a), r;
}
var Dr = [
	31,
	null,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
function Or(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
function kr(e, t, n) {
	return t >= 0 && t <= 11 && n >= 1 && n <= (Dr[t] || (Or(e) ? 29 : 28));
}
function Ar(e, t) {
	return t >= 1 && t <= (Or(e) ? 366 : 365);
}
function jr(e, t, n) {
	return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function Mr(e, t, n) {
	return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function Nr(e, t) {
	return t >= 0 && t <= 59;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/decompose.js
var Pr = 180 / Math.PI, Fr = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Ir(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Pr,
		skewX: Math.atan(c) * Pr,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/parse.js
var Lr;
function Rr(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Fr : Ir(t.a, t.b, t.c, t.d, t.e, t.f);
}
function zr(e) {
	return e == null || (Lr ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Lr.setAttribute("transform", e), !(e = Lr.transform.baseVal.consolidate())) ? Fr : (e = e.matrix, Ir(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/index.js
function Br(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: Ce(e, i)
			}, {
				i: c - 2,
				x: Ce(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: Ce(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: Ce(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: Ce(e, n)
			}, {
				i: s - 2,
				x: Ce(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var Vr = Br(Rr, "px, ", "px)", "deg)"), Hr = Br(zr, ", ", ")", ")"), Ur = 1e-12;
function Wr(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Gr(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Kr(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var qr = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < Ur) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = Wr(y), c = s / (n * g) * (i * Kr(t * r + y) - Gr(y));
				return [
					a + c * d,
					o + c * f,
					s * i / Wr(t * r + y)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4), Jr = {
	duration: .5,
	ease: [
		0,
		0,
		.2,
		1
	],
	delay: .2
}, Yr = {
	normal: {
		pathLength: 1,
		opacity: 1,
		transition: { delay: 0 }
	},
	animate: {
		pathLength: [0, 1],
		opacity: [0, 1]
	}
}, Xr = {
	duration: .5,
	ease: [
		.175,
		.885,
		.32,
		1.275
	]
}, Zr = {
	normal: { scale: 1 },
	animate: { scale: [
		1,
		.9,
		1
	] }
}, Qr = Pn.forwardRef(({ animate: e = "normal", ...t }, n) => /* @__PURE__ */ Z("svg", {
	ref: n,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...t,
	children: [/* @__PURE__ */ X(B.circle, {
		cx: "12",
		cy: "12",
		r: "8",
		fill: "currentColor",
		initial: "normal",
		variants: Zr,
		transition: Xr,
		animate: e
	}), /* @__PURE__ */ X(B.path, {
		d: "M16.52 9.39C16.7354 9.10281 16.6772 8.69539 16.39 8.48C16.1028 8.26461 15.6954 8.32281 15.48 8.61L11.4297 14.0104L8.95963 11.5404C8.70578 11.2865 8.29423 11.2865 8.04039 11.5404C7.78655 11.7942 7.78655 12.2058 8.04039 12.4596L11.0404 15.4596C11.1736 15.5929 11.3581 15.6617 11.5461 15.6484C11.734 15.635 11.9069 15.5407 12.02 15.39L16.52 9.39Z",
		fill: "white",
		fillRule: "evenodd",
		clipRule: "evenodd",
		initial: "normal",
		variants: Yr,
		transition: Jr,
		animate: e
	})]
}));
Qr.displayName = "CheckCircleAnimated";
//#endregion
//#region src/components/F0ActionBar/index.tsx
function $r(e) {
	return "items" in e;
}
var ei = (e) => Array.isArray(e) ? e.every((e) => $r(e)) ? e : [{ items: e }] : [e], ti = [
	"idle",
	"loading",
	"success",
	"error"
], ni = "f0-action-bar-error-navigate", ri = "f0-action-bar-wiggle", ii = 600, ai = ({ status: e, isLight: t }) => e === "loading" ? /* @__PURE__ */ X(Mt, {
	size: "small",
	className: H(!t && "text-f1-foreground-inverse")
}) : e === "success" ? /* @__PURE__ */ X(Qr, {
	animate: "animate",
	className: "h-5 w-5 text-f1-icon-positive"
}) : e === "error" ? /* @__PURE__ */ X(p, {
	icon: Rt,
	size: "md",
	color: t ? "critical" : "inverse"
}) : /* @__PURE__ */ X(p, {
	icon: ue,
	size: "md",
	color: t ? "currentColor" : "inverse"
}), oi = Bn(({ isOpen: e, secondaryActions: t = [], label: n, variant: r = "dark", leftContent: i, status: a = "idle", ...o }, s) => {
	let c = q(null), l = q(null), [u, d] = J(null);
	G(() => {
		let e = document.getElementById("content");
		if (!e) return;
		let t = () => {
			let t = e.getBoundingClientRect(), n = t.left, r = t.width;
			d((e) => e && e.left === n && e.width === r ? e : {
				left: n,
				width: r
			});
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []), G(() => () => {
		l.current && clearTimeout(l.current);
	}, []), Gn(s, () => ({ wiggle(e) {
		let t = c.current;
		if (!t) return;
		let n = e?.errorHighlight ? ni : ri;
		l.current && clearTimeout(l.current), t.classList.remove(ni, ri), t.offsetWidth, t.classList.add(n), l.current = setTimeout(() => {
			t.classList.remove(ni, ri), l.current = null;
		}, ii);
	} }));
	let [f, p] = J(!1);
	G(() => {
		if (a === "error") {
			let e = c.current;
			if (!e) return;
			l.current && clearTimeout(l.current), p(!1), e.classList.remove(ni), e.offsetWidth, e.classList.add(ni), l.current = setTimeout(() => {
				e.classList.remove(ni), l.current = null, p(!0);
			}, ii);
		} else p(!1), l.current &&= (clearTimeout(l.current), null), c.current?.classList.remove(ni, ri);
	}, [a]);
	let m = t.slice(0, 2), h = t.slice(2).map((e) => ({
		...e,
		critical: e.critical || !1
	})), g = r === "light", _ = a === "loading" || a === "success", v = K(() => ei(o.primaryActions ?? []), [o.primaryActions]), y = v.some((e) => e.items.some((e) => e.loading)), b = K(() => v.map((e) => ({
		...e,
		items: e.items.map((e) => ({
			value: e.label,
			label: e.label,
			icon: e.icon,
			critical: e.critical,
			description: e.description,
			disabled: e.disabled
		}))
	})), [v]), x = K(() => v.length === 1 && v[0].items.length === 1 ? v[0].items[0] : null, [v]), S = W((e) => v.flatMap((e) => e.items).find((t) => t.label === e), [v]), C = g ? "" : "dark";
	return /* @__PURE__ */ X(z, { children: e && /* @__PURE__ */ Z(B.div, {
		ref: c,
		"data-variant": r,
		initial: {
			opacity: 0,
			y: 32,
			filter: "blur(6px)"
		},
		animate: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		exit: {
			opacity: 0,
			y: 32,
			filter: "blur(6px)"
		},
		transition: {
			ease: [
				.175,
				.885,
				.32,
				1.275
			],
			duration: .3
		},
		style: u ? {
			left: u.left,
			right: window.innerWidth - u.left - u.width
		} : void 0,
		className: H("fixed bottom-2 left-2 right-2 z-50 flex h-fit flex-col items-center gap-2 rounded-xl p-2 shadow-lg backdrop-blur-sm sm:bottom-5 sm:h-12 sm:w-max sm:flex-row sm:gap-5 sm:justify-between", u ? "sm:left-auto sm:right-auto sm:mx-auto" : "sm:left-2 sm:right-2 sm:mx-auto", g ? "border border-solid bg-f1-background text-f1-foreground" : "bg-f1-background-inverse text-f1-foreground dark:bg-f1-background-tertiary", g && f ? "border-f1-border-critical-bold bg-f1-background-critical/10" : g ? "border-f1-border-secondary" : ""),
		children: [
			i,
			(!!n || a && a !== "idle") && /* @__PURE__ */ Z("div", {
				className: "ml-2 flex items-center gap-2",
				children: [a && a !== "idle" && /* @__PURE__ */ X(ai, {
					status: a,
					isLight: g
				}), !!n && /* @__PURE__ */ X("span", {
					className: H("font-medium", g ? "text-f1-foreground" : "text-f1-foreground-inverse"),
					children: n
				})]
			}),
			/* @__PURE__ */ Z("div", { children: [/* @__PURE__ */ X("div", {
				className: H(C, "flex flex-col items-center gap-2 sm:hidden [&_button]:w-full [&_div]:w-full"),
				children: /* @__PURE__ */ Z(In, { children: [/* @__PURE__ */ X(wn, { items: t }), x ? /* @__PURE__ */ X(P, {
					label: x.label,
					icon: x.icon,
					onClick: x.onClick,
					disabled: _ || x.disabled,
					loading: x.loading ?? a === "loading",
					size: "lg"
				}) : /* @__PURE__ */ X(ee, {
					items: b,
					onClick: (e) => {
						S(e)?.onClick?.();
					},
					size: "lg",
					disabled: _ || y,
					loading: y
				})] }, "mobile-actions")
			}), /* @__PURE__ */ X("div", {
				className: H(C, "hidden items-center gap-2 sm:flex"),
				children: /* @__PURE__ */ Z(In, { children: [
					h.length > 0 && /* @__PURE__ */ X(xn, { items: h }),
					m.slice().reverse().map((e) => /* @__PURE__ */ X(P, {
						variant: e.critical ? "critical" : "outline",
						label: e.label,
						icon: e.icon,
						onClick: e.onClick,
						disabled: _ || e.disabled
					}, e.label)),
					x ? /* @__PURE__ */ X(P, {
						label: x.label,
						icon: x.icon,
						onClick: x.onClick,
						disabled: _ || x.disabled,
						loading: x.loading ?? a === "loading"
					}) : /* @__PURE__ */ X(Y, { children: /* @__PURE__ */ X(ee, {
						items: b,
						onClick: (e) => {
							S(e)?.onClick?.();
						},
						disabled: _ || y,
						loading: y
					}) })
				] }, "desktop-actions")
			})] })
		]
	}) });
});
oi.displayName = "F0ActionBar";
var si = a(oi), ci = /* @__PURE__ */ t(qe(), 1), li = ({ items: e, value: t, onChange: n, disabled: r = !1, fullWidth: i = !1, hideLabels: a = !1, ariaLabel: o, ariaLabelledBy: s }) => {
	let [c, l] = ze({
		prop: t,
		defaultProp: e[0]?.value ?? "",
		onChange: n
	});
	return /* @__PURE__ */ X(Mn, {
		type: "single",
		value: c,
		onValueChange: (e) => {
			e !== "" && l(e);
		},
		disabled: r,
		"aria-label": o,
		"aria-labelledby": s,
		className: H("inline-flex items-center rounded-md bg-f1-background-secondary p-0.5 gap-0.5", i && "w-full"),
		children: e.map((e) => /* @__PURE__ */ Z(jn, {
			value: e.value,
			disabled: r || e.disabled,
			className: H("relative flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded font-medium transition-all", "text-f1-foreground-secondary", "hover:text-f1-foreground hover:bg-f1-background-hover", "disabled:pointer-events-none disabled:text-f1-foreground-disabled", "data-[state=on]:bg-f1-background data-[state=on]:text-f1-foreground data-[state=on]:shadow", V(), "h-8 px-3 text-base", i && "w-full"),
			children: [e.icon && /* @__PURE__ */ X(p, {
				icon: e.icon,
				size: "md"
			}), a && e.icon ? /* @__PURE__ */ X("span", {
				className: "sr-only",
				children: e.label
			}) : e.label]
		}, e.value))
	});
};
li.displayName = "F0SegmentedControl";
//#endregion
//#region src/experimental/Actions/F0SegmentedControl/index.tsx
var ui = v("F0SegmentedControl", li), di = (e, t, n) => {
	let r = Dt[n];
	return r ? r.add(e, t) : {
		from: /* @__PURE__ */ new Date(),
		to: /* @__PURE__ */ new Date()
	};
};
//#endregion
//#region src/ui/DatePickerPopup/components/GranularitySelector.tsx
function fi({ granularities: e, value: t, onChange: n, definitions: r }) {
	let i = g(), a = (e) => {
		n(e);
	}, o = (e) => r?.[e]?.selectorLabel || i.date.granularities[e]?.label || e;
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ X("h6", {
			className: "text-sm font-medium",
			children: i.date.selectedBy
		}), /* @__PURE__ */ X(yt, {
			value: t,
			onValueChange: a,
			as: "list",
			children: /* @__PURE__ */ X(Qe, { children: e.map((e) => /* @__PURE__ */ X(Ke, {
				value: e,
				children: o(e)
			}, e)) })
		})]
	});
}
//#endregion
//#region src/ui/DatePickerPopup/components/PresetList.tsx
var pi = "__custom__", mi = (e, t) => {
	if (!e?.value) return !1;
	let n = typeof t.value == "function" ? t.value() : t.value;
	return e.granularity === t.granularity && Ge(e.value.from, n.from) && (!e.value.to || !n.to || Ge(e.value.to, n.to));
}, hi = ({ presets: e, ...t }) => {
	let [n, r] = J();
	return G(() => {
		if (t.date) {
			let n = Object.entries(e).find(([e, n]) => mi(t.date, n));
			r(n ? n[0] : void 0);
		}
	}, [t.date, e]), /* @__PURE__ */ X(yt, {
		as: "list",
		value: n,
		onValueChange: (e) => {
			r(e), t.onSelect?.(e);
		},
		children: /* @__PURE__ */ Z(Qe, { children: [
			Object.entries(e).map(([e, t]) => /* @__PURE__ */ X(Ke, {
				value: e,
				children: t?.label || e
			}, e)),
			/* @__PURE__ */ X(Je, {}),
			/* @__PURE__ */ X(Ke, {
				value: pi,
				children: "Custom"
			}, pi)
		] })
	});
}, gi = (e, t) => {
	if (!(e instanceof Element) || !t) return !1;
	let n = e.closest("[role=\"listbox\"]");
	return n?.id ? Array.from(t.querySelectorAll("[aria-controls]")).some((e) => e.getAttribute("aria-controls") === n.id) : !1;
}, _i = (e, t) => e instanceof Element && t !== null && e.contains(t), vi = (e) => ({
	onPointerDownOutside: (t) => {
		gi(t.target, e()) && t.preventDefault();
	},
	onFocusOutside: (t) => {
		let n = e();
		(gi(t.target, n) || _i(t.target, n)) && t.preventDefault();
	}
}), yi = (e) => e instanceof Date ? e : new Date(e), bi = (e) => {
	if (!e?.value) return e;
	let { from: t, to: n } = e.value;
	return t instanceof Date && n instanceof Date ? e : {
		...e,
		value: {
			from: yi(t),
			to: yi(n)
		}
	};
}, xi = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity, Si = "__custom__";
function Ci({ onSelect: e, defaultValue: t, presets: n = [], granularities: r = ["day"], children: i, compareTo: a, defaultCompareTo: o, onCompareToChange: s, hideCalendarInput: c, value: l, asChild: u, weekStartsOn: d, selectOnCellOnly: f = !1, periods: p, ...m }) {
	let h = g(), _ = Ft(), [v, y] = J(l || t), b = d ?? _.date?.weekStartsOn ?? $t.Monday, x = Un($e), S = x.portalContainer && (x.position === "center" || x.position === "fullscreen") ? x.portalContainer : void 0, C = q(null), w = K(() => vi(() => C.current), []);
	G(() => {
		xi(l, v) || y(l || t);
	}, [l, t]);
	let T = K(() => v?.granularity ?? "day", [v?.granularity]), E = K(() => Ct({
		weekStartsOn: b,
		periods: p
	}), [b, p]), D = K(() => E[T], [E, T]), O = K(() => p && !r.includes("periods") ? [...r, "periods"] : r, [r, p]), k = K(() => D.calendarMode || "single", [D]), A = (e) => {
		j({
			value: D.toRange(e ?? void 0),
			granularity: T
		});
	}, j = (t) => {
		xi(t, v) || (y(t), e?.(t));
	}, M = (e) => {
		F(e === Si);
		let t = e ? n[+e] : void 0;
		t && (j({
			value: E[t.granularity].toRange(typeof t.value == "function" ? t.value() : t.value),
			granularity: t.granularity
		}), e !== Si && m.onOpenChange?.(!1));
	}, [N, F] = J(!1), I = (e) => {
		if (f) {
			y((t) => t ? {
				...t,
				granularity: e
			} : {
				value: void 0,
				granularity: e
			});
			return;
		}
		j({
			value: v?.value,
			granularity: e
		});
	}, L = K(() => n.length > 0 && !N, [n, N]), R = () => {
		F(!1);
	}, z = K(() => D.calendarView || "day", [D]), [B, V] = J(o || void 0), H = K(() => {
		let e = (a ?? {})[T] || [];
		if (!v?.value) return [];
		let t = v.value, n = e.map((e, n) => {
			let r = typeof e.value == "function" ? e.value(D.toRange(t)) : di(D.toRange(t), e.value.delta, e.value.units), i = Array.isArray(r) ? r.map((e) => D.toString(e, h)).join(", ") : D.toString(r, h);
			return {
				label: e.label,
				value: (n + 1).toString(),
				description: i,
				dateValue: r
			};
		});
		return n.length === 0 ? [] : [{
			label: h.date.none,
			value: "0",
			description: "",
			dateValue: void 0
		}, ...n];
	}, [
		a,
		v,
		D,
		T
	]);
	G(() => {
		V(o || "0");
	}, [T, o]);
	let ee = (e) => {
		V(e);
	};
	return G(() => {
		s?.(B ? H[+B]?.dateValue : void 0);
	}, [
		B,
		s,
		H
	]), /* @__PURE__ */ Z(bn, {
		open: m.open,
		onOpenChange: m.onOpenChange,
		children: [/* @__PURE__ */ X(_n, {
			asChild: u,
			children: i
		}), /* @__PURE__ */ X(vn, {
			ref: C,
			className: "w-full overflow-auto",
			align: "start",
			container: S,
			...w,
			children: L ? /* @__PURE__ */ X(hi, {
				presets: n,
				date: v,
				onSelect: M
			}) : /* @__PURE__ */ Z("div", {
				className: "flex gap-4",
				children: [(n.length > 0 || O.length > 1) && /* @__PURE__ */ Z("div", { children: [n.length > 0 && /* @__PURE__ */ X(P, {
					icon: ct,
					variant: "neutral",
					size: "sm",
					hideLabel: !0,
					label: "Back",
					onClick: R
				}), O.length > 1 && /* @__PURE__ */ X(fi, {
					granularities: O,
					value: T,
					onChange: I,
					definitions: E
				})] }), /* @__PURE__ */ Z("div", {
					className: "min-w-[300px] flex-1",
					children: [/* @__PURE__ */ X(jt, {
						showInput: !c,
						mode: k,
						view: z,
						onSelect: A,
						defaultSelected: v?.value,
						minDate: m.minDate,
						maxDate: m.maxDate,
						weekStartsOn: b,
						selectOnCellOnly: f,
						periods: p
					}), H.length > 0 && /* @__PURE__ */ Z("div", {
						className: "mt-4 flex flex-col gap-2",
						children: [/* @__PURE__ */ X("div", {
							className: "text-gray-500 text-sm",
							children: h.date.compareTo
						}), /* @__PURE__ */ X(kt, {
							label: h.date.compareTo,
							hideLabel: !0,
							placeholder: h.date.compareTo,
							options: H.map((e) => ({
								label: e.label,
								value: e.value,
								description: e.description ?? ""
							})),
							onChange: ee,
							value: B
						})]
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/lib/field-input-icons.ts
var wi = {
	url: xe,
	email: _e,
	time: Pe,
	date: me,
	datetime: me
};
function Ti(e) {
	if (e) return wi[e];
}
//#endregion
//#region src/components/F0DatePicker/components/DateInput.tsx
var Ei = Bn(({ value: e, onDateChange: t, granularity: n, onOpenChange: r, minDate: i, maxDate: a, onClear: o, showIcon: s = !0, displayFormat: c, ...l }, u) => {
	let [d, f] = J(""), [p, m] = J(!1), h = g();
	G(() => {
		f(n.toString(e?.value, h, c ?? "long"));
	}, [
		e,
		n,
		h,
		c
	]);
	let _ = (e) => wt(e, n, {
		minDate: i,
		maxDate: a
	}), v = (e, n) => {
		if (e === "") {
			t?.({
				value: void 0,
				granularity: n.key
			}), m(l.required ?? !1);
			return;
		}
		let r = n.toRange(n.fromString(e, h));
		r && (_(r?.from) && _(r?.to) ? (t?.({
			value: r,
			granularity: n.key
		}), m(!1)) : m(!0));
	}, y = () => {
		v(d, n);
	}, b = (e) => {
		f(e);
	}, x = l.placeholder ?? n.placeholder();
	return /* @__PURE__ */ X(Y, { children: /* @__PURE__ */ X(st, {
		...l,
		placeholder: x,
		icon: s ? Ti("date") : void 0,
		ref: u,
		onFocus: () => r?.(!0),
		onClear: () => {
			o?.(), f(""), v("", n);
		},
		onKeyDown: (e) => {
			e.key === "Enter" && y();
		},
		type: "text",
		onChange: b,
		error: p || l.error,
		onBlur: y,
		value: d,
		onClickContent: () => r?.(!0)
	}) });
});
Ei.displayName = "DateInput";
//#endregion
//#region src/components/F0DatePicker/F0DatePicker.tsx
function Di({ onChange: e, value: t, presets: n = [], granularities: r = ["day"], minDate: i, maxDate: a, open: o = !1, showIcon: s = !0, displayFormat: c, selectOnCellOnly: l, ...u }) {
	let [d, f] = J(), [p, m] = J(o);
	G(() => {
		m(o);
	}, [o]);
	let h = g(), _ = K(() => r[0] ?? "day", [r]), v = W((e) => {
		let t = e || _;
		return {
			...vt(t),
			key: t
		};
	}, [_]), y = W((e) => {
		if (!e) return;
		let t = v(e.granularity), n = t.toRange(t.calendarMode === "range" ? e.value : e.value?.from ?? void 0);
		if (n) return {
			value: n,
			granularity: e.granularity
		};
	}, [v]), b = K(() => v(d?.granularity), [d?.granularity, v]);
	G(() => {
		let e = y(t);
		xi(d, e) || f(e);
	}, [t]);
	let x = (e) => {
		let t = y(e), n = v(t?.granularity).calendarMode !== "range" && !xi(t, d);
		S(t), n && m(!1);
	}, S = (t) => {
		let n = y(t);
		if (f(n), !xi(n, d)) {
			let t = v(n?.granularity);
			e?.(n, t.toString(n?.value, h));
		}
	}, C = (e) => {
		m(e), u.onOpenChange?.(e);
	}, w = K(() => n.filter((e) => r.includes(e.granularity)), [n, r]), T = q(null);
	return G(() => {
		p && T.current && requestAnimationFrame(() => {
			T.current?.focus();
		});
	}, [p]), /* @__PURE__ */ X(Ci, {
		hideCalendarInput: !0,
		onSelect: x,
		value: d,
		presets: w,
		granularities: r,
		minDate: i,
		maxDate: a,
		open: p,
		onOpenChange: C,
		selectOnCellOnly: l,
		asChild: !0,
		children: /* @__PURE__ */ X(Ei, {
			ref: T,
			...u,
			value: d,
			granularity: b,
			onDateChange: S,
			showIcon: s,
			displayFormat: c
		})
	});
}
//#endregion
//#region src/components/F0DatePicker/index.ts
var Oi = a(Di), ki = Bn(({ className: e, ...t }, n) => /* @__PURE__ */ X(Cn, {
	ref: n,
	className: H("text-f1-foreground-secondary", e),
	...t
}));
ki.displayName = Cn.displayName;
//#endregion
//#region src/ui/Dialog/components/DialogFooter.tsx
var Ai = ({ className: e, ...t }) => /* @__PURE__ */ X("div", {
	className: e,
	...t
});
Ai.displayName = "DialogFooter";
//#endregion
//#region src/ui/Dialog/components/DialogHeader.tsx
var ji = ({ className: e, ...t }) => /* @__PURE__ */ X("div", {
	className: e,
	...t
});
ji.displayName = "DialogHeader";
//#endregion
//#region src/components/F0NumberInput/F0NumberInput.tsx
var Mi = ["buttonToggle"], Ni = Bn(function(e, t) {
	let n = Mi.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ X(bt, {
		...n,
		ref: t
	});
});
Ni.displayName = "F0NumberInput";
//#endregion
//#region src/ui/textarea.tsx
var Pi = Bn(({ className: e, label: t, labelIcon: n, icon: r, error: i, hideLabel: a, maxLength: o, clearable: s, disabled: c, required: l, value: u, cols: d, rows: f, status: p, hint: m, onChange: h, placeholder: g, size: _, loading: v, maxHeight: y, ...b }, x) => {
	let S = q(null);
	return Gn(x, () => S.current), Kn(() => {
		let e = S.current;
		if (!e) return;
		e.style.height = "0px";
		let t = e.scrollHeight, n = getComputedStyle(e), r = parseFloat(n.lineHeight) || 20, i = parseFloat(n.paddingTop) + parseFloat(n.paddingBottom), a = r * (e.rows || 2) + i, o = Math.max(t, a);
		y != null && o > y ? (e.style.height = `${y}px`, e.style.overflowY = "auto") : (e.style.height = `${o}px`, e.style.overflowY = "hidden");
	}), /* @__PURE__ */ X(et, {
		label: t,
		labelIcon: n,
		icon: r,
		error: i,
		status: p,
		hint: m,
		hideLabel: a,
		maxLength: o,
		clearable: s,
		value: u,
		canGrow: !0,
		placeholder: g ?? "",
		onChange: (e) => {
			h?.(e ?? "");
		},
		disabled: c,
		required: l,
		size: _,
		loading: v,
		inputRef: S,
		...b,
		children: /* @__PURE__ */ X("textarea", {
			className: H("block w-full resize-none pt-2", e),
			value: u,
			cols: d,
			rows: f,
			disabled: c,
			required: l
		})
	});
});
Pi.displayName = "Textarea";
//#endregion
//#region src/components/F0TextAreaInput/F0TextAreaInput.tsx
var Fi = i({
	name: "F0TextAreaInput",
	type: "form"
}, Pi);
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function Ii(e) {
	if (Array.isArray(e)) return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function Li(e, t) {
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
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function Ri(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function zi(e, t) {
	if (e) {
		if (typeof e == "string") return Ri(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ri(e, t) : void 0;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function Bi() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function Vi(e, t) {
	return Ii(e) || Li(e, t) || zi(e, t) || Bi();
}
//#endregion
//#region ../../node_modules/.pnpm/bind-event-listener@3.0.0/node_modules/bind-event-listener/dist/bind.js
var Hi = /* @__PURE__ */ n(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.bind = void 0;
	function t(e, t) {
		var n = t.type, r = t.listener, i = t.options;
		return e.addEventListener(n, r, i), function() {
			e.removeEventListener(n, r, i);
		};
	}
	e.bind = t;
})), Ui = /* @__PURE__ */ n(((e) => {
	var t = e && e.__assign || function() {
		return t = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, t.apply(this, arguments);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = void 0;
	var n = Hi();
	function r(e) {
		if (e !== void 0) return typeof e == "boolean" ? { capture: e } : e;
	}
	function i(e, n) {
		return n == null ? e : t(t({}, e), { options: t(t({}, r(n)), r(e.options)) });
	}
	function a(e, t, r) {
		var a = t.map(function(t) {
			var a = i(t, r);
			return (0, n.bind)(e, a);
		});
		return function() {
			a.forEach(function(e) {
				return e();
			});
		};
	}
	e.bindAll = a;
})), Wi = (/* @__PURE__ */ n(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
	var t = Hi();
	Object.defineProperty(e, "bind", {
		enumerable: !0,
		get: function() {
			return t.bind;
		}
	});
	var n = Ui();
	Object.defineProperty(e, "bindAll", {
		enumerable: !0,
		get: function() {
			return n.bindAll;
		}
	});
})))(), Gi = "data-pdnd-honey-pot";
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/is-honey-pot-element.js
function Ki(e) {
	return e instanceof Element && e.hasAttribute("data-pdnd-honey-pot");
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/get-element-from-point-without-honey-pot.js
function qi(e) {
	var t = Vi(document.elementsFromPoint(e.x, e.y), 2), n = t[0], r = t[1];
	return n ? Ki(n) ? r ?? null : n : null;
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/typeof.js
function Ji(e) {
	"@babel/helpers - typeof";
	return Ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ji(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Yi(e, t) {
	if (Ji(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ji(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Xi(e) {
	var t = Yi(e, "string");
	return Ji(t) == "symbol" ? t : t + "";
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Zi(e, t, n) {
	return (t = Xi(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/max-z-index.js
var Qi = 2147483647;
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/make-honey-pot-fix.js
function $i(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ea(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? $i(Object(n), !0).forEach(function(t) {
			Zi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $i(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var ta = 2, na = ta / 2;
function ra(e) {
	return {
		x: Math.floor(e.x),
		y: Math.floor(e.y)
	};
}
function ia(e) {
	return {
		x: e.x - na,
		y: e.y - na
	};
}
function aa(e) {
	return {
		x: Math.max(e.x, 0),
		y: Math.max(e.y, 0)
	};
}
function oa(e) {
	return {
		x: Math.min(e.x, window.innerWidth - ta),
		y: Math.min(e.y, window.innerHeight - ta)
	};
}
function sa(e) {
	var t = e.client, n = oa(aa(ia(ra(t))));
	return DOMRect.fromRect({
		x: n.x,
		y: n.y,
		width: ta,
		height: ta
	});
}
function ca(e) {
	var t = e.clientRect;
	return {
		left: `${t.left}px`,
		top: `${t.top}px`,
		width: `${t.width}px`,
		height: `${t.height}px`
	};
}
function la(e) {
	var t = e.client, n = e.clientRect;
	return t.x >= n.x && t.x <= n.x + n.width && t.y >= n.y && t.y <= n.y + n.height;
}
function ua(e) {
	var t = e.initial, n = document.createElement("div");
	n.setAttribute(Gi, "true");
	var r = sa({ client: t });
	Object.assign(n.style, ea(ea({
		backgroundColor: "transparent",
		position: "fixed",
		padding: 0,
		margin: 0,
		boxSizing: "border-box"
	}, ca({ clientRect: r })), {}, {
		pointerEvents: "auto",
		zIndex: Qi
	})), document.body.appendChild(n);
	var i = (0, Wi.bind)(window, {
		type: "pointermove",
		listener: function(e) {
			r = sa({ client: {
				x: e.clientX,
				y: e.clientY
			} }), Object.assign(n.style, ca({ clientRect: r }));
		},
		options: { capture: !0 }
	});
	return function(e) {
		var t = e.current;
		if (i(), la({
			client: t,
			clientRect: r
		})) {
			n.remove();
			return;
		}
		function a() {
			o(), n.remove();
		}
		var o = (0, Wi.bindAll)(window, [
			{
				type: "pointerdown",
				listener: a
			},
			{
				type: "pointermove",
				listener: a
			},
			{
				type: "focusin",
				listener: a
			},
			{
				type: "focusout",
				listener: a
			},
			{
				type: "dragstart",
				listener: a
			},
			{
				type: "dragenter",
				listener: a
			},
			{
				type: "dragover",
				listener: a
			}
		], { capture: !0 });
	};
}
function da() {
	var e = null;
	function t() {
		return e = null, (0, Wi.bind)(window, {
			type: "pointermove",
			listener: function(t) {
				e = {
					x: t.clientX,
					y: t.clientY
				};
			},
			options: { capture: !0 }
		});
	}
	function n() {
		var t = null;
		return function(n) {
			var r = n.eventName, i = n.payload;
			if (r === "onDragStart") {
				var a = i.location.initial.input;
				t = ua({ initial: e ?? {
					x: a.clientX,
					y: a.clientY
				} });
			}
			if (r === "onDrop") {
				var o, s = i.location.current.input;
				(o = t) == null || o({ current: {
					x: s.clientX,
					y: s.clientY
				} }), t = null, e = null;
			}
		};
	}
	return {
		bindEvents: t,
		getOnPostDispatch: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function fa(e) {
	if (Array.isArray(e)) return Ri(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function pa(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function ma() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function ha(e) {
	return fa(e) || pa(e) || zi(e) || ma();
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/once.js
function ga(e) {
	var t = null;
	return function() {
		if (!t) {
			var n = [...arguments];
			t = { result: e.apply(this, n) };
		}
		return t.result;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/is-firefox.js
var _a = ga(function() {
	return process.env.NODE_ENV !== "test" && navigator.userAgent.includes("Firefox");
}), va = ga(function() {
	if (process.env.NODE_ENV === "test") return !1;
	var e = navigator.userAgent;
	return e.includes("AppleWebKit") && !e.includes("Chrome");
}), ya = {
	isLeavingWindow: Symbol("leaving"),
	isEnteringWindow: Symbol("entering")
};
function ba(e) {
	var t = e.dragLeave;
	return va() ? t.hasOwnProperty(ya.isLeavingWindow) : !1;
}
(function() {
	if (typeof window > "u" || process.env.NODE_ENV === "test" || !va()) return;
	function e() {
		return {
			enterCount: 0,
			isOverWindow: !1
		};
	}
	var t = e();
	function n() {
		t = e();
	}
	(0, Wi.bindAll)(window, [
		{
			type: "dragstart",
			listener: function() {
				t.enterCount = 0, t.isOverWindow = !0;
			}
		},
		{
			type: "drop",
			listener: n
		},
		{
			type: "dragend",
			listener: n
		},
		{
			type: "dragenter",
			listener: function(e) {
				!t.isOverWindow && t.enterCount === 0 && (e[ya.isEnteringWindow] = !0), t.isOverWindow = !0, t.enterCount++;
			}
		},
		{
			type: "dragleave",
			listener: function(e) {
				t.enterCount--, t.isOverWindow && t.enterCount === 0 && (e[ya.isLeavingWindow] = !0, t.isOverWindow = !1);
			}
		}
	], { capture: !0 });
})();
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-from-another-window.js
function xa(e) {
	return "nodeName" in e;
}
function Sa(e) {
	return xa(e) && e.ownerDocument !== document;
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-leaving-window.js
function Ca(e) {
	var t = e.dragLeave, n = t.type, r = t.relatedTarget;
	return n === "dragleave" ? va() ? ba({ dragLeave: t }) : r == null ? !0 : _a() ? Sa(r) : r instanceof HTMLIFrameElement : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/detect-broken-drag.js
function wa(e) {
	var t = e.onDragEnd;
	return [{
		type: "pointermove",
		listener: function() {
			var e = 0;
			return function() {
				if (e < 20) {
					e++;
					return;
				}
				t();
			};
		}()
	}, {
		type: "pointerdown",
		listener: t
	}];
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/get-input.js
function Ta(e) {
	return {
		altKey: e.altKey,
		button: e.button,
		buttons: e.buttons,
		ctrlKey: e.ctrlKey,
		metaKey: e.metaKey,
		shiftKey: e.shiftKey,
		clientX: e.clientX,
		clientY: e.clientY,
		pageX: e.pageX,
		pageY: e.pageY
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/dispatch-consumer-event.js
var Ea = function(e) {
	var t = [], n = null, r = function() {
		t = [...arguments], !n && (n = requestAnimationFrame(function() {
			n = null, e.apply(void 0, t);
		}));
	};
	return r.cancel = function() {
		n &&= (cancelAnimationFrame(n), null);
	}, r;
}(function(e) {
	return e();
}), Da = function() {
	var e = null;
	function t(t) {
		e = {
			frameId: requestAnimationFrame(function() {
				e = null, t();
			}),
			fn: t
		};
	}
	function n() {
		e &&= (cancelAnimationFrame(e.frameId), e.fn(), null);
	}
	return {
		schedule: t,
		flush: n
	};
}();
function Oa(e) {
	var t = e.source, n = e.initial, r = e.dispatchEvent, i = { dropTargets: [] };
	function a(e) {
		r(e), i = { dropTargets: e.payload.location.current.dropTargets };
	}
	return {
		start: function(e) {
			var r = e.nativeSetDragImage, o = {
				current: n,
				previous: i,
				initial: n
			};
			a({
				eventName: "onGenerateDragPreview",
				payload: {
					source: t,
					location: o,
					nativeSetDragImage: r
				}
			}), Da.schedule(function() {
				a({
					eventName: "onDragStart",
					payload: {
						source: t,
						location: o
					}
				});
			});
		},
		dragUpdate: function(e) {
			var r = e.current;
			Da.flush(), Ea.cancel(), a({
				eventName: "onDropTargetChange",
				payload: {
					source: t,
					location: {
						initial: n,
						previous: i,
						current: r
					}
				}
			});
		},
		drag: function(e) {
			var r = e.current;
			Ea(function() {
				Da.flush(), a({
					eventName: "onDrag",
					payload: {
						source: t,
						location: {
							initial: n,
							previous: i,
							current: r
						}
					}
				});
			});
		},
		drop: function(e) {
			var r = e.current, o = e.updatedSourcePayload;
			Da.flush(), Ea.cancel(), a({
				eventName: "onDrop",
				payload: {
					source: o ?? t,
					location: {
						current: r,
						previous: i,
						initial: n
					}
				}
			});
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/lifecycle-manager.js
var ka = { isActive: !1 };
function Aa() {
	return !ka.isActive;
}
function ja(e) {
	return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function Ma(e) {
	var t = e.current, n = e.next;
	if (t.length !== n.length) return !0;
	for (var r = 0; r < t.length; r++) if (t[r].element !== n[r].element) return !0;
	return !1;
}
function Na(e) {
	var t = e.event, n = e.dragType, r = e.getDropTargetsOver, i = e.dispatchEvent;
	if (!Aa()) return;
	var a = Fa({
		event: t,
		dragType: n,
		getDropTargetsOver: r
	});
	ka.isActive = !0;
	var o = { current: a };
	Pa({
		event: t,
		current: a.dropTargets
	});
	var s = Oa({
		source: n.payload,
		dispatchEvent: i,
		initial: a
	});
	function c(e) {
		var t = Ma({
			current: o.current.dropTargets,
			next: e.dropTargets
		});
		o.current = e, t && s.dragUpdate({ current: o.current });
	}
	function l(e) {
		var t = Ta(e), i = r({
			target: Ki(e.target) ? qi({
				x: t.clientX,
				y: t.clientY
			}) : e.target,
			input: t,
			source: n.payload,
			current: o.current.dropTargets
		});
		i.length && (e.preventDefault(), Pa({
			event: e,
			current: i
		})), c({
			dropTargets: i,
			input: t
		});
	}
	function u() {
		o.current.dropTargets.length && c({
			dropTargets: [],
			input: o.current.input
		}), s.drop({
			current: o.current,
			updatedSourcePayload: null
		}), d();
	}
	function d() {
		ka.isActive = !1, f();
	}
	var f = (0, Wi.bindAll)(window, [
		{
			type: "dragover",
			listener: function(e) {
				l(e), s.drag({ current: o.current });
			}
		},
		{
			type: "dragenter",
			listener: l
		},
		{
			type: "dragleave",
			listener: function(e) {
				Ca({ dragLeave: e }) && (c({
					input: o.current.input,
					dropTargets: []
				}), n.startedFrom === "external" && u());
			}
		},
		{
			type: "drop",
			listener: function(e) {
				if (o.current = {
					dropTargets: o.current.dropTargets,
					input: Ta(e)
				}, !o.current.dropTargets.length) {
					u();
					return;
				}
				e.preventDefault(), Pa({
					event: e,
					current: o.current.dropTargets
				}), s.drop({
					current: o.current,
					updatedSourcePayload: n.type === "external" ? n.getDropPayload(e) : null
				}), d();
			}
		},
		{
			type: "dragend",
			listener: function(e) {
				o.current = {
					dropTargets: o.current.dropTargets,
					input: Ta(e)
				}, u();
			}
		}
	].concat(ha(wa({ onDragEnd: u }))), { capture: !0 });
	s.start({ nativeSetDragImage: ja(t) });
}
function Pa(e) {
	var t = e.event, n = e.current[0]?.dropEffect;
	n != null && t.dataTransfer && (t.dataTransfer.dropEffect = n);
}
function Fa(e) {
	var t = e.event, n = e.dragType, r = e.getDropTargetsOver, i = Ta(t);
	return n.startedFrom === "external" ? {
		input: i,
		dropTargets: []
	} : {
		input: i,
		dropTargets: r({
			input: i,
			source: n.payload,
			target: t.target,
			current: []
		})
	};
}
var Ia = {
	canStart: Aa,
	start: Na
}, La = /* @__PURE__ */ new Map();
function Ra(e) {
	var t = e.typeKey, n = e.mount, r = La.get(t);
	if (r) return r.usageCount++, r;
	var i = {
		typeKey: t,
		unmount: n(),
		usageCount: 1
	};
	return La.set(t, i), i;
}
function za(e) {
	var t = Ra(e);
	return function() {
		t.usageCount--, !(t.usageCount > 0) && (t.unmount(), La.delete(e.typeKey));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/combine.js
function Ba() {
	var e = [...arguments];
	return function() {
		e.forEach(function(e) {
			return e();
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/add-attribute.js
function Va(e, t) {
	var n = t.attribute, r = t.value;
	return e.setAttribute(n, r), function() {
		return e.removeAttribute(n);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-drop-target.js
function Ha(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ua(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ha(Object(n), !0).forEach(function(t) {
			Zi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ha(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Wa(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = Ga(e)) || t && e && typeof e.length == "number") {
			n && (e = n);
			var r = 0, i = function() {};
			return {
				s: i,
				n: function() {
					return r >= e.length ? { done: !0 } : {
						done: !1,
						value: e[r++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: i
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var a, o = !0, s = !1;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return o = e.done, e;
		},
		e: function(e) {
			s = !0, a = e;
		},
		f: function() {
			try {
				o || n.return == null || n.return();
			} finally {
				if (s) throw a;
			}
		}
	};
}
function Ga(e, t) {
	if (e) {
		if (typeof e == "string") return Ka(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ka(e, t) : void 0;
	}
}
function Ka(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function qa(e) {
	return e.slice(0).reverse();
}
function Ja(e) {
	var t = e.typeKey, n = e.defaultDropEffect, r = /* @__PURE__ */ new WeakMap(), i = `data-drop-target-for-${t}`, a = `[${i}]`;
	function o(e) {
		return r.set(e.element, e), function() {
			return r.delete(e.element);
		};
	}
	function s(e) {
		if (process.env.NODE_ENV !== "production") {
			var n = r.get(e.element);
			n && console.warn(`You have already registered a [${t}] dropTarget on the same element`, {
				existing: n,
				proposed: e
			}), e.element instanceof HTMLIFrameElement && console.warn("\n            We recommend not registering <iframe> elements as drop targets\n            as it can result in some strange browser event ordering.\n          ".replace(/\s{2,}/g, " ").trim());
		}
		return ga(Ba(Va(e.element, {
			attribute: i,
			value: "true"
		}), o(e)));
	}
	function c(e) {
		var t = e.source, i = e.target, o = e.input, s = e.result, l = s === void 0 ? [] : s;
		if (i == null) return l;
		if (!(i instanceof Element)) return i instanceof Node ? c({
			source: t,
			target: i.parentElement,
			input: o,
			result: l
		}) : l;
		var u = i.closest(a);
		if (u == null) return l;
		var d = r.get(u);
		if (d == null) return l;
		var f = {
			input: o,
			source: t,
			element: d.element
		};
		if (d.canDrop && !d.canDrop(f)) return c({
			source: t,
			target: d.element.parentElement,
			input: o,
			result: l
		});
		var p = d.getData?.call(d, f) ?? {}, m = d.getDropEffect?.call(d, f) ?? n, h = {
			data: p,
			element: d.element,
			dropEffect: m,
			isActiveDueToStickiness: !1
		};
		return c({
			source: t,
			target: d.element.parentElement,
			input: o,
			result: [].concat(ha(l), [h])
		});
	}
	function l(e) {
		var t = e.eventName, n = e.payload, i = Wa(n.location.current.dropTargets), a;
		try {
			for (i.s(); !(a = i.n()).done;) {
				var o, s = a.value, c = r.get(s.element), l = Ua(Ua({}, n), {}, { self: s });
				c == null || (o = c[t]) == null || o.call(c, l);
			}
		} catch (e) {
			i.e(e);
		} finally {
			i.f();
		}
	}
	var u = {
		onGenerateDragPreview: l,
		onDrag: l,
		onDragStart: l,
		onDrop: l,
		onDropTargetChange: function(e) {
			var t = e.payload, n = new Set(t.location.current.dropTargets.map(function(e) {
				return e.element;
			})), i = /* @__PURE__ */ new Set(), a = Wa(t.location.previous.dropTargets), o;
			try {
				for (a.s(); !(o = a.n()).done;) {
					var s, c = o.value;
					i.add(c.element);
					var l = r.get(c.element), u = n.has(c.element), d = Ua(Ua({}, t), {}, { self: c });
					if (l == null || (s = l.onDropTargetChange) == null || s.call(l, d), !u) {
						var f;
						l == null || (f = l.onDragLeave) == null || f.call(l, d);
					}
				}
			} catch (e) {
				a.e(e);
			} finally {
				a.f();
			}
			var p = Wa(t.location.current.dropTargets), m;
			try {
				for (p.s(); !(m = p.n()).done;) {
					var h, g, _ = m.value;
					if (!i.has(_.element)) {
						var v = Ua(Ua({}, t), {}, { self: _ }), y = r.get(_.element);
						y == null || (h = y.onDropTargetChange) == null || h.call(y, v), y == null || (g = y.onDragEnter) == null || g.call(y, v);
					}
				}
			} catch (e) {
				p.e(e);
			} finally {
				p.f();
			}
		}
	};
	function d(e) {
		u[e.eventName](e);
	}
	function f(e) {
		var t = e.source, n = e.target, i = e.input, a = e.current, o = c({
			source: t,
			target: n,
			input: i
		});
		if (o.length >= a.length) return o;
		for (var s = qa(a), l = qa(o), u = [], d = 0; d < s.length; d++) {
			var f, p = s[d], m = l[d];
			if (m != null) {
				u.push(m);
				continue;
			}
			var h = u[d - 1], g = s[d - 1];
			if (h?.element !== g?.element) break;
			var _ = r.get(p.element);
			if (!_) break;
			var v = {
				input: i,
				source: t,
				element: _.element
			};
			if (_.canDrop && !_.canDrop(v) || !((f = _.getIsSticky) != null && f.call(_, v))) break;
			u.push(Ua(Ua({}, p), {}, { isActiveDueToStickiness: !0 }));
		}
		return qa(u);
	}
	return {
		dropTargetForConsumers: s,
		getIsOver: f,
		dispatchEvent: d
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-monitor.js
function Ya(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = Xa(e)) || t && e && typeof e.length == "number") {
			n && (e = n);
			var r = 0, i = function() {};
			return {
				s: i,
				n: function() {
					return r >= e.length ? { done: !0 } : {
						done: !1,
						value: e[r++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: i
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var a, o = !0, s = !1;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return o = e.done, e;
		},
		e: function(e) {
			s = !0, a = e;
		},
		f: function() {
			try {
				o || n.return == null || n.return();
			} finally {
				if (s) throw a;
			}
		}
	};
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
function Qa(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $a(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Qa(Object(n), !0).forEach(function(t) {
			Zi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function eo() {
	var e = /* @__PURE__ */ new Set(), t = null;
	function n(e) {
		t && (!e.canMonitor || e.canMonitor(t.canMonitorArgs)) && t.active.add(e);
	}
	function r(r) {
		var i = $a({}, r);
		e.add(i), n(i);
		function a() {
			e.delete(i), t && t.active.delete(i);
		}
		return ga(a);
	}
	function i(r) {
		var i = r.eventName, a = r.payload;
		if (i === "onGenerateDragPreview") {
			t = {
				canMonitorArgs: {
					initial: a.location.initial,
					source: a.source
				},
				active: /* @__PURE__ */ new Set()
			};
			var o = Ya(e), s;
			try {
				for (o.s(); !(s = o.n()).done;) {
					var c = s.value;
					n(c);
				}
			} catch (e) {
				o.e(e);
			} finally {
				o.f();
			}
		}
		if (t) {
			for (var l = Array.from(t.active), u = 0, d = l; u < d.length; u++) {
				var f = d[u];
				if (t.active.has(f)) {
					var p;
					(p = f[i]) == null || p.call(f, a);
				}
			}
			i === "onDrop" && (t.active.clear(), t = null);
		}
	}
	return {
		dispatchEvent: i,
		monitorForConsumers: r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-adapter.js
function to(e) {
	var t = e.typeKey, n = e.mount, r = e.dispatchEventToSource, i = e.onPostDispatch, a = e.defaultDropEffect, o = eo(), s = Ja({
		typeKey: t,
		defaultDropEffect: a
	});
	function c(e) {
		r?.(e), s.dispatchEvent(e), o.dispatchEvent(e), i?.(e);
	}
	function l(e) {
		var t = e.event, n = e.dragType;
		Ia.start({
			event: t,
			dragType: n,
			getDropTargetsOver: s.getIsOver,
			dispatchEvent: c
		});
	}
	function u() {
		function e() {
			return n({
				canStart: Ia.canStart,
				start: l
			});
		}
		return za({
			typeKey: t,
			mount: e
		});
	}
	return {
		registerUsage: u,
		dropTarget: s.dropTargetForConsumers,
		monitor: o.monitorForConsumers
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/android.js
var no = ga(function() {
	return navigator.userAgent.toLocaleLowerCase().includes("android");
}), ro = "pdnd:android-fallback", io = "text/plain", ao = "application/vnd.pdnd", oo = /* @__PURE__ */ new WeakMap();
function so(e) {
	return oo.set(e.element, e), function() {
		oo.delete(e.element);
	};
}
var co = da(), lo = to({
	typeKey: "element",
	defaultDropEffect: "move",
	mount: function(e) {
		return Ba(co.bindEvents(), (0, Wi.bind)(document, {
			type: "dragstart",
			listener: function(t) {
				if (e.canStart(t) && !t.defaultPrevented) {
					if (!t.dataTransfer) {
						process.env.NODE_ENV !== "production" && console.warn("\n              It appears as though you have are not testing DragEvents correctly.\n\n              - If you are unit testing, ensure you have polyfilled DragEvent.\n              - If you are browser testing, ensure you are dispatching drag events correctly.\n\n              Please see our testing guides for more information:\n              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing\n            ".replace(/ {2}/g, ""));
						return;
					}
					var n = t.target;
					if (!(n instanceof HTMLElement)) return null;
					var r = oo.get(n);
					if (!r) return null;
					var i = Ta(t), a = {
						element: r.element,
						dragHandle: r.dragHandle ?? null,
						input: i
					};
					if (r.canDrag && !r.canDrag(a)) return t.preventDefault(), null;
					if (r.dragHandle) {
						var o = qi({
							x: i.clientX,
							y: i.clientY
						});
						if (!r.dragHandle.contains(o)) return t.preventDefault(), null;
					}
					var s = r.getInitialDataForExternal?.call(r, a) ?? null;
					if (s) for (var c = 0, l = Object.entries(s); c < l.length; c++) {
						var u = Vi(l[c], 2), d = u[0], f = u[1];
						t.dataTransfer.setData(d, f ?? "");
					}
					no() && !t.dataTransfer.types.includes("text/plain") && !t.dataTransfer.types.includes("text/uri-list") && t.dataTransfer.setData(io, ro), t.dataTransfer.setData(ao, "");
					var p = {
						type: "element",
						payload: {
							element: r.element,
							dragHandle: r.dragHandle ?? null,
							data: r.getInitialData?.call(r, a) ?? {}
						},
						startedFrom: "internal"
					};
					e.start({
						event: t,
						dragType: p
					});
				}
			}
		}));
	},
	dispatchEventToSource: function(e) {
		var t, n, r = e.eventName, i = e.payload;
		(t = oo.get(i.source.element)) == null || (n = t[r]) == null || n.call(t, i);
	},
	onPostDispatch: co.getOnPostDispatch()
}), uo = lo.dropTarget, fo = lo.monitor;
function po(e) {
	if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
		element: e.element,
		dragHandle: e.dragHandle
	}), process.env.NODE_ENV !== "production") {
		var t = oo.get(e.element);
		t && console.warn("You have already registered a `draggable` on the same element", {
			existing: t,
			proposed: e
		});
	}
	return ga(Ba(lo.registerUsage(), so(e), Va(e.element, {
		attribute: "draggable",
		value: "true"
	})));
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop-hitbox@1.1.0/node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.js
function mo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ho(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? mo(Object(n), !0).forEach(function(t) {
			Zi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var go = {
	top: function(e, t) {
		return Math.abs(t.y - e.top);
	},
	right: function(e, t) {
		return Math.abs(e.right - t.x);
	},
	bottom: function(e, t) {
		return Math.abs(e.bottom - t.y);
	},
	left: function(e, t) {
		return Math.abs(t.x - e.left);
	}
}, _o = Symbol("closestEdge");
function vo(e, t) {
	var n = t.element, r = t.input, i = t.allowedEdges, a = {
		x: r.clientX,
		y: r.clientY
	}, o = n.getBoundingClientRect(), s = i.map(function(e) {
		return {
			edge: e,
			value: go[e](o, a)
		};
	}).sort(function(e, t) {
		return e.value - t.value;
	})[0]?.edge ?? null;
	return ho(ho({}, e), {}, Zi({}, _o, s));
}
function yo(e) {
	return e[_o] ?? null;
}
//#endregion
//#region src/lib/dnd/atlaskitDriver.ts
function bo(e) {
	let t = /* @__PURE__ */ new Set();
	return fo({
		canMonitor(t) {
			return t.source.data.instanceId === e;
		},
		onDragStart(e) {
			let n = e.source.data;
			t.forEach((e) => e({
				phase: "start",
				source: n
			}));
		},
		onDrop(e) {
			let n = e.source.data;
			t.forEach((e) => e({
				phase: "drop",
				source: n
			}));
		},
		onDropTargetChange(e) {
			let n = e.source.data;
			t.forEach((e) => e({
				phase: "over",
				source: n
			}));
		}
	}), {
		registerDraggable(t, { payload: n, disabled: r, handle: i }) {
			return r ? () => {} : po({
				element: t,
				getInitialData: () => ({
					...n,
					instanceId: e
				}),
				dragHandle: i ?? void 0
			});
		},
		registerDroppable(e, { id: t }) {
			return uo({
				element: e,
				getData: ({ input: e, element: n }) => vo({
					type: "list-droppable",
					index: 0,
					id: t
				}, {
					input: e,
					element: n,
					allowedEdges: ["top", "bottom"]
				})
			});
		},
		subscribe(e) {
			return t.add(e), () => t.delete(e);
		}
	};
}
//#endregion
//#region src/lib/dnd/context.tsx
var xo = Rn(null);
function So() {
	return Un(xo);
}
function Co({ driver: e, children: t }) {
	let n = q(e), r = K(() => ({ driver: n.current }), []);
	return /* @__PURE__ */ X(xo.Provider, {
		value: r,
		children: t
	});
}
//#endregion
//#region src/lib/dnd/hooks.ts
function wo(e) {
	let t = So(), { ref: n, payload: r, disabled: i, handleRef: a } = e, o = r.data, s = r.id + "|" + (o?.currentParentId ?? "null");
	G(() => {
		if (n.current && !(!t || i)) return t.driver.registerDraggable(n.current, {
			payload: r,
			disabled: i,
			handle: a?.current ?? null
		});
	}, [
		t,
		n,
		s,
		i,
		a,
		r
	]);
}
function To(e) {
	let t = So(), n = e?.ref, r = e?.id, i = e?.accepts;
	G(() => {
		if (n?.current && !(!t || !r || !i)) return t.driver.registerDroppable(n.current, {
			id: r,
			accepts: i
		});
	}, [
		t,
		n,
		r,
		i
	]);
}
function Eo(e) {
	let t = So();
	G(() => t ? t.driver.subscribe(e) : void 0, [t, e]);
}
//#endregion
//#region src/ui/table.tsx
var Do = Pn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("div", {
	className: "relative w-full",
	children: /* @__PURE__ */ X("table", {
		ref: n,
		className: H("w-full caption-bottom border-spacing-0 border-0 border-none text-base", e),
		...t
	})
}));
Do.displayName = "Table";
var Oo = Pn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("thead", {
	ref: n,
	className: H("relative min-h-10 [&_tr]:hover:bg-transparent", "before:absolute before:inset-x-0 before:top-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']", e),
	...t
}));
Oo.displayName = "TableHeader";
var ko = Pn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("tbody", {
	ref: n,
	className: H("border-0", e),
	...t
}));
ko.displayName = "TableBody";
var Ao = Pn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("tfoot", {
	ref: n,
	className: H("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
	...t
}));
Ao.displayName = "TableFooter";
var jo = Pn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("tr", {
	ref: n,
	className: H("group relative transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] hover:bg-f1-background-hover", e),
	...t
}));
jo.displayName = "TableRow";
var Mo = Pn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("th", {
	ref: n,
	className: H("relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6", "after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover", "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent", e),
	...t
}));
Mo.displayName = "TableHead";
var No = Pn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("td", {
	ref: n,
	className: H("relative min-h-[48px] whitespace-nowrap px-3 pb-[9px] pt-2 align-top first:pl-6 last:pr-6", "[&:has([role=checkbox])]:px-2", e),
	...t
}));
No.displayName = "TableCell";
var Po = Pn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("caption", {
	ref: n,
	className: H("text-muted-foreground mt-4 text-sm", e),
	...t
}));
Po.displayName = "TableCaption";
//#endregion
//#region src/experimental/OneTable/TableBody/index.tsx
function Fo({ children: e }) {
	return /* @__PURE__ */ X(ko, { children: e });
}
//#endregion
//#region src/experimental/OneTable/utils/sizes.tsx
var Io = {
	auto: void 0,
	fit: 1
}, Lo = (e) => typeof e == "number", Ro = (e) => Lo(e) ? e : Io[e], zo = Rn(void 0);
function Bo() {
	let e = Un(zo);
	if (!e) throw Error("useTable must be used within a TableProvider");
	return e;
}
var Vo = ({ depth: e, padding: t = 0 }) => `${e * 32 + t}px`, Ho = ({ depth: e, isDetailedVariant: t }) => Vo({
	depth: e,
	padding: -4
}), Uo = (e, t) => e && t > 0, Wo = (e, t) => e && t, Go = (e, t) => e && t, Ko = (e, t) => e && t, qo = (e, t, n) => !t && Ko(e, n), Jo = (e, t) => e && t?.nestedVariant === "detailed", Yo = ({ width: e, linkRef: t, firstCell: n, nestedRowProps: r, children: i, onClick: a }) => {
	let { collections: o } = g(), s = Wo(n, !!r?.rowWithChildren), c = Uo(n, r?.depth ?? 0), l = qo(n, !!r?.rowWithChildren, !!r?.tableWithChildren), u = Jo(n, r), d = r?.onLoadMoreChildren, f = r?.onAddRow, p = r?.depth ?? 0, m = c ? Vo({ depth: s ? p : p + 1 }) : void 0, h = d || f;
	return /* @__PURE__ */ X("div", {
		className: H(e !== "auto" && "overflow-hidden", "relative z-[1] h-full", s && "flex items-center gap-2"),
		style: { marginLeft: h ? Ho({
			depth: p + +!u,
			isDetailedVariant: u
		}) : m },
		onClick: () => {
			h || (t.current?.click(), a?.());
		},
		children: f ? /* @__PURE__ */ X("div", {
			className: H("pointer-events-auto flex items-center w-full h-full", u && "pl-3"),
			children: f.actions.length === 1 ? /* @__PURE__ */ X(P, {
				variant: "outline",
				size: "sm",
				icon: f.actions[0].icon ?? ut,
				label: f.actions[0].label,
				onClick: (e) => {
					e.stopPropagation(), f.actions[0].onClick?.();
				},
				loading: f.actions[0].loading,
				disabled: f.actions[0].disabled
			}) : f.actions.some((e) => e.description !== void 0) ? /* @__PURE__ */ X(ee, {
				mode: "dropdown",
				variant: "outline",
				size: "sm",
				trigger: f.label,
				disabled: f.actions.every((e) => e.disabled),
				loading: f.actions.some((e) => e.loading),
				items: f.actions.map((e, t) => ({
					value: t.toString(),
					label: e.label,
					icon: e.icon,
					description: e.description
				})),
				onClick: (e) => {
					f.actions[Number(e)]?.onClick?.();
				}
			}) : /* @__PURE__ */ X(ee, {
				variant: "outline",
				size: "sm",
				disabled: f.actions.every((e) => e.disabled),
				loading: f.actions.some((e) => e.loading),
				items: f.actions.map((e, t) => ({
					value: t.toString(),
					label: e.label,
					icon: e.icon
				})),
				onClick: (e) => {
					f.actions[Number(e)]?.onClick?.();
				}
			})
		}) : d ? /* @__PURE__ */ X(Y, { children: /* @__PURE__ */ X("div", {
			className: H("pointer-events-auto cursor-pointer flex items-center w-full h-full border-0 border-r-[1px] border-solid border-f1-border-secondary"),
			children: /* @__PURE__ */ X(P, {
				variant: "ghost",
				size: "md",
				icon: Ht,
				label: o.table.seeMoreChildren,
				onClick: (e) => {
					e.stopPropagation(), d?.();
				}
			})
		}) }) : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("div", {
			className: H("flex h-[var(--chevron-parent-size)] w-[var(--chevron-parent-size)] min-w-[var(--chevron-parent-size)] items-center justify-center", s && "pointer-events-auto cursor-pointer rounded-sm hover:bg-f1-foreground-disabled"),
			style: {
				"--chevron-parent-size": "24px",
				"--chevron-size": "18px",
				"--spacing-factor": "32px"
			},
			onClick: (e) => {
				s && (e.stopPropagation(), r?.onExpand?.());
			},
			children: s && (r?.expanded ? /* @__PURE__ */ X(Ye, {
				className: "pointer-events-none shrink-0",
				size: 18
			}) : /* @__PURE__ */ X(yn, {
				className: "pointer-events-none shrink-0",
				size: 18
			}))
		}), /* @__PURE__ */ X("div", {
			className: H(s && "min-w-0 w-full h-full", l && "pl-[var(--spacing-factor)]", "relative"),
			children: i
		})] })
	});
}, Xo = (e, t, n) => {
	let { rowWithChildren: r, nestedVariant: i, onLoadMoreChildren: a, onAddRow: o } = t ?? {}, s = i === "detailed", c = a || o, l = c ? 8 : 4, u = r && !c ? 16 : s ? 34 : 40, d = e !== 0 && `calc(${e}px - 32px )`, f = n === "editableTable" ? {
		"--horizontal-offset": `${l + (s ? 12 : 8)}px`,
		"--starting-y": "52px",
		...d ? { "--line-height": `calc(${d} - ${s ? 12 : 0}px)` } : {}
	} : {}, p = n === "editableTable" ? 24 : 16;
	return {
		"--line-left": `-${36 - (t?.selectableRow ? p : 0)}px`,
		"--line-width": "1px",
		"--horizontal-offset": `${l}px`,
		"--horizontal-left": `calc(4px - ${t?.selectableRow ? p : 0}px)`,
		"--horizontal-height": "16px",
		"--connector-width": `${u}px`,
		...d ? { "--line-height": d } : {},
		"--starting-y": "40px",
		...f
	};
}, Zo = ({ firstCell: e, nestedRowProps: t, fromVisualization: n }) => {
	let r = Uo(e, t?.depth ?? 0), i = Go(t?.expanded ?? !1, e), a = t === void 0 || t?.nestedVariant === "basic", o = t?.nestedVariant === "detailed", s = a || t?.rowWithChildren, c = o && (t?.onLoadMoreChildren || t?.onAddRow), l = r ? Vo({
		depth: t?.depth ?? 0,
		padding: 0
	}) : void 0, u = t?.connectorHeight ?? 0;
	return !i && !r && !t?.rowWithChildren ? null : /* @__PURE__ */ X("div", {
		className: H("absolute inset-0 h-full", t?.parentHasChildren && i && "h-full overflow-visible before:absolute before:-left-[var(--line-left)] before:top-[var(--starting-y)] before:h-[var(--line-height)] before:w-[var(--line-width)] before:bg-f1-foreground-disabled before:content-['']", t?.parentHasChildren && r && s && !c && "after:absolute after:left-[var(--horizontal-left)] after:top-[var(--horizontal-offset)] after:h-[var(--horizontal-height)] after:w-[var(--connector-width)] after:rounded-bl-[var(--horizontal-height)] after:content-[''] after:shadow-[inset_1px_-1px_0_0_hsl(var(--neutral-30))]"),
		style: {
			marginLeft: l,
			...Xo(u, t, n)
		}
	});
}, Qo = "repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)", $o = "before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", es = {
	none: `bg-f1-background ${$o} before:bg-f1-background group-hover:before:bg-f1-background-hover`,
	striped: `bg-f1-background bg-[${Qo}] [background-size:100%_100px] ${$o} before:bg-[${Qo},_var(--f1-background)] before:[background-size:100%_100px,_100%_100%] group-hover:before:bg-[${Qo},_var(--f1-background-hover)] group-hover:before:[background-size:100%_100px,_100%_100%]`,
	striked: `bg-f1-background ${$o} before:bg-f1-background group-hover:before:bg-f1-background-hover`
};
function ts({ children: e, href: t, onClick: n, width: r = "auto", minWidth: i, firstCell: a = !1, sticky: o, colSpan: s, className: c, loading: l = !1, nestedRowProps: u, fromVisualization: d, referenceRowType: f = "none", highlighted: p = !1 }) {
	let { isScrolled: m, isScrolledRight: h } = Bo(), { actions: _ } = g(), v = o?.left !== void 0, y = o?.right !== void 0, b = v || y, x = o?.left, S = o?.right, C = Ro(r), w = i === void 0 ? C : Ro(i), E = q(null), D = u?.depth ?? 0, O = u?.nestedVariant === "detailed", k = Ko(a, !!u?.tableWithChildren) && { marginLeft: `${(D + +!O) * 32}px` };
	return /* @__PURE__ */ Z(No, {
		colSpan: s,
		className: H("h-full", a && "peer font-medium", b && m && es[f], b && "sticky z-10", y && es[f], p && "bg-[hsl(var(--neutral-2))] group-hover:bg-f1-background-hover", p && b && "before:bg-[hsl(var(--neutral-2))] group-hover:before:bg-f1-background-hover", t && "cursor-pointer", c),
		style: {
			width: C,
			maxWidth: C,
			minWidth: w,
			left: x,
			right: S
		},
		children: [
			/* @__PURE__ */ X(z, { children: (v && m || y && h) && /* @__PURE__ */ X(B.div, {
				className: H("absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent", v && "-right-4 bg-gradient-to-r", y && "-left-4 bg-gradient-to-l"),
				initial: { opacity: 0 },
				animate: { opacity: .1 },
				exit: { opacity: 0 }
			}, "cell-shadow-gradient") }),
			a && u?.tableWithChildren && /* @__PURE__ */ X(Zo, {
				firstCell: a,
				nestedRowProps: u,
				fromVisualization: d
			}),
			l && /* @__PURE__ */ X("div", {
				style: { ...k },
				className: H("flex h-full items-center", d === "editableTable" ? "min-h-[32px]" : "min-h-[24px]"),
				children: /* @__PURE__ */ X(T, { className: "h-4 w-full" })
			}),
			!l && /* @__PURE__ */ Z(Y, { children: [
				/* @__PURE__ */ X("div", {
					className: H("[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1]", "[&:has([type=button])]:relative [&:has([type=button])]:z-[1]", "[&:has(a)]:relative [&:has(a)]:z-[1]", "pointer-events-none h-full items-start"),
					children: Wo(a, !!u?.rowWithChildren) ? /* @__PURE__ */ X(Yo, {
						linkRef: E,
						firstCell: a,
						nestedRowProps: u,
						children: e
					}) : /* @__PURE__ */ X("div", {
						className: H(r !== "auto" && "overflow-hidden", "relative z-[1] h-full"),
						style: { ...k },
						onClick: () => {
							E.current?.click(), n?.();
						},
						children: e
					})
				}),
				t && /* @__PURE__ */ X(M, {
					ref: E,
					href: t,
					className: "pointer-events-auto absolute inset-0 !z-0 block",
					tabIndex: a ? void 0 : -1,
					children: /* @__PURE__ */ X("span", {
						className: "sr-only",
						children: _.view
					})
				}),
				n && /* @__PURE__ */ X("button", {
					type: "button",
					onClick: (e) => {
						e.stopPropagation(), n();
					},
					"data-testid": "table-cell-action-button",
					className: "table-cell-action-button absolute inset-0 !z-0 block",
					tabIndex: a ? void 0 : -1,
					onKeyDown: (e) => {
						(e.key === "Enter" || e.key === " ") && (e.preventDefault(), n());
					},
					children: /* @__PURE__ */ X("span", {
						className: "sr-only",
						children: _.view
					})
				})
			] })
		]
	});
}
//#endregion
//#region src/lib/InfoHint/InfoHint.tsx
function ns({ info: e, icon: t, label: n }) {
	let [r, i] = J(!1), { forms: a } = g();
	return /* @__PURE__ */ Z(hn, {
		open: r,
		onOpenChange: i,
		openDelay: 300,
		closeDelay: 100,
		children: [/* @__PURE__ */ X(cn, {
			asChild: !0,
			children: /* @__PURE__ */ X("button", {
				type: "button",
				className: H("flex h-5 w-5 items-center justify-center rounded-xs text-f1-foreground-secondary", V()),
				"aria-label": e.label ?? n ?? a.moreInformation,
				children: /* @__PURE__ */ X(p, {
					icon: t,
					size: "sm"
				})
			})
		}), /* @__PURE__ */ X(on, {
			className: "w-auto max-w-xs px-3 py-2 shadow-md",
			children: /* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-1 whitespace-normal text-left",
				children: [
					/* @__PURE__ */ X("p", { children: e.title }),
					/* @__PURE__ */ X("p", {
						className: "text-f1-foreground-inverse-secondary",
						children: e.description
					}),
					e.link && /* @__PURE__ */ X("button", {
						type: "button",
						onClick: () => {
							i(!1), e.link?.onClick();
						},
						className: H("mt-1 w-fit rounded-xs font-medium text-f1-foreground-inverse underline underline-offset-2 transition-colors hover:text-f1-foreground-inverse-secondary", V()),
						children: e.link.label
					})
				]
			})
		})]
	});
}
function rs({ info: e, icon: t = Vt, label: n }) {
	return typeof e == "string" ? /* @__PURE__ */ X(b, {
		label: e,
		children: /* @__PURE__ */ X("div", {
			className: H("flex h-5 w-5 items-center justify-center rounded-xs", V()),
			tabIndex: 0,
			children: /* @__PURE__ */ X(p, {
				icon: t,
				size: "sm"
			})
		})
	}) : /* @__PURE__ */ X(ns, {
		info: e,
		icon: t,
		label: n
	});
}
//#endregion
//#region src/experimental/OneTable/TableHead/index.tsx
function is({ children: e, width: t = "auto", minWidth: n, sortState: r = "none", onSortClick: i, onClick: a, info: o, infoIcon: c = Vt, sticky: l, hidden: u = !1, highlighted: d = !1, align: f = "left", className: m, colSpan: h }) {
	let { isScrolled: g, isScrolledRight: _ } = Bo(), v = l?.left !== void 0, y = l?.right !== void 0, b = v || y, x = l?.left ?? 0, S = l?.right ?? 0, C = i || o, w = i || a ? () => {
		i?.(), a?.();
	} : void 0, T = /* @__PURE__ */ X(Y, { children: /* @__PURE__ */ Z("div", {
		className: H("flex items-center whitespace-nowrap", C && "gap-1", f === "right" && "flex-row-reverse"),
		children: [typeof e == "string" ? /* @__PURE__ */ X(s, {
			className: H(t !== "auto" && "overflow-hidden"),
			children: e
		}) : /* @__PURE__ */ X("div", {
			className: H("truncate", t !== "auto" && "overflow-hidden"),
			children: e
		}), C && /* @__PURE__ */ Z("div", {
			className: "flex items-center",
			children: [o && /* @__PURE__ */ X("div", {
				className: "flex h-6 w-6 items-center justify-center text-f1-foreground-secondary",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ X(rs, {
					info: o,
					icon: c,
					label: typeof e == "string" ? e : void 0
				})
			}), i && /* @__PURE__ */ X(B.button, {
				className: H("relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all focus-within:opacity-100 hover:bg-f1-background-hover group-hover:opacity-100", V()),
				"aria-label": "Sort",
				whileTap: { scale: .8 },
				transition: { duration: .1 },
				children: /* @__PURE__ */ Z(z, { children: [/* @__PURE__ */ X(B.div, {
					className: "absolute left-1 top-1 flex h-3 w-3 items-center justify-center",
					animate: {
						rotate: r === "desc" ? 0 : 180,
						x: r === "none" ? -3 : 0,
						y: r === "none" ? -1 : 0,
						scale: r === "none" ? .9 : 1
					},
					transition: {
						duration: .2,
						ease: [
							.175,
							.885,
							.32,
							1.275
						]
					},
					children: /* @__PURE__ */ X(p, {
						icon: Ht,
						size: "xs"
					})
				}, "sort-arrow"), r === "none" && /* @__PURE__ */ X(B.div, {
					className: "absolute left-1 top-1 flex h-3 w-3 items-center justify-center",
					initial: {
						opacity: 0,
						x: 0,
						y: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						x: 3,
						y: 1,
						scale: .9
					},
					exit: {
						opacity: 0,
						x: 0,
						y: 0,
						scale: .9
					},
					transition: {
						duration: .2,
						ease: [
							.175,
							.885,
							.32,
							1.275
						]
					},
					children: /* @__PURE__ */ X(p, {
						icon: Ht,
						size: "xs"
					})
				}, "sort-arrow-secondary")] })
			})]
		})]
	}) }), E = Ro(t), D = n === void 0 ? E : Ro(n);
	return /* @__PURE__ */ Z(Mo, {
		className: H("group h-11", "bg-f1-background", b && (g || _) && "relative bg-f1-background z-10 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']", b && "sticky", d && "bg-[linear-gradient(hsl(var(--neutral-2)),hsl(var(--neutral-2)))]", u && "after:hidden", w && "cursor-pointer", m),
		"data-highlighted": d ? "true" : void 0,
		onClick: w,
		tabIndex: l ? 0 : void 0,
		colSpan: h,
		style: {
			width: E,
			maxWidth: E,
			minWidth: D,
			left: x,
			right: S
		},
		role: u ? "presentation" : void 0,
		"aria-sort": i ? r === "asc" ? "ascending" : r === "desc" ? "descending" : "none" : void 0,
		children: [
			/* @__PURE__ */ X("div", { className: "absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary" }),
			/* @__PURE__ */ X(z, { children: (v && g || y && _) && /* @__PURE__ */ X(B.div, {
				className: H("absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent", v && "-right-4 bg-gradient-to-r", y && "-left-4 bg-gradient-to-l"),
				initial: { opacity: 0 },
				animate: { opacity: .1 },
				exit: { opacity: 0 }
			}, "shadow-gradient") }),
			!u && T
		]
	});
}
//#endregion
//#region src/experimental/OneTable/TableHeader/index.tsx
function as({ children: e, sticky: t = !1 }) {
	return /* @__PURE__ */ X(Oo, {
		className: H(t && "sticky top-0 z-30"),
		children: e
	});
}
var os = Bn(({ children: e, selected: t, className: n, sticky: r, style: i }, a) => /* @__PURE__ */ X(jo, {
	ref: a,
	className: H(t && "bg-f1-background-selected hover:bg-f1-background-selected", n, "relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-['']", "[&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring", "[&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring", r && "hover:!bg-f1-background-hover sticky z-20 bg-f1-background"),
	style: {
		...r ? { top: 40 } : void 0,
		...i
	},
	children: e
}));
os.displayName = "TableRow";
//#endregion
//#region src/experimental/OneTable/Table/index.tsx
function ss({ children: e, loading: t = !1 }) {
	let [n, r] = J(!1), [i, a] = J(!1), o = q(null);
	return G(() => {
		let e = o.current;
		if (!e) return;
		let t = () => {
			r(e.scrollLeft > 0), a(e.scrollWidth - e.scrollLeft - e.clientWidth > 0);
		};
		return t(), e.addEventListener("scroll", t), () => {
			e.removeEventListener("scroll", t);
		};
	}, []), /* @__PURE__ */ X(zo.Provider, {
		value: {
			isScrolled: n,
			setIsScrolled: r,
			isScrolledRight: i,
			setIsScrolledRight: a
		},
		children: /* @__PURE__ */ Z("div", {
			ref: o,
			className: "relative h-full w-full overflow-auto",
			children: [/* @__PURE__ */ X(Do, {
				className: H(t && "select-none opacity-50 transition-opacity"),
				"aria-live": t ? "polite" : void 0,
				"aria-busy": t ? "true" : void 0,
				children: e
			}), /* @__PURE__ */ X(z, { children: t && /* @__PURE__ */ X(B.div, {
				className: "absolute inset-0 flex cursor-progress items-center justify-center",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				children: /* @__PURE__ */ X(Mt, {})
			}) })]
		})
	});
}
function cs({ columns: e = 5 }) {
	return /* @__PURE__ */ X(zo.Provider, {
		value: {
			isScrolled: !1,
			setIsScrolled: () => {},
			isScrolledRight: !1,
			setIsScrolledRight: () => {}
		},
		children: /* @__PURE__ */ Z(Do, {
			className: "cursor-progress",
			role: "presentation",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ X(as, { children: /* @__PURE__ */ X(os, { children: Array.from({ length: e }).map((e, t) => /* @__PURE__ */ X(is, { children: /* @__PURE__ */ X(T, { className: "h-4 w-[80px]" }) }, `skeleton-header-${t}`)) }) }), /* @__PURE__ */ X(Fo, { children: Array.from({ length: 5 }).map((t, n) => /* @__PURE__ */ X(os, { children: Array.from({ length: e }).map((e, t) => /* @__PURE__ */ X(ts, { children: /* @__PURE__ */ X(T, { className: "h-4 w-[80px]" }) }, `skeleton-cell-${n}-${t}`)) }, `skeleton-row-${n}`)) })]
		})
	});
}
var ls = An(ss, cs);
//#endregion
//#region src/experimental/OneTable/TableFooter/index.tsx
function us({ children: e }) {
	return /* @__PURE__ */ X(Ao, {
		className: H("bg-f1-background-default sticky bottom-0 z-30 shadow-[0_-1px_0_0_var(--f1-border-secondary)]"),
		children: e
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/ErrorTooltip.tsx
function ds({ message: e, children: t }) {
	let [n, r] = J(!1), i = W(() => {
		e && r(!0);
	}, [e]), a = W(() => r(!1), []);
	return G(() => {
		e || r(!1);
	}, [e]), /* @__PURE__ */ X("div", {
		className: "relative h-full w-full",
		children: /* @__PURE__ */ X(Be, {
			delayDuration: 100,
			disableHoverableContent: !0,
			children: /* @__PURE__ */ Z(Ve, {
				open: n && !!e,
				onOpenChange: r,
				children: [/* @__PURE__ */ X(Le, {
					asChild: !0,
					className: "pointer-events-auto h-full w-full",
					children: /* @__PURE__ */ X("div", {
						className: "flex h-full w-full items-center",
						onFocusCapture: i,
						onBlurCapture: a,
						children: t
					})
				}), e && /* @__PURE__ */ Z(Re, {
					side: "top",
					className: "border-black/10 flex items-center gap-1 bg-[#fff] shadow-md",
					children: [/* @__PURE__ */ X(p, {
						icon: Rt,
						color: "critical",
						size: "sm"
					}), /* @__PURE__ */ X("span", {
						className: "text-sm font-medium text-f1-foreground-critical",
						children: e
					})]
				})]
			})
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/BaseCell.tsx
var fs = {
	text: "cursor-text",
	pointer: "cursor-pointer",
	default: "cursor-default",
	"not-allowed": "cursor-not-allowed"
};
function ps({ disabled: e = !1, readonly: t = !1, showRightBorder: n = !0, cursor: r = "text", isActive: i = !1, borderOnHover: a = !0, error: o, hint: s, hintPosition: c = "left", children: l }) {
	let u = s && !o && /* @__PURE__ */ X(Be, {
		delayDuration: 100,
		children: /* @__PURE__ */ Z(Ve, { children: [/* @__PURE__ */ X(Le, {
			asChild: !0,
			children: /* @__PURE__ */ X("button", {
				type: "button",
				"aria-label": s.message,
				className: H("pointer-events-auto flex shrink-0 cursor-pointer items-center rounded px-1", V()),
				children: /* @__PURE__ */ X(p, {
					icon: s.icon,
					size: "md",
					color: s.iconColor
				})
			})
		}), /* @__PURE__ */ X(Re, {
			side: "top",
			className: "border-black/10 max-w-64 cursor-default text-f1-foreground shadow-md",
			children: /* @__PURE__ */ X("span", {
				className: "text-sm font-medium text-f1-foreground",
				children: s.message
			})
		})] })
	});
	return /* @__PURE__ */ X("div", {
		className: H("flex w-full h-full min-w-0 min-h-12 border-solid", "border-0 border-r-[1px] border-f1-border-secondary", !n && "border-r-0", fs[r], o ? "relative z-[1] border-r-0 bg-f1-background-critical/10 shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]" : i ? "relative z-[1] border-r-0 bg-f1-background shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]" : a ? "shadow-none [&:not(:focus-within)]:hover:shadow-[inset_0_0_0_1px_hsl(var(--neutral-30))] focus-within:relative focus-within:z-[1] focus-within:border-r-0 focus-within:bg-f1-background focus-within:shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]" : "shadow-none", t && "bg-f1-background-secondary", e && "bg-f1-background-disabled"),
		children: /* @__PURE__ */ Z(ds, {
			message: o,
			children: [
				c === "left" && u,
				/* @__PURE__ */ X("div", {
					className: "min-w-0 flex-1",
					children: l
				}),
				c === "right" && u
			]
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/DateCell.tsx
var ms = "yyyy-MM-dd";
function hs({ editableColumn: e, value: t, inputPlaceholder: n, error: r, loading: i, isLastColumn: a, onChange: o, hint: s, item: c }) {
	let l = typeof e.dateConfig == "function" ? e.dateConfig(c) : e.dateConfig, u = K(() => {
		if (!t) return;
		let e = mr(t);
		if (Ut(e)) return {
			granularity: "day",
			value: {
				from: e,
				to: e
			}
		};
	}, [t]);
	return /* @__PURE__ */ X(ps, {
		showRightBorder: !a,
		error: r,
		hint: s,
		cursor: "pointer",
		children: /* @__PURE__ */ X("div", {
			className: H("flex w-full min-w-0 items-center", e.align === "right" && "justify-end"),
			children: /* @__PURE__ */ X(Oi, {
				className: H("[&_input]:!py-0", "[&_[data-slot='icon']]:!inset-y-0", "[&_[data-slot='placeholder']]:!flex", "[&_[data-slot='placeholder']]:!items-center", "[&_[data-slot='placeholder']]:!py-0", "[&_[data-slot='placeholder']]:!right-0", "[&_[data-slot='placeholder']]:!truncate"),
				placeholder: n ?? e.inputPlaceholder,
				label: e.label,
				hideLabel: !0,
				transparent: !0,
				displayFormat: "default",
				value: u,
				onChange: (e) => {
					let n = e?.value?.from, r = n ? It(n, ms) : "";
					r !== t && o(r);
				},
				loading: i,
				minDate: l?.minDate,
				maxDate: l?.maxDate
			})
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/hooks/useInputTextWidth.ts
var gs = null;
function _s(e, t) {
	gs ||= document.createElement("canvas");
	let n = gs.getContext("2d");
	return n ? (n.font = t, Math.ceil(n.measureText(e).width)) : 0;
}
function vs(e, t = 26, n = 48) {
	let [r, i] = J(null);
	return {
		ref: W((e) => {
			if (e) {
				let t = e.querySelector("input");
				t && i(getComputedStyle(t).font);
			}
		}, []),
		width: r ? Math.max(_s(e || "\xA0", r) + t, n) : void 0
	};
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/hooks/useNumberCellLayout.ts
function ys(e, t) {
	if (e?.units) return typeof e.units == "function" ? e.units(t) : e.units;
}
function bs(e, t, n) {
	let { locale: r } = Ft(), i = e?.locale ?? r, a = ys(e, n), o = a ? e?.unitsPosition === "before" : !1, s = e?.grouping ?? !0, c = K(() => new Intl.NumberFormat(i, {
		maximumFractionDigits: e?.maxDecimals,
		useGrouping: s
	}), [
		i,
		e?.maxDecimals,
		s
	]), l = t == null ? "" : c.format(t), { ref: u, width: d } = vs(a ? o ? `${a} ${l}` : `${l} ${a}` : l);
	return {
		ref: u,
		width: d,
		locale: i,
		units: a,
		unitsBefore: o,
		grouping: s
	};
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/NumberCell.tsx
function xs({ editableColumn: e, value: t, inputPlaceholder: n, error: r, loading: i, onChange: a, item: o, hint: s }) {
	let c = e.numberConfig, l = typeof t == "string" ? t.trim() : t, u = l !== "" && l != null ? Number(l) : NaN, d = isFinite(u) ? u : null, { ref: f, width: p, locale: m, units: h, unitsBefore: g, grouping: _ } = bs(c, d, o), v = (e) => {
		if (e == null) {
			t !== "" && a(null);
			return;
		}
		let n = e;
		c?.min != null && n < c.min && (n = c.min), c?.max != null && n > c.max && (n = c.max);
		let r = String(n);
		r !== t && a(r);
	}, y = h && /* @__PURE__ */ X("span", {
		className: "flex shrink-0 select-none items-center self-center pt-[1px] text-sm text-f1-foreground",
		children: h
	}), b = W((e) => {
		let t = e.currentTarget.querySelector("input");
		t && e.target !== t && t.focus();
	}, []);
	return /* @__PURE__ */ X(ps, {
		error: r,
		hint: s,
		children: /* @__PURE__ */ X("div", {
			ref: f,
			onClick: b,
			className: H("flex h-full w-full cursor-text items-center", e.align === "right" && "justify-end"),
			children: /* @__PURE__ */ Z("div", {
				className: H("flex h-full max-w-full items-center gap-1", g && "pl-3 [&_input]:pl-1", !g && h && "pr-3 [&_input]:pr-1"),
				style: { width: p },
				children: [
					g && y,
					/* @__PURE__ */ X(Ni, {
						label: e.label,
						hideLabel: !0,
						value: d,
						placeholder: n ?? e.inputPlaceholder,
						onChange: v,
						loading: i,
						transparent: !0,
						hint: "",
						locale: m,
						grouping: _,
						min: c?.min,
						max: c?.max,
						step: c?.step,
						maxDecimals: c?.maxDecimals
					}),
					!g && y
				]
			})
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/MoneyCell.tsx
var Ss = (e, t = "USD") => {
	try {
		let n = new Intl.NumberFormat(e, {
			style: "currency",
			currency: t
		}).formatToParts(1), r = n.find((e) => e.type === "currency"), i = n.findIndex((e) => e.type === "currency"), a = n.findIndex((e) => e.type === "integer");
		return {
			symbol: r?.value ?? t,
			before: i < a
		};
	} catch {
		return;
	}
};
function Cs(e) {
	let { locale: t } = Ft(), n = e.editableColumn.numberConfig, r = n?.locale ?? t, i = ys(n, e.item), a = K(() => i ? Ss(r, i) : void 0, [r, i]), o = K(() => i ? n?.unitsPosition ? n.unitsPosition === "before" : a?.before ?? !1 : !1, [
		i,
		n?.unitsPosition,
		a
	]);
	return /* @__PURE__ */ X(xs, {
		...e,
		editableColumn: {
			...e.editableColumn,
			numberConfig: {
				...n,
				units: a?.symbol ?? i ?? "$",
				unitsPosition: o ? "before" : "after"
			}
		}
	});
}
//#endregion
//#region src/patterns/OneDataCollection/property-render.ts
var ws = {
	default: "-",
	list: void 0
}, Ts = (e, t, n, r, i) => {
	let a = t.render(e), o = n in ws ? ws[n] : ws.default;
	return pn(a, {
		visualization: n,
		i18n: r,
		tableAlign: i?.tableAlign
	}, o);
}, Es = /* @__PURE__ */ new Set();
function Ds(e, t) {
	if (t === void 0) return [];
	let n = e[t];
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Os({ editableColumn: e, error: t, loading: n, onChange: r, item: i, hint: a }) {
	let o = g(), [s, c] = J(!1), l = e.selectConfig;
	if (!l) return Es.has(e.label) || (Es.add(e.label), console.warn(`MultiSelectCell: column "${e.label}" has editType "multiselect" but no selectConfig`)), /* @__PURE__ */ X(ps, { children: Ts(i, e, "editableTable", o) });
	let u = Ds(i, e.id), d = {
		label: e.label,
		hideLabel: !0,
		value: u,
		onChange: (e) => r(e),
		loading: n,
		size: "sm",
		placeholder: l.placeholder ?? o.t("common.selectPlaceholder"),
		showSearchBox: l.showSearchBox,
		multiple: !0,
		onOpenChange: c
	}, f = l.clearable ? { clearable: !0 } : {};
	return /* @__PURE__ */ X(ps, {
		error: t,
		isActive: s,
		hint: a,
		cursor: "pointer",
		children: /* @__PURE__ */ X("div", {
			className: H("flex w-full min-w-0 h-full", "items-center", "[&_[data-testid=input-field-wrapper]]:border-0", "[&_[data-testid=input-field-wrapper]]:bg-transparent", "[&_[data-testid=input-field-wrapper]]:shadow-none", "[&_[data-testid=input-field-wrapper]]:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-offset-0", "[&_[data-testid=input-field-wrapper]]:h-full", "[&_[data-testid=input-field-wrapper]_.absolute]:top-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:-translate-y-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:bottom-auto", "[&>div]:h-full", "[&>div]:w-full", "[&>div>button]:h-full", e.align === "right" && "justify-end"),
			children: "source" in l && l.source ? /* @__PURE__ */ X(kt, {
				...d,
				...f,
				source: l.source,
				mapOptions: l.mapOptions
			}) : /* @__PURE__ */ X(kt, {
				...d,
				...f,
				options: typeof l.options == "function" ? l.options(i) : l.options
			})
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/SelectCell.tsx
var ks = /* @__PURE__ */ new Set();
function As({ editableColumn: e, value: t, error: n, loading: r, onChange: i, item: a, hint: o }) {
	let s = g(), [c, l] = J(!1), u = e.selectConfig;
	if (!u) return ks.has(e.label) || (ks.add(e.label), console.warn(`SelectCell: column "${e.label}" has editType "select" but no selectConfig`)), /* @__PURE__ */ X(ps, { children: Ts(a, e, "editableTable", s) });
	let d = {
		label: e.label,
		hideLabel: !0,
		value: t || void 0,
		onChange: (e, n) => {
			let r = e ?? "";
			r !== t && i(r, { selectedItem: n });
		},
		loading: r,
		size: "sm",
		placeholder: u.placeholder ?? s.t("common.selectPlaceholder"),
		showSearchBox: u.showSearchBox,
		defaultItem: u.defaultItem?.(a),
		multiple: !1,
		onOpenChange: l
	}, f = u.clearable ? { clearable: !0 } : {};
	return /* @__PURE__ */ X(ps, {
		error: n,
		isActive: c,
		hint: o,
		cursor: "pointer",
		children: /* @__PURE__ */ X("div", {
			className: H("flex w-full min-w-0 h-full", "items-center", "[&_[data-testid=input-field-wrapper]]:border-0", "[&_[data-testid=input-field-wrapper]]:bg-transparent", "[&_[data-testid=input-field-wrapper]]:shadow-none", "[&_[data-testid=input-field-wrapper]]:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-offset-0", "[&_[data-testid=input-field-wrapper]]:h-full", "[&_[data-testid=input-field-wrapper]_.absolute]:top-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:-translate-y-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:bottom-auto", "[&>div]:h-full", "[&>div]:w-full", "[&>div>button]:h-full", e.align === "right" && "justify-end"),
			children: "source" in u && u.source ? /* @__PURE__ */ X(kt, {
				...d,
				...f,
				source: u.source,
				mapOptions: u.mapOptions
			}) : /* @__PURE__ */ X(kt, {
				...d,
				...f,
				options: typeof u.options == "function" ? u.options(a) : u.options
			})
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/textIcon.ts
function js(e) {
	if (e) return e.icon ? e.icon : Ti(e.inputType);
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/ReadOnlyCellContent.tsx
function Ms({ editableColumn: e, item: t, iconColor: n = "default", className: r, showFieldAffordances: i = !0 }) {
	let a = g(), o = en(), s = i ? e.dateConfig ? Ti("date") : js(e.textConfig) : void 0, c = i && !e.disabledConfig?.hideSelectChevron && !!e.selectConfig, l = e.align === "right", u = e.dateConfig ? e.id === void 0 ? void 0 : t[e.id] : void 0, d = typeof u == "string" && u && Ut(mr(u)) ? It(mr(u), "dd MMM yyyy", { locale: o }) : void 0, f = e.id === void 0 ? void 0 : t[e.id], m = Array.isArray(f) ? (() => {
		let n = e.selectConfig, r = n && typeof n.options == "function" ? n.options(t) : n?.options, i = new Map((Array.isArray(r) ? r : []).filter((e) => "value" in e).map((e) => [e.value, e.label]));
		return f.map((e) => i.get(e) ?? String(e)).join(", ");
	})() : void 0, h = i ? ys(e.numberConfig, t) : void 0, _ = e.numberConfig?.unitsPosition === "before", v = h ? /* @__PURE__ */ X("span", {
		className: "shrink-0 select-none pt-px text-sm",
		children: h
	}) : null;
	return /* @__PURE__ */ Z("div", {
		className: H("flex h-full w-full min-w-0 items-center gap-1.5", s ? "pl-2" : "pl-3", c ? "justify-between pr-1" : H("pr-3", l && "justify-end"), r),
		children: [/* @__PURE__ */ Z("span", {
			className: "flex min-w-0 items-center gap-1.5",
			children: [
				s && /* @__PURE__ */ X("span", {
					className: "flex h-5 w-5 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ X(p, {
						icon: s,
						color: n
					})
				}),
				_ && v,
				/* @__PURE__ */ X("span", {
					className: "min-w-0 truncate",
					children: d ?? m ?? Ts(t, e, "editableTable", a)
				}),
				!_ && v
			]
		}), c && /* @__PURE__ */ X("span", {
			className: "flex shrink-0 items-center",
			children: /* @__PURE__ */ X(rt, {
				open: !1,
				size: "sm"
			})
		})]
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/status/DisabledCell.tsx
function Ns({ editableColumn: e, item: t, hint: n }) {
	return /* @__PURE__ */ X(ps, {
		disabled: !0,
		borderOnHover: !1,
		hint: n,
		hintPosition: n?.hintPosition ?? "right",
		cursor: "not-allowed",
		children: /* @__PURE__ */ X(Ms, {
			editableColumn: e,
			item: t,
			iconColor: "secondary",
			className: "min-h-12 [&_*]:text-f1-foreground-secondary"
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/status/NonEditableCell.tsx
function Ps({ editableColumn: e, item: t, isLastColumn: n, hint: r }) {
	return /* @__PURE__ */ X(ps, {
		showRightBorder: !n,
		borderOnHover: !1,
		hint: r,
		hintPosition: r?.hintPosition ?? "right",
		cursor: "default",
		children: /* @__PURE__ */ X(Ms, {
			editableColumn: e,
			item: t,
			showFieldAffordances: !1
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/TextCell.tsx
function Fs({ editableColumn: e, value: t, inputPlaceholder: n, error: r, loading: i, onChange: a, hint: o }) {
	let s = e.textConfig, c = s?.inputType ?? "text", l = js(s);
	return /* @__PURE__ */ X(ps, {
		error: r,
		hint: o,
		children: /* @__PURE__ */ X("div", {
			className: H("flex w-full min-w-0", "cursor-text items-center", e.align === "right" && "[&_input]:text-right"),
			children: /* @__PURE__ */ X(je, {
				type: c,
				icon: l,
				label: e.label,
				hideLabel: !0,
				value: t,
				placeholder: n ?? e.inputPlaceholder,
				onChange: a,
				loading: i,
				transparent: !0
			})
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/consts.ts
var Is = {
	text: Fs,
	number: xs,
	money: Cs,
	date: hs,
	select: As,
	multiselect: Os,
	"display-only": Ps,
	disabled: Ns
}, Ls = /* @__PURE__ */ new Set([
	"text",
	"number",
	"money"
]), Rs = Rn(null);
function zs({ item: e, onCellChange: t, children: n }) {
	let [r, i] = J(e), [a, o] = J({}), [s, c] = J({}), { t: l } = g(), u = q(r);
	u.current = r;
	let d = q(null);
	G(() => {
		let t = {
			...e,
			...d.current?.updates
		};
		u.current = t, i(t);
	}, [e]);
	let f = (e, t) => {
		c((n) => {
			let r = { ...n };
			for (let n of e) r[n] = t;
			return r;
		});
	}, p = (e, t) => {
		o((n) => {
			let r = { ...n };
			for (let n of e) t === void 0 ? delete r[n] : r[n] = t;
			return r;
		});
	}, m = (e) => {
		let n = Object.keys(e), r = u.current, i = {};
		for (let t of n) i[t] = [e[t], r[t]];
		f(n, !0), t({
			updatedItem: r,
			changes: i
		}).then((e) => {
			e && Object.keys(e).length > 0 && o((t) => ({
				...t,
				...e
			}));
		}).catch((e) => {
			let t = e instanceof Error ? e.message : l("collections.editableTable.errors.saveFailed");
			p(n, t);
		}).finally(() => {
			f(n, !1);
		});
	}, h = () => {
		let e = d.current;
		e && (clearTimeout(e.timer), d.current = null, m(e.previousValues));
	}, _ = q(h);
	_.current = h, G(() => () => _.current(), []);
	let v = (e, t) => {
		let n = Object.keys(e);
		if (n.length === 0) return;
		let r = u.current, a = {};
		for (let e of n) a[e] = r[e];
		let o = {
			...r,
			...e
		};
		if (u.current = o, i(o), p(n, void 0), !t?.debounce) {
			h(), m(a);
			return;
		}
		let s = d.current;
		s && clearTimeout(s.timer), d.current = {
			previousValues: {
				...a,
				...s?.previousValues
			},
			updates: {
				...s?.updates,
				...e
			},
			timer: setTimeout(() => _.current(), 250)
		};
	};
	return /* @__PURE__ */ X(Rs.Provider, {
		value: {
			localItem: r,
			cellErrors: a,
			cellLoading: s,
			handleCellChange: (e, t, n) => v({ [e]: t }, n),
			batchCellChanges: (e, t) => v(e, t)
		},
		children: n
	});
}
function Bs() {
	return Un(Rs);
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/EditableCellRenderer.tsx
function Vs(e, t) {
	if (t.id !== void 0 && t.id in e) {
		let n = e[t.id];
		return n == null ? "" : String(n);
	}
	let n = t.render(e);
	return typeof n == "string" ? n : typeof n == "number" ? String(n) : "";
}
function Hs({ column: e, children: t, isLastColumn: n, externalError: r }) {
	let i = Bs();
	if (!i) return /* @__PURE__ */ X(Y, { children: t });
	let { localItem: a, cellErrors: o, cellLoading: s, handleCellChange: c, batchCellChanges: l } = i, u = e, d = u.editType?.(a), f = u.id !== void 0, p = d !== void 0 && Ls.has(d), m = (e, t) => {
		if (u.id !== void 0) {
			let n = u.formula;
			if (n) {
				let r = {};
				n({
					value: e,
					item: a,
					selectedItem: t?.selectedItem,
					setCellValue: (e, t) => {
						r[e] = t;
					}
				}), l({
					[u.id]: e,
					...r
				}, { debounce: p });
			} else c(u.id, e, { debounce: p });
		}
	};
	if (f && d) {
		let e = Is[d], t = Vs(a, u);
		if (e) {
			let i = (u.id ? o[u.id] : void 0) ?? r, c = u.id ? s[u.id] ?? !1 : !1;
			return /* @__PURE__ */ X("div", {
				className: "pointer-events-auto h-full",
				onClick: (e) => e.stopPropagation(),
				onMouseDown: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ X(e, {
					editableColumn: u,
					value: t,
					inputPlaceholder: u.inputPlaceholder,
					error: i,
					item: a,
					isLastColumn: n,
					loading: c,
					onChange: m,
					hint: u.cellHint?.(a)
				})
			});
		}
	}
	return /* @__PURE__ */ X(Ps, {
		editableColumn: u,
		item: a,
		value: Vs(a, u),
		isLastColumn: n,
		onChange: m
	});
}
//#endregion
//#region src/sds/UpsellingKit/UpsellRequestResponseDialog/index.tsx
var Us = ({ text: e, isCompleted: t }) => /* @__PURE__ */ Z("div", {
	className: "flex flex-row items-center gap-2",
	children: [/* @__PURE__ */ X(p, {
		className: t ? "text-f1-icon-positive" : "text-f1-icon-secondary",
		icon: t ? Bt : Fe,
		size: "md"
	}), /* @__PURE__ */ X("span", {
		className: t ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
		children: e
	})]
}), Ws = ({ title: e, items: t }) => /* @__PURE__ */ Z("div", {
	className: "px-4 pb-2",
	children: [/* @__PURE__ */ X("div", {
		className: "mb-2 text-sm text-f1-foreground-secondary",
		children: e
	}), /* @__PURE__ */ X("div", {
		className: "flex flex-col gap-2",
		children: t.map((e) => /* @__PURE__ */ X(Us, {
			text: e.text,
			isCompleted: e.isCompleted ?? !1
		}, e.text))
	})]
}), Gs = ({ onClose: e, success: t, successButtonOnClick: n, successButtonLabel: r, closeLabel: i }) => {
	let a = t && r && n, o = (t = !1) => /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(P, {
		variant: "outline",
		label: i,
		onClick: e,
		size: t ? "lg" : void 0
	}), a && /* @__PURE__ */ X(P, {
		variant: "promote",
		label: r,
		onClick: () => {
			n(), e?.();
		},
		size: t ? "lg" : void 0
	})] });
	return /* @__PURE__ */ Z(Ai, {
		className: "px-4 pb-4 pt-2 [&_div]:w-full",
		children: [/* @__PURE__ */ X("div", {
			className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",
			children: o()
		}), /* @__PURE__ */ X("div", {
			className: "flex flex-col-reverse gap-2 sm:hidden",
			children: o(!0)
		})]
	});
}, Ks = Bn(({ open: e, onClose: t, success: n = !0, errorMessage: r, successMessage: i, nextSteps: a, closeLabel: o, portalContainer: s }, c) => {
	let [l, u] = J(!1), d = W(() => {
		u(!0), setTimeout(() => {
			t?.(), u(!1);
		}, 200);
	}, [t]);
	return /* @__PURE__ */ X(ae, {
		open: e && !l,
		onOpenChange: (e) => !e && d?.(),
		children: /* @__PURE__ */ Z(te, {
			ref: c,
			wrapperClassName: "items-end sm:items-center",
			className: "mb-3 max-w-[400px] sm:mb-0",
			container: s,
			children: [
				/* @__PURE__ */ Z(ji, {
					className: `flex flex-col items-start gap-4 px-4 ${n ? "pt-5" : "py-5"}`,
					children: [/* @__PURE__ */ X(rn, {
						type: n ? "positive" : "critical",
						size: "lg"
					}), /* @__PURE__ */ Z("div", {
						className: "flex flex-col gap-0.5",
						children: [/* @__PURE__ */ X(ne, {
							className: "text-xl font-semibold sm:text-lg",
							children: n ? i?.title : r?.title
						}), /* @__PURE__ */ X(ki, {
							className: "text-lg sm:text-base",
							children: n ? i?.description : r?.description
						})]
					})]
				}),
				n && a && a.items?.length > 0 ? /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(pr, {}), /* @__PURE__ */ X(Ws, {
					title: a.title,
					items: a.items
				})] }) : null,
				/* @__PURE__ */ X(Gs, {
					onClose: d,
					success: n,
					successButtonLabel: i.buttonLabel,
					successButtonOnClick: i.buttonOnClick,
					closeLabel: o
				})
			]
		})
	});
});
Ks.displayName = "UpsellRequestResponseDialog";
var qs = a(Ks);
//#endregion
//#region src/sds/UpsellingKit/UpsellingButton/index.tsx
function Js({ label: e, showIcon: t = !0, onRequest: n, showConfirmation: r = !0, loading: i, errorMessage: a, successMessage: o, loadingState: s, nextSteps: c, closeLabel: l, variant: u = "promote", onModalStateChange: d, portalContainer: f, ...p }) {
	let [m, h] = J(null), [g, _] = J(!1), v = async () => {
		if (n) {
			_(!0);
			try {
				await n(), r && (h("success"), d?.(!0));
			} catch {
				h("error"), d?.(!0);
			} finally {
				_(!1);
			}
		}
	}, y = () => {
		h(null), d?.(!1);
	}, b = i || g, x = b ? s.label : e;
	return /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(P, {
		variant: u,
		label: x,
		icon: t ? ie : void 0,
		onClick: v,
		loading: b,
		...p
	}), r && m && /* @__PURE__ */ X(qs, {
		open: !0,
		onClose: y,
		success: m === "success",
		errorMessage: a,
		successMessage: o,
		nextSteps: c,
		closeLabel: l,
		portalContainer: f
	})] });
}
var Ys = a(Js);
//#endregion
//#region src/components/OneEmptyState/OneEmptyState.tsx
function Xs({ title: e, description: t, variant: n = "default", emoji: r, actions: i, ...a }) {
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-col items-center justify-center gap-5 p-8",
		...a,
		children: [
			n === "default" && /* @__PURE__ */ X(Yt, {
				emoji: r,
				size: "lg"
			}),
			n !== "default" && /* @__PURE__ */ X(rn, {
				type: n,
				size: "lg"
			}),
			/* @__PURE__ */ Z("div", {
				className: "flex flex-col items-center justify-center gap-0.5",
				children: [/* @__PURE__ */ X("p", {
					className: "text-center text-lg font-medium text-f1-foreground",
					children: e
				}), t && /* @__PURE__ */ X("p", {
					className: "max-w-96 text-center text-f1-foreground-secondary",
					children: t
				})]
			}),
			i && /* @__PURE__ */ X("div", {
				className: "flex w-full flex-col items-center justify-center gap-2 sm:w-fit sm:flex-row sm:gap-3 [&>div]:w-full",
				children: i.map((e) => e.type === "upsell" ? /* @__PURE__ */ X(Ys, {
					label: e.label,
					onRequest: () => Promise.resolve(e.onClick()),
					errorMessage: e.errorMessage,
					successMessage: e.successMessage,
					loadingState: e.loadingState,
					nextSteps: e.nextSteps,
					closeLabel: e.closeLabel
				}, e.label) : /* @__PURE__ */ X(P, {
					label: e.label,
					variant: e.variant,
					onClick: e.onClick,
					icon: e.icon
				}, e.label))
			})
		]
	});
}
var Zs = a(Xs), Qs = ({ value: e, delay: t }) => {
	let [n, r] = J(!1);
	return G(() => {
		let n;
		return e ? n = setTimeout(() => {
			r(e);
		}, t) : r(!1), () => {
			n && clearTimeout(n);
		};
	}, [e, t]), n;
}, $s = (e) => {
	if (!e) return [];
	let t = e();
	return (Array.isArray(t) ? t : [t]).filter((e) => e !== void 0);
}, ec = (e) => "items" in e, tc = (e) => "label" in e && !("items" in e), nc = (e) => e.every(ec) ? e : e.every(tc) ? [{ items: e }] : e.map((e) => ({ items: e })), rc = (e) => e ? typeof e == "function" ? nc(e() || []) : "actions" in e ? nc(e.actions() || []) : [] : [], ic = (e) => e.map((e) => ({
	...e,
	items: e.items.filter((e) => e.enabled === void 0 || e.enabled)
})), ac = (e) => e?.(), oc = ({ message: e }) => /* @__PURE__ */ Z("div", {
	className: "flex w-full flex-row items-center gap-2 rounded-md bg-f1-background-warning p-2",
	children: [/* @__PURE__ */ X(rn, {
		type: "warning",
		size: "sm"
	}), /* @__PURE__ */ X("p", {
		className: "flex-1 font-medium text-f1-foreground-warning",
		children: e
	})]
});
function sc(e) {
	let t = (e) => ({
		...e,
		loading: !0,
		disabled: !0
	});
	return Array.isArray(e) ? e.length === 0 || !("items" in e[0]) ? e.map(t) : e.map((e) => ({
		...e,
		items: e.items.map(t)
	})) : {
		...e,
		items: e.items.map(t)
	};
}
var cc = Bn(function({ isOpen: e, primaryActions: t, secondaryActions: n, selectedNumber: r, onUnselect: i, warningMessage: a, allPagesSelection: o = !1, isAllItemsSelected: c = !1, totalItems: l, status: u }, d) {
	let { t: f, ...p } = g(), m = o && c && l !== void 0, h = u === "loading" || u === "success", _ = q(r ?? 0);
	G(() => {
		r && (_.current = r);
	}, [r]);
	let v = h && !r ? _.current : r, y = v === 1 ? p.status.selected.singular : p.status.selected.plural, b = u === "loading" ? "idle" : u, x = K(() => a || !t ? [] : u === "loading" ? sc(t) : t, [
		t,
		u,
		a
	]), S = K(() => a || !n ? [] : u === "loading" ? n.map((e) => ({
		...e,
		disabled: !0
	})) : n, [
		n,
		u,
		a
	]), C = K(() => !a && !v ? null : /* @__PURE__ */ Z("div", {
		className: "flex w-full flex-col gap-2 sm:flex-row sm:items-center",
		children: [a && /* @__PURE__ */ X(oc, { message: a }), !!v && /* @__PURE__ */ Z("div", {
			className: "dark flex h-8 w-full items-center justify-between gap-3 px-2 sm:h-auto sm:w-fit sm:justify-start sm:pl-2 sm:pr-0",
			children: [m ? /* @__PURE__ */ X("span", {
				className: "font-medium tabular-nums text-f1-foreground",
				children: f("status.selected.allItemsSelected", { total: l ?? 0 })
			}) : /* @__PURE__ */ Z("span", {
				className: "flex items-center gap-1 font-medium tabular-nums",
				children: [/* @__PURE__ */ X(lt, {
					value: v,
					className: "text-f1-foreground",
					spinTiming: {
						duration: 200,
						easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
					}
				}), /* @__PURE__ */ X(s, {
					className: "text-f1-foreground",
					children: y
				})]
			}), /* @__PURE__ */ X(P, {
				variant: "outline",
				label: p.actions.unselect,
				onClick: i,
				disabled: h,
				size: "sm"
			})]
		})]
	}), [
		a,
		v,
		m,
		l,
		y,
		i,
		h,
		p.actions.unselect,
		f
	]);
	return /* @__PURE__ */ X(si, {
		ref: d,
		isOpen: e,
		variant: "dark",
		status: b,
		leftContent: C,
		primaryActions: x,
		secondaryActions: S
	});
});
cc.displayName = "OneDataCollectionActionBar";
//#endregion
//#region src/patterns/OneDataCollection/components/CollectionActions/CollectionActions.tsx
var lc = ({ primaryActions: e, primaryActionsLabel: t, secondaryActions: n, otherActions: r, upsellAction: i }) => {
	let a = (Array.isArray(e) ? e : [e]).filter((e) => e !== void 0), o = n || [], s = K(() => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({ type: "separator" }), e.push(...t), e), []), [r]), [c, l] = J(!1), u = a.some((e) => e.description !== void 0);
	return a.length === 0 && o.length === 0 && s.length === 0 && !i ? null : /* @__PURE__ */ Z("div", {
		className: "flex flex-row-reverse items-center gap-2",
		children: [
			u ? /* @__PURE__ */ X(ee, {
				mode: "dropdown",
				size: "md",
				trigger: t,
				items: a.map((e, t) => ({
					label: e.label,
					icon: e.icon,
					description: e.description,
					disabled: e.disabled,
					value: t.toString()
				})),
				onClick: (e) => {
					a[Number(e)]?.onClick?.();
				}
			}) : a.length === 1 ? (() => {
				let e = a[0], t = e.tooltip?.({
					disabled: !!e.disabled,
					loading: !!e.loading
				}), n = /* @__PURE__ */ X(P, {
					size: "md",
					onClick: e.onClick,
					icon: e.icon,
					variant: "default",
					label: e.label,
					loading: e.loading,
					disabled: e.disabled
				});
				return t ? /* @__PURE__ */ X(b, {
					description: t,
					children: n
				}) : n;
			})() : a.length > 1 && /* @__PURE__ */ X(ee, {
				size: "md",
				items: a.map((e, t) => ({
					label: e.label,
					icon: e.icon,
					value: t.toString()
				})),
				onClick: (e) => {
					a[Number(e)]?.onClick?.();
				}
			}),
			o?.map((e) => {
				let t = e.tooltip?.({
					disabled: !!e.disabled,
					loading: !!e.loading
				}), n = /* @__PURE__ */ X(P, {
					size: "md",
					onClick: e.onClick,
					icon: e.icon,
					variant: "outline",
					hideLabel: e.hideLabelWhenExpanded,
					label: e.label,
					disabled: e.disabled,
					loading: e.loading
				});
				return t ? /* @__PURE__ */ X(b, {
					description: t,
					children: n
				}, e.label) : /* @__PURE__ */ X(Fn.Fragment, { children: n }, e.label);
			}),
			i && /* @__PURE__ */ X(P, {
				size: "md",
				variant: i.variant ?? "outlinePromote",
				label: i.label,
				icon: i.showIcon === !1 ? void 0 : ie,
				onClick: i.onClick,
				disabled: i.disabled
			}),
			s.length > 0 && /* @__PURE__ */ X(xn, {
				items: s,
				align: "end",
				open: c,
				onOpenChange: l,
				children: /* @__PURE__ */ X(O, {
					variant: "outline",
					icon: En,
					label: "Actions",
					hideLabel: !0,
					pressed: c
				})
			})
		]
	});
}, uc = Bn(({ value: e, compareToValue: t, onDateChange: n, disabled: r, error: i, className: a, highlighted: o, onClick: s, navigation: c, granularity: l, hideGoToCurrent: u, ...d }, f) => {
	let p = g(), m = Ft(), h = K(() => {
		if (!e || !e.value) return [p.date.selectDate];
		let n = l || vt(e.granularity);
		return [e.value, Array.isArray(t) ? t[0] : t].filter((e) => e !== void 0).sort((e, t) => e?.from.getTime() - t?.from.getTime()).map((e) => n.toString(e, p, "long", m.locale));
	}, [
		e,
		p,
		t,
		l,
		m.locale
	]), _ = K(() => Object.values(h).join(" ⸱ "), [h]), v = (e) => {
		e && n?.(e);
	}, y = K(() => {
		if (d.minDate) return l?.toRange(d.minDate)?.from;
	}, [d.minDate, l]), b = K(() => {
		if (d.maxDate) return l?.toRange(d.maxDate)?.to;
	}, [d.maxDate, l]), [x, S] = J(null);
	G(() => {
		S(l?.toRange(/* @__PURE__ */ new Date()) ?? null);
		let e = () => {
			let e = l?.toRange(/* @__PURE__ */ new Date()) ?? null;
			e && Ot(e.from, y) && ft(e.to || e.from, b) ? S(e) : S(null);
		}, t = setInterval(() => {
			e();
		}, 6e4);
		return e(), () => clearInterval(t);
	}, [
		l,
		y,
		b
	]);
	let C = e?.value ? l?.getPrevNext(e?.value, {
		min: y,
		max: b
	}) : void 0;
	return /* @__PURE__ */ Z("div", {
		ref: f,
		className: H("inline-flex cursor-auto appearance-none gap-1 rounded-md border-0 bg-f1-background px-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover", "[%>*] py-1", V("focus:ring-f1-border-hover"), r && "cursor-not-allowed bg-f1-background-secondary opacity-50", i && "ring-f1-border-critical-bold", a),
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ Z("div", {
			className: H("flex flex-1 gap-1", c ? "justify-between" : "justify-center"),
			children: [
				c && /* @__PURE__ */ X(P, {
					size: "sm",
					variant: "ghost",
					icon: ct,
					label: "Previous",
					hideLabel: !0,
					disabled: !C?.prev,
					onClick: () => v(C?.prev ?? !1)
				}),
				/* @__PURE__ */ X(O, {
					fontSize: "md",
					size: "sm",
					variant: "ghost",
					label: _,
					onClick: s,
					disabled: r,
					style: { minWidth: l?.toStringMaxWidth() },
					className: H(o && "bg-f1-background-secondary-hover")
				}),
				c && /* @__PURE__ */ X(P, {
					variant: "ghost",
					icon: Pt,
					label: "Next",
					hideLabel: !0,
					size: "sm",
					fontSize: "md",
					disabled: !C?.next,
					onClick: () => v(C?.next ?? !1)
				})
			]
		}), !u && x && /* @__PURE__ */ X("div", {
			className: "border-l-solid flex-shrink-0 border-[#f00]",
			children: /* @__PURE__ */ X(P, {
				fontSize: "md",
				size: "sm",
				variant: "ghost",
				label: p.date.granularities[e?.granularity ?? "day"]?.currentDate,
				onClick: () => {
					let e = l?.toRange(/* @__PURE__ */ new Date());
					e && n?.(e);
				}
			})
		})]
	});
});
uc.displayName = "DatePickerTrigger";
//#endregion
//#region src/patterns/OneDateNavigator/OneDateNavigator.tsx
function dc({ onSelect: e, defaultValue: t, presets: n = [], granularities: r = ["day"], hideNavigation: i = !1, hideGoToCurrent: a = !1, compareTo: o, defaultCompareTo: s, onCompareToChange: l, value: u, dataTestId: d, periods: f, ...p }) {
	let m = K(() => bi(u), [u]), h = K(() => bi(t), [t]), [g, _] = J(h ?? m);
	G(() => {
		xi(m, g) || _(m || h);
	}, [m, h]);
	let [v, y] = J(), [b, x] = J(!1), S = Ft(), C = p.weekStartsOn ?? S.date?.weekStartsOn ?? $t.Monday, w = K(() => {
		let e = g?.granularity ?? "day";
		return Ct({
			weekStartsOn: C,
			periods: f
		})[e];
	}, [
		g?.granularity,
		C,
		f
	]), T = (t) => {
		_(t), e?.(t);
	};
	return /* @__PURE__ */ X(c, {
		dataTestId: d,
		children: /* @__PURE__ */ X(Ci, {
			onSelect: T,
			value: g,
			defaultValue: h,
			presets: n,
			granularities: r,
			minDate: p.minDate,
			maxDate: p.maxDate,
			open: b,
			onOpenChange: x,
			compareTo: o,
			defaultCompareTo: s,
			onCompareToChange: (e) => {
				y(e), l?.(e);
			},
			weekStartsOn: C,
			periods: f,
			asChild: !0,
			children: /* @__PURE__ */ X(uc, {
				value: g,
				compareToValue: v,
				highlighted: b,
				navigation: !i,
				onDateChange: (e) => {
					T({
						value: w.toRange(e),
						granularity: g?.granularity ?? "day"
					});
				},
				granularity: w,
				minDate: p.minDate,
				maxDate: p.maxDate,
				disabled: p.disabled,
				hideGoToCurrent: a,
				onClick: () => x(!0)
			})
		})
	});
}
var fc = dc;
//#endregion
//#region src/patterns/OneDataCollection/navigationFilters/filterTypes/DateNavigation/DateNavigation.tsx
function pc({ filter: e, value: t, onChange: n }) {
	let r = g(), i = {
		granularity: "day",
		...e
	}, a = Array.isArray(i.granularity) ? i.granularity : [i.granularity], o = Ct({ periods: i.periods })[t?.granularity || a[0]];
	return /* @__PURE__ */ X("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ X(fc, {
			onSelect: (e) => {
				!e || !e.value || n({
					value: e.value,
					granularity: e.granularity,
					valueString: o.toString(e.value, r)
				});
			},
			defaultValue: t,
			granularities: a,
			minDate: i.min,
			maxDate: i.max,
			presets: i.presets,
			periods: i.periods,
			hideGoToCurrent: i.hideGoToCurrent
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/navigationFilters/filterTypes/DateNavigation/index.tsx
var mc = (e) => "date" in e, hc = { "date-navigator": {
	valueConverter: function(e, t, n) {
		let r = Array.isArray(t.granularity) ? t.granularity : [t.granularity], i = t.defaultGranularity || r[0] || "day";
		if (e ||= /* @__PURE__ */ new Date(), mc(e)) return e;
		let a = Ct({ periods: t.periods })[i];
		return {
			value: a.toRange(e),
			valueString: a.toString(e, n),
			granularity: i
		};
	},
	render: (e) => /* @__PURE__ */ X(pc, { ...e })
} }, gc = ({ navigationFilters: e, currentNavigationFilters: t, onChangeNavigationFilters: n }) => /* @__PURE__ */ X(Y, { children: e && Object.entries(e).map(([e, r]) => {
	let i = hc[r.type];
	return /* @__PURE__ */ X(Fn.Fragment, { children: i.render({
		filter: r,
		value: t[e],
		onChange: (r) => {
			n({
				...t,
				[e]: r
			});
		}
	}) }, e);
}) });
//#endregion
//#region src/patterns/OneDataCollection/components/PresetFormDialog/PresetFormDialog.tsx
function _c({ isOpen: e, mode: t, initialValues: n, onClose: r, onSubmit: i, onDelete: a, onShare: o, existingNames: s = [] }) {
	let c = g().collections.presets, [l, u] = J(n?.title ?? ""), [d, f] = J(n?.description ?? ""), [p, m] = J(), h = q(null), _ = Wn();
	G(() => {
		e && (u(n?.title ?? ""), f(n?.description ?? ""), m(void 0));
	}, [
		n?.description,
		n?.title,
		e,
		t
	]);
	let v = () => {
		let e = l.trim().toLowerCase();
		if (s.some((t) => t.trim().toLowerCase() === e)) {
			m(c.duplicateName), h.current?.focus();
			return;
		}
		e && i({
			title: l,
			description: d || void 0
		});
	};
	return /* @__PURE__ */ X(ce, {
		isOpen: e,
		onClose: r,
		title: t === "create" ? c.createTitle : c.updateTitle,
		description: t === "create" ? c.createDescription : c.updateDescription,
		primaryAction: {
			label: c.save,
			onClick: v,
			disabled: !l.trim()
		},
		secondaryAction: {
			label: c.cancel,
			onClick: r
		},
		otherActions: t === "update" ? [...o ? [{
			label: c.share,
			onClick: o,
			icon: Me
		}] : [], ...a ? [{
			label: c.delete,
			onClick: a,
			icon: le,
			critical: !0
		}] : []] : [],
		disableContentPadding: !0,
		children: /* @__PURE__ */ Z("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ X(je, {
					ref: h,
					label: c.nameLabel,
					placeholder: c.namePlaceholder,
					value: l,
					onChange: (e) => {
						u(e), m(void 0);
					},
					error: p,
					required: !0,
					onPressEnter: v,
					"aria-invalid": p ? !0 : void 0,
					"aria-describedby": p ? _ : void 0
				}),
				p && /* @__PURE__ */ X("span", {
					id: _,
					className: "sr-only",
					role: "alert",
					children: p
				}),
				/* @__PURE__ */ X(Fi, {
					label: c.descriptionLabel,
					placeholder: c.descriptionPlaceholder,
					value: d,
					onChange: f,
					rows: 4
				})
			]
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/components/Search/Search.tsx
var vc = 56, yc = ({ loading: e }) => e ? /* @__PURE__ */ X(p, {
	icon: ve,
	className: "animate-spin"
}) : /* @__PURE__ */ X(p, {
	icon: At,
	className: "text"
}), bc = ({ value: e, onChange: t, loading: n = !1, results: r, resultsLoading: i = !1, onResultSelect: a, hasMore: o = !1, loadingMore: s = !1, onLoadMore: c }) => {
	let [l, u] = J(!1), [d, f] = J(!1), [m, _] = J(-1), v = Wn(), y = q(null), b = q(null), x = q(null), S = g(), C = r ?? [], w = l && d && !!e && C.length > 0, T = (e) => {
		if (!o || s || !c) return;
		let t = e.currentTarget;
		t.scrollHeight - t.scrollTop - t.clientHeight <= vc && c();
	};
	G(() => {
		_((r ?? []).length > 0 ? 0 : -1);
	}, [r]), G(() => {
		x.current?.scrollIntoView({ block: "nearest" });
	}, [m]);
	let E = () => {
		t(void 0), u(!1), f(!1), _(-1), b?.current && (b.current.value = "");
	}, D = (e) => {
		t(e.title), a?.(e.id), f(!1), _(-1);
	};
	h(y, () => {
		l && u(!1), f(!1);
	});
	let O = () => {
		l || (u(!0), setTimeout(() => {
			b.current?.focus();
		}, 0));
	}, k = (e) => {
		if (!l) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), O());
			return;
		}
		if (e.key === "Escape") {
			e.preventDefault(), w ? (f(!1), _(-1)) : E();
			return;
		}
		if (w) {
			if (e.key === "ArrowDown") e.preventDefault(), m < C.length - 1 ? _(m + 1) : o && !s && c?.();
			else if (e.key === "ArrowUp") e.preventDefault(), _((e) => e > 0 ? e - 1 : 0);
			else if (e.key === "Enter") {
				e.preventDefault();
				let t = C[m >= 0 ? m : 0];
				t && D(t);
			}
		}
	};
	return /* @__PURE__ */ X(U, {
		id: v,
		children: /* @__PURE__ */ X(Jn, {
			transition: {
				duration: .2,
				ease: [
					.175,
					.885,
					.32,
					1.05
				]
			},
			children: /* @__PURE__ */ X(z, { children: /* @__PURE__ */ Z(B.div, {
				layout: !0,
				ref: y,
				className: H("relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center", (l || e) && "w-[180px]"),
				children: [l ? /* @__PURE__ */ X(B.div, {
					layout: !0,
					layoutId: "search-container",
					className: "absolute inset-0 h-8 w-full bg-f1-border p-px transition-colors focus-within:bg-f1-border-hover",
					style: { borderRadius: 12 },
					children: /* @__PURE__ */ Z(B.div, {
						layout: !0,
						className: "relative flex h-full w-full items-center justify-between gap-1 overflow-hidden bg-f1-background pr-1.5",
						style: { borderRadius: 11 },
						children: [
							/* @__PURE__ */ X(B.div, {
								className: "absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon",
								layoutId: "search-icon",
								children: /* @__PURE__ */ X(yc, { loading: n || i }, "loading")
							}),
							/* @__PURE__ */ X(B.input, {
								layout: !0,
								ref: b,
								type: "text",
								value: e,
								placeholder: S.actions.search,
								onChange: (e) => {
									t(e.target.value), f(!0), _(0);
								},
								className: "h-full w-full appearance-none rounded border-none bg-f1-background py-2 pl-7 text-base text-f1-foreground",
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								onKeyDown: k
							}),
							/* @__PURE__ */ X(B.div, {
								tabIndex: 0,
								className: H("flex h-5 w-5 items-center justify-center rounded-full", V()),
								onClick: (e) => {
									e.stopPropagation(), E();
								},
								onKeyDown: (e) => {
									(e.key === "Enter" || e.key === " ") && E();
								},
								role: "button",
								"aria-label": S.actions.clear,
								children: /* @__PURE__ */ X(p, {
									icon: gt,
									size: "md",
									color: "secondary"
								})
							})
						]
					})
				}) : /* @__PURE__ */ X(B.div, {
					role: "button",
					"aria-label": S.actions.search,
					tabIndex: 0,
					layout: !0,
					layoutId: "search-container",
					className: H("relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover", V()),
					onClick: O,
					onKeyDown: k,
					style: { borderRadius: 10 },
					children: /* @__PURE__ */ Z(B.div, {
						layout: !0,
						className: "relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background",
						style: { borderRadius: 9 },
						children: [/* @__PURE__ */ X(B.div, {
							className: "absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold",
							layoutId: "search-icon",
							children: /* @__PURE__ */ X(yc, { loading: n || i })
						}), e && /* @__PURE__ */ Z("div", {
							className: "flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5",
							children: [/* @__PURE__ */ X(B.div, {
								layout: !0,
								className: "line-clamp-1 overflow-hidden py-2 pl-7",
								children: e
							}), /* @__PURE__ */ X(B.div, {
								tabIndex: 0,
								className: H("flex h-5 w-5 items-center justify-center rounded-full", V()),
								onClick: (e) => {
									e.stopPropagation(), E();
								},
								onKeyDown: (e) => {
									(e.key === "Enter" || e.key === " ") && E();
								},
								role: "button",
								"aria-label": S.actions.clear,
								children: /* @__PURE__ */ X(p, {
									icon: gt,
									size: "md",
									color: "secondary"
								})
							})]
						})]
					})
				}), w ? /* @__PURE__ */ Z("ul", {
					className: "absolute right-0 top-full z-50 mt-2 max-h-72 w-72 overflow-auto rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md",
					onScroll: T,
					children: [C.map((e, t) => /* @__PURE__ */ X("li", { children: /* @__PURE__ */ Z("button", {
						ref: t === m ? x : null,
						type: "button",
						onMouseDown: (e) => e.preventDefault(),
						onMouseEnter: () => _(t),
						onClick: () => D(e),
						className: H("flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-f1-background-secondary", t === m && "bg-f1-background-secondary", V()),
						children: [e.avatar ? /* @__PURE__ */ X(Zt, {
							size: "md",
							avatar: e.avatar
						}) : null, /* @__PURE__ */ Z("span", {
							className: "flex min-w-0 flex-col",
							children: [/* @__PURE__ */ X("span", {
								className: "truncate text-md text-f1-foreground",
								children: e.title
							}), e.subtitle ? /* @__PURE__ */ X("span", {
								className: "truncate text-md text-f1-foreground-secondary",
								children: e.subtitle
							}) : null]
						})]
					}) }, e.id)), s ? /* @__PURE__ */ X("li", {
						className: "flex items-center justify-center py-2 text-f1-icon",
						"aria-hidden": !0,
						children: /* @__PURE__ */ X(p, {
							icon: ve,
							className: "animate-spin"
						})
					}) : null]
				}) : null]
			}) })
		})
	});
}, xc = (e) => Array.isArray(e) ? {
	records: e,
	hasMore: !1
} : e;
function Sc(e, t) {
	let [n, r] = J([]), [i, a] = J(!1), [o, s] = J(!1), [c, l] = J(!1), [u, d] = J(0), f = q([]), p = q(0), m = q(0), h = q(!1), g = q(e);
	g.current = e;
	let _ = t?.trim() ?? "", v = (e, t) => t.map((t) => ({
		id: e.getId(t),
		...e.render(t)
	}));
	return G(() => {
		let e = g.current, t = ++m.current;
		if (p.current = 0, h.current = !1, s(!1), !e || _.length === 0) {
			f.current = [], r([]), a(!1), l(!1);
			return;
		}
		a(!0), Promise.resolve(e.search(_, 0)).then((n) => {
			if (t !== m.current) return;
			let i = xc(n);
			f.current = i.records, r(v(e, i.records)), l(i.hasMore), a(!1);
		});
	}, [_]), {
		results: n,
		loading: i,
		loadingMore: o,
		hasMore: c,
		onLoadMore: () => {
			let e = g.current;
			if (!e || h.current || i || !c || _.length === 0) return;
			let t = m.current, n = p.current + 1;
			h.current = !0, s(!0), Promise.resolve(e.search(_, n)).then((i) => {
				if (t !== m.current) return;
				let a = xc(i);
				p.current = n, f.current = [...f.current, ...a.records], r((t) => [...t, ...v(e, a.records)]), l(a.hasMore), h.current = !1, s(!1);
			}).catch(() => {
				t === m.current && (h.current = !1, s(!1));
			});
		},
		onSelect: (e) => {
			let t = g.current;
			if (!t) return;
			let n = f.current.find((n) => t.getId(n) === e);
			n && (t.onSelect(n), d((e) => e + 1));
		},
		selectionNonce: u
	};
}
//#endregion
//#region src/patterns/OneDataCollection/components/TotalItemsSummary/TotalItemsSummary.tsx
var Cc = ({ isReady: e, totalItemSummaryResult: t }) => /* @__PURE__ */ X("div", {
	className: "flex flex-1 flex-shrink items-center gap-4 text-lg font-semibold",
	children: e ? /* @__PURE__ */ Z("div", {
		className: "flex h-5 items-center",
		children: [" ", t]
	}) : /* @__PURE__ */ X(T, { className: "h-5 w-24" })
}), wc = [
	"filters",
	"navigationFilters",
	"sortings",
	"grouping",
	"visualization",
	"search",
	"visualizationFilters"
], Tc = ["*", "all"], Ec = (e) => {
	let t = /* @__PURE__ */ new Set();
	return e ? (e.some((e) => Tc.includes(e)) && wc.forEach((e) => {
		t.add(e);
	}), e.filter((e) => !Tc.includes(e)).forEach((e) => {
		e.startsWith("!") ? t.delete(e.slice(1)) : t.add(e);
	}), Array.from(t)) : [];
}, Dc = (e) => {
	if (!e || typeof e != "string") return !1;
	let t = e.lastIndexOf("/");
	if (t === -1) return !1;
	let n = e.substring(0, t), r = e.substring(t + 1);
	return !(!n || n.trim() === "" || !r || !/^v[0-9]+$/.test(r));
}, Oc = (e, t, n, r) => {
	let [i, a] = J(!1), o = se();
	e && !Dc(e) && console.error(`Invalid storage key format: "${e}". Key must follow the format "name/version" where name can be a path (e.g., "employees/list/") and version must start with "v" (e.g., "v1", "v2.1").`);
	let s = K(() => [
		...Ec(t),
		"settings",
		"customPresets"
	], [JSON.stringify(t)]), c = K(() => !r && !!e, [r, e]);
	G(() => {
		if (!c) {
			a(!0);
			return;
		}
		a(!1), o.get(e).then((e) => {
			Object.entries(n).forEach(([t, n]) => {
				if (s.includes(t)) {
					let r = e[t];
					r !== void 0 && n.setValue(r);
				}
			}), a(!0);
		});
	}, [e, c]);
	let l = K(() => JSON.stringify(Object.entries(n).map(([e, t]) => [e, t.value])), [n]), u = k((t) => {
		if (!c || !i) return;
		let n = Object.fromEntries(Object.entries(t).map(([e, t]) => s.includes(e) ? [e, t.value] : [e, void 0]).filter(([e, t]) => t !== void 0));
		if (Object.keys(n).length === 0) {
			o.set(e, {});
			return;
		}
		o.set(e, n);
	}, 200);
	return G(() => {
		if (!(!c || !i)) return u(n), () => {
			u.cancel();
		};
	}, [
		e,
		s,
		o,
		i,
		c,
		l
	]), { storageReady: i };
};
//#endregion
//#region src/patterns/OneDataCollection/hooks/useAutoPerPage.ts
function kc(e, t) {
	if (!t || e.paginationType !== "pages") return !1;
	let n = e.perPage;
	return n === "auto" || n === void 0;
}
var Ac = 30, jc = 10, Mc = 108, Nc = (e) => Math.min(30, Math.max(1, e));
function Pc(e = 48) {
	return Mc + 10 * e;
}
function Fc(e) {
	let t = Array.from(e.querySelectorAll("*")).filter((e) => {
		let t = getComputedStyle(e).overflowY;
		return t === "auto" || t === "scroll";
	});
	return t.length === 0 ? null : t.reduce((e, t) => t.scrollHeight > e.scrollHeight ? t : e);
}
function Ic(e, t, { rowHeight: n = 48, ready: r = !0, measureKey: i } = {}) {
	let [a, o] = J(void 0), s = q(void 0), c = q(!1);
	return Kn(() => {
		if (!t) {
			o(void 0), s.current = void 0, c.current = !1;
			return;
		}
		let r = e.current;
		if (!r) return;
		let i = r.clientHeight - Mc, a = Nc(Math.floor(i / n));
		s.current = a, c.current = !1, o(a);
	}, [
		t,
		n,
		i,
		e
	]), G(() => {
		if (!t || !r || c.current) return;
		let n = setTimeout(() => {
			let t = e.current, n = s.current;
			if (!t || n === void 0 || c.current) return;
			let r = Fc(t);
			if (!r || r.clientHeight === 0 || r.scrollHeight === 0) return;
			c.current = !0;
			let i = Nc(Math.floor(n * r.clientHeight / r.scrollHeight));
			o((e) => e === i ? e : i);
		}, 0);
		return () => clearTimeout(n);
	}, [
		t,
		r,
		a,
		i,
		e
	]), t ? a : void 0;
}
//#endregion
//#region src/patterns/OneDataCollection/hooks/useEmptyState.ts
var Lc = (e = {}, t) => {
	let n = g(), r = {
		"no-data": {
			emoji: "📄",
			title: n.collections.emptyStates.noData.title,
			description: n.collections.emptyStates.noData.description
		},
		"no-results": {
			emoji: "🔍",
			title: n.collections.emptyStates.noResults.title,
			description: n.collections.emptyStates.noResults.description,
			actions: [{
				label: n.collections.emptyStates.noResults.clearFilters,
				onClick: t.clearFilters,
				variant: "neutral"
			}]
		},
		error: {
			title: n.collections.emptyStates.error.title,
			description: n.collections.emptyStates.error.description,
			actions: [{
				label: n.collections.emptyStates.error.retry,
				onClick: t.retry,
				variant: "neutral"
			}]
		}
	}, [i, a] = J(void 0);
	return {
		emptyState: i,
		setEmptyStateType: (t, n) => {
			if (!t) {
				a(void 0);
				return;
			}
			let i = e[t] ?? {}, o = r[t], s = {
				title: i.title ?? o.title,
				description: i.description ?? (t === "error" && n ? n : o.description),
				actions: i.actions ?? o.actions
			};
			a(t === "error" ? {
				...s,
				variant: "critical"
			} : {
				...s,
				emoji: i.emoji ?? o.emoji
			});
		}
	};
}, Rc = () => ({
	table: {},
	editableTable: {},
	list: {},
	card: {},
	kanban: {},
	graph: {}
}), zc = Rn({
	setSettings: () => {},
	settings: { visualization: {} },
	setVisualizationSettings: () => {}
}), Bc = () => {
	let e = Un(zc);
	if (!e) throw Error("useTableSettings must be used within a TableSettingsProvider");
	return e;
}, Vc = ({ children: e }) => {
	let [t, n] = J({ visualization: Rc() });
	return /* @__PURE__ */ X(zc.Provider, {
		value: {
			settings: t,
			setSettings: n,
			setVisualizationSettings: (e, t) => {
				n(typeof t == "function" ? (n) => ({
					...n,
					visualization: {
						...n.visualization,
						[e]: t(n.visualization[e])
					}
				}) : (n) => ({
					...n,
					visualization: {
						...n.visualization,
						[e]: t
					}
				}));
			}
		},
		children: e
	});
};
//#endregion
//#region src/patterns/OneDataCollection/utils/csvExport.ts
function Hc(e) {
	if (e == null) return "";
	let t = String(e);
	return t.includes(",") || t.includes("\n") || t.includes("\"") ? `"${t.replace(/"/g, "\"\"")}"` : t;
}
function Uc(e) {
	if (e == null) return "";
	if (typeof e != "object") return String(e);
	if (e instanceof Date) return e.toISOString();
	if (Array.isArray(e)) return e.map((e) => Uc(e)).filter(Boolean).join("; ");
	let t = e;
	return "type" in t && "value" in t && typeof t.type == "string" ? Wc(t.type, t.value) : "firstName" in t && "lastName" in t ? `${t.firstName} ${t.lastName}`.trim() : "label" in t && typeof t.label == "string" ? t.label : "text" in t && (typeof t.text == "string" || typeof t.text == "number") ? String(t.text) : "name" in t && typeof t.name == "string" ? t.name : "";
}
function Wc(e, t) {
	if (t == null) return "";
	let n = t;
	switch (e) {
		case "person": return `${n.firstName ?? ""} ${n.lastName ?? ""}`.trim();
		case "company":
		case "team":
		case "folder":
		case "file": return typeof n.name == "string" ? n.name : "";
		case "dotTag":
		case "status":
		case "statusTag":
		case "alertTag":
		case "tag": return typeof n.label == "string" ? n.label : "";
		case "tagList": {
			let e = n.tags;
			return Array.isArray(e) ? e.map((e) => typeof e.label == "string" ? e.label : String(e)).join("; ") : "";
		}
		case "number": return typeof t == "number" ? String(t) : n.number === void 0 ? "" : String(n.number);
		case "amount": return typeof t == "number" ? String(t) : n.amount === void 0 ? "" : String(n.amount);
		case "percentage": return typeof t == "number" ? String(t) : n.percentage === void 0 ? "" : `${n.percentage}%`;
		case "progressBar": {
			if (typeof t == "number") return String(t);
			let e = n.value === void 0 ? "" : n.value;
			return (typeof n.label == "string" ? n.label : "") || String(e);
		}
		case "text":
		case "longText": return typeof t == "string" || typeof t == "number" ? String(t) : n.text === void 0 ? "" : String(n.text);
		case "date": return t instanceof Date ? t.toISOString() : n.date instanceof Date ? n.date.toISOString() : n.date === void 0 ? "" : String(n.date);
		case "country": return typeof n.label == "string" ? n.label : typeof n.code == "string" ? n.code : "";
		case "avatarList": {
			let e = n.avatarList;
			return Array.isArray(e) ? e.map((e) => typeof e.firstName == "string" && typeof e.lastName == "string" ? `${e.firstName} ${e.lastName}`.trim() : typeof e.name == "string" ? e.name : "").filter(Boolean).join("; ") : "";
		}
		case "icon": return typeof n.label == "string" ? n.label : "";
		case "syncStatus": return typeof t == "string" ? t : "";
		default: return Uc(t);
	}
}
function Gc(e, t) {
	return t ? t.split(".").reduce((e, t) => e && typeof e == "object" && t in e ? e[t] : "", e) : e;
}
function Kc(e, t, n) {
	if (!e) return [];
	if (e.type === "table" || e.type === "editableTable") {
		let r = e.options.columns.filter((e) => {
			if (!t || t.size === 0) return !0;
			let n = e.id ?? e.label ?? "column";
			return !t.has(n);
		});
		return (n && n.length > 0 ? (() => {
			let e = new Set(n), t = r.filter((t) => !e.has(t.id ?? t.label ?? "column")), i = [...r].filter((t) => e.has(t.id ?? t.label ?? "column")).sort((e, t) => {
				let r = e.id ?? e.label ?? "column", i = t.id ?? t.label ?? "column";
				return n.indexOf(r) - n.indexOf(i);
			});
			return [...t, ...i];
		})() : [...r].sort((e, t) => (e.order ?? r.length) - (t.order ?? r.length))).map((e) => ({
			label: e.label,
			field: e.sorting || void 0,
			render: e.render ? (t) => Uc(e.render(t)) : void 0
		}));
	}
	return [];
}
function qc(e, t) {
	return e.map((e) => t.map((t) => t.render ? t.render(e) : t.field ? Uc(Gc(e, t.field)) : Uc(e)));
}
function Jc(e) {
	let t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:-]/g, "");
	return `${e ? e.replace(/[^a-zA-Z0-9-_]/g, "_") : "export"}_${t}.csv`;
}
function Yc(e, t, n) {
	if (!e || e.length === 0) throw Error("No data available for export");
	let r = Kc(t, n?.hiddenColumnIds, n?.columnOrder);
	if (r.length === 0) {
		let t = e[0];
		r = Object.keys(t).map((e) => ({
			label: e.charAt(0).toUpperCase() + e.slice(1),
			field: e
		}));
	}
	let i = qc(e, r), a = n?.includeHeaders === !1 ? [] : r.map((e) => e.label);
	return [...a.length > 0 ? [a.map((e) => Hc(e)).join(",")] : [], ...i.map((e) => e.map((e) => Hc(e)).join(","))].join("\n");
}
function Xc(e, t) {
	let n = new Blob(["﻿" + e], { type: "text/csv;charset=utf-8" }), r = document.createElement("a"), i = URL.createObjectURL(n);
	r.href = i, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(i);
}
async function Zc(e, t, n) {
	Xc(Yc(e, t, n), Jc(n?.filename || "data_collection"));
}
//#endregion
//#region src/patterns/OneDataCollection/hooks/useExportAction.ts
var Qc = 1e4, $c = 100;
async function el(e) {
	if (e && typeof e.then == "function") return e;
	if (e && typeof e.subscribe == "function") {
		let t = e;
		return new Promise((e, n) => {
			let r = t.subscribe({
				next(t) {
					t.loading || (r?.unsubscribe(), t.error ? n(t.error) : t.data == null ? n(/* @__PURE__ */ Error("Observable resolved with no data")) : e(t.data));
				},
				error(e) {
					n(e instanceof Error ? e : Error(String(e)));
				},
				complete() {
					n(/* @__PURE__ */ Error("Observable completed without emitting data"));
				}
			});
		});
	}
	return e;
}
async function tl(e) {
	let { dataAdapter: t } = e, n = [...e.currentSortings ? [{
		field: e.currentSortings.field,
		order: e.currentSortings.order
	}] : [], ...e.currentGrouping ? [{
		field: e.currentGrouping.field,
		order: e.currentGrouping.order ?? "asc"
	}] : []], r = {
		filters: e.currentFilters,
		sortings: n,
		search: e.currentSearch,
		navigationFilters: e.currentNavigationFilters
	};
	if (!t.paginationType) return ((await el((t.exportFetchData ?? t.fetchData)(r))).records ?? []).slice(0, Qc);
	let i = t.exportFetchData ?? t.fetchData;
	if (t.paginationType === "pages") {
		let e = [], t = 1;
		for (; e.length < Qc;) {
			let n = await el(i({
				...r,
				pagination: {
					currentPage: t,
					perPage: $c
				}
			}));
			if (!n.records || n.records.length === 0 || (e.push(...n.records), "pagesCount" in n && t >= n.pagesCount)) break;
			t++;
		}
		return e.slice(0, Qc);
	}
	if (t.paginationType === "infinite-scroll") {
		let e = [], t = null;
		for (; e.length < Qc;) {
			let n = await el(i({
				...r,
				pagination: {
					cursor: t,
					perPage: $c
				}
			}));
			if (!n.records || n.records.length === 0 || (e.push(...n.records), "hasMore" in n && !n.hasMore)) break;
			if ("cursor" in n) t = n.cursor ?? null;
			else break;
		}
		return e.slice(0, Qc);
	}
	return ((await el(i({
		...r,
		pagination: {}
	}))).records ?? []).slice(0, Qc);
}
function nl({ source: e, currentVisualization: t, filename: n, enabled: r = !0 }) {
	let [i, a] = J(!1), o = g(), { settings: s } = Bc(), c = W(async () => {
		if (r) {
			a(!0);
			try {
				let r = await tl(e), i = t?.type ?? "table", a = s.visualization[i], o = a?.hidden ? new Set(a.hidden) : void 0, c = a?.order;
				await Zc(r, t, {
					filename: n || "data_collection_export",
					hiddenColumnIds: o,
					columnOrder: c
				});
			} catch (e) {
				console.error("Export failed:", e);
			} finally {
				a(!1);
			}
		}
	}, [
		r,
		e,
		t,
		n,
		s
	]);
	return {
		label: o.collections?.export?.label ?? "Export to CSV",
		icon: Dn,
		onClick: c,
		loading: i,
		disabled: !r || i || e.isLoading,
		description: o.collections?.export?.description ?? "Download all data as a CSV file"
	};
}
//#endregion
//#region src/lib/providers/datacollection/dataCollectionUrlParams.ts
var rl = "dc_", il = {
	search: "dc_search",
	sortings: "dc_sort",
	visualization: "dc_visualization",
	page: "dc_page",
	preset: "dc_view"
}, al = "..", ol = "*", sl = "none", cl = "-", ll = 25, ul = (e) => `dc_${e}`, dl = (e) => e instanceof URLSearchParams ? e : typeof e == "string" ? new URLSearchParams(e) : typeof window < "u" ? new URLSearchParams(window.location.search) : new URLSearchParams(), fl = (e) => {
	new Set([...e.keys()].filter((e) => e.startsWith("dc_"))).forEach((t) => e.delete(t));
}, pl = (e) => {
	let t = e.trim();
	if (t === "" || t === sl || t === "null") return null;
	let n = t.lastIndexOf(cl), r = n === -1 ? "" : t.slice(n + 1);
	if (r === "asc" || r === "desc") {
		let e = t.slice(0, n);
		return e ? {
			field: e,
			order: r
		} : null;
	}
	return {
		field: t,
		order: "asc"
	};
}, ml = (e) => e ? `${String(e.field)}${cl}${e.order}` : sl, hl = (e) => e.toISOString().slice(0, 10), gl = (e) => {
	if (e == null) return [];
	if (Array.isArray(e)) return e.filter((e) => e != null).map(String);
	if (typeof e == "string") return e === "" ? [] : [e];
	if (typeof e == "number") return [String(e)];
	if (e instanceof Date) return [hl(e)];
	if (typeof e == "object") {
		let t = e;
		if (typeof t.value == "string" && "strict" in t) return t.value === "" ? [] : [t.value];
		if (t.mode === "single") {
			let e = t.value;
			return e == null ? [] : [String(e)];
		}
		if (t.mode === "range") {
			let e = t.from, n = t.to;
			if (e?.value == null && n?.value == null) return [];
			let r = (e) => e?.value == null ? "" : `${e.value}${e.closed === !1 ? ol : ""}`;
			return [`${r(e)}${al}${r(n)}`];
		}
		if (t.from instanceof Date || t.to instanceof Date) return [`${t.from instanceof Date ? hl(t.from) : ""}${al}${t.to instanceof Date ? hl(t.to) : ""}`];
	}
	return [];
}, _l = (e) => {
	let t = e.endsWith(ol), n = t ? e.slice(0, -1) : e;
	return {
		value: n === "" ? void 0 : Number(n),
		closed: !t
	};
}, vl = (e) => {
	if (e.includes(al)) {
		let [t, n] = e.split(al);
		return {
			mode: "range",
			from: _l(t ?? ""),
			to: _l(n ?? "")
		};
	}
	let t = Number(e);
	return {
		mode: "single",
		value: Number.isNaN(t) ? void 0 : t
	};
}, yl = (e) => {
	if (e.includes(al)) {
		let [t, n] = e.split(al);
		return t ? n ? {
			from: new Date(t),
			to: new Date(n)
		} : { from: new Date(t) } : void 0;
	}
	return e ? new Date(e) : void 0;
}, bl = (e, t) => {
	switch (e) {
		case "in": return t;
		case "search": return t[0];
		case "number": return vl(t[0] ?? "");
		case "date": return yl(t[0] ?? "");
		default: return t.length > 1 ? t : t[0];
	}
}, xl = (e, t) => {
	let n = dl(e), r = {};
	if (n.has(il.search) && (r.search = n.get(il.search) ?? void 0), n.has(il.sortings) && (r.sortings = pl(n.get(il.sortings) ?? "")), n.has(il.visualization)) {
		let e = n.get(il.visualization);
		e && (r.visualization = e);
	}
	if (n.has(il.page)) {
		let e = Number(n.get(il.page));
		Number.isInteger(e) && e >= 1 && (r.page = e);
	}
	if (n.has(il.preset)) {
		let e = n.get(il.preset);
		e && (r.preset = e);
	}
	if (t) {
		let e = {}, i = !1;
		for (let [r, a] of Object.entries(t)) {
			let t = ul(r);
			n.has(t) && (e[r] = bl(a.type, n.getAll(t)), i = !0);
		}
		i && (r.filters = e);
	}
	return r;
}, Sl = /* @__PURE__ */ new Set(), Cl = (e, t) => {
	Sl.has(e) || (Sl.add(e), console.warn(`[OneDataCollection] Filter "${e}" has ${t} selected values, over the URL limit of 25; it will not be reflected in the URL (still applied in-memory and persisted via storage).`));
}, wl = (e) => {
	let t = gl(e).length;
	return t > 0 && t <= 25;
}, Tl = (e, t) => {
	if (t.filters) for (let [n, r] of Object.entries(t.filters)) {
		let t = gl(r);
		if (t.length > 25) {
			Cl(n, t.length);
			continue;
		}
		t.forEach((t) => e.append(ul(n), t));
	}
	t.search && e.set(il.search, t.search), t.sortings && e.set(il.sortings, ml(t.sortings)), t.visualization && e.set(il.visualization, t.visualization), t.page && t.page > 1 && e.set(il.page, String(t.page)), t.preset && e.set(il.preset, t.preset);
}, El = (e) => !!e.search || !!e.sortings || !!e.visualization || e.page !== void 0 && e.page > 1 || !!e.preset || !!e.filters && Object.values(e.filters).some(wl), Dl = (e = {}) => {
	let t = new URLSearchParams();
	return Tl(t, e), t;
}, Ol = (e, t) => {
	let n = new URLSearchParams(dl(e));
	return fl(n), El(t) && Tl(n, t), n;
}, kl = (e, t) => {
	if (typeof window > "u") return null;
	let n = Ol(window.location.search, e).toString(), r = n ? `${window.location.pathname}?${n}` : window.location.pathname, i = t?.history ?? "replace";
	return i === "push" ? window.history.pushState(null, "", r) : i === "replace" && window.history.replaceState(null, "", r), n;
}, Al = (e, t) => {
	try {
		localStorage.setItem(oe(e), JSON.stringify(t));
	} catch {}
}, jl = 300, Ml = ({ disabled: e, storageReady: t, filtersDefinition: n, filters: r, search: i, sortings: a, defaultSortings: o = null, visualization: s, visualizationKeys: c, selectedPresetId: l, setFilters: u, setSearch: d, setSortings: f, setVisualization: p, setSelectedPresetId: m }) => {
	let h = !e, g = c.length > 1, [_, v] = J(!1);
	G(() => {
		if (!h || !t || _) return;
		let e = xl(typeof window < "u" ? window.location.search : "", n);
		if ("filters" in e && u(e.filters ?? {}), "search" in e && d(e.search), "sortings" in e && f(e.sortings ?? null), g && e.visualization !== void 0) {
			let t = c.indexOf(e.visualization);
			t >= 0 && p(t);
		}
		e.preset !== void 0 && m(e.preset), v(!0);
	}, [h, t]);
	let y = W((e) => kl(e), []), b = k(y, jl);
	He(() => {
		if (!(!h || !_)) return b({
			filters: r,
			search: i,
			sortings: JSON.stringify(a) === JSON.stringify(o) ? null : a,
			visualization: g && s > 0 ? c[s] : void 0,
			preset: l
		}), () => b.cancel();
	}, [
		h,
		_,
		r,
		i,
		a,
		o,
		s,
		c,
		g,
		l,
		b
	]);
}, Nl = (e) => typeof e == "object" && !!e && !Array.isArray(e), Pl = (e) => String(e), Fl = (e, t) => {
	let n = t[e];
	if (n?.presets !== void 0) {
		let e = n.presets[0];
		return e ? e.filter : {};
	}
	return {};
}, Il = (e, t, n) => {
	let r = t[e];
	return r?.filters ? new Set(Object.keys(r.filters)) : n ? new Set(Object.keys(n)) : null;
}, Ll = (e, t, n, r) => {
	if (!Nl(t)) return {};
	let i = Il(e, n, r);
	if (!i) return t;
	let a = {};
	for (let [e, n] of Object.entries(t)) i.has(e) && (a[e] = n);
	return a;
}, Rl = ({ sourceFilters: e, sourcePresets: t, sourceCurrentFilters: n, sourceSetCurrentFilters: r, visualizations: i, currentVisualization: a, storageKey: o }) => {
	let s = i.length > 1, c = i.some((e) => e.filters !== void 0 || e.presets !== void 0), [l, u] = J({}), d = q(a), f = q(!1), p = q(!1), m = q(null), h = q(n), g = q(i);
	g.current = i;
	let _ = q(e);
	if (_.current = e, Kn(() => {
		f.current = !1, p.current = !1, m.current = null, d.current = a, h.current = n, u((e) => Object.keys(e).length > 0 ? {} : e);
	}, [o]), s && p.current) {
		let e = Pl(d.current), t = Pl(a);
		e === t ? n !== h.current && (m.current = null) : m.current = l[t] ?? Fl(a, i);
	} else m.current = null;
	h.current = n, Kn(() => {
		if (!s || !f.current || p.current) return;
		let e = Pl(a), t = l[e];
		r(t ?? Fl(a, i)), p.current = !0;
	}, [
		s,
		a,
		l
	]), Kn(() => {
		if (!s) return;
		if (f.current && !p.current) {
			d.current = a;
			return;
		}
		let e = Pl(d.current), t = Pl(a);
		if (e !== t) {
			u((t) => ({
				...t,
				[e]: n
			}));
			let o = l[t];
			r(o ?? Fl(a, i));
		}
		d.current = a;
	}, [a, s]);
	let v = K(() => {
		if (!c) return e;
		let t = i[a];
		return t?.filters ? t.filters : e;
	}, [
		c,
		e,
		i,
		a
	]), y = K(() => {
		if (!c) return t;
		let e = i[a]?.presets;
		if (e) return e;
		let n = v ? new Set(Object.keys(v)) : void 0;
		if (n && t) {
			let e = t.filter((e) => Object.keys(e.filter).every((e) => n.has(e)));
			return e.length > 0 ? e : void 0;
		}
		return t;
	}, [
		s,
		t,
		i,
		a,
		v,
		c
	]), b = K(() => {
		if (!s) return {};
		let e = Pl(a);
		return e in l || d.current !== a ? l : {
			...l,
			[e]: n
		};
	}, [
		s,
		l,
		a,
		n
	]), x = q({
		viz: a,
		json: JSON.stringify(n)
	});
	Kn(() => {
		if (!s || !p.current) return;
		let e = x.current;
		if (e.viz !== a) {
			x.current = {
				viz: a,
				json: JSON.stringify(n)
			};
			return;
		}
		let t = JSON.stringify(n);
		if (t === e.json) return;
		e.json = t;
		let r = Pl(a);
		u((e) => {
			let i = e[r];
			return i === n || i !== void 0 && JSON.stringify(i) === t ? e : {
				...e,
				[r]: n
			};
		});
	}, [
		s,
		a,
		n
	]);
	let S = W((e) => {
		if (!s) {
			r(e);
			return;
		}
		let t = Pl(a);
		if (typeof e == "function") {
			let n = e;
			r((e) => {
				let r = n(e);
				return u((e) => e[t] === r ? e : {
					...e,
					[t]: r
				}), r;
			});
		} else r(e), u((n) => n[t] === e ? n : {
			...n,
			[t]: e
		});
	}, [
		s,
		r,
		a
	]), C = W((e) => {
		if (f.current) return;
		f.current = !0;
		let t = g.current, n = _.current, r = Nl(e) ? e : {}, i = {};
		for (let [e, a] of Object.entries(r)) {
			let r = Nl(a) ? a : {}, o = Number(e);
			i[e] = Number.isInteger(o) && o >= 0 && o < t.length ? Ll(o, r, t, n) : r;
		}
		u(i);
	}, []);
	return s ? {
		effectiveFilters: v,
		effectivePresets: y,
		currentFilters: m.current ?? n,
		setCurrentFilters: S,
		allVisualizationFilters: b,
		setAllVisualizationFilters: C,
		hasPerVisualizationFilters: !0
	} : {
		effectiveFilters: v,
		effectivePresets: y,
		currentFilters: n,
		setCurrentFilters: r,
		allVisualizationFilters: {},
		setAllVisualizationFilters: () => {},
		hasPerVisualizationFilters: !1
	};
};
//#endregion
//#region src/patterns/OneDataCollection/hooks/useDataCollectionData/useDataCollectionData.tsx
function zl(e, { filters: t, onError: n } = {}) {
	let [r, i] = J(void 0);
	return {
		...at(e, {
			filters: t,
			onError: n,
			fetchParamsProvider: (t) => ({
				...t,
				navigationFilters: e.currentNavigationFilters
			}),
			onResponse: (e) => {
				let t = "summaries" in e ? e.summaries : void 0;
				i(t);
			}
		}, [JSON.stringify(e.currentNavigationFilters)]),
		summaries: r
	};
}
function Bl(e, t = {}) {
	return { ...zl(e, t) };
}
//#endregion
//#region src/ui/pagination.tsx
var Vl = ({ className: e, ...t }) => /* @__PURE__ */ X("nav", {
	role: "navigation",
	"aria-label": "pagination",
	className: H("flex w-full justify-center", e),
	...t
});
Vl.displayName = "Pagination";
var Hl = Pn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("div", {
	ref: n,
	className: H("flex list-none flex-row items-center gap-1", e),
	...t
}));
Hl.displayName = "PaginationContent";
var Ul = Pn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("div", {
	ref: n,
	className: H("", e),
	...t
}));
Ul.displayName = "PaginationItem";
var Wl = ({ className: e, isActive: t, ...n }) => /* @__PURE__ */ X("a", {
	"aria-current": t ? "page" : void 0,
	className: H("flex h-8 min-w-8 select-none items-center justify-center rounded px-1.5 font-medium text-f1-foreground-secondary transition-all hover:cursor-pointer hover:bg-f1-background-secondary-hover", t && "bg-f1-background-selected-bold font-semibold text-f1-foreground-inverse hover:bg-f1-background-selected-bold-hover", V(), e),
	...n
});
Wl.displayName = "PaginationLink";
var Gl = ({ className: e, ...t }) => /* @__PURE__ */ X(Wl, {
	role: "button",
	"aria-label": "Go to previous page",
	className: H("border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background", e),
	...t,
	children: /* @__PURE__ */ X(p, { icon: ct })
});
Gl.displayName = "PaginationPrevious";
var Kl = ({ className: e, ...t }) => /* @__PURE__ */ X(Wl, {
	role: "button",
	"aria-label": "Go to next page",
	className: H("border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background", e),
	...t,
	children: /* @__PURE__ */ X(p, { icon: Pt })
});
Kl.displayName = "PaginationNext";
var ql = ({ className: e, ...t }) => /* @__PURE__ */ X("span", {
	role: "presentation",
	"aria-hidden": !0,
	className: H("flex h-9 w-9 items-center justify-center", e),
	...t,
	children: /* @__PURE__ */ X(p, { icon: Sn })
});
ql.displayName = "PaginationEllipsis";
//#endregion
//#region src/ui/OnePagination/index.tsx
function Jl({ totalPages: e, currentPage: t = 1, onPageChange: n, showControls: r = !0, ariaLabel: i = "Page navigation", visibleRange: a = 3, hasNextPage: o = !0, disabled: s = !1 }) {
	let c = e === 0, l = W((t) => {
		n && (c || t >= 1 && t <= e) && n(t);
	}, [
		n,
		e,
		c
	]), u = K(() => {
		if (c) return [];
		let n = [];
		if (e <= 5) return Array.from({ length: e }, (e, t) => t + 1);
		n.push(1);
		let r = Math.floor(a / 2), i = t - r, o = t + r;
		return t <= r + 2 ? (i = 2, o = i + a - 1, n.push(...Array.from({ length: o - i + 1 }, (e, t) => t + i)), n.push("...")) : t >= e - r - 1 ? (i = e - a - 1, o = e - 1, n.push("..."), n.push(...Array.from({ length: o - i + 1 }, (e, t) => t + i))) : (n.push("..."), n.push(...Array.from({ length: a }, (e, t) => t + i)), n.push("...")), n.push(e), n;
	}, [
		t,
		e,
		a,
		c
	]);
	return /* @__PURE__ */ X(Vl, { children: /* @__PURE__ */ Z(Hl, {
		role: "navigation",
		"aria-label": i,
		children: [
			r && /* @__PURE__ */ X(Ul, { children: /* @__PURE__ */ X(Gl, {
				"aria-disabled": t === 1 || s,
				tabIndex: t === 1 ? -1 : 0,
				className: H(!c && "mr-1", t === 1 || s ? "pointer-events-none opacity-50" : ""),
				onClick: () => l(t - 1),
				onKeyDown: (e) => {
					e.key === "Enter" && l(t - 1);
				}
			}) }),
			!c && u.map((e, n) => /* @__PURE__ */ X(Ul, {
				className: H("hidden sm:flex", e === t && "flex", s && "pointer-events-none opacity-50"),
				children: e === "..." ? /* @__PURE__ */ X(ql, {}) : /* @__PURE__ */ X(Wl, {
					"aria-current": e === t ? "page" : void 0,
					isActive: e === t,
					onClick: () => l(e),
					onKeyDown: (t) => {
						t.key === "Enter" && l(e);
					},
					tabIndex: 0,
					children: e
				})
			}, n)),
			r && /* @__PURE__ */ X(Ul, { children: /* @__PURE__ */ X(Kl, {
				"aria-disabled": (c ? !o : t === e) || s,
				tabIndex: c ? o ? 0 : -1 : t === e ? -1 : 0,
				className: H(!c && "ml-1", !c && t === e || !o && c || s ? "pointer-events-none opacity-50" : ""),
				onClick: () => l(t + 1),
				onKeyDown: (e) => {
					e.key === "Enter" && l(t + 1);
				}
			}) })
		]
	}) });
}
var Yl = a(v("OnePagination", Jl)), Xl = ({ paginationInfo: e, setPage: t, className: n }) => {
	let r = g();
	return !it(e) || e.pagesCount <= 1 ? null : /* @__PURE__ */ Z("div", {
		className: H("flex w-full items-center justify-between px-page", n),
		children: [/* @__PURE__ */ X("span", {
			className: "shrink-0 text-f1-foreground-secondary",
			children: e.total > 0 && `${(e.currentPage - 1) * e.perPage + 1}-${Math.min(e.currentPage * e.perPage, e.total)} ${r.collections.visualizations.pagination.of} ${e.total}`
		}), /* @__PURE__ */ X("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ X(Yl, {
				totalPages: e.pagesCount,
				currentPage: e.currentPage,
				onPageChange: t
			})
		})]
	});
}, Zl = (e) => Math.ceil(e / 12) * 12, Ql = ({ children: e, tmpFullWidth: t }) => /* @__PURE__ */ X("div", {
	className: H("@container", t ? "px-0" : "px-page"),
	children: /* @__PURE__ */ X("div", {
		className: H("grid grid-cols-1 gap-4", "@sm:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4"),
		children: e
	})
}), $l = ({ source: e, items: t, selectedItems: n, handleSelectItemChange: r, cardProperties: i, title: a, description: o, avatar: s, image: c, imageFit: l, imageSize: u, imageAspectRatio: d, blurredBackground: f, compact: p, tmpFullWidth: m }) => {
	function h(e, t) {
		return t.map((t) => {
			if (t.hide?.(e)) return null;
			let n = t.render(e);
			if (n === void 0) return null;
			let r = g(n);
			if (!r) return null;
			let i = {
				...r,
				label: t.label
			};
			return i.type === "file" ? { property: i } : {
				icon: t.icon ?? ye,
				property: i
			};
		}).filter((e) => e !== null);
	}
	function g(e) {
		return typeof e == "string" ? {
			type: "text",
			value: e
		} : typeof e == "number" ? {
			type: "number",
			value: e
		} : _(e) ? e : null;
	}
	function _(e) {
		if (typeof e != "object" || !e || !("type" in e)) return !1;
		let t = e.type;
		return typeof t == "string" && t in fn;
	}
	return /* @__PURE__ */ X(Ql, {
		tmpFullWidth: m,
		children: t.map((t, m) => {
			let g = e.selectable ? e.selectable(t) : void 0, _ = e.itemUrl ? e.itemUrl(t) : void 0, v = e.itemOnClick ? e.itemOnClick(t) : void 0, y = (e.itemActions && e.itemActions(t) || []).filter((e) => e.type !== "separator"), b = (y.filter((e) => e.type === "other" || !e.type) || []).map((e) => ({
				...e,
				type: "item"
			})), x = y.find((e) => e.type === "primary") || void 0, S = y.filter((e) => e.type === "secondary") || [], C = !!e.selectable && g !== void 0, w = h(t, i);
			return /* @__PURE__ */ X(B.div, {
				layout: !0,
				initial: "hidden",
				animate: "visible",
				exit: "hidden",
				custom: m,
				variants: Nt({
					delay: .02,
					duration: .3
				}),
				children: /* @__PURE__ */ X(mn, {
					title: a(t),
					selectable: C,
					description: o ? o(t) : void 0,
					avatar: s ? s(t) : void 0,
					image: c ? c(t) : void 0,
					imageFit: l,
					imageSize: u,
					imageAspectRatio: d,
					blurredBackground: f,
					selected: C && n.has(g),
					onSelect: (e) => r(t, e),
					secondaryActions: S,
					primaryAction: x,
					otherActions: b,
					onClick: v,
					link: _,
					compact: p || !1,
					metadata: w,
					fullHeight: !0
				}, m)
			}, m);
		})
	});
}, eu = ({ cardProperties: e, title: t, description: n, avatar: r, image: i, imageFit: a, imageSize: o, imageAspectRatio: s, blurredBackground: c, compact: l, source: u, onSelectItems: d, onLoadData: f, onLoadError: p, tmpFullWidth: m }) => {
	let h = K(() => {
		if (u.dataAdapter.paginationType === "pages") {
			let e = u.dataAdapter.perPage, t = Zl(typeof e == "number" ? e : 24);
			return {
				...u.dataAdapter,
				perPage: t
			};
		}
		return u.dataAdapter;
	}, [u.dataAdapter]), { data: g, paginationInfo: _, setPage: v, isInitialLoading: y } = Bl({
		...u,
		dataAdapter: h
	}, { onError: (e) => {
		p(e);
	} });
	G(() => {
		f({
			totalItems: _?.total || g.records.length,
			filters: u.currentFilters,
			search: u.currentSearch,
			isInitialLoading: y,
			data: g.records
		});
	}, [_?.total, g.records]);
	let { selectedItems: b, groupAllSelectedStatus: x, handleSelectItemChange: S, handleSelectGroupChange: C } = tt({
		data: g,
		paginationInfo: _,
		source: u,
		onSelectItems: d,
		selectionMode: "multi",
		selectedState: u.defaultSelectedItems
	}), w = u.grouping?.collapsible, E = u.grouping?.defaultOpenGroups, { openGroups: D, setGroupOpen: O } = Ue(g?.type === "grouped" ? g.groups : [], E);
	return /* @__PURE__ */ Z("div", {
		className: "flex h-full min-h-0 flex-1 flex-col gap-4",
		children: [/* @__PURE__ */ X("div", {
			className: "overflow-auto",
			children: y ? /* @__PURE__ */ X(Ql, {
				tmpFullWidth: m,
				children: Array.from({ length: 8 }).map((t, n) => /* @__PURE__ */ Z(nn, { children: [/* @__PURE__ */ X(sn, { children: /* @__PURE__ */ X(dn, {
					"aria-label": "Loading card",
					children: /* @__PURE__ */ X(T, { className: "h-4 w-3/4" })
				}) }), /* @__PURE__ */ X(tn, {
					className: "space-y-2",
					children: e.map((e) => /* @__PURE__ */ Z("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ X(T, { className: "h-3 w-1/4" }), /* @__PURE__ */ X(T, { className: "h-3 w-1/2" })]
					}, String(e.label)))
				})] }, n))
			}) : /* @__PURE__ */ Z(Y, { children: [g?.type === "grouped" && g.groups.map((d) => /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(Ze, {
				label: d.label,
				itemCount: d.itemCount,
				onOpenChange: (e) => O(d.key, e),
				open: D[d.key],
				selectable: !!u.selectable,
				showOpenChange: w,
				select: x[d.key]?.checked ? !0 : x[d.key]?.indeterminate ? "indeterminate" : !1,
				onSelectChange: (e) => C(d, e),
				className: "px-page pb-2 pt-4"
			}), /* @__PURE__ */ X(z, { children: (!w || D[d.key]) && /* @__PURE__ */ X($l, {
				source: u,
				items: d.records,
				selectedItems: b,
				handleSelectItemChange: S,
				title: t,
				cardProperties: e,
				description: n,
				avatar: r,
				image: i,
				imageFit: a,
				imageSize: o,
				imageAspectRatio: s,
				blurredBackground: c,
				compact: l,
				tmpFullWidth: m
			}, d.key) })] })), g?.type === "flat" && /* @__PURE__ */ X($l, {
				source: u,
				items: g.records,
				selectedItems: b,
				handleSelectItemChange: S,
				title: t,
				cardProperties: e,
				description: n,
				avatar: r,
				image: i,
				imageFit: a,
				imageSize: o,
				imageAspectRatio: s,
				blurredBackground: c,
				compact: l,
				tmpFullWidth: m
			})] })
		}), /* @__PURE__ */ X(Xl, {
			paginationInfo: _,
			setPage: v
		})]
	});
}, tu = (e, t, n, r) => {
	let i = q(null);
	return G(() => {
		if (!Xe(e) || !e.hasMore) return;
		let a = i.current;
		if (!a) return;
		let o = new IntersectionObserver((e) => {
			e[0].isIntersecting && !t && !n && r();
		}, {
			root: null,
			rootMargin: "200px",
			threshold: .1
		});
		return o.observe(a), () => {
			o.disconnect();
		};
	}, [
		e,
		n,
		r,
		t
	]), { loadingIndicatorRef: i };
}, nu = Rn(null);
function ru({ addRowActions: e, addRowActionsLabel: t, addNestedRowActions: n, addNestedRowActionsLabel: r, children: i }) {
	return /* @__PURE__ */ X(nu.Provider, {
		value: {
			addRowActions: e,
			addRowActionsLabel: t,
			addNestedRowActions: n,
			addNestedRowActionsLabel: r
		},
		children: i
	});
}
function iu() {
	return Un(nu);
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/utils.ts
var au = (e) => e ? e.indeterminate || e.selectedCount !== void 0 && e.selectedCount > 0 && !e.checked ? "indeterminate" : e.checked : !1, ou = (e) => (e || []).map((e) => e.type === "separator" ? e : {
	...e,
	type: "item"
}), su = ({ items: e, onOpenChange: t, align: n = "end", label: r = "Actions", className: i }) => {
	let [a, o] = J(!1);
	return !e || e.length === 0 ? null : /* @__PURE__ */ X("div", {
		className: H("pointer-events-auto", i),
		children: /* @__PURE__ */ X(xn, {
			align: n,
			items: e.map((e) => e.type === "separator" || e.type === "label" ? e : {
				...e,
				type: "item"
			}),
			open: a,
			onOpenChange: (e) => {
				o(e), t?.(e);
			},
			children: /* @__PURE__ */ X(O, {
				icon: En,
				label: r,
				hideLabel: !0,
				variant: "ghost",
				pressed: a
			})
		})
	});
}, cu = ({ items: e, onOpenChange: t, className: n }) => /* @__PURE__ */ X("div", {
	className: H(n),
	children: /* @__PURE__ */ X(su, {
		label: "Mobile Actions",
		align: "end",
		items: e,
		onOpenChange: t
	})
}), lu = ({ children: e, dropDownOpen: t, className: n }) => /* @__PURE__ */ X("aside", {
	className: H("pointer-events-none absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex", "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]", "via-[#F5F6F8] via-60% dark:via-[#192231]", "to-transparent to-100%", t ? "opacity-100" : "opacity-0", n),
	children: e
}), uu = (e, t) => (e && e(t) || []).filter((e) => e.type === "separator" || e.enabled === void 0 || e.enabled), du = ({ source: e, item: t }) => {
	let [n, r] = J(!1), [i, a] = J(null);
	if (!e.itemActions) return {
		hasItemActions: !1,
		hasMobileItemActions: !1,
		primaryItemActions: [],
		dropdownItemActions: [],
		mobileDropdownItemActions: [],
		handleDropDownOpenChange: () => {},
		dropDownOpen: !1,
		setDropDownOpen: () => {}
	};
	let o = uu(e.itemActions, t), s = o.filter((e) => e.type === "separator" || e.hideInMobileDropdown !== !0), c = o.filter((e) => e.type === "primary").slice(0, 2), l = ou(o.filter((e) => e.type === "separator" || !c.includes(e))), u = ou(s), d = u.some((e) => e.type !== "separator");
	return {
		hasItemActions: o.length > 0,
		hasMobileItemActions: d,
		primaryItemActions: c,
		dropdownItemActions: l,
		mobileDropdownItemActions: u,
		handleDropDownOpenChange: (e) => {
			if (!e) {
				a(setTimeout(() => {
					r(!1);
				}, 100));
				return;
			}
			i && (clearTimeout(i), a(null)), r(!0);
		},
		dropDownOpen: n,
		setDropDownOpen: r
	};
}, fu = ({ className: e, primaryItemActions: t, dropdownItemActions: n, handleDropDownOpenChange: r }) => /* @__PURE__ */ Z("aside", {
	className: H("pointer-events-auto items-center justify-end gap-2 md:flex", e),
	children: [t.map((e) => /* @__PURE__ */ X(P, {
		label: e.label,
		hideLabel: e.hideLabel,
		variant: "outline",
		onClick: e.onClick,
		icon: e.icon
	}, e.label)), /* @__PURE__ */ X(su, {
		align: "end",
		items: n,
		onOpenChange: r
	})]
}), pu = (e) => e.id ?? e.label ?? "column", mu = (e, t, n) => n ? [.../* @__PURE__ */ new Set([...e ?? [], t])] : (e ?? []).filter((e) => e !== t), hu = (e) => [...e].sort((t, n) => (t.order ?? e.length) - (n.order ?? e.length)).map((e) => pu(e)), gu = (e) => e.filter((e) => e.hidden && !e.noHiding).map((e) => pu(e)), _u = (e, t, n, r, i, a, o) => {
	let s = () => {
		if (!i || n?.hidden === void 0) return gu(e);
		if (!n.order || n.order.length === 0) return n.hidden;
		let t = new Set(n.order), r = e.filter((e) => e.hidden && !e.noHiding && !t.has(pu(e))).map(pu);
		return [...n.hidden, ...r];
	}, [c, l] = J(s()), [u, d] = J((r && n?.order !== void 0 ? n.order : void 0) ?? hu(e));
	G(() => {
		i && l(s());
	}, [JSON.stringify(n?.hidden), i]), G(() => {
		r && d(n?.order === void 0 ? hu(e) : n.order);
	}, [JSON.stringify(n?.order), r]);
	let f = o ? t : t || 1, p = K(() => {
		let t = e.slice(0, f), n = [...e.slice(f)].sort((e, t) => {
			let n = u.indexOf(pu(e)), r = u.indexOf(pu(t));
			return (n === -1 ? u.length : n) - (r === -1 ? u.length : r);
		});
		return [...t, ...n];
	}, [
		e,
		f,
		u
	]), m = K(() => p.map(pu), [p]), h = K(() => {
		let e = p.slice(0, f), t = p.slice(f), n = new Map(t.map((e) => [pu(e), e])), r = [...new Set(a ?? [])].map((e) => n.get(e)).filter((e) => !!e), i = new Set(r.map(pu)), s = t.filter((e) => !i.has(pu(e))), l = o ? s.find((e) => !c.includes(pu(e))) ?? s.at(-1) ?? t.at(-1) : void 0, u = l ? pu(l) : void 0, d = r.filter((e) => pu(e) !== u), m = new Set(d.map(pu)), h = t.filter((e) => !m.has(pu(e))), g = h.filter((e) => !c.includes(pu(e))), _ = o && g.length === 0 ? u : void 0, v = h.filter((e) => pu(e) === _ || !c.includes(pu(e))).map(pu);
		return {
			leadingColumns: e,
			managedLockedColumns: d,
			managedLockedIds: m,
			unlockedColumns: h,
			forcedVisibleUnlockedId: _,
			soleVisibleUnlockedId: o && v.length === 1 ? v[0] : void 0
		};
	}, [
		p,
		f,
		a,
		o,
		c
	]), g = K(() => {
		let { leadingColumns: e, managedLockedColumns: t, managedLockedIds: n, unlockedColumns: a, forcedVisibleUnlockedId: o, soleVisibleUnlockedId: s } = h, l = (e, t, a) => {
			let l = pu(e), u = a || n.has(l);
			return {
				column: {
					...e,
					id: l
				},
				canHide: u || l === s ? !1 : i ? !(e.noHiding ?? !1) : !1,
				visible: u || l === o || !c.includes(l),
				sortable: !u && !!r,
				frozen: a,
				locked: u,
				order: t
			};
		};
		return [
			...e.map((e, t) => l(e, t, !0)),
			...t.map((t, n) => l(t, n + e.length, !1)),
			...a.map((n, r) => l(n, r + e.length + t.length, !1))
		];
	}, [
		c,
		r,
		i,
		h
	]), _ = K(() => h.managedLockedColumns.map(pu), [h.managedLockedColumns]), v = K(() => [...p.slice(0, t).map(pu), ..._], [
		p,
		t,
		_
	]);
	return {
		columns: K(() => g.filter((e) => e.visible).map((e) => e.column), [g]),
		columnsWithStatus: g,
		colsHidden: c,
		setColsHidden: l,
		colsOrder: u,
		setColsOrder: d,
		savedOrder: m,
		managedLockedColumnIds: _,
		stickyColumnIds: v
	};
}, vu = (e) => `f0-collapsing-group-${e}`, yu = "border-0 border-r border-solid border-f1-border-secondary", bu = /* @__PURE__ */ new Set(), xu = (e) => {
	if (!e) return null;
	let t = {};
	return Object.entries(e).forEach(([e, n]) => {
		t[e] = typeof n == "string" ? {
			label: n,
			defaultCollapsed: !1,
			highlighted: !1
		} : {
			label: n.label,
			collapsedColumns: n.collapsedColumns,
			defaultCollapsed: n.defaultCollapsed ?? !1,
			highlighted: n.highlighted ?? !1
		};
	}), t;
}, Su = (e) => {
	let t = [];
	return e.forEach((e, n) => {
		let r = e.headerGroupId;
		if (!r) return;
		let i = t[t.length - 1];
		i?.groupId === r && i.columnIndices[i.columnIndices.length - 1] === n - 1 ? i.columnIndices.push(n) : t.push({
			groupId: r,
			columnIndices: [n]
		});
	}), t;
}, Cu = (e, t, n, r = bu) => {
	let i = /* @__PURE__ */ new Set();
	Su(e).forEach((a) => {
		if (!n.has(a.groupId)) return;
		let o = t[a.groupId]?.collapsedColumns, s = a.columnIndices.filter((t) => {
			let n = pu(e[t]);
			return r.has(n) || o?.includes(n);
		}), c = new Set(s.length > 0 ? s : [a.columnIndices[0]]);
		a.columnIndices.forEach((e) => {
			c.has(e) || i.add(e);
		});
	});
	let a = e.map((e, t) => r.has(pu(e)) ? -1 : t).filter((e) => e !== -1);
	return a.length > 0 && a.every((e) => i.has(e)) && i.delete(a.at(-1)), i;
}, wu = (e, t, n = /* @__PURE__ */ new Set()) => {
	let r = [];
	return e.forEach((e, i) => {
		let a = e.headerGroupId;
		if (!a) {
			r.push({
				type: "ungrouped",
				columnIndices: [i]
			});
			return;
		}
		let o = r[r.length - 1];
		if (o && o.type === "group" && o.id === a) o.colSpan++, o.columnIndices.push(i);
		else {
			let e = t[a];
			r.push({
				colSpan: 1,
				id: a,
				type: "group",
				columnIndices: [i],
				label: e?.label ?? a,
				collapsible: e?.collapsedColumns !== void 0,
				collapsed: n.has(a)
			});
		}
	}), r;
}, Tu = (e, { headerGroups: t, onCollapsedChange: n, preservedColumnIds: r = bu } = {}) => {
	let i = K(() => xu(t), [t]), [a, o] = J(() => new Set(Object.entries(i ?? {}).filter(([, e]) => e.defaultCollapsed).map(([e]) => e))), [s, c] = J(/* @__PURE__ */ new Set()), l = m(), u = W((e) => {
		c((t) => {
			if (!t.has(e)) return t;
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), d = W((e) => {
		let t = !a.has(e), r = new Set(a);
		t ? r.add(e) : r.delete(e), o(r), l ? u(e) : c((t) => new Set(t).add(e)), n?.(e, t);
	}, [
		a,
		n,
		l,
		u
	]), f = K(() => s.size === 0 ? a : new Set([...a].filter((e) => !s.has(e))), [a, s]), p = K(() => {
		let t = !i || f.size === 0 ? e : (() => {
			let t = Cu(e, i, f, r);
			return t.size === 0 ? e : e.filter((e, n) => !t.has(n));
		})();
		return i ? t.map((e) => e.headerGroupId && i[e.headerGroupId]?.highlighted ? {
			...e,
			highlighted: !0
		} : e) : t;
	}, [
		e,
		i,
		f,
		r
	]), h = K(() => Object.entries(i ?? {}).filter(([, e]) => e.collapsedColumns !== void 0).map(([e]) => e).sort(), [i]);
	return {
		columns: p,
		collapsingCellClasses: K(() => {
			let e = /* @__PURE__ */ new Map();
			return !i || s.size === 0 || s.forEach((t) => {
				let n = h.indexOf(t);
				n !== -1 && Cu(p, i, /* @__PURE__ */ new Set([t]), r).forEach((t) => {
					e.set(pu(p[t]), vu(n));
				});
			}), e;
		}, [
			p,
			i,
			s,
			h,
			r
		]),
		collapseTransitions: K(() => [...s].map((e) => ({
			groupId: e,
			cellClass: vu(h.indexOf(e)),
			direction: a.has(e) ? "close" : "open"
		})).filter(({ groupId: e }) => h.includes(e)), [
			s,
			a,
			h
		]),
		settleHeaderGroup: u,
		headerGroups: K(() => !i || !p.some((e) => e.headerGroupId) ? null : wu(p, i, a), [
			p,
			i,
			a
		]),
		toggleHeaderGroup: d
	};
}, Eu = (e, t, n) => {
	let r = n ? 56 : 0;
	return {
		getStickyPosition: W((n) => n < e && t.length > 1 ? { left: t.slice(0, Math.max(0, n)).reduce((e, t) => e + (t.width ?? t.minWidth ?? 0), r) } : void 0, [
			e,
			t,
			r
		]),
		checkColumnWidth: r
	};
}, Du = 1500, Ou = {
	none: "",
	striped: "bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)] [background-size:100%_100px]",
	striked: "[&_*:not([data-no-strike]):not([data-no-strike]_*)]:line-through text-f1-foreground-secondary"
}, ku = Bn(({ source: e, item: t, onCheckedChange: n, selectedItems: r, columns: i, frozenColumnsLeft: a, checkColumnWidth: o, index: s, groupIndex: c, noBorder: l = !1, loading: u = !1, nestedRowProps: d, tableWithChildren: f, disableHover: p = !1, isNew: m = !1, referenceRowType: h, boldRootRows: _ = !1, cellRenderer: v, fromVisualization: y, headerGroups: b, collapsingCellClasses: x, registerSelectable: S, unregisterSelectable: w }, T) => {
	let E = e.itemUrl ? e.itemUrl(t) : void 0, D = e.itemOnClick ? e.itemOnClick(t) : void 0, O = e.selectable ? e.selectable(t) : void 0, k = !!e.itemsWithChildren?.(t), A = g(), [j, M] = J(m);
	G(() => {
		if (!j) return;
		let e = setTimeout(() => M(!1), Du);
		return () => clearTimeout(e);
	}, [j]);
	let N = (e, t) => Ts(e, t, "table", A, { tableAlign: t.align ?? "left" }), P = `table-row-${c}-${s}`, { getStickyPosition: F } = Eu(a, i, !!e.selectable), { hasItemActions: I, hasMobileItemActions: L, primaryItemActions: R, dropdownItemActions: z, mobileDropdownItemActions: B, handleDropDownOpenChange: V, dropDownOpen: ee } = du({
		source: e,
		item: t
	}), te = C();
	G(() => {
		if (!(O === void 0 || !S || !te)) return S(O, t), () => w?.(O);
	}, [
		O,
		t,
		S,
		w,
		te
	]);
	let ne = O !== void 0 && r.has(O), U = h?.(t) ?? "none", re = v ? H("h-[48px] p-0 align-middle last:pr-0", !f && (y === "editableTable" ? "first:pl-3" : "first:pl-0")) : void 0;
	return /* @__PURE__ */ Z(os, {
		ref: T,
		sticky: d?.stickyRow,
		className: H("group transition-colors hover:bg-f1-background-hover", "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", l && "after:bg-white-100", p && "hover:bg-transparent", ne && "bg-f1-background-selected-secondary", j && "animate-row-flash", _ && f && (d?.depth ?? 0) === 0 && "font-semibold", Ou[U]),
		children: [
			e.selectable && /* @__PURE__ */ X(ts, {
				width: o,
				sticky: { left: 0 },
				loading: u,
				className: H(u && f ? "first:pl-4" : "", b && "[&>div:first-child]:hidden", b && "border-0 border-r border-solid border-f1-border-secondary", re),
				referenceRowType: U,
				children: O !== void 0 && /* @__PURE__ */ X("div", {
					className: "pointer-events-auto ml-3.5 flex h-full items-center justify-start",
					children: /* @__PURE__ */ X(Kt, {
						checked: r.has(O),
						onCheckedChange: n,
						title: `Select ${e.selectable(t)}`,
						hideLabel: !0
					})
				})
			}),
			i.map((n, r) => {
				let a = b?.find((e) => e.type === "group" && e.columnIndices.includes(r)), o = !!b && (!a || a.columnIndices[a.columnIndices.length - 1] === r), l = /* @__PURE__ */ X("div", {
					className: H(n.align === "right" ? "justify-end" : "", "flex", ln),
					children: N(t, n)
				});
				return /* @__PURE__ */ X(ts, {
					firstCell: r === 0,
					href: E,
					onClick: D,
					width: n.width,
					minWidth: n.minWidth,
					sticky: F(r),
					loading: u,
					nestedRowProps: {
						...d,
						rowWithChildren: k,
						tableWithChildren: f,
						selectableRow: !!e.selectable
					},
					fromVisualization: y,
					referenceRowType: U,
					highlighted: !!n.highlighted,
					className: H(re, o && "border-0 border-r border-solid border-f1-border-secondary", x?.get(pu(n))),
					children: v ? /* @__PURE__ */ X(v, {
						item: t,
						isLastColumn: !I && r === i.length - 1,
						column: n,
						cellIndex: r,
						children: l
					}) : l
				}, `table-cell-${c}-${s}-${r}`);
			}),
			I && !u && !d?.onLoadMoreChildren && !d?.onAddRow && (y === "editableTable" ? /* @__PURE__ */ X(ts, {
				sticky: { right: 0 },
				referenceRowType: U,
				className: "bg-f1-background !px-3 align-middle",
				children: /* @__PURE__ */ X(fu, {
					className: "flex flex-nowrap justify-center",
					primaryItemActions: R,
					dropdownItemActions: z,
					handleDropDownOpenChange: V
				})
			}, `table-cell-${c}-${s}-actions`) : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("td", {
				className: "sticky right-0 top-0 z-10 hidden md:table-cell",
				children: /* @__PURE__ */ X(lu, {
					dropDownOpen: ee,
					className: "pl-8",
					children: /* @__PURE__ */ X(fu, {
						primaryItemActions: R,
						dropdownItemActions: z,
						handleDropDownOpenChange: V
					})
				})
			}), L && /* @__PURE__ */ X(ts, {
				width: 68,
				sticky: { right: 0 },
				href: E,
				className: "table-cell md:hidden",
				loading: u,
				children: /* @__PURE__ */ X(cu, {
					items: B,
					onOpenChange: V
				})
			}, `table-cell-${c}-${s}-actions`)] }))
		]
	}, P);
});
ku.displayName = "FlatRow";
var Au = ku, ju = (e) => {
	let t = e.parentElement;
	for (; t;) {
		let { overflow: e, overflowY: n } = getComputedStyle(t);
		if (e === "auto" || e === "scroll" || n === "auto" || n === "scroll") return t;
		t = t.parentElement;
	}
	return null;
}, Mu = (e, t) => {
	let n = ju(e);
	if (!n) return;
	let r, i = () => {
		r !== void 0 && cancelAnimationFrame(r), r = requestAnimationFrame(t);
	};
	return n.addEventListener("scroll", i, { passive: !0 }), () => {
		n.removeEventListener("scroll", i), r !== void 0 && cancelAnimationFrame(r);
	};
}, Nu = ({ nestedVariant: e, withHasMore: t, withAddRowActions: n, isSticky: r }) => {
	let [i, a] = J(null), [o, s] = J(null), [c, l] = J(0), u = q(null), d = q(null), f = W((e) => {
		u.current = e, e && a(e);
	}, [a]), p = W((e) => {
		d.current = e, e && s(e);
	}, [s]);
	return Kn(() => {
		let a = i?.previousElementSibling;
		if (!i || !a) {
			l(0);
			return;
		}
		let s = !o || o.getBoundingClientRect().top === 0, c = () => s ? (i.getBoundingClientRect().top ?? 0) - 4 : (o?.getBoundingClientRect().top ?? 0) - 4, u = () => s ? i.getBoundingClientRect().bottom - 8 : (o?.getBoundingClientRect().bottom ?? 0) - 8, d = () => i.getBoundingClientRect().top ?? -8, f = () => a.getBoundingClientRect().height, p = () => t && e === "basic" ? 4 : 0, m = () => n && t && e === "basic" ? -4 : 0, h = () => {
			let t = (e === "basic" ? c() : u()) - d() + f() + p() + m(), n = 0;
			if (r) {
				let e = a.getBoundingClientRect().bottom, t = i.getBoundingClientRect().top;
				n = Math.max(0, e - t);
			}
			l(Math.max(0, t - n));
		};
		h();
		let g = new MutationObserver(() => {
			h();
		}), _ = i.parentElement;
		_ && g.observe(_, {
			childList: !0,
			subtree: !0,
			attributes: !0
		});
		let v = new ResizeObserver(() => {
			h();
		});
		v.observe(i), o && v.observe(o);
		let y = r ? Mu(i, h) : void 0;
		return () => {
			g.disconnect(), v.disconnect(), y?.();
		};
	}, [
		i,
		o,
		e,
		r
	]), {
		setFirstChildRef: f,
		setLastChildRef: p,
		calculatedHeight: c
	};
}, Pu = Rn(void 0), Fu = ({ children: e, defaultExpanded: t = !1, currentFilters: n, currentSortings: r, currentNavigationFilters: i }) => {
	let [a, o] = J({}), s = W((e, t) => {
		o((n) => ({
			...n,
			[e]: t
		}));
	}, []), [c, l] = J({}), [u, d] = J(0), f = W(() => {
		o({}), l({}), d((e) => e + 1);
	}, []), p = q(n), m = q(r), h = q(i);
	G(() => {
		(p.current !== n || m.current !== r || h.current !== i) && (p.current = n, m.current = r, h.current = i, f());
	}, [
		n,
		r,
		i,
		f
	]);
	let g = W((e, t) => {
		l((n) => ({
			...n,
			[e]: t
		}));
	}, []), _ = W((e, n) => typeof t == "function" ? t(e, { depth: n }) : typeof t == "number" ? n < t : t, [t]);
	return /* @__PURE__ */ X(Pu.Provider, {
		value: {
			fetchedData: a,
			updateFetchedData: s,
			clearFetchedData: f,
			expandedRowIds: c,
			setRowExpanded: g,
			isExpandedByDefault: _,
			resetGeneration: u
		},
		children: e
	});
}, Iu = () => {
	let e = Un(Pu);
	if (!e) throw Error("useNestedDataContext must be used within NestedDataProvider");
	return e;
}, Lu = (e) => e ? typeof e == "object" && "type" in e && e.type === "detailed" : !1, Ru = (e) => e ? Array.isArray(e) ? e : e.records : [], zu = (e) => e && Lu(e) ? e?.type ?? "basic" : "basic", Bu = ({ rowId: e, item: t, source: n }) => {
	let { fetchedData: r, updateFetchedData: i, resetGeneration: a } = Iu(), o = r?.[e], s = Ru(o), [c, l] = J(s), [u, d] = J(o?.paginationInfo), [f, p] = J(!1), [m, h] = J(zu(o)), g = q(new Map(s.length > 0 ? [[0, s]] : [])), _ = q({
		page: o?.paginationInfo?.currentPage ?? 0,
		type: zu(o),
		paginationInfo: o?.paginationInfo
	}), v = q(/* @__PURE__ */ new Map()), y = q(a);
	G(() => {
		y.current !== a && (y.current = a, v.current.forEach((e) => e.unsubscribe()), v.current.clear(), g.current.clear(), _.current = {
			page: 0,
			type: "basic",
			paginationInfo: void 0
		}, l([]), d(void 0), h("basic"));
	}, [a]);
	let b = W((t, n) => {
		let r = Ru(n);
		g.current.set(t, r);
		let a = [...g.current.entries()].sort(([e], [t]) => e - t).flatMap(([, e]) => e);
		l(a), t >= _.current.page && (_.current = {
			page: t,
			type: zu(n),
			paginationInfo: n?.paginationInfo
		}, h(_.current.type), d(_.current.paginationInfo));
		let o = {
			records: a,
			type: _.current.type,
			paginationInfo: _.current.paginationInfo
		};
		return i(e, o), r;
	}, [e, i]), x = W(() => {
		if (c.length > 0 && !u?.hasMore) return c;
		let e = (u?.currentPage ?? 0) + 1;
		v.current.get(e)?.unsubscribe(), v.current.delete(e), p(!0);
		let r = n.fetchChildren?.({
			item: t,
			filters: n.currentFilters,
			pagination: u,
			sortings: n.currentSortings
		});
		if (!r) return p(!1), [];
		if (!("then" in r) && !("subscribe" in r)) {
			let t = b(e, r);
			return p(!1), t;
		}
		let i = "subscribe" in r ? r : ot(r);
		return v.current.set(e, i.subscribe({
			next: (t) => {
				t.loading ? p(!0) : t.error ? p(!1) : t.data && (b(e, t.data), p(!1));
			},
			error: (e) => {
				p(!1), console.error("Error loading children:", e);
			},
			complete: () => {
				v.current.delete(e);
			}
		})), [];
	}, [
		c,
		t,
		n,
		u,
		b
	]);
	return G(() => {
		let e = v.current;
		return () => {
			e.forEach((e) => e.unsubscribe()), e.clear();
		};
	}, []), {
		children: c,
		loadChildren: x,
		isLoading: f,
		childrenType: m,
		paginationInfo: u
	};
}, Vu = (e, t, n, r) => {
	let [i, a] = J(!1), o = r?.stickyTopOffset ?? 40;
	return Kn(() => {
		if (!e) {
			a(!1);
			return;
		}
		let r = t.current;
		if (!r) {
			a(!0);
			return;
		}
		let i = ju(r);
		if (!i) {
			a(!0);
			return;
		}
		let s, c = () => {
			let e = n.current;
			if (!e) {
				a(!0);
				return;
			}
			let t = i.getBoundingClientRect().top + o + r.offsetHeight, s = e.getBoundingClientRect().top > t;
			a((e) => e === s ? e : s);
		}, l = () => {
			s !== void 0 && cancelAnimationFrame(s), s = requestAnimationFrame(c);
		};
		i.addEventListener("scroll", l, { passive: !0 }), window.addEventListener("resize", l);
		let u = new ResizeObserver(l);
		u.observe(r);
		let d = n.current;
		return d && u.observe(d), c(), () => {
			i.removeEventListener("scroll", l), window.removeEventListener("resize", l), u.disconnect(), s !== void 0 && cancelAnimationFrame(s);
		};
	}, [
		e,
		t,
		n,
		o
	]), { isSticky: i };
}, Hu = Bn((e, t) => {
	let n = q(null), r = e.rowRef?.current;
	Kn(() => {
		if (n.current && r) {
			let t = e.rowRef?.current?.getBoundingClientRect().height;
			n.current.style.height = `${t}px`;
		}
	}, [r, e.rowRef]);
	let i = (e) => {
		n.current = e, typeof t == "function" ? t(e) : t && (t.current = e);
	}, a = e.nestedRowProps?.depth ?? 0, o = e.columns.map((e) => ({
		...e,
		render: () => "",
		editType: () => "display-only"
	}));
	return /* @__PURE__ */ X(Au, {
		...e,
		columns: o,
		ref: i,
		noBorder: a > 0,
		nestedRowProps: {
			...e.nestedRowProps,
			depth: a + 1,
			hasLoadedChildren: !1,
			...e.nestedRowPropsOverride
		}
	});
}), Uu = Bn((e, t) => {
	let n = e.addRowActions.map((e) => ({
		label: e.label,
		icon: e.icon,
		description: e.description,
		onClick: e.onClick,
		loading: e.loading,
		disabled: e.disabled
	}));
	return /* @__PURE__ */ X(Hu, {
		...e,
		ref: t,
		nestedRowPropsOverride: { onAddRow: {
			actions: n,
			label: e.addRowLabel
		} }
	});
});
Uu.displayName = "AddRowRow";
var Wu = Bn((e, t) => /* @__PURE__ */ X(Hu, {
	...e,
	ref: t,
	nestedRowPropsOverride: { onLoadMoreChildren: e.onLoadMoreChildren }
})), Gu = Bn(({ rowRef: e, rowIndex: t, source: n, item: r, columns: i, frozenColumnsLeft: a, nestedRowProps: o, groupIndex: s, onCheckedChange: c, selectedItems: l, checkColumnWidth: u, tableWithChildren: d, shouldHideBorder: f, fromVisualization: p, headerGroups: m }, h) => {
	let g = q(null), _ = e?.current;
	Kn(() => {
		if (g.current && _) {
			let t = e.current.getBoundingClientRect().height;
			g.current.style.height = `${t}px`;
		}
	}, [_, e]);
	let v = o?.depth ?? 0, y = (e) => {
		g.current = e, typeof h == "function" && h(e);
	};
	return /* @__PURE__ */ X(Au, {
		source: {
			...n,
			itemsWithChildren: () => !1
		},
		item: r,
		index: t,
		frozenColumnsLeft: a,
		columns: i,
		noBorder: f ?? !1,
		groupIndex: s,
		onCheckedChange: c,
		selectedItems: l,
		checkColumnWidth: u,
		loading: !0,
		headerGroups: m,
		ref: y,
		nestedRowProps: {
			...o,
			depth: o?.parentHasChildren ? v + 1 : v,
			hasLoadedChildren: !1,
			expanded: !1
		},
		tableWithChildren: d,
		fromVisualization: p
	}, `row-loading-${t}`);
}), Ku = Bn(({ rowRef: e, ...t }, n) => {
	let r = t.source.childrenCount?.({
		item: t.item,
		pagination: t.paginationInfo
	}), i = t.paginationInfo ? t.paginationInfo.total ? Math.min(t.paginationInfo.perPage, t.paginationInfo.total - t.paginationInfo.currentPage * t.paginationInfo.perPage) : t.paginationInfo.perPage : void 0, a = r ?? i ?? 5;
	return /* @__PURE__ */ X(Y, { children: Array.from({ length: a }).map((r, i) => {
		let o = i !== a - 1 || t.shouldHideBorder;
		return /* @__PURE__ */ X(Gu, {
			ref: n,
			rowRef: e,
			rowIndex: i,
			...t,
			shouldHideBorder: o
		}, `row-loading-${i}`);
	}) });
}), qu = (e) => e ? (Array.isArray(e) ? e : [e]).filter((e) => e !== void 0) : [], Ju = (e, t) => {
	let n = q(null), r = q(null), i = iu(), a = `${e.nestedRowProps?.depth ?? 0}-${"id" in e.item ? e.item.id + "-" + e.index : e.index}`, { expandedRowIds: o, setRowExpanded: s, isExpandedByDefault: c, resetGeneration: l } = Iu(), u = o[a] ?? c(e.item, e.nestedRowProps?.depth ?? 0), { children: d, loadChildren: f, isLoading: p, childrenType: m, paginationInfo: h } = Bu({
		rowId: a,
		item: e.item,
		source: e.source
	}), g = u && p, _ = u, v = u && h?.hasMore, y = u && !p ? qu(i?.addNestedRowActions?.(e.item)) : [], b = y.length > 0, x = (e.nestedRowProps?.depth ?? 0) === 0, { isSticky: S } = Vu(u && x, n, r), { calculatedHeight: C, setFirstChildRef: w, setLastChildRef: T } = Nu({
		nestedVariant: m,
		withHasMore: !!v,
		withAddRowActions: b,
		isSticky: S
	}), E = W((e) => {
		n.current = e, typeof t == "function" && t(e);
	}, [t]), D = () => {
		let e = !u;
		s(a, e), e && !d.length && f();
	}, O = q(null);
	G(() => {
		!u || d.length || O.current !== l && (O.current = l, f());
	}, [
		u,
		d.length,
		f,
		l
	]);
	let k = {
		depth: e.nestedRowProps?.depth ?? 0,
		expanded: u,
		onExpand: D,
		nestedVariant: m,
		connectorHeight: C
	}, A = e.fromVisualization === "table", j = (e.nestedRowProps?.isLastChild || x) ?? !1, M = (u || !j) && A;
	return /* @__PURE__ */ Z(Y, { children: [
		/* @__PURE__ */ X(Au, {
			...e,
			noBorder: M,
			ref: E,
			nestedRowProps: {
				...k,
				parentHasChildren: (e.nestedRowProps?.parentHasChildren ?? d.length > 0) || b,
				hasLoadedChildren: !1,
				isLastChild: j,
				stickyRow: S
			},
			tableWithChildren: e.tableWithChildren,
			fromVisualization: e.fromVisualization
		}),
		_ && d.map((t, n) => {
			let r = t, i = e.source.itemsWithChildren?.(r), a = n === 0, o = n === d.length - 1, s = (e.nestedRowProps?.depth ?? 0) + 1, c = () => {
				if (a) return (e) => {
					w(e);
				};
				if (o && !v && !b) return (e) => {
					T(e);
				};
			}, l = o && j && !v, u = e.rowWrapper;
			if (i) {
				let i = /* @__PURE__ */ zn(Zu, {
					...e,
					key: `nested-row-${e.groupIndex}-${t.id}-${e.index}-${n}`,
					index: n,
					item: r,
					onCheckedChange: (t) => {
						e.onItemCheckedChange?.(r, t);
					},
					tableWithChildren: e.tableWithChildren,
					ref: c(),
					nestedRowProps: {
						...e.nestedRowProps,
						parentHasChildren: !0,
						depth: s,
						isLastChild: l
					},
					fromVisualization: e.fromVisualization
				});
				return u ? /* @__PURE__ */ X(u, {
					item: r,
					index: n,
					children: i
				}, `nested-row-${e.groupIndex}-${t.id}-${e.index}-${n}`) : i;
			}
			{
				let t = !l && A, i = /* @__PURE__ */ zn(Au, {
					...e,
					key: `row-${e.groupIndex}-${e.index}-${n}`,
					index: n,
					item: r,
					onCheckedChange: (t) => {
						e.onItemCheckedChange?.(r, t);
					},
					noBorder: t,
					ref: c(),
					nestedRowProps: {
						...e.nestedRowProps,
						depth: (e.nestedRowProps?.depth ?? 0) + 1,
						parentHasChildren: !0,
						nestedVariant: m,
						onExpand: D,
						isLastChild: l
					},
					fromVisualization: e.fromVisualization,
					tableWithChildren: e.tableWithChildren
				});
				return u ? /* @__PURE__ */ X(u, {
					item: r,
					index: n,
					children: i
				}, `row-${e.groupIndex}-${e.index}-${n}`) : i;
			}
		}),
		g && /* @__PURE__ */ X(Ku, {
			...e,
			rowRef: n,
			nestedRowProps: {
				...k,
				parentHasChildren: d.length > 0
			},
			paginationInfo: h,
			ref: T,
			shouldHideBorder: !j
		}),
		v && !p && /* @__PURE__ */ X(Wu, {
			...e,
			disableHover: !0,
			rowRef: n,
			onLoadMoreChildren: f,
			ref: b ? void 0 : T,
			nestedRowProps: {
				...e.nestedRowProps,
				parentHasChildren: !0,
				nestedVariant: m,
				isLastChild: j
			}
		}),
		b && /* @__PURE__ */ X(Uu, {
			...e,
			disableHover: !0,
			rowRef: n,
			addRowActions: y,
			addRowLabel: i?.addNestedRowActionsLabel,
			ref: (e) => {
				d.length === 0 && w(e), T(e);
			},
			nestedRowProps: {
				...e.nestedRowProps,
				parentHasChildren: !0,
				nestedVariant: m
			}
		}),
		u && /* @__PURE__ */ X("tr", {
			"aria-hidden": "true",
			className: "h-0 border-none p-0",
			children: /* @__PURE__ */ X("td", {
				ref: r,
				colSpan: e.columns.length + +!!e.source.selectable + (e.source.itemActions ? 2 : 0),
				className: "h-0 border-none p-0"
			})
		})
	] });
}, Yu = (e, t) => /* @__PURE__ */ X(Xu, {
	...e,
	ref: t
}), Xu = Bn(Ju), Zu = Bn(Yu), Qu = Bn((e, t) => {
	let n = !!e.source.itemsWithChildren?.(e.item), r = e.nestedRowProps?.hasLoadedChildren === void 0 || e.nestedRowProps.hasLoadedChildren;
	return X(n && r ? Zu : Au, {
		...e,
		ref: t
	});
});
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/Table/hooks/useAddedRowKeys.ts
function $u(e, t) {
	let n = q(/* @__PURE__ */ new Set()), r = q(!1), i = q(t), a = i.current !== t, o = /* @__PURE__ */ new Set();
	if (r.current && !a) for (let t of e) n.current.has(t) || o.add(t);
	return G(() => {
		if (a) {
			i.current = t, n.current = new Set(e), e.length > 0 && (r.current = !0);
			return;
		}
		!r.current && e.length > 0 && (r.current = !0);
		for (let t of e) n.current.add(t);
	}), o;
}
var ed = (e, t, n, r = !0) => {
	Kn(() => {
		if (t.length === 0) return;
		let i = e.current;
		if (!(i && r && typeof i.animate == "function")) {
			t.forEach(({ groupId: e }) => n(e));
			return;
		}
		let a = [], o = [], s = !1;
		return t.forEach(({ groupId: e, cellClass: t, direction: r }) => {
			let c = Array.from(i.querySelectorAll(`.${t}`));
			if (c.length === 0) {
				n(e);
				return;
			}
			let l = c.map((e) => {
				let { paddingLeft: t, paddingRight: n } = getComputedStyle(e);
				return {
					width: e.getBoundingClientRect().width,
					paddingLeft: t,
					paddingRight: n
				};
			}), u = [];
			c.forEach((e, t) => {
				let { width: n, paddingLeft: i, paddingRight: s } = l[t], c = e.style.overflow;
				e.style.overflow = "hidden", o.push(() => {
					e.style.overflow = c;
				});
				let d = {
					width: "0px",
					minWidth: "0px",
					maxWidth: "0px",
					paddingLeft: "0px",
					paddingRight: "0px"
				}, f = {
					width: `${n}px`,
					minWidth: "0px",
					maxWidth: `${n}px`,
					paddingLeft: i,
					paddingRight: s
				}, p = r === "close", m = e.animate(p ? [f, d] : [d, f], {
					duration: 220,
					easing: "ease-out",
					fill: p ? "forwards" : "backwards"
				});
				Array.from(e.children).forEach((e) => {
					e instanceof HTMLElement && a.push(e.animate(p ? [{ opacity: 1 }, { opacity: 0 }] : [{ opacity: 0 }, { opacity: 1 }], p ? {
						duration: 80,
						easing: "ease-out",
						fill: "forwards"
					} : {
						duration: 120,
						delay: 110,
						easing: "ease-out",
						fill: "backwards"
					}));
				}), a.push(m), u.push(m.finished.catch(() => void 0));
			}), Promise.all(u).then(() => {
				s || n(e);
			});
		}), () => {
			s = !0, a.forEach((e) => e.cancel()), o.forEach((e) => e());
		};
	}, [
		t,
		e,
		n,
		r
	]);
}, td = () => {
	let e = q(/* @__PURE__ */ new Map()), [t, n] = J([]), r = W(() => {
		n(Array.from(e.current.keys()));
	}, []), i = W((t, n) => {
		let i = !e.current.has(t);
		e.current.set(t, n), i && r();
	}, [r]), a = W((t) => {
		e.current.delete(t) && r();
	}, [r]), o = W(() => Array.from(e.current.entries()), []);
	return K(() => ({
		register: i,
		unregister: a,
		ids: t,
		getEntries: o
	}), [
		i,
		a,
		t,
		o
	]);
}, nd = (e) => e.locked ?? (!e.sortable && !e.canHide && !e.disabledReason), rd = (e) => !!e.sortable && !nd(e), id = (e, t) => {
	let n = t.filter(rd), r = e.filter(rd).length;
	if (n.length !== r) return e;
	let i = 0;
	return e.map((e) => rd(e) ? n[i++] : e);
}, ad = ({ item: e, onChangeVisibility: t, onRemove: n, onLockedChange: r, allowSorting: i, allowHiding: a, isFirst: o, isLast: c }) => {
	let l = g(), u = H("group flex items-center gap-2 text-medium text-sm pr-4", o && "pt-1", c && "pb-1"), d = rr(), f = nd(e), m = rd(e), h = !!e.removable && !f && !!n, _ = !!e.lockable && !f && !!r, v = !!e.lockable && f && !!r, y = q(null), b = q(null), x = q(null), S = q(!1), C = (e) => {
		let t = S.current || e.detail === 0;
		return S.current = !1, t;
	}, w = (e) => {
		(e.key === "Enter" || e.key === " ") && (S.current = !0);
	};
	G(() => {
		let e = x.current, t = e === "lock" && _ ? y.current : e === "unlock" && v ? b.current : null;
		t && (x.current = null, t.focus());
	}, [_, v]);
	let T = /* @__PURE__ */ Z("div", {
		className: u,
		children: [
			(i || e.showLockState) && /* @__PURE__ */ X("div", {
				className: H("flex shrink-0 items-center justify-center text-f1-icon", m && "cursor-grab"),
				style: { width: v ? "28px" : "20px" },
				onPointerDown: (e) => {
					m && d.start(e);
				},
				children: m ? /* @__PURE__ */ X(p, {
					icon: Ne,
					size: "xs"
				}) : v ? /* @__PURE__ */ X("span", {
					onKeyDown: w,
					onPointerDown: () => {
						S.current = !1;
					},
					children: /* @__PURE__ */ X(O, {
						variant: "ghost",
						size: "sm",
						compact: !0,
						hideLabel: !0,
						icon: _t,
						label: l.t("collections.table.settings.unlockColumn", { label: e.label }),
						ref: b,
						onClick: (t) => {
							x.current = C(t) ? "lock" : null, r?.(e, !1);
						}
					})
				}) : e.disabledReason ? null : /* @__PURE__ */ X(p, {
					icon: _t,
					size: "sm"
				})
			}),
			/* @__PURE__ */ X("span", {
				className: H("flex-1 min-w-0", m ? "text-f1-foreground" : "text-f1-foreground-secondary"),
				children: /* @__PURE__ */ X(s, { children: e.label })
			}),
			(_ || h) && /* @__PURE__ */ X("div", {
				"data-column-actions": !0,
				className: "shrink-0 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100",
				children: /* @__PURE__ */ Z("div", {
					className: "flex items-center",
					children: [_ && /* @__PURE__ */ X("span", {
						onKeyDown: w,
						onPointerDown: () => {
							S.current = !1;
						},
						children: /* @__PURE__ */ X(O, {
							variant: "ghost",
							size: "sm",
							compact: !0,
							hideLabel: !0,
							icon: _t,
							label: l.t("collections.table.settings.lockColumn", { label: e.label }),
							ref: y,
							onClick: (t) => {
								x.current = C(t) ? "unlock" : null, r?.(e, !0);
							}
						})
					}), h && /* @__PURE__ */ X(O, {
						variant: "ghost",
						size: "sm",
						compact: !0,
						hideLabel: !0,
						icon: le,
						label: l.collections.table.settings.removeColumn,
						onClick: () => n?.(e)
					})]
				})
			}),
			a && (e.disabledReason ? /* @__PURE__ */ X(Tn, {
				tooltip: e.disabledReason,
				children: /* @__PURE__ */ X("span", {
					className: "inline-flex cursor-not-allowed",
					children: /* @__PURE__ */ X(pt, {
						checked: !1,
						title: e.label,
						hideLabel: !0,
						disabled: !0
					})
				})
			}) : /* @__PURE__ */ X(pt, {
				checked: e.visible,
				onCheckedChange: (n) => {
					t({
						...e,
						visible: n
					});
				},
				title: e.label,
				hideLabel: !0,
				disabled: !e.canHide || f
			}))
		]
	});
	return m ? /* @__PURE__ */ X(fr, {
		value: e,
		drag: "y",
		dragElastic: .1,
		whileDrag: { scale: 1.05 },
		dragListener: !1,
		dragControls: d,
		children: T
	}) : /* @__PURE__ */ X("li", { children: T });
}, od = ({ items: e, onChange: t, onRemove: n, onLockedChange: r, allowSorting: i, allowHiding: a }) => {
	let o = (n) => {
		t?.(e.map((e) => e.id === n.id ? n : e));
	};
	return /* @__PURE__ */ X(sr, {
		className: "flex flex-1 select-none list-none flex-col gap-2",
		values: e,
		onReorder: (n) => {
			t?.(id(e, n));
		},
		axis: "y",
		layoutScroll: !0,
		children: e.map((t, s) => /* @__PURE__ */ X(ad, {
			item: t,
			onChangeVisibility: o,
			onRemove: n,
			onLockedChange: r,
			allowSorting: i,
			allowHiding: a,
			isFirst: s === 0,
			isLast: s === e.length - 1
		}, t.id))
	});
}, sd = (e, t) => {
	let n = new Set(t.map((e) => e.id)), r = new Set(t.filter((e) => e.locked).map((e) => e.id)), i = t.filter((e) => !e.locked).map((e) => e.id), a = 0, o = e.filter((e) => n.has(e)).map((e) => r.has(e) ? e : i[a++]), s = new Set(o);
	return [...o, ...t.map((e) => e.id).filter((e) => !s.has(e))];
}, cd = (e, t, n = !1) => {
	let r = !t && n ? [...e].reverse().find((e) => !e.locked && e.visible && e.canHide) : void 0;
	return e.map((e) => ({
		...e,
		visible: e.id === r?.id ? !0 : e.canHide ? t : e.visible
	}));
}, ld = ({ items: e, visualizationKey: t, allowSorting: n, allowHiding: r, onAddColumn: i, onRemoveColumn: a, onLockedColumnChange: o, orderBaseline: s, keepOneUnlockedVisible: c = !1 }) => {
	let l = g(), { setVisualizationSettings: u } = Bc(), d = (e) => {
		u(t, (t) => ({
			...t,
			order: s ? sd(s, e) : e.map((e) => e.id),
			hidden: e.filter((e) => !e.visible).map((e) => e.id)
		}));
	}, f = (t) => {
		d(cd(e, t, c));
	}, p = r && e.filter((e) => e.canHide).length > 1;
	return /* @__PURE__ */ Z("div", {
		className: "relative -mr-2 flex flex-col gap-2",
		children: [i && /* @__PURE__ */ X("div", {
			className: "flex",
			children: /* @__PURE__ */ X(O, {
				variant: "ghost",
				size: "sm",
				icon: ut,
				label: l.collections.table.settings.addColumn,
				onClick: i
			})
		}), /* @__PURE__ */ Z(Jt, {
			className: "[&_[data-scroll-container]]:max-h-56",
			children: [/* @__PURE__ */ X(od, {
				items: e,
				onChange: d,
				onRemove: a ? (e) => a(e.id) : void 0,
				onLockedChange: o ? (e, t) => o(e.id, t) : void 0,
				allowSorting: n,
				allowHiding: r
			}), p && /* @__PURE__ */ Z("div", {
				className: "sticky bottom-0 flex justify-between bg-f1-background/80 p-2 pl-0 backdrop-blur-sm",
				children: [/* @__PURE__ */ X(P, {
					variant: "outline",
					size: "sm",
					label: l.collections.table.settings.showAllColumns,
					onClick: () => f(!0)
				}), /* @__PURE__ */ X(P, {
					variant: "ghost",
					size: "sm",
					label: l.collections.table.settings.hideAllColumns,
					onClick: () => f(!1)
				})]
			})]
		})]
	});
}, ud = ({ columns: e, frozenColumns: t, allowSorting: n, allowHiding: r, visualizationKey: i = "table", onAddColumn: a, onRemoveColumn: o, lockedColumnIds: s, onLockedColumnIdsChange: c }) => {
	let { settings: l } = Bc(), u = l.visualization[i], d = s !== void 0 || !!c, { columnsWithStatus: f, savedOrder: p, managedLockedColumnIds: m } = _u(e, t, u, n, r, s, d), h = K(() => {
		let e = new Set(f.filter((e) => e.visible && !e.locked).map((e) => e.column.id));
		return f.filter((e) => r || e.visible).map((t) => ({
			id: t.column.id,
			label: t.column.label,
			sortable: t.sortable,
			canHide: t.canHide,
			visible: t.visible,
			locked: t.locked,
			lockable: !!c && !t.frozen && (t.locked || [...e].some((e) => e !== t.column.id)),
			showLockState: d && t.locked,
			removable: !!o && !t.locked && !t.column.noRemoving
		}));
	}, [
		f,
		r,
		c,
		o,
		d
	]);
	return /* @__PURE__ */ X(ld, {
		items: h,
		visualizationKey: i,
		allowSorting: n,
		allowHiding: r,
		onAddColumn: a,
		onRemoveColumn: o,
		onLockedColumnChange: c ? (e, t) => {
			c(mu(m, e, t));
		} : void 0,
		orderBaseline: d ? p : void 0,
		keepOneUnlockedVisible: d
	});
}, dd = (e) => !e.allowColumnHiding && !e.allowColumnReordering && !e.onAddColumn && !e.onRemoveColumn && !e.onLockedColumnIdsChange ? null : /* @__PURE__ */ X(ud, {
	columns: e.columns,
	frozenColumns: e.frozenColumns || 0,
	allowSorting: e.allowColumnReordering ?? !1,
	allowHiding: e.allowColumnHiding ?? !1,
	visualizationKey: e.visualizationKey,
	onAddColumn: e.onAddColumn,
	onRemoveColumn: e.onRemoveColumn,
	lockedColumnIds: e.lockedColumnIds,
	onLockedColumnIdsChange: e.onLockedColumnIdsChange
}), fd = (e) => e ? (Array.isArray(e) ? e : [e]).filter((e) => e !== void 0) : [], pd = ({ text: e, count: t }) => {
	let n = String(t), r = e.indexOf(n);
	if (r === -1) return /* @__PURE__ */ X("span", {
		className: "font-me text-base font-medium text-f1-foreground-secondary",
		children: e
	});
	let i = e.slice(0, r), a = e.slice(r + n.length);
	return /* @__PURE__ */ Z("span", {
		className: "text-base font-medium text-f1-foreground-secondary",
		children: [
			i,
			/* @__PURE__ */ X("span", {
				className: "font-semibold text-f1-foreground",
				children: n
			}),
			a
		]
	});
}, md = ({ columns: e, source: t, frozenColumns: n = 0, defaultExpanded: r, onSelectItems: i, onLoadData: a, onLoadError: o, allowColumnHiding: s, allowColumnReordering: c, lockedColumnIds: l, onLockedColumnIdsChange: u, referenceRowType: d, boldRootRows: f, headerGroups: m, onHeaderGroupCollapsedChange: h, bordered: _, rowWrapper: v, cellRenderer: y, showItemActions: b, visualizationSettings: x, fromVisualization: S = "table", summaryPlaceholder: C = "-" }) => {
	let { t: w, ...E } = g(), D = iu(), [O] = J(() => B.create(Qu)), { settings: k } = Bc(), A = l !== void 0 || !!u, { columns: j, stickyColumnIds: M } = _u(e, n, x ?? k.visualization?.table, c, s, l, A), { columns: N, headerGroups: F, toggleHeaderGroup: I, collapsingCellClasses: L, collapseTransitions: R, settleHeaderGroup: te } = Tu(j, {
		headerGroups: m,
		onCollapsedChange: h,
		preservedColumnIds: K(() => new Set(M), [M])
	}), ne = q(null);
	ed(ne, R, te);
	let { data: U, paginationInfo: re, setPage: ie, isInitialLoading: ae, isLoadingMore: oe, loadMore: se, summaries: ce, committedQuery: le } = Bl(t, { onError: (e) => {
		o(e);
	} }), { currentSortings: ue, setCurrentSortings: de, isLoading: fe } = t, pe = b !== !1 && !!t.itemActions, me = S === "editableTable", he = me ? 1 : 2, ge = K(() => b === !1 ? {
		...t,
		itemActions: void 0
	} : t, [t, b]), { loadingIndicatorRef: _e } = tu(re, fe, oe, se);
	G(() => {
		a({
			totalItems: re?.total || U.records.length,
			filters: t.currentFilters,
			search: t.currentSearch,
			isInitialLoading: ae,
			data: U.records
		});
	}, [re?.total, U.records]);
	let ve = M.length, ye = (e, t) => "id" in e && e.id !== void 0 && e.id !== null ? `id:${String(e.id)}` : `index:${String(t)}`, be = $u(U?.type === "flat" ? U.records.map((e, t) => `row-${ye(e, t)}`) : [], le), xe = td(), { selectedItems: Se, allSelectedStatus: Ce, groupAllSelectedStatus: we, handleSelectItemChange: Ee, handleSelectAll: De, handleSelectAllItems: ke, handleSelectGroupChange: Ae } = tt({
		data: U,
		paginationInfo: re,
		source: t,
		onSelectItems: i,
		selectionMode: "multi",
		selectedState: t.defaultSelectedItems,
		getRenderedSelectableEntries: xe.getEntries,
		renderedSelectableCount: xe.ids.length
	}), je = K(() => !ce || !t.summaries ? null : {
		data: ce,
		sticky: !0,
		label: t.summaries?.label
	}, [ce, t.summaries]), Me = (e, t, n) => {
		if (!(!e || !t)) return n === null ? "none" : n.field === e ? n.order : "none";
	}, Ne = (e) => e == null || e === "", Pe = (e) => e ?? C, Fe = (e) => {
		de(() => !ue || ue.field !== e ? {
			field: e,
			order: "asc"
		} : ue.order === "asc" ? {
			field: e,
			order: "desc"
		} : null);
	}, Ie = t.grouping?.collapsible, Le = t.grouping?.defaultOpenGroups, { openGroups: Re, setGroupOpen: ze } = Ue(U?.type === "grouped" ? U.groups : [], Le), Be = N.length + +!!pe + +!!t.selectable, { getStickyPosition: Ve, checkColumnWidth: He } = Eu(ve, N, !!t.selectable), We = U?.records.some((e) => t.itemsWithChildren?.(e));
	if (ae) return /* @__PURE__ */ X(ls.Skeleton, { columns: Be });
	t.sortings || N.forEach((e) => {
		e.sorting && console.warn("Sorting is defined on a column but no sortings are provided in the data source");
	});
	let Ge = Ce.selectedCount > 0 || Ce.checked, Ke = xe.ids.length > 0 ? xe.ids : (U?.records ?? []).map((e) => t.selectable?.(e)).filter((e) => e !== void 0), qe = Ke.length > 0 && Ke.every((e) => Se.has(e)), Je = Math.max(re?.total ?? 0, Ke.length), Ye = Ce.checked && !Ce.indeterminate || qe, Qe = !!t.allPagesSelection && (!Ce.checked || Ce.indeterminate) && re?.total !== void 0 && Je > Ce.selectedCount, $e = N.length + (pe ? he : 0), et = Ce.selectedCount === 1 ? E.status.selected.singular : E.status.selected.plural;
	return /* @__PURE__ */ X("div", {
		className: "flex h-full min-h-0 flex-col gap-4",
		children: /* @__PURE__ */ Z(Fu, {
			defaultExpanded: r,
			currentFilters: t.currentFilters,
			currentSortings: t.currentSortings,
			currentNavigationFilters: t.currentNavigationFilters,
			children: [/* @__PURE__ */ X("div", {
				ref: ne,
				className: H("min-h-0", _ && "overflow-hidden rounded-lg border border-solid border-f1-border-secondary [&_thead::before]:!bg-transparent [&_thead_th>div:first-child]:!bg-transparent [&_tbody>tr:last-child::after]:!bg-transparent"),
				children: /* @__PURE__ */ Z(ls, {
					loading: fe,
					children: [
						/* @__PURE__ */ Z(as, {
							sticky: !0,
							children: [
								F ? /* @__PURE__ */ Z(os, { children: [
									t.selectable && /* @__PURE__ */ X(is, {
										align: "left",
										sticky: { left: 0 },
										width: He,
										className: H("border-0 border-r border-solid border-f1-border-secondary", "hover:after:bg-transparent"),
										children: /* @__PURE__ */ X("div", { className: "ml-3.5 flex w-full items-center justify-start" })
									}),
									F.map((e, t) => {
										let n = e.type === "group" && e.collapsible, r = H(yu, !n && "hover:after:bg-transparent"), i = e.columnIndices.every((e) => N[e].align === "right") ? "right" : "left";
										return e.type === "group" ? /* @__PURE__ */ X(is, {
											align: i,
											colSpan: e.colSpan,
											className: r,
											highlighted: e.columnIndices.some((e) => N[e].highlighted),
											onClick: e.collapsible ? () => I(e.id) : void 0,
											children: e.collapsible ? /* @__PURE__ */ Z("button", {
												type: "button",
												"aria-expanded": !e.collapsed,
												className: H("flex max-w-full items-center gap-1 rounded-xs font-medium text-f1-foreground-secondary", i === "right" && "flex-row-reverse", V()),
												children: [/* @__PURE__ */ X("span", {
													className: "truncate",
													children: e.label
												}), /* @__PURE__ */ X(p, {
													"aria-hidden": "true",
													size: "sm",
													icon: e.collapsed ? Te : Oe
												})]
											}) : e.label
										}, `header-group-${e.id}-${t}`) : /* @__PURE__ */ X(is, {
											align: i,
											className: r,
											width: N[e.columnIndices[0]].width,
											minWidth: N[e.columnIndices[0]].minWidth,
											highlighted: !!N[e.columnIndices[0]].highlighted,
											sticky: Ve(e.columnIndices[0]),
											children: /* @__PURE__ */ X("span", {})
										}, `header-ungrouped-${e.columnIndices[0]}`);
									}),
									pe && (me ? /* @__PURE__ */ X(is, {
										width: "fit",
										sticky: { right: 0 },
										children: /* @__PURE__ */ X("span", {
											className: "sr-only",
											children: E.collections.actions.actions
										})
									}, "actions") : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ X(is, {
										hidden: !0,
										width: 68,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: /* @__PURE__ */ X("span", {})
									}, "actions")] }))
								] }) : null,
								/* @__PURE__ */ Z(os, { children: [
									t.selectable && /* @__PURE__ */ X(is, {
										width: He,
										sticky: { left: 0 },
										align: "left",
										className: F ? H("[&>div:first-child]:hidden", "border-0 border-r border-solid border-f1-border-secondary") : void 0,
										children: /* @__PURE__ */ X("div", {
											className: "ml-3.5 flex w-full items-center justify-start",
											children: /* @__PURE__ */ X(Qt, {
												checked: Ye,
												indeterminate: Ge && !Ye,
												onCheckedChange: De,
												title: E.actions.selectAll,
												hideLabel: !0,
												disabled: U?.records.length === 0
											})
										})
									}),
									N.map(({ sorting: e, label: n, ...r }, i) => {
										let a = F?.find((e) => e.type === "group" && e.columnIndices.includes(i)), o = !!F && (!a || a.columnIndices[a.columnIndices.length - 1] === i);
										return /* @__PURE__ */ X(is, {
											sortState: Me(e, t.sortings, ue),
											width: r.width,
											align: r.align,
											sticky: Ve(i),
											...r,
											hidden: !1,
											className: H(F && "[&>div:first-child]:hidden", o && "border-0 border-r border-solid border-f1-border-secondary", S === "editableTable" && (i !== N.length - 1 || pe) && "border-0 border-r-[1px] border-solid border-f1-border-secondary", L.get(pu({
												id: r.id,
												label: n
											}))) || void 0,
											onSortClick: e ? () => {
												e && Fe(e);
											} : void 0,
											children: n
										}, `table-head-${i}`);
									}),
									pe && (me ? /* @__PURE__ */ X(is, {
										width: "fit",
										sticky: { right: 0 },
										children: /* @__PURE__ */ X("span", {
											className: "sr-only",
											children: E.collections.actions.actions
										})
									}, "actions") : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ X(is, {
										width: 68,
										hidden: !0,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: E.collections.actions.actions
									}, "actions")] }))
								] }),
								Ge && t.selectable && !!t.allPagesSelection && /* @__PURE__ */ X(os, { children: /* @__PURE__ */ X("th", {
									colSpan: 1 + $e,
									className: "h-11 border-0 border-t border-solid border-f1-border-secondary bg-f1-background-secondary px-5",
									children: /* @__PURE__ */ Z("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ X(pd, {
											text: Ce.checked && !Ce.indeterminate ? w("status.selected.allItemsSelected", { total: Je }) : qe ? w("status.selected.allOnPage", { count: Ce.selectedCount }) : `${Ce.selectedCount} ${et}`,
											count: Ce.checked && !Ce.indeterminate ? Je : Ce.selectedCount
										}), Qe && /* @__PURE__ */ X(P, {
											variant: "outline",
											label: w("status.selected.selectAllItems", { total: Je }),
											onClick: () => ke(!0),
											size: "sm"
										})]
									})
								}) })
							]
						}),
						/* @__PURE__ */ Z(Fo, { children: [
							U?.type === "grouped" && U.groups.map((e, n) => {
								let r = e.itemCount;
								return /* @__PURE__ */ Z(In, { children: [/* @__PURE__ */ Z(os, {
									sticky: !0,
									children: [
										t.selectable && /* @__PURE__ */ X(ts, {
											width: He,
											sticky: { left: 0 },
											children: /* @__PURE__ */ X("div", {
												className: "pointer-events-auto ml-1.5 flex items-center justify-start",
												children: /* @__PURE__ */ X(Qt, {
													checked: !!au(we[e.key]),
													indeterminate: au(we[e.key]) === "indeterminate",
													title: E.actions.selectAll,
													hideLabel: !0,
													onCheckedChange: (t) => Ae(e, t)
												})
											})
										}),
										/* @__PURE__ */ X(ts, {
											sticky: { left: t.selectable ? He : 0 },
											colSpan: ve || 1,
											children: /* @__PURE__ */ X(Ze, {
												selectable: !1,
												showOpenChange: Ie,
												label: e.label,
												itemCount: r,
												open: Re[e.key],
												onOpenChange: (t) => ze(e.key, t)
											})
										}),
										N.length - (ve || 1) > 0 && /* @__PURE__ */ X(ts, {
											colSpan: N.length - (ve || 1),
											children: "\xA0"
										})
									]
								}, `group-header-${e.key}`), /* @__PURE__ */ X(z, { children: O && (!Ie || Re[e.key]) && e.records.map((e, t) => {
									let r = `row-${n}-${ye(e, t)}`, i = /* @__PURE__ */ X(O, {
										variants: Nt(),
										initial: Ie ? "hidden" : "visible",
										animate: "visible",
										exit: "hidden",
										custom: t,
										layout: !0,
										source: ge,
										item: e,
										index: t,
										groupIndex: n,
										onItemCheckedChange: Ee,
										onCheckedChange: (t) => Ee(e, t),
										selectedItems: Se,
										columns: N,
										frozenColumnsLeft: ve,
										checkColumnWidth: He,
										referenceRowType: d,
										rowWrapper: v,
										cellRenderer: y,
										headerGroups: F,
										collapsingCellClasses: L,
										fromVisualization: S,
										registerSelectable: xe.register,
										unregisterSelectable: xe.unregister
									}, r);
									return v ? /* @__PURE__ */ X(v, {
										item: e,
										index: t,
										children: i
									}, r) : i;
								}) }, `group-animate-${n}`)] }, `group-${e.key}`);
							}),
							U?.type === "flat" && U.records.map((e, t) => {
								let n = `row-${ye(e, t)}`, r = be.has(n), i = /* @__PURE__ */ X(O, {
									variants: Nt(),
									initial: r ? "hidden" : !1,
									animate: "visible",
									custom: t,
									layout: !0,
									isNew: r,
									groupIndex: 0,
									source: ge,
									item: e,
									index: t,
									onItemCheckedChange: Ee,
									onCheckedChange: (t) => Ee(e, t),
									selectedItems: Se,
									columns: N,
									frozenColumnsLeft: ve,
									checkColumnWidth: He,
									tableWithChildren: We,
									referenceRowType: d,
									boldRootRows: f,
									rowWrapper: v,
									cellRenderer: y,
									fromVisualization: S,
									headerGroups: F,
									collapsingCellClasses: L,
									registerSelectable: xe.register,
									unregisterSelectable: xe.unregister
								}, n);
								return v ? /* @__PURE__ */ X(v, {
									item: e,
									index: t,
									children: i
								}, n) : i;
							}),
							re?.type === "infinite-scroll" && oe && Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ X(os, { children: Array.from({ length: Be }).map((e, n) => /* @__PURE__ */ X(ts, { children: /* @__PURE__ */ X(T, { className: "h-4 w-full" }) }, `skeleton-cell-${t}-${n}`)) }, `skeleton-row-${t}`)),
							Xe(re) && re.hasMore && /* @__PURE__ */ X("tr", { children: /* @__PURE__ */ X("td", {
								colSpan: N.length + +!!t.selectable + +!!pe,
								ref: _e,
								className: "h-10",
								"aria-hidden": "true"
							}) })
						] }),
						(() => {
							let e = fd(D?.addRowActions?.());
							return !je && e.length === 0 ? null : /* @__PURE__ */ Z(us, { children: [je && /* @__PURE__ */ Z(os, {
								className: H(je.sticky && "sticky bottom-0 z-30 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background", "font-medium"),
								children: [
									t.selectable && /* @__PURE__ */ X(ts, {
										width: He,
										sticky: { left: 0 },
										children: je.label && /* @__PURE__ */ X("div", {
											className: "font-medium text-f1-foreground-secondary",
											children: je.label
										})
									}),
									N.map((e, n) => /* @__PURE__ */ X(ts, {
										firstCell: n === 0,
										width: e.width,
										sticky: Ve(n),
										highlighted: !!e.highlighted,
										className: H(me && (n !== N.length - 1 || pe) && "border-0 border-r-[1px] border-solid border-f1-border-secondary", L.get(pu(e))),
										children: n === 0 && !t.selectable && je.label ? /* @__PURE__ */ X("div", {
											className: "font-medium text-f1-foreground-secondary",
											children: je.label
										}) : /* @__PURE__ */ X("div", {
											className: H(e.align === "right" ? "justify-end" : "", "flex", "min-h-6 items-center"),
											children: (() => {
												let n = Pe(e.summaryPlaceholder);
												if (e.summary && t.summaries && t.summaries[e.summary]?.type === "sum") {
													let t = je.data[e.summary];
													return Ne(t) ? /* @__PURE__ */ X("span", {
														className: "text-f1-foreground-secondary",
														children: n
													}) : /* @__PURE__ */ Z("div", {
														className: "flex gap-1",
														children: [/* @__PURE__ */ X("span", {
															className: "text-f1-foreground-secondary",
															children: E.collections.summaries.types.sum
														}), `${t}`]
													});
												}
												return /* @__PURE__ */ X("span", {
													className: "text-f1-foreground-secondary",
													children: n
												});
											})()
										})
									}, `summary-${String(e.label)}`)),
									pe && (me ? /* @__PURE__ */ X(ts, {
										sticky: { right: 0 },
										children: ""
									}, "summary-actions") : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ X(ts, {
										width: 68,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: ""
									}, "summary-actions")] }))
								]
							}), e.length > 0 && /* @__PURE__ */ X(os, { children: /* @__PURE__ */ X(ts, {
								colSpan: N.length + +!!t.selectable + (pe ? he : 0),
								className: "h-[48px] align-middle",
								children: /* @__PURE__ */ X("div", {
									className: "pointer-events-auto flex h-full items-center",
									onClick: (e) => e.stopPropagation(),
									onMouseDownCapture: (e) => e.stopPropagation(),
									children: e.length === 1 ? /* @__PURE__ */ X(P, {
										variant: "outline",
										icon: e[0].icon ?? ut,
										label: e[0].label,
										onClick: e[0].onClick,
										loading: e[0].loading,
										disabled: e[0].disabled,
										size: "sm"
									}) : e.some((e) => e.description !== void 0) ? /* @__PURE__ */ X(ee, {
										mode: "dropdown",
										variant: "outline",
										size: "sm",
										trigger: D?.addRowActionsLabel,
										disabled: e.every((e) => e.disabled),
										loading: e.some((e) => e.loading),
										items: e.map((e, t) => ({
											value: t.toString(),
											label: e.label,
											icon: e.icon,
											description: e.description
										})),
										onClick: (t) => {
											e[Number(t)]?.onClick?.();
										}
									}) : /* @__PURE__ */ X(ee, {
										variant: "outline",
										size: "sm",
										disabled: e.every((e) => e.disabled),
										loading: e.some((e) => e.loading),
										items: e.map((e, t) => ({
											value: t.toString(),
											label: e.label,
											icon: e.icon
										})),
										onClick: (t) => {
											e[Number(t)]?.onClick?.();
										}
									})
								})
							}) })] });
						})()
					]
				})
			}), /* @__PURE__ */ X(Xl, {
				paginationInfo: re,
				setPage: ie,
				className: "pb-4"
			})]
		})
	});
}, hd = ({ onCellChange: e, addRowActions: t, addRowActionsLabel: n, addNestedRowActions: r, addNestedRowActionsLabel: i, ...a }) => {
	let { settings: o } = Bc(), s = q(e);
	s.current = e;
	let c = K(() => function({ item: e, children: t }) {
		return /* @__PURE__ */ X(zs, {
			item: e,
			onCellChange: (...e) => s.current?.(...e),
			children: t
		});
	}, []);
	return /* @__PURE__ */ X(ru, {
		addRowActions: t,
		addRowActionsLabel: n,
		addNestedRowActions: r,
		addNestedRowActionsLabel: i,
		children: /* @__PURE__ */ X(md, {
			...a,
			rowWrapper: c,
			cellRenderer: Hs,
			visualizationSettings: o.visualization?.editableTable,
			fromVisualization: "editableTable"
		})
	});
};
//#endregion
//#region ../../node_modules/.pnpm/classcat@5.0.5/node_modules/classcat/index.js
function gd(e) {
	if (typeof e == "string" || typeof e == "number") return "" + e;
	let t = "";
	if (Array.isArray(e)) for (let n = 0, r; n < e.length; n++) (r = gd(e[n])) !== "" && (t += (t && " ") + r);
	else for (let n in e) e[n] && (t += (t && " ") + n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js
var _d = { value: () => {} };
function vd() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new yd(n);
}
function yd(e) {
	this._ = e;
}
function bd(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
yd.prototype = vd.prototype = {
	constructor: yd,
	on: function(e, t) {
		var n = this._, r = bd(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = xd(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = Sd(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = Sd(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new yd(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function xd(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function Sd(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = _d, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var Cd = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js
function wd(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Cd.hasOwnProperty(t) ? {
		space: Cd[t],
		local: e
	} : e;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/creator.js
function Td(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function Ed(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function Dd(e) {
	var t = wd(e);
	return (t.local ? Ed : Td)(t);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js
function Od() {}
function kd(e) {
	return e == null ? Od : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/select.js
function Ad(e) {
	typeof e != "function" && (e = kd(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new yp(r, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/array.js
function jd(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js
function Md() {
	return [];
}
function Nd(e) {
	return e == null ? Md : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectAll.js
function Pd(e) {
	return function() {
		return jd(e.apply(this, arguments));
	};
}
function Fd(e) {
	e = typeof e == "function" ? Pd(e) : Nd(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new yp(r, i);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js
function Id(e) {
	return function() {
		return this.matches(e);
	};
}
function Ld(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChild.js
var Rd = Array.prototype.find;
function zd(e) {
	return function() {
		return Rd.call(this.children, e);
	};
}
function Bd() {
	return this.firstElementChild;
}
function Vd(e) {
	return this.select(e == null ? Bd : zd(typeof e == "function" ? e : Ld(e)));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChildren.js
var Hd = Array.prototype.filter;
function Ud() {
	return Array.from(this.children);
}
function Wd(e) {
	return function() {
		return Hd.call(this.children, e);
	};
}
function Gd(e) {
	return this.selectAll(e == null ? Ud : Wd(typeof e == "function" ? e : Ld(e)));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/filter.js
function Kd(e) {
	typeof e != "function" && (e = Id(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new yp(r, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sparse.js
function qd(e) {
	return Array(e.length);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/enter.js
function Jd() {
	return new yp(this._enter || this._groups.map(qd), this._parents);
}
function Yd(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Yd.prototype = {
	constructor: Yd,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/constant.js
function Xd(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/data.js
function Zd(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Yd(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function Qd(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new Yd(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function $d(e) {
	return e.__data__;
}
function ef(e, t) {
	if (!arguments.length) return Array.from(this, $d);
	var n = t ? Qd : Zd, r = this._parents, i = this._groups;
	typeof e != "function" && (e = Xd(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = tf(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new yp(o, r), o._enter = s, o._exit = c, o;
}
function tf(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/exit.js
function nf() {
	return new yp(this._exit || this._groups.map(qd), this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/join.js
function rf(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/merge.js
function af(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new yp(s, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/order.js
function of() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sort.js
function sf(e) {
	e ||= cf;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new yp(i, this._parents).order();
}
function cf(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/call.js
function lf() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/nodes.js
function uf() {
	return Array.from(this);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/node.js
function df() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/size.js
function ff() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/empty.js
function pf() {
	return !this.node();
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/each.js
function mf(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/attr.js
function hf(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function gf(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function _f(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function vf(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function yf(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function bf(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function xf(e, t) {
	var n = wd(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? gf : hf : typeof t == "function" ? n.local ? bf : yf : n.local ? vf : _f)(n, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/window.js
function Sf(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js
function Cf(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function wf(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function Tf(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function Ef(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? Cf : typeof t == "function" ? Tf : wf)(e, t, n ?? "")) : Df(this.node(), e);
}
function Df(e, t) {
	return e.style.getPropertyValue(t) || Sf(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/property.js
function Of(e) {
	return function() {
		delete this[e];
	};
}
function kf(e, t) {
	return function() {
		this[e] = t;
	};
}
function Af(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function jf(e, t) {
	return arguments.length > 1 ? this.each((t == null ? Of : typeof t == "function" ? Af : kf)(e, t)) : this.node()[e];
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/classed.js
function Mf(e) {
	return e.trim().split(/^|\s+/);
}
function Nf(e) {
	return e.classList || new Pf(e);
}
function Pf(e) {
	this._node = e, this._names = Mf(e.getAttribute("class") || "");
}
Pf.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function Ff(e, t) {
	for (var n = Nf(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function If(e, t) {
	for (var n = Nf(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function Lf(e) {
	return function() {
		Ff(this, e);
	};
}
function Rf(e) {
	return function() {
		If(this, e);
	};
}
function zf(e, t) {
	return function() {
		(t.apply(this, arguments) ? Ff : If)(this, e);
	};
}
function Bf(e, t) {
	var n = Mf(e + "");
	if (arguments.length < 2) {
		for (var r = Nf(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? zf : t ? Lf : Rf)(n, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/text.js
function Vf() {
	this.textContent = "";
}
function Hf(e) {
	return function() {
		this.textContent = e;
	};
}
function Uf(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function Wf(e) {
	return arguments.length ? this.each(e == null ? Vf : (typeof e == "function" ? Uf : Hf)(e)) : this.node().textContent;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/html.js
function Gf() {
	this.innerHTML = "";
}
function Kf(e) {
	return function() {
		this.innerHTML = e;
	};
}
function qf(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function Jf(e) {
	return arguments.length ? this.each(e == null ? Gf : (typeof e == "function" ? qf : Kf)(e)) : this.node().innerHTML;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/raise.js
function Yf() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function Xf() {
	return this.each(Yf);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/lower.js
function Zf() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Qf() {
	return this.each(Zf);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/append.js
function $f(e) {
	var t = typeof e == "function" ? e : Dd(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/insert.js
function ep() {
	return null;
}
function tp(e, t) {
	var n = typeof e == "function" ? e : Dd(e), r = t == null ? ep : typeof t == "function" ? t : kd(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/remove.js
function np() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function rp() {
	return this.each(np);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/clone.js
function ip() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ap() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function op(e) {
	return this.select(e ? ap : ip);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/datum.js
function sp(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/on.js
function cp(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function lp(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function up(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function dp(e, t, n) {
	return function() {
		var r = this.__on, i, a = cp(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function fp(e, t, n) {
	var r = lp(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? dp : up, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/dispatch.js
function pp(e, t, n) {
	var r = Sf(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function mp(e, t) {
	return function() {
		return pp(this, e, t);
	};
}
function hp(e, t) {
	return function() {
		return pp(this, e, t.apply(this, arguments));
	};
}
function gp(e, t) {
	return this.each((typeof t == "function" ? hp : mp)(e, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/iterator.js
function* _p() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js
var vp = [null];
function yp(e, t) {
	this._groups = e, this._parents = t;
}
function bp() {
	return new yp([[document.documentElement]], vp);
}
function xp() {
	return this;
}
yp.prototype = bp.prototype = {
	constructor: yp,
	select: Ad,
	selectAll: Fd,
	selectChild: Vd,
	selectChildren: Gd,
	filter: Kd,
	data: ef,
	enter: Jd,
	exit: nf,
	join: rf,
	merge: af,
	selection: xp,
	order: of,
	sort: sf,
	call: lf,
	nodes: uf,
	node: df,
	size: ff,
	empty: pf,
	each: mf,
	attr: xf,
	style: Ef,
	property: jf,
	classed: Bf,
	text: Wf,
	html: Jf,
	raise: Xf,
	lower: Qf,
	append: $f,
	insert: tp,
	remove: rp,
	clone: op,
	datum: sp,
	on: fp,
	dispatch: gp,
	[Symbol.iterator]: _p
};
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js
function Sp(e) {
	return typeof e == "string" ? new yp([[document.querySelector(e)]], [document.documentElement]) : new yp([[e]], vp);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/sourceEvent.js
function Cp(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/pointer.js
function wp(e, t) {
	if (e = Cp(e), t === void 0 && (t = e.currentTarget), t) {
		var n = t.ownerSVGElement || t;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
		}
		if (t.getBoundingClientRect) {
			var i = t.getBoundingClientRect();
			return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/noevent.js
var Tp = { passive: !1 }, Ep = {
	capture: !0,
	passive: !1
};
function Dp(e) {
	e.stopImmediatePropagation();
}
function Op(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js
function kp(e) {
	var t = e.document.documentElement, n = Sp(e).on("dragstart.drag", Op, Ep);
	"onselectstart" in t ? n.on("selectstart.drag", Op, Ep) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ap(e, t) {
	var n = e.document.documentElement, r = Sp(e).on("dragstart.drag", null);
	t && (r.on("click.drag", Op, Ep), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/constant.js
var jp = (e) => () => e;
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/event.js
function Mp(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		subject: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		identifier: {
			value: i,
			enumerable: !0,
			configurable: !0
		},
		active: {
			value: a,
			enumerable: !0,
			configurable: !0
		},
		x: {
			value: o,
			enumerable: !0,
			configurable: !0
		},
		y: {
			value: s,
			enumerable: !0,
			configurable: !0
		},
		dx: {
			value: c,
			enumerable: !0,
			configurable: !0
		},
		dy: {
			value: l,
			enumerable: !0,
			configurable: !0
		},
		_: { value: u }
	});
}
Mp.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/drag.js
function Np(e) {
	return !e.ctrlKey && !e.button;
}
function Pp() {
	return this.parentNode;
}
function Fp(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function Ip() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Lp() {
	var e = Np, t = Pp, n = Fp, r = Ip, i = {}, a = vd("start", "drag", "end"), o = 0, s, c, l, u, d = 0;
	function f(e) {
		e.on("mousedown.drag", p).filter(r).on("touchstart.drag", g).on("touchmove.drag", _, Tp).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function p(n, r) {
		if (!(u || !e.call(this, n, r))) {
			var i = y(this, t.call(this, n, r), n, r, "mouse");
			i && (Sp(n.view).on("mousemove.drag", m, Ep).on("mouseup.drag", h, Ep), kp(n.view), Dp(n), l = !1, s = n.clientX, c = n.clientY, i("start", n));
		}
	}
	function m(e) {
		if (Op(e), !l) {
			var t = e.clientX - s, n = e.clientY - c;
			l = t * t + n * n > d;
		}
		i.mouse("drag", e);
	}
	function h(e) {
		Sp(e.view).on("mousemove.drag mouseup.drag", null), Ap(e.view, l), Op(e), i.mouse("end", e);
	}
	function g(n, r) {
		if (e.call(this, n, r)) {
			var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s, c;
			for (s = 0; s < o; ++s) (c = y(this, a, n, r, i[s].identifier, i[s])) && (Dp(n), c("start", n, i[s]));
		}
	}
	function _(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (r = 0; r < n; ++r) (a = i[t[r].identifier]) && (Op(e), a("drag", e, t[r]));
	}
	function v(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (u && clearTimeout(u), u = setTimeout(function() {
			u = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (Dp(e), a("end", e, t[r]));
	}
	function y(e, t, r, s, c, l) {
		var u = a.copy(), d = wp(l || r, t), p, m, h;
		if ((h = n.call(e, new Mp("beforestart", {
			sourceEvent: r,
			target: f,
			identifier: c,
			active: o,
			x: d[0],
			y: d[1],
			dx: 0,
			dy: 0,
			dispatch: u
		}), s)) != null) return p = h.x - d[0] || 0, m = h.y - d[1] || 0, function n(r, a, l) {
			var g = d, _;
			switch (r) {
				case "start":
					i[c] = n, _ = o++;
					break;
				case "end": delete i[c], --o;
				case "drag": d = wp(l || a, t), _ = o;
			}
			u.call(r, e, new Mp(r, {
				sourceEvent: a,
				subject: h,
				target: f,
				identifier: c,
				active: _,
				x: d[0] + p,
				y: d[1] + m,
				dx: d[0] - g[0],
				dy: d[1] - g[1],
				dispatch: u
			}), s);
		};
	}
	return f.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : jp(!!t), f) : e;
	}, f.container = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : jp(e), f) : t;
	}, f.subject = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : jp(e), f) : n;
	}, f.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : jp(!!e), f) : r;
	}, f.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? f : e;
	}, f.clickDistance = function(e) {
		return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d);
	}, f;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js
var Rp = 0, zp = 0, Bp = 0, Vp = 1e3, Hp, Up, Wp = 0, Gp = 0, Kp = 0, qp = typeof performance == "object" && performance.now ? performance : Date, Jp = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function Yp() {
	return Gp ||= (Jp(Xp), qp.now() + Kp);
}
function Xp() {
	Gp = 0;
}
function Zp() {
	this._call = this._time = this._next = null;
}
Zp.prototype = Qp.prototype = {
	constructor: Zp,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? Yp() : +n) + (t == null ? 0 : +t), !this._next && Up !== this && (Up ? Up._next = this : Hp = this, Up = this), this._call = e, this._time = n, rm();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, rm());
	}
};
function Qp(e, t, n) {
	var r = new Zp();
	return r.restart(e, t, n), r;
}
function $p() {
	Yp(), ++Rp;
	for (var e = Hp, t; e;) (t = Gp - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--Rp;
}
function em() {
	Gp = (Wp = qp.now()) + Kp, Rp = zp = 0;
	try {
		$p();
	} finally {
		Rp = 0, nm(), Gp = 0;
	}
}
function tm() {
	var e = qp.now(), t = e - Wp;
	t > Vp && (Kp -= t, Wp = e);
}
function nm() {
	for (var e, t = Hp, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Hp = n);
	Up = e, rm(r);
}
function rm(e) {
	Rp || (zp &&= clearTimeout(zp), e - Gp > 24 ? (e < Infinity && (zp = setTimeout(em, e - qp.now() - Kp)), Bp &&= clearInterval(Bp)) : (Bp ||= (Wp = qp.now(), setInterval(tm, Vp)), Rp = 1, Jp(em)));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timeout.js
function im(e, t, n) {
	var r = new Zp();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js
var am = vd("start", "end", "cancel", "interrupt"), om = [];
function sm(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	dm(e, n, {
		name: t,
		index: r,
		group: i,
		on: am,
		tween: om,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function cm(e, t) {
	var n = um(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function lm(e, t) {
	var n = um(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function um(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function dm(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = Qp(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return im(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (im(function() {
			n.state === 3 && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(a));
		}), n.state = 2, n.on.call("start", e, e.__data__, n.index, n.group), n.state === 2) {
			for (n.state = 3, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l) (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
			i.length = u + 1;
		}
	}
	function s(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = 5, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === 5 && (n.on.call("end", e, e.__data__, n.index, n.group), c());
	}
	function c() {
		for (var i in n.state = 6, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/interrupt.js
function fm(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) {
			if ((r = n[o]).name !== t) {
				a = !1;
				continue;
			}
			i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
		}
		a && delete e.__transition;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/interrupt.js
function pm(e) {
	return this.each(function() {
		fm(this, e);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js
function mm(e, t) {
	var n, r;
	return function() {
		var i = lm(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function hm(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = lm(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function gm(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = um(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? mm : hm)(n, e, t));
}
function _m(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = lm(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return um(e, r).value[t];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/interpolate.js
function vm(e, t) {
	var n;
	return (typeof t == "number" ? Ce : t instanceof De ? ge : (n = De(t)) ? (t = n, ge) : ke)(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attr.js
function ym(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function bm(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function xm(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Sm(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Cm(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function wm(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Tm(e, t) {
	var n = wd(e), r = n === "transform" ? Hr : vm;
	return this.attrTween(e, typeof t == "function" ? (n.local ? wm : Cm)(n, r, _m(this, "attr." + e, t)) : t == null ? (n.local ? bm : ym)(n) : (n.local ? Sm : xm)(n, r, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attrTween.js
function Em(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Dm(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function Om(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Dm(e, i)), n;
	}
	return i._value = t, i;
}
function km(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Em(e, i)), n;
	}
	return i._value = t, i;
}
function Am(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = wd(e);
	return this.tween(n, (r.local ? Om : km)(r, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/delay.js
function jm(e, t) {
	return function() {
		cm(this, e).delay = +t.apply(this, arguments);
	};
}
function Mm(e, t) {
	return t = +t, function() {
		cm(this, e).delay = t;
	};
}
function Nm(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? jm : Mm)(t, e)) : um(this.node(), t).delay;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/duration.js
function Pm(e, t) {
	return function() {
		lm(this, e).duration = +t.apply(this, arguments);
	};
}
function Fm(e, t) {
	return t = +t, function() {
		lm(this, e).duration = t;
	};
}
function Im(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Pm : Fm)(t, e)) : um(this.node(), t).duration;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/ease.js
function Lm(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		lm(this, e).ease = t;
	};
}
function Rm(e) {
	var t = this._id;
	return arguments.length ? this.each(Lm(t, e)) : um(this.node(), t).ease;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/easeVarying.js
function zm(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		lm(this, e).ease = n;
	};
}
function Bm(e) {
	if (typeof e != "function") throw Error();
	return this.each(zm(this._id, e));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/filter.js
function Vm(e) {
	typeof e != "function" && (e = Id(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new gh(r, this._parents, this._name, this._id);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/merge.js
function Hm(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new gh(o, this._parents, this._name, this._id);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/on.js
function Um(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Wm(e, t, n) {
	var r, i, a = Um(t) ? cm : lm;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function Gm(e, t) {
	var n = this._id;
	return arguments.length < 2 ? um(this.node(), n).on.on(e) : this.each(Wm(n, e, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/remove.js
function Km(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function qm() {
	return this.on("end.remove", Km(this._id));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/select.js
function Jm(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = kd(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, sm(l[f], t, n, f, l, um(u, n)));
	return new gh(a, this._parents, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selectAll.js
function Ym(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = Nd(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = um(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && sm(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new gh(a, o, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selection.js
var Xm = bp.prototype.constructor;
function Zm() {
	return new Xm(this._groups, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/style.js
function Qm(e, t) {
	var n, r, i;
	return function() {
		var a = Df(this, e), o = (this.style.removeProperty(e), Df(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function $m(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function eh(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = Df(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function th(e, t, n) {
	var r, i, a;
	return function() {
		var o = Df(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), Df(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function nh(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = lm(this, e), l = c.on, u = c.value[a] == null ? s ||= $m(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function rh(e, t, n) {
	var r = (e += "") == "transform" ? Vr : vm;
	return t == null ? this.styleTween(e, Qm(e, r)).on("end.style." + e, $m(e)) : typeof t == "function" ? this.styleTween(e, th(e, r, _m(this, "style." + e, t))).each(nh(this._id, e)) : this.styleTween(e, eh(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/styleTween.js
function ih(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function ah(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && ih(e, a, n)), r;
	}
	return a._value = t, a;
}
function oh(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, ah(e, t, n ?? ""));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/text.js
function sh(e) {
	return function() {
		this.textContent = e;
	};
}
function ch(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function lh(e) {
	return this.tween("text", typeof e == "function" ? ch(_m(this, "text", e)) : sh(e == null ? "" : e + ""));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/textTween.js
function uh(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function dh(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && uh(r)), t;
	}
	return r._value = e, r;
}
function fh(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, dh(e));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/transition.js
function ph() {
	for (var e = this._name, t = this._id, n = _h(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = um(c, t);
		sm(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new gh(r, this._parents, e, n);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/end.js
function mh() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = lm(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js
var hh = 0;
function gh(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function _h() {
	return ++hh;
}
var vh = bp.prototype;
gh.prototype = {
	constructor: gh,
	select: Jm,
	selectAll: Ym,
	selectChild: vh.selectChild,
	selectChildren: vh.selectChildren,
	filter: Vm,
	merge: Hm,
	selection: Zm,
	transition: ph,
	call: vh.call,
	nodes: vh.nodes,
	node: vh.node,
	size: vh.size,
	empty: vh.empty,
	each: vh.each,
	on: Gm,
	attr: Tm,
	attrTween: Am,
	style: rh,
	styleTween: oh,
	text: lh,
	textTween: fh,
	remove: qm,
	tween: gm,
	delay: Nm,
	duration: Im,
	ease: Rm,
	easeVarying: Bm,
	end: mh,
	[Symbol.iterator]: vh[Symbol.iterator]
};
//#endregion
//#region ../../node_modules/.pnpm/d3-ease@3.0.1/node_modules/d3-ease/src/cubic.js
function yh(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/transition.js
var bh = {
	time: null,
	delay: 0,
	duration: 250,
	ease: yh
};
function xh(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function Sh(e) {
	var t, n;
	e instanceof gh ? (t = e._id, e = e._name) : (t = _h(), (n = bh).time = Yp(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && sm(c, e, t, l, o, n || xh(c, t));
	return new gh(r, this._parents, e, t);
}
bp.prototype.interrupt = pm, bp.prototype.transition = Sh;
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/constant.js
var Ch = (e) => () => e;
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/event.js
function wh(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		transform: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		_: { value: i }
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/transform.js
function Th(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
Th.prototype = {
	constructor: Th,
	scale: function(e) {
		return e === 1 ? this : new Th(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new Th(this.k, this.x + this.k * e, this.y + this.k * t);
	},
	apply: function(e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function(e) {
		return e * this.k + this.x;
	},
	applyY: function(e) {
		return e * this.k + this.y;
	},
	invert: function(e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function(e) {
		return (e - this.x) / this.k;
	},
	invertY: function(e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function(e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function(e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var Eh = new Th(1, 0, 0);
Dh.prototype = Th.prototype;
function Dh(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return Eh;
	return e.__zoom;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/noevent.js
function Oh(e) {
	e.stopImmediatePropagation();
}
function kh(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/zoom.js
function Ah(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function jh() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Mh() {
	return this.__zoom || Eh;
}
function Nh(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function Ph() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fh(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function Ih() {
	var e = Ah, t = jh, n = Fh, r = Nh, i = Ph, a = [0, Infinity], o = [[-Infinity, -Infinity], [Infinity, Infinity]], s = 250, c = qr, l = vd("start", "zoom", "end"), u, d, f, p = 500, m = 150, h = 0, g = 10;
	function _(e) {
		e.property("__zoom", Mh).on("wheel.zoom", w, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", E).filter(i).on("touchstart.zoom", D).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	_.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", Mh), e === i ? i.interrupt().each(function() {
			S(this, arguments).event(r).start().zoom(null, typeof t == "function" ? t.apply(this, arguments) : t).end();
		}) : x(e, t, n, r);
	}, _.scaleBy = function(e, t, n, r) {
		_.scaleTo(e, function() {
			return this.__zoom.k * (typeof t == "function" ? t.apply(this, arguments) : t);
		}, n, r);
	}, _.scaleTo = function(e, r, i, a) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), a = this.__zoom, s = i == null ? b(e) : typeof i == "function" ? i.apply(this, arguments) : i, c = a.invert(s), l = typeof r == "function" ? r.apply(this, arguments) : r;
			return n(y(v(a, l), s, c), e, o);
		}, i, a);
	}, _.translateBy = function(e, r, i, a) {
		_.transform(e, function() {
			return n(this.__zoom.translate(typeof r == "function" ? r.apply(this, arguments) : r, typeof i == "function" ? i.apply(this, arguments) : i), t.apply(this, arguments), o);
		}, null, a);
	}, _.translateTo = function(e, r, i, a, s) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), s = this.__zoom, c = a == null ? b(e) : typeof a == "function" ? a.apply(this, arguments) : a;
			return n(Eh.translate(c[0], c[1]).scale(s.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, o);
		}, a, s);
	};
	function v(e, t) {
		return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new Th(t, e.x, e.y);
	}
	function y(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new Th(e.k, r, i);
	}
	function b(e) {
		return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
	}
	function x(e, n, r, i) {
		e.on("start.zoom", function() {
			S(this, arguments).event(i).start();
		}).on("interrupt.zoom end.zoom", function() {
			S(this, arguments).event(i).end();
		}).tween("zoom", function() {
			var e = this, a = arguments, o = S(e, a).event(i), s = t.apply(e, a), l = r == null ? b(s) : typeof r == "function" ? r.apply(e, a) : r, u = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]), d = e.__zoom, f = typeof n == "function" ? n.apply(e, a) : n, p = c(d.invert(l).concat(u / d.k), f.invert(l).concat(u / f.k));
			return function(e) {
				if (e === 1) e = f;
				else {
					var t = p(e), n = u / t[2];
					e = new Th(n, l[0] - t[0] * n, l[1] - t[1] * n);
				}
				o.zoom(null, e);
			};
		});
	}
	function S(e, t, n) {
		return !n && e.__zooming || new C(e, t);
	}
	function C(e, n) {
		this.that = e, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = t.apply(e, n), this.taps = 0;
	}
	C.prototype = {
		event: function(e) {
			return e && (this.sourceEvent = e), this;
		},
		start: function() {
			return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
		},
		zoom: function(e, t) {
			return this.mouse && e !== "mouse" && (this.mouse[1] = t.invert(this.mouse[0])), this.touch0 && e !== "touch" && (this.touch0[1] = t.invert(this.touch0[0])), this.touch1 && e !== "touch" && (this.touch1[1] = t.invert(this.touch1[0])), this.that.__zoom = t, this.emit("zoom"), this;
		},
		end: function() {
			return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
		},
		emit: function(e) {
			var t = Sp(this.that).datum();
			l.call(e, this.that, new wh(e, {
				sourceEvent: this.sourceEvent,
				target: _,
				type: e,
				transform: this.that.__zoom,
				dispatch: l
			}), t);
		}
	};
	function w(t, ...i) {
		if (!e.apply(this, arguments)) return;
		var s = S(this, i).event(t), c = this.__zoom, l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))), u = wp(t);
		if (s.wheel) (s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
		else if (c.k === l) return;
		else s.mouse = [u, c.invert(u)], fm(this), s.start();
		kh(t), s.wheel = setTimeout(d, m), s.zoom("mouse", n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));
		function d() {
			s.wheel = null, s.end();
		}
	}
	function T(t, ...r) {
		if (f || !e.apply(this, arguments)) return;
		var i = t.currentTarget, a = S(this, r, !0).event(t), s = Sp(t.view).on("mousemove.zoom", d, !0).on("mouseup.zoom", p, !0), c = wp(t, i), l = t.clientX, u = t.clientY;
		kp(t.view), Oh(t), a.mouse = [c, this.__zoom.invert(c)], fm(this), a.start();
		function d(e) {
			if (kh(e), !a.moved) {
				var t = e.clientX - l, r = e.clientY - u;
				a.moved = t * t + r * r > h;
			}
			a.event(e).zoom("mouse", n(y(a.that.__zoom, a.mouse[0] = wp(e, i), a.mouse[1]), a.extent, o));
		}
		function p(e) {
			s.on("mousemove.zoom mouseup.zoom", null), Ap(e.view, a.moved), kh(e), a.event(e).end();
		}
	}
	function E(r, ...i) {
		if (e.apply(this, arguments)) {
			var a = this.__zoom, c = wp(r.changedTouches ? r.changedTouches[0] : r, this), l = a.invert(c), u = a.k * (r.shiftKey ? .5 : 2), d = n(y(v(a, u), c, l), t.apply(this, i), o);
			kh(r), s > 0 ? Sp(this).transition().duration(s).call(x, d, c, r) : Sp(this).call(_.transform, d, c, r);
		}
	}
	function D(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = S(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for (Oh(t), s = 0; s < i; ++s) c = r[s], l = wp(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
			u &&= clearTimeout(u), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
				u = null;
			}, p)), fm(this), a.start());
		}
	}
	function O(e, ...t) {
		if (this.__zooming) {
			var r = S(this, t).event(e), i = e.changedTouches, a = i.length, s, c, l, u;
			for (kh(e), s = 0; s < a; ++s) c = i[s], l = wp(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
			if (c = r.that.__zoom, r.touch1) {
				var d = r.touch0[0], f = r.touch0[1], p = r.touch1[0], m = r.touch1[1], h = (h = p[0] - d[0]) * h + (h = p[1] - d[1]) * h, g = (g = m[0] - f[0]) * g + (g = m[1] - f[1]) * g;
				c = v(c, Math.sqrt(h / g)), l = [(d[0] + p[0]) / 2, (d[1] + p[1]) / 2], u = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2];
			} else if (r.touch0) l = r.touch0[0], u = r.touch0[1];
			else return;
			r.zoom("touch", n(y(c, l, u), r.extent, o));
		}
	}
	function k(e, ...t) {
		if (this.__zooming) {
			var n = S(this, t).event(e), r = e.changedTouches, i = r.length, a, o;
			for (Oh(e), f && clearTimeout(f), f = setTimeout(function() {
				f = null;
			}, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (o = wp(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
				var s = Sp(this).on("dblclick.zoom");
				s && s.apply(this, arguments);
			}
		}
	}
	return _.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Ch(+e), _) : r;
	}, _.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Ch(!!t), _) : e;
	}, _.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : Ch(!!e), _) : i;
	}, _.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Ch([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), _) : t;
	}, _.scaleExtent = function(e) {
		return arguments.length ? (a[0] = +e[0], a[1] = +e[1], _) : [a[0], a[1]];
	}, _.translateExtent = function(e) {
		return arguments.length ? (o[0][0] = +e[0][0], o[1][0] = +e[1][0], o[0][1] = +e[0][1], o[1][1] = +e[1][1], _) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
	}, _.constrain = function(e) {
		return arguments.length ? (n = e, _) : n;
	}, _.duration = function(e) {
		return arguments.length ? (s = +e, _) : s;
	}, _.interpolate = function(e) {
		return arguments.length ? (c = e, _) : c;
	}, _.on = function() {
		var e = l.on.apply(l, arguments);
		return e === l ? _ : e;
	}, _.clickDistance = function(e) {
		return arguments.length ? (h = (e = +e) * e, _) : Math.sqrt(h);
	}, _.tapDistance = function(e) {
		return arguments.length ? (g = +e, _) : g;
	}, _;
}
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+system@0.0.76/node_modules/@xyflow/system/dist/esm/index.js
var Lh = {
	error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
	error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
	error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
	error004: () => "The React Flow parent container needs a width and a height to render the graph.",
	error005: () => "Only child nodes can use a parent extent.",
	error006: () => "Can't create edge. An edge needs a source and a target.",
	error007: (e) => `The old edge with id=${e} does not exist.`,
	error009: (e) => `Marker type "${e}" doesn't exist.`,
	error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
	error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
	error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
	error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
	error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
	error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
	error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, Rh = [[-Infinity, -Infinity], [Infinity, Infinity]], zh = [
	"Enter",
	" ",
	"Escape"
], Bh = {
	"node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
	"node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
	"node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
	"edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
	"controls.ariaLabel": "Control Panel",
	"controls.zoomIn.ariaLabel": "Zoom In",
	"controls.zoomOut.ariaLabel": "Zoom Out",
	"controls.fitView.ariaLabel": "Fit View",
	"controls.interactive.ariaLabel": "Toggle Interactivity",
	"minimap.ariaLabel": "Mini Map",
	"handle.ariaLabel": "Handle"
}, Vh;
(function(e) {
	e.Strict = "strict", e.Loose = "loose";
})(Vh ||= {});
var Hh;
(function(e) {
	e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Hh ||= {});
var Uh;
(function(e) {
	e.Partial = "partial", e.Full = "full";
})(Uh ||= {});
var Wh = {
	inProgress: !1,
	isValid: null,
	from: null,
	fromHandle: null,
	fromPosition: null,
	fromNode: null,
	to: null,
	toHandle: null,
	toPosition: null,
	toNode: null,
	pointer: null
}, Gh;
(function(e) {
	e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Gh ||= {});
var Kh;
(function(e) {
	e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Kh ||= {});
var Q;
(function(e) {
	e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Q ||= {});
var qh = {
	[Q.Left]: Q.Right,
	[Q.Right]: Q.Left,
	[Q.Top]: Q.Bottom,
	[Q.Bottom]: Q.Top
};
function Jh(e) {
	return e === null ? null : e ? "valid" : "invalid";
}
var Yh = (e) => "id" in e && "source" in e && "target" in e, Xh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Zh = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Qh = (e, t = [0, 0]) => {
	let { width: n, height: r } = jg(e), i = e.origin ?? t, a = n * i[0], o = r * i[1];
	return {
		x: e.position.x - a,
		y: e.position.y - o
	};
}, $h = (e, t = { nodeOrigin: [0, 0] }) => (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0 ? {
	x: 0,
	y: 0,
	width: 0,
	height: 0
} : mg(e.reduce((e, n) => {
	let r = typeof n == "string", i = !t.nodeLookup && !r ? n : void 0;
	return t.nodeLookup && (i = r ? t.nodeLookup.get(n) : Zh(n) ? n : t.nodeLookup.get(n.id)), fg(e, i ? gg(i, t.nodeOrigin) : {
		x: 0,
		y: 0,
		x2: 0,
		y2: 0
	});
}, {
	x: Infinity,
	y: Infinity,
	x2: -Infinity,
	y2: -Infinity
}))), eg = (e, t = {}) => {
	let n = {
		x: Infinity,
		y: Infinity,
		x2: -Infinity,
		y2: -Infinity
	}, r = !1;
	return e.forEach((e) => {
		(t.filter === void 0 || t.filter(e)) && (n = fg(n, gg(e)), r = !0);
	}), r ? mg(n) : {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
}, tg = (e, t, [n, r, i] = [
	0,
	0,
	1
], a = !1, o = !1) => {
	let s = {
		...Cg(t, [
			n,
			r,
			i
		]),
		width: t.width / i,
		height: t.height / i
	}, c = [];
	for (let t of e.values()) {
		let { measured: e, selectable: n = !0, hidden: r = !1 } = t;
		if (o && !n || r) continue;
		let i = e.width ?? t.width ?? t.initialWidth ?? null, l = e.height ?? t.height ?? t.initialHeight ?? null, u = vg(s, hg(t)), d = (i ?? 0) * (l ?? 0), f = a && u > 0;
		(!t.internals.handleBounds || f || u >= d || t.dragging) && c.push(t);
	}
	return c;
}, ng = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		n.add(e.id);
	}), t.filter((e) => n.has(e.source) || n.has(e.target));
};
function rg(e, t) {
	let n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((e) => e.id)) : null;
	return e.forEach((e) => {
		e.measured.width && e.measured.height && (t?.includeHiddenNodes || !e.hidden) && (!r || r.has(e.id)) && n.set(e.id, e);
	}), n;
}
async function ig({ nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: a }, o) {
	if (e.size === 0) return Promise.resolve(!0);
	let s = Og(eg(rg(e, o)), t, n, o?.minZoom ?? i, o?.maxZoom ?? a, o?.padding ?? .1);
	return await r.setViewport(s, {
		duration: o?.duration,
		ease: o?.ease,
		interpolate: o?.interpolate
	}), Promise.resolve(!0);
}
function ag({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: i, onError: a }) {
	let o = n.get(e), s = o.parentId ? n.get(o.parentId) : void 0, { x: c, y: l } = s ? s.internals.positionAbsolute : {
		x: 0,
		y: 0
	}, u = o.origin ?? r, d = o.extent || i;
	if (o.extent === "parent" && !o.expandParent) {
		if (!s) a?.("005", Lh.error005());
		else {
			let e = s.measured.width, t = s.measured.height;
			e && t && (d = [[c, l], [c + e, l + t]]);
		}
	} else s && Ag(o.extent) && (d = [[o.extent[0][0] + c, o.extent[0][1] + l], [o.extent[1][0] + c, o.extent[1][1] + l]]);
	let f = Ag(d) ? cg(t, d, o.measured) : t;
	return (o.measured.width === void 0 || o.measured.height === void 0) && a?.("015", Lh.error015()), {
		position: {
			x: f.x - c + (o.measured.width ?? 0) * u[0],
			y: f.y - l + (o.measured.height ?? 0) * u[1]
		},
		positionAbsolute: f
	};
}
async function og({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: i }) {
	let a = new Set(e.map((e) => e.id)), o = [];
	for (let e of n) {
		if (e.deletable === !1) continue;
		let t = a.has(e.id), n = !t && e.parentId && o.find((t) => t.id === e.parentId);
		(t || n) && o.push(e);
	}
	let s = new Set(t.map((e) => e.id)), c = r.filter((e) => e.deletable !== !1), l = ng(o, c);
	for (let e of c) s.has(e.id) && !l.find((t) => t.id === e.id) && l.push(e);
	if (!i) return {
		edges: l,
		nodes: o
	};
	let u = await i({
		nodes: o,
		edges: l
	});
	return typeof u == "boolean" ? u ? {
		edges: l,
		nodes: o
	} : {
		edges: [],
		nodes: []
	} : u;
}
var sg = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), cg = (e = {
	x: 0,
	y: 0
}, t, n) => ({
	x: sg(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
	y: sg(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function lg(e, t, n) {
	let { width: r, height: i } = jg(n), { x: a, y: o } = n.internals.positionAbsolute;
	return cg(e, [[a, o], [a + r, o + i]], t);
}
var ug = (e, t, n) => e < t ? sg(Math.abs(e - t), 1, t) / t : e > n ? -sg(Math.abs(e - n), 1, t) / t : 0, dg = (e, t, n = 15, r = 40) => [ug(e.x, r, t.width - r) * n, ug(e.y, r, t.height - r) * n], fg = (e, t) => ({
	x: Math.min(e.x, t.x),
	y: Math.min(e.y, t.y),
	x2: Math.max(e.x2, t.x2),
	y2: Math.max(e.y2, t.y2)
}), pg = ({ x: e, y: t, width: n, height: r }) => ({
	x: e,
	y: t,
	x2: e + n,
	y2: t + r
}), mg = ({ x: e, y: t, x2: n, y2: r }) => ({
	x: e,
	y: t,
	width: n - e,
	height: r - t
}), hg = (e, t = [0, 0]) => {
	let { x: n, y: r } = Zh(e) ? e.internals.positionAbsolute : Qh(e, t);
	return {
		x: n,
		y: r,
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}, gg = (e, t = [0, 0]) => {
	let { x: n, y: r } = Zh(e) ? e.internals.positionAbsolute : Qh(e, t);
	return {
		x: n,
		y: r,
		x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
		y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
	};
}, _g = (e, t) => mg(fg(pg(e), pg(t))), vg = (e, t) => {
	let n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
	return Math.ceil(n * r);
}, yg = (e) => bg(e.width) && bg(e.height) && bg(e.x) && bg(e.y), bg = (e) => !isNaN(e) && isFinite(e), xg = (e, t) => {
	process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, Sg = (e, t = [1, 1]) => ({
	x: t[0] * Math.round(e.x / t[0]),
	y: t[1] * Math.round(e.y / t[1])
}), Cg = ({ x: e, y: t }, [n, r, i], a = !1, o = [1, 1]) => {
	let s = {
		x: (e - n) / i,
		y: (t - r) / i
	};
	return a ? Sg(s, o) : s;
}, wg = ({ x: e, y: t }, [n, r, i]) => ({
	x: e * i + n,
	y: t * i + r
});
function Tg(e, t) {
	if (typeof e == "number") return Math.floor((t - t / (1 + e)) * .5);
	if (typeof e == "string" && e.endsWith("px")) {
		let t = parseFloat(e);
		if (!Number.isNaN(t)) return Math.floor(t);
	}
	if (typeof e == "string" && e.endsWith("%")) {
		let n = parseFloat(e);
		if (!Number.isNaN(n)) return Math.floor(t * n * .01);
	}
	return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function Eg(e, t, n) {
	if (typeof e == "string" || typeof e == "number") {
		let r = Tg(e, n), i = Tg(e, t);
		return {
			top: r,
			right: i,
			bottom: r,
			left: i,
			x: i * 2,
			y: r * 2
		};
	}
	if (typeof e == "object") {
		let r = Tg(e.top ?? e.y ?? 0, n), i = Tg(e.bottom ?? e.y ?? 0, n), a = Tg(e.left ?? e.x ?? 0, t), o = Tg(e.right ?? e.x ?? 0, t);
		return {
			top: r,
			right: o,
			bottom: i,
			left: a,
			x: a + o,
			y: r + i
		};
	}
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		x: 0,
		y: 0
	};
}
function Dg(e, t, n, r, i, a) {
	let { x: o, y: s } = wg(e, [
		t,
		n,
		r
	]), { x: c, y: l } = wg({
		x: e.x + e.width,
		y: e.y + e.height
	}, [
		t,
		n,
		r
	]), u = i - c, d = a - l;
	return {
		left: Math.floor(o),
		top: Math.floor(s),
		right: Math.floor(u),
		bottom: Math.floor(d)
	};
}
var Og = (e, t, n, r, i, a) => {
	let o = Eg(a, t, n), s = (t - o.x) / e.width, c = (n - o.y) / e.height, l = sg(Math.min(s, c), r, i), u = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - u * l, p = n / 2 - d * l, m = Dg(e, f, p, l, t, n), h = {
		left: Math.min(m.left - o.left, 0),
		top: Math.min(m.top - o.top, 0),
		right: Math.min(m.right - o.right, 0),
		bottom: Math.min(m.bottom - o.bottom, 0)
	};
	return {
		x: f - h.left + h.right,
		y: p - h.top + h.bottom,
		zoom: l
	};
}, kg = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Ag(e) {
	return e != null && e !== "parent";
}
function jg(e) {
	return {
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}
function Mg(e) {
	return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Ng(e, t = {
	width: 0,
	height: 0
}, n, r, i) {
	let a = { ...e }, o = r.get(n);
	if (o) {
		let e = o.origin || i;
		a.x += o.internals.positionAbsolute.x - (t.width ?? 0) * e[0], a.y += o.internals.positionAbsolute.y - (t.height ?? 0) * e[1];
	}
	return a;
}
function Pg(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function Fg() {
	let e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function Ig(e) {
	return {
		...Bh,
		...e || {}
	};
}
function Lg(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: i }) {
	let { x: a, y: o } = Ug(e), s = Cg({
		x: a - (i?.left ?? 0),
		y: o - (i?.top ?? 0)
	}, r), { x: c, y: l } = n ? Sg(s, t) : s;
	return {
		xSnapped: c,
		ySnapped: l,
		...s
	};
}
var Rg = (e) => ({
	width: e.offsetWidth,
	height: e.offsetHeight
}), zg = (e) => e?.getRootNode?.() || window?.document, Bg = [
	"INPUT",
	"SELECT",
	"TEXTAREA"
];
function Vg(e) {
	let t = e.composedPath?.()?.[0] || e.target;
	return t?.nodeType === 1 ? Bg.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey") : !1;
}
var Hg = (e) => "clientX" in e, Ug = (e, t) => {
	let n = Hg(e), r = n ? e.clientX : e.touches?.[0].clientX, i = n ? e.clientY : e.touches?.[0].clientY;
	return {
		x: r - (t?.left ?? 0),
		y: i - (t?.top ?? 0)
	};
}, Wg = (e, t, n, r, i) => {
	let a = t.querySelectorAll(`.${e}`);
	return !a || !a.length ? null : Array.from(a).map((t) => {
		let a = t.getBoundingClientRect();
		return {
			id: t.getAttribute("data-handleid"),
			type: e,
			nodeId: i,
			position: t.getAttribute("data-handlepos"),
			x: (a.left - n.left) / r,
			y: (a.top - n.top) / r,
			...Rg(t)
		};
	});
};
function Gg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: i, sourceControlY: a, targetControlX: o, targetControlY: s }) {
	let c = e * .125 + i * .375 + o * .375 + n * .125, l = t * .125 + a * .375 + s * .375 + r * .125;
	return [
		c,
		l,
		Math.abs(c - e),
		Math.abs(l - t)
	];
}
function Kg(e, t) {
	return e >= 0 ? .5 * e : t * 25 * Math.sqrt(-e);
}
function qg({ pos: e, x1: t, y1: n, x2: r, y2: i, c: a }) {
	switch (e) {
		case Q.Left: return [t - Kg(t - r, a), n];
		case Q.Right: return [t + Kg(r - t, a), n];
		case Q.Top: return [t, n - Kg(n - i, a)];
		case Q.Bottom: return [t, n + Kg(i - n, a)];
	}
}
function Jg({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top, curvature: o = .25 }) {
	let [s, c] = qg({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i,
		c: o
	}), [l, u] = qg({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t,
		c: o
	}), [d, f, p, m] = Gg({
		sourceX: e,
		sourceY: t,
		targetX: r,
		targetY: i,
		sourceControlX: s,
		sourceControlY: c,
		targetControlX: l,
		targetControlY: u
	});
	return [
		`M${e},${t} C${s},${c} ${l},${u} ${r},${i}`,
		d,
		f,
		p,
		m
	];
}
function Yg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, o = Math.abs(r - t) / 2;
	return [
		a,
		r < t ? r + o : r - o,
		i,
		o
	];
}
function Xg({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: i = !1, zIndexMode: a = "basic" }) {
	return a === "manual" ? r : (i && n ? r + 1e3 : r) + Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
}
function Zg({ sourceNode: e, targetNode: t, width: n, height: r, transform: i }) {
	let a = fg(gg(e), gg(t));
	return a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1), vg({
		x: -i[0] / i[2],
		y: -i[1] / i[2],
		width: n / i[2],
		height: r / i[2]
	}, mg(a)) > 0;
}
var Qg = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, $g = (e, t) => t.some((t) => t.source === e.source && t.target === e.target && (t.sourceHandle === e.sourceHandle || !t.sourceHandle && !e.sourceHandle) && (t.targetHandle === e.targetHandle || !t.targetHandle && !e.targetHandle)), e_ = (e, t, n = {}) => {
	if (!e.source || !e.target) return xg("006", Lh.error006()), t;
	let r = n.getEdgeId || Qg, i;
	return i = Yh(e) ? { ...e } : {
		...e,
		id: r(e)
	}, $g(i, t) ? t : (i.sourceHandle === null && delete i.sourceHandle, i.targetHandle === null && delete i.targetHandle, t.concat(i));
};
function t_({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let [i, a, o, s] = Yg({
		sourceX: e,
		sourceY: t,
		targetX: n,
		targetY: r
	});
	return [
		`M ${e},${t}L ${n},${r}`,
		i,
		a,
		o,
		s
	];
}
var n_ = {
	[Q.Left]: {
		x: -1,
		y: 0
	},
	[Q.Right]: {
		x: 1,
		y: 0
	},
	[Q.Top]: {
		x: 0,
		y: -1
	},
	[Q.Bottom]: {
		x: 0,
		y: 1
	}
}, r_ = ({ source: e, sourcePosition: t = Q.Bottom, target: n }) => t === Q.Left || t === Q.Right ? e.x < n.x ? {
	x: 1,
	y: 0
} : {
	x: -1,
	y: 0
} : e.y < n.y ? {
	x: 0,
	y: 1
} : {
	x: 0,
	y: -1
}, i_ = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
function a_({ source: e, sourcePosition: t = Q.Bottom, target: n, targetPosition: r = Q.Top, center: i, offset: a, stepPosition: o }) {
	let s = n_[t], c = n_[r], l = {
		x: e.x + s.x * a,
		y: e.y + s.y * a
	}, u = {
		x: n.x + c.x * a,
		y: n.y + c.y * a
	}, d = r_({
		source: l,
		sourcePosition: t,
		target: u
	}), f = d.x === 0 ? "y" : "x", p = d[f], m = [], h, g, _ = {
		x: 0,
		y: 0
	}, v = {
		x: 0,
		y: 0
	}, [, , y, b] = Yg({
		sourceX: e.x,
		sourceY: e.y,
		targetX: n.x,
		targetY: n.y
	});
	if (s[f] * c[f] === -1) {
		f === "x" ? (h = i.x ?? l.x + (u.x - l.x) * o, g = i.y ?? (l.y + u.y) / 2) : (h = i.x ?? (l.x + u.x) / 2, g = i.y ?? l.y + (u.y - l.y) * o);
		let e = [{
			x: h,
			y: l.y
		}, {
			x: h,
			y: u.y
		}], t = [{
			x: l.x,
			y: g
		}, {
			x: u.x,
			y: g
		}];
		m = s[f] === p ? f === "x" ? e : t : f === "x" ? t : e;
	} else {
		let i = [{
			x: l.x,
			y: u.y
		}], o = [{
			x: u.x,
			y: l.y
		}];
		if (m = f === "x" ? s.x === p ? o : i : s.y === p ? i : o, t === r) {
			let t = Math.abs(e[f] - n[f]);
			if (t <= a) {
				let r = Math.min(a - 1, a - t);
				s[f] === p ? _[f] = (l[f] > e[f] ? -1 : 1) * r : v[f] = (u[f] > n[f] ? -1 : 1) * r;
			}
		}
		if (t !== r) {
			let e = f === "x" ? "y" : "x", t = s[f] === c[e], n = l[e] > u[e], r = l[e] < u[e];
			(s[f] === 1 && (!t && n || t && r) || s[f] !== 1 && (!t && r || t && n)) && (m = f === "x" ? i : o);
		}
		let d = {
			x: l.x + _.x,
			y: l.y + _.y
		}, y = {
			x: u.x + v.x,
			y: u.y + v.y
		};
		Math.max(Math.abs(d.x - m[0].x), Math.abs(y.x - m[0].x)) >= Math.max(Math.abs(d.y - m[0].y), Math.abs(y.y - m[0].y)) ? (h = (d.x + y.x) / 2, g = m[0].y) : (h = m[0].x, g = (d.y + y.y) / 2);
	}
	let x = {
		x: l.x + _.x,
		y: l.y + _.y
	}, S = {
		x: u.x + v.x,
		y: u.y + v.y
	};
	return [
		[
			e,
			...x.x !== m[0].x || x.y !== m[0].y ? [x] : [],
			...m,
			...S.x !== m[m.length - 1].x || S.y !== m[m.length - 1].y ? [S] : [],
			n
		],
		h,
		g,
		y,
		b
	];
}
function o_(e, t, n, r) {
	let i = Math.min(i_(e, t) / 2, i_(t, n) / 2, r), { x: a, y: o } = t;
	if (e.x === a && a === n.x || e.y === o && o === n.y) return `L${a} ${o}`;
	if (e.y === o) {
		let t = e.x < n.x ? -1 : 1, r = e.y < n.y ? 1 : -1;
		return `L ${a + i * t},${o}Q ${a},${o} ${a},${o + i * r}`;
	}
	let s = e.x < n.x ? 1 : -1;
	return `L ${a},${o + i * (e.y < n.y ? -1 : 1)}Q ${a},${o} ${a + i * s},${o}`;
}
function s_({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top, borderRadius: o = 5, centerX: s, centerY: c, offset: l = 20, stepPosition: u = .5 }) {
	let [d, f, p, m, h] = a_({
		source: {
			x: e,
			y: t
		},
		sourcePosition: n,
		target: {
			x: r,
			y: i
		},
		targetPosition: a,
		center: {
			x: s,
			y: c
		},
		offset: l,
		stepPosition: u
	}), g = `M${d[0].x} ${d[0].y}`;
	for (let e = 1; e < d.length - 1; e++) g += o_(d[e - 1], d[e], d[e + 1], o);
	return g += `L${d[d.length - 1].x} ${d[d.length - 1].y}`, [
		g,
		f,
		p,
		m,
		h
	];
}
function c_(e) {
	return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function l_(e) {
	let { sourceNode: t, targetNode: n } = e;
	if (!c_(t) || !c_(n)) return null;
	let r = t.internals.handleBounds || u_(t.handles), i = n.internals.handleBounds || u_(n.handles), a = f_(r?.source ?? [], e.sourceHandle), o = f_(e.connectionMode === Vh.Strict ? i?.target ?? [] : (i?.target ?? []).concat(i?.source ?? []), e.targetHandle);
	if (!a || !o) return e.onError?.("008", Lh.error008(a ? "target" : "source", {
		id: e.id,
		sourceHandle: e.sourceHandle,
		targetHandle: e.targetHandle
	})), null;
	let s = a?.position || Q.Bottom, c = o?.position || Q.Top, l = d_(t, a, s), u = d_(n, o, c);
	return {
		sourceX: l.x,
		sourceY: l.y,
		targetX: u.x,
		targetY: u.y,
		sourcePosition: s,
		targetPosition: c
	};
}
function u_(e) {
	if (!e) return null;
	let t = [], n = [];
	for (let r of e) r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
	return {
		source: t,
		target: n
	};
}
function d_(e, t, n = Q.Left, r = !1) {
	let i = (t?.x ?? 0) + e.internals.positionAbsolute.x, a = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: o, height: s } = t ?? jg(e);
	if (r) return {
		x: i + o / 2,
		y: a + s / 2
	};
	switch (t?.position ?? n) {
		case Q.Top: return {
			x: i + o / 2,
			y: a
		};
		case Q.Right: return {
			x: i + o,
			y: a + s / 2
		};
		case Q.Bottom: return {
			x: i + o / 2,
			y: a + s
		};
		case Q.Left: return {
			x: i,
			y: a + s / 2
		};
	}
}
function f_(e, t) {
	return e && (t ? e.find((e) => e.id === t) : e[0]) || null;
}
function p_(e, t) {
	return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((t) => `${t}=${e[t]}`).join("&")}` : "";
}
function m_(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i }) {
	let a = /* @__PURE__ */ new Set();
	return e.reduce((e, o) => ([o.markerStart || r, o.markerEnd || i].forEach((r) => {
		if (r && typeof r == "object") {
			let i = p_(r, t);
			a.has(i) || (e.push({
				id: i,
				color: r.color || n,
				...r
			}), a.add(i));
		}
	}), e), []).sort((e, t) => e.id.localeCompare(t.id));
}
function h_(e, t, n, r, i) {
	let a = .5;
	i === "start" ? a = 0 : i === "end" && (a = 1);
	let o = [(e.x + e.width * a) * t.zoom + t.x, e.y * t.zoom + t.y - r], s = [-100 * a, -100];
	switch (n) {
		case Q.Right:
			o = [(e.x + e.width) * t.zoom + t.x + r, (e.y + e.height * a) * t.zoom + t.y], s = [0, -100 * a];
			break;
		case Q.Bottom:
			o[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
			break;
		case Q.Left: o = [e.x * t.zoom + t.x - r, (e.y + e.height * a) * t.zoom + t.y], s = [-100, -100 * a];
	}
	return `translate(${o[0]}px, ${o[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
var g_ = 1e3, __ = 10, v_ = {
	nodeOrigin: [0, 0],
	nodeExtent: Rh,
	elevateNodesOnSelect: !0,
	zIndexMode: "basic",
	defaults: {}
}, y_ = {
	...v_,
	checkEquality: !0
};
function b_(e, t) {
	let n = { ...e };
	for (let e in t) t[e] !== void 0 && (n[e] = t[e]);
	return n;
}
function x_(e, t, n) {
	let r = b_(v_, n);
	for (let n of e.values()) if (n.parentId) E_(n, e, t, r);
	else {
		let e = cg(Qh(n, r.nodeOrigin), Ag(n.extent) ? n.extent : r.nodeExtent, jg(n));
		n.internals.positionAbsolute = e;
	}
}
function S_(e, t) {
	if (!e.handles) return e.measured ? t?.internals.handleBounds : void 0;
	let n = [], r = [];
	for (let t of e.handles) {
		let i = {
			id: t.id,
			width: t.width ?? 1,
			height: t.height ?? 1,
			nodeId: e.id,
			x: t.x,
			y: t.y,
			position: t.position,
			type: t.type
		};
		t.type === "source" ? n.push(i) : t.type === "target" && r.push(i);
	}
	return {
		source: n,
		target: r
	};
}
function C_(e) {
	return e === "manual";
}
function w_(e, t, n, r = {}) {
	let i = b_(y_, r), a = { i: 0 }, o = new Map(t), s = i?.elevateNodesOnSelect && !C_(i.zIndexMode) ? g_ : 0, c = e.length > 0, l = !1;
	t.clear(), n.clear();
	for (let u of e) {
		let e = o.get(u.id);
		if (i.checkEquality && u === e?.internals.userNode) t.set(u.id, e);
		else {
			let n = cg(Qh(u, i.nodeOrigin), Ag(u.extent) ? u.extent : i.nodeExtent, jg(u));
			e = {
				...i.defaults,
				...u,
				measured: {
					width: u.measured?.width,
					height: u.measured?.height
				},
				internals: {
					positionAbsolute: n,
					handleBounds: S_(u, e),
					z: D_(u, s, i.zIndexMode),
					userNode: u
				}
			}, t.set(u.id, e);
		}
		(e.measured === void 0 || e.measured.width === void 0 || e.measured.height === void 0) && !e.hidden && (c = !1), u.parentId && E_(e, t, n, r, a), l ||= u.selected ?? !1;
	}
	return {
		nodesInitialized: c,
		hasSelectedNodes: l
	};
}
function T_(e, t) {
	if (!e.parentId) return;
	let n = t.get(e.parentId);
	n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function E_(e, t, n, r, i) {
	let { elevateNodesOnSelect: a, nodeOrigin: o, nodeExtent: s, zIndexMode: c } = b_(v_, r), l = e.parentId, u = t.get(l);
	if (!u) {
		console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
		return;
	}
	T_(e, n), i && !u.parentId && u.internals.rootParentIndex === void 0 && c === "auto" && (u.internals.rootParentIndex = ++i.i, u.internals.z = u.internals.z + i.i * __), i && u.internals.rootParentIndex !== void 0 && (i.i = u.internals.rootParentIndex);
	let { x: d, y: f, z: p } = O_(e, u, o, s, a && !C_(c) ? g_ : 0, c), { positionAbsolute: m } = e.internals, h = d !== m.x || f !== m.y;
	(h || p !== e.internals.z) && t.set(e.id, {
		...e,
		internals: {
			...e.internals,
			positionAbsolute: h ? {
				x: d,
				y: f
			} : m,
			z: p
		}
	});
}
function D_(e, t, n) {
	let r = bg(e.zIndex) ? e.zIndex : 0;
	return C_(n) ? r : r + (e.selected ? t : 0);
}
function O_(e, t, n, r, i, a) {
	let { x: o, y: s } = t.internals.positionAbsolute, c = jg(e), l = Qh(e, n), u = Ag(e.extent) ? cg(l, e.extent, c) : l, d = cg({
		x: o + u.x,
		y: s + u.y
	}, r, c);
	e.extent === "parent" && (d = lg(d, c, t));
	let f = D_(e, i, a), p = t.internals.z ?? 0;
	return {
		x: d.x,
		y: d.y,
		z: p >= f ? p + 1 : f
	};
}
function k_(e, t, n, r = [0, 0]) {
	let i = [], a = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.parentId);
		if (!e) continue;
		let r = _g(a.get(n.parentId)?.expandedRect ?? hg(e), n.rect);
		a.set(n.parentId, {
			expandedRect: r,
			parent: e
		});
	}
	return a.size > 0 && a.forEach(({ expandedRect: t, parent: a }, o) => {
		let s = a.internals.positionAbsolute, c = jg(a), l = a.origin ?? r, u = t.x < s.x ? Math.round(Math.abs(s.x - t.x)) : 0, d = t.y < s.y ? Math.round(Math.abs(s.y - t.y)) : 0, f = Math.max(c.width, Math.round(t.width)), p = Math.max(c.height, Math.round(t.height)), m = (f - c.width) * l[0], h = (p - c.height) * l[1];
		(u > 0 || d > 0 || m || h) && (i.push({
			id: o,
			type: "position",
			position: {
				x: a.position.x - u + m,
				y: a.position.y - d + h
			}
		}), n.get(o)?.forEach((t) => {
			e.some((e) => e.id === t.id) || i.push({
				id: t.id,
				type: "position",
				position: {
					x: t.position.x + u,
					y: t.position.y + d
				}
			});
		})), (c.width < t.width || c.height < t.height || u || d) && i.push({
			id: o,
			type: "dimensions",
			setAttributes: !0,
			dimensions: {
				width: f + (u ? l[0] * u - m : 0),
				height: p + (d ? l[1] * d - h : 0)
			}
		});
	}), i;
}
function A_(e, t, n, r, i, a, o) {
	let s = r?.querySelector(".xyflow__viewport"), c = !1;
	if (!s) return {
		changes: [],
		updatedInternals: c
	};
	let l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), f = [];
	for (let r of e.values()) {
		let e = t.get(r.id);
		if (!e) continue;
		if (e.hidden) {
			t.set(e.id, {
				...e,
				internals: {
					...e.internals,
					handleBounds: void 0
				}
			}), c = !0;
			continue;
		}
		let s = Rg(r.nodeElement), u = e.measured.width !== s.width || e.measured.height !== s.height;
		if (s.width && s.height && (u || !e.internals.handleBounds || r.force)) {
			let p = r.nodeElement.getBoundingClientRect(), m = Ag(e.extent) ? e.extent : a, { positionAbsolute: h } = e.internals;
			e.parentId && e.extent === "parent" ? h = lg(h, s, t.get(e.parentId)) : m && (h = cg(h, m, s));
			let g = {
				...e,
				measured: s,
				internals: {
					...e.internals,
					positionAbsolute: h,
					handleBounds: {
						source: Wg("source", r.nodeElement, p, d, e.id),
						target: Wg("target", r.nodeElement, p, d, e.id)
					}
				}
			};
			t.set(e.id, g), e.parentId && E_(g, t, n, {
				nodeOrigin: i,
				zIndexMode: o
			}), c = !0, u && (l.push({
				id: e.id,
				type: "dimensions",
				dimensions: s
			}), e.expandParent && e.parentId && f.push({
				id: e.id,
				parentId: e.parentId,
				rect: hg(g, i)
			}));
		}
	}
	if (f.length > 0) {
		let e = k_(f, t, n, i);
		l.push(...e);
	}
	return {
		changes: l,
		updatedInternals: c
	};
}
async function j_({ delta: e, panZoom: t, transform: n, translateExtent: r, width: i, height: a }) {
	if (!t || !e.x && !e.y) return Promise.resolve(!1);
	let o = await t.setViewportConstrained({
		x: n[0] + e.x,
		y: n[1] + e.y,
		zoom: n[2]
	}, [[0, 0], [i, a]], r), s = !!o && (o.x !== n[0] || o.y !== n[1] || o.k !== n[2]);
	return Promise.resolve(s);
}
function M_(e, t, n, r, i, a) {
	let o = i, s = r.get(o) || /* @__PURE__ */ new Map();
	r.set(o, s.set(n, t)), o = `${i}-${e}`;
	let c = r.get(o) || /* @__PURE__ */ new Map();
	if (r.set(o, c.set(n, t)), a) {
		o = `${i}-${e}-${a}`;
		let s = r.get(o) || /* @__PURE__ */ new Map();
		r.set(o, s.set(n, t));
	}
}
function N_(e, t, n) {
	e.clear(), t.clear();
	for (let r of n) {
		let { source: n, target: i, sourceHandle: a = null, targetHandle: o = null } = r, s = {
			edgeId: r.id,
			source: n,
			target: i,
			sourceHandle: a,
			targetHandle: o
		}, c = `${n}-${a}--${i}-${o}`;
		M_("source", s, `${i}-${o}--${n}-${a}`, e, n, a), M_("target", s, c, e, i, o), t.set(r.id, r);
	}
}
function P_(e, t) {
	if (!e.parentId) return !1;
	let n = t.get(e.parentId);
	return n ? n.selected ? !0 : P_(n, t) : !1;
}
function F_(e, t, n) {
	let r = e;
	do {
		if (r?.matches?.(t)) return !0;
		if (r === n) return !1;
		r = r?.parentElement;
	} while (r);
	return !1;
}
function I_(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	for (let [a, o] of e) if ((o.selected || o.id === r) && (!o.parentId || !P_(o, e)) && (o.draggable || t && o.draggable === void 0)) {
		let t = e.get(a);
		t && i.set(a, {
			id: a,
			position: t.position || {
				x: 0,
				y: 0
			},
			distance: {
				x: n.x - t.internals.positionAbsolute.x,
				y: n.y - t.internals.positionAbsolute.y
			},
			extent: t.extent,
			parentId: t.parentId,
			origin: t.origin,
			expandParent: t.expandParent,
			internals: { positionAbsolute: t.internals.positionAbsolute || {
				x: 0,
				y: 0
			} },
			measured: {
				width: t.measured.width ?? 0,
				height: t.measured.height ?? 0
			}
		});
	}
	return i;
}
function L_({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
	let i = [];
	for (let [e, a] of t) {
		let t = n.get(e)?.internals.userNode;
		t && i.push({
			...t,
			position: a.position,
			dragging: r
		});
	}
	if (!e) return [i[0], i];
	let a = n.get(e)?.internals.userNode;
	return [a ? {
		...a,
		position: t.get(e)?.position || a.position,
		dragging: r
	} : i[0], i];
}
function R_({ dragItems: e, snapGrid: t, x: n, y: r }) {
	let i = e.values().next().value;
	if (!i) return null;
	let a = {
		x: n - i.distance.x,
		y: r - i.distance.y
	}, o = Sg(a, t);
	return {
		x: o.x - a.x,
		y: o.y - a.y
	};
}
function z_({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: i }) {
	let a = {
		x: null,
		y: null
	}, o = 0, s = /* @__PURE__ */ new Map(), c = !1, l = {
		x: 0,
		y: 0
	}, u = null, d = !1, f = null, p = !1, m = !1, h = null;
	function g({ noDragClassName: g, handleSelector: _, domNode: v, isSelectable: y, nodeId: b, nodeClickDistance: x = 0 }) {
		f = Sp(v);
		function S({ x: e, y: n }) {
			let { nodeLookup: i, nodeExtent: o, snapGrid: c, snapToGrid: l, nodeOrigin: u, onNodeDrag: d, onSelectionDrag: f, onError: p, updateNodePositions: g } = t();
			a = {
				x: e,
				y: n
			};
			let _ = !1, v = s.size > 1, y = v && o ? pg(eg(s)) : null, x = v && l ? R_({
				dragItems: s,
				snapGrid: c,
				x: e,
				y: n
			}) : null;
			for (let [t, r] of s) {
				if (!i.has(t)) continue;
				let a = {
					x: e - r.distance.x,
					y: n - r.distance.y
				};
				l && (a = x ? {
					x: Math.round(a.x + x.x),
					y: Math.round(a.y + x.y)
				} : Sg(a, c));
				let s = null;
				if (v && o && !r.extent && y) {
					let { positionAbsolute: e } = r.internals, t = e.x - y.x + o[0][0], n = e.x + r.measured.width - y.x2 + o[1][0], i = e.y - y.y + o[0][1], a = e.y + r.measured.height - y.y2 + o[1][1];
					s = [[t, i], [n, a]];
				}
				let { position: d, positionAbsolute: f } = ag({
					nodeId: t,
					nextPosition: a,
					nodeLookup: i,
					nodeExtent: s || o,
					nodeOrigin: u,
					onError: p
				});
				_ = _ || r.position.x !== d.x || r.position.y !== d.y, r.position = d, r.internals.positionAbsolute = f;
			}
			if (m ||= _, _ && (g(s, !0), h && (r || d || !b && f))) {
				let [e, t] = L_({
					nodeId: b,
					dragItems: s,
					nodeLookup: i
				});
				r?.(h, s, e, t), d?.(h, e, t), b || f?.(h, t);
			}
		}
		async function C() {
			if (!u) return;
			let { transform: e, panBy: n, autoPanSpeed: r, autoPanOnNodeDrag: i } = t();
			if (!i) {
				c = !1, cancelAnimationFrame(o);
				return;
			}
			let [s, d] = dg(l, u, r);
			(s !== 0 || d !== 0) && (a.x = (a.x ?? 0) - s / e[2], a.y = (a.y ?? 0) - d / e[2], await n({
				x: s,
				y: d
			}) && S(a)), o = requestAnimationFrame(C);
		}
		function w(r) {
			let { nodeLookup: i, multiSelectionActive: o, nodesDraggable: c, transform: l, snapGrid: f, snapToGrid: p, selectNodesOnDrag: m, onNodeDragStart: h, onSelectionDragStart: g, unselectNodesAndEdges: _ } = t();
			d = !0, (!m || !y) && !o && b && (i.get(b)?.selected || _()), y && m && b && e?.(b);
			let v = Lg(r.sourceEvent, {
				transform: l,
				snapGrid: f,
				snapToGrid: p,
				containerBounds: u
			});
			if (a = v, s = I_(i, c, v, b), s.size > 0 && (n || h || !b && g)) {
				let [e, t] = L_({
					nodeId: b,
					dragItems: s,
					nodeLookup: i
				});
				n?.(r.sourceEvent, s, e, t), h?.(r.sourceEvent, e, t), b || g?.(r.sourceEvent, t);
			}
		}
		let T = Lp().clickDistance(x).on("start", (e) => {
			let { domNode: n, nodeDragThreshold: r, transform: i, snapGrid: o, snapToGrid: s } = t();
			u = n?.getBoundingClientRect() || null, p = !1, m = !1, h = e.sourceEvent, r === 0 && w(e), a = Lg(e.sourceEvent, {
				transform: i,
				snapGrid: o,
				snapToGrid: s,
				containerBounds: u
			}), l = Ug(e.sourceEvent, u);
		}).on("drag", (e) => {
			let { autoPanOnNodeDrag: n, transform: r, snapGrid: i, snapToGrid: o, nodeDragThreshold: f, nodeLookup: m } = t(), g = Lg(e.sourceEvent, {
				transform: r,
				snapGrid: i,
				snapToGrid: o,
				containerBounds: u
			});
			if (h = e.sourceEvent, (e.sourceEvent.type === "touchmove" && e.sourceEvent.touches.length > 1 || b && !m.has(b)) && (p = !0), !p) {
				if (!c && n && d && (c = !0, C()), !d) {
					let t = Ug(e.sourceEvent, u), n = t.x - l.x, r = t.y - l.y;
					Math.sqrt(n * n + r * r) > f && w(e);
				}
				(a.x !== g.xSnapped || a.y !== g.ySnapped) && s && d && (l = Ug(e.sourceEvent, u), S(g));
			}
		}).on("end", (e) => {
			if (!(!d || p) && (c = !1, d = !1, cancelAnimationFrame(o), s.size > 0)) {
				let { nodeLookup: n, updateNodePositions: r, onNodeDragStop: a, onSelectionDragStop: o } = t();
				if (m &&= (r(s, !1), !1), i || a || !b && o) {
					let [t, r] = L_({
						nodeId: b,
						dragItems: s,
						nodeLookup: n,
						dragging: !1
					});
					i?.(e.sourceEvent, s, t, r), a?.(e.sourceEvent, t, r), b || o?.(e.sourceEvent, r);
				}
			}
		}).filter((e) => {
			let t = e.target;
			return !e.button && (!g || !F_(t, `.${g}`, v)) && (!_ || F_(t, _, v));
		});
		f.call(T);
	}
	function _() {
		f?.on(".drag", null);
	}
	return {
		update: g,
		destroy: _
	};
}
function B_(e, t, n) {
	let r = [], i = {
		x: e.x - n,
		y: e.y - n,
		width: n * 2,
		height: n * 2
	};
	for (let e of t.values()) vg(i, hg(e)) > 0 && r.push(e);
	return r;
}
var V_ = 250;
function H_(e, t, n, r) {
	let i = [], a = Infinity, o = B_(e, n, t + V_);
	for (let n of o) {
		let o = [...n.internals.handleBounds?.source ?? [], ...n.internals.handleBounds?.target ?? []];
		for (let s of o) {
			if (r.nodeId === s.nodeId && r.type === s.type && r.id === s.id) continue;
			let { x: o, y: c } = d_(n, s, s.position, !0), l = Math.sqrt((o - e.x) ** 2 + (c - e.y) ** 2);
			l > t || (l < a ? (i = [{
				...s,
				x: o,
				y: c
			}], a = l) : l === a && i.push({
				...s,
				x: o,
				y: c
			}));
		}
	}
	if (!i.length) return null;
	if (i.length > 1) {
		let e = r.type === "source" ? "target" : "source";
		return i.find((t) => t.type === e) ?? i[0];
	}
	return i[0];
}
function U_(e, t, n, r, i, a = !1) {
	let o = r.get(e);
	if (!o) return null;
	let s = i === "strict" ? o.internals.handleBounds?.[t] : [...o.internals.handleBounds?.source ?? [], ...o.internals.handleBounds?.target ?? []], c = (n ? s?.find((e) => e.id === n) : s?.[0]) ?? null;
	return c && a ? {
		...c,
		...d_(o, c, c.position, !0)
	} : c;
}
function W_(e, t) {
	return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function G_(e, t) {
	let n = null;
	return t ? n = !0 : e && !t && (n = !1), n;
}
var K_ = () => !0;
function q_(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: i, edgeUpdaterType: a, isTarget: o, domNode: s, nodeLookup: c, lib: l, autoPanOnConnect: u, flowId: d, panBy: f, cancelConnection: p, onConnectStart: m, onConnect: h, onConnectEnd: g, isValidConnection: _ = K_, onReconnectEnd: v, updateConnection: y, getTransform: b, getFromHandle: x, autoPanSpeed: S, dragThreshold: C = 1, handleDomNode: w }) {
	let T = zg(e.target), E = 0, D, { x: O, y: k } = Ug(e), A = W_(a, w), j = s?.getBoundingClientRect(), M = !1;
	if (!j || !A) return;
	let N = U_(i, A, r, c, t);
	if (!N) return;
	let P = Ug(e, j), F = !1, I = null, L = !1, R = null;
	function z() {
		if (!u || !j) return;
		let [e, t] = dg(P, j, S);
		f({
			x: e,
			y: t
		}), E = requestAnimationFrame(z);
	}
	let B = {
		...N,
		nodeId: i,
		type: A,
		position: N.position
	}, V = c.get(i), H = {
		inProgress: !0,
		isValid: null,
		from: d_(V, B, Q.Left, !0),
		fromHandle: B,
		fromPosition: B.position,
		fromNode: V,
		to: P,
		toHandle: null,
		toPosition: qh[B.position],
		toNode: null,
		pointer: P
	};
	function ee() {
		M = !0, y(H), m?.(e, {
			nodeId: i,
			handleId: r,
			handleType: A
		});
	}
	C === 0 && ee();
	function te(e) {
		if (!M) {
			let { x: t, y: n } = Ug(e), r = t - O, i = n - k;
			if (!(r * r + i * i > C * C)) return;
			ee();
		}
		if (!x() || !B) {
			ne(e);
			return;
		}
		let a = b();
		P = Ug(e, j), D = H_(Cg(P, a, !1, [1, 1]), n, c, B), F ||= (z(), !0);
		let s = J_(e, {
			handle: D,
			connectionMode: t,
			fromNodeId: i,
			fromHandleId: r,
			fromType: o ? "target" : "source",
			isValidConnection: _,
			doc: T,
			lib: l,
			flowId: d,
			nodeLookup: c
		});
		R = s.handleDomNode, I = s.connection, L = G_(!!D, s.isValid);
		let u = c.get(i), f = u ? d_(u, B, Q.Left, !0) : H.from, p = {
			...H,
			from: f,
			isValid: L,
			to: s.toHandle && L ? wg({
				x: s.toHandle.x,
				y: s.toHandle.y
			}, a) : P,
			toHandle: s.toHandle,
			toPosition: L && s.toHandle ? s.toHandle.position : qh[B.position],
			toNode: s.toHandle ? c.get(s.toHandle.nodeId) : null,
			pointer: P
		};
		y(p), H = p;
	}
	function ne(e) {
		if (!("touches" in e && e.touches.length > 0)) {
			if (M) {
				(D || R) && I && L && h?.(I);
				let { inProgress: t, ...n } = H, r = {
					...n,
					toPosition: H.toHandle ? H.toPosition : null
				};
				g?.(e, r), a && v?.(e, r);
			}
			p(), cancelAnimationFrame(E), F = !1, L = !1, I = null, R = null, T.removeEventListener("mousemove", te), T.removeEventListener("mouseup", ne), T.removeEventListener("touchmove", te), T.removeEventListener("touchend", ne);
		}
	}
	T.addEventListener("mousemove", te), T.addEventListener("mouseup", ne), T.addEventListener("touchmove", te), T.addEventListener("touchend", ne);
}
function J_(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: i, fromType: a, doc: o, lib: s, flowId: c, isValidConnection: l = K_, nodeLookup: u }) {
	let d = a === "target", f = t ? o.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: p, y: m } = Ug(e), h = o.elementFromPoint(p, m), g = h?.classList.contains(`${s}-flow__handle`) ? h : f, _ = {
		handleDomNode: g,
		isValid: !1,
		connection: null,
		toHandle: null
	};
	if (g) {
		let e = W_(void 0, g), t = g.getAttribute("data-nodeid"), a = g.getAttribute("data-handleid"), o = g.classList.contains("connectable"), s = g.classList.contains("connectableend");
		if (!t || !e) return _;
		let c = {
			source: d ? t : r,
			sourceHandle: d ? a : i,
			target: d ? r : t,
			targetHandle: d ? i : a
		};
		_.connection = c, _.isValid = o && s && (n === Vh.Strict ? d && e === "source" || !d && e === "target" : t !== r || a !== i) && l(c), _.toHandle = U_(t, e, a, u, n, !0);
	}
	return _;
}
var Y_ = {
	onPointerDown: q_,
	isValid: J_
};
function X_({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
	let i = Sp(e);
	function a({ translateExtent: e, width: a, height: o, zoomStep: s = 1, pannable: c = !0, zoomable: l = !0, inversePan: u = !1 }) {
		let d = (e) => {
			if (e.sourceEvent.type !== "wheel" || !t) return;
			let r = n(), i = e.sourceEvent.ctrlKey && kg() ? 10 : 1, a = -e.sourceEvent.deltaY * (e.sourceEvent.deltaMode === 1 ? .05 : e.sourceEvent.deltaMode ? 1 : .002) * s, o = r[2] * 2 ** (a * i);
			t.scaleTo(o);
		}, f = [0, 0], p = Ih().on("start", (e) => {
			(e.sourceEvent.type === "mousedown" || e.sourceEvent.type === "touchstart") && (f = [e.sourceEvent.clientX ?? e.sourceEvent.touches[0].clientX, e.sourceEvent.clientY ?? e.sourceEvent.touches[0].clientY]);
		}).on("zoom", c ? (i) => {
			let s = n();
			if (i.sourceEvent.type !== "mousemove" && i.sourceEvent.type !== "touchmove" || !t) return;
			let c = [i.sourceEvent.clientX ?? i.sourceEvent.touches[0].clientX, i.sourceEvent.clientY ?? i.sourceEvent.touches[0].clientY], l = [c[0] - f[0], c[1] - f[1]];
			f = c;
			let d = r() * Math.max(s[2], Math.log(s[2])) * (u ? -1 : 1), p = {
				x: s[0] - l[0] * d,
				y: s[1] - l[1] * d
			}, m = [[0, 0], [a, o]];
			t.setViewportConstrained({
				x: p.x,
				y: p.y,
				zoom: s[2]
			}, m, e);
		} : null).on("zoom.wheel", l ? d : null);
		i.call(p, {});
	}
	function o() {
		i.on("zoom", null);
	}
	return {
		update: a,
		destroy: o,
		pointer: wp
	};
}
var Z_ = (e) => ({
	x: e.x,
	y: e.y,
	zoom: e.k
}), Q_ = ({ x: e, y: t, zoom: n }) => Eh.translate(e, t).scale(n), $_ = (e, t) => e.target.closest(`.${t}`), ev = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), tv = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, nv = (e, t = 0, n = tv, r = () => {}) => {
	let i = typeof t == "number" && t > 0;
	return i || r(), i ? e.transition().duration(t).ease(n).on("end", r) : e;
}, rv = (e) => {
	let t = e.ctrlKey && kg() ? 10 : 1;
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * t;
};
function iv({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: o, onPanZoomStart: s, onPanZoom: c, onPanZoomEnd: l }) {
	return (u) => {
		if ($_(u, t)) return u.ctrlKey && u.preventDefault(), !1;
		u.preventDefault(), u.stopImmediatePropagation();
		let d = n.property("__zoom").k || 1;
		if (u.ctrlKey && o) {
			let e = wp(u), t = d * 2 ** rv(u);
			r.scaleTo(n, t, e, u);
			return;
		}
		let f = u.deltaMode === 1 ? 20 : 1, p = i === Hh.Vertical ? 0 : u.deltaX * f, m = i === Hh.Horizontal ? 0 : u.deltaY * f;
		!kg() && u.shiftKey && i !== Hh.Vertical && (p = u.deltaY * f, m = 0), r.translateBy(n, -(p / d) * a, -(m / d) * a, { internal: !0 });
		let h = Z_(n.property("__zoom"));
		clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (c?.(u, h), e.panScrollTimeout = setTimeout(() => {
			l?.(u, h), e.isPanScrolling = !1;
		}, 150)) : (e.isPanScrolling = !0, s?.(u, h));
	};
}
function av({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
	return function(r, i) {
		let a = r.type === "wheel", o = !t && a && !r.ctrlKey, s = $_(r, e);
		if (r.ctrlKey && a && s && r.preventDefault(), o || s) return null;
		r.preventDefault(), n.call(this, r, i);
	};
}
function ov({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
	return (r) => {
		if (r.sourceEvent?.internal) return;
		let i = Z_(r.transform);
		e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, i);
	};
}
function sv({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: i }) {
	return (a) => {
		e.usedRightMouseButton = !!(n && ev(t, e.mouseButton ?? 0)), a.sourceEvent?.sync || r([
			a.transform.x,
			a.transform.y,
			a.transform.k
		]), i && !a.sourceEvent?.internal && i?.(a.sourceEvent, Z_(a.transform));
	};
}
function cv({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: i, onPaneContextMenu: a }) {
	return (o) => {
		if (!o.sourceEvent?.internal && (e.isZoomingOrPanning = !1, a && ev(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && o.sourceEvent && a(o.sourceEvent), e.usedRightMouseButton = !1, r(!1), i)) {
			let t = Z_(o.transform);
			e.prevViewport = t, clearTimeout(e.timerId), e.timerId = setTimeout(() => {
				i?.(o.sourceEvent, t);
			}, n ? 150 : 0);
		}
	};
}
function lv({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: o, noWheelClassName: s, noPanClassName: c, lib: l, connectionInProgress: u }) {
	return (d) => {
		let f = e || t, p = n && d.ctrlKey, m = d.type === "wheel";
		if (d.button === 1 && d.type === "mousedown" && ($_(d, `${l}-flow__node`) || $_(d, `${l}-flow__edge`))) return !0;
		if (!r && !f && !i && !a && !n || o || u && !m || $_(d, s) && m || $_(d, c) && (!m || i && m && !e) || !n && d.ctrlKey && m) return !1;
		if (!n && d.type === "touchstart" && d.touches?.length > 1) return d.preventDefault(), !1;
		if (!f && !i && !p && m || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown") return !1;
		let h = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
		return (!d.ctrlKey || m) && h;
	};
}
function uv({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: i, onPanZoom: a, onPanZoomStart: o, onPanZoomEnd: s, onDraggingChange: c }) {
	let l = {
		isZoomingOrPanning: !1,
		usedRightMouseButton: !1,
		prevViewport: {
			x: 0,
			y: 0,
			zoom: 0
		},
		mouseButton: 0,
		timerId: void 0,
		panScrollTimeout: void 0,
		isPanScrolling: !1
	}, u = e.getBoundingClientRect(), d = Ih().scaleExtent([t, n]).translateExtent(r), f = Sp(e).call(d);
	v({
		x: i.x,
		y: i.y,
		zoom: sg(i.zoom, t, n)
	}, [[0, 0], [u.width, u.height]], r);
	let p = f.on("wheel.zoom"), m = f.on("dblclick.zoom");
	d.wheelDelta(rv);
	function h(e, t) {
		return f ? new Promise((n) => {
			d?.interpolate(t?.interpolate === "linear" ? Ee : qr).transform(nv(f, t?.duration, t?.ease, () => n(!0)), e);
		}) : Promise.resolve(!1);
	}
	function g({ noWheelClassName: e, noPanClassName: t, onPaneContextMenu: n, userSelectionActive: r, panOnScroll: i, panOnDrag: u, panOnScrollMode: h, panOnScrollSpeed: g, preventScrolling: v, zoomOnPinch: y, zoomOnScroll: b, zoomOnDoubleClick: x, zoomActivationKeyPressed: S, lib: C, onTransformChange: w, connectionInProgress: T, paneClickDistance: E, selectionOnDrag: D }) {
		r && !l.isZoomingOrPanning && _();
		let O = i && !S && !r;
		d.clickDistance(D ? Infinity : !bg(E) || E < 0 ? 0 : E);
		let k = O ? iv({
			zoomPanValues: l,
			noWheelClassName: e,
			d3Selection: f,
			d3Zoom: d,
			panOnScrollMode: h,
			panOnScrollSpeed: g,
			zoomOnPinch: y,
			onPanZoomStart: o,
			onPanZoom: a,
			onPanZoomEnd: s
		}) : av({
			noWheelClassName: e,
			preventScrolling: v,
			d3ZoomHandler: p
		});
		if (f.on("wheel.zoom", k, { passive: !1 }), !r) {
			let e = ov({
				zoomPanValues: l,
				onDraggingChange: c,
				onPanZoomStart: o
			});
			d.on("start", e);
			let t = sv({
				zoomPanValues: l,
				panOnDrag: u,
				onPaneContextMenu: !!n,
				onPanZoom: a,
				onTransformChange: w
			});
			d.on("zoom", t);
			let r = cv({
				zoomPanValues: l,
				panOnDrag: u,
				panOnScroll: i,
				onPaneContextMenu: n,
				onPanZoomEnd: s,
				onDraggingChange: c
			});
			d.on("end", r);
		}
		let A = lv({
			zoomActivationKeyPressed: S,
			panOnDrag: u,
			zoomOnScroll: b,
			panOnScroll: i,
			zoomOnDoubleClick: x,
			zoomOnPinch: y,
			userSelectionActive: r,
			noPanClassName: t,
			noWheelClassName: e,
			lib: C,
			connectionInProgress: T
		});
		d.filter(A), x ? f.on("dblclick.zoom", m) : f.on("dblclick.zoom", null);
	}
	function _() {
		d.on("zoom", null);
	}
	async function v(e, t, n) {
		let r = Q_(e), i = d?.constrain()(r, t, n);
		return i && await h(i), new Promise((e) => e(i));
	}
	async function y(e, t) {
		let n = Q_(e);
		return await h(n, t), new Promise((e) => e(n));
	}
	function b(e) {
		if (f) {
			let t = Q_(e), n = f.property("__zoom");
			(n.k !== e.zoom || n.x !== e.x || n.y !== e.y) && d?.transform(f, t, null, { sync: !0 });
		}
	}
	function x() {
		let e = f ? Dh(f.node()) : {
			x: 0,
			y: 0,
			k: 1
		};
		return {
			x: e.x,
			y: e.y,
			zoom: e.k
		};
	}
	function S(e, t) {
		return f ? new Promise((n) => {
			d?.interpolate(t?.interpolate === "linear" ? Ee : qr).scaleTo(nv(f, t?.duration, t?.ease, () => n(!0)), e);
		}) : Promise.resolve(!1);
	}
	function C(e, t) {
		return f ? new Promise((n) => {
			d?.interpolate(t?.interpolate === "linear" ? Ee : qr).scaleBy(nv(f, t?.duration, t?.ease, () => n(!0)), e);
		}) : Promise.resolve(!1);
	}
	function w(e) {
		d?.scaleExtent(e);
	}
	function T(e) {
		d?.translateExtent(e);
	}
	function E(e) {
		let t = !bg(e) || e < 0 ? 0 : e;
		d?.clickDistance(t);
	}
	return {
		update: g,
		destroy: _,
		setViewport: y,
		setViewportConstrained: v,
		getViewport: x,
		scaleTo: S,
		scaleBy: C,
		setScaleExtent: w,
		setTranslateExtent: T,
		syncViewport: b,
		setClickDistance: E
	};
}
var dv;
(function(e) {
	e.Line = "line", e.Handle = "handle";
})(dv ||= {});
function fv({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: i, affectsY: a }) {
	let o = e - t, s = n - r, c = [o > 0 ? 1 : o < 0 ? -1 : 0, s > 0 ? 1 : s < 0 ? -1 : 0];
	return o && i && (c[0] *= -1), s && a && (c[1] *= -1), c;
}
function pv(e) {
	return {
		isHorizontal: e.includes("right") || e.includes("left"),
		isVertical: e.includes("bottom") || e.includes("top"),
		affectsX: e.includes("left"),
		affectsY: e.includes("top")
	};
}
function mv(e, t) {
	return Math.max(0, t - e);
}
function hv(e, t) {
	return Math.max(0, e - t);
}
function gv(e, t, n) {
	return Math.max(0, t - e, e - n);
}
function _v(e, t) {
	return e ? !t : t;
}
function vv(e, t, n, r, i, a, o, s) {
	let { affectsX: c, affectsY: l } = t, { isHorizontal: u, isVertical: d } = t, f = u && d, { xSnapped: p, ySnapped: m } = n, { minWidth: h, maxWidth: g, minHeight: _, maxHeight: v } = r, { x: y, y: b, width: x, height: S, aspectRatio: C } = e, w = Math.floor(u ? p - e.pointerX : 0), T = Math.floor(d ? m - e.pointerY : 0), E = x + (c ? -w : w), D = S + (l ? -T : T), O = -a[0] * x, k = -a[1] * S, A = gv(E, h, g), j = gv(D, _, v);
	if (o) {
		let e = 0, t = 0;
		c && w < 0 ? e = mv(y + w + O, o[0][0]) : !c && w > 0 && (e = hv(y + E + O, o[1][0])), l && T < 0 ? t = mv(b + T + k, o[0][1]) : !l && T > 0 && (t = hv(b + D + k, o[1][1])), A = Math.max(A, e), j = Math.max(j, t);
	}
	if (s) {
		let e = 0, t = 0;
		c && w > 0 ? e = hv(y + w, s[0][0]) : !c && w < 0 && (e = mv(y + E, s[1][0])), l && T > 0 ? t = hv(b + T, s[0][1]) : !l && T < 0 && (t = mv(b + D, s[1][1])), A = Math.max(A, e), j = Math.max(j, t);
	}
	if (i) {
		if (u) {
			let e = gv(E / C, _, v) * C;
			if (A = Math.max(A, e), o) {
				let e = 0;
				e = !c && !l || c && !l && f ? hv(b + k + E / C, o[1][1]) * C : mv(b + k + (c ? w : -w) / C, o[0][1]) * C, A = Math.max(A, e);
			}
			if (s) {
				let e = 0;
				e = !c && !l || c && !l && f ? mv(b + E / C, s[1][1]) * C : hv(b + (c ? w : -w) / C, s[0][1]) * C, A = Math.max(A, e);
			}
		}
		if (d) {
			let e = gv(D * C, h, g) / C;
			if (j = Math.max(j, e), o) {
				let e = 0;
				e = !c && !l || l && !c && f ? hv(y + D * C + O, o[1][0]) / C : mv(y + (l ? T : -T) * C + O, o[0][0]) / C, j = Math.max(j, e);
			}
			if (s) {
				let e = 0;
				e = !c && !l || l && !c && f ? mv(y + D * C, s[1][0]) / C : hv(y + (l ? T : -T) * C, s[0][0]) / C, j = Math.max(j, e);
			}
		}
	}
	T += T < 0 ? j : -j, w += w < 0 ? A : -A, i && (f ? E > D * C ? T = (_v(c, l) ? -w : w) / C : w = (_v(c, l) ? -T : T) * C : u ? (T = w / C, l = c) : (w = T * C, c = l));
	let M = c ? y + w : y, N = l ? b + T : b;
	return {
		width: x + (c ? -w : w),
		height: S + (l ? -T : T),
		x: a[0] * w * (c ? -1 : 1) + M,
		y: a[1] * T * (l ? -1 : 1) + N
	};
}
var yv = {
	width: 0,
	height: 0,
	x: 0,
	y: 0
}, bv = {
	...yv,
	pointerX: 0,
	pointerY: 0,
	aspectRatio: 1
};
function xv(e) {
	return [[0, 0], [e.measured.width, e.measured.height]];
}
function Sv(e, t, n) {
	let r = t.position.x + e.position.x, i = t.position.y + e.position.y, a = e.measured.width ?? 0, o = e.measured.height ?? 0, s = n[0] * a, c = n[1] * o;
	return [[r - s, i - c], [r + a - s, i + o - c]];
}
function Cv({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: i }) {
	let a = Sp(e), o = {
		controlDirection: pv("bottom-right"),
		boundaries: {
			minWidth: 0,
			minHeight: 0,
			maxWidth: Number.MAX_VALUE,
			maxHeight: Number.MAX_VALUE
		},
		resizeDirection: void 0,
		keepAspectRatio: !1
	};
	function s({ controlPosition: e, boundaries: s, keepAspectRatio: c, resizeDirection: l, onResizeStart: u, onResize: d, onResizeEnd: f, shouldResize: p }) {
		let m = { ...yv }, h = { ...bv };
		o = {
			boundaries: s,
			resizeDirection: l,
			keepAspectRatio: c,
			controlDirection: pv(e)
		};
		let g, _ = null, v = [], y, b, x, S = !1, C = Lp().on("start", (e) => {
			let { nodeLookup: r, transform: i, snapGrid: a, snapToGrid: o, nodeOrigin: s, paneDomNode: c } = n();
			if (g = r.get(t), !g) return;
			_ = c?.getBoundingClientRect() ?? null;
			let { xSnapped: l, ySnapped: d } = Lg(e.sourceEvent, {
				transform: i,
				snapGrid: a,
				snapToGrid: o,
				containerBounds: _
			});
			m = {
				width: g.measured.width ?? 0,
				height: g.measured.height ?? 0,
				x: g.position.x ?? 0,
				y: g.position.y ?? 0
			}, h = {
				...m,
				pointerX: l,
				pointerY: d,
				aspectRatio: m.width / m.height
			}, y = void 0, g.parentId && (g.extent === "parent" || g.expandParent) && (y = r.get(g.parentId), b = y && g.extent === "parent" ? xv(y) : void 0), v = [], x = void 0;
			for (let [e, n] of r) if (n.parentId === t && (v.push({
				id: e,
				position: { ...n.position },
				extent: n.extent
			}), n.extent === "parent" || n.expandParent)) {
				let e = Sv(n, g, n.origin ?? s);
				x = x ? [[Math.min(e[0][0], x[0][0]), Math.min(e[0][1], x[0][1])], [Math.max(e[1][0], x[1][0]), Math.max(e[1][1], x[1][1])]] : e;
			}
			u?.(e, { ...m });
		}).on("drag", (e) => {
			let { transform: t, snapGrid: i, snapToGrid: a, nodeOrigin: s } = n(), c = Lg(e.sourceEvent, {
				transform: t,
				snapGrid: i,
				snapToGrid: a,
				containerBounds: _
			}), l = [];
			if (!g) return;
			let { x: u, y: f, width: C, height: w } = m, T = {}, E = g.origin ?? s, { width: D, height: O, x: k, y: A } = vv(h, o.controlDirection, c, o.boundaries, o.keepAspectRatio, E, b, x), j = D !== C, M = O !== w, N = k !== u && j, P = A !== f && M;
			if (!N && !P && !j && !M) return;
			if ((N || P || E[0] === 1 || E[1] === 1) && (T.x = N ? k : m.x, T.y = P ? A : m.y, m.x = T.x, m.y = T.y, v.length > 0)) {
				let e = k - u, t = A - f;
				for (let n of v) n.position = {
					x: n.position.x - e + E[0] * (D - C),
					y: n.position.y - t + E[1] * (O - w)
				}, l.push(n);
			}
			if ((j || M) && (T.width = j && (!o.resizeDirection || o.resizeDirection === "horizontal") ? D : m.width, T.height = M && (!o.resizeDirection || o.resizeDirection === "vertical") ? O : m.height, m.width = T.width, m.height = T.height), y && g.expandParent) {
				let e = E[0] * (T.width ?? 0);
				T.x && T.x < e && (m.x = e, h.x -= T.x - e);
				let t = E[1] * (T.height ?? 0);
				T.y && T.y < t && (m.y = t, h.y -= T.y - t);
			}
			let F = fv({
				width: m.width,
				prevWidth: C,
				height: m.height,
				prevHeight: w,
				affectsX: o.controlDirection.affectsX,
				affectsY: o.controlDirection.affectsY
			}), I = {
				...m,
				direction: F
			};
			p?.(e, I) !== !1 && (S = !0, d?.(e, I), r(T, l));
		}).on("end", (e) => {
			S &&= (f?.(e, { ...m }), i?.({ ...m }), !1);
		});
		a.call(C);
	}
	function c() {
		a.on(".drag", null);
	}
	return {
		update: s,
		destroy: c
	};
}
//#endregion
//#region ../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
var wv = /* @__PURE__ */ n(((t) => {
	var n = e("react"), r = mt();
	function i(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var a = typeof Object.is == "function" ? Object.is : i, o = r.useSyncExternalStore, s = n.useRef, c = n.useEffect, l = n.useMemo, u = n.useDebugValue;
	t.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
		var d = s(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = l(function() {
			function e(e) {
				if (!o) {
					if (o = !0, s = e, e = r(e), i !== void 0 && f.hasValue) {
						var t = f.value;
						if (i(t, e)) return c = t;
					}
					return c = e;
				}
				if (t = c, a(s, e)) return t;
				var n = r(e);
				return i !== void 0 && i(t, n) ? (s = e, t) : (s = e, c = n);
			}
			var o = !1, s, c, l = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, l === null ? void 0 : function() {
				return e(l());
			}];
		}, [
			t,
			n,
			r,
			i
		]);
		var p = o(e, d[0], d[1]);
		return c(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), u(p), p;
	};
})), Tv = /* @__PURE__ */ n(((t) => {
	process.env.NODE_ENV !== "production" && (function() {
		function n(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var r = e("react"), i = mt(), a = typeof Object.is == "function" ? Object.is : n, o = i.useSyncExternalStore, s = r.useRef, c = r.useEffect, l = r.useMemo, u = r.useDebugValue;
		t.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
			var d = s(null);
			if (d.current === null) {
				var f = {
					hasValue: !1,
					value: null
				};
				d.current = f;
			} else f = d.current;
			d = l(function() {
				function e(e) {
					if (!o) {
						if (o = !0, s = e, e = r(e), i !== void 0 && f.hasValue) {
							var t = f.value;
							if (i(t, e)) return c = t;
						}
						return c = e;
					}
					if (t = c, a(s, e)) return t;
					var n = r(e);
					return i !== void 0 && i(t, n) ? (s = e, t) : (s = e, c = n);
				}
				var o = !1, s, c, l = n === void 0 ? null : n;
				return [function() {
					return e(t());
				}, l === null ? void 0 : function() {
					return e(l());
				}];
			}, [
				t,
				n,
				r,
				i
			]);
			var p = o(e, d[0], d[1]);
			return c(function() {
				f.hasValue = !0, f.value = p;
			}, [p]), u(p), p;
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Ev = /* @__PURE__ */ t((/* @__PURE__ */ n(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? wv() : Tv();
})))(), 1), Dv = (e) => {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (!Object.is(i, t)) {
			let e = t;
			t = r ?? (typeof i != "object" || !i) ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = {
		setState: r,
		getState: i,
		getInitialState: () => o,
		subscribe: (e) => (n.add(e), () => n.delete(e)),
		destroy: () => {
			n.clear();
		}
	}, o = t = e(r, i, a);
	return a;
}, Ov = (e) => e ? Dv(e) : Dv, { useDebugValue: kv } = Fn, { useSyncExternalStoreWithSelector: Av } = Ev.default, jv = (e) => e;
function Mv(e, t = jv, n) {
	let r = Av(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
	return kv(r), r;
}
var Nv = (e, t) => {
	let n = Ov(e), r = (e, r = t) => Mv(n, e, r);
	return Object.assign(r, n), r;
}, Pv = (e, t) => e ? Nv(e, t) : Nv;
//#endregion
//#region ../../node_modules/.pnpm/zustand@4.5.7_@types+react@18.3.18_react@18.3.1/node_modules/zustand/esm/shallow.mjs
function Fv(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	if (e instanceof Map && t instanceof Map) {
		if (e.size !== t.size) return !1;
		for (let [n, r] of e) if (!Object.is(r, t.get(n))) return !1;
		return !0;
	}
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	let n = Object.keys(e);
	if (n.length !== Object.keys(t).length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+react@12.10.2_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@xyflow/react/dist/esm/index.js
var Iv = Rn(null), Lv = Iv.Provider, Rv = Lh.error001();
function $(e, t) {
	let n = Un(Iv);
	if (n === null) throw Error(Rv);
	return Mv(n, e, t);
}
function zv() {
	let e = Un(Iv);
	if (e === null) throw Error(Rv);
	return K(() => ({
		getState: e.getState,
		setState: e.setState,
		subscribe: e.subscribe
	}), [e]);
}
var Bv = { display: "none" }, Vv = {
	position: "absolute",
	width: 1,
	height: 1,
	margin: -1,
	border: 0,
	padding: 0,
	overflow: "hidden",
	clip: "rect(0px, 0px, 0px, 0px)",
	clipPath: "inset(100%)"
}, Hv = "react-flow__node-desc", Uv = "react-flow__edge-desc", Wv = "react-flow__aria-live", Gv = (e) => e.ariaLiveMessage, Kv = (e) => e.ariaLabelConfig;
function qv({ rfId: e }) {
	let t = $(Gv);
	return X("div", {
		id: `${Wv}-${e}`,
		"aria-live": "assertive",
		"aria-atomic": "true",
		style: Vv,
		children: t
	});
}
function Jv({ rfId: e, disableKeyboardA11y: t }) {
	let n = $(Kv);
	return Z(Y, { children: [
		X("div", {
			id: `${Hv}-${e}`,
			style: Bv,
			children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"]
		}),
		X("div", {
			id: `${Uv}-${e}`,
			style: Bv,
			children: n["edge.a11yDescription.default"]
		}),
		!t && X(qv, { rfId: e })
	] });
}
var Yv = Bn(({ position: e = "top-left", children: t, className: n, style: r, ...i }, a) => {
	let o = `${e}`.split("-");
	return X("div", {
		className: gd([
			"react-flow__panel",
			n,
			...o
		]),
		style: r,
		ref: a,
		...i,
		children: t
	});
});
Yv.displayName = "Panel";
function Xv({ proOptions: e, position: t = "bottom-right" }) {
	return e?.hideAttribution ? null : X(Yv, {
		position: t,
		className: "react-flow__attribution",
		"data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",
		children: X("a", {
			href: "https://reactflow.dev",
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "React Flow attribution",
			children: "React Flow"
		})
	});
}
var Zv = (e) => {
	let t = [], n = [];
	for (let [, n] of e.nodeLookup) n.selected && t.push(n.internals.userNode);
	for (let [, t] of e.edgeLookup) t.selected && n.push(t);
	return {
		selectedNodes: t,
		selectedEdges: n
	};
}, Qv = (e) => e.id;
function $v(e, t) {
	return Fv(e.selectedNodes.map(Qv), t.selectedNodes.map(Qv)) && Fv(e.selectedEdges.map(Qv), t.selectedEdges.map(Qv));
}
function ey({ onSelectionChange: e }) {
	let t = zv(), { selectedNodes: n, selectedEdges: r } = $(Zv, $v);
	return G(() => {
		let i = {
			nodes: n,
			edges: r
		};
		e?.(i), t.getState().onSelectionChangeHandlers.forEach((e) => e(i));
	}, [
		n,
		r,
		e
	]), null;
}
var ty = (e) => !!e.onSelectionChangeHandlers;
function ny({ onSelectionChange: e }) {
	let t = $(ty);
	return e || t ? X(ey, { onSelectionChange: e }) : null;
}
var ry = typeof window < "u" ? Kn : G, iy = [0, 0], ay = {
	x: 0,
	y: 0,
	zoom: 1
}, oy = [.../* @__PURE__ */ "nodes.edges.defaultNodes.defaultEdges.onConnect.onConnectStart.onConnectEnd.onClickConnectStart.onClickConnectEnd.nodesDraggable.autoPanOnNodeFocus.nodesConnectable.nodesFocusable.edgesFocusable.edgesReconnectable.elevateNodesOnSelect.elevateEdgesOnSelect.minZoom.maxZoom.nodeExtent.onNodesChange.onEdgesChange.elementsSelectable.connectionMode.snapGrid.snapToGrid.translateExtent.connectOnClick.defaultEdgeOptions.fitView.fitViewOptions.onNodesDelete.onEdgesDelete.onDelete.onNodeDrag.onNodeDragStart.onNodeDragStop.onSelectionDrag.onSelectionDragStart.onSelectionDragStop.onMoveStart.onMove.onMoveEnd.noPanClassName.nodeOrigin.autoPanOnConnect.autoPanOnNodeDrag.onError.connectionRadius.isValidConnection.selectNodesOnDrag.nodeDragThreshold.connectionDragThreshold.onBeforeDelete.debug.autoPanSpeed.ariaLabelConfig.zIndexMode".split("."), "rfId"], sy = (e) => ({
	setNodes: e.setNodes,
	setEdges: e.setEdges,
	setMinZoom: e.setMinZoom,
	setMaxZoom: e.setMaxZoom,
	setTranslateExtent: e.setTranslateExtent,
	setNodeExtent: e.setNodeExtent,
	reset: e.reset,
	setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), cy = {
	translateExtent: Rh,
	nodeOrigin: iy,
	minZoom: .5,
	maxZoom: 2,
	elementsSelectable: !0,
	noPanClassName: "nopan",
	rfId: "1"
};
function ly(e) {
	let { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: i, setTranslateExtent: a, setNodeExtent: o, reset: s, setDefaultNodesAndEdges: c } = $(sy, Fv), l = zv();
	ry(() => (c(e.defaultNodes, e.defaultEdges), () => {
		u.current = cy, s();
	}), []);
	let u = q(cy);
	return ry(() => {
		for (let s of oy) {
			let c = e[s];
			c !== u.current[s] && e[s] !== void 0 && (s === "nodes" ? t(c) : s === "edges" ? n(c) : s === "minZoom" ? r(c) : s === "maxZoom" ? i(c) : s === "translateExtent" ? a(c) : s === "nodeExtent" ? o(c) : s === "ariaLabelConfig" ? l.setState({ ariaLabelConfig: Ig(c) }) : s === "fitView" ? l.setState({ fitViewQueued: c }) : s === "fitViewOptions" ? l.setState({ fitViewOptions: c }) : l.setState({ [s]: c }));
		}
		u.current = e;
	}, oy.map((t) => e[t])), null;
}
function uy() {
	return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function dy(e) {
	let [t, n] = J(e === "system" ? null : e);
	return G(() => {
		if (e !== "system") {
			n(e);
			return;
		}
		let t = uy(), r = () => n(t?.matches ? "dark" : "light");
		return r(), t?.addEventListener("change", r), () => {
			t?.removeEventListener("change", r);
		};
	}, [e]), t === null ? uy()?.matches ? "dark" : "light" : t;
}
var fy = typeof document < "u" ? document : null;
function py(e = null, t = {
	target: fy,
	actInsideInputWithModifier: !0
}) {
	let [n, r] = J(!1), i = q(!1), a = q(/* @__PURE__ */ new Set([])), [o, s] = K(() => {
		if (e !== null) {
			let t = (Array.isArray(e) ? e : [e]).filter((e) => typeof e == "string").map((e) => e.replace("+", "\n").replace("\n\n", "\n+").split("\n"));
			return [t, t.reduce((e, t) => e.concat(...t), [])];
		}
		return [[], []];
	}, [e]);
	return G(() => {
		let n = t?.target ?? fy, c = t?.actInsideInputWithModifier ?? !0;
		if (e !== null) {
			let e = (e) => {
				if (i.current = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey, (!i.current || i.current && !c) && Vg(e)) return !1;
				let n = hy(e.code, s);
				if (a.current.add(e[n]), my(o, a.current, !1)) {
					let n = e.composedPath?.()?.[0] || e.target, a = n?.nodeName === "BUTTON" || n?.nodeName === "A";
					t.preventDefault !== !1 && (i.current || !a) && e.preventDefault(), r(!0);
				}
			}, l = (e) => {
				let t = hy(e.code, s);
				my(o, a.current, !0) ? (r(!1), a.current.clear()) : a.current.delete(e[t]), e.key === "Meta" && a.current.clear(), i.current = !1;
			}, u = () => {
				a.current.clear(), r(!1);
			};
			return n?.addEventListener("keydown", e), n?.addEventListener("keyup", l), window.addEventListener("blur", u), window.addEventListener("contextmenu", u), () => {
				n?.removeEventListener("keydown", e), n?.removeEventListener("keyup", l), window.removeEventListener("blur", u), window.removeEventListener("contextmenu", u);
			};
		}
	}, [e, r]), n;
}
function my(e, t, n) {
	return e.filter((e) => n || e.length === t.size).some((e) => e.every((e) => t.has(e)));
}
function hy(e, t) {
	return t.includes(e) ? "code" : "key";
}
var gy = () => {
	let e = zv();
	return K(() => ({
		zoomIn: (t) => {
			let { panZoom: n } = e.getState();
			return n ? n.scaleBy(1.2, t) : Promise.resolve(!1);
		},
		zoomOut: (t) => {
			let { panZoom: n } = e.getState();
			return n ? n.scaleBy(1 / 1.2, t) : Promise.resolve(!1);
		},
		zoomTo: (t, n) => {
			let { panZoom: r } = e.getState();
			return r ? r.scaleTo(t, n) : Promise.resolve(!1);
		},
		getZoom: () => e.getState().transform[2],
		setViewport: async (t, n) => {
			let { transform: [r, i, a], panZoom: o } = e.getState();
			return o ? (await o.setViewport({
				x: t.x ?? r,
				y: t.y ?? i,
				zoom: t.zoom ?? a
			}, n), Promise.resolve(!0)) : Promise.resolve(!1);
		},
		getViewport: () => {
			let [t, n, r] = e.getState().transform;
			return {
				x: t,
				y: n,
				zoom: r
			};
		},
		setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
		fitBounds: async (t, n) => {
			let { width: r, height: i, minZoom: a, maxZoom: o, panZoom: s } = e.getState(), c = Og(t, r, i, a, o, n?.padding ?? .1);
			return s ? (await s.setViewport(c, {
				duration: n?.duration,
				ease: n?.ease,
				interpolate: n?.interpolate
			}), Promise.resolve(!0)) : Promise.resolve(!1);
		},
		screenToFlowPosition: (t, n = {}) => {
			let { transform: r, snapGrid: i, snapToGrid: a, domNode: o } = e.getState();
			if (!o) return t;
			let { x: s, y: c } = o.getBoundingClientRect(), l = {
				x: t.x - s,
				y: t.y - c
			}, u = n.snapGrid ?? i;
			return Cg(l, r, n.snapToGrid ?? a, u);
		},
		flowToScreenPosition: (t) => {
			let { transform: n, domNode: r } = e.getState();
			if (!r) return t;
			let { x: i, y: a } = r.getBoundingClientRect(), o = wg(t, n);
			return {
				x: o.x + i,
				y: o.y + a
			};
		}
	}), []);
};
function _y(e, t) {
	let n = [], r = /* @__PURE__ */ new Map(), i = [];
	for (let t of e) if (t.type === "add") {
		i.push(t);
		continue;
	} else if (t.type === "remove" || t.type === "replace") r.set(t.id, [t]);
	else {
		let e = r.get(t.id);
		e ? e.push(t) : r.set(t.id, [t]);
	}
	for (let e of t) {
		let t = r.get(e.id);
		if (!t) {
			n.push(e);
			continue;
		}
		if (t[0].type === "remove") continue;
		if (t[0].type === "replace") {
			n.push({ ...t[0].item });
			continue;
		}
		let i = { ...e };
		for (let e of t) vy(e, i);
		n.push(i);
	}
	return i.length && i.forEach((e) => {
		e.index === void 0 ? n.push({ ...e.item }) : n.splice(e.index, 0, { ...e.item });
	}), n;
}
function vy(e, t) {
	switch (e.type) {
		case "select":
			t.selected = e.selected;
			break;
		case "position":
			e.position !== void 0 && (t.position = e.position), e.dragging !== void 0 && (t.dragging = e.dragging);
			break;
		case "dimensions": e.dimensions !== void 0 && (t.measured = { ...e.dimensions }, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
	}
}
function yy(e, t) {
	return _y(e, t);
}
function by(e, t) {
	return _y(e, t);
}
function xy(e, t) {
	return {
		id: e,
		type: "select",
		selected: t
	};
}
function Sy(e, t = /* @__PURE__ */ new Set(), n = !1) {
	let r = [];
	for (let [i, a] of e) {
		let e = t.has(i);
		!(a.selected === void 0 && !e) && a.selected !== e && (n && (a.selected = e), r.push(xy(a.id, e)));
	}
	return r;
}
function Cy({ items: e = [], lookup: t }) {
	let n = [], r = new Map(e.map((e) => [e.id, e]));
	for (let [r, i] of e.entries()) {
		let e = t.get(i.id), a = e?.internals?.userNode ?? e;
		a !== void 0 && a !== i && n.push({
			id: i.id,
			item: i,
			type: "replace"
		}), a === void 0 && n.push({
			item: i,
			type: "add",
			index: r
		});
	}
	for (let [e] of t) r.get(e) === void 0 && n.push({
		id: e,
		type: "remove"
	});
	return n;
}
function wy(e) {
	return {
		id: e.id,
		type: "remove"
	};
}
var Ty = (e) => Xh(e), Ey = (e) => Yh(e);
function Dy(e) {
	return Bn(e);
}
function Oy(e) {
	let [t, n] = J(BigInt(0)), [r] = J(() => ky(() => n((e) => e + BigInt(1))));
	return ry(() => {
		let t = r.get();
		t.length && (e(t), r.reset());
	}, [t]), r;
}
function ky(e) {
	let t = [];
	return {
		get: () => t,
		reset: () => {
			t = [];
		},
		push: (n) => {
			t.push(n), e();
		}
	};
}
var Ay = Rn(null);
function jy({ children: e }) {
	let t = zv(), n = Oy(W((e) => {
		let { nodes: n = [], setNodes: r, hasDefaultNodes: i, onNodesChange: a, nodeLookup: o, fitViewQueued: s, onNodesChangeMiddlewareMap: c } = t.getState(), l = n;
		for (let t of e) l = typeof t == "function" ? t(l) : t;
		let u = Cy({
			items: l,
			lookup: o
		});
		for (let e of c.values()) u = e(u);
		i && r(l), u.length > 0 ? a?.(u) : s && window.requestAnimationFrame(() => {
			let { fitViewQueued: e, nodes: n, setNodes: r } = t.getState();
			e && r(n);
		});
	}, [])), r = Oy(W((e) => {
		let { edges: n = [], setEdges: r, hasDefaultEdges: i, onEdgesChange: a, edgeLookup: o } = t.getState(), s = n;
		for (let t of e) s = typeof t == "function" ? t(s) : t;
		i ? r(s) : a && a(Cy({
			items: s,
			lookup: o
		}));
	}, [])), i = K(() => ({
		nodeQueue: n,
		edgeQueue: r
	}), []);
	return X(Ay.Provider, {
		value: i,
		children: e
	});
}
function My() {
	let e = Un(Ay);
	if (!e) throw Error("useBatchContext must be used within a BatchProvider");
	return e;
}
var Ny = (e) => !!e.panZoom;
function Py() {
	let e = gy(), t = zv(), n = My(), r = $(Ny), i = K(() => {
		let e = (e) => t.getState().nodeLookup.get(e), r = (e) => {
			n.nodeQueue.push(e);
		}, i = (e) => {
			n.edgeQueue.push(e);
		}, a = (e) => {
			let { nodeLookup: n, nodeOrigin: r } = t.getState(), i = Ty(e) ? e : n.get(e.id), a = i.parentId ? Ng(i.position, i.measured, i.parentId, n, r) : i.position;
			return hg({
				...i,
				position: a,
				width: i.measured?.width ?? i.width,
				height: i.measured?.height ?? i.height
			});
		}, o = (e, t, n = { replace: !1 }) => {
			r((r) => r.map((r) => {
				if (r.id === e) {
					let e = typeof t == "function" ? t(r) : t;
					return n.replace && Ty(e) ? e : {
						...r,
						...e
					};
				}
				return r;
			}));
		}, s = (e, t, n = { replace: !1 }) => {
			i((r) => r.map((r) => {
				if (r.id === e) {
					let e = typeof t == "function" ? t(r) : t;
					return n.replace && Ey(e) ? e : {
						...r,
						...e
					};
				}
				return r;
			}));
		};
		return {
			getNodes: () => t.getState().nodes.map((e) => ({ ...e })),
			getNode: (t) => e(t)?.internals.userNode,
			getInternalNode: e,
			getEdges: () => {
				let { edges: e = [] } = t.getState();
				return e.map((e) => ({ ...e }));
			},
			getEdge: (e) => t.getState().edgeLookup.get(e),
			setNodes: r,
			setEdges: i,
			addNodes: (e) => {
				let t = Array.isArray(e) ? e : [e];
				n.nodeQueue.push((e) => [...e, ...t]);
			},
			addEdges: (e) => {
				let t = Array.isArray(e) ? e : [e];
				n.edgeQueue.push((e) => [...e, ...t]);
			},
			toObject: () => {
				let { nodes: e = [], edges: n = [], transform: r } = t.getState(), [i, a, o] = r;
				return {
					nodes: e.map((e) => ({ ...e })),
					edges: n.map((e) => ({ ...e })),
					viewport: {
						x: i,
						y: a,
						zoom: o
					}
				};
			},
			deleteElements: async ({ nodes: e = [], edges: n = [] }) => {
				let { nodes: r, edges: i, onNodesDelete: a, onEdgesDelete: o, triggerNodeChanges: s, triggerEdgeChanges: c, onDelete: l, onBeforeDelete: u } = t.getState(), { nodes: d, edges: f } = await og({
					nodesToRemove: e,
					edgesToRemove: n,
					nodes: r,
					edges: i,
					onBeforeDelete: u
				}), p = f.length > 0, m = d.length > 0;
				if (p) {
					let e = f.map(wy);
					o?.(f), c(e);
				}
				if (m) {
					let e = d.map(wy);
					a?.(d), s(e);
				}
				return (m || p) && l?.({
					nodes: d,
					edges: f
				}), {
					deletedNodes: d,
					deletedEdges: f
				};
			},
			getIntersectingNodes: (e, n = !0, r) => {
				let i = yg(e), o = i ? e : a(e), s = r !== void 0;
				return o ? (r || t.getState().nodes).filter((r) => {
					let a = t.getState().nodeLookup.get(r.id);
					if (a && !i && (r.id === e.id || !a.internals.positionAbsolute)) return !1;
					let c = hg(s ? r : a), l = vg(c, o);
					return n && l > 0 || l >= c.width * c.height || l >= o.width * o.height;
				}) : [];
			},
			isNodeIntersecting: (e, t, n = !0) => {
				let r = yg(e) ? e : a(e);
				if (!r) return !1;
				let i = vg(r, t);
				return n && i > 0 || i >= t.width * t.height || i >= r.width * r.height;
			},
			updateNode: o,
			updateNodeData: (e, t, n = { replace: !1 }) => {
				o(e, (e) => {
					let r = typeof t == "function" ? t(e) : t;
					return n.replace ? {
						...e,
						data: r
					} : {
						...e,
						data: {
							...e.data,
							...r
						}
					};
				}, n);
			},
			updateEdge: s,
			updateEdgeData: (e, t, n = { replace: !1 }) => {
				s(e, (e) => {
					let r = typeof t == "function" ? t(e) : t;
					return n.replace ? {
						...e,
						data: r
					} : {
						...e,
						data: {
							...e.data,
							...r
						}
					};
				}, n);
			},
			getNodesBounds: (e) => {
				let { nodeLookup: n, nodeOrigin: r } = t.getState();
				return $h(e, {
					nodeLookup: n,
					nodeOrigin: r
				});
			},
			getHandleConnections: ({ type: e, id: n, nodeId: r }) => Array.from(t.getState().connectionLookup.get(`${r}-${e}${n ? `-${n}` : ""}`)?.values() ?? []),
			getNodeConnections: ({ type: e, handleId: n, nodeId: r }) => Array.from(t.getState().connectionLookup.get(`${r}${e ? n ? `-${e}-${n}` : `-${e}` : ""}`)?.values() ?? []),
			fitView: async (e) => {
				let r = t.getState().fitViewResolver ?? Fg();
				return t.setState({
					fitViewQueued: !0,
					fitViewOptions: e,
					fitViewResolver: r
				}), n.nodeQueue.push((e) => [...e]), r.promise;
			}
		};
	}, []);
	return K(() => ({
		...i,
		...e,
		viewportInitialized: r
	}), [r]);
}
var Fy = (e) => e.selected, Iy = typeof window < "u" ? window : void 0;
function Ly({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
	let n = zv(), { deleteElements: r } = Py(), i = py(e, { actInsideInputWithModifier: !1 }), a = py(t, { target: Iy });
	G(() => {
		if (i) {
			let { edges: e, nodes: t } = n.getState();
			r({
				nodes: t.filter(Fy),
				edges: e.filter(Fy)
			}), n.setState({ nodesSelectionActive: !1 });
		}
	}, [i]), G(() => {
		n.setState({ multiSelectionActive: a });
	}, [a]);
}
function Ry(e) {
	let t = zv();
	G(() => {
		let n = () => {
			if (!e.current || !(e.current.checkVisibility?.() ?? !0)) return !1;
			let n = Rg(e.current);
			(n.height === 0 || n.width === 0) && t.getState().onError?.("004", Lh.error004()), t.setState({
				width: n.width || 500,
				height: n.height || 500
			});
		};
		if (e.current) {
			n(), window.addEventListener("resize", n);
			let t = new ResizeObserver(() => n());
			return t.observe(e.current), () => {
				window.removeEventListener("resize", n), t && e.current && t.unobserve(e.current);
			};
		}
	}, []);
}
var zy = {
	position: "absolute",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0
}, By = (e) => ({
	userSelectionActive: e.userSelectionActive,
	lib: e.lib,
	connectionInProgress: e.connection.inProgress
});
function Vy({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: i = .5, panOnScrollMode: a = Hh.Free, zoomOnDoubleClick: o = !0, panOnDrag: s = !0, defaultViewport: c, translateExtent: l, minZoom: u, maxZoom: d, zoomActivationKeyCode: f, preventScrolling: p = !0, children: m, noWheelClassName: h, noPanClassName: g, onViewportChange: _, isControlledViewport: v, paneClickDistance: y, selectionOnDrag: b }) {
	let x = zv(), S = q(null), { userSelectionActive: C, lib: w, connectionInProgress: T } = $(By, Fv), E = py(f), D = q();
	Ry(S);
	let O = W((e) => {
		_?.({
			x: e[0],
			y: e[1],
			zoom: e[2]
		}), v || x.setState({ transform: e });
	}, [_, v]);
	return G(() => {
		if (S.current) {
			D.current = uv({
				domNode: S.current,
				minZoom: u,
				maxZoom: d,
				translateExtent: l,
				viewport: c,
				onDraggingChange: (e) => x.setState((t) => t.paneDragging === e ? t : { paneDragging: e }),
				onPanZoomStart: (e, t) => {
					let { onViewportChangeStart: n, onMoveStart: r } = x.getState();
					r?.(e, t), n?.(t);
				},
				onPanZoom: (e, t) => {
					let { onViewportChange: n, onMove: r } = x.getState();
					r?.(e, t), n?.(t);
				},
				onPanZoomEnd: (e, t) => {
					let { onViewportChangeEnd: n, onMoveEnd: r } = x.getState();
					r?.(e, t), n?.(t);
				}
			});
			let { x: e, y: t, zoom: n } = D.current.getViewport();
			return x.setState({
				panZoom: D.current,
				transform: [
					e,
					t,
					n
				],
				domNode: S.current.closest(".react-flow")
			}), () => {
				D.current?.destroy();
			};
		}
	}, []), G(() => {
		D.current?.update({
			onPaneContextMenu: e,
			zoomOnScroll: t,
			zoomOnPinch: n,
			panOnScroll: r,
			panOnScrollSpeed: i,
			panOnScrollMode: a,
			zoomOnDoubleClick: o,
			panOnDrag: s,
			zoomActivationKeyPressed: E,
			preventScrolling: p,
			noPanClassName: g,
			userSelectionActive: C,
			noWheelClassName: h,
			lib: w,
			onTransformChange: O,
			connectionInProgress: T,
			selectionOnDrag: b,
			paneClickDistance: y
		});
	}, [
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		E,
		p,
		g,
		C,
		h,
		w,
		O,
		T,
		b,
		y
	]), X("div", {
		className: "react-flow__renderer",
		ref: S,
		style: zy,
		children: m
	});
}
var Hy = (e) => ({
	userSelectionActive: e.userSelectionActive,
	userSelectionRect: e.userSelectionRect
});
function Uy() {
	let { userSelectionActive: e, userSelectionRect: t } = $(Hy, Fv);
	return e && t ? X("div", {
		className: "react-flow__selection react-flow__container",
		style: {
			width: t.width,
			height: t.height,
			transform: `translate(${t.x}px, ${t.y}px)`
		}
	}) : null;
}
var Wy = (e, t) => (n) => {
	n.target === t.current && e?.(n);
}, Gy = (e) => ({
	userSelectionActive: e.userSelectionActive,
	elementsSelectable: e.elementsSelectable,
	connectionInProgress: e.connection.inProgress,
	dragging: e.paneDragging
});
function Ky({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = Uh.Full, panOnDrag: r, paneClickDistance: i, selectionOnDrag: a, onSelectionStart: o, onSelectionEnd: s, onPaneClick: c, onPaneContextMenu: l, onPaneScroll: u, onPaneMouseEnter: d, onPaneMouseMove: f, onPaneMouseLeave: p, children: m }) {
	let h = zv(), { userSelectionActive: g, elementsSelectable: _, dragging: v, connectionInProgress: y } = $(Gy, Fv), b = _ && (e || g), x = q(null), S = q(), C = q(/* @__PURE__ */ new Set()), w = q(/* @__PURE__ */ new Set()), T = q(!1), E = (e) => {
		if (T.current || y) {
			T.current = !1;
			return;
		}
		c?.(e), h.getState().resetSelectedElements(), h.setState({ nodesSelectionActive: !1 });
	}, D = (e) => {
		if (Array.isArray(r) && r?.includes(2)) {
			e.preventDefault();
			return;
		}
		l?.(e);
	}, O = u ? (e) => u(e) : void 0, k = (e) => {
		T.current &&= (e.stopPropagation(), !1);
	}, A = (n) => {
		let { domNode: r } = h.getState();
		if (S.current = r?.getBoundingClientRect(), !S.current) return;
		let i = n.target === x.current;
		if (!i && n.target.closest(".nokey") || !e || !(a && i || t) || n.button !== 0 || !n.isPrimary) return;
		n.target?.setPointerCapture?.(n.pointerId), T.current = !1;
		let { x: o, y: s } = Ug(n.nativeEvent, S.current);
		h.setState({ userSelectionRect: {
			width: 0,
			height: 0,
			startX: o,
			startY: s,
			x: o,
			y: s
		} }), i || (n.stopPropagation(), n.preventDefault());
	}, j = (e) => {
		let { userSelectionRect: r, transform: a, nodeLookup: s, edgeLookup: c, connectionLookup: l, triggerNodeChanges: u, triggerEdgeChanges: d, defaultEdgeOptions: f, resetSelectedElements: p } = h.getState();
		if (!S.current || !r) return;
		let { x: m, y: g } = Ug(e.nativeEvent, S.current), { startX: _, startY: v } = r;
		if (!T.current) {
			let n = t ? 0 : i;
			if (Math.hypot(m - _, g - v) <= n) return;
			p(), o?.(e);
		}
		T.current = !0;
		let y = {
			startX: _,
			startY: v,
			x: m < _ ? m : _,
			y: g < v ? g : v,
			width: Math.abs(m - _),
			height: Math.abs(g - v)
		}, b = C.current, x = w.current;
		C.current = new Set(tg(s, y, a, n === Uh.Partial, !0).map((e) => e.id)), w.current = /* @__PURE__ */ new Set();
		let E = f?.selectable ?? !0;
		for (let e of C.current) {
			let t = l.get(e);
			if (t) for (let { edgeId: e } of t.values()) {
				let t = c.get(e);
				t && (t.selectable ?? E) && w.current.add(e);
			}
		}
		Pg(b, C.current) || u(Sy(s, C.current, !0)), Pg(x, w.current) || d(Sy(c, w.current)), h.setState({
			userSelectionRect: y,
			userSelectionActive: !0,
			nodesSelectionActive: !1
		});
	}, M = (e) => {
		e.button === 0 && (e.target?.releasePointerCapture?.(e.pointerId), !g && e.target === x.current && h.getState().userSelectionRect && E?.(e), h.setState({
			userSelectionActive: !1,
			userSelectionRect: null
		}), T.current && (s?.(e), h.setState({ nodesSelectionActive: C.current.size > 0 })));
	}, N = r === !0 || Array.isArray(r) && r.includes(0);
	return Z("div", {
		className: gd(["react-flow__pane", {
			draggable: N,
			dragging: v,
			selection: e
		}]),
		onClick: b ? void 0 : Wy(E, x),
		onContextMenu: Wy(D, x),
		onWheel: Wy(O, x),
		onPointerEnter: b ? void 0 : d,
		onPointerMove: b ? j : f,
		onPointerUp: b ? M : void 0,
		onPointerDownCapture: b ? A : void 0,
		onClickCapture: b ? k : void 0,
		onPointerLeave: p,
		ref: x,
		style: zy,
		children: [m, X(Uy, {})]
	});
}
function qy({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
	let { addSelectedNodes: i, unselectNodesAndEdges: a, multiSelectionActive: o, nodeLookup: s, onError: c } = t.getState(), l = s.get(e);
	if (!l) {
		c?.("012", Lh.error012(e));
		return;
	}
	t.setState({ nodesSelectionActive: !1 }), l.selected ? (n || l.selected && o) && (a({
		nodes: [l],
		edges: []
	}), requestAnimationFrame(() => r?.current?.blur())) : i([e]);
}
function Jy({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: i, isSelectable: a, nodeClickDistance: o }) {
	let s = zv(), [c, l] = J(!1), u = q();
	return G(() => {
		u.current = z_({
			getStoreItems: () => s.getState(),
			onNodeMouseDown: (t) => {
				qy({
					id: t,
					store: s,
					nodeRef: e
				});
			},
			onDragStart: () => {
				l(!0);
			},
			onDragStop: () => {
				l(!1);
			}
		});
	}, []), G(() => {
		if (!(t || !e.current || !u.current)) return u.current.update({
			noDragClassName: n,
			handleSelector: r,
			domNode: e.current,
			isSelectable: a,
			nodeId: i,
			nodeClickDistance: o
		}), () => {
			u.current?.destroy();
		};
	}, [
		n,
		r,
		t,
		a,
		e,
		i,
		o
	]), c;
}
var Yy = (e) => (t) => t.selected && (t.draggable || e && t.draggable === void 0);
function Xy() {
	let e = zv();
	return W((t) => {
		let { nodeExtent: n, snapToGrid: r, snapGrid: i, nodesDraggable: a, onError: o, updateNodePositions: s, nodeLookup: c, nodeOrigin: l } = e.getState(), u = /* @__PURE__ */ new Map(), d = Yy(a), f = r ? i[0] : 5, p = r ? i[1] : 5, m = t.direction.x * f * t.factor, h = t.direction.y * p * t.factor;
		for (let [, e] of c) {
			if (!d(e)) continue;
			let t = {
				x: e.internals.positionAbsolute.x + m,
				y: e.internals.positionAbsolute.y + h
			};
			r && (t = Sg(t, i));
			let { position: a, positionAbsolute: s } = ag({
				nodeId: e.id,
				nextPosition: t,
				nodeLookup: c,
				nodeExtent: n,
				nodeOrigin: l,
				onError: o
			});
			e.position = a, e.internals.positionAbsolute = s, u.set(e.id, e);
		}
		s(u);
	}, []);
}
var Zy = Rn(null), Qy = Zy.Provider;
Zy.Consumer;
var $y = () => Un(Zy), eb = (e) => ({
	connectOnClick: e.connectOnClick,
	noPanClassName: e.noPanClassName,
	rfId: e.rfId
}), tb = (e, t, n) => (r) => {
	let { connectionClickStartHandle: i, connectionMode: a, connection: o } = r, { fromHandle: s, toHandle: c, isValid: l } = o, u = c?.nodeId === e && c?.id === t && c?.type === n;
	return {
		connectingFrom: s?.nodeId === e && s?.id === t && s?.type === n,
		connectingTo: u,
		clickConnecting: i?.nodeId === e && i?.id === t && i?.type === n,
		isPossibleEndHandle: a === Vh.Strict ? s?.type !== n : e !== s?.nodeId || t !== s?.id,
		connectionInProcess: !!s,
		clickConnectionInProcess: !!i,
		valid: u && l
	};
};
function nb({ type: e = "source", position: t = Q.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: o, onConnect: s, children: c, className: l, onMouseDown: u, onTouchStart: d, ...f }, p) {
	let m = o || null, h = e === "target", g = zv(), _ = $y(), { connectOnClick: v, noPanClassName: y, rfId: b } = $(eb, Fv), { connectingFrom: x, connectingTo: S, clickConnecting: C, isPossibleEndHandle: w, connectionInProcess: T, clickConnectionInProcess: E, valid: D } = $(tb(_, m, e), Fv);
	_ || g.getState().onError?.("010", Lh.error010());
	let O = (e) => {
		let { defaultEdgeOptions: t, onConnect: n, hasDefaultEdges: r } = g.getState(), i = {
			...t,
			...e
		};
		if (r) {
			let { edges: e, setEdges: t } = g.getState();
			t(e_(i, e));
		}
		n?.(i), s?.(i);
	}, k = (e) => {
		if (!_) return;
		let t = Hg(e.nativeEvent);
		if (i && (t && e.button === 0 || !t)) {
			let t = g.getState();
			Y_.onPointerDown(e.nativeEvent, {
				handleDomNode: e.currentTarget,
				autoPanOnConnect: t.autoPanOnConnect,
				connectionMode: t.connectionMode,
				connectionRadius: t.connectionRadius,
				domNode: t.domNode,
				nodeLookup: t.nodeLookup,
				lib: t.lib,
				isTarget: h,
				handleId: m,
				nodeId: _,
				flowId: t.rfId,
				panBy: t.panBy,
				cancelConnection: t.cancelConnection,
				onConnectStart: t.onConnectStart,
				onConnectEnd: (...e) => g.getState().onConnectEnd?.(...e),
				updateConnection: t.updateConnection,
				onConnect: O,
				isValidConnection: n || ((...e) => g.getState().isValidConnection?.(...e) ?? !0),
				getTransform: () => g.getState().transform,
				getFromHandle: () => g.getState().connection.fromHandle,
				autoPanSpeed: t.autoPanSpeed,
				dragThreshold: t.connectionDragThreshold
			});
		}
		t ? u?.(e) : d?.(e);
	};
	return X("div", {
		"data-handleid": m,
		"data-nodeid": _,
		"data-handlepos": t,
		"data-id": `${b}-${_}-${m}-${e}`,
		className: gd([
			"react-flow__handle",
			`react-flow__handle-${t}`,
			"nodrag",
			y,
			l,
			{
				source: !h,
				target: h,
				connectable: r,
				connectablestart: i,
				connectableend: a,
				clickconnecting: C,
				connectingfrom: x,
				connectingto: S,
				valid: D,
				connectionindicator: r && (!T || w) && (T || E ? a : i)
			}
		]),
		onMouseDown: k,
		onTouchStart: k,
		onClick: v ? (t) => {
			let { onClickConnectStart: r, onClickConnectEnd: a, connectionClickStartHandle: o, connectionMode: s, isValidConnection: c, lib: l, rfId: u, nodeLookup: d, connection: f } = g.getState();
			if (!_ || !o && !i) return;
			if (!o) {
				r?.(t.nativeEvent, {
					nodeId: _,
					handleId: m,
					handleType: e
				}), g.setState({ connectionClickStartHandle: {
					nodeId: _,
					type: e,
					id: m
				} });
				return;
			}
			let p = zg(t.target), h = n || c, { connection: v, isValid: y } = Y_.isValid(t.nativeEvent, {
				handle: {
					nodeId: _,
					id: m,
					type: e
				},
				connectionMode: s,
				fromNodeId: o.nodeId,
				fromHandleId: o.id || null,
				fromType: o.type,
				isValidConnection: h,
				flowId: u,
				doc: p,
				lib: l,
				nodeLookup: d
			});
			y && v && O(v);
			let b = structuredClone(f);
			delete b.inProgress, b.toPosition = b.toHandle ? b.toHandle.position : null, a?.(t, b), g.setState({ connectionClickStartHandle: null });
		} : void 0,
		ref: p,
		...f,
		children: c
	});
}
var rb = Hn(Dy(nb));
function ib({ data: e, isConnectable: t, sourcePosition: n = Q.Bottom }) {
	return Z(Y, { children: [e?.label, X(rb, {
		type: "source",
		position: n,
		isConnectable: t
	})] });
}
function ab({ data: e, isConnectable: t, targetPosition: n = Q.Top, sourcePosition: r = Q.Bottom }) {
	return Z(Y, { children: [
		X(rb, {
			type: "target",
			position: n,
			isConnectable: t
		}),
		e?.label,
		X(rb, {
			type: "source",
			position: r,
			isConnectable: t
		})
	] });
}
function ob() {
	return null;
}
function sb({ data: e, isConnectable: t, targetPosition: n = Q.Top }) {
	return Z(Y, { children: [X(rb, {
		type: "target",
		position: n,
		isConnectable: t
	}), e?.label] });
}
var cb = {
	ArrowUp: {
		x: 0,
		y: -1
	},
	ArrowDown: {
		x: 0,
		y: 1
	},
	ArrowLeft: {
		x: -1,
		y: 0
	},
	ArrowRight: {
		x: 1,
		y: 0
	}
}, lb = {
	input: ib,
	default: ab,
	output: sb,
	group: ob
};
function ub(e) {
	return e.internals.handleBounds === void 0 ? {
		width: e.width ?? e.initialWidth ?? e.style?.width,
		height: e.height ?? e.initialHeight ?? e.style?.height
	} : {
		width: e.width ?? e.style?.width,
		height: e.height ?? e.style?.height
	};
}
var db = (e) => {
	let { width: t, height: n, x: r, y: i } = eg(e.nodeLookup, { filter: (e) => !!e.selected });
	return {
		width: bg(t) ? t : null,
		height: bg(n) ? n : null,
		userSelectionActive: e.userSelectionActive,
		transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`
	};
};
function fb({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
	let r = zv(), { width: i, height: a, transformString: o, userSelectionActive: s } = $(db, Fv), c = Xy(), l = q(null);
	G(() => {
		n || l.current?.focus({ preventScroll: !0 });
	}, [n]);
	let u = !s && i !== null && a !== null;
	if (Jy({
		nodeRef: l,
		disabled: !u
	}), !u) return null;
	let d = e ? (t) => {
		e(t, r.getState().nodes.filter((e) => e.selected));
	} : void 0;
	return X("div", {
		className: gd([
			"react-flow__nodesselection",
			"react-flow__container",
			t
		]),
		style: { transform: o },
		children: X("div", {
			ref: l,
			className: "react-flow__nodesselection-rect",
			onContextMenu: d,
			tabIndex: n ? void 0 : -1,
			onKeyDown: n ? void 0 : (e) => {
				Object.prototype.hasOwnProperty.call(cb, e.key) && (e.preventDefault(), c({
					direction: cb[e.key],
					factor: e.shiftKey ? 4 : 1
				}));
			},
			style: {
				width: i,
				height: a
			}
		})
	});
}
var pb = typeof window < "u" ? window : void 0, mb = (e) => ({
	nodesSelectionActive: e.nodesSelectionActive,
	userSelectionActive: e.userSelectionActive
});
function hb({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: o, paneClickDistance: s, deleteKeyCode: c, selectionKeyCode: l, selectionOnDrag: u, selectionMode: d, onSelectionStart: f, onSelectionEnd: p, multiSelectionKeyCode: m, panActivationKeyCode: h, zoomActivationKeyCode: g, elementsSelectable: _, zoomOnScroll: v, zoomOnPinch: y, panOnScroll: b, panOnScrollSpeed: x, panOnScrollMode: S, zoomOnDoubleClick: C, panOnDrag: w, defaultViewport: T, translateExtent: E, minZoom: D, maxZoom: O, preventScrolling: k, onSelectionContextMenu: A, noWheelClassName: j, noPanClassName: M, disableKeyboardA11y: N, onViewportChange: P, isControlledViewport: F }) {
	let { nodesSelectionActive: I, userSelectionActive: L } = $(mb, Fv), R = py(l, { target: pb }), z = py(h, { target: pb }), B = z || w, V = z || b, H = u && B !== !0, ee = R || L || H;
	return Ly({
		deleteKeyCode: c,
		multiSelectionKeyCode: m
	}), X(Vy, {
		onPaneContextMenu: a,
		elementsSelectable: _,
		zoomOnScroll: v,
		zoomOnPinch: y,
		panOnScroll: V,
		panOnScrollSpeed: x,
		panOnScrollMode: S,
		zoomOnDoubleClick: C,
		panOnDrag: !R && B,
		defaultViewport: T,
		translateExtent: E,
		minZoom: D,
		maxZoom: O,
		zoomActivationKeyCode: g,
		preventScrolling: k,
		noWheelClassName: j,
		noPanClassName: M,
		onViewportChange: P,
		isControlledViewport: F,
		paneClickDistance: s,
		selectionOnDrag: H,
		children: Z(Ky, {
			onSelectionStart: f,
			onSelectionEnd: p,
			onPaneClick: t,
			onPaneMouseEnter: n,
			onPaneMouseMove: r,
			onPaneMouseLeave: i,
			onPaneContextMenu: a,
			onPaneScroll: o,
			panOnDrag: B,
			isSelecting: !!ee,
			selectionMode: d,
			selectionKeyPressed: R,
			paneClickDistance: s,
			selectionOnDrag: H,
			children: [e, I && X(fb, {
				onSelectionContextMenu: A,
				noPanClassName: M,
				disableKeyboardA11y: N
			})]
		})
	});
}
hb.displayName = "FlowRenderer";
var gb = Hn(hb), _b = (e) => (t) => e ? tg(t.nodeLookup, {
	x: 0,
	y: 0,
	width: t.width,
	height: t.height
}, t.transform, !0).map((e) => e.id) : Array.from(t.nodeLookup.keys());
function vb(e) {
	return $(W(_b(e), [e]), Fv);
}
var yb = (e) => e.updateNodeInternals;
function bb() {
	let e = $(yb), [t] = J(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((t) => {
		let n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = e.target.getAttribute("data-id");
			n.set(t, {
				id: t,
				nodeElement: e.target,
				force: !0
			});
		}), e(n);
	}));
	return G(() => () => {
		t?.disconnect();
	}, [t]), t;
}
function xb({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
	let i = zv(), a = q(null), o = q(null), s = q(e.sourcePosition), c = q(e.targetPosition), l = q(t), u = n && !!e.internals.handleBounds;
	return G(() => {
		a.current && !e.hidden && (!u || o.current !== a.current) && (o.current && r?.unobserve(o.current), r?.observe(a.current), o.current = a.current);
	}, [u, e.hidden]), G(() => () => {
		o.current &&= (r?.unobserve(o.current), null);
	}, []), G(() => {
		if (a.current) {
			let n = l.current !== t, r = s.current !== e.sourcePosition, o = c.current !== e.targetPosition;
			(n || r || o) && (l.current = t, s.current = e.sourcePosition, c.current = e.targetPosition, i.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, {
				id: e.id,
				nodeElement: a.current,
				force: !0
			}]])));
		}
	}, [
		e.id,
		t,
		e.sourcePosition,
		e.targetPosition
	]), a;
}
function Sb({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: i, onContextMenu: a, onDoubleClick: o, nodesDraggable: s, elementsSelectable: c, nodesConnectable: l, nodesFocusable: u, resizeObserver: d, noDragClassName: f, noPanClassName: p, disableKeyboardA11y: m, rfId: h, nodeTypes: g, nodeClickDistance: _, onError: v }) {
	let { node: y, internals: b, isParent: x } = $((t) => {
		let n = t.nodeLookup.get(e), r = t.parentLookup.has(e);
		return {
			node: n,
			internals: n.internals,
			isParent: r
		};
	}, Fv), S = y.type || "default", C = g?.[S] || lb[S];
	C === void 0 && (v?.("003", Lh.error003(S)), S = "default", C = g?.default || lb.default);
	let w = !!(y.draggable || s && y.draggable === void 0), T = !!(y.selectable || c && y.selectable === void 0), E = !!(y.connectable || l && y.connectable === void 0), D = !!(y.focusable || u && y.focusable === void 0), O = zv(), k = Mg(y), A = xb({
		node: y,
		nodeType: S,
		hasDimensions: k,
		resizeObserver: d
	}), j = Jy({
		nodeRef: A,
		disabled: y.hidden || !w,
		noDragClassName: f,
		handleSelector: y.dragHandle,
		nodeId: e,
		isSelectable: T,
		nodeClickDistance: _
	}), M = Xy();
	if (y.hidden) return null;
	let N = jg(y), P = ub(y), F = T || w || t || n || r || i, I = n ? (e) => n(e, { ...b.userNode }) : void 0, L = r ? (e) => r(e, { ...b.userNode }) : void 0, R = i ? (e) => i(e, { ...b.userNode }) : void 0, z = a ? (e) => a(e, { ...b.userNode }) : void 0, B = o ? (e) => o(e, { ...b.userNode }) : void 0, V = (n) => {
		let { selectNodesOnDrag: r, nodeDragThreshold: i } = O.getState();
		T && (!r || !w || i > 0) && qy({
			id: e,
			store: O,
			nodeRef: A
		}), t && t(n, { ...b.userNode });
	}, H = (t) => {
		if (!(Vg(t.nativeEvent) || m)) {
			if (zh.includes(t.key) && T) {
				let n = t.key === "Escape";
				qy({
					id: e,
					store: O,
					unselect: n,
					nodeRef: A
				});
			} else if (w && y.selected && Object.prototype.hasOwnProperty.call(cb, t.key)) {
				t.preventDefault();
				let { ariaLabelConfig: e } = O.getState();
				O.setState({ ariaLiveMessage: e["node.a11yDescription.ariaLiveMessage"]({
					direction: t.key.replace("Arrow", "").toLowerCase(),
					x: ~~b.positionAbsolute.x,
					y: ~~b.positionAbsolute.y
				}) }), M({
					direction: cb[t.key],
					factor: t.shiftKey ? 4 : 1
				});
			}
		}
	}, ee = () => {
		if (m || !A.current?.matches(":focus-visible")) return;
		let { transform: t, width: n, height: r, autoPanOnNodeFocus: i, setCenter: a } = O.getState();
		i && (tg(/* @__PURE__ */ new Map([[e, y]]), {
			x: 0,
			y: 0,
			width: n,
			height: r
		}, t, !0).length > 0 || a(y.position.x + N.width / 2, y.position.y + N.height / 2, { zoom: t[2] }));
	};
	return X("div", {
		className: gd([
			"react-flow__node",
			`react-flow__node-${S}`,
			{ [p]: w },
			y.className,
			{
				selected: y.selected,
				selectable: T,
				parent: x,
				draggable: w,
				dragging: j
			}
		]),
		ref: A,
		style: {
			zIndex: b.z,
			transform: `translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,
			pointerEvents: F ? "all" : "none",
			visibility: k ? "visible" : "hidden",
			...y.style,
			...P
		},
		"data-id": e,
		"data-testid": `rf__node-${e}`,
		onMouseEnter: I,
		onMouseMove: L,
		onMouseLeave: R,
		onContextMenu: z,
		onClick: V,
		onDoubleClick: B,
		onKeyDown: D ? H : void 0,
		tabIndex: D ? 0 : void 0,
		onFocus: D ? ee : void 0,
		role: y.ariaRole ?? (D ? "group" : void 0),
		"aria-roledescription": "node",
		"aria-describedby": m ? void 0 : `${Hv}-${h}`,
		"aria-label": y.ariaLabel,
		...y.domAttributes,
		children: X(Qy, {
			value: e,
			children: X(C, {
				id: e,
				data: y.data,
				type: S,
				positionAbsoluteX: b.positionAbsolute.x,
				positionAbsoluteY: b.positionAbsolute.y,
				selected: y.selected ?? !1,
				selectable: T,
				draggable: w,
				deletable: y.deletable ?? !0,
				isConnectable: E,
				sourcePosition: y.sourcePosition,
				targetPosition: y.targetPosition,
				dragging: j,
				dragHandle: y.dragHandle,
				zIndex: b.z,
				parentId: y.parentId,
				...N
			})
		})
	});
}
var Cb = Hn(Sb), wb = (e) => ({
	nodesDraggable: e.nodesDraggable,
	nodesConnectable: e.nodesConnectable,
	nodesFocusable: e.nodesFocusable,
	elementsSelectable: e.elementsSelectable,
	onError: e.onError
});
function Tb(e) {
	let { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: i, onError: a } = $(wb, Fv), o = vb(e.onlyRenderVisibleElements), s = bb();
	return X("div", {
		className: "react-flow__nodes",
		style: zy,
		children: o.map((o) => X(Cb, {
			id: o,
			nodeTypes: e.nodeTypes,
			nodeExtent: e.nodeExtent,
			onClick: e.onNodeClick,
			onMouseEnter: e.onNodeMouseEnter,
			onMouseMove: e.onNodeMouseMove,
			onMouseLeave: e.onNodeMouseLeave,
			onContextMenu: e.onNodeContextMenu,
			onDoubleClick: e.onNodeDoubleClick,
			noDragClassName: e.noDragClassName,
			noPanClassName: e.noPanClassName,
			rfId: e.rfId,
			disableKeyboardA11y: e.disableKeyboardA11y,
			resizeObserver: s,
			nodesDraggable: t,
			nodesConnectable: n,
			nodesFocusable: r,
			elementsSelectable: i,
			nodeClickDistance: e.nodeClickDistance,
			onError: a
		}, o))
	});
}
Tb.displayName = "NodeRenderer";
var Eb = Hn(Tb);
function Db(e) {
	return $(W((t) => {
		if (!e) return t.edges.map((e) => e.id);
		let n = [];
		if (t.width && t.height) for (let e of t.edges) {
			let r = t.nodeLookup.get(e.source), i = t.nodeLookup.get(e.target);
			r && i && Zg({
				sourceNode: r,
				targetNode: i,
				width: t.width,
				height: t.height,
				transform: t.transform
			}) && n.push(e.id);
		}
		return n;
	}, [e]), Fv);
}
var Ob = ({ color: e = "none", strokeWidth: t = 1 }) => {
	let n = {
		strokeWidth: t,
		...e && { stroke: e }
	};
	return X("polyline", {
		className: "arrow",
		style: n,
		strokeLinecap: "round",
		fill: "none",
		strokeLinejoin: "round",
		points: "-5,-4 0,0 -5,4"
	});
}, kb = ({ color: e = "none", strokeWidth: t = 1 }) => {
	let n = {
		strokeWidth: t,
		...e && {
			stroke: e,
			fill: e
		}
	};
	return X("polyline", {
		className: "arrowclosed",
		style: n,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		points: "-5,-4 0,0 -5,4 -5,-4"
	});
}, Ab = {
	[Kh.Arrow]: Ob,
	[Kh.ArrowClosed]: kb
};
function jb(e) {
	let t = zv();
	return K(() => Object.prototype.hasOwnProperty.call(Ab, e) ? Ab[e] : (t.getState().onError?.("009", Lh.error009(e)), null), [e]);
}
var Mb = ({ id: e, type: t, color: n, width: r = 12.5, height: i = 12.5, markerUnits: a = "strokeWidth", strokeWidth: o, orient: s = "auto-start-reverse" }) => {
	let c = jb(t);
	return c ? X("marker", {
		className: "react-flow__arrowhead",
		id: e,
		markerWidth: `${r}`,
		markerHeight: `${i}`,
		viewBox: "-10 -10 20 20",
		markerUnits: a,
		orient: s,
		refX: "0",
		refY: "0",
		children: X(c, {
			color: n,
			strokeWidth: o
		})
	}) : null;
}, Nb = ({ defaultColor: e, rfId: t }) => {
	let n = $((e) => e.edges), r = $((e) => e.defaultEdgeOptions), i = K(() => m_(n, {
		id: t,
		defaultColor: e,
		defaultMarkerStart: r?.markerStart,
		defaultMarkerEnd: r?.markerEnd
	}), [
		n,
		r,
		t,
		e
	]);
	return i.length ? X("svg", {
		className: "react-flow__marker",
		"aria-hidden": "true",
		children: X("defs", { children: i.map((e) => X(Mb, {
			id: e.id,
			type: e.type,
			color: e.color,
			width: e.width,
			height: e.height,
			markerUnits: e.markerUnits,
			strokeWidth: e.strokeWidth,
			orient: e.orient
		}, e.id)) })
	}) : null;
};
Nb.displayName = "MarkerDefinitions";
var Pb = Hn(Nb);
function Fb({ x: e, y: t, label: n, labelStyle: r, labelShowBg: i = !0, labelBgStyle: a, labelBgPadding: o = [2, 4], labelBgBorderRadius: s = 2, children: c, className: l, ...u }) {
	let [d, f] = J({
		x: 1,
		y: 0,
		width: 0,
		height: 0
	}), p = gd(["react-flow__edge-textwrapper", l]), m = q(null);
	return G(() => {
		if (m.current) {
			let e = m.current.getBBox();
			f({
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height
			});
		}
	}, [n]), n ? Z("g", {
		transform: `translate(${e - d.width / 2} ${t - d.height / 2})`,
		className: p,
		visibility: d.width ? "visible" : "hidden",
		...u,
		children: [
			i && X("rect", {
				width: d.width + 2 * o[0],
				x: -o[0],
				y: -o[1],
				height: d.height + 2 * o[1],
				className: "react-flow__edge-textbg",
				style: a,
				rx: s,
				ry: s
			}),
			X("text", {
				className: "react-flow__edge-text",
				y: d.height / 2,
				dy: "0.3em",
				ref: m,
				style: r,
				children: n
			}),
			c
		]
	}) : null;
}
Fb.displayName = "EdgeText";
var Ib = Hn(Fb);
function Lb({ path: e, labelX: t, labelY: n, label: r, labelStyle: i, labelShowBg: a, labelBgStyle: o, labelBgPadding: s, labelBgBorderRadius: c, interactionWidth: l = 20, ...u }) {
	return Z(Y, { children: [
		X("path", {
			...u,
			d: e,
			fill: "none",
			className: gd(["react-flow__edge-path", u.className])
		}),
		l ? X("path", {
			d: e,
			fill: "none",
			strokeOpacity: 0,
			strokeWidth: l,
			className: "react-flow__edge-interaction"
		}) : null,
		r && bg(t) && bg(n) ? X(Ib, {
			x: t,
			y: n,
			label: r,
			labelStyle: i,
			labelShowBg: a,
			labelBgStyle: o,
			labelBgPadding: s,
			labelBgBorderRadius: c
		}) : null
	] });
}
function Rb({ pos: e, x1: t, y1: n, x2: r, y2: i }) {
	return e === Q.Left || e === Q.Right ? [.5 * (t + r), n] : [t, .5 * (n + i)];
}
function zb({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top }) {
	let [o, s] = Rb({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i
	}), [c, l] = Rb({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t
	}), [u, d, f, p] = Gg({
		sourceX: e,
		sourceY: t,
		targetX: r,
		targetY: i,
		sourceControlX: o,
		sourceControlY: s,
		targetControlX: c,
		targetControlY: l
	});
	return [
		`M${e},${t} C${o},${s} ${c},${l} ${r},${i}`,
		u,
		d,
		f,
		p
	];
}
function Bb(e) {
	return Hn(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, sourcePosition: o, targetPosition: s, label: c, labelStyle: l, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: p, style: m, markerEnd: h, markerStart: g, interactionWidth: _ }) => {
		let [v, y, b] = zb({
			sourceX: n,
			sourceY: r,
			sourcePosition: o,
			targetX: i,
			targetY: a,
			targetPosition: s
		}), x = e.isInternal ? void 0 : t;
		return X(Lb, {
			id: x,
			path: v,
			labelX: y,
			labelY: b,
			label: c,
			labelStyle: l,
			labelShowBg: u,
			labelBgStyle: d,
			labelBgPadding: f,
			labelBgBorderRadius: p,
			style: m,
			markerEnd: h,
			markerStart: g,
			interactionWidth: _
		});
	});
}
var Vb = Bb({ isInternal: !1 }), Hb = Bb({ isInternal: !0 });
Vb.displayName = "SimpleBezierEdge", Hb.displayName = "SimpleBezierEdgeInternal";
function Ub(e) {
	return Hn(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: d, style: f, sourcePosition: p = Q.Bottom, targetPosition: m = Q.Top, markerEnd: h, markerStart: g, pathOptions: _, interactionWidth: v }) => {
		let [y, b, x] = s_({
			sourceX: n,
			sourceY: r,
			sourcePosition: p,
			targetX: i,
			targetY: a,
			targetPosition: m,
			borderRadius: _?.borderRadius,
			offset: _?.offset,
			stepPosition: _?.stepPosition
		}), S = e.isInternal ? void 0 : t;
		return X(Lb, {
			id: S,
			path: y,
			labelX: b,
			labelY: x,
			label: o,
			labelStyle: s,
			labelShowBg: c,
			labelBgStyle: l,
			labelBgPadding: u,
			labelBgBorderRadius: d,
			style: f,
			markerEnd: h,
			markerStart: g,
			interactionWidth: v
		});
	});
}
var Wb = Ub({ isInternal: !1 }), Gb = Ub({ isInternal: !0 });
Wb.displayName = "SmoothStepEdge", Gb.displayName = "SmoothStepEdgeInternal";
function Kb(e) {
	return Hn(({ id: t, ...n }) => {
		let r = e.isInternal ? void 0 : t;
		return X(Wb, {
			...n,
			id: r,
			pathOptions: K(() => ({
				borderRadius: 0,
				offset: n.pathOptions?.offset
			}), [n.pathOptions?.offset])
		});
	});
}
var qb = Kb({ isInternal: !1 }), Jb = Kb({ isInternal: !0 });
qb.displayName = "StepEdge", Jb.displayName = "StepEdgeInternal";
function Yb(e) {
	return Hn(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: d, style: f, markerEnd: p, markerStart: m, interactionWidth: h }) => {
		let [g, _, v] = t_({
			sourceX: n,
			sourceY: r,
			targetX: i,
			targetY: a
		}), y = e.isInternal ? void 0 : t;
		return X(Lb, {
			id: y,
			path: g,
			labelX: _,
			labelY: v,
			label: o,
			labelStyle: s,
			labelShowBg: c,
			labelBgStyle: l,
			labelBgPadding: u,
			labelBgBorderRadius: d,
			style: f,
			markerEnd: p,
			markerStart: m,
			interactionWidth: h
		});
	});
}
var Xb = Yb({ isInternal: !1 }), Zb = Yb({ isInternal: !0 });
Xb.displayName = "StraightEdge", Zb.displayName = "StraightEdgeInternal";
function Qb(e) {
	return Hn(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, sourcePosition: o = Q.Bottom, targetPosition: s = Q.Top, label: c, labelStyle: l, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: p, style: m, markerEnd: h, markerStart: g, pathOptions: _, interactionWidth: v }) => {
		let [y, b, x] = Jg({
			sourceX: n,
			sourceY: r,
			sourcePosition: o,
			targetX: i,
			targetY: a,
			targetPosition: s,
			curvature: _?.curvature
		}), S = e.isInternal ? void 0 : t;
		return X(Lb, {
			id: S,
			path: y,
			labelX: b,
			labelY: x,
			label: c,
			labelStyle: l,
			labelShowBg: u,
			labelBgStyle: d,
			labelBgPadding: f,
			labelBgBorderRadius: p,
			style: m,
			markerEnd: h,
			markerStart: g,
			interactionWidth: v
		});
	});
}
var $b = Qb({ isInternal: !1 }), ex = Qb({ isInternal: !0 });
$b.displayName = "BezierEdge", ex.displayName = "BezierEdgeInternal";
var tx = {
	default: ex,
	straight: Zb,
	step: Jb,
	smoothstep: Gb,
	simplebezier: Hb
}, nx = {
	sourceX: null,
	sourceY: null,
	targetX: null,
	targetY: null,
	sourcePosition: null,
	targetPosition: null
}, rx = (e, t, n) => n === Q.Left ? e - t : n === Q.Right ? e + t : e, ix = (e, t, n) => n === Q.Top ? e - t : n === Q.Bottom ? e + t : e, ax = "react-flow__edgeupdater";
function ox({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: o, type: s }) {
	return X("circle", {
		onMouseDown: i,
		onMouseEnter: a,
		onMouseOut: o,
		className: gd([ax, `${ax}-${s}`]),
		cx: rx(t, r, e),
		cy: ix(n, r, e),
		r,
		stroke: "transparent",
		fill: "transparent"
	});
}
function sx({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: i, targetX: a, targetY: o, sourcePosition: s, targetPosition: c, onReconnect: l, onReconnectStart: u, onReconnectEnd: d, setReconnecting: f, setUpdateHover: p }) {
	let m = zv(), h = (e, t) => {
		if (e.button !== 0) return;
		let { autoPanOnConnect: r, domNode: i, connectionMode: a, connectionRadius: o, lib: s, onConnectStart: c, cancelConnection: p, nodeLookup: h, rfId: g, panBy: _, updateConnection: v } = m.getState(), y = t.type === "target";
		Y_.onPointerDown(e.nativeEvent, {
			autoPanOnConnect: r,
			connectionMode: a,
			connectionRadius: o,
			domNode: i,
			handleId: t.id,
			nodeId: t.nodeId,
			nodeLookup: h,
			isTarget: y,
			edgeUpdaterType: t.type,
			lib: s,
			flowId: g,
			cancelConnection: p,
			panBy: _,
			isValidConnection: (...e) => m.getState().isValidConnection?.(...e) ?? !0,
			onConnect: (e) => l?.(n, e),
			onConnectStart: (r, i) => {
				f(!0), u?.(e, n, t.type), c?.(r, i);
			},
			onConnectEnd: (...e) => m.getState().onConnectEnd?.(...e),
			onReconnectEnd: (e, r) => {
				f(!1), d?.(e, n, t.type, r);
			},
			updateConnection: v,
			getTransform: () => m.getState().transform,
			getFromHandle: () => m.getState().connection.fromHandle,
			dragThreshold: m.getState().connectionDragThreshold,
			handleDomNode: e.currentTarget
		});
	}, g = (e) => h(e, {
		nodeId: n.target,
		id: n.targetHandle ?? null,
		type: "target"
	}), _ = (e) => h(e, {
		nodeId: n.source,
		id: n.sourceHandle ?? null,
		type: "source"
	}), v = () => p(!0), y = () => p(!1);
	return Z(Y, { children: [(e === !0 || e === "source") && X(ox, {
		position: s,
		centerX: r,
		centerY: i,
		radius: t,
		onMouseDown: g,
		onMouseEnter: v,
		onMouseOut: y,
		type: "source"
	}), (e === !0 || e === "target") && X(ox, {
		position: c,
		centerX: a,
		centerY: o,
		radius: t,
		onMouseDown: _,
		onMouseEnter: v,
		onMouseOut: y,
		type: "target"
	})] });
}
function cx({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: i, onDoubleClick: a, onContextMenu: o, onMouseEnter: s, onMouseMove: c, onMouseLeave: l, reconnectRadius: u, onReconnect: d, onReconnectStart: f, onReconnectEnd: p, rfId: m, edgeTypes: h, noPanClassName: g, onError: _, disableKeyboardA11y: v }) {
	let y = $((t) => t.edgeLookup.get(e)), b = $((e) => e.defaultEdgeOptions);
	y = b ? {
		...b,
		...y
	} : y;
	let x = y.type || "default", S = h?.[x] || tx[x];
	S === void 0 && (_?.("011", Lh.error011(x)), x = "default", S = h?.default || tx.default);
	let C = !!(y.focusable || t && y.focusable === void 0), w = d !== void 0 && (y.reconnectable || n && y.reconnectable === void 0), T = !!(y.selectable || r && y.selectable === void 0), E = q(null), [D, O] = J(!1), [k, A] = J(!1), j = zv(), { zIndex: M, sourceX: N, sourceY: P, targetX: F, targetY: I, sourcePosition: L, targetPosition: R } = $(W((t) => {
		let n = t.nodeLookup.get(y.source), r = t.nodeLookup.get(y.target);
		if (!n || !r) return {
			zIndex: y.zIndex,
			...nx
		};
		let i = l_({
			id: e,
			sourceNode: n,
			targetNode: r,
			sourceHandle: y.sourceHandle || null,
			targetHandle: y.targetHandle || null,
			connectionMode: t.connectionMode,
			onError: _
		});
		return {
			zIndex: Xg({
				selected: y.selected,
				zIndex: y.zIndex,
				sourceNode: n,
				targetNode: r,
				elevateOnSelect: t.elevateEdgesOnSelect,
				zIndexMode: t.zIndexMode
			}),
			...i || nx
		};
	}, [
		y.source,
		y.target,
		y.sourceHandle,
		y.targetHandle,
		y.selected,
		y.zIndex
	]), Fv), z = K(() => y.markerStart ? `url('#${p_(y.markerStart, m)}')` : void 0, [y.markerStart, m]), B = K(() => y.markerEnd ? `url('#${p_(y.markerEnd, m)}')` : void 0, [y.markerEnd, m]);
	if (y.hidden || N === null || P === null || F === null || I === null) return null;
	let V = (t) => {
		let { addSelectedEdges: n, unselectNodesAndEdges: r, multiSelectionActive: a } = j.getState();
		T && (j.setState({ nodesSelectionActive: !1 }), y.selected && a ? (r({
			nodes: [],
			edges: [y]
		}), E.current?.blur()) : n([e])), i && i(t, y);
	}, H = a ? (e) => {
		a(e, { ...y });
	} : void 0, ee = o ? (e) => {
		o(e, { ...y });
	} : void 0, te = s ? (e) => {
		s(e, { ...y });
	} : void 0, ne = c ? (e) => {
		c(e, { ...y });
	} : void 0, U = l ? (e) => {
		l(e, { ...y });
	} : void 0;
	return X("svg", {
		style: { zIndex: M },
		children: Z("g", {
			className: gd([
				"react-flow__edge",
				`react-flow__edge-${x}`,
				y.className,
				g,
				{
					selected: y.selected,
					animated: y.animated,
					inactive: !T && !i,
					updating: D,
					selectable: T
				}
			]),
			onClick: V,
			onDoubleClick: H,
			onContextMenu: ee,
			onMouseEnter: te,
			onMouseMove: ne,
			onMouseLeave: U,
			onKeyDown: C ? (t) => {
				if (!v && zh.includes(t.key) && T) {
					let { unselectNodesAndEdges: n, addSelectedEdges: r } = j.getState();
					t.key === "Escape" ? (E.current?.blur(), n({ edges: [y] })) : r([e]);
				}
			} : void 0,
			tabIndex: C ? 0 : void 0,
			role: y.ariaRole ?? (C ? "group" : "img"),
			"aria-roledescription": "edge",
			"data-id": e,
			"data-testid": `rf__edge-${e}`,
			"aria-label": y.ariaLabel === null ? void 0 : y.ariaLabel || `Edge from ${y.source} to ${y.target}`,
			"aria-describedby": C ? `${Uv}-${m}` : void 0,
			ref: E,
			...y.domAttributes,
			children: [!k && X(S, {
				id: e,
				source: y.source,
				target: y.target,
				type: y.type,
				selected: y.selected,
				animated: y.animated,
				selectable: T,
				deletable: y.deletable ?? !0,
				label: y.label,
				labelStyle: y.labelStyle,
				labelShowBg: y.labelShowBg,
				labelBgStyle: y.labelBgStyle,
				labelBgPadding: y.labelBgPadding,
				labelBgBorderRadius: y.labelBgBorderRadius,
				sourceX: N,
				sourceY: P,
				targetX: F,
				targetY: I,
				sourcePosition: L,
				targetPosition: R,
				data: y.data,
				style: y.style,
				sourceHandleId: y.sourceHandle,
				targetHandleId: y.targetHandle,
				markerStart: z,
				markerEnd: B,
				pathOptions: "pathOptions" in y ? y.pathOptions : void 0,
				interactionWidth: y.interactionWidth
			}), w && X(sx, {
				edge: y,
				isReconnectable: w,
				reconnectRadius: u,
				onReconnect: d,
				onReconnectStart: f,
				onReconnectEnd: p,
				sourceX: N,
				sourceY: P,
				targetX: F,
				targetY: I,
				sourcePosition: L,
				targetPosition: R,
				setUpdateHover: O,
				setReconnecting: A
			})]
		})
	});
}
var lx = Hn(cx), ux = (e) => ({
	edgesFocusable: e.edgesFocusable,
	edgesReconnectable: e.edgesReconnectable,
	elementsSelectable: e.elementsSelectable,
	connectionMode: e.connectionMode,
	onError: e.onError
});
function dx({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: i, onReconnect: a, onEdgeContextMenu: o, onEdgeMouseEnter: s, onEdgeMouseMove: c, onEdgeMouseLeave: l, onEdgeClick: u, reconnectRadius: d, onEdgeDoubleClick: f, onReconnectStart: p, onReconnectEnd: m, disableKeyboardA11y: h }) {
	let { edgesFocusable: g, edgesReconnectable: _, elementsSelectable: v, onError: y } = $(ux, Fv), b = Db(t);
	return Z("div", {
		className: "react-flow__edges",
		children: [X(Pb, {
			defaultColor: e,
			rfId: n
		}), b.map((e) => X(lx, {
			id: e,
			edgesFocusable: g,
			edgesReconnectable: _,
			elementsSelectable: v,
			noPanClassName: i,
			onReconnect: a,
			onContextMenu: o,
			onMouseEnter: s,
			onMouseMove: c,
			onMouseLeave: l,
			onClick: u,
			reconnectRadius: d,
			onDoubleClick: f,
			onReconnectStart: p,
			onReconnectEnd: m,
			rfId: n,
			onError: y,
			edgeTypes: r,
			disableKeyboardA11y: h
		}, e))]
	});
}
dx.displayName = "EdgeRenderer";
var fx = Hn(dx), px = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function mx({ children: e }) {
	let t = $(px);
	return X("div", {
		className: "react-flow__viewport xyflow__viewport react-flow__container",
		style: { transform: t },
		children: e
	});
}
function hx(e) {
	let t = Py(), n = q(!1);
	G(() => {
		!n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
	}, [e, t.viewportInitialized]);
}
var gx = (e) => e.panZoom?.syncViewport;
function _x(e) {
	let t = $(gx), n = zv();
	return G(() => {
		e && (t?.(e), n.setState({ transform: [
			e.x,
			e.y,
			e.zoom
		] }));
	}, [e, t]), null;
}
function vx(e) {
	return e.connection.inProgress ? {
		...e.connection,
		to: Cg(e.connection.to, e.transform)
	} : { ...e.connection };
}
function yx(e) {
	return e ? (t) => e(vx(t)) : vx;
}
function bx(e) {
	return $(yx(e), Fv);
}
var xx = (e) => ({
	nodesConnectable: e.nodesConnectable,
	isValid: e.connection.isValid,
	inProgress: e.connection.inProgress,
	width: e.width,
	height: e.height
});
function Sx({ containerStyle: e, style: t, type: n, component: r }) {
	let { nodesConnectable: i, width: a, height: o, isValid: s, inProgress: c } = $(xx, Fv);
	return a && i && c ? X("svg", {
		style: e,
		width: a,
		height: o,
		className: "react-flow__connectionline react-flow__container",
		children: X("g", {
			className: gd(["react-flow__connection", Jh(s)]),
			children: X(Cx, {
				style: t,
				type: n,
				CustomComponent: r,
				isValid: s
			})
		})
	}) : null;
}
var Cx = ({ style: e, type: t = Gh.Bezier, CustomComponent: n, isValid: r }) => {
	let { inProgress: i, from: a, fromNode: o, fromHandle: s, fromPosition: c, to: l, toNode: u, toHandle: d, toPosition: f, pointer: p } = bx();
	if (!i) return;
	if (n) return X(n, {
		connectionLineType: t,
		connectionLineStyle: e,
		fromNode: o,
		fromHandle: s,
		fromX: a.x,
		fromY: a.y,
		toX: l.x,
		toY: l.y,
		fromPosition: c,
		toPosition: f,
		connectionStatus: Jh(r),
		toNode: u,
		toHandle: d,
		pointer: p
	});
	let m = "", h = {
		sourceX: a.x,
		sourceY: a.y,
		sourcePosition: c,
		targetX: l.x,
		targetY: l.y,
		targetPosition: f
	};
	switch (t) {
		case Gh.Bezier:
			[m] = Jg(h);
			break;
		case Gh.SimpleBezier:
			[m] = zb(h);
			break;
		case Gh.Step:
			[m] = s_({
				...h,
				borderRadius: 0
			});
			break;
		case Gh.SmoothStep:
			[m] = s_(h);
			break;
		default: [m] = t_(h);
	}
	return X("path", {
		d: m,
		fill: "none",
		className: "react-flow__connection-path",
		style: e
	});
};
Cx.displayName = "ConnectionLine";
var wx = {};
function Tx(e = wx) {
	let t = q(e), n = zv();
	G(() => {
		if (process.env.NODE_ENV === "development") {
			let r = /* @__PURE__ */ new Set([...Object.keys(t.current), ...Object.keys(e)]);
			for (let i of r) if (t.current[i] !== e[i]) {
				n.getState().onError?.("002", Lh.error002());
				break;
			}
			t.current = e;
		}
	}, [e]);
}
function Ex() {
	let e = zv(), t = q(!1);
	G(() => {
		if (process.env.NODE_ENV === "development" && !t.current) {
			let n = document.querySelector(".react-flow__pane");
			n && window.getComputedStyle(n).zIndex !== "1" && e.getState().onError?.("013", Lh.error013("react")), t.current = !0;
		}
	}, []);
}
function Dx({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: i, onNodeDoubleClick: a, onEdgeDoubleClick: o, onNodeMouseEnter: s, onNodeMouseMove: c, onNodeMouseLeave: l, onNodeContextMenu: u, onSelectionContextMenu: d, onSelectionStart: f, onSelectionEnd: p, connectionLineType: m, connectionLineStyle: h, connectionLineComponent: g, connectionLineContainerStyle: _, selectionKeyCode: v, selectionOnDrag: y, selectionMode: b, multiSelectionKeyCode: x, panActivationKeyCode: S, zoomActivationKeyCode: C, deleteKeyCode: w, onlyRenderVisibleElements: T, elementsSelectable: E, defaultViewport: D, translateExtent: O, minZoom: k, maxZoom: A, preventScrolling: j, defaultMarkerColor: M, zoomOnScroll: N, zoomOnPinch: P, panOnScroll: F, panOnScrollSpeed: I, panOnScrollMode: L, zoomOnDoubleClick: R, panOnDrag: z, onPaneClick: B, onPaneMouseEnter: V, onPaneMouseMove: H, onPaneMouseLeave: ee, onPaneScroll: te, onPaneContextMenu: ne, paneClickDistance: U, nodeClickDistance: re, onEdgeContextMenu: ie, onEdgeMouseEnter: ae, onEdgeMouseMove: oe, onEdgeMouseLeave: se, reconnectRadius: ce, onReconnect: le, onReconnectStart: ue, onReconnectEnd: de, noDragClassName: fe, noWheelClassName: pe, noPanClassName: me, disableKeyboardA11y: he, nodeExtent: ge, rfId: _e, viewport: ve, onViewportChange: ye }) {
	return Tx(e), Tx(t), Ex(), hx(n), _x(ve), X(gb, {
		onPaneClick: B,
		onPaneMouseEnter: V,
		onPaneMouseMove: H,
		onPaneMouseLeave: ee,
		onPaneContextMenu: ne,
		onPaneScroll: te,
		paneClickDistance: U,
		deleteKeyCode: w,
		selectionKeyCode: v,
		selectionOnDrag: y,
		selectionMode: b,
		onSelectionStart: f,
		onSelectionEnd: p,
		multiSelectionKeyCode: x,
		panActivationKeyCode: S,
		zoomActivationKeyCode: C,
		elementsSelectable: E,
		zoomOnScroll: N,
		zoomOnPinch: P,
		zoomOnDoubleClick: R,
		panOnScroll: F,
		panOnScrollSpeed: I,
		panOnScrollMode: L,
		panOnDrag: z,
		defaultViewport: D,
		translateExtent: O,
		minZoom: k,
		maxZoom: A,
		onSelectionContextMenu: d,
		preventScrolling: j,
		noDragClassName: fe,
		noWheelClassName: pe,
		noPanClassName: me,
		disableKeyboardA11y: he,
		onViewportChange: ye,
		isControlledViewport: !!ve,
		children: Z(mx, { children: [
			X(fx, {
				edgeTypes: t,
				onEdgeClick: i,
				onEdgeDoubleClick: o,
				onReconnect: le,
				onReconnectStart: ue,
				onReconnectEnd: de,
				onlyRenderVisibleElements: T,
				onEdgeContextMenu: ie,
				onEdgeMouseEnter: ae,
				onEdgeMouseMove: oe,
				onEdgeMouseLeave: se,
				reconnectRadius: ce,
				defaultMarkerColor: M,
				noPanClassName: me,
				disableKeyboardA11y: he,
				rfId: _e
			}),
			X(Sx, {
				style: h,
				type: m,
				component: g,
				containerStyle: _
			}),
			X("div", { className: "react-flow__edgelabel-renderer" }),
			X(Eb, {
				nodeTypes: e,
				onNodeClick: r,
				onNodeDoubleClick: a,
				onNodeMouseEnter: s,
				onNodeMouseMove: c,
				onNodeMouseLeave: l,
				onNodeContextMenu: u,
				nodeClickDistance: re,
				onlyRenderVisibleElements: T,
				noPanClassName: me,
				noDragClassName: fe,
				disableKeyboardA11y: he,
				nodeExtent: ge,
				rfId: _e
			}),
			X("div", { className: "react-flow__viewport-portal" })
		] })
	});
}
Dx.displayName = "GraphView";
var Ox = Hn(Dx), kx = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: i, height: a, fitView: o, fitViewOptions: s, minZoom: c = .5, maxZoom: l = 2, nodeOrigin: u, nodeExtent: d, zIndexMode: f = "basic" } = {}) => {
	let p = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), _ = r ?? t ?? [], v = n ?? e ?? [], y = u ?? [0, 0], b = d ?? Rh;
	N_(h, g, _);
	let { nodesInitialized: x } = w_(v, p, m, {
		nodeOrigin: y,
		nodeExtent: b,
		zIndexMode: f
	}), S = [
		0,
		0,
		1
	];
	if (o && i && a) {
		let { x: e, y: t, zoom: n } = Og(eg(p, { filter: (e) => !!((e.width || e.initialWidth) && (e.height || e.initialHeight)) }), i, a, c, l, s?.padding ?? .1);
		S = [
			e,
			t,
			n
		];
	}
	return {
		rfId: "1",
		width: i ?? 0,
		height: a ?? 0,
		transform: S,
		nodes: v,
		nodesInitialized: x,
		nodeLookup: p,
		parentLookup: m,
		edges: _,
		edgeLookup: g,
		connectionLookup: h,
		onNodesChange: null,
		onEdgesChange: null,
		hasDefaultNodes: n !== void 0,
		hasDefaultEdges: r !== void 0,
		panZoom: null,
		minZoom: c,
		maxZoom: l,
		translateExtent: Rh,
		nodeExtent: b,
		nodesSelectionActive: !1,
		userSelectionActive: !1,
		userSelectionRect: null,
		connectionMode: Vh.Strict,
		domNode: null,
		paneDragging: !1,
		noPanClassName: "nopan",
		nodeOrigin: y,
		nodeDragThreshold: 1,
		connectionDragThreshold: 1,
		snapGrid: [15, 15],
		snapToGrid: !1,
		nodesDraggable: !0,
		nodesConnectable: !0,
		nodesFocusable: !0,
		edgesFocusable: !0,
		edgesReconnectable: !0,
		elementsSelectable: !0,
		elevateNodesOnSelect: !0,
		elevateEdgesOnSelect: !0,
		selectNodesOnDrag: !0,
		multiSelectionActive: !1,
		fitViewQueued: o ?? !1,
		fitViewOptions: s,
		fitViewResolver: null,
		connection: { ...Wh },
		connectionClickStartHandle: null,
		connectOnClick: !0,
		ariaLiveMessage: "",
		autoPanOnConnect: !0,
		autoPanOnNodeDrag: !0,
		autoPanOnNodeFocus: !0,
		autoPanSpeed: 15,
		connectionRadius: 20,
		onError: xg,
		isValidConnection: void 0,
		onSelectionChangeHandlers: [],
		lib: "react",
		debug: !1,
		ariaLabelConfig: Bh,
		zIndexMode: f,
		onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
		onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
	};
}, Ax = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: i, height: a, fitView: o, fitViewOptions: s, minZoom: c, maxZoom: l, nodeOrigin: u, nodeExtent: d, zIndexMode: f }) => Pv((p, m) => {
	async function h() {
		let { nodeLookup: e, panZoom: t, fitViewOptions: n, fitViewResolver: r, width: i, height: a, minZoom: o, maxZoom: s } = m();
		t && (await ig({
			nodes: e,
			width: i,
			height: a,
			panZoom: t,
			minZoom: o,
			maxZoom: s
		}, n), r?.resolve(!0), p({ fitViewResolver: null }));
	}
	return {
		...kx({
			nodes: e,
			edges: t,
			width: i,
			height: a,
			fitView: o,
			fitViewOptions: s,
			minZoom: c,
			maxZoom: l,
			nodeOrigin: u,
			nodeExtent: d,
			defaultNodes: n,
			defaultEdges: r,
			zIndexMode: f
		}),
		setNodes: (e) => {
			let { nodeLookup: t, parentLookup: n, nodeOrigin: r, elevateNodesOnSelect: i, fitViewQueued: a, zIndexMode: o, nodesSelectionActive: s } = m(), { nodesInitialized: c, hasSelectedNodes: l } = w_(e, t, n, {
				nodeOrigin: r,
				nodeExtent: d,
				elevateNodesOnSelect: i,
				checkEquality: !0,
				zIndexMode: o
			}), u = s && l;
			a && c ? (h(), p({
				nodes: e,
				nodesInitialized: c,
				fitViewQueued: !1,
				fitViewOptions: void 0,
				nodesSelectionActive: u
			})) : p({
				nodes: e,
				nodesInitialized: c,
				nodesSelectionActive: u
			});
		},
		setEdges: (e) => {
			let { connectionLookup: t, edgeLookup: n } = m();
			N_(t, n, e), p({ edges: e });
		},
		setDefaultNodesAndEdges: (e, t) => {
			if (e) {
				let { setNodes: t } = m();
				t(e), p({ hasDefaultNodes: !0 });
			}
			if (t) {
				let { setEdges: e } = m();
				e(t), p({ hasDefaultEdges: !0 });
			}
		},
		updateNodeInternals: (e) => {
			let { triggerNodeChanges: t, nodeLookup: n, parentLookup: r, domNode: i, nodeOrigin: a, nodeExtent: o, debug: s, fitViewQueued: c, zIndexMode: l } = m(), { changes: u, updatedInternals: d } = A_(e, n, r, i, a, o, l);
			d && (x_(n, r, {
				nodeOrigin: a,
				nodeExtent: o,
				zIndexMode: l
			}), c ? (h(), p({
				fitViewQueued: !1,
				fitViewOptions: void 0
			})) : p({}), u?.length > 0 && (s && console.log("React Flow: trigger node changes", u), t?.(u)));
		},
		updateNodePositions: (e, t = !1) => {
			let n = [], r = [], { nodeLookup: i, triggerNodeChanges: a, connection: o, updateConnection: s, onNodesChangeMiddlewareMap: c } = m();
			for (let [a, c] of e) {
				let e = i.get(a), l = !!(e?.expandParent && e?.parentId && c?.position), u = {
					id: a,
					type: "position",
					position: l ? {
						x: Math.max(0, c.position.x),
						y: Math.max(0, c.position.y)
					} : c.position,
					dragging: t
				};
				if (e && o.inProgress && o.fromNode.id === e.id) {
					let t = d_(e, o.fromHandle, Q.Left, !0);
					s({
						...o,
						from: t
					});
				}
				l && e.parentId && n.push({
					id: a,
					parentId: e.parentId,
					rect: {
						...c.internals.positionAbsolute,
						width: c.measured.width ?? 0,
						height: c.measured.height ?? 0
					}
				}), r.push(u);
			}
			if (n.length > 0) {
				let { parentLookup: e, nodeOrigin: t } = m(), a = k_(n, i, e, t);
				r.push(...a);
			}
			for (let e of c.values()) r = e(r);
			a(r);
		},
		triggerNodeChanges: (e) => {
			let { onNodesChange: t, setNodes: n, nodes: r, hasDefaultNodes: i, debug: a } = m();
			e?.length && (i && n(yy(e, r)), a && console.log("React Flow: trigger node changes", e), t?.(e));
		},
		triggerEdgeChanges: (e) => {
			let { onEdgesChange: t, setEdges: n, edges: r, hasDefaultEdges: i, debug: a } = m();
			e?.length && (i && n(by(e, r)), a && console.log("React Flow: trigger edge changes", e), t?.(e));
		},
		addSelectedNodes: (e) => {
			let { multiSelectionActive: t, edgeLookup: n, nodeLookup: r, triggerNodeChanges: i, triggerEdgeChanges: a } = m();
			if (t) {
				i(e.map((e) => xy(e, !0)));
				return;
			}
			i(Sy(r, /* @__PURE__ */ new Set([...e]), !0)), a(Sy(n));
		},
		addSelectedEdges: (e) => {
			let { multiSelectionActive: t, edgeLookup: n, nodeLookup: r, triggerNodeChanges: i, triggerEdgeChanges: a } = m();
			if (t) {
				a(e.map((e) => xy(e, !0)));
				return;
			}
			a(Sy(n, /* @__PURE__ */ new Set([...e]))), i(Sy(r, /* @__PURE__ */ new Set(), !0));
		},
		unselectNodesAndEdges: ({ nodes: e, edges: t } = {}) => {
			let { edges: n, nodes: r, nodeLookup: i, triggerNodeChanges: a, triggerEdgeChanges: o } = m(), s = e || r, c = t || n, l = [];
			for (let e of s) {
				if (!e.selected) continue;
				let t = i.get(e.id);
				t && (t.selected = !1), l.push(xy(e.id, !1));
			}
			let u = [];
			for (let e of c) e.selected && u.push(xy(e.id, !1));
			a(l), o(u);
		},
		setMinZoom: (e) => {
			let { panZoom: t, maxZoom: n } = m();
			t?.setScaleExtent([e, n]), p({ minZoom: e });
		},
		setMaxZoom: (e) => {
			let { panZoom: t, minZoom: n } = m();
			t?.setScaleExtent([n, e]), p({ maxZoom: e });
		},
		setTranslateExtent: (e) => {
			m().panZoom?.setTranslateExtent(e), p({ translateExtent: e });
		},
		resetSelectedElements: () => {
			let { edges: e, nodes: t, triggerNodeChanges: n, triggerEdgeChanges: r, elementsSelectable: i } = m();
			if (!i) return;
			let a = t.reduce((e, t) => t.selected ? [...e, xy(t.id, !1)] : e, []), o = e.reduce((e, t) => t.selected ? [...e, xy(t.id, !1)] : e, []);
			n(a), r(o);
		},
		setNodeExtent: (e) => {
			let { nodes: t, nodeLookup: n, parentLookup: r, nodeOrigin: i, elevateNodesOnSelect: a, nodeExtent: o, zIndexMode: s } = m();
			(e[0][0] !== o[0][0] || e[0][1] !== o[0][1] || e[1][0] !== o[1][0] || e[1][1] !== o[1][1]) && (w_(t, n, r, {
				nodeOrigin: i,
				nodeExtent: e,
				elevateNodesOnSelect: a,
				checkEquality: !1,
				zIndexMode: s
			}), p({ nodeExtent: e }));
		},
		panBy: (e) => {
			let { transform: t, width: n, height: r, panZoom: i, translateExtent: a } = m();
			return j_({
				delta: e,
				panZoom: i,
				transform: t,
				translateExtent: a,
				width: n,
				height: r
			});
		},
		setCenter: async (e, t, n) => {
			let { width: r, height: i, maxZoom: a, panZoom: o } = m();
			if (!o) return Promise.resolve(!1);
			let s = n?.zoom === void 0 ? a : n.zoom;
			return await o.setViewport({
				x: r / 2 - e * s,
				y: i / 2 - t * s,
				zoom: s
			}, {
				duration: n?.duration,
				ease: n?.ease,
				interpolate: n?.interpolate
			}), Promise.resolve(!0);
		},
		cancelConnection: () => {
			p({ connection: { ...Wh } });
		},
		updateConnection: (e) => {
			p({ connection: e });
		},
		reset: () => p({ ...kx() })
	};
}, Object.is);
function jx({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: i, initialHeight: a, initialMinZoom: o, initialMaxZoom: s, initialFitViewOptions: c, fitView: l, nodeOrigin: u, nodeExtent: d, zIndexMode: f, children: p }) {
	let [m] = J(() => Ax({
		nodes: e,
		edges: t,
		defaultNodes: n,
		defaultEdges: r,
		width: i,
		height: a,
		fitView: l,
		minZoom: o,
		maxZoom: s,
		fitViewOptions: c,
		nodeOrigin: u,
		nodeExtent: d,
		zIndexMode: f
	}));
	return X(Lv, {
		value: m,
		children: X(jy, { children: p })
	});
}
function Mx({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: i, width: a, height: o, fitView: s, fitViewOptions: c, minZoom: l, maxZoom: u, nodeOrigin: d, nodeExtent: f, zIndexMode: p }) {
	return Un(Iv) ? X(Y, { children: e }) : X(jx, {
		initialNodes: t,
		initialEdges: n,
		defaultNodes: r,
		defaultEdges: i,
		initialWidth: a,
		initialHeight: o,
		fitView: s,
		initialFitViewOptions: c,
		initialMinZoom: l,
		initialMaxZoom: u,
		nodeOrigin: d,
		nodeExtent: f,
		zIndexMode: p,
		children: e
	});
}
var Nx = {
	width: "100%",
	height: "100%",
	overflow: "hidden",
	position: "relative",
	zIndex: 0
};
function Px({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: i, nodeTypes: a, edgeTypes: o, onNodeClick: s, onEdgeClick: c, onInit: l, onMove: u, onMoveStart: d, onMoveEnd: f, onConnect: p, onConnectStart: m, onConnectEnd: h, onClickConnectStart: g, onClickConnectEnd: _, onNodeMouseEnter: v, onNodeMouseMove: y, onNodeMouseLeave: b, onNodeContextMenu: x, onNodeDoubleClick: S, onNodeDragStart: C, onNodeDrag: w, onNodeDragStop: T, onNodesDelete: E, onEdgesDelete: D, onDelete: O, onSelectionChange: k, onSelectionDragStart: A, onSelectionDrag: j, onSelectionDragStop: M, onSelectionContextMenu: N, onSelectionStart: P, onSelectionEnd: F, onBeforeDelete: I, connectionMode: L, connectionLineType: R = Gh.Bezier, connectionLineStyle: z, connectionLineComponent: B, connectionLineContainerStyle: V, deleteKeyCode: H = "Backspace", selectionKeyCode: ee = "Shift", selectionOnDrag: te = !1, selectionMode: ne = Uh.Full, panActivationKeyCode: U = "Space", multiSelectionKeyCode: re = kg() ? "Meta" : "Control", zoomActivationKeyCode: ie = kg() ? "Meta" : "Control", snapToGrid: ae, snapGrid: oe, onlyRenderVisibleElements: se = !1, selectNodesOnDrag: ce, nodesDraggable: le, autoPanOnNodeFocus: ue, nodesConnectable: de, nodesFocusable: fe, nodeOrigin: pe = iy, edgesFocusable: me, edgesReconnectable: he, elementsSelectable: ge = !0, defaultViewport: _e = ay, minZoom: ve = .5, maxZoom: ye = 2, translateExtent: be = Rh, preventScrolling: xe = !0, nodeExtent: Se, defaultMarkerColor: Ce = "#b1b1b7", zoomOnScroll: we = !0, zoomOnPinch: Te = !0, panOnScroll: Ee = !1, panOnScrollSpeed: De = .5, panOnScrollMode: Oe = Hh.Free, zoomOnDoubleClick: ke = !0, panOnDrag: Ae = !0, onPaneClick: je, onPaneMouseEnter: Me, onPaneMouseMove: Ne, onPaneMouseLeave: Pe, onPaneScroll: Fe, onPaneContextMenu: Ie, paneClickDistance: Le = 1, nodeClickDistance: Re = 0, children: ze, onReconnect: Be, onReconnectStart: Ve, onReconnectEnd: He, onEdgeContextMenu: Ue, onEdgeDoubleClick: We, onEdgeMouseEnter: Ge, onEdgeMouseMove: Ke, onEdgeMouseLeave: qe, reconnectRadius: Je = 10, onNodesChange: Ye, onEdgesChange: Xe, noDragClassName: Ze = "nodrag", noWheelClassName: Qe = "nowheel", noPanClassName: $e = "nopan", fitView: et, fitViewOptions: tt, connectOnClick: nt, attributionPosition: rt, proOptions: it, defaultEdgeOptions: at, elevateNodesOnSelect: ot = !0, elevateEdgesOnSelect: st = !1, disableKeyboardA11y: ct = !1, autoPanOnConnect: lt, autoPanOnNodeDrag: ut, autoPanSpeed: dt, connectionRadius: ft, isValidConnection: pt, onError: mt, style: ht, id: gt, nodeDragThreshold: _t, connectionDragThreshold: vt, viewport: yt, onViewportChange: bt, width: xt, height: St, colorMode: Ct = "light", debug: wt, onScroll: Tt, ariaLabelConfig: Et, zIndexMode: Dt = "basic", ...Ot }, kt) {
	let At = gt || "1", jt = dy(Ct), Mt = W((e) => {
		e.currentTarget.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant"
		}), Tt?.(e);
	}, [Tt]);
	return X("div", {
		"data-testid": "rf__wrapper",
		...Ot,
		onScroll: Mt,
		style: {
			...ht,
			...Nx
		},
		ref: kt,
		className: gd([
			"react-flow",
			i,
			jt
		]),
		id: gt,
		role: "application",
		children: Z(Mx, {
			nodes: e,
			edges: t,
			width: xt,
			height: St,
			fitView: et,
			fitViewOptions: tt,
			minZoom: ve,
			maxZoom: ye,
			nodeOrigin: pe,
			nodeExtent: Se,
			zIndexMode: Dt,
			children: [
				X(ly, {
					nodes: e,
					edges: t,
					defaultNodes: n,
					defaultEdges: r,
					onConnect: p,
					onConnectStart: m,
					onConnectEnd: h,
					onClickConnectStart: g,
					onClickConnectEnd: _,
					nodesDraggable: le,
					autoPanOnNodeFocus: ue,
					nodesConnectable: de,
					nodesFocusable: fe,
					edgesFocusable: me,
					edgesReconnectable: he,
					elementsSelectable: ge,
					elevateNodesOnSelect: ot,
					elevateEdgesOnSelect: st,
					minZoom: ve,
					maxZoom: ye,
					nodeExtent: Se,
					onNodesChange: Ye,
					onEdgesChange: Xe,
					snapToGrid: ae,
					snapGrid: oe,
					connectionMode: L,
					translateExtent: be,
					connectOnClick: nt,
					defaultEdgeOptions: at,
					fitView: et,
					fitViewOptions: tt,
					onNodesDelete: E,
					onEdgesDelete: D,
					onDelete: O,
					onNodeDragStart: C,
					onNodeDrag: w,
					onNodeDragStop: T,
					onSelectionDrag: j,
					onSelectionDragStart: A,
					onSelectionDragStop: M,
					onMove: u,
					onMoveStart: d,
					onMoveEnd: f,
					noPanClassName: $e,
					nodeOrigin: pe,
					rfId: At,
					autoPanOnConnect: lt,
					autoPanOnNodeDrag: ut,
					autoPanSpeed: dt,
					onError: mt,
					connectionRadius: ft,
					isValidConnection: pt,
					selectNodesOnDrag: ce,
					nodeDragThreshold: _t,
					connectionDragThreshold: vt,
					onBeforeDelete: I,
					debug: wt,
					ariaLabelConfig: Et,
					zIndexMode: Dt
				}),
				X(Ox, {
					onInit: l,
					onNodeClick: s,
					onEdgeClick: c,
					onNodeMouseEnter: v,
					onNodeMouseMove: y,
					onNodeMouseLeave: b,
					onNodeContextMenu: x,
					onNodeDoubleClick: S,
					nodeTypes: a,
					edgeTypes: o,
					connectionLineType: R,
					connectionLineStyle: z,
					connectionLineComponent: B,
					connectionLineContainerStyle: V,
					selectionKeyCode: ee,
					selectionOnDrag: te,
					selectionMode: ne,
					deleteKeyCode: H,
					multiSelectionKeyCode: re,
					panActivationKeyCode: U,
					zoomActivationKeyCode: ie,
					onlyRenderVisibleElements: se,
					defaultViewport: _e,
					translateExtent: be,
					minZoom: ve,
					maxZoom: ye,
					preventScrolling: xe,
					zoomOnScroll: we,
					zoomOnPinch: Te,
					zoomOnDoubleClick: ke,
					panOnScroll: Ee,
					panOnScrollSpeed: De,
					panOnScrollMode: Oe,
					panOnDrag: Ae,
					onPaneClick: je,
					onPaneMouseEnter: Me,
					onPaneMouseMove: Ne,
					onPaneMouseLeave: Pe,
					onPaneScroll: Fe,
					onPaneContextMenu: Ie,
					paneClickDistance: Le,
					nodeClickDistance: Re,
					onSelectionContextMenu: N,
					onSelectionStart: P,
					onSelectionEnd: F,
					onReconnect: Be,
					onReconnectStart: Ve,
					onReconnectEnd: He,
					onEdgeContextMenu: Ue,
					onEdgeDoubleClick: We,
					onEdgeMouseEnter: Ge,
					onEdgeMouseMove: Ke,
					onEdgeMouseLeave: qe,
					reconnectRadius: Je,
					defaultMarkerColor: Ce,
					noDragClassName: Ze,
					noWheelClassName: Qe,
					noPanClassName: $e,
					rfId: At,
					disableKeyboardA11y: ct,
					nodeExtent: Se,
					viewport: yt,
					onViewportChange: bt
				}),
				X(ny, { onSelectionChange: k }),
				ze,
				X(Xv, {
					proOptions: it,
					position: rt
				}),
				X(Jv, {
					rfId: At,
					disableKeyboardA11y: ct
				})
			]
		})
	});
}
var Fx = Dy(Px);
Lh.error014();
function Ix({ dimensions: e, lineWidth: t, variant: n, className: r }) {
	return X("path", {
		strokeWidth: t,
		d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
		className: gd([
			"react-flow__background-pattern",
			n,
			r
		])
	});
}
function Lx({ radius: e, className: t }) {
	return X("circle", {
		cx: e,
		cy: e,
		r: e,
		className: gd([
			"react-flow__background-pattern",
			"dots",
			t
		])
	});
}
var Rx;
(function(e) {
	e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Rx ||= {});
var zx = {
	[Rx.Dots]: 1,
	[Rx.Lines]: 1,
	[Rx.Cross]: 6
}, Bx = (e) => ({
	transform: e.transform,
	patternId: `pattern-${e.rfId}`
});
function Vx({ id: e, variant: t = Rx.Dots, gap: n = 20, size: r, lineWidth: i = 1, offset: a = 0, color: o, bgColor: s, style: c, className: l, patternClassName: u }) {
	let d = q(null), { transform: f, patternId: p } = $(Bx, Fv), m = r || zx[t], h = t === Rx.Dots, g = t === Rx.Cross, _ = Array.isArray(n) ? n : [n, n], v = [_[0] * f[2] || 1, _[1] * f[2] || 1], y = m * f[2], b = Array.isArray(a) ? a : [a, a], x = g ? [y, y] : v, S = [b[0] * f[2] || 1 + x[0] / 2, b[1] * f[2] || 1 + x[1] / 2], C = `${p}${e || ""}`;
	return Z("svg", {
		className: gd(["react-flow__background", l]),
		style: {
			...c,
			...zy,
			"--xy-background-color-props": s,
			"--xy-background-pattern-color-props": o
		},
		ref: d,
		"data-testid": "rf__background",
		children: [X("pattern", {
			id: C,
			x: f[0] % v[0],
			y: f[1] % v[1],
			width: v[0],
			height: v[1],
			patternUnits: "userSpaceOnUse",
			patternTransform: `translate(-${S[0]},-${S[1]})`,
			children: h ? X(Lx, {
				radius: y / 2,
				className: u
			}) : X(Ix, {
				dimensions: x,
				lineWidth: i,
				variant: t,
				className: u
			})
		}), X("rect", {
			x: "0",
			y: "0",
			width: "100%",
			height: "100%",
			fill: `url(#${C})`
		})]
	});
}
Vx.displayName = "Background";
var Hx = Hn(Vx);
function Ux() {
	return X("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		children: X("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" })
	});
}
function Wx() {
	return X("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 5",
		children: X("path", { d: "M0 0h32v4.2H0z" })
	});
}
function Gx() {
	return X("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 30",
		children: X("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" })
	});
}
function Kx() {
	return X("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 25 32",
		children: X("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" })
	});
}
function qx() {
	return X("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 25 32",
		children: X("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" })
	});
}
function Jx({ children: e, className: t, ...n }) {
	return X("button", {
		type: "button",
		className: gd(["react-flow__controls-button", t]),
		...n,
		children: e
	});
}
var Yx = (e) => ({
	isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
	minZoomReached: e.transform[2] <= e.minZoom,
	maxZoomReached: e.transform[2] >= e.maxZoom,
	ariaLabelConfig: e.ariaLabelConfig
});
function Xx({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: i, onZoomIn: a, onZoomOut: o, onFitView: s, onInteractiveChange: c, className: l, children: u, position: d = "bottom-left", orientation: f = "vertical", "aria-label": p }) {
	let m = zv(), { isInteractive: h, minZoomReached: g, maxZoomReached: _, ariaLabelConfig: v } = $(Yx, Fv), { zoomIn: y, zoomOut: b, fitView: x } = Py();
	return Z(Yv, {
		className: gd([
			"react-flow__controls",
			f === "horizontal" ? "horizontal" : "vertical",
			l
		]),
		position: d,
		style: e,
		"data-testid": "rf__controls",
		"aria-label": p ?? v["controls.ariaLabel"],
		children: [
			t && Z(Y, { children: [X(Jx, {
				onClick: () => {
					y(), a?.();
				},
				className: "react-flow__controls-zoomin",
				title: v["controls.zoomIn.ariaLabel"],
				"aria-label": v["controls.zoomIn.ariaLabel"],
				disabled: _,
				children: X(Ux, {})
			}), X(Jx, {
				onClick: () => {
					b(), o?.();
				},
				className: "react-flow__controls-zoomout",
				title: v["controls.zoomOut.ariaLabel"],
				"aria-label": v["controls.zoomOut.ariaLabel"],
				disabled: g,
				children: X(Wx, {})
			})] }),
			n && X(Jx, {
				className: "react-flow__controls-fitview",
				onClick: () => {
					x(i), s?.();
				},
				title: v["controls.fitView.ariaLabel"],
				"aria-label": v["controls.fitView.ariaLabel"],
				children: X(Gx, {})
			}),
			r && X(Jx, {
				className: "react-flow__controls-interactive",
				onClick: () => {
					m.setState({
						nodesDraggable: !h,
						nodesConnectable: !h,
						elementsSelectable: !h
					}), c?.(!h);
				},
				title: v["controls.interactive.ariaLabel"],
				"aria-label": v["controls.interactive.ariaLabel"],
				children: X(h ? qx : Kx, {})
			}),
			u
		]
	});
}
Xx.displayName = "Controls", Hn(Xx);
function Zx({ id: e, x: t, y: n, width: r, height: i, style: a, color: o, strokeColor: s, strokeWidth: c, className: l, borderRadius: u, shapeRendering: d, selected: f, onClick: p }) {
	let { background: m, backgroundColor: h } = a || {}, g = o || m || h;
	return X("rect", {
		className: gd([
			"react-flow__minimap-node",
			{ selected: f },
			l
		]),
		x: t,
		y: n,
		rx: u,
		ry: u,
		width: r,
		height: i,
		style: {
			fill: g,
			stroke: s,
			strokeWidth: c
		},
		shapeRendering: d,
		onClick: p ? (t) => p(t, e) : void 0
	});
}
var Qx = Hn(Zx), $x = (e) => e.nodes.map((e) => e.id), eS = (e) => e instanceof Function ? e : () => e;
function tS({ nodeStrokeColor: e, nodeColor: t, nodeClassName: n = "", nodeBorderRadius: r = 5, nodeStrokeWidth: i, nodeComponent: a = Qx, onClick: o }) {
	let s = $($x, Fv), c = eS(t), l = eS(e), u = eS(n), d = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
	return X(Y, { children: s.map((e) => X(rS, {
		id: e,
		nodeColorFunc: c,
		nodeStrokeColorFunc: l,
		nodeClassNameFunc: u,
		nodeBorderRadius: r,
		nodeStrokeWidth: i,
		NodeComponent: a,
		onClick: o,
		shapeRendering: d
	}, e)) });
}
function nS({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: i, nodeStrokeWidth: a, shapeRendering: o, NodeComponent: s, onClick: c }) {
	let { node: l, x: u, y: d, width: f, height: p } = $((t) => {
		let n = t.nodeLookup.get(e);
		if (!n) return {
			node: void 0,
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
		let r = n.internals.userNode, { x: i, y: a } = n.internals.positionAbsolute, { width: o, height: s } = jg(r);
		return {
			node: r,
			x: i,
			y: a,
			width: o,
			height: s
		};
	}, Fv);
	return !l || l.hidden || !Mg(l) ? null : X(s, {
		x: u,
		y: d,
		width: f,
		height: p,
		style: l.style,
		selected: !!l.selected,
		className: r(l),
		color: t(l),
		borderRadius: i,
		strokeColor: n(l),
		strokeWidth: a,
		shapeRendering: o,
		onClick: c,
		id: l.id
	});
}
var rS = Hn(nS), iS = Hn(tS), aS = 200, oS = 150, sS = (e) => !e.hidden, cS = (e) => {
	let t = {
		x: -e.transform[0] / e.transform[2],
		y: -e.transform[1] / e.transform[2],
		width: e.width / e.transform[2],
		height: e.height / e.transform[2]
	};
	return {
		viewBB: t,
		boundingRect: e.nodeLookup.size > 0 ? _g(eg(e.nodeLookup, { filter: sS }), t) : t,
		rfId: e.rfId,
		panZoom: e.panZoom,
		translateExtent: e.translateExtent,
		flowWidth: e.width,
		flowHeight: e.height,
		ariaLabelConfig: e.ariaLabelConfig
	};
}, lS = "react-flow__minimap-desc";
function uS({ style: e, className: t, nodeStrokeColor: n, nodeColor: r, nodeClassName: i = "", nodeBorderRadius: a = 5, nodeStrokeWidth: o, nodeComponent: s, bgColor: c, maskColor: l, maskStrokeColor: u, maskStrokeWidth: d, position: f = "bottom-right", onClick: p, onNodeClick: m, pannable: h = !1, zoomable: g = !1, ariaLabel: _, inversePan: v, zoomStep: y = 1, offsetScale: b = 5 }) {
	let x = zv(), S = q(null), { boundingRect: C, viewBB: w, rfId: T, panZoom: E, translateExtent: D, flowWidth: O, flowHeight: k, ariaLabelConfig: A } = $(cS, Fv), j = e?.width ?? aS, M = e?.height ?? oS, N = C.width / j, P = C.height / M, F = Math.max(N, P), I = F * j, L = F * M, R = b * F, z = C.x - (I - C.width) / 2 - R, B = C.y - (L - C.height) / 2 - R, V = I + R * 2, H = L + R * 2, ee = `${lS}-${T}`, te = q(0), ne = q();
	te.current = F, G(() => {
		if (S.current && E) return ne.current = X_({
			domNode: S.current,
			panZoom: E,
			getTransform: () => x.getState().transform,
			getViewScale: () => te.current
		}), () => {
			ne.current?.destroy();
		};
	}, [E]), G(() => {
		ne.current?.update({
			translateExtent: D,
			width: O,
			height: k,
			inversePan: v,
			pannable: h,
			zoomStep: y,
			zoomable: g
		});
	}, [
		h,
		g,
		v,
		y,
		D,
		O,
		k
	]);
	let U = p ? (e) => {
		let [t, n] = ne.current?.pointer(e) || [0, 0];
		p(e, {
			x: t,
			y: n
		});
	} : void 0, re = m ? W((e, t) => {
		let n = x.getState().nodeLookup.get(t).internals.userNode;
		m(e, n);
	}, []) : void 0, ie = _ ?? A["minimap.ariaLabel"];
	return X(Yv, {
		position: f,
		style: {
			...e,
			"--xy-minimap-background-color-props": typeof c == "string" ? c : void 0,
			"--xy-minimap-mask-background-color-props": typeof l == "string" ? l : void 0,
			"--xy-minimap-mask-stroke-color-props": typeof u == "string" ? u : void 0,
			"--xy-minimap-mask-stroke-width-props": typeof d == "number" ? d * F : void 0,
			"--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
			"--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
			"--xy-minimap-node-stroke-width-props": typeof o == "number" ? o : void 0
		},
		className: gd(["react-flow__minimap", t]),
		"data-testid": "rf__minimap",
		children: Z("svg", {
			width: j,
			height: M,
			viewBox: `${z} ${B} ${V} ${H}`,
			className: "react-flow__minimap-svg",
			role: "img",
			"aria-labelledby": ee,
			ref: S,
			onClick: U,
			children: [
				ie && X("title", {
					id: ee,
					children: ie
				}),
				X(iS, {
					onClick: re,
					nodeColor: r,
					nodeStrokeColor: n,
					nodeBorderRadius: a,
					nodeClassName: i,
					nodeStrokeWidth: o,
					nodeComponent: s
				}),
				X("path", {
					className: "react-flow__minimap-mask",
					d: `M${z - R},${B - R}h${V + R * 2}v${H + R * 2}h${-V - R * 2}z
        M${w.x},${w.y}h${w.width}v${w.height}h${-w.width}z`,
					fillRule: "evenodd",
					pointerEvents: "none"
				})
			]
		})
	});
}
uS.displayName = "MiniMap", Hn(uS);
var dS = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, fS = {
	[dv.Line]: "right",
	[dv.Handle]: "bottom-right"
};
function pS({ nodeId: e, position: t, variant: n = dv.Handle, className: r, style: i = void 0, children: a, color: o, minWidth: s = 10, minHeight: c = 10, maxWidth: l = Number.MAX_VALUE, maxHeight: u = Number.MAX_VALUE, keepAspectRatio: d = !1, resizeDirection: f, autoScale: p = !0, shouldResize: m, onResizeStart: h, onResize: g, onResizeEnd: _ }) {
	let v = $y(), y = typeof e == "string" ? e : v, b = zv(), x = q(null), S = n === dv.Handle, C = $(W(dS(S && p), [S, p]), Fv), w = q(null), T = t ?? fS[n];
	G(() => {
		if (!(!x.current || !y)) return w.current ||= Cv({
			domNode: x.current,
			nodeId: y,
			getStoreItems: () => {
				let { nodeLookup: e, transform: t, snapGrid: n, snapToGrid: r, nodeOrigin: i, domNode: a } = b.getState();
				return {
					nodeLookup: e,
					transform: t,
					snapGrid: n,
					snapToGrid: r,
					nodeOrigin: i,
					paneDomNode: a
				};
			},
			onChange: (e, t) => {
				let { triggerNodeChanges: n, nodeLookup: r, parentLookup: i, nodeOrigin: a } = b.getState(), o = [], s = {
					x: e.x,
					y: e.y
				}, c = r.get(y);
				if (c && c.expandParent && c.parentId) {
					let t = c.origin ?? a, n = e.width ?? c.measured.width ?? 0, l = e.height ?? c.measured.height ?? 0, u = k_([{
						id: c.id,
						parentId: c.parentId,
						rect: {
							width: n,
							height: l,
							...Ng({
								x: e.x ?? c.position.x,
								y: e.y ?? c.position.y
							}, {
								width: n,
								height: l
							}, c.parentId, r, t)
						}
					}], r, i, a);
					o.push(...u), s.x = e.x ? Math.max(t[0] * n, e.x) : void 0, s.y = e.y ? Math.max(t[1] * l, e.y) : void 0;
				}
				if (s.x !== void 0 && s.y !== void 0) {
					let e = {
						id: y,
						type: "position",
						position: { ...s }
					};
					o.push(e);
				}
				if (e.width !== void 0 && e.height !== void 0) {
					let t = {
						id: y,
						type: "dimensions",
						resizing: !0,
						setAttributes: f ? f === "horizontal" ? "width" : "height" : !0,
						dimensions: {
							width: e.width,
							height: e.height
						}
					};
					o.push(t);
				}
				for (let e of t) {
					let t = {
						...e,
						type: "position"
					};
					o.push(t);
				}
				n(o);
			},
			onEnd: ({ width: e, height: t }) => {
				let n = {
					id: y,
					type: "dimensions",
					resizing: !1,
					dimensions: {
						width: e,
						height: t
					}
				};
				b.getState().triggerNodeChanges([n]);
			}
		}), w.current.update({
			controlPosition: T,
			boundaries: {
				minWidth: s,
				minHeight: c,
				maxWidth: l,
				maxHeight: u
			},
			keepAspectRatio: d,
			resizeDirection: f,
			onResizeStart: h,
			onResize: g,
			onResizeEnd: _,
			shouldResize: m
		}), () => {
			w.current?.destroy();
		};
	}, [
		T,
		s,
		c,
		l,
		u,
		d,
		h,
		g,
		_,
		m
	]);
	let E = T.split("-");
	return X("div", {
		className: gd([
			"react-flow__resize-control",
			"nodrag",
			...E,
			n,
			r
		]),
		ref: x,
		style: {
			...i,
			scale: C,
			...o && { [S ? "backgroundColor" : "borderColor"]: o }
		},
		children: a
	});
}
Hn(pS);
var mS = (e) => e.domNode?.querySelector(".react-flow__renderer");
function hS({ children: e }) {
	let t = $(mS);
	return t ? qn(e, t) : null;
}
var gS = (e, t) => e?.internals.positionAbsolute.x !== t?.internals.positionAbsolute.x || e?.internals.positionAbsolute.y !== t?.internals.positionAbsolute.y || e?.measured.width !== t?.measured.width || e?.measured.height !== t?.measured.height || e?.selected !== t?.selected || e?.internals.z !== t?.internals.z, _S = (e, t) => {
	if (e.size !== t.size) return !1;
	for (let [n, r] of e) if (gS(r, t.get(n))) return !1;
	return !0;
}, vS = (e) => ({
	x: e.transform[0],
	y: e.transform[1],
	zoom: e.transform[2],
	selectedNodesCount: e.nodes.filter((e) => e.selected).length
});
function yS({ nodeId: e, children: t, className: n, style: r, isVisible: i, position: a = Q.Top, offset: o = 10, align: s = "center", ...c }) {
	let l = $y(), u = $(W((t) => (Array.isArray(e) ? e : [e || l || ""]).reduce((e, n) => {
		let r = t.nodeLookup.get(n);
		return r && e.set(r.id, r), e;
	}, /* @__PURE__ */ new Map()), [e, l]), _S), { x: d, y: f, zoom: p, selectedNodesCount: m } = $(vS, Fv);
	if (!(typeof i == "boolean" ? i : u.size === 1 && u.values().next().value?.selected && m === 1) || !u.size) return null;
	let h = eg(u), g = Array.from(u.values()), _ = Math.max(...g.map((e) => e.internals.z + 1)), v = {
		position: "absolute",
		transform: h_(h, {
			x: d,
			y: f,
			zoom: p
		}, a, o, s),
		zIndex: _,
		...r
	};
	return X(hS, { children: X("div", {
		style: v,
		className: gd(["react-flow__node-toolbar", n]),
		...c,
		"data-id": g.reduce((e, t) => `${e}${t.id} `, "").trim(),
		children: t
	}) });
}
//#endregion
//#region src/patterns/F0Graph/constants.ts
var bS = /* @__PURE__ */ new Set(), xS = [], SS = {
	detail: -8,
	compact: -8,
	dot: 0
}, CS = {
	detail: {
		fontSize: 14,
		lineHeight: "20px"
	},
	compact: {
		fontSize: 24,
		lineHeight: "32px"
	},
	dot: null
}, wS = .5, TS = .1, ES = .5, DS = Rn(null);
DS.displayName = "F0GraphZoomContext";
function OS() {
	return Un(DS);
}
var kS = Rn(null);
kS.displayName = "F0GraphExpandContext";
function AS() {
	return Un(kS);
}
var jS = Rn(null);
jS.displayName = "F0GraphSelectionContext";
function MS() {
	return Un(jS);
}
var NS = Rn(null);
NS.displayName = "F0GraphActionsContext";
function PS() {
	return Un(NS);
}
var FS = Rn(null);
FS.displayName = "F0GraphRenderConfigContext";
function IS() {
	return Un(FS);
}
var LS = Rn(null);
LS.displayName = "F0GraphStackHoverContext";
function RS() {
	return Un(LS);
}
var zS = Rn(null);
zS.displayName = "F0GraphFocusContext";
function BS() {
	return Un(zS);
}
//#endregion
//#region src/patterns/F0Graph/hooks/useDeferredMerge.ts
function VS(e) {
	let { initialNodes: t, initialEdges: n, deferredNodes: r } = e, [i, a] = J(null), [o, s] = J(r ? "loading" : "idle"), [c, l] = J(null), u = q(r), d = q(!0);
	return G(() => () => {
		d.current = !1;
	}, []), G(() => {
		if (u.current = r, !r) {
			s("idle"), a(null), l(null);
			return;
		}
		s("loading"), l(null), a(null);
		let e = typeof r == "function" ? r() : r, t = r;
		e.then((e) => {
			d.current && u.current === t && (a(e), s("resolved"));
		}, (e) => {
			d.current && u.current === t && (l(e instanceof Error ? e : Error(String(e))), s("error"));
		});
	}, [r]), {
		mergedNodes: K(() => HS(t, i?.nodes), [t, i]),
		mergedEdges: K(() => US(n, i?.edges), [n, i]),
		deferredStatus: o,
		error: c
	};
}
function HS(e, t) {
	if (!t || t.length === 0) return e;
	let n = /* @__PURE__ */ new Map();
	for (let t of e) n.set(t.id, t);
	for (let e of t) n.set(e.id, e);
	return Array.from(n.values());
}
function US(e, t) {
	if (!t || t.length === 0) return e;
	let n = /* @__PURE__ */ new Map();
	for (let t of e) n.set(t.id, t);
	for (let e of t) n.set(e.id, e);
	return Array.from(n.values());
}
//#endregion
//#region src/patterns/F0Graph/utils.ts
function WS(e, t, n) {
	if (!(!e || !n.has(e))) return [e, ...t.filter((e) => n.has(e))].map((e) => ({ id: e }));
}
function GS(e, t, n, r, i) {
	return e <= i.maxX && e + n >= i.minX && t <= i.maxY && t + r >= i.minY;
}
function KS(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	for (let n of e) {
		if (!t.has(n.id) || n.parentId === null) continue;
		let e = i.get(n.parentId);
		e ? e.push(n.id) : i.set(n.parentId, [n.id]);
	}
	let a = r === "LR" || r === "RL", o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
	for (let [e, t] of i) {
		if (t.some((e) => n.get(e) === void 0)) continue;
		t.sort((e, t) => {
			let r = n.get(e), i = n.get(t);
			return a ? r.x - i.x : r.y - i.y;
		});
		let r = t.map((e) => n.get(e)).map((e) => {
			let t = e;
			return a ? {
				x: t.x,
				y: t.y + 22,
				width: t.width,
				height: Math.max(0, t.height - 44)
			} : {
				x: t.x + 22,
				y: t.y,
				width: Math.max(0, t.width - 44),
				height: t.height
			};
		}), i = Math.min(...r.map((e) => e.x)), l = Math.min(...r.map((e) => e.y)), u = Math.max(...r.map((e) => e.x + e.width)), d = Math.max(...r.map((e) => e.y + e.height)), f = {
			id: `stack-${e}`,
			x: i - 8,
			y: l - 8,
			width: u - i + 16,
			height: d - l + 16,
			rows: /* @__PURE__ */ new Map()
		};
		t.forEach((e, n) => {
			let i = r[n];
			f.rows.set(e, {
				x: i.x - f.x,
				y: i.y - f.y,
				width: i.width,
				height: i.height
			}), s.set(e, f.id), n > 0 && c.set(e, t[n - 1]);
		}), o.set(e, f);
	}
	return {
		groups: o,
		groupOf: s,
		previousRow: c
	};
}
function qS(e, t, n) {
	for (let r of e) if (t >= r.x && t <= r.x + r.width && n >= r.y && n <= r.y + r.height) return r.parentId;
	return null;
}
function JS(e) {
	if (e.length === 0) return null;
	let t = Infinity, n = Infinity, r = -Infinity, i = -Infinity;
	for (let a of e) t = Math.min(t, a.x), n = Math.min(n, a.y), r = Math.max(r, a.x + a.width), i = Math.max(i, a.y + a.height);
	return {
		x: t,
		y: n,
		width: r - t,
		height: i - n
	};
}
function YS(e, t) {
	let n = /* @__PURE__ */ new Set();
	function r(e, i) {
		if (i < t && e.children.length > 0) {
			n.add(e.id);
			for (let t of e.children) r(t, i + 1);
		}
	}
	for (let t of e) r(t, 0);
	return n;
}
function XS(e) {
	let t = /* @__PURE__ */ new Set();
	function n(e) {
		if (e.children.length > 0) {
			t.add(e.id);
			for (let t of e.children) n(t);
		}
	}
	for (let t of e) n(t);
	return t;
}
function ZS(e) {
	let t = [];
	function n(e) {
		for (let r of e.children) t.push({
			id: `${e.id}->${r.id}`,
			source: e.id,
			target: r.id
		}), n(r);
	}
	for (let t of e) n(t);
	return t;
}
function QS(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
	for (let r of e) !r.stackNodes || r.children.length === 0 || r.children.some((e) => e.childrenCount > 0 || e.children.length > 0) || (t.add(r.id), r.children.forEach((e, t) => {
		n.set(e.id, t);
	}));
	return {
		stackedParentIds: t,
		stackedNodeIndex: n
	};
}
function $S(e, t) {
	let n = [];
	function r(e) {
		if (n.push(e), t.has(e.id)) for (let t of e.children) r(t);
	}
	for (let t of e) r(t);
	return n;
}
//#endregion
//#region src/patterns/F0Graph/hooks/useExpandState.ts
function eC({ roots: e, nodeMap: t, isLazyMode: n, lazyTree: r, controlledExpanded: i, defaultExpandedNodes: a, defaultExpandDepth: o, onExpandToggle: s, onExpandedNodesChange: c }) {
	let l = q(null);
	l.current === null && (l.current = a || (o === void 0 ? new Set(e.map((e) => e.id)) : YS(e, o)));
	let [u, d] = J(() => l.current), f = i ?? u, p = i !== void 0, m = q(null), h = q(f);
	G(() => {
		h.current = f;
	}, [f]);
	let g = q(t);
	G(() => {
		g.current = t;
	}, [t]);
	let _ = q(r);
	G(() => {
		_.current = r;
	}, [r]);
	let v = W((e) => {
		let t = h.current, r = t.has(e), i = new Set(t);
		if (r) {
			i.delete(e);
			let t = (e) => {
				for (let n of e.children) i.delete(n.id), t(n);
			}, n = g.current.get(e);
			n && t(n);
		} else i.add(e);
		if (m.current = e, p || d(i), n && !r) {
			let t = g.current.get(e);
			t && !t.childrenLoaded && _.current.expandNode(e);
		}
		s?.(e, !r), c?.(i);
	}, [
		p,
		s,
		c,
		n
	]), y = q(e);
	G(() => {
		y.current = e;
	}, [e]);
	let b = q(r.nodes);
	return G(() => {
		b.current = r.nodes;
	}, [r.nodes]), {
		expandedNodes: f,
		expandedNodesRef: h,
		anchorNodeRef: m,
		toggleExpand: v,
		expandAll: W(async () => {
			if (!n) {
				let e = XS(y.current);
				p || d(e), c?.(e);
				return;
			}
			let e = new Set(h.current), t = /* @__PURE__ */ new Set(), r = [];
			for (let e of b.current) e.parentId === null && (e.childrenCount ?? 0) > 0 && (r.push(e.id), t.add(e.id));
			for (; r.length > 0;) {
				for (let t of r) e.add(t);
				let n = await Promise.all(r.map((e) => _.current.expandNode(e).then((t) => ({
					id: e,
					children: t
				})).catch(() => ({
					id: e,
					children: []
				})))), i = [];
				for (let { children: e } of n) for (let n of e) t.has(n.id) || (t.add(n.id), (n.childrenCount ?? 0) > 0 && i.push(n.id));
				r = i;
			}
			p || d(e), c?.(e);
		}, [
			n,
			p,
			c
		]),
		collapseAll: W(() => {
			let e = /* @__PURE__ */ new Set();
			p || d(e), c?.(e);
		}, [p, c])
	};
}
//#endregion
//#region src/patterns/F0Graph/hooks/useGraphKeyboard.ts
function tC({ nodeMap: e, clearSelection: t, toggleExpand: n, selectNode: r, focusedNodeIdRef: i, setFocusedNodeId: a, flatVisibleOrderRef: o, expandedNodesRef: s, nodeRefsMapRef: c }) {
	let l = Py(), u = q(e);
	return G(() => {
		u.current = e;
	}, [e]), {
		handleTreeKeyDown: W((e) => {
			if (e.key === "Escape") {
				e.stopPropagation(), t();
				return;
			}
			let d = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			switch (e.key) {
				case "+":
				case "=":
					e.preventDefault(), l.zoomIn({ duration: d ? 0 : 300 });
					return;
				case "-":
					e.preventDefault(), l.zoomOut({ duration: d ? 0 : 300 });
					return;
				case "0":
					e.preventDefault(), l.fitView({
						duration: d ? 0 : 400,
						padding: TS
					});
					return;
			}
			let f = i.current;
			if (!f) return;
			let p = o.current, m = p.indexOf(f);
			if (m === -1) return;
			let h = null;
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), e.stopPropagation(), m < p.length - 1 && (h = p[m + 1]);
					break;
				case "ArrowUp":
					e.preventDefault(), e.stopPropagation(), m > 0 && (h = p[m - 1]);
					break;
				case "ArrowRight": {
					e.preventDefault(), e.stopPropagation();
					let t = u.current.get(f);
					t !== void 0 && (t.children.length > 0 || t.childrenCount > 0) && (s.current.has(f) ? m < p.length - 1 && (h = p[m + 1]) : n(f));
					break;
				}
				case "ArrowLeft": {
					e.preventDefault(), e.stopPropagation();
					let t = u.current.get(f), r = t !== void 0 && (t.children.length > 0 || t.childrenCount > 0);
					t && s.current.has(f) && r ? n(f) : t?.parentId && (h = t.parentId);
					break;
				}
				case "Home":
					e.preventDefault(), e.stopPropagation(), p.length > 0 && (h = p[0]);
					break;
				case "End":
					e.preventDefault(), e.stopPropagation(), p.length > 0 && (h = p[p.length - 1]);
					break;
				case "Enter":
				case " ":
					e.preventDefault(), e.stopPropagation(), f.startsWith("expander-") || f.startsWith("collapser-") ? n(f.replace(/^(expander|collapser)-/, "")) : r(f);
					break;
				default: return;
			}
			if (h) {
				i.current = h, a(h);
				let e = c.current.get(h);
				if (e) {
					e.focus();
					let t = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
					l.fitView({
						nodes: [{ id: h.replace(/^(expander|collapser)-/, "") }],
						duration: t ? 0 : 300,
						padding: ES
					});
				}
			}
		}, [
			t,
			n,
			r,
			l,
			i,
			o,
			s,
			c,
			a
		]),
		handleCanvasKeyDown: W((e) => {
			if (e.target !== e.currentTarget) return;
			let t = window.matchMedia("(prefers-reduced-motion: reduce)").matches, n = t ? 0 : 200, r = e.shiftKey ? 200 : 50;
			switch (e.key) {
				case "ArrowUp":
					e.preventDefault();
					{
						let e = l.getViewport();
						l.setViewport({
							x: e.x,
							y: e.y + r,
							zoom: e.zoom
						}, { duration: n });
					}
					break;
				case "ArrowDown":
					e.preventDefault();
					{
						let e = l.getViewport();
						l.setViewport({
							x: e.x,
							y: e.y - r,
							zoom: e.zoom
						}, { duration: n });
					}
					break;
				case "ArrowLeft":
					e.preventDefault();
					{
						let e = l.getViewport();
						l.setViewport({
							x: e.x + r,
							y: e.y,
							zoom: e.zoom
						}, { duration: n });
					}
					break;
				case "ArrowRight":
					e.preventDefault();
					{
						let e = l.getViewport();
						l.setViewport({
							x: e.x - r,
							y: e.y,
							zoom: e.zoom
						}, { duration: n });
					}
					break;
				case "+":
				case "=":
					e.preventDefault(), l.zoomIn({ duration: t ? 0 : 300 });
					break;
				case "-":
					e.preventDefault(), l.zoomOut({ duration: t ? 0 : 300 });
					break;
				case "0":
					e.preventDefault(), l.fitView({
						duration: t ? 0 : 400,
						padding: TS
					});
					break;
				default: return;
			}
		}, [l])
	};
}
//#endregion
//#region src/patterns/F0Graph/components/F0GraphExpander/F0GraphExpander.tsx
var nC = Bn(({ count: e, expanded: t, onClick: n, tabIndex: r, ariaLabel: i, loading: a }, o) => {
	let s = g(), c = e > 99 ? "+99" : String(e), l = s.t(t ? "actions.collapse" : "actions.expand");
	return /* @__PURE__ */ X("div", {
		className: "inline-flex",
		children: /* @__PURE__ */ X(O, {
			ref: o,
			variant: "neutral",
			label: c,
			"aria-label": i ?? l,
			"aria-expanded": t,
			tabIndex: r,
			loading: a,
			onClick: n,
			tooltip: l
		})
	});
});
nC.displayName = "F0GraphExpander";
//#endregion
//#region src/patterns/F0Graph/internal/ReactFlowAdapters.tsx
var rC = 3, iC = (e) => e === Q.Bottom || e === Q.Top ? { transform: `translate(-${rC}px, 0px)` } : void 0;
function aC(e) {
	switch (e) {
		case "BT": return {
			source: Q.Top,
			target: Q.Bottom
		};
		case "LR": return {
			source: Q.Right,
			target: Q.Left
		};
		case "RL": return {
			source: Q.Left,
			target: Q.Right
		};
		default: return {
			source: Q.Bottom,
			target: Q.Top
		};
	}
}
var oC = 32, sC = {
	detail: (130 - oC) / 2,
	compact: (130 - oC) / 2,
	dot: (130 - oC) / 2
}, cC = 130 * wS, lC = {
	detail: (cC - oC) / 2,
	compact: (cC - oC) / 2,
	dot: (cC - oC) / 2
}, uC = (e) => Math.max(0, Math.floor(cC - (lC[e] + SS[e])));
function dC({ data: e, id: t }) {
	let n = OS(), r = AS(), i = MS(), a = PS(), o = BS(), s = IS();
	if (!n || !r || !i || !a) return null;
	let { zoomLevel: c } = n, { expandedNodes: l } = r, { selectedNodes: u, highlightedNodes: d } = i, { toggleExpand: f, selectNode: p } = a, { graphNode: m, renderNode: h, ariaLevel: g, ariaSetSize: _, ariaPosInSet: v, visibleChildIds: y, stacked: b } = e, { source: x, target: S } = aC(n.direction), C = l.has(t), w = u.has(t), T = d.has(t), E = w ? "selected" : T ? "highlighted" : "default", D = c === "dot" ? "dot" : c === "compact" ? "compact" : "detail", O = (m.childrenCount ?? 0) > 0, k = o?.focusedNodeId === t, A = o ? (e) => o.registerNodeRef(t, e) : () => {}, j = C && y && y.length > 0 ? y.map((e) => `f0-graph-node-${e}`).join(" ") : void 0, M = {
		zoomLevel: c,
		variant: D,
		state: E,
		expanded: C,
		hasChildren: O,
		childrenCount: m.childrenCount,
		level: g,
		tabIndex: k ? 0 : -1,
		setSize: _,
		posInSet: v,
		nodeId: t,
		ariaOwns: j,
		stacked: b ?? !1,
		stackedHeight: s?.stackedNodeHeight,
		onExpandToggle: () => f(t),
		onClick: () => p(t),
		nodeRef: A,
		visibleTagTypes: s?.visibleTagTypes,
		deferredLoading: s?.deferredLoading,
		dataLoading: s?.dataLoadingEnabled ? m.dataLoaded === !1 : void 0
	};
	return /* @__PURE__ */ Z(Y, { children: [
		/* @__PURE__ */ X(rb, {
			type: "target",
			position: S,
			className: "!invisible",
			style: b ? iC(S) : void 0
		}),
		/* @__PURE__ */ X("div", {
			className: "pointer-events-none flex items-start justify-center",
			style: { width: "100%" },
			children: /* @__PURE__ */ X("div", {
				className: "pointer-events-auto",
				style: {
					width: b ? "100%" : void 0,
					maxWidth: b ? void 0 : "calc(100% - 20px)"
				},
				children: h(m, M)
			})
		}),
		/* @__PURE__ */ X(rb, {
			type: "source",
			position: x,
			className: "!invisible",
			style: b ? iC(x) : void 0
		})
	] });
}
dC.displayName = "F0GraphNodeWrapper";
var fC = Hn(dC, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.graphNode === r.graphNode && n.ariaLevel === r.ariaLevel && n.ariaSetSize === r.ariaSetSize && n.ariaPosInSet === r.ariaPosInSet && n.stacked === r.stacked && (n.visibleChildIds?.join(",") ?? "") === (r.visibleChildIds?.join(",") ?? "") && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
});
function pC({ data: e, id: t }) {
	let { count: n, parentId: r, parentWidth: i, loading: a } = e, o = OS(), s = AS(), c = PS(), l = BS(), u = IS(), d = g();
	if (!o || !s || !c) return null;
	let f = s.expandedNodes.has(r), { source: p, target: m } = aC(o.direction), h = l?.focusedNodeId === t, _ = l ? (e) => l.registerNodeRef(t, e) : void 0, v = d.t("actions.expand");
	return /* @__PURE__ */ Z(Y, { children: [
		/* @__PURE__ */ X(rb, {
			type: "target",
			position: m,
			className: "!invisible"
		}),
		/* @__PURE__ */ X("div", {
			className: "pointer-events-auto flex items-start justify-center",
			style: {
				width: i,
				height: 80
			},
			children: /* @__PURE__ */ X(nC, {
				ref: _,
				count: n,
				expanded: f,
				tabIndex: h ? 0 : -1,
				ariaLabel: v,
				onClick: () => c.toggleExpand(r),
				loading: a || u?.deferredLoading
			})
		}),
		/* @__PURE__ */ X(rb, {
			type: "source",
			position: p,
			className: "!invisible"
		})
	] });
}
pC.displayName = "F0GraphExpanderWrapper";
var mC = Hn(pC, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.parentId === r.parentId && n.count === r.count && n.parentWidth === r.parentWidth && n.loading === r.loading && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
});
function hC({ data: e, id: t }) {
	let { parentId: n, parentWidth: r, collapseLabel: i, stacked: a } = e, o = OS(), s = PS(), c = BS(), l = RS(), u = g();
	if (!o || !s || o.zoomLevel === "dot") return null;
	let { source: d, target: f } = aC(o.direction), p = c?.focusedNodeId === t, m = c ? (e) => c.registerNodeRef(t, e) : void 0, h = i ?? u.actions.collapse, _ = p || a === !0 && l?.hoveredStackParentId === n;
	return /* @__PURE__ */ Z(Y, { children: [
		/* @__PURE__ */ X(rb, {
			type: "target",
			position: f,
			className: "!invisible"
		}),
		/* @__PURE__ */ X("div", {
			className: "group pointer-events-auto flex items-start justify-center pt-2",
			style: {
				width: r,
				height: a ? uC(o.zoomLevel) : 80
			},
			children: /* @__PURE__ */ X("div", {
				"data-revealed": _ ? "true" : "false",
				className: H("backdrop-blur-[120px]", _ ? "visible" : "invisible group-hover:visible"),
				children: /* @__PURE__ */ X(P, {
					ref: m,
					variant: "neutral",
					size: "md",
					icon: On,
					hideLabel: !0,
					label: h,
					"aria-label": h,
					"aria-expanded": !0,
					tabIndex: p ? 0 : -1,
					onClick: () => s.toggleExpand(n)
				})
			})
		}),
		/* @__PURE__ */ X(rb, {
			type: "source",
			position: d,
			className: "!invisible"
		})
	] });
}
function gC(e) {
	return /* @__PURE__ */ X("div", {
		"aria-hidden": !0,
		className: "pointer-events-none h-full w-full"
	});
}
gC.displayName = "F0GraphStackGroupWrapper";
var _C = Hn(gC);
hC.displayName = "F0GraphCollapserWrapper";
var vC = Hn(hC, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.parentId === r.parentId && n.parentWidth === r.parentWidth && n.collapseLabel === r.collapseLabel && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
}), yC = 256, bC = 56, xC = 120, SC = 36, CC = 130, wC = 40, TC = 80;
function EC(e) {
	let t = e?.nodeWidth ?? yC, n = e?.nodeHeight ?? bC, r = e?.rankSep ?? CC, i = e?.nodeSep ?? wC, a = e?.rootSep ?? TC, o = e?.stackedNodeHeight ?? 44, s = e?.stackedNodeGap ?? 16, c = e?.snapGrid ?? 0;
	return K(() => ({ computeLayout(e, l, u) {
		return DC(e, l, u, {
			nodeWidth: t,
			nodeHeight: n,
			rankSep: r,
			nodeSep: i,
			rootSep: a,
			stackedNodeHeight: o,
			stackedNodeGap: s,
			snapGrid: c
		});
	} }), [
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c
	]);
}
function DC(e, t, n, r) {
	let { nodeWidth: i, nodeHeight: a, rankSep: o, nodeSep: s, rootSep: c, stackedNodeHeight: l, stackedNodeGap: u, snapGrid: d } = r;
	if (e.length === 0) return {
		nodes: [],
		edges: [],
		width: 0,
		height: 0
	};
	let f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
	for (let e of t) {
		if (e.target.startsWith("expander-")) continue;
		let t = f.get(e.source) ?? [];
		t.push(e.target), f.set(e.source, t), p.set(e.target, e.source);
	}
	let m = [];
	for (let t of e) t.id.startsWith("expander-") || p.has(t.id) || m.push(t.id);
	let h = /* @__PURE__ */ new Set();
	for (let t of e) t.stackNodes && h.add(t.id);
	let g = n === "LR" || n === "RL", _ = n === "BT" || n === "RL", v = g ? i : a, y = g ? a : i, b = v + o, x = s * 2, S = /* @__PURE__ */ new Map(), C = (e) => h.has(e) ? [] : f.get(e) ?? [];
	function w(e, t, n) {
		let r = C(e);
		if (r.length === 0) {
			let r = t + y / 2;
			return S.set(e, {
				cross: r,
				depth: n
			}), {
				crossEnd: t + y,
				centerCross: r
			};
		}
		let i = t, a = 0, o = 0;
		r.forEach((e, t) => {
			let r = w(e, i, n + 1);
			t === 0 && (a = r.centerCross), o = r.centerCross;
			let c = C(e).length > 0;
			i = r.crossEnd + (c ? x : s);
		});
		let c = r[r.length - 1], l = C(c).length > 0, u = i - (l ? x : s), d = (a + o) / 2, f = d - y / 2, p = d + y / 2, m = u;
		if (f < t) {
			let n = t - f;
			T(e, n), d += n, m = u + n;
		}
		return p > m && (m = p), S.set(e, {
			cross: d,
			depth: n
		}), {
			crossEnd: m,
			centerCross: d
		};
	}
	function T(e, t) {
		let n = [e];
		for (; n.length > 0;) {
			let e = n.pop(), r = S.get(e);
			r && (r.cross += t);
			let i = f.get(e);
			if (i) for (let e of i) n.push(e);
		}
	}
	let E = [];
	for (let e of m) {
		w(e, 0, 0);
		let t = Infinity, n = -Infinity, r = (e) => {
			let i = S.get(e);
			if (i) {
				let e = i.cross - y / 2, r = i.cross + y / 2;
				e < t && (t = e), r > n && (n = r);
			}
			let a = f.get(e);
			if (a) for (let e of a) r(e);
		};
		r(e), E.push({
			rootId: e,
			minCross: t,
			maxCross: n
		});
	}
	let D = 0;
	for (let { rootId: e, minCross: t, maxCross: n } of E) {
		let r = D - t;
		r !== 0 && T(e, r), D += n - t + c;
	}
	for (let e of h) {
		let t = S.get(e);
		t && (f.get(e) ?? []).forEach((e, n) => {
			S.set(e, {
				cross: t.cross,
				depth: t.depth + 1,
				stackIndex: n
			});
		});
	}
	let O = 0;
	for (let e of S.values()) e.depth > O && (O = e.depth);
	let k = Infinity, A = Infinity, j = -Infinity, M = -Infinity, N = (e) => d > 0 ? Math.round(e / d) * d : Math.round(e);
	return {
		nodes: e.map((e) => {
			let t = e.id.startsWith("expander-"), n = S.get(e.id);
			!n && t && e.parentId && (n = S.get(e.parentId));
			let r = n?.cross ?? 0, s = n?.depth ?? 0, c = n?.stackIndex, d = c !== void 0, f = t ? xC : d && g ? l : i, p = t ? SC : d && !g ? l : a, m = (_ ? O - s : s) * b, h = d ? c * (l + u) : 0, y = o * (1 - wS), x = d ? _ ? m + v - l / 2 - h + y : m + l / 2 + h - y : m + v / 2, C = t ? r : N(r), w = Math.round(x), T = g ? w : C, E = g ? C : w, D = Math.round(T - f / 2), P = Math.round(E - p / 2);
			return D < k && (k = D), P < A && (A = P), D + f > j && (j = D + f), P + p > M && (M = P + p), {
				id: e.id,
				x: D,
				y: P,
				width: f,
				height: p
			};
		}),
		edges: t.map((e) => ({
			id: e.id,
			source: e.source,
			target: e.target,
			points: []
		})),
		width: j === -Infinity ? 0 : j - k,
		height: M === -Infinity ? 0 : M - A
	};
}
//#endregion
//#region src/patterns/F0Graph/hooks/useViewportGeometry.ts
function OC({ enabled: e, padding: t = 600 }) {
	return $((n) => {
		if (!e) return null;
		let [r, i, a] = n.transform, { width: o, height: s } = n;
		return o <= 0 || s <= 0 || a <= 0 ? null : {
			minX: Math.floor((-r / a - t) / 400) * 400,
			minY: Math.floor((-i / a - t) / 400) * 400,
			maxX: Math.ceil(((-r + o) / a + t) / 400) * 400,
			maxY: Math.ceil(((-i + s) / a + t) / 400) * 400
		};
	}, (e, t) => e === t || e !== null && t !== null && e.minX === t.minX && e.minY === t.minY && e.maxX === t.maxX && e.maxY === t.maxY);
}
//#endregion
//#region src/patterns/F0Graph/hooks/useGraphRenderModel.ts
var kC = 6, AC = 26, jC = 4, MC = 2;
function NC({ roots: e, nodeMap: t, expandedNodes: n, anchorNodeRef: r, onAnchorReflow: i, resolvedEdgesProp: a, stableRenderNode: o, nodeTagTypes: s, visibleTagTypesSet: c, reserveTagRow: l, nodeWidthProp: u, nodeHeightProp: d, stackedNodeHeightProp: f, stackedNodeGapProp: p, layoutEngineProp: m, zoomLevel: h, direction: g, controlLabels: _, hoveredEdgeId: v, enableNodeWindowing: y, nodeWindowPadding: b }) {
	let x = K(() => $S(e, n), [e, n]), S = K(() => {
		let e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
		for (let e of x) {
			let n = e.parentId;
			t.has(n) || t.set(n, []), t.get(n).push(e);
		}
		for (let n of t.values()) for (let t = 0; t < n.length; t++) e.set(n[t].id, {
			level: n[t].depth + 1,
			setSize: n.length,
			posInSet: t + 1
		});
		return e;
	}, [x]), C = K(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of x) {
			if (t.childrenCount === 0) continue;
			let r = n.has(t.id), i = r && t.children.length === 0;
			(!r || i) && e.set(t.id, {
				expanderId: `expander-${t.id}`,
				avatars: [],
				count: t.childrenCount,
				loading: i
			});
		}
		return e;
	}, [x, n]), { stackedParentIds: w, stackedNodeIndex: T } = K(() => m ? {
		stackedParentIds: /* @__PURE__ */ new Set(),
		stackedNodeIndex: /* @__PURE__ */ new Map()
	} : QS(x), [x, m]), E = K(() => a && a.length > 0 ? a : ZS(e), [a, e]), { visibleEdges: D, expanderNodes: O } = K(() => {
		let e = new Set(x.map((e) => e.id)), t = [], n = [], r = new Set(C.keys());
		for (let [r, i] of C) e.has(r) && (t.push({
			id: `${r}->${i.expanderId}`,
			source: r,
			target: i.expanderId
		}), n.push({
			id: i.expanderId,
			parentId: r,
			avatars: i.avatars,
			count: i.count,
			loading: i.loading
		}));
		for (let n of E) r.has(n.source) || e.has(n.source) && e.has(n.target) && t.push(n);
		return {
			visibleEdges: t,
			expanderNodes: n
		};
	}, [
		E,
		x,
		C
	]), k = K(() => {
		let e = O.map((e) => ({
			id: e.id,
			parentId: e.parentId,
			data: null,
			children: [],
			depth: 0,
			childrenCount: 0,
			childrenLoaded: !0
		}));
		return [...x.map((e) => {
			let t = w.has(e.id);
			return !!e.stackNodes === t ? e : {
				...e,
				stackNodes: t
			};
		}), ...e];
	}, [
		x,
		O,
		w
	]), A = K(() => D, [D]), j = l ?? (s ? c.size > 0 : !1), M = s ? c.size : 1, N = j ? Math.max(1, Math.ceil(M / MC)) : 0, P = N > 0 ? kC + N * AC + (N - 1) * jC : 0, F = (d ?? 56) + P, I = EC({
		nodeWidth: u,
		nodeHeight: F,
		stackedNodeHeight: (f ?? 44) + P,
		stackedNodeGap: p,
		snapGrid: 32
	}), L = m ?? I, R = K(() => L.computeLayout(k, A, g), [
		L,
		k,
		A,
		g
	]), z = K(() => new Map(R.nodes.map((e) => [e.id, e])), [R.nodes]), B = K(() => KS(x, T, z, g), [
		x,
		T,
		z,
		g
	]), V = K(() => {
		let e = [];
		for (let [t, n] of B.groups) {
			let r = z.get(t);
			if (!r) continue;
			let i = Math.min(r.x, n.x), a = Math.min(r.y, n.y);
			e.push({
				parentId: t,
				x: i,
				y: a,
				width: Math.max(r.x + r.width, n.x + n.width) - i,
				height: Math.max(r.y + r.height, n.y + n.height) - a
			});
		}
		return e;
	}, [B, z]), H = K(() => JS(R.nodes), [R.nodes]), ee = W((e) => z.get(e), [z]), te = OC({
		enabled: y ?? !1,
		padding: b
	}), ne = sC[h], U = lC[h], re = SS[h], ie = q(/* @__PURE__ */ new Map()), ae = K(() => {
		let e = r.current;
		if (!e) return {
			dx: 0,
			dy: 0
		};
		let t = R.nodes.find((t) => t.id === e), n = ie.current.get(e);
		return n && t ? {
			dx: n.x - t.x,
			dy: n.y - t.y
		} : {
			dx: 0,
			dy: 0
		};
	}, [R.nodes, r]);
	Kn(() => {
		let { dx: e, dy: a } = ae;
		ie.current = new Map(R.nodes.map((e) => [e.id, {
			x: e.x,
			y: e.y
		}]));
		let o = r.current;
		if (o) {
			(e !== 0 || a !== 0) && i?.(e, a);
			let s = t.get(o);
			s !== void 0 && n.has(o) && s.childrenCount > 0 && s.children.length === 0 || (r.current = null);
		}
	}, [
		R.nodes,
		ae,
		t,
		n,
		r,
		i
	]);
	let oe = K(() => {
		if (!y || !te) return null;
		let e = u ?? 256, n = /* @__PURE__ */ new Set();
		for (let t of R.nodes) GS(t.x, t.y, t.width || e, t.height || F, te) && n.add(t.id);
		let r = Array.from(n);
		for (let e of r) {
			let r = t.get(e)?.parentId ?? null;
			for (; r !== null && !n.has(r);) n.add(r), r = t.get(r)?.parentId ?? null;
		}
		let i = new Set(r);
		for (let e of D) i.has(e.source) !== i.has(e.target) && (n.add(e.source), n.add(e.target));
		for (let e of Array.from(n)) {
			let t = B.previousRow.get(e);
			t && n.add(t);
		}
		return n;
	}, [
		y,
		te,
		D,
		R.nodes,
		u,
		F,
		t,
		B
	]), se = q(/* @__PURE__ */ new Map()), ce = K(() => {
		let e = u ?? 256, t = F, r = (e) => !oe || oe.has(e), i = oe !== null, a = g === "LR" || g === "RL", s = g === "TB" ? Q.Bottom : g === "BT" ? Q.Top : g === "LR" ? Q.Right : Q.Left, c = g === "TB" ? Q.Top : g === "BT" ? Q.Bottom : g === "LR" ? Q.Left : Q.Right, l = (e, t) => {
			let n = (n) => n === Q.Top ? {
				x: e / 2,
				y: 0
			} : n === Q.Bottom ? {
				x: e / 2,
				y: t
			} : n === Q.Left ? {
				x: 0,
				y: t / 2
			} : {
				x: e,
				y: t / 2
			};
			return [{
				type: "source",
				position: s,
				...n(s),
				width: 1,
				height: 1
			}, {
				type: "target",
				position: c,
				...n(c),
				width: 1,
				height: 1
			}];
		}, d = l(e, t), f = [];
		for (let e of B.groups.values()) [...e.rows.keys()].some(r) && f.push({
			id: e.id,
			type: "stackGroup",
			position: {
				x: e.x,
				y: e.y * 1
			},
			width: e.width,
			height: e.height,
			selectable: !1,
			draggable: !1,
			focusable: !1,
			zIndex: 0,
			targetPosition: c,
			...i ? { handles: l(e.width, e.height) } : null,
			data: { direction: g }
		});
		let p = [];
		for (let a of x) {
			if (!r(a.id)) continue;
			let u = z.get(a.id), f = se.current.get(a.id), m;
			f !== void 0 && f.parentId === a.parentId && f.data === a.data && f.childrenCount === a.childrenCount && f.childrenLoaded === a.childrenLoaded && f.dataLoaded === a.dataLoaded ? m = f : (m = {
				id: a.id,
				parentId: a.parentId,
				data: a.data,
				childrenCount: a.childrenCount,
				childrenLoaded: a.childrenLoaded,
				dataLoaded: a.dataLoaded
			}, se.current.set(a.id, m));
			let h = S.get(a.id), g;
			if (n.has(a.id) && a.children.length > 0) {
				let e = a.children.map((e) => e.id).filter((e) => r(e));
				g = e.length > 0 ? e : void 0;
			}
			let _ = T.has(a.id), v = B.groupOf.get(a.id), y = v ? B.groups.get(a.parentId ?? "")?.rows.get(a.id) : void 0, b = y ? y.width : _ ? u?.width ?? e : e, x = y ? y.height : _ ? u?.height ?? t : t;
			p.push({
				id: a.id,
				type: "graphNode",
				...y && v ? { parentId: v } : null,
				position: y ? {
					x: y.x,
					y: y.y
				} : {
					x: u?.x ?? 0,
					y: (u?.y ?? 0) * 1
				},
				width: b,
				...i ? {
					height: x,
					handles: _ ? l(b, x) : d
				} : null,
				sourcePosition: s,
				targetPosition: c,
				data: {
					graphNode: m,
					renderNode: o,
					ariaLevel: h?.level ?? 1,
					ariaSetSize: h?.setSize ?? 1,
					ariaPosInSet: h?.posInSet ?? 1,
					visibleChildIds: g,
					stacked: _ || void 0
				}
			});
		}
		for (let i of O) {
			if (!r(i.id)) continue;
			let o = z.get(i.parentId) ?? {
				x: 0,
				y: 0,
				width: e,
				height: t
			}, l = o.width ?? e, u = o.height ?? t, d = w.has(i.parentId) ? U : ne, f = a ? g === "LR" ? o.x + l + d : o.x - l : o.x, m = a ? o.y * 1 : g === "TB" ? o.y * 1 + u + d : o.y * 1 - u;
			p.push({
				id: i.id,
				type: "expanderNode",
				position: {
					x: f,
					y: m
				},
				sourcePosition: s,
				targetPosition: c,
				data: {
					avatars: i.avatars,
					count: i.count,
					expanded: n.has(i.parentId),
					parentId: i.parentId,
					parentWidth: e,
					loading: i.loading
				}
			});
		}
		for (let i of x) {
			if (!n.has(i.id) || i.children.length === 0 || !r(i.id)) continue;
			let o = z.get(i.id), l = o?.x ?? 0, u = o?.y ?? 0, d = o?.width ?? e, f = o?.height ?? t, m = w.has(i.id) ? U : ne, h = a ? g === "LR" ? l + d + m + re : l - d : l, v = a ? u * 1 : g === "TB" ? u * 1 + f + m + re : u * 1 - f;
			p.push({
				id: `collapser-${i.id}`,
				type: "collapserNode",
				zIndex: 10,
				position: {
					x: h,
					y: v
				},
				sourcePosition: s,
				targetPosition: c,
				data: {
					parentId: i.id,
					parentWidth: e,
					collapseLabel: _?.collapseChildren,
					stacked: w.has(i.id)
				}
			});
		}
		return [...f, ...p];
	}, [
		oe,
		z,
		B,
		x,
		O,
		n,
		o,
		ne,
		U,
		re,
		w,
		u,
		F,
		g,
		S,
		T,
		_?.collapseChildren
	]), le = K(() => ce.filter((e) => e.type === "graphNode").map((e) => e.id), [ce]), ue = K(() => {
		let e = new Set(le);
		return ce.filter((e) => e.type === "graphNode").filter((t) => {
			let { parentId: n } = t.data.graphNode;
			return n == null || !e.has(n);
		}).map((e) => e.id);
	}, [ce, le]);
	return {
		visibleTreeNodes: x,
		rfNodes: ce,
		rfEdges: K(() => {
			let e = new Set(x.filter((e) => n.has(e.id) && e.children.length > 0).map((e) => e.id)), t = (e) => B.previousRow.get(e.target) ?? e.source;
			return D.filter((e) => !oe || oe.has(t(e)) && oe.has(e.target)).map((n) => {
				let r = B.previousRow.get(n.target), i = t(n), a = !!(n.onEdgeClick || n.onEdgeHover) && n.id === v, o = n.data;
				return {
					id: n.id,
					source: i,
					target: n.target,
					type: "graphEdge",
					data: {
						...o,
						graphEdge: n,
						...a ? { variant: "hover" } : null,
						showDot: !n.target.startsWith("expander-") && !n.source.startsWith("expander-") && !e.has(i) && r === void 0
					}
				};
			});
		}, [
			D,
			x,
			n,
			v,
			oe,
			T,
			B
		]),
		reservedTagHeight: P,
		tagsAffectLayout: j,
		renderedNodeCount: le.length,
		renderedNodeIds: le,
		treeRootNodeIds: ue,
		contentBounds: H,
		getNodePosition: ee,
		stackHoverZones: V
	};
}
//#endregion
//#region src/patterns/F0Graph/types.ts
var PC = {
	default: {
		detail: .56,
		compact: .3,
		dot: .18
	},
	dense: {
		detail: .5,
		compact: .2,
		dot: .08
	},
	sparse: {
		detail: .85,
		compact: .45,
		dot: .15
	}
}, FC = .05;
function IC(e, t) {
	let n = q("detail"), r = K(() => t?.thresholds ? t.thresholds : { ...PC[t?.preset ?? "default"] }, [t?.thresholds, t?.preset]), i = t?.hysteresis ?? FC, a = K(() => {
		let t = n.current, a = r, o = LC(e, a);
		return RC(e, a, t, i) === t ? t : o;
	}, [
		e,
		r,
		i
	]);
	return G(() => {
		n.current = a;
	}, [a]), a;
}
function LC(e, t) {
	return e >= t.detail ? "detail" : e >= t.compact ? "compact" : "dot";
}
function RC(e, t, n, r) {
	let i = r;
	switch (n) {
		case "detail": return e >= t.detail - i ? "detail" : LC(e, t);
		case "compact": return e >= t.detail + i ? "detail" : e >= t.compact - i ? "compact" : LC(e, t);
		case "dot": return e >= t.compact + i ? "compact" : "dot";
	}
}
//#endregion
//#region src/patterns/F0Graph/hooks/useGraphViewport.ts
function zC(e) {
	return !!e && ((e.top ?? 0) > 0 || (e.right ?? 0) > 0 || (e.bottom ?? 0) > 0 || (e.left ?? 0) > 0);
}
function BC({ defaultZoom: e, zoomPreset: t, zoomThresholds: n, currentUserNodeId: r, onZoomLevelChange: i, onViewportChange: a, nodeWindowingActive: o = !1, getContentBounds: s, getNodePosition: c, viewportInset: l }) {
	let u = Py(), d = zv(), f = q(l);
	f.current = l;
	let p = zC(l), [m, h] = J(e), g = IC(m, {
		preset: t,
		thresholds: n
	}), _ = q(g);
	G(() => {
		_.current !== g && (_.current = g, i?.(g));
	}, [g, i]);
	let [v, y] = J(!1), b = q(!1), x = q(e), S = W((e) => {
		b.current || (b.current = !0, y(!0)), e.zoom !== x.current && (x.current = e.zoom, h(e.zoom)), a?.({
			x: e.x,
			y: e.y,
			zoom: e.zoom
		});
	}, [a]), C = W(() => {
		u.zoomIn({ duration: 300 });
	}, [u]), w = W(() => {
		u.zoomOut({ duration: 300 });
	}, [u]), T = W((e) => {
		let t = f.current;
		if (!zC(t)) return e;
		let { width: n, height: r } = d.getState(), i = (t) => (t - t / (1 + e)) / 2, a = i(n), o = i(r);
		return {
			top: `${o + (t.top ?? 0)}px`,
			right: `${a + (t.right ?? 0)}px`,
			bottom: `${o + (t.bottom ?? 0)}px`,
			left: `${a + (t.left ?? 0)}px`
		};
	}, [d]), E = W(() => {
		let e = o ? s?.() : null;
		if (e) {
			let t = T(TS);
			if (typeof t == "number") {
				u.fitBounds(e, {
					duration: 400,
					padding: t
				});
				return;
			}
			let { width: n, height: r, minZoom: i, maxZoom: a } = d.getState();
			u.setViewport(Og(e, n, r, i, a, t), { duration: 400 });
			return;
		}
		u.fitView({
			duration: 400,
			padding: T(TS)
		});
	}, [
		u,
		d,
		o,
		s,
		T
	]), D = W((t, n, r = e) => {
		let i = c?.(t);
		if (!i) return !1;
		let a = f.current, o = ((a?.right ?? 0) - (a?.left ?? 0)) / 2 / r, s = ((a?.bottom ?? 0) - (a?.top ?? 0)) / 2 / r;
		return u.setCenter(i.x + i.width / 2 + o, i.y + i.height / 2 + s, {
			duration: n,
			zoom: r
		}), !0;
	}, [
		u,
		c,
		e
	]);
	return {
		zoomLevel: g,
		viewportReady: v,
		handleViewportChange: S,
		handleZoomIn: C,
		handleZoomOut: w,
		handleFitView: E,
		handleFocusUser: W(() => {
			r && (o && D(r, 400) || u.fitView({
				nodes: [{ id: r }],
				duration: 400,
				padding: T(ES)
			}));
		}, [
			r,
			u,
			o,
			D,
			T
		]),
		centerOnNode: D,
		getFitPadding: T,
		hasViewportInset: p
	};
}
//#endregion
//#region src/patterns/F0Graph/hooks/useLazyTree.ts
function VC(e) {
	let { rootNodes: t, loadChildren: n } = e, [r, i] = J(() => t), [a, o] = J(/* @__PURE__ */ new Set()), [s, c] = J(/* @__PURE__ */ new Map()), l = q(/* @__PURE__ */ new Set()), u = q(r);
	G(() => {
		u.current = r;
	}, [r]);
	let d = q(new Set(t.map((e) => e.id)));
	G(() => {
		let e = new Set(t.map((e) => e.id)), n = d.current, r = e.size !== n.size;
		if (!r) {
			for (let t of e) if (!n.has(t)) {
				r = !0;
				break;
			}
		}
		r && (d.current = e, i((n) => {
			let r = n.filter((t) => t.parentId !== null && !e.has(t.id));
			return [...t, ...r];
		}));
	}, [t]);
	let f = W(async (e) => {
		if (l.current.has(e)) return u.current.filter((t) => t.parentId === e);
		o((t) => {
			let n = new Set(t);
			return n.add(e), n;
		}), c((t) => {
			if (!t.has(e)) return t;
			let n = new Map(t);
			return n.delete(e), n;
		});
		try {
			let r = (await n(e)).map((t) => ({
				...t,
				parentId: t.parentId ?? e
			}));
			return l.current.add(e), i((n) => [...n.filter((n) => n.parentId !== e || t.some((e) => e.id === n.id)), ...r].map((t) => t.id === e ? {
				...t,
				childrenLoaded: !0
			} : t)), r;
		} catch (t) {
			return c((n) => {
				let r = new Map(n);
				return r.set(e, t instanceof Error ? t : Error(String(t))), r;
			}), [];
		} finally {
			o((t) => {
				let n = new Set(t);
				return n.delete(e), n;
			});
		}
	}, [n, t]), p = W(async (e) => await f(e), [f]), m = W((e) => {}, []), h = W(async (e) => (l.current.delete(e), await f(e)), [f]);
	return K(() => ({
		nodes: r,
		loadingNodes: a,
		errorNodes: s,
		expandNode: p,
		collapseNode: m,
		retryNode: h
	}), [
		r,
		a,
		s,
		p,
		m,
		h
	]);
}
//#endregion
//#region src/patterns/F0Graph/hooks/useSelectionFocus.ts
function HC({ roots: e, expandedNodes: t, selectionMode: n, controlledSelected: r, onNodeSelect: i, onSelectedNodesChange: a, canvasRef: o }) {
	let [s, c] = J(/* @__PURE__ */ new Set()), l = r ?? s, u = r !== void 0, d = q(l);
	G(() => {
		d.current = l;
	}, [l]);
	let [f, p] = J(() => {
		let n = $S(e, t);
		return n.length > 0 ? n[0].id : null;
	}), m = q(f);
	G(() => {
		m.current = f;
	}, [f]);
	let h = q(/* @__PURE__ */ new Map()), g = W((e, t) => {
		t ? h.current.set(e, t) : h.current.delete(e);
	}, []), _ = K(() => {
		let n = [];
		function r(e) {
			for (let i of e) n.push(i.id), t.has(i.id) && i.children.length > 0 ? (r(i.children), n.push(`collapser-${i.id}`)) : i.childrenCount > 0 && n.push(`expander-${i.id}`);
		}
		for (let t of e) r([t]);
		return n;
	}, [e, t]), v = K(() => new Set(_), [_]), y = q(_);
	return G(() => {
		y.current = _;
	}, [_]), G(() => {
		if (_.length !== 0 && (f === null || !v.has(f))) {
			let e = f === null ? _.find((e) => l.has(e)) : void 0;
			p(e ?? _[0]);
		}
	}, [
		_,
		f,
		l,
		v
	]), {
		selectedNodes: l,
		focusedNodeId: f,
		setFocusedNodeId: p,
		focusedNodeIdRef: m,
		registerNodeRef: g,
		nodeRefsMapRef: h,
		flatVisibleOrderRef: y,
		selectNode: W((e) => {
			if (m.current = e, p(e), n !== "none") {
				let t = d.current;
				if (!t.has(e)) {
					let r = n === "single" ? /* @__PURE__ */ new Set([e]) : /* @__PURE__ */ new Set([...t, e]);
					u || c(r), i?.(e, !0), a?.(r);
				}
			}
		}, [
			n,
			u,
			i,
			a
		]),
		clearSelection: W(() => {
			let e = d.current;
			u || c(/* @__PURE__ */ new Set()), e.size > 0 && a?.(/* @__PURE__ */ new Set()), p(null), o.current?.focus();
		}, [
			u,
			a,
			o
		])
	};
}
//#endregion
//#region src/patterns/F0Graph/hooks/useTreeBuilder.ts
function UC(e) {
	return K(() => GC(e), [e]);
}
function WC(e) {
	return e.parentIds && e.parentIds.length > 0 ? e.parentIds[0] : e.parentId;
}
function GC(e) {
	let t = /* @__PURE__ */ new Map(), n = [], r = [], i = /* @__PURE__ */ new Set();
	for (let n of e) {
		let e = WC(n), r = n.parentIds && n.parentIds.length > 0 ? n.parentIds : void 0, i = {
			id: n.id,
			parentId: e,
			data: n.data,
			children: [],
			depth: 0,
			childrenCount: n.childrenCount ?? 0,
			childrenLoaded: n.childrenLoaded ?? !1,
			dataLoaded: n.dataLoaded,
			stackNodes: n.stackNodes
		};
		r && (i.dagParentIds = r), t.set(n.id, i);
	}
	for (let [e, n] of t) n.parentId === e && (r.push(e), i.add(e), n.parentId = null);
	let a = [];
	for (let [e, r] of t) {
		if (i.has(e)) {
			a.push(r);
			continue;
		}
		if (r.parentId === null) a.push(r);
		else {
			let i = t.get(r.parentId);
			i ? i.children.push(r) : (n.push(e), r.parentId = null, a.push(r));
		}
	}
	let o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
	function c(e) {
		if (s.has(e.id)) {
			r.push(e.id), i.add(e.id);
			return;
		}
		if (!o.has(e.id)) {
			o.add(e.id), s.add(e.id), e.children = e.children.filter((e) => !s.has(e.id) || (r.push(e.id), i.add(e.id), e.parentId = null, a.push(e), !1));
			for (let t of e.children) c(t);
			s.delete(e.id);
		}
	}
	for (let e of [...a]) c(e);
	for (let e of t.values()) o.has(e.id) || c(e);
	function l(e, t) {
		e.depth = t;
		for (let n of e.children) l(n, t + 1);
	}
	for (let e of a) l(e, 0);
	return {
		roots: a,
		nodeMap: t,
		orphans: n,
		cycles: r
	};
}
//#endregion
//#region src/patterns/F0Graph/hooks/useViewportDataLoader.ts
function KC({ nodeIds: e, loadVisibleNodeData: t, debounceMs: n = 200, enabled: r = !0 }) {
	let i = q(/* @__PURE__ */ new Set()), a = q(/* @__PURE__ */ new Set()), o = q(/* @__PURE__ */ new Set()), s = q(null), c = q(t);
	c.current = t, G(() => {
		if (o.current = new Set(e), !t || !r) return;
		let l = !1;
		for (let t of e) !i.current.has(t) && !a.current.has(t) && (a.current.add(t), l = !0);
		a.current.size !== 0 && (!l && s.current !== null || (s.current && clearTimeout(s.current), s.current = setTimeout(() => {
			s.current = null;
			let e = o.current, t = [];
			for (let n of a.current) e.has(n) && (t.push(n), i.current.add(n));
			a.current.clear(), t.length > 0 && c.current?.(t);
		}, n)));
	}, [
		e,
		t,
		n,
		r
	]), G(() => () => {
		s.current && clearTimeout(s.current), s.current = null;
	}, []);
}
//#endregion
//#region src/patterns/F0Graph/components/F0GraphControls/F0GraphControls.tsx
var qC = Bn(({ onZoomIn: e, onZoomOut: t, onFitView: n, onFocusUser: r, labels: i }, a) => {
	let o = g();
	return /* @__PURE__ */ Z("div", {
		ref: a,
		role: "toolbar",
		"aria-label": o.graph.controls.navigation,
		className: "flex flex-col items-center gap-2",
		children: [
			r && /* @__PURE__ */ X(P, {
				variant: "outline",
				size: "md",
				label: i?.findMe ?? o.graph.controls.findMe,
				icon: Gt,
				hideLabel: !0,
				onClick: r
			}),
			/* @__PURE__ */ X(P, {
				variant: "outline",
				size: "md",
				label: i?.fitView ?? o.graph.controls.fitToView,
				icon: Ie,
				hideLabel: !0,
				onClick: n
			}),
			/* @__PURE__ */ X("div", { className: "h-px w-4 bg-f1-border rounded" }),
			/* @__PURE__ */ X(P, {
				variant: "outline",
				size: "md",
				label: i?.zoomIn ?? o.graph.controls.zoomIn,
				icon: ut,
				hideLabel: !0,
				onClick: e
			}),
			/* @__PURE__ */ X(P, {
				variant: "outline",
				size: "md",
				label: i?.zoomOut ?? o.graph.controls.zoomOut,
				icon: Lt,
				hideLabel: !0,
				onClick: t
			})
		]
	});
});
qC.displayName = "F0GraphControls";
//#endregion
//#region src/patterns/F0Graph/components/F0GraphEdge/F0GraphEdge.tsx
var JC = {
	default: "var(--f0-graph-edge-default)",
	hover: "var(--f0-graph-edge-hover)",
	highlighted: "var(--f0-graph-edge-highlighted)",
	dimmed: "var(--f0-graph-edge-default)"
}, YC = "f0-edge-dot", XC = 5, ZC = {
	smoothstep: s_,
	straight: t_,
	bezier: Jg
};
function QC({ variant: e, strokeWidth: t = 1, pathType: n, type: r, ...i }) {
	let a = i.data?.variant, o = e ?? a ?? "default", s = OS(), c = (s ? s.zoomLevel === "detail" ? 1 : s.zoomLevel === "compact" ? 2 : 4 : void 0) ?? i.style?.strokeWidth ?? t, l = i.data?.showDot !== !1, u = n ?? i.data?.pathType ?? "smoothstep", [d] = ((i.sourcePosition === "bottom" || i.sourcePosition === "top" ? Math.abs(i.sourceX - i.targetX) : Math.abs(i.sourceY - i.targetY)) < 2 ? t_ : ZC[u] ?? ZC.smoothstep)({
		sourceX: i.sourceX,
		sourceY: i.sourceY,
		targetX: i.targetX,
		targetY: i.targetY,
		sourcePosition: i.sourcePosition,
		targetPosition: i.targetPosition,
		borderRadius: 10
	}), f = JC[o];
	return /* @__PURE__ */ Z(Y, { children: [l && /* @__PURE__ */ X("defs", { children: /* @__PURE__ */ X("marker", {
		id: `${YC}-${i.id}`,
		viewBox: "0 0 10 10",
		refX: XC,
		refY: XC,
		markerWidth: XC,
		markerHeight: XC,
		children: /* @__PURE__ */ X("circle", {
			cx: XC,
			cy: XC,
			r: XC * .8,
			fill: f
		})
	}) }), /* @__PURE__ */ X(Lb, {
		id: i.id,
		path: d,
		markerEnd: l ? `url(#${YC}-${i.id})` : void 0,
		style: {
			stroke: f,
			strokeWidth: c,
			opacity: o === "dimmed" ? .5 : void 0
		}
	})] });
}
QC.displayName = "F0GraphEdge";
var $C = Hn(QC, (e, t) => e.id === t.id && e.variant === t.variant && e.strokeWidth === t.strokeWidth && e.data?.variant === t.data?.variant && e.data?.showDot === t.data?.showDot && e.data?.pathType === t.data?.pathType && e.style?.strokeWidth === t.style?.strokeWidth && e.sourceX === t.sourceX && e.sourceY === t.sourceY && e.targetX === t.targetX && e.targetY === t.targetY && e.sourcePosition === t.sourcePosition && e.targetPosition === t.targetPosition);
$C.displayName = "F0GraphEdge";
//#endregion
//#region src/patterns/F0Graph/components/F0GraphView/F0GraphView.tsx
function ew(e) {
	let t = e.data, n = t?.graphEdge, r = t?.variant ?? "default", i = IS()?.renderEdge;
	if (i && n) {
		let e = i(n, r);
		if (e !== null) return /* @__PURE__ */ X(Y, { children: e });
	}
	return /* @__PURE__ */ X(QC, {
		...e,
		variant: r
	});
}
ew.displayName = "F0GraphEdgeWrapper";
var tw = Hn(ew, (e, t) => e.id === t.id && e.data?.showDot === t.data?.showDot && e.data?.variant === t.data?.variant && e.data?.graphEdge === t.data?.graphEdge && e.sourceX === t.sourceX && e.sourceY === t.sourceY && e.targetX === t.targetX && e.targetY === t.targetY && e.sourcePosition === t.sourcePosition && e.targetPosition === t.targetPosition), nw = {
	graphNode: fC,
	expanderNode: mC,
	collapserNode: vC,
	stackGroup: _C
}, rw = { graphEdge: QC }, iw = { graphEdge: tw };
function aw(e) {
	let { handleRef: t, nodes: n, edges: r, rootNodes: i, loadChildren: a, deferredNodes: o, onDeferredLoadComplete: s, onDeferredLoadError: c, renderNode: l, zoomPreset: u, zoomThresholds: d, defaultZoom: f = 1, minZoom: p = .05, maxZoom: m = 2, expandedNodes: h, defaultExpandedNodes: _, defaultExpandDepth: v, onExpandToggle: y, onExpandedNodesChange: b, selectionMode: x = "single", selectedNodes: S, onNodeSelect: C, onSelectedNodesChange: w, onPaneClick: T, focusedNode: E, initialFocusNodeId: D, centerOnNodeClick: O = !0, nodeClickZoom: k, viewportInset: A, highlightedNodes: j, nodeWidth: M, nodeHeight: N, stackedNodeHeight: P, stackedNodeGap: F, canvasActions: I, canvasFooterActions: L, showControls: R = !1, onZoomLevelChange: z, onViewportChange: B, renderEdge: V, nodeTagTypes: H, visibleTagTypes: ee, defaultVisibleTagTypes: te, reserveTagRow: ne, onVisibleNodesChange: U, onRenderedNodesChange: re, enableNodeWindowing: ie, nodeWindowPadding: ae, loadVisibleNodeData: oe, visibleDataDebounceMs: se, layoutEngine: ce, controlLabels: le, currentUserNodeId: ue, onFocusUser: de } = e, fe = g(), pe = Py(), [me, he] = J(null), [ge, _e] = J(null), ve = q(null), ye = q(null), be = ee ?? te ?? H ?? xS, xe = K(() => new Set(be), [be]), Se = q(l);
	Se.current = l;
	let Ce = K(() => (e, t) => Se.current(e, t), []), we = V ? iw : rw, Te = i !== void 0 && a !== void 0, Ee = q([]).current, De = q(async () => []).current, Oe = VC({
		rootNodes: Te ? i : Ee,
		loadChildren: Te ? a : De
	}), ke = VS({
		initialNodes: n ?? [],
		initialEdges: r ?? [],
		deferredNodes: Te ? void 0 : o
	}), Ae = q(ke.deferredStatus);
	G(() => {
		let e = Ae.current, t = ke.deferredStatus;
		Ae.current = t, e !== "resolved" && t === "resolved" && s?.(), e !== "error" && t === "error" && ke.error && c?.(ke.error);
	}, [
		ke.deferredStatus,
		ke.error,
		s,
		c
	]);
	let je = Te ? Oe.nodes : o ? ke.mergedNodes : n ?? [], Me = Te ? r : o ? ke.mergedEdges : r, { roots: Ne, nodeMap: Pe } = UC(je), Fe = q(null), Ie = q(null), Le = q(null), { expandedNodes: Re, expandedNodesRef: ze, anchorNodeRef: Be, toggleExpand: Ve, expandAll: He, collapseAll: Ue } = eC({
		roots: Ne,
		nodeMap: Pe,
		isLazyMode: Te,
		lazyTree: Oe,
		controlledExpanded: h,
		defaultExpandedNodes: _,
		defaultExpandDepth: v,
		onExpandToggle: y,
		onExpandedNodesChange: b
	}), We = q(null), Ge = q(() => void 0), Ke = q([]), qe = q("detail"), Je = K(() => () => We.current, []), Ye = K(() => (e) => Ge.current(e), []), { zoomLevel: Xe, viewportReady: Ze, handleViewportChange: Qe, handleZoomIn: $e, handleZoomOut: et, handleFitView: tt, handleFocusUser: nt, centerOnNode: rt, getFitPadding: it, hasViewportInset: at } = BC({
		defaultZoom: f,
		zoomPreset: u,
		zoomThresholds: d,
		currentUserNodeId: ue,
		onZoomLevelChange: z,
		onViewportChange: B,
		nodeWindowingActive: ie ?? !1,
		getContentBounds: Je,
		getNodePosition: Ye,
		viewportInset: A
	}), ot = (ie ?? !1) && Ze, { selectedNodes: st, focusedNodeId: ct, setFocusedNodeId: lt, focusedNodeIdRef: ut, registerNodeRef: dt, nodeRefsMapRef: ft, flatVisibleOrderRef: pt, selectNode: mt, clearSelection: ht } = HC({
		roots: Ne,
		expandedNodes: Re,
		selectionMode: x,
		controlledSelected: S,
		onNodeSelect: C,
		onSelectedNodesChange: w,
		canvasRef: Fe
	}), gt = j ?? bS, { visibleTreeNodes: _t, rfNodes: vt, rfEdges: yt, reservedTagHeight: bt, renderedNodeCount: xt, renderedNodeIds: St, treeRootNodeIds: Ct, contentBounds: wt, getNodePosition: Tt, stackHoverZones: Et } = NC({
		roots: Ne,
		nodeMap: Pe,
		expandedNodes: Re,
		anchorNodeRef: Be,
		onAnchorReflow: W((e, t) => {
			let n = pe.getViewport();
			pe.setViewport({
				x: n.x + e * n.zoom,
				y: n.y + t * n.zoom,
				zoom: n.zoom
			});
		}, [pe]),
		resolvedEdgesProp: Me,
		stableRenderNode: Ce,
		nodeTagTypes: H,
		visibleTagTypesSet: xe,
		reserveTagRow: ne,
		nodeWidthProp: M,
		nodeHeightProp: N,
		stackedNodeHeightProp: P,
		stackedNodeGapProp: F,
		layoutEngineProp: ce,
		zoomLevel: Xe,
		direction: "TB",
		controlLabels: le,
		hoveredEdgeId: me,
		enableNodeWindowing: ot,
		nodeWindowPadding: ae
	});
	We.current = wt, Ge.current = Tt, Ke.current = Et, qe.current = Xe;
	let Dt = W((e, t, n) => {
		if (n === "touch") return;
		let r = Ke.current;
		if (r.length === 0 || qe.current === "dot") return;
		let i = pe.screenToFlowPosition({
			x: e,
			y: t
		}), a = qS(r, i.x, i.y);
		ve.current !== a && (ve.current = a, _e(a));
	}, [pe]), Ot = W((e) => {
		ye.current = {
			x: e.clientX,
			y: e.clientY,
			pointerType: e.pointerType
		}, Dt(e.clientX, e.clientY, e.pointerType);
	}, [Dt]), kt = W((e) => {
		Qe(e);
		let t = ye.current;
		t && Dt(t.x, t.y, t.pointerType);
	}, [Qe, Dt]), At = W(() => {
		ye.current = null, ve.current !== null && (ve.current = null, _e(null));
	}, []), jt = K(() => () => {
		ht(), T?.();
	}, [ht, T]), { handleTreeKeyDown: Mt, handleCanvasKeyDown: Nt } = tC({
		nodeMap: Pe,
		clearSelection: ht,
		toggleExpand: Ve,
		selectNode: mt,
		focusedNodeIdRef: ut,
		setFocusedNodeId: lt,
		flatVisibleOrderRef: pt,
		expandedNodesRef: ze,
		nodeRefsMapRef: ft
	});
	G(() => {
		U?.(_t.length);
	}, [_t.length, U]), G(() => {
		re?.(xt);
	}, [xt, re]), KC({
		nodeIds: St,
		loadVisibleNodeData: oe,
		debounceMs: se,
		enabled: !ie || Ze
	});
	let Pt = q(() => {});
	Pt.current = (e) => {
		if (ie && rt(e, 300)) return;
		let t = WS(e, Pe.get(e)?.children.map((e) => e.id) ?? [], new Set(St));
		pe.fitView({
			nodes: t ?? [{ id: e }],
			duration: 300,
			padding: it(ES),
			maxZoom: Math.min(1, m)
		});
	};
	let Ft = q(() => {});
	Ft.current = (e) => {
		let t = Math.min(k ?? 1.5, m);
		rt(e, 300, t) || pe.fitView({
			nodes: [{ id: e }],
			duration: 300,
			padding: it(TS),
			maxZoom: t
		});
	};
	let It = q(null);
	G(() => () => {
		It.current && clearTimeout(It.current);
	}, []);
	let Lt = W((e) => {
		mt(e), !(!O || !Pe.has(e)) && (It.current && clearTimeout(It.current), It.current = setTimeout(() => Ft.current(e), 100));
	}, [
		mt,
		O,
		Pe
	]);
	G(() => {
		if (!E) return;
		let e = E, t = setTimeout(() => Pt.current(e), 100);
		return () => clearTimeout(t);
	}, [E]);
	let Rt = q(null), zt = q(!1);
	G(() => {
		if (zt.current || St.length === 0) return;
		if (zt.current = !0, !D) {
			pe.fitView(at ? { padding: it(TS) } : void 0);
			return;
		}
		let e = D;
		Rt.current = setTimeout(() => Ft.current(e), 100);
	}, [
		St.length,
		D,
		pe
	]), G(() => () => {
		Rt.current && clearTimeout(Rt.current);
	}, []);
	let Bt = q(() => {});
	Bt.current = ht, Gn(t, () => ({
		focusNode: (e) => Pt.current(e),
		clearSelection: () => Bt.current()
	}), []);
	let Vt = K(() => ({
		zoomLevel: Xe,
		direction: "TB"
	}), [Xe, "TB"]), Ht = K(() => ({ expandedNodes: Re }), [Re]), Ut = K(() => ({
		selectedNodes: st,
		highlightedNodes: gt
	}), [st, gt]), Wt = K(() => ({ hoveredStackParentId: ge }), [ge]), Gt = K(() => ({
		toggleExpand: Ve,
		selectNode: mt,
		expandAll: He,
		collapseAll: Ue
	}), [
		Ve,
		mt,
		He,
		Ue
	]), Kt = !Te && o !== void 0 && ke.deferredStatus === "loading", qt = _t.length > 700, Jt = K(() => ({
		renderEdge: V,
		visibleTagTypes: H ? xe : void 0,
		deferredLoading: Kt || void 0,
		dataLoadingEnabled: oe !== void 0 || void 0,
		tagRowHeight: bt,
		stackedNodeHeight: P,
		largeGraph: qt
	}), [
		V,
		H,
		xe,
		Kt,
		oe,
		qt,
		bt,
		P
	]), Yt = K(() => ({
		focusedNodeId: ct,
		setFocusedNodeId: lt,
		registerNodeRef: dt
	}), [
		ct,
		lt,
		dt
	]), Xt = Ct.length === 0, Zt = K(() => Ct.length > 0 ? Ct.map((e) => `f0-graph-node-${e}`).join(" ") : void 0, [Ct]);
	return /* @__PURE__ */ X(NS.Provider, {
		value: Gt,
		children: /* @__PURE__ */ X(FS.Provider, {
			value: Jt,
			children: /* @__PURE__ */ X(zS.Provider, {
				value: Yt,
				children: /* @__PURE__ */ X(DS.Provider, {
					value: Vt,
					children: /* @__PURE__ */ X(kS.Provider, {
						value: Ht,
						children: /* @__PURE__ */ X(jS.Provider, {
							value: Ut,
							children: /* @__PURE__ */ X(LS.Provider, {
								value: Wt,
								children: /* @__PURE__ */ Z("div", {
									ref: Fe,
									tabIndex: 0,
									"aria-label": le?.graphCanvas ?? fe.graph.canvas,
									onKeyDown: Nt,
									"data-zoom-level": Xe,
									className: "f0-graph relative h-full w-full outline-none",
									children: [
										/* @__PURE__ */ X("div", {
											ref: Ie,
											role: "tree",
											"aria-label": le?.graphView ?? fe.graph.view,
											"aria-owns": Zt,
											"aria-busy": Xt || void 0,
											onKeyDown: Mt,
											onPointerMove: Ot,
											onPointerLeave: At,
											onPointerDown: (e) => {
												Le.current = {
													x: e.clientX,
													y: e.clientY,
													id: e.pointerId
												};
											},
											onPointerUp: (e) => {
												let t = Le.current;
												if (Le.current = null, !t || t.id !== e.pointerId) return;
												let n = e.clientX - t.x, r = e.clientY - t.y;
												if (n * n + r * r > 16) return;
												let i = e.target;
												if (i?.closest("[data-no-node-select]")) return;
												let a = i?.closest(".react-flow__node");
												if (!a) return;
												let o = a.getAttribute("data-id");
												o && Lt(o);
											},
											className: "h-full w-full",
											children: /* @__PURE__ */ X(Fx, {
												nodes: vt,
												edges: yt,
												nodeTypes: nw,
												edgeTypes: we,
												onlyRenderVisibleElements: !ot,
												minZoom: p,
												maxZoom: m,
												defaultViewport: {
													x: 0,
													y: 0,
													zoom: f
												},
												onViewportChange: kt,
												onPaneClick: jt,
												onEdgeMouseEnter: (e, t) => {
													let n = t.data?.graphEdge;
													!n?.onEdgeClick && !n?.onEdgeHover || (he(t.id), n.onEdgeHover?.(n));
												},
												onEdgeMouseLeave: (e, t) => {
													let n = t.data?.graphEdge;
													!n?.onEdgeClick && !n?.onEdgeHover || (he((e) => e === t.id ? null : e), n.onEdgeHover?.(null));
												},
												onEdgeClick: (e, t) => {
													let n = t.data?.graphEdge;
													n?.onEdgeClick?.(n);
												},
												proOptions: { hideAttribution: !0 },
												nodesDraggable: !1,
												nodesConnectable: !1,
												elementsSelectable: !1,
												nodeClickDistance: 4,
												panOnDrag: !0,
												zoomOnScroll: !0,
												zoomOnPinch: !0,
												children: /* @__PURE__ */ X(Hx, {
													id: "f0-graph-bg",
													variant: Rx.Dots,
													gap: 32,
													size: 4,
													color: "var(--f0-graph-bg-dot)"
												})
											})
										}),
										I && /* @__PURE__ */ X("div", {
											className: "absolute left-6 top-3 z-10 flex flex-col gap-2 rounded-md backdrop-blur-[140px]",
											children: I
										}),
										L && /* @__PURE__ */ X("div", {
											className: "absolute bottom-6 right-6 z-10 flex flex-col items-end gap-2",
											children: L
										}),
										R && /* @__PURE__ */ X("div", {
											className: "absolute bottom-6 left-6 z-10",
											children: /* @__PURE__ */ X(qC, {
												onZoomIn: $e,
												onZoomOut: et,
												onFitView: tt,
												onFocusUser: ue ? de ?? (Pe.has(ue) ? nt : void 0) : void 0,
												labels: le
											})
										})
									]
								})
							})
						})
					})
				})
			})
		})
	});
}
//#endregion
//#region src/patterns/F0Graph/F0Graph.tsx
function ow(e, t) {
	return /* @__PURE__ */ X(jx, { children: /* @__PURE__ */ X(aw, {
		...e,
		handleRef: t
	}) });
}
var sw = Bn(ow);
sw.displayName = "F0Graph";
//#endregion
//#region src/patterns/F0Graph/F0GraphSkeleton.tsx
var cw = 256, lw = 40, uw = 8, dw = () => /* @__PURE__ */ Z("div", {
	className: "flex h-[52px] w-64 items-center gap-3 rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3",
	children: [/* @__PURE__ */ X(T, { className: "h-8 w-8 shrink-0 rounded-full" }), /* @__PURE__ */ Z("div", {
		className: "flex flex-1 flex-col gap-1.5",
		children: [/* @__PURE__ */ X(T, { className: "h-3 w-28 rounded" }), /* @__PURE__ */ X(T, { className: "h-2.5 w-20 rounded" })]
	})]
}), fw = () => /* @__PURE__ */ X(T, { className: "h-5 w-20 rounded-full" }), pw = () => /* @__PURE__ */ X(T, { className: "h-7 w-10 rounded-lg" }), mw = ({ childrenCount: e }) => {
	let t = e * cw + (e - 1) * lw, n = t / 2;
	if (e === 1) return /* @__PURE__ */ X("svg", {
		width: t,
		height: 40,
		viewBox: `0 0 ${t} 40`,
		fill: "none",
		"aria-hidden": !0,
		children: /* @__PURE__ */ X("path", {
			d: `M${n} 0 V40`,
			className: "stroke-f1-border-secondary",
			strokeWidth: 1.5
		})
	});
	let r = (e) => e * 296 + cw / 2, i = r(0), a = r(e - 1), o = `M${i} 40 V28 Q${i} 20 ${i + uw} 20 H${a - uw} Q${a} 20 ${a} 28 V40`, s = Array.from({ length: e - 2 }, (e, t) => r(t + 1));
	return /* @__PURE__ */ Z("svg", {
		width: t,
		height: 40,
		viewBox: `0 0 ${t} 40`,
		fill: "none",
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ X("path", {
				d: `M${n} 0 V20`,
				className: "stroke-f1-border-secondary",
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ X("path", {
				d: o,
				className: "stroke-f1-border-secondary",
				strokeWidth: 1.5
			}),
			s.map((e) => /* @__PURE__ */ X("path", {
				d: `M${e} 20 V40`,
				className: "stroke-f1-border-secondary",
				strokeWidth: 1.5
			}, e))
		]
	});
}, hw = ({ childrenCount: e = 3, showTags: t = !0, className: n }) => /* @__PURE__ */ Z("div", {
	"aria-busy": "true",
	"aria-live": "polite",
	className: H("flex h-full min-h-0 flex-1 flex-col items-center justify-center pb-4", n),
	children: [/* @__PURE__ */ Z("div", {
		className: "flex flex-col items-center gap-2",
		children: [/* @__PURE__ */ X(dw, {}), t && /* @__PURE__ */ X(fw, {})]
	}), e > 0 && /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(mw, { childrenCount: e }), /* @__PURE__ */ X("div", {
		className: "flex items-start gap-10",
		children: Array.from({ length: e }).map((e, n) => /* @__PURE__ */ Z("div", {
			className: "flex flex-col items-center gap-2",
			children: [
				/* @__PURE__ */ X(dw, {}),
				t && /* @__PURE__ */ X(fw, {}),
				/* @__PURE__ */ X(pw, {})
			]
		}, n))
	})] })]
}), gw = (e) => e.column ?? e.type;
//#endregion
//#region src/patterns/F0Graph/components/F0GraphNode/F0GraphNodeHoverCard.tsx
function _w(e, t) {
	switch (e.type) {
		case "raw": return { property: {
			type: "tag",
			label: t,
			value: {
				label: e.text,
				icon: e.icon
			}
		} };
		case "status": return { property: {
			type: "status",
			label: t,
			value: {
				status: e.variant,
				label: e.text
			}
		} };
		case "alert": return { property: {
			type: "alertTag",
			label: t,
			value: {
				level: e.level,
				label: e.text
			}
		} };
		case "dot": return "color" in e ? { property: {
			type: "dotTag",
			label: t,
			value: {
				label: e.text,
				color: e.color
			}
		} } : { property: {
			type: "text",
			label: t,
			value: e.text
		} };
		case "person": return { property: {
			type: "person",
			label: t,
			value: {
				firstName: e.name,
				lastName: "",
				src: e.src
			}
		} };
		case "team": return { property: {
			type: "team",
			label: t,
			value: {
				name: e.name,
				src: e.src
			}
		} };
		case "company": return { property: {
			type: "company",
			label: t,
			value: {
				name: e.name,
				src: e.src
			}
		} };
		default: return null;
	}
}
function vw({ trigger: e, avatar: t, title: n, subtitle: r, tags: i, tagLabels: a }) {
	let o = i?.map((e) => _w(e, a?.[gw(e)] ?? "")).filter((e) => e !== null);
	return /* @__PURE__ */ Z(hn, {
		openDelay: 300,
		closeDelay: 100,
		children: [/* @__PURE__ */ X(cn, {
			asChild: !0,
			children: e
		}), /* @__PURE__ */ X(on, {
			side: "top",
			align: "center",
			className: "w-64 rounded-2xl border-none p-0 text-f1-foreground shadow-md",
			children: /* @__PURE__ */ X(mn, {
				avatar: t,
				title: n,
				description: r,
				metadata: o && o.length > 0 ? o : void 0
			})
		})]
	});
}
//#endregion
//#region src/patterns/F0Graph/components/F0GraphNode/F0GraphNodeStackedRow.tsx
var yw = ({ shellProps: e, variant: t, state: n, avatar: r, title: i, trailing: a, loading: o, height: s = 44 }) => {
	let c = n === "selected" || n === "highlighted", l = CS[t], u = l === null;
	return /* @__PURE__ */ Z("div", {
		...e,
		"data-zoom-level": t,
		className: H("group flex w-full items-center rounded-xl border border-solid", "outline-none transition-[border-color,background-color,opacity] duration-200", u ? "justify-center border-transparent bg-transparent" : c ? "border-f1-border-selected-bold bg-f1-background ring-2 ring-f1-background-selected ring-offset-0" : "border-f1-border bg-f1-background hover:bg-f1-background-hover", !u && "focus-visible:ring-2 focus-visible:ring-f1-background-selected focus-visible:ring-offset-0", n === "dimmed" && "opacity-40"),
		style: {
			height: s,
			paddingLeft: 5,
			paddingRight: 5,
			gap: 8
		},
		children: [o ? /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(T, {
			className: "shrink-0 rounded-full",
			style: {
				width: 32,
				height: 32
			}
		}), l && /* @__PURE__ */ X(T, { className: "h-3 w-24 flex-1 rounded-xs" })] }) : /* @__PURE__ */ Z(Y, { children: [r && /* @__PURE__ */ X("div", {
			className: H("flex shrink-0 items-center justify-center", u && "rounded-md", u && c && "ring-2 ring-f1-background-selected ring-offset-0", u && "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0"),
			style: {
				width: 32,
				height: 32
			},
			children: /* @__PURE__ */ X(Zt, {
				size: "md",
				avatar: r
			})
		}), l && /* @__PURE__ */ X("p", {
			className: "min-w-0 flex-1 truncate font-medium tracking-[-0.07px] text-f1-foreground",
			style: l,
			children: i
		})] }), a && l && /* @__PURE__ */ X("div", {
			className: "flex shrink-0 items-center",
			"data-no-node-select": !0,
			onClick: (e) => e.stopPropagation(),
			children: a
		})]
	});
};
//#endregion
//#region src/patterns/F0Graph/components/F0GraphNode/F0GraphNodeTags.tsx
function bw({ tags: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ X("div", {
		className: "flex flex-wrap items-center justify-center gap-1",
		children: e.map((e, t) => /* @__PURE__ */ X("div", { children: /* @__PURE__ */ X(an, { tag: e }) }, `${e.type}-${t}`))
	});
}
//#endregion
//#region src/patterns/F0Graph/components/F0GraphNode/variants.ts
var xw = r({
	base: "relative w-auto transition-[opacity,box-shadow,border-color,background-color] duration-200",
	variants: {
		variant: {
			detail: "flex items-center justify-center",
			compact: "flex items-center justify-center",
			dot: "flex items-center justify-center border-0 bg-transparent"
		},
		state: {
			default: "",
			selected: "",
			highlighted: "",
			dimmed: "opacity-40"
		}
	},
	defaultVariants: {
		variant: "detail",
		state: "default"
	}
}), Sw = "opacity 120ms ease-out", Cw = "transform 120ms ease-out", ww = "opacity 84ms ease-out", Tw = Bn(({ variant: e = "detail", state: t = "default", expanded: n, level: r, tabIndex: i = 0, setSize: a, posInSet: o, hasChildren: s, childrenCount: c, onExpandToggle: l, onClick: u, nodeRef: d, nodeId: f, ariaOwns: p, avatar: m, title: h, subtitle: g, tags: _, visibleTagTypes: v, tagLabels: y, actions: b, loading: x, hoverCard: S, stacked: C, trailing: w, stackedHeight: E }, D) => {
	let O = W((e) => {
		typeof D == "function" ? D(e) : D && (D.current = e), d?.(e);
	}, [D, d]), k = er(), A = IS(), j = k || A?.largeGraph === !0, M = q(e), N = M.current !== e && (e === "dot" || M.current === "dot"), P = N ? M.current : e;
	G(() => {
		let t = window.setTimeout(() => {
			M.current = e;
		}, 132);
		return () => {
			window.clearTimeout(t);
		};
	}, [e]);
	let F = {
		ref: O,
		id: f ? `f0-graph-node-${f}` : void 0,
		role: "treeitem",
		tabIndex: i,
		"aria-expanded": s ? n : void 0,
		"aria-level": r,
		"aria-setsize": a,
		"aria-posinset": o,
		"aria-selected": t === "selected",
		"aria-owns": p || void 0,
		onClick: u,
		onKeyDown: (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), u?.()), e.key === "ArrowRight" && s && !n && (e.preventDefault(), l?.()), e.key === "ArrowLeft" && s && n && (e.preventDefault(), l?.());
		}
	}, I = e === "compact", L = e === "dot", R = e === "detail", V = _ ? v ? _.filter((e) => v.has(gw(e))) : _ : void 0, ee = R && !!V && V.length > 0, te = (e) => ee ? /* @__PURE__ */ X(B.div, {
		initial: !j && {
			opacity: 0,
			filter: "blur(3px)"
		},
		animate: {
			opacity: 1,
			filter: "blur(0px)"
		},
		transition: j ? { duration: 0 } : {
			duration: .12,
			ease: [
				.23,
				1,
				.32,
				1
			]
		},
		className: e,
		"data-no-node-select": !0,
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ X(bw, { tags: V })
	}, "tags") : null;
	if (C) return /* @__PURE__ */ Z("div", {
		className: "flex w-full flex-col items-center gap-1.5",
		children: [/* @__PURE__ */ X(yw, {
			shellProps: F,
			variant: e,
			state: t,
			avatar: m,
			title: h,
			trailing: w,
			loading: x,
			height: E
		}), te("max-w-full")]
	});
	let ne = m != null && m.type !== "person", U = L ? !!(h || g || V?.length) : I ? !!(g || V?.length) : !1, re = /* @__PURE__ */ Z("div", {
		...F,
		"data-zoom-level": e,
		className: H(xw({
			variant: e,
			state: t
		}), "flex-col gap-1.5", "group outline-none"),
		children: [
			/* @__PURE__ */ Z("div", {
				className: H("group/pill relative inline-flex max-w-full flex-col items-stretch", "outline-none", ne ? "rounded-2xl" : "rounded-full", !L && (t === "selected" || t === "highlighted") && "ring-2 ring-f1-background-selected ring-offset-0", t === "dimmed" && L && "opacity-40", !L && "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0", ne ? "p-2.5" : "px-2.5 py-2", "min-h-11"),
				style: { contain: "layout" },
				children: [/* @__PURE__ */ X("div", {
					"aria-hidden": !0,
					className: H("pointer-events-none absolute inset-0 border border-solid bg-f1-background", ne ? "rounded-2xl" : "rounded-full", (!L || N) && "backdrop-blur-[7px]", L ? "border-f1-border-secondary" : "border-f1-border", t !== "selected" && t !== "highlighted" && !L && "group-hover/pill:bg-f1-background-hover", (t === "selected" || t === "highlighted") && "border-f1-border-selected-bold"),
					style: {
						borderWidth: L ? 1.5 : 1,
						opacity: +!L,
						transition: j ? "none" : Sw,
						willChange: "opacity",
						transform: "translateZ(0)"
					}
				}), /* @__PURE__ */ Z("div", {
					className: "relative inline-flex items-center",
					children: [/* @__PURE__ */ X("div", {
						className: H("flex shrink-0 items-center justify-center", ne ? "rounded-md" : "rounded-full", L && (t === "selected" || t === "highlighted") && "ring-2 ring-f1-background-selected ring-offset-0", L && "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0"),
						style: {
							transform: `translateZ(0) scale(${L ? 96 / 40 : 1})`,
							transformOrigin: "center center",
							transition: j ? "none" : Cw,
							willChange: "transform"
						},
						children: x ? /* @__PURE__ */ X(T, { className: H("h-10 w-10", ne ? "rounded-md" : "rounded-full") }) : m && /* @__PURE__ */ X(Zt, {
							size: "lg",
							avatar: m
						})
					}), /* @__PURE__ */ X("div", {
						style: {
							width: L ? 0 : 176,
							marginLeft: L ? 0 : 8,
							opacity: +!L,
							transition: j ? "none" : ww,
							transitionDelay: j || L ? "0ms" : "36ms"
						},
						className: "relative min-w-0 flex-1 self-stretch overflow-hidden whitespace-nowrap",
						children: /* @__PURE__ */ X(z, {
							mode: "sync",
							initial: !1,
							children: /* @__PURE__ */ X(B.div, {
								initial: N || j ? !1 : {
									opacity: 0,
									filter: "blur(2.5px)"
								},
								animate: {
									opacity: 1,
									filter: "blur(0px)"
								},
								exit: N || j ? { opacity: 0 } : {
									opacity: 0,
									filter: "blur(2.5px)"
								},
								transition: N || j ? { duration: 0 } : {
									duration: .084,
									ease: [
										.23,
										1,
										.32,
										1
									]
								},
								className: "absolute inset-0 flex flex-col justify-center",
								style: N || j ? void 0 : { willChange: "filter, opacity" },
								children: x ? /* @__PURE__ */ Z("div", {
									className: "flex flex-col justify-center gap-1.5",
									children: [/* @__PURE__ */ X(T, {
										className: "rounded-xs",
										style: {
											height: I ? 20 : 12,
											width: I ? 120 : 96
										}
									}), !I && !L && /* @__PURE__ */ X(T, {
										className: "rounded-xs",
										style: {
											height: 12,
											width: 64
										}
									})]
								}) : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("p", {
									className: "w-full truncate tracking-[-0.07px] text-f1-foreground",
									style: {
										fontSize: I ? 24 : 14,
										lineHeight: I ? "32px" : "20px",
										fontWeight: 500
									},
									children: h
								}), !I && !L && g && /* @__PURE__ */ X("p", {
									className: "w-full truncate tracking-[-0.07px] text-f1-foreground-secondary",
									style: {
										fontSize: 14,
										lineHeight: "20px",
										fontWeight: 400
									},
									children: g
								})] })
							}, P)
						})
					})]
				})]
			}),
			R && b && /* @__PURE__ */ X(yS, {
				nodeId: f,
				isVisible: t === "selected",
				position: Q.Top,
				align: "center",
				offset: 8,
				children: /* @__PURE__ */ X("div", {
					className: "flex items-center gap-1",
					children: b
				})
			}),
			te("max-w-[256px]")
		]
	});
	return S && U && !x ? /* @__PURE__ */ X(vw, {
		trigger: re,
		avatar: m,
		title: typeof h == "string" ? h : void 0,
		subtitle: typeof g == "string" ? g : void 0,
		tags: V,
		tagLabels: y
	}) : re;
});
Tw.displayName = "F0GraphNode";
var Ew = Tw;
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/Graph/reveal.ts
function Dw({ isInitialLoading: e, initialConsumed: t, revealNodeId: n, lastRevealed: r, revealNonce: i, lastNonce: a }) {
	return e ? {
		revealId: null,
		consumeInitial: !1,
		lastRevealed: r,
		lastNonce: a
	} : t ? n && (n !== r || i !== a) ? {
		revealId: n,
		consumeInitial: !1,
		lastRevealed: n,
		lastNonce: i
	} : {
		revealId: null,
		consumeInitial: !1,
		lastRevealed: r,
		lastNonce: a
	} : {
		revealId: null,
		consumeInitial: !0,
		lastRevealed: n,
		lastNonce: i
	};
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/Graph/useDataCollectionTreeData.ts
var Ow = 200, kw = (e) => ({
	message: "Error fetching data",
	cause: e
}), Aw = (e) => Array.isArray(e) ? e : e && typeof e == "object" && "records" in e ? e.records ?? [] : [], jw = (e) => {
	if (e && typeof e == "object" && "subscribe" in e) {
		let t = e;
		return new Promise((e, n) => {
			let r = !1, i = t.subscribe({
				next: (t) => {
					if (!r) {
						if (t?.error) {
							r = !0, n(t.error), i.unsubscribe();
							return;
						}
						t?.data && (r = !0, e(Aw(t.data)), i.unsubscribe());
					}
				},
				error: (e) => {
					r || (r = !0, n(e));
				},
				complete: () => {
					r || (r = !0, e([]));
				}
			});
		});
	}
	return e && typeof e == "object" && "then" in e ? e.then((e) => Aw(e)) : Promise.resolve(Aw(e));
}, Mw = (e) => (e.childrenCount ?? 0) > 0, Nw = (e, t) => {
	if (t.size === 0) return e;
	let n = !1, r = e.map((e) => {
		let r = t.get(e.id);
		return r ? (n = !0, {
			...e,
			data: r,
			dataLoaded: !0
		}) : e;
	});
	return n ? r : e;
}, Pw = (e, t, n) => {
	let r = new Set(e.map((e) => e.id)), i = t.filter((e) => !r.has(e.id));
	return [...e.map((e) => e.id === n ? {
		...e,
		childrenLoaded: !0
	} : e), ...i];
}, Fw = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		if (n.parentId === null) continue;
		let e = t.get(n.parentId) ?? [];
		e.push(n.id), t.set(n.parentId, e);
	}
	return t;
}, Iw = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	if (e.length === 0) return n;
	let r = Fw(t.values()), i = [];
	for (let r of e) t.has(r) && !n.has(r) && (n.add(r), i.push(r));
	for (let e = 0; e < i.length; e++) for (let t of r.get(i[e]) ?? []) n.has(t) || (n.add(t), i.push(t));
	return n;
}, Lw = (e) => {
	let t = [];
	for (let n of e.values()) n.parentId !== null && !e.has(n.parentId) && t.push(n.id);
	return t;
}, Rw = ({ records: e, byId: t, touchedParents: n, getId: r, getParentId: i, getChildrenCount: a, stackNodes: o, hydrates: s }) => {
	for (let c of e) {
		let e = r(c), l = t.get(e), u = i ? i(c) : l?.parentId ?? null, d = a(c);
		l ? (l.parentId !== u && (l.parentId !== null && n.add(l.parentId), u !== null && n.add(u)), t.set(e, {
			...l,
			data: c,
			parentId: u,
			childrenCount: d,
			stackNodes: o?.(c),
			dataLoaded: s ? !0 : l.dataLoaded
		})) : (u !== null && n.add(u), t.set(e, {
			id: e,
			parentId: u,
			data: c,
			childrenCount: d,
			childrenLoaded: !1,
			stackNodes: o?.(c),
			dataLoaded: s ? !0 : void 0
		}));
	}
}, zw = (e, t, n) => {
	if (t.size === 0) return;
	let r = /* @__PURE__ */ new Map();
	for (let n of e.values()) n.parentId === null || !t.has(n.parentId) || r.set(n.parentId, (r.get(n.parentId) ?? 0) + 1);
	for (let i of t) {
		let t = e.get(i);
		if (!t) continue;
		let a = r.get(i) ?? 0;
		if (n.has(i) || t.childrenLoaded) e.set(i, {
			...t,
			childrenCount: a,
			childrenLoaded: !0
		}), n.add(i);
		else {
			let r = Math.max(t.childrenCount ?? 0, a), o = a > 0 && r === a;
			e.set(i, {
				...t,
				childrenCount: r,
				childrenLoaded: o || t.childrenLoaded
			}), o && n.add(i);
		}
	}
};
function Bw(e, t, n) {
	let r = q(e);
	r.current = e;
	let i = q(t);
	i.current = t;
	let a = q(n);
	a.current = n;
	let [o, s] = J([]), c = q([]);
	c.current = o;
	let [l, u] = J(/* @__PURE__ */ new Set()), d = q(l);
	d.current = l;
	let [f, p] = J(void 0), [m, h] = J(/* @__PURE__ */ new Set()), [g, _] = J(!0), [v, y] = J(null), b = q(/* @__PURE__ */ new Set()), x = W((e) => {
		let t = i.current;
		return t.getNodeId ? t.getNodeId(e) : String(e.id);
	}, []), S = W((e, t) => ({
		id: x(e),
		parentId: t,
		data: e,
		childrenCount: i.current.getChildrenCount(e),
		childrenLoaded: !1,
		stackNodes: i.current.stackNodes?.(e),
		dataLoaded: !i.current.loadNodeData && void 0
	}), [x]), C = W(async (e) => {
		let t = r.current, n = t.dataAdapter, i = t.currentSortings ? [{
			field: String(t.currentSortings.field),
			order: t.currentSortings.order
		}] : [], a = {
			filters: {
				...t.currentFilters,
				...e
			},
			sortings: i,
			navigationFilters: t.currentNavigationFilters
		}, o = "perPage" in n && typeof n.perPage == "number" ? n.perPage : Ow;
		return n.paginationType === void 0 ? jw(n.fetchData(a)) : n.paginationType === "pages" ? jw(n.fetchData({
			...a,
			pagination: {
				currentPage: 1,
				perPage: o
			}
		})) : n.paginationType === "infinite-scroll" ? jw(n.fetchData({
			...a,
			pagination: {
				cursor: null,
				perPage: o
			}
		})) : jw(n.fetchData({
			...a,
			pagination: {}
		}));
	}, []), w = W(async (e) => {
		if (b.current.has(e)) return c.current.filter((t) => t.parentId === e);
		b.current.add(e);
		try {
			let t = (await C(i.current.childrenFilters(e))).map((t) => S(t, e));
			return s((n) => Pw(n, t, e)), t;
		} catch (t) {
			b.current.delete(e);
			let n = kw(t);
			return y(n), a.current.onLoadError(n), [];
		}
	}, [C, S]), T = W(async (e) => {
		let t = c.current.filter((t) => t.parentId === null && e.has(t.id) && Mw(t)), n = /* @__PURE__ */ new Set();
		for (; t.length > 0;) {
			let r = t.filter((e) => !n.has(e.id));
			if (r.forEach((e) => n.add(e.id)), r.length === 0) break;
			let i = await Promise.all(r.map((e) => w(e.id).then((e) => ({ children: e })))), a = [];
			for (let { children: t } of i) for (let n of t) e.has(n.id) && Mw(n) && a.push(n);
			t = a;
		}
	}, [w]), E = W((e) => {
		u(e), T(e);
	}, [T]), D = W(async (e) => {
		let t = i.current, n = t.loadNodePath ? await t.loadNodePath(e) : [];
		n.length > 0 && s((e) => {
			let r = new Set(e.map((e) => e.id)), i = n.filter((e) => !r.has(x(e))).map((e, r) => {
				let i = t.getParentId ? t.getParentId(e) : r > 0 ? x(n[r - 1]) : null;
				return S(e, i);
			});
			return i.length > 0 ? [...e, ...i] : e;
		});
		let r = n.map(x).filter((t) => t !== e);
		return await Promise.all([...r, e].map((e) => w(e))), r;
	}, [
		x,
		S,
		w
	]), O = W(async (e) => {
		try {
			let t = await D(e);
			E(/* @__PURE__ */ new Set([...d.current, ...t])), p(e), h(/* @__PURE__ */ new Set([e]));
		} catch (e) {
			let t = kw(e);
			y(t), a.current.onLoadError(t);
		}
	}, [D, E]), k = W(() => {
		p(void 0), h(/* @__PURE__ */ new Set());
	}, []), A = W((e) => {
		let t = i.current.loadNodeData;
		if (!t) return;
		let n = new Map(c.current.map((e) => [e.id, e])), r = e.filter((e) => n.get(e)?.dataLoaded === !1);
		r.length !== 0 && t(r).then((e) => {
			let t = new Map(e.map((e) => [x(e), e]));
			s((e) => Nw(e, t));
		}).catch((e) => {
			let t = kw(e);
			y(t), a.current.onLoadError(t);
		});
	}, [x]), j = W((e, t) => {
		if (e.length === 0 && t.length === 0) return;
		let n = i.current;
		s((r) => {
			let i = new Map(r.map((e) => [e.id, e])), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = (e) => {
				for (let t of Iw(e, i)) {
					let e = i.get(t)?.parentId;
					e != null && o.add(e), i.delete(t), b.current.delete(t), a.add(t);
				}
			};
			if (s(t), Rw({
				records: e,
				byId: i,
				touchedParents: o,
				getId: x,
				getParentId: n.getParentId,
				getChildrenCount: n.getChildrenCount,
				stackNodes: n.stackNodes,
				hydrates: !!n.loadNodeData
			}), s(Lw(i)), zw(i, o, b.current), a.size > 0) {
				let e = d.current, t = new Set([...e].filter((e) => !a.has(e)));
				t.size !== e.size && u(t);
			}
			let c = r.map((e) => i.get(e.id)).filter((e) => !!e), l = new Set(c.map((e) => e.id)), f = [...i.values()].filter((e) => !l.has(e.id));
			return [...c, ...f];
		});
	}, [x]), M = W(async () => {
		_(!0), y(null), s([]), c.current = [], b.current = /* @__PURE__ */ new Set();
		try {
			let e = Math.max(0, i.current.defaultExpandDepth ?? 1), t = (await C(i.current.childrenFilters(null))).map((e) => S(e, null));
			s(t), c.current = t;
			let n = /* @__PURE__ */ new Set(), o = t;
			for (let t = 0; t < e && o.length > 0; t++) {
				let e = o.filter(Mw);
				if (e.length === 0) break;
				let t = await Promise.all(e.map((e) => w(e.id)));
				e.forEach((e) => n.add(e.id)), o = e.flatMap((e, n) => t[n]);
			}
			let l = i.current.focusOnEntry;
			if (l && i.current.loadNodePath) try {
				let e = await D(l);
				for (let t of e) n.add(t);
			} catch {}
			u(n), a.current.onLoadData({
				totalItems: t.length,
				filters: r.current.currentFilters,
				search: r.current.currentSearch,
				isInitialLoading: !1,
				data: t.map((e) => e.data)
			});
		} catch (e) {
			let t = kw(e);
			y(t), a.current.onLoadError(t);
		} finally {
			_(!1);
		}
	}, [
		C,
		S,
		w,
		D
	]), N = JSON.stringify(e.currentFilters), P = JSON.stringify(e.currentNavigationFilters);
	G(() => {
		M();
	}, [
		N,
		P,
		M
	]);
	let F = t.liveUpdate?.version, I = q(F);
	return G(() => {
		let e = i.current.liveUpdate;
		!e || e.version === I.current || (I.current = e.version, j(e.upsert ?? [], e.remove ?? []));
	}, [F, j]), {
		nodes: o,
		expandedNodes: l,
		setExpandedNodes: E,
		focusedNode: f,
		highlightedNodes: m,
		revealNode: O,
		clearFocus: k,
		loadVisibleNodeData: t.loadNodeData ? A : void 0,
		isInitialLoading: g,
		error: v
	};
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/Graph/index.tsx
var Vw = ({ source: e, title: t, subtitle: n, avatar: r, tags: i, nodeActions: a, nodeTagTypes: o, defaultVisibleTagTypes: s, pinnedTagTypes: c, lockedTagTypes: l, currentUserNodeId: u, getNodeId: d, getChildrenCount: f, stackNodes: p, stackedTrailing: m, childrenFilters: h, defaultExpandDepth: g, revealNodeId: _, searchSelectionNonce: v, focusOnEntry: y, initialSelectedNodeId: b, loadNodePath: x, getParentId: S, loadNodeData: C, liveUpdate: w, zoomPreset: T, minZoom: E, maxZoom: D, centerOnNodeClick: O, nodeClickZoom: k, viewportInset: A, showControls: j, canvasFooterActions: M, enableNodeWindowing: N, nodeWindowPadding: P, loadVisibleNodeData: F, visibleDataDebounceMs: I, onLoadData: L, onLoadError: R }) => {
	let { nodes: z, expandedNodes: B, setExpandedNodes: V, focusedNode: H, highlightedNodes: ee, revealNode: te, clearFocus: ne, loadVisibleNodeData: U, isInitialLoading: re } = Bw(e, {
		title: t,
		subtitle: n,
		avatar: r,
		tags: i,
		getNodeId: d,
		getChildrenCount: f,
		stackNodes: p,
		childrenFilters: h,
		defaultExpandDepth: g,
		loadNodePath: x,
		getParentId: S,
		loadNodeData: C,
		liveUpdate: w,
		focusOnEntry: y,
		zoomPreset: T,
		showControls: j
	}, {
		onLoadData: L,
		onLoadError: R
	}), ie = q(null), [ae] = J(() => b !== void 0), [oe, se] = J(() => b ? /* @__PURE__ */ new Set([b]) : /* @__PURE__ */ new Set()), ce = W(async (e) => {
		await te(e), ie.current?.clearSelection(), ie.current?.focusNode(e);
	}, [te]), le = q(void 0), ue = q(void 0), de = q(!1);
	G(() => {
		if (re) return;
		let e = Dw({
			isInitialLoading: re,
			initialConsumed: de.current,
			revealNodeId: _,
			lastRevealed: le.current,
			revealNonce: v,
			lastNonce: ue.current
		});
		e.consumeInitial && (de.current = !0), le.current = e.lastRevealed, ue.current = e.lastNonce, e.revealId && ce(e.revealId);
	}, [
		_,
		v,
		ce,
		re
	]);
	let fe = q(e.setCurrentSearch);
	fe.current = e.setCurrentSearch, G(() => (fe.current(void 0), () => fe.current(void 0)), []);
	let { settings: pe } = Bc(), me = pe.visualization.graph, he = o ? [...o] : [], ge = new Set(s ?? he), _e = new Set(c ?? []), ve = new Set(Object.keys(l ?? {})), ye = new Set(me?.hidden ?? he.filter((e) => !ge.has(e))), be = me?.order ?? he, xe = he.sort((e, t) => (be.indexOf(e) === -1 ? Infinity : be.indexOf(e)) - (be.indexOf(t) === -1 ? Infinity : be.indexOf(t))), Se = xe.filter((e) => !ve.has(e) && (_e.has(e) || !ye.has(e))), Ce = i ? (e) => [...i(e)].sort((e, t) => xe.indexOf(gw(e)) - xe.indexOf(gw(t))) : void 0;
	return /* @__PURE__ */ X("div", {
		className: "flex h-full min-h-0 flex-1 flex-col border-0 border-t border-solid border-f1-border-secondary bg-[hsl(var(--neutral-3))]",
		children: re ? /* @__PURE__ */ X(hw, { showTags: i !== void 0 }) : /* @__PURE__ */ X(sw, {
			ref: ie,
			nodes: z,
			expandedNodes: B,
			onExpandedNodesChange: V,
			focusedNode: H,
			initialFocusNodeId: y,
			highlightedNodes: ee,
			selectionMode: "single",
			selectedNodes: ae ? oe : void 0,
			onSelectedNodesChange: (e) => {
				ae && se(e), e.size > 0 && ne();
			},
			showControls: j ?? !0,
			canvasFooterActions: M,
			zoomPreset: T,
			minZoom: E,
			maxZoom: D,
			centerOnNodeClick: O,
			nodeClickZoom: k,
			viewportInset: A,
			enableNodeWindowing: N,
			nodeWindowPadding: P,
			loadVisibleNodeData: U ?? F,
			visibleDataDebounceMs: I,
			reserveTagRow: i !== void 0,
			nodeTagTypes: o,
			visibleTagTypes: Se,
			currentUserNodeId: u,
			onFocusUser: u ? () => ce(u) : void 0,
			onPaneClick: ne,
			renderNode: (i, o) => {
				let s = e.itemOnClick?.(i.data);
				return /* @__PURE__ */ X(Ew, {
					...o,
					loading: o.dataLoading,
					avatar: r?.(i.data),
					title: t(i.data),
					trailing: m?.(i.data),
					subtitle: n?.(i.data),
					tags: Ce?.(i.data),
					actions: a?.(i.data),
					hoverCard: !0,
					onClick: () => {
						o.onClick(), s?.();
					}
				});
			}
		})
	});
}, Hw = ({ tagTypes: e, labels: t, defaultVisibleTagTypes: n, pinnedTagTypes: r, lockedTagTypes: i }) => {
	let { settings: a } = Bc(), o = a.visualization.graph ?? {}, s = new Set(n ?? e), c = new Set(r ?? []), l = i ?? {}, u = new Set(o.hidden ?? e.filter((e) => !s.has(e))), d = o.order ?? [], f = [...d.filter((t) => e.includes(t)), ...e.filter((e) => !d.includes(e))].map((e) => {
		let n = l[e];
		return n === void 0 ? {
			id: e,
			label: t?.[e] ?? e,
			sortable: !c.has(e),
			canHide: !c.has(e),
			visible: c.has(e) || !u.has(e)
		} : {
			id: e,
			label: t?.[e] ?? e,
			sortable: !1,
			canHide: !1,
			visible: !1,
			disabledReason: n
		};
	});
	return /* @__PURE__ */ X(ld, {
		items: f,
		visualizationKey: "graph",
		allowSorting: !0,
		allowHiding: !0
	});
}, Uw = (e) => !e.nodeTagTypes || e.nodeTagTypes.length === 0 ? null : /* @__PURE__ */ X(Hw, {
	tagTypes: e.nodeTagTypes,
	labels: e.nodeTagTypeLabels,
	defaultVisibleTagTypes: e.defaultVisibleTagTypes,
	pinnedTagTypes: e.pinnedTagTypes,
	lockedTagTypes: e.lockedTagTypes
});
//#endregion
//#region ../../node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.3.1/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js
function Ww(e) {
	var t = Pn.useRef(e), n = Pn.useRef(0);
	return Nn(e, t.current) || (t.current = e, n.current += 1), Pn.useMemo(function() {
		return t.current;
	}, [n.current]);
}
//#endregion
//#region src/patterns/OneDataCollection/hooks/useDataCollectionData/utils.ts
function Gw(e, t) {
	let n = { ...e };
	for (let [r, i] of Object.entries(t)) {
		let t = e[r];
		if (Array.isArray(t) && Array.isArray(i) && t.length > 0 && i.length > 0) {
			let e = t.filter((e) => i.includes(e));
			n[r] = e.length > 0 ? e : i;
		} else n[r] = i;
	}
	return n;
}
//#endregion
//#region src/patterns/OneDataCollection/hooks/useDataCollectionData/useDataCollectionLanesData.tsx
var Kw = ({ source: e, lane: t, onError: n, onHookUpdate: r }) => {
	let [i, a] = J(!1), { data: o, search: s, setSearch: c, isInitialLoading: l, isLoading: u, isLoadingMore: d, error: f, paginationInfo: p, setPage: m, loadMore: h, totalItems: g, mergedFilters: _, summaries: v, committedQuery: y } = Bl(K(() => ({
		...e,
		isLoading: i,
		setIsLoading: a
	}), [e, i]), {
		filters: K(() => Gw(e.currentFilters, t.filters), [e.currentFilters, t.filters]),
		onError: n
	});
	return G(() => {
		r?.(t.id, {
			data: o,
			search: s,
			setSearch: c,
			isInitialLoading: l,
			isLoading: u,
			isLoadingMore: d,
			error: f,
			paginationInfo: p,
			setPage: m,
			loadMore: h,
			totalItems: g,
			mergedFilters: _,
			summaries: v,
			committedQuery: y
		});
	}, [
		o,
		s,
		c,
		l,
		u,
		d,
		f,
		p,
		m,
		h,
		g,
		_,
		v,
		y,
		r,
		t.id
	]), null;
};
function qw(e, t = {}) {
	let { lanes: n } = e;
	if (!K(() => n && n.length > 0, [n])) throw Error("Lanes has not been configured on data source");
	let [r, i] = J({}), a = q({}), o = q(!1), s = q(!1);
	G(() => (s.current = !0, () => {
		s.current = !1;
	}), []);
	let c = q(t.onError);
	G(() => {
		c.current = t.onError;
	});
	let l = W((e) => {
		c.current?.(e);
	}, []), u = W((e, t) => {
		a.current[e] = t, !o.current && (o.current = !0, queueMicrotask(() => {
			let e = a.current;
			a.current = {}, o.current = !1, s.current && i((t) => ({
				...t,
				...e
			}));
		}));
	}, []), d = Ww({
		lanes: n,
		currentFilters: e.currentFilters,
		currentNavigationFilters: e.currentNavigationFilters,
		currentSortings: e.currentSortings,
		currentGrouping: e.currentGrouping,
		currentSearch: e.currentSearch,
		grouping: e.grouping,
		summaries: e.summaries,
		dataAdapter: e.dataAdapter,
		itemPreFilter: e.itemPreFilter
	});
	return {
		lanesProvider: K(() => (n || []).map((t) => /* @__PURE__ */ X(Kw, {
			lane: t,
			onError: l,
			source: e,
			onHookUpdate: u
		}, String(t.id))), [d]),
		lanesHooks: r
	};
}
//#endregion
//#region src/patterns/OneDataCollection/hooks/useSelectableLanes/utils.ts
var Jw = (e) => {
	let t = Array.from(e.values());
	return {
		allSelected: t.every((e) => e.allSelected),
		itemsStatus: t.flatMap((e) => e.itemsStatus),
		groupsStatus: t.reduce((e, t) => ({
			...e,
			...t.groupsStatus
		}), {}),
		filters: t.reduce((e, t) => ({
			...e,
			...t.filters
		}), {}),
		selectedCount: t.reduce((e, t) => e + t.selectedCount, 0),
		selectedIds: t.flatMap((e) => e.selectedIds)
	};
}, Yw = (e) => {
	let t = tt({
		data: e.data || {
			type: "flat",
			records: [],
			groups: []
		},
		paginationInfo: e.paginationInfo,
		source: e.source,
		onSelectItems: e.onSelectItems,
		selectedState: e.source.defaultSelectedItems
	});
	return G(() => {
		e.onHookUpdate(t);
	}, [t]), null;
}, Xw = (e, t, n) => {
	let [r, i] = J(/* @__PURE__ */ new Map()), [a, o] = J({
		selectItemsStatus: /* @__PURE__ */ new Map(),
		clearCallback: /* @__PURE__ */ new Map()
	}), s = W(() => {
		a.clearCallback.forEach((e) => e());
	}, [a.clearCallback]);
	return G(() => {
		let e = Object.fromEntries(a.selectItemsStatus);
		n?.({
			...Jw(a.selectItemsStatus),
			byLane: e
		}, s);
	}, [a]), {
		lanesUseSelectable: r,
		lanesSelectProvider: K(() => (e || []).map((e) => /* @__PURE__ */ X(Yw, {
			source: t,
			data: e.data || {
				type: "flat",
				records: [],
				groups: []
			},
			paginationInfo: e.paginationInfo,
			onHookUpdate: (t) => i((n) => new Map(n).set(e.id, t)),
			onSelectItems: (t, n) => {
				o((r) => ({
					selectItemsStatus: new Map(r.selectItemsStatus).set(e.id, t),
					clearCallback: new Map(r.clearCallback).set(e.id, n)
				}));
			}
		}, e.id)), [JSON.stringify(e)])
	};
}, Zw = 5;
function Qw(e) {
	if (!e.length) return;
	if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
	let t = {};
	for (let n of e) {
		if (!n) continue;
		let e = n.split(" ");
		for (let n of e) {
			let e = n.startsWith("_") ? n.slice(0, Zw) : n;
			t[e] = n;
		}
	}
	let n = "";
	for (let e in t) n += t[e] + " ";
	if (n) return n.trimEnd();
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop-react-drop-indicator@3.2.11_@types+react@18.3.18_react@18.3.1/node_modules/@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/dist/esm/presets.js
var $w = {
	default: "var(--ds-border-selected, #1868DB)",
	warning: "var(--ds-border-warning, #E06C00)"
}, eT = "var(--ds-border-width-selected, 2px)", tT = {
	top: "horizontal",
	bottom: "horizontal",
	left: "vertical",
	right: "vertical"
}, nT = { root: "_1e0c1ule _kqswstnw _1pbykb7n _lcxvglyw _bfhkys7w _rfx31ssb _3l8810ly _kzdanqa1 _15m6ys7w _cfu11ld9 _1kt9b3bt _1cs8stnw _13y0usvi _1mp4vjfa _kfgtvjfa" }, rT = {
	horizontal: "_4t3i10ly _1e02fghn _rjxpidpf _z5wtuj5p",
	vertical: "_1bsb10ly _154ifghn _94n5idpf _1aukuj5p"
}, iT = {
	top: "_154ihv0e _1auk70hn",
	right: "_1xi2hv0e _ooun70hn",
	bottom: "_94n5hv0e _19wo70hn",
	left: "_1ltvhv0e _qnec70hn"
}, aT = {
	terminal: function(e) {
		return `calc(var(--terminal-radius) + ${e.indent})`;
	},
	"terminal-no-bleed": function(e) {
		return `calc(var(--terminal-diameter) + ${e.indent})`;
	},
	"no-terminal": function(e) {
		return e.indent;
	}
};
function oT(e) {
	var t = e.edge, n = e.gap, r = n === void 0 ? "0px" : n, i = e.indent, a = i === void 0 ? "0px" : i, o = e.strokeColor, s = o === void 0 ? $w.default : o, c = e.strokeWidth, l = c === void 0 ? eT : c, u = e.type, d = u === void 0 ? "terminal" : u, f = tT[t];
	return /*#__PURE__*/ Pn.createElement("div", {
		style: {
			"--stroke-color": s,
			"--stroke-width": l,
			"--main-axis-offset": `calc(-0.5 * (${r} + var(--stroke-width)))`,
			"--line-main-axis-start": aT[d]({ indent: a }),
			"--terminal-display": d === "no-terminal" ? "none" : "block",
			"--terminal-diameter": "calc(var(--stroke-width) * 4)",
			"--terminal-radius": "calc(var(--terminal-diameter) / 2)",
			"--terminal-main-axis-start": "calc(-1 * var(--terminal-diameter))",
			"--terminal-cross-axis-offset": "calc(calc(var(--stroke-width) - var(--terminal-diameter)) / 2)"
		},
		className: Qw([
			nT.root,
			rT[f],
			iT[t]
		])
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop-react-drop-indicator@3.2.11_@types+react@18.3.18_react@18.3.1/node_modules/@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/dist/esm/box.js
function sT(e) {
	var t = e.appearance, n = t === void 0 ? "default" : t, r = e.edge, i = e.gap, a = e.indent, o = e.type;
	return /*#__PURE__*/ Fn.createElement(oT, {
		edge: r,
		gap: i,
		strokeColor: $w[n],
		type: o,
		indent: a
	});
}
//#endregion
//#region src/ui/Kanban/components/KanbanCard.tsx
var cT = "button, a[href], input, select, textarea, [role=\"button\"], [role=\"checkbox\"], [role=\"menuitem\"], [role=\"option\"], [role=\"radio\"], [role=\"switch\"]", lT = (e) => e instanceof HTMLElement && !!e.closest(cT);
function uT({ drag: e, id: t, index: n, total: r, laneId: i, draggable: a = !1, showIndicator: o = !0, disabledEdges: s = [], forcedEdge: c = null, ...l }) {
	let u = q(null), d = q(null), [f, p] = J(null);
	wo({
		ref: u,
		payload: {
			kind: e.type ?? "list-card",
			id: e.id,
			data: e.data
		}
	}), G(() => {
		if (u.current) return uo({
			element: u.current,
			getData: ({ input: e, element: r }) => vo({
				type: "list-card-target",
				id: t,
				index: n,
				laneId: i
			}, {
				input: e,
				element: r,
				allowedEdges: ["top", "bottom"]
			}),
			onDragEnter: ({ self: e, source: n }) => {
				if (n?.data?.id === t) {
					p(null);
					return;
				}
				let r = yo(e.data);
				p(r === "top" || r === "bottom" ? r : null);
			},
			onDrag: ({ self: e, source: n }) => {
				if (n?.data?.id === t) {
					p(null);
					return;
				}
				let r = yo(e.data);
				p(r === "top" || r === "bottom" ? r : null);
			},
			onDragLeave: () => p(null),
			onDrop: () => p(null)
		});
	}, [
		t,
		n,
		i
	]);
	let m = n === 0, h = n === r - 1;
	return /* @__PURE__ */ Z("div", {
		ref: u,
		className: H("group relative my-1", a && "cursor-grab active:cursor-grabbing", m && "mt-1.5", h && "mb-1.5"),
		"data-kanban-card": "true",
		"data-index": n,
		"data-lane-id": i,
		onClick: (e) => {
			if (a && !lT(e.target)) {
				if (l.onClick) {
					l.onClick(), e.preventDefault(), e.stopPropagation();
					return;
				}
				d.current && (d.current.click(), e.preventDefault(), e.stopPropagation());
			}
		},
		children: [
			/* @__PURE__ */ X(un, {
				...l,
				disableOverlayLink: a
			}),
			l.link && /* @__PURE__ */ X(gn, {
				ref: d,
				href: l.link,
				className: H("!z-1 pointer-events-none absolute inset-0 block rounded-xl", V()),
				"aria-label": l.title,
				children: "\xA0"
			}),
			o && (c ?? f) && /* @__PURE__ */ X(Y, { children: (() => {
				let e = c ?? f;
				return s.includes(e) ? null : /* @__PURE__ */ X(sT, {
					edge: e,
					type: "terminal-no-bleed",
					gap: "4px"
				});
			})() })
		]
	});
}
//#endregion
//#region src/ui/Lane/components/LaneHeader.tsx
var dT = ({ label: e, variant: t, color: n, count: r, onPrimaryAction: i }) => /* @__PURE__ */ Z("div", {
	className: "flex items-center gap-2 px-1 pb-0.5 pt-2",
	children: [
		n ? /* @__PURE__ */ X(qt, {
			text: e,
			color: n
		}) : /* @__PURE__ */ X(Wt, {
			text: e,
			variant: t || "neutral"
		}),
		/* @__PURE__ */ X(S, {
			size: "md",
			type: "default",
			value: r
		}),
		!!i && /* @__PURE__ */ X("div", {
			className: "ml-auto flex items-center gap-1 pr-1",
			children: /* @__PURE__ */ X(P, {
				variant: "ghost",
				size: "sm",
				label: "Add",
				icon: St,
				hideLabel: !0,
				onClick: i
			})
		})
	]
}), fT = Bn(({ showPlaceholders: e = !0, count: t = 3 }, n) => /* @__PURE__ */ X("div", {
	ref: n,
	className: "space-y-1",
	"aria-hidden": !e,
	children: e && Array.from({ length: t }).map((e, t) => /* @__PURE__ */ X(mn.Skeleton, { compact: !0 }, t))
}));
fT.displayName = "LoadingSkeleton";
//#endregion
//#region src/ui/Lane/Lane.tsx
function pT({ title: e, items: t, renderCard: n, getKey: r, emptyState: i, fetchMore: a, variant: o = "neutral", color: s, loading: c = !1, hasMore: l = !1, loadingMore: u = !1, total: d, onPrimaryAction: f, onFooterAction: p, dropPlaceholderIndex: m }) {
	let { loadingIndicatorRef: h } = tu({
		type: "infinite-scroll",
		cursor: null,
		hasMore: l,
		total: t.length + +!!l,
		perPage: 3
	}, c, u, a ?? (() => {})), g = !!p;
	return /* @__PURE__ */ Z("div", {
		className: "shadow-sm group relative flex h-full w-[322px] flex-col",
		children: [
			/* @__PURE__ */ X(dT, {
				label: e || "Lane",
				variant: o,
				color: s,
				count: d ?? t.length,
				onPrimaryAction: f
			}),
			/* @__PURE__ */ X("div", {
				className: H("relative flex h-full min-h-0 flex-1 flex-col px-1 pb-1", (g || t.length === 0) && "pb-11", !g && t.length === 0 && m !== void 0 && "pb-1"),
				children: c ? /* @__PURE__ */ Z(Jt, {
					className: H("relative h-full flex-1 rounded-lg", c && "select-none opacity-50 transition-opacity"),
					children: [/* @__PURE__ */ X(fT, {}), /* @__PURE__ */ X(z, { children: /* @__PURE__ */ X(B.div, {
						className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						children: /* @__PURE__ */ X(Mt, {})
					}) })]
				}) : t.length === 0 && m === void 0 ? i : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(Jt, {
					className: "relative h-full flex-1",
					children: /* @__PURE__ */ Z("div", {
						className: H("relative", u && "select-none opacity-50 transition-opacity"),
						"aria-live": u ? "polite" : void 0,
						"aria-busy": u ? "true" : void 0,
						children: [t.length === 0 && m !== void 0 ? /* @__PURE__ */ X("div", {
							className: "relative my-1 mt-1.5",
							children: /* @__PURE__ */ X(mn.Skeleton, { compact: !0 })
						}) : t.map((e, t) => {
							let i = r(e, t);
							return /* @__PURE__ */ X(Fn.Fragment, { children: n(e, t) }, i);
						}), (u || l) && /* @__PURE__ */ X(fT, { ref: h })]
					})
				}), u && /* @__PURE__ */ X(z, { children: /* @__PURE__ */ X(B.div, {
					className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					children: /* @__PURE__ */ X(Mt, {})
				}) })] })
			}),
			g && /* @__PURE__ */ X("div", {
				className: "pointer-events-none absolute inset-x-1 bottom-1.5 z-20 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100",
				children: /* @__PURE__ */ X(O, {
					variant: "ghost",
					size: "md",
					className: "w-full justify-center",
					icon: St,
					label: "Add",
					hideLabel: !0,
					onClick: p
				})
			})
		]
	});
}
//#endregion
//#region src/ui/Kanban/components/kanbanLane.handlers.ts
function mT(e, t) {
	let n = t.find((t) => t.data.type === "list-droppable" && t.data.id === e), r = t.find((e) => e.data.type === "list-card-target");
	return n ? r && r.data ? {
		type: "sameLaneOverCard",
		laneTarget: n,
		cardTarget: r
	} : {
		type: "sameLaneOverEmptySpace",
		laneTarget: n,
		cardTarget: void 0
	} : r && r.data ? {
		type: "differentLaneOverCard",
		laneTarget: void 0,
		cardTarget: r
	} : {
		type: "differentLaneOverEmptySpace",
		laneTarget: void 0,
		cardTarget: void 0
	};
}
function hT(e) {
	let { resourceIndexOnLane: t, cardTarget: n, sourceItem: r, fromLaneId: i, toLaneId: a, sourceId: o, setItems: s } = e, c = Number(n.data.index), l = yo(n.data);
	return s((e) => {
		let n = [...e];
		return n.splice(t, 1), n.splice(c + (t > c ? 0 : -1) + +(l === "bottom"), 0, r), n;
	}), {
		fromLaneId: i,
		toLaneId: a,
		sourceId: o,
		position: l === "bottom" ? "below" : "above",
		indexOfTarget: c
	};
}
function gT(e) {
	let { resourceIndexOnLane: t, sourceItem: n, fromLaneId: r, toLaneId: i, sourceId: a, setItems: o } = e;
	return o((e) => {
		let r = [...e];
		return r.splice(t, 1), r.splice(0, 0, n), r;
	}), {
		fromLaneId: r,
		toLaneId: i,
		sourceId: a,
		indexOfTarget: null,
		position: null
	};
}
function _T(e) {
	let { cardTarget: t, sourceItem: n, fromLaneId: r, toLaneId: i, sourceId: a, setItems: o } = e, s = Number(t.data.index), c = yo(t.data);
	return o((e) => {
		let t = [...e];
		return t.splice(s + +(c === "bottom"), 0, n), t;
	}), {
		fromLaneId: r,
		toLaneId: i,
		sourceId: a,
		position: c === "bottom" ? "below" : "above",
		indexOfTarget: s
	};
}
function vT(e) {
	let { sourceItem: t, fromLaneId: n, toLaneId: r, sourceId: i, setItems: a } = e;
	return a((e) => {
		let n = [...e];
		return n.splice(0, 0, t), n;
	}), {
		fromLaneId: n,
		toLaneId: r,
		sourceId: i,
		indexOfTarget: null,
		position: null
	};
}
//#endregion
//#region src/ui/Kanban/components/KanbanLane.tsx
function yT({ id: e, getLaneResourceIndexById: t, onMove: n, heightMode: r = "fill", ...i }) {
	let a = q(null), o = q(null), s = q(null), [c, l] = J(!1), [u, d] = J(null), f = !!(e && t), p = q(null), m = q(null), h = q(null), g = q(0), _ = q(null), [v, y] = J(!1), [b, x] = J(null), [S, C] = J(null), [w, T] = J(!1), [E, D] = J(-1);
	return To(f ? {
		ref: a,
		id: e,
		accepts: ["list-card"]
	} : void 0), G(() => {
		let e = () => {
			let t = performance.now(), n = (t - (_.current ?? t)) / 1e3;
			_.current = t;
			let r = m.current;
			if (!v || g.current === 0) {
				h.current != null && (window.cancelAnimationFrame(h.current), h.current = null), _.current = null;
				return;
			}
			r && (r.scrollTop += g.current * n), h.current = window.requestAnimationFrame(e);
		};
		return h.current == null && v && g.current !== 0 && (_.current = null, h.current = window.requestAnimationFrame(e)), () => {
			h.current != null && (window.cancelAnimationFrame(h.current), h.current = null), _.current = null, g.current = 0;
		};
	}, [v]), G(() => {
		if (!e) return;
		let t = () => {
			h.current == null && g.current !== 0 && (_.current = null, h.current = window.requestAnimationFrame(() => {
				let e = performance.now();
				_.current = e, h.current = window.requestAnimationFrame(function e() {
					let t = _.current ?? performance.now(), n = performance.now(), r = (n - t) / 1e3;
					_.current = n;
					let i = m.current;
					if (!v || g.current === 0) {
						h.current != null && (window.cancelAnimationFrame(h.current), h.current = null);
						return;
					}
					i && (i.scrollTop += g.current * r), h.current = window.requestAnimationFrame(e);
				});
			}));
		}, r = (t) => mT(e, t);
		return fo({
			onDropTargetChange: ({ location: n, source: r }) => {
				let o = n.current.dropTargets.some((t) => {
					let n = t.data;
					return n.type === "list-droppable" && n.id === e;
				});
				l(o);
				let s = String(r.data.id), c = String(r.data.data?.laneId ?? "") || String(n.initial.dropTargets.find((e) => e.data.type === "list-droppable")?.data?.id ?? ""), u = String(c) === String(e), d = i.items.findIndex((e, t) => String(i.getKey(e, t)) === s);
				if (o && u ? D(d) : (!o || !u) && D(-1), o && v && i.items.length === 0 ? (T(!0), x(null), C(null)) : o && v && i.items.length > 0 && T(!1), o && v) {
					let r = m.current || a.current;
					if (r) {
						let i = r.getBoundingClientRect(), o = n.current.input?.clientY, s = n.current.input?.clientX;
						if (typeof o == "number" && typeof s == "number") {
							let r = o - (i.top + i.height / 2), s = i.height / 2, c = 0;
							if (Math.abs(r) > 24) {
								let e = Math.min(Math.abs(r) - 24, s) / s;
								c = Math.sign(r) * 300 * e;
							}
							if (g.current = c, t(), n.current.dropTargets.some((e) => e.data.type === "list-card-target")) (b !== null || S !== null) && (x(null), C(null));
							else {
								let t = a.current;
								if (t) {
									let n = Array.from(t.querySelectorAll(`[data-kanban-card="true"][data-lane-id="${e}"]`));
									if (n.length > 0) {
										let e = -1, t = Infinity, r = "top";
										for (let i of n) {
											let n = i.getAttribute("data-index"), a = n ? Number(n) : -1, s = i.getBoundingClientRect(), c = s.top + s.height / 2, l = Math.abs(o - c);
											l < t && (t = l, e = a, r = o < c ? "top" : "bottom");
										}
										u && d >= 0 && (e === d && r === "top" || e === d && r === "bottom" || e === d - 1 && r === "bottom" || e === d + 1 && r === "top") ? (x(null), C(null)) : (x(e >= 0 ? e : null), C(e >= 0 ? r : null));
									}
								}
							}
						}
					}
				} else g.current = 0, o || (x(null), C(null), T(!1), D(-1));
			},
			onDrop: async ({ location: t, source: a }) => {
				l(!1), T(!1);
				let o = String(a.data.id), s = a.data.data, c = i.items.findIndex((e, t) => String(i.getKey(e, t)) === o), u = String(a.data.data?.laneId ?? "") || String(t.initial.dropTargets.find((e) => e.data.type === "list-droppable")?.data?.id ?? ""), d = String(u) !== String(e);
				if (!d && c >= 0) {
					let e = t.current.dropTargets.find((e) => e.data.type === "list-card-target");
					if (e) {
						let t = e.data.index, n = e.data.closestEdge;
						if (t !== void 0 && n) {
							let e = !1;
							if ((t === c || t === c - 1 && n === "bottom" || t === c + 1 && n === "top") && (e = !0), e) return;
						}
					}
				}
				if (!d && b !== null && S !== null && (b === c && S === "top" || b === c && S === "bottom" || b === c - 1 && S === "bottom" || b === c + 1 && S === "top")) {
					x(null), C(null);
					return;
				}
				if (!t.current.dropTargets.some((t) => {
					let n = t.data;
					return n.type === "list-droppable" && n.id === e;
				})) return;
				let f = null, { type: p, cardTarget: m } = r(t.current.dropTargets);
				if (f = d ? m && m.data ? _T({
					cardTarget: m,
					sourceItem: s,
					fromLaneId: u,
					toLaneId: e,
					sourceId: o,
					setItems: () => {}
				}) : b !== null && S ? {
					fromLaneId: u,
					toLaneId: e,
					sourceId: o,
					indexOfTarget: b,
					position: S === "bottom" ? "below" : "above"
				} : vT({
					sourceItem: s,
					fromLaneId: u,
					toLaneId: e,
					sourceId: o,
					setItems: () => {}
				}) : p === "sameLaneOverCard" && m && m.data ? hT({
					resourceIndexOnLane: c,
					cardTarget: m,
					sourceItem: s,
					fromLaneId: u,
					toLaneId: e,
					sourceId: o,
					setItems: () => {}
				}) : b !== null && S ? {
					fromLaneId: u,
					toLaneId: e,
					sourceId: o,
					indexOfTarget: b,
					position: S === "bottom" ? "below" : "above"
				} : gT({
					resourceIndexOnLane: c,
					sourceItem: s,
					fromLaneId: u,
					toLaneId: e,
					sourceId: o,
					setItems: () => {}
				}), f) {
					if (!d && f.indexOfTarget !== void 0) {
						let e = f.indexOfTarget, t = f.position;
						if (e === c && t === "above" || e === c && t === "below" || e === c - 1 && t === "below" || e === c + 1 && t === "above") return;
					}
					await n?.(f), x(null), C(null);
				}
			}
		});
	}, [
		e,
		t,
		n,
		v,
		i.items,
		i.getKey,
		b,
		S
	]), G(() => {
		let e = () => {
			let e = a.current;
			return e ? (m.current = e.querySelector("[data-scroll-container]"), m.current) : null;
		};
		e();
		let t = a.current;
		if (!t) return;
		let n = new MutationObserver(() => {
			e();
		});
		return n.observe(t, {
			subtree: !0,
			childList: !0
		}), () => n.disconnect();
	}, [e]), Eo(({ phase: e }) => {
		e === "start" && y(!0), (e === "drop" || e === "cancel") && (y(!1), T(!1), x(null), C(null), D(-1));
	}), G(() => {
		let t = (t) => {
			if (!e) return;
			let r = t.detail;
			r && r.toLaneId === e && n?.(r).catch(() => {});
		};
		return window.addEventListener("kanban-test-move", t), () => window.removeEventListener("kanban-test-move", t);
	}, [e, n]), Kn(() => {
		if (r === "content") {
			d(null);
			return;
		}
		let e = s.current, t = o.current;
		if (!e || !t) return;
		let n = null, i = null, a = () => {
			let n = t.parentElement?.parentElement;
			if (!n) return;
			let r = n.offsetHeight, a = t.style.height;
			t.style.height = "auto", e.offsetHeight;
			let o = e.scrollHeight;
			t.style.height = a;
			let s;
			s = r < 100 ? Math.max(o, 400) : Math.min(o, r), (i === null || Math.abs(s - i) > 1) && (i = s, d(s));
		};
		a();
		let c = new ResizeObserver(() => {
			n !== null && cancelAnimationFrame(n), n = requestAnimationFrame(() => {
				a(), n = null;
			});
		});
		c.observe(e);
		let l = t.parentElement?.parentElement;
		return l && c.observe(l), () => {
			n !== null && cancelAnimationFrame(n), c.disconnect();
		};
	}, [
		i.items.length,
		i.loading,
		w,
		r
	]), /* @__PURE__ */ X("div", {
		ref: o,
		className: H("relative rounded", r === "content" && "h-full"),
		style: { height: u ? `${u}px` : void 0 },
		children: /* @__PURE__ */ Z("div", {
			ref: a,
			className: "relative flex h-full w-full flex-col gap-0 rounded-xl border transition-colors",
			style: { backgroundColor: c ? "hsla(210, 91%, 22%, 0.08)" : "hsla(210, 91%, 22%, 0.02)" },
			children: [/* @__PURE__ */ X("div", {
				ref: p,
				className: H("pointer-events-none absolute inset-0 z-[1]", "bg-transparent"),
				"aria-hidden": !0
			}), /* @__PURE__ */ X("div", {
				ref: s,
				className: "flex h-full flex-col",
				children: /* @__PURE__ */ X(pT, {
					...i,
					dropPlaceholderIndex: w && i.items.length === 0 ? 0 : void 0,
					renderCard: (e, t) => {
						let n = i.renderCard(e, t);
						if (Vn(n)) {
							let e = t === b ? S : null, r = [];
							return E >= 0 && (t === E ? r.push("top", "bottom") : t === E - 1 ? r.push("bottom") : t === E + 1 && r.push("top")), Ln(n, {
								forcedEdge: e,
								disabledEdges: r
							});
						}
						return n;
					}
				})
			})]
		})
	});
}
//#endregion
//#region src/ui/Kanban/Kanban.tsx
function bT(e) {
	let { lanes: t, renderCard: n, getKey: r, className: i, dnd: a, onCreate: o } = e, s = e.heightMode ?? "fill", c = s === "content", [l, u] = J(() => t), d = q(""), f = q(null);
	G(() => {
		let e = t.map((e) => `${e.id}:[${e.items.map((t, n) => r(t, n, e.id)).join(",")}]`).join("|");
		if (f.current !== null) {
			if (e === f.current) f.current = null, d.current = e, u(t);
			else return;
		} else e !== d.current && (d.current = e, u(t));
	}, [
		t,
		r,
		l
	]);
	let [p, m] = J(!1), h = q(null), g = q(null), _ = q(null), v = q(null), y = q(0), b = q(null);
	Eo(({ phase: e }) => {
		e === "start" && m(!0), (e === "drop" || e === "cancel") && m(!1);
	}), G(() => {
		let e = () => {
			let t = performance.now(), n = (t - (b.current ?? t)) / 1e3;
			b.current = t;
			let r = _.current;
			if (!p || !r || y.current === 0) {
				v.current != null && (window.cancelAnimationFrame(v.current), v.current = null), b.current = null;
				return;
			}
			r.scrollLeft += y.current * n, v.current = window.requestAnimationFrame(e);
		}, t = (t) => {
			y.current = t, v.current ??= (b.current = null, window.requestAnimationFrame(e));
		}, n = () => {
			y.current = 0, v.current != null && (window.cancelAnimationFrame(v.current), v.current = null), b.current = null;
		}, r = [];
		return h.current && r.push(uo({
			element: h.current,
			getData: () => ({
				type: "board-scroll-edge",
				edge: "left"
			}),
			onDragEnter: () => t(-400),
			onDrag: () => t(-400),
			onDragLeave: () => n(),
			onDrop: () => n()
		})), g.current && r.push(uo({
			element: g.current,
			getData: () => ({
				type: "board-scroll-edge",
				edge: "right"
			}),
			onDragEnter: () => t(400),
			onDrag: () => t(400),
			onDragLeave: () => n(),
			onDrop: () => n()
		})), () => {
			r.forEach((e) => e()), n();
		};
	}, [p]);
	let x = (e, t) => {
		let n = l.find((t) => t.id === e);
		return n ? n.items.findIndex((n, i) => String(r(n, i, e)) === String(t)) : -1;
	}, S = async (e) => {
		let { fromLaneId: t, toLaneId: n, sourceId: i, indexOfTarget: o, position: s } = e, c = l, p = c.findIndex((e) => e.id === t), m = c.findIndex((e) => e.id === n);
		if (m === -1) return Promise.reject(/* @__PURE__ */ Error("Lane not found"));
		let h = -1;
		if (p !== -1 && (h = c[p].items.findIndex((e, n) => String(r(e, n, t)) === String(i))), h === -1) for (let e = 0; e < c.length; e++) {
			let t = c[e].id, n = c[e].items.findIndex((e, n) => String(r(e, n, t)) === String(i));
			if (n !== -1) {
				p = e, h = n;
				break;
			}
		}
		if (p === -1 || h === -1) return Promise.resolve(void 0);
		let g = c[p].items[h], _ = 0;
		_ = o == null ? 0 : o + +(s === "below");
		let v = t === n, y = c.map((e, t) => {
			if (t === p && v) {
				let t = [...e.items];
				t.splice(h, 1);
				let n = h < _ ? _ - 1 : _;
				return t.splice(n, 0, g), {
					...e,
					items: t
				};
			}
			if (t === p) {
				let t = [...e.items];
				t.splice(h, 1);
				let n = typeof e.total == "number" && !v ? Math.max(0, e.total - 1) : e.total;
				return {
					...e,
					items: t,
					total: n
				};
			}
			if (t === m) {
				let t = [...e.items], n = Math.max(0, Math.min(_, t.length));
				t.splice(n, 0, g);
				let r = typeof e.total == "number" && !v ? e.total + 1 : e.total;
				return {
					...e,
					items: t,
					total: r
				};
			}
			return e;
		});
		u(y);
		let b = y.map((e) => `${e.id}:[${e.items.map((t, n) => r(t, n, e.id)).join(",")}]`).join("|");
		f.current = b, d.current = b;
		try {
			let e = o == null ? null : c[m].items[o], l = await a?.onMove?.(t, n, g, e ? {
				record: e,
				position: s ?? "above"
			} : null);
			return l && u((e) => {
				let t = e.map((e) => {
					if (e.id !== n) return e;
					let t = [...e.items], a = t.findIndex((e, t) => String(r(e, t, n)) === String(i));
					return a !== -1 && t.splice(a, 1, l), {
						...e,
						items: t
					};
				}), a = t.map((e) => `${e.id}:[${e.items.map((t, n) => r(t, n, e.id)).join(",")}]`).join("|");
				return d.current = a, t;
			}), l;
		} catch (e) {
			throw u(c), f.current = null, e;
		}
	};
	return /* @__PURE__ */ Z("div", {
		className: H("relative w-full px-6", !c && "h-full", i),
		children: [
			/* @__PURE__ */ X(Jt, {
				className: H("relative w-full", !c && "h-full [&>div>div]:h-full"),
				viewportRef: _,
				children: /* @__PURE__ */ X("div", {
					className: H("relative mb-2 flex gap-2", c ? "items-stretch" : "h-full items-start"),
					children: l.map((e, i) => {
						let a = t.find((t) => t.id === e.id), c = a?.loading ?? e.loading, l = a?.hasMore ?? e.hasMore, u = a?.loadingMore ?? e.loadingMore, d = a?.fetchMore ?? e.fetchMore, f = e.total ?? a?.total ?? e.items.length;
						return /* @__PURE__ */ X("div", {
							className: "relative shrink-0",
							"data-testid": `lane-${e.id ?? String(i)}`,
							children: /* @__PURE__ */ X(yT, {
								id: e.id,
								heightMode: s,
								getLaneResourceIndexById: e.id ? (t) => x(e.id, t) : void 0,
								onMove: S,
								title: e.title,
								items: e.items,
								getKey: (t, n) => r(t, n, e.id),
								renderCard: (t, r) => n(t, r, f, e.id),
								emptyState: e.emptyState,
								loading: c,
								variant: e.variant,
								color: e.color,
								total: f,
								hasMore: l,
								loadingMore: u,
								fetchMore: d,
								onPrimaryAction: o && e.id ? () => o(e.id) : void 0,
								onFooterAction: o && e.id ? () => o(e.id) : void 0
							})
						}, e.id ?? String(i));
					})
				})
			}),
			/* @__PURE__ */ X("div", {
				ref: h,
				className: H("pointer-events-none absolute left-0 top-0 z-[9999] h-full w-12 select-none", p ? "pointer-events-auto" : "opacity-0"),
				"aria-hidden": !0
			}),
			/* @__PURE__ */ X("div", {
				ref: g,
				className: H("pointer-events-none absolute right-0 top-0 z-[9999] h-full w-12 select-none", p ? "pointer-events-auto" : "opacity-0"),
				"aria-hidden": !0
			})
		]
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/Kanban/KanbanBoard.tsx
var xT = ({ lanes: e, renderCard: t, getKey: n, onCreate: r, onMove: i, idProvider: a, allowReorder: o, loading: s, heightMode: c }) => {
	let [l] = J(() => Symbol("kanban-visualization")), u = K(() => {
		let t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			let n = /* @__PURE__ */ new Map();
			e.items.forEach((e, t) => {
				let r = a ? a(e, t) : e?.id ?? t;
				n.set(String(r), t);
			}), t.set(String(e.id), n);
		}), t;
	}, [e, a]), d = K(() => ({
		instanceId: l,
		getIndexById: (e, t) => {
			let n = u.get(e)?.get(t) ?? -1;
			return o ? n : -1;
		},
		onMove: i
	}), [
		l,
		u,
		o,
		i
	]), f = K(() => ({
		lanes: e,
		loading: s,
		getKey: n,
		renderCard: t,
		onCreate: r,
		dnd: d,
		heightMode: c
	}), [
		e,
		s,
		n,
		t,
		r,
		d,
		c
	]);
	return i ? /* @__PURE__ */ X(Co, {
		driver: bo(l),
		children: /* @__PURE__ */ X(bT, { ...f })
	}) : /* @__PURE__ */ X(bT, { ...f });
}, ST = (e) => !!(e && e.type === "infinite-scroll"), CT = ({ lanes: e, title: t, description: n, avatar: r, metadata: i, onMove: a, onCreate: s, source: c, onSelectItems: l, onLoadError: u, onLoadData: d, getLanesForGroup: f, selectableGroups: p = !0 }) => {
	let { lanesProvider: h, lanesHooks: g } = qw(c, { onError: (e) => u(e) }), _ = c.idProvider, v = m(), y = c.currentSortings === null, { totalItemsAggregated: b, isInitialLoadingAggregated: x } = K(() => {
		let t = Object.values(g), n = t.length === e.length;
		if (t.length === 0 || !n) return {
			totalItemsAggregated: void 0,
			isInitialLoadingAggregated: !0
		};
		let r = 0, i = !1;
		for (let e of t) {
			let t = e.paginationInfo?.total ?? e.data.records.length;
			r += typeof t == "number" ? t : 0, e.isInitialLoading && (i = !0);
		}
		return {
			totalItemsAggregated: r,
			isInitialLoadingAggregated: i
		};
	}, [g, e.length]), S = K(() => Object.values(g).some((e) => e.isInitialLoading), [g]);
	G(() => {
		d({
			totalItems: b,
			filters: c.currentFilters,
			search: c.currentSearch,
			isInitialLoading: x,
			data: Object.values(g).flatMap((e) => e.data.records)
		});
	}, [
		b,
		x,
		g,
		c.currentFilters,
		c.currentSearch
	]);
	let { lanesSelectProvider: C, lanesUseSelectable: w } = Xw(K(() => e.map((e) => ({
		id: e.id,
		data: g[e.id]?.data || {
			type: "flat",
			records: [],
			groups: []
		},
		paginationInfo: g[e.id]?.paginationInfo || null
	})), [e, g]), c, (e, t) => {
		l?.(e, t);
	}), T = W((e, t) => {
		if (_) return String(_(e, t));
		let n = e?.id;
		return String(n ?? t);
	}, [_]), E = W((e, o, s, l) => {
		let u = String(_ ? _(e, o) : e?.id ?? o), d = c.selectable ? c.selectable(e) : e.id, f = w && l ? w.get(l) : void 0, p = (typeof d == "string" || typeof d == "number") && f && f?.selectedItems.has(d), m = c.itemUrl ? c.itemUrl(e) : void 0, h = c.itemOnClick ? c.itemOnClick(e) : void 0;
		return /* @__PURE__ */ X(uT, {
			drag: {
				id: u,
				type: "list-card",
				data: {
					...e,
					laneId: l
				}
			},
			id: String(e.id),
			index: o,
			total: s,
			laneId: l,
			showIndicator: y,
			title: t ? t(e) : String(o),
			description: n ? n(e) : void 0,
			avatar: r ? r(e) : void 0,
			draggable: a !== void 0,
			metadata: i ? [...i(e)] : void 0,
			compact: !0,
			forceVerticalMetadata: !0,
			selectable: c.selectable !== void 0,
			selected: p,
			"data-testid": `kanban-card-${String(e.id)}`,
			onSelect: (t) => {
				f && f.handleSelectItemChange(e, t);
			},
			onClick: h,
			link: m
		}, u);
	}, [
		_,
		c.selectable,
		c.itemUrl,
		c.itemOnClick,
		w,
		y,
		t,
		n,
		r,
		a,
		i
	]), D = K(() => e.map((e) => {
		let t = g[e.id], n = t?.paginationInfo?.total, r = ST(t?.paginationInfo) && t?.paginationInfo?.hasMore;
		return {
			id: e.id,
			title: e.title,
			items: t?.data?.records ?? [],
			variant: e.variant,
			color: e.color,
			total: n,
			hasMore: r,
			loading: !t || t.isInitialLoading,
			loadingMore: t?.isLoadingMore || !1,
			fetchMore: r ? () => t.loadMore() : void 0
		};
	}), [e, g]), O = !!c.currentGrouping, k = o(), A = c.currentGrouping?.order ?? "asc", j = c.currentGrouping?.field, M = c.dataAdapter?.paginationType, N = K(() => {
		let e = c.currentGrouping?.field;
		if (e != null) return c.grouping?.groupBy?.[e];
	}, [c.currentGrouping?.field, c.grouping]), P = K(() => new Set(e.map((e) => e.id)), [e]), F = K(() => {
		if (!O) return [];
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = g[n.id]?.data;
			if (e?.type === "grouped") for (let n of e.groups) t.add(n.key);
		}
		return Array.from(t).sort((e, t) => {
			let n = e.localeCompare(t, void 0, { numeric: !0 });
			return A === "desc" ? -n : n;
		});
	}, [
		O,
		e,
		g,
		A
	]), I = K(() => O ? F.map((t) => {
		let n = (f ? f(t) : e).filter((e) => P.has(e.id)).map((e) => {
			let n = g[e.id], r = (n?.data?.type === "grouped" ? n.data.groups.find((e) => e.key === t) : void 0)?.records ?? [];
			return {
				id: e.id,
				title: e.title,
				items: r,
				variant: e.variant,
				color: e.color,
				total: r.length,
				hasMore: !1,
				loading: !n || n.isInitialLoading,
				loadingMore: !1,
				fetchMore: void 0
			};
		});
		return {
			key: t,
			label: N ? N.label(t, c.currentFilters) : t,
			itemCount: N?.itemCount ? N.itemCount(t, c.currentFilters) : n.reduce((e, t) => e + t.items.length, 0),
			lanes: n
		};
	}) : [], [
		O,
		F,
		e,
		g,
		f,
		N,
		P,
		c.currentFilters
	]), L = K(() => {
		if (!O || !f) return [];
		let e = /* @__PURE__ */ new Set();
		for (let t of F) for (let n of f(t)) P.has(n.id) || e.add(n.id);
		return Array.from(e);
	}, [
		O,
		f,
		F,
		P
	]);
	G(() => {
		!k || !O || (j != null && !N && console.error(`[OneDataCollection/Kanban] currentGrouping.field "${String(j)}" is not a key of grouping.groupBy — the board will render without groups.`), (M === "infinite-scroll" || M === "pages") && console.warn("[OneDataCollection/Kanban] grouping with a paginated source only shows each group's first page; counters use the authoritative itemCount but cards may be incomplete. Use a non-paginated source for grouped Kanban."), L.length > 0 && console.warn(`[OneDataCollection/Kanban] getLanesForGroup returned lane id(s) not present in source.lanes: ${L.join(", ")}. They are ignored (they would never load).`));
	}, [
		k,
		O,
		j,
		M,
		N,
		L
	]);
	let R = c.grouping?.collapsible, V = c.grouping?.defaultOpenGroups, { openGroups: ee, setGroupOpen: te } = Ue(I.map((e) => ({
		key: e.key,
		label: e.label,
		itemCount: e.itemCount,
		records: []
	})), V);
	return /* @__PURE__ */ Z(Y, { children: [
		h,
		C,
		O ? /* @__PURE__ */ X("div", {
			className: "flex max-h-full min-h-0 flex-1 flex-col gap-6 overflow-auto",
			"aria-busy": S,
			"aria-live": S ? "polite" : void 0,
			children: I.length === 0 ? /* @__PURE__ */ X(xT, {
				lanes: D,
				renderCard: E,
				getKey: T,
				onCreate: s,
				onMove: a,
				idProvider: _,
				allowReorder: !1,
				loading: S
			}) : I.map((e) => {
				let t = p && c.selectable !== void 0, n = 0, r = 0;
				for (let t of e.lanes) {
					if (t.id === void 0) continue;
					let i = w.get(t.id)?.groupAllSelectedStatus[e.key];
					n += i?.selectedCount ?? 0, r += i?.unselectedCount ?? 0;
				}
				let i = n === 0 ? !1 : r === 0 || "indeterminate";
				return /* @__PURE__ */ Z("div", {
					className: "flex flex-col gap-2",
					"data-testid": `kanban-group-${e.key}`,
					children: [/* @__PURE__ */ X(Ze, {
						className: H("rounded-md py-3 pl-6 pr-3.5", (R || t) && "cursor-pointer select-none transition-colors hover:bg-f1-background-hover"),
						showOpenChange: R,
						label: e.label,
						itemCount: e.itemCount,
						selectable: t,
						select: i,
						onSelectChange: (t) => e.lanes.forEach((n) => {
							n.id !== void 0 && w.get(n.id)?.handleSelectGroupChange(e.key, t);
						}),
						open: ee[e.key],
						onOpenChange: (t) => te(e.key, t)
					}), /* @__PURE__ */ X(z, { children: (!R || ee[e.key]) && /* @__PURE__ */ X(B.div, {
						initial: {
							height: 0,
							opacity: 0
						},
						animate: {
							height: "auto",
							opacity: 1
						},
						exit: {
							height: 0,
							opacity: 0
						},
						transition: {
							duration: v ? 0 : .1,
							ease: "easeInOut"
						},
						children: /* @__PURE__ */ X(xT, {
							lanes: e.lanes,
							heightMode: "content",
							renderCard: E,
							getKey: T,
							onCreate: s,
							onMove: a,
							idProvider: _,
							allowReorder: !1,
							loading: S
						})
					}) })]
				}, `kanban-group-${e.key}`);
			})
		}) : /* @__PURE__ */ X(xT, {
			lanes: D,
			renderCard: E,
			getKey: T,
			onCreate: s,
			onMove: a,
			idProvider: _,
			allowReorder: y,
			loading: S
		})
	] });
}, wT = ({ title: e, avatar: t, description: n }) => /* @__PURE__ */ Z("article", {
	className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2",
	children: [t && /* @__PURE__ */ X(Zt, {
		avatar: t,
		size: "md"
	}), /* @__PURE__ */ Z("div", {
		className: "flex flex-1 flex-col gap-0.5",
		children: [/* @__PURE__ */ X("header", { children: /* @__PURE__ */ X("h3", { children: /* @__PURE__ */ X(s, {
			className: "text-base font-medium text-f1-foreground",
			children: e
		}) }) }), /* @__PURE__ */ X("aside", { children: n && n.length > 0 && /* @__PURE__ */ X("div", {
			className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1",
			children: n.map((e, t) => /* @__PURE__ */ Z("div", {
				className: "flex min-w-0 gap-1",
				children: [/* @__PURE__ */ X(s, { children: e }), t < n.length - 1 && /* @__PURE__ */ X("span", {
					className: "hidden md:inline",
					children: " · "
				})]
			}, t))
		}) })]
	})]
}), TT = ({ source: e, item: t, selectedItems: n, handleSelectItemChange: r, fields: i, itemDefinition: a }) => {
	let o = g(), { actions: s } = o, c = (e, t) => Ts(e, t, "list", o), l = e.itemUrl ? e.itemUrl(t) : void 0, u = e.itemOnClick ? e.itemOnClick(t) : void 0, d = !!l || !!u, f = e.selectable ? e.selectable(t) : void 0, p = a(t), { hasMobileItemActions: m, primaryItemActions: h, dropdownItemActions: _, mobileDropdownItemActions: v, handleDropDownOpenChange: y, dropDownOpen: b } = du({
		source: e,
		item: t
	});
	return /* @__PURE__ */ Z("div", {
		className: H("relative flex min-h-[64px] w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:p-2 md:pl-3 md:pr-4", d && "cursor-pointer", "group after:absolute after:inset-y-0 after:-right-px after:z-10 after:hidden after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:via-f1-background after:via-75% after:to-f1-background after:transition-all after:content-[''] hover:after:via-[#F5F6F8] hover:after:to-[#F5F6F8] dark:hover:after:via-[#192231] dark:hover:after:to-[#192231] md:after:block hover:md:bg-f1-background-hover"),
		children: [
			/* @__PURE__ */ X("div", {
				onClick: u,
				className: "pointer-events-auto absolute inset-0"
			}),
			/* @__PURE__ */ Z("div", {
				className: "pointer-events-none flex flex-1 flex-row items-center gap-2",
				children: [
					e.selectable && f !== void 0 && /* @__PURE__ */ X("div", {
						className: "pointer-events-auto z-10 hidden items-center justify-end md:flex",
						children: /* @__PURE__ */ X(Qt, {
							checked: n.has(f),
							onCheckedChange: (e) => r(t, e),
							title: `Select ${e.selectable(t)}`,
							hideLabel: !0
						})
					}),
					l && /* @__PURE__ */ X(gn, {
						href: l,
						className: "pointer-events-auto absolute inset-0 block",
						tabIndex: 0,
						onClick: u,
						children: /* @__PURE__ */ X("span", {
							className: "sr-only",
							children: s.view
						})
					}),
					/* @__PURE__ */ X(wT, {
						title: p.title,
						avatar: p.avatar,
						description: p.description
					})
				]
			}),
			/* @__PURE__ */ X("div", {
				className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end",
				children: (i || []).filter((e) => !e.hide?.(t)).map((e) => {
					let n = c(t, e);
					return n ? /* @__PURE__ */ X("div", { children: /* @__PURE__ */ X("div", {
						className: "flex items-center justify-center px-0 py-1 md:p-3 [&>span]:whitespace-nowrap",
						children: n
					}) }, String(e.label)) : null;
				})
			}),
			e.itemActions && /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(lu, {
				dropDownOpen: b,
				className: "pointer-events-auto hidden md:flex",
				children: /* @__PURE__ */ X(fu, {
					primaryItemActions: h,
					dropdownItemActions: _,
					handleDropDownOpenChange: y
				})
			}), m && /* @__PURE__ */ X(cu, {
				className: "absolute -right-px bottom-0 top-0 z-20 items-center justify-end gap-2 py-2 pl-20 pr-3 md:hidden",
				items: v,
				onOpenChange: y
			})] }),
			e.selectable && f !== void 0 && /* @__PURE__ */ X("div", {
				className: H("pointer-events-auto absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", m && "right-12"),
				children: /* @__PURE__ */ X(Qt, {
					checked: n.has(f),
					onCheckedChange: (e) => r(t, e),
					title: `Select ${e.selectable(t)}`,
					hideLabel: !0
				})
			})
		]
	});
}, ET = ({ source: e, items: t, selectedItems: n, handleSelectItemChange: r, fields: i, itemDefinition: a, isLoadingMore: o }) => /* @__PURE__ */ X("div", {
	className: H("flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary", o && "rounded-b-none"),
	children: t.map((t, o) => /* @__PURE__ */ X(TT, {
		source: e,
		item: t,
		selectedItems: n,
		handleSelectItemChange: r,
		fields: i,
		itemDefinition: a
	}, `row-${o}`))
}), DT = ({ source: e, fields: t, count: n = 5, isInitialLoading: r, className: i }) => /* @__PURE__ */ X("div", {
	className: H("relative flex h-full flex-col overflow-hidden rounded-b-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary", r ? "mx-4 mt-2 rounded-t-xl" : "border-t-0", i),
	children: Array.from({ length: n }).map((n, r) => /* @__PURE__ */ Z("div", {
		"data-testid": "skeleton-item",
		className: "relative flex w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:pl-3 md:pr-4",
		children: [
			/* @__PURE__ */ Z("div", {
				className: "flex flex-1 flex-row items-center gap-2",
				children: [e.selectable && /* @__PURE__ */ X("div", {
					className: "z-10 hidden items-center justify-end md:flex",
					children: /* @__PURE__ */ X(T, { className: "h-4 w-4" })
				}), /* @__PURE__ */ Z("article", {
					className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2",
					children: [/* @__PURE__ */ X(T, { className: "h-8 w-8 rounded-full" }), /* @__PURE__ */ Z("div", {
						className: "flex flex-1 flex-col gap-1",
						children: [/* @__PURE__ */ X("header", { children: /* @__PURE__ */ X(T, { className: "h-5 w-32" }) }), /* @__PURE__ */ X("aside", { children: /* @__PURE__ */ Z("div", {
							className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-2",
							children: [/* @__PURE__ */ X(T, { className: "h-4 w-20" }), /* @__PURE__ */ X(T, { className: "h-4 w-24" })]
						}) })]
					})]
				})]
			}),
			/* @__PURE__ */ X("div", {
				className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end",
				children: t.map((e, t) => /* @__PURE__ */ X("div", { children: /* @__PURE__ */ X("div", {
					className: "flex items-center justify-center px-0 py-1 md:p-3",
					children: /* @__PURE__ */ X(T, { className: "h-4 w-20" })
				}) }, `skeleton-field-${t}`))
			}),
			e.itemActions && /* @__PURE__ */ X("div", {
				className: "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
				children: /* @__PURE__ */ X(T, { className: "h-6 w-6" })
			}),
			e.selectable && /* @__PURE__ */ X("div", {
				className: H("absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", e.itemActions && "right-12"),
				children: /* @__PURE__ */ X(T, { className: "h-4 w-4" })
			})
		]
	}, `skeleton-item-${r}`))
}), OT = ({ fields: e, itemDefinition: t, source: n, onSelectItems: r, onLoadData: i, onLoadError: a, tmpFullWidth: o }) => {
	let { data: s, paginationInfo: c, setPage: l, isInitialLoading: u, isLoadingMore: d, loadMore: f } = Bl(n, { onError: (e) => {
		a(e);
	} });
	G(() => {
		i({
			totalItems: c?.total || s.records.length,
			filters: n.currentFilters,
			search: n.currentSearch,
			isInitialLoading: u,
			data: s.records
		});
	}, [c?.total, s.records]);
	let { isLoading: p } = n, { loadingIndicatorRef: m } = tu(c, p, d, f), { selectedItems: h, groupAllSelectedStatus: g, handleSelectItemChange: _, handleSelectGroupChange: v } = tt({
		data: s,
		paginationInfo: c,
		source: n,
		onSelectItems: r,
		selectionMode: "multi",
		selectedState: n.defaultSelectedItems
	}), y = n.grouping?.collapsible, b = n.grouping?.defaultOpenGroups, { openGroups: x, setGroupOpen: S } = Ue(s?.type === "grouped" ? s.groups : [], b);
	if (Qs({
		value: u,
		delay: 100
	})) return /* @__PURE__ */ X(DT, {
		source: n,
		fields: e,
		count: 30,
		isInitialLoading: !0
	});
	n.sortings || e.forEach((e) => {
		e.sorting && console.warn("Sorting is defined on a property but no sortings are provided in the data source");
	});
	let C = u || p && n.dataAdapter.paginationType === "pages";
	return /* @__PURE__ */ Z("div", {
		className: H("flex max-h-full min-h-0 flex-1 flex-col gap-4 py-2", !o && "px-page", o && "px-0"),
		children: [/* @__PURE__ */ X("div", {
			className: H("flex min-h-0 flex-1 flex-col gap-2", C && "select-none opacity-50 transition-opacity"),
			"aria-live": C ? "polite" : void 0,
			"aria-busy": C ? "true" : void 0,
			children: /* @__PURE__ */ Z("div", {
				className: "min-h-0 flex-1 overflow-auto pb-3",
				children: [
					s.type === "grouped" && s.groups.map((r, i) => {
						let a = r.itemCount;
						return /* @__PURE__ */ Z("div", {
							className: "flex flex-col gap-0 pt-2 first:pt-0",
							children: [/* @__PURE__ */ X(Ze, {
								className: "cursor-pointer select-none rounded-md px-3.5 py-3 transition-colors hover:bg-f1-background-hover",
								selectable: !!n.selectable,
								select: g[r.key]?.checked ? !0 : g[r.key]?.indeterminate ? "indeterminate" : !1,
								onSelectChange: (e) => v(r, e),
								showOpenChange: y,
								label: r.label,
								itemCount: a,
								open: x[r.key],
								onOpenChange: (e) => S(r.key, e)
							}, `group-header-${r.key}`), /* @__PURE__ */ X(z, { children: (!y || x[r.key]) && /* @__PURE__ */ X(B.div, {
								initial: {
									height: 0,
									opacity: 0
								},
								animate: {
									height: "auto",
									opacity: 1
								},
								exit: {
									height: 0,
									opacity: 0
								},
								transition: {
									duration: .1,
									ease: "easeInOut"
								},
								className: "mt-0.5",
								children: /* @__PURE__ */ X(ET, {
									source: n,
									items: r.records,
									selectedItems: h,
									handleSelectItemChange: _,
									fields: e,
									itemDefinition: t,
									isLoadingMore: d && i === s.groups.length - 1
								}, `list-group-${r.key}`)
							}) })]
						}, `group-header-${r.key}`);
					}),
					s?.type === "flat" && /* @__PURE__ */ X(ET, {
						source: n,
						items: s.records,
						selectedItems: h,
						handleSelectItemChange: _,
						fields: e,
						itemDefinition: t,
						isLoadingMore: d
					}),
					Xe(c) && d && /* @__PURE__ */ X(DT, {
						source: n,
						fields: e,
						count: 5
					}),
					Xe(c) && c.hasMore && /* @__PURE__ */ X("div", {
						ref: m,
						className: "w-full",
						"aria-hidden": "true"
					})
				]
			})
		}), /* @__PURE__ */ X(Xl, {
			paginationInfo: c,
			setPage: l
		})]
	});
}, kT = {
	table: {
		name: "Table",
		icon: Ae,
		render: (e) => /* @__PURE__ */ X(md, { ...e }),
		settings: {
			renderer: (e) => dd({
				...e,
				visualizationKey: "table"
			}),
			resetHandler: (e) => e.setVisualizationSettings("table", {}),
			default: {}
		}
	},
	editableTable: {
		name: "Editable table",
		icon: Et,
		render: (e) => /* @__PURE__ */ X(hd, { ...e }),
		settings: {
			renderer: (e) => dd({
				...e,
				visualizationKey: "editableTable"
			}),
			resetHandler: (e) => e.setVisualizationSettings("editableTable", {}),
			default: {}
		}
	},
	list: {
		name: "List",
		icon: Se,
		settings: { default: {} },
		render: (e) => /* @__PURE__ */ X(OT, { ...e })
	},
	card: {
		name: "Card",
		icon: he,
		settings: { default: {} },
		render: (e) => /* @__PURE__ */ X(eu, { ...e })
	},
	kanban: {
		name: "Kanban",
		icon: he,
		settings: { default: {} },
		render: (e) => /* @__PURE__ */ X(CT, { ...e })
	},
	graph: {
		name: "Graph",
		icon: be,
		settings: {
			default: {},
			renderer: (e) => Uw(e),
			resetHandler: (e) => e.setVisualizationSettings("graph", {})
		},
		render: (e) => /* @__PURE__ */ X(Vw, { ...e })
	}
}, AT = ({ visualization: e, source: t, onSelectItems: n, onLoadData: r, onLoadError: i, tmpFullWidth: a, searchSelectionNonce: o }) => {
	if (e.type === "custom") return e.component({
		source: t,
		onLoadData: r,
		onLoadError: i,
		onSelectItems: n
	});
	let s = kT[e.type];
	if (!s) throw Error(`Visualization type ${e.type} not found`);
	return s.render({
		source: t,
		...e.options,
		onSelectItems: n,
		onLoadData: r,
		onLoadError: i,
		tmpFullWidth: a,
		searchSelectionNonce: o
	});
}, jT = () => {
	let e = {};
	for (let [t, n] of Object.entries(kT)) n.settings.default && (e[t] = { ...n.settings.default });
	return { visualization: e };
}, MT = (e, t) => {
	if (!t || !(t in kT)) return !0;
	let n = t, r = e.visualization[n], i = kT[n]?.settings.default;
	return JSON.stringify(r) === JSON.stringify(i);
};
//#endregion
//#region src/patterns/OneDataCollection/internal/presetId.ts
function NT(e, t) {
	let n = e.trim().replace(/\s+/g, " ") || "preset", r = new Set(t);
	if (!r.has(n)) return n;
	let i = 2;
	for (; r.has(`${n} ${i}`);) i++;
	return `${n} ${i}`;
}
//#endregion
//#region src/patterns/OneDataCollection/internal/sharedPreset.ts
var PT = "dc_shared_view", FT = (e) => {
	let t = new TextEncoder().encode(e), n = "";
	for (let e of t) n += String.fromCharCode(e);
	return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}, IT = (e) => {
	let t = e.replace(/-/g, "+").replace(/_/g, "/"), n = atob(t), r = Uint8Array.from(n, (e) => e.charCodeAt(0));
	return new TextDecoder().decode(r);
}, LT = (e) => {
	let t = {
		label: e.label,
		description: e.description,
		filter: e.filter,
		sortings: e.sortings,
		grouping: e.grouping,
		visualization: e.visualization,
		settings: e.settings
	};
	return FT(JSON.stringify(t));
}, RT = (e) => {
	if (!e) return null;
	try {
		let t = JSON.parse(IT(e));
		return typeof t == "object" && t && typeof t.label == "string" ? t : null;
	} catch {
		return null;
	}
}, zT = (e) => {
	if (typeof window > "u") return null;
	let { origin: t, pathname: n } = window.location;
	return `${t}${n}?${PT}=${LT(e)}`;
}, BT = "__no-sorting__", VT = ({ currentSortings: e, sortings: t, onChange: n }) => {
	let r = g(), i = [{
		label: r.collections.sorting.noSorting,
		value: BT
	}, ...Object.entries(t || {}).map(([e, t]) => ({
		label: t.label,
		value: e
	}))], a = K(() => e ?? {
		field: "__no-sorting__",
		order: "asc"
	}, [e]), o = (e) => {
		!e || e.field === "__no-sorting__" ? n(null) : n(e);
	};
	return /* @__PURE__ */ X("div", {
		className: "flex flex-col",
		children: /* @__PURE__ */ Z("div", {
			className: "flex items-end gap-2",
			children: [/* @__PURE__ */ X("div", {
				className: "shrink grow [&_button]:h-8 [&_button]:rounded",
				children: /* @__PURE__ */ X(kt, {
					label: r.collections.sorting.sortBy,
					options: i,
					value: a.field,
					onChange: (e) => {
						o({
							field: e,
							order: a.order ?? "asc"
						});
					}
				}, a.field)
			}), a.field !== "__no-sorting__" && /* @__PURE__ */ X("div", { children: /* @__PURE__ */ X(P, {
				hideLabel: !0,
				label: r.collections.sorting.toggleDirection,
				variant: "outline",
				icon: a.order === "asc" ? de : pe,
				onClick: () => o({
					field: a.field,
					order: a.order === "asc" ? "desc" : "asc"
				})
			}) })]
		})
	});
}, HT = (e) => {
	if (e === "custom") return null;
	let t = kT[e];
	if (!t) throw Error(`Visualization type ${e} not found`);
	return t;
}, UT = (e) => HT(e.type)?.settings.renderer ?? null, WT = (e) => {
	if (e.type === "custom") return !1;
	let t = UT(e);
	return t ? t(e.options) !== null : !1;
}, GT = ({ visualization: e }) => {
	if (e.type === "custom") return null;
	let t = UT(e);
	return t ? t(e.options) : null;
}, KT = ({ visualizations: e, currentVisualization: t, grouping: n, currentGrouping: r, onGroupingChange: i, sortings: a, currentSortings: o, defaultSortings: s, onSortingsChange: c }) => {
	let l = g(), u = n ? Object.keys(n.groupBy).length + +!!n.mandatory : 0, [d, f] = J(!1), p = (e) => {
		i(e);
	}, m = n && u > 0, h = e[t]?.sortings ?? a, _ = h && Object.keys(h).length > 0, v = K(() => e[t], [t, e?.[t]]), y = K(() => /* @__PURE__ */ X(GT, { visualization: v }, "visualization-settings"), [v]), b = K(() => WT(v), [v]), x = K(() => {
		let n = e[t]?.type;
		if (!n) return "-";
		let r = l.collections.visualizations[n] ?? "-";
		return l.collections.visualizations.settings.replace("{{visualizationName}}", r);
	}, [t]), S = Bc(), C = K(() => {
		if (JSON.stringify(o) !== JSON.stringify(s)) return !0;
		let n = e[t]?.type;
		return !MT(S.settings, n);
	}, [
		S.settings.visualization,
		e,
		t,
		o,
		s
	]);
	return /* @__PURE__ */ X("div", {
		className: "flex gap-2",
		children: /* @__PURE__ */ Z(bn, {
			open: d,
			onOpenChange: f,
			children: [/* @__PURE__ */ X(_n, {
				asChild: !0,
				onClick: () => f(!d),
				children: /* @__PURE__ */ X(O, {
					variant: "outline",
					label: "Settings",
					icon: we,
					onClick: () => {},
					hideLabel: !0,
					compact: !0,
					pressed: d,
					"aria-controls": d ? "settings" : void 0
				})
			}), /* @__PURE__ */ X(vn, {
				className: "flex w-[280px] flex-col gap-0 rounded-md border border-solid border-f1-border-secondary p-0",
				align: "end",
				sideOffset: 8,
				children: [
					m && !n?.hideSelector && !(n.mandatory && Object.entries(n.groupBy).length < 2) && /* @__PURE__ */ X("div", {
						className: "p-3",
						children: /* @__PURE__ */ X(We, {
							SelectComponent: nt,
							grouping: n,
							currentGrouping: r,
							onGroupingChange: p
						})
					}, "grouping"),
					_ && /* @__PURE__ */ X("div", {
						className: "p-3",
						children: /* @__PURE__ */ X(VT, {
							currentSortings: o,
							onChange: c,
							sortings: h
						})
					}, "sorting"),
					b && /* @__PURE__ */ Z("section", {
						className: "p-3 pb-0",
						children: [/* @__PURE__ */ X("h3", {
							className: "mb-2 text-sm font-medium text-f1-foreground-secondary",
							children: x
						}), y]
					}, "visualization-settings"),
					C && /* @__PURE__ */ X("section", {
						className: "border-0 border-t border-solid border-t-f1-border p-3",
						children: /* @__PURE__ */ X(P, {
							size: "sm",
							variant: "ghost",
							icon: kn,
							label: l.collections.visualizations.reset,
							onClick: () => {
								Object.values(kT).forEach((e) => {
									e.settings.resetHandler?.(S);
								}), c(s);
							}
						})
					}, "reset")
				].filter(Boolean)
			})]
		})
	});
}, qT = 16;
function JT(e, t, n) {
	let [r, i] = J(!1), a = q(!1), o = q(0), s = W(() => {
		let r = e.current, s = t.current;
		if (!r || !s) return;
		a.current || (o.current = s.scrollWidth);
		let c = getComputedStyle(r), l = parseFloat(c.paddingLeft) + parseFloat(c.paddingRight), u = n?.current?.offsetWidth ?? 0, d = r.clientWidth - l - (u > 0 ? u + qT : 0), f = o.current > d;
		f !== a.current && (a.current = f, i(f));
	}, [
		e,
		t,
		n
	]);
	return u({
		ref: e,
		onResize: s
	}), u({
		ref: t,
		onResize: s
	}), r;
}
//#endregion
//#region src/patterns/OneDataCollection/Settings/components/useVisualizationMeta.ts
var YT = () => {
	let e = g();
	return (t) => t.type === "custom" ? {
		icon: t.icon,
		label: t.label
	} : {
		icon: kT[t.type].icon,
		label: t.label ?? e.collections.visualizations[t.type]
	};
}, XT = ({ visualizations: e, currentVisualization: t, onVisualizationChange: n, hideLabels: r }) => {
	let i = g(), a = YT();
	if (!e || e.length <= 1) return null;
	let o = e.map((e, t) => {
		let { icon: n, label: r } = a(e);
		return {
			value: String(t),
			label: r,
			icon: n
		};
	});
	return /* @__PURE__ */ X(ui, {
		items: o,
		value: String(t),
		onChange: (e) => n(Number(e)),
		hideLabels: r,
		ariaLabel: i.collections.visualizations.viewSelectorLabel
	});
}, ZT = 1500, QT = 2e3, $T = ({ source: e, visualizations: t, onSelectItems: n, onBulkAction: r, autoManageBulkActionStatus: i = !1, bulkActionStatus: a, onStateChange: o, emptyStates: s, fullHeight: c, storage: l, id: u, disableUrlParams: d, tmpFullWidth: f, csvExport: p, savingViewsDisabled: m, initialVisualization: h = 0 }) => {
	let { filters: _, currentFilters: v, setCurrentFilters: y, presets: b, presetsLoading: x, currentNavigationFilters: S, navigationFilters: C, setCurrentNavigationFilters: w, search: T, currentSearch: E, setCurrentSearch: D, isLoading: O, primaryActions: k, primaryActionsLabel: A, secondaryActions: j, upsellAction: M, totalItemSummary: N, currentGrouping: P, setCurrentGrouping: F, grouping: I, currentSortings: L, setCurrentSortings: R, sortings: z } = e, [V, ee] = J(h), [te, ne] = J(void 0), [U, ie] = J([]), [ae, oe] = J(null), [se] = J(() => typeof window > "u" ? null : RT(new URLSearchParams(window.location.search).get(PT))), ce = Sc(e.searchPreview, e.debouncedCurrentSearch), { effectiveFilters: le, effectivePresets: ue, currentFilters: de, setCurrentFilters: fe, allVisualizationFilters: pe, setAllVisualizationFilters: me, hasPerVisualizationFilters: he } = Rl({
		sourceFilters: _,
		sourcePresets: b,
		sourceCurrentFilters: v,
		sourceSetCurrentFilters: y,
		visualizations: t,
		currentVisualization: V,
		storageKey: u
	}), ge = q(null), [_e, ve] = J(!1), ye = kc(e.dataAdapter, c), be = "perPage" in e.dataAdapter && e.dataAdapter.perPage === "auto" && e.dataAdapter.paginationType === "pages" && !c, xe = Ic(ge, ye, {
		rowHeight: (() => {
			switch (t[V]?.type) {
				case "list": return 68;
				default: return 48;
			}
		})(),
		ready: _e,
		measureKey: V
	});
	G(() => {
		ye && ve(!1);
	}, [V]), G(() => {
		be && console.warn("[OneDataCollection] perPage: \"auto\" requires the fullHeight prop — falling back to the default page size.");
	}, [be]);
	let Se = K(() => ye ? {
		...e.dataAdapter,
		perPage: xe
	} : e.dataAdapter, [
		e.dataAdapter,
		ye,
		xe
	]), Ce = K(() => {
		let t = e;
		return he && (t = {
			...t,
			currentFilters: de,
			setCurrentFilters: fe
		}), t.dataAdapter !== Se && (t = {
			...t,
			dataAdapter: Se
		}), t;
	}, [
		e,
		he,
		de,
		fe,
		Se
	]), we = q(L), Te = q(P), Ee = q(de), { emitSortingChange: De } = ht({
		defaultSorting: we.current,
		currentVisualization: he ? V : void 0
	});
	G(() => {
		De(L);
	}, [De, L]);
	let Oe = K(() => $s(k), [k]), ke = K(() => ic(rc(j)), [j]), Ae = K(() => ac(M), [M]), je = p && typeof p == "object" ? p.filename : u ? `${u}_export` : void 0, Me = nl({
		source: Ce,
		currentVisualization: t[V],
		filename: je,
		enabled: !!p
	}), Ne = K(() => Math.min(j && "expanded" in j && j.expanded || 0, 2), [j]), Pe = K(() => ke[0]?.items.slice(0, Ne) || [], [ke, Ne]), Fe = K(() => {
		let e = ke[0] ?? { items: [] }, t = [{
			...e,
			items: e.items?.slice(Ne) || []
		}, ...ke.slice(1)];
		return p && t.push({ items: [Me] }), t.filter((e) => e.items.length > 0);
	}, [
		ke,
		Ne,
		p,
		Me.loading,
		Me.disabled,
		Me.onClick
	]), Ie = Oe?.length > 0 || ke?.length > 0 || !!Ae || !!p, [Le, Re] = J(void 0), ze = re(), [Be, Ve] = J(void 0), Ue = W((e) => {
		if (!e) return [];
		let t = [], n = [];
		for (let r of e) "type" in r && r.type === "separator" ? (t.push({ items: n }), n = []) : n.push(r);
		return n.length > 0 && t.push({ items: n }), t;
	}, []), We = K(() => {
		if (Be) return "warningMessage" in Be ? { warningMessage: Be.warningMessage } : {
			primary: Ue(Be.primary ?? []),
			secondary: (Be?.secondary ?? []).filter((e) => !("type" in e && e.type === "separator"))
		};
	}, [Be, Ue]), [Ge, Ke] = J(!1), [qe, Je] = J(0), [Ye, Xe] = J(!1), [Ze, Qe] = J("idle"), [$e, et] = J(!1), tt = q(null), nt = q(null), rt = q(null), it = q(null), at = q(null), ot = JT(rt, it, at), st = (e) => a !== void 0 && a !== "idle" && !(a === "success" && e), ct = st($e) ? a : Ze, lt = st($e), ut = q(!1);
	ut.current = lt;
	let ft = a !== void 0, pt = W((e, t = !0) => {
		nt.current && clearTimeout(nt.current), nt.current = setTimeout(() => {
			t && Ke(!1), e(), nt.current = null;
		}, ZT);
	}, []);
	G(() => () => {
		nt.current && clearTimeout(nt.current);
	}, []);
	let mt = q(void 0);
	G(() => {
		let e = mt.current;
		mt.current = a, a === "success" && e !== "success" ? (et(!1), pt(() => {
			Le?.(), et(!0);
		})) : e === "success" && a !== "success" && (nt.current &&= (clearTimeout(nt.current), null), et(!1));
	}, [
		a,
		Le,
		pt
	]);
	let gt = g(), _t = K(() => N === !0 ? (e) => e === void 0 ? null : `${e} ${gt.collections.itemsCount}` : N || void 0, [N, gt]), vt = (t, a, o) => {
		n?.(t, a, o), Ke(!!t.allSelected || t.itemsStatus.some((e) => e.checked)), Qe((e) => e === "error" ? "idle" : e), Je(t.selectedCount), Re(() => a), Xe(t.allSelected === !0);
		let s = e.bulkActions ? e.bulkActions(t) : void 0, c = (e) => {
			if ("type" in e && e.type === "separator") return { type: "separator" };
			let n = e;
			return {
				...n,
				onClick: () => {
					let e = r?.(n.id, t, a);
					if (!(i && e !== void 0 && typeof e?.then == "function")) {
						!n.keepSelection && !ft && a();
						return;
					}
					ut.current || (Qe("loading"), e.then(() => {
						Qe("success"), pt(() => {
							n.keepSelection || a(), Qe("idle");
						}, !n.keepSelection);
					}, () => {
						Qe("error"), tt.current?.wiggle({ errorHighlight: !0 });
					}));
				}
			};
		};
		s && ("primary" in s ? Ve({
			primary: (s?.primary || []).map(c),
			secondary: (s?.secondary || []).map(c)
		}) : "warningMessage" in s && Ve({ warningMessage: s.warningMessage }));
	}, [yt, bt] = J(void 0), [St, Ct] = J(!0), wt = K(() => [T?.enabled, t.length > 1].some(Boolean), [T, t]), { emptyState: Tt, setEmptyStateType: Et } = Lc(s, {
		retry: () => {
			Et(!1), fe({ ...de });
		},
		clearFilters: () => {
			Et(!1), fe({}), D(void 0);
		}
	}), Dt = (e, t, n) => e === 0 ? le && dt(le, t, gt).length > 0 || n ? "no-results" : "no-data" : !1, Ot = ({ totalItems: e, filters: t, isInitialLoading: n, search: r }) => {
		n || (Ct(n), bt(e), ve(!0), Et(Dt(e, t, r)));
	}, kt = (e) => {
		Et("error", e.cause instanceof Error ? e.cause.message : e.message);
	}, At = Qs({
		value: !!x,
		delay: 100
	});
	G(() => {
		Et(!1);
	}, [
		de,
		E,
		S,
		e.dataAdapter
	]);
	let jt = K(() => _t !== void 0, [_t]), Nt = _t === void 0 || yt === void 0 ? null : _t(yt), { settings: Pt, setSettings: Ft } = Bc(), It = K(() => [...(ue ?? []).map((e, t) => ({
		...e,
		id: e.id ?? `${e.label}-${t}`
	})), ...U], [ue, U]), Lt = K(() => new Set(U.map((e) => e.id)), [U]), Rt = K(() => ({
		filters: de,
		sortings: L,
		grouping: P,
		visualization: V,
		settings: Pt
	}), [
		de,
		L,
		P,
		V,
		Pt
	]), zt = W((e) => ({
		filters: e.filter ?? {},
		sortings: e.sortings === void 0 ? we.current : e.sortings,
		grouping: e.grouping === void 0 ? Te.current : e.grouping,
		visualization: e.visualization ?? 0,
		settings: e.settings === void 0 ? jT() : e.settings
	}), []), Bt = q(null), Vt = q(!1), Ht = q(null), Ut = W(() => ({
		filters: Ee.current,
		sortings: we.current,
		grouping: Te.current,
		visualization: 0,
		settings: jT()
	}), []), Wt = W((e) => {
		R(e.sortings), F(e.grouping), Ft(e.settings), e.visualization === V ? fe(e.filters) : (Ht.current = {
			filters: e.filters,
			visualization: e.visualization
		}, ee(e.visualization));
	}, [
		V,
		fe,
		R,
		F,
		Ft
	]);
	Kn(() => {
		let e = Ht.current;
		e && e.visualization === V && (Ht.current = null, fe(e.filters));
	}, [V, fe]);
	let Gt = W((e) => {
		if (Vt.current = !1, e === te) {
			Wt(Bt.current ?? Ut()), Bt.current = null, ne(void 0);
			return;
		}
		let t = It.find((t) => t.id === e);
		t && (te || (Bt.current = Rt), Wt(zt(t)), ne(e));
	}, [
		It,
		te,
		Rt,
		Wt,
		Ut,
		zt
	]), Kt = q(null);
	G(() => {
		let e = te ? It.find((e) => e.id === te) : void 0;
		if (!e) {
			Kt.current = null;
			return;
		}
		Kt.current?.id !== e.id && (Kt.current = {
			id: e.id,
			snapshot: zt(e),
			settled: !1
		});
		let t = Kt.current;
		if (t && !Ht.current) {
			if (!t.settled) {
				(0, ci.default)(Rt, t.snapshot) && (t.settled = !0);
				return;
			}
			(0, ci.default)(Rt, t.snapshot) || (Kt.current = null, Bt.current = null, Vt.current = !0, ne(void 0));
		}
	}, [
		te,
		It,
		Rt,
		zt
	]);
	let [qt, Jt] = J(null), Yt = K(() => m || te && It.some((e) => e.id === te) || qt === null ? "none" : !((e, t) => (0, ci.default)({
		...e,
		visualization: void 0
	}, {
		...t,
		visualization: void 0
	}))(Rt, qt) || Vt.current && !(0, ci.default)(Rt, qt) ? "save" : "none", [
		m,
		te,
		It,
		Rt,
		qt
	]), Xt = W((e) => {
		let t = ae?.mode === "create" ? ae.shared : void 0, n = t ? {
			filter: t.filter,
			sortings: t.sortings,
			grouping: t.grouping,
			visualization: t.visualization,
			settings: t.settings
		} : {
			filter: de,
			sortings: L,
			grouping: P,
			visualization: V,
			settings: Pt
		}, r = {
			id: NT(e.title, It.map((e) => e.id ?? e.label)),
			label: e.title,
			description: e.description,
			...n
		};
		ie((e) => [...e, r]), ne(r.id), Vt.current = !1, oe(null);
	}, [
		ae,
		de,
		L,
		P,
		V,
		Pt,
		It
	]), Zt = W((e) => {
		let t = ae?.mode === "update" ? ae.presetId : void 0;
		if (!t) return;
		let n = NT(e.title, It.filter((e) => e.id !== t).map((e) => e.id ?? e.label));
		ie((r) => r.map((r) => r.id === t ? {
			...r,
			id: n,
			label: e.title,
			description: e.description
		} : r)), ne((e) => e === t ? n : e), oe(null);
	}, [ae, It]), Qt = W(() => {
		let e = ae?.mode === "update" ? ae.presetId : void 0;
		e && (ie((t) => t.filter((t) => t.id !== e)), ne((t) => t === e ? void 0 : t), oe(null));
	}, [ae]), $t = W(() => {
		oe({ mode: "create" });
	}, []), en = K(() => Array.from(Lt).filter((e) => !!e), [Lt]), tn = W((e) => oe({
		mode: "update",
		presetId: e
	}), []), nn = W((e) => {
		let t = U.find((t) => t.id === e);
		if (!t) return;
		let n = zT({
			label: t.label,
			description: t.description,
			filter: t.filter,
			sortings: t.sortings,
			grouping: t.grouping,
			visualization: t.visualization,
			settings: t.settings
		}), r = typeof navigator < "u" ? navigator.clipboard : void 0;
		!n || !r || r.writeText(n).then(() => an(!0)).catch(() => {});
	}, [U]), [rn, an] = J(!1);
	G(() => {
		if (!rn) return;
		let e = setTimeout(() => an(!1), QT);
		return () => clearTimeout(e);
	}, [rn]), G(() => {
		if (se && (oe({
			mode: "create",
			shared: se
		}), typeof window < "u")) {
			let e = new URLSearchParams(window.location.search);
			e.delete(PT);
			let t = e.toString();
			window.history.replaceState(null, "", t ? `${window.location.pathname}?${t}` : window.location.pathname);
		}
	}, []);
	let on = K(() => ae?.mode === "update" ? U.find((e) => e.id === ae.presetId) : void 0, [ae, U]), { storageReady: sn } = Oc(u, typeof l == "object" ? l?.features ?? ["*"] : ["*"], {
		settings: {
			value: Pt,
			setValue: Ft
		},
		sortings: {
			value: L,
			setValue: R
		},
		grouping: {
			value: P,
			setValue: F
		},
		navigationFilters: {
			value: S,
			setValue: w
		},
		visualization: {
			value: V,
			setValue: ee
		},
		search: {
			value: E,
			setValue: D
		},
		filters: {
			value: v,
			setValue: y
		},
		customPresets: {
			value: U,
			setValue: ie
		},
		...he ? { visualizationFilters: {
			value: pe,
			setValue: me
		} } : {}
	}, l === !1);
	G(() => {
		sn && qt === null && Jt(Rt);
	}, [
		sn,
		qt,
		Rt
	]), Ml({
		disabled: !!d,
		storageReady: sn,
		filtersDefinition: _,
		filters: de,
		search: E,
		sortings: L,
		defaultSortings: we.current,
		visualization: V,
		visualizationKeys: t.map((e) => e.type),
		selectedPresetId: te,
		setFilters: fe,
		setSearch: D,
		setSortings: R,
		setVisualization: ee,
		setSelectedPresetId: ne
	});
	let cn = Qs({
		value: St && sn,
		delay: 100
	});
	He(() => {
		o?.({
			filters: de,
			sortings: L,
			visualization: V,
			grouping: P,
			search: E,
			navigationFilters: S,
			settings: Pt,
			...he ? { visualizationFilters: pe } : {}
		});
	}, [
		de,
		E,
		S,
		L,
		V,
		P,
		Pt,
		pe
	]);
	let ln = K(() => {
		let e = I ? Object.keys(I.groupBy).length + +!!I.mandatory : 0, n = Object.values(t).find((e) => e.type === "table"), r = !!n && (!!n.options?.allowColumnHiding || !!n.options?.allowColumnReordering);
		return e > 0 && !I?.hideSelector || z && Object.keys(z).length > 0 || r;
	}, [
		t,
		I,
		z
	]), un = K(() => wt || Ie || ln || T && T.enabled, [
		wt,
		Ie,
		ln,
		T
	]), dn = K(() => jt ? le ? "top" : "bottom" : !1, [le, jt]), fn = K(() => C ? un ? "top" : "bottom" : !1, [C, un]), pn = K(() => dn === "top" || fn === "top", [dn, fn]), mn = K(() => le || un || fn === "bottom" || dn === "bottom", [
		le,
		un,
		fn,
		dn
	]);
	return /* @__PURE__ */ Z("div", {
		className: H("flex flex-col gap-4", ze === "standard" && "-mx-[23px]", c && "h-full flex-1"),
		style: { width: ze === "standard" && !f ? "calc(100% + 46px)" : "100%" },
		children: [
			pn && /* @__PURE__ */ Z("div", {
				className: "border-f1-border-primary px-page flex gap-4",
				children: [dn === "top" && /* @__PURE__ */ X(Cc, {
					isReady: !cn,
					totalItemSummaryResult: Nt
				}), /* @__PURE__ */ X("div", {
					className: "flex flex-1 flex-shrink justify-end",
					children: fn === "top" && /* @__PURE__ */ X(gc, {
						navigationFilters: C,
						currentNavigationFilters: S,
						onChangeNavigationFilters: w
					})
				})]
			}),
			mn && /* @__PURE__ */ Z("div", {
				ref: rt,
				className: H("flex flex-row gap-4 px-page", c && "max-h-full", f && "px-0"),
				children: [dn === "bottom" && /* @__PURE__ */ X("div", {
					ref: at,
					className: "flex items-center",
					children: /* @__PURE__ */ X(Cc, {
						isReady: !cn,
						totalItemSummaryResult: Nt
					})
				}), /* @__PURE__ */ X("div", {
					className: "flex-1",
					children: /* @__PURE__ */ X(xt, {
						filters: le,
						value: de,
						presets: It,
						presetsLoading: At,
						onChange: (e) => fe(e),
						resultCount: yt,
						selectedPresetId: te,
						onSelectPreset: Gt,
						editablePresetIds: en,
						onEditPreset: tn,
						presetActionState: Yt,
						onPresetAction: $t,
						children: /* @__PURE__ */ Z("div", {
							ref: it,
							className: "flex items-center gap-2",
							children: [
								O && /* @__PURE__ */ X(B.div, {
									className: "flex h-8 w-8 items-center justify-center",
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									children: /* @__PURE__ */ X(Mt, { size: "small" })
								}),
								T && /* @__PURE__ */ X(bc, {
									onChange: D,
									value: E,
									results: ce.results,
									resultsLoading: ce.loading,
									onResultSelect: ce.onSelect,
									hasMore: ce.hasMore,
									loadingMore: ce.loadingMore,
									onLoadMore: ce.onLoadMore
								}),
								t && t.length > 1 && /* @__PURE__ */ X(XT, {
									visualizations: t,
									currentVisualization: V,
									onVisualizationChange: ee,
									hideLabels: ot
								}),
								ln && /* @__PURE__ */ X(KT, {
									visualizations: t,
									currentVisualization: V,
									grouping: I,
									currentGrouping: P,
									onGroupingChange: F,
									sortings: z,
									currentSortings: L,
									defaultSortings: we.current,
									onSortingsChange: R
								}),
								Ie && /* @__PURE__ */ Z(Y, { children: [wt && /* @__PURE__ */ X("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }), /* @__PURE__ */ X(lc, {
									primaryActions: Oe,
									primaryActionsLabel: A,
									secondaryActions: Pe,
									otherActions: Fe,
									upsellAction: Ae
								})] }),
								fn === "bottom" && /* @__PURE__ */ X(gc, {
									navigationFilters: C,
									currentNavigationFilters: S,
									onChangeNavigationFilters: w
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ X("div", {
				ref: ge,
				className: H(Tt && "hidden", c && "h-full min-h-0 flex-1"),
				children: (!ye || xe !== void 0) && /* @__PURE__ */ X(AT, {
					visualization: t[V],
					source: Ce,
					onSelectItems: vt,
					onLoadData: Ot,
					onLoadError: kt,
					tmpFullWidth: f,
					searchSelectionNonce: ce.selectionNonce
				})
			}),
			Tt ? /* @__PURE__ */ X("div", {
				className: "flex flex-1 flex-col items-center justify-center",
				children: /* @__PURE__ */ X(Zs, {
					emoji: Tt.emoji,
					title: Tt.title,
					description: Tt.description,
					actions: Tt.actions
				})
			}) : /* @__PURE__ */ X(Y, { children: Be && /* @__PURE__ */ X(cc, {
				ref: tt,
				isOpen: Ge || ct === "loading" || ct === "success",
				status: ct,
				selectedNumber: qe,
				primaryActions: We && "primary" in We ? We.primary : [],
				secondaryActions: We && "secondary" in We ? We.secondary : [],
				warningMessage: "warningMessage" in Be ? Be.warningMessage : void 0,
				onUnselect: () => Le?.(),
				allPagesSelection: !!e.allPagesSelection,
				isAllItemsSelected: Ye,
				totalItems: yt
			}) }),
			/* @__PURE__ */ X(_c, {
				isOpen: ae !== null,
				mode: ae?.mode ?? "create",
				initialValues: on ? {
					title: on.label,
					description: on.description
				} : ae?.mode === "create" && ae.shared ? {
					title: ae.shared.label,
					description: ae.shared.description
				} : void 0,
				onClose: () => oe(null),
				onSubmit: ae?.mode === "update" ? Zt : Xt,
				onDelete: ae?.mode === "update" ? Qt : void 0,
				onShare: ae?.mode === "update" ? () => nn(ae.presetId) : void 0,
				existingNames: It.filter((e) => ae?.mode !== "update" || e.id !== ae.presetId).map((e) => e.label)
			}),
			typeof document < "u" && qn(/* @__PURE__ */ X("div", {
				style: {
					position: "relative",
					zIndex: 9999
				},
				children: /* @__PURE__ */ X(si, {
					isOpen: rn,
					variant: "light",
					status: "success",
					label: gt.collections.presets.copiedToClipboard
				})
			}), document.getElementById("content") ?? document.body)
		]
	});
}, eE = a((e) => /* @__PURE__ */ X(Vc, { children: /* @__PURE__ */ X($T, { ...e }) })), tE = (e, t = []) => {
	let n = g(), { navigationFilters: r, summaries: i, currentNavigationFilters: a } = e, o = Tt({
		...e,
		dataAdapter: e.dataAdapter
	}, t), [s, c] = J(() => r ? Object.fromEntries(Object.entries(r).map(([e, t]) => {
		let r = hc[t.type];
		return [e, r.valueConverter ? r.valueConverter(t.defaultValue, t, n) : t.defaultValue];
	})) : {});
	He(() => {
		a && c(a);
	}, [a]);
	let l = K(() => i, t);
	return {
		...o,
		summaries: l,
		navigationFilters: r,
		currentNavigationFilters: s,
		setCurrentNavigationFilters: c
	};
};
//#endregion
export { ti as $, os as A, bo as B, fc as C, Hs as D, qs as E, Fo as F, Ni as G, yo as H, Eo as I, ki as J, ji as K, wo as L, is as M, rs as N, zs as O, ts as P, si as Q, To as R, hc as S, Ys as T, uo as U, vo as V, Fi as W, Ti as X, Oi as Y, ui as Z, Yc as _, Bl as a, er as at, Pc as b, ll as c, Ol as d, mr as et, kl as f, Uc as g, Zc as h, Yl as i, rr as it, as as j, ls as k, Dl as l, nl as m, eE as n, fr as nt, il as o, Qn as ot, Al as p, Ai as q, tu as r, sr as rt, rl as s, Jn as st, tE as t, pr as tt, xl as u, Ac as v, Zs as w, gc as x, jc as y, Co as z };
