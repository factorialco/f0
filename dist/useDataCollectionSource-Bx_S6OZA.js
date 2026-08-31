import { o as e, t } from "./rolldown-runtime-CEFd7nDs.js";
import { t as n } from "./dist-CqnuTXEz.js";
import { t as r } from "./component-Lhh_08kH.js";
import { d as i, m as a, t as o, u as s } from "./OneEllipsis-DuhKMtYp.js";
import { $ as c, C as l, D as u, F as d, I as f, P as p, Z as m, _ as h, at as g, ct as _, dt as v, f as y, ft as b, ht as x, it as S, k as C, lt as w, ot as T, pt as E, q as D, rt as O, s as k, st as A, tt as j, ut as M, v as N, w as P } from "./variants-D_OHTcOj.js";
import { n as F, t as I } from "./utils-CVzxZnoI.js";
import { A as L, D as R, E as z, F as B, M as ee, N as te, T as V, h as H, m as U, t as ne } from "./F0Dialog-BaGlIiOg.js";
import { S as re, _ as ie, a as ae, b as oe, c as se, d as ce, f as le, g as ue, h as de, i as fe, l as pe, m as me, n as he, o as ge, p as _e, r as ve, s as ye, t as be, u as xe, v as Se, x as Ce, y as we } from "./value-BbnmXVI5.js";
import { i as Te, n as Ee, o as De, r as Oe, t as ke } from "./tooltip-BPSwDQpD.js";
import { a as Ae, i as je, l as Me, r as Ne, u as Pe } from "./F0Button-B67qxFBP.js";
import { $ as Fe, B as Ie, C as Le, Gt as Re, H as ze, Ht as Be, Kt as Ve, M as He, R as Ue, T as We, U as Ge, Ut as Ke, W as qe, Wt as Je, X as Ye, Z as Xe, b as Ze, c as Qe, et as $e, gt as et, in as tt, m as nt, n as rt, nn as it, nt as at, q as ot, qt as st, rt as ct, t as lt, u as ut, z as dt } from "./F0Select-Bq_PvQ3a.js";
import { a as ft } from "./F0AvatarIcon-lYqvXtJ5.js";
import { C as pt, D as mt, J as ht, R as gt, ct as _t, dt as vt, it as yt, n as bt, o as xt, ot as St, p as Ct, q as wt, rt as Tt, st as Et, t as Dt, w as Ot, x as kt } from "./F0Checkbox-BcR7Q7zJ.js";
import { J as At, Q as jt, X as Mt, b as Nt, c as Pt, d as Ft, et as It, f as Lt, g as Rt, p as zt, r as Bt, s as Vt, t as Ht } from "./F0Card-DCj5xT5c.js";
import { n as Ut } from "./internal-Buc8jYg2.js";
import { a as Wt, i as Gt, t as Kt } from "./popover-By8ytmVb.js";
import { t as qt } from "./CheckCircle-KIInZpvd.js";
import { d as Jt, n as Yt, u as Xt } from "./input-B2JSUD-n.js";
import { t as Zt } from "./Download-Dvj6cfxp.js";
import { a as Qt, b as $t, f as en, o as tn, v as nn, x as rn } from "./progress-BbpMKllH.js";
import { n as an, t as on } from "./F0Link-NQqXfK_H.js";
import { n as sn } from "./internal-7L66m9mR.js";
import { t as cn } from "./Minimize-C1HdMgmx.js";
import { _ as ln, c as un } from "./F0Avatar-CyikaOUL.js";
import { t as dn } from "./Placeholder-DPFLvgsk.js";
import { t as fn } from "./Reset-gUsyzwG8.js";
import { t as pn } from "./chevron-right-DQKib3pL.js";
import { n as mn } from "./skeleton-gsHEXIPQ.js";
import { a as hn, i as gn, o as _n, s as vn, t as yn } from "./F0DatePicker-BQPuvrdZ.js";
import { i as bn, r as xn } from "./dist-DZ95rvEx.js";
import { F0NumberInput as Sn } from "./F0NumberInput.js";
import { F0TextInput as Cn } from "./F0TextInput.js";
import { t as wn } from "./dist-Dt-cTb6D.js";
import * as Tn from "react";
import En, { Fragment as Dn, cloneElement as On, createContext as kn, createElement as An, forwardRef as jn, isValidElement as Mn, memo as Nn, useCallback as W, useContext as Pn, useEffect as G, useId as Fn, useImperativeHandle as In, useLayoutEffect as Ln, useMemo as K, useRef as q, useState as J } from "react";
import { createPortal as Rn } from "react-dom";
import { Fragment as Y, jsx as X, jsxs as Z } from "react/jsx-runtime";
import './useDataCollectionSource.css';//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/MotionConfig/index.mjs
function zn({ children: e, isValidProp: t, ...n }) {
	t && T(t), n = {
		...Pn(v),
		...n
	}, n.isStatic = E(() => n.isStatic);
	let r = K(() => n, [
		JSON.stringify(n.transition),
		n.transformPagePoint,
		n.reducedMotion
	]);
	return X(v.Provider, {
		value: r,
		children: e
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-combine-values.mjs
function Bn(e, t) {
	let n = re(t()), r = () => n.set(t());
	return r(), b(() => {
		let t = () => _.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return () => {
			n.forEach((e) => e()), A(r);
		};
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-computed.mjs
function Vn(e) {
	c.current = [], e();
	let t = Bn(c.current, e);
	return c.current = void 0, t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/transform.mjs
function Hn(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = D(i, a, o);
	return t ? s(r) : s;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-transform.mjs
function Un(e, t, n, r) {
	if (typeof e == "function") return Vn(e);
	let i = typeof t == "function" ? t : Hn(t, n, r);
	return Array.isArray(e) ? Wn(e, i) : Wn([e], ([e]) => i(e));
}
function Wn(e, t) {
	let n = E(() => []);
	return Bn(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
function Gn() {
	!d.current && p();
	let [e] = J(f.current);
	return process.env.NODE_ENV !== "production" && g(e !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs
var Kn = class {
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
}, qn = () => new Kn();
function Jn() {
	return E(qn);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/ReorderContext.mjs
var Yn = kn(null);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function Xn(e, t, n, r) {
	if (!r) return e;
	let i = e.findIndex((e) => e.value === t);
	if (i === -1) return e;
	let a = r > 0 ? 1 : -1, o = e[i + a];
	if (!o) return e;
	let s = e[i], c = o.layout, l = m(c.min, c.max, .5);
	return a === 1 && s.layout.max + n > l || a === -1 && s.layout.min + n < l ? j(e, i, i + a) : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Group.mjs
function Zn({ children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...a }, o) {
	let s = E(() => C[t]), c = [], l = q(!1);
	S(!!i, "Reorder.Group must be provided a values prop");
	let u = {
		axis: n,
		registerItem: (e, t) => {
			let r = c.findIndex((t) => e === t.value);
			r === -1 ? c.push({
				value: e,
				layout: t[n]
			}) : c[r].layout = t[n], c.sort(er);
		},
		updateOrder: (e, t, n) => {
			if (l.current) return;
			let a = Xn(c, e, t, n);
			c !== a && (l.current = !0, r(a.map($n).filter((e) => i.indexOf(e) !== -1)));
		}
	};
	return G(() => {
		l.current = !1;
	}), X(s, {
		...a,
		ref: o,
		ignoreStrict: !0,
		children: X(Yn.Provider, {
			value: u,
			children: e
		})
	});
}
var Qn = /*@__PURE__*/ jn(Zn);
function $n(e) {
	return e.value;
}
function er(e, t) {
	return e.layout.min - t.layout.min;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Item.mjs
function tr(e, t = 0) {
	return O(e) ? e : re(t);
}
function nr({ children: e, style: t = {}, value: n, as: r = "li", onDrag: i, layout: a = !0, ...o }, s) {
	let c = E(() => C[r]), l = Pn(Yn), u = {
		x: tr(t.x),
		y: tr(t.y)
	}, d = Un([u.x, u.y], ([e, t]) => e || t ? 1 : "unset");
	S(!!l, "Reorder.Item must be a child of Reorder.Group");
	let { axis: f, registerItem: p, updateOrder: m } = l;
	return X(c, {
		drag: f,
		...o,
		dragSnapToOrigin: !0,
		style: {
			...t,
			x: u.x,
			y: u.y,
			zIndex: d
		},
		layout: a,
		onDrag: (e, t) => {
			let { velocity: r } = t;
			r[f] && m(n, u[f].get(), r[f]), i && i(e, t);
		},
		onLayoutMeasure: (e) => p(n, e),
		ref: s,
		ignoreStrict: !0,
		children: e
	});
}
var rr = /*@__PURE__*/ jn(nr), ir = jn(function({ bare: e = !1, ...t }, n) {
	return /* @__PURE__ */ X("div", {
		ref: n,
		role: "separator",
		className: I("-mx-4 h-[1px]", e ? void 0 : "my-4"),
		style: { backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)" },
		...t
	});
});
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parseISO.mjs
function ar(e, t) {
	let n = t?.additionalDigits ?? 2, r = ur(e), i;
	if (r.date) {
		let e = dr(r.date, n);
		i = fr(e.restDateString, e.year);
	}
	if (!i || isNaN(i.getTime())) return /* @__PURE__ */ new Date(NaN);
	let a = i.getTime(), o = 0, s;
	if (r.time && (o = mr(r.time), isNaN(o))) return /* @__PURE__ */ new Date(NaN);
	if (r.timezone) {
		if (s = gr(r.timezone), isNaN(s)) return /* @__PURE__ */ new Date(NaN);
	} else {
		let e = new Date(a + o), t = /* @__PURE__ */ new Date(0);
		return t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), t.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), t;
	}
	return new Date(a + o + s);
}
var or = {
	dateTimeDelimiter: /[T ]/,
	timeZoneDelimiter: /[Z ]/i,
	timezone: /([Z+-].*)$/
}, sr = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, cr = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, lr = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function ur(e) {
	let t = {}, n = e.split(or.dateTimeDelimiter), r;
	if (n.length > 2) return t;
	if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], or.timeZoneDelimiter.test(t.date) && (t.date = e.split(or.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
		let e = or.timezone.exec(r);
		e ? (t.time = r.replace(e[1], ""), t.timezone = e[1]) : t.time = r;
	}
	return t;
}
function dr(e, t) {
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
function fr(e, t) {
	if (t === null) return /* @__PURE__ */ new Date(NaN);
	let n = e.match(sr);
	if (!n) return /* @__PURE__ */ new Date(NaN);
	let r = !!n[4], i = pr(n[1]), a = pr(n[2]) - 1, o = pr(n[3]), s = pr(n[4]), c = pr(n[5]) - 1;
	if (r) return Sr(t, s, c) ? _r(t, s, c) : /* @__PURE__ */ new Date(NaN);
	{
		let e = /* @__PURE__ */ new Date(0);
		return !br(t, a, o) || !xr(t, i) ? /* @__PURE__ */ new Date(NaN) : (e.setUTCFullYear(t, a, Math.max(i, o)), e);
	}
}
function pr(e) {
	return e ? parseInt(e) : 1;
}
function mr(e) {
	let t = e.match(cr);
	if (!t) return NaN;
	let n = hr(t[1]), r = hr(t[2]), i = hr(t[3]);
	return Cr(n, r, i) ? n * wt + r * ht + i * 1e3 : NaN;
}
function hr(e) {
	return e && parseFloat(e.replace(",", ".")) || 0;
}
function gr(e) {
	if (e === "Z") return 0;
	let t = e.match(lr);
	if (!t) return 0;
	let n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), i = t[3] && parseInt(t[3]) || 0;
	return wr(r, i) ? n * (r * wt + i * ht) : NaN;
}
function _r(e, t, n) {
	let r = /* @__PURE__ */ new Date(0);
	r.setUTCFullYear(e, 0, 4);
	let i = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - i;
	return r.setUTCDate(r.getUTCDate() + a), r;
}
var vr = [
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
function yr(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
function br(e, t, n) {
	return t >= 0 && t <= 11 && n >= 1 && n <= (vr[t] || (yr(e) ? 29 : 28));
}
function xr(e, t) {
	return t >= 1 && t <= (yr(e) ? 366 : 365);
}
function Sr(e, t, n) {
	return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function Cr(e, t, n) {
	return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function wr(e, t) {
	return t >= 0 && t <= 59;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/decompose.js
var Tr = 180 / Math.PI, Er = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Dr(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Tr,
		skewX: Math.atan(c) * Tr,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/parse.js
var Or;
function kr(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Er : Dr(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Ar(e) {
	return e == null || (Or ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Or.setAttribute("transform", e), !(e = Or.transform.baseVal.consolidate())) ? Er : (e = e.matrix, Dr(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/index.js
function jr(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: ve(e, i)
			}, {
				i: c - 2,
				x: ve(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: ve(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: ve(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: ve(e, n)
			}, {
				i: s - 2,
				x: ve(t, r)
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
var Mr = jr(kr, "px, ", "px)", "deg)"), Nr = jr(Ar, ", ", ")", ")"), Pr = 1e-12;
function Fr(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ir(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Lr(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Rr = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < Pr) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = Fr(y), c = s / (n * g) * (i * Lr(t * r + y) - Ir(y));
				return [
					a + c * d,
					o + c * f,
					s * i / Fr(t * r + y)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4), zr = {
	duration: .5,
	ease: [
		0,
		0,
		.2,
		1
	],
	delay: .2
}, Br = {
	normal: {
		pathLength: 1,
		opacity: 1,
		transition: { delay: 0 }
	},
	animate: {
		pathLength: [0, 1],
		opacity: [0, 1]
	}
}, Vr = {
	duration: .5,
	ease: [
		.175,
		.885,
		.32,
		1.275
	]
}, Hr = {
	normal: { scale: 1 },
	animate: { scale: [
		1,
		.9,
		1
	] }
}, Ur = Tn.forwardRef(({ animate: e = "normal", ...t }, n) => /* @__PURE__ */ Z("svg", {
	ref: n,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...t,
	children: [/* @__PURE__ */ X(C.circle, {
		cx: "12",
		cy: "12",
		r: "8",
		fill: "currentColor",
		initial: "normal",
		variants: Hr,
		transition: Vr,
		animate: e
	}), /* @__PURE__ */ X(C.path, {
		d: "M16.52 9.39C16.7354 9.10281 16.6772 8.69539 16.39 8.48C16.1028 8.26461 15.6954 8.32281 15.48 8.61L11.4297 14.0104L8.95963 11.5404C8.70578 11.2865 8.29423 11.2865 8.04039 11.5404C7.78655 11.7942 7.78655 12.2058 8.04039 12.4596L11.0404 15.4596C11.1736 15.5929 11.3581 15.6617 11.5461 15.6484C11.734 15.635 11.9069 15.5407 12.02 15.39L16.52 9.39Z",
		fill: "white",
		fillRule: "evenodd",
		clipRule: "evenodd",
		initial: "normal",
		variants: Br,
		transition: zr,
		animate: e
	})]
}));
Ur.displayName = "CheckCircleAnimated";
//#endregion
//#region src/components/F0ActionBar/index.tsx
function Wr(e) {
	return "items" in e;
}
var Gr = (e) => Array.isArray(e) ? e.every((e) => Wr(e)) ? e : [{ items: e }] : [e], Kr = [
	"idle",
	"loading",
	"success",
	"error"
], qr = "f0-action-bar-error-navigate", Jr = "f0-action-bar-wiggle", Yr = 600, Xr = ({ status: e, isLight: t }) => e === "loading" ? /* @__PURE__ */ X(Xt, {
	size: "small",
	className: I(!t && "text-f1-foreground-inverse")
}) : e === "success" ? /* @__PURE__ */ X(Ur, {
	animate: "animate",
	className: "h-5 w-5 text-f1-icon-positive"
}) : e === "error" ? /* @__PURE__ */ X(u, {
	icon: ft,
	size: "md",
	color: t ? "critical" : "inverse"
}) : /* @__PURE__ */ X(u, {
	icon: Ce,
	size: "md",
	color: t ? "currentColor" : "inverse"
}), Zr = jn(({ isOpen: e, secondaryActions: t = [], label: n, variant: r = "dark", leftContent: i, status: a = "idle", ...o }, s) => {
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
	}, []), In(s, () => ({ wiggle(e) {
		let t = c.current;
		if (!t) return;
		let n = e?.errorHighlight ? qr : Jr;
		l.current && clearTimeout(l.current), t.classList.remove(qr, Jr), t.offsetWidth, t.classList.add(n), l.current = setTimeout(() => {
			t.classList.remove(qr, Jr), l.current = null;
		}, Yr);
	} }));
	let [f, p] = J(!1);
	G(() => {
		if (a === "error") {
			let e = c.current;
			if (!e) return;
			l.current && clearTimeout(l.current), p(!1), e.classList.remove(qr), e.offsetWidth, e.classList.add(qr), l.current = setTimeout(() => {
				e.classList.remove(qr), l.current = null, p(!0);
			}, Yr);
		} else p(!1), l.current &&= (clearTimeout(l.current), null), c.current?.classList.remove(qr, Jr);
	}, [a]);
	let m = t.slice(0, 2), h = t.slice(2).map((e) => ({
		...e,
		critical: e.critical || !1
	})), g = r === "light", _ = a === "loading" || a === "success", v = K(() => Gr(o.primaryActions ?? []), [o.primaryActions]), y = v.some((e) => e.items.some((e) => e.loading)), b = K(() => v.map((e) => ({
		...e,
		items: e.items.map((e) => ({
			value: e.label,
			label: e.label,
			icon: e.icon,
			critical: e.critical,
			description: e.description,
			disabled: e.disabled
		}))
	})), [v]), x = K(() => v.length === 1 && v[0].items.length === 1 ? v[0].items[0] : null, [v]), S = W((e) => v.flatMap((e) => e.items).find((t) => t.label === e), [v]), T = g ? "" : "dark";
	return /* @__PURE__ */ X(w, { children: e && /* @__PURE__ */ Z(C.div, {
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
		className: I("fixed bottom-2 left-2 right-2 z-50 flex h-fit flex-col items-center gap-2 rounded-xl p-2 shadow-lg backdrop-blur-sm sm:bottom-5 sm:h-12 sm:w-max sm:flex-row sm:gap-5 sm:justify-between", u ? "sm:left-auto sm:right-auto sm:mx-auto" : "sm:left-2 sm:right-2 sm:mx-auto", g ? "border border-solid bg-f1-background text-f1-foreground" : "bg-f1-background-inverse text-f1-foreground dark:bg-f1-background-tertiary", g && f ? "border-f1-border-critical-bold bg-f1-background-critical/10" : g ? "border-f1-border-secondary" : ""),
		children: [
			i,
			(!!n || a && a !== "idle") && /* @__PURE__ */ Z("div", {
				className: "ml-2 flex items-center gap-2",
				children: [a && a !== "idle" && /* @__PURE__ */ X(Xr, {
					status: a,
					isLight: g
				}), !!n && /* @__PURE__ */ X("span", {
					className: I("font-medium", g ? "text-f1-foreground" : "text-f1-foreground-inverse"),
					children: n
				})]
			}),
			/* @__PURE__ */ Z("div", { children: [/* @__PURE__ */ X("div", {
				className: I(T, "flex flex-col items-center gap-2 sm:hidden [&_button]:w-full [&_div]:w-full"),
				children: /* @__PURE__ */ Z(Dn, { children: [/* @__PURE__ */ X(tn, { items: t }), x ? /* @__PURE__ */ X(Ne, {
					label: x.label,
					icon: x.icon,
					onClick: x.onClick,
					disabled: _ || x.disabled,
					loading: x.loading ?? a === "loading",
					size: "lg"
				}) : /* @__PURE__ */ X(L, {
					items: b,
					onClick: (e) => {
						S(e)?.onClick?.();
					},
					size: "lg",
					disabled: _ || y,
					loading: y
				})] }, "mobile-actions")
			}), /* @__PURE__ */ X("div", {
				className: I(T, "hidden items-center gap-2 sm:flex"),
				children: /* @__PURE__ */ Z(Dn, { children: [
					h.length > 0 && /* @__PURE__ */ X(Qt, { items: h }),
					m.slice().reverse().map((e) => /* @__PURE__ */ X(Ne, {
						variant: e.critical ? "critical" : "outline",
						label: e.label,
						icon: e.icon,
						onClick: e.onClick,
						disabled: _ || e.disabled
					}, e.label)),
					x ? /* @__PURE__ */ X(Ne, {
						label: x.label,
						icon: x.icon,
						onClick: x.onClick,
						disabled: _ || x.disabled,
						loading: x.loading ?? a === "loading"
					}) : /* @__PURE__ */ X(Y, { children: /* @__PURE__ */ X(L, {
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
Zr.displayName = "F0ActionBar";
var Qr = i(Zr), $r = /* @__PURE__ */ e(et(), 1), ei = ({ items: e, value: t, onChange: n, disabled: r = !1, fullWidth: i = !1, hideLabels: a = !1, ariaLabel: o, ariaLabelledBy: s }) => {
	let [c, l] = De({
		prop: t,
		defaultProp: e[0]?.value ?? "",
		onChange: n
	});
	return /* @__PURE__ */ X(xn, {
		type: "single",
		value: c,
		onValueChange: (e) => {
			e !== "" && l(e);
		},
		disabled: r,
		"aria-label": o,
		"aria-labelledby": s,
		className: I("inline-flex items-center rounded-md bg-f1-background-secondary p-0.5 gap-0.5", i && "w-full"),
		children: e.map((e) => /* @__PURE__ */ Z(bn, {
			value: e.value,
			disabled: r || e.disabled,
			className: I("relative flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded font-medium transition-all", "text-f1-foreground-secondary", "hover:text-f1-foreground hover:bg-f1-background-hover", "disabled:pointer-events-none disabled:text-f1-foreground-disabled", "data-[state=on]:bg-f1-background data-[state=on]:text-f1-foreground data-[state=on]:shadow", F(), "h-8 px-3 text-base", i && "w-full"),
			children: [e.icon && /* @__PURE__ */ X(u, {
				icon: e.icon,
				size: "md"
			}), a && e.icon ? /* @__PURE__ */ X("span", {
				className: "sr-only",
				children: e.label
			}) : e.label]
		}, e.value))
	});
};
ei.displayName = "F0SegmentedControl";
//#endregion
//#region src/experimental/Actions/F0SegmentedControl/index.tsx
var ti = x("F0SegmentedControl", ei), ni = jn(({ className: e, ...t }, n) => /* @__PURE__ */ X(en, {
	ref: n,
	className: I("text-f1-foreground-secondary", e),
	...t
}));
ni.displayName = en.displayName;
//#endregion
//#region src/ui/Dialog/components/DialogFooter.tsx
var ri = ({ className: e, ...t }) => /* @__PURE__ */ X("div", {
	className: e,
	...t
});
ri.displayName = "DialogFooter";
//#endregion
//#region src/ui/Dialog/components/DialogHeader.tsx
var ii = ({ className: e, ...t }) => /* @__PURE__ */ X("div", {
	className: e,
	...t
});
ii.displayName = "DialogHeader";
//#endregion
//#region src/ui/textarea.tsx
var ai = jn(({ className: e, label: t, labelIcon: n, icon: r, error: i, hideLabel: a, maxLength: o, clearable: s, disabled: c, required: l, value: u, cols: d, rows: f, status: p, hint: m, onChange: h, placeholder: g, size: _, loading: v, maxHeight: y, ...b }, x) => {
	let S = q(null);
	return In(x, () => S.current), Ln(() => {
		let e = S.current;
		if (!e) return;
		e.style.height = "0px";
		let t = e.scrollHeight, n = getComputedStyle(e), r = parseFloat(n.lineHeight) || 20, i = parseFloat(n.paddingTop) + parseFloat(n.paddingBottom), a = r * (e.rows || 2) + i, o = Math.max(t, a);
		y != null && o > y ? (e.style.height = `${y}px`, e.style.overflowY = "auto") : (e.style.height = `${o}px`, e.style.overflowY = "hidden");
	}), /* @__PURE__ */ X(Yt, {
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
			className: I("block w-full resize-none pt-2", e),
			value: u,
			cols: d,
			rows: f,
			disabled: c,
			required: l
		})
	});
});
ai.displayName = "Textarea";
//#endregion
//#region src/components/F0TextAreaInput/F0TextAreaInput.tsx
var oi = r({
	name: "F0TextAreaInput",
	type: "form"
}, ai);
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function si(e) {
	if (Array.isArray(e)) return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function ci(e, t) {
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
function li(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function ui(e, t) {
	if (e) {
		if (typeof e == "string") return li(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? li(e, t) : void 0;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function di() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function fi(e, t) {
	return si(e) || ci(e, t) || ui(e, t) || di();
}
//#endregion
//#region ../../node_modules/.pnpm/bind-event-listener@3.0.0/node_modules/bind-event-listener/dist/bind.js
var pi = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.bind = void 0;
	function t(e, t) {
		var n = t.type, r = t.listener, i = t.options;
		return e.addEventListener(n, r, i), function() {
			e.removeEventListener(n, r, i);
		};
	}
	e.bind = t;
})), mi = /* @__PURE__ */ t(((e) => {
	var t = e && e.__assign || function() {
		return t = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, t.apply(this, arguments);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = void 0;
	var n = pi();
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
})), hi = (/* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
	var t = pi();
	Object.defineProperty(e, "bind", {
		enumerable: !0,
		get: function() {
			return t.bind;
		}
	});
	var n = mi();
	Object.defineProperty(e, "bindAll", {
		enumerable: !0,
		get: function() {
			return n.bindAll;
		}
	});
})))(), gi = "data-pdnd-honey-pot";
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/is-honey-pot-element.js
function _i(e) {
	return e instanceof Element && e.hasAttribute("data-pdnd-honey-pot");
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/get-element-from-point-without-honey-pot.js
function vi(e) {
	var t = fi(document.elementsFromPoint(e.x, e.y), 2), n = t[0], r = t[1];
	return n ? _i(n) ? r ?? null : n : null;
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/typeof.js
function yi(e) {
	"@babel/helpers - typeof";
	return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, yi(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function bi(e, t) {
	if (yi(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (yi(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function xi(e) {
	var t = bi(e, "string");
	return yi(t) == "symbol" ? t : t + "";
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Si(e, t, n) {
	return (t = xi(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/max-z-index.js
var Ci = 2147483647;
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/make-honey-pot-fix.js
function wi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ti(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? wi(Object(n), !0).forEach(function(t) {
			Si(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Ei = 2, Di = Ei / 2;
function Oi(e) {
	return {
		x: Math.floor(e.x),
		y: Math.floor(e.y)
	};
}
function ki(e) {
	return {
		x: e.x - Di,
		y: e.y - Di
	};
}
function Ai(e) {
	return {
		x: Math.max(e.x, 0),
		y: Math.max(e.y, 0)
	};
}
function ji(e) {
	return {
		x: Math.min(e.x, window.innerWidth - Ei),
		y: Math.min(e.y, window.innerHeight - Ei)
	};
}
function Mi(e) {
	var t = e.client, n = ji(Ai(ki(Oi(t))));
	return DOMRect.fromRect({
		x: n.x,
		y: n.y,
		width: Ei,
		height: Ei
	});
}
function Ni(e) {
	var t = e.clientRect;
	return {
		left: `${t.left}px`,
		top: `${t.top}px`,
		width: `${t.width}px`,
		height: `${t.height}px`
	};
}
function Pi(e) {
	var t = e.client, n = e.clientRect;
	return t.x >= n.x && t.x <= n.x + n.width && t.y >= n.y && t.y <= n.y + n.height;
}
function Fi(e) {
	var t = e.initial, n = document.createElement("div");
	n.setAttribute(gi, "true");
	var r = Mi({ client: t });
	Object.assign(n.style, Ti(Ti({
		backgroundColor: "transparent",
		position: "fixed",
		padding: 0,
		margin: 0,
		boxSizing: "border-box"
	}, Ni({ clientRect: r })), {}, {
		pointerEvents: "auto",
		zIndex: Ci
	})), document.body.appendChild(n);
	var i = (0, hi.bind)(window, {
		type: "pointermove",
		listener: function(e) {
			r = Mi({ client: {
				x: e.clientX,
				y: e.clientY
			} }), Object.assign(n.style, Ni({ clientRect: r }));
		},
		options: { capture: !0 }
	});
	return function(e) {
		var t = e.current;
		if (i(), Pi({
			client: t,
			clientRect: r
		})) {
			n.remove();
			return;
		}
		function a() {
			o(), n.remove();
		}
		var o = (0, hi.bindAll)(window, [
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
function Ii() {
	var e = null;
	function t() {
		return e = null, (0, hi.bind)(window, {
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
				t = Fi({ initial: e ?? {
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
function Li(e) {
	if (Array.isArray(e)) return li(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function Ri(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function zi() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function Bi(e) {
	return Li(e) || Ri(e) || ui(e) || zi();
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/once.js
function Vi(e) {
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
var Hi = Vi(function() {
	return process.env.NODE_ENV !== "test" && navigator.userAgent.includes("Firefox");
}), Ui = Vi(function() {
	if (process.env.NODE_ENV === "test") return !1;
	var e = navigator.userAgent;
	return e.includes("AppleWebKit") && !e.includes("Chrome");
}), Wi = {
	isLeavingWindow: Symbol("leaving"),
	isEnteringWindow: Symbol("entering")
};
function Gi(e) {
	var t = e.dragLeave;
	return Ui() ? t.hasOwnProperty(Wi.isLeavingWindow) : !1;
}
(function() {
	if (typeof window > "u" || process.env.NODE_ENV === "test" || !Ui()) return;
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
	(0, hi.bindAll)(window, [
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
				!t.isOverWindow && t.enterCount === 0 && (e[Wi.isEnteringWindow] = !0), t.isOverWindow = !0, t.enterCount++;
			}
		},
		{
			type: "dragleave",
			listener: function(e) {
				t.enterCount--, t.isOverWindow && t.enterCount === 0 && (e[Wi.isLeavingWindow] = !0, t.isOverWindow = !1);
			}
		}
	], { capture: !0 });
})();
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-from-another-window.js
function Ki(e) {
	return "nodeName" in e;
}
function qi(e) {
	return Ki(e) && e.ownerDocument !== document;
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-leaving-window.js
function Ji(e) {
	var t = e.dragLeave, n = t.type, r = t.relatedTarget;
	return n === "dragleave" ? Ui() ? Gi({ dragLeave: t }) : r == null ? !0 : Hi() ? qi(r) : r instanceof HTMLIFrameElement : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/detect-broken-drag.js
function Yi(e) {
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
function Xi(e) {
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
var Zi = function(e) {
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
}), Qi = function() {
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
function $i(e) {
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
			}), Qi.schedule(function() {
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
			Qi.flush(), Zi.cancel(), a({
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
			Zi(function() {
				Qi.flush(), a({
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
			Qi.flush(), Zi.cancel(), a({
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
var ea = { isActive: !1 };
function ta() {
	return !ea.isActive;
}
function na(e) {
	return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function ra(e) {
	var t = e.current, n = e.next;
	if (t.length !== n.length) return !0;
	for (var r = 0; r < t.length; r++) if (t[r].element !== n[r].element) return !0;
	return !1;
}
function ia(e) {
	var t = e.event, n = e.dragType, r = e.getDropTargetsOver, i = e.dispatchEvent;
	if (!ta()) return;
	var a = oa({
		event: t,
		dragType: n,
		getDropTargetsOver: r
	});
	ea.isActive = !0;
	var o = { current: a };
	aa({
		event: t,
		current: a.dropTargets
	});
	var s = $i({
		source: n.payload,
		dispatchEvent: i,
		initial: a
	});
	function c(e) {
		var t = ra({
			current: o.current.dropTargets,
			next: e.dropTargets
		});
		o.current = e, t && s.dragUpdate({ current: o.current });
	}
	function l(e) {
		var t = Xi(e), i = r({
			target: _i(e.target) ? vi({
				x: t.clientX,
				y: t.clientY
			}) : e.target,
			input: t,
			source: n.payload,
			current: o.current.dropTargets
		});
		i.length && (e.preventDefault(), aa({
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
		ea.isActive = !1, f();
	}
	var f = (0, hi.bindAll)(window, [
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
				Ji({ dragLeave: e }) && (c({
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
					input: Xi(e)
				}, !o.current.dropTargets.length) {
					u();
					return;
				}
				e.preventDefault(), aa({
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
					input: Xi(e)
				}, u();
			}
		}
	].concat(Bi(Yi({ onDragEnd: u }))), { capture: !0 });
	s.start({ nativeSetDragImage: na(t) });
}
function aa(e) {
	var t = e.event, n = e.current[0]?.dropEffect;
	n != null && t.dataTransfer && (t.dataTransfer.dropEffect = n);
}
function oa(e) {
	var t = e.event, n = e.dragType, r = e.getDropTargetsOver, i = Xi(t);
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
var sa = {
	canStart: ta,
	start: ia
}, ca = /* @__PURE__ */ new Map();
function la(e) {
	var t = e.typeKey, n = e.mount, r = ca.get(t);
	if (r) return r.usageCount++, r;
	var i = {
		typeKey: t,
		unmount: n(),
		usageCount: 1
	};
	return ca.set(t, i), i;
}
function ua(e) {
	var t = la(e);
	return function() {
		t.usageCount--, !(t.usageCount > 0) && (t.unmount(), ca.delete(e.typeKey));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/combine.js
function da() {
	var e = [...arguments];
	return function() {
		e.forEach(function(e) {
			return e();
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/add-attribute.js
function fa(e, t) {
	var n = t.attribute, r = t.value;
	return e.setAttribute(n, r), function() {
		return e.removeAttribute(n);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-drop-target.js
function pa(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ma(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? pa(Object(n), !0).forEach(function(t) {
			Si(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ha(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = ga(e)) || t && e && typeof e.length == "number") {
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
function ga(e, t) {
	if (e) {
		if (typeof e == "string") return _a(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _a(e, t) : void 0;
	}
}
function _a(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function va(e) {
	return e.slice(0).reverse();
}
function ya(e) {
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
		return Vi(da(fa(e.element, {
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
			result: [].concat(Bi(l), [h])
		});
	}
	function l(e) {
		var t = e.eventName, n = e.payload, i = ha(n.location.current.dropTargets), a;
		try {
			for (i.s(); !(a = i.n()).done;) {
				var o, s = a.value, c = r.get(s.element), l = ma(ma({}, n), {}, { self: s });
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
			})), i = /* @__PURE__ */ new Set(), a = ha(t.location.previous.dropTargets), o;
			try {
				for (a.s(); !(o = a.n()).done;) {
					var s, c = o.value;
					i.add(c.element);
					var l = r.get(c.element), u = n.has(c.element), d = ma(ma({}, t), {}, { self: c });
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
			var p = ha(t.location.current.dropTargets), m;
			try {
				for (p.s(); !(m = p.n()).done;) {
					var h, g, _ = m.value;
					if (!i.has(_.element)) {
						var v = ma(ma({}, t), {}, { self: _ }), y = r.get(_.element);
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
		for (var s = va(a), l = va(o), u = [], d = 0; d < s.length; d++) {
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
			u.push(ma(ma({}, p), {}, { isActiveDueToStickiness: !0 }));
		}
		return va(u);
	}
	return {
		dropTargetForConsumers: s,
		getIsOver: f,
		dispatchEvent: d
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-monitor.js
function ba(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = xa(e)) || t && e && typeof e.length == "number") {
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
function xa(e, t) {
	if (e) {
		if (typeof e == "string") return Sa(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Sa(e, t) : void 0;
	}
}
function Sa(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Ca(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function wa(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ca(Object(n), !0).forEach(function(t) {
			Si(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ca(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ta() {
	var e = /* @__PURE__ */ new Set(), t = null;
	function n(e) {
		t && (!e.canMonitor || e.canMonitor(t.canMonitorArgs)) && t.active.add(e);
	}
	function r(r) {
		var i = wa({}, r);
		e.add(i), n(i);
		function a() {
			e.delete(i), t && t.active.delete(i);
		}
		return Vi(a);
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
			var o = ba(e), s;
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
function Ea(e) {
	var t = e.typeKey, n = e.mount, r = e.dispatchEventToSource, i = e.onPostDispatch, a = e.defaultDropEffect, o = Ta(), s = ya({
		typeKey: t,
		defaultDropEffect: a
	});
	function c(e) {
		r?.(e), s.dispatchEvent(e), o.dispatchEvent(e), i?.(e);
	}
	function l(e) {
		var t = e.event, n = e.dragType;
		sa.start({
			event: t,
			dragType: n,
			getDropTargetsOver: s.getIsOver,
			dispatchEvent: c
		});
	}
	function u() {
		function e() {
			return n({
				canStart: sa.canStart,
				start: l
			});
		}
		return ua({
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
var Da = Vi(function() {
	return navigator.userAgent.toLocaleLowerCase().includes("android");
}), Oa = "pdnd:android-fallback", ka = "text/plain", Aa = "application/vnd.pdnd", ja = /* @__PURE__ */ new WeakMap();
function Ma(e) {
	return ja.set(e.element, e), function() {
		ja.delete(e.element);
	};
}
var Na = Ii(), Pa = Ea({
	typeKey: "element",
	defaultDropEffect: "move",
	mount: function(e) {
		return da(Na.bindEvents(), (0, hi.bind)(document, {
			type: "dragstart",
			listener: function(t) {
				if (e.canStart(t) && !t.defaultPrevented) {
					if (!t.dataTransfer) {
						process.env.NODE_ENV !== "production" && console.warn("\n              It appears as though you have are not testing DragEvents correctly.\n\n              - If you are unit testing, ensure you have polyfilled DragEvent.\n              - If you are browser testing, ensure you are dispatching drag events correctly.\n\n              Please see our testing guides for more information:\n              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing\n            ".replace(/ {2}/g, ""));
						return;
					}
					var n = t.target;
					if (!(n instanceof HTMLElement)) return null;
					var r = ja.get(n);
					if (!r) return null;
					var i = Xi(t), a = {
						element: r.element,
						dragHandle: r.dragHandle ?? null,
						input: i
					};
					if (r.canDrag && !r.canDrag(a)) return t.preventDefault(), null;
					if (r.dragHandle) {
						var o = vi({
							x: i.clientX,
							y: i.clientY
						});
						if (!r.dragHandle.contains(o)) return t.preventDefault(), null;
					}
					var s = r.getInitialDataForExternal?.call(r, a) ?? null;
					if (s) for (var c = 0, l = Object.entries(s); c < l.length; c++) {
						var u = fi(l[c], 2), d = u[0], f = u[1];
						t.dataTransfer.setData(d, f ?? "");
					}
					Da() && !t.dataTransfer.types.includes("text/plain") && !t.dataTransfer.types.includes("text/uri-list") && t.dataTransfer.setData(ka, Oa), t.dataTransfer.setData(Aa, "");
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
		(t = ja.get(i.source.element)) == null || (n = t[r]) == null || n.call(t, i);
	},
	onPostDispatch: Na.getOnPostDispatch()
}), Fa = Pa.dropTarget, Ia = Pa.monitor;
function La(e) {
	if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
		element: e.element,
		dragHandle: e.dragHandle
	}), process.env.NODE_ENV !== "production") {
		var t = ja.get(e.element);
		t && console.warn("You have already registered a `draggable` on the same element", {
			existing: t,
			proposed: e
		});
	}
	return Vi(da(Pa.registerUsage(), Ma(e), fa(e.element, {
		attribute: "draggable",
		value: "true"
	})));
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop-hitbox@1.1.0/node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.js
function Ra(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function za(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ra(Object(n), !0).forEach(function(t) {
			Si(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ra(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Ba = {
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
}, Va = Symbol("closestEdge");
function Ha(e, t) {
	var n = t.element, r = t.input, i = t.allowedEdges, a = {
		x: r.clientX,
		y: r.clientY
	}, o = n.getBoundingClientRect(), s = i.map(function(e) {
		return {
			edge: e,
			value: Ba[e](o, a)
		};
	}).sort(function(e, t) {
		return e.value - t.value;
	})[0]?.edge ?? null;
	return za(za({}, e), {}, Si({}, Va, s));
}
function Ua(e) {
	return e[Va] ?? null;
}
//#endregion
//#region src/lib/dnd/atlaskitDriver.ts
function Wa(e) {
	let t = /* @__PURE__ */ new Set();
	return Ia({
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
			return r ? () => {} : La({
				element: t,
				getInitialData: () => ({
					...n,
					instanceId: e
				}),
				dragHandle: i ?? void 0
			});
		},
		registerDroppable(e, { id: t }) {
			return Fa({
				element: e,
				getData: ({ input: e, element: n }) => Ha({
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
var Ga = kn(null);
function Ka() {
	return Pn(Ga);
}
function qa({ driver: e, children: t }) {
	let n = q(e), r = K(() => ({ driver: n.current }), []);
	return /* @__PURE__ */ X(Ga.Provider, {
		value: r,
		children: t
	});
}
//#endregion
//#region src/lib/dnd/hooks.ts
function Ja(e) {
	let t = Ka(), { ref: n, payload: r, disabled: i, handleRef: a } = e, o = r.data, s = r.id + "|" + (o?.currentParentId ?? "null");
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
function Ya(e) {
	let t = Ka(), n = e?.ref, r = e?.id, i = e?.accepts;
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
function Xa(e) {
	let t = Ka();
	G(() => t ? t.driver.subscribe(e) : void 0, [t, e]);
}
//#endregion
//#region src/ui/table.tsx
var Za = Tn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("div", {
	className: "relative w-full",
	children: /* @__PURE__ */ X("table", {
		ref: n,
		className: I("w-full caption-bottom border-spacing-0 border-0 border-none text-base", e),
		...t
	})
}));
Za.displayName = "Table";
var Qa = Tn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("thead", {
	ref: n,
	className: I("relative min-h-10 [&_tr]:hover:bg-transparent", "before:absolute before:inset-x-0 before:top-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']", e),
	...t
}));
Qa.displayName = "TableHeader";
var $a = Tn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("tbody", {
	ref: n,
	className: I("border-0", e),
	...t
}));
$a.displayName = "TableBody";
var eo = Tn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("tfoot", {
	ref: n,
	className: I("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
	...t
}));
eo.displayName = "TableFooter";
var to = Tn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("tr", {
	ref: n,
	className: I("group relative transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] hover:bg-f1-background-hover", e),
	...t
}));
to.displayName = "TableRow";
var no = Tn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("th", {
	ref: n,
	className: I("relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6", "after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover", "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent", e),
	...t
}));
no.displayName = "TableHead";
var ro = Tn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("td", {
	ref: n,
	className: I("relative min-h-[48px] whitespace-nowrap px-3 pb-[9px] pt-2 align-top first:pl-6 last:pr-6", "[&:has([role=checkbox])]:px-2", e),
	...t
}));
ro.displayName = "TableCell";
var io = Tn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("caption", {
	ref: n,
	className: I("text-muted-foreground mt-4 text-sm", e),
	...t
}));
io.displayName = "TableCaption";
//#endregion
//#region src/experimental/OneTable/TableBody/index.tsx
function ao({ children: e }) {
	return /* @__PURE__ */ X($a, { children: e });
}
//#endregion
//#region src/experimental/OneTable/utils/sizes.tsx
var oo = {
	auto: void 0,
	fit: 1
}, so = (e) => typeof e == "number", co = (e) => so(e) ? e : oo[e], lo = kn(void 0);
function uo() {
	let e = Pn(lo);
	if (!e) throw Error("useTable must be used within a TableProvider");
	return e;
}
var fo = ({ depth: e, padding: t = 0 }) => `${e * 32 + t}px`, po = ({ depth: e, isDetailedVariant: t }) => fo({
	depth: e,
	padding: -4
}), mo = (e, t) => e && t > 0, ho = (e, t) => e && t, go = (e, t) => e && t, _o = (e, t) => e && t, vo = (e, t, n) => !t && _o(e, n), yo = (e, t) => e && t?.nestedVariant === "detailed", bo = ({ width: e, linkRef: t, firstCell: n, nestedRowProps: r, children: i, onClick: a }) => {
	let { collections: o } = y(), s = ho(n, !!r?.rowWithChildren), c = mo(n, r?.depth ?? 0), l = vo(n, !!r?.rowWithChildren, !!r?.tableWithChildren), u = yo(n, r), d = r?.onLoadMoreChildren, f = r?.onAddRow, p = r?.depth ?? 0, m = c ? fo({ depth: s ? p : p + 1 }) : void 0, h = d || f;
	return /* @__PURE__ */ X("div", {
		className: I(e !== "auto" && "overflow-hidden", "relative z-[1] h-full", s && "flex items-center gap-2"),
		style: { marginLeft: h ? po({
			depth: p + +!u,
			isDetailedVariant: u
		}) : m },
		onClick: () => {
			h || (t.current?.click(), a?.());
		},
		children: f ? /* @__PURE__ */ X("div", {
			className: I("pointer-events-auto flex items-center w-full h-full", u && "pl-3"),
			children: f.actions.length === 1 ? /* @__PURE__ */ X(Ne, {
				variant: "outline",
				size: "sm",
				icon: f.actions[0].icon ?? tt,
				label: f.actions[0].label,
				onClick: (e) => {
					e.stopPropagation(), f.actions[0].onClick?.();
				},
				loading: f.actions[0].loading,
				disabled: f.actions[0].disabled
			}) : f.actions.some((e) => e.description !== void 0) ? /* @__PURE__ */ X(L, {
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
			}) : /* @__PURE__ */ X(L, {
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
			className: I("pointer-events-auto cursor-pointer flex items-center w-full h-full border-0 border-r-[1px] border-solid border-f1-border-secondary"),
			children: /* @__PURE__ */ X(Ne, {
				variant: "ghost",
				size: "md",
				icon: vt,
				label: o.table.seeMoreChildren,
				onClick: (e) => {
					e.stopPropagation(), d?.();
				}
			})
		}) }) : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("div", {
			className: I("flex h-[var(--chevron-parent-size)] w-[var(--chevron-parent-size)] min-w-[var(--chevron-parent-size)] items-center justify-center", s && "pointer-events-auto cursor-pointer rounded-sm hover:bg-f1-foreground-disabled"),
			style: {
				"--chevron-parent-size": "24px",
				"--chevron-size": "18px",
				"--spacing-factor": "32px"
			},
			onClick: (e) => {
				s && (e.stopPropagation(), r?.onExpand?.());
			},
			children: s && (r?.expanded ? /* @__PURE__ */ X(Ut, {
				className: "pointer-events-none shrink-0",
				size: 18
			}) : /* @__PURE__ */ X(pn, {
				className: "pointer-events-none shrink-0",
				size: 18
			}))
		}), /* @__PURE__ */ X("div", {
			className: I(s && "min-w-0 w-full h-full", l && "pl-[var(--spacing-factor)]", "relative"),
			children: i
		})] })
	});
}, xo = (e, t, n) => {
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
}, So = ({ firstCell: e, nestedRowProps: t, fromVisualization: n }) => {
	let r = mo(e, t?.depth ?? 0), i = go(t?.expanded ?? !1, e), a = t === void 0 || t?.nestedVariant === "basic", o = t?.nestedVariant === "detailed", s = a || t?.rowWithChildren, c = o && (t?.onLoadMoreChildren || t?.onAddRow), l = r ? fo({
		depth: t?.depth ?? 0,
		padding: 0
	}) : void 0, u = t?.connectorHeight ?? 0;
	return !i && !r && !t?.rowWithChildren ? null : /* @__PURE__ */ X("div", {
		className: I("absolute inset-0 h-full", t?.parentHasChildren && i && "h-full overflow-visible before:absolute before:-left-[var(--line-left)] before:top-[var(--starting-y)] before:h-[var(--line-height)] before:w-[var(--line-width)] before:bg-f1-foreground-disabled before:content-['']", t?.parentHasChildren && r && s && !c && "after:absolute after:left-[var(--horizontal-left)] after:top-[var(--horizontal-offset)] after:h-[var(--horizontal-height)] after:w-[var(--connector-width)] after:rounded-bl-[var(--horizontal-height)] after:content-[''] after:shadow-[inset_1px_-1px_0_0_hsl(var(--neutral-30))]"),
		style: {
			marginLeft: l,
			...xo(u, t, n)
		}
	});
}, Co = "repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)", wo = "before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", To = {
	none: `bg-f1-background ${wo} before:bg-f1-background group-hover:before:bg-f1-background-hover`,
	striped: `bg-f1-background bg-[${Co}] [background-size:100%_100px] ${wo} before:bg-[${Co},_var(--f1-background)] before:[background-size:100%_100px,_100%_100%] group-hover:before:bg-[${Co},_var(--f1-background-hover)] group-hover:before:[background-size:100%_100px,_100%_100%]`,
	striked: `bg-f1-background ${wo} before:bg-f1-background group-hover:before:bg-f1-background-hover`
};
function Eo({ children: e, href: t, onClick: n, width: r = "auto", minWidth: i, firstCell: a = !1, sticky: o, colSpan: s, className: c, loading: l = !1, nestedRowProps: u, fromVisualization: d, referenceRowType: f = "none", highlighted: p = !1 }) {
	let { isScrolled: m, isScrolledRight: h } = uo(), { actions: g } = y(), _ = o?.left !== void 0, v = o?.right !== void 0, b = _ || v, x = o?.left, S = o?.right, T = co(r), E = i === void 0 ? T : co(i), D = q(null), O = u?.depth ?? 0, k = u?.nestedVariant === "detailed", A = _o(a, !!u?.tableWithChildren) && { marginLeft: `${(O + +!k) * 32}px` };
	return /* @__PURE__ */ Z(ro, {
		colSpan: s,
		className: I("h-full", a && "peer font-medium", b && m && To[f], b && "sticky z-10", v && To[f], p && "bg-[hsl(var(--neutral-2))] group-hover:bg-f1-background-hover", p && b && "before:bg-[hsl(var(--neutral-2))] group-hover:before:bg-f1-background-hover", t && "cursor-pointer", c),
		style: {
			width: T,
			maxWidth: T,
			minWidth: E,
			left: x,
			right: S
		},
		children: [
			/* @__PURE__ */ X(w, { children: (_ && m || v && h) && /* @__PURE__ */ X(C.div, {
				className: I("absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent", _ && "-right-4 bg-gradient-to-r", v && "-left-4 bg-gradient-to-l"),
				initial: { opacity: 0 },
				animate: { opacity: .1 },
				exit: { opacity: 0 }
			}, "cell-shadow-gradient") }),
			a && u?.tableWithChildren && /* @__PURE__ */ X(So, {
				firstCell: a,
				nestedRowProps: u,
				fromVisualization: d
			}),
			l && /* @__PURE__ */ X("div", {
				style: { ...A },
				className: I("flex h-full items-center", d === "editableTable" ? "min-h-[32px]" : "min-h-[24px]"),
				children: /* @__PURE__ */ X(Me, { className: "h-4 w-full" })
			}),
			!l && /* @__PURE__ */ Z(Y, { children: [
				/* @__PURE__ */ X("div", {
					className: I("[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1]", "[&:has([type=button])]:relative [&:has([type=button])]:z-[1]", "[&:has(a)]:relative [&:has(a)]:z-[1]", "pointer-events-none h-full items-start"),
					children: ho(a, !!u?.rowWithChildren) ? /* @__PURE__ */ X(bo, {
						linkRef: D,
						firstCell: a,
						nestedRowProps: u,
						children: e
					}) : /* @__PURE__ */ X("div", {
						className: I(r !== "auto" && "overflow-hidden", "relative z-[1] h-full"),
						style: { ...A },
						onClick: () => {
							D.current?.click(), n?.();
						},
						children: e
					})
				}),
				t && /* @__PURE__ */ X(Pe, {
					ref: D,
					href: t,
					className: "pointer-events-auto absolute inset-0 !z-0 block",
					tabIndex: a ? void 0 : -1,
					children: /* @__PURE__ */ X("span", {
						className: "sr-only",
						children: g.view
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
						children: g.view
					})
				})
			] })
		]
	});
}
//#endregion
//#region src/lib/InfoHint/InfoHint.tsx
function Do({ info: e, icon: t, label: n }) {
	let [r, i] = J(!1), { forms: a } = y();
	return /* @__PURE__ */ Z(Ft, {
		open: r,
		onOpenChange: i,
		openDelay: 300,
		closeDelay: 100,
		children: [/* @__PURE__ */ X(zt, {
			asChild: !0,
			children: /* @__PURE__ */ X("button", {
				type: "button",
				className: I("flex h-5 w-5 items-center justify-center rounded-xs text-f1-foreground-secondary", F()),
				"aria-label": e.label ?? n ?? a.moreInformation,
				children: /* @__PURE__ */ X(u, {
					icon: t,
					size: "sm"
				})
			})
		}), /* @__PURE__ */ X(Lt, {
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
						className: I("mt-1 w-fit rounded-xs font-medium text-f1-foreground-inverse underline underline-offset-2 transition-colors hover:text-f1-foreground-inverse-secondary", F()),
						children: e.link.label
					})
				]
			})
		})]
	});
}
function Oo({ info: e, icon: t = Et, label: n }) {
	return typeof e == "string" ? /* @__PURE__ */ X(k, {
		label: e,
		children: /* @__PURE__ */ X("div", {
			className: I("flex h-5 w-5 items-center justify-center rounded-xs", F()),
			tabIndex: 0,
			children: /* @__PURE__ */ X(u, {
				icon: t,
				size: "sm"
			})
		})
	}) : /* @__PURE__ */ X(Do, {
		info: e,
		icon: t,
		label: n
	});
}
//#endregion
//#region src/experimental/OneTable/TableHead/index.tsx
function ko({ children: e, width: t = "auto", minWidth: n, sortState: r = "none", onSortClick: i, onClick: a, info: s, infoIcon: c = Et, sticky: l, hidden: d = !1, highlighted: f = !1, align: p = "left", className: m, colSpan: h }) {
	let { isScrolled: g, isScrolledRight: _ } = uo(), v = l?.left !== void 0, y = l?.right !== void 0, b = v || y, x = l?.left ?? 0, S = l?.right ?? 0, T = i || s, E = i || a ? () => {
		i?.(), a?.();
	} : void 0, D = /* @__PURE__ */ X(Y, { children: /* @__PURE__ */ Z("div", {
		className: I("flex items-center whitespace-nowrap", T && "gap-1", p === "right" && "flex-row-reverse"),
		children: [typeof e == "string" ? /* @__PURE__ */ X(o, {
			className: I(t !== "auto" && "overflow-hidden"),
			children: e
		}) : /* @__PURE__ */ X("div", {
			className: I("truncate", t !== "auto" && "overflow-hidden"),
			children: e
		}), T && /* @__PURE__ */ Z("div", {
			className: "flex items-center",
			children: [s && /* @__PURE__ */ X("div", {
				className: "flex h-6 w-6 items-center justify-center text-f1-foreground-secondary",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ X(Oo, {
					info: s,
					icon: c,
					label: typeof e == "string" ? e : void 0
				})
			}), i && /* @__PURE__ */ X(C.button, {
				className: I("relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all focus-within:opacity-100 hover:bg-f1-background-hover group-hover:opacity-100", F()),
				"aria-label": "Sort",
				whileTap: { scale: .8 },
				transition: { duration: .1 },
				children: /* @__PURE__ */ Z(w, { children: [/* @__PURE__ */ X(C.div, {
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
					children: /* @__PURE__ */ X(u, {
						icon: vt,
						size: "xs"
					})
				}, "sort-arrow"), r === "none" && /* @__PURE__ */ X(C.div, {
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
					children: /* @__PURE__ */ X(u, {
						icon: vt,
						size: "xs"
					})
				}, "sort-arrow-secondary")] })
			})]
		})]
	}) }), O = co(t), k = n === void 0 ? O : co(n);
	return /* @__PURE__ */ Z(no, {
		className: I("group h-11", "bg-f1-background", b && (g || _) && "relative bg-f1-background z-10 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']", b && "sticky", f && "bg-[linear-gradient(hsl(var(--neutral-2)),hsl(var(--neutral-2)))]", d && "after:hidden", E && "cursor-pointer", m),
		"data-highlighted": f ? "true" : void 0,
		onClick: E,
		tabIndex: l ? 0 : void 0,
		colSpan: h,
		style: {
			width: O,
			maxWidth: O,
			minWidth: k,
			left: x,
			right: S
		},
		role: d ? "presentation" : void 0,
		"aria-sort": i ? r === "asc" ? "ascending" : r === "desc" ? "descending" : "none" : void 0,
		children: [
			/* @__PURE__ */ X("div", { className: "absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary" }),
			/* @__PURE__ */ X(w, { children: (v && g || y && _) && /* @__PURE__ */ X(C.div, {
				className: I("absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent", v && "-right-4 bg-gradient-to-r", y && "-left-4 bg-gradient-to-l"),
				initial: { opacity: 0 },
				animate: { opacity: .1 },
				exit: { opacity: 0 }
			}, "shadow-gradient") }),
			!d && D
		]
	});
}
//#endregion
//#region src/experimental/OneTable/TableHeader/index.tsx
function Ao({ children: e, sticky: t = !1 }) {
	return /* @__PURE__ */ X(Qa, {
		className: I(t && "sticky top-0 z-30"),
		children: e
	});
}
var jo = jn(({ children: e, selected: t, className: n, sticky: r, style: i }, a) => /* @__PURE__ */ X(to, {
	ref: a,
	className: I(t && "bg-f1-background-selected hover:bg-f1-background-selected", n, "relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-['']", "[&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring", "[&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring", r && "hover:!bg-f1-background-hover sticky z-20 bg-f1-background"),
	style: {
		...r ? { top: 40 } : void 0,
		...i
	},
	children: e
}));
jo.displayName = "TableRow";
//#endregion
//#region src/experimental/OneTable/Table/index.tsx
function Mo({ children: e, loading: t = !1 }) {
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
	}, []), /* @__PURE__ */ X(lo.Provider, {
		value: {
			isScrolled: n,
			setIsScrolled: r,
			isScrolledRight: i,
			setIsScrolledRight: a
		},
		children: /* @__PURE__ */ Z("div", {
			ref: o,
			className: "relative h-full w-full overflow-auto",
			children: [/* @__PURE__ */ X(Za, {
				className: I(t && "select-none opacity-50 transition-opacity"),
				"aria-live": t ? "polite" : void 0,
				"aria-busy": t ? "true" : void 0,
				children: e
			}), /* @__PURE__ */ X(w, { children: t && /* @__PURE__ */ X(C.div, {
				className: "absolute inset-0 flex cursor-progress items-center justify-center",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				children: /* @__PURE__ */ X(Xt, {})
			}) })]
		})
	});
}
function No({ columns: e = 5 }) {
	return /* @__PURE__ */ X(lo.Provider, {
		value: {
			isScrolled: !1,
			setIsScrolled: () => {},
			isScrolledRight: !1,
			setIsScrolledRight: () => {}
		},
		children: /* @__PURE__ */ Z(Za, {
			className: "cursor-progress",
			role: "presentation",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ X(Ao, { children: /* @__PURE__ */ X(jo, { children: Array.from({ length: e }).map((e, t) => /* @__PURE__ */ X(ko, { children: /* @__PURE__ */ X(Me, { className: "h-4 w-[80px]" }) }, `skeleton-header-${t}`)) }) }), /* @__PURE__ */ X(ao, { children: Array.from({ length: 5 }).map((t, n) => /* @__PURE__ */ X(jo, { children: Array.from({ length: e }).map((e, t) => /* @__PURE__ */ X(Eo, { children: /* @__PURE__ */ X(Me, { className: "h-4 w-[80px]" }) }, `skeleton-cell-${n}-${t}`)) }, `skeleton-row-${n}`)) })]
		})
	});
}
var Po = mn(Mo, No);
//#endregion
//#region src/experimental/OneTable/TableFooter/index.tsx
function Fo({ children: e }) {
	return /* @__PURE__ */ X(eo, {
		className: I("bg-f1-background-default sticky bottom-0 z-30 shadow-[0_-1px_0_0_var(--f1-border-secondary)]"),
		children: e
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/ErrorTooltip.tsx
function Io({ message: e, children: t }) {
	let [n, r] = J(!1), i = W(() => {
		e && r(!0);
	}, [e]), a = W(() => r(!1), []);
	return G(() => {
		e || r(!1);
	}, [e]), /* @__PURE__ */ X("div", {
		className: "relative h-full w-full",
		children: /* @__PURE__ */ X(Oe, {
			delayDuration: 100,
			disableHoverableContent: !0,
			children: /* @__PURE__ */ Z(ke, {
				open: n && !!e,
				onOpenChange: r,
				children: [/* @__PURE__ */ X(Te, {
					asChild: !0,
					className: "pointer-events-auto h-full w-full",
					children: /* @__PURE__ */ X("div", {
						className: "flex h-full w-full items-center",
						onFocusCapture: i,
						onBlurCapture: a,
						children: t
					})
				}), e && /* @__PURE__ */ Z(Ee, {
					side: "top",
					className: "border-black/10 flex items-center gap-1 bg-[#fff] shadow-md",
					children: [/* @__PURE__ */ X(u, {
						icon: ft,
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
var Lo = {
	text: "cursor-text",
	pointer: "cursor-pointer",
	default: "cursor-default",
	"not-allowed": "cursor-not-allowed"
};
function Ro({ disabled: e = !1, readonly: t = !1, showRightBorder: n = !0, cursor: r = "text", isActive: i = !1, borderOnHover: a = !0, error: o, hint: s, hintPosition: c = "left", children: l }) {
	let d = s && !o && /* @__PURE__ */ X(Oe, {
		delayDuration: 100,
		children: /* @__PURE__ */ Z(ke, { children: [/* @__PURE__ */ X(Te, {
			asChild: !0,
			children: /* @__PURE__ */ X("button", {
				type: "button",
				"aria-label": s.message,
				className: I("pointer-events-auto flex shrink-0 cursor-pointer items-center rounded px-1", F()),
				children: /* @__PURE__ */ X(u, {
					icon: s.icon,
					size: "md",
					color: s.iconColor
				})
			})
		}), /* @__PURE__ */ X(Ee, {
			side: "top",
			className: "border-black/10 max-w-64 cursor-default text-f1-foreground shadow-md",
			children: /* @__PURE__ */ X("span", {
				className: "text-sm font-medium text-f1-foreground",
				children: s.message
			})
		})] })
	});
	return /* @__PURE__ */ X("div", {
		className: I("flex w-full h-full min-w-0 min-h-12 border-solid", "border-0 border-r-[1px] border-f1-border-secondary", !n && "border-r-0", Lo[r], o ? "relative z-[1] border-r-0 bg-f1-background-critical/10 shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]" : i ? "relative z-[1] border-r-0 bg-f1-background shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]" : a ? "shadow-none [&:not(:focus-within)]:hover:shadow-[inset_0_0_0_1px_hsl(var(--neutral-30))] focus-within:relative focus-within:z-[1] focus-within:border-r-0 focus-within:bg-f1-background focus-within:shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]" : "shadow-none", t && "bg-f1-background-secondary", e && "bg-f1-background-disabled"),
		children: /* @__PURE__ */ Z(Io, {
			message: o,
			children: [
				c === "left" && d,
				/* @__PURE__ */ X("div", {
					className: "min-w-0 flex-1",
					children: l
				}),
				c === "right" && d
			]
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/DateCell.tsx
var zo = "yyyy-MM-dd";
function Bo({ editableColumn: e, value: t, inputPlaceholder: n, error: r, loading: i, isLastColumn: a, onChange: o, hint: s, item: c }) {
	let l = typeof e.dateConfig == "function" ? e.dateConfig(c) : e.dateConfig, u = K(() => {
		if (!t) return;
		let e = ar(t);
		if (gt(e)) return {
			granularity: "day",
			value: {
				from: e,
				to: e
			}
		};
	}, [t]);
	return /* @__PURE__ */ X(Ro, {
		showRightBorder: !a,
		error: r,
		hint: s,
		cursor: "pointer",
		children: /* @__PURE__ */ X("div", {
			className: I("flex w-full min-w-0 items-center", e.align === "right" && "justify-end"),
			children: /* @__PURE__ */ X(yn, {
				className: I("[&_input]:!py-0", "[&_[data-slot='icon']]:!inset-y-0", "[&_[data-slot='placeholder']]:!flex", "[&_[data-slot='placeholder']]:!items-center", "[&_[data-slot='placeholder']]:!py-0", "[&_[data-slot='placeholder']]:!right-0", "[&_[data-slot='placeholder']]:!truncate"),
				placeholder: n ?? e.inputPlaceholder,
				label: e.label,
				hideLabel: !0,
				transparent: !0,
				displayFormat: "default",
				value: u,
				onChange: (e) => {
					let n = e?.value?.from, r = n ? mt(n, zo) : "";
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
var Vo = null;
function Ho(e, t) {
	Vo ||= document.createElement("canvas");
	let n = Vo.getContext("2d");
	return n ? (n.font = t, Math.ceil(n.measureText(e).width)) : 0;
}
function Uo(e, t = 26, n = 48) {
	let [r, i] = J(null);
	return {
		ref: W((e) => {
			if (e) {
				let t = e.querySelector("input");
				t && i(getComputedStyle(t).font);
			}
		}, []),
		width: r ? Math.max(Ho(e || "\xA0", r) + t, n) : void 0
	};
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/hooks/useNumberCellLayout.ts
function Wo(e, t) {
	if (e?.units) return typeof e.units == "function" ? e.units(t) : e.units;
}
function Go(e, t, n) {
	let { locale: r } = pt(), i = e?.locale ?? r, a = Wo(e, n), o = a ? e?.unitsPosition === "before" : !1, s = e?.grouping ?? !0, c = K(() => new Intl.NumberFormat(i, {
		maximumFractionDigits: e?.maxDecimals,
		useGrouping: s
	}), [
		i,
		e?.maxDecimals,
		s
	]), l = t == null ? "" : c.format(t), { ref: u, width: d } = Uo(a ? o ? `${a} ${l}` : `${l} ${a}` : l);
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
function Ko({ editableColumn: e, value: t, inputPlaceholder: n, error: r, loading: i, onChange: a, item: o, hint: s }) {
	let c = e.numberConfig, l = typeof t == "string" ? t.trim() : t, u = l !== "" && l != null ? Number(l) : NaN, d = isFinite(u) ? u : null, { ref: f, width: p, locale: m, units: h, unitsBefore: g, grouping: _ } = Go(c, d, o), v = (e) => {
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
	return /* @__PURE__ */ X(Ro, {
		error: r,
		hint: s,
		children: /* @__PURE__ */ X("div", {
			ref: f,
			onClick: b,
			className: I("flex h-full w-full cursor-text items-center", e.align === "right" && "justify-end"),
			children: /* @__PURE__ */ Z("div", {
				className: I("flex h-full max-w-full items-center gap-1", g && "pl-3 [&_input]:pl-1", !g && h && "pr-3 [&_input]:pr-1"),
				style: { width: p },
				children: [
					g && y,
					/* @__PURE__ */ X(Sn, {
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
var qo = (e, t = "USD") => {
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
function Jo(e) {
	let { locale: t } = pt(), n = e.editableColumn.numberConfig, r = n?.locale ?? t, i = Wo(n, e.item), a = K(() => i ? qo(r, i) : void 0, [r, i]), o = K(() => i ? n?.unitsPosition ? n.unitsPosition === "before" : a?.before ?? !1 : !1, [
		i,
		n?.unitsPosition,
		a
	]);
	return /* @__PURE__ */ X(Ko, {
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
var Yo = {
	default: "-",
	list: void 0
}, Xo = (e, t, n, r, i) => {
	let a = t.render(e), o = n in Yo ? Yo[n] : Yo.default;
	return Pt(a, {
		visualization: n,
		i18n: r,
		tableAlign: i?.tableAlign
	}, o);
}, Zo = /* @__PURE__ */ new Set();
function Qo(e, t) {
	if (t === void 0) return [];
	let n = e[t];
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function $o({ editableColumn: e, error: t, loading: n, onChange: r, item: i, hint: a }) {
	let o = y(), [s, c] = J(!1), l = e.selectConfig;
	if (!l) return Zo.has(e.label) || (Zo.add(e.label), console.warn(`MultiSelectCell: column "${e.label}" has editType "multiselect" but no selectConfig`)), /* @__PURE__ */ X(Ro, { children: Xo(i, e, "editableTable", o) });
	let u = Qo(i, e.id), d = {
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
	return /* @__PURE__ */ X(Ro, {
		error: t,
		isActive: s,
		hint: a,
		cursor: "pointer",
		children: /* @__PURE__ */ X("div", {
			className: I("flex w-full min-w-0 h-full", "items-center", "[&_[data-testid=input-field-wrapper]]:border-0", "[&_[data-testid=input-field-wrapper]]:bg-transparent", "[&_[data-testid=input-field-wrapper]]:shadow-none", "[&_[data-testid=input-field-wrapper]]:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-offset-0", "[&_[data-testid=input-field-wrapper]]:h-full", "[&_[data-testid=input-field-wrapper]_.absolute]:top-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:-translate-y-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:bottom-auto", "[&>div]:h-full", "[&>div]:w-full", "[&>div>button]:h-full", e.align === "right" && "justify-end"),
			children: "source" in l && l.source ? /* @__PURE__ */ X(lt, {
				...d,
				...f,
				source: l.source,
				mapOptions: l.mapOptions
			}) : /* @__PURE__ */ X(lt, {
				...d,
				...f,
				options: typeof l.options == "function" ? l.options(i) : l.options
			})
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/SelectCell.tsx
var es = /* @__PURE__ */ new Set();
function ts({ editableColumn: e, value: t, error: n, loading: r, onChange: i, item: a, hint: o }) {
	let s = y(), [c, l] = J(!1), u = e.selectConfig;
	if (!u) return es.has(e.label) || (es.add(e.label), console.warn(`SelectCell: column "${e.label}" has editType "select" but no selectConfig`)), /* @__PURE__ */ X(Ro, { children: Xo(a, e, "editableTable", s) });
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
	return /* @__PURE__ */ X(Ro, {
		error: n,
		isActive: c,
		hint: o,
		cursor: "pointer",
		children: /* @__PURE__ */ X("div", {
			className: I("flex w-full min-w-0 h-full", "items-center", "[&_[data-testid=input-field-wrapper]]:border-0", "[&_[data-testid=input-field-wrapper]]:bg-transparent", "[&_[data-testid=input-field-wrapper]]:shadow-none", "[&_[data-testid=input-field-wrapper]]:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-offset-0", "[&_[data-testid=input-field-wrapper]]:h-full", "[&_[data-testid=input-field-wrapper]_.absolute]:top-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:-translate-y-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:bottom-auto", "[&>div]:h-full", "[&>div]:w-full", "[&>div>button]:h-full", e.align === "right" && "justify-end"),
			children: "source" in u && u.source ? /* @__PURE__ */ X(lt, {
				...d,
				...f,
				source: u.source,
				mapOptions: u.mapOptions
			}) : /* @__PURE__ */ X(lt, {
				...d,
				...f,
				options: typeof u.options == "function" ? u.options(a) : u.options
			})
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/textIcon.ts
function ns(e) {
	if (e) return e.icon ? e.icon : gn(e.inputType);
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/ReadOnlyCellContent.tsx
function rs({ editableColumn: e, item: t, iconColor: n = "default", className: r, showFieldAffordances: i = !0 }) {
	let a = y(), o = kt(), s = i ? e.dateConfig ? gn("date") : ns(e.textConfig) : void 0, c = i && !e.disabledConfig?.hideSelectChevron && !!e.selectConfig, l = e.align === "right", d = e.dateConfig ? e.id === void 0 ? void 0 : t[e.id] : void 0, f = typeof d == "string" && d && gt(ar(d)) ? mt(ar(d), "dd MMM yyyy", { locale: o }) : void 0, p = e.id === void 0 ? void 0 : t[e.id], m = Array.isArray(p) ? (() => {
		let n = e.selectConfig, r = n && typeof n.options == "function" ? n.options(t) : n?.options, i = new Map((Array.isArray(r) ? r : []).filter((e) => "value" in e).map((e) => [e.value, e.label]));
		return p.map((e) => i.get(e) ?? String(e)).join(", ");
	})() : void 0, h = i ? Wo(e.numberConfig, t) : void 0, g = e.numberConfig?.unitsPosition === "before", _ = h ? /* @__PURE__ */ X("span", {
		className: "shrink-0 select-none pt-px text-sm",
		children: h
	}) : null;
	return /* @__PURE__ */ Z("div", {
		className: I("flex h-full w-full min-w-0 items-center gap-1.5", s ? "pl-2" : "pl-3", c ? "justify-between pr-1" : I("pr-3", l && "justify-end"), r),
		children: [/* @__PURE__ */ Z("span", {
			className: "flex min-w-0 items-center gap-1.5",
			children: [
				s && /* @__PURE__ */ X("span", {
					className: "flex h-5 w-5 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ X(u, {
						icon: s,
						color: n
					})
				}),
				g && _,
				/* @__PURE__ */ X("span", {
					className: "min-w-0 truncate",
					children: f ?? m ?? Xo(t, e, "editableTable", a)
				}),
				!g && _
			]
		}), c && /* @__PURE__ */ X("span", {
			className: "flex shrink-0 items-center",
			children: /* @__PURE__ */ X(We, {
				open: !1,
				size: "sm"
			})
		})]
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/status/DisabledCell.tsx
function is({ editableColumn: e, item: t, hint: n }) {
	return /* @__PURE__ */ X(Ro, {
		disabled: !0,
		borderOnHover: !1,
		hint: n,
		hintPosition: n?.hintPosition ?? "right",
		cursor: "not-allowed",
		children: /* @__PURE__ */ X(rs, {
			editableColumn: e,
			item: t,
			iconColor: "secondary",
			className: "min-h-12 [&_*]:text-f1-foreground-secondary"
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/status/NonEditableCell.tsx
function as({ editableColumn: e, item: t, isLastColumn: n, hint: r }) {
	return /* @__PURE__ */ X(Ro, {
		showRightBorder: !n,
		borderOnHover: !1,
		hint: r,
		hintPosition: r?.hintPosition ?? "right",
		cursor: "default",
		children: /* @__PURE__ */ X(rs, {
			editableColumn: e,
			item: t,
			showFieldAffordances: !1
		})
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/TextCell.tsx
function os({ editableColumn: e, value: t, inputPlaceholder: n, error: r, loading: i, onChange: a, hint: o }) {
	let s = e.textConfig, c = s?.inputType ?? "text", l = ns(s);
	return /* @__PURE__ */ X(Ro, {
		error: r,
		hint: o,
		children: /* @__PURE__ */ X("div", {
			className: I("flex w-full min-w-0", "cursor-text items-center", e.align === "right" && "[&_input]:text-right"),
			children: /* @__PURE__ */ X(Cn, {
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
var ss = {
	text: os,
	number: Ko,
	money: Jo,
	date: Bo,
	select: ts,
	multiselect: $o,
	"display-only": as,
	disabled: is
}, cs = /* @__PURE__ */ new Set([
	"text",
	"number",
	"money"
]), ls = kn(null);
function us({ item: e, onCellChange: t, children: n }) {
	let [r, i] = J(e), [a, o] = J({}), [s, c] = J({}), { t: l } = y(), u = q(r);
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
	}, g = q(h);
	g.current = h, G(() => () => g.current(), []);
	let _ = (e, t) => {
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
			timer: setTimeout(() => g.current(), 250)
		};
	};
	return /* @__PURE__ */ X(ls.Provider, {
		value: {
			localItem: r,
			cellErrors: a,
			cellLoading: s,
			handleCellChange: (e, t, n) => _({ [e]: t }, n),
			batchCellChanges: (e, t) => _(e, t)
		},
		children: n
	});
}
function ds() {
	return Pn(ls);
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/EditableCellRenderer.tsx
function fs(e, t) {
	if (t.id !== void 0 && t.id in e) {
		let n = e[t.id];
		return n == null ? "" : String(n);
	}
	let n = t.render(e);
	return typeof n == "string" ? n : typeof n == "number" ? String(n) : "";
}
function ps({ column: e, children: t, isLastColumn: n, externalError: r }) {
	let i = ds();
	if (!i) return /* @__PURE__ */ X(Y, { children: t });
	let { localItem: a, cellErrors: o, cellLoading: s, handleCellChange: c, batchCellChanges: l } = i, u = e, d = u.editType?.(a), f = u.id !== void 0, p = d !== void 0 && cs.has(d), m = (e, t) => {
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
		let e = ss[d], t = fs(a, u);
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
	return /* @__PURE__ */ X(as, {
		editableColumn: u,
		item: a,
		value: fs(a, u),
		isLastColumn: n,
		onChange: m
	});
}
//#endregion
//#region src/sds/UpsellingKit/UpsellRequestResponseDialog/index.tsx
var ms = ({ text: e, isCompleted: t }) => /* @__PURE__ */ Z("div", {
	className: "flex flex-row items-center gap-2",
	children: [/* @__PURE__ */ X(u, {
		className: t ? "text-f1-icon-positive" : "text-f1-icon-secondary",
		icon: t ? qt : ie,
		size: "md"
	}), /* @__PURE__ */ X("span", {
		className: t ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
		children: e
	})]
}), hs = ({ title: e, items: t }) => /* @__PURE__ */ Z("div", {
	className: "px-4 pb-2",
	children: [/* @__PURE__ */ X("div", {
		className: "mb-2 text-sm text-f1-foreground-secondary",
		children: e
	}), /* @__PURE__ */ X("div", {
		className: "flex flex-col gap-2",
		children: t.map((e) => /* @__PURE__ */ X(ms, {
			text: e.text,
			isCompleted: e.isCompleted ?? !1
		}, e.text))
	})]
}), gs = ({ onClose: e, success: t, successButtonOnClick: n, successButtonLabel: r, closeLabel: i }) => {
	let a = t && r && n, o = (t = !1) => /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(Ne, {
		variant: "outline",
		label: i,
		onClick: e,
		size: t ? "lg" : void 0
	}), a && /* @__PURE__ */ X(Ne, {
		variant: "promote",
		label: r,
		onClick: () => {
			n(), e?.();
		},
		size: t ? "lg" : void 0
	})] });
	return /* @__PURE__ */ Z(ri, {
		className: "px-4 pb-4 pt-2 [&_div]:w-full",
		children: [/* @__PURE__ */ X("div", {
			className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",
			children: o()
		}), /* @__PURE__ */ X("div", {
			className: "flex flex-col-reverse gap-2 sm:hidden",
			children: o(!0)
		})]
	});
}, _s = jn(({ open: e, onClose: t, success: n = !0, errorMessage: r, successMessage: i, nextSteps: a, closeLabel: o, portalContainer: s }, c) => {
	let [l, u] = J(!1), d = W(() => {
		u(!0), setTimeout(() => {
			t?.(), u(!1);
		}, 200);
	}, [t]);
	return /* @__PURE__ */ X(V, {
		open: e && !l,
		onOpenChange: (e) => !e && d?.(),
		children: /* @__PURE__ */ Z(R, {
			ref: c,
			wrapperClassName: "items-end sm:items-center",
			className: "mb-3 max-w-[400px] sm:mb-0",
			container: s,
			children: [
				/* @__PURE__ */ Z(ii, {
					className: `flex flex-col items-start gap-4 px-4 ${n ? "pt-5" : "py-5"}`,
					children: [/* @__PURE__ */ X(an, {
						type: n ? "positive" : "critical",
						size: "lg"
					}), /* @__PURE__ */ Z("div", {
						className: "flex flex-col gap-0.5",
						children: [/* @__PURE__ */ X(z, {
							className: "text-xl font-semibold sm:text-lg",
							children: n ? i?.title : r?.title
						}), /* @__PURE__ */ X(ni, {
							className: "text-lg sm:text-base",
							children: n ? i?.description : r?.description
						})]
					})]
				}),
				n && a && a.items?.length > 0 ? /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(ir, {}), /* @__PURE__ */ X(hs, {
					title: a.title,
					items: a.items
				})] }) : null,
				/* @__PURE__ */ X(gs, {
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
_s.displayName = "UpsellRequestResponseDialog";
var vs = i(_s);
//#endregion
//#region src/sds/UpsellingKit/UpsellingButton/index.tsx
function ys({ label: e, showIcon: t = !0, onRequest: n, showConfirmation: r = !0, loading: i, errorMessage: a, successMessage: o, loadingState: s, nextSteps: c, closeLabel: l, variant: u = "promote", onModalStateChange: d, portalContainer: f, ...p }) {
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
	return /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(Ne, {
		variant: u,
		label: x,
		icon: t ? te : void 0,
		onClick: v,
		loading: b,
		...p
	}), r && m && /* @__PURE__ */ X(vs, {
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
var bs = i(ys);
//#endregion
//#region src/components/OneEmptyState/OneEmptyState.tsx
function xs({ title: e, description: t, variant: n = "default", emoji: r, actions: i, ...a }) {
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-col items-center justify-center gap-5 p-8",
		...a,
		children: [
			n === "default" && /* @__PURE__ */ X(un, {
				emoji: r,
				size: "lg"
			}),
			n !== "default" && /* @__PURE__ */ X(an, {
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
				children: i.map((e) => e.type === "upsell" ? /* @__PURE__ */ X(bs, {
					label: e.label,
					onRequest: () => Promise.resolve(e.onClick()),
					errorMessage: e.errorMessage,
					successMessage: e.successMessage,
					loadingState: e.loadingState,
					nextSteps: e.nextSteps,
					closeLabel: e.closeLabel
				}, e.label) : /* @__PURE__ */ X(Ne, {
					label: e.label,
					variant: e.variant,
					onClick: e.onClick,
					icon: e.icon
				}, e.label))
			})
		]
	});
}
var Ss = i(xs), Cs = ({ value: e, delay: t }) => {
	let [n, r] = J(!1);
	return G(() => {
		let n;
		return e ? n = setTimeout(() => {
			r(e);
		}, t) : r(!1), () => {
			n && clearTimeout(n);
		};
	}, [e, t]), n;
}, ws = (e) => {
	if (!e) return [];
	let t = e();
	return (Array.isArray(t) ? t : [t]).filter((e) => e !== void 0);
}, Ts = (e) => "items" in e, Es = (e) => "label" in e && !("items" in e), Ds = (e) => e.every(Ts) ? e : e.every(Es) ? [{ items: e }] : e.map((e) => ({ items: e })), Os = (e) => e ? typeof e == "function" ? Ds(e() || []) : "actions" in e ? Ds(e.actions() || []) : [] : [], ks = (e) => e.map((e) => ({
	...e,
	items: e.items.filter((e) => e.enabled === void 0 || e.enabled)
})), As = (e) => e?.(), js = ({ message: e }) => /* @__PURE__ */ Z("div", {
	className: "flex w-full flex-row items-center gap-2 rounded-md bg-f1-background-warning p-2",
	children: [/* @__PURE__ */ X(an, {
		type: "warning",
		size: "sm"
	}), /* @__PURE__ */ X("p", {
		className: "flex-1 font-medium text-f1-foreground-warning",
		children: e
	})]
});
function Ms(e) {
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
var Ns = jn(function({ isOpen: e, primaryActions: t, secondaryActions: n, selectedNumber: r, onUnselect: i, warningMessage: a, allPagesSelection: s = !1, isAllItemsSelected: c = !1, totalItems: l, status: u }, d) {
	let { t: f, ...p } = y(), m = s && c && l !== void 0, h = u === "loading" || u === "success", g = q(r ?? 0);
	G(() => {
		r && (g.current = r);
	}, [r]);
	let _ = h && !r ? g.current : r, v = _ === 1 ? p.status.selected.singular : p.status.selected.plural, b = u === "loading" ? "idle" : u, x = K(() => a || !t ? [] : u === "loading" ? Ms(t) : t, [
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
	]), C = K(() => !a && !_ ? null : /* @__PURE__ */ Z("div", {
		className: "flex w-full flex-col gap-2 sm:flex-row sm:items-center",
		children: [a && /* @__PURE__ */ X(js, { message: a }), !!_ && /* @__PURE__ */ Z("div", {
			className: "dark flex h-8 w-full items-center justify-between gap-3 px-2 sm:h-auto sm:w-fit sm:justify-start sm:pl-2 sm:pr-0",
			children: [m ? /* @__PURE__ */ X("span", {
				className: "font-medium tabular-nums text-f1-foreground",
				children: f("status.selected.allItemsSelected", { total: l ?? 0 })
			}) : /* @__PURE__ */ Z("span", {
				className: "flex items-center gap-1 font-medium tabular-nums",
				children: [/* @__PURE__ */ X($e, {
					value: _,
					className: "text-f1-foreground",
					spinTiming: {
						duration: 200,
						easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
					}
				}), /* @__PURE__ */ X(o, {
					className: "text-f1-foreground",
					children: v
				})]
			}), /* @__PURE__ */ X(Ne, {
				variant: "outline",
				label: p.actions.unselect,
				onClick: i,
				disabled: h,
				size: "sm"
			})]
		})]
	}), [
		a,
		_,
		m,
		l,
		v,
		i,
		h,
		p.actions.unselect,
		f
	]);
	return /* @__PURE__ */ X(Qr, {
		ref: d,
		isOpen: e,
		variant: "dark",
		status: b,
		leftContent: C,
		primaryActions: x,
		secondaryActions: S
	});
});
Ns.displayName = "OneDataCollectionActionBar";
//#endregion
//#region src/patterns/OneDataCollection/components/CollectionActions/CollectionActions.tsx
var Ps = ({ primaryActions: e, primaryActionsLabel: t, secondaryActions: n, otherActions: r, upsellAction: i }) => {
	let a = (Array.isArray(e) ? e : [e]).filter((e) => e !== void 0), o = n || [], s = K(() => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({ type: "separator" }), e.push(...t), e), []), [r]), [c, l] = J(!1), u = a.some((e) => e.description !== void 0);
	return a.length === 0 && o.length === 0 && s.length === 0 && !i ? null : /* @__PURE__ */ Z("div", {
		className: "flex flex-row-reverse items-center gap-2",
		children: [
			u ? /* @__PURE__ */ X(L, {
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
				}), n = /* @__PURE__ */ X(Ne, {
					size: "md",
					onClick: e.onClick,
					icon: e.icon,
					variant: "default",
					label: e.label,
					loading: e.loading,
					disabled: e.disabled
				});
				return t ? /* @__PURE__ */ X(k, {
					description: t,
					children: n
				}) : n;
			})() : a.length > 1 && /* @__PURE__ */ X(L, {
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
				}), n = /* @__PURE__ */ X(Ne, {
					size: "md",
					onClick: e.onClick,
					icon: e.icon,
					variant: "outline",
					hideLabel: e.hideLabelWhenExpanded,
					label: e.label,
					disabled: e.disabled,
					loading: e.loading
				});
				return t ? /* @__PURE__ */ X(k, {
					description: t,
					children: n
				}, e.label) : /* @__PURE__ */ X(En.Fragment, { children: n }, e.label);
			}),
			i && /* @__PURE__ */ X(Ne, {
				size: "md",
				variant: i.variant ?? "outlinePromote",
				label: i.label,
				icon: i.showIcon === !1 ? void 0 : te,
				onClick: i.onClick,
				disabled: i.disabled
			}),
			s.length > 0 && /* @__PURE__ */ X(Qt, {
				items: s,
				align: "end",
				open: c,
				onOpenChange: l,
				children: /* @__PURE__ */ X(je, {
					variant: "outline",
					icon: rn,
					label: "Actions",
					hideLabel: !0,
					pressed: c
				})
			})
		]
	});
}, Fs = jn(({ value: e, compareToValue: t, onDateChange: n, disabled: r, error: i, className: a, highlighted: o, onClick: s, navigation: c, granularity: l, hideGoToCurrent: u, ...d }, f) => {
	let p = y(), m = pt(), h = K(() => {
		if (!e || !e.value) return [p.date.selectDate];
		let n = l || Fe(e.granularity);
		return [e.value, Array.isArray(t) ? t[0] : t].filter((e) => e !== void 0).sort((e, t) => e?.from.getTime() - t?.from.getTime()).map((e) => n.toString(e, p, "long", m.locale));
	}, [
		e,
		p,
		t,
		l,
		m.locale
	]), g = K(() => Object.values(h).join(" ⸱ "), [h]), _ = (e) => {
		e && n?.(e);
	}, v = K(() => {
		if (d.minDate) return l?.toRange(d.minDate)?.from;
	}, [d.minDate, l]), b = K(() => {
		if (d.maxDate) return l?.toRange(d.maxDate)?.to;
	}, [d.maxDate, l]), [x, S] = J(null);
	G(() => {
		S(l?.toRange(/* @__PURE__ */ new Date()) ?? null);
		let e = () => {
			let e = l?.toRange(/* @__PURE__ */ new Date()) ?? null;
			e && at(e.from, v) && ct(e.to || e.from, b) ? S(e) : S(null);
		}, t = setInterval(() => {
			e();
		}, 6e4);
		return e(), () => clearInterval(t);
	}, [
		l,
		v,
		b
	]);
	let C = e?.value ? l?.getPrevNext(e?.value, {
		min: v,
		max: b
	}) : void 0;
	return /* @__PURE__ */ Z("div", {
		ref: f,
		className: I("inline-flex cursor-auto appearance-none gap-1 rounded-md border-0 bg-f1-background px-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover", "[%>*] py-1", F("focus:ring-f1-border-hover"), r && "cursor-not-allowed bg-f1-background-secondary opacity-50", i && "ring-f1-border-critical-bold", a),
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ Z("div", {
			className: I("flex flex-1 gap-1", c ? "justify-between" : "justify-center"),
			children: [
				c && /* @__PURE__ */ X(Ne, {
					size: "sm",
					variant: "ghost",
					icon: it,
					label: "Previous",
					hideLabel: !0,
					disabled: !C?.prev,
					onClick: () => _(C?.prev ?? !1)
				}),
				/* @__PURE__ */ X(je, {
					fontSize: "md",
					size: "sm",
					variant: "ghost",
					label: g,
					onClick: s,
					disabled: r,
					style: { minWidth: l?.toStringMaxWidth() },
					className: I(o && "bg-f1-background-secondary-hover")
				}),
				c && /* @__PURE__ */ X(Ne, {
					variant: "ghost",
					icon: _t,
					label: "Next",
					hideLabel: !0,
					size: "sm",
					fontSize: "md",
					disabled: !C?.next,
					onClick: () => _(C?.next ?? !1)
				})
			]
		}), !u && x && /* @__PURE__ */ X("div", {
			className: "border-l-solid flex-shrink-0 border-[#f00]",
			children: /* @__PURE__ */ X(Ne, {
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
Fs.displayName = "DatePickerTrigger";
//#endregion
//#region src/patterns/OneDateNavigator/OneDateNavigator.tsx
function Is({ onSelect: e, defaultValue: t, presets: n = [], granularities: r = ["day"], hideNavigation: i = !1, hideGoToCurrent: a = !1, compareTo: o, defaultCompareTo: c, onCompareToChange: l, value: u, dataTestId: d, periods: f, ...p }) {
	let m = K(() => vn(u), [u]), h = K(() => vn(t), [t]), [g, _] = J(h ?? m);
	G(() => {
		_n(m, g) || _(m || h);
	}, [m, h]);
	let [v, y] = J(), [b, x] = J(!1), S = pt(), C = p.weekStartsOn ?? S.date?.weekStartsOn ?? Ot.Monday, w = K(() => {
		let e = g?.granularity ?? "day";
		return Xe({
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
	return /* @__PURE__ */ X(s, {
		dataTestId: d,
		children: /* @__PURE__ */ X(hn, {
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
			defaultCompareTo: c,
			onCompareToChange: (e) => {
				y(e), l?.(e);
			},
			weekStartsOn: C,
			periods: f,
			asChild: !0,
			children: /* @__PURE__ */ X(Fs, {
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
var Ls = Is;
//#endregion
//#region src/patterns/OneDataCollection/navigationFilters/filterTypes/DateNavigation/DateNavigation.tsx
function Rs({ filter: e, value: t, onChange: n }) {
	let r = y(), i = {
		granularity: "day",
		...e
	}, a = Array.isArray(i.granularity) ? i.granularity : [i.granularity], o = Xe({ periods: i.periods })[t?.granularity || a[0]];
	return /* @__PURE__ */ X("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ X(Ls, {
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
var zs = (e) => "date" in e, Bs = { "date-navigator": {
	valueConverter: function(e, t, n) {
		let r = Array.isArray(t.granularity) ? t.granularity : [t.granularity], i = t.defaultGranularity || r[0] || "day";
		if (e ||= /* @__PURE__ */ new Date(), zs(e)) return e;
		let a = Xe({ periods: t.periods })[i];
		return {
			value: a.toRange(e),
			valueString: a.toString(e, n),
			granularity: i
		};
	},
	render: (e) => /* @__PURE__ */ X(Rs, { ...e })
} }, Vs = ({ navigationFilters: e, currentNavigationFilters: t, onChangeNavigationFilters: n }) => /* @__PURE__ */ X(Y, { children: e && Object.entries(e).map(([e, r]) => {
	let i = Bs[r.type];
	return /* @__PURE__ */ X(En.Fragment, { children: i.render({
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
function Hs({ isOpen: e, mode: t, initialValues: n, onClose: r, onSubmit: i, onDelete: a, onShare: o, existingNames: s = [] }) {
	let c = y().collections.presets, [l, u] = J(n?.title ?? ""), [d, f] = J(n?.description ?? ""), [p, m] = J(), h = q(null), g = Fn();
	G(() => {
		e && (u(n?.title ?? ""), f(n?.description ?? ""), m(void 0));
	}, [
		n?.description,
		n?.title,
		e,
		t
	]);
	let _ = () => {
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
	return /* @__PURE__ */ X(ne, {
		isOpen: e,
		onClose: r,
		title: t === "create" ? c.createTitle : c.updateTitle,
		description: t === "create" ? c.createDescription : c.updateDescription,
		primaryAction: {
			label: c.save,
			onClick: _,
			disabled: !l.trim()
		},
		secondaryAction: {
			label: c.cancel,
			onClick: r
		},
		otherActions: t === "update" ? [...o ? [{
			label: c.share,
			onClick: o,
			icon: pe
		}] : [], ...a ? [{
			label: c.delete,
			onClick: a,
			icon: we,
			critical: !0
		}] : []] : [],
		disableContentPadding: !0,
		children: /* @__PURE__ */ Z("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ X(Cn, {
					ref: h,
					label: c.nameLabel,
					placeholder: c.namePlaceholder,
					value: l,
					onChange: (e) => {
						u(e), m(void 0);
					},
					error: p,
					required: !0,
					onPressEnter: _,
					"aria-invalid": p ? !0 : void 0,
					"aria-describedby": p ? g : void 0
				}),
				p && /* @__PURE__ */ X("span", {
					id: g,
					className: "sr-only",
					role: "alert",
					children: p
				}),
				/* @__PURE__ */ X(oi, {
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
var Us = 56, Ws = ({ loading: e }) => e ? /* @__PURE__ */ X(u, {
	icon: ye,
	className: "animate-spin"
}) : /* @__PURE__ */ X(u, {
	icon: Re,
	className: "text"
}), Gs = ({ value: e, onChange: t, loading: n = !1, results: r, resultsLoading: i = !1, onResultSelect: a, hasMore: o = !1, loadingMore: s = !1, onLoadMore: c }) => {
	let [d, f] = J(!1), [p, m] = J(!1), [h, g] = J(-1), _ = Fn(), v = q(null), b = q(null), x = q(null), S = y(), T = r ?? [], E = d && p && !!e && T.length > 0, D = (e) => {
		if (!o || s || !c) return;
		let t = e.currentTarget;
		t.scrollHeight - t.scrollTop - t.clientHeight <= Us && c();
	};
	G(() => {
		g((r ?? []).length > 0 ? 0 : -1);
	}, [r]), G(() => {
		x.current?.scrollIntoView({ block: "nearest" });
	}, [h]);
	let O = () => {
		t(void 0), f(!1), m(!1), g(-1), b?.current && (b.current.value = "");
	}, k = (e) => {
		t(e.title), a?.(e.id), m(!1), g(-1);
	};
	l(v, () => {
		d && f(!1), m(!1);
	});
	let A = () => {
		d || (f(!0), setTimeout(() => {
			b.current?.focus();
		}, 0));
	}, j = (e) => {
		if (!d) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), A());
			return;
		}
		if (e.key === "Escape") {
			e.preventDefault(), E ? (m(!1), g(-1)) : O();
			return;
		}
		if (E) {
			if (e.key === "ArrowDown") e.preventDefault(), h < T.length - 1 ? g(h + 1) : o && !s && c?.();
			else if (e.key === "ArrowUp") e.preventDefault(), g((e) => e > 0 ? e - 1 : 0);
			else if (e.key === "Enter") {
				e.preventDefault();
				let t = T[h >= 0 ? h : 0];
				t && k(t);
			}
		}
	};
	return /* @__PURE__ */ X(B, {
		id: _,
		children: /* @__PURE__ */ X(zn, {
			transition: {
				duration: .2,
				ease: [
					.175,
					.885,
					.32,
					1.05
				]
			},
			children: /* @__PURE__ */ X(w, { children: /* @__PURE__ */ Z(C.div, {
				layout: !0,
				ref: v,
				className: I("relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center", (d || e) && "w-[180px]"),
				children: [d ? /* @__PURE__ */ X(C.div, {
					layout: !0,
					layoutId: "search-container",
					className: "absolute inset-0 h-8 w-full bg-f1-border p-px transition-colors focus-within:bg-f1-border-hover",
					style: { borderRadius: 12 },
					children: /* @__PURE__ */ Z(C.div, {
						layout: !0,
						className: "relative flex h-full w-full items-center justify-between gap-1 overflow-hidden bg-f1-background pr-1.5",
						style: { borderRadius: 11 },
						children: [
							/* @__PURE__ */ X(C.div, {
								className: "absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon",
								layoutId: "search-icon",
								children: /* @__PURE__ */ X(Ws, { loading: n || i }, "loading")
							}),
							/* @__PURE__ */ X(C.input, {
								layout: !0,
								ref: b,
								type: "text",
								value: e,
								placeholder: S.actions.search,
								onChange: (e) => {
									t(e.target.value), m(!0), g(0);
								},
								className: "h-full w-full appearance-none rounded border-none bg-f1-background py-2 pl-7 text-base text-f1-foreground",
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								onKeyDown: j
							}),
							/* @__PURE__ */ X(C.div, {
								tabIndex: 0,
								className: I("flex h-5 w-5 items-center justify-center rounded-full", F()),
								onClick: (e) => {
									e.stopPropagation(), O();
								},
								onKeyDown: (e) => {
									(e.key === "Enter" || e.key === " ") && O();
								},
								role: "button",
								"aria-label": S.actions.clear,
								children: /* @__PURE__ */ X(u, {
									icon: Jt,
									size: "md",
									color: "secondary"
								})
							})
						]
					})
				}) : /* @__PURE__ */ X(C.div, {
					role: "button",
					"aria-label": S.actions.search,
					tabIndex: 0,
					layout: !0,
					layoutId: "search-container",
					className: I("relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover", F()),
					onClick: A,
					onKeyDown: j,
					style: { borderRadius: 10 },
					children: /* @__PURE__ */ Z(C.div, {
						layout: !0,
						className: "relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background",
						style: { borderRadius: 9 },
						children: [/* @__PURE__ */ X(C.div, {
							className: "absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold",
							layoutId: "search-icon",
							children: /* @__PURE__ */ X(Ws, { loading: n || i })
						}), e && /* @__PURE__ */ Z("div", {
							className: "flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5",
							children: [/* @__PURE__ */ X(C.div, {
								layout: !0,
								className: "line-clamp-1 overflow-hidden py-2 pl-7",
								children: e
							}), /* @__PURE__ */ X(C.div, {
								tabIndex: 0,
								className: I("flex h-5 w-5 items-center justify-center rounded-full", F()),
								onClick: (e) => {
									e.stopPropagation(), O();
								},
								onKeyDown: (e) => {
									(e.key === "Enter" || e.key === " ") && O();
								},
								role: "button",
								"aria-label": S.actions.clear,
								children: /* @__PURE__ */ X(u, {
									icon: Jt,
									size: "md",
									color: "secondary"
								})
							})]
						})]
					})
				}), E ? /* @__PURE__ */ Z("ul", {
					className: "absolute right-0 top-full z-50 mt-2 max-h-72 w-72 overflow-auto rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md",
					onScroll: D,
					children: [T.map((e, t) => /* @__PURE__ */ X("li", { children: /* @__PURE__ */ Z("button", {
						ref: t === h ? x : null,
						type: "button",
						onMouseDown: (e) => e.preventDefault(),
						onMouseEnter: () => g(t),
						onClick: () => k(e),
						className: I("flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-f1-background-secondary", t === h && "bg-f1-background-secondary", F()),
						children: [e.avatar ? /* @__PURE__ */ X(Tt, {
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
						children: /* @__PURE__ */ X(u, {
							icon: ye,
							className: "animate-spin"
						})
					}) : null]
				}) : null]
			}) })
		})
	});
}, Ks = (e) => Array.isArray(e) ? {
	records: e,
	hasMore: !1
} : e;
function qs(e, t) {
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
			let i = Ks(n);
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
				let a = Ks(i);
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
var Js = ({ isReady: e, totalItemSummaryResult: t }) => /* @__PURE__ */ X("div", {
	className: "flex flex-1 flex-shrink items-center gap-4 text-lg font-semibold",
	children: e ? /* @__PURE__ */ Z("div", {
		className: "flex h-5 items-center",
		children: [" ", t]
	}) : /* @__PURE__ */ X(Me, { className: "h-5 w-24" })
}), Ys = [
	"filters",
	"navigationFilters",
	"sortings",
	"grouping",
	"visualization",
	"search",
	"visualizationFilters"
], Xs = ["*", "all"], Zs = (e) => {
	let t = /* @__PURE__ */ new Set();
	return e ? (e.some((e) => Xs.includes(e)) && Ys.forEach((e) => {
		t.add(e);
	}), e.filter((e) => !Xs.includes(e)).forEach((e) => {
		e.startsWith("!") ? t.delete(e.slice(1)) : t.add(e);
	}), Array.from(t)) : [];
}, Qs = (e) => {
	if (!e || typeof e != "string") return !1;
	let t = e.lastIndexOf("/");
	if (t === -1) return !1;
	let n = e.substring(0, t), r = e.substring(t + 1);
	return !(!n || n.trim() === "" || !r || !/^v[0-9]+$/.test(r));
}, $s = (e, t, n, r) => {
	let [i, a] = J(!1), o = U();
	e && !Qs(e) && console.error(`Invalid storage key format: "${e}". Key must follow the format "name/version" where name can be a path (e.g., "employees/list/") and version must start with "v" (e.g., "v1", "v2.1").`);
	let s = K(() => [
		...Zs(t),
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
	let l = K(() => JSON.stringify(Object.entries(n).map(([e, t]) => [e, t.value])), [n]), u = N((t) => {
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
function ec(e, t) {
	if (!t || e.paginationType !== "pages") return !1;
	let n = e.perPage;
	return n === "auto" || n === void 0;
}
var tc = 30, nc = 10, rc = 108, ic = (e) => Math.min(30, Math.max(1, e));
function ac(e = 48) {
	return rc + 10 * e;
}
function oc(e) {
	let t = Array.from(e.querySelectorAll("*")).filter((e) => {
		let t = getComputedStyle(e).overflowY;
		return t === "auto" || t === "scroll";
	});
	return t.length === 0 ? null : t.reduce((e, t) => t.scrollHeight > e.scrollHeight ? t : e);
}
function sc(e, t, { rowHeight: n = 48, ready: r = !0, measureKey: i } = {}) {
	let [a, o] = J(void 0), s = q(void 0), c = q(!1);
	return Ln(() => {
		if (!t) {
			o(void 0), s.current = void 0, c.current = !1;
			return;
		}
		let r = e.current;
		if (!r) return;
		let i = r.clientHeight - rc, a = ic(Math.floor(i / n));
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
			let r = oc(t);
			if (!r || r.clientHeight === 0 || r.scrollHeight === 0) return;
			c.current = !0;
			let i = ic(Math.floor(n * r.clientHeight / r.scrollHeight));
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
var cc = (e = {}, t) => {
	let n = y(), r = {
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
}, lc = () => ({
	table: {},
	editableTable: {},
	list: {},
	card: {},
	kanban: {},
	graph: {}
}), uc = kn({
	setSettings: () => {},
	settings: { visualization: {} },
	setVisualizationSettings: () => {}
}), dc = () => {
	let e = Pn(uc);
	if (!e) throw Error("useTableSettings must be used within a TableSettingsProvider");
	return e;
}, fc = ({ children: e }) => {
	let [t, n] = J({ visualization: lc() });
	return /* @__PURE__ */ X(uc.Provider, {
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
function pc(e) {
	if (e == null) return "";
	let t = String(e);
	return t.includes(",") || t.includes("\n") || t.includes("\"") ? `"${t.replace(/"/g, "\"\"")}"` : t;
}
function mc(e) {
	if (e == null) return "";
	if (typeof e != "object") return String(e);
	if (e instanceof Date) return e.toISOString();
	if (Array.isArray(e)) return e.map((e) => mc(e)).filter(Boolean).join("; ");
	let t = e;
	return "type" in t && "value" in t && typeof t.type == "string" ? hc(t.type, t.value) : "firstName" in t && "lastName" in t ? `${t.firstName} ${t.lastName}`.trim() : "label" in t && typeof t.label == "string" ? t.label : "text" in t && (typeof t.text == "string" || typeof t.text == "number") ? String(t.text) : "name" in t && typeof t.name == "string" ? t.name : "";
}
function hc(e, t) {
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
		default: return mc(t);
	}
}
function gc(e, t) {
	return t ? t.split(".").reduce((e, t) => e && typeof e == "object" && t in e ? e[t] : "", e) : e;
}
function _c(e, t, n) {
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
			render: e.render ? (t) => mc(e.render(t)) : void 0
		}));
	}
	return [];
}
function vc(e, t) {
	return e.map((e) => t.map((t) => t.render ? t.render(e) : t.field ? mc(gc(e, t.field)) : mc(e)));
}
function yc(e) {
	let t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:-]/g, "");
	return `${e ? e.replace(/[^a-zA-Z0-9-_]/g, "_") : "export"}_${t}.csv`;
}
function bc(e, t, n) {
	if (!e || e.length === 0) throw Error("No data available for export");
	let r = _c(t, n?.hiddenColumnIds, n?.columnOrder);
	if (r.length === 0) {
		let t = e[0];
		r = Object.keys(t).map((e) => ({
			label: e.charAt(0).toUpperCase() + e.slice(1),
			field: e
		}));
	}
	let i = vc(e, r), a = n?.includeHeaders === !1 ? [] : r.map((e) => e.label);
	return [...a.length > 0 ? [a.map((e) => pc(e)).join(",")] : [], ...i.map((e) => e.map((e) => pc(e)).join(","))].join("\n");
}
function xc(e, t) {
	let n = new Blob(["﻿" + e], { type: "text/csv;charset=utf-8" }), r = document.createElement("a"), i = URL.createObjectURL(n);
	r.href = i, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(i);
}
async function Sc(e, t, n) {
	xc(bc(e, t, n), yc(n?.filename || "data_collection"));
}
//#endregion
//#region src/patterns/OneDataCollection/hooks/useExportAction.ts
var Cc = 1e4, wc = 100;
async function Tc(e) {
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
async function Ec(e) {
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
	if (!t.paginationType) return ((await Tc((t.exportFetchData ?? t.fetchData)(r))).records ?? []).slice(0, Cc);
	let i = t.exportFetchData ?? t.fetchData;
	if (t.paginationType === "pages") {
		let e = [], t = 1;
		for (; e.length < Cc;) {
			let n = await Tc(i({
				...r,
				pagination: {
					currentPage: t,
					perPage: wc
				}
			}));
			if (!n.records || n.records.length === 0 || (e.push(...n.records), "pagesCount" in n && t >= n.pagesCount)) break;
			t++;
		}
		return e.slice(0, Cc);
	}
	if (t.paginationType === "infinite-scroll") {
		let e = [], t = null;
		for (; e.length < Cc;) {
			let n = await Tc(i({
				...r,
				pagination: {
					cursor: t,
					perPage: wc
				}
			}));
			if (!n.records || n.records.length === 0 || (e.push(...n.records), "hasMore" in n && !n.hasMore)) break;
			if ("cursor" in n) t = n.cursor ?? null;
			else break;
		}
		return e.slice(0, Cc);
	}
	return ((await Tc(i({
		...r,
		pagination: {}
	}))).records ?? []).slice(0, Cc);
}
function Dc({ source: e, currentVisualization: t, filename: n, enabled: r = !0 }) {
	let [i, a] = J(!1), o = y(), { settings: s } = dc(), c = W(async () => {
		if (r) {
			a(!0);
			try {
				let r = await Ec(e), i = t?.type ?? "table", a = s.visualization[i], o = a?.hidden ? new Set(a.hidden) : void 0, c = a?.order;
				await Sc(r, t, {
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
		icon: Zt,
		onClick: c,
		loading: i,
		disabled: !r || i || e.isLoading,
		description: o.collections?.export?.description ?? "Download all data as a CSV file"
	};
}
//#endregion
//#region src/lib/providers/datacollection/dataCollectionUrlParams.ts
var Oc = "dc_", kc = {
	search: "dc_search",
	sortings: "dc_sort",
	visualization: "dc_visualization",
	page: "dc_page",
	preset: "dc_view"
}, Ac = "..", jc = "*", Mc = "none", Nc = "-", Pc = 25, Fc = (e) => `dc_${e}`, Ic = (e) => e instanceof URLSearchParams ? e : typeof e == "string" ? new URLSearchParams(e) : typeof window < "u" ? new URLSearchParams(window.location.search) : new URLSearchParams(), Lc = (e) => {
	new Set([...e.keys()].filter((e) => e.startsWith("dc_"))).forEach((t) => e.delete(t));
}, Rc = (e) => {
	let t = e.trim();
	if (t === "" || t === Mc || t === "null") return null;
	let n = t.lastIndexOf(Nc), r = n === -1 ? "" : t.slice(n + 1);
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
}, zc = (e) => e ? `${String(e.field)}${Nc}${e.order}` : Mc, Bc = (e) => e.toISOString().slice(0, 10), Vc = (e) => {
	if (e == null) return [];
	if (Array.isArray(e)) return e.filter((e) => e != null).map(String);
	if (typeof e == "string") return e === "" ? [] : [e];
	if (typeof e == "number") return [String(e)];
	if (e instanceof Date) return [Bc(e)];
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
			let r = (e) => e?.value == null ? "" : `${e.value}${e.closed === !1 ? jc : ""}`;
			return [`${r(e)}${Ac}${r(n)}`];
		}
		if (t.from instanceof Date || t.to instanceof Date) return [`${t.from instanceof Date ? Bc(t.from) : ""}${Ac}${t.to instanceof Date ? Bc(t.to) : ""}`];
	}
	return [];
}, Hc = (e) => {
	let t = e.endsWith(jc), n = t ? e.slice(0, -1) : e;
	return {
		value: n === "" ? void 0 : Number(n),
		closed: !t
	};
}, Uc = (e) => {
	if (e.includes(Ac)) {
		let [t, n] = e.split(Ac);
		return {
			mode: "range",
			from: Hc(t ?? ""),
			to: Hc(n ?? "")
		};
	}
	let t = Number(e);
	return {
		mode: "single",
		value: Number.isNaN(t) ? void 0 : t
	};
}, Wc = (e) => {
	if (e.includes(Ac)) {
		let [t, n] = e.split(Ac);
		return t ? n ? {
			from: new Date(t),
			to: new Date(n)
		} : { from: new Date(t) } : void 0;
	}
	return e ? new Date(e) : void 0;
}, Gc = (e, t) => {
	switch (e) {
		case "in": return t;
		case "search": return t[0];
		case "number": return Uc(t[0] ?? "");
		case "date": return Wc(t[0] ?? "");
		default: return t.length > 1 ? t : t[0];
	}
}, Kc = (e, t) => {
	let n = Ic(e), r = {};
	if (n.has(kc.search) && (r.search = n.get(kc.search) ?? void 0), n.has(kc.sortings) && (r.sortings = Rc(n.get(kc.sortings) ?? "")), n.has(kc.visualization)) {
		let e = n.get(kc.visualization);
		e && (r.visualization = e);
	}
	if (n.has(kc.page)) {
		let e = Number(n.get(kc.page));
		Number.isInteger(e) && e >= 1 && (r.page = e);
	}
	if (n.has(kc.preset)) {
		let e = n.get(kc.preset);
		e && (r.preset = e);
	}
	if (t) {
		let e = {}, i = !1;
		for (let [r, a] of Object.entries(t)) {
			let t = Fc(r);
			n.has(t) && (e[r] = Gc(a.type, n.getAll(t)), i = !0);
		}
		i && (r.filters = e);
	}
	return r;
}, qc = /* @__PURE__ */ new Set(), Jc = (e, t) => {
	qc.has(e) || (qc.add(e), console.warn(`[OneDataCollection] Filter "${e}" has ${t} selected values, over the URL limit of 25; it will not be reflected in the URL (still applied in-memory and persisted via storage).`));
}, Yc = (e) => {
	let t = Vc(e).length;
	return t > 0 && t <= 25;
}, Xc = (e, t) => {
	if (t.filters) for (let [n, r] of Object.entries(t.filters)) {
		let t = Vc(r);
		if (t.length > 25) {
			Jc(n, t.length);
			continue;
		}
		t.forEach((t) => e.append(Fc(n), t));
	}
	t.search && e.set(kc.search, t.search), t.sortings && e.set(kc.sortings, zc(t.sortings)), t.visualization && e.set(kc.visualization, t.visualization), t.page && t.page > 1 && e.set(kc.page, String(t.page)), t.preset && e.set(kc.preset, t.preset);
}, Zc = (e) => !!e.search || !!e.sortings || !!e.visualization || e.page !== void 0 && e.page > 1 || !!e.preset || !!e.filters && Object.values(e.filters).some(Yc), Qc = (e = {}) => {
	let t = new URLSearchParams();
	return Xc(t, e), t;
}, $c = (e, t) => {
	let n = new URLSearchParams(Ic(e));
	return Lc(n), Zc(t) && Xc(n, t), n;
}, el = (e, t) => {
	if (typeof window > "u") return null;
	let n = $c(window.location.search, e).toString(), r = n ? `${window.location.pathname}?${n}` : window.location.pathname, i = t?.history ?? "replace";
	return i === "push" ? window.history.pushState(null, "", r) : i === "replace" && window.history.replaceState(null, "", r), n;
}, tl = (e, t) => {
	try {
		localStorage.setItem(H(e), JSON.stringify(t));
	} catch {}
}, nl = 300, rl = ({ disabled: e, storageReady: t, filtersDefinition: n, filters: r, search: i, sortings: a, defaultSortings: o = null, visualization: s, visualizationKeys: c, selectedPresetId: l, setFilters: u, setSearch: d, setSortings: f, setVisualization: p, setSelectedPresetId: m }) => {
	let h = !e, g = c.length > 1, [_, v] = J(!1);
	G(() => {
		if (!h || !t || _) return;
		let e = Kc(typeof window < "u" ? window.location.search : "", n);
		if ("filters" in e && u(e.filters ?? {}), "search" in e && d(e.search), "sortings" in e && f(e.sortings ?? null), g && e.visualization !== void 0) {
			let t = c.indexOf(e.visualization);
			t >= 0 && p(t);
		}
		e.preset !== void 0 && m(e.preset), v(!0);
	}, [h, t]);
	let y = W((e) => el(e), []), b = N(y, nl);
	Be(() => {
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
}, il = (e) => typeof e == "object" && !!e && !Array.isArray(e), al = (e) => String(e), ol = (e, t) => {
	let n = t[e];
	if (n?.presets !== void 0) {
		let e = n.presets[0];
		return e ? e.filter : {};
	}
	return {};
}, sl = (e, t, n) => {
	let r = t[e];
	return r?.filters ? new Set(Object.keys(r.filters)) : n ? new Set(Object.keys(n)) : null;
}, cl = (e, t, n, r) => {
	if (!il(t)) return {};
	let i = sl(e, n, r);
	if (!i) return t;
	let a = {};
	for (let [e, n] of Object.entries(t)) i.has(e) && (a[e] = n);
	return a;
}, ll = ({ sourceFilters: e, sourcePresets: t, sourceCurrentFilters: n, sourceSetCurrentFilters: r, visualizations: i, currentVisualization: a, storageKey: o }) => {
	let s = i.length > 1, c = i.some((e) => e.filters !== void 0 || e.presets !== void 0), [l, u] = J({}), d = q(a), f = q(!1), p = q(!1), m = q(null), h = q(n), g = q(i);
	g.current = i;
	let _ = q(e);
	if (_.current = e, Ln(() => {
		f.current = !1, p.current = !1, m.current = null, d.current = a, h.current = n, u((e) => Object.keys(e).length > 0 ? {} : e);
	}, [o]), s && p.current) {
		let e = al(d.current), t = al(a);
		e === t ? n !== h.current && (m.current = null) : m.current = l[t] ?? ol(a, i);
	} else m.current = null;
	h.current = n, Ln(() => {
		if (!s || !f.current || p.current) return;
		let e = al(a), t = l[e];
		r(t ?? ol(a, i)), p.current = !0;
	}, [
		s,
		a,
		l
	]), Ln(() => {
		if (!s) return;
		if (f.current && !p.current) {
			d.current = a;
			return;
		}
		let e = al(d.current), t = al(a);
		if (e !== t) {
			u((t) => ({
				...t,
				[e]: n
			}));
			let o = l[t];
			r(o ?? ol(a, i));
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
		let e = al(a);
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
	Ln(() => {
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
		let r = al(a);
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
		let t = al(a);
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
		let t = g.current, n = _.current, r = il(e) ? e : {}, i = {};
		for (let [e, a] of Object.entries(r)) {
			let r = il(a) ? a : {}, o = Number(e);
			i[e] = Number.isInteger(o) && o >= 0 && o < t.length ? cl(o, r, t, n) : r;
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
function ul(e, { filters: t, onError: n } = {}) {
	let [r, i] = J(void 0);
	return {
		...qe(e, {
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
function dl(e, t = {}) {
	return { ...ul(e, t) };
}
//#endregion
//#region src/ui/pagination.tsx
var fl = ({ className: e, ...t }) => /* @__PURE__ */ X("nav", {
	role: "navigation",
	"aria-label": "pagination",
	className: I("flex w-full justify-center", e),
	...t
});
fl.displayName = "Pagination";
var pl = Tn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("div", {
	ref: n,
	className: I("flex list-none flex-row items-center gap-1", e),
	...t
}));
pl.displayName = "PaginationContent";
var ml = Tn.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X("div", {
	ref: n,
	className: I("", e),
	...t
}));
ml.displayName = "PaginationItem";
var hl = ({ className: e, isActive: t, ...n }) => /* @__PURE__ */ X("a", {
	"aria-current": t ? "page" : void 0,
	className: I("flex h-8 min-w-8 select-none items-center justify-center rounded px-1.5 font-medium text-f1-foreground-secondary transition-all hover:cursor-pointer hover:bg-f1-background-secondary-hover", t && "bg-f1-background-selected-bold font-semibold text-f1-foreground-inverse hover:bg-f1-background-selected-bold-hover", F(), e),
	...n
});
hl.displayName = "PaginationLink";
var gl = ({ className: e, ...t }) => /* @__PURE__ */ X(hl, {
	role: "button",
	"aria-label": "Go to previous page",
	className: I("border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background", e),
	...t,
	children: /* @__PURE__ */ X(u, { icon: it })
});
gl.displayName = "PaginationPrevious";
var _l = ({ className: e, ...t }) => /* @__PURE__ */ X(hl, {
	role: "button",
	"aria-label": "Go to next page",
	className: I("border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background", e),
	...t,
	children: /* @__PURE__ */ X(u, { icon: _t })
});
_l.displayName = "PaginationNext";
var vl = ({ className: e, ...t }) => /* @__PURE__ */ X("span", {
	role: "presentation",
	"aria-hidden": !0,
	className: I("flex h-9 w-9 items-center justify-center", e),
	...t,
	children: /* @__PURE__ */ X(u, { icon: $t })
});
vl.displayName = "PaginationEllipsis";
//#endregion
//#region src/ui/OnePagination/index.tsx
function yl({ totalPages: e, currentPage: t = 1, onPageChange: n, showControls: r = !0, ariaLabel: i = "Page navigation", visibleRange: a = 3, hasNextPage: o = !0, disabled: s = !1 }) {
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
	return /* @__PURE__ */ X(fl, { children: /* @__PURE__ */ Z(pl, {
		role: "navigation",
		"aria-label": i,
		children: [
			r && /* @__PURE__ */ X(ml, { children: /* @__PURE__ */ X(gl, {
				"aria-disabled": t === 1 || s,
				tabIndex: t === 1 ? -1 : 0,
				className: I(!c && "mr-1", t === 1 || s ? "pointer-events-none opacity-50" : ""),
				onClick: () => l(t - 1),
				onKeyDown: (e) => {
					e.key === "Enter" && l(t - 1);
				}
			}) }),
			!c && u.map((e, n) => /* @__PURE__ */ X(ml, {
				className: I("hidden sm:flex", e === t && "flex", s && "pointer-events-none opacity-50"),
				children: e === "..." ? /* @__PURE__ */ X(vl, {}) : /* @__PURE__ */ X(hl, {
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
			r && /* @__PURE__ */ X(ml, { children: /* @__PURE__ */ X(_l, {
				"aria-disabled": (c ? !o : t === e) || s,
				tabIndex: c ? o ? 0 : -1 : t === e ? -1 : 0,
				className: I(!c && "ml-1", !c && t === e || !o && c || s ? "pointer-events-none opacity-50" : ""),
				onClick: () => l(t + 1),
				onKeyDown: (e) => {
					e.key === "Enter" && l(t + 1);
				}
			}) })
		]
	}) });
}
var bl = i(x("OnePagination", yl)), xl = ({ paginationInfo: e, setPage: t, className: n }) => {
	let r = y();
	return !Ge(e) || e.pagesCount <= 1 ? null : /* @__PURE__ */ Z("div", {
		className: I("flex w-full items-center justify-between px-page", n),
		children: [/* @__PURE__ */ X("span", {
			className: "shrink-0 text-f1-foreground-secondary",
			children: e.total > 0 && `${(e.currentPage - 1) * e.perPage + 1}-${Math.min(e.currentPage * e.perPage, e.total)} ${r.collections.visualizations.pagination.of} ${e.total}`
		}), /* @__PURE__ */ X("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ X(bl, {
				totalPages: e.pagesCount,
				currentPage: e.currentPage,
				onPageChange: t
			})
		})]
	});
}, Sl = (e) => Math.ceil(e / 12) * 12, Cl = ({ children: e, tmpFullWidth: t }) => /* @__PURE__ */ X("div", {
	className: I("@container", t ? "px-0" : "px-page"),
	children: /* @__PURE__ */ X("div", {
		className: I("grid grid-cols-1 gap-4", "@sm:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4"),
		children: e
	})
}), wl = ({ source: e, items: t, selectedItems: n, handleSelectItemChange: r, cardProperties: i, title: a, description: o, avatar: s, image: c, imageFit: l, imageSize: u, imageAspectRatio: d, blurredBackground: f, compact: p, tmpFullWidth: m }) => {
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
				icon: t.icon ?? dn,
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
		return typeof t == "string" && t in Vt;
	}
	return /* @__PURE__ */ X(Cl, {
		tmpFullWidth: m,
		children: t.map((t, m) => {
			let g = e.selectable ? e.selectable(t) : void 0, _ = e.itemUrl ? e.itemUrl(t) : void 0, v = e.itemOnClick ? e.itemOnClick(t) : void 0, y = (e.itemActions && e.itemActions(t) || []).filter((e) => e.type !== "separator"), b = (y.filter((e) => e.type === "other" || !e.type) || []).map((e) => ({
				...e,
				type: "item"
			})), x = y.find((e) => e.type === "primary") || void 0, S = y.filter((e) => e.type === "secondary") || [], w = !!e.selectable && g !== void 0, T = h(t, i);
			return /* @__PURE__ */ X(C.div, {
				layout: !0,
				initial: "hidden",
				animate: "visible",
				exit: "hidden",
				custom: m,
				variants: dt({
					delay: .02,
					duration: .3
				}),
				children: /* @__PURE__ */ X(Ht, {
					title: a(t),
					selectable: w,
					description: o ? o(t) : void 0,
					avatar: s ? s(t) : void 0,
					image: c ? c(t) : void 0,
					imageFit: l,
					imageSize: u,
					imageAspectRatio: d,
					blurredBackground: f,
					selected: w && n.has(g),
					onSelect: (e) => r(t, e),
					secondaryActions: S,
					primaryAction: x,
					otherActions: b,
					onClick: v,
					link: _,
					compact: p || !1,
					metadata: T,
					fullHeight: !0
				}, m)
			}, m);
		})
	});
}, Tl = ({ cardProperties: e, title: t, description: n, avatar: r, image: i, imageFit: a, imageSize: o, imageAspectRatio: s, blurredBackground: c, compact: l, source: u, onSelectItems: d, onLoadData: f, onLoadError: p, tmpFullWidth: m }) => {
	let h = K(() => {
		if (u.dataAdapter.paginationType === "pages") {
			let e = u.dataAdapter.perPage, t = Sl(typeof e == "number" ? e : 24);
			return {
				...u.dataAdapter,
				perPage: t
			};
		}
		return u.dataAdapter;
	}, [u.dataAdapter]), { data: g, paginationInfo: _, setPage: v, isInitialLoading: y } = dl({
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
	let { selectedItems: b, groupAllSelectedStatus: x, handleSelectItemChange: S, handleSelectGroupChange: C } = Ue({
		data: g,
		paginationInfo: _,
		source: u,
		onSelectItems: d,
		selectionMode: "multi",
		selectedState: u.defaultSelectedItems
	}), T = u.grouping?.collapsible, E = u.grouping?.defaultOpenGroups, { openGroups: D, setGroupOpen: O } = Ie(g?.type === "grouped" ? g.groups : [], E);
	return /* @__PURE__ */ Z("div", {
		className: "flex h-full min-h-0 flex-1 flex-col gap-4",
		children: [/* @__PURE__ */ X("div", {
			className: "overflow-auto",
			children: y ? /* @__PURE__ */ X(Cl, {
				tmpFullWidth: m,
				children: Array.from({ length: 8 }).map((t, n) => /* @__PURE__ */ Z(At, { children: [/* @__PURE__ */ X(jt, { children: /* @__PURE__ */ X(It, {
					"aria-label": "Loading card",
					children: /* @__PURE__ */ X(Me, { className: "h-4 w-3/4" })
				}) }), /* @__PURE__ */ X(Mt, {
					className: "space-y-2",
					children: e.map((e) => /* @__PURE__ */ Z("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ X(Me, { className: "h-3 w-1/4" }), /* @__PURE__ */ X(Me, { className: "h-3 w-1/2" })]
					}, String(e.label)))
				})] }, n))
			}) : /* @__PURE__ */ Z(Y, { children: [g?.type === "grouped" && g.groups.map((d) => /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(He, {
				label: d.label,
				itemCount: d.itemCount,
				onOpenChange: (e) => O(d.key, e),
				open: D[d.key],
				selectable: !!u.selectable,
				showOpenChange: T,
				select: x[d.key]?.checked ? !0 : x[d.key]?.indeterminate ? "indeterminate" : !1,
				onSelectChange: (e) => C(d, e),
				className: "px-page pb-2 pt-4"
			}), /* @__PURE__ */ X(w, { children: (!T || D[d.key]) && /* @__PURE__ */ X(wl, {
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
			}, d.key) })] })), g?.type === "flat" && /* @__PURE__ */ X(wl, {
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
		}), /* @__PURE__ */ X(xl, {
			paginationInfo: _,
			setPage: v
		})]
	});
}, El = (e, t, n, r) => {
	let i = q(null);
	return G(() => {
		if (!ze(e) || !e.hasMore) return;
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
}, Dl = kn(null);
function Ol({ addRowActions: e, addRowActionsLabel: t, addNestedRowActions: n, addNestedRowActionsLabel: r, children: i }) {
	return /* @__PURE__ */ X(Dl.Provider, {
		value: {
			addRowActions: e,
			addRowActionsLabel: t,
			addNestedRowActions: n,
			addNestedRowActionsLabel: r
		},
		children: i
	});
}
function kl() {
	return Pn(Dl);
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/utils.ts
var Al = (e) => e ? e.indeterminate || e.selectedCount !== void 0 && e.selectedCount > 0 && !e.checked ? "indeterminate" : e.checked : !1, jl = (e) => (e || []).map((e) => e.type === "separator" ? e : {
	...e,
	type: "item"
}), Ml = ({ items: e, onOpenChange: t, align: n = "end", label: r = "Actions", className: i }) => {
	let [a, o] = J(!1);
	return !e || e.length === 0 ? null : /* @__PURE__ */ X("div", {
		className: I("pointer-events-auto", i),
		children: /* @__PURE__ */ X(Qt, {
			align: n,
			items: e.map((e) => e.type === "separator" || e.type === "label" ? e : {
				...e,
				type: "item"
			}),
			open: a,
			onOpenChange: (e) => {
				o(e), t?.(e);
			},
			children: /* @__PURE__ */ X(je, {
				icon: rn,
				label: r,
				hideLabel: !0,
				variant: "ghost",
				pressed: a
			})
		})
	});
}, Nl = ({ items: e, onOpenChange: t, className: n }) => /* @__PURE__ */ X("div", {
	className: I(n),
	children: /* @__PURE__ */ X(Ml, {
		label: "Mobile Actions",
		align: "end",
		items: e,
		onOpenChange: t
	})
}), Pl = ({ children: e, dropDownOpen: t, className: n }) => /* @__PURE__ */ X("aside", {
	className: I("pointer-events-none absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex", "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]", "via-[#F5F6F8] via-60% dark:via-[#192231]", "to-transparent to-100%", t ? "opacity-100" : "opacity-0", n),
	children: e
}), Fl = (e, t) => (e && e(t) || []).filter((e) => e.type === "separator" || e.enabled === void 0 || e.enabled), Il = ({ source: e, item: t }) => {
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
	let o = Fl(e.itemActions, t), s = o.filter((e) => e.type === "separator" || e.hideInMobileDropdown !== !0), c = o.filter((e) => e.type === "primary").slice(0, 2), l = jl(o.filter((e) => e.type === "separator" || !c.includes(e))), u = jl(s), d = u.some((e) => e.type !== "separator");
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
}, Ll = ({ className: e, primaryItemActions: t, dropdownItemActions: n, handleDropDownOpenChange: r }) => /* @__PURE__ */ Z("aside", {
	className: I("pointer-events-auto items-center justify-end gap-2 md:flex", e),
	children: [t.map((e) => /* @__PURE__ */ X(Ne, {
		label: e.label,
		hideLabel: e.hideLabel,
		variant: "outline",
		onClick: e.onClick,
		icon: e.icon
	}, e.label)), /* @__PURE__ */ X(Ml, {
		align: "end",
		items: n,
		onOpenChange: r
	})]
}), Rl = (e) => e.id ?? e.label ?? "column", zl = (e, t, n) => n ? [.../* @__PURE__ */ new Set([...e ?? [], t])] : (e ?? []).filter((e) => e !== t), Bl = (e) => [...e].sort((t, n) => (t.order ?? e.length) - (n.order ?? e.length)).map((e) => Rl(e)), Vl = (e) => e.filter((e) => e.hidden && !e.noHiding).map((e) => Rl(e)), Hl = (e, t, n, r, i, a, o) => {
	let s = () => {
		if (!i || n?.hidden === void 0) return Vl(e);
		if (!n.order || n.order.length === 0) return n.hidden;
		let t = new Set(n.order), r = e.filter((e) => e.hidden && !e.noHiding && !t.has(Rl(e))).map(Rl);
		return [...n.hidden, ...r];
	}, [c, l] = J(s()), [u, d] = J((r && n?.order !== void 0 ? n.order : void 0) ?? Bl(e));
	G(() => {
		i && l(s());
	}, [JSON.stringify(n?.hidden), i]), G(() => {
		r && d(n?.order === void 0 ? Bl(e) : n.order);
	}, [JSON.stringify(n?.order), r]);
	let f = o ? t : t || 1, p = K(() => {
		let t = e.slice(0, f), n = [...e.slice(f)].sort((e, t) => {
			let n = u.indexOf(Rl(e)), r = u.indexOf(Rl(t));
			return (n === -1 ? u.length : n) - (r === -1 ? u.length : r);
		});
		return [...t, ...n];
	}, [
		e,
		f,
		u
	]), m = K(() => p.map(Rl), [p]), h = K(() => {
		let e = p.slice(0, f), t = p.slice(f), n = new Map(t.map((e) => [Rl(e), e])), r = [...new Set(a ?? [])].map((e) => n.get(e)).filter((e) => !!e), i = new Set(r.map(Rl)), s = t.filter((e) => !i.has(Rl(e))), l = o ? s.find((e) => !c.includes(Rl(e))) ?? s.at(-1) ?? t.at(-1) : void 0, u = l ? Rl(l) : void 0, d = r.filter((e) => Rl(e) !== u), m = new Set(d.map(Rl)), h = t.filter((e) => !m.has(Rl(e))), g = h.filter((e) => !c.includes(Rl(e))), _ = o && g.length === 0 ? u : void 0, v = h.filter((e) => Rl(e) === _ || !c.includes(Rl(e))).map(Rl);
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
			let l = Rl(e), u = a || n.has(l);
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
	]), _ = K(() => h.managedLockedColumns.map(Rl), [h.managedLockedColumns]), v = K(() => [...p.slice(0, t).map(Rl), ..._], [
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
}, Ul = (e) => `f0-collapsing-group-${e}`, Wl = "border-0 border-r border-solid border-f1-border-secondary", Gl = /* @__PURE__ */ new Set(), Kl = (e) => {
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
}, ql = (e) => {
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
}, Jl = (e, t, n, r = Gl) => {
	let i = /* @__PURE__ */ new Set();
	ql(e).forEach((a) => {
		if (!n.has(a.groupId)) return;
		let o = t[a.groupId]?.collapsedColumns, s = a.columnIndices.filter((t) => {
			let n = Rl(e[t]);
			return r.has(n) || o?.includes(n);
		}), c = new Set(s.length > 0 ? s : [a.columnIndices[0]]);
		a.columnIndices.forEach((e) => {
			c.has(e) || i.add(e);
		});
	});
	let a = e.map((e, t) => r.has(Rl(e)) ? -1 : t).filter((e) => e !== -1);
	return a.length > 0 && a.every((e) => i.has(e)) && i.delete(a.at(-1)), i;
}, Yl = (e, t, n = /* @__PURE__ */ new Set()) => {
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
}, Xl = (e, { headerGroups: t, onCollapsedChange: n, preservedColumnIds: r = Gl } = {}) => {
	let i = K(() => Kl(t), [t]), [a, o] = J(() => new Set(Object.entries(i ?? {}).filter(([, e]) => e.defaultCollapsed).map(([e]) => e))), [s, c] = J(/* @__PURE__ */ new Set()), l = h(), u = W((e) => {
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
			let t = Jl(e, i, f, r);
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
	]), m = K(() => Object.entries(i ?? {}).filter(([, e]) => e.collapsedColumns !== void 0).map(([e]) => e).sort(), [i]);
	return {
		columns: p,
		collapsingCellClasses: K(() => {
			let e = /* @__PURE__ */ new Map();
			return !i || s.size === 0 || s.forEach((t) => {
				let n = m.indexOf(t);
				n !== -1 && Jl(p, i, /* @__PURE__ */ new Set([t]), r).forEach((t) => {
					e.set(Rl(p[t]), Ul(n));
				});
			}), e;
		}, [
			p,
			i,
			s,
			m,
			r
		]),
		collapseTransitions: K(() => [...s].map((e) => ({
			groupId: e,
			cellClass: Ul(m.indexOf(e)),
			direction: a.has(e) ? "close" : "open"
		})).filter(({ groupId: e }) => m.includes(e)), [
			s,
			a,
			m
		]),
		settleHeaderGroup: u,
		headerGroups: K(() => !i || !p.some((e) => e.headerGroupId) ? null : Yl(p, i, a), [
			p,
			i,
			a
		]),
		toggleHeaderGroup: d
	};
}, Zl = (e, t, n) => {
	let r = n ? 56 : 0;
	return {
		getStickyPosition: W((n) => n < e && t.length > 1 ? { left: t.slice(0, Math.max(0, n)).reduce((e, t) => e + (t.width ?? t.minWidth ?? 0), r) } : void 0, [
			e,
			t,
			r
		]),
		checkColumnWidth: r
	};
}, Ql = 1500, $l = {
	none: "",
	striped: "bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)] [background-size:100%_100px]",
	striked: "[&_*:not([data-no-strike]):not([data-no-strike]_*)]:line-through text-f1-foreground-secondary"
}, eu = jn(({ source: e, item: t, onCheckedChange: n, selectedItems: r, columns: i, frozenColumnsLeft: a, checkColumnWidth: o, index: s, groupIndex: c, noBorder: l = !1, loading: u = !1, nestedRowProps: d, tableWithChildren: f, disableHover: p = !1, isNew: m = !1, referenceRowType: h, boldRootRows: g = !1, cellRenderer: _, fromVisualization: v, headerGroups: b, collapsingCellClasses: x, registerSelectable: S, unregisterSelectable: C }, w) => {
	let T = e.itemUrl ? e.itemUrl(t) : void 0, E = e.itemOnClick ? e.itemOnClick(t) : void 0, D = e.selectable ? e.selectable(t) : void 0, O = !!e.itemsWithChildren?.(t), k = y(), [A, j] = J(m);
	G(() => {
		if (!A) return;
		let e = setTimeout(() => j(!1), Ql);
		return () => clearTimeout(e);
	}, [A]);
	let N = (e, t) => Xo(e, t, "table", k, { tableAlign: t.align ?? "left" }), P = `table-row-${c}-${s}`, { getStickyPosition: F } = Zl(a, i, !!e.selectable), { hasItemActions: L, hasMobileItemActions: R, primaryItemActions: z, dropdownItemActions: B, mobileDropdownItemActions: ee, handleDropDownOpenChange: te, dropDownOpen: V } = Il({
		source: e,
		item: t
	}), H = M();
	G(() => {
		if (!(D === void 0 || !S || !H)) return S(D, t), () => C?.(D);
	}, [
		D,
		t,
		S,
		C,
		H
	]);
	let U = D !== void 0 && r.has(D), ne = h?.(t) ?? "none", re = _ ? I("h-[48px] p-0 align-middle last:pr-0", !f && (v === "editableTable" ? "first:pl-3" : "first:pl-0")) : void 0;
	return /* @__PURE__ */ Z(jo, {
		ref: w,
		sticky: d?.stickyRow,
		className: I("group transition-colors hover:bg-f1-background-hover", "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", l && "after:bg-white-100", p && "hover:bg-transparent", U && "bg-f1-background-selected-secondary", A && "animate-row-flash", g && f && (d?.depth ?? 0) === 0 && "font-semibold", $l[ne]),
		children: [
			e.selectable && /* @__PURE__ */ X(Eo, {
				width: o,
				sticky: { left: 0 },
				loading: u,
				className: I(u && f ? "first:pl-4" : "", b && "[&>div:first-child]:hidden", b && "border-0 border-r border-solid border-f1-border-secondary", re),
				referenceRowType: ne,
				children: D !== void 0 && /* @__PURE__ */ X("div", {
					className: "pointer-events-auto ml-3.5 flex h-full items-center justify-start",
					children: /* @__PURE__ */ X(bt, {
						checked: r.has(D),
						onCheckedChange: n,
						title: `Select ${e.selectable(t)}`,
						hideLabel: !0
					})
				})
			}),
			i.map((n, r) => {
				let a = b?.find((e) => e.type === "group" && e.columnIndices.includes(r)), o = !!b && (!a || a.columnIndices[a.columnIndices.length - 1] === r), l = /* @__PURE__ */ X("div", {
					className: I(n.align === "right" ? "justify-end" : "", "flex", Rt),
					children: N(t, n)
				});
				return /* @__PURE__ */ X(Eo, {
					firstCell: r === 0,
					href: T,
					onClick: E,
					width: n.width,
					minWidth: n.minWidth,
					sticky: F(r),
					loading: u,
					nestedRowProps: {
						...d,
						rowWithChildren: O,
						tableWithChildren: f,
						selectableRow: !!e.selectable
					},
					fromVisualization: v,
					referenceRowType: ne,
					highlighted: !!n.highlighted,
					className: I(re, o && "border-0 border-r border-solid border-f1-border-secondary", x?.get(Rl(n))),
					children: _ ? /* @__PURE__ */ X(_, {
						item: t,
						isLastColumn: !L && r === i.length - 1,
						column: n,
						cellIndex: r,
						children: l
					}) : l
				}, `table-cell-${c}-${s}-${r}`);
			}),
			L && !u && !d?.onLoadMoreChildren && !d?.onAddRow && (v === "editableTable" ? /* @__PURE__ */ X(Eo, {
				sticky: { right: 0 },
				referenceRowType: ne,
				className: "bg-f1-background !px-3 align-middle",
				children: /* @__PURE__ */ X(Ll, {
					className: "flex flex-nowrap justify-center",
					primaryItemActions: z,
					dropdownItemActions: B,
					handleDropDownOpenChange: te
				})
			}, `table-cell-${c}-${s}-actions`) : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("td", {
				className: "sticky right-0 top-0 z-10 hidden md:table-cell",
				children: /* @__PURE__ */ X(Pl, {
					dropDownOpen: V,
					className: "pl-8",
					children: /* @__PURE__ */ X(Ll, {
						primaryItemActions: z,
						dropdownItemActions: B,
						handleDropDownOpenChange: te
					})
				})
			}), R && /* @__PURE__ */ X(Eo, {
				width: 68,
				sticky: { right: 0 },
				href: T,
				className: "table-cell md:hidden",
				loading: u,
				children: /* @__PURE__ */ X(Nl, {
					items: ee,
					onOpenChange: te
				})
			}, `table-cell-${c}-${s}-actions`)] }))
		]
	}, P);
});
eu.displayName = "FlatRow";
var tu = eu, nu = (e) => {
	let t = e.parentElement;
	for (; t;) {
		let { overflow: e, overflowY: n } = getComputedStyle(t);
		if (e === "auto" || e === "scroll" || n === "auto" || n === "scroll") return t;
		t = t.parentElement;
	}
	return null;
}, ru = (e, t) => {
	let n = nu(e);
	if (!n) return;
	let r, i = () => {
		r !== void 0 && cancelAnimationFrame(r), r = requestAnimationFrame(t);
	};
	return n.addEventListener("scroll", i, { passive: !0 }), () => {
		n.removeEventListener("scroll", i), r !== void 0 && cancelAnimationFrame(r);
	};
}, iu = ({ nestedVariant: e, withHasMore: t, withAddRowActions: n, isSticky: r }) => {
	let [i, a] = J(null), [o, s] = J(null), [c, l] = J(0), u = q(null), d = q(null), f = W((e) => {
		u.current = e, e && a(e);
	}, [a]), p = W((e) => {
		d.current = e, e && s(e);
	}, [s]);
	return Ln(() => {
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
		let y = r ? ru(i, h) : void 0;
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
}, au = kn(void 0), ou = ({ children: e, defaultExpanded: t = !1, currentFilters: n, currentSortings: r, currentNavigationFilters: i }) => {
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
	return /* @__PURE__ */ X(au.Provider, {
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
}, su = () => {
	let e = Pn(au);
	if (!e) throw Error("useNestedDataContext must be used within NestedDataProvider");
	return e;
}, cu = (e) => e ? typeof e == "object" && "type" in e && e.type === "detailed" : !1, lu = (e) => e ? Array.isArray(e) ? e : e.records : [], uu = (e) => e && cu(e) ? e?.type ?? "basic" : "basic", du = ({ rowId: e, item: t, source: n }) => {
	let { fetchedData: r, updateFetchedData: i, resetGeneration: a } = su(), o = r?.[e], s = lu(o), [c, l] = J(s), [u, d] = J(o?.paginationInfo), [f, p] = J(!1), [m, h] = J(uu(o)), g = q(new Map(s.length > 0 ? [[0, s]] : [])), _ = q({
		page: o?.paginationInfo?.currentPage ?? 0,
		type: uu(o),
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
		let r = lu(n);
		g.current.set(t, r);
		let a = [...g.current.entries()].sort(([e], [t]) => e - t).flatMap(([, e]) => e);
		l(a), t >= _.current.page && (_.current = {
			page: t,
			type: uu(n),
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
		let i = "subscribe" in r ? r : Ye(r);
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
}, fu = (e, t, n, r) => {
	let [i, a] = J(!1), o = r?.stickyTopOffset ?? 40;
	return Ln(() => {
		if (!e) {
			a(!1);
			return;
		}
		let r = t.current;
		if (!r) {
			a(!0);
			return;
		}
		let i = nu(r);
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
}, pu = jn((e, t) => {
	let n = q(null), r = e.rowRef?.current;
	Ln(() => {
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
	return /* @__PURE__ */ X(tu, {
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
}), mu = jn((e, t) => {
	let n = e.addRowActions.map((e) => ({
		label: e.label,
		icon: e.icon,
		description: e.description,
		onClick: e.onClick,
		loading: e.loading,
		disabled: e.disabled
	}));
	return /* @__PURE__ */ X(pu, {
		...e,
		ref: t,
		nestedRowPropsOverride: { onAddRow: {
			actions: n,
			label: e.addRowLabel
		} }
	});
});
mu.displayName = "AddRowRow";
var hu = jn((e, t) => /* @__PURE__ */ X(pu, {
	...e,
	ref: t,
	nestedRowPropsOverride: { onLoadMoreChildren: e.onLoadMoreChildren }
})), gu = jn(({ rowRef: e, rowIndex: t, source: n, item: r, columns: i, frozenColumnsLeft: a, nestedRowProps: o, groupIndex: s, onCheckedChange: c, selectedItems: l, checkColumnWidth: u, tableWithChildren: d, shouldHideBorder: f, fromVisualization: p, headerGroups: m }, h) => {
	let g = q(null), _ = e?.current;
	Ln(() => {
		if (g.current && _) {
			let t = e.current.getBoundingClientRect().height;
			g.current.style.height = `${t}px`;
		}
	}, [_, e]);
	let v = o?.depth ?? 0, y = (e) => {
		g.current = e, typeof h == "function" && h(e);
	};
	return /* @__PURE__ */ X(tu, {
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
}), _u = jn(({ rowRef: e, ...t }, n) => {
	let r = t.source.childrenCount?.({
		item: t.item,
		pagination: t.paginationInfo
	}), i = t.paginationInfo ? t.paginationInfo.total ? Math.min(t.paginationInfo.perPage, t.paginationInfo.total - t.paginationInfo.currentPage * t.paginationInfo.perPage) : t.paginationInfo.perPage : void 0, a = r ?? i ?? 5;
	return /* @__PURE__ */ X(Y, { children: Array.from({ length: a }).map((r, i) => {
		let o = i !== a - 1 || t.shouldHideBorder;
		return /* @__PURE__ */ X(gu, {
			ref: n,
			rowRef: e,
			rowIndex: i,
			...t,
			shouldHideBorder: o
		}, `row-loading-${i}`);
	}) });
}), vu = (e) => e ? (Array.isArray(e) ? e : [e]).filter((e) => e !== void 0) : [], yu = (e, t) => {
	let n = q(null), r = q(null), i = kl(), a = `${e.nestedRowProps?.depth ?? 0}-${"id" in e.item ? e.item.id + "-" + e.index : e.index}`, { expandedRowIds: o, setRowExpanded: s, isExpandedByDefault: c, resetGeneration: l } = su(), u = o[a] ?? c(e.item, e.nestedRowProps?.depth ?? 0), { children: d, loadChildren: f, isLoading: p, childrenType: m, paginationInfo: h } = du({
		rowId: a,
		item: e.item,
		source: e.source
	}), g = u && p, _ = u, v = u && h?.hasMore, y = u && !p ? vu(i?.addNestedRowActions?.(e.item)) : [], b = y.length > 0, x = (e.nestedRowProps?.depth ?? 0) === 0, { isSticky: S } = fu(u && x, n, r), { calculatedHeight: C, setFirstChildRef: w, setLastChildRef: T } = iu({
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
		/* @__PURE__ */ X(tu, {
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
				let i = /* @__PURE__ */ An(Su, {
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
				let t = !l && A, i = /* @__PURE__ */ An(tu, {
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
		g && /* @__PURE__ */ X(_u, {
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
		v && !p && /* @__PURE__ */ X(hu, {
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
		b && /* @__PURE__ */ X(mu, {
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
}, bu = (e, t) => /* @__PURE__ */ X(xu, {
	...e,
	ref: t
}), xu = jn(yu), Su = jn(bu), Cu = jn((e, t) => {
	let n = !!e.source.itemsWithChildren?.(e.item), r = e.nestedRowProps?.hasLoadedChildren === void 0 || e.nestedRowProps.hasLoadedChildren;
	return X(n && r ? Su : tu, {
		...e,
		ref: t
	});
});
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/Table/hooks/useAddedRowKeys.ts
function wu(e, t) {
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
var Tu = (e, t, n, r = !0) => {
	Ln(() => {
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
}, Eu = () => {
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
}, Du = (e) => e.locked ?? (!e.sortable && !e.canHide && !e.disabledReason), Ou = (e) => !!e.sortable && !Du(e), ku = (e, t) => {
	let n = t.filter(Ou), r = e.filter(Ou).length;
	if (n.length !== r) return e;
	let i = 0;
	return e.map((e) => Ou(e) ? n[i++] : e);
}, Au = ({ item: e, onChangeVisibility: t, onRemove: n, onLockedChange: r, allowSorting: i, allowHiding: a, isFirst: s, isLast: c }) => {
	let l = y(), d = I("group flex items-center gap-2 text-medium text-sm pr-4", s && "pt-1", c && "pb-1"), f = Jn(), p = Du(e), m = Ou(e), h = !!e.removable && !p && !!n, g = !!e.lockable && !p && !!r, _ = !!e.lockable && p && !!r, v = q(null), b = q(null), x = q(null), S = q(!1), C = (e) => {
		let t = S.current || e.detail === 0;
		return S.current = !1, t;
	}, w = (e) => {
		(e.key === "Enter" || e.key === " ") && (S.current = !0);
	};
	G(() => {
		let e = x.current, t = e === "lock" && g ? v.current : e === "unlock" && _ ? b.current : null;
		t && (x.current = null, t.focus());
	}, [g, _]);
	let T = /* @__PURE__ */ Z("div", {
		className: d,
		children: [
			(i || e.showLockState) && /* @__PURE__ */ X("div", {
				className: I("flex shrink-0 items-center justify-center text-f1-icon", m && "cursor-grab"),
				style: { width: _ ? "28px" : "20px" },
				onPointerDown: (e) => {
					m && f.start(e);
				},
				children: m ? /* @__PURE__ */ X(u, {
					icon: de,
					size: "xs"
				}) : _ ? /* @__PURE__ */ X("span", {
					onKeyDown: w,
					onPointerDown: () => {
						S.current = !1;
					},
					children: /* @__PURE__ */ X(je, {
						variant: "ghost",
						size: "sm",
						compact: !0,
						hideLabel: !0,
						icon: sn,
						label: l.t("collections.table.settings.unlockColumn", { label: e.label }),
						ref: b,
						onClick: (t) => {
							x.current = C(t) ? "lock" : null, r?.(e, !1);
						}
					})
				}) : e.disabledReason ? null : /* @__PURE__ */ X(u, {
					icon: sn,
					size: "sm"
				})
			}),
			/* @__PURE__ */ X("span", {
				className: I("flex-1 min-w-0", m ? "text-f1-foreground" : "text-f1-foreground-secondary"),
				children: /* @__PURE__ */ X(o, { children: e.label })
			}),
			(g || h) && /* @__PURE__ */ X("div", {
				"data-column-actions": !0,
				className: "shrink-0 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100",
				children: /* @__PURE__ */ Z("div", {
					className: "flex items-center",
					children: [g && /* @__PURE__ */ X("span", {
						onKeyDown: w,
						onPointerDown: () => {
							S.current = !1;
						},
						children: /* @__PURE__ */ X(je, {
							variant: "ghost",
							size: "sm",
							compact: !0,
							hideLabel: !0,
							icon: sn,
							label: l.t("collections.table.settings.lockColumn", { label: e.label }),
							ref: v,
							onClick: (t) => {
								x.current = C(t) ? "unlock" : null, r?.(e, !0);
							}
						})
					}), h && /* @__PURE__ */ X(je, {
						variant: "ghost",
						size: "sm",
						compact: !0,
						hideLabel: !0,
						icon: we,
						label: l.collections.table.settings.removeColumn,
						onClick: () => n?.(e)
					})]
				})
			}),
			a && (e.disabledReason ? /* @__PURE__ */ X(nn, {
				tooltip: e.disabledReason,
				children: /* @__PURE__ */ X("span", {
					className: "inline-flex cursor-not-allowed",
					children: /* @__PURE__ */ X(ut, {
						checked: !1,
						title: e.label,
						hideLabel: !0,
						disabled: !0
					})
				})
			}) : /* @__PURE__ */ X(ut, {
				checked: e.visible,
				onCheckedChange: (n) => {
					t({
						...e,
						visible: n
					});
				},
				title: e.label,
				hideLabel: !0,
				disabled: !e.canHide || p
			}))
		]
	});
	return m ? /* @__PURE__ */ X(rr, {
		value: e,
		drag: "y",
		dragElastic: .1,
		whileDrag: { scale: 1.05 },
		dragListener: !1,
		dragControls: f,
		children: T
	}) : /* @__PURE__ */ X("li", { children: T });
}, ju = ({ items: e, onChange: t, onRemove: n, onLockedChange: r, allowSorting: i, allowHiding: a }) => {
	let o = (n) => {
		t?.(e.map((e) => e.id === n.id ? n : e));
	};
	return /* @__PURE__ */ X(Qn, {
		className: "flex flex-1 select-none list-none flex-col gap-2",
		values: e,
		onReorder: (n) => {
			t?.(ku(e, n));
		},
		axis: "y",
		layoutScroll: !0,
		children: e.map((t, s) => /* @__PURE__ */ X(Au, {
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
}, Mu = (e, t) => {
	let n = new Set(t.map((e) => e.id)), r = new Set(t.filter((e) => e.locked).map((e) => e.id)), i = t.filter((e) => !e.locked).map((e) => e.id), a = 0, o = e.filter((e) => n.has(e)).map((e) => r.has(e) ? e : i[a++]), s = new Set(o);
	return [...o, ...t.map((e) => e.id).filter((e) => !s.has(e))];
}, Nu = (e, t, n = !1) => {
	let r = !t && n ? [...e].reverse().find((e) => !e.locked && e.visible && e.canHide) : void 0;
	return e.map((e) => ({
		...e,
		visible: e.id === r?.id ? !0 : e.canHide ? t : e.visible
	}));
}, Pu = ({ items: e, visualizationKey: t, allowSorting: n, allowHiding: r, onAddColumn: i, onRemoveColumn: a, onLockedColumnChange: o, orderBaseline: s, keepOneUnlockedVisible: c = !1 }) => {
	let l = y(), { setVisualizationSettings: u } = dc(), d = (e) => {
		u(t, (t) => ({
			...t,
			order: s ? Mu(s, e) : e.map((e) => e.id),
			hidden: e.filter((e) => !e.visible).map((e) => e.id)
		}));
	}, f = (t) => {
		d(Nu(e, t, c));
	}, p = r && e.filter((e) => e.canHide).length > 1;
	return /* @__PURE__ */ Z("div", {
		className: "relative -mr-2 flex flex-col gap-2",
		children: [i && /* @__PURE__ */ X("div", {
			className: "flex",
			children: /* @__PURE__ */ X(je, {
				variant: "ghost",
				size: "sm",
				icon: tt,
				label: l.collections.table.settings.addColumn,
				onClick: i
			})
		}), /* @__PURE__ */ Z(Ct, {
			className: "[&_[data-scroll-container]]:max-h-56",
			children: [/* @__PURE__ */ X(ju, {
				items: e,
				onChange: d,
				onRemove: a ? (e) => a(e.id) : void 0,
				onLockedChange: o ? (e, t) => o(e.id, t) : void 0,
				allowSorting: n,
				allowHiding: r
			}), p && /* @__PURE__ */ Z("div", {
				className: "sticky bottom-0 flex justify-between bg-f1-background/80 p-2 pl-0 backdrop-blur-sm",
				children: [/* @__PURE__ */ X(Ne, {
					variant: "outline",
					size: "sm",
					label: l.collections.table.settings.showAllColumns,
					onClick: () => f(!0)
				}), /* @__PURE__ */ X(Ne, {
					variant: "ghost",
					size: "sm",
					label: l.collections.table.settings.hideAllColumns,
					onClick: () => f(!1)
				})]
			})]
		})]
	});
}, Fu = ({ columns: e, frozenColumns: t, allowSorting: n, allowHiding: r, visualizationKey: i = "table", onAddColumn: a, onRemoveColumn: o, lockedColumnIds: s, onLockedColumnIdsChange: c }) => {
	let { settings: l } = dc(), u = l.visualization[i], d = s !== void 0 || !!c, { columnsWithStatus: f, savedOrder: p, managedLockedColumnIds: m } = Hl(e, t, u, n, r, s, d), h = K(() => {
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
	return /* @__PURE__ */ X(Pu, {
		items: h,
		visualizationKey: i,
		allowSorting: n,
		allowHiding: r,
		onAddColumn: a,
		onRemoveColumn: o,
		onLockedColumnChange: c ? (e, t) => {
			c(zl(m, e, t));
		} : void 0,
		orderBaseline: d ? p : void 0,
		keepOneUnlockedVisible: d
	});
}, Iu = (e) => !e.allowColumnHiding && !e.allowColumnReordering && !e.onAddColumn && !e.onRemoveColumn && !e.onLockedColumnIdsChange ? null : /* @__PURE__ */ X(Fu, {
	columns: e.columns,
	frozenColumns: e.frozenColumns || 0,
	allowSorting: e.allowColumnReordering ?? !1,
	allowHiding: e.allowColumnHiding ?? !1,
	visualizationKey: e.visualizationKey,
	onAddColumn: e.onAddColumn,
	onRemoveColumn: e.onRemoveColumn,
	lockedColumnIds: e.lockedColumnIds,
	onLockedColumnIdsChange: e.onLockedColumnIdsChange
}), Lu = (e) => e ? (Array.isArray(e) ? e : [e]).filter((e) => e !== void 0) : [], Ru = ({ text: e, count: t }) => {
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
}, zu = ({ columns: e, source: t, frozenColumns: n = 0, defaultExpanded: r, onSelectItems: i, onLoadData: a, onLoadError: o, allowColumnHiding: s, allowColumnReordering: c, lockedColumnIds: l, onLockedColumnIdsChange: d, referenceRowType: f, boldRootRows: p, headerGroups: m, onHeaderGroupCollapsedChange: h, bordered: g, rowWrapper: _, cellRenderer: v, showItemActions: b, visualizationSettings: x, fromVisualization: S = "table", summaryPlaceholder: T = "-" }) => {
	let { t: E, ...D } = y(), O = kl(), [k] = J(() => C.create(Cu)), { settings: A } = dc(), j = l !== void 0 || !!d, { columns: M, stickyColumnIds: N } = Hl(e, n, x ?? A.visualization?.table, c, s, l, j), { columns: P, headerGroups: R, toggleHeaderGroup: z, collapsingCellClasses: B, collapseTransitions: ee, settleHeaderGroup: te } = Xl(M, {
		headerGroups: m,
		onCollapsedChange: h,
		preservedColumnIds: K(() => new Set(N), [N])
	}), V = q(null);
	Tu(V, ee, te);
	let { data: H, paginationInfo: U, setPage: ne, isInitialLoading: re, isLoadingMore: ie, loadMore: ae, summaries: oe, committedQuery: se } = dl(t, { onError: (e) => {
		o(e);
	} }), { currentSortings: ue, setCurrentSortings: de, isLoading: fe } = t, pe = b !== !1 && !!t.itemActions, me = S === "editableTable", he = me ? 1 : 2, ge = K(() => b === !1 ? {
		...t,
		itemActions: void 0
	} : t, [t, b]), { loadingIndicatorRef: _e } = El(U, fe, ie, ae);
	G(() => {
		a({
			totalItems: U?.total || H.records.length,
			filters: t.currentFilters,
			search: t.currentSearch,
			isInitialLoading: re,
			data: H.records
		});
	}, [U?.total, H.records]);
	let ve = N.length, ye = (e, t) => "id" in e && e.id !== void 0 && e.id !== null ? `id:${String(e.id)}` : `index:${String(t)}`, be = wu(H?.type === "flat" ? H.records.map((e, t) => `row-${ye(e, t)}`) : [], se), xe = Eu(), { selectedItems: Se, allSelectedStatus: Ce, groupAllSelectedStatus: we, handleSelectItemChange: Te, handleSelectAll: Ee, handleSelectAllItems: De, handleSelectGroupChange: Oe } = Ue({
		data: H,
		paginationInfo: U,
		source: t,
		onSelectItems: i,
		selectionMode: "multi",
		selectedState: t.defaultSelectedItems,
		getRenderedSelectableEntries: xe.getEntries,
		renderedSelectableCount: xe.ids.length
	}), ke = K(() => !oe || !t.summaries ? null : {
		data: oe,
		sticky: !0,
		label: t.summaries?.label
	}, [oe, t.summaries]), Ae = (e, t, n) => {
		if (!(!e || !t)) return n === null ? "none" : n.field === e ? n.order : "none";
	}, je = (e) => e == null || e === "", Pe = (e) => e ?? T, Fe = (e) => {
		de(() => !ue || ue.field !== e ? {
			field: e,
			order: "asc"
		} : ue.order === "asc" ? {
			field: e,
			order: "desc"
		} : null);
	}, Le = t.grouping?.collapsible, Re = t.grouping?.defaultOpenGroups, { openGroups: Be, setGroupOpen: Ve } = Ie(H?.type === "grouped" ? H.groups : [], Re), We = P.length + +!!pe + +!!t.selectable, { getStickyPosition: Ge, checkColumnWidth: Ke } = Zl(ve, P, !!t.selectable), qe = H?.records.some((e) => t.itemsWithChildren?.(e));
	if (re) return /* @__PURE__ */ X(Po.Skeleton, { columns: We });
	t.sortings || P.forEach((e) => {
		e.sorting && console.warn("Sorting is defined on a column but no sortings are provided in the data source");
	});
	let Je = Ce.selectedCount > 0 || Ce.checked, Ye = xe.ids.length > 0 ? xe.ids : (H?.records ?? []).map((e) => t.selectable?.(e)).filter((e) => e !== void 0), Xe = Ye.length > 0 && Ye.every((e) => Se.has(e)), Ze = Math.max(U?.total ?? 0, Ye.length), Qe = Ce.checked && !Ce.indeterminate || Xe, $e = !!t.allPagesSelection && (!Ce.checked || Ce.indeterminate) && U?.total !== void 0 && Ze > Ce.selectedCount, et = P.length + (pe ? he : 0), nt = Ce.selectedCount === 1 ? D.status.selected.singular : D.status.selected.plural;
	return /* @__PURE__ */ X("div", {
		className: "flex h-full min-h-0 flex-col gap-4",
		children: /* @__PURE__ */ Z(ou, {
			defaultExpanded: r,
			currentFilters: t.currentFilters,
			currentSortings: t.currentSortings,
			currentNavigationFilters: t.currentNavigationFilters,
			children: [/* @__PURE__ */ X("div", {
				ref: V,
				className: I("min-h-0", g && "overflow-hidden rounded-lg border border-solid border-f1-border-secondary [&_thead::before]:!bg-transparent [&_thead_th>div:first-child]:!bg-transparent [&_tbody>tr:last-child::after]:!bg-transparent"),
				children: /* @__PURE__ */ Z(Po, {
					loading: fe,
					children: [
						/* @__PURE__ */ Z(Ao, {
							sticky: !0,
							children: [
								R ? /* @__PURE__ */ Z(jo, { children: [
									t.selectable && /* @__PURE__ */ X(ko, {
										align: "left",
										sticky: { left: 0 },
										width: Ke,
										className: I("border-0 border-r border-solid border-f1-border-secondary", "hover:after:bg-transparent"),
										children: /* @__PURE__ */ X("div", { className: "ml-3.5 flex w-full items-center justify-start" })
									}),
									R.map((e, t) => {
										let n = e.type === "group" && e.collapsible, r = I(Wl, !n && "hover:after:bg-transparent"), i = e.columnIndices.every((e) => P[e].align === "right") ? "right" : "left";
										return e.type === "group" ? /* @__PURE__ */ X(ko, {
											align: i,
											colSpan: e.colSpan,
											className: r,
											highlighted: e.columnIndices.some((e) => P[e].highlighted),
											onClick: e.collapsible ? () => z(e.id) : void 0,
											children: e.collapsible ? /* @__PURE__ */ Z("button", {
												type: "button",
												"aria-expanded": !e.collapsed,
												className: I("flex max-w-full items-center gap-1 rounded-xs font-medium text-f1-foreground-secondary", i === "right" && "flex-row-reverse", F()),
												children: [/* @__PURE__ */ X("span", {
													className: "truncate",
													children: e.label
												}), /* @__PURE__ */ X(u, {
													"aria-hidden": "true",
													size: "sm",
													icon: e.collapsed ? le : ce
												})]
											}) : e.label
										}, `header-group-${e.id}-${t}`) : /* @__PURE__ */ X(ko, {
											align: i,
											className: r,
											width: P[e.columnIndices[0]].width,
											minWidth: P[e.columnIndices[0]].minWidth,
											highlighted: !!P[e.columnIndices[0]].highlighted,
											sticky: Ge(e.columnIndices[0]),
											children: /* @__PURE__ */ X("span", {})
										}, `header-ungrouped-${e.columnIndices[0]}`);
									}),
									pe && (me ? /* @__PURE__ */ X(ko, {
										width: "fit",
										sticky: { right: 0 },
										children: /* @__PURE__ */ X("span", {
											className: "sr-only",
											children: D.collections.actions.actions
										})
									}, "actions") : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ X(ko, {
										hidden: !0,
										width: 68,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: /* @__PURE__ */ X("span", {})
									}, "actions")] }))
								] }) : null,
								/* @__PURE__ */ Z(jo, { children: [
									t.selectable && /* @__PURE__ */ X(ko, {
										width: Ke,
										sticky: { left: 0 },
										align: "left",
										className: R ? I("[&>div:first-child]:hidden", "border-0 border-r border-solid border-f1-border-secondary") : void 0,
										children: /* @__PURE__ */ X("div", {
											className: "ml-3.5 flex w-full items-center justify-start",
											children: /* @__PURE__ */ X(Dt, {
												checked: Qe,
												indeterminate: Je && !Qe,
												onCheckedChange: Ee,
												title: D.actions.selectAll,
												hideLabel: !0,
												disabled: H?.records.length === 0
											})
										})
									}),
									P.map(({ sorting: e, label: n, ...r }, i) => {
										let a = R?.find((e) => e.type === "group" && e.columnIndices.includes(i)), o = !!R && (!a || a.columnIndices[a.columnIndices.length - 1] === i);
										return /* @__PURE__ */ X(ko, {
											sortState: Ae(e, t.sortings, ue),
											width: r.width,
											align: r.align,
											sticky: Ge(i),
											...r,
											hidden: !1,
											className: I(R && "[&>div:first-child]:hidden", o && "border-0 border-r border-solid border-f1-border-secondary", S === "editableTable" && (i !== P.length - 1 || pe) && "border-0 border-r-[1px] border-solid border-f1-border-secondary", B.get(Rl({
												id: r.id,
												label: n
											}))) || void 0,
											onSortClick: e ? () => {
												e && Fe(e);
											} : void 0,
											children: n
										}, `table-head-${i}`);
									}),
									pe && (me ? /* @__PURE__ */ X(ko, {
										width: "fit",
										sticky: { right: 0 },
										children: /* @__PURE__ */ X("span", {
											className: "sr-only",
											children: D.collections.actions.actions
										})
									}, "actions") : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ X(ko, {
										width: 68,
										hidden: !0,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: D.collections.actions.actions
									}, "actions")] }))
								] }),
								Je && t.selectable && !!t.allPagesSelection && /* @__PURE__ */ X(jo, { children: /* @__PURE__ */ X("th", {
									colSpan: 1 + et,
									className: "h-11 border-0 border-t border-solid border-f1-border-secondary bg-f1-background-secondary px-5",
									children: /* @__PURE__ */ Z("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ X(Ru, {
											text: Ce.checked && !Ce.indeterminate ? E("status.selected.allItemsSelected", { total: Ze }) : Xe ? E("status.selected.allOnPage", { count: Ce.selectedCount }) : `${Ce.selectedCount} ${nt}`,
											count: Ce.checked && !Ce.indeterminate ? Ze : Ce.selectedCount
										}), $e && /* @__PURE__ */ X(Ne, {
											variant: "outline",
											label: E("status.selected.selectAllItems", { total: Ze }),
											onClick: () => De(!0),
											size: "sm"
										})]
									})
								}) })
							]
						}),
						/* @__PURE__ */ Z(ao, { children: [
							H?.type === "grouped" && H.groups.map((e, n) => {
								let r = e.itemCount;
								return /* @__PURE__ */ Z(Dn, { children: [/* @__PURE__ */ Z(jo, {
									sticky: !0,
									children: [
										t.selectable && /* @__PURE__ */ X(Eo, {
											width: Ke,
											sticky: { left: 0 },
											children: /* @__PURE__ */ X("div", {
												className: "pointer-events-auto ml-1.5 flex items-center justify-start",
												children: /* @__PURE__ */ X(Dt, {
													checked: !!Al(we[e.key]),
													indeterminate: Al(we[e.key]) === "indeterminate",
													title: D.actions.selectAll,
													hideLabel: !0,
													onCheckedChange: (t) => Oe(e, t)
												})
											})
										}),
										/* @__PURE__ */ X(Eo, {
											sticky: { left: t.selectable ? Ke : 0 },
											colSpan: ve || 1,
											children: /* @__PURE__ */ X(He, {
												selectable: !1,
												showOpenChange: Le,
												label: e.label,
												itemCount: r,
												open: Be[e.key],
												onOpenChange: (t) => Ve(e.key, t)
											})
										}),
										P.length - (ve || 1) > 0 && /* @__PURE__ */ X(Eo, {
											colSpan: P.length - (ve || 1),
											children: "\xA0"
										})
									]
								}, `group-header-${e.key}`), /* @__PURE__ */ X(w, { children: k && (!Le || Be[e.key]) && e.records.map((e, t) => {
									let r = `row-${n}-${ye(e, t)}`, i = /* @__PURE__ */ X(k, {
										variants: dt(),
										initial: Le ? "hidden" : "visible",
										animate: "visible",
										exit: "hidden",
										custom: t,
										layout: !0,
										source: ge,
										item: e,
										index: t,
										groupIndex: n,
										onItemCheckedChange: Te,
										onCheckedChange: (t) => Te(e, t),
										selectedItems: Se,
										columns: P,
										frozenColumnsLeft: ve,
										checkColumnWidth: Ke,
										referenceRowType: f,
										rowWrapper: _,
										cellRenderer: v,
										headerGroups: R,
										collapsingCellClasses: B,
										fromVisualization: S,
										registerSelectable: xe.register,
										unregisterSelectable: xe.unregister
									}, r);
									return _ ? /* @__PURE__ */ X(_, {
										item: e,
										index: t,
										children: i
									}, r) : i;
								}) }, `group-animate-${n}`)] }, `group-${e.key}`);
							}),
							H?.type === "flat" && H.records.map((e, t) => {
								let n = `row-${ye(e, t)}`, r = be.has(n), i = /* @__PURE__ */ X(k, {
									variants: dt(),
									initial: r ? "hidden" : !1,
									animate: "visible",
									custom: t,
									layout: !0,
									isNew: r,
									groupIndex: 0,
									source: ge,
									item: e,
									index: t,
									onItemCheckedChange: Te,
									onCheckedChange: (t) => Te(e, t),
									selectedItems: Se,
									columns: P,
									frozenColumnsLeft: ve,
									checkColumnWidth: Ke,
									tableWithChildren: qe,
									referenceRowType: f,
									boldRootRows: p,
									rowWrapper: _,
									cellRenderer: v,
									fromVisualization: S,
									headerGroups: R,
									collapsingCellClasses: B,
									registerSelectable: xe.register,
									unregisterSelectable: xe.unregister
								}, n);
								return _ ? /* @__PURE__ */ X(_, {
									item: e,
									index: t,
									children: i
								}, n) : i;
							}),
							U?.type === "infinite-scroll" && ie && Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ X(jo, { children: Array.from({ length: We }).map((e, n) => /* @__PURE__ */ X(Eo, { children: /* @__PURE__ */ X(Me, { className: "h-4 w-full" }) }, `skeleton-cell-${t}-${n}`)) }, `skeleton-row-${t}`)),
							ze(U) && U.hasMore && /* @__PURE__ */ X("tr", { children: /* @__PURE__ */ X("td", {
								colSpan: P.length + +!!t.selectable + +!!pe,
								ref: _e,
								className: "h-10",
								"aria-hidden": "true"
							}) })
						] }),
						(() => {
							let e = Lu(O?.addRowActions?.());
							return !ke && e.length === 0 ? null : /* @__PURE__ */ Z(Fo, { children: [ke && /* @__PURE__ */ Z(jo, {
								className: I(ke.sticky && "sticky bottom-0 z-30 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background", "font-medium"),
								children: [
									t.selectable && /* @__PURE__ */ X(Eo, {
										width: Ke,
										sticky: { left: 0 },
										children: ke.label && /* @__PURE__ */ X("div", {
											className: "font-medium text-f1-foreground-secondary",
											children: ke.label
										})
									}),
									P.map((e, n) => /* @__PURE__ */ X(Eo, {
										firstCell: n === 0,
										width: e.width,
										sticky: Ge(n),
										highlighted: !!e.highlighted,
										className: I(me && (n !== P.length - 1 || pe) && "border-0 border-r-[1px] border-solid border-f1-border-secondary", B.get(Rl(e))),
										children: n === 0 && !t.selectable && ke.label ? /* @__PURE__ */ X("div", {
											className: "font-medium text-f1-foreground-secondary",
											children: ke.label
										}) : /* @__PURE__ */ X("div", {
											className: I(e.align === "right" ? "justify-end" : "", "flex", "min-h-6 items-center"),
											children: (() => {
												let n = Pe(e.summaryPlaceholder);
												if (e.summary && t.summaries && t.summaries[e.summary]?.type === "sum") {
													let t = ke.data[e.summary];
													return je(t) ? /* @__PURE__ */ X("span", {
														className: "text-f1-foreground-secondary",
														children: n
													}) : /* @__PURE__ */ Z("div", {
														className: "flex gap-1",
														children: [/* @__PURE__ */ X("span", {
															className: "text-f1-foreground-secondary",
															children: D.collections.summaries.types.sum
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
									pe && (me ? /* @__PURE__ */ X(Eo, {
										sticky: { right: 0 },
										children: ""
									}, "summary-actions") : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ X(Eo, {
										width: 68,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: ""
									}, "summary-actions")] }))
								]
							}), e.length > 0 && /* @__PURE__ */ X(jo, { children: /* @__PURE__ */ X(Eo, {
								colSpan: P.length + +!!t.selectable + (pe ? he : 0),
								className: "h-[48px] align-middle",
								children: /* @__PURE__ */ X("div", {
									className: "pointer-events-auto flex h-full items-center",
									onClick: (e) => e.stopPropagation(),
									onMouseDownCapture: (e) => e.stopPropagation(),
									children: e.length === 1 ? /* @__PURE__ */ X(Ne, {
										variant: "outline",
										icon: e[0].icon ?? tt,
										label: e[0].label,
										onClick: e[0].onClick,
										loading: e[0].loading,
										disabled: e[0].disabled,
										size: "sm"
									}) : e.some((e) => e.description !== void 0) ? /* @__PURE__ */ X(L, {
										mode: "dropdown",
										variant: "outline",
										size: "sm",
										trigger: O?.addRowActionsLabel,
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
									}) : /* @__PURE__ */ X(L, {
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
			}), /* @__PURE__ */ X(xl, {
				paginationInfo: U,
				setPage: ne,
				className: "pb-4"
			})]
		})
	});
}, Bu = ({ onCellChange: e, addRowActions: t, addRowActionsLabel: n, addNestedRowActions: r, addNestedRowActionsLabel: i, ...a }) => {
	let { settings: o } = dc(), s = q(e);
	s.current = e;
	let c = K(() => function({ item: e, children: t }) {
		return /* @__PURE__ */ X(us, {
			item: e,
			onCellChange: (...e) => s.current?.(...e),
			children: t
		});
	}, []);
	return /* @__PURE__ */ X(Ol, {
		addRowActions: t,
		addRowActionsLabel: n,
		addNestedRowActions: r,
		addNestedRowActionsLabel: i,
		children: /* @__PURE__ */ X(zu, {
			...a,
			rowWrapper: c,
			cellRenderer: ps,
			visualizationSettings: o.visualization?.editableTable,
			fromVisualization: "editableTable"
		})
	});
};
//#endregion
//#region ../../node_modules/.pnpm/classcat@5.0.5/node_modules/classcat/index.js
function Vu(e) {
	if (typeof e == "string" || typeof e == "number") return "" + e;
	let t = "";
	if (Array.isArray(e)) for (let n = 0, r; n < e.length; n++) (r = Vu(e[n])) !== "" && (t += (t && " ") + r);
	else for (let n in e) e[n] && (t += (t && " ") + n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js
var Hu = { value: () => {} };
function Uu() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new Wu(n);
}
function Wu(e) {
	this._ = e;
}
function Gu(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
Wu.prototype = Uu.prototype = {
	constructor: Wu,
	on: function(e, t) {
		var n = this._, r = Gu(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = Ku(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = qu(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = qu(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new Wu(e);
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
function Ku(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function qu(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = Hu, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var Ju = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js
function Yu(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ju.hasOwnProperty(t) ? {
		space: Ju[t],
		local: e
	} : e;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/creator.js
function Xu(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function Zu(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function Qu(e) {
	var t = Yu(e);
	return (t.local ? Zu : Xu)(t);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js
function $u() {}
function ed(e) {
	return e == null ? $u : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/select.js
function td(e) {
	typeof e != "function" && (e = ed(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new Wf(r, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/array.js
function nd(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js
function rd() {
	return [];
}
function id(e) {
	return e == null ? rd : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectAll.js
function ad(e) {
	return function() {
		return nd(e.apply(this, arguments));
	};
}
function od(e) {
	e = typeof e == "function" ? ad(e) : id(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new Wf(r, i);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js
function sd(e) {
	return function() {
		return this.matches(e);
	};
}
function cd(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChild.js
var ld = Array.prototype.find;
function ud(e) {
	return function() {
		return ld.call(this.children, e);
	};
}
function dd() {
	return this.firstElementChild;
}
function fd(e) {
	return this.select(e == null ? dd : ud(typeof e == "function" ? e : cd(e)));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChildren.js
var pd = Array.prototype.filter;
function md() {
	return Array.from(this.children);
}
function hd(e) {
	return function() {
		return pd.call(this.children, e);
	};
}
function gd(e) {
	return this.selectAll(e == null ? md : hd(typeof e == "function" ? e : cd(e)));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/filter.js
function _d(e) {
	typeof e != "function" && (e = sd(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new Wf(r, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sparse.js
function vd(e) {
	return Array(e.length);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/enter.js
function yd() {
	return new Wf(this._enter || this._groups.map(vd), this._parents);
}
function bd(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
bd.prototype = {
	constructor: bd,
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
function xd(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/data.js
function Sd(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new bd(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function Cd(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new bd(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function wd(e) {
	return e.__data__;
}
function Td(e, t) {
	if (!arguments.length) return Array.from(this, wd);
	var n = t ? Cd : Sd, r = this._parents, i = this._groups;
	typeof e != "function" && (e = xd(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = Ed(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new Wf(o, r), o._enter = s, o._exit = c, o;
}
function Ed(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/exit.js
function Dd() {
	return new Wf(this._exit || this._groups.map(vd), this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/join.js
function Od(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/merge.js
function kd(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new Wf(s, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/order.js
function Ad() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sort.js
function jd(e) {
	e ||= Md;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new Wf(i, this._parents).order();
}
function Md(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/call.js
function Nd() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/nodes.js
function Pd() {
	return Array.from(this);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/node.js
function Fd() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/size.js
function Id() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/empty.js
function Ld() {
	return !this.node();
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/each.js
function Rd(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/attr.js
function zd(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Bd(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Vd(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function Hd(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Ud(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function Wd(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Gd(e, t) {
	var n = Yu(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Bd : zd : typeof t == "function" ? n.local ? Wd : Ud : n.local ? Hd : Vd)(n, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/window.js
function Kd(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js
function qd(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Jd(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function Yd(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function Xd(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? qd : typeof t == "function" ? Yd : Jd)(e, t, n ?? "")) : Zd(this.node(), e);
}
function Zd(e, t) {
	return e.style.getPropertyValue(t) || Kd(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/property.js
function Qd(e) {
	return function() {
		delete this[e];
	};
}
function $d(e, t) {
	return function() {
		this[e] = t;
	};
}
function ef(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function tf(e, t) {
	return arguments.length > 1 ? this.each((t == null ? Qd : typeof t == "function" ? ef : $d)(e, t)) : this.node()[e];
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/classed.js
function nf(e) {
	return e.trim().split(/^|\s+/);
}
function rf(e) {
	return e.classList || new af(e);
}
function af(e) {
	this._node = e, this._names = nf(e.getAttribute("class") || "");
}
af.prototype = {
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
function of(e, t) {
	for (var n = rf(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function sf(e, t) {
	for (var n = rf(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function cf(e) {
	return function() {
		of(this, e);
	};
}
function lf(e) {
	return function() {
		sf(this, e);
	};
}
function uf(e, t) {
	return function() {
		(t.apply(this, arguments) ? of : sf)(this, e);
	};
}
function df(e, t) {
	var n = nf(e + "");
	if (arguments.length < 2) {
		for (var r = rf(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? uf : t ? cf : lf)(n, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/text.js
function ff() {
	this.textContent = "";
}
function pf(e) {
	return function() {
		this.textContent = e;
	};
}
function mf(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function hf(e) {
	return arguments.length ? this.each(e == null ? ff : (typeof e == "function" ? mf : pf)(e)) : this.node().textContent;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/html.js
function gf() {
	this.innerHTML = "";
}
function _f(e) {
	return function() {
		this.innerHTML = e;
	};
}
function vf(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function yf(e) {
	return arguments.length ? this.each(e == null ? gf : (typeof e == "function" ? vf : _f)(e)) : this.node().innerHTML;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/raise.js
function bf() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function xf() {
	return this.each(bf);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/lower.js
function Sf() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Cf() {
	return this.each(Sf);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/append.js
function wf(e) {
	var t = typeof e == "function" ? e : Qu(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/insert.js
function Tf() {
	return null;
}
function Ef(e, t) {
	var n = typeof e == "function" ? e : Qu(e), r = t == null ? Tf : typeof t == "function" ? t : ed(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/remove.js
function Df() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Of() {
	return this.each(Df);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/clone.js
function kf() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Af() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jf(e) {
	return this.select(e ? Af : kf);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/datum.js
function Mf(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/on.js
function Nf(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function Pf(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Ff(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function If(e, t, n) {
	return function() {
		var r = this.__on, i, a = Nf(t);
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
function Lf(e, t, n) {
	var r = Pf(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? If : Ff, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/dispatch.js
function Rf(e, t, n) {
	var r = Kd(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function zf(e, t) {
	return function() {
		return Rf(this, e, t);
	};
}
function Bf(e, t) {
	return function() {
		return Rf(this, e, t.apply(this, arguments));
	};
}
function Vf(e, t) {
	return this.each((typeof t == "function" ? Bf : zf)(e, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/iterator.js
function* Hf() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js
var Uf = [null];
function Wf(e, t) {
	this._groups = e, this._parents = t;
}
function Gf() {
	return new Wf([[document.documentElement]], Uf);
}
function Kf() {
	return this;
}
Wf.prototype = Gf.prototype = {
	constructor: Wf,
	select: td,
	selectAll: od,
	selectChild: fd,
	selectChildren: gd,
	filter: _d,
	data: Td,
	enter: yd,
	exit: Dd,
	join: Od,
	merge: kd,
	selection: Kf,
	order: Ad,
	sort: jd,
	call: Nd,
	nodes: Pd,
	node: Fd,
	size: Id,
	empty: Ld,
	each: Rd,
	attr: Gd,
	style: Xd,
	property: tf,
	classed: df,
	text: hf,
	html: yf,
	raise: xf,
	lower: Cf,
	append: wf,
	insert: Ef,
	remove: Of,
	clone: jf,
	datum: Mf,
	on: Lf,
	dispatch: Vf,
	[Symbol.iterator]: Hf
};
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js
function qf(e) {
	return typeof e == "string" ? new Wf([[document.querySelector(e)]], [document.documentElement]) : new Wf([[e]], Uf);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/sourceEvent.js
function Jf(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/pointer.js
function Yf(e, t) {
	if (e = Jf(e), t === void 0 && (t = e.currentTarget), t) {
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
var Xf = { passive: !1 }, Zf = {
	capture: !0,
	passive: !1
};
function Qf(e) {
	e.stopImmediatePropagation();
}
function $f(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js
function ep(e) {
	var t = e.document.documentElement, n = qf(e).on("dragstart.drag", $f, Zf);
	"onselectstart" in t ? n.on("selectstart.drag", $f, Zf) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function tp(e, t) {
	var n = e.document.documentElement, r = qf(e).on("dragstart.drag", null);
	t && (r.on("click.drag", $f, Zf), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/constant.js
var np = (e) => () => e;
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/event.js
function rp(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
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
rp.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/drag.js
function ip(e) {
	return !e.ctrlKey && !e.button;
}
function ap() {
	return this.parentNode;
}
function op(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function sp() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function cp() {
	var e = ip, t = ap, n = op, r = sp, i = {}, a = Uu("start", "drag", "end"), o = 0, s, c, l, u, d = 0;
	function f(e) {
		e.on("mousedown.drag", p).filter(r).on("touchstart.drag", g).on("touchmove.drag", _, Xf).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function p(n, r) {
		if (!(u || !e.call(this, n, r))) {
			var i = y(this, t.call(this, n, r), n, r, "mouse");
			i && (qf(n.view).on("mousemove.drag", m, Zf).on("mouseup.drag", h, Zf), ep(n.view), Qf(n), l = !1, s = n.clientX, c = n.clientY, i("start", n));
		}
	}
	function m(e) {
		if ($f(e), !l) {
			var t = e.clientX - s, n = e.clientY - c;
			l = t * t + n * n > d;
		}
		i.mouse("drag", e);
	}
	function h(e) {
		qf(e.view).on("mousemove.drag mouseup.drag", null), tp(e.view, l), $f(e), i.mouse("end", e);
	}
	function g(n, r) {
		if (e.call(this, n, r)) {
			var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s, c;
			for (s = 0; s < o; ++s) (c = y(this, a, n, r, i[s].identifier, i[s])) && (Qf(n), c("start", n, i[s]));
		}
	}
	function _(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (r = 0; r < n; ++r) (a = i[t[r].identifier]) && ($f(e), a("drag", e, t[r]));
	}
	function v(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (u && clearTimeout(u), u = setTimeout(function() {
			u = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (Qf(e), a("end", e, t[r]));
	}
	function y(e, t, r, s, c, l) {
		var u = a.copy(), d = Yf(l || r, t), p, m, h;
		if ((h = n.call(e, new rp("beforestart", {
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
				case "drag": d = Yf(l || a, t), _ = o;
			}
			u.call(r, e, new rp(r, {
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
		return arguments.length ? (e = typeof t == "function" ? t : np(!!t), f) : e;
	}, f.container = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : np(e), f) : t;
	}, f.subject = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : np(e), f) : n;
	}, f.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : np(!!e), f) : r;
	}, f.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? f : e;
	}, f.clickDistance = function(e) {
		return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d);
	}, f;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js
var lp = 0, up = 0, dp = 0, fp = 1e3, pp, mp, hp = 0, gp = 0, _p = 0, vp = typeof performance == "object" && performance.now ? performance : Date, yp = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function bp() {
	return gp ||= (yp(xp), vp.now() + _p);
}
function xp() {
	gp = 0;
}
function Sp() {
	this._call = this._time = this._next = null;
}
Sp.prototype = Cp.prototype = {
	constructor: Sp,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? bp() : +n) + (t == null ? 0 : +t), !this._next && mp !== this && (mp ? mp._next = this : pp = this, mp = this), this._call = e, this._time = n, Op();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, Op());
	}
};
function Cp(e, t, n) {
	var r = new Sp();
	return r.restart(e, t, n), r;
}
function wp() {
	bp(), ++lp;
	for (var e = pp, t; e;) (t = gp - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--lp;
}
function Tp() {
	gp = (hp = vp.now()) + _p, lp = up = 0;
	try {
		wp();
	} finally {
		lp = 0, Dp(), gp = 0;
	}
}
function Ep() {
	var e = vp.now(), t = e - hp;
	t > fp && (_p -= t, hp = e);
}
function Dp() {
	for (var e, t = pp, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : pp = n);
	mp = e, Op(r);
}
function Op(e) {
	lp || (up &&= clearTimeout(up), e - gp > 24 ? (e < Infinity && (up = setTimeout(Tp, e - vp.now() - _p)), dp &&= clearInterval(dp)) : (dp ||= (hp = vp.now(), setInterval(Ep, fp)), lp = 1, yp(Tp)));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timeout.js
function kp(e, t, n) {
	var r = new Sp();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js
var Ap = Uu("start", "end", "cancel", "interrupt"), jp = [];
function Mp(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	Ip(e, n, {
		name: t,
		index: r,
		group: i,
		on: Ap,
		tween: jp,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function Np(e, t) {
	var n = Fp(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function Pp(e, t) {
	var n = Fp(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function Fp(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function Ip(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = Cp(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return kp(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (kp(function() {
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
function Lp(e, t) {
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
function Rp(e) {
	return this.each(function() {
		Lp(this, e);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js
function zp(e, t) {
	var n, r;
	return function() {
		var i = Pp(this, e), a = i.tween;
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
function Bp(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = Pp(this, e), o = a.tween;
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
function Vp(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = Fp(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? zp : Bp)(n, e, t));
}
function Hp(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = Pp(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return Fp(e, r).value[t];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/interpolate.js
function Up(e, t) {
	var n;
	return (typeof t == "number" ? ve : t instanceof ae ? fe : (n = ae(t)) ? (t = n, fe) : he)(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attr.js
function Wp(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Gp(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Kp(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function qp(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Jp(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Yp(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Xp(e, t) {
	var n = Yu(e), r = n === "transform" ? Nr : Up;
	return this.attrTween(e, typeof t == "function" ? (n.local ? Yp : Jp)(n, r, Hp(this, "attr." + e, t)) : t == null ? (n.local ? Gp : Wp)(n) : (n.local ? qp : Kp)(n, r, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attrTween.js
function Zp(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Qp(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function $p(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Qp(e, i)), n;
	}
	return i._value = t, i;
}
function em(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Zp(e, i)), n;
	}
	return i._value = t, i;
}
function tm(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = Yu(e);
	return this.tween(n, (r.local ? $p : em)(r, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/delay.js
function nm(e, t) {
	return function() {
		Np(this, e).delay = +t.apply(this, arguments);
	};
}
function rm(e, t) {
	return t = +t, function() {
		Np(this, e).delay = t;
	};
}
function im(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? nm : rm)(t, e)) : Fp(this.node(), t).delay;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/duration.js
function am(e, t) {
	return function() {
		Pp(this, e).duration = +t.apply(this, arguments);
	};
}
function om(e, t) {
	return t = +t, function() {
		Pp(this, e).duration = t;
	};
}
function sm(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? am : om)(t, e)) : Fp(this.node(), t).duration;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/ease.js
function cm(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		Pp(this, e).ease = t;
	};
}
function lm(e) {
	var t = this._id;
	return arguments.length ? this.each(cm(t, e)) : Fp(this.node(), t).ease;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/easeVarying.js
function um(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		Pp(this, e).ease = n;
	};
}
function dm(e) {
	if (typeof e != "function") throw Error();
	return this.each(um(this._id, e));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/filter.js
function fm(e) {
	typeof e != "function" && (e = sd(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new Vm(r, this._parents, this._name, this._id);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/merge.js
function pm(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new Vm(o, this._parents, this._name, this._id);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/on.js
function mm(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function hm(e, t, n) {
	var r, i, a = mm(t) ? Np : Pp;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function gm(e, t) {
	var n = this._id;
	return arguments.length < 2 ? Fp(this.node(), n).on.on(e) : this.each(hm(n, e, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/remove.js
function _m(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function vm() {
	return this.on("end.remove", _m(this._id));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/select.js
function ym(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = ed(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, Mp(l[f], t, n, f, l, Fp(u, n)));
	return new Vm(a, this._parents, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selectAll.js
function bm(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = id(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = Fp(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && Mp(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new Vm(a, o, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selection.js
var xm = Gf.prototype.constructor;
function Sm() {
	return new xm(this._groups, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/style.js
function Cm(e, t) {
	var n, r, i;
	return function() {
		var a = Zd(this, e), o = (this.style.removeProperty(e), Zd(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function wm(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Tm(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = Zd(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Em(e, t, n) {
	var r, i, a;
	return function() {
		var o = Zd(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), Zd(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function Dm(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = Pp(this, e), l = c.on, u = c.value[a] == null ? s ||= wm(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function Om(e, t, n) {
	var r = (e += "") == "transform" ? Mr : Up;
	return t == null ? this.styleTween(e, Cm(e, r)).on("end.style." + e, wm(e)) : typeof t == "function" ? this.styleTween(e, Em(e, r, Hp(this, "style." + e, t))).each(Dm(this._id, e)) : this.styleTween(e, Tm(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/styleTween.js
function km(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function Am(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && km(e, a, n)), r;
	}
	return a._value = t, a;
}
function jm(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, Am(e, t, n ?? ""));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/text.js
function Mm(e) {
	return function() {
		this.textContent = e;
	};
}
function Nm(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function Pm(e) {
	return this.tween("text", typeof e == "function" ? Nm(Hp(this, "text", e)) : Mm(e == null ? "" : e + ""));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/textTween.js
function Fm(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function Im(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && Fm(r)), t;
	}
	return r._value = e, r;
}
function Lm(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, Im(e));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/transition.js
function Rm() {
	for (var e = this._name, t = this._id, n = Hm(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = Fp(c, t);
		Mp(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new Vm(r, this._parents, e, n);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/end.js
function zm() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = Pp(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js
var Bm = 0;
function Vm(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Hm() {
	return ++Bm;
}
var Um = Gf.prototype;
Vm.prototype = {
	constructor: Vm,
	select: ym,
	selectAll: bm,
	selectChild: Um.selectChild,
	selectChildren: Um.selectChildren,
	filter: fm,
	merge: pm,
	selection: Sm,
	transition: Rm,
	call: Um.call,
	nodes: Um.nodes,
	node: Um.node,
	size: Um.size,
	empty: Um.empty,
	each: Um.each,
	on: gm,
	attr: Xp,
	attrTween: tm,
	style: Om,
	styleTween: jm,
	text: Pm,
	textTween: Lm,
	remove: vm,
	tween: Vp,
	delay: im,
	duration: sm,
	ease: lm,
	easeVarying: dm,
	end: zm,
	[Symbol.iterator]: Um[Symbol.iterator]
};
//#endregion
//#region ../../node_modules/.pnpm/d3-ease@3.0.1/node_modules/d3-ease/src/cubic.js
function Wm(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/transition.js
var Gm = {
	time: null,
	delay: 0,
	duration: 250,
	ease: Wm
};
function Km(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function qm(e) {
	var t, n;
	e instanceof Vm ? (t = e._id, e = e._name) : (t = Hm(), (n = Gm).time = bp(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && Mp(c, e, t, l, o, n || Km(c, t));
	return new Vm(r, this._parents, e, t);
}
Gf.prototype.interrupt = Rp, Gf.prototype.transition = qm;
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/constant.js
var Jm = (e) => () => e;
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/event.js
function Ym(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
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
function Xm(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
Xm.prototype = {
	constructor: Xm,
	scale: function(e) {
		return e === 1 ? this : new Xm(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new Xm(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Zm = new Xm(1, 0, 0);
Qm.prototype = Xm.prototype;
function Qm(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return Zm;
	return e.__zoom;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/noevent.js
function $m(e) {
	e.stopImmediatePropagation();
}
function eh(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/zoom.js
function th(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function nh() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function rh() {
	return this.__zoom || Zm;
}
function ih(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function ah() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function oh(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function sh() {
	var e = th, t = nh, n = oh, r = ih, i = ah, a = [0, Infinity], o = [[-Infinity, -Infinity], [Infinity, Infinity]], s = 250, c = Rr, l = Uu("start", "zoom", "end"), u, d, f, p = 500, m = 150, h = 0, g = 10;
	function _(e) {
		e.property("__zoom", rh).on("wheel.zoom", w, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", E).filter(i).on("touchstart.zoom", D).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	_.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", rh), e === i ? i.interrupt().each(function() {
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
			return n(Zm.translate(c[0], c[1]).scale(s.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, o);
		}, a, s);
	};
	function v(e, t) {
		return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new Xm(t, e.x, e.y);
	}
	function y(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new Xm(e.k, r, i);
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
					e = new Xm(n, l[0] - t[0] * n, l[1] - t[1] * n);
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
			var t = qf(this.that).datum();
			l.call(e, this.that, new Ym(e, {
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
		var s = S(this, i).event(t), c = this.__zoom, l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))), u = Yf(t);
		if (s.wheel) (s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
		else if (c.k === l) return;
		else s.mouse = [u, c.invert(u)], Lp(this), s.start();
		eh(t), s.wheel = setTimeout(d, m), s.zoom("mouse", n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));
		function d() {
			s.wheel = null, s.end();
		}
	}
	function T(t, ...r) {
		if (f || !e.apply(this, arguments)) return;
		var i = t.currentTarget, a = S(this, r, !0).event(t), s = qf(t.view).on("mousemove.zoom", d, !0).on("mouseup.zoom", p, !0), c = Yf(t, i), l = t.clientX, u = t.clientY;
		ep(t.view), $m(t), a.mouse = [c, this.__zoom.invert(c)], Lp(this), a.start();
		function d(e) {
			if (eh(e), !a.moved) {
				var t = e.clientX - l, r = e.clientY - u;
				a.moved = t * t + r * r > h;
			}
			a.event(e).zoom("mouse", n(y(a.that.__zoom, a.mouse[0] = Yf(e, i), a.mouse[1]), a.extent, o));
		}
		function p(e) {
			s.on("mousemove.zoom mouseup.zoom", null), tp(e.view, a.moved), eh(e), a.event(e).end();
		}
	}
	function E(r, ...i) {
		if (e.apply(this, arguments)) {
			var a = this.__zoom, c = Yf(r.changedTouches ? r.changedTouches[0] : r, this), l = a.invert(c), u = a.k * (r.shiftKey ? .5 : 2), d = n(y(v(a, u), c, l), t.apply(this, i), o);
			eh(r), s > 0 ? qf(this).transition().duration(s).call(x, d, c, r) : qf(this).call(_.transform, d, c, r);
		}
	}
	function D(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = S(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for ($m(t), s = 0; s < i; ++s) c = r[s], l = Yf(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
			u &&= clearTimeout(u), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
				u = null;
			}, p)), Lp(this), a.start());
		}
	}
	function O(e, ...t) {
		if (this.__zooming) {
			var r = S(this, t).event(e), i = e.changedTouches, a = i.length, s, c, l, u;
			for (eh(e), s = 0; s < a; ++s) c = i[s], l = Yf(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
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
			for ($m(e), f && clearTimeout(f), f = setTimeout(function() {
				f = null;
			}, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (o = Yf(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
				var s = qf(this).on("dblclick.zoom");
				s && s.apply(this, arguments);
			}
		}
	}
	return _.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Jm(+e), _) : r;
	}, _.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Jm(!!t), _) : e;
	}, _.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : Jm(!!e), _) : i;
	}, _.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Jm([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), _) : t;
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
var ch = {
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
}, lh = [[-Infinity, -Infinity], [Infinity, Infinity]], uh = [
	"Enter",
	" ",
	"Escape"
], dh = {
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
}, fh;
(function(e) {
	e.Strict = "strict", e.Loose = "loose";
})(fh ||= {});
var ph;
(function(e) {
	e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ph ||= {});
var mh;
(function(e) {
	e.Partial = "partial", e.Full = "full";
})(mh ||= {});
var hh = {
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
}, gh;
(function(e) {
	e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(gh ||= {});
var _h;
(function(e) {
	e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(_h ||= {});
var Q;
(function(e) {
	e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Q ||= {});
var vh = {
	[Q.Left]: Q.Right,
	[Q.Right]: Q.Left,
	[Q.Top]: Q.Bottom,
	[Q.Bottom]: Q.Top
};
function yh(e) {
	return e === null ? null : e ? "valid" : "invalid";
}
var bh = (e) => "id" in e && "source" in e && "target" in e, xh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Sh = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ch = (e, t = [0, 0]) => {
	let { width: n, height: r } = ng(e), i = e.origin ?? t, a = n * i[0], o = r * i[1];
	return {
		x: e.position.x - a,
		y: e.position.y - o
	};
}, wh = (e, t = { nodeOrigin: [0, 0] }) => (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0 ? {
	x: 0,
	y: 0,
	width: 0,
	height: 0
} : zh(e.reduce((e, n) => {
	let r = typeof n == "string", i = !t.nodeLookup && !r ? n : void 0;
	return t.nodeLookup && (i = r ? t.nodeLookup.get(n) : Sh(n) ? n : t.nodeLookup.get(n.id)), Lh(e, i ? Vh(i, t.nodeOrigin) : {
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
}))), Th = (e, t = {}) => {
	let n = {
		x: Infinity,
		y: Infinity,
		x2: -Infinity,
		y2: -Infinity
	}, r = !1;
	return e.forEach((e) => {
		(t.filter === void 0 || t.filter(e)) && (n = Lh(n, Vh(e)), r = !0);
	}), r ? zh(n) : {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
}, Eh = (e, t, [n, r, i] = [
	0,
	0,
	1
], a = !1, o = !1) => {
	let s = {
		...Jh(t, [
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
		let i = e.width ?? t.width ?? t.initialWidth ?? null, l = e.height ?? t.height ?? t.initialHeight ?? null, u = Uh(s, Bh(t)), d = (i ?? 0) * (l ?? 0), f = a && u > 0;
		(!t.internals.handleBounds || f || u >= d || t.dragging) && c.push(t);
	}
	return c;
}, Dh = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		n.add(e.id);
	}), t.filter((e) => n.has(e.source) || n.has(e.target));
};
function Oh(e, t) {
	let n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((e) => e.id)) : null;
	return e.forEach((e) => {
		e.measured.width && e.measured.height && (t?.includeHiddenNodes || !e.hidden) && (!r || r.has(e.id)) && n.set(e.id, e);
	}), n;
}
async function kh({ nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: a }, o) {
	if (e.size === 0) return Promise.resolve(!0);
	let s = $h(Th(Oh(e, o)), t, n, o?.minZoom ?? i, o?.maxZoom ?? a, o?.padding ?? .1);
	return await r.setViewport(s, {
		duration: o?.duration,
		ease: o?.ease,
		interpolate: o?.interpolate
	}), Promise.resolve(!0);
}
function Ah({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: i, onError: a }) {
	let o = n.get(e), s = o.parentId ? n.get(o.parentId) : void 0, { x: c, y: l } = s ? s.internals.positionAbsolute : {
		x: 0,
		y: 0
	}, u = o.origin ?? r, d = o.extent || i;
	if (o.extent === "parent" && !o.expandParent) {
		if (!s) a?.("005", ch.error005());
		else {
			let e = s.measured.width, t = s.measured.height;
			e && t && (d = [[c, l], [c + e, l + t]]);
		}
	} else s && tg(o.extent) && (d = [[o.extent[0][0] + c, o.extent[0][1] + l], [o.extent[1][0] + c, o.extent[1][1] + l]]);
	let f = tg(d) ? Nh(t, d, o.measured) : t;
	return (o.measured.width === void 0 || o.measured.height === void 0) && a?.("015", ch.error015()), {
		position: {
			x: f.x - c + (o.measured.width ?? 0) * u[0],
			y: f.y - l + (o.measured.height ?? 0) * u[1]
		},
		positionAbsolute: f
	};
}
async function jh({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: i }) {
	let a = new Set(e.map((e) => e.id)), o = [];
	for (let e of n) {
		if (e.deletable === !1) continue;
		let t = a.has(e.id), n = !t && e.parentId && o.find((t) => t.id === e.parentId);
		(t || n) && o.push(e);
	}
	let s = new Set(t.map((e) => e.id)), c = r.filter((e) => e.deletable !== !1), l = Dh(o, c);
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
var Mh = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Nh = (e = {
	x: 0,
	y: 0
}, t, n) => ({
	x: Mh(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
	y: Mh(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Ph(e, t, n) {
	let { width: r, height: i } = ng(n), { x: a, y: o } = n.internals.positionAbsolute;
	return Nh(e, [[a, o], [a + r, o + i]], t);
}
var Fh = (e, t, n) => e < t ? Mh(Math.abs(e - t), 1, t) / t : e > n ? -Mh(Math.abs(e - n), 1, t) / t : 0, Ih = (e, t, n = 15, r = 40) => [Fh(e.x, r, t.width - r) * n, Fh(e.y, r, t.height - r) * n], Lh = (e, t) => ({
	x: Math.min(e.x, t.x),
	y: Math.min(e.y, t.y),
	x2: Math.max(e.x2, t.x2),
	y2: Math.max(e.y2, t.y2)
}), Rh = ({ x: e, y: t, width: n, height: r }) => ({
	x: e,
	y: t,
	x2: e + n,
	y2: t + r
}), zh = ({ x: e, y: t, x2: n, y2: r }) => ({
	x: e,
	y: t,
	width: n - e,
	height: r - t
}), Bh = (e, t = [0, 0]) => {
	let { x: n, y: r } = Sh(e) ? e.internals.positionAbsolute : Ch(e, t);
	return {
		x: n,
		y: r,
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}, Vh = (e, t = [0, 0]) => {
	let { x: n, y: r } = Sh(e) ? e.internals.positionAbsolute : Ch(e, t);
	return {
		x: n,
		y: r,
		x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
		y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
	};
}, Hh = (e, t) => zh(Lh(Rh(e), Rh(t))), Uh = (e, t) => {
	let n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
	return Math.ceil(n * r);
}, Wh = (e) => Gh(e.width) && Gh(e.height) && Gh(e.x) && Gh(e.y), Gh = (e) => !isNaN(e) && isFinite(e), Kh = (e, t) => {
	process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, qh = (e, t = [1, 1]) => ({
	x: t[0] * Math.round(e.x / t[0]),
	y: t[1] * Math.round(e.y / t[1])
}), Jh = ({ x: e, y: t }, [n, r, i], a = !1, o = [1, 1]) => {
	let s = {
		x: (e - n) / i,
		y: (t - r) / i
	};
	return a ? qh(s, o) : s;
}, Yh = ({ x: e, y: t }, [n, r, i]) => ({
	x: e * i + n,
	y: t * i + r
});
function Xh(e, t) {
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
function Zh(e, t, n) {
	if (typeof e == "string" || typeof e == "number") {
		let r = Xh(e, n), i = Xh(e, t);
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
		let r = Xh(e.top ?? e.y ?? 0, n), i = Xh(e.bottom ?? e.y ?? 0, n), a = Xh(e.left ?? e.x ?? 0, t), o = Xh(e.right ?? e.x ?? 0, t);
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
function Qh(e, t, n, r, i, a) {
	let { x: o, y: s } = Yh(e, [
		t,
		n,
		r
	]), { x: c, y: l } = Yh({
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
var $h = (e, t, n, r, i, a) => {
	let o = Zh(a, t, n), s = (t - o.x) / e.width, c = (n - o.y) / e.height, l = Mh(Math.min(s, c), r, i), u = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - u * l, p = n / 2 - d * l, m = Qh(e, f, p, l, t, n), h = {
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
}, eg = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function tg(e) {
	return e != null && e !== "parent";
}
function ng(e) {
	return {
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}
function rg(e) {
	return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function ig(e, t = {
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
function ag(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function og() {
	let e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function sg(e) {
	return {
		...dh,
		...e || {}
	};
}
function cg(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: i }) {
	let { x: a, y: o } = mg(e), s = Jh({
		x: a - (i?.left ?? 0),
		y: o - (i?.top ?? 0)
	}, r), { x: c, y: l } = n ? qh(s, t) : s;
	return {
		xSnapped: c,
		ySnapped: l,
		...s
	};
}
var lg = (e) => ({
	width: e.offsetWidth,
	height: e.offsetHeight
}), ug = (e) => e?.getRootNode?.() || window?.document, dg = [
	"INPUT",
	"SELECT",
	"TEXTAREA"
];
function fg(e) {
	let t = e.composedPath?.()?.[0] || e.target;
	return t?.nodeType === 1 ? dg.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey") : !1;
}
var pg = (e) => "clientX" in e, mg = (e, t) => {
	let n = pg(e), r = n ? e.clientX : e.touches?.[0].clientX, i = n ? e.clientY : e.touches?.[0].clientY;
	return {
		x: r - (t?.left ?? 0),
		y: i - (t?.top ?? 0)
	};
}, hg = (e, t, n, r, i) => {
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
			...lg(t)
		};
	});
};
function gg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: i, sourceControlY: a, targetControlX: o, targetControlY: s }) {
	let c = e * .125 + i * .375 + o * .375 + n * .125, l = t * .125 + a * .375 + s * .375 + r * .125;
	return [
		c,
		l,
		Math.abs(c - e),
		Math.abs(l - t)
	];
}
function _g(e, t) {
	return e >= 0 ? .5 * e : t * 25 * Math.sqrt(-e);
}
function vg({ pos: e, x1: t, y1: n, x2: r, y2: i, c: a }) {
	switch (e) {
		case Q.Left: return [t - _g(t - r, a), n];
		case Q.Right: return [t + _g(r - t, a), n];
		case Q.Top: return [t, n - _g(n - i, a)];
		case Q.Bottom: return [t, n + _g(i - n, a)];
	}
}
function yg({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top, curvature: o = .25 }) {
	let [s, c] = vg({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i,
		c: o
	}), [l, u] = vg({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t,
		c: o
	}), [d, f, p, m] = gg({
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
function bg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, o = Math.abs(r - t) / 2;
	return [
		a,
		r < t ? r + o : r - o,
		i,
		o
	];
}
function xg({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: i = !1, zIndexMode: a = "basic" }) {
	return a === "manual" ? r : (i && n ? r + 1e3 : r) + Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
}
function Sg({ sourceNode: e, targetNode: t, width: n, height: r, transform: i }) {
	let a = Lh(Vh(e), Vh(t));
	return a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1), Uh({
		x: -i[0] / i[2],
		y: -i[1] / i[2],
		width: n / i[2],
		height: r / i[2]
	}, zh(a)) > 0;
}
var Cg = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, wg = (e, t) => t.some((t) => t.source === e.source && t.target === e.target && (t.sourceHandle === e.sourceHandle || !t.sourceHandle && !e.sourceHandle) && (t.targetHandle === e.targetHandle || !t.targetHandle && !e.targetHandle)), Tg = (e, t, n = {}) => {
	if (!e.source || !e.target) return Kh("006", ch.error006()), t;
	let r = n.getEdgeId || Cg, i;
	return i = bh(e) ? { ...e } : {
		...e,
		id: r(e)
	}, wg(i, t) ? t : (i.sourceHandle === null && delete i.sourceHandle, i.targetHandle === null && delete i.targetHandle, t.concat(i));
};
function Eg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let [i, a, o, s] = bg({
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
var Dg = {
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
}, Og = ({ source: e, sourcePosition: t = Q.Bottom, target: n }) => t === Q.Left || t === Q.Right ? e.x < n.x ? {
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
}, kg = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
function Ag({ source: e, sourcePosition: t = Q.Bottom, target: n, targetPosition: r = Q.Top, center: i, offset: a, stepPosition: o }) {
	let s = Dg[t], c = Dg[r], l = {
		x: e.x + s.x * a,
		y: e.y + s.y * a
	}, u = {
		x: n.x + c.x * a,
		y: n.y + c.y * a
	}, d = Og({
		source: l,
		sourcePosition: t,
		target: u
	}), f = d.x === 0 ? "y" : "x", p = d[f], m = [], h, g, _ = {
		x: 0,
		y: 0
	}, v = {
		x: 0,
		y: 0
	}, [, , y, b] = bg({
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
function jg(e, t, n, r) {
	let i = Math.min(kg(e, t) / 2, kg(t, n) / 2, r), { x: a, y: o } = t;
	if (e.x === a && a === n.x || e.y === o && o === n.y) return `L${a} ${o}`;
	if (e.y === o) {
		let t = e.x < n.x ? -1 : 1, r = e.y < n.y ? 1 : -1;
		return `L ${a + i * t},${o}Q ${a},${o} ${a},${o + i * r}`;
	}
	let s = e.x < n.x ? 1 : -1;
	return `L ${a},${o + i * (e.y < n.y ? -1 : 1)}Q ${a},${o} ${a + i * s},${o}`;
}
function Mg({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top, borderRadius: o = 5, centerX: s, centerY: c, offset: l = 20, stepPosition: u = .5 }) {
	let [d, f, p, m, h] = Ag({
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
	for (let e = 1; e < d.length - 1; e++) g += jg(d[e - 1], d[e], d[e + 1], o);
	return g += `L${d[d.length - 1].x} ${d[d.length - 1].y}`, [
		g,
		f,
		p,
		m,
		h
	];
}
function Ng(e) {
	return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Pg(e) {
	let { sourceNode: t, targetNode: n } = e;
	if (!Ng(t) || !Ng(n)) return null;
	let r = t.internals.handleBounds || Fg(t.handles), i = n.internals.handleBounds || Fg(n.handles), a = Lg(r?.source ?? [], e.sourceHandle), o = Lg(e.connectionMode === fh.Strict ? i?.target ?? [] : (i?.target ?? []).concat(i?.source ?? []), e.targetHandle);
	if (!a || !o) return e.onError?.("008", ch.error008(a ? "target" : "source", {
		id: e.id,
		sourceHandle: e.sourceHandle,
		targetHandle: e.targetHandle
	})), null;
	let s = a?.position || Q.Bottom, c = o?.position || Q.Top, l = Ig(t, a, s), u = Ig(n, o, c);
	return {
		sourceX: l.x,
		sourceY: l.y,
		targetX: u.x,
		targetY: u.y,
		sourcePosition: s,
		targetPosition: c
	};
}
function Fg(e) {
	if (!e) return null;
	let t = [], n = [];
	for (let r of e) r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
	return {
		source: t,
		target: n
	};
}
function Ig(e, t, n = Q.Left, r = !1) {
	let i = (t?.x ?? 0) + e.internals.positionAbsolute.x, a = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: o, height: s } = t ?? ng(e);
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
function Lg(e, t) {
	return e && (t ? e.find((e) => e.id === t) : e[0]) || null;
}
function Rg(e, t) {
	return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((t) => `${t}=${e[t]}`).join("&")}` : "";
}
function zg(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i }) {
	let a = /* @__PURE__ */ new Set();
	return e.reduce((e, o) => ([o.markerStart || r, o.markerEnd || i].forEach((r) => {
		if (r && typeof r == "object") {
			let i = Rg(r, t);
			a.has(i) || (e.push({
				id: i,
				color: r.color || n,
				...r
			}), a.add(i));
		}
	}), e), []).sort((e, t) => e.id.localeCompare(t.id));
}
function Bg(e, t, n, r, i) {
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
var Vg = 1e3, Hg = 10, Ug = {
	nodeOrigin: [0, 0],
	nodeExtent: lh,
	elevateNodesOnSelect: !0,
	zIndexMode: "basic",
	defaults: {}
}, Wg = {
	...Ug,
	checkEquality: !0
};
function Gg(e, t) {
	let n = { ...e };
	for (let e in t) t[e] !== void 0 && (n[e] = t[e]);
	return n;
}
function Kg(e, t, n) {
	let r = Gg(Ug, n);
	for (let n of e.values()) if (n.parentId) Zg(n, e, t, r);
	else {
		let e = Nh(Ch(n, r.nodeOrigin), tg(n.extent) ? n.extent : r.nodeExtent, ng(n));
		n.internals.positionAbsolute = e;
	}
}
function qg(e, t) {
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
function Jg(e) {
	return e === "manual";
}
function Yg(e, t, n, r = {}) {
	let i = Gg(Wg, r), a = { i: 0 }, o = new Map(t), s = i?.elevateNodesOnSelect && !Jg(i.zIndexMode) ? Vg : 0, c = e.length > 0, l = !1;
	t.clear(), n.clear();
	for (let u of e) {
		let e = o.get(u.id);
		if (i.checkEquality && u === e?.internals.userNode) t.set(u.id, e);
		else {
			let n = Nh(Ch(u, i.nodeOrigin), tg(u.extent) ? u.extent : i.nodeExtent, ng(u));
			e = {
				...i.defaults,
				...u,
				measured: {
					width: u.measured?.width,
					height: u.measured?.height
				},
				internals: {
					positionAbsolute: n,
					handleBounds: qg(u, e),
					z: Qg(u, s, i.zIndexMode),
					userNode: u
				}
			}, t.set(u.id, e);
		}
		(e.measured === void 0 || e.measured.width === void 0 || e.measured.height === void 0) && !e.hidden && (c = !1), u.parentId && Zg(e, t, n, r, a), l ||= u.selected ?? !1;
	}
	return {
		nodesInitialized: c,
		hasSelectedNodes: l
	};
}
function Xg(e, t) {
	if (!e.parentId) return;
	let n = t.get(e.parentId);
	n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Zg(e, t, n, r, i) {
	let { elevateNodesOnSelect: a, nodeOrigin: o, nodeExtent: s, zIndexMode: c } = Gg(Ug, r), l = e.parentId, u = t.get(l);
	if (!u) {
		console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
		return;
	}
	Xg(e, n), i && !u.parentId && u.internals.rootParentIndex === void 0 && c === "auto" && (u.internals.rootParentIndex = ++i.i, u.internals.z = u.internals.z + i.i * Hg), i && u.internals.rootParentIndex !== void 0 && (i.i = u.internals.rootParentIndex);
	let { x: d, y: f, z: p } = $g(e, u, o, s, a && !Jg(c) ? Vg : 0, c), { positionAbsolute: m } = e.internals, h = d !== m.x || f !== m.y;
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
function Qg(e, t, n) {
	let r = Gh(e.zIndex) ? e.zIndex : 0;
	return Jg(n) ? r : r + (e.selected ? t : 0);
}
function $g(e, t, n, r, i, a) {
	let { x: o, y: s } = t.internals.positionAbsolute, c = ng(e), l = Ch(e, n), u = tg(e.extent) ? Nh(l, e.extent, c) : l, d = Nh({
		x: o + u.x,
		y: s + u.y
	}, r, c);
	e.extent === "parent" && (d = Ph(d, c, t));
	let f = Qg(e, i, a), p = t.internals.z ?? 0;
	return {
		x: d.x,
		y: d.y,
		z: p >= f ? p + 1 : f
	};
}
function e_(e, t, n, r = [0, 0]) {
	let i = [], a = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.parentId);
		if (!e) continue;
		let r = Hh(a.get(n.parentId)?.expandedRect ?? Bh(e), n.rect);
		a.set(n.parentId, {
			expandedRect: r,
			parent: e
		});
	}
	return a.size > 0 && a.forEach(({ expandedRect: t, parent: a }, o) => {
		let s = a.internals.positionAbsolute, c = ng(a), l = a.origin ?? r, u = t.x < s.x ? Math.round(Math.abs(s.x - t.x)) : 0, d = t.y < s.y ? Math.round(Math.abs(s.y - t.y)) : 0, f = Math.max(c.width, Math.round(t.width)), p = Math.max(c.height, Math.round(t.height)), m = (f - c.width) * l[0], h = (p - c.height) * l[1];
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
function t_(e, t, n, r, i, a, o) {
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
		let s = lg(r.nodeElement), u = e.measured.width !== s.width || e.measured.height !== s.height;
		if (s.width && s.height && (u || !e.internals.handleBounds || r.force)) {
			let p = r.nodeElement.getBoundingClientRect(), m = tg(e.extent) ? e.extent : a, { positionAbsolute: h } = e.internals;
			e.parentId && e.extent === "parent" ? h = Ph(h, s, t.get(e.parentId)) : m && (h = Nh(h, m, s));
			let g = {
				...e,
				measured: s,
				internals: {
					...e.internals,
					positionAbsolute: h,
					handleBounds: {
						source: hg("source", r.nodeElement, p, d, e.id),
						target: hg("target", r.nodeElement, p, d, e.id)
					}
				}
			};
			t.set(e.id, g), e.parentId && Zg(g, t, n, {
				nodeOrigin: i,
				zIndexMode: o
			}), c = !0, u && (l.push({
				id: e.id,
				type: "dimensions",
				dimensions: s
			}), e.expandParent && e.parentId && f.push({
				id: e.id,
				parentId: e.parentId,
				rect: Bh(g, i)
			}));
		}
	}
	if (f.length > 0) {
		let e = e_(f, t, n, i);
		l.push(...e);
	}
	return {
		changes: l,
		updatedInternals: c
	};
}
async function n_({ delta: e, panZoom: t, transform: n, translateExtent: r, width: i, height: a }) {
	if (!t || !e.x && !e.y) return Promise.resolve(!1);
	let o = await t.setViewportConstrained({
		x: n[0] + e.x,
		y: n[1] + e.y,
		zoom: n[2]
	}, [[0, 0], [i, a]], r), s = !!o && (o.x !== n[0] || o.y !== n[1] || o.k !== n[2]);
	return Promise.resolve(s);
}
function r_(e, t, n, r, i, a) {
	let o = i, s = r.get(o) || /* @__PURE__ */ new Map();
	r.set(o, s.set(n, t)), o = `${i}-${e}`;
	let c = r.get(o) || /* @__PURE__ */ new Map();
	if (r.set(o, c.set(n, t)), a) {
		o = `${i}-${e}-${a}`;
		let s = r.get(o) || /* @__PURE__ */ new Map();
		r.set(o, s.set(n, t));
	}
}
function i_(e, t, n) {
	e.clear(), t.clear();
	for (let r of n) {
		let { source: n, target: i, sourceHandle: a = null, targetHandle: o = null } = r, s = {
			edgeId: r.id,
			source: n,
			target: i,
			sourceHandle: a,
			targetHandle: o
		}, c = `${n}-${a}--${i}-${o}`;
		r_("source", s, `${i}-${o}--${n}-${a}`, e, n, a), r_("target", s, c, e, i, o), t.set(r.id, r);
	}
}
function a_(e, t) {
	if (!e.parentId) return !1;
	let n = t.get(e.parentId);
	return n ? n.selected ? !0 : a_(n, t) : !1;
}
function o_(e, t, n) {
	let r = e;
	do {
		if (r?.matches?.(t)) return !0;
		if (r === n) return !1;
		r = r?.parentElement;
	} while (r);
	return !1;
}
function s_(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	for (let [a, o] of e) if ((o.selected || o.id === r) && (!o.parentId || !a_(o, e)) && (o.draggable || t && o.draggable === void 0)) {
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
function c_({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function l_({ dragItems: e, snapGrid: t, x: n, y: r }) {
	let i = e.values().next().value;
	if (!i) return null;
	let a = {
		x: n - i.distance.x,
		y: r - i.distance.y
	}, o = qh(a, t);
	return {
		x: o.x - a.x,
		y: o.y - a.y
	};
}
function u_({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: i }) {
	let a = {
		x: null,
		y: null
	}, o = 0, s = /* @__PURE__ */ new Map(), c = !1, l = {
		x: 0,
		y: 0
	}, u = null, d = !1, f = null, p = !1, m = !1, h = null;
	function g({ noDragClassName: g, handleSelector: _, domNode: v, isSelectable: y, nodeId: b, nodeClickDistance: x = 0 }) {
		f = qf(v);
		function S({ x: e, y: n }) {
			let { nodeLookup: i, nodeExtent: o, snapGrid: c, snapToGrid: l, nodeOrigin: u, onNodeDrag: d, onSelectionDrag: f, onError: p, updateNodePositions: g } = t();
			a = {
				x: e,
				y: n
			};
			let _ = !1, v = s.size > 1, y = v && o ? Rh(Th(s)) : null, x = v && l ? l_({
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
				} : qh(a, c));
				let s = null;
				if (v && o && !r.extent && y) {
					let { positionAbsolute: e } = r.internals, t = e.x - y.x + o[0][0], n = e.x + r.measured.width - y.x2 + o[1][0], i = e.y - y.y + o[0][1], a = e.y + r.measured.height - y.y2 + o[1][1];
					s = [[t, i], [n, a]];
				}
				let { position: d, positionAbsolute: f } = Ah({
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
				let [e, t] = c_({
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
			let [s, d] = Ih(l, u, r);
			(s !== 0 || d !== 0) && (a.x = (a.x ?? 0) - s / e[2], a.y = (a.y ?? 0) - d / e[2], await n({
				x: s,
				y: d
			}) && S(a)), o = requestAnimationFrame(C);
		}
		function w(r) {
			let { nodeLookup: i, multiSelectionActive: o, nodesDraggable: c, transform: l, snapGrid: f, snapToGrid: p, selectNodesOnDrag: m, onNodeDragStart: h, onSelectionDragStart: g, unselectNodesAndEdges: _ } = t();
			d = !0, (!m || !y) && !o && b && (i.get(b)?.selected || _()), y && m && b && e?.(b);
			let v = cg(r.sourceEvent, {
				transform: l,
				snapGrid: f,
				snapToGrid: p,
				containerBounds: u
			});
			if (a = v, s = s_(i, c, v, b), s.size > 0 && (n || h || !b && g)) {
				let [e, t] = c_({
					nodeId: b,
					dragItems: s,
					nodeLookup: i
				});
				n?.(r.sourceEvent, s, e, t), h?.(r.sourceEvent, e, t), b || g?.(r.sourceEvent, t);
			}
		}
		let T = cp().clickDistance(x).on("start", (e) => {
			let { domNode: n, nodeDragThreshold: r, transform: i, snapGrid: o, snapToGrid: s } = t();
			u = n?.getBoundingClientRect() || null, p = !1, m = !1, h = e.sourceEvent, r === 0 && w(e), a = cg(e.sourceEvent, {
				transform: i,
				snapGrid: o,
				snapToGrid: s,
				containerBounds: u
			}), l = mg(e.sourceEvent, u);
		}).on("drag", (e) => {
			let { autoPanOnNodeDrag: n, transform: r, snapGrid: i, snapToGrid: o, nodeDragThreshold: f, nodeLookup: m } = t(), g = cg(e.sourceEvent, {
				transform: r,
				snapGrid: i,
				snapToGrid: o,
				containerBounds: u
			});
			if (h = e.sourceEvent, (e.sourceEvent.type === "touchmove" && e.sourceEvent.touches.length > 1 || b && !m.has(b)) && (p = !0), !p) {
				if (!c && n && d && (c = !0, C()), !d) {
					let t = mg(e.sourceEvent, u), n = t.x - l.x, r = t.y - l.y;
					Math.sqrt(n * n + r * r) > f && w(e);
				}
				(a.x !== g.xSnapped || a.y !== g.ySnapped) && s && d && (l = mg(e.sourceEvent, u), S(g));
			}
		}).on("end", (e) => {
			if (!(!d || p) && (c = !1, d = !1, cancelAnimationFrame(o), s.size > 0)) {
				let { nodeLookup: n, updateNodePositions: r, onNodeDragStop: a, onSelectionDragStop: o } = t();
				if (m &&= (r(s, !1), !1), i || a || !b && o) {
					let [t, r] = c_({
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
			return !e.button && (!g || !o_(t, `.${g}`, v)) && (!_ || o_(t, _, v));
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
function d_(e, t, n) {
	let r = [], i = {
		x: e.x - n,
		y: e.y - n,
		width: n * 2,
		height: n * 2
	};
	for (let e of t.values()) Uh(i, Bh(e)) > 0 && r.push(e);
	return r;
}
var f_ = 250;
function p_(e, t, n, r) {
	let i = [], a = Infinity, o = d_(e, n, t + f_);
	for (let n of o) {
		let o = [...n.internals.handleBounds?.source ?? [], ...n.internals.handleBounds?.target ?? []];
		for (let s of o) {
			if (r.nodeId === s.nodeId && r.type === s.type && r.id === s.id) continue;
			let { x: o, y: c } = Ig(n, s, s.position, !0), l = Math.sqrt((o - e.x) ** 2 + (c - e.y) ** 2);
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
function m_(e, t, n, r, i, a = !1) {
	let o = r.get(e);
	if (!o) return null;
	let s = i === "strict" ? o.internals.handleBounds?.[t] : [...o.internals.handleBounds?.source ?? [], ...o.internals.handleBounds?.target ?? []], c = (n ? s?.find((e) => e.id === n) : s?.[0]) ?? null;
	return c && a ? {
		...c,
		...Ig(o, c, c.position, !0)
	} : c;
}
function h_(e, t) {
	return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function g_(e, t) {
	let n = null;
	return t ? n = !0 : e && !t && (n = !1), n;
}
var __ = () => !0;
function v_(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: i, edgeUpdaterType: a, isTarget: o, domNode: s, nodeLookup: c, lib: l, autoPanOnConnect: u, flowId: d, panBy: f, cancelConnection: p, onConnectStart: m, onConnect: h, onConnectEnd: g, isValidConnection: _ = __, onReconnectEnd: v, updateConnection: y, getTransform: b, getFromHandle: x, autoPanSpeed: S, dragThreshold: C = 1, handleDomNode: w }) {
	let T = ug(e.target), E = 0, D, { x: O, y: k } = mg(e), A = h_(a, w), j = s?.getBoundingClientRect(), M = !1;
	if (!j || !A) return;
	let N = m_(i, A, r, c, t);
	if (!N) return;
	let P = mg(e, j), F = !1, I = null, L = !1, R = null;
	function z() {
		if (!u || !j) return;
		let [e, t] = Ih(P, j, S);
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
	}, ee = c.get(i), te = {
		inProgress: !0,
		isValid: null,
		from: Ig(ee, B, Q.Left, !0),
		fromHandle: B,
		fromPosition: B.position,
		fromNode: ee,
		to: P,
		toHandle: null,
		toPosition: vh[B.position],
		toNode: null,
		pointer: P
	};
	function V() {
		M = !0, y(te), m?.(e, {
			nodeId: i,
			handleId: r,
			handleType: A
		});
	}
	C === 0 && V();
	function H(e) {
		if (!M) {
			let { x: t, y: n } = mg(e), r = t - O, i = n - k;
			if (!(r * r + i * i > C * C)) return;
			V();
		}
		if (!x() || !B) {
			U(e);
			return;
		}
		let a = b();
		P = mg(e, j), D = p_(Jh(P, a, !1, [1, 1]), n, c, B), F ||= (z(), !0);
		let s = y_(e, {
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
		R = s.handleDomNode, I = s.connection, L = g_(!!D, s.isValid);
		let u = c.get(i), f = u ? Ig(u, B, Q.Left, !0) : te.from, p = {
			...te,
			from: f,
			isValid: L,
			to: s.toHandle && L ? Yh({
				x: s.toHandle.x,
				y: s.toHandle.y
			}, a) : P,
			toHandle: s.toHandle,
			toPosition: L && s.toHandle ? s.toHandle.position : vh[B.position],
			toNode: s.toHandle ? c.get(s.toHandle.nodeId) : null,
			pointer: P
		};
		y(p), te = p;
	}
	function U(e) {
		if (!("touches" in e && e.touches.length > 0)) {
			if (M) {
				(D || R) && I && L && h?.(I);
				let { inProgress: t, ...n } = te, r = {
					...n,
					toPosition: te.toHandle ? te.toPosition : null
				};
				g?.(e, r), a && v?.(e, r);
			}
			p(), cancelAnimationFrame(E), F = !1, L = !1, I = null, R = null, T.removeEventListener("mousemove", H), T.removeEventListener("mouseup", U), T.removeEventListener("touchmove", H), T.removeEventListener("touchend", U);
		}
	}
	T.addEventListener("mousemove", H), T.addEventListener("mouseup", U), T.addEventListener("touchmove", H), T.addEventListener("touchend", U);
}
function y_(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: i, fromType: a, doc: o, lib: s, flowId: c, isValidConnection: l = __, nodeLookup: u }) {
	let d = a === "target", f = t ? o.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: p, y: m } = mg(e), h = o.elementFromPoint(p, m), g = h?.classList.contains(`${s}-flow__handle`) ? h : f, _ = {
		handleDomNode: g,
		isValid: !1,
		connection: null,
		toHandle: null
	};
	if (g) {
		let e = h_(void 0, g), t = g.getAttribute("data-nodeid"), a = g.getAttribute("data-handleid"), o = g.classList.contains("connectable"), s = g.classList.contains("connectableend");
		if (!t || !e) return _;
		let c = {
			source: d ? t : r,
			sourceHandle: d ? a : i,
			target: d ? r : t,
			targetHandle: d ? i : a
		};
		_.connection = c, _.isValid = o && s && (n === fh.Strict ? d && e === "source" || !d && e === "target" : t !== r || a !== i) && l(c), _.toHandle = m_(t, e, a, u, n, !0);
	}
	return _;
}
var b_ = {
	onPointerDown: v_,
	isValid: y_
};
function x_({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
	let i = qf(e);
	function a({ translateExtent: e, width: a, height: o, zoomStep: s = 1, pannable: c = !0, zoomable: l = !0, inversePan: u = !1 }) {
		let d = (e) => {
			if (e.sourceEvent.type !== "wheel" || !t) return;
			let r = n(), i = e.sourceEvent.ctrlKey && eg() ? 10 : 1, a = -e.sourceEvent.deltaY * (e.sourceEvent.deltaMode === 1 ? .05 : e.sourceEvent.deltaMode ? 1 : .002) * s, o = r[2] * 2 ** (a * i);
			t.scaleTo(o);
		}, f = [0, 0], p = sh().on("start", (e) => {
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
		pointer: Yf
	};
}
var S_ = (e) => ({
	x: e.x,
	y: e.y,
	zoom: e.k
}), C_ = ({ x: e, y: t, zoom: n }) => Zm.translate(e, t).scale(n), w_ = (e, t) => e.target.closest(`.${t}`), T_ = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), E_ = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, D_ = (e, t = 0, n = E_, r = () => {}) => {
	let i = typeof t == "number" && t > 0;
	return i || r(), i ? e.transition().duration(t).ease(n).on("end", r) : e;
}, O_ = (e) => {
	let t = e.ctrlKey && eg() ? 10 : 1;
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * t;
};
function k_({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: o, onPanZoomStart: s, onPanZoom: c, onPanZoomEnd: l }) {
	return (u) => {
		if (w_(u, t)) return u.ctrlKey && u.preventDefault(), !1;
		u.preventDefault(), u.stopImmediatePropagation();
		let d = n.property("__zoom").k || 1;
		if (u.ctrlKey && o) {
			let e = Yf(u), t = d * 2 ** O_(u);
			r.scaleTo(n, t, e, u);
			return;
		}
		let f = u.deltaMode === 1 ? 20 : 1, p = i === ph.Vertical ? 0 : u.deltaX * f, m = i === ph.Horizontal ? 0 : u.deltaY * f;
		!eg() && u.shiftKey && i !== ph.Vertical && (p = u.deltaY * f, m = 0), r.translateBy(n, -(p / d) * a, -(m / d) * a, { internal: !0 });
		let h = S_(n.property("__zoom"));
		clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (c?.(u, h), e.panScrollTimeout = setTimeout(() => {
			l?.(u, h), e.isPanScrolling = !1;
		}, 150)) : (e.isPanScrolling = !0, s?.(u, h));
	};
}
function A_({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
	return function(r, i) {
		let a = r.type === "wheel", o = !t && a && !r.ctrlKey, s = w_(r, e);
		if (r.ctrlKey && a && s && r.preventDefault(), o || s) return null;
		r.preventDefault(), n.call(this, r, i);
	};
}
function j_({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
	return (r) => {
		if (r.sourceEvent?.internal) return;
		let i = S_(r.transform);
		e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, i);
	};
}
function M_({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: i }) {
	return (a) => {
		e.usedRightMouseButton = !!(n && T_(t, e.mouseButton ?? 0)), a.sourceEvent?.sync || r([
			a.transform.x,
			a.transform.y,
			a.transform.k
		]), i && !a.sourceEvent?.internal && i?.(a.sourceEvent, S_(a.transform));
	};
}
function N_({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: i, onPaneContextMenu: a }) {
	return (o) => {
		if (!o.sourceEvent?.internal && (e.isZoomingOrPanning = !1, a && T_(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && o.sourceEvent && a(o.sourceEvent), e.usedRightMouseButton = !1, r(!1), i)) {
			let t = S_(o.transform);
			e.prevViewport = t, clearTimeout(e.timerId), e.timerId = setTimeout(() => {
				i?.(o.sourceEvent, t);
			}, n ? 150 : 0);
		}
	};
}
function P_({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: o, noWheelClassName: s, noPanClassName: c, lib: l, connectionInProgress: u }) {
	return (d) => {
		let f = e || t, p = n && d.ctrlKey, m = d.type === "wheel";
		if (d.button === 1 && d.type === "mousedown" && (w_(d, `${l}-flow__node`) || w_(d, `${l}-flow__edge`))) return !0;
		if (!r && !f && !i && !a && !n || o || u && !m || w_(d, s) && m || w_(d, c) && (!m || i && m && !e) || !n && d.ctrlKey && m) return !1;
		if (!n && d.type === "touchstart" && d.touches?.length > 1) return d.preventDefault(), !1;
		if (!f && !i && !p && m || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown") return !1;
		let h = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
		return (!d.ctrlKey || m) && h;
	};
}
function F_({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: i, onPanZoom: a, onPanZoomStart: o, onPanZoomEnd: s, onDraggingChange: c }) {
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
	}, u = e.getBoundingClientRect(), d = sh().scaleExtent([t, n]).translateExtent(r), f = qf(e).call(d);
	v({
		x: i.x,
		y: i.y,
		zoom: Mh(i.zoom, t, n)
	}, [[0, 0], [u.width, u.height]], r);
	let p = f.on("wheel.zoom"), m = f.on("dblclick.zoom");
	d.wheelDelta(O_);
	function h(e, t) {
		return f ? new Promise((n) => {
			d?.interpolate(t?.interpolate === "linear" ? be : Rr).transform(D_(f, t?.duration, t?.ease, () => n(!0)), e);
		}) : Promise.resolve(!1);
	}
	function g({ noWheelClassName: e, noPanClassName: t, onPaneContextMenu: n, userSelectionActive: r, panOnScroll: i, panOnDrag: u, panOnScrollMode: h, panOnScrollSpeed: g, preventScrolling: v, zoomOnPinch: y, zoomOnScroll: b, zoomOnDoubleClick: x, zoomActivationKeyPressed: S, lib: C, onTransformChange: w, connectionInProgress: T, paneClickDistance: E, selectionOnDrag: D }) {
		r && !l.isZoomingOrPanning && _();
		let O = i && !S && !r;
		d.clickDistance(D ? Infinity : !Gh(E) || E < 0 ? 0 : E);
		let k = O ? k_({
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
		}) : A_({
			noWheelClassName: e,
			preventScrolling: v,
			d3ZoomHandler: p
		});
		if (f.on("wheel.zoom", k, { passive: !1 }), !r) {
			let e = j_({
				zoomPanValues: l,
				onDraggingChange: c,
				onPanZoomStart: o
			});
			d.on("start", e);
			let t = M_({
				zoomPanValues: l,
				panOnDrag: u,
				onPaneContextMenu: !!n,
				onPanZoom: a,
				onTransformChange: w
			});
			d.on("zoom", t);
			let r = N_({
				zoomPanValues: l,
				panOnDrag: u,
				panOnScroll: i,
				onPaneContextMenu: n,
				onPanZoomEnd: s,
				onDraggingChange: c
			});
			d.on("end", r);
		}
		let A = P_({
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
		let r = C_(e), i = d?.constrain()(r, t, n);
		return i && await h(i), new Promise((e) => e(i));
	}
	async function y(e, t) {
		let n = C_(e);
		return await h(n, t), new Promise((e) => e(n));
	}
	function b(e) {
		if (f) {
			let t = C_(e), n = f.property("__zoom");
			(n.k !== e.zoom || n.x !== e.x || n.y !== e.y) && d?.transform(f, t, null, { sync: !0 });
		}
	}
	function x() {
		let e = f ? Qm(f.node()) : {
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
			d?.interpolate(t?.interpolate === "linear" ? be : Rr).scaleTo(D_(f, t?.duration, t?.ease, () => n(!0)), e);
		}) : Promise.resolve(!1);
	}
	function C(e, t) {
		return f ? new Promise((n) => {
			d?.interpolate(t?.interpolate === "linear" ? be : Rr).scaleBy(D_(f, t?.duration, t?.ease, () => n(!0)), e);
		}) : Promise.resolve(!1);
	}
	function w(e) {
		d?.scaleExtent(e);
	}
	function T(e) {
		d?.translateExtent(e);
	}
	function E(e) {
		let t = !Gh(e) || e < 0 ? 0 : e;
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
var I_;
(function(e) {
	e.Line = "line", e.Handle = "handle";
})(I_ ||= {});
function L_({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: i, affectsY: a }) {
	let o = e - t, s = n - r, c = [o > 0 ? 1 : o < 0 ? -1 : 0, s > 0 ? 1 : s < 0 ? -1 : 0];
	return o && i && (c[0] *= -1), s && a && (c[1] *= -1), c;
}
function R_(e) {
	return {
		isHorizontal: e.includes("right") || e.includes("left"),
		isVertical: e.includes("bottom") || e.includes("top"),
		affectsX: e.includes("left"),
		affectsY: e.includes("top")
	};
}
function z_(e, t) {
	return Math.max(0, t - e);
}
function B_(e, t) {
	return Math.max(0, e - t);
}
function V_(e, t, n) {
	return Math.max(0, t - e, e - n);
}
function H_(e, t) {
	return e ? !t : t;
}
function U_(e, t, n, r, i, a, o, s) {
	let { affectsX: c, affectsY: l } = t, { isHorizontal: u, isVertical: d } = t, f = u && d, { xSnapped: p, ySnapped: m } = n, { minWidth: h, maxWidth: g, minHeight: _, maxHeight: v } = r, { x: y, y: b, width: x, height: S, aspectRatio: C } = e, w = Math.floor(u ? p - e.pointerX : 0), T = Math.floor(d ? m - e.pointerY : 0), E = x + (c ? -w : w), D = S + (l ? -T : T), O = -a[0] * x, k = -a[1] * S, A = V_(E, h, g), j = V_(D, _, v);
	if (o) {
		let e = 0, t = 0;
		c && w < 0 ? e = z_(y + w + O, o[0][0]) : !c && w > 0 && (e = B_(y + E + O, o[1][0])), l && T < 0 ? t = z_(b + T + k, o[0][1]) : !l && T > 0 && (t = B_(b + D + k, o[1][1])), A = Math.max(A, e), j = Math.max(j, t);
	}
	if (s) {
		let e = 0, t = 0;
		c && w > 0 ? e = B_(y + w, s[0][0]) : !c && w < 0 && (e = z_(y + E, s[1][0])), l && T > 0 ? t = B_(b + T, s[0][1]) : !l && T < 0 && (t = z_(b + D, s[1][1])), A = Math.max(A, e), j = Math.max(j, t);
	}
	if (i) {
		if (u) {
			let e = V_(E / C, _, v) * C;
			if (A = Math.max(A, e), o) {
				let e = 0;
				e = !c && !l || c && !l && f ? B_(b + k + E / C, o[1][1]) * C : z_(b + k + (c ? w : -w) / C, o[0][1]) * C, A = Math.max(A, e);
			}
			if (s) {
				let e = 0;
				e = !c && !l || c && !l && f ? z_(b + E / C, s[1][1]) * C : B_(b + (c ? w : -w) / C, s[0][1]) * C, A = Math.max(A, e);
			}
		}
		if (d) {
			let e = V_(D * C, h, g) / C;
			if (j = Math.max(j, e), o) {
				let e = 0;
				e = !c && !l || l && !c && f ? B_(y + D * C + O, o[1][0]) / C : z_(y + (l ? T : -T) * C + O, o[0][0]) / C, j = Math.max(j, e);
			}
			if (s) {
				let e = 0;
				e = !c && !l || l && !c && f ? z_(y + D * C, s[1][0]) / C : B_(y + (l ? T : -T) * C, s[0][0]) / C, j = Math.max(j, e);
			}
		}
	}
	T += T < 0 ? j : -j, w += w < 0 ? A : -A, i && (f ? E > D * C ? T = (H_(c, l) ? -w : w) / C : w = (H_(c, l) ? -T : T) * C : u ? (T = w / C, l = c) : (w = T * C, c = l));
	let M = c ? y + w : y, N = l ? b + T : b;
	return {
		width: x + (c ? -w : w),
		height: S + (l ? -T : T),
		x: a[0] * w * (c ? -1 : 1) + M,
		y: a[1] * T * (l ? -1 : 1) + N
	};
}
var W_ = {
	width: 0,
	height: 0,
	x: 0,
	y: 0
}, G_ = {
	...W_,
	pointerX: 0,
	pointerY: 0,
	aspectRatio: 1
};
function K_(e) {
	return [[0, 0], [e.measured.width, e.measured.height]];
}
function q_(e, t, n) {
	let r = t.position.x + e.position.x, i = t.position.y + e.position.y, a = e.measured.width ?? 0, o = e.measured.height ?? 0, s = n[0] * a, c = n[1] * o;
	return [[r - s, i - c], [r + a - s, i + o - c]];
}
function J_({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: i }) {
	let a = qf(e), o = {
		controlDirection: R_("bottom-right"),
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
		let m = { ...W_ }, h = { ...G_ };
		o = {
			boundaries: s,
			resizeDirection: l,
			keepAspectRatio: c,
			controlDirection: R_(e)
		};
		let g, _ = null, v = [], y, b, x, S = !1, C = cp().on("start", (e) => {
			let { nodeLookup: r, transform: i, snapGrid: a, snapToGrid: o, nodeOrigin: s, paneDomNode: c } = n();
			if (g = r.get(t), !g) return;
			_ = c?.getBoundingClientRect() ?? null;
			let { xSnapped: l, ySnapped: d } = cg(e.sourceEvent, {
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
			}, y = void 0, g.parentId && (g.extent === "parent" || g.expandParent) && (y = r.get(g.parentId), b = y && g.extent === "parent" ? K_(y) : void 0), v = [], x = void 0;
			for (let [e, n] of r) if (n.parentId === t && (v.push({
				id: e,
				position: { ...n.position },
				extent: n.extent
			}), n.extent === "parent" || n.expandParent)) {
				let e = q_(n, g, n.origin ?? s);
				x = x ? [[Math.min(e[0][0], x[0][0]), Math.min(e[0][1], x[0][1])], [Math.max(e[1][0], x[1][0]), Math.max(e[1][1], x[1][1])]] : e;
			}
			u?.(e, { ...m });
		}).on("drag", (e) => {
			let { transform: t, snapGrid: i, snapToGrid: a, nodeOrigin: s } = n(), c = cg(e.sourceEvent, {
				transform: t,
				snapGrid: i,
				snapToGrid: a,
				containerBounds: _
			}), l = [];
			if (!g) return;
			let { x: u, y: f, width: C, height: w } = m, T = {}, E = g.origin ?? s, { width: D, height: O, x: k, y: A } = U_(h, o.controlDirection, c, o.boundaries, o.keepAspectRatio, E, b, x), j = D !== C, M = O !== w, N = k !== u && j, P = A !== f && M;
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
			let F = L_({
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
var Y_ = /* @__PURE__ */ t(((e) => {
	var t = Je(), n = Ke();
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useSyncExternalStore, o = t.useRef, s = t.useEffect, c = t.useMemo, l = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
		var d = o(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = c(function() {
			function e(e) {
				if (!a) {
					if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
						var t = f.value;
						if (u(t, e)) return s = t;
					}
					return s = e;
				}
				if (t = s, i(o, e)) return t;
				var n = r(e);
				return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
			}
			var a = !1, o, s, c = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, c === null ? void 0 : function() {
				return e(c());
			}];
		}, [
			t,
			n,
			r,
			u
		]);
		var p = a(e, d[0], d[1]);
		return s(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), l(p), p;
	};
})), X_ = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var n = Je(), r = Ke(), i = typeof Object.is == "function" ? Object.is : t, a = r.useSyncExternalStore, o = n.useRef, s = n.useEffect, c = n.useMemo, l = n.useDebugValue;
		e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
			var d = o(null);
			if (d.current === null) {
				var f = {
					hasValue: !1,
					value: null
				};
				d.current = f;
			} else f = d.current;
			d = c(function() {
				function e(e) {
					if (!a) {
						if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
							var t = f.value;
							if (u(t, e)) return s = t;
						}
						return s = e;
					}
					if (t = s, i(o, e)) return t;
					var n = r(e);
					return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
				}
				var a = !1, o, s, c = n === void 0 ? null : n;
				return [function() {
					return e(t());
				}, c === null ? void 0 : function() {
					return e(c());
				}];
			}, [
				t,
				n,
				r,
				u
			]);
			var p = a(e, d[0], d[1]);
			return s(function() {
				f.hasValue = !0, f.value = p;
			}, [p]), l(p), p;
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Z_ = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? Y_() : X_();
})))(), 1), Q_ = (e) => {
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
}, $_ = (e) => e ? Q_(e) : Q_, { useDebugValue: ev } = En, { useSyncExternalStoreWithSelector: tv } = Z_.default, nv = (e) => e;
function rv(e, t = nv, n) {
	let r = tv(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
	return ev(r), r;
}
var iv = (e, t) => {
	let n = $_(e), r = (e, r = t) => rv(n, e, r);
	return Object.assign(r, n), r;
}, av = (e, t) => e ? iv(e, t) : iv;
//#endregion
//#region ../../node_modules/.pnpm/zustand@4.5.7_@types+react@18.3.18_react@18.3.1/node_modules/zustand/esm/shallow.mjs
function ov(e, t) {
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
var sv = kn(null), cv = sv.Provider, lv = ch.error001();
function $(e, t) {
	let n = Pn(sv);
	if (n === null) throw Error(lv);
	return rv(n, e, t);
}
function uv() {
	let e = Pn(sv);
	if (e === null) throw Error(lv);
	return K(() => ({
		getState: e.getState,
		setState: e.setState,
		subscribe: e.subscribe
	}), [e]);
}
var dv = { display: "none" }, fv = {
	position: "absolute",
	width: 1,
	height: 1,
	margin: -1,
	border: 0,
	padding: 0,
	overflow: "hidden",
	clip: "rect(0px, 0px, 0px, 0px)",
	clipPath: "inset(100%)"
}, pv = "react-flow__node-desc", mv = "react-flow__edge-desc", hv = "react-flow__aria-live", gv = (e) => e.ariaLiveMessage, _v = (e) => e.ariaLabelConfig;
function vv({ rfId: e }) {
	let t = $(gv);
	return X("div", {
		id: `${hv}-${e}`,
		"aria-live": "assertive",
		"aria-atomic": "true",
		style: fv,
		children: t
	});
}
function yv({ rfId: e, disableKeyboardA11y: t }) {
	let n = $(_v);
	return Z(Y, { children: [
		X("div", {
			id: `${pv}-${e}`,
			style: dv,
			children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"]
		}),
		X("div", {
			id: `${mv}-${e}`,
			style: dv,
			children: n["edge.a11yDescription.default"]
		}),
		!t && X(vv, { rfId: e })
	] });
}
var bv = jn(({ position: e = "top-left", children: t, className: n, style: r, ...i }, a) => {
	let o = `${e}`.split("-");
	return X("div", {
		className: Vu([
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
bv.displayName = "Panel";
function xv({ proOptions: e, position: t = "bottom-right" }) {
	return e?.hideAttribution ? null : X(bv, {
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
var Sv = (e) => {
	let t = [], n = [];
	for (let [, n] of e.nodeLookup) n.selected && t.push(n.internals.userNode);
	for (let [, t] of e.edgeLookup) t.selected && n.push(t);
	return {
		selectedNodes: t,
		selectedEdges: n
	};
}, Cv = (e) => e.id;
function wv(e, t) {
	return ov(e.selectedNodes.map(Cv), t.selectedNodes.map(Cv)) && ov(e.selectedEdges.map(Cv), t.selectedEdges.map(Cv));
}
function Tv({ onSelectionChange: e }) {
	let t = uv(), { selectedNodes: n, selectedEdges: r } = $(Sv, wv);
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
var Ev = (e) => !!e.onSelectionChangeHandlers;
function Dv({ onSelectionChange: e }) {
	let t = $(Ev);
	return e || t ? X(Tv, { onSelectionChange: e }) : null;
}
var Ov = typeof window < "u" ? Ln : G, kv = [0, 0], Av = {
	x: 0,
	y: 0,
	zoom: 1
}, jv = [.../* @__PURE__ */ "nodes.edges.defaultNodes.defaultEdges.onConnect.onConnectStart.onConnectEnd.onClickConnectStart.onClickConnectEnd.nodesDraggable.autoPanOnNodeFocus.nodesConnectable.nodesFocusable.edgesFocusable.edgesReconnectable.elevateNodesOnSelect.elevateEdgesOnSelect.minZoom.maxZoom.nodeExtent.onNodesChange.onEdgesChange.elementsSelectable.connectionMode.snapGrid.snapToGrid.translateExtent.connectOnClick.defaultEdgeOptions.fitView.fitViewOptions.onNodesDelete.onEdgesDelete.onDelete.onNodeDrag.onNodeDragStart.onNodeDragStop.onSelectionDrag.onSelectionDragStart.onSelectionDragStop.onMoveStart.onMove.onMoveEnd.noPanClassName.nodeOrigin.autoPanOnConnect.autoPanOnNodeDrag.onError.connectionRadius.isValidConnection.selectNodesOnDrag.nodeDragThreshold.connectionDragThreshold.onBeforeDelete.debug.autoPanSpeed.ariaLabelConfig.zIndexMode".split("."), "rfId"], Mv = (e) => ({
	setNodes: e.setNodes,
	setEdges: e.setEdges,
	setMinZoom: e.setMinZoom,
	setMaxZoom: e.setMaxZoom,
	setTranslateExtent: e.setTranslateExtent,
	setNodeExtent: e.setNodeExtent,
	reset: e.reset,
	setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), Nv = {
	translateExtent: lh,
	nodeOrigin: kv,
	minZoom: .5,
	maxZoom: 2,
	elementsSelectable: !0,
	noPanClassName: "nopan",
	rfId: "1"
};
function Pv(e) {
	let { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: i, setTranslateExtent: a, setNodeExtent: o, reset: s, setDefaultNodesAndEdges: c } = $(Mv, ov), l = uv();
	Ov(() => (c(e.defaultNodes, e.defaultEdges), () => {
		u.current = Nv, s();
	}), []);
	let u = q(Nv);
	return Ov(() => {
		for (let s of jv) {
			let c = e[s];
			c !== u.current[s] && e[s] !== void 0 && (s === "nodes" ? t(c) : s === "edges" ? n(c) : s === "minZoom" ? r(c) : s === "maxZoom" ? i(c) : s === "translateExtent" ? a(c) : s === "nodeExtent" ? o(c) : s === "ariaLabelConfig" ? l.setState({ ariaLabelConfig: sg(c) }) : s === "fitView" ? l.setState({ fitViewQueued: c }) : s === "fitViewOptions" ? l.setState({ fitViewOptions: c }) : l.setState({ [s]: c }));
		}
		u.current = e;
	}, jv.map((t) => e[t])), null;
}
function Fv() {
	return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Iv(e) {
	let [t, n] = J(e === "system" ? null : e);
	return G(() => {
		if (e !== "system") {
			n(e);
			return;
		}
		let t = Fv(), r = () => n(t?.matches ? "dark" : "light");
		return r(), t?.addEventListener("change", r), () => {
			t?.removeEventListener("change", r);
		};
	}, [e]), t === null ? Fv()?.matches ? "dark" : "light" : t;
}
var Lv = typeof document < "u" ? document : null;
function Rv(e = null, t = {
	target: Lv,
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
		let n = t?.target ?? Lv, c = t?.actInsideInputWithModifier ?? !0;
		if (e !== null) {
			let e = (e) => {
				if (i.current = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey, (!i.current || i.current && !c) && fg(e)) return !1;
				let n = Bv(e.code, s);
				if (a.current.add(e[n]), zv(o, a.current, !1)) {
					let n = e.composedPath?.()?.[0] || e.target, a = n?.nodeName === "BUTTON" || n?.nodeName === "A";
					t.preventDefault !== !1 && (i.current || !a) && e.preventDefault(), r(!0);
				}
			}, l = (e) => {
				let t = Bv(e.code, s);
				zv(o, a.current, !0) ? (r(!1), a.current.clear()) : a.current.delete(e[t]), e.key === "Meta" && a.current.clear(), i.current = !1;
			}, u = () => {
				a.current.clear(), r(!1);
			};
			return n?.addEventListener("keydown", e), n?.addEventListener("keyup", l), window.addEventListener("blur", u), window.addEventListener("contextmenu", u), () => {
				n?.removeEventListener("keydown", e), n?.removeEventListener("keyup", l), window.removeEventListener("blur", u), window.removeEventListener("contextmenu", u);
			};
		}
	}, [e, r]), n;
}
function zv(e, t, n) {
	return e.filter((e) => n || e.length === t.size).some((e) => e.every((e) => t.has(e)));
}
function Bv(e, t) {
	return t.includes(e) ? "code" : "key";
}
var Vv = () => {
	let e = uv();
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
			let { width: r, height: i, minZoom: a, maxZoom: o, panZoom: s } = e.getState(), c = $h(t, r, i, a, o, n?.padding ?? .1);
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
			return Jh(l, r, n.snapToGrid ?? a, u);
		},
		flowToScreenPosition: (t) => {
			let { transform: n, domNode: r } = e.getState();
			if (!r) return t;
			let { x: i, y: a } = r.getBoundingClientRect(), o = Yh(t, n);
			return {
				x: o.x + i,
				y: o.y + a
			};
		}
	}), []);
};
function Hv(e, t) {
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
		for (let e of t) Uv(e, i);
		n.push(i);
	}
	return i.length && i.forEach((e) => {
		e.index === void 0 ? n.push({ ...e.item }) : n.splice(e.index, 0, { ...e.item });
	}), n;
}
function Uv(e, t) {
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
function Wv(e, t) {
	return Hv(e, t);
}
function Gv(e, t) {
	return Hv(e, t);
}
function Kv(e, t) {
	return {
		id: e,
		type: "select",
		selected: t
	};
}
function qv(e, t = /* @__PURE__ */ new Set(), n = !1) {
	let r = [];
	for (let [i, a] of e) {
		let e = t.has(i);
		!(a.selected === void 0 && !e) && a.selected !== e && (n && (a.selected = e), r.push(Kv(a.id, e)));
	}
	return r;
}
function Jv({ items: e = [], lookup: t }) {
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
function Yv(e) {
	return {
		id: e.id,
		type: "remove"
	};
}
var Xv = (e) => xh(e), Zv = (e) => bh(e);
function Qv(e) {
	return jn(e);
}
function $v(e) {
	let [t, n] = J(BigInt(0)), [r] = J(() => ey(() => n((e) => e + BigInt(1))));
	return Ov(() => {
		let t = r.get();
		t.length && (e(t), r.reset());
	}, [t]), r;
}
function ey(e) {
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
var ty = kn(null);
function ny({ children: e }) {
	let t = uv(), n = $v(W((e) => {
		let { nodes: n = [], setNodes: r, hasDefaultNodes: i, onNodesChange: a, nodeLookup: o, fitViewQueued: s, onNodesChangeMiddlewareMap: c } = t.getState(), l = n;
		for (let t of e) l = typeof t == "function" ? t(l) : t;
		let u = Jv({
			items: l,
			lookup: o
		});
		for (let e of c.values()) u = e(u);
		i && r(l), u.length > 0 ? a?.(u) : s && window.requestAnimationFrame(() => {
			let { fitViewQueued: e, nodes: n, setNodes: r } = t.getState();
			e && r(n);
		});
	}, [])), r = $v(W((e) => {
		let { edges: n = [], setEdges: r, hasDefaultEdges: i, onEdgesChange: a, edgeLookup: o } = t.getState(), s = n;
		for (let t of e) s = typeof t == "function" ? t(s) : t;
		i ? r(s) : a && a(Jv({
			items: s,
			lookup: o
		}));
	}, [])), i = K(() => ({
		nodeQueue: n,
		edgeQueue: r
	}), []);
	return X(ty.Provider, {
		value: i,
		children: e
	});
}
function ry() {
	let e = Pn(ty);
	if (!e) throw Error("useBatchContext must be used within a BatchProvider");
	return e;
}
var iy = (e) => !!e.panZoom;
function ay() {
	let e = Vv(), t = uv(), n = ry(), r = $(iy), i = K(() => {
		let e = (e) => t.getState().nodeLookup.get(e), r = (e) => {
			n.nodeQueue.push(e);
		}, i = (e) => {
			n.edgeQueue.push(e);
		}, a = (e) => {
			let { nodeLookup: n, nodeOrigin: r } = t.getState(), i = Xv(e) ? e : n.get(e.id), a = i.parentId ? ig(i.position, i.measured, i.parentId, n, r) : i.position;
			return Bh({
				...i,
				position: a,
				width: i.measured?.width ?? i.width,
				height: i.measured?.height ?? i.height
			});
		}, o = (e, t, n = { replace: !1 }) => {
			r((r) => r.map((r) => {
				if (r.id === e) {
					let e = typeof t == "function" ? t(r) : t;
					return n.replace && Xv(e) ? e : {
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
					return n.replace && Zv(e) ? e : {
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
				let { nodes: r, edges: i, onNodesDelete: a, onEdgesDelete: o, triggerNodeChanges: s, triggerEdgeChanges: c, onDelete: l, onBeforeDelete: u } = t.getState(), { nodes: d, edges: f } = await jh({
					nodesToRemove: e,
					edgesToRemove: n,
					nodes: r,
					edges: i,
					onBeforeDelete: u
				}), p = f.length > 0, m = d.length > 0;
				if (p) {
					let e = f.map(Yv);
					o?.(f), c(e);
				}
				if (m) {
					let e = d.map(Yv);
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
				let i = Wh(e), o = i ? e : a(e), s = r !== void 0;
				return o ? (r || t.getState().nodes).filter((r) => {
					let a = t.getState().nodeLookup.get(r.id);
					if (a && !i && (r.id === e.id || !a.internals.positionAbsolute)) return !1;
					let c = Bh(s ? r : a), l = Uh(c, o);
					return n && l > 0 || l >= c.width * c.height || l >= o.width * o.height;
				}) : [];
			},
			isNodeIntersecting: (e, t, n = !0) => {
				let r = Wh(e) ? e : a(e);
				if (!r) return !1;
				let i = Uh(r, t);
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
				return wh(e, {
					nodeLookup: n,
					nodeOrigin: r
				});
			},
			getHandleConnections: ({ type: e, id: n, nodeId: r }) => Array.from(t.getState().connectionLookup.get(`${r}-${e}${n ? `-${n}` : ""}`)?.values() ?? []),
			getNodeConnections: ({ type: e, handleId: n, nodeId: r }) => Array.from(t.getState().connectionLookup.get(`${r}${e ? n ? `-${e}-${n}` : `-${e}` : ""}`)?.values() ?? []),
			fitView: async (e) => {
				let r = t.getState().fitViewResolver ?? og();
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
var oy = (e) => e.selected, sy = typeof window < "u" ? window : void 0;
function cy({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
	let n = uv(), { deleteElements: r } = ay(), i = Rv(e, { actInsideInputWithModifier: !1 }), a = Rv(t, { target: sy });
	G(() => {
		if (i) {
			let { edges: e, nodes: t } = n.getState();
			r({
				nodes: t.filter(oy),
				edges: e.filter(oy)
			}), n.setState({ nodesSelectionActive: !1 });
		}
	}, [i]), G(() => {
		n.setState({ multiSelectionActive: a });
	}, [a]);
}
function ly(e) {
	let t = uv();
	G(() => {
		let n = () => {
			if (!e.current || !(e.current.checkVisibility?.() ?? !0)) return !1;
			let n = lg(e.current);
			(n.height === 0 || n.width === 0) && t.getState().onError?.("004", ch.error004()), t.setState({
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
var uy = {
	position: "absolute",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0
}, dy = (e) => ({
	userSelectionActive: e.userSelectionActive,
	lib: e.lib,
	connectionInProgress: e.connection.inProgress
});
function fy({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: i = .5, panOnScrollMode: a = ph.Free, zoomOnDoubleClick: o = !0, panOnDrag: s = !0, defaultViewport: c, translateExtent: l, minZoom: u, maxZoom: d, zoomActivationKeyCode: f, preventScrolling: p = !0, children: m, noWheelClassName: h, noPanClassName: g, onViewportChange: _, isControlledViewport: v, paneClickDistance: y, selectionOnDrag: b }) {
	let x = uv(), S = q(null), { userSelectionActive: C, lib: w, connectionInProgress: T } = $(dy, ov), E = Rv(f), D = q();
	ly(S);
	let O = W((e) => {
		_?.({
			x: e[0],
			y: e[1],
			zoom: e[2]
		}), v || x.setState({ transform: e });
	}, [_, v]);
	return G(() => {
		if (S.current) {
			D.current = F_({
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
		style: uy,
		children: m
	});
}
var py = (e) => ({
	userSelectionActive: e.userSelectionActive,
	userSelectionRect: e.userSelectionRect
});
function my() {
	let { userSelectionActive: e, userSelectionRect: t } = $(py, ov);
	return e && t ? X("div", {
		className: "react-flow__selection react-flow__container",
		style: {
			width: t.width,
			height: t.height,
			transform: `translate(${t.x}px, ${t.y}px)`
		}
	}) : null;
}
var hy = (e, t) => (n) => {
	n.target === t.current && e?.(n);
}, gy = (e) => ({
	userSelectionActive: e.userSelectionActive,
	elementsSelectable: e.elementsSelectable,
	connectionInProgress: e.connection.inProgress,
	dragging: e.paneDragging
});
function _y({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = mh.Full, panOnDrag: r, paneClickDistance: i, selectionOnDrag: a, onSelectionStart: o, onSelectionEnd: s, onPaneClick: c, onPaneContextMenu: l, onPaneScroll: u, onPaneMouseEnter: d, onPaneMouseMove: f, onPaneMouseLeave: p, children: m }) {
	let h = uv(), { userSelectionActive: g, elementsSelectable: _, dragging: v, connectionInProgress: y } = $(gy, ov), b = _ && (e || g), x = q(null), S = q(), C = q(/* @__PURE__ */ new Set()), w = q(/* @__PURE__ */ new Set()), T = q(!1), E = (e) => {
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
		let { x: o, y: s } = mg(n.nativeEvent, S.current);
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
		let { x: m, y: g } = mg(e.nativeEvent, S.current), { startX: _, startY: v } = r;
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
		C.current = new Set(Eh(s, y, a, n === mh.Partial, !0).map((e) => e.id)), w.current = /* @__PURE__ */ new Set();
		let E = f?.selectable ?? !0;
		for (let e of C.current) {
			let t = l.get(e);
			if (t) for (let { edgeId: e } of t.values()) {
				let t = c.get(e);
				t && (t.selectable ?? E) && w.current.add(e);
			}
		}
		ag(b, C.current) || u(qv(s, C.current, !0)), ag(x, w.current) || d(qv(c, w.current)), h.setState({
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
		className: Vu(["react-flow__pane", {
			draggable: N,
			dragging: v,
			selection: e
		}]),
		onClick: b ? void 0 : hy(E, x),
		onContextMenu: hy(D, x),
		onWheel: hy(O, x),
		onPointerEnter: b ? void 0 : d,
		onPointerMove: b ? j : f,
		onPointerUp: b ? M : void 0,
		onPointerDownCapture: b ? A : void 0,
		onClickCapture: b ? k : void 0,
		onPointerLeave: p,
		ref: x,
		style: uy,
		children: [m, X(my, {})]
	});
}
function vy({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
	let { addSelectedNodes: i, unselectNodesAndEdges: a, multiSelectionActive: o, nodeLookup: s, onError: c } = t.getState(), l = s.get(e);
	if (!l) {
		c?.("012", ch.error012(e));
		return;
	}
	t.setState({ nodesSelectionActive: !1 }), l.selected ? (n || l.selected && o) && (a({
		nodes: [l],
		edges: []
	}), requestAnimationFrame(() => r?.current?.blur())) : i([e]);
}
function yy({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: i, isSelectable: a, nodeClickDistance: o }) {
	let s = uv(), [c, l] = J(!1), u = q();
	return G(() => {
		u.current = u_({
			getStoreItems: () => s.getState(),
			onNodeMouseDown: (t) => {
				vy({
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
var by = (e) => (t) => t.selected && (t.draggable || e && t.draggable === void 0);
function xy() {
	let e = uv();
	return W((t) => {
		let { nodeExtent: n, snapToGrid: r, snapGrid: i, nodesDraggable: a, onError: o, updateNodePositions: s, nodeLookup: c, nodeOrigin: l } = e.getState(), u = /* @__PURE__ */ new Map(), d = by(a), f = r ? i[0] : 5, p = r ? i[1] : 5, m = t.direction.x * f * t.factor, h = t.direction.y * p * t.factor;
		for (let [, e] of c) {
			if (!d(e)) continue;
			let t = {
				x: e.internals.positionAbsolute.x + m,
				y: e.internals.positionAbsolute.y + h
			};
			r && (t = qh(t, i));
			let { position: a, positionAbsolute: s } = Ah({
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
var Sy = kn(null), Cy = Sy.Provider;
Sy.Consumer;
var wy = () => Pn(Sy), Ty = (e) => ({
	connectOnClick: e.connectOnClick,
	noPanClassName: e.noPanClassName,
	rfId: e.rfId
}), Ey = (e, t, n) => (r) => {
	let { connectionClickStartHandle: i, connectionMode: a, connection: o } = r, { fromHandle: s, toHandle: c, isValid: l } = o, u = c?.nodeId === e && c?.id === t && c?.type === n;
	return {
		connectingFrom: s?.nodeId === e && s?.id === t && s?.type === n,
		connectingTo: u,
		clickConnecting: i?.nodeId === e && i?.id === t && i?.type === n,
		isPossibleEndHandle: a === fh.Strict ? s?.type !== n : e !== s?.nodeId || t !== s?.id,
		connectionInProcess: !!s,
		clickConnectionInProcess: !!i,
		valid: u && l
	};
};
function Dy({ type: e = "source", position: t = Q.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: o, onConnect: s, children: c, className: l, onMouseDown: u, onTouchStart: d, ...f }, p) {
	let m = o || null, h = e === "target", g = uv(), _ = wy(), { connectOnClick: v, noPanClassName: y, rfId: b } = $(Ty, ov), { connectingFrom: x, connectingTo: S, clickConnecting: C, isPossibleEndHandle: w, connectionInProcess: T, clickConnectionInProcess: E, valid: D } = $(Ey(_, m, e), ov);
	_ || g.getState().onError?.("010", ch.error010());
	let O = (e) => {
		let { defaultEdgeOptions: t, onConnect: n, hasDefaultEdges: r } = g.getState(), i = {
			...t,
			...e
		};
		if (r) {
			let { edges: e, setEdges: t } = g.getState();
			t(Tg(i, e));
		}
		n?.(i), s?.(i);
	}, k = (e) => {
		if (!_) return;
		let t = pg(e.nativeEvent);
		if (i && (t && e.button === 0 || !t)) {
			let t = g.getState();
			b_.onPointerDown(e.nativeEvent, {
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
		className: Vu([
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
			let p = ug(t.target), h = n || c, { connection: v, isValid: y } = b_.isValid(t.nativeEvent, {
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
var Oy = Nn(Qv(Dy));
function ky({ data: e, isConnectable: t, sourcePosition: n = Q.Bottom }) {
	return Z(Y, { children: [e?.label, X(Oy, {
		type: "source",
		position: n,
		isConnectable: t
	})] });
}
function Ay({ data: e, isConnectable: t, targetPosition: n = Q.Top, sourcePosition: r = Q.Bottom }) {
	return Z(Y, { children: [
		X(Oy, {
			type: "target",
			position: n,
			isConnectable: t
		}),
		e?.label,
		X(Oy, {
			type: "source",
			position: r,
			isConnectable: t
		})
	] });
}
function jy() {
	return null;
}
function My({ data: e, isConnectable: t, targetPosition: n = Q.Top }) {
	return Z(Y, { children: [X(Oy, {
		type: "target",
		position: n,
		isConnectable: t
	}), e?.label] });
}
var Ny = {
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
}, Py = {
	input: ky,
	default: Ay,
	output: My,
	group: jy
};
function Fy(e) {
	return e.internals.handleBounds === void 0 ? {
		width: e.width ?? e.initialWidth ?? e.style?.width,
		height: e.height ?? e.initialHeight ?? e.style?.height
	} : {
		width: e.width ?? e.style?.width,
		height: e.height ?? e.style?.height
	};
}
var Iy = (e) => {
	let { width: t, height: n, x: r, y: i } = Th(e.nodeLookup, { filter: (e) => !!e.selected });
	return {
		width: Gh(t) ? t : null,
		height: Gh(n) ? n : null,
		userSelectionActive: e.userSelectionActive,
		transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`
	};
};
function Ly({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
	let r = uv(), { width: i, height: a, transformString: o, userSelectionActive: s } = $(Iy, ov), c = xy(), l = q(null);
	G(() => {
		n || l.current?.focus({ preventScroll: !0 });
	}, [n]);
	let u = !s && i !== null && a !== null;
	if (yy({
		nodeRef: l,
		disabled: !u
	}), !u) return null;
	let d = e ? (t) => {
		e(t, r.getState().nodes.filter((e) => e.selected));
	} : void 0;
	return X("div", {
		className: Vu([
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
				Object.prototype.hasOwnProperty.call(Ny, e.key) && (e.preventDefault(), c({
					direction: Ny[e.key],
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
var Ry = typeof window < "u" ? window : void 0, zy = (e) => ({
	nodesSelectionActive: e.nodesSelectionActive,
	userSelectionActive: e.userSelectionActive
});
function By({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: o, paneClickDistance: s, deleteKeyCode: c, selectionKeyCode: l, selectionOnDrag: u, selectionMode: d, onSelectionStart: f, onSelectionEnd: p, multiSelectionKeyCode: m, panActivationKeyCode: h, zoomActivationKeyCode: g, elementsSelectable: _, zoomOnScroll: v, zoomOnPinch: y, panOnScroll: b, panOnScrollSpeed: x, panOnScrollMode: S, zoomOnDoubleClick: C, panOnDrag: w, defaultViewport: T, translateExtent: E, minZoom: D, maxZoom: O, preventScrolling: k, onSelectionContextMenu: A, noWheelClassName: j, noPanClassName: M, disableKeyboardA11y: N, onViewportChange: P, isControlledViewport: F }) {
	let { nodesSelectionActive: I, userSelectionActive: L } = $(zy, ov), R = Rv(l, { target: Ry }), z = Rv(h, { target: Ry }), B = z || w, ee = z || b, te = u && B !== !0, V = R || L || te;
	return cy({
		deleteKeyCode: c,
		multiSelectionKeyCode: m
	}), X(fy, {
		onPaneContextMenu: a,
		elementsSelectable: _,
		zoomOnScroll: v,
		zoomOnPinch: y,
		panOnScroll: ee,
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
		selectionOnDrag: te,
		children: Z(_y, {
			onSelectionStart: f,
			onSelectionEnd: p,
			onPaneClick: t,
			onPaneMouseEnter: n,
			onPaneMouseMove: r,
			onPaneMouseLeave: i,
			onPaneContextMenu: a,
			onPaneScroll: o,
			panOnDrag: B,
			isSelecting: !!V,
			selectionMode: d,
			selectionKeyPressed: R,
			paneClickDistance: s,
			selectionOnDrag: te,
			children: [e, I && X(Ly, {
				onSelectionContextMenu: A,
				noPanClassName: M,
				disableKeyboardA11y: N
			})]
		})
	});
}
By.displayName = "FlowRenderer";
var Vy = Nn(By), Hy = (e) => (t) => e ? Eh(t.nodeLookup, {
	x: 0,
	y: 0,
	width: t.width,
	height: t.height
}, t.transform, !0).map((e) => e.id) : Array.from(t.nodeLookup.keys());
function Uy(e) {
	return $(W(Hy(e), [e]), ov);
}
var Wy = (e) => e.updateNodeInternals;
function Gy() {
	let e = $(Wy), [t] = J(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((t) => {
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
function Ky({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
	let i = uv(), a = q(null), o = q(null), s = q(e.sourcePosition), c = q(e.targetPosition), l = q(t), u = n && !!e.internals.handleBounds;
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
function qy({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: i, onContextMenu: a, onDoubleClick: o, nodesDraggable: s, elementsSelectable: c, nodesConnectable: l, nodesFocusable: u, resizeObserver: d, noDragClassName: f, noPanClassName: p, disableKeyboardA11y: m, rfId: h, nodeTypes: g, nodeClickDistance: _, onError: v }) {
	let { node: y, internals: b, isParent: x } = $((t) => {
		let n = t.nodeLookup.get(e), r = t.parentLookup.has(e);
		return {
			node: n,
			internals: n.internals,
			isParent: r
		};
	}, ov), S = y.type || "default", C = g?.[S] || Py[S];
	C === void 0 && (v?.("003", ch.error003(S)), S = "default", C = g?.default || Py.default);
	let w = !!(y.draggable || s && y.draggable === void 0), T = !!(y.selectable || c && y.selectable === void 0), E = !!(y.connectable || l && y.connectable === void 0), D = !!(y.focusable || u && y.focusable === void 0), O = uv(), k = rg(y), A = Ky({
		node: y,
		nodeType: S,
		hasDimensions: k,
		resizeObserver: d
	}), j = yy({
		nodeRef: A,
		disabled: y.hidden || !w,
		noDragClassName: f,
		handleSelector: y.dragHandle,
		nodeId: e,
		isSelectable: T,
		nodeClickDistance: _
	}), M = xy();
	if (y.hidden) return null;
	let N = ng(y), P = Fy(y), F = T || w || t || n || r || i, I = n ? (e) => n(e, { ...b.userNode }) : void 0, L = r ? (e) => r(e, { ...b.userNode }) : void 0, R = i ? (e) => i(e, { ...b.userNode }) : void 0, z = a ? (e) => a(e, { ...b.userNode }) : void 0, B = o ? (e) => o(e, { ...b.userNode }) : void 0, ee = (n) => {
		let { selectNodesOnDrag: r, nodeDragThreshold: i } = O.getState();
		T && (!r || !w || i > 0) && vy({
			id: e,
			store: O,
			nodeRef: A
		}), t && t(n, { ...b.userNode });
	}, te = (t) => {
		if (!(fg(t.nativeEvent) || m)) {
			if (uh.includes(t.key) && T) {
				let n = t.key === "Escape";
				vy({
					id: e,
					store: O,
					unselect: n,
					nodeRef: A
				});
			} else if (w && y.selected && Object.prototype.hasOwnProperty.call(Ny, t.key)) {
				t.preventDefault();
				let { ariaLabelConfig: e } = O.getState();
				O.setState({ ariaLiveMessage: e["node.a11yDescription.ariaLiveMessage"]({
					direction: t.key.replace("Arrow", "").toLowerCase(),
					x: ~~b.positionAbsolute.x,
					y: ~~b.positionAbsolute.y
				}) }), M({
					direction: Ny[t.key],
					factor: t.shiftKey ? 4 : 1
				});
			}
		}
	}, V = () => {
		if (m || !A.current?.matches(":focus-visible")) return;
		let { transform: t, width: n, height: r, autoPanOnNodeFocus: i, setCenter: a } = O.getState();
		i && (Eh(/* @__PURE__ */ new Map([[e, y]]), {
			x: 0,
			y: 0,
			width: n,
			height: r
		}, t, !0).length > 0 || a(y.position.x + N.width / 2, y.position.y + N.height / 2, { zoom: t[2] }));
	};
	return X("div", {
		className: Vu([
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
		onClick: ee,
		onDoubleClick: B,
		onKeyDown: D ? te : void 0,
		tabIndex: D ? 0 : void 0,
		onFocus: D ? V : void 0,
		role: y.ariaRole ?? (D ? "group" : void 0),
		"aria-roledescription": "node",
		"aria-describedby": m ? void 0 : `${pv}-${h}`,
		"aria-label": y.ariaLabel,
		...y.domAttributes,
		children: X(Cy, {
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
var Jy = Nn(qy), Yy = (e) => ({
	nodesDraggable: e.nodesDraggable,
	nodesConnectable: e.nodesConnectable,
	nodesFocusable: e.nodesFocusable,
	elementsSelectable: e.elementsSelectable,
	onError: e.onError
});
function Xy(e) {
	let { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: i, onError: a } = $(Yy, ov), o = Uy(e.onlyRenderVisibleElements), s = Gy();
	return X("div", {
		className: "react-flow__nodes",
		style: uy,
		children: o.map((o) => X(Jy, {
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
Xy.displayName = "NodeRenderer";
var Zy = Nn(Xy);
function Qy(e) {
	return $(W((t) => {
		if (!e) return t.edges.map((e) => e.id);
		let n = [];
		if (t.width && t.height) for (let e of t.edges) {
			let r = t.nodeLookup.get(e.source), i = t.nodeLookup.get(e.target);
			r && i && Sg({
				sourceNode: r,
				targetNode: i,
				width: t.width,
				height: t.height,
				transform: t.transform
			}) && n.push(e.id);
		}
		return n;
	}, [e]), ov);
}
var $y = ({ color: e = "none", strokeWidth: t = 1 }) => {
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
}, eb = ({ color: e = "none", strokeWidth: t = 1 }) => {
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
}, tb = {
	[_h.Arrow]: $y,
	[_h.ArrowClosed]: eb
};
function nb(e) {
	let t = uv();
	return K(() => Object.prototype.hasOwnProperty.call(tb, e) ? tb[e] : (t.getState().onError?.("009", ch.error009(e)), null), [e]);
}
var rb = ({ id: e, type: t, color: n, width: r = 12.5, height: i = 12.5, markerUnits: a = "strokeWidth", strokeWidth: o, orient: s = "auto-start-reverse" }) => {
	let c = nb(t);
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
}, ib = ({ defaultColor: e, rfId: t }) => {
	let n = $((e) => e.edges), r = $((e) => e.defaultEdgeOptions), i = K(() => zg(n, {
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
		children: X("defs", { children: i.map((e) => X(rb, {
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
ib.displayName = "MarkerDefinitions";
var ab = Nn(ib);
function ob({ x: e, y: t, label: n, labelStyle: r, labelShowBg: i = !0, labelBgStyle: a, labelBgPadding: o = [2, 4], labelBgBorderRadius: s = 2, children: c, className: l, ...u }) {
	let [d, f] = J({
		x: 1,
		y: 0,
		width: 0,
		height: 0
	}), p = Vu(["react-flow__edge-textwrapper", l]), m = q(null);
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
ob.displayName = "EdgeText";
var sb = Nn(ob);
function cb({ path: e, labelX: t, labelY: n, label: r, labelStyle: i, labelShowBg: a, labelBgStyle: o, labelBgPadding: s, labelBgBorderRadius: c, interactionWidth: l = 20, ...u }) {
	return Z(Y, { children: [
		X("path", {
			...u,
			d: e,
			fill: "none",
			className: Vu(["react-flow__edge-path", u.className])
		}),
		l ? X("path", {
			d: e,
			fill: "none",
			strokeOpacity: 0,
			strokeWidth: l,
			className: "react-flow__edge-interaction"
		}) : null,
		r && Gh(t) && Gh(n) ? X(sb, {
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
function lb({ pos: e, x1: t, y1: n, x2: r, y2: i }) {
	return e === Q.Left || e === Q.Right ? [.5 * (t + r), n] : [t, .5 * (n + i)];
}
function ub({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top }) {
	let [o, s] = lb({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i
	}), [c, l] = lb({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t
	}), [u, d, f, p] = gg({
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
function db(e) {
	return Nn(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, sourcePosition: o, targetPosition: s, label: c, labelStyle: l, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: p, style: m, markerEnd: h, markerStart: g, interactionWidth: _ }) => {
		let [v, y, b] = ub({
			sourceX: n,
			sourceY: r,
			sourcePosition: o,
			targetX: i,
			targetY: a,
			targetPosition: s
		}), x = e.isInternal ? void 0 : t;
		return X(cb, {
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
var fb = db({ isInternal: !1 }), pb = db({ isInternal: !0 });
fb.displayName = "SimpleBezierEdge", pb.displayName = "SimpleBezierEdgeInternal";
function mb(e) {
	return Nn(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: d, style: f, sourcePosition: p = Q.Bottom, targetPosition: m = Q.Top, markerEnd: h, markerStart: g, pathOptions: _, interactionWidth: v }) => {
		let [y, b, x] = Mg({
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
		return X(cb, {
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
var hb = mb({ isInternal: !1 }), gb = mb({ isInternal: !0 });
hb.displayName = "SmoothStepEdge", gb.displayName = "SmoothStepEdgeInternal";
function _b(e) {
	return Nn(({ id: t, ...n }) => {
		let r = e.isInternal ? void 0 : t;
		return X(hb, {
			...n,
			id: r,
			pathOptions: K(() => ({
				borderRadius: 0,
				offset: n.pathOptions?.offset
			}), [n.pathOptions?.offset])
		});
	});
}
var vb = _b({ isInternal: !1 }), yb = _b({ isInternal: !0 });
vb.displayName = "StepEdge", yb.displayName = "StepEdgeInternal";
function bb(e) {
	return Nn(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: d, style: f, markerEnd: p, markerStart: m, interactionWidth: h }) => {
		let [g, _, v] = Eg({
			sourceX: n,
			sourceY: r,
			targetX: i,
			targetY: a
		}), y = e.isInternal ? void 0 : t;
		return X(cb, {
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
var xb = bb({ isInternal: !1 }), Sb = bb({ isInternal: !0 });
xb.displayName = "StraightEdge", Sb.displayName = "StraightEdgeInternal";
function Cb(e) {
	return Nn(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, sourcePosition: o = Q.Bottom, targetPosition: s = Q.Top, label: c, labelStyle: l, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: p, style: m, markerEnd: h, markerStart: g, pathOptions: _, interactionWidth: v }) => {
		let [y, b, x] = yg({
			sourceX: n,
			sourceY: r,
			sourcePosition: o,
			targetX: i,
			targetY: a,
			targetPosition: s,
			curvature: _?.curvature
		}), S = e.isInternal ? void 0 : t;
		return X(cb, {
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
var wb = Cb({ isInternal: !1 }), Tb = Cb({ isInternal: !0 });
wb.displayName = "BezierEdge", Tb.displayName = "BezierEdgeInternal";
var Eb = {
	default: Tb,
	straight: Sb,
	step: yb,
	smoothstep: gb,
	simplebezier: pb
}, Db = {
	sourceX: null,
	sourceY: null,
	targetX: null,
	targetY: null,
	sourcePosition: null,
	targetPosition: null
}, Ob = (e, t, n) => n === Q.Left ? e - t : n === Q.Right ? e + t : e, kb = (e, t, n) => n === Q.Top ? e - t : n === Q.Bottom ? e + t : e, Ab = "react-flow__edgeupdater";
function jb({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: o, type: s }) {
	return X("circle", {
		onMouseDown: i,
		onMouseEnter: a,
		onMouseOut: o,
		className: Vu([Ab, `${Ab}-${s}`]),
		cx: Ob(t, r, e),
		cy: kb(n, r, e),
		r,
		stroke: "transparent",
		fill: "transparent"
	});
}
function Mb({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: i, targetX: a, targetY: o, sourcePosition: s, targetPosition: c, onReconnect: l, onReconnectStart: u, onReconnectEnd: d, setReconnecting: f, setUpdateHover: p }) {
	let m = uv(), h = (e, t) => {
		if (e.button !== 0) return;
		let { autoPanOnConnect: r, domNode: i, connectionMode: a, connectionRadius: o, lib: s, onConnectStart: c, cancelConnection: p, nodeLookup: h, rfId: g, panBy: _, updateConnection: v } = m.getState(), y = t.type === "target";
		b_.onPointerDown(e.nativeEvent, {
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
	return Z(Y, { children: [(e === !0 || e === "source") && X(jb, {
		position: s,
		centerX: r,
		centerY: i,
		radius: t,
		onMouseDown: g,
		onMouseEnter: v,
		onMouseOut: y,
		type: "source"
	}), (e === !0 || e === "target") && X(jb, {
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
function Nb({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: i, onDoubleClick: a, onContextMenu: o, onMouseEnter: s, onMouseMove: c, onMouseLeave: l, reconnectRadius: u, onReconnect: d, onReconnectStart: f, onReconnectEnd: p, rfId: m, edgeTypes: h, noPanClassName: g, onError: _, disableKeyboardA11y: v }) {
	let y = $((t) => t.edgeLookup.get(e)), b = $((e) => e.defaultEdgeOptions);
	y = b ? {
		...b,
		...y
	} : y;
	let x = y.type || "default", S = h?.[x] || Eb[x];
	S === void 0 && (_?.("011", ch.error011(x)), x = "default", S = h?.default || Eb.default);
	let C = !!(y.focusable || t && y.focusable === void 0), w = d !== void 0 && (y.reconnectable || n && y.reconnectable === void 0), T = !!(y.selectable || r && y.selectable === void 0), E = q(null), [D, O] = J(!1), [k, A] = J(!1), j = uv(), { zIndex: M, sourceX: N, sourceY: P, targetX: F, targetY: I, sourcePosition: L, targetPosition: R } = $(W((t) => {
		let n = t.nodeLookup.get(y.source), r = t.nodeLookup.get(y.target);
		if (!n || !r) return {
			zIndex: y.zIndex,
			...Db
		};
		let i = Pg({
			id: e,
			sourceNode: n,
			targetNode: r,
			sourceHandle: y.sourceHandle || null,
			targetHandle: y.targetHandle || null,
			connectionMode: t.connectionMode,
			onError: _
		});
		return {
			zIndex: xg({
				selected: y.selected,
				zIndex: y.zIndex,
				sourceNode: n,
				targetNode: r,
				elevateOnSelect: t.elevateEdgesOnSelect,
				zIndexMode: t.zIndexMode
			}),
			...i || Db
		};
	}, [
		y.source,
		y.target,
		y.sourceHandle,
		y.targetHandle,
		y.selected,
		y.zIndex
	]), ov), z = K(() => y.markerStart ? `url('#${Rg(y.markerStart, m)}')` : void 0, [y.markerStart, m]), B = K(() => y.markerEnd ? `url('#${Rg(y.markerEnd, m)}')` : void 0, [y.markerEnd, m]);
	if (y.hidden || N === null || P === null || F === null || I === null) return null;
	let ee = (t) => {
		let { addSelectedEdges: n, unselectNodesAndEdges: r, multiSelectionActive: a } = j.getState();
		T && (j.setState({ nodesSelectionActive: !1 }), y.selected && a ? (r({
			nodes: [],
			edges: [y]
		}), E.current?.blur()) : n([e])), i && i(t, y);
	}, te = a ? (e) => {
		a(e, { ...y });
	} : void 0, V = o ? (e) => {
		o(e, { ...y });
	} : void 0, H = s ? (e) => {
		s(e, { ...y });
	} : void 0, U = c ? (e) => {
		c(e, { ...y });
	} : void 0, ne = l ? (e) => {
		l(e, { ...y });
	} : void 0;
	return X("svg", {
		style: { zIndex: M },
		children: Z("g", {
			className: Vu([
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
			onClick: ee,
			onDoubleClick: te,
			onContextMenu: V,
			onMouseEnter: H,
			onMouseMove: U,
			onMouseLeave: ne,
			onKeyDown: C ? (t) => {
				if (!v && uh.includes(t.key) && T) {
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
			"aria-describedby": C ? `${mv}-${m}` : void 0,
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
			}), w && X(Mb, {
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
var Pb = Nn(Nb), Fb = (e) => ({
	edgesFocusable: e.edgesFocusable,
	edgesReconnectable: e.edgesReconnectable,
	elementsSelectable: e.elementsSelectable,
	connectionMode: e.connectionMode,
	onError: e.onError
});
function Ib({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: i, onReconnect: a, onEdgeContextMenu: o, onEdgeMouseEnter: s, onEdgeMouseMove: c, onEdgeMouseLeave: l, onEdgeClick: u, reconnectRadius: d, onEdgeDoubleClick: f, onReconnectStart: p, onReconnectEnd: m, disableKeyboardA11y: h }) {
	let { edgesFocusable: g, edgesReconnectable: _, elementsSelectable: v, onError: y } = $(Fb, ov), b = Qy(t);
	return Z("div", {
		className: "react-flow__edges",
		children: [X(ab, {
			defaultColor: e,
			rfId: n
		}), b.map((e) => X(Pb, {
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
Ib.displayName = "EdgeRenderer";
var Lb = Nn(Ib), Rb = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function zb({ children: e }) {
	let t = $(Rb);
	return X("div", {
		className: "react-flow__viewport xyflow__viewport react-flow__container",
		style: { transform: t },
		children: e
	});
}
function Bb(e) {
	let t = ay(), n = q(!1);
	G(() => {
		!n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
	}, [e, t.viewportInitialized]);
}
var Vb = (e) => e.panZoom?.syncViewport;
function Hb(e) {
	let t = $(Vb), n = uv();
	return G(() => {
		e && (t?.(e), n.setState({ transform: [
			e.x,
			e.y,
			e.zoom
		] }));
	}, [e, t]), null;
}
function Ub(e) {
	return e.connection.inProgress ? {
		...e.connection,
		to: Jh(e.connection.to, e.transform)
	} : { ...e.connection };
}
function Wb(e) {
	return e ? (t) => e(Ub(t)) : Ub;
}
function Gb(e) {
	return $(Wb(e), ov);
}
var Kb = (e) => ({
	nodesConnectable: e.nodesConnectable,
	isValid: e.connection.isValid,
	inProgress: e.connection.inProgress,
	width: e.width,
	height: e.height
});
function qb({ containerStyle: e, style: t, type: n, component: r }) {
	let { nodesConnectable: i, width: a, height: o, isValid: s, inProgress: c } = $(Kb, ov);
	return a && i && c ? X("svg", {
		style: e,
		width: a,
		height: o,
		className: "react-flow__connectionline react-flow__container",
		children: X("g", {
			className: Vu(["react-flow__connection", yh(s)]),
			children: X(Jb, {
				style: t,
				type: n,
				CustomComponent: r,
				isValid: s
			})
		})
	}) : null;
}
var Jb = ({ style: e, type: t = gh.Bezier, CustomComponent: n, isValid: r }) => {
	let { inProgress: i, from: a, fromNode: o, fromHandle: s, fromPosition: c, to: l, toNode: u, toHandle: d, toPosition: f, pointer: p } = Gb();
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
		connectionStatus: yh(r),
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
		case gh.Bezier:
			[m] = yg(h);
			break;
		case gh.SimpleBezier:
			[m] = ub(h);
			break;
		case gh.Step:
			[m] = Mg({
				...h,
				borderRadius: 0
			});
			break;
		case gh.SmoothStep:
			[m] = Mg(h);
			break;
		default: [m] = Eg(h);
	}
	return X("path", {
		d: m,
		fill: "none",
		className: "react-flow__connection-path",
		style: e
	});
};
Jb.displayName = "ConnectionLine";
var Yb = {};
function Xb(e = Yb) {
	let t = q(e), n = uv();
	G(() => {
		if (process.env.NODE_ENV === "development") {
			let r = /* @__PURE__ */ new Set([...Object.keys(t.current), ...Object.keys(e)]);
			for (let i of r) if (t.current[i] !== e[i]) {
				n.getState().onError?.("002", ch.error002());
				break;
			}
			t.current = e;
		}
	}, [e]);
}
function Zb() {
	let e = uv(), t = q(!1);
	G(() => {
		if (process.env.NODE_ENV === "development" && !t.current) {
			let n = document.querySelector(".react-flow__pane");
			n && window.getComputedStyle(n).zIndex !== "1" && e.getState().onError?.("013", ch.error013("react")), t.current = !0;
		}
	}, []);
}
function Qb({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: i, onNodeDoubleClick: a, onEdgeDoubleClick: o, onNodeMouseEnter: s, onNodeMouseMove: c, onNodeMouseLeave: l, onNodeContextMenu: u, onSelectionContextMenu: d, onSelectionStart: f, onSelectionEnd: p, connectionLineType: m, connectionLineStyle: h, connectionLineComponent: g, connectionLineContainerStyle: _, selectionKeyCode: v, selectionOnDrag: y, selectionMode: b, multiSelectionKeyCode: x, panActivationKeyCode: S, zoomActivationKeyCode: C, deleteKeyCode: w, onlyRenderVisibleElements: T, elementsSelectable: E, defaultViewport: D, translateExtent: O, minZoom: k, maxZoom: A, preventScrolling: j, defaultMarkerColor: M, zoomOnScroll: N, zoomOnPinch: P, panOnScroll: F, panOnScrollSpeed: I, panOnScrollMode: L, zoomOnDoubleClick: R, panOnDrag: z, onPaneClick: B, onPaneMouseEnter: ee, onPaneMouseMove: te, onPaneMouseLeave: V, onPaneScroll: H, onPaneContextMenu: U, paneClickDistance: ne, nodeClickDistance: re, onEdgeContextMenu: ie, onEdgeMouseEnter: ae, onEdgeMouseMove: oe, onEdgeMouseLeave: se, reconnectRadius: ce, onReconnect: le, onReconnectStart: ue, onReconnectEnd: de, noDragClassName: fe, noWheelClassName: pe, noPanClassName: me, disableKeyboardA11y: he, nodeExtent: ge, rfId: _e, viewport: ve, onViewportChange: ye }) {
	return Xb(e), Xb(t), Zb(), Bb(n), Hb(ve), X(Vy, {
		onPaneClick: B,
		onPaneMouseEnter: ee,
		onPaneMouseMove: te,
		onPaneMouseLeave: V,
		onPaneContextMenu: U,
		onPaneScroll: H,
		paneClickDistance: ne,
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
		children: Z(zb, { children: [
			X(Lb, {
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
			X(qb, {
				style: h,
				type: m,
				component: g,
				containerStyle: _
			}),
			X("div", { className: "react-flow__edgelabel-renderer" }),
			X(Zy, {
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
Qb.displayName = "GraphView";
var $b = Nn(Qb), ex = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: i, height: a, fitView: o, fitViewOptions: s, minZoom: c = .5, maxZoom: l = 2, nodeOrigin: u, nodeExtent: d, zIndexMode: f = "basic" } = {}) => {
	let p = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), _ = r ?? t ?? [], v = n ?? e ?? [], y = u ?? [0, 0], b = d ?? lh;
	i_(h, g, _);
	let { nodesInitialized: x } = Yg(v, p, m, {
		nodeOrigin: y,
		nodeExtent: b,
		zIndexMode: f
	}), S = [
		0,
		0,
		1
	];
	if (o && i && a) {
		let { x: e, y: t, zoom: n } = $h(Th(p, { filter: (e) => !!((e.width || e.initialWidth) && (e.height || e.initialHeight)) }), i, a, c, l, s?.padding ?? .1);
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
		translateExtent: lh,
		nodeExtent: b,
		nodesSelectionActive: !1,
		userSelectionActive: !1,
		userSelectionRect: null,
		connectionMode: fh.Strict,
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
		connection: { ...hh },
		connectionClickStartHandle: null,
		connectOnClick: !0,
		ariaLiveMessage: "",
		autoPanOnConnect: !0,
		autoPanOnNodeDrag: !0,
		autoPanOnNodeFocus: !0,
		autoPanSpeed: 15,
		connectionRadius: 20,
		onError: Kh,
		isValidConnection: void 0,
		onSelectionChangeHandlers: [],
		lib: "react",
		debug: !1,
		ariaLabelConfig: dh,
		zIndexMode: f,
		onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
		onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
	};
}, tx = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: i, height: a, fitView: o, fitViewOptions: s, minZoom: c, maxZoom: l, nodeOrigin: u, nodeExtent: d, zIndexMode: f }) => av((p, m) => {
	async function h() {
		let { nodeLookup: e, panZoom: t, fitViewOptions: n, fitViewResolver: r, width: i, height: a, minZoom: o, maxZoom: s } = m();
		t && (await kh({
			nodes: e,
			width: i,
			height: a,
			panZoom: t,
			minZoom: o,
			maxZoom: s
		}, n), r?.resolve(!0), p({ fitViewResolver: null }));
	}
	return {
		...ex({
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
			let { nodeLookup: t, parentLookup: n, nodeOrigin: r, elevateNodesOnSelect: i, fitViewQueued: a, zIndexMode: o, nodesSelectionActive: s } = m(), { nodesInitialized: c, hasSelectedNodes: l } = Yg(e, t, n, {
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
			i_(t, n, e), p({ edges: e });
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
			let { triggerNodeChanges: t, nodeLookup: n, parentLookup: r, domNode: i, nodeOrigin: a, nodeExtent: o, debug: s, fitViewQueued: c, zIndexMode: l } = m(), { changes: u, updatedInternals: d } = t_(e, n, r, i, a, o, l);
			d && (Kg(n, r, {
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
					let t = Ig(e, o.fromHandle, Q.Left, !0);
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
				let { parentLookup: e, nodeOrigin: t } = m(), a = e_(n, i, e, t);
				r.push(...a);
			}
			for (let e of c.values()) r = e(r);
			a(r);
		},
		triggerNodeChanges: (e) => {
			let { onNodesChange: t, setNodes: n, nodes: r, hasDefaultNodes: i, debug: a } = m();
			e?.length && (i && n(Wv(e, r)), a && console.log("React Flow: trigger node changes", e), t?.(e));
		},
		triggerEdgeChanges: (e) => {
			let { onEdgesChange: t, setEdges: n, edges: r, hasDefaultEdges: i, debug: a } = m();
			e?.length && (i && n(Gv(e, r)), a && console.log("React Flow: trigger edge changes", e), t?.(e));
		},
		addSelectedNodes: (e) => {
			let { multiSelectionActive: t, edgeLookup: n, nodeLookup: r, triggerNodeChanges: i, triggerEdgeChanges: a } = m();
			if (t) {
				i(e.map((e) => Kv(e, !0)));
				return;
			}
			i(qv(r, /* @__PURE__ */ new Set([...e]), !0)), a(qv(n));
		},
		addSelectedEdges: (e) => {
			let { multiSelectionActive: t, edgeLookup: n, nodeLookup: r, triggerNodeChanges: i, triggerEdgeChanges: a } = m();
			if (t) {
				a(e.map((e) => Kv(e, !0)));
				return;
			}
			a(qv(n, /* @__PURE__ */ new Set([...e]))), i(qv(r, /* @__PURE__ */ new Set(), !0));
		},
		unselectNodesAndEdges: ({ nodes: e, edges: t } = {}) => {
			let { edges: n, nodes: r, nodeLookup: i, triggerNodeChanges: a, triggerEdgeChanges: o } = m(), s = e || r, c = t || n, l = [];
			for (let e of s) {
				if (!e.selected) continue;
				let t = i.get(e.id);
				t && (t.selected = !1), l.push(Kv(e.id, !1));
			}
			let u = [];
			for (let e of c) e.selected && u.push(Kv(e.id, !1));
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
			let a = t.reduce((e, t) => t.selected ? [...e, Kv(t.id, !1)] : e, []), o = e.reduce((e, t) => t.selected ? [...e, Kv(t.id, !1)] : e, []);
			n(a), r(o);
		},
		setNodeExtent: (e) => {
			let { nodes: t, nodeLookup: n, parentLookup: r, nodeOrigin: i, elevateNodesOnSelect: a, nodeExtent: o, zIndexMode: s } = m();
			(e[0][0] !== o[0][0] || e[0][1] !== o[0][1] || e[1][0] !== o[1][0] || e[1][1] !== o[1][1]) && (Yg(t, n, r, {
				nodeOrigin: i,
				nodeExtent: e,
				elevateNodesOnSelect: a,
				checkEquality: !1,
				zIndexMode: s
			}), p({ nodeExtent: e }));
		},
		panBy: (e) => {
			let { transform: t, width: n, height: r, panZoom: i, translateExtent: a } = m();
			return n_({
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
			p({ connection: { ...hh } });
		},
		updateConnection: (e) => {
			p({ connection: e });
		},
		reset: () => p({ ...ex() })
	};
}, Object.is);
function nx({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: i, initialHeight: a, initialMinZoom: o, initialMaxZoom: s, initialFitViewOptions: c, fitView: l, nodeOrigin: u, nodeExtent: d, zIndexMode: f, children: p }) {
	let [m] = J(() => tx({
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
	return X(cv, {
		value: m,
		children: X(ny, { children: p })
	});
}
function rx({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: i, width: a, height: o, fitView: s, fitViewOptions: c, minZoom: l, maxZoom: u, nodeOrigin: d, nodeExtent: f, zIndexMode: p }) {
	return Pn(sv) ? X(Y, { children: e }) : X(nx, {
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
var ix = {
	width: "100%",
	height: "100%",
	overflow: "hidden",
	position: "relative",
	zIndex: 0
};
function ax({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: i, nodeTypes: a, edgeTypes: o, onNodeClick: s, onEdgeClick: c, onInit: l, onMove: u, onMoveStart: d, onMoveEnd: f, onConnect: p, onConnectStart: m, onConnectEnd: h, onClickConnectStart: g, onClickConnectEnd: _, onNodeMouseEnter: v, onNodeMouseMove: y, onNodeMouseLeave: b, onNodeContextMenu: x, onNodeDoubleClick: S, onNodeDragStart: C, onNodeDrag: w, onNodeDragStop: T, onNodesDelete: E, onEdgesDelete: D, onDelete: O, onSelectionChange: k, onSelectionDragStart: A, onSelectionDrag: j, onSelectionDragStop: M, onSelectionContextMenu: N, onSelectionStart: P, onSelectionEnd: F, onBeforeDelete: I, connectionMode: L, connectionLineType: R = gh.Bezier, connectionLineStyle: z, connectionLineComponent: B, connectionLineContainerStyle: ee, deleteKeyCode: te = "Backspace", selectionKeyCode: V = "Shift", selectionOnDrag: H = !1, selectionMode: U = mh.Full, panActivationKeyCode: ne = "Space", multiSelectionKeyCode: re = eg() ? "Meta" : "Control", zoomActivationKeyCode: ie = eg() ? "Meta" : "Control", snapToGrid: ae, snapGrid: oe, onlyRenderVisibleElements: se = !1, selectNodesOnDrag: ce, nodesDraggable: le, autoPanOnNodeFocus: ue, nodesConnectable: de, nodesFocusable: fe, nodeOrigin: pe = kv, edgesFocusable: me, edgesReconnectable: he, elementsSelectable: ge = !0, defaultViewport: _e = Av, minZoom: ve = .5, maxZoom: ye = 2, translateExtent: be = lh, preventScrolling: xe = !0, nodeExtent: Se, defaultMarkerColor: Ce = "#b1b1b7", zoomOnScroll: we = !0, zoomOnPinch: Te = !0, panOnScroll: Ee = !1, panOnScrollSpeed: De = .5, panOnScrollMode: Oe = ph.Free, zoomOnDoubleClick: ke = !0, panOnDrag: Ae = !0, onPaneClick: je, onPaneMouseEnter: Me, onPaneMouseMove: Ne, onPaneMouseLeave: Pe, onPaneScroll: Fe, onPaneContextMenu: Ie, paneClickDistance: Le = 1, nodeClickDistance: Re = 0, children: ze, onReconnect: Be, onReconnectStart: Ve, onReconnectEnd: He, onEdgeContextMenu: Ue, onEdgeDoubleClick: We, onEdgeMouseEnter: Ge, onEdgeMouseMove: Ke, onEdgeMouseLeave: qe, reconnectRadius: Je = 10, onNodesChange: Ye, onEdgesChange: Xe, noDragClassName: Ze = "nodrag", noWheelClassName: Qe = "nowheel", noPanClassName: $e = "nopan", fitView: et, fitViewOptions: tt, connectOnClick: nt, attributionPosition: rt, proOptions: it, defaultEdgeOptions: at, elevateNodesOnSelect: ot = !0, elevateEdgesOnSelect: st = !1, disableKeyboardA11y: ct = !1, autoPanOnConnect: lt, autoPanOnNodeDrag: ut, autoPanSpeed: dt, connectionRadius: ft, isValidConnection: pt, onError: mt, style: ht, id: gt, nodeDragThreshold: _t, connectionDragThreshold: vt, viewport: yt, onViewportChange: bt, width: xt, height: St, colorMode: Ct = "light", debug: wt, onScroll: Tt, ariaLabelConfig: Et, zIndexMode: Dt = "basic", ...Ot }, kt) {
	let At = gt || "1", jt = Iv(Ct), Mt = W((e) => {
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
			...ix
		},
		ref: kt,
		className: Vu([
			"react-flow",
			i,
			jt
		]),
		id: gt,
		role: "application",
		children: Z(rx, {
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
				X(Pv, {
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
				X($b, {
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
					connectionLineContainerStyle: ee,
					selectionKeyCode: V,
					selectionOnDrag: H,
					selectionMode: U,
					deleteKeyCode: te,
					multiSelectionKeyCode: re,
					panActivationKeyCode: ne,
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
				X(Dv, { onSelectionChange: k }),
				ze,
				X(xv, {
					proOptions: it,
					position: rt
				}),
				X(yv, {
					rfId: At,
					disableKeyboardA11y: ct
				})
			]
		})
	});
}
var ox = Qv(ax);
ch.error014();
function sx({ dimensions: e, lineWidth: t, variant: n, className: r }) {
	return X("path", {
		strokeWidth: t,
		d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
		className: Vu([
			"react-flow__background-pattern",
			n,
			r
		])
	});
}
function cx({ radius: e, className: t }) {
	return X("circle", {
		cx: e,
		cy: e,
		r: e,
		className: Vu([
			"react-flow__background-pattern",
			"dots",
			t
		])
	});
}
var lx;
(function(e) {
	e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(lx ||= {});
var ux = {
	[lx.Dots]: 1,
	[lx.Lines]: 1,
	[lx.Cross]: 6
}, dx = (e) => ({
	transform: e.transform,
	patternId: `pattern-${e.rfId}`
});
function fx({ id: e, variant: t = lx.Dots, gap: n = 20, size: r, lineWidth: i = 1, offset: a = 0, color: o, bgColor: s, style: c, className: l, patternClassName: u }) {
	let d = q(null), { transform: f, patternId: p } = $(dx, ov), m = r || ux[t], h = t === lx.Dots, g = t === lx.Cross, _ = Array.isArray(n) ? n : [n, n], v = [_[0] * f[2] || 1, _[1] * f[2] || 1], y = m * f[2], b = Array.isArray(a) ? a : [a, a], x = g ? [y, y] : v, S = [b[0] * f[2] || 1 + x[0] / 2, b[1] * f[2] || 1 + x[1] / 2], C = `${p}${e || ""}`;
	return Z("svg", {
		className: Vu(["react-flow__background", l]),
		style: {
			...c,
			...uy,
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
			children: h ? X(cx, {
				radius: y / 2,
				className: u
			}) : X(sx, {
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
fx.displayName = "Background";
var px = Nn(fx);
function mx() {
	return X("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		children: X("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" })
	});
}
function hx() {
	return X("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 5",
		children: X("path", { d: "M0 0h32v4.2H0z" })
	});
}
function gx() {
	return X("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 30",
		children: X("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" })
	});
}
function _x() {
	return X("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 25 32",
		children: X("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" })
	});
}
function vx() {
	return X("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 25 32",
		children: X("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" })
	});
}
function yx({ children: e, className: t, ...n }) {
	return X("button", {
		type: "button",
		className: Vu(["react-flow__controls-button", t]),
		...n,
		children: e
	});
}
var bx = (e) => ({
	isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
	minZoomReached: e.transform[2] <= e.minZoom,
	maxZoomReached: e.transform[2] >= e.maxZoom,
	ariaLabelConfig: e.ariaLabelConfig
});
function xx({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: i, onZoomIn: a, onZoomOut: o, onFitView: s, onInteractiveChange: c, className: l, children: u, position: d = "bottom-left", orientation: f = "vertical", "aria-label": p }) {
	let m = uv(), { isInteractive: h, minZoomReached: g, maxZoomReached: _, ariaLabelConfig: v } = $(bx, ov), { zoomIn: y, zoomOut: b, fitView: x } = ay();
	return Z(bv, {
		className: Vu([
			"react-flow__controls",
			f === "horizontal" ? "horizontal" : "vertical",
			l
		]),
		position: d,
		style: e,
		"data-testid": "rf__controls",
		"aria-label": p ?? v["controls.ariaLabel"],
		children: [
			t && Z(Y, { children: [X(yx, {
				onClick: () => {
					y(), a?.();
				},
				className: "react-flow__controls-zoomin",
				title: v["controls.zoomIn.ariaLabel"],
				"aria-label": v["controls.zoomIn.ariaLabel"],
				disabled: _,
				children: X(mx, {})
			}), X(yx, {
				onClick: () => {
					b(), o?.();
				},
				className: "react-flow__controls-zoomout",
				title: v["controls.zoomOut.ariaLabel"],
				"aria-label": v["controls.zoomOut.ariaLabel"],
				disabled: g,
				children: X(hx, {})
			})] }),
			n && X(yx, {
				className: "react-flow__controls-fitview",
				onClick: () => {
					x(i), s?.();
				},
				title: v["controls.fitView.ariaLabel"],
				"aria-label": v["controls.fitView.ariaLabel"],
				children: X(gx, {})
			}),
			r && X(yx, {
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
				children: X(h ? vx : _x, {})
			}),
			u
		]
	});
}
xx.displayName = "Controls", Nn(xx);
function Sx({ id: e, x: t, y: n, width: r, height: i, style: a, color: o, strokeColor: s, strokeWidth: c, className: l, borderRadius: u, shapeRendering: d, selected: f, onClick: p }) {
	let { background: m, backgroundColor: h } = a || {}, g = o || m || h;
	return X("rect", {
		className: Vu([
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
var Cx = Nn(Sx), wx = (e) => e.nodes.map((e) => e.id), Tx = (e) => e instanceof Function ? e : () => e;
function Ex({ nodeStrokeColor: e, nodeColor: t, nodeClassName: n = "", nodeBorderRadius: r = 5, nodeStrokeWidth: i, nodeComponent: a = Cx, onClick: o }) {
	let s = $(wx, ov), c = Tx(t), l = Tx(e), u = Tx(n), d = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
	return X(Y, { children: s.map((e) => X(Ox, {
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
function Dx({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: i, nodeStrokeWidth: a, shapeRendering: o, NodeComponent: s, onClick: c }) {
	let { node: l, x: u, y: d, width: f, height: p } = $((t) => {
		let n = t.nodeLookup.get(e);
		if (!n) return {
			node: void 0,
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
		let r = n.internals.userNode, { x: i, y: a } = n.internals.positionAbsolute, { width: o, height: s } = ng(r);
		return {
			node: r,
			x: i,
			y: a,
			width: o,
			height: s
		};
	}, ov);
	return !l || l.hidden || !rg(l) ? null : X(s, {
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
var Ox = Nn(Dx), kx = Nn(Ex), Ax = 200, jx = 150, Mx = (e) => !e.hidden, Nx = (e) => {
	let t = {
		x: -e.transform[0] / e.transform[2],
		y: -e.transform[1] / e.transform[2],
		width: e.width / e.transform[2],
		height: e.height / e.transform[2]
	};
	return {
		viewBB: t,
		boundingRect: e.nodeLookup.size > 0 ? Hh(Th(e.nodeLookup, { filter: Mx }), t) : t,
		rfId: e.rfId,
		panZoom: e.panZoom,
		translateExtent: e.translateExtent,
		flowWidth: e.width,
		flowHeight: e.height,
		ariaLabelConfig: e.ariaLabelConfig
	};
}, Px = "react-flow__minimap-desc";
function Fx({ style: e, className: t, nodeStrokeColor: n, nodeColor: r, nodeClassName: i = "", nodeBorderRadius: a = 5, nodeStrokeWidth: o, nodeComponent: s, bgColor: c, maskColor: l, maskStrokeColor: u, maskStrokeWidth: d, position: f = "bottom-right", onClick: p, onNodeClick: m, pannable: h = !1, zoomable: g = !1, ariaLabel: _, inversePan: v, zoomStep: y = 1, offsetScale: b = 5 }) {
	let x = uv(), S = q(null), { boundingRect: C, viewBB: w, rfId: T, panZoom: E, translateExtent: D, flowWidth: O, flowHeight: k, ariaLabelConfig: A } = $(Nx, ov), j = e?.width ?? Ax, M = e?.height ?? jx, N = C.width / j, P = C.height / M, F = Math.max(N, P), I = F * j, L = F * M, R = b * F, z = C.x - (I - C.width) / 2 - R, B = C.y - (L - C.height) / 2 - R, ee = I + R * 2, te = L + R * 2, V = `${Px}-${T}`, H = q(0), U = q();
	H.current = F, G(() => {
		if (S.current && E) return U.current = x_({
			domNode: S.current,
			panZoom: E,
			getTransform: () => x.getState().transform,
			getViewScale: () => H.current
		}), () => {
			U.current?.destroy();
		};
	}, [E]), G(() => {
		U.current?.update({
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
	let ne = p ? (e) => {
		let [t, n] = U.current?.pointer(e) || [0, 0];
		p(e, {
			x: t,
			y: n
		});
	} : void 0, re = m ? W((e, t) => {
		let n = x.getState().nodeLookup.get(t).internals.userNode;
		m(e, n);
	}, []) : void 0, ie = _ ?? A["minimap.ariaLabel"];
	return X(bv, {
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
		className: Vu(["react-flow__minimap", t]),
		"data-testid": "rf__minimap",
		children: Z("svg", {
			width: j,
			height: M,
			viewBox: `${z} ${B} ${ee} ${te}`,
			className: "react-flow__minimap-svg",
			role: "img",
			"aria-labelledby": V,
			ref: S,
			onClick: ne,
			children: [
				ie && X("title", {
					id: V,
					children: ie
				}),
				X(kx, {
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
					d: `M${z - R},${B - R}h${ee + R * 2}v${te + R * 2}h${-ee - R * 2}z
        M${w.x},${w.y}h${w.width}v${w.height}h${-w.width}z`,
					fillRule: "evenodd",
					pointerEvents: "none"
				})
			]
		})
	});
}
Fx.displayName = "MiniMap", Nn(Fx);
var Ix = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, Lx = {
	[I_.Line]: "right",
	[I_.Handle]: "bottom-right"
};
function Rx({ nodeId: e, position: t, variant: n = I_.Handle, className: r, style: i = void 0, children: a, color: o, minWidth: s = 10, minHeight: c = 10, maxWidth: l = Number.MAX_VALUE, maxHeight: u = Number.MAX_VALUE, keepAspectRatio: d = !1, resizeDirection: f, autoScale: p = !0, shouldResize: m, onResizeStart: h, onResize: g, onResizeEnd: _ }) {
	let v = wy(), y = typeof e == "string" ? e : v, b = uv(), x = q(null), S = n === I_.Handle, C = $(W(Ix(S && p), [S, p]), ov), w = q(null), T = t ?? Lx[n];
	G(() => {
		if (!(!x.current || !y)) return w.current ||= J_({
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
					let t = c.origin ?? a, n = e.width ?? c.measured.width ?? 0, l = e.height ?? c.measured.height ?? 0, u = e_([{
						id: c.id,
						parentId: c.parentId,
						rect: {
							width: n,
							height: l,
							...ig({
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
		className: Vu([
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
Nn(Rx);
var zx = (e) => e.domNode?.querySelector(".react-flow__renderer");
function Bx({ children: e }) {
	let t = $(zx);
	return t ? Rn(e, t) : null;
}
var Vx = (e, t) => e?.internals.positionAbsolute.x !== t?.internals.positionAbsolute.x || e?.internals.positionAbsolute.y !== t?.internals.positionAbsolute.y || e?.measured.width !== t?.measured.width || e?.measured.height !== t?.measured.height || e?.selected !== t?.selected || e?.internals.z !== t?.internals.z, Hx = (e, t) => {
	if (e.size !== t.size) return !1;
	for (let [n, r] of e) if (Vx(r, t.get(n))) return !1;
	return !0;
}, Ux = (e) => ({
	x: e.transform[0],
	y: e.transform[1],
	zoom: e.transform[2],
	selectedNodesCount: e.nodes.filter((e) => e.selected).length
});
function Wx({ nodeId: e, children: t, className: n, style: r, isVisible: i, position: a = Q.Top, offset: o = 10, align: s = "center", ...c }) {
	let l = wy(), u = $(W((t) => (Array.isArray(e) ? e : [e || l || ""]).reduce((e, n) => {
		let r = t.nodeLookup.get(n);
		return r && e.set(r.id, r), e;
	}, /* @__PURE__ */ new Map()), [e, l]), Hx), { x: d, y: f, zoom: p, selectedNodesCount: m } = $(Ux, ov);
	if (!(typeof i == "boolean" ? i : u.size === 1 && u.values().next().value?.selected && m === 1) || !u.size) return null;
	let h = Th(u), g = Array.from(u.values()), _ = Math.max(...g.map((e) => e.internals.z + 1)), v = {
		position: "absolute",
		transform: Bg(h, {
			x: d,
			y: f,
			zoom: p
		}, a, o, s),
		zIndex: _,
		...r
	};
	return X(Bx, { children: X("div", {
		style: v,
		className: Vu(["react-flow__node-toolbar", n]),
		...c,
		"data-id": g.reduce((e, t) => `${e}${t.id} `, "").trim(),
		children: t
	}) });
}
//#endregion
//#region src/patterns/F0Graph/constants.ts
var Gx = /* @__PURE__ */ new Set(), Kx = [], qx = {
	detail: -8,
	compact: -8,
	dot: 0
}, Jx = {
	detail: {
		fontSize: 14,
		lineHeight: "20px"
	},
	compact: {
		fontSize: 24,
		lineHeight: "32px"
	},
	dot: null
}, Yx = .5, Xx = .1, Zx = .5, Qx = kn(null);
Qx.displayName = "F0GraphZoomContext";
function $x() {
	return Pn(Qx);
}
var eS = kn(null);
eS.displayName = "F0GraphExpandContext";
function tS() {
	return Pn(eS);
}
var nS = kn(null);
nS.displayName = "F0GraphSelectionContext";
function rS() {
	return Pn(nS);
}
var iS = kn(null);
iS.displayName = "F0GraphActionsContext";
function aS() {
	return Pn(iS);
}
var oS = kn(null);
oS.displayName = "F0GraphRenderConfigContext";
function sS() {
	return Pn(oS);
}
var cS = kn(null);
cS.displayName = "F0GraphStackHoverContext";
function lS() {
	return Pn(cS);
}
var uS = kn(null);
uS.displayName = "F0GraphFocusContext";
function dS() {
	return Pn(uS);
}
//#endregion
//#region src/patterns/F0Graph/hooks/useDeferredMerge.ts
function fS(e) {
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
		mergedNodes: K(() => pS(t, i?.nodes), [t, i]),
		mergedEdges: K(() => mS(n, i?.edges), [n, i]),
		deferredStatus: o,
		error: c
	};
}
function pS(e, t) {
	if (!t || t.length === 0) return e;
	let n = /* @__PURE__ */ new Map();
	for (let t of e) n.set(t.id, t);
	for (let e of t) n.set(e.id, e);
	return Array.from(n.values());
}
function mS(e, t) {
	if (!t || t.length === 0) return e;
	let n = /* @__PURE__ */ new Map();
	for (let t of e) n.set(t.id, t);
	for (let e of t) n.set(e.id, e);
	return Array.from(n.values());
}
//#endregion
//#region src/patterns/F0Graph/utils.ts
function hS(e, t, n) {
	if (!(!e || !n.has(e))) return [e, ...t.filter((e) => n.has(e))].map((e) => ({ id: e }));
}
function gS(e, t, n, r, i) {
	return e <= i.maxX && e + n >= i.minX && t <= i.maxY && t + r >= i.minY;
}
function _S(e, t, n, r) {
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
function vS(e, t, n) {
	for (let r of e) if (t >= r.x && t <= r.x + r.width && n >= r.y && n <= r.y + r.height) return r.parentId;
	return null;
}
function yS(e) {
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
function bS(e, t) {
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
function xS(e) {
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
function SS(e) {
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
function CS(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
	for (let r of e) !r.stackNodes || r.children.length === 0 || r.children.some((e) => e.childrenCount > 0 || e.children.length > 0) || (t.add(r.id), r.children.forEach((e, t) => {
		n.set(e.id, t);
	}));
	return {
		stackedParentIds: t,
		stackedNodeIndex: n
	};
}
function wS(e, t) {
	let n = [];
	function r(e) {
		if (n.push(e), t.has(e.id)) for (let t of e.children) r(t);
	}
	for (let t of e) r(t);
	return n;
}
//#endregion
//#region src/patterns/F0Graph/hooks/useExpandState.ts
function TS({ roots: e, nodeMap: t, isLazyMode: n, lazyTree: r, controlledExpanded: i, defaultExpandedNodes: a, defaultExpandDepth: o, onExpandToggle: s, onExpandedNodesChange: c }) {
	let l = q(null);
	l.current === null && (l.current = a || (o === void 0 ? new Set(e.map((e) => e.id)) : bS(e, o)));
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
				let e = xS(y.current);
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
function ES({ nodeMap: e, clearSelection: t, toggleExpand: n, selectNode: r, focusedNodeIdRef: i, setFocusedNodeId: a, flatVisibleOrderRef: o, expandedNodesRef: s, nodeRefsMapRef: c }) {
	let l = ay(), u = q(e);
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
						padding: Xx
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
						padding: Zx
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
						padding: Xx
					});
					break;
				default: return;
			}
		}, [l])
	};
}
//#endregion
//#region src/patterns/F0Graph/components/F0GraphExpander/F0GraphExpander.tsx
var DS = jn(({ count: e, expanded: t, onClick: n, tabIndex: r, ariaLabel: i, loading: a }, o) => {
	let s = y(), c = e > 99 ? "+99" : String(e), l = s.t(t ? "actions.collapse" : "actions.expand");
	return /* @__PURE__ */ X("div", {
		className: "inline-flex",
		children: /* @__PURE__ */ X(je, {
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
DS.displayName = "F0GraphExpander";
//#endregion
//#region src/patterns/F0Graph/internal/ReactFlowAdapters.tsx
var OS = 3, kS = (e) => e === Q.Bottom || e === Q.Top ? { transform: `translate(-${OS}px, 0px)` } : void 0;
function AS(e) {
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
var jS = 32, MS = {
	detail: (130 - jS) / 2,
	compact: (130 - jS) / 2,
	dot: (130 - jS) / 2
}, NS = 130 * Yx, PS = {
	detail: (NS - jS) / 2,
	compact: (NS - jS) / 2,
	dot: (NS - jS) / 2
}, FS = (e) => Math.max(0, Math.floor(NS - (PS[e] + qx[e])));
function IS({ data: e, id: t }) {
	let n = $x(), r = tS(), i = rS(), a = aS(), o = dS(), s = sS();
	if (!n || !r || !i || !a) return null;
	let { zoomLevel: c } = n, { expandedNodes: l } = r, { selectedNodes: u, highlightedNodes: d } = i, { toggleExpand: f, selectNode: p } = a, { graphNode: m, renderNode: h, ariaLevel: g, ariaSetSize: _, ariaPosInSet: v, visibleChildIds: y, stacked: b } = e, { source: x, target: S } = AS(n.direction), C = l.has(t), w = u.has(t), T = d.has(t), E = w ? "selected" : T ? "highlighted" : "default", D = c === "dot" ? "dot" : c === "compact" ? "compact" : "detail", O = (m.childrenCount ?? 0) > 0, k = o?.focusedNodeId === t, A = o ? (e) => o.registerNodeRef(t, e) : () => {}, j = C && y && y.length > 0 ? y.map((e) => `f0-graph-node-${e}`).join(" ") : void 0, M = {
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
		/* @__PURE__ */ X(Oy, {
			type: "target",
			position: S,
			className: "!invisible",
			style: b ? kS(S) : void 0
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
		/* @__PURE__ */ X(Oy, {
			type: "source",
			position: x,
			className: "!invisible",
			style: b ? kS(x) : void 0
		})
	] });
}
IS.displayName = "F0GraphNodeWrapper";
var LS = Nn(IS, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.graphNode === r.graphNode && n.ariaLevel === r.ariaLevel && n.ariaSetSize === r.ariaSetSize && n.ariaPosInSet === r.ariaPosInSet && n.stacked === r.stacked && (n.visibleChildIds?.join(",") ?? "") === (r.visibleChildIds?.join(",") ?? "") && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
});
function RS({ data: e, id: t }) {
	let { count: n, parentId: r, parentWidth: i, loading: a } = e, o = $x(), s = tS(), c = aS(), l = dS(), u = sS(), d = y();
	if (!o || !s || !c) return null;
	let f = s.expandedNodes.has(r), { source: p, target: m } = AS(o.direction), h = l?.focusedNodeId === t, g = l ? (e) => l.registerNodeRef(t, e) : void 0, _ = d.t("actions.expand");
	return /* @__PURE__ */ Z(Y, { children: [
		/* @__PURE__ */ X(Oy, {
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
			children: /* @__PURE__ */ X(DS, {
				ref: g,
				count: n,
				expanded: f,
				tabIndex: h ? 0 : -1,
				ariaLabel: _,
				onClick: () => c.toggleExpand(r),
				loading: a || u?.deferredLoading
			})
		}),
		/* @__PURE__ */ X(Oy, {
			type: "source",
			position: p,
			className: "!invisible"
		})
	] });
}
RS.displayName = "F0GraphExpanderWrapper";
var zS = Nn(RS, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.parentId === r.parentId && n.count === r.count && n.parentWidth === r.parentWidth && n.loading === r.loading && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
});
function BS({ data: e, id: t }) {
	let { parentId: n, parentWidth: r, collapseLabel: i, stacked: a } = e, o = $x(), s = aS(), c = dS(), l = lS(), u = y();
	if (!o || !s || o.zoomLevel === "dot") return null;
	let { source: d, target: f } = AS(o.direction), p = c?.focusedNodeId === t, m = c ? (e) => c.registerNodeRef(t, e) : void 0, h = i ?? u.actions.collapse, g = p || a === !0 && l?.hoveredStackParentId === n;
	return /* @__PURE__ */ Z(Y, { children: [
		/* @__PURE__ */ X(Oy, {
			type: "target",
			position: f,
			className: "!invisible"
		}),
		/* @__PURE__ */ X("div", {
			className: "group pointer-events-auto flex items-start justify-center pt-2",
			style: {
				width: r,
				height: a ? FS(o.zoomLevel) : 80
			},
			children: /* @__PURE__ */ X("div", {
				"data-revealed": g ? "true" : "false",
				className: I("backdrop-blur-[120px]", g ? "visible" : "invisible group-hover:visible"),
				children: /* @__PURE__ */ X(Ne, {
					ref: m,
					variant: "neutral",
					size: "md",
					icon: cn,
					hideLabel: !0,
					label: h,
					"aria-label": h,
					"aria-expanded": !0,
					tabIndex: p ? 0 : -1,
					onClick: () => s.toggleExpand(n)
				})
			})
		}),
		/* @__PURE__ */ X(Oy, {
			type: "source",
			position: d,
			className: "!invisible"
		})
	] });
}
function VS(e) {
	return /* @__PURE__ */ X("div", {
		"aria-hidden": !0,
		className: "pointer-events-none h-full w-full"
	});
}
VS.displayName = "F0GraphStackGroupWrapper";
var HS = Nn(VS);
BS.displayName = "F0GraphCollapserWrapper";
var US = Nn(BS, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.parentId === r.parentId && n.parentWidth === r.parentWidth && n.collapseLabel === r.collapseLabel && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
}), WS = 256, GS = 56, KS = 120, qS = 36, JS = 130, YS = 40, XS = 80;
function ZS(e) {
	let t = e?.nodeWidth ?? WS, n = e?.nodeHeight ?? GS, r = e?.rankSep ?? JS, i = e?.nodeSep ?? YS, a = e?.rootSep ?? XS, o = e?.stackedNodeHeight ?? 44, s = e?.stackedNodeGap ?? 16, c = e?.snapGrid ?? 0;
	return K(() => ({ computeLayout(e, l, u) {
		return QS(e, l, u, {
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
function QS(e, t, n, r) {
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
			let r = n?.cross ?? 0, s = n?.depth ?? 0, c = n?.stackIndex, d = c !== void 0, f = t ? KS : d && g ? l : i, p = t ? qS : d && !g ? l : a, m = (_ ? O - s : s) * b, h = d ? c * (l + u) : 0, y = o * (1 - Yx), x = d ? _ ? m + v - l / 2 - h + y : m + l / 2 + h - y : m + v / 2, C = t ? r : N(r), w = Math.round(x), T = g ? w : C, E = g ? C : w, D = Math.round(T - f / 2), P = Math.round(E - p / 2);
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
function $S({ enabled: e, padding: t = 600 }) {
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
var eC = 6, tC = 26, nC = 4, rC = 2;
function iC({ roots: e, nodeMap: t, expandedNodes: n, anchorNodeRef: r, onAnchorReflow: i, resolvedEdgesProp: a, stableRenderNode: o, nodeTagTypes: s, visibleTagTypesSet: c, reserveTagRow: l, nodeWidthProp: u, nodeHeightProp: d, stackedNodeHeightProp: f, stackedNodeGapProp: p, layoutEngineProp: m, zoomLevel: h, direction: g, controlLabels: _, hoveredEdgeId: v, enableNodeWindowing: y, nodeWindowPadding: b }) {
	let x = K(() => wS(e, n), [e, n]), S = K(() => {
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
	} : CS(x), [x, m]), E = K(() => a && a.length > 0 ? a : SS(e), [a, e]), { visibleEdges: D, expanderNodes: O } = K(() => {
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
	]), A = K(() => D, [D]), j = l ?? (s ? c.size > 0 : !1), M = s ? c.size : 1, N = j ? Math.max(1, Math.ceil(M / rC)) : 0, P = N > 0 ? eC + N * tC + (N - 1) * nC : 0, F = (d ?? 56) + P, I = ZS({
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
	]), z = K(() => new Map(R.nodes.map((e) => [e.id, e])), [R.nodes]), B = K(() => _S(x, T, z, g), [
		x,
		T,
		z,
		g
	]), ee = K(() => {
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
	}, [B, z]), te = K(() => yS(R.nodes), [R.nodes]), V = W((e) => z.get(e), [z]), H = $S({
		enabled: y ?? !1,
		padding: b
	}), U = MS[h], ne = PS[h], re = qx[h], ie = q(/* @__PURE__ */ new Map()), ae = K(() => {
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
	Ln(() => {
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
		if (!y || !H) return null;
		let e = u ?? 256, n = /* @__PURE__ */ new Set();
		for (let t of R.nodes) gS(t.x, t.y, t.width || e, t.height || F, H) && n.add(t.id);
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
		H,
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
			}, l = o.width ?? e, u = o.height ?? t, d = w.has(i.parentId) ? ne : U, f = a ? g === "LR" ? o.x + l + d : o.x - l : o.x, m = a ? o.y * 1 : g === "TB" ? o.y * 1 + u + d : o.y * 1 - u;
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
			let o = z.get(i.id), l = o?.x ?? 0, u = o?.y ?? 0, d = o?.width ?? e, f = o?.height ?? t, m = w.has(i.id) ? ne : U, h = a ? g === "LR" ? l + d + m + re : l - d : l, v = a ? u * 1 : g === "TB" ? u * 1 + f + m + re : u * 1 - f;
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
		U,
		ne,
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
		contentBounds: te,
		getNodePosition: V,
		stackHoverZones: ee
	};
}
//#endregion
//#region src/patterns/F0Graph/types.ts
var aC = {
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
}, oC = .05;
function sC(e, t) {
	let n = q("detail"), r = K(() => t?.thresholds ? t.thresholds : { ...aC[t?.preset ?? "default"] }, [t?.thresholds, t?.preset]), i = t?.hysteresis ?? oC, a = K(() => {
		let t = n.current, a = r, o = cC(e, a);
		return lC(e, a, t, i) === t ? t : o;
	}, [
		e,
		r,
		i
	]);
	return G(() => {
		n.current = a;
	}, [a]), a;
}
function cC(e, t) {
	return e >= t.detail ? "detail" : e >= t.compact ? "compact" : "dot";
}
function lC(e, t, n, r) {
	let i = r;
	switch (n) {
		case "detail": return e >= t.detail - i ? "detail" : cC(e, t);
		case "compact": return e >= t.detail + i ? "detail" : e >= t.compact - i ? "compact" : cC(e, t);
		case "dot": return e >= t.compact + i ? "compact" : "dot";
	}
}
//#endregion
//#region src/patterns/F0Graph/hooks/useGraphViewport.ts
function uC(e) {
	return !!e && ((e.top ?? 0) > 0 || (e.right ?? 0) > 0 || (e.bottom ?? 0) > 0 || (e.left ?? 0) > 0);
}
function dC({ defaultZoom: e, zoomPreset: t, zoomThresholds: n, currentUserNodeId: r, onZoomLevelChange: i, onViewportChange: a, nodeWindowingActive: o = !1, getContentBounds: s, getNodePosition: c, viewportInset: l }) {
	let u = ay(), d = uv(), f = q(l);
	f.current = l;
	let p = uC(l), [m, h] = J(e), g = sC(m, {
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
		if (!uC(t)) return e;
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
			let t = T(Xx);
			if (typeof t == "number") {
				u.fitBounds(e, {
					duration: 400,
					padding: t
				});
				return;
			}
			let { width: n, height: r, minZoom: i, maxZoom: a } = d.getState();
			u.setViewport($h(e, n, r, i, a, t), { duration: 400 });
			return;
		}
		u.fitView({
			duration: 400,
			padding: T(Xx)
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
				padding: T(Zx)
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
function fC(e) {
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
function pC({ roots: e, expandedNodes: t, selectionMode: n, controlledSelected: r, onNodeSelect: i, onSelectedNodesChange: a, canvasRef: o }) {
	let [s, c] = J(/* @__PURE__ */ new Set()), l = r ?? s, u = r !== void 0, d = q(l);
	G(() => {
		d.current = l;
	}, [l]);
	let [f, p] = J(() => {
		let n = wS(e, t);
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
function mC(e) {
	return K(() => gC(e), [e]);
}
function hC(e) {
	return e.parentIds && e.parentIds.length > 0 ? e.parentIds[0] : e.parentId;
}
function gC(e) {
	let t = /* @__PURE__ */ new Map(), n = [], r = [], i = /* @__PURE__ */ new Set();
	for (let n of e) {
		let e = hC(n), r = n.parentIds && n.parentIds.length > 0 ? n.parentIds : void 0, i = {
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
function _C({ nodeIds: e, loadVisibleNodeData: t, debounceMs: n = 200, enabled: r = !0 }) {
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
var vC = jn(({ onZoomIn: e, onZoomOut: t, onFitView: n, onFocusUser: r, labels: i }, a) => {
	let o = y();
	return /* @__PURE__ */ Z("div", {
		ref: a,
		role: "toolbar",
		"aria-label": o.graph.controls.navigation,
		className: "flex flex-col items-center gap-2",
		children: [
			r && /* @__PURE__ */ X(Ne, {
				variant: "outline",
				size: "md",
				label: i?.findMe ?? o.graph.controls.findMe,
				icon: ln,
				hideLabel: !0,
				onClick: r
			}),
			/* @__PURE__ */ X(Ne, {
				variant: "outline",
				size: "md",
				label: i?.fitView ?? o.graph.controls.fitToView,
				icon: ue,
				hideLabel: !0,
				onClick: n
			}),
			/* @__PURE__ */ X("div", { className: "h-px w-4 bg-f1-border rounded" }),
			/* @__PURE__ */ X(Ne, {
				variant: "outline",
				size: "md",
				label: i?.zoomIn ?? o.graph.controls.zoomIn,
				icon: tt,
				hideLabel: !0,
				onClick: e
			}),
			/* @__PURE__ */ X(Ne, {
				variant: "outline",
				size: "md",
				label: i?.zoomOut ?? o.graph.controls.zoomOut,
				icon: St,
				hideLabel: !0,
				onClick: t
			})
		]
	});
});
vC.displayName = "F0GraphControls";
//#endregion
//#region src/patterns/F0Graph/components/F0GraphEdge/F0GraphEdge.tsx
var yC = {
	default: "var(--f0-graph-edge-default)",
	hover: "var(--f0-graph-edge-hover)",
	highlighted: "var(--f0-graph-edge-highlighted)",
	dimmed: "var(--f0-graph-edge-default)"
}, bC = "f0-edge-dot", xC = 5, SC = {
	smoothstep: Mg,
	straight: Eg,
	bezier: yg
};
function CC({ variant: e, strokeWidth: t = 1, pathType: n, type: r, ...i }) {
	let a = i.data?.variant, o = e ?? a ?? "default", s = $x(), c = (s ? s.zoomLevel === "detail" ? 1 : s.zoomLevel === "compact" ? 2 : 4 : void 0) ?? i.style?.strokeWidth ?? t, l = i.data?.showDot !== !1, u = n ?? i.data?.pathType ?? "smoothstep", [d] = ((i.sourcePosition === "bottom" || i.sourcePosition === "top" ? Math.abs(i.sourceX - i.targetX) : Math.abs(i.sourceY - i.targetY)) < 2 ? Eg : SC[u] ?? SC.smoothstep)({
		sourceX: i.sourceX,
		sourceY: i.sourceY,
		targetX: i.targetX,
		targetY: i.targetY,
		sourcePosition: i.sourcePosition,
		targetPosition: i.targetPosition,
		borderRadius: 10
	}), f = yC[o];
	return /* @__PURE__ */ Z(Y, { children: [l && /* @__PURE__ */ X("defs", { children: /* @__PURE__ */ X("marker", {
		id: `${bC}-${i.id}`,
		viewBox: "0 0 10 10",
		refX: xC,
		refY: xC,
		markerWidth: xC,
		markerHeight: xC,
		children: /* @__PURE__ */ X("circle", {
			cx: xC,
			cy: xC,
			r: xC * .8,
			fill: f
		})
	}) }), /* @__PURE__ */ X(cb, {
		id: i.id,
		path: d,
		markerEnd: l ? `url(#${bC}-${i.id})` : void 0,
		style: {
			stroke: f,
			strokeWidth: c,
			opacity: o === "dimmed" ? .5 : void 0
		}
	})] });
}
CC.displayName = "F0GraphEdge";
var wC = Nn(CC, (e, t) => e.id === t.id && e.variant === t.variant && e.strokeWidth === t.strokeWidth && e.data?.variant === t.data?.variant && e.data?.showDot === t.data?.showDot && e.data?.pathType === t.data?.pathType && e.style?.strokeWidth === t.style?.strokeWidth && e.sourceX === t.sourceX && e.sourceY === t.sourceY && e.targetX === t.targetX && e.targetY === t.targetY && e.sourcePosition === t.sourcePosition && e.targetPosition === t.targetPosition);
wC.displayName = "F0GraphEdge";
//#endregion
//#region src/patterns/F0Graph/components/F0GraphView/F0GraphView.tsx
function TC(e) {
	let t = e.data, n = t?.graphEdge, r = t?.variant ?? "default", i = sS()?.renderEdge;
	if (i && n) {
		let e = i(n, r);
		if (e !== null) return /* @__PURE__ */ X(Y, { children: e });
	}
	return /* @__PURE__ */ X(CC, {
		...e,
		variant: r
	});
}
TC.displayName = "F0GraphEdgeWrapper";
var EC = Nn(TC, (e, t) => e.id === t.id && e.data?.showDot === t.data?.showDot && e.data?.variant === t.data?.variant && e.data?.graphEdge === t.data?.graphEdge && e.sourceX === t.sourceX && e.sourceY === t.sourceY && e.targetX === t.targetX && e.targetY === t.targetY && e.sourcePosition === t.sourcePosition && e.targetPosition === t.targetPosition), DC = {
	graphNode: LS,
	expanderNode: zS,
	collapserNode: US,
	stackGroup: HS
}, OC = { graphEdge: CC }, kC = { graphEdge: EC };
function AC(e) {
	let { handleRef: t, nodes: n, edges: r, rootNodes: i, loadChildren: a, deferredNodes: o, onDeferredLoadComplete: s, onDeferredLoadError: c, renderNode: l, zoomPreset: u, zoomThresholds: d, defaultZoom: f = 1, minZoom: p = .05, maxZoom: m = 2, expandedNodes: h, defaultExpandedNodes: g, defaultExpandDepth: _, onExpandToggle: v, onExpandedNodesChange: b, selectionMode: x = "single", selectedNodes: S, onNodeSelect: C, onSelectedNodesChange: w, onPaneClick: T, focusedNode: E, initialFocusNodeId: D, centerOnNodeClick: O = !0, nodeClickZoom: k, viewportInset: A, highlightedNodes: j, nodeWidth: M, nodeHeight: N, stackedNodeHeight: P, stackedNodeGap: F, canvasActions: I, canvasFooterActions: L, showControls: R = !1, onZoomLevelChange: z, onViewportChange: B, renderEdge: ee, nodeTagTypes: te, visibleTagTypes: V, defaultVisibleTagTypes: H, reserveTagRow: U, onVisibleNodesChange: ne, onRenderedNodesChange: re, enableNodeWindowing: ie, nodeWindowPadding: ae, loadVisibleNodeData: oe, visibleDataDebounceMs: se, layoutEngine: ce, controlLabels: le, currentUserNodeId: ue, onFocusUser: de } = e, fe = y(), pe = ay(), [me, he] = J(null), [ge, _e] = J(null), ve = q(null), ye = q(null), be = V ?? H ?? te ?? Kx, xe = K(() => new Set(be), [be]), Se = q(l);
	Se.current = l;
	let Ce = K(() => (e, t) => Se.current(e, t), []), we = ee ? kC : OC, Te = i !== void 0 && a !== void 0, Ee = q([]).current, De = q(async () => []).current, Oe = fC({
		rootNodes: Te ? i : Ee,
		loadChildren: Te ? a : De
	}), ke = fS({
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
	let je = Te ? Oe.nodes : o ? ke.mergedNodes : n ?? [], Me = Te ? r : o ? ke.mergedEdges : r, { roots: Ne, nodeMap: Pe } = mC(je), Fe = q(null), Ie = q(null), Le = q(null), { expandedNodes: Re, expandedNodesRef: ze, anchorNodeRef: Be, toggleExpand: Ve, expandAll: He, collapseAll: Ue } = TS({
		roots: Ne,
		nodeMap: Pe,
		isLazyMode: Te,
		lazyTree: Oe,
		controlledExpanded: h,
		defaultExpandedNodes: g,
		defaultExpandDepth: _,
		onExpandToggle: v,
		onExpandedNodesChange: b
	}), We = q(null), Ge = q(() => void 0), Ke = q([]), qe = q("detail"), Je = K(() => () => We.current, []), Ye = K(() => (e) => Ge.current(e), []), { zoomLevel: Xe, viewportReady: Ze, handleViewportChange: Qe, handleZoomIn: $e, handleZoomOut: et, handleFitView: tt, handleFocusUser: nt, centerOnNode: rt, getFitPadding: it, hasViewportInset: at } = dC({
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
	}), ot = (ie ?? !1) && Ze, { selectedNodes: st, focusedNodeId: ct, setFocusedNodeId: lt, focusedNodeIdRef: ut, registerNodeRef: dt, nodeRefsMapRef: ft, flatVisibleOrderRef: pt, selectNode: mt, clearSelection: ht } = pC({
		roots: Ne,
		expandedNodes: Re,
		selectionMode: x,
		controlledSelected: S,
		onNodeSelect: C,
		onSelectedNodesChange: w,
		canvasRef: Fe
	}), gt = j ?? Gx, { visibleTreeNodes: _t, rfNodes: vt, rfEdges: yt, reservedTagHeight: bt, renderedNodeCount: xt, renderedNodeIds: St, treeRootNodeIds: Ct, contentBounds: wt, getNodePosition: Tt, stackHoverZones: Et } = iC({
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
		nodeTagTypes: te,
		visibleTagTypesSet: xe,
		reserveTagRow: U,
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
		}), a = vS(r, i.x, i.y);
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
	}, [ht, T]), { handleTreeKeyDown: Mt, handleCanvasKeyDown: Nt } = ES({
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
		ne?.(_t.length);
	}, [_t.length, ne]), G(() => {
		re?.(xt);
	}, [xt, re]), _C({
		nodeIds: St,
		loadVisibleNodeData: oe,
		debounceMs: se,
		enabled: !ie || Ze
	});
	let Pt = q(() => {});
	Pt.current = (e) => {
		if (ie && rt(e, 300)) return;
		let t = hS(e, Pe.get(e)?.children.map((e) => e.id) ?? [], new Set(St));
		pe.fitView({
			nodes: t ?? [{ id: e }],
			duration: 300,
			padding: it(Zx),
			maxZoom: Math.min(1, m)
		});
	};
	let Ft = q(() => {});
	Ft.current = (e) => {
		let t = Math.min(k ?? 1.5, m);
		rt(e, 300, t) || pe.fitView({
			nodes: [{ id: e }],
			duration: 300,
			padding: it(Xx),
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
			pe.fitView(at ? { padding: it(Xx) } : void 0);
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
	Bt.current = ht, In(t, () => ({
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
		renderEdge: ee,
		visibleTagTypes: te ? xe : void 0,
		deferredLoading: Kt || void 0,
		dataLoadingEnabled: oe !== void 0 || void 0,
		tagRowHeight: bt,
		stackedNodeHeight: P,
		largeGraph: qt
	}), [
		ee,
		te,
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
	return /* @__PURE__ */ X(iS.Provider, {
		value: Gt,
		children: /* @__PURE__ */ X(oS.Provider, {
			value: Jt,
			children: /* @__PURE__ */ X(uS.Provider, {
				value: Yt,
				children: /* @__PURE__ */ X(Qx.Provider, {
					value: Vt,
					children: /* @__PURE__ */ X(eS.Provider, {
						value: Ht,
						children: /* @__PURE__ */ X(nS.Provider, {
							value: Ut,
							children: /* @__PURE__ */ X(cS.Provider, {
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
											children: /* @__PURE__ */ X(ox, {
												nodes: vt,
												edges: yt,
												nodeTypes: DC,
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
												children: /* @__PURE__ */ X(px, {
													id: "f0-graph-bg",
													variant: lx.Dots,
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
											children: /* @__PURE__ */ X(vC, {
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
function jC(e, t) {
	return /* @__PURE__ */ X(nx, { children: /* @__PURE__ */ X(AC, {
		...e,
		handleRef: t
	}) });
}
var MC = jn(jC);
MC.displayName = "F0Graph";
//#endregion
//#region src/patterns/F0Graph/F0GraphSkeleton.tsx
var NC = 256, PC = 40, FC = 8, IC = () => /* @__PURE__ */ Z("div", {
	className: "flex h-[52px] w-64 items-center gap-3 rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3",
	children: [/* @__PURE__ */ X(Me, { className: "h-8 w-8 shrink-0 rounded-full" }), /* @__PURE__ */ Z("div", {
		className: "flex flex-1 flex-col gap-1.5",
		children: [/* @__PURE__ */ X(Me, { className: "h-3 w-28 rounded" }), /* @__PURE__ */ X(Me, { className: "h-2.5 w-20 rounded" })]
	})]
}), LC = () => /* @__PURE__ */ X(Me, { className: "h-5 w-20 rounded-full" }), RC = () => /* @__PURE__ */ X(Me, { className: "h-7 w-10 rounded-lg" }), zC = ({ childrenCount: e }) => {
	let t = e * NC + (e - 1) * PC, n = t / 2;
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
	let r = (e) => e * 296 + NC / 2, i = r(0), a = r(e - 1), o = `M${i} 40 V28 Q${i} 20 ${i + FC} 20 H${a - FC} Q${a} 20 ${a} 28 V40`, s = Array.from({ length: e - 2 }, (e, t) => r(t + 1));
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
}, BC = ({ childrenCount: e = 3, showTags: t = !0, className: n }) => /* @__PURE__ */ Z("div", {
	"aria-busy": "true",
	"aria-live": "polite",
	className: I("flex h-full min-h-0 flex-1 flex-col items-center justify-center pb-4", n),
	children: [/* @__PURE__ */ Z("div", {
		className: "flex flex-col items-center gap-2",
		children: [/* @__PURE__ */ X(IC, {}), t && /* @__PURE__ */ X(LC, {})]
	}), e > 0 && /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(zC, { childrenCount: e }), /* @__PURE__ */ X("div", {
		className: "flex items-start gap-10",
		children: Array.from({ length: e }).map((e, n) => /* @__PURE__ */ Z("div", {
			className: "flex flex-col items-center gap-2",
			children: [
				/* @__PURE__ */ X(IC, {}),
				t && /* @__PURE__ */ X(LC, {}),
				/* @__PURE__ */ X(RC, {})
			]
		}, n))
	})] })]
}), VC = (e) => e.column ?? e.type;
//#endregion
//#region src/patterns/F0Graph/components/F0GraphNode/F0GraphNodeHoverCard.tsx
function HC(e, t) {
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
function UC({ trigger: e, avatar: t, title: n, subtitle: r, tags: i, tagLabels: a }) {
	let o = i?.map((e) => HC(e, a?.[VC(e)] ?? "")).filter((e) => e !== null);
	return /* @__PURE__ */ Z(Ft, {
		openDelay: 300,
		closeDelay: 100,
		children: [/* @__PURE__ */ X(zt, {
			asChild: !0,
			children: e
		}), /* @__PURE__ */ X(Lt, {
			side: "top",
			align: "center",
			className: "w-64 rounded-2xl border-none p-0 text-f1-foreground shadow-md",
			children: /* @__PURE__ */ X(Ht, {
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
var WC = ({ shellProps: e, variant: t, state: n, avatar: r, title: i, trailing: a, loading: o, height: s = 44 }) => {
	let c = n === "selected" || n === "highlighted", l = Jx[t], u = l === null;
	return /* @__PURE__ */ Z("div", {
		...e,
		"data-zoom-level": t,
		className: I("group flex w-full items-center rounded-xl border border-solid", "outline-none transition-[border-color,background-color,opacity] duration-200", u ? "justify-center border-transparent bg-transparent" : c ? "border-f1-border-selected-bold bg-f1-background ring-2 ring-f1-background-selected ring-offset-0" : "border-f1-border bg-f1-background hover:bg-f1-background-hover", !u && "focus-visible:ring-2 focus-visible:ring-f1-background-selected focus-visible:ring-offset-0", n === "dimmed" && "opacity-40"),
		style: {
			height: s,
			paddingLeft: 5,
			paddingRight: 5,
			gap: 8
		},
		children: [o ? /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(Me, {
			className: "shrink-0 rounded-full",
			style: {
				width: 32,
				height: 32
			}
		}), l && /* @__PURE__ */ X(Me, { className: "h-3 w-24 flex-1 rounded-xs" })] }) : /* @__PURE__ */ Z(Y, { children: [r && /* @__PURE__ */ X("div", {
			className: I("flex shrink-0 items-center justify-center", u && "rounded-md", u && c && "ring-2 ring-f1-background-selected ring-offset-0", u && "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0"),
			style: {
				width: 32,
				height: 32
			},
			children: /* @__PURE__ */ X(Tt, {
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
function GC({ tags: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ X("div", {
		className: "flex flex-wrap items-center justify-center gap-1",
		children: e.map((e, t) => /* @__PURE__ */ X("div", { children: /* @__PURE__ */ X(Nt, { tag: e }) }, `${e.type}-${t}`))
	});
}
//#endregion
//#region src/patterns/F0Graph/components/F0GraphNode/variants.ts
var KC = n({
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
}), qC = "opacity 120ms ease-out", JC = "transform 120ms ease-out", YC = "opacity 84ms ease-out", XC = jn(({ variant: e = "detail", state: t = "default", expanded: n, level: r, tabIndex: i = 0, setSize: a, posInSet: o, hasChildren: s, childrenCount: c, onExpandToggle: l, onClick: u, nodeRef: d, nodeId: f, ariaOwns: p, avatar: m, title: h, subtitle: g, tags: _, visibleTagTypes: v, tagLabels: y, actions: b, loading: x, hoverCard: S, stacked: T, trailing: E, stackedHeight: D }, O) => {
	let k = W((e) => {
		typeof O == "function" ? O(e) : O && (O.current = e), d?.(e);
	}, [O, d]), A = Gn(), j = sS(), M = A || j?.largeGraph === !0, N = q(e), P = N.current !== e && (e === "dot" || N.current === "dot"), F = P ? N.current : e;
	G(() => {
		let t = window.setTimeout(() => {
			N.current = e;
		}, 132);
		return () => {
			window.clearTimeout(t);
		};
	}, [e]);
	let L = {
		ref: k,
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
	}, R = e === "compact", z = e === "dot", B = e === "detail", ee = _ ? v ? _.filter((e) => v.has(VC(e))) : _ : void 0, te = B && !!ee && ee.length > 0, V = (e) => te ? /* @__PURE__ */ X(C.div, {
		initial: !M && {
			opacity: 0,
			filter: "blur(3px)"
		},
		animate: {
			opacity: 1,
			filter: "blur(0px)"
		},
		transition: M ? { duration: 0 } : {
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
		children: /* @__PURE__ */ X(GC, { tags: ee })
	}, "tags") : null;
	if (T) return /* @__PURE__ */ Z("div", {
		className: "flex w-full flex-col items-center gap-1.5",
		children: [/* @__PURE__ */ X(WC, {
			shellProps: L,
			variant: e,
			state: t,
			avatar: m,
			title: h,
			trailing: E,
			loading: x,
			height: D
		}), V("max-w-full")]
	});
	let H = m != null && m.type !== "person", U = z ? !!(h || g || ee?.length) : R ? !!(g || ee?.length) : !1, ne = /* @__PURE__ */ Z("div", {
		...L,
		"data-zoom-level": e,
		className: I(KC({
			variant: e,
			state: t
		}), "flex-col gap-1.5", "group outline-none"),
		children: [
			/* @__PURE__ */ Z("div", {
				className: I("group/pill relative inline-flex max-w-full flex-col items-stretch", "outline-none", H ? "rounded-2xl" : "rounded-full", !z && (t === "selected" || t === "highlighted") && "ring-2 ring-f1-background-selected ring-offset-0", t === "dimmed" && z && "opacity-40", !z && "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0", H ? "p-2.5" : "px-2.5 py-2", "min-h-11"),
				style: { contain: "layout" },
				children: [/* @__PURE__ */ X("div", {
					"aria-hidden": !0,
					className: I("pointer-events-none absolute inset-0 border border-solid bg-f1-background", H ? "rounded-2xl" : "rounded-full", (!z || P) && "backdrop-blur-[7px]", z ? "border-f1-border-secondary" : "border-f1-border", t !== "selected" && t !== "highlighted" && !z && "group-hover/pill:bg-f1-background-hover", (t === "selected" || t === "highlighted") && "border-f1-border-selected-bold"),
					style: {
						borderWidth: z ? 1.5 : 1,
						opacity: +!z,
						transition: M ? "none" : qC,
						willChange: "opacity",
						transform: "translateZ(0)"
					}
				}), /* @__PURE__ */ Z("div", {
					className: "relative inline-flex items-center",
					children: [/* @__PURE__ */ X("div", {
						className: I("flex shrink-0 items-center justify-center", H ? "rounded-md" : "rounded-full", z && (t === "selected" || t === "highlighted") && "ring-2 ring-f1-background-selected ring-offset-0", z && "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0"),
						style: {
							transform: `translateZ(0) scale(${z ? 96 / 40 : 1})`,
							transformOrigin: "center center",
							transition: M ? "none" : JC,
							willChange: "transform"
						},
						children: x ? /* @__PURE__ */ X(Me, { className: I("h-10 w-10", H ? "rounded-md" : "rounded-full") }) : m && /* @__PURE__ */ X(Tt, {
							size: "lg",
							avatar: m
						})
					}), /* @__PURE__ */ X("div", {
						style: {
							width: z ? 0 : 176,
							marginLeft: z ? 0 : 8,
							opacity: +!z,
							transition: M ? "none" : YC,
							transitionDelay: M || z ? "0ms" : "36ms"
						},
						className: "relative min-w-0 flex-1 self-stretch overflow-hidden whitespace-nowrap",
						children: /* @__PURE__ */ X(w, {
							mode: "sync",
							initial: !1,
							children: /* @__PURE__ */ X(C.div, {
								initial: P || M ? !1 : {
									opacity: 0,
									filter: "blur(2.5px)"
								},
								animate: {
									opacity: 1,
									filter: "blur(0px)"
								},
								exit: P || M ? { opacity: 0 } : {
									opacity: 0,
									filter: "blur(2.5px)"
								},
								transition: P || M ? { duration: 0 } : {
									duration: .084,
									ease: [
										.23,
										1,
										.32,
										1
									]
								},
								className: "absolute inset-0 flex flex-col justify-center",
								style: P || M ? void 0 : { willChange: "filter, opacity" },
								children: x ? /* @__PURE__ */ Z("div", {
									className: "flex flex-col justify-center gap-1.5",
									children: [/* @__PURE__ */ X(Me, {
										className: "rounded-xs",
										style: {
											height: R ? 20 : 12,
											width: R ? 120 : 96
										}
									}), !R && !z && /* @__PURE__ */ X(Me, {
										className: "rounded-xs",
										style: {
											height: 12,
											width: 64
										}
									})]
								}) : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X("p", {
									className: "w-full truncate tracking-[-0.07px] text-f1-foreground",
									style: {
										fontSize: R ? 24 : 14,
										lineHeight: R ? "32px" : "20px",
										fontWeight: 500
									},
									children: h
								}), !R && !z && g && /* @__PURE__ */ X("p", {
									className: "w-full truncate tracking-[-0.07px] text-f1-foreground-secondary",
									style: {
										fontSize: 14,
										lineHeight: "20px",
										fontWeight: 400
									},
									children: g
								})] })
							}, F)
						})
					})]
				})]
			}),
			B && b && /* @__PURE__ */ X(Wx, {
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
			V("max-w-[256px]")
		]
	});
	return S && U && !x ? /* @__PURE__ */ X(UC, {
		trigger: ne,
		avatar: m,
		title: typeof h == "string" ? h : void 0,
		subtitle: typeof g == "string" ? g : void 0,
		tags: ee,
		tagLabels: y
	}) : ne;
});
XC.displayName = "F0GraphNode";
var ZC = XC;
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/Graph/reveal.ts
function QC({ isInitialLoading: e, initialConsumed: t, revealNodeId: n, lastRevealed: r, revealNonce: i, lastNonce: a }) {
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
var $C = 200, ew = (e) => ({
	message: "Error fetching data",
	cause: e
}), tw = (e) => Array.isArray(e) ? e : e && typeof e == "object" && "records" in e ? e.records ?? [] : [], nw = (e) => {
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
						t?.data && (r = !0, e(tw(t.data)), i.unsubscribe());
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
	return e && typeof e == "object" && "then" in e ? e.then((e) => tw(e)) : Promise.resolve(tw(e));
}, rw = (e) => (e.childrenCount ?? 0) > 0, iw = (e, t) => {
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
}, aw = (e, t, n) => {
	let r = new Set(e.map((e) => e.id)), i = t.filter((e) => !r.has(e.id));
	return [...e.map((e) => e.id === n ? {
		...e,
		childrenLoaded: !0
	} : e), ...i];
}, ow = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		if (n.parentId === null) continue;
		let e = t.get(n.parentId) ?? [];
		e.push(n.id), t.set(n.parentId, e);
	}
	return t;
}, sw = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	if (e.length === 0) return n;
	let r = ow(t.values()), i = [];
	for (let r of e) t.has(r) && !n.has(r) && (n.add(r), i.push(r));
	for (let e = 0; e < i.length; e++) for (let t of r.get(i[e]) ?? []) n.has(t) || (n.add(t), i.push(t));
	return n;
}, cw = (e) => {
	let t = [];
	for (let n of e.values()) n.parentId !== null && !e.has(n.parentId) && t.push(n.id);
	return t;
}, lw = ({ records: e, byId: t, touchedParents: n, getId: r, getParentId: i, getChildrenCount: a, stackNodes: o, hydrates: s }) => {
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
}, uw = (e, t, n) => {
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
function dw(e, t, n) {
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
		}, o = "perPage" in n && typeof n.perPage == "number" ? n.perPage : $C;
		return n.paginationType === void 0 ? nw(n.fetchData(a)) : n.paginationType === "pages" ? nw(n.fetchData({
			...a,
			pagination: {
				currentPage: 1,
				perPage: o
			}
		})) : n.paginationType === "infinite-scroll" ? nw(n.fetchData({
			...a,
			pagination: {
				cursor: null,
				perPage: o
			}
		})) : nw(n.fetchData({
			...a,
			pagination: {}
		}));
	}, []), w = W(async (e) => {
		if (b.current.has(e)) return c.current.filter((t) => t.parentId === e);
		b.current.add(e);
		try {
			let t = (await C(i.current.childrenFilters(e))).map((t) => S(t, e));
			return s((n) => aw(n, t, e)), t;
		} catch (t) {
			b.current.delete(e);
			let n = ew(t);
			return y(n), a.current.onLoadError(n), [];
		}
	}, [C, S]), T = W(async (e) => {
		let t = c.current.filter((t) => t.parentId === null && e.has(t.id) && rw(t)), n = /* @__PURE__ */ new Set();
		for (; t.length > 0;) {
			let r = t.filter((e) => !n.has(e.id));
			if (r.forEach((e) => n.add(e.id)), r.length === 0) break;
			let i = await Promise.all(r.map((e) => w(e.id).then((e) => ({ children: e })))), a = [];
			for (let { children: t } of i) for (let n of t) e.has(n.id) && rw(n) && a.push(n);
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
			let t = ew(e);
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
			s((e) => iw(e, t));
		}).catch((e) => {
			let t = ew(e);
			y(t), a.current.onLoadError(t);
		});
	}, [x]), j = W((e, t) => {
		if (e.length === 0 && t.length === 0) return;
		let n = i.current;
		s((r) => {
			let i = new Map(r.map((e) => [e.id, e])), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = (e) => {
				for (let t of sw(e, i)) {
					let e = i.get(t)?.parentId;
					e != null && o.add(e), i.delete(t), b.current.delete(t), a.add(t);
				}
			};
			if (s(t), lw({
				records: e,
				byId: i,
				touchedParents: o,
				getId: x,
				getParentId: n.getParentId,
				getChildrenCount: n.getChildrenCount,
				stackNodes: n.stackNodes,
				hydrates: !!n.loadNodeData
			}), s(cw(i)), uw(i, o, b.current), a.size > 0) {
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
				let e = o.filter(rw);
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
			let t = ew(e);
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
var fw = ({ source: e, title: t, subtitle: n, avatar: r, tags: i, nodeActions: a, nodeTagTypes: o, defaultVisibleTagTypes: s, pinnedTagTypes: c, lockedTagTypes: l, currentUserNodeId: u, getNodeId: d, getChildrenCount: f, stackNodes: p, stackedTrailing: m, childrenFilters: h, defaultExpandDepth: g, revealNodeId: _, searchSelectionNonce: v, focusOnEntry: y, initialSelectedNodeId: b, loadNodePath: x, getParentId: S, loadNodeData: C, liveUpdate: w, zoomPreset: T, minZoom: E, maxZoom: D, centerOnNodeClick: O, nodeClickZoom: k, viewportInset: A, showControls: j, canvasFooterActions: M, enableNodeWindowing: N, nodeWindowPadding: P, loadVisibleNodeData: F, visibleDataDebounceMs: I, onLoadData: L, onLoadError: R }) => {
	let { nodes: z, expandedNodes: B, setExpandedNodes: ee, focusedNode: te, highlightedNodes: V, revealNode: H, clearFocus: U, loadVisibleNodeData: ne, isInitialLoading: re } = dw(e, {
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
		await H(e), ie.current?.clearSelection(), ie.current?.focusNode(e);
	}, [H]), le = q(void 0), ue = q(void 0), de = q(!1);
	G(() => {
		if (re) return;
		let e = QC({
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
	let { settings: pe } = dc(), me = pe.visualization.graph, he = o ? [...o] : [], ge = new Set(s ?? he), _e = new Set(c ?? []), ve = new Set(Object.keys(l ?? {})), ye = new Set(me?.hidden ?? he.filter((e) => !ge.has(e))), be = me?.order ?? he, xe = he.sort((e, t) => (be.indexOf(e) === -1 ? Infinity : be.indexOf(e)) - (be.indexOf(t) === -1 ? Infinity : be.indexOf(t))), Se = xe.filter((e) => !ve.has(e) && (_e.has(e) || !ye.has(e))), Ce = i ? (e) => [...i(e)].sort((e, t) => xe.indexOf(VC(e)) - xe.indexOf(VC(t))) : void 0;
	return /* @__PURE__ */ X("div", {
		className: "flex h-full min-h-0 flex-1 flex-col border-0 border-t border-solid border-f1-border-secondary bg-[hsl(var(--neutral-3))]",
		children: re ? /* @__PURE__ */ X(BC, { showTags: i !== void 0 }) : /* @__PURE__ */ X(MC, {
			ref: ie,
			nodes: z,
			expandedNodes: B,
			onExpandedNodesChange: ee,
			focusedNode: te,
			initialFocusNodeId: y,
			highlightedNodes: V,
			selectionMode: "single",
			selectedNodes: ae ? oe : void 0,
			onSelectedNodesChange: (e) => {
				ae && se(e), e.size > 0 && U();
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
			loadVisibleNodeData: ne ?? F,
			visibleDataDebounceMs: I,
			reserveTagRow: i !== void 0,
			nodeTagTypes: o,
			visibleTagTypes: Se,
			currentUserNodeId: u,
			onFocusUser: u ? () => ce(u) : void 0,
			onPaneClick: U,
			renderNode: (i, o) => {
				let s = e.itemOnClick?.(i.data);
				return /* @__PURE__ */ X(ZC, {
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
}, pw = ({ tagTypes: e, labels: t, defaultVisibleTagTypes: n, pinnedTagTypes: r, lockedTagTypes: i }) => {
	let { settings: a } = dc(), o = a.visualization.graph ?? {}, s = new Set(n ?? e), c = new Set(r ?? []), l = i ?? {}, u = new Set(o.hidden ?? e.filter((e) => !s.has(e))), d = o.order ?? [], f = [...d.filter((t) => e.includes(t)), ...e.filter((e) => !d.includes(e))].map((e) => {
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
	return /* @__PURE__ */ X(Pu, {
		items: f,
		visualizationKey: "graph",
		allowSorting: !0,
		allowHiding: !0
	});
}, mw = (e) => !e.nodeTagTypes || e.nodeTagTypes.length === 0 ? null : /* @__PURE__ */ X(pw, {
	tagTypes: e.nodeTagTypes,
	labels: e.nodeTagTypeLabels,
	defaultVisibleTagTypes: e.defaultVisibleTagTypes,
	pinnedTagTypes: e.pinnedTagTypes,
	lockedTagTypes: e.lockedTagTypes
});
//#endregion
//#region ../../node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.3.1/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js
function hw(e) {
	var t = Tn.useRef(e), n = Tn.useRef(0);
	return wn(e, t.current) || (t.current = e, n.current += 1), Tn.useMemo(function() {
		return t.current;
	}, [n.current]);
}
//#endregion
//#region src/patterns/OneDataCollection/hooks/useDataCollectionData/utils.ts
function gw(e, t) {
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
var _w = ({ source: e, lane: t, onError: n, onHookUpdate: r }) => {
	let [i, a] = J(!1), { data: o, search: s, setSearch: c, isInitialLoading: l, isLoading: u, isLoadingMore: d, error: f, paginationInfo: p, setPage: m, loadMore: h, totalItems: g, mergedFilters: _, summaries: v, committedQuery: y } = dl(K(() => ({
		...e,
		isLoading: i,
		setIsLoading: a
	}), [e, i]), {
		filters: K(() => gw(e.currentFilters, t.filters), [e.currentFilters, t.filters]),
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
function vw(e, t = {}) {
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
	}, []), d = hw({
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
		lanesProvider: K(() => (n || []).map((t) => /* @__PURE__ */ X(_w, {
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
var yw = (e) => {
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
}, bw = (e) => {
	let t = Ue({
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
}, xw = (e, t, n) => {
	let [r, i] = J(/* @__PURE__ */ new Map()), [a, o] = J({
		selectItemsStatus: /* @__PURE__ */ new Map(),
		clearCallback: /* @__PURE__ */ new Map()
	}), s = W(() => {
		a.clearCallback.forEach((e) => e());
	}, [a.clearCallback]);
	return G(() => {
		let e = Object.fromEntries(a.selectItemsStatus);
		n?.({
			...yw(a.selectItemsStatus),
			byLane: e
		}, s);
	}, [a]), {
		lanesUseSelectable: r,
		lanesSelectProvider: K(() => (e || []).map((e) => /* @__PURE__ */ X(bw, {
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
}, Sw = 5;
function Cw(e) {
	if (!e.length) return;
	if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
	let t = {};
	for (let n of e) {
		if (!n) continue;
		let e = n.split(" ");
		for (let n of e) {
			let e = n.startsWith("_") ? n.slice(0, Sw) : n;
			t[e] = n;
		}
	}
	let n = "";
	for (let e in t) n += t[e] + " ";
	if (n) return n.trimEnd();
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop-react-drop-indicator@3.2.11_@types+react@18.3.18_react@18.3.1/node_modules/@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/dist/esm/presets.js
var ww = {
	default: "var(--ds-border-selected, #1868DB)",
	warning: "var(--ds-border-warning, #E06C00)"
}, Tw = "var(--ds-border-width-selected, 2px)", Ew = {
	top: "horizontal",
	bottom: "horizontal",
	left: "vertical",
	right: "vertical"
}, Dw = { root: "_1e0c1ule _kqswstnw _1pbykb7n _lcxvglyw _bfhkys7w _rfx31ssb _3l8810ly _kzdanqa1 _15m6ys7w _cfu11ld9 _1kt9b3bt _1cs8stnw _13y0usvi _1mp4vjfa _kfgtvjfa" }, Ow = {
	horizontal: "_4t3i10ly _1e02fghn _rjxpidpf _z5wtuj5p",
	vertical: "_1bsb10ly _154ifghn _94n5idpf _1aukuj5p"
}, kw = {
	top: "_154ihv0e _1auk70hn",
	right: "_1xi2hv0e _ooun70hn",
	bottom: "_94n5hv0e _19wo70hn",
	left: "_1ltvhv0e _qnec70hn"
}, Aw = {
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
function jw(e) {
	var t = e.edge, n = e.gap, r = n === void 0 ? "0px" : n, i = e.indent, a = i === void 0 ? "0px" : i, o = e.strokeColor, s = o === void 0 ? ww.default : o, c = e.strokeWidth, l = c === void 0 ? Tw : c, u = e.type, d = u === void 0 ? "terminal" : u, f = Ew[t];
	return /*#__PURE__*/ Tn.createElement("div", {
		style: {
			"--stroke-color": s,
			"--stroke-width": l,
			"--main-axis-offset": `calc(-0.5 * (${r} + var(--stroke-width)))`,
			"--line-main-axis-start": Aw[d]({ indent: a }),
			"--terminal-display": d === "no-terminal" ? "none" : "block",
			"--terminal-diameter": "calc(var(--stroke-width) * 4)",
			"--terminal-radius": "calc(var(--terminal-diameter) / 2)",
			"--terminal-main-axis-start": "calc(-1 * var(--terminal-diameter))",
			"--terminal-cross-axis-offset": "calc(calc(var(--stroke-width) - var(--terminal-diameter)) / 2)"
		},
		className: Cw([
			Dw.root,
			Ow[f],
			kw[t]
		])
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop-react-drop-indicator@3.2.11_@types+react@18.3.18_react@18.3.1/node_modules/@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/dist/esm/box.js
function Mw(e) {
	var t = e.appearance, n = t === void 0 ? "default" : t, r = e.edge, i = e.gap, a = e.indent, o = e.type;
	return /*#__PURE__*/ En.createElement(jw, {
		edge: r,
		gap: i,
		strokeColor: ww[n],
		type: o,
		indent: a
	});
}
//#endregion
//#region src/ui/Kanban/components/KanbanCard.tsx
var Nw = "button, a[href], input, select, textarea, [role=\"button\"], [role=\"checkbox\"], [role=\"menuitem\"], [role=\"option\"], [role=\"radio\"], [role=\"switch\"]", Pw = (e) => e instanceof HTMLElement && !!e.closest(Nw);
function Fw({ drag: e, id: t, index: n, total: r, laneId: i, draggable: a = !1, showIndicator: o = !0, disabledEdges: s = [], forcedEdge: c = null, ...l }) {
	let u = q(null), d = q(null), [f, p] = J(null);
	Ja({
		ref: u,
		payload: {
			kind: e.type ?? "list-card",
			id: e.id,
			data: e.data
		}
	}), G(() => {
		if (u.current) return Fa({
			element: u.current,
			getData: ({ input: e, element: r }) => Ha({
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
				let r = Ua(e.data);
				p(r === "top" || r === "bottom" ? r : null);
			},
			onDrag: ({ self: e, source: n }) => {
				if (n?.data?.id === t) {
					p(null);
					return;
				}
				let r = Ua(e.data);
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
		className: I("group relative my-1", a && "cursor-grab active:cursor-grabbing", m && "mt-1.5", h && "mb-1.5"),
		"data-kanban-card": "true",
		"data-index": n,
		"data-lane-id": i,
		onClick: (e) => {
			if (a && !Pw(e.target)) {
				if (l.onClick) {
					l.onClick(), e.preventDefault(), e.stopPropagation();
					return;
				}
				d.current && (d.current.click(), e.preventDefault(), e.stopPropagation());
			}
		},
		children: [
			/* @__PURE__ */ X(Bt, {
				...l,
				disableOverlayLink: a
			}),
			l.link && /* @__PURE__ */ X(on, {
				ref: d,
				href: l.link,
				className: I("!z-1 pointer-events-none absolute inset-0 block rounded-xl", F()),
				"aria-label": l.title,
				children: "\xA0"
			}),
			o && (c ?? f) && /* @__PURE__ */ X(Y, { children: (() => {
				let e = c ?? f;
				return s.includes(e) ? null : /* @__PURE__ */ X(Mw, {
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
var Iw = ({ label: e, variant: t, color: n, count: r, onPrimaryAction: i }) => /* @__PURE__ */ Z("div", {
	className: "flex items-center gap-2 px-1 pb-0.5 pt-2",
	children: [
		n ? /* @__PURE__ */ X(xt, {
			text: e,
			color: n
		}) : /* @__PURE__ */ X(yt, {
			text: e,
			variant: t || "neutral"
		}),
		/* @__PURE__ */ X(Ae, {
			size: "md",
			type: "default",
			value: r
		}),
		!!i && /* @__PURE__ */ X("div", {
			className: "ml-auto flex items-center gap-1 pr-1",
			children: /* @__PURE__ */ X(Ne, {
				variant: "ghost",
				size: "sm",
				label: "Add",
				icon: Ve,
				hideLabel: !0,
				onClick: i
			})
		})
	]
}), Lw = jn(({ showPlaceholders: e = !0, count: t = 3 }, n) => /* @__PURE__ */ X("div", {
	ref: n,
	className: "space-y-1",
	"aria-hidden": !e,
	children: e && Array.from({ length: t }).map((e, t) => /* @__PURE__ */ X(Ht.Skeleton, { compact: !0 }, t))
}));
Lw.displayName = "LoadingSkeleton";
//#endregion
//#region src/ui/Lane/Lane.tsx
function Rw({ title: e, items: t, renderCard: n, getKey: r, emptyState: i, fetchMore: a, variant: o = "neutral", color: s, loading: c = !1, hasMore: l = !1, loadingMore: u = !1, total: d, onPrimaryAction: f, onFooterAction: p, dropPlaceholderIndex: m }) {
	let { loadingIndicatorRef: h } = El({
		type: "infinite-scroll",
		cursor: null,
		hasMore: l,
		total: t.length + +!!l,
		perPage: 3
	}, c, u, a ?? (() => {})), g = !!p;
	return /* @__PURE__ */ Z("div", {
		className: "shadow-sm group relative flex h-full w-[322px] flex-col",
		children: [
			/* @__PURE__ */ X(Iw, {
				label: e || "Lane",
				variant: o,
				color: s,
				count: d ?? t.length,
				onPrimaryAction: f
			}),
			/* @__PURE__ */ X("div", {
				className: I("relative flex h-full min-h-0 flex-1 flex-col px-1 pb-1", (g || t.length === 0) && "pb-11", !g && t.length === 0 && m !== void 0 && "pb-1"),
				children: c ? /* @__PURE__ */ Z(Ct, {
					className: I("relative h-full flex-1 rounded-lg", c && "select-none opacity-50 transition-opacity"),
					children: [/* @__PURE__ */ X(Lw, {}), /* @__PURE__ */ X(w, { children: /* @__PURE__ */ X(C.div, {
						className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						children: /* @__PURE__ */ X(Xt, {})
					}) })]
				}) : t.length === 0 && m === void 0 ? i : /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(Ct, {
					className: "relative h-full flex-1",
					children: /* @__PURE__ */ Z("div", {
						className: I("relative", u && "select-none opacity-50 transition-opacity"),
						"aria-live": u ? "polite" : void 0,
						"aria-busy": u ? "true" : void 0,
						children: [t.length === 0 && m !== void 0 ? /* @__PURE__ */ X("div", {
							className: "relative my-1 mt-1.5",
							children: /* @__PURE__ */ X(Ht.Skeleton, { compact: !0 })
						}) : t.map((e, t) => {
							let i = r(e, t);
							return /* @__PURE__ */ X(En.Fragment, { children: n(e, t) }, i);
						}), (u || l) && /* @__PURE__ */ X(Lw, { ref: h })]
					})
				}), u && /* @__PURE__ */ X(w, { children: /* @__PURE__ */ X(C.div, {
					className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					children: /* @__PURE__ */ X(Xt, {})
				}) })] })
			}),
			g && /* @__PURE__ */ X("div", {
				className: "pointer-events-none absolute inset-x-1 bottom-1.5 z-20 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100",
				children: /* @__PURE__ */ X(je, {
					variant: "ghost",
					size: "md",
					className: "w-full justify-center",
					icon: Ve,
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
function zw(e, t) {
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
function Bw(e) {
	let { resourceIndexOnLane: t, cardTarget: n, sourceItem: r, fromLaneId: i, toLaneId: a, sourceId: o, setItems: s } = e, c = Number(n.data.index), l = Ua(n.data);
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
function Vw(e) {
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
function Hw(e) {
	let { cardTarget: t, sourceItem: n, fromLaneId: r, toLaneId: i, sourceId: a, setItems: o } = e, s = Number(t.data.index), c = Ua(t.data);
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
function Uw(e) {
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
function Ww({ id: e, getLaneResourceIndexById: t, onMove: n, heightMode: r = "fill", ...i }) {
	let a = q(null), o = q(null), s = q(null), [c, l] = J(!1), [u, d] = J(null), f = !!(e && t), p = q(null), m = q(null), h = q(null), g = q(0), _ = q(null), [v, y] = J(!1), [b, x] = J(null), [S, C] = J(null), [w, T] = J(!1), [E, D] = J(-1);
	return Ya(f ? {
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
		}, r = (t) => zw(e, t);
		return Ia({
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
				if (f = d ? m && m.data ? Hw({
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
				} : Uw({
					sourceItem: s,
					fromLaneId: u,
					toLaneId: e,
					sourceId: o,
					setItems: () => {}
				}) : p === "sameLaneOverCard" && m && m.data ? Bw({
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
				} : Vw({
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
	}, [e]), Xa(({ phase: e }) => {
		e === "start" && y(!0), (e === "drop" || e === "cancel") && (y(!1), T(!1), x(null), C(null), D(-1));
	}), G(() => {
		let t = (t) => {
			if (!e) return;
			let r = t.detail;
			r && r.toLaneId === e && n?.(r).catch(() => {});
		};
		return window.addEventListener("kanban-test-move", t), () => window.removeEventListener("kanban-test-move", t);
	}, [e, n]), Ln(() => {
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
		className: I("relative rounded", r === "content" && "h-full"),
		style: { height: u ? `${u}px` : void 0 },
		children: /* @__PURE__ */ Z("div", {
			ref: a,
			className: "relative flex h-full w-full flex-col gap-0 rounded-xl border transition-colors",
			style: { backgroundColor: c ? "hsla(210, 91%, 22%, 0.08)" : "hsla(210, 91%, 22%, 0.02)" },
			children: [/* @__PURE__ */ X("div", {
				ref: p,
				className: I("pointer-events-none absolute inset-0 z-[1]", "bg-transparent"),
				"aria-hidden": !0
			}), /* @__PURE__ */ X("div", {
				ref: s,
				className: "flex h-full flex-col",
				children: /* @__PURE__ */ X(Rw, {
					...i,
					dropPlaceholderIndex: w && i.items.length === 0 ? 0 : void 0,
					renderCard: (e, t) => {
						let n = i.renderCard(e, t);
						if (Mn(n)) {
							let e = t === b ? S : null, r = [];
							return E >= 0 && (t === E ? r.push("top", "bottom") : t === E - 1 ? r.push("bottom") : t === E + 1 && r.push("top")), On(n, {
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
function Gw(e) {
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
	Xa(({ phase: e }) => {
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
		return h.current && r.push(Fa({
			element: h.current,
			getData: () => ({
				type: "board-scroll-edge",
				edge: "left"
			}),
			onDragEnter: () => t(-400),
			onDrag: () => t(-400),
			onDragLeave: () => n(),
			onDrop: () => n()
		})), g.current && r.push(Fa({
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
		className: I("relative w-full px-6", !c && "h-full", i),
		children: [
			/* @__PURE__ */ X(Ct, {
				className: I("relative w-full", !c && "h-full [&>div>div]:h-full"),
				viewportRef: _,
				children: /* @__PURE__ */ X("div", {
					className: I("relative mb-2 flex gap-2", c ? "items-stretch" : "h-full items-start"),
					children: l.map((e, i) => {
						let a = t.find((t) => t.id === e.id), c = a?.loading ?? e.loading, l = a?.hasMore ?? e.hasMore, u = a?.loadingMore ?? e.loadingMore, d = a?.fetchMore ?? e.fetchMore, f = e.total ?? a?.total ?? e.items.length;
						return /* @__PURE__ */ X("div", {
							className: "relative shrink-0",
							"data-testid": `lane-${e.id ?? String(i)}`,
							children: /* @__PURE__ */ X(Ww, {
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
				className: I("pointer-events-none absolute left-0 top-0 z-[9999] h-full w-12 select-none", p ? "pointer-events-auto" : "opacity-0"),
				"aria-hidden": !0
			}),
			/* @__PURE__ */ X("div", {
				ref: g,
				className: I("pointer-events-none absolute right-0 top-0 z-[9999] h-full w-12 select-none", p ? "pointer-events-auto" : "opacity-0"),
				"aria-hidden": !0
			})
		]
	});
}
//#endregion
//#region src/patterns/OneDataCollection/visualizations/collection/Kanban/KanbanBoard.tsx
var Kw = ({ lanes: e, renderCard: t, getKey: n, onCreate: r, onMove: i, idProvider: a, allowReorder: o, loading: s, heightMode: c }) => {
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
	return i ? /* @__PURE__ */ X(qa, {
		driver: Wa(l),
		children: /* @__PURE__ */ X(Gw, { ...f })
	}) : /* @__PURE__ */ X(Gw, { ...f });
}, qw = (e) => !!(e && e.type === "infinite-scroll"), Jw = ({ lanes: e, title: t, description: n, avatar: r, metadata: i, onMove: o, onCreate: s, source: c, onSelectItems: l, onLoadError: u, onLoadData: d, getLanesForGroup: f, selectableGroups: p = !0 }) => {
	let { lanesProvider: m, lanesHooks: g } = vw(c, { onError: (e) => u(e) }), _ = c.idProvider, v = h(), y = c.currentSortings === null, { totalItemsAggregated: b, isInitialLoadingAggregated: x } = K(() => {
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
	let { lanesSelectProvider: T, lanesUseSelectable: E } = xw(K(() => e.map((e) => ({
		id: e.id,
		data: g[e.id]?.data || {
			type: "flat",
			records: [],
			groups: []
		},
		paginationInfo: g[e.id]?.paginationInfo || null
	})), [e, g]), c, (e, t) => {
		l?.(e, t);
	}), D = W((e, t) => {
		if (_) return String(_(e, t));
		let n = e?.id;
		return String(n ?? t);
	}, [_]), O = W((e, a, s, l) => {
		let u = String(_ ? _(e, a) : e?.id ?? a), d = c.selectable ? c.selectable(e) : e.id, f = E && l ? E.get(l) : void 0, p = (typeof d == "string" || typeof d == "number") && f && f?.selectedItems.has(d), m = c.itemUrl ? c.itemUrl(e) : void 0, h = c.itemOnClick ? c.itemOnClick(e) : void 0;
		return /* @__PURE__ */ X(Fw, {
			drag: {
				id: u,
				type: "list-card",
				data: {
					...e,
					laneId: l
				}
			},
			id: String(e.id),
			index: a,
			total: s,
			laneId: l,
			showIndicator: y,
			title: t ? t(e) : String(a),
			description: n ? n(e) : void 0,
			avatar: r ? r(e) : void 0,
			draggable: o !== void 0,
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
		E,
		y,
		t,
		n,
		r,
		o,
		i
	]), k = K(() => e.map((e) => {
		let t = g[e.id], n = t?.paginationInfo?.total, r = qw(t?.paginationInfo) && t?.paginationInfo?.hasMore;
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
	}), [e, g]), A = !!c.currentGrouping, j = a(), M = c.currentGrouping?.order ?? "asc", N = c.currentGrouping?.field, P = c.dataAdapter?.paginationType, F = K(() => {
		let e = c.currentGrouping?.field;
		if (e != null) return c.grouping?.groupBy?.[e];
	}, [c.currentGrouping?.field, c.grouping]), L = K(() => new Set(e.map((e) => e.id)), [e]), R = K(() => {
		if (!A) return [];
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = g[n.id]?.data;
			if (e?.type === "grouped") for (let n of e.groups) t.add(n.key);
		}
		return Array.from(t).sort((e, t) => {
			let n = e.localeCompare(t, void 0, { numeric: !0 });
			return M === "desc" ? -n : n;
		});
	}, [
		A,
		e,
		g,
		M
	]), z = K(() => A ? R.map((t) => {
		let n = (f ? f(t) : e).filter((e) => L.has(e.id)).map((e) => {
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
			label: F ? F.label(t, c.currentFilters) : t,
			itemCount: F?.itemCount ? F.itemCount(t, c.currentFilters) : n.reduce((e, t) => e + t.items.length, 0),
			lanes: n
		};
	}) : [], [
		A,
		R,
		e,
		g,
		f,
		F,
		L,
		c.currentFilters
	]), B = K(() => {
		if (!A || !f) return [];
		let e = /* @__PURE__ */ new Set();
		for (let t of R) for (let n of f(t)) L.has(n.id) || e.add(n.id);
		return Array.from(e);
	}, [
		A,
		f,
		R,
		L
	]);
	G(() => {
		!j || !A || (N != null && !F && console.error(`[OneDataCollection/Kanban] currentGrouping.field "${String(N)}" is not a key of grouping.groupBy — the board will render without groups.`), (P === "infinite-scroll" || P === "pages") && console.warn("[OneDataCollection/Kanban] grouping with a paginated source only shows each group's first page; counters use the authoritative itemCount but cards may be incomplete. Use a non-paginated source for grouped Kanban."), B.length > 0 && console.warn(`[OneDataCollection/Kanban] getLanesForGroup returned lane id(s) not present in source.lanes: ${B.join(", ")}. They are ignored (they would never load).`));
	}, [
		j,
		A,
		N,
		P,
		F,
		B
	]);
	let ee = c.grouping?.collapsible, te = c.grouping?.defaultOpenGroups, { openGroups: V, setGroupOpen: H } = Ie(z.map((e) => ({
		key: e.key,
		label: e.label,
		itemCount: e.itemCount,
		records: []
	})), te);
	return /* @__PURE__ */ Z(Y, { children: [
		m,
		T,
		A ? /* @__PURE__ */ X("div", {
			className: "flex max-h-full min-h-0 flex-1 flex-col gap-6 overflow-auto",
			"aria-busy": S,
			"aria-live": S ? "polite" : void 0,
			children: z.length === 0 ? /* @__PURE__ */ X(Kw, {
				lanes: k,
				renderCard: O,
				getKey: D,
				onCreate: s,
				onMove: o,
				idProvider: _,
				allowReorder: !1,
				loading: S
			}) : z.map((e) => {
				let t = p && c.selectable !== void 0, n = 0, r = 0;
				for (let t of e.lanes) {
					if (t.id === void 0) continue;
					let i = E.get(t.id)?.groupAllSelectedStatus[e.key];
					n += i?.selectedCount ?? 0, r += i?.unselectedCount ?? 0;
				}
				let i = n === 0 ? !1 : r === 0 || "indeterminate";
				return /* @__PURE__ */ Z("div", {
					className: "flex flex-col gap-2",
					"data-testid": `kanban-group-${e.key}`,
					children: [/* @__PURE__ */ X(He, {
						className: I("rounded-md py-3 pl-6 pr-3.5", (ee || t) && "cursor-pointer select-none transition-colors hover:bg-f1-background-hover"),
						showOpenChange: ee,
						label: e.label,
						itemCount: e.itemCount,
						selectable: t,
						select: i,
						onSelectChange: (t) => e.lanes.forEach((n) => {
							n.id !== void 0 && E.get(n.id)?.handleSelectGroupChange(e.key, t);
						}),
						open: V[e.key],
						onOpenChange: (t) => H(e.key, t)
					}), /* @__PURE__ */ X(w, { children: (!ee || V[e.key]) && /* @__PURE__ */ X(C.div, {
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
						children: /* @__PURE__ */ X(Kw, {
							lanes: e.lanes,
							heightMode: "content",
							renderCard: O,
							getKey: D,
							onCreate: s,
							onMove: o,
							idProvider: _,
							allowReorder: !1,
							loading: S
						})
					}) })]
				}, `kanban-group-${e.key}`);
			})
		}) : /* @__PURE__ */ X(Kw, {
			lanes: k,
			renderCard: O,
			getKey: D,
			onCreate: s,
			onMove: o,
			idProvider: _,
			allowReorder: y,
			loading: S
		})
	] });
}, Yw = ({ title: e, avatar: t, description: n }) => /* @__PURE__ */ Z("article", {
	className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2",
	children: [t && /* @__PURE__ */ X(Tt, {
		avatar: t,
		size: "md"
	}), /* @__PURE__ */ Z("div", {
		className: "flex flex-1 flex-col gap-0.5",
		children: [/* @__PURE__ */ X("header", { children: /* @__PURE__ */ X("h3", { children: /* @__PURE__ */ X(o, {
			className: "text-base font-medium text-f1-foreground",
			children: e
		}) }) }), /* @__PURE__ */ X("aside", { children: n && n.length > 0 && /* @__PURE__ */ X("div", {
			className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1",
			children: n.map((e, t) => /* @__PURE__ */ Z("div", {
				className: "flex min-w-0 gap-1",
				children: [/* @__PURE__ */ X(o, { children: e }), t < n.length - 1 && /* @__PURE__ */ X("span", {
					className: "hidden md:inline",
					children: " · "
				})]
			}, t))
		}) })]
	})]
}), Xw = ({ source: e, item: t, selectedItems: n, handleSelectItemChange: r, fields: i, itemDefinition: a }) => {
	let o = y(), { actions: s } = o, c = (e, t) => Xo(e, t, "list", o), l = e.itemUrl ? e.itemUrl(t) : void 0, u = e.itemOnClick ? e.itemOnClick(t) : void 0, d = !!l || !!u, f = e.selectable ? e.selectable(t) : void 0, p = a(t), { hasMobileItemActions: m, primaryItemActions: h, dropdownItemActions: g, mobileDropdownItemActions: _, handleDropDownOpenChange: v, dropDownOpen: b } = Il({
		source: e,
		item: t
	});
	return /* @__PURE__ */ Z("div", {
		className: I("relative flex min-h-[64px] w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:p-2 md:pl-3 md:pr-4", d && "cursor-pointer", "group after:absolute after:inset-y-0 after:-right-px after:z-10 after:hidden after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:via-f1-background after:via-75% after:to-f1-background after:transition-all after:content-[''] hover:after:via-[#F5F6F8] hover:after:to-[#F5F6F8] dark:hover:after:via-[#192231] dark:hover:after:to-[#192231] md:after:block hover:md:bg-f1-background-hover"),
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
						children: /* @__PURE__ */ X(Dt, {
							checked: n.has(f),
							onCheckedChange: (e) => r(t, e),
							title: `Select ${e.selectable(t)}`,
							hideLabel: !0
						})
					}),
					l && /* @__PURE__ */ X(on, {
						href: l,
						className: "pointer-events-auto absolute inset-0 block",
						tabIndex: 0,
						onClick: u,
						children: /* @__PURE__ */ X("span", {
							className: "sr-only",
							children: s.view
						})
					}),
					/* @__PURE__ */ X(Yw, {
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
			e.itemActions && /* @__PURE__ */ Z(Y, { children: [/* @__PURE__ */ X(Pl, {
				dropDownOpen: b,
				className: "pointer-events-auto hidden md:flex",
				children: /* @__PURE__ */ X(Ll, {
					primaryItemActions: h,
					dropdownItemActions: g,
					handleDropDownOpenChange: v
				})
			}), m && /* @__PURE__ */ X(Nl, {
				className: "absolute -right-px bottom-0 top-0 z-20 items-center justify-end gap-2 py-2 pl-20 pr-3 md:hidden",
				items: _,
				onOpenChange: v
			})] }),
			e.selectable && f !== void 0 && /* @__PURE__ */ X("div", {
				className: I("pointer-events-auto absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", m && "right-12"),
				children: /* @__PURE__ */ X(Dt, {
					checked: n.has(f),
					onCheckedChange: (e) => r(t, e),
					title: `Select ${e.selectable(t)}`,
					hideLabel: !0
				})
			})
		]
	});
}, Zw = ({ source: e, items: t, selectedItems: n, handleSelectItemChange: r, fields: i, itemDefinition: a, isLoadingMore: o }) => /* @__PURE__ */ X("div", {
	className: I("flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary", o && "rounded-b-none"),
	children: t.map((t, o) => /* @__PURE__ */ X(Xw, {
		source: e,
		item: t,
		selectedItems: n,
		handleSelectItemChange: r,
		fields: i,
		itemDefinition: a
	}, `row-${o}`))
}), Qw = ({ source: e, fields: t, count: n = 5, isInitialLoading: r, className: i }) => /* @__PURE__ */ X("div", {
	className: I("relative flex h-full flex-col overflow-hidden rounded-b-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary", r ? "mx-4 mt-2 rounded-t-xl" : "border-t-0", i),
	children: Array.from({ length: n }).map((n, r) => /* @__PURE__ */ Z("div", {
		"data-testid": "skeleton-item",
		className: "relative flex w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:pl-3 md:pr-4",
		children: [
			/* @__PURE__ */ Z("div", {
				className: "flex flex-1 flex-row items-center gap-2",
				children: [e.selectable && /* @__PURE__ */ X("div", {
					className: "z-10 hidden items-center justify-end md:flex",
					children: /* @__PURE__ */ X(Me, { className: "h-4 w-4" })
				}), /* @__PURE__ */ Z("article", {
					className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2",
					children: [/* @__PURE__ */ X(Me, { className: "h-8 w-8 rounded-full" }), /* @__PURE__ */ Z("div", {
						className: "flex flex-1 flex-col gap-1",
						children: [/* @__PURE__ */ X("header", { children: /* @__PURE__ */ X(Me, { className: "h-5 w-32" }) }), /* @__PURE__ */ X("aside", { children: /* @__PURE__ */ Z("div", {
							className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-2",
							children: [/* @__PURE__ */ X(Me, { className: "h-4 w-20" }), /* @__PURE__ */ X(Me, { className: "h-4 w-24" })]
						}) })]
					})]
				})]
			}),
			/* @__PURE__ */ X("div", {
				className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end",
				children: t.map((e, t) => /* @__PURE__ */ X("div", { children: /* @__PURE__ */ X("div", {
					className: "flex items-center justify-center px-0 py-1 md:p-3",
					children: /* @__PURE__ */ X(Me, { className: "h-4 w-20" })
				}) }, `skeleton-field-${t}`))
			}),
			e.itemActions && /* @__PURE__ */ X("div", {
				className: "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
				children: /* @__PURE__ */ X(Me, { className: "h-6 w-6" })
			}),
			e.selectable && /* @__PURE__ */ X("div", {
				className: I("absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", e.itemActions && "right-12"),
				children: /* @__PURE__ */ X(Me, { className: "h-4 w-4" })
			})
		]
	}, `skeleton-item-${r}`))
}), $w = ({ fields: e, itemDefinition: t, source: n, onSelectItems: r, onLoadData: i, onLoadError: a, tmpFullWidth: o }) => {
	let { data: s, paginationInfo: c, setPage: l, isInitialLoading: u, isLoadingMore: d, loadMore: f } = dl(n, { onError: (e) => {
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
	let { isLoading: p } = n, { loadingIndicatorRef: m } = El(c, p, d, f), { selectedItems: h, groupAllSelectedStatus: g, handleSelectItemChange: _, handleSelectGroupChange: v } = Ue({
		data: s,
		paginationInfo: c,
		source: n,
		onSelectItems: r,
		selectionMode: "multi",
		selectedState: n.defaultSelectedItems
	}), y = n.grouping?.collapsible, b = n.grouping?.defaultOpenGroups, { openGroups: x, setGroupOpen: S } = Ie(s?.type === "grouped" ? s.groups : [], b);
	if (Cs({
		value: u,
		delay: 100
	})) return /* @__PURE__ */ X(Qw, {
		source: n,
		fields: e,
		count: 30,
		isInitialLoading: !0
	});
	n.sortings || e.forEach((e) => {
		e.sorting && console.warn("Sorting is defined on a property but no sortings are provided in the data source");
	});
	let T = u || p && n.dataAdapter.paginationType === "pages";
	return /* @__PURE__ */ Z("div", {
		className: I("flex max-h-full min-h-0 flex-1 flex-col gap-4 py-2", !o && "px-page", o && "px-0"),
		children: [/* @__PURE__ */ X("div", {
			className: I("flex min-h-0 flex-1 flex-col gap-2", T && "select-none opacity-50 transition-opacity"),
			"aria-live": T ? "polite" : void 0,
			"aria-busy": T ? "true" : void 0,
			children: /* @__PURE__ */ Z("div", {
				className: "min-h-0 flex-1 overflow-auto pb-3",
				children: [
					s.type === "grouped" && s.groups.map((r, i) => {
						let a = r.itemCount;
						return /* @__PURE__ */ Z("div", {
							className: "flex flex-col gap-0 pt-2 first:pt-0",
							children: [/* @__PURE__ */ X(He, {
								className: "cursor-pointer select-none rounded-md px-3.5 py-3 transition-colors hover:bg-f1-background-hover",
								selectable: !!n.selectable,
								select: g[r.key]?.checked ? !0 : g[r.key]?.indeterminate ? "indeterminate" : !1,
								onSelectChange: (e) => v(r, e),
								showOpenChange: y,
								label: r.label,
								itemCount: a,
								open: x[r.key],
								onOpenChange: (e) => S(r.key, e)
							}, `group-header-${r.key}`), /* @__PURE__ */ X(w, { children: (!y || x[r.key]) && /* @__PURE__ */ X(C.div, {
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
								children: /* @__PURE__ */ X(Zw, {
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
					s?.type === "flat" && /* @__PURE__ */ X(Zw, {
						source: n,
						items: s.records,
						selectedItems: h,
						handleSelectItemChange: _,
						fields: e,
						itemDefinition: t,
						isLoadingMore: d
					}),
					ze(c) && d && /* @__PURE__ */ X(Qw, {
						source: n,
						fields: e,
						count: 5
					}),
					ze(c) && c.hasMore && /* @__PURE__ */ X("div", {
						ref: m,
						className: "w-full",
						"aria-hidden": "true"
					})
				]
			})
		}), /* @__PURE__ */ X(xl, {
			paginationInfo: c,
			setPage: l
		})]
	});
}, eT = {
	table: {
		name: "Table",
		icon: ge,
		render: (e) => /* @__PURE__ */ X(zu, { ...e }),
		settings: {
			renderer: (e) => Iu({
				...e,
				visualizationKey: "table"
			}),
			resetHandler: (e) => e.setVisualizationSettings("table", {}),
			default: {}
		}
	},
	editableTable: {
		name: "Editable table",
		icon: st,
		render: (e) => /* @__PURE__ */ X(Bu, { ...e }),
		settings: {
			renderer: (e) => Iu({
				...e,
				visualizationKey: "editableTable"
			}),
			resetHandler: (e) => e.setVisualizationSettings("editableTable", {}),
			default: {}
		}
	},
	list: {
		name: "List",
		icon: _e,
		settings: { default: {} },
		render: (e) => /* @__PURE__ */ X($w, { ...e })
	},
	card: {
		name: "Card",
		icon: me,
		settings: { default: {} },
		render: (e) => /* @__PURE__ */ X(Tl, { ...e })
	},
	kanban: {
		name: "Kanban",
		icon: me,
		settings: { default: {} },
		render: (e) => /* @__PURE__ */ X(Jw, { ...e })
	},
	graph: {
		name: "Graph",
		icon: xe,
		settings: {
			default: {},
			renderer: (e) => mw(e),
			resetHandler: (e) => e.setVisualizationSettings("graph", {})
		},
		render: (e) => /* @__PURE__ */ X(fw, { ...e })
	}
}, tT = ({ visualization: e, source: t, onSelectItems: n, onLoadData: r, onLoadError: i, tmpFullWidth: a, searchSelectionNonce: o }) => {
	if (e.type === "custom") return e.component({
		source: t,
		onLoadData: r,
		onLoadError: i,
		onSelectItems: n
	});
	let s = eT[e.type];
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
}, nT = () => {
	let e = {};
	for (let [t, n] of Object.entries(eT)) n.settings.default && (e[t] = { ...n.settings.default });
	return { visualization: e };
}, rT = (e, t) => {
	if (!t || !(t in eT)) return !0;
	let n = t, r = e.visualization[n], i = eT[n]?.settings.default;
	return JSON.stringify(r) === JSON.stringify(i);
};
//#endregion
//#region src/patterns/OneDataCollection/internal/presetId.ts
function iT(e, t) {
	let n = e.trim().replace(/\s+/g, " ") || "preset", r = new Set(t);
	if (!r.has(n)) return n;
	let i = 2;
	for (; r.has(`${n} ${i}`);) i++;
	return `${n} ${i}`;
}
//#endregion
//#region src/patterns/OneDataCollection/internal/sharedPreset.ts
var aT = "dc_shared_view", oT = (e) => {
	let t = new TextEncoder().encode(e), n = "";
	for (let e of t) n += String.fromCharCode(e);
	return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}, sT = (e) => {
	let t = e.replace(/-/g, "+").replace(/_/g, "/"), n = atob(t), r = Uint8Array.from(n, (e) => e.charCodeAt(0));
	return new TextDecoder().decode(r);
}, cT = (e) => {
	let t = {
		label: e.label,
		description: e.description,
		filter: e.filter,
		sortings: e.sortings,
		grouping: e.grouping,
		visualization: e.visualization,
		settings: e.settings
	};
	return oT(JSON.stringify(t));
}, lT = (e) => {
	if (!e) return null;
	try {
		let t = JSON.parse(sT(e));
		return typeof t == "object" && t && typeof t.label == "string" ? t : null;
	} catch {
		return null;
	}
}, uT = (e) => {
	if (typeof window > "u") return null;
	let { origin: t, pathname: n } = window.location;
	return `${t}${n}?${aT}=${cT(e)}`;
}, dT = "__no-sorting__", fT = ({ currentSortings: e, sortings: t, onChange: n }) => {
	let r = y(), i = [{
		label: r.collections.sorting.noSorting,
		value: dT
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
				children: /* @__PURE__ */ X(lt, {
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
			}), a.field !== "__no-sorting__" && /* @__PURE__ */ X("div", { children: /* @__PURE__ */ X(Ne, {
				hideLabel: !0,
				label: r.collections.sorting.toggleDirection,
				variant: "outline",
				icon: a.order === "asc" ? oe : Se,
				onClick: () => o({
					field: a.field,
					order: a.order === "asc" ? "desc" : "asc"
				})
			}) })]
		})
	});
}, pT = (e) => {
	if (e === "custom") return null;
	let t = eT[e];
	if (!t) throw Error(`Visualization type ${e} not found`);
	return t;
}, mT = (e) => pT(e.type)?.settings.renderer ?? null, hT = (e) => {
	if (e.type === "custom") return !1;
	let t = mT(e);
	return t ? t(e.options) !== null : !1;
}, gT = ({ visualization: e }) => {
	if (e.type === "custom") return null;
	let t = mT(e);
	return t ? t(e.options) : null;
}, _T = ({ visualizations: e, currentVisualization: t, grouping: n, currentGrouping: r, onGroupingChange: i, sortings: a, currentSortings: o, defaultSortings: s, onSortingsChange: c }) => {
	let l = y(), u = n ? Object.keys(n.groupBy).length + +!!n.mandatory : 0, [d, f] = J(!1), p = (e) => {
		i(e);
	}, m = n && u > 0, h = e[t]?.sortings ?? a, g = h && Object.keys(h).length > 0, _ = K(() => e[t], [t, e?.[t]]), v = K(() => /* @__PURE__ */ X(gT, { visualization: _ }, "visualization-settings"), [_]), b = K(() => hT(_), [_]), x = K(() => {
		let n = e[t]?.type;
		if (!n) return "-";
		let r = l.collections.visualizations[n] ?? "-";
		return l.collections.visualizations.settings.replace("{{visualizationName}}", r);
	}, [t]), S = dc(), C = K(() => {
		if (JSON.stringify(o) !== JSON.stringify(s)) return !0;
		let n = e[t]?.type;
		return !rT(S.settings, n);
	}, [
		S.settings.visualization,
		e,
		t,
		o,
		s
	]);
	return /* @__PURE__ */ X("div", {
		className: "flex gap-2",
		children: /* @__PURE__ */ Z(Kt, {
			open: d,
			onOpenChange: f,
			children: [/* @__PURE__ */ X(Wt, {
				asChild: !0,
				onClick: () => f(!d),
				children: /* @__PURE__ */ X(je, {
					variant: "outline",
					label: "Settings",
					icon: se,
					onClick: () => {},
					hideLabel: !0,
					compact: !0,
					pressed: d,
					"aria-controls": d ? "settings" : void 0
				})
			}), /* @__PURE__ */ X(Gt, {
				className: "flex w-[280px] flex-col gap-0 rounded-md border border-solid border-f1-border-secondary p-0",
				align: "end",
				sideOffset: 8,
				children: [
					m && !n?.hideSelector && !(n.mandatory && Object.entries(n.groupBy).length < 2) && /* @__PURE__ */ X("div", {
						className: "p-3",
						children: /* @__PURE__ */ X(Le, {
							SelectComponent: Ze,
							grouping: n,
							currentGrouping: r,
							onGroupingChange: p
						})
					}, "grouping"),
					g && /* @__PURE__ */ X("div", {
						className: "p-3",
						children: /* @__PURE__ */ X(fT, {
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
						}), v]
					}, "visualization-settings"),
					C && /* @__PURE__ */ X("section", {
						className: "border-0 border-t border-solid border-t-f1-border p-3",
						children: /* @__PURE__ */ X(Ne, {
							size: "sm",
							variant: "ghost",
							icon: fn,
							label: l.collections.visualizations.reset,
							onClick: () => {
								Object.values(eT).forEach((e) => {
									e.settings.resetHandler?.(S);
								}), c(s);
							}
						})
					}, "reset")
				].filter(Boolean)
			})]
		})
	});
}, vT = 16;
function yT(e, t, n) {
	let [r, i] = J(!1), a = q(!1), o = q(0), s = W(() => {
		let r = e.current, s = t.current;
		if (!r || !s) return;
		a.current || (o.current = s.scrollWidth);
		let c = getComputedStyle(r), l = parseFloat(c.paddingLeft) + parseFloat(c.paddingRight), u = n?.current?.offsetWidth ?? 0, d = r.clientWidth - l - (u > 0 ? u + vT : 0), f = o.current > d;
		f !== a.current && (a.current = f, i(f));
	}, [
		e,
		t,
		n
	]);
	return P({
		ref: e,
		onResize: s
	}), P({
		ref: t,
		onResize: s
	}), r;
}
//#endregion
//#region src/patterns/OneDataCollection/Settings/components/useVisualizationMeta.ts
var bT = () => {
	let e = y();
	return (t) => t.type === "custom" ? {
		icon: t.icon,
		label: t.label
	} : {
		icon: eT[t.type].icon,
		label: t.label ?? e.collections.visualizations[t.type]
	};
}, xT = ({ visualizations: e, currentVisualization: t, onVisualizationChange: n, hideLabels: r }) => {
	let i = y(), a = bT();
	if (!e || e.length <= 1) return null;
	let o = e.map((e, t) => {
		let { icon: n, label: r } = a(e);
		return {
			value: String(t),
			label: r,
			icon: n
		};
	});
	return /* @__PURE__ */ X(ti, {
		items: o,
		value: String(t),
		onChange: (e) => n(Number(e)),
		hideLabels: r,
		ariaLabel: i.collections.visualizations.viewSelectorLabel
	});
}, ST = 1500, CT = 2e3, wT = ({ source: e, visualizations: t, onSelectItems: n, onBulkAction: r, autoManageBulkActionStatus: i = !1, bulkActionStatus: a, onStateChange: o, emptyStates: s, fullHeight: c, storage: l, id: u, disableUrlParams: d, tmpFullWidth: f, csvExport: p, savingViewsDisabled: m, initialVisualization: h = 0 }) => {
	let { filters: g, currentFilters: _, setCurrentFilters: v, presets: b, presetsLoading: x, currentNavigationFilters: S, navigationFilters: w, setCurrentNavigationFilters: T, search: E, currentSearch: D, setCurrentSearch: O, isLoading: k, primaryActions: A, primaryActionsLabel: j, secondaryActions: M, upsellAction: N, totalItemSummary: P, currentGrouping: F, setCurrentGrouping: L, grouping: R, currentSortings: z, setCurrentSortings: B, sortings: te } = e, [V, H] = J(h), [U, ne] = J(void 0), [re, ie] = J([]), [ae, oe] = J(null), [se] = J(() => typeof window > "u" ? null : lT(new URLSearchParams(window.location.search).get(aT))), ce = qs(e.searchPreview, e.debouncedCurrentSearch), { effectiveFilters: le, effectivePresets: ue, currentFilters: de, setCurrentFilters: fe, allVisualizationFilters: pe, setAllVisualizationFilters: me, hasPerVisualizationFilters: he } = ll({
		sourceFilters: g,
		sourcePresets: b,
		sourceCurrentFilters: _,
		sourceSetCurrentFilters: v,
		visualizations: t,
		currentVisualization: V,
		storageKey: u
	}), ge = q(null), [_e, ve] = J(!1), ye = ec(e.dataAdapter, c), be = "perPage" in e.dataAdapter && e.dataAdapter.perPage === "auto" && e.dataAdapter.paginationType === "pages" && !c, xe = sc(ge, ye, {
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
	]), we = q(z), Te = q(F), Ee = q(de), { emitSortingChange: De } = nt({
		defaultSorting: we.current,
		currentVisualization: he ? V : void 0
	});
	G(() => {
		De(z);
	}, [De, z]);
	let Oe = K(() => ws(A), [A]), ke = K(() => ks(Os(M)), [M]), Ae = K(() => As(N), [N]), je = p && typeof p == "object" ? p.filename : u ? `${u}_export` : void 0, Me = Dc({
		source: Ce,
		currentVisualization: t[V],
		filename: je,
		enabled: !!p
	}), Ne = K(() => Math.min(M && "expanded" in M && M.expanded || 0, 2), [M]), Pe = K(() => ke[0]?.items.slice(0, Ne) || [], [ke, Ne]), Fe = K(() => {
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
	]), Ie = Oe?.length > 0 || ke?.length > 0 || !!Ae || !!p, [Le, Re] = J(void 0), ze = ee(), [Ve, He] = J(void 0), Ue = W((e) => {
		if (!e) return [];
		let t = [], n = [];
		for (let r of e) "type" in r && r.type === "separator" ? (t.push({ items: n }), n = []) : n.push(r);
		return n.length > 0 && t.push({ items: n }), t;
	}, []), We = K(() => {
		if (Ve) return "warningMessage" in Ve ? { warningMessage: Ve.warningMessage } : {
			primary: Ue(Ve.primary ?? []),
			secondary: (Ve?.secondary ?? []).filter((e) => !("type" in e && e.type === "separator"))
		};
	}, [Ve, Ue]), [Ge, Ke] = J(!1), [qe, Je] = J(0), [Ye, Xe] = J(!1), [Ze, $e] = J("idle"), [et, tt] = J(!1), it = q(null), at = q(null), ot = q(null), st = q(null), ct = q(null), lt = yT(ot, st, ct), ut = (e) => a !== void 0 && a !== "idle" && !(a === "success" && e), dt = ut(et) ? a : Ze, ft = ut(et), pt = q(!1);
	pt.current = ft;
	let mt = a !== void 0, ht = W((e, t = !0) => {
		at.current && clearTimeout(at.current), at.current = setTimeout(() => {
			t && Ke(!1), e(), at.current = null;
		}, ST);
	}, []);
	G(() => () => {
		at.current && clearTimeout(at.current);
	}, []);
	let gt = q(void 0);
	G(() => {
		let e = gt.current;
		gt.current = a, a === "success" && e !== "success" ? (tt(!1), ht(() => {
			Le?.(), tt(!0);
		})) : e === "success" && a !== "success" && (at.current &&= (clearTimeout(at.current), null), tt(!1));
	}, [
		a,
		Le,
		ht
	]);
	let _t = y(), vt = K(() => P === !0 ? (e) => e === void 0 ? null : `${e} ${_t.collections.itemsCount}` : P || void 0, [P, _t]), yt = (t, a, o) => {
		n?.(t, a, o), Ke(!!t.allSelected || t.itemsStatus.some((e) => e.checked)), $e((e) => e === "error" ? "idle" : e), Je(t.selectedCount), Re(() => a), Xe(t.allSelected === !0);
		let s = e.bulkActions ? e.bulkActions(t) : void 0, c = (e) => {
			if ("type" in e && e.type === "separator") return { type: "separator" };
			let n = e;
			return {
				...n,
				onClick: () => {
					let e = r?.(n.id, t, a);
					if (!(i && e !== void 0 && typeof e?.then == "function")) {
						!n.keepSelection && !mt && a();
						return;
					}
					pt.current || ($e("loading"), e.then(() => {
						$e("success"), ht(() => {
							n.keepSelection || a(), $e("idle");
						}, !n.keepSelection);
					}, () => {
						$e("error"), it.current?.wiggle({ errorHighlight: !0 });
					}));
				}
			};
		};
		s && ("primary" in s ? He({
			primary: (s?.primary || []).map(c),
			secondary: (s?.secondary || []).map(c)
		}) : "warningMessage" in s && He({ warningMessage: s.warningMessage }));
	}, [bt, xt] = J(void 0), [St, Ct] = J(!0), wt = K(() => [E?.enabled, t.length > 1].some(Boolean), [E, t]), { emptyState: Tt, setEmptyStateType: Et } = cc(s, {
		retry: () => {
			Et(!1), fe({ ...de });
		},
		clearFilters: () => {
			Et(!1), fe({}), O(void 0);
		}
	}), Dt = (e, t, n) => e === 0 ? le && Qe(le, t, _t).length > 0 || n ? "no-results" : "no-data" : !1, Ot = ({ totalItems: e, filters: t, isInitialLoading: n, search: r }) => {
		n || (Ct(n), xt(e), ve(!0), Et(Dt(e, t, r)));
	}, kt = (e) => {
		Et("error", e.cause instanceof Error ? e.cause.message : e.message);
	}, At = Cs({
		value: !!x,
		delay: 100
	});
	G(() => {
		Et(!1);
	}, [
		de,
		D,
		S,
		e.dataAdapter
	]);
	let jt = K(() => vt !== void 0, [vt]), Mt = vt === void 0 || bt === void 0 ? null : vt(bt), { settings: Nt, setSettings: Pt } = dc(), Ft = K(() => [...(ue ?? []).map((e, t) => ({
		...e,
		id: e.id ?? `${e.label}-${t}`
	})), ...re], [ue, re]), It = K(() => new Set(re.map((e) => e.id)), [re]), Lt = K(() => ({
		filters: de,
		sortings: z,
		grouping: F,
		visualization: V,
		settings: Nt
	}), [
		de,
		z,
		F,
		V,
		Nt
	]), Rt = W((e) => ({
		filters: e.filter ?? {},
		sortings: e.sortings === void 0 ? we.current : e.sortings,
		grouping: e.grouping === void 0 ? Te.current : e.grouping,
		visualization: e.visualization ?? 0,
		settings: e.settings === void 0 ? nT() : e.settings
	}), []), zt = q(null), Bt = q(!1), Vt = q(null), Ht = W(() => ({
		filters: Ee.current,
		sortings: we.current,
		grouping: Te.current,
		visualization: 0,
		settings: nT()
	}), []), Ut = W((e) => {
		B(e.sortings), L(e.grouping), Pt(e.settings), e.visualization === V ? fe(e.filters) : (Vt.current = {
			filters: e.filters,
			visualization: e.visualization
		}, H(e.visualization));
	}, [
		V,
		fe,
		B,
		L,
		Pt
	]);
	Ln(() => {
		let e = Vt.current;
		e && e.visualization === V && (Vt.current = null, fe(e.filters));
	}, [V, fe]);
	let Wt = W((e) => {
		if (Bt.current = !1, e === U) {
			Ut(zt.current ?? Ht()), zt.current = null, ne(void 0);
			return;
		}
		let t = Ft.find((t) => t.id === e);
		t && (U || (zt.current = Lt), Ut(Rt(t)), ne(e));
	}, [
		Ft,
		U,
		Lt,
		Ut,
		Ht,
		Rt
	]), Gt = q(null);
	G(() => {
		let e = U ? Ft.find((e) => e.id === U) : void 0;
		if (!e) {
			Gt.current = null;
			return;
		}
		Gt.current?.id !== e.id && (Gt.current = {
			id: e.id,
			snapshot: Rt(e),
			settled: !1
		});
		let t = Gt.current;
		if (t && !Vt.current) {
			if (!t.settled) {
				(0, $r.default)(Lt, t.snapshot) && (t.settled = !0);
				return;
			}
			(0, $r.default)(Lt, t.snapshot) || (Gt.current = null, zt.current = null, Bt.current = !0, ne(void 0));
		}
	}, [
		U,
		Ft,
		Lt,
		Rt
	]);
	let [Kt, qt] = J(null), Jt = K(() => m || U && Ft.some((e) => e.id === U) || Kt === null ? "none" : !((e, t) => (0, $r.default)({
		...e,
		visualization: void 0
	}, {
		...t,
		visualization: void 0
	}))(Lt, Kt) || Bt.current && !(0, $r.default)(Lt, Kt) ? "save" : "none", [
		m,
		U,
		Ft,
		Lt,
		Kt
	]), Yt = W((e) => {
		let t = ae?.mode === "create" ? ae.shared : void 0, n = t ? {
			filter: t.filter,
			sortings: t.sortings,
			grouping: t.grouping,
			visualization: t.visualization,
			settings: t.settings
		} : {
			filter: de,
			sortings: z,
			grouping: F,
			visualization: V,
			settings: Nt
		}, r = {
			id: iT(e.title, Ft.map((e) => e.id ?? e.label)),
			label: e.title,
			description: e.description,
			...n
		};
		ie((e) => [...e, r]), ne(r.id), Bt.current = !1, oe(null);
	}, [
		ae,
		de,
		z,
		F,
		V,
		Nt,
		Ft
	]), Zt = W((e) => {
		let t = ae?.mode === "update" ? ae.presetId : void 0;
		if (!t) return;
		let n = iT(e.title, Ft.filter((e) => e.id !== t).map((e) => e.id ?? e.label));
		ie((r) => r.map((r) => r.id === t ? {
			...r,
			id: n,
			label: e.title,
			description: e.description
		} : r)), ne((e) => e === t ? n : e), oe(null);
	}, [ae, Ft]), Qt = W(() => {
		let e = ae?.mode === "update" ? ae.presetId : void 0;
		e && (ie((t) => t.filter((t) => t.id !== e)), ne((t) => t === e ? void 0 : t), oe(null));
	}, [ae]), $t = W(() => {
		oe({ mode: "create" });
	}, []), en = K(() => Array.from(It).filter((e) => !!e), [It]), tn = W((e) => oe({
		mode: "update",
		presetId: e
	}), []), nn = W((e) => {
		let t = re.find((t) => t.id === e);
		if (!t) return;
		let n = uT({
			label: t.label,
			description: t.description,
			filter: t.filter,
			sortings: t.sortings,
			grouping: t.grouping,
			visualization: t.visualization,
			settings: t.settings
		}), r = typeof navigator < "u" ? navigator.clipboard : void 0;
		!n || !r || r.writeText(n).then(() => an(!0)).catch(() => {});
	}, [re]), [rn, an] = J(!1);
	G(() => {
		if (!rn) return;
		let e = setTimeout(() => an(!1), CT);
		return () => clearTimeout(e);
	}, [rn]), G(() => {
		if (se && (oe({
			mode: "create",
			shared: se
		}), typeof window < "u")) {
			let e = new URLSearchParams(window.location.search);
			e.delete(aT);
			let t = e.toString();
			window.history.replaceState(null, "", t ? `${window.location.pathname}?${t}` : window.location.pathname);
		}
	}, []);
	let on = K(() => ae?.mode === "update" ? re.find((e) => e.id === ae.presetId) : void 0, [ae, re]), { storageReady: sn } = $s(u, typeof l == "object" ? l?.features ?? ["*"] : ["*"], {
		settings: {
			value: Nt,
			setValue: Pt
		},
		sortings: {
			value: z,
			setValue: B
		},
		grouping: {
			value: F,
			setValue: L
		},
		navigationFilters: {
			value: S,
			setValue: T
		},
		visualization: {
			value: V,
			setValue: H
		},
		search: {
			value: D,
			setValue: O
		},
		filters: {
			value: _,
			setValue: v
		},
		customPresets: {
			value: re,
			setValue: ie
		},
		...he ? { visualizationFilters: {
			value: pe,
			setValue: me
		} } : {}
	}, l === !1);
	G(() => {
		sn && Kt === null && qt(Lt);
	}, [
		sn,
		Kt,
		Lt
	]), rl({
		disabled: !!d,
		storageReady: sn,
		filtersDefinition: g,
		filters: de,
		search: D,
		sortings: z,
		defaultSortings: we.current,
		visualization: V,
		visualizationKeys: t.map((e) => e.type),
		selectedPresetId: U,
		setFilters: fe,
		setSearch: O,
		setSortings: B,
		setVisualization: H,
		setSelectedPresetId: ne
	});
	let cn = Cs({
		value: St && sn,
		delay: 100
	});
	Be(() => {
		o?.({
			filters: de,
			sortings: z,
			visualization: V,
			grouping: F,
			search: D,
			navigationFilters: S,
			settings: Nt,
			...he ? { visualizationFilters: pe } : {}
		});
	}, [
		de,
		D,
		S,
		z,
		V,
		F,
		Nt,
		pe
	]);
	let ln = K(() => {
		let e = R ? Object.keys(R.groupBy).length + +!!R.mandatory : 0, n = Object.values(t).find((e) => e.type === "table"), r = !!n && (!!n.options?.allowColumnHiding || !!n.options?.allowColumnReordering);
		return e > 0 && !R?.hideSelector || te && Object.keys(te).length > 0 || r;
	}, [
		t,
		R,
		te
	]), un = K(() => wt || Ie || ln || E && E.enabled, [
		wt,
		Ie,
		ln,
		E
	]), dn = K(() => jt ? le ? "top" : "bottom" : !1, [le, jt]), fn = K(() => w ? un ? "top" : "bottom" : !1, [w, un]), pn = K(() => dn === "top" || fn === "top", [dn, fn]), mn = K(() => le || un || fn === "bottom" || dn === "bottom", [
		le,
		un,
		fn,
		dn
	]);
	return /* @__PURE__ */ Z("div", {
		className: I("flex flex-col gap-4", ze === "standard" && "-mx-[23px]", c && "h-full flex-1"),
		style: { width: ze === "standard" && !f ? "calc(100% + 46px)" : "100%" },
		children: [
			pn && /* @__PURE__ */ Z("div", {
				className: "border-f1-border-primary px-page flex gap-4",
				children: [dn === "top" && /* @__PURE__ */ X(Js, {
					isReady: !cn,
					totalItemSummaryResult: Mt
				}), /* @__PURE__ */ X("div", {
					className: "flex flex-1 flex-shrink justify-end",
					children: fn === "top" && /* @__PURE__ */ X(Vs, {
						navigationFilters: w,
						currentNavigationFilters: S,
						onChangeNavigationFilters: T
					})
				})]
			}),
			mn && /* @__PURE__ */ Z("div", {
				ref: ot,
				className: I("flex flex-row gap-4 px-page", c && "max-h-full", f && "px-0"),
				children: [dn === "bottom" && /* @__PURE__ */ X("div", {
					ref: ct,
					className: "flex items-center",
					children: /* @__PURE__ */ X(Js, {
						isReady: !cn,
						totalItemSummaryResult: Mt
					})
				}), /* @__PURE__ */ X("div", {
					className: "flex-1",
					children: /* @__PURE__ */ X(rt, {
						filters: le,
						value: de,
						presets: Ft,
						presetsLoading: At,
						onChange: (e) => fe(e),
						resultCount: bt,
						selectedPresetId: U,
						onSelectPreset: Wt,
						editablePresetIds: en,
						onEditPreset: tn,
						presetActionState: Jt,
						onPresetAction: $t,
						children: /* @__PURE__ */ Z("div", {
							ref: st,
							className: "flex items-center gap-2",
							children: [
								k && /* @__PURE__ */ X(C.div, {
									className: "flex h-8 w-8 items-center justify-center",
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									children: /* @__PURE__ */ X(Xt, { size: "small" })
								}),
								E && /* @__PURE__ */ X(Gs, {
									onChange: O,
									value: D,
									results: ce.results,
									resultsLoading: ce.loading,
									onResultSelect: ce.onSelect,
									hasMore: ce.hasMore,
									loadingMore: ce.loadingMore,
									onLoadMore: ce.onLoadMore
								}),
								t && t.length > 1 && /* @__PURE__ */ X(xT, {
									visualizations: t,
									currentVisualization: V,
									onVisualizationChange: H,
									hideLabels: lt
								}),
								ln && /* @__PURE__ */ X(_T, {
									visualizations: t,
									currentVisualization: V,
									grouping: R,
									currentGrouping: F,
									onGroupingChange: L,
									sortings: te,
									currentSortings: z,
									defaultSortings: we.current,
									onSortingsChange: B
								}),
								Ie && /* @__PURE__ */ Z(Y, { children: [wt && /* @__PURE__ */ X("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }), /* @__PURE__ */ X(Ps, {
									primaryActions: Oe,
									primaryActionsLabel: j,
									secondaryActions: Pe,
									otherActions: Fe,
									upsellAction: Ae
								})] }),
								fn === "bottom" && /* @__PURE__ */ X(Vs, {
									navigationFilters: w,
									currentNavigationFilters: S,
									onChangeNavigationFilters: T
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ X("div", {
				ref: ge,
				className: I(Tt && "hidden", c && "h-full min-h-0 flex-1"),
				children: (!ye || xe !== void 0) && /* @__PURE__ */ X(tT, {
					visualization: t[V],
					source: Ce,
					onSelectItems: yt,
					onLoadData: Ot,
					onLoadError: kt,
					tmpFullWidth: f,
					searchSelectionNonce: ce.selectionNonce
				})
			}),
			Tt ? /* @__PURE__ */ X("div", {
				className: "flex flex-1 flex-col items-center justify-center",
				children: /* @__PURE__ */ X(Ss, {
					emoji: Tt.emoji,
					title: Tt.title,
					description: Tt.description,
					actions: Tt.actions
				})
			}) : /* @__PURE__ */ X(Y, { children: Ve && /* @__PURE__ */ X(Ns, {
				ref: it,
				isOpen: Ge || dt === "loading" || dt === "success",
				status: dt,
				selectedNumber: qe,
				primaryActions: We && "primary" in We ? We.primary : [],
				secondaryActions: We && "secondary" in We ? We.secondary : [],
				warningMessage: "warningMessage" in Ve ? Ve.warningMessage : void 0,
				onUnselect: () => Le?.(),
				allPagesSelection: !!e.allPagesSelection,
				isAllItemsSelected: Ye,
				totalItems: bt
			}) }),
			/* @__PURE__ */ X(Hs, {
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
				onSubmit: ae?.mode === "update" ? Zt : Yt,
				onDelete: ae?.mode === "update" ? Qt : void 0,
				onShare: ae?.mode === "update" ? () => nn(ae.presetId) : void 0,
				existingNames: Ft.filter((e) => ae?.mode !== "update" || e.id !== ae.presetId).map((e) => e.label)
			}),
			typeof document < "u" && Rn(/* @__PURE__ */ X("div", {
				style: {
					position: "relative",
					zIndex: 9999
				},
				children: /* @__PURE__ */ X(Qr, {
					isOpen: rn,
					variant: "light",
					status: "success",
					label: _t.collections.presets.copiedToClipboard
				})
			}), document.getElementById("content") ?? document.body)
		]
	});
}, TT = i((e) => /* @__PURE__ */ X(fc, { children: /* @__PURE__ */ X(wT, { ...e }) })), ET = (e, t = []) => {
	let n = y(), { navigationFilters: r, summaries: i, currentNavigationFilters: a } = e, o = ot({
		...e,
		dataAdapter: e.dataAdapter
	}, t), [s, c] = J(() => r ? Object.fromEntries(Object.entries(r).map(([e, t]) => {
		let r = Bs[t.type];
		return [e, r.valueConverter ? r.valueConverter(t.defaultValue, t, n) : t.defaultValue];
	})) : {});
	Be(() => {
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
export { rr as $, jo as A, Wa as B, Ls as C, ps as D, vs as E, ao as F, ii as G, Ua as H, Xa as I, ti as J, ri as K, Ja as L, ko as M, Oo as N, us as O, Eo as P, ir as Q, Ya as R, Bs as S, bs as T, Fa as U, Ha as V, oi as W, Kr as X, Qr as Y, ar as Z, bc as _, dl as a, ac as b, Pc as c, $c as d, Qn as et, el as f, mc as g, Sc as h, bl as i, zn as it, Ao as j, Po as k, Qc as l, Dc as m, TT as n, Gn as nt, kc as o, tl as p, ni as q, El as r, Un as rt, Oc as s, ET as t, Jn as tt, Kc as u, tc as v, Ss as w, Vs as x, nc as y, qa as z };
