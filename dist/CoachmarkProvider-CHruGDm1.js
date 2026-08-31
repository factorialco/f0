import { o as e, t } from "./rolldown-runtime-CEFd7nDs.js";
import { t as n } from "./clsx-rBDvwE6-.js";
import { t as r } from "./dist-CqnuTXEz.js";
import { t as i } from "./component-Lhh_08kH.js";
import { d as a, l as o, t as s, u as c } from "./OneEllipsis-DuhKMtYp.js";
import { D as l, f as u, ht as d, k as f, lt as p, s as m } from "./variants-BOK7SMP_.js";
import { n as h, t as g } from "./utils-CVzxZnoI.js";
import { A as _, C as v, D as y, E as b, S as x, T as S, x as C } from "./F0Dialog-BBImV3o6.js";
import { G as w, K as T, Q as E, W as ee, q as te } from "./useDataCollectionSource-B2DTqR5t.js";
import { h as ne, p as re, y as ie } from "./value-C0Esu8Ky.js";
import { At as ae, Et as D, Mt as oe, Nt as se, jt as ce, kt as le } from "./F0AiFormRegistry-DnYPR-il.js";
import { P as ue, i as de, r as fe, t as pe } from "./tooltip-BPSwDQpD.js";
import { a as me, f as he, i as O, l as k, r as A, u as ge } from "./F0Button-DTIyyURd.js";
import { It as _e, Kt as ve, gt as ye, lt as be, nn as xe, rn as Se, w as Ce } from "./F0Select-D82qzEFD.js";
import { $ as we, A as Te, B as Ee, Bt as De, C as Oe, D as ke, E as Ae, F as je, G as Me, H as Ne, Ht as Pe, I as Fe, J as Ie, L as Le, Lt as Re, M as ze, N as Be, O as Ve, P as He, Q as Ue, R as We, S as Ge, T as Ke, U as qe, Ut as Je, V as Ye, Vt as Xe, W as Ze, Wt as Qe, Z as $e, Zt as et, _ as tt, _t as nt, at as rt, b as it, ct as at, d as ot, dt as st, et as ct, f as lt, ft as ut, g as dt, h as ft, ht as pt, it as mt, j as ht, k as gt, l as _t, lt as vt, m as yt, mt as bt, nt as j, ot as xt, p as St, pt as Ct, q as wt, rt as Tt, st as Et, tt as M, u as Dt, ut as Ot, v as kt, w as At, x as jt, y as Mt, z as Nt } from "./F0CanvasPanel-ytTgKUje.js";
import { D as Pt, ct as Ft, it as It, lt as Lt, ot as Rt, p as zt, st as Bt } from "./F0Checkbox-BNfJ1XN6.js";
import { $ as Vt, I as Ht, J as Ut, L as Wt, Q as Gt, R as Kt, X as qt, Y as Jt, Z as Yt, et as Xt, tt as Zt, z as Qt } from "./F0Card-V3opUes0.js";
import { r as $t } from "./internal-BI1QOfl-.js";
import { i as en, l as tn, n as nn, o as rn, r as an, s as on, t as sn } from "./popover-By8ytmVb.js";
import { t as cn } from "./Cross-BIv5udZr.js";
import { s as ln, u as un } from "./input-CY_KWp0j.js";
import { _ as dn, a as fn, n as pn, r as mn, t as hn, x as gn } from "./progress-BnF2W-nc.js";
import { n as _n } from "./F0Link-DhRhfcpH.js";
import { i as vn, r as yn } from "./internal--8aR4IvV.js";
import { w as bn } from "./AiChatTranslationsProvider-BzN3wu6z.js";
import { h as xn, r as Sn } from "./F0Avatar-CPW1jzgD.js";
import { n as Cn } from "./RichText-CW-0xoDy.js";
import { $ as wn, A as Tn, C as En, D as Dn, E as On, F as kn, G as An, I as jn, J as Mn, K as Nn, L as Pn, M as Fn, N as In, O as Ln, P as Rn, Q as zn, R as Bn, S as Vn, T as Hn, U as Un, W as Wn, X as Gn, Y as Kn, Z as qn, _ as Jn, at as Yn, b as Xn, ct as Zn, dt as Qn, et as $n, ft as er, g as tr, h as nr, it as rr, j as ir, k as ar, lt as or, m as sr, mt as cr, nt as lr, ot as ur, pt as dr, q as fr, qt as pr, rt as mr, st as hr, tt as gr, ut as _r, v as vr, w as yr, x as br, y as xr, z as Sr } from "./F0Form-Bl4VLEaa.js";
import { n as Cr } from "./skeleton-gsHEXIPQ.js";
import { i as wr, r as Tr } from "./dist-BTQhQEA_.js";
import { F0Alert as Er } from "./F0Alert.js";
import * as N from "react";
import P, { PureComponent as Dr, createContext as Or, forwardRef as kr, useCallback as F, useContext as Ar, useEffect as I, useId as jr, useImperativeHandle as Mr, useLayoutEffect as Nr, useMemo as Pr, useRef as L, useState as R, useSyncExternalStore as Fr } from "react";
import { Fragment as Ir, jsx as z, jsxs as B } from "react/jsx-runtime";
import './CoachmarkProvider.css';//#region ../../node_modules/.pnpm/embla-carousel-autoplay@8.5.2_embla-carousel@8.5.2/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js
var Lr = {
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
function Rr(e, t) {
	let n = e.scrollSnapList();
	return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function zr(e, t) {
	let n = e.rootNode();
	return t && t(n) || n;
}
function Br(e = {}) {
	let t, n, r, i, a = null, o = 0, s = !1, c = !1, l = !1, u = !1;
	function d(a, o) {
		n = a;
		let { mergeOptions: s, optionsAtMedia: c } = o;
		if (t = c(s(s(Lr, Br.globalOptions), e)), n.scrollSnapList().length <= 1) return;
		u = t.jump, r = !1, i = Rr(n, t.delay);
		let { eventStore: l, ownerDocument: d } = n.internalEngine(), f = !!n.internalEngine().options.watchDrag, p = zr(n, t.rootNode);
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
Br.globalOptions = void 0;
//#endregion
//#region ../../node_modules/.pnpm/wheel-gestures@2.2.48/node_modules/wheel-gestures/dist/wheel-gestures.esm.js
function Vr() {
	return Vr = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Vr.apply(this, arguments);
}
var Hr = .996, Ur = function(e, t) {
	return t === void 0 && (t = Hr), e * t / (1 - t);
};
function Wr(e) {
	return e[e.length - 1];
}
function Gr(e) {
	return e.reduce(function(e, t) {
		return e + t;
	}) / e.length;
}
var Kr = function(e, t, n) {
	return Math.min(Math.max(t, e), n);
};
function qr(e, t) {
	if (e.length !== t.length) throw Error("vectors must be same length");
	return e.map(function(e, n) {
		return e + t[n];
	});
}
function Jr(e) {
	return Math.max.apply(Math, e.map(Math.abs));
}
function Yr(e) {
	return Object.freeze(e), Object.values(e).forEach(function(e) {
		typeof e == "object" && e && !Object.isFrozen(e) && Yr(e);
	}), e;
}
function Xr() {
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
	return Yr({
		on: t,
		off: n,
		dispatch: r
	});
}
function Zr(e) {
	var t = [], n = function(n) {
		return n.addEventListener("wheel", e, { passive: !1 }), t.push(n), function() {
			return r(n);
		};
	}, r = function(n) {
		n.removeEventListener("wheel", e), t = t.filter(function(e) {
			return e !== n;
		});
	};
	return Yr({
		observe: n,
		unobserve: r,
		disconnect: function() {
			t.forEach(r);
		}
	});
}
var Qr = [
	1,
	18,
	typeof window < "u" && window.innerHeight || 800
];
function $r(e) {
	var t = e.deltaX * Qr[e.deltaMode], n = e.deltaY * Qr[e.deltaMode], r = (e.deltaZ || 0) * Qr[e.deltaMode];
	return {
		timeStamp: e.timeStamp,
		axisDelta: [
			t,
			n,
			r
		]
	};
}
var ei = [
	-1,
	-1,
	-1
];
function ti(e, t) {
	if (!t) return e;
	var n = t === !0 ? ei : t.map(function(e) {
		return e ? -1 : 1;
	});
	return Vr({}, e, { axisDelta: e.axisDelta.map(function(e, t) {
		return e * n[t];
	}) });
}
var ni = 700, ri = function(e) {
	return Vr({}, e, { axisDelta: e.axisDelta.map(function(e) {
		return Kr(e, -ni, ni);
	}) });
}, ii = process.env.NODE_ENV !== "production", ai = .6, oi = .96, si = 2, ci = 5, li = /*#__PURE__*/ Yr({
	preventWheelAction: !0,
	reverseSign: [
		!0,
		!0,
		!1
	]
}), ui = 400;
function di() {
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
		willEndTimeout: ui
	};
}
function fi(e) {
	e === void 0 && (e = {});
	var t = Xr(), n = t.on, r = t.off, i = t.dispatch, a = li, o = di(), s, c = !1, l, u = function(e) {
		Array.isArray(e) ? e.forEach(function(e) {
			return m(e);
		}) : m(e);
	}, d = function(e) {
		return e === void 0 && (e = {}), Object.values(e).some(function(e) {
			return e == null;
		}) ? (ii && console.error("updateOptions ignored! undefined & null options not allowed"), a) : a = Yr(Vr({}, li, a, e));
	}, f = function(e) {
		var t = Vr({
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
				return qr(t.axisMovement, t.axisVelocity.map(function(e) {
					return Ur(e);
				}));
			}
		}, e);
		i("wheel", Vr({}, t, { previous: l })), l = t;
	}, p = function(e, t) {
		var n = a.preventWheelAction, r = t[0], i = t[1], o = t[2];
		if (typeof n == "boolean") return n;
		switch (n) {
			case "x": return Math.abs(r) >= e;
			case "y": return Math.abs(i) >= e;
			case "z": return Math.abs(o) >= e;
			default: return ii && console.warn("unsupported preventWheelAction value: " + n, "warn"), !1;
		}
	}, m = function(e) {
		var t = ri(ti($r(e), a.reverseSign)), n = t.axisDelta, r = t.timeStamp, i = Jr(n);
		if (e.preventDefault && p(i, n) && e.preventDefault(), o.isStarted ? o.isMomentum && i > Math.max(2, o.lastAbsDelta * 2) && (w(!0), S()) : S(), i === 0 && Object.is && Object.is(e.deltaX, -0)) {
			c = !0;
			return;
		}
		s = e, o.axisMovement = qr(o.axisMovement, n), o.lastAbsDelta = i, o.scrollPointsToMerge.push({
			axisDelta: n,
			timeStamp: r
		}), h(), f({
			axisDelta: n,
			isStart: !o.isStartPublished
		}), o.isStartPublished = !0, C();
	}, h = function() {
		o.scrollPointsToMerge.length === si ? (o.scrollPoints.unshift({
			axisDeltaSum: o.scrollPointsToMerge.map(function(e) {
				return e.axisDelta;
			}).reduce(qr),
			timeStamp: Gr(o.scrollPointsToMerge.map(function(e) {
				return e.timeStamp;
			}))
		}), _(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || b()) : o.isStartPublished || g();
	}, g = function() {
		o.axisVelocity = Wr(o.scrollPointsToMerge).axisDelta.map(function(e) {
			return e / o.willEndTimeout;
		});
	}, _ = function() {
		var e = o.scrollPoints, t = e[0], n = e[1];
		if (!(!n || !t)) {
			var r = t.timeStamp - n.timeStamp;
			if (r <= 0) {
				ii && console.warn("invalid deltaTime");
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
		return e === 0 || e <= oi && e >= ai;
	}, b = function() {
		if (o.accelerationFactors.length >= ci) {
			if (c && (c = !1, Jr(o.axisVelocity) >= .2)) {
				x();
				return;
			}
			var e = o.accelerationFactors.slice(ci * -1);
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
		o = di(), o.isStarted = !0, o.startTime = Date.now(), l = void 0, c = !1;
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
	}, T = Zr(u), E = T.observe, ee = T.unobserve, te = T.disconnect;
	return d(e), Yr({
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
var pi = {
	active: !0,
	breakpoints: {},
	wheelDraggingClass: "is-wheel-dragging",
	forceWheelAxis: void 0,
	target: void 0
};
hi.globalOptions = void 0;
var mi = process.env.NODE_ENV !== "production";
function hi(e) {
	e === void 0 && (e = {});
	var t, n = function() {};
	function r(r, i) {
		var a = i.mergeOptions, o = i.optionsAtMedia;
		t = o(a(a(pi, hi.globalOptions), e));
		var s = r.internalEngine(), c = t.target ?? r.containerNode().parentNode, l = t.forceWheelAxis ?? s.options.axis, u = fi({
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
				return mi && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
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
function gi(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function _i(e) {
	return gi(e) || Array.isArray(e);
}
function vi() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function yi(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !_i(r) || !_i(i) ? r === i : yi(r, i);
	});
}
function bi(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function xi(e, t) {
	if (e.length !== t.length) return !1;
	let n = bi(e), r = bi(t);
	return n.every((e, t) => {
		let n = r[t];
		return yi(e, n);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel@8.6.0/node_modules/embla-carousel/esm/embla-carousel.esm.js
function Si(e) {
	return typeof e == "number";
}
function Ci(e) {
	return typeof e == "string";
}
function wi(e) {
	return typeof e == "boolean";
}
function Ti(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function V(e) {
	return Math.abs(e);
}
function Ei(e) {
	return Math.sign(e);
}
function Di(e, t) {
	return V(e - t);
}
function Oi(e, t) {
	return e === 0 || t === 0 || V(e) <= V(t) ? 0 : V(Di(V(e), V(t)) / e);
}
function ki(e) {
	return Math.round(e * 100) / 100;
}
function Ai(e) {
	return Fi(e).map(Number);
}
function ji(e) {
	return e[Mi(e)];
}
function Mi(e) {
	return Math.max(0, e.length - 1);
}
function Ni(e, t) {
	return t === Mi(e);
}
function Pi(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function Fi(e) {
	return Object.keys(e);
}
function Ii(e, t) {
	return [e, t].reduce((e, t) => (Fi(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = Ti(r) && Ti(i) ? Ii(r, i) : i;
	}), e), {});
}
function Li(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function Ri(e, t) {
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
		return Ci(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function zi() {
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
function Bi(e, t, n, r) {
	let i = zi(), a = 1e3 / 60, o = null, s = 0, c = 0;
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
function Vi(e, t) {
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
function Hi(e = 0, t = 0) {
	let n = V(e - t);
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
function Ui(e, t, n) {
	let { constrain: r } = Hi(0, e), i = e + 1, a = o(t);
	function o(e) {
		return n ? V((i + e) % i) : r(e);
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
		return Ui(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function Wi(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, x = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], S = { passive: !1 }, C = zi(), w = zi(), T = Hi(50, 225).constrain(p.measure(20)), E = {
		mouse: 300,
		touch: 400
	}, ee = {
		mouse: 500,
		touch: 600
	}, te = m ? 43 : 25, ne = !1, re = 0, ie = 0, ae = !1, D = !1, oe = !1, se = !1;
	function ce(e) {
		if (!v) return;
		function n(t) {
			(wi(v) || v(e, t)) && me(t);
		}
		let r = t;
		C.add(r, "dragstart", (e) => e.preventDefault(), S).add(r, "touchmove", () => void 0, S).add(r, "touchend", () => void 0).add(r, "touchstart", n).add(r, "mousedown", n).add(r, "touchcancel", O).add(r, "contextmenu", O).add(r, "click", k, !0);
	}
	function le() {
		C.clear(), w.clear();
	}
	function ue() {
		let e = se ? n : t;
		w.add(e, "touchmove", he, S).add(e, "touchend", O).add(e, "mousemove", he, S).add(e, "mouseup", O);
	}
	function de(e) {
		let t = e.nodeName || "";
		return x.includes(t);
	}
	function fe() {
		return (m ? ee : E)[se ? "mouse" : "touch"];
	}
	function pe(e, t) {
		let n = d.add(Ei(e) * -1), r = u.byDistance(e, !m).distance;
		return m || V(e) < T ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function me(e) {
		let t = Li(e, r);
		se = t, oe = m && t && !e.buttons && ne, ne = Di(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (de(e.target) || (ae = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), ue(), re = a.readPoint(e), ie = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function he(e) {
		if (!Li(e, r) && e.touches.length >= 2) return O(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = Di(t, re), c = Di(n, ie);
		if (!D && !se && (!e.cancelable || (D = o > c, !D))) return O(e);
		let u = a.pointerMove(e);
		o > h && (oe = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function O(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * fe(), r = pe(b(n), t), i = Oi(n, r), o = te - 10 * i, s = _ + i / 50;
		D = !1, ae = !1, w.clear(), l.useDuration(o).useFriction(s), c.distance(r, !m), se = !1, f.emit("pointerUp");
	}
	function k(e) {
		oe &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function A() {
		return ae;
	}
	return {
		init: ce,
		destroy: le,
		pointerDown: A
	};
}
function Gi(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (Li(n, t) ? n : n.touches[0])[i];
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
		return o && !s && V(c) > .1 ? c : 0;
	}
	return {
		pointerDown: o,
		pointerMove: s,
		pointerUp: c,
		readPoint: a
	};
}
function Ki() {
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
function qi(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function Ji(e, t, n, r, i, a, o) {
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
				if (V(f(n ? e : r[o]) - s) >= .5) {
					i.reInit(), t.emit("resize");
					break;
				}
			}
		}
		c = new ResizeObserver((e) => {
			(wi(a) || a(i, e)) && o(e);
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
function Yi(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = Ei(a), d = u, x;
	}
	function p() {
		return V(r.get() - t.get()) < .001;
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
function Xi(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = Hi(.1, .99), c = !1;
	function l() {
		return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
	}
	function u(i) {
		if (!l()) return;
		let c = V(e[e.reachedMin(t.get()) ? "min" : "max"] - t.get()), u = n.get() - t.get(), d = s.constrain(c / o);
		n.subtract(u * d), !i && V(u) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
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
function Zi(e, t, n, r, i) {
	let a = Hi(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return Di(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = ji(o);
		return Hi(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = Ni(n, t);
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
function Qi(e, t, n) {
	let r = t[0];
	return { limit: Hi(n ? r - e : ji(t), r) };
}
function $i(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = Hi(t.min + i, t.max + i);
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
function ea(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function ta(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => ji(e)[o] - e[0][a]).map(V);
	}
	function f() {
		return r.map((e) => n[a] - e[a]).map((e) => -V(e));
	}
	function p() {
		return s(l).map((e) => e[0]).map((e, t) => e + c[t]);
	}
	return {
		snaps: l,
		snapsAligned: u
	};
}
function na(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = Ni(n, t);
			return r ? Pi(ji(n[0]) + 1) : i ? Pi(Mi(a) - ji(n)[0] + 1, ji(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function ra(e, t, n, r, i) {
	let { reachedAny: a, removeOffset: o, constrain: s } = r;
	function c(e) {
		return e.concat().sort((e, t) => V(e) - V(t))[0];
	}
	function l(n) {
		let r = e ? o(n) : s(n), { index: i } = t.map((e, t) => ({
			diff: u(e - r, 0),
			index: t
		})).sort((e, t) => V(e.diff) - V(t.diff))[0];
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
		let a = i.filter((e) => Ei(e) === r);
		return a.length ? c(a) : ji(i) - n;
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
function ia(e, t, n, r, i, a, o) {
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
function aa(e, t, n, r, i, a, o, s) {
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
			Si(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(wi(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function oa(e) {
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
		return Si(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function sa(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = ki(e.direction(t));
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
function ca(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = Ai(i), d = Ai(i).reverse(), f = _().concat(v());
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
				slideLocation: oa(-1),
				translate: sa(e, c[t]),
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
function la(e, t, n) {
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
			i || (wi(n) || n(a, e)) && o(e);
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
function ua(e, t, n, r) {
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
		return Fi(i).reduce((t, n) => {
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
function da(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return V(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(ji(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = Ni(n, t);
			return r ? f[t] + u : i ? f[t] + d : n[t + 1][s] - e[s];
		}).map(V);
	}
	return {
		slideSizes: f,
		slideSizesWithGaps: p,
		startGap: u,
		endGap: d
	};
}
function fa(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = Si(n);
	function p(e, t) {
		return Ai(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? Ai(e).reduce((n, f, p) => {
			let m = ji(n) || 0, h = m === 0, g = f === Mi(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = V(v - (!r && g ? d(s) : 0) - (_ + y));
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
function pa(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = Ki(), w = C.measure(t), T = n.map(C.measure), E = Vi(c, l), ee = E.measureSize(w), te = qi(ee), ne = Ri(s, ee), re = !d && !!v, { slideSizes: ie, slideSizesWithGaps: ae, startGap: D, endGap: oe } = da(E, w, T, n, d || !!v, i), se = fa(E, ee, g, d, w, T, D, oe, 2), { snaps: ce, snapsAligned: le } = ta(E, ne, w, T, se), ue = -ji(ce) + ji(ae), { snapsContained: de, scrollContainLimit: fe } = Zi(ee, ue, le, v, 2), pe = re ? de : le, { limit: me } = Qi(ue, pe, d), he = Ui(Mi(pe), u, d), O = he.clone(), k = Ai(n), A = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, ge = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, _e = Bi(r, i, () => A(Me), (e) => ge(Me, e)), ve = .68, ye = pe[he.get()], be = oa(ye), xe = oa(ye), Se = oa(ye), Ce = oa(ye), we = Yi(be, Se, xe, Ce, f, ve), Te = ra(d, pe, ue, me, Ce), Ee = ia(_e, he, O, we, Te, Ce, o), De = ea(me), Oe = zi(), ke = ua(t, n, o, h), { slideRegistry: Ae } = na(re, v, pe, fe, se, k), je = aa(e, n, Ae, Ee, we, Oe, o, S), Me = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: _e,
		axis: E,
		dragHandler: Wi(E, e, r, i, Ce, Gi(E, i), be, _e, Ee, we, Te, he, o, te, p, m, _, ve, x),
		eventStore: Oe,
		percentOfView: te,
		index: he,
		indexPrevious: O,
		limit: me,
		location: be,
		offsetLocation: Se,
		previousLocation: xe,
		options: a,
		resizeHandler: Ji(t, o, i, n, E, y, C),
		scrollBody: we,
		scrollBounds: Xi(me, Se, Ce, we, te),
		scrollLooper: $i(ue, me, Se, [
			be,
			Se,
			xe,
			Ce
		]),
		scrollProgress: De,
		scrollSnapList: pe.map(De.get),
		scrollSnaps: pe,
		scrollTarget: Te,
		scrollTo: Ee,
		slideLooper: ca(E, ee, ue, ie, ae, ce, pe, Se, n),
		slideFocus: je,
		slidesHandler: la(t, o, b),
		slidesInView: ke,
		slideIndexes: k,
		slideRegistry: Ae,
		slidesToScroll: se,
		target: Ce,
		translate: sa(E, t)
	};
	return Me;
}
function ma() {
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
var ha = {
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
function ga(e) {
	function t(e, t) {
		return Ii(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, Fi(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => Fi(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function _a(e) {
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
function va(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = ga(i), o = _a(a), s = zi(), c = ma(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = ee, g = !1, _, v = l(ha, va.globalOptions), y = l(v), b = [], x, S, C;
	function w() {
		let { container: t, slides: n } = y;
		S = (Ci(t) ? e.querySelector(t) : t) || e.children[0];
		let r = Ci(n) ? S.querySelectorAll(n) : n;
		C = [].slice.call(r || S.children);
	}
	function T(t) {
		let n = pa(e, S, C, r, i, t, c);
		return t.loop && !n.slideLooper.canLoop() ? T(Object.assign({}, t, { loop: !1 })) : n;
	}
	function E(e, t) {
		g || (v = l(v, e), y = u(v), b = t || b, w(), _ = T(y), d([v, ...b.map(({ options: e }) => e)]).forEach((e) => s.add(e, "change", ee)), y.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(A), _.eventHandler.init(A), _.resizeHandler.init(A), _.slidesHandler.init(A), _.options.loop && _.slideLooper.loop(), S.offsetParent && C.length && _.dragHandler.init(A), x = o.init(A, b)));
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
	function O() {
		return S;
	}
	function k() {
		return C;
	}
	let A = {
		canScrollNext: D,
		canScrollPrev: oe,
		containerNode: O,
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
		slideNodes: k,
		slidesInView: de,
		slidesNotInView: fe
	};
	return E(t, n), setTimeout(() => c.emit("init"), 0), A;
}
va.globalOptions = void 0;
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel-react@8.6.0_react@18.3.1/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
function ya(e = {}, t = []) {
	let n = L(e), r = L(t), [i, a] = R(), [o, s] = R(), c = F(() => {
		i && i.reInit(n.current, r.current);
	}, [i]);
	return I(() => {
		yi(n.current, e) || (n.current = e, c());
	}, [e, c]), I(() => {
		xi(r.current, t) || (r.current = t, c());
	}, [t, c]), I(() => {
		if (vi() && o) {
			va.globalOptions = ya.globalOptions;
			let e = va(o, n.current, r.current);
			return a(e), () => e.destroy();
		}
		a(void 0);
	}, [o, a]), [s, i];
}
ya.globalOptions = void 0;
var ba = ({ children: e }) => {
	let t = L(null), [n, r] = R(!0), [i, a] = R(!1);
	Nr(() => {
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
	return l = i && n ? "linear-gradient(to right, transparent 0px, transparent 28px, black 56px, black calc(100% - 84px), transparent calc(100% - 56px), transparent 100%)" : i && !n ? "linear-gradient(to right, transparent 0px, transparent 28px, black 56px, black 100%)" : !i && n ? "linear-gradient(to right, black 0px, black calc(100% - 84px), transparent calc(100% - 56px), transparent 100%)" : "none", /* @__PURE__ */ B("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ z("div", {
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
				children: Array.isArray(e) ? e.map((e, t) => /* @__PURE__ */ z("div", {
					className: "flex-shrink-0",
					style: {
						scrollSnapAlign: "start",
						scrollSnapStop: "always",
						scrollMarginLeft: "44px"
					},
					children: e
				}, t)) : e && /* @__PURE__ */ z("div", {
					className: "flex-shrink-0",
					style: {
						scrollSnapAlign: "start",
						scrollSnapStop: "always",
						scrollMarginLeft: "44px"
					},
					children: e
				})
			}),
			i && /* @__PURE__ */ z(O, {
				size: "lg",
				compact: !0,
				variant: "outline",
				className: g("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
				onClick: s,
				icon: xe,
				label: "Previous",
				hideLabel: !0
			}),
			n && /* @__PURE__ */ z(O, {
				size: "lg",
				variant: "outline",
				compact: !0,
				className: g("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
				onClick: o,
				icon: Ft,
				label: "Next",
				hideLabel: !0
			})
		]
	});
}, xa = N.createContext(null);
function Sa() {
	let e = N.useContext(xa);
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
var Ca = N.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: n, plugins: r, className: i, children: a, ...o }, s) => {
	let [c, l] = ya({
		...t,
		axis: e === "horizontal" ? "x" : "y"
	}, r), [u, d] = N.useState(!1), [f, p] = N.useState(!1), m = N.useCallback((e) => {
		e && (d(e.canScrollPrev()), p(e.canScrollNext()));
	}, []), h = N.useCallback(() => {
		l?.scrollPrev();
	}, [l]), _ = N.useCallback(() => {
		l?.scrollNext();
	}, [l]), v = N.useCallback((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), h()) : e.key === "ArrowRight" && (e.preventDefault(), _());
	}, [h, _]);
	return N.useEffect(() => {
		!l || !n || n(l);
	}, [l, n]), N.useEffect(() => {
		if (l) return m(l), l.on("reInit", m), l.on("select", m), () => {
			l?.off("select", m);
		};
	}, [l, m]), /* @__PURE__ */ z(xa.Provider, {
		value: {
			carouselRef: c,
			api: l,
			opts: t,
			orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev: h,
			scrollNext: _,
			canScrollPrev: u,
			canScrollNext: f
		},
		children: /* @__PURE__ */ z("div", {
			ref: s,
			onKeyDownCapture: v,
			className: g("group/carousel relative", i),
			role: "region",
			"aria-roledescription": "carousel",
			...o,
			children: a
		})
	});
});
Ca.displayName = "Carousel";
var wa = N.forwardRef(({ className: e, ...t }, n) => {
	let r = "linear-gradient(to right, transparent 0px, transparent 14px, black 28px, black calc(100% - 28px), transparent calc(100% - 14px), transparent 100%)", { carouselRef: i, orientation: a } = Sa();
	return /* @__PURE__ */ z("div", {
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
		children: /* @__PURE__ */ z("div", {
			ref: n,
			className: g("flex", a === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
			...t
		})
	});
});
wa.displayName = "CarouselContent";
var Ta = N.forwardRef(({ className: e, ...t }, n) => {
	let { orientation: r } = Sa();
	return /* @__PURE__ */ z("div", {
		ref: n,
		role: "group",
		"aria-roledescription": "slide",
		className: g("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e),
		...t
	});
});
Ta.displayName = "CarouselItem";
var Ea = N.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
	let { orientation: i, scrollPrev: a, canScrollPrev: o } = Sa();
	return /* @__PURE__ */ z("div", {
		className: g("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", i === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
		children: /* @__PURE__ */ z(O, {
			compact: !0,
			ref: r,
			size: "sm",
			variant: t,
			className: g("absolute opacity-100 transition-all", e),
			disabled: !o,
			onClick: a,
			...n,
			label: "Previous",
			icon: Se,
			hideLabel: !0
		})
	});
});
Ea.displayName = "CarouselPrevious";
var Da = N.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
	let { orientation: i, scrollNext: a, canScrollNext: o } = Sa();
	return /* @__PURE__ */ z("div", {
		className: g("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", i === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
		children: /* @__PURE__ */ z(O, {
			ref: r,
			size: "sm",
			variant: t,
			compact: !0,
			className: g("absolute opacity-100 transition-all", e),
			disabled: !o,
			onClick: a,
			...n,
			label: "Next",
			icon: et,
			hideLabel: !0
		})
	});
});
Da.displayName = "CarouselNext";
var Oa = N.forwardRef(({ ...e }, t) => {
	let { api: n } = Sa(), [, r] = N.useState(!1), i = N.useRef(null), a = N.useCallback(() => {
		r((e) => !e);
	}, []);
	N.useEffect(() => {
		if (n) return n.on("select", a), n.on("reInit", a), () => {
			n.off("select", a), n.off("reInit", a);
		};
	}, [n, a]);
	let o = n?.scrollSnapList().length || 0, s = n?.selectedScrollSnap() || 0;
	if (N.useEffect(() => {
		if (!i.current) return;
		let e = i.current, t = s * 16 - e.clientWidth / 2 + 8;
		e.scrollTo({
			left: t,
			behavior: "smooth"
		});
	}, [s]), N.useEffect(() => {
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
	return /* @__PURE__ */ z("div", {
		ref: t,
		className: g("flex justify-center", e.className),
		children: /* @__PURE__ */ z("div", {
			className: "relative overflow-hidden",
			style: { width: `${u}px` },
			children: /* @__PURE__ */ z("div", {
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
				children: l.map((e) => /* @__PURE__ */ z("button", {
					className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
					"aria-label": `Go to slide ${e + 1}`,
					"aria-current": e === s ? "true" : void 0,
					onClick: () => n?.scrollTo(e),
					tabIndex: -1,
					children: /* @__PURE__ */ z("div", { className: g("h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]", e === s && "rounded-[3px] opacity-100 group-hover/dot:opacity-100", d(e)) })
				}, e))
			})
		})
	});
});
Oa.displayName = "CarouselDots";
var ka = (e) => e?.containerNode()?.childElementCount ?? 0, Aa = (e) => {
	let { api: t, canScrollNext: n, scrollNext: r } = Sa(), i = e?.hasMore ?? !1, a = e?.isLoading ?? !1, o = e?.onLoadMore, s = N.useRef({
		hasMore: i,
		isLoading: a,
		onLoadMore: o
	});
	s.current = {
		hasMore: i,
		isLoading: a,
		onLoadMore: o
	}, N.useEffect(() => {
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
	let [c, l] = N.useState(!1), u = N.useRef(a), d = N.useRef(0);
	return N.useEffect(() => {
		let e = u.current && !a;
		if (u.current = a, c) {
			if (n) {
				l(!1), r();
				return;
			}
			e && ka(t) <= d.current && l(!1);
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
			i && (d.current = ka(t), l(!0), a || o?.());
		}
	};
}, ja = N.forwardRef(({ className: e, labels: t, showDots: n = !0, paging: r, ...i }, a) => {
	let { scrollPrev: o, canScrollPrev: s } = Sa(), { canGoNext: c, goNext: l, isAwaitingPage: u } = Aa(r);
	return /* @__PURE__ */ B("div", {
		ref: a,
		className: g("flex flex-row items-center justify-between gap-2 pt-4", e),
		...i,
		children: [
			/* @__PURE__ */ z(O, {
				size: "md",
				variant: "outline",
				icon: xe,
				label: t?.previous ?? "Previous",
				hideLabel: !0,
				disabled: !s,
				onClick: o
			}),
			n ? /* @__PURE__ */ z(Oa, { className: "grow" }) : null,
			/* @__PURE__ */ z(O, {
				size: "md",
				variant: "outline",
				icon: Ft,
				label: t?.next ?? "Next",
				hideLabel: !0,
				loading: u,
				disabled: !c,
				onClick: l
			})
		]
	});
});
ja.displayName = "CarouselControls";
//#endregion
//#region src/experimental/Navigation/Carousel/types.ts
var Ma = r({
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
function Na(e, t, n) {
	if (n) {
		let n = (e || 1) / 2;
		return t ? `peek${n}` : n;
	}
	return t ? `peek${e || 1}` : e || 1;
}
var Pa = a(d("Carousel", ({ children: e, columns: t, showArrows: n = !0, showDots: r = !0, arrowsPlacement: i = "overlay", arrowLabels: a, paging: o, autoplay: s = !1, delay: c = 3e3, showPeek: l = !1, doubleColumns: u }) => {
	let d = P.Children.toArray(e), f = n && i === "bottom", p = P.useRef(s ? Br({
		delay: c,
		stopOnInteraction: !0
	}) : void 0);
	return t ? /* @__PURE__ */ z(Ca, {
		className: "flex w-full flex-col gap-3 @container",
		opts: {
			align: l ? "center" : "start",
			slidesToScroll: "auto",
			duration: 20,
			containScroll: !1
		},
		plugins: [p.current, hi()].filter(Boolean),
		onMouseEnter: s ? () => {
			p.current && p.current.stop();
		} : void 0,
		onMouseLeave: s ? () => {
			p.current && p.current.play();
		} : void 0,
		children: /* @__PURE__ */ B("div", {
			className: g("flex flex-col", !f && "gap-5"),
			children: [/* @__PURE__ */ B("div", {
				className: "relative",
				children: [/* @__PURE__ */ z(wa, { children: P.Children.map(d, (e, n) => {
					let r = u?.find((e) => e.index === n);
					return /* @__PURE__ */ z(Ta, {
						className: Ma({
							default: Na(t.default, l),
							xs: Na(t.xs, l, r?.sizes?.includes("xs")),
							sm: Na(t.sm, l, r?.sizes?.includes("sm")),
							md: Na(t.md, l, r?.sizes?.includes("md")),
							lg: Na(t.lg, l, r?.sizes?.includes("lg")),
							peek: l
						}),
						children: e
					}, n);
				}) }), n && !f && /* @__PURE__ */ B(Ir, { children: [/* @__PURE__ */ z(Ea, { label: a?.previous ?? "Previous" }), /* @__PURE__ */ z(Da, { label: a?.next ?? "Next" })] })]
			}), f ? /* @__PURE__ */ z(ja, {
				labels: a,
				showDots: r,
				paging: o
			}) : r && /* @__PURE__ */ z(Oa, {})]
		})
	}) : /* @__PURE__ */ z(ba, { children: e });
})), Fa = Or({
	enabled: !1,
	enable: () => null,
	disable: () => null,
	toggle: () => null
}), Ia = ({ initiallyEnabled: e = !1, children: t }) => {
	let [n, r] = R(e), i = F(() => {
		r(!0);
	}, []), a = F(() => r(!1), []), o = F(() => r((e) => !e), []);
	return /* @__PURE__ */ z(Fa.Provider, {
		value: {
			enable: i,
			disable: a,
			toggle: o,
			enabled: n
		},
		children: t
	});
}, La = () => {
	let e = Ar(Fa);
	if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
	return e;
}, Ra = ({ children: e }) => {
	let { enabled: t } = La();
	return /* @__PURE__ */ z("div", {
		className: g("inline-flex ring-1 ring-inset ring-transparent transition-all duration-150", t && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"),
		"aria-hidden": t,
		children: /* @__PURE__ */ z(f.div, {
			className: "h-full w-full",
			animate: {
				opacity: +!t,
				scale: t ? .95 : 1
			},
			transition: { duration: .15 },
			children: e
		})
	});
}, za = () => /* @__PURE__ */ z("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Ba = 480, Va = (e) => {
	let [t, n] = R(!1);
	return I(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > "u") return;
		let r = () => n(t.clientWidth >= Ba);
		r();
		let i = new ResizeObserver(r);
		return i.observe(t), () => i.disconnect();
	}, [e]), t;
}, Ha = P.createContext(!1), Ua = () => P.useContext(Ha), Wa = g("-mx-1.5 inline-flex min-w-0 items-center gap-1 rounded-sm px-1.5 py-0.5", "border-none bg-transparent text-left no-underline", "text-f1-foreground", "cursor-pointer transition-colors hover:bg-f1-background-secondary-hover", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"), Ga = ({ title: e, link: t, isWide: n }) => {
	let r = g("truncate", n && "text-lg font-semibold");
	if (!t) return /* @__PURE__ */ z(Xt, {
		className: r,
		children: e
	});
	let i = /* @__PURE__ */ B(Ir, { children: [/* @__PURE__ */ z(Xt, {
		className: r,
		children: e
	}), /* @__PURE__ */ z(l, {
		size: "sm",
		icon: t.icon ?? Ft
	})] }), a = t.url ? /* @__PURE__ */ z(ge, {
		href: t.url,
		onClick: t.onClick,
		"aria-label": t.title,
		className: Wa,
		...he(t.url) ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children: i
	}) : /* @__PURE__ */ z("button", {
		type: "button",
		onClick: t.onClick,
		"aria-label": t.title,
		className: Wa,
		children: i
	});
	return /* @__PURE__ */ z(m, {
		label: t.title,
		children: a
	});
}, Ka = kr(function({ header: e, children: t, action: n, footerClassName: r, summaries: i, alert: a, status: o, fullHeight: s = !1, actions: c, headerControls: d, AIButton: f, draggable: p = !1, onDragStart: h, onDragEnd: _, isDragging: v = !1, selected: y = !1 }, b) {
	let x = L(null), S = ue(b, x), C = Va(x);
	I(() => {
		if (!v || !_) return;
		let e = () => _();
		return document.addEventListener("mouseup", e), () => document.removeEventListener("mouseup", e);
	}, [v, _]);
	let w = u(), { enabled: T, toggle: ee } = La();
	return I(() => {
		if (a && o) throw Error("You cannot pass both alert and status at the same time to this component");
	}, [a, o]), /* @__PURE__ */ z(Ha.Provider, {
		value: C,
		children: /* @__PURE__ */ B(Ut, {
			className: g(s ? "h-full" : "", "relative flex gap-3 border-f1-border-secondary", p && "hover:border-f1-border-hover", y && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", v && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
			ref: S,
			children: [
				e && /* @__PURE__ */ z(Gt, {
					className: "-mr-1 -mt-1",
					children: /* @__PURE__ */ B("div", {
						className: "flex w-full flex-1 flex-col gap-4",
						children: [/* @__PURE__ */ B("div", {
							className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2",
							children: [
								p && /* @__PURE__ */ z("div", {
									className: "-ml-1 flex h-6 w-6 shrink-0 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
									onMouseDown: h,
									"data-gs-handle": "true",
									children: /* @__PURE__ */ z(l, {
										icon: ne,
										size: "xs"
									})
								}),
								/* @__PURE__ */ B("div", {
									className: "flex min-h-6 min-w-0 grow flex-row items-center gap-1",
									children: [
										e.title && /* @__PURE__ */ z(Ga, {
											title: e.title,
											link: e.link,
											isWide: C
										}),
										e.subtitle && /* @__PURE__ */ B("div", {
											className: "flex flex-row items-center gap-1",
											children: [/* @__PURE__ */ z(za, {}), /* @__PURE__ */ z(Vt, {
												className: "truncate",
												children: e.subtitle
											})]
										}),
										e.info && /* @__PURE__ */ z(m, {
											label: e.info,
											children: /* @__PURE__ */ z(l, {
												icon: Bt,
												size: "sm",
												className: "text-f1-foreground-secondary"
											})
										}),
										e.count && /* @__PURE__ */ z("div", {
											className: "ml-0.5",
											children: /* @__PURE__ */ z(me, { value: e.count })
										})
									]
								}),
								/* @__PURE__ */ B("div", {
									className: "flex flex-row items-center gap-3",
									children: [
										a && /* @__PURE__ */ z(Zt, {
											text: a,
											level: "critical"
										}),
										o && /* @__PURE__ */ z(It, {
											text: o.text,
											variant: o.variant
										}),
										d,
										f && /* @__PURE__ */ z(bt, {
											size: "sm",
											label: w.ai.ask,
											onClick: f,
											icon: pt
										}),
										c && /* @__PURE__ */ z(dn, {
											items: c,
											align: "end",
											children: /* @__PURE__ */ z(A, {
												icon: gn,
												label: "Actions",
												variant: "ghost",
												size: "sm",
												hideLabel: !0
											})
										})
									]
								})
							]
						}), e.comment && /* @__PURE__ */ B("div", {
							className: "flex flex-row items-center gap-3 overflow-visible",
							children: [/* @__PURE__ */ z(Ra, { children: /* @__PURE__ */ z(Jt, { children: e.comment }) }), !!e.canBeBlurred && /* @__PURE__ */ z("span", { children: /* @__PURE__ */ z(A, {
								icon: T ? vn : yn,
								hideLabel: !0,
								label: "hide/show",
								variant: "outline",
								onClick: ee,
								size: "sm"
							}) })]
						})]
					})
				}),
				/* @__PURE__ */ B(qt, {
					className: "flex h-full flex-col gap-4",
					children: [i && /* @__PURE__ */ z("div", {
						className: "flex flex-row",
						children: i.map((e, t) => /* @__PURE__ */ B("div", {
							className: "grow",
							children: [/* @__PURE__ */ z("div", {
								className: "mb-0.5 text-sm text-f1-foreground-secondary",
								children: e.label
							}), /* @__PURE__ */ B("div", {
								className: "flex flex-row items-end gap-0.5 text-2xl font-semibold",
								children: [
									!!e.prefixUnit && /* @__PURE__ */ z("div", {
										className: "text-lg font-medium",
										children: e.prefixUnit
									}),
									e.value,
									!!e.postfixUnit && /* @__PURE__ */ z("div", {
										className: "text-lg font-medium",
										children: e.postfixUnit
									})
								]
							})]
						}, t))
					}), P.Children.toArray(t).filter((e) => !!e && !(P.isValidElement(e) && e.type === P.Fragment && P.Children.count(e.props.children) === 0)).map((e, t) => /* @__PURE__ */ B(P.Fragment, { children: [t > 0 && /* @__PURE__ */ z(E, { bare: !0 }), e] }, t))]
				}),
				n && /* @__PURE__ */ z(Yt, {
					className: g(r),
					children: /* @__PURE__ */ z(A, {
						variant: C ? "outline" : "neutral",
						size: C ? "md" : "sm",
						...n
					})
				})
			]
		})
	});
}), qa = r({ variants: { height: {
	sm: "h-36",
	md: "h-48",
	lg: "h-60"
} } }), Ja = kr(function({ header: e, height: t }, n) {
	return /* @__PURE__ */ B(Ut, {
		className: g("flex gap-4 border-f1-border-secondary", t === "full" && "h-full"),
		ref: n,
		"aria-live": "polite",
		"aria-busy": !0,
		children: [/* @__PURE__ */ z(Gt, {
			className: "-mr-1 -mt-1",
			children: /* @__PURE__ */ B("div", {
				className: "flex h-6 w-full flex-row items-center gap-1.5",
				"aria-hidden": !0,
				children: [e?.title ? /* @__PURE__ */ z(Xt, { children: e.title }) : /* @__PURE__ */ z(k, { className: "h-4 w-full max-w-16" }), e?.subtitle && /* @__PURE__ */ z(Vt, { children: e.subtitle })]
			})
		}), /* @__PURE__ */ z(qt, {
			"aria-hidden": !0,
			className: g(t !== "full" && qa({ height: t })),
			children: [...[
				,
				,
				,
				,
			]].map((e, t) => /* @__PURE__ */ z(k, { className: `mb-1 h-6 ${[
				"w-full",
				"w-1/2",
				"w-3/4",
				"w-1/4"
			][t]}` }, t))
		})]
	});
}), Ya = a(d("Widget", Cr(Ka, Ja))), Xa = /* @__PURE__ */ e(_e()), Za = /* @__PURE__ */ e(ye()), H = /* @__PURE__ */ e(ut()), Qa = [
	"points",
	"className",
	"baseLinePoints",
	"connectNulls"
];
function $a() {
	return $a = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, $a.apply(this, arguments);
}
function eo(e, t) {
	if (e == null) return {};
	var n = to(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function to(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function no(e) {
	return oo(e) || ao(e) || io(e) || ro();
}
function ro() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function io(e, t) {
	if (e) {
		if (typeof e == "string") return so(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return so(e, t);
	}
}
function ao(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function oo(e) {
	if (Array.isArray(e)) return so(e);
}
function so(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var co = function(e) {
	return e && e.x === +e.x && e.y === +e.y;
}, lo = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [[]];
	return e.forEach(function(e) {
		co(e) ? t[t.length - 1].push(e) : t[t.length - 1].length > 0 && t.push([]);
	}), co(e[0]) && t[t.length - 1].push(e[0]), t[t.length - 1].length <= 0 && (t = t.slice(0, -1)), t;
}, uo = function(e, t) {
	var n = lo(e);
	t && (n = [n.reduce(function(e, t) {
		return [].concat(no(e), no(t));
	}, [])]);
	var r = n.map(function(e) {
		return e.reduce(function(e, t, n) {
			return `${e}${n === 0 ? "M" : "L"}${t.x},${t.y}`;
		}, "");
	}).join("");
	return n.length === 1 ? `${r}Z` : r;
}, fo = function(e, t, n) {
	var r = uo(e, n);
	return `${r.slice(-1) === "Z" ? r.slice(0, -1) : r}L${uo(t.reverse(), n).slice(1)}`;
}, po = function(e) {
	var t = e.points, r = e.className, i = e.baseLinePoints, a = e.connectNulls, o = eo(e, Qa);
	if (!t || !t.length) return null;
	var s = n("recharts-polygon", r);
	if (i && i.length) {
		var c = o.stroke && o.stroke !== "none", l = fo(t, i, a);
		return /*#__PURE__*/ P.createElement("g", { className: s }, /*#__PURE__*/ P.createElement("path", $a({}, j(o, !0), {
			fill: l.slice(-1) === "Z" ? o.fill : "none",
			stroke: "none",
			d: l
		})), c ? /*#__PURE__*/ P.createElement("path", $a({}, j(o, !0), {
			fill: "none",
			d: uo(t, a)
		})) : null, c ? /*#__PURE__*/ P.createElement("path", $a({}, j(o, !0), {
			fill: "none",
			d: uo(i, a)
		})) : null);
	}
	var u = uo(t, a);
	return /*#__PURE__*/ P.createElement("path", $a({}, j(o, !0), {
		fill: u.slice(-1) === "Z" ? o.fill : "none",
		className: s,
		d: u
	}));
}, mo = [
	"cx",
	"cy",
	"innerRadius",
	"outerRadius",
	"gridType",
	"radialLines"
];
function ho(e) {
	"@babel/helpers - typeof";
	return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, ho(e);
}
function go(e, t) {
	if (e == null) return {};
	var n = _o(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function _o(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function vo() {
	return vo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, vo.apply(this, arguments);
}
function yo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function bo(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? yo(Object(n), !0).forEach(function(t) {
			xo(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function xo(e, t, n) {
	return t = So(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function So(e) {
	var t = Co(e, "string");
	return ho(t) == "symbol" ? t : t + "";
}
function Co(e, t) {
	if (ho(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (ho(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var wo = function(e, t, n, r) {
	var i = "";
	return r.forEach(function(r, a) {
		var o = He(t, n, e, r);
		i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
	}), i += "Z", i;
}, To = function(e) {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.polarAngles, o = e.radialLines;
	if (!a || !a.length || !o) return null;
	var s = bo({ stroke: "#ccc" }, j(e, !1));
	return /*#__PURE__*/ P.createElement("g", { className: "recharts-polar-grid-angle" }, a.map(function(e) {
		var a = He(t, n, r, e), o = He(t, n, i, e);
		return /*#__PURE__*/ P.createElement("line", vo({}, s, {
			key: `line-${e}`,
			x1: a.x,
			y1: a.y,
			x2: o.x,
			y2: o.y
		}));
	}));
}, Eo = function(e) {
	var t = e.cx, r = e.cy, i = e.radius, a = e.index, o = bo(bo({ stroke: "#ccc" }, j(e, !1)), {}, { fill: "none" });
	return /*#__PURE__*/ P.createElement("circle", vo({}, o, {
		className: n("recharts-polar-grid-concentric-circle", e.className),
		key: `circle-${a}`,
		cx: t,
		cy: r,
		r: i
	}));
}, Do = function(e) {
	var t = e.radius, r = e.index, i = bo(bo({ stroke: "#ccc" }, j(e, !1)), {}, { fill: "none" });
	return /*#__PURE__*/ P.createElement("path", vo({}, i, {
		className: n("recharts-polar-grid-concentric-polygon", e.className),
		key: `path-${r}`,
		d: wo(t, e.cx, e.cy, e.polarAngles)
	}));
}, Oo = function(e) {
	var t = e.polarRadius, n = e.gridType;
	return !t || !t.length ? null : /*#__PURE__*/ P.createElement("g", { className: "recharts-polar-grid-concentric" }, t.map(function(t, r) {
		var i = r;
		return n === "circle" ? /*#__PURE__*/ P.createElement(Eo, vo({ key: i }, e, {
			radius: t,
			index: r
		})) : /*#__PURE__*/ P.createElement(Do, vo({ key: i }, e, {
			radius: t,
			index: r
		}));
	}));
}, ko = function(e) {
	var t = e.cx, n = t === void 0 ? 0 : t, r = e.cy, i = r === void 0 ? 0 : r, a = e.innerRadius, o = a === void 0 ? 0 : a, s = e.outerRadius, c = s === void 0 ? 0 : s, l = e.gridType, u = l === void 0 ? "polygon" : l, d = e.radialLines, f = d === void 0 || d, p = go(e, mo);
	return c <= 0 ? null : /*#__PURE__*/ P.createElement("g", { className: "recharts-polar-grid" }, /*#__PURE__*/ P.createElement(To, vo({
		cx: n,
		cy: i,
		innerRadius: o,
		outerRadius: c,
		gridType: u,
		radialLines: f
	}, p)), /*#__PURE__*/ P.createElement(Oo, vo({
		cx: n,
		cy: i,
		innerRadius: o,
		outerRadius: c,
		gridType: u,
		radialLines: f
	}, p)));
};
ko.displayName = "PolarGrid";
//#endregion
//#region ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/maxBy.js
var Ao = /* @__PURE__ */ t(((e, t) => {
	var n = Ne(), r = Ye(), i = Ue();
	function a(e, t) {
		return e && e.length ? n(e, i(t, 2), r) : void 0;
	}
	t.exports = a;
})), jo = /* @__PURE__ */ t(((e, t) => {
	var n = Ne(), r = Ue(), i = Ee();
	function a(e, t) {
		return e && e.length ? n(e, r(t, 2), i) : void 0;
	}
	t.exports = a;
})), Mo = /* @__PURE__ */ e(Ao()), No = /* @__PURE__ */ e(jo()), Po = [
	"cx",
	"cy",
	"angle",
	"ticks",
	"axisLine"
], Fo = [
	"ticks",
	"tick",
	"angle",
	"tickFormatter",
	"stroke"
];
function Io(e) {
	"@babel/helpers - typeof";
	return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Io(e);
}
function Lo() {
	return Lo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Lo.apply(this, arguments);
}
function Ro(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function zo(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ro(Object(n), !0).forEach(function(t) {
			Qo(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ro(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Bo(e, t) {
	if (e == null) return {};
	var n = Vo(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Vo(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Ho(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Uo(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, $o(r.key), r);
	}
}
function Wo(e, t, n) {
	return t && Uo(e.prototype, t), n && Uo(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Go(e, t, n) {
	return t = Yo(t), Ko(e, Jo() ? Reflect.construct(t, n || [], Yo(e).constructor) : t.apply(e, n));
}
function Ko(e, t) {
	if (t && (Io(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return qo(e);
}
function qo(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Jo() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Jo = function() {
		return !!e;
	})();
}
function Yo(e) {
	return Yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Yo(e);
}
function Xo(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zo(e, t);
}
function Zo(e, t) {
	return Zo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Zo(e, t);
}
function Qo(e, t, n) {
	return t = $o(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function $o(e) {
	var t = es(e, "string");
	return Io(t) == "symbol" ? t : t + "";
}
function es(e, t) {
	if (Io(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Io(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ts = /*#__PURE__*/ function(e) {
	function t() {
		return Ho(this, t), Go(this, t, arguments);
	}
	return Xo(t, e), Wo(t, [
		{
			key: "getTickValueCoord",
			value: function(e) {
				var t = e.coordinate, n = this.props, r = n.angle, i = n.cx, a = n.cy;
				return He(i, a, t, r);
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
				var e = this.props, t = e.cx, n = e.cy, r = e.angle, i = e.ticks, a = (0, Mo.default)(i, function(e) {
					return e.coordinate || 0;
				});
				return {
					cx: t,
					cy: n,
					startAngle: r,
					endAngle: r,
					innerRadius: (0, No.default)(i, function(e) {
						return e.coordinate || 0;
					}).coordinate || 0,
					outerRadius: a.coordinate || 0
				};
			}
		},
		{
			key: "renderAxisLine",
			value: function() {
				var e = this.props, t = e.cx, n = e.cy, r = e.angle, i = e.ticks, a = e.axisLine, o = Bo(e, Po), s = i.reduce(function(e, t) {
					return [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)];
				}, [Infinity, -Infinity]), c = He(t, n, s[0], r), l = He(t, n, s[1], r), u = zo(zo(zo({}, j(o, !1)), {}, { fill: "none" }, j(a, !1)), {}, {
					x1: c.x,
					y1: c.y,
					x2: l.x,
					y2: l.y
				});
				return /*#__PURE__*/ P.createElement("line", Lo({ className: "recharts-polar-radius-axis-line" }, u));
			}
		},
		{
			key: "renderTicks",
			value: function() {
				var e = this, r = this.props, i = r.ticks, a = r.tick, o = r.angle, s = r.tickFormatter, c = r.stroke, l = Bo(r, Fo), u = this.getTickTextAnchor(), d = j(l, !1), f = j(a, !1), p = i.map(function(r, i) {
					var l = e.getTickValueCoord(r), p = zo(zo(zo(zo({
						textAnchor: u,
						transform: `rotate(${90 - o}, ${l.x}, ${l.y})`
					}, d), {}, {
						stroke: "none",
						fill: c
					}, f), {}, { index: i }, l), {}, { payload: r });
					return /*#__PURE__*/ P.createElement(M, Lo({
						className: n("recharts-polar-radius-axis-tick", Be(a)),
						key: `tick-${r.coordinate}`
					}, rt(e.props, r, i)), t.renderTickItem(a, p, s ? s(r.value, i) : r.value));
				});
				return /*#__PURE__*/ P.createElement(M, { className: "recharts-polar-radius-axis-ticks" }, p);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.ticks, r = e.axisLine, i = e.tick;
				return !t || !t.length ? null : /*#__PURE__*/ P.createElement(M, { className: n("recharts-polar-radius-axis", this.props.className) }, r && this.renderAxisLine(), i && this.renderTicks(), Te.renderCallByParent(this.props, this.getViewBox()));
			}
		}
	], [{
		key: "renderTickItem",
		value: function(e, t, n) {
			return /*#__PURE__*/ P.isValidElement(e) ? /*#__PURE__*/ P.cloneElement(e, t) : (0, Xa.default)(e) ? e(t) : /*#__PURE__*/ P.createElement(qe, Lo({}, t, { className: "recharts-polar-radius-axis-tick-value" }), n);
		}
	}]);
}(Dr);
Qo(ts, "displayName", "PolarRadiusAxis"), Qo(ts, "axisType", "radiusAxis"), Qo(ts, "defaultProps", {
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
function ns(e) {
	"@babel/helpers - typeof";
	return ns = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, ns(e);
}
function rs() {
	return rs = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, rs.apply(this, arguments);
}
function is(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function as(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? is(Object(n), !0).forEach(function(t) {
			gs(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : is(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function os(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function ss(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _s(r.key), r);
	}
}
function cs(e, t, n) {
	return t && ss(e.prototype, t), n && ss(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ls(e, t, n) {
	return t = ps(t), us(e, fs() ? Reflect.construct(t, n || [], ps(e).constructor) : t.apply(e, n));
}
function us(e, t) {
	if (t && (ns(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return ds(e);
}
function ds(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function fs() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (fs = function() {
		return !!e;
	})();
}
function ps(e) {
	return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, ps(e);
}
function ms(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hs(e, t);
}
function hs(e, t) {
	return hs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, hs(e, t);
}
function gs(e, t, n) {
	return t = _s(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _s(e) {
	var t = vs(e, "string");
	return ns(t) == "symbol" ? t : t + "";
}
function vs(e, t) {
	if (ns(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (ns(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ys = Math.PI / 180, bs = 1e-5, xs = /*#__PURE__*/ function(e) {
	function t() {
		return os(this, t), ls(this, t, arguments);
	}
	return ms(t, e), cs(t, [
		{
			key: "getTickLineCoord",
			value: function(e) {
				var t = this.props, n = t.cx, r = t.cy, i = t.radius, a = t.orientation, o = t.tickSize || 8, s = He(n, r, i, e.coordinate), c = He(n, r, i + (a === "inner" ? -1 : 1) * o, e.coordinate);
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
				var t = this.props.orientation, n = Math.cos(-e.coordinate * ys);
				return n > bs ? t === "outer" ? "start" : "end" : n < -bs ? t === "outer" ? "end" : "start" : "middle";
			}
		},
		{
			key: "renderAxisLine",
			value: function() {
				var e = this.props, t = e.cx, n = e.cy, r = e.radius, i = e.axisLine, a = e.axisLineType, o = as(as({}, j(this.props, !1)), {}, { fill: "none" }, j(i, !1));
				if (a === "circle") return /*#__PURE__*/ P.createElement(At, rs({ className: "recharts-polar-angle-axis-line" }, o, {
					cx: t,
					cy: n,
					r
				}));
				var s = this.props.ticks.map(function(e) {
					return He(t, n, r, e.coordinate);
				});
				return /*#__PURE__*/ P.createElement(po, rs({ className: "recharts-polar-angle-axis-line" }, o, { points: s }));
			}
		},
		{
			key: "renderTicks",
			value: function() {
				var e = this, r = this.props, i = r.ticks, a = r.tick, o = r.tickLine, s = r.tickFormatter, c = r.stroke, l = j(this.props, !1), u = j(a, !1), d = as(as({}, l), {}, { fill: "none" }, j(o, !1)), f = i.map(function(r, i) {
					var f = e.getTickLineCoord(r), p = as(as(as({ textAnchor: e.getTickTextAnchor(r) }, l), {}, {
						stroke: "none",
						fill: c
					}, u), {}, {
						index: i,
						payload: r,
						x: f.x2,
						y: f.y2
					});
					return /*#__PURE__*/ P.createElement(M, rs({
						className: n("recharts-polar-angle-axis-tick", Be(a)),
						key: `tick-${r.coordinate}`
					}, rt(e.props, r, i)), o && /*#__PURE__*/ P.createElement("line", rs({ className: "recharts-polar-angle-axis-tick-line" }, d, f)), a && t.renderTickItem(a, p, s ? s(r.value, i) : r.value));
				});
				return /*#__PURE__*/ P.createElement(M, { className: "recharts-polar-angle-axis-ticks" }, f);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.ticks, r = e.radius, i = e.axisLine;
				return r <= 0 || !t || !t.length ? null : /*#__PURE__*/ P.createElement(M, { className: n("recharts-polar-angle-axis", this.props.className) }, i && this.renderAxisLine(), this.renderTicks());
			}
		}
	], [{
		key: "renderTickItem",
		value: function(e, t, n) {
			return /*#__PURE__*/ P.isValidElement(e) ? /*#__PURE__*/ P.cloneElement(e, t) : (0, Xa.default)(e) ? e(t) : /*#__PURE__*/ P.createElement(qe, rs({}, t, { className: "recharts-polar-angle-axis-tick-value" }), n);
		}
	}]);
}(Dr);
gs(xs, "displayName", "PolarAngleAxis"), gs(xs, "axisType", "angleAxis"), gs(xs, "defaultProps", {
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
var Ss = /* @__PURE__ */ e(Ct()), Cs;
function ws(e) {
	"@babel/helpers - typeof";
	return ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, ws(e);
}
function Ts() {
	return Ts = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ts.apply(this, arguments);
}
function Es(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function U(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Es(Object(n), !0).forEach(function(t) {
			Ls(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Es(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ds(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Os(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Rs(r.key), r);
	}
}
function ks(e, t, n) {
	return t && Os(e.prototype, t), n && Os(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function As(e, t, n) {
	return t = Ps(t), js(e, Ns() ? Reflect.construct(t, n || [], Ps(e).constructor) : t.apply(e, n));
}
function js(e, t) {
	if (t && (ws(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Ms(e);
}
function Ms(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Ns() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Ns = function() {
		return !!e;
	})();
}
function Ps(e) {
	return Ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Ps(e);
}
function Fs(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Is(e, t);
}
function Is(e, t) {
	return Is = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Is(e, t);
}
function Ls(e, t, n) {
	return t = Rs(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Rs(e) {
	var t = zs(e, "string");
	return ws(t) == "symbol" ? t : t + "";
}
function zs(e, t) {
	if (ws(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (ws(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Bs = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Ds(this, t), n = As(this, t, [e]), Ls(n, "pieRef", null), Ls(n, "sectorRefs", []), Ls(n, "id", st("recharts-pie-")), Ls(n, "handleAnimationEnd", function() {
			var e = n.props.onAnimationEnd;
			n.setState({ isAnimationFinished: !0 }), (0, Xa.default)(e) && e();
		}), Ls(n, "handleAnimationStart", function() {
			var e = n.props.onAnimationStart;
			n.setState({ isAnimationFinished: !1 }), (0, Xa.default)(e) && e();
		}), n.state = {
			isAnimationFinished: !e.isAnimationActive,
			prevIsAnimationActive: e.isAnimationActive,
			prevAnimationId: e.animationId,
			sectorToFocus: 0
		}, n;
	}
	return Fs(t, e), ks(t, [
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
				var n = this.props, r = n.label, i = n.labelLine, a = n.dataKey, o = n.valueKey, s = j(this.props, !1), c = j(r, !1), l = j(i, !1), u = r && r.offsetRadius || 20, d = e.map(function(e, n) {
					var d = (e.startAngle + e.endAngle) / 2, f = He(e.cx, e.cy, e.outerRadius + u, d), p = U(U(U(U({}, s), e), {}, { stroke: "none" }, c), {}, {
						index: n,
						textAnchor: t.getTextAnchor(f.x, e.cx)
					}, f), m = U(U(U(U({}, s), e), {}, {
						fill: "none",
						stroke: e.fill
					}, l), {}, {
						index: n,
						points: [He(e.cx, e.cy, e.outerRadius, d), f]
					}), h = a;
					return (0, H.default)(a) && (0, H.default)(o) ? h = "value" : (0, H.default)(a) && (h = o), /*#__PURE__*/ P.createElement(M, { key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${n}` }, i && t.renderLabelLineItem(i, m, "line"), t.renderLabelItem(r, p, We(e, h)));
				});
				return /*#__PURE__*/ P.createElement(M, { className: "recharts-pie-labels" }, d);
			}
		},
		{
			key: "renderSectorsStatically",
			value: function(e) {
				var t = this, n = this.props, r = n.activeShape, i = n.blendStroke, a = n.inactiveShape;
				return e.map(function(n, o) {
					if (n?.startAngle === 0 && n?.endAngle === 0 && e.length !== 1) return null;
					var s = t.isActiveIndex(o), c = a && t.hasActiveIndex() ? a : null, l = s ? r : c, u = U(U({}, n), {}, {
						stroke: i ? n.fill : n.stroke,
						tabIndex: -1
					});
					return /*#__PURE__*/ P.createElement(M, Ts({
						ref: function(e) {
							e && !t.sectorRefs.includes(e) && t.sectorRefs.push(e);
						},
						tabIndex: -1,
						className: "recharts-pie-sector"
					}, rt(t.props, n, o), { key: `sector-${n?.startAngle}-${n?.endAngle}-${n.midAngle}-${o}` }), /*#__PURE__*/ P.createElement(Oe, Ts({
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
				return /*#__PURE__*/ P.createElement(Ae, {
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
						var n = l && l[t], o = t > 0 ? (0, Ss.default)(e, "paddingAngle", 0) : 0;
						if (n) {
							var s = at(n.endAngle - n.startAngle, e.endAngle - e.startAngle), c = U(U({}, e), {}, {
								startAngle: a + o,
								endAngle: a + s(r) + o
							});
							i.push(c), a = c.endAngle;
						} else {
							var u = e.endAngle, d = e.startAngle, f = at(0, u - d)(r), p = U(U({}, e), {}, {
								startAngle: a + o,
								endAngle: a + f + o
							});
							i.push(p), a = p.endAngle;
						}
					}), /*#__PURE__*/ P.createElement(M, null, e.renderSectorsStatically(i));
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
				return n && t && t.length && (!r || !(0, Za.default)(r, t)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(t);
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
				if (r || !i || !i.length || !vt(s) || !vt(c) || !vt(l) || !vt(u)) return null;
				var p = n("recharts-pie", a);
				return /*#__PURE__*/ P.createElement(M, {
					tabIndex: this.props.rootTabIndex,
					className: p,
					ref: function(t) {
						e.pieRef = t;
					}
				}, this.renderSectors(), o && this.renderLabels(i), Te.renderCallByParent(this.props, null, !1), (!d || f) && Ve.renderCallByParent(this.props, i, !1));
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
				if (/*#__PURE__*/ P.isValidElement(e)) return /*#__PURE__*/ P.cloneElement(e, t);
				if ((0, Xa.default)(e)) return e(t);
				var i = n("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
				return /*#__PURE__*/ P.createElement(ke, Ts({}, t, {
					key: r,
					type: "linear",
					className: i
				}));
			}
		},
		{
			key: "renderLabelItem",
			value: function(e, t, r) {
				if (/*#__PURE__*/ P.isValidElement(e)) return /*#__PURE__*/ P.cloneElement(e, t);
				var i = r;
				if ((0, Xa.default)(e) && (i = e(t), /*#__PURE__*/ P.isValidElement(i))) return i;
				var a = n("recharts-pie-label-text", typeof e != "boolean" && !(0, Xa.default)(e) ? e.className : "");
				return /*#__PURE__*/ P.createElement(qe, Ts({}, t, {
					alignmentBaseline: "middle",
					className: a
				}), i);
			}
		}
	]);
}(Dr);
Cs = Bs, Ls(Bs, "displayName", "Pie"), Ls(Bs, "defaultProps", {
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
	isAnimationActive: !Ie.isSsr,
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	nameKey: "name",
	blendStroke: !1,
	rootTabIndex: 0
}), Ls(Bs, "parseDeltaAngle", function(e, t) {
	return Ot(t - e) * Math.min(Math.abs(t - e), 360);
}), Ls(Bs, "getRealPieData", function(e) {
	var t = e.data, n = e.children, r = j(e, !1), i = Tt(n, Ze);
	return t && t.length ? t.map(function(e, t) {
		return U(U(U({ payload: e }, r), e), i && i[t] && i[t].props);
	}) : i && i.length ? i.map(function(e) {
		return U(U({}, r), e.props);
	}) : [];
}), Ls(Bs, "parseCoordinateOfPie", function(e, t) {
	var n = t.top, r = t.left, i = t.width, a = t.height, o = ze(i, a);
	return {
		cx: r + Et(e.cx, i, i / 2),
		cy: n + Et(e.cy, a, a / 2),
		innerRadius: Et(e.innerRadius, o, 0),
		outerRadius: Et(e.outerRadius, o, o * .8),
		maxRadius: e.maxRadius || Math.sqrt(i * i + a * a) / 2
	};
}), Ls(Bs, "getComposedData", function(e) {
	var t = e.item, n = e.offset, r = t.type.defaultProps === void 0 ? t.props : U(U({}, t.type.defaultProps), t.props), i = Cs.getRealPieData(r);
	if (!i || !i.length) return null;
	var a = r.cornerRadius, o = r.startAngle, s = r.endAngle, c = r.paddingAngle, l = r.dataKey, u = r.nameKey, d = r.valueKey, f = r.tooltipType, p = Math.abs(r.minAngle), m = Cs.parseCoordinateOfPie(r, n), h = Cs.parseDeltaAngle(o, s), g = Math.abs(h), _ = l;
	(0, H.default)(l) && (0, H.default)(d) ? (ct(!1, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0"), _ = "value") : (0, H.default)(l) && (ct(!1, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0"), _ = d);
	var v = i.filter(function(e) {
		return We(e, _, 0) !== 0;
	}).length, y = (g >= 360 ? v : v - 1) * c, b = g - v * p - y, x = i.reduce(function(e, t) {
		var n = We(t, _, 0);
		return e + (vt(n) ? n : 0);
	}, 0), S;
	if (x > 0) {
		var C;
		S = i.map(function(e, t) {
			var n = We(e, _, 0), r = We(e, u, t), i = (vt(n) ? n : 0) / x, s = t ? C.endAngle + Ot(h) * c * (n === 0 ? 0 : 1) : o, l = s + Ot(h) * ((n === 0 ? 0 : p) + i * b), d = (s + l) / 2, g = (m.innerRadius + m.outerRadius) / 2;
			return C = U(U(U({
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
				tooltipPosition: He(m.cx, m.cy, g, d)
			}, e), m), {}, {
				value: We(e, _),
				startAngle: s,
				endAngle: l,
				payload: e,
				paddingAngle: Ot(h) * c
			}), C;
		});
	}
	return U(U({}, m), {}, {
		sectors: S,
		data: i
	});
});
//#endregion
//#region ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/head.js
var Vs = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return e && e.length ? e[0] : void 0;
	}
	t.exports = n;
})), Hs = /* @__PURE__ */ t(((e, t) => {
	t.exports = Vs();
})), Us = /* @__PURE__ */ e(gt()), Ws = /* @__PURE__ */ e(Hs()), Gs = ["key"];
function Ks(e) {
	"@babel/helpers - typeof";
	return Ks = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ks(e);
}
function qs(e, t) {
	if (e == null) return {};
	var n = Js(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Js(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Ys() {
	return Ys = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ys.apply(this, arguments);
}
function Xs(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Zs(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Xs(Object(n), !0).forEach(function(t) {
			cc(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xs(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Qs(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function $s(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, lc(r.key), r);
	}
}
function ec(e, t, n) {
	return t && $s(e.prototype, t), n && $s(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tc(e, t, n) {
	return t = ac(t), nc(e, ic() ? Reflect.construct(t, n || [], ac(e).constructor) : t.apply(e, n));
}
function nc(e, t) {
	if (t && (Ks(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return rc(e);
}
function rc(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ic() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ic = function() {
		return !!e;
	})();
}
function ac(e) {
	return ac = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, ac(e);
}
function oc(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sc(e, t);
}
function sc(e, t) {
	return sc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, sc(e, t);
}
function cc(e, t, n) {
	return t = lc(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function lc(e) {
	var t = uc(e, "string");
	return Ks(t) == "symbol" ? t : t + "";
}
function uc(e, t) {
	if (Ks(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ks(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var dc = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		Qs(this, t);
		var n = [...arguments];
		return e = tc(this, t, [].concat(n)), cc(e, "state", { isAnimationFinished: !1 }), cc(e, "handleAnimationEnd", function() {
			var t = e.props.onAnimationEnd;
			e.setState({ isAnimationFinished: !0 }), (0, Xa.default)(t) && t();
		}), cc(e, "handleAnimationStart", function() {
			var t = e.props.onAnimationStart;
			e.setState({ isAnimationFinished: !1 }), (0, Xa.default)(t) && t();
		}), cc(e, "handleMouseEnter", function(t) {
			var n = e.props.onMouseEnter;
			n && n(e.props, t);
		}), cc(e, "handleMouseLeave", function(t) {
			var n = e.props.onMouseLeave;
			n && n(e.props, t);
		}), e;
	}
	return oc(t, e), ec(t, [
		{
			key: "renderDots",
			value: function(e) {
				var n = this.props, r = n.dot, i = n.dataKey, a = j(this.props, !1), o = j(r, !0), s = e.map(function(e, n) {
					var s = Zs(Zs(Zs({
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
				return /*#__PURE__*/ P.createElement(M, { className: "recharts-radar-dots" }, s);
			}
		},
		{
			key: "renderPolygonStatically",
			value: function(e) {
				var t = this.props, n = t.shape, r = t.dot, i = t.isRange, a = t.baseLinePoints, o = t.connectNulls, s = /*#__PURE__*/ P.isValidElement(n) ? /*#__PURE__*/ P.cloneElement(n, Zs(Zs({}, this.props), {}, { points: e })) : (0, Xa.default)(n) ? n(Zs(Zs({}, this.props), {}, { points: e })) : /*#__PURE__*/ P.createElement(po, Ys({}, j(this.props, !0), {
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					points: e,
					baseLinePoints: i ? a : null,
					connectNulls: o
				}));
				return /*#__PURE__*/ P.createElement(M, { className: "recharts-radar-polygon" }, s, r ? this.renderDots(e) : null);
			}
		},
		{
			key: "renderPolygonWithAnimation",
			value: function() {
				var e = this, t = this.props, n = t.points, r = t.isAnimationActive, i = t.animationBegin, a = t.animationDuration, o = t.animationEasing, s = t.animationId, c = this.state.prevPoints;
				return /*#__PURE__*/ P.createElement(Ae, {
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
							var a = at(n.x, e.x), o = at(n.y, e.y);
							return Zs(Zs({}, e), {}, {
								x: a(r),
								y: o(r)
							});
						}
						var s = at(e.cx, e.x), l = at(e.cy, e.y);
						return Zs(Zs({}, e), {}, {
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
				return n && t && t.length && !r && (!i || !(0, Za.default)(i, t)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(t);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.hide, r = e.className, i = e.points, a = e.isAnimationActive;
				if (t || !i || !i.length) return null;
				var o = this.state.isAnimationFinished, s = n("recharts-radar", r);
				return /*#__PURE__*/ P.createElement(M, { className: s }, this.renderPolygon(), (!a || o) && Ve.renderCallByParent(this.props, i));
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
			if (/*#__PURE__*/ P.isValidElement(e)) r = /*#__PURE__*/ P.cloneElement(e, t);
			else if ((0, Xa.default)(e)) r = e(t);
			else {
				var i = t.key, a = qs(t, Gs);
				r = /*#__PURE__*/ P.createElement(At, Ys({}, a, {
					key: i,
					className: n("recharts-radar-dot", typeof e == "boolean" ? "" : e.className)
				}));
			}
			return r;
		}
	}]);
}(Dr);
cc(dc, "displayName", "Radar"), cc(dc, "defaultProps", {
	angleAxisId: 0,
	radiusAxisId: 0,
	hide: !1,
	activeDot: !0,
	dot: !1,
	legendType: "rect",
	isAnimationActive: !Ie.isSsr,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
}), cc(dc, "getComposedData", function(e) {
	var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, i = e.dataKey, a = e.bandSize, o = n.cx, s = n.cy, c = !1, l = [], u = n.type === "number" ? 0 : a ?? 0;
	r.forEach(function(e, r) {
		var a = We(e, n.dataKey, r), d = We(e, i), f = n.scale(a) + u, p = Array.isArray(d) ? (0, Us.default)(d) : d, m = (0, H.default)(p) ? void 0 : t.scale(p);
		Array.isArray(d) && d.length >= 2 && (c = !0), l.push(Zs(Zs({}, He(o, s, m, f)), {}, {
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
			var n = (0, Ws.default)(e.value), r = (0, H.default)(n) ? void 0 : t.scale(n);
			d.push(Zs(Zs({}, e), {}, { radius: r }, He(o, s, r, e.angle)));
		} else d.push(e);
	}), {
		points: l,
		isRange: c,
		baseLinePoints: d
	};
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/CartesianGrid.js
var fc = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], pc = ["offset"];
function mc(e) {
	"@babel/helpers - typeof";
	return mc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, mc(e);
}
function hc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function gc(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? hc(Object(n), !0).forEach(function(t) {
			_c(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hc(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function _c(e, t, n) {
	return t = vc(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function vc(e) {
	var t = yc(e, "string");
	return mc(t) == "symbol" ? t : t + "";
}
function yc(e, t) {
	if (mc(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (mc(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function bc() {
	return bc = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, bc.apply(this, arguments);
}
function xc(e, t) {
	if (e == null) return {};
	var n = Sc(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Sc(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
var Cc = function(e) {
	var t = e.fill;
	if (!t || t === "none") return null;
	var n = e.fillOpacity, r = e.x, i = e.y, a = e.width, o = e.height, s = e.ry;
	return /*#__PURE__*/ P.createElement("rect", {
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
function wc(e, t) {
	var n;
	if (/*#__PURE__*/ P.isValidElement(e)) n = /*#__PURE__*/ P.cloneElement(e, t);
	else if ((0, Xa.default)(e)) n = e(t);
	else {
		var r = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, c = xc(t, fc), l = j(c, !1);
		l.offset;
		var u = xc(l, pc);
		n = /*#__PURE__*/ P.createElement("line", bc({}, u, {
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
function Tc(e) {
	var t = e.x, n = e.width, r = e.horizontal, i = r === void 0 || r, a = e.horizontalPoints;
	if (!i || !a || !a.length) return null;
	var o = a.map(function(r, a) {
		return wc(i, gc(gc({}, e), {}, {
			x1: t,
			y1: r,
			x2: t + n,
			y2: r,
			key: `line-${a}`,
			index: a
		}));
	});
	return /*#__PURE__*/ P.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, o);
}
function Ec(e) {
	var t = e.y, n = e.height, r = e.vertical, i = r === void 0 || r, a = e.verticalPoints;
	if (!i || !a || !a.length) return null;
	var o = a.map(function(r, a) {
		return wc(i, gc(gc({}, e), {}, {
			x1: r,
			y1: t,
			x2: r,
			y2: t + n,
			key: `line-${a}`,
			index: a
		}));
	});
	return /*#__PURE__*/ P.createElement("g", { className: "recharts-cartesian-grid-vertical" }, o);
}
function Dc(e) {
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
		return /*#__PURE__*/ P.createElement("rect", {
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
	return /*#__PURE__*/ P.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, u);
}
function Oc(e) {
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
		return /*#__PURE__*/ P.createElement("rect", {
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
	return /*#__PURE__*/ P.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, d);
}
var kc = function(e, t) {
	var n = e.xAxis, r = e.width, i = e.height, a = e.offset;
	return Fe(ft(gc(gc(gc({}, yt.defaultProps), n), {}, {
		ticks: Le(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	})), a.left, a.left + a.width, t);
}, Ac = function(e, t) {
	var n = e.yAxis, r = e.width, i = e.height, a = e.offset;
	return Fe(ft(gc(gc(gc({}, yt.defaultProps), n), {}, {
		ticks: Le(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	})), a.top, a.top + a.height, t);
}, jc = {
	horizontal: !0,
	vertical: !0,
	horizontalPoints: [],
	verticalPoints: [],
	stroke: "#ccc",
	fill: "none",
	verticalFill: [],
	horizontalFill: []
};
function Mc(e) {
	var t = kt(), n = tt(), r = Mt(), i = gc(gc({}, e), {}, {
		stroke: e.stroke ?? jc.stroke,
		fill: e.fill ?? jc.fill,
		horizontal: e.horizontal ?? jc.horizontal,
		horizontalFill: e.horizontalFill ?? jc.horizontalFill,
		vertical: e.vertical ?? jc.vertical,
		verticalFill: e.verticalFill ?? jc.verticalFill,
		x: vt(e.x) ? e.x : r.left,
		y: vt(e.y) ? e.y : r.top,
		width: vt(e.width) ? e.width : r.width,
		height: vt(e.height) ? e.height : r.height
	}), a = i.x, o = i.y, s = i.width, c = i.height, l = i.syncWithTicks, u = i.horizontalValues, d = i.verticalValues, f = dt(), p = it();
	if (!vt(s) || s <= 0 || !vt(c) || c <= 0 || !vt(a) || a !== +a || !vt(o) || o !== +o) return null;
	var m = i.verticalCoordinatesGenerator || kc, h = i.horizontalCoordinatesGenerator || Ac, g = i.horizontalPoints, _ = i.verticalPoints;
	if ((!g || !g.length) && (0, Xa.default)(h)) {
		var v = u && u.length, y = h({
			yAxis: p ? gc(gc({}, p), {}, { ticks: v ? u : p.ticks }) : void 0,
			width: t,
			height: n,
			offset: r
		}, v ? !0 : l);
		ct(Array.isArray(y), `horizontalCoordinatesGenerator should return Array but instead it returned [${mc(y)}]`), Array.isArray(y) && (g = y);
	}
	if ((!_ || !_.length) && (0, Xa.default)(m)) {
		var b = d && d.length, x = m({
			xAxis: f ? gc(gc({}, f), {}, { ticks: b ? d : f.ticks }) : void 0,
			width: t,
			height: n,
			offset: r
		}, b ? !0 : l);
		ct(Array.isArray(x), `verticalCoordinatesGenerator should return Array but instead it returned [${mc(x)}]`), Array.isArray(x) && (_ = x);
	}
	return /*#__PURE__*/ P.createElement("g", { className: "recharts-cartesian-grid" }, /*#__PURE__*/ P.createElement(Cc, {
		fill: i.fill,
		fillOpacity: i.fillOpacity,
		x: i.x,
		y: i.y,
		width: i.width,
		height: i.height,
		ry: i.ry
	}), /*#__PURE__*/ P.createElement(Tc, bc({}, i, {
		offset: r,
		horizontalPoints: g,
		xAxis: f,
		yAxis: p
	})), /*#__PURE__*/ P.createElement(Ec, bc({}, i, {
		offset: r,
		verticalPoints: _,
		xAxis: f,
		yAxis: p
	})), /*#__PURE__*/ P.createElement(Dc, bc({}, i, { horizontalPoints: g })), /*#__PURE__*/ P.createElement(Oc, bc({}, i, { verticalPoints: _ })));
}
Mc.displayName = "CartesianGrid";
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Line.js
var Nc = [
	"type",
	"layout",
	"connectNulls",
	"ref"
], Pc = ["key"];
function Fc(e) {
	"@babel/helpers - typeof";
	return Fc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Fc(e);
}
function Ic(e, t) {
	if (e == null) return {};
	var n = Lc(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Lc(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Rc() {
	return Rc = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Rc.apply(this, arguments);
}
function zc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Bc(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? zc(Object(n), !0).forEach(function(t) {
			rl(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zc(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Vc(e) {
	return Gc(e) || Wc(e) || Uc(e) || Hc();
}
function Hc() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Uc(e, t) {
	if (e) {
		if (typeof e == "string") return Kc(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Kc(e, t);
	}
}
function Wc(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Gc(e) {
	if (Array.isArray(e)) return Kc(e);
}
function Kc(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function qc(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Jc(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, il(r.key), r);
	}
}
function Yc(e, t, n) {
	return t && Jc(e.prototype, t), n && Jc(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Xc(e, t, n) {
	return t = el(t), Zc(e, $c() ? Reflect.construct(t, n || [], el(e).constructor) : t.apply(e, n));
}
function Zc(e, t) {
	if (t && (Fc(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Qc(e);
}
function Qc(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function $c() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return ($c = function() {
		return !!e;
	})();
}
function el(e) {
	return el = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, el(e);
}
function tl(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && nl(e, t);
}
function nl(e, t) {
	return nl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, nl(e, t);
}
function rl(e, t, n) {
	return t = il(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function il(e) {
	var t = al(e, "string");
	return Fc(t) == "symbol" ? t : t + "";
}
function al(e, t) {
	if (Fc(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Fc(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ol = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		qc(this, t);
		var n = [...arguments];
		return e = Xc(this, t, [].concat(n)), rl(e, "state", {
			isAnimationFinished: !0,
			totalLength: 0
		}), rl(e, "generateSimpleStrokeDasharray", function(e, t) {
			return `${t}px ${e - t}px`;
		}), rl(e, "getStrokeDasharray", function(n, r, i) {
			var a = i.reduce(function(e, t) {
				return e + t;
			});
			if (!a) return e.generateSimpleStrokeDasharray(r, n);
			for (var o = Math.floor(n / a), s = n % a, c = r - n, l = [], u = 0, d = 0; u < i.length; d += i[u], ++u) if (d + i[u] > s) {
				l = [].concat(Vc(i.slice(0, u)), [s - d]);
				break;
			}
			var f = l.length % 2 == 0 ? [0, c] : [c];
			return [].concat(Vc(t.repeat(i, o)), Vc(l), f).map(function(e) {
				return `${e}px`;
			}).join(", ");
		}), rl(e, "id", st("recharts-line-")), rl(e, "pathRef", function(t) {
			e.mainCurve = t;
		}), rl(e, "handleAnimationEnd", function() {
			e.setState({ isAnimationFinished: !0 }), e.props.onAnimationEnd && e.props.onAnimationEnd();
		}), rl(e, "handleAnimationStart", function() {
			e.setState({ isAnimationFinished: !1 }), e.props.onAnimationStart && e.props.onAnimationStart();
		}), e;
	}
	return tl(t, e), Yc(t, [
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
				var n = this.props, r = n.points, i = n.xAxis, a = n.yAxis, o = n.layout, s = n.children, c = Tt(s, Nt);
				if (!c) return null;
				var l = function(e, t) {
					return {
						x: e.x,
						y: e.y,
						value: e.value,
						errorVal: We(e.payload, t)
					};
				}, u = { clipPath: e ? `url(#clipPath-${t})` : null };
				return /*#__PURE__*/ P.createElement(M, u, c.map(function(e) {
					return /*#__PURE__*/ P.cloneElement(e, {
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
				var i = this.props, a = i.dot, o = i.points, s = i.dataKey, c = j(this.props, !1), l = j(a, !0), u = o.map(function(e, n) {
					var r = Bc(Bc(Bc({
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
				return /*#__PURE__*/ P.createElement(M, Rc({
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
				var c = Ic(i, Nc), l = Bc(Bc(Bc({}, j(c, !0)), {}, {
					fill: "none",
					className: "recharts-line-curve",
					clipPath: t ? `url(#clipPath-${n})` : null,
					points: e
				}, r), {}, {
					type: a,
					layout: o,
					connectNulls: s
				});
				return /*#__PURE__*/ P.createElement(ke, Rc({}, l, { pathRef: this.pathRef }));
			}
		},
		{
			key: "renderCurveWithAnimation",
			value: function(e, t) {
				var n = this, r = this.props, i = r.points, a = r.strokeDasharray, o = r.isAnimationActive, s = r.animationBegin, c = r.animationDuration, l = r.animationEasing, u = r.animationId, d = r.animateNewValues, f = r.width, p = r.height, m = this.state, h = m.prevPoints, g = m.totalLength;
				return /*#__PURE__*/ P.createElement(Ae, {
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
								var r = h[n], i = at(r.x, e.x), a = at(r.y, e.y);
								return Bc(Bc({}, e), {}, {
									x: i(o),
									y: a(o)
								});
							}
							if (d) {
								var c = at(f * 2, e.x), l = at(p / 2, e.y);
								return Bc(Bc({}, e), {}, {
									x: c(o),
									y: l(o)
								});
							}
							return Bc(Bc({}, e), {}, {
								x: e.x,
								y: e.y
							});
						});
						return n.renderCurveStatically(c, e, t);
					}
					var l = at(0, g)(o), u;
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
				return i && r && r.length && (!o && s > 0 || !(0, Za.default)(o, r)) ? this.renderCurveWithAnimation(e, t) : this.renderCurveStatically(r, e, t);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.hide, r = e.dot, i = e.points, a = e.className, o = e.xAxis, s = e.yAxis, c = e.top, l = e.left, u = e.width, d = e.height, f = e.isAnimationActive, p = e.id;
				if (t || !i || !i.length) return null;
				var m = this.state.isAnimationFinished, h = i.length === 1, g = n("recharts-line", a), _ = o && o.allowDataOverflow, v = s && s.allowDataOverflow, y = _ || v, b = (0, H.default)(p) ? this.id : p, x = j(r, !1) ?? {
					r: 3,
					strokeWidth: 2
				}, S = x.r, C = S === void 0 ? 3 : S, w = x.strokeWidth, T = w === void 0 ? 2 : w, E = (mt(r) ? r : {}).clipDot, ee = E === void 0 || E, te = C * 2 + T;
				return /*#__PURE__*/ P.createElement(M, { className: g }, _ || v ? /*#__PURE__*/ P.createElement("defs", null, /*#__PURE__*/ P.createElement("clipPath", { id: `clipPath-${b}` }, /*#__PURE__*/ P.createElement("rect", {
					x: _ ? l : l - u / 2,
					y: v ? c : c - d / 2,
					width: _ ? u : u * 2,
					height: v ? d : d * 2
				})), !ee && /*#__PURE__*/ P.createElement("clipPath", { id: `clipPath-dots-${b}` }, /*#__PURE__*/ P.createElement("rect", {
					x: l - te / 2,
					y: c - te / 2,
					width: u + te,
					height: d + te
				}))) : null, !h && this.renderCurve(y, b), this.renderErrorBar(y, b), (h || r) && this.renderDots(y, ee, b), (!f || m) && Ve.renderCallByParent(this.props, i));
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
				for (var n = e.length % 2 == 0 ? e : [].concat(Vc(e), [0]), r = [], i = 0; i < t; ++i) r = [].concat(Vc(r), Vc(n));
				return r;
			}
		},
		{
			key: "renderDotItem",
			value: function(e, t) {
				var r;
				if (/*#__PURE__*/ P.isValidElement(e)) r = /*#__PURE__*/ P.cloneElement(e, t);
				else if ((0, Xa.default)(e)) r = e(t);
				else {
					var i = t.key, a = Ic(t, Pc), o = n("recharts-line-dot", typeof e == "boolean" ? "" : e.className);
					r = /*#__PURE__*/ P.createElement(At, Rc({ key: i }, a, { className: o }));
				}
				return r;
			}
		}
	]);
}(Dr);
rl(ol, "displayName", "Line"), rl(ol, "defaultProps", {
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
	isAnimationActive: !Ie.isSsr,
	animateNewValues: !0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	hide: !1,
	label: !1
}), rl(ol, "getComposedData", function(e) {
	var t = e.props, n = e.xAxis, r = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize, c = e.displayedData, l = e.offset, u = t.layout;
	return Bc({
		points: c.map(function(e, t) {
			var c = We(e, o);
			return u === "horizontal" ? {
				x: je({
					axis: n,
					ticks: i,
					bandSize: s,
					entry: e,
					index: t
				}),
				y: (0, H.default)(c) ? null : r.scale(c),
				value: c,
				payload: e
			} : {
				x: (0, H.default)(c) ? null : n.scale(c),
				y: je({
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
function sl(e) {
	"@babel/helpers - typeof";
	return sl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, sl(e);
}
function cl(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function ll(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, yl(r.key), r);
	}
}
function ul(e, t, n) {
	return t && ll(e.prototype, t), n && ll(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dl(e, t, n) {
	return t = hl(t), fl(e, ml() ? Reflect.construct(t, n || [], hl(e).constructor) : t.apply(e, n));
}
function fl(e, t) {
	if (t && (sl(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return pl(e);
}
function pl(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ml() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ml = function() {
		return !!e;
	})();
}
function hl(e) {
	return hl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, hl(e);
}
function gl(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _l(e, t);
}
function _l(e, t) {
	return _l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, _l(e, t);
}
function vl(e, t, n) {
	return t = yl(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function yl(e) {
	var t = bl(e, "string");
	return sl(t) == "symbol" ? t : t + "";
}
function bl(e, t) {
	if (sl(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (sl(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var xl = /*#__PURE__*/ function(e) {
	function t() {
		return cl(this, t), dl(this, t, arguments);
	}
	return gl(t, e), ul(t, [{
		key: "render",
		value: function() {
			return null;
		}
	}]);
}(P.Component);
vl(xl, "displayName", "ZAxis"), vl(xl, "defaultProps", {
	zAxisId: 0,
	range: [64, 64],
	scale: "auto",
	type: "number"
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/util/ScatterUtils.js
var Sl = ["option", "isActive"];
function Cl() {
	return Cl = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Cl.apply(this, arguments);
}
function wl(e, t) {
	if (e == null) return {};
	var n = Tl(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Tl(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function El(e) {
	var t = e.option, n = e.isActive, r = wl(e, Sl);
	return typeof t == "string" ? /*#__PURE__*/ P.createElement(Oe, Cl({
		option: /*#__PURE__*/ P.createElement(we, Cl({ type: t }, r)),
		isActive: n,
		shapeType: "symbols"
	}, r)) : /*#__PURE__*/ P.createElement(Oe, Cl({
		option: t,
		isActive: n,
		shapeType: "symbols"
	}, r));
}
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Scatter.js
function Dl(e) {
	"@babel/helpers - typeof";
	return Dl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Dl(e);
}
function Ol() {
	return Ol = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ol.apply(this, arguments);
}
function kl(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Al(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? kl(Object(n), !0).forEach(function(t) {
			Vl(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kl(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function jl(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Ml(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Hl(r.key), r);
	}
}
function Nl(e, t, n) {
	return t && Ml(e.prototype, t), n && Ml(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Pl(e, t, n) {
	return t = Rl(t), Fl(e, Ll() ? Reflect.construct(t, n || [], Rl(e).constructor) : t.apply(e, n));
}
function Fl(e, t) {
	if (t && (Dl(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Il(e);
}
function Il(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Ll() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Ll = function() {
		return !!e;
	})();
}
function Rl(e) {
	return Rl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Rl(e);
}
function zl(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bl(e, t);
}
function Bl(e, t) {
	return Bl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Bl(e, t);
}
function Vl(e, t, n) {
	return t = Hl(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Hl(e) {
	var t = Ul(e, "string");
	return Dl(t) == "symbol" ? t : t + "";
}
function Ul(e, t) {
	if (Dl(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Dl(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Wl = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		jl(this, t);
		var n = [...arguments];
		return e = Pl(this, t, [].concat(n)), Vl(e, "state", { isAnimationFinished: !1 }), Vl(e, "handleAnimationEnd", function() {
			e.setState({ isAnimationFinished: !0 });
		}), Vl(e, "handleAnimationStart", function() {
			e.setState({ isAnimationFinished: !1 });
		}), Vl(e, "id", st("recharts-scatter-")), e;
	}
	return zl(t, e), Nl(t, [
		{
			key: "renderSymbolsStatically",
			value: function(e) {
				var t = this, n = this.props, r = n.shape, i = n.activeShape, a = n.activeIndex, o = j(this.props, !1);
				return e.map(function(e, n) {
					var s = a === n, c = s ? i : r, l = Al(Al({}, o), e);
					return /*#__PURE__*/ P.createElement(M, Ol({
						className: "recharts-scatter-symbol",
						key: `symbol-${e?.cx}-${e?.cy}-${e?.size}-${n}`
					}, rt(t.props, e, n), { role: "img" }), /*#__PURE__*/ P.createElement(El, Ol({
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
				return /*#__PURE__*/ P.createElement(Ae, {
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
							var i = at(n.cx, e.cx), a = at(n.cy, e.cy), o = at(n.size, e.size);
							return Al(Al({}, e), {}, {
								cx: i(r),
								cy: a(r),
								size: o(r)
							});
						}
						var s = at(0, e.size);
						return Al(Al({}, e), {}, { size: s(r) });
					});
					return /*#__PURE__*/ P.createElement(M, null, e.renderSymbolsStatically(i));
				});
			}
		},
		{
			key: "renderSymbols",
			value: function() {
				var e = this.props, t = e.points, n = e.isAnimationActive, r = this.state.prevPoints;
				return n && t && t.length && (!r || !(0, Za.default)(r, t)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(t);
			}
		},
		{
			key: "renderErrorBar",
			value: function() {
				if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
				var e = this.props, t = e.points, n = e.xAxis, r = e.yAxis, i = e.children, a = Tt(i, Nt);
				return a ? a.map(function(e, i) {
					var a = e.props, o = a.direction, s = a.dataKey;
					return /*#__PURE__*/ P.cloneElement(e, {
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
								errorVal: We(e, t)
							};
						}
					});
				}) : null;
			}
		},
		{
			key: "renderLine",
			value: function() {
				var e = this.props, t = e.points, n = e.line, r = e.lineType, i = e.lineJointType, a = j(this.props, !1), o = j(n, !1), s, c;
				if (r === "joint") s = t.map(function(e) {
					return {
						x: e.cx,
						y: e.cy
					};
				});
				else if (r === "fitting") {
					var l = xt(t), u = l.xmin, d = l.xmax, f = l.a, p = l.b, m = function(e) {
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
				var h = Al(Al(Al({}, a), {}, {
					fill: "none",
					stroke: a && a.fill
				}, o), {}, { points: s });
				return c = /*#__PURE__*/ P.isValidElement(n) ? /*#__PURE__*/ P.cloneElement(n, h) : (0, Xa.default)(n) ? n(h) : /*#__PURE__*/ P.createElement(ke, Ol({}, h, { type: i })), /*#__PURE__*/ P.createElement(M, {
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
				var m = this.state.isAnimationFinished, h = n("recharts-scatter", a), g = o && o.allowDataOverflow, _ = s && s.allowDataOverflow, v = g || _, y = (0, H.default)(f) ? this.id : f;
				return /*#__PURE__*/ P.createElement(M, {
					className: h,
					clipPath: v ? `url(#clipPath-${y})` : null
				}, g || _ ? /*#__PURE__*/ P.createElement("defs", null, /*#__PURE__*/ P.createElement("clipPath", { id: `clipPath-${y}` }, /*#__PURE__*/ P.createElement("rect", {
					x: g ? c : c - u / 2,
					y: _ ? l : l - d / 2,
					width: g ? u : u * 2,
					height: _ ? d : d * 2
				}))) : null, i && this.renderLine(), this.renderErrorBar(), /*#__PURE__*/ P.createElement(M, { key: "recharts-scatter-symbols" }, this.renderSymbols()), (!p || m) && Ve.renderCallByParent(this.props, r));
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
}(Dr);
Vl(Wl, "displayName", "Scatter"), Vl(Wl, "defaultProps", {
	xAxisId: 0,
	yAxisId: 0,
	zAxisId: 0,
	legendType: "circle",
	lineType: "joint",
	lineJointType: "linear",
	data: [],
	shape: "circle",
	hide: !1,
	isAnimationActive: !Ie.isSsr,
	animationBegin: 0,
	animationDuration: 400,
	animationEasing: "linear"
}), Vl(Wl, "getComposedData", function(e) {
	var t = e.xAxis, n = e.yAxis, r = e.zAxis, i = e.item, a = e.displayedData, o = e.xAxisTicks, s = e.yAxisTicks, c = e.offset, l = i.props.tooltipType, u = Tt(i.props.children, Ze), d = (0, H.default)(t.dataKey) ? i.props.dataKey : t.dataKey, f = (0, H.default)(n.dataKey) ? i.props.dataKey : n.dataKey, p = r && r.dataKey, m = r ? r.range : xl.defaultProps.range, h = m && m[0], g = t.scale.bandwidth ? t.scale.bandwidth() : 0, _ = n.scale.bandwidth ? n.scale.bandwidth() : 0;
	return Al({ points: a.map(function(e, a) {
		var c = We(e, d), m = We(e, f), v = !(0, H.default)(p) && We(e, p) || "-", y = [{
			name: (0, H.default)(t.dataKey) ? i.props.name : t.name || t.dataKey,
			unit: t.unit || "",
			value: c,
			payload: e,
			dataKey: d,
			type: l
		}, {
			name: (0, H.default)(n.dataKey) ? i.props.name : n.name || n.dataKey,
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
		var b = je({
			axis: t,
			ticks: o,
			bandSize: g,
			entry: e,
			index: a,
			dataKey: d
		}), x = je({
			axis: n,
			ticks: s,
			bandSize: _,
			entry: e,
			index: a,
			dataKey: f
		}), S = v === "-" ? h : r.scale(v), C = Math.sqrt(Math.max(S, 0) / Math.PI);
		return Al(Al({}, e), {}, {
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
var Gl = Dt({
	chartName: "LineChart",
	GraphicalChild: ol,
	axisComponents: [{
		axisType: "xAxis",
		AxisComp: lt
	}, {
		axisType: "yAxis",
		AxisComp: ot
	}],
	formatAxisMap: jt
}), Kl = Dt({
	chartName: "BarChart",
	GraphicalChild: Ge,
	defaultTooltipEventType: "axis",
	validateTooltipEventTypes: ["axis", "item"],
	axisComponents: [{
		axisType: "xAxis",
		AxisComp: lt
	}, {
		axisType: "yAxis",
		AxisComp: ot
	}],
	formatAxisMap: jt
}), ql = Dt({
	chartName: "PieChart",
	GraphicalChild: Bs,
	validateTooltipEventTypes: ["item"],
	defaultTooltipEventType: "item",
	legendContent: "children",
	axisComponents: [{
		axisType: "angleAxis",
		AxisComp: xs
	}, {
		axisType: "radiusAxis",
		AxisComp: ts
	}],
	formatAxisMap: ht,
	defaultProps: {
		layout: "centric",
		startAngle: 0,
		endAngle: 360,
		cx: "50%",
		cy: "50%",
		innerRadius: 0,
		outerRadius: "80%"
	}
}), Jl = Dt({
	chartName: "RadarChart",
	GraphicalChild: dc,
	axisComponents: [{
		axisType: "angleAxis",
		AxisComp: xs
	}, {
		axisType: "radiusAxis",
		AxisComp: ts
	}],
	formatAxisMap: ht,
	defaultProps: {
		layout: "centric",
		startAngle: 90,
		endAngle: -270,
		cx: "50%",
		cy: "50%",
		innerRadius: 0,
		outerRadius: "80%"
	}
}), Yl = Dt({
	chartName: "ComposedChart",
	GraphicalChild: [
		ol,
		St,
		Ge,
		Wl
	],
	axisComponents: [
		{
			axisType: "xAxis",
			AxisComp: lt
		},
		{
			axisType: "yAxis",
			AxisComp: ot
		},
		{
			axisType: "zAxis",
			AxisComp: xl
		}
	],
	formatAxisMap: jt
}), Xl = r({ variants: { aspect: {
	square: "aspect-square",
	wide: "aspect-video",
	small: "h-40"
} } }), Zl = {
	light: "",
	dark: ".dark"
}, Ql = N.createContext(null);
function $l() {
	let e = N.useContext(Ql);
	if (!e) throw Error("useChart must be used within a <ChartContainer />");
	return e;
}
var eu = N.forwardRef(({ id: e, className: t, children: n, aspect: r, config: i, ...a }, o) => {
	let s = N.useId(), c = `chart-${e || s.replace(/:/g, "")}`, l = N.useRef(null), [u, d] = R(), f = Pr(() => new ResizeObserver((e) => d(e[0].contentRect.height)), []);
	return Nr(() => {
		let e = o && "current" in o ? o.current : l.current;
		return e && f.observe(e.parentElement), () => {
			f.disconnect();
		};
	}, [
		f,
		o,
		l
	]), /* @__PURE__ */ z(Ql.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ B("div", {
			"data-chromatic": "ignore",
			"data-chart": c,
			ref: o || l,
			className: g("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", r ? Xl({ aspect: r }) : "aspect-auto h-full", t),
			...a,
			children: [/* @__PURE__ */ z(tu, {
				id: c,
				config: i
			}), /* @__PURE__ */ z(Me, {
				height: u,
				className: "overflow-visible",
				children: n
			})]
		})
	});
});
eu.displayName = "Chart";
var tu = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([e, t]) => t.theme || t.color);
	if (!n.length) return null;
	let r = Object.entries(Zl).map(([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
		let r = n.theme?.[t] || n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`);
	return /* @__PURE__ */ z("style", { dangerouslySetInnerHTML: { __html: o.sanitize(r.join("\n")) } });
}, nu = wt, ru = N.forwardRef(({ active: e, payload: t, className: n, indicator: r = "dot", hideLabel: i = !1, hideIndicator: a = !1, label: o, labelFormatter: s, labelClassName: c, formatter: l, yAxisFormatter: u, color: d, nameKey: f, labelKey: p }, m) => {
	let { config: h } = $l(), _ = N.useMemo(() => {
		if (i || !t?.length) return null;
		let [e] = t, n = `${p || e.dataKey || e.name || "value"}`, r = su(h, e, n), a = !p && typeof o == "string" ? h[o]?.label || o : r?.label;
		return s ? /* @__PURE__ */ z("div", {
			className: g("font-medium", c),
			children: s(a, t)
		}) : a ? /* @__PURE__ */ z("div", {
			className: g("font-medium", c),
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
	let v = t.length === 1 && r !== "dot";
	return /* @__PURE__ */ B("div", {
		ref: m,
		className: g("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary px-3 py-2.5 text-base shadow-lg backdrop-blur", n),
		children: [v ? null : _, /* @__PURE__ */ z("div", {
			className: "grid gap-2",
			children: t.map((e, t) => {
				let n = `${f || e.name || e.dataKey || "value"}`, i = su(h, e, n), o = d || e.payload.fill || e.color;
				return /* @__PURE__ */ z("div", {
					className: g("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", r === "dot" && "items-center"),
					children: l && e?.value !== void 0 && e.name ? l(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ B(Ir, { children: [i?.icon ? /* @__PURE__ */ z(i.icon, {}) : !a && /* @__PURE__ */ z("div", {
						className: g("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
							"h-2.5 w-2.5": r === "dot",
							"w-1": r === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
							"my-0.5": v && r === "dashed"
						}),
						style: {
							"--color-bg": o,
							"--color-border": o
						}
					}), /* @__PURE__ */ B("div", {
						className: g("flex flex-1 justify-between text-sm leading-none", v ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ B("div", {
							className: "grid gap-2",
							children: [v ? _ : null, /* @__PURE__ */ z("span", {
								className: "pr-2 text-f1-foreground",
								children: i?.label || e.name
							})]
						}), e.value && /* @__PURE__ */ z("span", {
							className: "font-mono font-medium tabular-nums text-f1-foreground",
							children: u ? u(String(e.value)) : e.value.toLocaleString()
						})]
					})] })
				}, e.dataKey);
			})
		})]
	});
});
ru.displayName = "ChartTooltip";
var iu = {
	strong: .4,
	faint: .05
}, au = $e, ou = N.forwardRef(({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i, hiddenKey: a, leftShift: o = 0 }, s) => {
	let { config: c } = $l();
	return n?.length ? /* @__PURE__ */ z("div", {
		ref: s,
		className: g("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", r === "top" ? "pb-2" : "pt-2", e),
		style: { marginLeft: o },
		children: n.map((e) => {
			let n = `${i || e.dataKey || "value"}`, r = su(c, e, n, a);
			return /* @__PURE__ */ B("div", {
				className: g("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"),
				children: [r?.icon && !t ? /* @__PURE__ */ z(r.icon, {}) : r && /* @__PURE__ */ z("div", {
					className: "h-2 w-2 shrink-0 rounded-full",
					style: r.projected ? { background: `linear-gradient(to bottom, color-mix(in srgb, ${e.color} ${iu.strong * 100}%, transparent), color-mix(in srgb, ${e.color} ${iu.faint * 100}%, transparent))` } : { backgroundColor: e.color }
				}), /* @__PURE__ */ z("span", {
					className: "text-f1-foreground",
					children: r?.label
				})]
			}, JSON.stringify(e));
		})
	}) : null;
});
ou.displayName = "ChartLegend";
function su(e, t, n, r) {
	if (typeof t != "object" || !t) return;
	let i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, a = n;
	if (n in t && typeof t[n] == "string" ? a = t[n] : i && n in i && typeof i[n] == "string" ? a = i[n] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(r && r === a)) return a in e ? e[a] : e[n];
}
//#endregion
//#region src/kits/Charts/utils/elements.tsx
function cu(e, t = "12px Inter, sans-serif") {
	let n = document.createElement("canvas").getContext("2d");
	return n ? (n.font = t, n.measureText(e).width) : 0;
}
var lu = (e) => ({
	dataKey: "x",
	domain: e?.domain,
	tickLine: !1,
	axisLine: !1,
	tickMargin: 8,
	ticks: e?.ticks,
	tickCount: e?.tickCount,
	tickFormatter: e?.tickFormatter
}), uu = (e) => ({
	tickLine: !1,
	axisLine: !1,
	domain: e?.domain,
	tickMargin: 8,
	ticks: e?.ticks,
	tickCount: e?.tickCount,
	tickFormatter: e?.tickFormatter
}), du = () => ({
	vertical: !1,
	strokeDasharray: "4"
}), fu = (e = !1) => ({
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
function pu(e) {
	return kr(e);
}
//#endregion
//#region src/kits/Charts/utils/muncher.ts
function mu(e) {
	return e.map((e) => ({
		x: e.label,
		...e.values
	}));
}
//#endregion
//#region src/kits/Charts/AreaChart/index.tsx
var hu = ({ index: e, visibleTicksCount: t, payload: n, tickFormatter: r, ...i }) => {
	let a = e === 0, o = e === t - 1;
	return /* @__PURE__ */ z(qe, {
		...i,
		textAnchor: a ? "start" : o ? "end" : "middle",
		children: r?.(n.value, n.index) ?? n.value
	});
}, gu = pu(({ data: e, dataConfig: t, xAxis: n, yAxis: r, canBeBlurred: i, blurArea: a, lineType: o = "monotoneX", aspect: s, marginTop: c = 0 }, l) => {
	let { enabled: u } = La(), d = Object.keys(t), f = pr(12), p = mu(e), m = Math.max(...p.flatMap((e) => d.map((t) => cu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`)))), h = r?.width ?? m + 20, g = !r?.hide, _ = !n?.hide, v = !i || !u;
	return /* @__PURE__ */ z(eu, {
		config: t,
		ref: l,
		aspect: s,
		children: /* @__PURE__ */ B(_t, {
			accessibilityLayer: !0,
			data: p,
			className: "overflow-visible [&_.recharts-surface]:overflow-visible",
			margin: { top: c },
			children: [
				/* @__PURE__ */ B("defs", { children: [
					/* @__PURE__ */ B("linearGradient", {
						id: `${f}-fadeGradient`,
						gradientUnits: "userSpaceOnUse",
						x1: `${g ? h : 0}`,
						y1: "0",
						x2: "100%",
						y2: "0",
						children: [
							(a === "l" || a === "lr") && /* @__PURE__ */ B(Ir, { children: [
								/* @__PURE__ */ z("stop", {
									offset: "0%",
									stopColor: "black",
									stopOpacity: "0"
								}),
								/* @__PURE__ */ z("stop", {
									offset: "1%",
									stopColor: "white",
									stopOpacity: "0.1"
								}),
								/* @__PURE__ */ z("stop", {
									offset: "7%",
									stopColor: "white",
									stopOpacity: "1"
								})
							] }),
							(a === "r" || a === "lr") && /* @__PURE__ */ B(Ir, { children: [
								/* @__PURE__ */ z("stop", {
									offset: "93%",
									stopColor: "white",
									stopOpacity: "1"
								}),
								/* @__PURE__ */ z("stop", {
									offset: "99%",
									stopColor: "white",
									stopOpacity: "0.1"
								}),
								/* @__PURE__ */ z("stop", {
									offset: "100%",
									stopColor: "black",
									stopOpacity: "0"
								})
							] }),
							!a && /* @__PURE__ */ B(Ir, { children: [/* @__PURE__ */ z("stop", {
								offset: "0%",
								stopColor: "white",
								stopOpacity: "1"
							}), /* @__PURE__ */ z("stop", {
								offset: "100%",
								stopColor: "white",
								stopOpacity: "1"
							})] })
						]
					}),
					/* @__PURE__ */ z("mask", {
						id: `${f}-transparent-edges`,
						maskUnits: "userSpaceOnUse",
						maskContentUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ z("rect", {
							x: "0",
							y: "0",
							width: "100%",
							height: "100%",
							fill: `url(#${f}-fadeGradient)`
						})
					}),
					d.map((e, n) => /* @__PURE__ */ B("linearGradient", {
						id: `fill${String(e)}-${f}`,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ z("stop", {
							offset: "5%",
							stopColor: t[e].color ? mn(t[e].color) : pn(n),
							stopOpacity: .8
						}), /* @__PURE__ */ z("stop", {
							offset: "95%",
							stopColor: t[e].color ? mn(t[e].color) : pn(n),
							stopOpacity: .1
						})]
					}, n))
				] }),
				/* @__PURE__ */ z(Mc, {
					...du(),
					mask: `url(#${f}-transparent-edges)`
				}),
				_ && /* @__PURE__ */ z(lt, {
					dataKey: "x",
					tickLine: !1,
					axisLine: !1,
					tickMargin: 8,
					tickFormatter: n?.tickFormatter,
					ticks: n?.ticks,
					domain: n?.domain,
					interval: 0,
					tick: hu
				}),
				g && /* @__PURE__ */ z(ot, {
					tickLine: !1,
					axisLine: !1,
					tickMargin: 8,
					tickCount: r?.tickCount,
					tickFormatter: i && u ? () => "**" : r?.tickFormatter,
					ticks: r?.ticks,
					domain: r?.domain,
					width: h
				}),
				v && /* @__PURE__ */ z(nu, {
					...fu(),
					content: /* @__PURE__ */ z(ru, {
						indicator: "dot",
						yAxisFormatter: r?.tickFormatter
					})
				}),
				d.map((e, n) => /* @__PURE__ */ z(St, {
					isAnimationActive: !1,
					dataKey: e,
					type: o,
					mask: `url(#${f}-transparent-edges)`,
					fill: `url(#fill${e}-${f})`,
					fillOpacity: t[e].dashed ? 0 : .4,
					stroke: t[e].color ? mn(t[e].color) : pn(n),
					strokeWidth: 1.5,
					strokeDasharray: t[e].dashed ? "4 4" : void 0
				}, e)),
				Object.keys(t).length > 1 && /* @__PURE__ */ z(au, {
					className: "flex justify-start",
					content: /* @__PURE__ */ z(ou, {})
				})
			]
		})
	});
}), _u = pu(({ dataConfig: e, data: t, xAxis: n, yAxis: r = { hide: !0 }, label: i = !1, type: a = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: c, legend: l, showValueUnderLabel: u = !1, highlightLastBar: d = !1, onClick: f }, p) => {
	let m = Object.keys(e), h = mu(t).map((t, n, r) => d && m.length === 1 && !e[m[0]]?.color ? {
		...t,
		fill: n === r.length - 1 ? pn(n) : pn(n, .5)
	} : t), g = Math.max(...h.flatMap((e) => m.map((t) => cu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`))));
	return /* @__PURE__ */ z(eu, {
		config: e,
		ref: p,
		aspect: c,
		children: /* @__PURE__ */ B(Kl, {
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
				!o && /* @__PURE__ */ z(nu, {
					...fu(),
					content: /* @__PURE__ */ z(ru, { yAxisFormatter: r.tickFormatter })
				}),
				!s && /* @__PURE__ */ z(Mc, { ...du() }),
				/* @__PURE__ */ z(ot, {
					...uu(r),
					tick: !0,
					width: r.width ?? g + 20,
					hide: r.hide
				}),
				/* @__PURE__ */ z(lt, {
					...lu(n),
					hide: n?.hide,
					tick: u ? (e) => {
						let { x: n, y: i, payload: a } = e, o = t.find((e) => e.label === a.value)?.values || "", s = Object.keys(o).length === 1 ? Object.values(o)?.[0] : void 0, c = s !== void 0 && r.tickFormatter ? r.tickFormatter(`${s}`) : s.toLocaleString();
						return /* @__PURE__ */ B("g", {
							transform: `translate(${n},${i})`,
							children: [/* @__PURE__ */ z("text", {
								x: 0,
								y: 0,
								dy: 12,
								textAnchor: "middle",
								className: "text-sm font-medium !text-f1-foreground-secondary",
								children: a.value
							}), !!s && /* @__PURE__ */ z("text", {
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
				m.map((t, n) => /* @__PURE__ */ z(Ge, {
					isAnimationActive: !1,
					dataKey: t,
					stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
					fill: d ? ((e) => e.fill) : e[t].color ? mn(e[t].color) : pn(n),
					radius: a === "stacked-by-sign" ? [
						4,
						4,
						0,
						0
					] : 4,
					maxBarSize: 32,
					children: i && /* @__PURE__ */ z(Ve, {
						position: "top",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12
					}, `label-${t}`)
				}, `bar-${t}`)),
				l && /* @__PURE__ */ z(au, {
					content: /* @__PURE__ */ z(ou, { nameKey: "label" }),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
}), vu = pu(({ data: e, legend: t = !0, hideTooltip: n = !1 }, r) => {
	let i = e.reduce((e, t) => e + t.value, 0), [a, o] = R(void 0), s = Wt(e, i, (e, t) => e.color ? mn(e.color) : pn(t)), c = Qt(s, i);
	return /* @__PURE__ */ B(fe, {
		delayDuration: 350,
		children: [/* @__PURE__ */ z("div", {
			className: "w-full",
			ref: r,
			children: /* @__PURE__ */ B(pe, { children: [/* @__PURE__ */ z(de, {
				asChild: !0,
				children: /* @__PURE__ */ z("div", {
					className: g("pointer-events-auto flex h-2 w-full cursor-default gap-1 overflow-hidden", h()),
					onMouseLeave: () => o(void 0),
					onMouseOver: (e) => {
						e.target === e.currentTarget && o(void 0);
					},
					role: "group",
					"aria-label": "Category bar chart",
					tabIndex: s.length > 0 ? 0 : void 0,
					children: s.map((e) => /* @__PURE__ */ z("div", {
						className: "pointer-events-auto h-full overflow-hidden rounded-2xs",
						style: {
							width: `${e.percentage}%`,
							backgroundColor: e.color
						},
						role: "img",
						"aria-label": `${e.name}: ${e.value} (${Kt(e.value, i)}%)`,
						onMouseEnter: () => o(e.key)
					}, e.key))
				})
			}), !n && c.length > 0 && /* @__PURE__ */ z(Ht, {
				items: c,
				activeKey: a
			})] })
		}), t && /* @__PURE__ */ z("div", {
			className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
			role: "list",
			children: e.map((e, t) => {
				let n = e.color ? mn(e.color) : pn(t);
				return /* @__PURE__ */ B("div", {
					className: "flex items-center gap-1.5",
					role: "listitem",
					children: [/* @__PURE__ */ z("div", {
						className: "h-2 w-2 shrink-0 rounded-full",
						style: { backgroundColor: n }
					}), /* @__PURE__ */ z("span", {
						className: "text-f1-foreground",
						children: e.name
					})]
				}, e.name);
			})
		})]
	});
}), yu = Object.assign(({ stackKeys: e, ...t }) => {
	let n = jr().replace(/:/g, ""), r = (e) => `projected-bar-${n}-${e}`, i = (n) => {
		let { payload: i, ...a } = n, o = (e) => {
			let t = i?.[e];
			return typeof t == "number" ? t : 0;
		}, s = o(String(t.dataKey)), c = `url(#${r(s < 0 ? "negative" : "positive")})`;
		if (!e) return /* @__PURE__ */ z(Ke, {
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
		return /* @__PURE__ */ z(Ke, {
			...a,
			fill: c,
			radius: l
		});
	};
	return /* @__PURE__ */ B(Ir, { children: [/* @__PURE__ */ z("defs", { children: ["positive", "negative"].map((e) => /* @__PURE__ */ B("linearGradient", {
		id: r(e),
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ z("stop", {
			offset: "0%",
			stopColor: t.fill,
			stopOpacity: e === "positive" ? iu.strong : iu.faint
		}), /* @__PURE__ */ z("stop", {
			offset: "100%",
			stopColor: t.fill,
			stopOpacity: e === "positive" ? iu.faint : iu.strong
		})]
	}, e)) }), /* @__PURE__ */ z(Ge, {
		...t,
		shape: i
	})] });
}, {
	displayName: Ge.displayName,
	defaultProps: Ge.defaultProps,
	getComposedData: Ge.getComposedData
}), bu = (e) => {
	let t = (t) => {
		let { cx: n, cy: r, fill: i, payload: a } = t, o = () => {
			if (!a) return "-";
			if (a[e] !== void 0) return a[e];
			for (let [e, t] of Object.entries(a)) if (typeof t == "number" && e !== "x") return t;
			return "-";
		};
		return /* @__PURE__ */ z("circle", {
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
}, xu = (e, t, n) => {
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
		return /* @__PURE__ */ z(Ke, {
			...a,
			radius: c
		});
	};
	return r.displayName = `StackedBar-${e}`, r;
}, Su = pu(({ dataConfig: e, data: t, xAxis: n, yAxis: r = { hide: !0 }, label: i = !1, hideTooltip: a = !1, hideGrid: o = !1, aspect: s, legend: c, showValueUnderLabel: l = !1, bar: u, line: d, scatter: f, onClick: p }, m) => {
	let h = mu(t), g = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], _ = u?.type === "stacked" || u?.type === "stacked-by-sign", v = new Set(g.filter((t) => e[t].projected).map(String)), y = (t, n) => e[t].color ? mn(e[t].color) : pn(n), b = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], x = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], S = [
		...g,
		...b,
		...x
	], C = Math.max(...h.flatMap((e) => S.map((t) => cu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`)))), w = [
		u,
		d,
		f
	].filter((e) => e?.axisPosition === "left"), T = [
		u,
		d,
		f
	].filter((e) => e?.axisPosition === "right");
	return /* @__PURE__ */ z(eu, {
		config: e,
		ref: m,
		aspect: s,
		children: /* @__PURE__ */ B(Yl, {
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
				!a && /* @__PURE__ */ z(nu, {
					...fu(),
					content: /* @__PURE__ */ z(ru, { yAxisFormatter: r.tickFormatter })
				}),
				!o && /* @__PURE__ */ z(Mc, { ...du() }),
				w.length > 0 && /* @__PURE__ */ z(ot, {
					...uu(r),
					tick: !0,
					width: r.width ?? C + 20 + (T.length > 0 && w[0]?.axisLabel ? 20 : 0),
					hide: r.hide || w.some((e) => e?.hideAxis),
					label: w[0]?.axisLabel ? {
						value: w[0].axisLabel,
						angle: -90,
						position: "insideLeft"
					} : void 0
				}),
				T.length > 0 && /* @__PURE__ */ z(ot, {
					...uu(r),
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
				/* @__PURE__ */ z(lt, {
					...lu(n),
					hide: n?.hide,
					tick: l ? (e) => {
						let { x: n, y: i, payload: a } = e, o = t.find((e) => e.label === a.value)?.values || "", s = Object.keys(o).length === 1 ? Object.values(o)?.[0] : void 0, c = s !== void 0 && r.tickFormatter ? r.tickFormatter(`${s}`) : s.toLocaleString();
						return /* @__PURE__ */ B("g", {
							transform: `translate(${n},${i})`,
							children: [/* @__PURE__ */ z("text", {
								x: 0,
								y: 0,
								dy: 12,
								textAnchor: "middle",
								className: "text-sm font-medium !text-f1-foreground-secondary",
								children: a.value
							}), !!s && /* @__PURE__ */ z("text", {
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
					}, r = i && /* @__PURE__ */ z(Ve, {
						position: "top",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12
					}, `label-${String(e)}`);
					return v.has(String(e)) ? /* @__PURE__ */ z(yu, {
						...n,
						stackKeys: _ ? g.map(String) : void 0,
						children: r
					}, `bar-${String(e)}`) : /* @__PURE__ */ z(Ge, {
						...n,
						shape: _ ? xu(String(e), g.map(String), v) : void 0,
						children: r
					}, `bar-${String(e)}`);
				}),
				b.map((t, n) => {
					let r = e[t].color ? mn(e[t].color) : pn(g.length + n);
					return /* @__PURE__ */ z(ol, {
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
				x.map((t, n) => /* @__PURE__ */ z(Wl, {
					dataKey: String(t),
					fill: e[t].color ? mn(e[t].color) : pn(g.length + b.length + n),
					r: 4,
					isAnimationActive: !1,
					yAxisId: f?.axisPosition === "right" ? "right" : void 0,
					shape: bu(String(t))
				}, `scatter-${String(t)}`)),
				c && /* @__PURE__ */ z(au, {
					content: /* @__PURE__ */ z(ou, { nameKey: "label" }),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
}), Cu = pu(({ data: e, dataConfig: t, xAxis: n, yAxis: r = { hide: !0 }, lineType: i = "natural", aspect: a, hideTooltip: o = !1, hideGrid: s = !1 }, c) => {
	let l = Object.keys(t), u = mu(e), d = Math.max(...u.flatMap((e) => l.map((t) => cu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`))));
	return /* @__PURE__ */ z(eu, {
		config: t,
		ref: c,
		aspect: a,
		children: /* @__PURE__ */ B(Gl, {
			accessibilityLayer: !0,
			data: u,
			margin: {
				left: r && !r.hide ? 0 : 12,
				right: 12
			},
			children: [
				!s && /* @__PURE__ */ z(Mc, { ...du() }),
				!n?.hide && /* @__PURE__ */ z(lt, { ...lu(n) }),
				!r?.hide && /* @__PURE__ */ z(ot, {
					...uu(r),
					width: r.width ?? d + 20
				}),
				!o && /* @__PURE__ */ z(nu, {
					...fu(),
					content: /* @__PURE__ */ z(ru, { yAxisFormatter: r?.tickFormatter })
				}),
				l.map((e, n) => /* @__PURE__ */ z(ol, {
					dataKey: e,
					isAnimationActive: !1,
					type: i,
					stroke: t[e].color ? mn(t[e].color) : pn(n),
					strokeWidth: 1.5,
					strokeDasharray: t[e].dashed ? "4 4" : void 0,
					dot: !1
				}, e))
			]
		})
	});
}), wu = pu(({ data: e, dataConfig: t, overview: n, aspect: r, tickFormatter: i }, a) => {
	let o = e.map((e, n) => ({
		...e,
		fill: t[e.label]?.color ? mn(t[e.label].color) : pn(n)
	})), s = e.map((e) => e.value).reduce((e, t) => e + t);
	return s === 0 && o.push({
		label: "-",
		value: 1,
		fill: "hsl(var(--neutral-2))"
	}), /* @__PURE__ */ z(eu, {
		config: t,
		ref: a,
		aspect: r,
		"data-chromatic": "ignore",
		style: { height: 380 },
		children: /* @__PURE__ */ B(ql, {
			accessibilityLayer: !0,
			margin: {
				left: 0,
				right: 0
			},
			children: [
				s !== 0 && /* @__PURE__ */ z(nu, {
					isAnimationActive: !1,
					content: /* @__PURE__ */ z(ru, { yAxisFormatter: i })
				}),
				/* @__PURE__ */ B(Bs, {
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
						return /* @__PURE__ */ z(Ze, {
							fill: e.fill,
							"aria-label": `${e.label}: ${n} (${(e.value / s * 100).toFixed(0)}%)`
						}, `cell-${t}`);
					}), /* @__PURE__ */ z(Te, { content: ({ viewBox: e }) => {
						if (e && "cx" in e && "cy" in e) return /* @__PURE__ */ B("text", {
							x: e.cx,
							y: e.cy,
							textAnchor: "middle",
							dominantBaseline: "middle",
							children: [/* @__PURE__ */ z("tspan", {
								x: e.cx,
								y: (e.cy || 0) + 8,
								className: "fill-f1-foreground text-4xl font-semibold",
								children: n?.number ? i ? i(String(n.number)) : n.number : null
							}), /* @__PURE__ */ z("tspan", {
								x: e.cx,
								y: (e.cy || 0) - 16,
								className: "fill-f1-foreground-secondary",
								children: n?.label
							})]
						});
					} })]
				}),
				/* @__PURE__ */ z(au, {
					content: /* @__PURE__ */ z(ou, {
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
}), Tu = pu(({ value: e, max: t = 100, label: n, color: r }, i) => {
	let a = mn(r || "categorical-1"), o = e / t * 100;
	return /* @__PURE__ */ B("div", {
		className: "flex items-center space-x-2",
		"aria-live": "polite",
		children: [/* @__PURE__ */ z("div", {
			className: "flex-grow",
			children: /* @__PURE__ */ z(hn, {
				color: a,
				value: o,
				className: "w-full",
				"aria-valuemin": 0,
				"aria-valuemax": t,
				"aria-valuenow": e,
				"aria-label": `${o.toFixed(1)}%`
			})
		}), n && /* @__PURE__ */ z("div", {
			className: "flex-shrink-0 text-sm font-medium",
			children: n
		})]
	});
}), Eu = ({ series: e, hiddenKeys: t, onToggle: n }) => /* @__PURE__ */ z("div", {
	className: "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
	children: e.map(({ key: e, color: r, label: i }) => {
		let a = t.includes(e);
		return /* @__PURE__ */ B("button", {
			type: "button",
			className: g("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground", h(), a ? "opacity-40" : "opacity-100"),
			"aria-label": typeof i == "string" ? i : void 0,
			"aria-pressed": !a,
			onClick: () => n(e),
			children: [/* @__PURE__ */ z("span", {
				className: "h-2 w-2 shrink-0 rounded-full",
				style: { backgroundColor: r }
			}), /* @__PURE__ */ z("span", {
				className: "text-f1-foreground",
				children: i
			})]
		}, e);
	})
}), Du = pu(({ data: e, dataConfig: t, scaleMin: n, scaleMax: r, aspect: i, defaultHiddenSeries: a, dataTestId: o }, s) => {
	let [l, u] = R(a ?? []), d = Object.entries(t).map(([e, t], n) => ({
		key: e,
		color: t.color ? mn(t.color) : pn(n),
		label: t.label
	})), f = (e) => {
		u((t) => t.includes(e) ? t.filter((t) => t !== e) : t.length >= d.length - 1 ? t : [...t, e]);
	}, p = e.map((e) => ({
		subject: e.label,
		...e.values
	}));
	return /* @__PURE__ */ z(c, {
		dataTestId: o,
		children: /* @__PURE__ */ z(eu, {
			config: t,
			ref: s,
			aspect: i,
			"data-chromatic": "ignore",
			children: /* @__PURE__ */ B(Jl, {
				accessibilityLayer: !0,
				data: p,
				children: [
					/* @__PURE__ */ z(nu, {
						cursor: !0,
						content: /* @__PURE__ */ z(ru, { indicator: "dot" })
					}),
					/* @__PURE__ */ z(ko, { gridType: "circle" }),
					/* @__PURE__ */ z(xs, { dataKey: "subject" }),
					/* @__PURE__ */ z(ts, {
						angle: 90,
						type: "number",
						domain: [n ?? "dataMin", r ?? "dataMax"]
					}),
					d.filter(({ key: e }) => !l.includes(e)).map(({ key: e, color: t, label: n }) => /* @__PURE__ */ z(dc, {
						dataKey: e,
						fill: t,
						stroke: t,
						strokeWidth: 1.5,
						fillOpacity: .3,
						label: n,
						isAnimationActive: !1
					}, e)),
					d.length > 1 && /* @__PURE__ */ z(au, {
						iconType: "star",
						content: /* @__PURE__ */ z(Eu, {
							series: d,
							hiddenKeys: l,
							onToggle: f
						})
					})
				]
			})
		})
	});
}), Ou = be();
function ku(e) {
	return e.map((e) => ({
		x: e.label,
		...e.values
	}));
}
//#endregion
//#region src/kits/Charts/VerticalBarChart/index.tsx
var Au = (e) => {
	let t = (0, Ou.cloneDeep)(e), n = "", r = 0;
	return t.forEach((e) => {
		delete e.x, Object.entries(e).forEach(([e, t]) => {
			r < t && (r = t, n = e);
		});
	}), n;
}, ju = pu(({ dataConfig: e, data: t, xAxis: n = { hide: !0 }, yAxis: r, label: i = !1, aspect: a, hideTooltip: o = !1, hideGrid: s = !1, showRatio: c = !1, valueFormatter: l }, u) => {
	let d = Object.keys(e), f = ku(t), p = Math.max(...f.map((e) => cu(`${e.x}`))), m = d.reduce((e, n) => (e[n] = t.reduce((e, t) => e + t.values[n], 0), e), {}), h = {
		...lu(n),
		type: "number",
		dataKey: Au(f)
	}, g = {
		...uu(r),
		type: "category",
		dataKey: "x"
	};
	return /* @__PURE__ */ z(eu, {
		config: e,
		ref: u,
		aspect: a,
		children: /* @__PURE__ */ B(Kl, {
			layout: "vertical",
			accessibilityLayer: !0,
			data: f,
			margin: {
				left: r && !r.hide ? 8 : 12,
				right: i || c ? 100 : 0
			},
			children: [
				!o && /* @__PURE__ */ z(nu, {
					...fu(!0),
					content: /* @__PURE__ */ z(ru, { yAxisFormatter: r?.tickFormatter })
				}),
				!s && /* @__PURE__ */ z(Mc, {
					...du(),
					vertical: !0,
					horizontal: !1
				}),
				/* @__PURE__ */ z(lt, {
					...h,
					hide: n?.hide
				}),
				/* @__PURE__ */ z(ot, {
					...g,
					hide: r?.hide,
					width: r?.width ?? p + 20
				}),
				d.map((t, n) => /* @__PURE__ */ z(Ir, { children: /* @__PURE__ */ z(Ge, {
					isAnimationActive: !1,
					layout: "vertical",
					dataKey: t,
					fill: e[t].color ? mn(e[t].color) : pn(n),
					radius: 4,
					maxBarSize: 24,
					children: (i || c) && /* @__PURE__ */ z(Ve, {
						position: "right",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12,
						formatter: l,
						content: c ? /* @__PURE__ */ z(Mu, {
							valueFormatter: l,
							total: m[t],
							showLabel: i
						}) : void 0
					}, `label-{${t}}`)
				}, `bar-${t}`) }))
			]
		})
	});
}), Mu = ({ viewBox: e, offset: t = 0, value: n, valueFormatter: r, total: i, showLabel: a }) => {
	let { x: o = 0, y: s = 0, width: c = 0, height: l = 0 } = e, u = o + c + t, d = s + l / 2, f = r ? r(n) : n, p = cu(`${f}`), m = i > 0 ? Math.round(Number(n) / i * 100) : 0;
	return /* @__PURE__ */ B("g", {
		transform: `translate(${u},${d + 4})`,
		children: [a && /* @__PURE__ */ z("text", {
			x: 0,
			textAnchor: "start",
			className: "fill-f1-foreground-secondary text-sm font-medium",
			children: f
		}), /* @__PURE__ */ B("text", {
			x: a ? p + 8 : 0,
			textAnchor: "start",
			className: "fill-f1-foreground text-sm font-medium",
			children: [m, "%"]
		})]
	});
}, Nu = a(i({
	name: "AreaChart",
	type: "info"
}, gu)), Pu = a(i({
	name: "BarChart",
	type: "info"
}, _u)), Fu = a(i({
	name: "CategoryBarChart",
	type: "info"
}, vu)), Iu = a(i({
	name: "LineChart",
	type: "info"
}, Cu)), Lu = a(i({
	name: "PieChart",
	type: "info"
}, wu)), Ru = a(i({
	name: "VerticalBarChart",
	type: "info"
}, ju)), zu = a(i({
	name: "ProgressBarChart",
	type: "info"
}, Tu)), Bu = a(i({
	name: "ComboChart",
	type: "info"
}, Su)), Vu = a(i({
	name: "RadarChart",
	type: "info"
}, Du)), Hu = (e, t = {}, n = 0) => {
	let r = L(t);
	r.current = t;
	let i = L(n);
	i.current = n;
	let [a, o] = R(!1), [s, c] = R(0), [l, u] = R(n), [d, f] = R(0), [p, m] = R(1), [h, g] = R(!0), [_, v] = R(null);
	I(() => {
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
	let y = F(() => {
		e.current?.play().catch(() => {});
	}, [e]), b = F(() => {
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
		toggle: F(() => {
			a ? b() : y();
		}, [
			a,
			y,
			b
		]),
		seek: F((t) => {
			let n = e.current;
			if (!n) return;
			let i = Number.isFinite(n.duration) ? n.duration : t, a = Math.min(Math.max(t, 0), i);
			n.currentTime = a, c(a), r.current.onSeek?.(a);
		}, [e]),
		setPlaybackRate: F((t) => {
			let n = e.current;
			n && (n.playbackRate = t, m(t));
		}, [e])
	};
}, Uu = [
	"sm",
	"md",
	"lg"
], Wu = ["compact", "expanded"], Gu = [
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
], Ku = Ce, qu = ee, Ju = kr(function({ title: e, onClose: t, content: n, primaryAction: r, secondaryAction: i }, a) {
	return /* @__PURE__ */ B("div", {
		ref: a,
		className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
		"data-testid": "ai-banner",
		children: [/* @__PURE__ */ B("div", {
			className: "flex flex-row items-center justify-between px-4 py-2",
			children: [/* @__PURE__ */ z(s, {
				className: "font-medium",
				children: e
			}), t && /* @__PURE__ */ z(A, {
				variant: "ghost",
				icon: cn,
				size: "sm",
				hideLabel: !0,
				onClick: t,
				label: "Close"
			})]
		}), /* @__PURE__ */ B("div", {
			className: "flex flex-col gap-[1px]",
			children: [/* @__PURE__ */ z("div", {
				className: g("bg-f1-background px-4 py-3", i || r ? "rounded-t-[13.25px]" : "rounded-[13.25px]"),
				children: /* @__PURE__ */ z(bn, { content: n })
			}), (i || r) && /* @__PURE__ */ B("div", {
				className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
				children: [/* @__PURE__ */ z("div", { children: i && /* @__PURE__ */ z(A, {
					label: i.label,
					onClick: i.onClick,
					variant: "outline",
					icon: i.icon
				}) }), /* @__PURE__ */ z("div", { children: r && /* @__PURE__ */ z(A, {
					label: r.label,
					onClick: r.onClick,
					variant: "outline",
					icon: r.icon
				}) })]
			})]
		})]
	});
}), Yu = ({ compact: e }) => /* @__PURE__ */ B("div", {
	className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ z("div", {
		className: "flex flex-row items-center justify-between px-4 py-2",
		children: /* @__PURE__ */ z(k, { className: "h-5 w-32 rounded-md" })
	}), /* @__PURE__ */ B("div", {
		className: "flex flex-col gap-[1px]",
		children: [/* @__PURE__ */ z("div", {
			className: g("rounded-t-[13.25px] bg-f1-background px-4 py-3", e && "rounded-[13.25px]"),
			children: /* @__PURE__ */ B("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ z(k, { className: "h-4 w-full rounded-md" }),
					/* @__PURE__ */ z(k, { className: "h-4 w-3/4 rounded-md" }),
					/* @__PURE__ */ z(k, { className: "h-4 w-1/2 rounded-md" })
				]
			})
		}), !e && /* @__PURE__ */ B("div", {
			className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
			children: [/* @__PURE__ */ z(k, { className: "h-8 w-24 rounded-md" }), /* @__PURE__ */ z(k, { className: "h-8 w-28 rounded-md" })]
		})]
	})]
}), Xu = kr((e, t) => /* @__PURE__ */ z(Ju, {
	ref: t,
	...e
})), Zu = ({ compact: e }) => /* @__PURE__ */ z(Yu, { compact: e });
Xu.displayName = "F0AiBanner";
var Qu = Cr(a(Xu), Zu), $u = [
	ar,
	kn,
	In,
	En,
	Rn,
	ir,
	xr,
	Dn,
	Fn,
	Ln,
	Hn,
	On,
	yr
], ed = (e) => {
	if (!e?.content) return "";
	try {
		return zn(e.content, $u);
	} catch {
		return "";
	}
}, td = (e, t) => Pr(() => {
	if (t?.selectedTitle || t?.selectedEmoji) return {
		title: t.selectedTitle || e.title,
		emoji: t.selectedEmoji
	};
	let n = e.buttons?.find((e) => e.type === t?.selectedAction);
	return n ? {
		title: n.label,
		emoji: n.emoji
	} : { title: e.title };
}, [t, e]), nd = (e, t) => {
	let [n, r] = R(!1);
	return {
		isLoading: n,
		handleClick: F(async (n) => {
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
}, rd = (e, t, n) => {
	I(() => {
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
}, id = (e, t, n) => {
	I(() => {
		e?.shouldExecute && e?.selectedAction && t && n && (n({ data: {
			...e,
			shouldExecute: !1
		} }), t(e.selectedAction));
	}, [
		t,
		n,
		e
	]);
}, ad = (e, t, n, r) => {
	I(() => {
		if (!r?.content || !r?.isEditable || !e || !n) return;
		let i = n();
		i !== void 0 && (t(), r.content && e.chain().focus().setTextSelection(i).insertContent(r.content).run());
	}, [
		r,
		e,
		n,
		t
	]);
}, od = ({ config: e, isLoading: t, onButtonClick: n }) => /* @__PURE__ */ B("div", {
	className: "flex flex-col gap-2",
	children: [e.title && /* @__PURE__ */ z("div", {
		className: "text-f1-foreground-secondary",
		children: e.title
	}), /* @__PURE__ */ z("div", {
		className: "relative flex flex-row flex-wrap items-center gap-2",
		children: e.buttons?.map((e, r) => /* @__PURE__ */ z(A, {
			onClick: () => n(e.type),
			variant: "outline",
			icon: e.icon,
			label: e.label,
			disabled: t
		}, r))
	})]
}), sd = ({ isEditable: e }) => e ? /* @__PURE__ */ B("div", {
	className: "flex flex-col gap-2",
	children: [
		/* @__PURE__ */ z(k, { className: "h-4 w-1/2 rounded-md" }),
		/* @__PURE__ */ z(k, { className: "h-4 w-full rounded-md" }),
		/* @__PURE__ */ z(k, { className: "h-4 w-3/4 rounded-md" }),
		/* @__PURE__ */ z(k, { className: "h-4 w-1/3 rounded-md" })
	]
}) : /* @__PURE__ */ z(Qu.Skeleton, { compact: !0 }), cd = ({ node: e, updateAttributes: t, deleteNode: n, extension: r, editor: i, getPos: a }) => {
	let o = e.attrs.data, s = r.options.currentConfig || e.attrs.config, { title: c } = td(s, o), { isLoading: l, handleClick: u } = nd(s, t), d = !!(o?.selectedAction && !o?.content), f = l || d, p = ed(o);
	if (ad(i, n, a, o), rd(s, t, o), id(o, u, t), !o || !s || !s.buttons?.length) return null;
	let m = !!o?.content, h = !!(o?.selectedTitle || o?.selectedAction) && m && !o?.isEditable;
	return /* @__PURE__ */ z(An, {
		contentEditable: !1,
		children: /* @__PURE__ */ B("div", {
			className: "mb-3",
			children: [f ? /* @__PURE__ */ z(sd, { isEditable: o?.isEditable }) : h ? /* @__PURE__ */ z(Qu, {
				title: c,
				content: p,
				onClose: () => n()
			}) : /* @__PURE__ */ z("div", {
				className: "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ z(od, {
					config: s,
					isLoading: f,
					onButtonClick: u
				})
			}), /* @__PURE__ */ z(Wn, { style: { display: "none" } })]
		})
	});
}, ld = qn.create({
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
		return Nn(cd);
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
}), ud = Xn(), dd = [
	"paragraph",
	"heading",
	"blockquote",
	"codeBlock",
	"bulletList",
	"orderedList",
	"listItem",
	"table",
	"details"
], fd = new Set(dd), pd = (e) => e ? fd.has(e) : !1, md = (e) => e ? pd(e.type) && !e.attrs?.id ? !0 : e.content?.some(md) ?? !1 : !1, hd = (e) => {
	if (!e) return !1;
	if (pd(e.type.name) && !e.attrs.id) return !0;
	for (let t = 0; t < e.childCount; t += 1) if (hd(e.child(t))) return !0;
	return !1;
}, gd = (e) => e ? e instanceof er ? hd(e) : md(e) : !1, _d = Gn.create({
	name: "blockId",
	addGlobalAttributes() {
		return [{
			types: dd,
			attributes: { id: {
				default: null,
				parseHTML: (e) => e.getAttribute("data-id"),
				renderHTML: (e) => e.id ? { "data-id": e.id } : {},
				keepOnSplit: !1
			} }
		}];
	},
	addProseMirrorPlugins() {
		return [new ur({
			key: new hr("blockIdPlugin"),
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
						if (pd(e.type.name) && !e.attrs.id) {
							let n = pr(5);
							r.setNodeMarkup(t, void 0, {
								...e.attrs,
								id: n
							}), i = !0;
						}
					});
				}) : n.doc.descendants((e, t) => {
					if (pd(e.type.name) && !e.attrs.id) {
						let n = pr(5);
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
}), vd = (e, t) => {
	let n = null;
	return e.state.doc.descendants((e, r) => e.attrs.id !== t || (n = {
		node: e,
		pos: r
	}, !1)), n;
}, yd = ({ key: e, editor: t, onPaste: n, onDrop: r, allowedMimeTypes: i }) => new ur({
	key: e || new hr("fileHandler"),
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
}), bd = Gn.create({
	name: "fileHandler",
	addOptions() {
		return {
			onPaste: void 0,
			onDrop: void 0,
			allowedMimeTypes: void 0
		};
	},
	addProseMirrorPlugins() {
		return [yd({
			key: new hr(this.name),
			editor: this.editor,
			allowedMimeTypes: this.options.allowedMimeTypes,
			onDrop: this.options.onDrop,
			onPaste: this.options.onPaste
		})];
	}
}), xd = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Sd = qn.create({
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
		return ["img", wn(this.options.HTMLAttributes, e)];
	},
	addCommands() {
		return { setImage: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: e
		}) };
	},
	addInputRules() {
		return [$n({
			find: xd,
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
}), Cd = 52428800, wd = [
	"image/jpeg",
	"image/png",
	"image/gif",
	"image/webp"
], Td = 10, Ed = 100, Dd = ({ node: e, deleteNode: t, selected: n, editor: r, updateAttributes: i }) => {
	let { src: a, alt: o, title: s, uploading: c, width: l } = e.attrs, d = r.isEditable, f = u(), [p, m] = R(!1), h = F((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = e.clientX, n = l ?? Ed, a = r.view.dom.clientWidth, o = (e) => {
			let r = (e.clientX - t) / a * 100, o = Math.min(Ed, Math.max(Td, n + r));
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
	return /* @__PURE__ */ z(An, {
		className: "mb-2",
		children: /* @__PURE__ */ B("div", {
			style: { width: `${l ?? Ed}%` },
			className: g("image-resizable-wrapper group/image relative rounded-lg", n && "border-2 border-f1-border-selected-bold border-solid", p && "select-none"),
			children: [
				/* @__PURE__ */ z("img", {
					src: a,
					alt: o,
					title: s,
					draggable: !1,
					className: "block h-auto w-full rounded-md transition-all duration-150 ease-out"
				}),
				c && /* @__PURE__ */ z("div", {
					className: "absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200",
					children: /* @__PURE__ */ z(un, { size: "medium" })
				}),
				d && !c && /* @__PURE__ */ z("div", {
					className: "absolute right-2 top-2 opacity-0 transition-opacity group-hover/image:opacity-100",
					children: /* @__PURE__ */ z(A, {
						onClick: t,
						label: f.actions.delete,
						icon: ie,
						variant: "default",
						hideLabel: !0
					})
				}),
				d && !c && /* @__PURE__ */ z("div", {
					className: g("absolute right-2 top-1/2 -translate-y-1/2 flex cursor-col-resize items-center justify-center", "h-12 w-2 rounded-sm border border-solid border-f1-border bg-f1-foreground-inverse-secondary", "opacity-0 transition-opacity group-hover/image:opacity-100", p && "opacity-100"),
					onMouseDown: h,
					role: "separator",
					"aria-orientation": "vertical",
					"aria-label": "Resize image",
					tabIndex: 0
				})
			]
		})
	});
}, Od = Sd.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			width: {
				default: Ed,
				parseHTML: (e) => {
					let t = e.style.width;
					return t?.endsWith("%") && parseInt(t, 10) || Ed;
				},
				renderHTML: (e) => !e.width || e.width === Ed ? {} : { style: `width: ${e.width}%` }
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
		return Nn(Dd);
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["img", wn(this.options.HTMLAttributes, e)];
	}
}).configure({
	inline: !1,
	allowBase64: !0
}), kd = (e, t) => {
	let n = null;
	return e.state.doc.descendants((e, r) => e.type.name === "image" && e.attrs["data-upload-id"] === t ? (n = r, !1) : !0), n;
}, Ad = async (e, t, n, r) => {
	let i = n.maxFileSize ?? Cd, { onError: a } = n;
	if (!wd.includes(t.type)) {
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
		let { url: r } = await n.onUpload(t), i = kd(e, s);
		i !== null && e.chain().setNodeSelection(i).updateAttributes("image", {
			src: r,
			uploading: !1,
			"data-upload-id": null
		}).run();
	} catch {
		a?.("upload-failed");
		let t = kd(e, s);
		t !== null && e.chain().setNodeSelection(t).deleteSelection().run();
	} finally {
		URL.revokeObjectURL(o);
	}
}, jd = (e) => bd.configure({
	allowedMimeTypes: wd,
	onDrop: (t, n, r) => {
		n.forEach((n) => {
			Ad(t, n, e, r);
		});
	},
	onPaste: (t, n) => {
		n.forEach((n) => {
			Ad(t, n, e);
		});
	}
}), Md = (e, t, n) => {
	Ad(e, t, n);
}, Nd = [
	"superNegative",
	"negative",
	"neutral",
	"positive",
	"superPositive"
], Pd = {
	superNegative: Xe,
	negative: Qe,
	neutral: Je,
	positive: Pe,
	superPositive: De
}, Fd = {
	superNegative: "mood-super-negative",
	negative: "mood-negative",
	neutral: "mood-neutral",
	positive: "mood-positive",
	superPositive: "mood-super-positive"
}, Id = ({ node: e, deleteNode: t, updateAttributes: n }) => {
	let r = u(), [i, a] = R(e.attrs.isOpen ?? !1), o = e.attrs.data;
	if (!o) return null;
	let s = () => {
		let e = !i;
		a(e), n({ isOpen: e });
	}, c = [{
		label: r.actions.delete,
		icon: ie,
		critical: !0,
		onClick: () => t()
	}];
	return /* @__PURE__ */ B(An, {
		contentEditable: !1,
		children: [/* @__PURE__ */ B("div", {
			className: "editor-mood-tracker mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ B("div", {
				className: "flex flex-row items-center justify-between gap-2",
				children: [/* @__PURE__ */ z("div", {
					className: "flex flex-row items-center gap-2",
					children: /* @__PURE__ */ B("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ B("div", {
							className: "flex flex-row items-center gap-3",
							children: [/* @__PURE__ */ z("p", {
								className: "text-f1-text-primary text-lg font-semibold",
								children: o.title
							}), /* @__PURE__ */ z("div", {
								className: "flex flex-row items-center",
								children: o.days.map((e, t) => /* @__PURE__ */ z("div", {
									className: "-ml-1.5 flex items-center justify-center rounded-full bg-f1-background",
									children: /* @__PURE__ */ z(l, {
										icon: Pd[e.mood],
										size: "lg",
										color: Fd[e.mood]
									})
								}, t))
							})]
						}), /* @__PURE__ */ z("p", { children: /* @__PURE__ */ z("span", {
							className: "text-f1-text-primary text-md font-normal",
							children: o.averageMoodComment
						}) })]
					})
				}), /* @__PURE__ */ B("div", {
					className: "flex flex-row items-center gap-1",
					children: [/* @__PURE__ */ z(A, {
						onClick: s,
						variant: "outline",
						hideLabel: !0,
						label: i ? r.actions.collapse : r.actions.expand,
						icon: i ? $t : Lt,
						size: "sm"
					}), /* @__PURE__ */ z(fn, {
						items: c,
						size: "sm"
					})]
				})]
			}), i && /* @__PURE__ */ z("div", {
				className: "text-f1-text-primary flex flex-col gap-2",
				children: o.days.map((e, t) => /* @__PURE__ */ B("div", {
					className: "flex flex-row items-center gap-2",
					children: [/* @__PURE__ */ z("div", {
						className: "flex items-center justify-center rounded-full",
						children: /* @__PURE__ */ z(l, {
							icon: Pd[e.mood],
							size: "lg",
							color: Fd[e.mood]
						})
					}), /* @__PURE__ */ B("p", {
						className: "text-f1-text-primary text-md font-normal",
						children: [
							/* @__PURE__ */ B("span", {
								className: "font-semibold",
								children: [e.day, ":"]
							}),
							" ",
							e.comment || "-"
						]
					})]
				}, t))
			})]
		}), /* @__PURE__ */ z(Wn, { style: { display: "none" } })]
	});
}, Ld = qn.create({
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
		return Nn(Id);
	},
	addCommands() {
		return { insertMoodTracker: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: { data: e }
		}) };
	}
}), Rd = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/, zd = /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/, Bd = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*)$/gm, Vd = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\S*)$/gm;
function Hd(e) {
	let t = e.match(Rd);
	if (t) return {
		provider: "youtube",
		videoId: t[1],
		embedUrl: `https://www.youtube-nocookie.com/embed/${t[1]}`
	};
	let n = e.match(zd);
	return n ? {
		provider: "vimeo",
		videoId: n[1],
		embedUrl: `https://player.vimeo.com/video/${n[1]}`
	} : null;
}
var Ud = ({ node: e, deleteNode: t, selected: n, editor: r }) => {
	let { src: i, provider: a } = e.attrs, o = r.isEditable, s = u();
	return /* @__PURE__ */ z(An, {
		className: "mb-2",
		children: /* @__PURE__ */ B("div", {
			className: g("video-embed-wrapper relative overflow-hidden rounded-lg", n && "border-2 border-solid border-f1-border-selected-bold"),
			children: [/* @__PURE__ */ z("div", {
				className: "relative w-full",
				style: { paddingBottom: "56.25%" },
				children: /* @__PURE__ */ z("iframe", {
					src: i,
					title: `${a} video`,
					className: "absolute inset-0 h-full w-full border-0",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: !0
				})
			}), o && /* @__PURE__ */ z("div", {
				className: "dark absolute right-2 top-2",
				children: /* @__PURE__ */ z(A, {
					onClick: t,
					label: s.actions.delete,
					icon: ie,
					variant: "outline",
					hideLabel: !0,
					size: "sm"
				})
			})]
		})
	});
}, Wd = qn.create({
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
			wn(e, { "data-video-embed": "" }),
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
		return Nn(Ud);
	},
	addCommands() {
		return { setVideoEmbed: ({ src: e }) => ({ commands: t }) => {
			let n = Hd(e);
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
		return [gr({
			find: Bd,
			type: this.type,
			getAttributes: (e) => {
				let t = Hd(e[0]);
				return t ? {
					src: t.embedUrl,
					provider: t.provider,
					videoId: t.videoId
				} : !1;
			}
		}), gr({
			find: Vd,
			type: this.type,
			getAttributes: (e) => {
				let t = Hd(e[0]);
				return t ? {
					src: t.embedUrl,
					provider: t.provider,
					videoId: t.videoId
				} : !1;
			}
		})];
	}
}), Gd = ({ aiBlockConfig: e, translations: t, imageUploadConfig: n }) => [
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
				icon: ce
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
				icon: ae
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
				icon: le
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
				icon: re
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
				icon: D
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
				icon: se
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
					t.type = "file", t.accept = wd.join(","), t.onchange = () => {
						let r = t.files?.[0];
						r && Md(e, r, n);
					}, t.click();
				},
				icon: Re
			}] : [],
			{
				title: t.richTextEditor.video,
				command: (e) => {
					let n = window.prompt(t.richTextEditor.videoUrlPrompt);
					n && (Hd(n) ? e.commands.setVideoEmbed({ src: n }) : window.alert(t.richTextEditor.videoUrlInvalid));
				},
				icon: nt
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
				icon: Lt
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
				icon: oe
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
				icon: Cn
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
				icon: Rt
			}
		]
	}
], Kd = kr(({ items: e, groups: t, command: n }, r) => {
	let [i, a] = R(0), o = L(null), s = L(null), c = Pr(() => t || [{
		title: "",
		commands: e
	}], [t, e]), u = Pr(() => c.flatMap((e) => e.commands), [c]), d = Pr(() => {
		let e = [], t = 0;
		for (let n of c) e.push(t), t += n.commands.length;
		return e;
	}, [c]), f = F((e) => {
		let t = u[e];
		t && n(t);
	}, [u, n]), p = F((e) => {
		let t = o.current;
		if (!t) return;
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
		r.top < n.top ? t.scrollTop += r.top - n.top : r.bottom > n.bottom && (t.scrollTop += r.bottom - n.bottom);
	}, []), m = F(() => {
		a((e) => e <= 0 ? u.length - 1 : e - 1);
	}, [u.length]), h = F(() => {
		a((e) => e >= u.length - 1 ? 0 : e + 1);
	}, [u.length]), _ = F(() => {
		f(i);
	}, [i, f]);
	I(() => {
		s.current && p(s.current);
	}, [i, p]), I(() => {
		a(0);
	}, [e.length]), Mr(r, () => ({ onKeyDown: ({ event: e }) => e.key === "ArrowUp" ? (e.preventDefault(), m(), !0) : e.key === "ArrowDown" ? (e.preventDefault(), h(), !0) : e.key === "Enter" && (e.preventDefault(), _(), !0) }), [
		m,
		h,
		_
	]);
	let v = (e, t) => d[e] + t;
	return /* @__PURE__ */ z("div", {
		ref: o,
		className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
		children: c.map((e, n) => /* @__PURE__ */ B("div", { children: [/* @__PURE__ */ B("div", {
			className: "p-1",
			children: [t && e.title && /* @__PURE__ */ z("div", {
				className: "p-2",
				children: /* @__PURE__ */ z("p", {
					className: "text-sm font-medium tracking-wide text-f1-foreground-secondary",
					children: e.title
				})
			}), e.commands.map((e, t) => {
				let r = v(n, t), o = r === i;
				return /* @__PURE__ */ B("div", {
					ref: o ? s : null,
					className: g("flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover", o && "bg-f1-background-secondary"),
					onClick: () => {
						a(r), f(r);
					},
					onMouseEnter: () => a(r),
					children: [e.emoji ? /* @__PURE__ */ z("span", {
						className: "text-base",
						children: e.emoji
					}) : e.icon ? /* @__PURE__ */ z(l, {
						icon: e.icon,
						className: "text-f1-foreground-secondary"
					}) : null, /* @__PURE__ */ z("p", {
						className: "flex-grow text-sm font-medium text-f1-foreground",
						children: e.title
					})]
				}, `${n}-${t}`);
			})]
		}), t && n < c.length - 1 && /* @__PURE__ */ z("div", {
			className: "py-1",
			children: /* @__PURE__ */ z("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
		})] }, n))
	});
});
Kd.displayName = "CommandList";
//#endregion
//#region src/components/RichText/internal/Extensions/SlashCommand/index.tsx
var qd = ({ aiBlockConfig: e, translations: t, imageUploadConfig: n }) => {
	let r = Gd({
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
	return Gn.create({
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
			return [br({
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
						return /* @__PURE__ */ B(tn, {
							open: !0,
							modal: !1,
							children: [
								/* @__PURE__ */ z("div", { style: n }),
								/* @__PURE__ */ z(rn, {
									asChild: !0,
									children: /* @__PURE__ */ z("div", { style: n })
								}),
								/* @__PURE__ */ z(on, {
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
									children: /* @__PURE__ */ z("div", { ref: (t) => {
										t && e.parentNode !== t && t.appendChild(e);
									} })
								})
							]
						});
					};
					return {
						onStart: (r) => {
							if (r.items.length === 0) return;
							e = new fr(Kd, {
								props: {
									items: r.items,
									groups: o(r.query),
									command: r.command
								},
								editor: r.editor
							});
							let s = i(r.clientRect);
							n = document.createElement("div"), document.body.appendChild(n), t = (0, ud.createRoot)(n), t.render(/* @__PURE__ */ z(a, {
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
									t.render(/* @__PURE__ */ z(a, {
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
}, Jd = ({ node: e, deleteNode: t, updateAttributes: n }) => {
	let r = u(), [i, a] = R(e.attrs.isOpen ?? !1), o = e.attrs.data;
	if (!o) return null;
	let s = () => {
		let e = !i;
		a(e), n({ isOpen: e });
	}, c = [{
		label: r.actions.delete,
		icon: ie,
		critical: !0,
		onClick: () => t()
	}], l = (e) => o.users.find((t) => t.id === e), d = (e) => {
		try {
			let t = new Date(e);
			return Pt(t, "HH:mm");
		} catch (t) {
			return console.error(t), e;
		}
	};
	return /* @__PURE__ */ B(An, {
		contentEditable: !1,
		children: [/* @__PURE__ */ B("div", {
			className: "editor-transcript mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ B("div", {
				className: "flex flex-row items-center justify-between gap-2",
				children: [/* @__PURE__ */ z("div", {
					className: "flex flex-row items-center gap-2",
					children: /* @__PURE__ */ B("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ z("div", {
							className: "flex flex-row items-center gap-3",
							children: /* @__PURE__ */ z("p", {
								className: "text-f1-text-primary text-lg font-semibold",
								children: o.title
							})
						}), /* @__PURE__ */ z("p", {
							className: "text-f1-text-secondary text-sm",
							children: o.messages.length
						})]
					})
				}), /* @__PURE__ */ B("div", {
					className: "flex flex-row items-center gap-1",
					children: [/* @__PURE__ */ z(A, {
						onClick: s,
						variant: "outline",
						hideLabel: !0,
						label: i ? r.actions.collapse : r.actions.expand,
						icon: i ? $t : Lt,
						size: "sm"
					}), /* @__PURE__ */ z(fn, {
						items: c,
						size: "sm"
					})]
				})]
			}), i && /* @__PURE__ */ z("div", {
				className: "scrollbar-macos text-f1-text-primary flex max-h-[500px] flex-col gap-4 overflow-y-auto",
				children: o.messages.map((e, t) => {
					let n = l(e.userId);
					return /* @__PURE__ */ B("div", {
						className: "flex flex-row gap-3",
						children: [n?.imageUrl && /* @__PURE__ */ z(Sn, {
							size: "xs",
							src: n.imageUrl,
							firstName: n.fullname,
							lastName: ""
						}), /* @__PURE__ */ B("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ B("div", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ z("span", {
									className: "text-f1-text-primary font-medium",
									children: n?.fullname || "Unknown User"
								}), /* @__PURE__ */ z("span", {
									className: "text-f1-text-tertiary text-xs",
									children: d(e.dateTime)
								})]
							}), /* @__PURE__ */ z("p", {
								className: "text-f1-text-secondary",
								children: e.text
							})]
						})]
					}, t);
				})
			})]
		}), /* @__PURE__ */ z(Wn, { style: { display: "none" } })]
	});
}, Yd = qn.create({
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
		return Nn(Jd);
	},
	addCommands() {
		return { insertTranscript: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: { data: e }
		}) };
	}
}), Xd = () => /* @__PURE__ */ new Map(), Zd = (e) => {
	let t = Xd();
	return e.forEach((e, n) => {
		t.set(n, e);
	}), t;
}, Qd = (e, t, n) => {
	let r = e.get(t);
	return r === void 0 && e.set(t, r = n()), r;
}, $d = (e, t) => {
	let n = [];
	for (let [r, i] of e) n.push(t(i, r));
	return n;
}, ef = (e, t) => {
	for (let [n, r] of e) if (t(r, n)) return !0;
	return !1;
}, tf = () => /* @__PURE__ */ new Set(), nf = (e) => e[e.length - 1], rf = (e, t) => {
	for (let n = 0; n < t.length; n++) e.push(t[n]);
}, af = Array.from, of = (e, t) => {
	for (let n = 0; n < e.length; n++) if (t(e[n], n, e)) return !0;
	return !1;
}, sf = Array.isArray, cf = class {
	constructor() {
		this._observers = Xd();
	}
	on(e, t) {
		return Qd(this._observers, e, tf).add(t), t;
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
		return af((this._observers.get(e) || Xd()).values()).forEach((e) => e(...t));
	}
	destroy() {
		this._observers = Xd();
	}
}, lf = Math.floor, uf = Math.abs, df = (e, t) => e < t ? e : t, ff = (e, t) => e > t ? e : t;
Number.isNaN;
var pf = (e) => e === 0 ? 1 / e < 0 : e < 0, mf = 1 << 29, hf = 2 ** 53 - 1, gf = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && lf(e) === e);
Number.isNaN, Number.parseInt;
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/string.js
var _f = String.fromCharCode;
String.fromCodePoint, _f(65535);
var vf = (e) => e.toLowerCase(), yf = /^\s*/g, bf = (e) => e.replace(yf, ""), xf = /([A-Z])/g, Sf = (e, t) => bf(e.replace(xf, (e) => `${t}${vf(e)}`)), Cf = (e) => {
	let t = unescape(encodeURIComponent(e)), n = t.length, r = new Uint8Array(n);
	for (let e = 0; e < n; e++) r[e] = t.codePointAt(e);
	return r;
}, wf = typeof TextEncoder < "u" ? new TextEncoder() : null, Tf = wf ? (e) => wf.encode(e) : Cf, Ef = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", {
	fatal: !0,
	ignoreBOM: !0
});
/* c8 ignore start */
Ef && Ef.decode(/* @__PURE__ */ new Uint8Array()).length === 1 && 
/* c8 ignore next */
(Ef = null);
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/encoding.js
var Df = class {
	constructor() {
		this.cpos = 0, this.cbuf = /* @__PURE__ */ new Uint8Array(100), this.bufs = [];
	}
}, Of = () => new Df(), kf = (e) => {
	let t = Of();
	return e(t), jf(t);
}, Af = (e) => {
	let t = e.cpos;
	for (let n = 0; n < e.bufs.length; n++) t += e.bufs[n].length;
	return t;
}, jf = (e) => {
	let t = new Uint8Array(Af(e)), n = 0;
	for (let r = 0; r < e.bufs.length; r++) {
		let i = e.bufs[r];
		t.set(i, n), n += i.length;
	}
	return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, Mf = (e, t) => {
	let n = e.cbuf.length;
	n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(ff(n, t) * 2), e.cpos = 0);
}, W = (e, t) => {
	let n = e.cbuf.length;
	e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Nf = W, G = (e, t) => {
	for (; t > 127;) W(e, 128 | 127 & t), t = lf(t / 128);
	W(e, 127 & t);
}, Pf = (e, t) => {
	let n = pf(t);
	for (n && (t = -t), W(e, (t > 63 ? 128 : 0) | (n ? 64 : 0) | 63 & t), t = lf(t / 64); t > 0;) W(e, (t > 127 ? 128 : 0) | 127 & t), t = lf(t / 128);
}, Ff = /* @__PURE__ */ new Uint8Array(3e4), If = Ff.length / 3, Lf = wf && wf.encodeInto ? (e, t) => {
	if (t.length < If) {
		/* c8 ignore next */
		let n = wf.encodeInto(t, Ff).written || 0;
		G(e, n);
		for (let t = 0; t < n; t++) W(e, Ff[t]);
	} else zf(e, Tf(t));
} : (e, t) => {
	let n = unescape(encodeURIComponent(t)), r = n.length;
	G(e, r);
	for (let t = 0; t < r; t++) W(e, n.codePointAt(t));
}, Rf = (e, t) => {
	let n = e.cbuf.length, r = e.cpos, i = df(n - r, t.length), a = t.length - i;
	e.cbuf.set(t.subarray(0, i), r), e.cpos += i, a > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(ff(n * 2, a)), e.cbuf.set(t.subarray(i)), e.cpos = a);
}, zf = (e, t) => {
	G(e, t.byteLength), Rf(e, t);
}, Bf = (e, t) => {
	Mf(e, t);
	let n = new DataView(e.cbuf.buffer, e.cpos, t);
	return e.cpos += t, n;
}, Vf = (e, t) => Bf(e, 4).setFloat32(0, t, !1), Hf = (e, t) => Bf(e, 8).setFloat64(0, t, !1), Uf = (e, t) => Bf(e, 8).setBigInt64(0, t, !1), Wf = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4)), Gf = (e) => (Wf.setFloat32(0, e), Wf.getFloat32(0) === e), Kf = (e, t) => {
	switch (typeof t) {
		case "string":
			W(e, 119), Lf(e, t);
			break;
		case "number":
			gf(t) && uf(t) <= 2147483647 ? (W(e, 125), Pf(e, t)) : Gf(t) ? (W(e, 124), Vf(e, t)) : (W(e, 123), Hf(e, t));
			break;
		case "bigint":
			W(e, 122), Uf(e, t);
			break;
		case "object":
			if (t === null) W(e, 126);
			else if (sf(t)) {
				W(e, 117), G(e, t.length);
				for (let n = 0; n < t.length; n++) Kf(e, t[n]);
			} else if (t instanceof Uint8Array) W(e, 116), zf(e, t);
			else {
				W(e, 118);
				let n = Object.keys(t);
				G(e, n.length);
				for (let r = 0; r < n.length; r++) {
					let i = n[r];
					Lf(e, i), Kf(e, t[i]);
				}
			}
			break;
		case "boolean":
			W(e, t ? 120 : 121);
			break;
		default: W(e, 127);
	}
}, qf = class extends Df {
	constructor(e) {
		super(), this.w = e, this.s = null, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (this.count > 0 && G(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
	}
}, Jf = (e) => {
	e.count > 0 && (Pf(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && G(e.encoder, e.count - 2));
}, Yf = class {
	constructor() {
		this.encoder = new Df(), this.s = 0, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (Jf(this), this.count = 1, this.s = e);
	}
	toUint8Array() {
		return Jf(this), jf(this.encoder);
	}
}, Xf = (e) => {
	if (e.count > 0) {
		let t = e.diff * 2 + (e.count === 1 ? 0 : 1);
		Pf(e.encoder, t), e.count > 1 && G(e.encoder, e.count - 2);
	}
}, Zf = class {
	constructor() {
		this.encoder = new Df(), this.s = 0, this.count = 0, this.diff = 0;
	}
	write(e) {
		this.diff === e - this.s ? (this.s = e, this.count++) : (Xf(this), this.count = 1, this.diff = e - this.s, this.s = e);
	}
	toUint8Array() {
		return Xf(this), jf(this.encoder);
	}
}, Qf = class {
	constructor() {
		this.sarr = [], this.s = "", this.lensE = new Yf();
	}
	write(e) {
		this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
	}
	toUint8Array() {
		let e = new Df();
		return this.sarr.push(this.s), this.s = "", Lf(e, this.sarr.join("")), Rf(e, this.lensE.toUint8Array()), jf(e);
	}
}, $f = (e) => Error(e), ep = () => {
	throw $f("Method unimplemented");
}, tp = () => {
	throw $f("Unexpected case");
}, np = $f("Unexpected end of array"), rp = $f("Integer out of Range"), ip = class {
	constructor(e) {
		this.arr = e, this.pos = 0;
	}
}, ap = (e) => new ip(e), op = (e) => e.pos !== e.arr.length, sp = (e, t) => {
	let n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
	return e.pos += t, n;
}, cp = (e) => sp(e, K(e)), lp = (e) => e.arr[e.pos++], K = (e) => {
	let t = 0, n = 1, r = e.arr.length;
	for (; e.pos < r;) {
		let r = e.arr[e.pos++];
		if (t += (r & 127) * n, n *= 128, r < 128) return t;
		/* c8 ignore start */
		if (t > hf) throw rp;
	}
	throw np;
}, up = (e) => {
	let t = e.arr[e.pos++], n = t & 63, r = 64, i = (t & 64) > 0 ? -1 : 1;
	if (!(t & 128)) return i * n;
	let a = e.arr.length;
	for (; e.pos < a;) {
		if (t = e.arr[e.pos++], n += (t & 127) * r, r *= 128, t < 128) return i * n;
		/* c8 ignore start */
		if (n > hf) throw rp;
	}
	throw np;
}, dp = Ef ? (e) => Ef.decode(cp(e)) : (e) => {
	let t = K(e);
	if (t === 0) return "";
	{
		let n = String.fromCodePoint(lp(e));
		if (--t < 100) for (; t--;) n += String.fromCodePoint(lp(e));
		else for (; t > 0;) {
			let r = t < 1e4 ? t : 1e4, i = e.arr.subarray(e.pos, e.pos + r);
			e.pos += r, n += String.fromCodePoint.apply(null, i), t -= r;
		}
		return decodeURIComponent(escape(n));
	}
}, fp = (e, t) => {
	let n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
	return e.pos += t, n;
}, pp = [
	(e) => void 0,
	(e) => null,
	up,
	(e) => fp(e, 4).getFloat32(0, !1),
	(e) => fp(e, 8).getFloat64(0, !1),
	(e) => fp(e, 8).getBigInt64(0, !1),
	(e) => !1,
	(e) => !0,
	dp,
	(e) => {
		let t = K(e), n = {};
		for (let r = 0; r < t; r++) {
			let t = dp(e);
			n[t] = mp(e);
		}
		return n;
	},
	(e) => {
		let t = K(e), n = [];
		for (let r = 0; r < t; r++) n.push(mp(e));
		return n;
	},
	cp
], mp = (e) => pp[127 - lp(e)](e), hp = class extends ip {
	constructor(e, t) {
		super(e), this.reader = t, this.s = null, this.count = 0;
	}
	read() {
		return this.count === 0 && (this.s = this.reader(this), this.count = op(this) ? K(this) + 1 : -1), this.count--, this.s;
	}
}, gp = class extends ip {
	constructor(e) {
		super(e), this.s = 0, this.count = 0;
	}
	read() {
		if (this.count === 0) {
			this.s = up(this);
			let e = pf(this.s);
			this.count = 1, e && (this.s = -this.s, this.count = K(this) + 2);
		}
		return this.count--, this.s;
	}
}, _p = class extends ip {
	constructor(e) {
		super(e), this.s = 0, this.count = 0, this.diff = 0;
	}
	read() {
		if (this.count === 0) {
			let e = up(this), t = e & 1;
			this.diff = lf(e / 2), this.count = 1, t && (this.count = K(this) + 2);
		}
		return this.s += this.diff, this.count--, this.s;
	}
}, vp = class {
	constructor(e) {
		this.decoder = new gp(e), this.str = dp(this.decoder), this.spos = 0;
	}
	read() {
		let e = this.spos + this.decoder.read(), t = this.str.slice(this.spos, e);
		return this.spos = e, t;
	}
};
crypto.subtle;
var yp = crypto.getRandomValues.bind(crypto), bp = Math.random, xp = () => yp(/* @__PURE__ */ new Uint32Array(1))[0], Sp = (e) => e[lf(bp() * e.length)], Cp = "10000000-1000-4000-8000-100000000000", wp = () => Cp.replace(/[018]/g, (e) => (e ^ xp() & 15 >> e / 4).toString(16)), Tp = Date.now, Ep = (e) => new Promise(e);
Promise.all.bind(Promise);
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/conditions.js
/* c8 ignore next */
var Dp = (e) => e === void 0 ? null : e, Op = new class {
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
	typeof localStorage < "u" && localStorage && (Op = localStorage);
} catch {}
/* c8 ignore stop */
/* c8 ignore next */
var kp = Op, Ap = Object.assign, jp = Object.keys, Mp = (e, t) => {
	for (let n in e) t(e[n], n);
}, Np = (e) => jp(e).length, Pp = (e) => {
	for (let t in e) return !1;
	return !0;
}, Fp = (e, t) => {
	for (let n in e) if (!t(e[n], n)) return !1;
	return !0;
}, Ip = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Lp = (e, t) => e === t || Np(e) === Np(t) && Fp(e, (e, n) => (e !== void 0 || Ip(t, n)) && t[n] === e), Rp = Object.freeze, zp = (e) => {
	for (let t in e) {
		let n = e[t];
		(typeof n == "object" || typeof n == "function") && zp(e[t]);
	}
	return Rp(e);
}, Bp = (e, t, n = 0) => {
	try {
		for (; n < e.length; n++) e[n](...t);
	} finally {
		n < e.length && Bp(e, t, n + 1);
	}
}, Vp = (e, t) => t.includes(e), Hp = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", Up = typeof window < "u" && typeof document < "u" && !Hp;
typeof navigator < "u" && /Mac/.test(navigator.platform);
var Wp, Gp = [], Kp = () => {
	if (Wp === void 0) {
		if (Hp) {
			Wp = Xd();
			let e = process.argv, t = null;
			for (let n = 0; n < e.length; n++) {
				let r = e[n];
				r[0] === "-" ? (t !== null && Wp.set(t, ""), t = r) : t === null ? Gp.push(r) : (Wp.set(t, r), t = null);
			}
			t !== null && Wp.set(t, "");
		} else typeof location == "object" ? (Wp = Xd(), (location.search || "?").slice(1).split("&").forEach((e) => {
			if (e.length !== 0) {
				let [t, n] = e.split("=");
				Wp.set(`--${Sf(t, "-")}`, n), Wp.set(`-${Sf(t, "-")}`, n);
			}
		})) : Wp = Xd();
	}
	return Wp;
}, qp = (e) => Kp().has(e), Jp = (e) => Dp(Hp ? process.env[e.toUpperCase().replaceAll("-", "_")] : kp.getItem(e)), Yp = (e) => qp("--" + e) || Jp(e) !== null;
Yp("production");
/* c8 ignore start */
var Xp = Hp && Vp(process.env.FORCE_COLOR, [
	"true",
	"1",
	"2"
]) || !qp("--no-colors") && !Yp("no-color") && (!Hp || process.stdout.isTTY) && (!Hp || qp("--color") || Jp("COLORTERM") !== null || (Jp("TERM") || "").includes("color")), Zp = Up ? (e) => {
	let t = "";
	for (let n = 0; n < e.byteLength; n++) t += _f(e[n]);
	return btoa(t);
} : (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), Qp = (e) => kf((t) => Kf(t, e)), $p = class {
	constructor(e, t) {
		this.left = e, this.right = t;
	}
}, em = (e, t) => new $p(e, t), tm = typeof document < "u" ? document : {};
typeof DOMParser < "u" && new DOMParser();
var nm = (e) => $d(e, (e, t) => `${t}:${e};`).join("");
tm.ELEMENT_NODE, tm.TEXT_NODE, tm.CDATA_SECTION_NODE, tm.COMMENT_NODE, tm.DOCUMENT_NODE, tm.DOCUMENT_TYPE_NODE, tm.DOCUMENT_FRAGMENT_NODE;
/* c8 ignore stop */
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/eventloop.js
var rm = ((e) => class {
	constructor(e) {
		this._ = e;
	}
	destroy() {
		e(this._);
	}
})(clearTimeout), im = (e, t) => new rm(setTimeout(t, e)), am = Symbol, om = am(), sm = am(), cm = am(), lm = am(), um = am(), dm = am(), fm = am(), pm = am(), mm = am(), hm = (e) => {
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
Tp();
/* c8 ignore stop */
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/logging.js
var gm = {
	[om]: em("font-weight", "bold"),
	[sm]: em("font-weight", "normal"),
	[cm]: em("color", "blue"),
	[um]: em("color", "green"),
	[lm]: em("color", "grey"),
	[dm]: em("color", "red"),
	[fm]: em("color", "purple"),
	[pm]: em("color", "orange"),
	[mm]: em("color", "black")
}, _m = Xp ? (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = Xd(), i = [], a = 0;
	for (; a < e.length; a++) {
		let i = e[a], o = gm[i];
		if (o !== void 0) r.set(o.left, o.right);
		else {
			if (i === void 0) break;
			if (i.constructor === String || i.constructor === Number) {
				let e = nm(r);
				a > 0 || e.length > 0 ? (t.push("%c" + i), n.push(e)) : t.push(i);
			} else break;
		}
	}
	for (a > 0 && (i = n, i.unshift(t.join(""))); a < e.length; a++) {
		let t = e[a];
		t instanceof Symbol || i.push(t);
	}
	return i;
} : hm, vm = (...e) => {
	/* c8 ignore next */
	console.log(..._m(e)), bm.forEach((t) => t.print(e));
}, ym = (...e) => {
	console.warn(..._m(e)), e.unshift(pm), bm.forEach((t) => t.print(e));
}, bm = tf(), xm = (e) => ({
	[Symbol.iterator]() {
		return this;
	},
	next: e
}), Sm = (e, t) => xm(() => {
	let n;
	do
		n = e.next();
	while (!n.done && !t(n.value));
	return n;
}), Cm = (e, t) => xm(() => {
	let { done: n, value: r } = e.next();
	return {
		done: n,
		value: n ? void 0 : t(r)
	};
}), wm = class {
	constructor(e, t) {
		this.clock = e, this.len = t;
	}
}, Tm = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map();
	}
}, Em = (e, t, n) => t.clients.forEach((t, r) => {
	let i = e.doc.store.clients.get(r);
	if (i != null) {
		let r = i[i.length - 1], a = r.id.clock + r.length;
		for (let r = 0, o = t[r]; r < t.length && o.clock < a; o = t[++r]) Oh(e, i, o.clock, o.len, n);
	}
}), Dm = (e, t) => {
	let n = 0, r = e.length - 1;
	for (; n <= r;) {
		let i = lf((n + r) / 2), a = e[i], o = a.clock;
		if (o <= t) {
			if (t < o + a.len) return i;
			n = i + 1;
		} else r = i - 1;
	}
	return null;
}, Om = (e, t) => {
	let n = e.clients.get(t.client);
	return n !== void 0 && Dm(n, t.clock) !== null;
}, km = (e) => {
	e.clients.forEach((e) => {
		e.sort((e, t) => e.clock - t.clock);
		let t, n;
		for (t = 1, n = 1; t < e.length; t++) {
			let r = e[n - 1], i = e[t];
			r.clock + r.len >= i.clock ? r.len = ff(r.len, i.clock + i.len - r.clock) : (n < t && (e[n] = i), n++);
		}
		e.length = n;
	});
}, Am = (e) => {
	let t = new Tm();
	for (let n = 0; n < e.length; n++) e[n].clients.forEach((r, i) => {
		if (!t.clients.has(i)) {
			let a = r.slice();
			for (let t = n + 1; t < e.length; t++) rf(a, e[t].clients.get(i) || []);
			t.clients.set(i, a);
		}
	});
	return km(t), t;
}, jm = (e, t, n, r) => {
	Qd(e.clients, t, () => []).push(new wm(n, r));
}, Mm = () => new Tm(), Nm = (e) => {
	let t = Mm();
	return e.clients.forEach((e, n) => {
		let r = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (n.deleted) {
				let i = n.id.clock, a = n.length;
				if (t + 1 < e.length) for (let n = e[t + 1]; t + 1 < e.length && n.deleted; n = e[++t + 1]) a += n.length;
				r.push(new wm(i, a));
			}
		}
		r.length > 0 && t.clients.set(n, r);
	}), t;
}, Pm = (e, t) => {
	G(e.restEncoder, t.clients.size), af(t.clients.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
		e.resetDsCurVal(), G(e.restEncoder, t);
		let r = n.length;
		G(e.restEncoder, r);
		for (let t = 0; t < r; t++) {
			let r = n[t];
			e.writeDsClock(r.clock), e.writeDsLen(r.len);
		}
	});
}, Fm = (e) => {
	let t = new Tm(), n = K(e.restDecoder);
	for (let r = 0; r < n; r++) {
		e.resetDsCurVal();
		let n = K(e.restDecoder), r = K(e.restDecoder);
		if (r > 0) {
			let i = Qd(t.clients, n, () => []);
			for (let t = 0; t < r; t++) i.push(new wm(e.readDsClock(), e.readDsLen()));
		}
	}
	return t;
}, Im = (e, t, n) => {
	let r = new Tm(), i = K(e.restDecoder);
	for (let a = 0; a < i; a++) {
		e.resetDsCurVal();
		let i = K(e.restDecoder), a = K(e.restDecoder), o = n.clients.get(i) || [], s = J(n, i);
		for (let n = 0; n < a; n++) {
			let n = e.readDsClock(), a = n + e.readDsLen();
			if (n < s) {
				s < a && jm(r, i, s, a - s);
				let e = Sh(o, n), c = o[e];
				for (!c.deleted && c.id.clock < n && (o.splice(e + 1, 0, R_(t, c, n - c.id.clock)), e++); e < o.length && (c = o[e++], c.id.clock < a);) c.deleted || (a < c.id.clock + c.length && o.splice(e, 0, R_(t, c, a - c.id.clock)), c.delete(t));
			} else jm(r, i, n, a - n);
		}
	}
	if (r.clients.size > 0) {
		let e = new Wm();
		return G(e.restEncoder, 0), Pm(e, r), e.toUint8Array();
	}
	return null;
}, Lm = xp, Rm = class e extends cf {
	constructor({ guid: e = wp(), collectionid: t = null, gc: n = !0, gcFilter: r = () => !0, meta: i = null, autoLoad: a = !1, shouldLoad: o = !0 } = {}) {
		super(), this.gc = n, this.gcFilter = r, this.clientID = Lm(), this.guid = e, this.collectionid = t, this.share = /* @__PURE__ */ new Map(), this.store = new yh(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = o, this.autoLoad = a, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = Ep((e) => {
			this.on("load", () => {
				this.isLoaded = !0, e(this);
			});
		});
		let s = () => Ep((e) => {
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
		e !== null && !this.shouldLoad && Y(e.parent.doc, (e) => {
			e.subdocsLoaded.add(this);
		}, null, !0), this.shouldLoad = !0;
	}
	getSubdocs() {
		return this.subdocs;
	}
	getSubdocGuids() {
		return new Set(af(this.subdocs).map((e) => e.guid));
	}
	transact(e, t = null) {
		return Y(this, e, t);
	}
	get(e, t = X) {
		let n = Qd(this.share, e, () => {
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
		return this.get(e, Dg);
	}
	getText(e = "") {
		return this.get(e, Jg);
	}
	getMap(e = "") {
		return this.get(e, Ag);
	}
	getXmlElement(e = "") {
		return this.get(e, $g);
	}
	getXmlFragment(e = "") {
		return this.get(e, Zg);
	}
	toJSON() {
		let e = {};
		return this.share.forEach((t, n) => {
			e[n] = t.toJSON();
		}), e;
	}
	destroy() {
		this.isDestroyed = !0, af(this.subdocs).forEach((e) => e.destroy());
		let t = this._item;
		if (t !== null) {
			this._item = null;
			let n = t.content;
			n.doc = new e({
				guid: this.guid,
				...n.opts,
				shouldLoad: !1
			}), n.doc._item = t, Y(t.parent.doc, (e) => {
				let r = n.doc;
				t.deleted || e.subdocsAdded.add(r), e.subdocsRemoved.add(this);
			}, null, !0);
		}
		this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
	}
}, zm = class {
	constructor(e) {
		this.dsCurrVal = 0, this.restDecoder = e;
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	readDsClock() {
		return this.dsCurrVal += K(this.restDecoder), this.dsCurrVal;
	}
	readDsLen() {
		let e = K(this.restDecoder) + 1;
		return this.dsCurrVal += e, e;
	}
}, Bm = class extends zm {
	constructor(e) {
		super(e), this.keys = [], K(e), this.keyClockDecoder = new _p(cp(e)), this.clientDecoder = new gp(cp(e)), this.leftClockDecoder = new _p(cp(e)), this.rightClockDecoder = new _p(cp(e)), this.infoDecoder = new hp(cp(e), lp), this.stringDecoder = new vp(cp(e)), this.parentInfoDecoder = new hp(cp(e), lp), this.typeRefDecoder = new gp(cp(e)), this.lenDecoder = new gp(cp(e));
	}
	readLeftID() {
		return new rh(this.clientDecoder.read(), this.leftClockDecoder.read());
	}
	readRightID() {
		return new rh(this.clientDecoder.read(), this.rightClockDecoder.read());
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
		return mp(this.restDecoder);
	}
	readBuf() {
		return cp(this.restDecoder);
	}
	readJSON() {
		return mp(this.restDecoder);
	}
	readKey() {
		let e = this.keyClockDecoder.read();
		if (e < this.keys.length) return this.keys[e];
		{
			let e = this.stringDecoder.read();
			return this.keys.push(e), e;
		}
	}
}, Vm = class {
	constructor() {
		this.restEncoder = Of();
	}
	toUint8Array() {
		return jf(this.restEncoder);
	}
	resetDsCurVal() {}
	writeDsClock(e) {
		G(this.restEncoder, e);
	}
	writeDsLen(e) {
		G(this.restEncoder, e);
	}
}, Hm = class extends Vm {
	writeLeftID(e) {
		G(this.restEncoder, e.client), G(this.restEncoder, e.clock);
	}
	writeRightID(e) {
		G(this.restEncoder, e.client), G(this.restEncoder, e.clock);
	}
	writeClient(e) {
		G(this.restEncoder, e);
	}
	writeInfo(e) {
		Nf(this.restEncoder, e);
	}
	writeString(e) {
		Lf(this.restEncoder, e);
	}
	writeParentInfo(e) {
		G(this.restEncoder, +!!e);
	}
	writeTypeRef(e) {
		G(this.restEncoder, e);
	}
	writeLen(e) {
		G(this.restEncoder, e);
	}
	writeAny(e) {
		Kf(this.restEncoder, e);
	}
	writeBuf(e) {
		zf(this.restEncoder, e);
	}
	writeJSON(e) {
		Lf(this.restEncoder, JSON.stringify(e));
	}
	writeKey(e) {
		Lf(this.restEncoder, e);
	}
}, Um = class {
	constructor() {
		this.restEncoder = Of(), this.dsCurrVal = 0;
	}
	toUint8Array() {
		return jf(this.restEncoder);
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	writeDsClock(e) {
		let t = e - this.dsCurrVal;
		this.dsCurrVal = e, G(this.restEncoder, t);
	}
	writeDsLen(e) {
		e === 0 && tp(), G(this.restEncoder, e - 1), this.dsCurrVal += e;
	}
}, Wm = class extends Um {
	constructor() {
		super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new Zf(), this.clientEncoder = new Yf(), this.leftClockEncoder = new Zf(), this.rightClockEncoder = new Zf(), this.infoEncoder = new qf(Nf), this.stringEncoder = new Qf(), this.parentInfoEncoder = new qf(Nf), this.typeRefEncoder = new Yf(), this.lenEncoder = new Yf();
	}
	toUint8Array() {
		let e = Of();
		return G(e, 0), zf(e, this.keyClockEncoder.toUint8Array()), zf(e, this.clientEncoder.toUint8Array()), zf(e, this.leftClockEncoder.toUint8Array()), zf(e, this.rightClockEncoder.toUint8Array()), zf(e, jf(this.infoEncoder)), zf(e, this.stringEncoder.toUint8Array()), zf(e, jf(this.parentInfoEncoder)), zf(e, this.typeRefEncoder.toUint8Array()), zf(e, this.lenEncoder.toUint8Array()), Rf(e, jf(this.restEncoder)), jf(e);
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
		Kf(this.restEncoder, e);
	}
	writeBuf(e) {
		zf(this.restEncoder, e);
	}
	writeJSON(e) {
		Kf(this.restEncoder, e);
	}
	writeKey(e) {
		let t = this.keyMap.get(e);
		t === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
	}
}, Gm = (e, t, n, r) => {
	r = ff(r, t[0].id.clock);
	let i = Sh(t, r);
	G(e.restEncoder, t.length - i), e.writeClient(n), G(e.restEncoder, r);
	let a = t[i];
	a.write(e, r - a.id.clock);
	for (let n = i + 1; n < t.length; n++) t[n].write(e, 0);
}, Km = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	n.forEach((e, n) => {
		J(t, n) > e && r.set(n, e);
	}), bh(t).forEach((e, t) => {
		n.has(t) || r.set(t, 0);
	}), G(e.restEncoder, r.size), af(r.entries()).sort((e, t) => t[0] - e[0]).forEach(([n, r]) => {
		Gm(e, t.clients.get(n), n, r);
	});
}, qm = (e, t) => {
	let n = Xd(), r = K(e.restDecoder);
	for (let i = 0; i < r; i++) {
		let r = K(e.restDecoder), i = Array(r), a = e.readClient(), o = K(e.restDecoder);
		n.set(a, {
			i: 0,
			refs: i
		});
		for (let n = 0; n < r; n++) {
			let r = e.readInfo();
			switch (31 & r) {
				case 0: {
					let t = e.readLen();
					i[n] = new c_(q(a, o), t), o += t;
					break;
				}
				case 10: {
					let t = K(e.restDecoder);
					i[n] = new W_(q(a, o), t), o += t;
					break;
				}
				default: {
					let s = !(r & 192), c = new Q(q(a, o), null, (r & 128) == 128 ? e.readLeftID() : null, null, (r & 64) == 64 ? e.readRightID() : null, s ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null, s && (r & 32) == 32 ? e.readString() : null, V_(e, r));
					i[n] = c, o += c.length;
				}
			}
		}
	}
	return n;
}, Jm = (e, t, n) => {
	let r = [], i = af(n.keys()).sort((e, t) => e - t);
	if (i.length === 0) return null;
	let a = () => {
		if (i.length === 0) return null;
		let e = n.get(i[i.length - 1]);
		for (; e.refs.length === e.i;) if (i.pop(), i.length > 0) e = n.get(i[i.length - 1]);
		else return null;
		return e;
	}, o = a();
	if (o === null) return null;
	let s = new yh(), c = /* @__PURE__ */ new Map(), l = (e, t) => {
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
		if (u.constructor !== W_) {
			let i = Qd(d, u.id.client, () => J(t, u.id.client)) - u.id.clock;
			if (i < 0) r.push(u), l(u.id.client, u.id.clock - 1), f();
			else {
				let a = u.getMissing(e, t);
				if (a !== null) {
					r.push(u);
					let e = n.get(a) || {
						refs: [],
						i: 0
					};
					if (e.refs.length === e.i) l(a, J(t, a)), f();
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
		let e = new Wm();
		return Km(e, s, /* @__PURE__ */ new Map()), G(e.restEncoder, 0), {
			missing: c,
			update: e.toUint8Array()
		};
	}
	return null;
}, Ym = (e, t) => Km(e, t.doc.store, t.beforeState), Xm = (e, t, n, r = new Bm(e)) => Y(t, (e) => {
	e.local = !1;
	let t = !1, n = e.doc, i = n.store, a = Jm(e, i, qm(r, n)), o = i.pendingStructs;
	if (o) {
		for (let [e, n] of o.missing) if (n < J(i, e)) {
			t = !0;
			break;
		}
		if (a) {
			for (let [e, t] of a.missing) {
				let n = o.missing.get(e);
				(n == null || n > t) && o.missing.set(e, t);
			}
			o.update = Wh([o.update, a.update]);
		}
	} else i.pendingStructs = a;
	let s = Im(r, e, i);
	if (i.pendingDs) {
		let t = new Bm(ap(i.pendingDs));
		K(t.restDecoder);
		let n = Im(t, e, i);
		i.pendingDs = s && n ? Wh([s, n]) : s || n;
	} else i.pendingDs = s;
	if (t) {
		let t = i.pendingStructs.update;
		i.pendingStructs = null, Zm(e.doc, t);
	}
}, n, !1), Zm = (e, t, n, r = Bm) => {
	let i = ap(t);
	Xm(i, e, n, new r(i));
}, Qm = class {
	constructor() {
		this.l = [];
	}
}, $m = () => new Qm(), eh = (e, t) => e.l.push(t), th = (e, t) => {
	let n = e.l, r = n.length;
	e.l = n.filter((e) => t !== e), r === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, nh = (e, t, n) => Bp(e.l, [t, n]), rh = class {
	constructor(e, t) {
		this.client = e, this.clock = t;
	}
}, ih = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, q = (e, t) => new rh(e, t), ah = (e) => {
	for (let [t, n] of e.doc.share.entries()) if (n === e) return t;
	throw tp();
}, oh = (e, t) => {
	for (; t !== null;) {
		if (t.parent === e) return !0;
		t = t.parent._item;
	}
	return !1;
}, sh = class {
	constructor(e, t, n, r = 0) {
		this.type = e, this.tname = t, this.item = n, this.assoc = r;
	}
}, ch = class {
	constructor(e, t, n = 0) {
		this.type = e, this.index = t, this.assoc = n;
	}
}, lh = (e, t, n = 0) => new ch(e, t, n), uh = (e, t, n) => {
	let r = null, i = null;
	return e._item === null ? i = ah(e) : r = q(e._item.id.client, e._item.id.clock), new sh(r, i, t, n);
}, dh = (e, t, n = 0) => {
	let r = e._start;
	if (n < 0) {
		if (t === 0) return uh(e, null, n);
		t--;
	}
	for (; r !== null;) {
		if (!r.deleted && r.countable) {
			if (r.length > t) return uh(e, q(r.id.client, r.id.clock + t), n);
			t -= r.length;
		}
		if (r.right === null && n < 0) return uh(e, r.lastId, n);
		r = r.right;
	}
	return uh(e, null, n);
}, fh = (e, t) => {
	let n = Ch(e, t);
	return {
		item: n,
		diff: t.clock - n.id.clock
	};
}, ph = (e, t, n = !0) => {
	let r = t.store, i = e.item, a = e.type, o = e.tname, s = e.assoc, c = null, l = 0;
	if (i !== null) {
		if (J(r, i.client) <= i.clock) return null;
		let e = n ? I_(r, i) : fh(r, i), t = e.item;
		if (!(t instanceof Q)) return null;
		if (c = t.parent, c._item === null || !c._item.deleted) {
			l = t.deleted || !t.countable ? 0 : e.diff + (s >= 0 ? 0 : 1);
			let n = t.left;
			for (; n !== null;) !n.deleted && n.countable && (l += n.length), n = n.left;
		}
	} else {
		if (o !== null) c = t.get(o);
		else if (a !== null) {
			if (J(r, a.client) <= a.clock) return null;
			let { item: e } = n ? I_(r, a) : { item: Ch(r, a) };
			if (e instanceof Q && e.content instanceof P_) c = e.content.type;
			else return null;
		} else throw tp();
		l = s >= 0 ? c._length : 0;
	}
	return lh(c, l, e.assoc);
}, mh = class {
	constructor(e, t) {
		this.ds = e, this.sv = t;
	}
}, hh = (e, t) => new mh(e, t);
hh(Mm(), /* @__PURE__ */ new Map());
var gh = (e) => hh(Nm(e.store), bh(e.store)), _h = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !Om(t.ds, e.id), vh = (e, t) => {
	let n = Qd(e.meta, vh, tf), r = e.doc.store;
	n.has(t) || (t.sv.forEach((t, n) => {
		t < J(r, n) && Th(e, q(n, t));
	}), Em(e, t.ds, (e) => {}), n.add(t));
}, yh = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
	}
}, bh = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.clients.forEach((e, n) => {
		let r = e[e.length - 1];
		t.set(n, r.id.clock + r.length);
	}), t;
}, J = (e, t) => {
	let n = e.clients.get(t);
	if (n === void 0) return 0;
	let r = n[n.length - 1];
	return r.id.clock + r.length;
}, xh = (e, t) => {
	let n = e.clients.get(t.id.client);
	if (n === void 0) n = [], e.clients.set(t.id.client, n);
	else {
		let e = n[n.length - 1];
		if (e.id.clock + e.length !== t.id.clock) throw tp();
	}
	n.push(t);
}, Sh = (e, t) => {
	let n = 0, r = e.length - 1, i = e[r], a = i.id.clock;
	if (a === t) return r;
	let o = lf(t / (a + i.length - 1) * r);
	for (; n <= r;) {
		if (i = e[o], a = i.id.clock, a <= t) {
			if (t < a + i.length) return o;
			n = o + 1;
		} else r = o - 1;
		o = lf((n + r) / 2);
	}
	throw tp();
}, Ch = (e, t) => {
	let n = e.clients.get(t.client);
	return n[Sh(n, t.clock)];
}, wh = (e, t, n) => {
	let r = Sh(t, n), i = t[r];
	return i.id.clock < n && i instanceof Q ? (t.splice(r + 1, 0, R_(e, i, n - i.id.clock)), r + 1) : r;
}, Th = (e, t) => {
	let n = e.doc.store.clients.get(t.client);
	return n[wh(e, n, t.clock)];
}, Eh = (e, t, n) => {
	let r = t.clients.get(n.client), i = Sh(r, n.clock), a = r[i];
	return n.clock !== a.id.clock + a.length - 1 && a.constructor !== c_ && r.splice(i + 1, 0, R_(e, a, n.clock - a.id.clock + 1)), a;
}, Dh = (e, t, n) => {
	let r = e.clients.get(t.id.client);
	r[Sh(r, t.id.clock)] = n;
}, Oh = (e, t, n, r, i) => {
	if (r === 0) return;
	let a = n + r, o = wh(e, t, n), s;
	do
		s = t[o++], a < s.id.clock + s.length && wh(e, t, a), i(s);
	while (o < t.length && t[o].id.clock < a);
}, kh = class {
	constructor(e, t, n) {
		this.doc = e, this.deleteSet = new Tm(), this.beforeState = bh(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = t, this.meta = /* @__PURE__ */ new Map(), this.local = n, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
	}
}, Ah = (e, t) => t.deleteSet.clients.size === 0 && !ef(t.afterState, (e, n) => t.beforeState.get(n) !== e) ? !1 : (km(t.deleteSet), Ym(e, t), Pm(e, t.deleteSet), !0), jh = (e, t, n) => {
	let r = t._item;
	(r === null || r.id.clock < (e.beforeState.get(r.id.client) || 0) && !r.deleted) && Qd(e.changed, t, tf).add(n);
}, Mh = (e, t) => {
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
}, Nh = (e, t, n) => {
	for (let [r, i] of e.clients.entries()) {
		let e = t.clients.get(r);
		for (let r = i.length - 1; r >= 0; r--) {
			let a = i[r], o = a.clock + a.len;
			for (let r = Sh(e, a.clock), i = e[r]; r < e.length && i.id.clock < o; i = e[++r]) {
				let i = e[r];
				if (a.clock + a.len <= i.id.clock) break;
				i instanceof Q && i.deleted && !i.keep && n(i) && i.gc(t, !1);
			}
		}
	}
}, Ph = (e, t) => {
	e.clients.forEach((e, n) => {
		let r = t.clients.get(n);
		for (let t = e.length - 1; t >= 0; t--) {
			let n = e[t], i = df(r.length - 1, 1 + Sh(r, n.clock + n.len - 1));
			for (let e = i, t = r[e]; e > 0 && t.id.clock >= n.clock; t = r[e]) e -= 1 + Mh(r, e);
		}
	});
}, Fh = (e, t) => {
	if (t < e.length) {
		let n = e[t], r = n.doc, i = r.store, a = n.deleteSet, o = n._mergeStructs;
		try {
			km(a), n.afterState = bh(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
			let e = [];
			n.changed.forEach((t, r) => e.push(() => {
				(r._item === null || !r._item.deleted) && r._callObserver(n, t);
			})), e.push(() => {
				n.changedParentTypes.forEach((e, t) => {
					t._dEH.l.length > 0 && (t._item === null || !t._item.deleted) && (e = e.filter((e) => e.target._item === null || !e.target._item.deleted), e.forEach((e) => {
						e.currentTarget = t, e._path = null;
					}), e.sort((e, t) => e.path.length - t.path.length), nh(t._dEH, e, n));
				});
			}), e.push(() => r.emit("afterTransaction", [n, r])), Bp(e, []), n._needFormattingCleanup && Gg(n);
		} finally {
			r.gc && Nh(a, i, r.gcFilter), Ph(a, i), n.afterState.forEach((e, t) => {
				let r = n.beforeState.get(t) || 0;
				if (r !== e) {
					let e = i.clients.get(t), n = ff(Sh(e, r), 1);
					for (let t = e.length - 1; t >= n;) t -= 1 + Mh(e, t);
				}
			});
			for (let e = o.length - 1; e >= 0; e--) {
				let { client: t, clock: n } = o[e].id, r = i.clients.get(t), a = Sh(r, n);
				a + 1 < r.length && Mh(r, a + 1) > 1 || a > 0 && Mh(r, a);
			}
			if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (vm(pm, om, "[yjs] ", sm, dm, "Changed the client-id because another client seems to be using it."), r.clientID = Lm()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
				let e = new Hm();
				Ah(e, n) && r.emit("update", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			if (r._observers.has("updateV2")) {
				let e = new Wm();
				Ah(e, n) && r.emit("updateV2", [
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
			]), l.forEach((e) => e.destroy())), e.length <= t + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, e])) : Fh(e, t + 1);
		}
	}
}, Y = (e, t, n = null, r = !0) => {
	let i = e._transactionCleanups, a = !1, o = null;
	e._transaction === null && (a = !0, e._transaction = new kh(e, n, r), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
	try {
		o = t(e._transaction);
	} finally {
		if (a) {
			let t = e._transaction === i[0];
			e._transaction = null, t && Fh(i, 0);
		}
	}
	return o;
}, Ih = class {
	constructor(e, t) {
		this.insertions = t, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
	}
}, Lh = (e, t, n) => {
	Em(e, n.deletions, (n) => {
		n instanceof Q && t.scope.some((t) => t === e.doc || oh(t, n)) && L_(n, !1);
	});
}, Rh = (e, t, n) => {
	let r = null, i = e.doc, a = e.scope;
	Y(i, (n) => {
		for (; t.length > 0 && e.currStackItem === null;) {
			let r = i.store, o = t.pop(), s = /* @__PURE__ */ new Set(), c = [], l = !1;
			Em(n, o.insertions, (e) => {
				if (e instanceof Q) {
					if (e.redone !== null) {
						let { item: t, diff: i } = I_(r, e.id);
						i > 0 && (t = Th(n, q(t.id.client, t.id.clock + i))), e = t;
					}
					!e.deleted && a.some((t) => t === n.doc || oh(t, e)) && c.push(e);
				}
			}), Em(n, o.deletions, (e) => {
				e instanceof Q && a.some((t) => t === n.doc || oh(t, e)) && !Om(o.insertions, e.id) && s.add(e);
			}), s.forEach((t) => {
				l = B_(n, t, s, o.insertions, e.ignoreRemoteMapChanges, e) !== null || l;
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
}, zh = class extends cf {
	constructor(e, { captureTimeout: t = 500, captureTransaction: n = (e) => !0, deleteFilter: r = () => !0, trackedOrigins: i = /* @__PURE__ */ new Set([null]), ignoreRemoteMapChanges: a = !1, doc: o = sf(e) ? e[0].doc : e instanceof Rm ? e : e.doc } = {}) {
		super(), this.scope = [], this.doc = o, this.addToScope(e), this.deleteFilter = r, i.add(this), this.trackedOrigins = i, this.captureTransaction = n, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = a, this.captureTimeout = t, this.afterTransactionHandler = (e) => {
			if (!this.captureTransaction(e) || !this.scope.some((t) => e.changedParentTypes.has(t) || t === this.doc) || !this.trackedOrigins.has(e.origin) && (!e.origin || !this.trackedOrigins.has(e.origin.constructor))) return;
			let t = this.undoing, n = this.redoing, r = t ? this.redoStack : this.undoStack;
			t ? this.stopCapturing() : n || this.clear(!1, !0);
			let i = new Tm();
			e.afterState.forEach((t, n) => {
				let r = e.beforeState.get(n) || 0, a = t - r;
				a > 0 && jm(i, n, r, a);
			});
			let a = Tp(), o = !1;
			if (this.lastChange > 0 && a - this.lastChange < this.captureTimeout && r.length > 0 && !t && !n) {
				let t = r[r.length - 1];
				t.deletions = Am([t.deletions, e.deleteSet]), t.insertions = Am([t.insertions, i]);
			} else r.push(new Ih(e.deleteSet, i)), o = !0;
			!t && !n && (this.lastChange = a), Em(e, e.deleteSet, (t) => {
				t instanceof Q && this.scope.some((n) => n === e.doc || oh(n, t)) && L_(t, !0);
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
		e = sf(e) ? e : [e], e.forEach((e) => {
			t.has(e) || (t.add(e), (e instanceof X ? e.doc !== this.doc : e !== this.doc) && ym("[yjs#509] Not same Y.Doc"), this.scope.push(e));
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
			e && (this.undoStack.forEach((e) => Lh(n, this, e)), this.undoStack = []), t && (this.redoStack.forEach((e) => Lh(n, this, e)), this.redoStack = []), this.emit("stack-cleared", [{
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
			e = Rh(this, this.undoStack, "undo");
		} finally {
			this.undoing = !1;
		}
		return e;
	}
	redo() {
		this.redoing = !0;
		let e;
		try {
			e = Rh(this, this.redoStack, "redo");
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
function* Bh(e) {
	let t = K(e.restDecoder);
	for (let n = 0; n < t; n++) {
		let t = K(e.restDecoder), n = e.readClient(), r = K(e.restDecoder);
		for (let i = 0; i < t; i++) {
			let t = e.readInfo();
			if (t === 10) {
				let t = K(e.restDecoder);
				yield new W_(q(n, r), t), r += t;
			} else if (31 & t) {
				let i = !(t & 192), a = new Q(q(n, r), null, (t & 128) == 128 ? e.readLeftID() : null, null, (t & 64) == 64 ? e.readRightID() : null, i ? e.readParentInfo() ? e.readString() : e.readLeftID() : null, i && (t & 32) == 32 ? e.readString() : null, V_(e, t));
				yield a, r += a.length;
			} else {
				let t = e.readLen();
				yield new c_(q(n, r), t), r += t;
			}
		}
	}
}
var Vh = class {
	constructor(e, t) {
		this.gen = Bh(e), this.curr = null, this.done = !1, this.filterSkips = t, this.next();
	}
	next() {
		do
			this.curr = this.gen.next().value || null;
		while (this.filterSkips && this.curr !== null && this.curr.constructor === W_);
		return this.curr;
	}
}, Hh = class {
	constructor(e) {
		this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
	}
}, Uh = (e, t) => {
	if (e.constructor === c_) {
		let { client: n, clock: r } = e.id;
		return new c_(q(n, r + t), e.length - t);
	}
	if (e.constructor === W_) {
		let { client: n, clock: r } = e.id;
		return new W_(q(n, r + t), e.length - t);
	}
	{
		let n = e, { client: r, clock: i } = n.id;
		return new Q(q(r, i + t), null, q(r, i + t - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(t));
	}
}, Wh = (e, t = Bm, n = Wm) => {
	if (e.length === 1) return e[0];
	let r = e.map((e) => new t(ap(e))), i = r.map((e) => new Vh(e, !0)), a = null, o = new n(), s = new Hh(o);
	for (; i = i.filter((e) => e.curr !== null), i.sort((e, t) => {
		if (e.curr.id.client === t.curr.id.client) {
			let n = e.curr.id.clock - t.curr.id.clock;
			return n === 0 ? e.curr.constructor === t.curr.constructor ? 0 : e.curr.constructor === W_ ? 1 : -1 : n;
		}
		return t.curr.id.client - e.curr.id.client;
	}), i.length !== 0;) {
		let e = i[0], t = e.curr.id.client;
		if (a !== null) {
			let n = e.curr, r = !1;
			for (; n !== null && n.id.clock + n.length <= a.struct.id.clock + a.struct.length && n.id.client >= a.struct.id.client;) n = e.next(), r = !0;
			if (n === null || n.id.client !== t || r && n.id.clock > a.struct.id.clock + a.struct.length) continue;
			if (t !== a.struct.id.client) Kh(s, a.struct, a.offset), a = {
				struct: n,
				offset: 0
			}, e.next();
			else if (a.struct.id.clock + a.struct.length < n.id.clock) {
				if (a.struct.constructor === W_) a.struct.length = n.id.clock + n.length - a.struct.id.clock;
				else {
					Kh(s, a.struct, a.offset);
					let e = n.id.clock - a.struct.id.clock - a.struct.length;
					a = {
						struct: new W_(q(t, a.struct.id.clock + a.struct.length), e),
						offset: 0
					};
				}
			} else {
				let t = a.struct.id.clock + a.struct.length - n.id.clock;
				t > 0 && (a.struct.constructor === W_ ? a.struct.length -= t : n = Uh(n, t)), a.struct.mergeWith(n) || (Kh(s, a.struct, a.offset), a = {
					struct: n,
					offset: 0
				}, e.next());
			}
		} else a = {
			struct: e.curr,
			offset: 0
		}, e.next();
		for (let n = e.curr; n !== null && n.id.client === t && n.id.clock === a.struct.id.clock + a.struct.length && n.constructor !== W_; n = e.next()) Kh(s, a.struct, a.offset), a = {
			struct: n,
			offset: 0
		};
	}
	return a !== null && (Kh(s, a.struct, a.offset), a = null), qh(s), Pm(o, Am(r.map((e) => Fm(e)))), o.toUint8Array();
}, Gh = (e) => {
	e.written > 0 && (e.clientStructs.push({
		written: e.written,
		restEncoder: jf(e.encoder.restEncoder)
	}), e.encoder.restEncoder = Of(), e.written = 0);
}, Kh = (e, t, n) => {
	e.written > 0 && e.currClient !== t.id.client && Gh(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), G(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, qh = (e) => {
	Gh(e);
	let t = e.encoder.restEncoder;
	G(t, e.clientStructs.length);
	for (let n = 0; n < e.clientStructs.length; n++) {
		let r = e.clientStructs[n];
		G(t, r.written), Rf(t, r.restEncoder);
	}
}, Jh = "You must not compute changes after the event-handler fired.", Yh = class {
	constructor(e, t) {
		this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
	}
	get path() {
		return this._path ||= Xh(this.currentTarget, this.target);
	}
	deletes(e) {
		return Om(this.transaction.deleteSet, e.id);
	}
	get keys() {
		if (this._keys === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw $f(Jh);
			let e = /* @__PURE__ */ new Map(), t = this.target;
			this.transaction.changed.get(t).forEach((n) => {
				if (n !== null) {
					let r = t._map.get(n), i, a;
					if (this.adds(r)) {
						let e = r.left;
						for (; e !== null && this.adds(e);) e = e.left;
						if (this.deletes(r)) {
							if (e !== null && this.deletes(e)) i = "delete", a = nf(e.content.getContent());
							else return;
						} else e !== null && this.deletes(e) ? (i = "update", a = nf(e.content.getContent())) : (i = "add", a = void 0);
					} else if (this.deletes(r)) i = "delete", a = nf(r.content.getContent());
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
			if (this.transaction.doc._transactionCleanups.length === 0) throw $f(Jh);
			let t = this.target, n = tf(), r = tf(), i = [];
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
}, Xh = (e, t) => {
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
}, Zh = () => {
	ym("Invalid access: Add Yjs type to a document before reading data.");
}, Qh = 80, $h = 0, eg = class {
	constructor(e, t) {
		e.marker = !0, this.p = e, this.index = t, this.timestamp = $h++;
	}
}, tg = (e) => {
	e.timestamp = $h++;
}, ng = (e, t, n) => {
	e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = $h++;
}, rg = (e, t, n) => {
	if (e.length >= Qh) {
		let r = e.reduce((e, t) => e.timestamp < t.timestamp ? e : t);
		return ng(r, t, n), r;
	}
	{
		let r = new eg(t, n);
		return e.push(r), r;
	}
}, ig = (e, t) => {
	if (e._start === null || t === 0 || e._searchMarker === null) return null;
	let n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((e, n) => uf(t - e.index) < uf(t - n.index) ? e : n), r = e._start, i = 0;
	for (n !== null && (r = n.p, i = n.index, tg(n)); r.right !== null && i < t;) {
		if (!r.deleted && r.countable) {
			if (t < i + r.length) break;
			i += r.length;
		}
		r = r.right;
	}
	for (; r.left !== null && i > t;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	return n !== null && uf(n.index - i) < r.parent.length / Qh ? (ng(n, r, i), n) : rg(e._searchMarker, r, i);
}, ag = (e, t, n) => {
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
		(t < i.index || n > 0 && t === i.index) && (i.index = ff(t, i.index + n));
	}
}, og = (e, t, n) => {
	let r = e, i = t.changedParentTypes;
	for (; Qd(i, e, () => []).push(n), e._item !== null;) e = e._item.parent;
	nh(r._eH, n, t);
}, X = class {
	constructor() {
		this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = $m(), this._dEH = $m(), this._searchMarker = null;
	}
	get parent() {
		return this._item ? this._item.parent : null;
	}
	_integrate(e, t) {
		this.doc = e, this._item = t;
	}
	_copy() {
		throw ep();
	}
	clone() {
		throw ep();
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
		eh(this._eH, e);
	}
	observeDeep(e) {
		eh(this._dEH, e);
	}
	unobserve(e) {
		th(this._eH, e);
	}
	unobserveDeep(e) {
		th(this._dEH, e);
	}
	toJSON() {}
}, sg = (e, t, n) => {
	e.doc ?? Zh(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
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
}, cg = (e) => {
	e.doc ?? Zh();
	let t = [], n = e._start;
	for (; n !== null;) {
		if (n.countable && !n.deleted) {
			let e = n.content.getContent();
			for (let n = 0; n < e.length; n++) t.push(e[n]);
		}
		n = n.right;
	}
	return t;
}, lg = (e, t) => {
	let n = [], r = e._start;
	for (; r !== null;) {
		if (r.countable && _h(r, t)) {
			let e = r.content.getContent();
			for (let t = 0; t < e.length; t++) n.push(e[t]);
		}
		r = r.right;
	}
	return n;
}, ug = (e, t) => {
	let n = 0, r = e._start;
	for (e.doc ?? Zh(); r !== null;) {
		if (r.countable && !r.deleted) {
			let i = r.content.getContent();
			for (let r = 0; r < i.length; r++) t(i[r], n++, e);
		}
		r = r.right;
	}
}, dg = (e, t) => {
	let n = [];
	return ug(e, (r, i) => {
		n.push(t(r, i, e));
	}), n;
}, fg = (e) => {
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
}, pg = (e, t) => {
	e.doc ?? Zh();
	let n = ig(e, t), r = e._start;
	for (n !== null && (r = n.p, t -= n.index); r !== null; r = r.right) if (!r.deleted && r.countable) {
		if (t < r.length) return r.content.getContent()[t];
		t -= r.length;
	}
}, mg = (e, t, n, r) => {
	let i = n, a = e.doc, o = a.clientID, s = a.store, c = n === null ? t._start : n.right, l = [], u = () => {
		l.length > 0 && (i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new S_(l)), i.integrate(e, 0), l = []);
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
					i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new l_(new Uint8Array(n))), i.integrate(e, 0);
					break;
				case Rm:
					i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new m_(n)), i.integrate(e, 0);
					break;
				default: if (n instanceof X) i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new P_(n)), i.integrate(e, 0);
				else throw Error("Unexpected content type in insert operation");
			}
		}
	}), u();
}, hg = () => $f("Length exceeded!"), gg = (e, t, n, r) => {
	if (n > t._length) throw hg();
	if (n === 0) return t._searchMarker && ag(t._searchMarker, n, r.length), mg(e, t, null, r);
	let i = n, a = ig(t, n), o = t._start;
	for (a !== null && (o = a.p, n -= a.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right) if (!o.deleted && o.countable) {
		if (n <= o.length) {
			n < o.length && Th(e, q(o.id.client, o.id.clock + n));
			break;
		}
		n -= o.length;
	}
	return t._searchMarker && ag(t._searchMarker, i, r.length), mg(e, t, o, r);
}, _g = (e, t, n) => {
	let r = (t._searchMarker || []).reduce((e, t) => t.index > e.index ? t : e, {
		index: 0,
		p: t._start
	}).p;
	if (r) for (; r.right;) r = r.right;
	return mg(e, t, r, n);
}, vg = (e, t, n, r) => {
	if (r === 0) return;
	let i = n, a = r, o = ig(t, n), s = t._start;
	for (o !== null && (s = o.p, n -= o.index); s !== null && n > 0; s = s.right) !s.deleted && s.countable && (n < s.length && Th(e, q(s.id.client, s.id.clock + n)), n -= s.length);
	for (; r > 0 && s !== null;) s.deleted || (r < s.length && Th(e, q(s.id.client, s.id.clock + r)), s.delete(e), r -= s.length), s = s.right;
	if (r > 0) throw hg();
	t._searchMarker && ag(t._searchMarker, i, -a + r);
}, yg = (e, t, n) => {
	let r = t._map.get(n);
	r !== void 0 && r.delete(e);
}, bg = (e, t, n, r) => {
	let i = t._map.get(n) || null, a = e.doc, o = a.clientID, s;
	if (r == null) s = new S_([r]);
	else switch (r.constructor) {
		case Number:
		case Object:
		case Boolean:
		case Array:
		case String:
		case Date:
		case BigInt:
			s = new S_([r]);
			break;
		case Uint8Array:
			s = new l_(r);
			break;
		case Rm:
			s = new m_(r);
			break;
		default: if (r instanceof X) s = new P_(r);
		else throw Error("Unexpected content type");
	}
	new Q(q(o, J(a.store, o)), i, i && i.lastId, null, null, t, n, s).integrate(e, 0);
}, xg = (e, t) => {
	e.doc ?? Zh();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Sg = (e) => {
	let t = {};
	return e.doc ?? Zh(), e._map.forEach((e, n) => {
		e.deleted || (t[n] = e.content.getContent()[e.length - 1]);
	}), t;
}, Cg = (e, t) => {
	e.doc ?? Zh();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted;
}, wg = (e, t) => {
	let n = {};
	return e._map.forEach((e, r) => {
		let i = e;
		for (; i !== null && (!t.sv.has(i.id.client) || i.id.clock >= (t.sv.get(i.id.client) || 0));) i = i.left;
		i !== null && _h(i, t) && (n[r] = i.content.getContent()[i.length - 1]);
	}), n;
}, Tg = (e) => (e.doc ?? Zh(), Sm(e._map.entries(), (e) => !e[1].deleted)), Eg = class extends Yh {}, Dg = class e extends X {
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
		return this.doc ?? Zh(), this._length;
	}
	_callObserver(e, t) {
		super._callObserver(e, t), og(this, e, new Eg(this, e));
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : Y(this.doc, (n) => {
			gg(n, this, e, t);
		});
	}
	push(e) {
		this.doc === null ? this._prelimContent.push(...e) : Y(this.doc, (t) => {
			_g(t, this, e);
		});
	}
	unshift(e) {
		this.insert(0, e);
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : Y(this.doc, (n) => {
			vg(n, this, e, t);
		});
	}
	get(e) {
		return pg(this, e);
	}
	toArray() {
		return cg(this);
	}
	slice(e = 0, t = this.length) {
		return sg(this, e, t);
	}
	toJSON() {
		return this.map((e) => e instanceof X ? e.toJSON() : e);
	}
	map(e) {
		return dg(this, e);
	}
	forEach(e) {
		ug(this, e);
	}
	[Symbol.iterator]() {
		return fg(this);
	}
	_write(e) {
		e.writeTypeRef(D_);
	}
}, Og = (e) => new Dg(), kg = class extends Yh {
	constructor(e, t, n) {
		super(e, t), this.keysChanged = n;
	}
}, Ag = class e extends X {
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
		og(this, e, new kg(this, e, t));
	}
	toJSON() {
		this.doc ?? Zh();
		let e = {};
		return this._map.forEach((t, n) => {
			if (!t.deleted) {
				let r = t.content.getContent()[t.length - 1];
				e[n] = r instanceof X ? r.toJSON() : r;
			}
		}), e;
	}
	get size() {
		return [...Tg(this)].length;
	}
	keys() {
		return Cm(Tg(this), (e) => e[0]);
	}
	values() {
		return Cm(Tg(this), (e) => e[1].content.getContent()[e[1].length - 1]);
	}
	entries() {
		return Cm(Tg(this), (e) => [e[0], e[1].content.getContent()[e[1].length - 1]]);
	}
	forEach(e) {
		this.doc ?? Zh(), this._map.forEach((t, n) => {
			t.deleted || e(t.content.getContent()[t.length - 1], n, this);
		});
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	delete(e) {
		this.doc === null ? this._prelimContent.delete(e) : Y(this.doc, (t) => {
			yg(t, this, e);
		});
	}
	set(e, t) {
		return this.doc === null ? this._prelimContent.set(e, t) : Y(this.doc, (n) => {
			bg(n, this, e, t);
		}), t;
	}
	get(e) {
		return xg(this, e);
	}
	has(e) {
		return Cg(this, e);
	}
	clear() {
		this.doc === null ? this._prelimContent.clear() : Y(this.doc, (e) => {
			this.forEach(function(t, n, r) {
				yg(e, r, n);
			});
		});
	}
	_write(e) {
		e.writeTypeRef(O_);
	}
}, jg = (e) => new Ag(), Mg = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && Lp(e, t), Ng = class {
	constructor(e, t, n, r) {
		this.left = e, this.right = t, this.index = n, this.currentAttributes = r;
	}
	forward() {
		switch (this.right === null && tp(), this.right.content.constructor) {
			case Z:
				this.right.deleted || Lg(this.currentAttributes, this.right.content);
				break;
			default: this.right.deleted || (this.index += this.right.length);
		}
		this.left = this.right, this.right = this.right.right;
	}
}, Pg = (e, t, n) => {
	for (; t.right !== null && n > 0;) {
		switch (t.right.content.constructor) {
			case Z:
				t.right.deleted || Lg(t.currentAttributes, t.right.content);
				break;
			default: t.right.deleted || (n < t.right.length && Th(e, q(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
		}
		t.left = t.right, t.right = t.right.right;
	}
	return t;
}, Fg = (e, t, n, r) => {
	let i = /* @__PURE__ */ new Map(), a = r ? ig(t, n) : null;
	return a ? Pg(e, new Ng(a.p.left, a.p, a.index, i), n - a.index) : Pg(e, new Ng(null, t._start, 0, i), n);
}, Ig = (e, t, n, r) => {
	for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === Z && Mg(r.get(n.right.content.key), n.right.content.value));) n.right.deleted || r.delete(n.right.content.key), n.forward();
	let i = e.doc, a = i.clientID;
	r.forEach((r, o) => {
		let s = n.left, c = n.right, l = new Q(q(a, J(i.store, a)), s, s && s.lastId, c, c && c.id, t, null, new Z(o, r));
		l.integrate(e, 0), n.right = l, n.forward();
	});
}, Lg = (e, t) => {
	let { key: n, value: r } = t;
	r === null ? e.delete(n) : e.set(n, r);
}, Rg = (e, t) => {
	for (; e.right !== null && (e.right.deleted || e.right.content.constructor === Z && Mg(t[e.right.content.key] ?? null, e.right.content.value));) e.forward();
}, zg = (e, t, n, r) => {
	let i = e.doc, a = i.clientID, o = /* @__PURE__ */ new Map();
	for (let s in r) {
		let c = r[s], l = n.currentAttributes.get(s) ?? null;
		if (!Mg(l, c)) {
			o.set(s, l);
			let { left: r, right: u } = n;
			n.right = new Q(q(a, J(i.store, a)), r, r && r.lastId, u, u && u.id, t, null, new Z(s, c)), n.right.integrate(e, 0), n.forward();
		}
	}
	return o;
}, Bg = (e, t, n, r, i) => {
	n.currentAttributes.forEach((e, t) => {
		i[t] === void 0 && (i[t] = null);
	});
	let a = e.doc, o = a.clientID;
	Rg(n, i);
	let s = zg(e, t, n, i), c = r.constructor === String ? new w_(r) : r instanceof X ? new P_(r) : new g_(r), { left: l, right: u, index: d } = n;
	t._searchMarker && ag(t._searchMarker, n.index, c.getLength()), u = new Q(q(o, J(a.store, o)), l, l && l.lastId, u, u && u.id, t, null, c), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), Ig(e, t, n, s);
}, Vg = (e, t, n, r, i) => {
	let a = e.doc, o = a.clientID;
	Rg(n, i);
	let s = zg(e, t, n, i);
	iterationLoop: for (; n.right !== null && (r > 0 || s.size > 0 && (n.right.deleted || n.right.content.constructor === Z));) {
		if (!n.right.deleted) switch (n.right.content.constructor) {
			case Z: {
				let { key: t, value: a } = n.right.content, o = i[t];
				if (o !== void 0) {
					if (Mg(o, a)) s.delete(t);
					else {
						if (r === 0) break iterationLoop;
						s.set(t, a);
					}
					n.right.delete(e);
				} else n.currentAttributes.set(t, a);
				break;
			}
			default: r < n.right.length && Th(e, q(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
		}
		n.forward();
	}
	if (r > 0) {
		let i = "";
		for (; r > 0; r--) i += "\n";
		n.right = new Q(q(o, J(a.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new w_(i)), n.right.integrate(e, 0), n.forward();
	}
	Ig(e, t, n, s);
}, Hg = (e, t, n, r, i) => {
	let a = t, o = Xd();
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
					(o.get(a) !== n || u === l) && (t.delete(e), s++, !c && (i.get(a) ?? null) === l && u !== l && (u === null ? i.delete(a) : i.set(a, u))), !c && !t.deleted && Lg(i, n);
					break;
				}
			}
		}
		t = t.right;
	}
	return s;
}, Ug = (e, t) => {
	for (; t && t.right && (t.right.deleted || !t.right.countable);) t = t.right;
	let n = /* @__PURE__ */ new Set();
	for (; t && (t.deleted || !t.countable);) {
		if (!t.deleted && t.content.constructor === Z) {
			let r = t.content.key;
			n.has(r) ? t.delete(e) : n.add(r);
		}
		t = t.left;
	}
}, Wg = (e) => {
	let t = 0;
	return Y(e.doc, (n) => {
		let r = e._start, i = e._start, a = Xd(), o = Zd(a);
		for (; i;) {
			if (i.deleted === !1) switch (i.content.constructor) {
				case Z:
					Lg(o, i.content);
					break;
				default: t += Hg(n, r, i, a, o), a = Zd(o), r = i;
			}
			i = i.right;
		}
	}), t;
}, Gg = (e) => {
	let t = /* @__PURE__ */ new Set(), n = e.doc;
	for (let [r, i] of e.afterState.entries()) {
		let a = e.beforeState.get(r) || 0;
		i !== a && Oh(e, n.store.clients.get(r), a, i, (e) => {
			!e.deleted && e.content.constructor === Z && e.constructor !== c_ && t.add(e.parent);
		});
	}
	Y(n, (n) => {
		Em(e, e.deleteSet, (e) => {
			if (e instanceof c_ || !e.parent._hasFormatting || t.has(e.parent)) return;
			let r = e.parent;
			e.content.constructor === Z ? t.add(r) : Ug(n, e);
		});
		for (let e of t) Wg(e);
	});
}, Kg = (e, t, n) => {
	let r = n, i = Zd(t.currentAttributes), a = t.right;
	for (; n > 0 && t.right !== null;) {
		if (t.right.deleted === !1) switch (t.right.content.constructor) {
			case P_:
			case g_:
			case w_: n < t.right.length && Th(e, q(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
		}
		t.forward();
	}
	a && Hg(e, a, t.right, i, t.currentAttributes);
	let o = (t.left || t.right).parent;
	return o._searchMarker && ag(o._searchMarker, t.index, -r + n), t;
}, qg = class extends Yh {
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
			Y(e, (e) => {
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
							case "retain": c > 0 && (e = { retain: c }, Pp(o) || (e.attributes = Ap({}, o))), c = 0;
						}
						e && t.push(e), a = null;
					}
				};
				for (; i !== null;) {
					switch (i.content.constructor) {
						case P_:
						case g_:
							this.adds(i) ? this.deletes(i) || (u(), a = "insert", s = i.content.getContent()[0], u()) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += 1) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += 1);
							break;
						case w_:
							this.adds(i) ? this.deletes(i) || (a !== "insert" && (u(), a = "insert"), s += i.content.str) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += i.length) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += i.length);
							break;
						case Z: {
							let { key: t, value: s } = i.content;
							if (this.adds(i)) this.deletes(i) || (Mg(n.get(t) ?? null, s) ? s !== null && i.delete(e) : (a === "retain" && u(), Mg(s, r.get(t) ?? null) ? delete o[t] : o[t] = s));
							else if (this.deletes(i)) {
								r.set(t, s);
								let e = n.get(t) ?? null;
								Mg(e, s) || (a === "retain" && u(), o[t] = e);
							} else if (!i.deleted) {
								r.set(t, s);
								let n = o[t];
								n !== void 0 && (Mg(n, s) ? n !== null && i.delete(e) : (a === "retain" && u(), s === null ? delete o[t] : o[t] = s));
							}
							i.deleted || (a === "insert" && u(), Lg(n, i.content));
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
}, Jg = class e extends X {
	constructor(e) {
		super(), this._pending = e === void 0 ? [] : [() => this.insert(0, e)], this._searchMarker = [], this._hasFormatting = !1;
	}
	get length() {
		return this.doc ?? Zh(), this._length;
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
		let n = new qg(this, e, t);
		og(this, e, n), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
	}
	toString() {
		this.doc ?? Zh();
		let e = "", t = this._start;
		for (; t !== null;) !t.deleted && t.countable && t.content.constructor === w_ && (e += t.content.str), t = t.right;
		return e;
	}
	toJSON() {
		return this.toString();
	}
	applyDelta(e, { sanitize: t = !0 } = {}) {
		this.doc === null ? this._pending.push(() => this.applyDelta(e)) : Y(this.doc, (n) => {
			let r = new Ng(null, this._start, 0, /* @__PURE__ */ new Map());
			for (let i = 0; i < e.length; i++) {
				let a = e[i];
				if (a.insert !== void 0) {
					let o = !t && typeof a.insert == "string" && i === e.length - 1 && r.right === null && a.insert.slice(-1) === "\n" ? a.insert.slice(0, -1) : a.insert;
					(typeof o != "string" || o.length > 0) && Bg(n, this, r, o, a.attributes || {});
				} else a.retain === void 0 ? a.delete !== void 0 && Kg(n, r, a.delete) : Vg(n, this, r, a.retain, a.attributes || {});
			}
		});
	}
	toDelta(e, t, n) {
		this.doc ?? Zh();
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
				if (_h(s, e) || t !== void 0 && _h(s, t)) switch (s.content.constructor) {
					case w_: {
						let r = i.get("ychange");
						e !== void 0 && !_h(s, e) ? (r === void 0 || r.user !== s.id.client || r.type !== "removed") && (c(), i.set("ychange", n ? n("removed", s.id) : { type: "removed" })) : t !== void 0 && !_h(s, t) ? (r === void 0 || r.user !== s.id.client || r.type !== "added") && (c(), i.set("ychange", n ? n("added", s.id) : { type: "added" })) : r !== void 0 && (c(), i.delete("ychange")), o += s.content.str;
						break;
					}
					case P_:
					case g_: {
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
					case Z: _h(s, e) && (c(), Lg(i, s.content));
				}
				s = s.right;
			}
			c();
		};
		return e || t ? Y(a, (n) => {
			e && vh(n, e), t && vh(n, t), l();
		}, "cleanup") : l(), r;
	}
	insert(e, t, n) {
		if (t.length <= 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.insert(e, t, n)) : Y(r, (r) => {
			let i = Fg(r, this, e, !n);
			n || (n = {}, i.currentAttributes.forEach((e, t) => {
				n[t] = e;
			})), Bg(r, this, i, t, n);
		});
	}
	insertEmbed(e, t, n) {
		let r = this.doc;
		r === null ? this._pending.push(() => this.insertEmbed(e, t, n || {})) : Y(r, (r) => {
			let i = Fg(r, this, e, !n);
			Bg(r, this, i, t, n || {});
		});
	}
	delete(e, t) {
		if (t === 0) return;
		let n = this.doc;
		n === null ? this._pending.push(() => this.delete(e, t)) : Y(n, (n) => {
			Kg(n, Fg(n, this, e, !0), t);
		});
	}
	format(e, t, n) {
		if (t === 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.format(e, t, n)) : Y(r, (r) => {
			let i = Fg(r, this, e, !1);
			i.right !== null && Vg(r, this, i, t, n);
		});
	}
	removeAttribute(e) {
		this.doc === null ? this._pending.push(() => this.removeAttribute(e)) : Y(this.doc, (t) => {
			yg(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._pending.push(() => this.setAttribute(e, t)) : Y(this.doc, (n) => {
			bg(n, this, e, t);
		});
	}
	getAttribute(e) {
		return xg(this, e);
	}
	getAttributes() {
		return Sg(this);
	}
	_write(e) {
		e.writeTypeRef(k_);
	}
}, Yg = (e) => new Jg(), Xg = class {
	constructor(e, t = () => !0) {
		this._filter = t, this._root = e, this._currentNode = e._start, this._firstCall = !0, e.doc ?? Zh();
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this._currentNode, t = e && e.content && e.content.type;
		if (e !== null && (!this._firstCall || e.deleted || !this._filter(t))) do
			if (t = e.content.type, !e.deleted && (t.constructor === $g || t.constructor === Zg) && t._start !== null) e = t._start;
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
}, Zg = class e extends X {
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
		return this.doc ?? Zh(), this._prelimContent === null ? this._length : this._prelimContent.length;
	}
	createTreeWalker(e) {
		return new Xg(this, e);
	}
	querySelector(e) {
		e = e.toUpperCase();
		let t = new Xg(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e).next();
		return t.done ? null : t.value;
	}
	querySelectorAll(e) {
		return e = e.toUpperCase(), af(new Xg(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e));
	}
	_callObserver(e, t) {
		og(this, e, new t_(this, t, e));
	}
	toString() {
		return dg(this, (e) => e.toString()).join("");
	}
	toJSON() {
		return this.toString();
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createDocumentFragment();
		return n !== void 0 && n._createAssociation(r, this), ug(this, (i) => {
			r.insertBefore(i.toDOM(e, t, n), null);
		}), r;
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : Y(this.doc, (n) => {
			gg(n, this, e, t);
		});
	}
	insertAfter(e, t) {
		if (this.doc !== null) Y(this.doc, (n) => {
			let r = e && e instanceof X ? e._item : e;
			mg(n, this, r, t);
		});
		else {
			let n = this._prelimContent, r = e === null ? 0 : n.findIndex((t) => t === e) + 1;
			if (r === 0 && e !== null) throw $f("Reference item not found");
			n.splice(r, 0, ...t);
		}
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : Y(this.doc, (n) => {
			vg(n, this, e, t);
		});
	}
	toArray() {
		return cg(this);
	}
	push(e) {
		this.insert(this.length, e);
	}
	unshift(e) {
		this.insert(0, e);
	}
	get(e) {
		return pg(this, e);
	}
	slice(e = 0, t = this.length) {
		return sg(this, e, t);
	}
	forEach(e) {
		ug(this, e);
	}
	_write(e) {
		e.writeTypeRef(j_);
	}
}, Qg = (e) => new Zg(), $g = class e extends Zg {
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
		return Mp(this.getAttributes(), (e, n) => {
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
		this.doc === null ? this._prelimAttrs.delete(e) : Y(this.doc, (t) => {
			yg(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._prelimAttrs.set(e, t) : Y(this.doc, (n) => {
			bg(n, this, e, t);
		});
	}
	getAttribute(e) {
		return xg(this, e);
	}
	hasAttribute(e) {
		return Cg(this, e);
	}
	getAttributes(e) {
		return e ? wg(this, e) : Sg(this);
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createElement(this.nodeName), i = this.getAttributes();
		for (let e in i) {
			let t = i[e];
			typeof t == "string" && r.setAttribute(e, t);
		}
		return ug(this, (i) => {
			r.appendChild(i.toDOM(e, t, n));
		}), n !== void 0 && n._createAssociation(r, this), r;
	}
	_write(e) {
		e.writeTypeRef(A_), e.writeKey(this.nodeName);
	}
}, e_ = (e) => new $g(e.readKey()), t_ = class extends Yh {
	constructor(e, t, n) {
		super(e, n), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), t.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.attributesChanged.add(e);
		});
	}
}, n_ = class e extends Ag {
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
		e.writeTypeRef(M_), e.writeKey(this.hookName);
	}
}, r_ = (e) => new n_(e.readKey()), i_ = class e extends Jg {
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
		e.writeTypeRef(N_);
	}
}, a_ = (e) => new i_(), o_ = class {
	constructor(e, t) {
		this.id = e, this.length = t;
	}
	get deleted() {
		throw ep();
	}
	mergeWith(e) {
		return !1;
	}
	write(e, t, n) {
		throw ep();
	}
	integrate(e, t) {
		throw ep();
	}
}, s_ = 0, c_ = class extends o_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor && (this.length += e.length, !0);
	}
	integrate(e, t) {
		t > 0 && (this.id.clock += t, this.length -= t), xh(e.doc.store, this);
	}
	write(e, t) {
		e.writeInfo(s_), e.writeLen(this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, l_ = class e {
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
		throw ep();
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
}, u_ = (e) => new l_(e.readBuf()), d_ = class e {
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
		jm(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeLen(this.len - t);
	}
	getRef() {
		return 1;
	}
}, f_ = (e) => new d_(e.readLen()), p_ = (e, t) => new Rm({
	guid: e,
	...t,
	shouldLoad: t.shouldLoad || t.autoLoad || !1
}), m_ = class e {
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
		return new e(p_(this.doc.guid, this.opts));
	}
	splice(e) {
		throw ep();
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
}, h_ = (e) => new m_(p_(e.readString(), e.readAny())), g_ = class e {
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
		throw ep();
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
}, __ = (e) => new g_(e.readJSON()), Z = class e {
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
		throw ep();
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
}, v_ = (e) => new Z(e.readKey(), e.readJSON()), y_ = class e {
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
}, b_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		t === "undefined" ? n.push(void 0) : n.push(JSON.parse(t));
	}
	return new y_(n);
}, x_ = Jp("node_env") === "development", S_ = class e {
	constructor(e) {
		this.arr = e, x_ && zp(e);
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
}, C_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) n.push(e.readAny());
	return new S_(n);
}, w_ = class e {
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
}, T_ = (e) => new w_(e.readString()), E_ = [
	Og,
	jg,
	Yg,
	e_,
	Qg,
	r_,
	a_
], D_ = 0, O_ = 1, k_ = 2, A_ = 3, j_ = 4, M_ = 5, N_ = 6, P_ = class e {
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
		throw ep();
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
}, F_ = (e) => new P_(E_[e.readTypeRef()](e)), I_ = (e, t) => {
	let n = t, r = 0, i;
	do
		r > 0 && (n = q(n.client, n.clock + r)), i = Ch(e, n), r = n.clock - i.id.clock, n = i.redone;
	while (n !== null && i instanceof Q);
	return {
		item: i,
		diff: r
	};
}, L_ = (e, t) => {
	for (; e !== null && e.keep !== t;) e.keep = t, e = e.parent._item;
}, R_ = (e, t, n) => {
	let { client: r, clock: i } = t.id, a = new Q(q(r, i + n), t, q(r, i + n - 1), t.right, t.rightOrigin, t.parent, t.parentSub, t.content.splice(n));
	return t.deleted && a.markDeleted(), t.keep && (a.keep = !0), t.redone !== null && (a.redone = q(t.redone.client, t.redone.clock + n)), t.right = a, a.right !== null && (a.right.left = a), e._mergeStructs.push(a), a.parentSub !== null && a.right === null && a.parent._map.set(a.parentSub, a), t.length = n, a;
}, z_ = (e, t) => of(e, (e) => Om(e.deletions, t)), B_ = (e, t, n, r, i, a) => {
	let o = e.doc, s = o.store, c = o.clientID, l = t.redone;
	if (l !== null) return Th(e, l);
	let u = t.parent._item, d = null, f;
	if (u !== null && u.deleted === !0) {
		if (u.redone === null && (!n.has(u) || B_(e, u, n, r, i, a) === null)) return null;
		for (; u.redone !== null;) u = Th(e, u.redone);
	}
	let p = u === null ? t.parent : u.content.type;
	if (t.parentSub === null) {
		for (d = t.left, f = t; d !== null;) {
			let t = d;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Th(e, t.redone);
			if (t !== null && t.parent._item === u) {
				d = t;
				break;
			}
			d = d.left;
		}
		for (; f !== null;) {
			let t = f;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Th(e, t.redone);
			if (t !== null && t.parent._item === u) {
				f = t;
				break;
			}
			f = f.right;
		}
	} else if (f = null, t.right && !i) {
		for (d = t; d !== null && d.right !== null && (d.right.redone || Om(r, d.right.id) || z_(a.undoStack, d.right.id) || z_(a.redoStack, d.right.id));) for (d = d.right; d.redone;) d = Th(e, d.redone);
		if (d && d.right !== null) return null;
	} else d = p._map.get(t.parentSub) || null;
	let m = q(c, J(s, c)), h = new Q(m, d, d && d.lastId, f, f && f.id, p, t.parentSub, t.content.copy());
	return t.redone = m, L_(h, !0), h.integrate(e, 0), h;
}, Q = class e extends o_ {
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
		if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= J(n, this.origin.client)) return this.origin.client;
		if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= J(n, this.rightOrigin.client)) return this.rightOrigin.client;
		if (this.parent && this.parent.constructor === rh && this.id.client !== this.parent.client && this.parent.clock >= J(n, this.parent.client)) return this.parent.client;
		if (this.origin &&= (this.left = Eh(t, n, this.origin), this.left.lastId), this.rightOrigin &&= (this.right = Th(t, this.rightOrigin), this.right.id), this.left && this.left.constructor === c_ || this.right && this.right.constructor === c_) this.parent = null;
		else if (!this.parent) this.left && this.left.constructor === e ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === e && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
		else if (this.parent.constructor === rh) {
			let e = Ch(n, this.parent);
			this.parent = e.constructor === c_ ? null : e.content.type;
		}
		return null;
	}
	integrate(e, t) {
		if (t > 0 && (this.id.clock += t, this.left = Eh(e, e.doc.store, q(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
			if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
				let t = this.left, n;
				if (t !== null) n = t.right;
				else if (this.parentSub !== null) for (n = this.parent._map.get(this.parentSub) || null; n !== null && n.left !== null;) n = n.left;
				else n = this.parent._start;
				let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
				for (; n !== null && n !== this.right;) {
					if (i.add(n), r.add(n), ih(this.origin, n.origin)) {
						if (n.id.client < this.id.client) t = n, r.clear();
						else if (ih(this.rightOrigin, n.rightOrigin)) break;
					} else if (n.origin !== null && i.has(Ch(e.doc.store, n.origin))) r.has(Ch(e.doc.store, n.origin)) || (t = n, r.clear());
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
			this.right === null ? this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)) : this.right.left = this, this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), xh(e.doc.store, this), this.content.integrate(e, this), jh(e, this.parent, this.parentSub), (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
		} else new c_(this.id, this.length).integrate(e, 0);
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
		return this.length === 1 ? this.id : q(this.id.client, this.id.clock + this.length - 1);
	}
	mergeWith(e) {
		if (this.constructor === e.constructor && ih(e.origin, this.lastId) && this.right === e && ih(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
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
			this.countable && this.parentSub === null && (t._length -= this.length), this.markDeleted(), jm(e.deleteSet, this.id.client, this.id.clock, this.length), jh(e, t, this.parentSub), this.content.delete(e);
		}
	}
	gc(e, t) {
		if (!this.deleted) throw tp();
		this.content.gc(e), t ? Dh(e, this, new c_(this.id, this.length)) : this.content = new d_(this.length);
	}
	write(e, t) {
		let n = t > 0 ? q(this.id.client, this.id.clock + t - 1) : this.origin, r = this.rightOrigin, i = this.parentSub, a = this.content.getRef() & 31 | (n === null ? 0 : 128) | (r === null ? 0 : 64) | (i === null ? 0 : 32);
		if (e.writeInfo(a), n !== null && e.writeLeftID(n), r !== null && e.writeRightID(r), n === null && r === null) {
			let t = this.parent;
			if (t._item !== void 0) {
				let n = t._item;
				if (n === null) {
					let n = ah(t);
					e.writeParentInfo(!0), e.writeString(n);
				} else e.writeParentInfo(!1), e.writeLeftID(n.id);
			} else t.constructor === String ? (e.writeParentInfo(!0), e.writeString(t)) : t.constructor === rh ? (e.writeParentInfo(!1), e.writeLeftID(t)) : tp();
			i !== null && e.writeString(i);
		}
		this.content.write(e, t);
	}
}, V_ = (e, t) => H_[t & 31](e), H_ = [
	() => {
		tp();
	},
	f_,
	b_,
	u_,
	T_,
	__,
	v_,
	F_,
	C_,
	h_,
	() => {
		tp();
	}
], U_ = 10, W_ = class extends o_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor && (this.length += e.length, !0);
	}
	integrate(e, t) {
		tp();
	}
	write(e, t) {
		e.writeInfo(U_), G(e.restEncoder, this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, G_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}, K_ = "__ $YJS$ __";
G_[K_] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), G_[K_] = !0;
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/mutex.js
var q_ = () => {
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
}, J_ = /[\uD800-\uDBFF]/, Y_ = /[\uDC00-\uDFFF]/, X_ = (e, t) => {
	let n = 0, r = 0;
	for (; n < e.length && n < t.length && e[n] === t[n];) n++;
	for (n > 0 && J_.test(e[n - 1]) && n--; r + n < e.length && r + n < t.length && e[e.length - r - 1] === t[t.length - r - 1];) r++;
	return r > 0 && Y_.test(e[e.length - r]) && r--, {
		index: n,
		remove: e.length - n - r,
		insert: t.slice(n, t.length - r)
	};
}, $ = new hr("y-sync"), Z_ = new hr("y-undo");
new hr("yjs-cursor");
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/hash/sha256.js
var Q_ = (e, t) => e >>> t | e << 32 - t, $_ = (e) => Q_(e, 2) ^ Q_(e, 13) ^ Q_(e, 22), ev = (e) => Q_(e, 6) ^ Q_(e, 11) ^ Q_(e, 25), tv = (e) => Q_(e, 7) ^ Q_(e, 18) ^ e >>> 3, nv = (e) => Q_(e, 17) ^ Q_(e, 19) ^ e >>> 10, rv = new Uint32Array([
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
]), iv = new Uint32Array([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), av = class {
	constructor() {
		let e = /* @__PURE__ */ new ArrayBuffer(320);
		this._H = new Uint32Array(e, 0, 8), this._H.set(iv), this._W = new Uint32Array(e, 64, 64);
	}
	_updateHash() {
		let e = this._H, t = this._W;
		for (let e = 16; e < 64; e++) t[e] = nv(t[e - 2]) + t[e - 7] + tv(t[e - 15]) + t[e - 16];
		let n = e[0], r = e[1], i = e[2], a = e[3], o = e[4], s = e[5], c = e[6], l = e[7];
		for (let e = 0, u, d; e < 64; e++) u = l + ev(o) + (o & s ^ ~o & c) + rv[e] + t[e] >>> 0, d = $_(n) + (n & r ^ n & i ^ r & i) >>> 0, l = c, c = s, s = o, o = a + u >>> 0, a = i, i = r, r = n, n = u + d >>> 0;
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
		n || (this._W[r - (t % 4 == 0 ? 0 : 1)] |= 128 << (3 - t % 4) * 8), this._W[14] = e.byteLength / mf, this._W[15] = e.byteLength * 8, this._updateHash();
		let i = /* @__PURE__ */ new Uint8Array(32);
		for (let e = 0; e < this._H.length; e++) for (let t = 0; t < 4; t++) i[e * 4 + t] = this._H[e] >>> (3 - t) * 8;
		return i;
	}
}, ov = (e) => new av().digest(e), sv = (e) => {
	for (let t = 6; t < e.length; t++) e[t % 6] = e[t % 6] ^ e[t];
	return e.slice(0, 6);
}, cv = (e) => Zp(sv(ov(Qp(e)))), lv = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && t.sv.get(e.id.client) > e.id.clock && !Om(t.ds, e.id), uv = [{
	light: "#ecd44433",
	dark: "#ecd444"
}], dv = (e, t, n) => {
	if (!e.has(n)) {
		if (e.size < t.length) {
			let n = tf();
			e.forEach((e) => n.add(e)), t = t.filter((e) => !n.has(e));
		}
		e.set(n, Sp(t));
	}
	return e.get(n);
}, fv = (e, { colors: t = uv, colorMapping: n = /* @__PURE__ */ new Map(), permanentUserData: r = null, onFirstRender: i = () => {}, mapping: a } = {}) => {
	let o = !1, s = new hv(e, a), c = new ur({
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
				return t.addToHistory = e.getMeta("addToHistory") !== !1, t.isChangeOrigin = n !== void 0 && !!n.isChangeOrigin, t.isUndoRedoOperation = n !== void 0 && !!n.isChangeOrigin && !!n.isUndoRedoOperation, s.prosemirrorView !== null && n !== void 0 && (n.snapshot != null || n.prevSnapshot != null) && im(0, () => {
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
						let t = Z_.getState(e.state), n = t && t.undoManager;
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
}, pv = (e, t, n) => {
	if (t !== null && t.anchor !== null && t.head !== null) {
		if (t.type === "all") e.setSelection(new rr(e.doc));
		else if (t.type === "node") {
			let r = zv(n.doc, n.type, t.anchor, n.mapping);
			e.setSelection(Yn.create(e.doc, r));
		} else {
			let r = zv(n.doc, n.type, t.anchor, n.mapping), i = zv(n.doc, n.type, t.head, n.mapping);
			if (r !== null && i !== null) {
				let t = _r.between(e.doc.resolve(r), e.doc.resolve(i));
				e.setSelection(t);
			}
		}
	}
}, mv = (e, t) => ({
	type: t.selection.jsonID,
	anchor: Lv(t.selection.anchor, e.type, e.mapping),
	head: Lv(t.selection.head, e.type, e.mapping)
}), hv = class {
	constructor(e, t = /* @__PURE__ */ new Map()) {
		this.type = e, this.prosemirrorView = null, this.mux = q_(), this.mapping = t, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
			this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = mv(this, this.prosemirrorView.state));
		}, this.afterAllTransactions = () => {
			this.beforeTransactionSelection = null;
		}, this._domSelectionInView = null;
	}
	get _tr() {
		return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
	}
	_isLocalCursorInView() {
		return this.prosemirrorView.hasFocus() ? (Up && this._domSelectionInView === null && (im(0, () => {
			this._domSelectionInView = null;
		}), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
	}
	_isDomSelectionInView() {
		let e = this.prosemirrorView._root.getSelection();
		if (e == null || e.anchorNode == null) return !1;
		let t = this.prosemirrorView._root.createRange();
		t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset), t.getClientRects().length === 0 && t.startContainer && t.collapsed && t.selectNodeContents(t.startContainer);
		let n = t.getBoundingClientRect(), r = tm.documentElement;
		return n.bottom >= 0 && n.right >= 0 && n.left <= (window.innerWidth || r.clientWidth || 0) && n.top <= (window.innerHeight || r.clientHeight || 0);
	}
	renderSnapshot(e, t) {
		t ||= hh(Mm(), /* @__PURE__ */ new Map()), this.prosemirrorView.dispatch(this._tr.setMeta($, {
			snapshot: e,
			prevSnapshot: t
		}));
	}
	unrenderSnapshot() {
		this.mapping.clear(), this.mux(() => {
			let e = this.type.toArray().map((e) => _v(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), t = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new cr(Qn.from(e), 0, 0));
			t.setMeta($, {
				snapshot: null,
				prevSnapshot: null
			}), this.prosemirrorView.dispatch(t);
		});
	}
	_forceRerender() {
		this.mapping.clear(), this.mux(() => {
			let e = this.beforeTransactionSelection === null ? this.prosemirrorView.state.selection : null, t = this.type.toArray().map((e) => _v(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), n = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new cr(Qn.from(t), 0, 0));
			if (e) {
				let t = df(ff(e.anchor, 0), n.doc.content.size), r = df(ff(e.head, 0), n.doc.content.size);
				n.setSelection(_r.create(n.doc, t, r));
			}
			this.prosemirrorView.dispatch(n.setMeta($, {
				isChangeOrigin: !0,
				binding: this
			}));
		});
	}
	_renderSnapshot(e, t, n) {
		let r = this.doc, i = this.type;
		if (e ||= gh(this.doc), e instanceof Uint8Array || t instanceof Uint8Array) {
			if ((!(e instanceof Uint8Array) || !(t instanceof Uint8Array)) && tp(), r = new Rm({ gc: !1 }), Zm(r, t), t = gh(r), Zm(r, e), e = gh(r), i._item === null) {
				let e = Array.from(this.doc.share.keys()).find((e) => this.doc.share.get(e) === this.type);
				i = r.getXmlFragment(e);
			} else {
				let e = r.store.clients.get(i._item.id.client) ?? [];
				i = e[Sh(e, i._item.id.clock)].content.type;
			}
		}
		this.mapping.clear(), this.mux(() => {
			r.transact((r) => {
				let a = n.permanentUserData;
				a && a.dss.forEach((e) => {
					Em(r, e, (e) => {});
				});
				let o = (e, t) => {
					let r = e === "added" ? a.getUserByClientId(t.client) : a.getUserByDeletedId(t);
					return {
						user: r,
						type: e,
						color: dv(n.colorMapping, n.colors, r)
					};
				}, s = lg(i, new mh(t.ds, e.sv)).map((n) => !n._item.deleted || lv(n._item, e) || lv(n._item, t) ? _v(n, this.prosemirrorView.state.schema, {
					mapping: /* @__PURE__ */ new Map(),
					isOMark: /* @__PURE__ */ new Map()
				}, e, t, o) : null).filter((e) => e !== null), c = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new cr(Qn.from(s), 0, 0));
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
			Em(t, t.deleteSet, (e) => {
				if (e.constructor === Q) {
					let t = e.content.type;
					t && this.mapping.delete(t);
				}
			}), t.changed.forEach(e), t.changedParentTypes.forEach(e);
			let n = this.type.toArray().map((e) => gv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), r = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new cr(Qn.from(n), 0, 0));
			pv(r, this.beforeTransactionSelection, this), r = r.setMeta($, {
				isChangeOrigin: !0,
				isUndoRedoOperation: t.origin instanceof zh
			}), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && r.scrollIntoView(), this.prosemirrorView.dispatch(r);
		});
	}
	_prosemirrorChanged(e) {
		this.doc.transact(() => {
			Fv(this.doc, this.type, e, this), this.beforeTransactionSelection = mv(this, this.prosemirrorView.state);
		}, $);
	}
	initView(e) {
		this.prosemirrorView != null && this.destroy(), this.prosemirrorView = e, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
	}
	destroy() {
		this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
	}
}, gv = (e, t, n, r, i, a) => {
	let o = n.mapping.get(e);
	if (o === void 0) {
		if (e instanceof $g) return _v(e, t, n, r, i, a);
		throw ep();
	}
	return o;
}, _v = (e, t, n, r, i, a) => {
	let o = [], s = (e) => {
		if (e instanceof $g) {
			let s = gv(e, t, n, r, i, a);
			s !== null && o.push(s);
		} else {
			let s = e._item.right?.content?.type;
			s instanceof Jg && !s._item.deleted && s._item.id.client === s.doc.clientID && (e.applyDelta([{ retain: e.length }, ...s.toDelta()]), s.doc.transact((e) => {
				s._item.delete(e);
			}));
			let c = vv(e, t, n, r, i, a);
			c !== null && c.forEach((e) => {
				e !== null && o.push(e);
			});
		}
	};
	r === void 0 || i === void 0 ? e.toArray().forEach(s) : lg(e, new mh(i.ds, r.sv)).forEach(s);
	try {
		let s = e.getAttributes(r);
		r !== void 0 && (lv(e._item, r) ? lv(e._item, i) || (s.ychange = a ? a("added", e._item.id) : { type: "added" }) : s.ychange = a ? a("removed", e._item.id) : { type: "removed" });
		let c = t.node(e.nodeName, s, o);
		return n.mapping.set(e, c), c;
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, $), n.mapping.delete(e), null;
	}
}, vv = (e, t, n, r, i, a) => {
	let o = [], s = e.toDelta(r, i, a);
	try {
		for (let e = 0; e < s.length; e++) {
			let n = s[e];
			o.push(t.text(n.insert, Nv(n.attributes, t)));
		}
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, $), null;
	}
	return o;
}, yv = (e, t) => {
	let n = new i_(), r = e.map((e) => ({
		insert: e.text,
		attributes: Pv(e.marks, t)
	}));
	return n.applyDelta(r), t.mapping.set(n, e), n;
}, bv = (e, t) => {
	let n = new $g(e.type.name);
	for (let t in e.attrs) {
		let r = e.attrs[t];
		r !== null && t !== "ychange" && n.setAttribute(t, r);
	}
	return n.insert(0, wv(e).map((e) => xv(e, t))), t.mapping.set(n, e), n;
}, xv = (e, t) => e instanceof Array ? yv(e, t) : bv(e, t), Sv = (e) => typeof e == "object" && !!e, Cv = (e, t) => {
	let n = Object.keys(e).filter((t) => e[t] !== null), r = n.length === (t == null ? 0 : Object.keys(t).filter((e) => t[e] !== null).length);
	for (let i = 0; i < n.length && r; i++) {
		let a = n[i], o = e[a], s = t[a];
		r = a === "ychange" || o === s || Sv(o) && Sv(s) && Cv(o, s);
	}
	return r;
}, wv = (e) => {
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
}, Tv = (e, t) => {
	let n = e.toDelta();
	return n.length === t.length && n.every((e, n) => e.insert === t[n].text && jp(e.attributes || {}).length === t[n].marks.length && Fp(e.attributes, (e, r) => {
		let i = Mv(r), a = t[n].marks;
		return Cv(e, a.find((e) => e.type.name === i)?.attrs);
	}));
}, Ev = (e, t) => {
	if (e instanceof $g && !(t instanceof Array) && Iv(e, t)) {
		let n = wv(t);
		return e._length === n.length && Cv(e.getAttributes(), t.attrs) && e.toArray().every((e, t) => Ev(e, n[t]));
	}
	return e instanceof i_ && t instanceof Array && Tv(e, t);
}, Dv = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every((e, n) => t[n] === e), Ov = (e, t, n) => {
	let r = e.toArray(), i = wv(t), a = i.length, o = r.length, s = df(o, a), c = 0, l = 0, u = !1;
	for (; c < s; c++) {
		let e = r[c], t = i[c];
		if (Dv(n.mapping.get(e), t)) u = !0;
		else if (!Ev(e, t)) break;
	}
	for (; c + l < s; l++) {
		let e = r[o - l - 1], t = i[a - l - 1];
		if (Dv(n.mapping.get(e), t)) u = !0;
		else if (!Ev(e, t)) break;
	}
	return {
		equalityFactor: c + l,
		foundMappedChild: u
	};
}, kv = (e) => {
	let t = "", n = e._start, r = {};
	for (; n !== null;) n.deleted || (n.countable && n.content instanceof w_ ? t += n.content.str : n.content instanceof Z && (r[n.content.key] = null)), n = n.right;
	return {
		str: t,
		nAttrs: r
	};
}, Av = (e, t, n) => {
	n.mapping.set(e, t);
	let { nAttrs: r, str: i } = kv(e), a = t.map((e) => ({
		insert: e.text,
		attributes: Object.assign({}, r, Pv(e.marks, n))
	})), { insert: o, remove: s, index: c } = X_(i, a.map((e) => e.insert).join(""));
	e.delete(c, s), e.insert(c, o), e.applyDelta(a.map((e) => ({
		retain: e.insert.length,
		attributes: e.attributes
	})));
}, jv = /(.*)(--[a-zA-Z0-9+/=]{8})$/, Mv = (e) => jv.exec(e)?.[1] ?? e, Nv = (e, t) => {
	let n = [];
	for (let r in e) n.push(t.mark(Mv(r), e[r]));
	return n;
}, Pv = (e, t) => {
	let n = {};
	return e.forEach((e) => {
		if (e.type.name !== "ychange") {
			let r = Qd(t.isOMark, e.type, () => !e.type.excludes(e.type));
			n[r ? `${e.type.name}--${cv(e.toJSON())}` : e.type.name] = e.attrs;
		}
	}), n;
}, Fv = (e, t, n, r) => {
	if (t instanceof $g && t.nodeName !== n.type.name) throw Error("node name mismatch!");
	if (r.mapping.set(t, n), t instanceof $g) {
		let e = t.getAttributes(), r = n.attrs;
		for (let n in r) r[n] === null ? t.removeAttribute(n) : e[n] !== r[n] && n !== "ychange" && t.setAttribute(n, r[n]);
		for (let n in e) r[n] === void 0 && t.removeAttribute(n);
	}
	let i = wv(n), a = i.length, o = t.toArray(), s = o.length, c = df(a, s), l = 0, u = 0;
	for (; l < c; l++) {
		let e = o[l], t = i[l];
		if (!Dv(r.mapping.get(e), t)) {
			if (Ev(e, t)) r.mapping.set(e, t);
			else break;
		}
	}
	for (; u + l + 1 < c; u++) {
		let e = o[s - u - 1], t = i[a - u - 1];
		if (!Dv(r.mapping.get(e), t)) {
			if (Ev(e, t)) r.mapping.set(e, t);
			else break;
		}
	}
	e.transact(() => {
		for (; s - l - u > 0 && a - l - u > 0;) {
			let n = o[l], c = i[l], d = o[s - u - 1], f = i[a - u - 1];
			if (n instanceof i_ && c instanceof Array) Tv(n, c) || Av(n, c, r), l += 1;
			else {
				let i = n instanceof $g && Iv(n, c), a = d instanceof $g && Iv(d, f);
				if (i && a) {
					let e = Ov(n, c, r), t = Ov(d, f, r);
					e.foundMappedChild && !t.foundMappedChild ? a = !1 : !e.foundMappedChild && t.foundMappedChild || e.equalityFactor < t.equalityFactor ? i = !1 : a = !1;
				}
				i ? (Fv(e, n, c, r), l += 1) : a ? (Fv(e, d, f, r), u += 1) : (r.mapping.delete(t.get(l)), t.delete(l, 1), t.insert(l, [xv(c, r)]), l += 1);
			}
		}
		let n = s - l - u;
		if (s === 1 && a === 0 && o[0] instanceof i_ ? (r.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : n > 0 && (t.slice(l, l + n).forEach((e) => r.mapping.delete(e)), t.delete(l, n)), l + u < a) {
			let e = [];
			for (let t = l; t < a - u; t++) e.push(xv(i[t], r));
			t.insert(l, e);
		}
	}, $);
}, Iv = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, Lv = (e, t, n) => {
	if (e === 0) return dh(t, 0, t.length === 0 ? -1 : 0);
	let r = t._first === null ? null : t._first.content.type;
	for (; r !== null && t !== r;) {
		if (r instanceof i_) {
			if (r._length >= e) return dh(r, e, t.length === 0 ? -1 : 0);
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
				if (e === 1 && r._length === 0 && i > 1) return new sh(r._item === null ? null : r._item.id, r._item === null ? ah(r) : null, null);
				if (e -= i, r._item !== null && r._item.next !== null) r = r._item.next.content.type;
				else {
					if (e === 0) return r = r._item === null ? r : r._item.parent, new sh(r._item === null ? null : r._item.id, r._item === null ? ah(r) : null, null);
					do
						r = r._item.parent, e--;
					while (r !== t && r._item.next === null);
					r !== t && (r = r._item.next.content.type);
				}
			}
		}
		if (r === null) throw tp();
		if (e === 0 && r.constructor !== i_ && r !== t) return Rv(r._item.parent, r._item);
	}
	return dh(t, t._length, t.length === 0 ? -1 : 0);
}, Rv = (e, t) => {
	let n = null, r = null;
	return e._item === null ? r = ah(e) : n = q(e._item.id.client, e._item.id.clock), new sh(n, r, t.id);
}, zv = (e, t, n, r) => {
	let i = ph(n, e);
	if (i === null || i.type !== t && !oh(t, i.type._item)) return null;
	let a = i.type, o = 0;
	if (a.constructor === i_) o = i.index;
	else if (a._item === null || !a._item.deleted) {
		let e = a._first, t = 0;
		for (; t < a._length && t < i.index && e !== null;) {
			if (!e.deleted) {
				let n = e.content.type;
				t++, n instanceof i_ ? o += n._length : o += r.get(n).nodeSize;
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
				t.deleted || (e instanceof i_ ? o += e._length : o += r.get(e).nodeSize), t = t.right;
			}
		}
		a = e;
	}
	return o - 1;
};
function Bv(e) {
	let t = e.toArray(), n = (e) => {
		let t;
		if (e instanceof i_) t = e.toDelta().map((e) => {
			let t = {
				type: "text",
				text: e.insert
			};
			return e.attributes && (t.marks = Object.keys(e.attributes).map((t) => {
				let n = e.attributes[t], r = { type: Mv(t) };
				return Object.keys(n) && (r.attrs = n), r;
			})), t;
		});
		else if (e instanceof $g) {
			t = { type: e.nodeName };
			let r = e.getAttributes();
			Object.keys(r).length && (t.attrs = r);
			let i = e.toArray();
			i.length && (t.content = i.map(n).flat());
		} else tp();
		return t;
	};
	return {
		type: "doc",
		content: t.map(n)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/y-prosemirror@1.3.6_prosemirror-model@1.25.0_prosemirror-state@1.4.3_prosemirror-view@1_31ec72f916c667df313c22d35cf8a5eb/node_modules/y-prosemirror/src/plugins/undo-plugin.js
var Vv = (e) => Z_.getState(e)?.undoManager?.undo() != null, Hv = (e) => Z_.getState(e)?.undoManager?.redo() != null, Uv = /* @__PURE__ */ new Set(["paragraph"]), Wv = (e, t) => !(e instanceof Q) || !(e.content instanceof P_) || !(e.content.type instanceof Jg || e.content.type instanceof $g && t.has(e.content.type.nodeName)) || e.content.type._length === 0, Gv = ({ protectedNodes: e = Uv, trackedOrigins: t = [], undoManager: n = null } = {}) => new ur({
	key: Z_,
	state: {
		init: (r, i) => {
			let a = $.getState(i), o = n || new zh(a.type, {
				trackedOrigins: new Set([$].concat(t)),
				deleteFilter: (t) => Wv(t, e),
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
				prevSel: mv(i, n),
				hasUndoOps: o,
				hasRedoOps: s
			} : o !== t.hasUndoOps || s !== t.hasRedoOps ? Object.assign({}, t, {
				hasUndoOps: a.undoStack.length > 0,
				hasRedoOps: a.redoStack.length > 0
			}) : t;
		}
	},
	view: (e) => {
		let t = $.getState(e.state), n = Z_.getState(e.state).undoManager;
		return n.on("stack-item-added", ({ stackItem: n }) => {
			let r = t.binding;
			r && n.meta.set(r, Z_.getState(e.state).prevSel);
		}), n.on("stack-item-popped", ({ stackItem: e }) => {
			let n = t.binding;
			n && (n.beforeTransactionSelection = e.meta.get(n) || n.beforeTransactionSelection);
		}), { destroy: () => {
			n.destroy();
		} };
	}
});
Gn.create({
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
			undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), Z_.getState(t).undoManager.undoStack.length === 0 ? !1 : !n || Vv(t)),
			redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), Z_.getState(t).undoManager.redoStack.length === 0 ? !1 : !n || Hv(t))
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
		let t = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = Gv(this.options.yUndoOptions), r = n.spec.view;
		n.spec.view = (e) => {
			let { undoManager: t } = Z_.getState(e.state);
			t.restore &&= (t.restore(), () => {});
			let n = r ? r(e) : void 0;
			return { destroy: () => {
				let e = t.trackedOrigins.has(t), r = t._observers;
				t.restore = () => {
					e && t.trackedOrigins.add(t), t.doc.on("afterTransaction", t.afterTransactionHandler), t._observers = r;
				}, n?.destroy && n.destroy();
			} };
		};
		let i = fv(t, {
			...this.options.ySyncOptions,
			onFirstRender: this.options.onFirstRender
		});
		return this.editor.options.enableContentCheck && ((e = t.doc) == null || e.on("beforeTransaction", () => {
			try {
				let e = Bv(t);
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
			this.editor.options.enableContentCheck && new ur({
				key: new hr("filterInvalidContent"),
				filterTransaction: () => {
					var e;
					return this.storage.isDisabled && ((e = t.doc) == null || e.destroy()), !0;
				}
			})
		].filter(Boolean);
	}
});
function Kv(e) {
	return !!e.getMeta($);
}
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-node-range@2.24.0_@tiptap+core@2.24.0_@tiptap+pm@2.24.0__@tiptap+pm@2.24.0/node_modules/@tiptap/extension-node-range/dist/index.js
function qv(e) {
	if (!e.length) return mr.empty;
	let t = [], n = e[0].$from.node(0);
	return e.forEach((e) => {
		let n = e.$from.pos, r = e.$from.nodeAfter;
		r && t.push(lr.node(n, n + r.nodeSize, { class: "ProseMirror-selectednoderange" }));
	}), mr.create(n, t);
}
function Jv(e, t, n) {
	let r = [], i = e.node(0);
	n = typeof n == "number" && n >= 0 ? n : e.sameParent(t) ? Math.max(0, e.sharedDepth(t.pos) - 1) : e.sharedDepth(t.pos);
	let a = new dr(e, t, n), o = a.depth === 0 ? 0 : i.resolve(a.start).posAtIndex(0);
	return a.parent.forEach((e, t) => {
		let n = o + t, s = n + e.nodeSize;
		if (n < a.start || n >= a.end) return;
		let c = new or(i.resolve(n), i.resolve(s));
		r.push(c);
	}), r;
}
var Yv = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		return new Xv(e.resolve(this.anchor), e.resolve(this.head));
	}
}, Xv = class e extends Zn {
	constructor(e, t, n, r = 1) {
		let { doc: i } = e, a = e === t, o = e.pos === i.content.size && t.pos === i.content.size, s = a && !o ? i.resolve(t.pos + (r > 0 ? 1 : -1)) : t, c = a && o ? i.resolve(e.pos - (r > 0 ? 1 : -1)) : e, l = Jv(c.min(s), c.max(s), n), u = s.pos >= e.pos ? l[0].$from : l[l.length - 1].$to, d = s.pos >= e.pos ? l[l.length - 1].$to : l[0].$from;
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
		return new Yv(this.anchor, this.head);
	}
};
Xv.prototype.visible = !1;
function Zv(e) {
	return e instanceof Xv;
}
Gn.create({
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
				if (!Zv(a)) {
					let e = Xv.create(i, s, c, t, -1);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendBackwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Shift-ArrowDown": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, selection: a, tr: o } = r, { anchor: s, head: c } = a;
				if (!Zv(a)) {
					let e = Xv.create(i, s, c, t);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendForwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Mod-a": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, tr: a } = r, o = Xv.create(i, 0, i.content.size, t);
				return a.setSelection(o), n.dispatch(a), !0;
			}
		};
	},
	onSelectionUpdate() {
		let { selection: e } = this.editor.state;
		Zv(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
	},
	addProseMirrorPlugins() {
		let e = !1, t = !1;
		return [new ur({
			key: new hr("nodeRange"),
			props: {
				attributes: () => e ? { class: "ProseMirror-noderangeselection" } : { class: "" },
				handleDOMEvents: { mousedown: (e, n) => {
					let { key: r } = this.options, i = /Mac/.test(navigator.platform), a = !!n.shiftKey, o = !!n.ctrlKey, s = !!n.altKey, c = !!n.metaKey;
					return (r == null || r === "Shift" && a || r === "Control" && o || r === "Alt" && s || r === "Meta" && c || r === "Mod" && (i ? c : o)) && (t = !0), t && document.addEventListener("mouseup", () => {
						t = !1;
						let { state: n } = e, { doc: r, selection: i, tr: a } = n, { $anchor: o, $head: s } = i;
						if (o.sameParent(s)) return;
						let c = Xv.create(r, o.pos, s.pos, this.options.depth);
						a.setSelection(c), e.dispatch(a);
					}, { once: !0 }), !1;
				} },
				decorations: (n) => {
					let { selection: r } = n, i = Zv(r);
					if (e = !1, !t) return i ? (e = !0, qv(r.ranges)) : null;
					let { $from: a, $to: o } = r;
					if (!i && a.sameParent(o)) return null;
					let s = Jv(a, o, this.options.depth);
					return s.length ? (e = !0, qv(s)) : null;
				}
			}
		})];
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-drag-handle@2.24.0_@tiptap+core@2.24.0_@tiptap+pm@2.24.0__@tiptap+ext_234d04dbcc52d64c161f06b2d04b0cdb/node_modules/@tiptap/extension-drag-handle/dist/index.js
function Qv(e) {
	let t = "", n = getComputedStyle(e);
	for (let e = 0; e < n.length; e += 1) t += `${n[e]}:${n.getPropertyValue(n[e])};`;
	return t;
}
function $v(e) {
	let t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], r = [t, ...Array.from(t.getElementsByTagName("*"))];
	return n.forEach((e, t) => {
		r[t].style.cssText = Qv(e);
	}), t;
}
var ey = (e) => {
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
function ty(e, t) {
	return window.getComputedStyle(e)[t];
}
function ny(e = 0, t = 0, n = 0) {
	return Math.min(Math.max(e, t), n);
}
function ry(e, t, n) {
	let r = parseInt(ty(e.dom, "paddingLeft"), 10), i = parseInt(ty(e.dom, "paddingRight"), 10), a = parseInt(ty(e.dom, "borderLeftWidth"), 10), o = parseInt(ty(e.dom, "borderLeftWidth"), 10), s = e.dom.getBoundingClientRect();
	return {
		left: ny(t, s.left + r + a, s.right - i - o),
		top: n
	};
}
function iy(e) {
	var t;
	(t = e.parentNode) == null || t.removeChild(e);
}
function ay(e, t) {
	let { doc: n } = t.view.state, r = ey({
		editor: t,
		x: e.clientX,
		y: e.clientY,
		direction: "right"
	});
	if (!r.resultNode || r.pos === null) return [];
	let i = e.clientX, a = ry(t.view, i, e.clientY), o = t.view.posAtCoords(a);
	if (!o) return [];
	let { pos: s } = o;
	return n.resolve(s).parent ? Jv(n.resolve(r.pos), n.resolve(r.pos + 1), 0) : [];
}
function oy(e, t) {
	let { view: n } = t;
	if (!e.dataTransfer) return;
	let { empty: r, $from: i, $to: a } = n.state.selection, o = ay(e, t), s = Jv(i, a, 0), c = s.some((e) => o.find((t) => t.$from === e.$from && t.$to === e.$to)), l = r || !c ? o : s;
	if (!l.length) return;
	let { tr: u } = n.state, d = document.createElement("div"), f = l[0].$from.pos, p = l[l.length - 1].$to.pos, m = Xv.create(n.state.doc, f, p), h = m.content();
	l.forEach((e) => {
		let t = $v(n.nodeDOM(e.$from.pos));
		d.append(t);
	}), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), e.dataTransfer.clearData(), e.dataTransfer.setDragImage(d, 0, 0), n.dragging = {
		slice: h,
		move: !0
	}, u.setSelection(m), n.dispatch(u), document.addEventListener("drop", () => iy(d), { once: !0 });
}
var sy = (e, t) => {
	let n = e.resolve(t), { depth: r } = n;
	return r === 0 ? t : n.pos - n.parentOffset - 1;
}, cy = (e, t) => {
	let n = e.nodeAt(t), r = e.resolve(t), { depth: i } = r, a = n;
	for (; i > 0;) {
		let e = r.node(i);
		--i, i === 0 && (a = e);
	}
	return a;
}, ly = (e, t) => {
	let n = $.getState(e);
	return n ? Lv(t, n.type, n.binding.mapping) : null;
}, uy = (e, t) => {
	let n = $.getState(e);
	return n ? zv(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, dy = (e, t) => {
	let n = t;
	for (; n && n.parentNode && n.parentNode !== e.dom;) n = n.parentNode;
	return n;
}, fy = new hr("dragHandle"), py = ({ pluginKey: e = fy, element: t, editor: n, tippyOptions: r, onNodeChange: i }) => {
	let a = document.createElement("div"), o = null, s = !1, c = null, l = -1, u;
	return t.addEventListener("dragstart", (e) => {
		oy(e, n), setTimeout(() => {
			t && (t.style.pointerEvents = "none");
		}, 0);
	}), t.addEventListener("dragend", () => {
		t && (t.style.pointerEvents = "auto");
	}), new ur({
		key: typeof e == "string" ? new hr(e) : e,
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
					if (Kv(e)) {
						let e = uy(d, u);
						e !== l && (l = e);
					} else {
						let t = e.mapping.map(l);
						t !== l && (l = t, u = ly(d, l));
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
					if (o ||= Kn(e.dom, {
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
					if (p = dy(e, p), p === e.dom || p?.nodeType !== 1) return;
					let m = e.posAtDOM(p, 0), h = cy(n.state.doc, m), g = sy(n.state.doc, m);
					c = h, l = g, u = ly(e.state, l), i?.({
						editor: n,
						node: c,
						pos: l
					}), o.setProps({ getReferenceClientRect: () => p.getBoundingClientRect() });
				},
				destroy() {
					o?.destroy(), t && iy(a);
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
				let a = ey({
					x: r.clientX,
					y: r.clientY,
					direction: "right",
					editor: n
				});
				if (!a.resultElement) return !1;
				let d = a.resultElement;
				if (d = dy(e, d), d === e.dom || d?.nodeType !== 1) return !1;
				let f = e.posAtDOM(d, 0), p = cy(n.state.doc, f);
				if (p !== c) {
					let t = sy(n.state.doc, f);
					c = p, l = t, u = ly(e.state, l), i?.({
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
Gn.create({
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
		return [py({
			tippyOptions: this.options.tippyOptions,
			element: e,
			editor: this.editor,
			onNodeChange: this.options.onNodeChange
		})];
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-drag-handle-react@2.24.0_@tiptap+extension-drag-handle@2.24.0_@tiptap_ef8c8839ac22b6186dd6c01c5d1e1c6d/node_modules/@tiptap/extension-drag-handle-react/dist/index.js
var my = (e) => {
	let { className: t = "drag-handle", children: n, editor: r, pluginKey: i = fy, onNodeChange: a, tippyOptions: o } = e, [s, c] = R(null), l = L(null);
	return I(() => !s || r.isDestroyed ? () => {
		l.current = null;
	} : (l.current || (l.current = py({
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
	]), P.createElement("div", {
		className: t,
		ref: c
	}, n);
}, hy = (e) => typeof e == "object" && !!e && !Array.isArray(e), gy = (e, t) => {
	let n = hy(e.attrs) ? e.attrs : {};
	return {
		...e,
		attrs: {
			...n,
			id: t
		}
	};
}, _y = (e) => {
	let t = { ...e };
	if (t.type && pd(t.type) && hy(t.attrs) && "id" in t.attrs) {
		let { id: e, ...n } = t.attrs;
		t.attrs = Object.keys(n).length > 0 ? n : void 0;
	}
	return Array.isArray(t.content) && (t.content = t.content.map(_y)), t;
}, vy = (e) => e.map(_y), yy = (e) => hy(e) ? e.type : void 0, by = (e, t) => {
	let n = _y(e);
	return n.type && pd(n.type) ? gy(n, t) : n;
}, xy = (e, t) => t.length === 0 ? Qn.empty : Qn.fromArray(t.map((t) => e.schema.nodeFromJSON(t))), Sy = (e, t) => new cr(xy(e, t), 0, 0), Cy = (e, t) => {
	let n = vd(e, t);
	if (!n) throw new Ty(t);
	return n;
}, wy = (e) => e.isEmpty ? {
	json: null,
	html: null
} : {
	json: e.getJSON(),
	html: e.getHTML()
}, Ty = class extends Error {
	code = "target_not_found";
	targetId;
	constructor(e) {
		super(`Could not find block node ${e} in the current editor document.`), this.name = "NotesTextEditorPatchTargetNotFoundError", this.targetId = e, Object.setPrototypeOf(this, new.target.prototype);
	}
}, Ey = class extends Error {
	code = "unsupported_patch_type";
	patchType;
	constructor(e) {
		super(`Unsupported NotesTextEditor patch type: ${String(e)}`), this.name = "NotesTextEditorUnsupportedPatchTypeError", this.patchType = e, Object.setPrototypeOf(this, new.target.prototype);
	}
}, Dy = (e, t) => {
	switch (t.type) {
		case "top_level_prepend": {
			let n = Sy(e, vy(t.blocks)), r = e.state.tr.replace(0, 0, n);
			return r.docChanged && e.view.dispatch(r), wy(e);
		}
		case "top_level_append": {
			let n = Sy(e, vy(t.blocks)), r = e.state.doc.content.size, i = e.state.tr.replace(r, r, n);
			return i.docChanged && e.view.dispatch(i), wy(e);
		}
		case "insert_before": {
			let n = Cy(e, t.targetId), r = Sy(e, vy(t.blocks)), i = e.state.tr.replace(n.pos, n.pos, r);
			return i.docChanged && e.view.dispatch(i), wy(e);
		}
		case "insert_after": {
			let n = Cy(e, t.targetId), r = n.pos + n.node.nodeSize, i = Sy(e, vy(t.blocks)), a = e.state.tr.replace(r, r, i);
			return a.docChanged && e.view.dispatch(a), wy(e);
		}
		case "replace_block": {
			let n = Cy(e, t.targetId), r = e.schema.nodeFromJSON(by(t.block, t.targetId)), i = e.state.tr.replaceWith(n.pos, n.pos + n.node.nodeSize, r);
			return i.docChanged && e.view.dispatch(i), wy(e);
		}
		case "replace_content": {
			let n = Cy(e, t.targetId), r = e.state.tr.replace(n.pos + 1, n.pos + n.node.nodeSize - 1, Sy(e, vy(t.content)));
			return r.docChanged && e.view.dispatch(r), wy(e);
		}
		case "delete_block": {
			let n = Cy(e, t.targetId), r = e.state.tr.delete(n.pos, n.pos + n.node.nodeSize);
			return r.docChanged && e.view.dispatch(r), wy(e);
		}
	}
	throw new Ey(yy(t));
}, Oy = ({ placeholder: e, translations: t, aiBlockConfig: n, imageUploadConfig: r, enhanceEnabled: i = !1 }) => [
	ar,
	nr,
	kn,
	In,
	Jn,
	Rn,
	ir,
	xr,
	Dn,
	Fn,
	tr,
	Ln,
	Hn,
	On,
	yr,
	Tn,
	Ld,
	Yd,
	ld.configure({ currentConfig: n }),
	Od,
	Wd,
	...r ? [jd(r)] : [],
	...i ? [vr] : [],
	_d,
	sr,
	jn(e),
	Vn(e),
	qd({
		aiBlockConfig: n,
		translations: t,
		imageUploadConfig: r
	})
], ky = (e) => e.isVisible !== !1, Ay = (e) => "isVisible" in e ? e.isVisible !== !1 : !0, jy = (e) => !!e && "items" in e, My = (e) => !!e && "label" in e && !("items" in e), Ny = ({ primaryAction: e, secondaryActions: t = [], metadata: n = [], otherActions: r = [], status: i }) => {
	let a = [...i ? [{
		label: i.label,
		value: {
			type: "status",
			label: i.text,
			variant: i.variant
		},
		actions: i.actions,
		hideLabel: !0
	}] : [], ...n], o = t.filter(ky), s = r.filter(Ay), c = e && ky(e), l = o.length > 0, u = s.length > 0, d = l || u || c;
	return /* @__PURE__ */ z("div", {
		className: "flex flex-col",
		children: (a.length > 0 || d) && /* @__PURE__ */ B("div", {
			className: "flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center",
			children: [a.length > 0 && /* @__PURE__ */ z(v, { items: a }), /* @__PURE__ */ B("div", {
				className: "flex flex-shrink-0 flex-row items-center gap-2",
				children: [
					u && /* @__PURE__ */ z(fn, { items: s }),
					o.map((e, t) => x(e) ? /* @__PURE__ */ z(_, {
						items: e.items,
						onClick: e.onClick,
						variant: e.variant ?? "outline",
						value: e.value,
						disabled: e.disabled,
						tooltip: e.tooltip,
						loading: e.loading
					}, t) : /* @__PURE__ */ z(A, {
						onClick: e.onClick,
						variant: e.variant || "outline",
						label: e.label,
						icon: e.icon,
						hideLabel: e.hideLabel,
						disabled: e.disabled,
						tooltip: e.tooltip
					}, t)),
					c && (l || u) && /* @__PURE__ */ z("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
					c && My(e) && /* @__PURE__ */ z(A, {
						label: e.label,
						onClick: e.onClick,
						variant: "default",
						icon: e.icon,
						disabled: e.disabled,
						tooltip: e.tooltip
					}),
					c && jy(e) && /* @__PURE__ */ z(_, {
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
}, Py = ({ errorType: e, onDismiss: t }) => {
	let n = u(), r = ((e) => {
		switch (e) {
			case "file-too-large": return n.imageUpload.errors.fileTooLarge;
			case "invalid-type": return n.imageUpload.errors.invalidType;
			default: return n.imageUpload.errors.uploadFailed;
		}
	})(e);
	return /* @__PURE__ */ z("div", {
		className: "mx-auto flex w-full max-w-[824px] px-14 py-2",
		children: /* @__PURE__ */ B("div", {
			className: "flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm",
			children: [/* @__PURE__ */ B("div", {
				className: "flex w-full flex-row items-center gap-2",
				children: [/* @__PURE__ */ z("div", {
					className: "flex-shrink-0",
					children: /* @__PURE__ */ z(_n, {
						size: "sm",
						type: "critical"
					})
				}), /* @__PURE__ */ z("p", {
					className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
					title: r,
					children: r
				})]
			}), /* @__PURE__ */ z("div", {
				className: "flex-shrink-0",
				children: /* @__PURE__ */ z(A, {
					variant: "outline",
					onClick: t,
					label: n.imageUpload.errors.dismiss,
					size: "sm"
				})
			})]
		})
	});
}, Fy = ({ value: e, onChange: t, placeholder: n, disabled: r = !1 }) => /* @__PURE__ */ z("div", {
	className: "mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 sm:px-14 px-0",
	children: /* @__PURE__ */ z("textarea", {
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
}), Iy = kr(function({ onChange: e, placeholder: t, initialEditorState: n, readonly: r = !1, aiBlockConfig: i, imageUploadConfig: a, enhanceConfig: o, onTitleChange: s, primaryAction: c, secondaryActions: d, otherActions: m, metadata: h, status: g, alert: _, titlePlaceholder: v }, y) {
	let b = u(), x = L(null), S = L(null), C = jr(), [w] = R(() => n?.content || ""), [T, E] = R(n?.title || ""), [ee, te] = R(null);
	I(() => {
		s && s(T);
	}, [T, s]);
	let re = L(!1), ie = Pr(() => a ? {
		...a,
		onError: (e) => {
			te(e);
		}
	} : void 0, [a]), ae = Pr(() => Oy({
		placeholder: t,
		translations: b,
		aiBlockConfig: i,
		imageUploadConfig: ie,
		enhanceEnabled: !!o
	}), [
		t,
		b,
		i,
		ie,
		o
	]), D = Mn({
		extensions: ae,
		content: w,
		onUpdate: ({ editor: t }) => {
			re.current || e(wy(t));
		},
		onCreate: ({ editor: t }) => {
			if (gd(t.state.doc)) {
				re.current = !0;
				try {
					t.commands.setContent(t.getJSON());
				} finally {
					re.current = !1;
				}
				gd(t.state.doc) || e(wy(t));
			}
		},
		editable: !r,
		shouldRerenderOnTransaction: !1
	}), oe = Bn(D, o), se = F((e) => {
		re.current = !0;
		try {
			return e();
		} finally {
			re.current = !1;
		}
	}, []);
	Mr(y, () => ({
		clear: () => D?.commands.clearContent(),
		focus: () => D?.commands.focus(),
		setContent: (e) => D?.commands.setContent(e),
		applyPageDocumentPatch: (e) => D ? se(() => Dy(D, e)) : {
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
			!D || !ie || Md(D, e, ie);
		}
	}));
	let ce = Pr(() => ({ offset: [0, 5] }), []), le = F(({ node: e, pos: t }) => {
		S.current = e ? {
			pos: t,
			nodeSize: e.nodeSize
		} : null;
	}, []), ue = F(() => {
		let e = S.current;
		if (!e || !D) return;
		let { pos: t, nodeSize: n } = e, r = D.state.doc.nodeAt(t);
		if (r && r.content.size === 0) D.chain().focus().setTextSelection(t + 1).insertContent("/").run();
		else {
			let e = t + n;
			D.chain().focus().insertContentAt(e, { type: "paragraph" }).setTextSelection(e + 1).insertContent("/").run();
		}
	}, [D]), de = c || d && d.length > 0 || h && h.length > 0 || m && m.length > 0 || g, fe = s || T;
	return D ? /* @__PURE__ */ B("div", {
		className: "relative flex h-full w-full flex-col",
		ref: x,
		id: C,
		children: [
			de && /* @__PURE__ */ z(Ny, {
				primaryAction: c,
				secondaryActions: d,
				metadata: h,
				otherActions: m,
				status: g
			}),
			ee && /* @__PURE__ */ z(Py, {
				errorType: ee,
				onDismiss: () => te(null)
			}),
			/* @__PURE__ */ z(p, { children: oe.error && !oe.isLoading && /* @__PURE__ */ z(f.div, {
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
				children: /* @__PURE__ */ z(Pn, {
					error: oe.error,
					onDismiss: oe.clearError
				})
			}, "enhance-error") }),
			/* @__PURE__ */ B(zt, {
				className: "notes-text-editor-scroll h-full gap-6",
				children: [
					_ && /* @__PURE__ */ z("div", {
						className: "mx-auto w-full max-w-[824px] sm:px-14 px-0",
						children: /* @__PURE__ */ z(Er, { ..._ })
					}),
					fe && /* @__PURE__ */ z(Fy, {
						value: T,
						onChange: s ? E : void 0,
						placeholder: v,
						disabled: !s || r
					}),
					/* @__PURE__ */ B("div", {
						className: "notes-text-editor h-full",
						onClick: () => D.commands.focus(),
						children: [!r && /* @__PURE__ */ z(my, {
							editor: D,
							tippyOptions: ce,
							onNodeChange: le,
							children: /* @__PURE__ */ B("div", {
								className: "flex flex-row",
								children: [/* @__PURE__ */ z(O, {
									compact: !0,
									variant: "ghost",
									size: "sm",
									className: "text-f1-foreground-tertiary",
									onClick: ue,
									label: "Add paragraph",
									hideLabel: !0,
									icon: ve
								}), /* @__PURE__ */ z("div", {
									className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
									draggable: !0,
									"data-drag-handle": !0,
									children: /* @__PURE__ */ z(l, {
										icon: ne,
										size: "xs"
									})
								})]
							})
						}), /* @__PURE__ */ z(Un, {
							editor: D,
							className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
						})]
					})
				]
			}),
			!r && /* @__PURE__ */ z(Sr, {
				editorId: C,
				editor: D,
				disableButtons: oe.disableButtons,
				isToolbarOpen: !1,
				isFullscreen: !1,
				plainHtmlMode: !1,
				enhance: oe
			})
		]
	}) : null;
}), Ly = ({ withHeader: e = !1, withTitle: t = !0, withToolbar: n = !0 }) => /* @__PURE__ */ B("div", {
	className: "relative flex h-full w-full flex-col",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [
		e && /* @__PURE__ */ B("div", {
			className: "flex items-center justify-between border-b border-f1-border px-6 py-3",
			children: [/* @__PURE__ */ B("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ z(k, { className: "h-6 w-20 rounded-md" }), /* @__PURE__ */ z(k, { className: "h-6 w-24 rounded-md" })]
			}), /* @__PURE__ */ B("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ z(k, { className: "h-8 w-16 rounded-md" }), /* @__PURE__ */ z(k, { className: "h-8 w-12 rounded-md" })]
			})]
		}),
		n && /* @__PURE__ */ B("div", {
			className: "absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md",
			children: [
				/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
				/* @__PURE__ */ B("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" })
					]
				}),
				/* @__PURE__ */ B("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" })
					]
				}),
				/* @__PURE__ */ B("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ z(k, { className: "h-8 w-8 rounded" })
					]
				})
			]
		}),
		/* @__PURE__ */ B(zt, {
			className: "h-full gap-6",
			children: [t && /* @__PURE__ */ z("div", {
				className: "mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5",
				children: /* @__PURE__ */ z(k, { className: "h-8 w-80 rounded-md" })
			}), /* @__PURE__ */ z("div", {
				className: "h-full",
				children: /* @__PURE__ */ z("div", {
					className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14",
					children: /* @__PURE__ */ B("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ z(k, { className: "h-5 w-full rounded-md" }),
							/* @__PURE__ */ z(k, { className: "h-5 w-4/5 rounded-md" }),
							/* @__PURE__ */ z(k, { className: "h-5 w-3/5 rounded-md" }),
							/* @__PURE__ */ z(k, { className: "h-5 w-full rounded-md" }),
							/* @__PURE__ */ z(k, { className: "h-5 w-1/2 rounded-md" })
						]
					})
				})
			})]
		})
	]
}), Ry = d("F0NotesTextEditor", Cr(Iy, Ly)), zy = Ry, By = Ly, Vy = kr(({ header: e, actions: t, open: n, onClose: r }, i) => {
	let [a, o] = R(!1), s = F(() => {
		o(!0);
		let e = setTimeout(() => {
			r?.(), o(!1);
		}, 200);
		return () => clearTimeout(e);
	}, [r]);
	return /* @__PURE__ */ z(S, {
		open: n && !a,
		onOpenChange: (e) => !e && s?.(),
		children: /* @__PURE__ */ B(y, {
			ref: i,
			className: "bottom-3 top-auto max-w-[400px]",
			children: [/* @__PURE__ */ B(w, {
				className: "flex flex-col gap-4 px-4 py-5",
				children: [/* @__PURE__ */ z(_n, {
					type: e.type,
					size: "lg"
				}), /* @__PURE__ */ B("div", {
					className: "flex flex-col gap-0.5",
					children: [/* @__PURE__ */ z(b, {
						className: "text-xl sm:text-lg",
						children: e.title
					}), /* @__PURE__ */ z(te, {
						className: "text-lg sm:text-base",
						children: e.description
					})]
				})]
			}), t && /* @__PURE__ */ B(T, {
				className: "px-4 pb-4 pt-2",
				children: [/* @__PURE__ */ B("div", {
					className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full",
					children: [/* @__PURE__ */ z(A, {
						variant: "outline",
						...t.secondary
					}), /* @__PURE__ */ z(A, {
						...t.primary,
						variant: t.primary.variant || "default"
					})]
				}), /* @__PURE__ */ B("div", {
					className: "flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full",
					children: [/* @__PURE__ */ z(A, {
						variant: "outline",
						...t.secondary,
						size: "lg"
					}), /* @__PURE__ */ z(A, {
						...t.primary,
						variant: t.primary.variant || "default",
						size: "lg"
					})]
				})]
			})]
		})
	});
});
Vy.displayName = "Dialog";
var Hy = a(i({
	name: "Dialog",
	type: "info"
}, d("Dialog", Vy))), Uy = ({ avatar: e, title: t, description: n, primaryAction: r, secondaryActions: i, otherActions: a, status: o, metadata: s, deactivated: c, metadataRowGap: l, showBottomBorder: u, onClose: d }) => /* @__PURE__ */ z(C, {
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
}), Wy = [
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
], Gy = kr((e, t) => {
	let n = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, r = jr();
	return /* @__PURE__ */ B("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		ref: t,
		...e,
		children: [/* @__PURE__ */ z("defs", { children: Wy.map((e) => /* @__PURE__ */ z("clipPath", {
			id: `${r}-${e.id}`,
			children: /* @__PURE__ */ z("path", { d: e.path })
		}, e.id)) }), n ? Wy.map((e) => /* @__PURE__ */ z("path", {
			d: e.path,
			fill: "currentColor"
		}, e.id)) : Wy.map((e) => /* @__PURE__ */ z("foreignObject", {
			x: "0",
			y: "0",
			width: "24",
			height: "24",
			clipPath: `url(#${r}-${e.id})`,
			children: /* @__PURE__ */ z("div", { style: {
				width: "100%",
				height: "100%",
				background: "conic-gradient(from 0deg at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
			} })
		}, e.id))]
	});
});
//#endregion
//#region src/sds/UpsellingKit/ProductCard/index.tsx
function Ky({ title: e, description: t, onClick: n, onClose: r, isVisible: i, dismissable: a = !1, trackVisibility: o, type: s, ...c }) {
	let [u, d] = R(i);
	return I(() => {
		d(i), o && o(i);
	}, [i, o]), u && /* @__PURE__ */ z("div", { children: /* @__PURE__ */ z("div", {
		className: "p-2",
		children: /* @__PURE__ */ z("div", {
			style: s === "one-campaign" ? {
				background: "linear-gradient(98.39deg, rgba(249, 115, 22, 0.49) 0%, rgba(229, 25, 67, 0.49) 20%, rgba(229, 25, 67, 0.49) 49.97%, rgba(229, 25, 67, 0.49) 80%, rgba(164, 165, 222, 0.49) 100%)",
				borderRadius: "12px",
				padding: "1px"
			} : {},
			children: /* @__PURE__ */ B("div", {
				className: s === "one-campaign" ? "flex h-auto w-auto cursor-pointer flex-row gap-2 p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary" : "flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary",
				style: s === "one-campaign" ? {
					background: "#fef7f8",
					borderRadius: "11px"
				} : {},
				onClick: n,
				children: [/* @__PURE__ */ B(Ir, { children: [s === "one-campaign" ? /* @__PURE__ */ z("div", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ z(l, {
						icon: Gy,
						size: "lg",
						className: "!h-8 !w-8"
					})
				}) : /* @__PURE__ */ z("div", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ z(xn, {
						module: c.module,
						size: "md"
					})
				}), /* @__PURE__ */ z("div", {
					className: "flex flex-1 flex-col",
					children: /* @__PURE__ */ B("div", { children: [/* @__PURE__ */ z("h3", {
						className: "text-lg font-medium",
						children: e
					}), /* @__PURE__ */ z("p", {
						className: "text-f1-foreground-secondary",
						children: t
					})] })
				})] }), a && /* @__PURE__ */ z("div", {
					className: "h-6 w-6",
					children: /* @__PURE__ */ z(A, {
						variant: "ghost",
						icon: cn,
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
var qy = a(Ky), Jy = kr(function({ title: e, subtitle: t, mediaUrl: n, primaryAction: r, secondaryAction: i, onClose: a, isLoading: o = !1, children: s, variant: c = "default" }, l) {
	let u = n?.includes(".mp4"), [d, f] = R(!1);
	return o ? /* @__PURE__ */ z(Yy, { ref: l }) : d ? null : /* @__PURE__ */ B("div", {
		ref: l,
		className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
		children: [
			/* @__PURE__ */ z("div", {
				className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
				children: u ? /* @__PURE__ */ z("video", {
					src: n,
					autoPlay: !0,
					muted: !0,
					loop: !0,
					className: "h-full w-full rounded-lg object-cover"
				}) : /* @__PURE__ */ z("img", {
					src: n,
					alt: "",
					className: "h-full w-full rounded-lg object-cover"
				})
			}),
			/* @__PURE__ */ B("div", {
				className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
				children: [/* @__PURE__ */ B("div", {
					className: g("flex w-full flex-col gap-1", c === "default" ? "sm:max-w-lg" : void 0),
					children: [/* @__PURE__ */ z("h3", {
						className: "font-bold text-xl text-f1-foreground",
						children: e
					}), t && /* @__PURE__ */ z("p", {
						className: "text-base text-f1-foreground-secondary",
						children: t
					})]
				}), /* @__PURE__ */ B("div", {
					className: "flex gap-3",
					children: [
						r && /* @__PURE__ */ z(A, {
							onClick: r.onClick,
							label: r.label,
							variant: r.variant || "default",
							size: "md",
							icon: r.icon
						}),
						i && /* @__PURE__ */ z(A, {
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
			a && /* @__PURE__ */ z("div", {
				className: "absolute right-2 top-2 z-10",
				children: /* @__PURE__ */ z(A, {
					variant: "ghost",
					icon: cn,
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
}), Yy = kr(function(e, t) {
	return /* @__PURE__ */ B("div", {
		ref: t,
		className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		...e,
		children: [
			/* @__PURE__ */ z("div", {
				className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
				children: /* @__PURE__ */ z(k, { className: "h-full w-full rounded-lg" })
			}),
			/* @__PURE__ */ B("div", {
				className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
				children: [/* @__PURE__ */ B("div", {
					className: "flex w-full flex-col gap-1 sm:max-w-lg",
					children: [
						/* @__PURE__ */ z(k, { className: "h-7 w-3/4" }),
						/* @__PURE__ */ z(k, { className: "h-4 w-full" }),
						/* @__PURE__ */ z(k, { className: "h-4 w-2/3" })
					]
				}), /* @__PURE__ */ B("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ z(k, { className: "h-9 w-32" }), /* @__PURE__ */ z(k, { className: "h-9 w-24" })]
				})]
			}),
			/* @__PURE__ */ z("div", {
				className: "absolute right-2 top-2 z-10",
				children: /* @__PURE__ */ z(k, { className: "h-8 w-8 rounded-md" })
			})
		]
	});
}), Xy = a(Cr(Jy, Yy));
Xy.displayName = "BaseBanner";
//#endregion
//#region src/components/F0ButtonToggleGroup/index.ts
var Zy = a(d("F0ButtonToggleGroup", (e) => {
	let { items: t, size: n, multiple: r, required: i, value: a, onChange: o, variant: s, disabled: c, withBorder: l = !0, fullWidth: u = !1 } = e, [d, f] = R(a);
	I(() => {
		d !== a && f(a);
	}, [a]);
	let p = (e) => {
		i && (r && e.length === 0 || !e) || f(e);
	};
	I(() => {
		o?.(d);
	}, [d, r]);
	let m = Pr(() => t.map((e) => ({
		...e,
		disabled: c || e.disabled
	})), [t, c]), h = r ? d : [d];
	return /* @__PURE__ */ z(Tr, {
		...r ? {
			type: "multiple",
			value: d
		} : {
			type: "single",
			value: d
		},
		onValueChange: p,
		disabled: c,
		className: g("flex flex-wrap items-center justify-center gap-1", u && "w-full"),
		children: m.map((e) => /* @__PURE__ */ z(wr, {
			value: e.value,
			asChild: !0,
			className: g(u && "flex-1"),
			children: /* @__PURE__ */ z(ln, {
				...e,
				size: n,
				withBorder: l,
				variant: s,
				className: g(u && "w-full", e.className),
				selected: !!h?.includes(e.value),
				onSelectedChange: () => {}
			})
		}, e.value))
	});
})), Qy = [], $y = Qy, eb = /* @__PURE__ */ new Set(), tb = 0, nb = /* @__PURE__ */ new Set(), rb = /* @__PURE__ */ new Set(), ib = () => {
	for (let e of eb) e();
}, ab = () => {
	for (let e of rb) e();
}, ob = {
	subscribe(e) {
		return eb.add(e), () => {
			eb.delete(e);
		};
	},
	getSnapshot() {
		return $y;
	},
	getServerSnapshot() {
		return Qy;
	},
	addItem(e) {
		let t = $y.findIndex((t) => t.id === e.id);
		if (t !== -1) {
			let n = [...$y];
			n[t] = e, $y = n;
		} else $y = [...$y, e];
		ib();
	},
	removeItem(e) {
		$y.some((t) => t.id === e) && ($y = $y.filter((t) => t.id !== e), ib());
	},
	clear() {
		$y.length !== 0 && ($y = Qy, ib());
	},
	acquireRenderer() {
		tb += 1;
		let e = tb;
		return nb.add(e), ab(), {
			id: e,
			release() {
				nb.delete(e), ab();
			}
		};
	},
	getActiveRendererId() {
		let e = null;
		for (let t of nb) (e === null || t < e) && (e = t);
		return e;
	},
	subscribeRenderer(e) {
		return rb.add(e), () => {
			rb.delete(e);
		};
	},
	hasProvider() {
		return nb.size > 0;
	}
}, sb = 5e3, cb = 1e4, lb = (e) => {
	process.env.NODE_ENV !== "production" && !ob.hasProvider() && console.warn(`[f0] ${e} was called but no <F0Provider> is mounted, so the toast will not render. Make sure your app is wrapped in <F0Provider>.`);
}, ub = {
	open: (e) => {
		let t = e.id ?? pr();
		lb("toasts.open()");
		let n = e.actions != null, r = e.persistent === !0 || e.variant === "loading";
		return ob.addItem({
			duration: r ? void 0 : n ? cb : sb,
			...e,
			id: t,
			onClose: () => ob.removeItem(t)
		}), t;
	},
	close: (e) => {
		ob.removeItem(e);
	},
	closeAll: () => {
		ob.clear();
	}
}, db = 12, fb = 6, pb = ({ target: e, title: t, description: n, actionLabel: r, onAction: i, onClose: a, step: o, arrow: s = !0, side: c = "bottom", align: l = "center", sideOffset: d = s ? 8 : 4, container: f }) => {
	let p = u(), m = L(null), h = L(null), _ = jr(), v = `${_}-title`, y = `${_}-description`, b = Pr(() => ({ current: e }), [e]), x = L(o?.current);
	I(() => {
		x.current !== o?.current && (x.current = o?.current, m.current?.focus());
	}, [o?.current]);
	let S = !o || o.current >= o.total, C = r ?? (S ? p.coachmark.done : p.coachmark.next);
	return /* @__PURE__ */ B(sn, {
		open: !0,
		onOpenChange: (e) => {
			e || a();
		},
		children: [/* @__PURE__ */ z(nn, { virtualRef: b }), /* @__PURE__ */ B(en, {
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
			className: g("w-72 overflow-visible rounded-lg border-none p-4", "shadow-lg backdrop-blur-sm", "bg-f1-background-inverse text-f1-foreground-inverse", "dark:bg-f1-background-tertiary"),
			children: [/* @__PURE__ */ B("div", {
				className: "dark flex flex-col gap-3",
				children: [/* @__PURE__ */ B("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ B("div", {
						className: "flex flex-row items-start justify-between gap-2",
						children: [/* @__PURE__ */ z("p", {
							id: v,
							className: "font-semibold",
							children: t
						}), /* @__PURE__ */ z(O, {
							variant: "outline",
							icon: cn,
							size: "sm",
							hideLabel: !0,
							onClick: a,
							label: p.actions.close,
							className: "flex-shrink-0"
						})]
					}), n && /* @__PURE__ */ z("p", {
						id: y,
						className: "font-normal text-f1-foreground-inverse-secondary",
						children: n
					})]
				}), /* @__PURE__ */ B("div", {
					className: "flex flex-row items-center gap-3",
					children: [o && /* @__PURE__ */ B("p", {
						className: "text-f1-foreground-inverse-secondary",
						children: [
							o.current,
							"/",
							o.total
						]
					}), /* @__PURE__ */ z(O, {
						variant: "outline",
						label: C,
						onClick: i,
						className: "ml-auto"
					})]
				})]
			}), s && /* @__PURE__ */ z(an, {
				asChild: !0,
				width: db,
				height: fb,
				children: /* @__PURE__ */ z("svg", {
					viewBox: `0 0 ${db} ${fb}`,
					children: /* @__PURE__ */ z("path", {
						d: `M0 0L${db / 2} ${fb}L${db} 0Z`,
						className: "fill-f1-background-inverse dark:fill-f1-background-tertiary"
					})
				})
			})]
		})]
	});
};
pb.displayName = "F0Coachmark";
var mb = d("F0Coachmark", pb), hb = [], gb = hb, _b = /* @__PURE__ */ new Set(), vb = 0, yb = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), xb = () => {
	for (let e of _b) e();
}, Sb = () => {
	for (let e of bb) e();
}, Cb = {
	subscribe(e) {
		return _b.add(e), () => {
			_b.delete(e);
		};
	},
	getSnapshot() {
		return gb;
	},
	getServerSnapshot() {
		return hb;
	},
	addItem(e) {
		let t = gb.findIndex((t) => t.id === e.id);
		if (t !== -1) {
			let n = [...gb];
			n[t] = e, gb = n;
		} else gb = [...gb, e];
		xb();
	},
	removeItem(e) {
		gb.some((t) => t.id === e) && (gb = gb.filter((t) => t.id !== e), xb());
	},
	clear() {
		gb.length !== 0 && (gb = hb, xb());
	},
	acquireRenderer() {
		vb += 1;
		let e = vb;
		return yb.add(e), Sb(), {
			id: e,
			release() {
				yb.delete(e), Sb();
			}
		};
	},
	getActiveRendererId() {
		let e = null;
		for (let t of yb) (e === null || t < e) && (e = t);
		return e;
	},
	subscribeRenderer(e) {
		return bb.add(e), () => {
			bb.delete(e);
		};
	},
	hasProvider() {
		return yb.size > 0;
	}
}, wb = process.env.NODE_ENV !== "production", Tb = (e) => {
	if (typeof e != "string") return e.isConnected ? e : null;
	let t = document.querySelectorAll(e);
	return wb && t.length > 1 && console.warn(`[f0] coachmarks: the selector "${e}" matched ${t.length} elements. Anchoring to the first one — use a selector that matches exactly one.`), t[0] ?? null;
}, Eb = (e) => {
	let [t, n] = R(null), r = L(null);
	return I(() => {
		let t = (e) => {
			e !== r.current && (r.current = e, n(e));
		};
		if (e === void 0 || typeof document > "u") {
			t(null);
			return;
		}
		t(Tb(e)), wb && r.current === null && typeof e == "string" && console.warn(`[f0] coachmarks: no element matches the selector "${e}" yet. The coachmark will show as soon as one does.`);
		let i = new MutationObserver(() => t(Tb(e)));
		return i.observe(document.body, {
			childList: !0,
			subtree: !0
		}), () => i.disconnect();
	}, [e]), t;
}, Db = ({ item: e, container: t }) => {
	let [n, r] = R(0), i = Math.min(n, e.steps.length - 1), a = e.steps[i], o = i === e.steps.length - 1, s = Eb(a.targetElement), c = () => Cb.removeItem(e.id);
	return s ? /* @__PURE__ */ z(mb, {
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
}, Ob = ({ children: e, portalTarget: t = "#f0-overlay-root" }) => {
	let n = Fr(Cb.subscribe, Cb.getSnapshot, Cb.getServerSnapshot), r = L(null), i = Fr(Cb.subscribeRenderer, Cb.getActiveRendererId, () => null);
	I(() => {
		let { id: e, release: t } = Cb.acquireRenderer();
		return r.current = e, t;
	}, []);
	let a = i === r.current, [o, s] = R(null);
	I(() => {
		typeof document > "u" || s(document.querySelector(t));
	}, [t]);
	let c = n[0];
	return /* @__PURE__ */ B(Ir, { children: [a && c && /* @__PURE__ */ z(Db, {
		item: c,
		container: o
	}, c.id), e] });
};
//#endregion
export { zu as A, Bs as B, Hu as C, Bu as D, Fu as E, Cu as F, La as G, Ua as H, vu as I, wa as J, Pa as K, _u as L, Ru as M, ju as N, Iu as O, wu as P, gu as R, Wu as S, Pu as T, Ra as U, Ya as V, Ia as W, Ta as X, ja as Y, Qu as _, Zy as a, Gu as b, Uy as c, Ly as d, zy as f, Nd as g, Fd as h, ob as i, Vu as j, Lu as k, Hy as l, Pd as m, Cb as n, Xy as o, By as p, Ca as q, ub as r, qy as s, Ob as t, Ry as u, qu as v, Nu as w, Uu as x, Ku as y, ql as z };
