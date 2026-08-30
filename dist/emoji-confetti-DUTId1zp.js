import { o as e, t } from "./rolldown-runtime-CEFd7nDs.js";
import { t as n } from "./clsx-rBDvwE6-.js";
import { t as r } from "./dist-CqnuTXEz.js";
import { t as i } from "./component-Lhh_08kH.js";
import { n as a, t as o } from "./data-testid-0GIWgc6Q.js";
import { $ as s, _ as c, at as l, f as u, s as d, y as f } from "./variants-BhCxKzs5.js";
import { n as p, t as m } from "./utils-CVzxZnoI.js";
import { A as h, C as g, D as _, E as v, S as y, T as b, x } from "./F0Dialog-Bv4ryFfh.js";
import { G as S, J as C, K as w, ct as T, ft as E, lt as D, q as ee, st as te, ut as ne } from "./useDataCollectionSource-VpIiogfp.js";
import { h as re, p as ie, y as O } from "./value-B4qnzMXU.js";
import { At as ae, Et as oe, Mt as se, Nt as ce, jt as le, kt as ue } from "./F0AiFormRegistry-eCeQaGKL.js";
import { a as de, f as fe, i as pe, l as k, r as A, u as me } from "./F0Button-CYTXun0O.js";
import { P as he, i as ge, r as _e, t as ve } from "./tooltip-BPSwDQpD.js";
import { Ft as ye, Gt as be, ht as xe, nn as Se, tn as Ce, w as we } from "./F0Select-_dXXh4fu.js";
import { $ as Te, A as Ee, B as De, Bt as Oe, C as ke, D as Ae, E as je, F as Me, G as Ne, H as Pe, Ht as Fe, I as Ie, J as Le, L as Re, Lt as ze, M as Be, N as Ve, O as He, P as Ue, Q as We, R as Ge, S as Ke, T as qe, U as Je, Ut as Ye, V as Xe, Vt as Ze, W as Qe, Wt as $e, Z as et, Zt as tt, _ as nt, _t as rt, at as it, b as at, ct as ot, d as st, dt as ct, et as lt, f as ut, ft as dt, g as ft, h as pt, ht as mt, it as ht, j as gt, k as _t, l as vt, lt as yt, m as bt, mt as xt, nt as j, ot as St, p as Ct, pt as wt, q as Tt, rt as Et, st as Dt, tt as M, u as Ot, ut as kt, v as At, w as jt, x as Mt, y as Nt, z as Pt } from "./F0CanvasPanel-CswgVLNv.js";
import { P as Ft, dt as It, gt as Lt, ht as Rt, mt as zt, p as Bt, pt as Vt } from "./F0Checkbox-Bc_SibvL.js";
import { $ as Ht, Q as Ut, at as Wt, et as Gt, it as Kt, nt as qt, rt as Jt, tt as Yt } from "./F0Card-CBAMg6qm.js";
import { r as Xt } from "./internal-aLKQ467C.js";
import { i as Zt, l as Qt, n as $t, o as en, r as tn, s as nn, t as rn } from "./popover-By8ytmVb.js";
import { t as an } from "./Cross-BIv5udZr.js";
import { s as on, u as sn } from "./input-DH5KiXa2.js";
import { _ as cn, a as ln, n as un, r as dn, t as fn, x as pn } from "./progress-dgj09l6I.js";
import { n as mn } from "./F0Link-AFRf9ShT.js";
import { i as hn, r as gn } from "./internal-CTbmnfta.js";
import { T as _n, _ as vn } from "./AiChatTranslationsProvider-CnfwM0PU.js";
import { _ as yn, h as bn, r as xn } from "./F0Avatar-BNV2fsD_.js";
import { n as Sn } from "./RichText-B0AzNEma.js";
import { $ as Cn, A as wn, C as Tn, D as En, E as Dn, F as On, G as kn, I as An, J as jn, Jt as Mn, K as Nn, L as Pn, M as Fn, N as In, O as Ln, P as Rn, Q as zn, R as Bn, S as Vn, T as Hn, U as Un, W as Wn, X as Gn, Y as Kn, Z as qn, _ as Jn, at as Yn, b as Xn, ct as Zn, dt as Qn, et as $n, ft as er, g as tr, h as nr, it as rr, j as ir, k as ar, lt as or, m as sr, mt as cr, nt as lr, ot as ur, pt as dr, q as fr, qt as pr, rt as mr, st as hr, tt as gr, ut as _r, v as vr, w as yr, x as br, y as xr, z as Sr } from "./F0Form-CU0Vr5QA.js";
import { n as Cr } from "./skeleton-gsHEXIPQ.js";
import { t as wr } from "./purify.es-m7dSeJ6J.js";
import { t as Tr } from "./a11y-CuE93uBH.js";
import { i as Er, r as Dr } from "./dist-CK4nsTZS.js";
import { F0Alert as Or } from "./F0Alert.js";
import * as N from "react";
import P, { PureComponent as kr, createContext as Ar, forwardRef as jr, useCallback as F, useContext as Mr, useEffect as I, useId as Nr, useImperativeHandle as Pr, useLayoutEffect as Fr, useMemo as Ir, useRef as L, useState as R, useSyncExternalStore as Lr } from "react";
import { Fragment as Rr, jsx as z, jsxs as B } from "react/jsx-runtime";
import './assets/emoji-confetti-AvIzFXBi.css';//#region ../../node_modules/.pnpm/embla-carousel-autoplay@8.5.2_embla-carousel@8.5.2/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js
var zr = {
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
function Br(e, t) {
	let n = e.scrollSnapList();
	return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function Vr(e, t) {
	let n = e.rootNode();
	return t && t(n) || n;
}
function Hr(e = {}) {
	let t, n, r, i, a = null, o = 0, s = !1, c = !1, l = !1, u = !1;
	function d(a, o) {
		n = a;
		let { mergeOptions: s, optionsAtMedia: c } = o;
		if (t = c(s(s(zr, Hr.globalOptions), e)), n.scrollSnapList().length <= 1) return;
		u = t.jump, r = !1, i = Br(n, t.delay);
		let { eventStore: l, ownerDocument: d } = n.internalEngine(), f = !!n.internalEngine().options.watchDrag, p = Vr(n, t.rootNode);
		l.add(d, "visibilitychange", _), f && n.on("pointerDown", y), f && !t.stopOnInteraction && n.on("pointerUp", b), t.stopOnMouseEnter && l.add(p, "mouseenter", x), t.stopOnMouseEnter && !t.stopOnInteraction && l.add(p, "mouseleave", S), t.stopOnFocusIn && n.on("slideFocusStart", g), t.stopOnFocusIn && !t.stopOnInteraction && l.add(n.containerNode(), "focusout", h), t.playOnInit && h();
	}
	function f() {
		n.off("pointerDown", y).off("pointerUp", b).off("slideFocusStart", g), g(), r = !0, s = !1;
	}
	function p() {
		let { ownerWindow: e } = n.internalEngine();
		e.clearTimeout(o), o = e.setTimeout(D, i[n.selectedScrollSnap()]), a = (/* @__PURE__ */ new Date()).getTime(), n.emit("autoplay:timerset");
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
	function D() {
		let { index: e } = n.internalEngine(), r = e.clone().add(1).get(), i = n.scrollSnapList().length - 1, a = t.stopOnLastSnap && r === i;
		if (n.canScrollNext() ? n.scrollNext(u) : n.scrollTo(0, u), n.emit("autoplay:select"), a) return g();
		h();
	}
	function ee() {
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
		timeUntilNext: ee
	};
}
Hr.globalOptions = void 0;
//#endregion
//#region ../../node_modules/.pnpm/wheel-gestures@2.2.48/node_modules/wheel-gestures/dist/wheel-gestures.esm.js
function Ur() {
	return Ur = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ur.apply(this, arguments);
}
var Wr = .996, Gr = function(e, t) {
	return t === void 0 && (t = Wr), e * t / (1 - t);
};
function Kr(e) {
	return e[e.length - 1];
}
function qr(e) {
	return e.reduce(function(e, t) {
		return e + t;
	}) / e.length;
}
var Jr = function(e, t, n) {
	return Math.min(Math.max(t, e), n);
};
function Yr(e, t) {
	if (e.length !== t.length) throw Error("vectors must be same length");
	return e.map(function(e, n) {
		return e + t[n];
	});
}
function Xr(e) {
	return Math.max.apply(Math, e.map(Math.abs));
}
function Zr(e) {
	return Object.freeze(e), Object.values(e).forEach(function(e) {
		typeof e == "object" && e && !Object.isFrozen(e) && Zr(e);
	}), e;
}
function Qr() {
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
	return Zr({
		on: t,
		off: n,
		dispatch: r
	});
}
function $r(e) {
	var t = [], n = function(n) {
		return n.addEventListener("wheel", e, { passive: !1 }), t.push(n), function() {
			return r(n);
		};
	}, r = function(n) {
		n.removeEventListener("wheel", e), t = t.filter(function(e) {
			return e !== n;
		});
	};
	return Zr({
		observe: n,
		unobserve: r,
		disconnect: function() {
			t.forEach(r);
		}
	});
}
var ei = [
	1,
	18,
	typeof window < "u" && window.innerHeight || 800
];
function ti(e) {
	var t = e.deltaX * ei[e.deltaMode], n = e.deltaY * ei[e.deltaMode], r = (e.deltaZ || 0) * ei[e.deltaMode];
	return {
		timeStamp: e.timeStamp,
		axisDelta: [
			t,
			n,
			r
		]
	};
}
var ni = [
	-1,
	-1,
	-1
];
function ri(e, t) {
	if (!t) return e;
	var n = t === !0 ? ni : t.map(function(e) {
		return e ? -1 : 1;
	});
	return Ur({}, e, { axisDelta: e.axisDelta.map(function(e, t) {
		return e * n[t];
	}) });
}
var ii = 700, ai = function(e) {
	return Ur({}, e, { axisDelta: e.axisDelta.map(function(e) {
		return Jr(e, -ii, ii);
	}) });
}, oi = process.env.NODE_ENV !== "production", si = .6, ci = .96, li = 2, ui = 5, di = /*#__PURE__*/ Zr({
	preventWheelAction: !0,
	reverseSign: [
		!0,
		!0,
		!1
	]
}), fi = 400;
function pi() {
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
		willEndTimeout: fi
	};
}
function mi(e) {
	e === void 0 && (e = {});
	var t = Qr(), n = t.on, r = t.off, i = t.dispatch, a = di, o = pi(), s, c = !1, l, u = function(e) {
		Array.isArray(e) ? e.forEach(function(e) {
			return m(e);
		}) : m(e);
	}, d = function(e) {
		return e === void 0 && (e = {}), Object.values(e).some(function(e) {
			return e == null;
		}) ? (oi && console.error("updateOptions ignored! undefined & null options not allowed"), a) : a = Zr(Ur({}, di, a, e));
	}, f = function(e) {
		var t = Ur({
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
				return Yr(t.axisMovement, t.axisVelocity.map(function(e) {
					return Gr(e);
				}));
			}
		}, e);
		i("wheel", Ur({}, t, { previous: l })), l = t;
	}, p = function(e, t) {
		var n = a.preventWheelAction, r = t[0], i = t[1], o = t[2];
		if (typeof n == "boolean") return n;
		switch (n) {
			case "x": return Math.abs(r) >= e;
			case "y": return Math.abs(i) >= e;
			case "z": return Math.abs(o) >= e;
			default: return oi && console.warn("unsupported preventWheelAction value: " + n, "warn"), !1;
		}
	}, m = function(e) {
		var t = ai(ri(ti(e), a.reverseSign)), n = t.axisDelta, r = t.timeStamp, i = Xr(n);
		if (e.preventDefault && p(i, n) && e.preventDefault(), o.isStarted ? o.isMomentum && i > Math.max(2, o.lastAbsDelta * 2) && (w(!0), S()) : S(), i === 0 && Object.is && Object.is(e.deltaX, -0)) {
			c = !0;
			return;
		}
		s = e, o.axisMovement = Yr(o.axisMovement, n), o.lastAbsDelta = i, o.scrollPointsToMerge.push({
			axisDelta: n,
			timeStamp: r
		}), h(), f({
			axisDelta: n,
			isStart: !o.isStartPublished
		}), o.isStartPublished = !0, C();
	}, h = function() {
		o.scrollPointsToMerge.length === li ? (o.scrollPoints.unshift({
			axisDeltaSum: o.scrollPointsToMerge.map(function(e) {
				return e.axisDelta;
			}).reduce(Yr),
			timeStamp: qr(o.scrollPointsToMerge.map(function(e) {
				return e.timeStamp;
			}))
		}), _(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || b()) : o.isStartPublished || g();
	}, g = function() {
		o.axisVelocity = Kr(o.scrollPointsToMerge).axisDelta.map(function(e) {
			return e / o.willEndTimeout;
		});
	}, _ = function() {
		var e = o.scrollPoints, t = e[0], n = e[1];
		if (!(!n || !t)) {
			var r = t.timeStamp - n.timeStamp;
			if (r <= 0) {
				oi && console.warn("invalid deltaTime");
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
		return e === 0 || e <= ci && e >= si;
	}, b = function() {
		if (o.accelerationFactors.length >= ui) {
			if (c && (c = !1, Xr(o.axisVelocity) >= .2)) {
				x();
				return;
			}
			var e = o.accelerationFactors.slice(ui * -1);
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
		o = pi(), o.isStarted = !0, o.startTime = Date.now(), l = void 0, c = !1;
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
	}, T = $r(u), E = T.observe, D = T.unobserve, ee = T.disconnect;
	return d(e), Zr({
		on: n,
		off: r,
		observe: E,
		unobserve: D,
		disconnect: ee,
		feedWheel: u,
		updateOptions: d
	});
}
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel-wheel-gestures@8.0.1_embla-carousel@8.5.2/node_modules/embla-carousel-wheel-gestures/dist/embla-carousel-wheel-gestures.esm.js
var hi = {
	active: !0,
	breakpoints: {},
	wheelDraggingClass: "is-wheel-dragging",
	forceWheelAxis: void 0,
	target: void 0
};
_i.globalOptions = void 0;
var gi = process.env.NODE_ENV !== "production";
function _i(e) {
	e === void 0 && (e = {});
	var t, n = function() {};
	function r(r, i) {
		var a = i.mergeOptions, o = i.optionsAtMedia;
		t = o(a(a(hi, _i.globalOptions), e));
		var s = r.internalEngine(), c = t.target ?? r.containerNode().parentNode, l = t.forceWheelAxis ?? s.options.axis, u = mi({
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
				return gi && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
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
function vi(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function yi(e) {
	return vi(e) || Array.isArray(e);
}
function bi() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function xi(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !yi(r) || !yi(i) ? r === i : xi(r, i);
	});
}
function Si(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function Ci(e, t) {
	if (e.length !== t.length) return !1;
	let n = Si(e), r = Si(t);
	return n.every((e, t) => {
		let n = r[t];
		return xi(e, n);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel@8.6.0/node_modules/embla-carousel/esm/embla-carousel.esm.js
function wi(e) {
	return typeof e == "number";
}
function Ti(e) {
	return typeof e == "string";
}
function Ei(e) {
	return typeof e == "boolean";
}
function Di(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function V(e) {
	return Math.abs(e);
}
function Oi(e) {
	return Math.sign(e);
}
function ki(e, t) {
	return V(e - t);
}
function Ai(e, t) {
	return e === 0 || t === 0 || V(e) <= V(t) ? 0 : V(ki(V(e), V(t)) / e);
}
function ji(e) {
	return Math.round(e * 100) / 100;
}
function Mi(e) {
	return Li(e).map(Number);
}
function Ni(e) {
	return e[Pi(e)];
}
function Pi(e) {
	return Math.max(0, e.length - 1);
}
function Fi(e, t) {
	return t === Pi(e);
}
function Ii(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function Li(e) {
	return Object.keys(e);
}
function Ri(e, t) {
	return [e, t].reduce((e, t) => (Li(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = Di(r) && Di(i) ? Ri(r, i) : i;
	}), e), {});
}
function zi(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function Bi(e, t) {
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
		return Ti(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function Vi() {
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
function Hi(e, t, n, r) {
	let i = Vi(), a = 1e3 / 60, o = null, s = 0, c = 0;
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
function Ui(e, t) {
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
function Wi(e = 0, t = 0) {
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
function Gi(e, t, n) {
	let { constrain: r } = Wi(0, e), i = e + 1, a = o(t);
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
		return Gi(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function Ki(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, x = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], S = { passive: !1 }, C = Vi(), w = Vi(), T = Wi(50, 225).constrain(p.measure(20)), E = {
		mouse: 300,
		touch: 400
	}, D = {
		mouse: 500,
		touch: 600
	}, ee = m ? 43 : 25, te = !1, ne = 0, re = 0, ie = !1, O = !1, ae = !1, oe = !1;
	function se(e) {
		if (!v) return;
		function n(t) {
			(Ei(v) || v(e, t)) && pe(t);
		}
		let r = t;
		C.add(r, "dragstart", (e) => e.preventDefault(), S).add(r, "touchmove", () => void 0, S).add(r, "touchend", () => void 0).add(r, "touchstart", n).add(r, "mousedown", n).add(r, "touchcancel", A).add(r, "contextmenu", A).add(r, "click", me, !0);
	}
	function ce() {
		C.clear(), w.clear();
	}
	function le() {
		let e = oe ? n : t;
		w.add(e, "touchmove", k, S).add(e, "touchend", A).add(e, "mousemove", k, S).add(e, "mouseup", A);
	}
	function ue(e) {
		let t = e.nodeName || "";
		return x.includes(t);
	}
	function de() {
		return (m ? D : E)[oe ? "mouse" : "touch"];
	}
	function fe(e, t) {
		let n = d.add(Oi(e) * -1), r = u.byDistance(e, !m).distance;
		return m || V(e) < T ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function pe(e) {
		let t = zi(e, r);
		oe = t, ae = m && t && !e.buttons && te, te = ki(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (ue(e.target) || (ie = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), le(), ne = a.readPoint(e), re = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function k(e) {
		if (!zi(e, r) && e.touches.length >= 2) return A(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = ki(t, ne), c = ki(n, re);
		if (!O && !oe && (!e.cancelable || (O = o > c, !O))) return A(e);
		let u = a.pointerMove(e);
		o > h && (ae = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function A(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * de(), r = fe(b(n), t), i = Ai(n, r), o = ee - 10 * i, s = _ + i / 50;
		O = !1, ie = !1, w.clear(), l.useDuration(o).useFriction(s), c.distance(r, !m), oe = !1, f.emit("pointerUp");
	}
	function me(e) {
		ae &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function he() {
		return ie;
	}
	return {
		init: se,
		destroy: ce,
		pointerDown: he
	};
}
function qi(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (zi(n, t) ? n : n.touches[0])[i];
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
function Ji() {
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
function Yi(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function Xi(e, t, n, r, i, a, o) {
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
			(Ei(a) || a(i, e)) && o(e);
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
function Zi(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = Oi(a), d = u, x;
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
function Qi(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = Wi(.1, .99), c = !1;
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
function $i(e, t, n, r, i) {
	let a = Wi(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return ki(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = Ni(o);
		return Wi(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = Fi(n, t);
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
function ea(e, t, n) {
	let r = t[0];
	return { limit: Wi(n ? r - e : Ni(t), r) };
}
function ta(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = Wi(t.min + i, t.max + i);
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
function na(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function ra(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => Ni(e)[o] - e[0][a]).map(V);
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
function ia(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = Fi(n, t);
			return r ? Ii(Ni(n[0]) + 1) : i ? Ii(Pi(a) - Ni(n)[0] + 1, Ni(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function aa(e, t, n, r, i) {
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
		let a = i.filter((e) => Oi(e) === r);
		return a.length ? c(a) : Ni(i) - n;
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
function oa(e, t, n, r, i, a, o) {
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
function sa(e, t, n, r, i, a, o, s) {
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
			wi(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(Ei(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function ca(e) {
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
		return wi(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function la(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = ji(e.direction(t));
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
function ua(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = Mi(i), d = Mi(i).reverse(), f = _().concat(v());
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
				slideLocation: ca(-1),
				translate: la(e, c[t]),
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
function da(e, t, n) {
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
			i || (Ei(n) || n(a, e)) && o(e);
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
function fa(e, t, n, r) {
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
		return Li(i).reduce((t, n) => {
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
function pa(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return V(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(Ni(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = Fi(n, t);
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
function ma(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = wi(n);
	function p(e, t) {
		return Mi(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? Mi(e).reduce((n, f, p) => {
			let m = Ni(n) || 0, h = m === 0, g = f === Pi(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = V(v - (!r && g ? d(s) : 0) - (_ + y));
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
function ha(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = Ji(), w = C.measure(t), T = n.map(C.measure), E = Ui(c, l), D = E.measureSize(w), ee = Yi(D), te = Bi(s, D), ne = !d && !!v, { slideSizes: re, slideSizesWithGaps: ie, startGap: O, endGap: ae } = pa(E, w, T, n, d || !!v, i), oe = ma(E, D, g, d, w, T, O, ae, 2), { snaps: se, snapsAligned: ce } = ra(E, te, w, T, oe), le = -Ni(se) + Ni(ie), { snapsContained: ue, scrollContainLimit: de } = $i(D, le, ce, v, 2), fe = ne ? ue : ce, { limit: pe } = ea(le, fe, d), k = Gi(Pi(fe), u, d), A = k.clone(), me = Mi(n), he = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, ge = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, _e = Hi(r, i, () => he(Me), (e) => ge(Me, e)), ve = .68, ye = fe[k.get()], be = ca(ye), xe = ca(ye), Se = ca(ye), Ce = ca(ye), we = Zi(be, Se, xe, Ce, f, ve), Te = aa(d, fe, le, pe, Ce), Ee = oa(_e, k, A, we, Te, Ce, o), De = na(pe), Oe = Vi(), ke = fa(t, n, o, h), { slideRegistry: Ae } = ia(ne, v, fe, de, oe, me), je = sa(e, n, Ae, Ee, we, Oe, o, S), Me = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: _e,
		axis: E,
		dragHandler: Ki(E, e, r, i, Ce, qi(E, i), be, _e, Ee, we, Te, k, o, ee, p, m, _, ve, x),
		eventStore: Oe,
		percentOfView: ee,
		index: k,
		indexPrevious: A,
		limit: pe,
		location: be,
		offsetLocation: Se,
		previousLocation: xe,
		options: a,
		resizeHandler: Xi(t, o, i, n, E, y, C),
		scrollBody: we,
		scrollBounds: Qi(pe, Se, Ce, we, ee),
		scrollLooper: ta(le, pe, Se, [
			be,
			Se,
			xe,
			Ce
		]),
		scrollProgress: De,
		scrollSnapList: fe.map(De.get),
		scrollSnaps: fe,
		scrollTarget: Te,
		scrollTo: Ee,
		slideLooper: ua(E, D, le, re, ie, se, fe, Se, n),
		slideFocus: je,
		slidesHandler: da(t, o, b),
		slidesInView: ke,
		slideIndexes: me,
		slideRegistry: Ae,
		slidesToScroll: oe,
		target: Ce,
		translate: la(E, t)
	};
	return Me;
}
function ga() {
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
var _a = {
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
function va(e) {
	function t(e, t) {
		return Ri(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, Li(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => Li(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function ya(e) {
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
function ba(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = va(i), o = ya(a), s = Vi(), c = ga(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = D, g = !1, _, v = l(_a, ba.globalOptions), y = l(v), b = [], x, S, C;
	function w() {
		let { container: t, slides: n } = y;
		S = (Ti(t) ? e.querySelector(t) : t) || e.children[0];
		let r = Ti(n) ? S.querySelectorAll(n) : n;
		C = [].slice.call(r || S.children);
	}
	function T(t) {
		let n = ha(e, S, C, r, i, t, c);
		return t.loop && !n.slideLooper.canLoop() ? T(Object.assign({}, t, { loop: !1 })) : n;
	}
	function E(e, t) {
		g || (v = l(v, e), y = u(v), b = t || b, w(), _ = T(y), d([v, ...b.map(({ options: e }) => e)]).forEach((e) => s.add(e, "change", D)), y.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(he), _.eventHandler.init(he), _.resizeHandler.init(he), _.slidesHandler.init(he), _.options.loop && _.slideLooper.loop(), S.offsetParent && C.length && _.dragHandler.init(he), x = o.init(he, b)));
	}
	function D(e, t) {
		let n = ce();
		ee(), E(l({ startIndex: n }, e), t), c.emit("reInit");
	}
	function ee() {
		_.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), o.destroy(), s.clear();
	}
	function te() {
		g || (g = !0, s.clear(), ee(), c.emit("destroy"), c.clear());
	}
	function ne(e, t, n) {
		!y.active || g || (_.scrollBody.useBaseFriction().useDuration(t === !0 ? 0 : y.duration), _.scrollTo.index(e, n || 0));
	}
	function re(e) {
		ne(_.index.add(1).get(), e, -1);
	}
	function ie(e) {
		ne(_.index.add(-1).get(), e, 1);
	}
	function O() {
		return _.index.add(1).get() !== ce();
	}
	function ae() {
		return _.index.add(-1).get() !== ce();
	}
	function oe() {
		return _.scrollSnapList;
	}
	function se() {
		return _.scrollProgress.get(_.offsetLocation.get());
	}
	function ce() {
		return _.index.get();
	}
	function le() {
		return _.indexPrevious.get();
	}
	function ue() {
		return _.slidesInView.get();
	}
	function de() {
		return _.slidesInView.get(!1);
	}
	function fe() {
		return x;
	}
	function pe() {
		return _;
	}
	function k() {
		return e;
	}
	function A() {
		return S;
	}
	function me() {
		return C;
	}
	let he = {
		canScrollNext: O,
		canScrollPrev: ae,
		containerNode: A,
		internalEngine: pe,
		destroy: te,
		off: p,
		on: f,
		emit: m,
		plugins: fe,
		previousScrollSnap: le,
		reInit: h,
		rootNode: k,
		scrollNext: re,
		scrollPrev: ie,
		scrollProgress: se,
		scrollSnapList: oe,
		scrollTo: ne,
		selectedScrollSnap: ce,
		slideNodes: me,
		slidesInView: ue,
		slidesNotInView: de
	};
	return E(t, n), setTimeout(() => c.emit("init"), 0), he;
}
ba.globalOptions = void 0;
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel-react@8.6.0_react@18.3.1/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
function xa(e = {}, t = []) {
	let n = L(e), r = L(t), [i, a] = R(), [o, s] = R(), c = F(() => {
		i && i.reInit(n.current, r.current);
	}, [i]);
	return I(() => {
		xi(n.current, e) || (n.current = e, c());
	}, [e, c]), I(() => {
		Ci(r.current, t) || (r.current = t, c());
	}, [t, c]), I(() => {
		if (bi() && o) {
			ba.globalOptions = xa.globalOptions;
			let e = ba(o, n.current, r.current);
			return a(e), () => e.destroy();
		}
		a(void 0);
	}, [o, a]), [s, i];
}
xa.globalOptions = void 0;
var Sa = ({ children: e }) => {
	let t = L(null), [n, r] = R(!0), [i, a] = R(!1);
	Fr(() => {
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
			i && /* @__PURE__ */ z(pe, {
				size: "lg",
				compact: !0,
				variant: "outline",
				className: m("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
				onClick: s,
				icon: Ce,
				label: "Previous",
				hideLabel: !0
			}),
			n && /* @__PURE__ */ z(pe, {
				size: "lg",
				variant: "outline",
				compact: !0,
				className: m("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
				onClick: o,
				icon: Rt,
				label: "Next",
				hideLabel: !0
			})
		]
	});
}, Ca = N.createContext(null);
function wa() {
	let e = N.useContext(Ca);
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
var Ta = N.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: n, plugins: r, className: i, children: a, ...o }, s) => {
	let [c, l] = xa({
		...t,
		axis: e === "horizontal" ? "x" : "y"
	}, r), [u, d] = N.useState(!1), [f, p] = N.useState(!1), h = N.useCallback((e) => {
		e && (d(e.canScrollPrev()), p(e.canScrollNext()));
	}, []), g = N.useCallback(() => {
		l?.scrollPrev();
	}, [l]), _ = N.useCallback(() => {
		l?.scrollNext();
	}, [l]), v = N.useCallback((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), g()) : e.key === "ArrowRight" && (e.preventDefault(), _());
	}, [g, _]);
	return N.useEffect(() => {
		!l || !n || n(l);
	}, [l, n]), N.useEffect(() => {
		if (l) return h(l), l.on("reInit", h), l.on("select", h), () => {
			l?.off("select", h);
		};
	}, [l, h]), /* @__PURE__ */ z(Ca.Provider, {
		value: {
			carouselRef: c,
			api: l,
			opts: t,
			orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev: g,
			scrollNext: _,
			canScrollPrev: u,
			canScrollNext: f
		},
		children: /* @__PURE__ */ z("div", {
			ref: s,
			onKeyDownCapture: v,
			className: m("group/carousel relative", i),
			role: "region",
			"aria-roledescription": "carousel",
			...o,
			children: a
		})
	});
});
Ta.displayName = "Carousel";
var Ea = N.forwardRef(({ className: e, ...t }, n) => {
	let r = "linear-gradient(to right, transparent 0px, transparent 14px, black 28px, black calc(100% - 28px), transparent calc(100% - 14px), transparent 100%)", { carouselRef: i, orientation: a } = wa();
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
			className: m("flex", a === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
			...t
		})
	});
});
Ea.displayName = "CarouselContent";
var Da = N.forwardRef(({ className: e, ...t }, n) => {
	let { orientation: r } = wa();
	return /* @__PURE__ */ z("div", {
		ref: n,
		role: "group",
		"aria-roledescription": "slide",
		className: m("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e),
		...t
	});
});
Da.displayName = "CarouselItem";
var Oa = N.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
	let { orientation: i, scrollPrev: a, canScrollPrev: o } = wa();
	return /* @__PURE__ */ z("div", {
		className: m("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", i === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
		children: /* @__PURE__ */ z(pe, {
			compact: !0,
			ref: r,
			size: "sm",
			variant: t,
			className: m("absolute opacity-100 transition-all", e),
			disabled: !o,
			onClick: a,
			...n,
			label: "Previous",
			icon: Se,
			hideLabel: !0
		})
	});
});
Oa.displayName = "CarouselPrevious";
var ka = N.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
	let { orientation: i, scrollNext: a, canScrollNext: o } = wa();
	return /* @__PURE__ */ z("div", {
		className: m("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", i === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
		children: /* @__PURE__ */ z(pe, {
			ref: r,
			size: "sm",
			variant: t,
			compact: !0,
			className: m("absolute opacity-100 transition-all", e),
			disabled: !o,
			onClick: a,
			...n,
			label: "Next",
			icon: tt,
			hideLabel: !0
		})
	});
});
ka.displayName = "CarouselNext";
var Aa = N.forwardRef(({ ...e }, t) => {
	let { api: n } = wa(), [, r] = N.useState(!1), i = N.useRef(null), a = N.useCallback(() => {
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
		className: m("flex justify-center", e.className),
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
					children: /* @__PURE__ */ z("div", { className: m("h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]", e === s && "rounded-[3px] opacity-100 group-hover/dot:opacity-100", d(e)) })
				}, e))
			})
		})
	});
});
Aa.displayName = "CarouselDots";
var ja = (e) => e?.containerNode()?.childElementCount ?? 0, Ma = (e) => {
	let { api: t, canScrollNext: n, scrollNext: r } = wa(), i = e?.hasMore ?? !1, a = e?.isLoading ?? !1, o = e?.onLoadMore, s = N.useRef({
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
			e && ja(t) <= d.current && l(!1);
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
			i && (d.current = ja(t), l(!0), a || o?.());
		}
	};
}, Na = N.forwardRef(({ className: e, labels: t, showDots: n = !0, paging: r, ...i }, a) => {
	let { scrollPrev: o, canScrollPrev: s } = wa(), { canGoNext: c, goNext: l, isAwaitingPage: u } = Ma(r);
	return /* @__PURE__ */ B("div", {
		ref: a,
		className: m("flex flex-row items-center justify-between gap-2 pt-4", e),
		...i,
		children: [
			/* @__PURE__ */ z(pe, {
				size: "md",
				variant: "outline",
				icon: Ce,
				label: t?.previous ?? "Previous",
				hideLabel: !0,
				disabled: !s,
				onClick: o
			}),
			n ? /* @__PURE__ */ z(Aa, { className: "grow" }) : null,
			/* @__PURE__ */ z(pe, {
				size: "md",
				variant: "outline",
				icon: Rt,
				label: t?.next ?? "Next",
				hideLabel: !0,
				loading: u,
				disabled: !c,
				onClick: l
			})
		]
	});
});
Na.displayName = "CarouselControls";
//#endregion
//#region src/experimental/Navigation/Carousel/types.ts
var Pa = r({
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
var Ia = a(l("Carousel", ({ children: e, columns: t, showArrows: n = !0, showDots: r = !0, arrowsPlacement: i = "overlay", arrowLabels: a, paging: o, autoplay: s = !1, delay: c = 3e3, showPeek: l = !1, doubleColumns: u }) => {
	let d = P.Children.toArray(e), f = n && i === "bottom", p = P.useRef(s ? Hr({
		delay: c,
		stopOnInteraction: !0
	}) : void 0);
	return t ? /* @__PURE__ */ z(Ta, {
		className: "flex w-full flex-col gap-3 @container",
		opts: {
			align: l ? "center" : "start",
			slidesToScroll: "auto",
			duration: 20,
			containScroll: !1
		},
		plugins: [p.current, _i()].filter(Boolean),
		onMouseEnter: s ? () => {
			p.current && p.current.stop();
		} : void 0,
		onMouseLeave: s ? () => {
			p.current && p.current.play();
		} : void 0,
		children: /* @__PURE__ */ B("div", {
			className: m("flex flex-col", !f && "gap-5"),
			children: [/* @__PURE__ */ B("div", {
				className: "relative",
				children: [/* @__PURE__ */ z(Ea, { children: P.Children.map(d, (e, n) => {
					let r = u?.find((e) => e.index === n);
					return /* @__PURE__ */ z(Da, {
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
				}) }), n && !f && /* @__PURE__ */ B(Rr, { children: [/* @__PURE__ */ z(Oa, { label: a?.previous ?? "Previous" }), /* @__PURE__ */ z(ka, { label: a?.next ?? "Next" })] })]
			}), f ? /* @__PURE__ */ z(Na, {
				labels: a,
				showDots: r,
				paging: o
			}) : r && /* @__PURE__ */ z(Aa, {})]
		})
	}) : /* @__PURE__ */ z(Sa, { children: e });
})), La = Ar({
	enabled: !1,
	enable: () => null,
	disable: () => null,
	toggle: () => null
}), Ra = ({ initiallyEnabled: e = !1, children: t }) => {
	let [n, r] = R(e), i = F(() => {
		r(!0);
	}, []), a = F(() => r(!1), []), o = F(() => r((e) => !e), []);
	return /* @__PURE__ */ z(La.Provider, {
		value: {
			enable: i,
			disable: a,
			toggle: o,
			enabled: n
		},
		children: t
	});
}, za = () => {
	let e = Mr(La);
	if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
	return e;
}, Ba = ({ children: e }) => {
	let { enabled: t } = za();
	return /* @__PURE__ */ z("div", {
		className: m("inline-flex ring-1 ring-inset ring-transparent transition-all duration-150", t && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"),
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
}, Va = () => /* @__PURE__ */ z("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Ha = 480, Ua = (e) => {
	let [t, n] = R(!1);
	return I(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > "u") return;
		let r = () => n(t.clientWidth >= Ha);
		r();
		let i = new ResizeObserver(r);
		return i.observe(t), () => i.disconnect();
	}, [e]), t;
}, Wa = P.createContext(!1), Ga = () => P.useContext(Wa), Ka = m("-mx-1.5 inline-flex min-w-0 items-center gap-1 rounded-sm px-1.5 py-0.5", "border-none bg-transparent text-left no-underline", "text-f1-foreground", "cursor-pointer transition-colors hover:bg-f1-background-secondary-hover", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"), qa = ({ title: e, link: t, isWide: n }) => {
	let r = m("truncate", n && "text-lg font-semibold");
	if (!t) return /* @__PURE__ */ z(Kt, {
		className: r,
		children: e
	});
	let i = /* @__PURE__ */ B(Rr, { children: [/* @__PURE__ */ z(Kt, {
		className: r,
		children: e
	}), /* @__PURE__ */ z(c, {
		size: "sm",
		icon: t.icon ?? Rt
	})] }), a = t.url ? /* @__PURE__ */ z(me, {
		href: t.url,
		onClick: t.onClick,
		"aria-label": t.title,
		className: Ka,
		...fe(t.url) ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children: i
	}) : /* @__PURE__ */ z("button", {
		type: "button",
		onClick: t.onClick,
		"aria-label": t.title,
		className: Ka,
		children: i
	});
	return /* @__PURE__ */ z(d, {
		label: t.title,
		children: a
	});
}, Ja = jr(function({ header: e, children: t, action: n, footerClassName: r, summaries: i, alert: a, status: o, fullHeight: s = !1, actions: l, headerControls: f, AIButton: p, draggable: h = !1, onDragStart: g, onDragEnd: _, isDragging: v = !1, selected: y = !1 }, b) {
	let x = L(null), S = he(b, x), C = Ua(x);
	I(() => {
		if (!v || !_) return;
		let e = () => _();
		return document.addEventListener("mouseup", e), () => document.removeEventListener("mouseup", e);
	}, [v, _]);
	let w = u(), { enabled: T, toggle: D } = za();
	return I(() => {
		if (a && o) throw Error("You cannot pass both alert and status at the same time to this component");
	}, [a, o]), /* @__PURE__ */ z(Wa.Provider, {
		value: C,
		children: /* @__PURE__ */ B(Ut, {
			className: m(s ? "h-full" : "", "relative flex gap-3 border-f1-border-secondary", h && "hover:border-f1-border-hover", y && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", v && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
			ref: S,
			children: [
				e && /* @__PURE__ */ z(qt, {
					className: "-mr-1 -mt-1",
					children: /* @__PURE__ */ B("div", {
						className: "flex w-full flex-1 flex-col gap-4",
						children: [/* @__PURE__ */ B("div", {
							className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2",
							children: [
								h && /* @__PURE__ */ z("div", {
									className: "-ml-1 flex h-6 w-6 shrink-0 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
									onMouseDown: g,
									"data-gs-handle": "true",
									children: /* @__PURE__ */ z(c, {
										icon: re,
										size: "xs"
									})
								}),
								/* @__PURE__ */ B("div", {
									className: "flex min-h-6 min-w-0 grow flex-row items-center gap-1",
									children: [
										e.title && /* @__PURE__ */ z(qa, {
											title: e.title,
											link: e.link,
											isWide: C
										}),
										e.subtitle && /* @__PURE__ */ B("div", {
											className: "flex flex-row items-center gap-1",
											children: [/* @__PURE__ */ z(Va, {}), /* @__PURE__ */ z(Jt, {
												className: "truncate",
												children: e.subtitle
											})]
										}),
										e.info && /* @__PURE__ */ z(d, {
											label: e.info,
											children: /* @__PURE__ */ z(c, {
												icon: zt,
												size: "sm",
												className: "text-f1-foreground-secondary"
											})
										}),
										e.count && /* @__PURE__ */ z("div", {
											className: "ml-0.5",
											children: /* @__PURE__ */ z(de, { value: e.count })
										})
									]
								}),
								/* @__PURE__ */ B("div", {
									className: "flex flex-row items-center gap-3",
									children: [
										a && /* @__PURE__ */ z(Wt, {
											text: a,
											level: "critical"
										}),
										o && /* @__PURE__ */ z(It, {
											text: o.text,
											variant: o.variant
										}),
										f,
										p && /* @__PURE__ */ z(xt, {
											size: "sm",
											label: w.ai.ask,
											onClick: p,
											icon: mt
										}),
										l && /* @__PURE__ */ z(cn, {
											items: l,
											align: "end",
											children: /* @__PURE__ */ z(A, {
												icon: pn,
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
							children: [/* @__PURE__ */ z(Ba, { children: /* @__PURE__ */ z(Ht, { children: e.comment }) }), !!e.canBeBlurred && /* @__PURE__ */ z("span", { children: /* @__PURE__ */ z(A, {
								icon: T ? hn : gn,
								hideLabel: !0,
								label: "hide/show",
								variant: "outline",
								onClick: D,
								size: "sm"
							}) })]
						})]
					})
				}),
				/* @__PURE__ */ B(Gt, {
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
					className: m(r),
					children: /* @__PURE__ */ z(A, {
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
} } }), Xa = jr(function({ header: e, height: t }, n) {
	return /* @__PURE__ */ B(Ut, {
		className: m("flex gap-4 border-f1-border-secondary", t === "full" && "h-full"),
		ref: n,
		"aria-live": "polite",
		"aria-busy": !0,
		children: [/* @__PURE__ */ z(qt, {
			className: "-mr-1 -mt-1",
			children: /* @__PURE__ */ B("div", {
				className: "flex h-6 w-full flex-row items-center gap-1.5",
				"aria-hidden": !0,
				children: [e?.title ? /* @__PURE__ */ z(Kt, { children: e.title }) : /* @__PURE__ */ z(k, { className: "h-4 w-full max-w-16" }), e?.subtitle && /* @__PURE__ */ z(Jt, { children: e.subtitle })]
			})
		}), /* @__PURE__ */ z(Gt, {
			"aria-hidden": !0,
			className: m(t !== "full" && Ya({ height: t })),
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
}), Za = a(l("Widget", Cr(Ja, Xa))), Qa = /* @__PURE__ */ e(ye()), $a = /* @__PURE__ */ e(xe()), H = /* @__PURE__ */ e(dt()), eo = [
	"points",
	"className",
	"baseLinePoints",
	"connectNulls"
];
function to() {
	return to = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, to.apply(this, arguments);
}
function no(e, t) {
	if (e == null) return {};
	var n = ro(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function ro(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function io(e) {
	return co(e) || so(e) || oo(e) || ao();
}
function ao() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function oo(e, t) {
	if (e) {
		if (typeof e == "string") return lo(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lo(e, t);
	}
}
function so(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function co(e) {
	if (Array.isArray(e)) return lo(e);
}
function lo(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var uo = function(e) {
	return e && e.x === +e.x && e.y === +e.y;
}, fo = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [[]];
	return e.forEach(function(e) {
		uo(e) ? t[t.length - 1].push(e) : t[t.length - 1].length > 0 && t.push([]);
	}), uo(e[0]) && t[t.length - 1].push(e[0]), t[t.length - 1].length <= 0 && (t = t.slice(0, -1)), t;
}, po = function(e, t) {
	var n = fo(e);
	t && (n = [n.reduce(function(e, t) {
		return [].concat(io(e), io(t));
	}, [])]);
	var r = n.map(function(e) {
		return e.reduce(function(e, t, n) {
			return `${e}${n === 0 ? "M" : "L"}${t.x},${t.y}`;
		}, "");
	}).join("");
	return n.length === 1 ? `${r}Z` : r;
}, mo = function(e, t, n) {
	var r = po(e, n);
	return `${r.slice(-1) === "Z" ? r.slice(0, -1) : r}L${po(t.reverse(), n).slice(1)}`;
}, ho = function(e) {
	var t = e.points, r = e.className, i = e.baseLinePoints, a = e.connectNulls, o = no(e, eo);
	if (!t || !t.length) return null;
	var s = n("recharts-polygon", r);
	if (i && i.length) {
		var c = o.stroke && o.stroke !== "none", l = mo(t, i, a);
		return /*#__PURE__*/ P.createElement("g", { className: s }, /*#__PURE__*/ P.createElement("path", to({}, j(o, !0), {
			fill: l.slice(-1) === "Z" ? o.fill : "none",
			stroke: "none",
			d: l
		})), c ? /*#__PURE__*/ P.createElement("path", to({}, j(o, !0), {
			fill: "none",
			d: po(t, a)
		})) : null, c ? /*#__PURE__*/ P.createElement("path", to({}, j(o, !0), {
			fill: "none",
			d: po(i, a)
		})) : null);
	}
	var u = po(t, a);
	return /*#__PURE__*/ P.createElement("path", to({}, j(o, !0), {
		fill: u.slice(-1) === "Z" ? o.fill : "none",
		className: s,
		d: u
	}));
}, go = [
	"cx",
	"cy",
	"innerRadius",
	"outerRadius",
	"gridType",
	"radialLines"
];
function _o(e) {
	"@babel/helpers - typeof";
	return _o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _o(e);
}
function vo(e, t) {
	if (e == null) return {};
	var n = yo(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function yo(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function bo() {
	return bo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, bo.apply(this, arguments);
}
function xo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function So(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? xo(Object(n), !0).forEach(function(t) {
			Co(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Co(e, t, n) {
	return t = wo(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function wo(e) {
	var t = To(e, "string");
	return _o(t) == "symbol" ? t : t + "";
}
function To(e, t) {
	if (_o(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (_o(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Eo = function(e, t, n, r) {
	var i = "";
	return r.forEach(function(r, a) {
		var o = Ue(t, n, e, r);
		i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
	}), i += "Z", i;
}, Do = function(e) {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.polarAngles, o = e.radialLines;
	if (!a || !a.length || !o) return null;
	var s = So({ stroke: "#ccc" }, j(e, !1));
	return /*#__PURE__*/ P.createElement("g", { className: "recharts-polar-grid-angle" }, a.map(function(e) {
		var a = Ue(t, n, r, e), o = Ue(t, n, i, e);
		return /*#__PURE__*/ P.createElement("line", bo({}, s, {
			key: `line-${e}`,
			x1: a.x,
			y1: a.y,
			x2: o.x,
			y2: o.y
		}));
	}));
}, Oo = function(e) {
	var t = e.cx, r = e.cy, i = e.radius, a = e.index, o = So(So({ stroke: "#ccc" }, j(e, !1)), {}, { fill: "none" });
	return /*#__PURE__*/ P.createElement("circle", bo({}, o, {
		className: n("recharts-polar-grid-concentric-circle", e.className),
		key: `circle-${a}`,
		cx: t,
		cy: r,
		r: i
	}));
}, ko = function(e) {
	var t = e.radius, r = e.index, i = So(So({ stroke: "#ccc" }, j(e, !1)), {}, { fill: "none" });
	return /*#__PURE__*/ P.createElement("path", bo({}, i, {
		className: n("recharts-polar-grid-concentric-polygon", e.className),
		key: `path-${r}`,
		d: Eo(t, e.cx, e.cy, e.polarAngles)
	}));
}, Ao = function(e) {
	var t = e.polarRadius, n = e.gridType;
	return !t || !t.length ? null : /*#__PURE__*/ P.createElement("g", { className: "recharts-polar-grid-concentric" }, t.map(function(t, r) {
		var i = r;
		return n === "circle" ? /*#__PURE__*/ P.createElement(Oo, bo({ key: i }, e, {
			radius: t,
			index: r
		})) : /*#__PURE__*/ P.createElement(ko, bo({ key: i }, e, {
			radius: t,
			index: r
		}));
	}));
}, jo = function(e) {
	var t = e.cx, n = t === void 0 ? 0 : t, r = e.cy, i = r === void 0 ? 0 : r, a = e.innerRadius, o = a === void 0 ? 0 : a, s = e.outerRadius, c = s === void 0 ? 0 : s, l = e.gridType, u = l === void 0 ? "polygon" : l, d = e.radialLines, f = d === void 0 || d, p = vo(e, go);
	return c <= 0 ? null : /*#__PURE__*/ P.createElement("g", { className: "recharts-polar-grid" }, /*#__PURE__*/ P.createElement(Do, bo({
		cx: n,
		cy: i,
		innerRadius: o,
		outerRadius: c,
		gridType: u,
		radialLines: f
	}, p)), /*#__PURE__*/ P.createElement(Ao, bo({
		cx: n,
		cy: i,
		innerRadius: o,
		outerRadius: c,
		gridType: u,
		radialLines: f
	}, p)));
};
jo.displayName = "PolarGrid";
//#endregion
//#region ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/maxBy.js
var Mo = /* @__PURE__ */ t(((e, t) => {
	var n = Pe(), r = Xe(), i = We();
	function a(e, t) {
		return e && e.length ? n(e, i(t, 2), r) : void 0;
	}
	t.exports = a;
})), No = /* @__PURE__ */ t(((e, t) => {
	var n = Pe(), r = We(), i = De();
	function a(e, t) {
		return e && e.length ? n(e, r(t, 2), i) : void 0;
	}
	t.exports = a;
})), Po = /* @__PURE__ */ e(Mo()), Fo = /* @__PURE__ */ e(No()), Io = [
	"cx",
	"cy",
	"angle",
	"ticks",
	"axisLine"
], Lo = [
	"ticks",
	"tick",
	"angle",
	"tickFormatter",
	"stroke"
];
function Ro(e) {
	"@babel/helpers - typeof";
	return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ro(e);
}
function zo() {
	return zo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, zo.apply(this, arguments);
}
function Bo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Vo(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Bo(Object(n), !0).forEach(function(t) {
			es(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ho(e, t) {
	if (e == null) return {};
	var n = Uo(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Uo(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Wo(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Go(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ts(r.key), r);
	}
}
function Ko(e, t, n) {
	return t && Go(e.prototype, t), n && Go(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function qo(e, t, n) {
	return t = Zo(t), Jo(e, Xo() ? Reflect.construct(t, n || [], Zo(e).constructor) : t.apply(e, n));
}
function Jo(e, t) {
	if (t && (Ro(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Yo(e);
}
function Yo(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Xo() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Xo = function() {
		return !!e;
	})();
}
function Zo(e) {
	return Zo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Zo(e);
}
function Qo(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $o(e, t);
}
function $o(e, t) {
	return $o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, $o(e, t);
}
function es(e, t, n) {
	return t = ts(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ts(e) {
	var t = ns(e, "string");
	return Ro(t) == "symbol" ? t : t + "";
}
function ns(e, t) {
	if (Ro(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ro(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var rs = /*#__PURE__*/ function(e) {
	function t() {
		return Wo(this, t), qo(this, t, arguments);
	}
	return Qo(t, e), Ko(t, [
		{
			key: "getTickValueCoord",
			value: function(e) {
				var t = e.coordinate, n = this.props, r = n.angle, i = n.cx, a = n.cy;
				return Ue(i, a, t, r);
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
				var e = this.props, t = e.cx, n = e.cy, r = e.angle, i = e.ticks, a = (0, Po.default)(i, function(e) {
					return e.coordinate || 0;
				});
				return {
					cx: t,
					cy: n,
					startAngle: r,
					endAngle: r,
					innerRadius: (0, Fo.default)(i, function(e) {
						return e.coordinate || 0;
					}).coordinate || 0,
					outerRadius: a.coordinate || 0
				};
			}
		},
		{
			key: "renderAxisLine",
			value: function() {
				var e = this.props, t = e.cx, n = e.cy, r = e.angle, i = e.ticks, a = e.axisLine, o = Ho(e, Io), s = i.reduce(function(e, t) {
					return [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)];
				}, [Infinity, -Infinity]), c = Ue(t, n, s[0], r), l = Ue(t, n, s[1], r), u = Vo(Vo(Vo({}, j(o, !1)), {}, { fill: "none" }, j(a, !1)), {}, {
					x1: c.x,
					y1: c.y,
					x2: l.x,
					y2: l.y
				});
				return /*#__PURE__*/ P.createElement("line", zo({ className: "recharts-polar-radius-axis-line" }, u));
			}
		},
		{
			key: "renderTicks",
			value: function() {
				var e = this, r = this.props, i = r.ticks, a = r.tick, o = r.angle, s = r.tickFormatter, c = r.stroke, l = Ho(r, Lo), u = this.getTickTextAnchor(), d = j(l, !1), f = j(a, !1), p = i.map(function(r, i) {
					var l = e.getTickValueCoord(r), p = Vo(Vo(Vo(Vo({
						textAnchor: u,
						transform: `rotate(${90 - o}, ${l.x}, ${l.y})`
					}, d), {}, {
						stroke: "none",
						fill: c
					}, f), {}, { index: i }, l), {}, { payload: r });
					return /*#__PURE__*/ P.createElement(M, zo({
						className: n("recharts-polar-radius-axis-tick", Ve(a)),
						key: `tick-${r.coordinate}`
					}, it(e.props, r, i)), t.renderTickItem(a, p, s ? s(r.value, i) : r.value));
				});
				return /*#__PURE__*/ P.createElement(M, { className: "recharts-polar-radius-axis-ticks" }, p);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.ticks, r = e.axisLine, i = e.tick;
				return !t || !t.length ? null : /*#__PURE__*/ P.createElement(M, { className: n("recharts-polar-radius-axis", this.props.className) }, r && this.renderAxisLine(), i && this.renderTicks(), Ee.renderCallByParent(this.props, this.getViewBox()));
			}
		}
	], [{
		key: "renderTickItem",
		value: function(e, t, n) {
			return /*#__PURE__*/ P.isValidElement(e) ? /*#__PURE__*/ P.cloneElement(e, t) : (0, Qa.default)(e) ? e(t) : /*#__PURE__*/ P.createElement(Je, zo({}, t, { className: "recharts-polar-radius-axis-tick-value" }), n);
		}
	}]);
}(kr);
es(rs, "displayName", "PolarRadiusAxis"), es(rs, "axisType", "radiusAxis"), es(rs, "defaultProps", {
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
function is(e) {
	"@babel/helpers - typeof";
	return is = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, is(e);
}
function as() {
	return as = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, as.apply(this, arguments);
}
function os(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ss(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? os(Object(n), !0).forEach(function(t) {
			vs(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : os(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function cs(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function ls(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ys(r.key), r);
	}
}
function us(e, t, n) {
	return t && ls(e.prototype, t), n && ls(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ds(e, t, n) {
	return t = hs(t), fs(e, ms() ? Reflect.construct(t, n || [], hs(e).constructor) : t.apply(e, n));
}
function fs(e, t) {
	if (t && (is(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return ps(e);
}
function ps(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ms() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ms = function() {
		return !!e;
	})();
}
function hs(e) {
	return hs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, hs(e);
}
function gs(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _s(e, t);
}
function _s(e, t) {
	return _s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, _s(e, t);
}
function vs(e, t, n) {
	return t = ys(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ys(e) {
	var t = bs(e, "string");
	return is(t) == "symbol" ? t : t + "";
}
function bs(e, t) {
	if (is(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (is(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var xs = Math.PI / 180, Ss = 1e-5, Cs = /*#__PURE__*/ function(e) {
	function t() {
		return cs(this, t), ds(this, t, arguments);
	}
	return gs(t, e), us(t, [
		{
			key: "getTickLineCoord",
			value: function(e) {
				var t = this.props, n = t.cx, r = t.cy, i = t.radius, a = t.orientation, o = t.tickSize || 8, s = Ue(n, r, i, e.coordinate), c = Ue(n, r, i + (a === "inner" ? -1 : 1) * o, e.coordinate);
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
				var t = this.props.orientation, n = Math.cos(-e.coordinate * xs);
				return n > Ss ? t === "outer" ? "start" : "end" : n < -Ss ? t === "outer" ? "end" : "start" : "middle";
			}
		},
		{
			key: "renderAxisLine",
			value: function() {
				var e = this.props, t = e.cx, n = e.cy, r = e.radius, i = e.axisLine, a = e.axisLineType, o = ss(ss({}, j(this.props, !1)), {}, { fill: "none" }, j(i, !1));
				if (a === "circle") return /*#__PURE__*/ P.createElement(jt, as({ className: "recharts-polar-angle-axis-line" }, o, {
					cx: t,
					cy: n,
					r
				}));
				var s = this.props.ticks.map(function(e) {
					return Ue(t, n, r, e.coordinate);
				});
				return /*#__PURE__*/ P.createElement(ho, as({ className: "recharts-polar-angle-axis-line" }, o, { points: s }));
			}
		},
		{
			key: "renderTicks",
			value: function() {
				var e = this, r = this.props, i = r.ticks, a = r.tick, o = r.tickLine, s = r.tickFormatter, c = r.stroke, l = j(this.props, !1), u = j(a, !1), d = ss(ss({}, l), {}, { fill: "none" }, j(o, !1)), f = i.map(function(r, i) {
					var f = e.getTickLineCoord(r), p = ss(ss(ss({ textAnchor: e.getTickTextAnchor(r) }, l), {}, {
						stroke: "none",
						fill: c
					}, u), {}, {
						index: i,
						payload: r,
						x: f.x2,
						y: f.y2
					});
					return /*#__PURE__*/ P.createElement(M, as({
						className: n("recharts-polar-angle-axis-tick", Ve(a)),
						key: `tick-${r.coordinate}`
					}, it(e.props, r, i)), o && /*#__PURE__*/ P.createElement("line", as({ className: "recharts-polar-angle-axis-tick-line" }, d, f)), a && t.renderTickItem(a, p, s ? s(r.value, i) : r.value));
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
			return /*#__PURE__*/ P.isValidElement(e) ? /*#__PURE__*/ P.cloneElement(e, t) : (0, Qa.default)(e) ? e(t) : /*#__PURE__*/ P.createElement(Je, as({}, t, { className: "recharts-polar-angle-axis-tick-value" }), n);
		}
	}]);
}(kr);
vs(Cs, "displayName", "PolarAngleAxis"), vs(Cs, "axisType", "angleAxis"), vs(Cs, "defaultProps", {
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
var ws = /* @__PURE__ */ e(wt()), Ts;
function Es(e) {
	"@babel/helpers - typeof";
	return Es = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Es(e);
}
function Ds() {
	return Ds = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ds.apply(this, arguments);
}
function Os(e, t) {
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
		t % 2 ? Os(Object(n), !0).forEach(function(t) {
			zs(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Os(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ks(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function As(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Bs(r.key), r);
	}
}
function js(e, t, n) {
	return t && As(e.prototype, t), n && As(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ms(e, t, n) {
	return t = Is(t), Ns(e, Fs() ? Reflect.construct(t, n || [], Is(e).constructor) : t.apply(e, n));
}
function Ns(e, t) {
	if (t && (Es(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Ps(e);
}
function Ps(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Fs() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Fs = function() {
		return !!e;
	})();
}
function Is(e) {
	return Is = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Is(e);
}
function Ls(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rs(e, t);
}
function Rs(e, t) {
	return Rs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Rs(e, t);
}
function zs(e, t, n) {
	return t = Bs(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Bs(e) {
	var t = Vs(e, "string");
	return Es(t) == "symbol" ? t : t + "";
}
function Vs(e, t) {
	if (Es(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Es(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Hs = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return ks(this, t), n = Ms(this, t, [e]), zs(n, "pieRef", null), zs(n, "sectorRefs", []), zs(n, "id", ct("recharts-pie-")), zs(n, "handleAnimationEnd", function() {
			var e = n.props.onAnimationEnd;
			n.setState({ isAnimationFinished: !0 }), (0, Qa.default)(e) && e();
		}), zs(n, "handleAnimationStart", function() {
			var e = n.props.onAnimationStart;
			n.setState({ isAnimationFinished: !1 }), (0, Qa.default)(e) && e();
		}), n.state = {
			isAnimationFinished: !e.isAnimationActive,
			prevIsAnimationActive: e.isAnimationActive,
			prevAnimationId: e.animationId,
			sectorToFocus: 0
		}, n;
	}
	return Ls(t, e), js(t, [
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
					var d = (e.startAngle + e.endAngle) / 2, f = Ue(e.cx, e.cy, e.outerRadius + u, d), p = U(U(U(U({}, s), e), {}, { stroke: "none" }, c), {}, {
						index: n,
						textAnchor: t.getTextAnchor(f.x, e.cx)
					}, f), m = U(U(U(U({}, s), e), {}, {
						fill: "none",
						stroke: e.fill
					}, l), {}, {
						index: n,
						points: [Ue(e.cx, e.cy, e.outerRadius, d), f]
					}), h = a;
					return (0, H.default)(a) && (0, H.default)(o) ? h = "value" : (0, H.default)(a) && (h = o), /*#__PURE__*/ P.createElement(M, { key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${n}` }, i && t.renderLabelLineItem(i, m, "line"), t.renderLabelItem(r, p, Ge(e, h)));
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
					return /*#__PURE__*/ P.createElement(M, Ds({
						ref: function(e) {
							e && !t.sectorRefs.includes(e) && t.sectorRefs.push(e);
						},
						tabIndex: -1,
						className: "recharts-pie-sector"
					}, it(t.props, n, o), { key: `sector-${n?.startAngle}-${n?.endAngle}-${n.midAngle}-${o}` }), /*#__PURE__*/ P.createElement(ke, Ds({
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
				return /*#__PURE__*/ P.createElement(je, {
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
						var n = l && l[t], o = t > 0 ? (0, ws.default)(e, "paddingAngle", 0) : 0;
						if (n) {
							var s = ot(n.endAngle - n.startAngle, e.endAngle - e.startAngle), c = U(U({}, e), {}, {
								startAngle: a + o,
								endAngle: a + s(r) + o
							});
							i.push(c), a = c.endAngle;
						} else {
							var u = e.endAngle, d = e.startAngle, f = ot(0, u - d)(r), p = U(U({}, e), {}, {
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
				return n && t && t.length && (!r || !(0, $a.default)(r, t)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(t);
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
				if (r || !i || !i.length || !yt(s) || !yt(c) || !yt(l) || !yt(u)) return null;
				var p = n("recharts-pie", a);
				return /*#__PURE__*/ P.createElement(M, {
					tabIndex: this.props.rootTabIndex,
					className: p,
					ref: function(t) {
						e.pieRef = t;
					}
				}, this.renderSectors(), o && this.renderLabels(i), Ee.renderCallByParent(this.props, null, !1), (!d || f) && He.renderCallByParent(this.props, i, !1));
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
				if ((0, Qa.default)(e)) return e(t);
				var i = n("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
				return /*#__PURE__*/ P.createElement(Ae, Ds({}, t, {
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
				if ((0, Qa.default)(e) && (i = e(t), /*#__PURE__*/ P.isValidElement(i))) return i;
				var a = n("recharts-pie-label-text", typeof e != "boolean" && !(0, Qa.default)(e) ? e.className : "");
				return /*#__PURE__*/ P.createElement(Je, Ds({}, t, {
					alignmentBaseline: "middle",
					className: a
				}), i);
			}
		}
	]);
}(kr);
Ts = Hs, zs(Hs, "displayName", "Pie"), zs(Hs, "defaultProps", {
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
	isAnimationActive: !Le.isSsr,
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	nameKey: "name",
	blendStroke: !1,
	rootTabIndex: 0
}), zs(Hs, "parseDeltaAngle", function(e, t) {
	return kt(t - e) * Math.min(Math.abs(t - e), 360);
}), zs(Hs, "getRealPieData", function(e) {
	var t = e.data, n = e.children, r = j(e, !1), i = Et(n, Qe);
	return t && t.length ? t.map(function(e, t) {
		return U(U(U({ payload: e }, r), e), i && i[t] && i[t].props);
	}) : i && i.length ? i.map(function(e) {
		return U(U({}, r), e.props);
	}) : [];
}), zs(Hs, "parseCoordinateOfPie", function(e, t) {
	var n = t.top, r = t.left, i = t.width, a = t.height, o = Be(i, a);
	return {
		cx: r + Dt(e.cx, i, i / 2),
		cy: n + Dt(e.cy, a, a / 2),
		innerRadius: Dt(e.innerRadius, o, 0),
		outerRadius: Dt(e.outerRadius, o, o * .8),
		maxRadius: e.maxRadius || Math.sqrt(i * i + a * a) / 2
	};
}), zs(Hs, "getComposedData", function(e) {
	var t = e.item, n = e.offset, r = t.type.defaultProps === void 0 ? t.props : U(U({}, t.type.defaultProps), t.props), i = Ts.getRealPieData(r);
	if (!i || !i.length) return null;
	var a = r.cornerRadius, o = r.startAngle, s = r.endAngle, c = r.paddingAngle, l = r.dataKey, u = r.nameKey, d = r.valueKey, f = r.tooltipType, p = Math.abs(r.minAngle), m = Ts.parseCoordinateOfPie(r, n), h = Ts.parseDeltaAngle(o, s), g = Math.abs(h), _ = l;
	(0, H.default)(l) && (0, H.default)(d) ? (lt(!1, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0"), _ = "value") : (0, H.default)(l) && (lt(!1, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0"), _ = d);
	var v = i.filter(function(e) {
		return Ge(e, _, 0) !== 0;
	}).length, y = (g >= 360 ? v : v - 1) * c, b = g - v * p - y, x = i.reduce(function(e, t) {
		var n = Ge(t, _, 0);
		return e + (yt(n) ? n : 0);
	}, 0), S;
	if (x > 0) {
		var C;
		S = i.map(function(e, t) {
			var n = Ge(e, _, 0), r = Ge(e, u, t), i = (yt(n) ? n : 0) / x, s = t ? C.endAngle + kt(h) * c * (n === 0 ? 0 : 1) : o, l = s + kt(h) * ((n === 0 ? 0 : p) + i * b), d = (s + l) / 2, g = (m.innerRadius + m.outerRadius) / 2;
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
				tooltipPosition: Ue(m.cx, m.cy, g, d)
			}, e), m), {}, {
				value: Ge(e, _),
				startAngle: s,
				endAngle: l,
				payload: e,
				paddingAngle: kt(h) * c
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
var Us = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return e && e.length ? e[0] : void 0;
	}
	t.exports = n;
})), Ws = /* @__PURE__ */ t(((e, t) => {
	t.exports = Us();
})), Gs = /* @__PURE__ */ e(_t()), Ks = /* @__PURE__ */ e(Ws()), qs = ["key"];
function Js(e) {
	"@babel/helpers - typeof";
	return Js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Js(e);
}
function Ys(e, t) {
	if (e == null) return {};
	var n = Xs(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Xs(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Zs() {
	return Zs = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Zs.apply(this, arguments);
}
function Qs(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $s(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Qs(Object(n), !0).forEach(function(t) {
			uc(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qs(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ec(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function tc(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, dc(r.key), r);
	}
}
function nc(e, t, n) {
	return t && tc(e.prototype, t), n && tc(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function rc(e, t, n) {
	return t = sc(t), ic(e, oc() ? Reflect.construct(t, n || [], sc(e).constructor) : t.apply(e, n));
}
function ic(e, t) {
	if (t && (Js(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return ac(e);
}
function ac(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function oc() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (oc = function() {
		return !!e;
	})();
}
function sc(e) {
	return sc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, sc(e);
}
function cc(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && lc(e, t);
}
function lc(e, t) {
	return lc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, lc(e, t);
}
function uc(e, t, n) {
	return t = dc(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function dc(e) {
	var t = fc(e, "string");
	return Js(t) == "symbol" ? t : t + "";
}
function fc(e, t) {
	if (Js(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Js(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var pc = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		ec(this, t);
		var n = [...arguments];
		return e = rc(this, t, [].concat(n)), uc(e, "state", { isAnimationFinished: !1 }), uc(e, "handleAnimationEnd", function() {
			var t = e.props.onAnimationEnd;
			e.setState({ isAnimationFinished: !0 }), (0, Qa.default)(t) && t();
		}), uc(e, "handleAnimationStart", function() {
			var t = e.props.onAnimationStart;
			e.setState({ isAnimationFinished: !1 }), (0, Qa.default)(t) && t();
		}), uc(e, "handleMouseEnter", function(t) {
			var n = e.props.onMouseEnter;
			n && n(e.props, t);
		}), uc(e, "handleMouseLeave", function(t) {
			var n = e.props.onMouseLeave;
			n && n(e.props, t);
		}), e;
	}
	return cc(t, e), nc(t, [
		{
			key: "renderDots",
			value: function(e) {
				var n = this.props, r = n.dot, i = n.dataKey, a = j(this.props, !1), o = j(r, !0), s = e.map(function(e, n) {
					var s = $s($s($s({
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
				var t = this.props, n = t.shape, r = t.dot, i = t.isRange, a = t.baseLinePoints, o = t.connectNulls, s = /*#__PURE__*/ P.isValidElement(n) ? /*#__PURE__*/ P.cloneElement(n, $s($s({}, this.props), {}, { points: e })) : (0, Qa.default)(n) ? n($s($s({}, this.props), {}, { points: e })) : /*#__PURE__*/ P.createElement(ho, Zs({}, j(this.props, !0), {
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
				return /*#__PURE__*/ P.createElement(je, {
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
							var a = ot(n.x, e.x), o = ot(n.y, e.y);
							return $s($s({}, e), {}, {
								x: a(r),
								y: o(r)
							});
						}
						var s = ot(e.cx, e.x), l = ot(e.cy, e.y);
						return $s($s({}, e), {}, {
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
				return n && t && t.length && !r && (!i || !(0, $a.default)(i, t)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(t);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.hide, r = e.className, i = e.points, a = e.isAnimationActive;
				if (t || !i || !i.length) return null;
				var o = this.state.isAnimationFinished, s = n("recharts-radar", r);
				return /*#__PURE__*/ P.createElement(M, { className: s }, this.renderPolygon(), (!a || o) && He.renderCallByParent(this.props, i));
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
			else if ((0, Qa.default)(e)) r = e(t);
			else {
				var i = t.key, a = Ys(t, qs);
				r = /*#__PURE__*/ P.createElement(jt, Zs({}, a, {
					key: i,
					className: n("recharts-radar-dot", typeof e == "boolean" ? "" : e.className)
				}));
			}
			return r;
		}
	}]);
}(kr);
uc(pc, "displayName", "Radar"), uc(pc, "defaultProps", {
	angleAxisId: 0,
	radiusAxisId: 0,
	hide: !1,
	activeDot: !0,
	dot: !1,
	legendType: "rect",
	isAnimationActive: !Le.isSsr,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
}), uc(pc, "getComposedData", function(e) {
	var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, i = e.dataKey, a = e.bandSize, o = n.cx, s = n.cy, c = !1, l = [], u = n.type === "number" ? 0 : a ?? 0;
	r.forEach(function(e, r) {
		var a = Ge(e, n.dataKey, r), d = Ge(e, i), f = n.scale(a) + u, p = Array.isArray(d) ? (0, Gs.default)(d) : d, m = (0, H.default)(p) ? void 0 : t.scale(p);
		Array.isArray(d) && d.length >= 2 && (c = !0), l.push($s($s({}, Ue(o, s, m, f)), {}, {
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
			var n = (0, Ks.default)(e.value), r = (0, H.default)(n) ? void 0 : t.scale(n);
			d.push($s($s({}, e), {}, { radius: r }, Ue(o, s, r, e.angle)));
		} else d.push(e);
	}), {
		points: l,
		isRange: c,
		baseLinePoints: d
	};
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/CartesianGrid.js
var mc = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], hc = ["offset"];
function gc(e) {
	"@babel/helpers - typeof";
	return gc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, gc(e);
}
function _c(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function vc(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? _c(Object(n), !0).forEach(function(t) {
			yc(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _c(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function yc(e, t, n) {
	return t = bc(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function bc(e) {
	var t = xc(e, "string");
	return gc(t) == "symbol" ? t : t + "";
}
function xc(e, t) {
	if (gc(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (gc(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Sc() {
	return Sc = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Sc.apply(this, arguments);
}
function Cc(e, t) {
	if (e == null) return {};
	var n = wc(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function wc(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
var Tc = function(e) {
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
function Ec(e, t) {
	var n;
	if (/*#__PURE__*/ P.isValidElement(e)) n = /*#__PURE__*/ P.cloneElement(e, t);
	else if ((0, Qa.default)(e)) n = e(t);
	else {
		var r = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, c = Cc(t, mc), l = j(c, !1);
		l.offset;
		var u = Cc(l, hc);
		n = /*#__PURE__*/ P.createElement("line", Sc({}, u, {
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
function Dc(e) {
	var t = e.x, n = e.width, r = e.horizontal, i = r === void 0 || r, a = e.horizontalPoints;
	if (!i || !a || !a.length) return null;
	var o = a.map(function(r, a) {
		return Ec(i, vc(vc({}, e), {}, {
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
function Oc(e) {
	var t = e.y, n = e.height, r = e.vertical, i = r === void 0 || r, a = e.verticalPoints;
	if (!i || !a || !a.length) return null;
	var o = a.map(function(r, a) {
		return Ec(i, vc(vc({}, e), {}, {
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
function kc(e) {
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
function Ac(e) {
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
var jc = function(e, t) {
	var n = e.xAxis, r = e.width, i = e.height, a = e.offset;
	return Ie(pt(vc(vc(vc({}, bt.defaultProps), n), {}, {
		ticks: Re(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	})), a.left, a.left + a.width, t);
}, Mc = function(e, t) {
	var n = e.yAxis, r = e.width, i = e.height, a = e.offset;
	return Ie(pt(vc(vc(vc({}, bt.defaultProps), n), {}, {
		ticks: Re(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	})), a.top, a.top + a.height, t);
}, Nc = {
	horizontal: !0,
	vertical: !0,
	horizontalPoints: [],
	verticalPoints: [],
	stroke: "#ccc",
	fill: "none",
	verticalFill: [],
	horizontalFill: []
};
function Pc(e) {
	var t = At(), n = nt(), r = Nt(), i = vc(vc({}, e), {}, {
		stroke: e.stroke ?? Nc.stroke,
		fill: e.fill ?? Nc.fill,
		horizontal: e.horizontal ?? Nc.horizontal,
		horizontalFill: e.horizontalFill ?? Nc.horizontalFill,
		vertical: e.vertical ?? Nc.vertical,
		verticalFill: e.verticalFill ?? Nc.verticalFill,
		x: yt(e.x) ? e.x : r.left,
		y: yt(e.y) ? e.y : r.top,
		width: yt(e.width) ? e.width : r.width,
		height: yt(e.height) ? e.height : r.height
	}), a = i.x, o = i.y, s = i.width, c = i.height, l = i.syncWithTicks, u = i.horizontalValues, d = i.verticalValues, f = ft(), p = at();
	if (!yt(s) || s <= 0 || !yt(c) || c <= 0 || !yt(a) || a !== +a || !yt(o) || o !== +o) return null;
	var m = i.verticalCoordinatesGenerator || jc, h = i.horizontalCoordinatesGenerator || Mc, g = i.horizontalPoints, _ = i.verticalPoints;
	if ((!g || !g.length) && (0, Qa.default)(h)) {
		var v = u && u.length, y = h({
			yAxis: p ? vc(vc({}, p), {}, { ticks: v ? u : p.ticks }) : void 0,
			width: t,
			height: n,
			offset: r
		}, v ? !0 : l);
		lt(Array.isArray(y), `horizontalCoordinatesGenerator should return Array but instead it returned [${gc(y)}]`), Array.isArray(y) && (g = y);
	}
	if ((!_ || !_.length) && (0, Qa.default)(m)) {
		var b = d && d.length, x = m({
			xAxis: f ? vc(vc({}, f), {}, { ticks: b ? d : f.ticks }) : void 0,
			width: t,
			height: n,
			offset: r
		}, b ? !0 : l);
		lt(Array.isArray(x), `verticalCoordinatesGenerator should return Array but instead it returned [${gc(x)}]`), Array.isArray(x) && (_ = x);
	}
	return /*#__PURE__*/ P.createElement("g", { className: "recharts-cartesian-grid" }, /*#__PURE__*/ P.createElement(Tc, {
		fill: i.fill,
		fillOpacity: i.fillOpacity,
		x: i.x,
		y: i.y,
		width: i.width,
		height: i.height,
		ry: i.ry
	}), /*#__PURE__*/ P.createElement(Dc, Sc({}, i, {
		offset: r,
		horizontalPoints: g,
		xAxis: f,
		yAxis: p
	})), /*#__PURE__*/ P.createElement(Oc, Sc({}, i, {
		offset: r,
		verticalPoints: _,
		xAxis: f,
		yAxis: p
	})), /*#__PURE__*/ P.createElement(kc, Sc({}, i, { horizontalPoints: g })), /*#__PURE__*/ P.createElement(Ac, Sc({}, i, { verticalPoints: _ })));
}
Pc.displayName = "CartesianGrid";
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Line.js
var Fc = [
	"type",
	"layout",
	"connectNulls",
	"ref"
], Ic = ["key"];
function Lc(e) {
	"@babel/helpers - typeof";
	return Lc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Lc(e);
}
function Rc(e, t) {
	if (e == null) return {};
	var n = zc(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function zc(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Bc() {
	return Bc = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Bc.apply(this, arguments);
}
function Vc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Hc(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Vc(Object(n), !0).forEach(function(t) {
			al(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vc(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Uc(e) {
	return qc(e) || Kc(e) || Gc(e) || Wc();
}
function Wc() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Gc(e, t) {
	if (e) {
		if (typeof e == "string") return Jc(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jc(e, t);
	}
}
function Kc(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qc(e) {
	if (Array.isArray(e)) return Jc(e);
}
function Jc(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Yc(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Xc(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ol(r.key), r);
	}
}
function Zc(e, t, n) {
	return t && Xc(e.prototype, t), n && Xc(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Qc(e, t, n) {
	return t = nl(t), $c(e, tl() ? Reflect.construct(t, n || [], nl(e).constructor) : t.apply(e, n));
}
function $c(e, t) {
	if (t && (Lc(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return el(e);
}
function el(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function tl() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (tl = function() {
		return !!e;
	})();
}
function nl(e) {
	return nl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, nl(e);
}
function rl(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && il(e, t);
}
function il(e, t) {
	return il = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, il(e, t);
}
function al(e, t, n) {
	return t = ol(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ol(e) {
	var t = sl(e, "string");
	return Lc(t) == "symbol" ? t : t + "";
}
function sl(e, t) {
	if (Lc(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Lc(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var cl = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		Yc(this, t);
		var n = [...arguments];
		return e = Qc(this, t, [].concat(n)), al(e, "state", {
			isAnimationFinished: !0,
			totalLength: 0
		}), al(e, "generateSimpleStrokeDasharray", function(e, t) {
			return `${t}px ${e - t}px`;
		}), al(e, "getStrokeDasharray", function(n, r, i) {
			var a = i.reduce(function(e, t) {
				return e + t;
			});
			if (!a) return e.generateSimpleStrokeDasharray(r, n);
			for (var o = Math.floor(n / a), s = n % a, c = r - n, l = [], u = 0, d = 0; u < i.length; d += i[u], ++u) if (d + i[u] > s) {
				l = [].concat(Uc(i.slice(0, u)), [s - d]);
				break;
			}
			var f = l.length % 2 == 0 ? [0, c] : [c];
			return [].concat(Uc(t.repeat(i, o)), Uc(l), f).map(function(e) {
				return `${e}px`;
			}).join(", ");
		}), al(e, "id", ct("recharts-line-")), al(e, "pathRef", function(t) {
			e.mainCurve = t;
		}), al(e, "handleAnimationEnd", function() {
			e.setState({ isAnimationFinished: !0 }), e.props.onAnimationEnd && e.props.onAnimationEnd();
		}), al(e, "handleAnimationStart", function() {
			e.setState({ isAnimationFinished: !1 }), e.props.onAnimationStart && e.props.onAnimationStart();
		}), e;
	}
	return rl(t, e), Zc(t, [
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
				var n = this.props, r = n.points, i = n.xAxis, a = n.yAxis, o = n.layout, s = n.children, c = Et(s, Pt);
				if (!c) return null;
				var l = function(e, t) {
					return {
						x: e.x,
						y: e.y,
						value: e.value,
						errorVal: Ge(e.payload, t)
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
					var r = Hc(Hc(Hc({
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
				return /*#__PURE__*/ P.createElement(M, Bc({
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
				var c = Rc(i, Fc), l = Hc(Hc(Hc({}, j(c, !0)), {}, {
					fill: "none",
					className: "recharts-line-curve",
					clipPath: t ? `url(#clipPath-${n})` : null,
					points: e
				}, r), {}, {
					type: a,
					layout: o,
					connectNulls: s
				});
				return /*#__PURE__*/ P.createElement(Ae, Bc({}, l, { pathRef: this.pathRef }));
			}
		},
		{
			key: "renderCurveWithAnimation",
			value: function(e, t) {
				var n = this, r = this.props, i = r.points, a = r.strokeDasharray, o = r.isAnimationActive, s = r.animationBegin, c = r.animationDuration, l = r.animationEasing, u = r.animationId, d = r.animateNewValues, f = r.width, p = r.height, m = this.state, h = m.prevPoints, g = m.totalLength;
				return /*#__PURE__*/ P.createElement(je, {
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
								var r = h[n], i = ot(r.x, e.x), a = ot(r.y, e.y);
								return Hc(Hc({}, e), {}, {
									x: i(o),
									y: a(o)
								});
							}
							if (d) {
								var c = ot(f * 2, e.x), l = ot(p / 2, e.y);
								return Hc(Hc({}, e), {}, {
									x: c(o),
									y: l(o)
								});
							}
							return Hc(Hc({}, e), {}, {
								x: e.x,
								y: e.y
							});
						});
						return n.renderCurveStatically(c, e, t);
					}
					var l = ot(0, g)(o), u;
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
				return i && r && r.length && (!o && s > 0 || !(0, $a.default)(o, r)) ? this.renderCurveWithAnimation(e, t) : this.renderCurveStatically(r, e, t);
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
				}, S = x.r, C = S === void 0 ? 3 : S, w = x.strokeWidth, T = w === void 0 ? 2 : w, E = (ht(r) ? r : {}).clipDot, D = E === void 0 || E, ee = C * 2 + T;
				return /*#__PURE__*/ P.createElement(M, { className: g }, _ || v ? /*#__PURE__*/ P.createElement("defs", null, /*#__PURE__*/ P.createElement("clipPath", { id: `clipPath-${b}` }, /*#__PURE__*/ P.createElement("rect", {
					x: _ ? l : l - u / 2,
					y: v ? c : c - d / 2,
					width: _ ? u : u * 2,
					height: v ? d : d * 2
				})), !D && /*#__PURE__*/ P.createElement("clipPath", { id: `clipPath-dots-${b}` }, /*#__PURE__*/ P.createElement("rect", {
					x: l - ee / 2,
					y: c - ee / 2,
					width: u + ee,
					height: d + ee
				}))) : null, !h && this.renderCurve(y, b), this.renderErrorBar(y, b), (h || r) && this.renderDots(y, D, b), (!f || m) && He.renderCallByParent(this.props, i));
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
				for (var n = e.length % 2 == 0 ? e : [].concat(Uc(e), [0]), r = [], i = 0; i < t; ++i) r = [].concat(Uc(r), Uc(n));
				return r;
			}
		},
		{
			key: "renderDotItem",
			value: function(e, t) {
				var r;
				if (/*#__PURE__*/ P.isValidElement(e)) r = /*#__PURE__*/ P.cloneElement(e, t);
				else if ((0, Qa.default)(e)) r = e(t);
				else {
					var i = t.key, a = Rc(t, Ic), o = n("recharts-line-dot", typeof e == "boolean" ? "" : e.className);
					r = /*#__PURE__*/ P.createElement(jt, Bc({ key: i }, a, { className: o }));
				}
				return r;
			}
		}
	]);
}(kr);
al(cl, "displayName", "Line"), al(cl, "defaultProps", {
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
	isAnimationActive: !Le.isSsr,
	animateNewValues: !0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	hide: !1,
	label: !1
}), al(cl, "getComposedData", function(e) {
	var t = e.props, n = e.xAxis, r = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize, c = e.displayedData, l = e.offset, u = t.layout;
	return Hc({
		points: c.map(function(e, t) {
			var c = Ge(e, o);
			return u === "horizontal" ? {
				x: Me({
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
				y: Me({
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
function ll(e) {
	"@babel/helpers - typeof";
	return ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, ll(e);
}
function ul(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function dl(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, xl(r.key), r);
	}
}
function fl(e, t, n) {
	return t && dl(e.prototype, t), n && dl(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function pl(e, t, n) {
	return t = _l(t), ml(e, gl() ? Reflect.construct(t, n || [], _l(e).constructor) : t.apply(e, n));
}
function ml(e, t) {
	if (t && (ll(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return hl(e);
}
function hl(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function gl() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (gl = function() {
		return !!e;
	})();
}
function _l(e) {
	return _l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, _l(e);
}
function vl(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yl(e, t);
}
function yl(e, t) {
	return yl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, yl(e, t);
}
function bl(e, t, n) {
	return t = xl(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function xl(e) {
	var t = Sl(e, "string");
	return ll(t) == "symbol" ? t : t + "";
}
function Sl(e, t) {
	if (ll(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (ll(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Cl = /*#__PURE__*/ function(e) {
	function t() {
		return ul(this, t), pl(this, t, arguments);
	}
	return vl(t, e), fl(t, [{
		key: "render",
		value: function() {
			return null;
		}
	}]);
}(P.Component);
bl(Cl, "displayName", "ZAxis"), bl(Cl, "defaultProps", {
	zAxisId: 0,
	range: [64, 64],
	scale: "auto",
	type: "number"
});
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/util/ScatterUtils.js
var wl = ["option", "isActive"];
function Tl() {
	return Tl = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Tl.apply(this, arguments);
}
function El(e, t) {
	if (e == null) return {};
	var n = Dl(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Dl(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) >= 0) continue;
		n[r] = e[r];
	}
	return n;
}
function Ol(e) {
	var t = e.option, n = e.isActive, r = El(e, wl);
	return typeof t == "string" ? /*#__PURE__*/ P.createElement(ke, Tl({
		option: /*#__PURE__*/ P.createElement(Te, Tl({ type: t }, r)),
		isActive: n,
		shapeType: "symbols"
	}, r)) : /*#__PURE__*/ P.createElement(ke, Tl({
		option: t,
		isActive: n,
		shapeType: "symbols"
	}, r));
}
//#endregion
//#region ../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Scatter.js
function kl(e) {
	"@babel/helpers - typeof";
	return kl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, kl(e);
}
function Al() {
	return Al = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Al.apply(this, arguments);
}
function jl(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ml(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? jl(Object(n), !0).forEach(function(t) {
			Ul(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jl(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Nl(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Pl(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Wl(r.key), r);
	}
}
function Fl(e, t, n) {
	return t && Pl(e.prototype, t), n && Pl(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Il(e, t, n) {
	return t = Bl(t), Ll(e, zl() ? Reflect.construct(t, n || [], Bl(e).constructor) : t.apply(e, n));
}
function Ll(e, t) {
	if (t && (kl(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Rl(e);
}
function Rl(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function zl() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (zl = function() {
		return !!e;
	})();
}
function Bl(e) {
	return Bl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Bl(e);
}
function Vl(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hl(e, t);
}
function Hl(e, t) {
	return Hl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Hl(e, t);
}
function Ul(e, t, n) {
	return t = Wl(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Wl(e) {
	var t = Gl(e, "string");
	return kl(t) == "symbol" ? t : t + "";
}
function Gl(e, t) {
	if (kl(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (kl(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Kl = /*#__PURE__*/ function(e) {
	function t() {
		var e;
		Nl(this, t);
		var n = [...arguments];
		return e = Il(this, t, [].concat(n)), Ul(e, "state", { isAnimationFinished: !1 }), Ul(e, "handleAnimationEnd", function() {
			e.setState({ isAnimationFinished: !0 });
		}), Ul(e, "handleAnimationStart", function() {
			e.setState({ isAnimationFinished: !1 });
		}), Ul(e, "id", ct("recharts-scatter-")), e;
	}
	return Vl(t, e), Fl(t, [
		{
			key: "renderSymbolsStatically",
			value: function(e) {
				var t = this, n = this.props, r = n.shape, i = n.activeShape, a = n.activeIndex, o = j(this.props, !1);
				return e.map(function(e, n) {
					var s = a === n, c = s ? i : r, l = Ml(Ml({}, o), e);
					return /*#__PURE__*/ P.createElement(M, Al({
						className: "recharts-scatter-symbol",
						key: `symbol-${e?.cx}-${e?.cy}-${e?.size}-${n}`
					}, it(t.props, e, n), { role: "img" }), /*#__PURE__*/ P.createElement(Ol, Al({
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
				return /*#__PURE__*/ P.createElement(je, {
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
							var i = ot(n.cx, e.cx), a = ot(n.cy, e.cy), o = ot(n.size, e.size);
							return Ml(Ml({}, e), {}, {
								cx: i(r),
								cy: a(r),
								size: o(r)
							});
						}
						var s = ot(0, e.size);
						return Ml(Ml({}, e), {}, { size: s(r) });
					});
					return /*#__PURE__*/ P.createElement(M, null, e.renderSymbolsStatically(i));
				});
			}
		},
		{
			key: "renderSymbols",
			value: function() {
				var e = this.props, t = e.points, n = e.isAnimationActive, r = this.state.prevPoints;
				return n && t && t.length && (!r || !(0, $a.default)(r, t)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(t);
			}
		},
		{
			key: "renderErrorBar",
			value: function() {
				if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
				var e = this.props, t = e.points, n = e.xAxis, r = e.yAxis, i = e.children, a = Et(i, Pt);
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
								errorVal: Ge(e, t)
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
					var l = St(t), u = l.xmin, d = l.xmax, f = l.a, p = l.b, m = function(e) {
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
				var h = Ml(Ml(Ml({}, a), {}, {
					fill: "none",
					stroke: a && a.fill
				}, o), {}, { points: s });
				return c = /*#__PURE__*/ P.isValidElement(n) ? /*#__PURE__*/ P.cloneElement(n, h) : (0, Qa.default)(n) ? n(h) : /*#__PURE__*/ P.createElement(Ae, Al({}, h, { type: i })), /*#__PURE__*/ P.createElement(M, {
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
				}))) : null, i && this.renderLine(), this.renderErrorBar(), /*#__PURE__*/ P.createElement(M, { key: "recharts-scatter-symbols" }, this.renderSymbols()), (!p || m) && He.renderCallByParent(this.props, r));
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
}(kr);
Ul(Kl, "displayName", "Scatter"), Ul(Kl, "defaultProps", {
	xAxisId: 0,
	yAxisId: 0,
	zAxisId: 0,
	legendType: "circle",
	lineType: "joint",
	lineJointType: "linear",
	data: [],
	shape: "circle",
	hide: !1,
	isAnimationActive: !Le.isSsr,
	animationBegin: 0,
	animationDuration: 400,
	animationEasing: "linear"
}), Ul(Kl, "getComposedData", function(e) {
	var t = e.xAxis, n = e.yAxis, r = e.zAxis, i = e.item, a = e.displayedData, o = e.xAxisTicks, s = e.yAxisTicks, c = e.offset, l = i.props.tooltipType, u = Et(i.props.children, Qe), d = (0, H.default)(t.dataKey) ? i.props.dataKey : t.dataKey, f = (0, H.default)(n.dataKey) ? i.props.dataKey : n.dataKey, p = r && r.dataKey, m = r ? r.range : Cl.defaultProps.range, h = m && m[0], g = t.scale.bandwidth ? t.scale.bandwidth() : 0, _ = n.scale.bandwidth ? n.scale.bandwidth() : 0;
	return Ml({ points: a.map(function(e, a) {
		var c = Ge(e, d), m = Ge(e, f), v = !(0, H.default)(p) && Ge(e, p) || "-", y = [{
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
		var b = Me({
			axis: t,
			ticks: o,
			bandSize: g,
			entry: e,
			index: a,
			dataKey: d
		}), x = Me({
			axis: n,
			ticks: s,
			bandSize: _,
			entry: e,
			index: a,
			dataKey: f
		}), S = v === "-" ? h : r.scale(v), C = Math.sqrt(Math.max(S, 0) / Math.PI);
		return Ml(Ml({}, e), {}, {
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
var ql = Ot({
	chartName: "LineChart",
	GraphicalChild: cl,
	axisComponents: [{
		axisType: "xAxis",
		AxisComp: ut
	}, {
		axisType: "yAxis",
		AxisComp: st
	}],
	formatAxisMap: Mt
}), Jl = Ot({
	chartName: "BarChart",
	GraphicalChild: Ke,
	defaultTooltipEventType: "axis",
	validateTooltipEventTypes: ["axis", "item"],
	axisComponents: [{
		axisType: "xAxis",
		AxisComp: ut
	}, {
		axisType: "yAxis",
		AxisComp: st
	}],
	formatAxisMap: Mt
}), Yl = Ot({
	chartName: "PieChart",
	GraphicalChild: Hs,
	validateTooltipEventTypes: ["item"],
	defaultTooltipEventType: "item",
	legendContent: "children",
	axisComponents: [{
		axisType: "angleAxis",
		AxisComp: Cs
	}, {
		axisType: "radiusAxis",
		AxisComp: rs
	}],
	formatAxisMap: gt,
	defaultProps: {
		layout: "centric",
		startAngle: 0,
		endAngle: 360,
		cx: "50%",
		cy: "50%",
		innerRadius: 0,
		outerRadius: "80%"
	}
}), Xl = Ot({
	chartName: "RadarChart",
	GraphicalChild: pc,
	axisComponents: [{
		axisType: "angleAxis",
		AxisComp: Cs
	}, {
		axisType: "radiusAxis",
		AxisComp: rs
	}],
	formatAxisMap: gt,
	defaultProps: {
		layout: "centric",
		startAngle: 90,
		endAngle: -270,
		cx: "50%",
		cy: "50%",
		innerRadius: 0,
		outerRadius: "80%"
	}
}), Zl = Ot({
	chartName: "ComposedChart",
	GraphicalChild: [
		cl,
		Ct,
		Ke,
		Kl
	],
	axisComponents: [
		{
			axisType: "xAxis",
			AxisComp: ut
		},
		{
			axisType: "yAxis",
			AxisComp: st
		},
		{
			axisType: "zAxis",
			AxisComp: Cl
		}
	],
	formatAxisMap: Mt
}), Ql = r({ variants: { aspect: {
	square: "aspect-square",
	wide: "aspect-video",
	small: "h-40"
} } }), $l = {
	light: "",
	dark: ".dark"
}, eu = N.createContext(null);
function tu() {
	let e = N.useContext(eu);
	if (!e) throw Error("useChart must be used within a <ChartContainer />");
	return e;
}
var nu = N.forwardRef(({ id: e, className: t, children: n, aspect: r, config: i, ...a }, o) => {
	let s = N.useId(), c = `chart-${e || s.replace(/:/g, "")}`, l = N.useRef(null), [u, d] = R(), f = Ir(() => new ResizeObserver((e) => d(e[0].contentRect.height)), []);
	return Fr(() => {
		let e = o && "current" in o ? o.current : l.current;
		return e && f.observe(e.parentElement), () => {
			f.disconnect();
		};
	}, [
		f,
		o,
		l
	]), /* @__PURE__ */ z(eu.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ B("div", {
			"data-chromatic": "ignore",
			"data-chart": c,
			ref: o || l,
			className: m("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", r ? Ql({ aspect: r }) : "aspect-auto h-full", t),
			...a,
			children: [/* @__PURE__ */ z(ru, {
				id: c,
				config: i
			}), /* @__PURE__ */ z(Ne, {
				height: u,
				className: "overflow-visible",
				children: n
			})]
		})
	});
});
nu.displayName = "Chart";
var ru = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([e, t]) => t.theme || t.color);
	if (!n.length) return null;
	let r = Object.entries($l).map(([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
		let r = n.theme?.[t] || n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`);
	return /* @__PURE__ */ z("style", { dangerouslySetInnerHTML: { __html: wr.sanitize(r.join("\n")) } });
}, iu = Tt, au = N.forwardRef(({ active: e, payload: t, className: n, indicator: r = "dot", hideLabel: i = !1, hideIndicator: a = !1, label: o, labelFormatter: s, labelClassName: c, formatter: l, yAxisFormatter: u, color: d, nameKey: f, labelKey: p }, h) => {
	let { config: g } = tu(), _ = N.useMemo(() => {
		if (i || !t?.length) return null;
		let [e] = t, n = `${p || e.dataKey || e.name || "value"}`, r = lu(g, e, n), a = !p && typeof o == "string" ? g[o]?.label || o : r?.label;
		return s ? /* @__PURE__ */ z("div", {
			className: m("font-medium", c),
			children: s(a, t)
		}) : a ? /* @__PURE__ */ z("div", {
			className: m("font-medium", c),
			children: a
		}) : null;
	}, [
		o,
		s,
		t,
		i,
		c,
		g,
		p
	]);
	if (!e || !t?.length) return null;
	let v = t.length === 1 && r !== "dot";
	return /* @__PURE__ */ B("div", {
		ref: h,
		className: m("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary px-3 py-2.5 text-base shadow-lg backdrop-blur", n),
		children: [v ? null : _, /* @__PURE__ */ z("div", {
			className: "grid gap-2",
			children: t.map((e, t) => {
				let n = `${f || e.name || e.dataKey || "value"}`, i = lu(g, e, n), o = d || e.payload.fill || e.color;
				return /* @__PURE__ */ z("div", {
					className: m("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", r === "dot" && "items-center"),
					children: l && e?.value !== void 0 && e.name ? l(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ B(Rr, { children: [i?.icon ? /* @__PURE__ */ z(i.icon, {}) : !a && /* @__PURE__ */ z("div", {
						className: m("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
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
						className: m("flex flex-1 justify-between text-sm leading-none", v ? "items-end" : "items-center"),
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
au.displayName = "ChartTooltip";
var ou = {
	strong: .4,
	faint: .05
}, su = et, cu = N.forwardRef(({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i, hiddenKey: a, leftShift: o = 0 }, s) => {
	let { config: c } = tu();
	return n?.length ? /* @__PURE__ */ z("div", {
		ref: s,
		className: m("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", r === "top" ? "pb-2" : "pt-2", e),
		style: { marginLeft: o },
		children: n.map((e) => {
			let n = `${i || e.dataKey || "value"}`, r = lu(c, e, n, a);
			return /* @__PURE__ */ B("div", {
				className: m("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"),
				children: [r?.icon && !t ? /* @__PURE__ */ z(r.icon, {}) : r && /* @__PURE__ */ z("div", {
					className: "h-2 w-2 shrink-0 rounded-full",
					style: r.projected ? { background: `linear-gradient(to bottom, color-mix(in srgb, ${e.color} ${ou.strong * 100}%, transparent), color-mix(in srgb, ${e.color} ${ou.faint * 100}%, transparent))` } : { backgroundColor: e.color }
				}), /* @__PURE__ */ z("span", {
					className: "text-f1-foreground",
					children: r?.label
				})]
			}, JSON.stringify(e));
		})
	}) : null;
});
cu.displayName = "ChartLegend";
function lu(e, t, n, r) {
	if (typeof t != "object" || !t) return;
	let i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, a = n;
	if (n in t && typeof t[n] == "string" ? a = t[n] : i && n in i && typeof i[n] == "string" ? a = i[n] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(r && r === a)) return a in e ? e[a] : e[n];
}
//#endregion
//#region src/kits/Charts/utils/elements.tsx
function uu(e, t = "12px Inter, sans-serif") {
	let n = document.createElement("canvas").getContext("2d");
	return n ? (n.font = t, n.measureText(e).width) : 0;
}
var du = (e) => ({
	dataKey: "x",
	domain: e?.domain,
	tickLine: !1,
	axisLine: !1,
	tickMargin: 8,
	ticks: e?.ticks,
	tickCount: e?.tickCount,
	tickFormatter: e?.tickFormatter
}), fu = (e) => ({
	tickLine: !1,
	axisLine: !1,
	domain: e?.domain,
	tickMargin: 8,
	ticks: e?.ticks,
	tickCount: e?.tickCount,
	tickFormatter: e?.tickFormatter
}), pu = () => ({
	vertical: !1,
	strokeDasharray: "4"
}), mu = (e = !1) => ({
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
function hu(e) {
	return jr(e);
}
//#endregion
//#region src/kits/Charts/utils/muncher.ts
function gu(e) {
	return e.map((e) => ({
		x: e.label,
		...e.values
	}));
}
//#endregion
//#region src/kits/Charts/AreaChart/index.tsx
var _u = ({ index: e, visibleTicksCount: t, payload: n, tickFormatter: r, ...i }) => {
	let a = e === 0, o = e === t - 1;
	return /* @__PURE__ */ z(Je, {
		...i,
		textAnchor: a ? "start" : o ? "end" : "middle",
		children: r?.(n.value, n.index) ?? n.value
	});
}, vu = hu(({ data: e, dataConfig: t, xAxis: n, yAxis: r, canBeBlurred: i, blurArea: a, lineType: o = "monotoneX", aspect: s, marginTop: c = 0 }, l) => {
	let { enabled: u } = za(), d = Object.keys(t), f = Mn(12), p = gu(e), m = Math.max(...p.flatMap((e) => d.map((t) => uu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`)))), h = r?.width ?? m + 20, g = !r?.hide, _ = !n?.hide, v = !i || !u;
	return /* @__PURE__ */ z(nu, {
		config: t,
		ref: l,
		aspect: s,
		children: /* @__PURE__ */ B(vt, {
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
							(a === "l" || a === "lr") && /* @__PURE__ */ B(Rr, { children: [
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
							(a === "r" || a === "lr") && /* @__PURE__ */ B(Rr, { children: [
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
							!a && /* @__PURE__ */ B(Rr, { children: [/* @__PURE__ */ z("stop", {
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
							stopColor: t[e].color ? dn(t[e].color) : un(n),
							stopOpacity: .8
						}), /* @__PURE__ */ z("stop", {
							offset: "95%",
							stopColor: t[e].color ? dn(t[e].color) : un(n),
							stopOpacity: .1
						})]
					}, n))
				] }),
				/* @__PURE__ */ z(Pc, {
					...pu(),
					mask: `url(#${f}-transparent-edges)`
				}),
				_ && /* @__PURE__ */ z(ut, {
					dataKey: "x",
					tickLine: !1,
					axisLine: !1,
					tickMargin: 8,
					tickFormatter: n?.tickFormatter,
					ticks: n?.ticks,
					domain: n?.domain,
					interval: 0,
					tick: _u
				}),
				g && /* @__PURE__ */ z(st, {
					tickLine: !1,
					axisLine: !1,
					tickMargin: 8,
					tickCount: r?.tickCount,
					tickFormatter: i && u ? () => "**" : r?.tickFormatter,
					ticks: r?.ticks,
					domain: r?.domain,
					width: h
				}),
				v && /* @__PURE__ */ z(iu, {
					...mu(),
					content: /* @__PURE__ */ z(au, {
						indicator: "dot",
						yAxisFormatter: r?.tickFormatter
					})
				}),
				d.map((e, n) => /* @__PURE__ */ z(Ct, {
					isAnimationActive: !1,
					dataKey: e,
					type: o,
					mask: `url(#${f}-transparent-edges)`,
					fill: `url(#fill${e}-${f})`,
					fillOpacity: t[e].dashed ? 0 : .4,
					stroke: t[e].color ? dn(t[e].color) : un(n),
					strokeWidth: 1.5,
					strokeDasharray: t[e].dashed ? "4 4" : void 0
				}, e)),
				Object.keys(t).length > 1 && /* @__PURE__ */ z(su, {
					className: "flex justify-start",
					content: /* @__PURE__ */ z(cu, {})
				})
			]
		})
	});
}), yu = hu(({ dataConfig: e, data: t, xAxis: n, yAxis: r = { hide: !0 }, label: i = !1, type: a = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: c, legend: l, showValueUnderLabel: u = !1, highlightLastBar: d = !1, onClick: f }, p) => {
	let m = Object.keys(e), h = gu(t).map((t, n, r) => d && m.length === 1 && !e[m[0]]?.color ? {
		...t,
		fill: n === r.length - 1 ? un(n) : un(n, .5)
	} : t), g = Math.max(...h.flatMap((e) => m.map((t) => uu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`))));
	return /* @__PURE__ */ z(nu, {
		config: e,
		ref: p,
		aspect: c,
		children: /* @__PURE__ */ B(Jl, {
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
				!o && /* @__PURE__ */ z(iu, {
					...mu(),
					content: /* @__PURE__ */ z(au, { yAxisFormatter: r.tickFormatter })
				}),
				!s && /* @__PURE__ */ z(Pc, { ...pu() }),
				/* @__PURE__ */ z(st, {
					...fu(r),
					tick: !0,
					width: r.width ?? g + 20,
					hide: r.hide
				}),
				/* @__PURE__ */ z(ut, {
					...du(n),
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
				m.map((t, n) => /* @__PURE__ */ z(Ke, {
					isAnimationActive: !1,
					dataKey: t,
					stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
					fill: d ? ((e) => e.fill) : e[t].color ? dn(e[t].color) : un(n),
					radius: a === "stacked-by-sign" ? [
						4,
						4,
						0,
						0
					] : 4,
					maxBarSize: 32,
					children: i && /* @__PURE__ */ z(He, {
						position: "top",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12
					}, `label-${t}`)
				}, `bar-${t}`)),
				l && /* @__PURE__ */ z(su, {
					content: /* @__PURE__ */ z(cu, { nameKey: "label" }),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
}), bu = hu(({ data: e, legend: t = !0, hideTooltip: n = !1 }, r) => {
	let i = e.reduce((e, t) => e + t.value, 0), [a, o] = R(void 0), s = T(e, i, (e, t) => e.color ? dn(e.color) : un(t)), c = ne(s, i);
	return /* @__PURE__ */ B(_e, {
		delayDuration: 350,
		children: [/* @__PURE__ */ z("div", {
			className: "w-full",
			ref: r,
			children: /* @__PURE__ */ B(ve, { children: [/* @__PURE__ */ z(ge, {
				asChild: !0,
				children: /* @__PURE__ */ z("div", {
					className: m("pointer-events-auto flex h-2 w-full cursor-default gap-1 overflow-hidden", p()),
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
						"aria-label": `${e.name}: ${e.value} (${D(e.value, i)}%)`,
						onMouseEnter: () => o(e.key)
					}, e.key))
				})
			}), !n && c.length > 0 && /* @__PURE__ */ z(te, {
				items: c,
				activeKey: a
			})] })
		}), t && /* @__PURE__ */ z("div", {
			className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
			role: "list",
			children: e.map((e, t) => {
				let n = e.color ? dn(e.color) : un(t);
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
}), xu = Object.assign(({ stackKeys: e, ...t }) => {
	let n = Nr().replace(/:/g, ""), r = (e) => `projected-bar-${n}-${e}`, i = (n) => {
		let { payload: i, ...a } = n, o = (e) => {
			let t = i?.[e];
			return typeof t == "number" ? t : 0;
		}, s = o(String(t.dataKey)), c = `url(#${r(s < 0 ? "negative" : "positive")})`;
		if (!e) return /* @__PURE__ */ z(qe, {
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
		return /* @__PURE__ */ z(qe, {
			...a,
			fill: c,
			radius: l
		});
	};
	return /* @__PURE__ */ B(Rr, { children: [/* @__PURE__ */ z("defs", { children: ["positive", "negative"].map((e) => /* @__PURE__ */ B("linearGradient", {
		id: r(e),
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ z("stop", {
			offset: "0%",
			stopColor: t.fill,
			stopOpacity: e === "positive" ? ou.strong : ou.faint
		}), /* @__PURE__ */ z("stop", {
			offset: "100%",
			stopColor: t.fill,
			stopOpacity: e === "positive" ? ou.faint : ou.strong
		})]
	}, e)) }), /* @__PURE__ */ z(Ke, {
		...t,
		shape: i
	})] });
}, {
	displayName: Ke.displayName,
	defaultProps: Ke.defaultProps,
	getComposedData: Ke.getComposedData
}), Su = (e) => {
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
}, Cu = (e, t, n) => {
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
		return /* @__PURE__ */ z(qe, {
			...a,
			radius: c
		});
	};
	return r.displayName = `StackedBar-${e}`, r;
}, wu = hu(({ dataConfig: e, data: t, xAxis: n, yAxis: r = { hide: !0 }, label: i = !1, hideTooltip: a = !1, hideGrid: o = !1, aspect: s, legend: c, showValueUnderLabel: l = !1, bar: u, line: d, scatter: f, onClick: p }, m) => {
	let h = gu(t), g = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], _ = u?.type === "stacked" || u?.type === "stacked-by-sign", v = new Set(g.filter((t) => e[t].projected).map(String)), y = (t, n) => e[t].color ? dn(e[t].color) : un(n), b = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], x = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], S = [
		...g,
		...b,
		...x
	], C = Math.max(...h.flatMap((e) => S.map((t) => uu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`)))), w = [
		u,
		d,
		f
	].filter((e) => e?.axisPosition === "left"), T = [
		u,
		d,
		f
	].filter((e) => e?.axisPosition === "right");
	return /* @__PURE__ */ z(nu, {
		config: e,
		ref: m,
		aspect: s,
		children: /* @__PURE__ */ B(Zl, {
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
				!a && /* @__PURE__ */ z(iu, {
					...mu(),
					content: /* @__PURE__ */ z(au, { yAxisFormatter: r.tickFormatter })
				}),
				!o && /* @__PURE__ */ z(Pc, { ...pu() }),
				w.length > 0 && /* @__PURE__ */ z(st, {
					...fu(r),
					tick: !0,
					width: r.width ?? C + 20 + (T.length > 0 && w[0]?.axisLabel ? 20 : 0),
					hide: r.hide || w.some((e) => e?.hideAxis),
					label: w[0]?.axisLabel ? {
						value: w[0].axisLabel,
						angle: -90,
						position: "insideLeft"
					} : void 0
				}),
				T.length > 0 && /* @__PURE__ */ z(st, {
					...fu(r),
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
				/* @__PURE__ */ z(ut, {
					...du(n),
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
					}, r = i && /* @__PURE__ */ z(He, {
						position: "top",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12
					}, `label-${String(e)}`);
					return v.has(String(e)) ? /* @__PURE__ */ z(xu, {
						...n,
						stackKeys: _ ? g.map(String) : void 0,
						children: r
					}, `bar-${String(e)}`) : /* @__PURE__ */ z(Ke, {
						...n,
						shape: _ ? Cu(String(e), g.map(String), v) : void 0,
						children: r
					}, `bar-${String(e)}`);
				}),
				b.map((t, n) => {
					let r = e[t].color ? dn(e[t].color) : un(g.length + n);
					return /* @__PURE__ */ z(cl, {
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
				x.map((t, n) => /* @__PURE__ */ z(Kl, {
					dataKey: String(t),
					fill: e[t].color ? dn(e[t].color) : un(g.length + b.length + n),
					r: 4,
					isAnimationActive: !1,
					yAxisId: f?.axisPosition === "right" ? "right" : void 0,
					shape: Su(String(t))
				}, `scatter-${String(t)}`)),
				c && /* @__PURE__ */ z(su, {
					content: /* @__PURE__ */ z(cu, { nameKey: "label" }),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
}), Tu = hu(({ data: e, dataConfig: t, xAxis: n, yAxis: r = { hide: !0 }, lineType: i = "natural", aspect: a, hideTooltip: o = !1, hideGrid: s = !1 }, c) => {
	let l = Object.keys(t), u = gu(e), d = Math.max(...u.flatMap((e) => l.map((t) => uu(r?.tickFormatter ? r.tickFormatter(`${e[t]}`) : `${e[t]}`))));
	return /* @__PURE__ */ z(nu, {
		config: t,
		ref: c,
		aspect: a,
		children: /* @__PURE__ */ B(ql, {
			accessibilityLayer: !0,
			data: u,
			margin: {
				left: r && !r.hide ? 0 : 12,
				right: 12
			},
			children: [
				!s && /* @__PURE__ */ z(Pc, { ...pu() }),
				!n?.hide && /* @__PURE__ */ z(ut, { ...du(n) }),
				!r?.hide && /* @__PURE__ */ z(st, {
					...fu(r),
					width: r.width ?? d + 20
				}),
				!o && /* @__PURE__ */ z(iu, {
					...mu(),
					content: /* @__PURE__ */ z(au, { yAxisFormatter: r?.tickFormatter })
				}),
				l.map((e, n) => /* @__PURE__ */ z(cl, {
					dataKey: e,
					isAnimationActive: !1,
					type: i,
					stroke: t[e].color ? dn(t[e].color) : un(n),
					strokeWidth: 1.5,
					strokeDasharray: t[e].dashed ? "4 4" : void 0,
					dot: !1
				}, e))
			]
		})
	});
}), Eu = hu(({ data: e, dataConfig: t, overview: n, aspect: r, tickFormatter: i }, a) => {
	let o = e.map((e, n) => ({
		...e,
		fill: t[e.label]?.color ? dn(t[e.label].color) : un(n)
	})), s = e.map((e) => e.value).reduce((e, t) => e + t);
	return s === 0 && o.push({
		label: "-",
		value: 1,
		fill: "hsl(var(--neutral-2))"
	}), /* @__PURE__ */ z(nu, {
		config: t,
		ref: a,
		aspect: r,
		"data-chromatic": "ignore",
		style: { height: 380 },
		children: /* @__PURE__ */ B(Yl, {
			accessibilityLayer: !0,
			margin: {
				left: 0,
				right: 0
			},
			children: [
				s !== 0 && /* @__PURE__ */ z(iu, {
					isAnimationActive: !1,
					content: /* @__PURE__ */ z(au, { yAxisFormatter: i })
				}),
				/* @__PURE__ */ B(Hs, {
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
						return /* @__PURE__ */ z(Qe, {
							fill: e.fill,
							"aria-label": `${e.label}: ${n} (${(e.value / s * 100).toFixed(0)}%)`
						}, `cell-${t}`);
					}), /* @__PURE__ */ z(Ee, { content: ({ viewBox: e }) => {
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
				/* @__PURE__ */ z(su, {
					content: /* @__PURE__ */ z(cu, {
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
}), Du = hu(({ value: e, max: t = 100, label: n, color: r }, i) => {
	let a = dn(r || "categorical-1"), o = e / t * 100;
	return /* @__PURE__ */ B("div", {
		className: "flex items-center space-x-2",
		"aria-live": "polite",
		children: [/* @__PURE__ */ z("div", {
			className: "flex-grow",
			children: /* @__PURE__ */ z(fn, {
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
}), Ou = ({ series: e, hiddenKeys: t, onToggle: n }) => /* @__PURE__ */ z("div", {
	className: "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
	children: e.map(({ key: e, color: r, label: i }) => {
		let a = t.includes(e);
		return /* @__PURE__ */ B("button", {
			type: "button",
			className: m("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground", p(), a ? "opacity-40" : "opacity-100"),
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
}), ku = hu(({ data: e, dataConfig: t, scaleMin: n, scaleMax: r, aspect: i, defaultHiddenSeries: a, dataTestId: s }, c) => {
	let [l, u] = R(a ?? []), d = Object.entries(t).map(([e, t], n) => ({
		key: e,
		color: t.color ? dn(t.color) : un(n),
		label: t.label
	})), f = (e) => {
		u((t) => t.includes(e) ? t.filter((t) => t !== e) : t.length >= d.length - 1 ? t : [...t, e]);
	}, p = e.map((e) => ({
		subject: e.label,
		...e.values
	}));
	return /* @__PURE__ */ z(o, {
		dataTestId: s,
		children: /* @__PURE__ */ z(nu, {
			config: t,
			ref: c,
			aspect: i,
			"data-chromatic": "ignore",
			children: /* @__PURE__ */ B(Xl, {
				accessibilityLayer: !0,
				data: p,
				children: [
					/* @__PURE__ */ z(iu, {
						cursor: !0,
						content: /* @__PURE__ */ z(au, { indicator: "dot" })
					}),
					/* @__PURE__ */ z(jo, { gridType: "circle" }),
					/* @__PURE__ */ z(Cs, { dataKey: "subject" }),
					/* @__PURE__ */ z(rs, {
						angle: 90,
						type: "number",
						domain: [n ?? "dataMin", r ?? "dataMax"]
					}),
					d.filter(({ key: e }) => !l.includes(e)).map(({ key: e, color: t, label: n }) => /* @__PURE__ */ z(pc, {
						dataKey: e,
						fill: t,
						stroke: t,
						strokeWidth: 1.5,
						fillOpacity: .3,
						label: n,
						isAnimationActive: !1
					}, e)),
					d.length > 1 && /* @__PURE__ */ z(su, {
						iconType: "star",
						content: /* @__PURE__ */ z(Ou, {
							series: d,
							hiddenKeys: l,
							onToggle: f
						})
					})
				]
			})
		})
	});
}), Au = pr();
function ju(e) {
	return e.map((e) => ({
		x: e.label,
		...e.values
	}));
}
//#endregion
//#region src/kits/Charts/VerticalBarChart/index.tsx
var Mu = (e) => {
	let t = (0, Au.cloneDeep)(e), n = "", r = 0;
	return t.forEach((e) => {
		delete e.x, Object.entries(e).forEach(([e, t]) => {
			r < t && (r = t, n = e);
		});
	}), n;
}, Nu = hu(({ dataConfig: e, data: t, xAxis: n = { hide: !0 }, yAxis: r, label: i = !1, aspect: a, hideTooltip: o = !1, hideGrid: s = !1, showRatio: c = !1, valueFormatter: l }, u) => {
	let d = Object.keys(e), f = ju(t), p = Math.max(...f.map((e) => uu(`${e.x}`))), m = d.reduce((e, n) => (e[n] = t.reduce((e, t) => e + t.values[n], 0), e), {}), h = {
		...du(n),
		type: "number",
		dataKey: Mu(f)
	}, g = {
		...fu(r),
		type: "category",
		dataKey: "x"
	};
	return /* @__PURE__ */ z(nu, {
		config: e,
		ref: u,
		aspect: a,
		children: /* @__PURE__ */ B(Jl, {
			layout: "vertical",
			accessibilityLayer: !0,
			data: f,
			margin: {
				left: r && !r.hide ? 8 : 12,
				right: i || c ? 100 : 0
			},
			children: [
				!o && /* @__PURE__ */ z(iu, {
					...mu(!0),
					content: /* @__PURE__ */ z(au, { yAxisFormatter: r?.tickFormatter })
				}),
				!s && /* @__PURE__ */ z(Pc, {
					...pu(),
					vertical: !0,
					horizontal: !1
				}),
				/* @__PURE__ */ z(ut, {
					...h,
					hide: n?.hide
				}),
				/* @__PURE__ */ z(st, {
					...g,
					hide: r?.hide,
					width: r?.width ?? p + 20
				}),
				d.map((t, n) => /* @__PURE__ */ z(Rr, { children: /* @__PURE__ */ z(Ke, {
					isAnimationActive: !1,
					layout: "vertical",
					dataKey: t,
					fill: e[t].color ? dn(e[t].color) : un(n),
					radius: 4,
					maxBarSize: 24,
					children: (i || c) && /* @__PURE__ */ z(He, {
						position: "right",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12,
						formatter: l,
						content: c ? /* @__PURE__ */ z(Pu, {
							valueFormatter: l,
							total: m[t],
							showLabel: i
						}) : void 0
					}, `label-{${t}}`)
				}, `bar-${t}`) }))
			]
		})
	});
}), Pu = ({ viewBox: e, offset: t = 0, value: n, valueFormatter: r, total: i, showLabel: a }) => {
	let { x: o = 0, y: s = 0, width: c = 0, height: l = 0 } = e, u = o + c + t, d = s + l / 2, f = r ? r(n) : n, p = uu(`${f}`), m = i > 0 ? Math.round(Number(n) / i * 100) : 0;
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
}, Fu = a(i({
	name: "AreaChart",
	type: "info"
}, vu)), Iu = a(i({
	name: "BarChart",
	type: "info"
}, yu)), Lu = a(i({
	name: "CategoryBarChart",
	type: "info"
}, bu)), Ru = a(i({
	name: "LineChart",
	type: "info"
}, Tu)), zu = a(i({
	name: "PieChart",
	type: "info"
}, Eu)), Bu = a(i({
	name: "VerticalBarChart",
	type: "info"
}, Nu)), Vu = a(i({
	name: "ProgressBarChart",
	type: "info"
}, Du)), Hu = a(i({
	name: "ComboChart",
	type: "info"
}, wu)), Uu = a(i({
	name: "RadarChart",
	type: "info"
}, ku)), Wu = (e, t = {}, n = 0) => {
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
}, Gu = [
	"sm",
	"md",
	"lg"
], Ku = ["compact", "expanded"], qu = [
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
], Ju = we, Yu = S, Xu = jr(function({ title: e, onClose: t, content: n, primaryAction: r, secondaryAction: i }, a) {
	return /* @__PURE__ */ B("div", {
		ref: a,
		className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
		"data-testid": "ai-banner",
		children: [/* @__PURE__ */ B("div", {
			className: "flex flex-row items-center justify-between px-4 py-2",
			children: [/* @__PURE__ */ z(yn, {
				className: "font-medium",
				children: e
			}), t && /* @__PURE__ */ z(A, {
				variant: "ghost",
				icon: an,
				size: "sm",
				hideLabel: !0,
				onClick: t,
				label: "Close"
			})]
		}), /* @__PURE__ */ B("div", {
			className: "flex flex-col gap-[1px]",
			children: [/* @__PURE__ */ z("div", {
				className: m("bg-f1-background px-4 py-3", i || r ? "rounded-t-[13.25px]" : "rounded-[13.25px]"),
				children: /* @__PURE__ */ z(_n, { content: n })
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
}), Zu = ({ compact: e }) => /* @__PURE__ */ B("div", {
	className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ z("div", {
		className: "flex flex-row items-center justify-between px-4 py-2",
		children: /* @__PURE__ */ z(k, { className: "h-5 w-32 rounded-md" })
	}), /* @__PURE__ */ B("div", {
		className: "flex flex-col gap-[1px]",
		children: [/* @__PURE__ */ z("div", {
			className: m("rounded-t-[13.25px] bg-f1-background px-4 py-3", e && "rounded-[13.25px]"),
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
}), Qu = jr((e, t) => /* @__PURE__ */ z(Xu, {
	ref: t,
	...e
})), $u = ({ compact: e }) => /* @__PURE__ */ z(Zu, { compact: e });
Qu.displayName = "F0AiBanner";
var ed = Cr(a(Qu), $u), td = [
	ar,
	On,
	In,
	Tn,
	Rn,
	ir,
	xr,
	En,
	Fn,
	Ln,
	Hn,
	Dn,
	yr
], nd = (e) => {
	if (!e?.content) return "";
	try {
		return zn(e.content, td);
	} catch {
		return "";
	}
}, rd = (e, t) => Ir(() => {
	if (t?.selectedTitle || t?.selectedEmoji) return {
		title: t.selectedTitle || e.title,
		emoji: t.selectedEmoji
	};
	let n = e.buttons?.find((e) => e.type === t?.selectedAction);
	return n ? {
		title: n.label,
		emoji: n.emoji
	} : { title: e.title };
}, [t, e]), id = (e, t) => {
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
}, ad = (e, t, n) => {
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
}, od = (e, t, n) => {
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
}, sd = (e, t, n, r) => {
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
}, cd = ({ config: e, isLoading: t, onButtonClick: n }) => /* @__PURE__ */ B("div", {
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
}), ld = ({ isEditable: e }) => e ? /* @__PURE__ */ B("div", {
	className: "flex flex-col gap-2",
	children: [
		/* @__PURE__ */ z(k, { className: "h-4 w-1/2 rounded-md" }),
		/* @__PURE__ */ z(k, { className: "h-4 w-full rounded-md" }),
		/* @__PURE__ */ z(k, { className: "h-4 w-3/4 rounded-md" }),
		/* @__PURE__ */ z(k, { className: "h-4 w-1/3 rounded-md" })
	]
}) : /* @__PURE__ */ z(ed.Skeleton, { compact: !0 }), ud = ({ node: e, updateAttributes: t, deleteNode: n, extension: r, editor: i, getPos: a }) => {
	let o = e.attrs.data, s = r.options.currentConfig || e.attrs.config, { title: c } = rd(s, o), { isLoading: l, handleClick: u } = id(s, t), d = !!(o?.selectedAction && !o?.content), f = l || d, p = nd(o);
	if (sd(i, n, a, o), ad(s, t, o), od(o, u, t), !o || !s || !s.buttons?.length) return null;
	let m = !!o?.content, h = !!(o?.selectedTitle || o?.selectedAction) && m && !o?.isEditable;
	return /* @__PURE__ */ z(kn, {
		contentEditable: !1,
		children: /* @__PURE__ */ B("div", {
			className: "mb-3",
			children: [f ? /* @__PURE__ */ z(ld, { isEditable: o?.isEditable }) : h ? /* @__PURE__ */ z(ed, {
				title: c,
				content: p,
				onClose: () => n()
			}) : /* @__PURE__ */ z("div", {
				className: "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ z(cd, {
					config: s,
					isLoading: f,
					onButtonClick: u
				})
			}), /* @__PURE__ */ z(Wn, { style: { display: "none" } })]
		})
	});
}, dd = qn.create({
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
		return Nn(ud);
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
}), fd = Xn(), pd = [
	"paragraph",
	"heading",
	"blockquote",
	"codeBlock",
	"bulletList",
	"orderedList",
	"listItem",
	"table",
	"details"
], md = new Set(pd), hd = (e) => e ? md.has(e) : !1, gd = (e) => e ? hd(e.type) && !e.attrs?.id ? !0 : e.content?.some(gd) ?? !1 : !1, _d = (e) => {
	if (!e) return !1;
	if (hd(e.type.name) && !e.attrs.id) return !0;
	for (let t = 0; t < e.childCount; t += 1) if (_d(e.child(t))) return !0;
	return !1;
}, vd = (e) => e ? e instanceof er ? _d(e) : gd(e) : !1, yd = Gn.create({
	name: "blockId",
	addGlobalAttributes() {
		return [{
			types: pd,
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
						if (hd(e.type.name) && !e.attrs.id) {
							let n = Mn(5);
							r.setNodeMarkup(t, void 0, {
								...e.attrs,
								id: n
							}), i = !0;
						}
					});
				}) : n.doc.descendants((e, t) => {
					if (hd(e.type.name) && !e.attrs.id) {
						let n = Mn(5);
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
}), bd = (e, t) => {
	let n = null;
	return e.state.doc.descendants((e, r) => e.attrs.id !== t || (n = {
		node: e,
		pos: r
	}, !1)), n;
}, xd = ({ key: e, editor: t, onPaste: n, onDrop: r, allowedMimeTypes: i }) => new ur({
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
}), Sd = Gn.create({
	name: "fileHandler",
	addOptions() {
		return {
			onPaste: void 0,
			onDrop: void 0,
			allowedMimeTypes: void 0
		};
	},
	addProseMirrorPlugins() {
		return [xd({
			key: new hr(this.name),
			editor: this.editor,
			allowedMimeTypes: this.options.allowedMimeTypes,
			onDrop: this.options.onDrop,
			onPaste: this.options.onPaste
		})];
	}
}), Cd = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, wd = qn.create({
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
		return ["img", Cn(this.options.HTMLAttributes, e)];
	},
	addCommands() {
		return { setImage: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: e
		}) };
	},
	addInputRules() {
		return [$n({
			find: Cd,
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
}), Td = 52428800, Ed = [
	"image/jpeg",
	"image/png",
	"image/gif",
	"image/webp"
], Dd = 10, Od = 100, kd = ({ node: e, deleteNode: t, selected: n, editor: r, updateAttributes: i }) => {
	let { src: a, alt: o, title: s, uploading: c, width: l } = e.attrs, d = r.isEditable, f = u(), [p, h] = R(!1), g = F((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = e.clientX, n = l ?? Od, a = r.view.dom.clientWidth, o = (e) => {
			let r = (e.clientX - t) / a * 100, o = Math.min(Od, Math.max(Dd, n + r));
			i({ width: Math.round(o) });
		}, s = () => {
			h(!1), document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", s);
		};
		h(!0), document.addEventListener("mousemove", o), document.addEventListener("mouseup", s);
	}, [
		r,
		l,
		i
	]);
	return /* @__PURE__ */ z(kn, {
		className: "mb-2",
		children: /* @__PURE__ */ B("div", {
			style: { width: `${l ?? Od}%` },
			className: m("image-resizable-wrapper group/image relative rounded-lg", n && "border-2 border-f1-border-selected-bold border-solid", p && "select-none"),
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
					children: /* @__PURE__ */ z(sn, { size: "medium" })
				}),
				d && !c && /* @__PURE__ */ z("div", {
					className: "absolute right-2 top-2 opacity-0 transition-opacity group-hover/image:opacity-100",
					children: /* @__PURE__ */ z(A, {
						onClick: t,
						label: f.actions.delete,
						icon: O,
						variant: "default",
						hideLabel: !0
					})
				}),
				d && !c && /* @__PURE__ */ z("div", {
					className: m("absolute right-2 top-1/2 -translate-y-1/2 flex cursor-col-resize items-center justify-center", "h-12 w-2 rounded-sm border border-solid border-f1-border bg-f1-foreground-inverse-secondary", "opacity-0 transition-opacity group-hover/image:opacity-100", p && "opacity-100"),
					onMouseDown: g,
					role: "separator",
					"aria-orientation": "vertical",
					"aria-label": "Resize image",
					tabIndex: 0
				})
			]
		})
	});
}, Ad = wd.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			width: {
				default: Od,
				parseHTML: (e) => {
					let t = e.style.width;
					return t?.endsWith("%") && parseInt(t, 10) || Od;
				},
				renderHTML: (e) => !e.width || e.width === Od ? {} : { style: `width: ${e.width}%` }
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
		return Nn(kd);
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["img", Cn(this.options.HTMLAttributes, e)];
	}
}).configure({
	inline: !1,
	allowBase64: !0
}), jd = (e, t) => {
	let n = null;
	return e.state.doc.descendants((e, r) => e.type.name === "image" && e.attrs["data-upload-id"] === t ? (n = r, !1) : !0), n;
}, Md = async (e, t, n, r) => {
	let i = n.maxFileSize ?? Td, { onError: a } = n;
	if (!Ed.includes(t.type)) {
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
		let { url: r } = await n.onUpload(t), i = jd(e, s);
		i !== null && e.chain().setNodeSelection(i).updateAttributes("image", {
			src: r,
			uploading: !1,
			"data-upload-id": null
		}).run();
	} catch {
		a?.("upload-failed");
		let t = jd(e, s);
		t !== null && e.chain().setNodeSelection(t).deleteSelection().run();
	} finally {
		URL.revokeObjectURL(o);
	}
}, Nd = (e) => Sd.configure({
	allowedMimeTypes: Ed,
	onDrop: (t, n, r) => {
		n.forEach((n) => {
			Md(t, n, e, r);
		});
	},
	onPaste: (t, n) => {
		n.forEach((n) => {
			Md(t, n, e);
		});
	}
}), Pd = (e, t, n) => {
	Md(e, t, n);
}, Fd = [
	"superNegative",
	"negative",
	"neutral",
	"positive",
	"superPositive"
], Id = {
	superNegative: Ze,
	negative: $e,
	neutral: Ye,
	positive: Fe,
	superPositive: Oe
}, Ld = {
	superNegative: "mood-super-negative",
	negative: "mood-negative",
	neutral: "mood-neutral",
	positive: "mood-positive",
	superPositive: "mood-super-positive"
}, Rd = ({ node: e, deleteNode: t, updateAttributes: n }) => {
	let r = u(), [i, a] = R(e.attrs.isOpen ?? !1), o = e.attrs.data;
	if (!o) return null;
	let s = () => {
		let e = !i;
		a(e), n({ isOpen: e });
	}, l = [{
		label: r.actions.delete,
		icon: O,
		critical: !0,
		onClick: () => t()
	}];
	return /* @__PURE__ */ B(kn, {
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
									children: /* @__PURE__ */ z(c, {
										icon: Id[e.mood],
										size: "lg",
										color: Ld[e.mood]
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
						icon: i ? Xt : Lt,
						size: "sm"
					}), /* @__PURE__ */ z(ln, {
						items: l,
						size: "sm"
					})]
				})]
			}), i && /* @__PURE__ */ z("div", {
				className: "text-f1-text-primary flex flex-col gap-2",
				children: o.days.map((e, t) => /* @__PURE__ */ B("div", {
					className: "flex flex-row items-center gap-2",
					children: [/* @__PURE__ */ z("div", {
						className: "flex items-center justify-center rounded-full",
						children: /* @__PURE__ */ z(c, {
							icon: Id[e.mood],
							size: "lg",
							color: Ld[e.mood]
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
}, zd = qn.create({
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
		return Nn(Rd);
	},
	addCommands() {
		return { insertMoodTracker: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: { data: e }
		}) };
	}
}), Bd = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/, Vd = /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/, Hd = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*)$/gm, Ud = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\S*)$/gm;
function Wd(e) {
	let t = e.match(Bd);
	if (t) return {
		provider: "youtube",
		videoId: t[1],
		embedUrl: `https://www.youtube-nocookie.com/embed/${t[1]}`
	};
	let n = e.match(Vd);
	return n ? {
		provider: "vimeo",
		videoId: n[1],
		embedUrl: `https://player.vimeo.com/video/${n[1]}`
	} : null;
}
var Gd = ({ node: e, deleteNode: t, selected: n, editor: r }) => {
	let { src: i, provider: a } = e.attrs, o = r.isEditable, s = u();
	return /* @__PURE__ */ z(kn, {
		className: "mb-2",
		children: /* @__PURE__ */ B("div", {
			className: m("video-embed-wrapper relative overflow-hidden rounded-lg", n && "border-2 border-solid border-f1-border-selected-bold"),
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
					icon: O,
					variant: "outline",
					hideLabel: !0,
					size: "sm"
				})
			})]
		})
	});
}, Kd = qn.create({
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
			Cn(e, { "data-video-embed": "" }),
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
		return Nn(Gd);
	},
	addCommands() {
		return { setVideoEmbed: ({ src: e }) => ({ commands: t }) => {
			let n = Wd(e);
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
			find: Hd,
			type: this.type,
			getAttributes: (e) => {
				let t = Wd(e[0]);
				return t ? {
					src: t.embedUrl,
					provider: t.provider,
					videoId: t.videoId
				} : !1;
			}
		}), gr({
			find: Ud,
			type: this.type,
			getAttributes: (e) => {
				let t = Wd(e[0]);
				return t ? {
					src: t.embedUrl,
					provider: t.provider,
					videoId: t.videoId
				} : !1;
			}
		})];
	}
}), qd = ({ aiBlockConfig: e, translations: t, imageUploadConfig: n }) => [
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
				icon: le
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
				icon: ue
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
				icon: ie
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
				icon: oe
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
				icon: ce
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
					t.type = "file", t.accept = Ed.join(","), t.onchange = () => {
						let r = t.files?.[0];
						r && Pd(e, r, n);
					}, t.click();
				},
				icon: ze
			}] : [],
			{
				title: t.richTextEditor.video,
				command: (e) => {
					let n = window.prompt(t.richTextEditor.videoUrlPrompt);
					n && (Wd(n) ? e.commands.setVideoEmbed({ src: n }) : window.alert(t.richTextEditor.videoUrlInvalid));
				},
				icon: rt
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
				icon: se
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
				icon: Sn
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
				icon: Vt
			}
		]
	}
], Jd = jr(({ items: e, groups: t, command: n }, r) => {
	let [i, a] = R(0), o = L(null), s = L(null), l = Ir(() => t || [{
		title: "",
		commands: e
	}], [t, e]), u = Ir(() => l.flatMap((e) => e.commands), [l]), d = Ir(() => {
		let e = [], t = 0;
		for (let n of l) e.push(t), t += n.commands.length;
		return e;
	}, [l]), f = F((e) => {
		let t = u[e];
		t && n(t);
	}, [u, n]), p = F((e) => {
		let t = o.current;
		if (!t) return;
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
		r.top < n.top ? t.scrollTop += r.top - n.top : r.bottom > n.bottom && (t.scrollTop += r.bottom - n.bottom);
	}, []), h = F(() => {
		a((e) => e <= 0 ? u.length - 1 : e - 1);
	}, [u.length]), g = F(() => {
		a((e) => e >= u.length - 1 ? 0 : e + 1);
	}, [u.length]), _ = F(() => {
		f(i);
	}, [i, f]);
	I(() => {
		s.current && p(s.current);
	}, [i, p]), I(() => {
		a(0);
	}, [e.length]), Pr(r, () => ({ onKeyDown: ({ event: e }) => e.key === "ArrowUp" ? (e.preventDefault(), h(), !0) : e.key === "ArrowDown" ? (e.preventDefault(), g(), !0) : e.key === "Enter" && (e.preventDefault(), _(), !0) }), [
		h,
		g,
		_
	]);
	let v = (e, t) => d[e] + t;
	return /* @__PURE__ */ z("div", {
		ref: o,
		className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
		children: l.map((e, n) => /* @__PURE__ */ B("div", { children: [/* @__PURE__ */ B("div", {
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
					className: m("flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover", o && "bg-f1-background-secondary"),
					onClick: () => {
						a(r), f(r);
					},
					onMouseEnter: () => a(r),
					children: [e.emoji ? /* @__PURE__ */ z("span", {
						className: "text-base",
						children: e.emoji
					}) : e.icon ? /* @__PURE__ */ z(c, {
						icon: e.icon,
						className: "text-f1-foreground-secondary"
					}) : null, /* @__PURE__ */ z("p", {
						className: "flex-grow text-sm font-medium text-f1-foreground",
						children: e.title
					})]
				}, `${n}-${t}`);
			})]
		}), t && n < l.length - 1 && /* @__PURE__ */ z("div", {
			className: "py-1",
			children: /* @__PURE__ */ z("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
		})] }, n))
	});
});
Jd.displayName = "CommandList";
//#endregion
//#region src/components/RichText/internal/Extensions/SlashCommand/index.tsx
var Yd = ({ aiBlockConfig: e, translations: t, imageUploadConfig: n }) => {
	let r = qd({
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
						return /* @__PURE__ */ B(Qt, {
							open: !0,
							modal: !1,
							children: [
								/* @__PURE__ */ z("div", { style: n }),
								/* @__PURE__ */ z(en, {
									asChild: !0,
									children: /* @__PURE__ */ z("div", { style: n })
								}),
								/* @__PURE__ */ z(nn, {
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
							e = new fr(Jd, {
								props: {
									items: r.items,
									groups: o(r.query),
									command: r.command
								},
								editor: r.editor
							});
							let s = i(r.clientRect);
							n = document.createElement("div"), document.body.appendChild(n), t = (0, fd.createRoot)(n), t.render(/* @__PURE__ */ z(a, {
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
}, Xd = ({ node: e, deleteNode: t, updateAttributes: n }) => {
	let r = u(), [i, a] = R(e.attrs.isOpen ?? !1), o = e.attrs.data;
	if (!o) return null;
	let s = () => {
		let e = !i;
		a(e), n({ isOpen: e });
	}, c = [{
		label: r.actions.delete,
		icon: O,
		critical: !0,
		onClick: () => t()
	}], l = (e) => o.users.find((t) => t.id === e), d = (e) => {
		try {
			let t = new Date(e);
			return Ft(t, "HH:mm");
		} catch (t) {
			return console.error(t), e;
		}
	};
	return /* @__PURE__ */ B(kn, {
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
						icon: i ? Xt : Lt,
						size: "sm"
					}), /* @__PURE__ */ z(ln, {
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
						children: [n?.imageUrl && /* @__PURE__ */ z(xn, {
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
}, Zd = qn.create({
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
		return Nn(Xd);
	},
	addCommands() {
		return { insertTranscript: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: { data: e }
		}) };
	}
}), Qd = () => /* @__PURE__ */ new Map(), $d = (e) => {
	let t = Qd();
	return e.forEach((e, n) => {
		t.set(n, e);
	}), t;
}, ef = (e, t, n) => {
	let r = e.get(t);
	return r === void 0 && e.set(t, r = n()), r;
}, tf = (e, t) => {
	let n = [];
	for (let [r, i] of e) n.push(t(i, r));
	return n;
}, nf = (e, t) => {
	for (let [n, r] of e) if (t(r, n)) return !0;
	return !1;
}, rf = () => /* @__PURE__ */ new Set(), af = (e) => e[e.length - 1], of = (e, t) => {
	for (let n = 0; n < t.length; n++) e.push(t[n]);
}, sf = Array.from, cf = (e, t) => {
	for (let n = 0; n < e.length; n++) if (t(e[n], n, e)) return !0;
	return !1;
}, lf = Array.isArray, uf = class {
	constructor() {
		this._observers = Qd();
	}
	on(e, t) {
		return ef(this._observers, e, rf).add(t), t;
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
		return sf((this._observers.get(e) || Qd()).values()).forEach((e) => e(...t));
	}
	destroy() {
		this._observers = Qd();
	}
}, df = Math.floor, ff = Math.abs, pf = (e, t) => e < t ? e : t, mf = (e, t) => e > t ? e : t;
Number.isNaN;
var hf = (e) => e === 0 ? 1 / e < 0 : e < 0, gf = 1 << 29, _f = 2 ** 53 - 1, vf = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && df(e) === e);
Number.isNaN, Number.parseInt;
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/string.js
var yf = String.fromCharCode;
String.fromCodePoint, yf(65535);
var bf = (e) => e.toLowerCase(), xf = /^\s*/g, Sf = (e) => e.replace(xf, ""), Cf = /([A-Z])/g, wf = (e, t) => Sf(e.replace(Cf, (e) => `${t}${bf(e)}`)), Tf = (e) => {
	let t = unescape(encodeURIComponent(e)), n = t.length, r = new Uint8Array(n);
	for (let e = 0; e < n; e++) r[e] = t.codePointAt(e);
	return r;
}, Ef = typeof TextEncoder < "u" ? new TextEncoder() : null, Df = Ef ? (e) => Ef.encode(e) : Tf, Of = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", {
	fatal: !0,
	ignoreBOM: !0
});
/* c8 ignore start */
Of && Of.decode(/* @__PURE__ */ new Uint8Array()).length === 1 && 
/* c8 ignore next */
(Of = null);
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/encoding.js
var kf = class {
	constructor() {
		this.cpos = 0, this.cbuf = /* @__PURE__ */ new Uint8Array(100), this.bufs = [];
	}
}, Af = () => new kf(), jf = (e) => {
	let t = Af();
	return e(t), Nf(t);
}, Mf = (e) => {
	let t = e.cpos;
	for (let n = 0; n < e.bufs.length; n++) t += e.bufs[n].length;
	return t;
}, Nf = (e) => {
	let t = new Uint8Array(Mf(e)), n = 0;
	for (let r = 0; r < e.bufs.length; r++) {
		let i = e.bufs[r];
		t.set(i, n), n += i.length;
	}
	return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, Pf = (e, t) => {
	let n = e.cbuf.length;
	n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(mf(n, t) * 2), e.cpos = 0);
}, W = (e, t) => {
	let n = e.cbuf.length;
	e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Ff = W, G = (e, t) => {
	for (; t > 127;) W(e, 128 | 127 & t), t = df(t / 128);
	W(e, 127 & t);
}, If = (e, t) => {
	let n = hf(t);
	for (n && (t = -t), W(e, (t > 63 ? 128 : 0) | (n ? 64 : 0) | 63 & t), t = df(t / 64); t > 0;) W(e, (t > 127 ? 128 : 0) | 127 & t), t = df(t / 128);
}, Lf = /* @__PURE__ */ new Uint8Array(3e4), Rf = Lf.length / 3, zf = Ef && Ef.encodeInto ? (e, t) => {
	if (t.length < Rf) {
		/* c8 ignore next */
		let n = Ef.encodeInto(t, Lf).written || 0;
		G(e, n);
		for (let t = 0; t < n; t++) W(e, Lf[t]);
	} else Vf(e, Df(t));
} : (e, t) => {
	let n = unescape(encodeURIComponent(t)), r = n.length;
	G(e, r);
	for (let t = 0; t < r; t++) W(e, n.codePointAt(t));
}, Bf = (e, t) => {
	let n = e.cbuf.length, r = e.cpos, i = pf(n - r, t.length), a = t.length - i;
	e.cbuf.set(t.subarray(0, i), r), e.cpos += i, a > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(mf(n * 2, a)), e.cbuf.set(t.subarray(i)), e.cpos = a);
}, Vf = (e, t) => {
	G(e, t.byteLength), Bf(e, t);
}, Hf = (e, t) => {
	Pf(e, t);
	let n = new DataView(e.cbuf.buffer, e.cpos, t);
	return e.cpos += t, n;
}, Uf = (e, t) => Hf(e, 4).setFloat32(0, t, !1), Wf = (e, t) => Hf(e, 8).setFloat64(0, t, !1), Gf = (e, t) => Hf(e, 8).setBigInt64(0, t, !1), Kf = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4)), qf = (e) => (Kf.setFloat32(0, e), Kf.getFloat32(0) === e), Jf = (e, t) => {
	switch (typeof t) {
		case "string":
			W(e, 119), zf(e, t);
			break;
		case "number":
			vf(t) && ff(t) <= 2147483647 ? (W(e, 125), If(e, t)) : qf(t) ? (W(e, 124), Uf(e, t)) : (W(e, 123), Wf(e, t));
			break;
		case "bigint":
			W(e, 122), Gf(e, t);
			break;
		case "object":
			if (t === null) W(e, 126);
			else if (lf(t)) {
				W(e, 117), G(e, t.length);
				for (let n = 0; n < t.length; n++) Jf(e, t[n]);
			} else if (t instanceof Uint8Array) W(e, 116), Vf(e, t);
			else {
				W(e, 118);
				let n = Object.keys(t);
				G(e, n.length);
				for (let r = 0; r < n.length; r++) {
					let i = n[r];
					zf(e, i), Jf(e, t[i]);
				}
			}
			break;
		case "boolean":
			W(e, t ? 120 : 121);
			break;
		default: W(e, 127);
	}
}, Yf = class extends kf {
	constructor(e) {
		super(), this.w = e, this.s = null, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (this.count > 0 && G(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
	}
}, Xf = (e) => {
	e.count > 0 && (If(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && G(e.encoder, e.count - 2));
}, Zf = class {
	constructor() {
		this.encoder = new kf(), this.s = 0, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (Xf(this), this.count = 1, this.s = e);
	}
	toUint8Array() {
		return Xf(this), Nf(this.encoder);
	}
}, Qf = (e) => {
	if (e.count > 0) {
		let t = e.diff * 2 + (e.count === 1 ? 0 : 1);
		If(e.encoder, t), e.count > 1 && G(e.encoder, e.count - 2);
	}
}, $f = class {
	constructor() {
		this.encoder = new kf(), this.s = 0, this.count = 0, this.diff = 0;
	}
	write(e) {
		this.diff === e - this.s ? (this.s = e, this.count++) : (Qf(this), this.count = 1, this.diff = e - this.s, this.s = e);
	}
	toUint8Array() {
		return Qf(this), Nf(this.encoder);
	}
}, ep = class {
	constructor() {
		this.sarr = [], this.s = "", this.lensE = new Zf();
	}
	write(e) {
		this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
	}
	toUint8Array() {
		let e = new kf();
		return this.sarr.push(this.s), this.s = "", zf(e, this.sarr.join("")), Bf(e, this.lensE.toUint8Array()), Nf(e);
	}
}, tp = (e) => Error(e), np = () => {
	throw tp("Method unimplemented");
}, rp = () => {
	throw tp("Unexpected case");
}, ip = tp("Unexpected end of array"), ap = tp("Integer out of Range"), op = class {
	constructor(e) {
		this.arr = e, this.pos = 0;
	}
}, sp = (e) => new op(e), cp = (e) => e.pos !== e.arr.length, lp = (e, t) => {
	let n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
	return e.pos += t, n;
}, up = (e) => lp(e, K(e)), dp = (e) => e.arr[e.pos++], K = (e) => {
	let t = 0, n = 1, r = e.arr.length;
	for (; e.pos < r;) {
		let r = e.arr[e.pos++];
		if (t += (r & 127) * n, n *= 128, r < 128) return t;
		/* c8 ignore start */
		if (t > _f) throw ap;
	}
	throw ip;
}, fp = (e) => {
	let t = e.arr[e.pos++], n = t & 63, r = 64, i = (t & 64) > 0 ? -1 : 1;
	if (!(t & 128)) return i * n;
	let a = e.arr.length;
	for (; e.pos < a;) {
		if (t = e.arr[e.pos++], n += (t & 127) * r, r *= 128, t < 128) return i * n;
		/* c8 ignore start */
		if (n > _f) throw ap;
	}
	throw ip;
}, pp = Of ? (e) => Of.decode(up(e)) : (e) => {
	let t = K(e);
	if (t === 0) return "";
	{
		let n = String.fromCodePoint(dp(e));
		if (--t < 100) for (; t--;) n += String.fromCodePoint(dp(e));
		else for (; t > 0;) {
			let r = t < 1e4 ? t : 1e4, i = e.arr.subarray(e.pos, e.pos + r);
			e.pos += r, n += String.fromCodePoint.apply(null, i), t -= r;
		}
		return decodeURIComponent(escape(n));
	}
}, mp = (e, t) => {
	let n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
	return e.pos += t, n;
}, hp = [
	(e) => void 0,
	(e) => null,
	fp,
	(e) => mp(e, 4).getFloat32(0, !1),
	(e) => mp(e, 8).getFloat64(0, !1),
	(e) => mp(e, 8).getBigInt64(0, !1),
	(e) => !1,
	(e) => !0,
	pp,
	(e) => {
		let t = K(e), n = {};
		for (let r = 0; r < t; r++) {
			let t = pp(e);
			n[t] = gp(e);
		}
		return n;
	},
	(e) => {
		let t = K(e), n = [];
		for (let r = 0; r < t; r++) n.push(gp(e));
		return n;
	},
	up
], gp = (e) => hp[127 - dp(e)](e), _p = class extends op {
	constructor(e, t) {
		super(e), this.reader = t, this.s = null, this.count = 0;
	}
	read() {
		return this.count === 0 && (this.s = this.reader(this), this.count = cp(this) ? K(this) + 1 : -1), this.count--, this.s;
	}
}, vp = class extends op {
	constructor(e) {
		super(e), this.s = 0, this.count = 0;
	}
	read() {
		if (this.count === 0) {
			this.s = fp(this);
			let e = hf(this.s);
			this.count = 1, e && (this.s = -this.s, this.count = K(this) + 2);
		}
		return this.count--, this.s;
	}
}, yp = class extends op {
	constructor(e) {
		super(e), this.s = 0, this.count = 0, this.diff = 0;
	}
	read() {
		if (this.count === 0) {
			let e = fp(this), t = e & 1;
			this.diff = df(e / 2), this.count = 1, t && (this.count = K(this) + 2);
		}
		return this.s += this.diff, this.count--, this.s;
	}
}, bp = class {
	constructor(e) {
		this.decoder = new vp(e), this.str = pp(this.decoder), this.spos = 0;
	}
	read() {
		let e = this.spos + this.decoder.read(), t = this.str.slice(this.spos, e);
		return this.spos = e, t;
	}
};
crypto.subtle;
var xp = crypto.getRandomValues.bind(crypto), Sp = Math.random, Cp = () => xp(/* @__PURE__ */ new Uint32Array(1))[0], wp = (e) => e[df(Sp() * e.length)], Tp = "10000000-1000-4000-8000-100000000000", Ep = () => Tp.replace(/[018]/g, (e) => (e ^ Cp() & 15 >> e / 4).toString(16)), Dp = Date.now, Op = (e) => new Promise(e);
Promise.all.bind(Promise);
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/conditions.js
/* c8 ignore next */
var kp = (e) => e === void 0 ? null : e, Ap = new class {
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
	typeof localStorage < "u" && localStorage && (Ap = localStorage);
} catch {}
/* c8 ignore stop */
/* c8 ignore next */
var jp = Ap, Mp = Object.assign, Np = Object.keys, Pp = (e, t) => {
	for (let n in e) t(e[n], n);
}, Fp = (e) => Np(e).length, Ip = (e) => {
	for (let t in e) return !1;
	return !0;
}, Lp = (e, t) => {
	for (let n in e) if (!t(e[n], n)) return !1;
	return !0;
}, Rp = (e, t) => Object.prototype.hasOwnProperty.call(e, t), zp = (e, t) => e === t || Fp(e) === Fp(t) && Lp(e, (e, n) => (e !== void 0 || Rp(t, n)) && t[n] === e), Bp = Object.freeze, Vp = (e) => {
	for (let t in e) {
		let n = e[t];
		(typeof n == "object" || typeof n == "function") && Vp(e[t]);
	}
	return Bp(e);
}, Hp = (e, t, n = 0) => {
	try {
		for (; n < e.length; n++) e[n](...t);
	} finally {
		n < e.length && Hp(e, t, n + 1);
	}
}, Up = (e, t) => t.includes(e), Wp = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", Gp = typeof window < "u" && typeof document < "u" && !Wp;
typeof navigator < "u" && /Mac/.test(navigator.platform);
var Kp, qp = [], Jp = () => {
	if (Kp === void 0) {
		if (Wp) {
			Kp = Qd();
			let e = process.argv, t = null;
			for (let n = 0; n < e.length; n++) {
				let r = e[n];
				r[0] === "-" ? (t !== null && Kp.set(t, ""), t = r) : t === null ? qp.push(r) : (Kp.set(t, r), t = null);
			}
			t !== null && Kp.set(t, "");
		} else typeof location == "object" ? (Kp = Qd(), (location.search || "?").slice(1).split("&").forEach((e) => {
			if (e.length !== 0) {
				let [t, n] = e.split("=");
				Kp.set(`--${wf(t, "-")}`, n), Kp.set(`-${wf(t, "-")}`, n);
			}
		})) : Kp = Qd();
	}
	return Kp;
}, Yp = (e) => Jp().has(e), Xp = (e) => kp(Wp ? process.env[e.toUpperCase().replaceAll("-", "_")] : jp.getItem(e)), Zp = (e) => Yp("--" + e) || Xp(e) !== null;
Zp("production");
/* c8 ignore start */
var Qp = Wp && Up(process.env.FORCE_COLOR, [
	"true",
	"1",
	"2"
]) || !Yp("--no-colors") && !Zp("no-color") && (!Wp || process.stdout.isTTY) && (!Wp || Yp("--color") || Xp("COLORTERM") !== null || (Xp("TERM") || "").includes("color")), $p = Gp ? (e) => {
	let t = "";
	for (let n = 0; n < e.byteLength; n++) t += yf(e[n]);
	return btoa(t);
} : (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), em = (e) => jf((t) => Jf(t, e)), tm = class {
	constructor(e, t) {
		this.left = e, this.right = t;
	}
}, nm = (e, t) => new tm(e, t), rm = typeof document < "u" ? document : {};
typeof DOMParser < "u" && new DOMParser();
var im = (e) => tf(e, (e, t) => `${t}:${e};`).join("");
rm.ELEMENT_NODE, rm.TEXT_NODE, rm.CDATA_SECTION_NODE, rm.COMMENT_NODE, rm.DOCUMENT_NODE, rm.DOCUMENT_TYPE_NODE, rm.DOCUMENT_FRAGMENT_NODE;
/* c8 ignore stop */
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/eventloop.js
var am = ((e) => class {
	constructor(e) {
		this._ = e;
	}
	destroy() {
		e(this._);
	}
})(clearTimeout), om = (e, t) => new am(setTimeout(t, e)), sm = Symbol, cm = sm(), lm = sm(), um = sm(), dm = sm(), fm = sm(), pm = sm(), mm = sm(), hm = sm(), gm = sm(), _m = (e) => {
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
Dp();
/* c8 ignore stop */
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/logging.js
var vm = {
	[cm]: nm("font-weight", "bold"),
	[lm]: nm("font-weight", "normal"),
	[um]: nm("color", "blue"),
	[fm]: nm("color", "green"),
	[dm]: nm("color", "grey"),
	[pm]: nm("color", "red"),
	[mm]: nm("color", "purple"),
	[hm]: nm("color", "orange"),
	[gm]: nm("color", "black")
}, ym = Qp ? (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = Qd(), i = [], a = 0;
	for (; a < e.length; a++) {
		let i = e[a], o = vm[i];
		if (o !== void 0) r.set(o.left, o.right);
		else {
			if (i === void 0) break;
			if (i.constructor === String || i.constructor === Number) {
				let e = im(r);
				a > 0 || e.length > 0 ? (t.push("%c" + i), n.push(e)) : t.push(i);
			} else break;
		}
	}
	for (a > 0 && (i = n, i.unshift(t.join(""))); a < e.length; a++) {
		let t = e[a];
		t instanceof Symbol || i.push(t);
	}
	return i;
} : _m, bm = (...e) => {
	/* c8 ignore next */
	console.log(...ym(e)), Sm.forEach((t) => t.print(e));
}, xm = (...e) => {
	console.warn(...ym(e)), e.unshift(hm), Sm.forEach((t) => t.print(e));
}, Sm = rf(), Cm = (e) => ({
	[Symbol.iterator]() {
		return this;
	},
	next: e
}), wm = (e, t) => Cm(() => {
	let n;
	do
		n = e.next();
	while (!n.done && !t(n.value));
	return n;
}), Tm = (e, t) => Cm(() => {
	let { done: n, value: r } = e.next();
	return {
		done: n,
		value: n ? void 0 : t(r)
	};
}), Em = class {
	constructor(e, t) {
		this.clock = e, this.len = t;
	}
}, Dm = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map();
	}
}, Om = (e, t, n) => t.clients.forEach((t, r) => {
	let i = e.doc.store.clients.get(r);
	if (i != null) {
		let r = i[i.length - 1], a = r.id.clock + r.length;
		for (let r = 0, o = t[r]; r < t.length && o.clock < a; o = t[++r]) Ah(e, i, o.clock, o.len, n);
	}
}), km = (e, t) => {
	let n = 0, r = e.length - 1;
	for (; n <= r;) {
		let i = df((n + r) / 2), a = e[i], o = a.clock;
		if (o <= t) {
			if (t < o + a.len) return i;
			n = i + 1;
		} else r = i - 1;
	}
	return null;
}, Am = (e, t) => {
	let n = e.clients.get(t.client);
	return n !== void 0 && km(n, t.clock) !== null;
}, jm = (e) => {
	e.clients.forEach((e) => {
		e.sort((e, t) => e.clock - t.clock);
		let t, n;
		for (t = 1, n = 1; t < e.length; t++) {
			let r = e[n - 1], i = e[t];
			r.clock + r.len >= i.clock ? r.len = mf(r.len, i.clock + i.len - r.clock) : (n < t && (e[n] = i), n++);
		}
		e.length = n;
	});
}, Mm = (e) => {
	let t = new Dm();
	for (let n = 0; n < e.length; n++) e[n].clients.forEach((r, i) => {
		if (!t.clients.has(i)) {
			let a = r.slice();
			for (let t = n + 1; t < e.length; t++) of(a, e[t].clients.get(i) || []);
			t.clients.set(i, a);
		}
	});
	return jm(t), t;
}, Nm = (e, t, n, r) => {
	ef(e.clients, t, () => []).push(new Em(n, r));
}, Pm = () => new Dm(), Fm = (e) => {
	let t = Pm();
	return e.clients.forEach((e, n) => {
		let r = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (n.deleted) {
				let i = n.id.clock, a = n.length;
				if (t + 1 < e.length) for (let n = e[t + 1]; t + 1 < e.length && n.deleted; n = e[++t + 1]) a += n.length;
				r.push(new Em(i, a));
			}
		}
		r.length > 0 && t.clients.set(n, r);
	}), t;
}, Im = (e, t) => {
	G(e.restEncoder, t.clients.size), sf(t.clients.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
		e.resetDsCurVal(), G(e.restEncoder, t);
		let r = n.length;
		G(e.restEncoder, r);
		for (let t = 0; t < r; t++) {
			let r = n[t];
			e.writeDsClock(r.clock), e.writeDsLen(r.len);
		}
	});
}, Lm = (e) => {
	let t = new Dm(), n = K(e.restDecoder);
	for (let r = 0; r < n; r++) {
		e.resetDsCurVal();
		let n = K(e.restDecoder), r = K(e.restDecoder);
		if (r > 0) {
			let i = ef(t.clients, n, () => []);
			for (let t = 0; t < r; t++) i.push(new Em(e.readDsClock(), e.readDsLen()));
		}
	}
	return t;
}, Rm = (e, t, n) => {
	let r = new Dm(), i = K(e.restDecoder);
	for (let a = 0; a < i; a++) {
		e.resetDsCurVal();
		let i = K(e.restDecoder), a = K(e.restDecoder), o = n.clients.get(i) || [], s = J(n, i);
		for (let n = 0; n < a; n++) {
			let n = e.readDsClock(), a = n + e.readDsLen();
			if (n < s) {
				s < a && Nm(r, i, s, a - s);
				let e = wh(o, n), c = o[e];
				for (!c.deleted && c.id.clock < n && (o.splice(e + 1, 0, B_(t, c, n - c.id.clock)), e++); e < o.length && (c = o[e++], c.id.clock < a);) c.deleted || (a < c.id.clock + c.length && o.splice(e, 0, B_(t, c, a - c.id.clock)), c.delete(t));
			} else Nm(r, i, n, a - n);
		}
	}
	if (r.clients.size > 0) {
		let e = new Km();
		return G(e.restEncoder, 0), Im(e, r), e.toUint8Array();
	}
	return null;
}, zm = Cp, Bm = class e extends uf {
	constructor({ guid: e = Ep(), collectionid: t = null, gc: n = !0, gcFilter: r = () => !0, meta: i = null, autoLoad: a = !1, shouldLoad: o = !0 } = {}) {
		super(), this.gc = n, this.gcFilter = r, this.clientID = zm(), this.guid = e, this.collectionid = t, this.share = /* @__PURE__ */ new Map(), this.store = new xh(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = o, this.autoLoad = a, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = Op((e) => {
			this.on("load", () => {
				this.isLoaded = !0, e(this);
			});
		});
		let s = () => Op((e) => {
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
		return new Set(sf(this.subdocs).map((e) => e.guid));
	}
	transact(e, t = null) {
		return Y(this, e, t);
	}
	get(e, t = X) {
		let n = ef(this.share, e, () => {
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
		return this.get(e, kg);
	}
	getText(e = "") {
		return this.get(e, Xg);
	}
	getMap(e = "") {
		return this.get(e, Mg);
	}
	getXmlElement(e = "") {
		return this.get(e, t_);
	}
	getXmlFragment(e = "") {
		return this.get(e, $g);
	}
	toJSON() {
		let e = {};
		return this.share.forEach((t, n) => {
			e[n] = t.toJSON();
		}), e;
	}
	destroy() {
		this.isDestroyed = !0, sf(this.subdocs).forEach((e) => e.destroy());
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
}, Vm = class {
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
}, Hm = class extends Vm {
	constructor(e) {
		super(e), this.keys = [], K(e), this.keyClockDecoder = new yp(up(e)), this.clientDecoder = new vp(up(e)), this.leftClockDecoder = new yp(up(e)), this.rightClockDecoder = new yp(up(e)), this.infoDecoder = new _p(up(e), dp), this.stringDecoder = new bp(up(e)), this.parentInfoDecoder = new _p(up(e), dp), this.typeRefDecoder = new vp(up(e)), this.lenDecoder = new vp(up(e));
	}
	readLeftID() {
		return new ah(this.clientDecoder.read(), this.leftClockDecoder.read());
	}
	readRightID() {
		return new ah(this.clientDecoder.read(), this.rightClockDecoder.read());
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
		return gp(this.restDecoder);
	}
	readBuf() {
		return up(this.restDecoder);
	}
	readJSON() {
		return gp(this.restDecoder);
	}
	readKey() {
		let e = this.keyClockDecoder.read();
		if (e < this.keys.length) return this.keys[e];
		{
			let e = this.stringDecoder.read();
			return this.keys.push(e), e;
		}
	}
}, Um = class {
	constructor() {
		this.restEncoder = Af();
	}
	toUint8Array() {
		return Nf(this.restEncoder);
	}
	resetDsCurVal() {}
	writeDsClock(e) {
		G(this.restEncoder, e);
	}
	writeDsLen(e) {
		G(this.restEncoder, e);
	}
}, Wm = class extends Um {
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
		Ff(this.restEncoder, e);
	}
	writeString(e) {
		zf(this.restEncoder, e);
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
		Jf(this.restEncoder, e);
	}
	writeBuf(e) {
		Vf(this.restEncoder, e);
	}
	writeJSON(e) {
		zf(this.restEncoder, JSON.stringify(e));
	}
	writeKey(e) {
		zf(this.restEncoder, e);
	}
}, Gm = class {
	constructor() {
		this.restEncoder = Af(), this.dsCurrVal = 0;
	}
	toUint8Array() {
		return Nf(this.restEncoder);
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	writeDsClock(e) {
		let t = e - this.dsCurrVal;
		this.dsCurrVal = e, G(this.restEncoder, t);
	}
	writeDsLen(e) {
		e === 0 && rp(), G(this.restEncoder, e - 1), this.dsCurrVal += e;
	}
}, Km = class extends Gm {
	constructor() {
		super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new $f(), this.clientEncoder = new Zf(), this.leftClockEncoder = new $f(), this.rightClockEncoder = new $f(), this.infoEncoder = new Yf(Ff), this.stringEncoder = new ep(), this.parentInfoEncoder = new Yf(Ff), this.typeRefEncoder = new Zf(), this.lenEncoder = new Zf();
	}
	toUint8Array() {
		let e = Af();
		return G(e, 0), Vf(e, this.keyClockEncoder.toUint8Array()), Vf(e, this.clientEncoder.toUint8Array()), Vf(e, this.leftClockEncoder.toUint8Array()), Vf(e, this.rightClockEncoder.toUint8Array()), Vf(e, Nf(this.infoEncoder)), Vf(e, this.stringEncoder.toUint8Array()), Vf(e, Nf(this.parentInfoEncoder)), Vf(e, this.typeRefEncoder.toUint8Array()), Vf(e, this.lenEncoder.toUint8Array()), Bf(e, Nf(this.restEncoder)), Nf(e);
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
		Jf(this.restEncoder, e);
	}
	writeBuf(e) {
		Vf(this.restEncoder, e);
	}
	writeJSON(e) {
		Jf(this.restEncoder, e);
	}
	writeKey(e) {
		let t = this.keyMap.get(e);
		t === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
	}
}, qm = (e, t, n, r) => {
	r = mf(r, t[0].id.clock);
	let i = wh(t, r);
	G(e.restEncoder, t.length - i), e.writeClient(n), G(e.restEncoder, r);
	let a = t[i];
	a.write(e, r - a.id.clock);
	for (let n = i + 1; n < t.length; n++) t[n].write(e, 0);
}, Jm = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	n.forEach((e, n) => {
		J(t, n) > e && r.set(n, e);
	}), Sh(t).forEach((e, t) => {
		n.has(t) || r.set(t, 0);
	}), G(e.restEncoder, r.size), sf(r.entries()).sort((e, t) => t[0] - e[0]).forEach(([n, r]) => {
		qm(e, t.clients.get(n), n, r);
	});
}, Ym = (e, t) => {
	let n = Qd(), r = K(e.restDecoder);
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
					i[n] = new u_(q(a, o), t), o += t;
					break;
				}
				case 10: {
					let t = K(e.restDecoder);
					i[n] = new K_(q(a, o), t), o += t;
					break;
				}
				default: {
					let s = !(r & 192), c = new Q(q(a, o), null, (r & 128) == 128 ? e.readLeftID() : null, null, (r & 64) == 64 ? e.readRightID() : null, s ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null, s && (r & 32) == 32 ? e.readString() : null, U_(e, r));
					i[n] = c, o += c.length;
				}
			}
		}
	}
	return n;
}, Xm = (e, t, n) => {
	let r = [], i = sf(n.keys()).sort((e, t) => e - t);
	if (i.length === 0) return null;
	let a = () => {
		if (i.length === 0) return null;
		let e = n.get(i[i.length - 1]);
		for (; e.refs.length === e.i;) if (i.pop(), i.length > 0) e = n.get(i[i.length - 1]);
		else return null;
		return e;
	}, o = a();
	if (o === null) return null;
	let s = new xh(), c = /* @__PURE__ */ new Map(), l = (e, t) => {
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
		if (u.constructor !== K_) {
			let i = ef(d, u.id.client, () => J(t, u.id.client)) - u.id.clock;
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
		let e = new Km();
		return Jm(e, s, /* @__PURE__ */ new Map()), G(e.restEncoder, 0), {
			missing: c,
			update: e.toUint8Array()
		};
	}
	return null;
}, Zm = (e, t) => Jm(e, t.doc.store, t.beforeState), Qm = (e, t, n, r = new Hm(e)) => Y(t, (e) => {
	e.local = !1;
	let t = !1, n = e.doc, i = n.store, a = Xm(e, i, Ym(r, n)), o = i.pendingStructs;
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
			o.update = Kh([o.update, a.update]);
		}
	} else i.pendingStructs = a;
	let s = Rm(r, e, i);
	if (i.pendingDs) {
		let t = new Hm(sp(i.pendingDs));
		K(t.restDecoder);
		let n = Rm(t, e, i);
		i.pendingDs = s && n ? Kh([s, n]) : s || n;
	} else i.pendingDs = s;
	if (t) {
		let t = i.pendingStructs.update;
		i.pendingStructs = null, $m(e.doc, t);
	}
}, n, !1), $m = (e, t, n, r = Hm) => {
	let i = sp(t);
	Qm(i, e, n, new r(i));
}, eh = class {
	constructor() {
		this.l = [];
	}
}, th = () => new eh(), nh = (e, t) => e.l.push(t), rh = (e, t) => {
	let n = e.l, r = n.length;
	e.l = n.filter((e) => t !== e), r === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, ih = (e, t, n) => Hp(e.l, [t, n]), ah = class {
	constructor(e, t) {
		this.client = e, this.clock = t;
	}
}, oh = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, q = (e, t) => new ah(e, t), sh = (e) => {
	for (let [t, n] of e.doc.share.entries()) if (n === e) return t;
	throw rp();
}, ch = (e, t) => {
	for (; t !== null;) {
		if (t.parent === e) return !0;
		t = t.parent._item;
	}
	return !1;
}, lh = class {
	constructor(e, t, n, r = 0) {
		this.type = e, this.tname = t, this.item = n, this.assoc = r;
	}
}, uh = class {
	constructor(e, t, n = 0) {
		this.type = e, this.index = t, this.assoc = n;
	}
}, dh = (e, t, n = 0) => new uh(e, t, n), fh = (e, t, n) => {
	let r = null, i = null;
	return e._item === null ? i = sh(e) : r = q(e._item.id.client, e._item.id.clock), new lh(r, i, t, n);
}, ph = (e, t, n = 0) => {
	let r = e._start;
	if (n < 0) {
		if (t === 0) return fh(e, null, n);
		t--;
	}
	for (; r !== null;) {
		if (!r.deleted && r.countable) {
			if (r.length > t) return fh(e, q(r.id.client, r.id.clock + t), n);
			t -= r.length;
		}
		if (r.right === null && n < 0) return fh(e, r.lastId, n);
		r = r.right;
	}
	return fh(e, null, n);
}, mh = (e, t) => {
	let n = Th(e, t);
	return {
		item: n,
		diff: t.clock - n.id.clock
	};
}, hh = (e, t, n = !0) => {
	let r = t.store, i = e.item, a = e.type, o = e.tname, s = e.assoc, c = null, l = 0;
	if (i !== null) {
		if (J(r, i.client) <= i.clock) return null;
		let e = n ? R_(r, i) : mh(r, i), t = e.item;
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
			let { item: e } = n ? R_(r, a) : { item: Th(r, a) };
			if (e instanceof Q && e.content instanceof I_) c = e.content.type;
			else return null;
		} else throw rp();
		l = s >= 0 ? c._length : 0;
	}
	return dh(c, l, e.assoc);
}, gh = class {
	constructor(e, t) {
		this.ds = e, this.sv = t;
	}
}, _h = (e, t) => new gh(e, t);
_h(Pm(), /* @__PURE__ */ new Map());
var vh = (e) => _h(Fm(e.store), Sh(e.store)), yh = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !Am(t.ds, e.id), bh = (e, t) => {
	let n = ef(e.meta, bh, rf), r = e.doc.store;
	n.has(t) || (t.sv.forEach((t, n) => {
		t < J(r, n) && Dh(e, q(n, t));
	}), Om(e, t.ds, (e) => {}), n.add(t));
}, xh = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
	}
}, Sh = (e) => {
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
}, Ch = (e, t) => {
	let n = e.clients.get(t.id.client);
	if (n === void 0) n = [], e.clients.set(t.id.client, n);
	else {
		let e = n[n.length - 1];
		if (e.id.clock + e.length !== t.id.clock) throw rp();
	}
	n.push(t);
}, wh = (e, t) => {
	let n = 0, r = e.length - 1, i = e[r], a = i.id.clock;
	if (a === t) return r;
	let o = df(t / (a + i.length - 1) * r);
	for (; n <= r;) {
		if (i = e[o], a = i.id.clock, a <= t) {
			if (t < a + i.length) return o;
			n = o + 1;
		} else r = o - 1;
		o = df((n + r) / 2);
	}
	throw rp();
}, Th = (e, t) => {
	let n = e.clients.get(t.client);
	return n[wh(n, t.clock)];
}, Eh = (e, t, n) => {
	let r = wh(t, n), i = t[r];
	return i.id.clock < n && i instanceof Q ? (t.splice(r + 1, 0, B_(e, i, n - i.id.clock)), r + 1) : r;
}, Dh = (e, t) => {
	let n = e.doc.store.clients.get(t.client);
	return n[Eh(e, n, t.clock)];
}, Oh = (e, t, n) => {
	let r = t.clients.get(n.client), i = wh(r, n.clock), a = r[i];
	return n.clock !== a.id.clock + a.length - 1 && a.constructor !== u_ && r.splice(i + 1, 0, B_(e, a, n.clock - a.id.clock + 1)), a;
}, kh = (e, t, n) => {
	let r = e.clients.get(t.id.client);
	r[wh(r, t.id.clock)] = n;
}, Ah = (e, t, n, r, i) => {
	if (r === 0) return;
	let a = n + r, o = Eh(e, t, n), s;
	do
		s = t[o++], a < s.id.clock + s.length && Eh(e, t, a), i(s);
	while (o < t.length && t[o].id.clock < a);
}, jh = class {
	constructor(e, t, n) {
		this.doc = e, this.deleteSet = new Dm(), this.beforeState = Sh(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = t, this.meta = /* @__PURE__ */ new Map(), this.local = n, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
	}
}, Mh = (e, t) => t.deleteSet.clients.size === 0 && !nf(t.afterState, (e, n) => t.beforeState.get(n) !== e) ? !1 : (jm(t.deleteSet), Zm(e, t), Im(e, t.deleteSet), !0), Nh = (e, t, n) => {
	let r = t._item;
	(r === null || r.id.clock < (e.beforeState.get(r.id.client) || 0) && !r.deleted) && ef(e.changed, t, rf).add(n);
}, Ph = (e, t) => {
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
}, Fh = (e, t, n) => {
	for (let [r, i] of e.clients.entries()) {
		let e = t.clients.get(r);
		for (let r = i.length - 1; r >= 0; r--) {
			let a = i[r], o = a.clock + a.len;
			for (let r = wh(e, a.clock), i = e[r]; r < e.length && i.id.clock < o; i = e[++r]) {
				let i = e[r];
				if (a.clock + a.len <= i.id.clock) break;
				i instanceof Q && i.deleted && !i.keep && n(i) && i.gc(t, !1);
			}
		}
	}
}, Ih = (e, t) => {
	e.clients.forEach((e, n) => {
		let r = t.clients.get(n);
		for (let t = e.length - 1; t >= 0; t--) {
			let n = e[t], i = pf(r.length - 1, 1 + wh(r, n.clock + n.len - 1));
			for (let e = i, t = r[e]; e > 0 && t.id.clock >= n.clock; t = r[e]) e -= 1 + Ph(r, e);
		}
	});
}, Lh = (e, t) => {
	if (t < e.length) {
		let n = e[t], r = n.doc, i = r.store, a = n.deleteSet, o = n._mergeStructs;
		try {
			jm(a), n.afterState = Sh(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
			let e = [];
			n.changed.forEach((t, r) => e.push(() => {
				(r._item === null || !r._item.deleted) && r._callObserver(n, t);
			})), e.push(() => {
				n.changedParentTypes.forEach((e, t) => {
					t._dEH.l.length > 0 && (t._item === null || !t._item.deleted) && (e = e.filter((e) => e.target._item === null || !e.target._item.deleted), e.forEach((e) => {
						e.currentTarget = t, e._path = null;
					}), e.sort((e, t) => e.path.length - t.path.length), ih(t._dEH, e, n));
				});
			}), e.push(() => r.emit("afterTransaction", [n, r])), Hp(e, []), n._needFormattingCleanup && qg(n);
		} finally {
			r.gc && Fh(a, i, r.gcFilter), Ih(a, i), n.afterState.forEach((e, t) => {
				let r = n.beforeState.get(t) || 0;
				if (r !== e) {
					let e = i.clients.get(t), n = mf(wh(e, r), 1);
					for (let t = e.length - 1; t >= n;) t -= 1 + Ph(e, t);
				}
			});
			for (let e = o.length - 1; e >= 0; e--) {
				let { client: t, clock: n } = o[e].id, r = i.clients.get(t), a = wh(r, n);
				a + 1 < r.length && Ph(r, a + 1) > 1 || a > 0 && Ph(r, a);
			}
			if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (bm(hm, cm, "[yjs] ", lm, pm, "Changed the client-id because another client seems to be using it."), r.clientID = zm()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
				let e = new Wm();
				Mh(e, n) && r.emit("update", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			if (r._observers.has("updateV2")) {
				let e = new Km();
				Mh(e, n) && r.emit("updateV2", [
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
			]), l.forEach((e) => e.destroy())), e.length <= t + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, e])) : Lh(e, t + 1);
		}
	}
}, Y = (e, t, n = null, r = !0) => {
	let i = e._transactionCleanups, a = !1, o = null;
	e._transaction === null && (a = !0, e._transaction = new jh(e, n, r), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
	try {
		o = t(e._transaction);
	} finally {
		if (a) {
			let t = e._transaction === i[0];
			e._transaction = null, t && Lh(i, 0);
		}
	}
	return o;
}, Rh = class {
	constructor(e, t) {
		this.insertions = t, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
	}
}, zh = (e, t, n) => {
	Om(e, n.deletions, (n) => {
		n instanceof Q && t.scope.some((t) => t === e.doc || ch(t, n)) && z_(n, !1);
	});
}, Bh = (e, t, n) => {
	let r = null, i = e.doc, a = e.scope;
	Y(i, (n) => {
		for (; t.length > 0 && e.currStackItem === null;) {
			let r = i.store, o = t.pop(), s = /* @__PURE__ */ new Set(), c = [], l = !1;
			Om(n, o.insertions, (e) => {
				if (e instanceof Q) {
					if (e.redone !== null) {
						let { item: t, diff: i } = R_(r, e.id);
						i > 0 && (t = Dh(n, q(t.id.client, t.id.clock + i))), e = t;
					}
					!e.deleted && a.some((t) => t === n.doc || ch(t, e)) && c.push(e);
				}
			}), Om(n, o.deletions, (e) => {
				e instanceof Q && a.some((t) => t === n.doc || ch(t, e)) && !Am(o.insertions, e.id) && s.add(e);
			}), s.forEach((t) => {
				l = H_(n, t, s, o.insertions, e.ignoreRemoteMapChanges, e) !== null || l;
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
}, Vh = class extends uf {
	constructor(e, { captureTimeout: t = 500, captureTransaction: n = (e) => !0, deleteFilter: r = () => !0, trackedOrigins: i = /* @__PURE__ */ new Set([null]), ignoreRemoteMapChanges: a = !1, doc: o = lf(e) ? e[0].doc : e instanceof Bm ? e : e.doc } = {}) {
		super(), this.scope = [], this.doc = o, this.addToScope(e), this.deleteFilter = r, i.add(this), this.trackedOrigins = i, this.captureTransaction = n, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = a, this.captureTimeout = t, this.afterTransactionHandler = (e) => {
			if (!this.captureTransaction(e) || !this.scope.some((t) => e.changedParentTypes.has(t) || t === this.doc) || !this.trackedOrigins.has(e.origin) && (!e.origin || !this.trackedOrigins.has(e.origin.constructor))) return;
			let t = this.undoing, n = this.redoing, r = t ? this.redoStack : this.undoStack;
			t ? this.stopCapturing() : n || this.clear(!1, !0);
			let i = new Dm();
			e.afterState.forEach((t, n) => {
				let r = e.beforeState.get(n) || 0, a = t - r;
				a > 0 && Nm(i, n, r, a);
			});
			let a = Dp(), o = !1;
			if (this.lastChange > 0 && a - this.lastChange < this.captureTimeout && r.length > 0 && !t && !n) {
				let t = r[r.length - 1];
				t.deletions = Mm([t.deletions, e.deleteSet]), t.insertions = Mm([t.insertions, i]);
			} else r.push(new Rh(e.deleteSet, i)), o = !0;
			!t && !n && (this.lastChange = a), Om(e, e.deleteSet, (t) => {
				t instanceof Q && this.scope.some((n) => n === e.doc || ch(n, t)) && z_(t, !0);
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
		e = lf(e) ? e : [e], e.forEach((e) => {
			t.has(e) || (t.add(e), (e instanceof X ? e.doc !== this.doc : e !== this.doc) && xm("[yjs#509] Not same Y.Doc"), this.scope.push(e));
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
			e && (this.undoStack.forEach((e) => zh(n, this, e)), this.undoStack = []), t && (this.redoStack.forEach((e) => zh(n, this, e)), this.redoStack = []), this.emit("stack-cleared", [{
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
			e = Bh(this, this.undoStack, "undo");
		} finally {
			this.undoing = !1;
		}
		return e;
	}
	redo() {
		this.redoing = !0;
		let e;
		try {
			e = Bh(this, this.redoStack, "redo");
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
function* Hh(e) {
	let t = K(e.restDecoder);
	for (let n = 0; n < t; n++) {
		let t = K(e.restDecoder), n = e.readClient(), r = K(e.restDecoder);
		for (let i = 0; i < t; i++) {
			let t = e.readInfo();
			if (t === 10) {
				let t = K(e.restDecoder);
				yield new K_(q(n, r), t), r += t;
			} else if (31 & t) {
				let i = !(t & 192), a = new Q(q(n, r), null, (t & 128) == 128 ? e.readLeftID() : null, null, (t & 64) == 64 ? e.readRightID() : null, i ? e.readParentInfo() ? e.readString() : e.readLeftID() : null, i && (t & 32) == 32 ? e.readString() : null, U_(e, t));
				yield a, r += a.length;
			} else {
				let t = e.readLen();
				yield new u_(q(n, r), t), r += t;
			}
		}
	}
}
var Uh = class {
	constructor(e, t) {
		this.gen = Hh(e), this.curr = null, this.done = !1, this.filterSkips = t, this.next();
	}
	next() {
		do
			this.curr = this.gen.next().value || null;
		while (this.filterSkips && this.curr !== null && this.curr.constructor === K_);
		return this.curr;
	}
}, Wh = class {
	constructor(e) {
		this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
	}
}, Gh = (e, t) => {
	if (e.constructor === u_) {
		let { client: n, clock: r } = e.id;
		return new u_(q(n, r + t), e.length - t);
	}
	if (e.constructor === K_) {
		let { client: n, clock: r } = e.id;
		return new K_(q(n, r + t), e.length - t);
	}
	{
		let n = e, { client: r, clock: i } = n.id;
		return new Q(q(r, i + t), null, q(r, i + t - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(t));
	}
}, Kh = (e, t = Hm, n = Km) => {
	if (e.length === 1) return e[0];
	let r = e.map((e) => new t(sp(e))), i = r.map((e) => new Uh(e, !0)), a = null, o = new n(), s = new Wh(o);
	for (; i = i.filter((e) => e.curr !== null), i.sort((e, t) => {
		if (e.curr.id.client === t.curr.id.client) {
			let n = e.curr.id.clock - t.curr.id.clock;
			return n === 0 ? e.curr.constructor === t.curr.constructor ? 0 : e.curr.constructor === K_ ? 1 : -1 : n;
		}
		return t.curr.id.client - e.curr.id.client;
	}), i.length !== 0;) {
		let e = i[0], t = e.curr.id.client;
		if (a !== null) {
			let n = e.curr, r = !1;
			for (; n !== null && n.id.clock + n.length <= a.struct.id.clock + a.struct.length && n.id.client >= a.struct.id.client;) n = e.next(), r = !0;
			if (n === null || n.id.client !== t || r && n.id.clock > a.struct.id.clock + a.struct.length) continue;
			if (t !== a.struct.id.client) Jh(s, a.struct, a.offset), a = {
				struct: n,
				offset: 0
			}, e.next();
			else if (a.struct.id.clock + a.struct.length < n.id.clock) {
				if (a.struct.constructor === K_) a.struct.length = n.id.clock + n.length - a.struct.id.clock;
				else {
					Jh(s, a.struct, a.offset);
					let e = n.id.clock - a.struct.id.clock - a.struct.length;
					a = {
						struct: new K_(q(t, a.struct.id.clock + a.struct.length), e),
						offset: 0
					};
				}
			} else {
				let t = a.struct.id.clock + a.struct.length - n.id.clock;
				t > 0 && (a.struct.constructor === K_ ? a.struct.length -= t : n = Gh(n, t)), a.struct.mergeWith(n) || (Jh(s, a.struct, a.offset), a = {
					struct: n,
					offset: 0
				}, e.next());
			}
		} else a = {
			struct: e.curr,
			offset: 0
		}, e.next();
		for (let n = e.curr; n !== null && n.id.client === t && n.id.clock === a.struct.id.clock + a.struct.length && n.constructor !== K_; n = e.next()) Jh(s, a.struct, a.offset), a = {
			struct: n,
			offset: 0
		};
	}
	return a !== null && (Jh(s, a.struct, a.offset), a = null), Yh(s), Im(o, Mm(r.map((e) => Lm(e)))), o.toUint8Array();
}, qh = (e) => {
	e.written > 0 && (e.clientStructs.push({
		written: e.written,
		restEncoder: Nf(e.encoder.restEncoder)
	}), e.encoder.restEncoder = Af(), e.written = 0);
}, Jh = (e, t, n) => {
	e.written > 0 && e.currClient !== t.id.client && qh(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), G(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, Yh = (e) => {
	qh(e);
	let t = e.encoder.restEncoder;
	G(t, e.clientStructs.length);
	for (let n = 0; n < e.clientStructs.length; n++) {
		let r = e.clientStructs[n];
		G(t, r.written), Bf(t, r.restEncoder);
	}
}, Xh = "You must not compute changes after the event-handler fired.", Zh = class {
	constructor(e, t) {
		this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
	}
	get path() {
		return this._path ||= Qh(this.currentTarget, this.target);
	}
	deletes(e) {
		return Am(this.transaction.deleteSet, e.id);
	}
	get keys() {
		if (this._keys === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw tp(Xh);
			let e = /* @__PURE__ */ new Map(), t = this.target;
			this.transaction.changed.get(t).forEach((n) => {
				if (n !== null) {
					let r = t._map.get(n), i, a;
					if (this.adds(r)) {
						let e = r.left;
						for (; e !== null && this.adds(e);) e = e.left;
						if (this.deletes(r)) {
							if (e !== null && this.deletes(e)) i = "delete", a = af(e.content.getContent());
							else return;
						} else e !== null && this.deletes(e) ? (i = "update", a = af(e.content.getContent())) : (i = "add", a = void 0);
					} else if (this.deletes(r)) i = "delete", a = af(r.content.getContent());
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
			if (this.transaction.doc._transactionCleanups.length === 0) throw tp(Xh);
			let t = this.target, n = rf(), r = rf(), i = [];
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
}, Qh = (e, t) => {
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
}, $h = () => {
	xm("Invalid access: Add Yjs type to a document before reading data.");
}, eg = 80, tg = 0, ng = class {
	constructor(e, t) {
		e.marker = !0, this.p = e, this.index = t, this.timestamp = tg++;
	}
}, rg = (e) => {
	e.timestamp = tg++;
}, ig = (e, t, n) => {
	e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = tg++;
}, ag = (e, t, n) => {
	if (e.length >= eg) {
		let r = e.reduce((e, t) => e.timestamp < t.timestamp ? e : t);
		return ig(r, t, n), r;
	}
	{
		let r = new ng(t, n);
		return e.push(r), r;
	}
}, og = (e, t) => {
	if (e._start === null || t === 0 || e._searchMarker === null) return null;
	let n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((e, n) => ff(t - e.index) < ff(t - n.index) ? e : n), r = e._start, i = 0;
	for (n !== null && (r = n.p, i = n.index, rg(n)); r.right !== null && i < t;) {
		if (!r.deleted && r.countable) {
			if (t < i + r.length) break;
			i += r.length;
		}
		r = r.right;
	}
	for (; r.left !== null && i > t;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	return n !== null && ff(n.index - i) < r.parent.length / eg ? (ig(n, r, i), n) : ag(e._searchMarker, r, i);
}, sg = (e, t, n) => {
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
		(t < i.index || n > 0 && t === i.index) && (i.index = mf(t, i.index + n));
	}
}, cg = (e, t, n) => {
	let r = e, i = t.changedParentTypes;
	for (; ef(i, e, () => []).push(n), e._item !== null;) e = e._item.parent;
	ih(r._eH, n, t);
}, X = class {
	constructor() {
		this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = th(), this._dEH = th(), this._searchMarker = null;
	}
	get parent() {
		return this._item ? this._item.parent : null;
	}
	_integrate(e, t) {
		this.doc = e, this._item = t;
	}
	_copy() {
		throw np();
	}
	clone() {
		throw np();
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
		nh(this._eH, e);
	}
	observeDeep(e) {
		nh(this._dEH, e);
	}
	unobserve(e) {
		rh(this._eH, e);
	}
	unobserveDeep(e) {
		rh(this._dEH, e);
	}
	toJSON() {}
}, lg = (e, t, n) => {
	e.doc ?? $h(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
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
}, ug = (e) => {
	e.doc ?? $h();
	let t = [], n = e._start;
	for (; n !== null;) {
		if (n.countable && !n.deleted) {
			let e = n.content.getContent();
			for (let n = 0; n < e.length; n++) t.push(e[n]);
		}
		n = n.right;
	}
	return t;
}, dg = (e, t) => {
	let n = [], r = e._start;
	for (; r !== null;) {
		if (r.countable && yh(r, t)) {
			let e = r.content.getContent();
			for (let t = 0; t < e.length; t++) n.push(e[t]);
		}
		r = r.right;
	}
	return n;
}, fg = (e, t) => {
	let n = 0, r = e._start;
	for (e.doc ?? $h(); r !== null;) {
		if (r.countable && !r.deleted) {
			let i = r.content.getContent();
			for (let r = 0; r < i.length; r++) t(i[r], n++, e);
		}
		r = r.right;
	}
}, pg = (e, t) => {
	let n = [];
	return fg(e, (r, i) => {
		n.push(t(r, i, e));
	}), n;
}, mg = (e) => {
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
}, hg = (e, t) => {
	e.doc ?? $h();
	let n = og(e, t), r = e._start;
	for (n !== null && (r = n.p, t -= n.index); r !== null; r = r.right) if (!r.deleted && r.countable) {
		if (t < r.length) return r.content.getContent()[t];
		t -= r.length;
	}
}, gg = (e, t, n, r) => {
	let i = n, a = e.doc, o = a.clientID, s = a.store, c = n === null ? t._start : n.right, l = [], u = () => {
		l.length > 0 && (i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new w_(l)), i.integrate(e, 0), l = []);
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
					i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new d_(new Uint8Array(n))), i.integrate(e, 0);
					break;
				case Bm:
					i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new g_(n)), i.integrate(e, 0);
					break;
				default: if (n instanceof X) i = new Q(q(o, J(s, o)), i, i && i.lastId, c, c && c.id, t, null, new I_(n)), i.integrate(e, 0);
				else throw Error("Unexpected content type in insert operation");
			}
		}
	}), u();
}, _g = () => tp("Length exceeded!"), vg = (e, t, n, r) => {
	if (n > t._length) throw _g();
	if (n === 0) return t._searchMarker && sg(t._searchMarker, n, r.length), gg(e, t, null, r);
	let i = n, a = og(t, n), o = t._start;
	for (a !== null && (o = a.p, n -= a.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right) if (!o.deleted && o.countable) {
		if (n <= o.length) {
			n < o.length && Dh(e, q(o.id.client, o.id.clock + n));
			break;
		}
		n -= o.length;
	}
	return t._searchMarker && sg(t._searchMarker, i, r.length), gg(e, t, o, r);
}, yg = (e, t, n) => {
	let r = (t._searchMarker || []).reduce((e, t) => t.index > e.index ? t : e, {
		index: 0,
		p: t._start
	}).p;
	if (r) for (; r.right;) r = r.right;
	return gg(e, t, r, n);
}, bg = (e, t, n, r) => {
	if (r === 0) return;
	let i = n, a = r, o = og(t, n), s = t._start;
	for (o !== null && (s = o.p, n -= o.index); s !== null && n > 0; s = s.right) !s.deleted && s.countable && (n < s.length && Dh(e, q(s.id.client, s.id.clock + n)), n -= s.length);
	for (; r > 0 && s !== null;) s.deleted || (r < s.length && Dh(e, q(s.id.client, s.id.clock + r)), s.delete(e), r -= s.length), s = s.right;
	if (r > 0) throw _g();
	t._searchMarker && sg(t._searchMarker, i, -a + r);
}, xg = (e, t, n) => {
	let r = t._map.get(n);
	r !== void 0 && r.delete(e);
}, Sg = (e, t, n, r) => {
	let i = t._map.get(n) || null, a = e.doc, o = a.clientID, s;
	if (r == null) s = new w_([r]);
	else switch (r.constructor) {
		case Number:
		case Object:
		case Boolean:
		case Array:
		case String:
		case Date:
		case BigInt:
			s = new w_([r]);
			break;
		case Uint8Array:
			s = new d_(r);
			break;
		case Bm:
			s = new g_(r);
			break;
		default: if (r instanceof X) s = new I_(r);
		else throw Error("Unexpected content type");
	}
	new Q(q(o, J(a.store, o)), i, i && i.lastId, null, null, t, n, s).integrate(e, 0);
}, Cg = (e, t) => {
	e.doc ?? $h();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, wg = (e) => {
	let t = {};
	return e.doc ?? $h(), e._map.forEach((e, n) => {
		e.deleted || (t[n] = e.content.getContent()[e.length - 1]);
	}), t;
}, Tg = (e, t) => {
	e.doc ?? $h();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted;
}, Eg = (e, t) => {
	let n = {};
	return e._map.forEach((e, r) => {
		let i = e;
		for (; i !== null && (!t.sv.has(i.id.client) || i.id.clock >= (t.sv.get(i.id.client) || 0));) i = i.left;
		i !== null && yh(i, t) && (n[r] = i.content.getContent()[i.length - 1]);
	}), n;
}, Dg = (e) => (e.doc ?? $h(), wm(e._map.entries(), (e) => !e[1].deleted)), Og = class extends Zh {}, kg = class e extends X {
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
		return this.doc ?? $h(), this._length;
	}
	_callObserver(e, t) {
		super._callObserver(e, t), cg(this, e, new Og(this, e));
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : Y(this.doc, (n) => {
			vg(n, this, e, t);
		});
	}
	push(e) {
		this.doc === null ? this._prelimContent.push(...e) : Y(this.doc, (t) => {
			yg(t, this, e);
		});
	}
	unshift(e) {
		this.insert(0, e);
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : Y(this.doc, (n) => {
			bg(n, this, e, t);
		});
	}
	get(e) {
		return hg(this, e);
	}
	toArray() {
		return ug(this);
	}
	slice(e = 0, t = this.length) {
		return lg(this, e, t);
	}
	toJSON() {
		return this.map((e) => e instanceof X ? e.toJSON() : e);
	}
	map(e) {
		return pg(this, e);
	}
	forEach(e) {
		fg(this, e);
	}
	[Symbol.iterator]() {
		return mg(this);
	}
	_write(e) {
		e.writeTypeRef(k_);
	}
}, Ag = (e) => new kg(), jg = class extends Zh {
	constructor(e, t, n) {
		super(e, t), this.keysChanged = n;
	}
}, Mg = class e extends X {
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
		cg(this, e, new jg(this, e, t));
	}
	toJSON() {
		this.doc ?? $h();
		let e = {};
		return this._map.forEach((t, n) => {
			if (!t.deleted) {
				let r = t.content.getContent()[t.length - 1];
				e[n] = r instanceof X ? r.toJSON() : r;
			}
		}), e;
	}
	get size() {
		return [...Dg(this)].length;
	}
	keys() {
		return Tm(Dg(this), (e) => e[0]);
	}
	values() {
		return Tm(Dg(this), (e) => e[1].content.getContent()[e[1].length - 1]);
	}
	entries() {
		return Tm(Dg(this), (e) => [e[0], e[1].content.getContent()[e[1].length - 1]]);
	}
	forEach(e) {
		this.doc ?? $h(), this._map.forEach((t, n) => {
			t.deleted || e(t.content.getContent()[t.length - 1], n, this);
		});
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	delete(e) {
		this.doc === null ? this._prelimContent.delete(e) : Y(this.doc, (t) => {
			xg(t, this, e);
		});
	}
	set(e, t) {
		return this.doc === null ? this._prelimContent.set(e, t) : Y(this.doc, (n) => {
			Sg(n, this, e, t);
		}), t;
	}
	get(e) {
		return Cg(this, e);
	}
	has(e) {
		return Tg(this, e);
	}
	clear() {
		this.doc === null ? this._prelimContent.clear() : Y(this.doc, (e) => {
			this.forEach(function(t, n, r) {
				xg(e, r, n);
			});
		});
	}
	_write(e) {
		e.writeTypeRef(A_);
	}
}, Ng = (e) => new Mg(), Pg = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && zp(e, t), Fg = class {
	constructor(e, t, n, r) {
		this.left = e, this.right = t, this.index = n, this.currentAttributes = r;
	}
	forward() {
		switch (this.right === null && rp(), this.right.content.constructor) {
			case Z:
				this.right.deleted || zg(this.currentAttributes, this.right.content);
				break;
			default: this.right.deleted || (this.index += this.right.length);
		}
		this.left = this.right, this.right = this.right.right;
	}
}, Ig = (e, t, n) => {
	for (; t.right !== null && n > 0;) {
		switch (t.right.content.constructor) {
			case Z:
				t.right.deleted || zg(t.currentAttributes, t.right.content);
				break;
			default: t.right.deleted || (n < t.right.length && Dh(e, q(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
		}
		t.left = t.right, t.right = t.right.right;
	}
	return t;
}, Lg = (e, t, n, r) => {
	let i = /* @__PURE__ */ new Map(), a = r ? og(t, n) : null;
	return a ? Ig(e, new Fg(a.p.left, a.p, a.index, i), n - a.index) : Ig(e, new Fg(null, t._start, 0, i), n);
}, Rg = (e, t, n, r) => {
	for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === Z && Pg(r.get(n.right.content.key), n.right.content.value));) n.right.deleted || r.delete(n.right.content.key), n.forward();
	let i = e.doc, a = i.clientID;
	r.forEach((r, o) => {
		let s = n.left, c = n.right, l = new Q(q(a, J(i.store, a)), s, s && s.lastId, c, c && c.id, t, null, new Z(o, r));
		l.integrate(e, 0), n.right = l, n.forward();
	});
}, zg = (e, t) => {
	let { key: n, value: r } = t;
	r === null ? e.delete(n) : e.set(n, r);
}, Bg = (e, t) => {
	for (; e.right !== null && (e.right.deleted || e.right.content.constructor === Z && Pg(t[e.right.content.key] ?? null, e.right.content.value));) e.forward();
}, Vg = (e, t, n, r) => {
	let i = e.doc, a = i.clientID, o = /* @__PURE__ */ new Map();
	for (let s in r) {
		let c = r[s], l = n.currentAttributes.get(s) ?? null;
		if (!Pg(l, c)) {
			o.set(s, l);
			let { left: r, right: u } = n;
			n.right = new Q(q(a, J(i.store, a)), r, r && r.lastId, u, u && u.id, t, null, new Z(s, c)), n.right.integrate(e, 0), n.forward();
		}
	}
	return o;
}, Hg = (e, t, n, r, i) => {
	n.currentAttributes.forEach((e, t) => {
		i[t] === void 0 && (i[t] = null);
	});
	let a = e.doc, o = a.clientID;
	Bg(n, i);
	let s = Vg(e, t, n, i), c = r.constructor === String ? new E_(r) : r instanceof X ? new I_(r) : new v_(r), { left: l, right: u, index: d } = n;
	t._searchMarker && sg(t._searchMarker, n.index, c.getLength()), u = new Q(q(o, J(a.store, o)), l, l && l.lastId, u, u && u.id, t, null, c), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), Rg(e, t, n, s);
}, Ug = (e, t, n, r, i) => {
	let a = e.doc, o = a.clientID;
	Bg(n, i);
	let s = Vg(e, t, n, i);
	iterationLoop: for (; n.right !== null && (r > 0 || s.size > 0 && (n.right.deleted || n.right.content.constructor === Z));) {
		if (!n.right.deleted) switch (n.right.content.constructor) {
			case Z: {
				let { key: t, value: a } = n.right.content, o = i[t];
				if (o !== void 0) {
					if (Pg(o, a)) s.delete(t);
					else {
						if (r === 0) break iterationLoop;
						s.set(t, a);
					}
					n.right.delete(e);
				} else n.currentAttributes.set(t, a);
				break;
			}
			default: r < n.right.length && Dh(e, q(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
		}
		n.forward();
	}
	if (r > 0) {
		let i = "";
		for (; r > 0; r--) i += "\n";
		n.right = new Q(q(o, J(a.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new E_(i)), n.right.integrate(e, 0), n.forward();
	}
	Rg(e, t, n, s);
}, Wg = (e, t, n, r, i) => {
	let a = t, o = Qd();
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
					(o.get(a) !== n || u === l) && (t.delete(e), s++, !c && (i.get(a) ?? null) === l && u !== l && (u === null ? i.delete(a) : i.set(a, u))), !c && !t.deleted && zg(i, n);
					break;
				}
			}
		}
		t = t.right;
	}
	return s;
}, Gg = (e, t) => {
	for (; t && t.right && (t.right.deleted || !t.right.countable);) t = t.right;
	let n = /* @__PURE__ */ new Set();
	for (; t && (t.deleted || !t.countable);) {
		if (!t.deleted && t.content.constructor === Z) {
			let r = t.content.key;
			n.has(r) ? t.delete(e) : n.add(r);
		}
		t = t.left;
	}
}, Kg = (e) => {
	let t = 0;
	return Y(e.doc, (n) => {
		let r = e._start, i = e._start, a = Qd(), o = $d(a);
		for (; i;) {
			if (i.deleted === !1) switch (i.content.constructor) {
				case Z:
					zg(o, i.content);
					break;
				default: t += Wg(n, r, i, a, o), a = $d(o), r = i;
			}
			i = i.right;
		}
	}), t;
}, qg = (e) => {
	let t = /* @__PURE__ */ new Set(), n = e.doc;
	for (let [r, i] of e.afterState.entries()) {
		let a = e.beforeState.get(r) || 0;
		i !== a && Ah(e, n.store.clients.get(r), a, i, (e) => {
			!e.deleted && e.content.constructor === Z && e.constructor !== u_ && t.add(e.parent);
		});
	}
	Y(n, (n) => {
		Om(e, e.deleteSet, (e) => {
			if (e instanceof u_ || !e.parent._hasFormatting || t.has(e.parent)) return;
			let r = e.parent;
			e.content.constructor === Z ? t.add(r) : Gg(n, e);
		});
		for (let e of t) Kg(e);
	});
}, Jg = (e, t, n) => {
	let r = n, i = $d(t.currentAttributes), a = t.right;
	for (; n > 0 && t.right !== null;) {
		if (t.right.deleted === !1) switch (t.right.content.constructor) {
			case I_:
			case v_:
			case E_: n < t.right.length && Dh(e, q(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
		}
		t.forward();
	}
	a && Wg(e, a, t.right, i, t.currentAttributes);
	let o = (t.left || t.right).parent;
	return o._searchMarker && sg(o._searchMarker, t.index, -r + n), t;
}, Yg = class extends Zh {
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
							case "retain": c > 0 && (e = { retain: c }, Ip(o) || (e.attributes = Mp({}, o))), c = 0;
						}
						e && t.push(e), a = null;
					}
				};
				for (; i !== null;) {
					switch (i.content.constructor) {
						case I_:
						case v_:
							this.adds(i) ? this.deletes(i) || (u(), a = "insert", s = i.content.getContent()[0], u()) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += 1) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += 1);
							break;
						case E_:
							this.adds(i) ? this.deletes(i) || (a !== "insert" && (u(), a = "insert"), s += i.content.str) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += i.length) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += i.length);
							break;
						case Z: {
							let { key: t, value: s } = i.content;
							if (this.adds(i)) this.deletes(i) || (Pg(n.get(t) ?? null, s) ? s !== null && i.delete(e) : (a === "retain" && u(), Pg(s, r.get(t) ?? null) ? delete o[t] : o[t] = s));
							else if (this.deletes(i)) {
								r.set(t, s);
								let e = n.get(t) ?? null;
								Pg(e, s) || (a === "retain" && u(), o[t] = e);
							} else if (!i.deleted) {
								r.set(t, s);
								let n = o[t];
								n !== void 0 && (Pg(n, s) ? n !== null && i.delete(e) : (a === "retain" && u(), s === null ? delete o[t] : o[t] = s));
							}
							i.deleted || (a === "insert" && u(), zg(n, i.content));
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
}, Xg = class e extends X {
	constructor(e) {
		super(), this._pending = e === void 0 ? [] : [() => this.insert(0, e)], this._searchMarker = [], this._hasFormatting = !1;
	}
	get length() {
		return this.doc ?? $h(), this._length;
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
		let n = new Yg(this, e, t);
		cg(this, e, n), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
	}
	toString() {
		this.doc ?? $h();
		let e = "", t = this._start;
		for (; t !== null;) !t.deleted && t.countable && t.content.constructor === E_ && (e += t.content.str), t = t.right;
		return e;
	}
	toJSON() {
		return this.toString();
	}
	applyDelta(e, { sanitize: t = !0 } = {}) {
		this.doc === null ? this._pending.push(() => this.applyDelta(e)) : Y(this.doc, (n) => {
			let r = new Fg(null, this._start, 0, /* @__PURE__ */ new Map());
			for (let i = 0; i < e.length; i++) {
				let a = e[i];
				if (a.insert !== void 0) {
					let o = !t && typeof a.insert == "string" && i === e.length - 1 && r.right === null && a.insert.slice(-1) === "\n" ? a.insert.slice(0, -1) : a.insert;
					(typeof o != "string" || o.length > 0) && Hg(n, this, r, o, a.attributes || {});
				} else a.retain === void 0 ? a.delete !== void 0 && Jg(n, r, a.delete) : Ug(n, this, r, a.retain, a.attributes || {});
			}
		});
	}
	toDelta(e, t, n) {
		this.doc ?? $h();
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
				if (yh(s, e) || t !== void 0 && yh(s, t)) switch (s.content.constructor) {
					case E_: {
						let r = i.get("ychange");
						e !== void 0 && !yh(s, e) ? (r === void 0 || r.user !== s.id.client || r.type !== "removed") && (c(), i.set("ychange", n ? n("removed", s.id) : { type: "removed" })) : t !== void 0 && !yh(s, t) ? (r === void 0 || r.user !== s.id.client || r.type !== "added") && (c(), i.set("ychange", n ? n("added", s.id) : { type: "added" })) : r !== void 0 && (c(), i.delete("ychange")), o += s.content.str;
						break;
					}
					case I_:
					case v_: {
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
					case Z: yh(s, e) && (c(), zg(i, s.content));
				}
				s = s.right;
			}
			c();
		};
		return e || t ? Y(a, (n) => {
			e && bh(n, e), t && bh(n, t), l();
		}, "cleanup") : l(), r;
	}
	insert(e, t, n) {
		if (t.length <= 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.insert(e, t, n)) : Y(r, (r) => {
			let i = Lg(r, this, e, !n);
			n || (n = {}, i.currentAttributes.forEach((e, t) => {
				n[t] = e;
			})), Hg(r, this, i, t, n);
		});
	}
	insertEmbed(e, t, n) {
		let r = this.doc;
		r === null ? this._pending.push(() => this.insertEmbed(e, t, n || {})) : Y(r, (r) => {
			let i = Lg(r, this, e, !n);
			Hg(r, this, i, t, n || {});
		});
	}
	delete(e, t) {
		if (t === 0) return;
		let n = this.doc;
		n === null ? this._pending.push(() => this.delete(e, t)) : Y(n, (n) => {
			Jg(n, Lg(n, this, e, !0), t);
		});
	}
	format(e, t, n) {
		if (t === 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.format(e, t, n)) : Y(r, (r) => {
			let i = Lg(r, this, e, !1);
			i.right !== null && Ug(r, this, i, t, n);
		});
	}
	removeAttribute(e) {
		this.doc === null ? this._pending.push(() => this.removeAttribute(e)) : Y(this.doc, (t) => {
			xg(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._pending.push(() => this.setAttribute(e, t)) : Y(this.doc, (n) => {
			Sg(n, this, e, t);
		});
	}
	getAttribute(e) {
		return Cg(this, e);
	}
	getAttributes() {
		return wg(this);
	}
	_write(e) {
		e.writeTypeRef(j_);
	}
}, Zg = (e) => new Xg(), Qg = class {
	constructor(e, t = () => !0) {
		this._filter = t, this._root = e, this._currentNode = e._start, this._firstCall = !0, e.doc ?? $h();
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this._currentNode, t = e && e.content && e.content.type;
		if (e !== null && (!this._firstCall || e.deleted || !this._filter(t))) do
			if (t = e.content.type, !e.deleted && (t.constructor === t_ || t.constructor === $g) && t._start !== null) e = t._start;
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
}, $g = class e extends X {
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
		return this.doc ?? $h(), this._prelimContent === null ? this._length : this._prelimContent.length;
	}
	createTreeWalker(e) {
		return new Qg(this, e);
	}
	querySelector(e) {
		e = e.toUpperCase();
		let t = new Qg(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e).next();
		return t.done ? null : t.value;
	}
	querySelectorAll(e) {
		return e = e.toUpperCase(), sf(new Qg(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e));
	}
	_callObserver(e, t) {
		cg(this, e, new r_(this, t, e));
	}
	toString() {
		return pg(this, (e) => e.toString()).join("");
	}
	toJSON() {
		return this.toString();
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createDocumentFragment();
		return n !== void 0 && n._createAssociation(r, this), fg(this, (i) => {
			r.insertBefore(i.toDOM(e, t, n), null);
		}), r;
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : Y(this.doc, (n) => {
			vg(n, this, e, t);
		});
	}
	insertAfter(e, t) {
		if (this.doc !== null) Y(this.doc, (n) => {
			let r = e && e instanceof X ? e._item : e;
			gg(n, this, r, t);
		});
		else {
			let n = this._prelimContent, r = e === null ? 0 : n.findIndex((t) => t === e) + 1;
			if (r === 0 && e !== null) throw tp("Reference item not found");
			n.splice(r, 0, ...t);
		}
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : Y(this.doc, (n) => {
			bg(n, this, e, t);
		});
	}
	toArray() {
		return ug(this);
	}
	push(e) {
		this.insert(this.length, e);
	}
	unshift(e) {
		this.insert(0, e);
	}
	get(e) {
		return hg(this, e);
	}
	slice(e = 0, t = this.length) {
		return lg(this, e, t);
	}
	forEach(e) {
		fg(this, e);
	}
	_write(e) {
		e.writeTypeRef(N_);
	}
}, e_ = (e) => new $g(), t_ = class e extends $g {
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
		return Pp(this.getAttributes(), (e, n) => {
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
			xg(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._prelimAttrs.set(e, t) : Y(this.doc, (n) => {
			Sg(n, this, e, t);
		});
	}
	getAttribute(e) {
		return Cg(this, e);
	}
	hasAttribute(e) {
		return Tg(this, e);
	}
	getAttributes(e) {
		return e ? Eg(this, e) : wg(this);
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createElement(this.nodeName), i = this.getAttributes();
		for (let e in i) {
			let t = i[e];
			typeof t == "string" && r.setAttribute(e, t);
		}
		return fg(this, (i) => {
			r.appendChild(i.toDOM(e, t, n));
		}), n !== void 0 && n._createAssociation(r, this), r;
	}
	_write(e) {
		e.writeTypeRef(M_), e.writeKey(this.nodeName);
	}
}, n_ = (e) => new t_(e.readKey()), r_ = class extends Zh {
	constructor(e, t, n) {
		super(e, n), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), t.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.attributesChanged.add(e);
		});
	}
}, i_ = class e extends Mg {
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
		e.writeTypeRef(P_), e.writeKey(this.hookName);
	}
}, a_ = (e) => new i_(e.readKey()), o_ = class e extends Xg {
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
		e.writeTypeRef(F_);
	}
}, s_ = (e) => new o_(), c_ = class {
	constructor(e, t) {
		this.id = e, this.length = t;
	}
	get deleted() {
		throw np();
	}
	mergeWith(e) {
		return !1;
	}
	write(e, t, n) {
		throw np();
	}
	integrate(e, t) {
		throw np();
	}
}, l_ = 0, u_ = class extends c_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor && (this.length += e.length, !0);
	}
	integrate(e, t) {
		t > 0 && (this.id.clock += t, this.length -= t), Ch(e.doc.store, this);
	}
	write(e, t) {
		e.writeInfo(l_), e.writeLen(this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, d_ = class e {
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
		throw np();
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
}, f_ = (e) => new d_(e.readBuf()), p_ = class e {
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
		Nm(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeLen(this.len - t);
	}
	getRef() {
		return 1;
	}
}, m_ = (e) => new p_(e.readLen()), h_ = (e, t) => new Bm({
	guid: e,
	...t,
	shouldLoad: t.shouldLoad || t.autoLoad || !1
}), g_ = class e {
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
		return new e(h_(this.doc.guid, this.opts));
	}
	splice(e) {
		throw np();
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
}, __ = (e) => new g_(h_(e.readString(), e.readAny())), v_ = class e {
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
		throw np();
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
}, y_ = (e) => new v_(e.readJSON()), Z = class e {
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
		throw np();
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
}, b_ = (e) => new Z(e.readKey(), e.readJSON()), x_ = class e {
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
}, S_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		t === "undefined" ? n.push(void 0) : n.push(JSON.parse(t));
	}
	return new x_(n);
}, C_ = Xp("node_env") === "development", w_ = class e {
	constructor(e) {
		this.arr = e, C_ && Vp(e);
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
}, T_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) n.push(e.readAny());
	return new w_(n);
}, E_ = class e {
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
}, D_ = (e) => new E_(e.readString()), O_ = [
	Ag,
	Ng,
	Zg,
	n_,
	e_,
	a_,
	s_
], k_ = 0, A_ = 1, j_ = 2, M_ = 3, N_ = 4, P_ = 5, F_ = 6, I_ = class e {
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
		throw np();
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
}, L_ = (e) => new I_(O_[e.readTypeRef()](e)), R_ = (e, t) => {
	let n = t, r = 0, i;
	do
		r > 0 && (n = q(n.client, n.clock + r)), i = Th(e, n), r = n.clock - i.id.clock, n = i.redone;
	while (n !== null && i instanceof Q);
	return {
		item: i,
		diff: r
	};
}, z_ = (e, t) => {
	for (; e !== null && e.keep !== t;) e.keep = t, e = e.parent._item;
}, B_ = (e, t, n) => {
	let { client: r, clock: i } = t.id, a = new Q(q(r, i + n), t, q(r, i + n - 1), t.right, t.rightOrigin, t.parent, t.parentSub, t.content.splice(n));
	return t.deleted && a.markDeleted(), t.keep && (a.keep = !0), t.redone !== null && (a.redone = q(t.redone.client, t.redone.clock + n)), t.right = a, a.right !== null && (a.right.left = a), e._mergeStructs.push(a), a.parentSub !== null && a.right === null && a.parent._map.set(a.parentSub, a), t.length = n, a;
}, V_ = (e, t) => cf(e, (e) => Am(e.deletions, t)), H_ = (e, t, n, r, i, a) => {
	let o = e.doc, s = o.store, c = o.clientID, l = t.redone;
	if (l !== null) return Dh(e, l);
	let u = t.parent._item, d = null, f;
	if (u !== null && u.deleted === !0) {
		if (u.redone === null && (!n.has(u) || H_(e, u, n, r, i, a) === null)) return null;
		for (; u.redone !== null;) u = Dh(e, u.redone);
	}
	let p = u === null ? t.parent : u.content.type;
	if (t.parentSub === null) {
		for (d = t.left, f = t; d !== null;) {
			let t = d;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Dh(e, t.redone);
			if (t !== null && t.parent._item === u) {
				d = t;
				break;
			}
			d = d.left;
		}
		for (; f !== null;) {
			let t = f;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Dh(e, t.redone);
			if (t !== null && t.parent._item === u) {
				f = t;
				break;
			}
			f = f.right;
		}
	} else if (f = null, t.right && !i) {
		for (d = t; d !== null && d.right !== null && (d.right.redone || Am(r, d.right.id) || V_(a.undoStack, d.right.id) || V_(a.redoStack, d.right.id));) for (d = d.right; d.redone;) d = Dh(e, d.redone);
		if (d && d.right !== null) return null;
	} else d = p._map.get(t.parentSub) || null;
	let m = q(c, J(s, c)), h = new Q(m, d, d && d.lastId, f, f && f.id, p, t.parentSub, t.content.copy());
	return t.redone = m, z_(h, !0), h.integrate(e, 0), h;
}, Q = class e extends c_ {
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
		if (this.parent && this.parent.constructor === ah && this.id.client !== this.parent.client && this.parent.clock >= J(n, this.parent.client)) return this.parent.client;
		if (this.origin &&= (this.left = Oh(t, n, this.origin), this.left.lastId), this.rightOrigin &&= (this.right = Dh(t, this.rightOrigin), this.right.id), this.left && this.left.constructor === u_ || this.right && this.right.constructor === u_) this.parent = null;
		else if (!this.parent) this.left && this.left.constructor === e ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === e && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
		else if (this.parent.constructor === ah) {
			let e = Th(n, this.parent);
			this.parent = e.constructor === u_ ? null : e.content.type;
		}
		return null;
	}
	integrate(e, t) {
		if (t > 0 && (this.id.clock += t, this.left = Oh(e, e.doc.store, q(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
			if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
				let t = this.left, n;
				if (t !== null) n = t.right;
				else if (this.parentSub !== null) for (n = this.parent._map.get(this.parentSub) || null; n !== null && n.left !== null;) n = n.left;
				else n = this.parent._start;
				let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
				for (; n !== null && n !== this.right;) {
					if (i.add(n), r.add(n), oh(this.origin, n.origin)) {
						if (n.id.client < this.id.client) t = n, r.clear();
						else if (oh(this.rightOrigin, n.rightOrigin)) break;
					} else if (n.origin !== null && i.has(Th(e.doc.store, n.origin))) r.has(Th(e.doc.store, n.origin)) || (t = n, r.clear());
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
			this.right === null ? this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)) : this.right.left = this, this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Ch(e.doc.store, this), this.content.integrate(e, this), Nh(e, this.parent, this.parentSub), (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
		} else new u_(this.id, this.length).integrate(e, 0);
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
		if (this.constructor === e.constructor && oh(e.origin, this.lastId) && this.right === e && oh(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
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
			this.countable && this.parentSub === null && (t._length -= this.length), this.markDeleted(), Nm(e.deleteSet, this.id.client, this.id.clock, this.length), Nh(e, t, this.parentSub), this.content.delete(e);
		}
	}
	gc(e, t) {
		if (!this.deleted) throw rp();
		this.content.gc(e), t ? kh(e, this, new u_(this.id, this.length)) : this.content = new p_(this.length);
	}
	write(e, t) {
		let n = t > 0 ? q(this.id.client, this.id.clock + t - 1) : this.origin, r = this.rightOrigin, i = this.parentSub, a = this.content.getRef() & 31 | (n === null ? 0 : 128) | (r === null ? 0 : 64) | (i === null ? 0 : 32);
		if (e.writeInfo(a), n !== null && e.writeLeftID(n), r !== null && e.writeRightID(r), n === null && r === null) {
			let t = this.parent;
			if (t._item !== void 0) {
				let n = t._item;
				if (n === null) {
					let n = sh(t);
					e.writeParentInfo(!0), e.writeString(n);
				} else e.writeParentInfo(!1), e.writeLeftID(n.id);
			} else t.constructor === String ? (e.writeParentInfo(!0), e.writeString(t)) : t.constructor === ah ? (e.writeParentInfo(!1), e.writeLeftID(t)) : rp();
			i !== null && e.writeString(i);
		}
		this.content.write(e, t);
	}
}, U_ = (e, t) => W_[t & 31](e), W_ = [
	() => {
		rp();
	},
	m_,
	S_,
	f_,
	D_,
	y_,
	b_,
	L_,
	T_,
	__,
	() => {
		rp();
	}
], G_ = 10, K_ = class extends c_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor && (this.length += e.length, !0);
	}
	integrate(e, t) {
		rp();
	}
	write(e, t) {
		e.writeInfo(G_), G(e.restEncoder, this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, q_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}, J_ = "__ $YJS$ __";
q_[J_] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), q_[J_] = !0;
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/mutex.js
var Y_ = () => {
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
}, X_ = /[\uD800-\uDBFF]/, Z_ = /[\uDC00-\uDFFF]/, Q_ = (e, t) => {
	let n = 0, r = 0;
	for (; n < e.length && n < t.length && e[n] === t[n];) n++;
	for (n > 0 && X_.test(e[n - 1]) && n--; r + n < e.length && r + n < t.length && e[e.length - r - 1] === t[t.length - r - 1];) r++;
	return r > 0 && Z_.test(e[e.length - r]) && r--, {
		index: n,
		remove: e.length - n - r,
		insert: t.slice(n, t.length - r)
	};
}, $ = new hr("y-sync"), $_ = new hr("y-undo");
new hr("yjs-cursor");
//#endregion
//#region ../../node_modules/.pnpm/lib0@0.2.109/node_modules/lib0/hash/sha256.js
var ev = (e, t) => e >>> t | e << 32 - t, tv = (e) => ev(e, 2) ^ ev(e, 13) ^ ev(e, 22), nv = (e) => ev(e, 6) ^ ev(e, 11) ^ ev(e, 25), rv = (e) => ev(e, 7) ^ ev(e, 18) ^ e >>> 3, iv = (e) => ev(e, 17) ^ ev(e, 19) ^ e >>> 10, av = new Uint32Array([
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
]), ov = new Uint32Array([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), sv = class {
	constructor() {
		let e = /* @__PURE__ */ new ArrayBuffer(320);
		this._H = new Uint32Array(e, 0, 8), this._H.set(ov), this._W = new Uint32Array(e, 64, 64);
	}
	_updateHash() {
		let e = this._H, t = this._W;
		for (let e = 16; e < 64; e++) t[e] = iv(t[e - 2]) + t[e - 7] + rv(t[e - 15]) + t[e - 16];
		let n = e[0], r = e[1], i = e[2], a = e[3], o = e[4], s = e[5], c = e[6], l = e[7];
		for (let e = 0, u, d; e < 64; e++) u = l + nv(o) + (o & s ^ ~o & c) + av[e] + t[e] >>> 0, d = tv(n) + (n & r ^ n & i ^ r & i) >>> 0, l = c, c = s, s = o, o = a + u >>> 0, a = i, i = r, r = n, n = u + d >>> 0;
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
		n || (this._W[r - (t % 4 == 0 ? 0 : 1)] |= 128 << (3 - t % 4) * 8), this._W[14] = e.byteLength / gf, this._W[15] = e.byteLength * 8, this._updateHash();
		let i = /* @__PURE__ */ new Uint8Array(32);
		for (let e = 0; e < this._H.length; e++) for (let t = 0; t < 4; t++) i[e * 4 + t] = this._H[e] >>> (3 - t) * 8;
		return i;
	}
}, cv = (e) => new sv().digest(e), lv = (e) => {
	for (let t = 6; t < e.length; t++) e[t % 6] = e[t % 6] ^ e[t];
	return e.slice(0, 6);
}, uv = (e) => $p(lv(cv(em(e)))), dv = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && t.sv.get(e.id.client) > e.id.clock && !Am(t.ds, e.id), fv = [{
	light: "#ecd44433",
	dark: "#ecd444"
}], pv = (e, t, n) => {
	if (!e.has(n)) {
		if (e.size < t.length) {
			let n = rf();
			e.forEach((e) => n.add(e)), t = t.filter((e) => !n.has(e));
		}
		e.set(n, wp(t));
	}
	return e.get(n);
}, mv = (e, { colors: t = fv, colorMapping: n = /* @__PURE__ */ new Map(), permanentUserData: r = null, onFirstRender: i = () => {}, mapping: a } = {}) => {
	let o = !1, s = new _v(e, a), c = new ur({
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
				return t.addToHistory = e.getMeta("addToHistory") !== !1, t.isChangeOrigin = n !== void 0 && !!n.isChangeOrigin, t.isUndoRedoOperation = n !== void 0 && !!n.isChangeOrigin && !!n.isUndoRedoOperation, s.prosemirrorView !== null && n !== void 0 && (n.snapshot != null || n.prevSnapshot != null) && om(0, () => {
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
						let t = $_.getState(e.state), n = t && t.undoManager;
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
}, hv = (e, t, n) => {
	if (t !== null && t.anchor !== null && t.head !== null) {
		if (t.type === "all") e.setSelection(new rr(e.doc));
		else if (t.type === "node") {
			let r = Vv(n.doc, n.type, t.anchor, n.mapping);
			e.setSelection(Yn.create(e.doc, r));
		} else {
			let r = Vv(n.doc, n.type, t.anchor, n.mapping), i = Vv(n.doc, n.type, t.head, n.mapping);
			if (r !== null && i !== null) {
				let t = _r.between(e.doc.resolve(r), e.doc.resolve(i));
				e.setSelection(t);
			}
		}
	}
}, gv = (e, t) => ({
	type: t.selection.jsonID,
	anchor: zv(t.selection.anchor, e.type, e.mapping),
	head: zv(t.selection.head, e.type, e.mapping)
}), _v = class {
	constructor(e, t = /* @__PURE__ */ new Map()) {
		this.type = e, this.prosemirrorView = null, this.mux = Y_(), this.mapping = t, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
			this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = gv(this, this.prosemirrorView.state));
		}, this.afterAllTransactions = () => {
			this.beforeTransactionSelection = null;
		}, this._domSelectionInView = null;
	}
	get _tr() {
		return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
	}
	_isLocalCursorInView() {
		return this.prosemirrorView.hasFocus() ? (Gp && this._domSelectionInView === null && (om(0, () => {
			this._domSelectionInView = null;
		}), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
	}
	_isDomSelectionInView() {
		let e = this.prosemirrorView._root.getSelection();
		if (e == null || e.anchorNode == null) return !1;
		let t = this.prosemirrorView._root.createRange();
		t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset), t.getClientRects().length === 0 && t.startContainer && t.collapsed && t.selectNodeContents(t.startContainer);
		let n = t.getBoundingClientRect(), r = rm.documentElement;
		return n.bottom >= 0 && n.right >= 0 && n.left <= (window.innerWidth || r.clientWidth || 0) && n.top <= (window.innerHeight || r.clientHeight || 0);
	}
	renderSnapshot(e, t) {
		t ||= _h(Pm(), /* @__PURE__ */ new Map()), this.prosemirrorView.dispatch(this._tr.setMeta($, {
			snapshot: e,
			prevSnapshot: t
		}));
	}
	unrenderSnapshot() {
		this.mapping.clear(), this.mux(() => {
			let e = this.type.toArray().map((e) => yv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), t = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new cr(Qn.from(e), 0, 0));
			t.setMeta($, {
				snapshot: null,
				prevSnapshot: null
			}), this.prosemirrorView.dispatch(t);
		});
	}
	_forceRerender() {
		this.mapping.clear(), this.mux(() => {
			let e = this.beforeTransactionSelection === null ? this.prosemirrorView.state.selection : null, t = this.type.toArray().map((e) => yv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), n = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new cr(Qn.from(t), 0, 0));
			if (e) {
				let t = pf(mf(e.anchor, 0), n.doc.content.size), r = pf(mf(e.head, 0), n.doc.content.size);
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
		if (e ||= vh(this.doc), e instanceof Uint8Array || t instanceof Uint8Array) {
			if ((!(e instanceof Uint8Array) || !(t instanceof Uint8Array)) && rp(), r = new Bm({ gc: !1 }), $m(r, t), t = vh(r), $m(r, e), e = vh(r), i._item === null) {
				let e = Array.from(this.doc.share.keys()).find((e) => this.doc.share.get(e) === this.type);
				i = r.getXmlFragment(e);
			} else {
				let e = r.store.clients.get(i._item.id.client) ?? [];
				i = e[wh(e, i._item.id.clock)].content.type;
			}
		}
		this.mapping.clear(), this.mux(() => {
			r.transact((r) => {
				let a = n.permanentUserData;
				a && a.dss.forEach((e) => {
					Om(r, e, (e) => {});
				});
				let o = (e, t) => {
					let r = e === "added" ? a.getUserByClientId(t.client) : a.getUserByDeletedId(t);
					return {
						user: r,
						type: e,
						color: pv(n.colorMapping, n.colors, r)
					};
				}, s = dg(i, new gh(t.ds, e.sv)).map((n) => !n._item.deleted || dv(n._item, e) || dv(n._item, t) ? yv(n, this.prosemirrorView.state.schema, {
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
			Om(t, t.deleteSet, (e) => {
				if (e.constructor === Q) {
					let t = e.content.type;
					t && this.mapping.delete(t);
				}
			}), t.changed.forEach(e), t.changedParentTypes.forEach(e);
			let n = this.type.toArray().map((e) => vv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), r = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new cr(Qn.from(n), 0, 0));
			hv(r, this.beforeTransactionSelection, this), r = r.setMeta($, {
				isChangeOrigin: !0,
				isUndoRedoOperation: t.origin instanceof Vh
			}), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && r.scrollIntoView(), this.prosemirrorView.dispatch(r);
		});
	}
	_prosemirrorChanged(e) {
		this.doc.transact(() => {
			Lv(this.doc, this.type, e, this), this.beforeTransactionSelection = gv(this, this.prosemirrorView.state);
		}, $);
	}
	initView(e) {
		this.prosemirrorView != null && this.destroy(), this.prosemirrorView = e, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
	}
	destroy() {
		this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
	}
}, vv = (e, t, n, r, i, a) => {
	let o = n.mapping.get(e);
	if (o === void 0) {
		if (e instanceof t_) return yv(e, t, n, r, i, a);
		throw np();
	}
	return o;
}, yv = (e, t, n, r, i, a) => {
	let o = [], s = (e) => {
		if (e instanceof t_) {
			let s = vv(e, t, n, r, i, a);
			s !== null && o.push(s);
		} else {
			let s = e._item.right?.content?.type;
			s instanceof Xg && !s._item.deleted && s._item.id.client === s.doc.clientID && (e.applyDelta([{ retain: e.length }, ...s.toDelta()]), s.doc.transact((e) => {
				s._item.delete(e);
			}));
			let c = bv(e, t, n, r, i, a);
			c !== null && c.forEach((e) => {
				e !== null && o.push(e);
			});
		}
	};
	r === void 0 || i === void 0 ? e.toArray().forEach(s) : dg(e, new gh(i.ds, r.sv)).forEach(s);
	try {
		let s = e.getAttributes(r);
		r !== void 0 && (dv(e._item, r) ? dv(e._item, i) || (s.ychange = a ? a("added", e._item.id) : { type: "added" }) : s.ychange = a ? a("removed", e._item.id) : { type: "removed" });
		let c = t.node(e.nodeName, s, o);
		return n.mapping.set(e, c), c;
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, $), n.mapping.delete(e), null;
	}
}, bv = (e, t, n, r, i, a) => {
	let o = [], s = e.toDelta(r, i, a);
	try {
		for (let e = 0; e < s.length; e++) {
			let n = s[e];
			o.push(t.text(n.insert, Fv(n.attributes, t)));
		}
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, $), null;
	}
	return o;
}, xv = (e, t) => {
	let n = new o_(), r = e.map((e) => ({
		insert: e.text,
		attributes: Iv(e.marks, t)
	}));
	return n.applyDelta(r), t.mapping.set(n, e), n;
}, Sv = (e, t) => {
	let n = new t_(e.type.name);
	for (let t in e.attrs) {
		let r = e.attrs[t];
		r !== null && t !== "ychange" && n.setAttribute(t, r);
	}
	return n.insert(0, Ev(e).map((e) => Cv(e, t))), t.mapping.set(n, e), n;
}, Cv = (e, t) => e instanceof Array ? xv(e, t) : Sv(e, t), wv = (e) => typeof e == "object" && !!e, Tv = (e, t) => {
	let n = Object.keys(e).filter((t) => e[t] !== null), r = n.length === (t == null ? 0 : Object.keys(t).filter((e) => t[e] !== null).length);
	for (let i = 0; i < n.length && r; i++) {
		let a = n[i], o = e[a], s = t[a];
		r = a === "ychange" || o === s || wv(o) && wv(s) && Tv(o, s);
	}
	return r;
}, Ev = (e) => {
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
}, Dv = (e, t) => {
	let n = e.toDelta();
	return n.length === t.length && n.every((e, n) => e.insert === t[n].text && Np(e.attributes || {}).length === t[n].marks.length && Lp(e.attributes, (e, r) => {
		let i = Pv(r), a = t[n].marks;
		return Tv(e, a.find((e) => e.type.name === i)?.attrs);
	}));
}, Ov = (e, t) => {
	if (e instanceof t_ && !(t instanceof Array) && Rv(e, t)) {
		let n = Ev(t);
		return e._length === n.length && Tv(e.getAttributes(), t.attrs) && e.toArray().every((e, t) => Ov(e, n[t]));
	}
	return e instanceof o_ && t instanceof Array && Dv(e, t);
}, kv = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every((e, n) => t[n] === e), Av = (e, t, n) => {
	let r = e.toArray(), i = Ev(t), a = i.length, o = r.length, s = pf(o, a), c = 0, l = 0, u = !1;
	for (; c < s; c++) {
		let e = r[c], t = i[c];
		if (kv(n.mapping.get(e), t)) u = !0;
		else if (!Ov(e, t)) break;
	}
	for (; c + l < s; l++) {
		let e = r[o - l - 1], t = i[a - l - 1];
		if (kv(n.mapping.get(e), t)) u = !0;
		else if (!Ov(e, t)) break;
	}
	return {
		equalityFactor: c + l,
		foundMappedChild: u
	};
}, jv = (e) => {
	let t = "", n = e._start, r = {};
	for (; n !== null;) n.deleted || (n.countable && n.content instanceof E_ ? t += n.content.str : n.content instanceof Z && (r[n.content.key] = null)), n = n.right;
	return {
		str: t,
		nAttrs: r
	};
}, Mv = (e, t, n) => {
	n.mapping.set(e, t);
	let { nAttrs: r, str: i } = jv(e), a = t.map((e) => ({
		insert: e.text,
		attributes: Object.assign({}, r, Iv(e.marks, n))
	})), { insert: o, remove: s, index: c } = Q_(i, a.map((e) => e.insert).join(""));
	e.delete(c, s), e.insert(c, o), e.applyDelta(a.map((e) => ({
		retain: e.insert.length,
		attributes: e.attributes
	})));
}, Nv = /(.*)(--[a-zA-Z0-9+/=]{8})$/, Pv = (e) => Nv.exec(e)?.[1] ?? e, Fv = (e, t) => {
	let n = [];
	for (let r in e) n.push(t.mark(Pv(r), e[r]));
	return n;
}, Iv = (e, t) => {
	let n = {};
	return e.forEach((e) => {
		if (e.type.name !== "ychange") {
			let r = ef(t.isOMark, e.type, () => !e.type.excludes(e.type));
			n[r ? `${e.type.name}--${uv(e.toJSON())}` : e.type.name] = e.attrs;
		}
	}), n;
}, Lv = (e, t, n, r) => {
	if (t instanceof t_ && t.nodeName !== n.type.name) throw Error("node name mismatch!");
	if (r.mapping.set(t, n), t instanceof t_) {
		let e = t.getAttributes(), r = n.attrs;
		for (let n in r) r[n] === null ? t.removeAttribute(n) : e[n] !== r[n] && n !== "ychange" && t.setAttribute(n, r[n]);
		for (let n in e) r[n] === void 0 && t.removeAttribute(n);
	}
	let i = Ev(n), a = i.length, o = t.toArray(), s = o.length, c = pf(a, s), l = 0, u = 0;
	for (; l < c; l++) {
		let e = o[l], t = i[l];
		if (!kv(r.mapping.get(e), t)) {
			if (Ov(e, t)) r.mapping.set(e, t);
			else break;
		}
	}
	for (; u + l + 1 < c; u++) {
		let e = o[s - u - 1], t = i[a - u - 1];
		if (!kv(r.mapping.get(e), t)) {
			if (Ov(e, t)) r.mapping.set(e, t);
			else break;
		}
	}
	e.transact(() => {
		for (; s - l - u > 0 && a - l - u > 0;) {
			let n = o[l], c = i[l], d = o[s - u - 1], f = i[a - u - 1];
			if (n instanceof o_ && c instanceof Array) Dv(n, c) || Mv(n, c, r), l += 1;
			else {
				let i = n instanceof t_ && Rv(n, c), a = d instanceof t_ && Rv(d, f);
				if (i && a) {
					let e = Av(n, c, r), t = Av(d, f, r);
					e.foundMappedChild && !t.foundMappedChild ? a = !1 : !e.foundMappedChild && t.foundMappedChild || e.equalityFactor < t.equalityFactor ? i = !1 : a = !1;
				}
				i ? (Lv(e, n, c, r), l += 1) : a ? (Lv(e, d, f, r), u += 1) : (r.mapping.delete(t.get(l)), t.delete(l, 1), t.insert(l, [Cv(c, r)]), l += 1);
			}
		}
		let n = s - l - u;
		if (s === 1 && a === 0 && o[0] instanceof o_ ? (r.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : n > 0 && (t.slice(l, l + n).forEach((e) => r.mapping.delete(e)), t.delete(l, n)), l + u < a) {
			let e = [];
			for (let t = l; t < a - u; t++) e.push(Cv(i[t], r));
			t.insert(l, e);
		}
	}, $);
}, Rv = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, zv = (e, t, n) => {
	if (e === 0) return ph(t, 0, t.length === 0 ? -1 : 0);
	let r = t._first === null ? null : t._first.content.type;
	for (; r !== null && t !== r;) {
		if (r instanceof o_) {
			if (r._length >= e) return ph(r, e, t.length === 0 ? -1 : 0);
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
				if (e === 1 && r._length === 0 && i > 1) return new lh(r._item === null ? null : r._item.id, r._item === null ? sh(r) : null, null);
				if (e -= i, r._item !== null && r._item.next !== null) r = r._item.next.content.type;
				else {
					if (e === 0) return r = r._item === null ? r : r._item.parent, new lh(r._item === null ? null : r._item.id, r._item === null ? sh(r) : null, null);
					do
						r = r._item.parent, e--;
					while (r !== t && r._item.next === null);
					r !== t && (r = r._item.next.content.type);
				}
			}
		}
		if (r === null) throw rp();
		if (e === 0 && r.constructor !== o_ && r !== t) return Bv(r._item.parent, r._item);
	}
	return ph(t, t._length, t.length === 0 ? -1 : 0);
}, Bv = (e, t) => {
	let n = null, r = null;
	return e._item === null ? r = sh(e) : n = q(e._item.id.client, e._item.id.clock), new lh(n, r, t.id);
}, Vv = (e, t, n, r) => {
	let i = hh(n, e);
	if (i === null || i.type !== t && !ch(t, i.type._item)) return null;
	let a = i.type, o = 0;
	if (a.constructor === o_) o = i.index;
	else if (a._item === null || !a._item.deleted) {
		let e = a._first, t = 0;
		for (; t < a._length && t < i.index && e !== null;) {
			if (!e.deleted) {
				let n = e.content.type;
				t++, n instanceof o_ ? o += n._length : o += r.get(n).nodeSize;
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
				t.deleted || (e instanceof o_ ? o += e._length : o += r.get(e).nodeSize), t = t.right;
			}
		}
		a = e;
	}
	return o - 1;
};
function Hv(e) {
	let t = e.toArray(), n = (e) => {
		let t;
		if (e instanceof o_) t = e.toDelta().map((e) => {
			let t = {
				type: "text",
				text: e.insert
			};
			return e.attributes && (t.marks = Object.keys(e.attributes).map((t) => {
				let n = e.attributes[t], r = { type: Pv(t) };
				return Object.keys(n) && (r.attrs = n), r;
			})), t;
		});
		else if (e instanceof t_) {
			t = { type: e.nodeName };
			let r = e.getAttributes();
			Object.keys(r).length && (t.attrs = r);
			let i = e.toArray();
			i.length && (t.content = i.map(n).flat());
		} else rp();
		return t;
	};
	return {
		type: "doc",
		content: t.map(n)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/y-prosemirror@1.3.6_prosemirror-model@1.25.0_prosemirror-state@1.4.3_prosemirror-view@1_31ec72f916c667df313c22d35cf8a5eb/node_modules/y-prosemirror/src/plugins/undo-plugin.js
var Uv = (e) => $_.getState(e)?.undoManager?.undo() != null, Wv = (e) => $_.getState(e)?.undoManager?.redo() != null, Gv = /* @__PURE__ */ new Set(["paragraph"]), Kv = (e, t) => !(e instanceof Q) || !(e.content instanceof I_) || !(e.content.type instanceof Xg || e.content.type instanceof t_ && t.has(e.content.type.nodeName)) || e.content.type._length === 0, qv = ({ protectedNodes: e = Gv, trackedOrigins: t = [], undoManager: n = null } = {}) => new ur({
	key: $_,
	state: {
		init: (r, i) => {
			let a = $.getState(i), o = n || new Vh(a.type, {
				trackedOrigins: new Set([$].concat(t)),
				deleteFilter: (t) => Kv(t, e),
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
				prevSel: gv(i, n),
				hasUndoOps: o,
				hasRedoOps: s
			} : o !== t.hasUndoOps || s !== t.hasRedoOps ? Object.assign({}, t, {
				hasUndoOps: a.undoStack.length > 0,
				hasRedoOps: a.redoStack.length > 0
			}) : t;
		}
	},
	view: (e) => {
		let t = $.getState(e.state), n = $_.getState(e.state).undoManager;
		return n.on("stack-item-added", ({ stackItem: n }) => {
			let r = t.binding;
			r && n.meta.set(r, $_.getState(e.state).prevSel);
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
			undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), $_.getState(t).undoManager.undoStack.length === 0 ? !1 : !n || Uv(t)),
			redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), $_.getState(t).undoManager.redoStack.length === 0 ? !1 : !n || Wv(t))
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
		let t = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = qv(this.options.yUndoOptions), r = n.spec.view;
		n.spec.view = (e) => {
			let { undoManager: t } = $_.getState(e.state);
			t.restore &&= (t.restore(), () => {});
			let n = r ? r(e) : void 0;
			return { destroy: () => {
				let e = t.trackedOrigins.has(t), r = t._observers;
				t.restore = () => {
					e && t.trackedOrigins.add(t), t.doc.on("afterTransaction", t.afterTransactionHandler), t._observers = r;
				}, n?.destroy && n.destroy();
			} };
		};
		let i = mv(t, {
			...this.options.ySyncOptions,
			onFirstRender: this.options.onFirstRender
		});
		return this.editor.options.enableContentCheck && ((e = t.doc) == null || e.on("beforeTransaction", () => {
			try {
				let e = Hv(t);
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
function Jv(e) {
	return !!e.getMeta($);
}
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-node-range@2.24.0_@tiptap+core@2.24.0_@tiptap+pm@2.24.0__@tiptap+pm@2.24.0/node_modules/@tiptap/extension-node-range/dist/index.js
function Yv(e) {
	if (!e.length) return mr.empty;
	let t = [], n = e[0].$from.node(0);
	return e.forEach((e) => {
		let n = e.$from.pos, r = e.$from.nodeAfter;
		r && t.push(lr.node(n, n + r.nodeSize, { class: "ProseMirror-selectednoderange" }));
	}), mr.create(n, t);
}
function Xv(e, t, n) {
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
var Zv = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		return new Qv(e.resolve(this.anchor), e.resolve(this.head));
	}
}, Qv = class e extends Zn {
	constructor(e, t, n, r = 1) {
		let { doc: i } = e, a = e === t, o = e.pos === i.content.size && t.pos === i.content.size, s = a && !o ? i.resolve(t.pos + (r > 0 ? 1 : -1)) : t, c = a && o ? i.resolve(e.pos - (r > 0 ? 1 : -1)) : e, l = Xv(c.min(s), c.max(s), n), u = s.pos >= e.pos ? l[0].$from : l[l.length - 1].$to, d = s.pos >= e.pos ? l[l.length - 1].$to : l[0].$from;
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
		return new Zv(this.anchor, this.head);
	}
};
Qv.prototype.visible = !1;
function $v(e) {
	return e instanceof Qv;
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
				if (!$v(a)) {
					let e = Qv.create(i, s, c, t, -1);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendBackwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Shift-ArrowDown": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, selection: a, tr: o } = r, { anchor: s, head: c } = a;
				if (!$v(a)) {
					let e = Qv.create(i, s, c, t);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendForwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Mod-a": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, tr: a } = r, o = Qv.create(i, 0, i.content.size, t);
				return a.setSelection(o), n.dispatch(a), !0;
			}
		};
	},
	onSelectionUpdate() {
		let { selection: e } = this.editor.state;
		$v(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
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
						let c = Qv.create(r, o.pos, s.pos, this.options.depth);
						a.setSelection(c), e.dispatch(a);
					}, { once: !0 }), !1;
				} },
				decorations: (n) => {
					let { selection: r } = n, i = $v(r);
					if (e = !1, !t) return i ? (e = !0, Yv(r.ranges)) : null;
					let { $from: a, $to: o } = r;
					if (!i && a.sameParent(o)) return null;
					let s = Xv(a, o, this.options.depth);
					return s.length ? (e = !0, Yv(s)) : null;
				}
			}
		})];
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-drag-handle@2.24.0_@tiptap+core@2.24.0_@tiptap+pm@2.24.0__@tiptap+ext_234d04dbcc52d64c161f06b2d04b0cdb/node_modules/@tiptap/extension-drag-handle/dist/index.js
function ey(e) {
	let t = "", n = getComputedStyle(e);
	for (let e = 0; e < n.length; e += 1) t += `${n[e]}:${n.getPropertyValue(n[e])};`;
	return t;
}
function ty(e) {
	let t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], r = [t, ...Array.from(t.getElementsByTagName("*"))];
	return n.forEach((e, t) => {
		r[t].style.cssText = ey(e);
	}), t;
}
var ny = (e) => {
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
function ry(e, t) {
	return window.getComputedStyle(e)[t];
}
function iy(e = 0, t = 0, n = 0) {
	return Math.min(Math.max(e, t), n);
}
function ay(e, t, n) {
	let r = parseInt(ry(e.dom, "paddingLeft"), 10), i = parseInt(ry(e.dom, "paddingRight"), 10), a = parseInt(ry(e.dom, "borderLeftWidth"), 10), o = parseInt(ry(e.dom, "borderLeftWidth"), 10), s = e.dom.getBoundingClientRect();
	return {
		left: iy(t, s.left + r + a, s.right - i - o),
		top: n
	};
}
function oy(e) {
	var t;
	(t = e.parentNode) == null || t.removeChild(e);
}
function sy(e, t) {
	let { doc: n } = t.view.state, r = ny({
		editor: t,
		x: e.clientX,
		y: e.clientY,
		direction: "right"
	});
	if (!r.resultNode || r.pos === null) return [];
	let i = e.clientX, a = ay(t.view, i, e.clientY), o = t.view.posAtCoords(a);
	if (!o) return [];
	let { pos: s } = o;
	return n.resolve(s).parent ? Xv(n.resolve(r.pos), n.resolve(r.pos + 1), 0) : [];
}
function cy(e, t) {
	let { view: n } = t;
	if (!e.dataTransfer) return;
	let { empty: r, $from: i, $to: a } = n.state.selection, o = sy(e, t), s = Xv(i, a, 0), c = s.some((e) => o.find((t) => t.$from === e.$from && t.$to === e.$to)), l = r || !c ? o : s;
	if (!l.length) return;
	let { tr: u } = n.state, d = document.createElement("div"), f = l[0].$from.pos, p = l[l.length - 1].$to.pos, m = Qv.create(n.state.doc, f, p), h = m.content();
	l.forEach((e) => {
		let t = ty(n.nodeDOM(e.$from.pos));
		d.append(t);
	}), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), e.dataTransfer.clearData(), e.dataTransfer.setDragImage(d, 0, 0), n.dragging = {
		slice: h,
		move: !0
	}, u.setSelection(m), n.dispatch(u), document.addEventListener("drop", () => oy(d), { once: !0 });
}
var ly = (e, t) => {
	let n = e.resolve(t), { depth: r } = n;
	return r === 0 ? t : n.pos - n.parentOffset - 1;
}, uy = (e, t) => {
	let n = e.nodeAt(t), r = e.resolve(t), { depth: i } = r, a = n;
	for (; i > 0;) {
		let e = r.node(i);
		--i, i === 0 && (a = e);
	}
	return a;
}, dy = (e, t) => {
	let n = $.getState(e);
	return n ? zv(t, n.type, n.binding.mapping) : null;
}, fy = (e, t) => {
	let n = $.getState(e);
	return n ? Vv(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, py = (e, t) => {
	let n = t;
	for (; n && n.parentNode && n.parentNode !== e.dom;) n = n.parentNode;
	return n;
}, my = new hr("dragHandle"), hy = ({ pluginKey: e = my, element: t, editor: n, tippyOptions: r, onNodeChange: i }) => {
	let a = document.createElement("div"), o = null, s = !1, c = null, l = -1, u;
	return t.addEventListener("dragstart", (e) => {
		cy(e, n), setTimeout(() => {
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
					if (Jv(e)) {
						let e = fy(d, u);
						e !== l && (l = e);
					} else {
						let t = e.mapping.map(l);
						t !== l && (l = t, u = dy(d, l));
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
					if (p = py(e, p), p === e.dom || p?.nodeType !== 1) return;
					let m = e.posAtDOM(p, 0), h = uy(n.state.doc, m), g = ly(n.state.doc, m);
					c = h, l = g, u = dy(e.state, l), i?.({
						editor: n,
						node: c,
						pos: l
					}), o.setProps({ getReferenceClientRect: () => p.getBoundingClientRect() });
				},
				destroy() {
					o?.destroy(), t && oy(a);
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
				let a = ny({
					x: r.clientX,
					y: r.clientY,
					direction: "right",
					editor: n
				});
				if (!a.resultElement) return !1;
				let d = a.resultElement;
				if (d = py(e, d), d === e.dom || d?.nodeType !== 1) return !1;
				let f = e.posAtDOM(d, 0), p = uy(n.state.doc, f);
				if (p !== c) {
					let t = ly(n.state.doc, f);
					c = p, l = t, u = dy(e.state, l), i?.({
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
		return [hy({
			tippyOptions: this.options.tippyOptions,
			element: e,
			editor: this.editor,
			onNodeChange: this.options.onNodeChange
		})];
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@tiptap+extension-drag-handle-react@2.24.0_@tiptap+extension-drag-handle@2.24.0_@tiptap_ef8c8839ac22b6186dd6c01c5d1e1c6d/node_modules/@tiptap/extension-drag-handle-react/dist/index.js
var gy = (e) => {
	let { className: t = "drag-handle", children: n, editor: r, pluginKey: i = my, onNodeChange: a, tippyOptions: o } = e, [s, c] = R(null), l = L(null);
	return I(() => !s || r.isDestroyed ? () => {
		l.current = null;
	} : (l.current || (l.current = hy({
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
}, _y = (e) => typeof e == "object" && !!e && !Array.isArray(e), vy = (e, t) => {
	let n = _y(e.attrs) ? e.attrs : {};
	return {
		...e,
		attrs: {
			...n,
			id: t
		}
	};
}, yy = (e) => {
	let t = { ...e };
	if (t.type && hd(t.type) && _y(t.attrs) && "id" in t.attrs) {
		let { id: e, ...n } = t.attrs;
		t.attrs = Object.keys(n).length > 0 ? n : void 0;
	}
	return Array.isArray(t.content) && (t.content = t.content.map(yy)), t;
}, by = (e) => e.map(yy), xy = (e) => _y(e) ? e.type : void 0, Sy = (e, t) => {
	let n = yy(e);
	return n.type && hd(n.type) ? vy(n, t) : n;
}, Cy = (e, t) => t.length === 0 ? Qn.empty : Qn.fromArray(t.map((t) => e.schema.nodeFromJSON(t))), wy = (e, t) => new cr(Cy(e, t), 0, 0), Ty = (e, t) => {
	let n = bd(e, t);
	if (!n) throw new Dy(t);
	return n;
}, Ey = (e) => e.isEmpty ? {
	json: null,
	html: null
} : {
	json: e.getJSON(),
	html: e.getHTML()
}, Dy = class extends Error {
	code = "target_not_found";
	targetId;
	constructor(e) {
		super(`Could not find block node ${e} in the current editor document.`), this.name = "NotesTextEditorPatchTargetNotFoundError", this.targetId = e, Object.setPrototypeOf(this, new.target.prototype);
	}
}, Oy = class extends Error {
	code = "unsupported_patch_type";
	patchType;
	constructor(e) {
		super(`Unsupported NotesTextEditor patch type: ${String(e)}`), this.name = "NotesTextEditorUnsupportedPatchTypeError", this.patchType = e, Object.setPrototypeOf(this, new.target.prototype);
	}
}, ky = (e, t) => {
	switch (t.type) {
		case "top_level_prepend": {
			let n = wy(e, by(t.blocks)), r = e.state.tr.replace(0, 0, n);
			return r.docChanged && e.view.dispatch(r), Ey(e);
		}
		case "top_level_append": {
			let n = wy(e, by(t.blocks)), r = e.state.doc.content.size, i = e.state.tr.replace(r, r, n);
			return i.docChanged && e.view.dispatch(i), Ey(e);
		}
		case "insert_before": {
			let n = Ty(e, t.targetId), r = wy(e, by(t.blocks)), i = e.state.tr.replace(n.pos, n.pos, r);
			return i.docChanged && e.view.dispatch(i), Ey(e);
		}
		case "insert_after": {
			let n = Ty(e, t.targetId), r = n.pos + n.node.nodeSize, i = wy(e, by(t.blocks)), a = e.state.tr.replace(r, r, i);
			return a.docChanged && e.view.dispatch(a), Ey(e);
		}
		case "replace_block": {
			let n = Ty(e, t.targetId), r = e.schema.nodeFromJSON(Sy(t.block, t.targetId)), i = e.state.tr.replaceWith(n.pos, n.pos + n.node.nodeSize, r);
			return i.docChanged && e.view.dispatch(i), Ey(e);
		}
		case "replace_content": {
			let n = Ty(e, t.targetId), r = e.state.tr.replace(n.pos + 1, n.pos + n.node.nodeSize - 1, wy(e, by(t.content)));
			return r.docChanged && e.view.dispatch(r), Ey(e);
		}
		case "delete_block": {
			let n = Ty(e, t.targetId), r = e.state.tr.delete(n.pos, n.pos + n.node.nodeSize);
			return r.docChanged && e.view.dispatch(r), Ey(e);
		}
	}
	throw new Oy(xy(t));
}, Ay = ({ placeholder: e, translations: t, aiBlockConfig: n, imageUploadConfig: r, enhanceEnabled: i = !1 }) => [
	ar,
	nr,
	On,
	In,
	Jn,
	Rn,
	ir,
	xr,
	En,
	Fn,
	tr,
	Ln,
	Hn,
	Dn,
	yr,
	wn,
	zd,
	Zd,
	dd.configure({ currentConfig: n }),
	Ad,
	Kd,
	...r ? [Nd(r)] : [],
	...i ? [vr] : [],
	yd,
	sr,
	An(e),
	Vn(e),
	Yd({
		aiBlockConfig: n,
		translations: t,
		imageUploadConfig: r
	})
], jy = (e) => e.isVisible !== !1, My = (e) => "isVisible" in e ? e.isVisible !== !1 : !0, Ny = (e) => !!e && "items" in e, Py = (e) => !!e && "label" in e && !("items" in e), Fy = ({ primaryAction: e, secondaryActions: t = [], metadata: n = [], otherActions: r = [], status: i }) => {
	let a = [...i ? [{
		label: i.label,
		value: {
			type: "status",
			label: i.text,
			variant: i.variant
		},
		actions: i.actions,
		hideLabel: !0
	}] : [], ...n], o = t.filter(jy), s = r.filter(My), c = e && jy(e), l = o.length > 0, u = s.length > 0, d = l || u || c;
	return /* @__PURE__ */ z("div", {
		className: "flex flex-col",
		children: (a.length > 0 || d) && /* @__PURE__ */ B("div", {
			className: "flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center",
			children: [a.length > 0 && /* @__PURE__ */ z(g, { items: a }), /* @__PURE__ */ B("div", {
				className: "flex flex-shrink-0 flex-row items-center gap-2",
				children: [
					u && /* @__PURE__ */ z(ln, { items: s }),
					o.map((e, t) => y(e) ? /* @__PURE__ */ z(h, {
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
					c && Py(e) && /* @__PURE__ */ z(A, {
						label: e.label,
						onClick: e.onClick,
						variant: "default",
						icon: e.icon,
						disabled: e.disabled,
						tooltip: e.tooltip
					}),
					c && Ny(e) && /* @__PURE__ */ z(h, {
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
}, Iy = ({ errorType: e, onDismiss: t }) => {
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
					children: /* @__PURE__ */ z(mn, {
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
}, Ly = ({ value: e, onChange: t, placeholder: n, disabled: r = !1 }) => /* @__PURE__ */ z("div", {
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
}), Ry = jr(function({ onChange: e, placeholder: t, initialEditorState: n, readonly: r = !1, aiBlockConfig: i, imageUploadConfig: a, enhanceConfig: o, onTitleChange: l, primaryAction: d, secondaryActions: p, otherActions: m, metadata: h, status: g, alert: _, titlePlaceholder: v }, y) {
	let b = u(), x = L(null), S = L(null), C = Nr(), [w] = R(() => n?.content || ""), [T, E] = R(n?.title || ""), [D, ee] = R(null);
	I(() => {
		l && l(T);
	}, [T, l]);
	let te = L(!1), ne = Ir(() => a ? {
		...a,
		onError: (e) => {
			ee(e);
		}
	} : void 0, [a]), ie = Ir(() => Ay({
		placeholder: t,
		translations: b,
		aiBlockConfig: i,
		imageUploadConfig: ne,
		enhanceEnabled: !!o
	}), [
		t,
		b,
		i,
		ne,
		o
	]), O = jn({
		extensions: ie,
		content: w,
		onUpdate: ({ editor: t }) => {
			te.current || e(Ey(t));
		},
		onCreate: ({ editor: t }) => {
			if (vd(t.state.doc)) {
				te.current = !0;
				try {
					t.commands.setContent(t.getJSON());
				} finally {
					te.current = !1;
				}
				vd(t.state.doc) || e(Ey(t));
			}
		},
		editable: !r,
		shouldRerenderOnTransaction: !1
	}), ae = Bn(O, o), oe = F((e) => {
		te.current = !0;
		try {
			return e();
		} finally {
			te.current = !1;
		}
	}, []);
	Pr(y, () => ({
		clear: () => O?.commands.clearContent(),
		focus: () => O?.commands.focus(),
		setContent: (e) => O?.commands.setContent(e),
		applyPageDocumentPatch: (e) => O ? oe(() => ky(O, e)) : {
			json: null,
			html: null
		},
		insertAIBlock: () => {
			!O || !i || O.chain().focus().insertContentAt(O.state.doc.content.size, [{
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
			O && O.chain().focus().insertContentAt(O.state.doc.content.size, [{
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
			O && O.chain().focus().insertContentAt(O.state.doc.content.size, e).run();
		},
		insertImage: (e) => {
			!O || !ne || Pd(O, e, ne);
		}
	}));
	let se = Ir(() => ({ offset: [0, 5] }), []), ce = F(({ node: e, pos: t }) => {
		S.current = e ? {
			pos: t,
			nodeSize: e.nodeSize
		} : null;
	}, []), le = F(() => {
		let e = S.current;
		if (!e || !O) return;
		let { pos: t, nodeSize: n } = e, r = O.state.doc.nodeAt(t);
		if (r && r.content.size === 0) O.chain().focus().setTextSelection(t + 1).insertContent("/").run();
		else {
			let e = t + n;
			O.chain().focus().insertContentAt(e, { type: "paragraph" }).setTextSelection(e + 1).insertContent("/").run();
		}
	}, [O]), ue = d || p && p.length > 0 || h && h.length > 0 || m && m.length > 0 || g, de = l || T;
	return O ? /* @__PURE__ */ B("div", {
		className: "relative flex h-full w-full flex-col",
		ref: x,
		id: C,
		children: [
			ue && /* @__PURE__ */ z(Fy, {
				primaryAction: d,
				secondaryActions: p,
				metadata: h,
				otherActions: m,
				status: g
			}),
			D && /* @__PURE__ */ z(Iy, {
				errorType: D,
				onDismiss: () => ee(null)
			}),
			/* @__PURE__ */ z(s, { children: ae.error && !ae.isLoading && /* @__PURE__ */ z(f.div, {
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
					error: ae.error,
					onDismiss: ae.clearError
				})
			}, "enhance-error") }),
			/* @__PURE__ */ B(Bt, {
				className: "notes-text-editor-scroll h-full gap-6",
				children: [
					_ && /* @__PURE__ */ z("div", {
						className: "mx-auto w-full max-w-[824px] sm:px-14 px-0",
						children: /* @__PURE__ */ z(Or, { ..._ })
					}),
					de && /* @__PURE__ */ z(Ly, {
						value: T,
						onChange: l ? E : void 0,
						placeholder: v,
						disabled: !l || r
					}),
					/* @__PURE__ */ B("div", {
						className: "notes-text-editor h-full",
						onClick: () => O.commands.focus(),
						children: [!r && /* @__PURE__ */ z(gy, {
							editor: O,
							tippyOptions: se,
							onNodeChange: ce,
							children: /* @__PURE__ */ B("div", {
								className: "flex flex-row",
								children: [/* @__PURE__ */ z(pe, {
									compact: !0,
									variant: "ghost",
									size: "sm",
									className: "text-f1-foreground-tertiary",
									onClick: le,
									label: "Add paragraph",
									hideLabel: !0,
									icon: be
								}), /* @__PURE__ */ z("div", {
									className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
									draggable: !0,
									"data-drag-handle": !0,
									children: /* @__PURE__ */ z(c, {
										icon: re,
										size: "xs"
									})
								})]
							})
						}), /* @__PURE__ */ z(Un, {
							editor: O,
							className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
						})]
					})
				]
			}),
			!r && /* @__PURE__ */ z(Sr, {
				editorId: C,
				editor: O,
				disableButtons: ae.disableButtons,
				isToolbarOpen: !1,
				isFullscreen: !1,
				plainHtmlMode: !1,
				enhance: ae
			})
		]
	}) : null;
}), zy = ({ withHeader: e = !1, withTitle: t = !0, withToolbar: n = !0 }) => /* @__PURE__ */ B("div", {
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
		/* @__PURE__ */ B(Bt, {
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
}), By = l("F0NotesTextEditor", Cr(Ry, zy)), Vy = By, Hy = zy, Uy = jr(({ header: e, actions: t, open: n, onClose: r }, i) => {
	let [a, o] = R(!1), s = F(() => {
		o(!0);
		let e = setTimeout(() => {
			r?.(), o(!1);
		}, 200);
		return () => clearTimeout(e);
	}, [r]);
	return /* @__PURE__ */ z(b, {
		open: n && !a,
		onOpenChange: (e) => !e && s?.(),
		children: /* @__PURE__ */ B(_, {
			ref: i,
			className: "bottom-3 top-auto max-w-[400px]",
			children: [/* @__PURE__ */ B(w, {
				className: "flex flex-col gap-4 px-4 py-5",
				children: [/* @__PURE__ */ z(mn, {
					type: e.type,
					size: "lg"
				}), /* @__PURE__ */ B("div", {
					className: "flex flex-col gap-0.5",
					children: [/* @__PURE__ */ z(v, {
						className: "text-xl sm:text-lg",
						children: e.title
					}), /* @__PURE__ */ z(C, {
						className: "text-lg sm:text-base",
						children: e.description
					})]
				})]
			}), t && /* @__PURE__ */ B(ee, {
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
Uy.displayName = "Dialog";
var Wy = a(i({
	name: "Dialog",
	type: "info"
}, l("Dialog", Uy))), Gy = ({ avatar: e, title: t, description: n, primaryAction: r, secondaryActions: i, otherActions: a, status: o, metadata: s, deactivated: c, metadataRowGap: l, showBottomBorder: u, onClose: d }) => /* @__PURE__ */ z(x, {
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
}), Ky = [
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
], qy = jr((e, t) => {
	let n = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, r = Nr();
	return /* @__PURE__ */ B("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		ref: t,
		...e,
		children: [/* @__PURE__ */ z("defs", { children: Ky.map((e) => /* @__PURE__ */ z("clipPath", {
			id: `${r}-${e.id}`,
			children: /* @__PURE__ */ z("path", { d: e.path })
		}, e.id)) }), n ? Ky.map((e) => /* @__PURE__ */ z("path", {
			d: e.path,
			fill: "currentColor"
		}, e.id)) : Ky.map((e) => /* @__PURE__ */ z("foreignObject", {
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
function Jy({ title: e, description: t, onClick: n, onClose: r, isVisible: i, dismissable: a = !1, trackVisibility: o, type: s, ...l }) {
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
				children: [/* @__PURE__ */ B(Rr, { children: [s === "one-campaign" ? /* @__PURE__ */ z("div", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ z(c, {
						icon: qy,
						size: "lg",
						className: "!h-8 !w-8"
					})
				}) : /* @__PURE__ */ z("div", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ z(bn, {
						module: l.module,
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
						icon: an,
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
var Yy = a(Jy), Xy = jr(function({ title: e, subtitle: t, mediaUrl: n, primaryAction: r, secondaryAction: i, onClose: a, isLoading: o = !1, children: s, variant: c = "default" }, l) {
	let u = n?.includes(".mp4"), [d, f] = R(!1);
	return o ? /* @__PURE__ */ z(Zy, { ref: l }) : d ? null : /* @__PURE__ */ B("div", {
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
					className: m("flex w-full flex-col gap-1", c === "default" ? "sm:max-w-lg" : void 0),
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
					icon: an,
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
}), Zy = jr(function(e, t) {
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
}), Qy = a(Cr(Xy, Zy));
Qy.displayName = "BaseBanner";
//#endregion
//#region src/components/F0ButtonToggleGroup/index.ts
var $y = a(l("F0ButtonToggleGroup", (e) => {
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
	let h = Ir(() => t.map((e) => ({
		...e,
		disabled: c || e.disabled
	})), [t, c]), g = r ? d : [d];
	return /* @__PURE__ */ z(Dr, {
		...r ? {
			type: "multiple",
			value: d
		} : {
			type: "single",
			value: d
		},
		onValueChange: p,
		disabled: c,
		className: m("flex flex-wrap items-center justify-center gap-1", u && "w-full"),
		children: h.map((e) => /* @__PURE__ */ z(Er, {
			value: e.value,
			asChild: !0,
			className: m(u && "flex-1"),
			children: /* @__PURE__ */ z(on, {
				...e,
				size: n,
				withBorder: l,
				variant: s,
				className: m(u && "w-full", e.className),
				selected: !!g?.includes(e.value),
				onSelectedChange: () => {}
			})
		}, e.value))
	});
})), eb = [], tb = eb, nb = /* @__PURE__ */ new Set(), rb = 0, ib = /* @__PURE__ */ new Set(), ab = /* @__PURE__ */ new Set(), ob = () => {
	for (let e of nb) e();
}, sb = () => {
	for (let e of ab) e();
}, cb = {
	subscribe(e) {
		return nb.add(e), () => {
			nb.delete(e);
		};
	},
	getSnapshot() {
		return tb;
	},
	getServerSnapshot() {
		return eb;
	},
	addItem(e) {
		let t = tb.findIndex((t) => t.id === e.id);
		if (t !== -1) {
			let n = [...tb];
			n[t] = e, tb = n;
		} else tb = [...tb, e];
		ob();
	},
	removeItem(e) {
		tb.some((t) => t.id === e) && (tb = tb.filter((t) => t.id !== e), ob());
	},
	clear() {
		tb.length !== 0 && (tb = eb, ob());
	},
	acquireRenderer() {
		rb += 1;
		let e = rb;
		return ib.add(e), sb(), {
			id: e,
			release() {
				ib.delete(e), sb();
			}
		};
	},
	getActiveRendererId() {
		let e = null;
		for (let t of ib) (e === null || t < e) && (e = t);
		return e;
	},
	subscribeRenderer(e) {
		return ab.add(e), () => {
			ab.delete(e);
		};
	},
	hasProvider() {
		return ib.size > 0;
	}
}, lb = 5e3, ub = 1e4, db = (e) => {
	process.env.NODE_ENV !== "production" && !cb.hasProvider() && console.warn(`[f0] ${e} was called but no <F0Provider> is mounted, so the toast will not render. Make sure your app is wrapped in <F0Provider>.`);
}, fb = {
	open: (e) => {
		let t = e.id ?? Mn();
		db("toasts.open()");
		let n = e.actions != null, r = e.persistent === !0 || e.variant === "loading";
		return cb.addItem({
			duration: r ? void 0 : n ? ub : lb,
			...e,
			id: t,
			onClose: () => cb.removeItem(t)
		}), t;
	},
	close: (e) => {
		cb.removeItem(e);
	},
	closeAll: () => {
		cb.clear();
	}
}, pb = 12, mb = 6, hb = ({ target: e, title: t, description: n, actionLabel: r, onAction: i, onClose: a, step: o, arrow: s = !0, side: c = "bottom", align: l = "center", sideOffset: d = s ? 8 : 4, container: f }) => {
	let p = u(), h = L(null), g = L(null), _ = Nr(), v = `${_}-title`, y = `${_}-description`, b = Ir(() => ({ current: e }), [e]), x = L(o?.current);
	I(() => {
		x.current !== o?.current && (x.current = o?.current, h.current?.focus());
	}, [o?.current]);
	let S = !o || o.current >= o.total, C = r ?? (S ? p.coachmark.done : p.coachmark.next);
	return /* @__PURE__ */ B(rn, {
		open: !0,
		onOpenChange: (e) => {
			e || a();
		},
		children: [/* @__PURE__ */ z($t, { virtualRef: b }), /* @__PURE__ */ B(Zt, {
			ref: h,
			container: f,
			side: c,
			align: l,
			sideOffset: d,
			collisionPadding: 8,
			tabIndex: -1,
			"aria-labelledby": v,
			"aria-describedby": n ? y : void 0,
			onOpenAutoFocus: (e) => {
				e.preventDefault(), g.current = document.activeElement, h.current?.focus();
			},
			onCloseAutoFocus: (e) => {
				e.preventDefault();
				let t = g.current;
				g.current = null, t && t !== document.body && document.contains(t) && t.focus();
			},
			onInteractOutside: (e) => e.preventDefault(),
			className: m("w-72 overflow-visible rounded-lg border-none p-4", "shadow-lg backdrop-blur-sm", "bg-f1-background-inverse text-f1-foreground-inverse", "dark:bg-f1-background-tertiary"),
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
						}), /* @__PURE__ */ z(pe, {
							variant: "outline",
							icon: an,
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
					}), /* @__PURE__ */ z(pe, {
						variant: "outline",
						label: C,
						onClick: i,
						className: "ml-auto"
					})]
				})]
			}), s && /* @__PURE__ */ z(tn, {
				asChild: !0,
				width: pb,
				height: mb,
				children: /* @__PURE__ */ z("svg", {
					viewBox: `0 0 ${pb} ${mb}`,
					children: /* @__PURE__ */ z("path", {
						d: `M0 0L${pb / 2} ${mb}L${pb} 0Z`,
						className: "fill-f1-background-inverse dark:fill-f1-background-tertiary"
					})
				})
			})]
		})]
	});
};
hb.displayName = "F0Coachmark";
var gb = l("F0Coachmark", hb), _b = [], vb = _b, yb = /* @__PURE__ */ new Set(), bb = 0, xb = /* @__PURE__ */ new Set(), Sb = /* @__PURE__ */ new Set(), Cb = () => {
	for (let e of yb) e();
}, wb = () => {
	for (let e of Sb) e();
}, Tb = {
	subscribe(e) {
		return yb.add(e), () => {
			yb.delete(e);
		};
	},
	getSnapshot() {
		return vb;
	},
	getServerSnapshot() {
		return _b;
	},
	addItem(e) {
		let t = vb.findIndex((t) => t.id === e.id);
		if (t !== -1) {
			let n = [...vb];
			n[t] = e, vb = n;
		} else vb = [...vb, e];
		Cb();
	},
	removeItem(e) {
		vb.some((t) => t.id === e) && (vb = vb.filter((t) => t.id !== e), Cb());
	},
	clear() {
		vb.length !== 0 && (vb = _b, Cb());
	},
	acquireRenderer() {
		bb += 1;
		let e = bb;
		return xb.add(e), wb(), {
			id: e,
			release() {
				xb.delete(e), wb();
			}
		};
	},
	getActiveRendererId() {
		let e = null;
		for (let t of xb) (e === null || t < e) && (e = t);
		return e;
	},
	subscribeRenderer(e) {
		return Sb.add(e), () => {
			Sb.delete(e);
		};
	},
	hasProvider() {
		return xb.size > 0;
	}
}, Eb = process.env.NODE_ENV !== "production", Db = (e) => {
	if (typeof e != "string") return e.isConnected ? e : null;
	let t = document.querySelectorAll(e);
	return Eb && t.length > 1 && console.warn(`[f0] coachmarks: the selector "${e}" matched ${t.length} elements. Anchoring to the first one — use a selector that matches exactly one.`), t[0] ?? null;
}, Ob = (e) => {
	let [t, n] = R(null), r = L(null);
	return I(() => {
		let t = (e) => {
			e !== r.current && (r.current = e, n(e));
		};
		if (e === void 0 || typeof document > "u") {
			t(null);
			return;
		}
		t(Db(e)), Eb && r.current === null && typeof e == "string" && console.warn(`[f0] coachmarks: no element matches the selector "${e}" yet. The coachmark will show as soon as one does.`);
		let i = new MutationObserver(() => t(Db(e)));
		return i.observe(document.body, {
			childList: !0,
			subtree: !0
		}), () => i.disconnect();
	}, [e]), t;
}, kb = ({ item: e, container: t }) => {
	let [n, r] = R(0), i = Math.min(n, e.steps.length - 1), a = e.steps[i], o = i === e.steps.length - 1, s = Ob(a.targetElement), c = () => Tb.removeItem(e.id);
	return s ? /* @__PURE__ */ z(gb, {
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
}, Ab = ({ children: e, portalTarget: t = "#f0-overlay-root" }) => {
	let n = Lr(Tb.subscribe, Tb.getSnapshot, Tb.getServerSnapshot), r = L(null), i = Lr(Tb.subscribeRenderer, Tb.getActiveRendererId, () => null);
	I(() => {
		let { id: e, release: t } = Tb.acquireRenderer();
		return r.current = e, t;
	}, []);
	let a = i === r.current, [o, s] = R(null);
	I(() => {
		typeof document > "u" || s(document.querySelector(t));
	}, [t]);
	let c = n[0];
	return /* @__PURE__ */ B(Rr, { children: [a && c && /* @__PURE__ */ z(kb, {
		item: c,
		container: o
	}, c.id), e] });
}, jb = () => {
	let e = Tr();
	return { fireEmojiConfetti: F((t, n) => {
		let r = n.current;
		if (r) {
			let n = r.getBoundingClientRect(), i = n.left + n.width / 2, a = n.top;
			vn({
				particleCount: 20,
				gravity: 0,
				spread: 360,
				startVelocity: 10,
				ticks: 50,
				origin: {
					x: i / window.innerWidth,
					y: a / window.innerHeight
				},
				shapes: [vn.shapeFromText({
					text: t,
					scalar: 2
				})],
				scalar: 2,
				disableForReducedMotion: e
			});
		}
	}, [e]) };
};
//#endregion
export { zu as A, Yl as B, Ku as C, Lu as D, Iu as E, Eu as F, Ra as G, Za as H, Tu as I, Ta as J, za as K, bu as L, Uu as M, Bu as N, Hu as O, Nu as P, yu as R, Gu as S, Fu as T, Ga as U, Hs as V, Ba as W, Na as X, Ea as Y, Da as Z, Fd as _, cb as a, Ju as b, Yy as c, By as d, zy as f, Ld as g, Id as h, fb as i, Vu as j, Ru as k, Gy as l, Hy as m, Ab as n, $y as o, Vy as p, Ia as q, Tb as r, Qy as s, jb as t, Wy as u, ed as v, Wu as w, qu as x, Yu as y, vu as z };
