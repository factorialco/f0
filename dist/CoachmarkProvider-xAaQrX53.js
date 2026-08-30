import { o as e, t } from "./rolldown-runtime-CEFd7nDs.js";
import { t as n } from "./clsx-rBDvwE6-.js";
import { t as r } from "./dist-HAF2K0vx.js";
import { t as i } from "./component-DIiKjQeI.js";
import { d as a, l as o, t as s, u as c } from "./OneEllipsis-DuhKMtYp.js";
import { L as l, S as u, Tt as d, _ as f, a as p, f as m, h, i as g, p as _, r as v, yt as y, z as b } from "./F0Button-BFtTqm8n.js";
import { n as x, t as S } from "./utils-CVzxZnoI.js";
import { A as C, C as w, D as T, E, S as ee, T as te, x as ne } from "./F0Dialog-Bh28_1sh.js";
import { G as re, J as ie, K as ae, W as D, q as oe, tt as se } from "./useDataCollectionSource-CLl2aHwI.js";
import { C as ce, h as le, t as ue, v as de } from "./F0TextInput-DFE9ZYg6.js";
import { At as fe, Et as pe, Mt as me, Nt as he, jt as ge, kt as _e } from "./F0AiFormRegistry-DtlE1Tj7.js";
import { P as ve, i as ye, r as be, t as xe } from "./tooltip-BPSwDQpD.js";
import { $ as Se, Dt as Ce, Tt as we, _n as Te, cn as Ee, dt as De, gn as Oe, ln as ke, nn as Ae, qt as je, rt as O, vt as Me, w as Ne, wt as Pe, yn as Fe, yt as Ie } from "./F0Select-D7w3Lovd.js";
import { $ as Le, A as Re, B as ze, Bt as Be, C as Ve, D as He, E as Ue, F as We, G as Ge, H as Ke, Ht as qe, I as Je, J as Ye, L as Xe, Lt as Ze, M as Qe, N as $e, O as et, P as tt, Q as nt, R as rt, S as it, T as at, U as ot, Ut as st, V as ct, Vt as lt, W as ut, Wt as dt, Z as ft, Zt as pt, _ as mt, _t as ht, at as gt, b as _t, ct as vt, d as yt, dt as bt, et as xt, f as St, ft as Ct, g as wt, h as Tt, ht as Et, it as Dt, j as Ot, k as kt, l as At, lt as jt, m as Mt, mt as Nt, nt as k, ot as Pt, p as Ft, pt as It, q as Lt, rt as Rt, st as zt, tt as A, u as Bt, ut as Vt, v as Ht, w as Ut, x as Wt, y as Gt, z as Kt } from "./F0CanvasPanel-Dn4gpL8t.js";
import { At as qt, D as Jt, Dt as Yt, Ot as Xt, St as Zt, T as Qt, bt as $t, jt as en, ot as tn, p as nn } from "./F0Checkbox-B2ZT94HT.js";
import { $ as rn, B as an, L as on, Q as sn, R as cn, X as ln, Y as un, Z as dn, et as fn, nt as pn, rt as mn, tt as hn, z as gn } from "./F0Card-SSGaEK9S.js";
import { i as _n, l as vn, n as yn, o as bn, r as xn, s as Sn, t as Cn } from "./popover-DDfM6CZG.js";
import { S as wn, _ as Tn, a as En, n as Dn, r as On, t as kn, x as An } from "./progress-BJOpxq7D.js";
import { w as jn } from "./AiChatTranslationsProvider-CB3DRj6q.js";
import { n as Mn } from "./RichText-CW-0xoDy.js";
import { $ as Nn, A as Pn, C as Fn, D as In, E as Ln, F as Rn, G as zn, I as Bn, J as Vn, Jt as Hn, K as Un, Kt as Wn, L as Gn, M as Kn, N as qn, O as Jn, P as Yn, Q as Xn, R as Zn, S as Qn, T as $n, U as er, W as tr, X as nr, Y as rr, Z as ir, _ as ar, at as or, b as sr, ct as cr, dt as lr, et as ur, ft as dr, g as fr, h as pr, it as mr, j as hr, k as gr, lt as _r, m as vr, mt as yr, nt as br, ot as xr, pt as Sr, q as Cr, rt as wr, st as Tr, tt as Er, ut as Dr, v as Or, w as kr, x as Ar, y as jr, z as Mr } from "./F0Form-nVPfGIPP.js";
import { n as Nr } from "./skeleton-gsHEXIPQ.js";
import { i as Pr, r as Fr } from "./dist-V-dG5cV7.js";
import * as j from "react";
import M, { PureComponent as Ir, createContext as Lr, forwardRef as Rr, useCallback as N, useContext as zr, useEffect as P, useId as Br, useImperativeHandle as Vr, useLayoutEffect as Hr, useMemo as Ur, useRef as F, useState as I, useSyncExternalStore as Wr } from "react";
import { Fragment as Gr, jsx as L, jsxs as R } from "react/jsx-runtime";
import './CoachmarkProvider.css';//#region ../../node_modules/.pnpm/embla-carousel-autoplay@8.5.2_embla-carousel@8.5.2/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js
var Kr = {
	active: !0,
	breakpoints: {},
	delay: 4e3,
	jump: !1,
	playOnInit: !0,
	stopOnFocusIn: !0,
	stopOnInteraction: !0,
	stopOnMouseEnter: !1,
	stopOnLastSnap: !1,
	rootNode: null
};
function qr(e, t) {
	let n = e.scrollSnapList();
	return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function Jr(e, t) {
	let n = e.rootNode();
	return t && t(n) || n;
}
function Yr(e = {}) {
	let t, n, r, i, a = null, o = 0, s = !1, c = !1, l = !1, u = !1;
	function d(a, o) {
		n = a;
		let { mergeOptions: s, optionsAtMedia: c } = o;
		if (t = c(s(s(Kr, Yr.globalOptions), e)), n.scrollSnapList().length <= 1) return;
		u = t.jump, r = !1, i = qr(n, t.delay);
		let { eventStore: l, ownerDocument: d } = n.internalEngine(), f = !!n.internalEngine().options.watchDrag, p = Jr(n, t.rootNode);
		l.add(d, "visibilitychange", _), f && n.on("pointerDown", y), f && !t.stopOnInteraction && n.on("pointerUp", b), t.stopOnMouseEnter && l.add(p, "mouseenter", x), t.stopOnMouseEnter && !t.stopOnInteraction && l.add(p, "mouseleave", S), t.stopOnFocusIn && n.on("slideFocusStart", g), t.stopOnFocusIn && !t.stopOnInteraction && l.add(n.containerNode(), "focusout", h), t.playOnInit && h();
	}
	function f() {
		n.off("pointerDown", y).off("pointerUp", b).off("slideFocusStart", g), g(), r = !0, s = !1;
	}
	function p() {
		let { ownerWindow: e } = n.internalEngine();
		e.clearTimeout(o), o = e.setTimeout(ee, i[n.selectedScrollSnap()]), a = (/* @__PURE__ */ new Date()).getTime(), n.emit("autoplay:timerset");
	}
	function m() {
		let { ownerWindow: e } = n.internalEngine();
		e.clearTimeout(o), o = 0, a = null, n.emit("autoplay:timerstopped");
	}
	function h() {
		if (!r) {
			if (v()) {
				l = !0;
				return;
			}
			s || n.emit("autoplay:play"), p(), s = !0;
		}
	}
	function g() {
		r || (s && n.emit("autoplay:stop"), m(), s = !1);
	}
	function _() {
		if (v()) return l = s, g();
		l && h();
	}
	function v() {
		let { ownerDocument: e } = n.internalEngine();
		return e.visibilityState === "hidden";
	}
	function y() {
		c || g();
	}
	function b() {
		c || h();
	}
	function x() {
		c = !0, g();
	}
	function S() {
		c = !1, h();
	}
	function C(e) {
		e !== void 0 && (u = e), h();
	}
	function w() {
		s && g();
	}
	function T() {
		s && h();
	}
	function E() {
		return s;
	}
	function ee() {
		let { index: e } = n.internalEngine(), r = e.clone().add(1).get(), i = n.scrollSnapList().length - 1, a = t.stopOnLastSnap && r === i;
		if (n.canScrollNext() ? n.scrollNext(u) : n.scrollTo(0, u), n.emit("autoplay:select"), a) return g();
		h();
	}
	function te() {
		return a ? i[n.selectedScrollSnap()] - ((/* @__PURE__ */ new Date()).getTime() - a) : null;
	}
	return {
		name: "autoplay",
		options: e,
		init: d,
		destroy: f,
		play: C,
		stop: w,
		reset: T,
		isPlaying: E,
		timeUntilNext: te
	};
}
Yr.globalOptions = void 0;
//#endregion
//#region ../../node_modules/.pnpm/wheel-gestures@2.2.48/node_modules/wheel-gestures/dist/wheel-gestures.esm.js
function Xr() {
	return Xr = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Xr.apply(this, arguments);
}
var Zr = .996, Qr = function(e, t) {
	return t === void 0 && (t = Zr), e * t / (1 - t);
};
function $r(e) {
	return e[e.length - 1];
}
function ei(e) {
	return e.reduce(function(e, t) {
		return e + t;
	}) / e.length;
}
var ti = function(e, t, n) {
	return Math.min(Math.max(t, e), n);
};
function ni(e, t) {
	if (e.length !== t.length) throw Error("vectors must be same length");
	return e.map(function(e, n) {
		return e + t[n];
	});
}
function ri(e) {
	return Math.max.apply(Math, e.map(Math.abs));
}
function ii(e) {
	return Object.freeze(e), Object.values(e).forEach(function(e) {
		typeof e == "object" && e && !Object.isFrozen(e) && ii(e);
	}), e;
}
function ai() {
	var e = {};
	function t(t, r) {
		return e[t] = (e[t] || []).concat(r), function() {
			return n(t, r);
		};
	}
	function n(t, n) {
		e[t] = (e[t] || []).filter(function(e) {
			return e !== n;
		});
	}
	function r(t, n) {
		t in e && e[t].forEach(function(e) {
			return e(n);
		});
	}
	return ii({
		on: t,
		off: n,
		dispatch: r
	});
}
function oi(e) {
	var t = [], n = function(n) {
		return n.addEventListener("wheel", e, { passive: !1 }), t.push(n), function() {
			return r(n);
		};
	}, r = function(n) {
		n.removeEventListener("wheel", e), t = t.filter(function(e) {
			return e !== n;
		});
	};
	return ii({
		observe: n,
		unobserve: r,
		disconnect: function() {
			t.forEach(r);
		}
	});
}
var si = [
	1,
	18,
	typeof window < "u" && window.innerHeight || 800
];
function ci(e) {
	var t = e.deltaX * si[e.deltaMode], n = e.deltaY * si[e.deltaMode], r = (e.deltaZ || 0) * si[e.deltaMode];
	return {
		timeStamp: e.timeStamp,
		axisDelta: [
			t,
			n,
			r
		]
	};
}
var li = [
	-1,
	-1,
	-1
];
function ui(e, t) {
	if (!t) return e;
	var n = t === !0 ? li : t.map(function(e) {
		return e ? -1 : 1;
	});
	return Xr({}, e, { axisDelta: e.axisDelta.map(function(e, t) {
		return e * n[t];
	}) });
}
var di = 700, fi = function(e) {
	return Xr({}, e, { axisDelta: e.axisDelta.map(function(e) {
		return ti(e, -di, di);
	}) });
}, pi = process.env.NODE_ENV !== "production", mi = .6, hi = .96, gi = 2, _i = 5, vi = /*#__PURE__*/ ii({
	preventWheelAction: !0,
	reverseSign: [
		!0,
		!0,
		!1
	]
}), yi = 400;
function bi() {
	return {
		isStarted: !1,
		isStartPublished: !1,
		isMomentum: !1,
		startTime: 0,
		lastAbsDelta: Infinity,
		axisMovement: [
			0,
			0,
			0
		],
		axisVelocity: [
			0,
			0,
			0
		],
		accelerationFactors: [],
		scrollPoints: [],
		scrollPointsToMerge: [],
		willEndTimeout: yi
	};
}
function xi(e) {
	e === void 0 && (e = {});
	var t = ai(), n = t.on, r = t.off, i = t.dispatch, a = vi, o = bi(), s, c = !1, l, u = function(e) {
		Array.isArray(e) ? e.forEach(function(e) {
			return m(e);
		}) : m(e);
	}, d = function(e) {
		return e === void 0 && (e = {}), Object.values(e).some(function(e) {
			return e == null;
		}) ? (pi && console.error("updateOptions ignored! undefined & null options not allowed"), a) : a = ii(Xr({}, vi, a, e));
	}, f = function(e) {
		var t = Xr({
			event: s,
			isStart: !1,
			isEnding: !1,
			isMomentumCancel: !1,
			isMomentum: o.isMomentum,
			axisDelta: [
				0,
				0,
				0
			],
			axisVelocity: o.axisVelocity,
			axisMovement: o.axisMovement,
			get axisMovementProjection() {
				return ni(t.axisMovement, t.axisVelocity.map(function(e) {
					return Qr(e);
				}));
			}
		}, e);
		i("wheel", Xr({}, t, { previous: l })), l = t;
	}, p = function(e, t) {
		var n = a.preventWheelAction, r = t[0], i = t[1], o = t[2];
		if (typeof n == "boolean") return n;
		switch (n) {
			case "x": return Math.abs(r) >= e;
			case "y": return Math.abs(i) >= e;
			case "z": return Math.abs(o) >= e;
			default: return pi && console.warn("unsupported preventWheelAction value: " + n, "warn"), !1;
		}
	}, m = function(e) {
		var t = fi(ui(ci(e), a.reverseSign)), n = t.axisDelta, r = t.timeStamp, i = ri(n);
		if (e.preventDefault && p(i, n) && e.preventDefault(), o.isStarted ? o.isMomentum && i > Math.max(2, o.lastAbsDelta * 2) && (w(!0), S()) : S(), i === 0 && Object.is && Object.is(e.deltaX, -0)) {
			c = !0;
			return;
		}
		s = e, o.axisMovement = ni(o.axisMovement, n), o.lastAbsDelta = i, o.scrollPointsToMerge.push({
			axisDelta: n,
			timeStamp: r
		}), h(), f({
			axisDelta: n,
			isStart: !o.isStartPublished
		}), o.isStartPublished = !0, C();
	}, h = function() {
		o.scrollPointsToMerge.length === gi ? (o.scrollPoints.unshift({
			axisDeltaSum: o.scrollPointsToMerge.map(function(e) {
				return e.axisDelta;
			}).reduce(ni),
			timeStamp: ei(o.scrollPointsToMerge.map(function(e) {
				return e.timeStamp;
			}))
		}), _(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || b()) : o.isStartPublished || g();
	}, g = function() {
		o.axisVelocity = $r(o.scrollPointsToMerge).axisDelta.map(function(e) {
			return e / o.willEndTimeout;
		});
	}, _ = function() {
		var e = o.scrollPoints, t = e[0], n = e[1];
		if (!(!n || !t)) {
			var r = t.timeStamp - n.timeStamp;
			if (r <= 0) {
				pi && console.warn("invalid deltaTime");
				return;
			}
			var i = t.axisDeltaSum.map(function(e) {
				return e / r;
			}), a = i.map(function(e, t) {
				return e / (o.axisVelocity[t] || 1);
			});
			o.axisVelocity = i, o.accelerationFactors.push(a), v(r);
		}
	}, v = function(e) {
		var t = Math.ceil(e / 10) * 10 * 1.2;
		o.isMomentum || (t = Math.max(100, t * 2)), o.willEndTimeout = Math.min(1e3, Math.round(t));
	}, y = function(e) {
		return e === 0 || e <= hi && e >= mi;
	}, b = function() {
		if (o.accelerationFactors.length >= _i) {
			if (c && (c = !1, ri(o.axisVelocity) >= .2)) {
				x();
				return;
			}
			var e = o.accelerationFactors.slice(_i * -1);
			e.every(function(e) {
				var t = !!e.reduce(function(e, t) {
					return e && e < 1 && e === t ? 1 : 0;
				}), n = e.filter(y).length === e.length;
				return t || n;
			}) && x(), o.accelerationFactors = e;
		}
	}, x = function() {
		o.isMomentum = !0;
	}, S = function() {
		o = bi(), o.isStarted = !0, o.startTime = Date.now(), l = void 0, c = !1;
	}, C = function() {
		var e;
		return function() {
			clearTimeout(e), e = setTimeout(w, o.willEndTimeout);
		};
	}(), w = function(e) {
		e === void 0 && (e = !1), o.isStarted && (o.isMomentum && e ? f({
			isEnding: !0,
			isMomentumCancel: !0
		}) : f({ isEnding: !0 }), o.isMomentum = !1, o.isStarted = !1);
	}, T = oi(u), E = T.observe, ee = T.unobserve, te = T.disconnect;
	return d(e), ii({
		on: n,
		off: r,
		observe: E,
		unobserve: ee,
		disconnect: te,
		feedWheel: u,
		updateOptions: d
	});
}
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel-wheel-gestures@8.0.1_embla-carousel@8.5.2/node_modules/embla-carousel-wheel-gestures/dist/embla-carousel-wheel-gestures.esm.js
var Si = {
	active: !0,
	breakpoints: {},
	wheelDraggingClass: "is-wheel-dragging",
	forceWheelAxis: void 0,
	target: void 0
};
wi.globalOptions = void 0;
var Ci = process.env.NODE_ENV !== "production";
function wi(e) {
	e === void 0 && (e = {});
	var t, n = function() {};
	function r(r, i) {
		var a = i.mergeOptions, o = i.optionsAtMedia;
		t = o(a(a(Si, wi.globalOptions), e));
		var s = r.internalEngine(), c = t.target ?? r.containerNode().parentNode, l = t.forceWheelAxis ?? s.options.axis, u = xi({
			preventWheelAction: l,
			reverseSign: [
				!0,
				!0,
				!1
			]
		}), d = u.observe(c), f = u.on("wheel", S), p = !1, m;
		function h(e) {
			try {
				m = new MouseEvent("mousedown", e.event), x(m);
			} catch {
				return Ci && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
			}
			p = !0, _(), t.wheelDraggingClass && c.classList.add(t.wheelDraggingClass);
		}
		function g(e) {
			p = !1, x(b("mouseup", e)), v(), t.wheelDraggingClass && c.classList.remove(t.wheelDraggingClass);
		}
		function _() {
			document.documentElement.addEventListener("mousemove", y, !0), document.documentElement.addEventListener("mouseup", y, !0), document.documentElement.addEventListener("mousedown", y, !0);
		}
		function v() {
			document.documentElement.removeEventListener("mousemove", y, !0), document.documentElement.removeEventListener("mouseup", y, !0), document.documentElement.removeEventListener("mousedown", y, !0);
		}
		function y(e) {
			p && e.isTrusted && e.stopImmediatePropagation();
		}
		function b(e, t) {
			var n, r;
			if (l === s.options.axis) {
				var i = t.axisMovement;
				n = i[0], r = i[1];
			} else {
				var a = t.axisMovement;
				r = a[0], n = a[1];
			}
			if (!s.options.skipSnaps && !s.options.dragFree) {
				var o = s.containerRect.width, c = s.containerRect.height;
				n = n < 0 ? Math.max(n, -o) : Math.min(n, o), r = r < 0 ? Math.max(r, -c) : Math.min(r, c);
			}
			return new MouseEvent(e, {
				clientX: m.clientX + n,
				clientY: m.clientY + r,
				screenX: m.screenX + n,
				screenY: m.screenY + r,
				movementX: n,
				movementY: r,
				button: 0,
				bubbles: !0,
				cancelable: !0,
				composed: !0
			});
		}
		function x(e) {
			r.containerNode().dispatchEvent(e);
		}
		function S(e) {
			var t = e.axisDelta, n = t[0], r = t[1], i = l === "x" ? n : r, a = l === "x" ? r : n, o = e.isMomentum && e.previous && !e.previous.isMomentum, s = e.isEnding && !e.isMomentum || o;
			Math.abs(i) > Math.abs(a) && !p && !e.isMomentum && h(e), p && (s ? g(e) : x(b("mousemove", e)));
		}
		n = function() {
			d(), f(), v();
		};
	}
	return {
		name: "wheelGestures",
		options: e,
		init: r,
		destroy: function() {
			return n();
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel-reactive-utils@8.6.0_embla-carousel@8.6.0/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function Ti(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function Ei(e) {
	return Ti(e) || Array.isArray(e);
}
function Di() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Oi(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !Ei(r) || !Ei(i) ? r === i : Oi(r, i);
	});
}
function ki(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function Ai(e, t) {
	if (e.length !== t.length) return !1;
	let n = ki(e), r = ki(t);
	return n.every((e, t) => {
		let n = r[t];
		return Oi(e, n);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel@8.6.0/node_modules/embla-carousel/esm/embla-carousel.esm.js
function ji(e) {
	return typeof e == "number";
}
function Mi(e) {
	return typeof e == "string";
}
function Ni(e) {
	return typeof e == "boolean";
}
function Pi(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function z(e) {
	return Math.abs(e);
}
function Fi(e) {
	return Math.sign(e);
}
function Ii(e, t) {
	return z(e - t);
}
function Li(e, t) {
	return e === 0 || t === 0 || z(e) <= z(t) ? 0 : z(Ii(z(e), z(t)) / e);
}
function Ri(e) {
	return Math.round(e * 100) / 100;
}
function zi(e) {
	return Wi(e).map(Number);
}
function Bi(e) {
	return e[Vi(e)];
}
function Vi(e) {
	return Math.max(0, e.length - 1);
}
function Hi(e, t) {
	return t === Vi(e);
}
function Ui(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function Wi(e) {
	return Object.keys(e);
}
function Gi(e, t) {
	return [e, t].reduce((e, t) => (Wi(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = Pi(r) && Pi(i) ? Gi(r, i) : i;
	}), e), {});
}
function Ki(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function qi(e, t) {
	let n = {
		start: r,
		center: i,
		end: a
	};
	function r() {
		return 0;
	}
	function i(e) {
		return a(e) / 2;
	}
	function a(e) {
		return t - e;
	}
	function o(r, i) {
		return Mi(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function Ji() {
	let e = [];
	function t(t, n, i, a = { passive: !0 }) {
		let o;
		if ("addEventListener" in t) t.addEventListener(n, i, a), o = () => t.removeEventListener(n, i, a);
		else {
			let e = t;
			e.addListener(i), o = () => e.removeListener(i);
		}
		return e.push(o), r;
	}
	function n() {
		e = e.filter((e) => e());
	}
	let r = {
		add: t,
		clear: n
	};
	return r;
}
function Yi(e, t, n, r) {
	let i = Ji(), a = 1e3 / 60, o = null, s = 0, c = 0;
	function l() {
		i.add(e, "visibilitychange", () => {
			e.hidden && m();
		});
	}
	function u() {
		p(), i.clear();
	}
	function d(e) {
		if (!c) return;
		o || (o = e, n(), n());
		let i = e - o;
		for (o = e, s += i; s >= a;) n(), s -= a;
		r(s / a), c &&= t.requestAnimationFrame(d);
	}
	function f() {
		c ||= t.requestAnimationFrame(d);
	}
	function p() {
		t.cancelAnimationFrame(c), o = null, s = 0, c = 0;
	}
	function m() {
		o = null, s = 0;
	}
	return {
		init: l,
		destroy: u,
		start: f,
		stop: p,
		update: n,
		render: r
	};
}
function Xi(e, t) {
	let n = t === "rtl", r = e === "y", i = r ? "y" : "x", a = r ? "x" : "y", o = !r && n ? -1 : 1, s = u(), c = d();
	function l(e) {
		let { height: t, width: n } = e;
		return r ? t : n;
	}
	function u() {
		return r ? "top" : n ? "right" : "left";
	}
	function d() {
		return r ? "bottom" : n ? "left" : "right";
	}
	function f(e) {
		return e * o;
	}
	return {
		scroll: i,
		cross: a,
		startEdge: s,
		endEdge: c,
		measureSize: l,
		direction: f
	};
}
function Zi(e = 0, t = 0) {
	let n = z(e - t);
	function r(t) {
		return t < e;
	}
	function i(e) {
		return e > t;
	}
	function a(e) {
		return r(e) || i(e);
	}
	function o(n) {
		return a(n) ? r(n) ? e : t : n;
	}
	function s(e) {
		return n ? e - n * Math.ceil((e - t) / n) : e;
	}
	return {
		length: n,
		max: t,
		min: e,
		constrain: o,
		reachedAny: a,
		reachedMax: i,
		reachedMin: r,
		removeOffset: s
	};
}
function Qi(e, t, n) {
	let { constrain: r } = Zi(0, e), i = e + 1, a = o(t);
	function o(e) {
		return n ? z((i + e) % i) : r(e);
	}
	function s() {
		return a;
	}
	function c(e) {
		return a = o(e), d;
	}
	function l(e) {
		return u().set(s() + e);
	}
	function u() {
		return Qi(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function $i(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, x = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], S = { passive: !1 }, C = Ji(), w = Ji(), T = Zi(50, 225).constrain(p.measure(20)), E = {
		mouse: 300,
		touch: 400
	}, ee = {
		mouse: 500,
		touch: 600
	}, te = m ? 43 : 25, ne = !1, re = 0, ie = 0, ae = !1, D = !1, oe = !1, se = !1;
	function ce(e) {
		if (!v) return;
		function n(t) {
			(Ni(v) || v(e, t)) && me(t);
		}
		let r = t;
		C.add(r, "dragstart", (e) => e.preventDefault(), S).add(r, "touchmove", () => void 0, S).add(r, "touchend", () => void 0).add(r, "touchstart", n).add(r, "mousedown", n).add(r, "touchcancel", ge).add(r, "contextmenu", ge).add(r, "click", _e, !0);
	}
	function le() {
		C.clear(), w.clear();
	}
	function ue() {
		let e = se ? n : t;
		w.add(e, "touchmove", he, S).add(e, "touchend", ge).add(e, "mousemove", he, S).add(e, "mouseup", ge);
	}
	function de(e) {
		let t = e.nodeName || "";
		return x.includes(t);
	}
	function fe() {
		return (m ? ee : E)[se ? "mouse" : "touch"];
	}
	function pe(e, t) {
		let n = d.add(Fi(e) * -1), r = u.byDistance(e, !m).distance;
		return m || z(e) < T ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function me(e) {
		let t = Ki(e, r);
		se = t, oe = m && t && !e.buttons && ne, ne = Ii(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (de(e.target) || (ae = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), ue(), re = a.readPoint(e), ie = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function he(e) {
		if (!Ki(e, r) && e.touches.length >= 2) return ge(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = Ii(t, re), c = Ii(n, ie);
		if (!D && !se && (!e.cancelable || (D = o > c, !D))) return ge(e);
		let u = a.pointerMove(e);
		o > h && (oe = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function ge(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * fe(), r = pe(b(n), t), i = Li(n, r), o = te - 10 * i, s = _ + i / 50;
		D = !1, ae = !1, w.clear(), l.useDuration(o).useFriction(s), c.distance(r, !m), se = !1, f.emit("pointerUp");
	}
	function _e(e) {
		oe &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function ve() {
		return ae;
	}
	return {
		init: ce,
		destroy: le,
		pointerDown: ve
	};
}
function ea(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (Ki(n, t) ? n : n.touches[0])[i];
	}
	function o(e) {
		return n = e, r = e, a(e);
	}
	function s(e) {
		let t = a(e) - a(r), o = i(e) - i(n) > 170;
		return r = e, o && (n = e), t;
	}
	function c(e) {
		if (!n || !r) return 0;
		let t = a(r) - a(n), o = i(e) - i(n), s = i(e) - i(r) > 170, c = t / o;
		return o && !s && z(c) > .1 ? c : 0;
	}
	return {
		pointerDown: o,
		pointerMove: s,
		pointerUp: c,
		readPoint: a
	};
}
function ta() {
	function e(e) {
		let { offsetTop: t, offsetLeft: n, offsetWidth: r, offsetHeight: i } = e;
		return {
			top: t,
			right: n + r,
			bottom: t + i,
			left: n,
			width: r,
			height: i
		};
	}
	return { measure: e };
}
function na(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function ra(e, t, n, r, i, a, o) {
	let s = [e].concat(r), c, l, u = [], d = !1;
	function f(e) {
		return i.measureSize(o.measure(e));
	}
	function p(i) {
		if (!a) return;
		l = f(e), u = r.map(f);
		function o(n) {
			for (let a of n) {
				if (d) return;
				let n = a.target === e, o = r.indexOf(a.target), s = n ? l : u[o];
				if (z(f(n ? e : r[o]) - s) >= .5) {
					i.reInit(), t.emit("resize");
					break;
				}
			}
		}
		c = new ResizeObserver((e) => {
			(Ni(a) || a(i, e)) && o(e);
		}), n.requestAnimationFrame(() => {
			s.forEach((e) => c.observe(e));
		});
	}
	function m() {
		d = !0, c && c.disconnect();
	}
	return {
		init: p,
		destroy: m
	};
}
function ia(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = Fi(a), d = u, x;
	}
	function p() {
		return z(r.get() - t.get()) < .001;
	}
	function m() {
		return c;
	}
	function h() {
		return s;
	}
	function g() {
		return o;
	}
	function _() {
		return y(i);
	}
	function v() {
		return b(a);
	}
	function y(e) {
		return c = e, x;
	}
	function b(e) {
		return l = e, x;
	}
	let x = {
		direction: h,
		duration: m,
		velocity: g,
		seek: f,
		settled: p,
		useBaseFriction: v,
		useBaseDuration: _,
		useFriction: b,
		useDuration: y
	};
	return x;
}
function aa(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = Zi(.1, .99), c = !1;
	function l() {
		return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
	}
	function u(i) {
		if (!l()) return;
		let c = z(e[e.reachedMin(t.get()) ? "min" : "max"] - t.get()), u = n.get() - t.get(), d = s.constrain(c / o);
		n.subtract(u * d), !i && z(u) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
	}
	function d(e) {
		c = !e;
	}
	return {
		shouldConstrain: l,
		constrain: u,
		toggleActive: d
	};
}
function oa(e, t, n, r, i) {
	let a = Zi(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return Ii(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = Bi(o);
		return Zi(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = Hi(n, t);
			return s ? i : c || l(r, o) ? r : l(i, o) ? i : o;
		}).map((e) => parseFloat(e.toFixed(3)));
	}
	function f() {
		if (t <= e + i) return [a.max];
		if (r === "keepSnaps") return o;
		let { min: n, max: c } = s;
		return o.slice(n, c);
	}
	return {
		snapsContained: c,
		scrollContainLimit: s
	};
}
function sa(e, t, n) {
	let r = t[0];
	return { limit: Zi(n ? r - e : Bi(t), r) };
}
function ca(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = Zi(t.min + i, t.max + i);
	function s(e) {
		return e === 1 ? o(n.get()) : e === -1 && a(n.get());
	}
	function c(t) {
		if (!s(t)) return;
		let n = t * -1 * e;
		r.forEach((e) => e.add(n));
	}
	return { loop: c };
}
function la(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function ua(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => Bi(e)[o] - e[0][a]).map(z);
	}
	function f() {
		return r.map((e) => n[a] - e[a]).map((e) => -z(e));
	}
	function p() {
		return s(l).map((e) => e[0]).map((e, t) => e + c[t]);
	}
	return {
		snaps: l,
		snapsAligned: u
	};
}
function da(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = Hi(n, t);
			return r ? Ui(Bi(n[0]) + 1) : i ? Ui(Vi(a) - Bi(n)[0] + 1, Bi(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function fa(e, t, n, r, i) {
	let { reachedAny: a, removeOffset: o, constrain: s } = r;
	function c(e) {
		return e.concat().sort((e, t) => z(e) - z(t))[0];
	}
	function l(n) {
		let r = e ? o(n) : s(n), { index: i } = t.map((e, t) => ({
			diff: u(e - r, 0),
			index: t
		})).sort((e, t) => z(e.diff) - z(t.diff))[0];
		return {
			index: i,
			distance: r
		};
	}
	function u(t, r) {
		let i = [
			t,
			t + n,
			t - n
		];
		if (!e) return t;
		if (!r) return c(i);
		let a = i.filter((e) => Fi(e) === r);
		return a.length ? c(a) : Bi(i) - n;
	}
	function d(e, n) {
		return {
			index: e,
			distance: u(t[e] - i.get(), n)
		};
	}
	function f(n, r) {
		let o = i.get() + n, { index: s, distance: c } = l(o), d = !e && a(o);
		return !r || d ? {
			index: s,
			distance: n
		} : {
			index: s,
			distance: n + u(t[s] - c, 0)
		};
	}
	return {
		byDistance: f,
		byIndex: d,
		shortcut: u
	};
}
function pa(e, t, n, r, i, a, o) {
	function s(i) {
		let s = i.distance, c = i.index !== t.get();
		a.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), c && (n.set(t.get()), t.set(i.index), o.emit("select"));
	}
	function c(e, t) {
		s(i.byDistance(e, t));
	}
	function l(e, n) {
		let r = t.clone().set(e);
		s(i.byIndex(r.get(), n));
	}
	return {
		distance: c,
		index: l
	};
}
function ma(e, t, n, r, i, a, o, s) {
	let c = {
		passive: !0,
		capture: !0
	}, l = 0;
	function u(u) {
		if (!s) return;
		function f(t) {
			if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
			o.emit("slideFocusStart"), e.scrollLeft = 0;
			let a = n.findIndex((e) => e.includes(t));
			ji(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(Ni(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function ha(e) {
	let t = e;
	function n() {
		return t;
	}
	function r(e) {
		t = o(e);
	}
	function i(e) {
		t += o(e);
	}
	function a(e) {
		t -= o(e);
	}
	function o(e) {
		return ji(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function ga(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = Ri(e.direction(t));
		o !== i && (r.transform = n(o), i = o);
	}
	function l(e) {
		a = !e;
	}
	function u() {
		a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
	}
	return {
		clear: u,
		to: c,
		toggleActive: l
	};
}
function _a(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = zi(i), d = zi(i).reverse(), f = _().concat(v());
	function p(e, t) {
		return e.reduce((e, t) => e - i[t], t);
	}
	function m(e, t) {
		return e.reduce((e, n) => p(e, t) > 0 ? e.concat([n]) : e, []);
	}
	function h(e) {
		return a.map((n, i) => ({
			start: n - r[i] + l + e,
			end: n + t - l + e
		}));
	}
	function g(t, r, i) {
		let a = h(r);
		return t.map((t) => {
			let r = i ? 0 : -n, o = i ? n : 0, l = i ? "end" : "start", u = a[t][l];
			return {
				index: t,
				loopPoint: u,
				slideLocation: ha(-1),
				translate: ga(e, c[t]),
				target: () => s.get() > u ? r : o
			};
		});
	}
	function _() {
		let e = o[0];
		return g(m(d, e), n, !1);
	}
	function v() {
		let e = t - o[0] - 1;
		return g(m(u, e), -n, !0);
	}
	function y() {
		return f.every(({ index: e }) => p(u.filter((t) => t !== e), t) <= .1);
	}
	function b() {
		f.forEach((e) => {
			let { target: t, translate: n, slideLocation: r } = e, i = t();
			i !== r.get() && (n.to(i), r.set(i));
		});
	}
	function x() {
		f.forEach((e) => e.translate.clear());
	}
	return {
		canLoop: y,
		clear: x,
		loop: b,
		loopPoints: f
	};
}
function va(e, t, n) {
	let r, i = !1;
	function a(a) {
		if (!n) return;
		function o(e) {
			for (let n of e) if (n.type === "childList") {
				a.reInit(), t.emit("slidesChanged");
				break;
			}
		}
		r = new MutationObserver((e) => {
			i || (Ni(n) || n(a, e)) && o(e);
		}), r.observe(e, { childList: !0 });
	}
	function o() {
		r && r.disconnect(), i = !0;
	}
	return {
		init: a,
		destroy: o
	};
}
function ya(e, t, n, r) {
	let i = {}, a = null, o = null, s, c = !1;
	function l() {
		s = new IntersectionObserver((e) => {
			c || (e.forEach((e) => {
				let n = t.indexOf(e.target);
				i[n] = e;
			}), a = null, o = null, n.emit("slidesInView"));
		}, {
			root: e.parentElement,
			threshold: r
		}), t.forEach((e) => s.observe(e));
	}
	function u() {
		s && s.disconnect(), c = !0;
	}
	function d(e) {
		return Wi(i).reduce((t, n) => {
			let r = parseInt(n), { isIntersecting: a } = i[r];
			return (e && a || !e && !a) && t.push(r), t;
		}, []);
	}
	function f(e = !0) {
		if (e && a) return a;
		if (!e && o) return o;
		let t = d(e);
		return e && (a = t), e || (o = t), t;
	}
	return {
		init: l,
		destroy: u,
		get: f
	};
}
function ba(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return z(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(Bi(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = Hi(n, t);
			return r ? f[t] + u : i ? f[t] + d : n[t + 1][s] - e[s];
		}).map(z);
	}
	return {
		slideSizes: f,
		slideSizesWithGaps: p,
		startGap: u,
		endGap: d
	};
}
function xa(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = ji(n);
	function p(e, t) {
		return zi(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? zi(e).reduce((n, f, p) => {
			let m = Bi(n) || 0, h = m === 0, g = f === Vi(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = z(v - (!r && g ? d(s) : 0) - (_ + y));
			return p && b > t + c && n.push(f), g && n.push(e.length), n;
		}, []).map((t, n, r) => {
			let i = Math.max(r[n - 1] || 0);
			return e.slice(i, t);
		}) : [];
	}
	function h(e) {
		return f ? p(e, n) : m(e);
	}
	return { groupSlides: h };
}
function Sa(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = ta(), w = C.measure(t), T = n.map(C.measure), E = Xi(c, l), ee = E.measureSize(w), te = na(ee), ne = qi(s, ee), re = !d && !!v, { slideSizes: ie, slideSizesWithGaps: ae, startGap: D, endGap: oe } = ba(E, w, T, n, d || !!v, i), se = xa(E, ee, g, d, w, T, D, oe, 2), { snaps: ce, snapsAligned: le } = ua(E, ne, w, T, se), ue = -Bi(ce) + Bi(ae), { snapsContained: de, scrollContainLimit: fe } = oa(ee, ue, le, v, 2), pe = re ? de : le, { limit: me } = sa(ue, pe, d), he = Qi(Vi(pe), u, d), ge = he.clone(), _e = zi(n), ve = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, ye = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, be = Yi(r, i, () => ve(Pe), (e) => ye(Pe, e)), xe = .68, Se = pe[he.get()], Ce = ha(Se), we = ha(Se), Te = ha(Se), Ee = ha(Se), De = ia(Ce, Te, we, Ee, f, xe), Oe = fa(d, pe, ue, me, Ee), ke = pa(be, he, ge, De, Oe, Ee, o), Ae = la(me), je = Ji(), O = ya(t, n, o, h), { slideRegistry: Me } = da(re, v, pe, fe, se, _e), Ne = ma(e, n, Me, ke, De, je, o, S), Pe = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: be,
		axis: E,
		dragHandler: $i(E, e, r, i, Ee, ea(E, i), Ce, be, ke, De, Oe, he, o, te, p, m, _, xe, x),
		eventStore: je,
		percentOfView: te,
		index: he,
		indexPrevious: ge,
		limit: me,
		location: Ce,
		offsetLocation: Te,
		previousLocation: we,
		options: a,
		resizeHandler: ra(t, o, i, n, E, y, C),
		scrollBody: De,
		scrollBounds: aa(me, Te, Ee, De, te),
		scrollLooper: ca(ue, me, Te, [
			Ce,
			Te,
			we,
			Ee
		]),
		scrollProgress: Ae,
		scrollSnapList: pe.map(Ae.get),
		scrollSnaps: pe,
		scrollTarget: Oe,
		scrollTo: ke,
		slideLooper: _a(E, ee, ue, ie, ae, ce, pe, Te, n),
		slideFocus: Ne,
		slidesHandler: va(t, o, b),
		slidesInView: O,
		slideIndexes: _e,
		slideRegistry: Me,
		slidesToScroll: se,
		target: Ee,
		translate: ga(E, t)
	};
	return Pe;
}
function Ca() {
	let e = {}, t;
	function n(e) {
		t = e;
	}
	function r(t) {
		return e[t] || [];
	}
	function i(e) {
		return r(e).forEach((n) => n(t, e)), c;
	}
	function a(t, n) {
		return e[t] = r(t).concat([n]), c;
	}
	function o(t, n) {
		return e[t] = r(t).filter((e) => e !== n), c;
	}
	function s() {
		e = {};
	}
	let c = {
		init: n,
		emit: i,
		off: o,
		on: a,
		clear: s
	};
	return c;
}
var wa = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: !1,
	dragThreshold: 10,
	loop: !1,
	skipSnaps: !1,
	duration: 25,
	startIndex: 0,
	active: !0,
	watchDrag: !0,
	watchResize: !0,
	watchSlides: !0,
	watchFocus: !0
};
function Ta(e) {
	function t(e, t) {
		return Gi(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, Wi(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => Wi(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function Ea(e) {
	let t = [];
	function n(n, r) {
		return t = r.filter(({ options: t }) => e.optionsAtMedia(t).active !== !1), t.forEach((t) => t.init(n, e)), r.reduce((e, t) => Object.assign(e, { [t.name]: t }), {});
	}
	function r() {
		t = t.filter((e) => e.destroy());
	}
	return {
		init: n,
		destroy: r
	};
}
function Da(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = Ta(i), o = Ea(a), s = Ji(), c = Ca(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = ee, g = !1, _, v = l(wa, Da.globalOptions), y = l(v), b = [], x, S, C;
	function w() {
		let { container: t, slides: n } = y;
		S = (Mi(t) ? e.querySelector(t) : t) || e.children[0];
		let r = Mi(n) ? S.querySelectorAll(n) : n;
		C = [].slice.call(r || S.children);
	}
	function T(t) {
		let n = Sa(e, S, C, r, i, t, c);
		return t.loop && !n.slideLooper.canLoop() ? T(Object.assign({}, t, { loop: !1 })) : n;
	}
	function E(e, t) {
		g || (v = l(v, e), y = u(v), b = t || b, w(), _ = T(y), d([v, ...b.map(({ options: e }) => e)]).forEach((e) => s.add(e, "change", ee)), y.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(ve), _.eventHandler.init(ve), _.resizeHandler.init(ve), _.slidesHandler.init(ve), _.options.loop && _.slideLooper.loop(), S.offsetParent && C.length && _.dragHandler.init(ve), x = o.init(ve, b)));
	}
	function ee(e, t) {
		let n = le();
		te(), E(l({ startIndex: n }, e), t), c.emit("reInit");
	}
	function te() {
		_.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), o.destroy(), s.clear();
	}
	function ne() {
		g || (g = !0, s.clear(), te(), c.emit("destroy"), c.clear());
	}
	function re(e, t, n) {
		!y.active || g || (_.scrollBody.useBaseFriction().useDuration(t === !0 ? 0 : y.duration), _.scrollTo.index(e, n || 0));
	}
	function ie(e) {
		re(_.index.add(1).get(), e, -1);
	}
	function ae(e) {
		re(_.index.add(-1).get(), e, 1);
	}
	function D() {
		return _.index.add(1).get() !== le();
	}
	function oe() {
		return _.index.add(-1).get() !== le();
	}
	function se() {
		return _.scrollSnapList;
	}
	function ce() {
		return _.scrollProgress.get(_.offsetLocation.get());
	}
	function le() {
		return _.index.get();
	}
	function ue() {
		return _.indexPrevious.get();
	}
	function de() {
		return _.slidesInView.get();
	}
	function fe() {
		return _.slidesInView.get(!1);
	}
	function pe() {
		return x;
	}
	function me() {
		return _;
	}
	function he() {
		return e;
	}
	function ge() {
		return S;
	}
	function _e() {
		return C;
	}
	let ve = {
		canScrollNext: D,
		canScrollPrev: oe,
		containerNode: ge,
		internalEngine: me,
		destroy: ne,
		off: p,
		on: f,
		emit: m,
		plugins: pe,
		previousScrollSnap: ue,
		reInit: h,
		rootNode: he,
		scrollNext: ie,
		scrollPrev: ae,
		scrollProgress: ce,
		scrollSnapList: se,
		scrollTo: re,
		selectedScrollSnap: le,
		slideNodes: _e,
		slidesInView: de,
		slidesNotInView: fe
	};
	return E(t, n), setTimeout(() => c.emit("init"), 0), ve;
}
Da.globalOptions = void 0;
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel-react@8.6.0_react@18.3.1/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
function Oa(e = {}, t = []) {
	let n = F(e), r = F(t), [i, a] = I(), [o, s] = I(), c = N(() => {
		i && i.reInit(n.current, r.current);
	}, [i]);
	return P(() => {
		Oi(n.current, e) || (n.current = e, c());
	}, [e, c]), P(() => {
		Ai(r.current, t) || (r.current = t, c());
	}, [t, c]), P(() => {
		if (Di() && o) {
			Da.globalOptions = Oa.globalOptions;
			let e = Da(o, n.current, r.current);
			return a(e), () => e.destroy();
		}
		a(void 0);
	}, [o, a]), [s, i];
}
Oa.globalOptions = void 0;
var ka = ({ children: e }) => {
	let t = F(null), [n, r] = I(!0), [i, a] = I(!1);
	Hr(() => {
		let e = t.current;
		if (!e) return;
		let n = new ResizeObserver(() => c());
		n.observe(e);
		let r = () => {
			c();
		};
		return e.addEventListener("scroll", r), c(), () => {
			n.disconnect(), e.removeEventListener("scroll", r);
		};
	}, []);
	function o() {
		let e = t.current;
		e && e.scrollBy({
			left: e.clientWidth,
			behavior: "smooth"
		});
	}
	function s() {
		let e = t.current;
		e && e.scrollBy({
			left: -e.clientWidth,
			behavior: "smooth"
		});
	}
	let c = () => {
		if (!t.current) return;
		let { scrollLeft: e, scrollWidth: n, clientWidth: i } = t.current;
		a(e > 0), r(e + i < n);
	}, l = "";
	return l = i && n ? "linear-gradient(to right, transparent 0px, transparent 28px, black 56px, black calc(100% - 84px), transparent calc(100% - 56px), transparent 100%)" : i && !n ? "linear-gradient(to right, transparent 0px, transparent 28px, black 56px, black 100%)" : !i && n ? "linear-gradient(to right, black 0px, black calc(100% - 84px), transparent calc(100% - 56px), transparent 100%)" : "none", /* @__PURE__ */ R("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ L("div", {
				ref: t,
				className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
				style: {
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					margin: "-28px",
					padding: "28px",
					height: "calc(100% + 56px)",
					width: "calc(100% + 56px)",
					maskImage: l,
					WebkitMaskImage: l,
					scrollSnapType: "x mandatory"
				},
				children: Array.isArray(e) ? e.map((e, t) => /* @__PURE__ */ L("div", {
					className: "flex-shrink-0",
					style: {
						scrollSnapAlign: "start",
						scrollSnapStop: "always",
						scrollMarginLeft: "44px"
					},
					children: e
				}, t)) : e && /* @__PURE__ */ L("div", {
					className: "flex-shrink-0",
					style: {
						scrollSnapAlign: "start",
						scrollSnapStop: "always",
						scrollMarginLeft: "44px"
					},
					children: e
				})
			}),
			i && /* @__PURE__ */ L(g, {
				size: "lg",
				compact: !0,
				variant: "outline",
				className: S("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
				onClick: s,
				icon: Te,
				label: "Previous",
				hideLabel: !0
			}),
			n && /* @__PURE__ */ L(g, {
				size: "lg",
				variant: "outline",
				compact: !0,
				className: S("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
				onClick: o,
				icon: qt,
				label: "Next",
				hideLabel: !0
			})
		]
	});
}, Aa = j.createContext(null);
function ja() {
	let e = j.useContext(Aa);
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
var Ma = j.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: n, plugins: r, className: i, children: a, ...o }, s) => {
	let [c, l] = Oa({
		...t,
		axis: e === "horizontal" ? "x" : "y"
	}, r), [u, d] = j.useState(!1), [f, p] = j.useState(!1), m = j.useCallback((e) => {
		e && (d(e.canScrollPrev()), p(e.canScrollNext()));
	}, []), h = j.useCallback(() => {
		l?.scrollPrev();
	}, [l]), g = j.useCallback(() => {
		l?.scrollNext();
	}, [l]), _ = j.useCallback((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), h()) : e.key === "ArrowRight" && (e.preventDefault(), g());
	}, [h, g]);
	return j.useEffect(() => {
		!l || !n || n(l);
	}, [l, n]), j.useEffect(() => {
		if (l) return m(l), l.on("reInit", m), l.on("select", m), () => {
			l?.off("select", m);
		};
	}, [l, m]), /* @__PURE__ */ L(Aa.Provider, {
		value: {
			carouselRef: c,
			api: l,
			opts: t,
			orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev: h,
			scrollNext: g,
			canScrollPrev: u,
			canScrollNext: f
		},
		children: /* @__PURE__ */ L("div", {
			ref: s,
			onKeyDownCapture: _,
			className: S("group/carousel relative", i),
			role: "region",
			"aria-roledescription": "carousel",
			...o,
			children: a
		})
	});
});
Ma.displayName = "Carousel";
var Na = j.forwardRef(({ className: e, ...t }, n) => {
	let r = "linear-gradient(to right, transparent 0px, transparent 14px, black 28px, black calc(100% - 28px), transparent calc(100% - 14px), transparent 100%)", { carouselRef: i, orientation: a } = ja();
	return /* @__PURE__ */ L("div", {
		ref: i,
		className: "overflow-hidden",
		style: {
			scrollbarWidth: "none",
			msOverflowStyle: "none",
			margin: "-28px",
			padding: "28px",
			height: "calc(100% + 56px)",
			width: "calc(100% + 56px)",
			maskImage: r,
			WebkitMaskImage: r
		},
		children: /* @__PURE__ */ L("div", {
			ref: n,
			className: S("flex", a === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
			...t
		})
	});
});
Na.displayName = "CarouselContent";
var Pa = j.forwardRef(({ className: e, ...t }, n) => {
	let { orientation: r } = ja();
	return /* @__PURE__ */ L("div", {
		ref: n,
		role: "group",
		"aria-roledescription": "slide",
		className: S("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e),
		...t
	});
});
Pa.displayName = "CarouselItem";
var Fa = j.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
	let { orientation: i, scrollPrev: a, canScrollPrev: o } = ja();
	return /* @__PURE__ */ L("div", {
		className: S("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", i === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
		children: /* @__PURE__ */ L(g, {
			compact: !0,
			ref: r,
			size: "sm",
			variant: t,
			className: S("absolute opacity-100 transition-all", e),
			disabled: !o,
			onClick: a,
			...n,
			label: "Previous",
			icon: Fe,
			hideLabel: !0
		})
	});
});
Fa.displayName = "CarouselPrevious";
var Ia = j.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
	let { orientation: i, scrollNext: a, canScrollNext: o } = ja();
	return /* @__PURE__ */ L("div", {
		className: S("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", i === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
		children: /* @__PURE__ */ L(g, {
			ref: r,
			size: "sm",
			variant: t,
			compact: !0,
			className: S("absolute opacity-100 transition-all", e),
			disabled: !o,
			onClick: a,
			...n,
			label: "Next",
			icon: pt,
			hideLabel: !0
		})
	});
});
Ia.displayName = "CarouselNext";
var La = j.forwardRef(({ ...e }, t) => {
	let { api: n } = ja(), [, r] = j.useState(!1), i = j.useRef(null), a = j.useCallback(() => {
		r((e) => !e);
	}, []);
	j.useEffect(() => {
		if (n) return n.on("select", a), n.on("reInit", a), () => {
			n.off("select", a), n.off("reInit", a);
		};
	}, [n, a]);
	let o = n?.scrollSnapList().length || 0, s = n?.selectedScrollSnap() || 0;
	if (j.useEffect(() => {
		if (!i.current) return;
		let e = i.current, t = s * 16 - e.clientWidth / 2 + 8;
		e.scrollTo({
			left: t,
			behavior: "smooth"
		});
	}, [s]), j.useEffect(() => {
		let e = i.current;
		if (!e) return;
		let t = (e) => {
			e.preventDefault(), e.stopPropagation();
		};
		return e.addEventListener("wheel", t, { passive: !1 }), e.addEventListener("touchmove", t, { passive: !1 }), () => {
			e.removeEventListener("wheel", t), e.removeEventListener("touchmove", t);
		};
	}, []), o <= 1) return null;
	let c = o > 5 ? 5 : o, l = Array.from({ length: o }, (e, t) => t), u = Math.min(c, o) * 16, d = (e) => {
		if (c === o) return null;
		let t = Math.abs(e - s);
		if (t === 0 || t === 1) return "scale-100";
		if (t === 2) return s === 0 || s === o - 1 ? "scale-100" : "scale-75";
		if (t === 3) return s === 0 || s === o - 1 ? "scale-75" : "scale-50";
		if (t >= 4) return "scale-50";
	};
	return /* @__PURE__ */ L("div", {
		ref: t,
		className: S("flex justify-center", e.className),
		children: /* @__PURE__ */ L("div", {
			className: "relative overflow-hidden",
			style: { width: `${u}px` },
			children: /* @__PURE__ */ L("div", {
				ref: i,
				className: "flex w-full gap-0 overflow-x-scroll",
				style: {
					scrollbarWidth: "none",
					overscrollBehavior: "none"
				},
				tabIndex: 0,
				"aria-label": "Carousel pagination",
				onKeyDown: (e) => {
					e.key === "ArrowLeft" ? (e.preventDefault(), n?.scrollPrev()) : e.key === "ArrowRight" && (e.preventDefault(), n?.scrollNext());
				},
				children: l.map((e) => /* @__PURE__ */ L("button", {
					className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
					"aria-label": `Go to slide ${e + 1}`,
					"aria-current": e === s ? "true" : void 0,
					onClick: () => n?.scrollTo(e),
					tabIndex: -1,
					children: /* @__PURE__ */ L("div", { className: S("h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]", e === s && "rounded-[3px] opacity-100 group-hover/dot:opacity-100", d(e)) })
				}, e))
			})
		})
	});
});
La.displayName = "CarouselDots";
var Ra = (e) => e?.containerNode()?.childElementCount ?? 0, za = (e) => {
	let { api: t, canScrollNext: n, scrollNext: r } = ja(), i = e?.hasMore ?? !1, a = e?.isLoading ?? !1, o = e?.onLoadMore, s = j.useRef({
		hasMore: i,
		isLoading: a,
		onLoadMore: o
	});
	s.current = {
		hasMore: i,
		isLoading: a,
		onLoadMore: o
	}, j.useEffect(() => {
		if (!t) return;
		let e = () => {
			let { hasMore: e, isLoading: n, onLoadMore: r } = s.current;
			if (!e || n || !r) return;
			let i = t.scrollSnapList().length;
			t.selectedScrollSnap() < i - 1 || r();
		};
		return t.on("select", e), () => {
			t.off("select", e);
		};
	}, [t]);
	let [c, l] = j.useState(!1), u = j.useRef(a), d = j.useRef(0);
	return j.useEffect(() => {
		let e = u.current && !a;
		if (u.current = a, c) {
			if (n) {
				l(!1), r();
				return;
			}
			e && Ra(t) <= d.current && l(!1);
		}
	}, [
		c,
		n,
		a,
		r,
		t
	]), {
		canGoNext: n || i && !a,
		isAwaitingPage: c,
		goNext: () => {
			if (n) {
				r();
				return;
			}
			i && (d.current = Ra(t), l(!0), a || o?.());
		}
	};
}, Ba = j.forwardRef(({ className: e, labels: t, showDots: n = !0, paging: r, ...i }, a) => {
	let { scrollPrev: o, canScrollPrev: s } = ja(), { canGoNext: c, goNext: l, isAwaitingPage: u } = za(r);
	return /* @__PURE__ */ R("div", {
		ref: a,
		className: S("flex flex-row items-center justify-between gap-2 pt-4", e),
		...i,
		children: [
			/* @__PURE__ */ L(g, {
				size: "md",
				variant: "outline",
				icon: Te,
				label: t?.previous ?? "Previous",
				hideLabel: !0,
				disabled: !s,
				onClick: o
			}),
			n ? /* @__PURE__ */ L(La, { className: "grow" }) : null,
			/* @__PURE__ */ L(g, {
				size: "md",
				variant: "outline",
				icon: qt,
				label: t?.next ?? "Next",
				hideLabel: !0,
				loading: u,
				disabled: !c,
				onClick: l
			})
		]
	});
});
Ba.displayName = "CarouselControls";
//#endregion
//#region src/experimental/Navigation/Carousel/types.ts
var Va = r({
	variants: {
		peek: {
			true: "",
			false: ""
		},
		default: {
			1: "basis-full",
			2: "basis-1/2",
			3: "basis-1/3",
			4: "basis-1/4",
			6: "basis-1/6",
			peek1: "basis-[85%]",
			peek2: "basis-[48%]",
			peek3: "basis-[32%]",
			peek4: "basis-[24%]",
			peek6: "basis-[16%]"
		},
		xs: {
			1: "@xl:basis-full",
			2: "@xl:basis-1/2",
			3: "@xl:basis-1/3",
			4: "@xl:basis-1/4",
			6: "@xl:basis-1/6",
			peek1: "@xl:basis-[85%]",
			peek2: "@xl:basis-[48%]",
			peek3: "@xl:basis-[32%]",
			peek4: "@xl:basis-[24%]",
			peek6: "@xl:basis-[16%]"
		},
		sm: {
			1: "@2xl:basis-full",
			2: "@2xl:basis-1/2",
			3: "@2xl:basis-1/3",
			4: "@2xl:basis-1/4",
			6: "@2xl:basis-1/6",
			peek1: "@2xl:basis-[85%]",
			peek2: "@2xl:basis-[48%]",
			peek3: "@2xl:basis-[32%]",
			peek4: "@2xl:basis-[24%]",
			peek6: "@2xl:basis-[16%]"
		},
		md: {
			1: "@3xl:basis-full",
			2: "@3xl:basis-1/2",
			3: "@3xl:basis-1/3",
			4: "@3xl:basis-1/4",
			6: "@3xl:basis-1/6",
			peek1: "@3xl:basis-[85%]",
			peek2: "@3xl:basis-[48%]",
			peek3: "@3xl:basis-[32%]",
			peek4: "@3xl:basis-[24%]",
			peek6: "@3xl:basis-[16%]"
		},
		lg: {
			1: "@4xl:basis-full",
			2: "@4xl:basis-1/2",
			3: "@4xl:basis-1/3",
			4: "@4xl:basis-1/4",
			6: "@4xl:basis-1/6",
			peek1: "@4xl:basis-[85%]",
			peek2: "@4xl:basis-[48%]",
			peek3: "@4xl:basis-[32%]",
			peek4: "@4xl:basis-[24%]",
			peek6: "@4xl:basis-[16%]"
		},
		xl: {
			1: "@5xl:basis-full",
			2: "@5xl:basis-1/2",
			3: "@5xl:basis-1/3",
			4: "@5xl:basis-1/4",
			6: "@5xl:basis-1/6",
			peek1: "@5xl:basis-[85%]",
			peek2: "@5xl:basis-[48%]",
			peek3: "@5xl:basis-[32%]",
			peek4: "@5xl:basis-[24%]",
			peek6: "@5xl:basis-[16%]"
		}
	},
	defaultVariants: {
		peek: !1,
		default: 1
	}
});
//#endregion
//#region src/experimental/Navigation/Carousel/index.tsx
function Ha(e, t, n) {
	if (n) {
		let n = (e || 1) / 2;
		return t ? `peek${n}` : n;
	}
	return t ? `peek${e || 1}` : e || 1;
}
var Ua = a(d("Carousel", ({ children: e, columns: t, showArrows: n = !0, showDots: r = !0, arrowsPlacement: i = "overlay", arrowLabels: a, paging: o, autoplay: s = !1, delay: c = 3e3, showPeek: l = !1, doubleColumns: u }) => {
	let d = M.Children.toArray(e), f = n && i === "bottom", p = M.useRef(s ? Yr({
		delay: c,
		stopOnInteraction: !0
	}) : void 0);
	return t ? /* @__PURE__ */ L(Ma, {
		className: "flex w-full flex-col gap-3 @container",
		opts: {
			align: l ? "center" : "start",
			slidesToScroll: "auto",
			duration: 20,
			containScroll: !1
		},
		plugins: [p.current, wi()].filter(Boolean),
		onMouseEnter: s ? () => {
			p.current && p.current.stop();
		} : void 0,
		onMouseLeave: s ? () => {
			p.current && p.current.play();
		} : void 0,
		children: /* @__PURE__ */ R("div", {
			className: S("flex flex-col", !f && "gap-5"),
			children: [/* @__PURE__ */ R("div", {
				className: "relative",
				children: [/* @__PURE__ */ L(Na, { children: M.Children.map(d, (e, n) => {
					let r = u?.find((e) => e.index === n);
					return /* @__PURE__ */ L(Pa, {
						className: Va({
							default: Ha(t.default, l),
							xs: Ha(t.xs, l, r?.sizes?.includes("xs")),
							sm: Ha(t.sm, l, r?.sizes?.includes("sm")),
							md: Ha(t.md, l, r?.sizes?.includes("md")),
							lg: Ha(t.lg, l, r?.sizes?.includes("lg")),
							peek: l
						}),
						children: e
					}, n);
				}) }), n && !f && /* @__PURE__ */ R(Gr, { children: [/* @__PURE__ */ L(Fa, { label: a?.previous ?? "Previous" }), /* @__PURE__ */ L(Ia, { label: a?.next ?? "Next" })] })]
			}), f ? /* @__PURE__ */ L(Ba, {
				labels: a,
				showDots: r,
				paging: o
			}) : r && /* @__PURE__ */ L(La, {})]
		})
	}) : /* @__PURE__ */ L(ka, { children: e });
})), Wa = Lr({
	enabled: !1,
	enable: () => null,
	disable: () => null,
	toggle: () => null
}), Ga = ({ initiallyEnabled: e = !1, children: t }) => {
	let [n, r] = I(e), i = N(() => {
		r(!0);
	}, []), a = N(() => r(!1), []), o = N(() => r((e) => !e), []);
	return /* @__PURE__ */ L(Wa.Provider, {
		value: {
			enable: i,
			disable: a,
			toggle: o,
			enabled: n
		},
		children: t
	});
}, Ka = () => {
	let e = zr(Wa);
	if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
	return e;
}, qa = ({ children: e }) => {
	let { enabled: t } = Ka();
	return /* @__PURE__ */ L("div", {
		className: S("inline-flex ring-1 ring-inset ring-transparent transition-all duration-150", t && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"),
		"aria-hidden": t,
		children: /* @__PURE__ */ L(b.div, {
			className: "h-full w-full",
			animate: {
				opacity: +!t,
				scale: t ? .95 : 1
			},
			transition: { duration: .15 },
			children: e
		})
	});
}, Ja = () => /* @__PURE__ */ L("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Ya = 480, Xa = (e) => {
	let [t, n] = I(!1);
	return P(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > "u") return;
		let r = () => n(t.clientWidth >= Ya);
		r();
		let i = new ResizeObserver(r);
		return i.observe(t), () => i.disconnect();
	}, [e]), t;
}, Za = M.createContext(!1), Qa = () => M.useContext(Za), $a = S("-mx-1.5 inline-flex min-w-0 items-center gap-1 rounded-sm px-1.5 py-0.5", "border-none bg-transparent text-left no-underline", "text-f1-foreground", "cursor-pointer transition-colors hover:bg-f1-background-secondary-hover", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"), eo = ({ title: e, link: t, isWide: n }) => {
	let r = S("truncate", n && "text-lg font-semibold");
	if (!t) return /* @__PURE__ */ L(pn, {
		className: r,
		children: e
	});
	let i = /* @__PURE__ */ R(Gr, { children: [/* @__PURE__ */ L(pn, {
		className: r,
		children: e
	}), /* @__PURE__ */ L(l, {
		size: "sm",
		icon: t.icon ?? qt
	})] }), a = t.url ? /* @__PURE__ */ L(_, {
		href: t.url,
		onClick: t.onClick,
		"aria-label": t.title,
		className: $a,
		...h(t.url) ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children: i
	}) : /* @__PURE__ */ L("button", {
		type: "button",
		onClick: t.onClick,
		"aria-label": t.title,
		className: $a,
		children: i
	});
	return /* @__PURE__ */ L(f, {
		label: t.title,
		children: a
	});
}, to = Rr(function({ header: e, children: t, action: n, footerClassName: r, summaries: i, alert: a, status: o, fullHeight: s = !1, actions: c, headerControls: d, AIButton: m, draggable: h = !1, onDragStart: g, onDragEnd: _, isDragging: y = !1, selected: b = !1 }, x) {
	let C = F(null), w = ve(x, C), T = Xa(C);
	P(() => {
		if (!y || !_) return;
		let e = () => _();
		return document.addEventListener("mouseup", e), () => document.removeEventListener("mouseup", e);
	}, [y, _]);
	let E = u(), { enabled: ee, toggle: te } = Ka();
	return P(() => {
		if (a && o) throw Error("You cannot pass both alert and status at the same time to this component");
	}, [a, o]), /* @__PURE__ */ L(Za.Provider, {
		value: T,
		children: /* @__PURE__ */ R(ln, {
			className: S(s ? "h-full" : "", "relative flex gap-3 border-f1-border-secondary", h && "hover:border-f1-border-hover", b && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", y && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
			ref: w,
			children: [
				e && /* @__PURE__ */ L(fn, {
					className: "-mr-1 -mt-1",
					children: /* @__PURE__ */ R("div", {
						className: "flex w-full flex-1 flex-col gap-4",
						children: [/* @__PURE__ */ R("div", {
							className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2",
							children: [
								h && /* @__PURE__ */ L("div", {
									className: "-ml-1 flex h-6 w-6 shrink-0 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
									onMouseDown: g,
									"data-gs-handle": "true",
									children: /* @__PURE__ */ L(l, {
										icon: de,
										size: "xs"
									})
								}),
								/* @__PURE__ */ R("div", {
									className: "flex min-h-6 min-w-0 grow flex-row items-center gap-1",
									children: [
										e.title && /* @__PURE__ */ L(eo, {
											title: e.title,
											link: e.link,
											isWide: T
										}),
										e.subtitle && /* @__PURE__ */ R("div", {
											className: "flex flex-row items-center gap-1",
											children: [/* @__PURE__ */ L(Ja, {}), /* @__PURE__ */ L(hn, {
												className: "truncate",
												children: e.subtitle
											})]
										}),
										e.info && /* @__PURE__ */ L(f, {
											label: e.info,
											children: /* @__PURE__ */ L(l, {
												icon: Xt,
												size: "sm",
												className: "text-f1-foreground-secondary"
											})
										}),
										e.count && /* @__PURE__ */ L("div", {
											className: "ml-0.5",
											children: /* @__PURE__ */ L(p, { value: e.count })
										})
									]
								}),
								/* @__PURE__ */ R("div", {
									className: "flex flex-row items-center gap-3",
									children: [
										a && /* @__PURE__ */ L(mn, {
											text: a,
											level: "critical"
										}),
										o && /* @__PURE__ */ L(Zt, {
											text: o.text,
											variant: o.variant
										}),
										d,
										m && /* @__PURE__ */ L(Nt, {
											size: "sm",
											label: E.ai.ask,
											onClick: m,
											icon: Et
										}),
										c && /* @__PURE__ */ L(Tn, {
											items: c,
											align: "end",
											children: /* @__PURE__ */ L(v, {
												icon: An,
												label: "Actions",
												variant: "ghost",
												size: "sm",
												hideLabel: !0
											})
										})
									]
								})
							]
						}), e.comment && /* @__PURE__ */ R("div", {
							className: "flex flex-row items-center gap-3 overflow-visible",
							children: [/* @__PURE__ */ L(qa, { children: /* @__PURE__ */ L(dn, { children: e.comment }) }), !!e.canBeBlurred && /* @__PURE__ */ L("span", { children: /* @__PURE__ */ L(v, {
								icon: ee ? ke : Ee,
								hideLabel: !0,
								label: "hide/show",
								variant: "outline",
								onClick: te,
								size: "sm"
							}) })]
						})]
					})
				}),
				/* @__PURE__ */ R(sn, {
					className: "flex h-full flex-col gap-4",
					children: [i && /* @__PURE__ */ L("div", {
						className: "flex flex-row",
						children: i.map((e, t) => /* @__PURE__ */ R("div", {
							className: "grow",
							children: [/* @__PURE__ */ L("div", {
								className: "mb-0.5 text-sm text-f1-foreground-secondary",
								children: e.label
							}), /* @__PURE__ */ R("div", {
								className: "flex flex-row items-end gap-0.5 text-2xl font-semibold",
								children: [
									!!e.prefixUnit && /* @__PURE__ */ L("div", {
										className: "text-lg font-medium",
										children: e.prefixUnit
									}),
									e.value,
									!!e.postfixUnit && /* @__PURE__ */ L("div", {
										className: "text-lg font-medium",
										children: e.postfixUnit
									})
								]
							})]
						}, t))
					}), M.Children.toArray(t).filter((e) => !!e && !(M.isValidElement(e) && e.type === M.Fragment && M.Children.count(e.props.children) === 0)).map((e, t) => /* @__PURE__ */ R(M.Fragment, { children: [t > 0 && /* @__PURE__ */ L(se, { bare: !0 }), e] }, t))]
				}),
				n && /* @__PURE__ */ L(rn, {
					className: S(r),
					children: /* @__PURE__ */ L(v, {
						variant: T ? "outline" : "neutral",
						size: T ? "md" : "sm",
						...n
					})
				})
			]
		})
	});
}), no = r({ variants: { height: {
	sm: "h-36",
	md: "h-48",
	lg: "h-60"
} } }), ro = Rr(function({ header: e, height: t }, n) {
	return /* @__PURE__ */ R(ln, {
		className: S("flex gap-4 border-f1-border-secondary", t === "full" && "h-full"),
		ref: n,
		"aria-live": "polite",
		"aria-busy": !0,
		children: [/* @__PURE__ */ L(fn, {
			className: "-mr-1 -mt-1",
			children: /* @__PURE__ */ R("div", {
				className: "flex h-6 w-full flex-row items-center gap-1.5",
				"aria-hidden": !0,
				children: [e?.title ? /* @__PURE__ */ L(pn, { children: e.title }) : /* @__PURE__ */ L(m, { className: "h-4 w-full max-w-16" }), e?.subtitle && /* @__PURE__ */ L(hn, { children: e.subtitle })]
			})
		}), /* @__PURE__ */ L(sn, {
			"aria-hidden": !0,
			className: S(t !== "full" && no({ height: t })),
			children: [...[
				,
				,
				,
				,
			]].map((e, t) => /* @__PURE__ */ L(m, { className: `mb-1 h-6 ${[
				"w-full",
				"w-1/2",
				"w-3/4",
				"w-1/4"
			][t]}` }, t))
		})]
	});
}), io = a(d("Widget", Nr(to, ro)));
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subMonths.mjs
function ao(e, t) {
	return we(e, -t);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subYears.mjs
function oo(e, t) {
	return Pe(e, -t);
}
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/shape/Polygon.js
var B = /* @__PURE__ */ e(je()), so = /* @__PURE__ */ e(Ce()), V = /* @__PURE__ */ e(Ct()), co = [
	"points",
	"className",
	"baseLinePoints",
	"connectNulls"
];
function lo() {
	return lo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, lo.apply(this, arguments);
}
function uo(e, t) {
	if (e == null) return {};
	var n = fo(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function fo(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function po(e) {
	return _o(e) || go(e) || ho(e) || mo();
}
function mo() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ho(e, t) {
	if (e) {
		if (typeof e == "string") return vo(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vo(e, t);
	}
}
function go(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _o(e) {
	if (Array.isArray(e)) return vo(e);
}
function vo(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var yo = function(e) {
	return e && e.x === +e.x && e.y === +e.y;
}, bo = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [[]];
	return e.forEach(function(e) {
		yo(e) ? t[t.length - 1].push(e) : t[t.length - 1].length > 0 && t.push([]);
	}), yo(e[0]) && t[t.length - 1].push(e[0]), t[t.length - 1].length <= 0 && (t = t.slice(0, -1)), t;
}, xo = function(e, t) {
	var n = bo(e);
	t && (n = [n.reduce(function(e, t) {
		return [].concat(po(e), po(t));
	}, [])]);
	var r = n.map(function(e) {
		return e.reduce(function(e, t, n) {
			return `${e}${n === 0 ? "M" : "L"}${t.x},${t.y}`;
		}, "");
	}).join("");
	return n.length === 1 ? `${r}Z` : r;
}, So = function(e, t, n) {
	var r = xo(e, n);
	return `${r.slice(-1) === "Z" ? r.slice(0, -1) : r}L${xo(t.reverse(), n).slice(1)}`;
}, Co = function(e) {
	var t = e.points, r = e.className, i = e.baseLinePoints, a = e.connectNulls, o = uo(e, co);
	if (!t || !t.length) return null;
	var s = n("recharts-polygon", r);
	if (i && i.length) {
		var c = o.stroke && o.stroke !== "none", l = So(t, i, a);
		return /*#__PURE__*/ M.createElement("g", { className: s }, /*#__PURE__*/ M.createElement("path", lo({}, k(o, !0), {
			fill: l.slice(-1) === "Z" ? o.fill : "none",
			stroke: "none",
			d: l
		})), c ? /*#__PURE__*/ M.createElement("path", lo({}, k(o, !0), {
			fill: "none",
			d: xo(t, a)
		})) : null, c ? /*#__PURE__*/ M.createElement("path", lo({}, k(o, !0), {
			fill: "none",
			d: xo(i, a)
		})) : null);
	}
	var u = xo(t, a);
	return /*#__PURE__*/ M.createElement("path", lo({}, k(o, !0), {
		fill: u.slice(-1) === "Z" ? o.fill : "none",
		className: s,
		d: u
	}));
}, wo = [
	"cx",
	"cy",
	"innerRadius",
	"outerRadius",
	"gridType",
	"radialLines"
];
function To(e) {
	"@babel/helpers - typeof";
	return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, To(e);
}
function Eo(e, t) {
	if (e == null) return {};
	var n = Do(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Do(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Oo() {
	return Oo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Oo.apply(this, arguments);
}
function ko(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ao(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ko(Object(n), !0).forEach(function(t) {
			jo(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ko(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function jo(e, t, n) {
	return t = Mo(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Mo(e) {
	var t = No(e, "string");
	return To(t) == "symbol" ? t : t + "";
}
function No(e, t) {
	if (To(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (To(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Po = function(e, t, n, r) {
	var i = "";
	return r.forEach(function(r, a) {
		var o = tt(t, n, e, r);
		i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
	}), i += "Z", i;
}, Fo = function(e) {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.polarAngles, o = e.radialLines;
	if (!a || !a.length || !o) return null;
	var s = Ao({ stroke: "#ccc" }, k(e, !1));
	return /*#__PURE__*/ M.createElement("g", { className: "recharts-polar-grid-angle" }, a.map(function(e) {
		var a = tt(t, n, r, e), o = tt(t, n, i, e);
		return /*#__PURE__*/ M.createElement("line", Oo({}, s, {
			key: `line-${e}`,
			x1: a.x,
			y1: a.y,
			x2: o.x,
			y2: o.y
		}));
	}));
}, Io = function(e) {
	var t = e.cx, r = e.cy, i = e.radius, a = e.index, o = Ao(Ao({ stroke: "#ccc" }, k(e, !1)), {}, { fill: "none" });
	return /*#__PURE__*/ M.createElement("circle", Oo({}, o, {
		className: n("recharts-polar-grid-concentric-circle", e.className),
		key: `circle-${a}`,
		cx: t,
		cy: r,
		r: i
	}));
}, Lo = function(e) {
	var t = e.radius, r = e.index, i = Ao(Ao({ stroke: "#ccc" }, k(e, !1)), {}, { fill: "none" });
	return /*#__PURE__*/ M.createElement("path", Oo({}, i, {
		className: n("recharts-polar-grid-concentric-polygon", e.className),
		key: `path-${r}`,
		d: Po(t, e.cx, e.cy, e.polarAngles)
	}));
}, Ro = function(e) {
	var t = e.polarRadius, n = e.gridType;
	return !t || !t.length ? null : /*#__PURE__*/ M.createElement("g", { className: "recharts-polar-grid-concentric" }, t.map(function(t, r) {
		var i = r;
		return n === "circle" ? /*#__PURE__*/ M.createElement(Io, Oo({ key: i }, e, {
			radius: t,
			index: r
		})) : /*#__PURE__*/ M.createElement(Lo, Oo({ key: i }, e, {
			radius: t,
			index: r
		}));
	}));
}, zo = function(e) {
	var t = e.cx, n = t === void 0 ? 0 : t, r = e.cy, i = r === void 0 ? 0 : r, a = e.innerRadius, o = a === void 0 ? 0 : a, s = e.outerRadius, c = s === void 0 ? 0 : s, l = e.gridType, u = l === void 0 ? "polygon" : l, d = e.radialLines, f = d === void 0 || d, p = Eo(e, wo);
	return c <= 0 ? null : /*#__PURE__*/ M.createElement("g", { className: "recharts-polar-grid" }, /*#__PURE__*/ M.createElement(Fo, Oo({
		cx: n,
		cy: i,
		innerRadius: o,
		outerRadius: c,
		gridType: u,
		radialLines: f
	}, p)), /*#__PURE__*/ M.createElement(Ro, Oo({
		cx: n,
		cy: i,
		innerRadius: o,
		outerRadius: c,
		gridType: u,
		radialLines: f
	}, p)));
};
zo.displayName = "PolarGrid";
//#endregion
//#region ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/maxBy.js
var Bo = /* @__PURE__ */ t(((e, t) => {
	var n = Ke(), r = ct(), i = nt();
	function a(e, t) {
		return e && e.length ? n(e, i(t, 2), r) : void 0;
	}
	t.exports = a;
})), Vo = /* @__PURE__ */ t(((e, t) => {
	var n = Ke(), r = nt(), i = ze();
	function a(e, t) {
		return e && e.length ? n(e, r(t, 2), i) : void 0;
	}
	t.exports = a;
})), Ho = /* @__PURE__ */ e(Bo()), Uo = /* @__PURE__ */ e(Vo()), Wo = [
	"cx",
	"cy",
	"angle",
	"ticks",
	"axisLine"
], Go = [
	"ticks",
	"tick",
	"angle",
	"tickFormatter",
	"stroke"
];
function Ko(e) {
	"@babel/helpers - typeof";
	return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ko(e);
}
function qo() {
	return qo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, qo.apply(this, arguments);
}
function Jo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Yo(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Jo(Object(n), !0).forEach(function(t) {
			cs(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Xo(e, t) {
	if (e == null) return {};
	var n = Zo(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Zo(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Qo(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function $o(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ls(r.key), r);
	}
}
function es(e, t, n) {
	return t && $o(e.prototype, t), n && $o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ts(e, t, n) {
	return t = as(t), ns(e, is() ? Reflect.construct(t, n || [], as(e).constructor) : t.apply(e, n));
}
function ns(e, t) {
	if (t && (Ko(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return rs(e);
}
function rs(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function is() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (is = function() {
		return !!e;
	})();
}
function as(e) {
	return as = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, as(e);
}
function os(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ss(e, t);
}
function ss(e, t) {
	return ss = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, ss(e, t);
}
function cs(e, t, n) {
	return t = ls(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ls(e) {
	var t = us(e, "string");
	return Ko(t) == "symbol" ? t : t + "";
}
function us(e, t) {
	if (Ko(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ko(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ds = /*#__PURE__*/ function(e) {
	function t() {
		return Qo(this, t), ts(this, t, arguments);
	}
	return os(t, e), es(t, [
		{
			key: "getTickValueCoord",
			value: function(e) {
				var t = e.coordinate, n = this.props, r = n.angle, i = n.cx, a = n.cy;
				return tt(i, a, t, r);
			}
		},
		{
			key: "getTickTextAnchor",
			value: function() {
				var e = this.props.orientation, t;
				switch (e) {
					case "left":
						t = "end";
						break;
					case "right":
						t = "start";
						break;
					default: t = "middle";
				}
				return t;
			}
		},
		{
			key: "getViewBox",
			value: function() {
				var e = this.props, t = e.cx, n = e.cy, r = e.angle, i = e.ticks, a = (0, Ho.default)(i, function(e) {
					return e.coordinate || 0;
				});
				return {
					cx: t,
					cy: n,
					startAngle: r,
					endAngle: r,
					innerRadius: (0, Uo.default)(i, function(e) {
						return e.coordinate || 0;
					}).coordinate || 0,
					outerRadius: a.coordinate || 0
				};
			}
		},
		{
			key: "renderAxisLine",
			value: function() {
				var e = this.props, t = e.cx, n = e.cy, r = e.angle, i = e.ticks, a = e.axisLine, o = Xo(e, Wo), s = i.reduce(function(e, t) {
					return [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)];
				}, [Infinity, -Infinity]), c = tt(t, n, s[0], r), l = tt(t, n, s[1], r), u = Yo(Yo(Yo({}, k(o, !1)), {}, { fill: "none" }, k(a, !1)), {}, {
					x1: c.x,
					y1: c.y,
					x2: l.x,
					y2: l.y
				});
				return /*#__PURE__*/ M.createElement("line", qo({ className: "recharts-polar-radius-axis-line" }, u));
			}
		},
		{
			key: "renderTicks",
			value: function() {
				var e = this, r = this.props, i = r.ticks, a = r.tick, o = r.angle, s = r.tickFormatter, c = r.stroke, l = Xo(r, Go), u = this.getTickTextAnchor(), d = k(l, !1), f = k(a, !1), p = i.map(function(r, i) {
					var l = e.getTickValueCoord(r), p = Yo(Yo(Yo(Yo({
						textAnchor: u,
						transform: `rotate(${90 - o}, ${l.x}, ${l.y})`
					}, d), {}, {
						stroke: "none",
						fill: c
					}, f), {}, { index: i }, l), {}, { payload: r });
					return /*#__PURE__*/ M.createElement(A, qo({
						className: n("recharts-polar-radius-axis-tick", $e(a)),
						key: `tick-${r.coordinate}`
					}, gt(e.props, r, i)), t.renderTickItem(a, p, s ? s(r.value, i) : r.value));
				});
				return /*#__PURE__*/ M.createElement(A, { className: "recharts-polar-radius-axis-ticks" }, p);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.ticks, r = e.axisLine, i = e.tick;
				return !t || !t.length ? null : /*#__PURE__*/ M.createElement(A, { className: n("recharts-polar-radius-axis", this.props.className) }, r && this.renderAxisLine(), i && this.renderTicks(), Re.renderCallByParent(this.props, this.getViewBox()));
			}
		}
	], [{
		key: "renderTickItem",
		value: function(e, t, n) {
			return /*#__PURE__*/ M.isValidElement(e) ? /*#__PURE__*/ M.cloneElement(e, t) : (0, B.default)(e) ? e(t) : /*#__PURE__*/ M.createElement(ot, qo({}, t, { className: "recharts-polar-radius-axis-tick-value" }), n);
		}
	}]);
}(Ir);
cs(ds, "displayName", "PolarRadiusAxis"), cs(ds, "axisType", "radiusAxis"), cs(ds, "defaultProps", {
	type: "number",
	radiusAxisId: 0,
	cx: 0,
	cy: 0,
	angle: 0,
	orientation: "right",
	stroke: "#ccc",
	axisLine: !0,
	tick: !0,
	tickCount: 5,
	allowDataOverflow: !1,
	scale: "auto",
	allowDuplicatedCategory: !0
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/polar/PolarAngleAxis.js
function fs(e) {
	"@babel/helpers - typeof";
	return fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, fs(e);
}
function ps() {
	return ps = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ps.apply(this, arguments);
}
function ms(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function hs(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ms(Object(n), !0).forEach(function(t) {
			Es(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ms(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function gs(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function _s(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ds(r.key), r);
	}
}
function vs(e, t, n) {
	return t && _s(e.prototype, t), n && _s(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ys(e, t, n) {
	return t = Cs(t), bs(e, Ss() ? Reflect.construct(t, n || [], Cs(e).constructor) : t.apply(e, n));
}
function bs(e, t) {
	if (t && (fs(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return xs(e);
}
function xs(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Ss() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Ss = function() {
		return !!e;
	})();
}
function Cs(e) {
	return Cs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Cs(e);
}
function ws(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ts(e, t);
}
function Ts(e, t) {
	return Ts = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Ts(e, t);
}
function Es(e, t, n) {
	return t = Ds(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ds(e) {
	var t = Os(e, "string");
	return fs(t) == "symbol" ? t : t + "";
}
function Os(e, t) {
	if (fs(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (fs(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ks = Math.PI / 180, As = 1e-5, js = /*#__PURE__*/ function(e) {
	function t() {
		return gs(this, t), ys(this, t, arguments);
	}
	return ws(t, e), vs(t, [
		{
			key: "getTickLineCoord",
			value: function(e) {
				var t = this.props, n = t.cx, r = t.cy, i = t.radius, a = t.orientation, o = t.tickSize || 8, s = tt(n, r, i, e.coordinate), c = tt(n, r, i + (a === "inner" ? -1 : 1) * o, e.coordinate);
				return {
					x1: s.x,
					y1: s.y,
					x2: c.x,
					y2: c.y
				};
			}
		},
		{
			key: "getTickTextAnchor",
			value: function(e) {
				var t = this.props.orientation, n = Math.cos(-e.coordinate * ks);
				return n > As ? t === "outer" ? "start" : "end" : n < -As ? t === "outer" ? "end" : "start" : "middle";
			}
		},
		{
			key: "renderAxisLine",
			value: function() {
				var e = this.props, t = e.cx, n = e.cy, r = e.radius, i = e.axisLine, a = e.axisLineType, o = hs(hs({}, k(this.props, !1)), {}, { fill: "none" }, k(i, !1));
				if (a === "circle") return /*#__PURE__*/ M.createElement(Ut, ps({ className: "recharts-polar-angle-axis-line" }, o, {
					cx: t,
					cy: n,
					r
				}));
				var s = this.props.ticks.map(function(e) {
					return tt(t, n, r, e.coordinate);
				});
				return /*#__PURE__*/ M.createElement(Co, ps({ className: "recharts-polar-angle-axis-line" }, o, { points: s }));
			}
		},
		{
			key: "renderTicks",
			value: function() {
				var e = this, r = this.props, i = r.ticks, a = r.tick, o = r.tickLine, s = r.tickFormatter, c = r.stroke, l = k(this.props, !1), u = k(a, !1), d = hs(hs({}, l), {}, { fill: "none" }, k(o, !1)), f = i.map(function(r, i) {
					var f = e.getTickLineCoord(r), p = hs(hs(hs({ textAnchor: e.getTickTextAnchor(r) }, l), {}, {
						stroke: "none",
						fill: c
					}, u), {}, {
						index: i,
						payload: r,
						x: f.x2,
						y: f.y2
					});
					return /*#__PURE__*/ M.createElement(A, ps({
						className: n("recharts-polar-angle-axis-tick", $e(a)),
						key: `tick-${r.coordinate}`
					}, gt(e.props, r, i)), o && /*#__PURE__*/ M.createElement("line", ps({ className: "recharts-polar-angle-axis-tick-line" }, d, f)), a && t.renderTickItem(a, p, s ? s(r.value, i) : r.value));
				});
				return /*#__PURE__*/ M.createElement(A, { className: "recharts-polar-angle-axis-ticks" }, f);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.ticks, r = e.radius, i = e.axisLine;
				return r <= 0 || !t || !t.length ? null : /*#__PURE__*/ M.createElement(A, { className: n("recharts-polar-angle-axis", this.props.className) }, i && this.renderAxisLine(), this.renderTicks());
			}
		}
	], [{
		key: "renderTickItem",
		value: function(e, t, n) {
			return /*#__PURE__*/ M.isValidElement(e) ? /*#__PURE__*/ M.cloneElement(e, t) : (0, B.default)(e) ? e(t) : /*#__PURE__*/ M.createElement(ot, ps({}, t, { className: "recharts-polar-angle-axis-tick-value" }), n);
		}
	}]);
}(Ir);
Es(js, "displayName", "PolarAngleAxis"), Es(js, "axisType", "angleAxis"), Es(js, "defaultProps", {
	type: "category",
	angleAxisId: 0,
	scale: "auto",
	cx: 0,
	cy: 0,
	orientation: "outer",
	axisLine: !0,
	tickLine: !0,
	tickSize: 8,
	tick: !0,
	hide: !1,
	allowDuplicatedCategory: !0
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/polar/Pie.js
var Ms = /* @__PURE__ */ e(It()), Ns;
function Ps(e) {
	"@babel/helpers - typeof";
	return Ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ps(e);
}
function Fs() {
	return Fs = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Fs.apply(this, arguments);
}
function Is(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function H(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Is(Object(n), !0).forEach(function(t) {
			qs(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Is(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ls(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Rs(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Js(r.key), r);
	}
}
function zs(e, t, n) {
	return t && Rs(e.prototype, t), n && Rs(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Bs(e, t, n) {
	return t = Ws(t), Vs(e, Us() ? Reflect.construct(t, n || [], Ws(e).constructor) : t.apply(e, n));
}
function Vs(e, t) {
	if (t && (Ps(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Hs(e);
}
function Hs(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Us() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Us = function() {
		return !!e;
	})();
}
function Ws(e) {
	return Ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Ws(e);
}
function Gs(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ks(e, t);
}
function Ks(e, t) {
	return Ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Ks(e, t);
}
function qs(e, t, n) {
	return t = Js(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Js(e) {
	var t = Ys(e, "string");
	return Ps(t) == "symbol" ? t : t + "";
}
function Ys(e, t) {
	if (Ps(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ps(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Xs = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Ls(this, t), n = Bs(this, t, [e]), qs(n, "pieRef", null), qs(n, "sectorRefs", []), qs(n, "id", bt("recharts-pie-")), qs(n, "handleAnimationEnd", function() {
			var e = n.props.onAnimationEnd;
			n.setState({ isAnimationFinished: !0 }), (0, B.default)(e) && e();
		}), qs(n, "handleAnimationStart", function() {
			var e = n.props.onAnimationStart;
			n.setState({ isAnimationFinished: !1 }), (0, B.default)(e) && e();
		}), n.state = {
			isAnimationFinished: !e.isAnimationActive,
			prevIsAnimationActive: e.isAnimationActive,
			prevAnimationId: e.animationId,
			sectorToFocus: 0
		}, n;
	}
	return Gs(t, e), zs(t, [
		{
			key: "isActiveIndex",
			value: function(e) {
				var t = this.props.activeIndex;
				return Array.isArray(t) ? t.indexOf(e) !== -1 : e === t;
			}
		},
		{
			key: "hasActiveIndex",
			value: function() {
				var e = this.props.activeIndex;
				return Array.isArray(e) ? e.length !== 0 : e || e === 0;
			}
		},
		{
			key: "renderLabels",
			value: function(e) {
				if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
				var n = this.props, r = n.label, i = n.labelLine, a = n.dataKey, o = n.valueKey, s = k(this.props, !1), c = k(r, !1), l = k(i, !1), u = r && r.offsetRadius || 20, d = e.map(function(e, n) {
					var d = (e.startAngle + e.endAngle) / 2, f = tt(e.cx, e.cy, e.outerRadius + u, d), p = H(H(H(H({}, s), e), {}, { stroke: "none" }, c), {}, {
						index: n,
						textAnchor: t.getTextAnchor(f.x, e.cx)
					}, f), m = H(H(H(H({}, s), e), {}, {
						fill: "none",
						stroke: e.fill
					}, l), {}, {
						index: n,
						points: [tt(e.cx, e.cy, e.outerRadius, d), f]
					}), h = a;
					return (0, V.default)(a) && (0, V.default)(o) ? h = "value" : (0, V.default)(a) && (h = o), /*#__PURE__*/ M.createElement(A, { key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${n}` }, i && t.renderLabelLineItem(i, m, "line"), t.renderLabelItem(r, p, rt(e, h)));
				});
				return /*#__PURE__*/ M.createElement(A, { className: "recharts-pie-labels" }, d);
			}
		},
		{
			key: "renderSectorsStatically",
			value: function(e) {
				var t = this, n = this.props, r = n.activeShape, i = n.blendStroke, a = n.inactiveShape;
				return e.map(function(n, o) {
					if (n?.startAngle === 0 && n?.endAngle === 0 && e.length !== 1) return null;
					var s = t.isActiveIndex(o), c = a && t.hasActiveIndex() ? a : null, l = s ? r : c, u = H(H({}, n), {}, {
						stroke: i ? n.fill : n.stroke,
						tabIndex: -1
					});
					return /*#__PURE__*/ M.createElement(A, Fs({
						ref: function(e) {
							e && !t.sectorRefs.includes(e) && t.sectorRefs.push(e);
						},
						tabIndex: -1,
						className: "recharts-pie-sector"
					}, gt(t.props, n, o), { key: `sector-${n?.startAngle}-${n?.endAngle}-${n.midAngle}-${o}` }), /*#__PURE__*/ M.createElement(Ve, Fs({
						option: l,
						isActive: s,
						shapeType: "sector"
					}, u)));
				});
			}
		},
		{
			key: "renderSectorsWithAnimation",
			value: function() {
				var e = this, t = this.props, n = t.sectors, r = t.isAnimationActive, i = t.animationBegin, a = t.animationDuration, o = t.animationEasing, s = t.animationId, c = this.state, l = c.prevSectors, u = c.prevIsAnimationActive;
				return /*#__PURE__*/ M.createElement(Ue, {
					begin: i,
					duration: a,
					isActive: r,
					easing: o,
					from: { t: 0 },
					to: { t: 1 },
					key: `pie-${s}-${u}`,
					onAnimationStart: this.handleAnimationStart,
					onAnimationEnd: this.handleAnimationEnd
				}, function(t) {
					var r = t.t, i = [], a = (n && n[0]).startAngle;
					return n.forEach(function(e, t) {
						var n = l && l[t], o = t > 0 ? (0, Ms.default)(e, "paddingAngle", 0) : 0;
						if (n) {
							var s = vt(n.endAngle - n.startAngle, e.endAngle - e.startAngle), c = H(H({}, e), {}, {
								startAngle: a + o,
								endAngle: a + s(r) + o
							});
							i.push(c), a = c.endAngle;
						} else {
							var u = e.endAngle, d = e.startAngle, f = vt(0, u - d)(r), p = H(H({}, e), {}, {
								startAngle: a + o,
								endAngle: a + f + o
							});
							i.push(p), a = p.endAngle;
						}
					}), /*#__PURE__*/ M.createElement(A, null, e.renderSectorsStatically(i));
				});
			}
		},
		{
			key: "attachKeyboardHandlers",
			value: function(e) {
				var t = this;
				e.onkeydown = function(e) {
					if (!e.altKey) switch (e.key) {
						case "ArrowLeft":
							var n = ++t.state.sectorToFocus % t.sectorRefs.length;
							t.sectorRefs[n].focus(), t.setState({ sectorToFocus: n });
							break;
						case "ArrowRight":
							var r = --t.state.sectorToFocus < 0 ? t.sectorRefs.length - 1 : t.state.sectorToFocus % t.sectorRefs.length;
							t.sectorRefs[r].focus(), t.setState({ sectorToFocus: r });
							break;
						case "Escape": t.sectorRefs[t.state.sectorToFocus].blur(), t.setState({ sectorToFocus: 0 });
					}
				};
			}
		},
		{
			key: "renderSectors",
			value: function() {
				var e = this.props, t = e.sectors, n = e.isAnimationActive, r = this.state.prevSectors;
				return n && t && t.length && (!r || !(0, so.default)(r, t)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(t);
			}
		},
		{
			key: "componentDidMount",
			value: function() {
				this.pieRef && this.attachKeyboardHandlers(this.pieRef);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this, t = this.props, r = t.hide, i = t.sectors, a = t.className, o = t.label, s = t.cx, c = t.cy, l = t.innerRadius, u = t.outerRadius, d = t.isAnimationActive, f = this.state.isAnimationFinished;
				if (r || !i || !i.length || !jt(s) || !jt(c) || !jt(l) || !jt(u)) return null;
				var p = n("recharts-pie", a);
				return /*#__PURE__*/ M.createElement(A, {
					tabIndex: this.props.rootTabIndex,
					className: p,
					ref: function(t) {
						e.pieRef = t;
					}
				}, this.renderSectors(), o && this.renderLabels(i), Re.renderCallByParent(this.props, null, !1), (!d || f) && et.renderCallByParent(this.props, i, !1));
			}
		}
	], [
		{
			key: "getDerivedStateFromProps",
			value: function(e, t) {
				return t.prevIsAnimationActive === e.isAnimationActive ? e.isAnimationActive && e.animationId !== t.prevAnimationId ? {
					prevAnimationId: e.animationId,
					curSectors: e.sectors,
					prevSectors: t.curSectors,
					isAnimationFinished: !0
				} : e.sectors === t.curSectors ? null : {
					curSectors: e.sectors,
					isAnimationFinished: !0
				} : {
					prevIsAnimationActive: e.isAnimationActive,
					prevAnimationId: e.animationId,
					curSectors: e.sectors,
					prevSectors: [],
					isAnimationFinished: !0
				};
			}
		},
		{
			key: "getTextAnchor",
			value: function(e, t) {
				return e > t ? "start" : e < t ? "end" : "middle";
			}
		},
		{
			key: "renderLabelLineItem",
			value: function(e, t, r) {
				if (/*#__PURE__*/ M.isValidElement(e)) return /*#__PURE__*/ M.cloneElement(e, t);
				if ((0, B.default)(e)) return e(t);
				var i = n("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
				return /*#__PURE__*/ M.createElement(He, Fs({}, t, {
					key: r,
					type: "linear",
					className: i
				}));
			}
		},
		{
			key: "renderLabelItem",
			value: function(e, t, r) {
				if (/*#__PURE__*/ M.isValidElement(e)) return /*#__PURE__*/ M.cloneElement(e, t);
				var i = r;
				if ((0, B.default)(e) && (i = e(t), /*#__PURE__*/ M.isValidElement(i))) return i;
				var a = n("recharts-pie-label-text", typeof e != "boolean" && !(0, B.default)(e) ? e.className : "");
				return /*#__PURE__*/ M.createElement(ot, Fs({}, t, {
					alignmentBaseline: "middle",
					className: a
				}), i);
			}
		}
	]);
}(Ir);
Ns = Xs, qs(Xs, "displayName", "Pie"), qs(Xs, "defaultProps", {
	stroke: "#fff",
	fill: "#808080",
	legendType: "rect",
	cx: "50%",
	cy: "50%",
	startAngle: 0,
	endAngle: 360,
	innerRadius: 0,
	outerRadius: "80%",
	paddingAngle: 0,
	labelLine: !0,
	hide: !1,
	minAngle: 0,
	isAnimationActive: !Ye.isSsr,
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	nameKey: "name",
	blendStroke: !1,
	rootTabIndex: 0
}), qs(Xs, "parseDeltaAngle", function(e, t) {
	return Vt(t - e) * Math.min(Math.abs(t - e), 360);
}), qs(Xs, "getRealPieData", function(e) {
	var t = e.data, n = e.children, r = k(e, !1), i = Rt(n, ut);
	return t && t.length ? t.map(function(e, t) {
		return H(H(H({ payload: e }, r), e), i && i[t] && i[t].props);
	}) : i && i.length ? i.map(function(e) {
		return H(H({}, r), e.props);
	}) : [];
}), qs(Xs, "parseCoordinateOfPie", function(e, t) {
	var n = t.top, r = t.left, i = t.width, a = t.height, o = Qe(i, a);
	return {
		cx: r + zt(e.cx, i, i / 2),
		cy: n + zt(e.cy, a, a / 2),
		innerRadius: zt(e.innerRadius, o, 0),
		outerRadius: zt(e.outerRadius, o, o * .8),
		maxRadius: e.maxRadius || Math.sqrt(i * i + a * a) / 2
	};
}), qs(Xs, "getComposedData", function(e) {
	var t = e.item, n = e.offset, r = t.type.defaultProps === void 0 ? t.props : H(H({}, t.type.defaultProps), t.props), i = Ns.getRealPieData(r);
	if (!i || !i.length) return null;
	var a = r.cornerRadius, o = r.startAngle, s = r.endAngle, c = r.paddingAngle, l = r.dataKey, u = r.nameKey, d = r.valueKey, f = r.tooltipType, p = Math.abs(r.minAngle), m = Ns.parseCoordinateOfPie(r, n), h = Ns.parseDeltaAngle(o, s), g = Math.abs(h), _ = l;
	(0, V.default)(l) && (0, V.default)(d) ? (xt(!1, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0"), _ = "value") : (0, V.default)(l) && (xt(!1, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0"), _ = d);
	var v = i.filter(function(e) {
		return rt(e, _, 0) !== 0;
	}).length, y = (g >= 360 ? v : v - 1) * c, b = g - v * p - y, x = i.reduce(function(e, t) {
		var n = rt(t, _, 0);
		return e + (jt(n) ? n : 0);
	}, 0), S;
	if (x > 0) {
		var C;
		S = i.map(function(e, t) {
			var n = rt(e, _, 0), r = rt(e, u, t), i = (jt(n) ? n : 0) / x, s = t ? C.endAngle + Vt(h) * c * (n === 0 ? 0 : 1) : o, l = s + Vt(h) * ((n === 0 ? 0 : p) + i * b), d = (s + l) / 2, g = (m.innerRadius + m.outerRadius) / 2;
			return C = H(H(H({
				percent: i,
				cornerRadius: a,
				name: r,
				tooltipPayload: [{
					name: r,
					value: n,
					payload: e,
					dataKey: _,
					type: f
				}],
				midAngle: d,
				middleRadius: g,
				tooltipPosition: tt(m.cx, m.cy, g, d)
			}, e), m), {}, {
				value: rt(e, _),
				startAngle: s,
				endAngle: l,
				payload: e,
				paddingAngle: Vt(h) * c
			}), C;
		});
	}
	return H(H({}, m), {}, {
		sectors: S,
		data: i
	});
});
//#endregion
//#region ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/head.js
var Zs = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return e && e.length ? e[0] : void 0;
	}
	t.exports = n;
})), Qs = /* @__PURE__ */ t(((e, t) => {
	t.exports = Zs();
})), $s = /* @__PURE__ */ e(kt()), ec = /* @__PURE__ */ e(Qs()), tc = ["key"];
function nc(e) {
	"@babel/helpers - typeof";
	return nc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, nc(e);
}
function rc(e, t) {
	if (e == null) return {};
	var n = ic(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function ic(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function ac() {
	return ac = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ac.apply(this, arguments);
}
function oc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function sc(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? oc(Object(n), !0).forEach(function(t) {
			vc(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oc(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function cc(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function lc(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, yc(r.key), r);
	}
}
function uc(e, t, n) {
	return t && lc(e.prototype, t), n && lc(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dc(e, t, n) {
	return t = hc(t), fc(e, mc() ? Reflect.construct(t, n || [], hc(e).constructor) : t.apply(e, n));
}
function fc(e, t) {
	if (t && (nc(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return pc(e);
}
function pc(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function mc() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (mc = function() {
		return !!e;
	})();
}
function hc(e) {
	return hc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, hc(e);
}
function gc(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _c(e, t);
}
function _c(e, t) {
	return _c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, _c(e, t);
}
function vc(e, t, n) {
	return t = yc(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function yc(e) {
	var t = bc(e, "string");
	return nc(t) == "symbol" ? t : t + "";
}
function bc(e, t) {
	if (nc(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (nc(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var xc = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		cc(this, t);
		var n = [...arguments];
		return e = dc(this, t, [].concat(n)), vc(e, "state", { isAnimationFinished: !1 }), vc(e, "handleAnimationEnd", function() {
			var t = e.props.onAnimationEnd;
			e.setState({ isAnimationFinished: !0 }), (0, B.default)(t) && t();
		}), vc(e, "handleAnimationStart", function() {
			var t = e.props.onAnimationStart;
			e.setState({ isAnimationFinished: !1 }), (0, B.default)(t) && t();
		}), vc(e, "handleMouseEnter", function(t) {
			var n = e.props.onMouseEnter;
			n && n(e.props, t);
		}), vc(e, "handleMouseLeave", function(t) {
			var n = e.props.onMouseLeave;
			n && n(e.props, t);
		}), e;
	}
	return gc(t, e), uc(t, [
		{
			key: "renderDots",
			value: function(e) {
				var n = this.props, r = n.dot, i = n.dataKey, a = k(this.props, !1), o = k(r, !0), s = e.map(function(e, n) {
					var s = sc(sc(sc({
						key: `dot-${n}`,
						r: 3
					}, a), o), {}, {
						dataKey: i,
						cx: e.x,
						cy: e.y,
						index: n,
						payload: e
					});
					return t.renderDotItem(r, s);
				});
				return /*#__PURE__*/ M.createElement(A, { className: "recharts-radar-dots" }, s);
			}
		},
		{
			key: "renderPolygonStatically",
			value: function(e) {
				var t = this.props, n = t.shape, r = t.dot, i = t.isRange, a = t.baseLinePoints, o = t.connectNulls, s = /*#__PURE__*/ M.isValidElement(n) ? /*#__PURE__*/ M.cloneElement(n, sc(sc({}, this.props), {}, { points: e })) : (0, B.default)(n) ? n(sc(sc({}, this.props), {}, { points: e })) : /*#__PURE__*/ M.createElement(Co, ac({}, k(this.props, !0), {
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					points: e,
					baseLinePoints: i ? a : null,
					connectNulls: o
				}));
				return /*#__PURE__*/ M.createElement(A, { className: "recharts-radar-polygon" }, s, r ? this.renderDots(e) : null);
			}
		},
		{
			key: "renderPolygonWithAnimation",
			value: function() {
				var e = this, t = this.props, n = t.points, r = t.isAnimationActive, i = t.animationBegin, a = t.animationDuration, o = t.animationEasing, s = t.animationId, c = this.state.prevPoints;
				return /*#__PURE__*/ M.createElement(Ue, {
					begin: i,
					duration: a,
					isActive: r,
					easing: o,
					from: { t: 0 },
					to: { t: 1 },
					key: `radar-${s}`,
					onAnimationEnd: this.handleAnimationEnd,
					onAnimationStart: this.handleAnimationStart
				}, function(t) {
					var r = t.t, i = c && c.length / n.length, a = n.map(function(e, t) {
						var n = c && c[Math.floor(t * i)];
						if (n) {
							var a = vt(n.x, e.x), o = vt(n.y, e.y);
							return sc(sc({}, e), {}, {
								x: a(r),
								y: o(r)
							});
						}
						var s = vt(e.cx, e.x), l = vt(e.cy, e.y);
						return sc(sc({}, e), {}, {
							x: s(r),
							y: l(r)
						});
					});
					return e.renderPolygonStatically(a);
				});
			}
		},
		{
			key: "renderPolygon",
			value: function() {
				var e = this.props, t = e.points, n = e.isAnimationActive, r = e.isRange, i = this.state.prevPoints;
				return n && t && t.length && !r && (!i || !(0, so.default)(i, t)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(t);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.hide, r = e.className, i = e.points, a = e.isAnimationActive;
				if (t || !i || !i.length) return null;
				var o = this.state.isAnimationFinished, s = n("recharts-radar", r);
				return /*#__PURE__*/ M.createElement(A, { className: s }, this.renderPolygon(), (!a || o) && et.renderCallByParent(this.props, i));
			}
		}
	], [{
		key: "getDerivedStateFromProps",
		value: function(e, t) {
			return e.animationId === t.prevAnimationId ? e.points === t.curPoints ? null : { curPoints: e.points } : {
				prevAnimationId: e.animationId,
				curPoints: e.points,
				prevPoints: t.curPoints
			};
		}
	}, {
		key: "renderDotItem",
		value: function(e, t) {
			var r;
			if (/*#__PURE__*/ M.isValidElement(e)) r = /*#__PURE__*/ M.cloneElement(e, t);
			else if ((0, B.default)(e)) r = e(t);
			else {
				var i = t.key, a = rc(t, tc);
				r = /*#__PURE__*/ M.createElement(Ut, ac({}, a, {
					key: i,
					className: n("recharts-radar-dot", typeof e == "boolean" ? "" : e.className)
				}));
			}
			return r;
		}
	}]);
}(Ir);
vc(xc, "displayName", "Radar"), vc(xc, "defaultProps", {
	angleAxisId: 0,
	radiusAxisId: 0,
	hide: !1,
	activeDot: !0,
	dot: !1,
	legendType: "rect",
	isAnimationActive: !Ye.isSsr,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
}), vc(xc, "getComposedData", function(e) {
	var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, i = e.dataKey, a = e.bandSize, o = n.cx, s = n.cy, c = !1, l = [], u = n.type === "number" ? 0 : a ?? 0;
	r.forEach(function(e, r) {
		var a = rt(e, n.dataKey, r), d = rt(e, i), f = n.scale(a) + u, p = Array.isArray(d) ? (0, $s.default)(d) : d, m = (0, V.default)(p) ? void 0 : t.scale(p);
		Array.isArray(d) && d.length >= 2 && (c = !0), l.push(sc(sc({}, tt(o, s, m, f)), {}, {
			name: a,
			value: d,
			cx: o,
			cy: s,
			radius: m,
			angle: f,
			payload: e
		}));
	});
	var d = [];
	return c && l.forEach(function(e) {
		if (Array.isArray(e.value)) {
			var n = (0, ec.default)(e.value), r = (0, V.default)(n) ? void 0 : t.scale(n);
			d.push(sc(sc({}, e), {}, { radius: r }, tt(o, s, r, e.angle)));
		} else d.push(e);
	}), {
		points: l,
		isRange: c,
		baseLinePoints: d
	};
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/CartesianGrid.js
var Sc = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], Cc = ["offset"];
function wc(e) {
	"@babel/helpers - typeof";
	return wc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, wc(e);
}
function Tc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ec(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Tc(Object(n), !0).forEach(function(t) {
			Dc(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tc(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Dc(e, t, n) {
	return t = Oc(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Oc(e) {
	var t = kc(e, "string");
	return wc(t) == "symbol" ? t : t + "";
}
function kc(e, t) {
	if (wc(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (wc(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ac() {
	return Ac = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ac.apply(this, arguments);
}
function jc(e, t) {
	if (e == null) return {};
	var n = Mc(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Mc(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
var Nc = function(e) {
	var t = e.fill;
	if (!t || t === "none") return null;
	var n = e.fillOpacity, r = e.x, i = e.y, a = e.width, o = e.height, s = e.ry;
	return /*#__PURE__*/ M.createElement("rect", {
		x: r,
		y: i,
		ry: s,
		width: a,
		height: o,
		stroke: "none",
		fill: t,
		fillOpacity: n,
		className: "recharts-cartesian-grid-bg"
	});
};
function Pc(e, t) {
	var n;
	if (/*#__PURE__*/ M.isValidElement(e)) n = /*#__PURE__*/ M.cloneElement(e, t);
	else if ((0, B.default)(e)) n = e(t);
	else {
		var r = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, c = jc(t, Sc), l = k(c, !1);
		l.offset;
		var u = jc(l, Cc);
		n = /*#__PURE__*/ M.createElement("line", Ac({}, u, {
			x1: r,
			y1: i,
			x2: a,
			y2: o,
			fill: "none",
			key: s
		}));
	}
	return n;
}
function Fc(e) {
	var t = e.x, n = e.width, r = e.horizontal, i = r === void 0 || r, a = e.horizontalPoints;
	if (!i || !a || !a.length) return null;
	var o = a.map(function(r, a) {
		return Pc(i, Ec(Ec({}, e), {}, {
			x1: t,
			y1: r,
			x2: t + n,
			y2: r,
			key: `line-${a}`,
			index: a
		}));
	});
	return /*#__PURE__*/ M.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, o);
}
function Ic(e) {
	var t = e.y, n = e.height, r = e.vertical, i = r === void 0 || r, a = e.verticalPoints;
	if (!i || !a || !a.length) return null;
	var o = a.map(function(r, a) {
		return Pc(i, Ec(Ec({}, e), {}, {
			x1: r,
			y1: t,
			x2: r,
			y2: t + n,
			key: `line-${a}`,
			index: a
		}));
	});
	return /*#__PURE__*/ M.createElement("g", { className: "recharts-cartesian-grid-vertical" }, o);
}
function Lc(e) {
	var t = e.horizontalFill, n = e.fillOpacity, r = e.x, i = e.y, a = e.width, o = e.height, s = e.horizontalPoints, c = e.horizontal;
	if (!(c === void 0 || c) || !t || !t.length) return null;
	var l = s.map(function(e) {
		return Math.round(e + i - i);
	}).sort(function(e, t) {
		return e - t;
	});
	i !== l[0] && l.unshift(0);
	var u = l.map(function(e, s) {
		var c = l[s + 1] ? l[s + 1] - e : i + o - e;
		if (c <= 0) return null;
		var u = s % t.length;
		return /*#__PURE__*/ M.createElement("rect", {
			key: `react-${s}`,
			y: e,
			x: r,
			height: c,
			width: a,
			stroke: "none",
			fill: t[u],
			fillOpacity: n,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /*#__PURE__*/ M.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, u);
}
function Rc(e) {
	var t = e.vertical, n = t === void 0 || t, r = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, s = e.width, c = e.height, l = e.verticalPoints;
	if (!n || !r || !r.length) return null;
	var u = l.map(function(e) {
		return Math.round(e + a - a);
	}).sort(function(e, t) {
		return e - t;
	});
	a !== u[0] && u.unshift(0);
	var d = u.map(function(e, t) {
		var n = u[t + 1] ? u[t + 1] - e : a + s - e;
		if (n <= 0) return null;
		var l = t % r.length;
		return /*#__PURE__*/ M.createElement("rect", {
			key: `react-${t}`,
			x: e,
			y: o,
			width: n,
			height: c,
			stroke: "none",
			fill: r[l],
			fillOpacity: i,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /*#__PURE__*/ M.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, d);
}
var zc = function(e, t) {
	var n = e.xAxis, r = e.width, i = e.height, a = e.offset;
	return Je(Tt(Ec(Ec(Ec({}, Mt.defaultProps), n), {}, {
		ticks: Xe(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	})), a.left, a.left + a.width, t);
}, Bc = function(e, t) {
	var n = e.yAxis, r = e.width, i = e.height, a = e.offset;
	return Je(Tt(Ec(Ec(Ec({}, Mt.defaultProps), n), {}, {
		ticks: Xe(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	})), a.top, a.top + a.height, t);
}, Vc = {
	horizontal: !0,
	vertical: !0,
	horizontalPoints: [],
	verticalPoints: [],
	stroke: "#ccc",
	fill: "none",
	verticalFill: [],
	horizontalFill: []
};
function Hc(e) {
	var t = Ht(), n = mt(), r = Gt(), i = Ec(Ec({}, e), {}, {
		stroke: e.stroke ?? Vc.stroke,
		fill: e.fill ?? Vc.fill,
		horizontal: e.horizontal ?? Vc.horizontal,
		horizontalFill: e.horizontalFill ?? Vc.horizontalFill,
		vertical: e.vertical ?? Vc.vertical,
		verticalFill: e.verticalFill ?? Vc.verticalFill,
		x: jt(e.x) ? e.x : r.left,
		y: jt(e.y) ? e.y : r.top,
		width: jt(e.width) ? e.width : r.width,
		height: jt(e.height) ? e.height : r.height
	}), a = i.x, o = i.y, s = i.width, c = i.height, l = i.syncWithTicks, u = i.horizontalValues, d = i.verticalValues, f = wt(), p = _t();
	if (!jt(s) || s <= 0 || !jt(c) || c <= 0 || !jt(a) || a !== +a || !jt(o) || o !== +o) return null;
	var m = i.verticalCoordinatesGenerator || zc, h = i.horizontalCoordinatesGenerator || Bc, g = i.horizontalPoints, _ = i.verticalPoints;
	if ((!g || !g.length) && (0, B.default)(h)) {
		var v = u && u.length, y = h({
			yAxis: p ? Ec(Ec({}, p), {}, { ticks: v ? u : p.ticks }) : void 0,
			width: t,
			height: n,
			offset: r
		}, v ? !0 : l);
		xt(Array.isArray(y), `horizontalCoordinatesGenerator should return Array but instead it returned [${wc(y)}]`), Array.isArray(y) && (g = y);
	}
	if ((!_ || !_.length) && (0, B.default)(m)) {
		var b = d && d.length, x = m({
			xAxis: f ? Ec(Ec({}, f), {}, { ticks: b ? d : f.ticks }) : void 0,
			width: t,
			height: n,
			offset: r
		}, b ? !0 : l);
		xt(Array.isArray(x), `verticalCoordinatesGenerator should return Array but instead it returned [${wc(x)}]`), Array.isArray(x) && (_ = x);
	}
	return /*#__PURE__*/ M.createElement("g", { className: "recharts-cartesian-grid" }, /*#__PURE__*/ M.createElement(Nc, {
		fill: i.fill,
		fillOpacity: i.fillOpacity,
		x: i.x,
		y: i.y,
		width: i.width,
		height: i.height,
		ry: i.ry
	}), /*#__PURE__*/ M.createElement(Fc, Ac({}, i, {
		offset: r,
		horizontalPoints: g,
		xAxis: f,
		yAxis: p
	})), /*#__PURE__*/ M.createElement(Ic, Ac({}, i, {
		offset: r,
		verticalPoints: _,
		xAxis: f,
		yAxis: p
	})), /*#__PURE__*/ M.createElement(Lc, Ac({}, i, { horizontalPoints: g })), /*#__PURE__*/ M.createElement(Rc, Ac({}, i, { verticalPoints: _ })));
}
Hc.displayName = "CartesianGrid";
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Line.js
var Uc = [
	"type",
	"layout",
	"connectNulls",
	"ref"
], Wc = ["key"];
function Gc(e) {
	"@babel/helpers - typeof";
	return Gc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Gc(e);
}
function Kc(e, t) {
	if (e == null) return {};
	var n = qc(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function qc(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Jc() {
	return Jc = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Jc.apply(this, arguments);
}
function Yc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Xc(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Yc(Object(n), !0).forEach(function(t) {
			pl(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yc(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Zc(e) {
	return tl(e) || el(e) || $c(e) || Qc();
}
function Qc() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $c(e, t) {
	if (e) {
		if (typeof e == "string") return nl(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nl(e, t);
	}
}
function el(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function tl(e) {
	if (Array.isArray(e)) return nl(e);
}
function nl(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function rl(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function il(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ml(r.key), r);
	}
}
function al(e, t, n) {
	return t && il(e.prototype, t), n && il(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ol(e, t, n) {
	return t = ul(t), sl(e, ll() ? Reflect.construct(t, n || [], ul(e).constructor) : t.apply(e, n));
}
function sl(e, t) {
	if (t && (Gc(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return cl(e);
}
function cl(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ll() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ll = function() {
		return !!e;
	})();
}
function ul(e) {
	return ul = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, ul(e);
}
function dl(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && fl(e, t);
}
function fl(e, t) {
	return fl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, fl(e, t);
}
function pl(e, t, n) {
	return t = ml(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ml(e) {
	var t = hl(e, "string");
	return Gc(t) == "symbol" ? t : t + "";
}
function hl(e, t) {
	if (Gc(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Gc(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var gl = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		rl(this, t);
		var n = [...arguments];
		return e = ol(this, t, [].concat(n)), pl(e, "state", {
			isAnimationFinished: !0,
			totalLength: 0
		}), pl(e, "generateSimpleStrokeDasharray", function(e, t) {
			return `${t}px ${e - t}px`;
		}), pl(e, "getStrokeDasharray", function(n, r, i) {
			var a = i.reduce(function(e, t) {
				return e + t;
			});
			if (!a) return e.generateSimpleStrokeDasharray(r, n);
			for (var o = Math.floor(n / a), s = n % a, c = r - n, l = [], u = 0, d = 0; u < i.length; d += i[u], ++u) if (d + i[u] > s) {
				l = [].concat(Zc(i.slice(0, u)), [s - d]);
				break;
			}
			var f = l.length % 2 == 0 ? [0, c] : [c];
			return [].concat(Zc(t.repeat(i, o)), Zc(l), f).map(function(e) {
				return `${e}px`;
			}).join(", ");
		}), pl(e, "id", bt("recharts-line-")), pl(e, "pathRef", function(t) {
			e.mainCurve = t;
		}), pl(e, "handleAnimationEnd", function() {
			e.setState({ isAnimationFinished: !0 }), e.props.onAnimationEnd && e.props.onAnimationEnd();
		}), pl(e, "handleAnimationStart", function() {
			e.setState({ isAnimationFinished: !1 }), e.props.onAnimationStart && e.props.onAnimationStart();
		}), e;
	}
	return dl(t, e), al(t, [
		{
			key: "componentDidMount",
			value: function() {
				if (this.props.isAnimationActive) {
					var e = this.getTotalLength();
					this.setState({ totalLength: e });
				}
			}
		},
		{
			key: "componentDidUpdate",
			value: function() {
				if (this.props.isAnimationActive) {
					var e = this.getTotalLength();
					e !== this.state.totalLength && this.setState({ totalLength: e });
				}
			}
		},
		{
			key: "getTotalLength",
			value: function() {
				var e = this.mainCurve;
				try {
					return e && e.getTotalLength && e.getTotalLength() || 0;
				} catch {
					return 0;
				}
			}
		},
		{
			key: "renderErrorBar",
			value: function(e, t) {
				if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
				var n = this.props, r = n.points, i = n.xAxis, a = n.yAxis, o = n.layout, s = n.children, c = Rt(s, Kt);
				if (!c) return null;
				var l = function(e, t) {
					return {
						x: e.x,
						y: e.y,
						value: e.value,
						errorVal: rt(e.payload, t)
					};
				}, u = { clipPath: e ? `url(#clipPath-${t})` : null };
				return /*#__PURE__*/ M.createElement(A, u, c.map(function(e) {
					return /*#__PURE__*/ M.cloneElement(e, {
						key: `bar-${e.props.dataKey}`,
						data: r,
						xAxis: i,
						yAxis: a,
						layout: o,
						dataPointFormatter: l
					});
				}));
			}
		},
		{
			key: "renderDots",
			value: function(e, n, r) {
				if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
				var i = this.props, a = i.dot, o = i.points, s = i.dataKey, c = k(this.props, !1), l = k(a, !0), u = o.map(function(e, n) {
					var r = Xc(Xc(Xc({
						key: `dot-${n}`,
						r: 3
					}, c), l), {}, {
						value: e.value,
						dataKey: s,
						cx: e.x,
						cy: e.y,
						index: n,
						payload: e.payload
					});
					return t.renderDotItem(a, r);
				}), d = { clipPath: e ? `url(#clipPath-${n ? "" : "dots-"}${r})` : null };
				return /*#__PURE__*/ M.createElement(A, Jc({
					className: "recharts-line-dots",
					key: "dots"
				}, d), u);
			}
		},
		{
			key: "renderCurveStatically",
			value: function(e, t, n, r) {
				var i = this.props, a = i.type, o = i.layout, s = i.connectNulls;
				i.ref;
				var c = Kc(i, Uc), l = Xc(Xc(Xc({}, k(c, !0)), {}, {
					fill: "none",
					className: "recharts-line-curve",
					clipPath: t ? `url(#clipPath-${n})` : null,
					points: e
				}, r), {}, {
					type: a,
					layout: o,
					connectNulls: s
				});
				return /*#__PURE__*/ M.createElement(He, Jc({}, l, { pathRef: this.pathRef }));
			}
		},
		{
			key: "renderCurveWithAnimation",
			value: function(e, t) {
				var n = this, r = this.props, i = r.points, a = r.strokeDasharray, o = r.isAnimationActive, s = r.animationBegin, c = r.animationDuration, l = r.animationEasing, u = r.animationId, d = r.animateNewValues, f = r.width, p = r.height, m = this.state, h = m.prevPoints, g = m.totalLength;
				return /*#__PURE__*/ M.createElement(Ue, {
					begin: s,
					duration: c,
					isActive: o,
					easing: l,
					from: { t: 0 },
					to: { t: 1 },
					key: `line-${u}`,
					onAnimationEnd: this.handleAnimationEnd,
					onAnimationStart: this.handleAnimationStart
				}, function(r) {
					var o = r.t;
					if (h) {
						var s = h.length / i.length, c = i.map(function(e, t) {
							var n = Math.floor(t * s);
							if (h[n]) {
								var r = h[n], i = vt(r.x, e.x), a = vt(r.y, e.y);
								return Xc(Xc({}, e), {}, {
									x: i(o),
									y: a(o)
								});
							}
							if (d) {
								var c = vt(f * 2, e.x), l = vt(p / 2, e.y);
								return Xc(Xc({}, e), {}, {
									x: c(o),
									y: l(o)
								});
							}
							return Xc(Xc({}, e), {}, {
								x: e.x,
								y: e.y
							});
						});
						return n.renderCurveStatically(c, e, t);
					}
					var l = vt(0, g)(o), u;
					if (a) {
						var m = `${a}`.split(/[,\s]+/gim).map(function(e) {
							return parseFloat(e);
						});
						u = n.getStrokeDasharray(l, g, m);
					} else u = n.generateSimpleStrokeDasharray(g, l);
					return n.renderCurveStatically(i, e, t, { strokeDasharray: u });
				});
			}
		},
		{
			key: "renderCurve",
			value: function(e, t) {
				var n = this.props, r = n.points, i = n.isAnimationActive, a = this.state, o = a.prevPoints, s = a.totalLength;
				return i && r && r.length && (!o && s > 0 || !(0, so.default)(o, r)) ? this.renderCurveWithAnimation(e, t) : this.renderCurveStatically(r, e, t);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.hide, r = e.dot, i = e.points, a = e.className, o = e.xAxis, s = e.yAxis, c = e.top, l = e.left, u = e.width, d = e.height, f = e.isAnimationActive, p = e.id;
				if (t || !i || !i.length) return null;
				var m = this.state.isAnimationFinished, h = i.length === 1, g = n("recharts-line", a), _ = o && o.allowDataOverflow, v = s && s.allowDataOverflow, y = _ || v, b = (0, V.default)(p) ? this.id : p, x = k(r, !1) ?? {
					r: 3,
					strokeWidth: 2
				}, S = x.r, C = S === void 0 ? 3 : S, w = x.strokeWidth, T = w === void 0 ? 2 : w, E = (Dt(r) ? r : {}).clipDot, ee = E === void 0 || E, te = C * 2 + T;
				return /*#__PURE__*/ M.createElement(A, { className: g }, _ || v ? /*#__PURE__*/ M.createElement("defs", null, /*#__PURE__*/ M.createElement("clipPath", { id: `clipPath-${b}` }, /*#__PURE__*/ M.createElement("rect", {
					x: _ ? l : l - u / 2,
					y: v ? c : c - d / 2,
					width: _ ? u : u * 2,
					height: v ? d : d * 2
				})), !ee && /*#__PURE__*/ M.createElement("clipPath", { id: `clipPath-dots-${b}` }, /*#__PURE__*/ M.createElement("rect", {
					x: l - te / 2,
					y: c - te / 2,
					width: u + te,
					height: d + te
				}))) : null, !h && this.renderCurve(y, b), this.renderErrorBar(y, b), (h || r) && this.renderDots(y, ee, b), (!f || m) && et.renderCallByParent(this.props, i));
			}
		}
	], [
		{
			key: "getDerivedStateFromProps",
			value: function(e, t) {
				return e.animationId === t.prevAnimationId ? e.points === t.curPoints ? null : { curPoints: e.points } : {
					prevAnimationId: e.animationId,
					curPoints: e.points,
					prevPoints: t.curPoints
				};
			}
		},
		{
			key: "repeat",
			value: function(e, t) {
				for (var n = e.length % 2 == 0 ? e : [].concat(Zc(e), [0]), r = [], i = 0; i < t; ++i) r = [].concat(Zc(r), Zc(n));
				return r;
			}
		},
		{
			key: "renderDotItem",
			value: function(e, t) {
				var r;
				if (/*#__PURE__*/ M.isValidElement(e)) r = /*#__PURE__*/ M.cloneElement(e, t);
				else if ((0, B.default)(e)) r = e(t);
				else {
					var i = t.key, a = Kc(t, Wc), o = n("recharts-line-dot", typeof e == "boolean" ? "" : e.className);
					r = /*#__PURE__*/ M.createElement(Ut, Jc({ key: i }, a, { className: o }));
				}
				return r;
			}
		}
	]);
}(Ir);
pl(gl, "displayName", "Line"), pl(gl, "defaultProps", {
	xAxisId: 0,
	yAxisId: 0,
	connectNulls: !1,
	activeDot: !0,
	dot: !0,
	legendType: "line",
	stroke: "#3182bd",
	strokeWidth: 1,
	fill: "#fff",
	points: [],
	isAnimationActive: !Ye.isSsr,
	animateNewValues: !0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	hide: !1,
	label: !1
}), pl(gl, "getComposedData", function(e) {
	var t = e.props, n = e.xAxis, r = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize, c = e.displayedData, l = e.offset, u = t.layout;
	return Xc({
		points: c.map(function(e, t) {
			var c = rt(e, o);
			return u === "horizontal" ? {
				x: We({
					axis: n,
					ticks: i,
					bandSize: s,
					entry: e,
					index: t
				}),
				y: (0, V.default)(c) ? null : r.scale(c),
				value: c,
				payload: e
			} : {
				x: (0, V.default)(c) ? null : n.scale(c),
				y: We({
					axis: r,
					ticks: a,
					bandSize: s,
					entry: e,
					index: t
				}),
				value: c,
				payload: e
			};
		}),
		layout: u
	}, l);
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/ZAxis.js
function _l(e) {
	"@babel/helpers - typeof";
	return _l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _l(e);
}
function vl(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function yl(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, kl(r.key), r);
	}
}
function bl(e, t, n) {
	return t && yl(e.prototype, t), n && yl(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xl(e, t, n) {
	return t = Tl(t), Sl(e, wl() ? Reflect.construct(t, n || [], Tl(e).constructor) : t.apply(e, n));
}
function Sl(e, t) {
	if (t && (_l(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Cl(e);
}
function Cl(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function wl() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (wl = function() {
		return !!e;
	})();
}
function Tl(e) {
	return Tl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Tl(e);
}
function El(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Dl(e, t);
}
function Dl(e, t) {
	return Dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Dl(e, t);
}
function Ol(e, t, n) {
	return t = kl(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function kl(e) {
	var t = Al(e, "string");
	return _l(t) == "symbol" ? t : t + "";
}
function Al(e, t) {
	if (_l(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (_l(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var jl = /*#__PURE__*/ function(e) {
	function t() {
		return vl(this, t), xl(this, t, arguments);
	}
	return El(t, e), bl(t, [{
		key: "render",
		value: function() {
			return null;
		}
	}]);
}(M.Component);
Ol(jl, "displayName", "ZAxis"), Ol(jl, "defaultProps", {
	zAxisId: 0,
	range: [64, 64],
	scale: "auto",
	type: "number"
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/util/ScatterUtils.js
var Ml = ["option", "isActive"];
function Nl() {
	return Nl = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Nl.apply(this, arguments);
}
function Pl(e, t) {
	if (e == null) return {};
	var n = Fl(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Fl(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Il(e) {
	var t = e.option, n = e.isActive, r = Pl(e, Ml);
	return typeof t == "string" ? /*#__PURE__*/ M.createElement(Ve, Nl({
		option: /*#__PURE__*/ M.createElement(Le, Nl({ type: t }, r)),
		isActive: n,
		shapeType: "symbols"
	}, r)) : /*#__PURE__*/ M.createElement(Ve, Nl({
		option: t,
		isActive: n,
		shapeType: "symbols"
	}, r));
}
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Scatter.js
function Ll(e) {
	"@babel/helpers - typeof";
	return Ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ll(e);
}
function Rl() {
	return Rl = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Rl.apply(this, arguments);
}
function zl(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Bl(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? zl(Object(n), !0).forEach(function(t) {
			Zl(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zl(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Vl(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Hl(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ql(r.key), r);
	}
}
function Ul(e, t, n) {
	return t && Hl(e.prototype, t), n && Hl(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Wl(e, t, n) {
	return t = Jl(t), Gl(e, ql() ? Reflect.construct(t, n || [], Jl(e).constructor) : t.apply(e, n));
}
function Gl(e, t) {
	if (t && (Ll(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Kl(e);
}
function Kl(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ql() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ql = function() {
		return !!e;
	})();
}
function Jl(e) {
	return Jl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Jl(e);
}
function Yl(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xl(e, t);
}
function Xl(e, t) {
	return Xl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Xl(e, t);
}
function Zl(e, t, n) {
	return t = Ql(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ql(e) {
	var t = $l(e, "string");
	return Ll(t) == "symbol" ? t : t + "";
}
function $l(e, t) {
	if (Ll(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ll(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var eu = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		Vl(this, t);
		var n = [...arguments];
		return e = Wl(this, t, [].concat(n)), Zl(e, "state", { isAnimationFinished: !1 }), Zl(e, "handleAnimationEnd", function() {
			e.setState({ isAnimationFinished: !0 });
		}), Zl(e, "handleAnimationStart", function() {
			e.setState({ isAnimationFinished: !1 });
		}), Zl(e, "id", bt("recharts-scatter-")), e;
	}
	return Yl(t, e), Ul(t, [
		{
			key: "renderSymbolsStatically",
			value: function(e) {
				var t = this, n = this.props, r = n.shape, i = n.activeShape, a = n.activeIndex, o = k(this.props, !1);
				return e.map(function(e, n) {
					var s = a === n, c = s ? i : r, l = Bl(Bl({}, o), e);
					return /*#__PURE__*/ M.createElement(A, Rl({
						className: "recharts-scatter-symbol",
						key: `symbol-${e?.cx}-${e?.cy}-${e?.size}-${n}`
					}, gt(t.props, e, n), { role: "img" }), /*#__PURE__*/ M.createElement(Il, Rl({
						option: c,
						isActive: s,
						key: `symbol-${n}`
					}, l)));
				});
			}
		},
		{
			key: "renderSymbolsWithAnimation",
			value: function() {
				var e = this, t = this.props, n = t.points, r = t.isAnimationActive, i = t.animationBegin, a = t.animationDuration, o = t.animationEasing, s = t.animationId, c = this.state.prevPoints;
				return /*#__PURE__*/ M.createElement(Ue, {
					begin: i,
					duration: a,
					isActive: r,
					easing: o,
					from: { t: 0 },
					to: { t: 1 },
					key: `pie-${s}`,
					onAnimationEnd: this.handleAnimationEnd,
					onAnimationStart: this.handleAnimationStart
				}, function(t) {
					var r = t.t, i = n.map(function(e, t) {
						var n = c && c[t];
						if (n) {
							var i = vt(n.cx, e.cx), a = vt(n.cy, e.cy), o = vt(n.size, e.size);
							return Bl(Bl({}, e), {}, {
								cx: i(r),
								cy: a(r),
								size: o(r)
							});
						}
						var s = vt(0, e.size);
						return Bl(Bl({}, e), {}, { size: s(r) });
					});
					return /*#__PURE__*/ M.createElement(A, null, e.renderSymbolsStatically(i));
				});
			}
		},
		{
			key: "renderSymbols",
			value: function() {
				var e = this.props, t = e.points, n = e.isAnimationActive, r = this.state.prevPoints;
				return n && t && t.length && (!r || !(0, so.default)(r, t)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(t);
			}
		},
		{
			key: "renderErrorBar",
			value: function() {
				if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
				var e = this.props, t = e.points, n = e.xAxis, r = e.yAxis, i = e.children, a = Rt(i, Kt);
				return a ? a.map(function(e, i) {
					var a = e.props, o = a.direction, s = a.dataKey;
					return /*#__PURE__*/ M.cloneElement(e, {
						key: `${o}-${s}-${t[i]}`,
						data: t,
						xAxis: n,
						yAxis: r,
						layout: o === "x" ? "vertical" : "horizontal",
						dataPointFormatter: function(e, t) {
							return {
								x: e.cx,
								y: e.cy,
								value: o === "x" ? +e.node.x : +e.node.y,
								errorVal: rt(e, t)
							};
						}
					});
				}) : null;
			}
		},
		{
			key: "renderLine",
			value: function() {
				var e = this.props, t = e.points, n = e.line, r = e.lineType, i = e.lineJointType, a = k(this.props, !1), o = k(n, !1), s, c;
				if (r === "joint") s = t.map(function(e) {
					return {
						x: e.cx,
						y: e.cy
					};
				});
				else if (r === "fitting") {
					var l = Pt(t), u = l.xmin, d = l.xmax, f = l.a, p = l.b, m = function(e) {
						return f * e + p;
					};
					s = [{
						x: u,
						y: m(u)
					}, {
						x: d,
						y: m(d)
					}];
				}
				var h = Bl(Bl(Bl({}, a), {}, {
					fill: "none",
					stroke: a && a.fill
				}, o), {}, { points: s });
				return c = /*#__PURE__*/ M.isValidElement(n) ? /*#__PURE__*/ M.cloneElement(n, h) : (0, B.default)(n) ? n(h) : /*#__PURE__*/ M.createElement(He, Rl({}, h, { type: i })), /*#__PURE__*/ M.createElement(A, {
					className: "recharts-scatter-line",
					key: "recharts-scatter-line"
				}, c);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.hide, r = e.points, i = e.line, a = e.className, o = e.xAxis, s = e.yAxis, c = e.left, l = e.top, u = e.width, d = e.height, f = e.id, p = e.isAnimationActive;
				if (t || !r || !r.length) return null;
				var m = this.state.isAnimationFinished, h = n("recharts-scatter", a), g = o && o.allowDataOverflow, _ = s && s.allowDataOverflow, v = g || _, y = (0, V.default)(f) ? this.id : f;
				return /*#__PURE__*/ M.createElement(A, {
					className: h,
					clipPath: v ? `url(#clipPath-${y})` : null
				}, g || _ ? /*#__PURE__*/ M.createElement("defs", null, /*#__PURE__*/ M.createElement("clipPath", { id: `clipPath-${y}` }, /*#__PURE__*/ M.createElement("rect", {
					x: g ? c : c - u / 2,
					y: _ ? l : l - d / 2,
					width: g ? u : u * 2,
					height: _ ? d : d * 2
				}))) : null, i && this.renderLine(), this.renderErrorBar(), /*#__PURE__*/ M.createElement(A, { key: "recharts-scatter-symbols" }, this.renderSymbols()), (!p || m) && et.renderCallByParent(this.props, r));
			}
		}
	], [{
		key: "getDerivedStateFromProps",
		value: function(e, t) {
			return e.animationId === t.prevAnimationId ? e.points === t.curPoints ? null : { curPoints: e.points } : {
				prevAnimationId: e.animationId,
				curPoints: e.points,
				prevPoints: t.curPoints
			};
		}
	}]);
}(Ir);
Zl(eu, "displayName", "Scatter"), Zl(eu, "defaultProps", {
	xAxisId: 0,
	yAxisId: 0,
	zAxisId: 0,
	legendType: "circle",
	lineType: "joint",
	lineJointType: "linear",
	data: [],
	shape: "circle",
	hide: !1,
	isAnimationActive: !Ye.isSsr,
	animationBegin: 0,
	animationDuration: 400,
	animationEasing: "linear"
}), Zl(eu, "getComposedData", function(e) {
	var t = e.xAxis, n = e.yAxis, r = e.zAxis, i = e.item, a = e.displayedData, o = e.xAxisTicks, s = e.yAxisTicks, c = e.offset, l = i.props.tooltipType, u = Rt(i.props.children, ut), d = (0, V.default)(t.dataKey) ? i.props.dataKey : t.dataKey, f = (0, V.default)(n.dataKey) ? i.props.dataKey : n.dataKey, p = r && r.dataKey, m = r ? r.range : jl.defaultProps.range, h = m && m[0], g = t.scale.bandwidth ? t.scale.bandwidth() : 0, _ = n.scale.bandwidth ? n.scale.bandwidth() : 0;
	return Bl({ points: a.map(function(e, a) {
		var c = rt(e, d), m = rt(e, f), v = !(0, V.default)(p) && rt(e, p) || "-", y = [{
			name: (0, V.default)(t.dataKey) ? i.props.name : t.name || t.dataKey,
			unit: t.unit || "",
			value: c,
			payload: e,
			dataKey: d,
			type: l
		}, {
			name: (0, V.default)(n.dataKey) ? i.props.name : n.name || n.dataKey,
			unit: n.unit || "",
			value: m,
			payload: e,
			dataKey: f,
			type: l
		}];
		v !== "-" && y.push({
			name: r.name || r.dataKey,
			unit: r.unit || "",
			value: v,
			payload: e,
			dataKey: p,
			type: l
		});
		var b = We({
			axis: t,
			ticks: o,
			bandSize: g,
			entry: e,
			index: a,
			dataKey: d
		}), x = We({
			axis: n,
			ticks: s,
			bandSize: _,
			entry: e,
			index: a,
			dataKey: f
		}), S = v === "-" ? h : r.scale(v), C = Math.sqrt(Math.max(S, 0) / Math.PI);
		return Bl(Bl({}, e), {}, {
			cx: b,
			cy: x,
			x: b - C,
			y: x - C,
			xAxis: t,
			yAxis: n,
			zAxis: r,
			width: 2 * C,
			height: 2 * C,
			size: S,
			node: {
				x: c,
				y: m,
				z: v
			},
			tooltipPayload: y,
			tooltipPosition: {
				x: b,
				y: x
			},
			payload: e
		}, u && u[a] && u[a].props);
	}) }, c);
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/LineChart.js
var tu = Bt({
	chartName: "LineChart",
	GraphicalChild: gl,
	axisComponents: [{
		axisType: "xAxis",
		AxisComp: St
	}, {
		axisType: "yAxis",
		AxisComp: yt
	}],
	formatAxisMap: Wt
}), nu = Bt({
	chartName: "BarChart",
	GraphicalChild: it,
	defaultTooltipEventType: "axis",
	validateTooltipEventTypes: ["axis", "item"],
	axisComponents: [{
		axisType: "xAxis",
		AxisComp: St
	}, {
		axisType: "yAxis",
		AxisComp: yt
	}],
	formatAxisMap: Wt
}), ru = Bt({
	chartName: "PieChart",
	GraphicalChild: Xs,
	validateTooltipEventTypes: ["item"],
	defaultTooltipEventType: "item",
	legendContent: "children",
	axisComponents: [{
		axisType: "angleAxis",
		AxisComp: js
	}, {
		axisType: "radiusAxis",
		AxisComp: ds
	}],
	formatAxisMap: Ot,
	defaultProps: {
		layout: "centric",
		startAngle: 0,
		endAngle: 360,
		cx: "50%",
		cy: "50%",
		innerRadius: 0,
		outerRadius: "80%"
	}
}), iu = Bt({
	chartName: "RadarChart",
	GraphicalChild: xc,
	axisComponents: [{
		axisType: "angleAxis",
		AxisComp: js
	}, {
		axisType: "radiusAxis",
		AxisComp: ds
	}],
	formatAxisMap: Ot,
	defaultProps: {
		layout: "centric",
		startAngle: 90,
		endAngle: -270,
		cx: "50%",
		cy: "50%",
		innerRadius: 0,
		outerRadius: "80%"
	}
}), au = Bt({
	chartName: "ComposedChart",
	GraphicalChild: [
		gl,
		Ft,
		it,
		eu
	],
	axisComponents: [
		{
			axisType: "xAxis",
			AxisComp: St
		},
		{
			axisType: "yAxis",
			AxisComp: yt
		},
		{
			axisType: "zAxis",
			AxisComp: jl
		}
	],
	formatAxisMap: Wt
}), ou = r({ variants: { aspect: {
	square: "aspect-square",
	wide: "aspect-video",
	small: "h-40"
} } }), su = {
	light: "",
	dark: ".dark"
}, cu = j.createContext(null);
function lu() {
	let e = j.useContext(cu);
	if (!e) throw Error("useChart must be used within a <ChartContainer />");
	return e;
}
var uu = j.forwardRef(({ id: e, className: t, children: n, aspect: r, config: i, ...a }, o) => {
	let s = j.useId(), c = `chart-${e || s.replace(/:/g, "")}`, l = j.useRef(null), [u, d] = I(), f = Ur(() => new ResizeObserver((e) => d(e[0].contentRect.height)), []);
	return Hr(() => {
		let e = o && "current" in o ? o.current : l.current;
		return e && f.observe(e.parentElement), () => {
			f.disconnect();
		};
	}, [
		f,
		o,
		l
	]), /* @__PURE__ */ L(cu.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ R("div", {
			"data-chromatic": "ignore",
			"data-chart": c,
			ref: o || l,
			className: S("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", r ? ou({ aspect: r }) : "aspect-auto h-full", t),
			...a,
			children: [/* @__PURE__ */ L(du, {
				id: c,
				config: i
			}), /* @__PURE__ */ L(Ge, {
				height: u,
				className: "overflow-visible",
				children: n
			})]
		})
	});
});
uu.displayName = "Chart";
var du = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([e, t]) => t.theme || t.color);
	if (!n.length) return null;
	let r = Object.entries(su).map(([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
		let r = n.theme?.[t] || n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`);
	return /* @__PURE__ */ L("style", { dangerouslySetInnerHTML: { __html: o.sanitize(r.join("\n")) } });
}, fu = Lt, pu = j.forwardRef(({ active: e, payload: t, className: n, indicator: r = "dot", hideLabel: i = !1, hideIndicator: a = !1, label: o, labelFormatter: s, labelClassName: c, formatter: l, yAxisFormatter: u, color: d, nameKey: f, labelKey: p }, m) => {
	let { config: h } = lu(), g = j.useMemo(() => {
		if (i || !t?.length) return null;
		let [e] = t, n = `${p || e.dataKey || e.name || "value"}`, r = _u(h, e, n), a = !p && typeof o == "string" ? h[o]?.label || o : r?.label;
		return s ? /* @__PURE__ */ L("div", {
			className: S("font-medium", c),
			children: s(a, t)
		}) : a ? /* @__PURE__ */ L("div", {
			className: S("font-medium", c),
			children: a
		}) : null;
	}, [
		o,
		s,
		t,
		i,
		c,
		h,
		p
	]);
	if (!e || !t?.length) return null;
	let _ = t.length === 1 && r !== "dot";
	return /* @__PURE__ */ R("div", {
		ref: m,
		className: S("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary px-3 py-2.5 text-base shadow-lg backdrop-blur", n),
		children: [_ ? null : g, /* @__PURE__ */ L("div", {
			className: "grid gap-2",
			children: t.map((e, t) => {
				let n = `${f || e.name || e.dataKey || "value"}`, i = _u(h, e, n), o = d || e.payload.fill || e.color;
				return /* @__PURE__ */ L("div", {
					className: S("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", r === "dot" && "items-center"),
					children: l && e?.value !== void 0 && e.name ? l(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ R(Gr, { children: [i?.icon ? /* @__PURE__ */ L(i.icon, {}) : !a && /* @__PURE__ */ L("div", {
						className: S("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
							"h-2.5 w-2.5": r === "dot",
							"w-1": r === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
							"my-0.5": _ && r === "dashed"
						}),
						style: {
							"--color-bg": o,
							"--color-border": o
						}
					}), /* @__PURE__ */ R("div", {
						className: S("flex flex-1 justify-between text-sm leading-none", _ ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ R("div", {
							className: "grid gap-2",
							children: [_ ? g : null, /* @__PURE__ */ L("span", {
								className: "pr-2 text-f1-foreground",
								children: i?.label || e.name
							})]
						}), e.value && /* @__PURE__ */ L("span", {
							className: "font-mono font-medium tabular-nums text-f1-foreground",
							children: u ? u(String(e.value)) : e.value.toLocaleString()
						})]
					})] })
				}, e.dataKey);
			})
		})]
	});
});
pu.displayName = "ChartTooltip";
var mu = {
	strong: .4,
	faint: .05
}, hu = ft, gu = j.forwardRef(({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i, hiddenKey: a, leftShift: o = 0 }, s) => {
	let { config: c } = lu();
	return n?.length ? /* @__PURE__ */ L("div", {
		ref: s,
		className: S("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", r === "top" ? "pb-2" : "pt-2", e),
		style: { marginLeft: o },
		children: n.map((e) => {
			let n = `${i || e.dataKey || "value"}`, r = _u(c, e, n, a);
			return /* @__PURE__ */ R("div", {
				className: S("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"),
				children: [r?.icon && !t ? /* @__PURE__ */ L(r.icon, {}) : r && /* @__PURE__ */ L("div", {
					className: "h-2 w-2 shrink-0 rounded-full",
					style: r.projected ? { background: `linear-gradient(to bottom, color-mix(in srgb, ${e.color} ${mu.strong * 100}%, transparent), color-mix(in srgb, ${e.color} ${mu.faint * 100}%, transparent))` } : { backgroundColor: e.color }
				}), /* @__PURE__ */ L("span", {
					className: "text-f1-foreground",
					children: r?.label
				})]
			}, JSON.stringify(e));
		})
	}) : null;
});
gu.displayName = "ChartLegend";
function _u(e, t, n, r) {
	if (typeof t != "object" || !t) return;
	let i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, a = n;
	if (n in t && typeof t[n] == "string" ? a = t[n] : i && n in i && typeof i[n] == "string" ? a = i[n] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(r && r === a)) return a in e ? e[a] : e[n];
}
//#endregion
//#region src/kits/Charts/utils/elements.tsx
function vu(e, t = "12px Inter, sans-serif") {
	let n = document.createElement("canvas").getContext("2d");
	return n ? (n.font = t, n.measureText(e).width) : 0;
}
var yu = (e) => ({
	dataKey: "x",
	domain: e?.domain,
	tickLine: !1,
	axisLine: !1,
	tickMargin: 8,
	ticks: e?.ticks,
	tickCount: e?.tickCount,
	tickFormatter: e?.tickFormatter
}), bu = (e) => ({
	tickLine: !1,
	axisLine: !1,
	domain: e?.domain,
	tickMargin: 8,
	ticks: e?.ticks,
	tickCount: e?.tickCount,
	tickFormatter: e?.tickFormatter
}), xu = () => ({
	vertical: !1,
	strokeDasharray: "4"
}), Su = (e = !1) => ({
	cursor: !0,
	offset: e ? 0 : 20,
	position: {
		y: e ? void 0 : 0,
		x: e ? 120 : void 0
	},
	animationDuration: 100,
	isAnimationActive: !0
});
//#endregion
//#region src/kits/Charts/utils/forwardRef.ts
function Cu(e) {
	return Rr(e);
}
//#endregion
//#region src/kits/Charts/utils/muncher.ts
function wu(e) {
	return e.map((e) => ({
		x: e.label,
		...e.values
	}));
}
//#endregion
//#region src/kits/Charts/AreaChart/index.tsx
var Tu = ({ index: e, visibleTicksCount: t, payload: n, tickFormatter: r, ...i }) => {
	let a = e === 0, o = e === t - 1;
	return /* @__PURE__ */ L(ot, {
		...i,
		textAnchor: a ? "start" : o ? "end" : "middle",
		children: r?.(n.value, n.index) ?? n.value
	});
}, Eu = Cu(({ data: e, dataConfig: t, xAxis: n, yAxis: r, canBeBlurred: i, blurArea: a, lineType: o = "monotoneX", aspect: s, marginTop: c = 0 }, l) => {
	let { enabled: u } = Ka(), d = Object.keys(t), f = Hn(12), p = wu(e), m = Math.max(...p.flatMap((e) => d.map((t) => vu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`)))), h = r?.width ?? m + 20, g = !r?.hide, _ = !n?.hide, v = !i || !u;
	return /* @__PURE__ */ L(uu, {
		config: t,
		ref: l,
		aspect: s,
		children: /* @__PURE__ */ R(At, {
			accessibilityLayer: !0,
			data: p,
			className: "overflow-visible [&_.recharts-surface]:overflow-visible",
			margin: { top: c },
			children: [
				/* @__PURE__ */ R("defs", { children: [
					/* @__PURE__ */ R("linearGradient", {
						id: `${f}-fadeGradient`,
						gradientUnits: "userSpaceOnUse",
						x1: `${g ? h : 0}`,
						y1: "0",
						x2: "100%",
						y2: "0",
						children: [
							(a === "l" || a === "lr") && /* @__PURE__ */ R(Gr, { children: [
								/* @__PURE__ */ L("stop", {
									offset: "0%",
									stopColor: "black",
									stopOpacity: "0"
								}),
								/* @__PURE__ */ L("stop", {
									offset: "1%",
									stopColor: "white",
									stopOpacity: "0.1"
								}),
								/* @__PURE__ */ L("stop", {
									offset: "7%",
									stopColor: "white",
									stopOpacity: "1"
								})
							] }),
							(a === "r" || a === "lr") && /* @__PURE__ */ R(Gr, { children: [
								/* @__PURE__ */ L("stop", {
									offset: "93%",
									stopColor: "white",
									stopOpacity: "1"
								}),
								/* @__PURE__ */ L("stop", {
									offset: "99%",
									stopColor: "white",
									stopOpacity: "0.1"
								}),
								/* @__PURE__ */ L("stop", {
									offset: "100%",
									stopColor: "black",
									stopOpacity: "0"
								})
							] }),
							!a && /* @__PURE__ */ R(Gr, { children: [/* @__PURE__ */ L("stop", {
								offset: "0%",
								stopColor: "white",
								stopOpacity: "1"
							}), /* @__PURE__ */ L("stop", {
								offset: "100%",
								stopColor: "white",
								stopOpacity: "1"
							})] })
						]
					}),
					/* @__PURE__ */ L("mask", {
						id: `${f}-transparent-edges`,
						maskUnits: "userSpaceOnUse",
						maskContentUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ L("rect", {
							x: "0",
							y: "0",
							width: "100%",
							height: "100%",
							fill: `url(#${f}-fadeGradient)`
						})
					}),
					d.map((e, n) => /* @__PURE__ */ R("linearGradient", {
						id: `fill${String(e)}-${f}`,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ L("stop", {
							offset: "5%",
							stopColor: t[e].color ? On(t[e].color) : Dn(n),
							stopOpacity: .8
						}), /* @__PURE__ */ L("stop", {
							offset: "95%",
							stopColor: t[e].color ? On(t[e].color) : Dn(n),
							stopOpacity: .1
						})]
					}, n))
				] }),
				/* @__PURE__ */ L(Hc, {
					...xu(),
					mask: `url(#${f}-transparent-edges)`
				}),
				_ && /* @__PURE__ */ L(St, {
					dataKey: "x",
					tickLine: !1,
					axisLine: !1,
					tickMargin: 8,
					tickFormatter: n?.tickFormatter,
					ticks: n?.ticks,
					domain: n?.domain,
					interval: 0,
					tick: Tu
				}),
				g && /* @__PURE__ */ L(yt, {
					tickLine: !1,
					axisLine: !1,
					tickMargin: 8,
					tickCount: r?.tickCount,
					tickFormatter: i && u ? () => "**" : r?.tickFormatter,
					ticks: r?.ticks,
					domain: r?.domain,
					width: h
				}),
				v && /* @__PURE__ */ L(fu, {
					...Su(),
					content: /* @__PURE__ */ L(pu, {
						indicator: "dot",
						yAxisFormatter: r?.tickFormatter
					})
				}),
				d.map((e, n) => /* @__PURE__ */ L(Ft, {
					isAnimationActive: !1,
					dataKey: e,
					type: o,
					mask: `url(#${f}-transparent-edges)`,
					fill: `url(#fill${e}-${f})`,
					fillOpacity: t[e].dashed ? 0 : .4,
					stroke: t[e].color ? On(t[e].color) : Dn(n),
					strokeWidth: 1.5,
					strokeDasharray: t[e].dashed ? "4 4" : void 0
				}, e)),
				Object.keys(t).length > 1 && /* @__PURE__ */ L(hu, {
					className: "flex justify-start",
					content: /* @__PURE__ */ L(gu, {})
				})
			]
		})
	});
}), Du = Cu(({ dataConfig: e, data: t, xAxis: n, yAxis: r = { hide: !0 }, label: i = !1, type: a = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: c, legend: l, showValueUnderLabel: u = !1, highlightLastBar: d = !1, onClick: f }, p) => {
	let m = Object.keys(e), h = wu(t).map((t, n, r) => d && m.length === 1 && !e[m[0]]?.color ? {
		...t,
		fill: n === r.length - 1 ? Dn(n) : Dn(n, .5)
	} : t), g = Math.max(...h.flatMap((e) => m.map((t) => vu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`))));
	return /* @__PURE__ */ L(uu, {
		config: e,
		ref: p,
		aspect: c,
		children: /* @__PURE__ */ R(nu, {
			accessibilityLayer: !0,
			data: h,
			margin: {
				left: r && !r.hide ? 0 : 12,
				right: 12,
				top: i ? 24 : 0,
				bottom: u ? 24 : 12
			},
			stackOffset: a === "stacked-by-sign" ? "sign" : void 0,
			onClick: (e) => {
				if (!f || !e.activeLabel || !e.activePayload) return;
				let t = {
					label: e.activeLabel,
					values: {}
				};
				for (let n of e.activePayload) t.values[n.name] = n.value;
				f(t);
			},
			children: [
				!o && /* @__PURE__ */ L(fu, {
					...Su(),
					content: /* @__PURE__ */ L(pu, { yAxisFormatter: r.tickFormatter })
				}),
				!s && /* @__PURE__ */ L(Hc, { ...xu() }),
				/* @__PURE__ */ L(yt, {
					...bu(r),
					tick: !0,
					width: r.width ?? g + 20,
					hide: r.hide
				}),
				/* @__PURE__ */ L(St, {
					...yu(n),
					hide: n?.hide,
					tick: u ? (e) => {
						let { x: n, y: i, payload: a } = e, o = t.find((e) => e.label === a.value)?.values || "", s = Object.keys(o).length === 1 ? Object.values(o)?.[0] : void 0, c = s !== void 0 && r.tickFormatter ? r.tickFormatter(`${s}`) : s.toLocaleString();
						return /* @__PURE__ */ R("g", {
							transform: `translate(${n},${i})`,
							children: [/* @__PURE__ */ L("text", {
								x: 0,
								y: 0,
								dy: 12,
								textAnchor: "middle",
								className: "text-sm font-medium !text-f1-foreground-secondary",
								children: a.value
							}), !!s && /* @__PURE__ */ L("text", {
								x: 0,
								y: 0,
								dy: 28,
								textAnchor: "middle",
								className: "!fill-f1-foreground text-sm font-medium",
								children: c
							})]
						});
					} : void 0
				}),
				m.map((t, n) => /* @__PURE__ */ L(it, {
					isAnimationActive: !1,
					dataKey: t,
					stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
					fill: d ? ((e) => e.fill) : e[t].color ? On(e[t].color) : Dn(n),
					radius: a === "stacked-by-sign" ? [
						4,
						4,
						0,
						0
					] : 4,
					maxBarSize: 32,
					children: i && /* @__PURE__ */ L(et, {
						position: "top",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12
					}, `label-${t}`)
				}, `bar-${t}`)),
				l && /* @__PURE__ */ L(hu, {
					content: /* @__PURE__ */ L(gu, { nameKey: "label" }),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
}), Ou = Cu(({ data: e, legend: t = !0, hideTooltip: n = !1 }, r) => {
	let i = e.reduce((e, t) => e + t.value, 0), [a, o] = I(void 0), s = cn(e, i, (e, t) => e.color ? On(e.color) : Dn(t)), c = an(s, i);
	return /* @__PURE__ */ R(be, {
		delayDuration: 350,
		children: [/* @__PURE__ */ L("div", {
			className: "w-full",
			ref: r,
			children: /* @__PURE__ */ R(xe, { children: [/* @__PURE__ */ L(ye, {
				asChild: !0,
				children: /* @__PURE__ */ L("div", {
					className: S("pointer-events-auto flex h-2 w-full cursor-default gap-1 overflow-hidden", x()),
					onMouseLeave: () => o(void 0),
					onMouseOver: (e) => {
						e.target === e.currentTarget && o(void 0);
					},
					role: "group",
					"aria-label": "Category bar chart",
					tabIndex: s.length > 0 ? 0 : void 0,
					children: s.map((e) => /* @__PURE__ */ L("div", {
						className: "pointer-events-auto h-full overflow-hidden rounded-2xs",
						style: {
							width: `${e.percentage}%`,
							backgroundColor: e.color
						},
						role: "img",
						"aria-label": `${e.name}: ${e.value} (${gn(e.value, i)}%)`,
						onMouseEnter: () => o(e.key)
					}, e.key))
				})
			}), !n && c.length > 0 && /* @__PURE__ */ L(on, {
				items: c,
				activeKey: a
			})] })
		}), t && /* @__PURE__ */ L("div", {
			className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
			role: "list",
			children: e.map((e, t) => {
				let n = e.color ? On(e.color) : Dn(t);
				return /* @__PURE__ */ R("div", {
					className: "flex items-center gap-1.5",
					role: "listitem",
					children: [/* @__PURE__ */ L("div", {
						className: "h-2 w-2 shrink-0 rounded-full",
						style: { backgroundColor: n }
					}), /* @__PURE__ */ L("span", {
						className: "text-f1-foreground",
						children: e.name
					})]
				}, e.name);
			})
		})]
	});
}), ku = Object.assign(({ stackKeys: e, ...t }) => {
	let n = Br().replace(/:/g, ""), r = (e) => `projected-bar-${n}-${e}`, i = (n) => {
		let { payload: i, ...a } = n, o = (e) => {
			let t = i?.[e];
			return typeof t == "number" ? t : 0;
		}, s = o(String(t.dataKey)), c = `url(#${r(s < 0 ? "negative" : "positive")})`;
		if (!e) return /* @__PURE__ */ L(at, {
			...a,
			fill: c
		});
		let l = [...e].reverse().find((e) => s < 0 ? o(e) < 0 : o(e) > 0) === String(t.dataKey) ? [
			4,
			4,
			0,
			0
		] : [
			0,
			0,
			0,
			0
		];
		return /* @__PURE__ */ L(at, {
			...a,
			fill: c,
			radius: l
		});
	};
	return /* @__PURE__ */ R(Gr, { children: [/* @__PURE__ */ L("defs", { children: ["positive", "negative"].map((e) => /* @__PURE__ */ R("linearGradient", {
		id: r(e),
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ L("stop", {
			offset: "0%",
			stopColor: t.fill,
			stopOpacity: e === "positive" ? mu.strong : mu.faint
		}), /* @__PURE__ */ L("stop", {
			offset: "100%",
			stopColor: t.fill,
			stopOpacity: e === "positive" ? mu.faint : mu.strong
		})]
	}, e)) }), /* @__PURE__ */ L(it, {
		...t,
		shape: i
	})] });
}, {
	displayName: it.displayName,
	defaultProps: it.defaultProps,
	getComposedData: it.getComposedData
}), Au = (e) => {
	let t = (t) => {
		let { cx: n, cy: r, fill: i, payload: a } = t, o = () => {
			if (!a) return "-";
			if (a[e] !== void 0) return a[e];
			for (let [e, t] of Object.entries(a)) if (typeof t == "number" && e !== "x") return t;
			return "-";
		};
		return /* @__PURE__ */ L("circle", {
			cx: n,
			cy: r,
			r: 4,
			fill: i,
			stroke: "white",
			strokeWidth: 2,
			ref: (e) => {
				e?.parentElement && e.parentElement.setAttribute("aria-label", `Data point: ${o()}`);
			}
		});
	};
	return t.displayName = `Scatter-${e}`, t;
}, ju = (e, t, n) => {
	let r = (r) => {
		let { payload: i, ...a } = r, o = (e) => {
			let t = i?.[e];
			return typeof t == "number" ? t : 0;
		}, s = o(e), c = [...t].reverse().find((e) => (s < 0 ? o(e) < 0 : o(e) > 0) && !n.has(e)) === e ? [
			4,
			4,
			0,
			0
		] : [
			0,
			0,
			0,
			0
		];
		return /* @__PURE__ */ L(at, {
			...a,
			radius: c
		});
	};
	return r.displayName = `StackedBar-${e}`, r;
}, Mu = Cu(({ dataConfig: e, data: t, xAxis: n, yAxis: r = { hide: !0 }, label: i = !1, hideTooltip: a = !1, hideGrid: o = !1, aspect: s, legend: c, showValueUnderLabel: l = !1, bar: u, line: d, scatter: f, onClick: p }, m) => {
	let h = wu(t), g = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], _ = u?.type === "stacked" || u?.type === "stacked-by-sign", v = new Set(g.filter((t) => e[t].projected).map(String)), y = (t, n) => e[t].color ? On(e[t].color) : Dn(n), b = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], x = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], S = [
		...g,
		...b,
		...x
	], C = Math.max(...h.flatMap((e) => S.map((t) => vu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`)))), w = [
		u,
		d,
		f
	].filter((e) => e?.axisPosition === "left"), T = [
		u,
		d,
		f
	].filter((e) => e?.axisPosition === "right");
	return /* @__PURE__ */ L(uu, {
		config: e,
		ref: m,
		aspect: s,
		children: /* @__PURE__ */ R(au, {
			accessibilityLayer: !0,
			data: h,
			margin: {
				left: r && !r.hide ? 0 : 12,
				right: 12,
				top: i ? 24 : 0,
				bottom: l ? 24 : 12
			},
			stackOffset: u?.type === "stacked-by-sign" ? "sign" : void 0,
			onClick: (e) => {
				if (!p || !e.activeLabel || !e.activePayload) return;
				let t = {
					label: e.activeLabel,
					values: {}
				};
				for (let n of e.activePayload) t.values[n.name] = n.value;
				p(t);
			},
			children: [
				!a && /* @__PURE__ */ L(fu, {
					...Su(),
					content: /* @__PURE__ */ L(pu, { yAxisFormatter: r.tickFormatter })
				}),
				!o && /* @__PURE__ */ L(Hc, { ...xu() }),
				w.length > 0 && /* @__PURE__ */ L(yt, {
					...bu(r),
					tick: !0,
					width: r.width ?? C + 20 + (T.length > 0 && w[0]?.axisLabel ? 20 : 0),
					hide: r.hide || w.some((e) => e?.hideAxis),
					label: w[0]?.axisLabel ? {
						value: w[0].axisLabel,
						angle: -90,
						position: "insideLeft"
					} : void 0
				}),
				T.length > 0 && /* @__PURE__ */ L(yt, {
					...bu(r),
					yAxisId: "right",
					orientation: "right",
					tick: !0,
					width: r.width ?? C + 20 + (w.length > 0 && T[0]?.axisLabel ? 20 : 0),
					hide: r.hide || T.some((e) => e?.hideAxis),
					label: T[0]?.axisLabel ? {
						value: T[0].axisLabel,
						angle: 90,
						position: "insideRight"
					} : void 0
				}),
				/* @__PURE__ */ L(St, {
					...yu(n),
					hide: n?.hide,
					tick: l ? (e) => {
						let { x: n, y: i, payload: a } = e, o = t.find((e) => e.label === a.value)?.values || "", s = Object.keys(o).length === 1 ? Object.values(o)?.[0] : void 0, c = s !== void 0 && r.tickFormatter ? r.tickFormatter(`${s}`) : s.toLocaleString();
						return /* @__PURE__ */ R("g", {
							transform: `translate(${n},${i})`,
							children: [/* @__PURE__ */ L("text", {
								x: 0,
								y: 0,
								dy: 12,
								textAnchor: "middle",
								className: "text-sm font-medium !text-f1-foreground-secondary",
								children: a.value
							}), !!s && /* @__PURE__ */ L("text", {
								x: 0,
								y: 0,
								dy: 28,
								textAnchor: "middle",
								className: "!fill-f1-foreground text-sm font-medium",
								children: c
							})]
						});
					} : void 0
				}),
				g.map((e, t) => {
					let n = {
						isAnimationActive: !1,
						dataKey: String(e),
						stackId: _ ? "stack" : void 0,
						fill: y(e, t),
						radius: 4,
						maxBarSize: 32
					}, r = i && /* @__PURE__ */ L(et, {
						position: "top",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12
					}, `label-${String(e)}`);
					return v.has(String(e)) ? /* @__PURE__ */ L(ku, {
						...n,
						stackKeys: _ ? g.map(String) : void 0,
						children: r
					}, `bar-${String(e)}`) : /* @__PURE__ */ L(it, {
						...n,
						shape: _ ? ju(String(e), g.map(String), v) : void 0,
						children: r
					}, `bar-${String(e)}`);
				}),
				b.map((t, n) => {
					let r = e[t].color ? On(e[t].color) : Dn(g.length + n);
					return /* @__PURE__ */ L(gl, {
						type: d?.lineType ?? "natural",
						dataKey: String(t),
						stroke: r,
						strokeWidth: 2,
						strokeDasharray: e[t].dashed ? "4 4" : void 0,
						dot: d?.dot ? {
							fill: r,
							stroke: r,
							r: 3
						} : !1,
						isAnimationActive: !1,
						yAxisId: d?.axisPosition === "right" ? "right" : void 0
					}, `line-${String(t)}`);
				}),
				x.map((t, n) => /* @__PURE__ */ L(eu, {
					dataKey: String(t),
					fill: e[t].color ? On(e[t].color) : Dn(g.length + b.length + n),
					r: 4,
					isAnimationActive: !1,
					yAxisId: f?.axisPosition === "right" ? "right" : void 0,
					shape: Au(String(t))
				}, `scatter-${String(t)}`)),
				c && /* @__PURE__ */ L(hu, {
					content: /* @__PURE__ */ L(gu, { nameKey: "label" }),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
}), Nu = Cu(({ data: e, dataConfig: t, xAxis: n, yAxis: r = { hide: !0 }, lineType: i = "natural", aspect: a, hideTooltip: o = !1, hideGrid: s = !1 }, c) => {
	let l = Object.keys(t), u = wu(e), d = Math.max(...u.flatMap((e) => l.map((t) => vu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`))));
	return /* @__PURE__ */ L(uu, {
		config: t,
		ref: c,
		aspect: a,
		children: /* @__PURE__ */ R(tu, {
			accessibilityLayer: !0,
			data: u,
			margin: {
				left: r && !r.hide ? 0 : 12,
				right: 12
			},
			children: [
				!s && /* @__PURE__ */ L(Hc, { ...xu() }),
				!n?.hide && /* @__PURE__ */ L(St, { ...yu(n) }),
				!r?.hide && /* @__PURE__ */ L(yt, {
					...bu(r),
					width: r.width ?? d + 20
				}),
				!o && /* @__PURE__ */ L(fu, {
					...Su(),
					content: /* @__PURE__ */ L(pu, { yAxisFormatter: r?.tickFormatter })
				}),
				l.map((e, n) => /* @__PURE__ */ L(gl, {
					dataKey: e,
					isAnimationActive: !1,
					type: i,
					stroke: t[e].color ? On(t[e].color) : Dn(n),
					strokeWidth: 1.5,
					strokeDasharray: t[e].dashed ? "4 4" : void 0,
					dot: !1
				}, e))
			]
		})
	});
}), Pu = Cu(({ data: e, dataConfig: t, overview: n, aspect: r, tickFormatter: i }, a) => {
	let o = e.map((e, n) => ({
		...e,
		fill: t[e.label]?.color ? On(t[e.label].color) : Dn(n)
	})), s = e.map((e) => e.value).reduce((e, t) => e + t);
	return s === 0 && o.push({
		label: "-",
		value: 1,
		fill: "hsl(var(--neutral-2))"
	}), /* @__PURE__ */ L(uu, {
		config: t,
		ref: a,
		aspect: r,
		"data-chromatic": "ignore",
		style: { height: 380 },
		children: /* @__PURE__ */ R(ru, {
			accessibilityLayer: !0,
			margin: {
				left: 0,
				right: 0
			},
			children: [
				s !== 0 && /* @__PURE__ */ L(fu, {
					isAnimationActive: !1,
					content: /* @__PURE__ */ L(pu, { yAxisFormatter: i })
				}),
				/* @__PURE__ */ R(Xs, {
					isAnimationActive: !1,
					nameKey: "label",
					legendType: "circle",
					dataKey: "value",
					data: o,
					innerRadius: 120,
					outerRadius: 135,
					paddingAngle: 2.5,
					children: [o.map((e, t) => {
						let n = i ? i(String(e.value)) : e.value;
						return /* @__PURE__ */ L(ut, {
							fill: e.fill,
							"aria-label": `${e.label}: ${n} (${(e.value / s * 100).toFixed(0)}%)`
						}, `cell-${t}`);
					}), /* @__PURE__ */ L(Re, { content: ({ viewBox: e }) => {
						if (e && "cx" in e && "cy" in e) return /* @__PURE__ */ R("text", {
							x: e.cx,
							y: e.cy,
							textAnchor: "middle",
							dominantBaseline: "middle",
							children: [/* @__PURE__ */ L("tspan", {
								x: e.cx,
								y: (e.cy || 0) + 8,
								className: "fill-f1-foreground text-4xl font-semibold",
								children: n?.number ? i ? i(String(n.number)) : n.number : null
							}), /* @__PURE__ */ L("tspan", {
								x: e.cx,
								y: (e.cy || 0) - 16,
								className: "fill-f1-foreground-secondary",
								children: n?.label
							})]
						});
					} })]
				}),
				/* @__PURE__ */ L(hu, {
					content: /* @__PURE__ */ L(gu, {
						nameKey: "label",
						hiddenKey: "-"
					}),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
}), Fu = Cu(({ value: e, max: t = 100, label: n, color: r }, i) => {
	let a = On(r || "categorical-1"), o = e / t * 100;
	return /* @__PURE__ */ R("div", {
		className: "flex items-center space-x-2",
		"aria-live": "polite",
		children: [/* @__PURE__ */ L("div", {
			className: "flex-grow",
			children: /* @__PURE__ */ L(kn, {
				color: a,
				value: o,
				className: "w-full",
				"aria-valuemin": 0,
				"aria-valuemax": t,
				"aria-valuenow": e,
				"aria-label": `${o.toFixed(1)}%`
			})
		}), n && /* @__PURE__ */ L("div", {
			className: "flex-shrink-0 text-sm font-medium",
			children: n
		})]
	});
}), Iu = ({ series: e, hiddenKeys: t, onToggle: n }) => /* @__PURE__ */ L("div", {
	className: "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
	children: e.map(({ key: e, color: r, label: i }) => {
		let a = t.includes(e);
		return /* @__PURE__ */ R("button", {
			type: "button",
			className: S("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground", x(), a ? "opacity-40" : "opacity-100"),
			"aria-label": typeof i == "string" ? i : void 0,
			"aria-pressed": !a,
			onClick: () => n(e),
			children: [/* @__PURE__ */ L("span", {
				className: "h-2 w-2 shrink-0 rounded-full",
				style: { backgroundColor: r }
			}), /* @__PURE__ */ L("span", {
				className: "text-f1-foreground",
				children: i
			})]
		}, e);
	})
}), Lu = Cu(({ data: e, dataConfig: t, scaleMin: n, scaleMax: r, aspect: i, defaultHiddenSeries: a, dataTestId: o }, s) => {
	let [l, u] = I(a ?? []), d = Object.entries(t).map(([e, t], n) => ({
		key: e,
		color: t.color ? On(t.color) : Dn(n),
		label: t.label
	})), f = (e) => {
		u((t) => t.includes(e) ? t.filter((t) => t !== e) : t.length >= d.length - 1 ? t : [...t, e]);
	}, p = e.map((e) => ({
		subject: e.label,
		...e.values
	}));
	return /* @__PURE__ */ L(c, {
		dataTestId: o,
		children: /* @__PURE__ */ L(uu, {
			config: t,
			ref: s,
			aspect: i,
			"data-chromatic": "ignore",
			children: /* @__PURE__ */ R(iu, {
				accessibilityLayer: !0,
				data: p,
				children: [
					/* @__PURE__ */ L(fu, {
						cursor: !0,
						content: /* @__PURE__ */ L(pu, { indicator: "dot" })
					}),
					/* @__PURE__ */ L(zo, { gridType: "circle" }),
					/* @__PURE__ */ L(js, { dataKey: "subject" }),
					/* @__PURE__ */ L(ds, {
						angle: 90,
						type: "number",
						domain: [n ?? "dataMin", r ?? "dataMax"]
					}),
					d.filter(({ key: e }) => !l.includes(e)).map(({ key: e, color: t, label: n }) => /* @__PURE__ */ L(xc, {
						dataKey: e,
						fill: t,
						stroke: t,
						strokeWidth: 1.5,
						fillOpacity: .3,
						label: n,
						isAnimationActive: !1
					}, e)),
					d.length > 1 && /* @__PURE__ */ L(hu, {
						iconType: "star",
						content: /* @__PURE__ */ L(Iu, {
							series: d,
							hiddenKeys: l,
							onToggle: f
						})
					})
				]
			})
		})
	});
}), Ru = Ie();
function zu(e) {
	return e.map((e) => ({
		x: e.label,
		...e.values
	}));
}
//#endregion
//#region src/kits/Charts/VerticalBarChart/index.tsx
var Bu = (e) => {
	let t = (0, Ru.cloneDeep)(e), n = "", r = 0;
	return t.forEach((e) => {
		delete e.x, Object.entries(e).forEach(([e, t]) => {
			r < t && (r = t, n = e);
		});
	}), n;
}, Vu = Cu(({ dataConfig: e, data: t, xAxis: n = { hide: !0 }, yAxis: r, label: i = !1, aspect: a, hideTooltip: o = !1, hideGrid: s = !1, showRatio: c = !1, valueFormatter: l }, u) => {
	let d = Object.keys(e), f = zu(t), p = Math.max(...f.map((e) => vu(`${e.x}`))), m = d.reduce((e, n) => (e[n] = t.reduce((e, t) => e + t.values[n], 0), e), {}), h = {
		...yu(n),
		type: "number",
		dataKey: Bu(f)
	}, g = {
		...bu(r),
		type: "category",
		dataKey: "x"
	};
	return /* @__PURE__ */ L(uu, {
		config: e,
		ref: u,
		aspect: a,
		children: /* @__PURE__ */ R(nu, {
			layout: "vertical",
			accessibilityLayer: !0,
			data: f,
			margin: {
				left: r && !r.hide ? 8 : 12,
				right: i || c ? 100 : 0
			},
			children: [
				!o && /* @__PURE__ */ L(fu, {
					...Su(!0),
					content: /* @__PURE__ */ L(pu, { yAxisFormatter: r?.tickFormatter })
				}),
				!s && /* @__PURE__ */ L(Hc, {
					...xu(),
					vertical: !0,
					horizontal: !1
				}),
				/* @__PURE__ */ L(St, {
					...h,
					hide: n?.hide
				}),
				/* @__PURE__ */ L(yt, {
					...g,
					hide: r?.hide,
					width: r?.width ?? p + 20
				}),
				d.map((t, n) => /* @__PURE__ */ L(Gr, { children: /* @__PURE__ */ L(it, {
					isAnimationActive: !1,
					layout: "vertical",
					dataKey: t,
					fill: e[t].color ? On(e[t].color) : Dn(n),
					radius: 4,
					maxBarSize: 24,
					children: (i || c) && /* @__PURE__ */ L(et, {
						position: "right",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12,
						formatter: l,
						content: c ? /* @__PURE__ */ L(Hu, {
							valueFormatter: l,
							total: m[t],
							showLabel: i
						}) : void 0
					}, `label-{${t}}`)
				}, `bar-${t}`) }))
			]
		})
	});
}), Hu = ({ viewBox: e, offset: t = 0, value: n, valueFormatter: r, total: i, showLabel: a }) => {
	let { x: o = 0, y: s = 0, width: c = 0, height: l = 0 } = e, u = o + c + t, d = s + l / 2, f = r ? r(n) : n, p = vu(`${f}`), m = i > 0 ? Math.round(Number(n) / i * 100) : 0;
	return /* @__PURE__ */ R("g", {
		transform: `translate(${u},${d + 4})`,
		children: [a && /* @__PURE__ */ L("text", {
			x: 0,
			textAnchor: "start",
			className: "fill-f1-foreground-secondary text-sm font-medium",
			children: f
		}), /* @__PURE__ */ R("text", {
			x: a ? p + 8 : 0,
			textAnchor: "start",
			className: "fill-f1-foreground text-sm font-medium",
			children: [m, "%"]
		})]
	});
}, Uu = a(i({
	name: "AreaChart",
	type: "info"
}, Eu)), Wu = a(i({
	name: "BarChart",
	type: "info"
}, Du)), Gu = a(i({
	name: "CategoryBarChart",
	type: "info"
}, Ou)), Ku = a(i({
	name: "LineChart",
	type: "info"
}, Nu)), qu = a(i({
	name: "PieChart",
	type: "info"
}, Pu)), Ju = a(i({
	name: "VerticalBarChart",
	type: "info"
}, Vu)), Yu = a(i({
	name: "ProgressBarChart",
	type: "info"
}, Fu)), Xu = a(i({
	name: "ComboChart",
	type: "info"
}, Mu)), Zu = a(i({
	name: "RadarChart",
	type: "info"
}, Lu)), Qu = (e, t = {}, n = 0) => {
	let r = F(t);
	r.current = t;
	let i = F(n);
	i.current = n;
	let [a, o] = I(!1), [s, c] = I(0), [l, u] = I(n), [d, f] = I(0), [p, m] = I(1), [h, g] = I(!0), [_, v] = I(null);
	P(() => {
		let t = e.current;
		if (!t) return;
		let n = () => {
			u(Number.isFinite(t.duration) ? t.duration : i.current), g(!1);
		}, a = () => {
			c(t.currentTime), r.current.onTimeUpdate?.(t.currentTime);
		}, s = () => {
			o(!0), r.current.onPlay?.();
		}, l = () => {
			o(!1), r.current.onPause?.();
		}, d = () => {
			o(!1), r.current.onEnded?.();
		}, p = () => {
			t.buffered.length > 0 && f(t.buffered.end(t.buffered.length - 1));
		}, h = () => g(!0), _ = () => g(!1), y = () => m(t.playbackRate), b = () => {
			v(t.error), g(!1), r.current.onError?.(t.error);
		};
		return t.addEventListener("loadedmetadata", n), t.addEventListener("timeupdate", a), t.addEventListener("play", s), t.addEventListener("pause", l), t.addEventListener("ended", d), t.addEventListener("progress", p), t.addEventListener("waiting", h), t.addEventListener("canplay", _), t.addEventListener("ratechange", y), t.addEventListener("error", b), t.readyState >= 1 && n(), () => {
			t.removeEventListener("loadedmetadata", n), t.removeEventListener("timeupdate", a), t.removeEventListener("play", s), t.removeEventListener("pause", l), t.removeEventListener("ended", d), t.removeEventListener("progress", p), t.removeEventListener("waiting", h), t.removeEventListener("canplay", _), t.removeEventListener("ratechange", y), t.removeEventListener("error", b);
		};
	}, [e]);
	let y = N(() => {
		e.current?.play().catch(() => {});
	}, [e]), b = N(() => {
		e.current?.pause();
	}, [e]);
	return {
		isPlaying: a,
		currentTime: s,
		duration: l,
		buffered: d,
		playbackRate: p,
		isLoading: h,
		error: _,
		play: y,
		pause: b,
		toggle: N(() => {
			a ? b() : y();
		}, [
			a,
			y,
			b
		]),
		seek: N((t) => {
			let n = e.current;
			if (!n) return;
			let i = Number.isFinite(n.duration) ? n.duration : t, a = Math.min(Math.max(t, 0), i);
			n.currentTime = a, c(a), r.current.onSeek?.(a);
		}, [e]),
		setPlaybackRate: N((t) => {
			let n = e.current;
			n && (n.playbackRate = t, m(t));
		}, [e])
	};
}, $u = [
	"sm",
	"md",
	"lg"
], ed = ["compact", "expanded"], td = [
	"accent",
	"critical",
	"warning",
	"promote",
	"info",
	"positive",
	"mood-super-negative",
	"mood-negative",
	"mood-neutral",
	"mood-positive",
	"mood-super-positive"
], nd = Ne, rd = ["field", "inline"], id = Se, ad = {
	today: {
		label: "Today",
		granularity: "day",
		value: () => O.day.toRange(/* @__PURE__ */ new Date())
	},
	yesterday: {
		label: "Yesterday",
		granularity: "day",
		value: () => O.day.toRange(Qt(/* @__PURE__ */ new Date(), 1))
	},
	last7Days: {
		label: "Last 7 days",
		granularity: "day",
		value: () => O.day.toRange({
			from: Qt(/* @__PURE__ */ new Date(), 7),
			to: /* @__PURE__ */ new Date()
		})
	},
	thisWeek: {
		label: "This week",
		granularity: "week",
		value: () => O.week.toRange(/* @__PURE__ */ new Date())
	},
	lastWeek: {
		label: "Last week",
		granularity: "week",
		value: () => O.week.toRange(Qt(/* @__PURE__ */ new Date(), 7))
	},
	thisMonth: {
		label: "This month",
		granularity: "month",
		value: () => O.month.toRange(/* @__PURE__ */ new Date())
	},
	lastMonth: {
		label: "Last month",
		granularity: "month",
		value: () => O.month.toRange(ao(/* @__PURE__ */ new Date(), 1))
	},
	last3Months: {
		label: "Last 3 months",
		granularity: "month",
		value: () => O.month.toRange(ao(/* @__PURE__ */ new Date(), 3))
	},
	last6Months: {
		label: "Last 6 months",
		granularity: "month",
		value: () => O.month.toRange(ao(/* @__PURE__ */ new Date(), 6))
	},
	thisQuarter: {
		label: "This quarter",
		granularity: "quarter",
		value: () => O.quarter.toRange(/* @__PURE__ */ new Date())
	},
	lastQuarter: {
		label: "Last quarter",
		granularity: "quarter",
		value: () => O.quarter.toRange(ao(/* @__PURE__ */ new Date(), 3))
	},
	thisHalfYear: {
		label: "This half year",
		granularity: "halfyear",
		value: () => O.halfyear.toRange(/* @__PURE__ */ new Date())
	},
	lastHalfYear: {
		label: "Last half year",
		granularity: "halfyear",
		value: () => O.halfyear.toRange(ao(/* @__PURE__ */ new Date(), 6))
	},
	lastYear: {
		label: "Last year",
		granularity: "year",
		value: () => O.year.toRange(oo(/* @__PURE__ */ new Date(), 1))
	},
	last3Years: {
		label: "Last 3 years",
		granularity: "year",
		value: () => O.year.toRange(oo(/* @__PURE__ */ new Date(), 3))
	}
}, od = re, sd = D, cd = ue, ld = Rr(function({ title: e, onClose: t, content: n, primaryAction: r, secondaryAction: i }, a) {
	return /* @__PURE__ */ R("div", {
		ref: a,
		className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
		"data-testid": "ai-banner",
		children: [/* @__PURE__ */ R("div", {
			className: "flex flex-row items-center justify-between px-4 py-2",
			children: [/* @__PURE__ */ L(s, {
				className: "font-medium",
				children: e
			}), t && /* @__PURE__ */ L(v, {
				variant: "ghost",
				icon: wn,
				size: "sm",
				hideLabel: !0,
				onClick: t,
				label: "Close"
			})]
		}), /* @__PURE__ */ R("div", {
			className: "flex flex-col gap-[1px]",
			children: [/* @__PURE__ */ L("div", {
				className: S("bg-f1-background px-4 py-3", i || r ? "rounded-t-[13.25px]" : "rounded-[13.25px]"),
				children: /* @__PURE__ */ L(jn, { content: n })
			}), (i || r) && /* @__PURE__ */ R("div", {
				className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
				children: [/* @__PURE__ */ L("div", { children: i && /* @__PURE__ */ L(v, {
					label: i.label,
					onClick: i.onClick,
					variant: "outline",
					icon: i.icon
				}) }), /* @__PURE__ */ L("div", { children: r && /* @__PURE__ */ L(v, {
					label: r.label,
					onClick: r.onClick,
					variant: "outline",
					icon: r.icon
				}) })]
			})]
		})]
	});
}), ud = ({ compact: e }) => /* @__PURE__ */ R("div", {
	className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ L("div", {
		className: "flex flex-row items-center justify-between px-4 py-2",
		children: /* @__PURE__ */ L(m, { className: "h-5 w-32 rounded-md" })
	}), /* @__PURE__ */ R("div", {
		className: "flex flex-col gap-[1px]",
		children: [/* @__PURE__ */ L("div", {
			className: S("rounded-t-[13.25px] bg-f1-background px-4 py-3", e && "rounded-[13.25px]"),
			children: /* @__PURE__ */ R("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ L(m, { className: "h-4 w-full rounded-md" }),
					/* @__PURE__ */ L(m, { className: "h-4 w-3/4 rounded-md" }),
					/* @__PURE__ */ L(m, { className: "h-4 w-1/2 rounded-md" })
				]
			})
		}), !e && /* @__PURE__ */ R("div", {
			className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
			children: [/* @__PURE__ */ L(m, { className: "h-8 w-24 rounded-md" }), /* @__PURE__ */ L(m, { className: "h-8 w-28 rounded-md" })]
		})]
	})]
}), dd = Rr((e, t) => /* @__PURE__ */ L(ld, {
	ref: t,
	...e
})), fd = ({ compact: e }) => /* @__PURE__ */ L(ud, { compact: e });
dd.displayName = "F0AiBanner";
var pd = Nr(a(dd), fd), md = [
	gr,
	Rn,
	qn,
	Fn,
	Yn,
	hr,
	jr,
	In,
	Kn,
	Jn,
	$n,
	Ln,
	kr
], hd = (e) => {
	if (!e?.content) return "";
	try {
		return Xn(e.content, md);
	} catch {
		return "";
	}
}, gd = (e, t) => Ur(() => {
	if (t?.selectedTitle || t?.selectedEmoji) return {
		title: t.selectedTitle || e.title,
		emoji: t.selectedEmoji
	};
	let n = e.buttons?.find((e) => e.type === t?.selectedAction);
	return n ? {
		title: n.label,
		emoji: n.emoji
	} : { title: e.title };
}, [t, e]), _d = (e, t) => {
	let [n, r] = I(!1);
	return {
		isLoading: n,
		handleClick: N(async (n) => {
			let i = e.buttons?.find((e) => e.type === n), a = {
				selectedAction: n,
				selectedTitle: i?.label || n,
				selectedEmoji: i?.emoji || "🤖",
				isEditable: i?.editable ?? !1
			};
			r(!0), t({ data: {
				...a,
				content: null
			} });
			try {
				let r = await e.onClick(n);
				t({ data: {
					...a,
					content: r
				} });
			} catch (e) {
				console.error("AIBlock error:", e), t({ data: {
					...a,
					content: null
				} });
			} finally {
				r(!1);
			}
		}, [e, t])
	};
}, vd = (e, t, n) => {
	P(() => {
		if (!(!n?.selectedAction || !e?.buttons) && (!n?.selectedTitle || !n?.selectedEmoji || n?.isEditable === void 0)) {
			let r = e.buttons.find((e) => e.type === n.selectedAction);
			r && t({ data: {
				...n,
				selectedTitle: r.label,
				selectedEmoji: r.emoji,
				isEditable: r.editable ?? !1
			} });
		}
	}, [
		n,
		e,
		t
	]);
}, yd = (e, t, n) => {
	P(() => {
		e?.shouldExecute && e?.selectedAction && t && n && (n({ data: {
			...e,
			shouldExecute: !1
		} }), t(e.selectedAction));
	}, [
		t,
		n,
		e
	]);
}, bd = (e, t, n, r) => {
	P(() => {
		if (!r?.content || !r?.isEditable || !e || !n) return;
		let i = n();
		i !== void 0 && (t(), r.content && e.chain().focus().setTextSelection(i).insertContent(r.content).run());
	}, [
		r,
		e,
		n,
		t
	]);
}, xd = ({ config: e, isLoading: t, onButtonClick: n }) => /* @__PURE__ */ R("div", {
	className: "flex flex-col gap-2",
	children: [e.title && /* @__PURE__ */ L("div", {
		className: "text-f1-foreground-secondary",
		children: e.title
	}), /* @__PURE__ */ L("div", {
		className: "relative flex flex-row flex-wrap items-center gap-2",
		children: e.buttons?.map((e, r) => /* @__PURE__ */ L(v, {
			onClick: () => n(e.type),
			variant: "outline",
			icon: e.icon,
			label: e.label,
			disabled: t
		}, r))
	})]
}), Sd = ({ isEditable: e }) => e ? /* @__PURE__ */ R("div", {
	className: "flex flex-col gap-2",
	children: [
		/* @__PURE__ */ L(m, { className: "h-4 w-1/2 rounded-md" }),
		/* @__PURE__ */ L(m, { className: "h-4 w-full rounded-md" }),
		/* @__PURE__ */ L(m, { className: "h-4 w-3/4 rounded-md" }),
		/* @__PURE__ */ L(m, { className: "h-4 w-1/3 rounded-md" })
	]
}) : /* @__PURE__ */ L(pd.Skeleton, { compact: !0 }), Cd = ({ node: e, updateAttributes: t, deleteNode: n, extension: r, editor: i, getPos: a }) => {
	let o = e.attrs.data, s = r.options.currentConfig || e.attrs.config, { title: c } = gd(s, o), { isLoading: l, handleClick: u } = _d(s, t), d = !!(o?.selectedAction && !o?.content), f = l || d, p = hd(o);
	if (bd(i, n, a, o), vd(s, t, o), yd(o, u, t), !o || !s || !s.buttons?.length) return null;
	let m = !!o?.content, h = !!(o?.selectedTitle || o?.selectedAction) && m && !o?.isEditable;
	return /* @__PURE__ */ L(zn, {
		contentEditable: !1,
		children: /* @__PURE__ */ R("div", {
			className: "mb-3",
			children: [f ? /* @__PURE__ */ L(Sd, { isEditable: o?.isEditable }) : h ? /* @__PURE__ */ L(pd, {
				title: c,
				content: p,
				onClose: () => n()
			}) : /* @__PURE__ */ L("div", {
				className: "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ L(xd, {
					config: s,
					isLoading: f,
					onButtonClick: u
				})
			}), /* @__PURE__ */ L(tr, { style: { display: "none" } })]
		})
	});
}, wd = ir.create({
	name: "aiBlock",
	group: "block",
	atom: !0,
	selectable: !0,
	draggable: !0,
	addOptions() {
		return { currentConfig: null };
	},
	addAttributes() {
		return {
			data: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("data-ai-block");
					return t ? JSON.parse(t) : null;
				},
				renderHTML: (e) => e.data ? { "data-ai-block": JSON.stringify(e.data) } : {}
			},
			config: { default: null },
			isCollapsed: { default: !1 }
		};
	},
	parseHTML() {
		return [{ tag: "div[data-ai-block]" }];
	},
	renderHTML({ HTMLAttributes: e, node: t }) {
		let n = t.attrs.data, r = t.attrs.config;
		return !n || !r ? ["div"] : [
			"div",
			{
				...e,
				class: "ai-block",
				"data-ai-block": JSON.stringify(n)
			},
			[
				"div",
				{ class: "ai-block-content" },
				`AI Block: ${r.title}`
			]
		];
	},
	addNodeView() {
		return Un(Cd);
	},
	addCommands() {
		return {
			insertAIBlock: (e, t) => ({ commands: n }) => n.insertContent({
				type: this.name,
				attrs: {
					data: e,
					config: t
				}
			}),
			executeAIAction: (e, t) => ({ commands: n }) => {
				let r = t.buttons?.find((t) => t.type === e);
				return r ? n.insertContent([{
					type: this.name,
					attrs: {
						data: {
							content: null,
							selectedAction: e,
							selectedTitle: r.label,
							selectedEmoji: r.emoji,
							isEditable: r.editable ?? !1,
							shouldExecute: !0
						},
						config: t
					}
				}, { type: "paragraph" }]) : !1;
			}
		};
	}
}), Td = sr(), Ed = [
	"paragraph",
	"heading",
	"blockquote",
	"codeBlock",
	"bulletList",
	"orderedList",
	"listItem",
	"table",
	"details"
], Dd = new Set(Ed), Od = (e) => e ? Dd.has(e) : !1, kd = (e) => e ? Od(e.type) && !e.attrs?.id ? !0 : e.content?.some(kd) ?? !1 : !1, Ad = (e) => {
	if (!e) return !1;
	if (Od(e.type.name) && !e.attrs.id) return !0;
	for (let t = 0; t < e.childCount; t += 1) if (Ad(e.child(t))) return !0;
	return !1;
}, jd = (e) => e ? e instanceof dr ? Ad(e) : kd(e) : !1, Md = nr.create({
	name: "blockId",
	addGlobalAttributes() {
		return [{
			types: Ed,
			attributes: { id: {
				default: null,
				parseHTML: (e) => e.getAttribute("data-id"),
				renderHTML: (e) => e.id ? { "data-id": e.id } : {},
				keepOnSplit: !1
			} }
		}];
	},
	addProseMirrorPlugins() {
		return [new xr({
			key: new Tr("blockIdPlugin"),
			appendTransaction: (e, t, n) => {
				if (!e.some((e) => e.docChanged)) return null;
				let r = n.tr, i = !1, a = [];
				return e.forEach((e) => {
					e.docChanged && e.steps.forEach((e) => {
						e.getMap().forEach((e, t, r, i) => {
							let o = Math.max(0, Math.min(r, n.doc.content.size)), s = Math.max(0, Math.min(i, n.doc.content.size));
							o < s && a.push({
								from: o,
								to: s
							});
						});
					});
				}), a.length > 0 ? a.forEach(({ from: e, to: t }) => {
					e >= 0 && t <= n.doc.content.size && e < t && n.doc.nodesBetween(e, t, (e, t) => {
						if (Od(e.type.name) && !e.attrs.id) {
							let n = Hn(5);
							r.setNodeMarkup(t, void 0, {
								...e.attrs,
								id: n
							}), i = !0;
						}
					});
				}) : n.doc.descendants((e, t) => {
					if (Od(e.type.name) && !e.attrs.id) {
						let n = Hn(5);
						r.setNodeMarkup(t, void 0, {
							...e.attrs,
							id: n
						}), i = !0;
					}
					return !0;
				}), i ? r : null;
			}
		})];
	}
}), Nd = (e, t) => {
	let n = null;
	return e.state.doc.descendants((e, r) => e.attrs.id !== t || (n = {
		node: e,
		pos: r
	}, !1)), n;
}, Pd = ({ key: e, editor: t, onPaste: n, onDrop: r, allowedMimeTypes: i }) => new xr({
	key: e || new Tr("fileHandler"),
	props: {
		handleDrop(e, n) {
			if (!r || !n.dataTransfer?.files.length) return !1;
			let a = e.posAtCoords({
				left: n.clientX,
				top: n.clientY
			}), o = Array.from(n.dataTransfer.files);
			return i && (o = o.filter((e) => i.includes(e.type))), o.length !== 0 && (n.preventDefault(), n.stopPropagation(), r(t, o, a?.pos || 0), !0);
		},
		handlePaste(e, r) {
			if (!n || !r.clipboardData?.files.length) return !1;
			let a = Array.from(r.clipboardData.files), o = r.clipboardData.getData("text/html");
			return i && (a = a.filter((e) => i.includes(e.type))), !(a.length === 0 || (r.preventDefault(), r.stopPropagation(), n(t, a, o), o.length > 0));
		}
	}
}), Fd = nr.create({
	name: "fileHandler",
	addOptions() {
		return {
			onPaste: void 0,
			onDrop: void 0,
			allowedMimeTypes: void 0
		};
	},
	addProseMirrorPlugins() {
		return [Pd({
			key: new Tr(this.name),
			editor: this.editor,
			allowedMimeTypes: this.options.allowedMimeTypes,
			onDrop: this.options.onDrop,
			onPaste: this.options.onPaste
		})];
	}
}), Id = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Ld = ir.create({
	name: "image",
	addOptions() {
		return {
			inline: !1,
			allowBase64: !1,
			HTMLAttributes: {}
		};
	},
	inline() {
		return this.options.inline;
	},
	group() {
		return this.options.inline ? "inline" : "block";
	},
	draggable: !0,
	addAttributes() {
		return {
			src: { default: null },
			alt: { default: null },
			title: { default: null }
		};
	},
	parseHTML() {
		return [{ tag: this.options.allowBase64 ? "img[src]" : "img[src]:not([src^=\"data:\"])" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["img", Nn(this.options.HTMLAttributes, e)];
	},
	addCommands() {
		return { setImage: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: e
		}) };
	},
	addInputRules() {
		return [ur({
			find: Id,
			type: this.type,
			getAttributes: (e) => {
				let [, , t, n, r] = e;
				return {
					src: n,
					alt: t,
					title: r
				};
			}
		})];
	}
}), Rd = 52428800, zd = [
	"image/jpeg",
	"image/png",
	"image/gif",
	"image/webp"
], Bd = 10, Vd = 100, Hd = ({ node: e, deleteNode: t, selected: n, editor: r, updateAttributes: i }) => {
	let { src: a, alt: o, title: s, uploading: c, width: l } = e.attrs, d = r.isEditable, f = u(), [p, m] = I(!1), h = N((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = e.clientX, n = l ?? Vd, a = r.view.dom.clientWidth, o = (e) => {
			let r = (e.clientX - t) / a * 100, o = Math.min(Vd, Math.max(Bd, n + r));
			i({ width: Math.round(o) });
		}, s = () => {
			m(!1), document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", s);
		};
		m(!0), document.addEventListener("mousemove", o), document.addEventListener("mouseup", s);
	}, [
		r,
		l,
		i
	]);
	return /* @__PURE__ */ L(zn, {
		className: "mb-2",
		children: /* @__PURE__ */ R("div", {
			style: { width: `${l ?? Vd}%` },
			className: S("image-resizable-wrapper group/image relative rounded-lg", n && "border-2 border-f1-border-selected-bold border-solid", p && "select-none"),
			children: [
				/* @__PURE__ */ L("img", {
					src: a,
					alt: o,
					title: s,
					draggable: !1,
					className: "block h-auto w-full rounded-md transition-all duration-150 ease-out"
				}),
				c && /* @__PURE__ */ L("div", {
					className: "absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200",
					children: /* @__PURE__ */ L(Me, { size: "medium" })
				}),
				d && !c && /* @__PURE__ */ L("div", {
					className: "absolute right-2 top-2 opacity-0 transition-opacity group-hover/image:opacity-100",
					children: /* @__PURE__ */ L(v, {
						onClick: t,
						label: f.actions.delete,
						icon: ce,
						variant: "default",
						hideLabel: !0
					})
				}),
				d && !c && /* @__PURE__ */ L("div", {
					className: S("absolute right-2 top-1/2 -translate-y-1/2 flex cursor-col-resize items-center justify-center", "h-12 w-2 rounded-sm border border-solid border-f1-border bg-f1-foreground-inverse-secondary", "opacity-0 transition-opacity group-hover/image:opacity-100", p && "opacity-100"),
					onMouseDown: h,
					role: "separator",
					"aria-orientation": "vertical",
					"aria-label": "Resize image",
					tabIndex: 0
				})
			]
		})
	});
}, Ud = Ld.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			width: {
				default: Vd,
				parseHTML: (e) => {
					let t = e.style.width;
					return t?.endsWith("%") && parseInt(t, 10) || Vd;
				},
				renderHTML: (e) => !e.width || e.width === Vd ? {} : { style: `width: ${e.width}%` }
			},
			uploading: {
				default: !1,
				renderHTML: () => ({}),
				parseHTML: () => !1
			},
			"data-upload-id": {
				default: null,
				renderHTML: () => ({}),
				parseHTML: () => null
			}
		};
	},
	addNodeView() {
		return Un(Hd);
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["img", Nn(this.options.HTMLAttributes, e)];
	}
}).configure({
	inline: !1,
	allowBase64: !0
}), Wd = (e, t) => {
	let n = null;
	return e.state.doc.descendants((e, r) => e.type.name === "image" && e.attrs["data-upload-id"] === t ? (n = r, !1) : !0), n;
}, Gd = async (e, t, n, r) => {
	let i = n.maxFileSize ?? Rd, { onError: a } = n;
	if (!zd.includes(t.type)) {
		a?.("invalid-type");
		return;
	}
	if (t.size > i) {
		a?.("file-too-large");
		return;
	}
	let o = URL.createObjectURL(t), s = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`, c = r ?? e.state.selection.anchor;
	e.chain().focus().insertContentAt(c, [{
		type: "image",
		attrs: {
			src: o,
			alt: t.name,
			uploading: !0,
			"data-upload-id": s
		}
	}]).run();
	try {
		let { url: r } = await n.onUpload(t), i = Wd(e, s);
		i !== null && e.chain().setNodeSelection(i).updateAttributes("image", {
			src: r,
			uploading: !1,
			"data-upload-id": null
		}).run();
	} catch {
		a?.("upload-failed");
		let t = Wd(e, s);
		t !== null && e.chain().setNodeSelection(t).deleteSelection().run();
	} finally {
		URL.revokeObjectURL(o);
	}
}, Kd = (e) => Fd.configure({
	allowedMimeTypes: zd,
	onDrop: (t, n, r) => {
		n.forEach((n) => {
			Gd(t, n, e, r);
		});
	},
	onPaste: (t, n) => {
		n.forEach((n) => {
			Gd(t, n, e);
		});
	}
}), qd = (e, t, n) => {
	Gd(e, t, n);
}, Jd = [
	"superNegative",
	"negative",
	"neutral",
	"positive",
	"superPositive"
], Yd = {
	superNegative: lt,
	negative: dt,
	neutral: st,
	positive: qe,
	superPositive: Be
}, Xd = {
	superNegative: "mood-super-negative",
	negative: "mood-negative",
	neutral: "mood-neutral",
	positive: "mood-positive",
	superPositive: "mood-super-positive"
}, Zd = ({ node: e, deleteNode: t, updateAttributes: n }) => {
	let r = u(), [i, a] = I(e.attrs.isOpen ?? !1), o = e.attrs.data;
	if (!o) return null;
	let s = () => {
		let e = !i;
		a(e), n({ isOpen: e });
	}, c = [{
		label: r.actions.delete,
		icon: ce,
		critical: !0,
		onClick: () => t()
	}];
	return /* @__PURE__ */ R(zn, {
		contentEditable: !1,
		children: [/* @__PURE__ */ R("div", {
			className: "editor-mood-tracker mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ R("div", {
				className: "flex flex-row items-center justify-between gap-2",
				children: [/* @__PURE__ */ L("div", {
					className: "flex flex-row items-center gap-2",
					children: /* @__PURE__ */ R("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ R("div", {
							className: "flex flex-row items-center gap-3",
							children: [/* @__PURE__ */ L("p", {
								className: "text-f1-text-primary text-lg font-semibold",
								children: o.title
							}), /* @__PURE__ */ L("div", {
								className: "flex flex-row items-center",
								children: o.days.map((e, t) => /* @__PURE__ */ L("div", {
									className: "-ml-1.5 flex items-center justify-center rounded-full bg-f1-background",
									children: /* @__PURE__ */ L(l, {
										icon: Yd[e.mood],
										size: "lg",
										color: Xd[e.mood]
									})
								}, t))
							})]
						}), /* @__PURE__ */ L("p", { children: /* @__PURE__ */ L("span", {
							className: "text-f1-text-primary text-md font-normal",
							children: o.averageMoodComment
						}) })]
					})
				}), /* @__PURE__ */ R("div", {
					className: "flex flex-row items-center gap-1",
					children: [/* @__PURE__ */ L(v, {
						onClick: s,
						variant: "outline",
						hideLabel: !0,
						label: i ? r.actions.collapse : r.actions.expand,
						icon: i ? Oe : en,
						size: "sm"
					}), /* @__PURE__ */ L(En, {
						items: c,
						size: "sm"
					})]
				})]
			}), i && /* @__PURE__ */ L("div", {
				className: "text-f1-text-primary flex flex-col gap-2",
				children: o.days.map((e, t) => /* @__PURE__ */ R("div", {
					className: "flex flex-row items-center gap-2",
					children: [/* @__PURE__ */ L("div", {
						className: "flex items-center justify-center rounded-full",
						children: /* @__PURE__ */ L(l, {
							icon: Yd[e.mood],
							size: "lg",
							color: Xd[e.mood]
						})
					}), /* @__PURE__ */ R("p", {
						className: "text-f1-text-primary text-md font-normal",
						children: [
							/* @__PURE__ */ R("span", {
								className: "font-semibold",
								children: [e.day, ":"]
							}),
							" ",
							e.comment || "-"
						]
					})]
				}, t))
			})]
		}), /* @__PURE__ */ L(tr, { style: { display: "none" } })]
	});
}, Qd = ir.create({
	name: "moodTracker",
	group: "block",
	atom: !0,
	selectable: !0,
	draggable: !0,
	addOptions() {
		return { currentConfig: null };
	},
	addAttributes() {
		return {
			data: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("data-mood-tracker");
					return t ? JSON.parse(t) : null;
				},
				renderHTML: (e) => e.data ? { "data-mood-tracker": JSON.stringify(e.data) } : {}
			},
			config: { default: null },
			isOpen: { default: !1 }
		};
	},
	parseHTML() {
		return [{ tag: "div[data-mood-tracker]" }];
	},
	renderHTML({ HTMLAttributes: e, node: t }) {
		let n = t.attrs.data;
		return n ? [
			"div",
			{
				...e,
				class: "mood-tracker-block",
				"data-mood-tracker": JSON.stringify(n)
			},
			[
				"div",
				{ class: "mood-tracker-content" },
				`Mood Tracker: ${n.title}`
			]
		] : ["div"];
	},
	addNodeView() {
		return Un(Zd);
	},
	addCommands() {
		return { insertMoodTracker: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: { data: e }
		}) };
	}
}), $d = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/, ef = /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/, tf = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*)$/gm, nf = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\S*)$/gm;
function rf(e) {
	let t = e.match($d);
	if (t) return {
		provider: "youtube",
		videoId: t[1],
		embedUrl: `https://www.youtube-nocookie.com/embed/${t[1]}`
	};
	let n = e.match(ef);
	return n ? {
		provider: "vimeo",
		videoId: n[1],
		embedUrl: `https://player.vimeo.com/video/${n[1]}`
	} : null;
}
var af = ({ node: e, deleteNode: t, selected: n, editor: r }) => {
	let { src: i, provider: a } = e.attrs, o = r.isEditable, s = u();
	return /* @__PURE__ */ L(zn, {
		className: "mb-2",
		children: /* @__PURE__ */ R("div", {
			className: S("video-embed-wrapper relative overflow-hidden rounded-lg", n && "border-2 border-solid border-f1-border-selected-bold"),
			children: [/* @__PURE__ */ L("div", {
				className: "relative w-full",
				style: { paddingBottom: "56.25%" },
				children: /* @__PURE__ */ L("iframe", {
					src: i,
					title: `${a} video`,
					className: "absolute inset-0 h-full w-full border-0",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: !0
				})
			}), o && /* @__PURE__ */ L("div", {
				className: "dark absolute right-2 top-2",
				children: /* @__PURE__ */ L(v, {
					onClick: t,
					label: s.actions.delete,
					icon: ce,
					variant: "outline",
					hideLabel: !0,
					size: "sm"
				})
			})]
		})
	});
}, of = ir.create({
	name: "videoEmbed",
	group: "block",
	atom: !0,
	draggable: !0,
	addAttributes() {
		return {
			src: { default: null },
			provider: { default: null },
			videoId: { default: null }
		};
	},
	parseHTML() {
		return [{ tag: "div[data-video-embed]" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"div",
			Nn(e, { "data-video-embed": "" }),
			["iframe", {
				src: e.src,
				frameborder: "0",
				allowfullscreen: "true",
				allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
				style: "width:100%;aspect-ratio:16/9;"
			}]
		];
	},
	addNodeView() {
		return Un(af);
	},
	addCommands() {
		return { setVideoEmbed: ({ src: e }) => ({ commands: t }) => {
			let n = rf(e);
			return n ? t.insertContent({
				type: this.name,
				attrs: {
					src: n.embedUrl,
					provider: n.provider,
					videoId: n.videoId
				}
			}) : !1;
		} };
	},
	addPasteRules() {
		return [Er({
			find: tf,
			type: this.type,
			getAttributes: (e) => {
				let t = rf(e[0]);
				return t ? {
					src: t.embedUrl,
					provider: t.provider,
					videoId: t.videoId
				} : !1;
			}
		}), Er({
			find: nf,
			type: this.type,
			getAttributes: (e) => {
				let t = rf(e[0]);
				return t ? {
					src: t.embedUrl,
					provider: t.provider,
					videoId: t.videoId
				} : !1;
			}
		})];
	}
}), sf = ({ aiBlockConfig: e, translations: t, imageUploadConfig: n }) => [
	...e?.buttons && e.buttons.length > 0 ? [{
		title: e.title,
		commands: [...e.buttons.map((t) => ({
			title: t.label,
			command: (n) => {
				n.chain().focus().executeAIAction(t.type, e).run();
			},
			icon: t.icon
		}))]
	}] : [],
	{
		title: t.richTextEditor.groups.textStyles,
		commands: [
			{
				title: t.richTextEditor.heading1,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleHeading({ level: 1 }).run();
				},
				icon: ge
			},
			{
				title: t.richTextEditor.heading2,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleHeading({ level: 2 }).run();
				},
				icon: fe
			},
			{
				title: t.richTextEditor.heading3,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleHeading({ level: 3 }).run();
				},
				icon: _e
			}
		]
	},
	{
		title: t.richTextEditor.groups.lists,
		commands: [
			{
				title: t.richTextEditor.bulletList,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleBulletList().run();
				},
				icon: le
			},
			{
				title: t.richTextEditor.orderedList,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleOrderedList().run();
				},
				icon: pe
			},
			{
				title: t.richTextEditor.taskList,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleTaskList().run();
				},
				icon: he
			}
		]
	},
	{
		title: t.richTextEditor.groups.blocks,
		commands: [
			...n ? [{
				title: "Image",
				command: (e) => {
					let t = document.createElement("input");
					t.type = "file", t.accept = zd.join(","), t.onchange = () => {
						let r = t.files?.[0];
						r && qd(e, r, n);
					}, t.click();
				},
				icon: Ze
			}] : [],
			{
				title: t.richTextEditor.video,
				command: (e) => {
					let n = window.prompt(t.richTextEditor.videoUrlPrompt);
					n && (rf(n) ? e.commands.setVideoEmbed({ src: n }) : window.alert(t.richTextEditor.videoUrlInvalid));
				},
				icon: ht
			},
			{
				title: t.richTextEditor.details,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).setDetails().run();
				},
				icon: en
			},
			{
				title: t.richTextEditor.codeBlock,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleCodeBlock().run();
				},
				icon: me
			},
			{
				title: t.richTextEditor.quote,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleBlockquote().run();
				},
				icon: Mn
			},
			{
				title: t.richTextEditor.divider,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).setHorizontalRule().run();
				},
				icon: Yt
			}
		]
	}
], cf = Rr(({ items: e, groups: t, command: n }, r) => {
	let [i, a] = I(0), o = F(null), s = F(null), c = Ur(() => t || [{
		title: "",
		commands: e
	}], [t, e]), u = Ur(() => c.flatMap((e) => e.commands), [c]), d = Ur(() => {
		let e = [], t = 0;
		for (let n of c) e.push(t), t += n.commands.length;
		return e;
	}, [c]), f = N((e) => {
		let t = u[e];
		t && n(t);
	}, [u, n]), p = N((e) => {
		let t = o.current;
		if (!t) return;
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
		r.top < n.top ? t.scrollTop += r.top - n.top : r.bottom > n.bottom && (t.scrollTop += r.bottom - n.bottom);
	}, []), m = N(() => {
		a((e) => e <= 0 ? u.length - 1 : e - 1);
	}, [u.length]), h = N(() => {
		a((e) => e >= u.length - 1 ? 0 : e + 1);
	}, [u.length]), g = N(() => {
		f(i);
	}, [i, f]);
	P(() => {
		s.current && p(s.current);
	}, [i, p]), P(() => {
		a(0);
	}, [e.length]), Vr(r, () => ({ onKeyDown: ({ event: e }) => e.key === "ArrowUp" ? (e.preventDefault(), m(), !0) : e.key === "ArrowDown" ? (e.preventDefault(), h(), !0) : e.key === "Enter" && (e.preventDefault(), g(), !0) }), [
		m,
		h,
		g
	]);
	let _ = (e, t) => d[e] + t;
	return /* @__PURE__ */ L("div", {
		ref: o,
		className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
		children: c.map((e, n) => /* @__PURE__ */ R("div", { children: [/* @__PURE__ */ R("div", {
			className: "p-1",
			children: [t && e.title && /* @__PURE__ */ L("div", {
				className: "p-2",
				children: /* @__PURE__ */ L("p", {
					className: "text-sm font-medium tracking-wide text-f1-foreground-secondary",
					children: e.title
				})
			}), e.commands.map((e, t) => {
				let r = _(n, t), o = r === i;
				return /* @__PURE__ */ R("div", {
					ref: o ? s : null,
					className: S("flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover", o && "bg-f1-background-secondary"),
					onClick: () => {
						a(r), f(r);
					},
					onMouseEnter: () => a(r),
					children: [e.emoji ? /* @__PURE__ */ L("span", {
						className: "text-base",
						children: e.emoji
					}) : e.icon ? /* @__PURE__ */ L(l, {
						icon: e.icon,
						className: "text-f1-foreground-secondary"
					}) : null, /* @__PURE__ */ L("p", {
						className: "flex-grow text-sm font-medium text-f1-foreground",
						children: e.title
					})]
				}, `${n}-${t}`);
			})]
		}), t && n < c.length - 1 && /* @__PURE__ */ L("div", {
			className: "py-1",
			children: /* @__PURE__ */ L("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
		})] }, n))
	});
});
cf.displayName = "CommandList";
//#endregion
//#region src/components/RichText/internal/Extensions/SlashCommand/index.tsx
var lf = ({ aiBlockConfig: e, translations: t, imageUploadConfig: n }) => {
	let r = sf({
		aiBlockConfig: e,
		translations: t,
		imageUploadConfig: n
	}), i = r.flatMap((e) => e.commands).map((e) => ({
		item: e,
		search: e.title.toLowerCase()
	})), a = (e) => {
		let t = e.toLowerCase().trim();
		return t ? i.filter(({ search: e }) => e.includes(t)).map(({ item: e }) => e) : i.map(({ item: e }) => e);
	}, o = (e) => {
		if (!e || !e.trim()) return r;
		let t = e.toLowerCase().trim();
		return r.map((e) => ({
			...e,
			commands: e.commands.filter((e) => e.title.toLowerCase().includes(t))
		})).filter((e) => e.commands.length > 0);
	};
	return nr.create({
		name: "slashCommand",
		addOptions() {
			return { suggestion: {
				char: "/",
				allowSpaces: !0,
				allowedPrefixes: [" ", "\n"],
				startOfLine: !1,
				command: ({ editor: e, range: t, props: n }) => {
					let { state: r } = e, { from: i, to: a } = r.selection, o = r.doc.resolve(i), s = o.parent.textBetween(Math.max(0, o.parentOffset - 50), o.parentOffset, void 0, "￼").lastIndexOf("/");
					if (s !== -1) {
						let t = i - (o.parentOffset - s), n = a;
						e.chain().focus().deleteRange({
							from: t,
							to: n
						}).run();
					} else e.chain().focus().deleteRange(t).run();
					n.command(e);
				}
			} };
		},
		addProseMirrorPlugins() {
			return [Ar({
				editor: this.editor,
				...this.options.suggestion,
				items: ({ query: e }) => a(e),
				render: () => {
					let e = null, t = null, n = null, r = () => {
						let e = window.getSelection();
						if (e && e.rangeCount > 0) {
							let t = e.getRangeAt(0), { startContainer: n, startOffset: r } = t;
							if (n.nodeType === Node.TEXT_NODE) {
								let e = (n.textContent || "").lastIndexOf("/", r);
								if (e !== -1) {
									let t = document.createRange();
									return t.setStart(n, e), t.setEnd(n, e + 1), t.getBoundingClientRect();
								}
							}
							return t.getBoundingClientRect();
						}
						return document.body.getBoundingClientRect();
					}, i = (e) => {
						if (e) {
							let t = e();
							if (t && t.width && t.height) return t;
						}
						return r();
					}, a = ({ content: e, anchorRect: t }) => {
						let n = {
							position: "absolute",
							top: t.bottom + window.scrollY,
							left: t.left + window.scrollX,
							width: 0,
							height: 0
						};
						return /* @__PURE__ */ R(vn, {
							open: !0,
							modal: !1,
							children: [
								/* @__PURE__ */ L("div", { style: n }),
								/* @__PURE__ */ L(bn, {
									asChild: !0,
									children: /* @__PURE__ */ L("div", { style: n })
								}),
								/* @__PURE__ */ L(Sn, {
									side: "bottom",
									align: "start",
									sideOffset: 15,
									collisionPadding: 10,
									style: { zIndex: 9999 },
									onOpenAutoFocus: (e) => {
										e.preventDefault();
									},
									onCloseAutoFocus: (e) => {
										e.preventDefault();
									},
									children: /* @__PURE__ */ L("div", { ref: (t) => {
										t && e.parentNode !== t && t.appendChild(e);
									} })
								})
							]
						});
					};
					return {
						onStart: (r) => {
							if (r.items.length === 0) return;
							e = new Cr(cf, {
								props: {
									items: r.items,
									groups: o(r.query),
									command: r.command
								},
								editor: r.editor
							});
							let s = i(r.clientRect);
							n = document.createElement("div"), document.body.appendChild(n), t = (0, Td.createRoot)(n), t.render(/* @__PURE__ */ L(a, {
								content: e.element,
								anchorRect: s,
								editor: r.editor
							}));
						},
						onUpdate: (r) => {
							if (!(!e || !n || !t)) {
								if (e.updateProps({
									items: r.items,
									groups: o(r.query)
								}), r.items.length === 0) n && (n.style.display = "none");
								else {
									n && (n.style.display = "");
									let o = i(r.clientRect);
									t.render(/* @__PURE__ */ L(a, {
										content: e.element,
										anchorRect: o,
										editor: r.editor
									}));
								}
							}
						},
						onKeyDown: (r) => {
							if (r.event.key === "Escape") return t && n && (t.unmount(), n.remove()), !0;
							let i = e?.ref;
							return i && typeof i == "object" && "onKeyDown" in i && typeof i.onKeyDown == "function" && i.onKeyDown(r) || !1;
						},
						onExit() {
							t && n && (t.unmount(), n.remove()), e?.destroy();
						}
					};
				}
			})];
		}
	});
}, uf = ({ node: e, deleteNode: t, updateAttributes: n }) => {
	let r = u(), [i, a] = I(e.attrs.isOpen ?? !1), o = e.attrs.data;
	if (!o) return null;
	let s = () => {
		let e = !i;
		a(e), n({ isOpen: e });
	}, c = [{
		label: r.actions.delete,
		icon: ce,
		critical: !0,
		onClick: () => t()
	}], l = (e) => o.users.find((t) => t.id === e), d = (e) => {
		try {
			let t = new Date(e);
			return Jt(t, "HH:mm");
		} catch (t) {
			return console.error(t), e;
		}
	};
	return /* @__PURE__ */ R(zn, {
		contentEditable: !1,
		children: [/* @__PURE__ */ R("div", {
			className: "editor-transcript mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ R("div", {
				className: "flex flex-row items-center justify-between gap-2",
				children: [/* @__PURE__ */ L("div", {
					className: "flex flex-row items-center gap-2",
					children: /* @__PURE__ */ R("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ L("div", {
							className: "flex flex-row items-center gap-3",
							children: /* @__PURE__ */ L("p", {
								className: "text-f1-text-primary text-lg font-semibold",
								children: o.title
							})
						}), /* @__PURE__ */ L("p", {
							className: "text-f1-text-secondary text-sm",
							children: o.messages.length
						})]
					})
				}), /* @__PURE__ */ R("div", {
					className: "flex flex-row items-center gap-1",
					children: [/* @__PURE__ */ L(v, {
						onClick: s,
						variant: "outline",
						hideLabel: !0,
						label: i ? r.actions.collapse : r.actions.expand,
						icon: i ? Oe : en,
						size: "sm"
					}), /* @__PURE__ */ L(En, {
						items: c,
						size: "sm"
					})]
				})]
			}), i && /* @__PURE__ */ L("div", {
				className: "scrollbar-macos text-f1-text-primary flex max-h-[500px] flex-col gap-4 overflow-y-auto",
				children: o.messages.map((e, t) => {
					let n = l(e.userId);
					return /* @__PURE__ */ R("div", {
						className: "flex flex-row gap-3",
						children: [n?.imageUrl && /* @__PURE__ */ L(tn, {
							size: "xs",
							src: n.imageUrl,
							firstName: n.fullname,
							lastName: ""
						}), /* @__PURE__ */ R("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ R("div", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ L("span", {
									className: "text-f1-text-primary font-medium",
									children: n?.fullname || "Unknown User"
								}), /* @__PURE__ */ L("span", {
									className: "text-f1-text-tertiary text-xs",
									children: d(e.dateTime)
								})]
							}), /* @__PURE__ */ L("p", {
								className: "text-f1-text-secondary",
								children: e.text
							})]
						})]
					}, t);
				})
			})]
		}), /* @__PURE__ */ L(tr, { style: { display: "none" } })]
	});
}, df = ir.create({
	name: "transcript",
	group: "block",
	atom: !0,
	selectable: !0,
	draggable: !0,
	addOptions() {
		return { currentConfig: null };
	},
	addAttributes() {
		return {
			data: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("data-transcript");
					return t ? JSON.parse(t) : null;
				},
				renderHTML: (e) => e.data ? { "data-transcript": JSON.stringify(e.data) } : {}
			},
			config: { default: null },
			isOpen: { default: !1 }
		};
	},
	parseHTML() {
		return [{ tag: "div[data-transcript]" }];
	},
	renderHTML({ HTMLAttributes: e, node: t }) {
		let n = t.attrs.data;
		return n ? [
			"div",
			{
				...e,
				class: "transcript-block",
				"data-transcript": JSON.stringify(n)
			},
			[
				"div",
				{ class: "transcript-content" },
				`Transcript: ${n.title}`
			]
		] : ["div"];
	},
	addNodeView() {
		return Un(uf);
	},
	addCommands() {
		return { insertTranscript: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: { data: e }
		}) };
	}
}), ff = () => /* @__PURE__ */ new Map(), pf = (e) => {
	let t = ff();
	return e.forEach((e, n) => {
		t.set(n, e);
	}), t;
}, mf = (e, t, n) => {
	let r = e.get(t);
	return r === void 0 && e.set(t, r = n()), r;
}, hf = (e, t) => {
	let n = [];
	for (let [r, i] of e) n.push(t(i, r));
	return n;
}, gf = (e, t) => {
	for (let [n, r] of e) if (t(r, n)) return !0;
	return !1;
}, _f = () => /* @__PURE__ */ new Set(), vf = (e) => e[e.length - 1], yf = (e, t) => {
	for (let n = 0; n < t.length; n++) e.push(t[n]);
}, bf = Array.from, xf = (e, t) => {
	for (let n = 0; n < e.length; n++) if (t(e[n], n, e)) return !0;
	return !1;
}, Sf = Array.isArray, Cf = class {
	constructor() {
		this._observers = ff();
	}
	on(e, t) {
		return mf(this._observers, e, _f).add(t), t;
	}
	once(e, t) {
		let n = (...r) => {
			this.off(e, n), t(...r);
		};
		this.on(e, n);
	}
	off(e, t) {
		let n = this._observers.get(e);
		n !== void 0 && (n.delete(t), n.size === 0 && this._observers.delete(e));
	}
	emit(e, t) {
		return bf((this._observers.get(e) || ff()).values()).forEach((e) => e(...t));
	}
	destroy() {
		this._observers = ff();
	}
}, wf = Math.floor, Tf = Math.abs, Ef = (e, t) => e < t ? e : t, Df = (e, t) => e > t ? e : t;
Number.isNaN;
var Of = (e) => e === 0 ? 1 / e < 0 : e < 0, kf = 1 << 29, Af = 2 ** 53 - 1, jf = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && wf(e) === e);
Number.isNaN, Number.parseInt;
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/string.js
var Mf = String.fromCharCode;
String.fromCodePoint, Mf(65535);
var Nf = (e) => e.toLowerCase(), Pf = /^\s*/g, Ff = (e) => e.replace(Pf, ""), If = /([A-Z])/g, Lf = (e, t) => Ff(e.replace(If, (e) => `${t}${Nf(e)}`)), Rf = (e) => {
	let t = unescape(encodeURIComponent(e)), n = t.length, r = new Uint8Array(n);
	for (let e = 0; e < n; e++) r[e] = t.codePointAt(e);
	return r;
}, zf = typeof TextEncoder < "u" ? new TextEncoder() : null, Bf = zf ? (e) => zf.encode(e) : Rf, Vf = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", {
	fatal: !0,
	ignoreBOM: !0
});
/* c8 ignore start */
Vf && Vf.decode(/* @__PURE__ */ new Uint8Array()).length === 1 && 
/* c8 ignore next */
(Vf = null);
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/encoding.js
var Hf = class {
	constructor() {
		this.cpos = 0, this.cbuf = /* @__PURE__ */ new Uint8Array(100), this.bufs = [];
	}
}, Uf = () => new Hf(), Wf = (e) => {
	let t = Uf();
	return e(t), Kf(t);
}, Gf = (e) => {
	let t = e.cpos;
	for (let n = 0; n < e.bufs.length; n++) t += e.bufs[n].length;
	return t;
}, Kf = (e) => {
	let t = new Uint8Array(Gf(e)), n = 0;
	for (let r = 0; r < e.bufs.length; r++) {
		let i = e.bufs[r];
		t.set(i, n), n += i.length;
	}
	return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, qf = (e, t) => {
	let n = e.cbuf.length;
	n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(Df(n, t) * 2), e.cpos = 0);
}, U = (e, t) => {
	let n = e.cbuf.length;
	e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Jf = U, W = (e, t) => {
	for (; t > 127;) U(e, 128 | 127 & t), t = wf(t / 128);
	U(e, 127 & t);
}, Yf = (e, t) => {
	let n = Of(t);
	for (n && (t = -t), U(e, (t > 63 ? 128 : 0) | (n ? 64 : 0) | 63 & t), t = wf(t / 64); t > 0;) U(e, (t > 127 ? 128 : 0) | 127 & t), t = wf(t / 128);
}, Xf = /* @__PURE__ */ new Uint8Array(3e4), Zf = Xf.length / 3, Qf = zf && zf.encodeInto ? (e, t) => {
	if (t.length < Zf) {
		/* c8 ignore next */
		let n = zf.encodeInto(t, Xf).written || 0;
		W(e, n);
		for (let t = 0; t < n; t++) U(e, Xf[t]);
	} else ep(e, Bf(t));
} : (e, t) => {
	let n = unescape(encodeURIComponent(t)), r = n.length;
	W(e, r);
	for (let t = 0; t < r; t++) U(e, n.codePointAt(t));
}, $f = (e, t) => {
	let n = e.cbuf.length, r = e.cpos, i = Ef(n - r, t.length), a = t.length - i;
	e.cbuf.set(t.subarray(0, i), r), e.cpos += i, a > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(Df(n * 2, a)), e.cbuf.set(t.subarray(i)), e.cpos = a);
}, ep = (e, t) => {
	W(e, t.byteLength), $f(e, t);
}, tp = (e, t) => {
	qf(e, t);
	let n = new DataView(e.cbuf.buffer, e.cpos, t);
	return e.cpos += t, n;
}, np = (e, t) => tp(e, 4).setFloat32(0, t, !1), rp = (e, t) => tp(e, 8).setFloat64(0, t, !1), ip = (e, t) => tp(e, 8).setBigInt64(0, t, !1), ap = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4)), op = (e) => (ap.setFloat32(0, e), ap.getFloat32(0) === e), sp = (e, t) => {
	switch (typeof t) {
		case "string":
			U(e, 119), Qf(e, t);
			break;
		case "number":
			jf(t) && Tf(t) <= 2147483647 ? (U(e, 125), Yf(e, t)) : op(t) ? (U(e, 124), np(e, t)) : (U(e, 123), rp(e, t));
			break;
		case "bigint":
			U(e, 122), ip(e, t);
			break;
		case "object":
			if (t === null) U(e, 126);
			else if (Sf(t)) {
				U(e, 117), W(e, t.length);
				for (let n = 0; n < t.length; n++) sp(e, t[n]);
			} else if (t instanceof Uint8Array) U(e, 116), ep(e, t);
			else {
				U(e, 118);
				let n = Object.keys(t);
				W(e, n.length);
				for (let r = 0; r < n.length; r++) {
					let i = n[r];
					Qf(e, i), sp(e, t[i]);
				}
			}
			break;
		case "boolean":
			U(e, t ? 120 : 121);
			break;
		default: U(e, 127);
	}
}, cp = class extends Hf {
	constructor(e) {
		super(), this.w = e, this.s = null, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (this.count > 0 && W(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
	}
}, lp = (e) => {
	e.count > 0 && (Yf(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && W(e.encoder, e.count - 2));
}, up = class {
	constructor() {
		this.encoder = new Hf(), this.s = 0, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (lp(this), this.count = 1, this.s = e);
	}
	toUint8Array() {
		return lp(this), Kf(this.encoder);
	}
}, dp = (e) => {
	if (e.count > 0) {
		let t = e.diff * 2 + (e.count === 1 ? 0 : 1);
		Yf(e.encoder, t), e.count > 1 && W(e.encoder, e.count - 2);
	}
}, fp = class {
	constructor() {
		this.encoder = new Hf(), this.s = 0, this.count = 0, this.diff = 0;
	}
	write(e) {
		this.diff === e - this.s ? (this.s = e, this.count++) : (dp(this), this.count = 1, this.diff = e - this.s, this.s = e);
	}
	toUint8Array() {
		return dp(this), Kf(this.encoder);
	}
}, pp = class {
	constructor() {
		this.sarr = [], this.s = "", this.lensE = new up();
	}
	write(e) {
		this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
	}
	toUint8Array() {
		let e = new Hf();
		return this.sarr.push(this.s), this.s = "", Qf(e, this.sarr.join("")), $f(e, this.lensE.toUint8Array()), Kf(e);
	}
}, mp = (e) => Error(e), hp = () => {
	throw mp("Method unimplemented");
}, gp = () => {
	throw mp("Unexpected case");
}, _p = mp("Unexpected end of array"), vp = mp("Integer out of Range"), yp = class {
	constructor(e) {
		this.arr = e, this.pos = 0;
	}
}, bp = (e) => new yp(e), xp = (e) => e.pos !== e.arr.length, Sp = (e, t) => {
	let n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
	return e.pos += t, n;
}, Cp = (e) => Sp(e, G(e)), wp = (e) => e.arr[e.pos++], G = (e) => {
	let t = 0, n = 1, r = e.arr.length;
	for (; e.pos < r;) {
		let r = e.arr[e.pos++];
		if (t += (r & 127) * n, n *= 128, r < 128) return t;
		/* c8 ignore start */
		if (t > Af) throw vp;
	}
	throw _p;
}, Tp = (e) => {
	let t = e.arr[e.pos++], n = t & 63, r = 64, i = (t & 64) > 0 ? -1 : 1;
	if (!(t & 128)) return i * n;
	let a = e.arr.length;
	for (; e.pos < a;) {
		if (t = e.arr[e.pos++], n += (t & 127) * r, r *= 128, t < 128) return i * n;
		/* c8 ignore start */
		if (n > Af) throw vp;
	}
	throw _p;
}, Ep = Vf ? (e) => Vf.decode(Cp(e)) : (e) => {
	let t = G(e);
	if (t === 0) return "";
	{
		let n = String.fromCodePoint(wp(e));
		if (--t < 100) for (; t--;) n += String.fromCodePoint(wp(e));
		else for (; t > 0;) {
			let r = t < 1e4 ? t : 1e4, i = e.arr.subarray(e.pos, e.pos + r);
			e.pos += r, n += String.fromCodePoint.apply(null, i), t -= r;
		}
		return decodeURIComponent(escape(n));
	}
}, Dp = (e, t) => {
	let n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
	return e.pos += t, n;
}, Op = [
	(e) => void 0,
	(e) => null,
	Tp,
	(e) => Dp(e, 4).getFloat32(0, !1),
	(e) => Dp(e, 8).getFloat64(0, !1),
	(e) => Dp(e, 8).getBigInt64(0, !1),
	(e) => !1,
	(e) => !0,
	Ep,
	(e) => {
		let t = G(e), n = {};
		for (let r = 0; r < t; r++) {
			let t = Ep(e);
			n[t] = kp(e);
		}
		return n;
	},
	(e) => {
		let t = G(e), n = [];
		for (let r = 0; r < t; r++) n.push(kp(e));
		return n;
	},
	Cp
], kp = (e) => Op[127 - wp(e)](e), Ap = class extends yp {
	constructor(e, t) {
		super(e), this.reader = t, this.s = null, this.count = 0;
	}
	read() {
		return this.count === 0 && (this.s = this.reader(this), this.count = xp(this) ? G(this) + 1 : -1), this.count--, this.s;
	}
}, jp = class extends yp {
	constructor(e) {
		super(e), this.s = 0, this.count = 0;
	}
	read() {
		if (this.count === 0) {
			this.s = Tp(this);
			let e = Of(this.s);
			this.count = 1, e && (this.s = -this.s, this.count = G(this) + 2);
		}
		return this.count--, this.s;
	}
}, Mp = class extends yp {
	constructor(e) {
		super(e), this.s = 0, this.count = 0, this.diff = 0;
	}
	read() {
		if (this.count === 0) {
			let e = Tp(this), t = e & 1;
			this.diff = wf(e / 2), this.count = 1, t && (this.count = G(this) + 2);
		}
		return this.s += this.diff, this.count--, this.s;
	}
}, Np = class {
	constructor(e) {
		this.decoder = new jp(e), this.str = Ep(this.decoder), this.spos = 0;
	}
	read() {
		let e = this.spos + this.decoder.read(), t = this.str.slice(this.spos, e);
		return this.spos = e, t;
	}
};
crypto.subtle;
var Pp = crypto.getRandomValues.bind(crypto), Fp = Math.random, Ip = () => Pp(/* @__PURE__ */ new Uint32Array(1))[0], Lp = (e) => e[wf(Fp() * e.length)], Rp = "10000000-1000-4000-8000-100000000000", zp = () => Rp.replace(/[018]/g, (e) => (e ^ Ip() & 15 >> e / 4).toString(16)), Bp = Date.now, Vp = (e) => new Promise(e);
Promise.all.bind(Promise);
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/conditions.js
/* c8 ignore next */
var Hp = (e) => e === void 0 ? null : e, Up = new class {
	constructor() {
		this.map = /* @__PURE__ */ new Map();
	}
	setItem(e, t) {
		this.map.set(e, t);
	}
	getItem(e) {
		return this.map.get(e);
	}
}();
/* c8 ignore start */
try {
	typeof localStorage < "u" && localStorage && (Up = localStorage);
} catch {}
/* c8 ignore stop */
/* c8 ignore next */
var Wp = Up, Gp = Object.assign, Kp = Object.keys, qp = (e, t) => {
	for (let n in e) t(e[n], n);
}, Jp = (e) => Kp(e).length, Yp = (e) => {
	for (let t in e) return !1;
	return !0;
}, Xp = (e, t) => {
	for (let n in e) if (!t(e[n], n)) return !1;
	return !0;
}, Zp = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Qp = (e, t) => e === t || Jp(e) === Jp(t) && Xp(e, (e, n) => (e !== void 0 || Zp(t, n)) && t[n] === e), $p = Object.freeze, em = (e) => {
	for (let t in e) {
		let n = e[t];
		(typeof n == "object" || typeof n == "function") && em(e[t]);
	}
	return $p(e);
}, tm = (e, t, n = 0) => {
	try {
		for (; n < e.length; n++) e[n](...t);
	} finally {
		n < e.length && tm(e, t, n + 1);
	}
}, nm = (e, t) => t.includes(e), rm = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", im = typeof window < "u" && typeof document < "u" && !rm;
typeof navigator < "u" && /Mac/.test(navigator.platform);
var am, om = [], sm = () => {
	if (am === void 0) {
		if (rm) {
			am = ff();
			let e = process.argv, t = null;
			for (let n = 0; n < e.length; n++) {
				let r = e[n];
				r[0] === "-" ? (t !== null && am.set(t, ""), t = r) : t === null ? om.push(r) : (am.set(t, r), t = null);
			}
			t !== null && am.set(t, "");
		} else typeof location == "object" ? (am = ff(), (location.search || "?").slice(1).split("&").forEach((e) => {
			if (e.length !== 0) {
				let [t, n] = e.split("=");
				am.set(`--${Lf(t, "-")}`, n), am.set(`-${Lf(t, "-")}`, n);
			}
		})) : am = ff();
	}
	return am;
}, cm = (e) => sm().has(e), lm = (e) => Hp(rm ? process.env[e.toUpperCase().replaceAll("-", "_")] : Wp.getItem(e)), um = (e) => cm("--" + e) || lm(e) !== null;
um("production");
/* c8 ignore start */
var dm = rm && nm(process.env.FORCE_COLOR, [
	"true",
	"1",
	"2"
]) || !cm("--no-colors") && !um("no-color") && (!rm || process.stdout.isTTY) && (!rm || cm("--color") || lm("COLORTERM") !== null || (lm("TERM") || "").includes("color")), fm = im ? (e) => {
	let t = "";
	for (let n = 0; n < e.byteLength; n++) t += Mf(e[n]);
	return btoa(t);
} : (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), pm = (e) => Wf((t) => sp(t, e)), mm = class {
	constructor(e, t) {
		this.left = e, this.right = t;
	}
}, hm = (e, t) => new mm(e, t), gm = typeof document < "u" ? document : {};
typeof DOMParser < "u" && new DOMParser();
var _m = (e) => hf(e, (e, t) => `${t}:${e};`).join("");
gm.ELEMENT_NODE, gm.TEXT_NODE, gm.CDATA_SECTION_NODE, gm.COMMENT_NODE, gm.DOCUMENT_NODE, gm.DOCUMENT_TYPE_NODE, gm.DOCUMENT_FRAGMENT_NODE;
/* c8 ignore stop */
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/eventloop.js
var vm = ((e) => class {
	constructor(e) {
		this._ = e;
	}
	destroy() {
		e(this._);
	}
})(clearTimeout), ym = (e, t) => new vm(setTimeout(t, e)), bm = Symbol, xm = bm(), Sm = bm(), Cm = bm(), wm = bm(), Tm = bm(), Em = bm(), Dm = bm(), Om = bm(), km = bm(), Am = (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = 0;
	for (; r < e.length; r++) {
		let n = e[r];
		if (n === void 0) break;
		if (n.constructor === String || n.constructor === Number) t.push(n);
		else if (n.constructor === Object) break;
	}
	for (r > 0 && n.push(t.join("")); r < e.length; r++) {
		let t = e[r];
		t instanceof Symbol || n.push(t);
	}
	return n;
};
Bp();
/* c8 ignore stop */
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/logging.js
var jm = {
	[xm]: hm("font-weight", "bold"),
	[Sm]: hm("font-weight", "normal"),
	[Cm]: hm("color", "blue"),
	[Tm]: hm("color", "green"),
	[wm]: hm("color", "grey"),
	[Em]: hm("color", "red"),
	[Dm]: hm("color", "purple"),
	[Om]: hm("color", "orange"),
	[km]: hm("color", "black")
}, Mm = dm ? (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = ff(), i = [], a = 0;
	for (; a < e.length; a++) {
		let i = e[a], o = jm[i];
		if (o !== void 0) r.set(o.left, o.right);
		else {
			if (i === void 0) break;
			if (i.constructor === String || i.constructor === Number) {
				let e = _m(r);
				a > 0 || e.length > 0 ? (t.push("%c" + i), n.push(e)) : t.push(i);
			} else break;
		}
	}
	for (a > 0 && (i = n, i.unshift(t.join(""))); a < e.length; a++) {
		let t = e[a];
		t instanceof Symbol || i.push(t);
	}
	return i;
} : Am, Nm = (...e) => {
	/* c8 ignore next */
	console.log(...Mm(e)), Fm.forEach((t) => t.print(e));
}, Pm = (...e) => {
	console.warn(...Mm(e)), e.unshift(Om), Fm.forEach((t) => t.print(e));
}, Fm = _f(), Im = (e) => ({
	[Symbol.iterator]() {
		return this;
	},
	next: e
}), Lm = (e, t) => Im(() => {
	let n;
	do
		n = e.next();
	while (!n.done && !t(n.value));
	return n;
}), Rm = (e, t) => Im(() => {
	let { done: n, value: r } = e.next();
	return {
		done: n,
		value: n ? void 0 : t(r)
	};
}), zm = class {
	constructor(e, t) {
		this.clock = e, this.len = t;
	}
}, Bm = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map();
	}
}, Vm = (e, t, n) => t.clients.forEach((t, r) => {
	let i = e.doc.store.clients.get(r);
	if (i != null) {
		let r = i[i.length - 1], a = r.id.clock + r.length;
		for (let r = 0, o = t[r]; r < t.length && o.clock < a; o = t[++r]) Uh(e, i, o.clock, o.len, n);
	}
}), Hm = (e, t) => {
	let n = 0, r = e.length - 1;
	for (; n <= r;) {
		let i = wf((n + r) / 2), a = e[i], o = a.clock;
		if (o <= t) {
			if (t < o + a.len) return i;
			n = i + 1;
		} else r = i - 1;
	}
	return null;
}, Um = (e, t) => {
	let n = e.clients.get(t.client);
	return n !== void 0 && Hm(n, t.clock) !== null;
}, Wm = (e) => {
	e.clients.forEach((e) => {
		e.sort((e, t) => e.clock - t.clock);
		let t, n;
		for (t = 1, n = 1; t < e.length; t++) {
			let r = e[n - 1], i = e[t];
			r.clock + r.len >= i.clock ? r.len = Df(r.len, i.clock + i.len - r.clock) : (n < t && (e[n] = i), n++);
		}
		e.length = n;
	});
}, Gm = (e) => {
	let t = new Bm();
	for (let n = 0; n < e.length; n++) e[n].clients.forEach((r, i) => {
		if (!t.clients.has(i)) {
			let a = r.slice();
			for (let t = n + 1; t < e.length; t++) yf(a, e[t].clients.get(i) || []);
			t.clients.set(i, a);
		}
	});
	return Wm(t), t;
}, Km = (e, t, n, r) => {
	mf(e.clients, t, () => []).push(new zm(n, r));
}, qm = () => new Bm(), Jm = (e) => {
	let t = qm();
	return e.clients.forEach((e, n) => {
		let r = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (n.deleted) {
				let i = n.id.clock, a = n.length;
				if (t + 1 < e.length) for (let n = e[t + 1]; t + 1 < e.length && n.deleted; n = e[++t + 1]) a += n.length;
				r.push(new zm(i, a));
			}
		}
		r.length > 0 && t.clients.set(n, r);
	}), t;
}, Ym = (e, t) => {
	W(e.restEncoder, t.clients.size), bf(t.clients.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
		e.resetDsCurVal(), W(e.restEncoder, t);
		let r = n.length;
		W(e.restEncoder, r);
		for (let t = 0; t < r; t++) {
			let r = n[t];
			e.writeDsClock(r.clock), e.writeDsLen(r.len);
		}
	});
}, Xm = (e) => {
	let t = new Bm(), n = G(e.restDecoder);
	for (let r = 0; r < n; r++) {
		e.resetDsCurVal();
		let n = G(e.restDecoder), r = G(e.restDecoder);
		if (r > 0) {
			let i = mf(t.clients, n, () => []);
			for (let t = 0; t < r; t++) i.push(new zm(e.readDsClock(), e.readDsLen()));
		}
	}
	return t;
}, Zm = (e, t, n) => {
	let r = new Bm(), i = G(e.restDecoder);
	for (let a = 0; a < i; a++) {
		e.resetDsCurVal();
		let i = G(e.restDecoder), a = G(e.restDecoder), o = n.clients.get(i) || [], s = q(n, i);
		for (let n = 0; n < a; n++) {
			let n = e.readDsClock(), a = n + e.readDsLen();
			if (n < s) {
				s < a && Km(r, i, s, a - s);
				let e = Lh(o, n), c = o[e];
				for (!c.deleted && c.id.clock < n && (o.splice(e + 1, 0, Q_(t, c, n - c.id.clock)), e++); e < o.length && (c = o[e++], c.id.clock < a);) c.deleted || (a < c.id.clock + c.length && o.splice(e, 0, Q_(t, c, a - c.id.clock)), c.delete(t));
			} else Km(r, i, n, a - n);
		}
	}
	if (r.clients.size > 0) {
		let e = new ah();
		return W(e.restEncoder, 0), Ym(e, r), e.toUint8Array();
	}
	return null;
}, Qm = Ip, $m = class e extends Cf {
	constructor({ guid: e = zp(), collectionid: t = null, gc: n = !0, gcFilter: r = () => !0, meta: i = null, autoLoad: a = !1, shouldLoad: o = !0 } = {}) {
		super(), this.gc = n, this.gcFilter = r, this.clientID = Qm(), this.guid = e, this.collectionid = t, this.share = /* @__PURE__ */ new Map(), this.store = new Ph(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = o, this.autoLoad = a, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = Vp((e) => {
			this.on("load", () => {
				this.isLoaded = !0, e(this);
			});
		});
		let s = () => Vp((e) => {
			let t = (n) => {
				(n === void 0 || n === !0) && (this.off("sync", t), e());
			};
			this.on("sync", t);
		});
		this.on("sync", (e) => {
			e === !1 && this.isSynced && (this.whenSynced = s()), this.isSynced = e === void 0 || e === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
		}), this.whenSynced = s();
	}
	load() {
		let e = this._item;
		e !== null && !this.shouldLoad && J(e.parent.doc, (e) => {
			e.subdocsLoaded.add(this);
		}, null, !0), this.shouldLoad = !0;
	}
	getSubdocs() {
		return this.subdocs;
	}
	getSubdocGuids() {
		return new Set(bf(this.subdocs).map((e) => e.guid));
	}
	transact(e, t = null) {
		return J(this, e, t);
	}
	get(e, t = X) {
		let n = mf(this.share, e, () => {
			let e = new t();
			return e._integrate(this, null), e;
		}), r = n.constructor;
		if (t !== X && r !== t) {
			if (r === X) {
				let r = new t();
				r._map = n._map, n._map.forEach((e) => {
					for (; e !== null; e = e.left) e.parent = r;
				}), r._start = n._start;
				for (let e = r._start; e !== null; e = e.right) e.parent = r;
				return r._length = n._length, this.share.set(e, r), r._integrate(this, null), r;
			}
			throw Error(`Type with the name ${e} has already been defined with a different constructor`);
		}
		return n;
	}
	getArray(e = "") {
		return this.get(e, Vg);
	}
	getText(e = "") {
		return this.get(e, c_);
	}
	getMap(e = "") {
		return this.get(e, Wg);
	}
	getXmlElement(e = "") {
		return this.get(e, p_);
	}
	getXmlFragment(e = "") {
		return this.get(e, d_);
	}
	toJSON() {
		let e = {};
		return this.share.forEach((t, n) => {
			e[n] = t.toJSON();
		}), e;
	}
	destroy() {
		this.isDestroyed = !0, bf(this.subdocs).forEach((e) => e.destroy());
		let t = this._item;
		if (t !== null) {
			this._item = null;
			let n = t.content;
			n.doc = new e({
				guid: this.guid,
				...n.opts,
				shouldLoad: !1
			}), n.doc._item = t, J(t.parent.doc, (e) => {
				let r = n.doc;
				t.deleted || e.subdocsAdded.add(r), e.subdocsRemoved.add(this);
			}, null, !0);
		}
		this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
	}
}, eh = class {
	constructor(e) {
		this.dsCurrVal = 0, this.restDecoder = e;
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	readDsClock() {
		return this.dsCurrVal += G(this.restDecoder), this.dsCurrVal;
	}
	readDsLen() {
		let e = G(this.restDecoder) + 1;
		return this.dsCurrVal += e, e;
	}
}, th = class extends eh {
	constructor(e) {
		super(e), this.keys = [], G(e), this.keyClockDecoder = new Mp(Cp(e)), this.clientDecoder = new jp(Cp(e)), this.leftClockDecoder = new Mp(Cp(e)), this.rightClockDecoder = new Mp(Cp(e)), this.infoDecoder = new Ap(Cp(e), wp), this.stringDecoder = new Np(Cp(e)), this.parentInfoDecoder = new Ap(Cp(e), wp), this.typeRefDecoder = new jp(Cp(e)), this.lenDecoder = new jp(Cp(e));
	}
	readLeftID() {
		return new vh(this.clientDecoder.read(), this.leftClockDecoder.read());
	}
	readRightID() {
		return new vh(this.clientDecoder.read(), this.rightClockDecoder.read());
	}
	readClient() {
		return this.clientDecoder.read();
	}
	readInfo() {
		return this.infoDecoder.read();
	}
	readString() {
		return this.stringDecoder.read();
	}
	readParentInfo() {
		return this.parentInfoDecoder.read() === 1;
	}
	readTypeRef() {
		return this.typeRefDecoder.read();
	}
	readLen() {
		return this.lenDecoder.read();
	}
	readAny() {
		return kp(this.restDecoder);
	}
	readBuf() {
		return Cp(this.restDecoder);
	}
	readJSON() {
		return kp(this.restDecoder);
	}
	readKey() {
		let e = this.keyClockDecoder.read();
		if (e < this.keys.length) return this.keys[e];
		{
			let e = this.stringDecoder.read();
			return this.keys.push(e), e;
		}
	}
}, nh = class {
	constructor() {
		this.restEncoder = Uf();
	}
	toUint8Array() {
		return Kf(this.restEncoder);
	}
	resetDsCurVal() {}
	writeDsClock(e) {
		W(this.restEncoder, e);
	}
	writeDsLen(e) {
		W(this.restEncoder, e);
	}
}, rh = class extends nh {
	writeLeftID(e) {
		W(this.restEncoder, e.client), W(this.restEncoder, e.clock);
	}
	writeRightID(e) {
		W(this.restEncoder, e.client), W(this.restEncoder, e.clock);
	}
	writeClient(e) {
		W(this.restEncoder, e);
	}
	writeInfo(e) {
		Jf(this.restEncoder, e);
	}
	writeString(e) {
		Qf(this.restEncoder, e);
	}
	writeParentInfo(e) {
		W(this.restEncoder, +!!e);
	}
	writeTypeRef(e) {
		W(this.restEncoder, e);
	}
	writeLen(e) {
		W(this.restEncoder, e);
	}
	writeAny(e) {
		sp(this.restEncoder, e);
	}
	writeBuf(e) {
		ep(this.restEncoder, e);
	}
	writeJSON(e) {
		Qf(this.restEncoder, JSON.stringify(e));
	}
	writeKey(e) {
		Qf(this.restEncoder, e);
	}
}, ih = class {
	constructor() {
		this.restEncoder = Uf(), this.dsCurrVal = 0;
	}
	toUint8Array() {
		return Kf(this.restEncoder);
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	writeDsClock(e) {
		let t = e - this.dsCurrVal;
		this.dsCurrVal = e, W(this.restEncoder, t);
	}
	writeDsLen(e) {
		e === 0 && gp(), W(this.restEncoder, e - 1), this.dsCurrVal += e;
	}
}, ah = class extends ih {
	constructor() {
		super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new fp(), this.clientEncoder = new up(), this.leftClockEncoder = new fp(), this.rightClockEncoder = new fp(), this.infoEncoder = new cp(Jf), this.stringEncoder = new pp(), this.parentInfoEncoder = new cp(Jf), this.typeRefEncoder = new up(), this.lenEncoder = new up();
	}
	toUint8Array() {
		let e = Uf();
		return W(e, 0), ep(e, this.keyClockEncoder.toUint8Array()), ep(e, this.clientEncoder.toUint8Array()), ep(e, this.leftClockEncoder.toUint8Array()), ep(e, this.rightClockEncoder.toUint8Array()), ep(e, Kf(this.infoEncoder)), ep(e, this.stringEncoder.toUint8Array()), ep(e, Kf(this.parentInfoEncoder)), ep(e, this.typeRefEncoder.toUint8Array()), ep(e, this.lenEncoder.toUint8Array()), $f(e, Kf(this.restEncoder)), Kf(e);
	}
	writeLeftID(e) {
		this.clientEncoder.write(e.client), this.leftClockEncoder.write(e.clock);
	}
	writeRightID(e) {
		this.clientEncoder.write(e.client), this.rightClockEncoder.write(e.clock);
	}
	writeClient(e) {
		this.clientEncoder.write(e);
	}
	writeInfo(e) {
		this.infoEncoder.write(e);
	}
	writeString(e) {
		this.stringEncoder.write(e);
	}
	writeParentInfo(e) {
		this.parentInfoEncoder.write(+!!e);
	}
	writeTypeRef(e) {
		this.typeRefEncoder.write(e);
	}
	writeLen(e) {
		this.lenEncoder.write(e);
	}
	writeAny(e) {
		sp(this.restEncoder, e);
	}
	writeBuf(e) {
		ep(this.restEncoder, e);
	}
	writeJSON(e) {
		sp(this.restEncoder, e);
	}
	writeKey(e) {
		let t = this.keyMap.get(e);
		t === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
	}
}, oh = (e, t, n, r) => {
	r = Df(r, t[0].id.clock);
	let i = Lh(t, r);
	W(e.restEncoder, t.length - i), e.writeClient(n), W(e.restEncoder, r);
	let a = t[i];
	a.write(e, r - a.id.clock);
	for (let n = i + 1; n < t.length; n++) t[n].write(e, 0);
}, sh = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	n.forEach((e, n) => {
		q(t, n) > e && r.set(n, e);
	}), Fh(t).forEach((e, t) => {
		n.has(t) || r.set(t, 0);
	}), W(e.restEncoder, r.size), bf(r.entries()).sort((e, t) => t[0] - e[0]).forEach(([n, r]) => {
		oh(e, t.clients.get(n), n, r);
	});
}, ch = (e, t) => {
	let n = ff(), r = G(e.restDecoder);
	for (let i = 0; i < r; i++) {
		let r = G(e.restDecoder), i = Array(r), a = e.readClient(), o = G(e.restDecoder);
		n.set(a, {
			i: 0,
			refs: i
		});
		for (let n = 0; n < r; n++) {
			let r = e.readInfo();
			switch (31 & r) {
				case 0: {
					let t = e.readLen();
					i[n] = new S_(K(a, o), t), o += t;
					break;
				}
				case 10: {
					let t = G(e.restDecoder);
					i[n] = new iv(K(a, o), t), o += t;
					break;
				}
				default: {
					let s = !(r & 192), c = new Q(K(a, o), null, (r & 128) == 128 ? e.readLeftID() : null, null, (r & 64) == 64 ? e.readRightID() : null, s ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null, s && (r & 32) == 32 ? e.readString() : null, tv(e, r));
					i[n] = c, o += c.length;
				}
			}
		}
	}
	return n;
}, lh = (e, t, n) => {
	let r = [], i = bf(n.keys()).sort((e, t) => e - t);
	if (i.length === 0) return null;
	let a = () => {
		if (i.length === 0) return null;
		let e = n.get(i[i.length - 1]);
		for (; e.refs.length === e.i;) if (i.pop(), i.length > 0) e = n.get(i[i.length - 1]);
		else return null;
		return e;
	}, o = a();
	if (o === null) return null;
	let s = new Ph(), c = /* @__PURE__ */ new Map(), l = (e, t) => {
		let n = c.get(e);
		(n == null || n > t) && c.set(e, t);
	}, u = o.refs[o.i++], d = /* @__PURE__ */ new Map(), f = () => {
		for (let e of r) {
			let t = e.id.client, r = n.get(t);
			r ? (r.i--, s.clients.set(t, r.refs.slice(r.i)), n.delete(t), r.i = 0, r.refs = []) : s.clients.set(t, [e]), i = i.filter((e) => e !== t);
		}
		r.length = 0;
	};
	for (;;) {
		if (u.constructor !== iv) {
			let i = mf(d, u.id.client, () => q(t, u.id.client)) - u.id.clock;
			if (i < 0) r.push(u), l(u.id.client, u.id.clock - 1), f();
			else {
				let a = u.getMissing(e, t);
				if (a !== null) {
					r.push(u);
					let e = n.get(a) || {
						refs: [],
						i: 0
					};
					if (e.refs.length === e.i) l(a, q(t, a)), f();
					else {
						u = e.refs[e.i++];
						continue;
					}
				} else (i === 0 || i < u.length) && (u.integrate(e, i), d.set(u.id.client, u.id.clock + u.length));
			}
		}
		if (r.length > 0) u = r.pop();
		else if (o !== null && o.i < o.refs.length) u = o.refs[o.i++];
		else {
			if (o = a(), o === null) break;
			u = o.refs[o.i++];
		}
	}
	if (s.clients.size > 0) {
		let e = new ah();
		return sh(e, s, /* @__PURE__ */ new Map()), W(e.restEncoder, 0), {
			missing: c,
			update: e.toUint8Array()
		};
	}
	return null;
}, uh = (e, t) => sh(e, t.doc.store, t.beforeState), dh = (e, t, n, r = new th(e)) => J(t, (e) => {
	e.local = !1;
	let t = !1, n = e.doc, i = n.store, a = lh(e, i, ch(r, n)), o = i.pendingStructs;
	if (o) {
		for (let [e, n] of o.missing) if (n < q(i, e)) {
			t = !0;
			break;
		}
		if (a) {
			for (let [e, t] of a.missing) {
				let n = o.missing.get(e);
				(n == null || n > t) && o.missing.set(e, t);
			}
			o.update = ag([o.update, a.update]);
		}
	} else i.pendingStructs = a;
	let s = Zm(r, e, i);
	if (i.pendingDs) {
		let t = new th(bp(i.pendingDs));
		G(t.restDecoder);
		let n = Zm(t, e, i);
		i.pendingDs = s && n ? ag([s, n]) : s || n;
	} else i.pendingDs = s;
	if (t) {
		let t = i.pendingStructs.update;
		i.pendingStructs = null, fh(e.doc, t);
	}
}, n, !1), fh = (e, t, n, r = th) => {
	let i = bp(t);
	dh(i, e, n, new r(i));
}, ph = class {
	constructor() {
		this.l = [];
	}
}, mh = () => new ph(), hh = (e, t) => e.l.push(t), gh = (e, t) => {
	let n = e.l, r = n.length;
	e.l = n.filter((e) => t !== e), r === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, _h = (e, t, n) => tm(e.l, [t, n]), vh = class {
	constructor(e, t) {
		this.client = e, this.clock = t;
	}
}, yh = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, K = (e, t) => new vh(e, t), bh = (e) => {
	for (let [t, n] of e.doc.share.entries()) if (n === e) return t;
	throw gp();
}, xh = (e, t) => {
	for (; t !== null;) {
		if (t.parent === e) return !0;
		t = t.parent._item;
	}
	return !1;
}, Sh = class {
	constructor(e, t, n, r = 0) {
		this.type = e, this.tname = t, this.item = n, this.assoc = r;
	}
}, Ch = class {
	constructor(e, t, n = 0) {
		this.type = e, this.index = t, this.assoc = n;
	}
}, wh = (e, t, n = 0) => new Ch(e, t, n), Th = (e, t, n) => {
	let r = null, i = null;
	return e._item === null ? i = bh(e) : r = K(e._item.id.client, e._item.id.clock), new Sh(r, i, t, n);
}, Eh = (e, t, n = 0) => {
	let r = e._start;
	if (n < 0) {
		if (t === 0) return Th(e, null, n);
		t--;
	}
	for (; r !== null;) {
		if (!r.deleted && r.countable) {
			if (r.length > t) return Th(e, K(r.id.client, r.id.clock + t), n);
			t -= r.length;
		}
		if (r.right === null && n < 0) return Th(e, r.lastId, n);
		r = r.right;
	}
	return Th(e, null, n);
}, Dh = (e, t) => {
	let n = Rh(e, t);
	return {
		item: n,
		diff: t.clock - n.id.clock
	};
}, Oh = (e, t, n = !0) => {
	let r = t.store, i = e.item, a = e.type, o = e.tname, s = e.assoc, c = null, l = 0;
	if (i !== null) {
		if (q(r, i.client) <= i.clock) return null;
		let e = n ? X_(r, i) : Dh(r, i), t = e.item;
		if (!(t instanceof Q)) return null;
		if (c = t.parent, c._item === null || !c._item.deleted) {
			l = t.deleted || !t.countable ? 0 : e.diff + (s >= 0 ? 0 : 1);
			let n = t.left;
			for (; n !== null;) !n.deleted && n.countable && (l += n.length), n = n.left;
		}
	} else {
		if (o !== null) c = t.get(o);
		else if (a !== null) {
			if (q(r, a.client) <= a.clock) return null;
			let { item: e } = n ? X_(r, a) : { item: Rh(r, a) };
			if (e instanceof Q && e.content instanceof J_) c = e.content.type;
			else return null;
		} else throw gp();
		l = s >= 0 ? c._length : 0;
	}
	return wh(c, l, e.assoc);
}, kh = class {
	constructor(e, t) {
		this.ds = e, this.sv = t;
	}
}, Ah = (e, t) => new kh(e, t);
Ah(qm(), /* @__PURE__ */ new Map());
var jh = (e) => Ah(Jm(e.store), Fh(e.store)), Mh = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !Um(t.ds, e.id), Nh = (e, t) => {
	let n = mf(e.meta, Nh, _f), r = e.doc.store;
	n.has(t) || (t.sv.forEach((t, n) => {
		t < q(r, n) && Bh(e, K(n, t));
	}), Vm(e, t.ds, (e) => {}), n.add(t));
}, Ph = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
	}
}, Fh = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.clients.forEach((e, n) => {
		let r = e[e.length - 1];
		t.set(n, r.id.clock + r.length);
	}), t;
}, q = (e, t) => {
	let n = e.clients.get(t);
	if (n === void 0) return 0;
	let r = n[n.length - 1];
	return r.id.clock + r.length;
}, Ih = (e, t) => {
	let n = e.clients.get(t.id.client);
	if (n === void 0) n = [], e.clients.set(t.id.client, n);
	else {
		let e = n[n.length - 1];
		if (e.id.clock + e.length !== t.id.clock) throw gp();
	}
	n.push(t);
}, Lh = (e, t) => {
	let n = 0, r = e.length - 1, i = e[r], a = i.id.clock;
	if (a === t) return r;
	let o = wf(t / (a + i.length - 1) * r);
	for (; n <= r;) {
		if (i = e[o], a = i.id.clock, a <= t) {
			if (t < a + i.length) return o;
			n = o + 1;
		} else r = o - 1;
		o = wf((n + r) / 2);
	}
	throw gp();
}, Rh = (e, t) => {
	let n = e.clients.get(t.client);
	return n[Lh(n, t.clock)];
}, zh = (e, t, n) => {
	let r = Lh(t, n), i = t[r];
	return i.id.clock < n && i instanceof Q ? (t.splice(r + 1, 0, Q_(e, i, n - i.id.clock)), r + 1) : r;
}, Bh = (e, t) => {
	let n = e.doc.store.clients.get(t.client);
	return n[zh(e, n, t.clock)];
}, Vh = (e, t, n) => {
	let r = t.clients.get(n.client), i = Lh(r, n.clock), a = r[i];
	return n.clock !== a.id.clock + a.length - 1 && a.constructor !== S_ && r.splice(i + 1, 0, Q_(e, a, n.clock - a.id.clock + 1)), a;
}, Hh = (e, t, n) => {
	let r = e.clients.get(t.id.client);
	r[Lh(r, t.id.clock)] = n;
}, Uh = (e, t, n, r, i) => {
	if (r === 0) return;
	let a = n + r, o = zh(e, t, n), s;
	do
		s = t[o++], a < s.id.clock + s.length && zh(e, t, a), i(s);
	while (o < t.length && t[o].id.clock < a);
}, Wh = class {
	constructor(e, t, n) {
		this.doc = e, this.deleteSet = new Bm(), this.beforeState = Fh(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = t, this.meta = /* @__PURE__ */ new Map(), this.local = n, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
	}
}, Gh = (e, t) => t.deleteSet.clients.size === 0 && !gf(t.afterState, (e, n) => t.beforeState.get(n) !== e) ? !1 : (Wm(t.deleteSet), uh(e, t), Ym(e, t.deleteSet), !0), Kh = (e, t, n) => {
	let r = t._item;
	(r === null || r.id.clock < (e.beforeState.get(r.id.client) || 0) && !r.deleted) && mf(e.changed, t, _f).add(n);
}, qh = (e, t) => {
	let n = e[t], r = e[t - 1], i = t;
	for (; i > 0; n = r, r = e[--i - 1]) {
		if (r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n)) {
			n instanceof Q && n.parentSub !== null && n.parent._map.get(n.parentSub) === n && n.parent._map.set(n.parentSub, r);
			continue;
		}
		break;
	}
	let a = t - i;
	return a && e.splice(t + 1 - a, a), a;
}, Jh = (e, t, n) => {
	for (let [r, i] of e.clients.entries()) {
		let e = t.clients.get(r);
		for (let r = i.length - 1; r >= 0; r--) {
			let a = i[r], o = a.clock + a.len;
			for (let r = Lh(e, a.clock), i = e[r]; r < e.length && i.id.clock < o; i = e[++r]) {
				let i = e[r];
				if (a.clock + a.len <= i.id.clock) break;
				i instanceof Q && i.deleted && !i.keep && n(i) && i.gc(t, !1);
			}
		}
	}
}, Yh = (e, t) => {
	e.clients.forEach((e, n) => {
		let r = t.clients.get(n);
		for (let t = e.length - 1; t >= 0; t--) {
			let n = e[t], i = Ef(r.length - 1, 1 + Lh(r, n.clock + n.len - 1));
			for (let e = i, t = r[e]; e > 0 && t.id.clock >= n.clock; t = r[e]) e -= 1 + qh(r, e);
		}
	});
}, Xh = (e, t) => {
	if (t < e.length) {
		let n = e[t], r = n.doc, i = r.store, a = n.deleteSet, o = n._mergeStructs;
		try {
			Wm(a), n.afterState = Fh(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
			let e = [];
			n.changed.forEach((t, r) => e.push(() => {
				(r._item === null || !r._item.deleted) && r._callObserver(n, t);
			})), e.push(() => {
				n.changedParentTypes.forEach((e, t) => {
					t._dEH.l.length > 0 && (t._item === null || !t._item.deleted) && (e = e.filter((e) => e.target._item === null || !e.target._item.deleted), e.forEach((e) => {
						e.currentTarget = t, e._path = null;
					}), e.sort((e, t) => e.path.length - t.path.length), _h(t._dEH, e, n));
				});
			}), e.push(() => r.emit("afterTransaction", [n, r])), tm(e, []), n._needFormattingCleanup && a_(n);
		} finally {
			r.gc && Jh(a, i, r.gcFilter), Yh(a, i), n.afterState.forEach((e, t) => {
				let r = n.beforeState.get(t) || 0;
				if (r !== e) {
					let e = i.clients.get(t), n = Df(Lh(e, r), 1);
					for (let t = e.length - 1; t >= n;) t -= 1 + qh(e, t);
				}
			});
			for (let e = o.length - 1; e >= 0; e--) {
				let { client: t, clock: n } = o[e].id, r = i.clients.get(t), a = Lh(r, n);
				a + 1 < r.length && qh(r, a + 1) > 1 || a > 0 && qh(r, a);
			}
			if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (Nm(Om, xm, "[yjs] ", Sm, Em, "Changed the client-id because another client seems to be using it."), r.clientID = Qm()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
				let e = new rh();
				Gh(e, n) && r.emit("update", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			if (r._observers.has("updateV2")) {
				let e = new ah();
				Gh(e, n) && r.emit("updateV2", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			let { subdocsAdded: s, subdocsLoaded: c, subdocsRemoved: l } = n;
			(s.size > 0 || l.size > 0 || c.size > 0) && (s.forEach((e) => {
				e.clientID = r.clientID, e.collectionid ??= r.collectionid, r.subdocs.add(e);
			}), l.forEach((e) => r.subdocs.delete(e)), r.emit("subdocs", [
				{
					loaded: c,
					added: s,
					removed: l
				},
				r,
				n
			]), l.forEach((e) => e.destroy())), e.length <= t + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, e])) : Xh(e, t + 1);
		}
	}
}, J = (e, t, n = null, r = !0) => {
	let i = e._transactionCleanups, a = !1, o = null;
	e._transaction === null && (a = !0, e._transaction = new Wh(e, n, r), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
	try {
		o = t(e._transaction);
	} finally {
		if (a) {
			let t = e._transaction === i[0];
			e._transaction = null, t && Xh(i, 0);
		}
	}
	return o;
}, Zh = class {
	constructor(e, t) {
		this.insertions = t, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
	}
}, Qh = (e, t, n) => {
	Vm(e, n.deletions, (n) => {
		n instanceof Q && t.scope.some((t) => t === e.doc || xh(t, n)) && Z_(n, !1);
	});
}, $h = (e, t, n) => {
	let r = null, i = e.doc, a = e.scope;
	J(i, (n) => {
		for (; t.length > 0 && e.currStackItem === null;) {
			let r = i.store, o = t.pop(), s = /* @__PURE__ */ new Set(), c = [], l = !1;
			Vm(n, o.insertions, (e) => {
				if (e instanceof Q) {
					if (e.redone !== null) {
						let { item: t, diff: i } = X_(r, e.id);
						i > 0 && (t = Bh(n, K(t.id.client, t.id.clock + i))), e = t;
					}
					!e.deleted && a.some((t) => t === n.doc || xh(t, e)) && c.push(e);
				}
			}), Vm(n, o.deletions, (e) => {
				e instanceof Q && a.some((t) => t === n.doc || xh(t, e)) && !Um(o.insertions, e.id) && s.add(e);
			}), s.forEach((t) => {
				l = ev(n, t, s, o.insertions, e.ignoreRemoteMapChanges, e) !== null || l;
			});
			for (let t = c.length - 1; t >= 0; t--) {
				let r = c[t];
				e.deleteFilter(r) && (r.delete(n), l = !0);
			}
			e.currStackItem = l ? o : null;
		}
		n.changed.forEach((e, t) => {
			e.has(null) && t._searchMarker && (t._searchMarker.length = 0);
		}), r = n;
	}, e);
	let o = e.currStackItem;
	if (o != null) {
		let t = r.changedParentTypes;
		e.emit("stack-item-popped", [{
			stackItem: o,
			type: n,
			changedParentTypes: t,
			origin: e
		}, e]), e.currStackItem = null;
	}
	return o;
}, eg = class extends Cf {
	constructor(e, { captureTimeout: t = 500, captureTransaction: n = (e) => !0, deleteFilter: r = () => !0, trackedOrigins: i = /* @__PURE__ */ new Set([null]), ignoreRemoteMapChanges: a = !1, doc: o = Sf(e) ? e[0].doc : e instanceof $m ? e : e.doc } = {}) {
		super(), this.scope = [], this.doc = o, this.addToScope(e), this.deleteFilter = r, i.add(this), this.trackedOrigins = i, this.captureTransaction = n, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = a, this.captureTimeout = t, this.afterTransactionHandler = (e) => {
			if (!this.captureTransaction(e) || !this.scope.some((t) => e.changedParentTypes.has(t) || t === this.doc) || !this.trackedOrigins.has(e.origin) && (!e.origin || !this.trackedOrigins.has(e.origin.constructor))) return;
			let t = this.undoing, n = this.redoing, r = t ? this.redoStack : this.undoStack;
			t ? this.stopCapturing() : n || this.clear(!1, !0);
			let i = new Bm();
			e.afterState.forEach((t, n) => {
				let r = e.beforeState.get(n) || 0, a = t - r;
				a > 0 && Km(i, n, r, a);
			});
			let a = Bp(), o = !1;
			if (this.lastChange > 0 && a - this.lastChange < this.captureTimeout && r.length > 0 && !t && !n) {
				let t = r[r.length - 1];
				t.deletions = Gm([t.deletions, e.deleteSet]), t.insertions = Gm([t.insertions, i]);
			} else r.push(new Zh(e.deleteSet, i)), o = !0;
			!t && !n && (this.lastChange = a), Vm(e, e.deleteSet, (t) => {
				t instanceof Q && this.scope.some((n) => n === e.doc || xh(n, t)) && Z_(t, !0);
			});
			let s = [{
				stackItem: r[r.length - 1],
				origin: e.origin,
				type: t ? "redo" : "undo",
				changedParentTypes: e.changedParentTypes
			}, this];
			o ? this.emit("stack-item-added", s) : this.emit("stack-item-updated", s);
		}, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
			this.destroy();
		});
	}
	addToScope(e) {
		let t = new Set(this.scope);
		e = Sf(e) ? e : [e], e.forEach((e) => {
			t.has(e) || (t.add(e), (e instanceof X ? e.doc !== this.doc : e !== this.doc) && Pm("[yjs#509] Not same Y.Doc"), this.scope.push(e));
		});
	}
	addTrackedOrigin(e) {
		this.trackedOrigins.add(e);
	}
	removeTrackedOrigin(e) {
		this.trackedOrigins.delete(e);
	}
	clear(e = !0, t = !0) {
		(e && this.canUndo() || t && this.canRedo()) && this.doc.transact((n) => {
			e && (this.undoStack.forEach((e) => Qh(n, this, e)), this.undoStack = []), t && (this.redoStack.forEach((e) => Qh(n, this, e)), this.redoStack = []), this.emit("stack-cleared", [{
				undoStackCleared: e,
				redoStackCleared: t
			}]);
		});
	}
	stopCapturing() {
		this.lastChange = 0;
	}
	undo() {
		this.undoing = !0;
		let e;
		try {
			e = $h(this, this.undoStack, "undo");
		} finally {
			this.undoing = !1;
		}
		return e;
	}
	redo() {
		this.redoing = !0;
		let e;
		try {
			e = $h(this, this.redoStack, "redo");
		} finally {
			this.redoing = !1;
		}
		return e;
	}
	canUndo() {
		return this.undoStack.length > 0;
	}
	canRedo() {
		return this.redoStack.length > 0;
	}
	destroy() {
		this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
	}
};
function* tg(e) {
	let t = G(e.restDecoder);
	for (let n = 0; n < t; n++) {
		let t = G(e.restDecoder), n = e.readClient(), r = G(e.restDecoder);
		for (let i = 0; i < t; i++) {
			let t = e.readInfo();
			if (t === 10) {
				let t = G(e.restDecoder);
				yield new iv(K(n, r), t), r += t;
			} else if (31 & t) {
				let i = !(t & 192), a = new Q(K(n, r), null, (t & 128) == 128 ? e.readLeftID() : null, null, (t & 64) == 64 ? e.readRightID() : null, i ? e.readParentInfo() ? e.readString() : e.readLeftID() : null, i && (t & 32) == 32 ? e.readString() : null, tv(e, t));
				yield a, r += a.length;
			} else {
				let t = e.readLen();
				yield new S_(K(n, r), t), r += t;
			}
		}
	}
}
var ng = class {
	constructor(e, t) {
		this.gen = tg(e), this.curr = null, this.done = !1, this.filterSkips = t, this.next();
	}
	next() {
		do
			this.curr = this.gen.next().value || null;
		while (this.filterSkips && this.curr !== null && this.curr.constructor === iv);
		return this.curr;
	}
}, rg = class {
	constructor(e) {
		this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
	}
}, ig = (e, t) => {
	if (e.constructor === S_) {
		let { client: n, clock: r } = e.id;
		return new S_(K(n, r + t), e.length - t);
	}
	if (e.constructor === iv) {
		let { client: n, clock: r } = e.id;
		return new iv(K(n, r + t), e.length - t);
	}
	{
		let n = e, { client: r, clock: i } = n.id;
		return new Q(K(r, i + t), null, K(r, i + t - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(t));
	}
}, ag = (e, t = th, n = ah) => {
	if (e.length === 1) return e[0];
	let r = e.map((e) => new t(bp(e))), i = r.map((e) => new ng(e, !0)), a = null, o = new n(), s = new rg(o);
	for (; i = i.filter((e) => e.curr !== null), i.sort((e, t) => {
		if (e.curr.id.client === t.curr.id.client) {
			let n = e.curr.id.clock - t.curr.id.clock;
			return n === 0 ? e.curr.constructor === t.curr.constructor ? 0 : e.curr.constructor === iv ? 1 : -1 : n;
		}
		return t.curr.id.client - e.curr.id.client;
	}), i.length !== 0;) {
		let e = i[0], t = e.curr.id.client;
		if (a !== null) {
			let n = e.curr, r = !1;
			for (; n !== null && n.id.clock + n.length <= a.struct.id.clock + a.struct.length && n.id.client >= a.struct.id.client;) n = e.next(), r = !0;
			if (n === null || n.id.client !== t || r && n.id.clock > a.struct.id.clock + a.struct.length) continue;
			if (t !== a.struct.id.client) sg(s, a.struct, a.offset), a = {
				struct: n,
				offset: 0
			}, e.next();
			else if (a.struct.id.clock + a.struct.length < n.id.clock) {
				if (a.struct.constructor === iv) a.struct.length = n.id.clock + n.length - a.struct.id.clock;
				else {
					sg(s, a.struct, a.offset);
					let e = n.id.clock - a.struct.id.clock - a.struct.length;
					a = {
						struct: new iv(K(t, a.struct.id.clock + a.struct.length), e),
						offset: 0
					};
				}
			} else {
				let t = a.struct.id.clock + a.struct.length - n.id.clock;
				t > 0 && (a.struct.constructor === iv ? a.struct.length -= t : n = ig(n, t)), a.struct.mergeWith(n) || (sg(s, a.struct, a.offset), a = {
					struct: n,
					offset: 0
				}, e.next());
			}
		} else a = {
			struct: e.curr,
			offset: 0
		}, e.next();
		for (let n = e.curr; n !== null && n.id.client === t && n.id.clock === a.struct.id.clock + a.struct.length && n.constructor !== iv; n = e.next()) sg(s, a.struct, a.offset), a = {
			struct: n,
			offset: 0
		};
	}
	return a !== null && (sg(s, a.struct, a.offset), a = null), cg(s), Ym(o, Gm(r.map((e) => Xm(e)))), o.toUint8Array();
}, og = (e) => {
	e.written > 0 && (e.clientStructs.push({
		written: e.written,
		restEncoder: Kf(e.encoder.restEncoder)
	}), e.encoder.restEncoder = Uf(), e.written = 0);
}, sg = (e, t, n) => {
	e.written > 0 && e.currClient !== t.id.client && og(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), W(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, cg = (e) => {
	og(e);
	let t = e.encoder.restEncoder;
	W(t, e.clientStructs.length);
	for (let n = 0; n < e.clientStructs.length; n++) {
		let r = e.clientStructs[n];
		W(t, r.written), $f(t, r.restEncoder);
	}
}, lg = "You must not compute changes after the event-handler fired.", ug = class {
	constructor(e, t) {
		this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
	}
	get path() {
		return this._path ||= dg(this.currentTarget, this.target);
	}
	deletes(e) {
		return Um(this.transaction.deleteSet, e.id);
	}
	get keys() {
		if (this._keys === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw mp(lg);
			let e = /* @__PURE__ */ new Map(), t = this.target;
			this.transaction.changed.get(t).forEach((n) => {
				if (n !== null) {
					let r = t._map.get(n), i, a;
					if (this.adds(r)) {
						let e = r.left;
						for (; e !== null && this.adds(e);) e = e.left;
						if (this.deletes(r)) {
							if (e !== null && this.deletes(e)) i = "delete", a = vf(e.content.getContent());
							else return;
						} else e !== null && this.deletes(e) ? (i = "update", a = vf(e.content.getContent())) : (i = "add", a = void 0);
					} else if (this.deletes(r)) i = "delete", a = vf(r.content.getContent());
					else return;
					e.set(n, {
						action: i,
						oldValue: a
					});
				}
			}), this._keys = e;
		}
		return this._keys;
	}
	get delta() {
		return this.changes.delta;
	}
	adds(e) {
		return e.id.clock >= (this.transaction.beforeState.get(e.id.client) || 0);
	}
	get changes() {
		let e = this._changes;
		if (e === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw mp(lg);
			let t = this.target, n = _f(), r = _f(), i = [];
			if (e = {
				added: n,
				deleted: r,
				delta: i,
				keys: this.keys
			}, this.transaction.changed.get(t).has(null)) {
				let e = null, a = () => {
					e && i.push(e);
				};
				for (let i = t._start; i !== null; i = i.right) i.deleted ? this.deletes(i) && !this.adds(i) && ((e === null || e.delete === void 0) && (a(), e = { delete: 0 }), e.delete += i.length, r.add(i)) : this.adds(i) ? ((e === null || e.insert === void 0) && (a(), e = { insert: [] }), e.insert = e.insert.concat(i.content.getContent()), n.add(i)) : ((e === null || e.retain === void 0) && (a(), e = { retain: 0 }), e.retain += i.length);
				e !== null && e.retain === void 0 && a();
			}
			this._changes = e;
		}
		return e;
	}
}, dg = (e, t) => {
	let n = [];
	for (; t._item !== null && t !== e;) {
		if (t._item.parentSub !== null) n.unshift(t._item.parentSub);
		else {
			let e = 0, r = t._item.parent._start;
			for (; r !== t._item && r !== null;) !r.deleted && r.countable && (e += r.length), r = r.right;
			n.unshift(e);
		}
		t = t._item.parent;
	}
	return n;
}, Y = () => {
	Pm("Invalid access: Add Yjs type to a document before reading data.");
}, fg = 80, pg = 0, mg = class {
	constructor(e, t) {
		e.marker = !0, this.p = e, this.index = t, this.timestamp = pg++;
	}
}, hg = (e) => {
	e.timestamp = pg++;
}, gg = (e, t, n) => {
	e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = pg++;
}, _g = (e, t, n) => {
	if (e.length >= fg) {
		let r = e.reduce((e, t) => e.timestamp < t.timestamp ? e : t);
		return gg(r, t, n), r;
	}
	{
		let r = new mg(t, n);
		return e.push(r), r;
	}
}, vg = (e, t) => {
	if (e._start === null || t === 0 || e._searchMarker === null) return null;
	let n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((e, n) => Tf(t - e.index) < Tf(t - n.index) ? e : n), r = e._start, i = 0;
	for (n !== null && (r = n.p, i = n.index, hg(n)); r.right !== null && i < t;) {
		if (!r.deleted && r.countable) {
			if (t < i + r.length) break;
			i += r.length;
		}
		r = r.right;
	}
	for (; r.left !== null && i > t;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	return n !== null && Tf(n.index - i) < r.parent.length / fg ? (gg(n, r, i), n) : _g(e._searchMarker, r, i);
}, yg = (e, t, n) => {
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e[r];
		if (n > 0) {
			let t = i.p;
			for (t.marker = !1; t && (t.deleted || !t.countable);) t = t.left, t && !t.deleted && t.countable && (i.index -= t.length);
			if (t === null || t.marker === !0) {
				e.splice(r, 1);
				continue;
			}
			i.p = t, t.marker = !0;
		}
		(t < i.index || n > 0 && t === i.index) && (i.index = Df(t, i.index + n));
	}
}, bg = (e, t, n) => {
	let r = e, i = t.changedParentTypes;
	for (; mf(i, e, () => []).push(n), e._item !== null;) e = e._item.parent;
	_h(r._eH, n, t);
}, X = class {
	constructor() {
		this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = mh(), this._dEH = mh(), this._searchMarker = null;
	}
	get parent() {
		return this._item ? this._item.parent : null;
	}
	_integrate(e, t) {
		this.doc = e, this._item = t;
	}
	_copy() {
		throw hp();
	}
	clone() {
		throw hp();
	}
	_write(e) {}
	get _first() {
		let e = this._start;
		for (; e !== null && e.deleted;) e = e.right;
		return e;
	}
	_callObserver(e, t) {
		!e.local && this._searchMarker && (this._searchMarker.length = 0);
	}
	observe(e) {
		hh(this._eH, e);
	}
	observeDeep(e) {
		hh(this._dEH, e);
	}
	unobserve(e) {
		gh(this._eH, e);
	}
	unobserveDeep(e) {
		gh(this._dEH, e);
	}
	toJSON() {}
}, xg = (e, t, n) => {
	e.doc ?? Y(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
	let r = n - t, i = [], a = e._start;
	for (; a !== null && r > 0;) {
		if (a.countable && !a.deleted) {
			let e = a.content.getContent();
			if (e.length <= t) t -= e.length;
			else {
				for (let n = t; n < e.length && r > 0; n++) i.push(e[n]), r--;
				t = 0;
			}
		}
		a = a.right;
	}
	return i;
}, Sg = (e) => {
	e.doc ?? Y();
	let t = [], n = e._start;
	for (; n !== null;) {
		if (n.countable && !n.deleted) {
			let e = n.content.getContent();
			for (let n = 0; n < e.length; n++) t.push(e[n]);
		}
		n = n.right;
	}
	return t;
}, Cg = (e, t) => {
	let n = [], r = e._start;
	for (; r !== null;) {
		if (r.countable && Mh(r, t)) {
			let e = r.content.getContent();
			for (let t = 0; t < e.length; t++) n.push(e[t]);
		}
		r = r.right;
	}
	return n;
}, wg = (e, t) => {
	let n = 0, r = e._start;
	for (e.doc ?? Y(); r !== null;) {
		if (r.countable && !r.deleted) {
			let i = r.content.getContent();
			for (let r = 0; r < i.length; r++) t(i[r], n++, e);
		}
		r = r.right;
	}
}, Tg = (e, t) => {
	let n = [];
	return wg(e, (r, i) => {
		n.push(t(r, i, e));
	}), n;
}, Eg = (e) => {
	let t = e._start, n = null, r = 0;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next: () => {
			if (n === null) {
				for (; t !== null && t.deleted;) t = t.right;
				if (t === null) return {
					done: !0,
					value: void 0
				};
				n = t.content.getContent(), r = 0, t = t.right;
			}
			let e = n[r++];
			return n.length <= r && (n = null), {
				done: !1,
				value: e
			};
		}
	};
}, Dg = (e, t) => {
	e.doc ?? Y();
	let n = vg(e, t), r = e._start;
	for (n !== null && (r = n.p, t -= n.index); r !== null; r = r.right) if (!r.deleted && r.countable) {
		if (t < r.length) return r.content.getContent()[t];
		t -= r.length;
	}
}, Og = (e, t, n, r) => {
	let i = n, a = e.doc, o = a.clientID, s = a.store, c = n === null ? t._start : n.right, l = [], u = () => {
		l.length > 0 && (i = new Q(K(o, q(s, o)), i, i && i.lastId, c, c && c.id, t, null, new I_(l)), i.integrate(e, 0), l = []);
	};
	r.forEach((n) => {
		if (n === null) l.push(n);
		else switch (n.constructor) {
			case Number:
			case Object:
			case Boolean:
			case Array:
			case String:
				l.push(n);
				break;
			default: switch (u(), n.constructor) {
				case Uint8Array:
				case ArrayBuffer:
					i = new Q(K(o, q(s, o)), i, i && i.lastId, c, c && c.id, t, null, new C_(new Uint8Array(n))), i.integrate(e, 0);
					break;
				case $m:
					i = new Q(K(o, q(s, o)), i, i && i.lastId, c, c && c.id, t, null, new O_(n)), i.integrate(e, 0);
					break;
				default: if (n instanceof X) i = new Q(K(o, q(s, o)), i, i && i.lastId, c, c && c.id, t, null, new J_(n)), i.integrate(e, 0);
				else throw Error("Unexpected content type in insert operation");
			}
		}
	}), u();
}, kg = () => mp("Length exceeded!"), Ag = (e, t, n, r) => {
	if (n > t._length) throw kg();
	if (n === 0) return t._searchMarker && yg(t._searchMarker, n, r.length), Og(e, t, null, r);
	let i = n, a = vg(t, n), o = t._start;
	for (a !== null && (o = a.p, n -= a.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right) if (!o.deleted && o.countable) {
		if (n <= o.length) {
			n < o.length && Bh(e, K(o.id.client, o.id.clock + n));
			break;
		}
		n -= o.length;
	}
	return t._searchMarker && yg(t._searchMarker, i, r.length), Og(e, t, o, r);
}, jg = (e, t, n) => {
	let r = (t._searchMarker || []).reduce((e, t) => t.index > e.index ? t : e, {
		index: 0,
		p: t._start
	}).p;
	if (r) for (; r.right;) r = r.right;
	return Og(e, t, r, n);
}, Mg = (e, t, n, r) => {
	if (r === 0) return;
	let i = n, a = r, o = vg(t, n), s = t._start;
	for (o !== null && (s = o.p, n -= o.index); s !== null && n > 0; s = s.right) !s.deleted && s.countable && (n < s.length && Bh(e, K(s.id.client, s.id.clock + n)), n -= s.length);
	for (; r > 0 && s !== null;) s.deleted || (r < s.length && Bh(e, K(s.id.client, s.id.clock + r)), s.delete(e), r -= s.length), s = s.right;
	if (r > 0) throw kg();
	t._searchMarker && yg(t._searchMarker, i, -a + r);
}, Ng = (e, t, n) => {
	let r = t._map.get(n);
	r !== void 0 && r.delete(e);
}, Pg = (e, t, n, r) => {
	let i = t._map.get(n) || null, a = e.doc, o = a.clientID, s;
	if (r == null) s = new I_([r]);
	else switch (r.constructor) {
		case Number:
		case Object:
		case Boolean:
		case Array:
		case String:
		case Date:
		case BigInt:
			s = new I_([r]);
			break;
		case Uint8Array:
			s = new C_(r);
			break;
		case $m:
			s = new O_(r);
			break;
		default: if (r instanceof X) s = new J_(r);
		else throw Error("Unexpected content type");
	}
	new Q(K(o, q(a.store, o)), i, i && i.lastId, null, null, t, n, s).integrate(e, 0);
}, Fg = (e, t) => {
	e.doc ?? Y();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Ig = (e) => {
	let t = {};
	return e.doc ?? Y(), e._map.forEach((e, n) => {
		e.deleted || (t[n] = e.content.getContent()[e.length - 1]);
	}), t;
}, Lg = (e, t) => {
	e.doc ?? Y();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted;
}, Rg = (e, t) => {
	let n = {};
	return e._map.forEach((e, r) => {
		let i = e;
		for (; i !== null && (!t.sv.has(i.id.client) || i.id.clock >= (t.sv.get(i.id.client) || 0));) i = i.left;
		i !== null && Mh(i, t) && (n[r] = i.content.getContent()[i.length - 1]);
	}), n;
}, zg = (e) => (e.doc ?? Y(), Lm(e._map.entries(), (e) => !e[1].deleted)), Bg = class extends ug {}, Vg = class e extends X {
	constructor() {
		super(), this._prelimContent = [], this._searchMarker = [];
	}
	static from(t) {
		let n = new e();
		return n.push(t), n;
	}
	_integrate(e, t) {
		super._integrate(e, t), this.insert(0, this._prelimContent), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.insert(0, this.toArray().map((e) => e instanceof X ? e.clone() : e)), t;
	}
	get length() {
		return this.doc ?? Y(), this._length;
	}
	_callObserver(e, t) {
		super._callObserver(e, t), bg(this, e, new Bg(this, e));
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : J(this.doc, (n) => {
			Ag(n, this, e, t);
		});
	}
	push(e) {
		this.doc === null ? this._prelimContent.push(...e) : J(this.doc, (t) => {
			jg(t, this, e);
		});
	}
	unshift(e) {
		this.insert(0, e);
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : J(this.doc, (n) => {
			Mg(n, this, e, t);
		});
	}
	get(e) {
		return Dg(this, e);
	}
	toArray() {
		return Sg(this);
	}
	slice(e = 0, t = this.length) {
		return xg(this, e, t);
	}
	toJSON() {
		return this.map((e) => e instanceof X ? e.toJSON() : e);
	}
	map(e) {
		return Tg(this, e);
	}
	forEach(e) {
		wg(this, e);
	}
	[Symbol.iterator]() {
		return Eg(this);
	}
	_write(e) {
		e.writeTypeRef(V_);
	}
}, Hg = (e) => new Vg(), Ug = class extends ug {
	constructor(e, t, n) {
		super(e, t), this.keysChanged = n;
	}
}, Wg = class e extends X {
	constructor(e) {
		super(), this._prelimContent = null, this._prelimContent = e === void 0 ? /* @__PURE__ */ new Map() : new Map(e);
	}
	_integrate(e, t) {
		super._integrate(e, t), this._prelimContent.forEach((e, t) => {
			this.set(t, e);
		}), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return this.forEach((e, n) => {
			t.set(n, e instanceof X ? e.clone() : e);
		}), t;
	}
	_callObserver(e, t) {
		bg(this, e, new Ug(this, e, t));
	}
	toJSON() {
		this.doc ?? Y();
		let e = {};
		return this._map.forEach((t, n) => {
			if (!t.deleted) {
				let r = t.content.getContent()[t.length - 1];
				e[n] = r instanceof X ? r.toJSON() : r;
			}
		}), e;
	}
	get size() {
		return [...zg(this)].length;
	}
	keys() {
		return Rm(zg(this), (e) => e[0]);
	}
	values() {
		return Rm(zg(this), (e) => e[1].content.getContent()[e[1].length - 1]);
	}
	entries() {
		return Rm(zg(this), (e) => [e[0], e[1].content.getContent()[e[1].length - 1]]);
	}
	forEach(e) {
		this.doc ?? Y(), this._map.forEach((t, n) => {
			t.deleted || e(t.content.getContent()[t.length - 1], n, this);
		});
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	delete(e) {
		this.doc === null ? this._prelimContent.delete(e) : J(this.doc, (t) => {
			Ng(t, this, e);
		});
	}
	set(e, t) {
		return this.doc === null ? this._prelimContent.set(e, t) : J(this.doc, (n) => {
			Pg(n, this, e, t);
		}), t;
	}
	get(e) {
		return Fg(this, e);
	}
	has(e) {
		return Lg(this, e);
	}
	clear() {
		this.doc === null ? this._prelimContent.clear() : J(this.doc, (e) => {
			this.forEach(function(t, n, r) {
				Ng(e, r, n);
			});
		});
	}
	_write(e) {
		e.writeTypeRef(H_);
	}
}, Gg = (e) => new Wg(), Kg = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && Qp(e, t), qg = class {
	constructor(e, t, n, r) {
		this.left = e, this.right = t, this.index = n, this.currentAttributes = r;
	}
	forward() {
		switch (this.right === null && gp(), this.right.content.constructor) {
			case Z:
				this.right.deleted || Zg(this.currentAttributes, this.right.content);
				break;
			default: this.right.deleted || (this.index += this.right.length);
		}
		this.left = this.right, this.right = this.right.right;
	}
}, Jg = (e, t, n) => {
	for (; t.right !== null && n > 0;) {
		switch (t.right.content.constructor) {
			case Z:
				t.right.deleted || Zg(t.currentAttributes, t.right.content);
				break;
			default: t.right.deleted || (n < t.right.length && Bh(e, K(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
		}
		t.left = t.right, t.right = t.right.right;
	}
	return t;
}, Yg = (e, t, n, r) => {
	let i = /* @__PURE__ */ new Map(), a = r ? vg(t, n) : null;
	return a ? Jg(e, new qg(a.p.left, a.p, a.index, i), n - a.index) : Jg(e, new qg(null, t._start, 0, i), n);
}, Xg = (e, t, n, r) => {
	for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === Z && Kg(r.get(n.right.content.key), n.right.content.value));) n.right.deleted || r.delete(n.right.content.key), n.forward();
	let i = e.doc, a = i.clientID;
	r.forEach((r, o) => {
		let s = n.left, c = n.right, l = new Q(K(a, q(i.store, a)), s, s && s.lastId, c, c && c.id, t, null, new Z(o, r));
		l.integrate(e, 0), n.right = l, n.forward();
	});
}, Zg = (e, t) => {
	let { key: n, value: r } = t;
	r === null ? e.delete(n) : e.set(n, r);
}, Qg = (e, t) => {
	for (; e.right !== null && (e.right.deleted || e.right.content.constructor === Z && Kg(t[e.right.content.key] ?? null, e.right.content.value));) e.forward();
}, $g = (e, t, n, r) => {
	let i = e.doc, a = i.clientID, o = /* @__PURE__ */ new Map();
	for (let s in r) {
		let c = r[s], l = n.currentAttributes.get(s) ?? null;
		if (!Kg(l, c)) {
			o.set(s, l);
			let { left: r, right: u } = n;
			n.right = new Q(K(a, q(i.store, a)), r, r && r.lastId, u, u && u.id, t, null, new Z(s, c)), n.right.integrate(e, 0), n.forward();
		}
	}
	return o;
}, e_ = (e, t, n, r, i) => {
	n.currentAttributes.forEach((e, t) => {
		i[t] === void 0 && (i[t] = null);
	});
	let a = e.doc, o = a.clientID;
	Qg(n, i);
	let s = $g(e, t, n, i), c = r.constructor === String ? new R_(r) : r instanceof X ? new J_(r) : new A_(r), { left: l, right: u, index: d } = n;
	t._searchMarker && yg(t._searchMarker, n.index, c.getLength()), u = new Q(K(o, q(a.store, o)), l, l && l.lastId, u, u && u.id, t, null, c), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), Xg(e, t, n, s);
}, t_ = (e, t, n, r, i) => {
	let a = e.doc, o = a.clientID;
	Qg(n, i);
	let s = $g(e, t, n, i);
	iterationLoop: for (; n.right !== null && (r > 0 || s.size > 0 && (n.right.deleted || n.right.content.constructor === Z));) {
		if (!n.right.deleted) switch (n.right.content.constructor) {
			case Z: {
				let { key: t, value: a } = n.right.content, o = i[t];
				if (o !== void 0) {
					if (Kg(o, a)) s.delete(t);
					else {
						if (r === 0) break iterationLoop;
						s.set(t, a);
					}
					n.right.delete(e);
				} else n.currentAttributes.set(t, a);
				break;
			}
			default: r < n.right.length && Bh(e, K(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
		}
		n.forward();
	}
	if (r > 0) {
		let i = "";
		for (; r > 0; r--) i += "\n";
		n.right = new Q(K(o, q(a.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new R_(i)), n.right.integrate(e, 0), n.forward();
	}
	Xg(e, t, n, s);
}, n_ = (e, t, n, r, i) => {
	let a = t, o = ff();
	for (; a && (!a.countable || a.deleted);) {
		if (!a.deleted && a.content.constructor === Z) {
			let e = a.content;
			o.set(e.key, e);
		}
		a = a.right;
	}
	let s = 0, c = !1;
	for (; t !== a;) {
		if (n === t && (c = !0), !t.deleted) {
			let n = t.content;
			switch (n.constructor) {
				case Z: {
					let { key: a, value: l } = n, u = r.get(a) ?? null;
					(o.get(a) !== n || u === l) && (t.delete(e), s++, !c && (i.get(a) ?? null) === l && u !== l && (u === null ? i.delete(a) : i.set(a, u))), !c && !t.deleted && Zg(i, n);
					break;
				}
			}
		}
		t = t.right;
	}
	return s;
}, r_ = (e, t) => {
	for (; t && t.right && (t.right.deleted || !t.right.countable);) t = t.right;
	let n = /* @__PURE__ */ new Set();
	for (; t && (t.deleted || !t.countable);) {
		if (!t.deleted && t.content.constructor === Z) {
			let r = t.content.key;
			n.has(r) ? t.delete(e) : n.add(r);
		}
		t = t.left;
	}
}, i_ = (e) => {
	let t = 0;
	return J(e.doc, (n) => {
		let r = e._start, i = e._start, a = ff(), o = pf(a);
		for (; i;) {
			if (i.deleted === !1) switch (i.content.constructor) {
				case Z:
					Zg(o, i.content);
					break;
				default: t += n_(n, r, i, a, o), a = pf(o), r = i;
			}
			i = i.right;
		}
	}), t;
}, a_ = (e) => {
	let t = /* @__PURE__ */ new Set(), n = e.doc;
	for (let [r, i] of e.afterState.entries()) {
		let a = e.beforeState.get(r) || 0;
		i !== a && Uh(e, n.store.clients.get(r), a, i, (e) => {
			!e.deleted && e.content.constructor === Z && e.constructor !== S_ && t.add(e.parent);
		});
	}
	J(n, (n) => {
		Vm(e, e.deleteSet, (e) => {
			if (e instanceof S_ || !e.parent._hasFormatting || t.has(e.parent)) return;
			let r = e.parent;
			e.content.constructor === Z ? t.add(r) : r_(n, e);
		});
		for (let e of t) i_(e);
	});
}, o_ = (e, t, n) => {
	let r = n, i = pf(t.currentAttributes), a = t.right;
	for (; n > 0 && t.right !== null;) {
		if (t.right.deleted === !1) switch (t.right.content.constructor) {
			case J_:
			case A_:
			case R_: n < t.right.length && Bh(e, K(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
		}
		t.forward();
	}
	a && n_(e, a, t.right, i, t.currentAttributes);
	let o = (t.left || t.right).parent;
	return o._searchMarker && yg(o._searchMarker, t.index, -r + n), t;
}, s_ = class extends ug {
	constructor(e, t, n) {
		super(e, t), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), n.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.keysChanged.add(e);
		});
	}
	get changes() {
		if (this._changes === null) {
			let e = {
				keys: this.keys,
				delta: this.delta,
				added: /* @__PURE__ */ new Set(),
				deleted: /* @__PURE__ */ new Set()
			};
			this._changes = e;
		}
		return this._changes;
	}
	get delta() {
		if (this._delta === null) {
			let e = this.target.doc, t = [];
			J(e, (e) => {
				let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = this.target._start, a = null, o = {}, s = "", c = 0, l = 0, u = () => {
					if (a !== null) {
						let e = null;
						switch (a) {
							case "delete":
								l > 0 && (e = { delete: l }), l = 0;
								break;
							case "insert":
								(typeof s == "object" || s.length > 0) && (e = { insert: s }, n.size > 0 && (e.attributes = {}, n.forEach((t, n) => {
									t !== null && (e.attributes[n] = t);
								}))), s = "";
								break;
							case "retain": c > 0 && (e = { retain: c }, Yp(o) || (e.attributes = Gp({}, o))), c = 0;
						}
						e && t.push(e), a = null;
					}
				};
				for (; i !== null;) {
					switch (i.content.constructor) {
						case J_:
						case A_:
							this.adds(i) ? this.deletes(i) || (u(), a = "insert", s = i.content.getContent()[0], u()) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += 1) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += 1);
							break;
						case R_:
							this.adds(i) ? this.deletes(i) || (a !== "insert" && (u(), a = "insert"), s += i.content.str) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += i.length) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += i.length);
							break;
						case Z: {
							let { key: t, value: s } = i.content;
							if (this.adds(i)) this.deletes(i) || (Kg(n.get(t) ?? null, s) ? s !== null && i.delete(e) : (a === "retain" && u(), Kg(s, r.get(t) ?? null) ? delete o[t] : o[t] = s));
							else if (this.deletes(i)) {
								r.set(t, s);
								let e = n.get(t) ?? null;
								Kg(e, s) || (a === "retain" && u(), o[t] = e);
							} else if (!i.deleted) {
								r.set(t, s);
								let n = o[t];
								n !== void 0 && (Kg(n, s) ? n !== null && i.delete(e) : (a === "retain" && u(), s === null ? delete o[t] : o[t] = s));
							}
							i.deleted || (a === "insert" && u(), Zg(n, i.content));
							break;
						}
					}
					i = i.right;
				}
				for (u(); t.length > 0;) {
					let e = t[t.length - 1];
					if (e.retain !== void 0 && e.attributes === void 0) t.pop();
					else break;
				}
			}), this._delta = t;
		}
		return this._delta;
	}
}, c_ = class e extends X {
	constructor(e) {
		super(), this._pending = e === void 0 ? [] : [() => this.insert(0, e)], this._searchMarker = [], this._hasFormatting = !1;
	}
	get length() {
		return this.doc ?? Y(), this._length;
	}
	_integrate(e, t) {
		super._integrate(e, t);
		try {
			this._pending.forEach((e) => e());
		} catch (e) {
			console.error(e);
		}
		this._pending = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.applyDelta(this.toDelta()), t;
	}
	_callObserver(e, t) {
		super._callObserver(e, t);
		let n = new s_(this, e, t);
		bg(this, e, n), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
	}
	toString() {
		this.doc ?? Y();
		let e = "", t = this._start;
		for (; t !== null;) !t.deleted && t.countable && t.content.constructor === R_ && (e += t.content.str), t = t.right;
		return e;
	}
	toJSON() {
		return this.toString();
	}
	applyDelta(e, { sanitize: t = !0 } = {}) {
		this.doc === null ? this._pending.push(() => this.applyDelta(e)) : J(this.doc, (n) => {
			let r = new qg(null, this._start, 0, /* @__PURE__ */ new Map());
			for (let i = 0; i < e.length; i++) {
				let a = e[i];
				if (a.insert !== void 0) {
					let o = !t && typeof a.insert == "string" && i === e.length - 1 && r.right === null && a.insert.slice(-1) === "\n" ? a.insert.slice(0, -1) : a.insert;
					(typeof o != "string" || o.length > 0) && e_(n, this, r, o, a.attributes || {});
				} else a.retain === void 0 ? a.delete !== void 0 && o_(n, r, a.delete) : t_(n, this, r, a.retain, a.attributes || {});
			}
		});
	}
	toDelta(e, t, n) {
		this.doc ?? Y();
		let r = [], i = /* @__PURE__ */ new Map(), a = this.doc, o = "", s = this._start;
		function c() {
			if (o.length > 0) {
				let e = {}, t = !1;
				i.forEach((n, r) => {
					t = !0, e[r] = n;
				});
				let n = { insert: o };
				t && (n.attributes = e), r.push(n), o = "";
			}
		}
		let l = () => {
			for (; s !== null;) {
				if (Mh(s, e) || t !== void 0 && Mh(s, t)) switch (s.content.constructor) {
					case R_: {
						let r = i.get("ychange");
						e !== void 0 && !Mh(s, e) ? (r === void 0 || r.user !== s.id.client || r.type !== "removed") && (c(), i.set("ychange", n ? n("removed", s.id) : { type: "removed" })) : t !== void 0 && !Mh(s, t) ? (r === void 0 || r.user !== s.id.client || r.type !== "added") && (c(), i.set("ychange", n ? n("added", s.id) : { type: "added" })) : r !== void 0 && (c(), i.delete("ychange")), o += s.content.str;
						break;
					}
					case J_:
					case A_: {
						c();
						let e = { insert: s.content.getContent()[0] };
						if (i.size > 0) {
							let t = {};
							e.attributes = t, i.forEach((e, n) => {
								t[n] = e;
							});
						}
						r.push(e);
						break;
					}
					case Z: Mh(s, e) && (c(), Zg(i, s.content));
				}
				s = s.right;
			}
			c();
		};
		return e || t ? J(a, (n) => {
			e && Nh(n, e), t && Nh(n, t), l();
		}, "cleanup") : l(), r;
	}
	insert(e, t, n) {
		if (t.length <= 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.insert(e, t, n)) : J(r, (r) => {
			let i = Yg(r, this, e, !n);
			n || (n = {}, i.currentAttributes.forEach((e, t) => {
				n[t] = e;
			})), e_(r, this, i, t, n);
		});
	}
	insertEmbed(e, t, n) {
		let r = this.doc;
		r === null ? this._pending.push(() => this.insertEmbed(e, t, n || {})) : J(r, (r) => {
			let i = Yg(r, this, e, !n);
			e_(r, this, i, t, n || {});
		});
	}
	delete(e, t) {
		if (t === 0) return;
		let n = this.doc;
		n === null ? this._pending.push(() => this.delete(e, t)) : J(n, (n) => {
			o_(n, Yg(n, this, e, !0), t);
		});
	}
	format(e, t, n) {
		if (t === 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.format(e, t, n)) : J(r, (r) => {
			let i = Yg(r, this, e, !1);
			i.right !== null && t_(r, this, i, t, n);
		});
	}
	removeAttribute(e) {
		this.doc === null ? this._pending.push(() => this.removeAttribute(e)) : J(this.doc, (t) => {
			Ng(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._pending.push(() => this.setAttribute(e, t)) : J(this.doc, (n) => {
			Pg(n, this, e, t);
		});
	}
	getAttribute(e) {
		return Fg(this, e);
	}
	getAttributes() {
		return Ig(this);
	}
	_write(e) {
		e.writeTypeRef(U_);
	}
}, l_ = (e) => new c_(), u_ = class {
	constructor(e, t = () => !0) {
		this._filter = t, this._root = e, this._currentNode = e._start, this._firstCall = !0, e.doc ?? Y();
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this._currentNode, t = e && e.content && e.content.type;
		if (e !== null && (!this._firstCall || e.deleted || !this._filter(t))) do
			if (t = e.content.type, !e.deleted && (t.constructor === p_ || t.constructor === d_) && t._start !== null) e = t._start;
			else for (; e !== null;) {
				let t = e.next;
				if (t !== null) {
					e = t;
					break;
				}
				e = e.parent === this._root ? null : e.parent._item;
			}
		while (e !== null && (e.deleted || !this._filter(e.content.type)));
		return this._firstCall = !1, e === null ? {
			value: void 0,
			done: !0
		} : (this._currentNode = e, {
			value: e.content.type,
			done: !1
		});
	}
}, d_ = class e extends X {
	constructor() {
		super(), this._prelimContent = [];
	}
	get firstChild() {
		let e = this._first;
		return e ? e.content.getContent()[0] : null;
	}
	_integrate(e, t) {
		super._integrate(e, t), this.insert(0, this._prelimContent), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.insert(0, this.toArray().map((e) => e instanceof X ? e.clone() : e)), t;
	}
	get length() {
		return this.doc ?? Y(), this._prelimContent === null ? this._length : this._prelimContent.length;
	}
	createTreeWalker(e) {
		return new u_(this, e);
	}
	querySelector(e) {
		e = e.toUpperCase();
		let t = new u_(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e).next();
		return t.done ? null : t.value;
	}
	querySelectorAll(e) {
		return e = e.toUpperCase(), bf(new u_(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e));
	}
	_callObserver(e, t) {
		bg(this, e, new h_(this, t, e));
	}
	toString() {
		return Tg(this, (e) => e.toString()).join("");
	}
	toJSON() {
		return this.toString();
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createDocumentFragment();
		return n !== void 0 && n._createAssociation(r, this), wg(this, (i) => {
			r.insertBefore(i.toDOM(e, t, n), null);
		}), r;
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : J(this.doc, (n) => {
			Ag(n, this, e, t);
		});
	}
	insertAfter(e, t) {
		if (this.doc !== null) J(this.doc, (n) => {
			let r = e && e instanceof X ? e._item : e;
			Og(n, this, r, t);
		});
		else {
			let n = this._prelimContent, r = e === null ? 0 : n.findIndex((t) => t === e) + 1;
			if (r === 0 && e !== null) throw mp("Reference item not found");
			n.splice(r, 0, ...t);
		}
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : J(this.doc, (n) => {
			Mg(n, this, e, t);
		});
	}
	toArray() {
		return Sg(this);
	}
	push(e) {
		this.insert(this.length, e);
	}
	unshift(e) {
		this.insert(0, e);
	}
	get(e) {
		return Dg(this, e);
	}
	slice(e = 0, t = this.length) {
		return xg(this, e, t);
	}
	forEach(e) {
		wg(this, e);
	}
	_write(e) {
		e.writeTypeRef(G_);
	}
}, f_ = (e) => new d_(), p_ = class e extends d_ {
	constructor(e = "UNDEFINED") {
		super(), this.nodeName = e, this._prelimAttrs = /* @__PURE__ */ new Map();
	}
	get nextSibling() {
		let e = this._item ? this._item.next : null;
		return e ? e.content.type : null;
	}
	get prevSibling() {
		let e = this._item ? this._item.prev : null;
		return e ? e.content.type : null;
	}
	_integrate(e, t) {
		super._integrate(e, t), this._prelimAttrs.forEach((e, t) => {
			this.setAttribute(t, e);
		}), this._prelimAttrs = null;
	}
	_copy() {
		return new e(this.nodeName);
	}
	clone() {
		let t = new e(this.nodeName);
		return qp(this.getAttributes(), (e, n) => {
			typeof e == "string" && t.setAttribute(n, e);
		}), t.insert(0, this.toArray().map((e) => e instanceof X ? e.clone() : e)), t;
	}
	toString() {
		let e = this.getAttributes(), t = [], n = [];
		for (let t in e) n.push(t);
		n.sort();
		let r = n.length;
		for (let i = 0; i < r; i++) {
			let r = n[i];
			t.push(r + "=\"" + e[r] + "\"");
		}
		let i = this.nodeName.toLocaleLowerCase();
		return `<${i}${t.length > 0 ? " " + t.join(" ") : ""}>${super.toString()}</${i}>`;
	}
	removeAttribute(e) {
		this.doc === null ? this._prelimAttrs.delete(e) : J(this.doc, (t) => {
			Ng(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._prelimAttrs.set(e, t) : J(this.doc, (n) => {
			Pg(n, this, e, t);
		});
	}
	getAttribute(e) {
		return Fg(this, e);
	}
	hasAttribute(e) {
		return Lg(this, e);
	}
	getAttributes(e) {
		return e ? Rg(this, e) : Ig(this);
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createElement(this.nodeName), i = this.getAttributes();
		for (let e in i) {
			let t = i[e];
			typeof t == "string" && r.setAttribute(e, t);
		}
		return wg(this, (i) => {
			r.appendChild(i.toDOM(e, t, n));
		}), n !== void 0 && n._createAssociation(r, this), r;
	}
	_write(e) {
		e.writeTypeRef(W_), e.writeKey(this.nodeName);
	}
}, m_ = (e) => new p_(e.readKey()), h_ = class extends ug {
	constructor(e, t, n) {
		super(e, n), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), t.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.attributesChanged.add(e);
		});
	}
}, g_ = class e extends Wg {
	constructor(e) {
		super(), this.hookName = e;
	}
	_copy() {
		return new e(this.hookName);
	}
	clone() {
		let t = new e(this.hookName);
		return this.forEach((e, n) => {
			t.set(n, e);
		}), t;
	}
	toDOM(e = document, t = {}, n) {
		let r = t[this.hookName], i;
		return i = r === void 0 ? document.createElement(this.hookName) : r.createDom(this), i.setAttribute("data-yjs-hook", this.hookName), n !== void 0 && n._createAssociation(i, this), i;
	}
	_write(e) {
		e.writeTypeRef(K_), e.writeKey(this.hookName);
	}
}, __ = (e) => new g_(e.readKey()), v_ = class e extends c_ {
	get nextSibling() {
		let e = this._item ? this._item.next : null;
		return e ? e.content.type : null;
	}
	get prevSibling() {
		let e = this._item ? this._item.prev : null;
		return e ? e.content.type : null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.applyDelta(this.toDelta()), t;
	}
	toDOM(e = document, t, n) {
		let r = e.createTextNode(this.toString());
		return n !== void 0 && n._createAssociation(r, this), r;
	}
	toString() {
		return this.toDelta().map((e) => {
			let t = [];
			for (let n in e.attributes) {
				let r = [];
				for (let t in e.attributes[n]) r.push({
					key: t,
					value: e.attributes[n][t]
				});
				r.sort((e, t) => e.key < t.key ? -1 : 1), t.push({
					nodeName: n,
					attrs: r
				});
			}
			t.sort((e, t) => e.nodeName < t.nodeName ? -1 : 1);
			let n = "";
			for (let e = 0; e < t.length; e++) {
				let r = t[e];
				n += `<${r.nodeName}`;
				for (let e = 0; e < r.attrs.length; e++) {
					let t = r.attrs[e];
					n += ` ${t.key}="${t.value}"`;
				}
				n += ">";
			}
			n += e.insert;
			for (let e = t.length - 1; e >= 0; e--) n += `</${t[e].nodeName}>`;
			return n;
		}).join("");
	}
	toJSON() {
		return this.toString();
	}
	_write(e) {
		e.writeTypeRef(q_);
	}
}, y_ = (e) => new v_(), b_ = class {
	constructor(e, t) {
		this.id = e, this.length = t;
	}
	get deleted() {
		throw hp();
	}
	mergeWith(e) {
		return !1;
	}
	write(e, t, n) {
		throw hp();
	}
	integrate(e, t) {
		throw hp();
	}
}, x_ = 0, S_ = class extends b_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor && (this.length += e.length, !0);
	}
	integrate(e, t) {
		t > 0 && (this.id.clock += t, this.length -= t), Ih(e.doc.store, this);
	}
	write(e, t) {
		e.writeInfo(x_), e.writeLen(this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, C_ = class e {
	constructor(e) {
		this.content = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.content];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.content);
	}
	splice(e) {
		throw hp();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeBuf(this.content);
	}
	getRef() {
		return 3;
	}
}, w_ = (e) => new C_(e.readBuf()), T_ = class e {
	constructor(e) {
		this.len = e;
	}
	getLength() {
		return this.len;
	}
	getContent() {
		return [];
	}
	isCountable() {
		return !1;
	}
	copy() {
		return new e(this.len);
	}
	splice(t) {
		let n = new e(this.len - t);
		return this.len = t, n;
	}
	mergeWith(e) {
		return this.len += e.len, !0;
	}
	integrate(e, t) {
		Km(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeLen(this.len - t);
	}
	getRef() {
		return 1;
	}
}, E_ = (e) => new T_(e.readLen()), D_ = (e, t) => new $m({
	guid: e,
	...t,
	shouldLoad: t.shouldLoad || t.autoLoad || !1
}), O_ = class e {
	constructor(e) {
		e._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = e;
		let t = {};
		this.opts = t, e.gc || (t.gc = !1), e.autoLoad && (t.autoLoad = !0), e.meta !== null && (t.meta = e.meta);
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.doc];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(D_(this.doc.guid, this.opts));
	}
	splice(e) {
		throw hp();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		this.doc._item = t, e.subdocsAdded.add(this.doc), this.doc.shouldLoad && e.subdocsLoaded.add(this.doc);
	}
	delete(e) {
		e.subdocsAdded.has(this.doc) ? e.subdocsAdded.delete(this.doc) : e.subdocsRemoved.add(this.doc);
	}
	gc(e) {}
	write(e, t) {
		e.writeString(this.doc.guid), e.writeAny(this.opts);
	}
	getRef() {
		return 9;
	}
}, k_ = (e) => new O_(D_(e.readString(), e.readAny())), A_ = class e {
	constructor(e) {
		this.embed = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.embed];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.embed);
	}
	splice(e) {
		throw hp();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeJSON(this.embed);
	}
	getRef() {
		return 5;
	}
}, j_ = (e) => new A_(e.readJSON()), Z = class e {
	constructor(e, t) {
		this.key = e, this.value = t;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [];
	}
	isCountable() {
		return !1;
	}
	copy() {
		return new e(this.key, this.value);
	}
	splice(e) {
		throw hp();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		let n = t.parent;
		n._searchMarker = null, n._hasFormatting = !0;
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeKey(this.key), e.writeJSON(this.value);
	}
	getRef() {
		return 6;
	}
}, M_ = (e) => new Z(e.readKey(), e.readJSON()), N_ = class e {
	constructor(e) {
		this.arr = e;
	}
	getLength() {
		return this.arr.length;
	}
	getContent() {
		return this.arr;
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.arr);
	}
	splice(t) {
		let n = new e(this.arr.slice(t));
		return this.arr = this.arr.slice(0, t), n;
	}
	mergeWith(e) {
		return this.arr = this.arr.concat(e.arr), !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		let n = this.arr.length;
		e.writeLen(n - t);
		for (let r = t; r < n; r++) {
			let t = this.arr[r];
			e.writeString(t === void 0 ? "undefined" : JSON.stringify(t));
		}
	}
	getRef() {
		return 2;
	}
}, P_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		t === "undefined" ? n.push(void 0) : n.push(JSON.parse(t));
	}
	return new N_(n);
}, F_ = lm("node_env") === "development", I_ = class e {
	constructor(e) {
		this.arr = e, F_ && em(e);
	}
	getLength() {
		return this.arr.length;
	}
	getContent() {
		return this.arr;
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.arr);
	}
	splice(t) {
		let n = new e(this.arr.slice(t));
		return this.arr = this.arr.slice(0, t), n;
	}
	mergeWith(e) {
		return this.arr = this.arr.concat(e.arr), !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		let n = this.arr.length;
		e.writeLen(n - t);
		for (let r = t; r < n; r++) {
			let t = this.arr[r];
			e.writeAny(t);
		}
	}
	getRef() {
		return 8;
	}
}, L_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) n.push(e.readAny());
	return new I_(n);
}, R_ = class e {
	constructor(e) {
		this.str = e;
	}
	getLength() {
		return this.str.length;
	}
	getContent() {
		return this.str.split("");
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.str);
	}
	splice(t) {
		let n = new e(this.str.slice(t));
		this.str = this.str.slice(0, t);
		let r = this.str.charCodeAt(t - 1);
		return r >= 55296 && r <= 56319 && (this.str = this.str.slice(0, t - 1) + "�", n.str = "�" + n.str.slice(1)), n;
	}
	mergeWith(e) {
		return this.str += e.str, !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeString(t === 0 ? this.str : this.str.slice(t));
	}
	getRef() {
		return 4;
	}
}, z_ = (e) => new R_(e.readString()), B_ = [
	Hg,
	Gg,
	l_,
	m_,
	f_,
	__,
	y_
], V_ = 0, H_ = 1, U_ = 2, W_ = 3, G_ = 4, K_ = 5, q_ = 6, J_ = class e {
	constructor(e) {
		this.type = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.type];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.type._copy());
	}
	splice(e) {
		throw hp();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		this.type._integrate(e.doc, t);
	}
	delete(e) {
		let t = this.type._start;
		for (; t !== null;) t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e), t = t.right;
		this.type._map.forEach((t) => {
			t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e);
		}), e.changed.delete(this.type);
	}
	gc(e) {
		let t = this.type._start;
		for (; t !== null;) t.gc(e, !0), t = t.right;
		this.type._start = null, this.type._map.forEach((t) => {
			for (; t !== null;) t.gc(e, !0), t = t.left;
		}), this.type._map = /* @__PURE__ */ new Map();
	}
	write(e, t) {
		this.type._write(e);
	}
	getRef() {
		return 7;
	}
}, Y_ = (e) => new J_(B_[e.readTypeRef()](e)), X_ = (e, t) => {
	let n = t, r = 0, i;
	do
		r > 0 && (n = K(n.client, n.clock + r)), i = Rh(e, n), r = n.clock - i.id.clock, n = i.redone;
	while (n !== null && i instanceof Q);
	return {
		item: i,
		diff: r
	};
}, Z_ = (e, t) => {
	for (; e !== null && e.keep !== t;) e.keep = t, e = e.parent._item;
}, Q_ = (e, t, n) => {
	let { client: r, clock: i } = t.id, a = new Q(K(r, i + n), t, K(r, i + n - 1), t.right, t.rightOrigin, t.parent, t.parentSub, t.content.splice(n));
	return t.deleted && a.markDeleted(), t.keep && (a.keep = !0), t.redone !== null && (a.redone = K(t.redone.client, t.redone.clock + n)), t.right = a, a.right !== null && (a.right.left = a), e._mergeStructs.push(a), a.parentSub !== null && a.right === null && a.parent._map.set(a.parentSub, a), t.length = n, a;
}, $_ = (e, t) => xf(e, (e) => Um(e.deletions, t)), ev = (e, t, n, r, i, a) => {
	let o = e.doc, s = o.store, c = o.clientID, l = t.redone;
	if (l !== null) return Bh(e, l);
	let u = t.parent._item, d = null, f;
	if (u !== null && u.deleted === !0) {
		if (u.redone === null && (!n.has(u) || ev(e, u, n, r, i, a) === null)) return null;
		for (; u.redone !== null;) u = Bh(e, u.redone);
	}
	let p = u === null ? t.parent : u.content.type;
	if (t.parentSub === null) {
		for (d = t.left, f = t; d !== null;) {
			let t = d;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Bh(e, t.redone);
			if (t !== null && t.parent._item === u) {
				d = t;
				break;
			}
			d = d.left;
		}
		for (; f !== null;) {
			let t = f;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Bh(e, t.redone);
			if (t !== null && t.parent._item === u) {
				f = t;
				break;
			}
			f = f.right;
		}
	} else if (f = null, t.right && !i) {
		for (d = t; d !== null && d.right !== null && (d.right.redone || Um(r, d.right.id) || $_(a.undoStack, d.right.id) || $_(a.redoStack, d.right.id));) for (d = d.right; d.redone;) d = Bh(e, d.redone);
		if (d && d.right !== null) return null;
	} else d = p._map.get(t.parentSub) || null;
	let m = K(c, q(s, c)), h = new Q(m, d, d && d.lastId, f, f && f.id, p, t.parentSub, t.content.copy());
	return t.redone = m, Z_(h, !0), h.integrate(e, 0), h;
}, Q = class e extends b_ {
	constructor(e, t, n, r, i, a, o, s) {
		super(e, s.getLength()), this.origin = n, this.left = t, this.right = r, this.rightOrigin = i, this.parent = a, this.parentSub = o, this.redone = null, this.content = s, this.info = this.content.isCountable() ? 2 : 0;
	}
	set marker(e) {
		(this.info & 8) > 0 !== e && (this.info ^= 8);
	}
	get marker() {
		return (this.info & 8) > 0;
	}
	get keep() {
		return (this.info & 1) > 0;
	}
	set keep(e) {
		this.keep !== e && (this.info ^= 1);
	}
	get countable() {
		return (this.info & 2) > 0;
	}
	get deleted() {
		return (this.info & 4) > 0;
	}
	set deleted(e) {
		this.deleted !== e && (this.info ^= 4);
	}
	markDeleted() {
		this.info |= 4;
	}
	getMissing(t, n) {
		if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= q(n, this.origin.client)) return this.origin.client;
		if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= q(n, this.rightOrigin.client)) return this.rightOrigin.client;
		if (this.parent && this.parent.constructor === vh && this.id.client !== this.parent.client && this.parent.clock >= q(n, this.parent.client)) return this.parent.client;
		if (this.origin &&= (this.left = Vh(t, n, this.origin), this.left.lastId), this.rightOrigin &&= (this.right = Bh(t, this.rightOrigin), this.right.id), this.left && this.left.constructor === S_ || this.right && this.right.constructor === S_) this.parent = null;
		else if (!this.parent) this.left && this.left.constructor === e ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === e && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
		else if (this.parent.constructor === vh) {
			let e = Rh(n, this.parent);
			this.parent = e.constructor === S_ ? null : e.content.type;
		}
		return null;
	}
	integrate(e, t) {
		if (t > 0 && (this.id.clock += t, this.left = Vh(e, e.doc.store, K(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
			if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
				let t = this.left, n;
				if (t !== null) n = t.right;
				else if (this.parentSub !== null) for (n = this.parent._map.get(this.parentSub) || null; n !== null && n.left !== null;) n = n.left;
				else n = this.parent._start;
				let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
				for (; n !== null && n !== this.right;) {
					if (i.add(n), r.add(n), yh(this.origin, n.origin)) {
						if (n.id.client < this.id.client) t = n, r.clear();
						else if (yh(this.rightOrigin, n.rightOrigin)) break;
					} else if (n.origin !== null && i.has(Rh(e.doc.store, n.origin))) r.has(Rh(e.doc.store, n.origin)) || (t = n, r.clear());
					else break;
					n = n.right;
				}
				this.left = t;
			}
			if (this.left !== null) {
				let e = this.left.right;
				this.right = e, this.left.right = this;
			} else {
				let e;
				if (this.parentSub !== null) for (e = this.parent._map.get(this.parentSub) || null; e !== null && e.left !== null;) e = e.left;
				else e = this.parent._start, this.parent._start = this;
				this.right = e;
			}
			this.right === null ? this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)) : this.right.left = this, this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Ih(e.doc.store, this), this.content.integrate(e, this), Kh(e, this.parent, this.parentSub), (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
		} else new S_(this.id, this.length).integrate(e, 0);
	}
	get next() {
		let e = this.right;
		for (; e !== null && e.deleted;) e = e.right;
		return e;
	}
	get prev() {
		let e = this.left;
		for (; e !== null && e.deleted;) e = e.left;
		return e;
	}
	get lastId() {
		return this.length === 1 ? this.id : K(this.id.client, this.id.clock + this.length - 1);
	}
	mergeWith(e) {
		if (this.constructor === e.constructor && yh(e.origin, this.lastId) && this.right === e && yh(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
			let t = this.parent._searchMarker;
			return t && t.forEach((t) => {
				t.p === e && (t.p = this, !this.deleted && this.countable && (t.index -= this.length));
			}), e.keep && (this.keep = !0), this.right = e.right, this.right !== null && (this.right.left = this), this.length += e.length, !0;
		}
		return !1;
	}
	delete(e) {
		if (!this.deleted) {
			let t = this.parent;
			this.countable && this.parentSub === null && (t._length -= this.length), this.markDeleted(), Km(e.deleteSet, this.id.client, this.id.clock, this.length), Kh(e, t, this.parentSub), this.content.delete(e);
		}
	}
	gc(e, t) {
		if (!this.deleted) throw gp();
		this.content.gc(e), t ? Hh(e, this, new S_(this.id, this.length)) : this.content = new T_(this.length);
	}
	write(e, t) {
		let n = t > 0 ? K(this.id.client, this.id.clock + t - 1) : this.origin, r = this.rightOrigin, i = this.parentSub, a = this.content.getRef() & 31 | (n === null ? 0 : 128) | (r === null ? 0 : 64) | (i === null ? 0 : 32);
		if (e.writeInfo(a), n !== null && e.writeLeftID(n), r !== null && e.writeRightID(r), n === null && r === null) {
			let t = this.parent;
			if (t._item !== void 0) {
				let n = t._item;
				if (n === null) {
					let n = bh(t);
					e.writeParentInfo(!0), e.writeString(n);
				} else e.writeParentInfo(!1), e.writeLeftID(n.id);
			} else t.constructor === String ? (e.writeParentInfo(!0), e.writeString(t)) : t.constructor === vh ? (e.writeParentInfo(!1), e.writeLeftID(t)) : gp();
			i !== null && e.writeString(i);
		}
		this.content.write(e, t);
	}
}, tv = (e, t) => nv[t & 31](e), nv = [
	() => {
		gp();
	},
	E_,
	P_,
	w_,
	z_,
	j_,
	M_,
	Y_,
	L_,
	k_,
	() => {
		gp();
	}
], rv = 10, iv = class extends b_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor && (this.length += e.length, !0);
	}
	integrate(e, t) {
		gp();
	}
	write(e, t) {
		e.writeInfo(rv), W(e.restEncoder, this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, av = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}, ov = "__ $YJS$ __";
av[ov] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), av[ov] = !0;
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/mutex.js
var sv = () => {
	let e = !0;
	return (t, n) => {
		if (e) {
			e = !1;
			try {
				t();
			} finally {
				e = !0;
			}
		} else n !== void 0 && n();
	};
}, cv = /[\uD800-\uDBFF]/, lv = /[\uDC00-\uDFFF]/, uv = (e, t) => {
	let n = 0, r = 0;
	for (; n < e.length && n < t.length && e[n] === t[n];) n++;
	for (n > 0 && cv.test(e[n - 1]) && n--; r + n < e.length && r + n < t.length && e[e.length - r - 1] === t[t.length - r - 1];) r++;
	return r > 0 && lv.test(e[e.length - r]) && r--, {
		index: n,
		remove: e.length - n - r,
		insert: t.slice(n, t.length - r)
	};
}, $ = new Tr("y-sync"), dv = new Tr("y-undo");
new Tr("yjs-cursor");
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/hash/sha256.js
var fv = (e, t) => e >>> t | e << 32 - t, pv = (e) => fv(e, 2) ^ fv(e, 13) ^ fv(e, 22), mv = (e) => fv(e, 6) ^ fv(e, 11) ^ fv(e, 25), hv = (e) => fv(e, 7) ^ fv(e, 18) ^ e >>> 3, gv = (e) => fv(e, 17) ^ fv(e, 19) ^ e >>> 10, _v = new Uint32Array([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), vv = new Uint32Array([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), yv = class {
	constructor() {
		let e = /* @__PURE__ */ new ArrayBuffer(320);
		this._H = new Uint32Array(e, 0, 8), this._H.set(vv), this._W = new Uint32Array(e, 64, 64);
	}
	_updateHash() {
		let e = this._H, t = this._W;
		for (let e = 16; e < 64; e++) t[e] = gv(t[e - 2]) + t[e - 7] + hv(t[e - 15]) + t[e - 16];
		let n = e[0], r = e[1], i = e[2], a = e[3], o = e[4], s = e[5], c = e[6], l = e[7];
		for (let e = 0, u, d; e < 64; e++) u = l + mv(o) + (o & s ^ ~o & c) + _v[e] + t[e] >>> 0, d = pv(n) + (n & r ^ n & i ^ r & i) >>> 0, l = c, c = s, s = o, o = a + u >>> 0, a = i, i = r, r = n, n = u + d >>> 0;
		e[0] += n, e[1] += r, e[2] += i, e[3] += a, e[4] += o, e[5] += s, e[6] += c, e[7] += l;
	}
	digest(e) {
		let t = 0;
		for (; t + 56 <= e.length;) {
			let n = 0;
			for (; n < 16 && t + 3 < e.length; n++) this._W[n] = e[t++] << 24 | e[t++] << 16 | e[t++] << 8 | e[t++];
			if (t % 64 != 0) {
				for (this._W.fill(0, n, 16); t < e.length;) this._W[n] |= e[t] << (3 - t % 4) * 8, t++;
				this._W[n] |= 128 << (3 - t % 4) * 8;
			}
			this._updateHash();
		}
		let n = t % 64 != 0;
		this._W.fill(0, 0, 16);
		let r = 0;
		for (; t < e.length; r++) for (let n = 3; n >= 0 && t < e.length; n--) this._W[r] |= e[t++] << n * 8;
		n || (this._W[r - (t % 4 == 0 ? 0 : 1)] |= 128 << (3 - t % 4) * 8), this._W[14] = e.byteLength / kf, this._W[15] = e.byteLength * 8, this._updateHash();
		let i = /* @__PURE__ */ new Uint8Array(32);
		for (let e = 0; e < this._H.length; e++) for (let t = 0; t < 4; t++) i[e * 4 + t] = this._H[e] >>> (3 - t) * 8;
		return i;
	}
}, bv = (e) => new yv().digest(e), xv = (e) => {
	for (let t = 6; t < e.length; t++) e[t % 6] = e[t % 6] ^ e[t];
	return e.slice(0, 6);
}, Sv = (e) => fm(xv(bv(pm(e)))), Cv = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && t.sv.get(e.id.client) > e.id.clock && !Um(t.ds, e.id), wv = [{
	light: "#ecd44433",
	dark: "#ecd444"
}], Tv = (e, t, n) => {
	if (!e.has(n)) {
		if (e.size < t.length) {
			let n = _f();
			e.forEach((e) => n.add(e)), t = t.filter((e) => !n.has(e));
		}
		e.set(n, Lp(t));
	}
	return e.get(n);
}, Ev = (e, { colors: t = wv, colorMapping: n = /* @__PURE__ */ new Map(), permanentUserData: r = null, onFirstRender: i = () => {}, mapping: a } = {}) => {
	let o = !1, s = new kv(e, a), c = new xr({
		props: { editable: (e) => {
			let t = $.getState(e);
			return t.snapshot == null && t.prevSnapshot == null;
		} },
		key: $,
		state: {
			init: (i, a) => ({
				type: e,
				doc: e.doc,
				binding: s,
				snapshot: null,
				prevSnapshot: null,
				isChangeOrigin: !1,
				isUndoRedoOperation: !1,
				addToHistory: !0,
				colors: t,
				colorMapping: n,
				permanentUserData: r
			}),
			apply: (e, t) => {
				let n = e.getMeta($);
				if (n !== void 0) {
					t = Object.assign({}, t);
					for (let e in n) t[e] = n[e];
				}
				return t.addToHistory = e.getMeta("addToHistory") !== !1, t.isChangeOrigin = n !== void 0 && !!n.isChangeOrigin, t.isUndoRedoOperation = n !== void 0 && !!n.isChangeOrigin && !!n.isUndoRedoOperation, s.prosemirrorView !== null && n !== void 0 && (n.snapshot != null || n.prevSnapshot != null) && ym(0, () => {
					s.prosemirrorView != null && (n.restore == null ? s._renderSnapshot(n.snapshot, n.prevSnapshot, t) : (s._renderSnapshot(n.snapshot, n.snapshot, t), delete t.restore, delete t.snapshot, delete t.prevSnapshot, s.mux(() => {
						s._prosemirrorChanged(s.prosemirrorView.state.doc);
					})));
				}), t;
			}
		},
		view: (e) => (s.initView(e), a ?? s._forceRerender(), i(), {
			update: () => {
				let t = c.getState(e.state);
				if (t.snapshot == null && t.prevSnapshot == null && (o || e.state.doc.content.findDiffStart(e.state.doc.type.createAndFill().content) !== null)) {
					if (o = !0, t.addToHistory === !1 && !t.isChangeOrigin) {
						let t = dv.getState(e.state), n = t && t.undoManager;
						n && n.stopCapturing();
					}
					s.mux(() => {
						t.doc.transact((n) => {
							n.meta.set("addToHistory", t.addToHistory), s._prosemirrorChanged(e.state.doc);
						}, $);
					});
				}
			},
			destroy: () => {
				s.destroy();
			}
		})
	});
	return c;
}, Dv = (e, t, n) => {
	if (t !== null && t.anchor !== null && t.head !== null) {
		if (t.type === "all") e.setSelection(new mr(e.doc));
		else if (t.type === "node") {
			let r = $v(n.doc, n.type, t.anchor, n.mapping);
			e.setSelection(or.create(e.doc, r));
		} else {
			let r = $v(n.doc, n.type, t.anchor, n.mapping), i = $v(n.doc, n.type, t.head, n.mapping);
			if (r !== null && i !== null) {
				let t = Dr.between(e.doc.resolve(r), e.doc.resolve(i));
				e.setSelection(t);
			}
		}
	}
}, Ov = (e, t) => ({
	type: t.selection.jsonID,
	anchor: Zv(t.selection.anchor, e.type, e.mapping),
	head: Zv(t.selection.head, e.type, e.mapping)
}), kv = class {
	constructor(e, t = /* @__PURE__ */ new Map()) {
		this.type = e, this.prosemirrorView = null, this.mux = sv(), this.mapping = t, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
			this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = Ov(this, this.prosemirrorView.state));
		}, this.afterAllTransactions = () => {
			this.beforeTransactionSelection = null;
		}, this._domSelectionInView = null;
	}
	get _tr() {
		return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
	}
	_isLocalCursorInView() {
		return this.prosemirrorView.hasFocus() ? (im && this._domSelectionInView === null && (ym(0, () => {
			this._domSelectionInView = null;
		}), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
	}
	_isDomSelectionInView() {
		let e = this.prosemirrorView._root.getSelection();
		if (e == null || e.anchorNode == null) return !1;
		let t = this.prosemirrorView._root.createRange();
		t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset), t.getClientRects().length === 0 && t.startContainer && t.collapsed && t.selectNodeContents(t.startContainer);
		let n = t.getBoundingClientRect(), r = gm.documentElement;
		return n.bottom >= 0 && n.right >= 0 && n.left <= (window.innerWidth || r.clientWidth || 0) && n.top <= (window.innerHeight || r.clientHeight || 0);
	}
	renderSnapshot(e, t) {
		t ||= Ah(qm(), /* @__PURE__ */ new Map()), this.prosemirrorView.dispatch(this._tr.setMeta($, {
			snapshot: e,
			prevSnapshot: t
		}));
	}
	unrenderSnapshot() {
		this.mapping.clear(), this.mux(() => {
			let e = this.type.toArray().map((e) => jv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), t = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new yr(lr.from(e), 0, 0));
			t.setMeta($, {
				snapshot: null,
				prevSnapshot: null
			}), this.prosemirrorView.dispatch(t);
		});
	}
	_forceRerender() {
		this.mapping.clear(), this.mux(() => {
			let e = this.beforeTransactionSelection === null ? this.prosemirrorView.state.selection : null, t = this.type.toArray().map((e) => jv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), n = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new yr(lr.from(t), 0, 0));
			if (e) {
				let t = Ef(Df(e.anchor, 0), n.doc.content.size), r = Ef(Df(e.head, 0), n.doc.content.size);
				n.setSelection(Dr.create(n.doc, t, r));
			}
			this.prosemirrorView.dispatch(n.setMeta($, {
				isChangeOrigin: !0,
				binding: this
			}));
		});
	}
	_renderSnapshot(e, t, n) {
		let r = this.doc, i = this.type;
		if (e ||= jh(this.doc), e instanceof Uint8Array || t instanceof Uint8Array) {
			if ((!(e instanceof Uint8Array) || !(t instanceof Uint8Array)) && gp(), r = new $m({ gc: !1 }), fh(r, t), t = jh(r), fh(r, e), e = jh(r), i._item === null) {
				let e = Array.from(this.doc.share.keys()).find((e) => this.doc.share.get(e) === this.type);
				i = r.getXmlFragment(e);
			} else {
				let e = r.store.clients.get(i._item.id.client) ?? [];
				i = e[Lh(e, i._item.id.clock)].content.type;
			}
		}
		this.mapping.clear(), this.mux(() => {
			r.transact((r) => {
				let a = n.permanentUserData;
				a && a.dss.forEach((e) => {
					Vm(r, e, (e) => {});
				});
				let o = (e, t) => {
					let r = e === "added" ? a.getUserByClientId(t.client) : a.getUserByDeletedId(t);
					return {
						user: r,
						type: e,
						color: Tv(n.colorMapping, n.colors, r)
					};
				}, s = Cg(i, new kh(t.ds, e.sv)).map((n) => !n._item.deleted || Cv(n._item, e) || Cv(n._item, t) ? jv(n, this.prosemirrorView.state.schema, {
					mapping: /* @__PURE__ */ new Map(),
					isOMark: /* @__PURE__ */ new Map()
				}, e, t, o) : null).filter((e) => e !== null), c = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new yr(lr.from(s), 0, 0));
				this.prosemirrorView.dispatch(c.setMeta($, { isChangeOrigin: !0 }));
			}, $);
		});
	}
	_typeChanged(e, t) {
		if (this.prosemirrorView == null) return;
		let n = $.getState(this.prosemirrorView.state);
		if (e.length === 0 || n.snapshot != null || n.prevSnapshot != null) {
			this.renderSnapshot(n.snapshot, n.prevSnapshot);
			return;
		}
		this.mux(() => {
			let e = (e, t) => this.mapping.delete(t);
			Vm(t, t.deleteSet, (e) => {
				if (e.constructor === Q) {
					let t = e.content.type;
					t && this.mapping.delete(t);
				}
			}), t.changed.forEach(e), t.changedParentTypes.forEach(e);
			let n = this.type.toArray().map((e) => Av(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), r = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new yr(lr.from(n), 0, 0));
			Dv(r, this.beforeTransactionSelection, this), r = r.setMeta($, {
				isChangeOrigin: !0,
				isUndoRedoOperation: t.origin instanceof eg
			}), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && r.scrollIntoView(), this.prosemirrorView.dispatch(r);
		});
	}
	_prosemirrorChanged(e) {
		this.doc.transact(() => {
			Yv(this.doc, this.type, e, this), this.beforeTransactionSelection = Ov(this, this.prosemirrorView.state);
		}, $);
	}
	initView(e) {
		this.prosemirrorView != null && this.destroy(), this.prosemirrorView = e, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
	}
	destroy() {
		this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
	}
}, Av = (e, t, n, r, i, a) => {
	let o = n.mapping.get(e);
	if (o === void 0) {
		if (e instanceof p_) return jv(e, t, n, r, i, a);
		throw hp();
	}
	return o;
}, jv = (e, t, n, r, i, a) => {
	let o = [], s = (e) => {
		if (e instanceof p_) {
			let s = Av(e, t, n, r, i, a);
			s !== null && o.push(s);
		} else {
			let s = e._item.right?.content?.type;
			s instanceof c_ && !s._item.deleted && s._item.id.client === s.doc.clientID && (e.applyDelta([{ retain: e.length }, ...s.toDelta()]), s.doc.transact((e) => {
				s._item.delete(e);
			}));
			let c = Mv(e, t, n, r, i, a);
			c !== null && c.forEach((e) => {
				e !== null && o.push(e);
			});
		}
	};
	r === void 0 || i === void 0 ? e.toArray().forEach(s) : Cg(e, new kh(i.ds, r.sv)).forEach(s);
	try {
		let s = e.getAttributes(r);
		r !== void 0 && (Cv(e._item, r) ? Cv(e._item, i) || (s.ychange = a ? a("added", e._item.id) : { type: "added" }) : s.ychange = a ? a("removed", e._item.id) : { type: "removed" });
		let c = t.node(e.nodeName, s, o);
		return n.mapping.set(e, c), c;
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, $), n.mapping.delete(e), null;
	}
}, Mv = (e, t, n, r, i, a) => {
	let o = [], s = e.toDelta(r, i, a);
	try {
		for (let e = 0; e < s.length; e++) {
			let n = s[e];
			o.push(t.text(n.insert, qv(n.attributes, t)));
		}
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, $), null;
	}
	return o;
}, Nv = (e, t) => {
	let n = new v_(), r = e.map((e) => ({
		insert: e.text,
		attributes: Jv(e.marks, t)
	}));
	return n.applyDelta(r), t.mapping.set(n, e), n;
}, Pv = (e, t) => {
	let n = new p_(e.type.name);
	for (let t in e.attrs) {
		let r = e.attrs[t];
		r !== null && t !== "ychange" && n.setAttribute(t, r);
	}
	return n.insert(0, Rv(e).map((e) => Fv(e, t))), t.mapping.set(n, e), n;
}, Fv = (e, t) => e instanceof Array ? Nv(e, t) : Pv(e, t), Iv = (e) => typeof e == "object" && !!e, Lv = (e, t) => {
	let n = Object.keys(e).filter((t) => e[t] !== null), r = n.length === (t == null ? 0 : Object.keys(t).filter((e) => t[e] !== null).length);
	for (let i = 0; i < n.length && r; i++) {
		let a = n[i], o = e[a], s = t[a];
		r = a === "ychange" || o === s || Iv(o) && Iv(s) && Lv(o, s);
	}
	return r;
}, Rv = (e) => {
	let t = e.content.content, n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r.isText) {
			let r = [];
			for (let n = t[e]; e < t.length && n.isText; n = t[++e]) r.push(n);
			e--, n.push(r);
		} else n.push(r);
	}
	return n;
}, zv = (e, t) => {
	let n = e.toDelta();
	return n.length === t.length && n.every((e, n) => e.insert === t[n].text && Kp(e.attributes || {}).length === t[n].marks.length && Xp(e.attributes, (e, r) => {
		let i = Kv(r), a = t[n].marks;
		return Lv(e, a.find((e) => e.type.name === i)?.attrs);
	}));
}, Bv = (e, t) => {
	if (e instanceof p_ && !(t instanceof Array) && Xv(e, t)) {
		let n = Rv(t);
		return e._length === n.length && Lv(e.getAttributes(), t.attrs) && e.toArray().every((e, t) => Bv(e, n[t]));
	}
	return e instanceof v_ && t instanceof Array && zv(e, t);
}, Vv = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every((e, n) => t[n] === e), Hv = (e, t, n) => {
	let r = e.toArray(), i = Rv(t), a = i.length, o = r.length, s = Ef(o, a), c = 0, l = 0, u = !1;
	for (; c < s; c++) {
		let e = r[c], t = i[c];
		if (Vv(n.mapping.get(e), t)) u = !0;
		else if (!Bv(e, t)) break;
	}
	for (; c + l < s; l++) {
		let e = r[o - l - 1], t = i[a - l - 1];
		if (Vv(n.mapping.get(e), t)) u = !0;
		else if (!Bv(e, t)) break;
	}
	return {
		equalityFactor: c + l,
		foundMappedChild: u
	};
}, Uv = (e) => {
	let t = "", n = e._start, r = {};
	for (; n !== null;) n.deleted || (n.countable && n.content instanceof R_ ? t += n.content.str : n.content instanceof Z && (r[n.content.key] = null)), n = n.right;
	return {
		str: t,
		nAttrs: r
	};
}, Wv = (e, t, n) => {
	n.mapping.set(e, t);
	let { nAttrs: r, str: i } = Uv(e), a = t.map((e) => ({
		insert: e.text,
		attributes: Object.assign({}, r, Jv(e.marks, n))
	})), { insert: o, remove: s, index: c } = uv(i, a.map((e) => e.insert).join(""));
	e.delete(c, s), e.insert(c, o), e.applyDelta(a.map((e) => ({
		retain: e.insert.length,
		attributes: e.attributes
	})));
}, Gv = /(.*)(--[a-zA-Z0-9+/=]{8})$/, Kv = (e) => Gv.exec(e)?.[1] ?? e, qv = (e, t) => {
	let n = [];
	for (let r in e) n.push(t.mark(Kv(r), e[r]));
	return n;
}, Jv = (e, t) => {
	let n = {};
	return e.forEach((e) => {
		if (e.type.name !== "ychange") {
			let r = mf(t.isOMark, e.type, () => !e.type.excludes(e.type));
			n[r ? `${e.type.name}--${Sv(e.toJSON())}` : e.type.name] = e.attrs;
		}
	}), n;
}, Yv = (e, t, n, r) => {
	if (t instanceof p_ && t.nodeName !== n.type.name) throw Error("node name mismatch!");
	if (r.mapping.set(t, n), t instanceof p_) {
		let e = t.getAttributes(), r = n.attrs;
		for (let n in r) r[n] === null ? t.removeAttribute(n) : e[n] !== r[n] && n !== "ychange" && t.setAttribute(n, r[n]);
		for (let n in e) r[n] === void 0 && t.removeAttribute(n);
	}
	let i = Rv(n), a = i.length, o = t.toArray(), s = o.length, c = Ef(a, s), l = 0, u = 0;
	for (; l < c; l++) {
		let e = o[l], t = i[l];
		if (!Vv(r.mapping.get(e), t)) {
			if (Bv(e, t)) r.mapping.set(e, t);
			else break;
		}
	}
	for (; u + l + 1 < c; u++) {
		let e = o[s - u - 1], t = i[a - u - 1];
		if (!Vv(r.mapping.get(e), t)) {
			if (Bv(e, t)) r.mapping.set(e, t);
			else break;
		}
	}
	e.transact(() => {
		for (; s - l - u > 0 && a - l - u > 0;) {
			let n = o[l], c = i[l], d = o[s - u - 1], f = i[a - u - 1];
			if (n instanceof v_ && c instanceof Array) zv(n, c) || Wv(n, c, r), l += 1;
			else {
				let i = n instanceof p_ && Xv(n, c), a = d instanceof p_ && Xv(d, f);
				if (i && a) {
					let e = Hv(n, c, r), t = Hv(d, f, r);
					e.foundMappedChild && !t.foundMappedChild ? a = !1 : !e.foundMappedChild && t.foundMappedChild || e.equalityFactor < t.equalityFactor ? i = !1 : a = !1;
				}
				i ? (Yv(e, n, c, r), l += 1) : a ? (Yv(e, d, f, r), u += 1) : (r.mapping.delete(t.get(l)), t.delete(l, 1), t.insert(l, [Fv(c, r)]), l += 1);
			}
		}
		let n = s - l - u;
		if (s === 1 && a === 0 && o[0] instanceof v_ ? (r.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : n > 0 && (t.slice(l, l + n).forEach((e) => r.mapping.delete(e)), t.delete(l, n)), l + u < a) {
			let e = [];
			for (let t = l; t < a - u; t++) e.push(Fv(i[t], r));
			t.insert(l, e);
		}
	}, $);
}, Xv = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, Zv = (e, t, n) => {
	if (e === 0) return Eh(t, 0, t.length === 0 ? -1 : 0);
	let r = t._first === null ? null : t._first.content.type;
	for (; r !== null && t !== r;) {
		if (r instanceof v_) {
			if (r._length >= e) return Eh(r, e, t.length === 0 ? -1 : 0);
			if (e -= r._length, r._item !== null && r._item.next !== null) r = r._item.next.content.type;
			else {
				do
					r = r._item === null ? null : r._item.parent, e--;
				while (r !== t && r !== null && r._item !== null && r._item.next === null);
				r !== null && r !== t && (r = r._item === null ? null : r._item.next.content.type);
			}
		} else {
			let i = (n.get(r) || { nodeSize: 0 }).nodeSize;
			if (r._first !== null && e < i) r = r._first.content.type, e--;
			else {
				if (e === 1 && r._length === 0 && i > 1) return new Sh(r._item === null ? null : r._item.id, r._item === null ? bh(r) : null, null);
				if (e -= i, r._item !== null && r._item.next !== null) r = r._item.next.content.type;
				else {
					if (e === 0) return r = r._item === null ? r : r._item.parent, new Sh(r._item === null ? null : r._item.id, r._item === null ? bh(r) : null, null);
					do
						r = r._item.parent, e--;
					while (r !== t && r._item.next === null);
					r !== t && (r = r._item.next.content.type);
				}
			}
		}
		if (r === null) throw gp();
		if (e === 0 && r.constructor !== v_ && r !== t) return Qv(r._item.parent, r._item);
	}
	return Eh(t, t._length, t.length === 0 ? -1 : 0);
}, Qv = (e, t) => {
	let n = null, r = null;
	return e._item === null ? r = bh(e) : n = K(e._item.id.client, e._item.id.clock), new Sh(n, r, t.id);
}, $v = (e, t, n, r) => {
	let i = Oh(n, e);
	if (i === null || i.type !== t && !xh(t, i.type._item)) return null;
	let a = i.type, o = 0;
	if (a.constructor === v_) o = i.index;
	else if (a._item === null || !a._item.deleted) {
		let e = a._first, t = 0;
		for (; t < a._length && t < i.index && e !== null;) {
			if (!e.deleted) {
				let n = e.content.type;
				t++, n instanceof v_ ? o += n._length : o += r.get(n).nodeSize;
			}
			e = e.right;
		}
		o += 1;
	}
	for (; a !== t && a._item !== null;) {
		let e = a._item.parent;
		if (e._item === null || !e._item.deleted) {
			o += 1;
			let t = e._first;
			for (; t !== null;) {
				let e = t.content.type;
				if (e === a) break;
				t.deleted || (e instanceof v_ ? o += e._length : o += r.get(e).nodeSize), t = t.right;
			}
		}
		a = e;
	}
	return o - 1;
};
function ey(e) {
	let t = e.toArray(), n = (e) => {
		let t;
		if (e instanceof v_) t = e.toDelta().map((e) => {
			let t = {
				type: "text",
				text: e.insert
			};
			return e.attributes && (t.marks = Object.keys(e.attributes).map((t) => {
				let n = e.attributes[t], r = { type: Kv(t) };
				return Object.keys(n) && (r.attrs = n), r;
			})), t;
		});
		else if (e instanceof p_) {
			t = { type: e.nodeName };
			let r = e.getAttributes();
			Object.keys(r).length && (t.attrs = r);
			let i = e.toArray();
			i.length && (t.content = i.map(n).flat());
		} else gp();
		return t;
	};
	return {
		type: "doc",
		content: t.map(n)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/y-prosemirror@1.3.6_prosemirror-model@1.25.0_prosemirror-state@1.4.3_prosemirror-view@1_31ec72f916c667df313c22d35cf8a5eb/node_modules/y-prosemirror/src/plugins/undo-plugin.js
var ty = (e) => dv.getState(e)?.undoManager?.undo() != null, ny = (e) => dv.getState(e)?.undoManager?.redo() != null, ry = /* @__PURE__ */ new Set(["paragraph"]), iy = (e, t) => !(e instanceof Q) || !(e.content instanceof J_) || !(e.content.type instanceof c_ || e.content.type instanceof p_ && t.has(e.content.type.nodeName)) || e.content.type._length === 0, ay = ({ protectedNodes: e = ry, trackedOrigins: t = [], undoManager: n = null } = {}) => new xr({
	key: dv,
	state: {
		init: (r, i) => {
			let a = $.getState(i), o = n || new eg(a.type, {
				trackedOrigins: new Set([$].concat(t)),
				deleteFilter: (t) => iy(t, e),
				captureTransaction: (e) => e.meta.get("addToHistory") !== !1
			});
			return {
				undoManager: o,
				prevSel: null,
				hasUndoOps: o.undoStack.length > 0,
				hasRedoOps: o.redoStack.length > 0
			};
		},
		apply: (e, t, n, r) => {
			let i = $.getState(r).binding, a = t.undoManager, o = a.undoStack.length > 0, s = a.redoStack.length > 0;
			return i ? {
				undoManager: a,
				prevSel: Ov(i, n),
				hasUndoOps: o,
				hasRedoOps: s
			} : o !== t.hasUndoOps || s !== t.hasRedoOps ? Object.assign({}, t, {
				hasUndoOps: a.undoStack.length > 0,
				hasRedoOps: a.redoStack.length > 0
			}) : t;
		}
	},
	view: (e) => {
		let t = $.getState(e.state), n = dv.getState(e.state).undoManager;
		return n.on("stack-item-added", ({ stackItem: n }) => {
			let r = t.binding;
			r && n.meta.set(r, dv.getState(e.state).prevSel);
		}), n.on("stack-item-popped", ({ stackItem: e }) => {
			let n = t.binding;
			n && (n.beforeTransactionSelection = e.meta.get(n) || n.beforeTransactionSelection);
		}), { destroy: () => {
			n.destroy();
		} };
	}
});
nr.create({
	name: "collaboration",
	priority: 1e3,
	addOptions() {
		return {
			document: null,
			field: "default",
			fragment: null
		};
	},
	addStorage() {
		return { isDisabled: !1 };
	},
	onCreate() {
		this.editor.extensionManager.extensions.find((e) => e.name === "history") && console.warn("[tiptap warn]: \"@tiptap/extension-collaboration\" comes with its own history support and is not compatible with \"@tiptap/extension-history\".");
	},
	addCommands() {
		return {
			undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), dv.getState(t).undoManager.undoStack.length === 0 ? !1 : !n || ty(t)),
			redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), dv.getState(t).undoManager.redoStack.length === 0 ? !1 : !n || ny(t))
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-z": () => this.editor.commands.undo(),
			"Mod-y": () => this.editor.commands.redo(),
			"Shift-Mod-z": () => this.editor.commands.redo()
		};
	},
	addProseMirrorPlugins() {
		var e;
		let t = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = ay(this.options.yUndoOptions), r = n.spec.view;
		n.spec.view = (e) => {
			let { undoManager: t } = dv.getState(e.state);
			t.restore &&= (t.restore(), () => {});
			let n = r ? r(e) : void 0;
			return { destroy: () => {
				let e = t.trackedOrigins.has(t), r = t._observers;
				t.restore = () => {
					e && t.trackedOrigins.add(t), t.doc.on("afterTransaction", t.afterTransactionHandler), t._observers = r;
				}, n?.destroy && n.destroy();
			} };
		};
		let i = Ev(t, {
			...this.options.ySyncOptions,
			onFirstRender: this.options.onFirstRender
		});
		return this.editor.options.enableContentCheck && ((e = t.doc) == null || e.on("beforeTransaction", () => {
			try {
				let e = ey(t);
				if (e.content.length === 0) return;
				this.editor.schema.nodeFromJSON(e).check();
			} catch (e) {
				return this.editor.emit("contentError", {
					error: e,
					editor: this.editor,
					disableCollaboration: () => {
						var e;
						(e = t.doc) == null || e.destroy(), this.storage.isDisabled = !0;
					}
				}), !1;
			}
		})), [
			i,
			n,
			this.editor.options.enableContentCheck && new xr({
				key: new Tr("filterInvalidContent"),
				filterTransaction: () => {
					var e;
					return this.storage.isDisabled && ((e = t.doc) == null || e.destroy()), !0;
				}
			})
		].filter(Boolean);
	}
});
function oy(e) {
	return !!e.getMeta($);
}
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-node-range@2.24.0_@tiptap+core@2.24.0_@tiptap+pm@2.24.0__@tiptap+pm@2.24.0/node_modules/@tiptap/extension-node-range/dist/index.js
function sy(e) {
	if (!e.length) return wr.empty;
	let t = [], n = e[0].$from.node(0);
	return e.forEach((e) => {
		let n = e.$from.pos, r = e.$from.nodeAfter;
		r && t.push(br.node(n, n + r.nodeSize, { class: "ProseMirror-selectednoderange" }));
	}), wr.create(n, t);
}
function cy(e, t, n) {
	let r = [], i = e.node(0);
	n = typeof n == "number" && n >= 0 ? n : e.sameParent(t) ? Math.max(0, e.sharedDepth(t.pos) - 1) : e.sharedDepth(t.pos);
	let a = new Sr(e, t, n), o = a.depth === 0 ? 0 : i.resolve(a.start).posAtIndex(0);
	return a.parent.forEach((e, t) => {
		let n = o + t, s = n + e.nodeSize;
		if (n < a.start || n >= a.end) return;
		let c = new _r(i.resolve(n), i.resolve(s));
		r.push(c);
	}), r;
}
var ly = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		return new uy(e.resolve(this.anchor), e.resolve(this.head));
	}
}, uy = class e extends cr {
	constructor(e, t, n, r = 1) {
		let { doc: i } = e, a = e === t, o = e.pos === i.content.size && t.pos === i.content.size, s = a && !o ? i.resolve(t.pos + (r > 0 ? 1 : -1)) : t, c = a && o ? i.resolve(e.pos - (r > 0 ? 1 : -1)) : e, l = cy(c.min(s), c.max(s), n), u = s.pos >= e.pos ? l[0].$from : l[l.length - 1].$to, d = s.pos >= e.pos ? l[l.length - 1].$to : l[0].$from;
		super(u, d, l), this.depth = n;
	}
	get $to() {
		return this.ranges[this.ranges.length - 1].$to;
	}
	eq(t) {
		return t instanceof e && t.$from.pos === this.$from.pos && t.$to.pos === this.$to.pos;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.anchor)), i = t.resolve(n.map(this.head));
		return new e(r, i);
	}
	toJSON() {
		return {
			type: "nodeRange",
			anchor: this.anchor,
			head: this.head
		};
	}
	get isForwards() {
		return this.head >= this.anchor;
	}
	get isBackwards() {
		return !this.isForwards;
	}
	extendBackwards() {
		let { doc: t } = this.$from;
		if (this.isForwards && this.ranges.length > 1) {
			let t = this.ranges.slice(0, -1), n = t[0].$from, r = t[t.length - 1].$to;
			return new e(n, r, this.depth);
		}
		let n = this.ranges[0], r = t.resolve(Math.max(0, n.$from.pos - 1));
		return new e(this.$anchor, r, this.depth);
	}
	extendForwards() {
		let { doc: t } = this.$from;
		if (this.isBackwards && this.ranges.length > 1) {
			let t = this.ranges.slice(1), n = t[0].$from, r = t[t.length - 1].$to;
			return new e(r, n, this.depth);
		}
		let n = this.ranges[this.ranges.length - 1], r = t.resolve(Math.min(t.content.size, n.$to.pos + 1));
		return new e(this.$anchor, r, this.depth);
	}
	static fromJSON(t, n) {
		return new e(t.resolve(n.anchor), t.resolve(n.head));
	}
	static create(e, t, n, r, i = 1) {
		return new this(e.resolve(t), e.resolve(n), r, i);
	}
	getBookmark() {
		return new ly(this.anchor, this.head);
	}
};
uy.prototype.visible = !1;
function dy(e) {
	return e instanceof uy;
}
nr.create({
	name: "nodeRange",
	addOptions() {
		return {
			depth: void 0,
			key: "Mod"
		};
	},
	addKeyboardShortcuts() {
		return {
			"Shift-ArrowUp": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, selection: a, tr: o } = r, { anchor: s, head: c } = a;
				if (!dy(a)) {
					let e = uy.create(i, s, c, t, -1);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendBackwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Shift-ArrowDown": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, selection: a, tr: o } = r, { anchor: s, head: c } = a;
				if (!dy(a)) {
					let e = uy.create(i, s, c, t);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendForwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Mod-a": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, tr: a } = r, o = uy.create(i, 0, i.content.size, t);
				return a.setSelection(o), n.dispatch(a), !0;
			}
		};
	},
	onSelectionUpdate() {
		let { selection: e } = this.editor.state;
		dy(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
	},
	addProseMirrorPlugins() {
		let e = !1, t = !1;
		return [new xr({
			key: new Tr("nodeRange"),
			props: {
				attributes: () => e ? { class: "ProseMirror-noderangeselection" } : { class: "" },
				handleDOMEvents: { mousedown: (e, n) => {
					let { key: r } = this.options, i = /Mac/.test(navigator.platform), a = !!n.shiftKey, o = !!n.ctrlKey, s = !!n.altKey, c = !!n.metaKey;
					return (r == null || r === "Shift" && a || r === "Control" && o || r === "Alt" && s || r === "Meta" && c || r === "Mod" && (i ? c : o)) && (t = !0), t && document.addEventListener("mouseup", () => {
						t = !1;
						let { state: n } = e, { doc: r, selection: i, tr: a } = n, { $anchor: o, $head: s } = i;
						if (o.sameParent(s)) return;
						let c = uy.create(r, o.pos, s.pos, this.options.depth);
						a.setSelection(c), e.dispatch(a);
					}, { once: !0 }), !1;
				} },
				decorations: (n) => {
					let { selection: r } = n, i = dy(r);
					if (e = !1, !t) return i ? (e = !0, sy(r.ranges)) : null;
					let { $from: a, $to: o } = r;
					if (!i && a.sameParent(o)) return null;
					let s = cy(a, o, this.options.depth);
					return s.length ? (e = !0, sy(s)) : null;
				}
			}
		})];
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-drag-handle@2.24.0_@tiptap+core@2.24.0_@tiptap+pm@2.24.0__@tiptap+ext_234d04dbcc52d64c161f06b2d04b0cdb/node_modules/@tiptap/extension-drag-handle/dist/index.js
function fy(e) {
	let t = "", n = getComputedStyle(e);
	for (let e = 0; e < n.length; e += 1) t += `${n[e]}:${n.getPropertyValue(n[e])};`;
	return t;
}
function py(e) {
	let t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], r = [t, ...Array.from(t.getElementsByTagName("*"))];
	return n.forEach((e, t) => {
		r[t].style.cssText = fy(e);
	}), t;
}
var my = (e) => {
	let { x: t, y: n, direction: r, editor: i } = e, a = null, o = null, s = null, c = t;
	for (; o === null && c < window.innerWidth && c > 0;) {
		let e = document.elementsFromPoint(c, n), t = e.findIndex((e) => e.classList.contains("ProseMirror")), l = e.slice(0, t);
		if (l.length > 0) {
			let e = l[0];
			if (a = e, s = i.view.posAtDOM(e, 0), s >= 0) {
				o = i.state.doc.nodeAt(Math.max(s - 1, 0)), o?.isText && (o = i.state.doc.nodeAt(Math.max(s - 1, 0))), o ||= i.state.doc.nodeAt(Math.max(s, 0));
				break;
			}
		}
		r === "left" ? --c : c += 1;
	}
	return {
		resultElement: a,
		resultNode: o,
		pos: s ?? null
	};
};
function hy(e, t) {
	return window.getComputedStyle(e)[t];
}
function gy(e = 0, t = 0, n = 0) {
	return Math.min(Math.max(e, t), n);
}
function _y(e, t, n) {
	let r = parseInt(hy(e.dom, "paddingLeft"), 10), i = parseInt(hy(e.dom, "paddingRight"), 10), a = parseInt(hy(e.dom, "borderLeftWidth"), 10), o = parseInt(hy(e.dom, "borderLeftWidth"), 10), s = e.dom.getBoundingClientRect();
	return {
		left: gy(t, s.left + r + a, s.right - i - o),
		top: n
	};
}
function vy(e) {
	var t;
	(t = e.parentNode) == null || t.removeChild(e);
}
function yy(e, t) {
	let { doc: n } = t.view.state, r = my({
		editor: t,
		x: e.clientX,
		y: e.clientY,
		direction: "right"
	});
	if (!r.resultNode || r.pos === null) return [];
	let i = e.clientX, a = _y(t.view, i, e.clientY), o = t.view.posAtCoords(a);
	if (!o) return [];
	let { pos: s } = o;
	return n.resolve(s).parent ? cy(n.resolve(r.pos), n.resolve(r.pos + 1), 0) : [];
}
function by(e, t) {
	let { view: n } = t;
	if (!e.dataTransfer) return;
	let { empty: r, $from: i, $to: a } = n.state.selection, o = yy(e, t), s = cy(i, a, 0), c = s.some((e) => o.find((t) => t.$from === e.$from && t.$to === e.$to)), l = r || !c ? o : s;
	if (!l.length) return;
	let { tr: u } = n.state, d = document.createElement("div"), f = l[0].$from.pos, p = l[l.length - 1].$to.pos, m = uy.create(n.state.doc, f, p), h = m.content();
	l.forEach((e) => {
		let t = py(n.nodeDOM(e.$from.pos));
		d.append(t);
	}), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), e.dataTransfer.clearData(), e.dataTransfer.setDragImage(d, 0, 0), n.dragging = {
		slice: h,
		move: !0
	}, u.setSelection(m), n.dispatch(u), document.addEventListener("drop", () => vy(d), { once: !0 });
}
var xy = (e, t) => {
	let n = e.resolve(t), { depth: r } = n;
	return r === 0 ? t : n.pos - n.parentOffset - 1;
}, Sy = (e, t) => {
	let n = e.nodeAt(t), r = e.resolve(t), { depth: i } = r, a = n;
	for (; i > 0;) {
		let e = r.node(i);
		--i, i === 0 && (a = e);
	}
	return a;
}, Cy = (e, t) => {
	let n = $.getState(e);
	return n ? Zv(t, n.type, n.binding.mapping) : null;
}, wy = (e, t) => {
	let n = $.getState(e);
	return n ? $v(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, Ty = (e, t) => {
	let n = t;
	for (; n && n.parentNode && n.parentNode !== e.dom;) n = n.parentNode;
	return n;
}, Ey = new Tr("dragHandle"), Dy = ({ pluginKey: e = Ey, element: t, editor: n, tippyOptions: r, onNodeChange: i }) => {
	let a = document.createElement("div"), o = null, s = !1, c = null, l = -1, u;
	return t.addEventListener("dragstart", (e) => {
		by(e, n), setTimeout(() => {
			t && (t.style.pointerEvents = "none");
		}, 0);
	}), t.addEventListener("dragend", () => {
		t && (t.style.pointerEvents = "auto");
	}), new xr({
		key: typeof e == "string" ? new Tr(e) : e,
		state: {
			init() {
				return { locked: !1 };
			},
			apply(e, r, a, d) {
				let f = e.getMeta("lockDragHandle"), p = e.getMeta("hideDragHandle");
				if (f !== void 0 && (s = f), p && o) return o.hide(), s = !1, c = null, l = -1, i?.({
					editor: n,
					node: null,
					pos: -1
				}), r;
				if (e.docChanged && l !== -1 && t && o) {
					if (oy(e)) {
						let e = wy(d, u);
						e !== l && (l = e);
					} else {
						let t = e.mapping.map(l);
						t !== l && (l = t, u = Cy(d, l));
					}
				}
				return r;
			}
		},
		view: (e) => {
			var d;
			return t.draggable = !0, t.style.pointerEvents = "auto", (d = n.view.dom.parentElement) == null || d.appendChild(a), a.appendChild(t), a.style.pointerEvents = "none", a.style.position = "absolute", a.style.top = "0", a.style.left = "0", {
				update(d, f) {
					if (!t) return;
					if (!n.isEditable) {
						o?.destroy(), o = null;
						return;
					}
					if (o ||= rr(e.dom, {
						getReferenceClientRect: null,
						interactive: !0,
						trigger: "manual",
						placement: "left-start",
						hideOnClick: !1,
						duration: 100,
						popperOptions: { modifiers: [{
							name: "flip",
							enabled: !1
						}, {
							name: "preventOverflow",
							options: {
								rootBoundary: "document",
								mainAxis: !1
							}
						}] },
						...r,
						appendTo: a,
						content: t
					}), t.draggable = !s, e.state.doc.eq(f.doc) || l === -1) return;
					let p = e.nodeDOM(l);
					if (p = Ty(e, p), p === e.dom || p?.nodeType !== 1) return;
					let m = e.posAtDOM(p, 0), h = Sy(n.state.doc, m), g = xy(n.state.doc, m);
					c = h, l = g, u = Cy(e.state, l), i?.({
						editor: n,
						node: c,
						pos: l
					}), o.setProps({ getReferenceClientRect: () => p.getBoundingClientRect() });
				},
				destroy() {
					o?.destroy(), t && vy(a);
				}
			};
		},
		props: { handleDOMEvents: {
			mouseleave(e, t) {
				return s || t.target && !a.contains(t.relatedTarget) && (o?.hide(), c = null, l = -1, i?.({
					editor: n,
					node: null,
					pos: -1
				})), !1;
			},
			mousemove(e, r) {
				if (!t || !o || s) return !1;
				let a = my({
					x: r.clientX,
					y: r.clientY,
					direction: "right",
					editor: n
				});
				if (!a.resultElement) return !1;
				let d = a.resultElement;
				if (d = Ty(e, d), d === e.dom || d?.nodeType !== 1) return !1;
				let f = e.posAtDOM(d, 0), p = Sy(n.state.doc, f);
				if (p !== c) {
					let t = xy(n.state.doc, f);
					c = p, l = t, u = Cy(e.state, l), i?.({
						editor: n,
						node: c,
						pos: l
					}), o.setProps({ getReferenceClientRect: () => d.getBoundingClientRect() }), o.show();
				}
				return !1;
			}
		} }
	});
};
nr.create({
	name: "dragHandle",
	addOptions() {
		return {
			render() {
				let e = document.createElement("div");
				return e.classList.add("drag-handle"), e;
			},
			tippyOptions: {},
			locked: !1,
			onNodeChange: () => null
		};
	},
	addCommands() {
		return {
			lockDragHandle: () => ({ editor: e }) => (this.options.locked = !0, e.commands.setMeta("lockDragHandle", this.options.locked)),
			unlockDragHandle: () => ({ editor: e }) => (this.options.locked = !1, e.commands.setMeta("lockDragHandle", this.options.locked)),
			toggleDragHandle: () => ({ editor: e }) => (this.options.locked = !this.options.locked, e.commands.setMeta("lockDragHandle", this.options.locked))
		};
	},
	addProseMirrorPlugins() {
		let e = this.options.render();
		return [Dy({
			tippyOptions: this.options.tippyOptions,
			element: e,
			editor: this.editor,
			onNodeChange: this.options.onNodeChange
		})];
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-drag-handle-react@2.24.0_@tiptap+extension-drag-handle@2.24.0_@tiptap_ef8c8839ac22b6186dd6c01c5d1e1c6d/node_modules/@tiptap/extension-drag-handle-react/dist/index.js
var Oy = (e) => {
	let { className: t = "drag-handle", children: n, editor: r, pluginKey: i = Ey, onNodeChange: a, tippyOptions: o } = e, [s, c] = I(null), l = F(null);
	return P(() => !s || r.isDestroyed ? () => {
		l.current = null;
	} : (l.current || (l.current = Dy({
		editor: r,
		element: s,
		pluginKey: i,
		tippyOptions: o,
		onNodeChange: a
	}), r.registerPlugin(l.current)), () => {
		r.unregisterPlugin(i), l.current = null;
	}), [
		s,
		r,
		a,
		i,
		o
	]), M.createElement("div", {
		className: t,
		ref: c
	}, n);
}, ky = (e) => typeof e == "object" && !!e && !Array.isArray(e), Ay = (e, t) => {
	let n = ky(e.attrs) ? e.attrs : {};
	return {
		...e,
		attrs: {
			...n,
			id: t
		}
	};
}, jy = (e) => {
	let t = { ...e };
	if (t.type && Od(t.type) && ky(t.attrs) && "id" in t.attrs) {
		let { id: e, ...n } = t.attrs;
		t.attrs = Object.keys(n).length > 0 ? n : void 0;
	}
	return Array.isArray(t.content) && (t.content = t.content.map(jy)), t;
}, My = (e) => e.map(jy), Ny = (e) => ky(e) ? e.type : void 0, Py = (e, t) => {
	let n = jy(e);
	return n.type && Od(n.type) ? Ay(n, t) : n;
}, Fy = (e, t) => t.length === 0 ? lr.empty : lr.fromArray(t.map((t) => e.schema.nodeFromJSON(t))), Iy = (e, t) => new yr(Fy(e, t), 0, 0), Ly = (e, t) => {
	let n = Nd(e, t);
	if (!n) throw new zy(t);
	return n;
}, Ry = (e) => e.isEmpty ? {
	json: null,
	html: null
} : {
	json: e.getJSON(),
	html: e.getHTML()
}, zy = class extends Error {
	code = "target_not_found";
	targetId;
	constructor(e) {
		super(`Could not find block node ${e} in the current editor document.`), this.name = "NotesTextEditorPatchTargetNotFoundError", this.targetId = e, Object.setPrototypeOf(this, new.target.prototype);
	}
}, By = class extends Error {
	code = "unsupported_patch_type";
	patchType;
	constructor(e) {
		super(`Unsupported NotesTextEditor patch type: ${String(e)}`), this.name = "NotesTextEditorUnsupportedPatchTypeError", this.patchType = e, Object.setPrototypeOf(this, new.target.prototype);
	}
}, Vy = (e, t) => {
	switch (t.type) {
		case "top_level_prepend": {
			let n = Iy(e, My(t.blocks)), r = e.state.tr.replace(0, 0, n);
			return r.docChanged && e.view.dispatch(r), Ry(e);
		}
		case "top_level_append": {
			let n = Iy(e, My(t.blocks)), r = e.state.doc.content.size, i = e.state.tr.replace(r, r, n);
			return i.docChanged && e.view.dispatch(i), Ry(e);
		}
		case "insert_before": {
			let n = Ly(e, t.targetId), r = Iy(e, My(t.blocks)), i = e.state.tr.replace(n.pos, n.pos, r);
			return i.docChanged && e.view.dispatch(i), Ry(e);
		}
		case "insert_after": {
			let n = Ly(e, t.targetId), r = n.pos + n.node.nodeSize, i = Iy(e, My(t.blocks)), a = e.state.tr.replace(r, r, i);
			return a.docChanged && e.view.dispatch(a), Ry(e);
		}
		case "replace_block": {
			let n = Ly(e, t.targetId), r = e.schema.nodeFromJSON(Py(t.block, t.targetId)), i = e.state.tr.replaceWith(n.pos, n.pos + n.node.nodeSize, r);
			return i.docChanged && e.view.dispatch(i), Ry(e);
		}
		case "replace_content": {
			let n = Ly(e, t.targetId), r = e.state.tr.replace(n.pos + 1, n.pos + n.node.nodeSize - 1, Iy(e, My(t.content)));
			return r.docChanged && e.view.dispatch(r), Ry(e);
		}
		case "delete_block": {
			let n = Ly(e, t.targetId), r = e.state.tr.delete(n.pos, n.pos + n.node.nodeSize);
			return r.docChanged && e.view.dispatch(r), Ry(e);
		}
	}
	throw new By(Ny(t));
}, Hy = ({ placeholder: e, translations: t, aiBlockConfig: n, imageUploadConfig: r, enhanceEnabled: i = !1 }) => [
	gr,
	pr,
	Rn,
	qn,
	ar,
	Yn,
	hr,
	jr,
	In,
	Kn,
	fr,
	Jn,
	$n,
	Ln,
	kr,
	Pn,
	Qd,
	df,
	wd.configure({ currentConfig: n }),
	Ud,
	of,
	...r ? [Kd(r)] : [],
	...i ? [Or] : [],
	Md,
	vr,
	Bn(e),
	Qn(e),
	lf({
		aiBlockConfig: n,
		translations: t,
		imageUploadConfig: r
	})
], Uy = (e) => e.isVisible !== !1, Wy = (e) => "isVisible" in e ? e.isVisible !== !1 : !0, Gy = (e) => !!e && "items" in e, Ky = (e) => !!e && "label" in e && !("items" in e), qy = ({ primaryAction: e, secondaryActions: t = [], metadata: n = [], otherActions: r = [], status: i }) => {
	let a = [...i ? [{
		label: i.label,
		value: {
			type: "status",
			label: i.text,
			variant: i.variant
		},
		actions: i.actions,
		hideLabel: !0
	}] : [], ...n], o = t.filter(Uy), s = r.filter(Wy), c = e && Uy(e), l = o.length > 0, u = s.length > 0, d = l || u || c;
	return /* @__PURE__ */ L("div", {
		className: "flex flex-col",
		children: (a.length > 0 || d) && /* @__PURE__ */ R("div", {
			className: "flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center",
			children: [a.length > 0 && /* @__PURE__ */ L(w, { items: a }), /* @__PURE__ */ R("div", {
				className: "flex flex-shrink-0 flex-row items-center gap-2",
				children: [
					u && /* @__PURE__ */ L(En, { items: s }),
					o.map((e, t) => ee(e) ? /* @__PURE__ */ L(C, {
						items: e.items,
						onClick: e.onClick,
						variant: e.variant ?? "outline",
						value: e.value,
						disabled: e.disabled,
						tooltip: e.tooltip,
						loading: e.loading
					}, t) : /* @__PURE__ */ L(v, {
						onClick: e.onClick,
						variant: e.variant || "outline",
						label: e.label,
						icon: e.icon,
						hideLabel: e.hideLabel,
						disabled: e.disabled,
						tooltip: e.tooltip
					}, t)),
					c && (l || u) && /* @__PURE__ */ L("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
					c && Ky(e) && /* @__PURE__ */ L(v, {
						label: e.label,
						onClick: e.onClick,
						variant: "default",
						icon: e.icon,
						disabled: e.disabled,
						tooltip: e.tooltip
					}),
					c && Gy(e) && /* @__PURE__ */ L(C, {
						items: e.items,
						onClick: e.onClick,
						variant: "default",
						value: e.value,
						disabled: e.disabled,
						tooltip: e.tooltip
					})
				]
			})]
		})
	});
}, Jy = ({ errorType: e, onDismiss: t }) => {
	let n = u(), r = ((e) => {
		switch (e) {
			case "file-too-large": return n.imageUpload.errors.fileTooLarge;
			case "invalid-type": return n.imageUpload.errors.invalidType;
			default: return n.imageUpload.errors.uploadFailed;
		}
	})(e);
	return /* @__PURE__ */ L("div", {
		className: "mx-auto flex w-full max-w-[824px] px-14 py-2",
		children: /* @__PURE__ */ R("div", {
			className: "flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm",
			children: [/* @__PURE__ */ R("div", {
				className: "flex w-full flex-row items-center gap-2",
				children: [/* @__PURE__ */ L("div", {
					className: "flex-shrink-0",
					children: /* @__PURE__ */ L(un, {
						size: "sm",
						type: "critical"
					})
				}), /* @__PURE__ */ L("p", {
					className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
					title: r,
					children: r
				})]
			}), /* @__PURE__ */ L("div", {
				className: "flex-shrink-0",
				children: /* @__PURE__ */ L(v, {
					variant: "outline",
					onClick: t,
					label: n.imageUpload.errors.dismiss,
					size: "sm"
				})
			})]
		})
	});
}, Yy = ({ value: e, onChange: t, placeholder: n, disabled: r = !1 }) => /* @__PURE__ */ L("div", {
	className: "mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 sm:px-14 px-0",
	children: /* @__PURE__ */ L("textarea", {
		ref: (e) => {
			e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
		},
		disabled: r,
		value: e,
		onChange: (e) => {
			let n = e.target.value.replace(/[\r\n]/g, "");
			t?.(n), e.target.style.height = "auto", e.target.style.height = `${e.target.scrollHeight}px`;
		},
		onKeyDown: (e) => {
			e.key === "Enter" && e.preventDefault();
		},
		placeholder: n,
		className: "resize-none overflow-hidden font-semibold text-f1-foreground placeholder-f1-foreground-tertiary sm:text-[39px] sm:leading-[49px] text-[34px] leading-[42px]",
		rows: 1
	})
}), Xy = Rr(function({ onChange: e, placeholder: t, initialEditorState: n, readonly: r = !1, aiBlockConfig: i, imageUploadConfig: a, enhanceConfig: o, onTitleChange: s, primaryAction: c, secondaryActions: d, otherActions: f, metadata: p, status: m, alert: h, titlePlaceholder: _ }, v) {
	let x = u(), S = F(null), C = F(null), w = Br(), [T] = I(() => n?.content || ""), [E, ee] = I(n?.title || ""), [te, ne] = I(null);
	P(() => {
		s && s(E);
	}, [E, s]);
	let re = F(!1), ie = Ur(() => a ? {
		...a,
		onError: (e) => {
			ne(e);
		}
	} : void 0, [a]), ae = Ur(() => Hy({
		placeholder: t,
		translations: x,
		aiBlockConfig: i,
		imageUploadConfig: ie,
		enhanceEnabled: !!o
	}), [
		t,
		x,
		i,
		ie,
		o
	]), D = Vn({
		extensions: ae,
		content: T,
		onUpdate: ({ editor: t }) => {
			re.current || e(Ry(t));
		},
		onCreate: ({ editor: t }) => {
			if (jd(t.state.doc)) {
				re.current = !0;
				try {
					t.commands.setContent(t.getJSON());
				} finally {
					re.current = !1;
				}
				jd(t.state.doc) || e(Ry(t));
			}
		},
		editable: !r,
		shouldRerenderOnTransaction: !1
	}), oe = Zn(D, o), se = N((e) => {
		re.current = !0;
		try {
			return e();
		} finally {
			re.current = !1;
		}
	}, []);
	Vr(v, () => ({
		clear: () => D?.commands.clearContent(),
		focus: () => D?.commands.focus(),
		setContent: (e) => D?.commands.setContent(e),
		applyPageDocumentPatch: (e) => D ? se(() => Vy(D, e)) : {
			json: null,
			html: null
		},
		insertAIBlock: () => {
			!D || !i || D.chain().focus().insertContentAt(D.state.doc.content.size, [{
				type: "aiBlock",
				attrs: {
					data: {
						content: null,
						selectedAction: void 0
					},
					config: i,
					isCollapsed: !1
				}
			}, { type: "paragraph" }]).run();
		},
		insertTranscript: (e, t, n) => {
			D && D.chain().focus().insertContentAt(D.state.doc.content.size, [{
				type: "transcript",
				attrs: {
					data: {
						title: e,
						users: t,
						messages: n
					},
					isOpen: !1
				}
			}, { type: "paragraph" }]).run();
		},
		pushContent: (e) => {
			D && D.chain().focus().insertContentAt(D.state.doc.content.size, e).run();
		},
		insertImage: (e) => {
			!D || !ie || qd(D, e, ie);
		}
	}));
	let ce = Ur(() => ({ offset: [0, 5] }), []), le = N(({ node: e, pos: t }) => {
		C.current = e ? {
			pos: t,
			nodeSize: e.nodeSize
		} : null;
	}, []), ue = N(() => {
		let e = C.current;
		if (!e || !D) return;
		let { pos: t, nodeSize: n } = e, r = D.state.doc.nodeAt(t);
		if (r && r.content.size === 0) D.chain().focus().setTextSelection(t + 1).insertContent("/").run();
		else {
			let e = t + n;
			D.chain().focus().insertContentAt(e, { type: "paragraph" }).setTextSelection(e + 1).insertContent("/").run();
		}
	}, [D]), fe = c || d && d.length > 0 || p && p.length > 0 || f && f.length > 0 || m, pe = s || E;
	return D ? /* @__PURE__ */ R("div", {
		className: "relative flex h-full w-full flex-col",
		ref: S,
		id: w,
		children: [
			fe && /* @__PURE__ */ L(qy, {
				primaryAction: c,
				secondaryActions: d,
				metadata: p,
				otherActions: f,
				status: m
			}),
			te && /* @__PURE__ */ L(Jy, {
				errorType: te,
				onDismiss: () => ne(null)
			}),
			/* @__PURE__ */ L(y, { children: oe.error && !oe.isLoading && /* @__PURE__ */ L(b.div, {
				initial: {
					height: 0,
					opacity: 0,
					y: -20
				},
				animate: {
					height: "auto",
					opacity: 1,
					y: 0
				},
				exit: {
					height: 0,
					opacity: 0,
					y: -20
				},
				transition: { duration: .3 },
				className: "mx-auto flex w-full max-w-[824px] items-center justify-center px-14 py-2",
				children: /* @__PURE__ */ L(Gn, {
					error: oe.error,
					onDismiss: oe.clearError
				})
			}, "enhance-error") }),
			/* @__PURE__ */ R(nn, {
				className: "notes-text-editor-scroll h-full gap-6",
				children: [
					h && /* @__PURE__ */ L("div", {
						className: "mx-auto w-full max-w-[824px] sm:px-14 px-0",
						children: /* @__PURE__ */ L(Wn, { ...h })
					}),
					pe && /* @__PURE__ */ L(Yy, {
						value: E,
						onChange: s ? ee : void 0,
						placeholder: _,
						disabled: !s || r
					}),
					/* @__PURE__ */ R("div", {
						className: "notes-text-editor h-full",
						onClick: () => D.commands.focus(),
						children: [!r && /* @__PURE__ */ L(Oy, {
							editor: D,
							tippyOptions: ce,
							onNodeChange: le,
							children: /* @__PURE__ */ R("div", {
								className: "flex flex-row",
								children: [/* @__PURE__ */ L(g, {
									compact: !0,
									variant: "ghost",
									size: "sm",
									className: "text-f1-foreground-tertiary",
									onClick: ue,
									label: "Add paragraph",
									hideLabel: !0,
									icon: Ae
								}), /* @__PURE__ */ L("div", {
									className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
									draggable: !0,
									"data-drag-handle": !0,
									children: /* @__PURE__ */ L(l, {
										icon: de,
										size: "xs"
									})
								})]
							})
						}), /* @__PURE__ */ L(er, {
							editor: D,
							className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
						})]
					})
				]
			}),
			!r && /* @__PURE__ */ L(Mr, {
				editorId: w,
				editor: D,
				disableButtons: oe.disableButtons,
				isToolbarOpen: !1,
				isFullscreen: !1,
				plainHtmlMode: !1,
				enhance: oe
			})
		]
	}) : null;
}), Zy = ({ withHeader: e = !1, withTitle: t = !0, withToolbar: n = !0 }) => /* @__PURE__ */ R("div", {
	className: "relative flex h-full w-full flex-col",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [
		e && /* @__PURE__ */ R("div", {
			className: "flex items-center justify-between border-b border-f1-border px-6 py-3",
			children: [/* @__PURE__ */ R("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ L(m, { className: "h-6 w-20 rounded-md" }), /* @__PURE__ */ L(m, { className: "h-6 w-24 rounded-md" })]
			}), /* @__PURE__ */ R("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ L(m, { className: "h-8 w-16 rounded-md" }), /* @__PURE__ */ L(m, { className: "h-8 w-12 rounded-md" })]
			})]
		}),
		n && /* @__PURE__ */ R("div", {
			className: "absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md",
			children: [
				/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
				/* @__PURE__ */ R("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" })
					]
				}),
				/* @__PURE__ */ R("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" })
					]
				}),
				/* @__PURE__ */ R("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ L(m, { className: "h-8 w-8 rounded" })
					]
				})
			]
		}),
		/* @__PURE__ */ R(nn, {
			className: "h-full gap-6",
			children: [t && /* @__PURE__ */ L("div", {
				className: "mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5",
				children: /* @__PURE__ */ L(m, { className: "h-8 w-80 rounded-md" })
			}), /* @__PURE__ */ L("div", {
				className: "h-full",
				children: /* @__PURE__ */ L("div", {
					className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14",
					children: /* @__PURE__ */ R("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ L(m, { className: "h-5 w-full rounded-md" }),
							/* @__PURE__ */ L(m, { className: "h-5 w-4/5 rounded-md" }),
							/* @__PURE__ */ L(m, { className: "h-5 w-3/5 rounded-md" }),
							/* @__PURE__ */ L(m, { className: "h-5 w-full rounded-md" }),
							/* @__PURE__ */ L(m, { className: "h-5 w-1/2 rounded-md" })
						]
					})
				})
			})]
		})
	]
}), Qy = d("F0NotesTextEditor", Nr(Xy, Zy)), $y = Qy, eb = Zy, tb = Rr(({ header: e, actions: t, open: n, onClose: r }, i) => {
	let [a, o] = I(!1), s = N(() => {
		o(!0);
		let e = setTimeout(() => {
			r?.(), o(!1);
		}, 200);
		return () => clearTimeout(e);
	}, [r]);
	return /* @__PURE__ */ L(te, {
		open: n && !a,
		onOpenChange: (e) => !e && s?.(),
		children: /* @__PURE__ */ R(T, {
			ref: i,
			className: "bottom-3 top-auto max-w-[400px]",
			children: [/* @__PURE__ */ R(ae, {
				className: "flex flex-col gap-4 px-4 py-5",
				children: [/* @__PURE__ */ L(un, {
					type: e.type,
					size: "lg"
				}), /* @__PURE__ */ R("div", {
					className: "flex flex-col gap-0.5",
					children: [/* @__PURE__ */ L(E, {
						className: "text-xl sm:text-lg",
						children: e.title
					}), /* @__PURE__ */ L(ie, {
						className: "text-lg sm:text-base",
						children: e.description
					})]
				})]
			}), t && /* @__PURE__ */ R(oe, {
				className: "px-4 pb-4 pt-2",
				children: [/* @__PURE__ */ R("div", {
					className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full",
					children: [/* @__PURE__ */ L(v, {
						variant: "outline",
						...t.secondary
					}), /* @__PURE__ */ L(v, {
						...t.primary,
						variant: t.primary.variant || "default"
					})]
				}), /* @__PURE__ */ R("div", {
					className: "flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full",
					children: [/* @__PURE__ */ L(v, {
						variant: "outline",
						...t.secondary,
						size: "lg"
					}), /* @__PURE__ */ L(v, {
						...t.primary,
						variant: t.primary.variant || "default",
						size: "lg"
					})]
				})]
			})]
		})
	});
});
tb.displayName = "Dialog";
var nb = a(i({
	name: "Dialog",
	type: "info"
}, d("Dialog", tb))), rb = ({ avatar: e, title: t, description: n, primaryAction: r, secondaryActions: i, otherActions: a, status: o, metadata: s, deactivated: c, metadataRowGap: l, showBottomBorder: u, onClose: d }) => /* @__PURE__ */ L(ne, {
	avatar: e,
	title: t,
	description: n,
	primaryAction: r,
	secondaryActions: i,
	otherActions: a,
	status: o,
	metadata: s,
	deactivated: c,
	metadataRowGap: l,
	showBottomBorder: u,
	onClose: d
}), ib = [
	{
		id: "bottom",
		path: "M11.9948 17.5244C14.2802 17.5244 16.5188 18.2872 18.2805 19.7631C16.5189 21.1914 14.2801 22 11.9948 22C9.61453 21.9999 7.42426 21.1436 5.71037 19.7631C7.47193 18.3348 9.70955 17.5245 11.9948 17.5244Z"
	},
	{
		id: "left",
		path: "M4.23721 5.71327C5.66526 7.47502 6.47496 9.71299 6.47503 11.9985C6.47502 14.2841 5.71292 16.5231 4.23721 18.2849C2.80903 16.5231 2 14.2841 2 11.9985C2.00007 9.61784 2.85682 7.42739 4.23721 5.71327Z"
	},
	{
		id: "right",
		path: "M19.7622 5.71327C21.1902 7.47502 21.9999 9.71299 22 11.9985C22 14.2841 21.2379 16.5231 19.7622 18.2849C18.334 16.5231 17.525 14.2841 17.525 11.9985C17.525 9.61784 18.3818 7.42739 19.7622 5.71327Z"
	},
	{
		id: "top",
		path: "M11.9948 2C14.2802 2 16.5188 2.76274 18.2805 4.2387C16.5189 5.66699 14.2801 6.47557 11.9948 6.47557C9.61453 6.4755 7.42426 5.61919 5.71037 4.2387C7.47193 2.81041 9.70955 2.00007 11.9948 2Z"
	}
], ab = Rr((e, t) => {
	let n = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, r = Br();
	return /* @__PURE__ */ R("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		ref: t,
		...e,
		children: [/* @__PURE__ */ L("defs", { children: ib.map((e) => /* @__PURE__ */ L("clipPath", {
			id: `${r}-${e.id}`,
			children: /* @__PURE__ */ L("path", { d: e.path })
		}, e.id)) }), n ? ib.map((e) => /* @__PURE__ */ L("path", {
			d: e.path,
			fill: "currentColor"
		}, e.id)) : ib.map((e) => /* @__PURE__ */ L("foreignObject", {
			x: "0",
			y: "0",
			width: "24",
			height: "24",
			clipPath: `url(#${r}-${e.id})`,
			children: /* @__PURE__ */ L("div", { style: {
				width: "100%",
				height: "100%",
				background: "conic-gradient(from 0deg at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
			} })
		}, e.id))]
	});
});
//#endregion
//#region src/sds/UpsellingKit/ProductCard/index.tsx
function ob({ title: e, description: t, onClick: n, onClose: r, isVisible: i, dismissable: a = !1, trackVisibility: o, type: s, ...c }) {
	let [u, d] = I(i);
	return P(() => {
		d(i), o && o(i);
	}, [i, o]), u && /* @__PURE__ */ L("div", { children: /* @__PURE__ */ L("div", {
		className: "p-2",
		children: /* @__PURE__ */ L("div", {
			style: s === "one-campaign" ? {
				background: "linear-gradient(98.39deg, rgba(249, 115, 22, 0.49) 0%, rgba(229, 25, 67, 0.49) 20%, rgba(229, 25, 67, 0.49) 49.97%, rgba(229, 25, 67, 0.49) 80%, rgba(164, 165, 222, 0.49) 100%)",
				borderRadius: "12px",
				padding: "1px"
			} : {},
			children: /* @__PURE__ */ R("div", {
				className: s === "one-campaign" ? "flex h-auto w-auto cursor-pointer flex-row gap-2 p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary" : "flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary",
				style: s === "one-campaign" ? {
					background: "#fef7f8",
					borderRadius: "11px"
				} : {},
				onClick: n,
				children: [/* @__PURE__ */ R(Gr, { children: [s === "one-campaign" ? /* @__PURE__ */ L("div", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ L(l, {
						icon: ab,
						size: "lg",
						className: "!h-8 !w-8"
					})
				}) : /* @__PURE__ */ L("div", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ L($t, {
						module: c.module,
						size: "md"
					})
				}), /* @__PURE__ */ L("div", {
					className: "flex flex-1 flex-col",
					children: /* @__PURE__ */ R("div", { children: [/* @__PURE__ */ L("h3", {
						className: "text-lg font-medium",
						children: e
					}), /* @__PURE__ */ L("p", {
						className: "text-f1-foreground-secondary",
						children: t
					})] })
				})] }), a && /* @__PURE__ */ L("div", {
					className: "h-6 w-6",
					children: /* @__PURE__ */ L(v, {
						variant: "ghost",
						icon: wn,
						size: "sm",
						hideLabel: !0,
						onClick: () => {
							d(!1), r && r();
						},
						label: "Close"
					})
				})]
			})
		})
	}) });
}
var sb = a(ob), cb = Rr(function({ title: e, subtitle: t, mediaUrl: n, primaryAction: r, secondaryAction: i, onClose: a, isLoading: o = !1, children: s, variant: c = "default" }, l) {
	let u = n?.includes(".mp4"), [d, f] = I(!1);
	return o ? /* @__PURE__ */ L(lb, { ref: l }) : d ? null : /* @__PURE__ */ R("div", {
		ref: l,
		className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
		children: [
			/* @__PURE__ */ L("div", {
				className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
				children: u ? /* @__PURE__ */ L("video", {
					src: n,
					autoPlay: !0,
					muted: !0,
					loop: !0,
					className: "h-full w-full rounded-lg object-cover"
				}) : /* @__PURE__ */ L("img", {
					src: n,
					alt: "",
					className: "h-full w-full rounded-lg object-cover"
				})
			}),
			/* @__PURE__ */ R("div", {
				className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
				children: [/* @__PURE__ */ R("div", {
					className: S("flex w-full flex-col gap-1", c === "default" ? "sm:max-w-lg" : void 0),
					children: [/* @__PURE__ */ L("h3", {
						className: "font-bold text-xl text-f1-foreground",
						children: e
					}), t && /* @__PURE__ */ L("p", {
						className: "text-base text-f1-foreground-secondary",
						children: t
					})]
				}), /* @__PURE__ */ R("div", {
					className: "flex gap-3",
					children: [
						r && /* @__PURE__ */ L(v, {
							onClick: r.onClick,
							label: r.label,
							variant: r.variant || "default",
							size: "md",
							icon: r.icon
						}),
						i && /* @__PURE__ */ L(v, {
							onClick: i.onClick,
							label: i.label,
							variant: i.variant || "outline",
							size: "md",
							icon: i.icon
						}),
						s
					]
				})]
			}),
			a && /* @__PURE__ */ L("div", {
				className: "absolute right-2 top-2 z-10",
				children: /* @__PURE__ */ L(v, {
					variant: "ghost",
					icon: wn,
					size: "sm",
					hideLabel: !0,
					onClick: () => {
						a && a(), f(!0);
					},
					label: "Close"
				})
			})
		]
	});
}), lb = Rr(function(e, t) {
	return /* @__PURE__ */ R("div", {
		ref: t,
		className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		...e,
		children: [
			/* @__PURE__ */ L("div", {
				className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
				children: /* @__PURE__ */ L(m, { className: "h-full w-full rounded-lg" })
			}),
			/* @__PURE__ */ R("div", {
				className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
				children: [/* @__PURE__ */ R("div", {
					className: "flex w-full flex-col gap-1 sm:max-w-lg",
					children: [
						/* @__PURE__ */ L(m, { className: "h-7 w-3/4" }),
						/* @__PURE__ */ L(m, { className: "h-4 w-full" }),
						/* @__PURE__ */ L(m, { className: "h-4 w-2/3" })
					]
				}), /* @__PURE__ */ R("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ L(m, { className: "h-9 w-32" }), /* @__PURE__ */ L(m, { className: "h-9 w-24" })]
				})]
			}),
			/* @__PURE__ */ L("div", {
				className: "absolute right-2 top-2 z-10",
				children: /* @__PURE__ */ L(m, { className: "h-8 w-8 rounded-md" })
			})
		]
	});
}), ub = a(Nr(cb, lb));
ub.displayName = "BaseBanner";
//#endregion
//#region src/components/F0ButtonToggleGroup/index.ts
var db = a(d("F0ButtonToggleGroup", (e) => {
	let { items: t, size: n, multiple: r, required: i, value: a, onChange: o, variant: s, disabled: c, withBorder: l = !0, fullWidth: u = !1 } = e, [d, f] = I(a);
	P(() => {
		d !== a && f(a);
	}, [a]);
	let p = (e) => {
		i && (r && e.length === 0 || !e) || f(e);
	};
	P(() => {
		o?.(d);
	}, [d, r]);
	let m = Ur(() => t.map((e) => ({
		...e,
		disabled: c || e.disabled
	})), [t, c]), h = r ? d : [d];
	return /* @__PURE__ */ L(Fr, {
		...r ? {
			type: "multiple",
			value: d
		} : {
			type: "single",
			value: d
		},
		onValueChange: p,
		disabled: c,
		className: S("flex flex-wrap items-center justify-center gap-1", u && "w-full"),
		children: m.map((e) => /* @__PURE__ */ L(Pr, {
			value: e.value,
			asChild: !0,
			className: S(u && "flex-1"),
			children: /* @__PURE__ */ L(De, {
				...e,
				size: n,
				withBorder: l,
				variant: s,
				className: S(u && "w-full", e.className),
				selected: !!h?.includes(e.value),
				onSelectedChange: () => {}
			})
		}, e.value))
	});
})), fb = [], pb = fb, mb = /* @__PURE__ */ new Set(), hb = 0, gb = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), vb = () => {
	for (let e of mb) e();
}, yb = () => {
	for (let e of _b) e();
}, bb = {
	subscribe(e) {
		return mb.add(e), () => {
			mb.delete(e);
		};
	},
	getSnapshot() {
		return pb;
	},
	getServerSnapshot() {
		return fb;
	},
	addItem(e) {
		let t = pb.findIndex((t) => t.id === e.id);
		if (t !== -1) {
			let n = [...pb];
			n[t] = e, pb = n;
		} else pb = [...pb, e];
		vb();
	},
	removeItem(e) {
		pb.some((t) => t.id === e) && (pb = pb.filter((t) => t.id !== e), vb());
	},
	clear() {
		pb.length !== 0 && (pb = fb, vb());
	},
	acquireRenderer() {
		hb += 1;
		let e = hb;
		return gb.add(e), yb(), {
			id: e,
			release() {
				gb.delete(e), yb();
			}
		};
	},
	getActiveRendererId() {
		let e = null;
		for (let t of gb) (e === null || t < e) && (e = t);
		return e;
	},
	subscribeRenderer(e) {
		return _b.add(e), () => {
			_b.delete(e);
		};
	},
	hasProvider() {
		return gb.size > 0;
	}
}, xb = 5e3, Sb = 1e4, Cb = (e) => {
	process.env.NODE_ENV !== "production" && !bb.hasProvider() && console.warn(`[f0] ${e} was called but no <F0Provider> is mounted, so the toast will not render. Make sure your app is wrapped in <F0Provider>.`);
}, wb = {
	open: (e) => {
		let t = e.id ?? Hn();
		Cb("toasts.open()");
		let n = e.actions != null, r = e.persistent === !0 || e.variant === "loading";
		return bb.addItem({
			duration: r ? void 0 : n ? Sb : xb,
			...e,
			id: t,
			onClose: () => bb.removeItem(t)
		}), t;
	},
	close: (e) => {
		bb.removeItem(e);
	},
	closeAll: () => {
		bb.clear();
	}
}, Tb = 12, Eb = 6, Db = ({ target: e, title: t, description: n, actionLabel: r, onAction: i, onClose: a, step: o, arrow: s = !0, side: c = "bottom", align: l = "center", sideOffset: d = s ? 8 : 4, container: f }) => {
	let p = u(), m = F(null), h = F(null), _ = Br(), v = `${_}-title`, y = `${_}-description`, b = Ur(() => ({ current: e }), [e]), x = F(o?.current);
	P(() => {
		x.current !== o?.current && (x.current = o?.current, m.current?.focus());
	}, [o?.current]);
	let C = !o || o.current >= o.total, w = r ?? (C ? p.coachmark.done : p.coachmark.next);
	return /* @__PURE__ */ R(Cn, {
		open: !0,
		onOpenChange: (e) => {
			e || a();
		},
		children: [/* @__PURE__ */ L(yn, { virtualRef: b }), /* @__PURE__ */ R(_n, {
			ref: m,
			container: f,
			side: c,
			align: l,
			sideOffset: d,
			collisionPadding: 8,
			tabIndex: -1,
			"aria-labelledby": v,
			"aria-describedby": n ? y : void 0,
			onOpenAutoFocus: (e) => {
				e.preventDefault(), h.current = document.activeElement, m.current?.focus();
			},
			onCloseAutoFocus: (e) => {
				e.preventDefault();
				let t = h.current;
				h.current = null, t && t !== document.body && document.contains(t) && t.focus();
			},
			onInteractOutside: (e) => e.preventDefault(),
			className: S("w-72 overflow-visible rounded-lg border-none p-4", "shadow-lg backdrop-blur-sm", "bg-f1-background-inverse text-f1-foreground-inverse", "dark:bg-f1-background-tertiary"),
			children: [/* @__PURE__ */ R("div", {
				className: "dark flex flex-col gap-3",
				children: [/* @__PURE__ */ R("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ R("div", {
						className: "flex flex-row items-start justify-between gap-2",
						children: [/* @__PURE__ */ L("p", {
							id: v,
							className: "font-semibold",
							children: t
						}), /* @__PURE__ */ L(g, {
							variant: "outline",
							icon: wn,
							size: "sm",
							hideLabel: !0,
							onClick: a,
							label: p.actions.close,
							className: "flex-shrink-0"
						})]
					}), n && /* @__PURE__ */ L("p", {
						id: y,
						className: "font-normal text-f1-foreground-inverse-secondary",
						children: n
					})]
				}), /* @__PURE__ */ R("div", {
					className: "flex flex-row items-center gap-3",
					children: [o && /* @__PURE__ */ R("p", {
						className: "text-f1-foreground-inverse-secondary",
						children: [
							o.current,
							"/",
							o.total
						]
					}), /* @__PURE__ */ L(g, {
						variant: "outline",
						label: w,
						onClick: i,
						className: "ml-auto"
					})]
				})]
			}), s && /* @__PURE__ */ L(xn, {
				asChild: !0,
				width: Tb,
				height: Eb,
				children: /* @__PURE__ */ L("svg", {
					viewBox: `0 0 ${Tb} ${Eb}`,
					children: /* @__PURE__ */ L("path", {
						d: `M0 0L${Tb / 2} ${Eb}L${Tb} 0Z`,
						className: "fill-f1-background-inverse dark:fill-f1-background-tertiary"
					})
				})
			})]
		})]
	});
};
Db.displayName = "F0Coachmark";
var Ob = d("F0Coachmark", Db), kb = [], Ab = kb, jb = /* @__PURE__ */ new Set(), Mb = 0, Nb = /* @__PURE__ */ new Set(), Pb = /* @__PURE__ */ new Set(), Fb = () => {
	for (let e of jb) e();
}, Ib = () => {
	for (let e of Pb) e();
}, Lb = {
	subscribe(e) {
		return jb.add(e), () => {
			jb.delete(e);
		};
	},
	getSnapshot() {
		return Ab;
	},
	getServerSnapshot() {
		return kb;
	},
	addItem(e) {
		let t = Ab.findIndex((t) => t.id === e.id);
		if (t !== -1) {
			let n = [...Ab];
			n[t] = e, Ab = n;
		} else Ab = [...Ab, e];
		Fb();
	},
	removeItem(e) {
		Ab.some((t) => t.id === e) && (Ab = Ab.filter((t) => t.id !== e), Fb());
	},
	clear() {
		Ab.length !== 0 && (Ab = kb, Fb());
	},
	acquireRenderer() {
		Mb += 1;
		let e = Mb;
		return Nb.add(e), Ib(), {
			id: e,
			release() {
				Nb.delete(e), Ib();
			}
		};
	},
	getActiveRendererId() {
		let e = null;
		for (let t of Nb) (e === null || t < e) && (e = t);
		return e;
	},
	subscribeRenderer(e) {
		return Pb.add(e), () => {
			Pb.delete(e);
		};
	},
	hasProvider() {
		return Nb.size > 0;
	}
}, Rb = process.env.NODE_ENV !== "production", zb = (e) => {
	if (typeof e != "string") return e.isConnected ? e : null;
	let t = document.querySelectorAll(e);
	return Rb && t.length > 1 && console.warn(`[f0] coachmarks: the selector "${e}" matched ${t.length} elements. Anchoring to the first one — use a selector that matches exactly one.`), t[0] ?? null;
}, Bb = (e) => {
	let [t, n] = I(null), r = F(null);
	return P(() => {
		let t = (e) => {
			e !== r.current && (r.current = e, n(e));
		};
		if (e === void 0 || typeof document > "u") {
			t(null);
			return;
		}
		t(zb(e)), Rb && r.current === null && typeof e == "string" && console.warn(`[f0] coachmarks: no element matches the selector "${e}" yet. The coachmark will show as soon as one does.`);
		let i = new MutationObserver(() => t(zb(e)));
		return i.observe(document.body, {
			childList: !0,
			subtree: !0
		}), () => i.disconnect();
	}, [e]), t;
}, Vb = ({ item: e, container: t }) => {
	let [n, r] = I(0), i = Math.min(n, e.steps.length - 1), a = e.steps[i], o = i === e.steps.length - 1, s = Bb(a.targetElement), c = () => Lb.removeItem(e.id);
	return s ? /* @__PURE__ */ L(Ob, {
		target: s,
		container: t,
		title: a.title,
		description: a.description,
		actionLabel: a.action?.label,
		arrow: a.arrow,
		side: a.side,
		align: a.align,
		sideOffset: a.sideOffset,
		step: e.steps.length > 1 ? {
			current: i + 1,
			total: e.steps.length
		} : void 0,
		onAction: () => {
			a.action?.onClick?.(), o ? (e.onComplete?.(), c()) : r(i + 1);
		},
		onClose: () => {
			e.onDismiss?.(), c();
		}
	}) : null;
}, Hb = ({ children: e, portalTarget: t = "#f0-overlay-root" }) => {
	let n = Wr(Lb.subscribe, Lb.getSnapshot, Lb.getServerSnapshot), r = F(null), i = Wr(Lb.subscribeRenderer, Lb.getActiveRendererId, () => null);
	P(() => {
		let { id: e, release: t } = Lb.acquireRenderer();
		return r.current = e, t;
	}, []);
	let a = i === r.current, [o, s] = I(null);
	P(() => {
		typeof document > "u" || s(document.querySelector(t));
	}, [t]);
	let c = n[0];
	return /* @__PURE__ */ R(Gr, { children: [a && c && /* @__PURE__ */ L(Vb, {
		item: c,
		container: o
	}, c.id), e] });
};
//#endregion
export { Na as $, Wu as A, Nu as B, rd as C, ed as D, $u as E, Yu as F, Xs as G, Du as H, Zu as I, qa as J, io as K, Ju as L, Xu as M, Ku as N, Qu as O, qu as P, Ma as Q, Vu as R, id as S, td as T, Eu as U, Ou as V, ru as W, Ka as X, Ga as Y, Ua as Z, pd as _, db as a, od as b, rb as c, Zy as d, Ba as et, $y as f, Jd as g, Xd as h, bb as i, Gu as j, Uu as k, nb as l, Yd as m, Lb as n, ub as o, eb as p, Qa as q, wb as r, sb as s, Hb as t, Pa as tt, Qy as u, cd as v, nd as w, ad as x, sd as y, Pu as z };
