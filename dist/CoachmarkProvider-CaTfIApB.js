import { o as e, t } from "./rolldown-runtime-CEFd7nDs.js";
import { t as n } from "./clsx-rBDvwE6-.js";
import { t as r } from "./dist-CqnuTXEz.js";
import { t as i } from "./component-Lhh_08kH.js";
import { d as a, l as o, t as s, u as c } from "./OneEllipsis-DuhKMtYp.js";
import { D as l, f as u, ht as d, k as f, lt as p, s as m } from "./variants-D_OHTcOj.js";
import { n as h, t as g } from "./utils-CVzxZnoI.js";
import { $ as _, Fn as v, Gt as y, In as b, Lt as x, Rt as S, _ as C, ct as w, dn as T, et as E, ot as ee, st as te, tt as ne, wn as re } from "./OneCalendar-B6RjA05-.js";
import { $ as ie, A as ae, C as D, D as oe, Dn as se, E as ce, En as le, F as ue, G as de, I as fe, J as pe, K as me, Kn as he, L as ge, M as _e, Mn as ve, N as ye, O as be, P as xe, Q as Se, R as Ce, S as we, T as Te, Tn as Ee, U as De, W as Oe, X as ke, Y as Ae, Z as je, _ as Me, at as Ne, b as Pe, ct as Fe, dt as Ie, et as Le, ft as Re, g as ze, h as Be, hn as Ve, it as He, j as Ue, k as We, lt as Ge, m as Ke, mt as qe, nt as Je, ot as Ye, pt as Xe, q as Ze, rt as Qe, st as $e, tt as et, ut as tt, v as nt, w as rt, x as it, y as at, z as ot } from "./F0Form-BpfGE2QZ.js";
import { Bt as st, Gt as ct, It as lt, Kt as ut, Qt as dt, Ut as ft, Wt as pt, Xt as mt, Zt as ht } from "./F0AiFormRegistry-uihwd5kT.js";
import { P as gt, i as _t, r as vt, t as yt } from "./tooltip-BPSwDQpD.js";
import { a as bt, f as xt, i as St, l as O, r as k, u as Ct } from "./F0Button-B67qxFBP.js";
import { $ as wt, A as Tt, B as Et, Bt as Dt, C as Ot, D as kt, E as At, F as jt, G as Mt, H as Nt, Ht as Pt, I as Ft, J as It, L as Lt, Lt as Rt, M as zt, N as Bt, O as Vt, P as Ht, Q as Ut, R as Wt, S as Gt, T as Kt, U as qt, Ut as Jt, V as Yt, Vt as Xt, W as Zt, Wt as Qt, Z as $t, Zt as en, _ as tn, _t as nn, at as rn, b as an, ct as on, d as sn, dt as cn, et as ln, f as un, ft as dn, g as fn, h as pn, ht as mn, it as hn, j as gn, k as _n, l as vn, lt as yn, m as bn, mt as xn, nt as A, ot as Sn, p as Cn, pt as wn, q as Tn, rt as En, st as Dn, tt as j, u as On, ut as kn, v as An, w as jn, x as Mn, y as Nn, z as Pn } from "./F0CanvasPanel-CRBha7SV.js";
import { At as Fn, Dt as In, Mt as Ln, Ot as Rn, Tt as zn, _ as Bn, bt as Vn, f as Hn, j as Un, jt as Wn, m as Gn, p as Kn, st as qn, xt as Jn } from "./F0Checkbox-C-oCrD_5.js";
import { $ as Yn, I as Xn, J as Zn, L as Qn, Q as $n, R as er, X as tr, Y as nr, Z as rr, et as ir, tt as ar, z as or } from "./F0Card--Nu-0ZfW.js";
import { r as sr } from "./internal-67gawJxa.js";
import { i as cr, l as lr, n as ur, o as dr, r as fr, s as pr, t as mr } from "./popover-By8ytmVb.js";
import { t as hr } from "./Cross-BmL9HU4z.js";
import { s as gr, u as _r } from "./input-CAEigqto.js";
import { n as vr } from "./F0Link-DcIBxLD0.js";
import { i as yr, r as br } from "./internal-CEVMum7w.js";
import { x as xr } from "./AiChatTranslationsProvider-BeFAFSvz.js";
import { h as Sr, r as Cr } from "./F0Avatar-CyikaOUL.js";
import { n as wr } from "./RichText-CW-0xoDy.js";
import { i as Tr, r as Er } from "./dist-xxOxP0f7.js";
import { F0Alert as Dr } from "./F0Alert.js";
import * as M from "react";
import N, { PureComponent as Or, createContext as kr, forwardRef as Ar, useCallback as P, useContext as jr, useEffect as F, useId as Mr, useImperativeHandle as Nr, useLayoutEffect as Pr, useMemo as Fr, useRef as I, useState as L, useSyncExternalStore as Ir } from "react";
import { Fragment as Lr, jsx as R, jsxs as z } from "react/jsx-runtime";
import './CoachmarkProvider.css';//#region ../../node_modules/.pnpm/embla-carousel-autoplay@8.5.2_embla-carousel@8.5.2/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js
var Rr = {
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
function zr(e, t) {
	let n = e.scrollSnapList();
	return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function Br(e, t) {
	let n = e.rootNode();
	return t && t(n) || n;
}
function Vr(e = {}) {
	let t, n, r, i, a = null, o = 0, s = !1, c = !1, l = !1, u = !1;
	function d(a, o) {
		n = a;
		let { mergeOptions: s, optionsAtMedia: c } = o;
		if (t = c(s(s(Rr, Vr.globalOptions), e)), n.scrollSnapList().length <= 1) return;
		u = t.jump, r = !1, i = zr(n, t.delay);
		let { eventStore: l, ownerDocument: d } = n.internalEngine(), f = !!n.internalEngine().options.watchDrag, p = Br(n, t.rootNode);
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
Vr.globalOptions = void 0;
//#endregion
//#region ../../node_modules/.pnpm/wheel-gestures@2.2.48/node_modules/wheel-gestures/dist/wheel-gestures.esm.js
function Hr() {
	return Hr = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Hr.apply(this, arguments);
}
var Ur = .996, Wr = function(e, t) {
	return t === void 0 && (t = Ur), e * t / (1 - t);
};
function Gr(e) {
	return e[e.length - 1];
}
function Kr(e) {
	return e.reduce(function(e, t) {
		return e + t;
	}) / e.length;
}
var qr = function(e, t, n) {
	return Math.min(Math.max(t, e), n);
};
function Jr(e, t) {
	if (e.length !== t.length) throw Error("vectors must be same length");
	return e.map(function(e, n) {
		return e + t[n];
	});
}
function Yr(e) {
	return Math.max.apply(Math, e.map(Math.abs));
}
function Xr(e) {
	return Object.freeze(e), Object.values(e).forEach(function(e) {
		typeof e == "object" && e && !Object.isFrozen(e) && Xr(e);
	}), e;
}
function Zr() {
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
	return Xr({
		on: t,
		off: n,
		dispatch: r
	});
}
function Qr(e) {
	var t = [], n = function(n) {
		return n.addEventListener("wheel", e, { passive: !1 }), t.push(n), function() {
			return r(n);
		};
	}, r = function(n) {
		n.removeEventListener("wheel", e), t = t.filter(function(e) {
			return e !== n;
		});
	};
	return Xr({
		observe: n,
		unobserve: r,
		disconnect: function() {
			t.forEach(r);
		}
	});
}
var $r = [
	1,
	18,
	typeof window < "u" && window.innerHeight || 800
];
function ei(e) {
	var t = e.deltaX * $r[e.deltaMode], n = e.deltaY * $r[e.deltaMode], r = (e.deltaZ || 0) * $r[e.deltaMode];
	return {
		timeStamp: e.timeStamp,
		axisDelta: [
			t,
			n,
			r
		]
	};
}
var ti = [
	-1,
	-1,
	-1
];
function ni(e, t) {
	if (!t) return e;
	var n = t === !0 ? ti : t.map(function(e) {
		return e ? -1 : 1;
	});
	return Hr({}, e, { axisDelta: e.axisDelta.map(function(e, t) {
		return e * n[t];
	}) });
}
var ri = 700, ii = function(e) {
	return Hr({}, e, { axisDelta: e.axisDelta.map(function(e) {
		return qr(e, -ri, ri);
	}) });
}, ai = process.env.NODE_ENV !== "production", oi = .6, si = .96, ci = 2, li = 5, ui = /*#__PURE__*/ Xr({
	preventWheelAction: !0,
	reverseSign: [
		!0,
		!0,
		!1
	]
}), di = 400;
function fi() {
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
		willEndTimeout: di
	};
}
function pi(e) {
	e === void 0 && (e = {});
	var t = Zr(), n = t.on, r = t.off, i = t.dispatch, a = ui, o = fi(), s, c = !1, l, u = function(e) {
		Array.isArray(e) ? e.forEach(function(e) {
			return m(e);
		}) : m(e);
	}, d = function(e) {
		return e === void 0 && (e = {}), Object.values(e).some(function(e) {
			return e == null;
		}) ? (ai && console.error("updateOptions ignored! undefined & null options not allowed"), a) : a = Xr(Hr({}, ui, a, e));
	}, f = function(e) {
		var t = Hr({
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
				return Jr(t.axisMovement, t.axisVelocity.map(function(e) {
					return Wr(e);
				}));
			}
		}, e);
		i("wheel", Hr({}, t, { previous: l })), l = t;
	}, p = function(e, t) {
		var n = a.preventWheelAction, r = t[0], i = t[1], o = t[2];
		if (typeof n == "boolean") return n;
		switch (n) {
			case "x": return Math.abs(r) >= e;
			case "y": return Math.abs(i) >= e;
			case "z": return Math.abs(o) >= e;
			default: return ai && console.warn("unsupported preventWheelAction value: " + n, "warn"), !1;
		}
	}, m = function(e) {
		var t = ii(ni(ei(e), a.reverseSign)), n = t.axisDelta, r = t.timeStamp, i = Yr(n);
		if (e.preventDefault && p(i, n) && e.preventDefault(), o.isStarted ? o.isMomentum && i > Math.max(2, o.lastAbsDelta * 2) && (w(!0), S()) : S(), i === 0 && Object.is && Object.is(e.deltaX, -0)) {
			c = !0;
			return;
		}
		s = e, o.axisMovement = Jr(o.axisMovement, n), o.lastAbsDelta = i, o.scrollPointsToMerge.push({
			axisDelta: n,
			timeStamp: r
		}), h(), f({
			axisDelta: n,
			isStart: !o.isStartPublished
		}), o.isStartPublished = !0, C();
	}, h = function() {
		o.scrollPointsToMerge.length === ci ? (o.scrollPoints.unshift({
			axisDeltaSum: o.scrollPointsToMerge.map(function(e) {
				return e.axisDelta;
			}).reduce(Jr),
			timeStamp: Kr(o.scrollPointsToMerge.map(function(e) {
				return e.timeStamp;
			}))
		}), _(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || b()) : o.isStartPublished || g();
	}, g = function() {
		o.axisVelocity = Gr(o.scrollPointsToMerge).axisDelta.map(function(e) {
			return e / o.willEndTimeout;
		});
	}, _ = function() {
		var e = o.scrollPoints, t = e[0], n = e[1];
		if (!(!n || !t)) {
			var r = t.timeStamp - n.timeStamp;
			if (r <= 0) {
				ai && console.warn("invalid deltaTime");
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
		return e === 0 || e <= si && e >= oi;
	}, b = function() {
		if (o.accelerationFactors.length >= li) {
			if (c && (c = !1, Yr(o.axisVelocity) >= .2)) {
				x();
				return;
			}
			var e = o.accelerationFactors.slice(li * -1);
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
		o = fi(), o.isStarted = !0, o.startTime = Date.now(), l = void 0, c = !1;
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
	}, T = Qr(u), E = T.observe, ee = T.unobserve, te = T.disconnect;
	return d(e), Xr({
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
var mi = {
	active: !0,
	breakpoints: {},
	wheelDraggingClass: "is-wheel-dragging",
	forceWheelAxis: void 0,
	target: void 0
};
gi.globalOptions = void 0;
var hi = process.env.NODE_ENV !== "production";
function gi(e) {
	e === void 0 && (e = {});
	var t, n = function() {};
	function r(r, i) {
		var a = i.mergeOptions, o = i.optionsAtMedia;
		t = o(a(a(mi, gi.globalOptions), e));
		var s = r.internalEngine(), c = t.target ?? r.containerNode().parentNode, l = t.forceWheelAxis ?? s.options.axis, u = pi({
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
				return hi && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
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
function _i(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function vi(e) {
	return _i(e) || Array.isArray(e);
}
function yi() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function bi(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !vi(r) || !vi(i) ? r === i : bi(r, i);
	});
}
function xi(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function Si(e, t) {
	if (e.length !== t.length) return !1;
	let n = xi(e), r = xi(t);
	return n.every((e, t) => {
		let n = r[t];
		return bi(e, n);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel@8.6.0/node_modules/embla-carousel/esm/embla-carousel.esm.js
function Ci(e) {
	return typeof e == "number";
}
function wi(e) {
	return typeof e == "string";
}
function Ti(e) {
	return typeof e == "boolean";
}
function Ei(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function B(e) {
	return Math.abs(e);
}
function Di(e) {
	return Math.sign(e);
}
function Oi(e, t) {
	return B(e - t);
}
function ki(e, t) {
	return e === 0 || t === 0 || B(e) <= B(t) ? 0 : B(Oi(B(e), B(t)) / e);
}
function Ai(e) {
	return Math.round(e * 100) / 100;
}
function ji(e) {
	return Ii(e).map(Number);
}
function Mi(e) {
	return e[Ni(e)];
}
function Ni(e) {
	return Math.max(0, e.length - 1);
}
function Pi(e, t) {
	return t === Ni(e);
}
function Fi(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function Ii(e) {
	return Object.keys(e);
}
function Li(e, t) {
	return [e, t].reduce((e, t) => (Ii(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = Ei(r) && Ei(i) ? Li(r, i) : i;
	}), e), {});
}
function Ri(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function zi(e, t) {
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
		return wi(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function Bi() {
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
function Vi(e, t, n, r) {
	let i = Bi(), a = 1e3 / 60, o = null, s = 0, c = 0;
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
function Hi(e, t) {
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
function Ui(e = 0, t = 0) {
	let n = B(e - t);
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
function Wi(e, t, n) {
	let { constrain: r } = Ui(0, e), i = e + 1, a = o(t);
	function o(e) {
		return n ? B((i + e) % i) : r(e);
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
		return Wi(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function Gi(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, x = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], S = { passive: !1 }, C = Bi(), w = Bi(), T = Ui(50, 225).constrain(p.measure(20)), E = {
		mouse: 300,
		touch: 400
	}, ee = {
		mouse: 500,
		touch: 600
	}, te = m ? 43 : 25, ne = !1, re = 0, ie = 0, ae = !1, D = !1, oe = !1, se = !1;
	function ce(e) {
		if (!v) return;
		function n(t) {
			(Ti(v) || v(e, t)) && me(t);
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
		let n = d.add(Di(e) * -1), r = u.byDistance(e, !m).distance;
		return m || B(e) < T ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function me(e) {
		let t = Ri(e, r);
		se = t, oe = m && t && !e.buttons && ne, ne = Oi(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (de(e.target) || (ae = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), ue(), re = a.readPoint(e), ie = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function he(e) {
		if (!Ri(e, r) && e.touches.length >= 2) return ge(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = Oi(t, re), c = Oi(n, ie);
		if (!D && !se && (!e.cancelable || (D = o > c, !D))) return ge(e);
		let u = a.pointerMove(e);
		o > h && (oe = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function ge(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * fe(), r = pe(b(n), t), i = ki(n, r), o = te - 10 * i, s = _ + i / 50;
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
function Ki(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (Ri(n, t) ? n : n.touches[0])[i];
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
		return o && !s && B(c) > .1 ? c : 0;
	}
	return {
		pointerDown: o,
		pointerMove: s,
		pointerUp: c,
		readPoint: a
	};
}
function qi() {
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
function Ji(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function Yi(e, t, n, r, i, a, o) {
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
				if (B(f(n ? e : r[o]) - s) >= .5) {
					i.reInit(), t.emit("resize");
					break;
				}
			}
		}
		c = new ResizeObserver((e) => {
			(Ti(a) || a(i, e)) && o(e);
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
function Xi(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = Di(a), d = u, x;
	}
	function p() {
		return B(r.get() - t.get()) < .001;
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
function Zi(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = Ui(.1, .99), c = !1;
	function l() {
		return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
	}
	function u(i) {
		if (!l()) return;
		let c = B(e[e.reachedMin(t.get()) ? "min" : "max"] - t.get()), u = n.get() - t.get(), d = s.constrain(c / o);
		n.subtract(u * d), !i && B(u) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
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
function Qi(e, t, n, r, i) {
	let a = Ui(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return Oi(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = Mi(o);
		return Ui(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = Pi(n, t);
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
function $i(e, t, n) {
	let r = t[0];
	return { limit: Ui(n ? r - e : Mi(t), r) };
}
function ea(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = Ui(t.min + i, t.max + i);
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
function ta(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function na(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => Mi(e)[o] - e[0][a]).map(B);
	}
	function f() {
		return r.map((e) => n[a] - e[a]).map((e) => -B(e));
	}
	function p() {
		return s(l).map((e) => e[0]).map((e, t) => e + c[t]);
	}
	return {
		snaps: l,
		snapsAligned: u
	};
}
function ra(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = Pi(n, t);
			return r ? Fi(Mi(n[0]) + 1) : i ? Fi(Ni(a) - Mi(n)[0] + 1, Mi(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function ia(e, t, n, r, i) {
	let { reachedAny: a, removeOffset: o, constrain: s } = r;
	function c(e) {
		return e.concat().sort((e, t) => B(e) - B(t))[0];
	}
	function l(n) {
		let r = e ? o(n) : s(n), { index: i } = t.map((e, t) => ({
			diff: u(e - r, 0),
			index: t
		})).sort((e, t) => B(e.diff) - B(t.diff))[0];
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
		let a = i.filter((e) => Di(e) === r);
		return a.length ? c(a) : Mi(i) - n;
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
function aa(e, t, n, r, i, a, o) {
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
function oa(e, t, n, r, i, a, o, s) {
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
			Ci(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(Ti(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function sa(e) {
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
		return Ci(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function ca(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = Ai(e.direction(t));
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
function la(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = ji(i), d = ji(i).reverse(), f = _().concat(v());
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
				slideLocation: sa(-1),
				translate: ca(e, c[t]),
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
function ua(e, t, n) {
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
			i || (Ti(n) || n(a, e)) && o(e);
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
function da(e, t, n, r) {
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
		return Ii(i).reduce((t, n) => {
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
function fa(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return B(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(Mi(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = Pi(n, t);
			return r ? f[t] + u : i ? f[t] + d : n[t + 1][s] - e[s];
		}).map(B);
	}
	return {
		slideSizes: f,
		slideSizesWithGaps: p,
		startGap: u,
		endGap: d
	};
}
function pa(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = Ci(n);
	function p(e, t) {
		return ji(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? ji(e).reduce((n, f, p) => {
			let m = Mi(n) || 0, h = m === 0, g = f === Ni(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = B(v - (!r && g ? d(s) : 0) - (_ + y));
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
function ma(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = qi(), w = C.measure(t), T = n.map(C.measure), E = Hi(c, l), ee = E.measureSize(w), te = Ji(ee), ne = zi(s, ee), re = !d && !!v, { slideSizes: ie, slideSizesWithGaps: ae, startGap: D, endGap: oe } = fa(E, w, T, n, d || !!v, i), se = pa(E, ee, g, d, w, T, D, oe, 2), { snaps: ce, snapsAligned: le } = na(E, ne, w, T, se), ue = -Mi(ce) + Mi(ae), { snapsContained: de, scrollContainLimit: fe } = Qi(ee, ue, le, v, 2), pe = re ? de : le, { limit: me } = $i(ue, pe, d), he = Wi(Ni(pe), u, d), ge = he.clone(), _e = ji(n), ve = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, ye = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, be = Vi(r, i, () => ve(Fe), (e) => ye(Fe, e)), xe = .68, Se = pe[he.get()], Ce = sa(Se), we = sa(Se), Te = sa(Se), Ee = sa(Se), De = Xi(Ce, Te, we, Ee, f, xe), Oe = ia(d, pe, ue, me, Ee), ke = aa(be, he, ge, De, Oe, Ee, o), Ae = ta(me), je = Bi(), Me = da(t, n, o, h), { slideRegistry: Ne } = ra(re, v, pe, fe, se, _e), Pe = oa(e, n, Ne, ke, De, je, o, S), Fe = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: be,
		axis: E,
		dragHandler: Gi(E, e, r, i, Ee, Ki(E, i), Ce, be, ke, De, Oe, he, o, te, p, m, _, xe, x),
		eventStore: je,
		percentOfView: te,
		index: he,
		indexPrevious: ge,
		limit: me,
		location: Ce,
		offsetLocation: Te,
		previousLocation: we,
		options: a,
		resizeHandler: Yi(t, o, i, n, E, y, C),
		scrollBody: De,
		scrollBounds: Zi(me, Te, Ee, De, te),
		scrollLooper: ea(ue, me, Te, [
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
		slideLooper: la(E, ee, ue, ie, ae, ce, pe, Te, n),
		slideFocus: Pe,
		slidesHandler: ua(t, o, b),
		slidesInView: Me,
		slideIndexes: _e,
		slideRegistry: Ne,
		slidesToScroll: se,
		target: Ee,
		translate: ca(E, t)
	};
	return Fe;
}
function ha() {
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
var ga = {
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
function _a(e) {
	function t(e, t) {
		return Li(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, Ii(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => Ii(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function va(e) {
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
function ya(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = _a(i), o = va(a), s = Bi(), c = ha(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = ee, g = !1, _, v = l(ga, ya.globalOptions), y = l(v), b = [], x, S, C;
	function w() {
		let { container: t, slides: n } = y;
		S = (wi(t) ? e.querySelector(t) : t) || e.children[0];
		let r = wi(n) ? S.querySelectorAll(n) : n;
		C = [].slice.call(r || S.children);
	}
	function T(t) {
		let n = ma(e, S, C, r, i, t, c);
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
ya.globalOptions = void 0;
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel-react@8.6.0_react@18.3.1/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
function ba(e = {}, t = []) {
	let n = I(e), r = I(t), [i, a] = L(), [o, s] = L(), c = P(() => {
		i && i.reInit(n.current, r.current);
	}, [i]);
	return F(() => {
		bi(n.current, e) || (n.current = e, c());
	}, [e, c]), F(() => {
		Si(r.current, t) || (r.current = t, c());
	}, [t, c]), F(() => {
		if (yi() && o) {
			ya.globalOptions = ba.globalOptions;
			let e = ya(o, n.current, r.current);
			return a(e), () => e.destroy();
		}
		a(void 0);
	}, [o, a]), [s, i];
}
ba.globalOptions = void 0;
//#endregion
//#region src/ui/carousel.tsx
var xa = g("-m-7 h-[calc(100%_+_56px)] w-[calc(100%_+_56px)] p-7", "[mask-image:linear-gradient(to_right,transparent_0px,transparent_14px,black_28px,black_calc(100%_-_28px),transparent_calc(100%_-_14px),transparent_100%)]", "[-webkit-mask-image:linear-gradient(to_right,transparent_0px,transparent_14px,black_28px,black_calc(100%_-_28px),transparent_calc(100%_-_14px),transparent_100%)]"), Sa = M.createContext(null);
function Ca() {
	let e = M.useContext(Sa);
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
var wa = M.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: n, plugins: r, className: i, children: a, ...o }, s) => {
	let [c, l] = ba({
		...t,
		axis: e === "horizontal" ? "x" : "y"
	}, r), [u, d] = M.useState(!1), [f, p] = M.useState(!1), m = M.useCallback((e) => {
		e && (d(e.canScrollPrev()), p(e.canScrollNext()));
	}, []), h = M.useCallback(() => {
		l?.scrollPrev();
	}, [l]), _ = M.useCallback(() => {
		l?.scrollNext();
	}, [l]), v = M.useCallback((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), h()) : e.key === "ArrowRight" && (e.preventDefault(), _());
	}, [h, _]);
	return M.useEffect(() => {
		!l || !n || n(l);
	}, [l, n]), M.useEffect(() => {
		if (l) return m(l), l.on("reInit", m), l.on("select", m), () => {
			l?.off("select", m);
		};
	}, [l, m]), /* @__PURE__ */ R(Sa.Provider, {
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
		children: /* @__PURE__ */ R("div", {
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
wa.displayName = "Carousel";
var Ta = M.forwardRef(({ className: e, ...t }, n) => {
	let { carouselRef: r, orientation: i } = Ca();
	return /* @__PURE__ */ R("div", {
		ref: r,
		className: g("overflow-hidden", xa, "[scrollbar-width:none] [-ms-overflow-style:none]"),
		children: /* @__PURE__ */ R("div", {
			ref: n,
			className: g("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
			...t
		})
	});
});
Ta.displayName = "CarouselContent";
var Ea = M.forwardRef(({ className: e, ...t }, n) => {
	let { orientation: r } = Ca();
	return /* @__PURE__ */ R("div", {
		ref: n,
		role: "group",
		"aria-roledescription": "slide",
		className: g("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e),
		...t
	});
});
Ea.displayName = "CarouselItem";
var Da = M.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
	let { orientation: i, scrollPrev: a, canScrollPrev: o } = Ca();
	return /* @__PURE__ */ R("div", {
		className: g("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", i === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
		children: /* @__PURE__ */ R(St, {
			compact: !0,
			ref: r,
			size: "sm",
			variant: t,
			className: g("absolute opacity-100 transition-all", e),
			disabled: !o,
			onClick: a,
			...n,
			label: "Previous",
			icon: b,
			hideLabel: !0
		})
	});
});
Da.displayName = "CarouselPrevious";
var Oa = M.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
	let { orientation: i, scrollNext: a, canScrollNext: o } = Ca();
	return /* @__PURE__ */ R("div", {
		className: g("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", i === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
		children: /* @__PURE__ */ R(St, {
			ref: r,
			size: "sm",
			variant: t,
			compact: !0,
			className: g("absolute opacity-100 transition-all", e),
			disabled: !o,
			onClick: a,
			...n,
			label: "Next",
			icon: en,
			hideLabel: !0
		})
	});
});
Oa.displayName = "CarouselNext";
var ka = M.forwardRef(({ ...e }, t) => {
	let { api: n } = Ca(), [, r] = M.useState(!1), i = M.useRef(null), a = M.useCallback(() => {
		r((e) => !e);
	}, []);
	M.useEffect(() => {
		if (n) return n.on("select", a), n.on("reInit", a), () => {
			n.off("select", a), n.off("reInit", a);
		};
	}, [n, a]);
	let o = n?.scrollSnapList().length || 0, s = n?.selectedScrollSnap() || 0;
	if (M.useEffect(() => {
		if (!i.current) return;
		let e = i.current, t = s * 16 - e.clientWidth / 2 + 8;
		e.scrollTo({
			left: t,
			behavior: "smooth"
		});
	}, [s]), M.useEffect(() => {
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
	return /* @__PURE__ */ R("div", {
		ref: t,
		className: g("flex justify-center", e.className),
		children: /* @__PURE__ */ R("div", {
			className: "relative overflow-hidden",
			style: { width: `${u}px` },
			children: /* @__PURE__ */ R("div", {
				ref: i,
				className: "flex w-full gap-0 overflow-x-scroll [overscroll-behavior:none] [scrollbar-width:none]",
				tabIndex: 0,
				"aria-label": "Carousel pagination",
				onKeyDown: (e) => {
					e.key === "ArrowLeft" ? (e.preventDefault(), n?.scrollPrev()) : e.key === "ArrowRight" && (e.preventDefault(), n?.scrollNext());
				},
				children: l.map((e) => /* @__PURE__ */ R("button", {
					className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
					"aria-label": `Go to slide ${e + 1}`,
					"aria-current": e === s ? "true" : void 0,
					onClick: () => n?.scrollTo(e),
					tabIndex: -1,
					children: /* @__PURE__ */ R("div", { className: g("h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]", e === s && "rounded-[3px] opacity-100 group-hover/dot:opacity-100", d(e)) })
				}, e))
			})
		})
	});
});
ka.displayName = "CarouselDots";
var Aa = (e) => e?.containerNode()?.childElementCount ?? 0, ja = (e) => {
	let { api: t, canScrollNext: n, scrollNext: r } = Ca(), i = e?.hasMore ?? !1, a = e?.isLoading ?? !1, o = e?.onLoadMore, s = M.useRef({
		hasMore: i,
		isLoading: a,
		onLoadMore: o
	});
	s.current = {
		hasMore: i,
		isLoading: a,
		onLoadMore: o
	}, M.useEffect(() => {
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
	let [c, l] = M.useState(!1), u = M.useRef(a), d = M.useRef(0);
	return M.useEffect(() => {
		let e = u.current && !a;
		if (u.current = a, c) {
			if (n) {
				l(!1), r();
				return;
			}
			e && Aa(t) <= d.current && l(!1);
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
			i && (d.current = Aa(t), l(!0), a || o?.());
		}
	};
}, Ma = M.forwardRef(({ className: e, labels: t, showDots: n = !0, paging: r, ...i }, a) => {
	let { scrollPrev: o, canScrollPrev: s } = Ca(), { canGoNext: c, goNext: l, isAwaitingPage: u } = ja(r);
	return /* @__PURE__ */ z("div", {
		ref: a,
		className: g("flex flex-row items-center justify-between gap-2 pt-4", e),
		...i,
		children: [
			/* @__PURE__ */ R(St, {
				size: "md",
				variant: "outline",
				icon: v,
				label: t?.previous ?? "Previous",
				hideLabel: !0,
				disabled: !s,
				onClick: o
			}),
			n ? /* @__PURE__ */ R(ka, { className: "grow" }) : null,
			/* @__PURE__ */ R(St, {
				size: "md",
				variant: "outline",
				icon: Wn,
				label: t?.next ?? "Next",
				hideLabel: !0,
				loading: u,
				disabled: !c,
				onClick: l
			})
		]
	});
});
Ma.displayName = "CarouselControls";
var Na = ({ children: e }) => {
	let t = I(null), [n, r] = L(!0), [i, a] = L(!1);
	Pr(() => {
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
	return l = i && n ? "linear-gradient(to right, transparent 0px, transparent 28px, black 56px, black calc(100% - 84px), transparent calc(100% - 56px), transparent 100%)" : i && !n ? "linear-gradient(to right, transparent 0px, transparent 28px, black 56px, black 100%)" : !i && n ? "linear-gradient(to right, black 0px, black calc(100% - 84px), transparent calc(100% - 56px), transparent 100%)" : "none", /* @__PURE__ */ z("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ R("div", {
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
				children: Array.isArray(e) ? e.map((e, t) => /* @__PURE__ */ R("div", {
					className: "flex-shrink-0",
					style: {
						scrollSnapAlign: "start",
						scrollSnapStop: "always",
						scrollMarginLeft: "44px"
					},
					children: e
				}, t)) : e && /* @__PURE__ */ R("div", {
					className: "flex-shrink-0",
					style: {
						scrollSnapAlign: "start",
						scrollSnapStop: "always",
						scrollMarginLeft: "44px"
					},
					children: e
				})
			}),
			i && /* @__PURE__ */ R(St, {
				size: "lg",
				compact: !0,
				variant: "outline",
				className: g("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
				onClick: s,
				icon: v,
				label: "Previous",
				hideLabel: !0
			}),
			n && /* @__PURE__ */ R(St, {
				size: "lg",
				variant: "outline",
				compact: !0,
				className: g("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
				onClick: o,
				icon: Wn,
				label: "Next",
				hideLabel: !0
			})
		]
	});
}, Pa = r({
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
function Fa(e, t, n) {
	if (n) {
		let n = (e || 1) / 2;
		return t ? `peek${n}` : n;
	}
	return t ? `peek${e || 1}` : e || 1;
}
var Ia = a(d("Carousel", ({ children: e, columns: t, showArrows: n = !0, showDots: r = !0, arrowsPlacement: i = "overlay", arrowLabels: a, paging: o, autoplay: s = !1, delay: c = 3e3, showPeek: l = !1, doubleColumns: u }) => {
	let d = N.Children.toArray(e), f = n && i === "bottom", p = N.useRef(s ? Vr({
		delay: c,
		stopOnInteraction: !0
	}) : void 0);
	return t ? /* @__PURE__ */ R(wa, {
		className: "flex w-full flex-col gap-3 @container",
		opts: {
			align: l ? "center" : "start",
			slidesToScroll: "auto",
			duration: 20,
			containScroll: !1
		},
		plugins: [p.current, gi()].filter(Boolean),
		onMouseEnter: s ? () => {
			p.current && p.current.stop();
		} : void 0,
		onMouseLeave: s ? () => {
			p.current && p.current.play();
		} : void 0,
		children: /* @__PURE__ */ z("div", {
			className: g("flex flex-col", !f && "gap-5"),
			children: [/* @__PURE__ */ z("div", {
				className: "relative",
				children: [/* @__PURE__ */ R(Ta, { children: N.Children.map(d, (e, n) => {
					let r = u?.find((e) => e.index === n);
					return /* @__PURE__ */ R(Ea, {
						className: Pa({
							default: Fa(t.default, l),
							xs: Fa(t.xs, l, r?.sizes?.includes("xs")),
							sm: Fa(t.sm, l, r?.sizes?.includes("sm")),
							md: Fa(t.md, l, r?.sizes?.includes("md")),
							lg: Fa(t.lg, l, r?.sizes?.includes("lg")),
							peek: l
						}),
						children: e
					}, n);
				}) }), n && !f && /* @__PURE__ */ z(Lr, { children: [/* @__PURE__ */ R(Da, { label: a?.previous ?? "Previous" }), /* @__PURE__ */ R(Oa, { label: a?.next ?? "Next" })] })]
			}), f ? /* @__PURE__ */ R(Ma, {
				labels: a,
				showDots: r,
				paging: o
			}) : r && /* @__PURE__ */ R(ka, {})]
		})
	}) : /* @__PURE__ */ R(Na, { children: e });
})), La = kr({
	enabled: !1,
	enable: () => null,
	disable: () => null,
	toggle: () => null
}), Ra = ({ initiallyEnabled: e = !1, children: t }) => {
	let [n, r] = L(e), i = P(() => {
		r(!0);
	}, []), a = P(() => r(!1), []), o = P(() => r((e) => !e), []);
	return /* @__PURE__ */ R(La.Provider, {
		value: {
			enable: i,
			disable: a,
			toggle: o,
			enabled: n
		},
		children: t
	});
}, za = () => {
	let e = jr(La);
	if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
	return e;
}, Ba = ({ children: e }) => {
	let { enabled: t } = za();
	return /* @__PURE__ */ R("div", {
		className: g("inline-flex ring-1 ring-inset ring-transparent transition-all duration-150", t && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"),
		"aria-hidden": t,
		children: /* @__PURE__ */ R(f.div, {
			className: "h-full w-full",
			animate: {
				opacity: +!t,
				scale: t ? .95 : 1
			},
			transition: { duration: .15 },
			children: e
		})
	});
}, Va = () => /* @__PURE__ */ R("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Ha = 480, Ua = (e) => {
	let [t, n] = L(!1);
	return F(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > "u") return;
		let r = () => n(t.clientWidth >= Ha);
		r();
		let i = new ResizeObserver(r);
		return i.observe(t), () => i.disconnect();
	}, [e]), t;
}, Wa = N.createContext(!1), Ga = () => N.useContext(Wa), Ka = g("-mx-1.5 inline-flex min-w-0 items-center gap-1 rounded-sm px-1.5 py-0.5", "border-none bg-transparent text-left no-underline", "text-f1-foreground", "cursor-pointer transition-colors hover:bg-f1-background-secondary-hover", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"), qa = ({ title: e, link: t, isWide: n }) => {
	let r = g("truncate", n && "text-lg font-semibold");
	if (!t) return /* @__PURE__ */ R(ir, {
		className: r,
		children: e
	});
	let i = /* @__PURE__ */ z(Lr, { children: [/* @__PURE__ */ R(ir, {
		className: r,
		children: e
	}), /* @__PURE__ */ R(l, {
		size: "sm",
		icon: t.icon ?? Wn
	})] }), a = t.url ? /* @__PURE__ */ R(Ct, {
		href: t.url,
		onClick: t.onClick,
		"aria-label": t.title,
		className: Ka,
		...xt(t.url) ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children: i
	}) : /* @__PURE__ */ R("button", {
		type: "button",
		onClick: t.onClick,
		"aria-label": t.title,
		className: Ka,
		children: i
	});
	return /* @__PURE__ */ R(m, {
		label: t.title,
		children: a
	});
}, Ja = Ar(function({ header: e, children: t, action: n, footerClassName: r, summaries: i, alert: a, status: o, fullHeight: s = !1, actions: c, headerControls: d, AIButton: f, draggable: p = !1, onDragStart: h, onDragEnd: _, isDragging: v = !1, selected: y = !1 }, b) {
	let x = I(null), S = gt(b, x), C = Ua(x);
	F(() => {
		if (!v || !_) return;
		let e = () => _();
		return document.addEventListener("mouseup", e), () => document.removeEventListener("mouseup", e);
	}, [v, _]);
	let w = u(), { enabled: T, toggle: E } = za();
	return F(() => {
		if (a && o) throw Error("You cannot pass both alert and status at the same time to this component");
	}, [a, o]), /* @__PURE__ */ R(Wa.Provider, {
		value: C,
		children: /* @__PURE__ */ z(Zn, {
			className: g(s ? "h-full" : "", "relative flex gap-3 border-f1-border-secondary", p && "hover:border-f1-border-hover", y && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", v && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
			ref: S,
			children: [
				e && /* @__PURE__ */ R($n, {
					className: "-mr-1 -mt-1",
					children: /* @__PURE__ */ z("div", {
						className: "flex w-full flex-1 flex-col gap-4",
						children: [/* @__PURE__ */ z("div", {
							className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2",
							children: [
								p && /* @__PURE__ */ R("div", {
									className: "-ml-1 flex h-6 w-6 shrink-0 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
									onMouseDown: h,
									"data-gs-handle": "true",
									children: /* @__PURE__ */ R(l, {
										icon: ut,
										size: "xs"
									})
								}),
								/* @__PURE__ */ z("div", {
									className: "flex min-h-6 min-w-0 grow flex-row items-center gap-1",
									children: [
										e.title && /* @__PURE__ */ R(qa, {
											title: e.title,
											link: e.link,
											isWide: C
										}),
										e.subtitle && /* @__PURE__ */ z("div", {
											className: "flex flex-row items-center gap-1",
											children: [/* @__PURE__ */ R(Va, {}), /* @__PURE__ */ R(Yn, {
												className: "truncate",
												children: e.subtitle
											})]
										}),
										e.info && /* @__PURE__ */ R(m, {
											label: e.info,
											children: /* @__PURE__ */ R(l, {
												icon: Rn,
												size: "sm",
												className: "text-f1-foreground-secondary"
											})
										}),
										e.count && /* @__PURE__ */ R("div", {
											className: "ml-0.5",
											children: /* @__PURE__ */ R(bt, { value: e.count })
										})
									]
								}),
								/* @__PURE__ */ z("div", {
									className: "flex flex-row items-center gap-3",
									children: [
										a && /* @__PURE__ */ R(ar, {
											text: a,
											level: "critical"
										}),
										o && /* @__PURE__ */ R(zn, {
											text: o.text,
											variant: o.variant
										}),
										d,
										f && /* @__PURE__ */ R(xn, {
											size: "sm",
											label: w.ai.ask,
											onClick: f,
											icon: mn
										}),
										c && /* @__PURE__ */ R(Jn, {
											items: c,
											align: "end",
											children: /* @__PURE__ */ R(k, {
												icon: Fn,
												label: "Actions",
												variant: "ghost",
												size: "sm",
												hideLabel: !0
											})
										})
									]
								})
							]
						}), e.comment && /* @__PURE__ */ z("div", {
							className: "flex flex-row items-center gap-3 overflow-visible",
							children: [/* @__PURE__ */ R(Ba, { children: /* @__PURE__ */ R(nr, { children: e.comment }) }), !!e.canBeBlurred && /* @__PURE__ */ R("span", { children: /* @__PURE__ */ R(k, {
								icon: T ? yr : br,
								hideLabel: !0,
								label: "hide/show",
								variant: "outline",
								onClick: E,
								size: "sm"
							}) })]
						})]
					})
				}),
				/* @__PURE__ */ z(tr, {
					className: "flex h-full flex-col gap-4",
					children: [i && /* @__PURE__ */ R("div", {
						className: "flex flex-row",
						children: i.map((e, t) => /* @__PURE__ */ z("div", {
							className: "grow",
							children: [/* @__PURE__ */ R("div", {
								className: "mb-0.5 text-sm text-f1-foreground-secondary",
								children: e.label
							}), /* @__PURE__ */ z("div", {
								className: "flex flex-row items-end gap-0.5 text-2xl font-semibold",
								children: [
									!!e.prefixUnit && /* @__PURE__ */ R("div", {
										className: "text-lg font-medium",
										children: e.prefixUnit
									}),
									e.value,
									!!e.postfixUnit && /* @__PURE__ */ R("div", {
										className: "text-lg font-medium",
										children: e.postfixUnit
									})
								]
							})]
						}, t))
					}), N.Children.toArray(t).filter((e) => !!e && !(N.isValidElement(e) && e.type === N.Fragment && N.Children.count(e.props.children) === 0)).map((e, t) => /* @__PURE__ */ z(N.Fragment, { children: [t > 0 && /* @__PURE__ */ R(he, { bare: !0 }), e] }, t))]
				}),
				n && /* @__PURE__ */ R(rr, {
					className: g(r),
					children: /* @__PURE__ */ R(k, {
						variant: C ? "outline" : "neutral",
						size: C ? "md" : "sm",
						...n
					})
				})
			]
		})
	});
}), Ya = r({ variants: { height: {
	sm: "h-36",
	md: "h-48",
	lg: "h-60"
} } }), Xa = Ar(function({ header: e, height: t }, n) {
	return /* @__PURE__ */ z(Zn, {
		className: g("flex gap-4 border-f1-border-secondary", t === "full" && "h-full"),
		ref: n,
		"aria-live": "polite",
		"aria-busy": !0,
		children: [/* @__PURE__ */ R($n, {
			className: "-mr-1 -mt-1",
			children: /* @__PURE__ */ z("div", {
				className: "flex h-6 w-full flex-row items-center gap-1.5",
				"aria-hidden": !0,
				children: [e?.title ? /* @__PURE__ */ R(ir, { children: e.title }) : /* @__PURE__ */ R(O, { className: "h-4 w-full max-w-16" }), e?.subtitle && /* @__PURE__ */ R(Yn, { children: e.subtitle })]
			})
		}), /* @__PURE__ */ R(tr, {
			"aria-hidden": !0,
			className: g(t !== "full" && Ya({ height: t })),
			children: [...[
				,
				,
				,
				,
			]].map((e, t) => /* @__PURE__ */ R(O, { className: `mb-1 h-6 ${[
				"w-full",
				"w-1/2",
				"w-3/4",
				"w-1/4"
			][t]}` }, t))
		})]
	});
}), Za = a(d("Widget", Vn(Ja, Xa))), V = /* @__PURE__ */ e(T()), Qa = /* @__PURE__ */ e(y()), H = /* @__PURE__ */ e(dn()), $a = [
	"points",
	"className",
	"baseLinePoints",
	"connectNulls"
];
function eo() {
	return eo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, eo.apply(this, arguments);
}
function to(e, t) {
	if (e == null) return {};
	var n = no(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function no(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function ro(e) {
	return so(e) || oo(e) || ao(e) || io();
}
function io() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ao(e, t) {
	if (e) {
		if (typeof e == "string") return co(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return co(e, t);
	}
}
function oo(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function so(e) {
	if (Array.isArray(e)) return co(e);
}
function co(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var lo = function(e) {
	return e && e.x === +e.x && e.y === +e.y;
}, uo = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [[]];
	return e.forEach(function(e) {
		lo(e) ? t[t.length - 1].push(e) : t[t.length - 1].length > 0 && t.push([]);
	}), lo(e[0]) && t[t.length - 1].push(e[0]), t[t.length - 1].length <= 0 && (t = t.slice(0, -1)), t;
}, fo = function(e, t) {
	var n = uo(e);
	t && (n = [n.reduce(function(e, t) {
		return [].concat(ro(e), ro(t));
	}, [])]);
	var r = n.map(function(e) {
		return e.reduce(function(e, t, n) {
			return `${e}${n === 0 ? "M" : "L"}${t.x},${t.y}`;
		}, "");
	}).join("");
	return n.length === 1 ? `${r}Z` : r;
}, po = function(e, t, n) {
	var r = fo(e, n);
	return `${r.slice(-1) === "Z" ? r.slice(0, -1) : r}L${fo(t.reverse(), n).slice(1)}`;
}, mo = function(e) {
	var t = e.points, r = e.className, i = e.baseLinePoints, a = e.connectNulls, o = to(e, $a);
	if (!t || !t.length) return null;
	var s = n("recharts-polygon", r);
	if (i && i.length) {
		var c = o.stroke && o.stroke !== "none", l = po(t, i, a);
		return /*#__PURE__*/ N.createElement("g", { className: s }, /*#__PURE__*/ N.createElement("path", eo({}, A(o, !0), {
			fill: l.slice(-1) === "Z" ? o.fill : "none",
			stroke: "none",
			d: l
		})), c ? /*#__PURE__*/ N.createElement("path", eo({}, A(o, !0), {
			fill: "none",
			d: fo(t, a)
		})) : null, c ? /*#__PURE__*/ N.createElement("path", eo({}, A(o, !0), {
			fill: "none",
			d: fo(i, a)
		})) : null);
	}
	var u = fo(t, a);
	return /*#__PURE__*/ N.createElement("path", eo({}, A(o, !0), {
		fill: u.slice(-1) === "Z" ? o.fill : "none",
		className: s,
		d: u
	}));
}, ho = [
	"cx",
	"cy",
	"innerRadius",
	"outerRadius",
	"gridType",
	"radialLines"
];
function go(e) {
	"@babel/helpers - typeof";
	return go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, go(e);
}
function _o(e, t) {
	if (e == null) return {};
	var n = vo(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function vo(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function yo() {
	return yo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, yo.apply(this, arguments);
}
function bo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function xo(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? bo(Object(n), !0).forEach(function(t) {
			So(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function So(e, t, n) {
	return t = Co(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Co(e) {
	var t = wo(e, "string");
	return go(t) == "symbol" ? t : t + "";
}
function wo(e, t) {
	if (go(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (go(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var To = function(e, t, n, r) {
	var i = "";
	return r.forEach(function(r, a) {
		var o = Ht(t, n, e, r);
		i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
	}), i += "Z", i;
}, Eo = function(e) {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.polarAngles, o = e.radialLines;
	if (!a || !a.length || !o) return null;
	var s = xo({ stroke: "#ccc" }, A(e, !1));
	return /*#__PURE__*/ N.createElement("g", { className: "recharts-polar-grid-angle" }, a.map(function(e) {
		var a = Ht(t, n, r, e), o = Ht(t, n, i, e);
		return /*#__PURE__*/ N.createElement("line", yo({}, s, {
			key: `line-${e}`,
			x1: a.x,
			y1: a.y,
			x2: o.x,
			y2: o.y
		}));
	}));
}, Do = function(e) {
	var t = e.cx, r = e.cy, i = e.radius, a = e.index, o = xo(xo({ stroke: "#ccc" }, A(e, !1)), {}, { fill: "none" });
	return /*#__PURE__*/ N.createElement("circle", yo({}, o, {
		className: n("recharts-polar-grid-concentric-circle", e.className),
		key: `circle-${a}`,
		cx: t,
		cy: r,
		r: i
	}));
}, Oo = function(e) {
	var t = e.radius, r = e.index, i = xo(xo({ stroke: "#ccc" }, A(e, !1)), {}, { fill: "none" });
	return /*#__PURE__*/ N.createElement("path", yo({}, i, {
		className: n("recharts-polar-grid-concentric-polygon", e.className),
		key: `path-${r}`,
		d: To(t, e.cx, e.cy, e.polarAngles)
	}));
}, ko = function(e) {
	var t = e.polarRadius, n = e.gridType;
	return !t || !t.length ? null : /*#__PURE__*/ N.createElement("g", { className: "recharts-polar-grid-concentric" }, t.map(function(t, r) {
		var i = r;
		return n === "circle" ? /*#__PURE__*/ N.createElement(Do, yo({ key: i }, e, {
			radius: t,
			index: r
		})) : /*#__PURE__*/ N.createElement(Oo, yo({ key: i }, e, {
			radius: t,
			index: r
		}));
	}));
}, Ao = function(e) {
	var t = e.cx, n = t === void 0 ? 0 : t, r = e.cy, i = r === void 0 ? 0 : r, a = e.innerRadius, o = a === void 0 ? 0 : a, s = e.outerRadius, c = s === void 0 ? 0 : s, l = e.gridType, u = l === void 0 ? "polygon" : l, d = e.radialLines, f = d === void 0 || d, p = _o(e, ho);
	return c <= 0 ? null : /*#__PURE__*/ N.createElement("g", { className: "recharts-polar-grid" }, /*#__PURE__*/ N.createElement(Eo, yo({
		cx: n,
		cy: i,
		innerRadius: o,
		outerRadius: c,
		gridType: u,
		radialLines: f
	}, p)), /*#__PURE__*/ N.createElement(ko, yo({
		cx: n,
		cy: i,
		innerRadius: o,
		outerRadius: c,
		gridType: u,
		radialLines: f
	}, p)));
};
Ao.displayName = "PolarGrid";
//#endregion
//#region ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/maxBy.js
var jo = /* @__PURE__ */ t(((e, t) => {
	var n = Nt(), r = Yt(), i = Ut();
	function a(e, t) {
		return e && e.length ? n(e, i(t, 2), r) : void 0;
	}
	t.exports = a;
})), Mo = /* @__PURE__ */ t(((e, t) => {
	var n = Nt(), r = Ut(), i = Et();
	function a(e, t) {
		return e && e.length ? n(e, r(t, 2), i) : void 0;
	}
	t.exports = a;
})), No = /* @__PURE__ */ e(jo()), Po = /* @__PURE__ */ e(Mo()), Fo = [
	"cx",
	"cy",
	"angle",
	"ticks",
	"axisLine"
], Io = [
	"ticks",
	"tick",
	"angle",
	"tickFormatter",
	"stroke"
];
function Lo(e) {
	"@babel/helpers - typeof";
	return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Lo(e);
}
function Ro() {
	return Ro = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ro.apply(this, arguments);
}
function zo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Bo(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? zo(Object(n), !0).forEach(function(t) {
			$o(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Vo(e, t) {
	if (e == null) return {};
	var n = Ho(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Ho(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Uo(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Wo(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, es(r.key), r);
	}
}
function Go(e, t, n) {
	return t && Wo(e.prototype, t), n && Wo(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ko(e, t, n) {
	return t = Xo(t), qo(e, Yo() ? Reflect.construct(t, n || [], Xo(e).constructor) : t.apply(e, n));
}
function qo(e, t) {
	if (t && (Lo(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Jo(e);
}
function Jo(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Yo() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Yo = function() {
		return !!e;
	})();
}
function Xo(e) {
	return Xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Xo(e);
}
function Zo(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qo(e, t);
}
function Qo(e, t) {
	return Qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Qo(e, t);
}
function $o(e, t, n) {
	return t = es(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function es(e) {
	var t = ts(e, "string");
	return Lo(t) == "symbol" ? t : t + "";
}
function ts(e, t) {
	if (Lo(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Lo(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ns = /*#__PURE__*/ function(e) {
	function t() {
		return Uo(this, t), Ko(this, t, arguments);
	}
	return Zo(t, e), Go(t, [
		{
			key: "getTickValueCoord",
			value: function(e) {
				var t = e.coordinate, n = this.props, r = n.angle, i = n.cx, a = n.cy;
				return Ht(i, a, t, r);
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
				var e = this.props, t = e.cx, n = e.cy, r = e.angle, i = e.ticks, a = (0, No.default)(i, function(e) {
					return e.coordinate || 0;
				});
				return {
					cx: t,
					cy: n,
					startAngle: r,
					endAngle: r,
					innerRadius: (0, Po.default)(i, function(e) {
						return e.coordinate || 0;
					}).coordinate || 0,
					outerRadius: a.coordinate || 0
				};
			}
		},
		{
			key: "renderAxisLine",
			value: function() {
				var e = this.props, t = e.cx, n = e.cy, r = e.angle, i = e.ticks, a = e.axisLine, o = Vo(e, Fo), s = i.reduce(function(e, t) {
					return [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)];
				}, [Infinity, -Infinity]), c = Ht(t, n, s[0], r), l = Ht(t, n, s[1], r), u = Bo(Bo(Bo({}, A(o, !1)), {}, { fill: "none" }, A(a, !1)), {}, {
					x1: c.x,
					y1: c.y,
					x2: l.x,
					y2: l.y
				});
				return /*#__PURE__*/ N.createElement("line", Ro({ className: "recharts-polar-radius-axis-line" }, u));
			}
		},
		{
			key: "renderTicks",
			value: function() {
				var e = this, r = this.props, i = r.ticks, a = r.tick, o = r.angle, s = r.tickFormatter, c = r.stroke, l = Vo(r, Io), u = this.getTickTextAnchor(), d = A(l, !1), f = A(a, !1), p = i.map(function(r, i) {
					var l = e.getTickValueCoord(r), p = Bo(Bo(Bo(Bo({
						textAnchor: u,
						transform: `rotate(${90 - o}, ${l.x}, ${l.y})`
					}, d), {}, {
						stroke: "none",
						fill: c
					}, f), {}, { index: i }, l), {}, { payload: r });
					return /*#__PURE__*/ N.createElement(j, Ro({
						className: n("recharts-polar-radius-axis-tick", Bt(a)),
						key: `tick-${r.coordinate}`
					}, rn(e.props, r, i)), t.renderTickItem(a, p, s ? s(r.value, i) : r.value));
				});
				return /*#__PURE__*/ N.createElement(j, { className: "recharts-polar-radius-axis-ticks" }, p);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.ticks, r = e.axisLine, i = e.tick;
				return !t || !t.length ? null : /*#__PURE__*/ N.createElement(j, { className: n("recharts-polar-radius-axis", this.props.className) }, r && this.renderAxisLine(), i && this.renderTicks(), Tt.renderCallByParent(this.props, this.getViewBox()));
			}
		}
	], [{
		key: "renderTickItem",
		value: function(e, t, n) {
			return /*#__PURE__*/ N.isValidElement(e) ? /*#__PURE__*/ N.cloneElement(e, t) : (0, V.default)(e) ? e(t) : /*#__PURE__*/ N.createElement(qt, Ro({}, t, { className: "recharts-polar-radius-axis-tick-value" }), n);
		}
	}]);
}(Or);
$o(ns, "displayName", "PolarRadiusAxis"), $o(ns, "axisType", "radiusAxis"), $o(ns, "defaultProps", {
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
function rs(e) {
	"@babel/helpers - typeof";
	return rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, rs(e);
}
function is() {
	return is = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, is.apply(this, arguments);
}
function as(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function os(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? as(Object(n), !0).forEach(function(t) {
			_s(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : as(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ss(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function cs(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, vs(r.key), r);
	}
}
function ls(e, t, n) {
	return t && cs(e.prototype, t), n && cs(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function us(e, t, n) {
	return t = ms(t), ds(e, ps() ? Reflect.construct(t, n || [], ms(e).constructor) : t.apply(e, n));
}
function ds(e, t) {
	if (t && (rs(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return fs(e);
}
function fs(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ps() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ps = function() {
		return !!e;
	})();
}
function ms(e) {
	return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, ms(e);
}
function hs(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gs(e, t);
}
function gs(e, t) {
	return gs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, gs(e, t);
}
function _s(e, t, n) {
	return t = vs(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function vs(e) {
	var t = ys(e, "string");
	return rs(t) == "symbol" ? t : t + "";
}
function ys(e, t) {
	if (rs(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (rs(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var bs = Math.PI / 180, xs = 1e-5, Ss = /*#__PURE__*/ function(e) {
	function t() {
		return ss(this, t), us(this, t, arguments);
	}
	return hs(t, e), ls(t, [
		{
			key: "getTickLineCoord",
			value: function(e) {
				var t = this.props, n = t.cx, r = t.cy, i = t.radius, a = t.orientation, o = t.tickSize || 8, s = Ht(n, r, i, e.coordinate), c = Ht(n, r, i + (a === "inner" ? -1 : 1) * o, e.coordinate);
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
				var t = this.props.orientation, n = Math.cos(-e.coordinate * bs);
				return n > xs ? t === "outer" ? "start" : "end" : n < -xs ? t === "outer" ? "end" : "start" : "middle";
			}
		},
		{
			key: "renderAxisLine",
			value: function() {
				var e = this.props, t = e.cx, n = e.cy, r = e.radius, i = e.axisLine, a = e.axisLineType, o = os(os({}, A(this.props, !1)), {}, { fill: "none" }, A(i, !1));
				if (a === "circle") return /*#__PURE__*/ N.createElement(jn, is({ className: "recharts-polar-angle-axis-line" }, o, {
					cx: t,
					cy: n,
					r
				}));
				var s = this.props.ticks.map(function(e) {
					return Ht(t, n, r, e.coordinate);
				});
				return /*#__PURE__*/ N.createElement(mo, is({ className: "recharts-polar-angle-axis-line" }, o, { points: s }));
			}
		},
		{
			key: "renderTicks",
			value: function() {
				var e = this, r = this.props, i = r.ticks, a = r.tick, o = r.tickLine, s = r.tickFormatter, c = r.stroke, l = A(this.props, !1), u = A(a, !1), d = os(os({}, l), {}, { fill: "none" }, A(o, !1)), f = i.map(function(r, i) {
					var f = e.getTickLineCoord(r), p = os(os(os({ textAnchor: e.getTickTextAnchor(r) }, l), {}, {
						stroke: "none",
						fill: c
					}, u), {}, {
						index: i,
						payload: r,
						x: f.x2,
						y: f.y2
					});
					return /*#__PURE__*/ N.createElement(j, is({
						className: n("recharts-polar-angle-axis-tick", Bt(a)),
						key: `tick-${r.coordinate}`
					}, rn(e.props, r, i)), o && /*#__PURE__*/ N.createElement("line", is({ className: "recharts-polar-angle-axis-tick-line" }, d, f)), a && t.renderTickItem(a, p, s ? s(r.value, i) : r.value));
				});
				return /*#__PURE__*/ N.createElement(j, { className: "recharts-polar-angle-axis-ticks" }, f);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.ticks, r = e.radius, i = e.axisLine;
				return r <= 0 || !t || !t.length ? null : /*#__PURE__*/ N.createElement(j, { className: n("recharts-polar-angle-axis", this.props.className) }, i && this.renderAxisLine(), this.renderTicks());
			}
		}
	], [{
		key: "renderTickItem",
		value: function(e, t, n) {
			return /*#__PURE__*/ N.isValidElement(e) ? /*#__PURE__*/ N.cloneElement(e, t) : (0, V.default)(e) ? e(t) : /*#__PURE__*/ N.createElement(qt, is({}, t, { className: "recharts-polar-angle-axis-tick-value" }), n);
		}
	}]);
}(Or);
_s(Ss, "displayName", "PolarAngleAxis"), _s(Ss, "axisType", "angleAxis"), _s(Ss, "defaultProps", {
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
var Cs = /* @__PURE__ */ e(wn()), ws;
function Ts(e) {
	"@babel/helpers - typeof";
	return Ts = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ts(e);
}
function Es() {
	return Es = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Es.apply(this, arguments);
}
function Ds(e, t) {
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
		t % 2 ? Ds(Object(n), !0).forEach(function(t) {
			Rs(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ds(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Os(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function ks(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, zs(r.key), r);
	}
}
function As(e, t, n) {
	return t && ks(e.prototype, t), n && ks(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function js(e, t, n) {
	return t = Fs(t), Ms(e, Ps() ? Reflect.construct(t, n || [], Fs(e).constructor) : t.apply(e, n));
}
function Ms(e, t) {
	if (t && (Ts(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Ns(e);
}
function Ns(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Ps() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Ps = function() {
		return !!e;
	})();
}
function Fs(e) {
	return Fs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Fs(e);
}
function Is(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ls(e, t);
}
function Ls(e, t) {
	return Ls = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Ls(e, t);
}
function Rs(e, t, n) {
	return t = zs(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function zs(e) {
	var t = Bs(e, "string");
	return Ts(t) == "symbol" ? t : t + "";
}
function Bs(e, t) {
	if (Ts(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ts(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Vs = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Os(this, t), n = js(this, t, [e]), Rs(n, "pieRef", null), Rs(n, "sectorRefs", []), Rs(n, "id", cn("recharts-pie-")), Rs(n, "handleAnimationEnd", function() {
			var e = n.props.onAnimationEnd;
			n.setState({ isAnimationFinished: !0 }), (0, V.default)(e) && e();
		}), Rs(n, "handleAnimationStart", function() {
			var e = n.props.onAnimationStart;
			n.setState({ isAnimationFinished: !1 }), (0, V.default)(e) && e();
		}), n.state = {
			isAnimationFinished: !e.isAnimationActive,
			prevIsAnimationActive: e.isAnimationActive,
			prevAnimationId: e.animationId,
			sectorToFocus: 0
		}, n;
	}
	return Is(t, e), As(t, [
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
				var n = this.props, r = n.label, i = n.labelLine, a = n.dataKey, o = n.valueKey, s = A(this.props, !1), c = A(r, !1), l = A(i, !1), u = r && r.offsetRadius || 20, d = e.map(function(e, n) {
					var d = (e.startAngle + e.endAngle) / 2, f = Ht(e.cx, e.cy, e.outerRadius + u, d), p = U(U(U(U({}, s), e), {}, { stroke: "none" }, c), {}, {
						index: n,
						textAnchor: t.getTextAnchor(f.x, e.cx)
					}, f), m = U(U(U(U({}, s), e), {}, {
						fill: "none",
						stroke: e.fill
					}, l), {}, {
						index: n,
						points: [Ht(e.cx, e.cy, e.outerRadius, d), f]
					}), h = a;
					return (0, H.default)(a) && (0, H.default)(o) ? h = "value" : (0, H.default)(a) && (h = o), /*#__PURE__*/ N.createElement(j, { key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${n}` }, i && t.renderLabelLineItem(i, m, "line"), t.renderLabelItem(r, p, Wt(e, h)));
				});
				return /*#__PURE__*/ N.createElement(j, { className: "recharts-pie-labels" }, d);
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
					return /*#__PURE__*/ N.createElement(j, Es({
						ref: function(e) {
							e && !t.sectorRefs.includes(e) && t.sectorRefs.push(e);
						},
						tabIndex: -1,
						className: "recharts-pie-sector"
					}, rn(t.props, n, o), { key: `sector-${n?.startAngle}-${n?.endAngle}-${n.midAngle}-${o}` }), /*#__PURE__*/ N.createElement(Ot, Es({
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
				return /*#__PURE__*/ N.createElement(At, {
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
						var n = l && l[t], o = t > 0 ? (0, Cs.default)(e, "paddingAngle", 0) : 0;
						if (n) {
							var s = on(n.endAngle - n.startAngle, e.endAngle - e.startAngle), c = U(U({}, e), {}, {
								startAngle: a + o,
								endAngle: a + s(r) + o
							});
							i.push(c), a = c.endAngle;
						} else {
							var u = e.endAngle, d = e.startAngle, f = on(0, u - d)(r), p = U(U({}, e), {}, {
								startAngle: a + o,
								endAngle: a + f + o
							});
							i.push(p), a = p.endAngle;
						}
					}), /*#__PURE__*/ N.createElement(j, null, e.renderSectorsStatically(i));
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
				return n && t && t.length && (!r || !(0, Qa.default)(r, t)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(t);
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
				if (r || !i || !i.length || !yn(s) || !yn(c) || !yn(l) || !yn(u)) return null;
				var p = n("recharts-pie", a);
				return /*#__PURE__*/ N.createElement(j, {
					tabIndex: this.props.rootTabIndex,
					className: p,
					ref: function(t) {
						e.pieRef = t;
					}
				}, this.renderSectors(), o && this.renderLabels(i), Tt.renderCallByParent(this.props, null, !1), (!d || f) && Vt.renderCallByParent(this.props, i, !1));
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
				if (/*#__PURE__*/ N.isValidElement(e)) return /*#__PURE__*/ N.cloneElement(e, t);
				if ((0, V.default)(e)) return e(t);
				var i = n("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
				return /*#__PURE__*/ N.createElement(kt, Es({}, t, {
					key: r,
					type: "linear",
					className: i
				}));
			}
		},
		{
			key: "renderLabelItem",
			value: function(e, t, r) {
				if (/*#__PURE__*/ N.isValidElement(e)) return /*#__PURE__*/ N.cloneElement(e, t);
				var i = r;
				if ((0, V.default)(e) && (i = e(t), /*#__PURE__*/ N.isValidElement(i))) return i;
				var a = n("recharts-pie-label-text", typeof e != "boolean" && !(0, V.default)(e) ? e.className : "");
				return /*#__PURE__*/ N.createElement(qt, Es({}, t, {
					alignmentBaseline: "middle",
					className: a
				}), i);
			}
		}
	]);
}(Or);
ws = Vs, Rs(Vs, "displayName", "Pie"), Rs(Vs, "defaultProps", {
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
	isAnimationActive: !It.isSsr,
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	nameKey: "name",
	blendStroke: !1,
	rootTabIndex: 0
}), Rs(Vs, "parseDeltaAngle", function(e, t) {
	return kn(t - e) * Math.min(Math.abs(t - e), 360);
}), Rs(Vs, "getRealPieData", function(e) {
	var t = e.data, n = e.children, r = A(e, !1), i = En(n, Zt);
	return t && t.length ? t.map(function(e, t) {
		return U(U(U({ payload: e }, r), e), i && i[t] && i[t].props);
	}) : i && i.length ? i.map(function(e) {
		return U(U({}, r), e.props);
	}) : [];
}), Rs(Vs, "parseCoordinateOfPie", function(e, t) {
	var n = t.top, r = t.left, i = t.width, a = t.height, o = zt(i, a);
	return {
		cx: r + Dn(e.cx, i, i / 2),
		cy: n + Dn(e.cy, a, a / 2),
		innerRadius: Dn(e.innerRadius, o, 0),
		outerRadius: Dn(e.outerRadius, o, o * .8),
		maxRadius: e.maxRadius || Math.sqrt(i * i + a * a) / 2
	};
}), Rs(Vs, "getComposedData", function(e) {
	var t = e.item, n = e.offset, r = t.type.defaultProps === void 0 ? t.props : U(U({}, t.type.defaultProps), t.props), i = ws.getRealPieData(r);
	if (!i || !i.length) return null;
	var a = r.cornerRadius, o = r.startAngle, s = r.endAngle, c = r.paddingAngle, l = r.dataKey, u = r.nameKey, d = r.valueKey, f = r.tooltipType, p = Math.abs(r.minAngle), m = ws.parseCoordinateOfPie(r, n), h = ws.parseDeltaAngle(o, s), g = Math.abs(h), _ = l;
	(0, H.default)(l) && (0, H.default)(d) ? (ln(!1, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0"), _ = "value") : (0, H.default)(l) && (ln(!1, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0"), _ = d);
	var v = i.filter(function(e) {
		return Wt(e, _, 0) !== 0;
	}).length, y = (g >= 360 ? v : v - 1) * c, b = g - v * p - y, x = i.reduce(function(e, t) {
		var n = Wt(t, _, 0);
		return e + (yn(n) ? n : 0);
	}, 0), S;
	if (x > 0) {
		var C;
		S = i.map(function(e, t) {
			var n = Wt(e, _, 0), r = Wt(e, u, t), i = (yn(n) ? n : 0) / x, s = t ? C.endAngle + kn(h) * c * (n === 0 ? 0 : 1) : o, l = s + kn(h) * ((n === 0 ? 0 : p) + i * b), d = (s + l) / 2, g = (m.innerRadius + m.outerRadius) / 2;
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
				tooltipPosition: Ht(m.cx, m.cy, g, d)
			}, e), m), {}, {
				value: Wt(e, _),
				startAngle: s,
				endAngle: l,
				payload: e,
				paddingAngle: kn(h) * c
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
var Hs = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return e && e.length ? e[0] : void 0;
	}
	t.exports = n;
})), Us = /* @__PURE__ */ t(((e, t) => {
	t.exports = Hs();
})), Ws = /* @__PURE__ */ e(_n()), Gs = /* @__PURE__ */ e(Us()), Ks = ["key"];
function qs(e) {
	"@babel/helpers - typeof";
	return qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, qs(e);
}
function Js(e, t) {
	if (e == null) return {};
	var n = Ys(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Ys(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Xs() {
	return Xs = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Xs.apply(this, arguments);
}
function Zs(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Qs(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Zs(Object(n), !0).forEach(function(t) {
			lc(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zs(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function $s(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function ec(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, uc(r.key), r);
	}
}
function tc(e, t, n) {
	return t && ec(e.prototype, t), n && ec(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nc(e, t, n) {
	return t = oc(t), rc(e, ac() ? Reflect.construct(t, n || [], oc(e).constructor) : t.apply(e, n));
}
function rc(e, t) {
	if (t && (qs(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return ic(e);
}
function ic(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ac() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ac = function() {
		return !!e;
	})();
}
function oc(e) {
	return oc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, oc(e);
}
function sc(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cc(e, t);
}
function cc(e, t) {
	return cc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, cc(e, t);
}
function lc(e, t, n) {
	return t = uc(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function uc(e) {
	var t = dc(e, "string");
	return qs(t) == "symbol" ? t : t + "";
}
function dc(e, t) {
	if (qs(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (qs(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var fc = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		$s(this, t);
		var n = [...arguments];
		return e = nc(this, t, [].concat(n)), lc(e, "state", { isAnimationFinished: !1 }), lc(e, "handleAnimationEnd", function() {
			var t = e.props.onAnimationEnd;
			e.setState({ isAnimationFinished: !0 }), (0, V.default)(t) && t();
		}), lc(e, "handleAnimationStart", function() {
			var t = e.props.onAnimationStart;
			e.setState({ isAnimationFinished: !1 }), (0, V.default)(t) && t();
		}), lc(e, "handleMouseEnter", function(t) {
			var n = e.props.onMouseEnter;
			n && n(e.props, t);
		}), lc(e, "handleMouseLeave", function(t) {
			var n = e.props.onMouseLeave;
			n && n(e.props, t);
		}), e;
	}
	return sc(t, e), tc(t, [
		{
			key: "renderDots",
			value: function(e) {
				var n = this.props, r = n.dot, i = n.dataKey, a = A(this.props, !1), o = A(r, !0), s = e.map(function(e, n) {
					var s = Qs(Qs(Qs({
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
				return /*#__PURE__*/ N.createElement(j, { className: "recharts-radar-dots" }, s);
			}
		},
		{
			key: "renderPolygonStatically",
			value: function(e) {
				var t = this.props, n = t.shape, r = t.dot, i = t.isRange, a = t.baseLinePoints, o = t.connectNulls, s = /*#__PURE__*/ N.isValidElement(n) ? /*#__PURE__*/ N.cloneElement(n, Qs(Qs({}, this.props), {}, { points: e })) : (0, V.default)(n) ? n(Qs(Qs({}, this.props), {}, { points: e })) : /*#__PURE__*/ N.createElement(mo, Xs({}, A(this.props, !0), {
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					points: e,
					baseLinePoints: i ? a : null,
					connectNulls: o
				}));
				return /*#__PURE__*/ N.createElement(j, { className: "recharts-radar-polygon" }, s, r ? this.renderDots(e) : null);
			}
		},
		{
			key: "renderPolygonWithAnimation",
			value: function() {
				var e = this, t = this.props, n = t.points, r = t.isAnimationActive, i = t.animationBegin, a = t.animationDuration, o = t.animationEasing, s = t.animationId, c = this.state.prevPoints;
				return /*#__PURE__*/ N.createElement(At, {
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
							var a = on(n.x, e.x), o = on(n.y, e.y);
							return Qs(Qs({}, e), {}, {
								x: a(r),
								y: o(r)
							});
						}
						var s = on(e.cx, e.x), l = on(e.cy, e.y);
						return Qs(Qs({}, e), {}, {
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
				return n && t && t.length && !r && (!i || !(0, Qa.default)(i, t)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(t);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.hide, r = e.className, i = e.points, a = e.isAnimationActive;
				if (t || !i || !i.length) return null;
				var o = this.state.isAnimationFinished, s = n("recharts-radar", r);
				return /*#__PURE__*/ N.createElement(j, { className: s }, this.renderPolygon(), (!a || o) && Vt.renderCallByParent(this.props, i));
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
			if (/*#__PURE__*/ N.isValidElement(e)) r = /*#__PURE__*/ N.cloneElement(e, t);
			else if ((0, V.default)(e)) r = e(t);
			else {
				var i = t.key, a = Js(t, Ks);
				r = /*#__PURE__*/ N.createElement(jn, Xs({}, a, {
					key: i,
					className: n("recharts-radar-dot", typeof e == "boolean" ? "" : e.className)
				}));
			}
			return r;
		}
	}]);
}(Or);
lc(fc, "displayName", "Radar"), lc(fc, "defaultProps", {
	angleAxisId: 0,
	radiusAxisId: 0,
	hide: !1,
	activeDot: !0,
	dot: !1,
	legendType: "rect",
	isAnimationActive: !It.isSsr,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
}), lc(fc, "getComposedData", function(e) {
	var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, i = e.dataKey, a = e.bandSize, o = n.cx, s = n.cy, c = !1, l = [], u = n.type === "number" ? 0 : a ?? 0;
	r.forEach(function(e, r) {
		var a = Wt(e, n.dataKey, r), d = Wt(e, i), f = n.scale(a) + u, p = Array.isArray(d) ? (0, Ws.default)(d) : d, m = (0, H.default)(p) ? void 0 : t.scale(p);
		Array.isArray(d) && d.length >= 2 && (c = !0), l.push(Qs(Qs({}, Ht(o, s, m, f)), {}, {
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
			var n = (0, Gs.default)(e.value), r = (0, H.default)(n) ? void 0 : t.scale(n);
			d.push(Qs(Qs({}, e), {}, { radius: r }, Ht(o, s, r, e.angle)));
		} else d.push(e);
	}), {
		points: l,
		isRange: c,
		baseLinePoints: d
	};
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/CartesianGrid.js
var pc = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], mc = ["offset"];
function hc(e) {
	"@babel/helpers - typeof";
	return hc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, hc(e);
}
function gc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function _c(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? gc(Object(n), !0).forEach(function(t) {
			vc(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gc(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
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
	return hc(t) == "symbol" ? t : t + "";
}
function bc(e, t) {
	if (hc(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (hc(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function xc() {
	return xc = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, xc.apply(this, arguments);
}
function Sc(e, t) {
	if (e == null) return {};
	var n = Cc(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Cc(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
var wc = function(e) {
	var t = e.fill;
	if (!t || t === "none") return null;
	var n = e.fillOpacity, r = e.x, i = e.y, a = e.width, o = e.height, s = e.ry;
	return /*#__PURE__*/ N.createElement("rect", {
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
function Tc(e, t) {
	var n;
	if (/*#__PURE__*/ N.isValidElement(e)) n = /*#__PURE__*/ N.cloneElement(e, t);
	else if ((0, V.default)(e)) n = e(t);
	else {
		var r = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, c = Sc(t, pc), l = A(c, !1);
		l.offset;
		var u = Sc(l, mc);
		n = /*#__PURE__*/ N.createElement("line", xc({}, u, {
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
function Ec(e) {
	var t = e.x, n = e.width, r = e.horizontal, i = r === void 0 || r, a = e.horizontalPoints;
	if (!i || !a || !a.length) return null;
	var o = a.map(function(r, a) {
		return Tc(i, _c(_c({}, e), {}, {
			x1: t,
			y1: r,
			x2: t + n,
			y2: r,
			key: `line-${a}`,
			index: a
		}));
	});
	return /*#__PURE__*/ N.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, o);
}
function Dc(e) {
	var t = e.y, n = e.height, r = e.vertical, i = r === void 0 || r, a = e.verticalPoints;
	if (!i || !a || !a.length) return null;
	var o = a.map(function(r, a) {
		return Tc(i, _c(_c({}, e), {}, {
			x1: r,
			y1: t,
			x2: r,
			y2: t + n,
			key: `line-${a}`,
			index: a
		}));
	});
	return /*#__PURE__*/ N.createElement("g", { className: "recharts-cartesian-grid-vertical" }, o);
}
function Oc(e) {
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
		return /*#__PURE__*/ N.createElement("rect", {
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
	return /*#__PURE__*/ N.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, u);
}
function kc(e) {
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
		return /*#__PURE__*/ N.createElement("rect", {
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
	return /*#__PURE__*/ N.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, d);
}
var Ac = function(e, t) {
	var n = e.xAxis, r = e.width, i = e.height, a = e.offset;
	return Ft(pn(_c(_c(_c({}, bn.defaultProps), n), {}, {
		ticks: Lt(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	})), a.left, a.left + a.width, t);
}, jc = function(e, t) {
	var n = e.yAxis, r = e.width, i = e.height, a = e.offset;
	return Ft(pn(_c(_c(_c({}, bn.defaultProps), n), {}, {
		ticks: Lt(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	})), a.top, a.top + a.height, t);
}, Mc = {
	horizontal: !0,
	vertical: !0,
	horizontalPoints: [],
	verticalPoints: [],
	stroke: "#ccc",
	fill: "none",
	verticalFill: [],
	horizontalFill: []
};
function Nc(e) {
	var t = An(), n = tn(), r = Nn(), i = _c(_c({}, e), {}, {
		stroke: e.stroke ?? Mc.stroke,
		fill: e.fill ?? Mc.fill,
		horizontal: e.horizontal ?? Mc.horizontal,
		horizontalFill: e.horizontalFill ?? Mc.horizontalFill,
		vertical: e.vertical ?? Mc.vertical,
		verticalFill: e.verticalFill ?? Mc.verticalFill,
		x: yn(e.x) ? e.x : r.left,
		y: yn(e.y) ? e.y : r.top,
		width: yn(e.width) ? e.width : r.width,
		height: yn(e.height) ? e.height : r.height
	}), a = i.x, o = i.y, s = i.width, c = i.height, l = i.syncWithTicks, u = i.horizontalValues, d = i.verticalValues, f = fn(), p = an();
	if (!yn(s) || s <= 0 || !yn(c) || c <= 0 || !yn(a) || a !== +a || !yn(o) || o !== +o) return null;
	var m = i.verticalCoordinatesGenerator || Ac, h = i.horizontalCoordinatesGenerator || jc, g = i.horizontalPoints, _ = i.verticalPoints;
	if ((!g || !g.length) && (0, V.default)(h)) {
		var v = u && u.length, y = h({
			yAxis: p ? _c(_c({}, p), {}, { ticks: v ? u : p.ticks }) : void 0,
			width: t,
			height: n,
			offset: r
		}, v ? !0 : l);
		ln(Array.isArray(y), `horizontalCoordinatesGenerator should return Array but instead it returned [${hc(y)}]`), Array.isArray(y) && (g = y);
	}
	if ((!_ || !_.length) && (0, V.default)(m)) {
		var b = d && d.length, x = m({
			xAxis: f ? _c(_c({}, f), {}, { ticks: b ? d : f.ticks }) : void 0,
			width: t,
			height: n,
			offset: r
		}, b ? !0 : l);
		ln(Array.isArray(x), `verticalCoordinatesGenerator should return Array but instead it returned [${hc(x)}]`), Array.isArray(x) && (_ = x);
	}
	return /*#__PURE__*/ N.createElement("g", { className: "recharts-cartesian-grid" }, /*#__PURE__*/ N.createElement(wc, {
		fill: i.fill,
		fillOpacity: i.fillOpacity,
		x: i.x,
		y: i.y,
		width: i.width,
		height: i.height,
		ry: i.ry
	}), /*#__PURE__*/ N.createElement(Ec, xc({}, i, {
		offset: r,
		horizontalPoints: g,
		xAxis: f,
		yAxis: p
	})), /*#__PURE__*/ N.createElement(Dc, xc({}, i, {
		offset: r,
		verticalPoints: _,
		xAxis: f,
		yAxis: p
	})), /*#__PURE__*/ N.createElement(Oc, xc({}, i, { horizontalPoints: g })), /*#__PURE__*/ N.createElement(kc, xc({}, i, { verticalPoints: _ })));
}
Nc.displayName = "CartesianGrid";
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Line.js
var Pc = [
	"type",
	"layout",
	"connectNulls",
	"ref"
], Fc = ["key"];
function Ic(e) {
	"@babel/helpers - typeof";
	return Ic = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ic(e);
}
function Lc(e, t) {
	if (e == null) return {};
	var n = Rc(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Rc(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function zc() {
	return zc = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, zc.apply(this, arguments);
}
function Bc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Vc(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Bc(Object(n), !0).forEach(function(t) {
			il(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bc(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Hc(e) {
	return Kc(e) || Gc(e) || Wc(e) || Uc();
}
function Uc() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Wc(e, t) {
	if (e) {
		if (typeof e == "string") return qc(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qc(e, t);
	}
}
function Gc(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Kc(e) {
	if (Array.isArray(e)) return qc(e);
}
function qc(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Jc(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Yc(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, al(r.key), r);
	}
}
function Xc(e, t, n) {
	return t && Yc(e.prototype, t), n && Yc(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Zc(e, t, n) {
	return t = tl(t), Qc(e, el() ? Reflect.construct(t, n || [], tl(e).constructor) : t.apply(e, n));
}
function Qc(e, t) {
	if (t && (Ic(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return $c(e);
}
function $c(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function el() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (el = function() {
		return !!e;
	})();
}
function tl(e) {
	return tl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, tl(e);
}
function nl(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && rl(e, t);
}
function rl(e, t) {
	return rl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, rl(e, t);
}
function il(e, t, n) {
	return t = al(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function al(e) {
	var t = ol(e, "string");
	return Ic(t) == "symbol" ? t : t + "";
}
function ol(e, t) {
	if (Ic(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ic(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var sl = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		Jc(this, t);
		var n = [...arguments];
		return e = Zc(this, t, [].concat(n)), il(e, "state", {
			isAnimationFinished: !0,
			totalLength: 0
		}), il(e, "generateSimpleStrokeDasharray", function(e, t) {
			return `${t}px ${e - t}px`;
		}), il(e, "getStrokeDasharray", function(n, r, i) {
			var a = i.reduce(function(e, t) {
				return e + t;
			});
			if (!a) return e.generateSimpleStrokeDasharray(r, n);
			for (var o = Math.floor(n / a), s = n % a, c = r - n, l = [], u = 0, d = 0; u < i.length; d += i[u], ++u) if (d + i[u] > s) {
				l = [].concat(Hc(i.slice(0, u)), [s - d]);
				break;
			}
			var f = l.length % 2 == 0 ? [0, c] : [c];
			return [].concat(Hc(t.repeat(i, o)), Hc(l), f).map(function(e) {
				return `${e}px`;
			}).join(", ");
		}), il(e, "id", cn("recharts-line-")), il(e, "pathRef", function(t) {
			e.mainCurve = t;
		}), il(e, "handleAnimationEnd", function() {
			e.setState({ isAnimationFinished: !0 }), e.props.onAnimationEnd && e.props.onAnimationEnd();
		}), il(e, "handleAnimationStart", function() {
			e.setState({ isAnimationFinished: !1 }), e.props.onAnimationStart && e.props.onAnimationStart();
		}), e;
	}
	return nl(t, e), Xc(t, [
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
				var n = this.props, r = n.points, i = n.xAxis, a = n.yAxis, o = n.layout, s = n.children, c = En(s, Pn);
				if (!c) return null;
				var l = function(e, t) {
					return {
						x: e.x,
						y: e.y,
						value: e.value,
						errorVal: Wt(e.payload, t)
					};
				}, u = { clipPath: e ? `url(#clipPath-${t})` : null };
				return /*#__PURE__*/ N.createElement(j, u, c.map(function(e) {
					return /*#__PURE__*/ N.cloneElement(e, {
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
				var i = this.props, a = i.dot, o = i.points, s = i.dataKey, c = A(this.props, !1), l = A(a, !0), u = o.map(function(e, n) {
					var r = Vc(Vc(Vc({
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
				return /*#__PURE__*/ N.createElement(j, zc({
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
				var c = Lc(i, Pc), l = Vc(Vc(Vc({}, A(c, !0)), {}, {
					fill: "none",
					className: "recharts-line-curve",
					clipPath: t ? `url(#clipPath-${n})` : null,
					points: e
				}, r), {}, {
					type: a,
					layout: o,
					connectNulls: s
				});
				return /*#__PURE__*/ N.createElement(kt, zc({}, l, { pathRef: this.pathRef }));
			}
		},
		{
			key: "renderCurveWithAnimation",
			value: function(e, t) {
				var n = this, r = this.props, i = r.points, a = r.strokeDasharray, o = r.isAnimationActive, s = r.animationBegin, c = r.animationDuration, l = r.animationEasing, u = r.animationId, d = r.animateNewValues, f = r.width, p = r.height, m = this.state, h = m.prevPoints, g = m.totalLength;
				return /*#__PURE__*/ N.createElement(At, {
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
								var r = h[n], i = on(r.x, e.x), a = on(r.y, e.y);
								return Vc(Vc({}, e), {}, {
									x: i(o),
									y: a(o)
								});
							}
							if (d) {
								var c = on(f * 2, e.x), l = on(p / 2, e.y);
								return Vc(Vc({}, e), {}, {
									x: c(o),
									y: l(o)
								});
							}
							return Vc(Vc({}, e), {}, {
								x: e.x,
								y: e.y
							});
						});
						return n.renderCurveStatically(c, e, t);
					}
					var l = on(0, g)(o), u;
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
				return i && r && r.length && (!o && s > 0 || !(0, Qa.default)(o, r)) ? this.renderCurveWithAnimation(e, t) : this.renderCurveStatically(r, e, t);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.hide, r = e.dot, i = e.points, a = e.className, o = e.xAxis, s = e.yAxis, c = e.top, l = e.left, u = e.width, d = e.height, f = e.isAnimationActive, p = e.id;
				if (t || !i || !i.length) return null;
				var m = this.state.isAnimationFinished, h = i.length === 1, g = n("recharts-line", a), _ = o && o.allowDataOverflow, v = s && s.allowDataOverflow, y = _ || v, b = (0, H.default)(p) ? this.id : p, x = A(r, !1) ?? {
					r: 3,
					strokeWidth: 2
				}, S = x.r, C = S === void 0 ? 3 : S, w = x.strokeWidth, T = w === void 0 ? 2 : w, E = (hn(r) ? r : {}).clipDot, ee = E === void 0 || E, te = C * 2 + T;
				return /*#__PURE__*/ N.createElement(j, { className: g }, _ || v ? /*#__PURE__*/ N.createElement("defs", null, /*#__PURE__*/ N.createElement("clipPath", { id: `clipPath-${b}` }, /*#__PURE__*/ N.createElement("rect", {
					x: _ ? l : l - u / 2,
					y: v ? c : c - d / 2,
					width: _ ? u : u * 2,
					height: v ? d : d * 2
				})), !ee && /*#__PURE__*/ N.createElement("clipPath", { id: `clipPath-dots-${b}` }, /*#__PURE__*/ N.createElement("rect", {
					x: l - te / 2,
					y: c - te / 2,
					width: u + te,
					height: d + te
				}))) : null, !h && this.renderCurve(y, b), this.renderErrorBar(y, b), (h || r) && this.renderDots(y, ee, b), (!f || m) && Vt.renderCallByParent(this.props, i));
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
				for (var n = e.length % 2 == 0 ? e : [].concat(Hc(e), [0]), r = [], i = 0; i < t; ++i) r = [].concat(Hc(r), Hc(n));
				return r;
			}
		},
		{
			key: "renderDotItem",
			value: function(e, t) {
				var r;
				if (/*#__PURE__*/ N.isValidElement(e)) r = /*#__PURE__*/ N.cloneElement(e, t);
				else if ((0, V.default)(e)) r = e(t);
				else {
					var i = t.key, a = Lc(t, Fc), o = n("recharts-line-dot", typeof e == "boolean" ? "" : e.className);
					r = /*#__PURE__*/ N.createElement(jn, zc({ key: i }, a, { className: o }));
				}
				return r;
			}
		}
	]);
}(Or);
il(sl, "displayName", "Line"), il(sl, "defaultProps", {
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
	isAnimationActive: !It.isSsr,
	animateNewValues: !0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	hide: !1,
	label: !1
}), il(sl, "getComposedData", function(e) {
	var t = e.props, n = e.xAxis, r = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize, c = e.displayedData, l = e.offset, u = t.layout;
	return Vc({
		points: c.map(function(e, t) {
			var c = Wt(e, o);
			return u === "horizontal" ? {
				x: jt({
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
				y: jt({
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
function cl(e) {
	"@babel/helpers - typeof";
	return cl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, cl(e);
}
function ll(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function ul(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, bl(r.key), r);
	}
}
function dl(e, t, n) {
	return t && ul(e.prototype, t), n && ul(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fl(e, t, n) {
	return t = gl(t), pl(e, hl() ? Reflect.construct(t, n || [], gl(e).constructor) : t.apply(e, n));
}
function pl(e, t) {
	if (t && (cl(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return ml(e);
}
function ml(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function hl() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (hl = function() {
		return !!e;
	})();
}
function gl(e) {
	return gl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, gl(e);
}
function _l(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vl(e, t);
}
function vl(e, t) {
	return vl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, vl(e, t);
}
function yl(e, t, n) {
	return t = bl(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function bl(e) {
	var t = xl(e, "string");
	return cl(t) == "symbol" ? t : t + "";
}
function xl(e, t) {
	if (cl(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (cl(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Sl = /*#__PURE__*/ function(e) {
	function t() {
		return ll(this, t), fl(this, t, arguments);
	}
	return _l(t, e), dl(t, [{
		key: "render",
		value: function() {
			return null;
		}
	}]);
}(N.Component);
yl(Sl, "displayName", "ZAxis"), yl(Sl, "defaultProps", {
	zAxisId: 0,
	range: [64, 64],
	scale: "auto",
	type: "number"
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/util/ScatterUtils.js
var Cl = ["option", "isActive"];
function wl() {
	return wl = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, wl.apply(this, arguments);
}
function Tl(e, t) {
	if (e == null) return {};
	var n = El(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function El(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Dl(e) {
	var t = e.option, n = e.isActive, r = Tl(e, Cl);
	return typeof t == "string" ? /*#__PURE__*/ N.createElement(Ot, wl({
		option: /*#__PURE__*/ N.createElement(wt, wl({ type: t }, r)),
		isActive: n,
		shapeType: "symbols"
	}, r)) : /*#__PURE__*/ N.createElement(Ot, wl({
		option: t,
		isActive: n,
		shapeType: "symbols"
	}, r));
}
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Scatter.js
function Ol(e) {
	"@babel/helpers - typeof";
	return Ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ol(e);
}
function kl() {
	return kl = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, kl.apply(this, arguments);
}
function Al(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function jl(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Al(Object(n), !0).forEach(function(t) {
			Hl(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Al(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ml(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Nl(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ul(r.key), r);
	}
}
function Pl(e, t, n) {
	return t && Nl(e.prototype, t), n && Nl(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fl(e, t, n) {
	return t = zl(t), Il(e, Rl() ? Reflect.construct(t, n || [], zl(e).constructor) : t.apply(e, n));
}
function Il(e, t) {
	if (t && (Ol(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Ll(e);
}
function Ll(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Rl() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Rl = function() {
		return !!e;
	})();
}
function zl(e) {
	return zl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, zl(e);
}
function Bl(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vl(e, t);
}
function Vl(e, t) {
	return Vl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Vl(e, t);
}
function Hl(e, t, n) {
	return t = Ul(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ul(e) {
	var t = Wl(e, "string");
	return Ol(t) == "symbol" ? t : t + "";
}
function Wl(e, t) {
	if (Ol(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ol(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Gl = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		Ml(this, t);
		var n = [...arguments];
		return e = Fl(this, t, [].concat(n)), Hl(e, "state", { isAnimationFinished: !1 }), Hl(e, "handleAnimationEnd", function() {
			e.setState({ isAnimationFinished: !0 });
		}), Hl(e, "handleAnimationStart", function() {
			e.setState({ isAnimationFinished: !1 });
		}), Hl(e, "id", cn("recharts-scatter-")), e;
	}
	return Bl(t, e), Pl(t, [
		{
			key: "renderSymbolsStatically",
			value: function(e) {
				var t = this, n = this.props, r = n.shape, i = n.activeShape, a = n.activeIndex, o = A(this.props, !1);
				return e.map(function(e, n) {
					var s = a === n, c = s ? i : r, l = jl(jl({}, o), e);
					return /*#__PURE__*/ N.createElement(j, kl({
						className: "recharts-scatter-symbol",
						key: `symbol-${e?.cx}-${e?.cy}-${e?.size}-${n}`
					}, rn(t.props, e, n), { role: "img" }), /*#__PURE__*/ N.createElement(Dl, kl({
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
				return /*#__PURE__*/ N.createElement(At, {
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
							var i = on(n.cx, e.cx), a = on(n.cy, e.cy), o = on(n.size, e.size);
							return jl(jl({}, e), {}, {
								cx: i(r),
								cy: a(r),
								size: o(r)
							});
						}
						var s = on(0, e.size);
						return jl(jl({}, e), {}, { size: s(r) });
					});
					return /*#__PURE__*/ N.createElement(j, null, e.renderSymbolsStatically(i));
				});
			}
		},
		{
			key: "renderSymbols",
			value: function() {
				var e = this.props, t = e.points, n = e.isAnimationActive, r = this.state.prevPoints;
				return n && t && t.length && (!r || !(0, Qa.default)(r, t)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(t);
			}
		},
		{
			key: "renderErrorBar",
			value: function() {
				if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
				var e = this.props, t = e.points, n = e.xAxis, r = e.yAxis, i = e.children, a = En(i, Pn);
				return a ? a.map(function(e, i) {
					var a = e.props, o = a.direction, s = a.dataKey;
					return /*#__PURE__*/ N.cloneElement(e, {
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
								errorVal: Wt(e, t)
							};
						}
					});
				}) : null;
			}
		},
		{
			key: "renderLine",
			value: function() {
				var e = this.props, t = e.points, n = e.line, r = e.lineType, i = e.lineJointType, a = A(this.props, !1), o = A(n, !1), s, c;
				if (r === "joint") s = t.map(function(e) {
					return {
						x: e.cx,
						y: e.cy
					};
				});
				else if (r === "fitting") {
					var l = Sn(t), u = l.xmin, d = l.xmax, f = l.a, p = l.b, m = function(e) {
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
				var h = jl(jl(jl({}, a), {}, {
					fill: "none",
					stroke: a && a.fill
				}, o), {}, { points: s });
				return c = /*#__PURE__*/ N.isValidElement(n) ? /*#__PURE__*/ N.cloneElement(n, h) : (0, V.default)(n) ? n(h) : /*#__PURE__*/ N.createElement(kt, kl({}, h, { type: i })), /*#__PURE__*/ N.createElement(j, {
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
				return /*#__PURE__*/ N.createElement(j, {
					className: h,
					clipPath: v ? `url(#clipPath-${y})` : null
				}, g || _ ? /*#__PURE__*/ N.createElement("defs", null, /*#__PURE__*/ N.createElement("clipPath", { id: `clipPath-${y}` }, /*#__PURE__*/ N.createElement("rect", {
					x: g ? c : c - u / 2,
					y: _ ? l : l - d / 2,
					width: g ? u : u * 2,
					height: _ ? d : d * 2
				}))) : null, i && this.renderLine(), this.renderErrorBar(), /*#__PURE__*/ N.createElement(j, { key: "recharts-scatter-symbols" }, this.renderSymbols()), (!p || m) && Vt.renderCallByParent(this.props, r));
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
}(Or);
Hl(Gl, "displayName", "Scatter"), Hl(Gl, "defaultProps", {
	xAxisId: 0,
	yAxisId: 0,
	zAxisId: 0,
	legendType: "circle",
	lineType: "joint",
	lineJointType: "linear",
	data: [],
	shape: "circle",
	hide: !1,
	isAnimationActive: !It.isSsr,
	animationBegin: 0,
	animationDuration: 400,
	animationEasing: "linear"
}), Hl(Gl, "getComposedData", function(e) {
	var t = e.xAxis, n = e.yAxis, r = e.zAxis, i = e.item, a = e.displayedData, o = e.xAxisTicks, s = e.yAxisTicks, c = e.offset, l = i.props.tooltipType, u = En(i.props.children, Zt), d = (0, H.default)(t.dataKey) ? i.props.dataKey : t.dataKey, f = (0, H.default)(n.dataKey) ? i.props.dataKey : n.dataKey, p = r && r.dataKey, m = r ? r.range : Sl.defaultProps.range, h = m && m[0], g = t.scale.bandwidth ? t.scale.bandwidth() : 0, _ = n.scale.bandwidth ? n.scale.bandwidth() : 0;
	return jl({ points: a.map(function(e, a) {
		var c = Wt(e, d), m = Wt(e, f), v = !(0, H.default)(p) && Wt(e, p) || "-", y = [{
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
		var b = jt({
			axis: t,
			ticks: o,
			bandSize: g,
			entry: e,
			index: a,
			dataKey: d
		}), x = jt({
			axis: n,
			ticks: s,
			bandSize: _,
			entry: e,
			index: a,
			dataKey: f
		}), S = v === "-" ? h : r.scale(v), C = Math.sqrt(Math.max(S, 0) / Math.PI);
		return jl(jl({}, e), {}, {
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
var Kl = On({
	chartName: "LineChart",
	GraphicalChild: sl,
	axisComponents: [{
		axisType: "xAxis",
		AxisComp: un
	}, {
		axisType: "yAxis",
		AxisComp: sn
	}],
	formatAxisMap: Mn
}), ql = On({
	chartName: "BarChart",
	GraphicalChild: Gt,
	defaultTooltipEventType: "axis",
	validateTooltipEventTypes: ["axis", "item"],
	axisComponents: [{
		axisType: "xAxis",
		AxisComp: un
	}, {
		axisType: "yAxis",
		AxisComp: sn
	}],
	formatAxisMap: Mn
}), Jl = On({
	chartName: "PieChart",
	GraphicalChild: Vs,
	validateTooltipEventTypes: ["item"],
	defaultTooltipEventType: "item",
	legendContent: "children",
	axisComponents: [{
		axisType: "angleAxis",
		AxisComp: Ss
	}, {
		axisType: "radiusAxis",
		AxisComp: ns
	}],
	formatAxisMap: gn,
	defaultProps: {
		layout: "centric",
		startAngle: 0,
		endAngle: 360,
		cx: "50%",
		cy: "50%",
		innerRadius: 0,
		outerRadius: "80%"
	}
}), Yl = On({
	chartName: "RadarChart",
	GraphicalChild: fc,
	axisComponents: [{
		axisType: "angleAxis",
		AxisComp: Ss
	}, {
		axisType: "radiusAxis",
		AxisComp: ns
	}],
	formatAxisMap: gn,
	defaultProps: {
		layout: "centric",
		startAngle: 90,
		endAngle: -270,
		cx: "50%",
		cy: "50%",
		innerRadius: 0,
		outerRadius: "80%"
	}
}), Xl = On({
	chartName: "ComposedChart",
	GraphicalChild: [
		sl,
		Cn,
		Gt,
		Gl
	],
	axisComponents: [
		{
			axisType: "xAxis",
			AxisComp: un
		},
		{
			axisType: "yAxis",
			AxisComp: sn
		},
		{
			axisType: "zAxis",
			AxisComp: Sl
		}
	],
	formatAxisMap: Mn
}), Zl = r({ variants: { aspect: {
	square: "aspect-square",
	wide: "aspect-video",
	small: "h-40"
} } }), Ql = {
	light: "",
	dark: ".dark"
}, $l = M.createContext(null);
function eu() {
	let e = M.useContext($l);
	if (!e) throw Error("useChart must be used within a <ChartContainer />");
	return e;
}
var tu = M.forwardRef(({ id: e, className: t, children: n, aspect: r, config: i, ...a }, o) => {
	let s = M.useId(), c = `chart-${e || s.replace(/:/g, "")}`, l = M.useRef(null), [u, d] = L(), f = Fr(() => new ResizeObserver((e) => d(e[0].contentRect.height)), []);
	return Pr(() => {
		let e = o && "current" in o ? o.current : l.current;
		return e && f.observe(e.parentElement), () => {
			f.disconnect();
		};
	}, [
		f,
		o,
		l
	]), /* @__PURE__ */ R($l.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ z("div", {
			"data-chromatic": "ignore",
			"data-chart": c,
			ref: o || l,
			className: g("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", r ? Zl({ aspect: r }) : "aspect-auto h-full", t),
			...a,
			children: [/* @__PURE__ */ R(nu, {
				id: c,
				config: i
			}), /* @__PURE__ */ R(Mt, {
				height: u,
				className: "overflow-visible",
				children: n
			})]
		})
	});
});
tu.displayName = "Chart";
var nu = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([e, t]) => t.theme || t.color);
	if (!n.length) return null;
	let r = Object.entries(Ql).map(([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
		let r = n.theme?.[t] || n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`);
	return /* @__PURE__ */ R("style", { dangerouslySetInnerHTML: { __html: o.sanitize(r.join("\n")) } });
}, ru = Tn, iu = M.forwardRef(({ active: e, payload: t, className: n, indicator: r = "dot", hideLabel: i = !1, hideIndicator: a = !1, label: o, labelFormatter: s, labelClassName: c, formatter: l, yAxisFormatter: u, color: d, nameKey: f, labelKey: p }, m) => {
	let { config: h } = eu(), _ = M.useMemo(() => {
		if (i || !t?.length) return null;
		let [e] = t, n = `${p || e.dataKey || e.name || "value"}`, r = cu(h, e, n), a = !p && typeof o == "string" ? h[o]?.label || o : r?.label;
		return s ? /* @__PURE__ */ R("div", {
			className: g("font-medium", c),
			children: s(a, t)
		}) : a ? /* @__PURE__ */ R("div", {
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
	return /* @__PURE__ */ z("div", {
		ref: m,
		className: g("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary px-3 py-2.5 text-base shadow-lg backdrop-blur", n),
		children: [v ? null : _, /* @__PURE__ */ R("div", {
			className: "grid gap-2",
			children: t.map((e, t) => {
				let n = `${f || e.name || e.dataKey || "value"}`, i = cu(h, e, n), o = d || e.payload.fill || e.color;
				return /* @__PURE__ */ R("div", {
					className: g("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", r === "dot" && "items-center"),
					children: l && e?.value !== void 0 && e.name ? l(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ z(Lr, { children: [i?.icon ? /* @__PURE__ */ R(i.icon, {}) : !a && /* @__PURE__ */ R("div", {
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
					}), /* @__PURE__ */ z("div", {
						className: g("flex flex-1 justify-between text-sm leading-none", v ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ z("div", {
							className: "grid gap-2",
							children: [v ? _ : null, /* @__PURE__ */ R("span", {
								className: "pr-2 text-f1-foreground",
								children: i?.label || e.name
							})]
						}), e.value && /* @__PURE__ */ R("span", {
							className: "font-mono font-medium tabular-nums text-f1-foreground",
							children: u ? u(String(e.value)) : e.value.toLocaleString()
						})]
					})] })
				}, e.dataKey);
			})
		})]
	});
});
iu.displayName = "ChartTooltip";
var au = {
	strong: .4,
	faint: .05
}, ou = $t, su = M.forwardRef(({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i, hiddenKey: a, leftShift: o = 0 }, s) => {
	let { config: c } = eu();
	return n?.length ? /* @__PURE__ */ R("div", {
		ref: s,
		className: g("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", r === "top" ? "pb-2" : "pt-2", e),
		style: { marginLeft: o },
		children: n.map((e) => {
			let n = `${i || e.dataKey || "value"}`, r = cu(c, e, n, a);
			return /* @__PURE__ */ z("div", {
				className: g("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"),
				children: [r?.icon && !t ? /* @__PURE__ */ R(r.icon, {}) : r && /* @__PURE__ */ R("div", {
					className: "h-2 w-2 shrink-0 rounded-full",
					style: r.projected ? { background: `linear-gradient(to bottom, color-mix(in srgb, ${e.color} ${au.strong * 100}%, transparent), color-mix(in srgb, ${e.color} ${au.faint * 100}%, transparent))` } : { backgroundColor: e.color }
				}), /* @__PURE__ */ R("span", {
					className: "text-f1-foreground",
					children: r?.label
				})]
			}, JSON.stringify(e));
		})
	}) : null;
});
su.displayName = "ChartLegend";
function cu(e, t, n, r) {
	if (typeof t != "object" || !t) return;
	let i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, a = n;
	if (n in t && typeof t[n] == "string" ? a = t[n] : i && n in i && typeof i[n] == "string" ? a = i[n] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(r && r === a)) return a in e ? e[a] : e[n];
}
//#endregion
//#region src/kits/Charts/utils/elements.tsx
function lu(e, t = "12px Inter, sans-serif") {
	let n = document.createElement("canvas").getContext("2d");
	return n ? (n.font = t, n.measureText(e).width) : 0;
}
var uu = (e) => ({
	dataKey: "x",
	domain: e?.domain,
	tickLine: !1,
	axisLine: !1,
	tickMargin: 8,
	ticks: e?.ticks,
	tickCount: e?.tickCount,
	tickFormatter: e?.tickFormatter
}), du = (e) => ({
	tickLine: !1,
	axisLine: !1,
	domain: e?.domain,
	tickMargin: 8,
	ticks: e?.ticks,
	tickCount: e?.tickCount,
	tickFormatter: e?.tickFormatter
}), fu = () => ({
	vertical: !1,
	strokeDasharray: "4"
}), pu = (e = !1) => ({
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
function mu(e) {
	return Ar(e);
}
//#endregion
//#region src/kits/Charts/utils/muncher.ts
function hu(e) {
	return e.map((e) => ({
		x: e.label,
		...e.values
	}));
}
//#endregion
//#region src/kits/Charts/AreaChart/index.tsx
var gu = ({ index: e, visibleTicksCount: t, payload: n, tickFormatter: r, ...i }) => {
	let a = e === 0, o = e === t - 1;
	return /* @__PURE__ */ R(qt, {
		...i,
		textAnchor: a ? "start" : o ? "end" : "middle",
		children: r?.(n.value, n.index) ?? n.value
	});
}, _u = mu(({ data: e, dataConfig: t, xAxis: n, yAxis: r, canBeBlurred: i, blurArea: a, lineType: o = "monotoneX", aspect: s, marginTop: c = 0 }, l) => {
	let { enabled: u } = za(), d = Object.keys(t), f = ve(12), p = hu(e), m = Math.max(...p.flatMap((e) => d.map((t) => lu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`)))), h = r?.width ?? m + 20, g = !r?.hide, _ = !n?.hide, v = !i || !u;
	return /* @__PURE__ */ R(tu, {
		config: t,
		ref: l,
		aspect: s,
		children: /* @__PURE__ */ z(vn, {
			accessibilityLayer: !0,
			data: p,
			className: "overflow-visible [&_.recharts-surface]:overflow-visible",
			margin: { top: c },
			children: [
				/* @__PURE__ */ z("defs", { children: [
					/* @__PURE__ */ z("linearGradient", {
						id: `${f}-fadeGradient`,
						gradientUnits: "userSpaceOnUse",
						x1: `${g ? h : 0}`,
						y1: "0",
						x2: "100%",
						y2: "0",
						children: [
							(a === "l" || a === "lr") && /* @__PURE__ */ z(Lr, { children: [
								/* @__PURE__ */ R("stop", {
									offset: "0%",
									stopColor: "black",
									stopOpacity: "0"
								}),
								/* @__PURE__ */ R("stop", {
									offset: "1%",
									stopColor: "white",
									stopOpacity: "0.1"
								}),
								/* @__PURE__ */ R("stop", {
									offset: "7%",
									stopColor: "white",
									stopOpacity: "1"
								})
							] }),
							(a === "r" || a === "lr") && /* @__PURE__ */ z(Lr, { children: [
								/* @__PURE__ */ R("stop", {
									offset: "93%",
									stopColor: "white",
									stopOpacity: "1"
								}),
								/* @__PURE__ */ R("stop", {
									offset: "99%",
									stopColor: "white",
									stopOpacity: "0.1"
								}),
								/* @__PURE__ */ R("stop", {
									offset: "100%",
									stopColor: "black",
									stopOpacity: "0"
								})
							] }),
							!a && /* @__PURE__ */ z(Lr, { children: [/* @__PURE__ */ R("stop", {
								offset: "0%",
								stopColor: "white",
								stopOpacity: "1"
							}), /* @__PURE__ */ R("stop", {
								offset: "100%",
								stopColor: "white",
								stopOpacity: "1"
							})] })
						]
					}),
					/* @__PURE__ */ R("mask", {
						id: `${f}-transparent-edges`,
						maskUnits: "userSpaceOnUse",
						maskContentUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ R("rect", {
							x: "0",
							y: "0",
							width: "100%",
							height: "100%",
							fill: `url(#${f}-fadeGradient)`
						})
					}),
					d.map((e, n) => /* @__PURE__ */ z("linearGradient", {
						id: `fill${String(e)}-${f}`,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ R("stop", {
							offset: "5%",
							stopColor: t[e].color ? Gn(t[e].color) : Kn(n),
							stopOpacity: .8
						}), /* @__PURE__ */ R("stop", {
							offset: "95%",
							stopColor: t[e].color ? Gn(t[e].color) : Kn(n),
							stopOpacity: .1
						})]
					}, n))
				] }),
				/* @__PURE__ */ R(Nc, {
					...fu(),
					mask: `url(#${f}-transparent-edges)`
				}),
				_ && /* @__PURE__ */ R(un, {
					dataKey: "x",
					tickLine: !1,
					axisLine: !1,
					tickMargin: 8,
					tickFormatter: n?.tickFormatter,
					ticks: n?.ticks,
					domain: n?.domain,
					interval: 0,
					tick: gu
				}),
				g && /* @__PURE__ */ R(sn, {
					tickLine: !1,
					axisLine: !1,
					tickMargin: 8,
					tickCount: r?.tickCount,
					tickFormatter: i && u ? () => "**" : r?.tickFormatter,
					ticks: r?.ticks,
					domain: r?.domain,
					width: h
				}),
				v && /* @__PURE__ */ R(ru, {
					...pu(),
					content: /* @__PURE__ */ R(iu, {
						indicator: "dot",
						yAxisFormatter: r?.tickFormatter
					})
				}),
				d.map((e, n) => /* @__PURE__ */ R(Cn, {
					isAnimationActive: !1,
					dataKey: e,
					type: o,
					mask: `url(#${f}-transparent-edges)`,
					fill: `url(#fill${e}-${f})`,
					fillOpacity: t[e].dashed ? 0 : .4,
					stroke: t[e].color ? Gn(t[e].color) : Kn(n),
					strokeWidth: 1.5,
					strokeDasharray: t[e].dashed ? "4 4" : void 0
				}, e)),
				Object.keys(t).length > 1 && /* @__PURE__ */ R(ou, {
					className: "flex justify-start",
					content: /* @__PURE__ */ R(su, {})
				})
			]
		})
	});
}), vu = mu(({ dataConfig: e, data: t, xAxis: n, yAxis: r = { hide: !0 }, label: i = !1, type: a = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: c, legend: l, showValueUnderLabel: u = !1, highlightLastBar: d = !1, onClick: f }, p) => {
	let m = Object.keys(e), h = hu(t).map((t, n, r) => d && m.length === 1 && !e[m[0]]?.color ? {
		...t,
		fill: n === r.length - 1 ? Kn(n) : Kn(n, .5)
	} : t), g = Math.max(...h.flatMap((e) => m.map((t) => lu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`))));
	return /* @__PURE__ */ R(tu, {
		config: e,
		ref: p,
		aspect: c,
		children: /* @__PURE__ */ z(ql, {
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
				!o && /* @__PURE__ */ R(ru, {
					...pu(),
					content: /* @__PURE__ */ R(iu, { yAxisFormatter: r.tickFormatter })
				}),
				!s && /* @__PURE__ */ R(Nc, { ...fu() }),
				/* @__PURE__ */ R(sn, {
					...du(r),
					tick: !0,
					width: r.width ?? g + 20,
					hide: r.hide
				}),
				/* @__PURE__ */ R(un, {
					...uu(n),
					hide: n?.hide,
					tick: u ? (e) => {
						let { x: n, y: i, payload: a } = e, o = t.find((e) => e.label === a.value)?.values || "", s = Object.keys(o).length === 1 ? Object.values(o)?.[0] : void 0, c = s !== void 0 && r.tickFormatter ? r.tickFormatter(`${s}`) : s.toLocaleString();
						return /* @__PURE__ */ z("g", {
							transform: `translate(${n},${i})`,
							children: [/* @__PURE__ */ R("text", {
								x: 0,
								y: 0,
								dy: 12,
								textAnchor: "middle",
								className: "text-sm font-medium !text-f1-foreground-secondary",
								children: a.value
							}), !!s && /* @__PURE__ */ R("text", {
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
				m.map((t, n) => /* @__PURE__ */ R(Gt, {
					isAnimationActive: !1,
					dataKey: t,
					stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
					fill: d ? ((e) => e.fill) : e[t].color ? Gn(e[t].color) : Kn(n),
					radius: a === "stacked-by-sign" ? [
						4,
						4,
						0,
						0
					] : 4,
					maxBarSize: 32,
					children: i && /* @__PURE__ */ R(Vt, {
						position: "top",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12
					}, `label-${t}`)
				}, `bar-${t}`)),
				l && /* @__PURE__ */ R(ou, {
					content: /* @__PURE__ */ R(su, { nameKey: "label" }),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
}), yu = mu(({ data: e, legend: t = !0, hideTooltip: n = !1 }, r) => {
	let i = e.reduce((e, t) => e + t.value, 0), [a, o] = L(void 0), s = Qn(e, i, (e, t) => e.color ? Gn(e.color) : Kn(t)), c = or(s, i);
	return /* @__PURE__ */ z(vt, {
		delayDuration: 350,
		children: [/* @__PURE__ */ R("div", {
			className: "w-full",
			ref: r,
			children: /* @__PURE__ */ z(yt, { children: [/* @__PURE__ */ R(_t, {
				asChild: !0,
				children: /* @__PURE__ */ R("div", {
					className: g("pointer-events-auto flex h-2 w-full cursor-default gap-1 overflow-hidden", h()),
					onMouseLeave: () => o(void 0),
					onMouseOver: (e) => {
						e.target === e.currentTarget && o(void 0);
					},
					role: "group",
					"aria-label": "Category bar chart",
					tabIndex: s.length > 0 ? 0 : void 0,
					children: s.map((e) => /* @__PURE__ */ R("div", {
						className: "pointer-events-auto h-full overflow-hidden rounded-2xs",
						style: {
							width: `${e.percentage}%`,
							backgroundColor: e.color
						},
						role: "img",
						"aria-label": `${e.name}: ${e.value} (${er(e.value, i)}%)`,
						onMouseEnter: () => o(e.key)
					}, e.key))
				})
			}), !n && c.length > 0 && /* @__PURE__ */ R(Xn, {
				items: c,
				activeKey: a
			})] })
		}), t && /* @__PURE__ */ R("div", {
			className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
			role: "list",
			children: e.map((e, t) => {
				let n = e.color ? Gn(e.color) : Kn(t);
				return /* @__PURE__ */ z("div", {
					className: "flex items-center gap-1.5",
					role: "listitem",
					children: [/* @__PURE__ */ R("div", {
						className: "h-2 w-2 shrink-0 rounded-full",
						style: { backgroundColor: n }
					}), /* @__PURE__ */ R("span", {
						className: "text-f1-foreground",
						children: e.name
					})]
				}, e.name);
			})
		})]
	});
}), bu = Object.assign(({ stackKeys: e, ...t }) => {
	let n = Mr().replace(/:/g, ""), r = (e) => `projected-bar-${n}-${e}`, i = (n) => {
		let { payload: i, ...a } = n, o = (e) => {
			let t = i?.[e];
			return typeof t == "number" ? t : 0;
		}, s = o(String(t.dataKey)), c = `url(#${r(s < 0 ? "negative" : "positive")})`;
		if (!e) return /* @__PURE__ */ R(Kt, {
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
		return /* @__PURE__ */ R(Kt, {
			...a,
			fill: c,
			radius: l
		});
	};
	return /* @__PURE__ */ z(Lr, { children: [/* @__PURE__ */ R("defs", { children: ["positive", "negative"].map((e) => /* @__PURE__ */ z("linearGradient", {
		id: r(e),
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ R("stop", {
			offset: "0%",
			stopColor: t.fill,
			stopOpacity: e === "positive" ? au.strong : au.faint
		}), /* @__PURE__ */ R("stop", {
			offset: "100%",
			stopColor: t.fill,
			stopOpacity: e === "positive" ? au.faint : au.strong
		})]
	}, e)) }), /* @__PURE__ */ R(Gt, {
		...t,
		shape: i
	})] });
}, {
	displayName: Gt.displayName,
	defaultProps: Gt.defaultProps,
	getComposedData: Gt.getComposedData
}), xu = (e) => {
	let t = (t) => {
		let { cx: n, cy: r, fill: i, payload: a } = t, o = () => {
			if (!a) return "-";
			if (a[e] !== void 0) return a[e];
			for (let [e, t] of Object.entries(a)) if (typeof t == "number" && e !== "x") return t;
			return "-";
		};
		return /* @__PURE__ */ R("circle", {
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
}, Su = (e, t, n) => {
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
		return /* @__PURE__ */ R(Kt, {
			...a,
			radius: c
		});
	};
	return r.displayName = `StackedBar-${e}`, r;
}, Cu = mu(({ dataConfig: e, data: t, xAxis: n, yAxis: r = { hide: !0 }, label: i = !1, hideTooltip: a = !1, hideGrid: o = !1, aspect: s, legend: c, showValueUnderLabel: l = !1, bar: u, line: d, scatter: f, onClick: p }, m) => {
	let h = hu(t), g = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], _ = u?.type === "stacked" || u?.type === "stacked-by-sign", v = new Set(g.filter((t) => e[t].projected).map(String)), y = (t, n) => e[t].color ? Gn(e[t].color) : Kn(n), b = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], x = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], S = [
		...g,
		...b,
		...x
	], C = Math.max(...h.flatMap((e) => S.map((t) => lu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`)))), w = [
		u,
		d,
		f
	].filter((e) => e?.axisPosition === "left"), T = [
		u,
		d,
		f
	].filter((e) => e?.axisPosition === "right");
	return /* @__PURE__ */ R(tu, {
		config: e,
		ref: m,
		aspect: s,
		children: /* @__PURE__ */ z(Xl, {
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
				!a && /* @__PURE__ */ R(ru, {
					...pu(),
					content: /* @__PURE__ */ R(iu, { yAxisFormatter: r.tickFormatter })
				}),
				!o && /* @__PURE__ */ R(Nc, { ...fu() }),
				w.length > 0 && /* @__PURE__ */ R(sn, {
					...du(r),
					tick: !0,
					width: r.width ?? C + 20 + (T.length > 0 && w[0]?.axisLabel ? 20 : 0),
					hide: r.hide || w.some((e) => e?.hideAxis),
					label: w[0]?.axisLabel ? {
						value: w[0].axisLabel,
						angle: -90,
						position: "insideLeft"
					} : void 0
				}),
				T.length > 0 && /* @__PURE__ */ R(sn, {
					...du(r),
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
				/* @__PURE__ */ R(un, {
					...uu(n),
					hide: n?.hide,
					tick: l ? (e) => {
						let { x: n, y: i, payload: a } = e, o = t.find((e) => e.label === a.value)?.values || "", s = Object.keys(o).length === 1 ? Object.values(o)?.[0] : void 0, c = s !== void 0 && r.tickFormatter ? r.tickFormatter(`${s}`) : s.toLocaleString();
						return /* @__PURE__ */ z("g", {
							transform: `translate(${n},${i})`,
							children: [/* @__PURE__ */ R("text", {
								x: 0,
								y: 0,
								dy: 12,
								textAnchor: "middle",
								className: "text-sm font-medium !text-f1-foreground-secondary",
								children: a.value
							}), !!s && /* @__PURE__ */ R("text", {
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
					}, r = i && /* @__PURE__ */ R(Vt, {
						position: "top",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12
					}, `label-${String(e)}`);
					return v.has(String(e)) ? /* @__PURE__ */ R(bu, {
						...n,
						stackKeys: _ ? g.map(String) : void 0,
						children: r
					}, `bar-${String(e)}`) : /* @__PURE__ */ R(Gt, {
						...n,
						shape: _ ? Su(String(e), g.map(String), v) : void 0,
						children: r
					}, `bar-${String(e)}`);
				}),
				b.map((t, n) => {
					let r = e[t].color ? Gn(e[t].color) : Kn(g.length + n);
					return /* @__PURE__ */ R(sl, {
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
				x.map((t, n) => /* @__PURE__ */ R(Gl, {
					dataKey: String(t),
					fill: e[t].color ? Gn(e[t].color) : Kn(g.length + b.length + n),
					r: 4,
					isAnimationActive: !1,
					yAxisId: f?.axisPosition === "right" ? "right" : void 0,
					shape: xu(String(t))
				}, `scatter-${String(t)}`)),
				c && /* @__PURE__ */ R(ou, {
					content: /* @__PURE__ */ R(su, { nameKey: "label" }),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
}), wu = mu(({ data: e, dataConfig: t, xAxis: n, yAxis: r = { hide: !0 }, lineType: i = "natural", aspect: a, hideTooltip: o = !1, hideGrid: s = !1 }, c) => {
	let l = Object.keys(t), u = hu(e), d = Math.max(...u.flatMap((e) => l.map((t) => lu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`))));
	return /* @__PURE__ */ R(tu, {
		config: t,
		ref: c,
		aspect: a,
		children: /* @__PURE__ */ z(Kl, {
			accessibilityLayer: !0,
			data: u,
			margin: {
				left: r && !r.hide ? 0 : 12,
				right: 12
			},
			children: [
				!s && /* @__PURE__ */ R(Nc, { ...fu() }),
				!n?.hide && /* @__PURE__ */ R(un, { ...uu(n) }),
				!r?.hide && /* @__PURE__ */ R(sn, {
					...du(r),
					width: r.width ?? d + 20
				}),
				!o && /* @__PURE__ */ R(ru, {
					...pu(),
					content: /* @__PURE__ */ R(iu, { yAxisFormatter: r?.tickFormatter })
				}),
				l.map((e, n) => /* @__PURE__ */ R(sl, {
					dataKey: e,
					isAnimationActive: !1,
					type: i,
					stroke: t[e].color ? Gn(t[e].color) : Kn(n),
					strokeWidth: 1.5,
					strokeDasharray: t[e].dashed ? "4 4" : void 0,
					dot: !1
				}, e))
			]
		})
	});
}), Tu = mu(({ data: e, dataConfig: t, overview: n, aspect: r, tickFormatter: i }, a) => {
	let o = e.map((e, n) => ({
		...e,
		fill: t[e.label]?.color ? Gn(t[e.label].color) : Kn(n)
	})), s = e.map((e) => e.value).reduce((e, t) => e + t);
	return s === 0 && o.push({
		label: "-",
		value: 1,
		fill: "hsl(var(--neutral-2))"
	}), /* @__PURE__ */ R(tu, {
		config: t,
		ref: a,
		aspect: r,
		"data-chromatic": "ignore",
		style: { height: 380 },
		children: /* @__PURE__ */ z(Jl, {
			accessibilityLayer: !0,
			margin: {
				left: 0,
				right: 0
			},
			children: [
				s !== 0 && /* @__PURE__ */ R(ru, {
					isAnimationActive: !1,
					content: /* @__PURE__ */ R(iu, { yAxisFormatter: i })
				}),
				/* @__PURE__ */ z(Vs, {
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
						return /* @__PURE__ */ R(Zt, {
							fill: e.fill,
							"aria-label": `${e.label}: ${n} (${(e.value / s * 100).toFixed(0)}%)`
						}, `cell-${t}`);
					}), /* @__PURE__ */ R(Tt, { content: ({ viewBox: e }) => {
						if (e && "cx" in e && "cy" in e) return /* @__PURE__ */ z("text", {
							x: e.cx,
							y: e.cy,
							textAnchor: "middle",
							dominantBaseline: "middle",
							children: [/* @__PURE__ */ R("tspan", {
								x: e.cx,
								y: (e.cy || 0) + 8,
								className: "fill-f1-foreground text-4xl font-semibold",
								children: n?.number ? i ? i(String(n.number)) : n.number : null
							}), /* @__PURE__ */ R("tspan", {
								x: e.cx,
								y: (e.cy || 0) - 16,
								className: "fill-f1-foreground-secondary",
								children: n?.label
							})]
						});
					} })]
				}),
				/* @__PURE__ */ R(ou, {
					content: /* @__PURE__ */ R(su, {
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
}), Eu = mu(({ value: e, max: t = 100, label: n, color: r }, i) => {
	let a = Gn(r || "categorical-1"), o = e / t * 100;
	return /* @__PURE__ */ z("div", {
		className: "flex items-center space-x-2",
		"aria-live": "polite",
		children: [/* @__PURE__ */ R("div", {
			className: "flex-grow",
			children: /* @__PURE__ */ R(Hn, {
				color: a,
				value: o,
				className: "w-full",
				"aria-valuemin": 0,
				"aria-valuemax": t,
				"aria-valuenow": e,
				"aria-label": `${o.toFixed(1)}%`
			})
		}), n && /* @__PURE__ */ R("div", {
			className: "flex-shrink-0 text-sm font-medium",
			children: n
		})]
	});
}), Du = ({ series: e, hiddenKeys: t, onToggle: n }) => /* @__PURE__ */ R("div", {
	className: "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
	children: e.map(({ key: e, color: r, label: i }) => {
		let a = t.includes(e);
		return /* @__PURE__ */ z("button", {
			type: "button",
			className: g("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground", h(), a ? "opacity-40" : "opacity-100"),
			"aria-label": typeof i == "string" ? i : void 0,
			"aria-pressed": !a,
			onClick: () => n(e),
			children: [/* @__PURE__ */ R("span", {
				className: "h-2 w-2 shrink-0 rounded-full",
				style: { backgroundColor: r }
			}), /* @__PURE__ */ R("span", {
				className: "text-f1-foreground",
				children: i
			})]
		}, e);
	})
}), Ou = mu(({ data: e, dataConfig: t, scaleMin: n, scaleMax: r, aspect: i, defaultHiddenSeries: a, dataTestId: o }, s) => {
	let [l, u] = L(a ?? []), d = Object.entries(t).map(([e, t], n) => ({
		key: e,
		color: t.color ? Gn(t.color) : Kn(n),
		label: t.label
	})), f = (e) => {
		u((t) => t.includes(e) ? t.filter((t) => t !== e) : t.length >= d.length - 1 ? t : [...t, e]);
	}, p = e.map((e) => ({
		subject: e.label,
		...e.values
	}));
	return /* @__PURE__ */ R(c, {
		dataTestId: o,
		children: /* @__PURE__ */ R(tu, {
			config: t,
			ref: s,
			aspect: i,
			"data-chromatic": "ignore",
			children: /* @__PURE__ */ z(Yl, {
				accessibilityLayer: !0,
				data: p,
				children: [
					/* @__PURE__ */ R(ru, {
						cursor: !0,
						content: /* @__PURE__ */ R(iu, { indicator: "dot" })
					}),
					/* @__PURE__ */ R(Ao, { gridType: "circle" }),
					/* @__PURE__ */ R(Ss, { dataKey: "subject" }),
					/* @__PURE__ */ R(ns, {
						angle: 90,
						type: "number",
						domain: [n ?? "dataMin", r ?? "dataMax"]
					}),
					d.filter(({ key: e }) => !l.includes(e)).map(({ key: e, color: t, label: n }) => /* @__PURE__ */ R(fc, {
						dataKey: e,
						fill: t,
						stroke: t,
						strokeWidth: 1.5,
						fillOpacity: .3,
						label: n,
						isAnimationActive: !1
					}, e)),
					d.length > 1 && /* @__PURE__ */ R(ou, {
						iconType: "star",
						content: /* @__PURE__ */ R(Du, {
							series: d,
							hiddenKeys: l,
							onToggle: f
						})
					})
				]
			})
		})
	});
}), ku = S();
function Au(e) {
	return e.map((e) => ({
		x: e.label,
		...e.values
	}));
}
//#endregion
//#region src/kits/Charts/VerticalBarChart/index.tsx
var ju = (e) => {
	let t = (0, ku.cloneDeep)(e), n = "", r = 0;
	return t.forEach((e) => {
		delete e.x, Object.entries(e).forEach(([e, t]) => {
			r < t && (r = t, n = e);
		});
	}), n;
}, Mu = mu(({ dataConfig: e, data: t, xAxis: n = { hide: !0 }, yAxis: r, label: i = !1, aspect: a, hideTooltip: o = !1, hideGrid: s = !1, showRatio: c = !1, valueFormatter: l }, u) => {
	let d = Object.keys(e), f = Au(t), p = Math.max(...f.map((e) => lu(`${e.x}`))), m = d.reduce((e, n) => (e[n] = t.reduce((e, t) => e + t.values[n], 0), e), {}), h = {
		...uu(n),
		type: "number",
		dataKey: ju(f)
	}, g = {
		...du(r),
		type: "category",
		dataKey: "x"
	};
	return /* @__PURE__ */ R(tu, {
		config: e,
		ref: u,
		aspect: a,
		children: /* @__PURE__ */ z(ql, {
			layout: "vertical",
			accessibilityLayer: !0,
			data: f,
			margin: {
				left: r && !r.hide ? 8 : 12,
				right: i || c ? 100 : 0
			},
			children: [
				!o && /* @__PURE__ */ R(ru, {
					...pu(!0),
					content: /* @__PURE__ */ R(iu, { yAxisFormatter: r?.tickFormatter })
				}),
				!s && /* @__PURE__ */ R(Nc, {
					...fu(),
					vertical: !0,
					horizontal: !1
				}),
				/* @__PURE__ */ R(un, {
					...h,
					hide: n?.hide
				}),
				/* @__PURE__ */ R(sn, {
					...g,
					hide: r?.hide,
					width: r?.width ?? p + 20
				}),
				d.map((t, n) => /* @__PURE__ */ R(Lr, { children: /* @__PURE__ */ R(Gt, {
					isAnimationActive: !1,
					layout: "vertical",
					dataKey: t,
					fill: e[t].color ? Gn(e[t].color) : Kn(n),
					radius: 4,
					maxBarSize: 24,
					children: (i || c) && /* @__PURE__ */ R(Vt, {
						position: "right",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12,
						formatter: l,
						content: c ? /* @__PURE__ */ R(Nu, {
							valueFormatter: l,
							total: m[t],
							showLabel: i
						}) : void 0
					}, `label-{${t}}`)
				}, `bar-${t}`) }))
			]
		})
	});
}), Nu = ({ viewBox: e, offset: t = 0, value: n, valueFormatter: r, total: i, showLabel: a }) => {
	let { x: o = 0, y: s = 0, width: c = 0, height: l = 0 } = e, u = o + c + t, d = s + l / 2, f = r ? r(n) : n, p = lu(`${f}`), m = i > 0 ? Math.round(Number(n) / i * 100) : 0;
	return /* @__PURE__ */ z("g", {
		transform: `translate(${u},${d + 4})`,
		children: [a && /* @__PURE__ */ R("text", {
			x: 0,
			textAnchor: "start",
			className: "fill-f1-foreground-secondary text-sm font-medium",
			children: f
		}), /* @__PURE__ */ z("text", {
			x: a ? p + 8 : 0,
			textAnchor: "start",
			className: "fill-f1-foreground text-sm font-medium",
			children: [m, "%"]
		})]
	});
}, Pu = a(i({
	name: "AreaChart",
	type: "info"
}, _u)), Fu = a(i({
	name: "BarChart",
	type: "info"
}, vu)), Iu = a(i({
	name: "CategoryBarChart",
	type: "info"
}, yu)), Lu = a(i({
	name: "LineChart",
	type: "info"
}, wu)), Ru = a(i({
	name: "PieChart",
	type: "info"
}, Tu)), zu = a(i({
	name: "VerticalBarChart",
	type: "info"
}, Mu)), Bu = a(i({
	name: "ProgressBarChart",
	type: "info"
}, Eu)), Vu = a(i({
	name: "ComboChart",
	type: "info"
}, Cu)), Hu = a(i({
	name: "RadarChart",
	type: "info"
}, Ou)), Uu = (e, t = {}, n = 0) => {
	let r = I(t);
	r.current = t;
	let i = I(n);
	i.current = n;
	let [a, o] = L(!1), [s, c] = L(0), [l, u] = L(n), [d, f] = L(0), [p, m] = L(1), [h, g] = L(!0), [_, v] = L(null);
	F(() => {
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
	let y = P(() => {
		e.current?.play().catch(() => {});
	}, [e]), b = P(() => {
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
		toggle: P(() => {
			a ? b() : y();
		}, [
			a,
			y,
			b
		]),
		seek: P((t) => {
			let n = e.current;
			if (!n) return;
			let i = Number.isFinite(n.duration) ? n.duration : t, a = Math.min(Math.max(t, 0), i);
			n.currentTime = a, c(a), r.current.onSeek?.(a);
		}, [e]),
		setPlaybackRate: P((t) => {
			let n = e.current;
			n && (n.playbackRate = t, m(t));
		}, [e])
	};
}, Wu = [
	"sm",
	"md",
	"lg"
], Gu = ["compact", "expanded"], Ku = [
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
], qu = [
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
], Ju = Ar((e, t) => {
	let n = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, r = Mr();
	return /* @__PURE__ */ z("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		ref: t,
		...e,
		children: [/* @__PURE__ */ R("defs", { children: qu.map((e) => /* @__PURE__ */ R("clipPath", {
			id: `${r}-${e.id}`,
			children: /* @__PURE__ */ R("path", { d: e.path })
		}, e.id)) }), n ? qu.map((e) => /* @__PURE__ */ R("path", {
			d: e.path,
			fill: "currentColor"
		}, e.id)) : qu.map((e) => /* @__PURE__ */ R("foreignObject", {
			x: "0",
			y: "0",
			width: "24",
			height: "24",
			clipPath: `url(#${r}-${e.id})`,
			children: /* @__PURE__ */ R("div", { style: {
				width: "100%",
				height: "100%",
				background: "conic-gradient(from 0deg at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
			} })
		}, e.id))]
	});
});
//#endregion
//#region src/sds/UpsellingKit/ProductCard/index.tsx
function Yu({ title: e, description: t, onClick: n, onClose: r, isVisible: i, dismissable: a = !1, trackVisibility: o, type: s, ...c }) {
	let [u, d] = L(i);
	return F(() => {
		d(i), o && o(i);
	}, [i, o]), u && /* @__PURE__ */ R("div", { children: /* @__PURE__ */ R("div", {
		className: "p-2",
		children: /* @__PURE__ */ R("div", {
			style: s === "one-campaign" ? {
				background: "linear-gradient(98.39deg, rgba(249, 115, 22, 0.49) 0%, rgba(229, 25, 67, 0.49) 20%, rgba(229, 25, 67, 0.49) 49.97%, rgba(229, 25, 67, 0.49) 80%, rgba(164, 165, 222, 0.49) 100%)",
				borderRadius: "12px",
				padding: "1px"
			} : {},
			children: /* @__PURE__ */ z("div", {
				className: s === "one-campaign" ? "flex h-auto w-auto cursor-pointer flex-row gap-2 p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary" : "flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary",
				style: s === "one-campaign" ? {
					background: "#fef7f8",
					borderRadius: "11px"
				} : {},
				onClick: n,
				children: [/* @__PURE__ */ z(Lr, { children: [s === "one-campaign" ? /* @__PURE__ */ R("div", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ R(l, {
						icon: Ju,
						size: "lg",
						className: "!h-8 !w-8"
					})
				}) : /* @__PURE__ */ R("div", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ R(Sr, {
						module: c.module,
						size: "md"
					})
				}), /* @__PURE__ */ R("div", {
					className: "flex flex-1 flex-col",
					children: /* @__PURE__ */ z("div", { children: [/* @__PURE__ */ R("h3", {
						className: "text-lg font-medium",
						children: e
					}), /* @__PURE__ */ R("p", {
						className: "text-f1-foreground-secondary",
						children: t
					})] })
				})] }), a && /* @__PURE__ */ R("div", {
					className: "h-6 w-6",
					children: /* @__PURE__ */ R(k, {
						variant: "ghost",
						icon: hr,
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
var Xu = a(Yu), Zu = C, Qu = Ve, $u = Ar(function({ title: e, onClose: t, content: n, primaryAction: r, secondaryAction: i }, a) {
	return /* @__PURE__ */ z("div", {
		ref: a,
		className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
		"data-testid": "ai-banner",
		children: [/* @__PURE__ */ z("div", {
			className: "flex flex-row items-center justify-between px-4 py-2",
			children: [/* @__PURE__ */ R(s, {
				className: "font-medium",
				children: e
			}), t && /* @__PURE__ */ R(k, {
				variant: "ghost",
				icon: hr,
				size: "sm",
				hideLabel: !0,
				onClick: t,
				label: "Close"
			})]
		}), /* @__PURE__ */ z("div", {
			className: "flex flex-col gap-[1px]",
			children: [/* @__PURE__ */ R("div", {
				className: g("bg-f1-background px-4 py-3", i || r ? "rounded-t-[13.25px]" : "rounded-[13.25px]"),
				children: /* @__PURE__ */ R(xr, { content: n })
			}), (i || r) && /* @__PURE__ */ z("div", {
				className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
				children: [/* @__PURE__ */ R("div", { children: i && /* @__PURE__ */ R(k, {
					label: i.label,
					onClick: i.onClick,
					variant: "outline",
					icon: i.icon
				}) }), /* @__PURE__ */ R("div", { children: r && /* @__PURE__ */ R(k, {
					label: r.label,
					onClick: r.onClick,
					variant: "outline",
					icon: r.icon
				}) })]
			})]
		})]
	});
}), ed = ({ compact: e }) => /* @__PURE__ */ z("div", {
	className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ R("div", {
		className: "flex flex-row items-center justify-between px-4 py-2",
		children: /* @__PURE__ */ R(O, { className: "h-5 w-32 rounded-md" })
	}), /* @__PURE__ */ z("div", {
		className: "flex flex-col gap-[1px]",
		children: [/* @__PURE__ */ R("div", {
			className: g("rounded-t-[13.25px] bg-f1-background px-4 py-3", e && "rounded-[13.25px]"),
			children: /* @__PURE__ */ z("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ R(O, { className: "h-4 w-full rounded-md" }),
					/* @__PURE__ */ R(O, { className: "h-4 w-3/4 rounded-md" }),
					/* @__PURE__ */ R(O, { className: "h-4 w-1/2 rounded-md" })
				]
			})
		}), !e && /* @__PURE__ */ z("div", {
			className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
			children: [/* @__PURE__ */ R(O, { className: "h-8 w-24 rounded-md" }), /* @__PURE__ */ R(O, { className: "h-8 w-28 rounded-md" })]
		})]
	})]
}), td = Ar((e, t) => /* @__PURE__ */ R($u, {
	ref: t,
	...e
})), nd = ({ compact: e }) => /* @__PURE__ */ R(ed, { compact: e });
td.displayName = "F0AiBanner";
var rd = Vn(a(td), nd), id = [
	We,
	ue,
	ye,
	D,
	xe,
	Ue,
	at,
	oe,
	_e,
	be,
	Te,
	ce,
	rt
], ad = (e) => {
	if (!e?.content) return "";
	try {
		return Se(e.content, id);
	} catch {
		return "";
	}
}, od = (e, t) => Fr(() => {
	if (t?.selectedTitle || t?.selectedEmoji) return {
		title: t.selectedTitle || e.title,
		emoji: t.selectedEmoji
	};
	let n = e.buttons?.find((e) => e.type === t?.selectedAction);
	return n ? {
		title: n.label,
		emoji: n.emoji
	} : { title: e.title };
}, [t, e]), sd = (e, t) => {
	let [n, r] = L(!1);
	return {
		isLoading: n,
		handleClick: P(async (n) => {
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
}, cd = (e, t, n) => {
	F(() => {
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
}, ld = (e, t, n) => {
	F(() => {
		e?.shouldExecute && e?.selectedAction && t && n && (n({ data: {
			...e,
			shouldExecute: !1
		} }), t(e.selectedAction));
	}, [
		t,
		n,
		e
	]);
}, ud = (e, t, n, r) => {
	F(() => {
		if (!r?.content || !r?.isEditable || !e || !n) return;
		let i = n();
		i !== void 0 && (t(), r.content && e.chain().focus().setTextSelection(i).insertContent(r.content).run());
	}, [
		r,
		e,
		n,
		t
	]);
}, dd = ({ config: e, isLoading: t, onButtonClick: n }) => /* @__PURE__ */ z("div", {
	className: "flex flex-col gap-2",
	children: [e.title && /* @__PURE__ */ R("div", {
		className: "text-f1-foreground-secondary",
		children: e.title
	}), /* @__PURE__ */ R("div", {
		className: "relative flex flex-row flex-wrap items-center gap-2",
		children: e.buttons?.map((e, r) => /* @__PURE__ */ R(k, {
			onClick: () => n(e.type),
			variant: "outline",
			icon: e.icon,
			label: e.label,
			disabled: t
		}, r))
	})]
}), fd = ({ isEditable: e }) => e ? /* @__PURE__ */ z("div", {
	className: "flex flex-col gap-2",
	children: [
		/* @__PURE__ */ R(O, { className: "h-4 w-1/2 rounded-md" }),
		/* @__PURE__ */ R(O, { className: "h-4 w-full rounded-md" }),
		/* @__PURE__ */ R(O, { className: "h-4 w-3/4 rounded-md" }),
		/* @__PURE__ */ R(O, { className: "h-4 w-1/3 rounded-md" })
	]
}) : /* @__PURE__ */ R(rd.Skeleton, { compact: !0 }), pd = ({ node: e, updateAttributes: t, deleteNode: n, extension: r, editor: i, getPos: a }) => {
	let o = e.attrs.data, s = r.options.currentConfig || e.attrs.config, { title: c } = od(s, o), { isLoading: l, handleClick: u } = sd(s, t), d = !!(o?.selectedAction && !o?.content), f = l || d, p = ad(o);
	if (ud(i, n, a, o), cd(s, t, o), ld(o, u, t), !o || !s || !s.buttons?.length) return null;
	let m = !!o?.content, h = !!(o?.selectedTitle || o?.selectedAction) && m && !o?.isEditable;
	return /* @__PURE__ */ R(de, {
		contentEditable: !1,
		children: /* @__PURE__ */ z("div", {
			className: "mb-3",
			children: [f ? /* @__PURE__ */ R(fd, { isEditable: o?.isEditable }) : h ? /* @__PURE__ */ R(rd, {
				title: c,
				content: p,
				onClose: () => n()
			}) : /* @__PURE__ */ R("div", {
				className: "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ R(dd, {
					config: s,
					isLoading: f,
					onButtonClick: u
				})
			}), /* @__PURE__ */ R(Oe, { style: { display: "none" } })]
		})
	});
}, md = je.create({
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
		return me(pd);
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
}), hd = Pe(), gd = [
	"paragraph",
	"heading",
	"blockquote",
	"codeBlock",
	"bulletList",
	"orderedList",
	"listItem",
	"table",
	"details"
], _d = new Set(gd), vd = (e) => e ? _d.has(e) : !1, yd = (e) => e ? vd(e.type) && !e.attrs?.id ? !0 : e.content?.some(yd) ?? !1 : !1, bd = (e) => {
	if (!e) return !1;
	if (vd(e.type.name) && !e.attrs.id) return !0;
	for (let t = 0; t < e.childCount; t += 1) if (bd(e.child(t))) return !0;
	return !1;
}, xd = (e) => e ? e instanceof Re ? bd(e) : yd(e) : !1, Sd = ke.create({
	name: "blockId",
	addGlobalAttributes() {
		return [{
			types: gd,
			attributes: { id: {
				default: null,
				parseHTML: (e) => e.getAttribute("data-id"),
				renderHTML: (e) => e.id ? { "data-id": e.id } : {},
				keepOnSplit: !1
			} }
		}];
	},
	addProseMirrorPlugins() {
		return [new Ye({
			key: new $e("blockIdPlugin"),
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
						if (vd(e.type.name) && !e.attrs.id) {
							let n = ve(5);
							r.setNodeMarkup(t, void 0, {
								...e.attrs,
								id: n
							}), i = !0;
						}
					});
				}) : n.doc.descendants((e, t) => {
					if (vd(e.type.name) && !e.attrs.id) {
						let n = ve(5);
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
}), Cd = (e, t) => {
	let n = null;
	return e.state.doc.descendants((e, r) => e.attrs.id !== t || (n = {
		node: e,
		pos: r
	}, !1)), n;
}, wd = ({ key: e, editor: t, onPaste: n, onDrop: r, allowedMimeTypes: i }) => new Ye({
	key: e || new $e("fileHandler"),
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
}), Td = ke.create({
	name: "fileHandler",
	addOptions() {
		return {
			onPaste: void 0,
			onDrop: void 0,
			allowedMimeTypes: void 0
		};
	},
	addProseMirrorPlugins() {
		return [wd({
			key: new $e(this.name),
			editor: this.editor,
			allowedMimeTypes: this.options.allowedMimeTypes,
			onDrop: this.options.onDrop,
			onPaste: this.options.onPaste
		})];
	}
}), Ed = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Dd = je.create({
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
		return ["img", ie(this.options.HTMLAttributes, e)];
	},
	addCommands() {
		return { setImage: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: e
		}) };
	},
	addInputRules() {
		return [Le({
			find: Ed,
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
}), Od = 52428800, kd = [
	"image/jpeg",
	"image/png",
	"image/gif",
	"image/webp"
], Ad = 10, jd = 100, Md = ({ node: e, deleteNode: t, selected: n, editor: r, updateAttributes: i }) => {
	let { src: a, alt: o, title: s, uploading: c, width: l } = e.attrs, d = r.isEditable, f = u(), [p, m] = L(!1), h = P((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = e.clientX, n = l ?? jd, a = r.view.dom.clientWidth, o = (e) => {
			let r = (e.clientX - t) / a * 100, o = Math.min(jd, Math.max(Ad, n + r));
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
	return /* @__PURE__ */ R(de, {
		className: "mb-2",
		children: /* @__PURE__ */ z("div", {
			style: { width: `${l ?? jd}%` },
			className: g("image-resizable-wrapper group/image relative rounded-lg", n && "border-2 border-f1-border-selected-bold border-solid", p && "select-none"),
			children: [
				/* @__PURE__ */ R("img", {
					src: a,
					alt: o,
					title: s,
					draggable: !1,
					className: "block h-auto w-full rounded-md transition-all duration-150 ease-out"
				}),
				c && /* @__PURE__ */ R("div", {
					className: "absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200",
					children: /* @__PURE__ */ R(_r, { size: "medium" })
				}),
				d && !c && /* @__PURE__ */ R("div", {
					className: "absolute right-2 top-2 opacity-0 transition-opacity group-hover/image:opacity-100",
					children: /* @__PURE__ */ R(k, {
						onClick: t,
						label: f.actions.delete,
						icon: mt,
						variant: "default",
						hideLabel: !0
					})
				}),
				d && !c && /* @__PURE__ */ R("div", {
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
}, Nd = Dd.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			width: {
				default: jd,
				parseHTML: (e) => {
					let t = e.style.width;
					return t?.endsWith("%") && parseInt(t, 10) || jd;
				},
				renderHTML: (e) => !e.width || e.width === jd ? {} : { style: `width: ${e.width}%` }
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
		return me(Md);
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["img", ie(this.options.HTMLAttributes, e)];
	}
}).configure({
	inline: !1,
	allowBase64: !0
}), Pd = (e, t) => {
	let n = null;
	return e.state.doc.descendants((e, r) => e.type.name === "image" && e.attrs["data-upload-id"] === t ? (n = r, !1) : !0), n;
}, Fd = async (e, t, n, r) => {
	let i = n.maxFileSize ?? Od, { onError: a } = n;
	if (!kd.includes(t.type)) {
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
		let { url: r } = await n.onUpload(t), i = Pd(e, s);
		i !== null && e.chain().setNodeSelection(i).updateAttributes("image", {
			src: r,
			uploading: !1,
			"data-upload-id": null
		}).run();
	} catch {
		a?.("upload-failed");
		let t = Pd(e, s);
		t !== null && e.chain().setNodeSelection(t).deleteSelection().run();
	} finally {
		URL.revokeObjectURL(o);
	}
}, Id = (e) => Td.configure({
	allowedMimeTypes: kd,
	onDrop: (t, n, r) => {
		n.forEach((n) => {
			Fd(t, n, e, r);
		});
	},
	onPaste: (t, n) => {
		n.forEach((n) => {
			Fd(t, n, e);
		});
	}
}), Ld = (e, t, n) => {
	Fd(e, t, n);
}, Rd = [
	"superNegative",
	"negative",
	"neutral",
	"positive",
	"superPositive"
], zd = {
	superNegative: Xt,
	negative: Qt,
	neutral: Jt,
	positive: Pt,
	superPositive: Dt
}, Bd = {
	superNegative: "mood-super-negative",
	negative: "mood-negative",
	neutral: "mood-neutral",
	positive: "mood-positive",
	superPositive: "mood-super-positive"
}, Vd = ({ node: e, deleteNode: t, updateAttributes: n }) => {
	let r = u(), [i, a] = L(e.attrs.isOpen ?? !1), o = e.attrs.data;
	if (!o) return null;
	let s = () => {
		let e = !i;
		a(e), n({ isOpen: e });
	}, c = [{
		label: r.actions.delete,
		icon: mt,
		critical: !0,
		onClick: () => t()
	}];
	return /* @__PURE__ */ z(de, {
		contentEditable: !1,
		children: [/* @__PURE__ */ z("div", {
			className: "editor-mood-tracker mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ z("div", {
				className: "flex flex-row items-center justify-between gap-2",
				children: [/* @__PURE__ */ R("div", {
					className: "flex flex-row items-center gap-2",
					children: /* @__PURE__ */ z("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ z("div", {
							className: "flex flex-row items-center gap-3",
							children: [/* @__PURE__ */ R("p", {
								className: "text-f1-text-primary text-lg font-semibold",
								children: o.title
							}), /* @__PURE__ */ R("div", {
								className: "flex flex-row items-center",
								children: o.days.map((e, t) => /* @__PURE__ */ R("div", {
									className: "-ml-1.5 flex items-center justify-center rounded-full bg-f1-background",
									children: /* @__PURE__ */ R(l, {
										icon: zd[e.mood],
										size: "lg",
										color: Bd[e.mood]
									})
								}, t))
							})]
						}), /* @__PURE__ */ R("p", { children: /* @__PURE__ */ R("span", {
							className: "text-f1-text-primary text-md font-normal",
							children: o.averageMoodComment
						}) })]
					})
				}), /* @__PURE__ */ z("div", {
					className: "flex flex-row items-center gap-1",
					children: [/* @__PURE__ */ R(k, {
						onClick: s,
						variant: "outline",
						hideLabel: !0,
						label: i ? r.actions.collapse : r.actions.expand,
						icon: i ? sr : Ln,
						size: "sm"
					}), /* @__PURE__ */ R(qn, {
						items: c,
						size: "sm"
					})]
				})]
			}), i && /* @__PURE__ */ R("div", {
				className: "text-f1-text-primary flex flex-col gap-2",
				children: o.days.map((e, t) => /* @__PURE__ */ z("div", {
					className: "flex flex-row items-center gap-2",
					children: [/* @__PURE__ */ R("div", {
						className: "flex items-center justify-center rounded-full",
						children: /* @__PURE__ */ R(l, {
							icon: zd[e.mood],
							size: "lg",
							color: Bd[e.mood]
						})
					}), /* @__PURE__ */ z("p", {
						className: "text-f1-text-primary text-md font-normal",
						children: [
							/* @__PURE__ */ z("span", {
								className: "font-semibold",
								children: [e.day, ":"]
							}),
							" ",
							e.comment || "-"
						]
					})]
				}, t))
			})]
		}), /* @__PURE__ */ R(Oe, { style: { display: "none" } })]
	});
}, Hd = je.create({
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
		return me(Vd);
	},
	addCommands() {
		return { insertMoodTracker: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: { data: e }
		}) };
	}
}), Ud = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/, Wd = /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/, Gd = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*)$/gm, Kd = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\S*)$/gm;
function qd(e) {
	let t = e.match(Ud);
	if (t) return {
		provider: "youtube",
		videoId: t[1],
		embedUrl: `https://www.youtube-nocookie.com/embed/${t[1]}`
	};
	let n = e.match(Wd);
	return n ? {
		provider: "vimeo",
		videoId: n[1],
		embedUrl: `https://player.vimeo.com/video/${n[1]}`
	} : null;
}
var Jd = ({ node: e, deleteNode: t, selected: n, editor: r }) => {
	let { src: i, provider: a } = e.attrs, o = r.isEditable, s = u();
	return /* @__PURE__ */ R(de, {
		className: "mb-2",
		children: /* @__PURE__ */ z("div", {
			className: g("video-embed-wrapper relative overflow-hidden rounded-lg", n && "border-2 border-solid border-f1-border-selected-bold"),
			children: [/* @__PURE__ */ R("div", {
				className: "relative w-full",
				style: { paddingBottom: "56.25%" },
				children: /* @__PURE__ */ R("iframe", {
					src: i,
					title: `${a} video`,
					className: "absolute inset-0 h-full w-full border-0",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: !0
				})
			}), o && /* @__PURE__ */ R("div", {
				className: "dark absolute right-2 top-2",
				children: /* @__PURE__ */ R(k, {
					onClick: t,
					label: s.actions.delete,
					icon: mt,
					variant: "outline",
					hideLabel: !0,
					size: "sm"
				})
			})]
		})
	});
}, Yd = je.create({
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
			ie(e, { "data-video-embed": "" }),
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
		return me(Jd);
	},
	addCommands() {
		return { setVideoEmbed: ({ src: e }) => ({ commands: t }) => {
			let n = qd(e);
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
		return [et({
			find: Gd,
			type: this.type,
			getAttributes: (e) => {
				let t = qd(e[0]);
				return t ? {
					src: t.embedUrl,
					provider: t.provider,
					videoId: t.videoId
				} : !1;
			}
		}), et({
			find: Kd,
			type: this.type,
			getAttributes: (e) => {
				let t = qd(e[0]);
				return t ? {
					src: t.embedUrl,
					provider: t.provider,
					videoId: t.videoId
				} : !1;
			}
		})];
	}
}), Xd = ({ aiBlockConfig: e, translations: t, imageUploadConfig: n }) => [
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
				icon: ct
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
				icon: pt
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
				icon: ft
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
				icon: st
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
				icon: lt
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
				icon: dt
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
					t.type = "file", t.accept = kd.join(","), t.onchange = () => {
						let r = t.files?.[0];
						r && Ld(e, r, n);
					}, t.click();
				},
				icon: Rt
			}] : [],
			{
				title: t.richTextEditor.video,
				command: (e) => {
					let n = window.prompt(t.richTextEditor.videoUrlPrompt);
					n && (qd(n) ? e.commands.setVideoEmbed({ src: n }) : window.alert(t.richTextEditor.videoUrlInvalid));
				},
				icon: nn
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
				icon: Ln
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
				icon: ht
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
				icon: wr
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
				icon: In
			}
		]
	}
], Zd = Ar(({ items: e, groups: t, command: n }, r) => {
	let [i, a] = L(0), o = I(null), s = I(null), c = Fr(() => t || [{
		title: "",
		commands: e
	}], [t, e]), u = Fr(() => c.flatMap((e) => e.commands), [c]), d = Fr(() => {
		let e = [], t = 0;
		for (let n of c) e.push(t), t += n.commands.length;
		return e;
	}, [c]), f = P((e) => {
		let t = u[e];
		t && n(t);
	}, [u, n]), p = P((e) => {
		let t = o.current;
		if (!t) return;
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
		r.top < n.top ? t.scrollTop += r.top - n.top : r.bottom > n.bottom && (t.scrollTop += r.bottom - n.bottom);
	}, []), m = P(() => {
		a((e) => e <= 0 ? u.length - 1 : e - 1);
	}, [u.length]), h = P(() => {
		a((e) => e >= u.length - 1 ? 0 : e + 1);
	}, [u.length]), _ = P(() => {
		f(i);
	}, [i, f]);
	F(() => {
		s.current && p(s.current);
	}, [i, p]), F(() => {
		a(0);
	}, [e.length]), Nr(r, () => ({ onKeyDown: ({ event: e }) => e.key === "ArrowUp" ? (e.preventDefault(), m(), !0) : e.key === "ArrowDown" ? (e.preventDefault(), h(), !0) : e.key === "Enter" && (e.preventDefault(), _(), !0) }), [
		m,
		h,
		_
	]);
	let v = (e, t) => d[e] + t;
	return /* @__PURE__ */ R("div", {
		ref: o,
		className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
		children: c.map((e, n) => /* @__PURE__ */ z("div", { children: [/* @__PURE__ */ z("div", {
			className: "p-1",
			children: [t && e.title && /* @__PURE__ */ R("div", {
				className: "p-2",
				children: /* @__PURE__ */ R("p", {
					className: "text-sm font-medium tracking-wide text-f1-foreground-secondary",
					children: e.title
				})
			}), e.commands.map((e, t) => {
				let r = v(n, t), o = r === i;
				return /* @__PURE__ */ z("div", {
					ref: o ? s : null,
					className: g("flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover", o && "bg-f1-background-secondary"),
					onClick: () => {
						a(r), f(r);
					},
					onMouseEnter: () => a(r),
					children: [e.emoji ? /* @__PURE__ */ R("span", {
						className: "text-base",
						children: e.emoji
					}) : e.icon ? /* @__PURE__ */ R(l, {
						icon: e.icon,
						className: "text-f1-foreground-secondary"
					}) : null, /* @__PURE__ */ R("p", {
						className: "flex-grow text-sm font-medium text-f1-foreground",
						children: e.title
					})]
				}, `${n}-${t}`);
			})]
		}), t && n < c.length - 1 && /* @__PURE__ */ R("div", {
			className: "py-1",
			children: /* @__PURE__ */ R("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
		})] }, n))
	});
});
Zd.displayName = "CommandList";
//#endregion
//#region src/components/RichText/internal/Extensions/SlashCommand/index.tsx
var Qd = ({ aiBlockConfig: e, translations: t, imageUploadConfig: n }) => {
	let r = Xd({
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
	return ke.create({
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
			return [it({
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
						return /* @__PURE__ */ z(lr, {
							open: !0,
							modal: !1,
							children: [
								/* @__PURE__ */ R("div", { style: n }),
								/* @__PURE__ */ R(dr, {
									asChild: !0,
									children: /* @__PURE__ */ R("div", { style: n })
								}),
								/* @__PURE__ */ R(pr, {
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
									children: /* @__PURE__ */ R("div", { ref: (t) => {
										t && e.parentNode !== t && t.appendChild(e);
									} })
								})
							]
						});
					};
					return {
						onStart: (r) => {
							if (r.items.length === 0) return;
							e = new Ze(Zd, {
								props: {
									items: r.items,
									groups: o(r.query),
									command: r.command
								},
								editor: r.editor
							});
							let s = i(r.clientRect);
							n = document.createElement("div"), document.body.appendChild(n), t = (0, hd.createRoot)(n), t.render(/* @__PURE__ */ R(a, {
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
									t.render(/* @__PURE__ */ R(a, {
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
}, $d = ({ node: e, deleteNode: t, updateAttributes: n }) => {
	let r = u(), [i, a] = L(e.attrs.isOpen ?? !1), o = e.attrs.data;
	if (!o) return null;
	let s = () => {
		let e = !i;
		a(e), n({ isOpen: e });
	}, c = [{
		label: r.actions.delete,
		icon: mt,
		critical: !0,
		onClick: () => t()
	}], l = (e) => o.users.find((t) => t.id === e), d = (e) => {
		try {
			let t = new Date(e);
			return Un(t, "HH:mm");
		} catch (t) {
			return console.error(t), e;
		}
	};
	return /* @__PURE__ */ z(de, {
		contentEditable: !1,
		children: [/* @__PURE__ */ z("div", {
			className: "editor-transcript mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ z("div", {
				className: "flex flex-row items-center justify-between gap-2",
				children: [/* @__PURE__ */ R("div", {
					className: "flex flex-row items-center gap-2",
					children: /* @__PURE__ */ z("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ R("div", {
							className: "flex flex-row items-center gap-3",
							children: /* @__PURE__ */ R("p", {
								className: "text-f1-text-primary text-lg font-semibold",
								children: o.title
							})
						}), /* @__PURE__ */ R("p", {
							className: "text-f1-text-secondary text-sm",
							children: o.messages.length
						})]
					})
				}), /* @__PURE__ */ z("div", {
					className: "flex flex-row items-center gap-1",
					children: [/* @__PURE__ */ R(k, {
						onClick: s,
						variant: "outline",
						hideLabel: !0,
						label: i ? r.actions.collapse : r.actions.expand,
						icon: i ? sr : Ln,
						size: "sm"
					}), /* @__PURE__ */ R(qn, {
						items: c,
						size: "sm"
					})]
				})]
			}), i && /* @__PURE__ */ R("div", {
				className: "scrollbar-macos text-f1-text-primary flex max-h-[500px] flex-col gap-4 overflow-y-auto",
				children: o.messages.map((e, t) => {
					let n = l(e.userId);
					return /* @__PURE__ */ z("div", {
						className: "flex flex-row gap-3",
						children: [n?.imageUrl && /* @__PURE__ */ R(Cr, {
							size: "xs",
							src: n.imageUrl,
							firstName: n.fullname,
							lastName: ""
						}), /* @__PURE__ */ z("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ z("div", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ R("span", {
									className: "text-f1-text-primary font-medium",
									children: n?.fullname || "Unknown User"
								}), /* @__PURE__ */ R("span", {
									className: "text-f1-text-tertiary text-xs",
									children: d(e.dateTime)
								})]
							}), /* @__PURE__ */ R("p", {
								className: "text-f1-text-secondary",
								children: e.text
							})]
						})]
					}, t);
				})
			})]
		}), /* @__PURE__ */ R(Oe, { style: { display: "none" } })]
	});
}, ef = je.create({
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
		return me($d);
	},
	addCommands() {
		return { insertTranscript: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: { data: e }
		}) };
	}
}), tf = () => /* @__PURE__ */ new Map(), nf = (e) => {
	let t = tf();
	return e.forEach((e, n) => {
		t.set(n, e);
	}), t;
}, rf = (e, t, n) => {
	let r = e.get(t);
	return r === void 0 && e.set(t, r = n()), r;
}, af = (e, t) => {
	let n = [];
	for (let [r, i] of e) n.push(t(i, r));
	return n;
}, of = (e, t) => {
	for (let [n, r] of e) if (t(r, n)) return !0;
	return !1;
}, sf = () => /* @__PURE__ */ new Set(), cf = (e) => e[e.length - 1], lf = (e, t) => {
	for (let n = 0; n < t.length; n++) e.push(t[n]);
}, uf = Array.from, df = (e, t) => {
	for (let n = 0; n < e.length; n++) if (t(e[n], n, e)) return !0;
	return !1;
}, ff = Array.isArray, pf = class {
	constructor() {
		this._observers = tf();
	}
	on(e, t) {
		return rf(this._observers, e, sf).add(t), t;
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
		return uf((this._observers.get(e) || tf()).values()).forEach((e) => e(...t));
	}
	destroy() {
		this._observers = tf();
	}
}, mf = Math.floor, hf = Math.abs, gf = (e, t) => e < t ? e : t, _f = (e, t) => e > t ? e : t;
Number.isNaN;
var vf = (e) => e === 0 ? 1 / e < 0 : e < 0, yf = 1 << 29, bf = 2 ** 53 - 1, xf = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && mf(e) === e);
Number.isNaN, Number.parseInt;
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/string.js
var Sf = String.fromCharCode;
String.fromCodePoint, Sf(65535);
var Cf = (e) => e.toLowerCase(), wf = /^\s*/g, Tf = (e) => e.replace(wf, ""), Ef = /([A-Z])/g, Df = (e, t) => Tf(e.replace(Ef, (e) => `${t}${Cf(e)}`)), Of = (e) => {
	let t = unescape(encodeURIComponent(e)), n = t.length, r = new Uint8Array(n);
	for (let e = 0; e < n; e++) r[e] = t.codePointAt(e);
	return r;
}, kf = typeof TextEncoder < "u" ? new TextEncoder() : null, Af = kf ? (e) => kf.encode(e) : Of, jf = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", {
	fatal: !0,
	ignoreBOM: !0
});
/* c8 ignore start */
jf && jf.decode(/* @__PURE__ */ new Uint8Array()).length === 1 && 
/* c8 ignore next */
(jf = null);
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/encoding.js
var Mf = class {
	constructor() {
		this.cpos = 0, this.cbuf = /* @__PURE__ */ new Uint8Array(100), this.bufs = [];
	}
}, Nf = () => new Mf(), Pf = (e) => {
	let t = Nf();
	return e(t), If(t);
}, Ff = (e) => {
	let t = e.cpos;
	for (let n = 0; n < e.bufs.length; n++) t += e.bufs[n].length;
	return t;
}, If = (e) => {
	let t = new Uint8Array(Ff(e)), n = 0;
	for (let r = 0; r < e.bufs.length; r++) {
		let i = e.bufs[r];
		t.set(i, n), n += i.length;
	}
	return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, Lf = (e, t) => {
	let n = e.cbuf.length;
	n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(_f(n, t) * 2), e.cpos = 0);
}, W = (e, t) => {
	let n = e.cbuf.length;
	e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Rf = W, G = (e, t) => {
	for (; t > 127;) W(e, 128 | 127 & t), t = mf(t / 128);
	W(e, 127 & t);
}, zf = (e, t) => {
	let n = vf(t);
	for (n && (t = -t), W(e, (t > 63 ? 128 : 0) | (n ? 64 : 0) | 63 & t), t = mf(t / 64); t > 0;) W(e, (t > 127 ? 128 : 0) | 127 & t), t = mf(t / 128);
}, Bf = /* @__PURE__ */ new Uint8Array(3e4), Vf = Bf.length / 3, Hf = kf && kf.encodeInto ? (e, t) => {
	if (t.length < Vf) {
		/* c8 ignore next */
		let n = kf.encodeInto(t, Bf).written || 0;
		G(e, n);
		for (let t = 0; t < n; t++) W(e, Bf[t]);
	} else Wf(e, Af(t));
} : (e, t) => {
	let n = unescape(encodeURIComponent(t)), r = n.length;
	G(e, r);
	for (let t = 0; t < r; t++) W(e, n.codePointAt(t));
}, Uf = (e, t) => {
	let n = e.cbuf.length, r = e.cpos, i = gf(n - r, t.length), a = t.length - i;
	e.cbuf.set(t.subarray(0, i), r), e.cpos += i, a > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(_f(n * 2, a)), e.cbuf.set(t.subarray(i)), e.cpos = a);
}, Wf = (e, t) => {
	G(e, t.byteLength), Uf(e, t);
}, Gf = (e, t) => {
	Lf(e, t);
	let n = new DataView(e.cbuf.buffer, e.cpos, t);
	return e.cpos += t, n;
}, Kf = (e, t) => Gf(e, 4).setFloat32(0, t, !1), qf = (e, t) => Gf(e, 8).setFloat64(0, t, !1), Jf = (e, t) => Gf(e, 8).setBigInt64(0, t, !1), Yf = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4)), Xf = (e) => (Yf.setFloat32(0, e), Yf.getFloat32(0) === e), Zf = (e, t) => {
	switch (typeof t) {
		case "string":
			W(e, 119), Hf(e, t);
			break;
		case "number":
			xf(t) && hf(t) <= 2147483647 ? (W(e, 125), zf(e, t)) : Xf(t) ? (W(e, 124), Kf(e, t)) : (W(e, 123), qf(e, t));
			break;
		case "bigint":
			W(e, 122), Jf(e, t);
			break;
		case "object":
			if (t === null) W(e, 126);
			else if (ff(t)) {
				W(e, 117), G(e, t.length);
				for (let n = 0; n < t.length; n++) Zf(e, t[n]);
			} else if (t instanceof Uint8Array) W(e, 116), Wf(e, t);
			else {
				W(e, 118);
				let n = Object.keys(t);
				G(e, n.length);
				for (let r = 0; r < n.length; r++) {
					let i = n[r];
					Hf(e, i), Zf(e, t[i]);
				}
			}
			break;
		case "boolean":
			W(e, t ? 120 : 121);
			break;
		default: W(e, 127);
	}
}, Qf = class extends Mf {
	constructor(e) {
		super(), this.w = e, this.s = null, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (this.count > 0 && G(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
	}
}, $f = (e) => {
	e.count > 0 && (zf(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && G(e.encoder, e.count - 2));
}, ep = class {
	constructor() {
		this.encoder = new Mf(), this.s = 0, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : ($f(this), this.count = 1, this.s = e);
	}
	toUint8Array() {
		return $f(this), If(this.encoder);
	}
}, tp = (e) => {
	if (e.count > 0) {
		let t = e.diff * 2 + (e.count === 1 ? 0 : 1);
		zf(e.encoder, t), e.count > 1 && G(e.encoder, e.count - 2);
	}
}, np = class {
	constructor() {
		this.encoder = new Mf(), this.s = 0, this.count = 0, this.diff = 0;
	}
	write(e) {
		this.diff === e - this.s ? (this.s = e, this.count++) : (tp(this), this.count = 1, this.diff = e - this.s, this.s = e);
	}
	toUint8Array() {
		return tp(this), If(this.encoder);
	}
}, rp = class {
	constructor() {
		this.sarr = [], this.s = "", this.lensE = new ep();
	}
	write(e) {
		this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
	}
	toUint8Array() {
		let e = new Mf();
		return this.sarr.push(this.s), this.s = "", Hf(e, this.sarr.join("")), Uf(e, this.lensE.toUint8Array()), If(e);
	}
}, ip = (e) => Error(e), ap = () => {
	throw ip("Method unimplemented");
}, op = () => {
	throw ip("Unexpected case");
}, sp = ip("Unexpected end of array"), cp = ip("Integer out of Range"), lp = class {
	constructor(e) {
		this.arr = e, this.pos = 0;
	}
}, up = (e) => new lp(e), dp = (e) => e.pos !== e.arr.length, fp = (e, t) => {
	let n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
	return e.pos += t, n;
}, pp = (e) => fp(e, K(e)), mp = (e) => e.arr[e.pos++], K = (e) => {
	let t = 0, n = 1, r = e.arr.length;
	for (; e.pos < r;) {
		let r = e.arr[e.pos++];
		if (t += (r & 127) * n, n *= 128, r < 128) return t;
		/* c8 ignore start */
		if (t > bf) throw cp;
	}
	throw sp;
}, hp = (e) => {
	let t = e.arr[e.pos++], n = t & 63, r = 64, i = (t & 64) > 0 ? -1 : 1;
	if (!(t & 128)) return i * n;
	let a = e.arr.length;
	for (; e.pos < a;) {
		if (t = e.arr[e.pos++], n += (t & 127) * r, r *= 128, t < 128) return i * n;
		/* c8 ignore start */
		if (n > bf) throw cp;
	}
	throw sp;
}, gp = jf ? (e) => jf.decode(pp(e)) : (e) => {
	let t = K(e);
	if (t === 0) return "";
	{
		let n = String.fromCodePoint(mp(e));
		if (--t < 100) for (; t--;) n += String.fromCodePoint(mp(e));
		else for (; t > 0;) {
			let r = t < 1e4 ? t : 1e4, i = e.arr.subarray(e.pos, e.pos + r);
			e.pos += r, n += String.fromCodePoint.apply(null, i), t -= r;
		}
		return decodeURIComponent(escape(n));
	}
}, _p = (e, t) => {
	let n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
	return e.pos += t, n;
}, vp = [
	(e) => void 0,
	(e) => null,
	hp,
	(e) => _p(e, 4).getFloat32(0, !1),
	(e) => _p(e, 8).getFloat64(0, !1),
	(e) => _p(e, 8).getBigInt64(0, !1),
	(e) => !1,
	(e) => !0,
	gp,
	(e) => {
		let t = K(e), n = {};
		for (let r = 0; r < t; r++) {
			let t = gp(e);
			n[t] = yp(e);
		}
		return n;
	},
	(e) => {
		let t = K(e), n = [];
		for (let r = 0; r < t; r++) n.push(yp(e));
		return n;
	},
	pp
], yp = (e) => vp[127 - mp(e)](e), bp = class extends lp {
	constructor(e, t) {
		super(e), this.reader = t, this.s = null, this.count = 0;
	}
	read() {
		return this.count === 0 && (this.s = this.reader(this), this.count = dp(this) ? K(this) + 1 : -1), this.count--, this.s;
	}
}, xp = class extends lp {
	constructor(e) {
		super(e), this.s = 0, this.count = 0;
	}
	read() {
		if (this.count === 0) {
			this.s = hp(this);
			let e = vf(this.s);
			this.count = 1, e && (this.s = -this.s, this.count = K(this) + 2);
		}
		return this.count--, this.s;
	}
}, Sp = class extends lp {
	constructor(e) {
		super(e), this.s = 0, this.count = 0, this.diff = 0;
	}
	read() {
		if (this.count === 0) {
			let e = hp(this), t = e & 1;
			this.diff = mf(e / 2), this.count = 1, t && (this.count = K(this) + 2);
		}
		return this.s += this.diff, this.count--, this.s;
	}
}, Cp = class {
	constructor(e) {
		this.decoder = new xp(e), this.str = gp(this.decoder), this.spos = 0;
	}
	read() {
		let e = this.spos + this.decoder.read(), t = this.str.slice(this.spos, e);
		return this.spos = e, t;
	}
};
crypto.subtle;
var wp = crypto.getRandomValues.bind(crypto), Tp = Math.random, Ep = () => wp(/* @__PURE__ */ new Uint32Array(1))[0], Dp = (e) => e[mf(Tp() * e.length)], Op = "10000000-1000-4000-8000-100000000000", kp = () => Op.replace(/[018]/g, (e) => (e ^ Ep() & 15 >> e / 4).toString(16)), Ap = Date.now, jp = (e) => new Promise(e);
Promise.all.bind(Promise);
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/conditions.js
/* c8 ignore next */
var Mp = (e) => e === void 0 ? null : e, Np = new class {
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
	typeof localStorage < "u" && localStorage && (Np = localStorage);
} catch {}
/* c8 ignore stop */
/* c8 ignore next */
var Pp = Np, Fp = Object.assign, Ip = Object.keys, Lp = (e, t) => {
	for (let n in e) t(e[n], n);
}, Rp = (e) => Ip(e).length, zp = (e) => {
	for (let t in e) return !1;
	return !0;
}, Bp = (e, t) => {
	for (let n in e) if (!t(e[n], n)) return !1;
	return !0;
}, Vp = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Hp = (e, t) => e === t || Rp(e) === Rp(t) && Bp(e, (e, n) => (e !== void 0 || Vp(t, n)) && t[n] === e), Up = Object.freeze, Wp = (e) => {
	for (let t in e) {
		let n = e[t];
		(typeof n == "object" || typeof n == "function") && Wp(e[t]);
	}
	return Up(e);
}, Gp = (e, t, n = 0) => {
	try {
		for (; n < e.length; n++) e[n](...t);
	} finally {
		n < e.length && Gp(e, t, n + 1);
	}
}, Kp = (e, t) => t.includes(e), qp = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", Jp = typeof window < "u" && typeof document < "u" && !qp;
typeof navigator < "u" && /Mac/.test(navigator.platform);
var Yp, Xp = [], Zp = () => {
	if (Yp === void 0) {
		if (qp) {
			Yp = tf();
			let e = process.argv, t = null;
			for (let n = 0; n < e.length; n++) {
				let r = e[n];
				r[0] === "-" ? (t !== null && Yp.set(t, ""), t = r) : t === null ? Xp.push(r) : (Yp.set(t, r), t = null);
			}
			t !== null && Yp.set(t, "");
		} else typeof location == "object" ? (Yp = tf(), (location.search || "?").slice(1).split("&").forEach((e) => {
			if (e.length !== 0) {
				let [t, n] = e.split("=");
				Yp.set(`--${Df(t, "-")}`, n), Yp.set(`-${Df(t, "-")}`, n);
			}
		})) : Yp = tf();
	}
	return Yp;
}, Qp = (e) => Zp().has(e), $p = (e) => Mp(qp ? process.env[e.toUpperCase().replaceAll("-", "_")] : Pp.getItem(e)), em = (e) => Qp("--" + e) || $p(e) !== null;
em("production");
/* c8 ignore start */
var tm = qp && Kp(process.env.FORCE_COLOR, [
	"true",
	"1",
	"2"
]) || !Qp("--no-colors") && !em("no-color") && (!qp || process.stdout.isTTY) && (!qp || Qp("--color") || $p("COLORTERM") !== null || ($p("TERM") || "").includes("color")), nm = Jp ? (e) => {
	let t = "";
	for (let n = 0; n < e.byteLength; n++) t += Sf(e[n]);
	return btoa(t);
} : (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), rm = (e) => Pf((t) => Zf(t, e)), im = class {
	constructor(e, t) {
		this.left = e, this.right = t;
	}
}, am = (e, t) => new im(e, t), om = typeof document < "u" ? document : {};
typeof DOMParser < "u" && new DOMParser();
var sm = (e) => af(e, (e, t) => `${t}:${e};`).join("");
om.ELEMENT_NODE, om.TEXT_NODE, om.CDATA_SECTION_NODE, om.COMMENT_NODE, om.DOCUMENT_NODE, om.DOCUMENT_TYPE_NODE, om.DOCUMENT_FRAGMENT_NODE;
/* c8 ignore stop */
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/eventloop.js
var cm = ((e) => class {
	constructor(e) {
		this._ = e;
	}
	destroy() {
		e(this._);
	}
})(clearTimeout), lm = (e, t) => new cm(setTimeout(t, e)), um = Symbol, dm = um(), fm = um(), pm = um(), mm = um(), hm = um(), gm = um(), _m = um(), vm = um(), ym = um(), bm = (e) => {
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
Ap();
/* c8 ignore stop */
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/logging.js
var xm = {
	[dm]: am("font-weight", "bold"),
	[fm]: am("font-weight", "normal"),
	[pm]: am("color", "blue"),
	[hm]: am("color", "green"),
	[mm]: am("color", "grey"),
	[gm]: am("color", "red"),
	[_m]: am("color", "purple"),
	[vm]: am("color", "orange"),
	[ym]: am("color", "black")
}, Sm = tm ? (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = tf(), i = [], a = 0;
	for (; a < e.length; a++) {
		let i = e[a], o = xm[i];
		if (o !== void 0) r.set(o.left, o.right);
		else {
			if (i === void 0) break;
			if (i.constructor === String || i.constructor === Number) {
				let e = sm(r);
				a > 0 || e.length > 0 ? (t.push("%c" + i), n.push(e)) : t.push(i);
			} else break;
		}
	}
	for (a > 0 && (i = n, i.unshift(t.join(""))); a < e.length; a++) {
		let t = e[a];
		t instanceof Symbol || i.push(t);
	}
	return i;
} : bm, Cm = (...e) => {
	/* c8 ignore next */
	console.log(...Sm(e)), Tm.forEach((t) => t.print(e));
}, wm = (...e) => {
	console.warn(...Sm(e)), e.unshift(vm), Tm.forEach((t) => t.print(e));
}, Tm = sf(), Em = (e) => ({
	[Symbol.iterator]() {
		return this;
	},
	next: e
}), Dm = (e, t) => Em(() => {
	let n;
	do
		n = e.next();
	while (!n.done && !t(n.value));
	return n;
}), Om = (e, t) => Em(() => {
	let { done: n, value: r } = e.next();
	return {
		done: n,
		value: n ? void 0 : t(r)
	};
}), km = class {
	constructor(e, t) {
		this.clock = e, this.len = t;
	}
}, Am = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map();
	}
}, jm = (e, t, n) => t.clients.forEach((t, r) => {
	let i = e.doc.store.clients.get(r);
	if (i != null) {
		let r = i[i.length - 1], a = r.id.clock + r.length;
		for (let r = 0, o = t[r]; r < t.length && o.clock < a; o = t[++r]) Nh(e, i, o.clock, o.len, n);
	}
}), Mm = (e, t) => {
	let n = 0, r = e.length - 1;
	for (; n <= r;) {
		let i = mf((n + r) / 2), a = e[i], o = a.clock;
		if (o <= t) {
			if (t < o + a.len) return i;
			n = i + 1;
		} else r = i - 1;
	}
	return null;
}, Nm = (e, t) => {
	let n = e.clients.get(t.client);
	return n !== void 0 && Mm(n, t.clock) !== null;
}, Pm = (e) => {
	e.clients.forEach((e) => {
		e.sort((e, t) => e.clock - t.clock);
		let t, n;
		for (t = 1, n = 1; t < e.length; t++) {
			let r = e[n - 1], i = e[t];
			r.clock + r.len >= i.clock ? r.len = _f(r.len, i.clock + i.len - r.clock) : (n < t && (e[n] = i), n++);
		}
		e.length = n;
	});
}, Fm = (e) => {
	let t = new Am();
	for (let n = 0; n < e.length; n++) e[n].clients.forEach((r, i) => {
		if (!t.clients.has(i)) {
			let a = r.slice();
			for (let t = n + 1; t < e.length; t++) lf(a, e[t].clients.get(i) || []);
			t.clients.set(i, a);
		}
	});
	return Pm(t), t;
}, Im = (e, t, n, r) => {
	rf(e.clients, t, () => []).push(new km(n, r));
}, Lm = () => new Am(), Rm = (e) => {
	let t = Lm();
	return e.clients.forEach((e, n) => {
		let r = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (n.deleted) {
				let i = n.id.clock, a = n.length;
				if (t + 1 < e.length) for (let n = e[t + 1]; t + 1 < e.length && n.deleted; n = e[++t + 1]) a += n.length;
				r.push(new km(i, a));
			}
		}
		r.length > 0 && t.clients.set(n, r);
	}), t;
}, zm = (e, t) => {
	G(e.restEncoder, t.clients.size), uf(t.clients.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
		e.resetDsCurVal(), G(e.restEncoder, t);
		let r = n.length;
		G(e.restEncoder, r);
		for (let t = 0; t < r; t++) {
			let r = n[t];
			e.writeDsClock(r.clock), e.writeDsLen(r.len);
		}
	});
}, Bm = (e) => {
	let t = new Am(), n = K(e.restDecoder);
	for (let r = 0; r < n; r++) {
		e.resetDsCurVal();
		let n = K(e.restDecoder), r = K(e.restDecoder);
		if (r > 0) {
			let i = rf(t.clients, n, () => []);
			for (let t = 0; t < r; t++) i.push(new km(e.readDsClock(), e.readDsLen()));
		}
	}
	return t;
}, Vm = (e, t, n) => {
	let r = new Am(), i = K(e.restDecoder);
	for (let a = 0; a < i; a++) {
		e.resetDsCurVal();
		let i = K(e.restDecoder), a = K(e.restDecoder), o = n.clients.get(i) || [], s = J(n, i);
		for (let n = 0; n < a; n++) {
			let n = e.readDsClock(), a = n + e.readDsLen();
			if (n < s) {
				s < a && Im(r, i, s, a - s);
				let e = Dh(o, n), c = o[e];
				for (!c.deleted && c.id.clock < n && (o.splice(e + 1, 0, U_(t, c, n - c.id.clock)), e++); e < o.length && (c = o[e++], c.id.clock < a);) c.deleted || (a < c.id.clock + c.length && o.splice(e, 0, U_(t, c, a - c.id.clock)), c.delete(t));
			} else Im(r, i, n, a - n);
		}
	}
	if (r.clients.size > 0) {
		let e = new Ym();
		return G(e.restEncoder, 0), zm(e, r), e.toUint8Array();
	}
	return null;
}, Hm = Ep, Um = class e extends pf {
	constructor({ guid: e = kp(), collectionid: t = null, gc: n = !0, gcFilter: r = () => !0, meta: i = null, autoLoad: a = !1, shouldLoad: o = !0 } = {}) {
		super(), this.gc = n, this.gcFilter = r, this.clientID = Hm(), this.guid = e, this.collectionid = t, this.share = /* @__PURE__ */ new Map(), this.store = new wh(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = o, this.autoLoad = a, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = jp((e) => {
			this.on("load", () => {
				this.isLoaded = !0, e(this);
			});
		});
		let s = () => jp((e) => {
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
		return new Set(uf(this.subdocs).map((e) => e.guid));
	}
	transact(e, t = null) {
		return Y(this, e, t);
	}
	get(e, t = X) {
		let n = rf(this.share, e, () => {
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
		return this.get(e, Mg);
	}
	getText(e = "") {
		return this.get(e, $g);
	}
	getMap(e = "") {
		return this.get(e, Fg);
	}
	getXmlElement(e = "") {
		return this.get(e, i_);
	}
	getXmlFragment(e = "") {
		return this.get(e, n_);
	}
	toJSON() {
		let e = {};
		return this.share.forEach((t, n) => {
			e[n] = t.toJSON();
		}), e;
	}
	destroy() {
		this.isDestroyed = !0, uf(this.subdocs).forEach((e) => e.destroy());
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
}, Wm = class {
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
}, Gm = class extends Wm {
	constructor(e) {
		super(e), this.keys = [], K(e), this.keyClockDecoder = new Sp(pp(e)), this.clientDecoder = new xp(pp(e)), this.leftClockDecoder = new Sp(pp(e)), this.rightClockDecoder = new Sp(pp(e)), this.infoDecoder = new bp(pp(e), mp), this.stringDecoder = new Cp(pp(e)), this.parentInfoDecoder = new bp(pp(e), mp), this.typeRefDecoder = new xp(pp(e)), this.lenDecoder = new xp(pp(e));
	}
	readLeftID() {
		return new ch(this.clientDecoder.read(), this.leftClockDecoder.read());
	}
	readRightID() {
		return new ch(this.clientDecoder.read(), this.rightClockDecoder.read());
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
		return yp(this.restDecoder);
	}
	readBuf() {
		return pp(this.restDecoder);
	}
	readJSON() {
		return yp(this.restDecoder);
	}
	readKey() {
		let e = this.keyClockDecoder.read();
		if (e < this.keys.length) return this.keys[e];
		{
			let e = this.stringDecoder.read();
			return this.keys.push(e), e;
		}
	}
}, Km = class {
	constructor() {
		this.restEncoder = Nf();
	}
	toUint8Array() {
		return If(this.restEncoder);
	}
	resetDsCurVal() {}
	writeDsClock(e) {
		G(this.restEncoder, e);
	}
	writeDsLen(e) {
		G(this.restEncoder, e);
	}
}, qm = class extends Km {
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
		Rf(this.restEncoder, e);
	}
	writeString(e) {
		Hf(this.restEncoder, e);
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
		Zf(this.restEncoder, e);
	}
	writeBuf(e) {
		Wf(this.restEncoder, e);
	}
	writeJSON(e) {
		Hf(this.restEncoder, JSON.stringify(e));
	}
	writeKey(e) {
		Hf(this.restEncoder, e);
	}
}, Jm = class {
	constructor() {
		this.restEncoder = Nf(), this.dsCurrVal = 0;
	}
	toUint8Array() {
		return If(this.restEncoder);
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	writeDsClock(e) {
		let t = e - this.dsCurrVal;
		this.dsCurrVal = e, G(this.restEncoder, t);
	}
	writeDsLen(e) {
		e === 0 && op(), G(this.restEncoder, e - 1), this.dsCurrVal += e;
	}
}, Ym = class extends Jm {
	constructor() {
		super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new np(), this.clientEncoder = new ep(), this.leftClockEncoder = new np(), this.rightClockEncoder = new np(), this.infoEncoder = new Qf(Rf), this.stringEncoder = new rp(), this.parentInfoEncoder = new Qf(Rf), this.typeRefEncoder = new ep(), this.lenEncoder = new ep();
	}
	toUint8Array() {
		let e = Nf();
		return G(e, 0), Wf(e, this.keyClockEncoder.toUint8Array()), Wf(e, this.clientEncoder.toUint8Array()), Wf(e, this.leftClockEncoder.toUint8Array()), Wf(e, this.rightClockEncoder.toUint8Array()), Wf(e, If(this.infoEncoder)), Wf(e, this.stringEncoder.toUint8Array()), Wf(e, If(this.parentInfoEncoder)), Wf(e, this.typeRefEncoder.toUint8Array()), Wf(e, this.lenEncoder.toUint8Array()), Uf(e, If(this.restEncoder)), If(e);
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
		Zf(this.restEncoder, e);
	}
	writeBuf(e) {
		Wf(this.restEncoder, e);
	}
	writeJSON(e) {
		Zf(this.restEncoder, e);
	}
	writeKey(e) {
		let t = this.keyMap.get(e);
		t === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
	}
}, Xm = (e, t, n, r) => {
	r = _f(r, t[0].id.clock);
	let i = Dh(t, r);
	G(e.restEncoder, t.length - i), e.writeClient(n), G(e.restEncoder, r);
	let a = t[i];
	a.write(e, r - a.id.clock);
	for (let n = i + 1; n < t.length; n++) t[n].write(e, 0);
}, Zm = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	n.forEach((e, n) => {
		J(t, n) > e && r.set(n, e);
	}), Th(t).forEach((e, t) => {
		n.has(t) || r.set(t, 0);
	}), G(e.restEncoder, r.size), uf(r.entries()).sort((e, t) => t[0] - e[0]).forEach(([n, r]) => {
		Xm(e, t.clients.get(n), n, r);
	});
}, Qm = (e, t) => {
	let n = tf(), r = K(e.restDecoder);
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
					i[n] = new p_(q(a, o), t), o += t;
					break;
				}
				case 10: {
					let t = K(e.restDecoder);
					i[n] = new Y_(q(a, o), t), o += t;
					break;
				}
				default: {
					let s = !(r & 192), c = new Q(q(a, o), null, (r & 128) == 128 ? e.readLeftID() : null, null, (r & 64) == 64 ? e.readRightID() : null, s ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null, s && (r & 32) == 32 ? e.readString() : null, K_(e, r));
					i[n] = c, o += c.length;
				}
			}
		}
	}
	return n;
}, $m = (e, t, n) => {
	let r = [], i = uf(n.keys()).sort((e, t) => e - t);
	if (i.length === 0) return null;
	let a = () => {
		if (i.length === 0) return null;
		let e = n.get(i[i.length - 1]);
		for (; e.refs.length === e.i;) if (i.pop(), i.length > 0) e = n.get(i[i.length - 1]);
		else return null;
		return e;
	}, o = a();
	if (o === null) return null;
	let s = new wh(), c = /* @__PURE__ */ new Map(), l = (e, t) => {
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
		if (u.constructor !== Y_) {
			let i = rf(d, u.id.client, () => J(t, u.id.client)) - u.id.clock;
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
		let e = new Ym();
		return Zm(e, s, /* @__PURE__ */ new Map()), G(e.restEncoder, 0), {
			missing: c,
			update: e.toUint8Array()
		};
	}
	return null;
}, eh = (e, t) => Zm(e, t.doc.store, t.beforeState), th = (e, t, n, r = new Gm(e)) => Y(t, (e) => {
	e.local = !1;
	let t = !1, n = e.doc, i = n.store, a = $m(e, i, Qm(r, n)), o = i.pendingStructs;
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
			o.update = Yh([o.update, a.update]);
		}
	} else i.pendingStructs = a;
	let s = Vm(r, e, i);
	if (i.pendingDs) {
		let t = new Gm(up(i.pendingDs));
		K(t.restDecoder);
		let n = Vm(t, e, i);
		i.pendingDs = s && n ? Yh([s, n]) : s || n;
	} else i.pendingDs = s;
	if (t) {
		let t = i.pendingStructs.update;
		i.pendingStructs = null, nh(e.doc, t);
	}
}, n, !1), nh = (e, t, n, r = Gm) => {
	let i = up(t);
	th(i, e, n, new r(i));
}, rh = class {
	constructor() {
		this.l = [];
	}
}, ih = () => new rh(), ah = (e, t) => e.l.push(t), oh = (e, t) => {
	let n = e.l, r = n.length;
	e.l = n.filter((e) => t !== e), r === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, sh = (e, t, n) => Gp(e.l, [t, n]), ch = class {
	constructor(e, t) {
		this.client = e, this.clock = t;
	}
}, lh = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, q = (e, t) => new ch(e, t), uh = (e) => {
	for (let [t, n] of e.doc.share.entries()) if (n === e) return t;
	throw op();
}, dh = (e, t) => {
	for (; t !== null;) {
		if (t.parent === e) return !0;
		t = t.parent._item;
	}
	return !1;
}, fh = class {
	constructor(e, t, n, r = 0) {
		this.type = e, this.tname = t, this.item = n, this.assoc = r;
	}
}, ph = class {
	constructor(e, t, n = 0) {
		this.type = e, this.index = t, this.assoc = n;
	}
}, mh = (e, t, n = 0) => new ph(e, t, n), hh = (e, t, n) => {
	let r = null, i = null;
	return e._item === null ? i = uh(e) : r = q(e._item.id.client, e._item.id.clock), new fh(r, i, t, n);
}, gh = (e, t, n = 0) => {
	let r = e._start;
	if (n < 0) {
		if (t === 0) return hh(e, null, n);
		t--;
	}
	for (; r !== null;) {
		if (!r.deleted && r.countable) {
			if (r.length > t) return hh(e, q(r.id.client, r.id.clock + t), n);
			t -= r.length;
		}
		if (r.right === null && n < 0) return hh(e, r.lastId, n);
		r = r.right;
	}
	return hh(e, null, n);
}, _h = (e, t) => {
	let n = Oh(e, t);
	return {
		item: n,
		diff: t.clock - n.id.clock
	};
}, vh = (e, t, n = !0) => {
	let r = t.store, i = e.item, a = e.type, o = e.tname, s = e.assoc, c = null, l = 0;
	if (i !== null) {
		if (J(r, i.client) <= i.clock) return null;
		let e = n ? V_(r, i) : _h(r, i), t = e.item;
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
			let { item: e } = n ? V_(r, a) : { item: Oh(r, a) };
			if (e instanceof Q && e.content instanceof z_) c = e.content.type;
			else return null;
		} else throw op();
		l = s >= 0 ? c._length : 0;
	}
	return mh(c, l, e.assoc);
}, yh = class {
	constructor(e, t) {
		this.ds = e, this.sv = t;
	}
}, bh = (e, t) => new yh(e, t);
bh(Lm(), /* @__PURE__ */ new Map());
var xh = (e) => bh(Rm(e.store), Th(e.store)), Sh = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !Nm(t.ds, e.id), Ch = (e, t) => {
	let n = rf(e.meta, Ch, sf), r = e.doc.store;
	n.has(t) || (t.sv.forEach((t, n) => {
		t < J(r, n) && Ah(e, q(n, t));
	}), jm(e, t.ds, (e) => {}), n.add(t));
}, wh = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
	}
}, Th = (e) => {
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
}, Eh = (e, t) => {
	let n = e.clients.get(t.id.client);
	if (n === void 0) n = [], e.clients.set(t.id.client, n);
	else {
		let e = n[n.length - 1];
		if (e.id.clock + e.length !== t.id.clock) throw op();
	}
	n.push(t);
}, Dh = (e, t) => {
	let n = 0, r = e.length - 1, i = e[r], a = i.id.clock;
	if (a === t) return r;
	let o = mf(t / (a + i.length - 1) * r);
	for (; n <= r;) {
		if (i = e[o], a = i.id.clock, a <= t) {
			if (t < a + i.length) return o;
			n = o + 1;
		} else r = o - 1;
		o = mf((n + r) / 2);
	}
	throw op();
}, Oh = (e, t) => {
	let n = e.clients.get(t.client);
	return n[Dh(n, t.clock)];
}, kh = (e, t, n) => {
	let r = Dh(t, n), i = t[r];
	return i.id.clock < n && i instanceof Q ? (t.splice(r + 1, 0, U_(e, i, n - i.id.clock)), r + 1) : r;
}, Ah = (e, t) => {
	let n = e.doc.store.clients.get(t.client);
	return n[kh(e, n, t.clock)];
}, jh = (e, t, n) => {
	let r = t.clients.get(n.client), i = Dh(r, n.clock), a = r[i];
	return n.clock !== a.id.clock + a.length - 1 && a.constructor !== p_ && r.splice(i + 1, 0, U_(e, a, n.clock - a.id.clock + 1)), a;
}, Mh = (e, t, n) => {
	let r = e.clients.get(t.id.client);
	r[Dh(r, t.id.clock)] = n;
}, Nh = (e, t, n, r, i) => {
	if (r === 0) return;
	let a = n + r, o = kh(e, t, n), s;
	do
		s = t[o++], a < s.id.clock + s.length && kh(e, t, a), i(s);
	while (o < t.length && t[o].id.clock < a);
}, Ph = class {
	constructor(e, t, n) {
		this.doc = e, this.deleteSet = new Am(), this.beforeState = Th(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = t, this.meta = /* @__PURE__ */ new Map(), this.local = n, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
	}
}, Fh = (e, t) => t.deleteSet.clients.size === 0 && !of(t.afterState, (e, n) => t.beforeState.get(n) !== e) ? !1 : (Pm(t.deleteSet), eh(e, t), zm(e, t.deleteSet), !0), Ih = (e, t, n) => {
	let r = t._item;
	(r === null || r.id.clock < (e.beforeState.get(r.id.client) || 0) && !r.deleted) && rf(e.changed, t, sf).add(n);
}, Lh = (e, t) => {
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
}, Rh = (e, t, n) => {
	for (let [r, i] of e.clients.entries()) {
		let e = t.clients.get(r);
		for (let r = i.length - 1; r >= 0; r--) {
			let a = i[r], o = a.clock + a.len;
			for (let r = Dh(e, a.clock), i = e[r]; r < e.length && i.id.clock < o; i = e[++r]) {
				let i = e[r];
				if (a.clock + a.len <= i.id.clock) break;
				i instanceof Q && i.deleted && !i.keep && n(i) && i.gc(t, !1);
			}
		}
	}
}, zh = (e, t) => {
	e.clients.forEach((e, n) => {
		let r = t.clients.get(n);
		for (let t = e.length - 1; t >= 0; t--) {
			let n = e[t], i = gf(r.length - 1, 1 + Dh(r, n.clock + n.len - 1));
			for (let e = i, t = r[e]; e > 0 && t.id.clock >= n.clock; t = r[e]) e -= 1 + Lh(r, e);
		}
	});
}, Bh = (e, t) => {
	if (t < e.length) {
		let n = e[t], r = n.doc, i = r.store, a = n.deleteSet, o = n._mergeStructs;
		try {
			Pm(a), n.afterState = Th(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
			let e = [];
			n.changed.forEach((t, r) => e.push(() => {
				(r._item === null || !r._item.deleted) && r._callObserver(n, t);
			})), e.push(() => {
				n.changedParentTypes.forEach((e, t) => {
					t._dEH.l.length > 0 && (t._item === null || !t._item.deleted) && (e = e.filter((e) => e.target._item === null || !e.target._item.deleted), e.forEach((e) => {
						e.currentTarget = t, e._path = null;
					}), e.sort((e, t) => e.path.length - t.path.length), sh(t._dEH, e, n));
				});
			}), e.push(() => r.emit("afterTransaction", [n, r])), Gp(e, []), n._needFormattingCleanup && Xg(n);
		} finally {
			r.gc && Rh(a, i, r.gcFilter), zh(a, i), n.afterState.forEach((e, t) => {
				let r = n.beforeState.get(t) || 0;
				if (r !== e) {
					let e = i.clients.get(t), n = _f(Dh(e, r), 1);
					for (let t = e.length - 1; t >= n;) t -= 1 + Lh(e, t);
				}
			});
			for (let e = o.length - 1; e >= 0; e--) {
				let { client: t, clock: n } = o[e].id, r = i.clients.get(t), a = Dh(r, n);
				a + 1 < r.length && Lh(r, a + 1) > 1 || a > 0 && Lh(r, a);
			}
			if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (Cm(vm, dm, "[yjs] ", fm, gm, "Changed the client-id because another client seems to be using it."), r.clientID = Hm()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
				let e = new qm();
				Fh(e, n) && r.emit("update", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			if (r._observers.has("updateV2")) {
				let e = new Ym();
				Fh(e, n) && r.emit("updateV2", [
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
			]), l.forEach((e) => e.destroy())), e.length <= t + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, e])) : Bh(e, t + 1);
		}
	}
}, Y = (e, t, n = null, r = !0) => {
	let i = e._transactionCleanups, a = !1, o = null;
	e._transaction === null && (a = !0, e._transaction = new Ph(e, n, r), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
	try {
		o = t(e._transaction);
	} finally {
		if (a) {
			let t = e._transaction === i[0];
			e._transaction = null, t && Bh(i, 0);
		}
	}
	return o;
}, Vh = class {
	constructor(e, t) {
		this.insertions = t, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
	}
}, Hh = (e, t, n) => {
	jm(e, n.deletions, (n) => {
		n instanceof Q && t.scope.some((t) => t === e.doc || dh(t, n)) && H_(n, !1);
	});
}, Uh = (e, t, n) => {
	let r = null, i = e.doc, a = e.scope;
	Y(i, (n) => {
		for (; t.length > 0 && e.currStackItem === null;) {
			let r = i.store, o = t.pop(), s = /* @__PURE__ */ new Set(), c = [], l = !1;
			jm(n, o.insertions, (e) => {
				if (e instanceof Q) {
					if (e.redone !== null) {
						let { item: t, diff: i } = V_(r, e.id);
						i > 0 && (t = Ah(n, q(t.id.client, t.id.clock + i))), e = t;
					}
					!e.deleted && a.some((t) => t === n.doc || dh(t, e)) && c.push(e);
				}
			}), jm(n, o.deletions, (e) => {
				e instanceof Q && a.some((t) => t === n.doc || dh(t, e)) && !Nm(o.insertions, e.id) && s.add(e);
			}), s.forEach((t) => {
				l = G_(n, t, s, o.insertions, e.ignoreRemoteMapChanges, e) !== null || l;
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
}, Wh = class extends pf {
	constructor(e, { captureTimeout: t = 500, captureTransaction: n = (e) => !0, deleteFilter: r = () => !0, trackedOrigins: i = /* @__PURE__ */ new Set([null]), ignoreRemoteMapChanges: a = !1, doc: o = ff(e) ? e[0].doc : e instanceof Um ? e : e.doc } = {}) {
		super(), this.scope = [], this.doc = o, this.addToScope(e), this.deleteFilter = r, i.add(this), this.trackedOrigins = i, this.captureTransaction = n, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = a, this.captureTimeout = t, this.afterTransactionHandler = (e) => {
			if (!this.captureTransaction(e) || !this.scope.some((t) => e.changedParentTypes.has(t) || t === this.doc) || !this.trackedOrigins.has(e.origin) && (!e.origin || !this.trackedOrigins.has(e.origin.constructor))) return;
			let t = this.undoing, n = this.redoing, r = t ? this.redoStack : this.undoStack;
			t ? this.stopCapturing() : n || this.clear(!1, !0);
			let i = new Am();
			e.afterState.forEach((t, n) => {
				let r = e.beforeState.get(n) || 0, a = t - r;
				a > 0 && Im(i, n, r, a);
			});
			let a = Ap(), o = !1;
			if (this.lastChange > 0 && a - this.lastChange < this.captureTimeout && r.length > 0 && !t && !n) {
				let t = r[r.length - 1];
				t.deletions = Fm([t.deletions, e.deleteSet]), t.insertions = Fm([t.insertions, i]);
			} else r.push(new Vh(e.deleteSet, i)), o = !0;
			!t && !n && (this.lastChange = a), jm(e, e.deleteSet, (t) => {
				t instanceof Q && this.scope.some((n) => n === e.doc || dh(n, t)) && H_(t, !0);
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
		e = ff(e) ? e : [e], e.forEach((e) => {
			t.has(e) || (t.add(e), (e instanceof X ? e.doc !== this.doc : e !== this.doc) && wm("[yjs#509] Not same Y.Doc"), this.scope.push(e));
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
			e && (this.undoStack.forEach((e) => Hh(n, this, e)), this.undoStack = []), t && (this.redoStack.forEach((e) => Hh(n, this, e)), this.redoStack = []), this.emit("stack-cleared", [{
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
			e = Uh(this, this.undoStack, "undo");
		} finally {
			this.undoing = !1;
		}
		return e;
	}
	redo() {
		this.redoing = !0;
		let e;
		try {
			e = Uh(this, this.redoStack, "redo");
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
function* Gh(e) {
	let t = K(e.restDecoder);
	for (let n = 0; n < t; n++) {
		let t = K(e.restDecoder), n = e.readClient(), r = K(e.restDecoder);
		for (let i = 0; i < t; i++) {
			let t = e.readInfo();
			if (t === 10) {
				let t = K(e.restDecoder);
				yield new Y_(q(n, r), t), r += t;
			} else if (31 & t) {
				let i = !(t & 192), a = new Q(q(n, r), null, (t & 128) == 128 ? e.readLeftID() : null, null, (t & 64) == 64 ? e.readRightID() : null, i ? e.readParentInfo() ? e.readString() : e.readLeftID() : null, i && (t & 32) == 32 ? e.readString() : null, K_(e, t));
				yield a, r += a.length;
			} else {
				let t = e.readLen();
				yield new p_(q(n, r), t), r += t;
			}
		}
	}
}
var Kh = class {
	constructor(e, t) {
		this.gen = Gh(e), this.curr = null, this.done = !1, this.filterSkips = t, this.next();
	}
	next() {
		do
			this.curr = this.gen.next().value || null;
		while (this.filterSkips && this.curr !== null && this.curr.constructor === Y_);
		return this.curr;
	}
}, qh = class {
	constructor(e) {
		this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
	}
}, Jh = (e, t) => {
	if (e.constructor === p_) {
		let { client: n, clock: r } = e.id;
		return new p_(q(n, r + t), e.length - t);
	}
	if (e.constructor === Y_) {
		let { client: n, clock: r } = e.id;
		return new Y_(q(n, r + t), e.length - t);
	}
	{
		let n = e, { client: r, clock: i } = n.id;
		return new Q(q(r, i + t), null, q(r, i + t - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(t));
	}
}, Yh = (e, t = Gm, n = Ym) => {
	if (e.length === 1) return e[0];
	let r = e.map((e) => new t(up(e))), i = r.map((e) => new Kh(e, !0)), a = null, o = new n(), s = new qh(o);
	for (; i = i.filter((e) => e.curr !== null), i.sort((e, t) => {
		if (e.curr.id.client === t.curr.id.client) {
			let n = e.curr.id.clock - t.curr.id.clock;
			return n === 0 ? e.curr.constructor === t.curr.constructor ? 0 : e.curr.constructor === Y_ ? 1 : -1 : n;
		}
		return t.curr.id.client - e.curr.id.client;
	}), i.length !== 0;) {
		let e = i[0], t = e.curr.id.client;
		if (a !== null) {
			let n = e.curr, r = !1;
			for (; n !== null && n.id.clock + n.length <= a.struct.id.clock + a.struct.length && n.id.client >= a.struct.id.client;) n = e.next(), r = !0;
			if (n === null || n.id.client !== t || r && n.id.clock > a.struct.id.clock + a.struct.length) continue;
			if (t !== a.struct.id.client) Zh(s, a.struct, a.offset), a = {
				struct: n,
				offset: 0
			}, e.next();
			else if (a.struct.id.clock + a.struct.length < n.id.clock) {
				if (a.struct.constructor === Y_) a.struct.length = n.id.clock + n.length - a.struct.id.clock;
				else {
					Zh(s, a.struct, a.offset);
					let e = n.id.clock - a.struct.id.clock - a.struct.length;
					a = {
						struct: new Y_(q(t, a.struct.id.clock + a.struct.length), e),
						offset: 0
					};
				}
			} else {
				let t = a.struct.id.clock + a.struct.length - n.id.clock;
				t > 0 && (a.struct.constructor === Y_ ? a.struct.length -= t : n = Jh(n, t)), a.struct.mergeWith(n) || (Zh(s, a.struct, a.offset), a = {
					struct: n,
					offset: 0
				}, e.next());
			}
		} else a = {
			struct: e.curr,
			offset: 0
		}, e.next();
		for (let n = e.curr; n !== null && n.id.client === t && n.id.clock === a.struct.id.clock + a.struct.length && n.constructor !== Y_; n = e.next()) Zh(s, a.struct, a.offset), a = {
			struct: n,
			offset: 0
		};
	}
	return a !== null && (Zh(s, a.struct, a.offset), a = null), Qh(s), zm(o, Fm(r.map((e) => Bm(e)))), o.toUint8Array();
}, Xh = (e) => {
	e.written > 0 && (e.clientStructs.push({
		written: e.written,
		restEncoder: If(e.encoder.restEncoder)
	}), e.encoder.restEncoder = Nf(), e.written = 0);
}, Zh = (e, t, n) => {
	e.written > 0 && e.currClient !== t.id.client && Xh(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), G(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, Qh = (e) => {
	Xh(e);
	let t = e.encoder.restEncoder;
	G(t, e.clientStructs.length);
	for (let n = 0; n < e.clientStructs.length; n++) {
		let r = e.clientStructs[n];
		G(t, r.written), Uf(t, r.restEncoder);
	}
}, $h = "You must not compute changes after the event-handler fired.", eg = class {
	constructor(e, t) {
		this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
	}
	get path() {
		return this._path ||= tg(this.currentTarget, this.target);
	}
	deletes(e) {
		return Nm(this.transaction.deleteSet, e.id);
	}
	get keys() {
		if (this._keys === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw ip($h);
			let e = /* @__PURE__ */ new Map(), t = this.target;
			this.transaction.changed.get(t).forEach((n) => {
				if (n !== null) {
					let r = t._map.get(n), i, a;
					if (this.adds(r)) {
						let e = r.left;
						for (; e !== null && this.adds(e);) e = e.left;
						if (this.deletes(r)) {
							if (e !== null && this.deletes(e)) i = "delete", a = cf(e.content.getContent());
							else return;
						} else e !== null && this.deletes(e) ? (i = "update", a = cf(e.content.getContent())) : (i = "add", a = void 0);
					} else if (this.deletes(r)) i = "delete", a = cf(r.content.getContent());
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
			if (this.transaction.doc._transactionCleanups.length === 0) throw ip($h);
			let t = this.target, n = sf(), r = sf(), i = [];
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
}, tg = (e, t) => {
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
}, ng = () => {
	wm("Invalid access: Add Yjs type to a document before reading data.");
}, rg = 80, ig = 0, ag = class {
	constructor(e, t) {
		e.marker = !0, this.p = e, this.index = t, this.timestamp = ig++;
	}
}, og = (e) => {
	e.timestamp = ig++;
}, sg = (e, t, n) => {
	e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = ig++;
}, cg = (e, t, n) => {
	if (e.length >= rg) {
		let r = e.reduce((e, t) => e.timestamp < t.timestamp ? e : t);
		return sg(r, t, n), r;
	}
	{
		let r = new ag(t, n);
		return e.push(r), r;
	}
}, lg = (e, t) => {
	if (e._start === null || t === 0 || e._searchMarker === null) return null;
	let n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((e, n) => hf(t - e.index) < hf(t - n.index) ? e : n), r = e._start, i = 0;
	for (n !== null && (r = n.p, i = n.index, og(n)); r.right !== null && i < t;) {
		if (!r.deleted && r.countable) {
			if (t < i + r.length) break;
			i += r.length;
		}
		r = r.right;
	}
	for (; r.left !== null && i > t;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	return n !== null && hf(n.index - i) < r.parent.length / rg ? (sg(n, r, i), n) : cg(e._searchMarker, r, i);
}, ug = (e, t, n) => {
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
		(t < i.index || n > 0 && t === i.index) && (i.index = _f(t, i.index + n));
	}
}, dg = (e, t, n) => {
	let r = e, i = t.changedParentTypes;
	for (; rf(i, e, () => []).push(n), e._item !== null;) e = e._item.parent;
	sh(r._eH, n, t);
}, X = class {
	constructor() {
		this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = ih(), this._dEH = ih(), this._searchMarker = null;
	}
	get parent() {
		return this._item ? this._item.parent : null;
	}
	_integrate(e, t) {
		this.doc = e, this._item = t;
	}
	_copy() {
		throw ap();
	}
	clone() {
		throw ap();
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
		ah(this._eH, e);
	}
	observeDeep(e) {
		ah(this._dEH, e);
	}
	unobserve(e) {
		oh(this._eH, e);
	}
	unobserveDeep(e) {
		oh(this._dEH, e);
	}
	toJSON() {}
}, fg = (e, t, n) => {
	e.doc ?? ng(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
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
}, pg = (e) => {
	e.doc ?? ng();
	let t = [], n = e._start;
	for (; n !== null;) {
		if (n.countable && !n.deleted) {
			let e = n.content.getContent();
			for (let n = 0; n < e.length; n++) t.push(e[n]);
		}
		n = n.right;
	}
	return t;
}, mg = (e, t) => {
	let n = [], r = e._start;
	for (; r !== null;) {
		if (r.countable && Sh(r, t)) {
			let e = r.content.getContent();
			for (let t = 0; t < e.length; t++) n.push(e[t]);
		}
		r = r.right;
	}
	return n;
}, hg = (e, t) => {
	let n = 0, r = e._start;
	for (e.doc ?? ng(); r !== null;) {
		if (r.countable && !r.deleted) {
			let i = r.content.getContent();
			for (let r = 0; r < i.length; r++) t(i[r], n++, e);
		}
		r = r.right;
	}
}, gg = (e, t) => {
	let n = [];
	return hg(e, (r, i) => {
		n.push(t(r, i, e));
	}), n;
}, _g = (e) => {
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
}, vg = (e, t) => {
	e.doc ?? ng();
	let n = lg(e, t), r = e._start;
	for (n !== null && (r = n.p, t -= n.index); r !== null; r = r.right) if (!r.deleted && r.countable) {
		if (t < r.length) return r.content.getContent()[t];
		t -= r.length;
	}
}, yg = (e, t, n, r) => {
	let i = n, a = e.doc, o = a.clientID, s = a.store, c = n === null ? t._start : n.right, l = [], u = () => {
		l.length > 0 && (i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new D_(l)), i.integrate(e, 0), l = []);
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
					i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new m_(new Uint8Array(n))), i.integrate(e, 0);
					break;
				case Um:
					i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new y_(n)), i.integrate(e, 0);
					break;
				default: if (n instanceof X) i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new z_(n)), i.integrate(e, 0);
				else throw Error("Unexpected content type in insert operation");
			}
		}
	}), u();
}, bg = () => ip("Length exceeded!"), xg = (e, t, n, r) => {
	if (n > t._length) throw bg();
	if (n === 0) return t._searchMarker && ug(t._searchMarker, n, r.length), yg(e, t, null, r);
	let i = n, a = lg(t, n), o = t._start;
	for (a !== null && (o = a.p, n -= a.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right) if (!o.deleted && o.countable) {
		if (n <= o.length) {
			n < o.length && Ah(e, q(o.id.client, o.id.clock + n));
			break;
		}
		n -= o.length;
	}
	return t._searchMarker && ug(t._searchMarker, i, r.length), yg(e, t, o, r);
}, Sg = (e, t, n) => {
	let r = (t._searchMarker || []).reduce((e, t) => t.index > e.index ? t : e, {
		index: 0,
		p: t._start
	}).p;
	if (r) for (; r.right;) r = r.right;
	return yg(e, t, r, n);
}, Cg = (e, t, n, r) => {
	if (r === 0) return;
	let i = n, a = r, o = lg(t, n), s = t._start;
	for (o !== null && (s = o.p, n -= o.index); s !== null && n > 0; s = s.right) !s.deleted && s.countable && (n < s.length && Ah(e, q(s.id.client, s.id.clock + n)), n -= s.length);
	for (; r > 0 && s !== null;) s.deleted || (r < s.length && Ah(e, q(s.id.client, s.id.clock + r)), s.delete(e), r -= s.length), s = s.right;
	if (r > 0) throw bg();
	t._searchMarker && ug(t._searchMarker, i, -a + r);
}, wg = (e, t, n) => {
	let r = t._map.get(n);
	r !== void 0 && r.delete(e);
}, Tg = (e, t, n, r) => {
	let i = t._map.get(n) || null, a = e.doc, o = a.clientID, s;
	if (r == null) s = new D_([r]);
	else switch (r.constructor) {
		case Number:
		case Object:
		case Boolean:
		case Array:
		case String:
		case Date:
		case BigInt:
			s = new D_([r]);
			break;
		case Uint8Array:
			s = new m_(r);
			break;
		case Um:
			s = new y_(r);
			break;
		default: if (r instanceof X) s = new z_(r);
		else throw Error("Unexpected content type");
	}
	new Q(q(o, J(a.store, o)), i, i && i.lastId, null, null, t, n, s).integrate(e, 0);
}, Eg = (e, t) => {
	e.doc ?? ng();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Dg = (e) => {
	let t = {};
	return e.doc ?? ng(), e._map.forEach((e, n) => {
		e.deleted || (t[n] = e.content.getContent()[e.length - 1]);
	}), t;
}, Og = (e, t) => {
	e.doc ?? ng();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted;
}, kg = (e, t) => {
	let n = {};
	return e._map.forEach((e, r) => {
		let i = e;
		for (; i !== null && (!t.sv.has(i.id.client) || i.id.clock >= (t.sv.get(i.id.client) || 0));) i = i.left;
		i !== null && Sh(i, t) && (n[r] = i.content.getContent()[i.length - 1]);
	}), n;
}, Ag = (e) => (e.doc ?? ng(), Dm(e._map.entries(), (e) => !e[1].deleted)), jg = class extends eg {}, Mg = class e extends X {
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
		return this.doc ?? ng(), this._length;
	}
	_callObserver(e, t) {
		super._callObserver(e, t), dg(this, e, new jg(this, e));
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : Y(this.doc, (n) => {
			xg(n, this, e, t);
		});
	}
	push(e) {
		this.doc === null ? this._prelimContent.push(...e) : Y(this.doc, (t) => {
			Sg(t, this, e);
		});
	}
	unshift(e) {
		this.insert(0, e);
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : Y(this.doc, (n) => {
			Cg(n, this, e, t);
		});
	}
	get(e) {
		return vg(this, e);
	}
	toArray() {
		return pg(this);
	}
	slice(e = 0, t = this.length) {
		return fg(this, e, t);
	}
	toJSON() {
		return this.map((e) => e instanceof X ? e.toJSON() : e);
	}
	map(e) {
		return gg(this, e);
	}
	forEach(e) {
		hg(this, e);
	}
	[Symbol.iterator]() {
		return _g(this);
	}
	_write(e) {
		e.writeTypeRef(M_);
	}
}, Ng = (e) => new Mg(), Pg = class extends eg {
	constructor(e, t, n) {
		super(e, t), this.keysChanged = n;
	}
}, Fg = class e extends X {
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
		dg(this, e, new Pg(this, e, t));
	}
	toJSON() {
		this.doc ?? ng();
		let e = {};
		return this._map.forEach((t, n) => {
			if (!t.deleted) {
				let r = t.content.getContent()[t.length - 1];
				e[n] = r instanceof X ? r.toJSON() : r;
			}
		}), e;
	}
	get size() {
		return [...Ag(this)].length;
	}
	keys() {
		return Om(Ag(this), (e) => e[0]);
	}
	values() {
		return Om(Ag(this), (e) => e[1].content.getContent()[e[1].length - 1]);
	}
	entries() {
		return Om(Ag(this), (e) => [e[0], e[1].content.getContent()[e[1].length - 1]]);
	}
	forEach(e) {
		this.doc ?? ng(), this._map.forEach((t, n) => {
			t.deleted || e(t.content.getContent()[t.length - 1], n, this);
		});
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	delete(e) {
		this.doc === null ? this._prelimContent.delete(e) : Y(this.doc, (t) => {
			wg(t, this, e);
		});
	}
	set(e, t) {
		return this.doc === null ? this._prelimContent.set(e, t) : Y(this.doc, (n) => {
			Tg(n, this, e, t);
		}), t;
	}
	get(e) {
		return Eg(this, e);
	}
	has(e) {
		return Og(this, e);
	}
	clear() {
		this.doc === null ? this._prelimContent.clear() : Y(this.doc, (e) => {
			this.forEach(function(t, n, r) {
				wg(e, r, n);
			});
		});
	}
	_write(e) {
		e.writeTypeRef(N_);
	}
}, Ig = (e) => new Fg(), Lg = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && Hp(e, t), Rg = class {
	constructor(e, t, n, r) {
		this.left = e, this.right = t, this.index = n, this.currentAttributes = r;
	}
	forward() {
		switch (this.right === null && op(), this.right.content.constructor) {
			case Z:
				this.right.deleted || Hg(this.currentAttributes, this.right.content);
				break;
			default: this.right.deleted || (this.index += this.right.length);
		}
		this.left = this.right, this.right = this.right.right;
	}
}, zg = (e, t, n) => {
	for (; t.right !== null && n > 0;) {
		switch (t.right.content.constructor) {
			case Z:
				t.right.deleted || Hg(t.currentAttributes, t.right.content);
				break;
			default: t.right.deleted || (n < t.right.length && Ah(e, q(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
		}
		t.left = t.right, t.right = t.right.right;
	}
	return t;
}, Bg = (e, t, n, r) => {
	let i = /* @__PURE__ */ new Map(), a = r ? lg(t, n) : null;
	return a ? zg(e, new Rg(a.p.left, a.p, a.index, i), n - a.index) : zg(e, new Rg(null, t._start, 0, i), n);
}, Vg = (e, t, n, r) => {
	for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === Z && Lg(r.get(n.right.content.key), n.right.content.value));) n.right.deleted || r.delete(n.right.content.key), n.forward();
	let i = e.doc, a = i.clientID;
	r.forEach((r, o) => {
		let s = n.left, c = n.right, l = new Q(q(a, J(i.store, a)), s, s && s.lastId, c, c && c.id, t, null, new Z(o, r));
		l.integrate(e, 0), n.right = l, n.forward();
	});
}, Hg = (e, t) => {
	let { key: n, value: r } = t;
	r === null ? e.delete(n) : e.set(n, r);
}, Ug = (e, t) => {
	for (; e.right !== null && (e.right.deleted || e.right.content.constructor === Z && Lg(t[e.right.content.key] ?? null, e.right.content.value));) e.forward();
}, Wg = (e, t, n, r) => {
	let i = e.doc, a = i.clientID, o = /* @__PURE__ */ new Map();
	for (let s in r) {
		let c = r[s], l = n.currentAttributes.get(s) ?? null;
		if (!Lg(l, c)) {
			o.set(s, l);
			let { left: r, right: u } = n;
			n.right = new Q(q(a, J(i.store, a)), r, r && r.lastId, u, u && u.id, t, null, new Z(s, c)), n.right.integrate(e, 0), n.forward();
		}
	}
	return o;
}, Gg = (e, t, n, r, i) => {
	n.currentAttributes.forEach((e, t) => {
		i[t] === void 0 && (i[t] = null);
	});
	let a = e.doc, o = a.clientID;
	Ug(n, i);
	let s = Wg(e, t, n, i), c = r.constructor === String ? new k_(r) : r instanceof X ? new z_(r) : new x_(r), { left: l, right: u, index: d } = n;
	t._searchMarker && ug(t._searchMarker, n.index, c.getLength()), u = new Q(q(o, J(a.store, o)), l, l && l.lastId, u, u && u.id, t, null, c), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), Vg(e, t, n, s);
}, Kg = (e, t, n, r, i) => {
	let a = e.doc, o = a.clientID;
	Ug(n, i);
	let s = Wg(e, t, n, i);
	iterationLoop: for (; n.right !== null && (r > 0 || s.size > 0 && (n.right.deleted || n.right.content.constructor === Z));) {
		if (!n.right.deleted) switch (n.right.content.constructor) {
			case Z: {
				let { key: t, value: a } = n.right.content, o = i[t];
				if (o !== void 0) {
					if (Lg(o, a)) s.delete(t);
					else {
						if (r === 0) break iterationLoop;
						s.set(t, a);
					}
					n.right.delete(e);
				} else n.currentAttributes.set(t, a);
				break;
			}
			default: r < n.right.length && Ah(e, q(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
		}
		n.forward();
	}
	if (r > 0) {
		let i = "";
		for (; r > 0; r--) i += "\n";
		n.right = new Q(q(o, J(a.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new k_(i)), n.right.integrate(e, 0), n.forward();
	}
	Vg(e, t, n, s);
}, qg = (e, t, n, r, i) => {
	let a = t, o = tf();
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
					(o.get(a) !== n || u === l) && (t.delete(e), s++, !c && (i.get(a) ?? null) === l && u !== l && (u === null ? i.delete(a) : i.set(a, u))), !c && !t.deleted && Hg(i, n);
					break;
				}
			}
		}
		t = t.right;
	}
	return s;
}, Jg = (e, t) => {
	for (; t && t.right && (t.right.deleted || !t.right.countable);) t = t.right;
	let n = /* @__PURE__ */ new Set();
	for (; t && (t.deleted || !t.countable);) {
		if (!t.deleted && t.content.constructor === Z) {
			let r = t.content.key;
			n.has(r) ? t.delete(e) : n.add(r);
		}
		t = t.left;
	}
}, Yg = (e) => {
	let t = 0;
	return Y(e.doc, (n) => {
		let r = e._start, i = e._start, a = tf(), o = nf(a);
		for (; i;) {
			if (i.deleted === !1) switch (i.content.constructor) {
				case Z:
					Hg(o, i.content);
					break;
				default: t += qg(n, r, i, a, o), a = nf(o), r = i;
			}
			i = i.right;
		}
	}), t;
}, Xg = (e) => {
	let t = /* @__PURE__ */ new Set(), n = e.doc;
	for (let [r, i] of e.afterState.entries()) {
		let a = e.beforeState.get(r) || 0;
		i !== a && Nh(e, n.store.clients.get(r), a, i, (e) => {
			!e.deleted && e.content.constructor === Z && e.constructor !== p_ && t.add(e.parent);
		});
	}
	Y(n, (n) => {
		jm(e, e.deleteSet, (e) => {
			if (e instanceof p_ || !e.parent._hasFormatting || t.has(e.parent)) return;
			let r = e.parent;
			e.content.constructor === Z ? t.add(r) : Jg(n, e);
		});
		for (let e of t) Yg(e);
	});
}, Zg = (e, t, n) => {
	let r = n, i = nf(t.currentAttributes), a = t.right;
	for (; n > 0 && t.right !== null;) {
		if (t.right.deleted === !1) switch (t.right.content.constructor) {
			case z_:
			case x_:
			case k_: n < t.right.length && Ah(e, q(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
		}
		t.forward();
	}
	a && qg(e, a, t.right, i, t.currentAttributes);
	let o = (t.left || t.right).parent;
	return o._searchMarker && ug(o._searchMarker, t.index, -r + n), t;
}, Qg = class extends eg {
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
							case "retain": c > 0 && (e = { retain: c }, zp(o) || (e.attributes = Fp({}, o))), c = 0;
						}
						e && t.push(e), a = null;
					}
				};
				for (; i !== null;) {
					switch (i.content.constructor) {
						case z_:
						case x_:
							this.adds(i) ? this.deletes(i) || (u(), a = "insert", s = i.content.getContent()[0], u()) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += 1) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += 1);
							break;
						case k_:
							this.adds(i) ? this.deletes(i) || (a !== "insert" && (u(), a = "insert"), s += i.content.str) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += i.length) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += i.length);
							break;
						case Z: {
							let { key: t, value: s } = i.content;
							if (this.adds(i)) this.deletes(i) || (Lg(n.get(t) ?? null, s) ? s !== null && i.delete(e) : (a === "retain" && u(), Lg(s, r.get(t) ?? null) ? delete o[t] : o[t] = s));
							else if (this.deletes(i)) {
								r.set(t, s);
								let e = n.get(t) ?? null;
								Lg(e, s) || (a === "retain" && u(), o[t] = e);
							} else if (!i.deleted) {
								r.set(t, s);
								let n = o[t];
								n !== void 0 && (Lg(n, s) ? n !== null && i.delete(e) : (a === "retain" && u(), s === null ? delete o[t] : o[t] = s));
							}
							i.deleted || (a === "insert" && u(), Hg(n, i.content));
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
}, $g = class e extends X {
	constructor(e) {
		super(), this._pending = e === void 0 ? [] : [() => this.insert(0, e)], this._searchMarker = [], this._hasFormatting = !1;
	}
	get length() {
		return this.doc ?? ng(), this._length;
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
		let n = new Qg(this, e, t);
		dg(this, e, n), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
	}
	toString() {
		this.doc ?? ng();
		let e = "", t = this._start;
		for (; t !== null;) !t.deleted && t.countable && t.content.constructor === k_ && (e += t.content.str), t = t.right;
		return e;
	}
	toJSON() {
		return this.toString();
	}
	applyDelta(e, { sanitize: t = !0 } = {}) {
		this.doc === null ? this._pending.push(() => this.applyDelta(e)) : Y(this.doc, (n) => {
			let r = new Rg(null, this._start, 0, /* @__PURE__ */ new Map());
			for (let i = 0; i < e.length; i++) {
				let a = e[i];
				if (a.insert !== void 0) {
					let o = !t && typeof a.insert == "string" && i === e.length - 1 && r.right === null && a.insert.slice(-1) === "\n" ? a.insert.slice(0, -1) : a.insert;
					(typeof o != "string" || o.length > 0) && Gg(n, this, r, o, a.attributes || {});
				} else a.retain === void 0 ? a.delete !== void 0 && Zg(n, r, a.delete) : Kg(n, this, r, a.retain, a.attributes || {});
			}
		});
	}
	toDelta(e, t, n) {
		this.doc ?? ng();
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
				if (Sh(s, e) || t !== void 0 && Sh(s, t)) switch (s.content.constructor) {
					case k_: {
						let r = i.get("ychange");
						e !== void 0 && !Sh(s, e) ? (r === void 0 || r.user !== s.id.client || r.type !== "removed") && (c(), i.set("ychange", n ? n("removed", s.id) : { type: "removed" })) : t !== void 0 && !Sh(s, t) ? (r === void 0 || r.user !== s.id.client || r.type !== "added") && (c(), i.set("ychange", n ? n("added", s.id) : { type: "added" })) : r !== void 0 && (c(), i.delete("ychange")), o += s.content.str;
						break;
					}
					case z_:
					case x_: {
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
					case Z: Sh(s, e) && (c(), Hg(i, s.content));
				}
				s = s.right;
			}
			c();
		};
		return e || t ? Y(a, (n) => {
			e && Ch(n, e), t && Ch(n, t), l();
		}, "cleanup") : l(), r;
	}
	insert(e, t, n) {
		if (t.length <= 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.insert(e, t, n)) : Y(r, (r) => {
			let i = Bg(r, this, e, !n);
			n || (n = {}, i.currentAttributes.forEach((e, t) => {
				n[t] = e;
			})), Gg(r, this, i, t, n);
		});
	}
	insertEmbed(e, t, n) {
		let r = this.doc;
		r === null ? this._pending.push(() => this.insertEmbed(e, t, n || {})) : Y(r, (r) => {
			let i = Bg(r, this, e, !n);
			Gg(r, this, i, t, n || {});
		});
	}
	delete(e, t) {
		if (t === 0) return;
		let n = this.doc;
		n === null ? this._pending.push(() => this.delete(e, t)) : Y(n, (n) => {
			Zg(n, Bg(n, this, e, !0), t);
		});
	}
	format(e, t, n) {
		if (t === 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.format(e, t, n)) : Y(r, (r) => {
			let i = Bg(r, this, e, !1);
			i.right !== null && Kg(r, this, i, t, n);
		});
	}
	removeAttribute(e) {
		this.doc === null ? this._pending.push(() => this.removeAttribute(e)) : Y(this.doc, (t) => {
			wg(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._pending.push(() => this.setAttribute(e, t)) : Y(this.doc, (n) => {
			Tg(n, this, e, t);
		});
	}
	getAttribute(e) {
		return Eg(this, e);
	}
	getAttributes() {
		return Dg(this);
	}
	_write(e) {
		e.writeTypeRef(P_);
	}
}, e_ = (e) => new $g(), t_ = class {
	constructor(e, t = () => !0) {
		this._filter = t, this._root = e, this._currentNode = e._start, this._firstCall = !0, e.doc ?? ng();
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this._currentNode, t = e && e.content && e.content.type;
		if (e !== null && (!this._firstCall || e.deleted || !this._filter(t))) do
			if (t = e.content.type, !e.deleted && (t.constructor === i_ || t.constructor === n_) && t._start !== null) e = t._start;
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
}, n_ = class e extends X {
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
		return this.doc ?? ng(), this._prelimContent === null ? this._length : this._prelimContent.length;
	}
	createTreeWalker(e) {
		return new t_(this, e);
	}
	querySelector(e) {
		e = e.toUpperCase();
		let t = new t_(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e).next();
		return t.done ? null : t.value;
	}
	querySelectorAll(e) {
		return e = e.toUpperCase(), uf(new t_(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e));
	}
	_callObserver(e, t) {
		dg(this, e, new o_(this, t, e));
	}
	toString() {
		return gg(this, (e) => e.toString()).join("");
	}
	toJSON() {
		return this.toString();
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createDocumentFragment();
		return n !== void 0 && n._createAssociation(r, this), hg(this, (i) => {
			r.insertBefore(i.toDOM(e, t, n), null);
		}), r;
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : Y(this.doc, (n) => {
			xg(n, this, e, t);
		});
	}
	insertAfter(e, t) {
		if (this.doc !== null) Y(this.doc, (n) => {
			let r = e && e instanceof X ? e._item : e;
			yg(n, this, r, t);
		});
		else {
			let n = this._prelimContent, r = e === null ? 0 : n.findIndex((t) => t === e) + 1;
			if (r === 0 && e !== null) throw ip("Reference item not found");
			n.splice(r, 0, ...t);
		}
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : Y(this.doc, (n) => {
			Cg(n, this, e, t);
		});
	}
	toArray() {
		return pg(this);
	}
	push(e) {
		this.insert(this.length, e);
	}
	unshift(e) {
		this.insert(0, e);
	}
	get(e) {
		return vg(this, e);
	}
	slice(e = 0, t = this.length) {
		return fg(this, e, t);
	}
	forEach(e) {
		hg(this, e);
	}
	_write(e) {
		e.writeTypeRef(I_);
	}
}, r_ = (e) => new n_(), i_ = class e extends n_ {
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
		return Lp(this.getAttributes(), (e, n) => {
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
			wg(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._prelimAttrs.set(e, t) : Y(this.doc, (n) => {
			Tg(n, this, e, t);
		});
	}
	getAttribute(e) {
		return Eg(this, e);
	}
	hasAttribute(e) {
		return Og(this, e);
	}
	getAttributes(e) {
		return e ? kg(this, e) : Dg(this);
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createElement(this.nodeName), i = this.getAttributes();
		for (let e in i) {
			let t = i[e];
			typeof t == "string" && r.setAttribute(e, t);
		}
		return hg(this, (i) => {
			r.appendChild(i.toDOM(e, t, n));
		}), n !== void 0 && n._createAssociation(r, this), r;
	}
	_write(e) {
		e.writeTypeRef(F_), e.writeKey(this.nodeName);
	}
}, a_ = (e) => new i_(e.readKey()), o_ = class extends eg {
	constructor(e, t, n) {
		super(e, n), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), t.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.attributesChanged.add(e);
		});
	}
}, s_ = class e extends Fg {
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
		e.writeTypeRef(L_), e.writeKey(this.hookName);
	}
}, c_ = (e) => new s_(e.readKey()), l_ = class e extends $g {
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
		e.writeTypeRef(R_);
	}
}, u_ = (e) => new l_(), d_ = class {
	constructor(e, t) {
		this.id = e, this.length = t;
	}
	get deleted() {
		throw ap();
	}
	mergeWith(e) {
		return !1;
	}
	write(e, t, n) {
		throw ap();
	}
	integrate(e, t) {
		throw ap();
	}
}, f_ = 0, p_ = class extends d_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor && (this.length += e.length, !0);
	}
	integrate(e, t) {
		t > 0 && (this.id.clock += t, this.length -= t), Eh(e.doc.store, this);
	}
	write(e, t) {
		e.writeInfo(f_), e.writeLen(this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, m_ = class e {
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
		throw ap();
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
}, h_ = (e) => new m_(e.readBuf()), g_ = class e {
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
		Im(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeLen(this.len - t);
	}
	getRef() {
		return 1;
	}
}, __ = (e) => new g_(e.readLen()), v_ = (e, t) => new Um({
	guid: e,
	...t,
	shouldLoad: t.shouldLoad || t.autoLoad || !1
}), y_ = class e {
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
		return new e(v_(this.doc.guid, this.opts));
	}
	splice(e) {
		throw ap();
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
}, b_ = (e) => new y_(v_(e.readString(), e.readAny())), x_ = class e {
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
		throw ap();
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
}, S_ = (e) => new x_(e.readJSON()), Z = class e {
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
		throw ap();
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
}, C_ = (e) => new Z(e.readKey(), e.readJSON()), w_ = class e {
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
}, T_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		t === "undefined" ? n.push(void 0) : n.push(JSON.parse(t));
	}
	return new w_(n);
}, E_ = $p("node_env") === "development", D_ = class e {
	constructor(e) {
		this.arr = e, E_ && Wp(e);
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
}, O_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) n.push(e.readAny());
	return new D_(n);
}, k_ = class e {
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
}, A_ = (e) => new k_(e.readString()), j_ = [
	Ng,
	Ig,
	e_,
	a_,
	r_,
	c_,
	u_
], M_ = 0, N_ = 1, P_ = 2, F_ = 3, I_ = 4, L_ = 5, R_ = 6, z_ = class e {
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
		throw ap();
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
}, B_ = (e) => new z_(j_[e.readTypeRef()](e)), V_ = (e, t) => {
	let n = t, r = 0, i;
	do
		r > 0 && (n = q(n.client, n.clock + r)), i = Oh(e, n), r = n.clock - i.id.clock, n = i.redone;
	while (n !== null && i instanceof Q);
	return {
		item: i,
		diff: r
	};
}, H_ = (e, t) => {
	for (; e !== null && e.keep !== t;) e.keep = t, e = e.parent._item;
}, U_ = (e, t, n) => {
	let { client: r, clock: i } = t.id, a = new Q(q(r, i + n), t, q(r, i + n - 1), t.right, t.rightOrigin, t.parent, t.parentSub, t.content.splice(n));
	return t.deleted && a.markDeleted(), t.keep && (a.keep = !0), t.redone !== null && (a.redone = q(t.redone.client, t.redone.clock + n)), t.right = a, a.right !== null && (a.right.left = a), e._mergeStructs.push(a), a.parentSub !== null && a.right === null && a.parent._map.set(a.parentSub, a), t.length = n, a;
}, W_ = (e, t) => df(e, (e) => Nm(e.deletions, t)), G_ = (e, t, n, r, i, a) => {
	let o = e.doc, s = o.store, c = o.clientID, l = t.redone;
	if (l !== null) return Ah(e, l);
	let u = t.parent._item, d = null, f;
	if (u !== null && u.deleted === !0) {
		if (u.redone === null && (!n.has(u) || G_(e, u, n, r, i, a) === null)) return null;
		for (; u.redone !== null;) u = Ah(e, u.redone);
	}
	let p = u === null ? t.parent : u.content.type;
	if (t.parentSub === null) {
		for (d = t.left, f = t; d !== null;) {
			let t = d;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Ah(e, t.redone);
			if (t !== null && t.parent._item === u) {
				d = t;
				break;
			}
			d = d.left;
		}
		for (; f !== null;) {
			let t = f;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Ah(e, t.redone);
			if (t !== null && t.parent._item === u) {
				f = t;
				break;
			}
			f = f.right;
		}
	} else if (f = null, t.right && !i) {
		for (d = t; d !== null && d.right !== null && (d.right.redone || Nm(r, d.right.id) || W_(a.undoStack, d.right.id) || W_(a.redoStack, d.right.id));) for (d = d.right; d.redone;) d = Ah(e, d.redone);
		if (d && d.right !== null) return null;
	} else d = p._map.get(t.parentSub) || null;
	let m = q(c, J(s, c)), h = new Q(m, d, d && d.lastId, f, f && f.id, p, t.parentSub, t.content.copy());
	return t.redone = m, H_(h, !0), h.integrate(e, 0), h;
}, Q = class e extends d_ {
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
		if (this.parent && this.parent.constructor === ch && this.id.client !== this.parent.client && this.parent.clock >= J(n, this.parent.client)) return this.parent.client;
		if (this.origin &&= (this.left = jh(t, n, this.origin), this.left.lastId), this.rightOrigin &&= (this.right = Ah(t, this.rightOrigin), this.right.id), this.left && this.left.constructor === p_ || this.right && this.right.constructor === p_) this.parent = null;
		else if (!this.parent) this.left && this.left.constructor === e ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === e && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
		else if (this.parent.constructor === ch) {
			let e = Oh(n, this.parent);
			this.parent = e.constructor === p_ ? null : e.content.type;
		}
		return null;
	}
	integrate(e, t) {
		if (t > 0 && (this.id.clock += t, this.left = jh(e, e.doc.store, q(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
			if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
				let t = this.left, n;
				if (t !== null) n = t.right;
				else if (this.parentSub !== null) for (n = this.parent._map.get(this.parentSub) || null; n !== null && n.left !== null;) n = n.left;
				else n = this.parent._start;
				let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
				for (; n !== null && n !== this.right;) {
					if (i.add(n), r.add(n), lh(this.origin, n.origin)) {
						if (n.id.client < this.id.client) t = n, r.clear();
						else if (lh(this.rightOrigin, n.rightOrigin)) break;
					} else if (n.origin !== null && i.has(Oh(e.doc.store, n.origin))) r.has(Oh(e.doc.store, n.origin)) || (t = n, r.clear());
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
			this.right === null ? this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)) : this.right.left = this, this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Eh(e.doc.store, this), this.content.integrate(e, this), Ih(e, this.parent, this.parentSub), (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
		} else new p_(this.id, this.length).integrate(e, 0);
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
		if (this.constructor === e.constructor && lh(e.origin, this.lastId) && this.right === e && lh(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
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
			this.countable && this.parentSub === null && (t._length -= this.length), this.markDeleted(), Im(e.deleteSet, this.id.client, this.id.clock, this.length), Ih(e, t, this.parentSub), this.content.delete(e);
		}
	}
	gc(e, t) {
		if (!this.deleted) throw op();
		this.content.gc(e), t ? Mh(e, this, new p_(this.id, this.length)) : this.content = new g_(this.length);
	}
	write(e, t) {
		let n = t > 0 ? q(this.id.client, this.id.clock + t - 1) : this.origin, r = this.rightOrigin, i = this.parentSub, a = this.content.getRef() & 31 | (n === null ? 0 : 128) | (r === null ? 0 : 64) | (i === null ? 0 : 32);
		if (e.writeInfo(a), n !== null && e.writeLeftID(n), r !== null && e.writeRightID(r), n === null && r === null) {
			let t = this.parent;
			if (t._item !== void 0) {
				let n = t._item;
				if (n === null) {
					let n = uh(t);
					e.writeParentInfo(!0), e.writeString(n);
				} else e.writeParentInfo(!1), e.writeLeftID(n.id);
			} else t.constructor === String ? (e.writeParentInfo(!0), e.writeString(t)) : t.constructor === ch ? (e.writeParentInfo(!1), e.writeLeftID(t)) : op();
			i !== null && e.writeString(i);
		}
		this.content.write(e, t);
	}
}, K_ = (e, t) => q_[t & 31](e), q_ = [
	() => {
		op();
	},
	__,
	T_,
	h_,
	A_,
	S_,
	C_,
	B_,
	O_,
	b_,
	() => {
		op();
	}
], J_ = 10, Y_ = class extends d_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor && (this.length += e.length, !0);
	}
	integrate(e, t) {
		op();
	}
	write(e, t) {
		e.writeInfo(J_), G(e.restEncoder, this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, X_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}, Z_ = "__ $YJS$ __";
X_[Z_] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), X_[Z_] = !0;
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/mutex.js
var Q_ = () => {
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
}, $_ = /[\uD800-\uDBFF]/, ev = /[\uDC00-\uDFFF]/, tv = (e, t) => {
	let n = 0, r = 0;
	for (; n < e.length && n < t.length && e[n] === t[n];) n++;
	for (n > 0 && $_.test(e[n - 1]) && n--; r + n < e.length && r + n < t.length && e[e.length - r - 1] === t[t.length - r - 1];) r++;
	return r > 0 && ev.test(e[e.length - r]) && r--, {
		index: n,
		remove: e.length - n - r,
		insert: t.slice(n, t.length - r)
	};
}, $ = new $e("y-sync"), nv = new $e("y-undo");
new $e("yjs-cursor");
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/hash/sha256.js
var rv = (e, t) => e >>> t | e << 32 - t, iv = (e) => rv(e, 2) ^ rv(e, 13) ^ rv(e, 22), av = (e) => rv(e, 6) ^ rv(e, 11) ^ rv(e, 25), ov = (e) => rv(e, 7) ^ rv(e, 18) ^ e >>> 3, sv = (e) => rv(e, 17) ^ rv(e, 19) ^ e >>> 10, cv = new Uint32Array([
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
]), lv = new Uint32Array([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), uv = class {
	constructor() {
		let e = /* @__PURE__ */ new ArrayBuffer(320);
		this._H = new Uint32Array(e, 0, 8), this._H.set(lv), this._W = new Uint32Array(e, 64, 64);
	}
	_updateHash() {
		let e = this._H, t = this._W;
		for (let e = 16; e < 64; e++) t[e] = sv(t[e - 2]) + t[e - 7] + ov(t[e - 15]) + t[e - 16];
		let n = e[0], r = e[1], i = e[2], a = e[3], o = e[4], s = e[5], c = e[6], l = e[7];
		for (let e = 0, u, d; e < 64; e++) u = l + av(o) + (o & s ^ ~o & c) + cv[e] + t[e] >>> 0, d = iv(n) + (n & r ^ n & i ^ r & i) >>> 0, l = c, c = s, s = o, o = a + u >>> 0, a = i, i = r, r = n, n = u + d >>> 0;
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
		n || (this._W[r - (t % 4 == 0 ? 0 : 1)] |= 128 << (3 - t % 4) * 8), this._W[14] = e.byteLength / yf, this._W[15] = e.byteLength * 8, this._updateHash();
		let i = /* @__PURE__ */ new Uint8Array(32);
		for (let e = 0; e < this._H.length; e++) for (let t = 0; t < 4; t++) i[e * 4 + t] = this._H[e] >>> (3 - t) * 8;
		return i;
	}
}, dv = (e) => new uv().digest(e), fv = (e) => {
	for (let t = 6; t < e.length; t++) e[t % 6] = e[t % 6] ^ e[t];
	return e.slice(0, 6);
}, pv = (e) => nm(fv(dv(rm(e)))), mv = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && t.sv.get(e.id.client) > e.id.clock && !Nm(t.ds, e.id), hv = [{
	light: "#ecd44433",
	dark: "#ecd444"
}], gv = (e, t, n) => {
	if (!e.has(n)) {
		if (e.size < t.length) {
			let n = sf();
			e.forEach((e) => n.add(e)), t = t.filter((e) => !n.has(e));
		}
		e.set(n, Dp(t));
	}
	return e.get(n);
}, _v = (e, { colors: t = hv, colorMapping: n = /* @__PURE__ */ new Map(), permanentUserData: r = null, onFirstRender: i = () => {}, mapping: a } = {}) => {
	let o = !1, s = new bv(e, a), c = new Ye({
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
				return t.addToHistory = e.getMeta("addToHistory") !== !1, t.isChangeOrigin = n !== void 0 && !!n.isChangeOrigin, t.isUndoRedoOperation = n !== void 0 && !!n.isChangeOrigin && !!n.isUndoRedoOperation, s.prosemirrorView !== null && n !== void 0 && (n.snapshot != null || n.prevSnapshot != null) && lm(0, () => {
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
						let t = nv.getState(e.state), n = t && t.undoManager;
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
}, vv = (e, t, n) => {
	if (t !== null && t.anchor !== null && t.head !== null) {
		if (t.type === "all") e.setSelection(new He(e.doc));
		else if (t.type === "node") {
			let r = Wv(n.doc, n.type, t.anchor, n.mapping);
			e.setSelection(Ne.create(e.doc, r));
		} else {
			let r = Wv(n.doc, n.type, t.anchor, n.mapping), i = Wv(n.doc, n.type, t.head, n.mapping);
			if (r !== null && i !== null) {
				let t = tt.between(e.doc.resolve(r), e.doc.resolve(i));
				e.setSelection(t);
			}
		}
	}
}, yv = (e, t) => ({
	type: t.selection.jsonID,
	anchor: Hv(t.selection.anchor, e.type, e.mapping),
	head: Hv(t.selection.head, e.type, e.mapping)
}), bv = class {
	constructor(e, t = /* @__PURE__ */ new Map()) {
		this.type = e, this.prosemirrorView = null, this.mux = Q_(), this.mapping = t, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
			this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = yv(this, this.prosemirrorView.state));
		}, this.afterAllTransactions = () => {
			this.beforeTransactionSelection = null;
		}, this._domSelectionInView = null;
	}
	get _tr() {
		return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
	}
	_isLocalCursorInView() {
		return this.prosemirrorView.hasFocus() ? (Jp && this._domSelectionInView === null && (lm(0, () => {
			this._domSelectionInView = null;
		}), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
	}
	_isDomSelectionInView() {
		let e = this.prosemirrorView._root.getSelection();
		if (e == null || e.anchorNode == null) return !1;
		let t = this.prosemirrorView._root.createRange();
		t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset), t.getClientRects().length === 0 && t.startContainer && t.collapsed && t.selectNodeContents(t.startContainer);
		let n = t.getBoundingClientRect(), r = om.documentElement;
		return n.bottom >= 0 && n.right >= 0 && n.left <= (window.innerWidth || r.clientWidth || 0) && n.top <= (window.innerHeight || r.clientHeight || 0);
	}
	renderSnapshot(e, t) {
		t ||= bh(Lm(), /* @__PURE__ */ new Map()), this.prosemirrorView.dispatch(this._tr.setMeta($, {
			snapshot: e,
			prevSnapshot: t
		}));
	}
	unrenderSnapshot() {
		this.mapping.clear(), this.mux(() => {
			let e = this.type.toArray().map((e) => Sv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), t = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new qe(Ie.from(e), 0, 0));
			t.setMeta($, {
				snapshot: null,
				prevSnapshot: null
			}), this.prosemirrorView.dispatch(t);
		});
	}
	_forceRerender() {
		this.mapping.clear(), this.mux(() => {
			let e = this.beforeTransactionSelection === null ? this.prosemirrorView.state.selection : null, t = this.type.toArray().map((e) => Sv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), n = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new qe(Ie.from(t), 0, 0));
			if (e) {
				let t = gf(_f(e.anchor, 0), n.doc.content.size), r = gf(_f(e.head, 0), n.doc.content.size);
				n.setSelection(tt.create(n.doc, t, r));
			}
			this.prosemirrorView.dispatch(n.setMeta($, {
				isChangeOrigin: !0,
				binding: this
			}));
		});
	}
	_renderSnapshot(e, t, n) {
		let r = this.doc, i = this.type;
		if (e ||= xh(this.doc), e instanceof Uint8Array || t instanceof Uint8Array) {
			if ((!(e instanceof Uint8Array) || !(t instanceof Uint8Array)) && op(), r = new Um({ gc: !1 }), nh(r, t), t = xh(r), nh(r, e), e = xh(r), i._item === null) {
				let e = Array.from(this.doc.share.keys()).find((e) => this.doc.share.get(e) === this.type);
				i = r.getXmlFragment(e);
			} else {
				let e = r.store.clients.get(i._item.id.client) ?? [];
				i = e[Dh(e, i._item.id.clock)].content.type;
			}
		}
		this.mapping.clear(), this.mux(() => {
			r.transact((r) => {
				let a = n.permanentUserData;
				a && a.dss.forEach((e) => {
					jm(r, e, (e) => {});
				});
				let o = (e, t) => {
					let r = e === "added" ? a.getUserByClientId(t.client) : a.getUserByDeletedId(t);
					return {
						user: r,
						type: e,
						color: gv(n.colorMapping, n.colors, r)
					};
				}, s = mg(i, new yh(t.ds, e.sv)).map((n) => !n._item.deleted || mv(n._item, e) || mv(n._item, t) ? Sv(n, this.prosemirrorView.state.schema, {
					mapping: /* @__PURE__ */ new Map(),
					isOMark: /* @__PURE__ */ new Map()
				}, e, t, o) : null).filter((e) => e !== null), c = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new qe(Ie.from(s), 0, 0));
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
			jm(t, t.deleteSet, (e) => {
				if (e.constructor === Q) {
					let t = e.content.type;
					t && this.mapping.delete(t);
				}
			}), t.changed.forEach(e), t.changedParentTypes.forEach(e);
			let n = this.type.toArray().map((e) => xv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), r = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new qe(Ie.from(n), 0, 0));
			vv(r, this.beforeTransactionSelection, this), r = r.setMeta($, {
				isChangeOrigin: !0,
				isUndoRedoOperation: t.origin instanceof Wh
			}), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && r.scrollIntoView(), this.prosemirrorView.dispatch(r);
		});
	}
	_prosemirrorChanged(e) {
		this.doc.transact(() => {
			Bv(this.doc, this.type, e, this), this.beforeTransactionSelection = yv(this, this.prosemirrorView.state);
		}, $);
	}
	initView(e) {
		this.prosemirrorView != null && this.destroy(), this.prosemirrorView = e, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
	}
	destroy() {
		this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
	}
}, xv = (e, t, n, r, i, a) => {
	let o = n.mapping.get(e);
	if (o === void 0) {
		if (e instanceof i_) return Sv(e, t, n, r, i, a);
		throw ap();
	}
	return o;
}, Sv = (e, t, n, r, i, a) => {
	let o = [], s = (e) => {
		if (e instanceof i_) {
			let s = xv(e, t, n, r, i, a);
			s !== null && o.push(s);
		} else {
			let s = e._item.right?.content?.type;
			s instanceof $g && !s._item.deleted && s._item.id.client === s.doc.clientID && (e.applyDelta([{ retain: e.length }, ...s.toDelta()]), s.doc.transact((e) => {
				s._item.delete(e);
			}));
			let c = Cv(e, t, n, r, i, a);
			c !== null && c.forEach((e) => {
				e !== null && o.push(e);
			});
		}
	};
	r === void 0 || i === void 0 ? e.toArray().forEach(s) : mg(e, new yh(i.ds, r.sv)).forEach(s);
	try {
		let s = e.getAttributes(r);
		r !== void 0 && (mv(e._item, r) ? mv(e._item, i) || (s.ychange = a ? a("added", e._item.id) : { type: "added" }) : s.ychange = a ? a("removed", e._item.id) : { type: "removed" });
		let c = t.node(e.nodeName, s, o);
		return n.mapping.set(e, c), c;
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, $), n.mapping.delete(e), null;
	}
}, Cv = (e, t, n, r, i, a) => {
	let o = [], s = e.toDelta(r, i, a);
	try {
		for (let e = 0; e < s.length; e++) {
			let n = s[e];
			o.push(t.text(n.insert, Rv(n.attributes, t)));
		}
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, $), null;
	}
	return o;
}, wv = (e, t) => {
	let n = new l_(), r = e.map((e) => ({
		insert: e.text,
		attributes: zv(e.marks, t)
	}));
	return n.applyDelta(r), t.mapping.set(n, e), n;
}, Tv = (e, t) => {
	let n = new i_(e.type.name);
	for (let t in e.attrs) {
		let r = e.attrs[t];
		r !== null && t !== "ychange" && n.setAttribute(t, r);
	}
	return n.insert(0, kv(e).map((e) => Ev(e, t))), t.mapping.set(n, e), n;
}, Ev = (e, t) => e instanceof Array ? wv(e, t) : Tv(e, t), Dv = (e) => typeof e == "object" && !!e, Ov = (e, t) => {
	let n = Object.keys(e).filter((t) => e[t] !== null), r = n.length === (t == null ? 0 : Object.keys(t).filter((e) => t[e] !== null).length);
	for (let i = 0; i < n.length && r; i++) {
		let a = n[i], o = e[a], s = t[a];
		r = a === "ychange" || o === s || Dv(o) && Dv(s) && Ov(o, s);
	}
	return r;
}, kv = (e) => {
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
}, Av = (e, t) => {
	let n = e.toDelta();
	return n.length === t.length && n.every((e, n) => e.insert === t[n].text && Ip(e.attributes || {}).length === t[n].marks.length && Bp(e.attributes, (e, r) => {
		let i = Lv(r), a = t[n].marks;
		return Ov(e, a.find((e) => e.type.name === i)?.attrs);
	}));
}, jv = (e, t) => {
	if (e instanceof i_ && !(t instanceof Array) && Vv(e, t)) {
		let n = kv(t);
		return e._length === n.length && Ov(e.getAttributes(), t.attrs) && e.toArray().every((e, t) => jv(e, n[t]));
	}
	return e instanceof l_ && t instanceof Array && Av(e, t);
}, Mv = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every((e, n) => t[n] === e), Nv = (e, t, n) => {
	let r = e.toArray(), i = kv(t), a = i.length, o = r.length, s = gf(o, a), c = 0, l = 0, u = !1;
	for (; c < s; c++) {
		let e = r[c], t = i[c];
		if (Mv(n.mapping.get(e), t)) u = !0;
		else if (!jv(e, t)) break;
	}
	for (; c + l < s; l++) {
		let e = r[o - l - 1], t = i[a - l - 1];
		if (Mv(n.mapping.get(e), t)) u = !0;
		else if (!jv(e, t)) break;
	}
	return {
		equalityFactor: c + l,
		foundMappedChild: u
	};
}, Pv = (e) => {
	let t = "", n = e._start, r = {};
	for (; n !== null;) n.deleted || (n.countable && n.content instanceof k_ ? t += n.content.str : n.content instanceof Z && (r[n.content.key] = null)), n = n.right;
	return {
		str: t,
		nAttrs: r
	};
}, Fv = (e, t, n) => {
	n.mapping.set(e, t);
	let { nAttrs: r, str: i } = Pv(e), a = t.map((e) => ({
		insert: e.text,
		attributes: Object.assign({}, r, zv(e.marks, n))
	})), { insert: o, remove: s, index: c } = tv(i, a.map((e) => e.insert).join(""));
	e.delete(c, s), e.insert(c, o), e.applyDelta(a.map((e) => ({
		retain: e.insert.length,
		attributes: e.attributes
	})));
}, Iv = /(.*)(--[a-zA-Z0-9+/=]{8})$/, Lv = (e) => Iv.exec(e)?.[1] ?? e, Rv = (e, t) => {
	let n = [];
	for (let r in e) n.push(t.mark(Lv(r), e[r]));
	return n;
}, zv = (e, t) => {
	let n = {};
	return e.forEach((e) => {
		if (e.type.name !== "ychange") {
			let r = rf(t.isOMark, e.type, () => !e.type.excludes(e.type));
			n[r ? `${e.type.name}--${pv(e.toJSON())}` : e.type.name] = e.attrs;
		}
	}), n;
}, Bv = (e, t, n, r) => {
	if (t instanceof i_ && t.nodeName !== n.type.name) throw Error("node name mismatch!");
	if (r.mapping.set(t, n), t instanceof i_) {
		let e = t.getAttributes(), r = n.attrs;
		for (let n in r) r[n] === null ? t.removeAttribute(n) : e[n] !== r[n] && n !== "ychange" && t.setAttribute(n, r[n]);
		for (let n in e) r[n] === void 0 && t.removeAttribute(n);
	}
	let i = kv(n), a = i.length, o = t.toArray(), s = o.length, c = gf(a, s), l = 0, u = 0;
	for (; l < c; l++) {
		let e = o[l], t = i[l];
		if (!Mv(r.mapping.get(e), t)) {
			if (jv(e, t)) r.mapping.set(e, t);
			else break;
		}
	}
	for (; u + l + 1 < c; u++) {
		let e = o[s - u - 1], t = i[a - u - 1];
		if (!Mv(r.mapping.get(e), t)) {
			if (jv(e, t)) r.mapping.set(e, t);
			else break;
		}
	}
	e.transact(() => {
		for (; s - l - u > 0 && a - l - u > 0;) {
			let n = o[l], c = i[l], d = o[s - u - 1], f = i[a - u - 1];
			if (n instanceof l_ && c instanceof Array) Av(n, c) || Fv(n, c, r), l += 1;
			else {
				let i = n instanceof i_ && Vv(n, c), a = d instanceof i_ && Vv(d, f);
				if (i && a) {
					let e = Nv(n, c, r), t = Nv(d, f, r);
					e.foundMappedChild && !t.foundMappedChild ? a = !1 : !e.foundMappedChild && t.foundMappedChild || e.equalityFactor < t.equalityFactor ? i = !1 : a = !1;
				}
				i ? (Bv(e, n, c, r), l += 1) : a ? (Bv(e, d, f, r), u += 1) : (r.mapping.delete(t.get(l)), t.delete(l, 1), t.insert(l, [Ev(c, r)]), l += 1);
			}
		}
		let n = s - l - u;
		if (s === 1 && a === 0 && o[0] instanceof l_ ? (r.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : n > 0 && (t.slice(l, l + n).forEach((e) => r.mapping.delete(e)), t.delete(l, n)), l + u < a) {
			let e = [];
			for (let t = l; t < a - u; t++) e.push(Ev(i[t], r));
			t.insert(l, e);
		}
	}, $);
}, Vv = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, Hv = (e, t, n) => {
	if (e === 0) return gh(t, 0, t.length === 0 ? -1 : 0);
	let r = t._first === null ? null : t._first.content.type;
	for (; r !== null && t !== r;) {
		if (r instanceof l_) {
			if (r._length >= e) return gh(r, e, t.length === 0 ? -1 : 0);
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
				if (e === 1 && r._length === 0 && i > 1) return new fh(r._item === null ? null : r._item.id, r._item === null ? uh(r) : null, null);
				if (e -= i, r._item !== null && r._item.next !== null) r = r._item.next.content.type;
				else {
					if (e === 0) return r = r._item === null ? r : r._item.parent, new fh(r._item === null ? null : r._item.id, r._item === null ? uh(r) : null, null);
					do
						r = r._item.parent, e--;
					while (r !== t && r._item.next === null);
					r !== t && (r = r._item.next.content.type);
				}
			}
		}
		if (r === null) throw op();
		if (e === 0 && r.constructor !== l_ && r !== t) return Uv(r._item.parent, r._item);
	}
	return gh(t, t._length, t.length === 0 ? -1 : 0);
}, Uv = (e, t) => {
	let n = null, r = null;
	return e._item === null ? r = uh(e) : n = q(e._item.id.client, e._item.id.clock), new fh(n, r, t.id);
}, Wv = (e, t, n, r) => {
	let i = vh(n, e);
	if (i === null || i.type !== t && !dh(t, i.type._item)) return null;
	let a = i.type, o = 0;
	if (a.constructor === l_) o = i.index;
	else if (a._item === null || !a._item.deleted) {
		let e = a._first, t = 0;
		for (; t < a._length && t < i.index && e !== null;) {
			if (!e.deleted) {
				let n = e.content.type;
				t++, n instanceof l_ ? o += n._length : o += r.get(n).nodeSize;
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
				t.deleted || (e instanceof l_ ? o += e._length : o += r.get(e).nodeSize), t = t.right;
			}
		}
		a = e;
	}
	return o - 1;
};
function Gv(e) {
	let t = e.toArray(), n = (e) => {
		let t;
		if (e instanceof l_) t = e.toDelta().map((e) => {
			let t = {
				type: "text",
				text: e.insert
			};
			return e.attributes && (t.marks = Object.keys(e.attributes).map((t) => {
				let n = e.attributes[t], r = { type: Lv(t) };
				return Object.keys(n) && (r.attrs = n), r;
			})), t;
		});
		else if (e instanceof i_) {
			t = { type: e.nodeName };
			let r = e.getAttributes();
			Object.keys(r).length && (t.attrs = r);
			let i = e.toArray();
			i.length && (t.content = i.map(n).flat());
		} else op();
		return t;
	};
	return {
		type: "doc",
		content: t.map(n)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/y-prosemirror@1.3.6_prosemirror-model@1.25.0_prosemirror-state@1.4.3_prosemirror-view@1_31ec72f916c667df313c22d35cf8a5eb/node_modules/y-prosemirror/src/plugins/undo-plugin.js
var Kv = (e) => nv.getState(e)?.undoManager?.undo() != null, qv = (e) => nv.getState(e)?.undoManager?.redo() != null, Jv = /* @__PURE__ */ new Set(["paragraph"]), Yv = (e, t) => !(e instanceof Q) || !(e.content instanceof z_) || !(e.content.type instanceof $g || e.content.type instanceof i_ && t.has(e.content.type.nodeName)) || e.content.type._length === 0, Xv = ({ protectedNodes: e = Jv, trackedOrigins: t = [], undoManager: n = null } = {}) => new Ye({
	key: nv,
	state: {
		init: (r, i) => {
			let a = $.getState(i), o = n || new Wh(a.type, {
				trackedOrigins: new Set([$].concat(t)),
				deleteFilter: (t) => Yv(t, e),
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
				prevSel: yv(i, n),
				hasUndoOps: o,
				hasRedoOps: s
			} : o !== t.hasUndoOps || s !== t.hasRedoOps ? Object.assign({}, t, {
				hasUndoOps: a.undoStack.length > 0,
				hasRedoOps: a.redoStack.length > 0
			}) : t;
		}
	},
	view: (e) => {
		let t = $.getState(e.state), n = nv.getState(e.state).undoManager;
		return n.on("stack-item-added", ({ stackItem: n }) => {
			let r = t.binding;
			r && n.meta.set(r, nv.getState(e.state).prevSel);
		}), n.on("stack-item-popped", ({ stackItem: e }) => {
			let n = t.binding;
			n && (n.beforeTransactionSelection = e.meta.get(n) || n.beforeTransactionSelection);
		}), { destroy: () => {
			n.destroy();
		} };
	}
});
ke.create({
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
			undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), nv.getState(t).undoManager.undoStack.length === 0 ? !1 : !n || Kv(t)),
			redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), nv.getState(t).undoManager.redoStack.length === 0 ? !1 : !n || qv(t))
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
		let t = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = Xv(this.options.yUndoOptions), r = n.spec.view;
		n.spec.view = (e) => {
			let { undoManager: t } = nv.getState(e.state);
			t.restore &&= (t.restore(), () => {});
			let n = r ? r(e) : void 0;
			return { destroy: () => {
				let e = t.trackedOrigins.has(t), r = t._observers;
				t.restore = () => {
					e && t.trackedOrigins.add(t), t.doc.on("afterTransaction", t.afterTransactionHandler), t._observers = r;
				}, n?.destroy && n.destroy();
			} };
		};
		let i = _v(t, {
			...this.options.ySyncOptions,
			onFirstRender: this.options.onFirstRender
		});
		return this.editor.options.enableContentCheck && ((e = t.doc) == null || e.on("beforeTransaction", () => {
			try {
				let e = Gv(t);
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
			this.editor.options.enableContentCheck && new Ye({
				key: new $e("filterInvalidContent"),
				filterTransaction: () => {
					var e;
					return this.storage.isDisabled && ((e = t.doc) == null || e.destroy()), !0;
				}
			})
		].filter(Boolean);
	}
});
function Zv(e) {
	return !!e.getMeta($);
}
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-node-range@2.24.0_@tiptap+core@2.24.0_@tiptap+pm@2.24.0__@tiptap+pm@2.24.0/node_modules/@tiptap/extension-node-range/dist/index.js
function Qv(e) {
	if (!e.length) return Qe.empty;
	let t = [], n = e[0].$from.node(0);
	return e.forEach((e) => {
		let n = e.$from.pos, r = e.$from.nodeAfter;
		r && t.push(Je.node(n, n + r.nodeSize, { class: "ProseMirror-selectednoderange" }));
	}), Qe.create(n, t);
}
function $v(e, t, n) {
	let r = [], i = e.node(0);
	n = typeof n == "number" && n >= 0 ? n : e.sameParent(t) ? Math.max(0, e.sharedDepth(t.pos) - 1) : e.sharedDepth(t.pos);
	let a = new Xe(e, t, n), o = a.depth === 0 ? 0 : i.resolve(a.start).posAtIndex(0);
	return a.parent.forEach((e, t) => {
		let n = o + t, s = n + e.nodeSize;
		if (n < a.start || n >= a.end) return;
		let c = new Ge(i.resolve(n), i.resolve(s));
		r.push(c);
	}), r;
}
var ey = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		return new ty(e.resolve(this.anchor), e.resolve(this.head));
	}
}, ty = class e extends Fe {
	constructor(e, t, n, r = 1) {
		let { doc: i } = e, a = e === t, o = e.pos === i.content.size && t.pos === i.content.size, s = a && !o ? i.resolve(t.pos + (r > 0 ? 1 : -1)) : t, c = a && o ? i.resolve(e.pos - (r > 0 ? 1 : -1)) : e, l = $v(c.min(s), c.max(s), n), u = s.pos >= e.pos ? l[0].$from : l[l.length - 1].$to, d = s.pos >= e.pos ? l[l.length - 1].$to : l[0].$from;
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
		return new ey(this.anchor, this.head);
	}
};
ty.prototype.visible = !1;
function ny(e) {
	return e instanceof ty;
}
ke.create({
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
				if (!ny(a)) {
					let e = ty.create(i, s, c, t, -1);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendBackwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Shift-ArrowDown": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, selection: a, tr: o } = r, { anchor: s, head: c } = a;
				if (!ny(a)) {
					let e = ty.create(i, s, c, t);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendForwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Mod-a": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, tr: a } = r, o = ty.create(i, 0, i.content.size, t);
				return a.setSelection(o), n.dispatch(a), !0;
			}
		};
	},
	onSelectionUpdate() {
		let { selection: e } = this.editor.state;
		ny(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
	},
	addProseMirrorPlugins() {
		let e = !1, t = !1;
		return [new Ye({
			key: new $e("nodeRange"),
			props: {
				attributes: () => e ? { class: "ProseMirror-noderangeselection" } : { class: "" },
				handleDOMEvents: { mousedown: (e, n) => {
					let { key: r } = this.options, i = /Mac/.test(navigator.platform), a = !!n.shiftKey, o = !!n.ctrlKey, s = !!n.altKey, c = !!n.metaKey;
					return (r == null || r === "Shift" && a || r === "Control" && o || r === "Alt" && s || r === "Meta" && c || r === "Mod" && (i ? c : o)) && (t = !0), t && document.addEventListener("mouseup", () => {
						t = !1;
						let { state: n } = e, { doc: r, selection: i, tr: a } = n, { $anchor: o, $head: s } = i;
						if (o.sameParent(s)) return;
						let c = ty.create(r, o.pos, s.pos, this.options.depth);
						a.setSelection(c), e.dispatch(a);
					}, { once: !0 }), !1;
				} },
				decorations: (n) => {
					let { selection: r } = n, i = ny(r);
					if (e = !1, !t) return i ? (e = !0, Qv(r.ranges)) : null;
					let { $from: a, $to: o } = r;
					if (!i && a.sameParent(o)) return null;
					let s = $v(a, o, this.options.depth);
					return s.length ? (e = !0, Qv(s)) : null;
				}
			}
		})];
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-drag-handle@2.24.0_@tiptap+core@2.24.0_@tiptap+pm@2.24.0__@tiptap+ext_234d04dbcc52d64c161f06b2d04b0cdb/node_modules/@tiptap/extension-drag-handle/dist/index.js
function ry(e) {
	let t = "", n = getComputedStyle(e);
	for (let e = 0; e < n.length; e += 1) t += `${n[e]}:${n.getPropertyValue(n[e])};`;
	return t;
}
function iy(e) {
	let t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], r = [t, ...Array.from(t.getElementsByTagName("*"))];
	return n.forEach((e, t) => {
		r[t].style.cssText = ry(e);
	}), t;
}
var ay = (e) => {
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
function oy(e, t) {
	return window.getComputedStyle(e)[t];
}
function sy(e = 0, t = 0, n = 0) {
	return Math.min(Math.max(e, t), n);
}
function cy(e, t, n) {
	let r = parseInt(oy(e.dom, "paddingLeft"), 10), i = parseInt(oy(e.dom, "paddingRight"), 10), a = parseInt(oy(e.dom, "borderLeftWidth"), 10), o = parseInt(oy(e.dom, "borderLeftWidth"), 10), s = e.dom.getBoundingClientRect();
	return {
		left: sy(t, s.left + r + a, s.right - i - o),
		top: n
	};
}
function ly(e) {
	var t;
	(t = e.parentNode) == null || t.removeChild(e);
}
function uy(e, t) {
	let { doc: n } = t.view.state, r = ay({
		editor: t,
		x: e.clientX,
		y: e.clientY,
		direction: "right"
	});
	if (!r.resultNode || r.pos === null) return [];
	let i = e.clientX, a = cy(t.view, i, e.clientY), o = t.view.posAtCoords(a);
	if (!o) return [];
	let { pos: s } = o;
	return n.resolve(s).parent ? $v(n.resolve(r.pos), n.resolve(r.pos + 1), 0) : [];
}
function dy(e, t) {
	let { view: n } = t;
	if (!e.dataTransfer) return;
	let { empty: r, $from: i, $to: a } = n.state.selection, o = uy(e, t), s = $v(i, a, 0), c = s.some((e) => o.find((t) => t.$from === e.$from && t.$to === e.$to)), l = r || !c ? o : s;
	if (!l.length) return;
	let { tr: u } = n.state, d = document.createElement("div"), f = l[0].$from.pos, p = l[l.length - 1].$to.pos, m = ty.create(n.state.doc, f, p), h = m.content();
	l.forEach((e) => {
		let t = iy(n.nodeDOM(e.$from.pos));
		d.append(t);
	}), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), e.dataTransfer.clearData(), e.dataTransfer.setDragImage(d, 0, 0), n.dragging = {
		slice: h,
		move: !0
	}, u.setSelection(m), n.dispatch(u), document.addEventListener("drop", () => ly(d), { once: !0 });
}
var fy = (e, t) => {
	let n = e.resolve(t), { depth: r } = n;
	return r === 0 ? t : n.pos - n.parentOffset - 1;
}, py = (e, t) => {
	let n = e.nodeAt(t), r = e.resolve(t), { depth: i } = r, a = n;
	for (; i > 0;) {
		let e = r.node(i);
		--i, i === 0 && (a = e);
	}
	return a;
}, my = (e, t) => {
	let n = $.getState(e);
	return n ? Hv(t, n.type, n.binding.mapping) : null;
}, hy = (e, t) => {
	let n = $.getState(e);
	return n ? Wv(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, gy = (e, t) => {
	let n = t;
	for (; n && n.parentNode && n.parentNode !== e.dom;) n = n.parentNode;
	return n;
}, _y = new $e("dragHandle"), vy = ({ pluginKey: e = _y, element: t, editor: n, tippyOptions: r, onNodeChange: i }) => {
	let a = document.createElement("div"), o = null, s = !1, c = null, l = -1, u;
	return t.addEventListener("dragstart", (e) => {
		dy(e, n), setTimeout(() => {
			t && (t.style.pointerEvents = "none");
		}, 0);
	}), t.addEventListener("dragend", () => {
		t && (t.style.pointerEvents = "auto");
	}), new Ye({
		key: typeof e == "string" ? new $e(e) : e,
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
					if (Zv(e)) {
						let e = hy(d, u);
						e !== l && (l = e);
					} else {
						let t = e.mapping.map(l);
						t !== l && (l = t, u = my(d, l));
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
					if (o ||= Ae(e.dom, {
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
					if (p = gy(e, p), p === e.dom || p?.nodeType !== 1) return;
					let m = e.posAtDOM(p, 0), h = py(n.state.doc, m), g = fy(n.state.doc, m);
					c = h, l = g, u = my(e.state, l), i?.({
						editor: n,
						node: c,
						pos: l
					}), o.setProps({ getReferenceClientRect: () => p.getBoundingClientRect() });
				},
				destroy() {
					o?.destroy(), t && ly(a);
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
				let a = ay({
					x: r.clientX,
					y: r.clientY,
					direction: "right",
					editor: n
				});
				if (!a.resultElement) return !1;
				let d = a.resultElement;
				if (d = gy(e, d), d === e.dom || d?.nodeType !== 1) return !1;
				let f = e.posAtDOM(d, 0), p = py(n.state.doc, f);
				if (p !== c) {
					let t = fy(n.state.doc, f);
					c = p, l = t, u = my(e.state, l), i?.({
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
ke.create({
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
		return [vy({
			tippyOptions: this.options.tippyOptions,
			element: e,
			editor: this.editor,
			onNodeChange: this.options.onNodeChange
		})];
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-drag-handle-react@2.24.0_@tiptap+extension-drag-handle@2.24.0_@tiptap_ef8c8839ac22b6186dd6c01c5d1e1c6d/node_modules/@tiptap/extension-drag-handle-react/dist/index.js
var yy = (e) => {
	let { className: t = "drag-handle", children: n, editor: r, pluginKey: i = _y, onNodeChange: a, tippyOptions: o } = e, [s, c] = L(null), l = I(null);
	return F(() => !s || r.isDestroyed ? () => {
		l.current = null;
	} : (l.current || (l.current = vy({
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
	]), N.createElement("div", {
		className: t,
		ref: c
	}, n);
}, by = (e) => typeof e == "object" && !!e && !Array.isArray(e), xy = (e, t) => {
	let n = by(e.attrs) ? e.attrs : {};
	return {
		...e,
		attrs: {
			...n,
			id: t
		}
	};
}, Sy = (e) => {
	let t = { ...e };
	if (t.type && vd(t.type) && by(t.attrs) && "id" in t.attrs) {
		let { id: e, ...n } = t.attrs;
		t.attrs = Object.keys(n).length > 0 ? n : void 0;
	}
	return Array.isArray(t.content) && (t.content = t.content.map(Sy)), t;
}, Cy = (e) => e.map(Sy), wy = (e) => by(e) ? e.type : void 0, Ty = (e, t) => {
	let n = Sy(e);
	return n.type && vd(n.type) ? xy(n, t) : n;
}, Ey = (e, t) => t.length === 0 ? Ie.empty : Ie.fromArray(t.map((t) => e.schema.nodeFromJSON(t))), Dy = (e, t) => new qe(Ey(e, t), 0, 0), Oy = (e, t) => {
	let n = Cd(e, t);
	if (!n) throw new Ay(t);
	return n;
}, ky = (e) => e.isEmpty ? {
	json: null,
	html: null
} : {
	json: e.getJSON(),
	html: e.getHTML()
}, Ay = class extends Error {
	code = "target_not_found";
	targetId;
	constructor(e) {
		super(`Could not find block node ${e} in the current editor document.`), this.name = "NotesTextEditorPatchTargetNotFoundError", this.targetId = e, Object.setPrototypeOf(this, new.target.prototype);
	}
}, jy = class extends Error {
	code = "unsupported_patch_type";
	patchType;
	constructor(e) {
		super(`Unsupported NotesTextEditor patch type: ${String(e)}`), this.name = "NotesTextEditorUnsupportedPatchTypeError", this.patchType = e, Object.setPrototypeOf(this, new.target.prototype);
	}
}, My = (e, t) => {
	switch (t.type) {
		case "top_level_prepend": {
			let n = Dy(e, Cy(t.blocks)), r = e.state.tr.replace(0, 0, n);
			return r.docChanged && e.view.dispatch(r), ky(e);
		}
		case "top_level_append": {
			let n = Dy(e, Cy(t.blocks)), r = e.state.doc.content.size, i = e.state.tr.replace(r, r, n);
			return i.docChanged && e.view.dispatch(i), ky(e);
		}
		case "insert_before": {
			let n = Oy(e, t.targetId), r = Dy(e, Cy(t.blocks)), i = e.state.tr.replace(n.pos, n.pos, r);
			return i.docChanged && e.view.dispatch(i), ky(e);
		}
		case "insert_after": {
			let n = Oy(e, t.targetId), r = n.pos + n.node.nodeSize, i = Dy(e, Cy(t.blocks)), a = e.state.tr.replace(r, r, i);
			return a.docChanged && e.view.dispatch(a), ky(e);
		}
		case "replace_block": {
			let n = Oy(e, t.targetId), r = e.schema.nodeFromJSON(Ty(t.block, t.targetId)), i = e.state.tr.replaceWith(n.pos, n.pos + n.node.nodeSize, r);
			return i.docChanged && e.view.dispatch(i), ky(e);
		}
		case "replace_content": {
			let n = Oy(e, t.targetId), r = e.state.tr.replace(n.pos + 1, n.pos + n.node.nodeSize - 1, Dy(e, Cy(t.content)));
			return r.docChanged && e.view.dispatch(r), ky(e);
		}
		case "delete_block": {
			let n = Oy(e, t.targetId), r = e.state.tr.delete(n.pos, n.pos + n.node.nodeSize);
			return r.docChanged && e.view.dispatch(r), ky(e);
		}
	}
	throw new jy(wy(t));
}, Ny = ({ placeholder: e, translations: t, aiBlockConfig: n, imageUploadConfig: r, enhanceEnabled: i = !1 }) => [
	We,
	Be,
	ue,
	ye,
	Me,
	xe,
	Ue,
	at,
	oe,
	_e,
	ze,
	be,
	Te,
	ce,
	rt,
	ae,
	Hd,
	ef,
	md.configure({ currentConfig: n }),
	Nd,
	Yd,
	...r ? [Id(r)] : [],
	...i ? [nt] : [],
	Sd,
	Ke,
	fe(e),
	we(e),
	Qd({
		aiBlockConfig: n,
		translations: t,
		imageUploadConfig: r
	})
], Py = (e) => e.isVisible !== !1, Fy = (e) => "isVisible" in e ? e.isVisible !== !1 : !0, Iy = (e) => !!e && "items" in e, Ly = (e) => !!e && "label" in e && !("items" in e), Ry = ({ primaryAction: e, secondaryActions: t = [], metadata: n = [], otherActions: r = [], status: i }) => {
	let a = [...i ? [{
		label: i.label,
		value: {
			type: "status",
			label: i.text,
			variant: i.variant
		},
		actions: i.actions,
		hideLabel: !0
	}] : [], ...n], o = t.filter(Py), s = r.filter(Fy), c = e && Py(e), l = o.length > 0, u = s.length > 0, d = l || u || c;
	return /* @__PURE__ */ R("div", {
		className: "flex flex-col",
		children: (a.length > 0 || d) && /* @__PURE__ */ z("div", {
			className: "flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center",
			children: [a.length > 0 && /* @__PURE__ */ R(ne, { items: a }), /* @__PURE__ */ z("div", {
				className: "flex flex-shrink-0 flex-row items-center gap-2",
				children: [
					u && /* @__PURE__ */ R(qn, { items: s }),
					o.map((e, t) => E(e) ? /* @__PURE__ */ R(x, {
						items: e.items,
						onClick: e.onClick,
						variant: e.variant ?? "outline",
						value: e.value,
						disabled: e.disabled,
						tooltip: e.tooltip,
						loading: e.loading
					}, t) : /* @__PURE__ */ R(k, {
						onClick: e.onClick,
						variant: e.variant || "outline",
						label: e.label,
						icon: e.icon,
						hideLabel: e.hideLabel,
						disabled: e.disabled,
						tooltip: e.tooltip
					}, t)),
					c && (l || u) && /* @__PURE__ */ R("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
					c && Ly(e) && /* @__PURE__ */ R(k, {
						label: e.label,
						onClick: e.onClick,
						variant: "default",
						icon: e.icon,
						disabled: e.disabled,
						tooltip: e.tooltip
					}),
					c && Iy(e) && /* @__PURE__ */ R(x, {
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
}, zy = ({ errorType: e, onDismiss: t }) => {
	let n = u(), r = ((e) => {
		switch (e) {
			case "file-too-large": return n.imageUpload.errors.fileTooLarge;
			case "invalid-type": return n.imageUpload.errors.invalidType;
			default: return n.imageUpload.errors.uploadFailed;
		}
	})(e);
	return /* @__PURE__ */ R("div", {
		className: "mx-auto flex w-full max-w-[824px] px-14 py-2",
		children: /* @__PURE__ */ z("div", {
			className: "flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm",
			children: [/* @__PURE__ */ z("div", {
				className: "flex w-full flex-row items-center gap-2",
				children: [/* @__PURE__ */ R("div", {
					className: "flex-shrink-0",
					children: /* @__PURE__ */ R(vr, {
						size: "sm",
						type: "critical"
					})
				}), /* @__PURE__ */ R("p", {
					className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
					title: r,
					children: r
				})]
			}), /* @__PURE__ */ R("div", {
				className: "flex-shrink-0",
				children: /* @__PURE__ */ R(k, {
					variant: "outline",
					onClick: t,
					label: n.imageUpload.errors.dismiss,
					size: "sm"
				})
			})]
		})
	});
}, By = ({ value: e, onChange: t, placeholder: n, disabled: r = !1 }) => /* @__PURE__ */ R("div", {
	className: "mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 sm:px-14 px-0",
	children: /* @__PURE__ */ R("textarea", {
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
}), Vy = Ar(function({ onChange: e, placeholder: t, initialEditorState: n, readonly: r = !1, aiBlockConfig: i, imageUploadConfig: a, enhanceConfig: o, onTitleChange: s, primaryAction: c, secondaryActions: d, otherActions: m, metadata: h, status: g, alert: _, titlePlaceholder: v }, y) {
	let b = u(), x = I(null), S = I(null), C = Mr(), [w] = L(() => n?.content || ""), [T, E] = L(n?.title || ""), [ee, te] = L(null);
	F(() => {
		s && s(T);
	}, [T, s]);
	let ne = I(!1), ie = Fr(() => a ? {
		...a,
		onError: (e) => {
			te(e);
		}
	} : void 0, [a]), ae = Fr(() => Ny({
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
	]), D = pe({
		extensions: ae,
		content: w,
		onUpdate: ({ editor: t }) => {
			ne.current || e(ky(t));
		},
		onCreate: ({ editor: t }) => {
			if (xd(t.state.doc)) {
				ne.current = !0;
				try {
					t.commands.setContent(t.getJSON());
				} finally {
					ne.current = !1;
				}
				xd(t.state.doc) || e(ky(t));
			}
		},
		editable: !r,
		shouldRerenderOnTransaction: !1
	}), oe = Ce(D, o), se = P((e) => {
		ne.current = !0;
		try {
			return e();
		} finally {
			ne.current = !1;
		}
	}, []);
	Nr(y, () => ({
		clear: () => D?.commands.clearContent(),
		focus: () => D?.commands.focus(),
		setContent: (e) => D?.commands.setContent(e),
		applyPageDocumentPatch: (e) => D ? se(() => My(D, e)) : {
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
			!D || !ie || Ld(D, e, ie);
		}
	}));
	let ce = Fr(() => ({ offset: [0, 5] }), []), le = P(({ node: e, pos: t }) => {
		S.current = e ? {
			pos: t,
			nodeSize: e.nodeSize
		} : null;
	}, []), ue = P(() => {
		let e = S.current;
		if (!e || !D) return;
		let { pos: t, nodeSize: n } = e, r = D.state.doc.nodeAt(t);
		if (r && r.content.size === 0) D.chain().focus().setTextSelection(t + 1).insertContent("/").run();
		else {
			let e = t + n;
			D.chain().focus().insertContentAt(e, { type: "paragraph" }).setTextSelection(e + 1).insertContent("/").run();
		}
	}, [D]), de = c || d && d.length > 0 || h && h.length > 0 || m && m.length > 0 || g, fe = s || T;
	return D ? /* @__PURE__ */ z("div", {
		className: "relative flex h-full w-full flex-col",
		ref: x,
		id: C,
		children: [
			de && /* @__PURE__ */ R(Ry, {
				primaryAction: c,
				secondaryActions: d,
				metadata: h,
				otherActions: m,
				status: g
			}),
			ee && /* @__PURE__ */ R(zy, {
				errorType: ee,
				onDismiss: () => te(null)
			}),
			/* @__PURE__ */ R(p, { children: oe.error && !oe.isLoading && /* @__PURE__ */ R(f.div, {
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
				children: /* @__PURE__ */ R(ge, {
					error: oe.error,
					onDismiss: oe.clearError
				})
			}, "enhance-error") }),
			/* @__PURE__ */ z(Bn, {
				className: "notes-text-editor-scroll h-full gap-6",
				children: [
					_ && /* @__PURE__ */ R("div", {
						className: "mx-auto w-full max-w-[824px] sm:px-14 px-0",
						children: /* @__PURE__ */ R(Dr, { ..._ })
					}),
					fe && /* @__PURE__ */ R(By, {
						value: T,
						onChange: s ? E : void 0,
						placeholder: v,
						disabled: !s || r
					}),
					/* @__PURE__ */ z("div", {
						className: "notes-text-editor h-full",
						onClick: () => D.commands.focus(),
						children: [!r && /* @__PURE__ */ R(yy, {
							editor: D,
							tippyOptions: ce,
							onNodeChange: le,
							children: /* @__PURE__ */ z("div", {
								className: "flex flex-row",
								children: [/* @__PURE__ */ R(St, {
									compact: !0,
									variant: "ghost",
									size: "sm",
									className: "text-f1-foreground-tertiary",
									onClick: ue,
									label: "Add paragraph",
									hideLabel: !0,
									icon: re
								}), /* @__PURE__ */ R("div", {
									className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
									draggable: !0,
									"data-drag-handle": !0,
									children: /* @__PURE__ */ R(l, {
										icon: ut,
										size: "xs"
									})
								})]
							})
						}), /* @__PURE__ */ R(De, {
							editor: D,
							className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
						})]
					})
				]
			}),
			!r && /* @__PURE__ */ R(ot, {
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
}), Hy = ({ withHeader: e = !1, withTitle: t = !0, withToolbar: n = !0 }) => /* @__PURE__ */ z("div", {
	className: "relative flex h-full w-full flex-col",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [
		e && /* @__PURE__ */ z("div", {
			className: "flex items-center justify-between border-b border-f1-border px-6 py-3",
			children: [/* @__PURE__ */ z("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ R(O, { className: "h-6 w-20 rounded-md" }), /* @__PURE__ */ R(O, { className: "h-6 w-24 rounded-md" })]
			}), /* @__PURE__ */ z("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ R(O, { className: "h-8 w-16 rounded-md" }), /* @__PURE__ */ R(O, { className: "h-8 w-12 rounded-md" })]
			})]
		}),
		n && /* @__PURE__ */ z("div", {
			className: "absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md",
			children: [
				/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
				/* @__PURE__ */ z("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" })
					]
				}),
				/* @__PURE__ */ z("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" })
					]
				}),
				/* @__PURE__ */ z("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ R(O, { className: "h-8 w-8 rounded" })
					]
				})
			]
		}),
		/* @__PURE__ */ z(Bn, {
			className: "h-full gap-6",
			children: [t && /* @__PURE__ */ R("div", {
				className: "mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5",
				children: /* @__PURE__ */ R(O, { className: "h-8 w-80 rounded-md" })
			}), /* @__PURE__ */ R("div", {
				className: "h-full",
				children: /* @__PURE__ */ R("div", {
					className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14",
					children: /* @__PURE__ */ z("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ R(O, { className: "h-5 w-full rounded-md" }),
							/* @__PURE__ */ R(O, { className: "h-5 w-4/5 rounded-md" }),
							/* @__PURE__ */ R(O, { className: "h-5 w-3/5 rounded-md" }),
							/* @__PURE__ */ R(O, { className: "h-5 w-full rounded-md" }),
							/* @__PURE__ */ R(O, { className: "h-5 w-1/2 rounded-md" })
						]
					})
				})
			})]
		})
	]
}), Uy = d("F0NotesTextEditor", Vn(Vy, Hy)), Wy = Uy, Gy = Hy, Ky = Ar(({ header: e, actions: t, open: n, onClose: r }, i) => {
	let [a, o] = L(!1), s = P(() => {
		o(!0);
		let e = setTimeout(() => {
			r?.(), o(!1);
		}, 200);
		return () => clearTimeout(e);
	}, [r]);
	return /* @__PURE__ */ R(ee, {
		open: n && !a,
		onOpenChange: (e) => !e && s?.(),
		children: /* @__PURE__ */ z(w, {
			ref: i,
			className: "bottom-3 top-auto max-w-[400px]",
			children: [/* @__PURE__ */ z(Ee, {
				className: "flex flex-col gap-4 px-4 py-5",
				children: [/* @__PURE__ */ R(vr, {
					type: e.type,
					size: "lg"
				}), /* @__PURE__ */ z("div", {
					className: "flex flex-col gap-0.5",
					children: [/* @__PURE__ */ R(te, {
						className: "text-xl sm:text-lg",
						children: e.title
					}), /* @__PURE__ */ R(se, {
						className: "text-lg sm:text-base",
						children: e.description
					})]
				})]
			}), t && /* @__PURE__ */ z(le, {
				className: "px-4 pb-4 pt-2",
				children: [/* @__PURE__ */ z("div", {
					className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full",
					children: [/* @__PURE__ */ R(k, {
						variant: "outline",
						...t.secondary
					}), /* @__PURE__ */ R(k, {
						...t.primary,
						variant: t.primary.variant || "default"
					})]
				}), /* @__PURE__ */ z("div", {
					className: "flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full",
					children: [/* @__PURE__ */ R(k, {
						variant: "outline",
						...t.secondary,
						size: "lg"
					}), /* @__PURE__ */ R(k, {
						...t.primary,
						variant: t.primary.variant || "default",
						size: "lg"
					})]
				})]
			})]
		})
	});
});
Ky.displayName = "Dialog";
var qy = a(i({
	name: "Dialog",
	type: "info"
}, d("Dialog", Ky))), Jy = ({ avatar: e, title: t, description: n, primaryAction: r, secondaryActions: i, otherActions: a, status: o, metadata: s, deactivated: c, metadataRowGap: l, showBottomBorder: u, onClose: d }) => /* @__PURE__ */ R(_, {
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
}), Yy = Ar(function({ title: e, subtitle: t, mediaUrl: n, primaryAction: r, secondaryAction: i, onClose: a, isLoading: o = !1, children: s, variant: c = "default" }, l) {
	let u = n?.includes(".mp4"), [d, f] = L(!1);
	return o ? /* @__PURE__ */ R(Xy, { ref: l }) : d ? null : /* @__PURE__ */ z("div", {
		ref: l,
		className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
		children: [
			/* @__PURE__ */ R("div", {
				className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
				children: u ? /* @__PURE__ */ R("video", {
					src: n,
					autoPlay: !0,
					muted: !0,
					loop: !0,
					className: "h-full w-full rounded-lg object-cover"
				}) : /* @__PURE__ */ R("img", {
					src: n,
					alt: "",
					className: "h-full w-full rounded-lg object-cover"
				})
			}),
			/* @__PURE__ */ z("div", {
				className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
				children: [/* @__PURE__ */ z("div", {
					className: g("flex w-full flex-col gap-1", c === "default" ? "sm:max-w-lg" : void 0),
					children: [/* @__PURE__ */ R("h3", {
						className: "font-bold text-xl text-f1-foreground",
						children: e
					}), t && /* @__PURE__ */ R("p", {
						className: "text-base text-f1-foreground-secondary",
						children: t
					})]
				}), /* @__PURE__ */ z("div", {
					className: "flex gap-3",
					children: [
						r && /* @__PURE__ */ R(k, {
							onClick: r.onClick,
							label: r.label,
							variant: r.variant || "default",
							size: "md",
							icon: r.icon
						}),
						i && /* @__PURE__ */ R(k, {
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
			a && /* @__PURE__ */ R("div", {
				className: "absolute right-2 top-2 z-10",
				children: /* @__PURE__ */ R(k, {
					variant: "ghost",
					icon: hr,
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
}), Xy = Ar(function(e, t) {
	return /* @__PURE__ */ z("div", {
		ref: t,
		className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		...e,
		children: [
			/* @__PURE__ */ R("div", {
				className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
				children: /* @__PURE__ */ R(O, { className: "h-full w-full rounded-lg" })
			}),
			/* @__PURE__ */ z("div", {
				className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
				children: [/* @__PURE__ */ z("div", {
					className: "flex w-full flex-col gap-1 sm:max-w-lg",
					children: [
						/* @__PURE__ */ R(O, { className: "h-7 w-3/4" }),
						/* @__PURE__ */ R(O, { className: "h-4 w-full" }),
						/* @__PURE__ */ R(O, { className: "h-4 w-2/3" })
					]
				}), /* @__PURE__ */ z("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ R(O, { className: "h-9 w-32" }), /* @__PURE__ */ R(O, { className: "h-9 w-24" })]
				})]
			}),
			/* @__PURE__ */ R("div", {
				className: "absolute right-2 top-2 z-10",
				children: /* @__PURE__ */ R(O, { className: "h-8 w-8 rounded-md" })
			})
		]
	});
}), Zy = a(Vn(Yy, Xy));
Zy.displayName = "BaseBanner";
//#endregion
//#region src/components/F0ButtonToggleGroup/index.ts
var Qy = a(d("F0ButtonToggleGroup", (e) => {
	let { items: t, size: n, multiple: r, required: i, value: a, onChange: o, variant: s, disabled: c, withBorder: l = !0, fullWidth: u = !1 } = e, [d, f] = L(a);
	F(() => {
		d !== a && f(a);
	}, [a]);
	let p = (e) => {
		i && (r && e.length === 0 || !e) || f(e);
	};
	F(() => {
		o?.(d);
	}, [d, r]);
	let m = Fr(() => t.map((e) => ({
		...e,
		disabled: c || e.disabled
	})), [t, c]), h = r ? d : [d];
	return /* @__PURE__ */ R(Er, {
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
		children: m.map((e) => /* @__PURE__ */ R(Tr, {
			value: e.value,
			asChild: !0,
			className: g(u && "flex-1"),
			children: /* @__PURE__ */ R(gr, {
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
})), $y = [], eb = $y, tb = /* @__PURE__ */ new Set(), nb = 0, rb = /* @__PURE__ */ new Set(), ib = /* @__PURE__ */ new Set(), ab = () => {
	for (let e of tb) e();
}, ob = () => {
	for (let e of ib) e();
}, sb = {
	subscribe(e) {
		return tb.add(e), () => {
			tb.delete(e);
		};
	},
	getSnapshot() {
		return eb;
	},
	getServerSnapshot() {
		return $y;
	},
	addItem(e) {
		let t = eb.findIndex((t) => t.id === e.id);
		if (t !== -1) {
			let n = [...eb];
			n[t] = e, eb = n;
		} else eb = [...eb, e];
		ab();
	},
	removeItem(e) {
		eb.some((t) => t.id === e) && (eb = eb.filter((t) => t.id !== e), ab());
	},
	clear() {
		eb.length !== 0 && (eb = $y, ab());
	},
	acquireRenderer() {
		nb += 1;
		let e = nb;
		return rb.add(e), ob(), {
			id: e,
			release() {
				rb.delete(e), ob();
			}
		};
	},
	getActiveRendererId() {
		let e = null;
		for (let t of rb) (e === null || t < e) && (e = t);
		return e;
	},
	subscribeRenderer(e) {
		return ib.add(e), () => {
			ib.delete(e);
		};
	},
	hasProvider() {
		return rb.size > 0;
	}
}, cb = 5e3, lb = 1e4, ub = (e) => {
	process.env.NODE_ENV !== "production" && !sb.hasProvider() && console.warn(`[f0] ${e} was called but no <F0Provider> is mounted, so the toast will not render. Make sure your app is wrapped in <F0Provider>.`);
}, db = {
	open: (e) => {
		let t = e.id ?? ve();
		ub("toasts.open()");
		let n = e.actions != null, r = e.persistent === !0 || e.variant === "loading";
		return sb.addItem({
			duration: r ? void 0 : n ? lb : cb,
			...e,
			id: t,
			onClose: () => sb.removeItem(t)
		}), t;
	},
	close: (e) => {
		sb.removeItem(e);
	},
	closeAll: () => {
		sb.clear();
	}
}, fb = 12, pb = 6, mb = ({ target: e, title: t, description: n, actionLabel: r, onAction: i, onClose: a, step: o, arrow: s = !0, side: c = "bottom", align: l = "center", sideOffset: d = s ? 8 : 4, container: f }) => {
	let p = u(), m = I(null), h = I(null), _ = Mr(), v = `${_}-title`, y = `${_}-description`, b = Fr(() => ({ current: e }), [e]), x = I(o?.current);
	F(() => {
		x.current !== o?.current && (x.current = o?.current, m.current?.focus());
	}, [o?.current]);
	let S = !o || o.current >= o.total, C = r ?? (S ? p.coachmark.done : p.coachmark.next);
	return /* @__PURE__ */ z(mr, {
		open: !0,
		onOpenChange: (e) => {
			e || a();
		},
		children: [/* @__PURE__ */ R(ur, { virtualRef: b }), /* @__PURE__ */ z(cr, {
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
			children: [/* @__PURE__ */ z("div", {
				className: "dark flex flex-col gap-3",
				children: [/* @__PURE__ */ z("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ z("div", {
						className: "flex flex-row items-start justify-between gap-2",
						children: [/* @__PURE__ */ R("p", {
							id: v,
							className: "font-semibold",
							children: t
						}), /* @__PURE__ */ R(St, {
							variant: "outline",
							icon: hr,
							size: "sm",
							hideLabel: !0,
							onClick: a,
							label: p.actions.close,
							className: "flex-shrink-0"
						})]
					}), n && /* @__PURE__ */ R("p", {
						id: y,
						className: "font-normal text-f1-foreground-inverse-secondary",
						children: n
					})]
				}), /* @__PURE__ */ z("div", {
					className: "flex flex-row items-center gap-3",
					children: [o && /* @__PURE__ */ z("p", {
						className: "text-f1-foreground-inverse-secondary",
						children: [
							o.current,
							"/",
							o.total
						]
					}), /* @__PURE__ */ R(St, {
						variant: "outline",
						label: C,
						onClick: i,
						className: "ml-auto"
					})]
				})]
			}), s && /* @__PURE__ */ R(fr, {
				asChild: !0,
				width: fb,
				height: pb,
				children: /* @__PURE__ */ R("svg", {
					viewBox: `0 0 ${fb} ${pb}`,
					children: /* @__PURE__ */ R("path", {
						d: `M0 0L${fb / 2} ${pb}L${fb} 0Z`,
						className: "fill-f1-background-inverse dark:fill-f1-background-tertiary"
					})
				})
			})]
		})]
	});
};
mb.displayName = "F0Coachmark";
var hb = d("F0Coachmark", mb), gb = [], _b = gb, vb = /* @__PURE__ */ new Set(), yb = 0, bb = /* @__PURE__ */ new Set(), xb = /* @__PURE__ */ new Set(), Sb = () => {
	for (let e of vb) e();
}, Cb = () => {
	for (let e of xb) e();
}, wb = {
	subscribe(e) {
		return vb.add(e), () => {
			vb.delete(e);
		};
	},
	getSnapshot() {
		return _b;
	},
	getServerSnapshot() {
		return gb;
	},
	addItem(e) {
		let t = _b.findIndex((t) => t.id === e.id);
		if (t !== -1) {
			let n = [..._b];
			n[t] = e, _b = n;
		} else _b = [..._b, e];
		Sb();
	},
	removeItem(e) {
		_b.some((t) => t.id === e) && (_b = _b.filter((t) => t.id !== e), Sb());
	},
	clear() {
		_b.length !== 0 && (_b = gb, Sb());
	},
	acquireRenderer() {
		yb += 1;
		let e = yb;
		return bb.add(e), Cb(), {
			id: e,
			release() {
				bb.delete(e), Cb();
			}
		};
	},
	getActiveRendererId() {
		let e = null;
		for (let t of bb) (e === null || t < e) && (e = t);
		return e;
	},
	subscribeRenderer(e) {
		return xb.add(e), () => {
			xb.delete(e);
		};
	},
	hasProvider() {
		return bb.size > 0;
	}
}, Tb = process.env.NODE_ENV !== "production", Eb = (e) => {
	if (typeof e != "string") return e.isConnected ? e : null;
	let t = document.querySelectorAll(e);
	return Tb && t.length > 1 && console.warn(`[f0] coachmarks: the selector "${e}" matched ${t.length} elements. Anchoring to the first one — use a selector that matches exactly one.`), t[0] ?? null;
}, Db = (e) => {
	let [t, n] = L(null), r = I(null);
	return F(() => {
		let t = (e) => {
			e !== r.current && (r.current = e, n(e));
		};
		if (e === void 0 || typeof document > "u") {
			t(null);
			return;
		}
		t(Eb(e)), Tb && r.current === null && typeof e == "string" && console.warn(`[f0] coachmarks: no element matches the selector "${e}" yet. The coachmark will show as soon as one does.`);
		let i = new MutationObserver(() => t(Eb(e)));
		return i.observe(document.body, {
			childList: !0,
			subtree: !0
		}), () => i.disconnect();
	}, [e]), t;
}, Ob = ({ item: e, container: t }) => {
	let [n, r] = L(0), i = Math.min(n, e.steps.length - 1), a = e.steps[i], o = i === e.steps.length - 1, s = Db(a.targetElement), c = () => wb.removeItem(e.id);
	return s ? /* @__PURE__ */ R(hb, {
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
}, kb = ({ children: e, portalTarget: t = "#f0-overlay-root" }) => {
	let n = Ir(wb.subscribe, wb.getSnapshot, wb.getServerSnapshot), r = I(null), i = Ir(wb.subscribeRenderer, wb.getActiveRendererId, () => null);
	F(() => {
		let { id: e, release: t } = wb.acquireRenderer();
		return r.current = e, t;
	}, []);
	let a = i === r.current, [o, s] = L(null);
	F(() => {
		typeof document > "u" || s(document.querySelector(t));
	}, [t]);
	let c = n[0];
	return /* @__PURE__ */ z(Lr, { children: [a && c && /* @__PURE__ */ R(Ob, {
		item: c,
		container: o
	}, c.id), e] });
};
//#endregion
export { Bu as A, Vs as B, Uu as C, Vu as D, Iu as E, wu as F, za as G, Ga as H, yu as I, Ta as J, Ia as K, vu as L, zu as M, Mu as N, Lu as O, Tu as P, _u as R, Gu as S, Fu as T, Ba as U, Za as V, Ra as W, Ea as X, Ma as Y, Qu as _, Qy as a, Ku as b, qy as c, Wy as d, Gy as f, rd as g, Rd as h, sb as i, Hu as j, Ru as k, Uy as l, Bd as m, wb as n, Zy as o, zd as p, wa as q, db as r, Jy as s, kb as t, Hy as u, Zu as v, Pu as w, Wu as x, Xu as y, Jl as z };
